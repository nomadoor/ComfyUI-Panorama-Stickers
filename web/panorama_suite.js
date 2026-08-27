import * as Bo from "../../scripts/app.js";
import { app as yn } from "../../scripts/app.js";
import { api as on } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Nc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ft = {}, Fi = [], Xn = () => {
}, Jd = () => !1, Ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ms = (e) => e.startsWith("onUpdate:"), tn = Object.assign, kc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, m0 = Object.prototype.hasOwnProperty, nt = (e, t) => m0.call(e, t), Ue = Array.isArray, Li = (e) => Va(e) === "[object Map]", Zd = (e) => Va(e) === "[object Set]", Mf = (e) => Va(e) === "[object Date]", Be = (e) => typeof e == "function", Ct = (e) => typeof e == "string", Jn = (e) => typeof e == "symbol", lt = (e) => e !== null && typeof e == "object", Qd = (e) => (lt(e) || Be(e)) && Be(e.then) && Be(e.catch), eh = Object.prototype.toString, Va = (e) => eh.call(e), p0 = (e) => Va(e).slice(8, -1), th = (e) => Va(e) === "[object Object]", Pc = (e) => Ct(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, va = /* @__PURE__ */ Nc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ns = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, g0 = /-\w/g, sn = Ns(
  (e) => e.replace(g0, (t) => t.slice(1).toUpperCase())
), b0 = /\B([A-Z])/g, li = Ns(
  (e) => e.replace(b0, "-$1").toLowerCase()
), ks = Ns((e) => e.charAt(0).toUpperCase() + e.slice(1)), kl = Ns(
  (e) => e ? `on${ks(e)}` : ""
), Wn = (e, t) => !Object.is(e, t), Pl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, nh = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, y0 = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Nf;
const Ps = () => Nf || (Nf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Dt(e) {
  if (Ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = Ct(i) ? w0(i) : Dt(i);
      if (a)
        for (const l in a)
          t[l] = a[l];
    }
    return t;
  } else if (Ct(e) || lt(e))
    return e;
}
const v0 = /;(?![^(]*\))/g, _0 = /:([^]+)/, x0 = /\/\*[^]*?\*\//g;
function w0(e) {
  const t = {};
  return e.replace(x0, "").split(v0).forEach((n) => {
    if (n) {
      const i = n.split(_0);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function st(e) {
  let t = "";
  if (Ct(e))
    t = e;
  else if (Ue(e))
    for (let n = 0; n < e.length; n++) {
      const i = st(e[n]);
      i && (t += i + " ");
    }
  else if (lt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const S0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", M0 = /* @__PURE__ */ Nc(S0);
function rh(e) {
  return !!e || e === "";
}
function N0(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Ac(e[i], t[i]);
  return n;
}
function Ac(e, t) {
  if (e === t) return !0;
  let n = Mf(e), i = Mf(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Jn(e), i = Jn(t), n || i)
    return e === t;
  if (n = Ue(e), i = Ue(t), n || i)
    return n && i ? N0(e, t) : !1;
  if (n = lt(e), i = lt(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(t).length;
    if (a !== l)
      return !1;
    for (const f in e) {
      const d = e.hasOwnProperty(f), p = t.hasOwnProperty(f);
      if (d && !p || !d && p || !Ac(e[f], t[f]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ih = (e) => !!(e && e.__v_isRef === !0), mt = (e) => Ct(e) ? e : e == null ? "" : Ue(e) || lt(e) && (e.toString === eh || !Be(e.toString)) ? ih(e) ? mt(e.value) : JSON.stringify(e, ah, 2) : String(e), ah = (e, t) => ih(t) ? ah(e, t.value) : Li(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], l) => (n[Al(i, l) + " =>"] = a, n),
    {}
  )
} : Zd(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Al(n))
} : Jn(t) ? Al(t) : lt(t) && !Ue(t) && !th(t) ? String(t) : t, Al = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Jn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let dn;
class k0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = dn, !t && dn && (this.index = (dn.scopes || (dn.scopes = [])).push(
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
      const n = dn;
      try {
        return dn = this, t();
      } finally {
        dn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = dn, dn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (dn = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, i;
      for (n = 0, i = this.effects.length; n < i; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, i = this.cleanups.length; n < i; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, i = this.scopes.length; n < i; n++)
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
function P0() {
  return dn;
}
let ht;
const Cl = /* @__PURE__ */ new WeakSet();
class oh {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, dn && dn.active && dn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Cl.has(this) && (Cl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || lh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, kf(this), ch(this);
    const t = ht, n = Rn;
    ht = this, Rn = !0;
    try {
      return this.fn();
    } finally {
      uh(this), ht = t, Rn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ic(t);
      this.deps = this.depsTail = void 0, kf(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Cl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    tc(this) && this.run();
  }
  get dirty() {
    return tc(this);
  }
}
let sh = 0, _a, xa;
function lh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = xa, xa = e;
    return;
  }
  e.next = _a, _a = e;
}
function Cc() {
  sh++;
}
function Tc() {
  if (--sh > 0)
    return;
  if (xa) {
    let t = xa;
    for (xa = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; _a; ) {
    let t = _a;
    for (_a = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (i) {
          e || (e = i);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ch(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function uh(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Ic(i), A0(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function tc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (fh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function fh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ta) || (e.globalVersion = Ta, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !tc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ht, i = Rn;
  ht = e, Rn = !0;
  try {
    ch(e);
    const a = e.fn(e._value);
    (t.version === 0 || Wn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ht = n, Rn = i, uh(e), e.flags &= -3;
  }
}
function Ic(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Ic(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function A0(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Rn = !0;
const dh = [];
function gr() {
  dh.push(Rn), Rn = !1;
}
function br() {
  const e = dh.pop();
  Rn = e === void 0 ? !0 : e;
}
function kf(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ht;
    ht = void 0;
    try {
      t();
    } finally {
      ht = n;
    }
  }
}
let Ta = 0;
class C0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Dc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ht || !Rn || ht === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ht)
      n = this.activeLink = new C0(ht, this), ht.deps ? (n.prevDep = ht.depsTail, ht.depsTail.nextDep = n, ht.depsTail = n) : ht.deps = ht.depsTail = n, hh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ht.depsTail, n.nextDep = void 0, ht.depsTail.nextDep = n, ht.depsTail = n, ht.deps === n && (ht.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ta++, this.notify(t);
  }
  notify(t) {
    Cc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Tc();
    }
  }
}
function hh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        hh(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const nc = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ Symbol(
  ""
), rc = /* @__PURE__ */ Symbol(
  ""
), Ia = /* @__PURE__ */ Symbol(
  ""
);
function Zt(e, t, n) {
  if (Rn && ht) {
    let i = nc.get(e);
    i || nc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Dc()), a.map = i, a.key = n), a.track();
  }
}
function dr(e, t, n, i, a, l) {
  const f = nc.get(e);
  if (!f) {
    Ta++;
    return;
  }
  const d = (p) => {
    p && p.trigger();
  };
  if (Cc(), t === "clear")
    f.forEach(d);
  else {
    const p = Ue(e), y = p && Pc(n);
    if (p && n === "length") {
      const _ = Number(i);
      f.forEach((w, S) => {
        (S === "length" || S === Ia || !Jn(S) && S >= _) && d(w);
      });
    } else
      switch ((n !== void 0 || f.has(void 0)) && d(f.get(n)), y && d(f.get(Ia)), t) {
        case "add":
          p ? y && d(f.get("length")) : (d(f.get(Jr)), Li(e) && d(f.get(rc)));
          break;
        case "delete":
          p || (d(f.get(Jr)), Li(e) && d(f.get(rc)));
          break;
        case "set":
          Li(e) && d(f.get(Jr));
          break;
      }
  }
  Tc();
}
function Ni(e) {
  const t = /* @__PURE__ */ tt(e);
  return t === e ? t : (Zt(t, "iterate", Ia), /* @__PURE__ */ kn(e) ? t : t.map(Fn));
}
function As(e) {
  return Zt(e = /* @__PURE__ */ tt(e), "iterate", Ia), e;
}
function Bn(e, t) {
  return /* @__PURE__ */ yr(e) ? Bi(/* @__PURE__ */ Zr(e) ? Fn(t) : t) : Fn(t);
}
const T0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Tl(this, Symbol.iterator, (e) => Bn(this, e));
  },
  concat(...e) {
    return Ni(this).concat(
      ...e.map((t) => Ue(t) ? Ni(t) : t)
    );
  },
  entries() {
    return Tl(this, "entries", (e) => (e[1] = Bn(this, e[1]), e));
  },
  every(e, t) {
    return or(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return or(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Bn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return or(
      this,
      "find",
      e,
      t,
      (n) => Bn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return or(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return or(
      this,
      "findLast",
      e,
      t,
      (n) => Bn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return or(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return or(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Il(this, "includes", e);
  },
  indexOf(...e) {
    return Il(this, "indexOf", e);
  },
  join(e) {
    return Ni(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Il(this, "lastIndexOf", e);
  },
  map(e, t) {
    return or(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return sa(this, "pop");
  },
  push(...e) {
    return sa(this, "push", e);
  },
  reduce(e, ...t) {
    return Pf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Pf(this, "reduceRight", e, t);
  },
  shift() {
    return sa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return or(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return sa(this, "splice", e);
  },
  toReversed() {
    return Ni(this).toReversed();
  },
  toSorted(e) {
    return Ni(this).toSorted(e);
  },
  toSpliced(...e) {
    return Ni(this).toSpliced(...e);
  },
  unshift(...e) {
    return sa(this, "unshift", e);
  },
  values() {
    return Tl(this, "values", (e) => Bn(this, e));
  }
};
function Tl(e, t, n) {
  const i = As(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ kn(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.done || (l.value = n(l.value)), l;
  }), a;
}
const I0 = Array.prototype;
function or(e, t, n, i, a, l) {
  const f = As(e), d = f !== e && !/* @__PURE__ */ kn(e), p = f[t];
  if (p !== I0[t]) {
    const w = p.apply(e, l);
    return d ? Fn(w) : w;
  }
  let y = n;
  f !== e && (d ? y = function(w, S) {
    return n.call(this, Bn(e, w), S, e);
  } : n.length > 2 && (y = function(w, S) {
    return n.call(this, w, S, e);
  }));
  const _ = p.call(f, y, i);
  return d && a ? a(_) : _;
}
function Pf(e, t, n, i) {
  const a = As(e), l = a !== e && !/* @__PURE__ */ kn(e);
  let f = n, d = !1;
  a !== e && (l ? (d = i.length === 0, f = function(y, _, w) {
    return d && (d = !1, y = Bn(e, y)), n.call(this, y, Bn(e, _), w, e);
  }) : n.length > 3 && (f = function(y, _, w) {
    return n.call(this, y, _, w, e);
  }));
  const p = a[t](f, ...i);
  return d ? Bn(e, p) : p;
}
function Il(e, t, n) {
  const i = /* @__PURE__ */ tt(e);
  Zt(i, "iterate", Ia);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Rc(n[0]) ? (n[0] = /* @__PURE__ */ tt(n[0]), i[t](...n)) : a;
}
function sa(e, t, n = []) {
  gr(), Cc();
  const i = (/* @__PURE__ */ tt(e))[t].apply(e, n);
  return Tc(), br(), i;
}
const D0 = /* @__PURE__ */ Nc("__proto__,__v_isRef,__isVue"), mh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Jn)
);
function E0(e) {
  Jn(e) || (e = String(e));
  const t = /* @__PURE__ */ tt(this);
  return Zt(t, "has", e), t.hasOwnProperty(e);
}
class ph {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return i === (a ? l ? U0 : vh : l ? yh : bh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const f = Ue(t);
    if (!a) {
      let p;
      if (f && (p = T0[n]))
        return p;
      if (n === "hasOwnProperty")
        return E0;
    }
    const d = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ en(t) ? t : i
    );
    if ((Jn(n) ? mh.has(n) : D0(n)) || (a || Zt(t, "get", n), l))
      return d;
    if (/* @__PURE__ */ en(d)) {
      const p = f && Pc(n) ? d : d.value;
      return a && lt(p) ? /* @__PURE__ */ ac(p) : p;
    }
    return lt(d) ? a ? /* @__PURE__ */ ac(d) : /* @__PURE__ */ Cs(d) : d;
  }
}
class gh extends ph {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let l = t[n];
    const f = Ue(t) && Pc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ yr(l);
      if (!/* @__PURE__ */ kn(i) && !/* @__PURE__ */ yr(i) && (l = /* @__PURE__ */ tt(l), i = /* @__PURE__ */ tt(i)), !f && /* @__PURE__ */ en(l) && !/* @__PURE__ */ en(i))
        return y || (l.value = i), !0;
    }
    const d = f ? Number(n) < t.length : nt(t, n), p = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ en(t) ? t : a
    );
    return t === /* @__PURE__ */ tt(a) && (d ? Wn(i, l) && dr(t, "set", n, i) : dr(t, "add", n, i)), p;
  }
  deleteProperty(t, n) {
    const i = nt(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && dr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Jn(n) || !mh.has(n)) && Zt(t, "has", n), i;
  }
  ownKeys(t) {
    return Zt(
      t,
      "iterate",
      Ue(t) ? "length" : Jr
    ), Reflect.ownKeys(t);
  }
}
class O0 extends ph {
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
const R0 = /* @__PURE__ */ new gh(), F0 = /* @__PURE__ */ new O0(), L0 = /* @__PURE__ */ new gh(!0);
const ic = (e) => e, _o = (e) => Reflect.getPrototypeOf(e);
function $0(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, l = /* @__PURE__ */ tt(a), f = Li(l), d = e === "entries" || e === Symbol.iterator && f, p = e === "keys" && f, y = a[e](...i), _ = n ? ic : t ? Bi : Fn;
    return !t && Zt(
      l,
      "iterate",
      p ? rc : Jr
    ), tn(
      // inheriting all iterator properties
      Object.create(y),
      {
        // iterator protocol
        next() {
          const { value: w, done: S } = y.next();
          return S ? { value: w, done: S } : {
            value: d ? [_(w[0]), _(w[1])] : _(w),
            done: S
          };
        }
      }
    );
  };
}
function xo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function z0(e, t) {
  const n = {
    get(a) {
      const l = this.__v_raw, f = /* @__PURE__ */ tt(l), d = /* @__PURE__ */ tt(a);
      e || (Wn(a, d) && Zt(f, "get", a), Zt(f, "get", d));
      const { has: p } = _o(f), y = t ? ic : e ? Bi : Fn;
      if (p.call(f, a))
        return y(l.get(a));
      if (p.call(f, d))
        return y(l.get(d));
      l !== f && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Zt(/* @__PURE__ */ tt(a), "iterate", Jr), a.size;
    },
    has(a) {
      const l = this.__v_raw, f = /* @__PURE__ */ tt(l), d = /* @__PURE__ */ tt(a);
      return e || (Wn(a, d) && Zt(f, "has", a), Zt(f, "has", d)), a === d ? l.has(a) : l.has(a) || l.has(d);
    },
    forEach(a, l) {
      const f = this, d = f.__v_raw, p = /* @__PURE__ */ tt(d), y = t ? ic : e ? Bi : Fn;
      return !e && Zt(p, "iterate", Jr), d.forEach((_, w) => a.call(l, y(_), y(w), f));
    }
  };
  return tn(
    n,
    e ? {
      add: xo("add"),
      set: xo("set"),
      delete: xo("delete"),
      clear: xo("clear")
    } : {
      add(a) {
        const l = /* @__PURE__ */ tt(this), f = _o(l), d = /* @__PURE__ */ tt(a), p = !t && !/* @__PURE__ */ kn(a) && !/* @__PURE__ */ yr(a) ? d : a;
        return f.has.call(l, p) || Wn(a, p) && f.has.call(l, a) || Wn(d, p) && f.has.call(l, d) || (l.add(p), dr(l, "add", p, p)), this;
      },
      set(a, l) {
        !t && !/* @__PURE__ */ kn(l) && !/* @__PURE__ */ yr(l) && (l = /* @__PURE__ */ tt(l));
        const f = /* @__PURE__ */ tt(this), { has: d, get: p } = _o(f);
        let y = d.call(f, a);
        y || (a = /* @__PURE__ */ tt(a), y = d.call(f, a));
        const _ = p.call(f, a);
        return f.set(a, l), y ? Wn(l, _) && dr(f, "set", a, l) : dr(f, "add", a, l), this;
      },
      delete(a) {
        const l = /* @__PURE__ */ tt(this), { has: f, get: d } = _o(l);
        let p = f.call(l, a);
        p || (a = /* @__PURE__ */ tt(a), p = f.call(l, a)), d && d.call(l, a);
        const y = l.delete(a);
        return p && dr(l, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ tt(this), l = a.size !== 0, f = a.clear();
        return l && dr(
          a,
          "clear",
          void 0,
          void 0
        ), f;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    n[a] = $0(a, e, t);
  }), n;
}
function Ec(e, t) {
  const n = z0(e, t);
  return (i, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    nt(n, a) && a in i ? n : i,
    a,
    l
  );
}
const j0 = {
  get: /* @__PURE__ */ Ec(!1, !1)
}, V0 = {
  get: /* @__PURE__ */ Ec(!1, !0)
}, H0 = {
  get: /* @__PURE__ */ Ec(!0, !1)
};
const bh = /* @__PURE__ */ new WeakMap(), yh = /* @__PURE__ */ new WeakMap(), vh = /* @__PURE__ */ new WeakMap(), U0 = /* @__PURE__ */ new WeakMap();
function B0(e) {
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
function G0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : B0(p0(e));
}
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  return /* @__PURE__ */ yr(e) ? e : Oc(
    e,
    !1,
    R0,
    j0,
    bh
  );
}
// @__NO_SIDE_EFFECTS__
function K0(e) {
  return Oc(
    e,
    !1,
    L0,
    V0,
    yh
  );
}
// @__NO_SIDE_EFFECTS__
function ac(e) {
  return Oc(
    e,
    !0,
    F0,
    H0,
    vh
  );
}
function Oc(e, t, n, i, a) {
  if (!lt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = G0(e);
  if (l === 0)
    return e;
  const f = a.get(e);
  if (f)
    return f;
  const d = new Proxy(
    e,
    l === 2 ? i : n
  );
  return a.set(e, d), d;
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  return /* @__PURE__ */ yr(e) ? /* @__PURE__ */ Zr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Rc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ tt(t) : e;
}
function W0(e) {
  return !nt(e, "__v_skip") && Object.isExtensible(e) && nh(e, "__v_skip", !0), e;
}
const Fn = (e) => lt(e) ? /* @__PURE__ */ Cs(e) : e, Bi = (e) => lt(e) ? /* @__PURE__ */ ac(e) : e;
// @__NO_SIDE_EFFECTS__
function en(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function rs(e) {
  return Y0(e, !1);
}
function Y0(e, t) {
  return /* @__PURE__ */ en(e) ? e : new q0(e, t);
}
class q0 {
  constructor(t, n) {
    this.dep = new Dc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ tt(t), this._value = n ? t : Fn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ kn(t) || /* @__PURE__ */ yr(t);
    t = i ? t : /* @__PURE__ */ tt(t), Wn(t, n) && (this._rawValue = t, this._value = i ? t : Fn(t), this.dep.trigger());
  }
}
function Ir(e) {
  return /* @__PURE__ */ en(e) ? e.value : e;
}
const X0 = {
  get: (e, t, n) => t === "__v_raw" ? e : Ir(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ en(a) && !/* @__PURE__ */ en(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function _h(e) {
  return /* @__PURE__ */ Zr(e) ? e : new Proxy(e, X0);
}
class J0 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Dc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ta - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ht !== this)
      return lh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return fh(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Z0(e, t, n = !1) {
  let i, a;
  return Be(e) ? i = e : (i = e.get, a = e.set), new J0(i, a, n);
}
const wo = {}, is = /* @__PURE__ */ new WeakMap();
let Yr;
function Q0(e, t = !1, n = Yr) {
  if (n) {
    let i = is.get(n);
    i || is.set(n, i = []), i.push(e);
  }
}
function eb(e, t, n = ft) {
  const { immediate: i, deep: a, once: l, scheduler: f, augmentJob: d, call: p } = n, y = (D) => a ? D : /* @__PURE__ */ kn(D) || a === !1 || a === 0 ? hr(D, 1) : hr(D);
  let _, w, S, A, v = !1, R = !1;
  if (/* @__PURE__ */ en(e) ? (w = () => e.value, v = /* @__PURE__ */ kn(e)) : /* @__PURE__ */ Zr(e) ? (w = () => y(e), v = !0) : Ue(e) ? (R = !0, v = e.some((D) => /* @__PURE__ */ Zr(D) || /* @__PURE__ */ kn(D)), w = () => e.map((D) => {
    if (/* @__PURE__ */ en(D))
      return D.value;
    if (/* @__PURE__ */ Zr(D))
      return y(D);
    if (Be(D))
      return p ? p(D, 2) : D();
  })) : Be(e) ? t ? w = p ? () => p(e, 2) : e : w = () => {
    if (S) {
      gr();
      try {
        S();
      } finally {
        br();
      }
    }
    const D = Yr;
    Yr = _;
    try {
      return p ? p(e, 3, [A]) : e(A);
    } finally {
      Yr = D;
    }
  } : w = Xn, t && a) {
    const D = w, L = a === !0 ? 1 / 0 : a;
    w = () => hr(D(), L);
  }
  const V = P0(), j = () => {
    _.stop(), V && V.active && kc(V.effects, _);
  };
  if (l && t) {
    const D = t;
    t = (...L) => {
      D(...L), j();
    };
  }
  let k = R ? new Array(e.length).fill(wo) : wo;
  const E = (D) => {
    if (!(!(_.flags & 1) || !_.dirty && !D))
      if (t) {
        const L = _.run();
        if (a || v || (R ? L.some((W, F) => Wn(W, k[F])) : Wn(L, k))) {
          S && S();
          const W = Yr;
          Yr = _;
          try {
            const F = [
              L,
              // pass undefined as the old value when it's changed for the first time
              k === wo ? void 0 : R && k[0] === wo ? [] : k,
              A
            ];
            k = L, p ? p(t, 3, F) : (
              // @ts-expect-error
              t(...F)
            );
          } finally {
            Yr = W;
          }
        }
      } else
        _.run();
  };
  return d && d(E), _ = new oh(w), _.scheduler = f ? () => f(E, !1) : E, A = (D) => Q0(D, !1, _), S = _.onStop = () => {
    const D = is.get(_);
    if (D) {
      if (p)
        p(D, 4);
      else
        for (const L of D) L();
      is.delete(_);
    }
  }, t ? i ? E(!0) : k = _.run() : f ? f(E.bind(null, !0), !0) : _.run(), j.pause = _.pause.bind(_), j.resume = _.resume.bind(_), j.stop = j, j;
}
function hr(e, t = 1 / 0, n) {
  if (t <= 0 || !lt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ en(e))
    hr(e.value, t, n);
  else if (Ue(e))
    for (let i = 0; i < e.length; i++)
      hr(e[i], t, n);
  else if (Zd(e) || Li(e))
    e.forEach((i) => {
      hr(i, t, n);
    });
  else if (th(e)) {
    for (const i in e)
      hr(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && hr(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ha(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Ts(a, t, n);
  }
}
function Zn(e, t, n, i) {
  if (Be(e)) {
    const a = Ha(e, t, n, i);
    return a && Qd(a) && a.catch((l) => {
      Ts(l, t, n);
    }), a;
  }
  if (Ue(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(Zn(e[l], t, n, i));
    return a;
  }
}
function Ts(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: f } = t && t.appContext.config || ft;
  if (t) {
    let d = t.parent;
    const p = t.proxy, y = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; d; ) {
      const _ = d.ec;
      if (_) {
        for (let w = 0; w < _.length; w++)
          if (_[w](e, p, y) === !1)
            return;
      }
      d = d.parent;
    }
    if (l) {
      gr(), Ha(l, null, 10, [
        e,
        p,
        y
      ]), br();
      return;
    }
  }
  tb(e, n, a, i, f);
}
function tb(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const an = [];
let Un = -1;
const $i = [];
let Cr = null, Ii = 0;
const xh = /* @__PURE__ */ Promise.resolve();
let as = null;
function Fc(e) {
  const t = as || xh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nb(e) {
  let t = Un + 1, n = an.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = an[i], l = Da(a);
    l < e || l === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Lc(e) {
  if (!(e.flags & 1)) {
    const t = Da(e), n = an[an.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Da(n) ? an.push(e) : an.splice(nb(t), 0, e), e.flags |= 1, wh();
  }
}
function wh() {
  as || (as = xh.then(Mh));
}
function rb(e) {
  Ue(e) ? $i.push(...e) : Cr && e.id === -1 ? Cr.splice(Ii + 1, 0, e) : e.flags & 1 || ($i.push(e), e.flags |= 1), wh();
}
function Af(e, t, n = Un + 1) {
  for (; n < an.length; n++) {
    const i = an[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      an.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function Sh(e) {
  if ($i.length) {
    const t = [...new Set($i)].sort(
      (n, i) => Da(n) - Da(i)
    );
    if ($i.length = 0, Cr) {
      Cr.push(...t);
      return;
    }
    for (Cr = t, Ii = 0; Ii < Cr.length; Ii++) {
      const n = Cr[Ii];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Cr = null, Ii = 0;
  }
}
const Da = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Mh(e) {
  try {
    for (Un = 0; Un < an.length; Un++) {
      const t = an[Un];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ha(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Un < an.length; Un++) {
      const t = an[Un];
      t && (t.flags &= -2);
    }
    Un = -1, an.length = 0, Sh(), as = null, (an.length || $i.length) && Mh();
  }
}
let vn = null, Nh = null;
function os(e) {
  const t = vn;
  return vn = e, Nh = e && e.type.__scopeId || null, t;
}
function kh(e, t = vn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && jf(-1);
    const l = os(t);
    let f;
    try {
      f = e(...a);
    } finally {
      os(l), i._d && jf(1);
    }
    return f;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ua(e, t) {
  if (vn === null)
    return e;
  const n = Os(vn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [l, f, d, p = ft] = t[a];
    l && (Be(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && hr(f), i.push({
      dir: l,
      instance: n,
      value: f,
      oldValue: void 0,
      arg: d,
      modifiers: p
    }));
  }
  return e;
}
function Ur(e, t, n, i) {
  const a = e.dirs, l = t && t.dirs;
  for (let f = 0; f < a.length; f++) {
    const d = a[f];
    l && (d.oldValue = l[f].value);
    let p = d.dir[i];
    p && (gr(), Zn(p, n, 8, [
      e.el,
      d,
      e,
      t
    ]), br());
  }
}
function ib(e, t) {
  if (Qt) {
    let n = Qt.provides;
    const i = Qt.parent && Qt.parent.provides;
    i === n && (n = Qt.provides = Object.create(i)), n[e] = t;
  }
}
function Go(e, t, n = !1) {
  const i = ry();
  if (i || ji) {
    let a = ji ? ji._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Be(t) ? t.call(i && i.proxy) : t;
  }
}
const ab = /* @__PURE__ */ Symbol.for("v-scx"), ob = () => Go(ab);
function zi(e, t, n) {
  return Ph(e, t, n);
}
function Ph(e, t, n = ft) {
  const { immediate: i, deep: a, flush: l, once: f } = n, d = tn({}, n), p = t && i || !t && l !== "post";
  let y;
  if (Oa) {
    if (l === "sync") {
      const A = ob();
      y = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!p) {
      const A = () => {
      };
      return A.stop = Xn, A.resume = Xn, A.pause = Xn, A;
    }
  }
  const _ = Qt;
  d.call = (A, v, R) => Zn(A, _, v, R);
  let w = !1;
  l === "post" ? d.scheduler = (A) => {
    fn(A, _ && _.suspense);
  } : l !== "sync" && (w = !0, d.scheduler = (A, v) => {
    v ? A() : Lc(A);
  }), d.augmentJob = (A) => {
    t && (A.flags |= 4), w && (A.flags |= 2, _ && (A.id = _.uid, A.i = _));
  };
  const S = eb(e, t, d);
  return Oa && (y ? y.push(S) : p && S()), S;
}
function sb(e, t, n) {
  const i = this.proxy, a = Ct(e) ? e.includes(".") ? Ah(i, e) : () => i[e] : e.bind(i, i);
  let l;
  Be(t) ? l = t : (l = t.handler, n = t);
  const f = Ba(this), d = Ph(a, l.bind(i), n);
  return f(), d;
}
function Ah(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const lb = /* @__PURE__ */ Symbol("_vte"), cb = (e) => e.__isTeleport, ub = /* @__PURE__ */ Symbol("_leaveCb");
function $c(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, $c(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ch(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Cf(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ss = /* @__PURE__ */ new WeakMap();
function wa(e, t, n, i, a = !1) {
  if (Ue(e)) {
    e.forEach(
      (R, V) => wa(
        R,
        t && (Ue(t) ? t[V] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (Sa(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && wa(e, t, n, i.component.subTree);
    return;
  }
  const l = i.shapeFlag & 4 ? Os(i.component) : i.el, f = a ? null : l, { i: d, r: p } = e, y = t && t.r, _ = d.refs === ft ? d.refs = {} : d.refs, w = d.setupState, S = /* @__PURE__ */ tt(w), A = w === ft ? Jd : (R) => Cf(_, R) ? !1 : nt(S, R), v = (R, V) => !(V && Cf(_, V));
  if (y != null && y !== p) {
    if (Tf(t), Ct(y))
      _[y] = null, A(y) && (w[y] = null);
    else if (/* @__PURE__ */ en(y)) {
      const R = t;
      v(y, R.k) && (y.value = null), R.k && (_[R.k] = null);
    }
  }
  if (Be(p))
    Ha(p, d, 12, [f, _]);
  else {
    const R = Ct(p), V = /* @__PURE__ */ en(p);
    if (R || V) {
      const j = () => {
        if (e.f) {
          const k = R ? A(p) ? w[p] : _[p] : v() || !e.k ? p.value : _[e.k];
          if (a)
            Ue(k) && kc(k, l);
          else if (Ue(k))
            k.includes(l) || k.push(l);
          else if (R)
            _[p] = [l], A(p) && (w[p] = _[p]);
          else {
            const E = [l];
            v(p, e.k) && (p.value = E), e.k && (_[e.k] = E);
          }
        } else R ? (_[p] = f, A(p) && (w[p] = f)) : V && (v(p, e.k) && (p.value = f), e.k && (_[e.k] = f));
      };
      if (f) {
        const k = () => {
          j(), ss.delete(e);
        };
        k.id = -1, ss.set(e, k), fn(k, n);
      } else
        Tf(e), j();
    }
  }
}
function Tf(e) {
  const t = ss.get(e);
  t && (t.flags |= 8, ss.delete(e));
}
Ps().requestIdleCallback;
Ps().cancelIdleCallback;
const Sa = (e) => !!e.type.__asyncLoader, Th = (e) => e.type.__isKeepAlive;
function fb(e, t) {
  Ih(e, "a", t);
}
function db(e, t) {
  Ih(e, "da", t);
}
function Ih(e, t, n = Qt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Is(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      Th(a.parent.vnode) && hb(i, t, n, a), a = a.parent;
  }
}
function hb(e, t, n, i) {
  const a = Is(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  Eh(() => {
    kc(i[t], a);
  }, n);
}
function Is(e, t, n = Qt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...f) => {
      gr();
      const d = Ba(n), p = Zn(t, n, e, f);
      return d(), br(), p;
    });
    return i ? a.unshift(l) : a.push(l), l;
  }
}
const vr = (e) => (t, n = Qt) => {
  (!Oa || e === "sp") && Is(e, (...i) => t(...i), n);
}, mb = vr("bm"), Dh = vr("m"), pb = vr(
  "bu"
), gb = vr("u"), zc = vr(
  "bum"
), Eh = vr("um"), bb = vr(
  "sp"
), yb = vr("rtg"), vb = vr("rtc");
function _b(e, t = Qt) {
  Is("ec", e, t);
}
const xb = "components", Oh = /* @__PURE__ */ Symbol.for("v-ndc");
function wb(e) {
  return Ct(e) ? Sb(xb, e, !1) || e : e || Oh;
}
function Sb(e, t, n = !0, i = !1) {
  const a = vn || Qt;
  if (a) {
    const l = a.type;
    {
      const d = ly(
        l,
        !1
      );
      if (d && (d === t || d === sn(t) || d === ks(sn(t))))
        return l;
    }
    const f = (
      // local registration
      // check instance[type] first which is resolved for options API
      If(a[e] || l[e], t) || // global registration
      If(a.appContext[e], t)
    );
    return !f && i ? l : f;
  }
}
function If(e, t) {
  return e && (e[t] || e[sn(t)] || e[ks(sn(t))]);
}
function $t(e, t, n, i) {
  let a;
  const l = n, f = Ue(e);
  if (f || Ct(e)) {
    const d = f && /* @__PURE__ */ Zr(e);
    let p = !1, y = !1;
    d && (p = !/* @__PURE__ */ kn(e), y = /* @__PURE__ */ yr(e), e = As(e)), a = new Array(e.length);
    for (let _ = 0, w = e.length; _ < w; _++)
      a[_] = t(
        p ? y ? Bi(Fn(e[_])) : Fn(e[_]) : e[_],
        _,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, l);
  } else if (lt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, p) => t(d, p, void 0, l)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let p = 0, y = d.length; p < y; p++) {
        const _ = d[p];
        a[p] = t(e[_], _, p, l);
      }
    }
  else
    a = [];
  return a;
}
const oc = (e) => e ? tm(e) ? Os(e) : oc(e.parent) : null, Ma = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ tn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => oc(e.parent),
    $root: (e) => oc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Lc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Fc.bind(e.proxy)),
    $watch: (e) => sb.bind(e)
  })
), Dl = (e, t) => e !== ft && !e.__isScriptSetup && nt(e, t), Mb = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: l, accessCache: f, type: d, appContext: p } = e;
    if (t[0] !== "$") {
      const S = f[t];
      if (S !== void 0)
        switch (S) {
          case 1:
            return i[t];
          case 2:
            return a[t];
          case 4:
            return n[t];
          case 3:
            return l[t];
        }
      else {
        if (Dl(i, t))
          return f[t] = 1, i[t];
        if (a !== ft && nt(a, t))
          return f[t] = 2, a[t];
        if (nt(l, t))
          return f[t] = 3, l[t];
        if (n !== ft && nt(n, t))
          return f[t] = 4, n[t];
        sc && (f[t] = 0);
      }
    }
    const y = Ma[t];
    let _, w;
    if (y)
      return t === "$attrs" && Zt(e.attrs, "get", ""), y(e);
    if (
      // css module (injected by vue-loader)
      (_ = d.__cssModules) && (_ = _[t])
    )
      return _;
    if (n !== ft && nt(n, t))
      return f[t] = 4, n[t];
    if (
      // global properties
      w = p.config.globalProperties, nt(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: l } = e;
    return Dl(a, t) ? (a[t] = n, !0) : i !== ft && nt(i, t) ? (i[t] = n, !0) : nt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: l, type: f }
  }, d) {
    let p;
    return !!(n[d] || e !== ft && d[0] !== "$" && nt(e, d) || Dl(t, d) || nt(l, d) || nt(i, d) || nt(Ma, d) || nt(a.config.globalProperties, d) || (p = f.__cssModules) && p[d]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : nt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Df(e) {
  return Ue(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let sc = !0;
function Nb(e) {
  const t = Fh(e), n = e.proxy, i = e.ctx;
  sc = !1, t.beforeCreate && Ef(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: f,
    watch: d,
    provide: p,
    inject: y,
    // lifecycle
    created: _,
    beforeMount: w,
    mounted: S,
    beforeUpdate: A,
    updated: v,
    activated: R,
    deactivated: V,
    beforeDestroy: j,
    beforeUnmount: k,
    destroyed: E,
    unmounted: D,
    render: L,
    renderTracked: W,
    renderTriggered: F,
    errorCaptured: J,
    serverPrefetch: ce,
    // public API
    expose: U,
    inheritAttrs: ve,
    // assets
    components: xe,
    directives: C,
    filters: we
  } = t;
  if (y && kb(y, i, null), f)
    for (const $ in f) {
      const X = f[$];
      Be(X) && (i[$] = X.bind(n));
    }
  if (a) {
    const $ = a.call(n, n);
    lt($) && (e.data = /* @__PURE__ */ Cs($));
  }
  if (sc = !0, l)
    for (const $ in l) {
      const X = l[$], _e = Be(X) ? X.bind(n, n) : Be(X.get) ? X.get.bind(n, n) : Xn, $e = !Be(X) && Be(X.set) ? X.set.bind(n) : Xn, ze = vt({
        get: _e,
        set: $e
      });
      Object.defineProperty(i, $, {
        enumerable: !0,
        configurable: !0,
        get: () => ze.value,
        set: (De) => ze.value = De
      });
    }
  if (d)
    for (const $ in d)
      Rh(d[$], i, n, $);
  if (p) {
    const $ = Be(p) ? p.call(n) : p;
    Reflect.ownKeys($).forEach((X) => {
      ib(X, $[X]);
    });
  }
  _ && Ef(_, e, "c");
  function ye($, X) {
    Ue(X) ? X.forEach((_e) => $(_e.bind(n))) : X && $(X.bind(n));
  }
  if (ye(mb, w), ye(Dh, S), ye(pb, A), ye(gb, v), ye(fb, R), ye(db, V), ye(_b, J), ye(vb, W), ye(yb, F), ye(zc, k), ye(Eh, D), ye(bb, ce), Ue(U))
    if (U.length) {
      const $ = e.exposed || (e.exposed = {});
      U.forEach((X) => {
        Object.defineProperty($, X, {
          get: () => n[X],
          set: (_e) => n[X] = _e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === Xn && (e.render = L), ve != null && (e.inheritAttrs = ve), xe && (e.components = xe), C && (e.directives = C), ce && Ch(e);
}
function kb(e, t, n = Xn) {
  Ue(e) && (e = lc(e));
  for (const i in e) {
    const a = e[i];
    let l;
    lt(a) ? "default" in a ? l = Go(
      a.from || i,
      a.default,
      !0
    ) : l = Go(a.from || i) : l = Go(a), /* @__PURE__ */ en(l) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (f) => l.value = f
    }) : t[i] = l;
  }
}
function Ef(e, t, n) {
  Zn(
    Ue(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Rh(e, t, n, i) {
  let a = i.includes(".") ? Ah(n, i) : () => n[i];
  if (Ct(e)) {
    const l = t[e];
    Be(l) && zi(a, l);
  } else if (Be(e))
    zi(a, e.bind(n));
  else if (lt(e))
    if (Ue(e))
      e.forEach((l) => Rh(l, t, n, i));
    else {
      const l = Be(e.handler) ? e.handler.bind(n) : t[e.handler];
      Be(l) && zi(a, l, e);
    }
}
function Fh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: f }
  } = e.appContext, d = l.get(t);
  let p;
  return d ? p = d : !a.length && !n && !i ? p = t : (p = {}, a.length && a.forEach(
    (y) => ls(p, y, f, !0)
  ), ls(p, t, f)), lt(t) && l.set(t, p), p;
}
function ls(e, t, n, i = !1) {
  const { mixins: a, extends: l } = t;
  l && ls(e, l, n, !0), a && a.forEach(
    (f) => ls(e, f, n, !0)
  );
  for (const f in t)
    if (!(i && f === "expose")) {
      const d = Pb[f] || n && n[f];
      e[f] = d ? d(e[f], t[f]) : t[f];
    }
  return e;
}
const Pb = {
  data: Of,
  props: Rf,
  emits: Rf,
  // objects
  methods: pa,
  computed: pa,
  // lifecycle
  beforeCreate: rn,
  created: rn,
  beforeMount: rn,
  mounted: rn,
  beforeUpdate: rn,
  updated: rn,
  beforeDestroy: rn,
  beforeUnmount: rn,
  destroyed: rn,
  unmounted: rn,
  activated: rn,
  deactivated: rn,
  errorCaptured: rn,
  serverPrefetch: rn,
  // assets
  components: pa,
  directives: pa,
  // watch
  watch: Cb,
  // provide / inject
  provide: Of,
  inject: Ab
};
function Of(e, t) {
  return t ? e ? function() {
    return tn(
      Be(e) ? e.call(this, this) : e,
      Be(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ab(e, t) {
  return pa(lc(e), lc(t));
}
function lc(e) {
  if (Ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function rn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function pa(e, t) {
  return e ? tn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Rf(e, t) {
  return e ? Ue(e) && Ue(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tn(
    /* @__PURE__ */ Object.create(null),
    Df(e),
    Df(t ?? {})
  ) : t;
}
function Cb(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = tn(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = rn(e[i], t[i]);
  return n;
}
function Lh() {
  return {
    app: null,
    config: {
      isNativeTag: Jd,
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
let Tb = 0;
function Ib(e, t) {
  return function(i, a = null) {
    Be(i) || (i = tn({}, i)), a != null && !lt(a) && (a = null);
    const l = Lh(), f = /* @__PURE__ */ new WeakSet(), d = [];
    let p = !1;
    const y = l.app = {
      _uid: Tb++,
      _component: i,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: uy,
      get config() {
        return l.config;
      },
      set config(_) {
      },
      use(_, ...w) {
        return f.has(_) || (_ && Be(_.install) ? (f.add(_), _.install(y, ...w)) : Be(_) && (f.add(_), _(y, ...w))), y;
      },
      mixin(_) {
        return l.mixins.includes(_) || l.mixins.push(_), y;
      },
      component(_, w) {
        return w ? (l.components[_] = w, y) : l.components[_];
      },
      directive(_, w) {
        return w ? (l.directives[_] = w, y) : l.directives[_];
      },
      mount(_, w, S) {
        if (!p) {
          const A = y._ceVNode || Ye(i, a);
          return A.appContext = l, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(A, _, S), p = !0, y._container = _, _.__vue_app__ = y, Os(A.component);
        }
      },
      onUnmount(_) {
        d.push(_);
      },
      unmount() {
        p && (Zn(
          d,
          y._instance,
          16
        ), e(null, y._container), delete y._container.__vue_app__);
      },
      provide(_, w) {
        return l.provides[_] = w, y;
      },
      runWithContext(_) {
        const w = ji;
        ji = y;
        try {
          return _();
        } finally {
          ji = w;
        }
      }
    };
    return y;
  };
}
let ji = null;
const Db = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${sn(t)}Modifiers`] || e[`${li(t)}Modifiers`];
function Eb(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || ft;
  let a = n;
  const l = t.startsWith("update:"), f = l && Db(i, t.slice(7));
  f && (f.trim && (a = n.map((_) => Ct(_) ? _.trim() : _)), f.number && (a = n.map(y0)));
  let d, p = i[d = kl(t)] || // also try camelCase event handler (#2249)
  i[d = kl(sn(t))];
  !p && l && (p = i[d = kl(li(t))]), p && Zn(
    p,
    e,
    6,
    a
  );
  const y = i[d + "Once"];
  if (y) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[d])
      return;
    e.emitted[d] = !0, Zn(
      y,
      e,
      6,
      a
    );
  }
}
const Ob = /* @__PURE__ */ new WeakMap();
function $h(e, t, n = !1) {
  const i = n ? Ob : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let f = {}, d = !1;
  if (!Be(e)) {
    const p = (y) => {
      const _ = $h(y, t, !0);
      _ && (d = !0, tn(f, _));
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !l && !d ? (lt(e) && i.set(e, null), null) : (Ue(l) ? l.forEach((p) => f[p] = null) : tn(f, l), lt(e) && i.set(e, f), f);
}
function Ds(e, t) {
  return !e || !Ss(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), nt(e, t[0].toLowerCase() + t.slice(1)) || nt(e, li(t)) || nt(e, t));
}
function Ff(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [l],
    slots: f,
    attrs: d,
    emit: p,
    render: y,
    renderCache: _,
    props: w,
    data: S,
    setupState: A,
    ctx: v,
    inheritAttrs: R
  } = e, V = os(e);
  let j, k;
  try {
    if (n.shapeFlag & 4) {
      const D = a || i, L = D;
      j = Gn(
        y.call(
          L,
          D,
          _,
          w,
          A,
          S,
          v
        )
      ), k = d;
    } else {
      const D = t;
      j = Gn(
        D.length > 1 ? D(
          w,
          { attrs: d, slots: f, emit: p }
        ) : D(
          w,
          null
        )
      ), k = t.props ? d : Rb(d);
    }
  } catch (D) {
    Na.length = 0, Ts(D, e, 1), j = Ye(Or);
  }
  let E = j;
  if (k && R !== !1) {
    const D = Object.keys(k), { shapeFlag: L } = E;
    D.length && L & 7 && (l && D.some(Ms) && (k = Fb(
      k,
      l
    )), E = Gi(E, k, !1, !0));
  }
  return n.dirs && (E = Gi(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && $c(E, n.transition), j = E, os(V), j;
}
const Rb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ss(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Fb = (e, t) => {
  const n = {};
  for (const i in e)
    (!Ms(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function Lb(e, t, n) {
  const { props: i, children: a, component: l } = e, { props: f, children: d, patchFlag: p } = t, y = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return i ? Lf(i, f, y) : !!f;
    if (p & 8) {
      const _ = t.dynamicProps;
      for (let w = 0; w < _.length; w++) {
        const S = _[w];
        if (zh(f, i, S) && !Ds(y, S))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : i === f ? !1 : i ? f ? Lf(i, f, y) : !0 : !!f;
  return !1;
}
function Lf(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const l = i[a];
    if (zh(t, e, l) && !Ds(n, l))
      return !0;
  }
  return !1;
}
function zh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && lt(i) && lt(a) ? !Ac(i, a) : i !== a;
}
function $b({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const jh = {}, Vh = () => Object.create(jh), Hh = (e) => Object.getPrototypeOf(e) === jh;
function zb(e, t, n, i = !1) {
  const a = {}, l = Vh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Uh(e, t, a, l);
  for (const f in e.propsOptions[0])
    f in a || (a[f] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ K0(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function jb(e, t, n, i) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: f }
  } = e, d = /* @__PURE__ */ tt(a), [p] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || f > 0) && !(f & 16)
  ) {
    if (f & 8) {
      const _ = e.vnode.dynamicProps;
      for (let w = 0; w < _.length; w++) {
        let S = _[w];
        if (Ds(e.emitsOptions, S))
          continue;
        const A = t[S];
        if (p)
          if (nt(l, S))
            A !== l[S] && (l[S] = A, y = !0);
          else {
            const v = sn(S);
            a[v] = cc(
              p,
              d,
              v,
              A,
              e,
              !1
            );
          }
        else
          A !== l[S] && (l[S] = A, y = !0);
      }
    }
  } else {
    Uh(e, t, a, l) && (y = !0);
    let _;
    for (const w in d)
      (!t || // for camelCase
      !nt(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = li(w)) === w || !nt(t, _))) && (p ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[_] !== void 0) && (a[w] = cc(
        p,
        d,
        w,
        void 0,
        e,
        !0
      )) : delete a[w]);
    if (l !== d)
      for (const w in l)
        (!t || !nt(t, w)) && (delete l[w], y = !0);
  }
  y && dr(e.attrs, "set", "");
}
function Uh(e, t, n, i) {
  const [a, l] = e.propsOptions;
  let f = !1, d;
  if (t)
    for (let p in t) {
      if (va(p))
        continue;
      const y = t[p];
      let _;
      a && nt(a, _ = sn(p)) ? !l || !l.includes(_) ? n[_] = y : (d || (d = {}))[_] = y : Ds(e.emitsOptions, p) || (!(p in i) || y !== i[p]) && (i[p] = y, f = !0);
    }
  if (l) {
    const p = /* @__PURE__ */ tt(n), y = d || ft;
    for (let _ = 0; _ < l.length; _++) {
      const w = l[_];
      n[w] = cc(
        a,
        p,
        w,
        y[w],
        e,
        !nt(y, w)
      );
    }
  }
  return f;
}
function cc(e, t, n, i, a, l) {
  const f = e[n];
  if (f != null) {
    const d = nt(f, "default");
    if (d && i === void 0) {
      const p = f.default;
      if (f.type !== Function && !f.skipFactory && Be(p)) {
        const { propsDefaults: y } = a;
        if (n in y)
          i = y[n];
        else {
          const _ = Ba(a);
          i = y[n] = p.call(
            null,
            t
          ), _();
        }
      } else
        i = p;
      a.ce && a.ce._setProp(n, i);
    }
    f[
      0
      /* shouldCast */
    ] && (l && !d ? i = !1 : f[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === li(n)) && (i = !0));
  }
  return i;
}
const Vb = /* @__PURE__ */ new WeakMap();
function Bh(e, t, n = !1) {
  const i = n ? Vb : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const l = e.props, f = {}, d = [];
  let p = !1;
  if (!Be(e)) {
    const _ = (w) => {
      p = !0;
      const [S, A] = Bh(w, t, !0);
      tn(f, S), A && d.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!l && !p)
    return lt(e) && i.set(e, Fi), Fi;
  if (Ue(l))
    for (let _ = 0; _ < l.length; _++) {
      const w = sn(l[_]);
      $f(w) && (f[w] = ft);
    }
  else if (l)
    for (const _ in l) {
      const w = sn(_);
      if ($f(w)) {
        const S = l[_], A = f[w] = Ue(S) || Be(S) ? { type: S } : tn({}, S), v = A.type;
        let R = !1, V = !0;
        if (Ue(v))
          for (let j = 0; j < v.length; ++j) {
            const k = v[j], E = Be(k) && k.name;
            if (E === "Boolean") {
              R = !0;
              break;
            } else E === "String" && (V = !1);
          }
        else
          R = Be(v) && v.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = R, A[
          1
          /* shouldCastTrue */
        ] = V, (R || nt(A, "default")) && d.push(w);
      }
    }
  const y = [f, d];
  return lt(e) && i.set(e, y), y;
}
function $f(e) {
  return e[0] !== "$" && !va(e);
}
const jc = (e) => e === "_" || e === "_ctx" || e === "$stable", Vc = (e) => Ue(e) ? e.map(Gn) : [Gn(e)], Hb = (e, t, n) => {
  if (t._n)
    return t;
  const i = kh((...a) => Vc(t(...a)), n);
  return i._c = !1, i;
}, Gh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (jc(a)) continue;
    const l = e[a];
    if (Be(l))
      t[a] = Hb(a, l, i);
    else if (l != null) {
      const f = Vc(l);
      t[a] = () => f;
    }
  }
}, Kh = (e, t) => {
  const n = Vc(t);
  e.slots.default = () => n;
}, Wh = (e, t, n) => {
  for (const i in t)
    (n || !jc(i)) && (e[i] = t[i]);
}, Ub = (e, t, n) => {
  const i = e.slots = Vh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Wh(i, t, n), n && nh(i, "_", a, !0)) : Gh(t, i);
  } else t && Kh(e, t);
}, Bb = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let l = !0, f = ft;
  if (i.shapeFlag & 32) {
    const d = t._;
    d ? n && d === 1 ? l = !1 : Wh(a, t, n) : (l = !t.$stable, Gh(t, a)), f = t;
  } else t && (Kh(e, t), f = { default: 1 });
  if (l)
    for (const d in a)
      !jc(d) && f[d] == null && delete a[d];
}, fn = qb;
function Gb(e) {
  return Kb(e);
}
function Kb(e, t) {
  const n = Ps();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: l,
    createElement: f,
    createText: d,
    createComment: p,
    setText: y,
    setElementText: _,
    parentNode: w,
    nextSibling: S,
    setScopeId: A = Xn,
    insertStaticContent: v
  } = e, R = (O, H, Q, pe = null, I = null, K = null, ne = void 0, se = null, ae = !!H.dynamicChildren) => {
    if (O === H)
      return;
    O && !la(O, H) && (pe = Tt(O), De(O, I, K, !0), O = null), H.patchFlag === -2 && (ae = !1, H.dynamicChildren = null);
    const { type: u, ref: he, shapeFlag: ge } = H;
    switch (u) {
      case Es:
        V(O, H, Q, pe);
        break;
      case Or:
        j(O, H, Q, pe);
        break;
      case Ol:
        O == null && k(H, Q, pe, ne);
        break;
      case Je:
        xe(
          O,
          H,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae
        );
        break;
      default:
        ge & 1 ? L(
          O,
          H,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae
        ) : ge & 6 ? C(
          O,
          H,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae
        ) : (ge & 64 || ge & 128) && u.process(
          O,
          H,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae,
          Wt
        );
    }
    he != null && I ? wa(he, O && O.ref, K, H || O, !H) : he == null && O && O.ref != null && wa(O.ref, null, K, O, !0);
  }, V = (O, H, Q, pe) => {
    if (O == null)
      i(
        H.el = d(H.children),
        Q,
        pe
      );
    else {
      const I = H.el = O.el;
      H.children !== O.children && y(I, H.children);
    }
  }, j = (O, H, Q, pe) => {
    O == null ? i(
      H.el = p(H.children || ""),
      Q,
      pe
    ) : H.el = O.el;
  }, k = (O, H, Q, pe) => {
    [O.el, O.anchor] = v(
      O.children,
      H,
      Q,
      pe,
      O.el,
      O.anchor
    );
  }, E = ({ el: O, anchor: H }, Q, pe) => {
    let I;
    for (; O && O !== H; )
      I = S(O), i(O, Q, pe), O = I;
    i(H, Q, pe);
  }, D = ({ el: O, anchor: H }) => {
    let Q;
    for (; O && O !== H; )
      Q = S(O), a(O), O = Q;
    a(H);
  }, L = (O, H, Q, pe, I, K, ne, se, ae) => {
    if (H.type === "svg" ? ne = "svg" : H.type === "math" && (ne = "mathml"), O == null)
      W(
        H,
        Q,
        pe,
        I,
        K,
        ne,
        se,
        ae
      );
    else {
      const u = O.el && O.el._isVueCE ? O.el : null;
      try {
        u && u._beginPatch(), ce(
          O,
          H,
          I,
          K,
          ne,
          se,
          ae
        );
      } finally {
        u && u._endPatch();
      }
    }
  }, W = (O, H, Q, pe, I, K, ne, se) => {
    let ae, u;
    const { props: he, shapeFlag: ge, transition: Se, dirs: Ie } = O;
    if (ae = O.el = f(
      O.type,
      K,
      he && he.is,
      he
    ), ge & 8 ? _(ae, O.children) : ge & 16 && J(
      O.children,
      ae,
      null,
      pe,
      I,
      El(O, K),
      ne,
      se
    ), Ie && Ur(O, null, pe, "created"), F(ae, O, O.scopeId, ne, pe), he) {
      for (const Te in he)
        Te !== "value" && !va(Te) && l(ae, Te, null, he[Te], K, pe);
      "value" in he && l(ae, "value", null, he.value, K), (u = he.onVnodeBeforeMount) && zn(u, pe, O);
    }
    Ie && Ur(O, null, pe, "beforeMount");
    const Re = Wb(I, Se);
    Re && Se.beforeEnter(ae), i(ae, H, Q), ((u = he && he.onVnodeMounted) || Re || Ie) && fn(() => {
      try {
        u && zn(u, pe, O), Re && Se.enter(ae), Ie && Ur(O, null, pe, "mounted");
      } finally {
      }
    }, I);
  }, F = (O, H, Q, pe, I) => {
    if (Q && A(O, Q), pe)
      for (let K = 0; K < pe.length; K++)
        A(O, pe[K]);
    if (I) {
      let K = I.subTree;
      if (H === K || Jh(K.type) && (K.ssContent === H || K.ssFallback === H)) {
        const ne = I.vnode;
        F(
          O,
          ne,
          ne.scopeId,
          ne.slotScopeIds,
          I.parent
        );
      }
    }
  }, J = (O, H, Q, pe, I, K, ne, se, ae = 0) => {
    for (let u = ae; u < O.length; u++) {
      const he = O[u] = se ? fr(O[u]) : Gn(O[u]);
      R(
        null,
        he,
        H,
        Q,
        pe,
        I,
        K,
        ne,
        se
      );
    }
  }, ce = (O, H, Q, pe, I, K, ne) => {
    const se = H.el = O.el;
    let { patchFlag: ae, dynamicChildren: u, dirs: he } = H;
    ae |= O.patchFlag & 16;
    const ge = O.props || ft, Se = H.props || ft;
    let Ie;
    if (Q && Br(Q, !1), (Ie = Se.onVnodeBeforeUpdate) && zn(Ie, Q, H, O), he && Ur(H, O, Q, "beforeUpdate"), Q && Br(Q, !0), (ge.innerHTML && Se.innerHTML == null || ge.textContent && Se.textContent == null) && _(se, ""), u ? U(
      O.dynamicChildren,
      u,
      se,
      Q,
      pe,
      El(H, I),
      K
    ) : ne || X(
      O,
      H,
      se,
      null,
      Q,
      pe,
      El(H, I),
      K,
      !1
    ), ae > 0) {
      if (ae & 16)
        ve(se, ge, Se, Q, I);
      else if (ae & 2 && ge.class !== Se.class && l(se, "class", null, Se.class, I), ae & 4 && l(se, "style", ge.style, Se.style, I), ae & 8) {
        const Re = H.dynamicProps;
        for (let Te = 0; Te < Re.length; Te++) {
          const oe = Re[Te], dt = ge[oe], We = Se[oe];
          (We !== dt || oe === "value") && l(se, oe, dt, We, I, Q);
        }
      }
      ae & 1 && O.children !== H.children && _(se, H.children);
    } else !ne && u == null && ve(se, ge, Se, Q, I);
    ((Ie = Se.onVnodeUpdated) || he) && fn(() => {
      Ie && zn(Ie, Q, H, O), he && Ur(H, O, Q, "updated");
    }, pe);
  }, U = (O, H, Q, pe, I, K, ne) => {
    for (let se = 0; se < H.length; se++) {
      const ae = O[se], u = H[se], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ae.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ae.type === Je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !la(ae, u) || // - In the case of a component, it could contain anything.
        ae.shapeFlag & 198) ? w(ae.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Q
        )
      );
      R(
        ae,
        u,
        he,
        null,
        pe,
        I,
        K,
        ne,
        !0
      );
    }
  }, ve = (O, H, Q, pe, I) => {
    if (H !== Q) {
      if (H !== ft)
        for (const K in H)
          !va(K) && !(K in Q) && l(
            O,
            K,
            H[K],
            null,
            I,
            pe
          );
      for (const K in Q) {
        if (va(K)) continue;
        const ne = Q[K], se = H[K];
        ne !== se && K !== "value" && l(O, K, se, ne, I, pe);
      }
      "value" in Q && l(O, "value", H.value, Q.value, I);
    }
  }, xe = (O, H, Q, pe, I, K, ne, se, ae) => {
    const u = H.el = O ? O.el : d(""), he = H.anchor = O ? O.anchor : d("");
    let { patchFlag: ge, dynamicChildren: Se, slotScopeIds: Ie } = H;
    Ie && (se = se ? se.concat(Ie) : Ie), O == null ? (i(u, Q, pe), i(he, Q, pe), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      Q,
      he,
      I,
      K,
      ne,
      se,
      ae
    )) : ge > 0 && ge & 64 && Se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren && O.dynamicChildren.length === Se.length ? (U(
      O.dynamicChildren,
      Se,
      Q,
      I,
      K,
      ne,
      se
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (H.key != null || I && H === I.subTree) && Yh(
      O,
      H,
      !0
      /* shallow */
    )) : X(
      O,
      H,
      Q,
      he,
      I,
      K,
      ne,
      se,
      ae
    );
  }, C = (O, H, Q, pe, I, K, ne, se, ae) => {
    H.slotScopeIds = se, O == null ? H.shapeFlag & 512 ? I.ctx.activate(
      H,
      Q,
      pe,
      ne,
      ae
    ) : we(
      H,
      Q,
      pe,
      I,
      K,
      ne,
      ae
    ) : te(O, H, ae);
  }, we = (O, H, Q, pe, I, K, ne) => {
    const se = O.component = ny(
      O,
      pe,
      I
    );
    if (Th(O) && (se.ctx.renderer = Wt), iy(se, !1, ne), se.asyncDep) {
      if (I && I.registerDep(se, ye, ne), !O.el) {
        const ae = se.subTree = Ye(Or);
        j(null, ae, H, Q), O.placeholder = ae.el;
      }
    } else
      ye(
        se,
        O,
        H,
        Q,
        I,
        K,
        ne
      );
  }, te = (O, H, Q) => {
    const pe = H.component = O.component;
    if (Lb(O, H, Q))
      if (pe.asyncDep && !pe.asyncResolved) {
        $(pe, H, Q);
        return;
      } else
        pe.next = H, pe.update();
    else
      H.el = O.el, pe.vnode = H;
  }, ye = (O, H, Q, pe, I, K, ne) => {
    const se = () => {
      if (O.isMounted) {
        let { next: ge, bu: Se, u: Ie, parent: Re, vnode: Te } = O;
        {
          const Qe = qh(O);
          if (Qe) {
            ge && (ge.el = Te.el, $(O, ge, ne)), Qe.asyncDep.then(() => {
              fn(() => {
                O.isUnmounted || u();
              }, I);
            });
            return;
          }
        }
        let oe = ge, dt;
        Br(O, !1), ge ? (ge.el = Te.el, $(O, ge, ne)) : ge = Te, Se && Pl(Se), (dt = ge.props && ge.props.onVnodeBeforeUpdate) && zn(dt, Re, ge, Te), Br(O, !0);
        const We = Ff(O), ke = O.subTree;
        O.subTree = We, R(
          ke,
          We,
          // parent may have changed if it's in a teleport
          w(ke.el),
          // anchor may have changed if it's in a fragment
          Tt(ke),
          O,
          I,
          K
        ), ge.el = We.el, oe === null && $b(O, We.el), Ie && fn(Ie, I), (dt = ge.props && ge.props.onVnodeUpdated) && fn(
          () => zn(dt, Re, ge, Te),
          I
        );
      } else {
        let ge;
        const { el: Se, props: Ie } = H, { bm: Re, m: Te, parent: oe, root: dt, type: We } = O, ke = Sa(H);
        Br(O, !1), Re && Pl(Re), !ke && (ge = Ie && Ie.onVnodeBeforeMount) && zn(ge, oe, H), Br(O, !0);
        {
          dt.ce && dt.ce._hasShadowRoot() && dt.ce._injectChildStyle(
            We,
            O.parent ? O.parent.type : void 0
          );
          const Qe = O.subTree = Ff(O);
          R(
            null,
            Qe,
            Q,
            pe,
            O,
            I,
            K
          ), H.el = Qe.el;
        }
        if (Te && fn(Te, I), !ke && (ge = Ie && Ie.onVnodeMounted)) {
          const Qe = H;
          fn(
            () => zn(ge, oe, Qe),
            I
          );
        }
        (H.shapeFlag & 256 || oe && Sa(oe.vnode) && oe.vnode.shapeFlag & 256) && O.a && fn(O.a, I), O.isMounted = !0, H = Q = pe = null;
      }
    };
    O.scope.on();
    const ae = O.effect = new oh(se);
    O.scope.off();
    const u = O.update = ae.run.bind(ae), he = O.job = ae.runIfDirty.bind(ae);
    he.i = O, he.id = O.uid, ae.scheduler = () => Lc(he), Br(O, !0), u();
  }, $ = (O, H, Q) => {
    H.component = O;
    const pe = O.vnode.props;
    O.vnode = H, O.next = null, jb(O, H.props, pe, Q), Bb(O, H.children, Q), gr(), Af(O), br();
  }, X = (O, H, Q, pe, I, K, ne, se, ae = !1) => {
    const u = O && O.children, he = O ? O.shapeFlag : 0, ge = H.children, { patchFlag: Se, shapeFlag: Ie } = H;
    if (Se > 0) {
      if (Se & 128) {
        $e(
          u,
          ge,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae
        );
        return;
      } else if (Se & 256) {
        _e(
          u,
          ge,
          Q,
          pe,
          I,
          K,
          ne,
          se,
          ae
        );
        return;
      }
    }
    Ie & 8 ? (he & 16 && St(u, I, K), ge !== u && _(Q, ge)) : he & 16 ? Ie & 16 ? $e(
      u,
      ge,
      Q,
      pe,
      I,
      K,
      ne,
      se,
      ae
    ) : St(u, I, K, !0) : (he & 8 && _(Q, ""), Ie & 16 && J(
      ge,
      Q,
      pe,
      I,
      K,
      ne,
      se,
      ae
    ));
  }, _e = (O, H, Q, pe, I, K, ne, se, ae) => {
    O = O || Fi, H = H || Fi;
    const u = O.length, he = H.length, ge = Math.min(u, he);
    let Se;
    for (Se = 0; Se < ge; Se++) {
      const Ie = H[Se] = ae ? fr(H[Se]) : Gn(H[Se]);
      R(
        O[Se],
        Ie,
        Q,
        null,
        I,
        K,
        ne,
        se,
        ae
      );
    }
    u > he ? St(
      O,
      I,
      K,
      !0,
      !1,
      ge
    ) : J(
      H,
      Q,
      pe,
      I,
      K,
      ne,
      se,
      ae,
      ge
    );
  }, $e = (O, H, Q, pe, I, K, ne, se, ae) => {
    let u = 0;
    const he = H.length;
    let ge = O.length - 1, Se = he - 1;
    for (; u <= ge && u <= Se; ) {
      const Ie = O[u], Re = H[u] = ae ? fr(H[u]) : Gn(H[u]);
      if (la(Ie, Re))
        R(
          Ie,
          Re,
          Q,
          null,
          I,
          K,
          ne,
          se,
          ae
        );
      else
        break;
      u++;
    }
    for (; u <= ge && u <= Se; ) {
      const Ie = O[ge], Re = H[Se] = ae ? fr(H[Se]) : Gn(H[Se]);
      if (la(Ie, Re))
        R(
          Ie,
          Re,
          Q,
          null,
          I,
          K,
          ne,
          se,
          ae
        );
      else
        break;
      ge--, Se--;
    }
    if (u > ge) {
      if (u <= Se) {
        const Ie = Se + 1, Re = Ie < he ? H[Ie].el : pe;
        for (; u <= Se; )
          R(
            null,
            H[u] = ae ? fr(H[u]) : Gn(H[u]),
            Q,
            Re,
            I,
            K,
            ne,
            se,
            ae
          ), u++;
      }
    } else if (u > Se)
      for (; u <= ge; )
        De(O[u], I, K, !0), u++;
    else {
      const Ie = u, Re = u, Te = /* @__PURE__ */ new Map();
      for (u = Re; u <= Se; u++) {
        const Pt = H[u] = ae ? fr(H[u]) : Gn(H[u]);
        Pt.key != null && Te.set(Pt.key, u);
      }
      let oe, dt = 0;
      const We = Se - Re + 1;
      let ke = !1, Qe = 0;
      const me = new Array(We);
      for (u = 0; u < We; u++) me[u] = 0;
      for (u = Ie; u <= ge; u++) {
        const Pt = O[u];
        if (dt >= We) {
          De(Pt, I, K, !0);
          continue;
        }
        let At;
        if (Pt.key != null)
          At = Te.get(Pt.key);
        else
          for (oe = Re; oe <= Se; oe++)
            if (me[oe - Re] === 0 && la(Pt, H[oe])) {
              At = oe;
              break;
            }
        At === void 0 ? De(Pt, I, K, !0) : (me[At - Re] = u + 1, At >= Qe ? Qe = At : ke = !0, R(
          Pt,
          H[At],
          Q,
          null,
          I,
          K,
          ne,
          se,
          ae
        ), dt++);
      }
      const kt = ke ? Yb(me) : Fi;
      for (oe = kt.length - 1, u = We - 1; u >= 0; u--) {
        const Pt = Re + u, At = H[Pt], er = H[Pt + 1], Ka = Pt + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          er.el || Xh(er)
        ) : pe;
        me[u] === 0 ? R(
          null,
          At,
          Q,
          Ka,
          I,
          K,
          ne,
          se,
          ae
        ) : ke && (oe < 0 || u !== kt[oe] ? ze(At, Q, Ka, 2) : oe--);
      }
    }
  }, ze = (O, H, Q, pe, I = null) => {
    const { el: K, type: ne, transition: se, children: ae, shapeFlag: u } = O;
    if (u & 6) {
      ze(O.component.subTree, H, Q, pe);
      return;
    }
    if (u & 128) {
      O.suspense.move(H, Q, pe);
      return;
    }
    if (u & 64) {
      ne.move(O, H, Q, Wt);
      return;
    }
    if (ne === Je) {
      i(K, H, Q);
      for (let ge = 0; ge < ae.length; ge++)
        ze(ae[ge], H, Q, pe);
      i(O.anchor, H, Q);
      return;
    }
    if (ne === Ol) {
      E(O, H, Q);
      return;
    }
    if (pe !== 2 && u & 1 && se)
      if (pe === 0)
        se.beforeEnter(K), i(K, H, Q), fn(() => se.enter(K), I);
      else {
        const { leave: ge, delayLeave: Se, afterLeave: Ie } = se, Re = () => {
          O.ctx.isUnmounted ? a(K) : i(K, H, Q);
        }, Te = () => {
          K._isLeaving && K[ub](
            !0
            /* cancelled */
          ), ge(K, () => {
            Re(), Ie && Ie();
          });
        };
        Se ? Se(K, Re, Te) : Te();
      }
    else
      i(K, H, Q);
  }, De = (O, H, Q, pe = !1, I = !1) => {
    const {
      type: K,
      props: ne,
      ref: se,
      children: ae,
      dynamicChildren: u,
      shapeFlag: he,
      patchFlag: ge,
      dirs: Se,
      cacheIndex: Ie,
      memo: Re
    } = O;
    if (ge === -2 && (I = !1), se != null && (gr(), wa(se, null, Q, O, !0), br()), Ie != null && (H.renderCache[Ie] = void 0), he & 256) {
      H.ctx.deactivate(O);
      return;
    }
    const Te = he & 1 && Se, oe = !Sa(O);
    let dt;
    if (oe && (dt = ne && ne.onVnodeBeforeUnmount) && zn(dt, H, O), he & 6)
      Ht(O.component, Q, pe);
    else {
      if (he & 128) {
        O.suspense.unmount(Q, pe);
        return;
      }
      Te && Ur(O, null, H, "beforeUnmount"), he & 64 ? O.type.remove(
        O,
        H,
        Q,
        Wt,
        pe
      ) : u && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !u.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (K !== Je || ge > 0 && ge & 64) ? St(
        u,
        H,
        Q,
        !1,
        !0
      ) : (K === Je && ge & 384 || !I && he & 16) && St(ae, H, Q), pe && wt(O);
    }
    const We = Re != null && Ie == null;
    (oe && (dt = ne && ne.onVnodeUnmounted) || Te || We) && fn(() => {
      dt && zn(dt, H, O), Te && Ur(O, null, H, "unmounted"), We && (O.el = null);
    }, Q);
  }, wt = (O) => {
    const { type: H, el: Q, anchor: pe, transition: I } = O;
    if (H === Je) {
      Et(Q, pe);
      return;
    }
    if (H === Ol) {
      D(O);
      return;
    }
    const K = () => {
      a(Q), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (O.shapeFlag & 1 && I && !I.persisted) {
      const { leave: ne, delayLeave: se } = I, ae = () => ne(Q, K);
      se ? se(O.el, K, ae) : ae();
    } else
      K();
  }, Et = (O, H) => {
    let Q;
    for (; O !== H; )
      Q = S(O), a(O), O = Q;
    a(H);
  }, Ht = (O, H, Q) => {
    const { bum: pe, scope: I, job: K, subTree: ne, um: se, m: ae, a: u } = O;
    zf(ae), zf(u), pe && Pl(pe), I.stop(), K && (K.flags |= 8, De(ne, O, H, Q)), se && fn(se, H), fn(() => {
      O.isUnmounted = !0;
    }, H);
  }, St = (O, H, Q, pe = !1, I = !1, K = 0) => {
    for (let ne = K; ne < O.length; ne++)
      De(O[ne], H, Q, pe, I);
  }, Tt = (O) => {
    if (O.shapeFlag & 6)
      return Tt(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const H = S(O.anchor || O.el), Q = H && H[lb];
    return Q ? S(Q) : H;
  };
  let hn = !1;
  const Xe = (O, H, Q) => {
    let pe;
    O == null ? H._vnode && (De(H._vnode, null, null, !0), pe = H._vnode.component) : R(
      H._vnode || null,
      O,
      H,
      null,
      null,
      null,
      Q
    ), H._vnode = O, hn || (hn = !0, Af(pe), Sh(), hn = !1);
  }, Wt = {
    p: R,
    um: De,
    m: ze,
    r: wt,
    mt: we,
    mc: J,
    pc: X,
    pbc: U,
    n: Tt,
    o: e
  };
  return {
    render: Xe,
    hydrate: void 0,
    createApp: Ib(Xe)
  };
}
function El({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Br({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Wb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Yh(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Ue(i) && Ue(a))
    for (let l = 0; l < i.length; l++) {
      const f = i[l];
      let d = a[l];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[l] = fr(a[l]), d.el = f.el), !n && d.patchFlag !== -2 && Yh(f, d)), d.type === Es && (d.patchFlag === -1 && (d = a[l] = fr(d)), d.el = f.el), d.type === Or && !d.el && (d.el = f.el);
    }
}
function Yb(e) {
  const t = e.slice(), n = [0];
  let i, a, l, f, d;
  const p = e.length;
  for (i = 0; i < p; i++) {
    const y = e[i];
    if (y !== 0) {
      if (a = n[n.length - 1], e[a] < y) {
        t[i] = a, n.push(i);
        continue;
      }
      for (l = 0, f = n.length - 1; l < f; )
        d = l + f >> 1, e[n[d]] < y ? l = d + 1 : f = d;
      y < e[n[l]] && (l > 0 && (t[i] = n[l - 1]), n[l] = i);
    }
  }
  for (l = n.length, f = n[l - 1]; l-- > 0; )
    n[l] = f, f = t[f];
  return n;
}
function qh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : qh(t);
}
function zf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Xh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Xh(t.subTree) : null;
}
const Jh = (e) => e.__isSuspense;
function qb(e, t) {
  t && t.pendingBranch ? Ue(e) ? t.effects.push(...e) : t.effects.push(e) : rb(e);
}
const Je = /* @__PURE__ */ Symbol.for("v-fgt"), Es = /* @__PURE__ */ Symbol.for("v-txt"), Or = /* @__PURE__ */ Symbol.for("v-cmt"), Ol = /* @__PURE__ */ Symbol.for("v-stc"), Na = [];
let _n = null;
function Me(e = !1) {
  Na.push(_n = e ? null : []);
}
function Xb() {
  Na.pop(), _n = Na[Na.length - 1] || null;
}
let Ea = 1;
function jf(e, t = !1) {
  Ea += e, e < 0 && _n && t && (_n.hasOnce = !0);
}
function Zh(e) {
  return e.dynamicChildren = Ea > 0 ? _n || Fi : null, Xb(), Ea > 0 && _n && _n.push(e), e;
}
function Pe(e, t, n, i, a, l) {
  return Zh(
    ie(
      e,
      t,
      n,
      i,
      a,
      l,
      !0
    )
  );
}
function qi(e, t, n, i, a) {
  return Zh(
    Ye(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Qh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function la(e, t) {
  return e.type === t.type && e.key === t.key;
}
const em = ({ key: e }) => e ?? null, Ko = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ct(e) || /* @__PURE__ */ en(e) || Be(e) ? { i: vn, r: e, k: t, f: !!n } : e : null);
function ie(e, t = null, n = null, i = 0, a = null, l = e === Je ? 0 : 1, f = !1, d = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && em(t),
    ref: t && Ko(t),
    scopeId: Nh,
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
    shapeFlag: l,
    patchFlag: i,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: vn
  };
  return d ? (Hc(p, n), l & 128 && e.normalize(p)) : n && (p.shapeFlag |= Ct(n) ? 8 : 16), Ea > 0 && // avoid a block node from tracking itself
  !f && // has current parent block
  _n && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && _n.push(p), p;
}
const Ye = Jb;
function Jb(e, t = null, n = null, i = 0, a = null, l = !1) {
  if ((!e || e === Oh) && (e = Or), Qh(e)) {
    const d = Gi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Hc(d, n), Ea > 0 && !l && _n && (d.shapeFlag & 6 ? _n[_n.indexOf(e)] = d : _n.push(d)), d.patchFlag = -2, d;
  }
  if (cy(e) && (e = e.__vccOpts), t) {
    t = Zb(t);
    let { class: d, style: p } = t;
    d && !Ct(d) && (t.class = st(d)), lt(p) && (/* @__PURE__ */ Rc(p) && !Ue(p) && (p = tn({}, p)), t.style = Dt(p));
  }
  const f = Ct(e) ? 1 : Jh(e) ? 128 : cb(e) ? 64 : lt(e) ? 4 : Be(e) ? 2 : 0;
  return ie(
    e,
    t,
    n,
    i,
    a,
    f,
    l,
    !0
  );
}
function Zb(e) {
  return e ? /* @__PURE__ */ Rc(e) || Hh(e) ? tn({}, e) : e : null;
}
function Gi(e, t, n = !1, i = !1) {
  const { props: a, ref: l, patchFlag: f, children: d, transition: p } = e, y = t ? Tr(a || {}, t) : a, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && em(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? Ue(l) ? l.concat(Ko(t)) : [l, Ko(t)] : Ko(t)
    ) : l,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: d,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Je ? f === -1 ? 16 : f | 16 : f,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: p,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Gi(e.ssContent),
    ssFallback: e.ssFallback && Gi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && i && $c(
    _,
    p.clone(_)
  ), _;
}
function Qb(e = " ", t = 0) {
  return Ye(Es, null, e, t);
}
function Lt(e = "", t = !1) {
  return t ? (Me(), qi(Or, null, e)) : Ye(Or, null, e);
}
function Gn(e) {
  return e == null || typeof e == "boolean" ? Ye(Or) : Ue(e) ? Ye(
    Je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Qh(e) ? fr(e) : Ye(Es, null, String(e));
}
function fr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gi(e);
}
function Hc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Ue(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Hc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Hh(t) ? t._ctx = vn : a === 3 && vn && (vn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Be(t) ? (t = { default: t, _ctx: vn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Qb(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Tr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = st([t.class, i.class]));
      else if (a === "style")
        t.style = Dt([t.style, i.style]);
      else if (Ss(a)) {
        const l = t[a], f = i[a];
        f && l !== f && !(Ue(l) && l.includes(f)) ? t[a] = l ? [].concat(l, f) : f : f == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ms(a) && (t[a] = f);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function zn(e, t, n, i = null) {
  Zn(e, t, 7, [
    n,
    i
  ]);
}
const ey = Lh();
let ty = 0;
function ny(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || ey, l = {
    uid: ty++,
    vnode: e,
    type: i,
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
    scope: new k0(
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
    propsOptions: Bh(i, a),
    emitsOptions: $h(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ft,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: ft,
    data: ft,
    props: ft,
    attrs: ft,
    slots: ft,
    refs: ft,
    setupState: ft,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = Eb.bind(null, l), e.ce && e.ce(l), l;
}
let Qt = null;
const ry = () => Qt || vn;
let cs, uc;
{
  const e = Ps(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (l) => {
      a.length > 1 ? a.forEach((f) => f(l)) : a[0](l);
    };
  };
  cs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Qt = n
  ), uc = t(
    "__VUE_SSR_SETTERS__",
    (n) => Oa = n
  );
}
const Ba = (e) => {
  const t = Qt;
  return cs(e), e.scope.on(), () => {
    e.scope.off(), cs(t);
  };
}, Vf = () => {
  Qt && Qt.scope.off(), cs(null);
};
function tm(e) {
  return e.vnode.shapeFlag & 4;
}
let Oa = !1;
function iy(e, t = !1, n = !1) {
  t && uc(t);
  const { props: i, children: a } = e.vnode, l = tm(e);
  zb(e, i, l, t), Ub(e, a, n || t);
  const f = l ? ay(e, t) : void 0;
  return t && uc(!1), f;
}
function ay(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mb);
  const { setup: i } = n;
  if (i) {
    gr();
    const a = e.setupContext = i.length > 1 ? sy(e) : null, l = Ba(e), f = Ha(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = Qd(f);
    if (br(), l(), (d || e.sp) && !Sa(e) && Ch(e), d) {
      if (f.then(Vf, Vf), t)
        return f.then((p) => {
          Hf(e, p);
        }).catch((p) => {
          Ts(p, e, 0);
        });
      e.asyncDep = f;
    } else
      Hf(e, f);
  } else
    nm(e);
}
function Hf(e, t, n) {
  Be(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : lt(t) && (e.setupState = _h(t)), nm(e);
}
function nm(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Xn);
  {
    const a = Ba(e);
    gr();
    try {
      Nb(e);
    } finally {
      br(), a();
    }
  }
}
const oy = {
  get(e, t) {
    return Zt(e, "get", ""), e[t];
  }
};
function sy(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, oy),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Os(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_h(W0(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ma)
        return Ma[n](e);
    },
    has(t, n) {
      return n in t || n in Ma;
    }
  })) : e.proxy;
}
function ly(e, t = !0) {
  return Be(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function cy(e) {
  return Be(e) && "__vccOpts" in e;
}
const vt = (e, t) => /* @__PURE__ */ Z0(e, t, Oa), uy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fc;
const Uf = typeof window < "u" && window.trustedTypes;
if (Uf)
  try {
    fc = /* @__PURE__ */ Uf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const rm = fc ? (e) => fc.createHTML(e) : (e) => e, fy = "http://www.w3.org/2000/svg", dy = "http://www.w3.org/1998/Math/MathML", cr = typeof document < "u" ? document : null, Bf = cr && /* @__PURE__ */ cr.createElement("template"), hy = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? cr.createElementNS(fy, e) : t === "mathml" ? cr.createElementNS(dy, e) : n ? cr.createElement(e, { is: n }) : cr.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => cr.createTextNode(e),
  createComment: (e) => cr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => cr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, a, l) {
    const f = n ? n.previousSibling : t.lastChild;
    if (a && (a === l || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === l || !(a = a.nextSibling)); )
        ;
    else {
      Bf.innerHTML = rm(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const d = Bf.content;
      if (i === "svg" || i === "mathml") {
        const p = d.firstChild;
        for (; p.firstChild; )
          d.appendChild(p.firstChild);
        d.removeChild(p);
      }
      t.insertBefore(d, n);
    }
    return [
      // first
      f ? f.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, my = /* @__PURE__ */ Symbol("_vtc");
function py(e, t, n) {
  const i = e[my];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const us = /* @__PURE__ */ Symbol("_vod"), im = /* @__PURE__ */ Symbol("_vsh"), Ga = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[us] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ca(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), ca(e, !0), i.enter(e)) : i.leave(e, () => {
      ca(e, !1);
    }) : ca(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ca(e, t);
  }
};
function ca(e, t) {
  e.style.display = t ? e[us] : "none", e[im] = !t;
}
const gy = /* @__PURE__ */ Symbol(""), by = /(?:^|;)\s*display\s*:/;
function yy(e, t, n) {
  const i = e.style, a = Ct(n);
  let l = !1;
  if (n && !a) {
    if (t)
      if (Ct(t))
        for (const f of t.split(";")) {
          const d = f.slice(0, f.indexOf(":")).trim();
          n[d] == null && Wo(i, d, "");
        }
      else
        for (const f in t)
          n[f] == null && Wo(i, f, "");
    for (const f in n)
      f === "display" && (l = !0), Wo(i, f, n[f]);
  } else if (a) {
    if (t !== n) {
      const f = i[gy];
      f && (n += ";" + f), i.cssText = n, l = by.test(n);
    }
  } else t && e.removeAttribute("style");
  us in e && (e[us] = l ? i.display : "", e[im] && (i.display = "none"));
}
const Gf = /\s*!important$/;
function Wo(e, t, n) {
  if (Ue(n))
    n.forEach((i) => Wo(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = vy(e, t);
    Gf.test(n) ? e.setProperty(
      li(i),
      n.replace(Gf, ""),
      "important"
    ) : e[i] = n;
  }
}
const Kf = ["Webkit", "Moz", "ms"], Rl = {};
function vy(e, t) {
  const n = Rl[t];
  if (n)
    return n;
  let i = sn(t);
  if (i !== "filter" && i in e)
    return Rl[t] = i;
  i = ks(i);
  for (let a = 0; a < Kf.length; a++) {
    const l = Kf[a] + i;
    if (l in e)
      return Rl[t] = l;
  }
  return t;
}
const Wf = "http://www.w3.org/1999/xlink";
function Yf(e, t, n, i, a, l = M0(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Wf, t.slice(6, t.length)) : e.setAttributeNS(Wf, t, n) : n == null || l && !rh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : Jn(n) ? String(n) : n
  );
}
function qf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? rm(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const d = l === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (d !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let f = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = rh(n) : n == null && d === "string" ? (n = "", f = !0) : d === "number" && (n = 0, f = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  f && e.removeAttribute(a || t);
}
function _y(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function xy(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Xf = /* @__PURE__ */ Symbol("_vei");
function wy(e, t, n, i, a = null) {
  const l = e[Xf] || (e[Xf] = {}), f = l[t];
  if (i && f)
    f.value = i;
  else {
    const [d, p] = Sy(t);
    if (i) {
      const y = l[t] = ky(
        i,
        a
      );
      _y(e, d, y, p);
    } else f && (xy(e, d, f, p), l[t] = void 0);
  }
}
const Jf = /(?:Once|Passive|Capture)$/;
function Sy(e) {
  let t;
  if (Jf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Jf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : li(e.slice(2)), t];
}
let Fl = 0;
const My = /* @__PURE__ */ Promise.resolve(), Ny = () => Fl || (My.then(() => Fl = 0), Fl = Date.now());
function ky(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Zn(
      Py(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = Ny(), n;
}
function Py(e, t) {
  if (Ue(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return t;
}
const Zf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ay = (e, t, n, i, a, l) => {
  const f = a === "svg";
  t === "class" ? py(e, i, f) : t === "style" ? yy(e, n, i) : Ss(t) ? Ms(t) || wy(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cy(e, t, i, f)) ? (qf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Yf(e, t, i, f, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ty(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ct(i))) ? qf(e, sn(t), i, l, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Yf(e, t, i, f));
};
function Cy(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Zf(t) && Be(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Zf(t) && Ct(n) ? !1 : t in e;
}
function Ty(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = sn(t);
  return Array.isArray(n) ? n.some((a) => sn(a) === i) : Object.keys(n).some((a) => sn(a) === i);
}
const Iy = ["ctrl", "shift", "alt", "meta"], Dy = {
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
  exact: (e, t) => Iy.some((n) => e[`${n}Key`] && !t.includes(n))
}, am = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...l) => {
    for (let f = 0; f < t.length; f++) {
      const d = Dy[t[f]];
      if (d && d(a, t)) return;
    }
    return e(a, ...l);
  }));
}, Ey = /* @__PURE__ */ tn({ patchProp: Ay }, hy);
let Qf;
function Oy() {
  return Qf || (Qf = Gb(Ey));
}
const Ry = ((...e) => {
  const t = Oy().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Ly(i);
    if (!a) return;
    const l = t._component;
    !Be(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const f = n(a, !1, Fy(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
  }, t;
});
function Fy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ly(e) {
  return Ct(e) ? document.querySelector(e) : e;
}
const xt = Math.PI / 180, om = Math.PI * 2, $y = 2048;
function ut(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Rr(e, t, n) {
  return { x: e, y: t, z: n };
}
function fs(e, t) {
  return Rr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ri(e, t) {
  return Rr(e.x * t, e.y * t, e.z * t);
}
function Yo(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ed(e, t) {
  return Rr(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ga(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Rr(e.x / t, e.y / t, e.z / t);
}
function zy(e, t) {
  const n = Number(e || 0) * xt, i = Number(t || 0) * xt, a = Math.cos(i);
  return Rr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function qo(e, t, n = 0) {
  const i = zy(e, t);
  let a = Rr(0, 1, 0);
  Math.abs(Yo(i, a)) > 0.999 && (a = Rr(0, 0, 1));
  let l = ga(ed(a, i)), f = ga(ed(i, l));
  const d = Number(n || 0) * xt, p = Math.cos(d), y = Math.sin(d), _ = fs(Ri(l, p), Ri(f, y)), w = fs(Ri(l, -y), Ri(f, p));
  return l = ga(_), f = ga(w), { fwd: i, right: l, up: f };
}
function jy(e, t) {
  const n = (Number(e || 0) - 0.5) * om, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return Rr(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function td(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), l = Math.max(1, Number(n || 1)), f = Math.max(512, $y), d = Math.min(1, f / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: l,
    renderScale: d,
    width: Math.max(1, Math.round(i * d)),
    height: Math.max(1, Math.round(a * d))
  };
}
function nd(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function Ll(e, t, n) {
  const i = nd(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = nd(e, e.FRAGMENT_SHADER, n);
  } catch (f) {
    throw e.deleteShader(i), f;
  }
  const l = e.createProgram();
  if (e.attachShader(l, i), e.attachShader(l, a), e.linkProgram(l), e.deleteShader(i), e.deleteShader(a), !e.getProgramParameter(l, e.LINK_STATUS)) {
    const f = e.getProgramInfoLog(l) || "program link failed";
    throw e.deleteProgram(l), new Error(f);
  }
  return l;
}
const $l = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, Vy = `#version 300 es
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
}`, Hy = `#version 300 es
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
}`, Uy = `#version 300 es
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
function ua(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(ut(i, 1, 179) * xt * 0.5) * (n / Math.max(t, 1))) / xt);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: ut(i, 1, 179),
    vFovDeg: ut(a, 0.1, 179)
  };
}
function By(e) {
  const t = qo(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(ut(Number(e.hFovDeg), 0.1, 179) * 0.5 * xt),
    tanY: Math.tan(ut(Number(e.vFovDeg), 0.1, 179) * 0.5 * xt),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: ut(Number(e.opacity ?? 1), 0, 1)
  };
}
function Gy(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, l = null, f = null, d = null, p = null, y = null, _ = null, w = null, S = null, A = !1, v = td(1, 1, 1), R = null, V = null, j = null, k = null, E = null;
  const D = /* @__PURE__ */ new Map();
  let L = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, W = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, F = {
    paint: !1,
    mask: !1
  };
  function J(I = null, K = null) {
    const ne = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, ne), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, I ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, K ?? n.CLAMP_TO_EDGE), ne;
  }
  function ce() {
    if (A) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = Ll(n, $l, Vy), a = Ll(n, $l, Hy), l = Ll(n, $l, Uy), R = {
        mode: n.getUniformLocation(i, "u_mode"),
        yaw: n.getUniformLocation(i, "u_yaw"),
        pitch: n.getUniformLocation(i, "u_pitch"),
        roll: n.getUniformLocation(i, "u_roll"),
        hFov: n.getUniformLocation(i, "u_hfov"),
        vFov: n.getUniformLocation(i, "u_vfov"),
        viewport: n.getUniformLocation(i, "u_viewport"),
        opacity: n.getUniformLocation(i, "u_opacity"),
        coverage: n.getUniformLocation(i, "u_coverage"),
        background: n.getUniformLocation(i, "u_background")
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
      }, j = {
        texture: n.getUniformLocation(l, "u_texture"),
        mode: n.getUniformLocation(l, "u_mode"),
        viewRight: n.getUniformLocation(l, "u_viewRight"),
        viewUp: n.getUniformLocation(l, "u_viewUp"),
        viewFwd: n.getUniformLocation(l, "u_viewFwd"),
        viewHfov: n.getUniformLocation(l, "u_viewHfov"),
        viewVfov: n.getUniformLocation(l, "u_viewVfov"),
        stickerRight: n.getUniformLocation(l, "u_stickerRight"),
        stickerUp: n.getUniformLocation(l, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(l, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(l, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(l, "u_stickerTanY"),
        crop: n.getUniformLocation(l, "u_crop"),
        opacity: n.getUniformLocation(l, "u_opacity")
      }, f = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, f), n.bufferData(n.ARRAY_BUFFER, new Float32Array([
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
      ]), n.STATIC_DRAW), d = J(n.REPEAT, n.CLAMP_TO_EDGE), p = J(n.REPEAT, n.CLAMP_TO_EDGE), y = J(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), A = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function U() {
    var I;
    if (n) {
      try {
        f && n.deleteBuffer(f), d && n.deleteTexture(d), p && n.deleteTexture(p), y && n.deleteTexture(y), D.forEach((K) => {
          $e(K);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), l && n.deleteProgram(l), (I = n.getExtension("WEBGL_lose_context")) == null || I.loseContext();
      } catch {
      }
      n = null, i = null, a = null, l = null, f = null, d = null, p = null, y = null, D.clear(), _ = null, w = null, S = null, W = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, F = {
        paint: !1,
        mask: !1
      }, k = null, E = null, A = !1;
    }
  }
  function ve(I, K, ne = 1) {
    v = td(I, K, ne), (t.width !== v.width || t.height !== v.height) && (t.width = v.width, t.height = v.height);
  }
  function xe(I) {
    I === "background" ? _ = null : I === "paint" ? w = null : S = null, W[I] && (W[I].width = 0, W[I].height = 0);
  }
  function C() {
    F.paint = !1, F.mask = !1;
  }
  function we(I) {
    C(), I === "paint" ? F.paint = !0 : I === "mask" && (F.mask = !0);
  }
  function te(I, K, ne = [], se = { width: 0, height: 0 }, ae = !1) {
    if (!n || !I || !K) return !1;
    const u = Number(K.width || K.videoWidth || K.naturalWidth || 0), he = Number(K.height || K.videoHeight || K.naturalHeight || 0);
    if (!(u > 1) || !(he > 1)) return !1;
    const ge = Array.isArray(ne) ? ne.filter((Se) => Se && Se.w > 0 && Se.h > 0) : [];
    if (!ge.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, I), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ae ? 1 : 0), se.width !== u || se.height !== he)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), se.width = u, se.height = he, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (k || (k = document.createElement("canvas"), E = k.getContext("2d")), !E)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const Se of ge) {
      const Ie = Math.max(0, Math.floor(Number(Se.x || 0))), Re = Math.max(0, Math.floor(Number(Se.y || 0))), Te = Math.min(u - Ie, Math.ceil(Number(Se.w || 0))), oe = Math.min(he - Re, Math.ceil(Number(Se.h || 0)));
      if (!(Te <= 0 || oe <= 0)) {
        if (k.width !== Te || k.height !== oe) {
          if (k.width = Te, k.height = oe, E = k.getContext("2d"), !E)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          E.clearRect(0, 0, Te, oe);
        E.drawImage(K, Ie, Re, Te, oe, 0, 0, Te, oe), n.texSubImage2D(n.TEXTURE_2D, 0, Ie, Re, n.RGBA, n.UNSIGNED_BYTE, k);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function ye(I, K, ne, se, ae = null, u = !1) {
    if (!ce()) return !1;
    if (!ne)
      return xe(I), !1;
    const he = String(se ?? ""), ge = I === "background" ? _ : I === "paint" ? w : S, Se = W[I], Ie = Number(ne.width || ne.videoWidth || ne.naturalWidth || 0), Re = Number(ne.height || ne.videoHeight || ne.naturalHeight || 0), Te = Se.width !== Ie || Se.height !== Re;
    if (ge === he && !Te && !(Array.isArray(ae) && ae.length)) return !0;
    if (!(Ie > 0) || !(Re > 0))
      return xe(I), !1;
    if (n.bindTexture(n.TEXTURE_2D, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, u ? 1 : 0), !(Array.isArray(ae) && ae.length ? te(K, ne, ae, Se, u) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ne), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), xe(I), !1;
      Se.width = Ie, Se.height = Re;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), I === "background" ? _ = he : I === "paint" ? w = he : S = he, !0;
  }
  function $(I, K) {
    return ye("background", d, I, K, null, !0);
  }
  function X(I, K, ne = null) {
    return ye("paint", p, I, K, ne, !0);
  }
  function _e(I, K, ne = null) {
    return ye("mask", y, I, K, ne, !0);
  }
  function $e(I) {
    I != null && I.texture && n && n.deleteTexture(I.texture);
  }
  function ze(I = /* @__PURE__ */ new Set()) {
    D.forEach((K, ne) => {
      I.has(ne) || ($e(K), D.delete(ne));
    });
  }
  function De(I) {
    if (!n || !(I != null && I.assetId) || !(I != null && I.source)) return null;
    const K = String(I.assetId), ne = String(I.revision ?? ""), se = I.source, ae = Number(se.width || se.naturalWidth || se.videoWidth || 0), u = Number(se.height || se.naturalHeight || se.videoHeight || 0);
    if (ae <= 0 || u <= 0) return null;
    let he = D.get(K);
    if (he || (he = {
      texture: J(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, D.set(K, he)), he.revision !== ne || he.width !== ae || he.height !== u) {
      if (n.bindTexture(n.TEXTURE_2D, he.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, se), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), he.revision = ne, he.width = ae, he.height = u;
    }
    return he.texture;
  }
  function wt(I = []) {
    if (!ce()) return !1;
    const K = /* @__PURE__ */ new Set();
    return I.forEach((ne) => {
      !(ne != null && ne.assetId) || !(ne != null && ne.source) || (K.add(String(ne.assetId)), De(ne));
    }), ze(K), !0;
  }
  function Et() {
    return ce() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Ht(I) {
    n.useProgram(I), n.bindBuffer(n.ARRAY_BUFFER, f), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function St(I, K = {}) {
    if (!_) return null;
    n.disable(n.BLEND), Ht(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, d), n.uniform1i(R.background, 0), n.uniform2f(R.viewport, Math.max(1, v.width), Math.max(1, v.height)), n.uniform1i(R.mode, (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1);
    const ne = ua(I, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(R.yaw, Number(ne.yawDeg || 0) * xt), n.uniform1f(R.pitch, Number(ne.pitchDeg || 0) * xt), n.uniform1f(R.roll, Number(ne.rollDeg || 0) * xt), n.uniform1f(R.hFov, ut(Number(ne.hFovDeg || 90), 0.1, 179) * xt), n.uniform1f(R.vFov, ut(Number(ne.vFovDeg || 60), 0.1, 179) * xt), n.uniform1f(R.opacity, ut(Number(K.backgroundOpacity ?? 1), 0, 1));
    const se = Number((I == null ? void 0 : I.coverageDeg) || (K == null ? void 0 : K.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(R.coverage, se), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Tt(I, K = {}) {
    const ne = F.paint && w != null, se = F.mask && S != null;
    if (!ne && !se) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ht(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, p), n.uniform1i(V.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, y), n.uniform1i(V.mask, 1), n.uniform1i(V.mode, (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1);
    const ae = ua(I, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(V.yaw, Number(ae.yawDeg || 0) * xt), n.uniform1f(V.pitch, Number(ae.pitchDeg || 0) * xt), n.uniform1f(V.roll, Number(ae.rollDeg || 0) * xt), n.uniform1f(V.hFov, ut(Number(ae.hFovDeg || 90), 0.1, 179) * xt), n.uniform1f(V.vFov, ut(Number(ae.vFovDeg || 60), 0.1, 179) * xt), n.uniform1f(V.paintOpacity, ut(Number(K.paintOpacity ?? 1), 0, 1)), n.uniform1f(V.maskOpacity, ut(Number(K.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(V.hasPaint, ne ? 1 : 0), n.uniform1i(V.hasMask, se ? 1 : 0), n.uniform1i(V.showMaskTint, K.showMaskTint === !1 ? 0 : 1), n.uniform3f(V.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function hn(I, K) {
    var Se, Ie, Re, Te, oe, dt, We;
    const ne = Array.isArray(I == null ? void 0 : I.objects) ? I.objects : [];
    if (!ne.length) {
      C(), ze(/* @__PURE__ */ new Set());
      return;
    }
    const se = (K == null ? void 0 : K.mode) === "unwrap" ? 0 : (K == null ? void 0 : K.mode) === "cutout" ? 2 : 1, ae = ua(K, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, u = qo(ae.yawDeg, ae.pitchDeg, ae.rollDeg), he = ne.slice().sort((ke, Qe) => Number((ke == null ? void 0 : ke.zIndex) || 0) - Number((Qe == null ? void 0 : Qe.zIndex) || 0)), ge = /* @__PURE__ */ new Set();
    C();
    for (const ke of he)
      if (!(!ke || ke.visible === !1)) {
        if (ke.type === "sticker") {
          const Qe = String(((Se = ke == null ? void 0 : ke.params) == null ? void 0 : Se.assetId) || (ke == null ? void 0 : ke.id) || "");
          if (!Qe) continue;
          ge.add(Qe);
          const me = De({
            assetId: Qe,
            source: ke.source,
            revision: ke.revision
          });
          if (!me) continue;
          const kt = By({
            yawDeg: ((Ie = ke == null ? void 0 : ke.transform) == null ? void 0 : Ie.yawDeg) || 0,
            pitchDeg: ((Re = ke == null ? void 0 : ke.transform) == null ? void 0 : Re.pitchDeg) || 0,
            rollDeg: ((Te = ke == null ? void 0 : ke.transform) == null ? void 0 : Te.rollDeg) || 0,
            hFovDeg: ((oe = ke == null ? void 0 : ke.transform) == null ? void 0 : oe.hFovDeg) || 30,
            vFovDeg: ((dt = ke == null ? void 0 : ke.transform) == null ? void 0 : dt.vFovDeg) || 30,
            crop: ((We = ke == null ? void 0 : ke.params) == null ? void 0 : We.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (ke == null ? void 0 : ke.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ht(l), n.uniform1i(j.texture, 0), n.uniform1i(j.mode, se), n.uniform3f(j.viewRight, u.right.x, u.right.y, u.right.z), n.uniform3f(j.viewUp, u.up.x, u.up.y, u.up.z), n.uniform3f(j.viewFwd, u.fwd.x, u.fwd.y, u.fwd.z), n.uniform1f(j.viewHfov, ut(Number(ae.hFovDeg || 90), 0.1, 179) * xt), n.uniform1f(j.viewVfov, ut(Number(ae.vFovDeg || 60), 0.1, 179) * xt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, me), n.uniform3f(j.stickerRight, kt.right.x, kt.right.y, kt.right.z), n.uniform3f(j.stickerUp, kt.up.x, kt.up.y, kt.up.z), n.uniform3f(j.stickerFwd, kt.fwd.x, kt.fwd.y, kt.fwd.z), n.uniform1f(j.stickerTanX, Math.max(1e-6, kt.tanX)), n.uniform1f(j.stickerTanY, Math.max(1e-6, kt.tanY)), n.uniform4f(
            j.crop,
            ut(Number(kt.crop.x0 ?? 0), 0, 1),
            ut(Number(kt.crop.y0 ?? 0), 0, 1),
            ut(Number(kt.crop.x1 ?? 1), 0, 1),
            ut(Number(kt.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(j.opacity, kt.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (ke.type === "paint" || ke.type === "raster") {
          if (!X(ke.source, ke.revision ?? "")) continue;
          we("paint"), Tt(K, {
            paintOpacity: Number(ke.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (ke.type === "mask") {
          if (!_e(ke.source, ke.revision ?? "")) continue;
          we("mask"), Tt(K, {
            paintOpacity: 0,
            maskOpacity: Number(ke.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    ze(ge), C();
  }
  function Xe(I) {
    return !Et() || !_ ? null : (St({
      mode: "panorama",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      fovDeg: (I == null ? void 0 : I.fovDeg) || 100
    }, I), t);
  }
  function Wt(I) {
    return !Et() || !_ ? null : (St({ mode: "unwrap" }, I), t);
  }
  function Pn(I) {
    return !Et() || !_ ? null : (St({
      mode: "cutout",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      rollDeg: (I == null ? void 0 : I.rollDeg) || 0,
      hFovDeg: (I == null ? void 0 : I.hFovDeg) || 90,
      vFovDeg: (I == null ? void 0 : I.vFovDeg) || 60
    }, I), t);
  }
  function O(I = {}) {
    if (!ce() || (ve(I.width, I.height, I.dpr || 1), !Et())) return null;
    const K = Object.prototype.hasOwnProperty.call(I, "backgroundSource"), ne = Object.prototype.hasOwnProperty.call(I, "paintSource"), se = Object.prototype.hasOwnProperty.call(I, "maskSource"), ae = Object.prototype.hasOwnProperty.call(I, "textures"), u = Object.prototype.hasOwnProperty.call(I, "scene");
    return K && $(I.backgroundSource, I.backgroundRevision ?? ""), ne && X(I.paintSource, I.paintRevision ?? ""), se && _e(I.maskSource, I.maskRevision ?? ""), ae && (wt(I.textures || []), L.textures = I.textures || []), u && (L.scene = I.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "objectPass") && (L.objectPass = I.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "backgroundOpacity") && (L.backgroundOpacity = Number(I.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(I, "showMaskTint") && (L.showMaskTint = I.showMaskTint === !0), Object.prototype.hasOwnProperty.call(I, "coverageDeg") && (L.coverageDeg = Number(I.coverageDeg || 360) === 180 ? 180 : 360), _ && St(I.view, {
      ...I,
      backgroundOpacity: Number(I.backgroundOpacity ?? L.backgroundOpacity ?? 1),
      coverageDeg: Number(I.coverageDeg || L.coverageDeg || 360) === 180 ? 180 : 360
    }), hn(
      L.objectPass || { objects: [] },
      I.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function H(I = {}) {
    return ce() ? !!O({
      ...I,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(I.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function Q(I, K, ne) {
    const se = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || v.sourceWidth || v.width || 1)), ae = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || v.sourceHeight || v.height || 1)), u = Number(K), he = Number(ne);
    if (!Number.isFinite(u) || !Number.isFinite(he)) return null;
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return { u: (u / se % 1 + 1) % 1, v: ut(he / ae, 0, 1) };
    const ge = ua(I, se, ae);
    if (!ge) return null;
    const Se = qo(ge.yawDeg, ge.pitchDeg, ge.rollDeg), Ie = (u - se * 0.5) / (se * 0.5) * Math.tan(ut(ge.hFovDeg, 1, 179) * xt * 0.5), Re = (ae * 0.5 - he) / (ae * 0.5) * Math.tan(ut(ge.vFovDeg, 0.1, 179) * xt * 0.5), Te = ga(fs(fs(Ri(Se.right, Ie), Ri(Se.up, Re)), Se.fwd));
    return {
      u: (Math.atan2(Te.x, Te.z) / om + 0.5 + 1) % 1,
      v: ut(0.5 - Math.asin(ut(Te.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function pe(I, K, ne) {
    const se = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || v.sourceWidth || v.width || 1)), ae = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || v.sourceHeight || v.height || 1));
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return {
        x: (Number(K || 0) % 1 + 1) % 1 * se,
        y: ut(Number(ne || 0), 0, 1) * ae,
        visible: !0
      };
    const u = ua(I, se, ae);
    if (!u)
      return { x: se * 0.5, y: ae * 0.5, visible: !1 };
    const he = qo(u.yawDeg, u.pitchDeg, u.rollDeg), ge = jy(K, ne), Se = Yo(ge, he.right), Ie = Yo(ge, he.up), Re = Yo(ge, he.fwd);
    if (Re <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Te = se * 0.5 + Se / Re * (se * 0.5 / Math.tan(ut(u.hFovDeg, 1, 179) * xt * 0.5)), oe = ae * 0.5 - Ie / Re * (ae * 0.5 / Math.tan(ut(u.vFovDeg, 0.1, 179) * xt * 0.5));
    return { x: Te, y: oe, visible: Te >= 0 && Te <= se && oe >= 0 && oe <= ae };
  }
  return {
    init: ce,
    dispose: U,
    setViewport: ve,
    setBackgroundErp: $,
    setPaintErp: X,
    setMaskErp: _e,
    renderPanorama: Xe,
    renderUnwrap: Wt,
    renderCutout: Pn,
    renderScene: O,
    syncState: H,
    screenToErpUv: Q,
    erpUvToScreen: pe,
    getCanvas() {
      return t;
    },
    isSupported() {
      return ce();
    },
    getViewport() {
      return { ...v };
    }
  };
}
function rd(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function Ky() {
  const e = /* @__PURE__ */ new Map();
  function t(f) {
    return f != null ? String(f) : "default";
  }
  function n(f, d, p) {
    const y = t(f);
    let _ = e.get(y) || null;
    if (!_) {
      const A = document.createElement("canvas"), v = A.getContext("2d");
      if (!v) return null;
      _ = {
        id: y,
        canvas: A,
        ctx: v,
        width: 0,
        height: 0
      }, e.set(y, _);
    }
    const w = rd(d), S = rd(p);
    return _.width !== w && (_.canvas.width = w, _.width = w), _.height !== S && (_.canvas.height = S, _.height = S), _;
  }
  function i(f) {
    return e.get(t(f)) || null;
  }
  function a(f) {
    const d = i(f);
    d && d.ctx.clearRect(0, 0, d.canvas.width, d.canvas.height);
  }
  function l() {
    e.clear();
  }
  return {
    ensureTarget: n,
    getTarget: i,
    clearTarget: a,
    dispose: l
  };
}
const Wy = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), Yy = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function sm(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function qy(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function Xy(e = {}) {
  const t = Yy.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? sm(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Jy(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!Wy.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? sm(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: qy(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Zy(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => Jy(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const l = Number((i == null ? void 0 : i.zIndex) || 0), f = Number((a == null ? void 0 : a.zIndex) || 0);
      return l !== f ? l - f : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Ki(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: Xy((e == null ? void 0 : e.background) || {}),
    objectPass: Zy((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function Qy(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Uc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? Qy(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function ev(e, t, n = {}) {
  return e ? Uc({
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
function tv(e, t, n = {}) {
  return e ? Uc({
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
function nv(e, t, n = {}) {
  return e ? Uc({
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
function lm(e = {}) {
  const t = [], n = ev(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = tv(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((l, f) => {
    const d = nv(
      (l == null ? void 0 : l.source) || null,
      (l == null ? void 0 : l.revision) || "",
      {
        id: String((l == null ? void 0 : l.id) || `raster_layer_${f}`),
        zIndex: Number((l == null ? void 0 : l.zIndex) ?? (l == null ? void 0 : l.z_index) ?? 90),
        opacity: Number((l == null ? void 0 : l.opacity) ?? 1),
        visible: (l == null ? void 0 : l.visible) !== !1,
        transform: (l == null ? void 0 : l.transform) || null,
        params: (l == null ? void 0 : l.params) || {}
      }
    );
    d && t.push(d);
  }), t.sort((l, f) => {
    const d = Number((l == null ? void 0 : l.zIndex) || 0), p = Number((f == null ? void 0 : f.zIndex) || 0);
    return d !== p ? d - p : String((l == null ? void 0 : l.id) || "").localeCompare(String((f == null ? void 0 : f.id) || ""));
  });
}
function Bc(e, t) {
  const n = new Map(
    (Array.isArray(t) ? t : []).map((i) => [String((i == null ? void 0 : i.assetId) || ""), i]).filter(([i, a]) => i && (a == null ? void 0 : a.source))
  );
  return Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers.map((i) => {
    const a = n.get(String((i == null ? void 0 : i.assetId) || ""));
    return a ? {
      id: String((i == null ? void 0 : i.id) || ""),
      type: "sticker",
      source: a.source,
      revision: a.revision,
      zIndex: Number((i == null ? void 0 : i.zIndex) || 0),
      opacity: Number((i == null ? void 0 : i.opacity) ?? 1),
      visible: (i == null ? void 0 : i.visible) !== !1,
      transform: {
        yawDeg: Number((i == null ? void 0 : i.yawDeg) || 0),
        pitchDeg: Number((i == null ? void 0 : i.pitchDeg) || 0),
        rollDeg: Number((i == null ? void 0 : i.rollDeg) || 0),
        hFovDeg: Number((i == null ? void 0 : i.hFovDeg) || 30),
        vFovDeg: Number((i == null ? void 0 : i.vFovDeg) || 30)
      },
      params: {
        assetId: String((i == null ? void 0 : i.assetId) || ""),
        crop: (i == null ? void 0 : i.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
      }
    } : null;
  }).filter(Boolean) : [];
}
function Rs(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, l = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], f = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Ki({
    stateRevision: i,
    background: {
      type: "erp_image",
      source: t,
      revision: f,
      coverageDeg: n,
      opacity: Number((e == null ? void 0 : e.backgroundOpacity) ?? 1)
    },
    objectPass: {
      selectedId: (a == null ? void 0 : a.selectedId) ?? null,
      hoveredId: (a == null ? void 0 : a.hoveredId) ?? null,
      objects: Bc(a, l)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function ba(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = Bc(t, n), a = lm({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Ki({
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
      objects: [...i, ...a]
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function rv(e = {}) {
  var l, f, d, p, y, _, w, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const A = Ki(e), v = Array.isArray((l = A.objectPass) == null ? void 0 : l.objects) ? A.objectPass.objects : [], R = {
      stickers: v.filter((E) => E.type === "sticker").map((E) => {
        var D, L, W, F, J, ce, U, ve, xe, C, we, te, ye;
        return {
          id: E.id,
          assetId: String(((D = E == null ? void 0 : E.params) == null ? void 0 : D.assetId) || ((L = E == null ? void 0 : E.params) == null ? void 0 : L.asset_id) || (E == null ? void 0 : E.id) || ""),
          yawDeg: Number(((W = E == null ? void 0 : E.transform) == null ? void 0 : W.yawDeg) ?? ((F = E == null ? void 0 : E.params) == null ? void 0 : F.yawDeg) ?? 0),
          pitchDeg: Number(((J = E == null ? void 0 : E.transform) == null ? void 0 : J.pitchDeg) ?? ((ce = E == null ? void 0 : E.params) == null ? void 0 : ce.pitchDeg) ?? 0),
          rollDeg: Number(((U = E == null ? void 0 : E.transform) == null ? void 0 : U.rollDeg) ?? ((ve = E == null ? void 0 : E.params) == null ? void 0 : ve.rollDeg) ?? 0),
          hFovDeg: Number(((xe = E == null ? void 0 : E.transform) == null ? void 0 : xe.hFovDeg) ?? ((C = E == null ? void 0 : E.params) == null ? void 0 : C.hFovDeg) ?? 30),
          vFovDeg: Number(((we = E == null ? void 0 : E.transform) == null ? void 0 : we.vFovDeg) ?? ((te = E == null ? void 0 : E.params) == null ? void 0 : te.vFovDeg) ?? 30),
          crop: ((ye = E == null ? void 0 : E.params) == null ? void 0 : ye.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((E == null ? void 0 : E.opacity) ?? 1),
          visible: (E == null ? void 0 : E.visible) !== !1,
          zIndex: Number((E == null ? void 0 : E.zIndex) ?? 0)
        };
      }),
      selectedId: ((f = A.objectPass) == null ? void 0 : f.selectedId) ?? null,
      hoveredId: ((d = A.objectPass) == null ? void 0 : d.hoveredId) ?? null
    }, V = v.filter((E) => E.type === "sticker").map((E) => {
      var D, L;
      return {
        assetId: String(((D = E == null ? void 0 : E.params) == null ? void 0 : D.assetId) || ((L = E == null ? void 0 : E.params) == null ? void 0 : L.asset_id) || (E == null ? void 0 : E.id) || ""),
        source: E.source || null,
        revision: String((E == null ? void 0 : E.revision) || "")
      };
    }).filter((E) => E.assetId && E.source), j = v.find((E) => E.type === "paint") || null, k = v.find((E) => E.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((p = A.background) == null ? void 0 : p.source) || null,
      backgroundRevision: String(((y = A.background) == null ? void 0 : y.revision) || ""),
      coverageDeg: Number(((_ = A.background) == null ? void 0 : _.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (j == null ? void 0 : j.source) || null,
      paintRevision: String((j == null ? void 0 : j.revision) || ""),
      maskSource: (k == null ? void 0 : k.source) || null,
      maskRevision: String((k == null ? void 0 : k.revision) || ""),
      textures: V,
      scene: R,
      objectPass: A.objectPass,
      backgroundOpacity: Number(((w = A.background) == null ? void 0 : w.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = Ki({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...Bc(t, n),
        ...lm({
          paintSource: e.paintSource || i.paintSource || null,
          paintRevision: e.paintRevision || i.paintRevision || "",
          paintOptions: e.paintOptions || null,
          maskSource: e.maskSource || i.maskSource || null,
          maskRevision: e.maskRevision || i.maskRevision || "",
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
    paintSource: i.paintSource || null,
    paintRevision: String(i.paintRevision || ""),
    maskSource: i.maskSource || null,
    maskRevision: String(i.maskRevision || ""),
    textures: n,
    scene: t,
    objectPass: a,
    backgroundOpacity: Number(e.backgroundOpacity ?? 1),
    showMaskTint: e.showMaskTint === !0
  };
}
function iv(e) {
  let t = null;
  function n(l = {}) {
    const f = rv(l);
    return e.syncState({
      stateRevision: f.stateRevision,
      backgroundSource: f.backgroundSource,
      backgroundRevision: f.backgroundRevision,
      coverageDeg: f.coverageDeg,
      paintSource: f.paintSource,
      paintRevision: f.paintRevision,
      maskSource: f.maskSource,
      maskRevision: f.maskRevision,
      textures: f.textures,
      scene: f.scene,
      objectPass: f.objectPass,
      backgroundOpacity: f.backgroundOpacity,
      showMaskTint: f.showMaskTint
    }) ? (t = f, !0) : !1;
  }
  function i() {
    return t;
  }
  function a() {
    t = null;
  }
  return {
    sync: n,
    snapshot: i,
    clear: a
  };
}
function ti(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (V) => Gy(V), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => Ky(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (V) => iv(V), a = t(e), l = (e == null ? void 0 : e.targetCanvas) || null, f = n();
  let d = null;
  const p = i({
    syncState(V = {}) {
      if (typeof a.syncState == "function") {
        const j = { ...V }, k = a.syncState(j);
        return k && (d = j, k);
      }
      return d = { ...V }, !0;
    }
  });
  function y(V = {}) {
    return p.sync(V);
  }
  function _(V = {}, j = {}) {
    return d ? a.renderScene({
      ...d,
      view: V,
      width: j.width,
      height: j.height,
      dpr: j.dpr,
      backgroundOpacity: j.backgroundOpacity ?? d.backgroundOpacity ?? 1,
      showMaskTint: j.showMaskTint ?? d.showMaskTint ?? !1
    }) : null;
  }
  function w(V, j, k = {}, E = {}) {
    if (!j) return !1;
    const D = _(k, {
      ...E,
      width: j.w,
      height: j.h
    });
    return D ? V ? (V.canvas && D === V.canvas || V.drawImage(D, j.x, j.y, j.w, j.h), !0) : !!l && D === l : !1;
  }
  function S(V, j = {}, k = {}) {
    const E = Number(k.width || 0), D = Number(k.height || 0);
    if (!(E > 0) || !(D > 0)) return null;
    const L = f.ensureTarget(V, E, D);
    if (!L) return null;
    const W = _(j, {
      ...k,
      width: E,
      height: D
    });
    return W ? (L.ctx.clearRect(0, 0, L.canvas.width, L.canvas.height), L.ctx.drawImage(W, 0, 0, L.canvas.width, L.canvas.height), L.canvas) : null;
  }
  function A(V) {
    f.clearTarget(V);
  }
  function v() {
    var V;
    f.dispose(), (V = a.dispose) == null || V.call(a), d = null;
  }
  function R() {
    d = null, p.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: y,
    renderView: _,
    renderToContext: w,
    renderToTarget: S,
    clearTarget: A,
    snapshotState: p.snapshot,
    clearState: R,
    dispose: v
  };
}
function Di(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function av() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function id(e, t = 8) {
  var _;
  const n = (_ = e == null ? void 0 : e.getContext) == null ? void 0 : _.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const l = n.getImageData(0, 0, i, a).data;
  let f = i, d = a, p = -1, y = -1;
  for (let w = 0; w < a; w += 1)
    for (let S = 0; S < i; S += 1)
      l[(w * i + S) * 4 + 3] <= t || (S < f && (f = S), w < d && (d = w), S > p && (p = S), w > y && (y = w));
  return p < f || y < d ? null : {
    minX: f,
    minY: d,
    maxX: p,
    maxY: y,
    width: p - f + 1,
    height: y - d + 1,
    aspect: Number(((p - f + 1) / Math.max(1, y - d + 1)).toFixed(4))
  };
}
function Gc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function ur(e, t, n) {
  if (!e) return Di(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function yt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let zl = null, jl = null, ad = null, od = null, Nt = null, fa = null, nn = null, Pr = null;
function ov() {
  if (jl) return jl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), jl = n, n;
}
function Vl(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  zl = ur(zl, n, i);
  const a = zl;
  yt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", od !== a.ctx && (ad = a.ctx.createPattern(ov(), "repeat"), od = a.ctx), a.ctx.fillStyle = ad, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function sv(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function lv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function cv(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function uv(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const _t = /* @__PURE__ */ new Map(), Kc = 128;
function fv(e, t, n, i, a, l) {
  const f = Math.max(1, Math.round(e)), d = Math.max(0, Math.min(1, t)), p = `${f}:${d.toFixed(2)}:${n}:${i}:${a}:${l.toFixed(3)}`;
  if (_t.has(p)) {
    const k = _t.get(p);
    return _t.delete(p), _t.set(p, k), k;
  }
  _t.size >= Kc && _t.delete(_t.keys().next().value);
  const y = f * 2 + 2, _ = f + 1, w = Gc(y, y), S = w.getContext("2d"), A = d * f, v = f + 1, R = `rgba(${n},${i},${a},${l})`, V = `rgba(${n},${i},${a},0)`, j = S.createRadialGradient(_, _, A, _, _, v);
  return j.addColorStop(0, R), j.addColorStop(1, V), S.fillStyle = j, S.fillRect(0, 0, y, y), _t.set(p, w), w;
}
function dv(e, t, n, i, a, l, f) {
  const { r: d, g: p, b: y, a: _ } = i, w = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), A = Math.max(0, a), v = Math.max(0, Math.min(0.99, l)), R = Math.max(0, Math.min(1, f ?? 0)), V = `chisel:${w}:${S}:${n.toFixed(2)}:${d}:${p}:${y}:${_.toFixed(3)}:${A.toFixed(2)}:${v.toFixed(2)}:${R.toFixed(2)}`;
  if (_t.has(V)) {
    const J = _t.get(V);
    return _t.delete(V), _t.set(V, J), J;
  }
  _t.size >= Kc && _t.delete(_t.keys().next().value);
  const j = Gc(w, S), k = j.getContext("2d"), E = k.createImageData(w, S), D = E.data, L = Math.max(0, e - t), W = Math.max(0, Math.min(1, n)), F = 1 + A;
  for (let J = 0; J < S; J++)
    for (let ce = 0; ce < w; ce++) {
      const U = ce + 0.5 - e, ve = J + 0.5 - t, xe = Math.max(Math.abs(U) - L, 0), we = Math.hypot(xe, ve) / t;
      if (we >= 1) continue;
      const te = we <= W ? 1 : Math.max(0, (1 - we) / Math.max(1e-4, 1 - W)), ye = 1 - we, $ = 1 + A * (1 - ye) * (1 - ye), X = 1 - v * ye * ye, _e = $ * X / F;
      let $e = 1;
      if (R > 0) {
        const wt = Math.floor((ve + t) / 1.5), Et = Math.floor((U + e) / 8), Ht = Qr(Vi(wt * 41 + 500, Et * 19 + 300));
        $e = 1 - R * 0.42 * Ht;
      }
      const ze = Math.round(255 * Math.min(1, _ * te * _e * $e));
      if (ze <= 0) continue;
      const De = (J * w + ce) * 4;
      D[De] = d, D[De + 1] = p, D[De + 2] = y, D[De + 3] = ze;
    }
  return k.putImageData(E, 0, 0), _t.set(V, j), j;
}
function Vi(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function Qr(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function hv(e, t, n, i, a, l, f) {
  const d = e + 0.5 - n, p = t + 0.5 - i, y = Math.max(0, n - i), _ = Math.max(Math.abs(d) - y, 0), w = Math.hypot(_, p) / i;
  if (w >= 1) return 0;
  const S = Qr(Vi(e * 17 + 3, t * 13 + 7)), A = w + l * 0.22 * (S - 0.5);
  if (A >= 1) return 0;
  const v = A <= a ? 1 : Math.max(0, (1 - A) / Math.max(1e-4, 1 - a)), R = mv(e, t, d, p, n, i), V = l * 0.55;
  if (R < V) return 0;
  const k = 0.45 + 0.55 * ((R - V) / Math.max(1e-4, 1 - V));
  return Math.round(255 * Math.min(1, f * v * k));
}
function mv(e, t, n, i, a, l) {
  const f = Math.floor((n + a) / 3), d = Math.floor((i + l) / 2), p = Qr(Vi(f * 13 + 700, d * 17 + 400)), y = Math.floor((n + a) / 1.5), _ = Math.floor((i + l) / 1.5), w = Qr(Vi(y * 23 + 800, _ * 29 + 500)), S = Qr(Vi(e * 3 + 100, t * 5 + 200));
  return p * 0.55 + w * 0.3 + S * 0.15;
}
function pv(e, t, n, i, a) {
  const { r: l, g: f, b: d, a: p } = i, y = Math.max(2, Math.ceil(e) * 2), _ = Math.max(2, Math.ceil(t) * 2), w = Math.max(0, Math.min(1, a)), S = `crayon:${y}:${_}:${n.toFixed(2)}:${l}:${f}:${d}:${p.toFixed(3)}:${w.toFixed(2)}`;
  if (_t.has(S)) {
    const k = _t.get(S);
    return _t.delete(S), _t.set(S, k), k;
  }
  _t.size >= Kc && _t.delete(_t.keys().next().value);
  const A = Gc(y, _), v = A.getContext("2d"), R = v.createImageData(y, _), V = R.data, j = Math.max(0, Math.min(1, n));
  for (let k = 0; k < _; k++)
    for (let E = 0; E < y; E++) {
      const D = hv(E, k, e, t, j, w, p);
      if (D <= 0) continue;
      const L = (k * y + E) * 4;
      V[L] = l, V[L + 1] = f, V[L + 2] = d, V[L + 3] = D;
    }
  return v.putImageData(R, 0, 0), _t.set(S, A), A;
}
function cm(e, t, n) {
  var R, V;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = cv(t, n), l = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), f = gv(t), d = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), p = Number(((R = t == null ? void 0 : t.angle) == null ? void 0 : R.value) ?? 0), y = uv(t, a), _ = String(((V = t == null ? void 0 : t.targetSpace) == null ? void 0 : V.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && _ !== "unwrap", S = t == null ? void 0 : t.scatter, A = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let v;
  if (i === "chisel") {
    const j = a * d, k = a, E = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), D = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), L = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = dv(j, k, l, f, E, D, L);
  } else if (i === "crayon") {
    const j = a * d, k = a, E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = pv(j, k, l, f, E);
  } else
    v = fv(a, l, f.r, f.g, f.b, f.a);
  return { ctx: e, stampTex: v, radiusPx: a, spacingPx: y, desc: n, aspect: d, angle: p, stampKind: i, scatter: A, latitudeCorrection: w };
}
function gv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), l = Math.max(0, Math.min(1, Number(i.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(i.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(i.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(i.b || 0))) * 255),
    a: l
  };
}
function bv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function sd(e, t, n, i, a) {
  const l = e.angle, f = e.desc.width;
  function d(y, _) {
    l === 0 ? e.ctx.drawImage(e.stampTex, y - a, _ - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(y, _), e.ctx.rotate(l), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  d(t, n);
  const p = l === 0 ? a : a * Math.abs(Math.cos(l)) + i * Math.abs(Math.sin(l));
  t - p < 0 && d(t + f, n), t + p > f && d(t - f, n);
}
function Wc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: y, count: _ } = e.scatter, w = y * e.radiusPx * a, S = Vi(t, n);
    for (let A = 0; A < _; A++) {
      const v = Qr(S + A * 2) * Math.PI * 2, R = Math.sqrt(Qr(S + A * 2 + 1)) * w, V = t + Math.cos(v) * R, j = n + Math.sin(v) * R, k = Math.max(0.5, e.radiusPx * a * 0.48), E = (0.5 - j / Math.max(1, e.desc.height)) * Math.PI, D = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(E)) : 1, L = k * e.aspect * D;
      sd(e, V, j, k, L);
    }
    return;
  }
  const l = Math.max(0.5, e.radiusPx * a), f = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, d = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(f)) : 1, p = l * e.aspect * d;
  sd(e, t, n, l, p);
}
function ld(e, t, n) {
  const i = lv(t);
  if (!e || i.length === 0) return;
  const a = n.width, l = n.height, f = cm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const d = [];
  for (let S = 0; S < i.length; S++) {
    let A = Number(i[S].u || 0) * a;
    const v = Number(i[S].v || 0) * l;
    S > 0 && Math.abs(A - d[S - 1].x) > a * 0.5 && (A += A < d[S - 1].x ? a : -a), d.push({ x: A, y: v });
  }
  if (Wc(f, d[0].x, d[0].y, 1), d.length === 1) {
    e.restore();
    return;
  }
  let p = d[0], y = d[0], _ = d[0], w = 0;
  for (let S = 1; S < d.length; S++) {
    const A = d[S], v = { x: (y.x + A.x) * 0.5, y: (y.y + A.y) * 0.5 };
    S === 1 ? w = Ra(f, _.x, _.y, v.x, v.y, w) : w = ds(f, p, _, v, A, w), p = y, y = A, _ = v;
  }
  d.length === 2 ? Ra(f, _.x, _.y, y.x, y.y, w) : ds(f, p, _, y, y, w), e.restore();
}
function Xo(e, t, n) {
  var w;
  const i = Array.isArray((w = t == null ? void 0 : t.geometry) == null ? void 0 : w.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, l = n.height, f = bv(t), d = [];
  let p = 1 / 0, y = -1 / 0;
  for (let S = 0; S < i.length; S++) {
    const A = sv(i[S]);
    let v = Number(A.x || 0) * a;
    S > 0 && Math.abs(v - d[S - 1].x) > a * 0.5 && (v += v < d[S - 1].x ? a : -a), d.push({ x: v, y: Number(A.y || 0) * l }), v < p && (p = v), v > y && (y = v);
  }
  function _(S) {
    e.beginPath(), e.moveTo(d[0].x + S, d[0].y);
    for (let A = 1; A < d.length; A++) e.lineTo(d[A].x + S, d[A].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = f, _(0), p < 0 && _(a), y > a && _(-a), e.restore();
}
function So(e, t, n) {
  var f;
  if (String(((f = t == null ? void 0 : t.geometry) == null ? void 0 : f.geometryKind) || "") === "lasso_fill") {
    Xo(e, t, n);
    return;
  }
  const l = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  l >= 0.999 ? ld(e, t, n) : (fa = ur(fa, n.width, n.height), yt(fa), ld(fa.ctx, t, n), e.save(), e.globalAlpha = l, e.drawImage(fa.canvas, 0, 0), e.restore());
}
function Gr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ra(e, t, n, i, a, l) {
  const f = i - t, d = a - n, p = Math.hypot(f, d);
  if (p < 1e-9) return l;
  let y = e.spacingPx - l;
  for (; y <= p; ) {
    const _ = y / p;
    Wc(e, t + f * _, n + d * _, 1), y += e.spacingPx;
  }
  return p - y + e.spacingPx;
}
function ds(e, t, n, i, a, l) {
  const d = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, _ = 0, w = d, S = w + p, A = S + y, v = S - w, R = 16;
  let V = l, j = n.x, k = n.y;
  for (let E = 1; E <= R; E++) {
    const D = w + v * E / R, L = ((w - D) * t.x + (D - _) * n.x) / (w - _), W = ((w - D) * t.y + (D - _) * n.y) / (w - _), F = ((S - D) * n.x + (D - w) * i.x) / (S - w), J = ((S - D) * n.y + (D - w) * i.y) / (S - w), ce = ((A - D) * i.x + (D - S) * a.x) / (A - S), U = ((A - D) * i.y + (D - S) * a.y) / (A - S), ve = ((S - D) * L + (D - _) * F) / (S - _), xe = ((S - D) * W + (D - _) * J) / (S - _), C = ((A - D) * F + (D - w) * ce) / (A - w), we = ((A - D) * J + (D - w) * U) / (A - w), te = ((S - D) * ve + (D - w) * C) / (S - w), ye = ((S - D) * xe + (D - w) * we) / (S - w);
    V = Ra(e, j, k, te, ye, V), j = te, k = ye;
  }
  return V;
}
function yv(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const l = e.descriptor, f = l.width, d = n * l.height, p = e.activeStroke;
  let y = t * f;
  if (p && Math.abs(y - p.prev.x) > f * 0.5 && (y += y < p.prev.x ? f : -f), !p) {
    const A = cm(a, i, l), v = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), R = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), V = String((i == null ? void 0 : i.toolKind) || "") === "eraser", j = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Wc(A, y, d, 1), e.activeStroke = {
      pprev: { x: y, y: d },
      prev: { x: y, y: d },
      lastMidX: y,
      lastMidY: d,
      stampTex: A.stampTex,
      radiusPx: A.radiusPx,
      spacingPx: A.spacingPx,
      aspect: A.aspect,
      angle: A.angle,
      stampKind: A.stampKind,
      scatter: A.scatter,
      latitudeCorrection: A.latitudeCorrection,
      strokeOpacity: v,
      velocityWidthFactor: R,
      distSinceStamp: 0,
      isEraser: V,
      layerKind: j,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const _ = (p.prev.x + y) * 0.5, w = (p.prev.y + d) * 0.5;
  a.globalCompositeOperation = "source-over";
  const S = {
    ctx: a,
    stampTex: p.stampTex,
    radiusPx: p.radiusPx,
    spacingPx: p.spacingPx,
    desc: l,
    aspect: p.aspect,
    angle: p.angle,
    stampKind: p.stampKind,
    scatter: p.scatter,
    latitudeCorrection: p.latitudeCorrection
  };
  p.pointCount === 1 ? p.distSinceStamp = Ra(S, p.lastMidX, p.lastMidY, _, w, p.distSinceStamp) : p.distSinceStamp = ds(
    S,
    p.pprev,
    { x: p.lastMidX, y: p.lastMidY },
    { x: _, y: w },
    { x: y, y: d },
    p.distSinceStamp
  ), p.pprev = p.prev, p.prev = { x: y, y: d }, p.lastMidX = _, p.lastMidY = w, p.pointCount++, e.displayDirty = !0;
}
function dc(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), l = Di(t, n), f = {
    descriptor: i,
    committedMask: Di(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: Di(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, p = Di(t, n);
  let y = null, _ = "", w = null;
  function S(U) {
    return {
      actionGroupId: U,
      descriptor: i,
      committedPaint: Di(t, n),
      currentStroke: l,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function A(U) {
    let ve = a.get(U);
    return ve || (ve = S(U), a.set(U, ve)), ve;
  }
  function v(U) {
    return _ === "mask" ? f : y ? A(y) : d;
  }
  function R(U) {
    var ye;
    const ve = !w || w.length !== U.length || U.some(($, X) => $ !== w[X]), xe = _ === "paint" && ((ye = y ? a.get(y) : d) == null ? void 0 : ye.activeStroke) || null;
    let C = f.displayDirty || d.displayDirty || ve;
    for (const $ of U) {
      const X = a.get($);
      if (X != null && X.displayDirty) {
        C = !0;
        break;
      }
    }
    if (xe && (C = !0), !C) return;
    f.displayDirty = !1, d.displayDirty = !1;
    for (const $ of U) {
      const X = a.get($);
      X && (X.displayDirty = !1);
    }
    w = [...U];
    const we = p.ctx;
    yt(p);
    const te = !!(xe != null && xe.isEraser);
    for (const $ of U) {
      const X = a.get($);
      if (!X) continue;
      const $e = y === X.actionGroupId && _ === "paint" ? X.activeStroke : null;
      if (te)
        Nt = ur(Nt, t, n), yt(Nt), Nt.ctx.drawImage(X.committedPaint.canvas, 0, 0), Gr(Nt.ctx, l.canvas), we.drawImage(Nt.canvas, 0, 0);
      else if (we.drawImage(X.committedPaint.canvas, 0, 0), $e) {
        const ze = X.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, $e.strokeOpacity ?? 1));
        we.save(), we.globalAlpha = ze, we.drawImage(l.canvas, 0, 0), we.restore();
      }
    }
  }
  function V(U) {
    var xe, C, we, te, ye;
    for (const $ of a.values())
      yt($.committedPaint), yt($.currentStroke), $.activeStroke = null, $.displayDirty = !0;
    yt(f.committedMask), yt(f.currentStroke), f.activeStroke = null, f.displayDirty = !0, d.displayDirty = !0, w = null;
    const ve = [
      ...Array.isArray((C = (xe = U == null ? void 0 : U.painting) == null ? void 0 : xe.paint) == null ? void 0 : C.strokes) ? U.painting.paint.strokes : [],
      ...Array.isArray((te = (we = U == null ? void 0 : U.painting) == null ? void 0 : we.mask) == null ? void 0 : te.strokes) ? U.painting.mask.strokes : []
    ];
    for (const $ of ve) {
      if (((ye = $ == null ? void 0 : $.targetSpace) == null ? void 0 : ye.kind) !== "ERP_GLOBAL") continue;
      const X = String(($ == null ? void 0 : $.layerKind) || "paint"), $e = String(($ == null ? void 0 : $.toolKind) || "pen") === "eraser";
      if (X === "mask") {
        const ze = f.descriptor;
        $e ? (Nt = ur(Nt, ze.width, ze.height), yt(Nt), So(Nt.ctx, $, ze), Gr(f.committedMask.ctx, Nt.canvas)) : So(f.committedMask.ctx, $, ze);
        continue;
      }
      if ($e) {
        Nt = ur(Nt, i.width, i.height), yt(Nt), So(Nt.ctx, $, i);
        for (const ze of a.values())
          Gr(ze.committedPaint.ctx, Nt.canvas), ze.displayDirty = !0;
      } else {
        const ze = String(($ == null ? void 0 : $.actionGroupId) || "__default__"), De = A(ze), wt = De.descriptor;
        So(De.committedPaint.ctx, $, wt), De.displayDirty = !0;
      }
    }
    R([...a.keys()]);
  }
  function j(U, ve) {
    _ = String((U == null ? void 0 : U.layerKind) || "");
    const xe = String((U == null ? void 0 : U.toolKind) || "") === "eraser";
    if (_ === "mask")
      y = null, yt(f.currentStroke), f.activeStroke = null, f.displayDirty = !0;
    else {
      const C = xe ? d : A(String((U == null ? void 0 : U.actionGroupId) || "__default__"));
      y = xe ? "" : String((U == null ? void 0 : U.actionGroupId) || "__default__"), yt(C.currentStroke), C.activeStroke = null, C.displayDirty = !0;
    }
  }
  function k(U, ve) {
    var X;
    const xe = String((U == null ? void 0 : U.layerKind) || "paint"), C = String((U == null ? void 0 : U.toolKind) || "") === "eraser", we = xe === "mask" ? f : C ? d : A(String((U == null ? void 0 : U.actionGroupId) || y || "__default__")), te = we.activeStroke, ye = we.descriptor;
    if (te && te.pointCount > 1) {
      const _e = we.currentStroke.ctx;
      _e.globalCompositeOperation = "source-over";
      const $e = {
        ctx: _e,
        stampTex: te.stampTex,
        radiusPx: te.radiusPx,
        spacingPx: te.spacingPx,
        desc: ye,
        aspect: te.aspect,
        angle: te.angle,
        stampKind: te.stampKind,
        scatter: te.scatter,
        latitudeCorrection: te.latitudeCorrection
      };
      te.pointCount === 2 ? Ra($e, te.lastMidX, te.lastMidY, te.prev.x, te.prev.y, te.distSinceStamp) : ds($e, te.pprev, { x: te.lastMidX, y: te.lastMidY }, te.prev, te.prev, te.distSinceStamp);
    }
    we.lassoPreviewActive && (yt(we.currentStroke), Xo(we.currentStroke.ctx, U, ye), we.lassoPreviewActive = !1);
    const $ = xe === "mask" ? f.committedMask : we.committedPaint;
    if (C && xe === "paint")
      for (const _e of a.values())
        Gr(_e.committedPaint.ctx, we.currentStroke.canvas), _e.displayDirty = !0;
    else if (C)
      Gr($.ctx, we.currentStroke.canvas);
    else {
      const _e = Math.max(0, Math.min(1, (te == null ? void 0 : te.strokeOpacity) ?? 1));
      $.ctx.save(), $.ctx.globalAlpha = _e, $.ctx.drawImage(we.currentStroke.canvas, 0, 0), $.ctx.restore();
    }
    av() && (String((U == null ? void 0 : U.toolKind) || ""), String((ye == null ? void 0 : ye.kind) || ""), Number((ye == null ? void 0 : ye.width) || 0), Number((ye == null ? void 0 : ye.height) || 0), String(((X = U == null ? void 0 : U.targetSpace) == null ? void 0 : X.viewMode) || ""), Number((U == null ? void 0 : U.aspect) ?? 1), id(we.currentStroke.canvas), id($.canvas), void 0), yt(we.currentStroke), we.activeStroke = null, we.displayDirty = !0, y = null, _ = "", R([...a.keys()]);
  }
  function E(U) {
    if (_ === "mask")
      yt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (_ === "paint" && !y)
      yt(d.currentStroke), d.activeStroke = null, d.lassoPreviewActive = !1, d.displayDirty = !0;
    else if (y) {
      const ve = a.get(y);
      ve && (yt(ve.currentStroke), ve.activeStroke = null, ve.lassoPreviewActive = !1, ve.displayDirty = !0);
    }
    y = null, _ = "", R([...a.keys()]);
  }
  function D(U, ve) {
    var C;
    if (_ = String((U == null ? void 0 : U.layerKind) || ""), String(((C = U == null ? void 0 : U.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill") {
      if (_ === "mask")
        yt(f.currentStroke), Xo(f.currentStroke.ctx, U, f.descriptor), f.lassoPreviewActive = !0, f.displayDirty = !0;
      else {
        const we = String((U == null ? void 0 : U.toolKind) || "") === "eraser", te = we ? d : A(String((U == null ? void 0 : U.actionGroupId) || y || "__default__"));
        y = we ? "" : String((U == null ? void 0 : U.actionGroupId) || y || "__default__"), yt(te.currentStroke), Xo(te.currentStroke.ctx, U, te.descriptor), te.lassoPreviewActive = !0, te.displayDirty = !0;
      }
      R([...a.keys()]);
    }
  }
  function L(U) {
    return R(U ?? [...a.keys()]), {
      displayPaint: p,
      committedMask: f.committedMask,
      descriptor: i
    };
  }
  function W(U) {
    return a.get(String(U)) ?? null;
  }
  function F() {
    return [...a.keys()];
  }
  function J(U) {
    var ye;
    const ve = a.get(String(U));
    if (!ve) return null;
    const xe = _ === "paint" && y === ve.actionGroupId, C = _ === "paint" && ((ye = y ? a.get(y) : d) == null ? void 0 : ye.activeStroke) || null;
    if (C != null && C.isEraser)
      return nn = ur(nn, t, n), yt(nn), nn.ctx.drawImage(ve.committedPaint.canvas, 0, 0), Gr(nn.ctx, l.canvas), nn.canvas;
    const we = xe ? ve.activeStroke : null;
    if (!we) return ve.committedPaint.canvas;
    nn = ur(nn, t, n), yt(nn), nn.ctx.drawImage(ve.committedPaint.canvas, 0, 0);
    const te = ve.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, we.strokeOpacity ?? 1));
    return nn.ctx.save(), nn.ctx.globalAlpha = te, nn.ctx.drawImage(l.canvas, 0, 0), nn.ctx.restore(), nn.canvas;
  }
  function ce() {
    return Pr = ur(Pr, t, n), yt(Pr), Vl(Pr.ctx, f.committedMask.canvas), _ === "mask" && f.activeStroke && (f.activeStroke.isEraser ? (Nt = ur(Nt, t, n), yt(Nt), Nt.ctx.drawImage(f.committedMask.canvas, 0, 0), Gr(Nt.ctx, l.canvas), yt(Pr), Vl(Pr.ctx, Nt.canvas)) : Vl(Pr.ctx, l.canvas)), Pr.canvas;
  }
  return {
    rebuildCommitted: V,
    beginStroke: j,
    appendStrokePoint: yv,
    updateActiveStroke: D,
    commitActiveStroke: k,
    cancelActiveStroke: E,
    getErpTarget: L,
    ensureTarget: v,
    getGroupTarget: W,
    getGroupDisplayCanvas: J,
    getMaskDisplayCanvas: ce,
    getAllGroupIds: F
  };
}
function G(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Hl(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function Vt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function vv(e, t) {
  let n = Vt(t) - Vt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const cd = Math.PI / 180, ud = 0.12, _v = 3, xv = 35, wv = 140, ya = 100, Sv = 20, fd = 0.8;
function Mv(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), l = G(Number(e || ya), 1, 179) * cd;
  return 2 * Math.atan(Math.tan(l * 0.5) * (a / i)) / cd;
}
function Nv(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function Fs(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ya })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), l = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), f = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), d = typeof e.onDebug == "function" ? e.onDebug : null, p = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function y(j, k = null) {
    d && d(j, k);
  }
  function _(j, k, E = null, D = performance.now()) {
    return p.drag.active = !0, p.drag.lastX = Number(j || 0), p.drag.lastY = Number(k || 0), p.drag.lastTs = Number(D || performance.now()), p.drag.pointerId = E, p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.lastTs = p.drag.lastTs, p.velHistory = [], y("drag", { phase: "start", x: p.drag.lastX, y: p.drag.lastY, pointerId: E }), !0;
  }
  function w(j, k, E = "pano", D = performance.now()) {
    if (!p.drag.active) return !1;
    const L = Number(D || performance.now()), W = Number(j), F = Number(k), J = W - p.drag.lastX, ce = F - p.drag.lastY;
    p.drag.lastX = W, p.drag.lastY = F, p.drag.lastTs = L;
    const U = i() || { x: 1, y: 1 }, ve = Number(U.x || 1), xe = Number(U.y || 1), C = { ...t() };
    let we = 0, te = 0;
    if (E === "unwrap") {
      const $ = a() || { w: 1, h: 1 }, X = Math.max(1, Number($.w || 1)), _e = Math.max(1, Number($.h || 1)), $e = J / X, ze = ce / _e;
      we = -$e * 360 * ve, te = ze * 180 * xe;
    } else {
      const $ = l() || { w: 0, h: 0 }, X = Math.max(1, Number($.w || 0)), _e = Math.max(1, Number($.h || 0));
      if (X > 1 && _e > 1) {
        const $e = G(Number(C.fov || ya), 1, 179), ze = G(Mv($e, X, _e), 0.1, 179);
        we = -(J / X) * $e * ve, te = ce / _e * ze * xe;
      } else
        we = -J * ud * ve, te = ce * ud * xe;
    }
    C.yaw = Vt(Number(C.yaw || 0) + we), C.pitch = G(Number(C.pitch || 0) + te, -89.9, 89.9), n(C), p.velHistory.push({ ts: L, yaw: C.yaw, pitch: C.pitch });
    let ye = 0;
    for (; ye < p.velHistory.length - 1 && p.velHistory[ye].ts < L - 100; ) ye++;
    return ye > 0 && p.velHistory.splice(0, ye), p.inertia.active = !1, p.inertia.lastTs = L, f(), y("drag", { phase: "move", dx: J, dy: ce, dYaw: we, dPitch: te }), !0;
  }
  function S(j = performance.now()) {
    if (!p.drag.active) return !1;
    p.drag.active = !1;
    const k = Number(j || performance.now());
    p.drag.lastTs = k;
    const E = p.velHistory.filter((L) => k - L.ts <= 80);
    if (E.length >= 2) {
      const L = E[0], W = E.at(-1), F = Math.max(1e-3, (W.ts - L.ts) / 1e3);
      let J = W.yaw - L.yaw;
      J > 180 && (J -= 360), J < -180 && (J += 360), p.inertia.vx = J / F, p.inertia.vy = (W.pitch - L.pitch) / F;
    } else
      p.inertia.vx = 0, p.inertia.vy = 0;
    p.velHistory = [];
    const D = Math.hypot(p.inertia.vx, p.inertia.vy);
    return p.inertia.active = D > Sv, p.inertia.lastTs = k, y("drag", { phase: "end", speed: D, inertiaActive: p.inertia.active }), !0;
  }
  function A(j = performance.now()) {
    if (!p.inertia.active) return !1;
    const k = Number(j || performance.now()), E = Math.max(1e-3, (k - (p.inertia.lastTs || k)) / 1e3);
    p.inertia.lastTs = k;
    const D = { ...t() };
    D.yaw = Vt(Number(D.yaw || 0) + p.inertia.vx * E), D.pitch = G(Number(D.pitch || 0) + p.inertia.vy * E, -89.9, 89.9);
    const L = Math.exp(-5.5 * E);
    return p.inertia.vx *= L, p.inertia.vy *= L, Math.abs(p.inertia.vx) < fd && Math.abs(p.inertia.vy) < fd && (p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.active = !1), n(D), f(), p.inertia.active;
  }
  function v(j) {
    const k = Math.sign(Number(j || 0));
    if (!k) return !1;
    const E = { ...t() }, D = Number(E.fov || ya);
    return E.fov = G(D + k * _v, xv, wv), n(E), f(), y("wheel", { deltaSign: k, fovBefore: D, fovAfter: E.fov }), !0;
  }
  function R(j) {
    return v(Math.sign(Nv(j)));
  }
  function V() {
    n({ yaw: 0, pitch: 0, fov: ya }), p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, f();
  }
  return {
    state: p,
    startDrag: _,
    moveDrag: w,
    endDrag: S,
    stepInertia: A,
    applyWheel: v,
    applyWheelEvent: R,
    resetView: V
  };
}
function hs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const dd = Math.PI / 180;
function da(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function kv(e) {
  const t = e || {}, n = da(t.yaw_deg, 0), i = da(t.pitch_deg, 0), a = da(t.roll_deg ?? t.rot_deg, 0), l = Hl(da(t.hFOV_deg, 90), 1, 179), f = Hl(da(t.vFOV_deg, 60), 1, 179), d = Math.tan(l * dd * 0.5) / Math.max(1e-6, Math.tan(f * dd * 0.5)), p = Hl(d, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: l,
    vfov: f,
    aspect: p
  };
}
const um = 0.28;
function Pv(e) {
  const t = e && typeof e == "object" ? e : {}, n = G(Number(t.x0 ?? 0), 0, 1), i = G(Number(t.y0 ?? 0), 0, 1), a = G(Number(t.x1 ?? 1), 0, 1), l = G(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, l),
    x1: Math.max(n, a),
    y1: Math.max(i, l)
  };
}
function Av(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), l = t.includeHidden === !0, f = e.visible === !1, d = l && i && f;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: G(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: G(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: Pv(e.crop),
    opacity: d ? um : G(Number(e.opacity ?? 1), 0, 1),
    visible: d ? !0 : e.visible !== !1,
    external: i
  };
}
function Ls(e, t = {}) {
  var l;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((f) => Av(f, { includeHidden: i })).filter((f) => f && (i || f.visible !== !1)).sort((f, d) => Number(f.zIndex || 0) - Number(d.zIndex || 0)),
    selectedId: t.selectedId ?? ((l = e == null ? void 0 : e.active) == null ? void 0 : l.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function fm(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || Ls(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, l = [], f = /* @__PURE__ */ new Set();
  return i.stickers.forEach((d) => {
    var v;
    const p = String((d == null ? void 0 : d.assetId) || "").trim(), y = p || (d != null && d.external ? String((d == null ? void 0 : d.id) || "").trim() : "");
    if (!y || f.has(y)) return;
    const _ = p ? a[p] : null, w = t(y, _, d);
    if (w instanceof HTMLImageElement && !w.complete) return;
    const S = Number((w == null ? void 0 : w.naturalWidth) || (w == null ? void 0 : w.videoWidth) || (w == null ? void 0 : w.width) || 0), A = Number((w == null ? void 0 : w.naturalHeight) || (w == null ? void 0 : w.videoHeight) || (w == null ? void 0 : w.height) || 0);
    !w || S <= 0 || A <= 0 || (f.add(y), l.push({
      assetId: y,
      source: w,
      revision: String(((v = n.revisionFor) == null ? void 0 : v.call(n, y, _, w)) ?? [
        y,
        Number(w.naturalWidth || w.videoWidth || w.width || 0),
        Number(w.naturalHeight || w.videoHeight || w.height || 0),
        String(w.currentSrc || w.src || "")
      ].join("|"))
    }));
  }), l;
}
function Yc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: G(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function Cv(e, t = 360) {
  return Yc(e, t);
}
function Er(e) {
  const t = kv(e || {});
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
const { app: pt } = Bo;
function hc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Bo == null ? void 0 : Bo.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const ni = Math.PI / 180, ms = {}, Tv = { Nu: 24, Nv: 14 }, Iv = 10, Dv = 120;
function Ev() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ha(e) {
  var n, i, a, l, f;
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
    styleHeight: String(((i = e.style) == null ? void 0 : i.height) || ""),
    styleWidth: String(((a = e.style) == null ? void 0 : a.width) || ""),
    stylePos: String(((l = e.style) == null ? void 0 : l.position) || ""),
    styleTransform: String(((f = e.style) == null ? void 0 : f.transform) || "")
  };
}
function Ov() {
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
function ri(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (i, a) => {
    const l = Number(i), f = Number(a);
    return !Number.isFinite(l) || !Number.isFinite(f) ? null : [l, f];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const i = n(t[0], t[1]);
      if (i) return i;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const i = n(t.width, t.height);
      if (i) return i;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const i = n(t.w, t.h);
      if (i) return i;
    }
  }
  return null;
}
function dm(e) {
  const t = ri(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function hm(e, t, n) {
  dm(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function mc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function mm(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Rv(e) {
  return hs(mm(e));
}
function ei(e = null) {
  var l, f;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((f = (l = pt == null ? void 0 : pt.canvas) == null ? void 0 : l.constructor) == null ? void 0 : f.name) || "");
  return [t, i, n, a].join("|");
}
function pm(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: ei(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: ei(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: ei(t)
  };
}
const ka = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = ei(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = ei(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, gm(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function gm(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : pm(i, e).chosenPath, l = mc(e);
      this.activeBackend = l;
      const f = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", d = e.__panoPreviewNoPreview === !0, p = n.noPreview === !0;
      if (l === a && l !== "none" && f === i && d === p) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = p, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      l !== "none" && Hi(e, { keepMonitor: i === "stickers" }), M1(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = mc(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Hi(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Hi(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Fv(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Hi(e, t = {}) {
  var i, a, l, f, d;
  if (!e) return;
  gs.unregister(e), Fv(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  try {
    (i = e.__panoDomRestore) == null || i.call(e);
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
      (l = n.state) != null && l.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (d = (f = n.root) == null ? void 0 : f.remove) == null || d.call(f);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((p) => {
      if (p === (n == null ? void 0 : n.widget)) return !1;
      const y = String((p == null ? void 0 : p.name) || ""), _ = String((p == null ? void 0 : p.type) || ""), w = hc();
      return !(y === w || _ === w || y === "pano_preview" || _ === "pano_preview" || y === "preview" && _ === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || ka.unregister(e);
}
function ii(e, t, n) {
  return { x: e, y: t, z: n };
}
function hd(e, t) {
  return ii(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Mo(e, t) {
  return ii(e.x * t, e.y * t, e.z * t);
}
function Ul(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function md(e, t) {
  return ii(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function No(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ii(e.x / t, e.y / t, e.z / t);
}
function qr(e, t) {
  const n = e * ni, i = t * ni, a = Math.cos(i);
  return ii(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function qc(e, t, n = 0) {
  const i = qr(e, t), a = ii(0, 1, 0);
  let l = md(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = ii(1, 0, 0)), l = No(l);
  let f = No(md(i, l));
  const d = n * ni, p = Math.cos(d), y = Math.sin(d), _ = hd(Mo(l, p), Mo(f, y)), w = hd(Mo(l, -y), Mo(f, p));
  return { fwd: i, right: No(_), up: No(w) };
}
function Lv(e, t = "#00ff00") {
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
  let i = null;
  if (e && typeof e == "object")
    i = e;
  else if (typeof e == "string") {
    const a = e.trim();
    if (!a) return n;
    try {
      i = JSON.parse(a);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const a = i;
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
function $v(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Fa(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Xc(e) {
  var d, p;
  const t = $v(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((d = Fa(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), a = Number(((p = Fa(e, "coverage")) == null ? void 0 : p.value) || 360) === 180 ? 180 : 360, l = e.__panoStateCache;
  if (l && l.source === t && l.liveVersion === n && l.bg === i && l.coverage === a)
    return l.parsed;
  const f = Lv(t, i);
  return f.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: f }, f;
}
function Fa(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function pd(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function bm(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function zv(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function ym(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function vm(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const f = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = f ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(f.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = zv(e == null ? void 0 : e.graph, n)), i;
}
function jv(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Jc(e, t = []) {
  const n = jv(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function gd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function ps(e, t) {
  const n = gd(e), i = gd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Vv(e, t = ["erp_image", "bg_erp"]) {
  var p;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = Jc(e, t).map((y) => n.findIndex((_) => String((_ == null ? void 0 : _.name) || "") === String(y))).filter((y) => y >= 0), l = n.map((y, _) => ({ input: y, idx: _ })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), f = [.../* @__PURE__ */ new Set([...a, ...l])], d = [];
  for (const y of f) {
    const _ = vm(e, y);
    if ((_ == null ? void 0 : _.id) != null) {
      d.push(String(_.id));
      continue;
    }
    const w = (p = n[y]) == null ? void 0 : p.link;
    if (w == null) continue;
    const S = bm(e == null ? void 0 : e.graph, w), { originId: A } = ym(S);
    A != null && d.push(String(A));
  }
  return [...new Set(d)];
}
const gs = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = on) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((l) => {
        var y, _, w, S, A;
        if (!l) return;
        const f = ps(i, l == null ? void 0 : l.id);
        Vv(l, ["erp_image", "bg_erp"]).some((v) => ps(i, v)), !(String(l.__panoPreviewMode || "") === "cutout" && !f) && (gc(l), (_ = (y = l.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || _.call(y), (w = l.setDirtyCanvas) == null || w.call(l, !0, !0), (A = (S = l.graph) == null ? void 0 : S.setDirtyCanvas) == null || A.call(S, !0, !0), String(l.__panoPreviewMode || ""), String(l.__panoPreviewMode || ""), void 0);
      });
    }, on.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = on) != null && e.removeEventListener) || (on.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function bs(e) {
  var l;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const i = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", i), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((l = on) == null ? void 0 : l.apiURL) == "function" ? on.apiURL(a) : a;
}
function Hv(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Uv(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function Bv(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Gv(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Hv(t)) return [t];
  const { filename: n, subfolder: i } = Uv(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => bs({
    filename: n,
    subfolder: i,
    type: l
  }));
  return Bv([...a, t]);
}
function Kv(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? bs({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function bd(e) {
  const t = pt == null ? void 0 : pt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (ps(l, a)) return t.get(l);
  } else {
    const l = Object.keys(t);
    for (const f of l)
      if (ps(f, a)) return t[f];
  }
  return null;
}
function mr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return mr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return bs({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = mr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : bs(e);
}
function Wv(e) {
  return e ? e instanceof HTMLVideoElement ? [
    String(e.currentSrc || e.src || ""),
    Number(e.videoWidth || 0),
    Number(e.videoHeight || 0),
    Number(e.currentTime || 0).toFixed(3),
    Number(e.readyState || 0),
    e.paused ? "paused" : "playing"
  ].join("|") : [
    String(e.currentSrc || e.src || ""),
    Number(e.naturalWidth || e.width || 0),
    Number(e.naturalHeight || e.height || 0)
  ].join("|") : "";
}
function Yv(e, t) {
  var i;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const a = typeof window < "u" && ((i = window == null ? void 0 : window.location) != null && i.href) ? window.location.href : "http://127.0.0.1/", l = new URL(n, a);
    return t > 0 && l.searchParams.set("pano_rev", String(t)), l.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${a}pano_rev=${t}` : n;
  }
}
function qv(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (l) => {
    Array.isArray(l) && l.forEach((f) => t.push(f));
  }, a = (l, f = 0) => {
    !l || f > 3 || n.has(l) || typeof l == "object" && (n.add(l), i(l.images), a(l.output, f + 1), a(l.ui, f + 1), a(l.data, f + 1), a(l.result, f + 1));
  };
  return a(e, 0), t;
}
function Xv(e, t) {
  try {
    const n = qv(t);
    let i = "";
    for (const a of n)
      if (i = mr(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), Yv(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Jv(e, t = []) {
  var y, _;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Jc(e, t).map((w) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(w))).filter((w) => w >= 0), l = n.map((w, S) => ({ input: w, idx: S })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), f = [.../* @__PURE__ */ new Set([...a, ...l])];
  for (const w of f) {
    const S = n[w], A = S == null ? void 0 : S.link;
    if (A == null) continue;
    const v = bm(e.graph, A), { originId: R, originSlot: V } = ym(v);
    if (R == null) continue;
    const j = vm(e, w, R);
    if (!j) continue;
    const k = Number(V || 0), E = bd((j == null ? void 0 : j.id) ?? R), D = Array.isArray(E == null ? void 0 : E.images) ? E.images : [];
    if (D.length) {
      const J = [];
      k >= 0 && k < D.length && J.push(D[k]), J.push(...D);
      for (const ce of J) {
        const U = mr(ce);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let L = [];
    try {
      L = typeof (pt == null ? void 0 : pt.getNodeImageUrls) == "function" ? pt.getNodeImageUrls(j) || [] : [];
    } catch {
      L = [];
    }
    if (Array.isArray(L) && L.length) {
      const J = [];
      k >= 0 && k < L.length && J.push(L[k]), J.push(...L);
      for (const ce of J) {
        const U = mr(ce);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const W = Array.isArray(j == null ? void 0 : j.imgs) ? j.imgs : [];
    if (W.length) {
      const J = [];
      k >= 0 && k < W.length && J.push(W[k]), J.push(...W);
      for (const ce of J) {
        const U = mr(ce);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const F = (y = j == null ? void 0 : j.widgets) == null ? void 0 : y.find((J) => String((J == null ? void 0 : J.name) || "").toLowerCase() === "image");
    if (F) {
      let J = mr(F.value);
      if (J && !J.includes("/") && !J.includes(":") && (j.comfyClass === "LoadImage" || j.type === "LoadImage") && (J = on.apiURL(`/view?filename=${encodeURIComponent(J)}&type=input&subfolder=`)), J)
        return String((S == null ? void 0 : S.name) || ""), { src: J, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const d = bd(e == null ? void 0 : e.id), p = [];
  if (Array.isArray(d == null ? void 0 : d.pano_input_images) && p.push(...d.pano_input_images), Array.isArray((_ = d == null ? void 0 : d.ui) == null ? void 0 : _.pano_input_images) && p.push(...d.ui.pano_input_images), p.length > 0)
    for (const w of p) {
      const S = mr(w);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Zv(e, t = [], n = {}) {
  const i = Jv(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const l = Gv(a);
  if (!l.length) return null;
  const f = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const d = t.join("|") || "image", p = e.__panoLinkedInputImageCache.get(d);
  if (p && p.srcRaw === a && p.img) return p.img;
  if (p && p.pendingSrcRaw === a && p.pendingImg)
    return f && p.img && (p.img.complete || p.img.naturalWidth || p.img.width) ? p.img : p.pendingImg;
  const y = new Image(), _ = p || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  _.pendingSrcRaw = a, _.pendingResolvedSrc = "", _.pendingImg = y, e.__panoLinkedInputImageCache.set(d, _);
  let w = -1;
  const S = () => {
    var v, R, V, j;
    if (w += 1, w >= l.length) {
      if (((R = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : R.call(v, d)) === _ && _.pendingImg === y && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
        try {
          (j = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || j.call(V, d);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), l.length;
      return;
    }
    const A = l[w];
    _.pendingResolvedSrc = A, y.src = A;
  };
  return y.onload = () => {
    var A, v, R;
    ((v = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.get) == null ? void 0 : v.call(A, d)) === _ && _.pendingImg === y && (_.srcRaw = a, _.resolvedSrc = String(_.pendingResolvedSrc || y.src || ""), _.img = y, _.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null), String(_.pendingResolvedSrc || _.resolvedSrc || y.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0);
  }, y.onerror = (A) => {
    var v, R, V, j;
    if (w + 1 < l.length) {
      S();
      return;
    }
    if (((R = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : R.call(v, d)) === _ && _.pendingImg === y && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
      try {
        (j = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || j.call(V, d);
      } catch {
      }
    String(_.pendingResolvedSrc || _.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((A == null ? void 0 : A.type) || "error");
  }, S(), f && _.img && (_.img.complete || _.img.naturalWidth || _.img.width) ? _.img : y;
}
function pc(e, t = [], n = null, i = {}) {
  const a = Zv(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function gc(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoOwnOutputVideoCache = null, e.__panoWrappedErpCache = null;
  }
}
function _m(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Kr(e, t, n = "") {
  const i = _m(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < Dv ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function bc(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), l = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), f = n / a, d = i / l, p = Math.min(f, d);
  return Number.isFinite(p) && p > 0 ? p : 1;
}
function Qv(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), l = Number((t == null ? void 0 : t.w) || 0), f = Number((t == null ? void 0 : t.h) || 0);
  if (l <= 0 || f <= 0) return;
  const d = Math.max(14, Math.round(14 * n)), p = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), l * 0.44)), y = Math.max(Math.round(34 * n), d + Math.round(14 * n)), _ = i + (l - p) * 0.5, w = a + (f - y) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(_, w, p, y, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${d}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", _ + p * 0.5, w + y * 0.5 + 0.5), e.restore();
}
function ko(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function e1(e) {
  var i;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((i = e == null ? void 0 : e.active) == null ? void 0 : i.selected_shot_id) || "");
  if (n) {
    const a = t.find((l) => String((l == null ? void 0 : l.id) || "") === n);
    if (a) return a;
  }
  return t[0] || null;
}
function xm(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), l = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), f = Number(t) > 0 ? Number(t) : 1;
  let d = a, p = a / f;
  return p > l && (p = l, d = l * f), {
    x: n + (a - d) * 0.5,
    y: i + (l - p) * 0.5,
    w: d,
    h: p
  };
}
function t1(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || l <= 1) return !1;
  const f = xm(n, a / l);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, f.x, f.y, f.w, f.h);
  const d = Math.max(0, Math.min(1, Number(i) || 0));
  return d > 0 && (e.fillStyle = `rgba(0,0,0,${d})`, e.fillRect(f.x, f.y, f.w, f.h)), e.restore(), !0;
}
function n1(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((l) => {
    var d;
    if (l === t || !l || l.hidden || l.type === "hidden") return;
    let f = 22;
    try {
      const p = typeof l.computeSize == "function" ? l.computeSize(((d = ri(e)) == null ? void 0 : d[0]) || 0) : null;
      Array.isArray(p) && Number.isFinite(Number(p[1])) && (f = Number(p[1]));
    } catch {
      f = 22;
    }
    a += f;
  }), a;
}
function Jo(e) {
  const n = n1(e) + 2, i = 8, a = ri(e), l = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), f = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return f < 40 || l < 80 ? null : { x: i, y: n, w: l, h: f };
}
function wm(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Kv(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const l = window.__panoSharedImageCache.get(a);
  if (l != null && l.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: l.img }), l.img;
  const f = e.__panoPreviewImageCache.get(i);
  if (f && f.src === a) return f.img;
  const d = new Image();
  return d.src = a, d.onload = () => {
    var p, y, _;
    (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || y.call(p), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: d }), e.__panoPreviewImageCache.set(i, { src: a, img: d }), d;
}
function r1(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((l, f) => Number((l == null ? void 0 : l.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function yc(e, t) {
  return Ls(t, {
    selectedId: null,
    hoveredId: null
  });
}
function vc(e, t, n) {
  return fm(t, (i, a) => wm(e, i, a), { scene: n });
}
function i1(e, t) {
  var f;
  const n = Nm(e, t);
  if (!n) return [];
  const i = km(t), a = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], l = new Map(
    a.filter((d) => d && typeof d == "object").map((d) => [String((d == null ? void 0 : d.actionGroupId) || (d == null ? void 0 : d.id) || "").trim(), Number((d == null ? void 0 : d.z_index) || 0)])
  );
  return i.map((d) => {
    const p = n.getGroupDisplayCanvas(d);
    return p ? {
      id: `paint_group:${d}`,
      source: p,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${d}`,
      zIndex: Number(l.get(d) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function a1(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, l = (e.y + t.y + n.y) / 3, f = (d) => {
    const p = d.x - a, y = d.y - l, _ = Math.hypot(p, y) || 1;
    return { x: d.x + p / _ * i, y: d.y + y / _ * i };
  };
  return [f(e), f(t), f(n)];
}
function yd(e, t, n, i, a, l, f, d) {
  const p = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(p) < 1e-6) return;
  const [y, _, w] = a1(l, f, d, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(y.x, y.y), e.lineTo(_.x, _.y), e.lineTo(w.x, w.y), e.closePath(), e.clip();
  const S = (l.x * (i.y - a.y) + f.x * (a.y - n.y) + d.x * (n.y - i.y)) / p, A = (l.x * (a.x - i.x) + f.x * (n.x - a.x) + d.x * (i.x - n.x)) / p, v = (l.x * (i.x * a.y - a.x * i.y) + f.x * (a.x * n.y - n.x * a.y) + d.x * (n.x * i.y - i.x * n.y)) / p, R = (l.y * (i.y - a.y) + f.y * (a.y - n.y) + d.y * (n.y - i.y)) / p, V = (l.y * (a.x - i.x) + f.y * (n.x - a.x) + d.y * (i.x - n.x)) / p, j = (l.y * (i.x * a.y - a.x * i.y) + f.y * (a.x * n.y - n.x * a.y) + d.y * (n.x * i.y - i.x * n.y)) / p;
  e.transform(S, R, A, V, v, j), e.drawImage(t, 0, 0), e.restore();
}
function Sm(e, t, n, i) {
  const a = Ul(e, t.right), l = Ul(e, t.up), f = Ul(e, t.fwd);
  if (f <= 1e-4) return null;
  const d = l / f / i, p = a / f / i;
  return { x: n.x + n.w * 0.5 + p * n.h * 0.5, y: n.y + n.h * 0.5 - d * n.h * 0.5 };
}
function Mm(e, t, n, i, a, l, f, d = 12, p = 9) {
  var we;
  const y = G(Number(f.hFOV_deg || 30), 1, 179) * ni, _ = G(Number(f.vFOV_deg || 30), 1, 179) * ni, w = Math.tan(y * 0.5), S = Math.tan(_ * 0.5), A = f.crop || {}, v = G(Number(A.x0 ?? 0), 0, 1), R = G(Number(A.y0 ?? 0), 0, 1), V = G(Number(A.x1 ?? 1), 0, 1), j = G(Number(A.y1 ?? 1), 0, 1), k = Math.max(1e-4, V - v), E = Math.max(1e-4, j - R), D = qc(Number(f.yaw_deg || 0), Number(f.pitch_deg || 0), Number(f.rot_deg || f.roll_deg || 0)), L = [], W = [], F = [], J = [];
  for (let te = 0; te <= p; te++) {
    const ye = te / p, X = (1 - (R + ye * E) * 2) * S;
    for (let _e = 0; _e <= d; _e++) {
      const $e = _e / d, De = ((v + $e * k) * 2 - 1) * w, wt = D.fwd.x + D.right.x * De + D.up.x * X, Et = D.fwd.y + D.right.y * De + D.up.y * X, Ht = D.fwd.z + D.right.z * De + D.up.z * X, St = Math.hypot(wt, Et, Ht) || 1e-8, Tt = wt / St, hn = Et / St, Xe = Ht / St, Wt = Tt * i.right.x + hn * i.right.y + Xe * i.right.z, Pn = Tt * i.up.x + hn * i.up.y + Xe * i.up.z, O = Tt * i.fwd.x + hn * i.fwd.y + Xe * i.fwd.z;
      if (O <= 1e-4)
        L[te] || (L[te] = []), W[te] || (W[te] = []), L[te][_e] = null, W[te][_e] = null;
      else {
        const H = Pn / O / a, Q = Wt / O / a;
        L[te] || (L[te] = []), W[te] || (W[te] = []), L[te][_e] = n.x + n.w * 0.5 + Q * n.h * 0.5, W[te][_e] = n.y + n.h * 0.5 - H * n.h * 0.5;
      }
      F[te] || (F[te] = []), J[te] || (J[te] = []), F[te][_e] = $e, J[te][_e] = ye;
    }
  }
  const ce = (we = l.assets) == null ? void 0 : we[f.asset_id], U = wm(t, f.asset_id, ce);
  if (!U || !U.complete || !U.naturalWidth) return;
  const ve = Number(U.naturalWidth || U.width || 1), xe = Number(U.naturalHeight || U.height || 1), C = d < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = C;
  for (let te = 0; te < p; te++)
    for (let ye = 0; ye < d; ye++) {
      const $ = L[te][ye], X = W[te][ye], _e = L[te][ye + 1], $e = W[te][ye + 1], ze = L[te + 1][ye], De = W[te + 1][ye], wt = L[te + 1][ye + 1], Et = W[te + 1][ye + 1];
      if ($ === null || _e === null || ze === null || wt === null) continue;
      const Ht = F[te][ye] * ve, St = J[te][ye] * xe, Tt = F[te][ye + 1] * ve, hn = J[te][ye + 1] * xe, Xe = F[te + 1][ye] * ve, Wt = J[te + 1][ye] * xe, Pn = F[te + 1][ye + 1] * ve, O = J[te + 1][ye + 1] * xe;
      yd(e, U, { x: Ht, y: St }, { x: Tt, y: hn }, { x: Pn, y: O }, { x: $, y: X }, { x: _e, y: $e }, { x: wt, y: Et }), yd(e, U, { x: Ht, y: St }, { x: Pn, y: O }, { x: Xe, y: Wt }, { x: $, y: X }, { x: wt, y: Et }, { x: ze, y: De });
    }
}
function o1(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = Xc(e), a = Jo(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const l = qc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), f = Math.tan(Number(e.__panoPreviewView.fov || 100) * ni * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const d = pc(
    e,
    Jc(e, ["erp_image", "bg_erp"]),
    () => {
      var D, L, W;
      (L = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null || L.call(D), (W = e.setDirtyCanvas) == null || W.call(e, !0, !1);
    }
  ), p = !!(d && d.complete && (d.naturalWidth || d.width)), y = Cm(e), _ = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, w = y || _, S = ms, A = yc(e, i), v = vc(e, i, A), R = Yc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let V = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = ti()), p) {
    const D = Rs({
      stateRevision: [
        "runtime_panorama_scene",
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(v) ? v.map((F) => `${String((F == null ? void 0 : F.assetId) || "")}:${String((F == null ? void 0 : F.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: d,
      backgroundRevision: [
        String(d.currentSrc || d.src || ""),
        Number(d.naturalWidth || d.width || 0),
        Number(d.naturalHeight || d.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: A,
      textures: v,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), W = e.__panoRuntimeCore.syncState(D) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", R, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    V = !!W, W && t.drawImage(W, a.x, a.y, a.w, a.h);
  }
  const j = w ? 8 : 12, k = w ? 6 : 9, E = r1(e, i);
  if (!p || E.length === 0) {
    const D = bc(t == null ? void 0 : t.canvas, a);
    Pm(t, a, l, f, D);
  }
  !V && p && ys(e, t, a, l, f, d, S), !V && E.length > 0 && E.forEach((D) => Mm(t, e, a, l, f, i, D, j, k)), t.restore();
}
function s1(e, t, n, i, a = "preview_scene", l = "") {
  const f = String(
    l || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return Rs({
    stateRevision: [
      a,
      f,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((d) => `${String((d == null ? void 0 : d.assetId) || "")}:${String((d == null ? void 0 : d.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: e,
    backgroundRevision: f,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: i,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function Zo(e, t, n, i) {
  var l, f, d, p, y, _;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && t)
    try {
      const w = i.convertEventToCanvasOffset(t);
      if (Array.isArray(w) && w.length >= 2)
        return {
          x: Number(w[0]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[0]) || 0),
          y: Number(w[1]) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[0]) || 0),
      y: Number(t.canvasY) - Number(((_ = e == null ? void 0 : e.pos) == null ? void 0 : _[1]) || 0)
    };
  const a = c1(e, t, i);
  return a || null;
}
function l1(e, t) {
  var w, S;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, l = (w = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : w.call(a), f = (t == null ? void 0 : t.ds) || ((S = pt == null ? void 0 : pt.canvas) == null ? void 0 : S.ds);
  if (!l || !f) return null;
  const d = Number(f.scale || 1);
  if (!Number.isFinite(d) || Math.abs(d) < 1e-6) return null;
  const p = Array.isArray(f.offset) ? f.offset : [0, 0], y = (n - Number(l.left || 0)) / d - Number(p[0] || 0), _ = (i - Number(l.top || 0)) / d - Number(p[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(_) ? null : { x: y, y: _ };
}
function c1(e, t, n) {
  var a, l;
  const i = l1(t, n || (pt == null ? void 0 : pt.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
  } : null;
}
function Po(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), ri(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", hm(e, 320, 180), Ei(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var S, A;
    const w = t ? t.apply(this, arguments) : void 0;
    try {
      const v = arguments[0];
      v && !((S = this.flags) != null && S.collapsed) && (i.stepInertia(performance.now()) && ((A = this.setDirtyCanvas) == null || A.call(this, !0, !1)), o1(this, v, i));
    } catch {
    }
    return w;
  }, e.onResize = function() {
    var S;
    const w = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, vs(this, 150), (S = this.setDirtyCanvas) == null || S.call(this, !0, !0), Tm(this, 220, null), w;
  };
  const i = Fs({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (w) => {
      e.__panoPreviewView = w;
    },
    getViewportSize: () => {
      const w = Jo(e);
      return {
        w: Math.max(1, Number((w == null ? void 0 : w.w) || 0)),
        h: Math.max(1, Number((w == null ? void 0 : w.h) || 0))
      };
    },
    onInteraction: () => {
      var w;
      Am(e), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(w, S, A) {
    var v;
    try {
      if (!((v = this.flags) != null && v.collapsed)) {
        const R = Zo(this, w, S, A) || { x: 0, y: 0 }, V = ri(this), j = Number((V == null ? void 0 : V[0]) || 0), k = Number((V == null ? void 0 : V[1]) || 0);
        if (R.x >= j - 20 && R.y >= k - 20)
          return a ? a.apply(this, arguments) : void 0;
        const D = Jo(this);
        if (pd(R.x, R.y, D))
          return (w == null ? void 0 : w.button) === 0 && i.startDrag(R.x, R.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const l = e.onMouseMove;
  e.onMouseMove = function(w, S, A) {
    try {
      const v = Zo(this, w, S, A);
      if (i.state.drag.active) {
        if (typeof (w == null ? void 0 : w.buttons) == "number" && (w.buttons & 1) === 0)
          return i.endDrag(), !0;
        const R = v || i.state.drag;
        return i.moveDrag(R.x, R.y, "pano"), !0;
      }
    } catch {
    }
    return l ? l.apply(this, arguments) : void 0;
  };
  const f = e.onMouseUp;
  e.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : f ? f.apply(this, arguments) : void 0;
  };
  const d = e.onMouseLeave;
  e.onMouseLeave = function() {
    const w = d ? d.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), w;
  };
  const p = e.onMouseWheel;
  e.onMouseWheel = function(w, S, A) {
    var v, R;
    try {
      if ((v = this.flags) != null && v.collapsed) return p ? p.apply(this, arguments) : void 0;
      const V = Zo(this, w, S, A), j = Jo(this);
      if (!V || !pd(V.x, V.y, j)) return p ? p.apply(this, arguments) : void 0;
      const k = Number((w == null ? void 0 : w.deltaY) ?? (w == null ? void 0 : w.wheelDeltaY) ?? (typeof S == "number" ? S : 0));
      return i.applyWheel(Math.sign(k)) && ((R = this.setDirtyCanvas) == null || R.call(this, !0, !1)), typeof (w == null ? void 0 : w.preventDefault) == "function" && w.preventDefault(), typeof (w == null ? void 0 : w.stopPropagation) == "function" && w.stopPropagation(), !0;
    } catch {
      return p ? p.apply(this, arguments) : void 0;
    }
  };
  const y = e.onRemoved, _ = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = l, e.onMouseUp = f, e.onMouseLeave = d, e.onMouseWheel = p, e.onRemoved = y, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = _, e.onRemoved = function() {
    return _(), ka.unregister(this), gs.unregister(this), y ? y.apply(this, arguments) : void 0;
  };
}
function u1(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Nm(e, t) {
  var y, _, w, S, A, v, R, V, j, k, E, D;
  const n = (_ = (y = t == null ? void 0 : t.painting) == null ? void 0 : y.paint) == null ? void 0 : _.strokes, i = (S = (w = t == null ? void 0 : t.painting) == null ? void 0 : w.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, l = Array.isArray(i) && i.length > 0;
  if (!a && !l) return null;
  const f = u1(e, t), d = `${f.width}x${f.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== d) && (e.__panoPreviewPaintEngine = dc(f), e.__panoPreviewPaintDescriptorKey = d, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const p = {
    paint: n || null,
    mask: i || null,
    groups: ((A = t == null ? void 0 : t.painting) == null ? void 0 : A.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((R = e.__panoPreviewPaintRevision) == null ? void 0 : R.paint) !== p.paint || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.mask) !== p.mask || ((j = e.__panoPreviewPaintRevision) == null ? void 0 : j.groups) !== p.groups || ((k = e.__panoPreviewPaintRevision) == null ? void 0 : k.rasterObjects) !== p.rasterObjects) && (e.__panoPreviewPaintRevision = p, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    l ? "m1" : "m0",
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((D = t == null ? void 0 : t.painting) == null ? void 0 : D.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function km(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function f1(e, t) {
  const n = Nm(e, t);
  if (!n) return null;
  const i = km(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function d1(e, t, n = null) {
  var d;
  const i = (d = t == null ? void 0 : t.painting_layer) == null ? void 0 : d.paint, a = mr(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const l = e.__panoPaintingLayerImageCache;
  if (l.img && l.src === a) return l.img;
  const f = new Image();
  return f.onload = () => {
    var p;
    n == null || n(), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0);
  }, f.onerror = () => {
    var p;
    ((p = e.__panoPaintingLayerImageCache) == null ? void 0 : p.img) === f && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, f.src = a, e.__panoPaintingLayerImageCache = { src: a, img: f }, f;
}
function vd(e, t) {
  var l, f;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((l = t == null ? void 0 : t.painting) == null ? void 0 : l.raster_objects) && t.painting.raster_objects.length > 0) {
    const d = d1(e, t, () => {
      var p, y;
      return (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null ? void 0 : y.call(p);
    });
    if (d && (d.complete || d.naturalWidth || d.width))
      return {
        source: d,
        revision: String(((f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.revision) || d.currentSrc || d.src || "")
      };
  }
  const a = f1(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function h1(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function m1(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function p1(e, t, n, i, a, l) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const f = h1(n);
  if (f.width === i && f.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const p = m1(e, l, f.width, f.height).getContext("2d", { willReadFrequently: !0 });
  if (!p) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    p.clearRect(0, 0, f.width, f.height), p.drawImage(n, 0, 0, f.width, f.height);
    const y = p.getImageData(0, 0, f.width, f.height).data, _ = t.getImageData(0, 0, i, a), w = _.data, S = Math.max(0, f.width - 1), A = Math.max(0, f.height - 1);
    for (let v = 0; v < a; v += 1) {
      const R = (v + 0.5) * f.height / a - 0.5, V = G(Math.floor(R), 0, A), j = G(V + 1, 0, A), k = G(R - V, 0, 1);
      for (let E = 0; E < i; E += 1) {
        const D = (E + 0.5) * f.width / i - 0.5, L = G(Math.floor(D), 0, S), W = G(L + 1, 0, S), F = G(D - L, 0, 1);
        let J = 0, ce = 0, U = 0, ve = 0;
        const xe = (te, ye, $) => {
          const X = (ye * f.width + te) * 4, _e = (y[X + 3] || 0) / 255;
          J += _e * $, ce += (y[X] || 0) / 255 * _e * $, U += (y[X + 1] || 0) / 255 * _e * $, ve += (y[X + 2] || 0) / 255 * _e * $;
        };
        if (xe(L, V, (1 - F) * (1 - k)), xe(W, V, F * (1 - k)), xe(L, j, (1 - F) * k), xe(W, j, F * k), J <= 1e-6) continue;
        const C = (v * i + E) * 4, we = 1 - J;
        w[C] = Math.round(G((ce + w[C] / 255 * we) * 255, 0, 255)), w[C + 1] = Math.round(G((U + w[C + 1] / 255 * we) * 255, 0, 255)), w[C + 2] = Math.round(G((ve + w[C + 2] / 255 * we) * 255, 0, 255)), w[C + 3] = 255;
      }
    }
    t.putImageData(_, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function _d(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0)), d = `${String(t.currentSrc || t.src || "")}|${a}x${l}|${i}`;
  let p = e.__panoPreviewBgPaint;
  if (!p || p.__revKey !== d || p.width !== a || p.height !== l) {
    (!p || p.width !== a || p.height !== l) && (p = document.createElement("canvas"), p.width = a, p.height = l, e.__panoPreviewBgPaint = p);
    const y = p.getContext("2d");
    y.clearRect(0, 0, a, l), y.drawImage(t, 0, 0, a, l), p1(e, y, n, a, l, "__panoPreviewOverlayScratch"), p.__revKey = d;
  }
  return p;
}
function g1(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  _m(e, a);
  const l = Xc(e), f = t.parentElement, d = 1, p = Math.max(1, Number((f == null ? void 0 : f.clientWidth) || t.clientWidth || 0)), y = Math.max(1, Number((f == null ? void 0 : f.clientHeight) || t.clientHeight || 0)), _ = Math.max(64, Math.round(p * d)), w = Math.max(64, Math.round(y * d)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const A = e1(l), v = pc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var J, ce;
          return (ce = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : ce.call(J);
        },
        { preserveReadyWhilePending: !1 }
      ), R = !!(v && v.complete && (v.naturalWidth || v.width));
      (t.width !== _ || t.height !== w) && (t.width = _, t.height = w);
      const V = { x: 0, y: 0, w: _, h: w }, j = R ? G(Number((v.naturalWidth || v.width) / Math.max(1, Number(v.naturalHeight || v.height || 1))), 0.05, 20) : 1, k = A ? Er(A) : null, E = G(Number((k == null ? void 0 : k.aspect) || j || 1), 0.05, 20), D = xm(V, E);
      bc(t, V), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, _, w);
      let L = "none", W = "Open editor and add frame", F = "";
      if (F = String((v == null ? void 0 : v.src) || ""), A)
        if (v && !R)
          L = "loading";
        else if (R) {
          const J = yc(e, l), ce = vc(e, l, J), U = i1(e, l), ve = ba({
            stateRevision: [
              "runtime_cutout_scene",
              String(v.currentSrc || v.src || ""),
              Number(v.naturalWidth || v.width || 0),
              Number(v.naturalHeight || v.height || 0),
              Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
              String((A == null ? void 0 : A.id) || ""),
              Array.isArray(ce) ? ce.map((C) => `${String((C == null ? void 0 : C.assetId) || "")}:${String((C == null ? void 0 : C.revision) || "")}`).join(",") : "",
              Array.isArray(U) ? U.map((C) => `${String((C == null ? void 0 : C.id) || "")}:${String((C == null ? void 0 : C.revision) || "")}:${Number((C == null ? void 0 : C.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: v,
            backgroundRevision: String(v.currentSrc || v.src || ""),
            coverageDeg: Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
            scene: J,
            textures: ce,
            rasterEntries: U,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = ti()), e.__panoRuntimeCore.syncState(ve), e.__panoRuntimeCore.renderToContext(
            S,
            D,
            Er(A),
            { width: D.w, height: D.h, dpr: 1 }
          ) || (L = "empty", W = "Open editor or run node");
        } else
          L = "empty", W = "Connect ERP image";
      else {
        if (R) {
          const J = vd(e, l), ce = J != null && J.source ? _d(e, v, J.source, J.revision || "") : v;
          t1(S, ce, V, 0.44);
        }
        L = "empty", W = "Open editor and add frame";
      }
      L === "loading" ? (ko(e, !1), Kr(e, !0, F)) : L === "empty" ? (ko(e, !0, W), Kr(e, !1, "")) : (ko(e, !1), Kr(e, !1, ""));
    } else {
      ko(e, !1), (t.width !== _ || t.height !== w) && (t.width = _, t.height = w);
      const A = { x: 0, y: 0, w: _, h: w }, v = bc(t, A);
      S.setTransform(1, 0, 0, 1, 0, 0), S.clearRect(0, 0, _, w), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const R = qc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), V = Math.tan(Number(e.__panoPreviewView.fov || 100) * ni * 0.5), j = pc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var xe, C;
          return (C = (xe = e.__panoDomPreview) == null ? void 0 : xe.requestDraw) == null ? void 0 : C.call(xe);
        }
      ), k = !!(j && j.complete && (j.naturalWidth || j.width));
      S.fillStyle = "#1a1a1e", S.fillRect(0, 0, _, w);
      const E = yc(e, l), D = vc(e, l, E), L = Yc(e.__panoPreviewView, l == null ? void 0 : l.coverage), W = vd(e, l), F = (W == null ? void 0 : W.source) || null, J = k && F ? _d(e, j, F, (W == null ? void 0 : W.revision) || "") : j, ce = J !== j ? String(J.__revKey || "") : j ? [
        String(j.currentSrc || j.src || ""),
        Number(j.naturalWidth || j.width || 0),
        Number(j.naturalHeight || j.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = ti());
      let U = !1;
      if (k) {
        const C = e.__panoDomRuntimeCore.syncState(
          s1(J, l, E, D, "runtime_dom_scene", ce)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", L, {
          width: A.w,
          height: A.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        C && (S.drawImage(C, A.x, A.y, A.w, A.h), U = !0);
      }
      const ve = E.stickers;
      if (k && U)
        Kr(e, !1, "");
      else if (k)
        ys(e, S, A, R, V, J, ms), Kr(e, !1, "");
      else if (F)
        ys(e, S, A, R, V, F, ms), Kr(e, !!j && !k, String((j == null ? void 0 : j.src) || ""));
      else {
        const xe = !!j && !k;
        Kr(e, xe, String((j == null ? void 0 : j.src) || "")), xe && Qv(S, A, v);
      }
      if ((!k || ve.length === 0) && Pm(S, A, R, V, v), !U && ve.length > 0) {
        const xe = Cm(e), C = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, we = xe || C, te = we ? 8 : 12, ye = we ? 6 : 9;
        ve.forEach(($) => Mm(S, e, A, R, V, l, $, te, ye));
      } else if (!j || !k) {
        const xe = Math.max(14, Math.round(16 * v));
        S.fillStyle = "rgba(212,212,216,0.85)", S.font = `600 ${xe}px Plus Jakarta Sans, Geist, sans-serif`, S.textAlign = "center", S.fillText("Open editor to add stickers", _ * 0.5, w * 0.5 + 24 * v);
      }
    }
}
function ys(e, t, n, i, a, l, f = Tv) {
  const d = Xc(e), p = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = ti());
  const y = Wv(l), _ = Rs({
    stateRevision: [
      "runtime_bg_only",
      y,
      Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: y,
    coverageDeg: Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360,
    scene: { stickers: [], selectedId: null, hoveredId: null },
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  if (!e.__panoBackgroundCore.syncState(_)) return;
  const S = e.__panoBackgroundCore.renderToTarget("runtime_preview", {
    mode: "panorama",
    yawDeg: Number(p.yaw || 0),
    pitchDeg: Number(p.pitch || 0),
    fovDeg: Number(p.fov || 100),
    coverageDeg: Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  S && t.drawImage(S, n.x, n.y, n.w, n.h);
}
function xd(e, t, n, i, a, l, f = 1) {
  let d = !1;
  e.strokeStyle = l, e.lineWidth = f, e.beginPath();
  for (const p of t) {
    const y = Sm(p, n, i, a);
    if (!y) {
      d = !1;
      continue;
    }
    d ? e.lineTo(y.x, y.y) : (e.moveTo(y.x, y.y), d = !0);
  }
  e.stroke();
}
function Pm(e, t, n, i, a = 1) {
  e.save();
  const l = "rgba(63, 63, 70, 0.5)", f = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const _ = [];
    for (let w = -180; w <= 180; w += 15) _.push(qr(w, y));
    xd(e, _, n, t, i, y === 0 ? f : l, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const _ = [];
    for (let w = -89; w <= 89; w += 15) _.push(qr(y, w));
    xd(e, _, n, t, i, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : l, y % 90 === 0 ? 1.2 : 1);
  }
  const d = [
    { name: "Front", dir: qr(0, 0) },
    { name: "Right", dir: qr(90, 0) },
    { name: "Back", dir: qr(180, 0) },
    { name: "Left", dir: qr(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const p = Math.max(9, Math.round(11 * a));
  e.font = `500 ${p}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", d.forEach((y) => {
    const _ = Sm(y.dir, n, t, i);
    _ && e.fillText(y.name, _.x, _.y + 20 * a);
  }), e.restore();
}
function b1(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Am(e) {
  const t = b1(e);
  t.dragging = !1, t.hqFrames = Iv;
}
function vs(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Cm(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function y1(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function v1(e, t, n = 20) {
  var f;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (f = t.getBoundingClientRect) == null ? void 0 : f.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), l = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && l >= i.height - n;
}
function ki(e, t) {
  return v1(e, t) ? !1 : (y1(e), !0);
}
function _1() {
  var n;
  const e = (n = pt == null ? void 0 : pt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function x1(e) {
  var n;
  if (!e) return;
  const t = (n = pt == null ? void 0 : pt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function w1(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !dm(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function S1(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var l, f;
    e.__panoBootMinHeightTimer = null, (l = e == null ? void 0 : e.__panoDomPreview) != null && l.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (f = e.setDirtyCanvas) == null || f.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function wd(e, t = null, n = 0) {
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
      e.__panoUserResized = !0, vs(e, 150), t == null || t(), Tm(e, 180, t);
    }
  };
}
function Tm(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ei(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function M1(e, t = {}) {
  var $;
  const n = t.__allowStandalone === !0, i = Rv(e);
  if (i && !n) {
    mm(e);
    return;
  }
  i && w1(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", gs.register(e);
  const a = e.__panoPreviewMode === "stickers", l = t.__noLegacyFallback === !0, f = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || ka.unregister(e);
  const d = String(t.__panoForcedPath || "").trim(), p = a ? pm(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: ei(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (d === "dom" || d === "legacy_draw") && (p.chosenPath = d, p.reason = "controller_target_backend");
  const y = a ? p.chosenPath : "dom", _ = p.signature || ei(e);
  if (Number(e.__panoRebindGeneration || 0), mc(e), e == null || e.id, e.__panoPreviewMode, p.reason, p.frontendVersionRaw, e.addDOMWidget, ri(e), e.__panoFrontendSig = _, e.__panoStickersPath = y, a && ka.register(e), a && y === "legacy_draw") {
    if (l) return;
    Hi(e, { keepMonitor: !0 }), Po(e);
    return;
  }
  if (($ = e.__panoDomPreview) != null && $.widget) return;
  if (e.__panoLegacyPreviewHooked && Hi(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !l && Po(e);
    return;
  }
  const w = t.noPreview === !0, S = a || w ? 0 : 56, A = document.createElement("div");
  if (Ov(), A.className = "pano-node-preview-dom", A.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), w && A.classList.add("pano-node-preview--no-preview"), A.setAttribute("data-capture-wheel", "true"), A.setAttribute("tabindex", "-1"), A.style.cssText = [
    "width:100%",
    w ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), w) {
    const X = e.addDOMWidget(hc(), "preview", A, wd(e, null));
    Ei(e), e.__panoDomPreview = { widget: X, root: A, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const v = document.createElement("div");
  v.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const R = document.createElement("canvas");
  R.style.cssText = [
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
  ].join(";"), V.textContent = "Open editor and add frame", v.appendChild(R), v.appendChild(V), A.appendChild(v), hm(e, 120, 120), Ei(e);
  let j = null;
  try {
    S1(e, S, () => {
      var X, _e;
      return (_e = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : _e.call(X);
    }), j = e.addDOMWidget(
      hc(),
      "preview",
      A,
      wd(e, () => {
        var X, _e;
        return (_e = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : _e.call(X);
      }, S)
    );
  } catch {
    a && Po(e);
    return;
  }
  const k = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, E = () => {
    k.needsDraw = !0, k.raf || (k.raf = requestAnimationFrame(W));
  }, D = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    vs(e, 150), E();
  }) : null;
  D == null || D.observe(v);
  const L = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const X = 3, _e = ($e) => {
      requestAnimationFrame(() => {
        var De;
        const ze = !!(A != null && A.isConnected && (v != null && v.isConnected) && (R != null && R.isConnected) && Number(v.clientHeight || 0) > 0 && Number(R.clientHeight || 0) > 0);
        if (!ze && $e < X) {
          _e($e + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((R == null ? void 0 : R.clientHeight) || 0), !ze) {
          if (l) {
            e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((R == null ? void 0 : R.clientHeight) || 0);
            return;
          }
          Hi(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", Po(e), (De = e.setDirtyCanvas) == null || De.call(e, !0, !0);
        }
      });
    };
    _e(1);
  }, W = (X) => {
    var $e, ze, De;
    k.raf = 0;
    const _e = F.stepInertia(X);
    (k.needsDraw || _e) && (k.needsDraw = !1, ($e = e.flags) != null && $e.collapsed || g1(e, R, null, F), (ze = e.setDirtyCanvas) == null || ze.call(e, !0, !1)), (_e || k.needsDraw) && (k.raf = requestAnimationFrame(W)), Ev() && (!e.__panoDebugLastTs || X - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = X, e.__panoPreviewMode, ri(e), ha(A), ha(v), ha(R), ha(A.parentElement), ha((De = A.parentElement) == null ? void 0 : De.parentElement), Number(R.width || 0), Number(R.height || 0), void 0);
  }, F = Fs({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (X) => {
      e.__panoPreviewView = X;
    },
    onInteraction: () => {
      E();
    }
  });
  R.addEventListener("pointerdown", (X) => {
    var _e, $e;
    ki(X, v) && f && X.button === 0 && ((_e = A.focus) == null || _e.call(A), ($e = R.setPointerCapture) == null || $e.call(R, X.pointerId), R.style.cursor = "grabbing", F.startDrag(X.clientX, X.clientY, X.pointerId));
  }), R.addEventListener("pointermove", (X) => {
    !f || !F.state.drag.active || (ki(X, v), F.moveDrag(X.clientX, X.clientY, "pano"));
  });
  const J = (X) => {
    var _e;
    !f || !F.state.drag.active || (ki(X, v), (_e = R.releasePointerCapture) == null || _e.call(R, X.pointerId), R.style.cursor = "grab", F.endDrag(), Am(e), E());
  };
  R.addEventListener("pointerup", J), R.addEventListener("pointercancel", J), R.addEventListener("pointerleave", (X) => {
    F.state.drag.active && J(X);
  });
  const ce = (X) => {
    var $e, ze, De;
    if (!ki(X, v) || !f) return;
    const _e = _1();
    F.applyWheelEvent(X) && E(), ($e = X.preventDefault) == null || $e.call(X), (ze = X.stopPropagation) == null || ze.call(X), (De = X.stopImmediatePropagation) == null || De.call(X), requestAnimationFrame(() => {
      var wt, Et;
      x1(_e), (Et = (wt = pt == null ? void 0 : pt.canvas) == null ? void 0 : wt.setDirty) == null || Et.call(wt, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((X) => {
    v.addEventListener(X, ce, { passive: !1, capture: !0 }), R.addEventListener(X, ce, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((X) => {
    R.addEventListener(X, (_e) => ki(_e, v)), v.addEventListener(X, (_e) => ki(_e, v));
  });
  const U = Fa(e, "state_json");
  if (U && !U.__panoPreviewPatchedCb) {
    U.__panoPreviewPatchedCb = !0;
    const X = U.callback;
    U.callback = (_e) => {
      const $e = X ? X(_e) : void 0;
      return E(), $e;
    };
  }
  const ve = Fa(e, "bg_color");
  if (ve && !ve.__panoPreviewPatchedCb) {
    ve.__panoPreviewPatchedCb = !0;
    const X = ve.callback;
    ve.callback = (_e) => {
      const $e = X ? X(_e) : void 0;
      return E(), $e;
    };
  }
  const xe = e.onRemoved, C = e.onResize, we = e.onExecuted;
  e.onExecuted = function(X) {
    Xv(e, X), gc(e), Ei(e), E();
    const _e = we ? we.apply(this, arguments) : void 0;
    return Ei(e), _e;
  };
  const te = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return gc(e), Ei(e), E(), te ? te.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var _e;
    const X = C ? C.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, vs(this, 150), E(), (_e = this.setDirtyCanvas) == null || _e.call(this, !0, !1), X;
  }, e.onRemoved = function() {
    return ye(), ka.unregister(this), gs.unregister(this), xe ? xe.apply(this, arguments) : void 0;
  };
  const ye = () => {
    var X;
    k.raf && cancelAnimationFrame(k.raf), (X = D == null ? void 0 : D.disconnect) == null || X.call(D), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = C, e.onExecuted = we, e.onConnectionsChange = te, e.onRemoved = xe;
  };
  e.__panoDomRestore = ye, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: j, root: A, canvas: R, requestDraw: E, state: k, emptyHintEl: V }, L(), E();
}
function Sd(e, t = {}) {
  gm(e).attach({
    ...t,
    mode: "cutout"
  });
}
const Qn = Math.PI / 180, Wi = 180 / Math.PI;
function ai(e, t, n) {
  return { x: e, y: t, z: n };
}
function Md(e, t) {
  return ai(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ao(e, t) {
  return ai(e.x * t, e.y * t, e.z * t);
}
function Nd(e, t) {
  return ai(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Co(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ai(e.x / t, e.y / t, e.z / t);
}
function N1(e, t) {
  const n = e * Qn, i = t * Qn, a = Math.cos(i);
  return ai(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function k1(e, t, n = 0) {
  const i = N1(e, t), a = ai(0, 1, 0);
  let l = Nd(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = ai(1, 0, 0)), l = Co(l);
  const f = Co(Nd(i, l)), d = n * Qn, p = Math.cos(d), y = Math.sin(d), _ = Md(Ao(l, p), Ao(f, y)), w = Md(Ao(l, -y), Ao(f, p));
  return { fwd: i, right: Co(_), up: Co(w) };
}
const To = 140, P1 = 180, kd = 40, Bl = 10;
function Pd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Ad(e, t) {
  const n = Pd(e), i = Pd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Cd(e) {
  var l;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const i = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", i), e.subfolder && n.set("subfolder", String(e.subfolder));
  const a = `/view?${n.toString()}`;
  return typeof ((l = on) == null ? void 0 : l.apiURL) == "function" ? on.apiURL(a) : a;
}
function Ui(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ui(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Cd({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const i = Ui(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Cd(e);
}
function Im(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function A1(e) {
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
function _c(e) {
  var a;
  const t = (a = yn) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (Ad(l, n)) return t.get(l);
  } else
    for (const l of Object.keys(t))
      if (Ad(l, n)) return t[l];
  return null;
}
function C1(e) {
  var i, a;
  const t = _c(e == null ? void 0 : e.id), n = [
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const l of n)
    if (Array.isArray(l))
      for (const f of l) {
        const d = Ui(f);
        if (d && /\.mp4(\?|$)/i.test(d) || d && String((f == null ? void 0 : f.format) || "").toLowerCase() === "video/mp4") return d;
      }
  return "";
}
function T1(e, t = "erp_image") {
  var v, R, V, j, k, E, D, L, W, F, J, ce;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let i = null;
  const a = n.find((U) => String((U == null ? void 0 : U.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const U = n.find((ve) => String((ve == null ? void 0 : ve.type) || "").toUpperCase() === "IMAGE" && (ve == null ? void 0 : ve.link) != null);
    (U == null ? void 0 : U.link) != null && (i = U.link);
  }
  if (i == null) return "";
  const l = ((R = (v = e == null ? void 0 : e.graph) == null ? void 0 : v.links) == null ? void 0 : R[i]) || ((k = (j = (V = yn) == null ? void 0 : V.graph) == null ? void 0 : j.links) == null ? void 0 : k[i]);
  if (!l) return "";
  const f = Number(l.origin_id);
  if (!Number.isFinite(f)) return "";
  const d = (L = (D = (E = yn) == null ? void 0 : E.graph) == null ? void 0 : D.getNodeById) == null ? void 0 : L.call(D, f), p = _c(f), y = _c(e == null ? void 0 : e.id), _ = [
    (W = y == null ? void 0 : y.ui) == null ? void 0 : W.pano_input_images,
    y == null ? void 0 : y.pano_input_images,
    p == null ? void 0 : p.images,
    (F = p == null ? void 0 : p.ui) == null ? void 0 : F.pano_input_images,
    p == null ? void 0 : p.pano_input_images
  ];
  for (const U of _)
    if (Array.isArray(U))
      for (const ve of U) {
        const xe = Ui(ve);
        if (xe) return xe;
      }
  let w = [];
  try {
    w = typeof ((J = yn) == null ? void 0 : J.getNodeImageUrls) == "function" ? yn.getNodeImageUrls(d) || [] : [];
  } catch {
    w = [];
  }
  if (Array.isArray(w) && w.length > 0)
    for (const U of w) {
      const ve = Ui(U);
      if (ve) return ve;
    }
  if (d) {
    const U = Array.isArray(d == null ? void 0 : d.imgs) ? d.imgs : [];
    for (const ve of U) {
      const xe = Ui(ve);
      if (xe) return xe;
    }
  }
  const S = (ce = d == null ? void 0 : d.widgets) == null ? void 0 : ce.find((U) => String((U == null ? void 0 : U.name) || "").toLowerCase() === "image"), A = String((S == null ? void 0 : S.value) || "").trim();
  return A ? on.apiURL(`/view?filename=${encodeURIComponent(A)}&type=input&subfolder=`) : "";
}
function Td(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Id(e, t, n, i, a, l) {
  var S, A, v;
  if (t.clearRect(0, 0, n, i), t.fillStyle = "#070707", t.fillRect(0, 0, n, i), !Im(l) || n <= 1 || i <= 1) {
    Td(t, n, i);
    return;
  }
  const f = k1(Number(a.yaw || 0), Number(a.pitch || 0), 0), d = Math.tan(Number(a.fov || 100) * Qn * 0.5), p = Number(((v = (A = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : A.call(S, (R) => (R == null ? void 0 : R.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = ti());
  const y = A1(l), _ = Rs({
    stateRevision: [
      "standalone_preview_scene",
      y,
      p
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: y,
    coverageDeg: p,
    scene: Ls(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(_) && (() => {
    const R = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      Cv(a, p),
      { width: n, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return R ? (t.drawImage(R, 0, 0, n, i), !0) : !1;
  })() || (ys(e, t, { x: 0, y: 0, w: n, h: i }, f, d, l, ms), Td(t, n, i));
}
function Dd(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class I1 {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Fs({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: Vt(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: G(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: G(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, l, f, d;
        const i = (l = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : l.call(a);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((f = this.canvas) == null ? void 0 : f.clientWidth) || 0)),
          h: Math.max(1, Number((i == null ? void 0 : i.height) || ((d = this.canvas) == null ? void 0 : d.clientHeight) || 0))
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
    var i, a, l;
    const t = this;
    this.node.onExecuted = function() {
      const f = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), f;
    }, this.node.onConnectionsChange = function() {
      const f = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), f;
    }, this.node.onResize = function() {
      const f = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), f;
    }, this.node.onRemoved = function() {
      const f = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), f;
    };
    const n = ((l = (a = (i = this.node) == null ? void 0 : i.widgets) == null ? void 0 : a.find) == null ? void 0 : l.call(a, (f) => (f == null ? void 0 : f.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...f) => {
      const d = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...f) : void 0;
      return t.requestDraw(), d;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var l;
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (l = this.flags) != null && l.collapsed || !t.errorText) return i;
      const a = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(a.x, a.y, a.w, a.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, a.x + a.w * 0.5, a.y + a.h * 0.5), n.restore(), i;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--stickers", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${To}px`,
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
          return To;
        },
        getHeight() {
          return To;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const i = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const l = i ? i(a) || {} : {};
          return {
            ...l,
            minHeight: Math.max(To, Number(l.minHeight || 0)),
            minWidth: Math.max(P1, Number(l.minWidth || 0))
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
      var l, f, d;
      a.button === 0 && ((l = n.focus) == null || l.call(n, { preventScroll: !0 }), (f = t.setPointerCapture) == null || f.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var l;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
    const i = (a) => {
      var l, f;
      this.controller.state.drag.active && ((l = t.releasePointerCapture) == null || l.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    };
    t.addEventListener("pointerup", i), t.addEventListener("pointercancel", i), n.addEventListener("wheel", (a) => {
      var l;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var l;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a);
    }), n.addEventListener("keydown", (a) => {
      var l;
      a.key !== " " && a.key !== "Spacebar" || (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Im(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), i;
    }, this.node.onMouseDown = function(n, i) {
      var f;
      const a = t.localPoint(i);
      if (!a) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const l = t.getLegacyPreviewRect();
      return Dd(a.x, a.y, l) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - l.x, a.y - l.y), (f = this.setDirtyCanvas) == null || f.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, i) {
      var f;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(i);
      if (!a) return !0;
      const l = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - l.x, a.y - l.y, "pano"), (f = this.setDirtyCanvas) == null || f.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, i, a) {
      var y, _, w, S, A, v;
      const l = Zo(this, n, i, a), f = t.getLegacyPreviewRect();
      if (!l || !Dd(l.x, l.y, f))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const d = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((y = t.view) == null ? void 0 : y.fov) || 100);
      const p = t.controller.applyWheel(Math.sign(d));
      return Number(((_ = t.view) == null ? void 0 : _.fov) || 100), p && ((w = this.setDirtyCanvas) == null || w.call(this, !0, !1)), (S = n == null ? void 0 : n.preventDefault) == null || S.call(n), (A = n == null ? void 0 : n.stopPropagation) == null || A.call(n), (v = n == null ? void 0 : n.stopImmediatePropagation) == null || v.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, l, f;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - Bl * 2), n = Math.max(60, Number(((f = (l = this.node) == null ? void 0 : l.size) == null ? void 0 : f[1]) || 0) - kd - Bl);
    return { x: Bl, y: kd, w: t, h: n };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), Id(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, i = Math.max(1, Math.round(t.width * n)), a = Math.max(1, Math.round(t.height * n));
    (this.canvas.width !== i || this.canvas.height !== a) && (this.canvas.width = i, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    var a, l, f;
    const t = C1(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const d = document.createElement("video");
      d.muted = !0, d.loop = !0, d.playsInline = !0, d.crossOrigin = "anonymous";
      const p = () => {
        this.imgSrc === t && (this.img = d, this.videoPaused || d.play().catch(() => {
        }), this.requestDraw());
      }, y = () => this.requestDraw();
      d.addEventListener("loadedmetadata", p), d.addEventListener("canplay", p), d.addEventListener("timeupdate", y), d.addEventListener("play", y), d.addEventListener("pause", y), d.src = t, d.load(), this.mediaCleanup = () => {
        d.pause(), d.removeEventListener("loadedmetadata", p), d.removeEventListener("canplay", p), d.removeEventListener("timeupdate", y), d.removeEventListener("play", y), d.removeEventListener("pause", y);
      };
      return;
    }
    const n = T1(this.node, this.imageInputName);
    if (!n) {
      (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.imgSrc = n;
    const i = new Image();
    i.onload = () => {
      this.imgSrc === n && (this.img = i, this.requestDraw());
    }, i.onerror = () => {
      this.imgSrc === n && (this.img = null, this.requestDraw());
    }, i.src = n;
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
    var a, l;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (Id(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (l = (a = this.node).setDirtyCanvas) == null || l.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, i, a, l, f, d, p, y, _, w, S, A;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null;
    try {
      (d = (f = this.root) == null ? void 0 : f.remove) == null || d.call(f);
    } catch {
    }
    if (Array.isArray((p = this.node) == null ? void 0 : p.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((v) => v !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((w = (_ = (y = this.node) == null ? void 0 : y.widgets) == null ? void 0 : _.find) == null ? void 0 : w.call(_, (v) => (v == null ? void 0 : v.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (A = (S = this.node.__panoStandaloneCore) == null ? void 0 : S.dispose) == null || A.call(S), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function D1(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new I1(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function E1(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const i = `__panoLifecyclePatched_${String(t)}`;
  if (e[i]) return;
  e[i] = !0;
  const a = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const d = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
  const l = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const d = l ? l.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
  const f = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const d = f ? f.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
}
function Dm(e) {
  return !!(e != null && e.prototype);
}
function xc(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function O1(e, t = {}) {
  Dm(e) || D1(e, {
    ...t,
    onOpen: xc(e, t.onOpen)
  });
}
function R1(e, t = {}) {
  if (!Dm(e)) {
    Sd(e, {
      ...t,
      onOpen: xc(e, t.onOpen)
    });
    return;
  }
  E1(e, "cutout_preview", (n) => {
    Sd(n, {
      ...t,
      onOpen: xc(n, t.onOpen)
    });
  });
}
const un = {
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
}, sr = "pen";
function Ed(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function F1(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const l = Math.max(1, Number(e || 80)), f = Math.max(1, Number(n || 8));
  function d(y) {
    if (i.splice(0, i.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((w) => {
      i.push(String(w || ""));
    }), !i.length)) return;
    const _ = Number(y.index);
    Number.isInteger(_) ? _ === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, _)) : a = i.length - 1;
  }
  function p(y) {
    i[a] !== y && (i.splice(a + 1), i.push(y), i.length > l && i.shift(), a = i.length - 1);
  }
  return d(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(y) {
      p(String(y || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const y = a - 1;
      return y < 0 || y >= i.length ? null : (a = y, i[a]);
    },
    redo() {
      const y = a + 1;
      return y < 0 || y >= i.length ? null : (a = y, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const y = i.length, _ = Math.max(0, y - f), w = a >= 0 ? Math.max(0, Math.min(a, _)) : _, S = i.slice(w, w + f), A = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - w));
      return {
        version: 1,
        entries: S,
        index: A
      };
    },
    hydrate: d
  };
}
function ot(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function L1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function $1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const l = ot(i.z_index ?? i.zIndex, t.length);
    t.push({
      id: String(i.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(l ?? t.length)),
      locked: i.locked === !0
    });
  }
  return t;
}
function z1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function j1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = ot(e.t, 0), i = ot(e.widthScale, null), a = ot(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const l = ot(e.u, null), f = ot(e.v, null);
    if (l == null || f == null) return null;
    const d = {
      targetKind: "ERP_GLOBAL",
      u: (l % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, f)),
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  if (t.kind === "FRAME_LOCAL") {
    const l = ot(e.u, null), f = ot(e.v, null);
    if (l == null || f == null) return null;
    const d = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: l,
      v: f,
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  return null;
}
function Io(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const l = j1(a, t);
    if (!l) return null;
    i.push(l);
  }
  return i.length >= n ? i : null;
}
function V1(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const p = Io(e.points, t, 3);
    return p ? { geometryKind: a, points: p } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const l = Io(e.points, t, 1);
  if (!l) return null;
  const f = Io(e.rawPoints, t, 1), d = Io(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: l,
    rawPoints: f || l.map((p) => ({ ...p })),
    processedPoints: d || l.map((p) => ({ ...p }))
  };
}
function H1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = z1(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = V1(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const l = ot(e.size, null), f = ot(e.opacity, null);
  if (l == null || f == null) return null;
  const d = String(e.id || "").trim(), p = String(e.actionGroupId || "").trim();
  if (!d || !p) return null;
  const y = ot(e.radiusValue, null), _ = String(e.radiusModel || "").trim() || null;
  let w = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    w = {
      r: Math.max(0, Math.min(1, ot(S.r, 0))),
      g: Math.max(0, Math.min(1, ot(S.g, 0))),
      b: Math.max(0, Math.min(1, ot(S.b, 0))),
      a: Math.max(0, Math.min(1, ot(S.a, 1)))
    };
  }
  return {
    id: d,
    actionGroupId: p,
    targetSpace: n,
    layerKind: t,
    toolKind: i,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, l),
    opacity: Math.max(0, Math.min(1, f)),
    hardness: ot(e.hardness, null),
    flow: ot(e.flow, null),
    spacing: ot(e.spacing, null),
    createdAt: Math.trunc(ot(e.createdAt, 0)),
    color: w,
    radiusModel: _,
    radiusValue: y == null ? null : Math.max(0, y),
    geometry: a
  };
}
function Od(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = H1(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function U1(e) {
  if (!e || typeof e != "object") return null;
  const t = ot(e.u0, null), n = ot(e.v0, null), i = ot(e.u1, null), a = ot(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const l = (d) => Math.max(0, Math.min(1, d)), f = { u0: l(t), v0: l(n), u1: l(i), v1: l(a) };
  return f.u1 <= f.u0 || f.v1 <= f.v0 ? null : f;
}
function B1(e) {
  const t = e || {};
  return {
    du: ot(t.du, 0) ?? 0,
    dv: ot(t.dv, 0) ?? 0,
    rot_deg: ot(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, ot(t.scale, 1) ?? 1)
  };
}
function G1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const l = U1(e.bbox);
  return l ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, ot(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: l,
    rasterDataUrl: a,
    transform: B1(e.transform)
  } : null;
}
function K1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = G1(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function Pa(e) {
  const t = L1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: $1(e.groups),
    paint: Od(e.paint, "paint"),
    mask: Od(e.mask, "mask"),
    raster_objects: K1(e.raster_objects)
  };
}
const Fr = 1, Lr = 179, Rd = 85;
function Fd(e) {
  const t = ((rt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function W1(e, t) {
  let n = rt(e, 0) - rt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Y1(e, t, { shiftKey: n = !1, altKey: i = !1 } = {}) {
  let a = rt(e, 0) + rt(t, 0) * Wi;
  return n ? a = Math.round(a / 15) * 15 : !i && Math.abs(Fd(a)) <= 1 && (a = 0), Fd(a);
}
function rt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function $s(e = {}) {
  const t = G(rt(e.hFOV_deg, 90), Fr, Lr), n = G(rt(e.vFOV_deg, 60), Fr, Lr), i = Math.tan(t * Qn * 0.5), a = Math.tan(n * Qn * 0.5);
  return {
    yawDeg: rt(e.yaw_deg, 0),
    pitchDeg: rt(e.pitch_deg, 0),
    rollDeg: rt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: i,
    tanHalfY: a,
    aspect: i / Math.max(1e-12, a)
  };
}
function Gl(e, t) {
  const n = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = $s(t);
  return Math.max(1, Math.min(
    n / (2 * a.tanHalfX),
    i / (2 * a.tanHalfY)
  ));
}
function q1(e, t) {
  const n = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, rt(t, 1)), l = Math.min(n, i * a);
  return { width: l, height: l / a };
}
function X1(e, t) {
  const n = Math.max(1e-12, rt(t, 1)), i = Math.max(1e-6, rt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, rt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), l = G(2 * Math.atan(i / (2 * n)) * Wi, Fr, Lr), f = G(2 * Math.atan(a / (2 * n)) * Wi, Fr, Lr);
  return { hFOV_deg: l, vFOV_deg: f };
}
function J1(e, t, n) {
  const i = rt(e == null ? void 0 : e.x, 0), a = rt(e == null ? void 0 : e.y, 0), l = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), f = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), d = $s(t), p = Math.max(1e-12, rt(n, 1)), y = 2 * p * d.tanHalfX, _ = 2 * p * d.tanHalfY;
  return {
    x: i + (l - y) * 0.5,
    y: a + (f - _) * 0.5,
    w: y,
    h: _,
    focalPx: p
  };
}
function Ld(e, t, n = Rd) {
  const i = Math.max(1e-12, rt(t, 1)), a = G(rt(n, Rd), 1, 89.999), l = i * Math.tan(a * Qn), f = Math.max(1, rt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), d = Math.max(1, rt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(f * 0.5, l),
    halfH: Math.min(d * 0.5, l)
  };
}
function $d(e, t) {
  const n = G(rt(e, 60), Fr, Lr), i = Math.max(1e-6, rt(t, 1));
  return G(
    2 * Math.atan(Math.tan(n * Qn * 0.5) * i) * Wi,
    Fr,
    Lr
  );
}
function zd(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Z1(e, t) {
  const n = zd(e, 1), i = zd(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, l = Math.max(1, Math.round(n * a)), f = Math.max(1, Math.round(i * a)), d = (y, _) => _ ? d(_, y % _) : y, p = d(l, f) || 1;
  return `${Math.max(1, Math.round(l / p))}:${Math.max(1, Math.round(f / p))}`;
}
function Qo(e) {
  const t = G(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Qn, n = G(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Qn;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Xr(e) {
  const t = Qo(e), i = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, a]) => Math.abs(t - a) <= 0.015);
  return (i == null ? void 0 : i[0]) || Z1(t, 1);
}
function Em(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Xr(t), t;
}
function Pi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Xr(e);
}
function Q1(e, t) {
  const n = $s(e), i = rt(t, 1);
  if (!(i > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * i) * Wi, l = 2 * Math.atan(n.tanHalfY * i) * Wi;
  return a < Fr || a > Lr || l < Fr || l > Lr ? null : { hFOV_deg: a, vFOV_deg: l };
}
let Do = { text: null, parsed: null };
function Kt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function wc(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function e_({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: i = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Kt(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Pa(null),
    painting_layer: null,
    ui_settings: wc(i),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function t_(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function n_(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function r_(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function i_(e) {
  return Array.isArray(e) ? e.map((t) => Em(t)) : [];
}
function a_(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, i = e_(n), a = String(e || "").trim();
  if (!a) return i;
  try {
    let l = null;
    if (Do.text === a ? l = Do.parsed : (l = JSON.parse(a), Do = { text: a, parsed: l }), !l || typeof l != "object" || Array.isArray(l)) return i;
    const f = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, d = {
      ...i,
      ...l,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: n_(l.assets),
      stickers: r_(l.stickers),
      shots: i_(l.shots),
      painting: Pa(l.painting),
      painting_layer: l.painting_layer && typeof l.painting_layer == "object" ? l.painting_layer : null,
      ui_settings: wc(l.ui_settings),
      active: l.active && typeof l.active == "object" ? { ...l.active } : { ...i.active }
    };
    return f && (d.ui_settings = wc({ ...d.ui_settings, ...f })), d.output_preset = t_(
      n.outputPreset,
      Number(d.output_preset || i.output_preset)
    ), d.bg_color = String(n.backgroundColor || d.bg_color || i.bg_color), d.coverage = Kt(n.coverage), delete d.editor_history, d;
  } catch {
    return Do = { text: a, parsed: null }, i;
  }
}
function jd(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Vd(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function o_(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: G(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: G(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Hd(e = {}, t = 0) {
  var a;
  const n = String((e == null ? void 0 : e.type) || "");
  if (!n) return null;
  const i = {
    id: String((e == null ? void 0 : e.id) || `${n}_${t}`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    zIndex: Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? t)
  };
  return n === "sticker" ? (i.transform = o_((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function s_(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Ki({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Vd((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((l, f) => Hd(l, f)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Vd((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((l, f) => Hd(l, f)).filter(Boolean);
  return Ki({
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
function La(e = {}) {
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
function _s(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function l_(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || ti((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function l(w) {
    var S;
    return JSON.stringify({
      stateRevision: (w == null ? void 0 : w.stateRevision) || "",
      background: (w == null ? void 0 : w.background) || null,
      objects: Array.isArray((S = w == null ? void 0 : w.objectPass) == null ? void 0 : S.objects) ? w.objectPass.objects.map((A) => ({
        id: (A == null ? void 0 : A.id) || "",
        type: (A == null ? void 0 : A.type) || "",
        revision: (A == null ? void 0 : A.revision) || "",
        visible: (A == null ? void 0 : A.visible) !== !1,
        opacity: Number((A == null ? void 0 : A.opacity) ?? 1),
        zIndex: Number((A == null ? void 0 : A.zIndex) ?? 0),
        transform: (A == null ? void 0 : A.transform) || null,
        params: (A == null ? void 0 : A.params) || null
      })) : [],
      overlay: (w == null ? void 0 : w.overlay) || {}
    });
  }
  function f(w = {}) {
    const S = s_(w), A = l(S);
    return a === A || !n.syncState(S) ? !1 : (i = S, a = A, !0);
  }
  function d(w = {}, S = {}) {
    if (!i) return null;
    const A = La(w), v = _s(S);
    return n.renderToTarget(t, A, v);
  }
  function p(w, S, A = {}, v = {}) {
    if (!w || !S || !i) return !1;
    const R = La(A), V = _s({
      ...v,
      width: Number((S == null ? void 0 : S.w) || (v == null ? void 0 : v.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (v == null ? void 0 : v.height) || 1)
    });
    return n.renderToContext(w, S, R, V);
  }
  function y() {
    var w;
    i = null, a = "", (w = n.clearState) == null || w.call(n);
  }
  function _() {
    var w;
    y(), (w = n.dispose) == null || w.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: f,
    renderFrame: d,
    renderToContext: p,
    snapshotScene: () => i,
    clearScene: y,
    dispose: _
  };
}
function c_(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((l) => {
      l ? i(l) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function u_(e, t = {}) {
  var p, y;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = La((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((p = t == null ? void 0 : t.camera) == null ? void 0 : p.output) || ((y = t == null ? void 0 : t.view) == null ? void 0 : y.output) || null, a = _s(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), l = e.renderFrame(n, a);
  if (!l) throw new Error("Panorama scene camera render returned null.");
  const f = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", d = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return c_(l, f, d);
}
function f_(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let l = La((n == null ? void 0 : n.view) || {}), f = !1, d = 0;
  function p() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), A = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), v = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), R = _s({ width: S, height: A, dpr: v });
    return i.width = Math.max(1, Math.round(R.width * R.dpr)), i.height = Math.max(1, Math.round(R.height * R.dpr)), i.style.width = `${R.width}px`, i.style.height = `${R.height}px`, R;
  }
  function y() {
    if (f || !a) return !1;
    const S = p();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      l,
      { ...S, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function _() {
    f || d || (d = requestAnimationFrame(() => {
      d = 0, y();
    }));
  }
  const w = typeof ResizeObserver == "function" ? new ResizeObserver(() => _()) : null;
  return w == null || w.observe(t), _(), {
    canvas: i,
    setView(S) {
      l = La(S || {}), _();
    },
    getView() {
      return { ...l };
    },
    present: y,
    requestRender: _,
    unmount() {
      f = !0, d && cancelAnimationFrame(d), w == null || w.disconnect(), i.remove();
    }
  };
}
function d_(e = {}) {
  const t = l_({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(Er(n), i);
    },
    renderShotToContext(n, i, a, l = {}) {
      return t.renderToContext(n, i, Er(a), l);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? Er(i.shot) : i == null ? void 0 : i.view;
      return f_(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: Er(n.shot) } : n;
      return u_(t, i);
    }
  };
}
function Ai(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((l) => String((l == null ? void 0 : l[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function h_(e = {}) {
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
    qualityLabel: (n.find((i) => i.value === t) || n[1]).label,
    qualityOptions: n.map((i) => ({ ...i, active: i.value === t }))
  };
}
function m_({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: l,
  hsv01ToRgb: f,
  getBrushPresetIdForTool: d,
  isActiveLassoTool: p
}) {
  var E, D;
  const y = e.primaryTool === "paint" || e.primaryTool === "mask", _ = {
    visible: y,
    activePane: y ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: i(e.customPaintColor, 1),
    colorPopOpen: y ? !!n : !1,
    pickerHueColor: i({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, (L, W) => ({ index: W, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!y) return _;
  const w = ((E = t.find((L) => a(e.paintColor, L.color))) == null ? void 0 : E.id) || "", S = !w, A = l(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((D = e.customPaintColor) == null ? void 0 : D.a) ?? 1))) * 100), R = d(e.primaryTool === "paint" ? e.paintTool : e.maskTool), V = e.brushSizes[R] ?? 10, j = p(), k = Array.from({ length: 8 }, (L, W) => e.customPaintHistory[W] || null);
  return {
    ..._,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: w,
    customColorActive: S,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...f(A.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, A.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, A.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, A.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, A.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, A.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, A.h)) * 100}%`,
    alphaValue: v,
    alphaText: `${v}%`,
    historyEntries: k.map((L, W) => ({
      index: W,
      color: L ? { cssColor: i(L, 1) } : null
    })),
    sizeValue: V,
    sizeText: String(V),
    sizeFill: `${Math.max(0, Math.min(100, (V - 1) / 119 * 100))}%`,
    sizeDisabled: j,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function p_({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function g_({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: l,
  params: f,
  notes: d,
  visibilityRows: p,
  uiSettings: y,
  normalizeCoverageValue: _
}) {
  return {
    coverage: { value: _(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !i || a === "stroke" || l.length > 1,
      label: "Copy State"
    },
    params: f,
    notes: d,
    paramsDisabled: !i,
    visibilityRows: p,
    uiSettings: t ? null : y,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function b_({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: l,
  selectedLocked: f,
  activeAspect: d,
  cutoutAspectOpen: p,
  isExternalSticker: y,
  isStickerHidden: _,
  canRestoreSelectedToInitial: w,
  iconSet: S
}) {
  if (!(a != null && a.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let A = [];
  if (n.length > 1)
    A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: l ? "Unlock" : "Lock", tip: l ? "Unlock" : "Lock", icon: l ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (i === "stroke")
    A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (e === "stickers" || i === "image") {
    if (A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back }
    ], y(t) || (A.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: S.duplicate }), A.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: S.replace_image })), y(t)) {
      const L = w(), W = _(t);
      A.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: L ? "Back to initial position" : "Already at initial position",
        icon: S.back_initial,
        disabled: !L
      }), A.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: W ? "Show" : "Hide",
        tip: W ? "Show input image" : "Hide input image",
        icon: W ? S.eye : S.eye_dashed
      });
    }
    A.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? S.lock_open : S.lock_closed }), y(t) || A.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete });
  } else
    A = [
      {
        key: "aspect",
        kind: "aspect",
        icon: S.aspect,
        open: !!p,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((L) => ({ value: L, label: L, active: d === L }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: S.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  const v = a.corners.map((L) => ({ x: Number(L == null ? void 0 : L.x), y: Number(L == null ? void 0 : L.y) })).filter((L) => Number.isFinite(L.x) && Number.isFinite(L.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const R = v.map((L) => L.x), V = v.map((L) => L.y), j = Math.min(...R), k = Math.max(...R), E = Math.min(...V), D = Math.max(...V);
  return {
    visible: !0,
    left: (j + k) * 0.5,
    top: D + 18,
    items: A,
    anchor: { minX: j, maxX: k, minY: E, maxY: D }
  };
}
const Oe = Object.freeze({
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
  pencil_tool: "pencil_tool",
  spray_can_tool: "spray_can_tool",
  highlighter_tool: "highlighter_tool",
  paintbrush_vertical_tool: "paintbrush_vertical_tool",
  eraser_tool: "eraser_tool",
  lasso_tool: "lasso_tool"
}), y_ = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, v_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: y_(t[2])
})), __ = {
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
  pencil_tool: { name: "pencil", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M13.5 6.5l4 4' />" },
  spray_can_tool: { name: "spray", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7' /><path d='M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4' /><path d='M15 7h.01' /><path d='M18 9h.01' /><path d='M18 5h.01' /><path d='M21 3h.01' /><path d='M21 7h.01' /><path d='M21 11h.01' /><path d='M10 7h1' />" },
  highlighter_tool: { name: "highlight", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M12.5 5.5l4 4' /><path d='M4.5 13.5l4 4' /><path d='M21 15v4h-8l4 -4l4 0' />" },
  paintbrush_vertical_tool: { name: "brush", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 21v-4a4 4 0 1 1 4 4h-4' /><path d='M21 3a16 16 0 0 0 -12.8 10.2' /><path d='M21 3a16 16 0 0 1 -10.2 12.8' /><path d='M10.6 9a9 9 0 0 1 4.4 4.4' />" },
  eraser_tool: { name: "eraser", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3' /><path d='M18 13.3l-6.3 -6.3' />" },
  lasso_tool: { name: "lasso", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255' /><path d='M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M5 17c0 1.42 .316 2.805 1 4' />" }
}, Ud = Object.fromEntries(
  Object.entries(__).map(([e, t]) => [e, {
    name: t.name,
    elements: v_(t.body)
  }])
), Mn = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = vt(() => {
      const i = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Ud, i) ? Ud[i] : null;
    });
    return (i, a) => n.value ? (Me(), Pe("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: st(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Me(!0), Pe(Je, null, $t(n.value.elements, (l, f) => (Me(), Pe(Je, {
        key: `${n.value.name || e.icon || "icon"}-${l.tag}-${f}`
      }, [
        l.tag === "path" ? (Me(), Pe("path", Tr({
          key: 0,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "circle" ? (Me(), Pe("circle", Tr({
          key: 1,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "rect" ? (Me(), Pe("rect", Tr({
          key: 2,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "line" ? (Me(), Pe("line", Tr({
          key: 3,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polyline" ? (Me(), Pe("polyline", Tr({
          key: 4,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polygon" ? (Me(), Pe("polygon", Tr({
          key: 5,
          ref_for: !0
        }, l.attrs), null, 16)) : Lt("", !0)
      ], 64))), 128))
    ], 2)) : Lt("", !0);
  }
}, pr = {
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
    const t = e, n = vt(() => {
      const i = { ...t.attrs };
      return t.tag === "button" && i.type == null && (i.type = t.type), t.label && (i["aria-label"] = t.label), t.tip && (i["data-tip"] = t.tip), t.pressed != null && (i["aria-pressed"] = t.pressed), i;
    });
    return (i, a) => (Me(), qi(wb(e.tag), Tr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: kh(() => [
        Ye(Mn, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, x_ = { class: "pano-floating-right" }, w_ = ["data-settled"], S_ = ["data-ready", "data-settled"], M_ = ["aria-label", "data-tip"], N_ = {
  key: 1,
  class: "pano-camera-preview-label"
}, k_ = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe(Je, null, [
      ie("div", x_, [
        (Me(!0), Pe(Je, null, $t(e.buttons, (i) => (Me(), qi(pr, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Ua(ie("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ie("div", {
          class: st(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Dt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = ie("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Me(), Pe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ye(Mn, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, M_)) : Lt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Me(), Pe("div", N_, mt(e.preview.label || "Preview unavailable"), 1)) : Lt("", !0)
        ], 14, S_)
      ], 8, w_), [
        [Ga, e.preview.visible]
      ])
    ], 64));
  }
}, P_ = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, A_ = ["y2", "transform"], C_ = ["transform"], T_ = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (a, l) => l * 15), i = vt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (a, l) => Ua((Me(), Pe("div", {
      class: st(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Me(), Pe("svg", P_, [
        l[1] || (l[1] = ie("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Me(!0), Pe(Je, null, $t(Ir(n), (f) => (Me(), Pe("line", {
          key: f,
          class: st(["pano-frame-roll-knob-tick", { zero: f === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: f % 45 === 0 ? 7 : 6,
          transform: `rotate(${f} 20 20)`
        }, null, 10, A_))), 128)),
        ie("g", { transform: i.value }, [...l[0] || (l[0] = [
          ie("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, C_),
        l[2] || (l[2] = ie("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ga, e.model.visible === !0]
    ]);
  }
}, I_ = { class: "pano-frame-aspect-control" }, D_ = { class: "pano-frame-aspect-popover" }, E_ = ["data-aspect", "disabled"], O_ = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: st(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      ie("div", I_, [
        Ye(pr, {
          icon: e.model.aspectIcon,
          label: "Aspect Ratio",
          tip: "Aspect ratio",
          pressed: e.model.aspectOpen ? "true" : "false",
          attrs: { "data-action": "frame-aspect", disabled: e.model.disabled === !0 }
        }, null, 8, ["icon", "pressed", "attrs"]),
        Ua(ie("div", D_, [
          (Me(!0), Pe(Je, null, $t(e.model.aspectChoices || [], (i) => (Me(), Pe("button", {
            key: i.value,
            class: st(["pano-btn pano-frame-aspect-choice", { active: i.active === !0 }]),
            type: "button",
            "data-action": "frame-aspect-set",
            "data-aspect": i.value,
            disabled: e.model.disabled === !0
          }, mt(i.label), 11, E_))), 128))
        ], 512), [
          [Ga, e.model.aspectOpen === !0]
        ])
      ]),
      Ye(pr, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ye(T_, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, R_ = ["aria-label"], F_ = { class: "pano-canvas-confirm-title" }, L_ = { class: "pano-canvas-confirm-text" }, $_ = { class: "pano-canvas-confirm-actions" }, z_ = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, j_ = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ rs(null), i = /* @__PURE__ */ rs(null);
    let a = null;
    function l() {
      const w = i.value;
      return w ? Array.from(w.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function f(w) {
      const S = i.value;
      if (!S) return;
      const A = S.querySelector(`[data-action='${w}']`);
      A instanceof HTMLButtonElement && A.click();
    }
    function d() {
      var R;
      const w = i.value;
      if (!w) return;
      const S = w.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const v = l()[0] || w;
      (R = v == null ? void 0 : v.focus) == null || R.call(v);
    }
    function p() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function y(w) {
      var j;
      if (w.defaultPrevented) return;
      if (w.key === "Escape") {
        w.preventDefault(), w.stopPropagation(), f("confirm-cancel");
        return;
      }
      if (w.key !== "Tab") return;
      const S = l(), A = i.value;
      if (!S.length) {
        w.preventDefault(), (j = A == null ? void 0 : A.focus) == null || j.call(A);
        return;
      }
      const v = S[0], R = S[S.length - 1], V = document.activeElement;
      if (w.shiftKey) {
        (V === v || V === A || !(A != null && A.contains(V))) && (w.preventDefault(), R.focus());
        return;
      }
      (V === R || !(A != null && A.contains(V))) && (w.preventDefault(), v.focus());
    }
    function _(w) {
      w.target === n.value && f("confirm-cancel");
    }
    return zi(() => t.model.visible, (w, S) => {
      if (w) {
        a = document.activeElement, Fc(() => {
          d();
        });
        return;
      }
      S && p();
    }, { immediate: !0 }), zc(() => {
      p();
    }), (w, S) => e.model.visible === !0 ? (Me(), Pe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: am(_, ["self"])
    }, [
      ie("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: y
      }, [
        ie("div", F_, mt(e.model.title), 1),
        ie("div", L_, mt(e.model.text), 1),
        ie("div", $_, [
          S[0] || (S[0] = ie("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ie("button", z_, mt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, R_)
    ], 512)) : Lt("", !0);
  }
}, V_ = ["data-paint-pane"], H_ = ["hidden"], U_ = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], B_ = ["aria-pressed", "disabled"], G_ = ["hidden"], K_ = { class: "pano-paint-color-pop-head" }, W_ = { class: "pano-paint-color-field" }, Y_ = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, q_ = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, X_ = { class: "pano-paint-color-field" }, J_ = { class: "pano-paint-alpha-wrap" }, Z_ = ["value"], Q_ = { "data-paint-alpha-value": "" }, ex = ["hidden"], tx = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, nx = ["data-paint-history-index", "aria-label", "disabled"], rx = ["data-paint-footer"], ix = ["data-paint-group"], ax = ["hidden"], ox = ["value", "disabled"], sx = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, lx = ["hidden"], cx = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    function t(i) {
      return { "--swatch": String((i == null ? void 0 : i.cssColor) || "") };
    }
    function n(i) {
      return i ? { "--swatch": String(i.cssColor || "") } : {};
    }
    return (i, a) => (Me(), Pe("div", {
      class: st(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Me(!0), Pe(Je, null, $t(e.panes, (l) => {
        var f;
        return Me(), Pe("div", {
          key: l.key,
          class: st(["pano-paint-pane", { "is-active": e.state.activePane === l.key }]),
          "data-paint-pane": l.key
        }, [
          l.showColorFloat ? (Me(), Pe("div", {
            key: 0,
            class: st(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Me(!0), Pe(Je, null, $t(e.paintSwatches, (d) => (Me(), Pe("button", {
              key: d.id,
              class: st(["pano-paint-color-dot", { active: e.state.activeSwatchId === d.id }]),
              type: "button",
              "data-paint-color-swatch": d.id,
              "aria-label": d.label,
              style: Dt(t(d)),
              "aria-pressed": e.state.activeSwatchId === d.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, U_))), 128)),
            ie("button", {
              class: st(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Dt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, B_),
            ie("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Dt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              ie("div", K_, [
                ie("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Dt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ie("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ie("div", W_, [
                ie("div", Y_, [
                  ie("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Dt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ie("div", q_, [
                  ie("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Dt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ie("label", X_, [
                a[1] || (a[1] = ie("span", null, "Opacity", -1)),
                ie("div", J_, [
                  ie("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Z_),
                  ie("span", Q_, mt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ie("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ie("div", tx, [
                  (Me(!0), Pe(Je, null, $t(e.state.historyEntries || [], (d) => (Me(), Pe("button", {
                    key: d.index,
                    class: st(["pano-paint-color-history-dot", { empty: !d.color }]),
                    type: "button",
                    "data-paint-history-index": d.index,
                    "aria-label": `Recent color ${d.index + 1}`,
                    disabled: !d.color,
                    style: Dt(n(d.color))
                  }, null, 14, nx))), 128))
                ])
              ], 8, ex)
            ], 12, G_)
          ], 10, H_)) : Lt("", !0),
          ie("div", {
            class: "pano-paint-footer",
            "data-paint-footer": l.footer
          }, [
            ie("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": l.group
            }, [
              (Me(!0), Pe(Je, null, $t(l.tools, (d) => {
                var p;
                return Me(), qi(pr, {
                  key: `${l.key}-${d.key}`,
                  icon: d.icon,
                  label: d.label,
                  tip: d.tip,
                  "extra-class": { active: ((p = e.state.activeTools) == null ? void 0 : p[l.key]) === d.key },
                  attrs: { [d.attr]: d.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, ix),
            ie("div", {
              class: st(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ie("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Dt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, ox),
              ie("span", sx, mt(e.state.sizeText || "10"), 1)
            ], 10, ax),
            ie("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((f = e.state.clearVisible) == null ? void 0 : f[l.key]) ?? !l.clearHidden)
            }, [
              Ye(pr, {
                icon: Ir(Oe).clear,
                label: l.clearLabel,
                tip: l.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": l.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, lx)
          ], 8, rx)
        ], 10, V_);
      }), 128))
    ], 2));
  }
}, ux = {
  key: 0,
  class: "pano-cutout-menu"
}, fx = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, dx = ["data-aspect"], hx = ["data-action", "aria-label", "data-tip", "disabled"], mx = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Dt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Me(!0), Pe(Je, null, $t(e.model.items || [], (i) => (Me(), Pe(Je, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Me(), Pe("div", ux, [
          ie("button", fx, [
            Ye(Mn, {
              icon: i.icon
            }, null, 8, ["icon"])
          ]),
          ie("div", {
            class: st(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Me(!0), Pe(Je, null, $t(i.choices || [], (a) => (Me(), Pe("button", {
              key: a.value,
              class: st(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, mt(a.label), 11, dx))), 128))
          ], 2)
        ])) : (Me(), Pe("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0
        }, [
          Ye(Mn, {
            icon: i.icon
          }, null, 8, ["icon"])
        ], 8, hx))
      ], 64))), 128))
    ], 4));
  }
}, px = {
  class: "pano-side",
  "data-side": ""
}, gx = { class: "pano-side-head" }, bx = { class: "pano-side-title" }, yx = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, vx = {
  key: 0,
  class: "pano-side-scroll"
}, _x = { class: "pano-inspector" }, xx = { class: "pano-ui-row pano-coverage-row" }, wx = ["data-selected"], Sx = ["aria-pressed", "disabled"], Mx = ["aria-pressed", "disabled"], Nx = {
  key: 0,
  class: "pano-section-title"
}, kx = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Px = {
  class: "pano-picker",
  "data-picker": "selection"
}, Ax = ["disabled"], Cx = { class: "pano-picker-label" }, Tx = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Ix = ["hidden"], Dx = ["data-selection-id"], Ex = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Ox = {
  key: 2,
  class: "pano-state-actions"
}, Rx = ["disabled"], Fx = ["data-key"], Lx = ["min", "max", "step", "value", "disabled", "data-param-key"], $x = ["min", "max", "step", "value", "disabled", "data-param-key"], zx = { class: "pano-visibility-section" }, jx = { class: "pano-visibility-stack" }, Vx = ["data-visibility-row"], Hx = { class: "pano-visibility-name" }, Ux = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, Bx = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], Gx = ["open"], Kx = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, Wx = { class: "pano-ui-settings-body" }, Yx = { class: "pano-ui-row" }, qx = ["data-selected"], Xx = ["aria-pressed"], Jx = ["aria-pressed"], Zx = { class: "pano-ui-row" }, Qx = ["data-selected"], ew = ["aria-pressed"], tw = ["aria-pressed"], nw = { class: "pano-ui-row" }, rw = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, iw = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, aw = { class: "pano-picker-label" }, ow = ["hidden"], sw = ["data-quality"], lw = {
  key: 1,
  class: "pano-side-footer"
}, cw = ["data-action"], uw = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = vt(() => {
      const l = t.model;
      return !l || typeof l != "object" ? !1 : Object.keys(l).length > 0 && !!l.coverage;
    });
    function i(l) {
      return { "--v": `${Number((l == null ? void 0 : l.fillPct) || 0)}%` };
    }
    function a(l, f) {
      return (f == null ? void 0 : f.paramsDisabled) === !0 || (l == null ? void 0 : l.enabled) === !1;
    }
    return (l, f) => {
      var d, p, y, _, w;
      return Me(), Pe("div", px, [
        ie("div", gx, [
          ie("div", bx, [
            ie("span", yx, [
              Ye(Mn, {
                icon: Ir(Oe).globe
              }, null, 8, ["icon"])
            ]),
            ie("span", null, mt(e.nodeTitle), 1)
          ]),
          f[0] || (f[0] = ie("div", { class: "pano-side-actions" }, null, -1))
        ]),
        f[13] || (f[13] = ie("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Me(), Pe("div", vx, [
          ie("div", _x, [
            f[12] || (f[12] = ie("div", { class: "pano-section-title" }, [
              ie("span", null, "Scene")
            ], -1)),
            ie("div", xx, [
              f[1] || (f[1] = ie("label", null, "Coverage", -1)),
              ie("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((d = e.model.coverage) == null ? void 0 : d.value) === 180 ? "1" : "0"
              }, [
                ie("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((p = e.model.coverage) == null ? void 0 : p.value) === 360 ? "true" : "false",
                  disabled: ((y = e.model.coverage) == null ? void 0 : y.disabled) === !0
                }, "360", 8, Sx),
                ie("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((w = e.model.coverage) == null ? void 0 : w.disabled) === !0
                }, "180", 8, Mx)
              ], 8, wx)
            ]),
            e.model.transformTitle !== !1 ? (Me(), Pe("div", Nx, [...f[2] || (f[2] = [
              ie("span", null, "Transform", -1)
            ])])) : Lt("", !0),
            e.model.selectionPicker ? (Me(), Pe("div", kx, [
              ie("label", null, mt(e.model.selectionPicker.label), 1),
              ie("div", Px, [
                ie("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ie("span", Cx, [
                    e.model.selectionPicker.currentIcon ? (Me(), Pe("span", Tx, [
                      Ye(Mn, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Lt("", !0),
                    ie("span", null, mt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  f[3] || (f[3] = ie("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Ax),
                ie("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Me(!0), Pe(Je, null, $t(e.model.selectionPicker.items || [], (S) => (Me(), Pe("button", {
                    key: S.id,
                    type: "button",
                    class: st(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Me(), Pe("span", Ex, [
                      Ye(Mn, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Lt("", !0),
                    ie("span", null, mt(S.label), 1)
                  ], 10, Dx))), 128))
                ], 8, Ix)
              ])
            ])) : Lt("", !0),
            e.model.copyStateButton ? (Me(), Pe("div", Ox, [
              ie("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ye(Mn, {
                  icon: Ir(Oe).copy
                }, null, 8, ["icon"]),
                ie("span", null, mt(e.model.copyStateButton.label), 1)
              ], 8, Rx)
            ])) : Lt("", !0),
            ie("div", {
              class: st(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Me(!0), Pe(Je, { key: 0 }, $t(e.model.notes, (S) => (Me(), Pe("div", {
                key: S,
                class: "pano-param-note"
              }, mt(S), 1))), 128)) : (Me(!0), Pe(Je, { key: 1 }, $t(e.model.params || [], (S) => (Me(), Pe("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                ie("label", null, mt(S.label), 1),
                ie("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: a(S, e.model),
                  style: Dt(i(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, Lx),
                ie("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: a(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, $x)
              ], 8, Fx))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Me(), Pe(Je, { key: 3 }, [
              f[5] || (f[5] = ie("div", { class: "pano-divider" }, null, -1)),
              ie("div", zx, [
                f[4] || (f[4] = ie("div", { class: "pano-section-title" }, [
                  ie("span", null, "Layers")
                ], -1)),
                ie("div", jx, [
                  (Me(!0), Pe(Je, null, $t(e.model.visibilityRows, (S) => (Me(), Pe("div", {
                    key: S.key,
                    class: st(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    ie("span", Hx, [
                      ie("span", Ux, [
                        Ye(Mn, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      ie("span", null, mt(S.label), 1)
                    ]),
                    ie("button", {
                      class: st(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      Ye(Mn, {
                        icon: S.visible === !0 ? Ir(Oe).eye : Ir(Oe).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, Bx)
                  ], 10, Vx))), 128))
                ])
              ])
            ], 64)) : Lt("", !0),
            e.model.uiSettings ? (Me(), Pe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ie("summary", null, [
                f[6] || (f[6] = ie("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ie("span", Kx, [
                  Ye(Mn, {
                    icon: Ir(Oe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ie("div", Wx, [
                ie("div", Yx, [
                  f[7] || (f[7] = ie("label", null, "Drag X", -1)),
                  ie("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, Xx),
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, Jx)
                  ], 8, qx)
                ]),
                ie("div", Zx, [
                  f[8] || (f[8] = ie("label", null, "Drag Y", -1)),
                  ie("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, ew),
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, tw)
                  ], 8, Qx)
                ]),
                ie("div", nw, [
                  f[10] || (f[10] = ie("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ie("div", rw, [
                    ie("button", iw, [
                      ie("span", aw, mt(e.model.uiSettings.qualityLabel), 1),
                      f[9] || (f[9] = ie("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    ie("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Me(!0), Pe(Je, null, $t(e.model.uiSettings.qualityOptions || [], (S) => (Me(), Pe("button", {
                        key: S.value,
                        type: "button",
                        class: st(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, mt(S.label), 11, sw))), 128))
                    ], 8, ow)
                  ])
                ]),
                f[11] || (f[11] = ie("div", { class: "pano-ui-row" }, [
                  ie("span"),
                  ie("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, Gx)) : Lt("", !0)
          ])
        ])) : Lt("", !0),
        (e.model.footerButtons || []).length ? (Me(), Pe("div", lw, [
          (Me(!0), Pe(Je, null, $t(e.model.footerButtons, (S) => (Me(), Pe("button", {
            key: S.action,
            class: st(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, mt(S.label), 11, cw))), 128))
        ])) : Lt("", !0)
      ]);
    };
  }
}, fw = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: st(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Dt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, mt(e.model.text || ""), 7));
  }
}, dw = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, hw = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", dw, [
      (Me(!0), Pe(Je, null, $t(e.buttons, (i) => Ua((Me(), qi(pr, {
        key: i.key,
        "extra-class": {
          active: i.active,
          "pano-btn-icon-accent": i.accent
        },
        icon: i.icon,
        label: i.label,
        tip: i.tip,
        pressed: i.pressed,
        attrs: { [i.attr]: i.value, disabled: i.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [Ga, i.visible !== !1]
      ])), 128))
    ]));
  }
}, mw = ["data-video-ready"], pw = { class: "pano-video-transport-shell" }, gw = { class: "pano-video-controls-left" }, bw = { class: "pano-video-filmstrip" }, yw = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, vw = ["src", "onLoad"], _w = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, xw = ["max", "value", "disabled"], ww = { class: "pano-video-controls-right" }, Sw = ["data-has-audio"], Mw = { class: "pano-video-volume-pop" }, Nw = ["value", "disabled"], kw = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.playing) === !0 ? "Pause" : "Play";
    }), i = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.playing) === !0 ? "Pause video" : "Play video";
    }), a = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.playing) === !0 ? Oe.pause : Oe.play;
    }), l = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.loop) === !1 ? "Enable loop" : "Disable loop";
    }), f = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), d = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.loop) === !1 ? Oe.loop_off : Oe.loop;
    }), p = vt(() => {
      var L, W;
      return ((L = t.state) == null ? void 0 : L.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), y = vt(() => {
      var L, W, F;
      return ((L = t.state) == null ? void 0 : L.hasAudio) !== !0 ? Oe.volume : ((W = t.state) == null ? void 0 : W.muted) === !0 || Number(((F = t.state) == null ? void 0 : F.volume) ?? 1) <= 0 ? Oe.volume_muted : Oe.volume2;
    }), _ = vt(() => {
      var L;
      return Math.max(0, Math.min(100, Number(((L = t.state) == null ? void 0 : L.progressPct) || 0)));
    }), w = vt(() => ({ left: `${_.value}%` })), S = vt(() => {
      var J, ce;
      const L = (J = t.state) == null ? void 0 : J.volumePct, W = Number(((ce = t.state) == null ? void 0 : ce.volume) ?? 1) * 100, F = Number(L ?? W ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, F))}%`
      };
    }), A = vt(() => {
      var F, J;
      const W = [
        String(((F = t.state) == null ? void 0 : F.currentTimeLabel) || "0:00"),
        String(((J = t.state) == null ? void 0 : J.durationLabel) || "0:00")
      ].reduce((ce, U) => Math.max(ce, U.length), 4);
      return `${Math.max(4, W)}ch`;
    }), v = vt(() => ({ "--pano-video-time-ch": A.value })), R = vt(() => {
      var F, J;
      const L = Array.isArray((F = t.state) == null ? void 0 : F.thumbnails) ? t.state.thumbnails : [];
      if (L.length) return L;
      const W = Math.max(7, Number(((J = t.state) == null ? void 0 : J.thumbnailCount) || 9));
      return Array.from({ length: W }, (ce, U) => ({
        id: `placeholder-${U}`,
        src: "",
        label: ""
      }));
    }), V = /* @__PURE__ */ rs(/* @__PURE__ */ new Set()), j = (L) => String((L == null ? void 0 : L.id) || (L == null ? void 0 : L.src) || (L == null ? void 0 : L.label) || ""), k = (L) => V.value.has(j(L)), E = (L) => {
      const W = new Set(V.value);
      W.add(j(L)), V.value = W;
    };
    zi(R, (L) => {
      const W = new Set(L.map(j)), F = /* @__PURE__ */ new Set();
      for (const J of V.value)
        W.has(J) && F.add(J);
      V.value = F;
    }, { immediate: !0 });
    const D = vt(() => {
      var L;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((L = t.state) == null ? void 0 : L.shellMaxWidthPx) || 640))}px`
      };
    });
    return (L, W) => (Me(), Pe("div", {
      class: st(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Dt(D.value)
    }, [
      W[1] || (W[1] = ie("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ie("div", pw, [
        ie("div", gw, [
          Ye(pr, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: a.value,
            label: n.value,
            tip: i.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ie("div", {
            class: "pano-video-time pano-video-time-start",
            style: Dt(v.value)
          }, mt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ie("div", bw, [
          ie("div", yw, [
            (Me(!0), Pe(Je, null, $t(R.value, (F) => (Me(), Pe("div", {
              key: j(F),
              class: st(["pano-video-thumb", {
                "is-placeholder": !F.src,
                "is-loaded": F.src && k(F)
              }])
            }, [
              F.src ? (Me(), Pe("img", {
                key: 0,
                src: F.src,
                alt: "",
                draggable: "false",
                onLoad: (J) => E(F)
              }, null, 40, vw)) : (Me(), Pe("span", _w))
            ], 2))), 128))
          ]),
          ie("div", {
            class: "pano-video-playhead",
            style: Dt(w.value),
            "aria-hidden": "true"
          }, [...W[0] || (W[0] = [
            ie("span", { class: "pano-video-playhead-line" }, null, -1),
            ie("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ie("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, xw)
        ]),
        ie("div", ww, [
          ie("div", {
            class: "pano-video-time pano-video-time-end",
            style: Dt(v.value)
          }, mt(e.state.durationLabel || "0:00"), 5),
          Ye(pr, {
            "extra-class": "pano-video-control",
            icon: d.value,
            label: l.value,
            tip: f.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          ie("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ie("div", Mw, [
              ie("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Dt(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, Nw)
            ]),
            Ye(pr, {
              "extra-class": "pano-video-control",
              icon: y.value,
              label: p.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, Sw)
        ])
      ])
    ], 14, mw));
  }
}, Pw = { class: "pano-floating-top" }, Aw = ["data-selected", "data-view-count"], Cw = ["data-view", "aria-pressed", "aria-label", "disabled"], Tw = { class: "label" }, Iw = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Me(), Pe("div", Pw, [
        ie("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Me(!0), Pe(Je, null, $t(e.buttons, (a) => Ua((Me(), Pe("button", {
            key: a.key,
            class: st(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            Ye(Mn, {
              icon: a.icon
            }, null, 8, ["icon"]),
            ie("span", Tw, mt(a.label), 1)
          ], 10, Cw)), [
            [Ga, a.visible !== !1]
          ])), 128))
        ], 8, Aw)
      ]);
    };
  }
};
function Om(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Oe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Oe.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Oe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Oe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Oe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Oe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Oe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Oe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Oe.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Oe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Oe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Oe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Oe.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Oe.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Oe.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Oe.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Oe.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Oe.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Oe.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Oe.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Oe.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Oe.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Oe.lasso_tool }
        ]
      }
    ]
  };
}
const Dw = ["aria-label"], Ew = { class: "pano-stage-wrap" }, Ow = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, Rw = {
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
    const n = e, i = t;
    let a = "", l = !1, f = null;
    const d = /* @__PURE__ */ rs(null), p = vt(() => n.readOnly === !0), y = vt(() => n.shellPreset || Om(n.type)), _ = vt(() => {
      var D, L, W;
      const E = String((((D = n.uiState) == null ? void 0 : D.stageStatus) === "failed" ? (L = n.uiState) == null ? void 0 : L.stageStatusDetail : (W = n.uiState) == null ? void 0 : W.stageWarningDetail) ?? "");
      return E === "background" ? "Background preview unavailable. Re-run the node to refresh it." : E === "stickers" ? "One or more sticker previews are unavailable." : E === "frame" ? "The editor hit a rendering error. Check the browser console for details." : E.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), w = vt(() => {
      var D;
      const E = Array.isArray((D = y.value) == null ? void 0 : D.floatingButtons) ? y.value.floatingButtons.slice() : [];
      return p.value && E.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Oe.fullscreen
      }), E;
    });
    function S() {
      const E = d.value;
      return E ? Array.from(E.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((D) => D instanceof HTMLElement ? !D.hidden && D.tabIndex >= 0 && D.offsetParent !== null : !1) : [];
    }
    function A() {
      var L;
      const D = S()[0] || d.value;
      (L = D == null ? void 0 : D.focus) == null || L.call(D);
    }
    function v() {
      var E;
      f != null && f.isConnected && ((E = f.focus) == null || E.call(f)), f = null;
    }
    function R(E) {
      var D, L, W, F;
      if (!E.defaultPrevented) {
        if (E.key === "Tab") {
          const J = S();
          if (!J.length) {
            E.preventDefault(), (L = (D = d.value) == null ? void 0 : D.focus) == null || L.call(D);
            return;
          }
          const ce = J[0], U = J[J.length - 1], ve = document.activeElement;
          if (E.shiftKey) {
            (ve === ce || ve === d.value || !((W = d.value) != null && W.contains(ve))) && (E.preventDefault(), U.focus());
            return;
          }
          (ve === U || !((F = d.value) != null && F.contains(ve))) && (E.preventDefault(), ce.focus());
          return;
        }
        E.key === "Escape" && i("close");
      }
    }
    function V() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function j() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function k(E) {
      document.removeEventListener("keydown", R), E ? (f || (f = document.activeElement), V(), document.addEventListener("keydown", R), Fc(() => {
        A();
      })) : (j(), v());
    }
    return Dh(() => {
      k(n.open);
    }), zc(() => {
      j(), document.removeEventListener("keydown", R), v();
    }), zi(() => n.open, (E) => {
      k(E);
    }), (E, D) => e.open ? (Me(), Pe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: D[0] || (D[0] = am((L) => i("close"), ["self"]))
    }, [
      ie("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ie("div", Ew, [
          D[1] || (D[1] = ie("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          D[2] || (D[2] = ie("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          D[3] || (D[3] = ie("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Me(), Pe("div", Ow, mt(_.value), 1)) : Lt("", !0),
          D[4] || (D[4] = ie("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            ie("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          p.value ? Lt("", !0) : (Me(), Pe(Je, { key: 1 }, [
            Ye(hw, {
              buttons: e.uiState.toolButtons || y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Ye(O_, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            Ye(cx, {
              "paint-swatches": e.paintSwatches,
              panes: y.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Ye(kw, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          Ye(Iw, {
            buttons: e.uiState.viewButtons || y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Ye(k_, {
            buttons: e.uiState.floatingButtons || w.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Ye(mx, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Ye(fw, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Ye(j_, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Lt("", !0) : (Me(), qi(uw, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, Dw)
    ])) : Lt("", !0);
  }
}, Kn = "loading", Yi = "ready", Yn = "failed";
function $a(e, t = "") {
  return e && (e.__panoLoadState = Kn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function za(e, t = "") {
  return e && (e.__panoLoadState = Yi, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function oi(e, t = "") {
  return e && (e.__panoLoadState = Yn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Sc(e, t) {
  return e ? e.__panoLoadState === Yn ? Yn : typeof t == "function" && t(e) ? Yi : Kn : Yi;
}
function Kl(e) {
  return Sc(e) === Yn;
}
function Fw({ presented: e, background: t = Yi, stickers: n = [] } = {}) {
  if (!e) return { status: Kn, detail: "boot" };
  const i = Array.isArray(n) ? n : [], a = t === Kn, l = i.includes(Kn);
  if (a && l) return { status: Kn, detail: "mixed" };
  if (a) return { status: Kn, detail: "background" };
  if (l) return { status: Kn, detail: "stickers" };
  const f = t === Yn, d = i.includes(Yn);
  return f && d ? { status: Yn, detail: "mixed" } : f ? { status: Yn, detail: "background" } : d ? { status: Yn, detail: "stickers" } : { status: Yi, detail: "" };
}
const xs = "state_json", Wr = "sticker_image_1", Wl = "external_image", Yl = "pano_sticker_input_images", es = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Ft = Math.PI / 180, Sn = 180 / Math.PI, ql = 1, Lw = "rgb(255, 221, 87)", $w = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, zw = 64, Bd = 40, Xl = 16, jw = 0.45, Gd = 180, Vw = 160, ws = 24, Hw = 4, Uw = 4, Eo = /* @__PURE__ */ new Map(), Kd = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Dr = /* @__PURE__ */ new Map(), Bw = 12;
function Ro(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Gw(e) {
  return 1 - Math.pow(1 - e, 3);
}
function Kw(e, t, n) {
  const i = G((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return i * i * (3 - 2 * i);
}
function Ww(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Dr.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Dr.delete(t), Dr.set(t, n), n);
}
function Yw(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (Dr.delete(n), Dr.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Dr.size > Bw; ) {
      const a = Dr.keys().next().value;
      if (!a) break;
      Dr.delete(a);
    }
}
function qw(e) {
  return e * e * e;
}
function qn(e, t, n) {
  return { x: e, y: t, z: n };
}
function Fo(e, t) {
  return qn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Lo(e, t) {
  return qn(e.x * t, e.y * t, e.z * t);
}
function On(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function $o(e, t) {
  return qn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Ci(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return qn(e.x / t, e.y / t, e.z / t);
}
function jn(e, t) {
  const n = e * Ft, i = t * Ft, a = Math.cos(i);
  return qn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function zo(e) {
  return {
    yaw: Vt(Math.atan2(e.x, e.z) * Sn),
    pitch: G(Math.asin(G(e.y, -1, 1)) * Sn, -90, 90)
  };
}
function lr(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i].x, f = t[i].y, d = t[a].x, p = t[a].y;
    f > e.y != p > e.y && e.x < (d - l) * (e.y - f) / (p - f || 1e-6) + l && (n = !n);
  }
  return n;
}
function Ar(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function Jl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), l = Number(e.x || 0) - Number(t.x || 0), f = Number(e.y || 0) - Number(t.y || 0), d = i * i + a * a;
  if (d <= 1e-6) return Ar(e, t);
  const p = G((l * i + f * a) / d, 0, 1), y = Number(t.x || 0) + i * p, _ = Number(t.y || 0) + a * p, w = Number(e.x || 0) - y, S = Number(e.y || 0) - _;
  return w * w + S * S;
}
function wn(e, t, n) {
  return e + (t - e) * n;
}
function Vn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${G(n, 0, 1)})`;
}
function Xw(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let jo = { fillStyle: "", url: "" };
function Jw(e, t, n) {
  if (jo.url && jo.fillStyle === String(e || ""))
    return jo.url;
  const i = Xw(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ws}" height="${ws}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return jo = { fillStyle: String(e || ""), url: i }, i;
}
function ts(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function bn(e) {
  return {
    r: G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: G(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Jt(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function Zw(e) {
  return es.some((t) => ts(e, t.color));
}
function Zl(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = G(Number(t), 0, 1), l = G(Number(n), 0, 1);
  if (a <= 1e-6) return { r: l, g: l, b: l };
  const f = Math.floor(i * 6), d = i * 6 - f, p = l * (1 - a), y = l * (1 - d * a), _ = l * (1 - (1 - d) * a);
  switch (f % 6) {
    case 0:
      return { r: l, g: _, b: p };
    case 1:
      return { r: y, g: l, b: p };
    case 2:
      return { r: p, g: l, b: _ };
    case 3:
      return { r: p, g: y, b: l };
    case 4:
      return { r: _, g: p, b: l };
    default:
      return { r: l, g: p, b: y };
  }
}
function Ql(e) {
  const t = G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), l = Math.min(t, n, i), f = a - l;
  let d = 0;
  f > 1e-6 && (a === t ? d = ((n - i) / f + (n < i ? 6 : 0)) / 6 : a === n ? d = ((i - t) / f + 2) / 6 : d = ((t - n) / f + 4) / 6);
  const p = a <= 1e-6 ? 0 : f / a;
  return { h: d, s: p, v: a };
}
function ma(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
let Vo = null;
function Qw() {
  return Vo || (Vo = new Promise((e) => {
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
  }), Vo);
}
const Rm = "pano_suite.ui_settings.v1", Fm = "pano_suite.node_grid_visibility.v1";
let Oi = null, Hn = null;
function ns(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function eS() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Rm)) || "").trim();
    if (!t) return Oi ? ns(Oi) : null;
    const n = JSON.parse(t), i = ns(n);
    return Oi = i, i;
  } catch {
    return Oi ? ns(Oi) : null;
  }
}
function tS(e) {
  var n;
  const t = ns(e);
  Oi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Rm, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Lm() {
  var e;
  if (Hn && typeof Hn == "object")
    return Hn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Fm)) || "").trim();
    if (!t)
      return Hn = {}, Hn;
    const n = JSON.parse(t);
    return Hn = n && typeof n == "object" ? n : {}, Hn;
  } catch {
    return Hn = {}, Hn;
  }
}
function nS(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Lm()[n];
  return typeof a == "boolean" ? a : !!t;
}
function rS(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = Lm();
  i[n] = !!t, Hn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Fm, JSON.stringify(i));
  } catch {
  }
}
function iS(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Wd(e) {
  const { paintCount: t, maskCount: n } = iS(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, l = 0;
  return i.forEach((f) => {
    String((f == null ? void 0 : f.layerKind) || "paint") === "mask" ? l += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: l,
    totalPaintCount: t + a,
    totalMaskCount: n + l
  };
}
function Ti(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Nn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Zc(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = Nn(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var l, f, d, p, y, _, w, S, A, v;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || f.call(l), (p = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || p.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (w = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || w.call(_, !0, !0), (v = (A = (S = yn) == null ? void 0 : S.canvas) == null ? void 0 : A.setDirty) == null || v.call(A, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function aS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Yd(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function oS(e) {
  var A, v, R, V, j;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = Nn(e, "coverage"), n = Nn(e, "bg_color"), i = Nn(e, xs), a = Nn(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const l = String(t.value ?? "").trim(), f = String(n.value ?? "").trim(), d = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(l) && aS(l) && (Yd(f) || f === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (Yd(f))
    try {
      const k = JSON.parse(f);
      y = String(Kt(k == null ? void 0 : k.coverage));
    } catch {
      y = "360";
    }
  const _ = l, w = f, S = d;
  t.value = y, (A = t.callback) == null || A.call(t, y), n.value = _, (v = n.callback) == null || v.call(n, _), i.value = w, (R = i.callback) == null || R.call(i, w), a && (a.value = S, (V = a.callback) == null || V.call(a, S)), (j = e.setDirtyCanvas) == null || j.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function sS(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), i = {
    PanoramaStickers: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return i[n] ? i[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function lS(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var l, f;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (l = i.element) != null && l.style && (i.element.style.display = "none"), (f = i.parentEl) != null && f.style && (i.parentEl.style.display = "none")));
  });
}
function Mc(e, t, n) {
  var l, f;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((d) => String((d == null ? void 0 : d.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (l = a.element) != null && l.style && (a.element.style.display = ""), (f = a.parentEl) != null && f.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var d;
    return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function Ho(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function cS(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function uS(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function fS(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
function $m(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function dS(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function zm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function hS(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const f = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = f ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(f.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = dS(e == null ? void 0 : e.graph, n)), i;
}
function ja(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = on) == null ? void 0 : a.apiURL) == "function" ? on.apiURL(i) : i;
}
function mS(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function pS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function gS(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function jm(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (mS(t)) return [t];
  const { filename: n, subfolder: i } = pS(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => ja({
    filename: n,
    subfolder: i,
    type: l
  }));
  return gS([...a, t]);
}
function bS(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? ja({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Aa(e) {
  var i;
  const t = (i = yn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function si(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return si(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return ja({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = si(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : ja(e);
}
function yS(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const i = [];
  for (const l of n)
    !Array.isArray(l) || !l.length || (t >= 0 && t < l.length && i.push(l[t]), i.push(...l));
  return i;
}
function ec(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e || []) {
    const a = si(i);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function qd(e, t, n, i = null) {
  var w;
  const a = Aa(e == null ? void 0 : e.id), l = Array.isArray((w = a == null ? void 0 : a.ui) == null ? void 0 : w[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], f = Array.isArray(l) && l.length ? l[0] : null, d = si(f);
  if (!d) return null;
  const p = `__ui__${t}`, y = n.get(p);
  if (y && y.__panoSrc === d) return y;
  const _ = new Image();
  return _.__panoSrc = d, $a(_, d), _.onload = () => {
    za(_, d), typeof i == "function" && i(_);
  }, _.onerror = () => {
    oi(_, d), typeof i == "function" && i(_);
  }, _.src = d, n.set(p, _), _;
}
function vS(e, t) {
  var k, E;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((D) => String((D == null ? void 0 : D.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const l = i[a], f = l == null ? void 0 : l.link;
  if (f == null) return { src: "", sourceType: "", inputName: n };
  const d = $m(e.graph, f), { originId: p, originSlot: y } = zm(d);
  if (p == null) return { src: "", sourceType: "", inputName: n };
  const _ = hS(e, a, p), w = Number(y || 0);
  if (!_) return { src: "", sourceType: "", inputName: n };
  let S = [];
  try {
    S = typeof ((k = yn) == null ? void 0 : k.getNodeImageUrls) == "function" ? yn.getNodeImageUrls(_) || [] : [];
  } catch {
    S = [];
  }
  if (Array.isArray(S) && S.length) {
    const D = [];
    w >= 0 && w < S.length && D.push(S[w]), D.push(...S);
    const L = ec(D);
    if (L.length) return { src: L[0], srcCandidates: L, sourceType: "appNodeImageUrls", inputName: n };
  }
  const A = Aa((_ == null ? void 0 : _.id) ?? p), v = yS(A, w), R = ec(v);
  if (R.length) return { src: R[0], srcCandidates: R, sourceType: "nodeOutputs", inputName: n };
  const V = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
  if (V.length) {
    const D = [];
    w >= 0 && w < V.length && D.push(V[w]), D.push(...V);
    const L = ec(D);
    if (L.length) return { src: L[0], srcCandidates: L, sourceType: "nodeImgs", inputName: n };
  }
  const j = (E = _ == null ? void 0 : _.widgets) == null ? void 0 : E.find((D) => String((D == null ? void 0 : D.name) || "").toLowerCase() === "image");
  if (j) {
    let D = si(j.value);
    if (D && !D.includes("/") && !D.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (D = on.apiURL(`/view?filename=${encodeURIComponent(D)}&type=input&subfolder=`)), D) return { src: D, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function _S(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const l = jm(a);
  if (!l.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = String(t || "image"), d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === a && d.img) return d.img;
  const p = new Image();
  $a(p, a);
  const y = { srcRaw: a, resolvedSrc: "", img: p };
  e.__panoLinkedInputImageCache.set(f, y);
  let _ = -1;
  const w = () => {
    var A;
    if (_ += 1, _ >= l.length) {
      oi(p, a), i == null || i(), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0);
      return;
    }
    const S = l[_];
    y.resolvedSrc = S, p.src = S;
  };
  return p.onload = () => {
    var S;
    za(p, a), i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, p.onerror = () => {
    var S;
    if (_ + 1 < l.length) {
      w();
      return;
    }
    oi(p, a), i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, w(), p;
}
function xS(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((v) => String(v || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const l = String(t || "image"), f = a.join(`
`), d = e.__panoLinkedInputImageCache.get(l);
  if (d && d.srcRaw === f && d.img) return d.img;
  const p = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((v) => {
    jm(v).forEach((R) => {
      const V = String(R || "").trim();
      !V || y.has(V) || (y.add(V), p.push(V));
    });
  }), !p.length) return null;
  const _ = new Image();
  $a(_, f);
  const w = { srcRaw: f, resolvedSrc: "", img: _ };
  e.__panoLinkedInputImageCache.set(l, w);
  let S = -1;
  const A = () => {
    var R;
    if (S += 1, S >= p.length) {
      oi(_, f), i == null || i(), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0);
      return;
    }
    const v = p[S];
    w.resolvedSrc = v, _.src = v;
  };
  return _.onload = () => {
    var v;
    za(_, f), i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, _.onerror = () => {
    var v;
    if (S + 1 < p.length) {
      A();
      return;
    }
    oi(_, f), i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, A(), _;
}
function Vm(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = vS(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Uo(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], l = Vm(e, a), f = String(i || a.join("|") || "image_exact"), d = Array.isArray(l == null ? void 0 : l.srcCandidates) ? l.srcCandidates : [];
  if (d.length) return xS(e, f, d, n);
  const p = String((l == null ? void 0 : l.src) || "").trim();
  return p ? _S(e, f, p, n) : null;
}
async function Ca(e, t, n = {}) {
  var bo, Sf;
  try {
    (Sf = (bo = e.__panoLinkedInputImageCache) == null ? void 0 : bo.forEach) == null || Sf.call(bo, (r, o, s) => {
      r != null && r.img && Kl(r.img) && s.delete(o);
    });
  } catch {
  }
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, l = i, f = sS(e, t);
  await Qw();
  const d = Nn(e, "output_preset"), p = Nn(e, "coverage"), y = Nn(e, "bg_color"), _ = Nn(e, xs), w = () => {
    const r = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Uo(
      e,
      r,
      () => fe(),
      `background:size:${r.join("|")}`
    );
  }, S = () => {
    const r = w();
    return fS(r);
  }, A = (r = 2048) => {
    const o = d == null ? void 0 : d.value;
    return uS(o) ? S() || Math.max(1, Math.round(Number(r || 2048))) : cS(o, r);
  }, v = a_(String((_ == null ? void 0 : _.value) || ""), {
    outputPreset: A(2048),
    backgroundColor: String((y == null ? void 0 : y.value) || "#00ff00"),
    coverage: Kt(p == null ? void 0 : p.value),
    sharedUiSettings: eS()
  });
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const R = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(v.shots) ? v.shots : [], o = String(((s = v == null ? void 0 : v.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((c) => String((c == null ? void 0 : c.id) || "") === o) || r[0] || null;
  })() : null, V = R ? Ru(R, !1) : { width: 220, height: 132 }, j = Om(t), k = /* @__PURE__ */ Cs({
    stageStatus: Kn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (j.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (j.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(j.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...l ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Oe.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: i,
      aspectOpen: !1,
      aspectIcon: Oe.aspect,
      rotateIcon: Oe.rotate_90,
      aspectChoices: [],
      rollKnob: null
    },
    frameRollKnob: {
      visible: !1,
      disabled: i,
      rollDeg: 0,
      displayValue: "0",
      dragging: !1,
      armed: !1
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: Oe.fullscreen,
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
      customColorCss: Vn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Vn({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (r, o) => ({ index: o, color: null })),
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
      mode: "playback",
      hasAudio: !1,
      muted: !1,
      volume: 1,
      volumePct: 100,
      thumbnails: [],
      thumbnailCount: 9,
      shellMaxWidthPx: 640
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
      width: V.width,
      height: V.height,
      label: R ? "Loading preview" : "Add Frame to preview"
    }
  }), E = document.createElement("div");
  document.body.appendChild(E);
  const D = Ry(Rw, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: f,
    shellPreset: j,
    paintSwatches: es.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: Vn(r.color, 1)
    })),
    uiState: k,
    onClose: () => {
      Mi();
    }
  });
  try {
    D.mount(E);
  } catch (r) {
    try {
      D.unmount();
    } catch {
    }
    throw E.remove(), r;
  }
  const L = E.querySelector(".pano-modal-overlay"), W = E.querySelector(".pano-modal"), F = W == null ? void 0 : W.querySelector("[data-stage-overlay]"), J = W == null ? void 0 : W.querySelector("[data-stage-background]"), ce = W == null ? void 0 : W.querySelector(".pano-stage-wrap");
  if (!L || !W || !F || !J || !ce)
    throw D.unmount(), E.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const U = document.createElement("div");
  U.setAttribute("aria-hidden", "true"), U.style.position = "absolute", U.style.left = "0", U.style.top = "0", U.style.pointerEvents = "none", U.style.zIndex = "12", U.style.display = "none", U.style.willChange = "transform,width,height,background,border-radius", ce == null || ce.appendChild(U);
  const ve = document.createElement("div");
  ve.className = "pano-paint-size-preview", ve.setAttribute("aria-hidden", "true");
  const xe = document.createElement("div");
  xe.className = "pano-paint-size-preview-sample", ve.appendChild(xe), ce == null || ce.appendChild(ve);
  const C = F.getContext("2d"), we = ti(), te = t === "cutout" ? d_({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, ye = W.querySelector("[data-side]"), $ = W.querySelector("[data-video-element]"), X = W.querySelector(".pano-floating-right"), _e = W.querySelector(".pano-floating-top"), $e = W.querySelector("[data-tool-rail]"), ze = W.querySelector("[data-frame-rail]"), De = W.querySelector("[data-frame-roll-knob]"), wt = W.querySelector("[data-paint-dock]"), Et = W.querySelector(".pano-video-transport"), Ht = W.querySelector("[data-selection-menu]"), St = W.querySelector("[data-tooltip]"), Tt = W.querySelector("[data-camera-preview-host]"), hn = W.querySelector("[data-paint-color-row]"), Xe = W.querySelector("[data-paint-color-pop]"), Wt = W.querySelector("[data-paint-color-sv]"), Pn = W.querySelector("[data-paint-color-sv-cursor]"), O = W.querySelector("[data-paint-hue-strip]"), H = W.querySelector("[data-paint-hue-handle]");
  let Q = 0, pe = 0;
  ce == null || ce.removeAttribute("data-stage-ready"), ce == null || ce.setAttribute("data-stage-loading-kind", "boot"), F.style.opacity = "1", J.style.opacity = "0", a && (ye == null || ye.remove(), W.classList.add("pano-modal-readonly"));
  const I = () => {
    if (!u.customPaintSessionStart) return;
    if (ts(u.customPaintSessionStart, u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    if (Zw(u.customPaintColor)) {
      u.customPaintSessionStart = null;
      return;
    }
    const r = [
      bn(u.customPaintColor),
      ...u.customPaintHistory.filter((o) => !ts(o, u.customPaintColor))
    ];
    u.customPaintHistory = r.slice(0, 8), u.customPaintSessionStart = null;
  }, K = (r = !1) => {
    !Xe || Xe.hidden || (r ? I() : u.customPaintSessionStart = null, Xe.hidden = !0, k.paintDock.colorPopOpen = !1);
  }, ne = () => {
    Xe && (Xe.hidden && (u.customPaintSessionStart = bn(u.customPaintColor)), Xe.hidden = !1, k.paintDock.colorPopOpen = !0);
  };
  W.addEventListener("pointerdown", (r) => {
    var o;
    r.target.closest("[data-frame-roll-knob]") || Hr(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (W.querySelectorAll(".pano-picker-pop").forEach((s) => {
      s.hidden = !0;
    }), K(!0), t === "cutout" && u.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (u.cutoutAspectOpen = !1, u.menuMode = "", u.menuSize.measured = !1, Ge(), fe()), (o = k.frameRail) != null && o.aspectOpen && !r.target.closest(".pano-frame-aspect-control") && (k.frameRail.aspectOpen = !1)));
  });
  const se = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, ae = JSON.stringify(jd(v)), u = {
    mode: "pano",
    selectedId: se,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Kt(v.coverage),
    historyController: F1(80, { entries: [ae], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: sr,
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
    showGrid: nS(e == null ? void 0 : e.id, !0),
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
    paintEngine: dc(),
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
    altModifier: !1,
    panelLastValues: null,
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null
  }, he = te && Tt ? te.mount(Tt, { shot: null }) : null;
  t === "stickers" && (u.selectedId = null, v.active.selected_sticker_id = null), u.selectedIds = u.selectedId ? [u.selectedId] : [];
  const ge = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Re = /* @__PURE__ */ new Map(), Te = document.createElement("canvas");
  Te.__panoFrameIdx = 0;
  const oe = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    lastSizeCheckTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: ""
  }, dt = Number.parseFloat(
    getComputedStyle(W).getPropertyValue("--pano-float-radius")
  ) || 10, We = (r) => {
    const o = String(r || "default");
    F.style.cursor !== o && (F.style.cursor = o);
  }, ke = {
    timer: 0,
    target: null
  }, Qe = {
    active: !1,
    depth: 0
  }, me = {
    mode: "playback",
    editorTime: 0,
    requestedTime: null,
    presentedTime: 0,
    seeking: !1,
    resumeAfterScrub: !1,
    pendingPlaybackResume: !1,
    frameCounter: 0,
    frameCache: /* @__PURE__ */ new Map(),
    frameCacheOrder: [],
    currentFrameNumber: 0,
    thumbnailJobId: 0,
    thumbnailSrc: ""
  }, kt = 4, Pt = 9, At = [];
  let er = 0;
  const Ka = () => {
    var M, P;
    const r = (M = ce == null ? void 0 : ce.getBoundingClientRect) == null ? void 0 : M.call(ce), o = (P = X == null ? void 0 : X.getBoundingClientRect) == null ? void 0 : P.call(X), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), c = o ? Math.max(0, Number(o.width || 0)) : 0, b = c > 0 ? c + 14 + 12 : 72, g = Math.max(280, Math.floor(s - b * 2)), x = u.fullscreen ? Math.min(1200, g) : g;
    k.videoTransport.shellMaxWidthPx = x;
  }, zs = () => {
    er || (er = window.requestAnimationFrame(() => {
      er = 0, Ka();
    }));
  }, js = () => {
    const r = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, Qc = (r) => {
    if (!(r instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(r.audioTracks) && r.audioTracks.length > 0 || r.audioTracks && typeof r.audioTracks.length == "number" && r.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof r.mozHasAudio == "boolean") return r.mozHasAudio;
    } catch {
    }
    try {
      if (Number(r.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!k.videoTransport.hasAudio;
  }, An = typeof ResizeObserver < "u" ? new ResizeObserver(() => zs()) : null;
  An == null || An.observe(ce), X && (An == null || An.observe(X)), At.push(() => {
    var r;
    er && (window.cancelAnimationFrame(er), er = 0), (r = An == null ? void 0 : An.disconnect) == null || r.call(An);
  }), zs();
  const Wa = () => {
    me.thumbnailJobId += 1, me.thumbnailSrc = "", k.videoTransport.thumbnails = [], k.videoTransport.thumbnailCount = Pt;
  }, eu = async (r, o, s) => {
    const c = String(r || "").trim();
    if (!c) {
      Wa();
      return;
    }
    const h = Ww(c);
    if (h) {
      me.thumbnailSrc = c, k.videoTransport.thumbnails = h.thumbnails, k.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (me.thumbnailSrc === c && Array.isArray(k.videoTransport.thumbnails) && k.videoTransport.thumbnails.length)
      return;
    const m = ++me.thumbnailJobId;
    me.thumbnailSrc = c, k.videoTransport.thumbnails = [], k.videoTransport.thumbnailCount = Pt;
    const b = document.createElement("video");
    if (b.preload = "auto", b.muted = !0, b.playsInline = !0, b.crossOrigin = "anonymous", !await new Promise((re) => {
      let le = !1;
      const ee = (be) => {
        le || (le = !0, re(be));
      };
      b.addEventListener("loadedmetadata", () => ee(!0), { once: !0 }), b.addEventListener("canplay", () => ee(!0), { once: !0 }), b.addEventListener("error", () => ee(!1), { once: !0 }), b.src = c, b.load();
    }) || me.thumbnailJobId !== m) return;
    const x = Math.max(1, Number(b.videoWidth || 0)), M = Math.max(1, Number(b.videoHeight || 0));
    if (x < 1 || M < 1) return;
    const P = Math.max(0, Number(b.duration || o || 0)), N = document.createElement("canvas"), T = 46, z = Math.max(72, Math.round(x / M * T));
    N.width = z, N.height = T;
    const q = N.getContext("2d");
    if (!q) return;
    const B = [], Y = (re) => new Promise((le) => {
      let ee = !1;
      const be = () => {
        ee || (ee = !0, le());
      };
      b.addEventListener("seeked", be, { once: !0 }), b.addEventListener("error", be, { once: !0 });
      try {
        b.currentTime = re;
      } catch {
        be();
      }
    });
    for (let re = 0; re < Pt; re += 1) {
      if (me.thumbnailJobId !== m) return;
      const le = re / (Pt - 1), ee = P > 0 ? Math.max(0, Math.min(P - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), P * le)) : 0;
      if (await Y(ee), me.thumbnailJobId !== m) return;
      q.clearRect(0, 0, z, T), q.drawImage(b, 0, 0, z, T), B.push({
        id: `thumb-${re}`,
        src: N.toDataURL("image/jpeg", 0.72),
        time: ee,
        label: Zs(ee)
      });
    }
    me.thumbnailJobId === m && (k.videoTransport.thumbnails = B, k.videoTransport.thumbnailCount = B.length || Pt, Yw(c, {
      thumbnails: B,
      thumbnailCount: B.length || Pt,
      duration: P,
      fps: s
    }));
  }, tu = (r) => {
    const o = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, nu = (r) => {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return null;
    const o = Number($.videoWidth || 0), s = Number($.videoHeight || 0), c = document.createElement("canvas");
    c.width = o, c.height = s, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const h = c.getContext("2d");
    if (!h) return null;
    for (h.drawImage($, 0, 0, o, s), me.frameCache.set(r, c), me.frameCacheOrder = me.frameCacheOrder.filter((m) => m !== r), me.frameCacheOrder.push(r); me.frameCacheOrder.length > kt; ) {
      const m = me.frameCacheOrder.shift();
      m != null && me.frameCache.delete(m);
    }
    return c;
  }, Hm = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), c = Number(r.height || 0);
    if (s < 1 || c < 1) return !1;
    (Te.width !== s || Te.height !== c) && (Te.width = s, Te.height = c);
    const h = Te.getContext("2d");
    return h ? (h.clearRect(0, 0, s, c), h.drawImage(r, 0, 0, s, c), Te.__panoFrameIdx = Number(Te.__panoFrameIdx || 0) + 1, o != null && (me.presentedTime = Number(o || 0)), !0) : !1;
  }, ru = (r) => {
    const o = tu(r), s = me.frameCache.get(o) || null;
    return s ? (me.currentFrameNumber = o, Hm(s, r)) : !1;
  };
  if (At.push(() => {
    Wa();
  }), $ instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof $.requestVideoFrameCallback != "function" || $.__panoFramePumpActive) return;
      $.__panoFramePumpActive = !0;
      const g = (x, M) => {
        $.__panoFramePumpActive = !1;
        const P = Number((M == null ? void 0 : M.mediaTime) ?? $.currentTime ?? 0), N = tu(P), T = js();
        me.mode === "scrub" ? Math.abs(P - Number(me.editorTime || 0)) <= T && (nu(N), ru(me.editorTime), oe.backgroundDirty = !0, oe.dirty = !0, Ln({
          ready: !0,
          playing: !1,
          visible: rr(),
          currentTime: me.editorTime,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "scrub"
        }), fe({ cause: "frame_view", localOnly: !0 })) : (me.editorTime = P, me.presentedTime = P, me.requestedTime = null, me.currentFrameNumber = N, nu(N), me.frameCounter += 1, $.dataset.panoFrameIdx = String(me.frameCounter), oe.backgroundDirty = !0, oe.dirty = !0, Ln({
          ready: !0,
          playing: !$.paused && !$.ended,
          visible: rr(),
          currentTime: P,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "playback"
        }), fe({ cause: "frame_view", localOnly: !0 })), oe.running && (!$.paused || me.mode === "scrub") && r();
      };
      try {
        $.requestVideoFrameCallback(g);
      } catch {
        $.__panoFramePumpActive = !1;
      }
    }, o = () => {
      me.pendingPlaybackResume && (me.pendingPlaybackResume = !1, me.mode = "playback", me.requestedTime = null, pi() && (oe.backgroundDirty = !0, oe.dirty = !0), $.play().catch(() => {
      }));
    }, s = () => {
      me.editorTime = Number($.currentTime || 0), Number($.readyState || 0) >= 2 && pi() && (oe.backgroundDirty = !0, oe.dirty = !0), gi(), r(), fe({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      me.mode = "playback", me.seeking = !1, me.requestedTime = null, gi(), r(), fe({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      me.mode === "playback" && pi() && (oe.backgroundDirty = !0, oe.dirty = !0), gi(), fe({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: rr(),
        currentTime: me.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: me.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: $.muted,
        volume: Number($.volume ?? k.videoTransport.volume ?? 1)
      });
    }, b = () => {
      const g = me.seeking || me.pendingPlaybackResume || me.mode === "scrub";
      if (me.seeking = !1, !g) {
        me.requestedTime = null, r();
        return;
      }
      const x = Number(me.requestedTime ?? me.editorTime ?? 0), M = Number($.currentTime || 0);
      if (Math.abs(M - x) > js()) {
        Qs(x);
        return;
      }
      me.mode === "scrub" && (pi(), oe.backgroundDirty = !0, oe.dirty = !0, fe({ cause: "frame_view", localOnly: !0 })), me.requestedTime = null, o(), r();
    };
    $.addEventListener("loadedmetadata", s), $.addEventListener("loadeddata", s), $.addEventListener("canplay", s), $.addEventListener("play", c), $.addEventListener("pause", h), $.addEventListener("volumechange", m), $.addEventListener("seeked", b), At.push(() => $.removeEventListener("loadedmetadata", s)), At.push(() => $.removeEventListener("loadeddata", s)), At.push(() => $.removeEventListener("canplay", s)), At.push(() => $.removeEventListener("play", c)), At.push(() => $.removeEventListener("pause", h)), At.push(() => $.removeEventListener("volumechange", m)), At.push(() => $.removeEventListener("seeked", b));
  }
  function Um() {
    k.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", c = r.attr === "data-mask-tool";
      r.active = o ? r.value === u.primaryTool : s ? r.key === u.paintTool : c ? r.key === u.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function Vs(r) {
    const o = r == null ? void 0 : r.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const s of o.items) {
        if (!s || s.kind !== "file") continue;
        const c = String(s.type || "").toLowerCase();
        if (!c || c.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((s) => co(s)) : !1;
  }
  function $r(r) {
    const o = !!r;
    Qe.active !== o && (Qe.active = o, ce.classList.toggle("drop-active", o));
  }
  function Hs(r, o, s = u.viewFov, c = 140, h = 620) {
    const m = vv(u.viewYaw, r), b = o - u.viewPitch, g = s - u.viewFov, x = Math.hypot(m, b) + Math.abs(g) * 0.6, M = Math.round(G(c + x * 2.2, c, h));
    u.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: M,
      startYaw: u.viewYaw,
      startPitch: u.viewPitch,
      startFov: u.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: m
    }, u.viewInertia.active = !1, u.viewInertia.vx = 0, u.viewInertia.vy = 0, fe();
  }
  vp();
  function tr() {
    return t === "stickers" ? v.stickers : v.shots;
  }
  function Yt() {
    const r = v.painting || (v.painting = Pa(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Bm(r = "paint") {
    var h, m;
    const o = Array.isArray((m = (h = v.painting) == null ? void 0 : h[r]) == null ? void 0 : m.strokes) ? v.painting[r].strokes : [], s = [], c = /* @__PURE__ */ new Set();
    for (const b of o) {
      const g = String((b == null ? void 0 : b.actionGroupId) || "").trim();
      !g || c.has(g) || (c.add(g), s.push(g));
    }
    return s;
  }
  function Gm() {
    return Bm("paint");
  }
  function Xi(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Ji(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function zt(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function Zi(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const c = s.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function Us() {
    var o;
    let r = -1;
    for (const s of Array.isArray(v.stickers) ? v.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Yt())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = v.painting) == null ? void 0 : o.raster_objects) ? v.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function iu(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const c = Yt();
    let h = c.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? Us() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, c.push(h)), h;
  }
  function Km(r) {
    if (!(r != null && r.centerUv)) return [];
    const o = Number(r.centerUv.u || 0), s = Number(r.centerUv.v || 0), c = Number(r.halfW || 0), h = Number(r.halfH || 0);
    return [
      {
        u: ((o - c) % 1 + 1) % 1,
        v: G(s - h, 0, 1)
      },
      {
        u: ((o + c) % 1 + 1) % 1,
        v: G(s - h, 0, 1)
      },
      {
        u: ((o + c) % 1 + 1) % 1,
        v: G(s + h, 0, 1)
      },
      {
        u: ((o - c) % 1 + 1) % 1,
        v: G(s + h, 0, 1)
      }
    ];
  }
  function Wm() {
    const r = new Set(Gm()), s = Yt().filter((c) => r.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return r.forEach((c) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === c) || s.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: Us(),
        locked: !1,
        frame: null
      });
    }), s.sort((c, h) => Number((c == null ? void 0 : c.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), v.painting.groups = s, s;
  }
  function Ym(r, o, s) {
    var B;
    const c = (Y) => (Number(Y || 0) % 1 + 1) % 1, h = [];
    for (const Y of s) {
      const re = Y == null ? void 0 : Y.geometry, le = (re == null ? void 0 : re.geometryKind) === "lasso_fill" ? re == null ? void 0 : re.points : (re == null ? void 0 : re.processedPoints) || (re == null ? void 0 : re.rawPoints) || (re == null ? void 0 : re.points) || [];
      Array.isArray(le) && h.push(...le);
    }
    if (!h.length) return null;
    const m = c(((B = h[0]) == null ? void 0 : B.u) || 0);
    let b = 0, g = 0;
    h.forEach((Y) => {
      const re = c((Y == null ? void 0 : Y.u) || 0);
      b += m + xn(re, m), g += Number((Y == null ? void 0 : Y.v) || 0);
    });
    const x = (b / h.length % 1 + 1) % 1;
    let M = 1 / 0, P = -1 / 0, N = 1 / 0, T = -1 / 0;
    h.forEach((Y) => {
      const re = c((Y == null ? void 0 : Y.u) || 0), le = xn(re, x);
      M = Math.min(M, le), P = Math.max(P, le);
      const ee = Number((Y == null ? void 0 : Y.v) || 0);
      N = Math.min(N, ee), T = Math.max(T, ee);
    });
    const z = s.reduce((Y, re) => {
      const le = kr(String((re == null ? void 0 : re.toolKind) || "pen")), ee = un[le] || un[sr], be = Math.max(1, Number((re == null ? void 0 : re.size) || 10)) * Math.max(0.1, Number((ee == null ? void 0 : ee.sizeScale) ?? 1));
      return Math.max(Y, be);
    }, 0), q = Math.max(35e-4, z / 2048);
    return {
      centerUv: { u: ((x + (M + P) * 0.5) % 1 + 1) % 1, v: G((N + T) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (P - M) * 0.5 + q,
      halfH: (T - N) * 0.5 + q,
      uvPad: q
    };
  }
  function _r(r, o, s) {
    const c = String(r || "").trim();
    if (!c) return null;
    const h = Yt().find((b) => String((b == null ? void 0 : b.actionGroupId) || "") === c);
    if (!h) return null;
    const m = s || Cn(c, o);
    return h.frame = Ym(c, o, m), h.frame;
  }
  function ci() {
    var c;
    const r = (Array.isArray(v.stickers) ? v.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = Wm().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = (Array.isArray((c = v.painting) == null ? void 0 : c.raster_objects) ? v.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...r, ...o, ...s].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function Bs(r = !0) {
    var s, c, h, m, b, g;
    const o = ci().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (r) {
      const x = String(((c = (s = u.interaction) == null ? void 0 : s.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), M = String(((m = (h = u.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), P = String(((g = (b = u.interaction) == null ? void 0 : b.stroke) == null ? void 0 : g.toolKind) || "").trim();
      x && M === "paint" && P !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function Gs(r = !0) {
    var g, x, M, P, N, T;
    const o = ci();
    if (!r) return o;
    const s = String(((x = (g = u.interaction) == null ? void 0 : g.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), c = String(((P = (M = u.interaction) == null ? void 0 : M.stroke) == null ? void 0 : P.layerKind) || "").trim(), h = String(((T = (N = u.interaction) == null ? void 0 : N.stroke) == null ? void 0 : T.toolKind) || "").trim();
    if (!s || c !== "paint" || h === "eraser" || o.some((z) => z.type === "strokeGroup" && String(z.actionGroupId || "") === s))
      return o;
    const m = bt();
    let b = o.reduce((z, q) => Math.max(z, Number((q == null ? void 0 : q.z_index) || 0)), -1) + 1;
    return m && Ot(m) && String(m.actionGroupId || "") === s && (b = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: b,
        item: null
      }
    ].sort((z, q) => Number((z == null ? void 0 : z.z_index) || 0) - Number((q == null ? void 0 : q.z_index) || 0));
  }
  function qm() {
    return Yt().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => fi(Xi("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function Xm() {
    var r;
    return (Array.isArray((r = v.painting) == null ? void 0 : r.raster_objects) ? v.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => ui(Ji((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function au(r = u.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, c = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || c;
    }
    return !1;
  }
  function Jm() {
    var o, s, c, h;
    let r = null;
    try {
      const m = Bs(), b = ((h = (c = (s = (o = u.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, m)) == null ? void 0 : c.displayPaint) == null ? void 0 : h.canvas) || null;
      b && (r = {
        source: b,
        revision: `${_i()}:${Ya()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function Ya() {
    var h, m, b, g, x, M, P;
    const r = u.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!au(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const N = ((h = r == null ? void 0 : r.stroke) == null ? void 0 : h.geometry) || null, T = String(((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.layerKind) || ""), z = ((b = N == null ? void 0 : N.rawPoints) == null ? void 0 : b.length) ?? ((g = N == null ? void 0 : N.points) == null ? void 0 : g.length) ?? 0, q = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${T || "paint"}_${o}_live${q}_${z}_${u.livePaintInteractionRevision}`;
    }
    const s = String(((x = r == null ? void 0 : r.item) == null ? void 0 : x.actionGroupId) || ""), c = String(((M = r == null ? void 0 : r.item) == null ? void 0 : M.rasterObjectId) || ((P = r == null ? void 0 : r.item) == null ? void 0 : P.id) || "");
    return `_${o}_${s || c || "active"}_${u.livePaintInteractionRevision}`;
  }
  function Ks() {
    const r = Array.isArray(v.shots) ? v.shots : [], o = Array.isArray(v.stickers) ? v.stickers : [];
    return [...r, ...o];
  }
  function mn(r) {
    return !!r && Array.isArray(v.shots) && v.shots.includes(r);
  }
  function gt(r) {
    return !!r && Array.isArray(v.stickers) && v.stickers.includes(r);
  }
  function ln() {
    var r;
    return Array.isArray((r = v.painting) == null ? void 0 : r.raster_objects) ? v.painting.raster_objects : [];
  }
  function ui(r) {
    const o = zt(r);
    if (!o) return null;
    const s = ln().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Ji(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function qt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = zt(r.rasterObjectId || r.id || "");
    return !!o && !!ui(Ji(o));
  }
  function fi(r) {
    const o = Zi(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const c = Yt().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return c ? {
      ...c,
      id: Xi("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Ot(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!fi(Xi(s, o));
  }
  function Cn(r, o = null) {
    const s = Zi(r, o), c = String(s.actionGroupId || "").trim();
    return c ? wi(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === c) : [];
  }
  function Zm(r, o = "paint") {
    const s = String(r || "").trim(), h = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${u.mode}:${ra()}`;
    if (u.mode === "frame") {
      const m = Fe(), b = String((m == null ? void 0 : m.id) || ""), g = m ? Rt(m) : null;
      return `${h}:frame:${b}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((F == null ? void 0 : F.width) || 0))}:${Math.round(Number((F == null ? void 0 : F.height) || 0))}`;
  }
  function qa(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: G(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function xn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function Ws(r, o = null, s = null) {
    var M;
    const c = Zi(r, o), h = Array.isArray(s) ? s : Cn(c.actionGroupId, c.layerKind), m = [];
    if (h.forEach((P) => {
      const N = (P == null ? void 0 : P.geometry) || null, T = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(T) && m.push(...T);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const b = Number(((M = m[0]) == null ? void 0 : M.u) || 0);
    let g = 0, x = 0;
    return m.forEach((P) => {
      g += b + xn(Number((P == null ? void 0 : P.u) || 0), b), x += Number((P == null ? void 0 : P.v) || 0);
    }), {
      u: (g / m.length % 1 + 1) % 1,
      v: G(x / m.length, 0, 1)
    };
  }
  function Xa(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), b = xn(Number(r.u || 0), h), g = Number(r.v || 0) - m, x = Number(c || 0) * Ft, M = Math.cos(x), P = Math.sin(x), N = Math.max(0.02, Number(s || 1)), T = (b * M - g * P) * N, z = (b * P + g * M) * N;
    return {
      ...r,
      u: ((h + T) % 1 + 1) % 1,
      v: G(m + z, 0, 1)
    };
  }
  function ou(r, o, s, c = null, h = null, m = null) {
    const b = Zi(r, h), g = String(b.actionGroupId || "").trim();
    if (!g) return !1;
    const x = wi(b.layerKind), M = Array.isArray(c) ? new Map(c.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let P = !1;
    if (x.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== g) return;
      const T = (M == null ? void 0 : M.get(String((N == null ? void 0 : N.id) || ""))) || N, z = N == null ? void 0 : N.geometry, q = T == null ? void 0 : T.geometry;
      !z || !q || (Array.isArray(q.points) && (z.points = q.points.map((B) => qa(B, o, s)), P = !0), Array.isArray(q.rawPoints) && (z.rawPoints = q.rawPoints.map((B) => qa(B, o, s)), P = !0), Array.isArray(q.processedPoints) && (z.processedPoints = q.processedPoints.map((B) => qa(B, o, s)), P = !0));
    }), P && m) {
      const N = Yt().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === g);
      N && (N.frame = null);
    }
    return P;
  }
  function su(r, o = 1, s = 0, c = null, h = null, m = null) {
    const b = Zi(r, h), g = String(b.actionGroupId || "").trim();
    if (!g) return !1;
    const x = wi(b.layerKind), M = Array.isArray(c) ? c : Cn(g, b.layerKind), P = Array.isArray(M) ? new Map(M.map((z) => [String((z == null ? void 0 : z.id) || ""), z])) : null, N = (m == null ? void 0 : m.centerUv) ?? Ws(g, b.layerKind, M);
    let T = !1;
    if (x.forEach((z) => {
      if (String((z == null ? void 0 : z.actionGroupId) || "").trim() !== g) return;
      const q = (P == null ? void 0 : P.get(String((z == null ? void 0 : z.id) || ""))) || z, B = z == null ? void 0 : z.geometry, Y = q == null ? void 0 : q.geometry;
      !B || !Y || (Array.isArray(Y.points) && (B.points = Y.points.map((re) => Xa(re, N, o, s)), T = !0), Array.isArray(Y.rawPoints) && (B.rawPoints = Y.rawPoints.map((re) => Xa(re, N, o, s)), T = !0), Array.isArray(Y.processedPoints) && (B.processedPoints = Y.processedPoints.map((re) => Xa(re, N, o, s)), T = !0));
    }), T && m) {
      const z = Yt().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === g);
      z && (z.frame = null);
    }
    return T;
  }
  function lu(r, o, s, c = null) {
    const h = zt(r);
    if (!h) return !1;
    const m = ln().find((P) => String((P == null ? void 0 : P.id) || "").trim() === h);
    if (!m) return !1;
    const b = c && typeof c == "object" ? c : m, g = (b == null ? void 0 : b.transform) || {}, x = Number(g.du || 0) + Number(o || 0), M = G(Number(g.dv || 0) + Number(s || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = x, m.transform.dv = M, !0;
  }
  function Qm(r, o = 1, s = null) {
    const c = zt(r);
    if (!c) return !1;
    const h = ln().find((M) => String((M == null ? void 0 : M.id) || "").trim() === c);
    if (!h) return !1;
    const m = s && typeof s == "object" ? s : h, b = (m == null ? void 0 : m.transform) || {}, g = Math.max(0.01, Number(b.scale || 1)), x = G(g * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = x, !0;
  }
  function bt() {
    const r = String(u.selectedId || "");
    if (!r) return null;
    const o = fi(r);
    if (o) return o;
    const s = ui(r);
    return s || (t === "cutout" ? Ks().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null : tr().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null);
  }
  function Tn() {
    const r = Array.isArray(u.selectedIds) && u.selectedIds.length ? u.selectedIds : u.selectedId ? [u.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((c) => {
      const h = String(c || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const m = h === String(u.selectedId || "") ? bt() : fi(h) || ui(h) || (t === "cutout" ? Ks().find((b) => String((b == null ? void 0 : b.id) || "") === h) : tr().find((b) => String((b == null ? void 0 : b.id) || "") === h));
      m && o.push(m);
    }), o;
  }
  function Ys(r = null) {
    const o = Array.isArray(r) ? r : Tn();
    if (!o || o.length < 2) return null;
    const s = o.map((M) => jt(M)).filter((M) => (M == null ? void 0 : M.visible) && Array.isArray(M.corners) && M.corners.length);
    if (!s.length) return null;
    const c = s.flatMap((M) => M.corners.map((P) => Number((P == null ? void 0 : P.x) || 0))), h = s.flatMap((M) => M.corners.map((P) => Number((P == null ? void 0 : P.y) || 0))), m = Math.min(...c), b = Math.max(...c), g = Math.min(...h), x = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + b) * 0.5, y: (g + x) * 0.5 },
      corners: [
        { x: m, y: g },
        { x: b, y: g },
        { x: b, y: x },
        { x: m, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + b) * 0.5, y: g, a: { x: m, y: g }, b: { x: b, y: g } },
        { edge: "right", x: b, y: (g + x) * 0.5, a: { x: b, y: g }, b: { x: b, y: x } },
        { edge: "bottom", x: (m + b) * 0.5, y: x, a: { x: b, y: x }, b: { x: m, y: x } },
        { edge: "left", x: m, y: (g + x) * 0.5, a: { x: m, y: x }, b: { x: m, y: g } }
      ],
      rotateStemBase: { x: (m + b) * 0.5, y: g },
      rotateHandle: { x: (m + b) * 0.5, y: g - 30 }
    };
  }
  function cu(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(u.selectedIds) && u.selectedIds.includes(o);
  }
  function Ja() {
    const r = bt();
    return r ? Ot(r) || qt(r) ? "stroke" : mn(r) ? "frame" : "image" : null;
  }
  function nr(r) {
    if (!r || typeof r != "object") return !1;
    if (Ot(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = Yt().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (qt(r)) {
      const o = zt(r.rasterObjectId || r.id || ""), s = ln().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function qs(r = null) {
    const o = Array.isArray(r) ? r : Tn();
    return o.length > 0 && o.every((s) => nr(s));
  }
  function ep(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (Ot(r)) {
      const c = String(r.actionGroupId || r.id || "").trim(), h = Yt().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === c);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (qt(r)) {
      const c = zt(r.rasterObjectId || r.id || ""), h = ln().find((m) => String((m == null ? void 0 : m.id) || "").trim() === c);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function tp() {
    if (i) return;
    const r = Tn();
    if (!r.length) return;
    const o = !qs(r);
    let s = !1;
    r.forEach((c) => {
      ep(c, o) && (s = !0);
    }), s && (Ze(), it(), Ge(), fe());
  }
  function di(r) {
    u.selectedId = (r == null ? void 0 : r.id) || null, u.selectedIds = r != null && r.id ? [r.id] : [], r && gt(r) ? v.active.selected_sticker_id = r.id || null : v.active.selected_sticker_id = null, r && mn(r) ? v.active.selected_shot_id = r.id || null : r ? mn(r) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function np(r, o = null) {
    const s = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((b) => {
      const g = String((b == null ? void 0 : b.id) || "").trim();
      !g || c.has(g) || (c.add(g), s.push(g));
    }), u.selectedIds = s;
    const h = String(o || "").trim();
    u.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const m = bt();
    v.active.selected_sticker_id = m && gt(m) && m.id || null, m && mn(m) ? v.active.selected_shot_id = m.id || null : s.length || (v.active.selected_shot_id = null);
  }
  function uu() {
    const r = (Array.isArray(v.shots) ? v.shots : []).map((s, c) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${c + 1}`)
    })), o = (Array.isArray(v.stickers) ? v.stickers : []).map((s, c) => {
      var m, b;
      const h = Ut(s) ? String(s.id || Wr) : String(((b = (m = v.assets) == null ? void 0 : m[s.asset_id]) == null ? void 0 : b.name) || s.asset_id || s.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...r, ...o];
  }
  function rp(r) {
    return r === "frame" ? Oe.camera : r === "stroke" ? Oe.paintbrush_vertical_tool : Oe.image;
  }
  function Xs(r) {
    return !r || !r.item ? {
      label: String((r == null ? void 0 : r.label) || ""),
      icon: null
    } : {
      label: String(r.label || ""),
      icon: rp(r.kind)
    };
  }
  function fu() {
    return Us();
  }
  function Ut(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Wr || String(r.source_kind || "") === Wl;
  }
  function hi(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function ip(r) {
    return Ut(r) && hi(r) ? um : 1;
  }
  function ap() {
    return u.primaryTool === "mask" ? u.maskTool : u.paintTool;
  }
  function op() {
    return String(ap() || "") === "lasso_fill";
  }
  function sp() {
    if (i) return;
    const r = bt();
    !r || !Ut(r) || (r.visible = hi(r), Bt(), Ze(), it(), Ve(), Ge(), fe());
  }
  function lp() {
    if (i || t !== "stickers") return;
    const r = bt();
    if (!r || !Ut(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = el(Yl, () => {
      fe();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = zr(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), Ze(), it(), Ve(), Ge(), fe();
  }
  function cp(r) {
    if (!r || !Ut(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, c = el(Yl, () => {
      fe();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (s.vFOV_deg = zr(
      s.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), s;
  }
  function up() {
    const r = bt();
    if (!r || !Ut(r)) return !1;
    const o = cp(r);
    if (!o) return !1;
    const s = (c, h) => Math.abs(Number(c || 0) - Number(h || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function Js(r) {
    var s;
    const o = Aa(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function du(r) {
    const o = Aa(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function hu() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return hs(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function fp() {
    const { metaKey: r } = hu(), o = du(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function mi(r) {
    var o;
    return r ? r instanceof HTMLVideoElement ? [
      String(r.currentSrc || r.src || ""),
      Number(r.videoWidth || 0),
      Number(r.videoHeight || 0),
      String(((o = r.dataset) == null ? void 0 : o.panoFrameIdx) || "0")
    ].join("|") : r instanceof HTMLCanvasElement ? [
      "canvas",
      Number(r.width || 0),
      Number(r.height || 0),
      String(r.__panoFrameIdx || 0)
    ].join("|") : [
      String(r.currentSrc || r.src || ""),
      Number(r.naturalWidth || r.width || 0),
      Number(r.naturalHeight || r.height || 0)
    ].join("|") : "none";
  }
  function Zs(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), c = o % 60;
    return `${s}:${String(c).padStart(2, "0")}`;
  }
  function Ln(r = {}) {
    const o = Number(r.currentTime ?? me.editorTime ?? 0), s = Number(r.duration ?? k.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!k.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!k.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!k.videoTransport.visible, b = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!($ instanceof HTMLVideoElement ? $.muted : k.videoTransport.muted), g = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : $ instanceof HTMLVideoElement ? $.volume : k.videoTransport.volume
    ), x = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Qc($), M = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!k.videoTransport.loop;
    Object.assign(k.videoTransport, {
      ready: c,
      playing: h,
      visible: m,
      loop: M,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: Zs(o),
      durationLabel: Zs(s),
      frameCount: Math.max(0, Number(r.frameCount ?? k.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? k.videoTransport.fps ?? 24)),
      mode: String(r.mode || me.mode || "playback"),
      hasAudio: x,
      muted: b,
      volume: Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : k.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? k.videoTransport.thumbnailCount ?? Pt))
    });
  }
  function rr() {
    return !!($ instanceof HTMLVideoElement && $.getAttribute("src") && u.primaryTool !== "paint" && u.primaryTool !== "mask");
  }
  function dp() {
    Ln({
      visible: rr()
    });
  }
  function pi() {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return !1;
    const r = Number($.videoWidth || 0), o = Number($.videoHeight || 0);
    (Te.width !== r || Te.height !== o) && (Te.width = r, Te.height = o);
    const s = Te.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage($, 0, 0, r, o), Te.__panoFrameIdx = Number(Te.__panoFrameIdx || 0) + 1, me.presentedTime = Number(me.editorTime || $.currentTime || 0), !0) : !1;
  }
  function mu() {
    return me.mode === "scrub" && Number(Te.width || 0) > 0 && Number(Te.height || 0) > 0 && Number(Te.__panoFrameIdx || 0) > 0 ? Te : $ instanceof HTMLVideoElement && Number($.videoWidth || 0) > 0 && Number($.videoHeight || 0) > 0 && Number($.readyState || 0) >= 2 ? $ : null;
  }
  function Qs(r) {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(r || 0));
    if (me.requestedTime = o, !me.seeking && !(Math.abs(Number($.currentTime || 0) - o) <= 5e-4)) {
      me.seeking = !0;
      try {
        $.currentTime = o;
      } catch {
        me.seeking = !1;
      }
    }
  }
  function gi() {
    if (!($ instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = hu(), o = Js(r)[0] || null, s = o && typeof o == "object" ? ja(o) : si(o), c = fp(), h = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), m = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), b = Number((c == null ? void 0 : c.duration) || (h > 0 ? h / m : 0)), g = !!(c != null && c.has_audio) || Qc($);
    return s && $.dataset.panoSrc !== s ? ($.pause(), $.dataset.panoSrc = s, $.dataset.panoFrameIdx = "0", $.loop = !!k.videoTransport.loop, $.muted = !!k.videoTransport.muted, $.volume = Math.max(0, Math.min(1, Number(k.videoTransport.volume ?? 1))), $.src = s, $.load(), eu(s, b, m)) : !s && $.getAttribute("src") && ($.pause(), $.removeAttribute("src"), $.load(), Wa()), $.loop !== !!k.videoTransport.loop && ($.loop = !!k.videoTransport.loop), s && (!Array.isArray(k.videoTransport.thumbnails) || k.videoTransport.thumbnails.length === 0) && eu(s, b, m), s || Wa(), Ln({
      ready: !!s,
      playing: !$.paused && !$.ended,
      visible: !!s && u.primaryTool !== "paint" && u.primaryTool !== "mask",
      currentTime: me.editorTime,
      duration: b,
      frameCount: h,
      fps: m,
      mode: me.mode,
      hasAudio: g,
      loop: !!$.loop,
      muted: !!$.muted,
      volume: Number($.volume ?? k.videoTransport.volume ?? 1),
      thumbnailCount: k.videoTransport.thumbnailCount
    }), s || null;
  }
  function hp(r, o = null) {
    var s;
    if (r && typeof r == "object" && !Array.isArray(r)) return r;
    if (Array.isArray(r) && r.length > 0) {
      const c = r[0];
      if (c && typeof c == "object" && !Array.isArray(c)) return c;
    }
    if (Array.isArray(o) && o.length > 0) {
      const c = (s = o[0]) == null ? void 0 : s.parsed_state;
      if (c && typeof c == "object" && !Array.isArray(c))
        return {
          yaw_deg: Number(c.yaw_deg || 0),
          pitch_deg: Number(c.pitch_deg || 0),
          hFOV_deg: Number(c.hFOV_deg || 30),
          rot_deg: Number(c.roll_deg || 0)
        };
    }
    return null;
  }
  function el(r, o = null) {
    const s = Js(r), c = Array.isArray(s) && s.length ? s[0] : null, h = si(c);
    if (!h) return null;
    const m = `__ui__${r}`, b = ge.get(m);
    if (b && b.__panoSrc === h) return b;
    const g = new Image();
    return g.__panoSrc = h, $a(g, h), g.onload = () => {
      za(g, h), typeof o == "function" ? o(g) : fe();
    }, g.onerror = () => {
      oi(g, h), typeof o == "function" ? o(g) : fe();
    }, g.src = h, ge.set(m, g), g;
  }
  function pu(r = null) {
    const o = Uo(e, ["sticker_image"], r, "sticker_image_exact");
    return o || el(Yl, r);
  }
  function gu(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let c = 0; c < o.length; c += 1)
      s ^= o.charCodeAt(c), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function zr(r, o, s) {
    const c = Math.max(1, Number(o || 1)), h = Math.max(1, Number(s || 1)), m = G(Number(r || 30), 0.1, 179) * Ft, b = 2 * Math.atan(Math.tan(m * 0.5) * (h / c));
    return G(b * Sn, 0.1, 179);
  }
  function mp(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const c = s.version;
      let h = null;
      if (typeof c == "number" && Number.isInteger(c) ? h = c : typeof c == "string" && /^\d+$/.test(c) && (h = Number.parseInt(c, 10)), h !== 1) return null;
      const m = s.pose;
      if (!m || typeof m != "object") return null;
      const b = Number(m.yaw_deg), g = Number(m.pitch_deg), x = Number(m.roll_deg), M = Number(m.hFOV_deg);
      if (![b, g, x, M].every((z) => Number.isFinite(z))) return null;
      let P = ((b + 180) % 360 + 360) % 360 - 180;
      Object.is(P, -0) && (P = 0);
      const N = {
        yaw_deg: P,
        pitch_deg: G(g, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: G(M, 0.1, 179)
      }, T = Number(s.source_aspect);
      return Number.isFinite(T) && T > 0 && (N.source_aspect = T), N;
    } catch {
      return null;
    }
  }
  function bu(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Qo(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(o) ? o : 0),
        pitch_deg: G(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: G(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function pp(r) {
    var g;
    if (!r || typeof r != "object") return bu(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Number(r == null ? void 0 : r.vFOV_deg);
    let b = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const x = G(h, 0.1, 179) * Ft, M = G(m, 0.1, 179) * Ft, P = Math.tan(M * 0.5);
      if (Math.abs(P) > 1e-6) {
        const N = Math.tan(x * 0.5) / P;
        Number.isFinite(N) && N > 0 && (b = N);
      }
    }
    if (r != null && r.asset_id && ((g = v == null ? void 0 : v.assets) != null && g[r.asset_id])) {
      const x = v.assets[r.asset_id], M = Number((x == null ? void 0 : x.w) || 0), P = Number((x == null ? void 0 : x.h) || 0);
      M > 0 && P > 0 && (b = M / P);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(o) ? o : 0),
        pitch_deg: G(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: G(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: b
    };
  }
  function gp(r) {
    var c, h, m, b, g;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((x) => String((x == null ? void 0 : x.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const x = $m(e.graph, s), { originId: M, originSlot: P } = zm(x), N = Aa(M), T = [
        N == null ? void 0 : N.output,
        N == null ? void 0 : N.result,
        (c = N == null ? void 0 : N.data) == null ? void 0 : c.output,
        (h = N == null ? void 0 : N.data) == null ? void 0 : h.result,
        (m = N == null ? void 0 : N.ui) == null ? void 0 : m.output,
        (b = N == null ? void 0 : N.ui) == null ? void 0 : b.result
      ];
      for (const z of T) {
        if (!Array.isArray(z)) continue;
        const q = Number(P || 0), B = z[q];
        if (typeof B == "string" && B.trim()) return B;
      }
    }
    return String(((g = Nn(e, r)) == null ? void 0 : g.value) || "");
  }
  function bp(r, o, s) {
    const c = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : mp(o);
    if (c) {
      const b = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || c.source_aspect || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: zr(c.hFOV_deg, b, g),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), m = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(u.viewYaw || 0),
      pitch_deg: Number(u.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: zr(30, h, m),
      rot_deg: 0
    };
  }
  function yu(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((z) => String((z == null ? void 0 : z.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, c = pu(() => {
      var z;
      (z = e.__panoExternalStickerSync) == null || z.call(e, "image-loaded");
    }), h = hp(du("pano_sticker_input_pose"), null), m = gp("sticker_state"), b = gu(h && typeof h == "object" ? JSON.stringify(h) : m), g = Array.isArray(v.stickers) ? v.stickers : v.stickers = [], x = g.findIndex((z) => String((z == null ? void 0 : z.id) || "") === Wr);
    if (s == null) {
      x >= 0 && (g.splice(x, 1), u.selectedId === Wr && (u.selectedId = null, u.selectedIds = [], v.active.selected_sticker_id = null), it(), Ve(), Ge(), fe());
      return;
    }
    const M = g.reduce((z, q) => Math.max(z, Number((q == null ? void 0 : q.z_index) || 0)), -1);
    let P = x >= 0 ? g[x] : null;
    const N = !P || Number(P.source_link_id ?? -1) !== Number(s) || String(P.source_state_hash || "") !== b;
    P || (P = {
      id: Wr,
      source_kind: Wl
    }, g.push(P)), P.id = Wr, P.source_kind = Wl, P.source_link_id = Number(s), P.source_state_hash = b, P.visible = P.visible !== !1;
    let T = !1;
    if (N) {
      const z = bp(h, m, c);
      Object.assign(P, z, {
        initial_pose: { ...z },
        visible: !0,
        z_index: M + 1
      }), T = !0;
    } else if (c && (c.complete || c.naturalWidth || c.width)) {
      const z = zr(
        Number(P.hFOV_deg || 30),
        Number(c.naturalWidth || c.width || 1),
        Number(c.naturalHeight || c.height || 1)
      );
      Math.abs(Number(P.vFOV_deg || 0) - z) > 1e-6 && (P.vFOV_deg = z, T = !0);
    }
    T && (it(), Ve(), Ge()), fe();
  }
  function Qi(r = {}) {
    const s = r.preservePanelValues !== !1 ? bt() : null;
    s && (u.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Pi(s)
    }), u.selectedId = null, u.selectedIds = [], u.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function yp() {
    if (t !== "cutout") return;
    const r = Fe();
    r && (u.selectedId = String(r.id || "") || null, u.selectedIds = u.selectedId ? [u.selectedId] : []);
  }
  function tl() {
    if (t !== "cutout") return;
    const r = Fe();
    Ai(k.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? Oe.camera : Oe.plus_circle
    });
  }
  function vu() {
    const r = t === "cutout" && u.mode === "frame", o = !r && !!u.showGrid;
    Ai(k.floatingButtons, "action", "reset-view", {
      disabled: i || r
    }), Ai(k.floatingButtons, "action", "toggle-grid", {
      icon: o ? Oe.eye : Oe.eye_dashed,
      pressed: o ? "true" : "false",
      label: o ? "Hide Grid" : "Show Grid",
      tip: o ? "Hide grid" : "Show grid",
      disabled: i || r
    });
  }
  function xr() {
    var s;
    const r = !!Fe();
    u.mode === "frame" && !r && (u.mode = "pano"), u.outputPreviewRect = null, k.viewButtons.forEach((c) => {
      const h = c.key === u.mode;
      c.pressed = h ? "true" : "false", c.visible = !(c.key === "frame" && t !== "cutout"), c.disabled = c.key === "frame" ? !r : !1;
    });
    const o = t === "cutout" && u.mode === "frame" ? Fe() : null;
    k.frameRail.visible = !!o, k.frameRail.disabled = i, k.frameRollKnob.visible = !!o && !i, k.frameRollKnob.disabled = i, k.frameRollKnob.rollDeg = Number((o == null ? void 0 : o.roll_deg) ?? (o == null ? void 0 : o.rot_deg) ?? 0), k.frameRollKnob.displayValue = ma(k.frameRollKnob.rollDeg), k.frameRollKnob.dragging = ((s = u.interaction) == null ? void 0 : s.kind) === "roll_frame", k.frameRollKnob.armed = !!o && u.altModifier === !0, k.frameRail.rollKnob = k.frameRollKnob, k.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((c) => ({
      value: c,
      label: c,
      active: !!o && String(Pi(o)) === c
    })), o || (k.frameRail.aspectOpen = !1), k.outputPreviewToggle.visible = t === "cutout" && u.mode !== "frame" && !!Fe(), t === "cutout" && k.cameraPreview && (k.cameraPreview.visible = u.mode !== "frame", k.cameraPreview.expanded = !!u.outputPreviewExpanded, k.cameraPreview.settled = k.cameraPreview.settled === !0 && oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame), vu(), Qu() ? ct(u.pointerPos) : We(u.mode === "pano" ? "grab" : "default");
  }
  function vp() {
    const o = ku({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function nl() {
    const r = jn(u.viewYaw, u.viewPitch);
    let o = qn(0, 1, 0);
    Math.abs(On(r, o)) > 0.999 && (o = qn(0, 0, 1));
    const s = Ci($o(o, r)), c = Ci($o(r, s));
    return { right: s, up: c, fwd: r };
  }
  function ea(r) {
    const { right: o, up: s, fwd: c } = nl(), h = On(r, o), m = On(r, s), b = On(r, c);
    if (b <= 1e-5) return null;
    const g = F.width, x = F.height, M = u.viewFov * Ft, P = 2 * Math.atan(Math.tan(M / 2) * (x / g)), N = g / 2 / Math.tan(M / 2), T = x / 2 / Math.tan(P / 2);
    return {
      x: g / 2 + h / b * N,
      y: x / 2 - m / b * T,
      z: b
    };
  }
  function rl(r, o) {
    const { right: s, up: c, fwd: h } = nl(), m = F.width, b = F.height, g = u.viewFov * Ft, x = 2 * Math.atan(Math.tan(g / 2) * (b / m)), M = (r - m / 2) / (m / 2) * Math.tan(g / 2), P = (b / 2 - o) / (b / 2) * Math.tan(x / 2), N = Fo(Fo(Lo(s, M), Lo(c, P)), h);
    return Ci(N);
  }
  function wr() {
    const r = F.width, o = F.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const g = o, x = g * s;
      return { x: (r - x) * 0.5, y: 0, w: x, h: g };
    }
    const h = r, m = h / s;
    return { x: 0, y: (o - m) * 0.5, w: h, h: m };
  }
  function _u(r) {
    var b;
    if (r && typeof r == "object" && (Ut(r) || r.external === !0))
      return pu(() => {
        var g;
        (g = e.__panoExternalStickerSync) == null || g.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = ge.get(o);
    if (s) return s;
    const c = (b = v.assets) == null ? void 0 : b[o], h = bS(c);
    if (!h) return null;
    const m = new Image();
    return $a(m, h), m.onload = () => {
      za(m, h), fe();
    }, m.onerror = () => {
      oi(m, h), fe();
    }, m.src = h, ge.set(o, m), m;
  }
  function xu(r, o = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = Se.get(s);
    if (c)
      return c.complete || c.width || c.naturalWidth, c;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = s, Se.set(s, h), h;
  }
  function _p(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = Ie.get(o);
    if (s) return s.ready ? s : null;
    const c = xu(r, () => {
      const P = Ie.get(o);
      P && (P.ready = !1), fe({ localOnly: !0 });
    });
    if (!c || !(c.complete || c.width || c.naturalWidth)) return null;
    const h = Number(c.naturalWidth || c.width || 0), m = Number(c.naturalHeight || c.height || 0);
    if (h < 1 || m < 1) return null;
    const b = document.createElement("canvas");
    b.width = h, b.height = m;
    const g = b.getContext("2d", { willReadFrequently: !0 });
    if (!g) return null;
    g.clearRect(0, 0, h, m), g.drawImage(c, 0, 0, h, m);
    const x = g.getImageData(0, 0, h, m).data, M = { canvas: b, width: h, height: m, alpha: x, ready: !0 };
    return Ie.set(o, M), M;
  }
  function xp(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), b = xn(Number(r.u || 0), h), g = Number(r.v || 0) - m, x = Math.max(0.02, Number(s || 1)), M = Number(c || 0) * Ft, P = Math.cos(M), N = Math.sin(M), T = b / x, z = g / x, q = T * P + z * N, B = -T * N + z * P;
    return {
      ...r,
      u: ((h + q) % 1 + 1) % 1,
      v: m + B
    };
  }
  function wp(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const c = (r == null ? void 0 : r.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(c.dv || 0)
    }, b = xp(
      m,
      h,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), g = Number(s.u1 || 0) - Number(s.u0 || 0), x = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(g > 1e-6) || !(x > 1e-6)) return null;
    const M = xn(Number(b.u || 0), Number(s.u0 || 0)) / g, P = (Number(b.v || 0) - Number(s.v0 || 0)) / x;
    if (M < 0 || M > 1 || P < 0 || P > 1) return 0;
    const N = _p(r);
    if (!N) return null;
    const T = G(Math.floor(M * N.width), 0, N.width - 1), z = G(Math.floor(P * N.height), 0, N.height - 1);
    return Number(N.alpha[(z * N.width + T) * 4 + 3] || 0);
  }
  function wu(r, o, s, c = null) {
    if (!(o != null && o.visible) || !lr(s, o.corners)) return !1;
    const h = c || Dn(s, performance.now()), m = wp(r, h);
    return m === null ? !0 : m > 8;
  }
  function Sp() {
    var c, h, m, b, g, x, M, P;
    const r = ((h = (c = u.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : h.call(c, Bs(!1))) || null, o = Math.max(1, Number(((m = r == null ? void 0 : r.descriptor) == null ? void 0 : m.width) || ((g = (b = r == null ? void 0 : r.displayPaint) == null ? void 0 : b.canvas) == null ? void 0 : g.width) || 2048)), s = Math.max(1, Number(((x = r == null ? void 0 : r.descriptor) == null ? void 0 : x.height) || ((P = (M = r == null ? void 0 : r.displayPaint) == null ? void 0 : M.canvas) == null ? void 0 : P.height) || 1024));
    return { width: o, height: s };
  }
  function Mp() {
    var z, q, B;
    const r = u.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = pn(), c = `${Ya()}:${s.width}:${s.height}`;
    if (((z = u._activePaintEraserPreviewInfo) == null ? void 0 : z.cacheKey) === c)
      return u._activePaintEraserPreviewInfo.value || null;
    const h = Jt(o), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Y = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = fl(Y, h.targetSpace, !0);
    }
    const b = na(s.width, s.height, { readback: !0 });
    if (!zu(b, h, { w: s.width, h: s.height })) return null;
    const g = ((B = (q = b.ctx) == null ? void 0 : q.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!g) return null;
    let x = s.width, M = s.height, P = -1, N = -1;
    for (let Y = 0; Y < s.height; Y += 1)
      for (let re = 0; re < s.width; re += 1)
        g[(Y * s.width + re) * 4 + 3] <= 8 || (re < x && (x = re), Y < M && (M = Y), re > P && (P = re), Y > N && (N = Y));
    if (P < x || N < M)
      return u._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const T = {
      surface: b,
      bounds: { minX: x, minY: M, maxX: P, maxY: N },
      key: `${c}:${x}:${M}:${P}:${N}`
    };
    return u._activePaintEraserPreviewInfo = { cacheKey: c, value: T }, u._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), T;
  }
  function bi() {
    u._activePaintEraserPreviewInfo = null, u._liveEraserPreviewCanvasCache = null;
  }
  function Np(r, o, s) {
    var c, h;
    if (!r) return null;
    if (r.type === "rasterObject" && ((c = r.item) != null && c.bbox)) {
      const m = r.item.bbox, b = ((h = r.item) == null ? void 0 : h.transform) || {}, g = Number(m.u0 || 0) + Number(b.du || 0), x = Number(m.u1 || 0) + Number(b.du || 0), M = Number(m.v0 || 0) + Number(b.dv || 0), P = Number(m.v1 || 0) + Number(b.dv || 0);
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(G(M, 0, 1) * s),
        maxY: Math.ceil(G(P, 0, 1) * s),
        wraps: x - g >= 1 || g < 0 || x > 1
      };
    }
    if (r.type === "strokeGroup") {
      const m = Cn(r.actionGroupId, "paint"), b = _r(r.actionGroupId, "paint", m);
      if (!b) return null;
      const g = b.centerUv.u - b.halfW, x = b.centerUv.u + b.halfW, M = b.centerUv.v - b.halfH, P = b.centerUv.v + b.halfH;
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((x % 1 + 1) % 1 * o),
        minY: Math.floor(G(M, 0, 1) * s),
        maxY: Math.ceil(G(P, 0, 1) * s),
        wraps: x - g >= 1 || g < 0 || x > 1
      };
    }
    return null;
  }
  function kp(r, o, s) {
    if (!r || !o) return !1;
    const c = (b) => b.wraps ? [
      { minX: 0, maxX: b.maxX, minY: b.minY, maxY: b.maxY, wraps: !1 },
      { minX: b.minX, maxX: s - 1, minY: b.minY, maxY: b.maxY, wraps: !1 }
    ] : [b], h = c(r), m = c(o);
    return h.some((b) => m.some((g) => !(b.maxX < g.minX || g.maxX < b.minX || b.maxY < g.minY || g.maxY < b.minY)));
  }
  function Pp(r, o, s) {
    var be, Ee, Le, Ke, de, Z, ue;
    if (!r || !o || !((be = s == null ? void 0 : s.surface) != null && be.canvas) || o.type !== "rasterObject") return r;
    const c = Number(r.width || s.surface.canvas.width || 0), h = Number(r.height || s.surface.canvas.height || 0);
    if (c < 1 || h < 1) return r;
    const m = Np(o, c, h);
    if (m && !kp(m, s.bounds, c)) return r;
    const b = String(((Ee = o.item) == null ? void 0 : Ee.id) || o.id || ""), g = ((Le = o.item) == null ? void 0 : Le.transform) || {}, x = `${s.key}:${b}:${c}:${h}:${Number(g.du || 0).toFixed(6)}:${Number(g.dv || 0).toFixed(6)}:${Number(g.rot_deg || 0).toFixed(3)}:${Number(g.scale || 1).toFixed(4)}`, M = u._liveEraserPreviewCanvasCache instanceof Map ? u._liveEraserPreviewCanvasCache : u._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (M.has(x)) return M.get(x);
    const P = G(Math.floor(Number(((Ke = s.bounds) == null ? void 0 : Ke.minX) || 0)), 0, Math.max(0, c - 1)), N = G(Math.floor(Number(((de = s.bounds) == null ? void 0 : de.minY) || 0)), 0, Math.max(0, h - 1)), T = G(Math.ceil(Number(((Z = s.bounds) == null ? void 0 : Z.maxX) || 0)), P, Math.max(0, c - 1)), z = G(Math.ceil(Number(((ue = s.bounds) == null ? void 0 : ue.maxY) || 0)), N, Math.max(0, h - 1)), q = Math.max(1, T - P + 1), B = Math.max(1, z - N + 1), Y = na(c, h, { readback: !0 });
    Y.ctx.clearRect(0, 0, c, h), Y.ctx.drawImage(r, 0, 0);
    const re = Y.ctx.getImageData(P, N, q, B);
    Y.ctx.save(), Y.ctx.globalCompositeOperation = "destination-out", Y.ctx.drawImage(s.surface.canvas, 0, 0), Y.ctx.restore();
    const le = Y.ctx.getImageData(P, N, q, B);
    let ee = !1;
    for (let Ce = 0; Ce < q * B; Ce += 1) {
      const Ae = re.data[Ce * 4 + 3], Ne = le.data[Ce * 4 + 3];
      if (Ae > Ne) {
        ee = !0;
        break;
      }
    }
    return ee ? (M.size > 64 && M.clear(), M.set(x, Y.canvas), Y.canvas) : (M.set(x, r), r);
  }
  function Su(r, o = null) {
    const s = zt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), c = (r == null ? void 0 : r.bbox) || null;
    if (!s || !c) return null;
    const h = xu(r, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: b } = Sp(), g = (r == null ? void 0 : r.transform) || {}, x = [
      s,
      m,
      b,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
      g.du,
      g.dv,
      g.rot_deg,
      g.scale,
      ra()
    ].join(":"), M = Re.get(x);
    if (M) return M;
    Re.size > 64 && Re.clear();
    const P = document.createElement("canvas");
    P.width = m, P.height = b;
    const N = P.getContext("2d");
    if (!N) return null;
    const T = Number(c.u0 || 0) * m, z = Number(c.v0 || 0) * b, q = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * m), B = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * b), Y = T + q * 0.5 + Number(g.du || 0) * m, re = z + B * 0.5 + Number(g.dv || 0) * b, le = Number(g.rot_deg || 0) * Ft, ee = Math.max(0.01, Number(g.scale || 1));
    for (const be of [-m, 0, m])
      N.save(), N.translate(Y + be, re), N.rotate(le), N.scale(ee, ee), N.drawImage(h, -q * 0.5, -B * 0.5, q, B), N.restore();
    return Re.set(x, P), P;
  }
  function Ap() {
    return Ls(v, {
      selectedId: u.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Cp(r) {
    return fm(
      v,
      (o, s, c) => _u(c || o),
      { scene: r }
    );
  }
  function Mu(r, o, s, c, h = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const m = Sr(c);
    if (Tu(o, s))
      return $p(
        o,
        s,
        m && u.showPanorama ? c : null,
        `${h}_bg_gl`
      );
    const g = to(), x = no(g), M = u.showObjects ? ro() : ta([]), N = ba({
      stateRevision: [
        h,
        m ? mi(c) : "no_bg",
        Array.isArray(x) ? x.map((B) => `${String((B == null ? void 0 : B.assetId) || "")}:${String((B == null ? void 0 : B.revision) || "")}`).join(",") : "none",
        M.length ? M.map((B) => `${String((B == null ? void 0 : B.id) || "")}:${String((B == null ? void 0 : B.revision) || "")}:${Number((B == null ? void 0 : B.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && u.showPanorama ? c : null,
      backgroundRevision: m ? `${h}:${mi(c)}` : "",
      coverageDeg: Kt(v.coverage),
      scene: g,
      textures: x,
      paintSource: null,
      paintRevision: "",
      rasterEntries: M,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), T = we;
    if (!T.syncState(N)) return !1;
    const q = T.renderToTarget(`${h}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return q ? (r.drawImage(q, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function il(r, o = "sticker.png") {
    const s = new FormData();
    s.append("image", r), s.append("type", "input"), s.append("subfolder", "panorama_stickers");
    const c = await on.fetchApi("/upload/image", { method: "POST", body: s });
    if (!c || c.status !== 200)
      throw new Error(`upload failed (${(c == null ? void 0 : c.status) || "no-response"})`);
    const h = await c.json(), m = String((h == null ? void 0 : h.name) || "").trim();
    if (!m)
      throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: m,
      subfolder: String((h == null ? void 0 : h.subfolder) || "panorama_stickers"),
      storage: String((h == null ? void 0 : h.type) || "input"),
      name: String((r == null ? void 0 : r.name) || o)
    };
  }
  async function al(r, o) {
    const s = await new Promise((g) => r.toBlob(g, "image/png")), c = new FormData();
    c.append("image", s, o), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const h = await on.fetchApi("/upload/image", { method: "POST", body: c });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), b = String((m == null ? void 0 : m.name) || "").trim();
    if (!b) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: b,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Za = null, Qa = !1;
  function Tp() {
    const r = Wd(v.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = v.painting_layer, s = _i();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Nu() {
    const r = String(e.id ?? "0"), o = Eo.get(r);
    if (Qa && o) return o;
    const s = (async () => {
      var m, b, g, x, M, P, N, T, z, q, B, Y;
      const c = _i(), h = Wd(v.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, Za = c, gn());
        return;
      }
      if (Za !== c && !Qa) {
        Qa = !0;
        try {
          so();
          const re = Bs(!1), le = ((b = (m = u.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : b.call(m, re)) || null, ee = ((g = le == null ? void 0 : le.displayPaint) == null ? void 0 : g.canvas) || null, be = ((x = le == null ? void 0 : le.committedMask) == null ? void 0 : x.canvas) || null, Ee = Math.max(1, Number(((M = le == null ? void 0 : le.descriptor) == null ? void 0 : M.width) || (ee == null ? void 0 : ee.width) || (be == null ? void 0 : be.width) || 2048)), Le = Math.max(1, Number(((P = le == null ? void 0 : le.descriptor) == null ? void 0 : P.height) || (ee == null ? void 0 : ee.height) || (be == null ? void 0 : be.height) || 1024));
          (!ee && h.totalPaintCount > 0 || !be && h.totalMaskCount > 0) && ((!u._paintLayerSyncBlankSurface || Number(((N = u._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== Ee || Number(((T = u._paintLayerSyncBlankSurface.canvas) == null ? void 0 : T.height) || 0) !== Le) && (u._paintLayerSyncBlankSurface = na(Ee, Le)), u._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ee, Le));
          const Ke = ee || h.totalPaintCount > 0 && ((z = u._paintLayerSyncBlankSurface) == null ? void 0 : z.canvas) || null, de = be || h.totalMaskCount > 0 && ((q = u._paintLayerSyncBlankSurface) == null ? void 0 : q.canvas) || null;
          if (!Ke && !de) return;
          let Z = null, ue = null;
          const Ce = [];
          if (h.totalPaintCount > 0) {
            Z = await al(Ke, `pano_paint_${r}.png`);
            for (const Ae of re) {
              const Ne = String(Ae || "").trim();
              if (!Ne) continue;
              const je = ((Y = (B = u.paintEngine) == null ? void 0 : B.getGroupDisplayCanvas) == null ? void 0 : Y.call(B, Ne)) || null;
              if (!je) continue;
              const qe = Ne.replace(/[^a-zA-Z0-9_-]+/g, "_"), He = await al(je, `pano_group_${r}_${qe}.png`);
              He && Ce.push({
                id: Ne,
                actionGroupId: Ne,
                image: He
              });
            }
          }
          h.totalMaskCount > 0 && (ue = await al(de, `pano_mask_${r}.png`)), c === _i() && (v.painting_layer = {
            paint: Z,
            mask: ue,
            groups: Ce,
            revision: c
          }, Za = c, gn());
        } catch (re) {
          throw re;
        } finally {
          Qa = !1;
        }
      }
    })();
    return Eo.set(r, s), s.finally(() => {
      Eo.get(r) === s && Eo.delete(r);
    }), s;
  }
  function jr() {
    if (t === "cutout") {
      const g = mu();
      if (g) return g;
      const x = Uo(
        e,
        ["erp_image", "bg_erp"],
        () => fe(),
        "background:cutout:erp_image|bg_erp"
      );
      return x && !Kl(x) ? x : qd(e, "pano_input_images", ge, () => fe()) || x || null;
    }
    const r = mu();
    if (r) return r;
    const o = qd(e, "pano_input_images", ge, () => fe());
    if (o && !Kl(o)) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((g) => String((g == null ? void 0 : g.name) || "")) : [], c = s.includes("erp_image"), h = s.includes("bg_erp");
    let m = [];
    return i && (c || h) ? m = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Uo(e, m, () => fe(), `background:${m.join("|")}`) || o || null;
  }
  function Sr(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Ip() {
    let r = Yi;
    const o = [];
    if (u.showPanorama) {
      const s = jr();
      r = Sc(s, Sr);
    }
    if (u.showObjects) {
      const s = Array.isArray(v.stickers) ? v.stickers : [];
      for (const c of s) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const h = _u(c);
        o.push(Sc(h, Sr));
      }
    }
    return Fw({
      presented: oe.hasPresentedFrame,
      background: r,
      stickers: o
    });
  }
  function yi() {
    const r = new Set(
      (v.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(v.assets || {}).forEach((o) => {
      r.has(o) || (delete v.assets[o], ge.delete(o));
    });
  }
  function ol(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(G(r.y, -1, 1))
    };
  }
  function sl(r, o = null) {
    const { lon: s, lat: c } = ol(r), h = wr();
    let m = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const b = h.y + (0.5 - c / Math.PI) * h.h;
    if (o !== null) {
      for (; m - o > h.w / 2; ) m -= h.w;
      for (; m - o < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: b, z: 1 };
  }
  function eo(r) {
    const o = jn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = qn(0, 1, 0);
    Math.abs(On(o, s)) > 0.999 && (s = qn(0, 0, 1));
    const c = Ci($o(s, o)), h = Ci($o(o, c)), m = Math.tan(G(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Ft), b = Math.tan(G(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Ft), g = Number(r.rot_deg || r.roll_deg || 0) * Ft, x = Math.cos(g), M = Math.sin(g);
    return {
      centerDir: o,
      right: c,
      up: h,
      tanX: m,
      tanY: b,
      cr: x,
      sr: M
    };
  }
  function Mr(r, o, s) {
    const c = o * r.cr - s * r.sr, h = o * r.sr + s * r.cr;
    return Ci(Fo(Fo(r.centerDir, Lo(r.right, c)), Lo(r.up, h)));
  }
  function ku(r) {
    const o = eo(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: h }) => Mr(o, c * o.tanX, h * o.tanY));
  }
  function Pu(r, o, s) {
    const c = eo(r), h = (o * 2 - 1) * c.tanX, m = (1 - s * 2) * c.tanY;
    return Mr(c, h, m);
  }
  function Au(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: G((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Dp(r) {
    var x, M, P, N;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((x = r == null ? void 0 : r.transform) == null ? void 0 : x.scale) || 1)), h = Number(((M = r == null ? void 0 : r.transform) == null ? void 0 : M.rot_deg) || 0), m = Number(((P = r == null ? void 0 : r.transform) == null ? void 0 : P.du) || 0), b = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((T) => qa(Xa(T, s, c, h), m, b));
  }
  function Ep(r) {
    const o = zt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, c = (r == null ? void 0 : r.bbox) || {}, h = `${o}:${u.mode}:${ra()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (u.mode === "frame") {
      const m = Fe(), b = m ? Rt(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((b == null ? void 0 : b.x) || 0))}:${Math.round(Number((b == null ? void 0 : b.y) || 0))}:${Math.round(Number((b == null ? void 0 : b.w) || 0))}:${Math.round(Number((b == null ? void 0 : b.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((F == null ? void 0 : F.width) || 0))}:${Math.round(Number((F == null ? void 0 : F.height) || 0))}`;
  }
  function Op(r) {
    const o = String((r == null ? void 0 : r.id) || ""), c = [
      mn(r) ? "frame" : gt(r) ? "sticker" : "item",
      o,
      u.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      Pi(r)
    ].join(":");
    if (u.mode === "frame") {
      const h = Fe(), m = h ? Rt(h) : null;
      return `${c}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${c}:view:${Math.round(Number(u.viewYaw || 0) * 100)}:${Math.round(Number(u.viewPitch || 0) * 100)}:${Math.round(Number(u.viewFov || 0) * 100)}:${Math.round(Number((F == null ? void 0 : F.width) || 0))}:${Math.round(Number((F == null ? void 0 : F.height) || 0))}`;
  }
  function Rp() {
    var o;
    const r = String(((o = v.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? u.hqFrames && u.hqFrames > 0 ? [28, 20] : u.interaction ? [12, 9] : [20, 14] : r === "high" ? u.hqFrames && u.hqFrames > 0 ? [48, 36] : u.interaction ? [20, 14] : [36, 26] : u.hqFrames && u.hqFrames > 0 ? [40, 30] : u.interaction ? [16, 12] : [28, 20];
  }
  function Cu() {
    var r;
    return !!J && !!((r = we == null ? void 0 : we.isSupported) != null && r.call(we));
  }
  function Tu(r, o) {
    return !Cu() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((F == null ? void 0 : F.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((F == null ? void 0 : F.height) || 0));
  }
  function to() {
    return u.showObjects ? Ap() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function no(r) {
    return !u.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Cp(r);
  }
  function Iu() {
    var r, o;
    return ((o = (r = u.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function Fp() {
    return Iu() ? `${dl()}:mask_display` : "";
  }
  function ta(r) {
    if (!u.showMask) return r;
    const o = Iu();
    if (!o) return r;
    const s = Fp(), c = r.reduce((b, g) => Math.max(b, Number((g == null ? void 0 : g.zIndex) || 0)), -1), h = (Array.isArray(v.stickers) ? v.stickers : []).reduce((b, g) => Math.max(b, Number((g == null ? void 0 : g.z_index) || 0)), -1), m = Math.max(c, h);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function ro() {
    var c, h;
    const r = Gs(!0), o = Mp(), s = [];
    for (const m of r) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const b = String(m.actionGroupId || m.id || "");
        if (!b) continue;
        const g = ((h = (c = u.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : h.call(c, b)) || null;
        if (!g) continue;
        s.push({
          id: `paint_group:${b}`,
          source: g,
          revision: `${dl()}:${b}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const b = m.item || null, g = zt((b == null ? void 0 : b.id) || m.id || "");
        if (!g) continue;
        const x = Su(b, () => fe());
        if (!x) continue;
        const M = Pp(x, m, o), P = (b == null ? void 0 : b.transform) || {};
        s.push({
          id: `raster:${g}`,
          source: M,
          revision: [
            _i(),
            (o == null ? void 0 : o.key) || "",
            g,
            Number(P.du || 0).toFixed(6),
            Number(P.dv || 0).toFixed(6),
            Number(P.rot_deg || 0).toFixed(3),
            Number(P.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (b == null ? void 0 : b.visible) !== !1
        });
      }
    }
    return ta(s);
  }
  function Lp(r, o = "modal_bg_gl") {
    const s = to(), c = no(s), h = Sr(r), m = h ? mi(r) : "none", b = u.showObjects ? ro() : ta([]), g = null, x = [
      o,
      m,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((M) => String((M == null ? void 0 : M.id) || "")).join(",") : "none",
      Array.isArray(c) ? c.map((M) => `${String((M == null ? void 0 : M.assetId) || "")}:${String((M == null ? void 0 : M.revision) || "")}`).join(",") : "none",
      b.length ? b.map((M) => `${String((M == null ? void 0 : M.id) || "")}:${String((M == null ? void 0 : M.revision) || "")}:${Number((M == null ? void 0 : M.zIndex) || 0)}`).join(",") : "paint:none",
      u.showPanorama ? "panorama:1" : "panorama:0",
      u.showObjects ? "objects:1" : "objects:0",
      u.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: ba({
        stateRevision: x,
        backgroundSource: h ? r : null,
        backgroundRevision: h ? `${o}:${m}` : "",
        coverageDeg: Kt(v.coverage),
        scene: s,
        textures: c,
        paintSource: g,
        paintRevision: "",
        rasterEntries: b,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || c.length > 0 || b.length > 0
    };
  }
  function ll() {
    if (!J) return;
    const r = J.getContext("webgl2");
    if (r)
      r.viewport(0, 0, J.width, J.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = J.getContext("2d");
      o && (o.clearRect(0, 0, J.width, J.height), o.fillStyle = "#070707", o.fillRect(0, 0, J.width, J.height));
    }
    oe.backgroundWasVisible = !1, oe.backgroundDirty = !1;
  }
  function $p(r, o, s, c = "modal_bg_gl") {
    var M;
    if (!Tu(r, o)) return !1;
    if (!oe.backgroundDirty && oe.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = Lp(s, c);
    if (!m || !we.syncState(h))
      return ll(), !1;
    const g = we.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), x = (M = J == null ? void 0 : J.getContext) == null ? void 0 : M.call(J, "2d");
    return !g || !x ? (ll(), !1) : (x.clearRect(0, 0, J.width, J.height), x.drawImage(g, 0, 0, J.width, J.height), oe.backgroundWasVisible = !0, oe.backgroundDirty = !1, !0);
  }
  function zp(r = !1) {
    const o = F.width, s = F.height, c = wr();
    if (C.globalAlpha = 1, C.lineWidth = 1, r || (C.fillStyle = "#070707", C.fillRect(0, 0, o, s), C.fillStyle = "#070707", C.fillRect(c.x, c.y, c.w, c.h)), so(), Mu(
      C,
      { x: c.x, y: c.y, w: c.w, h: c.h },
      { mode: "unwrap" },
      jr(),
      "modal_unwrap"
    ), u.showGrid && !u.fullscreen) {
      C.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const b = c.x + c.w * m / 16;
        C.beginPath(), C.moveTo(b, c.y), C.lineTo(b, c.y + c.h), C.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const b = c.y + c.h * m / 8;
        C.beginPath(), C.moveTo(c.x, b), C.lineTo(c.x + c.w, b), C.stroke();
      }
      C.strokeStyle = "rgba(250, 250, 250, 0.86)", C.lineWidth = 1.2, C.beginPath(), C.moveTo(c.x, c.y + c.h / 2), C.lineTo(c.x + c.w, c.y + c.h / 2), C.stroke(), C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center";
      const h = c.y + c.h * 0.57;
      C.fillText("Left", c.x + c.w * 0.25, h), C.fillText("Front", c.x + c.w * 0.5, h), C.fillText("Right", c.x + c.w * 0.75, h), C.fillText("Back", c.x + 38, h), C.fillText("Back", c.x + c.w - 38, h);
    }
  }
  function Du(r, o, s = 1) {
    let c = !1;
    C.strokeStyle = o, C.lineWidth = s, C.beginPath();
    for (const h of r) {
      const m = ea(h);
      if (!m) {
        c = !1;
        continue;
      }
      c ? C.lineTo(m.x, m.y) : (C.moveTo(m.x, m.y), c = !0);
    }
    C.stroke();
  }
  function jp(r = !1) {
    const o = F.width, s = F.height;
    if (r || (Cu() ? C.clearRect(0, 0, o, s) : (C.fillStyle = "#070707", C.fillRect(0, 0, o, s))), so(), Mu(
      C,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: u.viewYaw,
        pitchDeg: u.viewPitch,
        fovDeg: u.viewFov,
        coverageDeg: Kt(v.coverage)
      },
      jr(),
      "modal_pano"
    ), u.showGrid && !u.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let b = -89; b <= 89; b += 4) m.push(jn(h, b));
        Du(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let b = -180; b <= 180; b += 4) m.push(jn(b, h));
        Du(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: jn(-90, 0) },
        { name: "Front", dir: jn(0, 0) },
        { name: "Right", dir: jn(90, 0) },
        { name: "Back", dir: jn(180, 0) }
      ];
      C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center", c.forEach((h) => {
        const m = ea(h.dir);
        m && C.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function Vp(r, o = null, s = null, c = null) {
    if (u.mode === "frame") {
      const h = o || Fe();
      if (!h) return [];
      const m = s || Rt(h);
      return wg(r, h, m);
    }
    return ju(r, c);
  }
  function io(r, o = null, s = null, c = null, h = null) {
    if (!r) return null;
    if (u.mode === "unwrap") {
      const b = ju([r], h);
      return b[0] ? { x: b[0].x, y: b[0].y, z: 1 } : null;
    }
    const m = vi(r);
    return m ? ir(m, o, s, c) : null;
  }
  function Hp(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), c = Cn(s, r.layerKind), h = _r(s, r.layerKind, c), m = (h == null ? void 0 : h.centerUv) || Ws(s, r.layerKind, c), b = u.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, g = [], x = u.mode === "frame" ? Fe() : null, M = x ? Rt(x) : null;
    for (const ee of c) {
      const be = (ee == null ? void 0 : ee.geometry) || null, Ee = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], Le = Vp(Ee, x, M, b).filter((Z) => Number.isFinite(Z == null ? void 0 : Z.x) && Number.isFinite(Z == null ? void 0 : Z.y));
      if (!Le.length) continue;
      const Ke = kr(String((ee == null ? void 0 : ee.toolKind) || "pen")), de = un[Ke] || un[sr];
      g.push({
        points: Le,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ee == null ? void 0 : ee.size) || 10) * Math.max(0.1, Number((de == null ? void 0 : de.sizeScale) ?? 1)) + 10),
        layerKind: String((ee == null ? void 0 : ee.layerKind) || r.layerKind || "paint")
      });
    }
    const P = io(m, null, x, M, b);
    if (!P) {
      const ee = { visible: !1, kind: "strokeGroup" };
      return u._strokeGeomCache.set(o, ee), ee;
    }
    const T = Km(h).map((ee) => io(ee, P.x, x, M, b)).filter((ee) => Number.isFinite(ee == null ? void 0 : ee.x) && Number.isFinite(ee == null ? void 0 : ee.y)).map((ee) => ({ x: Number(ee.x || 0), y: Number(ee.y || 0) }));
    if (T.length < 4) {
      const ee = { visible: !1, kind: "strokeGroup" };
      return u._strokeGeomCache.set(o, ee), ee;
    }
    const z = (ee, be) => ({
      x: (Number((ee == null ? void 0 : ee.x) || 0) + Number((be == null ? void 0 : be.x) || 0)) * 0.5,
      y: (Number((ee == null ? void 0 : ee.y) || 0) + Number((be == null ? void 0 : be.y) || 0)) * 0.5,
      a: ee,
      b: be
    }), q = z(T[0], T[1]), B = z(T[1], T[2]), Y = z(T[2], T[3]), re = z(T[3], T[0]), le = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: T,
      edgeMidpoints: [
        { edge: "top", ...q },
        { edge: "right", ...B },
        { edge: "bottom", ...Y },
        { edge: "left", ...re }
      ],
      rotateStemBase: { x: q.x, y: q.y },
      rotateHandle: { x: q.x, y: q.y - 30 },
      strokePaths: g,
      visible: !0
    };
    return u._strokeGeomCache.set(o, le), le;
  }
  function Up(r, o) {
    const s = u.mode === "frame" ? Fe() : null, c = s ? Rt(s) : null, h = Au(r), m = u.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, b = io(h, null, s, c, m), x = Dp(r).map((T) => io(T, (b == null ? void 0 : b.x) ?? null, s, c, m)).filter((T) => Number.isFinite(T == null ? void 0 : T.x) && Number.isFinite(T == null ? void 0 : T.y));
    if (!Array.isArray(x) || x.length < 4) {
      const T = { visible: !1, kind: "rasterObject" };
      return u._strokeGeomCache.set(o, T), T;
    }
    const M = x.slice(0, 4).map((T) => ({ x: Number((T == null ? void 0 : T.x) || 0), y: Number((T == null ? void 0 : T.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: M.reduce((T, z) => T + Number(z.x || 0), 0) / M.length,
        y: M.reduce((T, z) => T + Number(z.y || 0), 0) / M.length
      },
      corners: M,
      visible: !0
    };
    return u._strokeGeomCache.set(o, N), N;
  }
  function ir(r, o = null, s = null, c = null, h = {}) {
    if (u.mode === "frame") {
      const be = s || Fe(), Ee = c || Rt(be);
      if (!be || !Ee) return null;
      const Le = be ? ia(be, r) : null;
      return Le ? {
        x: Number(Ee.x || 0) + Number(Le.x || 0) * Number(Ee.w || 0),
        y: Number(Ee.y || 0) + Number(Le.y || 0) * Number(Ee.h || 0),
        z: 1
      } : null;
    }
    if (u.mode === "unwrap") return sl(r, o);
    const { right: m, up: b, fwd: g } = nl(), x = On(r, m), M = On(r, b), P = On(r, g), N = 1e-4;
    if (!Number.isFinite(P) || P <= N && !(h != null && h.clipBehind)) return null;
    const T = Math.max(P, N), z = F.width, q = F.height, B = u.viewFov * Ft, Y = 2 * Math.atan(Math.tan(B / 2) * (q / Math.max(z, 1))), re = z / 2 / Math.tan(B / 2), le = q / 2 / Math.tan(Y / 2), ee = Math.max(z, q) * 2;
    return {
      x: G(z / 2 + x / T * re, -ee, z + ee),
      y: G(q / 2 - M / T * le, -ee, q + ee),
      z: T,
      rawZ: P,
      clipped: P <= N
    };
  }
  function Bp(r, o = []) {
    if (u.mode !== "pano" || gt(r)) return 1;
    const s = o.map((c) => Number((c == null ? void 0 : c.rawZ) ?? (c == null ? void 0 : c.z))).filter((c) => Number.isFinite(c));
    return s.length ? Kw(0.035, 0.2, Math.min(...s)) : 1;
  }
  function Gp(r) {
    const o = jn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = u.mode === "frame" ? Fe() : null, c = s ? Rt(s) : null, h = u.mode === "pano" && (gt(r) || mn(r)), m = h ? { clipBehind: !0 } : null, b = ir(o, null, s, c, m);
    if (!b) return { visible: !1 };
    const g = eo(r), M = ku(r).map((Z) => ir(Z, b.x, s, c, m)).filter((Z) => Number.isFinite(Z == null ? void 0 : Z.x) && Number.isFinite(Z == null ? void 0 : Z.y));
    if (M.length < 4) return { visible: !1 };
    const P = Mr(g, 0, g.tanY), N = Mr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), T = ir(P, b.x, s, c, m);
    if (!T) return { visible: !1 };
    const z = ir(N, (T == null ? void 0 : T.x) ?? b.x, s, c, m), q = ((z == null ? void 0 : z.x) ?? T.x) - T.x, B = ((z == null ? void 0 : z.y) ?? T.y) - T.y, Y = Math.hypot(q, B) || 1, re = {
      x: T.x + q / Y * 30,
      y: T.y + B / Y * 30
    }, le = ir(Mr(g, 0, g.tanY), b.x, s, c, m), ee = ir(Mr(g, g.tanX, 0), b.x, s, c, m), be = ir(Mr(g, 0, -g.tanY), b.x, s, c, m), Ee = ir(Mr(g, -g.tanX, 0), b.x, s, c, m);
    if (!le || !ee || !be || !Ee) return { visible: !1 };
    const Le = [
      b,
      ...M,
      T,
      z,
      le,
      ee,
      be,
      Ee
    ];
    if (h && !Le.some((Z) => Number((Z == null ? void 0 : Z.rawZ) ?? (Z == null ? void 0 : Z.z)) > 1e-4)) return { visible: !1 };
    const Ke = Bp(r, Le), de = [
      {
        edge: "top",
        x: le.x,
        y: le.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: ee.x,
        y: ee.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: be.x,
        y: be.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: Ee.x,
        y: Ee.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: b.x, y: b.y },
      corners: M.map((Z) => ({ x: Z.x, y: Z.y })),
      edgeMidpoints: de,
      rotateStemBase: { x: T.x, y: T.y },
      rotateHandle: re,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: Ke,
      visible: !0
    };
  }
  function jt(r) {
    if (Ot(r)) {
      const h = String(r.actionGroupId || r.id || "").trim(), m = Zm(h, r.layerKind), b = u._strokeGeomCache.get(m);
      return b || (u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear(), Hp(r, m));
    }
    if (qt(r)) {
      const h = Ep(r), m = u._strokeGeomCache.get(h);
      return m || (u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear(), Up(r, h));
    }
    const o = Op(r), s = u._strokeGeomCache.get(o);
    if (s) return s;
    u._strokeGeomCache.size > 256 && u._strokeGeomCache.clear();
    const c = Gp(r);
    return u._strokeGeomCache.set(o, c), c;
  }
  function ao(r, o, s, c = null) {
    const h = [];
    for (let m = 0; m <= s; m += 1) {
      const b = m / s;
      let g = 0, x = 0;
      o === 0 ? (g = b, x = 0) : o === 1 ? (g = 1, x = b) : o === 2 ? (g = 1 - b, x = 1) : (g = 0, x = 1 - b);
      const M = Pu(r, g, x), P = u.mode === "unwrap" ? sl(M, c) : ea(M);
      P && h.push(P);
    }
    return h;
  }
  function Kp(r, o) {
    const s = jn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), c = u.mode === "unwrap" ? sl(s) : null, h = c ? c.x : null, m = u.mode === "pano" ? 28 : 20, b = [
      ao(r, 0, m, h),
      ao(r, 1, m, h),
      ao(r, 2, m, h),
      ao(r, 3, m, h)
    ];
    C.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", C.lineWidth = o ? 2 : 1, C.beginPath();
    let g = !1;
    for (const x of b)
      for (const M of x)
        g ? C.lineTo(M.x, M.y) : (C.moveTo(M.x, M.y), g = !0);
    C.closePath(), C.stroke();
  }
  function Wp() {
    const r = [...Array.isArray(v.shots) ? v.shots : []], o = [...Array.isArray(v.stickers) ? v.stickers : []].sort((s, c) => Number(s.z_index || 0) - Number(c.z_index || 0));
    return [...r, ...o];
  }
  function cl() {
    const r = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((s, c) => Number(c.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function oo(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function Eu(r, o, s) {
    const c = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (c.length < 4) return;
    const h = G(Number((r == null ? void 0 : r.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = C.globalAlpha;
    C.globalAlpha = m * h;
    const b = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", x = o ? 3.2 : 2.6;
    oo(C, c), C.fillStyle = g, C.fill(), C.strokeStyle = b, C.lineWidth = x, C.stroke(), C.save(), C.strokeStyle = b, C.lineWidth = o ? 3.2 : 2.6, C.lineCap = "round";
    const M = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], P = { top: "bottom", right: "left", bottom: "top", left: "right" }, N = o ? 12 : 9;
    M.forEach((T) => {
      const q = M.find((le) => (le == null ? void 0 : le.edge) === P[T == null ? void 0 : T.edge]) || {
        x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
        y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
      }, B = q.x - T.x, Y = q.y - T.y, re = Math.hypot(B, Y) || 1;
      C.beginPath(), C.moveTo(T.x, T.y), C.lineTo(T.x + B / re * N, T.y + Y / re * N), C.stroke();
    }), C.restore(), C.globalAlpha = m;
  }
  function Yp(r, o, s, c) {
    const h = G(Number((o == null ? void 0 : o.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (mn(r)) {
      Eu(o, s, c);
      return;
    }
    if (gt(r)) {
      const b = C.globalAlpha;
      C.globalAlpha = b * ip(r) * h, u.mode === "frame" ? (C.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", C.lineWidth = s ? 2 : 1, oo(C, o.corners), C.stroke()) : Kp(r, s), C.globalAlpha = b;
      return;
    }
    const m = C.globalAlpha;
    C.globalAlpha = m * h, C.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", oo(C, o.corners), C.fill(), C.strokeStyle = s ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", C.lineWidth = s ? 2.8 : 1.9, oo(C, o.corners), C.stroke(), C.globalAlpha = m;
  }
  function Ou(r, o, s) {
    C.fillStyle = s, o.corners.forEach((c) => {
      C.beginPath(), C.arc(c.x, c.y, 6.5, 0, Math.PI * 2), C.fill();
    }), mn(r) && (C.strokeStyle = s, C.lineCap = "round", C.lineWidth = 4, o.edgeMidpoints.forEach((c) => {
      var P, N, T, z;
      const h = (((P = c.b) == null ? void 0 : P.x) ?? c.x) - (((N = c.a) == null ? void 0 : N.x) ?? c.x), m = (((T = c.b) == null ? void 0 : T.y) ?? c.y) - (((z = c.a) == null ? void 0 : z.y) ?? c.y), b = Math.hypot(h, m) || 1, g = h / b, x = m / b, M = 10;
      C.beginPath(), C.moveTo(c.x - g * M, c.y - x * M), C.lineTo(c.x + g * M, c.y + x * M), C.stroke();
    }), C.lineCap = "butt"), Ot(r) || (C.strokeStyle = "rgba(250, 250, 250, 0.9)", C.lineWidth = 1.8, C.beginPath(), C.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), C.lineTo(o.rotateHandle.x, o.rotateHandle.y), C.stroke(), C.fillStyle = s, C.beginPath(), C.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), C.fill());
  }
  function qp() {
    var g;
    const [r, o] = Rp(), s = u.mode === "frame" ? [] : Tn(), c = s.length > 1, h = t === "cutout" ? Wp() : tr(), m = h.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${mn(x) ? "frame" : Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!u._sortedItemsCache || u._sortedItemsCache.src !== h || u._sortedItemsCache.orderKey !== m) && (u._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const b = u._sortedItemsCache.sorted;
    for (const x of b) {
      const M = u.mode !== "frame" && !c && cu(x);
      if (u.mode === "frame" && !M || !u.showObjects && !mn(x)) continue;
      const P = gt(x), N = mn(x), T = nr(x);
      if (!P && !N)
        continue;
      const z = jt(x);
      if (t !== "stickers" && !z.visible)
        continue;
      const q = G(Number((z == null ? void 0 : z.visibilityAlpha) ?? 1), 0, 1);
      if (q <= 0.01) continue;
      const B = N && t === "cutout" && u.mode === "pano" ? G(Number(u.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (C.save(), C.globalAlpha *= B, Yp(x, z, M, T), M && z.visible) {
        const Y = T ? "#ff4d4f" : P && Ut(x) ? "#f59e0b" : "#0070f3", re = C.globalAlpha;
        C.globalAlpha = re * q, Ou(x, z, Y), C.globalAlpha = re;
      }
      C.restore();
    }
    if (t === "cutout" && u.mode === "pano" && !Fe() && u.cutoutPanoFrameVisual && u.cutoutPanoFrameAlpha > 1e-4) {
      const x = u.cutoutPanoFrameVisual, M = G(Number(u.cutoutPanoFrameAlpha || 0), 0, 1);
      C.save(), C.globalAlpha *= M, Eu(x.geom, x.selected, x.locked), x.selected && Ou(
        x.item,
        x.geom,
        x.locked ? "#ff4d4f" : "#0070f3"
      ), C.restore();
    }
    if (c) {
      const x = Ys(s);
      if (x != null && x.visible) {
        const M = qs(s) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(x.corners[0].x, x.corners[0].y);
        for (let P = 1; P < x.corners.length; P += 1) C.lineTo(x.corners[P].x, x.corners[P].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = M, x.corners.forEach((P) => {
          C.beginPath(), C.arc(P.x, P.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      }
    } else
      s.forEach((x) => {
        if (!Ot(x) && !qt(x)) return;
        const M = jt(x);
        if (!(M != null && M.visible)) return;
        const P = nr(x) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(M.corners[0].x, M.corners[0].y);
        for (let N = 1; N < M.corners.length; N += 1) C.lineTo(M.corners[N].x, M.corners[N].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = P, M.corners.forEach((N) => {
          C.beginPath(), C.arc(N.x, N.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      });
    if (((g = u.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const x = af(u.interaction.start, u.interaction.current);
      C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.9)", C.fillStyle = "rgba(255, 255, 255, 0.08)", C.lineWidth = 1, C.setLineDash([5, 4]), C.beginPath(), C.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), C.fill(), C.stroke(), C.restore();
    }
    u.hqFrames && r >= 40 && o >= 30 && (u.hqFrames -= 1, u.hqFrames > 0 && fe());
  }
  function Xp(r) {
    const o = Er(r), s = G(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), c = 320;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function Ru(r, o = !1) {
    const s = G(Qo(r), 0.05, 20), c = o ? 320 : 220;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function Jp(r) {
    if (!Tt || !r) return !1;
    const o = Tt.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || Tt.clientWidth || 0)), c = Math.round(Number(o.clientHeight || Tt.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(c - Number(r.height || 0)) <= 1;
  }
  function Zp() {
    return `obj:${Number(u.objectVisualRevision || 0)}`;
  }
  function Qp(r, o = {}) {
    if (!r) return "";
    const s = jr(), c = s && Sr(s) ? mi(s) : "no_bg", h = Xp(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      dl(),
      Zp(),
      Ya(),
      c,
      u.showPanorama ? "panorama:1" : "panorama:0",
      u.showObjects ? "objects:1" : "objects:0",
      u.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function eg() {
    var T, z, q, B;
    if (u.outputPreviewRect = null, k.outputPreviewToggle.visible = u.mode !== "frame" && !!Fe(), t !== "cutout" || !k.cameraPreview) return;
    if (u.mode === "frame") {
      k.cameraPreview.visible = !1, k.cameraPreview.settled = !1;
      return;
    }
    const r = Fe();
    if (!r) {
      k.cameraPreview.visible = !0, k.cameraPreview.ready = !1, k.cameraPreview.settled = !1, k.cameraPreview.expanded = !!u.outputPreviewExpanded, k.cameraPreview.width = 220, k.cameraPreview.height = 132, k.cameraPreview.label = "Add Frame to preview", (T = te == null ? void 0 : te.clearScene) == null || T.call(te), (z = he == null ? void 0 : he.requestRender) == null || z.call(he);
      return;
    }
    k.cameraPreview.visible = !0;
    const o = jr();
    if (!r || !te || !he) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", k.cameraPreview.expanded = !!u.outputPreviewExpanded, k.cameraPreview.settled = !1, k.cameraPreview.width = 220, k.cameraPreview.height = 132, (q = te == null ? void 0 : te.clearScene) == null || q.call(te), (B = he == null ? void 0 : he.requestRender) == null || B.call(he);
      return;
    }
    const s = Ru(r, !!u.outputPreviewExpanded);
    k.cameraPreview.width = s.width, k.cameraPreview.height = s.height, k.cameraPreview.expanded = !!u.outputPreviewExpanded;
    const c = to(), h = no(c), m = Sr(o), b = m ? mi(o) : "none", g = u.showObjects ? ro() : ta([]), x = ba({
      stateRevision: [
        "cutout_preview_camera",
        b,
        Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((Y) => String((Y == null ? void 0 : Y.id) || "")).join(",") : "none",
        Array.isArray(h) ? h.map((Y) => `${String((Y == null ? void 0 : Y.assetId) || "")}:${String((Y == null ? void 0 : Y.revision) || "")}`).join(",") : "none",
        g.length ? g.map((Y) => `${String((Y == null ? void 0 : Y.id) || "")}:${String((Y == null ? void 0 : Y.revision) || "")}:${Number((Y == null ? void 0 : Y.zIndex) || 0)}`).join(",") : "paint:none",
        u.showPanorama ? "panorama:1" : "panorama:0",
        u.showObjects ? "objects:1" : "objects:0",
        u.showMask ? "showMask:1" : "showMask:0",
        Kt(v.coverage)
      ].join("|"),
      backgroundSource: m && u.showPanorama ? o : null,
      backgroundRevision: m ? `cutout_preview:${b}` : "",
      coverageDeg: Kt(v.coverage),
      scene: c,
      textures: h,
      rasterEntries: g,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(m || h.length > 0 || g.length > 0)) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = "Connect ERP image", k.cameraPreview.settled = !1, te.clearScene(), he.requestRender();
      return;
    }
    if (u.showPanorama && !m && h.length === 0 && g.length === 0) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", k.cameraPreview.settled = !1, te.clearScene(), he.requestRender();
      return;
    }
    te.syncScene(x), he.setView(Er(r));
    const P = Jp(s), N = P ? he.present() : !1;
    P || he.requestRender(), k.cameraPreview.ready = !0, k.cameraPreview.label = P && N ? "" : "Loading preview", k.cameraPreview.settled = P && N && oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame;
  }
  function tg(r, o, s, c = {}) {
    if (!te || !s) return !1;
    const h = jr(), m = to(), b = no(m), g = Sr(h), x = u.showObjects ? ro() : ta([]);
    return g || b.length > 0 || x.length > 0 ? (te.syncScene(ba({
      stateRevision: Qp(s, c),
      backgroundSource: g && u.showPanorama ? h : null,
      backgroundRevision: g ? `cutout_frame:${mi(h)}` : "",
      coverageDeg: Kt(v.coverage),
      scene: m,
      textures: b,
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), te.renderShotToContext(r, o, s, c)) : !1;
  }
  function ul(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), c = Number(o.y || 0);
    return Pu(r, s, c);
  }
  function vi(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, c = Math.cos(s);
    return qn(c * Math.sin(o), Math.sin(s), c * Math.cos(o));
  }
  function ng(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function rg(r, o, s, c = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Xt(r, "widthScale", 1),
      pressureLike: Xt(r, "pressureLike", 1)
    }, ...c, u: o, v: s };
  }
  function ig(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function fl(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const c = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (c) {
      let B = null;
      r.forEach((Y) => {
        const re = Number((Y == null ? void 0 : Y.u) || 0), le = Number((Y == null ? void 0 : Y.v) || 0), ee = (re % 1 + 1) % 1, be = B == null ? ee : B + xn(ee, (B % 1 + 1) % 1);
        h.set(Y, { x: be, y: le }), B = be;
      });
    }
    const m = (B) => !B || typeof B != "object" ? { x: 0, y: 0 } : h.get(B) || ng(B), b = (B, Y, re, le = {}) => {
      const ee = c ? (Number(Y) % 1 + 1) % 1 : Number(Y), be = rg(B, ee, re, le);
      return h.set(be, { x: Number(Y), y: Number(re) }), be;
    }, g = (B, Y, re) => {
      const le = m(B), ee = m(Y);
      return b(B, wn(le.x, ee.x, re), wn(le.y, ee.y, re), {
        t: wn(Number((B == null ? void 0 : B.t) || 0), Number((Y == null ? void 0 : Y.t) || 0), re),
        widthScale: wn(Xt(B, "widthScale", 1), Xt(Y, "widthScale", 1), re),
        pressureLike: wn(Xt(B, "pressureLike", 1), Xt(Y, "pressureLike", 1), re)
      });
    };
    if (r.length === 1) {
      const B = m(r[0]);
      return [b(r[0], B.x, B.y)];
    }
    const x = ig(o, s), M = (B, Y) => {
      const re = [0];
      for (let Z = 1; Z < B.length; Z += 1) {
        const ue = m(B[Z - 1]), Ce = m(B[Z]);
        re.push(re[Z - 1] + Math.hypot(Ce.x - ue.x, Ce.y - ue.y));
      }
      const le = re[re.length - 1] || 0;
      if (le <= 1e-8) {
        const Z = B[0], ue = m(Z);
        return [b(Z, ue.x, ue.y)];
      }
      const ee = [];
      let be = 0;
      for (let Z = 0; Z <= le + 1e-9; Z += Y) {
        for (; be < re.length - 2 && re[be + 1] < Z; ) be += 1;
        const ue = re[be], Ce = re[be + 1], Ae = Math.max(1e-8, Ce - ue);
        ee.push(g(B[be], B[be + 1], G((Z - ue) / Ae, 0, 1)));
      }
      const Ee = B[B.length - 1], Le = m(Ee), Ke = ee[ee.length - 1], de = Ke ? m(Ke) : null;
      return (!de || Math.hypot(de.x - Le.x, de.y - Le.y) > Y * 0.35) && ee.push(b(Ee, Le.x, Le.y)), ee;
    }, P = (B) => {
      if (!Array.isArray(B) || B.length < 3) return B ? B.slice() : [];
      const Y = m(B[0]), re = [b(B[0], Y.x, Y.y)];
      for (let be = 0; be < B.length - 1; be += 1) {
        const Ee = B[be], Le = B[be + 1], Ke = m(Ee), de = m(Le), Z = b(
          Ee,
          Ke.x * 0.75 + de.x * 0.25,
          Ke.y * 0.75 + de.y * 0.25,
          {
            t: Number(Ee.t || 0) * 0.75 + Number(Le.t || 0) * 0.25,
            widthScale: Xt(Ee, "widthScale", 1) * 0.75 + Xt(Le, "widthScale", 1) * 0.25,
            pressureLike: Xt(Ee, "pressureLike", 1) * 0.75 + Xt(Le, "pressureLike", 1) * 0.25
          }
        ), ue = b(
          Ee,
          Ke.x * 0.25 + de.x * 0.75,
          Ke.y * 0.25 + de.y * 0.75,
          {
            t: Number(Ee.t || 0) * 0.25 + Number(Le.t || 0) * 0.75,
            widthScale: Xt(Ee, "widthScale", 1) * 0.25 + Xt(Le, "widthScale", 1) * 0.75,
            pressureLike: Xt(Ee, "pressureLike", 1) * 0.25 + Xt(Le, "pressureLike", 1) * 0.75
          }
        );
        re.push(Z, ue);
      }
      const le = B[B.length - 1], ee = m(le);
      return re.push(b(le, ee.x, ee.y)), re;
    }, N = M(r, x);
    if (N.length < 3) return N;
    const T = s ? 2 : 1;
    let z = N.slice();
    for (let B = 0; B < T; B += 1) z = P(z);
    return M(z, Math.max(x * 0.75, 55e-5));
  }
  function Xt(r, o, s = 1) {
    const c = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(c) ? Math.max(0, c) : s;
  }
  function ag(r) {
    const o = Number(r == null ? void 0 : r.radiusValue);
    if (Number.isFinite(o) && o > 0) {
      const s = String((r == null ? void 0 : r.radiusModel) || "").trim() || "erp_uv_norm";
      return s === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
      } : {
        model: s,
        value: o
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((r == null ? void 0 : r.size) || 10) * 0.5 / 2048)
    };
  }
  function na(r, o, s = {}) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(r)), c.height = Math.max(1, Math.round(o));
    const h = c.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, c.width, c.height), h.imageSmoothingEnabled = !0), { canvas: c, ctx: h };
  }
  function ra() {
    const r = lo();
    return `${String(u.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function _i() {
    const r = lo();
    return `${String(u.paintStrokeRevision)}:${String(u.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function dl() {
    const r = Ya(), o = _i();
    return r ? `${o}:${r}` : o;
  }
  function og() {
    u.paintStrokeRevision += 1, u.paintCompositeRevision += 1;
  }
  function sg() {
    u.paintCompositeRevision += 1;
  }
  function lg() {
    u._sortedItemsCache = null, u._strokeGeomCache.clear();
  }
  function Fu() {
    var r, o;
    u.paintEngineRevisionKey = null, (o = (r = u.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, v), u.paintEngineRevisionKey = ra();
  }
  function Lu() {
    v.painting_layer !== null && (v.painting_layer = null), Za = "";
  }
  function Bt() {
    u.objectVisualRevision = Number(u.objectVisualRevision || 0) + 1, lg(), oe.backgroundDirty = !0, oe.dirty = !0;
  }
  function In({ rebuildPaintEngine: r = !1 } = {}) {
    Lu(), og(), Bt(), r && Fu();
  }
  function xi() {
    Lu(), sg(), Bt();
  }
  function so() {
    var c;
    const r = lo(), o = `${r.width}x${r.height}`;
    u.paintEngineDescriptorKey !== o && (u.paintEngine = dc(r), u.paintEngineDescriptorKey = o, u.paintEngineRevisionKey = "");
    const s = ra();
    u.paintEngineRevisionKey !== s && (u.paintEngineRevisionKey = s, (c = u.paintEngine) == null || c.rebuildCommitted(v));
  }
  function lo() {
    const r = Math.max(1, A(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function pn() {
    return lo();
  }
  function cg(r, o, s, c, h = null) {
    const m = ag(r), b = Xt(o, "widthScale", 1) * Xt(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * s * b) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Ft) * s * b) : Math.max(0.5, m.value / (2 * Math.PI) * s * b) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * b);
  }
  function ug(r, o, s = {}) {
    const c = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), m = s.preview === !0, b = m ? 0.78 : 1;
    if (r.globalAlpha = h === "marker" ? 0.7 * b : 1, c === "mask") {
      r.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const g = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = m ? Math.max(0.28, Number(g.a ?? 1) * 0.88) : Math.max(0.12, Number(g.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(g.r || 0) * 255)}, ${Math.round(Number(g.g || 0) * 255)}, ${Math.round(Number(g.b || 0) * 255)}, ${x})`;
  }
  function fg(r, o, s) {
    const c = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(c) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), c, 0, Math.PI * 2), r.fill());
  }
  function dg(r, o, s, c, h = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const m = Math.max(c.w, c.h) * 0.25;
    r.save(), ug(r, s, h);
    const b = (g) => fg(r, g, m);
    if (o.length === 1) {
      b(o[0]), r.restore();
      return;
    }
    for (let g = 0; g < o.length - 1; g += 1) {
      const x = o[g], M = o[g + 1];
      if (!x || !M) continue;
      const P = Number(x.x || 0), N = Number(x.y || 0), T = Number(M.x || 0), z = Number(M.y || 0), q = Math.max(0.5, Math.min(m, Number(x.radiusPx || 0.5))), B = Math.max(0.5, Math.min(m, Number(M.radiusPx || 0.5)));
      if (!Number.isFinite(P) || !Number.isFinite(N) || !Number.isFinite(T) || !Number.isFinite(z) || !Number.isFinite(q) || !Number.isFinite(B)) continue;
      const Y = T - P, re = z - N, le = Math.hypot(Y, re);
      if (!Number.isFinite(le) || le < 1e-6) {
        b(x);
        continue;
      }
      if (le > Math.max(c.w, c.h) * 0.5) continue;
      const ee = Math.max(0.5, Math.min(q, B)), be = Math.max(0.35, Math.min(ee * 0.4, 2.25)), Ee = Math.max(1, Math.ceil(le / be));
      for (let Le = 0; Le <= Ee; Le += 1) {
        const Ke = Le / Ee;
        b({
          x: wn(P, T, Ke),
          y: wn(N, z, Ke),
          radiusPx: wn(q, B, Ke)
        });
      }
    }
    b(o[o.length - 1]), r.restore();
  }
  function hg(r, o, s, c) {
    dg(r, o, s, c, { preview: !1 });
  }
  function mg(r, o, s, c, h) {
    var g, x, M, P;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const m = "u", b = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((g = o[0]) == null ? void 0 : g[m]) || 0) * c.w, Number(((x = o[0]) == null ? void 0 : x[b]) || 0) * c.h);
    for (let N = 1; N < o.length; N += 1)
      r.lineTo(Number(((M = o[N]) == null ? void 0 : M[m]) || 0) * c.w, Number(((P = o[N]) == null ? void 0 : P[b]) || 0) * c.h);
    r.closePath(), r.fill(), r.restore();
  }
  function $u(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function pg(r, o) {
    const s = $u(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: cg(r, c, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function zu(r, o, s = null) {
    var g, x, M, P;
    if (!(r != null && r.ctx) || !o) return !1;
    const c = s || { w: Number(((g = r.canvas) == null ? void 0 : g.width) || 0), h: Number(((x = r.canvas) == null ? void 0 : x.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((M = o == null ? void 0 : o.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((P = o == null ? void 0 : o.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill")
      return mg(r.ctx, $u(h), h, c), !0;
    const b = pg(h, c);
    return b.length ? (hg(r.ctx, b, h, c), !0) : !1;
  }
  function gg(r, o, s, c = 8) {
    const h = new Uint8Array(o * s), m = [], b = new Int32Array(o * s), g = new Int32Array(o * s);
    for (let x = 0; x < s; x += 1)
      for (let M = 0; M < o; M += 1) {
        const P = x * o + M;
        if (h[P] || r[P] <= c) continue;
        let N = 0, T = 0;
        b[T] = M, g[T] = x, T += 1, h[P] = 1;
        const z = [];
        let q = M, B = x, Y = M, re = x;
        for (; N < T; ) {
          const le = b[N], ee = g[N];
          N += 1, z.push({ x: le, y: ee }), le < q && (q = le), ee < B && (B = ee), le > Y && (Y = le), ee > re && (re = ee);
          const be = [
            [(le - 1 + o) % o, ee],
            [(le + 1) % o, ee],
            [le, ee - 1],
            [le, ee + 1]
          ];
          for (const [Ee, Le] of be) {
            if (Le < 0 || Le >= s) continue;
            const Ke = Le * o + Ee;
            h[Ke] || r[Ke] <= c || (h[Ke] = 1, b[T] = Ee, g[T] = Le, T += 1);
          }
        }
        m.push({ pixels: z, minX: q, minY: B, maxX: Y, maxY: re });
      }
    return m;
  }
  function bg(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, M) => x - M);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let c = -1, h = 0;
    for (let x = 0; x < s.length; x += 1) {
      const M = s[x], N = (x === s.length - 1 ? s[0] + o : s[x + 1]) - M - 1;
      N > c && (c = N, h = x);
    }
    const m = (s[(h + 1) % s.length] + o) % o;
    let b = 1 / 0, g = -1 / 0;
    for (const x of s) {
      const M = (x - m + o) % o;
      b = Math.min(b, M), g = Math.max(g, M);
    }
    return {
      startX: m,
      widthPx: Math.max(1, g - b + 1)
    };
  }
  function yg(r, o, s = {}) {
    var M;
    const c = Number((r == null ? void 0 : r.width) || 0), h = Number((r == null ? void 0 : r.height) || 0), m = (M = r == null ? void 0 : r.getContext) == null ? void 0 : M.call(r, "2d");
    if (!m || c < 1 || h < 1) return [];
    const b = m.getImageData(0, 0, c, h), g = new Uint8Array(c * h);
    for (let P = 0; P < g.length; P += 1) g[P] = b.data[P * 4 + 3];
    return gg(g, c, h, 8).map((P, N) => {
      const T = bg(P, c);
      if (!T) return null;
      const z = Number(T.widthPx || 0), q = P.maxY - P.minY + 1, B = Number(T.startX || 0), Y = document.createElement("canvas");
      Y.width = z, Y.height = q;
      const re = Y.getContext("2d");
      if (!re) return null;
      const le = re.createImageData(z, q);
      return P.pixels.forEach(({ x: ee, y: be }) => {
        const Ee = (be * c + ee) * 4, Le = (Number(ee || 0) - B + c) % c, Ke = ((be - P.minY) * z + Le) * 4;
        le.data[Ke + 0] = b.data[Ee + 0], le.data[Ke + 1] = b.data[Ee + 1], le.data[Ke + 2] = b.data[Ee + 2], le.data[Ke + 3] = b.data[Ee + 3];
      }), re.putImageData(le, 0, 0), {
        id: Ti("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + N * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: P.minY / h,
          u1: z / c,
          v1: (P.maxY + 1) / h
        },
        rasterDataUrl: Y.toDataURL("image/png"),
        transform: {
          du: B / c,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ia(r, o) {
    if (!r || !o) return null;
    const s = eo(r), c = On(o, s.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const h = On(o, s.right) / c, m = On(o, s.up) / c, b = h * s.cr + m * s.sr, g = -h * s.sr + m * s.cr;
    return {
      x: (b / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - g / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function vg(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (u.mode === "unwrap") {
      const s = wr();
      return r.map((c) => ({
        x: s.x + Number(c.u || 0) * s.w,
        y: s.y + Number(c.v || 0) * s.h
      }));
    }
    const o = r.map((s) => ea(vi(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function ju(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (u.mode === "unwrap") {
      const c = wr();
      return r.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, b = o == null ? m : Number(o || 0) + xn(m, o);
        return {
          x: c.x + b * c.w,
          y: c.y + Number(h.v || 0) * c.h
        };
      });
    }
    const s = r.map((c) => ea(vi(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function _g(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const c = r[s], h = r[(s + 1) % r.length];
      if (!c || !h || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(c.x), Number(h.y) - Number(c.y)) > o) return !1;
    }
    return !0;
  }
  function xg(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const c = [];
    for (const h of r) {
      const m = vi(h), b = ia(o, m);
      if (!b) return [];
      c.push({
        x: Number(s.x || 0) + Number(b.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(b.y || 0) * Number(s.h || 0)
      });
    }
    return _g(c, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? c : [];
  }
  function wg(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const c = [];
    for (const h of r) {
      const m = vi(h), b = ia(o, m);
      b && c.push({
        x: Number(s.x || 0) + Number(b.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(b.y || 0) * Number(s.h || 0)
      });
    }
    return c;
  }
  function Sg() {
    var z;
    const r = Fe(), o = pl(r);
    if (!r || !o) return !1;
    const s = { x: o.x, y: o.y, w: o.w, h: o.h }, c = Math.max(1, Number(o.focalPx || 1)), h = s.x + s.w * 0.5, m = s.y + s.h * 0.5, { halfW: b, halfH: g } = Ld(
      { width: F.width, height: F.height },
      c
    ), x = { x: h - b, y: m - g, w: b * 2, h: g * 2 }, M = {
      ...r,
      hFOV_deg: 2 * Math.atan(b / c) * Sn,
      vFOV_deg: 2 * Math.atan(g / c) * Sn
    }, P = Mg(s);
    C.save(), C.fillStyle = "#0a0a0a", C.fillRect(0, 0, F.width, F.height);
    const N = u.interaction ? "draft" : String(((z = v.ui_settings) == null ? void 0 : z.preview_quality) || "balanced");
    return tg(C, x, M, { quality: N }) === !0 || (C.fillStyle = "rgba(255, 255, 255, 0.03)", C.fillRect(x.x, x.y, x.w, x.h)), C.restore(), C.save(), C.fillStyle = "rgba(0, 0, 0, 0.58)", C.beginPath(), C.rect(0, 0, F.width, F.height), C.roundRect(s.x, s.y, s.w, s.h, P), C.fill("evenodd"), C.restore(), C.save(), C.strokeStyle = Lw, C.globalAlpha = 0.62, C.lineWidth = 2, C.beginPath(), C.roundRect(s.x + 1, s.y + 1, s.w - 2, s.h - 2, Math.max(0, P - 1)), C.stroke(), C.restore(), !0;
  }
  function Mg(r) {
    const o = Math.max(1e-6, Number(oe.frameCanvasScale || 1));
    return Math.min(dt * o, Number((r == null ? void 0 : r.w) || 0) * 0.5, Number((r == null ? void 0 : r.h) || 0) * 0.5);
  }
  function Nr() {
    var o;
    const r = u.mode === "frame" ? Fe() : null;
    k.frameRollKnob.visible = !!r && !i, k.frameRollKnob.rollDeg = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg) ?? 0), k.frameRollKnob.displayValue = ma(k.frameRollKnob.rollDeg), k.frameRollKnob.dragging = ((o = u.interaction) == null ? void 0 : o.kind) === "roll_frame", k.frameRollKnob.armed = !!r && u.altModifier === !0;
  }
  function Ng() {
    var x, M;
    if (((x = u.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const r = u.interaction.stroke, o = (M = r == null ? void 0 : r.geometry) == null ? void 0 : M.points;
    let s;
    if (u.mode === "frame") {
      const P = Fe(), N = Rt(P);
      s = xg(o, P, N);
    } else
      s = vg(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const c = String((r == null ? void 0 : r.layerKind) || "") === "mask", h = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), b = Math.round(Number(h.g || 0) * 255), g = Math.round(Number(h.b || 0) * 255);
    C.save(), C.beginPath(), C.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let P = 1; P < s.length; P++) C.lineTo(Number(s[P].x || 0), Number(s[P].y || 0));
    C.closePath(), c ? (C.lineWidth = 2, C.setLineDash([6, 6]), C.lineDashOffset = 0, C.strokeStyle = "rgba(0,0,0,0.96)", C.stroke(), C.lineDashOffset = -6, C.strokeStyle = "rgba(255,255,255,0.96)", C.stroke(), C.setLineDash([]), C.lineDashOffset = 0) : (C.lineWidth = 1.5, C.setLineDash([6, 4]), C.strokeStyle = `rgba(${m},${b},${g},1)`, C.stroke(), C.setLineDash([])), C.restore();
  }
  function kg() {
    const r = u.frameRollOverlayVisual, o = G(Number(u.frameRollOverlayAlpha || 0), 0, 1);
    if (u.mode !== "frame" || !(r != null && r.shot) || o <= 1e-4) return;
    const s = Rt(r.shot);
    if (!s) return;
    const c = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = Number(r.shot.roll_deg ?? r.shot.rot_deg ?? 0) * Ft, m = Math.hypot(s.w, s.h) * 0.55, b = Math.cos(h) * m, g = Math.sin(h) * m;
    C.save(), C.globalAlpha *= o, C.beginPath(), C.rect(s.x, s.y, s.w, s.h), C.clip(), C.translate(c.x, c.y), C.rotate(h);
    const x = Math.max(12, Math.min(s.w, s.h) / 6);
    C.beginPath();
    for (let M = -m; M <= m; M += x)
      C.moveTo(M, -m), C.lineTo(M, m);
    for (let M = -m; M <= m; M += x)
      C.moveTo(-m, M), C.lineTo(m, M);
    C.lineWidth = 1, C.strokeStyle = "rgba(255, 255, 255, 0.22)", C.stroke(), C.setTransform(1, 0, 0, 1, 0, 0), C.beginPath(), C.moveTo(c.x - b, c.y - g), C.lineTo(c.x + b, c.y + g), C.lineWidth = 1.5, C.setLineDash([8, 6]), C.strokeStyle = "rgba(255, 255, 255, 0.92)", C.shadowColor = "rgba(0, 0, 0, 0.8)", C.shadowBlur = 3, C.stroke(), C.setLineDash([]), C.restore();
  }
  function Pg() {
    return t !== "cutout" || !Fe() ? 0 : jw;
  }
  function Ag() {
    const r = G(Number(u.cutoutPanoDimAlpha || 0), 0, 1);
    if (r <= 1e-4 || t !== "cutout" || u.mode !== "pano") return;
    const o = Fe(), s = o ? jt(o) : null, c = Array.isArray(s == null ? void 0 : s.corners) && s.corners.length >= 4 ? s.corners.map((b) => ({ x: Number(b.x || 0), y: Number(b.y || 0) })) : null;
    s != null && s.visible && c && (u.cutoutPanoDimCorners = c), o && (s != null && s.visible) && c && (u.cutoutPanoFrameVisual = {
      item: o,
      geom: s,
      selected: cu(o),
      locked: nr(o)
    });
    const h = Number(u.cutoutPanoDimTarget || 0) <= 1e-6, m = s != null && s.visible ? c : h ? u.cutoutPanoDimCorners || [] : [];
    if (C.save(), C.fillStyle = `rgba(0, 0, 0, ${r})`, C.beginPath(), C.rect(0, 0, F.width, F.height), m.length >= 4) {
      C.moveTo(m[0].x, m[0].y);
      for (let b = 1; b < 4; b += 1) C.lineTo(m[b].x, m[b].y);
      C.closePath();
    }
    C.fill("evenodd"), C.restore();
  }
  function Cg() {
    u.mode === "frame" ? (oe.frameSafeRect = qg(), Sg()) : u.mode === "unwrap" ? zp(!1) : jp(!1), Ag(), t === "cutout" && eg(), qp(), Nr(), Ng(), kg(), k.fovValue = `${Math.round(u.viewFov)}°`, Math.abs(Number(u.outputPreviewAnim || 0) - Number(u.outputPreviewAnimTo || 0)) < 1e-6 && Ge(), oe.hasPresentedFrame || (oe.hasPresentedFrame = !0, J.style.opacity = "1"), t === "cutout" && k.cameraPreview && (k.cameraPreview.settled = oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame && u.mode !== "frame");
    const r = Ip();
    k.stageStatus = r.status, k.stageStatusDetail = r.detail, r.status === Kn ? (ce == null || ce.removeAttribute("data-stage-ready"), ce == null || ce.setAttribute("data-stage-loading-kind", r.detail)) : (ce == null || ce.setAttribute("data-stage-ready", ""), ce == null || ce.removeAttribute("data-stage-loading-kind"));
  }
  function Tg(r = u.interaction) {
    if (t !== "stickers" || u.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Ig() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Jm();
  }
  function fe(r = {}) {
    var g, x, M, P, N, T, z, q, B, Y;
    const o = !!r.localOnly, s = r.externalSync === !0, c = String(r.cause || ""), h = String(((g = u.interaction) == null ? void 0 : g.kind) || "");
    (!o || h === "view" || h === "pan_frame" || Tg() || !!((x = u.viewTween) != null && x.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && (oe.backgroundDirty = !0), o && au() && (u.livePaintInteractionRevision += 1, oe.backgroundDirty = !0), (!o || c === "selection" || c === "mode" || c === "cutout_frame") && (tl(), xr()), Ig(), s && ((P = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null || P.call(M), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), s && !o && ((z = (T = e.graph) == null ? void 0 : T.setDirtyCanvas) == null || z.call(T, !0, !0), (Y = (B = (q = yn) == null ? void 0 : q.canvas) == null ? void 0 : B.setDirty) == null || Y.call(B, !0, !0)), oe.dirty = !0;
  }
  function Vu() {
    const r = F.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return F.width !== o || F.height !== s || J.width !== o || J.height !== s ? (F.width = o, F.height = s, J.width = o, J.height = s, oe.backgroundDirty = !0, oe.dirty = !0, t === "cutout" && (oe.pendingStableLayoutFrames = Math.max(Number(oe.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Dg(r = performance.now()) {
    var m, b;
    oe.lastTickTs = r;
    const o = u.mode === "frame" && ((m = u.interaction) == null ? void 0 : m.kind) === "roll_frame" ? u.interaction : null;
    o != null && o.shot && (u.frameRollOverlayVisual = { shot: o.shot });
    const s = o ? 1 : 0;
    if (Math.abs(s - Number(u.frameRollOverlayTarget || 0)) > 1e-6 && (u.frameRollOverlayFrom = Number(u.frameRollOverlayAlpha || 0), u.frameRollOverlayTarget = s, u.frameRollOverlayStartTs = r), Math.abs(Number(u.frameRollOverlayAlpha || 0) - s) > 1e-6) {
      const g = G(
        (r - Number(u.frameRollOverlayStartTs || r)) / Vw,
        0,
        1
      );
      u.frameRollOverlayAlpha = wn(
        Number(u.frameRollOverlayFrom || 0),
        s,
        Ro(g)
      ), g >= 1 && (u.frameRollOverlayAlpha = s, s === 0 && (u.frameRollOverlayVisual = null)), oe.dirty = !0;
    }
    const c = Pg();
    if (Math.abs(c - Number(u.cutoutPanoDimTarget || 0)) > 1e-6 && (u.cutoutPanoDimFrom = Number(u.cutoutPanoDimAlpha || 0), u.cutoutPanoDimTarget = c, u.cutoutPanoDimStartTs = r), Math.abs(Number(u.cutoutPanoDimAlpha || 0) - c) > 1e-6) {
      const g = G(
        (r - Number(u.cutoutPanoDimStartTs || r)) / Gd,
        0,
        1
      );
      u.cutoutPanoDimAlpha = wn(
        Number(u.cutoutPanoDimFrom || 0),
        c,
        Ro(g)
      ), g >= 1 && (u.cutoutPanoDimAlpha = c), g >= 1 && c === 0 && (u.cutoutPanoDimCorners = null), oe.dirty = !0;
    }
    const h = t === "cutout" && Fe() ? 1 : 0;
    if (Math.abs(h - Number(u.cutoutPanoFrameTarget || 0)) > 1e-6 && (u.cutoutPanoFrameFrom = Number(u.cutoutPanoFrameAlpha || 0), u.cutoutPanoFrameTarget = h, u.cutoutPanoFrameStartTs = r), Math.abs(Number(u.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const g = G(
        (r - Number(u.cutoutPanoFrameStartTs || r)) / Gd,
        0,
        1
      );
      u.cutoutPanoFrameAlpha = wn(
        Number(u.cutoutPanoFrameFrom || 0),
        h,
        Ro(g)
      ), g >= 1 && (u.cutoutPanoFrameAlpha = h, h === 0 && (u.cutoutPanoFrameVisual = null)), oe.dirty = !0;
    }
    if (u.outputPreviewAnim !== u.outputPreviewAnimTo) {
      const g = Math.max(1, Number(u.outputPreviewAnimDurationMs)), x = G((r - Number(u.outputPreviewAnimStartTs || 0)) / g, 0, 1), P = u.outputPreviewAnimTo > u.outputPreviewAnimFrom ? Gw(x) : qw(x);
      u.outputPreviewAnim = wn(u.outputPreviewAnimFrom, u.outputPreviewAnimTo, P), oe.dirty = !0, x >= 1 && (u.outputPreviewAnim = u.outputPreviewAnimTo);
    }
    if ((b = u.viewTween) != null && b.active) {
      const g = u.viewTween, x = G((r - g.startTs) / g.durationMs, 0, 1), M = Ro(x);
      u.viewYaw = Vt(g.startYaw + g.deltaYaw * M), u.viewPitch = g.startPitch + (g.targetPitch - g.startPitch) * M, u.viewFov = g.startFov + (g.targetFov - g.startFov) * M, oe.backgroundDirty = !0, oe.dirty = !0, x >= 1 && (u.viewTween = null);
    }
    if (u.viewInertia.vx = Number(Gt.state.inertia.vx || 0), u.viewInertia.vy = Number(Gt.state.inertia.vy || 0), u.viewInertia.active = !!Gt.state.inertia.active, Gt.stepInertia(r) && (u.viewInertia.vx = Number(Gt.state.inertia.vx || 0), u.viewInertia.vy = Number(Gt.state.inertia.vy || 0), u.viewInertia.active = !!Gt.state.inertia.active, oe.backgroundDirty = !0, oe.dirty = !0), (oe.dirty || r - oe.lastSizeCheckTs >= 220) && (Vu(), oe.lastSizeCheckTs = r), oe.pendingStableLayoutFrames > 0 && (oe.pendingStableLayoutFrames -= 1, oe.dirty = !0), oe.dirty) {
      if (oe.pendingStableLayoutFrames > 0)
        return;
      oe.dirty = !1, Cg();
    }
  }
  function Hu(r = performance.now()) {
    if (oe.running)
      try {
        Dg(r);
      } catch (o) {
        const s = String((o == null ? void 0 : o.stack) || (o == null ? void 0 : o.message) || o || "unknown editor frame error");
        oe.tickErrorSignature !== s && (oe.tickErrorSignature = s, console.error("[PanoramaStickers] editor frame failed", o)), k.stageStatus = Yn, k.stageStatusDetail = "frame", ce == null || ce.setAttribute("data-stage-ready", ""), ce == null || ce.removeAttribute("data-stage-loading-kind");
      } finally {
        oe.running && (oe.rafId = requestAnimationFrame(Hu));
      }
  }
  function Eg() {
    oe.running = !1, oe.rafId && cancelAnimationFrame(oe.rafId), oe.rafId = 0;
  }
  function Ze() {
    i || (u.historyController.commitActionGroup(JSON.stringify(jd(v))), vl());
  }
  function hl(r) {
    if (i) return;
    const o = r < 0 ? u.historyController.undo() : u.historyController.redo();
    if (vl(), !o) return;
    const s = JSON.parse(o);
    Object.keys(v).forEach((c) => delete v[c]), Object.assign(v, s), u.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, u.selectedIds = u.selectedId ? [u.selectedId] : [], In(), cn(), Ve(), gn(), fe({ cause: "cutout_frame" });
  }
  function Uu() {
    var s, c;
    const r = Array.isArray((s = u.historyController) == null ? void 0 : s.entries) ? u.historyController.entries : [], o = Number((c = u.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function cn() {
    Um();
    const r = m_({
      editor: u,
      swatches: es,
      paintColorPopOpen: Xe ? !Xe.hidden : !1,
      colorToCss: Vn,
      colorsApproximatelyEqual: ts,
      rgb01ToHsv: Ql,
      hsv01ToRgb: Zl,
      getBrushPresetIdForTool: kr,
      isActiveLassoTool: op
    });
    if (Object.assign(k.paintDock, r), dp(), !r.visible) {
      Xe && (Xe.hidden = !0);
      return;
    }
    pe && (clearTimeout(pe), pe = 0), hn && (!r.colorEnabled && Xe && !Xe.hidden && (pe = window.setTimeout(() => {
      Xe.hidden = !0, k.paintDock.colorPopOpen = !1, pe = 0;
    }, 170)), Xe && (Xe.style.setProperty("--picker-hue-color", r.pickerHueColor), Xe.style.setProperty("--picker-sat", r.pickerSat), Xe.style.setProperty("--picker-val", r.pickerVal), Xe.style.setProperty("--picker-hue", r.pickerHue)), Pn && (Pn.style.left = r.pickerSvLeft, Pn.style.top = r.pickerSvTop), H && (H.style.left = r.pickerHueLeft));
  }
  function aa() {
    const r = t === "cutout" && u.mode === "frame" ? Fe() : bt();
    r && (u.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: Pi(r)
    }, Ve());
  }
  function Ve() {
    var Le, Ke, de, Z;
    if (a) return;
    v.ui_settings = v.ui_settings || {};
    const r = h_(v.ui_settings);
    if (l) {
      k.sidePanel = p_({
        coverage: v.coverage,
        uiSettings: r,
        normalizeCoverageValue: Kt
      });
      return;
    }
    const o = bt(), s = t === "cutout" && u.mode === "frame" ? Fe() : null, c = s || o, h = s ? [s] : Tn(), m = s ? "shot" : Ja();
    h.length > 1 && (u.panelLastValues = u.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && m !== "stroke" && (u.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: Pi(c)
    });
    const b = u.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = m === "stroke" ? null : c, x = g || b, M = !!g;
    u.panelWasEnabled = M, tl();
    let P = null;
    if (s) {
      const ue = Xs({ item: s, kind: "shot", label: "Frame" });
      P = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ue.label,
        currentIcon: ue.icon || null,
        items: [{
          id: String(s.id || ""),
          label: ue.label,
          icon: ue.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const ue = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? tr().forEach((Ne, je) => {
        var It, at;
        if (!Ne) return;
        const qe = Ut(Ne) ? String(Ne.id || Wr) : String(((at = (It = v.assets) == null ? void 0 : It[Ne.asset_id]) == null ? void 0 : at.name) || Ne.asset_id || Ne.id), He = `${je + 1}. ${qe}${Ut(Ne) && hi(Ne) ? " (hidden)" : ""}`, et = Xs({ item: Ne, label: He, kind: "image" });
        ue.push({ id: Ne.id, label: et.label, icon: et.icon, item: Ne, kind: "image" });
      }) : uu().forEach((Ne) => {
        if (!(Ne != null && Ne.item)) return;
        const je = Xs(Ne);
        ue.push({ id: Ne.item.id, label: je.label, icon: je.icon, item: Ne.item, kind: Ne.kind });
      });
      const Ce = (g == null ? void 0 : g.id) || "", Ae = ue.find((Ne) => Ne.id === Ce) || ue[0];
      P = {
        label: "Selection",
        open: !1,
        disabled: ue.length <= 1,
        currentLabel: Ae.label,
        currentIcon: Ae.icon || null,
        items: ue.map((Ne) => ({
          id: Ne.id,
          label: Ne.label,
          icon: Ne.icon || null,
          active: Ne.id === Ce
        }))
      };
    }
    const N = [], T = (ue, Ce, Ae, Ne, je) => {
      const qe = G(Number(x[ue] || 0), Ae, Ne);
      N.push({
        key: ue,
        label: Ce,
        min: Ae,
        max: Ne,
        step: je,
        value: qe,
        displayValue: ma(qe),
        fillPct: G((qe - Ae) / Math.max(1e-6, Ne - Ae) * 100, 0, 100),
        enabled: M && !i
      });
    }, z = [];
    h.length > 1 ? (z.push(`Selected objects: ${h.length}`), z.push("Multi-selection supports z-order and delete.")) : (T("yaw_deg", "Yaw", -180, 180, 0.1), T("pitch_deg", "Pitch", -90, 90, 0.1), T("hFOV_deg", "H FOV", 1, 179, 0.1), T("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? T("rot_deg", "Rotation", -180, 180, 0.1) : T("roll_deg", "Roll", -180, 180, 0.1));
    const q = Array.isArray((Ke = (Le = v == null ? void 0 : v.painting) == null ? void 0 : Le.paint) == null ? void 0 : Ke.strokes) ? v.painting.paint.strokes.length : 0, B = Array.isArray((Z = (de = v == null ? void 0 : v.painting) == null ? void 0 : de.mask) == null ? void 0 : Z.strokes) ? v.painting.mask.strokes.length : 0, Y = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((ue) => String((ue == null ? void 0 : ue.name) || "")) : [], re = Vm(
      e,
      Y.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), le = !!String((re == null ? void 0 : re.src) || "").trim() || Js("pano_input_images").length > 0, ee = Array.isArray(tr()) && tr().length > 0 || q > 0, be = B > 0, Ee = [
      { key: "mask", label: "Mask", icon: Oe.circle_dashed_tool, visible: !!u.showMask, enabled: be },
      { key: "objects", label: "Paint / Images", icon: Oe.image, visible: !!u.showObjects, enabled: ee },
      { key: "panorama", label: "Panorama", icon: Oe.globe, visible: !!u.showPanorama, enabled: le }
    ].map((ue) => ({
      ...ue,
      ariaLabel: `Toggle ${ue.label.toLowerCase()}`,
      tip: ue.visible ? "Hide" : "Show"
    }));
    k.sidePanel = g_({
      coverage: v.coverage,
      readOnly: i,
      selectionPicker: P,
      enabled: M,
      selectedKind: m,
      selectedItems: h,
      params: N,
      notes: z,
      visibilityRows: Ee,
      uiSettings: r,
      normalizeCoverageValue: Kt
    });
  }
  function co(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function Bu(r) {
    if (i || t !== "stickers" && t !== "cutout" || !co(r)) return;
    const o = Ho("asset"), s = URL.createObjectURL(r);
    try {
      const c = await new Promise((b, g) => {
        const x = new Image();
        x.onload = () => b(x), x.onerror = () => g(new Error("image load failed")), x.src = s;
      });
      ge.set(o, c);
      const h = Ho("st");
      v.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: u.viewYaw,
        pitch_deg: u.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: zr(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
        rot_deg: 0,
        z_index: fu()
      }), di(v.stickers[v.stickers.length - 1]), ml(), Ze(), Ve(), Ge(), fe();
      const m = (async () => {
        const b = await il(r, String(r.name || o));
        (Array.isArray(v.stickers) ? v.stickers : []).filter((M) => String((M == null ? void 0 : M.asset_id) || "") === o).length && (v.assets[o] = b, yi(), it(), Ve(), Ge(), fe());
      })();
      Oo.set(o, m);
      try {
        await m;
      } finally {
        Oo.delete(o);
      }
    } catch {
      delete v.assets[o], ge.delete(o);
      const c = Array.isArray(v.stickers) ? v.stickers : [], h = c.filter((m) => String((m == null ? void 0 : m.asset_id) || "") === o);
      h.length && (v.stickers = c.filter((m) => String((m == null ? void 0 : m.asset_id) || "") !== o), h.some((m) => {
        var b;
        return String((m == null ? void 0 : m.id) || "") === String(((b = u.selection) == null ? void 0 : b.id) || "");
      }) && di(null), Ve(), Ge(), fe());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function Gu(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var c;
      const s = (c = o.files) == null ? void 0 : c[0];
      !s || typeof r != "function" || r(s);
    }, o.click();
  }
  function Og() {
    i || t !== "stickers" && t !== "cutout" || Gu((r) => {
      Bu(r);
    });
  }
  async function Rg(r) {
    var M;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = bt();
    if (!o || !gt(o) || Ut(o) || !co(r)) return;
    const s = String(o.id || ""), c = String(o.asset_id || ""), h = c ? Jt(((M = v.assets) == null ? void 0 : M[c]) || null) : null, m = Number(o.vFOV_deg || 0), b = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, g = Ho("asset"), x = URL.createObjectURL(r);
    try {
      const P = await new Promise((T, z) => {
        const q = new Image();
        q.onload = () => T(q), q.onerror = () => z(new Error("image load failed")), q.src = x;
      });
      ge.set(g, P), o.asset_id = g, o.vFOV_deg = zr(
        Number(o.hFOV_deg || 30),
        Number(P.naturalWidth || P.width || 1),
        Number(P.naturalHeight || P.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Bt(), Ze(), Ve(), Ge(), fe();
      const N = (async () => {
        const T = await il(r, String(r.name || g));
        (Array.isArray(v.stickers) ? v.stickers : []).some((B) => String((B == null ? void 0 : B.id) || "") === s && String((B == null ? void 0 : B.asset_id) || "") === g) && (v.assets[g] = T, yi(), it(), Ve(), Ge(), fe());
      })();
      Oo.set(g, N);
      try {
        await N;
      } finally {
        Oo.delete(g);
      }
    } catch {
      delete v.assets[g], ge.delete(g);
      const P = (Array.isArray(v.stickers) ? v.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === s) || null;
      P && String(P.asset_id || "") === g && (c && h && (v.assets[c] = h), P.asset_id = c, P.vFOV_deg = m, P.crop = b ? { ...b } : null), Bt(), Ve(), Ge(), fe();
    } finally {
      URL.revokeObjectURL(x);
    }
  }
  function Fg() {
    if (i) return;
    const r = bt();
    !r || !gt(r) || Ut(r) || Gu((o) => {
      Rg(o);
    });
  }
  async function Lg() {
    if (i || t !== "stickers") return;
    const r = v.assets && typeof v.assets == "object" ? v.assets : {}, o = Object.entries(r).filter(([, c]) => {
      const h = String((c == null ? void 0 : c.type) || "").toLowerCase(), m = String((c == null ? void 0 : c.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [c, h] of o)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const b = await fetch(m).then((N) => N.blob()), g = String(b.type || "image/png").split("/")[1] || "png", x = String((h == null ? void 0 : h.name) || `${c}.${g}`), M = new File([b], x, { type: b.type || "image/png" }), P = await il(M, x);
        v.assets[c] = {
          ...P,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (it(), fe());
  }
  function $g() {
    if (i || t !== "cutout") return;
    const r = Fe();
    if (r) {
      di(r), u.mode = "pano", Hs(
        Vt(Number(r.yaw_deg || 0)),
        G(Number(r.pitch_deg || 0), -89.9, 89.9),
        u.viewFov
      ), Ve(), Ge(), fe({ cause: "cutout_frame" });
      return;
    }
    const o = jr(), s = Sr(o), c = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoWidth) || (o == null ? void 0 : o.naturalWidth) || (o == null ? void 0 : o.width) : 0) || (F == null ? void 0 : F.width) || 1
    )), h = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoHeight) || (o == null ? void 0 : o.naturalHeight) || (o == null ? void 0 : o.height) : 0) || (F == null ? void 0 : F.height) || 1
    )), m = Math.max(0.1, c / h), b = G(Number(u.viewFov || 90), 1, 179), g = G(Math.min(42, b * 0.42), 8, 96), x = G(Sn * (2 * Math.atan(Math.tan(g * Ft * 0.5) / Math.max(0.1, m))), 6, 72), M = Em({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Vt(Number(u.viewYaw || 0)),
      pitch_deg: G(Number(u.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: g,
      vFOV_deg: x,
      locked: !1
    });
    v.shots = [M], di(M), ml(), u.mode = "pano", Ze(), it(), Ve(), Ge(), fe({ cause: "cutout_frame" });
  }
  function zg() {
    i || t === "cutout" && (v.shots = [], u.selectedId = null, u.selectedIds = [], u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, v.active.selected_shot_id = null, Ze(), it(), Ve(), fe());
  }
  function jg() {
    const r = Array.isArray(v.stickers) ? v.stickers : [], o = [];
    for (const s of r)
      Ut(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function Ku(r, o, s = "Clear") {
    return new Promise((c) => {
      k.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: c
      };
    });
  }
  async function Vg() {
    var s, c;
    if (i || !await Ku(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    v.painting = Pa(null), In();
    const o = jg();
    t === "stickers" ? (v.stickers = o, v.assets = {}, u.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], v.active.selected_sticker_id = ((c = o[0]) == null ? void 0 : c.id) || null, yi()) : (v.stickers = o, v.assets = {}, v.shots = [], u.selectedId = null, u.selectedIds = [], v.active.selected_sticker_id = null, v.active.selected_shot_id = null, u.mode === "frame" && (u.mode = "pano"), u.cutoutAspectOpen = !1, yi()), Ze(), it(), Ve(), Ge(), fe();
  }
  async function Hg(r) {
    var m, b, g, x;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", c = wi(o);
    if (!(!c.length && !(((m = u.interaction) == null ? void 0 : m.kind) === "draw" && ((b = u.interaction) == null ? void 0 : b.layerKind) === o) || !await Ku(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((g = u.interaction) == null ? void 0 : g.kind) === "draw" && ((x = u.interaction) == null ? void 0 : x.layerKind) === o) {
        const M = pn();
        M && u.paintEngine.cancelActiveStroke(M), u.interaction = null;
      }
      c.length = 0, v.painting.raster_objects = ln().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") !== o), o === "paint" && (Yt().length = 0), In(), Ze(), it(), Ve(), Ge(), cn(), fe();
    }
  }
  function Ug() {
    if (i) return;
    const r = bt();
    if (!r || !gt(r) || Ut(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = Ho("st"), o.yaw_deg = Vt((o.yaw_deg || 0) + 8), o.z_index = fu(), v.stickers.push(o), v.active.selected_sticker_id = o.id, u.selectedId = o.id, u.selectedIds = [o.id], Bt(), Ze(), it(), Ge(), Ve(), fe();
  }
  function Wu() {
    var s, c, h, m, b, g;
    if (i) return;
    const r = Tn(), o = bt();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const x = new Set(r.filter((N) => Ot(N)).map((N) => String(N.actionGroupId || N.id || ""))), M = new Set(r.filter((N) => qt(N)).map((N) => zt(N.rasterObjectId || N.id || ""))), P = new Set(r.filter(gt).map((N) => String(N.id || "")));
        x.size > 0 && (v.painting.paint.strokes = (Array.isArray((c = (s = v.painting) == null ? void 0 : s.paint) == null ? void 0 : c.strokes) ? v.painting.paint.strokes : []).filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || ""))), v.painting.groups = Yt().filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), In()), M.size > 0 && (v.painting.raster_objects = ln().filter((N) => !M.has(String((N == null ? void 0 : N.id) || ""))), xi()), P.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((N) => P.has(String((N == null ? void 0 : N.id) || "")) ? Ut(N) ? (hi(N) || (N.visible = !1), !0) : !1 : !0), yi(), Bt()), u.selectedId = null, u.selectedIds = [], Ze(), it(), Ve(), Ge(), fe();
        return;
      }
      if (Ot(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (h = v.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((M) => String((M == null ? void 0 : M.actionGroupId) || "").trim() !== x), v.painting.groups = Yt().filter((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() !== x), In(), u.selectedId = null, u.selectedIds = [], Ze(), it(), Ve(), Ge(), fe();
        return;
      }
      if (qt(o)) {
        const x = zt(o.rasterObjectId || o.id || "");
        v.painting.raster_objects = ln().filter((M) => String((M == null ? void 0 : M.id) || "").trim() !== x), xi(), u.selectedId = null, u.selectedIds = [], Ze(), it(), Ve(), Ge(), fe();
        return;
      }
      if (t === "stickers" || gt(o)) {
        if (Ut(o)) {
          if (hi(o)) return;
          o.visible = !1, Bt(), Ze(), it(), Ve(), Ge(), fe();
          return;
        }
        v.stickers = v.stickers.filter((x) => x.id !== o.id), yi(), Bt(), u.selectedId = ((b = v.stickers[0]) == null ? void 0 : b.id) || null, u.selectedIds = u.selectedId ? [u.selectedId] : [], v.active.selected_sticker_id = ((g = v.stickers[0]) == null ? void 0 : g.id) || null, Ze(), it(), Ve(), Ge(), fe();
        return;
      }
      zg();
    }
  }
  function Yu(r, o) {
    const s = oe.frameSafeRect;
    if (!r || !s || u.mode !== "frame") return !1;
    const c = ql * Gl(s, r), h = X1(q1(s, o), c);
    return r.hFOV_deg = h.hFOV_deg, r.vFOV_deg = h.vFOV_deg, !0;
  }
  function qu(r, o) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, c = (() => {
      const g = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(g)) {
        const [P, N] = g.split(":").map((T) => Number(T));
        if (Number.isFinite(P) && Number.isFinite(N)) return P >= N;
      }
      const x = Number(r.hFOV_deg || 64), M = Number(r.vFOV_deg || 40);
      return Math.abs(x - M) > 1e-6 ? x >= M : Qo(r) >= 1;
    })();
    let [h, m] = s[String(o)] || s["1:1"];
    h >= m !== c && ([h, m] = [m, h]);
    const b = h / m;
    if (!Yu(r, b)) {
      const g = G(Number(r.vFOV_deg || 40), 1, 179);
      r.vFOV_deg = g, r.hFOV_deg = $d(g, b);
    }
    r.aspect_id = `${h}:${m}`;
  }
  function Xu(r) {
    if (!r) return;
    const o = String(r.aspect_id || "").trim(), s = $s(r), c = s.tanHalfX / Math.max(1e-12, s.tanHalfY), h = 1 / Math.max(1e-12, c);
    if (!Yu(r, h)) {
      const m = G(Number(r.vFOV_deg || 60), 1, 179);
      r.vFOV_deg = m, r.hFOV_deg = $d(m, h);
    }
    if (/^\d+:\d+$/.test(o)) {
      const [m, b] = o.split(":");
      r.aspect_id = `${b}:${m}`;
    } else
      r.aspect_id = Xr(r);
  }
  function Ju() {
    ci().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Bg() {
    if (i) return;
    const r = Tn();
    if (!bt() || r.length === 0) return;
    Ju();
    const s = ci(), c = new Set(r.map((g) => gt(g) ? `sticker:${String(g.id || "")}` : qt(g) ? `rasterObject:${zt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var M, P;
      const x = g.type === "sticker" ? `sticker:${String(((M = g.item) == null ? void 0 : M.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((P = g.item) == null ? void 0 : P.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      c.has(x) ? h.push(g) : m.push(g);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...m, ...h].forEach((g, x) => {
      g.type === "sticker" && g.item && (g.item.z_index = x), g.type === "strokeGroup" && g.item && (g.item.z_index = x), g.type === "rasterObject" && g.item && (g.item.z_index = x);
    }), Bt(), Ze(), it(), Ge(), fe();
  }
  function Gg() {
    if (i) return;
    const r = Tn();
    if (!bt() || r.length === 0) return;
    Ju();
    const s = ci(), c = new Set(r.map((g) => gt(g) ? `sticker:${String(g.id || "")}` : qt(g) ? `rasterObject:${zt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var M, P;
      const x = g.type === "sticker" ? `sticker:${String(((M = g.item) == null ? void 0 : M.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((P = g.item) == null ? void 0 : P.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      c.has(x) ? h.push(g) : m.push(g);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...m].forEach((g, x) => {
      g.type === "sticker" && g.item && (g.item.z_index = x), g.type === "strokeGroup" && g.item && (g.item.z_index = x), g.type === "rasterObject" && g.item && (g.item.z_index = x);
    }), Bt(), Ze(), it(), Ge(), fe();
  }
  function Kg() {
    i || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", d && (v.output_preset = A(Number(v.output_preset || 2048))), p && (v.coverage = Kt(p.value)), y && (v.bg_color = String(y.value || v.bg_color || "#00ff00")), gn(), e.setDirtyCanvas(!0, !0));
  }
  function gn() {
    var o;
    if (i) return;
    v.coverage = Kt(v.coverage);
    const r = JSON.stringify(v);
    _ && (_.value = r, (o = _.callback) == null || o.call(_, r));
  }
  function uo() {
    v.ui_settings = tS(v.ui_settings), i || gn();
  }
  function it() {
    var r;
    i || (gn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function Wg() {
    i || Tp() && Nu().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function Yg(r = {}) {
    var c, h, m, b, g, x, M, P, N, T;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((h = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || h.call(c), (b = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || b.call(m), (g = e.setDirtyCanvas) == null || g.call(e, !0, !1)), s && ((M = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || M.call(x, !0, !0), (T = (N = (P = yn) == null ? void 0 : P.canvas) == null ? void 0 : N.setDirty) == null || T.call(N, !0, !0));
  }
  function ml() {
    u.primaryTool !== "cursor" && (u.primaryTool = "cursor", cn(), Ve());
  }
  function Vr(r) {
    const o = F.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * F.width,
      y: (r.clientY - o.top) / o.height * F.height
    };
  }
  function fo(r) {
    const o = F.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function Zu() {
    return u.mode === "pano" || u.mode === "unwrap";
  }
  function Fe() {
    if (t !== "cutout") return null;
    const r = Array.isArray(v.shots) ? v.shots : [];
    if (!r.length) return null;
    const o = String(v.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function qg() {
    var z, q, B, Y, re;
    if (!F) return null;
    const r = (z = F.getBoundingClientRect) == null ? void 0 : z.call(F), o = Number((r == null ? void 0 : r.width) || 0) > 0 ? F.width / r.width : 1, s = Number((r == null ? void 0 : r.height) || 0) > 0 ? F.height / r.height : 1;
    oe.frameCanvasScale = Math.min(o, s);
    let c = 24, h = 24;
    const m = Math.max(c + 1, F.width - 24);
    let b = Math.max(h + 1, F.height - 24);
    const g = (q = $e == null ? void 0 : $e.getBoundingClientRect) == null ? void 0 : q.call($e), x = (B = ze == null ? void 0 : ze.getBoundingClientRect) == null ? void 0 : B.call(ze);
    let M = 24;
    g && r && g.width > 0 && g.height > 0 && (M = Math.max(M, (g.right - r.left) * o + Bd)), x && r && x.width > 0 && x.height > 0 && ((Y = k.frameRail) == null ? void 0 : Y.visible) === !0 && (M = Math.max(M, (r.right - x.left) * o + Bd)), c = Math.max(c, M);
    const P = Math.min(m, F.width - M);
    let N = 24;
    const T = (re = _e == null ? void 0 : _e.getBoundingClientRect) == null ? void 0 : re.call(_e);
    if (T && r && T.width > 0 && T.height > 0 && (N = Math.max(N, (T.bottom - r.top) * s + Xl)), [wt, Et].forEach((le) => {
      var Ee;
      if (!le || !r) return;
      const ee = getComputedStyle(le);
      if (ee.display === "none" || ee.visibility === "hidden" || Number(ee.opacity) <= 0) return;
      const be = (Ee = le.getBoundingClientRect) == null ? void 0 : Ee.call(le);
      !be || be.width <= 0 || be.height <= 0 || (N = Math.max(N, (r.bottom - be.top) * s + Xl));
    }), X && r) {
      const le = getComputedStyle(X);
      le.display !== "none" && le.visibility !== "hidden" && Number(le.opacity) > 0 && (N = Math.max(N, (zw + Xl) * s));
    }
    return h = Math.max(h, N), b = Math.max(h + 1, Math.min(b, F.height - N)), {
      x: c,
      y: h,
      w: Math.max(1, P - c),
      h: Math.max(1, b - h)
    };
  }
  function pl(r = Fe()) {
    if (!r || !F) return null;
    const o = oe.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, F.width - 48),
      h: Math.max(1, F.height - 48)
    };
    return J1(o, r, ql * Gl(o, r));
  }
  function Rt(r = Fe()) {
    const o = pl(r);
    return o ? { x: o.x, y: o.y, w: o.w, h: o.h } : null;
  }
  function gl() {
    return t === "cutout" && !!Fe();
  }
  function Dn(r, o = performance.now()) {
    if (u.mode === "unwrap") {
      const m = wr(), b = (r.x - m.x) / Math.max(1, m.w), g = (r.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (b % 1 + 1) % 1,
        v: G(g, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = rl(r.x, r.y), { lon: c, lat: h } = ol(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: G(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function En(r, o, s = performance.now()) {
    const c = Rt(o);
    if (!c) return null;
    const h = {
      x: (Number(r.x) - c.x) / Math.max(1, c.w),
      y: (Number(r.y) - c.y) / Math.max(1, c.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = ul(o, h);
    if (!m) return null;
    const { lon: b, lat: g } = ol(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (b / (2 * Math.PI) + 0.5 + 1) % 1,
      v: G(0.5 - g / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Xg(r, o) {
    const s = Fe();
    if (!s) return !1;
    const c = Number(o) < 1, h = Q1(s, 1 / Number(o));
    if (!h) return !1;
    if (c) {
      const m = ql * Gl(
        oe.frameSafeRect || { w: F.width, h: F.height },
        h
      ), b = Ld({ width: F.width, height: F.height }, m);
      if (b.halfW < F.width * 0.5 - 1e-6 || b.halfH < F.height * 0.5 - 1e-6) return !1;
    }
    return s.hFOV_deg = h.hFOV_deg, s.vFOV_deg = h.vFOV_deg, u.frameWheelChanged = !0, u.frameWheelCommitTimer && window.clearTimeout(u.frameWheelCommitTimer), u.frameWheelCommitTimer = window.setTimeout(() => {
      u.frameWheelCommitTimer = 0, u.frameWheelChanged && (u.frameWheelChanged = !1, Ze(), it(), Ve());
    }, 180), Ve(), !0;
  }
  function Jg() {
    return u.frameWheelCommitTimer && (window.clearTimeout(u.frameWheelCommitTimer), u.frameWheelCommitTimer = 0), u.frameWheelChanged ? (u.frameWheelChanged = !1, Ze(), it(), Ve(), !0) : !1;
  }
  function oa() {
    const r = u.interaction;
    if (!(r != null && r.shot) || !r.start || r.kind !== "pan_frame" && r.kind !== "roll_frame") return !1;
    const o = r.kind === "roll_frame";
    return r.kind === "pan_frame" ? (r.shot.yaw_deg = r.start.yaw_deg, r.shot.pitch_deg = r.start.pitch_deg) : r.shot.roll_deg = r.start.roll_deg, o && Hr(), u.interaction = null, bi(), xr(), Ve(), ct(u.pointerPos), fe({ localOnly: !0 }), !0;
  }
  function Zg(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function kr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? sr : un[o] ? o : u.activeBrushPresetId || sr;
  }
  function Qu() {
    return (u.primaryTool === "paint" || u.primaryTool === "mask") && (Zu() || gl());
  }
  function ef() {
    var r;
    return Qu() && ((r = u.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function ho(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), c = Number((r == null ? void 0 : r.y) || 0), h = o !== !1, m = u.pointerPos || { x: 0, y: 0, inside: !1 }, b = m.inside !== h || Math.abs(m.x - s) > 0.01 || Math.abs(m.y - c) > 0.01;
    return u.pointerPos = { x: s, y: c, inside: h }, b;
  }
  function Qg() {
    var P, N;
    if (!ef()) return null;
    const r = u.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? u.maskTool : u.paintTool, s = kr(o), c = un[s] || un[sr], h = Number(u.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), b = Math.max(3, m * 0.5), g = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : bn(u.paintColor), x = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : G(Math.max(0.16, Number(g.a ?? 1) * 0.3), 0.16, 0.52), M = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : G(Math.max(0.46, Number(g.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: c,
      radius: b,
      fillStyle: Vn(g, x),
      strokeStyle: Vn(g, M),
      x: Number(((P = u.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((N = u.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: b,
      hotspotY: b
    };
  }
  function e0() {
    var T, z, q;
    const r = Qg();
    if (!U) return;
    if (!r) {
      U.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, c = "999px", h = 0, m = r.fillStyle, b = "1px solid rgba(222, 222, 222, 0.72)", g = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", M = "rgba(52, 52, 52, 0.72)";
    let P = Number(r.hotspotX ?? o * 0.5), N = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = ws, s = ws, c = "0", b = "0", g = "none", P = Hw, N = Uw, m = Jw(r.fillStyle, M, x);
    else if (r.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const B = Math.max(1, Number(((T = r.preset) == null ? void 0 : T.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * B), s = Math.max(6, r.radius * 2), c = `${Math.min(6, s * 0.42)}px`, h = Number(((q = (z = r.preset) == null ? void 0 : z.angle) == null ? void 0 : q.value) || 0) * Sn;
    } else r.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(o)}px`, U.style.height = `${Math.round(s)}px`, U.style.borderRadius = c, U.style.border = b, U.style.boxShadow = g, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(r.x - P)}px, ${Math.round(r.y - N)}px) rotate(${h}deg)`;
  }
  function t0() {
    var le;
    if (!ve || !xe) return;
    const r = u.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? u.maskTool : u.paintTool;
    if (o === "lasso_fill") return;
    const s = kr(o), c = un[s] || un[sr], h = Number(u.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), b = Math.max(6, m * 0.5), g = o === "eraser", x = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : g ? { r: 1, g: 1, b: 1, a: 0.22 } : bn(u.paintColor), M = r === "mask" ? Vn(x, 0.22) : g ? "rgba(255,255,255,0.14)" : Vn(x, G(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), P = r === "mask" ? Vn(x, 0.96) : g ? "rgba(255,255,255,0.72)" : Vn(x, G(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let N = b * 2, T = b * 2, z = "999px", q = 0, B = M;
    const Y = "rgba(222, 222, 222, 0.72)", re = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const ee = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      N = Math.max(16, b * 2 * ee), T = Math.max(10, b * 2), z = `${Math.min(8, T * 0.42)}px`, q = Number(((le = c == null ? void 0 : c.angle) == null ? void 0 : le.value) || 0) * Sn;
    } else o === "brush" ? B = `radial-gradient(circle at 50% 50%, ${P} 0%, ${M} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (N = Math.max(18, b * 1.8), T = N, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : g && (B = "rgba(255,255,255,0.12)");
    xe.style.width = `${Math.round(N)}px`, xe.style.height = `${Math.round(T)}px`, xe.style.borderRadius = z, xe.style.background = B, xe.style.border = `1px solid ${Y}`, xe.style.boxShadow = `0 0 0 1px ${re}`, xe.style.transform = `rotate(${q}deg)`, Q && (clearTimeout(Q), Q = 0), ve.classList.remove("fade-out"), ve.classList.add("show");
  }
  function mo() {
    !ve || !ve.classList.contains("show") || (ve.classList.add("fade-out"), Q && clearTimeout(Q), Q = window.setTimeout(() => {
      ve.classList.remove("show", "fade-out"), Q = 0;
    }, 180));
  }
  function tf(r, o, s, c) {
    const h = kr(o), m = un[h] || un[sr], b = u.brushSizes[h] ?? 10, g = Math.max(1, b) * Math.max(0.1, m.sizeScale ?? 1), x = Zg(c, g), M = s.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), P = {
      id: Ti(r),
      actionGroupId: Ti("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: g,
      createdAt: Date.now(),
      color: r === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: M.map((N) => ({ ...N })),
        points: M.map((N) => ({ ...N }))
      }
    };
    return Ed(P, m), Number(m.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function nf(r, o, s, c) {
    const h = s.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), m = kr(o), b = un[m] || un[sr], g = {
      id: Ti(r),
      actionGroupId: Ti("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(u.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(u.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...u.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((x) => ({ ...x }))
      }
    };
    return Ed(g, b), Number(b.aspect ?? 1), Number(g.aspect ?? 1), String(g.stampKind || ""), { ...g.targetSpace }, g;
  }
  function wi(r) {
    const o = v.painting || (v.painting = Pa(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function n0(r, o, s = performance.now()) {
    let c;
    if (u.mode === "frame") {
      const M = Fe();
      if (!M || (c = En(o, M, s), !c)) return !1;
    } else
      c = Dn(o, s);
    if (!c) return !1;
    const h = r.stroke.geometry.rawPoints || r.stroke.geometry.points, m = r.stroke.geometry.points, b = h[h.length - 1];
    if (b) {
      const M = Math.abs(Number(c.u ?? c.x ?? 0) - Number(b.u ?? b.x ?? 0)), P = Math.abs(Number(c.v ?? c.y ?? 0) - Number(b.v ?? b.y ?? 0));
      if (M < 15e-4 && P < 15e-4) return !1;
    }
    const g = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...g }), m.push({ ...g });
    const x = pn();
    if (x) {
      const M = u.paintEngine.ensureTarget(x);
      u.paintEngine.appendStrokePoint(M, Number(g.u ?? 0), Number(g.v ?? 0), r.stroke);
    }
    return !0;
  }
  function r0(r, o, s = performance.now()) {
    var b, g;
    let c;
    if (u.mode === "frame") {
      const x = Fe();
      if (!x) return !1;
      c = En(o, x, s);
    } else
      c = Dn(o, s);
    const h = (g = (b = r == null ? void 0 : r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.points;
    if (!c || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const x = Math.abs(Number(c.u ?? c.x ?? 0) - Number(m.u ?? m.x ?? 0)), M = Math.abs(Number(c.v ?? c.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (x < 15e-4 && M < 15e-4) return !1;
    }
    return h.push({
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function i0(r) {
    var ee, be, Ee, Le, Ke;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    so();
    const s = pn(), c = na(s.width, s.height);
    if (!zu(c, o, { w: s.width, h: s.height })) return !1;
    const h = ((be = (ee = c.ctx) == null ? void 0 : ee.getImageData(0, 0, s.width, s.height)) == null ? void 0 : be.data) || null;
    if (!h) return !1;
    const m = new Map(Yt().map((de) => [String((de == null ? void 0 : de.actionGroupId) || (de == null ? void 0 : de.id) || "").trim(), de ? { ...de } : null])), b = [], g = [], x = [...ln().filter((de) => String((de == null ? void 0 : de.layerKind) || "paint") !== "paint")];
    let M = !1, P = ci().reduce((de, Z) => Math.max(de, Number((Z == null ? void 0 : Z.z_index) || 0)), -1) + 1;
    function N(de, Z, ue, Ce = 8) {
      let Ae = Z, Ne = ue, je = -1, qe = -1;
      for (let He = 0; He < ue; He += 1)
        for (let et = 0; et < Z; et += 1)
          de[(He * Z + et) * 4 + 3] <= Ce || (et < Ae && (Ae = et), He < Ne && (Ne = He), et > je && (je = et), He > qe && (qe = He));
      return je < Ae || qe < Ne ? null : { minX: Ae, minY: Ne, maxX: je, maxY: qe };
    }
    const T = N(h, s.width, s.height, 8);
    if (!T) return !1;
    function z(de, Z) {
      return !de || !Z ? !1 : !(de.maxX < Z.minX || Z.maxX < de.minX || de.maxY < Z.minY || Z.maxY < de.minY);
    }
    function q(de, Z) {
      const ue = _r((de == null ? void 0 : de.actionGroupId) || (de == null ? void 0 : de.id) || "", "paint", Z);
      if (!ue) return null;
      const Ce = ue.centerUv.u - ue.halfW, Ae = ue.centerUv.u + ue.halfW, Ne = ue.centerUv.v - ue.halfH, je = ue.centerUv.v + ue.halfH, qe = s.width, He = s.height;
      return {
        minX: Math.floor((Ce % 1 + 1) % 1 * qe),
        maxX: Math.ceil((Ae % 1 + 1) % 1 * qe),
        minY: Math.floor(G(Ne, 0, 1) * He),
        maxY: Math.ceil(G(je, 0, 1) * He),
        wraps: Ae - Ce >= 1 || Ce < 0 || Ae > 1
      };
    }
    function B(de) {
      const Z = (de == null ? void 0 : de.bbox) || null;
      if (!Z) return null;
      const ue = (de == null ? void 0 : de.transform) || {}, Ce = s.width, Ae = s.height, Ne = Number(Z.u0 || 0) + Number(ue.du || 0), je = Number(Z.u1 || 0) + Number(ue.du || 0), qe = Number(Z.v0 || 0) + Number(ue.dv || 0), He = Number(Z.v1 || 0) + Number(ue.dv || 0);
      return {
        minX: Math.floor((Ne % 1 + 1) % 1 * Ce),
        maxX: Math.ceil((je % 1 + 1) % 1 * Ce),
        minY: Math.floor(G(qe, 0, 1) * Ae),
        maxY: Math.ceil(G(He, 0, 1) * Ae),
        wraps: je - Ne >= 1 || Ne < 0 || je > 1
      };
    }
    function Y(de) {
      return de ? de.wraps ? z(T, { minX: 0, maxX: de.maxX, minY: de.minY, maxY: de.maxY }) || z(T, { minX: de.minX, maxX: s.width - 1, minY: de.minY, maxY: de.maxY }) : z(T, de) : !0;
    }
    function re(de) {
      if (!de) return { touched: !1, canvas: null };
      const Z = na(s.width, s.height, { readback: !0 });
      Z.ctx.drawImage(de, 0, 0);
      const ue = Z.ctx.getImageData(0, 0, s.width, s.height);
      Z.ctx.save(), Z.ctx.globalCompositeOperation = "destination-out", Z.ctx.drawImage(c.canvas, 0, 0), Z.ctx.restore();
      const Ce = Z.ctx.getImageData(0, 0, s.width, s.height);
      for (let Ae = 0; Ae < s.width * s.height; Ae += 1) {
        if (h[Ae * 4 + 3] <= 8) continue;
        const je = ue.data[Ae * 4 + 3], qe = Ce.data[Ae * 4 + 3];
        if (je > qe)
          return { touched: !0, canvas: Z.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function le(de, Z, ue) {
      const Ce = Number(ue == null ? void 0 : ue.z_index), Ae = yg(de, Z, ue).map((Ne, je) => ({
        ...Ne,
        z_index: Number.isFinite(Ce) ? Ce + je * 1e-3 : P + je * 1e-3
      }));
      return Ae.length && (P = Math.max(P, ...Ae.map((Ne) => Number((Ne == null ? void 0 : Ne.z_index) || 0))) + 1), Ae;
    }
    for (const de of Yt()) {
      const Z = String((de == null ? void 0 : de.actionGroupId) || (de == null ? void 0 : de.id) || "").trim();
      if (!Z) continue;
      const ue = Cn(Z, "paint");
      if (!Y(q(de, ue))) {
        g.push(de), b.push(...ue);
        continue;
      }
      const Ce = ((Le = (Ee = u.paintEngine) == null ? void 0 : Ee.getGroupTarget) == null ? void 0 : Le.call(Ee, Z)) || null, Ae = ((Ke = Ce == null ? void 0 : Ce.committedPaint) == null ? void 0 : Ke.canvas) || null;
      if (!Ae) {
        g.push(de), b.push(...ue);
        continue;
      }
      const Ne = re(Ae);
      if (!Ne.touched || !Ne.canvas) {
        g.push(de), b.push(...ue);
        continue;
      }
      M = !0;
      const je = le(Ne.canvas, "paint", m.get(Z) || de || {});
      x.push(...je);
    }
    for (const de of ln().filter((Z) => String((Z == null ? void 0 : Z.layerKind) || "paint") === "paint")) {
      if (!Y(B(de))) {
        x.push(de);
        continue;
      }
      const Z = Su(de, null);
      if (!Z) {
        x.push(de);
        continue;
      }
      const ue = re(Z);
      if (!ue.touched || !ue.canvas) {
        x.push(de);
        continue;
      }
      M = !0;
      const Ce = le(ue.canvas, "paint", de);
      x.push(...Ce);
    }
    return M ? (v.painting.paint.strokes = b, v.painting.groups = g.sort((de, Z) => Number((de == null ? void 0 : de.z_index) || 0) - Number((Z == null ? void 0 : Z.z_index) || 0)), v.painting.raster_objects = x.sort((de, Z) => Number((de == null ? void 0 : de.z_index) || 0) - Number((Z == null ? void 0 : Z.z_index) || 0)), Qi({ preservePanelValues: !1 }), !0) : !1;
  }
  function a0(r) {
    var b, g, x, M, P;
    if ((((g = (b = r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.rawPoints) || ((M = (x = r.stroke) == null ? void 0 : x.geometry) == null ? void 0 : M.points) || []).length >= 1) {
      bl(r);
      const N = pn();
      N && (String(((P = r.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? u.paintEngine.cancelActiveStroke(N) : u.paintEngine.commitActiveStroke(r.stroke, N)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, h = tf(r.layerKind, s.toolKind, [], c);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = pn();
    m && u.paintEngine.beginStroke(h, m);
  }
  function o0(r) {
    var b, g;
    if ((((g = (b = r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.points) || []).length >= 3) {
      bl(r);
      const x = pn();
      x && u.paintEngine.commitActiveStroke(r.stroke, x), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(u.mode || "frame") }, h = nf(r.layerKind, s.toolKind, [], c);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = pn();
    m && u.paintEngine.beginStroke(h, m);
  }
  function bl(r) {
    var m, b, g, x;
    const o = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const s = String(((b = r == null ? void 0 : r.stroke) == null ? void 0 : b.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = fl(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), i0(r);
    const c = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (c && iu((g = r.stroke) == null ? void 0 : g.actionGroupId), wi(r.layerKind).push(r.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = fl(h, r.stroke.targetSpace, !0), c && iu((x = r.stroke) == null ? void 0 : x.actionGroupId), wi(r.layerKind).push(r.stroke), !0);
  }
  function rf(r) {
    var s;
    if (t === "cutout" && u.mode === "frame") {
      const c = Fe(), h = Rt(c);
      if (!c || !h || !(Number((r == null ? void 0 : r.x) || 0) >= Number(h.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(h.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const b = En(r, c, performance.now()), g = b ? vi(b) : null;
      if (g)
        for (const M of cl()) {
          if (!gt(M)) continue;
          const P = ia(M, g);
          if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
            const N = jt(M);
            if (N != null && N.visible) return { item: M, geom: N };
          }
        }
      const x = Gs(!1).slice().sort((M, P) => Number((P == null ? void 0 : P.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0));
      for (const M of x) {
        if (M.type === "strokeGroup") {
          const T = fi(Xi("paint", M.actionGroupId || M.id || ""));
          if (!T) continue;
          const z = jt(T);
          if (!(z != null && z.visible)) continue;
          const q = Array.isArray(z.strokePaths) ? z.strokePaths : [];
          for (const B of q) {
            const Y = Array.isArray(B == null ? void 0 : B.points) ? B.points : [];
            if (!Y.length) continue;
            if (B.closed && Y.length >= 3 && lr(r, Y)) return { item: T, geom: z };
            const re = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let le = 0; le < Y.length - 1; le += 1)
              if (Jl(r, Y[le], Y[le + 1]) <= re * re) return { item: T, geom: z };
            if (Y.length === 1 && Ar(r, Y[0]) <= re * re) return { item: T, geom: z };
          }
          continue;
        }
        if (M.type === "rasterObject") {
          const T = ui(Ji(((s = M.item) == null ? void 0 : s.id) || M.id || ""));
          if (!T) continue;
          const z = jt(T);
          if (wu(T, z, r, b)) return { item: T, geom: z };
          continue;
        }
        const P = M.item;
        if (!P || !gt(P) || !g) continue;
        const N = ia(P, g);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const T = jt(P);
          if (T != null && T.visible) return { item: P, geom: T };
        }
      }
      return null;
    }
    const o = [
      ...Gs(!1).slice().sort((c, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var h;
        return c.type === "strokeGroup" ? fi(Xi("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? ui(Ji(((h = c.item) == null ? void 0 : h.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? cl().filter((c) => mn(c)) : []
    ];
    for (const c of o) {
      if (Ot(c)) {
        const m = jt(c);
        if (!(m != null && m.visible)) continue;
        const b = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const g of b) {
          const x = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
          if (!x.length) continue;
          if (g.closed && x.length >= 3 && lr(r, x)) return { item: c, geom: m };
          const M = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
          for (let P = 0; P < x.length - 1; P += 1)
            if (Jl(r, x[P], x[P + 1]) <= M * M) return { item: c, geom: m };
          if (x.length === 1 && Ar(r, x[0]) <= M * M) return { item: c, geom: m };
        }
        continue;
      }
      if (qt(c)) {
        const m = jt(c);
        if (!(m != null && m.visible)) continue;
        if (wu(c, m, r)) return { item: c, geom: m };
        continue;
      }
      const h = jt(c);
      if (h.visible && lr(r, h.corners))
        return { item: c, geom: h };
    }
    return null;
  }
  function yl(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const c = r.corners.findIndex((m) => Ar(m, o) <= 121);
      if (c >= 0) {
        const m = r.corners[c], b = m.x - r.center.x, g = m.y - r.center.y, x = b * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: x };
      }
      const h = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const m of h) {
        const b = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && b.length >= 3 && lr(o, b)) return { kind: "move", cursor: "default" };
        const g = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < b.length - 1; x += 1)
          if (Jl(o, b[x], b[x + 1]) <= g * g) return { kind: "move", cursor: "default" };
      }
      return lr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const c = r.corners.findIndex((h) => Ar(h, o) <= 121);
      if (c >= 0) {
        const h = r.corners[c], m = h.x - r.center.x, b = h.y - r.center.y, g = m * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: g };
      }
      return lr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const c = r.edgeMidpoints.find((h) => Ar(h, o) <= 169);
      if (c) {
        const h = c.edge === "left" || c.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
      }
    }
    const s = r.corners.findIndex((c) => Ar(c, o) <= 121);
    if (s >= 0) {
      const c = r.corners[s], h = c.x - r.center.x, m = c.y - r.center.y, b = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: b };
    }
    return Ar(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : lr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: u.mode === "pano" ? "grab" : "default" };
  }
  function af(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function s0(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function l0(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => s0(r, h))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, c = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!lr({ x: s, y: c }, o.corners);
  }
  function ct(r) {
    if (e0(), u.interaction) {
      u.interaction.kind === "paint_stroke" || u.interaction.kind === "paint_lasso_fill" ? We("none") : u.interaction.kind === "view" || u.interaction.kind === "pan_frame" || u.interaction.kind === "roll_frame" ? We("grabbing") : u.interaction.kind === "move" || u.interaction.kind === "move_multi" || u.interaction.kind === "move_stroke_group" || u.interaction.kind === "move_raster_object" ? We("move") : u.interaction.kind === "scale" || u.interaction.kind === "scale_x" || u.interaction.kind === "scale_y" || u.interaction.kind === "scale_raster_object" ? We(u.interaction.cursor || "nwse-resize") : u.interaction.kind === "rotate" ? We("grabbing") : We("default");
      return;
    }
    if (ef()) {
      We("none");
      return;
    }
    if (u.mode === "frame") {
      if (u.altModifier && !i) {
        We($w);
        return;
      }
      if (u.primaryTool !== "cursor") {
        We("default");
        return;
      }
      We("grab");
      return;
    }
    if (u.primaryTool === "cursor" && u.marqueeModifier) {
      We("default");
      return;
    }
    const o = bt(), s = o ? jt(o) : null, c = o ? nr(o) : !1, h = c ? { kind: "none", cursor: "default" } : yl(s, r);
    if (!c && h.kind !== "none") {
      We(h.cursor);
      return;
    }
    if (u.primaryTool === "cursor" && rf(r)) {
      We("default");
      return;
    }
    We(u.mode === "pano" ? "grab" : "default");
  }
  function Ge() {
    var x, M;
    if (!Ht) return;
    if (u.mode === "frame") {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const r = bt(), o = Tn();
    if (!r && o.length === 0 || u.interaction) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Ja(), c = b_({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? Ys(o) : jt(r),
      allLocked: qs(o),
      selectedLocked: nr(r),
      activeAspect: Pi(r),
      cutoutAspectOpen: u.cutoutAspectOpen,
      isExternalSticker: Ut,
      isStickerHidden: hi,
      canRestoreSelectedToInitial: up,
      iconSet: Oe
    });
    if (!c.visible) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (P, N, { requireFitsBelow: T = !0 } = {}) => {
      var be, Ee, Le;
      const q = Number((be = c.anchor) == null ? void 0 : be.minX), B = Number((Ee = c.anchor) == null ? void 0 : Ee.maxX), Y = Number((Le = c.anchor) == null ? void 0 : Le.maxY);
      if (![q, B, Y].every(Number.isFinite)) return null;
      const re = Math.max(14, F.width - P - 14), le = G((q + B) * 0.5 - P * 0.5, 14, re), ee = Y + 18;
      return !Number.isFinite(le) || !Number.isFinite(ee) || T && ee + N > F.height - 14 ? null : { left: le, top: ee };
    }, m = Math.max(1, Number(((x = u.menuSize) == null ? void 0 : x.w) || 220)), b = Math.max(1, Number(((M = u.menuSize) == null ? void 0 : M.h) || 40)), g = h(m, b, { requireFitsBelow: !1 });
    if (!g) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    k.selectionMenu = {
      visible: !0,
      left: g.left,
      top: g.top,
      items: c.items
    }, requestAnimationFrame(() => {
      if (!Ht || k.selectionMenu.visible !== !0) return;
      const P = Ht.getBoundingClientRect(), N = Math.round(Number((P == null ? void 0 : P.width) || 0)) || 220, T = Math.round(Number((P == null ? void 0 : P.height) || 0)) || 40;
      u.menuSize = { w: N, h: T, measured: !0 };
      const z = h(N, T);
      if (!z) {
        k.selectionMenu.visible = !1;
        return;
      }
      k.selectionMenu.left = z.left, k.selectionMenu.top = z.top;
    });
  }
  function Hr() {
    ke.timer && (clearTimeout(ke.timer), ke.timer = 0), ke.target = null, k.tooltip.visible = !1;
  }
  function c0(r) {
    if (!St || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    k.tooltip.text = o, k.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var B, Y;
      if (ke.target !== s || !St || !(s != null && s.isConnected)) return;
      const c = ce.getBoundingClientRect(), h = s.getBoundingClientRect(), m = 8, b = 12, g = Math.round(Number(((B = St.getBoundingClientRect()) == null ? void 0 : B.width) || 0)) || 100, x = Math.round(Number(((Y = St.getBoundingClientRect()) == null ? void 0 : Y.height) || 0)) || 24, M = !!s.closest(".pano-floating-left"), P = !!s.closest(".pano-frame-rail"), N = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let T = "", z = h.left - c.left + h.width * 0.5 - g * 0.5, q = h.top - c.top - x - b;
      if (M)
        T = "tool-rail", z = h.right - c.left + 10, q = h.top - c.top + h.height * 0.5 - x * 0.5, z = G(z, m, Math.max(m, c.width - g - m)), q = G(q, m, Math.max(m, c.height - x - m));
      else if (P)
        T = "frame-rail", z = h.left - c.left - g - 10, q = h.top - c.top + h.height * 0.5 - x * 0.5, z = G(z, m, Math.max(m, c.width - g - m)), q = G(q, m, Math.max(m, c.height - x - m));
      else if (N) {
        T = "footer";
        const re = s.closest(".pano-paint-footer"), le = re ? re.getBoundingClientRect() : h;
        z = le.left - c.left + le.width * 0.5 - g * 0.5, q = le.bottom - c.top + 5, z = G(z, m, Math.max(m, c.width - g - m)), q = Math.max(m, q);
      }
      z = G(z, m, Math.max(m, c.width - g - m)), q = Math.max(m, q), k.tooltip.left = z, k.tooltip.top = q, k.tooltip.variant = T, k.tooltip.visible = !0;
    });
  }
  const Gt = Fs({
    getView: () => ({ yaw: u.viewYaw, pitch: u.viewPitch, fov: u.viewFov }),
    setView: (r) => {
      u.viewYaw = Vt(Number(r.yaw || 0)), u.viewPitch = G(Number(r.pitch || 0), -89.9, 89.9), u.viewFov = G(Number(r.fov || u.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = F.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || F.clientWidth || 0)),
        h: Math.max(1, Number(r.height || F.clientHeight || 0))
      };
    },
    getInvert: () => {
      var r, o;
      return {
        x: (r = v.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = v.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: wr,
    onInteraction: () => {
      oe.backgroundDirty = !0, oe.dirty = !0;
    }
  });
  function of(r, o, s = {}) {
    var m;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    r.accumulatedRad += W1(o, r.lastAngle), r.lastAngle = o;
    const c = Y1(r.start.roll_deg, r.accumulatedRad, {
      shiftKey: s.shiftKey,
      altKey: r.altStarted ? !1 : s.altKey
    });
    r.shot.roll_deg = c, r.changed = r.changed || Math.abs(r.accumulatedRad) > 1e-9;
    const h = (((m = k.sidePanel) == null ? void 0 : m.params) || []).find((b) => b.key === "roll_deg");
    h && (h.value = c, h.displayValue = ma(c), h.fillPct = (c + 180) / 360 * 100), Nr(), lf(r), fe({ localOnly: !0 });
  }
  const sf = (r, o) => {
    const s = Vr(r);
    return Math.atan2(s.y - o.y, s.x - o.x);
  };
  function lf(r) {
    var b, g;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    ke.timer && (clearTimeout(ke.timer), ke.timer = 0), ke.target = null;
    const o = Rt(r.shot), s = (b = F.getBoundingClientRect) == null ? void 0 : b.call(F), c = (g = ce.getBoundingClientRect) == null ? void 0 : g.call(ce);
    if (!o || !s || !c || F.width <= 0 || F.height <= 0) return;
    const h = s.width / F.width, m = s.height / F.height;
    k.tooltip.text = `${ma(r.shot.roll_deg)}°`, k.tooltip.left = s.left - c.left + (o.x + o.w * 0.5) * h, k.tooltip.top = s.top - c.top + (o.y + o.h * 0.5) * m + 12, k.tooltip.variant = "roll", k.tooltip.visible = !0;
  }
  De == null || De.addEventListener("pointerdown", (r) => {
    var m;
    if (r.button !== 0 || i || u.mode !== "frame") return;
    const o = Fe();
    if (!o) return;
    const s = Rt(o);
    if (!s) return;
    const c = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = sf(r, c);
    u.interaction = {
      kind: "roll_frame",
      shot: o,
      center: c,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(o.roll_deg ?? o.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = De.setPointerCapture) == null || m.call(De, r.pointerId), r.preventDefault(), Nr(), lf(u.interaction), fe({ localOnly: !0 });
  }), De == null || De.addEventListener("pointermove", (r) => {
    var o;
    ((o = u.interaction) == null ? void 0 : o.kind) !== "roll_frame" || u.interaction.source !== "knob" || of(
      u.interaction,
      sf(r, u.interaction.center),
      r
    );
  });
  const u0 = () => {
    const r = u.interaction;
    (r == null ? void 0 : r.kind) !== "roll_frame" || r.source !== "knob" || (r.changed && (Ze(), it(), Ve()), u.interaction = null, Hr(), xr(), Nr(), fe());
  };
  De == null || De.addEventListener("pointerup", u0), De == null || De.addEventListener("pointercancel", () => oa()), De == null || De.addEventListener("lostpointercapture", () => {
    var r;
    ((r = u.interaction) == null ? void 0 : r.source) === "knob" && oa();
  }), De == null || De.addEventListener("dblclick", (r) => {
    const o = u.mode === "frame" && !i ? Fe() : null;
    !o || Math.abs(Number(o.roll_deg ?? o.rot_deg ?? 0)) <= 1e-9 || (o.roll_deg = 0, Ze(), it(), Ve(), Nr(), fe(), r.preventDefault());
  }), F.onpointerdown = (r) => {
    const o = Vr(r);
    if (ho(o, !0), u.viewTween = null, Gt.state.inertia.active = !1, Gt.state.inertia.vx = 0, Gt.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), u.mode === "frame") {
        const g = Fe();
        if (!g || i) return;
        u.interaction = {
          kind: "pan_frame",
          shot: g,
          last: o,
          start: {
            yaw_deg: Number(g.yaw_deg || 0),
            pitch_deg: Number(g.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const g = u.mode === "unwrap" ? o : fo(r);
        u.interaction = { kind: "view", last: g, lastTs: performance.now() }, Gt.startDrag(g.x, g.y, r.pointerId, performance.now());
      }
      ct(o), F.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (u.mode === "frame" && r.altKey && !i) {
      const g = Fe(), x = Rt(g);
      if (!g || !x) return;
      const M = { x: x.x + x.w * 0.5, y: x.y + x.h * 0.5 }, P = Math.atan2(o.y - M.y, o.x - M.x);
      u.interaction = {
        kind: "roll_frame",
        shot: g,
        center: M,
        lastAngle: P,
        accumulatedRad: 0,
        start: { roll_deg: Number(g.roll_deg ?? g.rot_deg ?? 0) },
        changed: !1,
        altStarted: !0
      }, F.setPointerCapture(r.pointerId), r.preventDefault(), Nr(), fe({ localOnly: !0 });
      return;
    }
    if (u.mode === "frame" && u.primaryTool === "cursor") {
      const g = Fe();
      if (!g || i) return;
      u.interaction = {
        kind: "pan_frame",
        shot: g,
        last: o,
        start: { yaw_deg: Number(g.yaw_deg || 0), pitch_deg: Number(g.pitch_deg || 0) },
        changed: !1
      }, ct(o), F.setPointerCapture(r.pointerId), r.preventDefault();
      return;
    }
    if (i) {
      if (u.mode === "pano") {
        const g = fo(r);
        u.interaction = { kind: "view", last: g, lastTs: performance.now() }, Gt.startDrag(g.x, g.y, r.pointerId, performance.now()), ct(o), F.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (Xe && !Xe.hidden)
      return;
    if ((u.primaryTool === "paint" || u.primaryTool === "mask") && (Zu() || gl())) {
      const g = u.primaryTool === "mask" ? "mask" : "paint", x = u.primaryTool === "mask" ? u.maskTool : u.paintTool, M = u.mode === "frame" && gl() ? Fe() : null, P = { kind: "ERP_GLOBAL" }, N = M ? En(o, M, performance.now()) : Dn(o, performance.now());
      if (!N) {
        ct(o);
        return;
      }
      u.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: g,
        _livePreviewToken: Ti("live"),
        stroke: x === "lasso_fill" ? nf(g, x, [N], P) : tf(g, x, [N], P)
      }, bi();
      const T = pn();
      if (T)
        if (u.paintEngine.beginStroke(u.interaction.stroke, T), u.interaction.kind === "paint_stroke") {
          const z = u.paintEngine.ensureTarget(T), q = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), B = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          u.paintEngine.appendStrokePoint(z, q, B, u.interaction.stroke);
        } else
          u.paintEngine.updateActiveStroke(u.interaction.stroke, T);
      ct(o), F.setPointerCapture(r.pointerId), fe();
      return;
    }
    const s = Tn(), c = bt(), h = s.length > 1 ? Ys(s) : c ? jt(c) : null;
    if (u.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      u.interaction = { kind: "marquee_select", start: o, current: o }, ct(o), F.setPointerCapture(r.pointerId), fe({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((x) => nr(x)) ? { kind: "none" } : yl(h, o)).kind === "move") {
        u.interaction = {
          kind: "move_multi",
          items: s.map((x) => x),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((x) => gt(x)).map((x) => ({
            id: String(x.id || ""),
            yaw_deg: Number(x.yaw_deg || 0),
            pitch_deg: Number(x.pitch_deg || 0),
            center: (() => {
              var P, N;
              const M = jt(x);
              return M != null && M.visible ? { x: Number(((P = M.center) == null ? void 0 : P.x) || 0), y: Number(((N = M.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((x) => Ot(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: Jt(Cn(x.actionGroupId, x.layerKind)),
            frameSnapshot: Jt(_r(x.actionGroupId, x.layerKind)),
            center: (() => {
              var P, N;
              const M = jt(x);
              return M != null && M.visible ? { x: Number(((P = M.center) == null ? void 0 : P.x) || 0), y: Number(((N = M.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Ws(x.actionGroupId, x.layerKind)
          })),
          rasterSnapshots: s.filter((x) => qt(x)).map((x) => ({
            id: zt(x.rasterObjectId || x.id || ""),
            snapshot: Jt(ln().find((M) => String((M == null ? void 0 : M.id) || "") === zt(x.rasterObjectId || x.id || ""))),
            center: (() => {
              var P, N;
              const M = jt(x);
              return M != null && M.visible ? { x: Number(((P = M.center) == null ? void 0 : P.x) || 0), y: Number(((N = M.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Au(x)
          }))
        }, ct(o), F.setPointerCapture(r.pointerId);
        return;
      }
    } else if (c && (h != null && h.visible)) {
      const g = nr(c) ? { kind: "none" } : yl(h, o);
      if (g.kind === "scale") {
        u.interaction = Ot(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Jt(Cn(c.actionGroupId, c.layerKind)),
          frameSnapshot: Jt(_r(c.actionGroupId, c.layerKind)),
          cursor: g.cursor
        } : qt(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Jt(ln().find((x) => String((x == null ? void 0 : x.id) || "") === zt(c.rasterObjectId || c.id || ""))),
          cursor: g.cursor
        } : {
          kind: "scale",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: g.cursor
        }, ct(o), F.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "scale_x" || g.kind === "scale_y") {
        u.interaction = {
          kind: g.kind,
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: g.cursor,
          edge: g.edge
        }, ct(o), F.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "rotate") {
        u.interaction = Ot(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: Jt(Cn(c.actionGroupId, c.layerKind)),
          frameSnapshot: Jt(_r(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: h.center,
          startRot: Number(c.rot_deg || c.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, ct(o), F.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "move") {
        if (Ot(c)) {
          const x = u.mode === "frame" ? (() => {
            const M = Fe();
            return M ? En(o, M, performance.now()) : null;
          })() : Dn(o, performance.now());
          u.interaction = {
            kind: "move_stroke_group",
            item: c,
            startUv: x,
            snapshot: Jt(Cn(c.actionGroupId, c.layerKind)),
            frameSnapshot: Jt(_r(c.actionGroupId, c.layerKind))
          }, ct(o), F.setPointerCapture(r.pointerId);
          return;
        }
        if (qt(c)) {
          const x = u.mode === "frame" ? (() => {
            const M = Fe();
            return M ? En(o, M, performance.now()) : null;
          })() : Dn(o, performance.now());
          u.interaction = {
            kind: "move_raster_object",
            item: c,
            startUv: x,
            snapshot: Jt(ln().find((M) => String((M == null ? void 0 : M.id) || "") === zt(c.rasterObjectId || c.id || "")))
          }, ct(o), F.setPointerCapture(r.pointerId);
          return;
        }
        u.interaction = {
          kind: "move",
          item: c,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, ct(o), F.setPointerCapture(r.pointerId);
        return;
      }
    }
    const m = rf(o);
    if (m) {
      const g = u.selectedId !== m.item.id;
      if (g && u.selectedId && (Ze(), gn()), di(m.item), t === "cutout" && g && (u.cutoutAspectOpen = !1), g && Ve(), Ge(), fe(), nr(m.item)) {
        ct(o);
        return;
      }
      u.interaction = {
        kind: Ot(m.item) ? "move_stroke_group" : qt(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Ot(m.item) || qt(m.item) ? u.mode === "frame" ? (() => {
          const x = Fe();
          return x ? En(o, x, performance.now()) : null;
        })() : Dn(o, performance.now()) : null,
        snapshot: Ot(m.item) ? Jt(Cn(m.item.actionGroupId, m.item.layerKind)) : qt(m.item) ? Jt(ln().find((x) => String((x == null ? void 0 : x.id) || "") === zt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Ot(m.item) ? Jt(_r(m.item.actionGroupId, m.item.layerKind)) : null
      }, ct(o), F.setPointerCapture(r.pointerId);
      return;
    }
    const b = !!u.selectedId;
    if (b && (Ze(), gn()), Qi(), b && Ve(), Ge(), fe(), u.mode === "pano") {
      const g = fo(r);
      u.interaction = { kind: "view", last: g, lastTs: performance.now() }, Gt.startDrag(g.x, g.y, r.pointerId, performance.now()), ct(o), F.setPointerCapture(r.pointerId);
    }
  }, F.onpointermove = (r) => {
    var c, h, m, b, g, x, M, P, N, T, z, q, B, Y, re, le, ee, be, Ee, Le, Ke, de;
    const o = Vr(r);
    if (ho(o, !0), !u.interaction) {
      ct(o);
      return;
    }
    ct(o);
    const s = u.interaction;
    if (s.kind === "paint_stroke") {
      const Z = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let ue = !1;
      Z.forEach((Ce) => {
        const Ae = Vr(Ce);
        if (u.mode === "frame") {
          const Ne = Fe(), je = Ne ? Rt(Ne) : null;
          if (je) {
            const qe = (Ae.x - je.x) / Math.max(1, je.w), He = (Ae.y - je.y) / Math.max(1, je.h);
            if (!(qe >= 0 && qe <= 1 && He >= 0 && He <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, a0(s));
          }
        }
        n0(s, Ae, performance.now()) && (ue = !0);
      }), ue && fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const Z = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let ue = !1;
      if (Z.forEach((Ce) => {
        const Ae = Vr(Ce);
        if (u.mode === "frame") {
          const Ne = Fe(), je = Ne ? Rt(Ne) : null;
          if (je) {
            const qe = (Ae.x - je.x) / Math.max(1, je.w), He = (Ae.y - je.y) / Math.max(1, je.h);
            if (!(qe >= 0 && qe <= 1 && He >= 0 && He <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, o0(s));
          }
        }
        r0(s, Ae, performance.now()) && (ue = !0);
      }), ue) {
        const Ce = pn();
        Ce && u.paintEngine.updateActiveStroke(s.stroke, Ce), fe({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const Z = performance.now(), ue = u.mode === "unwrap" ? o : fo(r);
      Gt.moveDrag(ue.x, ue.y, u.mode === "unwrap" ? "unwrap" : "pano", Z), s.lastTs = Z, s.last = ue, fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      const Z = pl(s.shot);
      if (!Z || !s.shot) return;
      const ue = (c = v.ui_settings) != null && c.invert_view_x ? -1 : 1, Ce = (h = v.ui_settings) != null && h.invert_view_y ? -1 : 1, Ae = (o.x - s.last.x) * ue, Ne = (o.y - s.last.y) * Ce, je = Math.max(1, Number(Z.focalPx || 1)), qe = Number(s.shot.roll_deg ?? s.shot.rot_deg ?? 0) * Ft, He = Math.cos(qe), et = Math.sin(qe), It = Ae / je, at = -Ne / je, Mt = It * He - at * et, ar = It * et + at * He, yo = Number(s.shot.pitch_deg || 0) * Ft, vo = Math.max(0.25, Math.abs(Math.cos(yo)));
      s.shot.yaw_deg = Vt(
        Number(s.shot.yaw_deg || 0) - Math.atan(Mt) / vo * Sn
      ), s.shot.pitch_deg = G(
        Number(s.shot.pitch_deg || 0) - Math.atan(ar) * Sn,
        -90,
        90
      ), s.changed = s.changed || Math.abs(Ae) > 0 || Math.abs(Ne) > 0, s.last = o, fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "roll_frame") {
      if (s.source === "knob") return;
      const Z = Math.atan2(o.y - s.center.y, o.x - s.center.x);
      of(s, Z, r);
      return;
    }
    if (s.kind === "move") {
      const Z = o.x - s.offset.x, ue = o.y - s.offset.y;
      if (u.mode === "frame" && t === "cutout") {
        const Ce = Fe(), Ae = Rt(Ce);
        if (!Ce || !Ae) return;
        const Ne = {
          x: G((Z - Ae.x) / Math.max(1, Ae.w), 0, 1),
          y: G((ue - Ae.y) / Math.max(1, Ae.h), 0, 1)
        }, je = ul(Ce, Ne);
        if (!je) return;
        const qe = zo(je);
        s.item.yaw_deg = qe.yaw, s.item.pitch_deg = qe.pitch;
      } else if (u.mode === "unwrap") {
        const Ce = wr(), Ae = G((Z - Ce.x) / Math.max(Ce.w, 1), 0, 1), Ne = G((ue - Ce.y) / Math.max(Ce.h, 1), 0, 1);
        s.item.yaw_deg = Vt(Ae * 360 - 180), s.item.pitch_deg = G(90 - Ne * 180, -90, 90);
      } else {
        const Ce = rl(Z, ue), Ae = zo(Ce);
        s.item.yaw_deg = Ae.yaw, s.item.pitch_deg = Ae.pitch;
      }
      gt(s.item) && Bt(), fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const Z = u.mode === "frame" ? (() => {
        const Ae = Fe();
        return Ae ? En(o, Ae, performance.now()) : null;
      })() : Dn(o, performance.now());
      if (!Z || !s.startUv) return;
      const ue = xn(Number(Z.u || 0), Number(s.startUv.u || 0)), Ce = Number(Z.v || 0) - Number(s.startUv.v || 0);
      ou((m = s.item) == null ? void 0 : m.actionGroupId, ue, Ce, s.snapshot, (b = s.item) == null ? void 0 : b.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !1 }), fe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const Z = u.mode === "frame" ? (() => {
        const Ae = Fe();
        return Ae ? En(o, Ae, performance.now()) : null;
      })() : Dn(o, performance.now());
      if (!Z || !s.startUv) return;
      const ue = xn(Number(Z.u || 0), Number(s.startUv.u || 0)), Ce = Number(Z.v || 0) - Number(s.startUv.v || 0);
      lu(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((x = s.item) == null ? void 0 : x.id) || "", ue, Ce, s.snapshot) && (xi(), fe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const ue = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      Qm(((M = s.item) == null ? void 0 : M.rasterObjectId) || ((P = s.item) == null ? void 0 : P.id) || "", ue, s.snapshot) && (xi(), fe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const Z = o.x - Number(((N = s.offset) == null ? void 0 : N.x) || 0), ue = o.y - Number(((T = s.offset) == null ? void 0 : T.y) || 0);
      let Ce = !1, Ae = !1, Ne = !1;
      const je = Z - Number(((z = s.startCenter) == null ? void 0 : z.x) || Z), qe = ue - Number(((q = s.startCenter) == null ? void 0 : q.y) || ue);
      for (const He of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const et = (t === "cutout" ? Ks() : tr()).find((at) => String((at == null ? void 0 : at.id) || "") === String(He.id || ""));
        if (!et || !gt(et)) continue;
        const It = {
          x: Number(((B = He.center) == null ? void 0 : B.x) || 0) + je,
          y: Number(((Y = He.center) == null ? void 0 : Y.y) || 0) + qe
        };
        if (u.mode === "frame" && t === "cutout") {
          const at = Fe(), Mt = Rt(at);
          if (!at || !Mt) continue;
          const ar = {
            x: G((It.x - Mt.x) / Math.max(1, Mt.w), 0, 1),
            y: G((It.y - Mt.y) / Math.max(1, Mt.h), 0, 1)
          }, yo = ul(at, ar);
          if (!yo) continue;
          const vo = zo(yo);
          et.yaw_deg = vo.yaw, et.pitch_deg = vo.pitch;
        } else if (u.mode === "unwrap") {
          const at = wr(), Mt = G((It.x - at.x) / Math.max(at.w, 1), 0, 1), ar = G((It.y - at.y) / Math.max(at.h, 1), 0, 1);
          et.yaw_deg = Vt(Mt * 360 - 180), et.pitch_deg = G(90 - ar * 180, -90, 90);
        } else {
          const at = rl(It.x, It.y), Mt = zo(at);
          et.yaw_deg = Mt.yaw, et.pitch_deg = Mt.pitch;
        }
        Ce = !0;
      }
      for (const He of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const et = {
          x: Number(((re = He.center) == null ? void 0 : re.x) || 0) + je,
          y: Number(((le = He.center) == null ? void 0 : le.y) || 0) + qe
        }, It = u.mode === "frame" ? (() => {
          const Mt = Fe();
          return Mt ? En(et, Mt, performance.now()) : null;
        })() : Dn(et, performance.now()), at = He.centerUv || null;
        if (It && at) {
          const Mt = xn(Number(It.u || 0), Number(at.u || 0)), ar = Number(It.v || 0) - Number(at.v || 0);
          ou(He.id, Mt, ar, He.snapshot, He.layerKind, He.frameSnapshot) && (Ce = !0, Ae = !0);
        }
      }
      for (const He of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const et = {
          x: Number(((ee = He.center) == null ? void 0 : ee.x) || 0) + je,
          y: Number(((be = He.center) == null ? void 0 : be.y) || 0) + qe
        }, It = u.mode === "frame" ? (() => {
          const Mt = Fe();
          return Mt ? En(et, Mt, performance.now()) : null;
        })() : Dn(et, performance.now()), at = He.centerUv || null;
        if (It && at) {
          const Mt = xn(Number(It.u || 0), Number(at.u || 0)), ar = Number(It.v || 0) - Number(at.v || 0);
          lu(He.id, Mt, ar, He.snapshot) && (Ce = !0, Ne = !0);
        }
      }
      Ce && (Ae ? In({ rebuildPaintEngine: !1 }) : Ne ? xi() : Bt(), fe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const ue = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      su((Ee = s.item) == null ? void 0 : Ee.actionGroupId, ue, 0, s.snapshot, (Le = s.item) == null ? void 0 : Le.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !1 }), fe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let Z = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * Sn;
      r.shiftKey && (Z = Math.round(Z / 45) * 45), su((Ke = s.item) == null ? void 0 : Ke.actionGroupId, 1, Z, s.snapshot, (de = s.item) == null ? void 0 : de.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !1 }), fe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const ue = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = G(s.startHFOV * ue, 1, 179), s.item.vFOV_deg = G(s.startVFOV * ue, 1, 179), s.item.aspect_id = Xr(s.item), gt(s.item) && Bt(), fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const ue = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = G(s.startHFOV * ue, 1, 179), s.item.aspect_id = Xr(s.item), gt(s.item) && Bt(), fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const ue = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = G(s.startVFOV * ue, 1, 179), s.item.aspect_id = Xr(s.item), gt(s.item) && Bt(), fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let ue = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * Sn, Ce = s.startRot - ue;
      r.shiftKey && (Ce = Math.round(Ce / 45) * 45);
      const Ae = gt(s.item) ? "rot_deg" : "roll_deg";
      s.item[Ae] = Ce, gt(s.item) && Bt(), fe({ localOnly: !0 });
    }
  }, F.onpointerup = () => {
    var o, s, c, h, m, b, g, x;
    const r = u.interaction;
    if (!((r == null ? void 0 : r.kind) === "roll_frame" && r.source === "knob")) {
      if (((o = u.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = u.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        bi();
        const M = bl(u.interaction), P = !!u.interaction._hasCommittedSegments;
        if (M || P) {
          In();
          const N = String(((c = u.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
          if (N) {
            const z = Yt().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === N);
            z && (z.frame = null);
          }
          const T = pn();
          T && (M ? String(((h = u.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (u.paintEngine.cancelActiveStroke(T), Fu()) : u.paintEngine.commitActiveStroke(u.interaction.stroke, T) : u.paintEngine.cancelActiveStroke(T)), Ze(), gn(), Ve(), Ge(), e.setDirtyCanvas(!0, !0), fe();
        } else {
          const N = pn();
          N && u.paintEngine.cancelActiveStroke(N);
        }
      } else if (((m = u.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const M = af(u.interaction.start, u.interaction.current), N = [
          ...t === "cutout" ? cl().filter((T) => !mn(T)) : [...tr()],
          ...qm(),
          ...Xm()
        ].filter((T) => l0(M, jt(T)));
        np(N, ((b = N[N.length - 1]) == null ? void 0 : b.id) || null), t === "cutout" && N.length && (u.cutoutAspectOpen = !1), Ve(), Ge(), fe();
      } else if (((g = u.interaction) == null ? void 0 : g.kind) === "pan_frame" || ((x = u.interaction) == null ? void 0 : x.kind) === "roll_frame")
        u.interaction.changed && (Ze(), it(), Ve());
      else if (u.interaction && u.interaction.kind !== "view") {
        let M = !1;
        (u.interaction.kind === "move_stroke_group" || u.interaction.kind === "scale_stroke_group" || u.interaction.kind === "rotate_stroke_group") && (M = !0), (u.interaction.kind === "move_raster_object" || u.interaction.kind === "scale_raster_object") && (M = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length && (M = !0), u.interaction.kind === "move_multi" && Array.isArray(u.interaction.rasterSnapshots) && u.interaction.rasterSnapshots.length && (M = !0), M && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(u.interaction.kind) || u.interaction.kind === "move_multi" && Array.isArray(u.interaction.strokeSnapshots) && u.interaction.strokeSnapshots.length ? In({ rebuildPaintEngine: !0 }) : xi()), Ze(), gn(), e.setDirtyCanvas(!0, !0), aa(), u.hqFrames = 1, Ge(), fe();
      }
      u.interaction = null, (r == null ? void 0 : r.kind) === "roll_frame" && Hr(), bi(), r && r.kind === "view" && Gt.endDrag(performance.now()), xr(), Ge(), ct(u.pointerPos), fe();
    }
  }, F.onpointercancel = () => {
    var r, o, s;
    if (!oa()) {
      if (((r = u.interaction) == null ? void 0 : r.kind) === "view" && Gt.endDrag(performance.now()), ((o = u.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = u.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        bi();
        const c = pn();
        c && u.paintEngine.cancelActiveStroke(c);
      }
      u.interaction = null, bi(), xr(), ct(u.pointerPos), fe({ localOnly: !0 });
    }
  }, F.onlostpointercapture = () => {
    oa();
  }, F.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, F.onmousemove = (r) => {
    const o = Vr(r), s = ho(o, !0);
    u.interaction || (ct(o), s && u.mode === "frame" && u.primaryTool === "cursor" && fe({ localOnly: !0 }));
  }, F.onmouseleave = () => {
    ho(u.pointerPos, !1), ct(u.pointerPos), u.mode === "frame" && u.primaryTool === "cursor" && fe({ localOnly: !0 });
  }, F.onwheel = (r) => {
    if (u.mode === "frame") {
      const o = Vr(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      Xg(o, s) && fe({ localOnly: !0 }), r.preventDefault();
      return;
    }
    u.mode === "pano" && (Gt.applyWheelEvent(r) && fe({ localOnly: !0 }), r.preventDefault());
  }, F.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), $r(!0));
  }, F.ondrop = (r) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), Qe.depth = 0, $r(!1);
    const s = Array.from(((c = r.dataTransfer) == null ? void 0 : c.files) || []).find((h) => co(h));
    s && Bu(s);
  };
  const cf = (r) => {
    t !== "stickers" && t !== "cutout" || i || Vs(r) && (Qe.depth += 1, $r(!0), r.preventDefault());
  }, uf = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!Qe.active && Vs(r) && $r(!0), Qe.active && r.preventDefault());
  }, ff = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !Qe.active) return;
    Qe.depth = Math.max(0, Qe.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (Qe.depth === 0 || o) && $r(!1);
  }, df = (r) => {
    t !== "stickers" && t !== "cutout" || i || (Qe.depth = 0, $r(!1), Vs(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", cf, !0), window.addEventListener("dragover", uf, !0), window.addEventListener("dragleave", ff, !0), window.addEventListener("drop", df, !0);
  function vl() {
    const { canUndo: r, canRedo: o } = Uu();
    Ai(k.toolButtons, "value", "undo", { disabled: !r }), Ai(k.toolButtons, "value", "redo", { disabled: !o });
  }
  const hf = (r, o, s = !1) => {
    var x;
    const c = t === "cutout" && u.mode === "frame" ? Fe() : null, h = c || bt(), m = c ? "shot" : Ja();
    if (!h || m === "stroke") return;
    const b = (((x = k.sidePanel) == null ? void 0 : x.params) || []).find((M) => M.key === r);
    if (!b || b.enabled === !1) return;
    let g = Number(o);
    Number.isNaN(g) && (g = 0), g = G(g, Number(b.min), Number(b.max)), r === "yaw_deg" && (g = Vt(g)), h[r] = g, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (h.aspect_id = Xr(h)), Ve(), fe(), s && Ze();
  };
  ye == null || ye.addEventListener("click", async (r) => {
    var c, h, m, b, g, x, M, P, N;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const T = Kt(o.getAttribute("data-coverage"));
      if (T === Kt(v.coverage)) return;
      v.coverage = T, u.coverage = T, p && (p.value = String(T)), l ? oe.backgroundDirty = !0 : (gn(), Yg({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ve(), Ge(), fe();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((h = (c = k.sidePanel) == null ? void 0 : c.selectionPicker) != null && h.disabled) return;
      k.sidePanel.selectionPicker.open = !k.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      k.sidePanel.selectionPicker.open = !1;
      const T = String(o.getAttribute("data-selection-id") || "");
      let z = null;
      T && (t === "stickers" ? z = tr().find((q) => String((q == null ? void 0 : q.id) || "") === T) || null : z = ((m = uu().find((q) => {
        var B;
        return String(((B = q == null ? void 0 : q.item) == null ? void 0 : B.id) || "") === T;
      })) == null ? void 0 : m.item) || null), di(z || null), z && !Ot(z) && Hs(
        Vt(Number(z.yaw_deg || 0)),
        G(Number(z.pitch_deg || 0), -89.9, 89.9),
        u.viewFov
      ), Ve(), Ge(), fe();
      return;
    }
    if (s === "copy-state-inline") {
      const T = bt(), z = Ja();
      if (!T || z === "stroke" || Tn().length > 1) return;
      const q = JSON.stringify(t === "cutout" && z !== "image" ? bu(T) : pp(T));
      try {
        await navigator.clipboard.writeText(q), (b = k.sidePanel) != null && b.copyStateButton && (k.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = k.sidePanel) != null && B.copyStateButton && (k.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const T = String(o.getAttribute("data-visibility") || "");
      T === "panorama" ? u.showPanorama = !u.showPanorama : T === "objects" ? u.showObjects = !u.showObjects : T === "mask" && (u.showMask = !u.showMask), Ve(), fe();
      return;
    }
    if (s === "set-invert-x") {
      v.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", uo(), Ve(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), fe();
      return;
    }
    if (s === "set-invert-y") {
      v.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", uo(), Ve(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), fe();
      return;
    }
    if (s === "toggle-quality-picker") {
      (M = k.sidePanel) != null && M.uiSettings && (k.sidePanel.uiSettings.qualityOpen = !k.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const T = String(o.getAttribute("data-quality") || "balanced");
      v.ui_settings.preview_quality = T === "draft" || T === "high" ? T : "balanced", uo(), Ve(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), fe();
      return;
    }
    if (s === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, v.ui_settings.preview_quality = "balanced", uo(), Ve(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), fe();
      return;
    }
    if (s === "close-preview") {
      Mi();
      return;
    }
    if (s === "cancel-close") {
      Mi();
      return;
    }
    s === "save-close" && (Kg(), Mi());
  }), ye == null || ye.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && hf(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), ye == null || ye.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && hf(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const _l = () => vu();
  _l(), W.addEventListener("click", (r) => {
    var g, x, M, P;
    if ((x = (g = r.target) == null ? void 0 : g.matches) != null && x.call(g, "[data-confirm-overlay]")) {
      const N = (M = k.confirmDialog) == null ? void 0 : M.resolve;
      k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      const N = u.mode;
      u.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && u.mode === "frame" && (N !== "frame" && (oe.frameSafeRect = null), Ve(), Ge()), ml(), xr(), fe();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const N = String(s.getAttribute("data-tool-mode") || "cursor");
        u.primaryTool = N, (N === "paint" || N === "mask") && Qi({ preservePanelValues: !0 }), cn(), Ve(), Ge(), fe();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const N = String(s.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && s.disabled) return;
        N === "undo" ? hl(-1) : N === "redo" ? hl(1) : N === "clear" ? Vg() : N === "add" || N === "add-image" ? Og() : N === "add-or-look" && $g();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        u.primaryTool = "paint";
        const N = String(s.getAttribute("data-paint-tool") || "pen");
        u.paintTool = N, Qi({ preservePanelValues: !0 }), un[N] && (u.activeBrushPresetId = N), cn(), Ve(), Ge(), fe();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        u.primaryTool = "mask", u.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), Qi({ preservePanelValues: !0 }), cn(), Ve(), Ge(), fe();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const N = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Hg(N);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const N = es.find((T) => T.id === s.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        u.paintColor = bn(N.color), K(!0), cn();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), Xe && !Xe.hidden ? K(!0) : ne(), cn();
        return;
      }
    }
    const c = String(((P = s == null ? void 0 : s.getAttribute) == null ? void 0 : P.call(s, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement)) return;
      if (gi(), $.paused) {
        me.mode = "playback", me.pendingPlaybackResume = !1, me.resumeAfterScrub = !1;
        const N = Number(k.videoTransport.duration || $.duration || 0), T = Number($.currentTime || me.editorTime || 0), z = N > 0 && T >= N - 1e-3 ? 0 : Number(me.editorTime || T || 0), q = Math.max(js(), 0.04);
        me.editorTime = z, Math.abs(T - z) > q ? (me.seeking = !1, me.pendingPlaybackResume = !0, Qs(z)) : $.play().catch(() => {
        });
      } else
        $.pause(), me.mode = "scrub", me.resumeAfterScrub = !1, me.pendingPlaybackResume = !1, me.editorTime = Number($.currentTime || 0), pi();
      Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: rr(),
        currentTime: me.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: me.mode
      }), fe({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (c === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement) || !k.videoTransport.hasAudio) return;
      const N = !$.muted;
      $.muted = N, !N && Number($.volume || 0) <= 0 && ($.volume = Math.max(0.01, Number(k.videoTransport.volume || 1))), Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: rr(),
        currentTime: me.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: me.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: $.muted,
        volume: Number($.volume ?? k.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (c === "video-loop-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement)) return;
      const N = !k.videoTransport.loop;
      k.videoTransport.loop = N, $.loop = N, Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: rr(),
        currentTime: me.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: me.mode,
        hasAudio: k.videoTransport.hasAudio,
        loop: N,
        muted: $.muted,
        volume: Number($.volume ?? k.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (c === "frame-aspect") {
        k.frameRail.aspectOpen = !k.frameRail.aspectOpen;
        return;
      }
      if (c === "frame-aspect-set") {
        const N = u.mode === "frame" ? Fe() : null;
        if (!N) return;
        qu(N, String(s.getAttribute("data-aspect") || "1:1")), k.frameRail.aspectOpen = !1, aa(), Ze(), it(), xr(), fe();
        return;
      }
      if (c === "frame-rotate-90") {
        const N = u.mode === "frame" ? Fe() : null;
        if (!N) return;
        Xu(N), k.frameRail.aspectOpen = !1, aa(), Ze(), it(), xr(), fe();
        return;
      }
      if (c === "aspect") {
        u.cutoutAspectOpen = !u.cutoutAspectOpen, u.menuSize.measured = !1, Ge(), fe();
        return;
      }
      if (c === "aspect-set") {
        const N = bt();
        if (!N) return;
        const T = String(s.getAttribute("data-aspect") || "1:1");
        qu(N, T), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, aa(), Ze(), it(), Ge(), fe();
        return;
      }
      if (c === "rotate-90") {
        const N = bt();
        if (!N) return;
        Xu(N), u.cutoutAspectOpen = !1, u.menuSize.measured = !1, aa(), Ze(), it(), Ge(), fe();
        return;
      }
      if (c === "bring-front") {
        Bg();
        return;
      }
      if (c === "send-back") {
        Gg();
        return;
      }
      if (c === "duplicate") {
        Ug();
        return;
      }
      if (c === "replace-image") {
        Fg();
        return;
      }
      if (c === "toggle-lock") {
        tp();
        return;
      }
      if (c === "back-initial") {
        lp();
        return;
      }
      if (c === "toggle-visible") {
        sp();
        return;
      }
      if (c === "delete") {
        Wu();
        return;
      }
    }
    if (c === "reset-view") {
      if (u.mode === "frame") return;
      Hs(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      if (u.mode === "frame") return;
      u.showGrid = !u.showGrid, rS(e == null ? void 0 : e.id, u.showGrid), _l(), fe();
      return;
    }
    if (c === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), h0();
      return;
    }
    if (c === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const N = !u.outputPreviewExpanded;
      u.outputPreviewExpanded = N, u.outputPreviewAnimFrom = u.outputPreviewAnim, u.outputPreviewAnimTo = N ? 1 : 0, u.outputPreviewAnimStartTs = performance.now(), yf(), fe();
      return;
    }
    const h = r.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), b = u.customPaintHistory[m];
    b && (u.customPaintColor = bn(b), u.paintColor = bn(b), cn());
  }), W.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!($ instanceof HTMLVideoElement)) return;
      gi();
      const m = G(Number(o.value || 0), 0, Number(k.videoTransport.duration || 0));
      me.mode = "scrub", !me.seeking && !$.paused && !$.ended && (me.resumeAfterScrub = !0, $.pause()), me.editorTime = m, ru(m), Ln({
        ready: !!$.getAttribute("src"),
        playing: !1,
        visible: rr(),
        currentTime: m,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: "scrub"
      }), Number(Te.__panoFrameIdx || 0) > 0 && (oe.backgroundDirty = !0, oe.dirty = !0, fe({ cause: "frame_view", localOnly: !0 })), Qs(m);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!($ instanceof HTMLVideoElement)) return;
      const m = G(Number(s.value || 0), 0, 1);
      $.volume = m, $.muted = m <= 1e-4, Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: rr(),
        currentTime: me.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: me.mode,
        hasAudio: k.videoTransport.hasAudio,
        muted: $.muted,
        volume: m
      });
      return;
    }
    const c = r.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(c.value)))), b = kr(u.primaryTool === "paint" ? u.paintTool : u.maskTool);
      u.brushSizes[b] = m, cn(), t0();
      return;
    }
    const h = r.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...u.customPaintColor, a: G(Number(h.value) / 100, 0, 1) };
      u.customPaintColor = bn(m), u.paintColor = bn(m), cn();
    }
  }), W.addEventListener("change", (r) => {
    var o;
    if (r.target.closest("[data-video-seek]")) {
      if (!($ instanceof HTMLVideoElement)) return;
      me.pendingPlaybackResume = !!me.resumeAfterScrub, me.resumeAfterScrub = !1, me.pendingPlaybackResume || (me.mode = "scrub"), me.seeking || (me.pendingPlaybackResume ? (me.pendingPlaybackResume = !1, me.mode = "playback", $.play().catch(() => {
      })) : (pi(), fe({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && mo();
  }), W.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && mo();
  }), W.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && mo();
  }), W.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && mo();
  }), W.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !W.contains(o) || ke.target !== o && (ke.target = o, ke.timer && clearTimeout(ke.timer), ke.timer = window.setTimeout(() => {
      ke.target === o && c0(o);
    }, 220));
  }), W.addEventListener("pointerout", (r) => {
    var c, h;
    const o = r.target.closest("[data-tip]");
    !o || ke.target !== o || (r.relatedTarget instanceof Element ? (h = (c = r.relatedTarget).closest) == null ? void 0 : h.call(c, "[data-tip]") : null) === o || Hr();
  }), W.addEventListener("pointerdown", (r) => {
    r.target.closest("[data-frame-roll-knob]") || Hr();
  });
  const f0 = (r, o) => {
    var g;
    if (!Wt) return;
    const s = Wt.getBoundingClientRect(), c = G((r - s.left) / Math.max(1, s.width), 0, 1), h = 1 - G((o - s.top) / Math.max(1, s.height), 0, 1), m = Ql(u.customPaintColor), b = { ...Zl(m.h, c, h), a: Number(((g = u.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    u.customPaintColor = bn(b), u.paintColor = bn(b), cn();
  }, d0 = (r) => {
    var m;
    if (!O) return;
    const o = O.getBoundingClientRect(), s = G((r - o.left) / Math.max(1, o.width), 0, 1), c = Ql(u.customPaintColor), h = { ...Zl(s, c.s, c.v), a: Number(((m = u.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    u.customPaintColor = bn(h), u.paintColor = bn(h), cn();
  }, mf = (r, o) => {
    const s = r.pointerId;
    o(r);
    const c = (m) => {
      m.pointerId === s && o(m);
    }, h = (m) => {
      m.pointerId === s && (window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  Wt && (Wt.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), mf(r, (o) => f0(o.clientX, o.clientY));
  }), O && (O.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), mf(r, (o) => d0(o.clientX));
  }), W.addEventListener("click", (r) => {
    var h;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", c = (h = k.confirmDialog) == null ? void 0 : h.resolve;
    k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(s);
  });
  const pf = () => {
    const r = !!u.fullscreen;
    Ai(k.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? Oe.fullscreen_close : Oe.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, po = (r) => {
    const o = !!r;
    u.fullscreen !== o && (u.fullscreen = o, W.classList.toggle("pano-modal-fullscreen", o), o ? (u.fullscreenPrevShowGrid = !!u.showGrid, u.showGrid = !1) : u.fullscreenPrevShowGrid !== null && (u.showGrid = !!u.fullscreenPrevShowGrid, u.fullscreenPrevShowGrid = null), _l(), pf(), zs(), fe());
  }, gf = () => document.fullscreenElement === L, h0 = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        po(!u.fullscreen);
        return;
      }
      gf() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = L.requestFullscreen) == null ? void 0 : r.call(L));
    } catch {
      po(!u.fullscreen);
    }
  }, bf = () => {
    document.fullscreenEnabled && po(gf());
  };
  document.addEventListener("fullscreenchange", bf), pf();
  const yf = () => {
    const r = !!u.outputPreviewExpanded;
    k.outputPreviewToggle.icon = r ? Oe.fullscreen_close : Oe.fullscreen, k.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", k.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  yf();
  const xl = e.onExecuted, wl = e.onConnectionsChange;
  let Sl = null, Ml = null, Nl = null;
  !i && t === "stickers" && (Nl = (r = "sync") => {
    yu(r);
  }, e.__panoExternalStickerSync = Nl, Sl = function(...o) {
    var s;
    typeof xl == "function" && xl.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = Sl, Ml = function(...o) {
    var s;
    typeof wl == "function" && wl.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = Ml), i || Kd.set(String(e.id ?? "0"), () => Nu());
  let Si = null;
  const Mi = async () => Si || (Si = (async () => {
    var r, o, s, c, h, m, b, g, x, M, P;
    return Kd.delete(String(e.id ?? "0")), Jg(), i || gn(), document.fullscreenElement === L && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", bf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (h = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || h.call(c, !0, !0), (g = (b = (m = yn) == null ? void 0 : m.canvas) == null ? void 0 : b.setDirty) == null || g.call(b, !0, !0), Hr(), Eg(), $ instanceof HTMLVideoElement && $.pause(), At.forEach((N) => {
      try {
        N();
      } catch {
      }
    }), (x = we == null ? void 0 : we.dispose) == null || x.call(we), (M = he == null ? void 0 : he.unmount) == null || M.call(he), (P = te == null ? void 0 : te.dispose) == null || P.call(te), $r(!1), window.removeEventListener("keydown", vf, !0), window.removeEventListener("keydown", _f, !0), window.removeEventListener("keydown", go, !0), window.removeEventListener("keyup", go, !0), window.removeEventListener("blur", xf), window.removeEventListener("keydown", wf, !0), window.removeEventListener("dragenter", cf, !0), window.removeEventListener("dragover", uf, !0), window.removeEventListener("dragleave", ff, !0), window.removeEventListener("drop", df, !0), !i && t === "stickers" && (e.onExecuted === Sl && (e.onExecuted = xl), e.onConnectionsChange === Ml && (e.onConnectionsChange = wl), e.__panoExternalStickerSync === Nl && (e.__panoExternalStickerSync = null)), D.unmount(), E.remove(), Wg(), Si = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), Si = null, !1)), Si), vf = (r) => {
    var o, s, c, h, m;
    if (r.key === "Escape") {
      if (oa()) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r);
        return;
      }
      if (u.fullscreen && document.fullscreenElement === L) {
        r.preventDefault(), r.stopPropagation(), (s = r.stopImmediatePropagation) == null || s.call(r), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (u.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (h = r.stopImmediatePropagation) == null || h.call(r), po(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (m = r.stopImmediatePropagation) == null || m.call(r), Mi();
    }
  }, _f = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), c = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || c === 46) && !(o === "Backspace" || s === "Backspace" || c === 8)) return;
    const b = r.target, g = ((b == null ? void 0 : b.tagName) || "").toUpperCase();
    g === "INPUT" || g === "TEXTAREA" || b != null && b.isContentEditable || !bt() || (Wu(), r.preventDefault(), r.stopPropagation());
  }, go = (r) => {
    const o = !!(r.ctrlKey || r.metaKey), s = !!r.altKey;
    u.marqueeModifier === o && u.altModifier === s || (u.marqueeModifier = o, u.altModifier = s, Nr(), ct(u.pointerPos));
  }, xf = () => {
    u.marqueeModifier = !1, u.altModifier = !1, Nr(), ct(u.pointerPos);
  }, wf = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const c = r.target, h = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: m, canRedo: b } = Uu();
    r.shiftKey && !b || !r.shiftKey && !m || (hl(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", vf, !0), window.addEventListener("keydown", _f, !0), window.addEventListener("keydown", go, !0), window.addEventListener("keyup", go, !0), window.addEventListener("blur", xf), window.addEventListener("keydown", wf, !0), L.addEventListener("pointerdown", (r) => {
    r.target === L && Mi();
  });
  function $n(r, o, { rollbackState: s = !1 } = {}) {
    let c = "";
    try {
      s && (c = JSON.stringify(v)), o();
    } catch (h) {
      if (c)
        try {
          const m = JSON.parse(c);
          Object.keys(v).forEach((b) => delete v[b]), Object.assign(v, m), i || gn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${r}" rollback failed`, m);
        }
      k.stageWarningDetail = `boot:${r}`, console.error(`[PanoramaStickers] editor boot step "${r}" failed`, h);
    }
  }
  $n("cutout-focus", yp), !i && t === "stickers" && $n("external-sticker-sync", () => yu("open"), { rollbackState: !0 }), Lg().catch((r) => {
    k.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', r);
  }), $n("history", Ze), $n("undo-redo", vl), $n("paint-ui", cn), $n("side-panel", Ve), $n("look-at-frame", tl), $n("video-source", gi), $n("canvas-size", Vu), $n("cursor", () => ct(u.pointerPos)), fe(), oe.rafId = requestAnimationFrame(Hu);
}
function Xd(e, t, n, i) {
  if (!(e != null && e.prototype)) return;
  const a = (y) => {
    var _, w;
    try {
      (_ = y.__panoDomRestore) == null || _.call(y);
    } catch {
    }
    try {
      (w = y.__panoLegacyRestore) == null || w.call(y);
    } catch {
    }
    y.__panoDomPreview = null, y.__panoLegacyPreviewHooked = !1, y.__panoPreviewHooked = !1, y.__panoPreviewAttached = !1, y.__panoPreviewMountKey = null;
  };
  function l(y) {
    var A;
    const _ = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === _) return;
    a(y), n === "PanoramaStickers" && oS(y), Zc(y), lS(y, xs);
    const S = Nn(y, xs);
    if (S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const v = S.callback;
      S.callback = (R) => {
        var j;
        const V = v ? v(R) : void 0;
        return (j = y.setDirtyCanvas) == null || j.call(y, !0, !1), V;
      };
    }
    if (n === "PanoramaStickers") {
      const v = Nn(y, "bg_color");
      v && (v.value == null || String(v.value).trim() === "" || String(v.value).toLowerCase() === "#000000") && (v.value = "#00ff00", (A = v.callback) == null || A.call(v, "#00ff00")), Mc(y, i, () => Ca(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
        return;
      }
    }
    Mc(y, i, () => Ca(y, "cutout")), R1(y, {
      buttonText: i,
      onOpen: () => Ca(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
  }
  const f = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const y = f ? f.apply(this, arguments) : void 0;
    return l(this), y;
  };
  const d = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const y = d ? d.apply(this, arguments) : void 0;
    return this.widgets && l(this), y;
  };
  const p = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const y = p ? p.apply(this, arguments) : void 0;
    return this.widgets && l(this), y;
  };
}
function wS(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const i = n ? n.apply(this, arguments) : void 0;
    return t.call(this), i;
  };
}
function SS(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    Zc(e), Mc(e, "Open Preview", () => Ca(e, "stickers", { readOnly: !0, hideSidebar: !1 })), O1(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (l) => Ca(l, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
yn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Xd(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Xd(e, t, "PanoramaCutout", "Open Cutout Editor"), hs(n) && wS(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    Zc(e), hs(t) && SS(e);
  }
});
