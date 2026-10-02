import * as Os from "../../scripts/app.js";
import { app as Cr } from "../../scripts/app.js";
import { api as Kt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function ju(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const vt = {}, Mo = [], Ir = () => {
}, Xp = () => !1, _l = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), xl = (e) => e.startsWith("onUpdate:"), xn = Object.assign, Hu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, x1 = Object.prototype.hasOwnProperty, ht = (e, t) => x1.call(e, t), Je = Array.isArray, No = (e) => ja(e) === "[object Map]", qp = (e) => ja(e) === "[object Set]", fh = (e) => ja(e) === "[object Date]", Qe = (e) => typeof e == "function", Bt = (e) => typeof e == "string", Or = (e) => typeof e == "symbol", yt = (e) => e !== null && typeof e == "object", Jp = (e) => (yt(e) || Qe(e)) && Qe(e.then) && Qe(e.catch), Zp = Object.prototype.toString, ja = (e) => Zp.call(e), w1 = (e) => ja(e).slice(8, -1), Qp = (e) => ja(e) === "[object Object]", Gu = (e) => Bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wa = /* @__PURE__ */ ju(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), wl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, S1 = /-\w/g, Nn = wl(
  (e) => e.replace(S1, (t) => t.slice(1).toUpperCase())
), k1 = /\B([A-Z])/g, Xi = wl(
  (e) => e.replace(k1, "-$1").toLowerCase()
), Sl = wl((e) => e.charAt(0).toUpperCase() + e.slice(1)), xc = wl(
  (e) => e ? `on${Sl(e)}` : ""
), Mr = (e, t) => !Object.is(e, t), Es = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, em = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Ku = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let dh;
const kl = () => dh || (dh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _t(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Bt(r) ? A1(r) : _t(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (Bt(e) || yt(e))
    return e;
}
const M1 = /;(?![^(]*\))/g, N1 = /:([^]+)/, P1 = /\/\*[^]*?\*\//g;
function A1(e) {
  const t = {};
  return e.replace(P1, "").split(M1).forEach((n) => {
    if (n) {
      const r = n.split(N1);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function at(e) {
  let t = "";
  if (Bt(e))
    t = e;
  else if (Je(e))
    for (let n = 0; n < e.length; n++) {
      const r = at(e[n]);
      r && (t += r + " ");
    }
  else if (yt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const C1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", I1 = /* @__PURE__ */ ju(C1);
function tm(e) {
  return !!e || e === "";
}
function O1(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Bu(e[r], t[r]);
  return n;
}
function Bu(e, t) {
  if (e === t) return !0;
  let n = fh(e), r = fh(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Or(e), r = Or(t), n || r)
    return e === t;
  if (n = Je(e), r = Je(t), n || r)
    return n && r ? O1(e, t) : !1;
  if (n = yt(e), r = yt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const f = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (f && !d || !f && d || !Bu(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const nm = (e) => !!(e && e.__v_isRef === !0), it = (e) => Bt(e) ? e : e == null ? "" : Je(e) || yt(e) && (e.toString === Zp || !Qe(e.toString)) ? nm(e) ? it(e.value) : JSON.stringify(e, rm, 2) : String(e), rm = (e, t) => nm(t) ? rm(e, t.value) : No(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[wc(r, a) + " =>"] = o, n),
    {}
  )
} : qp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => wc(n))
} : Or(t) ? wc(t) : yt(t) && !Je(t) && !Qp(t) ? String(t) : t, wc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Or(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Dn;
class E1 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Dn, !t && Dn && (this.index = (Dn.scopes || (Dn.scopes = [])).push(
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
      const n = Dn;
      try {
        return Dn = this, t();
      } finally {
        Dn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Dn, Dn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Dn = this.prevScope, this.prevScope = void 0);
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
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function F1() {
  return Dn;
}
let St;
const Sc = /* @__PURE__ */ new WeakSet();
class im {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Dn && Dn.active && Dn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Sc.has(this) && (Sc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || am(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, hh(this), sm(this);
    const t = St, n = fr;
    St = this, fr = !0;
    try {
      return this.fn();
    } finally {
      lm(this), St = t, fr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Yu(t);
      this.deps = this.depsTail = void 0, hh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Sc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    iu(this) && this.run();
  }
  get dirty() {
    return iu(this);
  }
}
let om = 0, Sa, ka;
function am(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ka, ka = e;
    return;
  }
  e.next = Sa, Sa = e;
}
function Uu() {
  om++;
}
function Wu() {
  if (--om > 0)
    return;
  if (ka) {
    let t = ka;
    for (ka = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Sa; ) {
    let t = Sa;
    for (Sa = void 0; t; ) {
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
function sm(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function lm(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Yu(r), T1(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function iu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (cm(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function cm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ca) || (e.globalVersion = Ca, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !iu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = St, r = fr;
  St = e, fr = !0;
  try {
    sm(e);
    const o = e.fn(e._value);
    (t.version === 0 || Mr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    St = n, fr = r, lm(e), e.flags &= -3;
  }
}
function Yu(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Yu(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function T1(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let fr = !0;
const um = [];
function Qr() {
  um.push(fr), fr = !1;
}
function ei() {
  const e = um.pop();
  fr = e === void 0 ? !0 : e;
}
function hh(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = St;
    St = void 0;
    try {
      t();
    } finally {
      St = n;
    }
  }
}
let Ca = 0;
class D1 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!St || !fr || St === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== St)
      n = this.activeLink = new D1(St, this), St.deps ? (n.prevDep = St.depsTail, St.depsTail.nextDep = n, St.depsTail = n) : St.deps = St.depsTail = n, fm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = St.depsTail, n.nextDep = void 0, St.depsTail.nextDep = n, St.depsTail = n, St.deps === n && (St.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ca++, this.notify(t);
  }
  notify(t) {
    Uu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Wu();
    }
  }
}
function fm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        fm(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ou = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ Symbol(
  ""
), au = /* @__PURE__ */ Symbol(
  ""
), Ia = /* @__PURE__ */ Symbol(
  ""
);
function bn(e, t, n) {
  if (fr && St) {
    let r = ou.get(e);
    r || ou.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Xu()), o.map = r, o.key = n), o.track();
  }
}
function Yr(e, t, n, r, o, a) {
  const c = ou.get(e);
  if (!c) {
    Ca++;
    return;
  }
  const f = (d) => {
    d && d.trigger();
  };
  if (Uu(), t === "clear")
    c.forEach(f);
  else {
    const d = Je(e), v = d && Gu(n);
    if (d && n === "length") {
      const y = Number(r);
      c.forEach((x, w) => {
        (w === "length" || w === Ia || !Or(w) && w >= y) && f(x);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && f(c.get(n)), v && f(c.get(Ia)), t) {
        case "add":
          d ? v && f(c.get("length")) : (f(c.get(ji)), No(e) && f(c.get(au)));
          break;
        case "delete":
          d || (f(c.get(ji)), No(e) && f(c.get(au)));
          break;
        case "set":
          No(e) && f(c.get(ji));
          break;
      }
  }
  Wu();
}
function fo(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (bn(t, "iterate", Ia), /* @__PURE__ */ er(e) ? t : t.map(dr));
}
function Ml(e) {
  return bn(e = /* @__PURE__ */ dt(e), "iterate", Ia), e;
}
function Sr(e, t) {
  return /* @__PURE__ */ ti(e) ? Lo(/* @__PURE__ */ Hi(e) ? dr(t) : t) : dr(t);
}
const L1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return kc(this, Symbol.iterator, (e) => Sr(this, e));
  },
  concat(...e) {
    return fo(this).concat(
      ...e.map((t) => Je(t) ? fo(t) : t)
    );
  },
  entries() {
    return kc(this, "entries", (e) => (e[1] = Sr(this, e[1]), e));
  },
  every(e, t) {
    return zr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return zr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Sr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return zr(
      this,
      "find",
      e,
      t,
      (n) => Sr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return zr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return zr(
      this,
      "findLast",
      e,
      t,
      (n) => Sr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return zr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return zr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Mc(this, "includes", e);
  },
  indexOf(...e) {
    return Mc(this, "indexOf", e);
  },
  join(e) {
    return fo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Mc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return zr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return la(this, "pop");
  },
  push(...e) {
    return la(this, "push", e);
  },
  reduce(e, ...t) {
    return ph(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ph(this, "reduceRight", e, t);
  },
  shift() {
    return la(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return zr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return la(this, "splice", e);
  },
  toReversed() {
    return fo(this).toReversed();
  },
  toSorted(e) {
    return fo(this).toSorted(e);
  },
  toSpliced(...e) {
    return fo(this).toSpliced(...e);
  },
  unshift(...e) {
    return la(this, "unshift", e);
  },
  values() {
    return kc(this, "values", (e) => Sr(this, e));
  }
};
function kc(e, t, n) {
  const r = Ml(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ er(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const R1 = Array.prototype;
function zr(e, t, n, r, o, a) {
  const c = Ml(e), f = c !== e && !/* @__PURE__ */ er(e), d = c[t];
  if (d !== R1[t]) {
    const x = d.apply(e, a);
    return f ? dr(x) : x;
  }
  let v = n;
  c !== e && (f ? v = function(x, w) {
    return n.call(this, Sr(e, x), w, e);
  } : n.length > 2 && (v = function(x, w) {
    return n.call(this, x, w, e);
  }));
  const y = d.call(c, v, r);
  return f && o ? o(y) : y;
}
function ph(e, t, n, r) {
  const o = Ml(e), a = o !== e && !/* @__PURE__ */ er(e);
  let c = n, f = !1;
  o !== e && (a ? (f = r.length === 0, c = function(v, y, x) {
    return f && (f = !1, v = Sr(e, v)), n.call(this, v, Sr(e, y), x, e);
  }) : n.length > 3 && (c = function(v, y, x) {
    return n.call(this, v, y, x, e);
  }));
  const d = o[t](c, ...r);
  return f ? Sr(e, d) : d;
}
function Mc(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  bn(r, "iterate", Ia);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Zu(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : o;
}
function la(e, t, n = []) {
  Qr(), Uu();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return Wu(), ei(), r;
}
const $1 = /* @__PURE__ */ ju("__proto__,__v_isRef,__isVue"), dm = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Or)
);
function V1(e) {
  Or(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return bn(t, "has", e), t.hasOwnProperty(e);
}
class hm {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, r) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, a = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return a;
    if (n === "__v_raw")
      return r === (o ? a ? X1 : ym : a ? gm : mm).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Je(t);
    if (!o) {
      let d;
      if (c && (d = L1[n]))
        return d;
      if (n === "hasOwnProperty")
        return V1;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ _n(t) ? t : r
    );
    if ((Or(n) ? dm.has(n) : $1(n)) || (o || bn(t, "get", n), a))
      return f;
    if (/* @__PURE__ */ _n(f)) {
      const d = c && Gu(n) ? f : f.value;
      return o && yt(d) ? /* @__PURE__ */ lu(d) : d;
    }
    return yt(f) ? o ? /* @__PURE__ */ lu(f) : /* @__PURE__ */ Go(f) : f;
  }
}
class pm extends hm {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = Je(t) && Gu(n);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ ti(a);
      if (!/* @__PURE__ */ er(r) && !/* @__PURE__ */ ti(r) && (a = /* @__PURE__ */ dt(a), r = /* @__PURE__ */ dt(r)), !c && /* @__PURE__ */ _n(a) && !/* @__PURE__ */ _n(r))
        return v || (a.value = r), !0;
    }
    const f = c ? Number(n) < t.length : ht(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ _n(t) ? t : o
    );
    return t === /* @__PURE__ */ dt(o) && (f ? Mr(r, a) && Yr(t, "set", n, r) : Yr(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = ht(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Yr(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Or(n) || !dm.has(n)) && bn(t, "has", n), r;
  }
  ownKeys(t) {
    return bn(
      t,
      "iterate",
      Je(t) ? "length" : ji
    ), Reflect.ownKeys(t);
  }
}
class z1 extends hm {
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
const j1 = /* @__PURE__ */ new pm(), H1 = /* @__PURE__ */ new z1(), G1 = /* @__PURE__ */ new pm(!0);
const su = (e) => e, hs = (e) => Reflect.getPrototypeOf(e);
function K1(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ dt(o), c = No(a), f = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = o[e](...r), y = n ? su : t ? Lo : dr;
    return !t && bn(
      a,
      "iterate",
      d ? au : ji
    ), xn(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: x, done: w } = v.next();
          return w ? { value: x, done: w } : {
            value: f ? [y(x[0]), y(x[1])] : y(x),
            done: w
          };
        }
      }
    );
  };
}
function ps(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function B1(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ dt(a), f = /* @__PURE__ */ dt(o);
      e || (Mr(o, f) && bn(c, "get", o), bn(c, "get", f));
      const { has: d } = hs(c), v = t ? su : e ? Lo : dr;
      if (d.call(c, o))
        return v(a.get(o));
      if (d.call(c, f))
        return v(a.get(f));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && bn(/* @__PURE__ */ dt(o), "iterate", ji), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ dt(a), f = /* @__PURE__ */ dt(o);
      return e || (Mr(o, f) && bn(c, "has", o), bn(c, "has", f)), o === f ? a.has(o) : a.has(o) || a.has(f);
    },
    forEach(o, a) {
      const c = this, f = c.__v_raw, d = /* @__PURE__ */ dt(f), v = t ? su : e ? Lo : dr;
      return !e && bn(d, "iterate", ji), f.forEach((y, x) => o.call(a, v(y), v(x), c));
    }
  };
  return xn(
    n,
    e ? {
      add: ps("add"),
      set: ps("set"),
      delete: ps("delete"),
      clear: ps("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ dt(this), c = hs(a), f = /* @__PURE__ */ dt(o), d = !t && !/* @__PURE__ */ er(o) && !/* @__PURE__ */ ti(o) ? f : o;
        return c.has.call(a, d) || Mr(o, d) && c.has.call(a, o) || Mr(f, d) && c.has.call(a, f) || (a.add(d), Yr(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ er(a) && !/* @__PURE__ */ ti(a) && (a = /* @__PURE__ */ dt(a));
        const c = /* @__PURE__ */ dt(this), { has: f, get: d } = hs(c);
        let v = f.call(c, o);
        v || (o = /* @__PURE__ */ dt(o), v = f.call(c, o));
        const y = d.call(c, o);
        return c.set(o, a), v ? Mr(a, y) && Yr(c, "set", o, a) : Yr(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ dt(this), { has: c, get: f } = hs(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ dt(o), d = c.call(a, o)), f && f.call(a, o);
        const v = a.delete(o);
        return d && Yr(a, "delete", o, void 0), v;
      },
      clear() {
        const o = /* @__PURE__ */ dt(this), a = o.size !== 0, c = o.clear();
        return a && Yr(
          o,
          "clear",
          void 0,
          void 0
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = K1(o, e, t);
  }), n;
}
function qu(e, t) {
  const n = B1(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ht(n, o) && o in r ? n : r,
    o,
    a
  );
}
const U1 = {
  get: /* @__PURE__ */ qu(!1, !1)
}, W1 = {
  get: /* @__PURE__ */ qu(!1, !0)
}, Y1 = {
  get: /* @__PURE__ */ qu(!0, !1)
};
const mm = /* @__PURE__ */ new WeakMap(), gm = /* @__PURE__ */ new WeakMap(), ym = /* @__PURE__ */ new WeakMap(), X1 = /* @__PURE__ */ new WeakMap();
function q1(e) {
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
function J1(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : q1(w1(e));
}
// @__NO_SIDE_EFFECTS__
function Go(e) {
  return /* @__PURE__ */ ti(e) ? e : Ju(
    e,
    !1,
    j1,
    U1,
    mm
  );
}
// @__NO_SIDE_EFFECTS__
function Z1(e) {
  return Ju(
    e,
    !1,
    G1,
    W1,
    gm
  );
}
// @__NO_SIDE_EFFECTS__
function lu(e) {
  return Ju(
    e,
    !0,
    H1,
    Y1,
    ym
  );
}
function Ju(e, t, n, r, o) {
  if (!yt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = J1(e);
  if (a === 0)
    return e;
  const c = o.get(e);
  if (c)
    return c;
  const f = new Proxy(
    e,
    a === 2 ? r : n
  );
  return o.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function Hi(e) {
  return /* @__PURE__ */ ti(e) ? /* @__PURE__ */ Hi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ti(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Zu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function Q1(e) {
  return !ht(e, "__v_skip") && Object.isExtensible(e) && em(e, "__v_skip", !0), e;
}
const dr = (e) => yt(e) ? /* @__PURE__ */ Go(e) : e, Lo = (e) => yt(e) ? /* @__PURE__ */ lu(e) : e;
// @__NO_SIDE_EFFECTS__
function _n(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  return ev(e, !1);
}
function ev(e, t) {
  return /* @__PURE__ */ _n(e) ? e : new tv(e, t);
}
class tv {
  constructor(t, n) {
    this.dep = new Xu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : dr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ er(t) || /* @__PURE__ */ ti(t);
    t = r ? t : /* @__PURE__ */ dt(t), Mr(t, n) && (this._rawValue = t, this._value = r ? t : dr(t), this.dep.trigger());
  }
}
function rt(e) {
  return /* @__PURE__ */ _n(e) ? e.value : e;
}
const nv = {
  get: (e, t, n) => t === "__v_raw" ? e : rt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ _n(o) && !/* @__PURE__ */ _n(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function bm(e) {
  return /* @__PURE__ */ Hi(e) ? e : new Proxy(e, nv);
}
class rv {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Xu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ca - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    St !== this)
      return am(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return cm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function iv(e, t, n = !1) {
  let r, o;
  return Qe(e) ? r = e : (r = e.get, o = e.set), new rv(r, o, n);
}
const ms = {}, qs = /* @__PURE__ */ new WeakMap();
let Di;
function ov(e, t = !1, n = Di) {
  if (n) {
    let r = qs.get(n);
    r || qs.set(n, r = []), r.push(e);
  }
}
function av(e, t, n = vt) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: f, call: d } = n, v = (V) => o ? V : /* @__PURE__ */ er(V) || o === !1 || o === 0 ? Xr(V, 1) : Xr(V);
  let y, x, w, M, k = !1, _ = !1;
  if (/* @__PURE__ */ _n(e) ? (x = () => e.value, k = /* @__PURE__ */ er(e)) : /* @__PURE__ */ Hi(e) ? (x = () => v(e), k = !0) : Je(e) ? (_ = !0, k = e.some((V) => /* @__PURE__ */ Hi(V) || /* @__PURE__ */ er(V)), x = () => e.map((V) => {
    if (/* @__PURE__ */ _n(V))
      return V.value;
    if (/* @__PURE__ */ Hi(V))
      return v(V);
    if (Qe(V))
      return d ? d(V, 2) : V();
  })) : Qe(e) ? t ? x = d ? () => d(e, 2) : e : x = () => {
    if (w) {
      Qr();
      try {
        w();
      } finally {
        ei();
      }
    }
    const V = Di;
    Di = y;
    try {
      return d ? d(e, 3, [M]) : e(M);
    } finally {
      Di = V;
    }
  } : x = Ir, t && o) {
    const V = x, E = o === !0 ? 1 / 0 : o;
    x = () => Xr(V(), E);
  }
  const F = F1(), $ = () => {
    y.stop(), F && F.active && Hu(F.effects, y);
  };
  if (a && t) {
    const V = t;
    t = (...E) => {
      V(...E), $();
    };
  }
  let X = _ ? new Array(e.length).fill(ms) : ms;
  const C = (V) => {
    if (!(!(y.flags & 1) || !y.dirty && !V))
      if (t) {
        const E = y.run();
        if (o || k || (_ ? E.some((R, Y) => Mr(R, X[Y])) : Mr(E, X))) {
          w && w();
          const R = Di;
          Di = y;
          try {
            const Y = [
              E,
              // pass undefined as the old value when it's changed for the first time
              X === ms ? void 0 : _ && X[0] === ms ? [] : X,
              M
            ];
            X = E, d ? d(t, 3, Y) : (
              // @ts-expect-error
              t(...Y)
            );
          } finally {
            Di = R;
          }
        }
      } else
        y.run();
  };
  return f && f(C), y = new im(x), y.scheduler = c ? () => c(C, !1) : C, M = (V) => ov(V, !1, y), w = y.onStop = () => {
    const V = qs.get(y);
    if (V) {
      if (d)
        d(V, 4);
      else
        for (const E of V) E();
      qs.delete(y);
    }
  }, t ? r ? C(!0) : X = y.run() : c ? c(C.bind(null, !0), !0) : y.run(), $.pause = y.pause.bind(y), $.resume = y.resume.bind(y), $.stop = $, $;
}
function Xr(e, t = 1 / 0, n) {
  if (t <= 0 || !yt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ _n(e))
    Xr(e.value, t, n);
  else if (Je(e))
    for (let r = 0; r < e.length; r++)
      Xr(e[r], t, n);
  else if (qp(e) || No(e))
    e.forEach((r) => {
      Xr(r, t, n);
    });
  else if (Qp(e)) {
    for (const r in e)
      Xr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Xr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ha(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Nl(o, t, n);
  }
}
function Er(e, t, n, r) {
  if (Qe(e)) {
    const o = Ha(e, t, n, r);
    return o && Jp(o) && o.catch((a) => {
      Nl(a, t, n);
    }), o;
  }
  if (Je(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Er(e[a], t, n, r));
    return o;
  }
}
function Nl(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || vt;
  if (t) {
    let f = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const y = f.ec;
      if (y) {
        for (let x = 0; x < y.length; x++)
          if (y[x](e, d, v) === !1)
            return;
      }
      f = f.parent;
    }
    if (a) {
      Qr(), Ha(a, null, 10, [
        e,
        d,
        v
      ]), ei();
      return;
    }
  }
  sv(e, n, o, r, c);
}
function sv(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Mn = [];
let wr = -1;
const Po = [];
let gi = null, bo = 0;
const vm = /* @__PURE__ */ Promise.resolve();
let Js = null;
function Qu(e) {
  const t = Js || vm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function lv(e) {
  let t = wr + 1, n = Mn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Mn[r], a = Oa(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function ef(e) {
  if (!(e.flags & 1)) {
    const t = Oa(e), n = Mn[Mn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Oa(n) ? Mn.push(e) : Mn.splice(lv(t), 0, e), e.flags |= 1, _m();
  }
}
function _m() {
  Js || (Js = vm.then(wm));
}
function cv(e) {
  Je(e) ? Po.push(...e) : gi && e.id === -1 ? gi.splice(bo + 1, 0, e) : e.flags & 1 || (Po.push(e), e.flags |= 1), _m();
}
function mh(e, t, n = wr + 1) {
  for (; n < Mn.length; n++) {
    const r = Mn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Mn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function xm(e) {
  if (Po.length) {
    const t = [...new Set(Po)].sort(
      (n, r) => Oa(n) - Oa(r)
    );
    if (Po.length = 0, gi) {
      gi.push(...t);
      return;
    }
    for (gi = t, bo = 0; bo < gi.length; bo++) {
      const n = gi[bo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    gi = null, bo = 0;
  }
}
const Oa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function wm(e) {
  try {
    for (wr = 0; wr < Mn.length; wr++) {
      const t = Mn[wr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ha(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; wr < Mn.length; wr++) {
      const t = Mn[wr];
      t && (t.flags &= -2);
    }
    wr = -1, Mn.length = 0, xm(), Js = null, (Mn.length || Po.length) && wm();
  }
}
let Gn = null, Sm = null;
function Zs(e) {
  const t = Gn;
  return Gn = e, Sm = e && e.type.__scopeId || null, t;
}
function km(e, t = Gn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Ph(-1);
    const a = Zs(t);
    let c;
    try {
      c = e(...o);
    } finally {
      Zs(a), r._d && Ph(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function vi(e, t) {
  if (Gn === null)
    return e;
  const n = Ol(Gn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, f, d = vt] = t[o];
    a && (Qe(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Xr(c), r.push({
      dir: a,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: f,
      modifiers: d
    }));
  }
  return e;
}
function Ai(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const f = o[c];
    a && (f.oldValue = a[c].value);
    let d = f.dir[r];
    d && (Qr(), Er(d, n, 8, [
      e.el,
      f,
      e,
      t
    ]), ei());
  }
}
function uv(e, t) {
  if (vn) {
    let n = vn.provides;
    const r = vn.parent && vn.parent.provides;
    r === n && (n = vn.provides = Object.create(r)), n[e] = t;
  }
}
function Fs(e, t, n = !1) {
  const r = l_();
  if (r || Ao) {
    let o = Ao ? Ao._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Qe(t) ? t.call(r && r.proxy) : t;
  }
}
const fv = /* @__PURE__ */ Symbol.for("v-scx"), dv = () => Fs(fv);
function Gi(e, t, n) {
  return Mm(e, t, n);
}
function Mm(e, t, n = vt) {
  const { immediate: r, deep: o, flush: a, once: c } = n, f = xn({}, n), d = t && r || !t && a !== "post";
  let v;
  if (Fa) {
    if (a === "sync") {
      const M = dv();
      v = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!d) {
      const M = () => {
      };
      return M.stop = Ir, M.resume = Ir, M.pause = Ir, M;
    }
  }
  const y = vn;
  f.call = (M, k, _) => Er(M, y, k, _);
  let x = !1;
  a === "post" ? f.scheduler = (M) => {
    Tn(M, y && y.suspense);
  } : a !== "sync" && (x = !0, f.scheduler = (M, k) => {
    k ? M() : ef(M);
  }), f.augmentJob = (M) => {
    t && (M.flags |= 4), x && (M.flags |= 2, y && (M.id = y.uid, M.i = y));
  };
  const w = av(e, t, f);
  return Fa && (v ? v.push(w) : d && w()), w;
}
function hv(e, t, n) {
  const r = this.proxy, o = Bt(e) ? e.includes(".") ? Nm(r, e) : () => r[e] : e.bind(r, r);
  let a;
  Qe(t) ? a = t : (a = t.handler, n = t);
  const c = Ka(this), f = Mm(o, a.bind(r), n);
  return c(), f;
}
function Nm(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const pv = /* @__PURE__ */ Symbol("_vte"), mv = (e) => e.__isTeleport, gv = /* @__PURE__ */ Symbol("_leaveCb");
function tf(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, tf(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Pm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function gh(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Qs = /* @__PURE__ */ new WeakMap();
function Ma(e, t, n, r, o = !1) {
  if (Je(e)) {
    e.forEach(
      (_, F) => Ma(
        _,
        t && (Je(t) ? t[F] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Na(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ma(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Ol(r.component) : r.el, c = o ? null : a, { i: f, r: d } = e, v = t && t.r, y = f.refs === vt ? f.refs = {} : f.refs, x = f.setupState, w = /* @__PURE__ */ dt(x), M = x === vt ? Xp : (_) => gh(y, _) ? !1 : ht(w, _), k = (_, F) => !(F && gh(y, F));
  if (v != null && v !== d) {
    if (yh(t), Bt(v))
      y[v] = null, M(v) && (x[v] = null);
    else if (/* @__PURE__ */ _n(v)) {
      const _ = t;
      k(v, _.k) && (v.value = null), _.k && (y[_.k] = null);
    }
  }
  if (Qe(d))
    Ha(d, f, 12, [c, y]);
  else {
    const _ = Bt(d), F = /* @__PURE__ */ _n(d);
    if (_ || F) {
      const $ = () => {
        if (e.f) {
          const X = _ ? M(d) ? x[d] : y[d] : k() || !e.k ? d.value : y[e.k];
          if (o)
            Je(X) && Hu(X, a);
          else if (Je(X))
            X.includes(a) || X.push(a);
          else if (_)
            y[d] = [a], M(d) && (x[d] = y[d]);
          else {
            const C = [a];
            k(d, e.k) && (d.value = C), e.k && (y[e.k] = C);
          }
        } else _ ? (y[d] = c, M(d) && (x[d] = c)) : F && (k(d, e.k) && (d.value = c), e.k && (y[e.k] = c));
      };
      if (c) {
        const X = () => {
          $(), Qs.delete(e);
        };
        X.id = -1, Qs.set(e, X), Tn(X, n);
      } else
        yh(e), $();
    }
  }
}
function yh(e) {
  const t = Qs.get(e);
  t && (t.flags |= 8, Qs.delete(e));
}
kl().requestIdleCallback;
kl().cancelIdleCallback;
const Na = (e) => !!e.type.__asyncLoader, Am = (e) => e.type.__isKeepAlive;
function yv(e, t) {
  Cm(e, "a", t);
}
function bv(e, t) {
  Cm(e, "da", t);
}
function Cm(e, t, n = vn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Pl(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Am(o.parent.vnode) && vv(r, t, n, o), o = o.parent;
  }
}
function vv(e, t, n, r) {
  const o = Pl(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Im(() => {
    Hu(r[t], o);
  }, n);
}
function Pl(e, t, n = vn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      Qr();
      const f = Ka(n), d = Er(t, n, e, c);
      return f(), ei(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const ri = (e) => (t, n = vn) => {
  (!Fa || e === "sp") && Pl(e, (...r) => t(...r), n);
}, _v = ri("bm"), Al = ri("m"), xv = ri(
  "bu"
), wv = ri("u"), Ga = ri(
  "bum"
), Im = ri("um"), Sv = ri(
  "sp"
), kv = ri("rtg"), Mv = ri("rtc");
function Nv(e, t = vn) {
  Pl("ec", e, t);
}
const Pv = "components", Om = /* @__PURE__ */ Symbol.for("v-ndc");
function Av(e) {
  return Bt(e) ? Cv(Pv, e, !1) || e : e || Om;
}
function Cv(e, t, n = !0, r = !1) {
  const o = Gn || vn;
  if (o) {
    const a = o.type;
    {
      const f = h_(
        a,
        !1
      );
      if (f && (f === t || f === Nn(t) || f === Sl(Nn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      bh(o[e] || a[e], t) || // global registration
      bh(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function bh(e, t) {
  return e && (e[t] || e[Nn(t)] || e[Sl(Nn(t))]);
}
function xt(e, t, n, r) {
  let o;
  const a = n, c = Je(e);
  if (c || Bt(e)) {
    const f = c && /* @__PURE__ */ Hi(e);
    let d = !1, v = !1;
    f && (d = !/* @__PURE__ */ er(e), v = /* @__PURE__ */ ti(e), e = Ml(e)), o = new Array(e.length);
    for (let y = 0, x = e.length; y < x; y++)
      o[y] = t(
        d ? v ? Lo(dr(e[y])) : dr(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let f = 0; f < e; f++)
      o[f] = t(f + 1, f, void 0, a);
  } else if (yt(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (f, d) => t(f, d, void 0, a)
      );
    else {
      const f = Object.keys(e);
      o = new Array(f.length);
      for (let d = 0, v = f.length; d < v; d++) {
        const y = f[d];
        o[d] = t(e[y], y, d, a);
      }
    }
  else
    o = [];
  return o;
}
const cu = (e) => e ? Zm(e) ? Ol(e) : cu(e.parent) : null, Pa = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ xn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => cu(e.parent),
    $root: (e) => cu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Fm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ef(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qu.bind(e.proxy)),
    $watch: (e) => hv.bind(e)
  })
), Nc = (e, t) => e !== vt && !e.__isScriptSetup && ht(e, t), Iv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: c, type: f, appContext: d } = e;
    if (t[0] !== "$") {
      const w = c[t];
      if (w !== void 0)
        switch (w) {
          case 1:
            return r[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return a[t];
        }
      else {
        if (Nc(r, t))
          return c[t] = 1, r[t];
        if (o !== vt && ht(o, t))
          return c[t] = 2, o[t];
        if (ht(a, t))
          return c[t] = 3, a[t];
        if (n !== vt && ht(n, t))
          return c[t] = 4, n[t];
        uu && (c[t] = 0);
      }
    }
    const v = Pa[t];
    let y, x;
    if (v)
      return t === "$attrs" && bn(e.attrs, "get", ""), v(e);
    if (
      // css module (injected by vue-loader)
      (y = f.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== vt && ht(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      x = d.config.globalProperties, ht(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Nc(o, t) ? (o[t] = n, !0) : r !== vt && ht(r, t) ? (r[t] = n, !0) : ht(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, f) {
    let d;
    return !!(n[f] || e !== vt && f[0] !== "$" && ht(e, f) || Nc(t, f) || ht(a, f) || ht(r, f) || ht(Pa, f) || ht(o.config.globalProperties, f) || (d = c.__cssModules) && d[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ht(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function vh(e) {
  return Je(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let uu = !0;
function Ov(e) {
  const t = Fm(e), n = e.proxy, r = e.ctx;
  uu = !1, t.beforeCreate && _h(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: c,
    watch: f,
    provide: d,
    inject: v,
    // lifecycle
    created: y,
    beforeMount: x,
    mounted: w,
    beforeUpdate: M,
    updated: k,
    activated: _,
    deactivated: F,
    beforeDestroy: $,
    beforeUnmount: X,
    destroyed: C,
    unmounted: V,
    render: E,
    renderTracked: R,
    renderTriggered: Y,
    errorCaptured: G,
    serverPrefetch: we,
    // public API
    expose: T,
    inheritAttrs: O,
    // assets
    components: J,
    directives: z,
    filters: B
  } = t;
  if (v && Ev(v, r, null), c)
    for (const se in c) {
      const I = c[se];
      Qe(I) && (r[se] = I.bind(n));
    }
  if (o) {
    const se = o.call(n, n);
    yt(se) && (e.data = /* @__PURE__ */ Go(se));
  }
  if (uu = !0, a)
    for (const se in a) {
      const I = a[se], Ve = Qe(I) ? I.bind(n, n) : Qe(I.get) ? I.get.bind(n, n) : Ir, K = !Qe(I) && Qe(I.set) ? I.set.bind(n) : Ir, Ne = ft({
        get: Ve,
        set: K
      });
      Object.defineProperty(r, se, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: ($e) => Ne.value = $e
      });
    }
  if (f)
    for (const se in f)
      Em(f[se], r, n, se);
  if (d) {
    const se = Qe(d) ? d.call(n) : d;
    Reflect.ownKeys(se).forEach((I) => {
      uv(I, se[I]);
    });
  }
  y && _h(y, e, "c");
  function me(se, I) {
    Je(I) ? I.forEach((Ve) => se(Ve.bind(n))) : I && se(I.bind(n));
  }
  if (me(_v, x), me(Al, w), me(xv, M), me(wv, k), me(yv, _), me(bv, F), me(Nv, G), me(Mv, R), me(kv, Y), me(Ga, X), me(Im, V), me(Sv, we), Je(T))
    if (T.length) {
      const se = e.exposed || (e.exposed = {});
      T.forEach((I) => {
        Object.defineProperty(se, I, {
          get: () => n[I],
          set: (Ve) => n[I] = Ve,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === Ir && (e.render = E), O != null && (e.inheritAttrs = O), J && (e.components = J), z && (e.directives = z), we && Pm(e);
}
function Ev(e, t, n = Ir) {
  Je(e) && (e = fu(e));
  for (const r in e) {
    const o = e[r];
    let a;
    yt(o) ? "default" in o ? a = Fs(
      o.from || r,
      o.default,
      !0
    ) : a = Fs(o.from || r) : a = Fs(o), /* @__PURE__ */ _n(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function _h(e, t, n) {
  Er(
    Je(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Em(e, t, n, r) {
  let o = r.includes(".") ? Nm(n, r) : () => n[r];
  if (Bt(e)) {
    const a = t[e];
    Qe(a) && Gi(o, a);
  } else if (Qe(e))
    Gi(o, e.bind(n));
  else if (yt(e))
    if (Je(e))
      e.forEach((a) => Em(a, t, n, r));
    else {
      const a = Qe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Qe(a) && Gi(o, a, e);
    }
}
function Fm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, f = a.get(t);
  let d;
  return f ? d = f : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (v) => el(d, v, c, !0)
  ), el(d, t, c)), yt(t) && a.set(t, d), d;
}
function el(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && el(e, a, n, !0), o && o.forEach(
    (c) => el(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const f = Fv[c] || n && n[c];
      e[c] = f ? f(e[c], t[c]) : t[c];
    }
  return e;
}
const Fv = {
  data: xh,
  props: wh,
  emits: wh,
  // objects
  methods: ma,
  computed: ma,
  // lifecycle
  beforeCreate: kn,
  created: kn,
  beforeMount: kn,
  mounted: kn,
  beforeUpdate: kn,
  updated: kn,
  beforeDestroy: kn,
  beforeUnmount: kn,
  destroyed: kn,
  unmounted: kn,
  activated: kn,
  deactivated: kn,
  errorCaptured: kn,
  serverPrefetch: kn,
  // assets
  components: ma,
  directives: ma,
  // watch
  watch: Dv,
  // provide / inject
  provide: xh,
  inject: Tv
};
function xh(e, t) {
  return t ? e ? function() {
    return xn(
      Qe(e) ? e.call(this, this) : e,
      Qe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Tv(e, t) {
  return ma(fu(e), fu(t));
}
function fu(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function kn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ma(e, t) {
  return e ? xn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wh(e, t) {
  return e ? Je(e) && Je(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xn(
    /* @__PURE__ */ Object.create(null),
    vh(e),
    vh(t ?? {})
  ) : t;
}
function Dv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = xn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = kn(e[r], t[r]);
  return n;
}
function Tm() {
  return {
    app: null,
    config: {
      isNativeTag: Xp,
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
let Lv = 0;
function Rv(e, t) {
  return function(r, o = null) {
    Qe(r) || (r = xn({}, r)), o != null && !yt(o) && (o = null);
    const a = Tm(), c = /* @__PURE__ */ new WeakSet(), f = [];
    let d = !1;
    const v = a.app = {
      _uid: Lv++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: m_,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...x) {
        return c.has(y) || (y && Qe(y.install) ? (c.add(y), y.install(v, ...x)) : Qe(y) && (c.add(y), y(v, ...x))), v;
      },
      mixin(y) {
        return a.mixins.includes(y) || a.mixins.push(y), v;
      },
      component(y, x) {
        return x ? (a.components[y] = x, v) : a.components[y];
      },
      directive(y, x) {
        return x ? (a.directives[y] = x, v) : a.directives[y];
      },
      mount(y, x, w) {
        if (!d) {
          const M = v._ceVNode || Ee(r, o);
          return M.appContext = a, w === !0 ? w = "svg" : w === !1 && (w = void 0), e(M, y, w), d = !0, v._container = y, y.__vue_app__ = v, Ol(M.component);
        }
      },
      onUnmount(y) {
        f.push(y);
      },
      unmount() {
        d && (Er(
          f,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(y, x) {
        return a.provides[y] = x, v;
      },
      runWithContext(y) {
        const x = Ao;
        Ao = v;
        try {
          return y();
        } finally {
          Ao = x;
        }
      }
    };
    return v;
  };
}
let Ao = null;
const $v = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Nn(t)}Modifiers`] || e[`${Xi(t)}Modifiers`];
function Vv(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || vt;
  let o = n;
  const a = t.startsWith("update:"), c = a && $v(r, t.slice(7));
  c && (c.trim && (o = n.map((y) => Bt(y) ? y.trim() : y)), c.number && (o = n.map(Ku)));
  let f, d = r[f = xc(t)] || // also try camelCase event handler (#2249)
  r[f = xc(Nn(t))];
  !d && a && (d = r[f = xc(Xi(t))]), d && Er(
    d,
    e,
    6,
    o
  );
  const v = r[f + "Once"];
  if (v) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Er(
      v,
      e,
      6,
      o
    );
  }
}
const zv = /* @__PURE__ */ new WeakMap();
function Dm(e, t, n = !1) {
  const r = n ? zv : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, f = !1;
  if (!Qe(e)) {
    const d = (v) => {
      const y = Dm(v, t, !0);
      y && (f = !0, xn(c, y));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !f ? (yt(e) && r.set(e, null), null) : (Je(a) ? a.forEach((d) => c[d] = null) : xn(c, a), yt(e) && r.set(e, c), c);
}
function Cl(e, t) {
  return !e || !_l(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ht(e, t[0].toLowerCase() + t.slice(1)) || ht(e, Xi(t)) || ht(e, t));
}
function Sh(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [a],
    slots: c,
    attrs: f,
    emit: d,
    render: v,
    renderCache: y,
    props: x,
    data: w,
    setupState: M,
    ctx: k,
    inheritAttrs: _
  } = e, F = Zs(e);
  let $, X;
  try {
    if (n.shapeFlag & 4) {
      const V = o || r, E = V;
      $ = kr(
        v.call(
          E,
          V,
          y,
          x,
          M,
          w,
          k
        )
      ), X = f;
    } else {
      const V = t;
      $ = kr(
        V.length > 1 ? V(
          x,
          { attrs: f, slots: c, emit: d }
        ) : V(
          x,
          null
        )
      ), X = t.props ? f : jv(f);
    }
  } catch (V) {
    Aa.length = 0, Nl(V, e, 1), $ = Ee(_i);
  }
  let C = $;
  if (X && _ !== !1) {
    const V = Object.keys(X), { shapeFlag: E } = C;
    V.length && E & 7 && (a && V.some(xl) && (X = Hv(
      X,
      a
    )), C = Ro(C, X, !1, !0));
  }
  return n.dirs && (C = Ro(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && tf(C, n.transition), $ = C, Zs(F), $;
}
const jv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || _l(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Hv = (e, t) => {
  const n = {};
  for (const r in e)
    (!xl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Gv(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: f, patchFlag: d } = t, v = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? kh(r, c, v) : !!c;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let x = 0; x < y.length; x++) {
        const w = y[x];
        if (Lm(c, r, w) && !Cl(v, w))
          return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable) ? !0 : r === c ? !1 : r ? c ? kh(r, c, v) : !0 : !!c;
  return !1;
}
function kh(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (Lm(t, e, a) && !Cl(n, a))
      return !0;
  }
  return !1;
}
function Lm(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && yt(r) && yt(o) ? !Bu(r, o) : r !== o;
}
function Kv({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Rm = {}, $m = () => Object.create(Rm), Vm = (e) => Object.getPrototypeOf(e) === Rm;
function Bv(e, t, n, r = !1) {
  const o = {}, a = $m();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), zm(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ Z1(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function Uv(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, f = /* @__PURE__ */ dt(o), [d] = e.propsOptions;
  let v = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const y = e.vnode.dynamicProps;
      for (let x = 0; x < y.length; x++) {
        let w = y[x];
        if (Cl(e.emitsOptions, w))
          continue;
        const M = t[w];
        if (d)
          if (ht(a, w))
            M !== a[w] && (a[w] = M, v = !0);
          else {
            const k = Nn(w);
            o[k] = du(
              d,
              f,
              k,
              M,
              e,
              !1
            );
          }
        else
          M !== a[w] && (a[w] = M, v = !0);
      }
    }
  } else {
    zm(e, t, o, a) && (v = !0);
    let y;
    for (const x in f)
      (!t || // for camelCase
      !ht(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Xi(x)) === x || !ht(t, y))) && (d ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[x] = du(
        d,
        f,
        x,
        void 0,
        e,
        !0
      )) : delete o[x]);
    if (a !== f)
      for (const x in a)
        (!t || !ht(t, x)) && (delete a[x], v = !0);
  }
  v && Yr(e.attrs, "set", "");
}
function zm(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, f;
  if (t)
    for (let d in t) {
      if (wa(d))
        continue;
      const v = t[d];
      let y;
      o && ht(o, y = Nn(d)) ? !a || !a.includes(y) ? n[y] = v : (f || (f = {}))[y] = v : Cl(e.emitsOptions, d) || (!(d in r) || v !== r[d]) && (r[d] = v, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ dt(n), v = f || vt;
    for (let y = 0; y < a.length; y++) {
      const x = a[y];
      n[x] = du(
        o,
        d,
        x,
        v[x],
        e,
        !ht(v, x)
      );
    }
  }
  return c;
}
function du(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const f = ht(c, "default");
    if (f && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Qe(d)) {
        const { propsDefaults: v } = o;
        if (n in v)
          r = v[n];
        else {
          const y = Ka(o);
          r = v[n] = d.call(
            null,
            t
          ), y();
        }
      } else
        r = d;
      o.ce && o.ce._setProp(n, r);
    }
    c[
      0
      /* shouldCast */
    ] && (a && !f ? r = !1 : c[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Xi(n)) && (r = !0));
  }
  return r;
}
const Wv = /* @__PURE__ */ new WeakMap();
function jm(e, t, n = !1) {
  const r = n ? Wv : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, f = [];
  let d = !1;
  if (!Qe(e)) {
    const y = (x) => {
      d = !0;
      const [w, M] = jm(x, t, !0);
      xn(c, w), M && f.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !d)
    return yt(e) && r.set(e, Mo), Mo;
  if (Je(a))
    for (let y = 0; y < a.length; y++) {
      const x = Nn(a[y]);
      Mh(x) && (c[x] = vt);
    }
  else if (a)
    for (const y in a) {
      const x = Nn(y);
      if (Mh(x)) {
        const w = a[y], M = c[x] = Je(w) || Qe(w) ? { type: w } : xn({}, w), k = M.type;
        let _ = !1, F = !0;
        if (Je(k))
          for (let $ = 0; $ < k.length; ++$) {
            const X = k[$], C = Qe(X) && X.name;
            if (C === "Boolean") {
              _ = !0;
              break;
            } else C === "String" && (F = !1);
          }
        else
          _ = Qe(k) && k.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = _, M[
          1
          /* shouldCastTrue */
        ] = F, (_ || ht(M, "default")) && f.push(x);
      }
    }
  const v = [c, f];
  return yt(e) && r.set(e, v), v;
}
function Mh(e) {
  return e[0] !== "$" && !wa(e);
}
const nf = (e) => e === "_" || e === "_ctx" || e === "$stable", rf = (e) => Je(e) ? e.map(kr) : [kr(e)], Yv = (e, t, n) => {
  if (t._n)
    return t;
  const r = km((...o) => rf(t(...o)), n);
  return r._c = !1, r;
}, Hm = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (nf(o)) continue;
    const a = e[o];
    if (Qe(a))
      t[o] = Yv(o, a, r);
    else if (a != null) {
      const c = rf(a);
      t[o] = () => c;
    }
  }
}, Gm = (e, t) => {
  const n = rf(t);
  e.slots.default = () => n;
}, Km = (e, t, n) => {
  for (const r in t)
    (n || !nf(r)) && (e[r] = t[r]);
}, Xv = (e, t, n) => {
  const r = e.slots = $m();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Km(r, t, n), n && em(r, "_", o, !0)) : Hm(t, r);
  } else t && Gm(e, t);
}, qv = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = vt;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? a = !1 : Km(o, t, n) : (a = !t.$stable, Hm(t, o)), c = t;
  } else t && (Gm(e, t), c = { default: 1 });
  if (a)
    for (const f in o)
      !nf(f) && c[f] == null && delete o[f];
}, Tn = t_;
function Jv(e) {
  return Zv(e);
}
function Zv(e, t) {
  const n = kl();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: c,
    createText: f,
    createComment: d,
    setText: v,
    setElementText: y,
    parentNode: x,
    nextSibling: w,
    setScopeId: M = Ir,
    insertStaticContent: k
  } = e, _ = (D, j, ee, le = null, ue = null, fe = null, ve = void 0, ke = null, Se = !!j.dynamicChildren) => {
    if (D === j)
      return;
    D && !ca(D, j) && (le = fn(D), $e(D, ue, fe, !0), D = null), j.patchFlag === -2 && (Se = !1, j.dynamicChildren = null);
    const { type: ge, ref: Re, shapeFlag: Ae } = j;
    switch (ge) {
      case Il:
        F(D, j, ee, le);
        break;
      case _i:
        $(D, j, ee, le);
        break;
      case Ac:
        D == null && X(j, ee, le, ve);
        break;
      case We:
        J(
          D,
          j,
          ee,
          le,
          ue,
          fe,
          ve,
          ke,
          Se
        );
        break;
      default:
        Ae & 1 ? E(
          D,
          j,
          ee,
          le,
          ue,
          fe,
          ve,
          ke,
          Se
        ) : Ae & 6 ? z(
          D,
          j,
          ee,
          le,
          ue,
          fe,
          ve,
          ke,
          Se
        ) : (Ae & 64 || Ae & 128) && ge.process(
          D,
          j,
          ee,
          le,
          ue,
          fe,
          ve,
          ke,
          Se,
          An
        );
    }
    Re != null && ue ? Ma(Re, D && D.ref, fe, j || D, !j) : Re == null && D && D.ref != null && Ma(D.ref, null, fe, D, !0);
  }, F = (D, j, ee, le) => {
    if (D == null)
      r(
        j.el = f(j.children),
        ee,
        le
      );
    else {
      const ue = j.el = D.el;
      j.children !== D.children && v(ue, j.children);
    }
  }, $ = (D, j, ee, le) => {
    D == null ? r(
      j.el = d(j.children || ""),
      ee,
      le
    ) : j.el = D.el;
  }, X = (D, j, ee, le) => {
    [D.el, D.anchor] = k(
      D.children,
      j,
      ee,
      le,
      D.el,
      D.anchor
    );
  }, C = ({ el: D, anchor: j }, ee, le) => {
    let ue;
    for (; D && D !== j; )
      ue = w(D), r(D, ee, le), D = ue;
    r(j, ee, le);
  }, V = ({ el: D, anchor: j }) => {
    let ee;
    for (; D && D !== j; )
      ee = w(D), o(D), D = ee;
    o(j);
  }, E = (D, j, ee, le, ue, fe, ve, ke, Se) => {
    if (j.type === "svg" ? ve = "svg" : j.type === "math" && (ve = "mathml"), D == null)
      R(
        j,
        ee,
        le,
        ue,
        fe,
        ve,
        ke,
        Se
      );
    else {
      const ge = D.el && D.el._isVueCE ? D.el : null;
      try {
        ge && ge._beginPatch(), we(
          D,
          j,
          ue,
          fe,
          ve,
          ke,
          Se
        );
      } finally {
        ge && ge._endPatch();
      }
    }
  }, R = (D, j, ee, le, ue, fe, ve, ke) => {
    let Se, ge;
    const { props: Re, shapeFlag: Ae, transition: De, dirs: p } = D;
    if (Se = D.el = c(
      D.type,
      fe,
      Re && Re.is,
      Re
    ), Ae & 8 ? y(Se, D.children) : Ae & 16 && G(
      D.children,
      Se,
      null,
      le,
      ue,
      Pc(D, fe),
      ve,
      ke
    ), p && Ai(D, null, le, "created"), Y(Se, D, D.scopeId, ve, le), Re) {
      for (const st in Re)
        st !== "value" && !wa(st) && a(Se, st, null, Re[st], fe, le);
      "value" in Re && a(Se, "value", null, Re.value, fe), (ge = Re.onVnodeBeforeMount) && br(ge, le, D);
    }
    p && Ai(D, null, le, "beforeMount");
    const Pe = Qv(ue, De);
    Pe && De.beforeEnter(Se), r(Se, j, ee), ((ge = Re && Re.onVnodeMounted) || Pe || p) && Tn(() => {
      try {
        ge && br(ge, le, D), Pe && De.enter(Se), p && Ai(D, null, le, "mounted");
      } finally {
      }
    }, ue);
  }, Y = (D, j, ee, le, ue) => {
    if (ee && M(D, ee), le)
      for (let fe = 0; fe < le.length; fe++)
        M(D, le[fe]);
    if (ue) {
      let fe = ue.subTree;
      if (j === fe || Ym(fe.type) && (fe.ssContent === j || fe.ssFallback === j)) {
        const ve = ue.vnode;
        Y(
          D,
          ve,
          ve.scopeId,
          ve.slotScopeIds,
          ue.parent
        );
      }
    }
  }, G = (D, j, ee, le, ue, fe, ve, ke, Se = 0) => {
    for (let ge = Se; ge < D.length; ge++) {
      const Re = D[ge] = ke ? Wr(D[ge]) : kr(D[ge]);
      _(
        null,
        Re,
        j,
        ee,
        le,
        ue,
        fe,
        ve,
        ke
      );
    }
  }, we = (D, j, ee, le, ue, fe, ve) => {
    const ke = j.el = D.el;
    let { patchFlag: Se, dynamicChildren: ge, dirs: Re } = j;
    Se |= D.patchFlag & 16;
    const Ae = D.props || vt, De = j.props || vt;
    let p;
    if (ee && Ci(ee, !1), (p = De.onVnodeBeforeUpdate) && br(p, ee, j, D), Re && Ai(j, D, ee, "beforeUpdate"), ee && Ci(ee, !0), (Ae.innerHTML && De.innerHTML == null || Ae.textContent && De.textContent == null) && y(ke, ""), ge ? T(
      D.dynamicChildren,
      ge,
      ke,
      ee,
      le,
      Pc(j, ue),
      fe
    ) : ve || I(
      D,
      j,
      ke,
      null,
      ee,
      le,
      Pc(j, ue),
      fe,
      !1
    ), Se > 0) {
      if (Se & 16)
        O(ke, Ae, De, ee, ue);
      else if (Se & 2 && Ae.class !== De.class && a(ke, "class", null, De.class, ue), Se & 4 && a(ke, "style", Ae.style, De.style, ue), Se & 8) {
        const Pe = j.dynamicProps;
        for (let st = 0; st < Pe.length; st++) {
          const Xe = Pe[st], wt = Ae[Xe], Ot = De[Xe];
          (Ot !== wt || Xe === "value") && a(ke, Xe, wt, Ot, ue, ee);
        }
      }
      Se & 1 && D.children !== j.children && y(ke, j.children);
    } else !ve && ge == null && O(ke, Ae, De, ee, ue);
    ((p = De.onVnodeUpdated) || Re) && Tn(() => {
      p && br(p, ee, j, D), Re && Ai(j, D, ee, "updated");
    }, le);
  }, T = (D, j, ee, le, ue, fe, ve) => {
    for (let ke = 0; ke < j.length; ke++) {
      const Se = D[ke], ge = j[ke], Re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Se.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Se.type === We || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ca(Se, ge) || // - In the case of a component, it could contain anything.
        Se.shapeFlag & 198) ? x(Se.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ee
        )
      );
      _(
        Se,
        ge,
        Re,
        null,
        le,
        ue,
        fe,
        ve,
        !0
      );
    }
  }, O = (D, j, ee, le, ue) => {
    if (j !== ee) {
      if (j !== vt)
        for (const fe in j)
          !wa(fe) && !(fe in ee) && a(
            D,
            fe,
            j[fe],
            null,
            ue,
            le
          );
      for (const fe in ee) {
        if (wa(fe)) continue;
        const ve = ee[fe], ke = j[fe];
        ve !== ke && fe !== "value" && a(D, fe, ke, ve, ue, le);
      }
      "value" in ee && a(D, "value", j.value, ee.value, ue);
    }
  }, J = (D, j, ee, le, ue, fe, ve, ke, Se) => {
    const ge = j.el = D ? D.el : f(""), Re = j.anchor = D ? D.anchor : f("");
    let { patchFlag: Ae, dynamicChildren: De, slotScopeIds: p } = j;
    p && (ke = ke ? ke.concat(p) : p), D == null ? (r(ge, ee, le), r(Re, ee, le), G(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      ee,
      Re,
      ue,
      fe,
      ve,
      ke,
      Se
    )) : Ae > 0 && Ae & 64 && De && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren && D.dynamicChildren.length === De.length ? (T(
      D.dynamicChildren,
      De,
      ee,
      ue,
      fe,
      ve,
      ke
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || ue && j === ue.subTree) && Bm(
      D,
      j,
      !0
      /* shallow */
    )) : I(
      D,
      j,
      ee,
      Re,
      ue,
      fe,
      ve,
      ke,
      Se
    );
  }, z = (D, j, ee, le, ue, fe, ve, ke, Se) => {
    j.slotScopeIds = ke, D == null ? j.shapeFlag & 512 ? ue.ctx.activate(
      j,
      ee,
      le,
      ve,
      Se
    ) : B(
      j,
      ee,
      le,
      ue,
      fe,
      ve,
      Se
    ) : q(D, j, Se);
  }, B = (D, j, ee, le, ue, fe, ve) => {
    const ke = D.component = s_(
      D,
      le,
      ue
    );
    if (Am(D) && (ke.ctx.renderer = An), c_(ke, !1, ve), ke.asyncDep) {
      if (ue && ue.registerDep(ke, me, ve), !D.el) {
        const Se = ke.subTree = Ee(_i);
        $(null, Se, j, ee), D.placeholder = Se.el;
      }
    } else
      me(
        ke,
        D,
        j,
        ee,
        ue,
        fe,
        ve
      );
  }, q = (D, j, ee) => {
    const le = j.component = D.component;
    if (Gv(D, j, ee))
      if (le.asyncDep && !le.asyncResolved) {
        se(le, j, ee);
        return;
      } else
        le.next = j, le.update();
    else
      j.el = D.el, le.vnode = j;
  }, me = (D, j, ee, le, ue, fe, ve) => {
    const ke = () => {
      if (D.isMounted) {
        let { next: Ae, bu: De, u: p, parent: Pe, vnode: st } = D;
        {
          const pt = Um(D);
          if (pt) {
            Ae && (Ae.el = st.el, se(D, Ae, ve)), pt.asyncDep.then(() => {
              Tn(() => {
                D.isUnmounted || ge();
              }, ue);
            });
            return;
          }
        }
        let Xe = Ae, wt;
        Ci(D, !1), Ae ? (Ae.el = st.el, se(D, Ae, ve)) : Ae = st, De && Es(De), (wt = Ae.props && Ae.props.onVnodeBeforeUpdate) && br(wt, Pe, Ae, st), Ci(D, !0);
        const Ot = Sh(D), en = D.subTree;
        D.subTree = Ot, _(
          en,
          Ot,
          // parent may have changed if it's in a teleport
          x(en.el),
          // anchor may have changed if it's in a fragment
          fn(en),
          D,
          ue,
          fe
        ), Ae.el = Ot.el, Xe === null && Kv(D, Ot.el), p && Tn(p, ue), (wt = Ae.props && Ae.props.onVnodeUpdated) && Tn(
          () => br(wt, Pe, Ae, st),
          ue
        );
      } else {
        let Ae;
        const { el: De, props: p } = j, { bm: Pe, m: st, parent: Xe, root: wt, type: Ot } = D, en = Na(j);
        Ci(D, !1), Pe && Es(Pe), !en && (Ae = p && p.onVnodeBeforeMount) && br(Ae, Xe, j), Ci(D, !0);
        {
          wt.ce && wt.ce._hasShadowRoot() && wt.ce._injectChildStyle(
            Ot,
            D.parent ? D.parent.type : void 0
          );
          const pt = D.subTree = Sh(D);
          _(
            null,
            pt,
            ee,
            le,
            D,
            ue,
            fe
          ), j.el = pt.el;
        }
        if (st && Tn(st, ue), !en && (Ae = p && p.onVnodeMounted)) {
          const pt = j;
          Tn(
            () => br(Ae, Xe, pt),
            ue
          );
        }
        (j.shapeFlag & 256 || Xe && Na(Xe.vnode) && Xe.vnode.shapeFlag & 256) && D.a && Tn(D.a, ue), D.isMounted = !0, j = ee = le = null;
      }
    };
    D.scope.on();
    const Se = D.effect = new im(ke);
    D.scope.off();
    const ge = D.update = Se.run.bind(Se), Re = D.job = Se.runIfDirty.bind(Se);
    Re.i = D, Re.id = D.uid, Se.scheduler = () => ef(Re), Ci(D, !0), ge();
  }, se = (D, j, ee) => {
    j.component = D;
    const le = D.vnode.props;
    D.vnode = j, D.next = null, Uv(D, j.props, le, ee), qv(D, j.children, ee), Qr(), mh(D), ei();
  }, I = (D, j, ee, le, ue, fe, ve, ke, Se = !1) => {
    const ge = D && D.children, Re = D ? D.shapeFlag : 0, Ae = j.children, { patchFlag: De, shapeFlag: p } = j;
    if (De > 0) {
      if (De & 128) {
        K(
          ge,
          Ae,
          ee,
          le,
          ue,
          fe,
          ve,
          ke,
          Se
        );
        return;
      } else if (De & 256) {
        Ve(
          ge,
          Ae,
          ee,
          le,
          ue,
          fe,
          ve,
          ke,
          Se
        );
        return;
      }
    }
    p & 8 ? (Re & 16 && It(ge, ue, fe), Ae !== ge && y(ee, Ae)) : Re & 16 ? p & 16 ? K(
      ge,
      Ae,
      ee,
      le,
      ue,
      fe,
      ve,
      ke,
      Se
    ) : It(ge, ue, fe, !0) : (Re & 8 && y(ee, ""), p & 16 && G(
      Ae,
      ee,
      le,
      ue,
      fe,
      ve,
      ke,
      Se
    ));
  }, Ve = (D, j, ee, le, ue, fe, ve, ke, Se) => {
    D = D || Mo, j = j || Mo;
    const ge = D.length, Re = j.length, Ae = Math.min(ge, Re);
    let De;
    for (De = 0; De < Ae; De++) {
      const p = j[De] = Se ? Wr(j[De]) : kr(j[De]);
      _(
        D[De],
        p,
        ee,
        null,
        ue,
        fe,
        ve,
        ke,
        Se
      );
    }
    ge > Re ? It(
      D,
      ue,
      fe,
      !0,
      !1,
      Ae
    ) : G(
      j,
      ee,
      le,
      ue,
      fe,
      ve,
      ke,
      Se,
      Ae
    );
  }, K = (D, j, ee, le, ue, fe, ve, ke, Se) => {
    let ge = 0;
    const Re = j.length;
    let Ae = D.length - 1, De = Re - 1;
    for (; ge <= Ae && ge <= De; ) {
      const p = D[ge], Pe = j[ge] = Se ? Wr(j[ge]) : kr(j[ge]);
      if (ca(p, Pe))
        _(
          p,
          Pe,
          ee,
          null,
          ue,
          fe,
          ve,
          ke,
          Se
        );
      else
        break;
      ge++;
    }
    for (; ge <= Ae && ge <= De; ) {
      const p = D[Ae], Pe = j[De] = Se ? Wr(j[De]) : kr(j[De]);
      if (ca(p, Pe))
        _(
          p,
          Pe,
          ee,
          null,
          ue,
          fe,
          ve,
          ke,
          Se
        );
      else
        break;
      Ae--, De--;
    }
    if (ge > Ae) {
      if (ge <= De) {
        const p = De + 1, Pe = p < Re ? j[p].el : le;
        for (; ge <= De; )
          _(
            null,
            j[ge] = Se ? Wr(j[ge]) : kr(j[ge]),
            ee,
            Pe,
            ue,
            fe,
            ve,
            ke,
            Se
          ), ge++;
      }
    } else if (ge > De)
      for (; ge <= Ae; )
        $e(D[ge], ue, fe, !0), ge++;
    else {
      const p = ge, Pe = ge, st = /* @__PURE__ */ new Map();
      for (ge = Pe; ge <= De; ge++) {
        const Ut = j[ge] = Se ? Wr(j[ge]) : kr(j[ge]);
        Ut.key != null && st.set(Ut.key, ge);
      }
      let Xe, wt = 0;
      const Ot = De - Pe + 1;
      let en = !1, pt = 0;
      const Ce = new Array(Ot);
      for (ge = 0; ge < Ot; ge++) Ce[ge] = 0;
      for (ge = p; ge <= Ae; ge++) {
        const Ut = D[ge];
        if (wt >= Ot) {
          $e(Ut, ue, fe, !0);
          continue;
        }
        let an;
        if (Ut.key != null)
          an = st.get(Ut.key);
        else
          for (Xe = Pe; Xe <= De; Xe++)
            if (Ce[Xe - Pe] === 0 && ca(Ut, j[Xe])) {
              an = Xe;
              break;
            }
        an === void 0 ? $e(Ut, ue, fe, !0) : (Ce[an - Pe] = ge + 1, an >= pt ? pt = an : en = !0, _(
          Ut,
          j[an],
          ee,
          null,
          ue,
          fe,
          ve,
          ke,
          Se
        ), wt++);
      }
      const Bn = en ? e_(Ce) : Mo;
      for (Xe = Bn.length - 1, ge = Ot - 1; ge >= 0; ge--) {
        const Ut = Pe + ge, an = j[Ut], Lr = j[Ut + 1], H = Ut + 1 < Re ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Lr.el || Wm(Lr)
        ) : le;
        Ce[ge] === 0 ? _(
          null,
          an,
          ee,
          H,
          ue,
          fe,
          ve,
          ke,
          Se
        ) : en && (Xe < 0 || ge !== Bn[Xe] ? Ne(an, ee, H, 2) : Xe--);
      }
    }
  }, Ne = (D, j, ee, le, ue = null) => {
    const { el: fe, type: ve, transition: ke, children: Se, shapeFlag: ge } = D;
    if (ge & 6) {
      Ne(D.component.subTree, j, ee, le);
      return;
    }
    if (ge & 128) {
      D.suspense.move(j, ee, le);
      return;
    }
    if (ge & 64) {
      ve.move(D, j, ee, An);
      return;
    }
    if (ve === We) {
      r(fe, j, ee);
      for (let Ae = 0; Ae < Se.length; Ae++)
        Ne(Se[Ae], j, ee, le);
      r(D.anchor, j, ee);
      return;
    }
    if (ve === Ac) {
      C(D, j, ee);
      return;
    }
    if (le !== 2 && ge & 1 && ke)
      if (le === 0)
        ke.beforeEnter(fe), r(fe, j, ee), Tn(() => ke.enter(fe), ue);
      else {
        const { leave: Ae, delayLeave: De, afterLeave: p } = ke, Pe = () => {
          D.ctx.isUnmounted ? o(fe) : r(fe, j, ee);
        }, st = () => {
          fe._isLeaving && fe[gv](
            !0
            /* cancelled */
          ), Ae(fe, () => {
            Pe(), p && p();
          });
        };
        De ? De(fe, Pe, st) : st();
      }
    else
      r(fe, j, ee);
  }, $e = (D, j, ee, le = !1, ue = !1) => {
    const {
      type: fe,
      props: ve,
      ref: ke,
      children: Se,
      dynamicChildren: ge,
      shapeFlag: Re,
      patchFlag: Ae,
      dirs: De,
      cacheIndex: p,
      memo: Pe
    } = D;
    if (Ae === -2 && (ue = !1), ke != null && (Qr(), Ma(ke, null, ee, D, !0), ei()), p != null && (j.renderCache[p] = void 0), Re & 256) {
      j.ctx.deactivate(D);
      return;
    }
    const st = Re & 1 && De, Xe = !Na(D);
    let wt;
    if (Xe && (wt = ve && ve.onVnodeBeforeUnmount) && br(wt, j, D), Re & 6)
      Ke(D.component, ee, le);
    else {
      if (Re & 128) {
        D.suspense.unmount(ee, le);
        return;
      }
      st && Ai(D, null, j, "beforeUnmount"), Re & 64 ? D.type.remove(
        D,
        j,
        ee,
        An,
        le
      ) : ge && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ge.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (fe !== We || Ae > 0 && Ae & 64) ? It(
        ge,
        j,
        ee,
        !1,
        !0
      ) : (fe === We && Ae & 384 || !ue && Re & 16) && It(Se, j, ee), le && Ze(D);
    }
    const Ot = Pe != null && p == null;
    (Xe && (wt = ve && ve.onVnodeUnmounted) || st || Ot) && Tn(() => {
      wt && br(wt, j, D), st && Ai(D, null, j, "unmounted"), Ot && (D.el = null);
    }, ee);
  }, Ze = (D) => {
    const { type: j, el: ee, anchor: le, transition: ue } = D;
    if (j === We) {
      Ct(ee, le);
      return;
    }
    if (j === Ac) {
      V(D);
      return;
    }
    const fe = () => {
      o(ee), ue && !ue.persisted && ue.afterLeave && ue.afterLeave();
    };
    if (D.shapeFlag & 1 && ue && !ue.persisted) {
      const { leave: ve, delayLeave: ke } = ue, Se = () => ve(ee, fe);
      ke ? ke(D.el, fe, Se) : Se();
    } else
      fe();
  }, Ct = (D, j) => {
    let ee;
    for (; D !== j; )
      ee = w(D), o(D), D = ee;
    o(j);
  }, Ke = (D, j, ee) => {
    const { bum: le, scope: ue, job: fe, subTree: ve, um: ke, m: Se, a: ge } = D;
    Nh(Se), Nh(ge), le && Es(le), ue.stop(), fe && (fe.flags |= 8, $e(ve, D, j, ee)), ke && Tn(ke, j), Tn(() => {
      D.isUnmounted = !0;
    }, j);
  }, It = (D, j, ee, le = !1, ue = !1, fe = 0) => {
    for (let ve = fe; ve < D.length; ve++)
      $e(D[ve], j, ee, le, ue);
  }, fn = (D) => {
    if (D.shapeFlag & 6)
      return fn(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const j = w(D.anchor || D.el), ee = j && j[pv];
    return ee ? w(ee) : j;
  };
  let hr = !1;
  const nr = (D, j, ee) => {
    let le;
    D == null ? j._vnode && ($e(j._vnode, null, null, !0), le = j._vnode.component) : _(
      j._vnode || null,
      D,
      j,
      null,
      null,
      null,
      ee
    ), j._vnode = D, hr || (hr = !0, mh(le), xm(), hr = !1);
  }, An = {
    p: _,
    um: $e,
    m: Ne,
    r: Ze,
    mt: B,
    mc: G,
    pc: I,
    pbc: T,
    n: fn,
    o: e
  };
  return {
    render: nr,
    hydrate: void 0,
    createApp: Rv(nr)
  };
}
function Pc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ci({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Qv(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Bm(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Je(r) && Je(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let f = o[a];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = o[a] = Wr(o[a]), f.el = c.el), !n && f.patchFlag !== -2 && Bm(c, f)), f.type === Il && (f.patchFlag === -1 && (f = o[a] = Wr(f)), f.el = c.el), f.type === _i && !f.el && (f.el = c.el);
    }
}
function e_(e) {
  const t = e.slice(), n = [0];
  let r, o, a, c, f;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const v = e[r];
    if (v !== 0) {
      if (o = n[n.length - 1], e[o] < v) {
        t[r] = o, n.push(r);
        continue;
      }
      for (a = 0, c = n.length - 1; a < c; )
        f = a + c >> 1, e[n[f]] < v ? a = f + 1 : c = f;
      v < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, c = n[a - 1]; a-- > 0; )
    n[a] = c, c = t[c];
  return n;
}
function Um(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Um(t);
}
function Nh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Wm(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Wm(t.subTree) : null;
}
const Ym = (e) => e.__isSuspense;
function t_(e, t) {
  t && t.pendingBranch ? Je(e) ? t.effects.push(...e) : t.effects.push(e) : cv(e);
}
const We = /* @__PURE__ */ Symbol.for("v-fgt"), Il = /* @__PURE__ */ Symbol.for("v-txt"), _i = /* @__PURE__ */ Symbol.for("v-cmt"), Ac = /* @__PURE__ */ Symbol.for("v-stc"), Aa = [];
let Kn = null;
function ae(e = !1) {
  Aa.push(Kn = e ? null : []);
}
function n_() {
  Aa.pop(), Kn = Aa[Aa.length - 1] || null;
}
let Ea = 1;
function Ph(e, t = !1) {
  Ea += e, e < 0 && Kn && t && (Kn.hasOnce = !0);
}
function Xm(e) {
  return e.dynamicChildren = Ea > 0 ? Kn || Mo : null, n_(), Ea > 0 && Kn && Kn.push(e), e;
}
function ce(e, t, n, r, o, a) {
  return Xm(
    W(
      e,
      t,
      n,
      r,
      o,
      a,
      !0
    )
  );
}
function Dr(e, t, n, r, o) {
  return Xm(
    Ee(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function qm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ca(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Jm = ({ key: e }) => e ?? null, Ts = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Bt(e) || /* @__PURE__ */ _n(e) || Qe(e) ? { i: Gn, r: e, k: t, f: !!n } : e : null);
function W(e, t = null, n = null, r = 0, o = null, a = e === We ? 0 : 1, c = !1, f = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Jm(t),
    ref: t && Ts(t),
    scopeId: Sm,
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
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Gn
  };
  return f ? (of(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= Bt(n) ? 8 : 16), Ea > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Kn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Kn.push(d), d;
}
const Ee = r_;
function r_(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Om) && (e = _i), qm(e)) {
    const f = Ro(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && of(f, n), Ea > 0 && !a && Kn && (f.shapeFlag & 6 ? Kn[Kn.indexOf(e)] = f : Kn.push(f)), f.patchFlag = -2, f;
  }
  if (p_(e) && (e = e.__vccOpts), t) {
    t = i_(t);
    let { class: f, style: d } = t;
    f && !Bt(f) && (t.class = at(f)), yt(d) && (/* @__PURE__ */ Zu(d) && !Je(d) && (d = xn({}, d)), t.style = _t(d));
  }
  const c = Bt(e) ? 1 : Ym(e) ? 128 : mv(e) ? 64 : yt(e) ? 4 : Qe(e) ? 2 : 0;
  return W(
    e,
    t,
    n,
    r,
    o,
    c,
    a,
    !0
  );
}
function i_(e) {
  return e ? /* @__PURE__ */ Zu(e) || Vm(e) ? xn({}, e) : e : null;
}
function Ro(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: f, transition: d } = e, v = t ? yi(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && Jm(v),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Je(a) ? a.concat(Ts(t)) : [a, Ts(t)] : Ts(t)
    ) : a,
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
    patchFlag: t && e.type !== We ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: d,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ro(e.ssContent),
    ssFallback: e.ssFallback && Ro(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && tf(
    y,
    d.clone(y)
  ), y;
}
function ga(e = " ", t = 0) {
  return Ee(Il, null, e, t);
}
function ct(e = "", t = !1) {
  return t ? (ae(), Dr(_i, null, e)) : Ee(_i, null, e);
}
function kr(e) {
  return e == null || typeof e == "boolean" ? Ee(_i) : Je(e) ? Ee(
    We,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qm(e) ? Wr(e) : Ee(Il, null, String(e));
}
function Wr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ro(e);
}
function of(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Je(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), of(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Vm(t) ? t._ctx = Gn : o === 3 && Gn && (Gn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Qe(t) ? (t = { default: t, _ctx: Gn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ga(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function yi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = at([t.class, r.class]));
      else if (o === "style")
        t.style = _t([t.style, r.style]);
      else if (_l(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(Je(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !xl(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function br(e, t, n, r = null) {
  Er(e, t, 7, [
    n,
    r
  ]);
}
const o_ = Tm();
let a_ = 0;
function s_(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || o_, a = {
    uid: a_++,
    vnode: e,
    type: r,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new E1(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: jm(r, o),
    emitsOptions: Dm(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: vt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: vt,
    data: vt,
    props: vt,
    attrs: vt,
    slots: vt,
    refs: vt,
    setupState: vt,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Vv.bind(null, a), e.ce && e.ce(a), a;
}
let vn = null;
const l_ = () => vn || Gn;
let tl, hu;
{
  const e = kl(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  tl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => vn = n
  ), hu = t(
    "__VUE_SSR_SETTERS__",
    (n) => Fa = n
  );
}
const Ka = (e) => {
  const t = vn;
  return tl(e), e.scope.on(), () => {
    e.scope.off(), tl(t);
  };
}, Ah = () => {
  vn && vn.scope.off(), tl(null);
};
function Zm(e) {
  return e.vnode.shapeFlag & 4;
}
let Fa = !1;
function c_(e, t = !1, n = !1) {
  t && hu(t);
  const { props: r, children: o } = e.vnode, a = Zm(e);
  Bv(e, r, a, t), Xv(e, o, n || t);
  const c = a ? u_(e, t) : void 0;
  return t && hu(!1), c;
}
function u_(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Iv);
  const { setup: r } = n;
  if (r) {
    Qr();
    const o = e.setupContext = r.length > 1 ? d_(e) : null, a = Ka(e), c = Ha(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), f = Jp(c);
    if (ei(), a(), (f || e.sp) && !Na(e) && Pm(e), f) {
      if (c.then(Ah, Ah), t)
        return c.then((d) => {
          Ch(e, d);
        }).catch((d) => {
          Nl(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Ch(e, c);
  } else
    Qm(e);
}
function Ch(e, t, n) {
  Qe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : yt(t) && (e.setupState = bm(t)), Qm(e);
}
function Qm(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Ir);
  {
    const o = Ka(e);
    Qr();
    try {
      Ov(e);
    } finally {
      ei(), o();
    }
  }
}
const f_ = {
  get(e, t) {
    return bn(e, "get", ""), e[t];
  }
};
function d_(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, f_),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ol(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bm(Q1(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Pa)
        return Pa[n](e);
    },
    has(t, n) {
      return n in t || n in Pa;
    }
  })) : e.proxy;
}
function h_(e, t = !0) {
  return Qe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function p_(e) {
  return Qe(e) && "__vccOpts" in e;
}
const ft = (e, t) => /* @__PURE__ */ iv(e, t, Fa), m_ = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let pu;
const Ih = typeof window < "u" && window.trustedTypes;
if (Ih)
  try {
    pu = /* @__PURE__ */ Ih.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const eg = pu ? (e) => pu.createHTML(e) : (e) => e, g_ = "http://www.w3.org/2000/svg", y_ = "http://www.w3.org/1998/Math/MathML", Kr = typeof document < "u" ? document : null, Oh = Kr && /* @__PURE__ */ Kr.createElement("template"), b_ = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Kr.createElementNS(g_, e) : t === "mathml" ? Kr.createElementNS(y_, e) : n ? Kr.createElement(e, { is: n }) : Kr.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Kr.createTextNode(e),
  createComment: (e) => Kr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Kr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, r, o, a) {
    const c = n ? n.previousSibling : t.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      Oh.innerHTML = eg(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Oh.content;
      if (r === "svg" || r === "mathml") {
        const d = f.firstChild;
        for (; d.firstChild; )
          f.appendChild(d.firstChild);
        f.removeChild(d);
      }
      t.insertBefore(f, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, v_ = /* @__PURE__ */ Symbol("_vtc");
function __(e, t, n) {
  const r = e[v_];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const nl = /* @__PURE__ */ Symbol("_vod"), tg = /* @__PURE__ */ Symbol("_vsh"), Ko = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[nl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ua(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), ua(e, !0), r.enter(e)) : r.leave(e, () => {
      ua(e, !1);
    }) : ua(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ua(e, t);
  }
};
function ua(e, t) {
  e.style.display = t ? e[nl] : "none", e[tg] = !t;
}
const x_ = /* @__PURE__ */ Symbol(""), w_ = /(?:^|;)\s*display\s*:/;
function S_(e, t, n) {
  const r = e.style, o = Bt(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (Bt(t))
        for (const c of t.split(";")) {
          const f = c.slice(0, c.indexOf(":")).trim();
          n[f] == null && Ds(r, f, "");
        }
      else
        for (const c in t)
          n[c] == null && Ds(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), Ds(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[x_];
      c && (n += ";" + c), r.cssText = n, a = w_.test(n);
    }
  } else t && e.removeAttribute("style");
  nl in e && (e[nl] = a ? r.display : "", e[tg] && (r.display = "none"));
}
const Eh = /\s*!important$/;
function Ds(e, t, n) {
  if (Je(n))
    n.forEach((r) => Ds(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = k_(e, t);
    Eh.test(n) ? e.setProperty(
      Xi(r),
      n.replace(Eh, ""),
      "important"
    ) : e[r] = n;
  }
}
const Fh = ["Webkit", "Moz", "ms"], Cc = {};
function k_(e, t) {
  const n = Cc[t];
  if (n)
    return n;
  let r = Nn(t);
  if (r !== "filter" && r in e)
    return Cc[t] = r;
  r = Sl(r);
  for (let o = 0; o < Fh.length; o++) {
    const a = Fh[o] + r;
    if (a in e)
      return Cc[t] = a;
  }
  return t;
}
const Th = "http://www.w3.org/1999/xlink";
function Dh(e, t, n, r, o, a = I1(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Th, t.slice(6, t.length)) : e.setAttributeNS(Th, t, n) : n == null || a && !tm(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Or(n) ? String(n) : n
  );
}
function Lh(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? eg(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const f = a === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = tm(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function vo(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function M_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Rh = /* @__PURE__ */ Symbol("_vei");
function N_(e, t, n, r, o = null) {
  const a = e[Rh] || (e[Rh] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [f, d] = P_(t);
    if (r) {
      const v = a[t] = I_(
        r,
        o
      );
      vo(e, f, v, d);
    } else c && (M_(e, f, c, d), a[t] = void 0);
  }
}
const $h = /(?:Once|Passive|Capture)$/;
function P_(e) {
  let t;
  if ($h.test(e)) {
    t = {};
    let r;
    for (; r = e.match($h); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xi(e.slice(2)), t];
}
let Ic = 0;
const A_ = /* @__PURE__ */ Promise.resolve(), C_ = () => Ic || (A_.then(() => Ic = 0), Ic = Date.now());
function I_(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Er(
      O_(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = C_(), n;
}
function O_(e, t) {
  if (Je(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Vh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, E_ = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? __(e, r, c) : t === "style" ? S_(e, n, r) : _l(t) ? xl(t) || N_(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : F_(e, t, r, c)) ? (Lh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Dh(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (T_(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Bt(r))) ? Lh(e, Nn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Dh(e, t, r, c));
};
function F_(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Vh(t) && Qe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Vh(t) && Bt(n) ? !1 : t in e;
}
function T_(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Nn(t);
  return Array.isArray(n) ? n.some((o) => Nn(o) === r) : Object.keys(n).some((o) => Nn(o) === r);
}
const zh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Je(t) ? (n) => Es(t, n) : t;
};
function D_(e) {
  e.target.composing = !0;
}
function jh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Oc = /* @__PURE__ */ Symbol("_assign");
function Hh(e, t, n) {
  return t && (e = e.trim()), n && (e = Ku(e)), e;
}
const Gh = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Oc] = zh(o);
    const a = r || o.props && o.props.type === "number";
    vo(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Oc](Hh(e.value, n, a));
    }), (n || a) && vo(e, "change", () => {
      e.value = Hh(e.value, n, a);
    }), t || (vo(e, "compositionstart", D_), vo(e, "compositionend", jh), vo(e, "change", jh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[Oc] = zh(c), e.composing) return;
    const f = (a || e.type === "number") && !/^0\d/.test(e.value) ? Ku(e.value) : e.value, d = t ?? "";
    if (f === d)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, L_ = ["ctrl", "shift", "alt", "meta"], R_ = {
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
  exact: (e, t) => L_.some((n) => e[`${n}Key`] && !t.includes(n))
}, Tt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const f = R_[t[c]];
      if (f && f(o, t)) return;
    }
    return e(o, ...a);
  }));
}, $_ = /* @__PURE__ */ xn({ patchProp: E_ }, b_);
let Kh;
function V_() {
  return Kh || (Kh = Jv($_));
}
const af = ((...e) => {
  const t = V_().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = j_(r);
    if (!o) return;
    const a = t._component;
    !Qe(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, z_(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function z_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function j_(e) {
  return Bt(e) ? document.querySelector(e) : e;
}
function _o(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function H_() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Bh(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let c = r, f = o, d = -1, v = -1;
  for (let x = 0; x < o; x += 1)
    for (let w = 0; w < r; w += 1)
      a[(x * r + w) * 4 + 3] <= t || (w < c && (c = w), x < f && (f = x), w > d && (d = w), x > v && (v = x));
  return d < c || v < f ? null : {
    minX: c,
    minY: f,
    maxX: d,
    maxY: v,
    width: d - c + 1,
    height: v - f + 1,
    aspect: Number(((d - c + 1) / Math.max(1, v - f + 1)).toFixed(4))
  };
}
function sf(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Br(e, t, n) {
  if (!e) return _o(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Nt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Ec = null, Fc = null, Uh = null, Wh = null, $t = null, fa = null, Sn = null, hi = null;
function G_() {
  if (Fc) return Fc;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Fc = n, n;
}
function Tc(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Ec = Br(Ec, n, r);
  const o = Ec;
  Nt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", Wh !== o.ctx && (Uh = o.ctx.createPattern(G_(), "repeat"), Wh = o.ctx), o.ctx.fillStyle = Uh, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function K_(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function B_(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function U_(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function W_(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Pt = /* @__PURE__ */ new Map(), lf = 128;
function Y_(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), d = `${c}:${f.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Pt.has(d)) {
    const X = Pt.get(d);
    return Pt.delete(d), Pt.set(d, X), X;
  }
  Pt.size >= lf && Pt.delete(Pt.keys().next().value);
  const v = c * 2 + 2, y = c + 1, x = sf(v, v), w = x.getContext("2d"), M = f * c, k = c + 1, _ = `rgba(${n},${r},${o},${a})`, F = `rgba(${n},${r},${o},0)`, $ = w.createRadialGradient(y, y, M, y, y, k);
  return $.addColorStop(0, _), $.addColorStop(1, F), w.fillStyle = $, w.fillRect(0, 0, v, v), Pt.set(d, x), x;
}
function X_(e, t, n, r, o, a, c) {
  const { r: f, g: d, b: v, a: y } = r, x = Math.max(2, Math.ceil(e) * 2), w = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, o), k = Math.max(0, Math.min(0.99, a)), _ = Math.max(0, Math.min(1, c ?? 0)), F = `chisel:${x}:${w}:${n.toFixed(2)}:${f}:${d}:${v}:${y.toFixed(3)}:${M.toFixed(2)}:${k.toFixed(2)}:${_.toFixed(2)}`;
  if (Pt.has(F)) {
    const G = Pt.get(F);
    return Pt.delete(F), Pt.set(F, G), G;
  }
  Pt.size >= lf && Pt.delete(Pt.keys().next().value);
  const $ = sf(x, w), X = $.getContext("2d"), C = X.createImageData(x, w), V = C.data, E = Math.max(0, e - t), R = Math.max(0, Math.min(1, n)), Y = 1 + M;
  for (let G = 0; G < w; G++)
    for (let we = 0; we < x; we++) {
      const T = we + 0.5 - e, O = G + 0.5 - t, J = Math.max(Math.abs(T) - E, 0), B = Math.hypot(J, O) / t;
      if (B >= 1) continue;
      const q = B <= R ? 1 : Math.max(0, (1 - B) / Math.max(1e-4, 1 - R)), me = 1 - B, se = 1 + M * (1 - me) * (1 - me), I = 1 - k * me * me, Ve = se * I / Y;
      let K = 1;
      if (_ > 0) {
        const Ze = Math.floor((O + t) / 1.5), Ct = Math.floor((T + e) / 8), Ke = Ki(Co(Ze * 41 + 500, Ct * 19 + 300));
        K = 1 - _ * 0.42 * Ke;
      }
      const Ne = Math.round(255 * Math.min(1, y * q * Ve * K));
      if (Ne <= 0) continue;
      const $e = (G * x + we) * 4;
      V[$e] = f, V[$e + 1] = d, V[$e + 2] = v, V[$e + 3] = Ne;
    }
  return X.putImageData(C, 0, 0), Pt.set(F, $), $;
}
function Co(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function Ki(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function q_(e, t, n, r, o, a, c) {
  const f = e + 0.5 - n, d = t + 0.5 - r, v = Math.max(0, n - r), y = Math.max(Math.abs(f) - v, 0), x = Math.hypot(y, d) / r;
  if (x >= 1) return 0;
  const w = Ki(Co(e * 17 + 3, t * 13 + 7)), M = x + a * 0.22 * (w - 0.5);
  if (M >= 1) return 0;
  const k = M <= o ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - o)), _ = J_(e, t, f, d, n, r), F = a * 0.55;
  if (_ < F) return 0;
  const X = 0.45 + 0.55 * ((_ - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, c * k * X));
}
function J_(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), f = Math.floor((r + a) / 2), d = Ki(Co(c * 13 + 700, f * 17 + 400)), v = Math.floor((n + o) / 1.5), y = Math.floor((r + a) / 1.5), x = Ki(Co(v * 23 + 800, y * 29 + 500)), w = Ki(Co(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + x * 0.3 + w * 0.15;
}
function Z_(e, t, n, r, o) {
  const { r: a, g: c, b: f, a: d } = r, v = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, Math.min(1, o)), w = `crayon:${v}:${y}:${n.toFixed(2)}:${a}:${c}:${f}:${d.toFixed(3)}:${x.toFixed(2)}`;
  if (Pt.has(w)) {
    const X = Pt.get(w);
    return Pt.delete(w), Pt.set(w, X), X;
  }
  Pt.size >= lf && Pt.delete(Pt.keys().next().value);
  const M = sf(v, y), k = M.getContext("2d"), _ = k.createImageData(v, y), F = _.data, $ = Math.max(0, Math.min(1, n));
  for (let X = 0; X < y; X++)
    for (let C = 0; C < v; C++) {
      const V = q_(C, X, e, t, $, x, d);
      if (V <= 0) continue;
      const E = (X * v + C) * 4;
      F[E] = a, F[E + 1] = c, F[E + 2] = f, F[E + 3] = V;
    }
  return k.putImageData(_, 0, 0), Pt.set(w, M), M;
}
function ng(e, t, n) {
  var _, F;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = U_(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = Q_(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((_ = t == null ? void 0 : t.angle) == null ? void 0 : _.value) ?? 0), v = W_(t, o), y = String(((F = t == null ? void 0 : t.targetSpace) == null ? void 0 : F.viewMode) || ""), x = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", w = t == null ? void 0 : t.scatter, M = w ? { radius: Number(w.radius ?? 1.5), count: Math.max(1, Math.round(w.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const $ = o * f, X = o, C = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), V = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = X_($, X, a, c, C, V, E);
  } else if (r === "crayon") {
    const $ = o * f, X = o, C = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = Z_($, X, a, c, C);
  } else
    k = Y_(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: v, desc: n, aspect: f, angle: d, stampKind: r, scatter: M, latitudeCorrection: x };
}
function Q_(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), a = Math.max(0, Math.min(1, Number(r.a ?? 1))) * o;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(r.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(r.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(r.b || 0))) * 255),
    a
  };
}
function ex(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Yh(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function f(v, y) {
    a === 0 ? e.ctx.drawImage(e.stampTex, v - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(v, y), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && f(t + c, n), t + d > c && f(t - c, n);
}
function cf(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: v, count: y } = e.scatter, x = v * e.radiusPx * o, w = Co(t, n);
    for (let M = 0; M < y; M++) {
      const k = Ki(w + M * 2) * Math.PI * 2, _ = Math.sqrt(Ki(w + M * 2 + 1)) * x, F = t + Math.cos(k) * _, $ = n + Math.sin(k) * _, X = Math.max(0.5, e.radiusPx * o * 0.48), C = (0.5 - $ / Math.max(1, e.desc.height)) * Math.PI, V = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(C)) : 1, E = X * e.aspect * V;
      Yh(e, F, $, X, E);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * f;
  Yh(e, t, n, a, d);
}
function Xh(e, t, n) {
  const r = B_(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = ng(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let w = 0; w < r.length; w++) {
    let M = Number(r[w].u || 0) * o;
    const k = Number(r[w].v || 0) * a;
    w > 0 && Math.abs(M - f[w - 1].x) > o * 0.5 && (M += M < f[w - 1].x ? o : -o), f.push({ x: M, y: k });
  }
  if (cf(c, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let d = f[0], v = f[0], y = f[0], x = 0;
  for (let w = 1; w < f.length; w++) {
    const M = f[w], k = { x: (v.x + M.x) * 0.5, y: (v.y + M.y) * 0.5 };
    w === 1 ? x = Ta(c, y.x, y.y, k.x, k.y, x) : x = rl(c, d, y, k, M, x), d = v, v = M, y = k;
  }
  f.length === 2 ? Ta(c, y.x, y.y, v.x, v.y, x) : rl(c, d, y, v, v, x), e.restore();
}
function Ls(e, t, n) {
  var x;
  const r = Array.isArray((x = t == null ? void 0 : t.geometry) == null ? void 0 : x.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = ex(t), f = [];
  let d = 1 / 0, v = -1 / 0;
  for (let w = 0; w < r.length; w++) {
    const M = K_(r[w]);
    let k = Number(M.x || 0) * o;
    w > 0 && Math.abs(k - f[w - 1].x) > o * 0.5 && (k += k < f[w - 1].x ? o : -o), f.push({ x: k, y: Number(M.y || 0) * a }), k < d && (d = k), k > v && (v = k);
  }
  function y(w) {
    e.beginPath(), e.moveTo(f[0].x + w, f[0].y);
    for (let M = 1; M < f.length; M++) e.lineTo(f[M].x + w, f[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, y(0), d < 0 && y(o), v > o && y(-o), e.restore();
}
function gs(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Ls(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? Xh(e, t, n) : (fa = Br(fa, n.width, n.height), Nt(fa), Xh(fa.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(fa.canvas, 0, 0), e.restore());
}
function Ii(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ta(e, t, n, r, o, a) {
  const c = r - t, f = o - n, d = Math.hypot(c, f);
  if (d < 1e-9) return a;
  let v = e.spacingPx - a;
  for (; v <= d; ) {
    const y = v / d;
    cf(e, t + c * y, n + f * y, 1), v += e.spacingPx;
  }
  return d - v + e.spacingPx;
}
function rl(e, t, n, r, o, a) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, v = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, x = f, w = x + d, M = w + v, k = w - x, _ = 16;
  let F = a, $ = n.x, X = n.y;
  for (let C = 1; C <= _; C++) {
    const V = x + k * C / _, E = ((x - V) * t.x + (V - y) * n.x) / (x - y), R = ((x - V) * t.y + (V - y) * n.y) / (x - y), Y = ((w - V) * n.x + (V - x) * r.x) / (w - x), G = ((w - V) * n.y + (V - x) * r.y) / (w - x), we = ((M - V) * r.x + (V - w) * o.x) / (M - w), T = ((M - V) * r.y + (V - w) * o.y) / (M - w), O = ((w - V) * E + (V - y) * Y) / (w - y), J = ((w - V) * R + (V - y) * G) / (w - y), z = ((M - V) * Y + (V - x) * we) / (M - x), B = ((M - V) * G + (V - x) * T) / (M - x), q = ((w - V) * O + (V - x) * z) / (w - x), me = ((w - V) * J + (V - x) * B) / (w - x);
    F = Ta(e, $, X, q, me, F), $ = q, X = me;
  }
  return F;
}
function tx(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, f = n * a.height, d = e.activeStroke;
  let v = t * c;
  if (d && Math.abs(v - d.prev.x) > c * 0.5 && (v += v < d.prev.x ? c : -c), !d) {
    const M = ng(o, r, a), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), _ = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", $ = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", cf(M, v, f, 1), e.activeStroke = {
      pprev: { x: v, y: f },
      prev: { x: v, y: f },
      lastMidX: v,
      lastMidY: f,
      stampTex: M.stampTex,
      radiusPx: M.radiusPx,
      spacingPx: M.spacingPx,
      aspect: M.aspect,
      angle: M.angle,
      stampKind: M.stampKind,
      scatter: M.scatter,
      latitudeCorrection: M.latitudeCorrection,
      strokeOpacity: k,
      velocityWidthFactor: _,
      distSinceStamp: 0,
      isEraser: F,
      layerKind: $,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (d.prev.x + v) * 0.5, x = (d.prev.y + f) * 0.5;
  o.globalCompositeOperation = "source-over";
  const w = {
    ctx: o,
    stampTex: d.stampTex,
    radiusPx: d.radiusPx,
    spacingPx: d.spacingPx,
    desc: a,
    aspect: d.aspect,
    angle: d.angle,
    stampKind: d.stampKind,
    scatter: d.scatter,
    latitudeCorrection: d.latitudeCorrection
  };
  d.pointCount === 1 ? d.distSinceStamp = Ta(w, d.lastMidX, d.lastMidY, y, x, d.distSinceStamp) : d.distSinceStamp = rl(
    w,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: x },
    { x: v, y: f },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: v, y: f }, d.lastMidX = y, d.lastMidY = x, d.pointCount++, e.displayDirty = !0;
}
function mu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = _o(t, n), c = {
    descriptor: r,
    committedMask: _o(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: _o(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = _o(t, n);
  let v = null, y = "", x = null;
  function w(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: _o(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function M(T) {
    let O = o.get(T);
    return O || (O = w(T), o.set(T, O)), O;
  }
  function k(T) {
    return y === "mask" ? c : v ? M(v) : f;
  }
  function _(T) {
    var me;
    const O = !x || x.length !== T.length || T.some((se, I) => se !== x[I]), J = y === "paint" && ((me = v ? o.get(v) : f) == null ? void 0 : me.activeStroke) || null;
    let z = c.displayDirty || f.displayDirty || O;
    for (const se of T) {
      const I = o.get(se);
      if (I != null && I.displayDirty) {
        z = !0;
        break;
      }
    }
    if (J && (z = !0), !z) return;
    c.displayDirty = !1, f.displayDirty = !1;
    for (const se of T) {
      const I = o.get(se);
      I && (I.displayDirty = !1);
    }
    x = [...T];
    const B = d.ctx;
    Nt(d);
    const q = !!(J != null && J.isEraser);
    for (const se of T) {
      const I = o.get(se);
      if (!I) continue;
      const K = v === I.actionGroupId && y === "paint" ? I.activeStroke : null;
      if (q)
        $t = Br($t, t, n), Nt($t), $t.ctx.drawImage(I.committedPaint.canvas, 0, 0), Ii($t.ctx, a.canvas), B.drawImage($t.canvas, 0, 0);
      else if (B.drawImage(I.committedPaint.canvas, 0, 0), K) {
        const Ne = I.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, K.strokeOpacity ?? 1));
        B.save(), B.globalAlpha = Ne, B.drawImage(a.canvas, 0, 0), B.restore();
      }
    }
  }
  function F(T) {
    var J, z, B, q, me;
    for (const se of o.values())
      Nt(se.committedPaint), Nt(se.currentStroke), se.activeStroke = null, se.displayDirty = !0;
    Nt(c.committedMask), Nt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, f.displayDirty = !0, x = null;
    const O = [
      ...Array.isArray((z = (J = T == null ? void 0 : T.painting) == null ? void 0 : J.paint) == null ? void 0 : z.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((q = (B = T == null ? void 0 : T.painting) == null ? void 0 : B.mask) == null ? void 0 : q.strokes) ? T.painting.mask.strokes : []
    ];
    for (const se of O) {
      if (((me = se == null ? void 0 : se.targetSpace) == null ? void 0 : me.kind) !== "ERP_GLOBAL") continue;
      const I = String((se == null ? void 0 : se.layerKind) || "paint"), K = String((se == null ? void 0 : se.toolKind) || "pen") === "eraser";
      if (I === "mask") {
        const Ne = c.descriptor;
        K ? ($t = Br($t, Ne.width, Ne.height), Nt($t), gs($t.ctx, se, Ne), Ii(c.committedMask.ctx, $t.canvas)) : gs(c.committedMask.ctx, se, Ne);
        continue;
      }
      if (K) {
        $t = Br($t, r.width, r.height), Nt($t), gs($t.ctx, se, r);
        for (const Ne of o.values())
          Ii(Ne.committedPaint.ctx, $t.canvas), Ne.displayDirty = !0;
      } else {
        const Ne = String((se == null ? void 0 : se.actionGroupId) || "__default__"), $e = M(Ne), Ze = $e.descriptor;
        gs($e.committedPaint.ctx, se, Ze), $e.displayDirty = !0;
      }
    }
    _([...o.keys()]);
  }
  function $(T, O) {
    y = String((T == null ? void 0 : T.layerKind) || "");
    const J = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (y === "mask")
      v = null, Nt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const z = J ? f : M(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      v = J ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), Nt(z.currentStroke), z.activeStroke = null, z.displayDirty = !0;
    }
  }
  function X(T, O) {
    var I;
    const J = String((T == null ? void 0 : T.layerKind) || "paint"), z = String((T == null ? void 0 : T.toolKind) || "") === "eraser", B = J === "mask" ? c : z ? f : M(String((T == null ? void 0 : T.actionGroupId) || v || "__default__")), q = B.activeStroke, me = B.descriptor;
    if (q && q.pointCount > 1) {
      const Ve = B.currentStroke.ctx;
      Ve.globalCompositeOperation = "source-over";
      const K = {
        ctx: Ve,
        stampTex: q.stampTex,
        radiusPx: q.radiusPx,
        spacingPx: q.spacingPx,
        desc: me,
        aspect: q.aspect,
        angle: q.angle,
        stampKind: q.stampKind,
        scatter: q.scatter,
        latitudeCorrection: q.latitudeCorrection
      };
      q.pointCount === 2 ? Ta(K, q.lastMidX, q.lastMidY, q.prev.x, q.prev.y, q.distSinceStamp) : rl(K, q.pprev, { x: q.lastMidX, y: q.lastMidY }, q.prev, q.prev, q.distSinceStamp);
    }
    B.lassoPreviewActive && (Nt(B.currentStroke), Ls(B.currentStroke.ctx, T, me), B.lassoPreviewActive = !1);
    const se = J === "mask" ? c.committedMask : B.committedPaint;
    if (z && J === "paint")
      for (const Ve of o.values())
        Ii(Ve.committedPaint.ctx, B.currentStroke.canvas), Ve.displayDirty = !0;
    else if (z)
      Ii(se.ctx, B.currentStroke.canvas);
    else {
      const Ve = Math.max(0, Math.min(1, (q == null ? void 0 : q.strokeOpacity) ?? 1));
      se.ctx.save(), se.ctx.globalAlpha = Ve, se.ctx.drawImage(B.currentStroke.canvas, 0, 0), se.ctx.restore();
    }
    H_() && (String((T == null ? void 0 : T.toolKind) || ""), String((me == null ? void 0 : me.kind) || ""), Number((me == null ? void 0 : me.width) || 0), Number((me == null ? void 0 : me.height) || 0), String(((I = T == null ? void 0 : T.targetSpace) == null ? void 0 : I.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), Bh(B.currentStroke.canvas), Bh(se.canvas), void 0), Nt(B.currentStroke), B.activeStroke = null, B.displayDirty = !0, v = null, y = "", _([...o.keys()]);
  }
  function C(T) {
    if (y === "mask")
      Nt(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (y === "paint" && !v)
      Nt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (v) {
      const O = o.get(v);
      O && (Nt(O.currentStroke), O.activeStroke = null, O.lassoPreviewActive = !1, O.displayDirty = !0);
    }
    v = null, y = "", _([...o.keys()]);
  }
  function V(T, O) {
    var z;
    if (y = String((T == null ? void 0 : T.layerKind) || ""), String(((z = T == null ? void 0 : T.geometry) == null ? void 0 : z.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        Nt(c.currentStroke), Ls(c.currentStroke.ctx, T, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const B = String((T == null ? void 0 : T.toolKind) || "") === "eraser", q = B ? f : M(String((T == null ? void 0 : T.actionGroupId) || v || "__default__"));
        v = B ? "" : String((T == null ? void 0 : T.actionGroupId) || v || "__default__"), Nt(q.currentStroke), Ls(q.currentStroke.ctx, T, q.descriptor), q.lassoPreviewActive = !0, q.displayDirty = !0;
      }
      _([...o.keys()]);
    }
  }
  function E(T) {
    return _(T ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function R(T) {
    return o.get(String(T)) ?? null;
  }
  function Y() {
    return [...o.keys()];
  }
  function G(T) {
    var me;
    const O = o.get(String(T));
    if (!O) return null;
    const J = y === "paint" && v === O.actionGroupId, z = y === "paint" && ((me = v ? o.get(v) : f) == null ? void 0 : me.activeStroke) || null;
    if (z != null && z.isEraser)
      return Sn = Br(Sn, t, n), Nt(Sn), Sn.ctx.drawImage(O.committedPaint.canvas, 0, 0), Ii(Sn.ctx, a.canvas), Sn.canvas;
    const B = J ? O.activeStroke : null;
    if (!B) return O.committedPaint.canvas;
    Sn = Br(Sn, t, n), Nt(Sn), Sn.ctx.drawImage(O.committedPaint.canvas, 0, 0);
    const q = O.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, B.strokeOpacity ?? 1));
    return Sn.ctx.save(), Sn.ctx.globalAlpha = q, Sn.ctx.drawImage(a.canvas, 0, 0), Sn.ctx.restore(), Sn.canvas;
  }
  function we() {
    return hi = Br(hi, t, n), Nt(hi), Tc(hi.ctx, c.committedMask.canvas), y === "mask" && c.activeStroke && (c.activeStroke.isEraser ? ($t = Br($t, t, n), Nt($t), $t.ctx.drawImage(c.committedMask.canvas, 0, 0), Ii($t.ctx, a.canvas), Nt(hi), Tc(hi.ctx, $t.canvas)) : Tc(hi.ctx, a.canvas)), hi.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: $,
    appendStrokePoint: tx,
    updateActiveStroke: V,
    commitActiveStroke: X,
    cancelActiveStroke: C,
    getErpTarget: E,
    ensureTarget: k,
    getGroupTarget: R,
    getGroupDisplayCanvas: G,
    getMaskDisplayCanvas: we,
    getAllGroupIds: Y
  };
}
function Z(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Gt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function nx(e, t) {
  let n = Gt(t) - Gt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const gu = 3;
function da(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function uf(e, t = 0) {
  const n = da(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = da(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = da(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = da(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(da(t) || 0);
}
function rg(e) {
  if (!(e != null && e.addEventListener)) return () => {
  };
  const t = () => {
    var n;
    return (n = e.focus) == null ? void 0 : n.call(e, { preventScroll: !0 });
  };
  return e.addEventListener("pointerenter", t), () => {
    var n;
    return (n = e.removeEventListener) == null ? void 0 : n.call(e, "pointerenter", t);
  };
}
const qh = Math.PI / 180, Jh = 0.12, rx = gu, ix = 35, ox = 140, ya = 100, ax = 20, Zh = 0.8;
function sx(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = Z(Number(e || ya), 1, 179) * qh;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / qh;
}
function ff(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ya })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function v(X, C = null) {
    f && f(X, C);
  }
  function y(X, C, V = null, E = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(X || 0), d.drag.lastY = Number(C || 0), d.drag.lastTs = Number(E || performance.now()), d.drag.pointerId = V, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], v("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: V }), !0;
  }
  function x(X, C, V = "pano", E = performance.now()) {
    if (!d.drag.active) return !1;
    const R = Number(E || performance.now()), Y = Number(X), G = Number(C), we = Y - d.drag.lastX, T = G - d.drag.lastY;
    d.drag.lastX = Y, d.drag.lastY = G, d.drag.lastTs = R;
    const O = r() || { x: 1, y: 1 }, J = Number(O.x || 1), z = Number(O.y || 1), B = { ...t() };
    let q = 0, me = 0;
    if (V === "unwrap") {
      const I = o() || { w: 1, h: 1 }, Ve = Math.max(1, Number(I.w || 1)), K = Math.max(1, Number(I.h || 1)), Ne = we / Ve, $e = T / K;
      q = -Ne * 360 * J, me = $e * 180 * z;
    } else {
      const I = a() || { w: 0, h: 0 }, Ve = Math.max(1, Number(I.w || 0)), K = Math.max(1, Number(I.h || 0));
      if (Ve > 1 && K > 1) {
        const Ne = Z(Number(B.fov || ya), 1, 179), $e = Z(sx(Ne, Ve, K), 0.1, 179);
        q = -(we / Ve) * Ne * J, me = T / K * $e * z;
      } else
        q = -we * Jh * J, me = T * Jh * z;
    }
    B.yaw = Gt(Number(B.yaw || 0) + q), B.pitch = Z(Number(B.pitch || 0) + me, -89.9, 89.9), n(B), d.velHistory.push({ ts: R, yaw: B.yaw, pitch: B.pitch });
    let se = 0;
    for (; se < d.velHistory.length - 1 && d.velHistory[se].ts < R - 100; ) se++;
    return se > 0 && d.velHistory.splice(0, se), d.inertia.active = !1, d.inertia.lastTs = R, c(), v("drag", { phase: "move", dx: we, dy: T, dYaw: q, dPitch: me }), !0;
  }
  function w(X = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const C = Number(X || performance.now());
    d.drag.lastTs = C;
    const V = d.velHistory.filter((R) => C - R.ts <= 80);
    if (V.length >= 2) {
      const R = V[0], Y = V.at(-1), G = Math.max(1e-3, (Y.ts - R.ts) / 1e3);
      let we = Y.yaw - R.yaw;
      we > 180 && (we -= 360), we < -180 && (we += 360), d.inertia.vx = we / G, d.inertia.vy = (Y.pitch - R.pitch) / G;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const E = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = E > ax, d.inertia.lastTs = C, v("drag", { phase: "end", speed: E, inertiaActive: d.inertia.active }), !0;
  }
  function M(X = performance.now()) {
    if (!d.inertia.active) return !1;
    const C = Number(X || performance.now()), V = Math.max(1e-3, (C - (d.inertia.lastTs || C)) / 1e3);
    d.inertia.lastTs = C;
    const E = { ...t() };
    E.yaw = Gt(Number(E.yaw || 0) + d.inertia.vx * V), E.pitch = Z(Number(E.pitch || 0) + d.inertia.vy * V, -89.9, 89.9);
    const R = Math.exp(-5.5 * V);
    return d.inertia.vx *= R, d.inertia.vy *= R, Math.abs(d.inertia.vx) < Zh && Math.abs(d.inertia.vy) < Zh && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(E), c(), d.inertia.active;
  }
  function k() {
    const X = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], X;
  }
  function _(X) {
    const C = Math.sign(Number(X || 0));
    if (!C) return !1;
    const V = { ...t() }, E = Number(V.fov || ya);
    return V.fov = Z(E + C * rx, ix, ox), n(V), c(), v("wheel", { deltaSign: C, fovBefore: E, fovAfter: V.fov }), !0;
  }
  function F(X, C = 0) {
    return _(uf(X, C));
  }
  function $() {
    n({ yaw: 0, pitch: 0, fov: ya }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: x,
    endDrag: w,
    stepInertia: M,
    stopMotion: k,
    applyWheel: _,
    applyWheelEvent: F,
    resetView: $
  };
}
const on = Math.PI / 180, Pn = 180 / Math.PI;
function tr(e, t, n) {
  return { x: e, y: t, z: n };
}
function il(e, t) {
  return tr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ol(e, t) {
  return tr(e.x * t, e.y * t, e.z * t);
}
function Dc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function df(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return tr(e.x / t, e.y / t, e.z / t);
}
function Ln(e, t) {
  const n = e * on, r = t * on, o = Math.cos(r);
  return tr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Bo(e, t, n = 0) {
  const r = Number(e || 0) * on, o = Number(t || 0) * on, a = n * on, c = Math.cos(r), f = Math.sin(r), d = Math.cos(o), v = Math.sin(o), y = Math.cos(a), x = Math.sin(a);
  return {
    right: tr(
      c * y - f * v * x,
      d * x,
      -f * y - c * v * x
    ),
    up: tr(
      -c * x - f * v * y,
      d * y,
      f * x - c * v * y
    ),
    fwd: tr(f * d, v, c * d)
  };
}
function al(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function gt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function lx() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function cx(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = gt(r.z_index ?? r.zIndex, t.length);
    t.push({
      id: String(r.id || o),
      type: "strokeGroup",
      actionGroupId: o,
      z_index: Math.max(0, Math.round(a ?? t.length)),
      locked: r.locked === !0
    });
  }
  return t;
}
function ux(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function fx(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = gt(e.t, 0), r = gt(e.widthScale, null), o = gt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = gt(e.u, null), c = gt(e.v, null);
    if (a == null || c == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (a % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, c)),
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), o != null && (f.pressureLike = Math.max(0, o)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const a = gt(e.u, null), c = gt(e.v, null);
    if (a == null || c == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: a,
      v: c,
      t: n
    };
    return r != null && (f.widthScale = Math.max(0, r)), o != null && (f.pressureLike = Math.max(0, o)), f;
  }
  return null;
}
function ys(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = fx(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function dx(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = ys(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = ys(e.points, t, 1);
  if (!a) return null;
  const c = ys(e.rawPoints, t, 1), f = ys(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: f || a.map((d) => ({ ...d }))
  };
}
function hx(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = ux(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = dx(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = gt(e.size, null), c = gt(e.opacity, null);
  if (a == null || c == null) return null;
  const f = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!f || !d) return null;
  const v = gt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let x = null;
  if (t === "paint") {
    const w = e.color;
    if (!w || typeof w != "object") return null;
    x = {
      r: Math.max(0, Math.min(1, gt(w.r, 0))),
      g: Math.max(0, Math.min(1, gt(w.g, 0))),
      b: Math.max(0, Math.min(1, gt(w.b, 0))),
      a: Math.max(0, Math.min(1, gt(w.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: d,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, a),
    opacity: Math.max(0, Math.min(1, c)),
    hardness: gt(e.hardness, null),
    flow: gt(e.flow, null),
    spacing: gt(e.spacing, null),
    createdAt: Math.trunc(gt(e.createdAt, 0)),
    color: x,
    radiusModel: y,
    radiusValue: v == null ? null : Math.max(0, v),
    geometry: o
  };
}
function Qh(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = hx(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function px(e) {
  if (!e || typeof e != "object") return null;
  const t = gt(e.u0, null), n = gt(e.v0, null), r = gt(e.u1, null), o = gt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (f) => Math.max(0, Math.min(1, f)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function mx(e) {
  const t = e || {};
  return {
    du: gt(t.du, 0) ?? 0,
    dv: gt(t.dv, 0) ?? 0,
    rot_deg: gt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, gt(t.scale, 1) ?? 1)
  };
}
function gx(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = px(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, gt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: mx(e.transform)
  } : null;
}
function yx(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = gx(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function Io(e) {
  const t = lx();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: cx(e.groups),
    paint: Qh(e.paint, "paint"),
    mask: Qh(e.mask, "mask"),
    raster_objects: yx(e.raster_objects)
  };
}
const Fr = 1, Tr = 179, yu = 85;
function El(e) {
  const t = ((et(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function ig(e, t) {
  let n = et(e, 0) - et(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function og(e, t, { shiftKey: n = !1 } = {}) {
  let r = et(e, 0) + et(t, 0) * Pn;
  return n && (r = Math.round(r / 15) * 15), El(r);
}
function et(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function ni(e = {}) {
  const t = Z(et(e.hFOV_deg || 90, 90), Fr, Tr), n = Z(et(e.vFOV_deg || 60, 60), Fr, Tr), r = Math.tan(t * on * 0.5), o = Math.tan(n * on * 0.5);
  return {
    yawDeg: et(e.yaw_deg, 0),
    pitchDeg: et(e.pitch_deg, 0),
    rollDeg: et(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function Bi(e, t) {
  const n = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = ni(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function hf(e, t) {
  const n = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, et(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function pf(e, t) {
  const n = Math.max(1e-12, et(t, 1)), r = Math.max(1e-6, et((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, et((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = Z(2 * Math.atan(r / (2 * n)) * Pn, Fr, Tr), c = Z(2 * Math.atan(o / (2 * n)) * Pn, Fr, Tr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function bx(e, t, n) {
  const r = et(e == null ? void 0 : e.x, 0), o = et(e == null ? void 0 : e.y, 0), a = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = ni(t), d = Math.max(1e-12, et(n, 1)), v = 2 * d * f.tanHalfX, y = 2 * d * f.tanHalfY;
  return {
    x: r + (a - v) * 0.5,
    y: o + (c - y) * 0.5,
    w: v,
    h: y,
    focalPx: d
  };
}
function mf(e, t, n = yu) {
  const r = Math.max(1e-12, et(t, 1)), o = Z(et(n, yu), 1, 89.999), a = r * Math.tan(o * on), c = Math.max(1, et((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, et((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(f * 0.5, a)
  };
}
function ag(e, t, n) {
  const r = Math.max(1e-12, et(t, 1));
  return {
    x: (et(n == null ? void 0 : n.x, 0) - et(e == null ? void 0 : e.x, 0)) / r,
    y: -(et(n == null ? void 0 : n.y, 0) - et(e == null ? void 0 : e.y, 0)) / r
  };
}
function Rs(e, t) {
  const n = Z(et(e, 60), Fr, Tr), r = Math.max(1e-6, et(t, 1));
  return Z(
    2 * Math.atan(Math.tan(n * on * 0.5) * r) * Pn,
    Fr,
    Tr
  );
}
function ep(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function vx(e, t) {
  const n = ep(e, 1), r = ep(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), f = (v, y) => y ? f(y, v % y) : v, d = f(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function Ui(e) {
  const t = Z(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * on, n = Z(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * on;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Ri(e) {
  const t = Ui(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || vx(t, 1);
}
function sg(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Ri(t), t;
}
function lg({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), f = Number.isFinite(c) ? Z(c, Fr, Tr) : Z(Math.min(42, et(o, 100) * 0.42), 8, 96);
  return sg({
    id: String(e),
    label: "Frame 1",
    yaw_deg: et(t, 0),
    pitch_deg: Z(et(n, 0), -89.9, 89.9),
    roll_deg: El(r),
    hFOV_deg: f,
    vFOV_deg: f,
    locked: !1
  });
}
function Ur(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Ri(e);
}
function cg(e, t) {
  const n = ni(e), r = et(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * Pn, a = 2 * Math.atan(n.tanHalfY * r) * Pn;
  return o < Fr || o > Tr || a < Fr || a > Tr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function ug(e, t, n = gu) {
  const r = Math.sign(et(t, 0)), o = Math.abs(et(n, gu));
  if (!r || !(o > 0)) return null;
  const a = ni(e), c = a.hFovDeg + r * o;
  if (c < Fr || c > Tr) return null;
  const f = Math.tan(c * on * 0.5);
  return cg(e, f / a.tanHalfX);
}
function fg(e, t) {
  const n = ni(e), r = Bo(n.yawDeg, n.pitchDeg, n.rollDeg), o = et(t == null ? void 0 : t.x, 0), a = et(t == null ? void 0 : t.y, 0);
  return df(il(il(r.fwd, ol(r.right, o)), ol(r.up, a)));
}
function _x(e) {
  return tr(e.x, e.y, -e.z);
}
function $s(e) {
  return tr(e.x, e.y, -e.z);
}
function Fl(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = Bo(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function xx(e) {
  const t = $s(tr(e[0][0], e[1][0], e[2][0])), n = $s(tr(e[0][1], e[1][1], e[2][1])), r = $s(tr(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), f = Math.sin(o), d = Math.atan2(f * n.z - c * n.x, c * t.x - f * t.z);
  return { yawDeg: o * Pn, pitchDeg: a * Pn, rollDeg: d * Pn };
}
function dg(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Tl(e) {
  const [[t, n, r], [o, a, c], [f, d, v]] = e, y = t + a + v;
  if (y > 0) {
    const w = 0.5 / Math.sqrt(y + 1);
    return { x: (d - c) * w, y: (r - f) * w, z: (o - n) * w, w: 0.25 / w };
  }
  if (t > a && t > v) {
    const w = 2 * Math.sqrt(1 + t - a - v);
    return { x: 0.25 * w, y: (n + o) / w, z: (r + f) / w, w: (d - c) / w };
  }
  if (a > v) {
    const w = 2 * Math.sqrt(1 + a - t - v);
    return { x: (n + o) / w, y: 0.25 * w, z: (c + d) / w, w: (r - f) / w };
  }
  const x = 2 * Math.sqrt(1 + v - t - a);
  return { x: (r + f) / x, y: (c + d) / x, z: 0.25 * x, w: (o - n) / x };
}
function bs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const zi = 1e-6, bu = 1e-6, wx = 1e-9;
function Da(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function Sx(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, f = 1;
  for (let d = 0; d < 50; d += 1) {
    const v = 0.5 * (c + f);
    Da(0, n, o, 1, v) < t ? c = v : f = v;
  }
  return Da(0, r, a, 1, 0.5 * (c + f));
}
function $o(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Vo(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((w) => -w / o), f = r.map((w) => w / a);
  if (c.reduce((w, M, k) => w + M * f[k], 0) < 0) return n.map(() => 0);
  const d = c.map((w, M) => (w * a + f[M] * o) / (o + a)), v = (w) => Math.sqrt(w.reduce((M, k) => M + k * k, 0)), y = 3 * Math.min(v(c), v(f)), x = v(d);
  return x <= y ? d : d.map((w) => w * y / x);
}
function hg(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], f = o.map((y, x) => a[x] - y);
  let d = f;
  $o(e, r) && (d = Vo(t, r, n[r - 1].map((y, x) => y - o[x]), f).map((y) => y * c));
  let v = f;
  return $o(e, r + 1) && (v = Vo(t, r + 1, f.map((y) => -y), n[r + 2].map((y, x) => y - a[x])).map((y) => y * c)), [d.map((y) => y / 3), v.map((y) => -y / 3)];
}
function pg(e, t, n, r, o) {
  const [[a], [c]] = hg(e, t, n.map((f) => [f]), r);
  return Da(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function kx(e, t, n, r) {
  var v, y;
  const o = e.map((x) => x.value);
  let [a, c] = hg(e, t, o, n);
  a = ((v = e[n].handles) == null ? void 0 : v.out) ?? a, c = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? c;
  const f = o[n], d = o[n + 1];
  return [0, 1, 2].map((x) => Da(f[x], f[x] + a[x], d[x] + c[x], d[x], r));
}
function sl([e, t, n, r], [o, a, c, f]) {
  return [
    r * o + e * f + t * c - n * a,
    r * a - e * c + t * f + n * o,
    r * c + e * a - t * o + n * f,
    r * f - e * o - t * a - n * c
  ];
}
function Mx(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Lc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Nx([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function vu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ko(e, t) {
  return Nx(sl([-e[0], -e[1], -e[2], e[3]], t));
}
function Rc(e, t, n) {
  return sl(e, vu(ko(e, t).map((r) => n * r)));
}
function $c(e, t) {
  const n = Mx(e, t);
  if (Math.abs(n) > bu) return n < 0;
  const [r, o, a] = ko(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > bu) return c < 0;
  return !1;
}
function vs(e) {
  const { x: t, y: n, z: r, w: o } = Tl(Fl(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function _u(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function Px(e, t, n, r) {
  const o = vs(e[n].value);
  let a = vs(e[n + 1].value);
  $c(o, a) && (a = Lc(a));
  const c = t[n + 1] - t[n], f = ko(o, a);
  let d = f;
  if ($o(e, n)) {
    let E = vs(e[n - 1].value);
    $c(E, o) && (E = Lc(E)), d = Vo(t, n, ko(o, E), f).map((R) => R * c);
  }
  let v = f;
  if ($o(e, n + 1)) {
    let E = vs(e[n + 2].value);
    $c(a, E) && (E = Lc(E)), v = Vo(t, n + 1, ko(a, o), ko(a, E)).map((R) => R * c);
  }
  const y = sl(o, vu(d.map((E, R) => 0.5 * (E - f[R])))), x = sl(a, vu(f.map((E, R) => 0.5 * (E - v[R])))), [w, M, k, _] = Rc(Rc(o, a, r), Rc(y, x, r), 2 * r * (1 - r)), { yawDeg: F, pitchDeg: $, rollDeg: X } = xx(dg({ x: w, y: M, z: k, w: _ })), C = e[n].value, V = e[n + 1].value;
  return {
    yaw_deg: _u(F, C.yaw_deg, V.yaw_deg, r),
    pitch_deg: $,
    roll_deg: _u(X, C.roll_deg, V.roll_deg, r)
  };
}
function La(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function ll(e) {
  return Math.sqrt(La(e, e));
}
function cl(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function mg(e, t) {
  const n = La(e, t), r = t.map((c, f) => c - n * e[f]), o = ll(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function xo(e, t) {
  const n = ll(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function _s(e, t, n) {
  return xo(e, mg(e, t).map((r) => n * r));
}
function Vc(e, t) {
  const n = cl(e[t].value), r = cl(e[t + 1].value), o = La(n, r), a = o < 0 && ll(r.map((d, v) => d - o * n[v])) <= bu;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = mg(n, r);
  const f = ll(c);
  return [c, c.map((d, v) => Math.cos(f) * d - f * Math.sin(f) * n[v]), a];
}
function Ax(e, t, n, r) {
  const o = cl(e[n].value), a = cl(e[n + 1].value), [c, f, d] = Vc(e, n);
  let v = c, y = f;
  const x = t[n + 1] - t[n];
  $o(e, n) && (v = Vo(t, n, Vc(e, n - 1)[1].map((C) => -C), v).map((C) => C * x)), $o(e, n + 1) && (y = Vo(t, n + 1, y.map((C) => -C), Vc(e, n + 1)[0]).map((C) => C * x));
  let w, M, k;
  if (d) {
    const C = Math.PI, V = Da(0, La(v, c) / C / 3, C - La(y, f) / C / 3, C, r);
    [w, M, k] = xo(o, c.map((E) => V * E / C));
  } else {
    const C = _s(xo(o, v.map((R) => R / 3)), xo(a, y.map((R) => -R / 3)), r), V = _s(xo(o, v.map((R) => r * R / 3)), C, r), E = _s(C, xo(a, y.map((R) => -(1 - r) * R / 3)), r);
    [w, M, k] = _s(V, E, r);
  }
  const _ = Math.hypot(w, k), F = e[n].value.yaw_deg, $ = e[n + 1].value.yaw_deg;
  return { yaw_deg: _ <= wx ? F + ($ - F) * r : _u(Math.atan2(w, k) * 180 / Math.PI, F, $, r), pitch_deg: Math.atan2(M, _) * 180 / Math.PI };
}
function Cx(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = pg(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function Ix(e, t, n, r) {
  return pg(e, t, e.map((o) => o.value), n, r);
}
const Ox = { position: kx, rotation: Px, direction: Ax, size: Cx };
function Xt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return bs(e[t].value);
  if (n <= r[0].frame + zi) return bs(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - zi) return bs(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + zi; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= zi || c.easing === "hold") return bs(c.value);
  const f = r.map((v) => v.frame), d = Sx(c.easing, (n - f[a]) / (f[a + 1] - f[a]));
  return (Ox[t] ?? Ix)(r, f, a, d);
}
function xu(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Ex(e) {
  return Math.min(1, Math.max(0, e));
}
function gg(e) {
  return Math.max(1e-6, e);
}
function yg(e, t) {
  return t - (e.start - e.in);
}
function $i(e, t) {
  return t >= e.start - zi && (e.duration === null || t < e.start + e.duration - zi);
}
function Fx(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = yg(o.clip, n);
  return {
    frame: n,
    camera: {
      position: Xt(r, "position", n),
      ...Xt(r, "rotation", n),
      hFOV_deg: xu(Xt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: $i(o.clip, n),
      clip_frame: a,
      position: Xt(o, "position", a),
      ...Xt(o, "rotation", a),
      scale: gg(Xt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => Dl(c, n))
  };
}
function Tx(e, t) {
  if (e.placement === "world")
    return {
      position: Xt(e, "position", t),
      ...Xt(e, "rotation", t),
      scale: gg(Xt(e, "scale", t))
    };
  const n = Xt(e, "size", t);
  return {
    ...Xt(e, "direction", t),
    roll_deg: Xt(e, "roll", t),
    hFOV_deg: xu(n.hFOV_deg),
    vFOV_deg: xu(n.vFOV_deg)
  };
}
function Dl(e, t) {
  const n = yg(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && $i(e.clip, t),
    clip_frame: n,
    ...Tx(e, n),
    opacity: Ex(Xt(e, "opacity", n))
  };
}
const Dx = 2, Lx = ["sky", "world"], Rx = ["input", "output", "temp"], bg = [0.42, 0, 0.58, 1];
function Qt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function zt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function wu(e, t) {
  const n = zt(e, t);
  return n !== null && n > 0 ? n : t;
}
function Qn(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Oo(e) {
  const t = zt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function tp(e, t) {
  return typeof e == "boolean" ? e : t;
}
function vg(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => zt(n, null));
  return t.includes(null) ? null : t;
}
function _g(e) {
  return vg(e) || [0, 0, 0];
}
function xg(e) {
  const t = Qt(e) ? e : {};
  return {
    yaw_deg: zt(t.yaw_deg, 0),
    pitch_deg: Qn(zt(t.pitch_deg, 0), -90, 90),
    roll_deg: zt(t.roll_deg, 0)
  };
}
function $x(e) {
  return Qn(zt(e, 90), 0.1, 179);
}
function Vx(e) {
  return wu(e, 1);
}
function zx(e) {
  const t = Qt(e) ? e : {};
  return {
    yaw_deg: zt(t.yaw_deg, 0),
    pitch_deg: Qn(zt(t.pitch_deg, 0), -90, 90)
  };
}
function jx(e) {
  return zt(e, 0);
}
function Hx(e) {
  const t = Qt(e) ? e : {};
  return {
    hFOV_deg: Qn(zt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: Qn(zt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function wg(e) {
  return Qn(zt(e, 1), 0, 1);
}
const Sg = [["position", _g], ["rotation", xg], ["fov", $x]], gf = [["position", _g], ["rotation", xg], ["scale", Vx]], kg = [["direction", zx], ["roll", jx], ["size", Hx], ["opacity", wg]], Mg = [...gf, ["opacity", wg]];
function Gx(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => zt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...bg];
}
function Kx(e) {
  if (!Qt(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = vg(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function Bx(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!Qt(o)) continue;
    const a = Oo(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: Gx(o.easing) }, f = n ? Kx(o.handles) : null;
    f && (c.handles = f), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function Su(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = Qt(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: Bx(a.keyframes, o, r === "position") };
  }
  return n;
}
function Ng(e) {
  const t = Qt(e) ? e : {}, n = Oo(t.start), r = Oo(t.in), o = Oo(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function Ux(e) {
  const t = Qt(e) ? e : {}, n = Qn(zt(t.x0, 0), 0, 1), r = Qn(zt(t.y0, 0), 0, 1), o = Qn(zt(t.x1, 1), 0, 1), a = Qn(zt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function Wx(e) {
  if (!Qt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Rx.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Yx(e) {
  const t = Wx(e.source);
  if (!t) return null;
  const n = Lx.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: Ng(e.clip),
    visible: tp(e.visible, !0),
    locked: tp(e.locked, !1),
    crop: Ux(e.crop),
    ...Su(e, r ? Mg : kg)
  };
  return r || (o.z_index = Oo(e.z_index) ?? 0), o;
}
function Xx(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = Qt(a) ? Yx(a) : null;
    if (c) {
      if (c.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      t.push(c);
    }
  }
  const r = /* @__PURE__ */ new Set();
  for (const a of t)
    typeof a.id == "string" && a.id && !r.has(a.id) ? r.add(a.id) : a.id = null;
  let o = 1;
  for (const a of t)
    if (a.id === null) {
      for (; r.has(`sticker_${o}`); ) o += 1;
      a.id = `sticker_${o}`, r.add(a.id);
    }
  return t;
}
function ku(e) {
  const t = Qt(e.timeline) ? e.timeline : {}, n = Qt(e.camera) ? e.camera : {}, r = Qt(e.scene) ? e.scene : {}, o = Oo(t.length);
  return {
    version: Dx,
    timeline: {
      fps: wu(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: wu(n.aspect, 1), ...Su(n, Sg) },
    scene: { clip: Ng(r.clip), ...Su(r, gf) },
    stickers: Xx(e.stickers),
    painting: Io(e.painting),
    painting_layer: Qt(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function qx(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Qt(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function Jx(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Qt(t)) return {};
  const n = Qn(zt(t.hFOV_deg, 90), 1, 179), r = Qn(zt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function Zx(e) {
  const t = Qt(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(Qt) : [];
  return n.sort((r, o) => zt(r.z_index, 0) - zt(o.z_index, 0)), ku({
    camera: Jx(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: qx(r, t),
      visible: r.visible,
      locked: r.locked,
      crop: r.crop,
      z_index: r.z_index,
      direction: { value: { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg } },
      roll: { value: r.rot_deg },
      size: { value: { hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg } }
    })),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function zo(e) {
  if (e == null || typeof e == "string" && !e.trim()) return ku({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Qt(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? Zx(t) : ku(t);
}
function zc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Pg(e) {
  return Array.isArray(e) ? [...e] : e;
}
function yf(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= zi);
}
function Ag(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? Pg(e.keyframes[r - 1].easing) : [...bg];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function Wi(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = zc(o.value, r);
    return;
  }
  const a = yf(o, n);
  a ? a.value = zc(a.value, r) : Ag(o, n, zc(Xt(e, t, n), r));
}
function Uo(e) {
  return e.placement === "world" ? Mg.map(([t]) => t) : e.placement === "sky" ? kg.map(([t]) => t) : (e.clip ? gf : Sg).map(([t]) => t);
}
function Qx(e, t) {
  for (const n of Uo(e))
    yf(e[n], t) || Ag(e[n], t, Xt(e, n, t));
}
function ew(e) {
  const t = Uo(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function tw(e, t) {
  return Uo(e).every((n) => !!yf(e[n], t));
}
function nw(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const f = Xt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = f);
  }
}
function rw(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const c of t) {
    const f = e[c], d = f.keyframes.filter((y) => a.has(y.frame)).map((y) => ({ ...y, frame: y.frame + r })), v = new Set(d.map((y) => y.frame));
    f.keyframes = [
      ...f.keyframes.filter((y) => !a.has(y.frame) && !v.has(y.frame)),
      ...d
    ].sort((y, x) => y.frame - x.frame);
  }
  return r;
}
function Cg(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function iw(e, t, n) {
  const r = Cg(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function ow(e, t, n, r) {
  for (const o of Cg(e, t, n)) o.easing = Pg(r);
}
function aw(e, t) {
  e.start = Math.max(0, e.start + t);
}
function sw(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function lw(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function np(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Mu(e) {
  return Uo(e).map((t) => e[t]);
}
function rp(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => Mu(t).some((n) => n.keyframes.length > 0)) || !np(e.scene.clip) || e.stickers.some((t) => !np(t.clip));
}
function cw(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = Math.max(e.timeline.length ?? t, n);
  for (const a of Mu(e.camera))
    for (const c of a.keyframes) o = Math.max(o, c.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: c } = a;
    o = Math.max(o, c.duration === null || c === r ? c.start + 1 : c.start + c.duration);
    for (const f of Mu(a))
      for (const d of f.keyframes) o = Math.max(o, c.start - c.in + d.frame + 1);
  }
  return o;
}
function uw(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let xs = { text: null, parsed: null };
function Hn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function ul(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function fw({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Hn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Io(null),
    painting_layer: null,
    ui_settings: ul(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Ig(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function dw(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function hw(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function pw(e) {
  return Array.isArray(e) ? e.map((t) => sg(t)) : [];
}
function mw(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function Og(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = fw(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (xs.text === o ? a = xs.parsed : (a = JSON.parse(o), xs = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: dw(a.assets),
      stickers: hw(a.stickers),
      shots: pw(a.shots),
      painting: Io(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: ul(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (f.ui_settings = ul({ ...f.ui_settings, ...c })), f.output_preset = Ig(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = Hn(n.coverage), delete f.editor_history, f;
  } catch {
    return xs = { text: o, parsed: null }, r;
  }
}
function ip(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function gw(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function yw(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function Eg(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c } = t;
  let f;
  try {
    f = zo(e);
  } catch {
    f = zo(null);
  }
  return {
    ...f,
    coverage: Hn(o),
    bg_color: r,
    output_preset: Ig(n),
    ui_settings: ul(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function bf(e, t) {
  const n = Dl(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const bw = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function op(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function vw(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[bw[n]].keyframes.length));
}
function Fg(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = op(n, ["yaw_deg", "pitch_deg"]), a = op(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && Wi(e, "direction", r, o), n.rot_deg !== void 0 && Wi(e, "roll", r, n.rot_deg), Object.keys(a).length && Wi(e, "size", r, a);
}
const Tg = ["position_x", "position_y", "position_z"];
function _w(e, t) {
  const n = Xt(e, "position", t), r = Xt(e, "rotation", t);
  return {
    ...Object.fromEntries(Tg.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Xt(e, "fov", t)
  };
}
function xw(e, t, n, r) {
  const o = Tg.indexOf(n);
  if (o >= 0) {
    const a = Xt(e, "position", t);
    a[o] = r, Wi(e, "position", t, a);
  } else n === "hFOV_deg" ? Wi(e, "fov", t, r) : Wi(e, "rotation", t, { [n]: r });
}
function ww(e, t, n) {
  Wi(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function Vs(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Dg(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function vf(e, t, n, r) {
  return {
    id: e,
    placement: "sky",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    direction: { value: { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg }, keyframes: [] },
    roll: { value: n.rot_deg, keyframes: [] },
    size: { value: { hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg }, keyframes: [] },
    opacity: { value: 1, keyframes: [] },
    z_index: r
  };
}
function Sw(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Gt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function Lg(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Rg(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function $g(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Vg(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? zo(t) : t);
}
function zg(e, t, n) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    return JSON.stringify(zo(n)) === t;
  } catch {
    return !1;
  }
}
const ap = 2048, jg = 0.28;
function Hg(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * on);
  return {
    quaternion: Tl(Fl(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * Pn,
    aspect: r
  };
}
function zs(e) {
  const t = ni(e);
  return {
    quaternion: Tl(Fl(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function kw(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = mf(n, r), c = t.x + t.w * 0.5, f = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: f - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * Pn,
      vFOV_deg: 2 * Math.atan(a / r) * Pn
    }
  };
}
function Gg(e, t, n) {
  const [[r, o, a], [c, f, d], [v, y, x]] = dg(e.quaternion), w = Math.tan(e.fovY_deg * 0.5 * on), M = w * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, _ = 1e-4) {
      const F = _x(k), $ = r * F.x + c * F.y + v * F.z, X = o * F.x + f * F.y + y * F.z, C = -(a * F.x + d * F.y + x * F.z), V = Math.max(C, _);
      return {
        x: t * 0.5 * (1 + $ / V / M),
        y: n * 0.5 * (1 - X / V / w),
        z: C
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, _) {
      const F = (k / t * 2 - 1) * M, $ = (1 - _ / n * 2) * w;
      return df($s({
        x: r * F + o * $ - a,
        y: c * F + f * $ - d,
        z: v * F + y * $ - x
      }));
    }
  };
}
function Mw(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = Fx(e, t), c = [];
  e.stickers.forEach((f, d) => {
    const v = a.stickers[d];
    if (f.placement !== "sky") return;
    const y = f.source.kind === "port" && !f.visible;
    if (!v.active && !y) return;
    const x = n(f);
    if (!x) return;
    const w = Math.tan(v.hFOV_deg * 0.5 * on), M = Math.tan(v.vFOV_deg * 0.5 * on), { crop: k } = f;
    c.push({
      kind: "sticker",
      id: f.id,
      media: x.media,
      revision: x.revision,
      opacity: y ? jg : v.opacity,
      zIndex: r(f),
      quaternion: Tl(Fl(v.yaw_deg, v.pitch_deg, v.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * w,
        x1: (2 * k.x1 - 1) * w,
        y0: (1 - 2 * k.y1) * M,
        y1: (1 - 2 * k.y0) * M
      }
    });
  });
  for (const f of o) c.push({ kind: "erp", ...f });
  return c.sort((f, d) => f.zIndex - d.zIndex);
}
function Kg(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const c of n)
    typeof (c == null ? void 0 : c.id) == "string" && c.id && !a.has(c.id) && a.set(c.id, c);
  return Mw(e, t, {
    media: (c) => {
      const f = a.get(c.id);
      return f ? r(f) : null;
    },
    zIndex: (c) => {
      var f;
      return Number(((f = a.get(c.id)) == null ? void 0 : f.z_index) || 0);
    },
    paintLayers: o
  });
}
const jc = /* @__PURE__ */ new WeakMap();
let Nw = 1;
function sp(e) {
  return jc.has(e) || jc.set(e, Nw++), jc.get(e);
}
function lp({ background: e, layers: t }) {
  return JSON.stringify([
    e && [sp(e.media), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, sp(n.media), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function Pw({ onReady: e, onFailed: t }) {
  let n = null, r = !1;
  const o = {
    ready: !1,
    failed: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded.
    render(a) {
      return n ? n.render(a) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(a) {
      return n ? n.renderUnwrap(a) : null;
    },
    dispose() {
      r = !0, n == null || n.dispose(), n = null;
    }
  };
  return import("./.lazy/pano_three_view-BMrUcsVg.js").then((a) => {
    r || (n = a.createThreeView(), o.ready = !0, e());
  }).catch((a) => {
    console.error("[PanoramaStickers] three.js view is unavailable", a), o.failed = !0, t();
  }), o;
}
const Bg = "3D view unavailable. Check the browser console.";
function fl(e, t, n) {
  return Hg({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function Aw(e) {
  let t = null, n = !1, r = !1;
  const o = /* @__PURE__ */ new Set();
  function a() {
    t || n || r || (n = !0, e().then((c) => {
      if (n = !1, !o.size) {
        c.dispose();
        return;
      }
      t = c, o.forEach((f) => f.onChange());
    }).catch((c) => {
      n = !1, o.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", c), o.forEach((f) => f.onChange()));
    }));
  }
  return function(f) {
    const d = { onChange: f };
    let v = !1;
    return o.add(d), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(y) {
        return v ? null : (a(), t ? t.render({ ...y, owner: d }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(d);
      },
      dispose() {
        v || (v = !0, o.delete(d), t == null || t.release(d), !o.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Ug = Aw(
  () => import("./.lazy/pano_three_view-BMrUcsVg.js").then((e) => e.createThreeView())
);
function Wg({
  readState: e,
  reduce: t,
  projectModel: n,
  publishLiveState: r = () => {
  },
  commitState: o,
  onChange: a = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof n != "function" || typeof o != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let c = null, f = !1, d = !1;
  const v = () => c || e(), y = () => a(n(v()));
  return {
    model: () => n(v()),
    refresh() {
      return d ? this.model() : (y(), this.model());
    },
    beginGesture() {
      return d || c ? !1 : (c = e(), f = !1, y(), !0);
    },
    updateGesture(x) {
      if (d) return !1;
      c || this.beginGesture();
      const w = t(c, x);
      return w.changed ? (c = w.state, f = !0, r(c), y(), !0) : !1;
    },
    hasGestureChanges() {
      return c != null && f;
    },
    commitGesture() {
      if (d || !c) return !1;
      const x = f;
      return x && o(c), c = null, f = !1, r(null), y(), x;
    },
    cancelGesture() {
      return d || !c ? !1 : (c = null, f = !1, r(null), y(), !0);
    },
    apply(x) {
      if (d) return !1;
      c && this.commitGesture();
      const w = t(e(), x);
      return w.changed ? (o(w.state), y(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const x = c != null;
      c = null, f = !1, x && r(null);
    }
  };
}
const dl = Math.PI / 180, Pr = 180 / Math.PI, Cw = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), Iw = 260;
function cp(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Yg(e, t) {
  return t ? Yg(t, e % t) : e;
}
function Ow(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), f = Math.max(1, Math.round(t / a * o)), d = Yg(c, f) || 1;
  return `${Math.round(c / d)}:${Math.round(f / d)}`;
}
function Ra(e, t) {
  const n = cp(e), r = cp(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: Ow(n, r) };
}
function Yi(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function Xg(e) {
  const t = Yi(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Ur(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function _f(e, t, n = Cw) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), v = (F, $, X) => {
    const C = F + $, V = Math.max(0, X - 1), E = C > V && C > 0 ? V / C : 1;
    return [F * E, $ * E];
  }, [y, x] = v(d, c, r), [w, M] = v(a, f, o), k = {
    x: y,
    y: w,
    w: Math.max(1, r - y - x),
    h: Math.max(1, o - w - M)
  }, _ = hf(k, t);
  return {
    x: k.x + (k.w - _.width) * 0.5,
    y: k.y + (k.h - _.height) * 0.5,
    w: _.width,
    h: _.height,
    safeRect: k
  };
}
function Ew(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = _f({ width: n, height: r }, 1), a = Z(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * dl * 0.5)), f = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, v = fg(d, ag(
    { x: n * 0.5, y: r * 0.5 },
    c,
    f
  )), y = Fw(v, Bo(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), x = pf({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: x.hFOV_deg
  };
}
function qg(e) {
  return {
    yaw: Gt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Pr),
    pitch: Z(Math.asin(Z(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Pr, -89.9, 89.9)
  };
}
function Fw(e, t) {
  const n = qg(e), r = Bo(n.yaw, n.pitch, 0), o = Dc(t, e), a = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * o,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * o,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * o
  }, c = Math.hypot(a.x, a.y, a.z);
  if (!(c > 1e-8)) return { ...n, roll: 0 };
  const f = {
    x: a.x / c,
    y: a.y / c,
    z: a.z / c
  };
  return {
    ...n,
    roll: El(Math.atan2(
      Dc(f, r.up),
      Dc(f, r.right)
    ) * Pr)
  };
}
function Jg(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = _f({ width: n, height: r }, Ui(e)), a = Bi(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, f = fg(e, ag(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = qg(f);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: Z(2 * Math.atan(n / (2 * a)) * Pr, 1, 179)
  };
}
function Tw(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = Bi(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: v, halfH: y } = mf(d, f), x = {
    x: a - v,
    y: c - y,
    w: v * 2,
    h: y * 2
  }, w = x.x <= 0 && x.y <= 0 && x.x + x.w >= r && x.y + x.h >= o, M = r / o, k = Math.tan(yu * dl), _ = M >= 1 ? k : k * M, F = M >= 1 ? k / M : k;
  return {
    focalPx: f,
    rect: x,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(v / f) * Pr,
      vFOV_deg: 2 * Math.atan(y / f) * Pr
    },
    fallback: w ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(_) * Pr,
        vFOV_deg: 2 * Math.atan(F) * Pr
      }
    }
  };
}
function ho(e, t) {
  const n = Yi(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = t(n);
  return !r || r === n ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((o) => o === n ? r : o)
    },
    changed: !0
  };
}
function Dw(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = Bi(n, e);
    return pf(hf(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Rs(a, t) };
}
function up(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Ra(t, n);
  if (!a) return e;
  const c = Ui(e) >= 1;
  r && a.ratio >= 1 !== c && (a = Ra(a.height, a.width));
  const f = Dw(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...f, aspect_id: a.label };
}
function Zg(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Yi(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = lg({
      id: r,
      yawDeg: t.yawDeg,
      pitchDeg: t.pitchDeg,
      rollDeg: t.rollDeg,
      viewFovDeg: t.viewFovDeg,
      frameFovDeg: t.frameFovDeg
    });
    return {
      state: {
        ...e,
        shots: [o],
        active: { ...e.active || {}, selected_shot_id: r }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const r = Yi(e);
    if (!r) return { state: e, changed: !1 };
    const o = (Array.isArray(e.shots) ? e.shots : []).filter((c) => c !== r), a = ((n = o[0]) == null ? void 0 : n.id) == null ? null : String(o[0].id);
    return {
      state: {
        ...e,
        shots: o,
        active: { ...e.active || {}, selected_shot_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return ho(e, (r) => up(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return ho(e, (r) => {
      const a = String(Ur(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? Ra(a[1], a[2]) : Ra(Ui(r), 1);
      return c ? up(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? ho(e, (o) => {
      const a = El(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const f = { ...o, roll_deg: a };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? ho(e, (r) => {
    const o = cg(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? ho(e, (r) => {
    const o = ug(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? ho(e, (r) => {
    const o = t0(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Qg({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: o = !1,
  allowAlt: a = !1,
  deadZoneRatio: c = 0.05
} = {}) {
  const f = a && o ? "alt" : r ? "shift" : "";
  if (!f || !e || !t) return null;
  const d = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, v = {
    x: d.x + d.w * 0.5,
    y: d.y + d.h * 0.5
  }, y = Math.hypot(Number(t.x || 0) - v.x, Number(t.y || 0) - v.y);
  if (f === "shift" && y < Math.min(d.w, d.h) * c) return null;
  const x = Math.atan2(Number(t.y || 0) - v.y, Number(t.x || 0) - v.x);
  return {
    source: f,
    frame: d,
    center: v,
    startRollDeg: Number(n || 0),
    lastAngle: x,
    accumulatedRad: 0
  };
}
function e0(e, t, n = {}) {
  var c, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + ig(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: og(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function t0(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * dl, d = Math.cos(f), v = Math.sin(f), y = a / n, x = -c / n, w = y * d - x * v, M = y * v + x * d, k = Number(e.pitch_deg || 0) * dl, _ = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: Gt(Number(e.yaw_deg || 0) - Math.atan(w) / _ * Pr),
    pitch_deg: Z(Number(e.pitch_deg || 0) - Math.atan(M) * Pr, -90, 90)
  };
}
function Lw({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Wg({
    readState: e,
    reduce: Zg,
    projectModel: Xg,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Me = Object.freeze({
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
  roll: "roll",
  help: "help",
  pencil_tool: "pencil_tool",
  spray_can_tool: "spray_can_tool",
  highlighter_tool: "highlighter_tool",
  paintbrush_vertical_tool: "paintbrush_vertical_tool",
  eraser_tool: "eraser_tool",
  lasso_tool: "lasso_tool",
  keyframe: "keyframe"
}), Rw = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, $w = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: Rw(t[2])
})), Vw = {
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
  roll: { name: "angle", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 19h16' /><path d='M6 17l11 -11' /><path d='M9 19a5 5 0 0 1 1.46 -3.54' />" },
  help: { name: "help", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 17l0 .01' /><path d='M12 13.5a2.5 2.5 0 1 0 -2.5 -2.5' /><path d='M12 13.5v.5' /><path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' />" },
  pencil_tool: { name: "pencil", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M13.5 6.5l4 4' />" },
  spray_can_tool: { name: "spray", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 12a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2l0 -7' /><path d='M6 10v-4a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4' /><path d='M15 7h.01' /><path d='M18 9h.01' /><path d='M18 5h.01' /><path d='M21 3h.01' /><path d='M21 7h.01' /><path d='M21 11h.01' /><path d='M10 7h1' />" },
  highlighter_tool: { name: "highlight", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 19h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4' /><path d='M12.5 5.5l4 4' /><path d='M4.5 13.5l4 4' /><path d='M21 15v4h-8l4 -4l4 0' />" },
  paintbrush_vertical_tool: { name: "brush", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 21v-4a4 4 0 1 1 4 4h-4' /><path d='M21 3a16 16 0 0 0 -12.8 10.2' /><path d='M21 3a16 16 0 0 1 -10.2 12.8' /><path d='M10.6 9a9 9 0 0 1 4.4 4.4' />" },
  eraser_tool: { name: "eraser", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M19 20h-10.5l-4.21 -4.3a1 1 0 0 1 0 -1.41l10 -10a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41l-9.2 9.3' /><path d='M18 13.3l-6.3 -6.3' />" },
  lasso_tool: { name: "lasso", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.028 13.252c-.657 -.972 -1.028 -2.078 -1.028 -3.252c0 -3.866 4.03 -7 9 -7s9 3.134 9 7s-4.03 7 -9 7c-1.913 0 -3.686 -.464 -5.144 -1.255' /><path d='M3 15a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M5 17c0 1.42 .316 2.805 1 4' />" },
  keyframe: { name: "keyframe", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M13.225 18.412a1.595 1.595 0 0 1 -1.225 .588c-.468 0 -.914 -.214 -1.225 -.588l-4.361 -5.248a1.844 1.844 0 0 1 0 -2.328l4.361 -5.248a1.595 1.595 0 0 1 1.225 -.588c.468 0 .914 .214 1.225 .588l4.361 5.248a1.844 1.844 0 0 1 0 2.328l-4.361 5.248' />" }
}, fp = Object.fromEntries(
  Object.entries(Vw).map(([e, t]) => [e, {
    name: t.name,
    elements: $w(t.body)
  }])
), At = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ft(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(fp, r) ? fp[r] : null;
    });
    return (r, o) => n.value ? (ae(), ce("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: at(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (ae(!0), ce(We, null, xt(n.value.elements, (a, c) => (ae(), ce(We, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ae(), ce("path", yi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ae(), ce("circle", yi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ae(), ce("rect", yi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ae(), ce("line", yi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ae(), ce("polyline", yi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ae(), ce("polygon", yi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ct("", !0)
      ], 64))), 128))
    ], 2)) : ct("", !0);
  }
}, rn = {
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
    const t = e, n = ft(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (ae(), Dr(Av(e.tag), yi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: km(() => [
        Ee(At, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, zw = ["aria-expanded", "disabled"], jw = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, Hw = ["data-aspect", "disabled", "onClick"], Gw = { class: "pano-cutout-aspect-custom" }, Kw = ["disabled"], Bw = ["disabled"], Uw = ["data-custom-width", "data-custom-height", "disabled"], n0 = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), a = /* @__PURE__ */ Vt("1"), c = /* @__PURE__ */ Vt("1"), f = /* @__PURE__ */ Vt(null), d = ft(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), v = ft(() => {
      const _ = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], F = String(n.model.aspectLabel || "");
      return _.length ? _.map(($) => {
        const X = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.value) || ""), C = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.label) || X);
        return {
          ...typeof $ == "object" && $ ? $ : {},
          value: X,
          label: C,
          active: F ? X === F : ($ == null ? void 0 : $.active) === !0
        };
      }) : o.map(($) => ({
        ...$,
        active: $.value === F
      }));
    }), y = ft(() => {
      var F;
      const _ = String(n.model.aspectLabel || "").trim();
      return _ || String(((F = v.value.find(($) => $.active === !0)) == null ? void 0 : F.label) || "Aspect");
    });
    Gi(y, (_) => {
      const F = String(_ || "").match(/^([0-9.]+):([0-9.]+)$/);
      F && (a.value = F[1], c.value = F[2]);
    }, { immediate: !0 });
    function x(_) {
      r("action", _);
    }
    function w(_) {
      var F;
      n.model.aspectOpen === !0 && ((F = f.value) != null && F.contains(_.target) || x({ type: "close-aspect" }));
    }
    Al(() => {
      document.addEventListener("pointerdown", w, !0);
    }), Ga(() => {
      document.removeEventListener("pointerdown", w, !0);
    });
    function M(_) {
      const [F, $] = String(_.value || "").split(":");
      x({
        type: "set-aspect",
        width: F,
        height: $,
        preserveOrientation: !0
      });
    }
    function k() {
      x({
        type: "set-aspect",
        width: a.value,
        height: c.value,
        preserveOrientation: !1
      });
    }
    return (_, F) => (ae(), ce("div", {
      ref_key: "rootElement",
      ref: f,
      class: at(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ae(), Dr(rn, {
        key: 0,
        icon: e.model.aspectIcon || rt(Me).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: F[0] || (F[0] = ($) => x({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ae(), ce("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: F[1] || (F[1] = ($) => x({ type: "toggle-aspect" }))
      }, [
        Ee(At, {
          icon: e.model.aspectIcon || rt(Me).aspect
        }, null, 8, ["icon"]),
        W("span", null, it(y.value), 1),
        Ee(At, {
          icon: rt(Me).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, zw)),
      vi(W("div", jw, [
        (ae(!0), ce(We, null, xt(v.value, ($) => (ae(), ce("button", {
          key: $.value,
          class: at(["pano-btn pano-frame-aspect-choice", { active: $.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": $.value,
          disabled: d.value,
          onClick: (X) => M($)
        }, it($.label), 11, Hw))), 128)),
        W("div", Gw, [
          vi(W("input", {
            "onUpdate:modelValue": F[2] || (F[2] = ($) => a.value = $),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, Kw), [
            [Gh, a.value]
          ]),
          F[4] || (F[4] = W("span", { "aria-hidden": "true" }, ":", -1)),
          vi(W("input", {
            "onUpdate:modelValue": F[3] || (F[3] = ($) => c.value = $),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, Bw), [
            [Gh, c.value]
          ]),
          W("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, Uw)
        ])
      ], 512), [
        [Ko, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, Ww = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, Yw = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Vt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (ae(), ce("div", {
      class: at(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Tt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Tt(() => {
      }, ["stop"]))
    }, [
      Ee(rn, {
        icon: rt(Me).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Tt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      W("div", Ww, [
        o[3] || (o[3] = W("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ae(!0), ce(We, null, xt(rt(n), (a) => (ae(), ce("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          W("kbd", null, it(a[0]), 1),
          W("span", null, it(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, Xw = {
  class: "pano-view-unavailable",
  role: "status"
}, xf = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ae(), ce("div", Xw, it(rt(Bg)), 1));
  }
}, qw = { class: "pano-cutout-node-surface" }, Jw = ["title", "disabled"], Zw = { class: "value" }, Qw = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, eS = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function n(r) {
      var o;
      (o = t.onAction) == null || o.call(t, r);
    }
    return (r, o) => (ae(), ce("div", qw, [
      W("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Tt(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Tt(() => {
        }, ["stop"]))
      }, [
        W("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          Ee(At, {
            icon: rt(Me).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = W("span", { class: "label" }, "Full Editor", -1))
        ]),
        Ee(rn, {
          icon: e.model.hasShot ? rt(Me).delete : rt(Me).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ee(n0, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        W("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = Tt((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Ee(At, {
            icon: rt(Me).roll
          }, null, 8, ["icon"]),
          W("span", Zw, it(e.model.rollLabel || "0.0°"), 1)
        ], 40, Jw),
        Ee(rn, {
          icon: rt(Me).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Ee(Yw)
      ], 32),
      e.model.hasShot === !1 ? (ae(), ce("div", Qw, " Choose a view · + Add Frame ")) : ct("", !0),
      e.model.viewUnavailable ? (ae(), Dr(xf, { key: 1 })) : ct("", !0)
    ]));
  }
}, r0 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Vt(null);
    let a, c = !1;
    function f() {
      if (!c) return { active: !1, intent: void 0 };
      const x = a;
      return a = void 0, c = !1, { active: !0, intent: x };
    }
    function d(x) {
      const w = o.value;
      return w instanceof HTMLInputElement ? (a = x, c = !0, w.value = "", w.click(), !0) : !1;
    }
    function v(x) {
      var _, F;
      const { active: w, intent: M } = f();
      if (!w) return;
      const k = ((F = (_ = x.target) == null ? void 0 : _.files) == null ? void 0 : F[0]) || null;
      if (k) {
        r("file-selected", { intent: M, file: k });
        return;
      }
      r("file-cancelled", { intent: M });
    }
    function y() {
      const { active: x, intent: w } = f();
      x && r("file-cancelled", { intent: w });
    }
    return t({ open: d }), (x, w) => (ae(), ce("input", {
      ref_key: "inputRef",
      ref: o,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: v,
      onCancel: y
    }, null, 544));
  }
}, tS = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, nS = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Vt(!1), n = Object.freeze([
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
    return (r, o) => (ae(), ce("div", {
      class: at(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Tt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Tt(() => {
      }, ["stop"]))
    }, [
      Ee(rn, {
        icon: rt(Me).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Tt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      W("div", tS, [
        o[3] || (o[3] = W("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ae(!0), ce(We, null, xt(rt(n), (a) => (ae(), ce("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          W("kbd", null, it(a[0]), 1),
          W("span", null, it(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, rS = { class: "pano-stickers-node-surface" }, iS = ["disabled"], oS = {
  key: 0,
  class: "pano-stickers-node-empty-note"
}, aS = {
  key: 1,
  class: "pano-stickers-node-drop-cue"
}, sS = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Vt(null);
    function r(c) {
      var f;
      (f = t.onAction) == null || f.call(t, c);
    }
    function o() {
      var c, f;
      (f = (c = n.value) == null ? void 0 : c.open) == null || f.call(c, "add");
    }
    function a(c) {
      r({ type: "add-image-file", file: (c == null ? void 0 : c.file) || null });
    }
    return (c, f) => (ae(), ce("div", rS, [
      W("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: f[5] || (f[5] = Tt(() => {
        }, ["stop"])),
        onWheel: f[6] || (f[6] = Tt(() => {
        }, ["stop"]))
      }, [
        W("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: f[0] || (f[0] = (d) => r({ type: "open-editor" }))
        }, [
          Ee(At, {
            icon: rt(Me).fullscreen
          }, null, 8, ["icon"]),
          f[7] || (f[7] = W("span", { class: "label" }, "Full Editor", -1))
        ]),
        W("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          Ee(At, {
            icon: rt(Me).image
          }, null, 8, ["icon"]),
          f[8] || (f[8] = W("span", { class: "label" }, "Add Image", -1))
        ], 8, iS),
        Ee(rn, {
          icon: e.model.locked ? rt(Me).lock_closed : rt(Me).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Ee(rn, {
          icon: rt(Me).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Ee(rn, {
          icon: rt(Me).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Ee(rn, {
          icon: e.model.isExternalSelection ? rt(Me).back_initial : rt(Me).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Ee(nS)
      ], 32),
      e.model.hasStickers === !1 ? (ae(), ce("div", oS, " Add Image to place a sticker ")) : ct("", !0),
      e.model.dropActive === !0 ? (ae(), ce("div", aS, "Drop image to add")) : ct("", !0),
      Ee(r0, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ae(), Dr(xf, { key: 2 })) : ct("", !0)
    ]));
  }
}, js = "sticker_image_1", i0 = "external_image", $a = 0;
function Eo(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function Hc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function xi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Nu(e) {
  return (e == null ? void 0 : e.version) !== 2 ? xi(e) : xi(e).map((t) => ({
    id: t.id,
    z_index: t.z_index,
    locked: t.locked,
    visible: Dl(t, $a).active,
    external: t.source.kind === "port",
    ...bf(t, $a)
  }));
}
function wf(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && xi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function o0(e) {
  return String((e == null ? void 0 : e.id) || "") === js || String((e == null ? void 0 : e.source_kind) || "") === i0;
}
function Sf(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : o0(t);
}
const a0 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function s0(e) {
  return !o0(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(a0.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function l0(e) {
  const t = s0(e);
  return t ? a0.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function c0(e, t = {}) {
  var V, E, R;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((Y) => String((Y == null ? void 0 : Y.id) || "") === js);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const Y = String(((V = e.active) == null ? void 0 : V.selected_sticker_id) || "") === js;
    return {
      state: {
        ...e,
        stickers: n.filter((G, we) => we !== r),
        active: Y ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, f = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), v = Number(t.imageHeight || 0), y = d > 0 && v > 0, x = Math.max(1, d), w = Math.max(1, v), M = t.pose && typeof t.pose == "object" ? t.pose : {}, k = f ? M.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || M.hFOV_deg || 30, _ = Math.min(179, Math.max(0.1, Number(k)));
  if (!f) {
    if (!y) return { state: e, changed: !1 };
    const Y = Eo(_, x, w), G = Number(((E = c == null ? void 0 : c.initial_pose) == null ? void 0 : E.hFOV_deg) ?? _), we = Eo(G, x, w), T = Number(((R = c == null ? void 0 : c.initial_pose) == null ? void 0 : R.vFOV_deg) ?? we);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - Y) <= 1e-6 && Math.abs(T - we) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((O, J) => J === r ? {
          ...O,
          vFOV_deg: Y,
          initial_pose: O.initial_pose && typeof O.initial_pose == "object" ? { ...O.initial_pose, vFOV_deg: we } : O.initial_pose
        } : O)
      },
      changed: !0
    };
  }
  const F = n.reduce((Y, G) => Math.max(Y, Number((G == null ? void 0 : G.z_index) || 0)), -1), $ = {
    yaw_deg: Number(M.yaw_deg || 0),
    pitch_deg: Number(M.pitch_deg || 0),
    hFOV_deg: _,
    vFOV_deg: y ? Eo(_, x, w) : Number(M.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || _),
    rot_deg: Number(M.rot_deg ?? M.roll_deg ?? 0)
  }, X = {
    ...c || {},
    id: js,
    source_kind: i0,
    source_link_id: o,
    source_state_hash: a,
    ...$,
    initial_pose: { ...$ },
    visible: !0,
    z_index: F + 1
  }, C = r >= 0 ? n.map((Y, G) => G === r ? X : Y) : [...n, X];
  return { state: { ...e, stickers: C }, changed: !0 };
}
function dp(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
function u0(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: dp(e, "sticker"),
    awaitingPose: !t && dp(e, "sticker_state"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function f0(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var M;
  const c = e.stickers.findIndex((k) => Sf(e, k)), f = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!f) return { state: e, changed: !1 };
    const k = ((M = e.active) == null ? void 0 : M.selected_sticker_id) === f.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((_, F) => F !== c),
        active: k ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (f) {
    if (!d) return { state: e, changed: !1 };
    const k = [f.size.value, ...f.size.keyframes.map(($) => $.value)], _ = k.map(($) => Eo($.hFOV_deg, o, a));
    if (k.every(($, X) => Math.abs($.vFOV_deg - _[X]) <= 1e-6)) return { state: e, changed: !1 };
    const F = {
      value: { ...f.size.value, vFOV_deg: _[0] },
      keyframes: f.size.keyframes.map(($, X) => ({ ...$, value: { ...$.value, vFOV_deg: _[X + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map(($, X) => X === c ? { ...$, size: F } : $) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const v = new Set(e.stickers.map((k) => k.id));
  let y = 1;
  for (; v.has(`sticker_${y}`); ) y += 1;
  const x = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), w = vf(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: x,
    vFOV_deg: d ? Eo(x, o, a) : x
  }, xi(e).reduce((k, _) => Math.max(k, _.z_index), -1) + 1);
  return { state: { ...e, stickers: [...e.stickers, w] }, changed: !0 };
}
function kf(e) {
  const t = xi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: Hc(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: Hc(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: Hc(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function d0(e) {
  const t = wf(e), n = Sf(e, t), r = xi(e).some((f) => f && f.visible !== !1), o = kf(e), a = t ? o.findIndex((f) => f.type === "sticker" && f.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: l0(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function lS(e) {
  var t, n;
  return {
    ...e,
    stickers: (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).map((r) => ({ ...r })),
    painting: {
      ...(e == null ? void 0 : e.painting) || {},
      groups: (Array.isArray((t = e == null ? void 0 : e.painting) == null ? void 0 : t.groups) ? e.painting.groups : []).map((r) => ({ ...r })),
      raster_objects: (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.raster_objects) ? e.painting.raster_objects : []).map((r) => ({ ...r }))
    }
  };
}
function hp(e, t) {
  const n = wf(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = lS(e), o = String(n.id || ""), a = kf(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [f] = a.splice(c, 1);
  return t === "front" ? a.push(f) : a.unshift(f), a.forEach((d, v) => {
    d.item.z_index = v;
  }), { state: r, changed: !0 };
}
function cS(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function uS(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return c0(e, t.value);
  if (t.type === "sync-port") return f0(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((w) => String((w == null ? void 0 : w.id) || "") === a))
      return { state: e, changed: !1 };
    const d = kf(e).reduce((w, M) => Math.max(w, Number(M.z_index || 0)), -1), v = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: v,
      vFOV_deg: Eo(v, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, vf(a, Vs(o.asset), y, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const x = { id: a, asset_id: c, ...y, z_index: d + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [c]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], x],
        active: { ...e.active || {}, selected_sticker_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !xi(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = wf(e);
  if (!n) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const o = n.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, locked: o } : a)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const o = s0(n);
    return !o || !l0(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return hp(e, "front");
  if (t.type === "send-back") return hp(e, "back");
  if (t.type === "delete-selected") {
    if (Sf(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = xi({ ...e, stickers: o })[0], c = (a == null ? void 0 : a.id) == null ? null : String(a.id), f = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return e.version !== 2 && (f.assets = cS(f)), { state: f, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? bf(n, $a) : n, f = {};
    if (a.forEach((d) => {
      const v = Number(o[d]);
      Number.isFinite(v) && Math.abs(v - Number(c[d] || 0)) > 1e-12 && (f[d] = v);
    }), !Object.keys(f).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = vw(n, f);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const v = structuredClone(n);
      return Fg(v, $a, d), { state: { ...e, stickers: e.stickers.map((y) => y === n ? v : y) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((d) => d === n ? { ...d, ...f } : d)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function fS(e = {}) {
  return Wg({
    ...e,
    reduce: uS,
    projectModel: d0
  });
}
const pp = 24;
function dS(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function mp(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function hS(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function Pu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => mp(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return mp(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : hS(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Mf(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function h0(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ha(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Z(n.x, -r, t.width + r),
    y: Z(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function pS(e) {
  const t = Bo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Z(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * on * 0.5),
    tanY: Math.tan(Z(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * on * 0.5)
  };
}
function Oi(e, t, n) {
  return df(il(
    il(e.centerDir, ol(e.right, t)),
    ol(e.up, n)
  ));
}
function Nf(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = pS(e), r = ha(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    Oi(n, -n.tanX, n.tanY),
    Oi(n, n.tanX, n.tanY),
    Oi(n, n.tanX, -n.tanY),
    Oi(n, -n.tanX, -n.tanY)
  ].map((w) => ha(w, t)), a = Array.from({ length: 4 }, (w, M) => {
    const k = [];
    for (let _ = 0; _ <= 28; _ += 1) {
      const F = _ / 28;
      let $, X;
      M === 0 ? ($ = -n.tanX + 2 * n.tanX * F, X = n.tanY) : M === 1 ? ($ = n.tanX, X = n.tanY - 2 * n.tanY * F) : M === 2 ? ($ = n.tanX - 2 * n.tanX * F, X = -n.tanY) : ($ = -n.tanX, X = -n.tanY + 2 * n.tanY * F);
      const C = ha(Oi(n, $, X), t);
      C && k.push({ x: C.x, y: C.y });
    }
    return k;
  }), c = ha(Oi(n, 0, n.tanY), t), f = ha(
    Oi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, c, f];
  if (d.some((w) => !w || !Number.isFinite(w.x) || !Number.isFinite(w.y)))
    return { visible: !1 };
  if (!d.some((w) => w.rawZ > 1e-4)) return { visible: !1 };
  const v = f.x - c.x, y = f.y - c.y, x = Math.hypot(v, y) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((w) => ({ x: w.x, y: w.y })),
    boundaryEdges: a,
    rotateStemBase: { x: c.x, y: c.y },
    rotateHandle: {
      x: c.x + v / x * pp,
      y: c.y + y / x * pp
    },
    visible: !0
  };
}
function gp(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: Nf(c, r) })).filter((c) => c.geometry.visible).sort((c, f) => {
    var d, v;
    return Number(((d = f.item) == null ? void 0 : d.z_index) || 0) - Number(((v = c.item) == null ? void 0 : v.z_index) || 0);
  }), a = o.find((c) => {
    var f;
    return String(((f = c.item) == null ? void 0 : f.id) || "") === String(t || "");
  });
  if (a) {
    const c = Pu(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const f = Pu(c.geometry, n);
    if (f.kind !== "none") return { ...c, hit: f };
  }
  return null;
}
function mS(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Gt(Math.atan2(r.x, r.z) * Pn),
    pitch_deg: Math.asin(Z(r.y, -1, 1)) * Pn
  };
}
function gS(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Z(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Z(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function yS(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * Pn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let ws = null;
function Pf() {
  return ws || (ws = new Promise((e) => {
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
  }), ws);
}
function qn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function bS(e, t = 1024) {
  const n = Math.max(1, Math.round(qn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(qn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function vS(e, t, n) {
  const r = qn(t), o = qn(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = qn(a.u0), f = qn(a.v0), d = qn(a.u1), v = qn(a.v1);
  if (d <= c || v <= f) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + qn(y.du)) * r,
    centerY: ((f + v) * 0.5 + qn(y.dv)) * o,
    width: (d - c) * r,
    height: (v - f) * o,
    rotationRad: qn(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, qn(y.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function _S(e, t, n) {
  const r = String((e == null ? void 0 : e.rasterDataUrl) || ""), o = (e == null ? void 0 : e.bbox) || {}, a = (e == null ? void 0 : e.transform) || {};
  return [
    String((e == null ? void 0 : e.id) || ""),
    t,
    n,
    r.length,
    r.slice(-24),
    o.u0,
    o.v0,
    o.u1,
    o.v1,
    a.du,
    a.dv,
    a.rot_deg,
    a.scale
  ].join(":");
}
function xS() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [a, c] of e) {
        if (e.size <= 16) break;
        c.settled && (c.image.onload = null, c.image.onerror = null, e.delete(a));
      }
  }
  function r(a, c) {
    let f = e.get(a);
    if (f)
      return e.delete(a), e.set(a, f), !f.settled && typeof c == "function" && f.listeners.add(c), f.image;
    const d = new Image();
    f = { image: d, listeners: new Set(typeof c == "function" ? [c] : []), settled: !1 }, e.set(a, f);
    const v = () => {
      f.settled = !0;
      const y = [...f.listeners];
      f.listeners.clear(), y.forEach((x) => x()), n();
    };
    return d.onload = v, d.onerror = v, d.src = a, n(), d;
  }
  function o(a, c, f, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const v = String(a.rasterDataUrl || "").trim(), y = vS(a, c, f);
    if (!v.startsWith("data:") || !y) return null;
    const x = _S(a, c, f), w = String((a == null ? void 0 : a.id) || "").trim() || x, M = t.get(w);
    if ((M == null ? void 0 : M.revision) === x) return { source: M.source, revision: x };
    const k = r(v, d), _ = Number(k.naturalWidth || k.width || 0), F = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || _ < 1 || F < 1) return null;
    const $ = document.createElement("canvas");
    $.width = Math.max(1, Math.round(c)), $.height = Math.max(1, Math.round(f));
    const X = $.getContext("2d");
    return X ? (y.wrapOffsets.forEach((C) => {
      X.save(), X.translate(y.centerX + C, y.centerY), X.rotate(y.rotationRad), X.scale(y.scale, y.scale), X.drawImage(
        k,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), X.restore();
    }), t.set(w, { revision: x, source: $ }), { source: $, revision: x }) : null;
  }
  return {
    get: o,
    retain(a = []) {
      const c = new Set(Array.from(a, (f) => String(f || "").trim()).filter(Boolean));
      for (const f of t.keys())
        c.has(f) || t.delete(f);
    },
    dispose() {
      e.forEach((a) => {
        a.listeners.clear(), a.image.onload = null, a.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function wS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function SS(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function kS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(x) {
    if (!x) return;
    x.entry.listeners.delete(x);
    const w = r.get(x.owner);
    (w == null ? void 0 : w.get(x.key)) === x && w.delete(x.key);
  }
  function c(x, w, M, k) {
    if (!x || typeof k != "function" || M.settled) return;
    let _ = r.get(x);
    _ || (_ = /* @__PURE__ */ new Map(), r.set(x, _));
    const F = _.get(w);
    if ((F == null ? void 0 : F.entry) === M) {
      F.callback = k;
      return;
    }
    a(F);
    const $ = { owner: x, key: w, entry: M, callback: k };
    _.set(w, $), M.listeners.add($);
  }
  function f(x, w) {
    x.settled || (x.settled = !0, x.image.onload = null, x.image.onerror = null, !w && n.get(x.key) === x && n.delete(x.key), [...x.listeners].forEach((M) => {
      a(M);
      try {
        M.callback(x.image, w);
      } catch {
      }
    }), d(o));
  }
  function d(x) {
    if (!(n.size <= x))
      for (const [w, M] of n) {
        if (n.size <= x) break;
        !M.settled || M.listeners.size > 0 || (M.image.onload = null, M.image.onerror = null, n.delete(w));
      }
  }
  function v(x, w, M, k = null) {
    const _ = String(w || ""), F = String(M || "");
    if (!_ || !F) return null;
    let $ = n.get(_);
    if ($)
      n.delete(_), n.set(_, $);
    else {
      d(o - 1);
      const C = e || globalThis.Image;
      if (typeof C != "function") return null;
      const V = new C();
      $ = { key: _, image: V, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(_, $), V.onload = () => f($, !0), V.onerror = () => f($, !1), V.src = F;
    }
    return $.settled || $.image.complete && Number($.image.naturalWidth || $.image.width || 0) > 0 || c(x, _, $, k), $.image;
  }
  function y(x) {
    const w = r.get(x);
    w && ([...w.values()].forEach(a), r.delete(x), d(o));
  }
  return { get: v, disposeOwner: y };
}
const qi = ["erp_image", "bg_erp", "bg_media"], Af = ["sticker_image", "sticker"], MS = {
  background: qi,
  "external-sticker": Af
};
function p0(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function NS(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = p0(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function m0(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((f) => String(f == null ? void 0 : f.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((f) => (f == null ? void 0 : f.id) === c.type);
  }
}
function PS(e, t) {
  const { graph: n, entry: r } = m0(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const f = p0(o.get(c == null ? void 0 : c.link));
    f && (a[String((c == null ? void 0 : c.name) || "")] = f);
  }
  return a;
}
const AS = [...qi, ...Af], CS = 256, wo = /* @__PURE__ */ new Map(), Gc = /* @__PURE__ */ new WeakMap();
let g0 = () => null;
function y0(e) {
  return Gc.has(e) || Gc.set(e, JSON.stringify(e)), Gc.get(e);
}
function IS(e) {
  g0 = e;
}
function b0(e, t) {
  const n = y0(e);
  wo.delete(n), wo.set(n, t), wo.size > CS && wo.delete(wo.keys().next().value);
}
function qr(e, t) {
  const n = e ? g0(e) : null, r = n ? wo.get(y0(n)) : null;
  if (!r) return !0;
  const o = NS(e);
  return MS[t].every((a) => r[a] === o[a]);
}
const hl = /* @__PURE__ */ new WeakSet();
async function Au(e, t) {
  if (hl.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && hl.add(e), n.ok && r !== void 0 ? r : null;
}
function v0(e, t) {
  var a, c, f, d, v;
  const n = (f = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : f.workflow, { entry: r } = m0(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((v = r == null ? void 0 : r.inputs) != null && v.some((y) => AS.includes(y == null ? void 0 : y.name))) ? null : { output: o, inputs: PS(n, t) };
}
const Hs = /* @__PURE__ */ new Map();
function OS(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Hs.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await Au(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = v0(o, a);
        c && b0(c.output, c.inputs);
      }
    });
}
const ES = 5;
function FS(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${ES}`, r = Au(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, Au(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, f) {
      var v, y, x, w;
      const d = String(c.id);
      for (const { id: M } of await r) {
        if (!f()) return null;
        const k = await a(M);
        if ((v = k == null ? void 0 : k.outputs) != null && v[d])
          return ((w = (x = (y = k.workflow) == null ? void 0 : y.prompt) == null ? void 0 : x[d]) == null ? void 0 : w.class_type) !== c.comfyClass ? null : v0(k, d);
      }
      return null;
    }
  };
}
function TS(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let po = null;
async function DS(e, t, n) {
  var f;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || hl.has(n) || (f = Hs.get(o)) != null && f.has(r) || TS(t)) return null;
  (po == null ? void 0 : po.workflowId) !== o && (po = { workflowId: o, history: FS(n, o) }, queueMicrotask(() => {
    po = null;
  }));
  const c = await po.history.lastNodeOutput(e, a);
  return a() ? c ? (b0(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (hl.has(n) || Hs.set(o, (Hs.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function yp(e, t, n, r = qi) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const bp = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Gs(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return bp.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return bp.test(String((e == null ? void 0 : e.filename) || ""));
}
const Kc = /* @__PURE__ */ new WeakMap();
function LS(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Cu(e) {
  return LS(e) ? (Kc.has(e) || Kc.set(e, Math.random().toString(36).slice(2, 10)), Kc.get(e)) : "run";
}
function _0(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function RS(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const f of c) {
      const d = n(a, f);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((v, y) => y)));
    }
  };
  return o(e, t), r;
}
function $S(e, t = [], n = null) {
  var o;
  const r = typeof n == "function" ? n : (a) => String((a == null ? void 0 : a.src) || (a == null ? void 0 : a.url) || a || "").trim();
  for (const a of t) {
    const c = [(o = e == null ? void 0 : e.ui) == null ? void 0 : o[a], e == null ? void 0 : e[a]];
    for (const f of c)
      if (Array.isArray(f))
        for (const d of f) {
          const v = r(d);
          if (v && (/\.mp4(\?|$)/i.test(v) || String((d == null ? void 0 : d.format) || "").toLowerCase() === "video/mp4"))
            return v;
        }
  }
  return "";
}
function VS({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var F;
  const r = ((F = e == null ? void 0 : e.createElement) == null ? void 0 : F.call(e, "video")) || null;
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let a = !1, c = 0;
  const f = typeof r.requestVideoFrameCallback == "function", d = () => {
    a || !f || c || r.paused || r.ended || (c = r.requestVideoFrameCallback(() => {
      c = 0, !a && (o(), d());
    }));
  }, v = () => {
    if (!a) {
      o();
      try {
        Promise.resolve(r.play()).then(d).catch(() => {
        });
      } catch {
      }
    }
  }, y = () => o(), x = () => {
    o(), d();
  }, w = () => o();
  let M = !1;
  const k = () => {
    M = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", v, { once: !0 }), r.addEventListener("canplay", v, { once: !0 }), f || r.addEventListener("timeupdate", y), r.addEventListener("play", x), r.addEventListener("pause", w), r.addEventListener("error", k), r.src = t, r.load(), { video: r, destroy: () => {
    var $, X;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", v), r.removeEventListener("canplay", v), r.removeEventListener("timeupdate", y), r.removeEventListener("play", x), r.removeEventListener("pause", w), r.removeEventListener("error", k), r.pause(), ($ = r.removeAttribute) == null || $.call(r, "src"), (X = r.load) == null || X.call(r));
  }, failed: () => M };
}
const ba = /* @__PURE__ */ new WeakMap();
function x0(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = ba.get(e);
  r || (r = [], ba.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = ba.get(e);
    if (!c) return;
    const f = c.indexOf(o);
    f >= 0 && c.splice(f, 1), c.length === 0 && ba.delete(e);
  };
}
function Jr(e, ...t) {
  const n = ba.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const pl = "state_json";
function Zr(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function zS(e) {
  var c, f;
  const t = Zr(e, pl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Og(n, {
    coverage: (c = Zr(e, "coverage")) == null ? void 0 : c.value
  }), o = Zg(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (f = t.callback) == null || f.call(t, a), !0;
}
function Cf(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = Zr(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, f, d, v, y, x, w, M, k;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (v = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || v.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (w = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || w.call(x, !0, !0), (k = (M = t == null ? void 0 : t.canvas) == null ? void 0 : M.setDirty) == null || k.call(M, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function jS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function vp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function HS(e) {
  var y, x, w, M, k, _;
  if (!e) return;
  const t = Zr(e, "coverage"), n = Zr(e, "bg_color"), r = Zr(e, pl), o = Zr(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && jS(a) && (vp(c) || c === ""))) return;
  let v = "360";
  if (vp(c))
    try {
      v = String(Hn((y = JSON.parse(c)) == null ? void 0 : y.coverage));
    } catch {
      v = "360";
    }
  t.value = v, (x = t.callback) == null || x.call(t, v), n.value = a, (w = n.callback) == null || w.call(n, a), r.value = c, (M = r.callback) == null || M.call(r, c), o && (o.value = f, (k = o.callback) == null || k.call(o, f)), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
}
function Ks(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function Iu(e, t, n) {
  var a, c;
  if (!e || typeof e.addWidget != "function") return null;
  let o = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  if (o) {
    o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", o.options = { ...o.options || {}, hidden: !1 }, typeof o.__panoComputeSizeBeforeHide == "function" && (o.computeSize = o.__panoComputeSizeBeforeHide), delete o.__panoComputeSizeBeforeHide, (a = o.element) != null && a.style && (o.element.style.display = ""), (c = o.parentEl) != null && c.style && (o.parentEl.style.display = "");
    const f = typeof o.computeSize == "function" ? o.computeSize() : null;
    return (!Array.isArray(f) || Number(f[0] || 0) <= 0 || Number(f[1] || 0) <= 0) && (o.computeSize = () => {
      var d;
      return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
    }), o;
  }
  return o = e.addWidget("button", t, null, n), o && (o.serialize = !1), o;
}
async function GS(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function va(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, a = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), c = a.catch(() => {
  });
  e.__panoStickerOperationTail = c, e.__panoPendingStickerUploads.set(t, a);
  const f = () => {
    var d, v;
    ((v = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : v.call(d, t)) === a && e.__panoPendingStickerUploads.delete(t);
  };
  return a.then(f, f), c.then(() => {
    e.__panoStickerOperationTail === c && (e.__panoStickerOperationTail = null);
  }), a;
}
async function w0(e, t = {}) {
  var r;
  await GS(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function KS(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await w0(e), n ? n.apply(this, r) : this.value;
  };
}
function BS(e) {
  var t, n;
  try {
    (t = e.__panoDomRestore) == null || t.call(e);
  } catch {
  }
  try {
    (n = e.__panoLegacyRestore) == null || n.call(e);
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewAttached = !1, e.__panoPreviewMountKey = null;
}
function US(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Bc(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: o,
  attachStickers: a,
  attachCutout: c,
  enableStickersPreview: f,
  sceneStateV2: d = !1
}) {
  if (!(e != null && e.prototype)) return;
  function v(y) {
    var M;
    const x = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === x) return;
    BS(y), Cf(y, t), Ks(y, pl);
    const w = Zr(y, pl);
    if (KS(y, w), w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const k = w.callback;
      w.callback = (_) => {
        var $;
        const F = k ? k(_) : void 0;
        return ($ = y.setDirtyCanvas) == null || $.call(y, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      y.__panoSceneStateV2 = d;
      const k = Zr(y, "bg_color");
      !d && k && (k.value == null || String(k.value).trim() === "" || String(k.value).toLowerCase() === "#000000") && (k.value = "#00ff00", (M = k.callback) == null || M.call(k, "#00ff00")), Iu(y, r, () => o(y, "stickers")), f && (a(y, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(y, "stickers")
      }), y.__panoStickersNodeSurface && Ks(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260])), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = x;
      return;
    }
    Iu(y, r, () => o(y, "cutout")), c(y, {
      buttonText: r,
      onOpen: () => o(y, "cutout")
    }), y.__panoCutoutNodeSurface && Ks(y, r), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = x;
  }
  for (const y of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const x = e.prototype[y];
    e.prototype[y] = function() {
      const w = x ? x.apply(this, arguments) : void 0;
      y === "onNodeCreated" && n === "PanoramaCutout" && zS(this), y === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && HS(this);
      const M = !!this.__panoPreviewAttached;
      return (y === "onNodeCreated" || this.widgets) && v(this), y === "onAdded" && M && Jr(this, "attach"), w;
    };
  }
}
function WS(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return US(this), r;
  };
}
function YS(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: o
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const a = () => {
    const c = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), f = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = f, !c && f < 40) {
      o(a);
      return;
    }
    Cf(e, t);
    const d = (v = e) => n(v, "stickers", { readOnly: !0, hideSidebar: !1 });
    Iu(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && Ks(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function XS({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: o,
  restoreOutput: a,
  requestFrame: c,
  enableStickersPreview: f = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    beforeRegisterNodeDef(d, v) {
      const y = String((v == null ? void 0 : v.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && Bc(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f
      }), y === "PanoramaStickersNode" && Bc(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f,
        sceneStateV2: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && Bc(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f
      }), al(y) && WS(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const v = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Cf(d, e), al(v) && YS(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const qS = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Ar(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : qS.test(String(e.name || "")) : !1;
}
function If(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Ar(n)) : !1;
}
function JS(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var v, y, x;
    (v = d == null ? void 0 : d.preventDefault) == null || v.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (x = d == null ? void 0 : d.stopImmediatePropagation) == null || x.call(d);
  }, a = (d) => {
    if (If(d == null ? void 0 : d.dataTransfer)) {
      o(d);
      try {
        d.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, c = (d) => {
    var v;
    d != null && d.relatedTarget && ((v = e.contains) != null && v.call(e, d.relatedTarget)) || n(!1);
  }, f = (d) => {
    var y;
    const v = Array.from(((y = d == null ? void 0 : d.dataTransfer) == null ? void 0 : y.files) || []).find((x) => Ar(x));
    if (!v) {
      n(!1);
      return;
    }
    o(d), n(!1), r(v);
  };
  return e.addEventListener("dragenter", a, !0), e.addEventListener("dragover", a, !0), e.addEventListener("dragleave", c, !0), e.addEventListener("drop", f, !0), () => {
    e.removeEventListener("dragenter", a, !0), e.removeEventListener("dragover", a, !0), e.removeEventListener("dragleave", c, !0), e.removeEventListener("drop", f, !0), n(!1);
  };
}
async function _a(e, t = {}) {
  var c, f, d, v;
  if (!Ar(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((f = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : f.bind(globalThis.URL)), o = t.revokeObjectURL || ((v = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : v.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const y = await new Promise((x, w) => {
      const M = new n();
      M.onload = () => x(M), M.onerror = () => w(new Error("image load failed")), M.src = a;
    });
    return {
      image: y,
      width: Math.max(1, Number(y.naturalWidth || y.width || 1)),
      height: Math.max(1, Number(y.naturalHeight || y.height || 1))
    };
  } finally {
    o == null || o(a);
  }
}
async function Li(e, { fetchApi: t } = {}) {
  if (!Ar(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const n = new FormData();
  n.append("image", e), n.append("type", "input"), n.append("subfolder", "panorama_stickers");
  const r = await t("/upload/image", { method: "POST", body: n });
  if (!r || r.status !== 200)
    throw new Error(`upload failed (${(r == null ? void 0 : r.status) || "no-response"})`);
  const o = await r.json(), a = String((o == null ? void 0 : o.name) || "").trim();
  if (!a) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: a,
    subfolder: String((o == null ? void 0 : o.subfolder) || "panorama_stickers"),
    storage: String((o == null ? void 0 : o.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const _p = /* @__PURE__ */ new WeakSet(), xp = /* @__PURE__ */ new WeakSet();
let wp = 0;
function Ou(e) {
  if (!e || typeof e != "object" || xp.has(e)) return e;
  const t = String(e.type || "preview");
  return wp += 1, e.type = `${t}:pano-${wp}`, xp.add(e), e;
}
function ml(e) {
  if (!e || typeof e != "object" || _p.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, _p.add(e), e;
}
function S0(e, t) {
  var r, o;
  if (!t || ((o = (r = ml(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function ZS({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const v = o;
    o = null, a || n == null || n(v);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Dt } = Os;
IS((e) => jo(e.id));
OS(Kt);
const Of = kS();
function Eu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Os == null ? void 0 : Os.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const QS = "pano_suite.ui_settings.v1", ek = 120;
function Sp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(QS)) || "").trim();
    if (!n) return e;
    const r = JSON.parse(n);
    return {
      invert_view_x: !!(r != null && r.invert_view_x),
      invert_view_y: !!(r != null && r.invert_view_y)
    };
  } catch {
    return e;
  }
}
function tk() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function pa(e) {
  var n, r, o, a, c;
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
    styleWidth: String(((o = e.style) == null ? void 0 : o.width) || ""),
    stylePos: String(((a = e.style) == null ? void 0 : a.position) || ""),
    styleTransform: String(((c = e.style) == null ? void 0 : c.transform) || "")
  };
}
function nk() {
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
function Fu(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (r, o) => {
    const a = Number(r), c = Number(o);
    return !Number.isFinite(a) || !Number.isFinite(c) ? null : [a, c];
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
function k0(e) {
  const t = Fu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function rk(e, t, n) {
  k0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Tu(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Ef(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function M0(e) {
  return al(Ef(e));
}
function kp(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Dt == null ? void 0 : Dt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function N0(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = Tu(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && f === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && Bs(e), Bk(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Tu(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Bs(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Bs(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function ik(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Bs(e, t = {}) {
  var r, o, a, c, f;
  if (!e) return;
  Du.unregister(e), ik(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
  const n = e.__panoDomPreview;
  try {
    (r = e.__panoDomRestore) == null || r.call(e);
  } catch {
  }
  e.__panoDomRestore = null;
  try {
    (o = e.__panoLegacyRestore) == null || o.call(e);
  } catch {
  }
  if (e.__panoLegacyRestore = null, n) {
    try {
      (a = n.state) != null && a.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (f = (c = n.root) == null ? void 0 : c.remove) == null || f.call(c);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((v) => {
      if (v === (n == null ? void 0 : n.widget)) return !0;
      const y = String((v == null ? void 0 : v.name) || ""), x = String((v == null ? void 0 : v.type) || ""), w = Eu();
      return y === w || x === w || y === "pano_preview" || x === "pano_preview" ? !0 : y === "preview" && x === "pano_preview";
    }).forEach((v) => Mk(e, v));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function ok(e, t = "#00ff00") {
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
    const o = e.trim();
    if (!o) return n;
    try {
      r = JSON.parse(o);
    } catch {
      return n;
    }
  } else
    return n;
  try {
    const o = r;
    return !o || typeof o != "object" || Array.isArray(o) ? n : {
      ...n,
      ...o,
      coverage: Number(o.coverage) === 180 ? 180 : 360,
      assets: o.assets && typeof o.assets == "object" ? o.assets : {},
      stickers: Array.isArray(o.stickers) ? o.stickers : [],
      shots: Array.isArray(o.shots) ? o.shots : [],
      active: o.active && typeof o.active == "object" ? o.active : n.active
    };
  } catch {
    return n;
  }
}
function ak(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Fo(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Xn(e) {
  var f, d;
  const t = ak(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = Fo(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), o = Number(((d = Fo(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? Eg(t, { backgroundColor: r, coverage: o, active: Rg(e) }) : ok(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function Fo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function sk(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function P0(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = c ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(c.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = sk(e == null ? void 0 : e.graph, n)), r;
}
function lk(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function A0(e, t = []) {
  const n = lk(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    qi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function Mp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function gl(e, t) {
  const n = Mp(e), r = Mp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function ck(e, t) {
  var n;
  return P0(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function uk(e, t = qi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = A0(e, t).map((f) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(f))).filter((f) => f >= 0), a = n.map((f, d) => ({ input: f, idx: d })).filter(({ input: f }) => String((f == null ? void 0 : f.type) || "").toUpperCase() === "IMAGE").map(({ idx: f }) => f), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return RS(e, c, ck);
}
const Du = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Kt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, v, y, x, w;
        if (!a) return;
        const c = gl(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...uk(a)].some((M) => gl(r, M)) || _0(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (C0(a), (v = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || v.call(d), (y = a.setDirtyCanvas) == null || y.call(a, !0, !0), (w = (x = a.graph) == null ? void 0 : x.setDirtyCanvas) == null || w.call(x, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Kt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Kt) != null && e.removeEventListener) || (Kt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function yl(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const o = `/view?${n.toString()}`;
  return typeof ((a = Kt) == null ? void 0 : a.apiURL) == "function" ? Kt.apiURL(o) : o;
}
function fk(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function dk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function hk(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function pk(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (fk(t)) return [t];
  const { filename: n, subfolder: r } = dk(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => yl({
    filename: n,
    subfolder: r,
    type: a
  }));
  return hk([...o, t]);
}
function mk(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? yl({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function jo(e) {
  const t = Dt == null ? void 0 : Dt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (gl(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (gl(c, o)) return t[c];
  }
  return null;
}
function Us(e, t, n = null) {
  const r = n || jo(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function Nr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Nr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return yl({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Nr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : yl(e);
}
function bl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Np(e) {
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
function Ff(e, t) {
  var r;
  const n = String(e || "").trim();
  if (!n) return "";
  try {
    const o = typeof window < "u" && ((r = window == null ? void 0 : window.location) != null && r.href) ? window.location.href : "http://127.0.0.1/", a = new URL(n, o);
    return t > 0 && a.searchParams.set("pano_rev", String(t)), a.toString();
  } catch {
    const o = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${o}pano_rev=${t}` : n;
  }
}
function gk(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function yk(e, t) {
  try {
    e.__panoOwnOutputRev = wS(e.__panoOwnOutputRev);
    const n = gk(t);
    let r = "";
    for (const o of n)
      if (r = Nr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Ff(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function To(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function bk(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!qr(e, "background"))
    return To(e), null;
  const o = jo(r), a = $S(o, t, Nr);
  if (!a)
    return To(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = Ff(a, c), d = `${t.join("|")}:${f}`, v = e.__panoOwnOutputVideoCache;
  if (v != null && v.video && v.key === d) return v.failed() ? null : v.video;
  To(e);
  const y = VS({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function vk(e, t = []) {
  var v, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = A0(e, t).map((x) => n.findIndex((w) => String((w == null ? void 0 : w.name) || "") === String(x))).filter((x) => x >= 0), a = n.map((x, w) => ({ input: x, idx: w })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const x of c) {
    const w = n[x], M = e.graph ? e.getInputLink(x) : null;
    if ((M == null ? void 0 : M.origin_id) == null) continue;
    const k = M.origin_id, _ = P0(e, x, k);
    if (!_) continue;
    const F = Number(M.origin_slot ?? 0), $ = jo((_ == null ? void 0 : _.id) ?? k), X = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (X.length) {
      const R = [];
      F >= 0 && F < X.length && R.push(X[F]), R.push(...X);
      for (const Y of R.filter((G) => !Gs(G))) {
        const G = Nr(Y);
        if (G)
          return String((w == null ? void 0 : w.name) || ""), { src: `${G}&pano_src=${Cu($)}`, sourceType: "nodeOutputs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    let C = [];
    try {
      C = typeof (Dt == null ? void 0 : Dt.getNodeImageUrls) == "function" ? Dt.getNodeImageUrls(_) || [] : [];
    } catch {
      C = [];
    }
    if (Array.isArray(C) && C.length) {
      const R = [];
      F >= 0 && F < C.length && R.push(C[F]), R.push(...C);
      for (const Y of R) {
        const G = Nr(Y);
        if (G)
          return String((w == null ? void 0 : w.name) || ""), { src: G, sourceType: "appNodeImageUrls", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const V = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
    if (V.length) {
      const R = [];
      F >= 0 && F < V.length && R.push(V[F]), R.push(...V);
      for (const Y of R) {
        const G = Nr(Y);
        if (G)
          return String((w == null ? void 0 : w.name) || ""), { src: G, sourceType: "nodeImgs", inputName: String((w == null ? void 0 : w.name) || "") };
      }
    }
    const E = (v = _ == null ? void 0 : _.widgets) == null ? void 0 : v.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (E) {
      let R = Nr(E.value);
      if (R && !R.includes("/") && !R.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (R = Kt.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R)
        return String((w == null ? void 0 : w.name) || ""), { src: R, sourceType: "widget", inputName: String((w == null ? void 0 : w.name) || "") };
    }
  }
  const f = qr(e, "background") ? jo(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && d.push(...f.pano_input_images), Array.isArray((y = f == null ? void 0 : f.ui) == null ? void 0 : y.pano_input_images) && d.push(...f.ui.pano_input_images), d.length > 0)
    for (const x of d) {
      const w = Nr(x);
      if (w)
        return { src: w, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function _k(e, t = [], n = {}) {
  const r = vk(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = pk(o);
  if (!a.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return c && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const v = new Image(), y = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = o, y.pendingResolvedSrc = "", y.pendingImg = v, e.__panoLinkedInputImageCache.set(f, y);
  let x = -1;
  const w = () => {
    var k, _, F, $;
    if (x += 1, x >= a.length) {
      if (((_ = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : _.call(k, f)) === y && y.pendingImg === v && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          ($ = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || $.call(F, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const M = a[x];
    y.pendingResolvedSrc = M, v.src = M;
  };
  return v.onload = () => {
    var M, k, _;
    ((k = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : k.call(M, f)) === y && y.pendingImg === v && (y.srcRaw = o, y.resolvedSrc = String(y.pendingResolvedSrc || v.src || ""), y.img = v, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || v.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, v.onerror = (M) => {
    var k, _, F, $;
    if (x + 1 < a.length) {
      w();
      return;
    }
    if (((_ = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : _.call(k, f)) === y && y.pendingImg === v && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        ($ = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || $.call(F, f);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, w(), c && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : v;
}
function xk(e, t = [], n = null, r = {}) {
  const o = _k(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function C0(e) {
  var t, n;
  if (e) {
    Of.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, To(e), e.__panoWrappedErpCache = null;
  }
}
function wk(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, To(e), e.__panoWrappedErpCache = null;
  }
}
function I0(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ss(e, t, n = "") {
  const r = I0(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < ek ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Pp(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, f = r / a, d = Math.min(c, f);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function Sk(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), v = Math.max(Math.round(34 * n), f + Math.round(14 * n)), y = r + (a - d) * 0.5, x = o + (c - v) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, x, d, v, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, x + v * 0.5 + 0.5), e.restore();
}
function Uc(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function kk(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  if (n) {
    const o = t.find((a) => String((a == null ? void 0 : a.id) || "") === n);
    if (o) return o;
  }
  return t[0] || null;
}
function Mk(e, t) {
  return S0(e, t);
}
function Va(e, t, n, r = null) {
  var w;
  if (!String(t || "")) return null;
  let a = mk(n);
  if (!a && (r != null && r.external)) {
    if (!qr(e, "external-sticker")) return null;
    const M = jo(e == null ? void 0 : e.id), k = ((w = M == null ? void 0 : M.ui) == null ? void 0 : w.pano_sticker_input_images) || (M == null ? void 0 : M.pano_sticker_input_images) || [];
    for (const _ of Array.isArray(k) ? k : [k])
      if (a = Nr(_), a) break;
  }
  if (!a) return null;
  const c = Us(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, v = r != null && r.external ? Ff(a, d) : a, y = SS(a, f, d);
  return Of.get(e, y, v, (M, k) => {
    var _, F;
    k && (r != null && r.external && e.__panoOutputFromRun && Jr(e, "image-loaded"), (F = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null || F.call(_));
  }) || null;
}
function Nk(e, t) {
  var x, w, M, k;
  const n = Ok(e, t), r = Ek(t), o = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.groups) ? t.painting.groups : [], a = new Map(
    o.filter((_) => _ && typeof _ == "object").map((_) => [String((_ == null ? void 0 : _.actionGroupId) || (_ == null ? void 0 : _.id) || "").trim(), Number((_ == null ? void 0 : _.z_index) || 0)])
  ), c = n ? r.map((_) => {
    const F = n.getGroupDisplayCanvas(_);
    return F ? {
      id: `paint_group:${_}`,
      source: F,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${_}`,
      zIndex: Number(a.get(_) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], f = Array.isArray((w = t == null ? void 0 : t.painting) == null ? void 0 : w.raster_objects) ? t.painting.raster_objects : [];
  if (f.length === 0)
    return (k = (M = e.__panoRasterObjectSurfaceCache) == null ? void 0 : M.retain) == null || k.call(M, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = xS()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var _, F;
    return (F = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null ? void 0 : F.call(_);
  });
  const d = bS(t == null ? void 0 : t.output_preset), v = f.filter((_) => (_ == null ? void 0 : _.visible) !== !1 && String((_ == null ? void 0 : _.layerKind) || "paint") === "paint").map((_) => String((_ == null ? void 0 : _.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(v);
  const y = f.map((_) => {
    const F = e.__panoRasterObjectSurfaceCache.get(
      _,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return F ? {
      id: `raster:${String((_ == null ? void 0 : _.id) || "")}`,
      source: F.source,
      revision: F.revision,
      zIndex: Number((_ == null ? void 0 : _.z_index) || 0),
      opacity: 1,
      visible: (_ == null ? void 0 : _.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...y];
}
function Pk(e, t, n, r) {
  var a, c, f, d, v, y;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (r && Array.isArray(r.graph_mouse) && r.graph_mouse.length >= 2)
    return {
      x: Number(r.graph_mouse[0]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
      y: Number(r.graph_mouse[1]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
    };
  if (r && typeof r.convertEventToCanvasOffset == "function" && t)
    try {
      const x = r.convertEventToCanvasOffset(t);
      if (Array.isArray(x) && x.length >= 2)
        return {
          x: Number(x[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(x[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((v = e == null ? void 0 : e.pos) == null ? void 0 : v[0]) || 0),
      y: Number(t.canvasY) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[1]) || 0)
    };
  const o = Ck(e, t, r);
  return o || null;
}
function Ak(e, t) {
  var x, w;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (x = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : x.call(o), c = (t == null ? void 0 : t.ds) || ((w = Dt == null ? void 0 : Dt.canvas) == null ? void 0 : w.ds);
  if (!a || !c) return null;
  const f = Number(c.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], v = (n - Number(a.left || 0)) / f - Number(d[0] || 0), y = (r - Number(a.top || 0)) / f - Number(d[1] || 0);
  return !Number.isFinite(v) || !Number.isFinite(y) ? null : { x: v, y };
}
function Ck(e, t, n) {
  var o, a;
  const r = Ak(t, n || (Dt == null ? void 0 : Dt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function Ik(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Ok(e, t) {
  var v, y, x, w, M, k, _, F, $, X, C, V;
  const n = (y = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.paint) == null ? void 0 : y.strokes, r = (w = (x = t == null ? void 0 : t.painting) == null ? void 0 : x.mask) == null ? void 0 : w.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = Ik(e, t), f = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = mu(c), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((_ = e.__panoPreviewPaintRevision) == null ? void 0 : _.paint) !== d.paint || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== d.mask || (($ = e.__panoPreviewPaintRevision) == null ? void 0 : $.groups) !== d.groups || ((X = e.__panoPreviewPaintRevision) == null ? void 0 : X.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((C = t == null ? void 0 : t.painting) == null ? void 0 : C.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Ek(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Fk(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Tk(e, t, n) {
  const r = Nf(t, n);
  r.visible && Mf(e, r.boundaryEdges, { selected: !1 });
}
function Dk(e, t, n) {
  const r = Nf(t, n);
  r.visible && (e.save(), Mf(e, r.boundaryEdges, { selected: !0 }), h0(e, r, { accent: dS(t) }), e.restore());
}
function Lu(e, t, n) {
  return Gg(fl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Ap(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: zo({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let f;
    if (t.version === 2)
      f = Va(e, c.id, Dg(c.source), { external: c.source.kind === "port" });
    else {
      const v = c.type === "external_image" || c.source_kind === "external_image", y = String(c.asset_id || "") || (v ? String(c.id || "") : "");
      f = Va(e, y, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: v });
    }
    return bl(f) ? { media: f, revision: Np(f) } : null;
  }, o = Nk(e, t).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: bl(n) ? { media: n, revision: Np(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Kg(e.__panoSurfaceScene.sceneState, $a, t.stickers, { media: r, paintLayers: o })
  };
}
function Lk(e, t, n) {
  var V, E, R, Y, G, we, T;
  const r = String(e.__panoPreviewMode || "stickers");
  I0(e, r);
  const o = Xn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (R = (E = (V = e.__panoCutoutNodeSurface) == null ? void 0 : V.session) == null ? void 0 : E.refresh) == null || R.call(E)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (we = (G = (Y = e.__panoStickersNodeSurface) == null ? void 0 : Y.session) == null ? void 0 : G.refresh) == null || we.call(G));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), f = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== f) && (t.width = c, t.height = f);
  const v = { x: 0, y: 0, w: c, h: f };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, f);
  const y = bk(
    e,
    ["pano_input_videos"],
    () => {
      var O, J;
      return (J = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : J.call(O);
    }
  ) || xk(
    e,
    qi,
    () => {
      var O, J;
      return (J = (O = e.__panoDomPreview) == null ? void 0 : O.requestDraw) == null ? void 0 : J.call(O);
    },
    { preserveReadyWhilePending: !1 }
  ), x = bl(y);
  let w = null;
  const M = (O, J) => {
    w || (w = Ap(e, o, y));
    const z = n.render({ width: O.w, height: O.h, camera: J, ...w });
    return z && d.drawImage(z.canvas, z.x, z.y, z.width, z.height, O.x, O.y, O.w, O.h), !!z;
  };
  if (r === "cutout") {
    const O = kk(o), J = Fk(y), z = O ? Z(ni(O).aspect, 0.1, 10) : x ? Z(Number(J.width / J.height), 0.05, 20) : 1, B = _f(v, z);
    e.__panoCutoutNodeFrame = B;
    let q = "none";
    const me = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (O)
      if (y && !x)
        q = "loading";
      else if (x) {
        const se = Tw({ width: c, height: f }, B, O);
        [
          !se.fallback || M(se.fallback.rect, zs(se.fallback.shot)),
          M(se.rect, zs(se.shot)),
          !se.fallback || M(B, zs(O))
        ].every(Boolean) || (q = "loading");
      } else
        q = "empty";
    else {
      const se = e.__panoLastCutoutShot;
      se ? (e.__panoPreviewView = Jg(se, { width: c, height: f }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), x ? M(v, fl(e.__panoPreviewView, c, f)) || (q = "loading") : y ? q = "loading" : q = "empty";
    }
    x || n.release(), n.failed && q === "loading" && (q = "none"), O && (e.__panoLastCutoutShot = { ...O }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, f), d.rect(B.x, B.y, B.w, B.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(B.x + 0.5, B.y + 0.5, Math.max(0, B.w - 1), Math.max(0, B.h - 1)), d.restore()), q === "loading" ? (Uc(e, !1), Ss(e, !0, me)) : q === "empty" ? (Uc(e, !0), Ss(e, !1, "")) : (Uc(e, !1), Ss(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!y || x) && (w = Ap(e, o, y), !w.background && !w.layers.length ? (n.release(), k = !0) : k = M(v, fl(e.__panoPreviewView, c, f)));
  const _ = !k && !n.failed;
  Ss(e, _, _ ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), _ && Sk(d, v, Pp(t, v));
  const F = Lu(e, c, f);
  !y && k && Rk(d, F, Pp(t, v));
  const $ = String(((T = o == null ? void 0 : o.active) == null ? void 0 : T.selected_sticker_id) || ""), X = Nu(o), C = k ? X.find((O) => String((O == null ? void 0 : O.id) || "") === $ && (O == null ? void 0 : O.visible) !== !1) : null;
  k && X.filter((O) => O !== C && (O == null ? void 0 : O.visible) !== !1 && (O.external || O.source_kind === "external_image")).filter((O) => !bl(Va(e, O.id, null, { external: !0 }))).forEach((O) => Tk(d, O, F)), C && Dk(d, C, F);
}
function Cp(e, t, n, r, o = 1) {
  let a = !1;
  e.strokeStyle = r, e.lineWidth = o, e.beginPath();
  for (const c of t) {
    const f = n.project(c);
    if (f.z <= 1e-4) {
      a = !1;
      continue;
    }
    a ? e.lineTo(f.x, f.y) : (e.moveTo(f.x, f.y), a = !0);
  }
  e.stroke();
}
function Rk(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let f = -75; f <= 75; f += 15) {
    const d = [];
    for (let v = -180; v <= 180; v += 4) d.push(Ln(v, f));
    Cp(e, d, t, f === 0 ? o : r, f === 0 ? 1.5 : 1);
  }
  for (let f = -180; f <= 180; f += 15) {
    const d = [];
    for (let v = -89; v <= 89; v += 4) d.push(Ln(f, v));
    Cp(e, d, t, r, f % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: Ln(0, 0) },
    { name: "Right", dir: Ln(90, 0) },
    { name: "Back", dir: Ln(180, 0) },
    { name: "Left", dir: Ln(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const c = Math.max(9, Math.round(11 * n));
  e.font = `500 ${c}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((f) => {
    const d = t.project(f.dir);
    d.z > 1e-4 && e.fillText(f.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function Ru(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function $k(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function Wn(e, t) {
  return $k(e, t) ? !1 : (Ru(e), !0);
}
function Ip() {
  var n;
  const e = (n = Dt == null ? void 0 : Dt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Vk(e) {
  var n;
  if (!e) return;
  const t = (n = Dt == null ? void 0 : Dt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function zk(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !k0(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function jk(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Op(e, t = null, n = 0, r = 0, o = !0) {
  const a = Math.max(0, Number(r || 0));
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(a, Math.max(0, Number(n || 0))) : a;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return e != null && e.__panoBootMinHeightActive ? Math.max(a, Math.max(0, Number(n || 0))) : a > 0 ? a : "auto";
    },
    afterResize() {
      e.__panoUserResized = !0, t == null || t(), o && Hk(e, 180, t);
    }
  };
}
function Hk(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function xa(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const Gk = /* @__PURE__ */ new WeakMap();
function O0(e, t) {
  return _0(Gk, e, t) ? !1 : (yk(e, t), C0(e), xa(e), !0);
}
async function Kk(e) {
  var n, r;
  const t = await DS(e, Dt, Kt);
  t && (O0(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function Bk(e, t = {}) {
  var Lr;
  const n = t.__allowStandalone === !0, r = M0(e);
  if (r && !n) {
    Ef(e);
    return;
  }
  r && zk(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: kp(e)
  }, f = "dom", d = c.signature || kp(e);
  if (Number(e.__panoRebindGeneration || 0), Tu(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Fu(e), e.__panoFrontendSig = d, e.__panoStickersPath = f, (Lr = e.__panoDomPreview) != null && Lr.widget || (e.__panoLegacyPreviewHooked && Bs(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const v = t.noPreview === !0, y = v ? 0 : 56, x = v ? 0 : Iw, w = document.createElement("div");
  if (nk(), w.className = "pano-node-preview-dom", w.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), v && w.classList.add("pano-node-preview--no-preview"), w.setAttribute("data-capture-wheel", "true"), w.tabIndex = 0, w.style.cssText = [
    "width:100%",
    v ? "height:auto" : "height:100%",
    x > 0 ? `min-height:${x}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), v) {
    const H = ml(Ou(
      e.addDOMWidget(Eu(), "preview", w, Op(e, null))
    ));
    xa(e), e.__panoDomPreview = { widget: H, root: w, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const M = document.createElement("div");
  M.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const k = document.createElement("canvas");
  k.style.cssText = [
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
  const _ = document.createElement("div");
  _.style.cssText = [
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
  ].join(";"), _.textContent = "Connect ERP image", M.appendChild(k), M.appendChild(_), w.appendChild(M);
  const F = rg(w), $ = document.createElement("div");
  $ && ($.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", $.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", w.appendChild($)), rk(e, 120, 120), xa(e);
  let X = null;
  try {
    jk(e, y, () => {
      var H, _e;
      return (_e = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : _e.call(H);
    }), X = ml(Ou(e.addDOMWidget(
      Eu(),
      "preview",
      w,
      Op(
        e,
        () => {
          var H, _e;
          return (_e = (H = e.__panoDomPreview) == null ? void 0 : H.requestDraw) == null ? void 0 : _e.call(H);
        },
        y,
        x,
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
  }, V = () => {
    C.destroyed || (C.needsDraw = !0, !C.inTick && !C.raf && (C.raf = requestAnimationFrame(Ct)));
  }, E = Ug(V), R = /* @__PURE__ */ Go(o ? { ...d0(Xn(e)), importing: !1, dropActive: !1, viewUnavailable: !1 } : {
    ...Xg(Xn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((H) => ({ value: H, label: H }))
  });
  let Y = null;
  const G = (o ? fS : Lw)({
    readState: () => Xn(e),
    publishLiveState: (H) => {
      H ? (Y = H, e.__panoLiveStateOverride = H) : (e.__panoLiveStateOverride === Y && (e.__panoLiveStateOverride = null), Y = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, V();
    },
    commitState: (H) => {
      var Fe, je, Le, tt;
      const _e = Fo(e, "state_json");
      if (!_e) return;
      $g(e, H.active);
      const Te = Vg(e, H);
      zg(e, Te, String(_e.value ?? "")) || (_e.value = Te, (Fe = _e.callback) == null || Fe.call(_e, Te), e.__panoStateCache = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (tt = (Le = e.graph) == null ? void 0 : Le.setDirtyCanvas) == null || tt.call(Le, !0, !0));
    },
    onChange: (H) => Object.assign(R, H)
  }), T = o ? x0(e, (H = "sync", _e = null) => {
    var sn;
    if (!o || !e.graph || !G || G.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const ln = qr(e, "external-sticker"), wi = Xn(e).stickers.find((Rt) => Rt.source.kind === "port");
      return G.apply({
        type: "sync-port",
        value: u0(e, {
          pose: ln ? Us(e, "pano_sticker_input_pose", _e) : null,
          image: wi ? Va(e, wi.id, null, { external: !0 }) : null
        })
      });
    }
    const Te = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((ln) => String((ln == null ? void 0 : ln.name) || "") === "sticker_image") : -1, Fe = Te >= 0 ? ((sn = e.getInputLink(Te)) == null ? void 0 : sn.id) ?? null : null;
    if (Fe == null)
      return G.apply({ type: "sync-external", value: { connected: !1 } });
    if (!qr(e, "external-sticker")) return !1;
    const je = Us(e, "pano_sticker_input_pose", _e), Le = Array.isArray(je) ? je[0] : je, tt = String(Us(e, "pano_sticker_input_state_hash", _e) ?? ""), jt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Lt = Xn(e), dn = (Array.isArray(Lt == null ? void 0 : Lt.stickers) ? Lt.stickers : []).find((ln) => String((ln == null ? void 0 : ln.id) || "") === "sticker_image_1"), tn = Va(e, "sticker_image_1", null, { external: !0 }), ii = Le && typeof Le == "object" ? Le : dn || { yaw_deg: jt.yaw, pitch_deg: jt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return G.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: tt,
        pose: ii,
        imageWidth: Number((tn == null ? void 0 : tn.naturalWidth) || (tn == null ? void 0 : tn.width) || 0),
        imageHeight: Number((tn == null ? void 0 : tn.naturalHeight) || (tn == null ? void 0 : tn.height) || 0)
      }
    });
  }) : () => {
  };
  let O = 0;
  const J = async (H) => {
    if (!o || !G || !Ar(H)) return !1;
    const _e = `asset_${Math.random().toString(16).slice(2, 10)}`, Te = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    O += 1, R.importing = !0;
    const je = va(e, `add:${_e}`, async () => {
      const Le = await _a(H), tt = await Li(H, {
        fetchApi: (jt, Lt) => Kt.fetchApi(jt, Lt)
      });
      return I(), G.apply({
        type: "add-sticker",
        value: {
          stickerId: Te,
          assetId: _e,
          asset: tt,
          imageWidth: Le.width,
          imageHeight: Le.height,
          yaw_deg: Number(Fe.yaw || 0),
          pitch_deg: Number(Fe.pitch || 0)
        }
      });
    });
    try {
      return await je;
    } catch {
      return !1;
    } finally {
      O = Math.max(0, O - 1), R.importing = O > 0, V();
    }
  };
  let z = null, B = null, q = null, me = !1;
  const se = () => {
    var H;
    return q && (clearTimeout(q), q = null), me ? (me = !1, ((H = G == null ? void 0 : G.commitGesture) == null ? void 0 : H.call(G)) ?? !1) : !1;
  }, I = () => {
    var Fe, je, Le;
    const H = se(), _e = (z == null ? void 0 : z.pointerId) ?? (B == null ? void 0 : B.pointerId);
    if (z = null, B = null, _e != null) {
      try {
        (Fe = k.hasPointerCapture) != null && Fe.call(k, _e) && ((je = k.releasePointerCapture) == null || je.call(k, _e));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Te = ((Le = G == null ? void 0 : G.commitGesture) == null ? void 0 : Le.call(G)) ?? !1;
    return H || Te;
  }, Ve = () => {
    var Fe, je, Le;
    const H = se(), _e = z == null ? void 0 : z.pointerId;
    if (z = null, _e != null) {
      try {
        (Fe = k.hasPointerCapture) != null && Fe.call(k, _e) && ((je = k.releasePointerCapture) == null || je.call(k, _e));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Te = ((Le = G == null ? void 0 : G.cancelGesture) == null ? void 0 : Le.call(G)) ?? !1;
    return H || Te;
  }, K = () => I();
  G && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(K));
  let Ne = null, $e = !1;
  if ($ && G)
    try {
      Pf(), Ne = af(o ? sS : eS, {
        model: R,
        onAction: (H) => {
          var Fe, je;
          if ((H == null ? void 0 : H.type) === "open-editor") {
            I(), o || (R.aspectOpen = !1), (Fe = e.__panoOpenEditor) == null || Fe.call(e);
            return;
          }
          if (o) {
            if ((H == null ? void 0 : H.type) === "add-image-file") {
              J(H.file);
              return;
            }
            G.apply(H) && V();
            return;
          }
          if ((H == null ? void 0 : H.type) === "toggle-aspect") {
            R.aspectOpen = !R.aspectOpen;
            return;
          }
          if ((H == null ? void 0 : H.type) === "close-aspect") {
            R.aspectOpen = !1;
            return;
          }
          let _e = H;
          if ((H == null ? void 0 : H.type) === "add-frame") {
            const Le = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            _e = {
              ...H,
              ...Ew(Le, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((H == null ? void 0 : H.type) === "delete-frame") {
            const Le = Yi(Xn(e));
            Le && (e.__panoPreviewView = Jg(Le, {
              width: k.width,
              height: k.height
            }));
          }
          const Te = ((je = e.__panoCutoutNodeFrame) == null ? void 0 : je.safeRect) || null;
          R.aspectOpen = !1, G.apply({ ..._e, safeRect: Te }) && V();
        }
      }), Ne.mount($), $e = !0;
    } catch {
      Ne = null, $e = !1;
    }
  const Ze = typeof ResizeObserver < "u" ? new ResizeObserver(V) : null;
  Ze == null || Ze.observe(M);
  const Ct = (H) => {
    var Te, Fe;
    C.raf = 0, C.inTick = !0;
    let _e = !1;
    try {
      _e = Ke.stepInertia(H), (C.needsDraw || _e) && (C.needsDraw = !1, (Te = e.flags) != null && Te.collapsed || Lk(e, k, E), R.viewUnavailable = E.failed);
    } finally {
      C.inTick = !1;
    }
    (_e || C.needsDraw) && !C.raf && (C.raf = requestAnimationFrame(Ct)), tk() && (!e.__panoDebugLastTs || H - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = H, e.__panoPreviewMode, Fu(e), pa(w), pa(M), pa(k), pa(w.parentElement), pa((Fe = w.parentElement) == null ? void 0 : Fe.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, Ke = ff({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (H) => {
      e.__panoPreviewView = H;
    },
    getViewportSize: () => {
      const H = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(H.width || k.clientWidth || 0)),
        h: Math.max(1, Number(H.height || k.clientHeight || 0))
      };
    },
    getInvert: () => {
      const H = Sp();
      return {
        x: H.invert_view_x ? -1 : 1,
        y: H.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      V();
    }
  }), It = o ? M : w, fn = (H) => {
    const _e = k.getBoundingClientRect();
    return {
      x: (Number(H.clientX) - _e.left) * (k.width / Math.max(1, _e.width)),
      y: (Number(H.clientY) - _e.top) * (k.height / Math.max(1, _e.height))
    };
  }, hr = (H) => {
    var Fe, je;
    if (!o || !a) return;
    const _e = Xn(e), Te = gp(
      Nu(_e),
      String(((Fe = _e == null ? void 0 : _e.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      fn(H),
      Lu(e, k.width, k.height)
    );
    if (!Te) {
      k.style.cursor = "grab";
      return;
    }
    if (((je = Te.item) == null ? void 0 : je.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = Te.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (H) => {
    var tt, jt, Lt, dn, tn, ii, Ji, sn, ln, wi, Rt;
    if (!Wn(H, It) || H.button !== 0) return;
    if (!o) {
      const Cn = Yi(Xn(e)), $n = e.__panoCutoutNodeFrame;
      if (!Cn) {
        (tt = w.focus) == null || tt.call(w, { preventScroll: !0 }), (jt = k.setPointerCapture) == null || jt.call(k, H.pointerId), k.style.cursor = "grabbing", Ke.startDrag(H.clientX, H.clientY, H.pointerId);
        return;
      }
      if (Cn.locked === !0 || !$n || !G) return;
      const pr = fn(H);
      let Si;
      if (H.shiftKey) {
        const hn = Qg({
          frame: $n,
          point: pr,
          startRollDeg: Number(Cn.roll_deg ?? Cn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!hn) return;
        Si = { kind: "roll", pointerId: H.pointerId, rollGesture: hn };
      } else {
        const hn = ((Lt = Xn(e)) == null ? void 0 : Lt.ui_settings) || Sp();
        Si = {
          kind: "pan",
          pointerId: H.pointerId,
          startPoint: pr,
          startShot: { ...Cn },
          focalPx: Bi($n, Cn),
          invertX: hn.invert_view_x === !0,
          invertY: hn.invert_view_y === !0
        };
      }
      I(), (dn = w.focus) == null || dn.call(w, { preventScroll: !0 }), (tn = k.setPointerCapture) == null || tn.call(k, H.pointerId), k.style.cursor = "grabbing", G.beginGesture(), z = Si;
      return;
    }
    if (!a) return;
    const _e = fn(H), Te = Xn(e), Fe = String(((ii = Te == null ? void 0 : Te.active) == null ? void 0 : ii.selected_sticker_id) || ""), je = Lu(e, k.width, k.height), Le = gp(Nu(Te), Fe, _e, je);
    if ((Ji = w.focus) == null || Ji.call(w, { preventScroll: !0 }), Le && G) {
      if (Ke.stopMotion(), I(), String(((sn = Le.item) == null ? void 0 : sn.id) || "") !== Fe && G.apply({ type: "select-sticker", id: Le.item.id }), ((ln = Le.item) == null ? void 0 : ln.locked) === !0) {
        V();
        return;
      }
      const Cn = _e, $n = Le.geometry.center;
      B = {
        active: !0,
        kind: Le.hit.kind,
        pointerId: H.pointerId,
        startPoint: Cn,
        startCenter: { ...$n },
        startSticker: { ...Le.item },
        startDistance: Math.max(1, Math.hypot(Cn.x - $n.x, Cn.y - $n.y)),
        startAngle: Math.atan2(Cn.y - $n.y, Cn.x - $n.x),
        projection: je
      }, G.beginGesture(), (wi = k.setPointerCapture) == null || wi.call(k, H.pointerId), k.style.cursor = Le.hit.kind === "rotate" ? "grabbing" : Le.hit.kind === "move" ? "move" : Le.hit.cursor, V();
      return;
    }
    (Rt = k.setPointerCapture) == null || Rt.call(k, H.pointerId), k.style.cursor = "grabbing", Ke.startDrag(H.clientX, H.clientY, H.pointerId);
  }), k.addEventListener("pointermove", (H) => {
    if (!o) {
      if (!z) {
        if (!Ke.state.drag.active) return;
        Wn(H, It), Ke.moveDrag(H.clientX, H.clientY, "pano");
        return;
      }
      if (z.pointerId !== H.pointerId || !G) return;
      if (Wn(H, It), z.kind === "pan") {
        const Te = fn(H);
        G.updateGesture({
          type: "pan-camera",
          startShot: z.startShot,
          dx: Te.x - z.startPoint.x,
          dy: Te.y - z.startPoint.y,
          focalPx: z.focalPx,
          invertX: z.invertX,
          invertY: z.invertY
        });
        return;
      }
      const _e = e0(z.rollGesture, fn(H), H);
      if (!_e) return;
      z.rollGesture = _e.gesture, G.updateGesture({ type: "set-roll", value: _e.rollDeg });
      return;
    }
    if (!B && !Ke.state.drag.active) {
      hr(H);
      return;
    }
    if (B) {
      if (B.pointerId !== H.pointerId || !G) return;
      Wn(H, It);
      const _e = fn(H);
      let Te = B.startSticker;
      if (B.kind === "move")
        Te = mS(
          B.startSticker,
          {
            x: B.startCenter.x + _e.x - B.startPoint.x,
            y: B.startCenter.y + _e.y - B.startPoint.y
          },
          B.projection
        );
      else if (B.kind === "scale") {
        const Fe = Math.hypot(_e.x - B.startCenter.x, _e.y - B.startCenter.y);
        Te = gS(B.startSticker, B.startDistance, Fe);
      } else if (B.kind === "rotate") {
        const Fe = Math.atan2(_e.y - B.startCenter.y, _e.x - B.startCenter.x);
        Te = yS(B.startSticker, B.startAngle, Fe, H.shiftKey === !0);
      }
      G.updateGesture({ type: "set-transform", value: Te }), V();
      return;
    }
    !a || !Ke.state.drag.active || (Wn(H, It), Ke.moveDrag(H.clientX, H.clientY, "pano"));
  });
  const nr = () => {
    var _e, Te;
    if (!z && !B) {
      if (!Ke.state.drag.active) return;
      Ke.endDrag(), k.style.cursor = "grab", V();
      return;
    }
    if (!G) return;
    const H = (z == null ? void 0 : z.pointerId) ?? (B == null ? void 0 : B.pointerId);
    z = null, B = null;
    try {
      (_e = k.hasPointerCapture) != null && _e.call(k, H) && ((Te = k.releasePointerCapture) == null || Te.call(k, H));
    } catch {
    }
    G.cancelGesture(), k.style.cursor = "grab", V();
  }, An = (H, _e = !1) => {
    var Te, Fe, je, Le;
    if (!o) {
      if (!z) {
        if (!Ke.state.drag.active) return;
        Wn(H, It), (Te = k.releasePointerCapture) == null || Te.call(k, H.pointerId), k.style.cursor = "grab", Ke.endDrag(), V();
        return;
      }
      if (z.pointerId !== H.pointerId || !G) return;
      Wn(H, It), z = null, (Fe = k.releasePointerCapture) == null || Fe.call(k, H.pointerId), k.style.cursor = "grab", _e ? G.cancelGesture() : G.commitGesture(), hr(H), V();
      return;
    }
    if (B) {
      if (B.pointerId !== H.pointerId || !G) return;
      Wn(H, It), B = null, (je = k.releasePointerCapture) == null || je.call(k, H.pointerId), k.style.cursor = "grab", _e ? G.cancelGesture() : G.commitGesture(), V();
      return;
    }
    !a || !Ke.state.drag.active || (Wn(H, It), (Le = k.releasePointerCapture) == null || Le.call(k, H.pointerId), k.style.cursor = "grab", Ke.endDrag(), V());
  };
  k.addEventListener("pointerup", An), k.addEventListener("pointercancel", (H) => An(H, !0)), k.addEventListener("lostpointercapture", nr), k.addEventListener("pointerleave", (H) => {
    !o && z || B || Ke.state.drag.active && An(H);
  });
  const Rn = (H) => {
    const _e = document.activeElement;
    if (_e !== w && !w.contains(_e)) return;
    if (H.key === "Escape" && (z || B) && G) {
      nr(), Ru(H);
      return;
    }
    if (!o || H.key !== "Delete" && H.key !== "Backspace" || !G) return;
    const Te = H.target, Fe = String((Te == null ? void 0 : Te.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || Te != null && Te.isContentEditable || R.canDelete === !0 && (I(), G.apply({ type: "delete-selected" }) && V(), Ru(H));
  };
  window.addEventListener("keydown", Rn, !0);
  const D = ZS({
    requestFrame: (H) => requestAnimationFrame(H),
    cancelFrame: (H) => cancelAnimationFrame(H),
    restore: (H) => Vk(H)
  }), j = (H) => {
    var Te, Fe, je, Le, tt, jt;
    if (!Wn(H, It)) return;
    if (!o) {
      const Lt = Yi(Xn(e));
      if (Lt && Lt.locked !== !0 && G) {
        const dn = uf(H);
        dn !== 0 && (me || (I(), G.beginGesture(), me = !0), G.updateGesture({
          type: "step-fov",
          direction: dn
        }) ? (q && clearTimeout(q), q = setTimeout(se, 180), V()) : G.hasGestureChanges() || (G.cancelGesture(), me = !1));
      } else if (!Lt) {
        const dn = Ip();
        Ke.applyWheelEvent(H) && V(), D.schedule(dn);
      }
      (Te = H.preventDefault) == null || Te.call(H), (Fe = H.stopPropagation) == null || Fe.call(H), (je = H.stopImmediatePropagation) == null || je.call(H);
      return;
    }
    if (!a) return;
    const _e = Ip();
    Ke.applyWheelEvent(H) && V(), (Le = H.preventDefault) == null || Le.call(H), (tt = H.stopPropagation) == null || tt.call(H), (jt = H.stopImmediatePropagation) == null || jt.call(H), D.schedule(_e);
  }, ee = o ? [M, k] : [M];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((H) => {
    ee.forEach((_e) => _e.addEventListener(H, j, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((H) => {
    k.addEventListener(H, (_e) => Wn(_e, It)), M.addEventListener(H, (_e) => Wn(_e, It));
  });
  const le = Fo(e, "state_json");
  let ue = null, fe = null;
  le && !le.__panoPreviewPatchedCb && (ue = le.callback, fe = (H) => {
    const _e = ue ? ue(H) : void 0;
    return V(), _e;
  }, le.callback = fe, le.__panoPreviewPatchedCb = fe);
  const ve = Fo(e, "bg_color");
  let ke = null, Se = null;
  ve && !ve.__panoPreviewPatchedCb && (ke = ve.callback, Se = (H) => {
    const _e = ke ? ke(H) : void 0;
    return V(), _e;
  }, ve.callback = Se, ve.__panoPreviewPatchedCb = Se);
  const ge = e.onRemoved, Re = e.onResize, Ae = e.onExecuted, De = e.onDragOver, p = e.onDragDrop;
  let Pe = null;
  const st = () => {
    o && (R.dropActive = !0, Pe && clearTimeout(Pe), Pe = setTimeout(() => {
      Pe = null, R.dropActive = !1;
    }, 140));
  }, Xe = o ? function(H) {
    return (De ? De.apply(this, arguments) : !1) === !0 ? !0 : If(H == null ? void 0 : H.dataTransfer) ? (st(), !0) : !1;
  } : null, wt = o ? function(H) {
    var Fe;
    if ((p ? p.apply(this, arguments) : !1) === !0) return !0;
    const Te = Array.from(((Fe = H == null ? void 0 : H.dataTransfer) == null ? void 0 : Fe.files) || []).find((je) => Ar(je));
    return Te ? (Pe && clearTimeout(Pe), Pe = null, R.dropActive = !1, J(Te), !0) : !1;
  } : null;
  o && (e.onDragOver = Xe, e.onDragDrop = wt);
  const Ot = o ? JS(w, {
    onActive: (H) => {
      if (H) {
        st();
        return;
      }
      Pe && clearTimeout(Pe), Pe = null, R.dropActive = !1;
    },
    onDrop: (H) => {
      J(H);
    }
  }) : () => {
  }, en = function(H) {
    e.__panoOutputFromRun = !0;
    const _e = O0(e, H);
    Jr(e, _e ? "executed" : "sync", H), V();
    const Te = Ae ? Ae.apply(this, arguments) : void 0;
    return xa(e), Te;
  };
  e.onExecuted = en;
  const pt = e.onConnectionsChange, Ce = function(H, _e) {
    const Te = yp(e, H, _e, Af), Fe = yp(e, H, _e, qi), je = arguments, Le = pt ? pt.apply(this, je) : void 0, tt = () => {
      C.destroyed || (Fe && wk(e), Te && Jr(e, "connection-change"), xa(e), V());
    };
    return tt(), queueMicrotask(tt), Le;
  };
  e.onConnectionsChange = Ce;
  const Bn = function() {
    const H = Re ? Re.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, V(), H;
  };
  e.onResize = Bn;
  const Ut = function() {
    return an(), Du.unregister(this), ge ? ge.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ut;
  const an = () => {
    var H, _e, Te, Fe, je, Le, tt, jt, Lt;
    C.destroyed = !0, (H = Ze == null ? void 0 : Ze.disconnect) == null || H.call(Ze), o ? I() : Ve(), k.removeEventListener("lostpointercapture", nr), Ot(), F(), window.removeEventListener("keydown", Rn, !0), (Te = (_e = e.__panoStateFlushers) == null ? void 0 : _e.delete) == null || Te.call(_e, K), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Fe = G == null ? void 0 : G.destroy) == null || Fe.call(G), (je = Ne == null ? void 0 : Ne.unmount) == null || je.call(Ne), E.dispose(), e.__panoSurfaceScene = null, (tt = (Le = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Le.dispose) == null || tt.call(Le), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, T(), D.dispose(), Pe && clearTimeout(Pe), Pe = null, Of.disposeOwner(e), To(e), C.raf && cancelAnimationFrame(C.raf), C.raf = 0, ((jt = e.__panoCutoutNodeSurface) == null ? void 0 : jt.session) === G && (e.__panoCutoutNodeSurface = null), ((Lt = e.__panoStickersNodeSurface) == null ? void 0 : Lt.session) === G && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Bn && (e.onResize = Re), e.onExecuted === en && (e.onExecuted = Ae), e.onConnectionsChange === Ce && (e.onConnectionsChange = pt), fe && (le == null ? void 0 : le.callback) === fe && (le.callback = ue), fe && (le == null ? void 0 : le.__panoPreviewPatchedCb) === fe && delete le.__panoPreviewPatchedCb, Se && (ve == null ? void 0 : ve.callback) === Se && (ve.callback = ke), Se && (ve == null ? void 0 : ve.__panoPreviewPatchedCb) === Se && delete ve.__panoPreviewPatchedCb, e.onDragOver === Xe && (e.onDragOver = De), e.onDragDrop === wt && (e.onDragDrop = p), e.onRemoved === Ut && (e.onRemoved = ge);
  };
  e.__panoDomRestore = an, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = G && $e && !o ? { session: G, model: R } : null, e.__panoStickersNodeSurface = G && $e && o ? { session: G, model: R } : null, e.__panoDomPreview = {
    widget: X,
    root: w,
    canvas: k,
    requestDraw: V,
    state: C,
    emptyHintEl: _,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Du.register(e), e.graph && Jr(e, "attach"), V();
}
function Ep(e, t = {}) {
  N0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Fp(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (M0(e) && !n) {
    Ef(e);
    return;
  }
  N0(e).attach(t);
}
function Uk(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Wk(e, t = 1, n = ap) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), f = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, v = Number(n), y = Number.isFinite(v) && v > 0 ? v : ap, x = Math.max(f, d), w = x > 0 ? Math.min(1, y / x) : 1;
  return {
    width: Math.max(1, Math.round(f * w)),
    height: Math.max(1, Math.round(d * w))
  };
}
function Yk({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var M;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let c = !1, f = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, v = () => {
    const k = d();
    return k === f || (f = k, o(k)), k;
  }, y = () => v();
  return (M = t == null ? void 0 : t.addEventListener) == null || M.call(t, "fullscreenchange", y), v(), { toggle: async () => {
    var k;
    if (c || !e || !t) return !1;
    if (d()) {
      try {
        await ((k = t.exitFullscreen) == null ? void 0 : k.call(t));
      } catch {
      }
      return c ? !1 : (v(), d());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), c) return !1;
        if (d())
          return v(), !0;
      } catch {
      }
    return c || (a(), v()), !1;
  }, isActive: d, destroy: () => {
    var k, _, F;
    if (!c) {
      if (c = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", y), d())
        try {
          const $ = (_ = t.exitFullscreen) == null ? void 0 : _.call(t);
          (F = $ == null ? void 0 : $.catch) == null || F.call($, () => {
          });
        } catch {
        }
      f = !1, o(!1);
    }
  } };
}
const Xk = { class: "pano-preview-node-surface" }, qk = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ae(), ce("div", Xk, [
      Ee(rn, {
        icon: e.model.fullscreen ? rt(Me).fullscreen_close : rt(Me).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: r[0] || (r[0] = (o) => {
          var a;
          return (a = t.onAction) == null ? void 0 : a.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? (ae(), Dr(xf, { key: 0 })) : ct("", !0)
    ]));
  }
}, ks = 140, Jk = 180, Tp = 40, Wc = 10;
function Dp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Lp(e, t) {
  const n = Dp(e), r = Dp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Rp(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t);
  const r = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  n.set("type", r), e.subfolder && n.set("subfolder", String(e.subfolder));
  const o = `/view?${n.toString()}`;
  return typeof ((a = Kt) == null ? void 0 : a.apiURL) == "function" ? Kt.apiURL(o) : o;
}
function Do(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Do(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Rp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Do(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Rp(e);
}
function E0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Zk(e) {
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
function $u(e) {
  var o;
  const t = (o = Cr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Lp(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (Lp(a, n)) return t[a];
  return null;
}
function Qk(e) {
  var r, o;
  const t = $u(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const f = Do(c);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function eM(e, t = "erp_image") {
  var M, k, _, F, $, X, C;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((V) => String((V == null ? void 0 : V.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((V, E) => String((V == null ? void 0 : V.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(E))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (_ = (k = (M = Cr) == null ? void 0 : M.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : _.call(k, a), f = $u(a), d = $u(e == null ? void 0 : e.id), v = [
    (F = d == null ? void 0 : d.ui) == null ? void 0 : F.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    f == null ? void 0 : f.images,
    ($ = f == null ? void 0 : f.ui) == null ? void 0 : $.pano_input_images,
    f == null ? void 0 : f.pano_input_images
  ];
  for (const V of v)
    if (Array.isArray(V))
      for (const E of V) {
        const R = Do(E);
        if (R) return R;
      }
  let y = [];
  try {
    y = typeof ((X = Cr) == null ? void 0 : X.getNodeImageUrls) == "function" ? Cr.getNodeImageUrls(c) || [] : [];
  } catch {
    y = [];
  }
  if (Array.isArray(y) && y.length > 0)
    for (const V of y) {
      const E = Do(V);
      if (E) return E;
    }
  if (c) {
    const V = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const E of V) {
      const R = Do(E);
      if (R) return R;
    }
  }
  const x = (C = c == null ? void 0 : c.widgets) == null ? void 0 : C.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image"), w = String((x == null ? void 0 : x.value) || "").trim();
  return w ? Kt.apiURL(`/view?filename=${encodeURIComponent(w)}&type=input&subfolder=`) : "";
}
function Yc(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function $p(e, t, n, r, o, a, c) {
  var v, y, x;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !E0(a) || n <= 1 || r <= 1) {
    Yc(t, n, r);
    return;
  }
  if (c.failed) {
    Yc(t, n, r);
    return;
  }
  const f = Number(((x = (y = (v = e == null ? void 0 : e.widgets) == null ? void 0 : v.find) == null ? void 0 : y.call(v, (w) => (w == null ? void 0 : w.name) === "coverage")) == null ? void 0 : x.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: fl(o, n, r),
    background: { media: a, revision: Zk(a), coverage: f },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : Yc(t, n, r);
}
function Vp(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class tM {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Ug(() => this.requestDraw()), this.controller = ff({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Gt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Z(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Z(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, a, c, f;
        const r = (a = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : a.call(o);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((c = this.canvas) == null ? void 0 : c.clientWidth) || 0)),
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
    var r, o, a;
    const t = this;
    this.node.onExecuted = function() {
      const c = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), c;
    }, this.node.onConnectionsChange = function() {
      const c = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), c;
    }, this.node.onResize = function() {
      const c = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), c;
    }, this.node.onRemoved = function() {
      const c = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), c;
    };
    const n = ((a = (o = (r = this.node) == null ? void 0 : r.widgets) == null ? void 0 : o.find) == null ? void 0 : a.call(o, (c) => (c == null ? void 0 : c.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...c) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...c) : void 0;
      return t.requestDraw(), f;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var a;
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (a = this.flags) != null && a.collapsed || !t.errorText) return r;
      const o = t.getLegacyPreviewRect();
      return n.save(), n.fillStyle = "rgba(18,18,22,0.92)", n.strokeStyle = "rgba(82,82,89,1)", n.lineWidth = 1, n.beginPath(), n.roundRect(o.x, o.y, o.w, o.h, 8), n.fill(), n.stroke(), n.fillStyle = "rgba(236,236,242,0.92)", n.font = "600 12px sans-serif", n.textAlign = "center", n.textBaseline = "middle", n.fillText(t.errorText, o.x + o.w * 0.5, o.y + o.h * 0.5), n.restore(), r;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${ks}px`,
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
          return ks;
        },
        getHeight() {
          return ks;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = ml(Ou(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(ks, Number(a.minHeight || 0)),
            minWidth: Math.max(Jk, Number(a.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, n, r, o, a, c;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Pf(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Go({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Yk({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, d;
          return (d = (f = this.options).onOpen) == null ? void 0 : d.call(f, this.node);
        }
      }), this.surfaceApp = af(qk, {
        model: this.surfaceModel,
        onAction: (f) => {
          var d, v;
          (f == null ? void 0 : f.type) === "toggle-fullscreen" && ((v = (d = this.fullscreenController) == null ? void 0 : d.toggle) == null || v.call(d));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var f, d;
          return (d = (f = this.fullscreenController) == null ? void 0 : f.toggle) == null ? void 0 : d.call(f);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (o = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || o.call(r), this.surfaceApp = null, (c = (a = this.surfaceHost) == null ? void 0 : a.remove) == null || c.call(a), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var o;
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = rg(n), t.addEventListener("pointerdown", (a) => {
      var c, f, d;
      a.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (f = t.setPointerCapture) == null || f.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
    const r = (a) => {
      var c, f;
      this.controller.state.drag.active && ((c = t.releasePointerCapture) == null || c.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var c;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var c;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }), n.addEventListener("keydown", (a) => {
      var c;
      Uk(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !E0(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const r = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), r;
    }, this.node.onMouseDown = function(n, r) {
      var c;
      const o = t.localPoint(r);
      if (!o) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const a = t.getLegacyPreviewRect();
      return Vp(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, r) {
      var c;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const o = t.localPoint(r);
      if (!o) return !0;
      const a = t.getLegacyPreviewRect();
      return t.controller.moveDrag(o.x - a.x, o.y - a.y, "pano"), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, r, o) {
      var d, v, y, x, w, M;
      const a = Pk(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !Vp(a.x, a.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((v = t.view) == null ? void 0 : v.fov) || 100), f && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (x = n == null ? void 0 : n.preventDefault) == null || x.call(n), (w = n == null ? void 0 : n.stopPropagation) == null || w.call(n), (M = n == null ? void 0 : n.stopImmediatePropagation) == null || M.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, c;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - Wc * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - Tp - Wc);
    return { x: Wc, y: Tp, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), $p(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Bg : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = Wk(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = Qk(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const d = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, v = () => this.requestDraw();
      f.addEventListener("loadedmetadata", d), f.addEventListener("canplay", d), f.addEventListener("timeupdate", v), f.addEventListener("play", v), f.addEventListener("pause", v), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", d), f.removeEventListener("canplay", d), f.removeEventListener("timeupdate", v), f.removeEventListener("play", v), f.removeEventListener("pause", v);
      };
      return;
    }
    const n = eM(this.node, this.imageInputName);
    if (!n) {
      (a = this.mediaCleanup) == null || a.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null, this.imgSrc = n;
    const r = new Image();
    r.onload = () => {
      this.imgSrc === n && (this.img = r, this.requestDraw());
    }, r.onerror = () => {
      this.imgSrc === n && (this.img = null, this.previewView.release(), this.requestDraw());
    }, this.mediaCleanup = () => {
      r.onload = null, r.onerror = null;
    }, r.src = n;
  }
  requestDraw() {
    var t, n;
    if (!this.tearingDown) {
      if (this.needsDraw = !0, this.inTick) {
        this.queuedDuringTick = !0;
        return;
      }
      this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (n = (t = this.node).setDirtyCanvas) == null || n.call(t, !0, !1);
    }
  }
  tick(t = performance.now()) {
    var o, a;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), $p(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, f, d, v, y, x, w, M, k, _, F, $;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (v = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || v.call(d), this.surfaceApp = null, (x = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || x.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (w = this.mediaCleanup) == null || w.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (M = this.root) == null ? void 0 : M.remove) == null || k.call(M);
    } catch {
    }
    try {
      S0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = (($ = (F = (_ = this.node) == null ? void 0 : _.widgets) == null ? void 0 : F.find) == null ? void 0 : $.call(F, (X) => (X == null ? void 0 : X.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function nM(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new tM(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function F0(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const o = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const f = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const a = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const f = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const c = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const f = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
}
function Tf(e) {
  return !!(e != null && e.prototype);
}
function za(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function rM(e, t = {}) {
  Tf(e) || nM(e, {
    ...t,
    onOpen: za(e, t.onOpen)
  });
}
function iM(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Tf(e)) {
    Fp(e, {
      ...r,
      onOpen: za(e, t.onOpen)
    });
    return;
  }
  F0(e, "stickers_node_preview", (o) => {
    Fp(o, {
      ...r,
      onOpen: za(o, t.onOpen)
    });
  });
}
function oM(e, t = {}) {
  if (!Tf(e)) {
    Ep(e, {
      ...t,
      onOpen: za(e, t.onOpen)
    });
    return;
  }
  F0(e, "cutout_preview", (n) => {
    Ep(n, {
      ...t,
      onOpen: za(n, t.onOpen)
    });
  });
}
const Fn = {
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
}, jr = "pen";
function zp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function aM(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function f(v) {
    if (r.splice(0, r.length), o = -1, !v || typeof v != "object" || !Array.isArray(v.entries) || (v.entries.forEach((x) => {
      r.push(String(x || ""));
    }), !r.length)) return;
    const y = Number(v.index);
    Number.isInteger(y) ? y === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, y)) : o = r.length - 1;
  }
  function d(v) {
    r[o] !== v && (r.splice(o + 1), r.push(v), r.length > a && r.shift(), o = r.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(v) {
      d(String(v || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const v = o - 1;
      return v < 0 || v >= r.length ? null : (o = v, r[o]);
    },
    redo() {
      const v = o + 1;
      return v < 0 || v >= r.length ? null : (o = v, r[o]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return o;
    },
    serialize() {
      const v = r.length, y = Math.max(0, v - c), x = o >= 0 ? Math.max(0, Math.min(o, y)) : y, w = r.slice(x, x + c), M = o < 0 ? -1 : Math.max(-1, Math.min(w.length - 1, o - x));
      return {
        version: 1,
        entries: w,
        index: M
      };
    },
    hydrate: f
  };
}
function mo(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function sM(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function lM({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: o,
  rgb01ToHsv: a,
  hsv01ToRgb: c,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: d
}) {
  var C, V;
  const v = e.primaryTool === "paint" || e.primaryTool === "mask", y = {
    visible: v,
    activePane: v ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: v ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (E, R) => ({ index: R, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!v) return y;
  const x = ((C = t.find((E) => o(e.paintColor, E.color))) == null ? void 0 : C.id) || "", w = !x, M = a(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((V = e.customPaintColor) == null ? void 0 : V.a) ?? 1))) * 100), _ = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), F = e.brushSizes[_] ?? 10, $ = d(), X = Array.from({ length: 8 }, (E, R) => e.customPaintHistory[R] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: x,
    customColorActive: w,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...c(M.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, M.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, M.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, M.h)) * 100}%`,
    alphaValue: k,
    alphaText: `${k}%`,
    historyEntries: X.map((E, R) => ({
      index: R,
      color: E ? { cssColor: r(E, 1) } : null
    })),
    sizeValue: F,
    sizeText: String(F),
    sizeFill: `${Math.max(0, Math.min(100, (F - 1) / 119 * 100))}%`,
    sizeDisabled: $,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function cM({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function uM({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: a,
  params: c,
  notes: f,
  visibilityRows: d,
  uiSettings: v,
  normalizeCoverageValue: y
}) {
  return {
    coverage: { value: y(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || o === "stroke" || o === "camera" || a.length > 1,
      label: "Copy State"
    },
    params: c,
    notes: f,
    paramsDisabled: !r,
    visibilityRows: d,
    uiSettings: t ? null : v,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function fM({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: o,
  allLocked: a,
  anyLocked: c,
  selectedLocked: f,
  activeAspect: d,
  cutoutAspectOpen: v,
  isExternalSticker: y,
  isStickerHidden: x,
  canRestoreSelectedToInitial: w,
  iconSet: M
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let k = [];
  if (n.length > 1)
    k = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    k = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!f },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f }
    ];
  else if (e === "stickers" || r === "image") {
    if (k = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!f }
    ], y(t) || (k.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: M.duplicate }), k.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: M.replace_image })), y(t)) {
      const R = w(), Y = x(t);
      k.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: R ? "Back to initial position" : "Already at initial position",
        icon: M.back_initial,
        disabled: !R
      }), k.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: Y ? "Show" : "Hide",
        tip: Y ? "Show input image" : "Hide input image",
        icon: Y ? M.eye : M.eye_dashed
      });
    }
    k.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed }), y(t) || k.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f });
  } else
    k = [
      {
        key: "aspect",
        kind: "aspect",
        icon: M.aspect,
        open: !!v,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((R) => ({ value: R, label: R, active: d === R }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: M.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f }
    ];
  const _ = o.corners.map((R) => ({ x: Number(R == null ? void 0 : R.x), y: Number(R == null ? void 0 : R.y) })).filter((R) => Number.isFinite(R.x) && Number.isFinite(R.y));
  if (!_.length) return { visible: !1, left: 0, top: 0, items: [] };
  const F = _.map((R) => R.x), $ = _.map((R) => R.y), X = Math.min(...F), C = Math.max(...F), V = Math.min(...$), E = Math.max(...$);
  return {
    visible: !0,
    left: (X + C) * 0.5,
    top: E + 18,
    items: k,
    anchor: { minX: X, maxX: C, minY: V, maxY: E }
  };
}
const dM = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function hM(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: c, playing: f, label: d, audio: v = null }) {
  const y = (M, k, _, F, $) => {
    const X = (C) => (r == null ? void 0 : r.owner) === M && r.lane === C ? r.frames.map((V) => V + $) : [];
    return {
      id: M,
      label: _,
      clip: F,
      selected: M === o,
      open: c.has(M),
      keyed: tw(k, t - $),
      keys: ew(k).map((C) => ({ frame: C.frame + $, full: C.full })),
      selectedFrames: X(null),
      lanes: Uo(k).map((C) => ({
        key: `${M}:${C}`,
        lane: C,
        label: dM[C],
        frames: k[C].keyframes.map((V) => V.frame + $),
        selectedFrames: X(C)
      }))
    };
  }, x = e.stickers.filter((M) => M.placement === "sky").sort((M, k) => k.z_index - M.z_index), w = e.stickers.filter((M) => M.placement === "world");
  return {
    visible: !0,
    expanded: a,
    playing: f,
    hasAudio: !!v,
    muted: !!(v != null && v.muted),
    frame: t,
    span: n,
    label: d,
    rows: [
      y("camera", e.camera, "Camera", null, 0),
      ...[...x, ...w].map((M) => {
        const { start: k, in: _, duration: F } = M.clip;
        return y(M.id, M, Lg(M), { start: k, end: F === null ? null : k + F }, k - _);
      })
    ]
  };
}
function pM(e, t, n, r) {
  const o = iw(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const mM = { class: "pano-floating-right" }, gM = ["data-settled"], yM = ["data-ready", "data-settled"], bM = ["aria-label", "data-tip"], vM = {
  key: 1,
  class: "pano-camera-preview-label"
}, _M = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), ce(We, null, [
      W("div", mM, [
        (ae(!0), ce(We, null, xt(e.buttons, (r) => (ae(), Dr(rn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      vi(W("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        W("div", {
          class: at(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: _t({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = W("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            W("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (ae(), ce("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Ee(At, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, bM)) : ct("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ae(), ce("div", vM, it(e.preview.label || "Preview unavailable"), 1)) : ct("", !0)
        ], 14, yM)
      ], 8, gM), [
        [Ko, e.preview.visible]
      ])
    ], 64));
  }
}, xM = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, wM = ["y2", "transform"], SM = ["transform"], kM = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = ft(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => vi((ae(), ce("div", {
      class: at(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ae(), ce("svg", xM, [
        a[1] || (a[1] = W("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ae(!0), ce(We, null, xt(rt(n), (c) => (ae(), ce("line", {
          key: c,
          class: at(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, wM))), 128)),
        W("g", { transform: r.value }, [...a[0] || (a[0] = [
          W("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, SM),
        a[2] || (a[2] = W("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ko, e.model.visible === !0]
    ]);
  }
}, MM = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), ce("div", {
      class: at(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Ee(n0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Ee(rn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ee(kM, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, NM = ["aria-label"], PM = { class: "pano-canvas-confirm-title" }, AM = { class: "pano-canvas-confirm-text" }, CM = { class: "pano-canvas-confirm-actions" }, IM = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, OM = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Vt(null), r = /* @__PURE__ */ Vt(null);
    let o = null;
    function a() {
      const x = r.value;
      return x ? Array.from(x.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((w) => w instanceof HTMLElement ? !w.hidden && w.tabIndex >= 0 && w.offsetParent !== null : !1) : [];
    }
    function c(x) {
      const w = r.value;
      if (!w) return;
      const M = w.querySelector(`[data-action='${x}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function f() {
      var _;
      const x = r.value;
      if (!x) return;
      const w = x.querySelector("[data-action='confirm-accept']");
      if (w instanceof HTMLElement) {
        w.focus();
        return;
      }
      const k = a()[0] || x;
      (_ = k == null ? void 0 : k.focus) == null || _.call(k);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function v(x) {
      var $;
      if (x.defaultPrevented) return;
      if (x.key === "Escape") {
        x.preventDefault(), x.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (x.key !== "Tab") return;
      const w = a(), M = r.value;
      if (!w.length) {
        x.preventDefault(), ($ = M == null ? void 0 : M.focus) == null || $.call(M);
        return;
      }
      const k = w[0], _ = w[w.length - 1], F = document.activeElement;
      if (x.shiftKey) {
        (F === k || F === M || !(M != null && M.contains(F))) && (x.preventDefault(), _.focus());
        return;
      }
      (F === _ || !(M != null && M.contains(F))) && (x.preventDefault(), k.focus());
    }
    function y(x) {
      x.target === n.value && c("confirm-cancel");
    }
    return Gi(() => t.model.visible, (x, w) => {
      if (x) {
        o = document.activeElement, Qu(() => {
          f();
        });
        return;
      }
      w && d();
    }, { immediate: !0 }), Ga(() => {
      d();
    }), (x, w) => e.model.visible === !0 ? (ae(), ce("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Tt(y, ["self"])
    }, [
      W("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: v
      }, [
        W("div", PM, it(e.model.title), 1),
        W("div", AM, it(e.model.text), 1),
        W("div", CM, [
          w[0] || (w[0] = W("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          W("button", IM, it(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, NM)
    ], 512)) : ct("", !0);
  }
}, EM = ["data-paint-pane"], FM = ["hidden"], TM = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], DM = ["aria-pressed", "disabled"], LM = ["hidden"], RM = { class: "pano-paint-color-pop-head" }, $M = { class: "pano-paint-color-field" }, VM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, zM = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, jM = { class: "pano-paint-color-field" }, HM = { class: "pano-paint-alpha-wrap" }, GM = ["value"], KM = { "data-paint-alpha-value": "" }, BM = ["hidden"], UM = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, WM = ["data-paint-history-index", "aria-label", "disabled"], YM = ["data-paint-footer"], XM = ["data-paint-group"], qM = ["hidden"], JM = ["value", "disabled"], ZM = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, QM = ["hidden"], eN = {
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
    return (r, o) => (ae(), ce("div", {
      class: at(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ae(!0), ce(We, null, xt(e.panes, (a) => {
        var c;
        return ae(), ce("div", {
          key: a.key,
          class: at(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ae(), ce("div", {
            key: 0,
            class: at(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ae(!0), ce(We, null, xt(e.paintSwatches, (f) => (ae(), ce("button", {
              key: f.id,
              class: at(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: _t(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, TM))), 128)),
            W("button", {
              class: at(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: _t({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, DM),
            W("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: _t({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              W("div", RM, [
                W("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: _t({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = W("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              W("div", $M, [
                W("div", VM, [
                  W("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: _t({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                W("div", zM, [
                  W("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: _t({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              W("label", jM, [
                o[1] || (o[1] = W("span", null, "Opacity", -1)),
                W("div", HM, [
                  W("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, GM),
                  W("span", KM, it(e.state.alphaText || "100%"), 1)
                ])
              ]),
              W("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                W("div", UM, [
                  (ae(!0), ce(We, null, xt(e.state.historyEntries || [], (f) => (ae(), ce("button", {
                    key: f.index,
                    class: at(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: _t(n(f.color))
                  }, null, 14, WM))), 128))
                ])
              ], 8, BM)
            ], 12, LM)
          ], 10, FM)) : ct("", !0),
          W("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            W("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (ae(!0), ce(We, null, xt(a.tools, (f) => {
                var d;
                return ae(), Dr(rn, {
                  key: `${a.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, XM),
            W("div", {
              class: at(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              W("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: _t({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, JM),
              W("span", ZM, it(e.state.sizeText || "10"), 1)
            ], 10, qM),
            W("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              Ee(rn, {
                icon: rt(Me).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, QM)
          ], 8, YM)
        ], 10, EM);
      }), 128))
    ], 2));
  }
}, tN = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Vt(null), r = /* @__PURE__ */ Vt(null), o = /* @__PURE__ */ Vt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, f) => (ae(), ce(We, null, [
      W("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      W("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        W("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, nN = {
  key: 0,
  class: "pano-cutout-menu"
}, rN = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, iN = ["data-aspect"], oN = ["data-action", "aria-label", "data-tip", "disabled"], aN = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), ce("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: _t({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ae(!0), ce(We, null, xt(e.model.items || [], (r) => (ae(), ce(We, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ae(), ce("div", nN, [
          W("button", rN, [
            Ee(At, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          W("div", {
            class: at(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ae(!0), ce(We, null, xt(r.choices || [], (o) => (ae(), ce("button", {
              key: o.value,
              class: at(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, it(o.label), 11, iN))), 128))
          ], 2)
        ])) : (ae(), ce("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Ee(At, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, oN))
      ], 64))), 128))
    ], 4));
  }
}, sN = {
  key: 0,
  class: "pano-easing"
}, lN = { class: "pano-section-title" }, cN = { class: "pano-easing-range" }, uN = { class: "pano-easing-modes" }, fN = ["aria-pressed", "onClick"], dN = ["viewBox"], hN = ["x", "y"], pN = ["x1", "y1", "x2", "y2"], mN = ["d"], gN = ["x1", "y1", "x2", "y2"], yN = ["x1", "y1", "x2", "y2"], bN = ["cx", "cy"], vN = ["cx", "cy"], _N = { class: "pano-easing-note" }, Hr = 132, Ei = 14, xN = {
  __name: "PanoEasingGraph",
  props: { model: { type: Object, default: null } },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [
      { label: "Ease in-out", easing: [0.42, 0, 0.58, 1] },
      { label: "Linear", easing: [0, 0, 1, 1] },
      { label: "Ease in", easing: [0.42, 0, 1, 1] },
      { label: "Ease out", easing: [0, 0, 0.58, 1] },
      { label: "Auto", easing: "auto" },
      { label: "Hold", easing: "hold" }
    ], a = /* @__PURE__ */ Vt(null), c = ft(() => {
      var k;
      return Array.isArray((k = n.model) == null ? void 0 : k.easing) ? n.model.easing : null;
    }), f = (k) => Ei + k * Hr, d = (k) => Ei + (1 - k) * Hr, v = ft(() => {
      var X;
      if (((X = n.model) == null ? void 0 : X.easing) === "hold") return `M${f(0)} ${d(0)} H${f(1)} V${d(1)}`;
      const [k, _, F, $] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${f(0)} ${d(0)} C${f(k)} ${d(_)} ${f(F)} ${d($)} ${f(1)} ${d(1)}`;
    }), y = ft(() => c.value ? c.value.map((k) => k.toFixed(2)).join(", ") : "");
    function x(k) {
      var _;
      return JSON.stringify(k.easing) === JSON.stringify((_ = n.model) == null ? void 0 : _.easing);
    }
    function w(k, _) {
      r("timeline", { type: "easing", easing: k, commit: _ });
    }
    function M(k, _) {
      var V;
      if (k.button !== 0 || !c.value) return;
      const F = k.currentTarget;
      (V = F.setPointerCapture) == null || V.call(F, k.pointerId);
      let $ = null;
      const X = (E) => {
        const R = a.value.getBoundingClientRect(), Y = R.width / (Hr + Ei * 2), G = ((E.clientX - R.left) / Y - Ei) / Hr, we = 1 - ((E.clientY - R.top) / Y - Ei) / Hr;
        $ = [...$ || c.value], $[_] = Math.round(Math.min(1, Math.max(0, G)) * 100) / 100, $[_ + 1] = Math.round(Math.min(1, Math.max(0, we)) * 100) / 100, w($, !1);
      }, C = () => {
        F.removeEventListener("pointermove", X), F.removeEventListener("pointerup", C), F.removeEventListener("pointercancel", C), $ && w($, !0);
      };
      F.addEventListener("pointermove", X), F.addEventListener("pointerup", C), F.addEventListener("pointercancel", C);
    }
    return (k, _) => e.model ? (ae(), ce("div", sN, [
      W("div", lN, [
        _[2] || (_[2] = W("span", null, "Easing", -1)),
        W("span", cN, it(e.model.label), 1)
      ]),
      W("div", uN, [
        (ae(), ce(We, null, xt(o, (F) => W("button", {
          key: F.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": x(F) ? "true" : "false",
          onClick: ($) => w(F.easing, !0)
        }, it(F.label), 9, fN)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ae(), ce("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Hr + Ei * 2} ${Hr + Ei * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        W("rect", {
          class: "pano-easing-square",
          x: f(0),
          y: d(1),
          width: Hr,
          height: Hr
        }, null, 8, hN),
        W("line", {
          class: "pano-easing-diagonal",
          x1: f(0),
          y1: d(0),
          x2: f(1),
          y2: d(1)
        }, null, 8, pN),
        W("path", {
          class: "pano-easing-curve",
          d: v.value
        }, null, 8, mN),
        c.value ? (ae(), ce(We, { key: 0 }, [
          W("line", {
            class: "pano-easing-arm",
            x1: f(0),
            y1: d(0),
            x2: f(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, gN),
          W("line", {
            class: "pano-easing-arm",
            x1: f(1),
            y1: d(1),
            x2: f(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, yN),
          W("circle", {
            class: "pano-easing-handle",
            cx: f(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: _[0] || (_[0] = (F) => M(F, 0))
          }, null, 40, bN),
          W("circle", {
            class: "pano-easing-handle",
            cx: f(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: _[1] || (_[1] = (F) => M(F, 2))
          }, null, 40, vN)
        ], 64)) : ct("", !0)
      ], 8, dN)) : ct("", !0),
      W("div", _N, [
        e.model.mixed ? (ae(), ce(We, { key: 0 }, [
          ga("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ae(), ce(We, { key: 1 }, [
          ga("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ae(), ce(We, { key: 2 }, [
          ga("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ae(), ce(We, { key: 3 }, [
          ga("cubic-bezier(" + it(y.value) + ")", 1)
        ], 64)) : ct("", !0)
      ])
    ])) : ct("", !0);
  }
}, wN = {
  class: "pano-side",
  "data-side": ""
}, SN = { class: "pano-side-head" }, kN = { class: "pano-side-title" }, MN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, NN = {
  key: 0,
  class: "pano-side-scroll"
}, PN = { class: "pano-inspector" }, AN = { class: "pano-ui-row pano-coverage-row" }, CN = ["data-selected"], IN = ["aria-pressed", "disabled"], ON = ["aria-pressed", "disabled"], EN = {
  key: 0,
  class: "pano-section-title"
}, FN = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, TN = {
  class: "pano-picker",
  "data-picker": "selection"
}, DN = ["disabled"], LN = { class: "pano-picker-label" }, RN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, $N = ["hidden"], VN = ["data-selection-id"], zN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, jN = {
  key: 2,
  class: "pano-state-actions"
}, HN = ["disabled"], GN = ["data-key"], KN = ["min", "max", "step", "value", "disabled", "data-param-key"], BN = ["min", "max", "step", "value", "disabled", "data-param-key"], UN = { class: "pano-visibility-section" }, WN = { class: "pano-visibility-stack" }, YN = ["data-visibility-row"], XN = { class: "pano-visibility-name" }, qN = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, JN = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], ZN = ["open"], QN = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, eP = { class: "pano-ui-settings-body" }, tP = { class: "pano-ui-row" }, nP = ["data-selected"], rP = ["aria-pressed"], iP = ["aria-pressed"], oP = { class: "pano-ui-row" }, aP = ["data-selected"], sP = ["aria-pressed"], lP = ["aria-pressed"], cP = {
  key: 1,
  class: "pano-side-footer"
}, uP = ["data-action"], fP = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = ft(() => {
      const f = n.model;
      return !f || typeof f != "object" ? !1 : Object.keys(f).length > 0 && !!f.coverage;
    });
    function a(f) {
      return { "--v": `${Number((f == null ? void 0 : f.fillPct) || 0)}%` };
    }
    function c(f, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (f == null ? void 0 : f.enabled) === !1;
    }
    return (f, d) => {
      var v, y, x, w, M;
      return ae(), ce("div", wN, [
        W("div", SN, [
          W("div", kN, [
            W("span", MN, [
              Ee(At, {
                icon: rt(Me).globe
              }, null, 8, ["icon"])
            ]),
            W("span", null, it(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = W("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = W("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ae(), ce("div", NN, [
          W("div", PN, [
            d[11] || (d[11] = W("div", { class: "pano-section-title" }, [
              W("span", null, "Scene")
            ], -1)),
            W("div", AN, [
              d[2] || (d[2] = W("label", null, "Coverage", -1)),
              W("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "1" : "0"
              }, [
                W("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 360 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "360", 8, IN),
                W("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((M = e.model.coverage) == null ? void 0 : M.disabled) === !0
                }, "180", 8, ON)
              ], 8, CN)
            ]),
            e.model.transformTitle !== !1 ? (ae(), ce("div", EN, [...d[3] || (d[3] = [
              W("span", null, "Transform", -1)
            ])])) : ct("", !0),
            e.model.selectionPicker ? (ae(), ce("div", FN, [
              W("label", null, it(e.model.selectionPicker.label), 1),
              W("div", TN, [
                W("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  W("span", LN, [
                    e.model.selectionPicker.currentIcon ? (ae(), ce("span", RN, [
                      Ee(At, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    W("span", null, it(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = W("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, DN),
                W("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ae(!0), ce(We, null, xt(e.model.selectionPicker.items || [], (k) => (ae(), ce("button", {
                    key: k.id,
                    type: "button",
                    class: at(["pano-picker-item", { active: k.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": k.id
                  }, [
                    k.icon ? (ae(), ce("span", zN, [
                      Ee(At, {
                        icon: k.icon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    W("span", null, it(k.label), 1)
                  ], 10, VN))), 128))
                ], 8, $N)
              ])
            ])) : ct("", !0),
            e.model.copyStateButton ? (ae(), ce("div", jN, [
              W("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ee(At, {
                  icon: rt(Me).copy
                }, null, 8, ["icon"]),
                W("span", null, it(e.model.copyStateButton.label), 1)
              ], 8, HN)
            ])) : ct("", !0),
            W("div", {
              class: at(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ae(!0), ce(We, { key: 0 }, xt(e.model.notes, (k) => (ae(), ce("div", {
                key: k,
                class: "pano-param-note"
              }, it(k), 1))), 128)) : (ae(!0), ce(We, { key: 1 }, xt(e.model.params || [], (k) => (ae(), ce("div", {
                key: k.key,
                class: "pano-field",
                "data-key": k.key
              }, [
                W("label", null, it(k.label), 1),
                W("input", {
                  type: "range",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.value,
                  disabled: c(k, e.model),
                  style: _t(a(k)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": k.key
                }, null, 12, KN),
                W("input", {
                  type: "number",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.displayValue,
                  disabled: c(k, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": k.key
                }, null, 8, BN)
              ], 8, GN))), 128))
            ], 2),
            Ee(xN, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (k) => r("timeline", k))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (ae(), ce(We, { key: 3 }, [
              d[6] || (d[6] = W("div", { class: "pano-divider" }, null, -1)),
              W("div", UN, [
                d[5] || (d[5] = W("div", { class: "pano-section-title" }, [
                  W("span", null, "Layers")
                ], -1)),
                W("div", WN, [
                  (ae(!0), ce(We, null, xt(e.model.visibilityRows, (k) => (ae(), ce("div", {
                    key: k.key,
                    class: at(["pano-visibility-row", { "is-hidden": k.visible === !1, "is-disabled": k.enabled === !1 }]),
                    "data-visibility-row": k.key
                  }, [
                    W("span", XN, [
                      W("span", qN, [
                        Ee(At, {
                          icon: k.icon
                        }, null, 8, ["icon"])
                      ]),
                      W("span", null, it(k.label), 1)
                    ]),
                    W("button", {
                      class: at(["pano-visibility-toggle", { active: k.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": k.key,
                      "aria-label": k.ariaLabel,
                      "aria-pressed": k.visible === !0 ? "true" : "false",
                      "data-tip": k.tip,
                      disabled: k.enabled === !1
                    }, [
                      Ee(At, {
                        icon: k.visible === !0 ? rt(Me).eye : rt(Me).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, JN)
                  ], 10, YN))), 128))
                ])
              ])
            ], 64)) : ct("", !0),
            e.model.uiSettings ? (ae(), ce("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              W("summary", null, [
                d[7] || (d[7] = W("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                W("span", QN, [
                  Ee(At, {
                    icon: rt(Me).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              W("div", eP, [
                W("div", tP, [
                  d[8] || (d[8] = W("label", null, "Drag X", -1)),
                  W("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    W("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, rP),
                    W("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, iP)
                  ], 8, nP)
                ]),
                W("div", oP, [
                  d[9] || (d[9] = W("label", null, "Drag Y", -1)),
                  W("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    W("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, sP),
                    W("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, lP)
                  ], 8, aP)
                ]),
                d[10] || (d[10] = W("div", { class: "pano-ui-row" }, [
                  W("span"),
                  W("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, ZN)) : ct("", !0)
          ])
        ])) : ct("", !0),
        (e.model.footerButtons || []).length ? (ae(), ce("div", cP, [
          (ae(!0), ce(We, null, xt(e.model.footerButtons, (k) => (ae(), ce("button", {
            key: k.action,
            class: at(["pano-btn", { "pano-btn-primary": k.primary === !0 }]),
            type: "button",
            "data-action": k.action
          }, it(k.label), 11, uP))), 128))
        ])) : ct("", !0)
      ]);
    };
  }
}, dP = { class: "pano-timeline-bar" }, hP = ["aria-label", "data-tip"], pP = ["aria-label", "data-tip"], mP = { class: "pano-timeline-time" }, gP = ["aria-expanded"], yP = ["inert"], bP = { class: "pano-timeline-name" }, vP = ["aria-expanded", "aria-label", "onClick"], _P = ["title", "aria-current", "onClick"], xP = ["data-keyed", "aria-label", "onClick"], wP = ["onPointerdown"], SP = ["onPointerdown"], kP = ["onPointerdown"], MP = ["onPointerdown"], NP = ["aria-label", "data-tip", "onPointerdown"], PP = { key: 0 }, AP = ["onPointerdown"], CP = ["aria-label", "data-tip", "onPointerdown"], IP = { key: 0 }, OP = 10, EP = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Vt(null), c = /* @__PURE__ */ Vt(null), f = /* @__PURE__ */ Vt(1), d = /* @__PURE__ */ Vt(0), v = /* @__PURE__ */ Vt(!1);
    let y = null, x = null, w = null;
    Al(() => {
      y = new ResizeObserver(([O]) => {
        f.value = Math.max(1, O.contentRect.width);
      }), a.value && y.observe(a.value), x = new ResizeObserver(([O]) => {
        d.value = O.contentRect.height;
      }), c.value && x.observe(c.value);
    }), Ga(() => {
      y == null || y.disconnect(), x == null || x.disconnect(), w == null || w();
    });
    const M = ft(() => Math.max(1, Number(n.model.span || 1))), k = ft(() => f.value / M.value), _ = (O) => `${O / M.value * 100}%`, F = ft(() => {
      const O = o.find((z) => z * k.value >= 56) || o[o.length - 1], J = [];
      for (let z = 0; z < M.value; z += O) J.push(z);
      return J;
    });
    function $(O) {
      const J = a.value.getBoundingClientRect(), z = Math.floor((O - J.left) / Math.max(1, J.width) * M.value);
      return Math.min(M.value - 1, Math.max(0, z));
    }
    function X(O, J, z) {
      const B = Math.ceil(OP / Math.max(1e-6, k.value)), q = new Map(J.map((me) => [me.frame, me.full]));
      return uw(J.map((me) => me.frame), B).map((me, se) => ({
        ...me,
        key: `${O}:${se}`,
        partial: me.frames.some((I) => !q.get(I)),
        selected: me.frames.some((I) => z.includes(I))
      }));
    }
    function C(O) {
      return X(O.id, O.keys, O.selectedFrames);
    }
    function V(O) {
      return X(O.key, O.frames.map((J) => ({ frame: J, full: !0 })), O.selectedFrames);
    }
    function E(O) {
      const J = O.end === null ? M.value : O.end;
      return { left: _(O.start), width: _(Math.max(0, J - O.start)) };
    }
    function R(O, J) {
      const z = O.clientX, B = Math.max(1e-6, k.value);
      let q = 0;
      J("start", 0, O);
      const me = (I) => {
        if (I.pointerId !== O.pointerId) return;
        const Ve = Math.round((I.clientX - z) / B);
        Ve !== q && (q = Ve, J("move", q, I));
      }, se = (I) => {
        I.pointerId === O.pointerId && (w(), J("end", q, I));
      };
      w == null || w(), w = () => {
        window.removeEventListener("pointermove", me), window.removeEventListener("pointerup", se), window.removeEventListener("pointercancel", se), w = null;
      }, window.addEventListener("pointermove", me), window.addEventListener("pointerup", se), window.addEventListener("pointercancel", se);
    }
    function Y(O) {
      O.button === 0 && R(O, (J, z, B) => r("action", { type: "seek", frame: $(B.clientX), phase: J }));
    }
    function G(O, J, z) {
      O.button === 0 && (r("action", { type: "select-row", id: J.id }), R(O, (B, q) => r("action", { type: "clip", id: J.id, mode: z, delta: q, phase: B })));
    }
    function we(O, J, z, B, q) {
      if (O.button === 0) {
        if (O.shiftKey) {
          r("action", { type: "select-keys", owner: J.id, lane: z, frames: B.frames, additive: !0 });
          return;
        }
        B.frames.every((me) => q.includes(me)) || r("action", { type: "select-keys", owner: J.id, lane: z, frames: B.frames, additive: !1 }), R(O, (me, se) => r("action", { type: "move-keys", delta: se, phase: me }));
      }
    }
    function T(O, J, z) {
      O.button !== 0 || O.target !== O.currentTarget || r("action", { type: "select-keys", owner: J.id, lane: z, frames: [], additive: !1 });
    }
    return (O, J) => vi((ae(), ce("section", {
      class: at(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      W("div", dP, [
        W("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: J[0] || (J[0] = (z) => r("action", { type: "play" }))
        }, [
          Ee(At, {
            icon: e.model.playing ? rt(Me).pause : rt(Me).play
          }, null, 8, ["icon"])
        ], 8, hP),
        e.model.hasAudio ? (ae(), ce("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: J[1] || (J[1] = (z) => r("action", { type: "mute" }))
        }, [
          Ee(At, {
            icon: e.model.muted ? rt(Me).volume_muted : rt(Me).volume2
          }, null, 8, ["icon"])
        ], 8, pP)) : ct("", !0),
        W("span", mP, it(e.model.label), 1),
        W("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: J[2] || (J[2] = (z) => r("action", { type: "toggle-expanded" }))
        }, [
          J[6] || (J[6] = W("span", null, "Timeline", -1)),
          Ee(At, {
            icon: rt(Me).chevron
          }, null, 8, ["icon"])
        ], 8, gP)
      ]),
      W("div", {
        class: at(["pano-timeline-body", { open: e.model.expanded, sliding: v.value }]),
        style: _t({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: J[3] || (J[3] = Tt((z) => v.value = !0, ["self"])),
        onTransitionend: J[4] || (J[4] = Tt((z) => v.value = !1, ["self"])),
        onTransitioncancel: J[5] || (J[5] = Tt((z) => v.value = !1, ["self"]))
      }, [
        W("div", {
          ref_key: "gridRef",
          ref: c,
          class: "pano-timeline-grid"
        }, [
          J[7] || (J[7] = W("div", { class: "pano-timeline-corner" }, null, -1)),
          W("div", {
            ref_key: "rulerRef",
            ref: a,
            class: "pano-timeline-ruler",
            onPointerdown: Y
          }, [
            (ae(!0), ce(We, null, xt(F.value, (z) => (ae(), ce("span", {
              key: z,
              class: "pano-timeline-tick",
              style: _t({ left: _(z) })
            }, it(z), 5))), 128)),
            W("span", {
              class: "pano-timeline-playhead",
              style: _t({ left: _(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (ae(!0), ce(We, null, xt(e.model.rows || [], (z) => (ae(), ce(We, {
            key: z.id
          }, [
            W("div", {
              class: at(["pano-timeline-head", { selected: z.selected }])
            }, [
              W("div", bP, [
                W("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": z.open ? "true" : "false",
                  "aria-label": z.open ? `Hide ${z.label} parameters` : `Show ${z.label} parameters`,
                  onClick: Tt((B) => r("action", { type: "toggle-row", id: z.id }), ["stop"])
                }, [
                  Ee(At, {
                    icon: rt(Me).chevron
                  }, null, 8, ["icon"])
                ], 8, vP),
                W("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: z.label,
                  "aria-current": z.selected ? "true" : void 0,
                  onClick: (B) => r("action", { type: "select-row", id: z.id })
                }, [
                  Ee(At, {
                    icon: z.clip ? rt(Me).image : rt(Me).camera
                  }, null, 8, ["icon"]),
                  W("span", null, it(z.label), 1)
                ], 8, _P),
                W("button", {
                  class: at(["pano-timeline-key", { keyed: z.keyed }]),
                  type: "button",
                  "data-keyed": z.keyed ? "true" : "false",
                  "aria-label": z.keyed ? `Every ${z.label} parameter has a keyframe here; update them` : `Add keyframes for every ${z.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Tt((B) => r("action", { type: "key-row", owner: z.id }), ["stop"])
                }, [
                  Ee(At, {
                    icon: rt(Me).keyframe
                  }, null, 8, ["icon"])
                ], 10, xP)
              ]),
              z.open ? (ae(!0), ce(We, { key: 0 }, xt(z.lanes, (B) => (ae(), ce("div", {
                key: B.key,
                class: "pano-timeline-lane-head"
              }, it(B.label), 1))), 128)) : ct("", !0)
            ], 2),
            W("div", {
              class: at(["pano-timeline-track", { selected: z.selected }])
            }, [
              W("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (B) => T(B, z, null)
              }, [
                z.clip ? (ae(), ce("div", {
                  key: 0,
                  class: at(["pano-timeline-clip", { open: z.clip.end === null }]),
                  style: _t(E(z.clip)),
                  onPointerdown: Tt((B) => G(B, z, "move"), ["stop"])
                }, [
                  W("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Tt((B) => G(B, z, "start"), ["stop"])
                  }, null, 40, kP),
                  W("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Tt((B) => G(B, z, "end"), ["stop"])
                  }, null, 40, MP)
                ], 46, SP)) : ct("", !0),
                (ae(!0), ce(We, null, xt(C(z), (B) => (ae(), ce("button", {
                  key: B.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: B.selected, cluster: B.frames.length > 1, partial: B.partial }]),
                  style: _t({ left: _(B.frame + 0.5) }),
                  "aria-label": `${z.label}: ${B.frames.length > 1 ? `${B.frames.length} keyframes` : `keyframe at frame ${B.frames[0]}`}`,
                  "data-tip": B.frames.length > 1 ? `${B.frames.length} keyframes` : `Frame ${B.frames[0]}`,
                  onPointerdown: Tt((q) => we(q, z, null, B, z.selectedFrames), ["stop"])
                }, [
                  B.frames.length > 1 ? (ae(), ce("span", PP, it(B.frames.length), 1)) : ct("", !0)
                ], 46, NP))), 128))
              ], 40, wP),
              z.open ? (ae(!0), ce(We, { key: 0 }, xt(z.lanes, (B) => (ae(), ce("div", {
                key: B.key,
                class: "pano-timeline-lane",
                onPointerdown: (q) => T(q, z, B.lane)
              }, [
                (ae(!0), ce(We, null, xt(V(B), (q) => (ae(), ce("button", {
                  key: q.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: q.selected, cluster: q.frames.length > 1 }]),
                  style: _t({ left: _(q.frame + 0.5) }),
                  "aria-label": `${B.label}: ${q.frames.length > 1 ? `${q.frames.length} keyframes` : `keyframe at frame ${q.frames[0]}`}`,
                  "data-tip": q.frames.length > 1 ? `${q.frames.length} keyframes` : `Frame ${q.frames[0]}`,
                  onPointerdown: Tt((me) => we(me, z, B.lane, q, B.selectedFrames), ["stop"])
                }, [
                  q.frames.length > 1 ? (ae(), ce("span", IP, it(q.frames.length), 1)) : ct("", !0)
                ], 46, CP))), 128))
              ], 40, AP))), 128)) : ct("", !0),
              W("span", {
                class: "pano-timeline-playhead",
                style: _t({ left: _(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, yP)
    ], 2)), [
      [Ko, e.model.visible]
    ]);
  }
}, FP = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), ce("div", {
      class: at(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: _t({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, it(e.model.text || ""), 7));
  }
}, TP = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, DP = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ae(), ce("div", TP, [
      (ae(!0), ce(We, null, xt(e.buttons, (r) => vi((ae(), Dr(rn, {
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
        [Ko, r.visible !== !1]
      ])), 128))
    ]));
  }
}, LP = ["data-video-ready"], RP = { class: "pano-video-transport-shell" }, $P = { class: "pano-video-controls-left" }, VP = { class: "pano-video-filmstrip" }, zP = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, jP = ["src", "onLoad"], HP = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, GP = ["max", "value", "disabled"], KP = { class: "pano-video-controls-right" }, BP = ["data-has-audio"], UP = { class: "pano-video-volume-pop" }, WP = ["value", "disabled"], YP = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ft(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.playing) === !0 ? "Pause" : "Play";
    }), r = ft(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.playing) === !0 ? "Pause video" : "Play video";
    }), o = ft(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.playing) === !0 ? Me.pause : Me.play;
    }), a = ft(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = ft(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = ft(() => {
      var E;
      return ((E = t.state) == null ? void 0 : E.loop) === !1 ? Me.loop_off : Me.loop;
    }), d = ft(() => {
      var E, R;
      return ((E = t.state) == null ? void 0 : E.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), v = ft(() => {
      var E, R, Y;
      return ((E = t.state) == null ? void 0 : E.hasAudio) !== !0 ? Me.volume : ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((Y = t.state) == null ? void 0 : Y.volume) ?? 1) <= 0 ? Me.volume_muted : Me.volume2;
    }), y = ft(() => {
      var E;
      return Math.max(0, Math.min(100, Number(((E = t.state) == null ? void 0 : E.progressPct) || 0)));
    }), x = ft(() => ({ left: `${y.value}%` })), w = ft(() => {
      var G, we;
      const E = (G = t.state) == null ? void 0 : G.volumePct, R = Number(((we = t.state) == null ? void 0 : we.volume) ?? 1) * 100, Y = Number(E ?? R ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, Y))}%`
      };
    }), M = ft(() => {
      var Y, G;
      const R = [
        String(((Y = t.state) == null ? void 0 : Y.currentTimeLabel) || "0:00"),
        String(((G = t.state) == null ? void 0 : G.durationLabel) || "0:00")
      ].reduce((we, T) => Math.max(we, T.length), 4);
      return `${Math.max(4, R)}ch`;
    }), k = ft(() => ({ "--pano-video-time-ch": M.value })), _ = ft(() => {
      var Y, G;
      const E = Array.isArray((Y = t.state) == null ? void 0 : Y.thumbnails) ? t.state.thumbnails : [];
      if (E.length) return E;
      const R = Math.max(7, Number(((G = t.state) == null ? void 0 : G.thumbnailCount) || 9));
      return Array.from({ length: R }, (we, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), F = /* @__PURE__ */ Vt(/* @__PURE__ */ new Set()), $ = (E) => String((E == null ? void 0 : E.id) || (E == null ? void 0 : E.src) || (E == null ? void 0 : E.label) || ""), X = (E) => F.value.has($(E)), C = (E) => {
      const R = new Set(F.value);
      R.add($(E)), F.value = R;
    };
    Gi(_, (E) => {
      const R = new Set(E.map($)), Y = /* @__PURE__ */ new Set();
      for (const G of F.value)
        R.has(G) && Y.add(G);
      F.value = Y;
    }, { immediate: !0 });
    const V = ft(() => {
      var E;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((E = t.state) == null ? void 0 : E.shellMaxWidthPx) || 640))}px`
      };
    });
    return (E, R) => (ae(), ce("div", {
      class: at(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: _t(V.value)
    }, [
      R[1] || (R[1] = W("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      W("div", RP, [
        W("div", $P, [
          Ee(rn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          W("div", {
            class: "pano-video-time pano-video-time-start",
            style: _t(k.value)
          }, it(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        W("div", VP, [
          W("div", zP, [
            (ae(!0), ce(We, null, xt(_.value, (Y) => (ae(), ce("div", {
              key: $(Y),
              class: at(["pano-video-thumb", {
                "is-placeholder": !Y.src,
                "is-loaded": Y.src && X(Y)
              }])
            }, [
              Y.src ? (ae(), ce("img", {
                key: 0,
                src: Y.src,
                alt: "",
                draggable: "false",
                onLoad: (G) => C(Y)
              }, null, 40, jP)) : (ae(), ce("span", HP))
            ], 2))), 128))
          ]),
          W("div", {
            class: "pano-video-playhead",
            style: _t(x.value),
            "aria-hidden": "true"
          }, [...R[0] || (R[0] = [
            W("span", { class: "pano-video-playhead-line" }, null, -1),
            W("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          W("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, GP)
        ]),
        W("div", KP, [
          W("div", {
            class: "pano-video-time pano-video-time-end",
            style: _t(k.value)
          }, it(e.state.durationLabel || "0:00"), 5),
          Ee(rn, {
            "extra-class": "pano-video-control",
            icon: f.value,
            label: a.value,
            tip: c.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          W("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            W("div", UP, [
              W("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: _t(w.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, WP)
            ]),
            Ee(rn, {
              "extra-class": "pano-video-control",
              icon: v.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, BP)
        ])
      ])
    ], 14, LP));
  }
}, XP = { class: "pano-floating-top" }, qP = ["data-selected", "data-view-count"], JP = ["data-view", "aria-pressed", "aria-label", "disabled"], ZP = { class: "label" }, QP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ae(), ce("div", XP, [
        W("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ae(!0), ce(We, null, xt(e.buttons, (o) => vi((ae(), ce("button", {
            key: o.key,
            class: at(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            Ee(At, {
              icon: o.icon
            }, null, 8, ["icon"]),
            W("span", ZP, it(o.label), 1)
          ], 10, JP)), [
            [Ko, o.visible !== !1]
          ])), 128))
        ], 8, qP)
      ]);
    };
  }
};
function T0(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Me.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Me.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Me.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Me.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Me.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Me.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Me.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Me.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Me.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Me.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Me.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Me.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Me.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Me.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Me.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Me.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Me.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Me.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Me.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Me.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Me.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Me.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Me.lasso_tool }
        ]
      }
    ]
  };
}
const e2 = ["aria-label"], t2 = { class: "pano-stage-column" }, n2 = { class: "pano-stage-wrap" }, r2 = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, i2 = {
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
  emits: ["close", "image-file-selected", "image-file-cancelled", "timeline"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    let a = "", c = !1, f = null;
    const d = /* @__PURE__ */ Vt(null), v = /* @__PURE__ */ Vt(null), y = /* @__PURE__ */ Vt(null);
    function x() {
      var T, O;
      return ((O = (T = y.value) == null ? void 0 : T.getRefs) == null ? void 0 : O.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function w(T) {
      var O, J;
      return ((J = (O = v.value) == null ? void 0 : O.open) == null ? void 0 : J.call(O, T)) === !0;
    }
    function M(T) {
      o("image-file-selected", T);
    }
    function k(T) {
      o("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: x, openImagePicker: w });
    const _ = ft(() => r.readOnly === !0), F = ft(() => r.shellPreset || T0(r.type)), $ = ft(() => {
      var O, J, z;
      const T = String((((O = r.uiState) == null ? void 0 : O.stageStatus) === "failed" ? (J = r.uiState) == null ? void 0 : J.stageStatusDetail : (z = r.uiState) == null ? void 0 : z.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), X = ft(() => {
      var O;
      const T = Array.isArray((O = F.value) == null ? void 0 : O.floatingButtons) ? F.value.floatingButtons.slice() : [];
      return _.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Me.fullscreen
      }), T;
    });
    function C() {
      const T = d.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((O) => O instanceof HTMLElement ? !O.hidden && O.tabIndex >= 0 && O.offsetParent !== null : !1) : [];
    }
    function V() {
      var J;
      const O = C()[0] || d.value;
      (J = O == null ? void 0 : O.focus) == null || J.call(O);
    }
    function E() {
      var T;
      f != null && f.isConnected && ((T = f.focus) == null || T.call(f)), f = null;
    }
    function R(T) {
      var O, J, z, B;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const q = C();
          if (!q.length) {
            T.preventDefault(), (J = (O = d.value) == null ? void 0 : O.focus) == null || J.call(O);
            return;
          }
          const me = q[0], se = q[q.length - 1], I = document.activeElement;
          if (T.shiftKey) {
            (I === me || I === d.value || !((z = d.value) != null && z.contains(I))) && (T.preventDefault(), se.focus());
            return;
          }
          (I === se || !((B = d.value) != null && B.contains(I))) && (T.preventDefault(), me.focus());
          return;
        }
        T.key === "Escape" && o("close");
      }
    }
    function Y() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function G() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function we(T) {
      document.removeEventListener("keydown", R), T ? (f || (f = document.activeElement), Y(), document.addEventListener("keydown", R), Qu(() => {
        V();
      })) : (G(), E());
    }
    return Al(() => {
      we(r.open);
    }), Ga(() => {
      G(), document.removeEventListener("keydown", R), E();
    }), Gi(() => r.open, (T) => {
      we(T);
    }), (T, O) => e.open ? (ae(), ce("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: O[2] || (O[2] = Tt((J) => o("close"), ["self"]))
    }, [
      W("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        W("div", t2, [
          W("div", n2, [
            O[3] || (O[3] = W("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            O[4] || (O[4] = W("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            O[5] || (O[5] = W("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ae(), ce("div", r2, it($.value), 1)) : ct("", !0),
            O[6] || (O[6] = W("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              W("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Ee(tN, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            Ee(r0, {
              ref_key: "imageFilePickerRef",
              ref: v,
              onFileSelected: M,
              onFileCancelled: k
            }, null, 512),
            _.value ? ct("", !0) : (ae(), ce(We, { key: 1 }, [
              Ee(DP, {
                buttons: e.uiState.toolButtons || F.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Ee(MM, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Ee(eN, {
                "paint-swatches": e.paintSwatches,
                panes: F.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Ee(YP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Ee(QP, {
              buttons: e.uiState.viewButtons || F.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Ee(_M, {
              buttons: e.uiState.floatingButtons || X.value,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
            Ee(aN, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Ee(FP, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Ee(OM, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Ee(EP, {
            model: e.uiState.timeline || {},
            onAction: O[0] || (O[0] = (J) => o("timeline", J))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ct("", !0) : (ae(), Dr(fP, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: O[1] || (O[1] = (J) => o("timeline", J))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, e2)
    ])) : ct("", !0);
  }
}, ur = "loading", Ho = "ready", Zn = "failed";
function D0(e, t = "") {
  return e && (e.__panoLoadState = ur, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function L0(e, t = "") {
  return e && (e.__panoLoadState = Ho, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function R0(e, t = "") {
  return e && (e.__panoLoadState = Zn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Vu(e, t) {
  return e ? e.__panoLoadState === Zn ? Zn : typeof t == "function" && t(e) ? Ho : ur : Ho;
}
function zu(e) {
  return Vu(e) === Zn;
}
function o2({ presented: e, background: t = Ho, stickers: n = [] } = {}) {
  if (!e) return { status: ur, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === ur, a = r.includes(ur);
  if (o && a) return { status: ur, detail: "mixed" };
  if (o) return { status: ur, detail: "background" };
  if (a) return { status: ur, detail: "stickers" };
  const c = t === Zn, f = r.includes(Zn);
  return c && f ? { status: Zn, detail: "mixed" } : c ? { status: Zn, detail: "background" } : f ? { status: Zn, detail: "stickers" } : { status: Ho, detail: "" };
}
function Fi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function a2(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function jp(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = c ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(c.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (r = f.outputNode);
    } catch {
    }
  return !r && n != null && (r = a2(e == null ? void 0 : e.graph, n)), r;
}
function s2(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function l2(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function c2(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function u2({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (E) => {
    if (!E) return "";
    if (typeof E == "string") return String(E || "").trim();
    if (Array.isArray(E)) {
      if (E.length === 0) return "";
      if (E.length === 1) return o(E[0]);
      const R = String(E[0] || "").trim();
      if (R)
        return Fi(t, {
          filename: R,
          subfolder: String(E[1] || "").trim(),
          type: String(E[2] || "output").trim() || "output"
        });
      for (const Y of E) {
        const G = o(Y);
        if (G) return G;
      }
      return "";
    }
    return typeof (E == null ? void 0 : E.src) == "string" && E.src ? E.src : typeof (E == null ? void 0 : E.url) == "string" && E.url ? E.url : Fi(t, E);
  }, a = (E) => {
    if (!E || typeof E != "object") return "";
    const R = String(E.type || "").trim().toLowerCase();
    if (R === "dataurl") return String(E.value || "");
    if (R !== "comfy_image") return "";
    const Y = String(E.filename || "").trim();
    return Y ? Fi(t, {
      filename: Y,
      subfolder: String(E.subfolder || ""),
      type: String(E.storage || "input")
    }) : "";
  }, c = (E) => {
    const R = e == null ? void 0 : e.nodeOutputs;
    if (!R || E == null) return null;
    const Y = String(E);
    return R instanceof Map ? R.get(E) || R.get(Y) || R.get(Number(Y)) || null : R[E] || R[Y] || null;
  }, f = (E, R) => {
    var G;
    const Y = c(E == null ? void 0 : E.id);
    return Array.isArray((G = Y == null ? void 0 : Y.ui) == null ? void 0 : G[R]) ? Y.ui[R] : Array.isArray(Y == null ? void 0 : Y[R]) ? Y[R] : [];
  }, d = (E, R) => {
    const Y = c(E == null ? void 0 : E.id);
    return Y != null && Y.ui && Object.prototype.hasOwnProperty.call(Y.ui, R) ? Y.ui[R] : Y && Object.prototype.hasOwnProperty.call(Y, R) ? Y[R] : null;
  }, v = (E, R) => {
    const Y = d(E, "pano_sticker_input_state_hash"), G = Array.isArray(Y) ? Y[0] : Y;
    return String(G ?? "").trim() || c2(R);
  }, y = (E) => {
    const R = [], Y = /* @__PURE__ */ new Set();
    for (const G of E || []) {
      const we = o(G);
      !we || Y.has(we) || (Y.add(we), R.push(we));
    }
    return R;
  }, x = (E, R) => {
    var we;
    const Y = [];
    Array.isArray(E == null ? void 0 : E.images) && E.images.length && Y.push(E.images), Array.isArray((we = E == null ? void 0 : E.ui) == null ? void 0 : we.images) && E.ui.images.length && Y.push(E.ui.images);
    const G = [];
    for (const T of Y)
      R >= 0 && R < T.length && G.push(T[R]), G.push(...T);
    return G;
  }, w = (E, R) => {
    var Ve;
    const Y = String(R || "").trim();
    if (!Y) return { src: "", sourceType: "", inputName: "" };
    const we = (Array.isArray(E == null ? void 0 : E.inputs) ? E.inputs : []).findIndex((K) => String((K == null ? void 0 : K.name) || "") === Y);
    if (we < 0) return { src: "", sourceType: "", inputName: Y };
    const T = E.graph ? E.getInputLink(we) : null;
    if ((T == null ? void 0 : T.origin_id) == null) return { src: "", sourceType: "", inputName: Y };
    const O = T.origin_id, J = jp(E, we, O);
    if (!J) return { src: "", sourceType: "", inputName: Y };
    const z = Number(T.origin_slot ?? 0);
    let B = [];
    try {
      B = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(J) || [] : [];
    } catch {
      B = [];
    }
    if (Array.isArray(B) && B.length) {
      const K = [];
      z >= 0 && z < B.length && K.push(B[z]), K.push(...B);
      const Ne = y(K.filter(($e) => !Gs($e)));
      if (Ne.length)
        return { src: Ne[0], srcCandidates: Ne, sourceType: "appNodeImageUrls", inputName: Y };
    }
    const q = c((J == null ? void 0 : J.id) ?? O), me = y(x(q, z).filter((K) => !Gs(K))).map((K) => `${K}&pano_src=${Cu(q)}`);
    if (me.length)
      return { src: me[0], srcCandidates: me, sourceType: "nodeOutputs", inputName: Y };
    const se = Array.isArray(J == null ? void 0 : J.imgs) ? J.imgs : [];
    if (se.length) {
      const K = [];
      z >= 0 && z < se.length && K.push(se[z]), K.push(...se);
      const Ne = y(K);
      if (Ne.length)
        return { src: Ne[0], srcCandidates: Ne, sourceType: "nodeImgs", inputName: Y };
    }
    const I = (Ve = J == null ? void 0 : J.widgets) == null ? void 0 : Ve.find((K) => String((K == null ? void 0 : K.name) || "").toLowerCase() === "image");
    if (I) {
      let K = o(I.value);
      if (K && !K.includes("/") && !K.includes(":") && (J.comfyClass === "LoadImage" || J.type === "LoadImage") && (K = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(K)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(K)}&type=input&subfolder=`), K) return { src: K, sourceType: "widget", inputName: Y };
    }
    return { src: "", sourceType: "", inputName: Y };
  }, M = (E, R = []) => {
    var G;
    const Y = Array.isArray(E == null ? void 0 : E.inputs) ? E.inputs : [];
    for (const we of R) {
      const T = Y.findIndex((B) => String((B == null ? void 0 : B.name) || "") === we), O = T >= 0 && E.graph ? E.getInputLink(T) : null;
      if ((O == null ? void 0 : O.origin_id) == null) continue;
      const J = c(((G = jp(E, T, O.origin_id)) == null ? void 0 : G.id) ?? O.origin_id), z = (Array.isArray(J == null ? void 0 : J.images) ? J.images : []).find(Gs);
      return z ? `${Fi(t, z)}&pano_src=${Cu(J)}` : "";
    }
    return "";
  }, k = (E, R = []) => {
    const Y = Array.isArray(R) ? R : [R];
    for (const G of Y) {
      const we = w(E, G);
      if (String((we == null ? void 0 : we.src) || "").trim()) return we;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, _ = (E) => {
    const R = String(E || "").trim();
    if (!R) return [];
    if (s2(R)) return [R];
    const { filename: Y, subfolder: G } = l2(R);
    return Y ? y([
      Fi(t, { filename: Y, subfolder: G, type: "temp" }),
      Fi(t, { filename: Y, subfolder: G, type: "output" }),
      Fi(t, { filename: Y, subfolder: G, type: "input" }),
      R
    ]) : [R];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (E) => {
      var R, Y;
      try {
        (Y = (R = E == null ? void 0 : E.__panoLinkedInputImageCache) == null ? void 0 : R.forEach) == null || Y.call(R, (G, we, T) => {
          var O;
          G != null && G.img && ((O = r == null ? void 0 : r.isImageLoadFailed) != null && O.call(r, G.img)) && T.delete(we);
        });
      } catch {
      }
    },
    externalStateHash: v,
    invalidateUiImage: (E, R) => {
      var Y;
      (Y = E == null ? void 0 : E.delete) == null || Y.call(E, `__ui__${String(R || "")}`);
    },
    linkedValue: (E, R) => {
      var O, J, z, B;
      const Y = String(R || ""), G = Array.isArray(E == null ? void 0 : E.inputs) ? E.inputs.findIndex((q) => String((q == null ? void 0 : q.name) || "") === Y) : -1, we = G >= 0 && E.graph ? E.getInputLink(G) : null;
      if (we) {
        const q = c(we.origin_id), me = [
          q == null ? void 0 : q.output,
          q == null ? void 0 : q.result,
          (O = q == null ? void 0 : q.data) == null ? void 0 : O.output,
          (J = q == null ? void 0 : q.data) == null ? void 0 : J.result,
          (z = q == null ? void 0 : q.ui) == null ? void 0 : z.output,
          (B = q == null ? void 0 : q.ui) == null ? void 0 : B.result
        ];
        for (const se of me) {
          if (!Array.isArray(se)) continue;
          const I = se[Number(we.origin_slot || 0)];
          if (typeof I == "string" && I.trim()) return I;
        }
      }
      const T = Array.isArray(E == null ? void 0 : E.widgets) ? E.widgets.find((q) => String((q == null ? void 0 : q.name) || "") === Y) : null;
      return String((T == null ? void 0 : T.value) || "");
    },
    linkedVideoFile: M,
    loadPreferredExactLinkedImage: (E, R = [], Y = null, G = "") => {
      var Ze;
      const we = Array.isArray(R) ? R : [R], T = k(E, we), J = (Array.isArray(T == null ? void 0 : T.srcCandidates) && T.srcCandidates.length ? T.srcCandidates : [T == null ? void 0 : T.src]).map((Ct) => String(Ct || "").trim()).filter(Boolean);
      if (!J.length) return null;
      const z = y(J.flatMap((Ct) => _(Ct)));
      if (!z.length) return null;
      E.__panoLinkedInputImageCache || (E.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const B = String(G || we.join("|") || "image_exact"), q = J.join(`
`), me = E.__panoLinkedInputImageCache.get(B);
      if (me && me.srcRaw === q && me.img) return me.img;
      const se = n || globalThis.Image;
      if (typeof se != "function") return null;
      const I = new se();
      (Ze = r == null ? void 0 : r.markImageLoading) == null || Ze.call(r, I, q);
      const Ve = { srcRaw: q, resolvedSrc: "", img: I };
      E.__panoLinkedInputImageCache.set(B, Ve);
      let K = -1;
      const Ne = (Ct) => {
        var Ke, It, fn;
        Ct === "ready" ? (Ke = r == null ? void 0 : r.markImageReady) == null || Ke.call(r, I, q) : (It = r == null ? void 0 : r.markImageFailed) == null || It.call(r, I, q), Y == null || Y(I), (fn = E.setDirtyCanvas) == null || fn.call(E, !0, !0);
      }, $e = () => {
        if (K += 1, K >= z.length) {
          Ne("failed");
          return;
        }
        Ve.resolvedSrc = z[K], I.src = Ve.resolvedSrc;
      };
      return I.onload = () => Ne("ready"), I.onerror = () => {
        if (K + 1 < z.length) {
          $e();
          return;
        }
        Ne("failed");
      }, $e(), I;
    },
    output: c,
    resolvePreferredExactLinkedSource: k,
    source: o,
    uiImage: (E, R, Y, G = null) => {
      var q, me, se;
      const we = f(E, R)[0] || null, T = o(we);
      if (!T) return null;
      const O = `__ui__${R}`, J = (q = Y == null ? void 0 : Y.get) == null ? void 0 : q.call(Y, O);
      if (J && J.__panoSrc === T) return J;
      const z = n || globalThis.Image;
      if (typeof z != "function") return null;
      const B = new z();
      return B.__panoSrc = T, (me = r == null ? void 0 : r.markImageLoading) == null || me.call(r, B, T), B.onload = () => {
        var I;
        (I = r == null ? void 0 : r.markImageReady) == null || I.call(r, B, T), G == null || G(B);
      }, B.onerror = () => {
        var I;
        (I = r == null ? void 0 : r.markImageFailed) == null || I.call(r, B, T), G == null || G(B);
      }, B.src = T, (se = Y == null ? void 0 : Y.set) == null || se.call(Y, O, B), B;
    },
    uiList: f,
    uiValue: d
  };
}
const Hp = 2;
function pi(e, t) {
  return Math.floor(e * t + 0.5);
}
function f2({ video: e, clock: t, pageHidden: n, fps: r, span: o, loop: a, onFrame: c, onCapture: f, onChange: d }) {
  let v = 0, y = !1, x = !1, w = { name: "idle" }, M = [];
  const k = () => y && !x, _ = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function F() {
    for (const K of M) K();
    M = [];
  }
  function $(K, Ne = {}) {
    return F(), w = { name: K, ...Ne }, d(), w;
  }
  function X(K, Ne, $e) {
    const Ze = () => {
      w === K && $e();
    };
    e.addEventListener(Ne, Ze), M.push(() => e.removeEventListener(Ne, Ze));
  }
  function C(K, Ne) {
    let $e = t.requestFrame(function Ze(Ct) {
      w === K && (Ne(Ct), w === K && ($e = t.requestFrame(Ze)));
    });
    M.push(() => t.cancelFrame($e));
  }
  function V(K) {
    v = K, c(v);
  }
  function E() {
    return $(x ? "error" : "idle");
  }
  function R() {
    x = !0, E();
  }
  function Y() {
    const { seekable: K } = e, Ne = K != null && K.length ? K.end(K.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(v / r(), Number.isFinite(Ne) ? Ne : 1 / 0));
  }
  function G(K) {
    if (!k()) return K === "play" ? z() : E();
    if (e.readyState < Hp) {
      const Ne = $("loading", { then: K });
      return X(Ne, "loadeddata", () => G(Ne.then)), X(Ne, "error", R), Ne;
    }
    return K === "play" && v / r() >= Number(e.duration) ? z() : we(K, !1);
  }
  function we(K, Ne) {
    const $e = Y();
    if (!e.ended && pi(Number(e.currentTime), r()) === pi($e, r())) return T(K);
    const Ze = $("seeking", { then: K, frame: v, retried: Ne });
    return X(Ze, "seeked", () => {
      const Ct = pi(Number(e.currentTime), r()) === pi(Y(), r()), Ke = v === Ze.frame;
      Ct || Ke && Ze.retried ? T(Ze.then) : we(Ze.then, Ke);
    }), X(Ze, "error", R), e.currentTime = $e, Ze;
  }
  function T(K) {
    return K === "play" ? O() : (f(), E());
  }
  function O() {
    const K = $("playingVideo", { presented: Number(e.currentTime), shown: !1 });
    if (X(K, "pause", () => e.ended ? J() : me()), X(K, "ended", J), X(K, "error", R), a() && pi(Number(e.duration), r()) >= o()) {
      const $e = e.loop;
      e.loop = !0, M.push(() => {
        e.loop = $e;
      });
    }
    const Ne = ($e, Ze) => {
      K.presented = $e, Ze && !K.shown && (K.shown = !0, d()), B(pi($e, r()));
    };
    if (_()) {
      let $e = e.requestVideoFrameCallback(function Ze(Ct, Ke) {
        w === K && (Ne(Number(Ke.mediaTime), !0), w === K && ($e = e.requestVideoFrameCallback(Ze)));
      });
      M.push(() => {
        var Ze;
        return (Ze = e.cancelVideoFrameCallback) == null ? void 0 : Ze.call(e, $e);
      });
    } else
      C(K, () => Ne(Number(e.currentTime), e.readyState >= Hp));
    return Promise.resolve(e.play()).catch(() => {
      w === K && me();
    }), K;
  }
  function J() {
    f(), z();
  }
  function z() {
    const K = $("playingClock", { startTs: t.now(), startFrame: v });
    return C(K, (Ne) => B(K.startFrame + Math.floor((Ne - K.startTs) / 1e3 * r()))), K;
  }
  function B(K) {
    if (K < o()) {
      V(K);
      return;
    }
    if (!a()) {
      q(o() - 1);
      return;
    }
    w.name === "playingVideo" && (F(), e.pause()), V(0), G("play");
  }
  function q(K) {
    w.name === "playingVideo" ? (F(), e.pause(), V(Math.max(0, K)), f()) : V(Math.max(0, K)), G("still");
  }
  function me() {
    if (w.name === "loading" || w.name === "seeking")
      w.then = "still", d();
    else if (w.name === "playingVideo") {
      const K = _() && !n() ? w.presented : Number(e.currentTime);
      q(Math.min(pi(K, r()), o() - 1));
    } else w.name === "playingClock" && q(Math.min(v, o() - 1));
  }
  function se() {
    if (!Ve()) {
      if (v >= o() - 1 && V(0), w.name === "loading" || w.name === "seeking") {
        w.then = "play", d();
        return;
      }
      G("play");
    }
  }
  function I(K) {
    const Ne = Math.max(0, Math.round(K));
    if (w.name === "loading" || w.name === "seeking") {
      w.then = "still", V(Ne), d();
      return;
    }
    w.name === "playingVideo" && (F(), e.pause()), V(Ne), G("still");
  }
  function Ve() {
    return w.name === "playingVideo" || w.name === "playingClock" || w.then === "play";
  }
  return {
    get frame() {
      return v;
    },
    get state() {
      return w.name;
    },
    get playing() {
      return Ve();
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return w.name === "playingVideo" && w.shown;
    },
    play: se,
    stop: me,
    seek: I,
    toggle() {
      Ve() ? me() : se();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(K) {
      F(), y = !!K, x = !1, G("still");
    },
    dispose() {
      F(), y = !1, w = { name: "idle" };
    }
  };
}
const d2 = "state_json", h2 = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Xc = "sticker_image_1", p2 = "external_image", Ms = "pano_sticker_input_images", m2 = !0, Ws = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], vr = Math.PI / 180, Vi = 180 / Math.PI, qc = 1, g2 = "rgb(255, 221, 87)", y2 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, b2 = 64, Gp = 40, Jc = 16, v2 = 0.45, Kp = 180, _2 = 160, vl = 24, x2 = 4, w2 = 4, Ns = /* @__PURE__ */ new Map(), Bp = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map(), S2 = 12, Jn = u2({
  app: Cr,
  api: Kt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: zu,
    markImageFailed: R0,
    markImageLoading: D0,
    markImageReady: L0
  }
}), k2 = Jn.assetSource, M2 = Jn.source, Zc = Jn.uiImage, N2 = Jn.invalidateUiImage, P2 = Jn.resolvePreferredExactLinkedSource, Qc = Jn.loadPreferredExactLinkedImage;
function Ps(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function A2(e) {
  return 1 - Math.pow(1 - e, 3);
}
function C2(e, t, n) {
  const r = Z((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function I2(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = bi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (bi.delete(t), bi.set(t, n), n);
}
function O2(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (bi.delete(n), bi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); bi.size > S2; ) {
      const o = bi.keys().next().value;
      if (!o) break;
      bi.delete(o);
    }
}
function E2(e) {
  return e * e * e;
}
function Ll(e, t, n) {
  return { x: e, y: t, z: n };
}
function Up(e, t) {
  return Ll(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Wp(e, t) {
  return Ll(e.x * t, e.y * t, e.z * t);
}
function eu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function F2(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Ll(e.x / t, e.y / t, e.z / t);
}
function As(e) {
  return {
    yaw: Gt(Math.atan2(e.x, e.z) * Vi),
    pitch: Z(Math.asin(Z(e.y, -1, 1)) * Vi, -90, 90)
  };
}
function Gr(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, c = t[r].y, f = t[o].x, d = t[o].y;
    c > e.y != d > e.y && e.x < (f - a) * (e.y - c) / (d - c || 1e-6) + a && (n = !n);
  }
  return n;
}
function mi(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function tu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), f = r * r + o * o;
  if (f <= 1e-6) return mi(e, t);
  const d = Z((a * r + c * o) / f, 0, 1), v = Number(t.x || 0) + r * d, y = Number(t.y || 0) + o * d, x = Number(e.x || 0) - v, w = Number(e.y || 0) - y;
  return x * x + w * w;
}
function Yn(e, t, n) {
  return e + (t - e) * n;
}
function _r(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Z(n, 0, 1)})`;
}
function T2(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Cs = { fillStyle: "", url: "" };
function D2(e, t, n) {
  if (Cs.url && Cs.fillStyle === String(e || ""))
    return Cs.url;
  const r = T2(`
<svg xmlns="http://www.w3.org/2000/svg" width="${vl}" height="${vl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Cs = { fillStyle: String(e || ""), url: r }, r;
}
function Ys(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function jn(e) {
  return {
    r: Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Z(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function yn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function L2(e) {
  return Ws.some((t) => Ys(e, t.color));
}
function nu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = Z(Number(t), 0, 1), a = Z(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const c = Math.floor(r * 6), f = r * 6 - c, d = a * (1 - o), v = a * (1 - f * o), y = a * (1 - (1 - f) * o);
  switch (c % 6) {
    case 0:
      return { r: a, g: y, b: d };
    case 1:
      return { r: v, g: a, b: d };
    case 2:
      return { r: d, g: a, b: y };
    case 3:
      return { r: d, g: v, b: a };
    case 4:
      return { r: y, g: d, b: a };
    default:
      return { r: a, g: d, b: v };
  }
}
function ru(e) {
  const t = Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let f = 0;
  c > 1e-6 && (o === t ? f = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? f = ((r - t) / c + 2) / 6 : f = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: f, s: d, v: o };
}
function go(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const $0 = "pano_suite.ui_settings.v1", V0 = "pano_suite.node_grid_visibility.v1";
let So = null, xr = null;
function Xs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function R2() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem($0)) || "").trim();
    if (!t) return So ? Xs(So) : null;
    const n = JSON.parse(t), r = Xs(n);
    return So = r, r;
  } catch {
    return So ? Xs(So) : null;
  }
}
function $2(e) {
  var n;
  const t = Xs(e);
  So = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem($0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function z0() {
  var e;
  if (xr && typeof xr == "object")
    return xr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(V0)) || "").trim();
    if (!t)
      return xr = {}, xr;
    const n = JSON.parse(t);
    return xr = n && typeof n == "object" ? n : {}, xr;
  } catch {
    return xr = {}, xr;
  }
}
function V2(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = z0()[n];
  return typeof o == "boolean" ? o : !!t;
}
function z2(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = z0();
  r[n] = !!t, xr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(V0, JSON.stringify(r));
  } catch {
  }
}
function j2(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Yp(e) {
  const { paintCount: t, maskCount: n } = j2(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let o = 0, a = 0;
  return r.forEach((c) => {
    String((c == null ? void 0 : c.layerKind) || "paint") === "mask" ? a += 1 : o += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: o,
    maskRasterCount: a,
    totalPaintCount: t + o,
    totalMaskCount: n + a
  };
}
function yo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Is(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function H2(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Ti(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function G2(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function K2(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function B2(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function U2(e, t, n = {}) {
  var lh;
  await w0(e, { tolerateOperationFailure: !0 }), Jn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = H2(e, t);
  await Pf();
  const f = Is(e, "output_preset"), d = Is(e, "coverage"), v = Is(e, "bg_color"), y = Is(e, d2), x = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Qc(
      e,
      i,
      () => de(),
      `background:size:${i.join("|")}`
    );
  }, w = () => {
    const i = x();
    return B2(i);
  }, M = (i = 2048) => {
    const s = f == null ? void 0 : f.value;
    return K2(s) ? w() || Math.max(1, Math.round(Number(i || 2048))) : G2(s, i);
  }, k = t === "stickers" && e.__panoSceneStateV2 === !0, _ = (k ? Eg : Og)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: M(2048),
    backgroundColor: String((v == null ? void 0 : v.value) || "#00ff00"),
    coverage: Hn(d == null ? void 0 : d.value),
    sharedUiSettings: R2(),
    active: Rg(e)
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0, t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], s = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((u) => String((u == null ? void 0 : u.id) || "") === s) || i[0] || null;
  })() : null, $ = F ? md(F, !1) : { width: 220, height: 132 }, X = T0(t), C = /* @__PURE__ */ Go({
    stageStatus: ur,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (X.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (X.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(X.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Me.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Me.aspect,
      rotateIcon: Me.rotate_90,
      aspectChoices: [],
      rollKnob: null
    },
    frameRollKnob: {
      visible: !1,
      disabled: r,
      rollDeg: 0,
      displayValue: "0",
      dragging: !1,
      armed: !1
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: Me.fullscreen,
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
      historyEntries: Array.from({ length: 8 }, (i, s) => ({ index: s, color: null })),
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
      width: $.width,
      height: $.height,
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), V = document.createElement("div");
  document.body.appendChild(V);
  const E = ({ intent: i, file: s } = {}) => {
    if (Ar(s)) {
      if (i === "add") {
        Cd(s);
        return;
      }
      i === "replace" && Rb(s);
    }
  }, R = ({ intent: i } = {}) => {
  }, Y = af(i2, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: X,
    paintSwatches: Ws.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: _r(i.color, 1)
    })),
    uiState: C,
    onClose: () => {
      uo();
    },
    onTimeline: (i) => Fb(i),
    onImageFileSelected: E,
    onImageFileCancelled: R
  });
  let G = null;
  try {
    G = Y.mount(V);
  } catch (i) {
    try {
      Y.unmount();
    } catch {
    }
    throw V.remove(), i;
  }
  const we = V.querySelector(".pano-modal-overlay"), T = V.querySelector(".pano-modal"), O = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), J = T == null ? void 0 : T.querySelector("[data-stage-background]"), z = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), B = ((lh = G == null ? void 0 : G.getPaintOverlayRefs) == null ? void 0 : lh.call(G)) || {}, q = B.cursor || null, me = B.sizePreview || null, se = B.sizeSample || null;
  if (!we || !T || !O || !J || !z || !q || !me || !se)
    throw Y.unmount(), V.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const I = O.getContext("2d"), Ve = T.querySelector("[data-side]"), K = T.querySelector("[data-video-element]"), Ne = T.querySelector(".pano-floating-right"), $e = T.querySelector(".pano-floating-top"), Ze = T.querySelector("[data-tool-rail]"), Ct = T.querySelector("[data-frame-rail]"), Ke = T.querySelector("[data-frame-roll-knob]"), It = T.querySelector("[data-paint-dock]"), fn = T.querySelector(".pano-video-transport"), hr = T.querySelector("[data-selection-menu]"), nr = T.querySelector("[data-tooltip]"), An = T.querySelector("[data-camera-preview-host]"), Rn = T.querySelector("[data-camera-preview-canvas]"), D = T.querySelector("[data-paint-color-row]"), j = T.querySelector("[data-paint-color-pop]"), ee = T.querySelector("[data-paint-color-sv]"), le = T.querySelector("[data-paint-color-sv-cursor]"), ue = T.querySelector("[data-paint-hue-strip]"), fe = T.querySelector("[data-paint-hue-handle]");
  let ve = 0, ke = 0;
  z == null || z.removeAttribute("data-stage-ready"), z == null || z.setAttribute("data-stage-loading-kind", "boot"), O.style.opacity = "1", J.style.opacity = "0", o && (Ve == null || Ve.remove(), T.classList.add("pano-modal-readonly"));
  const Se = () => {
    if (!p.customPaintSessionStart) return;
    if (Ys(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (L2(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      jn(p.customPaintColor),
      ...p.customPaintHistory.filter((s) => !Ys(s, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, ge = (i = !1) => {
    !j || j.hidden || (i ? Se() : p.customPaintSessionStart = null, j.hidden = !0, C.paintDock.colorPopOpen = !1);
  }, Re = () => {
    j && (j.hidden && (p.customPaintSessionStart = jn(p.customPaintColor)), j.hidden = !1, C.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Ni(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), ge(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Ye(), de()), (s = C.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (C.frameRail.aspectOpen = !1)));
  });
  const Ae = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, De = JSON.stringify(ip(_)), p = {
    mode: "pano",
    selectedId: Ae,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Hn(_.coverage),
    historyController: aM(80, { entries: [De], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: jr,
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
    showGrid: V2(e == null ? void 0 : e.id, !0),
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
    paintEngine: mu(),
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
    // PanoramaStickersNode: the Camera row of the Timeline is selected, so the inspector edits the Camera.
    inspectCamera: !1,
    panelWasEnabled: !1,
    viewTween: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, Pe = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let st = null;
  t === "stickers" && (p.selectedId = null, _.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const Xe = /* @__PURE__ */ new Map(), wt = /* @__PURE__ */ new Map(), Ot = /* @__PURE__ */ new Map(), en = /* @__PURE__ */ new Map(), pt = document.createElement("canvas");
  pt.__panoFrameIdx = 0;
  const Ce = {
    dirty: !0,
    rafId: 0,
    running: !0,
    lastTickTs: 0,
    pendingStableLayoutFrames: t === "cutout" ? 2 : 0,
    hasPresentedFrame: !1,
    backgroundDirty: !0,
    backgroundWasVisible: !1,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: ""
  }, Bn = Pw({ onReady: () => de(), onFailed: () => de() });
  let Ut = { key: "", projection: null }, an = { key: null, sceneState: null }, Lr = null, H = null, _e = null;
  const Te = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, Fe = (i) => {
    const s = String(i || "default");
    O.style.cursor !== s && (O.style.cursor = s);
  }, je = {
    timer: 0,
    target: null
  }, Le = {
    active: !1,
    depth: 0
  }, tt = {
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
  }, jt = 9, Lt = [];
  let dn = 0;
  const tn = () => {
    var N, P;
    const i = (N = z == null ? void 0 : z.getBoundingClientRect) == null ? void 0 : N.call(z), s = (P = Ne == null ? void 0 : Ne.getBoundingClientRect) == null ? void 0 : P.call(Ne), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), u = s ? Math.max(0, Number(s.width || 0)) : 0, g = u > 0 ? u + 14 + 12 : 72, b = Math.max(280, Math.floor(l - g * 2)), S = p.fullscreen ? Math.min(1200, b) : b;
    C.videoTransport.shellMaxWidthPx = S;
  }, ii = () => {
    dn || (dn = window.requestAnimationFrame(() => {
      dn = 0, tn();
    }));
  }, Ji = (i) => {
    if (!(i instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(i.audioTracks) && i.audioTracks.length > 0 || i.audioTracks && typeof i.audioTracks.length == "number" && i.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof i.mozHasAudio == "boolean") return i.mozHasAudio;
    } catch {
    }
    try {
      if (Number(i.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!C.videoTransport.hasAudio;
  }, sn = typeof ResizeObserver < "u" ? new ResizeObserver(() => ii()) : null;
  sn == null || sn.observe(z), Ne && (sn == null || sn.observe(Ne)), Lt.push(() => {
    var i;
    dn && (window.cancelAnimationFrame(dn), dn = 0), (i = sn == null ? void 0 : sn.disconnect) == null || i.call(sn);
  }), ii();
  const ln = () => {
    tt.thumbnailJobId += 1, tt.thumbnailSrc = "", C.videoTransport.thumbnails = [], C.videoTransport.thumbnailCount = jt;
  }, wi = async (i, s, l) => {
    const u = String(i || "").trim();
    if (!u) {
      ln();
      return;
    }
    const h = I2(u);
    if (h) {
      tt.thumbnailSrc = u, C.videoTransport.thumbnails = h.thumbnails, C.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    const m = ++tt.thumbnailJobId;
    tt.thumbnailSrc = u, C.videoTransport.thumbnails = [], C.videoTransport.thumbnailCount = jt;
    const g = document.createElement("video");
    g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous";
    const b = await new Promise((ie) => {
      let he = !1;
      const re = (xe) => {
        he || (he = !0, ie(xe));
      };
      g.addEventListener("loadedmetadata", () => re(!0), { once: !0 }), g.addEventListener("canplay", () => re(!0), { once: !0 }), g.addEventListener("error", () => re(!1), { once: !0 }), g.src = u, g.load();
    });
    if (tt.thumbnailJobId !== m) return;
    const S = Number(g.videoWidth || 0), N = Number(g.videoHeight || 0);
    if (!b || S < 1 || N < 1) {
      tt.thumbnailFailedSrcs.add(u);
      return;
    }
    const P = Math.max(0, Number(g.duration || s || 0)), A = document.createElement("canvas"), L = 46, U = Math.max(72, Math.round(S / N * L));
    A.width = U, A.height = L;
    const ne = A.getContext("2d");
    if (!ne) return;
    const Q = [], te = (ie) => new Promise((he) => {
      let re = !1;
      const xe = () => {
        re || (re = !0, he());
      };
      g.addEventListener("seeked", xe, { once: !0 }), g.addEventListener("error", xe, { once: !0 });
      try {
        g.currentTime = ie;
      } catch {
        xe();
      }
    });
    for (let ie = 0; ie < jt; ie += 1) {
      if (tt.thumbnailJobId !== m) return;
      const he = ie / (jt - 1), re = P > 0 ? Math.max(0, Math.min(P - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), P * he)) : 0;
      if (await te(re), tt.thumbnailJobId !== m) return;
      ne.clearRect(0, 0, U, L), ne.drawImage(g, 0, 0, U, L), Q.push({
        id: `thumb-${ie}`,
        src: A.toDataURL("image/jpeg", 0.72),
        time: re,
        label: Wl(re)
      });
    }
    tt.thumbnailJobId === m && (C.videoTransport.thumbnails = Q, C.videoTransport.thumbnailCount = Q.length || jt, O2(u, {
      thumbnails: Q,
      thumbnailCount: Q.length || jt,
      duration: P,
      fps: l
    }));
  };
  Lt.push(() => {
    ln();
  });
  const Rt = f2({
    video: K instanceof HTMLVideoElement ? K : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    pageHidden: () => document.hidden,
    fps: Ja,
    span: () => {
      if (k) return lc();
      const i = Math.round(Number(C.videoTransport.duration || 0) * Ja());
      return K.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => k,
    onFrame: (i) => {
      k ? Cb(i) : ai(), de({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      uy() && (Ce.backgroundDirty = !0);
    },
    onChange: () => {
      ai(), ki(), de({ cause: "frame_view", localOnly: !0 });
    }
  });
  if (Lt.push(() => Rt.dispose()), K instanceof HTMLVideoElement) {
    const i = () => {
      si(), de({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      ai({
        hasAudio: C.videoTransport.hasAudio,
        muted: K.muted,
        volume: Number(K.volume ?? C.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const u = K.dataset.panoSrc;
      u && (tt.failedSrcs.add(u), si(), de());
    };
    for (const [u, h] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      K.addEventListener(u, h), Lt.push(() => K.removeEventListener(u, h));
  }
  function Cn() {
    C.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", u = i.attr === "data-mask-tool";
      i.active = s ? i.value === p.primaryTool : l ? i.key === p.paintTool : u ? i.key === p.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function $n(i) {
    return If(i == null ? void 0 : i.dataTransfer);
  }
  function pr(i) {
    const s = !!i;
    Le.active !== s && (Le.active = s, z.classList.toggle("drop-active", s));
  }
  function Si(i, s, l = p.viewFov, u = 140, h = 620) {
    const m = nx(p.viewYaw, i), g = s - p.viewPitch, b = l - p.viewFov, S = Math.hypot(m, g) + Math.abs(b) * 0.6, N = Math.round(Z(u + S * 2.2, u, h));
    p.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: N,
      startYaw: p.viewYaw,
      startPitch: p.viewPitch,
      startFov: p.viewFov,
      targetPitch: s,
      targetFov: l,
      deltaYaw: m
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, de();
  }
  by();
  function hn() {
    return t === "stickers" ? Ba() : _.shots;
  }
  function Ba() {
    return k ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function rr(i) {
    return k && mt(i);
  }
  function Rl(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function Wt(i) {
    return rr(i) ? bf(i, p.frame) : i;
  }
  function ir(i, s) {
    rr(i) ? Fg(i, p.frame, s) : Object.assign(i, s);
  }
  function pn() {
    const i = _.painting || (_.painting = Io(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function j0(i = "paint") {
    var h, m;
    const s = Array.isArray((m = (h = _.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], u = /* @__PURE__ */ new Set();
    for (const g of s) {
      const b = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !b || u.has(b) || (u.add(b), l.push(b));
    }
    return l;
  }
  function H0() {
    return j0("paint");
  }
  function Wo(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Yo(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function nn(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Xo(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const u = l.match(/^(paint|mask):(.*)$/);
    return u ? { layerKind: u[1] === "mask" ? "mask" : "paint", actionGroupId: String(u[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function $l() {
    var s;
    let i = -1;
    for (const l of Ba())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of pn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = _.painting) == null ? void 0 : s.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function Df(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const u = pn();
    let h = u.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return h ? s != null && (h.z_index = Math.max(0, Number(s || 0))) : (h = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? $l() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, u.push(h)), h;
  }
  function G0(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), u = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((s - u) % 1 + 1) % 1,
        v: Z(l - h, 0, 1)
      },
      {
        u: ((s + u) % 1 + 1) % 1,
        v: Z(l - h, 0, 1)
      },
      {
        u: ((s + u) % 1 + 1) % 1,
        v: Z(l + h, 0, 1)
      },
      {
        u: ((s - u) % 1 + 1) % 1,
        v: Z(l + h, 0, 1)
      }
    ];
  }
  function K0() {
    const i = new Set(H0()), l = pn().filter((u) => i.has(String((u == null ? void 0 : u.actionGroupId) || "")));
    return i.forEach((u) => {
      l.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === u) || l.push({
        id: u,
        type: "strokeGroup",
        actionGroupId: u,
        z_index: $l(),
        locked: !1,
        frame: null
      });
    }), l.sort((u, h) => Number((u == null ? void 0 : u.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), _.painting.groups = l, l;
  }
  function B0(i, s, l) {
    var Q;
    const u = (te) => (Number(te || 0) % 1 + 1) % 1, h = [];
    for (const te of l) {
      const ie = te == null ? void 0 : te.geometry, he = (ie == null ? void 0 : ie.geometryKind) === "lasso_fill" ? ie == null ? void 0 : ie.points : (ie == null ? void 0 : ie.processedPoints) || (ie == null ? void 0 : ie.rawPoints) || (ie == null ? void 0 : ie.points) || [];
      Array.isArray(he) && h.push(...he);
    }
    if (!h.length) return null;
    const m = u(((Q = h[0]) == null ? void 0 : Q.u) || 0);
    let g = 0, b = 0;
    h.forEach((te) => {
      const ie = u((te == null ? void 0 : te.u) || 0);
      g += m + Un(ie, m), b += Number((te == null ? void 0 : te.v) || 0);
    });
    const S = (g / h.length % 1 + 1) % 1;
    let N = 1 / 0, P = -1 / 0, A = 1 / 0, L = -1 / 0;
    h.forEach((te) => {
      const ie = u((te == null ? void 0 : te.u) || 0), he = Un(ie, S);
      N = Math.min(N, he), P = Math.max(P, he);
      const re = Number((te == null ? void 0 : te.v) || 0);
      A = Math.min(A, re), L = Math.max(L, re);
    });
    const U = l.reduce((te, ie) => {
      const he = di(String((ie == null ? void 0 : ie.toolKind) || "pen")), re = Fn[he] || Fn[jr], xe = Math.max(1, Number((ie == null ? void 0 : ie.size) || 10)) * Math.max(0.1, Number((re == null ? void 0 : re.sizeScale) ?? 1));
      return Math.max(te, xe);
    }, 0), ne = Math.max(35e-4, U / 2048);
    return {
      centerUv: { u: ((S + (N + P) * 0.5) % 1 + 1) % 1, v: Z((A + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (P - N) * 0.5 + ne,
      halfH: (L - A) * 0.5 + ne,
      uvPad: ne
    };
  }
  function oi(i, s, l) {
    const u = String(i || "").trim();
    if (!u) return null;
    const h = pn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === u);
    if (!h) return null;
    const m = l || or(u, s);
    return h.frame = B0(u, s, m), h.frame;
  }
  function Zi() {
    var u;
    const i = Ba().map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = K0().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), l = (Array.isArray((u = _.painting) == null ? void 0 : u.raster_objects) ? _.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...s, ...l].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function Vl(i = !0) {
    var l, u, h, m, g, b;
    const s = Zi().filter((S) => S.type === "strokeGroup").map((S) => String(S.actionGroupId || "")).filter((S) => !!S);
    if (i) {
      const S = String(((u = (l = p.interaction) == null ? void 0 : l.stroke) == null ? void 0 : u.actionGroupId) || "").trim(), N = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), P = String(((b = (g = p.interaction) == null ? void 0 : g.stroke) == null ? void 0 : b.toolKind) || "").trim();
      S && N === "paint" && P !== "eraser" && !s.includes(S) && s.push(S);
    }
    return s;
  }
  function zl(i = !0) {
    var b, S, N, P, A, L;
    const s = Zi();
    if (!i) return s;
    const l = String(((S = (b = p.interaction) == null ? void 0 : b.stroke) == null ? void 0 : S.actionGroupId) || "").trim(), u = String(((P = (N = p.interaction) == null ? void 0 : N.stroke) == null ? void 0 : P.layerKind) || "").trim(), h = String(((L = (A = p.interaction) == null ? void 0 : A.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!l || u !== "paint" || h === "eraser" || s.some((U) => U.type === "strokeGroup" && String(U.actionGroupId || "") === l))
      return s;
    const m = kt();
    let g = s.reduce((U, ne) => Math.max(U, Number((ne == null ? void 0 : ne.z_index) || 0)), -1) + 1;
    return m && qt(m) && String(m.actionGroupId || "") === l && (g = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: g,
        item: null
      }
    ].sort((U, ne) => Number((U == null ? void 0 : U.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0));
  }
  function U0() {
    return pn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => eo(Wo("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function W0() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Qi(Yo((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Lf(i = p.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, u = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || u;
    }
    return !1;
  }
  function Y0() {
    var s, l, u, h;
    let i = null;
    try {
      const m = Vl(), g = ((h = (u = (l = (s = p.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : u.displayPaint) == null ? void 0 : h.canvas) || null;
      g && (i = {
        source: g,
        revision: `${ta()}:${jl()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function jl() {
    var h, m, g, b, S, N, P;
    const i = p.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Lf(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const A = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, L = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), U = ((g = A == null ? void 0 : A.rawPoints) == null ? void 0 : g.length) ?? ((b = A == null ? void 0 : A.points) == null ? void 0 : b.length) ?? 0, ne = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${L || "paint"}_${s}_live${ne}_${U}_${p.livePaintInteractionRevision}`;
    }
    const l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.actionGroupId) || ""), u = String(((N = i == null ? void 0 : i.item) == null ? void 0 : N.rasterObjectId) || ((P = i == null ? void 0 : i.item) == null ? void 0 : P.id) || "");
    return `_${s}_${l || u || "active"}_${p.livePaintInteractionRevision}`;
  }
  function Hl() {
    const i = Array.isArray(_.shots) ? _.shots : [], s = Array.isArray(_.stickers) ? _.stickers : [];
    return [...i, ...s];
  }
  function Vn(i) {
    return !!i && Array.isArray(_.shots) && _.shots.includes(i);
  }
  function mt(i) {
    return !!i && Array.isArray(_.stickers) && _.stickers.includes(i);
  }
  function In() {
    var i;
    return Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : [];
  }
  function Qi(i) {
    const s = nn(i);
    if (!s) return null;
    const l = In().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Yo(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function mn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = nn(i.rasterObjectId || i.id || "");
    return !!s && !!Qi(Yo(s));
  }
  function eo(i) {
    const s = Xo(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const u = pn().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === l || String((h == null ? void 0 : h.actionGroupId) || "") === l);
    return u ? {
      ...u,
      id: Wo("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function qt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!eo(Wo(l, s));
  }
  function or(i, s = null) {
    const l = Xo(i, s), u = String(l.actionGroupId || "").trim();
    return u ? lo(l.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === u) : [];
  }
  function X0(i, s = "paint") {
    const l = String(i || "").trim(), h = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${p.mode}:${ea()}`;
    if (p.mode === "frame") {
      const m = He(), g = String((m == null ? void 0 : m.id) || ""), b = m ? Zt(m) : null;
      return `${h}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((b == null ? void 0 : b.x) || 0))}:${Math.round(Number((b == null ? void 0 : b.y) || 0))}:${Math.round(Number((b == null ? void 0 : b.w) || 0))}:${Math.round(Number((b == null ? void 0 : b.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function Ua(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: Z(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function Un(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function Gl(i, s = null, l = null) {
    var N;
    const u = Xo(i, s), h = Array.isArray(l) ? l : or(u.actionGroupId, u.layerKind), m = [];
    if (h.forEach((P) => {
      const A = (P == null ? void 0 : P.geometry) || null, L = (A == null ? void 0 : A.geometryKind) === "lasso_fill" ? A == null ? void 0 : A.points : (A == null ? void 0 : A.processedPoints) || (A == null ? void 0 : A.rawPoints) || (A == null ? void 0 : A.points) || [];
      Array.isArray(L) && m.push(...L);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((N = m[0]) == null ? void 0 : N.u) || 0);
    let b = 0, S = 0;
    return m.forEach((P) => {
      b += g + Un(Number((P == null ? void 0 : P.u) || 0), g), S += Number((P == null ? void 0 : P.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: Z(S / m.length, 0, 1)
    };
  }
  function Wa(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = Un(Number(i.u || 0), h), b = Number(i.v || 0) - m, S = Number(u || 0) * vr, N = Math.cos(S), P = Math.sin(S), A = Math.max(0.02, Number(l || 1)), L = (g * N - b * P) * A, U = (g * P + b * N) * A;
    return {
      ...i,
      u: ((h + L) % 1 + 1) % 1,
      v: Z(m + U, 0, 1)
    };
  }
  function Rf(i, s, l, u = null, h = null, m = null) {
    const g = Xo(i, h), b = String(g.actionGroupId || "").trim();
    if (!b) return !1;
    const S = lo(g.layerKind), N = Array.isArray(u) ? new Map(u.map((A) => [String((A == null ? void 0 : A.id) || ""), A])) : null;
    let P = !1;
    if (S.forEach((A) => {
      if (String((A == null ? void 0 : A.actionGroupId) || "").trim() !== b) return;
      const L = (N == null ? void 0 : N.get(String((A == null ? void 0 : A.id) || ""))) || A, U = A == null ? void 0 : A.geometry, ne = L == null ? void 0 : L.geometry;
      !U || !ne || (Array.isArray(ne.points) && (U.points = ne.points.map((Q) => Ua(Q, s, l)), P = !0), Array.isArray(ne.rawPoints) && (U.rawPoints = ne.rawPoints.map((Q) => Ua(Q, s, l)), P = !0), Array.isArray(ne.processedPoints) && (U.processedPoints = ne.processedPoints.map((Q) => Ua(Q, s, l)), P = !0));
    }), P && m) {
      const A = pn().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === b);
      A && (A.frame = null);
    }
    return P;
  }
  function $f(i, s = 1, l = 0, u = null, h = null, m = null) {
    const g = Xo(i, h), b = String(g.actionGroupId || "").trim();
    if (!b) return !1;
    const S = lo(g.layerKind), N = Array.isArray(u) ? u : or(b, g.layerKind), P = Array.isArray(N) ? new Map(N.map((U) => [String((U == null ? void 0 : U.id) || ""), U])) : null, A = (m == null ? void 0 : m.centerUv) ?? Gl(b, g.layerKind, N);
    let L = !1;
    if (S.forEach((U) => {
      if (String((U == null ? void 0 : U.actionGroupId) || "").trim() !== b) return;
      const ne = (P == null ? void 0 : P.get(String((U == null ? void 0 : U.id) || ""))) || U, Q = U == null ? void 0 : U.geometry, te = ne == null ? void 0 : ne.geometry;
      !Q || !te || (Array.isArray(te.points) && (Q.points = te.points.map((ie) => Wa(ie, A, s, l)), L = !0), Array.isArray(te.rawPoints) && (Q.rawPoints = te.rawPoints.map((ie) => Wa(ie, A, s, l)), L = !0), Array.isArray(te.processedPoints) && (Q.processedPoints = te.processedPoints.map((ie) => Wa(ie, A, s, l)), L = !0));
    }), L && m) {
      const U = pn().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === b);
      U && (U.frame = null);
    }
    return L;
  }
  function Vf(i, s, l, u = null) {
    const h = nn(i);
    if (!h) return !1;
    const m = In().find((P) => String((P == null ? void 0 : P.id) || "").trim() === h);
    if (!m) return !1;
    const g = u && typeof u == "object" ? u : m, b = (g == null ? void 0 : g.transform) || {}, S = Number(b.du || 0) + Number(s || 0), N = Z(Number(b.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = S, m.transform.dv = N, !0;
  }
  function q0(i, s = 1, l = null) {
    const u = nn(i);
    if (!u) return !1;
    const h = In().find((N) => String((N == null ? void 0 : N.id) || "").trim() === u);
    if (!h) return !1;
    const m = l && typeof l == "object" ? l : h, g = (m == null ? void 0 : m.transform) || {}, b = Math.max(0.01, Number(g.scale || 1)), S = Z(b * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = S, !0;
  }
  function kt() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const s = eo(i);
    if (s) return s;
    const l = Qi(i);
    return l || (t === "cutout" ? Hl().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null : hn().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null);
  }
  function ar() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((u) => {
      const h = String(u || "").trim();
      if (!h || l.has(h)) return;
      l.add(h);
      const m = h === String(p.selectedId || "") ? kt() : eo(h) || Qi(h) || (t === "cutout" ? Hl().find((g) => String((g == null ? void 0 : g.id) || "") === h) : hn().find((g) => String((g == null ? void 0 : g.id) || "") === h));
      m && s.push(m);
    }), s;
  }
  function Ya(i = null) {
    const s = Array.isArray(i) ? i : ar();
    if (!s || s.length < 2) return null;
    const l = s.map((N) => Yt(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!l.length) return null;
    const u = l.flatMap((N) => N.corners.map((P) => Number((P == null ? void 0 : P.x) || 0))), h = l.flatMap((N) => N.corners.map((P) => Number((P == null ? void 0 : P.y) || 0))), m = Math.min(...u), g = Math.max(...u), b = Math.min(...h), S = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + g) * 0.5, y: (b + S) * 0.5 },
      corners: [
        { x: m, y: b },
        { x: g, y: b },
        { x: g, y: S },
        { x: m, y: S }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + g) * 0.5, y: b, a: { x: m, y: b }, b: { x: g, y: b } },
        { edge: "right", x: g, y: (b + S) * 0.5, a: { x: g, y: b }, b: { x: g, y: S } },
        { edge: "bottom", x: (m + g) * 0.5, y: S, a: { x: g, y: S }, b: { x: m, y: S } },
        { edge: "left", x: m, y: (b + S) * 0.5, a: { x: m, y: S }, b: { x: m, y: b } }
      ],
      rotateStemBase: { x: (m + g) * 0.5, y: b },
      rotateHandle: { x: (m + g) * 0.5, y: b - 30 }
    };
  }
  function zf(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(p.selectedIds) && p.selectedIds.includes(s);
  }
  function Xa() {
    const i = kt();
    return i ? qt(i) || mn(i) ? "stroke" : Vn(i) ? "frame" : "image" : null;
  }
  function wn(i) {
    if (!i || typeof i != "object") return !1;
    if (qt(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = pn().find((u) => String((u == null ? void 0 : u.actionGroupId) || (u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (mn(i)) {
      const s = nn(i.rasterObjectId || i.id || ""), l = In().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function Kl(i = null) {
    const s = Array.isArray(i) ? i : ar();
    return s.length > 0 && s.every((l) => wn(l));
  }
  function J0(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (qt(i)) {
      const u = String(i.actionGroupId || i.id || "").trim(), h = pn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    if (mn(i)) {
      const u = nn(i.rasterObjectId || i.id || ""), h = In().find((m) => String((m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function Z0() {
    if (r) return;
    const i = ar();
    if (!i.length) return;
    const s = !Kl(i);
    let l = !1;
    i.forEach((u) => {
      J0(u, s) && (l = !0);
    }), l && (ot(), lt(), Ye(), ze(), de());
  }
  function mr(i) {
    p.inspectCamera = !1, Pe.selection = null, p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && mt(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && Vn(i) ? _.active.selected_shot_id = i.id || null : i ? Vn(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function Q0(i, s = null) {
    const l = [], u = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const b = String((g == null ? void 0 : g.id) || "").trim();
      !b || u.has(b) || (u.add(b), l.push(b));
    }), p.selectedIds = l, p.inspectCamera = !1, Pe.selection = null;
    const h = String(s || "").trim();
    p.selectedId = h && l.includes(h) ? h : l[l.length - 1] || null;
    const m = kt();
    _.active.selected_sticker_id = m && mt(m) && m.id || null, m && Vn(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function jf() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, u) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${u + 1}`)
    })), s = (Array.isArray(_.stickers) ? _.stickers : []).map((l, u) => {
      var m, g;
      const h = Jt(l) ? String(l.id || Xc) : String(((g = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : g.name) || l.asset_id || l.id || `Image ${u + 1}`);
      return {
        kind: "image",
        item: l,
        label: h
      };
    });
    return [...i, ...s];
  }
  function ey(i) {
    return i === "frame" ? Me.camera : i === "stroke" ? Me.paintbrush_vertical_tool : Me.image;
  }
  function Bl(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: ey(i.kind)
    };
  }
  function qa() {
    return $l();
  }
  function Jt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : k ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === Xc || String(i.source_kind || "") === p2;
  }
  function to(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function ty(i) {
    return Jt(i) && to(i) ? jg : 1;
  }
  function ny() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function ry() {
    return String(ny() || "") === "lasso_fill";
  }
  function iy() {
    if (r) return;
    const i = kt();
    !i || !Jt(i) || (i.visible = to(i), Ht(), ot(), lt(), ze(), Ye(), de());
  }
  function oy() {
    if (r || t !== "stickers") return;
    const i = kt();
    if (!i || !Jt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = Yl(Ms, () => {
      de();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = li(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), ot(), lt(), ze(), Ye(), de();
  }
  function ay(i) {
    if (!i || !Jt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, u = Yl(Ms, () => {
      de();
    });
    return u && (u.complete || u.naturalWidth || u.width) && (l.vFOV_deg = li(
      l.hFOV_deg,
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    )), l;
  }
  function sy() {
    const i = kt();
    if (!i || !Jt(i)) return !1;
    const s = ay(i);
    if (!s) return !1;
    const l = (u, h) => Math.abs(Number(u || 0) - Number(h || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Hf(i) {
    return Jn.uiList(e, i);
  }
  function Ul(i) {
    return Jn.uiValue(e, i);
  }
  function Gf() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return al(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function ly() {
    const { metaKey: i } = Gf(), s = Ul(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function Kf(i) {
    return i ? i instanceof HTMLVideoElement ? [
      String(i.currentSrc || i.src || ""),
      Number(i.videoWidth || 0),
      Number(i.videoHeight || 0)
    ].join("|") : i instanceof HTMLCanvasElement ? [
      "canvas",
      Number(i.width || 0),
      Number(i.height || 0),
      String(i.__panoFrameIdx || 0)
    ].join("|") : [
      String(i.currentSrc || i.src || ""),
      Number(i.naturalWidth || i.width || 0),
      Number(i.naturalHeight || i.height || 0)
    ].join("|") : "none";
  }
  function Wl(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), u = s % 60;
    return `${l}:${String(u).padStart(2, "0")}`;
  }
  function Ja() {
    return k ? _.timeline.fps : tt.metaFps || 1e3;
  }
  function ai(i = {}) {
    const s = Number(i.duration ?? C.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? C.videoTransport.fps ?? 24)), u = Rt.frame / Ja(), h = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!C.videoTransport.ready, m = Rt.playing, g = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!C.videoTransport.visible, b = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(K instanceof HTMLVideoElement ? K.muted : C.videoTransport.muted), S = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : K instanceof HTMLVideoElement ? K.volume : C.videoTransport.volume
    ), N = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Ji(K), P = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!C.videoTransport.loop;
    Object.assign(C.videoTransport, {
      ready: h,
      playing: m,
      visible: g,
      loop: P,
      currentTime: Number.isFinite(u) ? u : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, u / s * 100)) : 0,
      currentTimeLabel: Wl(u),
      durationLabel: Wl(s),
      frameCount: Math.max(0, Number(i.frameCount ?? C.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: N,
      muted: b,
      volume: Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : C.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? C.videoTransport.thumbnailCount ?? jt))
    });
  }
  function Bf() {
    return !!(K instanceof HTMLVideoElement && !k && K.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function Uf() {
    if (!(K instanceof HTMLVideoElement) || !C.videoTransport.hasAudio) return;
    const i = !K.muted;
    K.muted = i, !i && Number(K.volume || 0) <= 0 && (K.volume = Math.max(0.01, Number(C.videoTransport.volume || 1))), ai({
      hasAudio: C.videoTransport.hasAudio,
      muted: K.muted,
      volume: Number(K.volume ?? C.videoTransport.volume ?? 1)
    });
  }
  function cy() {
    ai({
      visible: Bf()
    });
  }
  function uy() {
    if (!(K instanceof HTMLVideoElement) || Number(K.videoWidth || 0) < 1 || Number(K.videoHeight || 0) < 1) return !1;
    const i = Number(K.videoWidth || 0), s = Number(K.videoHeight || 0);
    (pt.width !== i || pt.height !== s) && (pt.width = i, pt.height = s);
    const l = pt.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(K, 0, 0, i, s), pt.__panoFrameIdx = Number(pt.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function Wf() {
    return !Rt.showsVideo && Number(pt.width || 0) > 0 && Number(pt.height || 0) > 0 && Number(pt.__panoFrameIdx || 0) > 0 ? pt : K instanceof HTMLVideoElement && Number(K.videoWidth || 0) > 0 && Number(K.videoHeight || 0) > 0 && Number(K.readyState || 0) >= 2 ? K : null;
  }
  function Yf() {
    pt.__panoFrameIdx = 0, Ce.backgroundDirty = !0;
  }
  function si() {
    if (!(K instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Gf(), s = qr(e, "background") && Hf(i)[0] || null, l = M2(s), u = [l, Jn.linkedVideoFile(e, od())].filter(Boolean), h = u.find((A) => !tt.failedSrcs.has(A)) || "";
    tt.videoFailed = !h && u.length > 0;
    const m = h && h === l ? ly() : null;
    tt.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const g = Math.max(1, Number((m == null ? void 0 : m.fps) || (k ? _.timeline.fps : 24))), b = K.dataset.panoSrc === h && Number.isFinite(K.duration) ? K.duration : 0, S = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / g : b)), N = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(S * g))), P = !!(m != null && m.has_audio) || Ji(K);
    return h && K.dataset.panoSrc !== h ? (K.pause(), Yf(), K.dataset.panoSrc = h, K.loop = !k && !!C.videoTransport.loop, K.muted = !!C.videoTransport.muted, K.volume = Math.max(0, Math.min(1, Number(C.videoTransport.volume ?? 1))), K.src = h, K.load(), Rt.setSource(!0), k || Rt.seek(0)) : !h && K.getAttribute("src") && (K.pause(), K.removeAttribute("src"), delete K.dataset.panoSrc, K.load(), Yf(), ln(), Rt.setSource(!1)), k || (K.loop = !!C.videoTransport.loop), h && !k && tt.thumbnailSrc !== h && !tt.thumbnailFailedSrcs.has(h) && wi(h, S, g), h || ln(), ai({
      ready: !!h,
      visible: !!h && Bf(),
      duration: S,
      frameCount: N,
      fps: g,
      hasAudio: P,
      loop: !!K.loop,
      muted: !!K.muted,
      volume: Number(K.volume ?? C.videoTransport.volume ?? 1),
      thumbnailCount: C.videoTransport.thumbnailCount
    }), h || null;
  }
  function Xf(i, s = null) {
    var l;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const u = i[0];
      if (u && typeof u == "object" && !Array.isArray(u)) return u;
    }
    if (Array.isArray(s) && s.length > 0) {
      const u = (l = s[0]) == null ? void 0 : l.parsed_state;
      if (u && typeof u == "object" && !Array.isArray(u))
        return {
          yaw_deg: Number(u.yaw_deg || 0),
          pitch_deg: Number(u.pitch_deg || 0),
          hFOV_deg: Number(u.hFOV_deg || 30),
          rot_deg: Number(u.roll_deg || 0)
        };
    }
    return null;
  }
  function Yl(i, s = null) {
    return Zc(e, i, Xe, s || (() => de()));
  }
  function Xl(i = null) {
    return qr(e, "external-sticker") ? Yl(Ms, i) : null;
  }
  function li(i, s, l) {
    const u = Math.max(1, Number(s || 1)), h = Math.max(1, Number(l || 1)), m = Z(Number(i || 30), 0.1, 179) * vr, g = 2 * Math.atan(Math.tan(m * 0.5) * (h / u));
    return Z(g * Vi, 0.1, 179);
  }
  function fy(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const l = JSON.parse(s);
      if (!l || typeof l != "object" || String(l.kind || "") !== "pano_sticker_state") return null;
      const u = l.version;
      let h = null;
      if (typeof u == "number" && Number.isInteger(u) ? h = u : typeof u == "string" && /^\d+$/.test(u) && (h = Number.parseInt(u, 10)), h !== 1) return null;
      const m = l.pose;
      if (!m || typeof m != "object") return null;
      const g = Number(m.yaw_deg), b = Number(m.pitch_deg), S = Number(m.roll_deg), N = Number(m.hFOV_deg);
      if (![g, b, S, N].every((U) => Number.isFinite(U))) return null;
      let P = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(P, -0) && (P = 0);
      const A = {
        yaw_deg: P,
        pitch_deg: Z(b, -89.9, 89.9),
        roll_deg: S,
        hFOV_deg: Z(N, 0.1, 179)
      }, L = Number(l.source_aspect);
      return Number.isFinite(L) && L > 0 && (A.source_aspect = L), A;
    } catch {
      return null;
    }
  }
  function qf(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Ui(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Gt(Number.isFinite(s) ? s : 0),
        pitch_deg: Z(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: Z(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function dy(i) {
    var b;
    if (!i || typeof i != "object") return qf(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const S = Z(h, 0.1, 179) * vr, N = Z(m, 0.1, 179) * vr, P = Math.tan(N * 0.5);
      if (Math.abs(P) > 1e-6) {
        const A = Math.tan(S * 0.5) / P;
        Number.isFinite(A) && A > 0 && (g = A);
      }
    }
    if (i != null && i.asset_id && ((b = _ == null ? void 0 : _.assets) != null && b[i.asset_id])) {
      const S = _.assets[i.asset_id], N = Number((S == null ? void 0 : S.w) || 0), P = Number((S == null ? void 0 : S.h) || 0);
      N > 0 && P > 0 && (g = N / P);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Gt(Number.isFinite(s) ? s : 0),
        pitch_deg: Z(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: Z(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function hy(i) {
    return Jn.linkedValue(e, i);
  }
  function py(i, s, l) {
    const u = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : fy(s);
    if (u) {
      const g = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || u.source_aspect || 1), b = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(u.yaw_deg || 0),
        pitch_deg: Number(u.pitch_deg || 0),
        hFOV_deg: Number(u.hFOV_deg || 30),
        vFOV_deg: li(u.hFOV_deg, g, b),
        rot_deg: Number(u.roll_deg || 0)
      };
    }
    const h = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: li(30, h, m),
      rot_deg: 0
    };
  }
  function my() {
    const i = Xl(() => {
      Jr(e, "image-loaded");
    }), s = qr(e, "external-sticker") ? Xf(Ul("pano_sticker_input_pose"), null) : null;
    return f0(_, u0(e, { pose: s, image: i }));
  }
  function gy() {
    var b;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((S) => String((S == null ? void 0 : S.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((b = e.getInputLink(i)) == null ? void 0 : b.id) ?? null : null, l = Xl(() => {
      Jr(e, "image-loaded");
    }), u = Xf(Ul("pano_sticker_input_pose"), null), h = hy("sticker_state"), m = Jn.externalStateHash(e, h), g = s == null ? null : py(u, h, l);
    return c0(_, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: g,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function Jf(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? my() : gy();
    if (s.changed) {
      const l = _.stickers.find(Jt);
      _.stickers = s.state.stickers, _.active = s.state.active, l && p.selectedId === l.id && !_.stickers.some((u) => u.id === l.id) && (p.selectedId = null, p.selectedIds = []), lt(), ze(), Ye();
    }
    de();
  }
  function qo(i = {}) {
    const l = i.preservePanelValues !== !1 ? Wt(kt()) : null;
    l && (p.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Ur(l)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function yy() {
    if (t !== "cutout") return;
    const i = He();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function ql() {
    if (t !== "cutout") return;
    const i = He();
    mo(C.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Me.camera : Me.plus_circle
    });
  }
  function Zf() {
    const i = t === "cutout" && p.mode === "frame", s = !i && !!p.showGrid;
    mo(C.floatingButtons, "action", "reset-view", {
      disabled: r || i
    }), mo(C.floatingButtons, "action", "toggle-grid", {
      icon: s ? Me.eye : Me.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Rr() {
    var l;
    const i = !!He();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, C.viewButtons.forEach((u) => {
      const h = u.key === p.mode;
      u.pressed = h ? "true" : "false", u.visible = !(u.key === "frame" && t !== "cutout"), u.disabled = u.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && p.mode === "frame" ? He() : null;
    C.frameRail.visible = !!s, C.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, C.frameRollKnob.visible = !!s && !r && s.locked !== !0, C.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, C.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), C.frameRollKnob.displayValue = go(C.frameRollKnob.rollDeg), C.frameRollKnob.dragging = ((l = p.interaction) == null ? void 0 : l.kind) === "roll_frame", C.frameRollKnob.armed = !!s && p.altModifier === !0, C.frameRail.rollKnob = C.frameRollKnob, C.frameRail.aspectLabel = s ? Ur(s) : "", C.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((u) => ({
      value: u,
      label: u,
      active: !!s && String(Ur(s)) === u
    })), s || (C.frameRail.aspectOpen = !1), C.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!He(), t === "cutout" && C.cameraPreview && (C.cameraPreview.visible = p.mode !== "frame", C.cameraPreview.expanded = !!p.outputPreviewExpanded, C.cameraPreview.settled = C.cameraPreview.settled === !0 && Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame), Zf(), Rd() ? bt(p.pointerPos) : Fe(p.mode === "pano" ? "grab" : "default");
  }
  function by() {
    const s = ad({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Qf() {
    return Hg({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, O.width, O.height);
  }
  function Jl() {
    const i = `${p.viewYaw}|${p.viewPitch}|${p.viewFov}|${O.width}|${O.height}`;
    return Ut.key !== i && (Ut = { key: i, projection: Gg(Qf(), O.width, O.height) }), Ut.projection;
  }
  function Jo(i) {
    const s = Jl().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function Zl(i, s) {
    return Jl().ray(i, s);
  }
  function ci() {
    const i = O.width, s = O.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const b = s, S = b * l;
      return { x: (i - S) * 0.5, y: 0, w: S, h: b };
    }
    const h = i, m = h / l;
    return { x: 0, y: (s - m) * 0.5, w: h, h: m };
  }
  function ed(i) {
    var g;
    if (i && typeof i == "object" && (Jt(i) || i.external === !0))
      return Xl(() => {
        Jr(e, "image-loaded");
      });
    const s = k ? Zo(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Xe.get(s);
    if (l) return l;
    const u = k ? Dg(i.source) : (g = _.assets) == null ? void 0 : g[s], h = k2(u);
    if (!h) return null;
    const m = new Image();
    return D0(m, h), m.onload = () => {
      L0(m, h), de();
    }, m.onerror = () => {
      R0(m, h), de();
    }, m.src = h, Xe.set(s, m), m;
  }
  function Zo(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function td(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const u = wt.get(l);
    if (u)
      return u.complete || u.width || u.naturalWidth, u;
    const h = new Image();
    return h.onload = () => {
      typeof s == "function" && s();
    }, h.src = l, wt.set(l, h), h;
  }
  function vy(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Ot.get(s);
    if (l) return l.ready ? l : null;
    const u = td(i, () => {
      const P = Ot.get(s);
      P && (P.ready = !1), de({ localOnly: !0 });
    });
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const h = Number(u.naturalWidth || u.width || 0), m = Number(u.naturalHeight || u.height || 0);
    if (h < 1 || m < 1) return null;
    const g = document.createElement("canvas");
    g.width = h, g.height = m;
    const b = g.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, h, m), b.drawImage(u, 0, 0, h, m);
    const S = b.getImageData(0, 0, h, m).data, N = { canvas: g, width: h, height: m, alpha: S, ready: !0 };
    return Ot.set(s, N), N;
  }
  function _y(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = Un(Number(i.u || 0), h), b = Number(i.v || 0) - m, S = Math.max(0.02, Number(l || 1)), N = Number(u || 0) * vr, P = Math.cos(N), A = Math.sin(N), L = g / S, U = b / S, ne = L * P + U * A, Q = -L * A + U * P;
    return {
      ...i,
      u: ((h + ne) % 1 + 1) % 1,
      v: m + Q
    };
  }
  function xy(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const u = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(u.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(u.dv || 0)
    }, g = _y(
      m,
      h,
      Number(u.scale || 1),
      Number(u.rot_deg || 0)
    ), b = Number(l.u1 || 0) - Number(l.u0 || 0), S = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(b > 1e-6) || !(S > 1e-6)) return null;
    const N = Un(Number(g.u || 0), Number(l.u0 || 0)) / b, P = (Number(g.v || 0) - Number(l.v0 || 0)) / S;
    if (N < 0 || N > 1 || P < 0 || P > 1) return 0;
    const A = vy(i);
    if (!A) return null;
    const L = Z(Math.floor(N * A.width), 0, A.width - 1), U = Z(Math.floor(P * A.height), 0, A.height - 1);
    return Number(A.alpha[(U * A.width + L) * 4 + 3] || 0);
  }
  function nd(i, s, l, u = null) {
    if (!(s != null && s.visible) || !Gr(l, s.corners)) return !1;
    const h = u || lr(l, performance.now()), m = xy(i, h);
    return m === null ? !0 : m > 8;
  }
  function wy() {
    var u, h, m, g, b, S, N, P;
    const i = ((h = (u = p.paintEngine) == null ? void 0 : u.getErpTarget) == null ? void 0 : h.call(u, Vl(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((b = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : b.width) || 2048)), l = Math.max(1, Number(((S = i == null ? void 0 : i.descriptor) == null ? void 0 : S.height) || ((P = (N = i == null ? void 0 : i.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : P.height) || 1024));
    return { width: s, height: l };
  }
  function Sy() {
    var U, ne, Q;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = zn(), u = `${jl()}:${l.width}:${l.height}`;
    if (((U = p._activePaintEraserPreviewInfo) == null ? void 0 : U.cacheKey) === u)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = yn(s), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const te = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = ac(te, h.targetSpace, !0);
    }
    const g = Qo(l.width, l.height, { readback: !0 });
    if (!_d(g, h, { w: l.width, h: l.height })) return null;
    const b = ((Q = (ne = g.ctx) == null ? void 0 : ne.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Q.data) || null;
    if (!b) return null;
    let S = l.width, N = l.height, P = -1, A = -1;
    for (let te = 0; te < l.height; te += 1)
      for (let ie = 0; ie < l.width; ie += 1)
        b[(te * l.width + ie) * 4 + 3] <= 8 || (ie < S && (S = ie), te < N && (N = te), ie > P && (P = ie), te > A && (A = te));
    if (P < S || A < N)
      return p._activePaintEraserPreviewInfo = { cacheKey: u, value: null }, null;
    const L = {
      surface: g,
      bounds: { minX: S, minY: N, maxX: P, maxY: A },
      key: `${u}:${S}:${N}:${P}:${A}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: u, value: L }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function no() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function ky(i, s, l) {
    var u, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((u = i.item) != null && u.bbox)) {
      const m = i.item.bbox, g = ((h = i.item) == null ? void 0 : h.transform) || {}, b = Number(m.u0 || 0) + Number(g.du || 0), S = Number(m.u1 || 0) + Number(g.du || 0), N = Number(m.v0 || 0) + Number(g.dv || 0), P = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(Z(N, 0, 1) * l),
        maxY: Math.ceil(Z(P, 0, 1) * l),
        wraps: S - b >= 1 || b < 0 || S > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = or(i.actionGroupId, "paint"), g = oi(i.actionGroupId, "paint", m);
      if (!g) return null;
      const b = g.centerUv.u - g.halfW, S = g.centerUv.u + g.halfW, N = g.centerUv.v - g.halfH, P = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(Z(N, 0, 1) * l),
        maxY: Math.ceil(Z(P, 0, 1) * l),
        wraps: S - b >= 1 || b < 0 || S > 1
      };
    }
    return null;
  }
  function My(i, s, l) {
    if (!i || !s) return !1;
    const u = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: l - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], h = u(i), m = u(s);
    return h.some((g) => m.some((b) => !(g.maxX < b.minX || b.maxX < g.minX || g.maxY < b.minY || b.maxY < g.minY)));
  }
  function Ny(i, s, l) {
    var xe, Ge, Ue, nt, ye, oe, pe;
    if (!i || !s || !((xe = l == null ? void 0 : l.surface) != null && xe.canvas) || s.type !== "rasterObject") return i;
    const u = Number(i.width || l.surface.canvas.width || 0), h = Number(i.height || l.surface.canvas.height || 0);
    if (u < 1 || h < 1) return i;
    const m = ky(s, u, h);
    if (m && !My(m, l.bounds, u)) return i;
    const g = String(((Ge = s.item) == null ? void 0 : Ge.id) || s.id || ""), b = ((Ue = s.item) == null ? void 0 : Ue.transform) || {}, S = `${l.key}:${g}:${u}:${h}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, N = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(S)) return N.get(S);
    const P = Z(Math.floor(Number(((nt = l.bounds) == null ? void 0 : nt.minX) || 0)), 0, Math.max(0, u - 1)), A = Z(Math.floor(Number(((ye = l.bounds) == null ? void 0 : ye.minY) || 0)), 0, Math.max(0, h - 1)), L = Z(Math.ceil(Number(((oe = l.bounds) == null ? void 0 : oe.maxX) || 0)), P, Math.max(0, u - 1)), U = Z(Math.ceil(Number(((pe = l.bounds) == null ? void 0 : pe.maxY) || 0)), A, Math.max(0, h - 1)), ne = Math.max(1, L - P + 1), Q = Math.max(1, U - A + 1), te = Qo(u, h, { readback: !0 });
    te.ctx.clearRect(0, 0, u, h), te.ctx.drawImage(i, 0, 0);
    const ie = te.ctx.getImageData(P, A, ne, Q);
    te.ctx.save(), te.ctx.globalCompositeOperation = "destination-out", te.ctx.drawImage(l.surface.canvas, 0, 0), te.ctx.restore();
    const he = te.ctx.getImageData(P, A, ne, Q);
    let re = !1;
    for (let be = 0; be < ne * Q; be += 1) {
      const Oe = ie.data[be * 4 + 3], Be = he.data[be * 4 + 3];
      if (Oe > Be) {
        re = !0;
        break;
      }
    }
    return re ? (N.size > 64 && N.clear(), N.set(S, te.canvas), te.canvas) : (N.set(S, i), i);
  }
  function rd(i, s = null) {
    const l = nn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), u = (i == null ? void 0 : i.bbox) || null;
    if (!l || !u) return null;
    const h = td(i, s);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: g } = wy(), b = (i == null ? void 0 : i.transform) || {}, S = [
      l,
      m,
      g,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      ea()
    ].join(":"), N = en.get(S);
    if (N) return N;
    en.size > 64 && en.clear();
    const P = document.createElement("canvas");
    P.width = m, P.height = g;
    const A = P.getContext("2d");
    if (!A) return null;
    const L = Number(u.u0 || 0) * m, U = Number(u.v0 || 0) * g, ne = Math.max(1, (Number(u.u1 || 0) - Number(u.u0 || 0)) * m), Q = Math.max(1, (Number(u.v1 || 0) - Number(u.v0 || 0)) * g), te = L + ne * 0.5 + Number(b.du || 0) * m, ie = U + Q * 0.5 + Number(b.dv || 0) * g, he = Number(b.rot_deg || 0) * vr, re = Math.max(0.01, Number(b.scale || 1));
    for (const xe of [-m, 0, m])
      A.save(), A.translate(te + xe, ie), A.rotate(he), A.scale(re, re), A.drawImage(h, -ne * 0.5, -Q * 0.5, ne, Q), A.restore();
    return en.set(S, P), P;
  }
  async function Ql(i, s) {
    const l = await new Promise((b) => i.toBlob(b, "image/png")), u = new FormData();
    u.append("image", l, s), u.append("type", "input"), u.append("subfolder", "panorama_stickers"), u.append("overwrite", "1");
    const h = await Kt.fetchApi("/upload/image", { method: "POST", body: u });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), g = String((m == null ? void 0 : m.name) || "").trim();
    if (!g) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Za = null, Qa = !1;
  function Py() {
    const i = Yp(_.painting), { width: s, height: l } = na();
    return yw(_.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function id() {
    const i = String(e.id ?? "0"), s = Ns.get(i);
    if (Qa && s) return s;
    const l = (async () => {
      var m, g, b, S, N, P, A, L, U, ne, Q, te;
      const u = ta(), h = Yp(_.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, Za = u, En());
        return;
      }
      if (Za !== u && !Qa) {
        Qa = !0;
        try {
          os();
          const ie = Vl(!1), he = ((g = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, ie)) || null, re = ((b = he == null ? void 0 : he.displayPaint) == null ? void 0 : b.canvas) || null, xe = ((S = he == null ? void 0 : he.committedMask) == null ? void 0 : S.canvas) || null, Ge = Math.max(1, Number(((N = he == null ? void 0 : he.descriptor) == null ? void 0 : N.width) || (re == null ? void 0 : re.width) || (xe == null ? void 0 : xe.width) || 2048)), Ue = Math.max(1, Number(((P = he == null ? void 0 : he.descriptor) == null ? void 0 : P.height) || (re == null ? void 0 : re.height) || (xe == null ? void 0 : xe.height) || 1024));
          (!re && h.totalPaintCount > 0 || !xe && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((A = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : A.width) || 0) !== Ge || Number(((L = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== Ue) && (p._paintLayerSyncBlankSurface = Qo(Ge, Ue)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ge, Ue));
          const nt = re || h.totalPaintCount > 0 && ((U = p._paintLayerSyncBlankSurface) == null ? void 0 : U.canvas) || null, ye = xe || h.totalMaskCount > 0 && ((ne = p._paintLayerSyncBlankSurface) == null ? void 0 : ne.canvas) || null;
          if (!nt && !ye) return;
          let oe = null, pe = null;
          const be = [];
          if (h.totalPaintCount > 0) {
            oe = await Ql(nt, `pano_paint_${i}.png`);
            for (const Oe of ie) {
              const Be = String(Oe || "").trim();
              if (!Be) continue;
              const Ie = ((te = (Q = p.paintEngine) == null ? void 0 : Q.getGroupDisplayCanvas) == null ? void 0 : te.call(Q, Be)) || null;
              if (!Ie) continue;
              const ut = Be.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await Ql(Ie, `pano_group_${i}_${ut}.png`);
              qe && be.push({
                id: Be,
                actionGroupId: Be,
                image: qe
              });
            }
          }
          h.totalMaskCount > 0 && (pe = await Ql(ye, `pano_mask_${i}.png`)), u === ta() && (_.painting_layer = {
            paint: oe,
            mask: pe,
            groups: be,
            revision: u
          }, Za = u, En());
        } catch (ie) {
          throw ie;
        } finally {
          Qa = !1;
        }
      }
    })();
    return Ns.set(i, l), l.finally(() => {
      Ns.get(i) === l && Ns.delete(i);
    }), l;
  }
  function ec() {
    if (t === "cutout") {
      const h = Wf();
      if (h) return h;
      const m = Qc(
        e,
        ["erp_image", "bg_erp"],
        () => de(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !zu(m) ? m : Zc(e, "pano_input_images", Xe, () => de()) || m || null;
    }
    const i = Wf();
    if (i) return i;
    const s = qr(e, "background") ? Zc(e, "pano_input_images", Xe, () => de()) : null;
    if (s && !zu(s)) return s;
    if (K instanceof HTMLVideoElement && K.dataset.panoSrc) return K;
    const l = od();
    return Qc(e, l, () => de(), `background:${l.join("|")}`) || s || null;
  }
  function od() {
    if (t === "cutout") return ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((u) => String((u == null ? void 0 : u.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function tc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Ay() {
    if (Bn.failed) return { status: Zn, detail: "renderer" };
    if (!Bn.ready) return { status: ur, detail: "boot" };
    let i = Ho;
    const s = [];
    if (p.showPanorama) {
      const l = ec();
      i = tt.videoFailed ? Zn : Vu(l, tc);
    }
    if (p.showObjects)
      for (const l of Ba()) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const u = ed(l);
        s.push(Vu(u, tc));
      }
    return o2({
      presented: Ce.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function ro() {
    const i = new Set(
      (_.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(_.assets || {}).forEach((s) => {
      i.has(s) || (delete _.assets[s], Xe.delete(s));
    });
  }
  function nc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(Z(i.y, -1, 1))
    };
  }
  function rc(i, s = null) {
    const { lon: l, lat: u } = nc(i), h = ci();
    let m = h.x + (l / (2 * Math.PI) + 0.5) * h.w;
    const g = h.y + (0.5 - u / Math.PI) * h.h;
    if (s !== null) {
      for (; m - s > h.w / 2; ) m -= h.w;
      for (; m - s < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function es(i) {
    const s = Wt(i), l = Bo(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), u = Math.tan(Z(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * vr), h = Math.tan(Z(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * vr);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: u,
      tanY: h
    };
  }
  function ui(i, s, l) {
    return F2(Up(Up(i.centerDir, Wp(i.right, s)), Wp(i.up, l)));
  }
  function ad(i) {
    const s = es(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u, v: h }) => ui(s, u * s.tanX, h * s.tanY));
  }
  function sd(i, s, l) {
    const u = es(i), h = (s * 2 - 1) * u.tanX, m = (1 - l * 2) * u.tanY;
    return ui(u, h, m);
  }
  function ld(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: Z((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Cy(i) {
    var S, N, P, A;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, u = Math.max(0.01, Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.scale) || 1)), h = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.rot_deg) || 0), m = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.du) || 0), g = Number(((A = i == null ? void 0 : i.transform) == null ? void 0 : A.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((L) => Ua(Wa(L, l, u, h), m, g));
  }
  function Iy(i) {
    const s = nn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, u = (i == null ? void 0 : i.bbox) || {}, h = `${s}:${p.mode}:${ea()}:${u.u0}:${u.v0}:${u.u1}:${u.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (p.mode === "frame") {
      const m = He(), g = m ? Zt(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function Oy(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = Vn(i) ? "frame" : mt(i) ? "sticker" : "item", u = Wt(i), h = [
      l,
      s,
      p.mode,
      Number((u == null ? void 0 : u.yaw_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.pitch_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.hFOV_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.vFOV_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.rot_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.roll_deg) || 0).toFixed(4),
      Ur(u),
      rr(i) && $i(i.clip, p.frame)
    ].join(":");
    if (p.mode === "frame") {
      const m = He(), g = m ? Zt(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function cd() {
    var i, s;
    return ((s = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function Ey() {
    return cd() ? `${gd()}:mask_display` : "";
  }
  function ud(i) {
    if (!p.showMask) return i;
    const s = cd();
    if (!s) return i;
    const l = Ey(), u = i.reduce((g, b) => Math.max(g, Number((b == null ? void 0 : b.zIndex) || 0)), -1), h = (Array.isArray(_.stickers) ? _.stickers : []).reduce((g, b) => Math.max(g, Number((b == null ? void 0 : b.z_index) || 0)), -1), m = Math.max(u, h);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Fy() {
    var u, h;
    const i = zl(!0), s = Sy(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const b = ((h = (u = p.paintEngine) == null ? void 0 : u.getGroupDisplayCanvas) == null ? void 0 : h.call(u, g)) || null;
        if (!b) continue;
        l.push({
          id: `paint_group:${g}`,
          source: b,
          revision: `${gd()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, b = nn((g == null ? void 0 : g.id) || m.id || "");
        if (!b) continue;
        const S = rd(g, () => de());
        if (!S) continue;
        const N = Ny(S, m, s), P = (g == null ? void 0 : g.transform) || {};
        l.push({
          id: `raster:${b}`,
          source: N,
          revision: [
            ta(),
            (s == null ? void 0 : s.key) || "",
            b,
            Number(P.du || 0).toFixed(6),
            Number(P.dv || 0).toFixed(6),
            Number(P.rot_deg || 0).toFixed(3),
            Number(P.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (g == null ? void 0 : g.visible) !== !1
        });
      }
    }
    return ud(l);
  }
  function Ty() {
    return (p.showObjects ? Fy() : ud([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function ts() {
    return Lr || (Lr = Dy()), Lr;
  }
  function Dy() {
    const i = ec(), s = Ty(), l = { ..._.assets };
    for (const b of k ? [] : _.stickers) {
      const S = String((b == null ? void 0 : b.asset_id) || "");
      S && !l[S] && Xe.has(S) && (l[S] = { type: "comfy_image", filename: S });
    }
    const u = k ? _.stickers.map((b) => Rl(b) ? { ...b, source: { kind: "file", filename: Zo(b) } } : b) : _.stickers, h = JSON.stringify([u, Object.keys(l)]);
    an.key !== h && (an = { key: h, sceneState: zo({ ..._, stickers: u, assets: l, painting: null }) });
    const m = p.showObjects ? Kg(an.sceneState, p.frame, _.stickers, {
      media: (b) => {
        const S = ed(b);
        return S ? { media: S, revision: Kf(S) } : null;
      },
      paintLayers: s
    }) : s.map((b) => ({ kind: "erp", ...b }));
    return { background: p.showPanorama && tc(i) ? { media: i, revision: Kf(i), coverage: Hn(_.coverage) } : null, layers: m };
  }
  function Ly() {
    if (!Ce.backgroundDirty && Ce.backgroundWasVisible) return;
    const { background: i, layers: s } = ts(), l = J.width, u = J.height, h = Bn.render({
      width: l,
      height: u,
      camera: Qf(),
      background: i,
      layers: s
    }), m = J.getContext("2d");
    m.clearRect(0, 0, l, u), !i && !s.length ? (m.fillStyle = "#070707", m.fillRect(0, 0, l, u)) : h && m.drawImage(h.canvas, h.x, h.y, h.width, h.height, 0, 0, l, u), Ce.backgroundWasVisible = !!h, Ce.backgroundDirty = !1, _e = null;
  }
  function fd(i, s, l, u) {
    const { background: h, layers: m } = ts();
    if (!h && !m.length) return !1;
    const g = Bn.render({ width: s.w, height: s.h, camera: zs(l), background: h, layers: m, owner: u });
    return g ? (i.drawImage(g.canvas, g.x, g.y, g.width, g.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function Ry(i) {
    const s = ts(), l = JSON.stringify([i, J.width, J.height, lp(s)]);
    if (l === _e) return;
    const u = Bn.renderUnwrap({ width: i.w, height: i.h, ...s }), h = J.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, J.width, J.height), u && h.drawImage(u.canvas, u.x, u.y, u.width, u.height, i.x, i.y, i.w, i.h), _e = u ? l : null, Ce.backgroundWasVisible = !1;
  }
  function $y(i = !1) {
    const s = O.width, l = O.height, u = ci();
    if (I.globalAlpha = 1, I.lineWidth = 1, i || I.clearRect(0, 0, s, l), os(), Ry(u), p.showGrid && !p.fullscreen) {
      I.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = u.x + u.w * m / 16;
        I.beginPath(), I.moveTo(g, u.y), I.lineTo(g, u.y + u.h), I.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = u.y + u.h * m / 8;
        I.beginPath(), I.moveTo(u.x, g), I.lineTo(u.x + u.w, g), I.stroke();
      }
      I.strokeStyle = "rgba(250, 250, 250, 0.86)", I.lineWidth = 1.2, I.beginPath(), I.moveTo(u.x, u.y + u.h / 2), I.lineTo(u.x + u.w, u.y + u.h / 2), I.stroke(), I.fillStyle = "rgba(250, 250, 250, 0.42)", I.font = "500 11px Geist, sans-serif", I.textAlign = "center";
      const h = u.y + u.h * 0.57;
      I.fillText("Left", u.x + u.w * 0.25, h), I.fillText("Front", u.x + u.w * 0.5, h), I.fillText("Right", u.x + u.w * 0.75, h), I.fillText("Back", u.x + 38, h), I.fillText("Back", u.x + u.w - 38, h);
    }
  }
  function dd(i, s, l = 1) {
    let u = !1;
    I.strokeStyle = s, I.lineWidth = l, I.beginPath();
    for (const h of i) {
      const m = Jo(h);
      if (!m) {
        u = !1;
        continue;
      }
      u ? I.lineTo(m.x, m.y) : (I.moveTo(m.x, m.y), u = !0);
    }
    I.stroke();
  }
  function Vy(i = !1) {
    const s = O.width, l = O.height;
    if (i || I.clearRect(0, 0, s, l), os(), Ly(), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(Ln(h, g));
        dd(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(Ln(g, h));
        dd(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const u = [
        { name: "Left", dir: Ln(-90, 0) },
        { name: "Front", dir: Ln(0, 0) },
        { name: "Right", dir: Ln(90, 0) },
        { name: "Back", dir: Ln(180, 0) }
      ];
      I.fillStyle = "rgba(250, 250, 250, 0.42)", I.font = "500 11px Geist, sans-serif", I.textAlign = "center", u.forEach((h) => {
        const m = Jo(h.dir);
        m && I.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function zy(i, s = null, l = null, u = null) {
    if (p.mode === "frame") {
      const h = s || He();
      if (!h) return [];
      const m = l || Zt(h);
      return yb(i, h, m);
    }
    return xd(i, u);
  }
  function ns(i, s = null, l = null, u = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const g = xd([i], h);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = io(i);
    return m ? $r(m, s, l, u) : null;
  }
  function jy(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), u = or(l, i.layerKind), h = oi(l, i.layerKind, u), m = (h == null ? void 0 : h.centerUv) || Gl(l, i.layerKind, u), g = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, b = [], S = p.mode === "frame" ? He() : null, N = S ? Zt(S) : null;
    for (const re of u) {
      const xe = (re == null ? void 0 : re.geometry) || null, Ge = (xe == null ? void 0 : xe.geometryKind) === "lasso_fill" ? xe == null ? void 0 : xe.points : (xe == null ? void 0 : xe.processedPoints) || (xe == null ? void 0 : xe.rawPoints) || (xe == null ? void 0 : xe.points) || [], Ue = zy(Ge, S, N, g).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y));
      if (!Ue.length) continue;
      const nt = di(String((re == null ? void 0 : re.toolKind) || "pen")), ye = Fn[nt] || Fn[jr];
      b.push({
        points: Ue,
        closed: String((xe == null ? void 0 : xe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((re == null ? void 0 : re.size) || 10) * Math.max(0.1, Number((ye == null ? void 0 : ye.sizeScale) ?? 1)) + 10),
        layerKind: String((re == null ? void 0 : re.layerKind) || i.layerKind || "paint")
      });
    }
    const P = ns(m, null, S, N, g);
    if (!P) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, re), re;
    }
    const L = G0(h).map((re) => ns(re, P.x, S, N, g)).filter((re) => Number.isFinite(re == null ? void 0 : re.x) && Number.isFinite(re == null ? void 0 : re.y)).map((re) => ({ x: Number(re.x || 0), y: Number(re.y || 0) }));
    if (L.length < 4) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, re), re;
    }
    const U = (re, xe) => ({
      x: (Number((re == null ? void 0 : re.x) || 0) + Number((xe == null ? void 0 : xe.x) || 0)) * 0.5,
      y: (Number((re == null ? void 0 : re.y) || 0) + Number((xe == null ? void 0 : xe.y) || 0)) * 0.5,
      a: re,
      b: xe
    }), ne = U(L[0], L[1]), Q = U(L[1], L[2]), te = U(L[2], L[3]), ie = U(L[3], L[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(P.x || 0), y: Number(P.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...ne },
        { edge: "right", ...Q },
        { edge: "bottom", ...te },
        { edge: "left", ...ie }
      ],
      rotateStemBase: { x: ne.x, y: ne.y },
      rotateHandle: { x: ne.x, y: ne.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return p._strokeGeomCache.set(s, he), he;
  }
  function Hy(i, s) {
    const l = p.mode === "frame" ? He() : null, u = l ? Zt(l) : null, h = ld(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, g = ns(h, null, l, u, m), S = Cy(i).map((L) => ns(L, (g == null ? void 0 : g.x) ?? null, l, u, m)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(S) || S.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(s, L), L;
    }
    const N = S.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), A = {
      kind: "rasterObject",
      center: {
        x: N.reduce((L, U) => L + Number(U.x || 0), 0) / N.length,
        y: N.reduce((L, U) => L + Number(U.y || 0), 0) / N.length
      },
      corners: N,
      visible: !0
    };
    return p._strokeGeomCache.set(s, A), A;
  }
  function $r(i, s = null, l = null, u = null, h = {}) {
    if (p.mode === "frame") {
      const P = l || He(), A = u || Zt(P);
      if (!P || !A) return null;
      const L = P ? ra(P, i) : null;
      return L ? {
        x: Number(A.x || 0) + Number(L.x || 0) * Number(A.w || 0),
        y: Number(A.y || 0) + Number(L.y || 0) * Number(A.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return rc(i, s);
    const m = 1e-4, g = Jl().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(h != null && h.clipBehind)) return null;
    const b = O.width, S = O.height, N = Math.max(b, S) * 2;
    return {
      x: Z(g.x, -N, b + N),
      y: Z(g.y, -N, S + N),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function Gy(i, s = []) {
    if (p.mode !== "pano" || mt(i)) return 1;
    const l = s.map((u) => Number((u == null ? void 0 : u.rawZ) ?? (u == null ? void 0 : u.z))).filter((u) => Number.isFinite(u));
    return l.length ? C2(0.035, 0.2, Math.min(...l)) : 1;
  }
  function Ky(i) {
    if (rr(i) && !$i(i.clip, p.frame)) return { visible: !1 };
    const s = Wt(i), l = Ln(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), u = p.mode === "frame" ? He() : null, h = u ? Zt(u) : null, m = p.mode === "pano" && (mt(i) || Vn(i)), g = m ? { clipBehind: !0 } : null, b = $r(l, null, u, h, g);
    if (!b) return { visible: !1 };
    const S = es(i), P = ad(i).map((pe) => $r(pe, b.x, u, h, g)).filter((pe) => Number.isFinite(pe == null ? void 0 : pe.x) && Number.isFinite(pe == null ? void 0 : pe.y));
    if (P.length < 4) return { visible: !1 };
    const A = ui(S, 0, S.tanY), L = ui(S, 0, S.tanY + Math.max(S.tanY * 0.43, 0.053)), U = $r(A, b.x, u, h, g);
    if (!U) return { visible: !1 };
    const ne = $r(L, (U == null ? void 0 : U.x) ?? b.x, u, h, g), Q = ((ne == null ? void 0 : ne.x) ?? U.x) - U.x, te = ((ne == null ? void 0 : ne.y) ?? U.y) - U.y, ie = Math.hypot(Q, te) || 1, he = {
      x: U.x + Q / ie * 30,
      y: U.y + te / ie * 30
    }, re = $r(ui(S, 0, S.tanY), b.x, u, h, g), xe = $r(ui(S, S.tanX, 0), b.x, u, h, g), Ge = $r(ui(S, 0, -S.tanY), b.x, u, h, g), Ue = $r(ui(S, -S.tanX, 0), b.x, u, h, g);
    if (!re || !xe || !Ge || !Ue) return { visible: !1 };
    const nt = [
      b,
      ...P,
      U,
      ne,
      re,
      xe,
      Ge,
      Ue
    ];
    if (m && !nt.some((pe) => Number((pe == null ? void 0 : pe.rawZ) ?? (pe == null ? void 0 : pe.z)) > 1e-4)) return { visible: !1 };
    const ye = Gy(i, nt), oe = [
      {
        edge: "top",
        x: re.x,
        y: re.y,
        a: { x: P[0].x, y: P[0].y },
        b: { x: P[1].x, y: P[1].y }
      },
      {
        edge: "right",
        x: xe.x,
        y: xe.y,
        a: { x: P[1].x, y: P[1].y },
        b: { x: P[2].x, y: P[2].y }
      },
      {
        edge: "bottom",
        x: Ge.x,
        y: Ge.y,
        a: { x: P[2].x, y: P[2].y },
        b: { x: P[3].x, y: P[3].y }
      },
      {
        edge: "left",
        x: Ue.x,
        y: Ue.y,
        a: { x: P[3].x, y: P[3].y },
        b: { x: P[0].x, y: P[0].y }
      }
    ];
    return {
      center: { x: b.x, y: b.y },
      corners: P.map((pe) => ({ x: pe.x, y: pe.y })),
      edgeMidpoints: oe,
      rotateStemBase: { x: U.x, y: U.y },
      rotateHandle: he,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ye,
      visible: !0
    };
  }
  function Yt(i) {
    if (qt(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = X0(h, i.layerKind), g = p._strokeGeomCache.get(m);
      return g || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), jy(i, m));
    }
    if (mn(i)) {
      const h = Iy(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Hy(i, h));
    }
    const s = Oy(i), l = p._strokeGeomCache.get(s);
    if (l) return l;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const u = Ky(i);
    return p._strokeGeomCache.set(s, u), u;
  }
  function rs(i, s, l, u = null) {
    const h = [];
    for (let m = 0; m <= l; m += 1) {
      const g = m / l;
      let b = 0, S = 0;
      s === 0 ? (b = g, S = 0) : s === 1 ? (b = 1, S = g) : s === 2 ? (b = 1 - g, S = 1) : (b = 0, S = 1 - g);
      const N = sd(i, b, S), P = p.mode === "unwrap" ? rc(N, u) : Jo(N);
      P && h.push(P);
    }
    return h;
  }
  function By(i, s) {
    const l = Wt(i), u = Ln(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), h = p.mode === "unwrap" ? rc(u) : null, m = h ? h.x : null, g = p.mode === "pano" ? 28 : 20, b = [
      rs(i, 0, g, m),
      rs(i, 1, g, m),
      rs(i, 2, g, m),
      rs(i, 3, g, m)
    ];
    Mf(I, b, { selected: s });
  }
  function Uy() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], s = [...Array.isArray(_.stickers) ? _.stickers : []].sort((l, u) => Number(l.z_index || 0) - Number(u.z_index || 0));
    return [...i, ...s];
  }
  function ic() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Array.isArray(_.stickers) ? _.stickers : []].sort((l, u) => Number(u.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function is(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function hd(i, s, l) {
    const u = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (u.length < 4) return;
    const h = Z(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = I.globalAlpha;
    I.globalAlpha = m * h;
    const g = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", b = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", S = s ? 3.2 : 2.6;
    is(I, u), I.fillStyle = b, I.fill(), I.strokeStyle = g, I.lineWidth = S, I.stroke(), I.save(), I.strokeStyle = g, I.lineWidth = s ? 3.2 : 2.6, I.lineCap = "round";
    const N = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (u[0].x + u[1].x) * 0.5, y: (u[0].y + u[1].y) * 0.5 },
      { edge: "right", x: (u[1].x + u[2].x) * 0.5, y: (u[1].y + u[2].y) * 0.5 },
      { edge: "bottom", x: (u[2].x + u[3].x) * 0.5, y: (u[2].y + u[3].y) * 0.5 },
      { edge: "left", x: (u[3].x + u[0].x) * 0.5, y: (u[3].y + u[0].y) * 0.5 }
    ], P = { top: "bottom", right: "left", bottom: "top", left: "right" }, A = s ? 12 : 9;
    N.forEach((L) => {
      const ne = N.find((he) => (he == null ? void 0 : he.edge) === P[L == null ? void 0 : L.edge]) || {
        x: (u[0].x + u[1].x + u[2].x + u[3].x) * 0.25,
        y: (u[0].y + u[1].y + u[2].y + u[3].y) * 0.25
      }, Q = ne.x - L.x, te = ne.y - L.y, ie = Math.hypot(Q, te) || 1;
      I.beginPath(), I.moveTo(L.x, L.y), I.lineTo(L.x + Q / ie * A, L.y + te / ie * A), I.stroke();
    }), I.restore(), I.globalAlpha = m;
  }
  function Wy(i, s, l, u) {
    const h = Z(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (Vn(i)) {
      hd(s, l, u);
      return;
    }
    if (mt(i)) {
      const g = I.globalAlpha;
      I.globalAlpha = g * ty(i) * h, p.mode === "frame" ? (I.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : u ? "rgba(255, 89, 89, 0.72)" : "#71717a", I.lineWidth = l ? 2 : 1, is(I, s.corners), I.stroke()) : By(i, l), I.globalAlpha = g;
      return;
    }
    const m = I.globalAlpha;
    I.globalAlpha = m * h, I.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : u ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", is(I, s.corners), I.fill(), I.strokeStyle = l ? "rgba(255, 255, 255, 1)" : u ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", I.lineWidth = l ? 2.8 : 1.9, is(I, s.corners), I.stroke(), I.globalAlpha = m;
  }
  function pd(i, s, l) {
    if (mt(i)) {
      h0(I, s, { accent: l });
      return;
    }
    I.fillStyle = l, s.corners.forEach((u) => {
      I.beginPath(), I.arc(u.x, u.y, 6.5, 0, Math.PI * 2), I.fill();
    }), Vn(i) && (I.strokeStyle = l, I.lineCap = "round", I.lineWidth = 4, s.edgeMidpoints.forEach((u) => {
      var P, A, L, U;
      const h = (((P = u.b) == null ? void 0 : P.x) ?? u.x) - (((A = u.a) == null ? void 0 : A.x) ?? u.x), m = (((L = u.b) == null ? void 0 : L.y) ?? u.y) - (((U = u.a) == null ? void 0 : U.y) ?? u.y), g = Math.hypot(h, m) || 1, b = h / g, S = m / g, N = 10;
      I.beginPath(), I.moveTo(u.x - b * N, u.y - S * N), I.lineTo(u.x + b * N, u.y + S * N), I.stroke();
    }), I.lineCap = "butt"), qt(i) || (I.strokeStyle = "rgba(250, 250, 250, 0.9)", I.lineWidth = 1.8, I.beginPath(), I.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), I.lineTo(s.rotateHandle.x, s.rotateHandle.y), I.stroke(), I.fillStyle = l, I.beginPath(), I.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), I.fill());
  }
  function Yy() {
    var m;
    const i = p.mode === "frame" ? [] : ar(), s = i.length > 1, l = t === "cutout" ? Uy() : hn(), u = l.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${Vn(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== l || p._sortedItemsCache.orderKey !== u) && (p._sortedItemsCache = {
      src: l,
      orderKey: u,
      sorted: [...l]
    });
    const h = p._sortedItemsCache.sorted;
    for (const g of h) {
      const b = p.mode !== "frame" && !s && zf(g);
      if (p.mode === "frame" && !b || !p.showObjects && !Vn(g)) continue;
      const S = mt(g), N = Vn(g), P = wn(g);
      if (!S && !N || rr(g) && !$i(g.clip, p.frame)) continue;
      const A = Yt(g);
      if (t !== "stickers" && !A.visible)
        continue;
      const L = Z(Number((A == null ? void 0 : A.visibilityAlpha) ?? 1), 0, 1);
      if (L <= 0.01) continue;
      const U = N && t === "cutout" && p.mode === "pano" ? Z(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (I.save(), I.globalAlpha *= U, Wy(g, A, b, P), b && A.visible) {
        const ne = P ? "#ff4d4f" : S && Jt(g) ? "#f59e0b" : "#0070f3", Q = I.globalAlpha;
        I.globalAlpha = Q * L, pd(g, A, ne), I.globalAlpha = Q;
      }
      I.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !He() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const g = p.cutoutPanoFrameVisual, b = Z(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      I.save(), I.globalAlpha *= b, hd(g.geom, g.selected, g.locked), g.selected && pd(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), I.restore();
    }
    if (s) {
      const g = Ya(i);
      if (g != null && g.visible) {
        const b = Kl(i) ? "#ff4d4f" : "#0070f3";
        I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.95)", I.lineWidth = 2, I.setLineDash([6, 4]), I.beginPath(), I.moveTo(g.corners[0].x, g.corners[0].y);
        for (let S = 1; S < g.corners.length; S += 1) I.lineTo(g.corners[S].x, g.corners[S].y);
        I.closePath(), I.stroke(), I.setLineDash([]), I.fillStyle = b, g.corners.forEach((S) => {
          I.beginPath(), I.arc(S.x, S.y, 6.5, 0, Math.PI * 2), I.fill();
        }), I.restore();
      }
    } else
      i.forEach((g) => {
        if (!qt(g) && !mn(g)) return;
        const b = Yt(g);
        if (!(b != null && b.visible)) return;
        const S = wn(g) ? "#ff4d4f" : "#0070f3";
        I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.95)", I.lineWidth = 2, I.setLineDash([6, 4]), I.beginPath(), I.moveTo(b.corners[0].x, b.corners[0].y);
        for (let N = 1; N < b.corners.length; N += 1) I.lineTo(b.corners[N].x, b.corners[N].y);
        I.closePath(), I.stroke(), I.setLineDash([]), I.fillStyle = S, b.corners.forEach((N) => {
          I.beginPath(), I.arc(N.x, N.y, 6.5, 0, Math.PI * 2), I.fill();
        }), I.restore();
      });
    if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = Hd(p.interaction.start, p.interaction.current);
      I.save(), I.strokeStyle = "rgba(255, 255, 255, 0.9)", I.fillStyle = "rgba(255, 255, 255, 0.08)", I.lineWidth = 1, I.setLineDash([5, 4]), I.beginPath(), I.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), I.fill(), I.stroke(), I.restore();
    }
  }
  function md(i, s = !1) {
    const l = Z(Ui(i), 0.05, 20), u = s ? 320 : 220;
    return l >= 1 ? { width: u, height: Math.max(1, Math.round(u / l)) } : { width: Math.max(1, Math.round(u * l)), height: u };
  }
  function Xy(i) {
    if (!An || !i) return !1;
    const s = An.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || An.clientWidth || 0)), u = Math.round(Number(s.clientHeight || An.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(u - Number(i.height || 0)) <= 1;
  }
  function qy() {
    if (p.outputPreviewRect = null, C.outputPreviewToggle.visible = p.mode !== "frame" && !!He(), t !== "cutout" || !C.cameraPreview) return;
    if (p.mode === "frame") {
      C.cameraPreview.visible = !1, C.cameraPreview.settled = !1;
      return;
    }
    const i = He();
    C.cameraPreview.visible = !0, C.cameraPreview.expanded = !!p.outputPreviewExpanded;
    const s = Rn == null ? void 0 : Rn.getContext("2d");
    if (!i || !s) {
      C.cameraPreview.ready = !1, C.cameraPreview.settled = !1, C.cameraPreview.width = 220, C.cameraPreview.height = 132, C.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, Rn.width, Rn.height), H = null;
      return;
    }
    const l = md(i, !!p.outputPreviewExpanded);
    C.cameraPreview.width = l.width, C.cameraPreview.height = l.height;
    const u = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * u)), h: Math.max(1, Math.round(l.height * u)) };
    (Rn.width !== h.w || Rn.height !== h.h) && (Rn.width = h.w, Rn.height = h.h);
    const m = JSON.stringify([h, ni(i), lp(ts())]);
    let g = m === H;
    if (g || (s.clearRect(0, 0, h.w, h.h), g = fd(s, h, i, "camera_preview"), H = g ? m : null), !g) {
      C.cameraPreview.ready = !1, C.cameraPreview.label = ec() ? "Loading preview" : "Connect ERP image", C.cameraPreview.settled = !1;
      return;
    }
    const b = Xy(l);
    C.cameraPreview.ready = !0, C.cameraPreview.label = b ? "" : "Loading preview", C.cameraPreview.settled = b && Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame;
  }
  function oc(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), u = Number(s.y || 0);
    return sd(i, l, u);
  }
  function io(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, u = Math.cos(l);
    return Ll(u * Math.sin(s), Math.sin(l), u * Math.cos(s));
  }
  function Jy(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function Zy(i, s, l, u = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: gn(i, "widthScale", 1),
      pressureLike: gn(i, "pressureLike", 1)
    }, ...u, u: s, v: l };
  }
  function Qy(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function ac(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const u = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (u) {
      let Q = null;
      i.forEach((te) => {
        const ie = Number((te == null ? void 0 : te.u) || 0), he = Number((te == null ? void 0 : te.v) || 0), re = (ie % 1 + 1) % 1, xe = Q == null ? re : Q + Un(re, (Q % 1 + 1) % 1);
        h.set(te, { x: xe, y: he }), Q = xe;
      });
    }
    const m = (Q) => !Q || typeof Q != "object" ? { x: 0, y: 0 } : h.get(Q) || Jy(Q), g = (Q, te, ie, he = {}) => {
      const re = u ? (Number(te) % 1 + 1) % 1 : Number(te), xe = Zy(Q, re, ie, he);
      return h.set(xe, { x: Number(te), y: Number(ie) }), xe;
    }, b = (Q, te, ie) => {
      const he = m(Q), re = m(te);
      return g(Q, Yn(he.x, re.x, ie), Yn(he.y, re.y, ie), {
        t: Yn(Number((Q == null ? void 0 : Q.t) || 0), Number((te == null ? void 0 : te.t) || 0), ie),
        widthScale: Yn(gn(Q, "widthScale", 1), gn(te, "widthScale", 1), ie),
        pressureLike: Yn(gn(Q, "pressureLike", 1), gn(te, "pressureLike", 1), ie)
      });
    };
    if (i.length === 1) {
      const Q = m(i[0]);
      return [g(i[0], Q.x, Q.y)];
    }
    const S = Qy(s, l), N = (Q, te) => {
      const ie = [0];
      for (let oe = 1; oe < Q.length; oe += 1) {
        const pe = m(Q[oe - 1]), be = m(Q[oe]);
        ie.push(ie[oe - 1] + Math.hypot(be.x - pe.x, be.y - pe.y));
      }
      const he = ie[ie.length - 1] || 0;
      if (he <= 1e-8) {
        const oe = Q[0], pe = m(oe);
        return [g(oe, pe.x, pe.y)];
      }
      const re = [];
      let xe = 0;
      for (let oe = 0; oe <= he + 1e-9; oe += te) {
        for (; xe < ie.length - 2 && ie[xe + 1] < oe; ) xe += 1;
        const pe = ie[xe], be = ie[xe + 1], Oe = Math.max(1e-8, be - pe);
        re.push(b(Q[xe], Q[xe + 1], Z((oe - pe) / Oe, 0, 1)));
      }
      const Ge = Q[Q.length - 1], Ue = m(Ge), nt = re[re.length - 1], ye = nt ? m(nt) : null;
      return (!ye || Math.hypot(ye.x - Ue.x, ye.y - Ue.y) > te * 0.35) && re.push(g(Ge, Ue.x, Ue.y)), re;
    }, P = (Q) => {
      if (!Array.isArray(Q) || Q.length < 3) return Q ? Q.slice() : [];
      const te = m(Q[0]), ie = [g(Q[0], te.x, te.y)];
      for (let xe = 0; xe < Q.length - 1; xe += 1) {
        const Ge = Q[xe], Ue = Q[xe + 1], nt = m(Ge), ye = m(Ue), oe = g(
          Ge,
          nt.x * 0.75 + ye.x * 0.25,
          nt.y * 0.75 + ye.y * 0.25,
          {
            t: Number(Ge.t || 0) * 0.75 + Number(Ue.t || 0) * 0.25,
            widthScale: gn(Ge, "widthScale", 1) * 0.75 + gn(Ue, "widthScale", 1) * 0.25,
            pressureLike: gn(Ge, "pressureLike", 1) * 0.75 + gn(Ue, "pressureLike", 1) * 0.25
          }
        ), pe = g(
          Ge,
          nt.x * 0.25 + ye.x * 0.75,
          nt.y * 0.25 + ye.y * 0.75,
          {
            t: Number(Ge.t || 0) * 0.25 + Number(Ue.t || 0) * 0.75,
            widthScale: gn(Ge, "widthScale", 1) * 0.25 + gn(Ue, "widthScale", 1) * 0.75,
            pressureLike: gn(Ge, "pressureLike", 1) * 0.25 + gn(Ue, "pressureLike", 1) * 0.75
          }
        );
        ie.push(oe, pe);
      }
      const he = Q[Q.length - 1], re = m(he);
      return ie.push(g(he, re.x, re.y)), ie;
    }, A = N(i, S);
    if (A.length < 3) return A;
    const L = l ? 2 : 1;
    let U = A.slice();
    for (let Q = 0; Q < L; Q += 1) U = P(U);
    return N(U, Math.max(S * 0.75, 55e-5));
  }
  function gn(i, s, l = 1) {
    const u = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(u) ? Math.max(0, u) : l;
  }
  function eb(i) {
    const s = Number(i == null ? void 0 : i.radiusValue);
    if (Number.isFinite(s) && s > 0) {
      const l = String((i == null ? void 0 : i.radiusModel) || "").trim() || "erp_uv_norm";
      return l === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
      } : {
        model: l,
        value: s
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((i == null ? void 0 : i.size) || 10) * 0.5 / 2048)
    };
  }
  function Qo(i, s, l = {}) {
    const u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(i)), u.height = Math.max(1, Math.round(s));
    const h = u.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, u.width, u.height), h.imageSmoothingEnabled = !0), { canvas: u, ctx: h };
  }
  function ea() {
    const i = na();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function ta() {
    const i = na();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function gd() {
    const i = jl(), s = ta();
    return i ? `${s}:${i}` : s;
  }
  function tb() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function nb() {
    p.paintCompositeRevision += 1;
  }
  function rb() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function yd() {
    var i, s;
    p.paintEngineRevisionKey = null, (s = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, _), p.paintEngineRevisionKey = ea();
  }
  function bd() {
    _.painting_layer !== null && (_.painting_layer = null), Za = "";
  }
  function Ht() {
    rb(), Ce.backgroundDirty = !0, Ce.dirty = !0;
  }
  function sr({ rebuildPaintEngine: i = !1 } = {}) {
    bd(), tb(), Ht(), i && yd();
  }
  function oo() {
    bd(), nb(), Ht();
  }
  function os() {
    var u;
    const i = na(), s = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== s && (p.paintEngine = mu(i), p.paintEngineDescriptorKey = s, p.paintEngineRevisionKey = "");
    const l = ea();
    p.paintEngineRevisionKey !== l && (p.paintEngineRevisionKey = l, (u = p.paintEngine) == null || u.rebuildCommitted(_));
  }
  function na() {
    const i = Math.max(1, M(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function zn() {
    return na();
  }
  function ib(i, s, l, u, h = null) {
    const m = eb(i), g = gn(s, "widthScale", 1) * gn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * g) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * vr) * l * g) : Math.max(0.5, m.value / (2 * Math.PI) * l * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function ob(i, s, l = {}) {
    const u = String((s == null ? void 0 : s.layerKind) || "paint"), h = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, g = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * g : 1, u === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, S = m ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${S})`;
  }
  function ab(i, s, l) {
    const u = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(u) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), u, 0, Math.PI * 2), i.fill());
  }
  function sb(i, s, l, u, h = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(u.w, u.h) * 0.25;
    i.save(), ob(i, l, h);
    const g = (b) => ab(i, b, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let b = 0; b < s.length - 1; b += 1) {
      const S = s[b], N = s[b + 1];
      if (!S || !N) continue;
      const P = Number(S.x || 0), A = Number(S.y || 0), L = Number(N.x || 0), U = Number(N.y || 0), ne = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5))), Q = Math.max(0.5, Math.min(m, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(P) || !Number.isFinite(A) || !Number.isFinite(L) || !Number.isFinite(U) || !Number.isFinite(ne) || !Number.isFinite(Q)) continue;
      const te = L - P, ie = U - A, he = Math.hypot(te, ie);
      if (!Number.isFinite(he) || he < 1e-6) {
        g(S);
        continue;
      }
      if (he > Math.max(u.w, u.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(ne, Q)), xe = Math.max(0.35, Math.min(re * 0.4, 2.25)), Ge = Math.max(1, Math.ceil(he / xe));
      for (let Ue = 0; Ue <= Ge; Ue += 1) {
        const nt = Ue / Ge;
        g({
          x: Yn(P, L, nt),
          y: Yn(A, U, nt),
          radiusPx: Yn(ne, Q, nt)
        });
      }
    }
    g(s[s.length - 1]), i.restore();
  }
  function lb(i, s, l, u) {
    sb(i, s, l, u, { preview: !1 });
  }
  function cb(i, s, l, u, h) {
    var b, S, N, P;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", g = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const A = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(A.r || 0) * 255)}, ${Math.round(Number(A.g || 0) * 255)}, ${Math.round(Number(A.b || 0) * 255)}, ${Number(A.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((b = s[0]) == null ? void 0 : b[m]) || 0) * u.w, Number(((S = s[0]) == null ? void 0 : S[g]) || 0) * u.h);
    for (let A = 1; A < s.length; A += 1)
      i.lineTo(Number(((N = s[A]) == null ? void 0 : N[m]) || 0) * u.w, Number(((P = s[A]) == null ? void 0 : P[g]) || 0) * u.h);
    i.closePath(), i.fill(), i.restore();
  }
  function vd(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function ub(i, s) {
    const l = vd(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((u) => ({
      x: Number((u == null ? void 0 : u.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((u == null ? void 0 : u.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: ib(i, u, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function _d(i, s, l = null) {
    var b, S, N, P;
    if (!(i != null && i.ctx) || !s) return !1;
    const u = l || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((S = i.canvas) == null ? void 0 : S.height) || 0) }, h = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((N = s == null ? void 0 : s.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((P = s == null ? void 0 : s.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill")
      return cb(i.ctx, vd(h), h, u), !0;
    const g = ub(h, u);
    return g.length ? (lb(i.ctx, g, h, u), !0) : !1;
  }
  function fb(i, s, l, u = 8) {
    const h = new Uint8Array(s * l), m = [], g = new Int32Array(s * l), b = new Int32Array(s * l);
    for (let S = 0; S < l; S += 1)
      for (let N = 0; N < s; N += 1) {
        const P = S * s + N;
        if (h[P] || i[P] <= u) continue;
        let A = 0, L = 0;
        g[L] = N, b[L] = S, L += 1, h[P] = 1;
        const U = [];
        let ne = N, Q = S, te = N, ie = S;
        for (; A < L; ) {
          const he = g[A], re = b[A];
          A += 1, U.push({ x: he, y: re }), he < ne && (ne = he), re < Q && (Q = re), he > te && (te = he), re > ie && (ie = re);
          const xe = [
            [(he - 1 + s) % s, re],
            [(he + 1) % s, re],
            [he, re - 1],
            [he, re + 1]
          ];
          for (const [Ge, Ue] of xe) {
            if (Ue < 0 || Ue >= l) continue;
            const nt = Ue * s + Ge;
            h[nt] || i[nt] <= u || (h[nt] = 1, g[L] = Ge, b[L] = Ue, L += 1);
          }
        }
        m.push({ pixels: U, minX: ne, minY: Q, maxX: te, maxY: ie });
      }
    return m;
  }
  function db(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((S) => Number((S == null ? void 0 : S.x) || 0)).filter((S) => Number.isFinite(S)))].sort((S, N) => S - N);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let u = -1, h = 0;
    for (let S = 0; S < l.length; S += 1) {
      const N = l[S], A = (S === l.length - 1 ? l[0] + s : l[S + 1]) - N - 1;
      A > u && (u = A, h = S);
    }
    const m = (l[(h + 1) % l.length] + s) % s;
    let g = 1 / 0, b = -1 / 0;
    for (const S of l) {
      const N = (S - m + s) % s;
      g = Math.min(g, N), b = Math.max(b, N);
    }
    return {
      startX: m,
      widthPx: Math.max(1, b - g + 1)
    };
  }
  function hb(i, s, l = {}) {
    var N;
    const u = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (N = i == null ? void 0 : i.getContext) == null ? void 0 : N.call(i, "2d");
    if (!m || u < 1 || h < 1) return [];
    const g = m.getImageData(0, 0, u, h), b = new Uint8Array(u * h);
    for (let P = 0; P < b.length; P += 1) b[P] = g.data[P * 4 + 3];
    return fb(b, u, h, 8).map((P, A) => {
      const L = db(P, u);
      if (!L) return null;
      const U = Number(L.widthPx || 0), ne = P.maxY - P.minY + 1, Q = Number(L.startX || 0), te = document.createElement("canvas");
      te.width = U, te.height = ne;
      const ie = te.getContext("2d");
      if (!ie) return null;
      const he = ie.createImageData(U, ne);
      return P.pixels.forEach(({ x: re, y: xe }) => {
        const Ge = (xe * u + re) * 4, Ue = (Number(re || 0) - Q + u) % u, nt = ((xe - P.minY) * U + Ue) * 4;
        he.data[nt + 0] = g.data[Ge + 0], he.data[nt + 1] = g.data[Ge + 1], he.data[nt + 2] = g.data[Ge + 2], he.data[nt + 3] = g.data[Ge + 3];
      }), ie.putImageData(he, 0, 0), {
        id: yo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + A * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: P.minY / h,
          u1: U / u,
          v1: (P.maxY + 1) / h
        },
        rasterDataUrl: te.toDataURL("image/png"),
        transform: {
          du: Q / u,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ra(i, s) {
    if (!i || !s) return null;
    const l = es(i), u = eu(s, l.centerDir);
    if (!Number.isFinite(u) || u <= 1e-6) return null;
    const h = eu(s, l.right) / u, m = eu(s, l.up) / u;
    return {
      x: (h / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function pb(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const l = ci();
      return i.map((u) => ({
        x: l.x + Number(u.u || 0) * l.w,
        y: l.y + Number(u.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Jo(io(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function xd(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const u = ci();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, g = s == null ? m : Number(s || 0) + Un(m, s);
        return {
          x: u.x + g * u.w,
          y: u.y + Number(h.v || 0) * u.h
        };
      });
    }
    const l = i.map((u) => Jo(io(u))).filter(Boolean);
    return l.every((u) => Number(u.z || 0) > 0) ? l.map((u) => ({ x: Number(u.x || 0), y: Number(u.y || 0) })) : [];
  }
  function mb(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l], h = i[(l + 1) % i.length];
      if (!u || !h || !Number.isFinite(u.x) || !Number.isFinite(u.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(u.x), Number(h.y) - Number(u.y)) > s) return !1;
    }
    return !0;
  }
  function gb(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const u = [];
    for (const h of i) {
      const m = io(h), g = ra(s, m);
      if (!g) return [];
      u.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return mb(u, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? u : [];
  }
  function yb(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const u = [];
    for (const h of i) {
      const m = io(h), g = ra(s, m);
      g && u.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return u;
  }
  function bb() {
    const i = He(), s = dc(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: u, shot: h } = kw(i, s, { width: O.width, height: O.height }), m = vb(l);
    return I.save(), I.fillStyle = "#0a0a0a", I.fillRect(0, 0, O.width, O.height), fd(I, u, h) || (I.fillStyle = "rgba(255, 255, 255, 0.03)", I.fillRect(u.x, u.y, u.w, u.h)), I.restore(), I.save(), I.fillStyle = "rgba(0, 0, 0, 0.58)", I.beginPath(), I.rect(0, 0, O.width, O.height), I.roundRect(l.x, l.y, l.w, l.h, m), I.fill("evenodd"), I.restore(), I.save(), I.strokeStyle = g2, I.globalAlpha = 0.62, I.lineWidth = 2, I.beginPath(), I.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), I.stroke(), I.restore(), !0;
  }
  function vb(i) {
    const s = Math.max(1e-6, Number(Ce.frameCanvasScale || 1));
    return Math.min(Te * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Vr() {
    var s;
    const i = p.mode === "frame" ? He() : null;
    C.frameRollKnob.visible = !!i && !r && i.locked !== !0, C.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), C.frameRollKnob.displayValue = go(C.frameRollKnob.rollDeg), C.frameRollKnob.dragging = ((s = p.interaction) == null ? void 0 : s.kind) === "roll_frame", C.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function _b() {
    var S, N;
    if (((S = p.interaction) == null ? void 0 : S.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, s = (N = i == null ? void 0 : i.geometry) == null ? void 0 : N.points;
    let l;
    if (p.mode === "frame") {
      const P = He(), A = Zt(P);
      l = gb(s, P, A);
    } else
      l = pb(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const u = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), g = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    I.save(), I.beginPath(), I.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let P = 1; P < l.length; P++) I.lineTo(Number(l[P].x || 0), Number(l[P].y || 0));
    I.closePath(), u ? (I.lineWidth = 2, I.setLineDash([6, 6]), I.lineDashOffset = 0, I.strokeStyle = "rgba(0,0,0,0.96)", I.stroke(), I.lineDashOffset = -6, I.strokeStyle = "rgba(255,255,255,0.96)", I.stroke(), I.setLineDash([]), I.lineDashOffset = 0) : (I.lineWidth = 1.5, I.setLineDash([6, 4]), I.strokeStyle = `rgba(${m},${g},${b},1)`, I.stroke(), I.setLineDash([])), I.restore();
  }
  function xb() {
    const i = p.frameRollOverlayVisual, s = Z(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = Zt(i.shot);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * vr, m = Math.hypot(l.w, l.h) * 0.55, g = Math.cos(h) * m, b = Math.sin(h) * m;
    I.save(), I.globalAlpha *= s, I.beginPath(), I.rect(l.x, l.y, l.w, l.h), I.clip(), I.translate(u.x, u.y), I.rotate(h);
    const S = Math.max(12, Math.min(l.w, l.h) / 6);
    I.beginPath();
    for (let N = -m; N <= m; N += S)
      I.moveTo(N, -m), I.lineTo(N, m);
    for (let N = -m; N <= m; N += S)
      I.moveTo(-m, N), I.lineTo(m, N);
    I.lineWidth = 1, I.strokeStyle = "rgba(255, 255, 255, 0.22)", I.stroke(), I.setTransform(1, 0, 0, 1, 0, 0), I.beginPath(), I.moveTo(u.x - g, u.y - b), I.lineTo(u.x + g, u.y + b), I.lineWidth = 1.5, I.setLineDash([8, 6]), I.strokeStyle = "rgba(255, 255, 255, 0.92)", I.shadowColor = "rgba(0, 0, 0, 0.8)", I.shadowBlur = 3, I.stroke(), I.setLineDash([]), I.restore();
  }
  function wb() {
    return t !== "cutout" || !He() ? 0 : v2;
  }
  function Sb() {
    const i = Z(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const s = He(), l = s ? Yt(s) : null, u = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    l != null && l.visible && u && (p.cutoutPanoDimCorners = u), s && (l != null && l.visible) && u && (p.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: zf(s),
      locked: wn(s)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? u : h ? p.cutoutPanoDimCorners || [] : [];
    if (I.save(), I.fillStyle = `rgba(0, 0, 0, ${i})`, I.beginPath(), I.rect(0, 0, O.width, O.height), m.length >= 4) {
      I.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) I.lineTo(m[g].x, m[g].y);
      I.closePath();
    }
    I.fill("evenodd"), I.restore();
  }
  function wd() {
    Lr = null, p.mode === "frame" ? (Ce.frameSafeRect = Qb(), bb()) : p.mode === "unwrap" ? $y(!1) : Vy(!1), Sb(), t === "cutout" && qy(), Yy(), Vr(), _b(), xb(), C.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && Ye(), Ce.hasPresentedFrame || (Ce.hasPresentedFrame = !0, J.style.opacity = "1"), t === "cutout" && C.cameraPreview && (C.cameraPreview.settled = Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame && p.mode !== "frame");
    const i = Ay();
    C.stageStatus = i.status, C.stageStatusDetail = i.detail, i.status === ur ? (z == null || z.removeAttribute("data-stage-ready"), z == null || z.setAttribute("data-stage-loading-kind", i.detail)) : (z == null || z.setAttribute("data-stage-ready", ""), z == null || z.removeAttribute("data-stage-loading-kind"));
  }
  function kb(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Mb() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Y0();
  }
  function de(i = {}) {
    var b, S, N, P, A, L, U, ne, Q, te;
    const s = !!i.localOnly, l = i.externalSync === !0, u = String(i.cause || ""), h = String(((b = p.interaction) == null ? void 0 : b.kind) || "");
    (!s || h === "view" || h === "pan_frame" || kb() || !!((S = p.viewTween) != null && S.active) || u === "mode" || u === "frame_view" || u === "cutout_frame") && (Ce.backgroundDirty = !0), s && Lf() && (p.livePaintInteractionRevision += 1, Ce.backgroundDirty = !0), (!s || u === "selection" || u === "mode" || u === "cutout_frame") && (ql(), Rr()), Mb(), l && ((P = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || P.call(N), (A = e.setDirtyCanvas) == null || A.call(e, !0, !1)), l && !s && ((U = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || U.call(L, !0, !0), (te = (Q = (ne = Cr) == null ? void 0 : ne.canvas) == null ? void 0 : Q.setDirty) == null || te.call(Q, !0, !0)), Ce.dirty = !0;
  }
  function Sd() {
    const i = O.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return O.width !== s || O.height !== l || J.width !== s || J.height !== l ? (O.width = s, O.height = l, J.width = s, J.height = l, Ce.backgroundDirty = !0, Ce.dirty = !0, t === "cutout" && (Ce.pendingStableLayoutFrames = Math.max(Number(Ce.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Nb(i = performance.now()) {
    var m, g;
    Ce.lastTickTs = i;
    const s = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    s != null && s.shot && (p.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = l, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const b = Z(
        (i - Number(p.frameRollOverlayStartTs || i)) / _2,
        0,
        1
      );
      p.frameRollOverlayAlpha = Yn(
        Number(p.frameRollOverlayFrom || 0),
        l,
        Ps(b)
      ), b >= 1 && (p.frameRollOverlayAlpha = l, l === 0 && (p.frameRollOverlayVisual = null)), Ce.dirty = !0;
    }
    const u = wb();
    if (Math.abs(u - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = u, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - u) > 1e-6) {
      const b = Z(
        (i - Number(p.cutoutPanoDimStartTs || i)) / Kp,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Yn(
        Number(p.cutoutPanoDimFrom || 0),
        u,
        Ps(b)
      ), b >= 1 && (p.cutoutPanoDimAlpha = u), b >= 1 && u === 0 && (p.cutoutPanoDimCorners = null), Ce.dirty = !0;
    }
    const h = t === "cutout" && He() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const b = Z(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / Kp,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Yn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        Ps(b)
      ), b >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), Ce.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const b = Math.max(1, Number(p.outputPreviewAnimDurationMs)), S = Z((i - Number(p.outputPreviewAnimStartTs || 0)) / b, 0, 1), P = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? A2(S) : E2(S);
      p.outputPreviewAnim = Yn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, P), Ce.dirty = !0, S >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((g = p.viewTween) != null && g.active) {
      const b = p.viewTween, S = Z((i - b.startTs) / b.durationMs, 0, 1), N = Ps(S);
      p.viewYaw = Gt(b.startYaw + b.deltaYaw * N), p.viewPitch = b.startPitch + (b.targetPitch - b.startPitch) * N, p.viewFov = b.startFov + (b.targetFov - b.startFov) * N, Ce.backgroundDirty = !0, Ce.dirty = !0, S >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(cn.state.inertia.vx || 0), p.viewInertia.vy = Number(cn.state.inertia.vy || 0), p.viewInertia.active = !!cn.state.inertia.active, cn.stepInertia(i) && (p.viewInertia.vx = Number(cn.state.inertia.vx || 0), p.viewInertia.vy = Number(cn.state.inertia.vy || 0), p.viewInertia.active = !!cn.state.inertia.active, Ce.backgroundDirty = !0, Ce.dirty = !0), Ce.pendingStableLayoutFrames > 0 && (Ce.pendingStableLayoutFrames -= 1, Ce.dirty = !0), Ce.dirty) {
      if (Ce.pendingStableLayoutFrames > 0)
        return;
      Ce.dirty = !1, wd();
    }
  }
  function kd(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Ce.tickErrorSignature !== l && (Ce.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), C.stageStatus = Zn, C.stageStatusDetail = "frame", z == null || z.setAttribute("data-stage-ready", ""), z == null || z.removeAttribute("data-stage-loading-kind");
    }
  }
  function Md(i = performance.now()) {
    Ce.running && (kd(() => Nb(i)), Ce.running && (Ce.rafId = requestAnimationFrame(Md)));
  }
  function Pb() {
    !Ce.running || !Sd() || kd(() => {
      Ce.dirty = !1, wd();
    });
  }
  const Nd = new ResizeObserver(Pb);
  Nd.observe(O);
  function Ab() {
    Ce.running = !1, Ce.rafId && cancelAnimationFrame(Ce.rafId), Ce.rafId = 0, Nd.disconnect();
  }
  function ot() {
    r || k && _.stickers.some(Rl) || (p.historyController.commitActionGroup(JSON.stringify(ip(_))), yc());
  }
  function sc(i) {
    if (r) return;
    gr();
    const s = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (yc(), !s) return;
    const l = gw(_, s);
    Object.keys(_).forEach((u) => delete _[u]), Object.assign(_, l.state), p.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], l.paintingChanged ? sr() : Ht(), On(), ze(), En(), de({ cause: "cutout_frame" });
  }
  function Pd() {
    var l, u;
    const i = Array.isArray((l = p.historyController) == null ? void 0 : l.entries) ? p.historyController.entries : [], s = Number((u = p.historyController) == null ? void 0 : u.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function On() {
    Cn();
    const i = lM({
      editor: p,
      swatches: Ws,
      paintColorPopOpen: j ? !j.hidden : !1,
      colorToCss: _r,
      colorsApproximatelyEqual: Ys,
      rgb01ToHsv: ru,
      hsv01ToRgb: nu,
      getBrushPresetIdForTool: di,
      isActiveLassoTool: ry
    });
    if (Object.assign(C.paintDock, i), cy(), !i.visible) {
      j && (j.hidden = !0);
      return;
    }
    ke && (clearTimeout(ke), ke = 0), D && (!i.colorEnabled && j && !j.hidden && (ke = window.setTimeout(() => {
      j.hidden = !0, C.paintDock.colorPopOpen = !1, ke = 0;
    }, 170)), j && (j.style.setProperty("--picker-hue-color", i.pickerHueColor), j.style.setProperty("--picker-sat", i.pickerSat), j.style.setProperty("--picker-val", i.pickerVal), j.style.setProperty("--picker-hue", i.pickerHue)), le && (le.style.left = i.pickerSvLeft, le.style.top = i.pickerSvTop), fe && (fe.style.left = i.pickerHueLeft));
  }
  function ao() {
    const i = Wt(t === "cutout" && p.mode === "frame" ? He() : kt());
    i && (p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Ur(i)
    }, ze());
  }
  function ze() {
    var nt, ye, oe, pe;
    if (ki(), o) return;
    _.ui_settings = _.ui_settings || {};
    const i = sM(_.ui_settings);
    if (a) {
      C.sidePanel = cM({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: Hn
      });
      return;
    }
    const s = kt(), l = t === "cutout" && p.mode === "frame" ? He() : null, u = l || s, h = l ? [l] : ar(), m = l ? "shot" : Xa();
    if (h.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), u && m !== "stroke") {
      const be = Wt(u);
      p.panelLastValues = {
        yaw_deg: Number(be.yaw_deg || 0),
        pitch_deg: Number(be.pitch_deg || 0),
        hFOV_deg: Number(be.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(be.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(be.rot_deg || 0),
        roll_deg: Number(be.roll_deg || 0),
        aspect_id: Ur(be)
      }, rr(u) && (p.panelLastValues.opacity = Dl(u, p.frame).opacity * 100);
    }
    const g = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), b = m === "stroke" ? null : u, S = k && p.inspectCamera, N = S ? _w(_.camera, p.frame) : rr(b) ? p.panelLastValues : b || g, P = S || !!b && !wn(b);
    p.panelWasEnabled = P, ql();
    let A = null;
    if (l) {
      const be = Bl({ item: l, kind: "shot", label: "Frame" });
      A = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: be.label,
        currentIcon: be.icon || null,
        items: [{
          id: String(l.id || ""),
          label: be.label,
          icon: be.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const be = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? hn().forEach((Ie, ut) => {
        var Mt, Ft;
        if (!Ie) return;
        const qe = k ? Lg(Ie) : Jt(Ie) ? String(Ie.id || Xc) : String(((Ft = (Mt = _.assets) == null ? void 0 : Mt[Ie.asset_id]) == null ? void 0 : Ft.name) || Ie.asset_id || Ie.id), Et = `${ut + 1}. ${qe}${Jt(Ie) && to(Ie) ? " (hidden)" : ""}`, un = Bl({ item: Ie, label: Et, kind: "image" });
        be.push({ id: Ie.id, label: un.label, icon: un.icon, item: Ie, kind: "image" });
      }) : jf().forEach((Ie) => {
        if (!(Ie != null && Ie.item)) return;
        const ut = Bl(Ie);
        be.push({ id: Ie.item.id, label: ut.label, icon: ut.icon, item: Ie.item, kind: Ie.kind });
      });
      const Oe = (b == null ? void 0 : b.id) || "", Be = S ? { label: "Camera", icon: Me.camera } : be.find((Ie) => Ie.id === Oe) || be[0];
      A = {
        label: "Selection",
        open: !1,
        disabled: be.length <= 1,
        currentLabel: Be.label,
        currentIcon: Be.icon || null,
        items: be.map((Ie) => ({
          id: Ie.id,
          label: Ie.label,
          icon: Ie.icon || null,
          active: Ie.id === Oe
        }))
      };
    }
    const L = [], U = (be, Oe, Be, Ie, ut) => {
      const qe = Z(Number(N[be] || 0), Be, Ie);
      L.push({
        key: be,
        label: Oe,
        min: Be,
        max: Ie,
        step: ut,
        value: qe,
        displayValue: go(qe),
        fillPct: Z((qe - Be) / Math.max(1e-6, Ie - Be) * 100, 0, 100),
        enabled: P && !r
      });
    }, ne = [];
    S ? (U("position_x", "X", -100, 100, 0.01), U("position_y", "Y", -100, 100, 0.01), U("position_z", "Z", -100, 100, 0.01), U("yaw_deg", "Yaw", -180, 180, 0.1), U("pitch_deg", "Pitch", -90, 90, 0.1), U("roll_deg", "Roll", -180, 180, 0.1), U("hFOV_deg", "FOV", 1, 179, 0.1)) : h.length > 1 ? (ne.push(`Selected objects: ${h.length}`), ne.push("Multi-selection supports z-order and delete.")) : (U("yaw_deg", "Yaw", -180, 180, 0.1), U("pitch_deg", "Pitch", -90, 90, 0.1), U("hFOV_deg", "H FOV", 1, 179, 0.1), U("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? U("rot_deg", "Rotation", -180, 180, 0.1) : U("roll_deg", "Roll", -180, 180, 0.1), k && U("opacity", "Opacity", 0, 100, 1));
    const Q = Array.isArray((ye = (nt = _ == null ? void 0 : _.painting) == null ? void 0 : nt.paint) == null ? void 0 : ye.strokes) ? _.painting.paint.strokes.length : 0, te = Array.isArray((pe = (oe = _ == null ? void 0 : _.painting) == null ? void 0 : oe.mask) == null ? void 0 : pe.strokes) ? _.painting.mask.strokes.length : 0, ie = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((be) => String((be == null ? void 0 : be.name) || "")) : [], he = P2(
      e,
      ie.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), re = !!String((he == null ? void 0 : he.src) || "").trim() || Hf("pano_input_images").length > 0, xe = hn().length > 0 || Q > 0, Ge = te > 0, Ue = [
      { key: "mask", label: "Mask", icon: Me.circle_dashed_tool, visible: !!p.showMask, enabled: Ge },
      { key: "objects", label: "Paint / Images", icon: Me.image, visible: !!p.showObjects, enabled: xe },
      { key: "panorama", label: "Panorama", icon: Me.globe, visible: !!p.showPanorama, enabled: re }
    ].map((be) => ({
      ...be,
      ariaLabel: `Toggle ${be.label.toLowerCase()}`,
      tip: be.visible ? "Hide" : "Show"
    }));
    C.sidePanel = uM({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: A,
      enabled: P,
      selectedKind: S ? "camera" : m,
      selectedItems: h,
      params: L,
      notes: ne,
      visibilityRows: Ue,
      uiSettings: i,
      normalizeCoverageValue: Hn
    });
  }
  function ki() {
    if (!k || r) return;
    const i = lc(), s = Pe.selection, l = s && fi(s.owner);
    if (s) {
      const h = l ? ia(s) : [];
      s.frames = s.frames.filter((m) => h.some((g) => l[g].keyframes.some((b) => b.frame === m))), s.frames.length || (Pe.selection = null);
    }
    const u = _.timeline.fps;
    C.timeline = hM(_, {
      frame: p.frame,
      span: i,
      selection: Pe.selection,
      selectedId: p.inspectCamera ? "camera" : p.selectedId,
      expanded: Pe.expanded ?? rp(_),
      openRows: Pe.openRows,
      audio: Ib() && C.videoTransport.hasAudio ? { muted: K.muted } : null,
      playing: Rt.playing,
      label: `${p.frame}f · ${(p.frame / u).toFixed(2)}s @ ${Number(u.toFixed(3))} fps`
    }), C.easing = Pe.selection ? pM(l, ia(Pe.selection), Pe.selection.frames, oa(Pe.selection.owner)) : null;
  }
  function lc(i = null) {
    const s = _.timeline.fps, l = C.videoTransport.ready ? Math.round(Number(C.videoTransport.duration || 0) * s) : 0;
    return cw(_, { minimum: Math.round(s * 5), frames: l, openClip: i });
  }
  function fi(i) {
    return i === "camera" ? _.camera : _.stickers.find((s) => s.id === i) || null;
  }
  function ia(i) {
    return i.lane ? [i.lane] : Uo(fi(i.owner));
  }
  function oa(i) {
    if (i === "camera") return 0;
    const { clip: s } = fi(i);
    return s.start - s.in;
  }
  function as(i) {
    const s = fi(i);
    return !!s && s.locked !== !0;
  }
  function Ad() {
    const i = kt();
    rr(i) && !$i(i.clip, p.frame) && mr(null);
  }
  function Cb(i) {
    const s = Math.max(0, Math.round(i));
    s !== p.frame && (p.frame = s, Ad(), Ht(), ze(), Ye(), de());
  }
  function Ib() {
    return K instanceof HTMLVideoElement && !!K.getAttribute("src");
  }
  function Ob(i) {
    si(), Rt.seek(i);
  }
  function gr() {
    k && Rt.stop();
  }
  function cc() {
    si(), Rt.toggle();
  }
  function so() {
    Ht(), ze(), Ye(), de();
  }
  function aa() {
    ot(), lt(), so();
  }
  function Eb() {
    const { selection: i } = Pe;
    as(i.owner) && (gr(), nw(fi(i.owner), ia(i), i.frames, p.frame - oa(i.owner)), Pe.selection = null, aa());
  }
  function Fb(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        i.phase === "start" && si(), Rt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        cc();
        return;
      }
      if (i.type === "mute") {
        Uf(), ki();
        return;
      }
      if (i.type === "toggle-expanded") {
        Pe.expanded = !(Pe.expanded ?? rp(_)), Pe.selection = null, ki();
        return;
      }
      if (i.type === "toggle-row") {
        Pe.openRows.has(i.id) ? Pe.openRows.delete(i.id) : Pe.openRows.add(i.id), ki();
        return;
      }
      if (i.type === "select-row") {
        const s = _.stickers.find((l) => l.id === i.id);
        s && !$i(s.clip, p.frame) && Ob(s.clip.start), mr(hn().find((l) => l.id === i.id) || null), p.inspectCamera = i.id === "camera", Pe.selection = null, ze(), Ye(), de();
        return;
      }
      if (i.type === "select-keys") {
        const s = oa(i.owner), l = i.frames.map((m) => m - s), u = Pe.selection, h = (u == null ? void 0 : u.owner) === i.owner && u.lane === i.lane;
        if (i.additive && h) {
          const m = new Set(u.frames);
          for (const g of l)
            m.has(g) ? m.delete(g) : m.add(g);
          u.frames = [...m].sort((g, b) => g - b);
        } else
          Pe.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        ki();
        return;
      }
      if (i.type === "move-keys") {
        const s = Pe.selection;
        if (!s || !as(s.owner)) return;
        const l = fi(s.owner), u = ia(s);
        if (i.phase === "start") {
          gr(), Pe.drag = { keyframes: u.map((g) => structuredClone(l[g].keyframes)), frames: s.frames };
          return;
        }
        const { drag: h } = Pe;
        if (!(h != null && h.keyframes)) return;
        u.forEach((g, b) => {
          l[g].keyframes = structuredClone(h.keyframes[b]);
        });
        const m = rw(l, u, h.frames, i.delta, -oa(s.owner));
        if (s.frames = h.frames.map((g) => g + m), i.phase !== "end") {
          so();
          return;
        }
        Pe.drag = null, m ? aa() : so();
        return;
      }
      if (i.type === "clip") {
        const s = _.stickers.find((h) => h.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          gr(), Pe.drag = { clip: { ...s.clip }, span: lc(s.clip) };
          return;
        }
        const { drag: l } = Pe;
        if (!(l != null && l.clip)) return;
        const u = l.clip;
        if (s.clip = { ...u }, i.delta && i.mode === "move" ? aw(s.clip, i.delta) : i.delta && i.mode === "start" ? sw(s.clip, u.start + i.delta) : i.delta && lw(s.clip, (u.duration === null ? l.span : u.start + u.duration) + i.delta, l.span), i.phase !== "end") {
          so();
          return;
        }
        Pe.drag = null, Ad(), JSON.stringify(s.clip) !== JSON.stringify(u) ? aa() : so();
        return;
      }
      if (i.type === "key-row") {
        if (!as(i.owner)) return;
        gr(), Qx(fi(i.owner), p.frame - oa(i.owner)), aa();
        return;
      }
      if (i.type === "easing") {
        const s = Pe.selection;
        if (!s || !as(s.owner)) return;
        gr(), ow(fi(s.owner), ia(s), s.frames, i.easing), i.commit ? aa() : so();
      }
    }
  }
  async function Cd(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Ar(i)) return;
    if (k) {
      gr(), await Db(i);
      return;
    }
    const s = Ti("asset"), l = va(e, `add:${s}`, async () => {
      try {
        const { image: u } = await _a(i);
        Xe.set(s, u);
        const h = Ti("st");
        _.stickers.push({
          id: h,
          asset_id: s,
          yaw_deg: p.viewYaw,
          pitch_deg: p.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: li(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
          rot_deg: 0,
          z_index: qa()
        }), mr(_.stickers[_.stickers.length - 1]), ss(), ze(), Ye(), de();
        const m = await Li(i, {
          fetchApi: (S, N) => Kt.fetchApi(S, N)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === s).length) return;
        _.assets[s] = m, ro(), ot(), lt(), ze(), Ye(), de();
      } catch (u) {
        delete _.assets[s], Xe.delete(s);
        const h = Array.isArray(_.stickers) ? _.stickers : [], m = h.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (_.stickers = h.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(p.selectedId || "")) && mr(null), ze(), Ye(), de(), lt()), u;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function Tb() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = G == null ? void 0 : G.openImagePicker) == null || i.call(G, "add");
  }
  async function Db(i) {
    const s = Ti("st"), l = va(e, `add:${s}`, async () => {
      const { image: u } = await _a(i), h = {
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: li(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
        rot_deg: 0
      }, m = vf(s, { kind: "file", filename: "" }, h, qa());
      Xe.set(Zo(m), u), _.stickers.push(m), mr(m), ss(), ze(), Ye(), de();
      try {
        const g = await Li(i, {
          fetchApi: (S, N) => Kt.fetchApi(S, N)
        }), b = _.stickers.find((S) => S.id === s);
        if (!b) return;
        b.source = Vs(g), Xe.set(Zo(b), u), ot(), lt();
      } catch (g) {
        throw _.stickers = _.stickers.filter((b) => b.id !== s), p.selectedId === s && mr(null), ot(), lt(), g;
      } finally {
        ze(), Ye(), de();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function Lb(i, s) {
    const l = va(e, `replace:${s}:${Ti("asset")}`, async () => {
      const { image: u } = await _a(i), h = await Li(i, {
        fetchApi: (g, b) => Kt.fetchApi(g, b)
      }), m = _.stickers.find((g) => g.id === s);
      if (m) {
        m.source = Vs(h), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((b) => b.value)])
          g.vFOV_deg = li(g.hFOV_deg, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1));
        Xe.set(Zo(m), u), Ht(), ot(), lt(), ze(), Ye(), de();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function Rb(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = kt();
    if (!s || !mt(s) || Jt(s) || !Ar(i)) return;
    if (k) {
      await Lb(i, s.id);
      return;
    }
    const l = String(s.id || ""), u = Ti("asset"), h = va(e, `replace:${l}:${u}`, async () => {
      var P;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((A) => String((A == null ? void 0 : A.id) || "") === l) || null;
      if (!m || !mt(m) || Jt(m)) return;
      const g = String(m.asset_id || ""), b = g ? yn(((P = _.assets) == null ? void 0 : P[g]) || null) : null, S = Number(m.vFOV_deg || 0), N = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: A } = await _a(i);
        Xe.set(u, A), m.asset_id = u, m.vFOV_deg = li(
          Number(m.hFOV_deg || 30),
          Number(A.naturalWidth || A.width || 1),
          Number(A.naturalHeight || A.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Ht(), ze(), Ye(), de();
        const L = await Li(i, {
          fetchApi: (ne, Q) => Kt.fetchApi(ne, Q)
        }), U = (Array.isArray(_.stickers) ? _.stickers : []).find((ne) => String((ne == null ? void 0 : ne.id) || "") === l) || null;
        if (!U || String(U.asset_id || "") !== u) return;
        _.assets[u] = L, ro(), ot(), lt(), ze(), Ye(), de();
      } catch (A) {
        delete _.assets[u], Xe.delete(u);
        const L = (Array.isArray(_.stickers) ? _.stickers : []).find((U) => String((U == null ? void 0 : U.id) || "") === l) || null;
        throw L && String(L.asset_id || "") === u && (g && b && (_.assets[g] = b), L.asset_id = g, L.vFOV_deg = S, L.crop = N ? { ...N } : null), Ht(), lt(), ze(), Ye(), de(), A;
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function $b() {
    var s;
    if (r) return;
    const i = kt();
    !i || !mt(i) || Jt(i) || (s = G == null ? void 0 : G.openImagePicker) == null || s.call(G, "replace");
  }
  async function Vb() {
    if (r || t !== "stickers") return;
    if (k) {
      await zb();
      return;
    }
    const i = _.assets && typeof _.assets == "object" ? _.assets : {}, s = Object.entries(i).filter(([, u]) => {
      const h = String((u == null ? void 0 : u.type) || "").toLowerCase(), m = String((u == null ? void 0 : u.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [u, h] of s)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const g = await fetch(m).then((A) => A.blob()), b = String(g.type || "image/png").split("/")[1] || "png", S = String((h == null ? void 0 : h.name) || `${u}.${b}`), N = new File([g], S, { type: g.type || "image/png" }), P = await Li(N, {
          fetchApi: (A, L) => Kt.fetchApi(A, L)
        });
        _.assets[u] = {
          ...P,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (lt(), de());
  }
  async function zb() {
    let i = !1;
    for (const s of _.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const u = await fetch(l).then((b) => b.blob()), h = String(u.type || "image/png").split("/")[1] || "png", m = new File([u], `${s.id}.${h}`, { type: u.type || "image/png" }), g = await Li(m, {
            fetchApi: (b, S) => Kt.fetchApi(b, S)
          });
          s.source = Vs(g), i = !0;
        } catch {
        }
    }
    i && (lt(), de());
  }
  function jb() {
    if (r || t !== "cutout") return;
    const i = He();
    if (i) {
      mr(i), p.mode = "pano", Si(
        Gt(Number(i.yaw_deg || 0)),
        Z(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), ze(), Ye(), de({ cause: "cutout_frame" });
      return;
    }
    const s = lg({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Gt(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    _.shots = [s], mr(s), ss(), p.mode = "pano", ot(), lt(), ze(), Ye(), de({ cause: "cutout_frame" });
  }
  function Hb() {
    r || t !== "cutout" || (_.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, _.active.selected_shot_id = null, ot(), lt(), ze(), Ye(), de());
  }
  function Gb() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], s = [];
    for (const l of i)
      Jt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function Id(i, s, l = "Clear") {
    return new Promise((u) => {
      C.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: u
      };
    });
  }
  async function Kb() {
    var l, u;
    if (r || !await Id(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = Io(null), sr();
    const s = Gb();
    if (t === "stickers")
      _.stickers = k ? _.stickers.filter((h) => h.placement === "world" || s.includes(h)) : s, k || (_.assets = {}), p.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = ((u = s[0]) == null ? void 0 : u.id) || null, ro();
    else {
      const h = mw(_.shots, _.active.selected_shot_id);
      _.stickers = s, _.assets = {}, _.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, ro();
    }
    ot(), lt(), ze(), Ye(), de();
  }
  async function Bb(i) {
    var m, g, b, S;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", u = lo(s);
    if (!(!u.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((g = p.interaction) == null ? void 0 : g.layerKind) === s) || !await Id(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((b = p.interaction) == null ? void 0 : b.kind) === "draw" && ((S = p.interaction) == null ? void 0 : S.layerKind) === s) {
        const N = zn();
        N && p.paintEngine.cancelActiveStroke(N), p.interaction = null;
      }
      u.length = 0, _.painting.raster_objects = In().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== s), s === "paint" && (pn().length = 0), sr(), ot(), lt(), ze(), Ye(), On(), de();
    }
  }
  function Ub() {
    if (r) return;
    const i = kt();
    if (!i || !mt(i) || Jt(i) || k && Rl(i)) return;
    let s;
    k ? s = Sw(i, Ti("st"), qa()) : (s = JSON.parse(JSON.stringify(i)), s.id = Ti("st"), s.yaw_deg = Gt((s.yaw_deg || 0) + 8), s.z_index = qa()), _.stickers.push(s), _.active.selected_sticker_id = s.id, p.selectedId = s.id, p.selectedIds = [s.id], Ht(), ot(), lt(), Ye(), ze(), de();
  }
  function Od() {
    var l, u, h, m, g;
    if (r) return;
    const i = ar(), s = kt();
    if (!(!s && i.length === 0) && !i.some((b) => wn(b))) {
      if (gr(), i.length > 1) {
        const b = new Set(i.filter((P) => qt(P)).map((P) => String(P.actionGroupId || P.id || ""))), S = new Set(i.filter((P) => mn(P)).map((P) => nn(P.rasterObjectId || P.id || ""))), N = new Set(i.filter(mt).map((P) => String(P.id || "")));
        b.size > 0 && (_.painting.paint.strokes = (Array.isArray((u = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : u.strokes) ? _.painting.paint.strokes : []).filter((P) => !b.has(String((P == null ? void 0 : P.actionGroupId) || ""))), _.painting.groups = pn().filter((P) => !b.has(String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || ""))), sr()), S.size > 0 && (_.painting.raster_objects = In().filter((P) => !S.has(String((P == null ? void 0 : P.id) || ""))), oo()), N.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((P) => N.has(String((P == null ? void 0 : P.id) || "")) ? Jt(P) ? (to(P) || (P.visible = !1), !0) : !1 : !0), ro(), Ht()), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Ye(), de();
        return;
      }
      if (qt(s)) {
        const b = String(s.actionGroupId || s.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (h = _.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== b), _.painting.groups = pn().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== b), sr(), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Ye(), de();
        return;
      }
      if (mn(s)) {
        const b = nn(s.rasterObjectId || s.id || "");
        _.painting.raster_objects = In().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== b), oo(), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Ye(), de();
        return;
      }
      if (t === "stickers" || mt(s)) {
        if (Jt(s)) {
          if (to(s)) return;
          s.visible = !1, Ht(), ot(), lt(), ze(), Ye(), de();
          return;
        }
        _.stickers = _.stickers.filter((b) => b.id !== s.id), ro(), Ht(), p.selectedId = ((g = hn()[0]) == null ? void 0 : g.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = p.selectedId, ot(), lt(), ze(), Ye(), de();
        return;
      }
      Hb();
    }
  }
  function uc(i, s) {
    const l = Ce.frameSafeRect;
    if (!i || !l || p.mode !== "frame") return !1;
    const u = qc * Bi(l, i), h = pf(hf(l, s), u);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function Ed(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, u = (() => {
      const b = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(b)) {
        const [P, A] = b.split(":").map((L) => Number(L));
        if (Number.isFinite(P) && Number.isFinite(A)) return P >= A;
      }
      const S = Number(i.hFOV_deg || 64), N = Number(i.vFOV_deg || 40);
      return Math.abs(S - N) > 1e-6 ? S >= N : Ui(i) >= 1;
    })();
    let [h, m] = l[String(s)] || l["1:1"];
    h >= m !== u && ([h, m] = [m, h]);
    const g = h / m;
    if (!uc(i, g)) {
      const b = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = b, i.hFOV_deg = Rs(b, g);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function Wb(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const u = Ra(s, l);
    if (!u) return !1;
    const h = u.ratio;
    if (!uc(i, h)) {
      const m = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Rs(m, h);
    }
    return i.aspect_id = u.label, !0;
  }
  function Fd(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = ni(i), u = l.tanHalfX / Math.max(1e-12, l.tanHalfY), h = 1 / Math.max(1e-12, u);
    if (!uc(i, h)) {
      const m = Z(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Rs(m, h);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = Ri(i);
  }
  function Td() {
    Zi().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function Yb() {
    if (r) return;
    const i = ar();
    if (!kt() || i.length === 0 || i.some((b) => wn(b))) return;
    Td();
    const l = Zi(), u = new Set(i.map((b) => mt(b) ? `sticker:${String(b.id || "")}` : mn(b) ? `rasterObject:${nn(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (l.forEach((b) => {
      var N, P;
      const S = b.type === "sticker" ? `sticker:${String(((N = b.item) == null ? void 0 : N.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((P = b.item) == null ? void 0 : P.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      u.has(S) ? h.push(b) : m.push(b);
    }), !h.length || h[h.length - 1] === l[l.length - 1]) return;
    [...m, ...h].forEach((b, S) => {
      b.type === "sticker" && b.item && (b.item.z_index = S), b.type === "strokeGroup" && b.item && (b.item.z_index = S), b.type === "rasterObject" && b.item && (b.item.z_index = S);
    }), Ht(), ot(), lt(), Ye(), de();
  }
  function Xb() {
    if (r) return;
    const i = ar();
    if (!kt() || i.length === 0 || i.some((b) => wn(b))) return;
    Td();
    const l = Zi(), u = new Set(i.map((b) => mt(b) ? `sticker:${String(b.id || "")}` : mn(b) ? `rasterObject:${nn(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (l.forEach((b) => {
      var N, P;
      const S = b.type === "sticker" ? `sticker:${String(((N = b.item) == null ? void 0 : N.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((P = b.item) == null ? void 0 : P.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      u.has(S) ? h.push(b) : m.push(b);
    }), !h.length || h[0] === l[0]) return;
    [...h, ...m].forEach((b, S) => {
      b.type === "sticker" && b.item && (b.item.z_index = S), b.type === "strokeGroup" && b.item && (b.item.z_index = S), b.type === "rasterObject" && b.item && (b.item.z_index = S);
    }), Ht(), ot(), lt(), Ye(), de();
  }
  function qb() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", f && (_.output_preset = M(Number(_.output_preset || 2048))), d && (_.coverage = Hn(d.value)), v && (_.bg_color = String(v.value || _.bg_color || "#00ff00")), En(), e.setDirtyCanvas(!0, !0));
  }
  function En() {
    var s;
    if (r) return;
    _.coverage = Hn(_.coverage), $g(e, _.active);
    const i = Vg(e, _);
    y && !zg(e, i, String(y.value ?? "")) && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const Dd = () => En();
  r || (e.__panoFlushStateBeforeQueue = Dd);
  function fc() {
    _.ui_settings = $2(_.ui_settings), r || En();
  }
  function lt() {
    var i;
    r || (En(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function Jb() {
    r || Py() && id().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function Zb(i = {}) {
    var u, h, m, g, b, S, N, P, A, L;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((h = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || h.call(u), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), l && ((N = (S = e.graph) == null ? void 0 : S.setDirtyCanvas) == null || N.call(S, !0, !0), (L = (A = (P = Cr) == null ? void 0 : P.canvas) == null ? void 0 : A.setDirty) == null || L.call(A, !0, !0));
  }
  function ss() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", On(), ze());
  }
  function Mi(i) {
    const s = O.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * O.width,
      y: (i.clientY - s.top) / s.height * O.height
    };
  }
  function ls(i) {
    const s = O.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Ld() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function He() {
    if (t !== "cutout") return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const s = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function Qb() {
    var U, ne, Q, te, ie;
    if (!O) return null;
    const i = (U = O.getBoundingClientRect) == null ? void 0 : U.call(O), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? O.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? O.height / i.height : 1;
    Ce.frameCanvasScale = Math.min(s, l);
    let u = 24, h = 24;
    const m = Math.max(u + 1, O.width - 24);
    let g = Math.max(h + 1, O.height - 24);
    const b = (ne = Ze == null ? void 0 : Ze.getBoundingClientRect) == null ? void 0 : ne.call(Ze), S = (Q = Ct == null ? void 0 : Ct.getBoundingClientRect) == null ? void 0 : Q.call(Ct);
    let N = 24;
    b && i && b.width > 0 && b.height > 0 && (N = Math.max(N, (b.right - i.left) * s + Gp)), S && i && S.width > 0 && S.height > 0 && ((te = C.frameRail) == null ? void 0 : te.visible) === !0 && (N = Math.max(N, (i.right - S.left) * s + Gp)), u = Math.max(u, N);
    const P = Math.min(m, O.width - N);
    let A = 24;
    const L = (ie = $e == null ? void 0 : $e.getBoundingClientRect) == null ? void 0 : ie.call($e);
    if (L && i && L.width > 0 && L.height > 0 && (A = Math.max(A, (L.bottom - i.top) * l + Jc)), [It, fn].forEach((he) => {
      var Ge;
      if (!he || !i) return;
      const re = getComputedStyle(he);
      if (re.display === "none" || re.visibility === "hidden" || Number(re.opacity) <= 0) return;
      const xe = (Ge = he.getBoundingClientRect) == null ? void 0 : Ge.call(he);
      !xe || xe.width <= 0 || xe.height <= 0 || (A = Math.max(A, (i.bottom - xe.top) * l + Jc));
    }), Ne && i) {
      const he = getComputedStyle(Ne);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (A = Math.max(A, (b2 + Jc) * l));
    }
    return h = Math.max(h, A), g = Math.max(h + 1, Math.min(g, O.height - A)), {
      x: u,
      y: h,
      w: Math.max(1, P - u),
      h: Math.max(1, g - h)
    };
  }
  function dc(i = He()) {
    if (!i || !O) return null;
    const s = Ce.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, O.width - 48),
      h: Math.max(1, O.height - 48)
    };
    return bx(s, i, qc * Bi(s, i));
  }
  function Zt(i = He()) {
    const s = dc(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function hc() {
    return t === "cutout" && !!He();
  }
  function lr(i, s = performance.now()) {
    if (p.mode === "unwrap") {
      const m = ci(), g = (i.x - m.x) / Math.max(1, m.w), b = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: Z(b, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = Zl(i.x, i.y), { lon: u, lat: h } = nc(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (u / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - h / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function cr(i, s, l = performance.now()) {
    const u = Zt(s);
    if (!u) return null;
    const h = {
      x: (Number(i.x) - u.x) / Math.max(1, u.w),
      y: (Number(i.y) - u.y) / Math.max(1, u.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = oc(s, h);
    if (!m) return null;
    const { lon: g, lat: b } = nc(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - b / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function e1(i, s) {
    const l = He();
    if (!l || l.locked === !0) return !1;
    const u = Number(s) > 0, h = ug(l, s);
    if (!h) return !1;
    if (u) {
      const m = qc * Bi(
        Ce.frameSafeRect || { w: O.width, h: O.height },
        h
      ), g = mf({ width: O.width, height: O.height }, m);
      if (g.halfW < O.width * 0.5 - 1e-6 || g.halfH < O.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = h.hFOV_deg, l.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, ot(), lt(), ze());
    }, 180), ze(), !0;
  }
  function t1() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, ot(), lt(), ze(), !0) : !1;
  }
  function sa() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Ni(), p.interaction = null, no(), Rr(), ze(), bt(p.pointerPos), de({ localOnly: !0 }), !0;
  }
  function n1(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function di(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? jr : Fn[s] ? s : p.activeBrushPresetId || jr;
  }
  function Rd() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (Ld() || hc());
  }
  function $d() {
    var i;
    return Rd() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function cs(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), u = Number((i == null ? void 0 : i.y) || 0), h = s !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== h || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - u) > 0.01;
    return p.pointerPos = { x: l, y: u, inside: h }, g;
  }
  function r1() {
    var P, A;
    if (!$d()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool, l = di(s), u = Fn[l] || Fn[jr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), g = Math.max(3, m * 0.5), b = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : jn(p.paintColor), S = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : Z(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), N = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : Z(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: u,
      radius: g,
      fillStyle: _r(b, S),
      strokeStyle: _r(b, N),
      x: Number(((P = p.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((A = p.pointerPos) == null ? void 0 : A.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function i1() {
    var L, U, ne;
    const i = r1();
    if (!q) return;
    if (!i) {
      q.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, u = "999px", h = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const S = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let P = Number(i.hotspotX ?? s * 0.5), A = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = vl, l = vl, u = "0", g = "0", b = "none", P = x2, A = w2, m = D2(i.fillStyle, N, S);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Q = Math.max(1, Number(((L = i.preset) == null ? void 0 : L.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * Q), l = Math.max(6, i.radius * 2), u = `${Math.min(6, l * 0.42)}px`, h = Number(((ne = (U = i.preset) == null ? void 0 : U.angle) == null ? void 0 : ne.value) || 0) * Vi;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    q.style.display = "block", q.style.width = `${Math.round(s)}px`, q.style.height = `${Math.round(l)}px`, q.style.borderRadius = u, q.style.border = g, q.style.boxShadow = b, q.style.background = m, q.style.backgroundRepeat = "no-repeat", q.style.backgroundPosition = "center", q.style.backgroundSize = "contain", q.style.transform = `translate(${Math.round(i.x - P)}px, ${Math.round(i.y - A)}px) rotate(${h}deg)`;
  }
  function o1() {
    var he;
    if (!me || !se) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool;
    if (s === "lasso_fill") return;
    const l = di(s), u = Fn[l] || Fn[jr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), g = Math.max(6, m * 0.5), b = s === "eraser", S = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : jn(p.paintColor), N = i === "mask" ? _r(S, 0.22) : b ? "rgba(255,255,255,0.14)" : _r(S, Z(Math.max(0.18, Number(S.a ?? 1) * 0.34), 0.18, 0.56)), P = i === "mask" ? _r(S, 0.96) : b ? "rgba(255,255,255,0.72)" : _r(S, Z(Math.max(0.56, Number(S.a ?? 1) * 0.96), 0.56, 1));
    let A = g * 2, L = g * 2, U = "999px", ne = 0, Q = N;
    const te = "rgba(222, 222, 222, 0.72)", ie = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Q = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const re = Math.max(1, Number((u == null ? void 0 : u.aspect) ?? 1));
      A = Math.max(16, g * 2 * re), L = Math.max(10, g * 2), U = `${Math.min(8, L * 0.42)}px`, ne = Number(((he = u == null ? void 0 : u.angle) == null ? void 0 : he.value) || 0) * Vi;
    } else s === "brush" ? Q = `radial-gradient(circle at 50% 50%, ${P} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (A = Math.max(18, g * 1.8), L = A, Q = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : b && (Q = "rgba(255,255,255,0.12)");
    se.style.width = `${Math.round(A)}px`, se.style.height = `${Math.round(L)}px`, se.style.borderRadius = U, se.style.background = Q, se.style.border = `1px solid ${te}`, se.style.boxShadow = `0 0 0 1px ${ie}`, se.style.transform = `rotate(${ne}deg)`, ve && (clearTimeout(ve), ve = 0), me.classList.remove("fade-out"), me.classList.add("show");
  }
  function us() {
    !me || !me.classList.contains("show") || (me.classList.add("fade-out"), ve && clearTimeout(ve), ve = window.setTimeout(() => {
      me.classList.remove("show", "fade-out"), ve = 0;
    }, 180));
  }
  function Vd(i, s, l, u) {
    const h = di(s), m = Fn[h] || Fn[jr], g = p.brushSizes[h] ?? 10, b = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), S = n1(u, b), N = l.map((A) => ({
      ...A,
      t: Number((A == null ? void 0 : A.t) || 0),
      widthScale: Number.isFinite(Number(A == null ? void 0 : A.widthScale)) ? Math.max(0, Number(A.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(A == null ? void 0 : A.pressureLike)) ? Math.max(0, Number(A.pressureLike)) : 1
    })), P = {
      id: yo(i),
      actionGroupId: yo("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: b,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: S.radiusModel,
      radiusValue: S.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((A) => ({ ...A })),
        points: N.map((A) => ({ ...A }))
      }
    };
    return zp(P, m), Number(m.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function zd(i, s, l, u) {
    const h = l.map((S) => ({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: Number.isFinite(Number(S == null ? void 0 : S.widthScale)) ? Math.max(0, Number(S.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(S == null ? void 0 : S.pressureLike)) ? Math.max(0, Number(S.pressureLike)) : 1
    })), m = di(s), g = Fn[m] || Fn[jr], b = {
      id: yo(i),
      actionGroupId: yo("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((S) => ({ ...S }))
      }
    };
    return zp(b, g), Number(g.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function lo(i) {
    const s = _.painting || (_.painting = Io(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function a1(i, s, l = performance.now()) {
    let u;
    if (p.mode === "frame") {
      const N = He();
      if (!N || (u = cr(s, N, l), !u)) return !1;
    } else
      u = lr(s, l);
    if (!u) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = h[h.length - 1];
    if (g) {
      const N = Math.abs(Number(u.u ?? u.x ?? 0) - Number(g.u ?? g.x ?? 0)), P = Math.abs(Number(u.v ?? u.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (N < 15e-4 && P < 15e-4) return !1;
    }
    const b = {
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...b }), m.push({ ...b });
    const S = zn();
    if (S) {
      const N = p.paintEngine.ensureTarget(S);
      p.paintEngine.appendStrokePoint(N, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function s1(i, s, l = performance.now()) {
    var g, b;
    let u;
    if (p.mode === "frame") {
      const S = He();
      if (!S) return !1;
      u = cr(s, S, l);
    } else
      u = lr(s, l);
    const h = (b = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : b.points;
    if (!u || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const S = Math.abs(Number(u.u ?? u.x ?? 0) - Number(m.u ?? m.x ?? 0)), N = Math.abs(Number(u.v ?? u.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (S < 15e-4 && N < 15e-4) return !1;
    }
    return h.push({
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function l1(i) {
    var re, xe, Ge, Ue, nt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    os();
    const l = zn(), u = Qo(l.width, l.height);
    if (!_d(u, s, { w: l.width, h: l.height })) return !1;
    const h = ((xe = (re = u.ctx) == null ? void 0 : re.getImageData(0, 0, l.width, l.height)) == null ? void 0 : xe.data) || null;
    if (!h) return !1;
    const m = new Map(pn().map((ye) => [String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim(), ye ? { ...ye } : null])), g = [], b = [], S = [...In().filter((ye) => String((ye == null ? void 0 : ye.layerKind) || "paint") !== "paint")];
    let N = !1, P = Zi().reduce((ye, oe) => Math.max(ye, Number((oe == null ? void 0 : oe.z_index) || 0)), -1) + 1;
    function A(ye, oe, pe, be = 8) {
      let Oe = oe, Be = pe, Ie = -1, ut = -1;
      for (let qe = 0; qe < pe; qe += 1)
        for (let Et = 0; Et < oe; Et += 1)
          ye[(qe * oe + Et) * 4 + 3] <= be || (Et < Oe && (Oe = Et), qe < Be && (Be = qe), Et > Ie && (Ie = Et), qe > ut && (ut = qe));
      return Ie < Oe || ut < Be ? null : { minX: Oe, minY: Be, maxX: Ie, maxY: ut };
    }
    const L = A(h, l.width, l.height, 8);
    if (!L) return !1;
    function U(ye, oe) {
      return !ye || !oe ? !1 : !(ye.maxX < oe.minX || oe.maxX < ye.minX || ye.maxY < oe.minY || oe.maxY < ye.minY);
    }
    function ne(ye, oe) {
      const pe = oi((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "", "paint", oe);
      if (!pe) return null;
      const be = pe.centerUv.u - pe.halfW, Oe = pe.centerUv.u + pe.halfW, Be = pe.centerUv.v - pe.halfH, Ie = pe.centerUv.v + pe.halfH, ut = l.width, qe = l.height;
      return {
        minX: Math.floor((be % 1 + 1) % 1 * ut),
        maxX: Math.ceil((Oe % 1 + 1) % 1 * ut),
        minY: Math.floor(Z(Be, 0, 1) * qe),
        maxY: Math.ceil(Z(Ie, 0, 1) * qe),
        wraps: Oe - be >= 1 || be < 0 || Oe > 1
      };
    }
    function Q(ye) {
      const oe = (ye == null ? void 0 : ye.bbox) || null;
      if (!oe) return null;
      const pe = (ye == null ? void 0 : ye.transform) || {}, be = l.width, Oe = l.height, Be = Number(oe.u0 || 0) + Number(pe.du || 0), Ie = Number(oe.u1 || 0) + Number(pe.du || 0), ut = Number(oe.v0 || 0) + Number(pe.dv || 0), qe = Number(oe.v1 || 0) + Number(pe.dv || 0);
      return {
        minX: Math.floor((Be % 1 + 1) % 1 * be),
        maxX: Math.ceil((Ie % 1 + 1) % 1 * be),
        minY: Math.floor(Z(ut, 0, 1) * Oe),
        maxY: Math.ceil(Z(qe, 0, 1) * Oe),
        wraps: Ie - Be >= 1 || Be < 0 || Ie > 1
      };
    }
    function te(ye) {
      return ye ? ye.wraps ? U(L, { minX: 0, maxX: ye.maxX, minY: ye.minY, maxY: ye.maxY }) || U(L, { minX: ye.minX, maxX: l.width - 1, minY: ye.minY, maxY: ye.maxY }) : U(L, ye) : !0;
    }
    function ie(ye) {
      if (!ye) return { touched: !1, canvas: null };
      const oe = Qo(l.width, l.height, { readback: !0 });
      oe.ctx.drawImage(ye, 0, 0);
      const pe = oe.ctx.getImageData(0, 0, l.width, l.height);
      oe.ctx.save(), oe.ctx.globalCompositeOperation = "destination-out", oe.ctx.drawImage(u.canvas, 0, 0), oe.ctx.restore();
      const be = oe.ctx.getImageData(0, 0, l.width, l.height);
      for (let Oe = 0; Oe < l.width * l.height; Oe += 1) {
        if (h[Oe * 4 + 3] <= 8) continue;
        const Ie = pe.data[Oe * 4 + 3], ut = be.data[Oe * 4 + 3];
        if (Ie > ut)
          return { touched: !0, canvas: oe.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function he(ye, oe, pe) {
      const be = Number(pe == null ? void 0 : pe.z_index), Oe = hb(ye, oe, pe).map((Be, Ie) => ({
        ...Be,
        z_index: Number.isFinite(be) ? be + Ie * 1e-3 : P + Ie * 1e-3
      }));
      return Oe.length && (P = Math.max(P, ...Oe.map((Be) => Number((Be == null ? void 0 : Be.z_index) || 0))) + 1), Oe;
    }
    for (const ye of pn()) {
      const oe = String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim();
      if (!oe) continue;
      const pe = or(oe, "paint");
      if (!te(ne(ye, pe))) {
        b.push(ye), g.push(...pe);
        continue;
      }
      const be = ((Ue = (Ge = p.paintEngine) == null ? void 0 : Ge.getGroupTarget) == null ? void 0 : Ue.call(Ge, oe)) || null, Oe = ((nt = be == null ? void 0 : be.committedPaint) == null ? void 0 : nt.canvas) || null;
      if (!Oe) {
        b.push(ye), g.push(...pe);
        continue;
      }
      const Be = ie(Oe);
      if (!Be.touched || !Be.canvas) {
        b.push(ye), g.push(...pe);
        continue;
      }
      N = !0;
      const Ie = he(Be.canvas, "paint", m.get(oe) || ye || {});
      S.push(...Ie);
    }
    for (const ye of In().filter((oe) => String((oe == null ? void 0 : oe.layerKind) || "paint") === "paint")) {
      if (!te(Q(ye))) {
        S.push(ye);
        continue;
      }
      const oe = rd(ye, null);
      if (!oe) {
        S.push(ye);
        continue;
      }
      const pe = ie(oe);
      if (!pe.touched || !pe.canvas) {
        S.push(ye);
        continue;
      }
      N = !0;
      const be = he(pe.canvas, "paint", ye);
      S.push(...be);
    }
    return N ? (_.painting.paint.strokes = g, _.painting.groups = b.sort((ye, oe) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), _.painting.raster_objects = S.sort((ye, oe) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((oe == null ? void 0 : oe.z_index) || 0)), qo({ preservePanelValues: !1 }), !0) : !1;
  }
  function c1(i) {
    var g, b, S, N, P;
    if ((((b = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : b.rawPoints) || ((N = (S = i.stroke) == null ? void 0 : S.geometry) == null ? void 0 : N.points) || []).length >= 1) {
      pc(i);
      const A = zn();
      A && (String(((P = i.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(A) : p.paintEngine.commitActiveStroke(i.stroke, A)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Vd(i.layerKind, l.toolKind, [], u);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = zn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function u1(i) {
    var g, b;
    if ((((b = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : b.points) || []).length >= 3) {
      pc(i);
      const S = zn();
      S && p.paintEngine.commitActiveStroke(i.stroke, S), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = zd(i.layerKind, l.toolKind, [], u);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = zn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function pc(i) {
    var m, g, b, S;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = ac(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), l1(i);
    const u = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (u && Df((b = i.stroke) == null ? void 0 : b.actionGroupId), lo(i.layerKind).push(i.stroke), !0);
    const h = s.rawPoints || s.points || [];
    return h.length < 1 ? !1 : (s.processedPoints = ac(h, i.stroke.targetSpace, !0), u && Df((S = i.stroke) == null ? void 0 : S.actionGroupId), lo(i.layerKind).push(i.stroke), !0);
  }
  function jd(i) {
    var l;
    if (t === "cutout" && p.mode === "frame") {
      const u = He(), h = Zt(u);
      if (!u || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const g = cr(i, u, performance.now()), b = g ? io(g) : null;
      if (b)
        for (const N of ic()) {
          if (!mt(N)) continue;
          const P = ra(N, b);
          if (P && Number(P.x) >= 0 && Number(P.x) <= 1 && Number(P.y) >= 0 && Number(P.y) <= 1) {
            const A = Yt(N);
            if (A != null && A.visible) return { item: N, geom: A };
          }
        }
      const S = zl(!1).slice().sort((N, P) => Number((P == null ? void 0 : P.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of S) {
        if (N.type === "strokeGroup") {
          const L = eo(Wo("paint", N.actionGroupId || N.id || ""));
          if (!L) continue;
          const U = Yt(L);
          if (!(U != null && U.visible)) continue;
          const ne = Array.isArray(U.strokePaths) ? U.strokePaths : [];
          for (const Q of ne) {
            const te = Array.isArray(Q == null ? void 0 : Q.points) ? Q.points : [];
            if (!te.length) continue;
            if (Q.closed && te.length >= 3 && Gr(i, te)) return { item: L, geom: U };
            const ie = Math.max(8, Number((Q == null ? void 0 : Q.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < te.length - 1; he += 1)
              if (tu(i, te[he], te[he + 1]) <= ie * ie) return { item: L, geom: U };
            if (te.length === 1 && mi(i, te[0]) <= ie * ie) return { item: L, geom: U };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const L = Qi(Yo(((l = N.item) == null ? void 0 : l.id) || N.id || ""));
          if (!L) continue;
          const U = Yt(L);
          if (nd(L, U, i, g)) return { item: L, geom: U };
          continue;
        }
        const P = N.item;
        if (!P || !mt(P) || !b) continue;
        const A = ra(P, b);
        if (A && Number(A.x) >= 0 && Number(A.x) <= 1 && Number(A.y) >= 0 && Number(A.y) <= 1) {
          const L = Yt(P);
          if (L != null && L.visible) return { item: P, geom: L };
        }
      }
      return null;
    }
    const s = [
      ...zl(!1).slice().sort((u, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((u) => {
        var h;
        return u.type === "strokeGroup" ? eo(Wo("paint", u.actionGroupId || u.id || "")) : u.type === "rasterObject" ? Qi(Yo(((h = u.item) == null ? void 0 : h.id) || u.id || "")) : u.item;
      }).filter(Boolean),
      ...t === "cutout" ? ic().filter((u) => Vn(u)) : []
    ];
    for (const u of s) {
      if (qt(u)) {
        const m = Yt(u);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const b of g) {
          const S = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!S.length) continue;
          if (b.closed && S.length >= 3 && Gr(i, S)) return { item: u, geom: m };
          const N = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let P = 0; P < S.length - 1; P += 1)
            if (tu(i, S[P], S[P + 1]) <= N * N) return { item: u, geom: m };
          if (S.length === 1 && mi(i, S[0]) <= N * N) return { item: u, geom: m };
        }
        continue;
      }
      if (mn(u)) {
        const m = Yt(u);
        if (!(m != null && m.visible)) continue;
        if (nd(u, m, i)) return { item: u, geom: m };
        continue;
      }
      const h = Yt(u);
      if (h.visible && Gr(i, h.corners))
        return { item: u, geom: h };
    }
    return null;
  }
  function mc(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (mt(l)) return Pu(i, s);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((g) => mi(g, s) <= 121);
      if (h >= 0) {
        const g = i.corners[h], b = g.x - i.center.x, S = g.y - i.center.y, N = b * S >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: N };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of m) {
        const b = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && b.length >= 3 && Gr(s, b)) return { kind: "move", cursor: "default" };
        const S = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let N = 0; N < b.length - 1; N += 1)
          if (tu(s, b[N], b[N + 1]) <= S * S) return { kind: "move", cursor: "default" };
      }
      return Gr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => mi(m, s) <= 121);
      if (h >= 0) {
        const m = i.corners[h], g = m.x - i.center.x, b = m.y - i.center.y, S = g * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: S };
      }
      return Gr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const h = i.edgeMidpoints.find((m) => mi(m, s) <= 169);
      if (h) {
        const m = h.edge === "left" || h.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: h.edge, mid: h };
      }
    }
    const u = i.corners.findIndex((h) => mi(h, s) <= 121);
    if (u >= 0) {
      const h = i.corners[u], m = h.x - i.center.x, g = h.y - i.center.y, b = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: u, cursor: b };
    }
    return mi(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Gr(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function Hd(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function f1(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function d1(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((h) => f1(i, h))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, u = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Gr({ x: l, y: u }, s.corners);
  }
  function bt(i) {
    if (i1(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? Fe("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" || p.interaction.kind === "roll_frame" ? Fe("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? Fe("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? Fe(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? Fe("grabbing") : Fe("default");
      return;
    }
    if ($d()) {
      Fe("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        Fe(y2);
        return;
      }
      if (p.primaryTool !== "cursor") {
        Fe("default");
        return;
      }
      Fe("grab");
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      Fe("default");
      return;
    }
    const s = kt(), l = s ? Yt(s) : null, u = s ? wn(s) : !1, h = u ? { kind: "none", cursor: "default" } : mc(l, i, s);
    if (!u && h.kind !== "none") {
      Fe(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && jd(i)) {
      Fe("default");
      return;
    }
    Fe(p.mode === "pano" ? "grab" : "default");
  }
  function Ye() {
    var S, N;
    if (!hr) return;
    if (p.mode === "frame") {
      C.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = kt(), s = ar();
    if (!i && s.length === 0 || p.interaction) {
      C.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Xa(), u = fM({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? Ya(s) : Yt(i),
      allLocked: Kl(s),
      anyLocked: s.some((P) => wn(P)),
      selectedLocked: wn(i),
      activeAspect: Ur(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: Jt,
      isStickerHidden: to,
      canRestoreSelectedToInitial: sy,
      iconSet: Me
    });
    if (!u.visible) {
      C.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (P, A, { requireFitsBelow: L = !0 } = {}) => {
      var xe, Ge, Ue;
      const ne = Number((xe = u.anchor) == null ? void 0 : xe.minX), Q = Number((Ge = u.anchor) == null ? void 0 : Ge.maxX), te = Number((Ue = u.anchor) == null ? void 0 : Ue.maxY);
      if (![ne, Q, te].every(Number.isFinite)) return null;
      const ie = Math.max(14, O.width - P - 14), he = Z((ne + Q) * 0.5 - P * 0.5, 14, ie), re = te + 18;
      return !Number.isFinite(he) || !Number.isFinite(re) || L && re + A > O.height - 14 ? null : { left: he, top: re };
    }, m = Math.max(1, Number(((S = p.menuSize) == null ? void 0 : S.w) || 220)), g = Math.max(1, Number(((N = p.menuSize) == null ? void 0 : N.h) || 40)), b = h(m, g, { requireFitsBelow: !1 });
    if (!b) {
      C.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    C.selectionMenu = {
      visible: !0,
      left: b.left,
      top: b.top,
      items: u.items
    }, requestAnimationFrame(() => {
      if (!hr || C.selectionMenu.visible !== !0) return;
      const P = hr.getBoundingClientRect(), A = Math.round(Number((P == null ? void 0 : P.width) || 0)) || 220, L = Math.round(Number((P == null ? void 0 : P.height) || 0)) || 40;
      p.menuSize = { w: A, h: L, measured: !0 };
      const U = h(A, L);
      if (!U) {
        C.selectionMenu.visible = !1;
        return;
      }
      C.selectionMenu.left = U.left, C.selectionMenu.top = U.top;
    });
  }
  function Ni() {
    je.timer && (clearTimeout(je.timer), je.timer = 0), je.target = null, C.tooltip.visible = !1;
  }
  function h1(i) {
    if (!nr || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    C.tooltip.text = s, C.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var Q, te;
      if (je.target !== l || !nr || !(l != null && l.isConnected)) return;
      const u = z.getBoundingClientRect(), h = l.getBoundingClientRect(), m = 8, g = 12, b = Math.round(Number(((Q = nr.getBoundingClientRect()) == null ? void 0 : Q.width) || 0)) || 100, S = Math.round(Number(((te = nr.getBoundingClientRect()) == null ? void 0 : te.height) || 0)) || 24, N = !!l.closest(".pano-floating-left"), P = !!l.closest(".pano-frame-rail"), A = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let L = "", U = h.left - u.left + h.width * 0.5 - b * 0.5, ne = h.top - u.top - S - g;
      if (N)
        L = "tool-rail", U = h.right - u.left + 10, ne = h.top - u.top + h.height * 0.5 - S * 0.5, U = Z(U, m, Math.max(m, u.width - b - m)), ne = Z(ne, m, Math.max(m, u.height - S - m));
      else if (P)
        L = "frame-rail", U = h.left - u.left - b - 10, ne = h.top - u.top + h.height * 0.5 - S * 0.5, U = Z(U, m, Math.max(m, u.width - b - m)), ne = Z(ne, m, Math.max(m, u.height - S - m));
      else if (A) {
        L = "footer";
        const ie = l.closest(".pano-paint-footer"), he = ie ? ie.getBoundingClientRect() : h;
        U = he.left - u.left + he.width * 0.5 - b * 0.5, ne = he.bottom - u.top + 5, U = Z(U, m, Math.max(m, u.width - b - m)), ne = Math.max(m, ne);
      }
      U = Z(U, m, Math.max(m, u.width - b - m)), ne = Math.max(m, ne), C.tooltip.left = U, C.tooltip.top = ne, C.tooltip.variant = L, C.tooltip.visible = !0;
    });
  }
  const cn = ff({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Gt(Number(i.yaw || 0)), p.viewPitch = Z(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = Z(Number(i.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = O.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || O.clientWidth || 0)),
        h: Math.max(1, Number(i.height || O.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = _.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = _.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: ci,
    onInteraction: () => {
      Ce.backgroundDirty = !0, Ce.dirty = !0;
    }
  });
  function p1(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += ig(s, i.lastAngle), i.lastAngle = s;
    const u = og(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = u, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = C.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    h && (h.value = u, h.displayValue = go(u), h.fillPct = (u + 180) / 360 * 100), Vr(), gc(i), de({ localOnly: !0 });
  }
  function m1(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const u = e0(i.rollGesture, s, l);
    if (!u) return;
    i.rollGesture = u.gesture, i.center = u.gesture.center, i.lastAngle = u.gesture.lastAngle, i.accumulatedRad = u.gesture.accumulatedRad, i.shot.roll_deg = u.rollDeg, i.changed = i.changed || Math.abs(u.gesture.accumulatedRad) > 1e-9;
    const h = (((m = C.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    h && (h.value = u.rollDeg, h.displayValue = go(u.rollDeg), h.fillPct = (u.rollDeg + 180) / 360 * 100), Vr(), gc(i), de({ localOnly: !0 });
  }
  const Gd = (i, s) => {
    const l = Mi(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function gc(i) {
    var g, b;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    je.timer && (clearTimeout(je.timer), je.timer = 0), je.target = null;
    const s = Zt(i.shot), l = (g = O.getBoundingClientRect) == null ? void 0 : g.call(O), u = (b = z.getBoundingClientRect) == null ? void 0 : b.call(z);
    if (!s || !l || !u || O.width <= 0 || O.height <= 0) return;
    const h = l.width / O.width, m = l.height / O.height;
    C.tooltip.text = `${go(i.shot.roll_deg)}°`, C.tooltip.left = l.left - u.left + (s.x + s.w * 0.5) * h, C.tooltip.top = l.top - u.top + (s.y + s.h * 0.5) * m + 12, C.tooltip.variant = "roll", C.tooltip.visible = !0;
  }
  Ke == null || Ke.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const s = He();
    if (!s || s.locked === !0) return;
    const l = Zt(s);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Gd(i, u);
    p.interaction = {
      kind: "roll_frame",
      shot: s,
      center: u,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = Ke.setPointerCapture) == null || m.call(Ke, i.pointerId), i.preventDefault(), Vr(), gc(p.interaction), de({ localOnly: !0 });
  }), Ke == null || Ke.addEventListener("pointermove", (i) => {
    var s;
    ((s = p.interaction) == null ? void 0 : s.kind) !== "roll_frame" || p.interaction.source !== "knob" || p1(
      p.interaction,
      Gd(i, p.interaction.center),
      i
    );
  });
  const g1 = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (ot(), lt(), ze()), p.interaction = null, Ni(), Rr(), Vr(), de());
  };
  Ke == null || Ke.addEventListener("pointerup", g1), Ke == null || Ke.addEventListener("pointercancel", () => sa()), Ke == null || Ke.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && sa();
  }), Ke == null || Ke.addEventListener("dblclick", (i) => {
    const s = p.mode === "frame" && !r ? He() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, ot(), lt(), ze(), Vr(), de(), i.preventDefault());
  }), O.onpointerdown = (i) => {
    Pe.selection && (Pe.selection = null, ki());
    const s = Mi(i);
    if (st = s, cs(s, !0), p.viewTween = null, cn.state.inertia.active = !1, cn.state.inertia.vx = 0, cn.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode === "frame") {
        const b = He();
        if (!b || r || b.locked === !0) return;
        p.interaction = {
          kind: "pan_frame",
          shot: b,
          last: s,
          start: {
            yaw_deg: Number(b.yaw_deg || 0),
            pitch_deg: Number(b.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const b = p.mode === "unwrap" ? s : ls(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, cn.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      bt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const b = He(), S = Zt(b);
      if (!b || b.locked === !0 || !S) return;
      const N = Qg({
        frame: S,
        point: s,
        startRollDeg: Number(b.roll_deg ?? b.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!N) return;
      p.interaction = {
        kind: "roll_frame",
        shot: b,
        center: N.center,
        lastAngle: N.lastAngle,
        accumulatedRad: N.accumulatedRad,
        rollGesture: N,
        start: { roll_deg: Number(b.roll_deg ?? b.rot_deg ?? 0) },
        changed: !1,
        altStarted: N.source === "alt",
        source: N.source
      }, O.setPointerCapture(i.pointerId), i.preventDefault(), Vr(), de({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      const b = He();
      if (!b || r || b.locked === !0) return;
      p.interaction = {
        kind: "pan_frame",
        shot: b,
        last: s,
        start: { yaw_deg: Number(b.yaw_deg || 0), pitch_deg: Number(b.pitch_deg || 0) },
        changed: !1
      }, bt(s), O.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (p.mode === "pano") {
        const b = ls(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, cn.startDrag(b.x, b.y, i.pointerId, performance.now()), bt(s), O.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (j && !j.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (Ld() || hc())) {
      gr();
      const b = p.primaryTool === "mask" ? "mask" : "paint", S = p.primaryTool === "mask" ? p.maskTool : p.paintTool, N = p.mode === "frame" && hc() ? He() : null, P = { kind: "ERP_GLOBAL" }, A = N ? cr(s, N, performance.now()) : lr(s, performance.now());
      if (!A) {
        bt(s);
        return;
      }
      p.interaction = {
        kind: S === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: yo("live"),
        stroke: S === "lasso_fill" ? zd(b, S, [A], P) : Vd(b, S, [A], P)
      }, no();
      const L = zn();
      if (L)
        if (p.paintEngine.beginStroke(p.interaction.stroke, L), p.interaction.kind === "paint_stroke") {
          const U = p.paintEngine.ensureTarget(L), ne = Number((A == null ? void 0 : A.u) ?? (A == null ? void 0 : A.x) ?? 0), Q = Number((A == null ? void 0 : A.v) ?? (A == null ? void 0 : A.y) ?? 0);
          p.paintEngine.appendStrokePoint(U, ne, Q, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, L);
      bt(s), O.setPointerCapture(i.pointerId), de();
      return;
    }
    const l = ar(), u = kt(), h = l.length > 1 ? Ya(l) : u ? Yt(u) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: s, current: s }, bt(s), O.setPointerCapture(i.pointerId), de({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (h != null && h.visible)) {
      if ((l.some((S) => wn(S)) ? { kind: "none" } : mc(h, s)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: l.map((S) => S),
          offset: { x: s.x - h.center.x, y: s.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: l.filter((S) => mt(S)).map((S) => ({
            id: String(S.id || ""),
            yaw_deg: Number(Wt(S).yaw_deg || 0),
            pitch_deg: Number(Wt(S).pitch_deg || 0),
            center: (() => {
              var P, A;
              const N = Yt(S);
              return N != null && N.visible ? { x: Number(((P = N.center) == null ? void 0 : P.x) || 0), y: Number(((A = N.center) == null ? void 0 : A.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: l.filter((S) => qt(S)).map((S) => ({
            id: String(S.actionGroupId || S.id || ""),
            layerKind: String(S.layerKind || "paint"),
            snapshot: yn(or(S.actionGroupId, S.layerKind)),
            frameSnapshot: yn(oi(S.actionGroupId, S.layerKind)),
            center: (() => {
              var P, A;
              const N = Yt(S);
              return N != null && N.visible ? { x: Number(((P = N.center) == null ? void 0 : P.x) || 0), y: Number(((A = N.center) == null ? void 0 : A.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Gl(S.actionGroupId, S.layerKind)
          })),
          rasterSnapshots: l.filter((S) => mn(S)).map((S) => ({
            id: nn(S.rasterObjectId || S.id || ""),
            snapshot: yn(In().find((N) => String((N == null ? void 0 : N.id) || "") === nn(S.rasterObjectId || S.id || ""))),
            center: (() => {
              var P, A;
              const N = Yt(S);
              return N != null && N.visible ? { x: Number(((P = N.center) == null ? void 0 : P.x) || 0), y: Number(((A = N.center) == null ? void 0 : A.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: ld(S)
          }))
        }, bt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    } else if (u && (h != null && h.visible)) {
      const b = wn(u) ? { kind: "none" } : mc(h, s, u);
      if (b.kind === "scale") {
        p.interaction = qt(u) ? {
          kind: "scale_stroke_group",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: yn(or(u.actionGroupId, u.layerKind)),
          frameSnapshot: yn(oi(u.actionGroupId, u.layerKind)),
          cursor: b.cursor
        } : mn(u) ? {
          kind: "scale_raster_object",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: yn(In().find((S) => String((S == null ? void 0 : S.id) || "") === nn(u.rasterObjectId || u.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(Wt(u).hFOV_deg || 20),
          startVFOV: Number(Wt(u).vFOV_deg || 20),
          cursor: b.cursor
        }, bt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        p.interaction = {
          kind: b.kind,
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(Wt(u).hFOV_deg || 20),
          startVFOV: Number(Wt(u).vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, bt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        p.interaction = qt(u) ? {
          kind: "rotate_stroke_group",
          item: u,
          center: h.center,
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x),
          snapshot: yn(or(u.actionGroupId, u.layerKind)),
          frameSnapshot: yn(oi(u.actionGroupId, u.layerKind))
        } : {
          kind: "rotate",
          item: u,
          center: h.center,
          startRot: Number(Wt(u).rot_deg || Wt(u).roll_deg || 0),
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x)
        }, bt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (qt(u)) {
          const S = p.mode === "frame" ? (() => {
            const N = He();
            return N ? cr(s, N, performance.now()) : null;
          })() : lr(s, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: u,
            startUv: S,
            snapshot: yn(or(u.actionGroupId, u.layerKind)),
            frameSnapshot: yn(oi(u.actionGroupId, u.layerKind))
          }, bt(s), O.setPointerCapture(i.pointerId);
          return;
        }
        if (mn(u)) {
          const S = p.mode === "frame" ? (() => {
            const N = He();
            return N ? cr(s, N, performance.now()) : null;
          })() : lr(s, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: u,
            startUv: S,
            snapshot: yn(In().find((N) => String((N == null ? void 0 : N.id) || "") === nn(u.rasterObjectId || u.id || "")))
          }, bt(s), O.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: u,
          offset: { x: s.x - h.center.x, y: s.y - h.center.y }
        }, bt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = jd(s);
    if (m) {
      const b = p.selectedId !== m.item.id;
      if (b && p.selectedId && (ot(), En()), mr(m.item), t === "cutout" && b && (p.cutoutAspectOpen = !1), b && ze(), Ye(), de(), wn(m.item)) {
        bt(s);
        return;
      }
      p.interaction = {
        kind: qt(m.item) ? "move_stroke_group" : mn(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: s.x - m.geom.center.x, y: s.y - m.geom.center.y },
        startUv: qt(m.item) || mn(m.item) ? p.mode === "frame" ? (() => {
          const S = He();
          return S ? cr(s, S, performance.now()) : null;
        })() : lr(s, performance.now()) : null,
        snapshot: qt(m.item) ? yn(or(m.item.actionGroupId, m.item.layerKind)) : mn(m.item) ? yn(In().find((S) => String((S == null ? void 0 : S.id) || "") === nn(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: qt(m.item) ? yn(oi(m.item.actionGroupId, m.item.layerKind)) : null
      }, bt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    const g = !!p.selectedId;
    if (g && (ot(), En()), qo(), g && ze(), Ye(), de(), p.mode === "pano") {
      const b = ls(i);
      p.interaction = { kind: "view", last: b, lastTs: performance.now() }, cn.startDrag(b.x, b.y, i.pointerId, performance.now()), bt(s), O.setPointerCapture(i.pointerId);
    }
  };
  function y1(i, s) {
    if (!k || !Rt.playing) return;
    if (Rt.stop(), i.kind === "move_multi") {
      const h = Ya(i.items);
      if (!(h != null && h.visible)) return;
      i.offset = { x: s.x - h.center.x, y: s.y - h.center.y }, i.startCenter = { x: h.center.x, y: h.center.y };
      for (const m of i.stickerSnapshots) {
        const g = i.items.find((S) => String((S == null ? void 0 : S.id) || "") === m.id), b = g ? Yt(g) : null;
        b != null && b.visible && (m.yaw_deg = Number(Wt(g).yaw_deg || 0), m.pitch_deg = Number(Wt(g).pitch_deg || 0), m.center = { x: b.center.x, y: b.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const l = Yt(i.item);
    if (!(l != null && l.visible)) return;
    const u = Wt(i.item);
    if (i.kind === "move") {
      i.offset = { x: s.x - l.center.x, y: s.y - l.center.y };
      return;
    }
    if (i.center = l.center, i.kind === "rotate") {
      i.startRot = Number(u.rot_deg || u.roll_deg || 0), i.startAng = Math.atan2(s.y - l.center.y, s.x - l.center.x);
      return;
    }
    i.startDist = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)), i.startHFOV = Number(u.hFOV_deg || 20), i.startVFOV = Number(u.vFOV_deg || 20);
  }
  O.onpointermove = (i) => {
    var u, h, m, g, b, S, N, P, A, L, U, ne, Q, te, ie, he, re, xe, Ge, Ue, nt, ye;
    const s = Mi(i);
    if (cs(s, !0), !p.interaction) {
      bt(s);
      return;
    }
    bt(s);
    const l = p.interaction;
    if (st && (s.x !== st.x || s.y !== st.y)) {
      const oe = st;
      st = null, l.kind !== "view" && l.kind !== "marquee_select" && y1(l, oe);
    }
    if (l.kind === "paint_stroke") {
      const oe = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let pe = !1;
      oe.forEach((be) => {
        const Oe = Mi(be);
        if (p.mode === "frame") {
          const Be = He(), Ie = Be ? Zt(Be) : null;
          if (Ie) {
            const ut = (Oe.x - Ie.x) / Math.max(1, Ie.w), qe = (Oe.y - Ie.y) / Math.max(1, Ie.h);
            if (!(ut >= 0 && ut <= 1 && qe >= 0 && qe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, c1(l));
          }
        }
        a1(l, Oe, performance.now()) && (pe = !0);
      }), pe && de({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const oe = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let pe = !1;
      if (oe.forEach((be) => {
        const Oe = Mi(be);
        if (p.mode === "frame") {
          const Be = He(), Ie = Be ? Zt(Be) : null;
          if (Ie) {
            const ut = (Oe.x - Ie.x) / Math.max(1, Ie.w), qe = (Oe.y - Ie.y) / Math.max(1, Ie.h);
            if (!(ut >= 0 && ut <= 1 && qe >= 0 && qe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, u1(l));
          }
        }
        s1(l, Oe, performance.now()) && (pe = !0);
      }), pe) {
        const be = zn();
        be && p.paintEngine.updateActiveStroke(l.stroke, be), de({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const oe = performance.now(), pe = p.mode === "unwrap" ? s : ls(i);
      cn.moveDrag(pe.x, pe.y, p.mode === "unwrap" ? "unwrap" : "pano", oe), l.lastTs = oe, l.last = pe, de({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const oe = dc(l.shot);
      if (!oe || !l.shot) return;
      const pe = s.x - l.last.x, be = s.y - l.last.y, Oe = t0(l.shot, {
        dx: pe,
        dy: be,
        focalPx: oe.focalPx,
        invertX: ((u = _.ui_settings) == null ? void 0 : u.invert_view_x) === !0,
        invertY: ((h = _.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      l.shot.yaw_deg = Oe.yaw_deg, l.shot.pitch_deg = Oe.pitch_deg, l.changed = l.changed || Math.abs(pe) > 0 || Math.abs(be) > 0, l.last = s, de({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      m1(l, s, i);
      return;
    }
    if (l.kind === "move") {
      const oe = s.x - l.offset.x, pe = s.y - l.offset.y;
      if (p.mode === "frame" && t === "cutout") {
        const be = He(), Oe = Zt(be);
        if (!be || !Oe) return;
        const Be = {
          x: Z((oe - Oe.x) / Math.max(1, Oe.w), 0, 1),
          y: Z((pe - Oe.y) / Math.max(1, Oe.h), 0, 1)
        }, Ie = oc(be, Be);
        if (!Ie) return;
        const ut = As(Ie);
        ir(l.item, { yaw_deg: ut.yaw, pitch_deg: ut.pitch });
      } else if (p.mode === "unwrap") {
        const be = ci(), Oe = Z((oe - be.x) / Math.max(be.w, 1), 0, 1), Be = Z((pe - be.y) / Math.max(be.h, 1), 0, 1);
        ir(l.item, { yaw_deg: Gt(Oe * 360 - 180), pitch_deg: Z(90 - Be * 180, -90, 90) });
      } else {
        const be = Zl(oe, pe), Oe = As(be);
        ir(l.item, { yaw_deg: Oe.yaw, pitch_deg: Oe.pitch });
      }
      mt(l.item) && Ht(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const oe = p.mode === "frame" ? (() => {
        const Oe = He();
        return Oe ? cr(s, Oe, performance.now()) : null;
      })() : lr(s, performance.now());
      if (!oe || !l.startUv) return;
      const pe = Un(Number(oe.u || 0), Number(l.startUv.u || 0)), be = Number(oe.v || 0) - Number(l.startUv.v || 0);
      Rf((m = l.item) == null ? void 0 : m.actionGroupId, pe, be, l.snapshot, (g = l.item) == null ? void 0 : g.layerKind, l.frameSnapshot) && (sr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const oe = p.mode === "frame" ? (() => {
        const Oe = He();
        return Oe ? cr(s, Oe, performance.now()) : null;
      })() : lr(s, performance.now());
      if (!oe || !l.startUv) return;
      const pe = Un(Number(oe.u || 0), Number(l.startUv.u || 0)), be = Number(oe.v || 0) - Number(l.startUv.v || 0);
      Vf(((b = l.item) == null ? void 0 : b.rasterObjectId) || ((S = l.item) == null ? void 0 : S.id) || "", pe, be, l.snapshot) && (oo(), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      q0(((N = l.item) == null ? void 0 : N.rasterObjectId) || ((P = l.item) == null ? void 0 : P.id) || "", pe, l.snapshot) && (oo(), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const oe = s.x - Number(((A = l.offset) == null ? void 0 : A.x) || 0), pe = s.y - Number(((L = l.offset) == null ? void 0 : L.y) || 0);
      let be = !1, Oe = !1, Be = !1;
      const Ie = oe - Number(((U = l.startCenter) == null ? void 0 : U.x) || oe), ut = pe - Number(((ne = l.startCenter) == null ? void 0 : ne.y) || pe);
      for (const qe of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const Et = (t === "cutout" ? Hl() : hn()).find((Mt) => String((Mt == null ? void 0 : Mt.id) || "") === String(qe.id || ""));
        if (!Et || !mt(Et)) continue;
        const un = {
          x: Number(((Q = qe.center) == null ? void 0 : Q.x) || 0) + Ie,
          y: Number(((te = qe.center) == null ? void 0 : te.y) || 0) + ut
        };
        if (p.mode === "frame" && t === "cutout") {
          const Mt = He(), Ft = Zt(Mt);
          if (!Mt || !Ft) continue;
          const Pi = {
            x: Z((un.x - Ft.x) / Math.max(1, Ft.w), 0, 1),
            y: Z((un.y - Ft.y) / Math.max(1, Ft.h), 0, 1)
          }, ch = oc(Mt, Pi);
          if (!ch) continue;
          const uh = As(ch);
          ir(Et, { yaw_deg: uh.yaw, pitch_deg: uh.pitch });
        } else if (p.mode === "unwrap") {
          const Mt = ci(), Ft = Z((un.x - Mt.x) / Math.max(Mt.w, 1), 0, 1), Pi = Z((un.y - Mt.y) / Math.max(Mt.h, 1), 0, 1);
          ir(Et, { yaw_deg: Gt(Ft * 360 - 180), pitch_deg: Z(90 - Pi * 180, -90, 90) });
        } else {
          const Mt = Zl(un.x, un.y), Ft = As(Mt);
          ir(Et, { yaw_deg: Ft.yaw, pitch_deg: Ft.pitch });
        }
        be = !0;
      }
      for (const qe of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const Et = {
          x: Number(((ie = qe.center) == null ? void 0 : ie.x) || 0) + Ie,
          y: Number(((he = qe.center) == null ? void 0 : he.y) || 0) + ut
        }, un = p.mode === "frame" ? (() => {
          const Ft = He();
          return Ft ? cr(Et, Ft, performance.now()) : null;
        })() : lr(Et, performance.now()), Mt = qe.centerUv || null;
        if (un && Mt) {
          const Ft = Un(Number(un.u || 0), Number(Mt.u || 0)), Pi = Number(un.v || 0) - Number(Mt.v || 0);
          Rf(qe.id, Ft, Pi, qe.snapshot, qe.layerKind, qe.frameSnapshot) && (be = !0, Oe = !0);
        }
      }
      for (const qe of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const Et = {
          x: Number(((re = qe.center) == null ? void 0 : re.x) || 0) + Ie,
          y: Number(((xe = qe.center) == null ? void 0 : xe.y) || 0) + ut
        }, un = p.mode === "frame" ? (() => {
          const Ft = He();
          return Ft ? cr(Et, Ft, performance.now()) : null;
        })() : lr(Et, performance.now()), Mt = qe.centerUv || null;
        if (un && Mt) {
          const Ft = Un(Number(un.u || 0), Number(Mt.u || 0)), Pi = Number(un.v || 0) - Number(Mt.v || 0);
          Vf(qe.id, Ft, Pi, qe.snapshot) && (be = !0, Be = !0);
        }
      }
      be && (Oe ? sr({ rebuildPaintEngine: !1 }) : Be ? oo() : Ht(), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      $f((Ge = l.item) == null ? void 0 : Ge.actionGroupId, pe, 0, l.snapshot, (Ue = l.item) == null ? void 0 : Ue.layerKind, l.frameSnapshot) && (sr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let oe = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * Vi;
      i.shiftKey && (oe = Math.round(oe / 45) * 45), $f((nt = l.item) == null ? void 0 : nt.actionGroupId, 1, oe, l.snapshot, (ye = l.item) == null ? void 0 : ye.layerKind, l.frameSnapshot) && (sr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = s, de({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      ir(l.item, { hFOV_deg: Z(l.startHFOV * pe, 1, 179), vFOV_deg: Z(l.startVFOV * pe, 1, 179) }), rr(l.item) || (l.item.aspect_id = Ri(l.item)), mt(l.item) && Ht(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      ir(l.item, { hFOV_deg: Z(l.startHFOV * pe, 1, 179) }), rr(l.item) || (l.item.aspect_id = Ri(l.item)), mt(l.item) && Ht(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      ir(l.item, { vFOV_deg: Z(l.startVFOV * pe, 1, 179) }), rr(l.item) || (l.item.aspect_id = Ri(l.item)), mt(l.item) && Ht(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let pe = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * Vi, be = l.startRot - pe;
      i.shiftKey && (be = Math.round(be / 45) * 45), ir(l.item, { [mt(l.item) ? "rot_deg" : "roll_deg"]: be }), mt(l.item) && Ht(), de({ localOnly: !0 });
    }
  }, O.onpointerup = () => {
    var s, l, u, h, m, g, b, S;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        no();
        const N = pc(p.interaction), P = !!p.interaction._hasCommittedSegments;
        if (N || P) {
          sr();
          const A = String(((u = p.interaction.stroke) == null ? void 0 : u.actionGroupId) || "").trim();
          if (A) {
            const U = pn().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === A);
            U && (U.frame = null);
          }
          const L = zn();
          L && (N ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(L), yd()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, L) : p.paintEngine.cancelActiveStroke(L)), ot(), En(), ze(), Ye(), e.setDirtyCanvas(!0, !0), de();
        } else {
          const A = zn();
          A && p.paintEngine.cancelActiveStroke(A);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const N = Hd(p.interaction.start, p.interaction.current), A = [
          ...t === "cutout" ? ic().filter((L) => !Vn(L)) : [...hn()],
          ...U0(),
          ...W0()
        ].filter((L) => d1(N, Yt(L)));
        Q0(A, ((g = A[A.length - 1]) == null ? void 0 : g.id) || null), t === "cutout" && A.length && (p.cutoutAspectOpen = !1), ze(), Ye(), de();
      } else if (((b = p.interaction) == null ? void 0 : b.kind) === "pan_frame" || ((S = p.interaction) == null ? void 0 : S.kind) === "roll_frame")
        p.interaction.changed && (ot(), lt(), ze());
      else if (p.interaction && p.interaction.kind !== "view") {
        let N = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (N = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (N = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (N = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (N = !0), N && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? sr({ rebuildPaintEngine: !0 }) : oo()), ot(), En(), e.setDirtyCanvas(!0, !0), ao(), Ye(), de();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Ni(), no(), i && i.kind === "view" && cn.endDrag(performance.now()), Rr(), Ye(), bt(p.pointerPos), de();
    }
  }, O.onpointercancel = () => {
    var i, s, l;
    if (!sa()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && cn.endDrag(performance.now()), ((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        no();
        const u = zn();
        u && p.paintEngine.cancelActiveStroke(u);
      }
      p.interaction = null, no(), Rr(), bt(p.pointerPos), de({ localOnly: !0 });
    }
  }, O.onlostpointercapture = () => {
    sa();
  }, O.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, O.onmousemove = (i) => {
    const s = Mi(i), l = cs(s, !0);
    p.interaction || (bt(s), l && p.mode === "frame" && p.primaryTool === "cursor" && de({ localOnly: !0 }));
  }, O.onmouseleave = () => {
    cs(p.pointerPos, !1), bt(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && de({ localOnly: !0 });
  }, O.onwheel = (i) => {
    if (p.mode === "frame") {
      const s = Mi(i), l = uf(i);
      l && e1(s, l) && de({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (cn.applyWheelEvent(i) && de({ localOnly: !0 }), i.preventDefault());
  }, O.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), pr(!0));
  }, O.ondrop = (i) => {
    var u;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Le.depth = 0, pr(!1);
    const l = Array.from(((u = i.dataTransfer) == null ? void 0 : u.files) || []).find((h) => Ar(h));
    l && Cd(l);
  };
  const Kd = (i) => {
    t !== "stickers" && t !== "cutout" || r || $n(i) && (Le.depth += 1, pr(!0), i.preventDefault());
  }, Bd = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Le.active && $n(i) && pr(!0), Le.active && i.preventDefault());
  }, Ud = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Le.active) return;
    Le.depth = Math.max(0, Le.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Le.depth === 0 || s) && pr(!1);
  }, Wd = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Le.depth = 0, pr(!1), $n(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Kd, !0), window.addEventListener("dragover", Bd, !0), window.addEventListener("dragleave", Ud, !0), window.addEventListener("drop", Wd, !0);
  function yc() {
    const { canUndo: i, canRedo: s } = Pd();
    mo(C.toolButtons, "value", "undo", { disabled: !i }), mo(C.toolButtons, "value", "redo", { disabled: !s });
  }
  const Yd = (i, s, l = !1) => {
    var N;
    gr();
    const u = t === "cutout" && p.mode === "frame" ? He() : null, h = u || kt(), m = u ? "shot" : Xa(), g = k && p.inspectCamera;
    if (!g && (!h || m === "stroke" || wn(h))) return;
    const b = (((N = C.sidePanel) == null ? void 0 : N.params) || []).find((P) => P.key === i);
    if (!b || b.enabled === !1) return;
    let S = Number(s);
    if (Number.isNaN(S) && (S = 0), S = Z(S, Number(b.min), Number(b.max)), i === "yaw_deg" && (S = Gt(S)), g) {
      xw(_.camera, p.frame, i, S), ze(), l && ot();
      return;
    }
    i === "opacity" ? ww(h, p.frame, S / 100) : ir(h, { [i]: S }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = Ri(h)), ze(), de(), l && ot();
  };
  Ve == null || Ve.addEventListener("click", async (i) => {
    var u, h, m, g, b, S, N;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const P = Hn(s.getAttribute("data-coverage"));
      if (P === Hn(_.coverage)) return;
      _.coverage = P, p.coverage = P, d && (d.value = String(P)), a ? Ce.backgroundDirty = !0 : (En(), Zb({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), Ye(), de();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((h = (u = C.sidePanel) == null ? void 0 : u.selectionPicker) != null && h.disabled) return;
      C.sidePanel.selectionPicker.open = !C.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      C.sidePanel.selectionPicker.open = !1;
      const P = String(s.getAttribute("data-selection-id") || "");
      let A = null;
      if (P && (t === "stickers" ? A = hn().find((L) => String((L == null ? void 0 : L.id) || "") === P) || null : A = ((m = jf().find((L) => {
        var U;
        return String(((U = L == null ? void 0 : L.item) == null ? void 0 : U.id) || "") === P;
      })) == null ? void 0 : m.item) || null), mr(A || null), A && !qt(A)) {
        const L = Wt(A);
        Si(
          Gt(Number(L.yaw_deg || 0)),
          Z(Number(L.pitch_deg || 0), -89.9, 89.9),
          p.viewFov
        );
      }
      ze(), Ye(), de();
      return;
    }
    if (l === "copy-state-inline") {
      const P = kt(), A = Xa();
      if (!P || A === "stroke" || ar().length > 1) return;
      const L = JSON.stringify(t === "cutout" && A !== "image" ? qf(P) : dy(Wt(P)));
      try {
        await navigator.clipboard.writeText(L), (g = C.sidePanel) != null && g.copyStateButton && (C.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var U;
          (U = C.sidePanel) != null && U.copyStateButton && (C.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const P = String(s.getAttribute("data-visibility") || "");
      P === "panorama" ? p.showPanorama = !p.showPanorama : P === "objects" ? p.showObjects = !p.showObjects : P === "mask" && (p.showMask = !p.showMask), ze(), de();
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", fc(), ze(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), de();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", fc(), ze(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0), de();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, fc(), ze(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), de();
      return;
    }
    if (l === "close-preview") {
      uo();
      return;
    }
    if (l === "cancel-close") {
      uo();
      return;
    }
    l === "save-close" && (qb(), uo());
  }), Ve == null || Ve.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Yd(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), Ve == null || Ve.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Yd(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const bc = () => Zf();
  bc(), T.addEventListener("click", (i) => {
    var b, S, N, P;
    if ((S = (b = i.target) == null ? void 0 : b.matches) != null && S.call(b, "[data-confirm-overlay]")) {
      const A = (N = C.confirmDialog) == null ? void 0 : N.resolve;
      C.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, A == null || A(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const A = p.mode;
      p.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (A !== "frame" && (Ce.frameSafeRect = null), ze(), Ye()), ss(), Rr(), de();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const A = String(l.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = A, (A === "paint" || A === "mask") && qo({ preservePanelValues: !0 }), On(), ze(), Ye(), de();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const A = String(l.getAttribute("data-tool-ui-action") || "");
        if ((A === "undo" || A === "redo") && l.disabled) return;
        A === "undo" ? sc(-1) : A === "redo" ? sc(1) : A === "clear" ? Kb() : A === "add" || A === "add-image" ? Tb() : A === "add-or-look" && jb();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const A = String(l.getAttribute("data-paint-tool") || "pen");
        p.paintTool = A, qo({ preservePanelValues: !0 }), Fn[A] && (p.activeBrushPresetId = A), On(), ze(), Ye(), de();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), qo({ preservePanelValues: !0 }), On(), ze(), Ye(), de();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const A = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Bb(A);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const A = Ws.find((L) => L.id === l.getAttribute("data-paint-color-swatch"));
        if (!A) return;
        p.paintColor = jn(A.color), ge(!0), On();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), j && !j.hidden ? ge(!0) : Re(), On();
        return;
      }
    }
    const u = String(((P = l == null ? void 0 : l.getAttribute) == null ? void 0 : P.call(l, "data-action")) || "");
    if (u === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(K instanceof HTMLVideoElement)) return;
      tt.resumeAfterScrub = !1, cc();
      return;
    }
    if (u === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), Uf(), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (u === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(K instanceof HTMLVideoElement)) return;
      const A = !C.videoTransport.loop;
      C.videoTransport.loop = A, K.loop = A, ai({
        hasAudio: C.videoTransport.hasAudio,
        loop: A,
        muted: K.muted,
        volume: Number(K.volume ?? C.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (u === "frame-aspect") {
        C.frameRail.aspectOpen = !C.frameRail.aspectOpen;
        return;
      }
      if (u === "frame-aspect-set") {
        const A = p.mode === "frame" ? He() : null;
        if (!A || A.locked === !0) return;
        Ed(A, String(l.getAttribute("data-aspect") || "1:1")), C.frameRail.aspectOpen = !1, ao(), ot(), lt(), Rr(), de();
        return;
      }
      if (u === "frame-aspect-custom") {
        const A = p.mode === "frame" ? He() : null, L = l.getAttribute("data-custom-width"), U = l.getAttribute("data-custom-height");
        if (!A || !Wb(A, L, U)) return;
        C.frameRail.aspectOpen = !1, ao(), ot(), lt(), Rr(), de();
        return;
      }
      if (u === "frame-rotate-90") {
        const A = p.mode === "frame" ? He() : null;
        if (!A || A.locked === !0) return;
        Fd(A), C.frameRail.aspectOpen = !1, ao(), ot(), lt(), Rr(), de();
        return;
      }
      if (u === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Ye(), de();
        return;
      }
      if (u === "aspect-set") {
        const A = kt();
        if (!A) return;
        const L = String(l.getAttribute("data-aspect") || "1:1");
        Ed(A, L), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, ao(), ot(), lt(), Ye(), de();
        return;
      }
      if (u === "rotate-90") {
        const A = kt();
        if (!A) return;
        Fd(A), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, ao(), ot(), lt(), Ye(), de();
        return;
      }
      if (u === "bring-front") {
        Yb();
        return;
      }
      if (u === "send-back") {
        Xb();
        return;
      }
      if (u === "duplicate") {
        Ub();
        return;
      }
      if (u === "replace-image") {
        $b();
        return;
      }
      if (u === "toggle-lock") {
        Z0();
        return;
      }
      if (u === "back-initial") {
        oy();
        return;
      }
      if (u === "toggle-visible") {
        iy();
        return;
      }
      if (u === "delete") {
        Od();
        return;
      }
    }
    if (u === "reset-view") {
      if (p.mode === "frame") return;
      Si(0, 0, 100, 180, 680);
      return;
    }
    if (u === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, z2(e == null ? void 0 : e.id, p.showGrid), bc(), de();
      return;
    }
    if (u === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), _1();
      return;
    }
    if (u === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const A = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = A, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = A ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), Qd(), de();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), g = p.customPaintHistory[m];
    g && (p.customPaintColor = jn(g), p.paintColor = jn(g), On());
  }), T.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(K instanceof HTMLVideoElement)) return;
      Rt.playing && (tt.resumeAfterScrub = !0), Rt.seek(pi(Number(s.value || 0), Ja()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(K instanceof HTMLVideoElement)) return;
      const m = Z(Number(l.value || 0), 0, 1);
      K.volume = m, K.muted = m <= 1e-4, ai({
        hasAudio: C.videoTransport.hasAudio,
        muted: K.muted,
        volume: m
      });
      return;
    }
    const u = i.target.closest("[data-paint-size-slider]");
    if (u) {
      if (u.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(u.value)))), g = di(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[g] = m, On(), o1();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: Z(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = jn(m), p.paintColor = jn(m), On();
    }
  }), T.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(K instanceof HTMLVideoElement)) return;
      tt.resumeAfterScrub && Rt.play(), tt.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && us();
  }), T.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && us();
  }), T.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && us();
  }), T.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && us();
  }), T.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !T.contains(s) || je.target !== s && (je.target = s, je.timer && clearTimeout(je.timer), je.timer = window.setTimeout(() => {
      je.target === s && h1(s);
    }, 220));
  }), T.addEventListener("pointerout", (i) => {
    var u, h;
    const s = i.target.closest("[data-tip]");
    !s || je.target !== s || (i.relatedTarget instanceof Element ? (h = (u = i.relatedTarget).closest) == null ? void 0 : h.call(u, "[data-tip]") : null) === s || Ni();
  }), T.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Ni();
  });
  const b1 = (i, s) => {
    var b;
    if (!ee) return;
    const l = ee.getBoundingClientRect(), u = Z((i - l.left) / Math.max(1, l.width), 0, 1), h = 1 - Z((s - l.top) / Math.max(1, l.height), 0, 1), m = ru(p.customPaintColor), g = { ...nu(m.h, u, h), a: Number(((b = p.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    p.customPaintColor = jn(g), p.paintColor = jn(g), On();
  }, v1 = (i) => {
    var m;
    if (!ue) return;
    const s = ue.getBoundingClientRect(), l = Z((i - s.left) / Math.max(1, s.width), 0, 1), u = ru(p.customPaintColor), h = { ...nu(l, u.s, u.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = jn(h), p.paintColor = jn(h), On();
  }, Xd = (i, s) => {
    const l = i.pointerId;
    s(i);
    const u = (m) => {
      m.pointerId === l && s(m);
    }, h = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", u), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  ee && (ee.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Xd(i, (s) => b1(s.clientX, s.clientY));
  }), ue && (ue.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Xd(i, (s) => v1(s.clientX));
  }), T.addEventListener("click", (i) => {
    var h;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", u = (h = C.confirmDialog) == null ? void 0 : h.resolve;
    C.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, u == null || u(l);
  });
  const qd = () => {
    const i = !!p.fullscreen;
    mo(C.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Me.fullscreen_close : Me.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, fs = (i) => {
    const s = !!i;
    p.fullscreen !== s && (p.fullscreen = s, T.classList.toggle("pano-modal-fullscreen", s), s ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), bc(), qd(), ii(), de());
  }, Jd = () => document.fullscreenElement === we, _1 = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        fs(!p.fullscreen);
        return;
      }
      Jd() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = we.requestFullscreen) == null ? void 0 : i.call(we));
    } catch {
      fs(!p.fullscreen);
    }
  }, Zd = () => {
    document.fullscreenEnabled && fs(Jd());
  };
  document.addEventListener("fullscreenchange", Zd), qd();
  const Qd = () => {
    const i = !!p.outputPreviewExpanded;
    C.outputPreviewToggle.icon = i ? Me.fullscreen_close : Me.fullscreen, C.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", C.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Qd();
  const vc = e.onConnectionsChange;
  let _c = null, eh = () => {
  };
  !r && t === "stickers" && (eh = x0(e, (i = "sync") => {
    i === "executed" && (N2(Xe, Ms), si()), Jf(i);
  }, { editor: !0 }), _c = function(...s) {
    typeof vc == "function" && vc.apply(this, s), si(), Jr(this, "connections");
  }, e.onConnectionsChange = _c), r || Bp.set(String(e.id ?? "0"), () => id());
  let co = null;
  const uo = async () => co || (co = (async () => {
    var i, s, l, u, h, m, g, b;
    return Bp.delete(String(e.id ?? "0")), t1(), r || En(), document.fullscreenElement === we && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", Zd), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Dd && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (h = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || h.call(u, !0, !0), (b = (g = (m = Cr) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || b.call(g, !0, !0), Ni(), Ab(), K instanceof HTMLVideoElement && K.pause(), Lt.forEach((S) => {
      try {
        S();
      } catch {
      }
    }), Bn.dispose(), pr(!1), window.removeEventListener("keydown", th, !0), window.removeEventListener("keydown", nh, !0), window.removeEventListener("keydown", ih, !0), window.removeEventListener("keyup", oh, !0), window.removeEventListener("keydown", ds, !0), window.removeEventListener("keyup", ds, !0), window.removeEventListener("blur", ah), window.removeEventListener("keydown", sh, !0), window.removeEventListener("dragenter", Kd, !0), window.removeEventListener("dragover", Bd, !0), window.removeEventListener("dragleave", Ud, !0), window.removeEventListener("drop", Wd, !0), !r && t === "stickers" && (e.onConnectionsChange === _c && (e.onConnectionsChange = vc), eh()), Y.unmount(), V.remove(), Jb(), co = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), co = null, !1)), co), th = (i) => {
    var s, l, u, h, m;
    if (i.key === "Escape") {
      if (sa()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === we) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (u = document.exitFullscreen) == null || u.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), fs(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), uo();
    }
  }, nh = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), u = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || u === 46) && !(s === "Backspace" || l === "Backspace" || u === 8)) return;
    const g = i.target, b = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (b === "INPUT" || b === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (Pe.selection) {
      Eb(), i.preventDefault(), i.stopPropagation();
      return;
    }
    kt() && (Od(), i.preventDefault(), i.stopPropagation());
  }, rh = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !k || !C.timeline.visible || C.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !we.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !h2.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, ih = (i) => {
    rh(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || cc());
  }, oh = (i) => {
    rh(i) && (i.preventDefault(), i.stopPropagation());
  }, ds = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    p.marqueeModifier === s && p.altModifier === l || (p.marqueeModifier = s, p.altModifier = l, Vr(), bt(p.pointerPos));
  }, ah = () => {
    p.marqueeModifier = !1, p.altModifier = !1, Vr(), bt(p.pointerPos);
  }, sh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const u = i.target, h = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || u != null && u.isContentEditable) return;
    const { canUndo: m, canRedo: g } = Pd();
    i.shiftKey && !g || !i.shiftKey && !m || (sc(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", th, !0), window.addEventListener("keydown", nh, !0), window.addEventListener("keydown", ih, !0), window.addEventListener("keyup", oh, !0), window.addEventListener("keydown", ds, !0), window.addEventListener("keyup", ds, !0), window.addEventListener("blur", ah), window.addEventListener("keydown", sh, !0), we.addEventListener("pointerdown", (i) => {
    i.target === we && uo();
  });
  function yr(i, s, { rollbackState: l = !1 } = {}) {
    let u = "";
    try {
      l && (u = JSON.stringify(_)), s();
    } catch (h) {
      if (u)
        try {
          const m = JSON.parse(u);
          Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, m), r || En();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      C.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, h);
    }
  }
  yr("cutout-focus", yy), !r && t === "stickers" && yr("external-sticker-sync", () => Jf("open"), { rollbackState: !0 }), Vb().catch((i) => {
    C.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), yr("history", ot), yr("undo-redo", yc), yr("paint-ui", On), yr("side-panel", ze), yr("look-at-frame", ql), yr("video-source", si), yr("canvas-size", Sd), yr("cursor", () => bt(p.pointerPos)), de(), Ce.rafId = requestAnimationFrame(Md);
}
Cr.registerExtension(XS({
  app: Cr,
  openEditor: U2,
  attachStickers: iM,
  attachCutout: oM,
  attachPreview: rM,
  restoreOutput: Kk,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: m2
}));
