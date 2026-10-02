import * as Os from "../../scripts/app.js";
import { app as Ar } from "../../scripts/app.js";
import { api as Vt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ku(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const wt = {}, Po = [], Cr = () => {
}, qp = () => !1, Sl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), kl = (e) => e.startsWith("onUpdate:"), _n = Object.assign, Bu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, N1 = Object.prototype.hasOwnProperty, ht = (e, t) => N1.call(e, t), qe = Array.isArray, Ao = (e) => Ha(e) === "[object Map]", Jp = (e) => Ha(e) === "[object Set]", ph = (e) => Ha(e) === "[object Date]", Ze = (e) => typeof e == "function", Bt = (e) => typeof e == "string", Ir = (e) => typeof e == "symbol", bt = (e) => e !== null && typeof e == "object", Zp = (e) => (bt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), Qp = Object.prototype.toString, Ha = (e) => Qp.call(e), P1 = (e) => Ha(e).slice(8, -1), em = (e) => Ha(e) === "[object Object]", Uu = (e) => Bt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ka = /* @__PURE__ */ Ku(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ml = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, A1 = /-\w/g, Pn = Ml(
  (e) => e.replace(A1, (t) => t.slice(1).toUpperCase())
), C1 = /\B([A-Z])/g, Zi = Ml(
  (e) => e.replace(C1, "-$1").toLowerCase()
), Nl = Ml((e) => e.charAt(0).toUpperCase() + e.slice(1)), Sc = Ml(
  (e) => e ? `on${Nl(e)}` : ""
), kr = (e, t) => !Object.is(e, t), Fs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, tm = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Wu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let mh;
const Pl = () => mh || (mh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xt(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Bt(r) ? F1(r) : xt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (Bt(e) || bt(e))
    return e;
}
const I1 = /;(?![^(]*\))/g, E1 = /:([^]+)/, O1 = /\/\*[^]*?\*\//g;
function F1(e) {
  const t = {};
  return e.replace(O1, "").split(I1).forEach((n) => {
    if (n) {
      const r = n.split(E1);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function at(e) {
  let t = "";
  if (Bt(e))
    t = e;
  else if (qe(e))
    for (let n = 0; n < e.length; n++) {
      const r = at(e[n]);
      r && (t += r + " ");
    }
  else if (bt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const T1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", D1 = /* @__PURE__ */ Ku(T1);
function nm(e) {
  return !!e || e === "";
}
function L1(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Yu(e[r], t[r]);
  return n;
}
function Yu(e, t) {
  if (e === t) return !0;
  let n = ph(e), r = ph(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ir(e), r = Ir(t), n || r)
    return e === t;
  if (n = qe(e), r = qe(t), n || r)
    return n && r ? L1(e, t) : !1;
  if (n = bt(e), r = bt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const f = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (f && !d || !f && d || !Yu(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const rm = (e) => !!(e && e.__v_isRef === !0), tt = (e) => Bt(e) ? e : e == null ? "" : qe(e) || bt(e) && (e.toString === Qp || !Ze(e.toString)) ? rm(e) ? tt(e.value) : JSON.stringify(e, im, 2) : String(e), im = (e, t) => rm(t) ? im(e, t.value) : Ao(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[kc(r, a) + " =>"] = o, n),
    {}
  )
} : Jp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => kc(n))
} : Ir(t) ? kc(t) : bt(t) && !qe(t) && !em(t) ? String(t) : t, kc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ir(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ln;
class R1 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Ln, !t && Ln && (this.index = (Ln.scopes || (Ln.scopes = [])).push(
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
      const n = Ln;
      try {
        return Ln = this, t();
      } finally {
        Ln = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ln, Ln = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ln = this.prevScope, this.prevScope = void 0);
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
function $1() {
  return Ln;
}
let Mt;
const Mc = /* @__PURE__ */ new WeakSet();
class om {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ln && Ln.active && Ln.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Mc.has(this) && (Mc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || sm(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, gh(this), lm(this);
    const t = Mt, n = dr;
    Mt = this, dr = !0;
    try {
      return this.fn();
    } finally {
      cm(this), Mt = t, dr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ju(t);
      this.deps = this.depsTail = void 0, gh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Mc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    su(this) && this.run();
  }
  get dirty() {
    return su(this);
  }
}
let am = 0, Ma, Na;
function sm(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Na, Na = e;
    return;
  }
  e.next = Ma, Ma = e;
}
function Xu() {
  am++;
}
function qu() {
  if (--am > 0)
    return;
  if (Na) {
    let t = Na;
    for (Na = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ma; ) {
    let t = Ma;
    for (Ma = void 0; t; ) {
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
function lm(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function cm(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Ju(r), V1(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function su(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (um(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function um(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ea) || (e.globalVersion = Ea, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !su(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Mt, r = dr;
  Mt = e, dr = !0;
  try {
    lm(e);
    const o = e.fn(e._value);
    (t.version === 0 || kr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Mt = n, dr = r, cm(e), e.flags &= -3;
  }
}
function Ju(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Ju(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function V1(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let dr = !0;
const fm = [];
function ti() {
  fm.push(dr), dr = !1;
}
function ni() {
  const e = fm.pop();
  dr = e === void 0 ? !0 : e;
}
function gh(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Mt;
    Mt = void 0;
    try {
      t();
    } finally {
      Mt = n;
    }
  }
}
let Ea = 0;
class z1 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Zu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Mt || !dr || Mt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Mt)
      n = this.activeLink = new z1(Mt, this), Mt.deps ? (n.prevDep = Mt.depsTail, Mt.depsTail.nextDep = n, Mt.depsTail = n) : Mt.deps = Mt.depsTail = n, dm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Mt.depsTail, n.nextDep = void 0, Mt.depsTail.nextDep = n, Mt.depsTail = n, Mt.deps === n && (Mt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ea++, this.notify(t);
  }
  notify(t) {
    Xu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      qu();
    }
  }
}
function dm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        dm(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const lu = /* @__PURE__ */ new WeakMap(), Hi = /* @__PURE__ */ Symbol(
  ""
), cu = /* @__PURE__ */ Symbol(
  ""
), Oa = /* @__PURE__ */ Symbol(
  ""
);
function yn(e, t, n) {
  if (dr && Mt) {
    let r = lu.get(e);
    r || lu.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Zu()), o.map = r, o.key = n), o.track();
  }
}
function Jr(e, t, n, r, o, a) {
  const c = lu.get(e);
  if (!c) {
    Ea++;
    return;
  }
  const f = (d) => {
    d && d.trigger();
  };
  if (Xu(), t === "clear")
    c.forEach(f);
  else {
    const d = qe(e), b = d && Uu(n);
    if (d && n === "length") {
      const g = Number(r);
      c.forEach((w, x) => {
        (x === "length" || x === Oa || !Ir(x) && x >= g) && f(w);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && f(c.get(n)), b && f(c.get(Oa)), t) {
        case "add":
          d ? b && f(c.get("length")) : (f(c.get(Hi)), Ao(e) && f(c.get(cu)));
          break;
        case "delete":
          d || (f(c.get(Hi)), Ao(e) && f(c.get(cu)));
          break;
        case "set":
          Ao(e) && f(c.get(Hi));
          break;
      }
  }
  qu();
}
function po(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (yn(t, "iterate", Oa), /* @__PURE__ */ nr(e) ? t : t.map(hr));
}
function Al(e) {
  return yn(e = /* @__PURE__ */ dt(e), "iterate", Oa), e;
}
function xr(e, t) {
  return /* @__PURE__ */ ri(e) ? $o(/* @__PURE__ */ Gi(e) ? hr(t) : t) : hr(t);
}
const j1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Nc(this, Symbol.iterator, (e) => xr(this, e));
  },
  concat(...e) {
    return po(this).concat(
      ...e.map((t) => qe(t) ? po(t) : t)
    );
  },
  entries() {
    return Nc(this, "entries", (e) => (e[1] = xr(this, e[1]), e));
  },
  every(e, t) {
    return Gr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Gr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => xr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Gr(
      this,
      "find",
      e,
      t,
      (n) => xr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Gr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Gr(
      this,
      "findLast",
      e,
      t,
      (n) => xr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Gr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Gr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Pc(this, "includes", e);
  },
  indexOf(...e) {
    return Pc(this, "indexOf", e);
  },
  join(e) {
    return po(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Pc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Gr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ua(this, "pop");
  },
  push(...e) {
    return ua(this, "push", e);
  },
  reduce(e, ...t) {
    return yh(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return yh(this, "reduceRight", e, t);
  },
  shift() {
    return ua(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Gr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ua(this, "splice", e);
  },
  toReversed() {
    return po(this).toReversed();
  },
  toSorted(e) {
    return po(this).toSorted(e);
  },
  toSpliced(...e) {
    return po(this).toSpliced(...e);
  },
  unshift(...e) {
    return ua(this, "unshift", e);
  },
  values() {
    return Nc(this, "values", (e) => xr(this, e));
  }
};
function Nc(e, t, n) {
  const r = Al(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ nr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const H1 = Array.prototype;
function Gr(e, t, n, r, o, a) {
  const c = Al(e), f = c !== e && !/* @__PURE__ */ nr(e), d = c[t];
  if (d !== H1[t]) {
    const w = d.apply(e, a);
    return f ? hr(w) : w;
  }
  let b = n;
  c !== e && (f ? b = function(w, x) {
    return n.call(this, xr(e, w), x, e);
  } : n.length > 2 && (b = function(w, x) {
    return n.call(this, w, x, e);
  }));
  const g = d.call(c, b, r);
  return f && o ? o(g) : g;
}
function yh(e, t, n, r) {
  const o = Al(e), a = o !== e && !/* @__PURE__ */ nr(e);
  let c = n, f = !1;
  o !== e && (a ? (f = r.length === 0, c = function(b, g, w) {
    return f && (f = !1, b = xr(e, b)), n.call(this, b, xr(e, g), w, e);
  }) : n.length > 3 && (c = function(b, g, w) {
    return n.call(this, b, g, w, e);
  }));
  const d = o[t](c, ...r);
  return f ? xr(e, d) : d;
}
function Pc(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  yn(r, "iterate", Oa);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ tf(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : o;
}
function ua(e, t, n = []) {
  ti(), Xu();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return qu(), ni(), r;
}
const G1 = /* @__PURE__ */ Ku("__proto__,__v_isRef,__isVue"), hm = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ir)
);
function K1(e) {
  Ir(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return yn(t, "has", e), t.hasOwnProperty(e);
}
class pm {
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
      return r === (o ? a ? ev : bm : a ? ym : gm).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = qe(t);
    if (!o) {
      let d;
      if (c && (d = j1[n]))
        return d;
      if (n === "hasOwnProperty")
        return K1;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ vn(t) ? t : r
    );
    if ((Ir(n) ? hm.has(n) : G1(n)) || (o || yn(t, "get", n), a))
      return f;
    if (/* @__PURE__ */ vn(f)) {
      const d = c && Uu(n) ? f : f.value;
      return o && bt(d) ? /* @__PURE__ */ fu(d) : d;
    }
    return bt(f) ? o ? /* @__PURE__ */ fu(f) : /* @__PURE__ */ Ko(f) : f;
  }
}
class mm extends pm {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = qe(t) && Uu(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ ri(a);
      if (!/* @__PURE__ */ nr(r) && !/* @__PURE__ */ ri(r) && (a = /* @__PURE__ */ dt(a), r = /* @__PURE__ */ dt(r)), !c && /* @__PURE__ */ vn(a) && !/* @__PURE__ */ vn(r))
        return b || (a.value = r), !0;
    }
    const f = c ? Number(n) < t.length : ht(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ vn(t) ? t : o
    );
    return t === /* @__PURE__ */ dt(o) && (f ? kr(r, a) && Jr(t, "set", n, r) : Jr(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = ht(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Jr(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ir(n) || !hm.has(n)) && yn(t, "has", n), r;
  }
  ownKeys(t) {
    return yn(
      t,
      "iterate",
      qe(t) ? "length" : Hi
    ), Reflect.ownKeys(t);
  }
}
class B1 extends pm {
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
const U1 = /* @__PURE__ */ new mm(), W1 = /* @__PURE__ */ new B1(), Y1 = /* @__PURE__ */ new mm(!0);
const uu = (e) => e, ps = (e) => Reflect.getPrototypeOf(e);
function X1(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ dt(o), c = Ao(a), f = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, b = o[e](...r), g = n ? uu : t ? $o : hr;
    return !t && yn(
      a,
      "iterate",
      d ? cu : Hi
    ), _n(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: w, done: x } = b.next();
          return x ? { value: w, done: x } : {
            value: f ? [g(w[0]), g(w[1])] : g(w),
            done: x
          };
        }
      }
    );
  };
}
function ms(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function q1(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ dt(a), f = /* @__PURE__ */ dt(o);
      e || (kr(o, f) && yn(c, "get", o), yn(c, "get", f));
      const { has: d } = ps(c), b = t ? uu : e ? $o : hr;
      if (d.call(c, o))
        return b(a.get(o));
      if (d.call(c, f))
        return b(a.get(f));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && yn(/* @__PURE__ */ dt(o), "iterate", Hi), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ dt(a), f = /* @__PURE__ */ dt(o);
      return e || (kr(o, f) && yn(c, "has", o), yn(c, "has", f)), o === f ? a.has(o) : a.has(o) || a.has(f);
    },
    forEach(o, a) {
      const c = this, f = c.__v_raw, d = /* @__PURE__ */ dt(f), b = t ? uu : e ? $o : hr;
      return !e && yn(d, "iterate", Hi), f.forEach((g, w) => o.call(a, b(g), b(w), c));
    }
  };
  return _n(
    n,
    e ? {
      add: ms("add"),
      set: ms("set"),
      delete: ms("delete"),
      clear: ms("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ dt(this), c = ps(a), f = /* @__PURE__ */ dt(o), d = !t && !/* @__PURE__ */ nr(o) && !/* @__PURE__ */ ri(o) ? f : o;
        return c.has.call(a, d) || kr(o, d) && c.has.call(a, o) || kr(f, d) && c.has.call(a, f) || (a.add(d), Jr(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ nr(a) && !/* @__PURE__ */ ri(a) && (a = /* @__PURE__ */ dt(a));
        const c = /* @__PURE__ */ dt(this), { has: f, get: d } = ps(c);
        let b = f.call(c, o);
        b || (o = /* @__PURE__ */ dt(o), b = f.call(c, o));
        const g = d.call(c, o);
        return c.set(o, a), b ? kr(a, g) && Jr(c, "set", o, a) : Jr(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ dt(this), { has: c, get: f } = ps(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ dt(o), d = c.call(a, o)), f && f.call(a, o);
        const b = a.delete(o);
        return d && Jr(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ dt(this), a = o.size !== 0, c = o.clear();
        return a && Jr(
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
    n[o] = X1(o, e, t);
  }), n;
}
function Qu(e, t) {
  const n = q1(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ht(n, o) && o in r ? n : r,
    o,
    a
  );
}
const J1 = {
  get: /* @__PURE__ */ Qu(!1, !1)
}, Z1 = {
  get: /* @__PURE__ */ Qu(!1, !0)
}, Q1 = {
  get: /* @__PURE__ */ Qu(!0, !1)
};
const gm = /* @__PURE__ */ new WeakMap(), ym = /* @__PURE__ */ new WeakMap(), bm = /* @__PURE__ */ new WeakMap(), ev = /* @__PURE__ */ new WeakMap();
function tv(e) {
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
function nv(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : tv(P1(e));
}
// @__NO_SIDE_EFFECTS__
function Ko(e) {
  return /* @__PURE__ */ ri(e) ? e : ef(
    e,
    !1,
    U1,
    J1,
    gm
  );
}
// @__NO_SIDE_EFFECTS__
function rv(e) {
  return ef(
    e,
    !1,
    Y1,
    Z1,
    ym
  );
}
// @__NO_SIDE_EFFECTS__
function fu(e) {
  return ef(
    e,
    !0,
    W1,
    Q1,
    bm
  );
}
function ef(e, t, n, r, o) {
  if (!bt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = nv(e);
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
function Gi(e) {
  return /* @__PURE__ */ ri(e) ? /* @__PURE__ */ Gi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ri(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function tf(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function iv(e) {
  return !ht(e, "__v_skip") && Object.isExtensible(e) && tm(e, "__v_skip", !0), e;
}
const hr = (e) => bt(e) ? /* @__PURE__ */ Ko(e) : e, $o = (e) => bt(e) ? /* @__PURE__ */ fu(e) : e;
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function zt(e) {
  return ov(e, !1);
}
function ov(e, t) {
  return /* @__PURE__ */ vn(e) ? e : new av(e, t);
}
class av {
  constructor(t, n) {
    this.dep = new Zu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : hr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ nr(t) || /* @__PURE__ */ ri(t);
    t = r ? t : /* @__PURE__ */ dt(t), kr(t, n) && (this._rawValue = t, this._value = r ? t : hr(t), this.dep.trigger());
  }
}
function Je(e) {
  return /* @__PURE__ */ vn(e) ? e.value : e;
}
const sv = {
  get: (e, t, n) => t === "__v_raw" ? e : Je(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ vn(o) && !/* @__PURE__ */ vn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function vm(e) {
  return /* @__PURE__ */ Gi(e) ? e : new Proxy(e, sv);
}
class lv {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Zu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ea - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Mt !== this)
      return sm(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return um(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function cv(e, t, n = !1) {
  let r, o;
  return Ze(e) ? r = e : (r = e.get, o = e.set), new lv(r, o, n);
}
const gs = {}, Zs = /* @__PURE__ */ new WeakMap();
let Li;
function uv(e, t = !1, n = Li) {
  if (n) {
    let r = Zs.get(n);
    r || Zs.set(n, r = []), r.push(e);
  }
}
function fv(e, t, n = wt) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: f, call: d } = n, b = (z) => o ? z : /* @__PURE__ */ nr(z) || o === !1 || o === 0 ? Zr(z, 1) : Zr(z);
  let g, w, x, M, k = !1, _ = !1;
  if (/* @__PURE__ */ vn(e) ? (w = () => e.value, k = /* @__PURE__ */ nr(e)) : /* @__PURE__ */ Gi(e) ? (w = () => b(e), k = !0) : qe(e) ? (_ = !0, k = e.some((z) => /* @__PURE__ */ Gi(z) || /* @__PURE__ */ nr(z)), w = () => e.map((z) => {
    if (/* @__PURE__ */ vn(z))
      return z.value;
    if (/* @__PURE__ */ Gi(z))
      return b(z);
    if (Ze(z))
      return d ? d(z, 2) : z();
  })) : Ze(e) ? t ? w = d ? () => d(e, 2) : e : w = () => {
    if (x) {
      ti();
      try {
        x();
      } finally {
        ni();
      }
    }
    const z = Li;
    Li = g;
    try {
      return d ? d(e, 3, [M]) : e(M);
    } finally {
      Li = z;
    }
  } : w = Cr, t && o) {
    const z = w, O = o === !0 ? 1 / 0 : o;
    w = () => Zr(z(), O);
  }
  const F = $1(), L = () => {
    g.stop(), F && F.active && Bu(F.effects, g);
  };
  if (a && t) {
    const z = t;
    t = (...O) => {
      z(...O), L();
    };
  }
  let W = _ ? new Array(e.length).fill(gs) : gs;
  const I = (z) => {
    if (!(!(g.flags & 1) || !g.dirty && !z))
      if (t) {
        const O = g.run();
        if (o || k || (_ ? O.some((R, G) => kr(R, W[G])) : kr(O, W))) {
          x && x();
          const R = Li;
          Li = g;
          try {
            const G = [
              O,
              // pass undefined as the old value when it's changed for the first time
              W === gs ? void 0 : _ && W[0] === gs ? [] : W,
              M
            ];
            W = O, d ? d(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            Li = R;
          }
        }
      } else
        g.run();
  };
  return f && f(I), g = new om(w), g.scheduler = c ? () => c(I, !1) : I, M = (z) => uv(z, !1, g), x = g.onStop = () => {
    const z = Zs.get(g);
    if (z) {
      if (d)
        d(z, 4);
      else
        for (const O of z) O();
      Zs.delete(g);
    }
  }, t ? r ? I(!0) : W = g.run() : c ? c(I.bind(null, !0), !0) : g.run(), L.pause = g.pause.bind(g), L.resume = g.resume.bind(g), L.stop = L, L;
}
function Zr(e, t = 1 / 0, n) {
  if (t <= 0 || !bt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ vn(e))
    Zr(e.value, t, n);
  else if (qe(e))
    for (let r = 0; r < e.length; r++)
      Zr(e[r], t, n);
  else if (Jp(e) || Ao(e))
    e.forEach((r) => {
      Zr(r, t, n);
    });
  else if (em(e)) {
    for (const r in e)
      Zr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Zr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ga(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Cl(o, t, n);
  }
}
function Er(e, t, n, r) {
  if (Ze(e)) {
    const o = Ga(e, t, n, r);
    return o && Zp(o) && o.catch((a) => {
      Cl(a, t, n);
    }), o;
  }
  if (qe(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Er(e[a], t, n, r));
    return o;
  }
}
function Cl(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || wt;
  if (t) {
    let f = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const g = f.ec;
      if (g) {
        for (let w = 0; w < g.length; w++)
          if (g[w](e, d, b) === !1)
            return;
      }
      f = f.parent;
    }
    if (a) {
      ti(), Ga(a, null, 10, [
        e,
        d,
        b
      ]), ni();
      return;
    }
  }
  dv(e, n, o, r, c);
}
function dv(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Nn = [];
let wr = -1;
const Co = [];
let yi = null, _o = 0;
const _m = /* @__PURE__ */ Promise.resolve();
let Qs = null;
function nf(e) {
  const t = Qs || _m;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hv(e) {
  let t = wr + 1, n = Nn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Nn[r], a = Fa(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function rf(e) {
  if (!(e.flags & 1)) {
    const t = Fa(e), n = Nn[Nn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Fa(n) ? Nn.push(e) : Nn.splice(hv(t), 0, e), e.flags |= 1, wm();
  }
}
function wm() {
  Qs || (Qs = _m.then(Sm));
}
function pv(e) {
  qe(e) ? Co.push(...e) : yi && e.id === -1 ? yi.splice(_o + 1, 0, e) : e.flags & 1 || (Co.push(e), e.flags |= 1), wm();
}
function bh(e, t, n = wr + 1) {
  for (; n < Nn.length; n++) {
    const r = Nn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Nn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function xm(e) {
  if (Co.length) {
    const t = [...new Set(Co)].sort(
      (n, r) => Fa(n) - Fa(r)
    );
    if (Co.length = 0, yi) {
      yi.push(...t);
      return;
    }
    for (yi = t, _o = 0; _o < yi.length; _o++) {
      const n = yi[_o];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    yi = null, _o = 0;
  }
}
const Fa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Sm(e) {
  try {
    for (wr = 0; wr < Nn.length; wr++) {
      const t = Nn[wr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ga(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; wr < Nn.length; wr++) {
      const t = Nn[wr];
      t && (t.flags &= -2);
    }
    wr = -1, Nn.length = 0, xm(), Qs = null, (Nn.length || Co.length) && Sm();
  }
}
let Gn = null, km = null;
function el(e) {
  const t = Gn;
  return Gn = e, km = e && e.type.__scopeId || null, t;
}
function Mm(e, t = Gn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Ih(-1);
    const a = el(t);
    let c;
    try {
      c = e(...o);
    } finally {
      el(a), r._d && Ih(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function _i(e, t) {
  if (Gn === null)
    return e;
  const n = Tl(Gn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, f, d = wt] = t[o];
    a && (Ze(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Zr(c), r.push({
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
function Ci(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const f = o[c];
    a && (f.oldValue = a[c].value);
    let d = f.dir[r];
    d && (ti(), Er(d, n, 8, [
      e.el,
      f,
      e,
      t
    ]), ni());
  }
}
function mv(e, t) {
  if (bn) {
    let n = bn.provides;
    const r = bn.parent && bn.parent.provides;
    r === n && (n = bn.provides = Object.create(r)), n[e] = t;
  }
}
function Ts(e, t, n = !1) {
  const r = h_();
  if (r || Io) {
    let o = Io ? Io._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Ze(t) ? t.call(r && r.proxy) : t;
  }
}
const gv = /* @__PURE__ */ Symbol.for("v-scx"), yv = () => Ts(gv);
function Ki(e, t, n) {
  return Nm(e, t, n);
}
function Nm(e, t, n = wt) {
  const { immediate: r, deep: o, flush: a, once: c } = n, f = _n({}, n), d = t && r || !t && a !== "post";
  let b;
  if (Da) {
    if (a === "sync") {
      const M = yv();
      b = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!d) {
      const M = () => {
      };
      return M.stop = Cr, M.resume = Cr, M.pause = Cr, M;
    }
  }
  const g = bn;
  f.call = (M, k, _) => Er(M, g, k, _);
  let w = !1;
  a === "post" ? f.scheduler = (M) => {
    Dn(M, g && g.suspense);
  } : a !== "sync" && (w = !0, f.scheduler = (M, k) => {
    k ? M() : rf(M);
  }), f.augmentJob = (M) => {
    t && (M.flags |= 4), w && (M.flags |= 2, g && (M.id = g.uid, M.i = g));
  };
  const x = fv(e, t, f);
  return Da && (b ? b.push(x) : d && x()), x;
}
function bv(e, t, n) {
  const r = this.proxy, o = Bt(e) ? e.includes(".") ? Pm(r, e) : () => r[e] : e.bind(r, r);
  let a;
  Ze(t) ? a = t : (a = t.handler, n = t);
  const c = Ba(this), f = Nm(o, a.bind(r), n);
  return c(), f;
}
function Pm(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const vv = /* @__PURE__ */ Symbol("_vte"), _v = (e) => e.__isTeleport, wv = /* @__PURE__ */ Symbol("_leaveCb");
function of(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, of(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Am(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function vh(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const tl = /* @__PURE__ */ new WeakMap();
function Pa(e, t, n, r, o = !1) {
  if (qe(e)) {
    e.forEach(
      (_, F) => Pa(
        _,
        t && (qe(t) ? t[F] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Aa(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Pa(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Tl(r.component) : r.el, c = o ? null : a, { i: f, r: d } = e, b = t && t.r, g = f.refs === wt ? f.refs = {} : f.refs, w = f.setupState, x = /* @__PURE__ */ dt(w), M = w === wt ? qp : (_) => vh(g, _) ? !1 : ht(x, _), k = (_, F) => !(F && vh(g, F));
  if (b != null && b !== d) {
    if (_h(t), Bt(b))
      g[b] = null, M(b) && (w[b] = null);
    else if (/* @__PURE__ */ vn(b)) {
      const _ = t;
      k(b, _.k) && (b.value = null), _.k && (g[_.k] = null);
    }
  }
  if (Ze(d))
    Ga(d, f, 12, [c, g]);
  else {
    const _ = Bt(d), F = /* @__PURE__ */ vn(d);
    if (_ || F) {
      const L = () => {
        if (e.f) {
          const W = _ ? M(d) ? w[d] : g[d] : k() || !e.k ? d.value : g[e.k];
          if (o)
            qe(W) && Bu(W, a);
          else if (qe(W))
            W.includes(a) || W.push(a);
          else if (_)
            g[d] = [a], M(d) && (w[d] = g[d]);
          else {
            const I = [a];
            k(d, e.k) && (d.value = I), e.k && (g[e.k] = I);
          }
        } else _ ? (g[d] = c, M(d) && (w[d] = c)) : F && (k(d, e.k) && (d.value = c), e.k && (g[e.k] = c));
      };
      if (c) {
        const W = () => {
          L(), tl.delete(e);
        };
        W.id = -1, tl.set(e, W), Dn(W, n);
      } else
        _h(e), L();
    }
  }
}
function _h(e) {
  const t = tl.get(e);
  t && (t.flags |= 8, tl.delete(e));
}
Pl().requestIdleCallback;
Pl().cancelIdleCallback;
const Aa = (e) => !!e.type.__asyncLoader, Cm = (e) => e.type.__isKeepAlive;
function xv(e, t) {
  Im(e, "a", t);
}
function Sv(e, t) {
  Im(e, "da", t);
}
function Im(e, t, n = bn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Il(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Cm(o.parent.vnode) && kv(r, t, n, o), o = o.parent;
  }
}
function kv(e, t, n, r) {
  const o = Il(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Em(() => {
    Bu(r[t], o);
  }, n);
}
function Il(e, t, n = bn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      ti();
      const f = Ba(n), d = Er(t, n, e, c);
      return f(), ni(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const oi = (e) => (t, n = bn) => {
  (!Da || e === "sp") && Il(e, (...r) => t(...r), n);
}, Mv = oi("bm"), El = oi("m"), Nv = oi(
  "bu"
), Pv = oi("u"), Ka = oi(
  "bum"
), Em = oi("um"), Av = oi(
  "sp"
), Cv = oi("rtg"), Iv = oi("rtc");
function Ev(e, t = bn) {
  Il("ec", e, t);
}
const Ov = "components", Om = /* @__PURE__ */ Symbol.for("v-ndc");
function Fv(e) {
  return Bt(e) ? Tv(Ov, e, !1) || e : e || Om;
}
function Tv(e, t, n = !0, r = !1) {
  const o = Gn || bn;
  if (o) {
    const a = o.type;
    {
      const f = b_(
        a,
        !1
      );
      if (f && (f === t || f === Pn(t) || f === Nl(Pn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      wh(o[e] || a[e], t) || // global registration
      wh(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function wh(e, t) {
  return e && (e[t] || e[Pn(t)] || e[Nl(Pn(t))]);
}
function St(e, t, n, r) {
  let o;
  const a = n, c = qe(e);
  if (c || Bt(e)) {
    const f = c && /* @__PURE__ */ Gi(e);
    let d = !1, b = !1;
    f && (d = !/* @__PURE__ */ nr(e), b = /* @__PURE__ */ ri(e), e = Al(e)), o = new Array(e.length);
    for (let g = 0, w = e.length; g < w; g++)
      o[g] = t(
        d ? b ? $o(hr(e[g])) : hr(e[g]) : e[g],
        g,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let f = 0; f < e; f++)
      o[f] = t(f + 1, f, void 0, a);
  } else if (bt(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (f, d) => t(f, d, void 0, a)
      );
    else {
      const f = Object.keys(e);
      o = new Array(f.length);
      for (let d = 0, b = f.length; d < b; d++) {
        const g = f[d];
        o[d] = t(e[g], g, d, a);
      }
    }
  else
    o = [];
  return o;
}
const du = (e) => e ? Qm(e) ? Tl(e) : du(e.parent) : null, Ca = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ _n(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => du(e.parent),
    $root: (e) => du(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Tm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      rf(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = nf.bind(e.proxy)),
    $watch: (e) => bv.bind(e)
  })
), Ac = (e, t) => e !== wt && !e.__isScriptSetup && ht(e, t), Dv = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: c, type: f, appContext: d } = e;
    if (t[0] !== "$") {
      const x = c[t];
      if (x !== void 0)
        switch (x) {
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
        if (Ac(r, t))
          return c[t] = 1, r[t];
        if (o !== wt && ht(o, t))
          return c[t] = 2, o[t];
        if (ht(a, t))
          return c[t] = 3, a[t];
        if (n !== wt && ht(n, t))
          return c[t] = 4, n[t];
        hu && (c[t] = 0);
      }
    }
    const b = Ca[t];
    let g, w;
    if (b)
      return t === "$attrs" && yn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (g = f.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== wt && ht(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      w = d.config.globalProperties, ht(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Ac(o, t) ? (o[t] = n, !0) : r !== wt && ht(r, t) ? (r[t] = n, !0) : ht(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, f) {
    let d;
    return !!(n[f] || e !== wt && f[0] !== "$" && ht(e, f) || Ac(t, f) || ht(a, f) || ht(r, f) || ht(Ca, f) || ht(o.config.globalProperties, f) || (d = c.__cssModules) && d[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ht(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function xh(e) {
  return qe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let hu = !0;
function Lv(e) {
  const t = Tm(e), n = e.proxy, r = e.ctx;
  hu = !1, t.beforeCreate && Sh(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: c,
    watch: f,
    provide: d,
    inject: b,
    // lifecycle
    created: g,
    beforeMount: w,
    mounted: x,
    beforeUpdate: M,
    updated: k,
    activated: _,
    deactivated: F,
    beforeDestroy: L,
    beforeUnmount: W,
    destroyed: I,
    unmounted: z,
    render: O,
    renderTracked: R,
    renderTriggered: G,
    errorCaptured: ee,
    serverPrefetch: ve,
    // public API
    expose: T,
    inheritAttrs: N,
    // assets
    components: X,
    directives: U,
    filters: q
  } = t;
  if (b && Rv(b, r, null), c)
    for (const J in c) {
      const E = c[J];
      Ze(E) && (r[J] = E.bind(n));
    }
  if (o) {
    const J = o.call(n, n);
    bt(J) && (e.data = /* @__PURE__ */ Ko(J));
  }
  if (hu = !0, a)
    for (const J in a) {
      const E = a[J], Le = Ze(E) ? E.bind(n, n) : Ze(E.get) ? E.get.bind(n, n) : Cr, H = !Ze(E) && Ze(E.set) ? E.set.bind(n) : Cr, Ne = ft({
        get: Le,
        set: H
      });
      Object.defineProperty(r, J, {
        enumerable: !0,
        configurable: !0,
        get: () => Ne.value,
        set: (He) => Ne.value = He
      });
    }
  if (f)
    for (const J in f)
      Fm(f[J], r, n, J);
  if (d) {
    const J = Ze(d) ? d.call(n) : d;
    Reflect.ownKeys(J).forEach((E) => {
      mv(E, J[E]);
    });
  }
  g && Sh(g, e, "c");
  function ne(J, E) {
    qe(E) ? E.forEach((Le) => J(Le.bind(n))) : E && J(E.bind(n));
  }
  if (ne(Mv, w), ne(El, x), ne(Nv, M), ne(Pv, k), ne(xv, _), ne(Sv, F), ne(Ev, ee), ne(Iv, R), ne(Cv, G), ne(Ka, W), ne(Em, z), ne(Av, ve), qe(T))
    if (T.length) {
      const J = e.exposed || (e.exposed = {});
      T.forEach((E) => {
        Object.defineProperty(J, E, {
          get: () => n[E],
          set: (Le) => n[E] = Le,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Cr && (e.render = O), N != null && (e.inheritAttrs = N), X && (e.components = X), U && (e.directives = U), ve && Am(e);
}
function Rv(e, t, n = Cr) {
  qe(e) && (e = pu(e));
  for (const r in e) {
    const o = e[r];
    let a;
    bt(o) ? "default" in o ? a = Ts(
      o.from || r,
      o.default,
      !0
    ) : a = Ts(o.from || r) : a = Ts(o), /* @__PURE__ */ vn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function Sh(e, t, n) {
  Er(
    qe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Fm(e, t, n, r) {
  let o = r.includes(".") ? Pm(n, r) : () => n[r];
  if (Bt(e)) {
    const a = t[e];
    Ze(a) && Ki(o, a);
  } else if (Ze(e))
    Ki(o, e.bind(n));
  else if (bt(e))
    if (qe(e))
      e.forEach((a) => Fm(a, t, n, r));
    else {
      const a = Ze(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ze(a) && Ki(o, a, e);
    }
}
function Tm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, f = a.get(t);
  let d;
  return f ? d = f : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => nl(d, b, c, !0)
  ), nl(d, t, c)), bt(t) && a.set(t, d), d;
}
function nl(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && nl(e, a, n, !0), o && o.forEach(
    (c) => nl(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const f = $v[c] || n && n[c];
      e[c] = f ? f(e[c], t[c]) : t[c];
    }
  return e;
}
const $v = {
  data: kh,
  props: Mh,
  emits: Mh,
  // objects
  methods: ya,
  computed: ya,
  // lifecycle
  beforeCreate: Mn,
  created: Mn,
  beforeMount: Mn,
  mounted: Mn,
  beforeUpdate: Mn,
  updated: Mn,
  beforeDestroy: Mn,
  beforeUnmount: Mn,
  destroyed: Mn,
  unmounted: Mn,
  activated: Mn,
  deactivated: Mn,
  errorCaptured: Mn,
  serverPrefetch: Mn,
  // assets
  components: ya,
  directives: ya,
  // watch
  watch: zv,
  // provide / inject
  provide: kh,
  inject: Vv
};
function kh(e, t) {
  return t ? e ? function() {
    return _n(
      Ze(e) ? e.call(this, this) : e,
      Ze(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vv(e, t) {
  return ya(pu(e), pu(t));
}
function pu(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Mn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ya(e, t) {
  return e ? _n(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Mh(e, t) {
  return e ? qe(e) && qe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _n(
    /* @__PURE__ */ Object.create(null),
    xh(e),
    xh(t ?? {})
  ) : t;
}
function zv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = _n(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Mn(e[r], t[r]);
  return n;
}
function Dm() {
  return {
    app: null,
    config: {
      isNativeTag: qp,
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
let jv = 0;
function Hv(e, t) {
  return function(r, o = null) {
    Ze(r) || (r = _n({}, r)), o != null && !bt(o) && (o = null);
    const a = Dm(), c = /* @__PURE__ */ new WeakSet(), f = [];
    let d = !1;
    const b = a.app = {
      _uid: jv++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: __,
      get config() {
        return a.config;
      },
      set config(g) {
      },
      use(g, ...w) {
        return c.has(g) || (g && Ze(g.install) ? (c.add(g), g.install(b, ...w)) : Ze(g) && (c.add(g), g(b, ...w))), b;
      },
      mixin(g) {
        return a.mixins.includes(g) || a.mixins.push(g), b;
      },
      component(g, w) {
        return w ? (a.components[g] = w, b) : a.components[g];
      },
      directive(g, w) {
        return w ? (a.directives[g] = w, b) : a.directives[g];
      },
      mount(g, w, x) {
        if (!d) {
          const M = b._ceVNode || Fe(r, o);
          return M.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(M, g, x), d = !0, b._container = g, g.__vue_app__ = b, Tl(M.component);
        }
      },
      onUnmount(g) {
        f.push(g);
      },
      unmount() {
        d && (Er(
          f,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(g, w) {
        return a.provides[g] = w, b;
      },
      runWithContext(g) {
        const w = Io;
        Io = b;
        try {
          return g();
        } finally {
          Io = w;
        }
      }
    };
    return b;
  };
}
let Io = null;
const Gv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Pn(t)}Modifiers`] || e[`${Zi(t)}Modifiers`];
function Kv(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || wt;
  let o = n;
  const a = t.startsWith("update:"), c = a && Gv(r, t.slice(7));
  c && (c.trim && (o = n.map((g) => Bt(g) ? g.trim() : g)), c.number && (o = n.map(Wu)));
  let f, d = r[f = Sc(t)] || // also try camelCase event handler (#2249)
  r[f = Sc(Pn(t))];
  !d && a && (d = r[f = Sc(Zi(t))]), d && Er(
    d,
    e,
    6,
    o
  );
  const b = r[f + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Er(
      b,
      e,
      6,
      o
    );
  }
}
const Bv = /* @__PURE__ */ new WeakMap();
function Lm(e, t, n = !1) {
  const r = n ? Bv : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, f = !1;
  if (!Ze(e)) {
    const d = (b) => {
      const g = Lm(b, t, !0);
      g && (f = !0, _n(c, g));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !f ? (bt(e) && r.set(e, null), null) : (qe(a) ? a.forEach((d) => c[d] = null) : _n(c, a), bt(e) && r.set(e, c), c);
}
function Ol(e, t) {
  return !e || !Sl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ht(e, t[0].toLowerCase() + t.slice(1)) || ht(e, Zi(t)) || ht(e, t));
}
function Nh(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [a],
    slots: c,
    attrs: f,
    emit: d,
    render: b,
    renderCache: g,
    props: w,
    data: x,
    setupState: M,
    ctx: k,
    inheritAttrs: _
  } = e, F = el(e);
  let L, W;
  try {
    if (n.shapeFlag & 4) {
      const z = o || r, O = z;
      L = Sr(
        b.call(
          O,
          z,
          g,
          w,
          M,
          x,
          k
        )
      ), W = f;
    } else {
      const z = t;
      L = Sr(
        z.length > 1 ? z(
          w,
          { attrs: f, slots: c, emit: d }
        ) : z(
          w,
          null
        )
      ), W = t.props ? f : Uv(f);
    }
  } catch (z) {
    Ia.length = 0, Cl(z, e, 1), L = Fe(wi);
  }
  let I = L;
  if (W && _ !== !1) {
    const z = Object.keys(W), { shapeFlag: O } = I;
    z.length && O & 7 && (a && z.some(kl) && (W = Wv(
      W,
      a
    )), I = Vo(I, W, !1, !0));
  }
  return n.dirs && (I = Vo(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && of(I, n.transition), L = I, el(F), L;
}
const Uv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Sl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Wv = (e, t) => {
  const n = {};
  for (const r in e)
    (!kl(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Yv(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: f, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Ph(r, c, b) : !!c;
    if (d & 8) {
      const g = t.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        const x = g[w];
        if (Rm(c, r, x) && !Ol(b, x))
          return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable) ? !0 : r === c ? !1 : r ? c ? Ph(r, c, b) : !0 : !!c;
  return !1;
}
function Ph(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (Rm(t, e, a) && !Ol(n, a))
      return !0;
  }
  return !1;
}
function Rm(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && bt(r) && bt(o) ? !Yu(r, o) : r !== o;
}
function Xv({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const $m = {}, Vm = () => Object.create($m), zm = (e) => Object.getPrototypeOf(e) === $m;
function qv(e, t, n, r = !1) {
  const o = {}, a = Vm();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), jm(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ rv(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function Jv(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, f = /* @__PURE__ */ dt(o), [d] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const g = e.vnode.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        let x = g[w];
        if (Ol(e.emitsOptions, x))
          continue;
        const M = t[x];
        if (d)
          if (ht(a, x))
            M !== a[x] && (a[x] = M, b = !0);
          else {
            const k = Pn(x);
            o[k] = mu(
              d,
              f,
              k,
              M,
              e,
              !1
            );
          }
        else
          M !== a[x] && (a[x] = M, b = !0);
      }
    }
  } else {
    jm(e, t, o, a) && (b = !0);
    let g;
    for (const w in f)
      (!t || // for camelCase
      !ht(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = Zi(w)) === w || !ht(t, g))) && (d ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[g] !== void 0) && (o[w] = mu(
        d,
        f,
        w,
        void 0,
        e,
        !0
      )) : delete o[w]);
    if (a !== f)
      for (const w in a)
        (!t || !ht(t, w)) && (delete a[w], b = !0);
  }
  b && Jr(e.attrs, "set", "");
}
function jm(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, f;
  if (t)
    for (let d in t) {
      if (ka(d))
        continue;
      const b = t[d];
      let g;
      o && ht(o, g = Pn(d)) ? !a || !a.includes(g) ? n[g] = b : (f || (f = {}))[g] = b : Ol(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ dt(n), b = f || wt;
    for (let g = 0; g < a.length; g++) {
      const w = a[g];
      n[w] = mu(
        o,
        d,
        w,
        b[w],
        e,
        !ht(b, w)
      );
    }
  }
  return c;
}
function mu(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const f = ht(c, "default");
    if (f && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Ze(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const g = Ba(o);
          r = b[n] = d.call(
            null,
            t
          ), g();
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
    ] && (r === "" || r === Zi(n)) && (r = !0));
  }
  return r;
}
const Zv = /* @__PURE__ */ new WeakMap();
function Hm(e, t, n = !1) {
  const r = n ? Zv : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, f = [];
  let d = !1;
  if (!Ze(e)) {
    const g = (w) => {
      d = !0;
      const [x, M] = Hm(w, t, !0);
      _n(c, x), M && f.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!a && !d)
    return bt(e) && r.set(e, Po), Po;
  if (qe(a))
    for (let g = 0; g < a.length; g++) {
      const w = Pn(a[g]);
      Ah(w) && (c[w] = wt);
    }
  else if (a)
    for (const g in a) {
      const w = Pn(g);
      if (Ah(w)) {
        const x = a[g], M = c[w] = qe(x) || Ze(x) ? { type: x } : _n({}, x), k = M.type;
        let _ = !1, F = !0;
        if (qe(k))
          for (let L = 0; L < k.length; ++L) {
            const W = k[L], I = Ze(W) && W.name;
            if (I === "Boolean") {
              _ = !0;
              break;
            } else I === "String" && (F = !1);
          }
        else
          _ = Ze(k) && k.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = _, M[
          1
          /* shouldCastTrue */
        ] = F, (_ || ht(M, "default")) && f.push(w);
      }
    }
  const b = [c, f];
  return bt(e) && r.set(e, b), b;
}
function Ah(e) {
  return e[0] !== "$" && !ka(e);
}
const af = (e) => e === "_" || e === "_ctx" || e === "$stable", sf = (e) => qe(e) ? e.map(Sr) : [Sr(e)], Qv = (e, t, n) => {
  if (t._n)
    return t;
  const r = Mm((...o) => sf(t(...o)), n);
  return r._c = !1, r;
}, Gm = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (af(o)) continue;
    const a = e[o];
    if (Ze(a))
      t[o] = Qv(o, a, r);
    else if (a != null) {
      const c = sf(a);
      t[o] = () => c;
    }
  }
}, Km = (e, t) => {
  const n = sf(t);
  e.slots.default = () => n;
}, Bm = (e, t, n) => {
  for (const r in t)
    (n || !af(r)) && (e[r] = t[r]);
}, e_ = (e, t, n) => {
  const r = e.slots = Vm();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Bm(r, t, n), n && tm(r, "_", o, !0)) : Gm(t, r);
  } else t && Km(e, t);
}, t_ = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = wt;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? a = !1 : Bm(o, t, n) : (a = !t.$stable, Gm(t, o)), c = t;
  } else t && (Km(e, t), c = { default: 1 });
  if (a)
    for (const f in o)
      !af(f) && c[f] == null && delete o[f];
}, Dn = a_;
function n_(e) {
  return r_(e);
}
function r_(e, t) {
  const n = Pl();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: c,
    createText: f,
    createComment: d,
    setText: b,
    setElementText: g,
    parentNode: w,
    nextSibling: x,
    setScopeId: M = Cr,
    insertStaticContent: k
  } = e, _ = ($, j, te, ye = null, me = null, be = null, we = void 0, ke = null, Se = !!j.dynamicChildren) => {
    if ($ === j)
      return;
    $ && !fa($, j) && (ye = Bn($), He($, me, be, !0), $ = null), j.patchFlag === -2 && (Se = !1, j.dynamicChildren = null);
    const { type: ue, ref: Re, shapeFlag: Ae } = j;
    switch (ue) {
      case Fl:
        F($, j, te, ye);
        break;
      case wi:
        L($, j, te, ye);
        break;
      case Ic:
        $ == null && W(j, te, ye, we);
        break;
      case Ue:
        X(
          $,
          j,
          te,
          ye,
          me,
          be,
          we,
          ke,
          Se
        );
        break;
      default:
        Ae & 1 ? O(
          $,
          j,
          te,
          ye,
          me,
          be,
          we,
          ke,
          Se
        ) : Ae & 6 ? U(
          $,
          j,
          te,
          ye,
          me,
          be,
          we,
          ke,
          Se
        ) : (Ae & 64 || Ae & 128) && ue.process(
          $,
          j,
          te,
          ye,
          me,
          be,
          we,
          ke,
          Se,
          cn
        );
    }
    Re != null && me ? Pa(Re, $ && $.ref, be, j || $, !j) : Re == null && $ && $.ref != null && Pa($.ref, null, be, $, !0);
  }, F = ($, j, te, ye) => {
    if ($ == null)
      r(
        j.el = f(j.children),
        te,
        ye
      );
    else {
      const me = j.el = $.el;
      j.children !== $.children && b(me, j.children);
    }
  }, L = ($, j, te, ye) => {
    $ == null ? r(
      j.el = d(j.children || ""),
      te,
      ye
    ) : j.el = $.el;
  }, W = ($, j, te, ye) => {
    [$.el, $.anchor] = k(
      $.children,
      j,
      te,
      ye,
      $.el,
      $.anchor
    );
  }, I = ({ el: $, anchor: j }, te, ye) => {
    let me;
    for (; $ && $ !== j; )
      me = x($), r($, te, ye), $ = me;
    r(j, te, ye);
  }, z = ({ el: $, anchor: j }) => {
    let te;
    for (; $ && $ !== j; )
      te = x($), o($), $ = te;
    o(j);
  }, O = ($, j, te, ye, me, be, we, ke, Se) => {
    if (j.type === "svg" ? we = "svg" : j.type === "math" && (we = "mathml"), $ == null)
      R(
        j,
        te,
        ye,
        me,
        be,
        we,
        ke,
        Se
      );
    else {
      const ue = $.el && $.el._isVueCE ? $.el : null;
      try {
        ue && ue._beginPatch(), ve(
          $,
          j,
          me,
          be,
          we,
          ke,
          Se
        );
      } finally {
        ue && ue._endPatch();
      }
    }
  }, R = ($, j, te, ye, me, be, we, ke) => {
    let Se, ue;
    const { props: Re, shapeFlag: Ae, transition: De, dirs: p } = $;
    if (Se = $.el = c(
      $.type,
      be,
      Re && Re.is,
      Re
    ), Ae & 8 ? g(Se, $.children) : Ae & 16 && ee(
      $.children,
      Se,
      null,
      ye,
      me,
      Cc($, be),
      we,
      ke
    ), p && Ci($, null, ye, "created"), G(Se, $, $.scopeId, we, ye), Re) {
      for (const it in Re)
        it !== "value" && !ka(it) && a(Se, it, null, Re[it], be, ye);
      "value" in Re && a(Se, "value", null, Re.value, be), (ue = Re.onVnodeBeforeMount) && yr(ue, ye, $);
    }
    p && Ci($, null, ye, "beforeMount");
    const Ee = i_(me, De);
    Ee && De.beforeEnter(Se), r(Se, j, te), ((ue = Re && Re.onVnodeMounted) || Ee || p) && Dn(() => {
      try {
        ue && yr(ue, ye, $), Ee && De.enter(Se), p && Ci($, null, ye, "mounted");
      } finally {
      }
    }, me);
  }, G = ($, j, te, ye, me) => {
    if (te && M($, te), ye)
      for (let be = 0; be < ye.length; be++)
        M($, ye[be]);
    if (me) {
      let be = me.subTree;
      if (j === be || Xm(be.type) && (be.ssContent === j || be.ssFallback === j)) {
        const we = me.vnode;
        G(
          $,
          we,
          we.scopeId,
          we.slotScopeIds,
          me.parent
        );
      }
    }
  }, ee = ($, j, te, ye, me, be, we, ke, Se = 0) => {
    for (let ue = Se; ue < $.length; ue++) {
      const Re = $[ue] = ke ? qr($[ue]) : Sr($[ue]);
      _(
        null,
        Re,
        j,
        te,
        ye,
        me,
        be,
        we,
        ke
      );
    }
  }, ve = ($, j, te, ye, me, be, we) => {
    const ke = j.el = $.el;
    let { patchFlag: Se, dynamicChildren: ue, dirs: Re } = j;
    Se |= $.patchFlag & 16;
    const Ae = $.props || wt, De = j.props || wt;
    let p;
    if (te && Ii(te, !1), (p = De.onVnodeBeforeUpdate) && yr(p, te, j, $), Re && Ci(j, $, te, "beforeUpdate"), te && Ii(te, !0), (Ae.innerHTML && De.innerHTML == null || Ae.textContent && De.textContent == null) && g(ke, ""), ue ? T(
      $.dynamicChildren,
      ue,
      ke,
      te,
      ye,
      Cc(j, me),
      be
    ) : we || E(
      $,
      j,
      ke,
      null,
      te,
      ye,
      Cc(j, me),
      be,
      !1
    ), Se > 0) {
      if (Se & 16)
        N(ke, Ae, De, te, me);
      else if (Se & 2 && Ae.class !== De.class && a(ke, "class", null, De.class, me), Se & 4 && a(ke, "style", Ae.style, De.style, me), Se & 8) {
        const Ee = j.dynamicProps;
        for (let it = 0; it < Ee.length; it++) {
          const We = Ee[it], st = Ae[We], Et = De[We];
          (Et !== st || We === "value") && a(ke, We, st, Et, me, te);
        }
      }
      Se & 1 && $.children !== j.children && g(ke, j.children);
    } else !we && ue == null && N(ke, Ae, De, te, me);
    ((p = De.onVnodeUpdated) || Re) && Dn(() => {
      p && yr(p, te, j, $), Re && Ci(j, $, te, "updated");
    }, ye);
  }, T = ($, j, te, ye, me, be, we) => {
    for (let ke = 0; ke < j.length; ke++) {
      const Se = $[ke], ue = j[ke], Re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Se.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Se.type === Ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !fa(Se, ue) || // - In the case of a component, it could contain anything.
        Se.shapeFlag & 198) ? w(Se.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      _(
        Se,
        ue,
        Re,
        null,
        ye,
        me,
        be,
        we,
        !0
      );
    }
  }, N = ($, j, te, ye, me) => {
    if (j !== te) {
      if (j !== wt)
        for (const be in j)
          !ka(be) && !(be in te) && a(
            $,
            be,
            j[be],
            null,
            me,
            ye
          );
      for (const be in te) {
        if (ka(be)) continue;
        const we = te[be], ke = j[be];
        we !== ke && be !== "value" && a($, be, ke, we, me, ye);
      }
      "value" in te && a($, "value", j.value, te.value, me);
    }
  }, X = ($, j, te, ye, me, be, we, ke, Se) => {
    const ue = j.el = $ ? $.el : f(""), Re = j.anchor = $ ? $.anchor : f("");
    let { patchFlag: Ae, dynamicChildren: De, slotScopeIds: p } = j;
    p && (ke = ke ? ke.concat(p) : p), $ == null ? (r(ue, te, ye), r(Re, te, ye), ee(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      te,
      Re,
      me,
      be,
      we,
      ke,
      Se
    )) : Ae > 0 && Ae & 64 && De && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    $.dynamicChildren && $.dynamicChildren.length === De.length ? (T(
      $.dynamicChildren,
      De,
      te,
      me,
      be,
      we,
      ke
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || me && j === me.subTree) && Um(
      $,
      j,
      !0
      /* shallow */
    )) : E(
      $,
      j,
      te,
      Re,
      me,
      be,
      we,
      ke,
      Se
    );
  }, U = ($, j, te, ye, me, be, we, ke, Se) => {
    j.slotScopeIds = ke, $ == null ? j.shapeFlag & 512 ? me.ctx.activate(
      j,
      te,
      ye,
      we,
      Se
    ) : q(
      j,
      te,
      ye,
      me,
      be,
      we,
      Se
    ) : Y($, j, Se);
  }, q = ($, j, te, ye, me, be, we) => {
    const ke = $.component = d_(
      $,
      ye,
      me
    );
    if (Cm($) && (ke.ctx.renderer = cn), p_(ke, !1, we), ke.asyncDep) {
      if (me && me.registerDep(ke, ne, we), !$.el) {
        const Se = ke.subTree = Fe(wi);
        L(null, Se, j, te), $.placeholder = Se.el;
      }
    } else
      ne(
        ke,
        $,
        j,
        te,
        me,
        be,
        we
      );
  }, Y = ($, j, te) => {
    const ye = j.component = $.component;
    if (Yv($, j, te))
      if (ye.asyncDep && !ye.asyncResolved) {
        J(ye, j, te);
        return;
      } else
        ye.next = j, ye.update();
    else
      j.el = $.el, ye.vnode = j;
  }, ne = ($, j, te, ye, me, be, we) => {
    const ke = () => {
      if ($.isMounted) {
        let { next: Ae, bu: De, u: p, parent: Ee, vnode: it } = $;
        {
          const vt = Wm($);
          if (vt) {
            Ae && (Ae.el = it.el, J($, Ae, we)), vt.asyncDep.then(() => {
              Dn(() => {
                $.isUnmounted || ue();
              }, me);
            });
            return;
          }
        }
        let We = Ae, st;
        Ii($, !1), Ae ? (Ae.el = it.el, J($, Ae, we)) : Ae = it, De && Fs(De), (st = Ae.props && Ae.props.onVnodeBeforeUpdate) && yr(st, Ee, Ae, it), Ii($, !0);
        const Et = Nh($), on = $.subTree;
        $.subTree = Et, _(
          on,
          Et,
          // parent may have changed if it's in a teleport
          w(on.el),
          // anchor may have changed if it's in a fragment
          Bn(on),
          $,
          me,
          be
        ), Ae.el = Et.el, We === null && Xv($, Et.el), p && Dn(p, me), (st = Ae.props && Ae.props.onVnodeUpdated) && Dn(
          () => yr(st, Ee, Ae, it),
          me
        );
      } else {
        let Ae;
        const { el: De, props: p } = j, { bm: Ee, m: it, parent: We, root: st, type: Et } = $, on = Aa(j);
        Ii($, !1), Ee && Fs(Ee), !on && (Ae = p && p.onVnodeBeforeMount) && yr(Ae, We, j), Ii($, !0);
        {
          st.ce && st.ce._hasShadowRoot() && st.ce._injectChildStyle(
            Et,
            $.parent ? $.parent.type : void 0
          );
          const vt = $.subTree = Nh($);
          _(
            null,
            vt,
            te,
            ye,
            $,
            me,
            be
          ), j.el = vt.el;
        }
        if (it && Dn(it, me), !on && (Ae = p && p.onVnodeMounted)) {
          const vt = j;
          Dn(
            () => yr(Ae, We, vt),
            me
          );
        }
        (j.shapeFlag & 256 || We && Aa(We.vnode) && We.vnode.shapeFlag & 256) && $.a && Dn($.a, me), $.isMounted = !0, j = te = ye = null;
      }
    };
    $.scope.on();
    const Se = $.effect = new om(ke);
    $.scope.off();
    const ue = $.update = Se.run.bind(Se), Re = $.job = Se.runIfDirty.bind(Se);
    Re.i = $, Re.id = $.uid, Se.scheduler = () => rf(Re), Ii($, !0), ue();
  }, J = ($, j, te) => {
    j.component = $;
    const ye = $.vnode.props;
    $.vnode = j, $.next = null, Jv($, j.props, ye, te), t_($, j.children, te), ti(), bh($), ni();
  }, E = ($, j, te, ye, me, be, we, ke, Se = !1) => {
    const ue = $ && $.children, Re = $ ? $.shapeFlag : 0, Ae = j.children, { patchFlag: De, shapeFlag: p } = j;
    if (De > 0) {
      if (De & 128) {
        H(
          ue,
          Ae,
          te,
          ye,
          me,
          be,
          we,
          ke,
          Se
        );
        return;
      } else if (De & 256) {
        Le(
          ue,
          Ae,
          te,
          ye,
          me,
          be,
          we,
          ke,
          Se
        );
        return;
      }
    }
    p & 8 ? (Re & 16 && Zt(ue, me, be), Ae !== ue && g(te, Ae)) : Re & 16 ? p & 16 ? H(
      ue,
      Ae,
      te,
      ye,
      me,
      be,
      we,
      ke,
      Se
    ) : Zt(ue, me, be, !0) : (Re & 8 && g(te, ""), p & 16 && ee(
      Ae,
      te,
      ye,
      me,
      be,
      we,
      ke,
      Se
    ));
  }, Le = ($, j, te, ye, me, be, we, ke, Se) => {
    $ = $ || Po, j = j || Po;
    const ue = $.length, Re = j.length, Ae = Math.min(ue, Re);
    let De;
    for (De = 0; De < Ae; De++) {
      const p = j[De] = Se ? qr(j[De]) : Sr(j[De]);
      _(
        $[De],
        p,
        te,
        null,
        me,
        be,
        we,
        ke,
        Se
      );
    }
    ue > Re ? Zt(
      $,
      me,
      be,
      !0,
      !1,
      Ae
    ) : ee(
      j,
      te,
      ye,
      me,
      be,
      we,
      ke,
      Se,
      Ae
    );
  }, H = ($, j, te, ye, me, be, we, ke, Se) => {
    let ue = 0;
    const Re = j.length;
    let Ae = $.length - 1, De = Re - 1;
    for (; ue <= Ae && ue <= De; ) {
      const p = $[ue], Ee = j[ue] = Se ? qr(j[ue]) : Sr(j[ue]);
      if (fa(p, Ee))
        _(
          p,
          Ee,
          te,
          null,
          me,
          be,
          we,
          ke,
          Se
        );
      else
        break;
      ue++;
    }
    for (; ue <= Ae && ue <= De; ) {
      const p = $[Ae], Ee = j[De] = Se ? qr(j[De]) : Sr(j[De]);
      if (fa(p, Ee))
        _(
          p,
          Ee,
          te,
          null,
          me,
          be,
          we,
          ke,
          Se
        );
      else
        break;
      Ae--, De--;
    }
    if (ue > Ae) {
      if (ue <= De) {
        const p = De + 1, Ee = p < Re ? j[p].el : ye;
        for (; ue <= De; )
          _(
            null,
            j[ue] = Se ? qr(j[ue]) : Sr(j[ue]),
            te,
            Ee,
            me,
            be,
            we,
            ke,
            Se
          ), ue++;
      }
    } else if (ue > De)
      for (; ue <= Ae; )
        He($[ue], me, be, !0), ue++;
    else {
      const p = ue, Ee = ue, it = /* @__PURE__ */ new Map();
      for (ue = Ee; ue <= De; ue++) {
        const Ht = j[ue] = Se ? qr(j[ue]) : Sr(j[ue]);
        Ht.key != null && it.set(Ht.key, ue);
      }
      let We, st = 0;
      const Et = De - Ee + 1;
      let on = !1, vt = 0;
      const Oe = new Array(Et);
      for (ue = 0; ue < Et; ue++) Oe[ue] = 0;
      for (ue = p; ue <= Ae; ue++) {
        const Ht = $[ue];
        if (st >= Et) {
          He(Ht, me, be, !0);
          continue;
        }
        let un;
        if (Ht.key != null)
          un = it.get(Ht.key);
        else
          for (We = Ee; We <= De; We++)
            if (Oe[We - Ee] === 0 && fa(Ht, j[We])) {
              un = We;
              break;
            }
        un === void 0 ? He(Ht, me, be, !0) : (Oe[un - Ee] = ue + 1, un >= vt ? vt = un : on = !0, _(
          Ht,
          j[un],
          te,
          null,
          me,
          be,
          we,
          ke,
          Se
        ), st++);
      }
      const Un = on ? o_(Oe) : Po;
      for (We = Un.length - 1, ue = Et - 1; ue >= 0; ue--) {
        const Ht = Ee + ue, un = j[Ht], Dr = j[Ht + 1], Lr = Ht + 1 < Re ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Dr.el || Ym(Dr)
        ) : ye;
        Oe[ue] === 0 ? _(
          null,
          un,
          te,
          Lr,
          me,
          be,
          we,
          ke,
          Se
        ) : on && (We < 0 || ue !== Un[We] ? Ne(un, te, Lr, 2) : We--);
      }
    }
  }, Ne = ($, j, te, ye, me = null) => {
    const { el: be, type: we, transition: ke, children: Se, shapeFlag: ue } = $;
    if (ue & 6) {
      Ne($.component.subTree, j, te, ye);
      return;
    }
    if (ue & 128) {
      $.suspense.move(j, te, ye);
      return;
    }
    if (ue & 64) {
      we.move($, j, te, cn);
      return;
    }
    if (we === Ue) {
      r(be, j, te);
      for (let Ae = 0; Ae < Se.length; Ae++)
        Ne(Se[Ae], j, te, ye);
      r($.anchor, j, te);
      return;
    }
    if (we === Ic) {
      I($, j, te);
      return;
    }
    if (ye !== 2 && ue & 1 && ke)
      if (ye === 0)
        ke.beforeEnter(be), r(be, j, te), Dn(() => ke.enter(be), me);
      else {
        const { leave: Ae, delayLeave: De, afterLeave: p } = ke, Ee = () => {
          $.ctx.isUnmounted ? o(be) : r(be, j, te);
        }, it = () => {
          be._isLeaving && be[wv](
            !0
            /* cancelled */
          ), Ae(be, () => {
            Ee(), p && p();
          });
        };
        De ? De(be, Ee, it) : it();
      }
    else
      r(be, j, te);
  }, He = ($, j, te, ye = !1, me = !1) => {
    const {
      type: be,
      props: we,
      ref: ke,
      children: Se,
      dynamicChildren: ue,
      shapeFlag: Re,
      patchFlag: Ae,
      dirs: De,
      cacheIndex: p,
      memo: Ee
    } = $;
    if (Ae === -2 && (me = !1), ke != null && (ti(), Pa(ke, null, te, $, !0), ni()), p != null && (j.renderCache[p] = void 0), Re & 256) {
      j.ctx.deactivate($);
      return;
    }
    const it = Re & 1 && De, We = !Aa($);
    let st;
    if (We && (st = we && we.onVnodeBeforeUnmount) && yr(st, j, $), Re & 6)
      rt($.component, te, ye);
    else {
      if (Re & 128) {
        $.suspense.unmount(te, ye);
        return;
      }
      it && Ci($, null, j, "beforeUnmount"), Re & 64 ? $.type.remove(
        $,
        j,
        te,
        cn,
        ye
      ) : ue && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ue.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (be !== Ue || Ae > 0 && Ae & 64) ? Zt(
        ue,
        j,
        te,
        !1,
        !0
      ) : (be === Ue && Ae & 384 || !me && Re & 16) && Zt(Se, j, te), ye && nt($);
    }
    const Et = Ee != null && p == null;
    (We && (st = we && we.onVnodeUnmounted) || it || Et) && Dn(() => {
      st && yr(st, j, $), it && Ci($, null, j, "unmounted"), Et && ($.el = null);
    }, te);
  }, nt = ($) => {
    const { type: j, el: te, anchor: ye, transition: me } = $;
    if (j === Ue) {
      pt(te, ye);
      return;
    }
    if (j === Ic) {
      z($);
      return;
    }
    const be = () => {
      o(te), me && !me.persisted && me.afterLeave && me.afterLeave();
    };
    if ($.shapeFlag & 1 && me && !me.persisted) {
      const { leave: we, delayLeave: ke } = me, Se = () => we(te, be);
      ke ? ke($.el, be, Se) : Se();
    } else
      be();
  }, pt = ($, j) => {
    let te;
    for (; $ !== j; )
      te = x($), o($), $ = te;
    o(j);
  }, rt = ($, j, te) => {
    const { bum: ye, scope: me, job: be, subTree: we, um: ke, m: Se, a: ue } = $;
    Ch(Se), Ch(ue), ye && Fs(ye), me.stop(), be && (be.flags |= 8, He(we, $, j, te)), ke && Dn(ke, j), Dn(() => {
      $.isUnmounted = !0;
    }, j);
  }, Zt = ($, j, te, ye = !1, me = !1, be = 0) => {
    for (let we = be; we < $.length; we++)
      He($[we], j, te, ye, me);
  }, Bn = ($) => {
    if ($.shapeFlag & 6)
      return Bn($.component.subTree);
    if ($.shapeFlag & 128)
      return $.suspense.next();
    const j = x($.anchor || $.el), te = j && j[vv];
    return te ? x(te) : j;
  };
  let kt = !1;
  const Ut = ($, j, te) => {
    let ye;
    $ == null ? j._vnode && (He(j._vnode, null, null, !0), ye = j._vnode.component) : _(
      j._vnode || null,
      $,
      j,
      null,
      null,
      null,
      te
    ), j._vnode = $, kt || (kt = !0, bh(ye), xm(), kt = !1);
  }, cn = {
    p: _,
    um: He,
    m: Ne,
    r: nt,
    mt: q,
    mc: ee,
    pc: E,
    pbc: T,
    n: Bn,
    o: e
  };
  return {
    render: Ut,
    hydrate: void 0,
    createApp: Hv(Ut)
  };
}
function Cc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ii({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function i_(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Um(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (qe(r) && qe(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let f = o[a];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = o[a] = qr(o[a]), f.el = c.el), !n && f.patchFlag !== -2 && Um(c, f)), f.type === Fl && (f.patchFlag === -1 && (f = o[a] = qr(f)), f.el = c.el), f.type === wi && !f.el && (f.el = c.el);
    }
}
function o_(e) {
  const t = e.slice(), n = [0];
  let r, o, a, c, f;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const b = e[r];
    if (b !== 0) {
      if (o = n[n.length - 1], e[o] < b) {
        t[r] = o, n.push(r);
        continue;
      }
      for (a = 0, c = n.length - 1; a < c; )
        f = a + c >> 1, e[n[f]] < b ? a = f + 1 : c = f;
      b < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, c = n[a - 1]; a-- > 0; )
    n[a] = c, c = t[c];
  return n;
}
function Wm(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Wm(t);
}
function Ch(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ym(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ym(t.subTree) : null;
}
const Xm = (e) => e.__isSuspense;
function a_(e, t) {
  t && t.pendingBranch ? qe(e) ? t.effects.push(...e) : t.effects.push(e) : pv(e);
}
const Ue = /* @__PURE__ */ Symbol.for("v-fgt"), Fl = /* @__PURE__ */ Symbol.for("v-txt"), wi = /* @__PURE__ */ Symbol.for("v-cmt"), Ic = /* @__PURE__ */ Symbol.for("v-stc"), Ia = [];
let Kn = null;
function ae(e = !1) {
  Ia.push(Kn = e ? null : []);
}
function s_() {
  Ia.pop(), Kn = Ia[Ia.length - 1] || null;
}
let Ta = 1;
function Ih(e, t = !1) {
  Ta += e, e < 0 && Kn && t && (Kn.hasOnce = !0);
}
function qm(e) {
  return e.dynamicChildren = Ta > 0 ? Kn || Po : null, s_(), Ta > 0 && Kn && Kn.push(e), e;
}
function fe(e, t, n, r, o, a) {
  return qm(
    B(
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
function Tr(e, t, n, r, o) {
  return qm(
    Fe(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Jm(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function fa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Zm = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Bt(e) || /* @__PURE__ */ vn(e) || Ze(e) ? { i: Gn, r: e, k: t, f: !!n } : e : null);
function B(e, t = null, n = null, r = 0, o = null, a = e === Ue ? 0 : 1, c = !1, f = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zm(t),
    ref: t && Ds(t),
    scopeId: km,
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
  return f ? (lf(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= Bt(n) ? 8 : 16), Ta > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Kn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Kn.push(d), d;
}
const Fe = l_;
function l_(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Om) && (e = wi), Jm(e)) {
    const f = Vo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && lf(f, n), Ta > 0 && !a && Kn && (f.shapeFlag & 6 ? Kn[Kn.indexOf(e)] = f : Kn.push(f)), f.patchFlag = -2, f;
  }
  if (v_(e) && (e = e.__vccOpts), t) {
    t = c_(t);
    let { class: f, style: d } = t;
    f && !Bt(f) && (t.class = at(f)), bt(d) && (/* @__PURE__ */ tf(d) && !qe(d) && (d = _n({}, d)), t.style = xt(d));
  }
  const c = Bt(e) ? 1 : Xm(e) ? 128 : _v(e) ? 64 : bt(e) ? 4 : Ze(e) ? 2 : 0;
  return B(
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
function c_(e) {
  return e ? /* @__PURE__ */ tf(e) || zm(e) ? _n({}, e) : e : null;
}
function Vo(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: f, transition: d } = e, b = t ? bi(o || {}, t) : o, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && Zm(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? qe(a) ? a.concat(Ds(t)) : [a, Ds(t)] : Ds(t)
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
    patchFlag: t && e.type !== Ue ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && Vo(e.ssContent),
    ssFallback: e.ssFallback && Vo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && of(
    g,
    d.clone(g)
  ), g;
}
function ba(e = " ", t = 0) {
  return Fe(Fl, null, e, t);
}
function ct(e = "", t = !1) {
  return t ? (ae(), Tr(wi, null, e)) : Fe(wi, null, e);
}
function Sr(e) {
  return e == null || typeof e == "boolean" ? Fe(wi) : qe(e) ? Fe(
    Ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Jm(e) ? qr(e) : Fe(Fl, null, String(e));
}
function qr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Vo(e);
}
function lf(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (qe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), lf(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !zm(t) ? t._ctx = Gn : o === 3 && Gn && (Gn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ze(t) ? (t = { default: t, _ctx: Gn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ba(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function bi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = at([t.class, r.class]));
      else if (o === "style")
        t.style = xt([t.style, r.style]);
      else if (Sl(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(qe(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !kl(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function yr(e, t, n, r = null) {
  Er(e, t, 7, [
    n,
    r
  ]);
}
const u_ = Dm();
let f_ = 0;
function d_(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || u_, a = {
    uid: f_++,
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
    scope: new R1(
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
    propsOptions: Hm(r, o),
    emitsOptions: Lm(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: wt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: wt,
    data: wt,
    props: wt,
    attrs: wt,
    slots: wt,
    refs: wt,
    setupState: wt,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Kv.bind(null, a), e.ce && e.ce(a), a;
}
let bn = null;
const h_ = () => bn || Gn;
let rl, gu;
{
  const e = Pl(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  rl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => bn = n
  ), gu = t(
    "__VUE_SSR_SETTERS__",
    (n) => Da = n
  );
}
const Ba = (e) => {
  const t = bn;
  return rl(e), e.scope.on(), () => {
    e.scope.off(), rl(t);
  };
}, Eh = () => {
  bn && bn.scope.off(), rl(null);
};
function Qm(e) {
  return e.vnode.shapeFlag & 4;
}
let Da = !1;
function p_(e, t = !1, n = !1) {
  t && gu(t);
  const { props: r, children: o } = e.vnode, a = Qm(e);
  qv(e, r, a, t), e_(e, o, n || t);
  const c = a ? m_(e, t) : void 0;
  return t && gu(!1), c;
}
function m_(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dv);
  const { setup: r } = n;
  if (r) {
    ti();
    const o = e.setupContext = r.length > 1 ? y_(e) : null, a = Ba(e), c = Ga(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), f = Zp(c);
    if (ni(), a(), (f || e.sp) && !Aa(e) && Am(e), f) {
      if (c.then(Eh, Eh), t)
        return c.then((d) => {
          Oh(e, d);
        }).catch((d) => {
          Cl(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Oh(e, c);
  } else
    eg(e);
}
function Oh(e, t, n) {
  Ze(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : bt(t) && (e.setupState = vm(t)), eg(e);
}
function eg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Cr);
  {
    const o = Ba(e);
    ti();
    try {
      Lv(e);
    } finally {
      ni(), o();
    }
  }
}
const g_ = {
  get(e, t) {
    return yn(e, "get", ""), e[t];
  }
};
function y_(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, g_),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Tl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vm(iv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ca)
        return Ca[n](e);
    },
    has(t, n) {
      return n in t || n in Ca;
    }
  })) : e.proxy;
}
function b_(e, t = !0) {
  return Ze(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function v_(e) {
  return Ze(e) && "__vccOpts" in e;
}
const ft = (e, t) => /* @__PURE__ */ cv(e, t, Da), __ = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let yu;
const Fh = typeof window < "u" && window.trustedTypes;
if (Fh)
  try {
    yu = /* @__PURE__ */ Fh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const tg = yu ? (e) => yu.createHTML(e) : (e) => e, w_ = "http://www.w3.org/2000/svg", x_ = "http://www.w3.org/1998/Math/MathML", Wr = typeof document < "u" ? document : null, Th = Wr && /* @__PURE__ */ Wr.createElement("template"), S_ = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Wr.createElementNS(w_, e) : t === "mathml" ? Wr.createElementNS(x_, e) : n ? Wr.createElement(e, { is: n }) : Wr.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Wr.createTextNode(e),
  createComment: (e) => Wr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Wr.querySelector(e),
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
      Th.innerHTML = tg(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Th.content;
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
}, k_ = /* @__PURE__ */ Symbol("_vtc");
function M_(e, t, n) {
  const r = e[k_];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const il = /* @__PURE__ */ Symbol("_vod"), ng = /* @__PURE__ */ Symbol("_vsh"), Bo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[il] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : da(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), da(e, !0), r.enter(e)) : r.leave(e, () => {
      da(e, !1);
    }) : da(e, t));
  },
  beforeUnmount(e, { value: t }) {
    da(e, t);
  }
};
function da(e, t) {
  e.style.display = t ? e[il] : "none", e[ng] = !t;
}
const N_ = /* @__PURE__ */ Symbol(""), P_ = /(?:^|;)\s*display\s*:/;
function A_(e, t, n) {
  const r = e.style, o = Bt(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (Bt(t))
        for (const c of t.split(";")) {
          const f = c.slice(0, c.indexOf(":")).trim();
          n[f] == null && Ls(r, f, "");
        }
      else
        for (const c in t)
          n[c] == null && Ls(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), Ls(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[N_];
      c && (n += ";" + c), r.cssText = n, a = P_.test(n);
    }
  } else t && e.removeAttribute("style");
  il in e && (e[il] = a ? r.display : "", e[ng] && (r.display = "none"));
}
const Dh = /\s*!important$/;
function Ls(e, t, n) {
  if (qe(n))
    n.forEach((r) => Ls(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = C_(e, t);
    Dh.test(n) ? e.setProperty(
      Zi(r),
      n.replace(Dh, ""),
      "important"
    ) : e[r] = n;
  }
}
const Lh = ["Webkit", "Moz", "ms"], Ec = {};
function C_(e, t) {
  const n = Ec[t];
  if (n)
    return n;
  let r = Pn(t);
  if (r !== "filter" && r in e)
    return Ec[t] = r;
  r = Nl(r);
  for (let o = 0; o < Lh.length; o++) {
    const a = Lh[o] + r;
    if (a in e)
      return Ec[t] = a;
  }
  return t;
}
const Rh = "http://www.w3.org/1999/xlink";
function $h(e, t, n, r, o, a = D1(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Rh, t.slice(6, t.length)) : e.setAttributeNS(Rh, t, n) : n == null || a && !nm(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Ir(n) ? String(n) : n
  );
}
function Vh(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? tg(n) : n);
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
    f === "boolean" ? n = nm(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function wo(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function I_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const zh = /* @__PURE__ */ Symbol("_vei");
function E_(e, t, n, r, o = null) {
  const a = e[zh] || (e[zh] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [f, d] = O_(t);
    if (r) {
      const b = a[t] = D_(
        r,
        o
      );
      wo(e, f, b, d);
    } else c && (I_(e, f, c, d), a[t] = void 0);
  }
}
const jh = /(?:Once|Passive|Capture)$/;
function O_(e) {
  let t;
  if (jh.test(e)) {
    t = {};
    let r;
    for (; r = e.match(jh); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Zi(e.slice(2)), t];
}
let Oc = 0;
const F_ = /* @__PURE__ */ Promise.resolve(), T_ = () => Oc || (F_.then(() => Oc = 0), Oc = Date.now());
function D_(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Er(
      L_(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = T_(), n;
}
function L_(e, t) {
  if (qe(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Hh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, R_ = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? M_(e, r, c) : t === "style" ? A_(e, n, r) : Sl(t) ? kl(t) || E_(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $_(e, t, r, c)) ? (Vh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && $h(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (V_(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Bt(r))) ? Vh(e, Pn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), $h(e, t, r, c));
};
function $_(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Hh(t) && Ze(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Hh(t) && Bt(n) ? !1 : t in e;
}
function V_(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Pn(t);
  return Array.isArray(n) ? n.some((o) => Pn(o) === r) : Object.keys(n).some((o) => Pn(o) === r);
}
const Gh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return qe(t) ? (n) => Fs(t, n) : t;
};
function z_(e) {
  e.target.composing = !0;
}
function Kh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Fc = /* @__PURE__ */ Symbol("_assign");
function Bh(e, t, n) {
  return t && (e = e.trim()), n && (e = Wu(e)), e;
}
const Uh = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Fc] = Gh(o);
    const a = r || o.props && o.props.type === "number";
    wo(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Fc](Bh(e.value, n, a));
    }), (n || a) && wo(e, "change", () => {
      e.value = Bh(e.value, n, a);
    }), t || (wo(e, "compositionstart", z_), wo(e, "compositionend", Kh), wo(e, "change", Kh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[Fc] = Gh(c), e.composing) return;
    const f = (a || e.type === "number") && !/^0\d/.test(e.value) ? Wu(e.value) : e.value, d = t ?? "";
    if (f === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, j_ = ["ctrl", "shift", "alt", "meta"], H_ = {
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
  exact: (e, t) => j_.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ct = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const f = H_[t[c]];
      if (f && f(o, t)) return;
    }
    return e(o, ...a);
  }));
}, G_ = /* @__PURE__ */ _n({ patchProp: R_ }, S_);
let Wh;
function K_() {
  return Wh || (Wh = n_(G_));
}
const cf = ((...e) => {
  const t = K_().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = U_(r);
    if (!o) return;
    const a = t._component;
    !Ze(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, B_(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function B_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function U_(e) {
  return Bt(e) ? document.querySelector(e) : e;
}
function xo(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function W_() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Yh(e, t = 8) {
  var g;
  const n = (g = e == null ? void 0 : e.getContext) == null ? void 0 : g.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let c = r, f = o, d = -1, b = -1;
  for (let w = 0; w < o; w += 1)
    for (let x = 0; x < r; x += 1)
      a[(w * r + x) * 4 + 3] <= t || (x < c && (c = x), w < f && (f = w), x > d && (d = x), w > b && (b = w));
  return d < c || b < f ? null : {
    minX: c,
    minY: f,
    maxX: d,
    maxY: b,
    width: d - c + 1,
    height: b - f + 1,
    aspect: Number(((d - c + 1) / Math.max(1, b - f + 1)).toFixed(4))
  };
}
function uf(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Yr(e, t, n) {
  if (!e) return xo(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Ot(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Tc = null, Dc = null, Xh = null, qh = null, $t = null, ha = null, kn = null, pi = null;
function Y_() {
  if (Dc) return Dc;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Dc = n, n;
}
function Lc(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Tc = Yr(Tc, n, r);
  const o = Tc;
  Ot(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", qh !== o.ctx && (Xh = o.ctx.createPattern(Y_(), "repeat"), qh = o.ctx), o.ctx.fillStyle = Xh, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function X_(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function q_(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function J_(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Z_(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ft = /* @__PURE__ */ new Map(), ff = 128;
function Q_(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), d = `${c}:${f.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Ft.has(d)) {
    const W = Ft.get(d);
    return Ft.delete(d), Ft.set(d, W), W;
  }
  Ft.size >= ff && Ft.delete(Ft.keys().next().value);
  const b = c * 2 + 2, g = c + 1, w = uf(b, b), x = w.getContext("2d"), M = f * c, k = c + 1, _ = `rgba(${n},${r},${o},${a})`, F = `rgba(${n},${r},${o},0)`, L = x.createRadialGradient(g, g, M, g, g, k);
  return L.addColorStop(0, _), L.addColorStop(1, F), x.fillStyle = L, x.fillRect(0, 0, b, b), Ft.set(d, w), w;
}
function ew(e, t, n, r, o, a, c) {
  const { r: f, g: d, b, a: g } = r, w = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, o), k = Math.max(0, Math.min(0.99, a)), _ = Math.max(0, Math.min(1, c ?? 0)), F = `chisel:${w}:${x}:${n.toFixed(2)}:${f}:${d}:${b}:${g.toFixed(3)}:${M.toFixed(2)}:${k.toFixed(2)}:${_.toFixed(2)}`;
  if (Ft.has(F)) {
    const ee = Ft.get(F);
    return Ft.delete(F), Ft.set(F, ee), ee;
  }
  Ft.size >= ff && Ft.delete(Ft.keys().next().value);
  const L = uf(w, x), W = L.getContext("2d"), I = W.createImageData(w, x), z = I.data, O = Math.max(0, e - t), R = Math.max(0, Math.min(1, n)), G = 1 + M;
  for (let ee = 0; ee < x; ee++)
    for (let ve = 0; ve < w; ve++) {
      const T = ve + 0.5 - e, N = ee + 0.5 - t, X = Math.max(Math.abs(T) - O, 0), q = Math.hypot(X, N) / t;
      if (q >= 1) continue;
      const Y = q <= R ? 1 : Math.max(0, (1 - q) / Math.max(1e-4, 1 - R)), ne = 1 - q, J = 1 + M * (1 - ne) * (1 - ne), E = 1 - k * ne * ne, Le = J * E / G;
      let H = 1;
      if (_ > 0) {
        const nt = Math.floor((N + t) / 1.5), pt = Math.floor((T + e) / 8), rt = Bi(Eo(nt * 41 + 500, pt * 19 + 300));
        H = 1 - _ * 0.42 * rt;
      }
      const Ne = Math.round(255 * Math.min(1, g * Y * Le * H));
      if (Ne <= 0) continue;
      const He = (ee * w + ve) * 4;
      z[He] = f, z[He + 1] = d, z[He + 2] = b, z[He + 3] = Ne;
    }
  return W.putImageData(I, 0, 0), Ft.set(F, L), L;
}
function Eo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function Bi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function tw(e, t, n, r, o, a, c) {
  const f = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), g = Math.max(Math.abs(f) - b, 0), w = Math.hypot(g, d) / r;
  if (w >= 1) return 0;
  const x = Bi(Eo(e * 17 + 3, t * 13 + 7)), M = w + a * 0.22 * (x - 0.5);
  if (M >= 1) return 0;
  const k = M <= o ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - o)), _ = nw(e, t, f, d, n, r), F = a * 0.55;
  if (_ < F) return 0;
  const W = 0.45 + 0.55 * ((_ - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, c * k * W));
}
function nw(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), f = Math.floor((r + a) / 2), d = Bi(Eo(c * 13 + 700, f * 17 + 400)), b = Math.floor((n + o) / 1.5), g = Math.floor((r + a) / 1.5), w = Bi(Eo(b * 23 + 800, g * 29 + 500)), x = Bi(Eo(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + w * 0.3 + x * 0.15;
}
function rw(e, t, n, r, o) {
  const { r: a, g: c, b: f, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), w = Math.max(0, Math.min(1, o)), x = `crayon:${b}:${g}:${n.toFixed(2)}:${a}:${c}:${f}:${d.toFixed(3)}:${w.toFixed(2)}`;
  if (Ft.has(x)) {
    const W = Ft.get(x);
    return Ft.delete(x), Ft.set(x, W), W;
  }
  Ft.size >= ff && Ft.delete(Ft.keys().next().value);
  const M = uf(b, g), k = M.getContext("2d"), _ = k.createImageData(b, g), F = _.data, L = Math.max(0, Math.min(1, n));
  for (let W = 0; W < g; W++)
    for (let I = 0; I < b; I++) {
      const z = tw(I, W, e, t, L, w, d);
      if (z <= 0) continue;
      const O = (W * b + I) * 4;
      F[O] = a, F[O + 1] = c, F[O + 2] = f, F[O + 3] = z;
    }
  return k.putImageData(_, 0, 0), Ft.set(x, M), M;
}
function rg(e, t, n) {
  var _, F;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = J_(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = iw(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((_ = t == null ? void 0 : t.angle) == null ? void 0 : _.value) ?? 0), b = Z_(t, o), g = String(((F = t == null ? void 0 : t.targetSpace) == null ? void 0 : F.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && g !== "unwrap", x = t == null ? void 0 : t.scatter, M = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const L = o * f, W = o, I = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), z = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), O = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = ew(L, W, a, c, I, z, O);
  } else if (r === "crayon") {
    const L = o * f, W = o, I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = rw(L, W, a, c, I);
  } else
    k = Q_(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: b, desc: n, aspect: f, angle: d, stampKind: r, scatter: M, latitudeCorrection: w };
}
function iw(e) {
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
function ow(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function Jh(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function f(b, g) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, g - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, g), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && f(t + c, n), t + d > c && f(t - c, n);
}
function df(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: g } = e.scatter, w = b * e.radiusPx * o, x = Eo(t, n);
    for (let M = 0; M < g; M++) {
      const k = Bi(x + M * 2) * Math.PI * 2, _ = Math.sqrt(Bi(x + M * 2 + 1)) * w, F = t + Math.cos(k) * _, L = n + Math.sin(k) * _, W = Math.max(0.5, e.radiusPx * o * 0.48), I = (0.5 - L / Math.max(1, e.desc.height)) * Math.PI, z = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(I)) : 1, O = W * e.aspect * z;
      Jh(e, F, L, W, O);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * f;
  Jh(e, t, n, a, d);
}
function Zh(e, t, n) {
  const r = q_(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = rg(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let x = 0; x < r.length; x++) {
    let M = Number(r[x].u || 0) * o;
    const k = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(M - f[x - 1].x) > o * 0.5 && (M += M < f[x - 1].x ? o : -o), f.push({ x: M, y: k });
  }
  if (df(c, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let d = f[0], b = f[0], g = f[0], w = 0;
  for (let x = 1; x < f.length; x++) {
    const M = f[x], k = { x: (b.x + M.x) * 0.5, y: (b.y + M.y) * 0.5 };
    x === 1 ? w = La(c, g.x, g.y, k.x, k.y, w) : w = ol(c, d, g, k, M, w), d = b, b = M, g = k;
  }
  f.length === 2 ? La(c, g.x, g.y, b.x, b.y, w) : ol(c, d, g, b, b, w), e.restore();
}
function Rs(e, t, n) {
  var w;
  const r = Array.isArray((w = t == null ? void 0 : t.geometry) == null ? void 0 : w.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = ow(t), f = [];
  let d = 1 / 0, b = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const M = X_(r[x]);
    let k = Number(M.x || 0) * o;
    x > 0 && Math.abs(k - f[x - 1].x) > o * 0.5 && (k += k < f[x - 1].x ? o : -o), f.push({ x: k, y: Number(M.y || 0) * a }), k < d && (d = k), k > b && (b = k);
  }
  function g(x) {
    e.beginPath(), e.moveTo(f[0].x + x, f[0].y);
    for (let M = 1; M < f.length; M++) e.lineTo(f[M].x + x, f[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, g(0), d < 0 && g(o), b > o && g(-o), e.restore();
}
function ys(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Rs(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? Zh(e, t, n) : (ha = Yr(ha, n.width, n.height), Ot(ha), Zh(ha.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(ha.canvas, 0, 0), e.restore());
}
function Ei(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function La(e, t, n, r, o, a) {
  const c = r - t, f = o - n, d = Math.hypot(c, f);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const g = b / d;
    df(e, t + c * g, n + f * g, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function ol(e, t, n, r, o, a) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, g = 0, w = f, x = w + d, M = x + b, k = x - w, _ = 16;
  let F = a, L = n.x, W = n.y;
  for (let I = 1; I <= _; I++) {
    const z = w + k * I / _, O = ((w - z) * t.x + (z - g) * n.x) / (w - g), R = ((w - z) * t.y + (z - g) * n.y) / (w - g), G = ((x - z) * n.x + (z - w) * r.x) / (x - w), ee = ((x - z) * n.y + (z - w) * r.y) / (x - w), ve = ((M - z) * r.x + (z - x) * o.x) / (M - x), T = ((M - z) * r.y + (z - x) * o.y) / (M - x), N = ((x - z) * O + (z - g) * G) / (x - g), X = ((x - z) * R + (z - g) * ee) / (x - g), U = ((M - z) * G + (z - w) * ve) / (M - w), q = ((M - z) * ee + (z - w) * T) / (M - w), Y = ((x - z) * N + (z - w) * U) / (x - w), ne = ((x - z) * X + (z - w) * q) / (x - w);
    F = La(e, L, W, Y, ne, F), L = Y, W = ne;
  }
  return F;
}
function aw(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, f = n * a.height, d = e.activeStroke;
  let b = t * c;
  if (d && Math.abs(b - d.prev.x) > c * 0.5 && (b += b < d.prev.x ? c : -c), !d) {
    const M = rg(o, r, a), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), _ = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", L = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", df(M, b, f, 1), e.activeStroke = {
      pprev: { x: b, y: f },
      prev: { x: b, y: f },
      lastMidX: b,
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
      layerKind: L,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const g = (d.prev.x + b) * 0.5, w = (d.prev.y + f) * 0.5;
  o.globalCompositeOperation = "source-over";
  const x = {
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
  d.pointCount === 1 ? d.distSinceStamp = La(x, d.lastMidX, d.lastMidY, g, w, d.distSinceStamp) : d.distSinceStamp = ol(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: g, y: w },
    { x: b, y: f },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: f }, d.lastMidX = g, d.lastMidY = w, d.pointCount++, e.displayDirty = !0;
}
function bu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = xo(t, n), c = {
    descriptor: r,
    committedMask: xo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: xo(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = xo(t, n);
  let b = null, g = "", w = null;
  function x(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: xo(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function M(T) {
    let N = o.get(T);
    return N || (N = x(T), o.set(T, N)), N;
  }
  function k(T) {
    return g === "mask" ? c : b ? M(b) : f;
  }
  function _(T) {
    var ne;
    const N = !w || w.length !== T.length || T.some((J, E) => J !== w[E]), X = g === "paint" && ((ne = b ? o.get(b) : f) == null ? void 0 : ne.activeStroke) || null;
    let U = c.displayDirty || f.displayDirty || N;
    for (const J of T) {
      const E = o.get(J);
      if (E != null && E.displayDirty) {
        U = !0;
        break;
      }
    }
    if (X && (U = !0), !U) return;
    c.displayDirty = !1, f.displayDirty = !1;
    for (const J of T) {
      const E = o.get(J);
      E && (E.displayDirty = !1);
    }
    w = [...T];
    const q = d.ctx;
    Ot(d);
    const Y = !!(X != null && X.isEraser);
    for (const J of T) {
      const E = o.get(J);
      if (!E) continue;
      const H = b === E.actionGroupId && g === "paint" ? E.activeStroke : null;
      if (Y)
        $t = Yr($t, t, n), Ot($t), $t.ctx.drawImage(E.committedPaint.canvas, 0, 0), Ei($t.ctx, a.canvas), q.drawImage($t.canvas, 0, 0);
      else if (q.drawImage(E.committedPaint.canvas, 0, 0), H) {
        const Ne = E.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, H.strokeOpacity ?? 1));
        q.save(), q.globalAlpha = Ne, q.drawImage(a.canvas, 0, 0), q.restore();
      }
    }
  }
  function F(T) {
    var X, U, q, Y, ne;
    for (const J of o.values())
      Ot(J.committedPaint), Ot(J.currentStroke), J.activeStroke = null, J.displayDirty = !0;
    Ot(c.committedMask), Ot(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, f.displayDirty = !0, w = null;
    const N = [
      ...Array.isArray((U = (X = T == null ? void 0 : T.painting) == null ? void 0 : X.paint) == null ? void 0 : U.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((Y = (q = T == null ? void 0 : T.painting) == null ? void 0 : q.mask) == null ? void 0 : Y.strokes) ? T.painting.mask.strokes : []
    ];
    for (const J of N) {
      if (((ne = J == null ? void 0 : J.targetSpace) == null ? void 0 : ne.kind) !== "ERP_GLOBAL") continue;
      const E = String((J == null ? void 0 : J.layerKind) || "paint"), H = String((J == null ? void 0 : J.toolKind) || "pen") === "eraser";
      if (E === "mask") {
        const Ne = c.descriptor;
        H ? ($t = Yr($t, Ne.width, Ne.height), Ot($t), ys($t.ctx, J, Ne), Ei(c.committedMask.ctx, $t.canvas)) : ys(c.committedMask.ctx, J, Ne);
        continue;
      }
      if (H) {
        $t = Yr($t, r.width, r.height), Ot($t), ys($t.ctx, J, r);
        for (const Ne of o.values())
          Ei(Ne.committedPaint.ctx, $t.canvas), Ne.displayDirty = !0;
      } else {
        const Ne = String((J == null ? void 0 : J.actionGroupId) || "__default__"), He = M(Ne), nt = He.descriptor;
        ys(He.committedPaint.ctx, J, nt), He.displayDirty = !0;
      }
    }
    _([...o.keys()]);
  }
  function L(T, N) {
    g = String((T == null ? void 0 : T.layerKind) || "");
    const X = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (g === "mask")
      b = null, Ot(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const U = X ? f : M(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      b = X ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), Ot(U.currentStroke), U.activeStroke = null, U.displayDirty = !0;
    }
  }
  function W(T, N) {
    var E;
    const X = String((T == null ? void 0 : T.layerKind) || "paint"), U = String((T == null ? void 0 : T.toolKind) || "") === "eraser", q = X === "mask" ? c : U ? f : M(String((T == null ? void 0 : T.actionGroupId) || b || "__default__")), Y = q.activeStroke, ne = q.descriptor;
    if (Y && Y.pointCount > 1) {
      const Le = q.currentStroke.ctx;
      Le.globalCompositeOperation = "source-over";
      const H = {
        ctx: Le,
        stampTex: Y.stampTex,
        radiusPx: Y.radiusPx,
        spacingPx: Y.spacingPx,
        desc: ne,
        aspect: Y.aspect,
        angle: Y.angle,
        stampKind: Y.stampKind,
        scatter: Y.scatter,
        latitudeCorrection: Y.latitudeCorrection
      };
      Y.pointCount === 2 ? La(H, Y.lastMidX, Y.lastMidY, Y.prev.x, Y.prev.y, Y.distSinceStamp) : ol(H, Y.pprev, { x: Y.lastMidX, y: Y.lastMidY }, Y.prev, Y.prev, Y.distSinceStamp);
    }
    q.lassoPreviewActive && (Ot(q.currentStroke), Rs(q.currentStroke.ctx, T, ne), q.lassoPreviewActive = !1);
    const J = X === "mask" ? c.committedMask : q.committedPaint;
    if (U && X === "paint")
      for (const Le of o.values())
        Ei(Le.committedPaint.ctx, q.currentStroke.canvas), Le.displayDirty = !0;
    else if (U)
      Ei(J.ctx, q.currentStroke.canvas);
    else {
      const Le = Math.max(0, Math.min(1, (Y == null ? void 0 : Y.strokeOpacity) ?? 1));
      J.ctx.save(), J.ctx.globalAlpha = Le, J.ctx.drawImage(q.currentStroke.canvas, 0, 0), J.ctx.restore();
    }
    W_() && (String((T == null ? void 0 : T.toolKind) || ""), String((ne == null ? void 0 : ne.kind) || ""), Number((ne == null ? void 0 : ne.width) || 0), Number((ne == null ? void 0 : ne.height) || 0), String(((E = T == null ? void 0 : T.targetSpace) == null ? void 0 : E.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), Yh(q.currentStroke.canvas), Yh(J.canvas), void 0), Ot(q.currentStroke), q.activeStroke = null, q.displayDirty = !0, b = null, g = "", _([...o.keys()]);
  }
  function I(T) {
    if (g === "mask")
      Ot(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (g === "paint" && !b)
      Ot(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (b) {
      const N = o.get(b);
      N && (Ot(N.currentStroke), N.activeStroke = null, N.lassoPreviewActive = !1, N.displayDirty = !0);
    }
    b = null, g = "", _([...o.keys()]);
  }
  function z(T, N) {
    var U;
    if (g = String((T == null ? void 0 : T.layerKind) || ""), String(((U = T == null ? void 0 : T.geometry) == null ? void 0 : U.geometryKind) || "") === "lasso_fill") {
      if (g === "mask")
        Ot(c.currentStroke), Rs(c.currentStroke.ctx, T, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const q = String((T == null ? void 0 : T.toolKind) || "") === "eraser", Y = q ? f : M(String((T == null ? void 0 : T.actionGroupId) || b || "__default__"));
        b = q ? "" : String((T == null ? void 0 : T.actionGroupId) || b || "__default__"), Ot(Y.currentStroke), Rs(Y.currentStroke.ctx, T, Y.descriptor), Y.lassoPreviewActive = !0, Y.displayDirty = !0;
      }
      _([...o.keys()]);
    }
  }
  function O(T) {
    return _(T ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function R(T) {
    return o.get(String(T)) ?? null;
  }
  function G() {
    return [...o.keys()];
  }
  function ee(T) {
    var ne;
    const N = o.get(String(T));
    if (!N) return null;
    const X = g === "paint" && b === N.actionGroupId, U = g === "paint" && ((ne = b ? o.get(b) : f) == null ? void 0 : ne.activeStroke) || null;
    if (U != null && U.isEraser)
      return kn = Yr(kn, t, n), Ot(kn), kn.ctx.drawImage(N.committedPaint.canvas, 0, 0), Ei(kn.ctx, a.canvas), kn.canvas;
    const q = X ? N.activeStroke : null;
    if (!q) return N.committedPaint.canvas;
    kn = Yr(kn, t, n), Ot(kn), kn.ctx.drawImage(N.committedPaint.canvas, 0, 0);
    const Y = N.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, q.strokeOpacity ?? 1));
    return kn.ctx.save(), kn.ctx.globalAlpha = Y, kn.ctx.drawImage(a.canvas, 0, 0), kn.ctx.restore(), kn.canvas;
  }
  function ve() {
    return pi = Yr(pi, t, n), Ot(pi), Lc(pi.ctx, c.committedMask.canvas), g === "mask" && c.activeStroke && (c.activeStroke.isEraser ? ($t = Yr($t, t, n), Ot($t), $t.ctx.drawImage(c.committedMask.canvas, 0, 0), Ei($t.ctx, a.canvas), Ot(pi), Lc(pi.ctx, $t.canvas)) : Lc(pi.ctx, a.canvas)), pi.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: L,
    appendStrokePoint: aw,
    updateActiveStroke: z,
    commitActiveStroke: W,
    cancelActiveStroke: I,
    getErpTarget: O,
    ensureTarget: k,
    getGroupTarget: R,
    getGroupDisplayCanvas: ee,
    getMaskDisplayCanvas: ve,
    getAllGroupIds: G
  };
}
function Z(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Kt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function sw(e, t) {
  let n = Kt(t) - Kt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const vu = 3;
function pa(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function hf(e, t = 0) {
  const n = pa(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = pa(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = pa(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = pa(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(pa(t) || 0);
}
function ig(e) {
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
const Qh = Math.PI / 180, ep = 0.12, lw = vu, cw = 35, uw = 140, va = 100, fw = 20, tp = 0.8;
function dw(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = Z(Number(e || va), 1, 179) * Qh;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / Qh;
}
function pf(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: va })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(W, I = null) {
    f && f(W, I);
  }
  function g(W, I, z = null, O = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(W || 0), d.drag.lastY = Number(I || 0), d.drag.lastTs = Number(O || performance.now()), d.drag.pointerId = z, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: z }), !0;
  }
  function w(W, I, z = "pano", O = performance.now()) {
    if (!d.drag.active) return !1;
    const R = Number(O || performance.now()), G = Number(W), ee = Number(I), ve = G - d.drag.lastX, T = ee - d.drag.lastY;
    d.drag.lastX = G, d.drag.lastY = ee, d.drag.lastTs = R;
    const N = r() || { x: 1, y: 1 }, X = Number(N.x || 1), U = Number(N.y || 1), q = { ...t() };
    let Y = 0, ne = 0;
    if (z === "unwrap") {
      const E = o() || { w: 1, h: 1 }, Le = Math.max(1, Number(E.w || 1)), H = Math.max(1, Number(E.h || 1)), Ne = ve / Le, He = T / H;
      Y = -Ne * 360 * X, ne = He * 180 * U;
    } else {
      const E = a() || { w: 0, h: 0 }, Le = Math.max(1, Number(E.w || 0)), H = Math.max(1, Number(E.h || 0));
      if (Le > 1 && H > 1) {
        const Ne = Z(Number(q.fov || va), 1, 179), He = Z(dw(Ne, Le, H), 0.1, 179);
        Y = -(ve / Le) * Ne * X, ne = T / H * He * U;
      } else
        Y = -ve * ep * X, ne = T * ep * U;
    }
    q.yaw = Kt(Number(q.yaw || 0) + Y), q.pitch = Z(Number(q.pitch || 0) + ne, -89.9, 89.9), n(q), d.velHistory.push({ ts: R, yaw: q.yaw, pitch: q.pitch });
    let J = 0;
    for (; J < d.velHistory.length - 1 && d.velHistory[J].ts < R - 100; ) J++;
    return J > 0 && d.velHistory.splice(0, J), d.inertia.active = !1, d.inertia.lastTs = R, c(), b("drag", { phase: "move", dx: ve, dy: T, dYaw: Y, dPitch: ne }), !0;
  }
  function x(W = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const I = Number(W || performance.now());
    d.drag.lastTs = I;
    const z = d.velHistory.filter((R) => I - R.ts <= 80);
    if (z.length >= 2) {
      const R = z[0], G = z.at(-1), ee = Math.max(1e-3, (G.ts - R.ts) / 1e3);
      let ve = G.yaw - R.yaw;
      ve > 180 && (ve -= 360), ve < -180 && (ve += 360), d.inertia.vx = ve / ee, d.inertia.vy = (G.pitch - R.pitch) / ee;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const O = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = O > fw, d.inertia.lastTs = I, b("drag", { phase: "end", speed: O, inertiaActive: d.inertia.active }), !0;
  }
  function M(W = performance.now()) {
    if (!d.inertia.active) return !1;
    const I = Number(W || performance.now()), z = Math.max(1e-3, (I - (d.inertia.lastTs || I)) / 1e3);
    d.inertia.lastTs = I;
    const O = { ...t() };
    O.yaw = Kt(Number(O.yaw || 0) + d.inertia.vx * z), O.pitch = Z(Number(O.pitch || 0) + d.inertia.vy * z, -89.9, 89.9);
    const R = Math.exp(-5.5 * z);
    return d.inertia.vx *= R, d.inertia.vy *= R, Math.abs(d.inertia.vx) < tp && Math.abs(d.inertia.vy) < tp && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(O), c(), d.inertia.active;
  }
  function k() {
    const W = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], W;
  }
  function _(W) {
    const I = Math.sign(Number(W || 0));
    if (!I) return !1;
    const z = { ...t() }, O = Number(z.fov || va);
    return z.fov = Z(O + I * lw, cw, uw), n(z), c(), b("wheel", { deltaSign: I, fovBefore: O, fovAfter: z.fov }), !0;
  }
  function F(W, I = 0) {
    return _(hf(W, I));
  }
  function L() {
    n({ yaw: 0, pitch: 0, fov: va }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: g,
    moveDrag: w,
    endDrag: x,
    stepInertia: M,
    stopMotion: k,
    applyWheel: _,
    applyWheelEvent: F,
    resetView: L
  };
}
const ln = Math.PI / 180, An = 180 / Math.PI;
function rr(e, t, n) {
  return { x: e, y: t, z: n };
}
function al(e, t) {
  return rr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function sl(e, t) {
  return rr(e.x * t, e.y * t, e.z * t);
}
function Rc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function mf(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return rr(e.x / t, e.y / t, e.z / t);
}
function Rn(e, t) {
  const n = e * ln, r = t * ln, o = Math.cos(r);
  return rr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Uo(e, t, n = 0) {
  const r = Number(e || 0) * ln, o = Number(t || 0) * ln, a = n * ln, c = Math.cos(r), f = Math.sin(r), d = Math.cos(o), b = Math.sin(o), g = Math.cos(a), w = Math.sin(a);
  return {
    right: rr(
      c * g - f * b * w,
      d * w,
      -f * g - c * b * w
    ),
    up: rr(
      -c * w - f * b * g,
      d * g,
      f * w - c * b * g
    ),
    fwd: rr(f * d, b, c * d)
  };
}
function ll(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function yt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function hw() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function pw(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = yt(r.z_index ?? r.zIndex, t.length);
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
function mw(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function gw(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = yt(e.t, 0), r = yt(e.widthScale, null), o = yt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = yt(e.u, null), c = yt(e.v, null);
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
    const a = yt(e.u, null), c = yt(e.v, null);
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
function bs(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = gw(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function yw(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = bs(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = bs(e.points, t, 1);
  if (!a) return null;
  const c = bs(e.rawPoints, t, 1), f = bs(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: f || a.map((d) => ({ ...d }))
  };
}
function bw(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = mw(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = yw(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = yt(e.size, null), c = yt(e.opacity, null);
  if (a == null || c == null) return null;
  const f = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!f || !d) return null;
  const b = yt(e.radiusValue, null), g = String(e.radiusModel || "").trim() || null;
  let w = null;
  if (t === "paint") {
    const x = e.color;
    if (!x || typeof x != "object") return null;
    w = {
      r: Math.max(0, Math.min(1, yt(x.r, 0))),
      g: Math.max(0, Math.min(1, yt(x.g, 0))),
      b: Math.max(0, Math.min(1, yt(x.b, 0))),
      a: Math.max(0, Math.min(1, yt(x.a, 1)))
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
    hardness: yt(e.hardness, null),
    flow: yt(e.flow, null),
    spacing: yt(e.spacing, null),
    createdAt: Math.trunc(yt(e.createdAt, 0)),
    color: w,
    radiusModel: g,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function np(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = bw(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function vw(e) {
  if (!e || typeof e != "object") return null;
  const t = yt(e.u0, null), n = yt(e.v0, null), r = yt(e.u1, null), o = yt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (f) => Math.max(0, Math.min(1, f)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function _w(e) {
  const t = e || {};
  return {
    du: yt(t.du, 0) ?? 0,
    dv: yt(t.dv, 0) ?? 0,
    rot_deg: yt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, yt(t.scale, 1) ?? 1)
  };
}
function ww(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = vw(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, yt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: _w(e.transform)
  } : null;
}
function xw(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = ww(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function Oo(e) {
  const t = hw();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: pw(e.groups),
    paint: np(e.paint, "paint"),
    mask: np(e.mask, "mask"),
    raster_objects: xw(e.raster_objects)
  };
}
const Or = 1, Fr = 179, _u = 85;
function Dl(e) {
  const t = ((Qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function og(e, t) {
  let n = Qe(e, 0) - Qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function ag(e, t, { shiftKey: n = !1 } = {}) {
  let r = Qe(e, 0) + Qe(t, 0) * An;
  return n && (r = Math.round(r / 15) * 15), Dl(r);
}
function Qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function ii(e = {}) {
  const t = Z(Qe(e.hFOV_deg || 90, 90), Or, Fr), n = Z(Qe(e.vFOV_deg || 60, 60), Or, Fr), r = Math.tan(t * ln * 0.5), o = Math.tan(n * ln * 0.5);
  return {
    yawDeg: Qe(e.yaw_deg, 0),
    pitchDeg: Qe(e.pitch_deg, 0),
    rollDeg: Qe(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function Ui(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = ii(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function gf(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, Qe(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function yf(e, t) {
  const n = Math.max(1e-12, Qe(t, 1)), r = Math.max(1e-6, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = Z(2 * Math.atan(r / (2 * n)) * An, Or, Fr), c = Z(2 * Math.atan(o / (2 * n)) * An, Or, Fr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function Sw(e, t, n) {
  const r = Qe(e == null ? void 0 : e.x, 0), o = Qe(e == null ? void 0 : e.y, 0), a = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = ii(t), d = Math.max(1e-12, Qe(n, 1)), b = 2 * d * f.tanHalfX, g = 2 * d * f.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (c - g) * 0.5,
    w: b,
    h: g,
    focalPx: d
  };
}
function bf(e, t, n = _u) {
  const r = Math.max(1e-12, Qe(t, 1)), o = Z(Qe(n, _u), 1, 89.999), a = r * Math.tan(o * ln), c = Math.max(1, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(f * 0.5, a)
  };
}
function sg(e, t, n) {
  const r = Math.max(1e-12, Qe(t, 1));
  return {
    x: (Qe(n == null ? void 0 : n.x, 0) - Qe(e == null ? void 0 : e.x, 0)) / r,
    y: -(Qe(n == null ? void 0 : n.y, 0) - Qe(e == null ? void 0 : e.y, 0)) / r
  };
}
function $s(e, t) {
  const n = Z(Qe(e, 60), Or, Fr), r = Math.max(1e-6, Qe(t, 1));
  return Z(
    2 * Math.atan(Math.tan(n * ln * 0.5) * r) * An,
    Or,
    Fr
  );
}
function rp(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function kw(e, t) {
  const n = rp(e, 1), r = rp(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), f = (b, g) => g ? f(g, b % g) : b, d = f(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function Wi(e) {
  const t = Z(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * ln, n = Z(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * ln;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function $i(e) {
  const t = Wi(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || kw(t, 1);
}
function lg(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = $i(t), t;
}
function cg({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), f = Number.isFinite(c) ? Z(c, Or, Fr) : Z(Math.min(42, Qe(o, 100) * 0.42), 8, 96);
  return lg({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Qe(t, 0),
    pitch_deg: Z(Qe(n, 0), -89.9, 89.9),
    roll_deg: Dl(r),
    hFOV_deg: f,
    vFOV_deg: f,
    locked: !1
  });
}
function Xr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : $i(e);
}
function ug(e, t) {
  const n = ii(e), r = Qe(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * An, a = 2 * Math.atan(n.tanHalfY * r) * An;
  return o < Or || o > Fr || a < Or || a > Fr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function fg(e, t, n = vu) {
  const r = Math.sign(Qe(t, 0)), o = Math.abs(Qe(n, vu));
  if (!r || !(o > 0)) return null;
  const a = ii(e), c = a.hFovDeg + r * o;
  if (c < Or || c > Fr) return null;
  const f = Math.tan(c * ln * 0.5);
  return ug(e, f / a.tanHalfX);
}
function dg(e, t) {
  const n = ii(e), r = Uo(n.yawDeg, n.pitchDeg, n.rollDeg), o = Qe(t == null ? void 0 : t.x, 0), a = Qe(t == null ? void 0 : t.y, 0);
  return mf(al(al(r.fwd, sl(r.right, o)), sl(r.up, a)));
}
function Mw(e) {
  return rr(e.x, e.y, -e.z);
}
function Vs(e) {
  return rr(e.x, e.y, -e.z);
}
function Ll(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = Uo(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function Nw(e) {
  const t = Vs(rr(e[0][0], e[1][0], e[2][0])), n = Vs(rr(e[0][1], e[1][1], e[2][1])), r = Vs(rr(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), f = Math.sin(o), d = Math.atan2(f * n.z - c * n.x, c * t.x - f * t.z);
  return { yawDeg: o * An, pitchDeg: a * An, rollDeg: d * An };
}
function hg(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Rl(e) {
  const [[t, n, r], [o, a, c], [f, d, b]] = e, g = t + a + b;
  if (g > 0) {
    const x = 0.5 / Math.sqrt(g + 1);
    return { x: (d - c) * x, y: (r - f) * x, z: (o - n) * x, w: 0.25 / x };
  }
  if (t > a && t > b) {
    const x = 2 * Math.sqrt(1 + t - a - b);
    return { x: 0.25 * x, y: (n + o) / x, z: (r + f) / x, w: (d - c) / x };
  }
  if (a > b) {
    const x = 2 * Math.sqrt(1 + a - t - b);
    return { x: (n + o) / x, y: 0.25 * x, z: (c + d) / x, w: (r - f) / x };
  }
  const w = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + f) / w, y: (c + d) / w, z: 0.25 * w, w: (o - n) / w };
}
function vs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const ji = 1e-6, wu = 1e-6, Pw = 1e-9;
function Ra(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function Aw(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, f = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (c + f);
    Ra(0, n, o, 1, b) < t ? c = b : f = b;
  }
  return Ra(0, r, a, 1, 0.5 * (c + f));
}
function zo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function jo(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((x) => -x / o), f = r.map((x) => x / a);
  if (c.reduce((x, M, k) => x + M * f[k], 0) < 0) return n.map(() => 0);
  const d = c.map((x, M) => (x * a + f[M] * o) / (o + a)), b = (x) => Math.sqrt(x.reduce((M, k) => M + k * k, 0)), g = 3 * Math.min(b(c), b(f)), w = b(d);
  return w <= g ? d : d.map((x) => x * g / w);
}
function pg(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], f = o.map((g, w) => a[w] - g);
  let d = f;
  zo(e, r) && (d = jo(t, r, n[r - 1].map((g, w) => g - o[w]), f).map((g) => g * c));
  let b = f;
  return zo(e, r + 1) && (b = jo(t, r + 1, f.map((g) => -g), n[r + 2].map((g, w) => g - a[w])).map((g) => g * c)), [d.map((g) => g / 3), b.map((g) => -g / 3)];
}
function mg(e, t, n, r, o) {
  const [[a], [c]] = pg(e, t, n.map((f) => [f]), r);
  return Ra(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function Cw(e, t, n, r) {
  var b, g;
  const o = e.map((w) => w.value);
  let [a, c] = pg(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, c = ((g = e[n + 1].handles) == null ? void 0 : g.in) ?? c;
  const f = o[n], d = o[n + 1];
  return [0, 1, 2].map((w) => Ra(f[w], f[w] + a[w], d[w] + c[w], d[w], r));
}
function cl([e, t, n, r], [o, a, c, f]) {
  return [
    r * o + e * f + t * c - n * a,
    r * a - e * c + t * f + n * o,
    r * c + e * a - t * o + n * f,
    r * f - e * o - t * a - n * c
  ];
}
function Iw(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function $c(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Ew([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function xu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function No(e, t) {
  return Ew(cl([-e[0], -e[1], -e[2], e[3]], t));
}
function Vc(e, t, n) {
  return cl(e, xu(No(e, t).map((r) => n * r)));
}
function zc(e, t) {
  const n = Iw(e, t);
  if (Math.abs(n) > wu) return n < 0;
  const [r, o, a] = No(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > wu) return c < 0;
  return !1;
}
function _s(e) {
  const { x: t, y: n, z: r, w: o } = Rl(Ll(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function Su(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function Ow(e, t, n, r) {
  const o = _s(e[n].value);
  let a = _s(e[n + 1].value);
  zc(o, a) && (a = $c(a));
  const c = t[n + 1] - t[n], f = No(o, a);
  let d = f;
  if (zo(e, n)) {
    let O = _s(e[n - 1].value);
    zc(O, o) && (O = $c(O)), d = jo(t, n, No(o, O), f).map((R) => R * c);
  }
  let b = f;
  if (zo(e, n + 1)) {
    let O = _s(e[n + 2].value);
    zc(a, O) && (O = $c(O)), b = jo(t, n + 1, No(a, o), No(a, O)).map((R) => R * c);
  }
  const g = cl(o, xu(d.map((O, R) => 0.5 * (O - f[R])))), w = cl(a, xu(f.map((O, R) => 0.5 * (O - b[R])))), [x, M, k, _] = Vc(Vc(o, a, r), Vc(g, w, r), 2 * r * (1 - r)), { yawDeg: F, pitchDeg: L, rollDeg: W } = Nw(hg({ x, y: M, z: k, w: _ })), I = e[n].value, z = e[n + 1].value;
  return {
    yaw_deg: Su(F, I.yaw_deg, z.yaw_deg, r),
    pitch_deg: L,
    roll_deg: Su(W, I.roll_deg, z.roll_deg, r)
  };
}
function $a(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function ul(e) {
  return Math.sqrt($a(e, e));
}
function fl(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function gg(e, t) {
  const n = $a(e, t), r = t.map((c, f) => c - n * e[f]), o = ul(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function So(e, t) {
  const n = ul(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function ws(e, t, n) {
  return So(e, gg(e, t).map((r) => n * r));
}
function jc(e, t) {
  const n = fl(e[t].value), r = fl(e[t + 1].value), o = $a(n, r), a = o < 0 && ul(r.map((d, b) => d - o * n[b])) <= wu;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = gg(n, r);
  const f = ul(c);
  return [c, c.map((d, b) => Math.cos(f) * d - f * Math.sin(f) * n[b]), a];
}
function Fw(e, t, n, r) {
  const o = fl(e[n].value), a = fl(e[n + 1].value), [c, f, d] = jc(e, n);
  let b = c, g = f;
  const w = t[n + 1] - t[n];
  zo(e, n) && (b = jo(t, n, jc(e, n - 1)[1].map((I) => -I), b).map((I) => I * w)), zo(e, n + 1) && (g = jo(t, n + 1, g.map((I) => -I), jc(e, n + 1)[0]).map((I) => I * w));
  let x, M, k;
  if (d) {
    const I = Math.PI, z = Ra(0, $a(b, c) / I / 3, I - $a(g, f) / I / 3, I, r);
    [x, M, k] = So(o, c.map((O) => z * O / I));
  } else {
    const I = ws(So(o, b.map((R) => R / 3)), So(a, g.map((R) => -R / 3)), r), z = ws(So(o, b.map((R) => r * R / 3)), I, r), O = ws(I, So(a, g.map((R) => -(1 - r) * R / 3)), r);
    [x, M, k] = ws(z, O, r);
  }
  const _ = Math.hypot(x, k), F = e[n].value.yaw_deg, L = e[n + 1].value.yaw_deg;
  return { yaw_deg: _ <= Pw ? F + (L - F) * r : Su(Math.atan2(x, k) * 180 / Math.PI, F, L, r), pitch_deg: Math.atan2(M, _) * 180 / Math.PI };
}
function Tw(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = mg(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function Dw(e, t, n, r) {
  return mg(e, t, e.map((o) => o.value), n, r);
}
const Lw = { position: Cw, rotation: Ow, direction: Fw, size: Tw };
function Jt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return vs(e[t].value);
  if (n <= r[0].frame + ji) return vs(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - ji) return vs(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + ji; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= ji || c.easing === "hold") return vs(c.value);
  const f = r.map((b) => b.frame), d = Aw(c.easing, (n - f[a]) / (f[a + 1] - f[a]));
  return (Lw[t] ?? Dw)(r, f, a, d);
}
function ku(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Rw(e) {
  return Math.min(1, Math.max(0, e));
}
function yg(e) {
  return Math.max(1e-6, e);
}
function bg(e, t) {
  return t - (e.start - e.in);
}
function Vi(e, t) {
  return t >= e.start - ji && (e.duration === null || t < e.start + e.duration - ji);
}
function $w(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = bg(o.clip, n);
  return {
    frame: n,
    camera: {
      position: Jt(r, "position", n),
      ...Jt(r, "rotation", n),
      hFOV_deg: ku(Jt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: Vi(o.clip, n),
      clip_frame: a,
      position: Jt(o, "position", a),
      ...Jt(o, "rotation", a),
      scale: yg(Jt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => $l(c, n))
  };
}
function Vw(e, t) {
  if (e.placement === "world")
    return {
      position: Jt(e, "position", t),
      ...Jt(e, "rotation", t),
      scale: yg(Jt(e, "scale", t))
    };
  const n = Jt(e, "size", t);
  return {
    ...Jt(e, "direction", t),
    roll_deg: Jt(e, "roll", t),
    hFOV_deg: ku(n.hFOV_deg),
    vFOV_deg: ku(n.vFOV_deg)
  };
}
function $l(e, t) {
  const n = bg(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Vi(e.clip, t),
    clip_frame: n,
    ...Vw(e, n),
    opacity: Rw(Jt(e, "opacity", n))
  };
}
const zw = 2, jw = ["sky", "world"], Hw = ["input", "output", "temp"], vg = [0.42, 0, 0.58, 1];
function rn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function jt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Mu(e, t) {
  const n = jt(e, t);
  return n !== null && n > 0 ? n : t;
}
function tr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Fo(e) {
  const t = jt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ip(e, t) {
  return typeof e == "boolean" ? e : t;
}
function _g(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => jt(n, null));
  return t.includes(null) ? null : t;
}
function wg(e) {
  return _g(e) || [0, 0, 0];
}
function xg(e) {
  const t = rn(e) ? e : {};
  return {
    yaw_deg: jt(t.yaw_deg, 0),
    pitch_deg: tr(jt(t.pitch_deg, 0), -90, 90),
    roll_deg: jt(t.roll_deg, 0)
  };
}
function Gw(e) {
  return tr(jt(e, 90), 0.1, 179);
}
function Kw(e) {
  return Mu(e, 1);
}
function Bw(e) {
  const t = rn(e) ? e : {};
  return {
    yaw_deg: jt(t.yaw_deg, 0),
    pitch_deg: tr(jt(t.pitch_deg, 0), -90, 90)
  };
}
function Uw(e) {
  return jt(e, 0);
}
function Ww(e) {
  const t = rn(e) ? e : {};
  return {
    hFOV_deg: tr(jt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: tr(jt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Sg(e) {
  return tr(jt(e, 1), 0, 1);
}
const kg = [["position", wg], ["rotation", xg], ["fov", Gw]], vf = [["position", wg], ["rotation", xg], ["scale", Kw]], Mg = [["direction", Bw], ["roll", Uw], ["size", Ww], ["opacity", Sg]], Ng = [...vf, ["opacity", Sg]];
function Yw(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => jt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...vg];
}
function Xw(e) {
  if (!rn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = _g(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function qw(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!rn(o)) continue;
    const a = Fo(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: Yw(o.easing) }, f = n ? Xw(o.handles) : null;
    f && (c.handles = f), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function Nu(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = rn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: qw(a.keyframes, o, r === "position") };
  }
  return n;
}
function Pg(e) {
  const t = rn(e) ? e : {}, n = Fo(t.start), r = Fo(t.in), o = Fo(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function Jw(e) {
  const t = rn(e) ? e : {}, n = tr(jt(t.x0, 0), 0, 1), r = tr(jt(t.y0, 0), 0, 1), o = tr(jt(t.x1, 1), 0, 1), a = tr(jt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function Zw(e) {
  if (!rn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Hw.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function Qw(e) {
  const t = Zw(e.source);
  if (!t) return null;
  const n = jw.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: Pg(e.clip),
    visible: ip(e.visible, !0),
    locked: ip(e.locked, !1),
    crop: Jw(e.crop),
    ...Nu(e, r ? Ng : Mg)
  };
  return r || (o.z_index = Fo(e.z_index) ?? 0), o;
}
function ex(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = rn(a) ? Qw(a) : null;
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
function Pu(e) {
  const t = rn(e.timeline) ? e.timeline : {}, n = rn(e.camera) ? e.camera : {}, r = rn(e.scene) ? e.scene : {}, o = Fo(t.length);
  return {
    version: zw,
    timeline: {
      fps: Mu(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: Mu(n.aspect, 1), ...Nu(n, kg) },
    scene: { clip: Pg(r.clip), ...Nu(r, vf) },
    stickers: ex(e.stickers),
    painting: Oo(e.painting),
    painting_layer: rn(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function tx(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!rn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function nx(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!rn(t)) return {};
  const n = tr(jt(t.hFOV_deg, 90), 1, 179), r = tr(jt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function rx(e) {
  const t = rn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(rn) : [];
  return n.sort((r, o) => jt(r.z_index, 0) - jt(o.z_index, 0)), Pu({
    camera: nx(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: tx(r, t),
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
function Ho(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Pu({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!rn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? rx(t) : Pu(t);
}
function Hc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Ag(e) {
  return Array.isArray(e) ? [...e] : e;
}
function _f(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= ji);
}
function Cg(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? Ag(e.keyframes[r - 1].easing) : [...vg];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function Yi(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = Hc(o.value, r);
    return;
  }
  const a = _f(o, n);
  a ? a.value = Hc(a.value, r) : Cg(o, n, Hc(Jt(e, t, n), r));
}
function Wo(e) {
  return e.placement === "world" ? Ng.map(([t]) => t) : e.placement === "sky" ? Mg.map(([t]) => t) : (e.clip ? vf : kg).map(([t]) => t);
}
function ix(e, t) {
  for (const n of Wo(e))
    _f(e[n], t) || Cg(e[n], t, Jt(e, n, t));
}
function ox(e) {
  const t = Wo(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function ax(e, t) {
  return Wo(e).every((n) => !!_f(e[n], t));
}
function sx(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const f = Jt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = f);
  }
}
function lx(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const c of t) {
    const f = e[c], d = f.keyframes.filter((g) => a.has(g.frame)).map((g) => ({ ...g, frame: g.frame + r })), b = new Set(d.map((g) => g.frame));
    f.keyframes = [
      ...f.keyframes.filter((g) => !a.has(g.frame) && !b.has(g.frame)),
      ...d
    ].sort((g, w) => g.frame - w.frame);
  }
  return r;
}
function Ig(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function cx(e, t, n) {
  const r = Ig(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function ux(e, t, n, r) {
  for (const o of Ig(e, t, n)) o.easing = Ag(r);
}
function fx(e, t) {
  e.start = Math.max(0, e.start + t);
}
function dx(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function hx(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function op(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Au(e) {
  return Wo(e).map((t) => e[t]);
}
function Cu(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => Au(t).some((n) => n.keyframes.length > 0)) || !op(e.scene.clip) || e.stickers.some((t) => !op(t.clip));
}
function Eg(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = Math.max(e.timeline.length ?? t, n);
  for (const a of Au(e.camera))
    for (const c of a.keyframes) o = Math.max(o, c.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: c } = a;
    o = Math.max(o, c.duration === null || c === r ? c.start + 1 : c.start + c.duration);
    for (const f of Au(a))
      for (const d of f.keyframes) o = Math.max(o, c.start - c.in + d.frame + 1);
  }
  return o;
}
function px(e, t) {
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
function dl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function mx({
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
    painting: Oo(null),
    painting_layer: null,
    ui_settings: dl(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Og(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function gx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function yx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function bx(e) {
  return Array.isArray(e) ? e.map((t) => lg(t)) : [];
}
function vx(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function Fg(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = mx(n), o = String(e || "").trim();
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
      assets: gx(a.assets),
      stickers: yx(a.stickers),
      shots: bx(a.shots),
      painting: Oo(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: dl(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (f.ui_settings = dl({ ...f.ui_settings, ...c })), f.output_preset = Og(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = Hn(n.coverage), delete f.editor_history, f;
  } catch {
    return xs = { text: o, parsed: null }, r;
  }
}
function ap(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function _x(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function wx(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function Tg(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c } = t;
  let f;
  try {
    f = Ho(e);
  } catch {
    f = Ho(null);
  }
  return {
    ...f,
    coverage: Hn(o),
    bg_color: r,
    output_preset: Og(n),
    ui_settings: dl(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function wf(e, t) {
  const n = $l(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const xx = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function sp(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function Sx(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[xx[n]].keyframes.length));
}
function Dg(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = sp(n, ["yaw_deg", "pitch_deg"]), a = sp(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && Yi(e, "direction", r, o), n.rot_deg !== void 0 && Yi(e, "roll", r, n.rot_deg), Object.keys(a).length && Yi(e, "size", r, a);
}
const Lg = ["position_x", "position_y", "position_z"];
function kx(e, t) {
  const n = Jt(e, "position", t), r = Jt(e, "rotation", t);
  return {
    ...Object.fromEntries(Lg.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Jt(e, "fov", t)
  };
}
function Mx(e, t, n, r) {
  const o = Lg.indexOf(n);
  if (o >= 0) {
    const a = Jt(e, "position", t);
    a[o] = r, Yi(e, "position", t, a);
  } else n === "hFOV_deg" ? Yi(e, "fov", t, r) : Yi(e, "rotation", t, { [n]: r });
}
function Nx(e, t, n) {
  Yi(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function zs(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Rg(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function xf(e, t, n, r) {
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
function Px(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Kt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function $g(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Vg(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function zg(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function jg(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? Ho(t) : t);
}
function Hg(e, t, n) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    return JSON.stringify(Ho(n)) === t;
  } catch {
    return !1;
  }
}
const lp = 2048, Gg = 0.28;
function Kg(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * ln);
  return {
    quaternion: Rl(Ll(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * An,
    aspect: r
  };
}
function js(e) {
  const t = ii(e);
  return {
    quaternion: Rl(Ll(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Ax(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = bf(n, r), c = t.x + t.w * 0.5, f = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: f - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * An,
      vFOV_deg: 2 * Math.atan(a / r) * An
    }
  };
}
function Bg(e, t, n) {
  const [[r, o, a], [c, f, d], [b, g, w]] = hg(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * ln), M = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, _ = 1e-4) {
      const F = Mw(k), L = r * F.x + c * F.y + b * F.z, W = o * F.x + f * F.y + g * F.z, I = -(a * F.x + d * F.y + w * F.z), z = Math.max(I, _);
      return {
        x: t * 0.5 * (1 + L / z / M),
        y: n * 0.5 * (1 - W / z / x),
        z: I
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, _) {
      const F = (k / t * 2 - 1) * M, L = (1 - _ / n * 2) * x;
      return mf(Vs({
        x: r * F + o * L - a,
        y: c * F + f * L - d,
        z: b * F + g * L - w
      }));
    }
  };
}
function Cx(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = $w(e, t), c = [];
  e.stickers.forEach((f, d) => {
    const b = a.stickers[d];
    if (f.placement !== "sky") return;
    const g = f.source.kind === "port" && !f.visible;
    if (!b.active && !g) return;
    const w = n(f);
    if (!w) return;
    const x = Math.tan(b.hFOV_deg * 0.5 * ln), M = Math.tan(b.vFOV_deg * 0.5 * ln), { crop: k } = f;
    c.push({
      kind: "sticker",
      id: f.id,
      media: w.media,
      revision: w.revision,
      opacity: g ? Gg : b.opacity,
      zIndex: r(f),
      quaternion: Rl(Ll(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * x,
        x1: (2 * k.x1 - 1) * x,
        y0: (1 - 2 * k.y1) * M,
        y1: (1 - 2 * k.y0) * M
      }
    });
  });
  for (const f of o) c.push({ kind: "erp", ...f });
  return c.sort((f, d) => f.zIndex - d.zIndex);
}
function Ug(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const c of n)
    typeof (c == null ? void 0 : c.id) == "string" && c.id && !a.has(c.id) && a.set(c.id, c);
  return Cx(e, t, {
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
const Gc = /* @__PURE__ */ new WeakMap();
let Ix = 1;
function cp(e) {
  return Gc.has(e) || Gc.set(e, Ix++), Gc.get(e);
}
function up({ background: e, layers: t }) {
  return JSON.stringify([
    e && [cp(e.media), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, cp(n.media), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function Ex({ onReady: e, onFailed: t }) {
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
const Wg = "3D view unavailable. Check the browser console.";
function hl(e, t, n) {
  return Kg({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function Ox(e) {
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
    let b = !1;
    return o.add(d), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(g) {
        return b ? null : (a(), t ? t.render({ ...g, owner: d }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(d);
      },
      dispose() {
        b || (b = !0, o.delete(d), t == null || t.release(d), !o.size && (r = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const Yg = Ox(
  () => import("./.lazy/pano_three_view-BMrUcsVg.js").then((e) => e.createThreeView())
), Si = ["erp_image", "bg_erp", "bg_media"], Sf = ["sticker_image", "sticker"], Fx = {
  background: Si,
  "external-sticker": Sf
};
function Xg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Tx(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = Xg(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function qg(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((f) => String(f == null ? void 0 : f.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((f) => (f == null ? void 0 : f.id) === c.type);
  }
}
function Dx(e, t) {
  const { graph: n, entry: r } = qg(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const f = Xg(o.get(c == null ? void 0 : c.link));
    f && (a[String((c == null ? void 0 : c.name) || "")] = f);
  }
  return a;
}
const Lx = [...Si, ...Sf], Rx = 256, ko = /* @__PURE__ */ new Map(), Kc = /* @__PURE__ */ new WeakMap();
let Jg = () => null;
function Zg(e) {
  return Kc.has(e) || Kc.set(e, JSON.stringify(e)), Kc.get(e);
}
function $x(e) {
  Jg = e;
}
function Qg(e, t) {
  const n = Zg(e);
  ko.delete(n), ko.set(n, t), ko.size > Rx && ko.delete(ko.keys().next().value);
}
function Mr(e, t) {
  const n = e ? Jg(e) : null, r = n ? ko.get(Zg(n)) : null;
  if (!r) return !0;
  const o = Tx(e);
  return Fx[t].every((a) => r[a] === o[a]);
}
const pl = /* @__PURE__ */ new WeakSet();
async function Iu(e, t) {
  if (pl.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && pl.add(e), n.ok && r !== void 0 ? r : null;
}
function e0(e, t) {
  var a, c, f, d, b;
  const n = (f = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : f.workflow, { entry: r } = qg(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((g) => Lx.includes(g == null ? void 0 : g.name))) ? null : { output: o, inputs: Dx(n, t) };
}
const Hs = /* @__PURE__ */ new Map();
function Vx(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Hs.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await Iu(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = e0(o, a);
        c && Qg(c.output, c.inputs);
      }
    });
}
const zx = 5;
function jx(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${zx}`, r = Iu(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, Iu(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, f) {
      var b, g, w, x;
      const d = String(c.id);
      for (const { id: M } of await r) {
        if (!f()) return null;
        const k = await a(M);
        if ((b = k == null ? void 0 : k.outputs) != null && b[d])
          return ((x = (w = (g = k.workflow) == null ? void 0 : g.prompt) == null ? void 0 : w[d]) == null ? void 0 : x.class_type) !== c.comfyClass ? null : e0(k, d);
      }
      return null;
    }
  };
}
function Hx(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let mo = null;
async function Gx(e, t, n) {
  var f;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || pl.has(n) || (f = Hs.get(o)) != null && f.has(r) || Hx(t)) return null;
  (mo == null ? void 0 : mo.workflowId) !== o && (mo = { workflowId: o, history: jx(n, o) }, queueMicrotask(() => {
    mo = null;
  }));
  const c = await mo.history.lastNodeOutput(e, a);
  return a() ? c ? (Qg(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (pl.has(n) || Hs.set(o, (Hs.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function fp(e, t, n, r = Si) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const dp = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Gs(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return dp.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return dp.test(String((e == null ? void 0 : e.filename) || ""));
}
const Bc = /* @__PURE__ */ new WeakMap();
function Kx(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Eu(e) {
  return Kx(e) ? (Bc.has(e) || Bc.set(e, Math.random().toString(36).slice(2, 10)), Bc.get(e)) : "run";
}
function t0(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function Bx(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const f of c) {
      const d = n(a, f);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, g) => g)));
    }
  };
  return o(e, t), r;
}
function n0(e, t = [], n = null) {
  var o;
  const r = typeof n == "function" ? n : (a) => String((a == null ? void 0 : a.src) || (a == null ? void 0 : a.url) || a || "").trim();
  for (const a of t) {
    const c = [(o = e == null ? void 0 : e.ui) == null ? void 0 : o[a], e == null ? void 0 : e[a]];
    for (const f of c)
      if (Array.isArray(f))
        for (const d of f) {
          const b = r(d);
          if (b && (/\.mp4(\?|$)/i.test(b) || String((d == null ? void 0 : d.format) || "").toLowerCase() === "video/mp4"))
            return b;
        }
  }
  return "";
}
function Ux({
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
  }, b = () => {
    if (!a) {
      o();
      try {
        Promise.resolve(r.play()).then(d).catch(() => {
        });
      } catch {
      }
    }
  }, g = () => o(), w = () => {
    o(), d();
  }, x = () => o();
  let M = !1;
  const k = () => {
    M = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), f || r.addEventListener("timeupdate", g), r.addEventListener("play", w), r.addEventListener("pause", x), r.addEventListener("error", k), r.src = t, r.load(), { video: r, destroy: () => {
    var L, W;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", g), r.removeEventListener("play", w), r.removeEventListener("pause", x), r.removeEventListener("error", k), r.pause(), (L = r.removeAttribute) == null || L.call(r, "src"), (W = r.load) == null || W.call(r));
  }, failed: () => M };
}
function Oi(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function Wx(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function hp(e, t, n = null) {
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
  return !r && n != null && (r = Wx(e == null ? void 0 : e.graph, n)), r;
}
function Yx(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function Xx(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function qx(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function r0({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return o(O[0]);
      const R = String(O[0] || "").trim();
      if (R)
        return Oi(t, {
          filename: R,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const G of O) {
        const ee = o(G);
        if (ee) return ee;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : Oi(t, O);
  }, a = (O) => {
    if (!O || typeof O != "object") return "";
    const R = String(O.type || "").trim().toLowerCase();
    if (R === "dataurl") return String(O.value || "");
    if (R !== "comfy_image") return "";
    const G = String(O.filename || "").trim();
    return G ? Oi(t, {
      filename: G,
      subfolder: String(O.subfolder || ""),
      type: String(O.storage || "input")
    }) : "";
  }, c = (O) => {
    const R = e == null ? void 0 : e.nodeOutputs;
    if (!R || O == null) return null;
    const G = String(O);
    return R instanceof Map ? R.get(O) || R.get(G) || R.get(Number(G)) || null : R[O] || R[G] || null;
  }, f = (O, R) => {
    var ee;
    const G = c(O == null ? void 0 : O.id);
    return Array.isArray((ee = G == null ? void 0 : G.ui) == null ? void 0 : ee[R]) ? G.ui[R] : Array.isArray(G == null ? void 0 : G[R]) ? G[R] : [];
  }, d = (O, R) => {
    const G = c(O == null ? void 0 : O.id);
    return G != null && G.ui && Object.prototype.hasOwnProperty.call(G.ui, R) ? G.ui[R] : G && Object.prototype.hasOwnProperty.call(G, R) ? G[R] : null;
  }, b = (O, R) => {
    const G = d(O, "pano_sticker_input_state_hash"), ee = Array.isArray(G) ? G[0] : G;
    return String(ee ?? "").trim() || qx(R);
  }, g = (O) => {
    const R = [], G = /* @__PURE__ */ new Set();
    for (const ee of O || []) {
      const ve = o(ee);
      !ve || G.has(ve) || (G.add(ve), R.push(ve));
    }
    return R;
  }, w = (O, R) => {
    var ve;
    const G = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && G.push(O.images), Array.isArray((ve = O == null ? void 0 : O.ui) == null ? void 0 : ve.images) && O.ui.images.length && G.push(O.ui.images);
    const ee = [];
    for (const T of G)
      R >= 0 && R < T.length && ee.push(T[R]), ee.push(...T);
    return ee;
  }, x = (O, R) => {
    var Le;
    const G = String(R || "").trim();
    if (!G) return { src: "", sourceType: "", inputName: "" };
    const ve = (Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : []).findIndex((H) => String((H == null ? void 0 : H.name) || "") === G);
    if (ve < 0) return { src: "", sourceType: "", inputName: G };
    const T = O.graph ? O.getInputLink(ve) : null;
    if ((T == null ? void 0 : T.origin_id) == null) return { src: "", sourceType: "", inputName: G };
    const N = T.origin_id, X = hp(O, ve, N);
    if (!X) return { src: "", sourceType: "", inputName: G };
    const U = Number(T.origin_slot ?? 0);
    let q = [];
    try {
      q = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(X) || [] : [];
    } catch {
      q = [];
    }
    if (Array.isArray(q) && q.length) {
      const H = [];
      U >= 0 && U < q.length && H.push(q[U]), H.push(...q);
      const Ne = g(H.filter((He) => !Gs(He)));
      if (Ne.length)
        return { src: Ne[0], srcCandidates: Ne, sourceType: "appNodeImageUrls", inputName: G };
    }
    const Y = c((X == null ? void 0 : X.id) ?? N), ne = g(w(Y, U).filter((H) => !Gs(H))).map((H) => `${H}&pano_src=${Eu(Y)}`);
    if (ne.length)
      return { src: ne[0], srcCandidates: ne, sourceType: "nodeOutputs", inputName: G };
    const J = Array.isArray(X == null ? void 0 : X.imgs) ? X.imgs : [];
    if (J.length) {
      const H = [];
      U >= 0 && U < J.length && H.push(J[U]), H.push(...J);
      const Ne = g(H);
      if (Ne.length)
        return { src: Ne[0], srcCandidates: Ne, sourceType: "nodeImgs", inputName: G };
    }
    const E = (Le = X == null ? void 0 : X.widgets) == null ? void 0 : Le.find((H) => String((H == null ? void 0 : H.name) || "").toLowerCase() === "image");
    if (E) {
      let H = o(E.value);
      if (H && !H.includes("/") && !H.includes(":") && (X.comfyClass === "LoadImage" || X.type === "LoadImage") && (H = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(H)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(H)}&type=input&subfolder=`), H) return { src: H, sourceType: "widget", inputName: G };
    }
    return { src: "", sourceType: "", inputName: G };
  }, M = (O, R = []) => {
    var ee;
    const G = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [];
    for (const ve of R) {
      const T = G.findIndex((q) => String((q == null ? void 0 : q.name) || "") === ve), N = T >= 0 && O.graph ? O.getInputLink(T) : null;
      if ((N == null ? void 0 : N.origin_id) == null) continue;
      const X = c(((ee = hp(O, T, N.origin_id)) == null ? void 0 : ee.id) ?? N.origin_id), U = (Array.isArray(X == null ? void 0 : X.images) ? X.images : []).find(Gs);
      return U ? `${Oi(t, U)}&pano_src=${Eu(X)}` : "";
    }
    return "";
  }, k = (O, R = []) => {
    const G = Array.isArray(R) ? R : [R];
    for (const ee of G) {
      const ve = x(O, ee);
      if (String((ve == null ? void 0 : ve.src) || "").trim()) return ve;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, _ = (O) => {
    const R = String(O || "").trim();
    if (!R) return [];
    if (Yx(R)) return [R];
    const { filename: G, subfolder: ee } = Xx(R);
    return G ? g([
      Oi(t, { filename: G, subfolder: ee, type: "temp" }),
      Oi(t, { filename: G, subfolder: ee, type: "output" }),
      Oi(t, { filename: G, subfolder: ee, type: "input" }),
      R
    ]) : [R];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (O) => {
      var R, G;
      try {
        (G = (R = O == null ? void 0 : O.__panoLinkedInputImageCache) == null ? void 0 : R.forEach) == null || G.call(R, (ee, ve, T) => {
          var N;
          ee != null && ee.img && ((N = r == null ? void 0 : r.isImageLoadFailed) != null && N.call(r, ee.img)) && T.delete(ve);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (O, R) => {
      var G;
      (G = O == null ? void 0 : O.delete) == null || G.call(O, `__ui__${String(R || "")}`);
    },
    linkedValue: (O, R) => {
      var N, X, U, q;
      const G = String(R || ""), ee = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === G) : -1, ve = ee >= 0 && O.graph ? O.getInputLink(ee) : null;
      if (ve) {
        const Y = c(ve.origin_id), ne = [
          Y == null ? void 0 : Y.output,
          Y == null ? void 0 : Y.result,
          (N = Y == null ? void 0 : Y.data) == null ? void 0 : N.output,
          (X = Y == null ? void 0 : Y.data) == null ? void 0 : X.result,
          (U = Y == null ? void 0 : Y.ui) == null ? void 0 : U.output,
          (q = Y == null ? void 0 : Y.ui) == null ? void 0 : q.result
        ];
        for (const J of ne) {
          if (!Array.isArray(J)) continue;
          const E = J[Number(ve.origin_slot || 0)];
          if (typeof E == "string" && E.trim()) return E;
        }
      }
      const T = Array.isArray(O == null ? void 0 : O.widgets) ? O.widgets.find((Y) => String((Y == null ? void 0 : Y.name) || "") === G) : null;
      return String((T == null ? void 0 : T.value) || "");
    },
    linkedVideoFile: M,
    loadPreferredExactLinkedImage: (O, R = [], G = null, ee = "") => {
      var nt;
      const ve = Array.isArray(R) ? R : [R], T = k(O, ve), X = (Array.isArray(T == null ? void 0 : T.srcCandidates) && T.srcCandidates.length ? T.srcCandidates : [T == null ? void 0 : T.src]).map((pt) => String(pt || "").trim()).filter(Boolean);
      if (!X.length) return null;
      const U = g(X.flatMap((pt) => _(pt)));
      if (!U.length) return null;
      O.__panoLinkedInputImageCache || (O.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const q = String(ee || ve.join("|") || "image_exact"), Y = X.join(`
`), ne = O.__panoLinkedInputImageCache.get(q);
      if (ne && ne.srcRaw === Y && ne.img) return ne.img;
      const J = n || globalThis.Image;
      if (typeof J != "function") return null;
      const E = new J();
      (nt = r == null ? void 0 : r.markImageLoading) == null || nt.call(r, E, Y);
      const Le = { srcRaw: Y, resolvedSrc: "", img: E };
      O.__panoLinkedInputImageCache.set(q, Le);
      let H = -1;
      const Ne = (pt) => {
        var rt, Zt, Bn;
        pt === "ready" ? (rt = r == null ? void 0 : r.markImageReady) == null || rt.call(r, E, Y) : (Zt = r == null ? void 0 : r.markImageFailed) == null || Zt.call(r, E, Y), G == null || G(E), (Bn = O.setDirtyCanvas) == null || Bn.call(O, !0, !0);
      }, He = () => {
        if (H += 1, H >= U.length) {
          Ne("failed");
          return;
        }
        Le.resolvedSrc = U[H], E.src = Le.resolvedSrc;
      };
      return E.onload = () => Ne("ready"), E.onerror = () => {
        if (H + 1 < U.length) {
          He();
          return;
        }
        Ne("failed");
      }, He(), E;
    },
    output: c,
    resolvePreferredExactLinkedSource: k,
    source: o,
    uiImage: (O, R, G, ee = null) => {
      var Y, ne, J;
      const ve = f(O, R)[0] || null, T = o(ve);
      if (!T) return null;
      const N = `__ui__${R}`, X = (Y = G == null ? void 0 : G.get) == null ? void 0 : Y.call(G, N);
      if (X && X.__panoSrc === T) return X;
      const U = n || globalThis.Image;
      if (typeof U != "function") return null;
      const q = new U();
      return q.__panoSrc = T, (ne = r == null ? void 0 : r.markImageLoading) == null || ne.call(r, q, T), q.onload = () => {
        var E;
        (E = r == null ? void 0 : r.markImageReady) == null || E.call(r, q, T), ee == null || ee(q);
      }, q.onerror = () => {
        var E;
        (E = r == null ? void 0 : r.markImageFailed) == null || E.call(r, q, T), ee == null || ee(q);
      }, q.src = T, (J = G == null ? void 0 : G.set) == null || J.call(G, N, q), q;
    },
    uiList: f,
    uiValue: d
  };
}
function i0({
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
  const b = () => c || e(), g = () => a(n(b()));
  return {
    model: () => n(b()),
    refresh() {
      return d ? this.model() : (g(), this.model());
    },
    beginGesture() {
      return d || c ? !1 : (c = e(), f = !1, g(), !0);
    },
    updateGesture(w) {
      if (d) return !1;
      c || this.beginGesture();
      const x = t(c, w);
      return x.changed ? (c = x.state, f = !0, r(c), g(), !0) : !1;
    },
    hasGestureChanges() {
      return c != null && f;
    },
    commitGesture() {
      if (d || !c) return !1;
      const w = f;
      return w && o(c), c = null, f = !1, r(null), g(), w;
    },
    cancelGesture() {
      return d || !c ? !1 : (c = null, f = !1, r(null), g(), !0);
    },
    apply(w) {
      if (d) return !1;
      c && this.commitGesture();
      const x = t(e(), w);
      return x.changed ? (o(x.state), g(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const w = c != null;
      c = null, f = !1, w && r(null);
    }
  };
}
const Ks = "sticker_image_1", o0 = "external_image", Xi = 0;
function To(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function Uc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function xi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Bs(e, t = Xi) {
  return (e == null ? void 0 : e.version) !== 2 ? xi(e) : xi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: $l(n, t).active,
    external: n.source.kind === "port",
    ...wf(n, t)
  }));
}
function kf(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && xi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function a0(e) {
  return String((e == null ? void 0 : e.id) || "") === Ks || String((e == null ? void 0 : e.source_kind) || "") === o0;
}
function Mf(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : a0(t);
}
const s0 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function l0(e) {
  return !a0(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(s0.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function c0(e) {
  const t = l0(e);
  return t ? s0.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function u0(e, t = {}) {
  var z, O, R;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((G) => String((G == null ? void 0 : G.id) || "") === Ks);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const G = String(((z = e.active) == null ? void 0 : z.selected_sticker_id) || "") === Ks;
    return {
      state: {
        ...e,
        stickers: n.filter((ee, ve) => ve !== r),
        active: G ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, f = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), g = d > 0 && b > 0, w = Math.max(1, d), x = Math.max(1, b), M = t.pose && typeof t.pose == "object" ? t.pose : {}, k = f ? M.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || M.hFOV_deg || 30, _ = Math.min(179, Math.max(0.1, Number(k)));
  if (!f) {
    if (!g) return { state: e, changed: !1 };
    const G = To(_, w, x), ee = Number(((O = c == null ? void 0 : c.initial_pose) == null ? void 0 : O.hFOV_deg) ?? _), ve = To(ee, w, x), T = Number(((R = c == null ? void 0 : c.initial_pose) == null ? void 0 : R.vFOV_deg) ?? ve);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - G) <= 1e-6 && Math.abs(T - ve) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((N, X) => X === r ? {
          ...N,
          vFOV_deg: G,
          initial_pose: N.initial_pose && typeof N.initial_pose == "object" ? { ...N.initial_pose, vFOV_deg: ve } : N.initial_pose
        } : N)
      },
      changed: !0
    };
  }
  const F = n.reduce((G, ee) => Math.max(G, Number((ee == null ? void 0 : ee.z_index) || 0)), -1), L = {
    yaw_deg: Number(M.yaw_deg || 0),
    pitch_deg: Number(M.pitch_deg || 0),
    hFOV_deg: _,
    vFOV_deg: g ? To(_, w, x) : Number(M.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || _),
    rot_deg: Number(M.rot_deg ?? M.roll_deg ?? 0)
  }, W = {
    ...c || {},
    id: Ks,
    source_kind: o0,
    source_link_id: o,
    source_state_hash: a,
    ...L,
    initial_pose: { ...L },
    visible: !0,
    z_index: F + 1
  }, I = r >= 0 ? n.map((G, ee) => ee === r ? W : G) : [...n, W];
  return { state: { ...e, stickers: I }, changed: !0 };
}
function pp(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
function f0(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: pp(e, "sticker"),
    awaitingPose: !t && pp(e, "sticker_state"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function d0(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var M;
  const c = e.stickers.findIndex((k) => Mf(e, k)), f = c >= 0 ? e.stickers[c] : null;
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
    const k = [f.size.value, ...f.size.keyframes.map((L) => L.value)], _ = k.map((L) => To(L.hFOV_deg, o, a));
    if (k.every((L, W) => Math.abs(L.vFOV_deg - _[W]) <= 1e-6)) return { state: e, changed: !1 };
    const F = {
      value: { ...f.size.value, vFOV_deg: _[0] },
      keyframes: f.size.keyframes.map((L, W) => ({ ...L, value: { ...L.value, vFOV_deg: _[W + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((L, W) => W === c ? { ...L, size: F } : L) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((k) => k.id));
  let g = 1;
  for (; b.has(`sticker_${g}`); ) g += 1;
  const w = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = xf(`sticker_${g}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: w,
    vFOV_deg: d ? To(w, o, a) : w
  }, xi(e).reduce((k, _) => Math.max(k, _.z_index), -1) + 1);
  return { state: { ...e, stickers: [...e.stickers, x] }, changed: !0 };
}
function Nf(e) {
  const t = xi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: Uc(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: Uc(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: Uc(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function h0(e) {
  const t = kf(e), n = Mf(e, t), r = xi(e).some((f) => f && f.visible !== !1), o = Nf(e), a = t ? o.findIndex((f) => f.type === "sticker" && f.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: c0(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function Jx(e) {
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
function mp(e, t) {
  const n = kf(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = Jx(e), o = String(n.id || ""), a = Nf(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [f] = a.splice(c, 1);
  return t === "front" ? a.push(f) : a.unshift(f), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function Zx(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function Qx(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return u0(e, t.value);
  if (t.type === "sync-port") return d0(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = Nf(e).reduce((x, M) => Math.max(x, Number(M.z_index || 0)), -1), b = 30, g = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: To(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, xf(a, zs(o.asset), g, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const w = { id: a, asset_id: c, ...g, z_index: d + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [c]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], w],
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
  const n = kf(e);
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
    const o = l0(n);
    return !o || !c0(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return mp(e, "front");
  if (t.type === "send-back") return mp(e, "back");
  if (t.type === "delete-selected") {
    if (Mf(e, n))
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
    return e.version !== 2 && (f.assets = Zx(f)), { state: f, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? wf(n, Xi) : n, f = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(c[d] || 0)) > 1e-12 && (f[d] = b);
    }), !Object.keys(f).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = Sx(n, f);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return Dg(b, Xi, d), { state: { ...e, stickers: e.stickers.map((g) => g === n ? b : g) }, changed: !0 };
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
function eS(e = {}) {
  return i0({
    ...e,
    reduce: Qx,
    projectModel: h0
  });
}
const gp = 2;
function mi(e, t) {
  return Math.floor(e * t + 0.5);
}
function p0({ video: e, clock: t, pageHidden: n, fps: r, span: o, loop: a, onFrame: c, onCapture: f, onChange: d }) {
  let b = 0, g = !1, w = !1, x = { name: "idle" }, M = [];
  const k = () => g && !w, _ = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function F() {
    for (const H of M) H();
    M = [];
  }
  function L(H, Ne = {}) {
    return F(), x = { name: H, ...Ne }, d(), x;
  }
  function W(H, Ne, He) {
    const nt = () => {
      x === H && He();
    };
    e.addEventListener(Ne, nt), M.push(() => e.removeEventListener(Ne, nt));
  }
  function I(H, Ne) {
    let He = t.requestFrame(function nt(pt) {
      x === H && (Ne(pt), x === H && (He = t.requestFrame(nt)));
    });
    M.push(() => t.cancelFrame(He));
  }
  function z(H) {
    b = H, c(b);
  }
  function O() {
    return L(w ? "error" : "idle");
  }
  function R() {
    w = !0, O();
  }
  function G() {
    const { seekable: H } = e, Ne = H != null && H.length ? H.end(H.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(b / r(), Number.isFinite(Ne) ? Ne : 1 / 0));
  }
  function ee(H) {
    if (!k()) return H === "play" ? U() : O();
    if (e.readyState < gp) {
      const Ne = L("loading", { then: H });
      return W(Ne, "loadeddata", () => ee(Ne.then)), W(Ne, "error", R), Ne;
    }
    return H === "play" && b / r() >= Number(e.duration) ? U() : ve(H, !1);
  }
  function ve(H, Ne) {
    const He = G();
    if (!e.ended && mi(Number(e.currentTime), r()) === mi(He, r())) return T(H);
    const nt = L("seeking", { then: H, frame: b, retried: Ne });
    return W(nt, "seeked", () => {
      const pt = mi(Number(e.currentTime), r()) === mi(G(), r()), rt = b === nt.frame;
      pt || rt && nt.retried ? T(nt.then) : ve(nt.then, rt);
    }), W(nt, "error", R), e.currentTime = He, nt;
  }
  function T(H) {
    return H === "play" ? N() : (f(), O());
  }
  function N() {
    const H = L("playingVideo", { presented: Number(e.currentTime), shown: !1 });
    if (W(H, "pause", () => e.ended ? X() : ne()), W(H, "ended", X), W(H, "error", R), a() && mi(Number(e.duration), r()) >= o()) {
      const He = e.loop;
      e.loop = !0, M.push(() => {
        e.loop = He;
      });
    }
    const Ne = (He, nt) => {
      H.presented = He, nt && !H.shown && (H.shown = !0, d()), q(mi(He, r()));
    };
    if (_()) {
      let He = e.requestVideoFrameCallback(function nt(pt, rt) {
        x === H && (Ne(Number(rt.mediaTime), !0), x === H && (He = e.requestVideoFrameCallback(nt)));
      });
      M.push(() => {
        var nt;
        return (nt = e.cancelVideoFrameCallback) == null ? void 0 : nt.call(e, He);
      });
    } else
      I(H, () => Ne(Number(e.currentTime), e.readyState >= gp));
    return Promise.resolve(e.play()).catch(() => {
      x === H && ne();
    }), H;
  }
  function X() {
    f(), U();
  }
  function U() {
    const H = L("playingClock", { startTs: t.now(), startFrame: b });
    return I(H, (Ne) => q(H.startFrame + Math.floor((Ne - H.startTs) / 1e3 * r()))), H;
  }
  function q(H) {
    if (H < o()) {
      z(H);
      return;
    }
    if (!a()) {
      Y(o() - 1);
      return;
    }
    x.name === "playingVideo" && (F(), e.pause()), z(0), ee("play");
  }
  function Y(H) {
    x.name === "playingVideo" ? (F(), e.pause(), z(Math.max(0, H)), f()) : z(Math.max(0, H)), ee("still");
  }
  function ne() {
    if (x.name === "loading" || x.name === "seeking")
      x.then = "still", d();
    else if (x.name === "playingVideo") {
      const H = _() && !n() ? x.presented : Number(e.currentTime);
      Y(Math.min(mi(H, r()), o() - 1));
    } else x.name === "playingClock" && Y(Math.min(b, o() - 1));
  }
  function J() {
    if (!Le()) {
      if (b >= o() - 1 && z(0), x.name === "loading" || x.name === "seeking") {
        x.then = "play", d();
        return;
      }
      ee("play");
    }
  }
  function E(H) {
    const Ne = Math.max(0, Math.round(H));
    if (x.name === "loading" || x.name === "seeking") {
      x.then = "still", z(Ne), d();
      return;
    }
    x.name === "playingVideo" && (F(), e.pause()), z(Ne), ee("still");
  }
  function Le() {
    return x.name === "playingVideo" || x.name === "playingClock" || x.then === "play";
  }
  return {
    get frame() {
      return b;
    },
    get state() {
      return x.name;
    },
    get playing() {
      return Le();
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return x.name === "playingVideo" && x.shown;
    },
    play: J,
    stop: ne,
    seek: E,
    toggle() {
      Le() ? ne() : J();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(H) {
      F(), g = !!H, w = !1, ee("still");
    },
    dispose() {
      F(), g = !1, x = { name: "idle" };
    }
  };
}
function tS(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function nS({ video: e, clock: t, pageHidden: n, readState: r, onFrame: o, onCapture: a, onChange: c }) {
  let f = "";
  const d = /* @__PURE__ */ new Set(), b = () => r().timeline.fps, g = p0({
    video: e,
    clock: t,
    pageHidden: n,
    fps: b,
    // The editor's Timeline span: the Timeline length (5 s without one), widened to the VIDEO.
    span: () => Eg(r(), {
      minimum: Math.round(b() * 5),
      frames: f && Number.isFinite(e.duration) ? Math.round(e.duration * b()) : 0
    }),
    loop: () => !0,
    onFrame: o,
    onCapture: a,
    onChange: c
  }), w = () => {
    f && (d.add(f), c());
  };
  e.muted = !0, e.addEventListener("error", w);
  function x() {
    g.playing && g.seek(Xi);
  }
  function M(_) {
    for (const L of d)
      _.includes(L) || d.delete(L);
    const F = _.find((L) => L && !d.has(L)) || "";
    F !== f && (f = F, e.pause(), F ? e.src = F : e.removeAttribute("src"), e.load(), g.setSource(!!F), g.frame !== Xi && g.seek(Xi));
  }
  function k(_) {
    return Cu(_) || !!f && g.state !== "error";
  }
  return {
    get frame() {
      return g.frame;
    },
    get playing() {
      return g.playing;
    },
    get showsVideo() {
      return g.showsVideo;
    },
    get source() {
      return f;
    },
    stop: x,
    toggle() {
      g.playing ? x() : g.play();
    },
    // Follows the node: a surface not shown stops and lets its VIDEO go. Returns whether the play
    // button shows.
    follow({ shown: _, sources: F, state: L }) {
      M(_ ? F : []);
      const W = _ && k(L);
      return W || x(), W;
    },
    dispose() {
      g.dispose(), e.removeEventListener("error", w), e.pause(), e.removeAttribute("src"), e.load(), f = "";
    }
  };
}
const ml = Math.PI / 180, Nr = 180 / Math.PI, rS = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), iS = 260;
function yp(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function m0(e, t) {
  return t ? m0(t, e % t) : e;
}
function oS(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), f = Math.max(1, Math.round(t / a * o)), d = m0(c, f) || 1;
  return `${Math.round(c / d)}:${Math.round(f / d)}`;
}
function Va(e, t) {
  const n = yp(e), r = yp(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: oS(n, r) };
}
function qi(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function g0(e) {
  const t = qi(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Xr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Pf(e, t, n = rS) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (F, L, W) => {
    const I = F + L, z = Math.max(0, W - 1), O = I > z && I > 0 ? z / I : 1;
    return [F * O, L * O];
  }, [g, w] = b(d, c, r), [x, M] = b(a, f, o), k = {
    x: g,
    y: x,
    w: Math.max(1, r - g - w),
    h: Math.max(1, o - x - M)
  }, _ = gf(k, t);
  return {
    x: k.x + (k.w - _.width) * 0.5,
    y: k.y + (k.h - _.height) * 0.5,
    w: _.width,
    h: _.height,
    safeRect: k
  };
}
function aS(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Pf({ width: n, height: r }, 1), a = Z(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * ml * 0.5)), f = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = dg(d, sg(
    { x: n * 0.5, y: r * 0.5 },
    c,
    f
  )), g = sS(b, Uo(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), w = yf({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: g.yaw,
    pitchDeg: g.pitch,
    rollDeg: g.roll,
    frameFovDeg: w.hFOV_deg
  };
}
function y0(e) {
  return {
    yaw: Kt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Nr),
    pitch: Z(Math.asin(Z(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Nr, -89.9, 89.9)
  };
}
function sS(e, t) {
  const n = y0(e), r = Uo(n.yaw, n.pitch, 0), o = Rc(t, e), a = {
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
    roll: Dl(Math.atan2(
      Rc(f, r.up),
      Rc(f, r.right)
    ) * Nr)
  };
}
function b0(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Pf({ width: n, height: r }, Wi(e)), a = Ui(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, f = dg(e, sg(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = y0(f);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: Z(2 * Math.atan(n / (2 * a)) * Nr, 1, 179)
  };
}
function lS(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = Ui(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: b, halfH: g } = bf(d, f), w = {
    x: a - b,
    y: c - g,
    w: b * 2,
    h: g * 2
  }, x = w.x <= 0 && w.y <= 0 && w.x + w.w >= r && w.y + w.h >= o, M = r / o, k = Math.tan(_u * ml), _ = M >= 1 ? k : k * M, F = M >= 1 ? k / M : k;
  return {
    focalPx: f,
    rect: w,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / f) * Nr,
      vFOV_deg: 2 * Math.atan(g / f) * Nr
    },
    fallback: x ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(_) * Nr,
        vFOV_deg: 2 * Math.atan(F) * Nr
      }
    }
  };
}
function go(e, t) {
  const n = qi(e);
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
function cS(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = Ui(n, e);
    return yf(gf(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: $s(a, t) };
}
function bp(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Va(t, n);
  if (!a) return e;
  const c = Wi(e) >= 1;
  r && a.ratio >= 1 !== c && (a = Va(a.height, a.width));
  const f = cS(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...f, aspect_id: a.label };
}
function v0(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (qi(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = cg({
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
    const r = qi(e);
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
    return go(e, (r) => bp(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return go(e, (r) => {
      const a = String(Xr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? Va(a[1], a[2]) : Va(Wi(r), 1);
      return c ? bp(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? go(e, (o) => {
      const a = Dl(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const f = { ...o, roll_deg: a };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? go(e, (r) => {
    const o = ug(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? go(e, (r) => {
    const o = fg(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? go(e, (r) => {
    const o = x0(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function _0({
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
  }, b = {
    x: d.x + d.w * 0.5,
    y: d.y + d.h * 0.5
  }, g = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (f === "shift" && g < Math.min(d.w, d.h) * c) return null;
  const w = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: f,
    frame: d,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: w,
    accumulatedRad: 0
  };
}
function w0(e, t, n = {}) {
  var c, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + og(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: ag(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function x0(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * ml, d = Math.cos(f), b = Math.sin(f), g = a / n, w = -c / n, x = g * d - w * b, M = g * b + w * d, k = Number(e.pitch_deg || 0) * ml, _ = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: Kt(Number(e.yaw_deg || 0) - Math.atan(x) / _ * Nr),
    pitch_deg: Z(Number(e.pitch_deg || 0) - Math.atan(M) * Nr, -90, 90)
  };
}
function uS({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return i0({
    readState: e,
    reduce: v0,
    projectModel: g0,
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
  stop: "stop",
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
}), fS = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, dS = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: fS(t[2])
})), hS = {
  globe: { name: "world", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0' /><path d='M3.6 9h16.8' /><path d='M3.6 15h16.8' /><path d='M11.5 3a17 17 0 0 0 0 18' /><path d='M12.5 3a17 17 0 0 1 0 18' />" },
  pano: { name: "view-360", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0' /><path d='M12 12m-4 0a4 9 0 1 0 8 0a4 9 0 1 0 -8 0' /><path d='M3 12c0 2.21 4.03 4 9 4s9 -1.79 9 -4s-4.03 -4 -9 -4s-9 1.79 -9 4z' />" },
  unwrap: { name: "panorama-horizontal", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4.338 5.53c5.106 1.932 10.211 1.932 15.317 0a1 1 0 0 1 1.345 .934v11c0 .692 -.692 1.2 -1.34 .962c-5.107 -1.932 -10.214 -1.932 -15.321 0c-.648 .246 -1.339 -.242 -1.339 -.935v-11.027a1 1 0 0 1 1.338 -.935l0 .001' />" },
  camera: { name: "camera", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2' /><path d='M9 13a3 3 0 1 0 6 0a3 3 0 0 0 -6 0' />" },
  play: { name: "player-play", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 4v16l13 -8l-13 -8' />" },
  pause: { name: "player-pause", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M6 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12' /><path d='M14 6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1l0 -12' />" },
  stop: { name: "player-stop", body: "<path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M5 7a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2l0 -10' />" },
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
}, vp = Object.fromEntries(
  Object.entries(hS).map(([e, t]) => [e, {
    name: t.name,
    elements: dS(t.body)
  }])
), It = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ft(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(vp, r) ? vp[r] : null;
    });
    return (r, o) => n.value ? (ae(), fe("svg", {
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
      (ae(!0), fe(Ue, null, St(n.value.elements, (a, c) => (ae(), fe(Ue, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ae(), fe("path", bi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ae(), fe("circle", bi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ae(), fe("rect", bi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ae(), fe("line", bi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ae(), fe("polyline", bi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ae(), fe("polygon", bi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ct("", !0)
      ], 64))), 128))
    ], 2)) : ct("", !0);
  }
}, sn = {
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
    return (r, o) => (ae(), Tr(Fv(e.tag), bi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Mm(() => [
        Fe(It, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, pS = ["aria-expanded", "disabled"], mS = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, gS = ["data-aspect", "disabled", "onClick"], yS = { class: "pano-cutout-aspect-custom" }, bS = ["disabled"], vS = ["disabled"], _S = ["data-custom-width", "data-custom-height", "disabled"], S0 = {
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
    ]), a = /* @__PURE__ */ zt("1"), c = /* @__PURE__ */ zt("1"), f = /* @__PURE__ */ zt(null), d = ft(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = ft(() => {
      const _ = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], F = String(n.model.aspectLabel || "");
      return _.length ? _.map((L) => {
        const W = typeof L == "string" ? L : String((L == null ? void 0 : L.value) || ""), I = typeof L == "string" ? L : String((L == null ? void 0 : L.label) || W);
        return {
          ...typeof L == "object" && L ? L : {},
          value: W,
          label: I,
          active: F ? W === F : (L == null ? void 0 : L.active) === !0
        };
      }) : o.map((L) => ({
        ...L,
        active: L.value === F
      }));
    }), g = ft(() => {
      var F;
      const _ = String(n.model.aspectLabel || "").trim();
      return _ || String(((F = b.value.find((L) => L.active === !0)) == null ? void 0 : F.label) || "Aspect");
    });
    Ki(g, (_) => {
      const F = String(_ || "").match(/^([0-9.]+):([0-9.]+)$/);
      F && (a.value = F[1], c.value = F[2]);
    }, { immediate: !0 });
    function w(_) {
      r("action", _);
    }
    function x(_) {
      var F;
      n.model.aspectOpen === !0 && ((F = f.value) != null && F.contains(_.target) || w({ type: "close-aspect" }));
    }
    El(() => {
      document.addEventListener("pointerdown", x, !0);
    }), Ka(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function M(_) {
      const [F, L] = String(_.value || "").split(":");
      w({
        type: "set-aspect",
        width: F,
        height: L,
        preserveOrientation: !0
      });
    }
    function k() {
      w({
        type: "set-aspect",
        width: a.value,
        height: c.value,
        preserveOrientation: !1
      });
    }
    return (_, F) => (ae(), fe("div", {
      ref_key: "rootElement",
      ref: f,
      class: at(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ae(), Tr(sn, {
        key: 0,
        icon: e.model.aspectIcon || Je(Me).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: F[0] || (F[0] = (L) => w({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ae(), fe("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: F[1] || (F[1] = (L) => w({ type: "toggle-aspect" }))
      }, [
        Fe(It, {
          icon: e.model.aspectIcon || Je(Me).aspect
        }, null, 8, ["icon"]),
        B("span", null, tt(g.value), 1),
        Fe(It, {
          icon: Je(Me).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, pS)),
      _i(B("div", mS, [
        (ae(!0), fe(Ue, null, St(b.value, (L) => (ae(), fe("button", {
          key: L.value,
          class: at(["pano-btn pano-frame-aspect-choice", { active: L.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": L.value,
          disabled: d.value,
          onClick: (W) => M(L)
        }, tt(L.label), 11, gS))), 128)),
        B("div", yS, [
          _i(B("input", {
            "onUpdate:modelValue": F[2] || (F[2] = (L) => a.value = L),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, bS), [
            [Uh, a.value]
          ]),
          F[4] || (F[4] = B("span", { "aria-hidden": "true" }, ":", -1)),
          _i(B("input", {
            "onUpdate:modelValue": F[3] || (F[3] = (L) => c.value = L),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, vS), [
            [Uh, c.value]
          ]),
          B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, _S)
        ])
      ], 512), [
        [Bo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, wS = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, xS = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ zt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (ae(), fe("div", {
      class: at(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Ct(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Fe(sn, {
        icon: Je(Me).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Ct((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", wS, [
        o[3] || (o[3] = B("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ae(!0), fe(Ue, null, St(Je(n), (a) => (ae(), fe("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          B("kbd", null, tt(a[0]), 1),
          B("span", null, tt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, SS = {
  class: "pano-view-unavailable",
  role: "status"
}, Af = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ae(), fe("div", SS, tt(Je(Wg)), 1));
  }
}, kS = { class: "pano-cutout-node-surface" }, MS = ["title", "disabled"], NS = { class: "value" }, PS = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, AS = {
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
    return (r, o) => (ae(), fe("div", kS, [
      B("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Ct(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Ct(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          Fe(It, {
            icon: Je(Me).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        Fe(sn, {
          icon: e.model.hasShot ? Je(Me).delete : Je(Me).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Fe(S0, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        B("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = Ct((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Fe(It, {
            icon: Je(Me).roll
          }, null, 8, ["icon"]),
          B("span", NS, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, MS),
        Fe(sn, {
          icon: Je(Me).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Fe(xS)
      ], 32),
      e.model.hasShot === !1 ? (ae(), fe("div", PS, " Choose a view · + Add Frame ")) : ct("", !0),
      e.model.viewUnavailable ? (ae(), Tr(Af, { key: 1 })) : ct("", !0)
    ]));
  }
}, k0 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ zt(null);
    let a, c = !1;
    function f() {
      if (!c) return { active: !1, intent: void 0 };
      const w = a;
      return a = void 0, c = !1, { active: !0, intent: w };
    }
    function d(w) {
      const x = o.value;
      return x instanceof HTMLInputElement ? (a = w, c = !0, x.value = "", x.click(), !0) : !1;
    }
    function b(w) {
      var _, F;
      const { active: x, intent: M } = f();
      if (!x) return;
      const k = ((F = (_ = w.target) == null ? void 0 : _.files) == null ? void 0 : F[0]) || null;
      if (k) {
        r("file-selected", { intent: M, file: k });
        return;
      }
      r("file-cancelled", { intent: M });
    }
    function g() {
      const { active: w, intent: x } = f();
      w && r("file-cancelled", { intent: x });
    }
    return t({ open: d }), (w, x) => (ae(), fe("input", {
      ref_key: "inputRef",
      ref: o,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: b,
      onCancel: g
    }, null, 544));
  }
}, CS = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, IS = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ zt(!1), n = Object.freeze([
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
    return (r, o) => (ae(), fe("div", {
      class: at(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Ct(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Ct(() => {
      }, ["stop"]))
    }, [
      Fe(sn, {
        icon: Je(Me).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Ct((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      B("div", CS, [
        o[3] || (o[3] = B("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ae(!0), fe(Ue, null, St(Je(n), (a) => (ae(), fe("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          B("kbd", null, tt(a[0]), 1),
          B("span", null, tt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, ES = { class: "pano-stickers-node-surface" }, OS = ["disabled"], FS = ["aria-label", "data-tip"], TS = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, DS = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, LS = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ zt(null);
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
    return (c, f) => (ae(), fe("div", ES, [
      B("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: f[5] || (f[5] = Ct(() => {
        }, ["stop"])),
        onWheel: f[6] || (f[6] = Ct(() => {
        }, ["stop"]))
      }, [
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: f[0] || (f[0] = (d) => r({ type: "open-editor" }))
        }, [
          Fe(It, {
            icon: Je(Me).fullscreen
          }, null, 8, ["icon"]),
          f[10] || (f[10] = B("span", { class: "label" }, "Full Editor", -1))
        ]),
        B("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          Fe(It, {
            icon: Je(Me).image
          }, null, 8, ["icon"]),
          f[11] || (f[11] = B("span", { class: "label" }, "Add Image", -1))
        ], 8, OS),
        Fe(sn, {
          icon: e.model.locked ? Je(Me).lock_closed : Je(Me).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Fe(sn, {
          icon: Je(Me).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Fe(sn, {
          icon: Je(Me).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Fe(sn, {
          icon: e.model.isExternalSelection ? Je(Me).back_initial : Je(Me).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Fe(IS)
      ], 32),
      e.model.playable === !0 ? (ae(), fe("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Stop" : "Play",
        "data-tip": e.model.playing ? "Stop" : "Play",
        onPointerdown: f[7] || (f[7] = Ct(() => {
        }, ["stop"])),
        onWheel: f[8] || (f[8] = Ct(() => {
        }, ["stop"])),
        onClick: f[9] || (f[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        Fe(It, {
          icon: e.model.playing ? Je(Me).stop : Je(Me).play
        }, null, 8, ["icon"])
      ], 40, FS)) : ct("", !0),
      e.model.hasStickers === !1 ? (ae(), fe("div", TS, " Add Image to place a sticker ")) : ct("", !0),
      e.model.dropActive === !0 ? (ae(), fe("div", DS, "Drop image to add")) : ct("", !0),
      Fe(k0, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ae(), Tr(Af, { key: 3 })) : ct("", !0)
    ]));
  }
}, _p = 24;
function RS(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function wp(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function $S(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function Ou(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => wp(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return wp(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : $S(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Cf(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function M0(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ma(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Z(n.x, -r, t.width + r),
    y: Z(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function VS(e) {
  const t = Uo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Z(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * ln * 0.5),
    tanY: Math.tan(Z(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * ln * 0.5)
  };
}
function Fi(e, t, n) {
  return mf(al(
    al(e.centerDir, sl(e.right, t)),
    sl(e.up, n)
  ));
}
function If(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = VS(e), r = ma(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    Fi(n, -n.tanX, n.tanY),
    Fi(n, n.tanX, n.tanY),
    Fi(n, n.tanX, -n.tanY),
    Fi(n, -n.tanX, -n.tanY)
  ].map((x) => ma(x, t)), a = Array.from({ length: 4 }, (x, M) => {
    const k = [];
    for (let _ = 0; _ <= 28; _ += 1) {
      const F = _ / 28;
      let L, W;
      M === 0 ? (L = -n.tanX + 2 * n.tanX * F, W = n.tanY) : M === 1 ? (L = n.tanX, W = n.tanY - 2 * n.tanY * F) : M === 2 ? (L = n.tanX - 2 * n.tanX * F, W = -n.tanY) : (L = -n.tanX, W = -n.tanY + 2 * n.tanY * F);
      const I = ma(Fi(n, L, W), t);
      I && k.push({ x: I.x, y: I.y });
    }
    return k;
  }), c = ma(Fi(n, 0, n.tanY), t), f = ma(
    Fi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, c, f];
  if (d.some((x) => !x || !Number.isFinite(x.x) || !Number.isFinite(x.y)))
    return { visible: !1 };
  if (!d.some((x) => x.rawZ > 1e-4)) return { visible: !1 };
  const b = f.x - c.x, g = f.y - c.y, w = Math.hypot(b, g) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((x) => ({ x: x.x, y: x.y })),
    boundaryEdges: a,
    rotateStemBase: { x: c.x, y: c.y },
    rotateHandle: {
      x: c.x + b / w * _p,
      y: c.y + g / w * _p
    },
    visible: !0
  };
}
function Wc(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: If(c, r) })).filter((c) => c.geometry.visible).sort((c, f) => {
    var d, b;
    return Number(((d = f.item) == null ? void 0 : d.z_index) || 0) - Number(((b = c.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((c) => {
    var f;
    return String(((f = c.item) == null ? void 0 : f.id) || "") === String(t || "");
  });
  if (a) {
    const c = Ou(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const f = Ou(c.geometry, n);
    if (f.kind !== "none") return { ...c, hit: f };
  }
  return null;
}
function zS(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Kt(Math.atan2(r.x, r.z) * An),
    pitch_deg: Math.asin(Z(r.y, -1, 1)) * An
  };
}
function jS(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Z(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Z(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function HS(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * An;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Ss = null;
function Ef() {
  return Ss || (Ss = new Promise((e) => {
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
  }), Ss);
}
function Zn(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function GS(e, t = 1024) {
  const n = Math.max(1, Math.round(Zn(e, 2048))), r = Math.min(n, Math.max(1, Math.round(Zn(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function KS(e, t, n) {
  const r = Zn(t), o = Zn(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = Zn(a.u0), f = Zn(a.v0), d = Zn(a.u1), b = Zn(a.v1);
  if (d <= c || b <= f) return null;
  const g = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + Zn(g.du)) * r,
    centerY: ((f + b) * 0.5 + Zn(g.dv)) * o,
    width: (d - c) * r,
    height: (b - f) * o,
    rotationRad: Zn(g.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Zn(g.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function BS(e, t, n) {
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
function US() {
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
    const b = () => {
      f.settled = !0;
      const g = [...f.listeners];
      f.listeners.clear(), g.forEach((w) => w()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, c, f, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), g = KS(a, c, f);
    if (!b.startsWith("data:") || !g) return null;
    const w = BS(a, c, f), x = String((a == null ? void 0 : a.id) || "").trim() || w, M = t.get(x);
    if ((M == null ? void 0 : M.revision) === w) return { source: M.source, revision: w };
    const k = r(b, d), _ = Number(k.naturalWidth || k.width || 0), F = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || _ < 1 || F < 1) return null;
    const L = document.createElement("canvas");
    L.width = Math.max(1, Math.round(c)), L.height = Math.max(1, Math.round(f));
    const W = L.getContext("2d");
    return W ? (g.wrapOffsets.forEach((I) => {
      W.save(), W.translate(g.centerX + I, g.centerY), W.rotate(g.rotationRad), W.scale(g.scale, g.scale), W.drawImage(
        k,
        -g.width * 0.5,
        -g.height * 0.5,
        g.width,
        g.height
      ), W.restore();
    }), t.set(x, { revision: w, source: L }), { source: L, revision: w }) : null;
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
function WS(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function YS(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function XS({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(w) {
    if (!w) return;
    w.entry.listeners.delete(w);
    const x = r.get(w.owner);
    (x == null ? void 0 : x.get(w.key)) === w && x.delete(w.key);
  }
  function c(w, x, M, k) {
    if (!w || typeof k != "function" || M.settled) return;
    let _ = r.get(w);
    _ || (_ = /* @__PURE__ */ new Map(), r.set(w, _));
    const F = _.get(x);
    if ((F == null ? void 0 : F.entry) === M) {
      F.callback = k;
      return;
    }
    a(F);
    const L = { owner: w, key: x, entry: M, callback: k };
    _.set(x, L), M.listeners.add(L);
  }
  function f(w, x) {
    w.settled || (w.settled = !0, w.image.onload = null, w.image.onerror = null, !x && n.get(w.key) === w && n.delete(w.key), [...w.listeners].forEach((M) => {
      a(M);
      try {
        M.callback(w.image, x);
      } catch {
      }
    }), d(o));
  }
  function d(w) {
    if (!(n.size <= w))
      for (const [x, M] of n) {
        if (n.size <= w) break;
        !M.settled || M.listeners.size > 0 || (M.image.onload = null, M.image.onerror = null, n.delete(x));
      }
  }
  function b(w, x, M, k = null) {
    const _ = String(x || ""), F = String(M || "");
    if (!_ || !F) return null;
    let L = n.get(_);
    if (L)
      n.delete(_), n.set(_, L);
    else {
      d(o - 1);
      const I = e || globalThis.Image;
      if (typeof I != "function") return null;
      const z = new I();
      L = { key: _, image: z, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(_, L), z.onload = () => f(L, !0), z.onerror = () => f(L, !1), z.src = F;
    }
    return L.settled || L.image.complete && Number(L.image.naturalWidth || L.image.width || 0) > 0 || c(w, _, L, k), L.image;
  }
  function g(w) {
    const x = r.get(w);
    x && ([...x.values()].forEach(a), r.delete(w), d(o));
  }
  return { get: b, disposeOwner: g };
}
const _a = /* @__PURE__ */ new WeakMap();
function N0(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = _a.get(e);
  r || (r = [], _a.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = _a.get(e);
    if (!c) return;
    const f = c.indexOf(o);
    f >= 0 && c.splice(f, 1), c.length === 0 && _a.delete(e);
  };
}
function Qr(e, ...t) {
  const n = _a.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const gl = "state_json";
function ei(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function qS(e) {
  var c, f;
  const t = ei(e, gl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Fg(n, {
    coverage: (c = ei(e, "coverage")) == null ? void 0 : c.value
  }), o = v0(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (f = t.callback) == null || f.call(t, a), !0;
}
function Of(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = ei(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, f, d, b, g, w, x, M, k;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (x = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), (k = (M = t == null ? void 0 : t.canvas) == null ? void 0 : M.setDirty) == null || k.call(M, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function JS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function xp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function ZS(e) {
  var g, w, x, M, k, _;
  if (!e) return;
  const t = ei(e, "coverage"), n = ei(e, "bg_color"), r = ei(e, gl), o = ei(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && JS(a) && (xp(c) || c === ""))) return;
  let b = "360";
  if (xp(c))
    try {
      b = String(Hn((g = JSON.parse(c)) == null ? void 0 : g.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (w = t.callback) == null || w.call(t, b), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = c, (M = r.callback) == null || M.call(r, c), o && (o.value = f, (k = o.callback) == null || k.call(o, f)), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
}
function Us(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function Fu(e, t, n) {
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
async function QS(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function wa(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, a = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), c = a.catch(() => {
  });
  e.__panoStickerOperationTail = c, e.__panoPendingStickerUploads.set(t, a);
  const f = () => {
    var d, b;
    ((b = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : b.call(d, t)) === a && e.__panoPendingStickerUploads.delete(t);
  };
  return a.then(f, f), c.then(() => {
    e.__panoStickerOperationTail === c && (e.__panoStickerOperationTail = null);
  }), a;
}
async function P0(e, t = {}) {
  var r;
  await QS(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function ek(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await P0(e), n ? n.apply(this, r) : this.value;
  };
}
function tk(e) {
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
function nk(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Yc(e, {
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
  function b(g) {
    var M;
    const w = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === w) return;
    tk(g), Of(g, t), Us(g, gl);
    const x = ei(g, gl);
    if (ek(g, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const k = x.callback;
      x.callback = (_) => {
        var L;
        const F = k ? k(_) : void 0;
        return (L = g.setDirtyCanvas) == null || L.call(g, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      g.__panoSceneStateV2 = d;
      const k = ei(g, "bg_color");
      !d && k && (k.value == null || String(k.value).trim() === "" || String(k.value).toLowerCase() === "#000000") && (k.value = "#00ff00", (M = k.callback) == null || M.call(k, "#00ff00")), Fu(g, r, () => o(g, "stickers")), f && (a(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(g, "stickers")
      }), g.__panoStickersNodeSurface && Us(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = w;
      return;
    }
    Fu(g, r, () => o(g, "cutout")), c(g, {
      buttonText: r,
      onOpen: () => o(g, "cutout")
    }), g.__panoCutoutNodeSurface && Us(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = w;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const w = e.prototype[g];
    e.prototype[g] = function() {
      const x = w ? w.apply(this, arguments) : void 0;
      g === "onNodeCreated" && n === "PanoramaCutout" && qS(this), g === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && ZS(this);
      const M = !!this.__panoPreviewAttached;
      return (g === "onNodeCreated" || this.widgets) && b(this), g === "onAdded" && M && Qr(this, "attach"), x;
    };
  }
}
function rk(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return nk(this), r;
  };
}
function ik(e, {
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
    Of(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    Fu(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && Us(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function ok({
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
    beforeRegisterNodeDef(d, b) {
      const g = String((b == null ? void 0 : b.name) || "");
      (g === "PanoramaStickers" || g === "Panorama Stickers") && Yc(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f
      }), g === "PanoramaStickersNode" && Yc(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f,
        sceneStateV2: !0
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && Yc(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f
      }), ll(g) && rk(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Of(d, e), ll(b) && ik(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const ak = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Pr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : ak.test(String(e.name || "")) : !1;
}
function Ff(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Pr(n)) : !1;
}
function sk(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, g, w;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (g = d == null ? void 0 : d.stopPropagation) == null || g.call(d), (w = d == null ? void 0 : d.stopImmediatePropagation) == null || w.call(d);
  }, a = (d) => {
    if (Ff(d == null ? void 0 : d.dataTransfer)) {
      o(d);
      try {
        d.dataTransfer.dropEffect = "copy";
      } catch {
      }
      n(!0);
    }
  }, c = (d) => {
    var b;
    d != null && d.relatedTarget && ((b = e.contains) != null && b.call(e, d.relatedTarget)) || n(!1);
  }, f = (d) => {
    var g;
    const b = Array.from(((g = d == null ? void 0 : d.dataTransfer) == null ? void 0 : g.files) || []).find((w) => Pr(w));
    if (!b) {
      n(!1);
      return;
    }
    o(d), n(!1), r(b);
  };
  return e.addEventListener("dragenter", a, !0), e.addEventListener("dragover", a, !0), e.addEventListener("dragleave", c, !0), e.addEventListener("drop", f, !0), () => {
    e.removeEventListener("dragenter", a, !0), e.removeEventListener("dragover", a, !0), e.removeEventListener("dragleave", c, !0), e.removeEventListener("drop", f, !0), n(!1);
  };
}
async function xa(e, t = {}) {
  var c, f, d, b;
  if (!Pr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((f = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : f.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const g = await new Promise((w, x) => {
      const M = new n();
      M.onload = () => w(M), M.onerror = () => x(new Error("image load failed")), M.src = a;
    });
    return {
      image: g,
      width: Math.max(1, Number(g.naturalWidth || g.width || 1)),
      height: Math.max(1, Number(g.naturalHeight || g.height || 1))
    };
  } finally {
    o == null || o(a);
  }
}
async function Ri(e, { fetchApi: t } = {}) {
  if (!Pr(e)) throw new TypeError("A supported image file is required.");
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
const Sp = /* @__PURE__ */ new WeakSet(), kp = /* @__PURE__ */ new WeakSet();
let Mp = 0;
function Tu(e) {
  if (!e || typeof e != "object" || kp.has(e)) return e;
  const t = String(e.type || "preview");
  return Mp += 1, e.type = `${t}:pano-${Mp}`, kp.add(e), e;
}
function yl(e) {
  if (!e || typeof e != "object" || Sp.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Sp.add(e), e;
}
function A0(e, t) {
  var r, o;
  if (!t || ((o = (r = yl(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function lk({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Tt } = Os;
$x((e) => Ji(e.id));
Vx(Vt);
const Tf = XS(), { linkedVideoFile: ck } = r0({ app: Tt, api: Vt });
function Du() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Os == null ? void 0 : Os.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const uk = "pano_suite.ui_settings.v1", fk = 120, dk = 2048;
function Np() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(uk)) || "").trim();
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
function hk() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ga(e) {
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
function pk() {
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
function Lu(e) {
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
function C0(e) {
  const t = Lu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function mk(e, t, n) {
  C0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Ru(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Df(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function I0(e) {
  return ll(Df(e));
}
function Pp(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Tt == null ? void 0 : Tt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function E0(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = Ru(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && f === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && Ws(e), oM(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Ru(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Ws(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Ws(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function gk(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Ws(e, t = {}) {
  var r, o, a, c, f;
  if (!e) return;
  $u.unregister(e), gk(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
    Array.isArray(e.widgets) && e.widgets.filter((b) => {
      if (b === (n == null ? void 0 : n.widget)) return !0;
      const g = String((b == null ? void 0 : b.name) || ""), w = String((b == null ? void 0 : b.type) || ""), x = Du();
      return g === x || w === x || g === "pano_preview" || w === "pano_preview" ? !0 : g === "preview" && w === "pano_preview";
    }).forEach((b) => Rk(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function yk(e, t = "#00ff00") {
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
function bk(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Do(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Tn(e) {
  var f, d;
  const t = bk(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = Do(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), o = Number(((d = Do(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? Tg(t, { backgroundColor: r, coverage: o, active: Vg(e) }) : yk(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function Do(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function vk(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function O0(e, t, n = null) {
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
  return !r && n != null && (r = vk(e == null ? void 0 : e.graph, n)), r;
}
function _k(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function F0(e, t = []) {
  const n = _k(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Si.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function Ap(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function bl(e, t) {
  const n = Ap(e), r = Ap(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function wk(e, t) {
  var n;
  return O0(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function xk(e, t = Si) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = F0(e, t).map((f) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(f))).filter((f) => f >= 0), a = n.map((f, d) => ({ input: f, idx: d })).filter(({ input: f }) => String((f == null ? void 0 : f.type) || "").toUpperCase() === "IMAGE").map(({ idx: f }) => f), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return Bx(e, c, wk);
}
const $u = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Vt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, g, w, x;
        if (!a) return;
        const c = bl(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...xk(a)].some((M) => bl(r, M)) || t0(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (T0(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = a.setDirtyCanvas) == null || g.call(a, !0, !0), (x = (w = a.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Vt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Vt) != null && e.removeEventListener) || (Vt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function vl(e) {
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
  return typeof ((a = Vt) == null ? void 0 : a.apiURL) == "function" ? Vt.apiURL(o) : o;
}
function Sk(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function kk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function Mk(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function Nk(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Sk(t)) return [t];
  const { filename: n, subfolder: r } = kk(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => vl({
    filename: n,
    subfolder: r,
    type: a
  }));
  return Mk([...o, t]);
}
function Pk(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? vl({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ji(e) {
  const t = Tt == null ? void 0 : Tt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (bl(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (bl(c, o)) return t[c];
  }
  return null;
}
function Ys(e, t, n = null) {
  const r = n || Ji(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function fr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return fr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return vl({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = fr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : vl(e);
}
function _l(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Cp(e) {
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
function Lf(e, t) {
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
function Ak(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function Ck(e, t) {
  try {
    e.__panoOwnOutputRev = WS(e.__panoOwnOutputRev);
    const n = Ak(t);
    let r = "";
    for (const o of n)
      if (r = fr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Lf(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Lo(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function Ik(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!Mr(e, "background"))
    return Lo(e), null;
  const o = Ji(r), a = n0(o, t, fr);
  if (!a)
    return Lo(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = Lf(a, c), d = `${t.join("|")}:${f}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  Lo(e);
  const g = Ux({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return g ? (e.__panoOwnOutputVideoCache = { key: d, ...g }, g.video) : null;
}
function Ek(e, t = []) {
  var b, g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = F0(e, t).map((w) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(w))).filter((w) => w >= 0), a = n.map((w, x) => ({ input: w, idx: x })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const w of c) {
    const x = n[w], M = e.graph ? e.getInputLink(w) : null;
    if ((M == null ? void 0 : M.origin_id) == null) continue;
    const k = M.origin_id, _ = O0(e, w, k);
    if (!_) continue;
    const F = Number(M.origin_slot ?? 0), L = Ji((_ == null ? void 0 : _.id) ?? k), W = Array.isArray(L == null ? void 0 : L.images) ? L.images : [];
    if (W.length) {
      const R = [];
      F >= 0 && F < W.length && R.push(W[F]), R.push(...W);
      for (const G of R.filter((ee) => !Gs(ee))) {
        const ee = fr(G);
        if (ee)
          return String((x == null ? void 0 : x.name) || ""), { src: `${ee}&pano_src=${Eu(L)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let I = [];
    try {
      I = typeof (Tt == null ? void 0 : Tt.getNodeImageUrls) == "function" ? Tt.getNodeImageUrls(_) || [] : [];
    } catch {
      I = [];
    }
    if (Array.isArray(I) && I.length) {
      const R = [];
      F >= 0 && F < I.length && R.push(I[F]), R.push(...I);
      for (const G of R) {
        const ee = fr(G);
        if (ee)
          return String((x == null ? void 0 : x.name) || ""), { src: ee, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const z = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
    if (z.length) {
      const R = [];
      F >= 0 && F < z.length && R.push(z[F]), R.push(...z);
      for (const G of R) {
        const ee = fr(G);
        if (ee)
          return String((x == null ? void 0 : x.name) || ""), { src: ee, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const O = (b = _ == null ? void 0 : _.widgets) == null ? void 0 : b.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (O) {
      let R = fr(O.value);
      if (R && !R.includes("/") && !R.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (R = Vt.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R)
        return String((x == null ? void 0 : x.name) || ""), { src: R, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const f = Mr(e, "background") ? Ji(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && d.push(...f.pano_input_images), Array.isArray((g = f == null ? void 0 : f.ui) == null ? void 0 : g.pano_input_images) && d.push(...f.ui.pano_input_images), d.length > 0)
    for (const w of d) {
      const x = fr(w);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Ok(e, t = [], n = {}) {
  const r = Ek(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = Nk(o);
  if (!a.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return c && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), g = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  g.pendingSrcRaw = o, g.pendingResolvedSrc = "", g.pendingImg = b, e.__panoLinkedInputImageCache.set(f, g);
  let w = -1;
  const x = () => {
    var k, _, F, L;
    if (w += 1, w >= a.length) {
      if (((_ = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : _.call(k, f)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
        try {
          (L = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || L.call(F, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const M = a[w];
    g.pendingResolvedSrc = M, b.src = M;
  };
  return b.onload = () => {
    var M, k, _;
    ((k = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : k.call(M, f)) === g && g.pendingImg === b && (g.srcRaw = o, g.resolvedSrc = String(g.pendingResolvedSrc || b.src || ""), g.img = b, g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null), String(g.pendingResolvedSrc || g.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, b.onerror = (M) => {
    var k, _, F, L;
    if (w + 1 < a.length) {
      x();
      return;
    }
    if (((_ = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : _.call(k, f)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
      try {
        (L = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || L.call(F, f);
      } catch {
      }
    String(g.pendingResolvedSrc || g.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, x(), c && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : b;
}
function Fk(e, t = [], n = null, r = {}) {
  const o = Ok(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function T0(e) {
  var t, n;
  if (e) {
    Tf.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Lo(e), e.__panoWrappedErpCache = null;
  }
}
function Tk(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Lo(e), e.__panoWrappedErpCache = null;
  }
}
function D0(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function ks(e, t, n = "") {
  const r = D0(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < fk ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Ip(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, f = r / a, d = Math.min(c, f);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function Dk(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), f + Math.round(14 * n)), g = r + (a - d) * 0.5, w = o + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(g, w, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", g + d * 0.5, w + b * 0.5 + 0.5), e.restore();
}
function Xc(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function Lk(e) {
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
function Rk(e, t) {
  return A0(e, t);
}
function za(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = Pk(n);
  if (!a && (r != null && r.external)) {
    if (!Mr(e, "external-sticker")) return null;
    const M = Ji(e == null ? void 0 : e.id), k = ((x = M == null ? void 0 : M.ui) == null ? void 0 : x.pano_sticker_input_images) || (M == null ? void 0 : M.pano_sticker_input_images) || [];
    for (const _ of Array.isArray(k) ? k : [k])
      if (a = fr(_), a) break;
  }
  if (!a) return null;
  const c = Ys(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? Lf(a, d) : a, g = YS(a, f, d);
  return Tf.get(e, g, b, (M, k) => {
    var _, F;
    k && (r != null && r.external && e.__panoOutputFromRun && Qr(e, "image-loaded"), (F = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null || F.call(_));
  }) || null;
}
function $k(e, t) {
  var w, x, M, k;
  const n = Gk(e, t), r = Kk(t), o = Array.isArray((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) ? t.painting.groups : [], a = new Map(
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
  }).filter(Boolean) : [], f = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) ? t.painting.raster_objects : [];
  if (f.length === 0)
    return (k = (M = e.__panoRasterObjectSurfaceCache) == null ? void 0 : M.retain) == null || k.call(M, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = US()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var _, F;
    return (F = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null ? void 0 : F.call(_);
  });
  const d = GS(t == null ? void 0 : t.output_preset), b = f.filter((_) => (_ == null ? void 0 : _.visible) !== !1 && String((_ == null ? void 0 : _.layerKind) || "paint") === "paint").map((_) => String((_ == null ? void 0 : _.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const g = f.map((_) => {
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
  return [...c, ...g];
}
function Vk(e, t, n, r) {
  var a, c, f, d, b, g;
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
      const w = r.convertEventToCanvasOffset(t);
      if (Array.isArray(w) && w.length >= 2)
        return {
          x: Number(w[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(w[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
    };
  const o = jk(e, t, r);
  return o || null;
}
function zk(e, t) {
  var w, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (w = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : w.call(o), c = (t == null ? void 0 : t.ds) || ((x = Tt == null ? void 0 : Tt.canvas) == null ? void 0 : x.ds);
  if (!a || !c) return null;
  const f = Number(c.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(a.left || 0)) / f - Number(d[0] || 0), g = (r - Number(a.top || 0)) / f - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(g) ? null : { x: b, y: g };
}
function jk(e, t, n) {
  var o, a;
  const r = zk(t, n || (Tt == null ? void 0 : Tt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function Hk(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Gk(e, t) {
  var b, g, w, x, M, k, _, F, L, W, I, z;
  const n = (g = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : g.strokes, r = (x = (w = t == null ? void 0 : t.painting) == null ? void 0 : w.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = Hk(e, t), f = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = bu(c), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((_ = e.__panoPreviewPaintRevision) == null ? void 0 : _.paint) !== d.paint || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== d.mask || ((L = e.__panoPreviewPaintRevision) == null ? void 0 : L.groups) !== d.groups || ((W = e.__panoPreviewPaintRevision) == null ? void 0 : W.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Kk(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function Bk(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Uk(e, t, n) {
  const r = If(t, n);
  r.visible && Cf(e, r.boundaryEdges, { selected: !1 });
}
function Wk(e, t, n) {
  const r = If(t, n);
  r.visible && (e.save(), Cf(e, r.boundaryEdges, { selected: !0 }), M0(e, r, { accent: RS(t) }), e.restore());
}
function Vu(e, t, n) {
  return Bg(hl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function wl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Xi;
}
function Yk(e) {
  return [Mr(e, "background") ? n0(Ji(e.id), ["pano_input_videos"], fr) : "", ck(e, Si)];
}
function Xk({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function Ep(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Ho({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let f;
    if (t.version === 2)
      f = za(e, c.id, Rg(c.source), { external: c.source.kind === "port" });
    else {
      const b = c.type === "external_image" || c.source_kind === "external_image", g = String(c.asset_id || "") || (b ? String(c.id || "") : "");
      f = za(e, g, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: b });
    }
    return _l(f) ? { media: f, revision: Cp(f) } : null;
  }, o = $k(e, t).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: _l(n) ? { media: n, revision: Cp(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Ug(e.__panoSurfaceScene.sceneState, wl(e), t.stickers, { media: r, paintLayers: o })
  };
}
function qk(e, t, n) {
  var z, O, R, G, ee, ve, T;
  const r = String(e.__panoPreviewMode || "stickers");
  D0(e, r);
  const o = Tn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (R = (O = (z = e.__panoCutoutNodeSurface) == null ? void 0 : z.session) == null ? void 0 : O.refresh) == null || R.call(O)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (ve = (ee = (G = e.__panoStickersNodeSurface) == null ? void 0 : G.session) == null ? void 0 : ee.refresh) == null || ve.call(ee));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), f = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== f) && (t.width = c, t.height = f);
  const b = { x: 0, y: 0, w: c, h: f };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, f);
  const g = (e.__panoSurfacePlayback ? Xk(e.__panoSurfacePlayback) : Ik(e, ["pano_input_videos"], () => {
    var N, X;
    return (X = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null ? void 0 : X.call(N);
  })) || Fk(
    e,
    Si,
    () => {
      var N, X;
      return (X = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null ? void 0 : X.call(N);
    },
    { preserveReadyWhilePending: !1 }
  ), w = _l(g);
  let x = null;
  const M = (N, X) => {
    x || (x = Ep(e, o, g));
    const U = n.render({ width: N.w, height: N.h, camera: X, ...x });
    return U && d.drawImage(U.canvas, U.x, U.y, U.width, U.height, N.x, N.y, N.w, N.h), !!U;
  };
  if (r === "cutout") {
    const N = Lk(o), X = Bk(g), U = N ? Z(ii(N).aspect, 0.1, 10) : w ? Z(Number(X.width / X.height), 0.05, 20) : 1, q = Pf(b, U);
    e.__panoCutoutNodeFrame = q;
    let Y = "none";
    const ne = String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "");
    if (N)
      if (g && !w)
        Y = "loading";
      else if (w) {
        const J = lS({ width: c, height: f }, q, N);
        [
          !J.fallback || M(J.fallback.rect, js(J.fallback.shot)),
          M(J.rect, js(J.shot)),
          !J.fallback || M(q, js(N))
        ].every(Boolean) || (Y = "loading");
      } else
        Y = "empty";
    else {
      const J = e.__panoLastCutoutShot;
      J ? (e.__panoPreviewView = b0(J, { width: c, height: f }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), w ? M(b, hl(e.__panoPreviewView, c, f)) || (Y = "loading") : g ? Y = "loading" : Y = "empty";
    }
    w || n.release(), n.failed && Y === "loading" && (Y = "none"), N && (e.__panoLastCutoutShot = { ...N }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, f), d.rect(q.x, q.y, q.w, q.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(q.x + 0.5, q.y + 0.5, Math.max(0, q.w - 1), Math.max(0, q.h - 1)), d.restore()), Y === "loading" ? (Xc(e, !1), ks(e, !0, ne)) : Y === "empty" ? (Xc(e, !0), ks(e, !1, "")) : (Xc(e, !1), ks(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!g || w) && (x = Ep(e, o, g), !x.background && !x.layers.length ? (n.release(), k = !0) : k = M(b, hl(e.__panoPreviewView, c, f)));
  const _ = !k && !n.failed;
  ks(e, _, _ ? String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "") : ""), _ && Dk(d, b, Ip(t, b));
  const F = Vu(e, c, f);
  !g && k && Jk(d, F, Ip(t, b));
  const L = String(((T = o == null ? void 0 : o.active) == null ? void 0 : T.selected_sticker_id) || ""), W = Bs(o, wl(e)), I = k ? W.find((N) => String((N == null ? void 0 : N.id) || "") === L && (N == null ? void 0 : N.visible) !== !1) : null;
  k && W.filter((N) => N !== I && (N == null ? void 0 : N.visible) !== !1 && (N.external || N.source_kind === "external_image")).filter((N) => !_l(za(e, N.id, null, { external: !0 }))).forEach((N) => Uk(d, N, F)), I && Wk(d, I, F);
}
function Op(e, t, n, r, o = 1) {
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
function Jk(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let f = -75; f <= 75; f += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(Rn(b, f));
    Op(e, d, t, f === 0 ? o : r, f === 0 ? 1.5 : 1);
  }
  for (let f = -180; f <= 180; f += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(Rn(f, b));
    Op(e, d, t, r, f % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: Rn(0, 0) },
    { name: "Right", dir: Rn(90, 0) },
    { name: "Back", dir: Rn(180, 0) },
    { name: "Left", dir: Rn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const c = Math.max(9, Math.round(11 * n));
  e.font = `500 ${c}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((f) => {
    const d = t.project(f.dir);
    d.z > 1e-4 && e.fillText(f.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function zu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Zk(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function qn(e, t) {
  return Zk(e, t) ? !1 : (zu(e), !0);
}
function Fp() {
  var n;
  const e = (n = Tt == null ? void 0 : Tt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Qk(e) {
  var n;
  if (!e) return;
  const t = (n = Tt == null ? void 0 : Tt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function eM(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !C0(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function tM(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Tp(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && nM(e, 180, t);
    }
  };
}
function nM(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Sa(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const rM = /* @__PURE__ */ new WeakMap();
function L0(e, t) {
  return t0(rM, e, t) ? !1 : (Ck(e, t), T0(e), Sa(e), !0);
}
async function iM(e) {
  var n, r;
  const t = await Gx(e, Tt, Vt);
  t && (L0(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function oM(e, t = {}) {
  var Ua;
  const n = t.__allowStandalone === !0, r = I0(e);
  if (r && !n) {
    Df(e);
    return;
  }
  r && eM(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: Pp(e)
  }, f = "dom", d = c.signature || Pp(e);
  if (Number(e.__panoRebindGeneration || 0), Ru(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Lu(e), e.__panoFrontendSig = d, e.__panoStickersPath = f, (Ua = e.__panoDomPreview) != null && Ua.widget || (e.__panoLegacyPreviewHooked && Ws(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, g = b ? 0 : 56, w = b ? 0 : iS, x = document.createElement("div");
  if (pk(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
    "width:100%",
    b ? "height:auto" : "height:100%",
    w > 0 ? `min-height:${w}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), b) {
    const D = yl(Tu(
      e.addDOMWidget(Du(), "preview", x, Tp(e, null))
    ));
    Sa(e), e.__panoDomPreview = { widget: D, root: x, requestDraw: () => {
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
  ].join(";"), _.textContent = "Connect ERP image", M.appendChild(k), M.appendChild(_), x.appendChild(M);
  const F = ig(x), L = document.createElement("div");
  L && (L.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", L.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild(L)), mk(e, 120, 120), Sa(e);
  let W = null;
  try {
    tM(e, g, () => {
      var D, ce;
      return (ce = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null ? void 0 : ce.call(D);
    }), W = yl(Tu(e.addDOMWidget(
      Du(),
      "preview",
      x,
      Tp(
        e,
        () => {
          var D, ce;
          return (ce = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null ? void 0 : ce.call(D);
        },
        g,
        w,
        !1
      )
    )));
  } catch {
    return;
  }
  const I = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, z = () => {
    I.destroyed || (I.needsDraw = !0, !I.inTick && !I.raf && (I.raf = requestAnimationFrame(Bn)));
  }, O = Yg(z), R = /* @__PURE__ */ Ko(o ? { ...h0(Tn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...g0(Tn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((D) => ({ value: D, label: D }))
  });
  let G = null;
  if (o && e.__panoSceneStateV2) {
    const D = document.createElement("video");
    D.playsInline = !0, D.preload = "auto", D.crossOrigin = "anonymous", D.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", M.appendChild(D);
    const ce = document.createElement("canvas");
    ce.__panoFrameIdx = 0;
    const Ce = nS({
      video: D,
      clock: {
        now: () => performance.now(),
        requestFrame: (Pe) => requestAnimationFrame(Pe),
        cancelFrame: (Pe) => cancelAnimationFrame(Pe)
      },
      pageHidden: () => document.hidden,
      readState: () => Tn(e),
      onFrame: z,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ge;
        if (!(D.videoWidth > 0 && D.videoHeight > 0)) return;
        const Pe = Math.min(1, dk / D.videoWidth);
        ce.width = Math.round(D.videoWidth * Pe), ce.height = Math.round(D.videoHeight * Pe), (Ge = ce.getContext("2d")) == null || Ge.drawImage(D, 0, 0, ce.width, ce.height), ce.__panoFrameIdx += 1, z();
      },
      onChange: () => {
        R.playing = Ce.playing, z();
      }
    });
    G = { playback: Ce, video: D, still: ce }, e.__panoSurfacePlayback = G;
  }
  const ee = () => {
    var $e;
    const { playback: D, still: ce } = G, Ce = tS(M, !!(($e = e.flags) != null && $e.collapsed)), Pe = D.source, Ge = D.follow({ shown: Ce, sources: Ce ? Yk(e) : [], state: Tn(e) });
    D.source !== Pe && (ce.width = 0, ce.__panoFrameIdx = 0), R.playable = Ge, R.playing = D.playing;
  }, ve = () => G == null ? void 0 : G.playback.stop();
  let T = null;
  const N = (o ? eS : uS)({
    readState: () => Tn(e),
    publishLiveState: (D) => {
      D ? (T = D, e.__panoLiveStateOverride = D) : (e.__panoLiveStateOverride === T && (e.__panoLiveStateOverride = null), T = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, z();
    },
    commitState: (D) => {
      var Pe, Ge, $e, Nt;
      const ce = Do(e, "state_json");
      if (!ce) return;
      zg(e, D.active);
      const Ce = jg(e, D);
      Hg(e, Ce, String(ce.value ?? "")) || (ce.value = Ce, (Pe = ce.callback) == null || Pe.call(ce, Ce), e.__panoStateCache = null, (Ge = e.setDirtyCanvas) == null || Ge.call(e, !0, !0), (Nt = ($e = e.graph) == null ? void 0 : $e.setDirtyCanvas) == null || Nt.call($e, !0, !0));
    },
    onChange: (D) => Object.assign(R, D)
  }), U = o ? N0(e, (D = "sync", ce = null) => {
    var Dt;
    if (!o || !e.graph || !N || N.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Cn = Mr(e, "external-sticker"), $r = Tn(e).stickers.find((Yn) => Yn.source.kind === "port");
      return N.apply({
        type: "sync-port",
        value: f0(e, {
          pose: Cn ? Ys(e, "pano_sticker_input_pose", ce) : null,
          image: $r ? za(e, $r.id, null, { external: !0 }) : null
        })
      });
    }
    const Ce = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Cn) => String((Cn == null ? void 0 : Cn.name) || "") === "sticker_image") : -1, Pe = Ce >= 0 ? ((Dt = e.getInputLink(Ce)) == null ? void 0 : Dt.id) ?? null : null;
    if (Pe == null)
      return N.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Mr(e, "external-sticker")) return !1;
    const Ge = Ys(e, "pano_sticker_input_pose", ce), $e = Array.isArray(Ge) ? Ge[0] : Ge, Nt = String(Ys(e, "pano_sticker_input_state_hash", ce) ?? ""), wn = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Wt = Tn(e), Wn = (Array.isArray(Wt == null ? void 0 : Wt.stickers) ? Wt.stickers : []).find((Cn) => String((Cn == null ? void 0 : Cn.id) || "") === "sticker_image_1"), mt = za(e, "sticker_image_1", null, { external: !0 }), Rr = $e && typeof $e == "object" ? $e : Wn || { yaw_deg: wn.yaw, pitch_deg: wn.pitch, hFOV_deg: 30, rot_deg: 0 };
    return N.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Pe,
        stateHash: Nt,
        pose: Rr,
        imageWidth: Number((mt == null ? void 0 : mt.naturalWidth) || (mt == null ? void 0 : mt.width) || 0),
        imageHeight: Number((mt == null ? void 0 : mt.naturalHeight) || (mt == null ? void 0 : mt.height) || 0)
      }
    });
  }) : () => {
  };
  let q = 0;
  const Y = async (D) => {
    if (!o || !N || !Pr(D)) return !1;
    ve();
    const ce = `asset_${Math.random().toString(16).slice(2, 10)}`, Ce = `st_${Math.random().toString(16).slice(2, 10)}`, Pe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    q += 1, R.importing = !0;
    const Ge = wa(e, `add:${ce}`, async () => {
      const $e = await xa(D), Nt = await Ri(D, {
        fetchApi: (wn, Wt) => Vt.fetchApi(wn, Wt)
      });
      return Ne(), N.apply({
        type: "add-sticker",
        value: {
          stickerId: Ce,
          assetId: ce,
          asset: Nt,
          imageWidth: $e.width,
          imageHeight: $e.height,
          yaw_deg: Number(Pe.yaw || 0),
          pitch_deg: Number(Pe.pitch || 0)
        }
      });
    });
    try {
      return await Ge;
    } catch {
      return !1;
    } finally {
      q = Math.max(0, q - 1), R.importing = q > 0, z();
    }
  };
  let ne = null, J = null, E = null, Le = !1;
  const H = () => {
    var D;
    return E && (clearTimeout(E), E = null), Le ? (Le = !1, ((D = N == null ? void 0 : N.commitGesture) == null ? void 0 : D.call(N)) ?? !1) : !1;
  }, Ne = () => {
    var Pe, Ge, $e;
    const D = H(), ce = (ne == null ? void 0 : ne.pointerId) ?? (J == null ? void 0 : J.pointerId);
    if (ne = null, J = null, ce != null) {
      try {
        (Pe = k.hasPointerCapture) != null && Pe.call(k, ce) && ((Ge = k.releasePointerCapture) == null || Ge.call(k, ce));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Ce = (($e = N == null ? void 0 : N.commitGesture) == null ? void 0 : $e.call(N)) ?? !1;
    return D || Ce;
  }, He = () => {
    var Pe, Ge, $e;
    const D = H(), ce = ne == null ? void 0 : ne.pointerId;
    if (ne = null, ce != null) {
      try {
        (Pe = k.hasPointerCapture) != null && Pe.call(k, ce) && ((Ge = k.releasePointerCapture) == null || Ge.call(k, ce));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Ce = (($e = N == null ? void 0 : N.cancelGesture) == null ? void 0 : $e.call(N)) ?? !1;
    return D || Ce;
  }, nt = () => Ne();
  N && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(nt));
  let pt = null, rt = !1;
  if (L && N)
    try {
      Ef(), pt = cf(o ? LS : AS, {
        model: R,
        onAction: (D) => {
          var Pe, Ge;
          if ((D == null ? void 0 : D.type) === "toggle-playback") {
            Ne(), G == null || G.playback.toggle();
            return;
          }
          if (ve(), (D == null ? void 0 : D.type) === "open-editor") {
            Ne(), o || (R.aspectOpen = !1), (Pe = e.__panoOpenEditor) == null || Pe.call(e);
            return;
          }
          if (o) {
            if ((D == null ? void 0 : D.type) === "add-image-file") {
              Y(D.file);
              return;
            }
            N.apply(D) && z();
            return;
          }
          if ((D == null ? void 0 : D.type) === "toggle-aspect") {
            R.aspectOpen = !R.aspectOpen;
            return;
          }
          if ((D == null ? void 0 : D.type) === "close-aspect") {
            R.aspectOpen = !1;
            return;
          }
          let ce = D;
          if ((D == null ? void 0 : D.type) === "add-frame") {
            const $e = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ce = {
              ...D,
              ...aS($e, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((D == null ? void 0 : D.type) === "delete-frame") {
            const $e = qi(Tn(e));
            $e && (e.__panoPreviewView = b0($e, {
              width: k.width,
              height: k.height
            }));
          }
          const Ce = ((Ge = e.__panoCutoutNodeFrame) == null ? void 0 : Ge.safeRect) || null;
          R.aspectOpen = !1, N.apply({ ...ce, safeRect: Ce }) && z();
        }
      }), pt.mount(L), rt = !0;
    } catch {
      pt = null, rt = !1;
    }
  const Zt = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    G && ee(), z();
  }) : null;
  Zt == null || Zt.observe(M);
  const Bn = (D) => {
    var Ce, Pe;
    I.raf = 0, I.inTick = !0;
    let ce = !1;
    try {
      ce = kt.stepInertia(D), (I.needsDraw || ce) && (I.needsDraw = !1, G && ee(), (Ce = e.flags) != null && Ce.collapsed || qk(e, k, O), R.viewUnavailable = O.failed);
    } finally {
      I.inTick = !1;
    }
    (ce || I.needsDraw) && !I.raf && (I.raf = requestAnimationFrame(Bn)), hk() && (!e.__panoDebugLastTs || D - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = D, e.__panoPreviewMode, Lu(e), ga(x), ga(M), ga(k), ga(x.parentElement), ga((Pe = x.parentElement) == null ? void 0 : Pe.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, kt = pf({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (D) => {
      e.__panoPreviewView = D;
    },
    getViewportSize: () => {
      const D = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(D.width || k.clientWidth || 0)),
        h: Math.max(1, Number(D.height || k.clientHeight || 0))
      };
    },
    getInvert: () => {
      const D = Np();
      return {
        x: D.invert_view_x ? -1 : 1,
        y: D.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      z();
    }
  }), Ut = o ? M : x, cn = (D) => {
    const ce = k.getBoundingClientRect();
    return {
      x: (Number(D.clientX) - ce.left) * (k.width / Math.max(1, ce.width)),
      y: (Number(D.clientY) - ce.top) * (k.height / Math.max(1, ce.height))
    };
  }, $n = (D) => {
    var Pe, Ge;
    if (!o || !a) return;
    const ce = Tn(e), Ce = Wc(
      Bs(ce, wl(e)),
      String(((Pe = ce == null ? void 0 : ce.active) == null ? void 0 : Pe.selected_sticker_id) || ""),
      cn(D),
      Vu(e, k.width, k.height)
    );
    if (!Ce) {
      k.style.cursor = "grab";
      return;
    }
    if (((Ge = Ce.item) == null ? void 0 : Ge.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = Ce.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (D) => {
    var Nt, wn, Wt, Wn, mt, Rr, Yo, Dt, Cn, $r, Yn;
    if (!qn(D, Ut) || D.button !== 0) return;
    if (!o) {
      const Qt = qi(Tn(e)), Yt = e.__panoCutoutNodeFrame;
      if (!Qt) {
        (Nt = x.focus) == null || Nt.call(x, { preventScroll: !0 }), (wn = k.setPointerCapture) == null || wn.call(k, D.pointerId), k.style.cursor = "grabbing", kt.startDrag(D.clientX, D.clientY, D.pointerId);
        return;
      }
      if (Qt.locked === !0 || !Yt || !N) return;
      const ki = cn(D);
      let xn;
      if (D.shiftKey) {
        const Vr = _0({
          frame: Yt,
          point: ki,
          startRollDeg: Number(Qt.roll_deg ?? Qt.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Vr) return;
        xn = { kind: "roll", pointerId: D.pointerId, rollGesture: Vr };
      } else {
        const Vr = ((Wt = Tn(e)) == null ? void 0 : Wt.ui_settings) || Np();
        xn = {
          kind: "pan",
          pointerId: D.pointerId,
          startPoint: ki,
          startShot: { ...Qt },
          focalPx: Ui(Yt, Qt),
          invertX: Vr.invert_view_x === !0,
          invertY: Vr.invert_view_y === !0
        };
      }
      Ne(), (Wn = x.focus) == null || Wn.call(x, { preventScroll: !0 }), (mt = k.setPointerCapture) == null || mt.call(k, D.pointerId), k.style.cursor = "grabbing", N.beginGesture(), ne = xn;
      return;
    }
    if (!a) return;
    const ce = cn(D), Ce = Tn(e), Pe = String(((Rr = Ce == null ? void 0 : Ce.active) == null ? void 0 : Rr.selected_sticker_id) || ""), Ge = Vu(e, k.width, k.height);
    if ((Yo = x.focus) == null || Yo.call(x, { preventScroll: !0 }), G != null && G.playback.playing) {
      const Qt = Wc(Bs(Ce, wl(e)), Pe, ce, Ge);
      if (Qt) {
        ve(), N.apply({ type: "select-sticker", id: Qt.item.id }), z();
        return;
      }
    }
    const $e = Wc(Bs(Ce), Pe, ce, Ge);
    if ($e && N) {
      if (kt.stopMotion(), Ne(), String(((Dt = $e.item) == null ? void 0 : Dt.id) || "") !== Pe && N.apply({ type: "select-sticker", id: $e.item.id }), ((Cn = $e.item) == null ? void 0 : Cn.locked) === !0) {
        z();
        return;
      }
      const Qt = ce, Yt = $e.geometry.center;
      J = {
        active: !0,
        kind: $e.hit.kind,
        pointerId: D.pointerId,
        startPoint: Qt,
        startCenter: { ...Yt },
        startSticker: { ...$e.item },
        startDistance: Math.max(1, Math.hypot(Qt.x - Yt.x, Qt.y - Yt.y)),
        startAngle: Math.atan2(Qt.y - Yt.y, Qt.x - Yt.x),
        projection: Ge
      }, N.beginGesture(), ($r = k.setPointerCapture) == null || $r.call(k, D.pointerId), k.style.cursor = $e.hit.kind === "rotate" ? "grabbing" : $e.hit.kind === "move" ? "move" : $e.hit.cursor, z();
      return;
    }
    (Yn = k.setPointerCapture) == null || Yn.call(k, D.pointerId), k.style.cursor = "grabbing", kt.startDrag(D.clientX, D.clientY, D.pointerId);
  }), k.addEventListener("pointermove", (D) => {
    if (!o) {
      if (!ne) {
        if (!kt.state.drag.active) return;
        qn(D, Ut), kt.moveDrag(D.clientX, D.clientY, "pano");
        return;
      }
      if (ne.pointerId !== D.pointerId || !N) return;
      if (qn(D, Ut), ne.kind === "pan") {
        const Ce = cn(D);
        N.updateGesture({
          type: "pan-camera",
          startShot: ne.startShot,
          dx: Ce.x - ne.startPoint.x,
          dy: Ce.y - ne.startPoint.y,
          focalPx: ne.focalPx,
          invertX: ne.invertX,
          invertY: ne.invertY
        });
        return;
      }
      const ce = w0(ne.rollGesture, cn(D), D);
      if (!ce) return;
      ne.rollGesture = ce.gesture, N.updateGesture({ type: "set-roll", value: ce.rollDeg });
      return;
    }
    if (!J && !kt.state.drag.active) {
      $n(D);
      return;
    }
    if (J) {
      if (J.pointerId !== D.pointerId || !N) return;
      qn(D, Ut);
      const ce = cn(D);
      let Ce = J.startSticker;
      if (J.kind === "move")
        Ce = zS(
          J.startSticker,
          {
            x: J.startCenter.x + ce.x - J.startPoint.x,
            y: J.startCenter.y + ce.y - J.startPoint.y
          },
          J.projection
        );
      else if (J.kind === "scale") {
        const Pe = Math.hypot(ce.x - J.startCenter.x, ce.y - J.startCenter.y);
        Ce = jS(J.startSticker, J.startDistance, Pe);
      } else if (J.kind === "rotate") {
        const Pe = Math.atan2(ce.y - J.startCenter.y, ce.x - J.startCenter.x);
        Ce = HS(J.startSticker, J.startAngle, Pe, D.shiftKey === !0);
      }
      N.updateGesture({ type: "set-transform", value: Ce }), z();
      return;
    }
    !a || !kt.state.drag.active || (qn(D, Ut), kt.moveDrag(D.clientX, D.clientY, "pano"));
  });
  const $ = () => {
    var ce, Ce;
    if (!ne && !J) {
      if (!kt.state.drag.active) return;
      kt.endDrag(), k.style.cursor = "grab", z();
      return;
    }
    if (!N) return;
    const D = (ne == null ? void 0 : ne.pointerId) ?? (J == null ? void 0 : J.pointerId);
    ne = null, J = null;
    try {
      (ce = k.hasPointerCapture) != null && ce.call(k, D) && ((Ce = k.releasePointerCapture) == null || Ce.call(k, D));
    } catch {
    }
    N.cancelGesture(), k.style.cursor = "grab", z();
  }, j = (D, ce = !1) => {
    var Ce, Pe, Ge, $e;
    if (!o) {
      if (!ne) {
        if (!kt.state.drag.active) return;
        qn(D, Ut), (Ce = k.releasePointerCapture) == null || Ce.call(k, D.pointerId), k.style.cursor = "grab", kt.endDrag(), z();
        return;
      }
      if (ne.pointerId !== D.pointerId || !N) return;
      qn(D, Ut), ne = null, (Pe = k.releasePointerCapture) == null || Pe.call(k, D.pointerId), k.style.cursor = "grab", ce ? N.cancelGesture() : N.commitGesture(), $n(D), z();
      return;
    }
    if (J) {
      if (J.pointerId !== D.pointerId || !N) return;
      qn(D, Ut), J = null, (Ge = k.releasePointerCapture) == null || Ge.call(k, D.pointerId), k.style.cursor = "grab", ce ? N.cancelGesture() : N.commitGesture(), z();
      return;
    }
    !a || !kt.state.drag.active || (qn(D, Ut), ($e = k.releasePointerCapture) == null || $e.call(k, D.pointerId), k.style.cursor = "grab", kt.endDrag(), z());
  };
  k.addEventListener("pointerup", j), k.addEventListener("pointercancel", (D) => j(D, !0)), k.addEventListener("lostpointercapture", $), k.addEventListener("pointerleave", (D) => {
    !o && ne || J || kt.state.drag.active && j(D);
  });
  const te = (D) => {
    const ce = document.activeElement;
    if (ce !== x && !x.contains(ce)) return;
    if (D.key === "Escape" && (ne || J) && N) {
      $(), zu(D);
      return;
    }
    if (!o || D.key !== "Delete" && D.key !== "Backspace" || !N) return;
    const Ce = D.target, Pe = String((Ce == null ? void 0 : Ce.tagName) || "").toUpperCase();
    Pe === "INPUT" || Pe === "TEXTAREA" || Ce != null && Ce.isContentEditable || R.canDelete === !0 && (ve(), Ne(), N.apply({ type: "delete-selected" }) && z(), zu(D));
  };
  window.addEventListener("keydown", te, !0);
  const ye = lk({
    requestFrame: (D) => requestAnimationFrame(D),
    cancelFrame: (D) => cancelAnimationFrame(D),
    restore: (D) => Qk(D)
  }), me = (D) => {
    var Ce, Pe, Ge, $e, Nt, wn;
    if (!qn(D, Ut)) return;
    if (!o) {
      const Wt = qi(Tn(e));
      if (Wt && Wt.locked !== !0 && N) {
        const Wn = hf(D);
        Wn !== 0 && (Le || (Ne(), N.beginGesture(), Le = !0), N.updateGesture({
          type: "step-fov",
          direction: Wn
        }) ? (E && clearTimeout(E), E = setTimeout(H, 180), z()) : N.hasGestureChanges() || (N.cancelGesture(), Le = !1));
      } else if (!Wt) {
        const Wn = Fp();
        kt.applyWheelEvent(D) && z(), ye.schedule(Wn);
      }
      (Ce = D.preventDefault) == null || Ce.call(D), (Pe = D.stopPropagation) == null || Pe.call(D), (Ge = D.stopImmediatePropagation) == null || Ge.call(D);
      return;
    }
    if (!a) return;
    const ce = Fp();
    kt.applyWheelEvent(D) && z(), ($e = D.preventDefault) == null || $e.call(D), (Nt = D.stopPropagation) == null || Nt.call(D), (wn = D.stopImmediatePropagation) == null || wn.call(D), ye.schedule(ce);
  }, be = o ? [M, k] : [M];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((D) => {
    be.forEach((ce) => ce.addEventListener(D, me, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((D) => {
    k.addEventListener(D, (ce) => qn(ce, Ut)), M.addEventListener(D, (ce) => qn(ce, Ut));
  });
  const we = Do(e, "state_json");
  let ke = null, Se = null;
  we && !we.__panoPreviewPatchedCb && (ke = we.callback, Se = (D) => {
    const ce = ke ? ke(D) : void 0;
    return z(), ce;
  }, we.callback = Se, we.__panoPreviewPatchedCb = Se);
  const ue = Do(e, "bg_color");
  let Re = null, Ae = null;
  ue && !ue.__panoPreviewPatchedCb && (Re = ue.callback, Ae = (D) => {
    const ce = Re ? Re(D) : void 0;
    return z(), ce;
  }, ue.callback = Ae, ue.__panoPreviewPatchedCb = Ae);
  const De = e.onRemoved, p = e.onResize, Ee = e.onExecuted, it = e.onDragOver, We = e.onDragDrop;
  let st = null;
  const Et = () => {
    o && (R.dropActive = !0, st && clearTimeout(st), st = setTimeout(() => {
      st = null, R.dropActive = !1;
    }, 140));
  }, on = o ? function(D) {
    return (it ? it.apply(this, arguments) : !1) === !0 ? !0 : Ff(D == null ? void 0 : D.dataTransfer) ? (Et(), !0) : !1;
  } : null, vt = o ? function(D) {
    var Pe;
    if ((We ? We.apply(this, arguments) : !1) === !0) return !0;
    const Ce = Array.from(((Pe = D == null ? void 0 : D.dataTransfer) == null ? void 0 : Pe.files) || []).find((Ge) => Pr(Ge));
    return Ce ? (st && clearTimeout(st), st = null, R.dropActive = !1, Y(Ce), !0) : !1;
  } : null;
  o && (e.onDragOver = on, e.onDragDrop = vt);
  const Oe = o ? sk(x, {
    onActive: (D) => {
      if (D) {
        Et();
        return;
      }
      st && clearTimeout(st), st = null, R.dropActive = !1;
    },
    onDrop: (D) => {
      Y(D);
    }
  }) : () => {
  }, Un = function(D) {
    e.__panoOutputFromRun = !0;
    const ce = L0(e, D);
    Qr(e, ce ? "executed" : "sync", D), z();
    const Ce = Ee ? Ee.apply(this, arguments) : void 0;
    return Sa(e), Ce;
  };
  e.onExecuted = Un;
  const Ht = e.onConnectionsChange, un = function(D, ce) {
    const Ce = fp(e, D, ce, Sf), Pe = fp(e, D, ce, Si), Ge = arguments, $e = Ht ? Ht.apply(this, Ge) : void 0, Nt = () => {
      I.destroyed || (Pe && Tk(e), Ce && Qr(e, "connection-change"), Sa(e), z());
    };
    return Nt(), queueMicrotask(Nt), $e;
  };
  e.onConnectionsChange = un;
  const Dr = function() {
    const D = p ? p.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, z(), D;
  };
  e.onResize = Dr;
  const Lr = function() {
    return Qi(), $u.unregister(this), De ? De.apply(this, arguments) : void 0;
  };
  e.onRemoved = Lr;
  const Qi = () => {
    var D, ce, Ce, Pe, Ge, $e, Nt, wn, Wt;
    I.destroyed = !0, (D = Zt == null ? void 0 : Zt.disconnect) == null || D.call(Zt), o ? Ne() : He(), k.removeEventListener("lostpointercapture", $), Oe(), F(), window.removeEventListener("keydown", te, !0), (Ce = (ce = e.__panoStateFlushers) == null ? void 0 : ce.delete) == null || Ce.call(ce, nt), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Pe = N == null ? void 0 : N.destroy) == null || Pe.call(N), (Ge = pt == null ? void 0 : pt.unmount) == null || Ge.call(pt), G && (G.playback.dispose(), G.video.remove(), e.__panoSurfacePlayback === G && (e.__panoSurfacePlayback = null)), O.dispose(), e.__panoSurfaceScene = null, (Nt = ($e = e.__panoRasterObjectSurfaceCache) == null ? void 0 : $e.dispose) == null || Nt.call($e), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, U(), ye.dispose(), st && clearTimeout(st), st = null, Tf.disposeOwner(e), Lo(e), I.raf && cancelAnimationFrame(I.raf), I.raf = 0, ((wn = e.__panoCutoutNodeSurface) == null ? void 0 : wn.session) === N && (e.__panoCutoutNodeSurface = null), ((Wt = e.__panoStickersNodeSurface) == null ? void 0 : Wt.session) === N && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Dr && (e.onResize = p), e.onExecuted === Un && (e.onExecuted = Ee), e.onConnectionsChange === un && (e.onConnectionsChange = Ht), Se && (we == null ? void 0 : we.callback) === Se && (we.callback = ke), Se && (we == null ? void 0 : we.__panoPreviewPatchedCb) === Se && delete we.__panoPreviewPatchedCb, Ae && (ue == null ? void 0 : ue.callback) === Ae && (ue.callback = Re), Ae && (ue == null ? void 0 : ue.__panoPreviewPatchedCb) === Ae && delete ue.__panoPreviewPatchedCb, e.onDragOver === on && (e.onDragOver = it), e.onDragDrop === vt && (e.onDragDrop = We), e.onRemoved === Lr && (e.onRemoved = De);
  };
  e.__panoDomRestore = Qi, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = N && rt && !o ? { session: N, model: R } : null, e.__panoStickersNodeSurface = N && rt && o ? { session: N, model: R } : null, e.__panoDomPreview = {
    widget: W,
    root: x,
    canvas: k,
    requestDraw: z,
    state: I,
    emptyHintEl: _,
    nodeSurface: e.__panoCutoutNodeSurface
  }, $u.register(e), e.graph && Qr(e, "attach"), z();
}
function Dp(e, t = {}) {
  E0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Lp(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (I0(e) && !n) {
    Df(e);
    return;
  }
  E0(e).attach(t);
}
function aM(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function sM(e, t = 1, n = lp) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), f = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, b = Number(n), g = Number.isFinite(b) && b > 0 ? b : lp, w = Math.max(f, d), x = w > 0 ? Math.min(1, g / w) : 1;
  return {
    width: Math.max(1, Math.round(f * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function lM({
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
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const k = d();
    return k === f || (f = k, o(k)), k;
  }, g = () => b();
  return (M = t == null ? void 0 : t.addEventListener) == null || M.call(t, "fullscreenchange", g), b(), { toggle: async () => {
    var k;
    if (c || !e || !t) return !1;
    if (d()) {
      try {
        await ((k = t.exitFullscreen) == null ? void 0 : k.call(t));
      } catch {
      }
      return c ? !1 : (b(), d());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), c) return !1;
        if (d())
          return b(), !0;
      } catch {
      }
    return c || (a(), b()), !1;
  }, isActive: d, destroy: () => {
    var k, _, F;
    if (!c) {
      if (c = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", g), d())
        try {
          const L = (_ = t.exitFullscreen) == null ? void 0 : _.call(t);
          (F = L == null ? void 0 : L.catch) == null || F.call(L, () => {
          });
        } catch {
        }
      f = !1, o(!1);
    }
  } };
}
const cM = { class: "pano-preview-node-surface" }, uM = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ae(), fe("div", cM, [
      Fe(sn, {
        icon: e.model.fullscreen ? Je(Me).fullscreen_close : Je(Me).fullscreen,
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
      e.model.viewUnavailable ? (ae(), Tr(Af, { key: 0 })) : ct("", !0)
    ]));
  }
}, Ms = 140, fM = 180, Rp = 40, qc = 10;
function $p(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Vp(e, t) {
  const n = $p(e), r = $p(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function zp(e) {
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
  return typeof ((a = Vt) == null ? void 0 : a.apiURL) == "function" ? Vt.apiURL(o) : o;
}
function Ro(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ro(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return zp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = Ro(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : zp(e);
}
function R0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function dM(e) {
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
function ju(e) {
  var o;
  const t = (o = Ar) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Vp(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (Vp(a, n)) return t[a];
  return null;
}
function hM(e) {
  var r, o;
  const t = ju(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const f = Ro(c);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function pM(e, t = "erp_image") {
  var M, k, _, F, L, W, I;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((z) => String((z == null ? void 0 : z.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((z, O) => String((z == null ? void 0 : z.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(O))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (_ = (k = (M = Ar) == null ? void 0 : M.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : _.call(k, a), f = ju(a), d = ju(e == null ? void 0 : e.id), b = [
    (F = d == null ? void 0 : d.ui) == null ? void 0 : F.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    f == null ? void 0 : f.images,
    (L = f == null ? void 0 : f.ui) == null ? void 0 : L.pano_input_images,
    f == null ? void 0 : f.pano_input_images
  ];
  for (const z of b)
    if (Array.isArray(z))
      for (const O of z) {
        const R = Ro(O);
        if (R) return R;
      }
  let g = [];
  try {
    g = typeof ((W = Ar) == null ? void 0 : W.getNodeImageUrls) == "function" ? Ar.getNodeImageUrls(c) || [] : [];
  } catch {
    g = [];
  }
  if (Array.isArray(g) && g.length > 0)
    for (const z of g) {
      const O = Ro(z);
      if (O) return O;
    }
  if (c) {
    const z = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const O of z) {
      const R = Ro(O);
      if (R) return R;
    }
  }
  const w = (I = c == null ? void 0 : c.widgets) == null ? void 0 : I.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image"), x = String((w == null ? void 0 : w.value) || "").trim();
  return x ? Vt.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function Jc(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function jp(e, t, n, r, o, a, c) {
  var b, g, w;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !R0(a) || n <= 1 || r <= 1) {
    Jc(t, n, r);
    return;
  }
  if (c.failed) {
    Jc(t, n, r);
    return;
  }
  const f = Number(((w = (g = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : g.call(b, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : w.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: hl(o, n, r),
    background: { media: a, revision: dM(a), coverage: f },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : Jc(t, n, r);
}
function Hp(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class mM {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Yg(() => this.requestDraw()), this.controller = pf({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Kt(Number((r == null ? void 0 : r.yaw) || 0)),
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
        `min-height:${Ms}px`,
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
          return Ms;
        },
        getHeight() {
          return Ms;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = yl(Tu(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Ms, Number(a.minHeight || 0)),
            minWidth: Math.max(fM, Number(a.minWidth || 0))
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
      return Ef(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Ko({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = lM({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, d;
          return (d = (f = this.options).onOpen) == null ? void 0 : d.call(f, this.node);
        }
      }), this.surfaceApp = cf(uM, {
        model: this.surfaceModel,
        onAction: (f) => {
          var d, b;
          (f == null ? void 0 : f.type) === "toggle-fullscreen" && ((b = (d = this.fullscreenController) == null ? void 0 : d.toggle) == null || b.call(d));
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = ig(n), t.addEventListener("pointerdown", (a) => {
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
      aM(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !R0(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return Hp(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, g, w, x, M;
      const a = Vk(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !Hp(a.x, a.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), f && ((g = this.setDirtyCanvas) == null || g.call(this, !0, !1)), (w = n == null ? void 0 : n.preventDefault) == null || w.call(n), (x = n == null ? void 0 : n.stopPropagation) == null || x.call(n), (M = n == null ? void 0 : n.stopImmediatePropagation) == null || M.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, c;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - qc * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - Rp - qc);
    return { x: qc, y: Rp, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), jp(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Wg : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = sM(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = hM(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const d = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, b = () => this.requestDraw();
      f.addEventListener("loadedmetadata", d), f.addEventListener("canplay", d), f.addEventListener("timeupdate", b), f.addEventListener("play", b), f.addEventListener("pause", b), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", d), f.removeEventListener("canplay", d), f.removeEventListener("timeupdate", b), f.removeEventListener("play", b), f.removeEventListener("pause", b);
      };
      return;
    }
    const n = pM(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), jp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, f, d, b, g, w, x, M, k, _, F, L;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (w = (g = this.surfaceHost) == null ? void 0 : g.remove) == null || w.call(g), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (M = this.root) == null ? void 0 : M.remove) == null || k.call(M);
    } catch {
    }
    try {
      A0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((L = (F = (_ = this.node) == null ? void 0 : _.widgets) == null ? void 0 : F.find) == null ? void 0 : L.call(F, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function gM(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new mM(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function $0(e, t, n) {
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
function Rf(e) {
  return !!(e != null && e.prototype);
}
function ja(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function yM(e, t = {}) {
  Rf(e) || gM(e, {
    ...t,
    onOpen: ja(e, t.onOpen)
  });
}
function bM(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Rf(e)) {
    Lp(e, {
      ...r,
      onOpen: ja(e, t.onOpen)
    });
    return;
  }
  $0(e, "stickers_node_preview", (o) => {
    Lp(o, {
      ...r,
      onOpen: ja(o, t.onOpen)
    });
  });
}
function vM(e, t = {}) {
  if (!Rf(e)) {
    Dp(e, {
      ...t,
      onOpen: ja(e, t.onOpen)
    });
    return;
  }
  $0(e, "cutout_preview", (n) => {
    Dp(n, {
      ...t,
      onOpen: ja(n, t.onOpen)
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
}, Kr = "pen";
function Gp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function _M(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function f(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((w) => {
      r.push(String(w || ""));
    }), !r.length)) return;
    const g = Number(b.index);
    Number.isInteger(g) ? g === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, g)) : o = r.length - 1;
  }
  function d(b) {
    r[o] !== b && (r.splice(o + 1), r.push(b), r.length > a && r.shift(), o = r.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(b) {
      d(String(b || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const b = o - 1;
      return b < 0 || b >= r.length ? null : (o = b, r[o]);
    },
    redo() {
      const b = o + 1;
      return b < 0 || b >= r.length ? null : (o = b, r[o]);
    },
    get entries() {
      return r.slice();
    },
    get index() {
      return o;
    },
    serialize() {
      const b = r.length, g = Math.max(0, b - c), w = o >= 0 ? Math.max(0, Math.min(o, g)) : g, x = r.slice(w, w + c), M = o < 0 ? -1 : Math.max(-1, Math.min(x.length - 1, o - w));
      return {
        version: 1,
        entries: x,
        index: M
      };
    },
    hydrate: f
  };
}
function yo(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function wM(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function xM({
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
  var I, z;
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", g = {
    visible: b,
    activePane: b ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: r(e.customPaintColor, 1),
    colorPopOpen: b ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (O, R) => ({ index: R, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return g;
  const w = ((I = t.find((O) => o(e.paintColor, O.color))) == null ? void 0 : I.id) || "", x = !w, M = a(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((z = e.customPaintColor) == null ? void 0 : z.a) ?? 1))) * 100), _ = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), F = e.brushSizes[_] ?? 10, L = d(), W = Array.from({ length: 8 }, (O, R) => e.customPaintHistory[R] || null);
  return {
    ...g,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: w,
    customColorActive: x,
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
    historyEntries: W.map((O, R) => ({
      index: R,
      color: O ? { cssColor: r(O, 1) } : null
    })),
    sizeValue: F,
    sizeText: String(F),
    sizeFill: `${Math.max(0, Math.min(100, (F - 1) / 119 * 100))}%`,
    sizeDisabled: L,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function SM({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function kM({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: a,
  params: c,
  notes: f,
  visibilityRows: d,
  uiSettings: b,
  normalizeCoverageValue: g
}) {
  return {
    coverage: { value: g(e), disabled: !!t },
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
    uiSettings: t ? null : b,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function MM({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: o,
  allLocked: a,
  anyLocked: c,
  selectedLocked: f,
  activeAspect: d,
  cutoutAspectOpen: b,
  isExternalSticker: g,
  isStickerHidden: w,
  canRestoreSelectedToInitial: x,
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
    ], g(t) || (k.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: M.duplicate }), k.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: M.replace_image })), g(t)) {
      const R = x(), G = w(t);
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
        label: G ? "Show" : "Hide",
        tip: G ? "Show input image" : "Hide input image",
        icon: G ? M.eye : M.eye_dashed
      });
    }
    k.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed }), g(t) || k.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f });
  } else
    k = [
      {
        key: "aspect",
        kind: "aspect",
        icon: M.aspect,
        open: !!b,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((R) => ({ value: R, label: R, active: d === R }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: M.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f }
    ];
  const _ = o.corners.map((R) => ({ x: Number(R == null ? void 0 : R.x), y: Number(R == null ? void 0 : R.y) })).filter((R) => Number.isFinite(R.x) && Number.isFinite(R.y));
  if (!_.length) return { visible: !1, left: 0, top: 0, items: [] };
  const F = _.map((R) => R.x), L = _.map((R) => R.y), W = Math.min(...F), I = Math.max(...F), z = Math.min(...L), O = Math.max(...L);
  return {
    visible: !0,
    left: (W + I) * 0.5,
    top: O + 18,
    items: k,
    anchor: { minX: W, maxX: I, minY: z, maxY: O }
  };
}
const NM = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function PM(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: c, playing: f, label: d, audio: b = null }) {
  const g = (M, k, _, F, L) => {
    const W = (I) => (r == null ? void 0 : r.owner) === M && r.lane === I ? r.frames.map((z) => z + L) : [];
    return {
      id: M,
      label: _,
      clip: F,
      selected: M === o,
      open: c.has(M),
      keyed: ax(k, t - L),
      keys: ox(k).map((I) => ({ frame: I.frame + L, full: I.full })),
      selectedFrames: W(null),
      lanes: Wo(k).map((I) => ({
        key: `${M}:${I}`,
        lane: I,
        label: NM[I],
        frames: k[I].keyframes.map((z) => z.frame + L),
        selectedFrames: W(I)
      }))
    };
  }, w = e.stickers.filter((M) => M.placement === "sky").sort((M, k) => k.z_index - M.z_index), x = e.stickers.filter((M) => M.placement === "world");
  return {
    visible: !0,
    expanded: a,
    playing: f,
    hasAudio: !!b,
    muted: !!(b != null && b.muted),
    frame: t,
    span: n,
    label: d,
    rows: [
      g("camera", e.camera, "Camera", null, 0),
      ...[...w, ...x].map((M) => {
        const { start: k, in: _, duration: F } = M.clip;
        return g(M.id, M, $g(M), { start: k, end: F === null ? null : k + F }, k - _);
      })
    ]
  };
}
function AM(e, t, n, r) {
  const o = cx(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const CM = { class: "pano-floating-right" }, IM = ["data-settled"], EM = ["data-ready", "data-settled"], OM = ["aria-label", "data-tip"], FM = {
  key: 1,
  class: "pano-camera-preview-label"
}, TM = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe(Ue, null, [
      B("div", CM, [
        (ae(!0), fe(Ue, null, St(e.buttons, (r) => (ae(), Tr(sn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      _i(B("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        B("div", {
          class: at(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: xt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = B("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            B("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (ae(), fe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Fe(It, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, OM)) : ct("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ae(), fe("div", FM, tt(e.preview.label || "Preview unavailable"), 1)) : ct("", !0)
        ], 14, EM)
      ], 8, IM), [
        [Bo, e.preview.visible]
      ])
    ], 64));
  }
}, DM = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, LM = ["y2", "transform"], RM = ["transform"], $M = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = ft(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => _i((ae(), fe("div", {
      class: at(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ae(), fe("svg", DM, [
        a[1] || (a[1] = B("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ae(!0), fe(Ue, null, St(Je(n), (c) => (ae(), fe("line", {
          key: c,
          class: at(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, LM))), 128)),
        B("g", { transform: r.value }, [...a[0] || (a[0] = [
          B("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, RM),
        a[2] || (a[2] = B("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Bo, e.model.visible === !0]
    ]);
  }
}, VM = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: at(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Fe(S0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Fe(sn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Fe($M, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, zM = ["aria-label"], jM = { class: "pano-canvas-confirm-title" }, HM = { class: "pano-canvas-confirm-text" }, GM = { class: "pano-canvas-confirm-actions" }, KM = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, BM = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ zt(null), r = /* @__PURE__ */ zt(null);
    let o = null;
    function a() {
      const w = r.value;
      return w ? Array.from(w.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((x) => x instanceof HTMLElement ? !x.hidden && x.tabIndex >= 0 && x.offsetParent !== null : !1) : [];
    }
    function c(w) {
      const x = r.value;
      if (!x) return;
      const M = x.querySelector(`[data-action='${w}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function f() {
      var _;
      const w = r.value;
      if (!w) return;
      const x = w.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const k = a()[0] || w;
      (_ = k == null ? void 0 : k.focus) == null || _.call(k);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(w) {
      var L;
      if (w.defaultPrevented) return;
      if (w.key === "Escape") {
        w.preventDefault(), w.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (w.key !== "Tab") return;
      const x = a(), M = r.value;
      if (!x.length) {
        w.preventDefault(), (L = M == null ? void 0 : M.focus) == null || L.call(M);
        return;
      }
      const k = x[0], _ = x[x.length - 1], F = document.activeElement;
      if (w.shiftKey) {
        (F === k || F === M || !(M != null && M.contains(F))) && (w.preventDefault(), _.focus());
        return;
      }
      (F === _ || !(M != null && M.contains(F))) && (w.preventDefault(), k.focus());
    }
    function g(w) {
      w.target === n.value && c("confirm-cancel");
    }
    return Ki(() => t.model.visible, (w, x) => {
      if (w) {
        o = document.activeElement, nf(() => {
          f();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), Ka(() => {
      d();
    }), (w, x) => e.model.visible === !0 ? (ae(), fe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ct(g, ["self"])
    }, [
      B("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        B("div", jM, tt(e.model.title), 1),
        B("div", HM, tt(e.model.text), 1),
        B("div", GM, [
          x[0] || (x[0] = B("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          B("button", KM, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, zM)
    ], 512)) : ct("", !0);
  }
}, UM = ["data-paint-pane"], WM = ["hidden"], YM = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], XM = ["aria-pressed", "disabled"], qM = ["hidden"], JM = { class: "pano-paint-color-pop-head" }, ZM = { class: "pano-paint-color-field" }, QM = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, eN = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, tN = { class: "pano-paint-color-field" }, nN = { class: "pano-paint-alpha-wrap" }, rN = ["value"], iN = { "data-paint-alpha-value": "" }, oN = ["hidden"], aN = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, sN = ["data-paint-history-index", "aria-label", "disabled"], lN = ["data-paint-footer"], cN = ["data-paint-group"], uN = ["hidden"], fN = ["value", "disabled"], dN = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, hN = ["hidden"], pN = {
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
    return (r, o) => (ae(), fe("div", {
      class: at(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ae(!0), fe(Ue, null, St(e.panes, (a) => {
        var c;
        return ae(), fe("div", {
          key: a.key,
          class: at(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ae(), fe("div", {
            key: 0,
            class: at(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ae(!0), fe(Ue, null, St(e.paintSwatches, (f) => (ae(), fe("button", {
              key: f.id,
              class: at(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: xt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, YM))), 128)),
            B("button", {
              class: at(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: xt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, XM),
            B("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: xt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              B("div", JM, [
                B("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: xt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = B("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              B("div", ZM, [
                B("div", QM, [
                  B("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: xt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                B("div", eN, [
                  B("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: xt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              B("label", tN, [
                o[1] || (o[1] = B("span", null, "Opacity", -1)),
                B("div", nN, [
                  B("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, rN),
                  B("span", iN, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              B("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                B("div", aN, [
                  (ae(!0), fe(Ue, null, St(e.state.historyEntries || [], (f) => (ae(), fe("button", {
                    key: f.index,
                    class: at(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: xt(n(f.color))
                  }, null, 14, sN))), 128))
                ])
              ], 8, oN)
            ], 12, qM)
          ], 10, WM)) : ct("", !0),
          B("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            B("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (ae(!0), fe(Ue, null, St(a.tools, (f) => {
                var d;
                return ae(), Tr(sn, {
                  key: `${a.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, cN),
            B("div", {
              class: at(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              B("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: xt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, fN),
              B("span", dN, tt(e.state.sizeText || "10"), 1)
            ], 10, uN),
            B("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              Fe(sn, {
                icon: Je(Me).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, hN)
          ], 8, lN)
        ], 10, UM);
      }), 128))
    ], 2));
  }
}, mN = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ zt(null), r = /* @__PURE__ */ zt(null), o = /* @__PURE__ */ zt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, f) => (ae(), fe(Ue, null, [
      B("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      B("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        B("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, gN = {
  key: 0,
  class: "pano-cutout-menu"
}, yN = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, bN = ["data-aspect"], vN = ["data-action", "aria-label", "data-tip", "disabled"], _N = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: xt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ae(!0), fe(Ue, null, St(e.model.items || [], (r) => (ae(), fe(Ue, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ae(), fe("div", gN, [
          B("button", yN, [
            Fe(It, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          B("div", {
            class: at(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ae(!0), fe(Ue, null, St(r.choices || [], (o) => (ae(), fe("button", {
              key: o.value,
              class: at(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, tt(o.label), 11, bN))), 128))
          ], 2)
        ])) : (ae(), fe("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Fe(It, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, vN))
      ], 64))), 128))
    ], 4));
  }
}, wN = {
  key: 0,
  class: "pano-easing"
}, xN = { class: "pano-section-title" }, SN = { class: "pano-easing-range" }, kN = { class: "pano-easing-modes" }, MN = ["aria-pressed", "onClick"], NN = ["viewBox"], PN = ["x", "y"], AN = ["x1", "y1", "x2", "y2"], CN = ["d"], IN = ["x1", "y1", "x2", "y2"], EN = ["x1", "y1", "x2", "y2"], ON = ["cx", "cy"], FN = ["cx", "cy"], TN = { class: "pano-easing-note" }, Br = 132, Ti = 14, DN = {
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
    ], a = /* @__PURE__ */ zt(null), c = ft(() => {
      var k;
      return Array.isArray((k = n.model) == null ? void 0 : k.easing) ? n.model.easing : null;
    }), f = (k) => Ti + k * Br, d = (k) => Ti + (1 - k) * Br, b = ft(() => {
      var W;
      if (((W = n.model) == null ? void 0 : W.easing) === "hold") return `M${f(0)} ${d(0)} H${f(1)} V${d(1)}`;
      const [k, _, F, L] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${f(0)} ${d(0)} C${f(k)} ${d(_)} ${f(F)} ${d(L)} ${f(1)} ${d(1)}`;
    }), g = ft(() => c.value ? c.value.map((k) => k.toFixed(2)).join(", ") : "");
    function w(k) {
      var _;
      return JSON.stringify(k.easing) === JSON.stringify((_ = n.model) == null ? void 0 : _.easing);
    }
    function x(k, _) {
      r("timeline", { type: "easing", easing: k, commit: _ });
    }
    function M(k, _) {
      var z;
      if (k.button !== 0 || !c.value) return;
      const F = k.currentTarget;
      (z = F.setPointerCapture) == null || z.call(F, k.pointerId);
      let L = null;
      const W = (O) => {
        const R = a.value.getBoundingClientRect(), G = R.width / (Br + Ti * 2), ee = ((O.clientX - R.left) / G - Ti) / Br, ve = 1 - ((O.clientY - R.top) / G - Ti) / Br;
        L = [...L || c.value], L[_] = Math.round(Math.min(1, Math.max(0, ee)) * 100) / 100, L[_ + 1] = Math.round(Math.min(1, Math.max(0, ve)) * 100) / 100, x(L, !1);
      }, I = () => {
        F.removeEventListener("pointermove", W), F.removeEventListener("pointerup", I), F.removeEventListener("pointercancel", I), L && x(L, !0);
      };
      F.addEventListener("pointermove", W), F.addEventListener("pointerup", I), F.addEventListener("pointercancel", I);
    }
    return (k, _) => e.model ? (ae(), fe("div", wN, [
      B("div", xN, [
        _[2] || (_[2] = B("span", null, "Easing", -1)),
        B("span", SN, tt(e.model.label), 1)
      ]),
      B("div", kN, [
        (ae(), fe(Ue, null, St(o, (F) => B("button", {
          key: F.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": w(F) ? "true" : "false",
          onClick: (L) => x(F.easing, !0)
        }, tt(F.label), 9, MN)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ae(), fe("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Br + Ti * 2} ${Br + Ti * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        B("rect", {
          class: "pano-easing-square",
          x: f(0),
          y: d(1),
          width: Br,
          height: Br
        }, null, 8, PN),
        B("line", {
          class: "pano-easing-diagonal",
          x1: f(0),
          y1: d(0),
          x2: f(1),
          y2: d(1)
        }, null, 8, AN),
        B("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, CN),
        c.value ? (ae(), fe(Ue, { key: 0 }, [
          B("line", {
            class: "pano-easing-arm",
            x1: f(0),
            y1: d(0),
            x2: f(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, IN),
          B("line", {
            class: "pano-easing-arm",
            x1: f(1),
            y1: d(1),
            x2: f(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, EN),
          B("circle", {
            class: "pano-easing-handle",
            cx: f(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: _[0] || (_[0] = (F) => M(F, 0))
          }, null, 40, ON),
          B("circle", {
            class: "pano-easing-handle",
            cx: f(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: _[1] || (_[1] = (F) => M(F, 2))
          }, null, 40, FN)
        ], 64)) : ct("", !0)
      ], 8, NN)) : ct("", !0),
      B("div", TN, [
        e.model.mixed ? (ae(), fe(Ue, { key: 0 }, [
          ba("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ae(), fe(Ue, { key: 1 }, [
          ba("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ae(), fe(Ue, { key: 2 }, [
          ba("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ae(), fe(Ue, { key: 3 }, [
          ba("cubic-bezier(" + tt(g.value) + ")", 1)
        ], 64)) : ct("", !0)
      ])
    ])) : ct("", !0);
  }
}, LN = {
  class: "pano-side",
  "data-side": ""
}, RN = { class: "pano-side-head" }, $N = { class: "pano-side-title" }, VN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, zN = {
  key: 0,
  class: "pano-side-scroll"
}, jN = { class: "pano-inspector" }, HN = { class: "pano-ui-row pano-coverage-row" }, GN = ["data-selected"], KN = ["aria-pressed", "disabled"], BN = ["aria-pressed", "disabled"], UN = {
  key: 0,
  class: "pano-section-title"
}, WN = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, YN = {
  class: "pano-picker",
  "data-picker": "selection"
}, XN = ["disabled"], qN = { class: "pano-picker-label" }, JN = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, ZN = ["hidden"], QN = ["data-selection-id"], e2 = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, t2 = {
  key: 2,
  class: "pano-state-actions"
}, n2 = ["disabled"], r2 = ["data-key"], i2 = ["min", "max", "step", "value", "disabled", "data-param-key"], o2 = ["min", "max", "step", "value", "disabled", "data-param-key"], a2 = { class: "pano-visibility-section" }, s2 = { class: "pano-visibility-stack" }, l2 = ["data-visibility-row"], c2 = { class: "pano-visibility-name" }, u2 = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, f2 = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], d2 = ["open"], h2 = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, p2 = { class: "pano-ui-settings-body" }, m2 = { class: "pano-ui-row" }, g2 = ["data-selected"], y2 = ["aria-pressed"], b2 = ["aria-pressed"], v2 = { class: "pano-ui-row" }, _2 = ["data-selected"], w2 = ["aria-pressed"], x2 = ["aria-pressed"], S2 = {
  key: 1,
  class: "pano-side-footer"
}, k2 = ["data-action"], M2 = {
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
      var b, g, w, x, M;
      return ae(), fe("div", LN, [
        B("div", RN, [
          B("div", $N, [
            B("span", VN, [
              Fe(It, {
                icon: Je(Me).globe
              }, null, 8, ["icon"])
            ]),
            B("span", null, tt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = B("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = B("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ae(), fe("div", zN, [
          B("div", jN, [
            d[11] || (d[11] = B("div", { class: "pano-section-title" }, [
              B("span", null, "Scene")
            ], -1)),
            B("div", HN, [
              d[2] || (d[2] = B("label", null, "Coverage", -1)),
              B("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((b = e.model.coverage) == null ? void 0 : b.value) === 180 ? "1" : "0"
              }, [
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((g = e.model.coverage) == null ? void 0 : g.value) === 360 ? "true" : "false",
                  disabled: ((w = e.model.coverage) == null ? void 0 : w.disabled) === !0
                }, "360", 8, KN),
                B("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 180 ? "true" : "false",
                  disabled: ((M = e.model.coverage) == null ? void 0 : M.disabled) === !0
                }, "180", 8, BN)
              ], 8, GN)
            ]),
            e.model.transformTitle !== !1 ? (ae(), fe("div", UN, [...d[3] || (d[3] = [
              B("span", null, "Transform", -1)
            ])])) : ct("", !0),
            e.model.selectionPicker ? (ae(), fe("div", WN, [
              B("label", null, tt(e.model.selectionPicker.label), 1),
              B("div", YN, [
                B("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  B("span", qN, [
                    e.model.selectionPicker.currentIcon ? (ae(), fe("span", JN, [
                      Fe(It, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    B("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = B("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, XN),
                B("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ae(!0), fe(Ue, null, St(e.model.selectionPicker.items || [], (k) => (ae(), fe("button", {
                    key: k.id,
                    type: "button",
                    class: at(["pano-picker-item", { active: k.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": k.id
                  }, [
                    k.icon ? (ae(), fe("span", e2, [
                      Fe(It, {
                        icon: k.icon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    B("span", null, tt(k.label), 1)
                  ], 10, QN))), 128))
                ], 8, ZN)
              ])
            ])) : ct("", !0),
            e.model.copyStateButton ? (ae(), fe("div", t2, [
              B("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Fe(It, {
                  icon: Je(Me).copy
                }, null, 8, ["icon"]),
                B("span", null, tt(e.model.copyStateButton.label), 1)
              ], 8, n2)
            ])) : ct("", !0),
            B("div", {
              class: at(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ae(!0), fe(Ue, { key: 0 }, St(e.model.notes, (k) => (ae(), fe("div", {
                key: k,
                class: "pano-param-note"
              }, tt(k), 1))), 128)) : (ae(!0), fe(Ue, { key: 1 }, St(e.model.params || [], (k) => (ae(), fe("div", {
                key: k.key,
                class: "pano-field",
                "data-key": k.key
              }, [
                B("label", null, tt(k.label), 1),
                B("input", {
                  type: "range",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.value,
                  disabled: c(k, e.model),
                  style: xt(a(k)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": k.key
                }, null, 12, i2),
                B("input", {
                  type: "number",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.displayValue,
                  disabled: c(k, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": k.key
                }, null, 8, o2)
              ], 8, r2))), 128))
            ], 2),
            Fe(DN, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (k) => r("timeline", k))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (ae(), fe(Ue, { key: 3 }, [
              d[6] || (d[6] = B("div", { class: "pano-divider" }, null, -1)),
              B("div", a2, [
                d[5] || (d[5] = B("div", { class: "pano-section-title" }, [
                  B("span", null, "Layers")
                ], -1)),
                B("div", s2, [
                  (ae(!0), fe(Ue, null, St(e.model.visibilityRows, (k) => (ae(), fe("div", {
                    key: k.key,
                    class: at(["pano-visibility-row", { "is-hidden": k.visible === !1, "is-disabled": k.enabled === !1 }]),
                    "data-visibility-row": k.key
                  }, [
                    B("span", c2, [
                      B("span", u2, [
                        Fe(It, {
                          icon: k.icon
                        }, null, 8, ["icon"])
                      ]),
                      B("span", null, tt(k.label), 1)
                    ]),
                    B("button", {
                      class: at(["pano-visibility-toggle", { active: k.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": k.key,
                      "aria-label": k.ariaLabel,
                      "aria-pressed": k.visible === !0 ? "true" : "false",
                      "data-tip": k.tip,
                      disabled: k.enabled === !1
                    }, [
                      Fe(It, {
                        icon: k.visible === !0 ? Je(Me).eye : Je(Me).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, f2)
                  ], 10, l2))), 128))
                ])
              ])
            ], 64)) : ct("", !0),
            e.model.uiSettings ? (ae(), fe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              B("summary", null, [
                d[7] || (d[7] = B("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                B("span", h2, [
                  Fe(It, {
                    icon: Je(Me).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              B("div", p2, [
                B("div", m2, [
                  d[8] || (d[8] = B("label", null, "Drag X", -1)),
                  B("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, y2),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, b2)
                  ], 8, g2)
                ]),
                B("div", v2, [
                  d[9] || (d[9] = B("label", null, "Drag Y", -1)),
                  B("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, w2),
                    B("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, x2)
                  ], 8, _2)
                ]),
                d[10] || (d[10] = B("div", { class: "pano-ui-row" }, [
                  B("span"),
                  B("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, d2)) : ct("", !0)
          ])
        ])) : ct("", !0),
        (e.model.footerButtons || []).length ? (ae(), fe("div", S2, [
          (ae(!0), fe(Ue, null, St(e.model.footerButtons, (k) => (ae(), fe("button", {
            key: k.action,
            class: at(["pano-btn", { "pano-btn-primary": k.primary === !0 }]),
            type: "button",
            "data-action": k.action
          }, tt(k.label), 11, k2))), 128))
        ])) : ct("", !0)
      ]);
    };
  }
}, N2 = { class: "pano-timeline-bar" }, P2 = ["aria-label", "data-tip"], A2 = ["aria-label", "data-tip"], C2 = { class: "pano-timeline-time" }, I2 = ["aria-expanded"], E2 = ["inert"], O2 = { class: "pano-timeline-name" }, F2 = ["aria-expanded", "aria-label", "onClick"], T2 = ["title", "aria-current", "onClick"], D2 = ["data-keyed", "aria-label", "onClick"], L2 = ["onPointerdown"], R2 = ["onPointerdown"], $2 = ["onPointerdown"], V2 = ["onPointerdown"], z2 = ["aria-label", "data-tip", "onPointerdown"], j2 = { key: 0 }, H2 = ["onPointerdown"], G2 = ["aria-label", "data-tip", "onPointerdown"], K2 = { key: 0 }, B2 = 10, U2 = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ zt(null), c = /* @__PURE__ */ zt(null), f = /* @__PURE__ */ zt(1), d = /* @__PURE__ */ zt(0), b = /* @__PURE__ */ zt(!1);
    let g = null, w = null, x = null;
    El(() => {
      g = new ResizeObserver(([N]) => {
        f.value = Math.max(1, N.contentRect.width);
      }), a.value && g.observe(a.value), w = new ResizeObserver(([N]) => {
        d.value = N.contentRect.height;
      }), c.value && w.observe(c.value);
    }), Ka(() => {
      g == null || g.disconnect(), w == null || w.disconnect(), x == null || x();
    });
    const M = ft(() => Math.max(1, Number(n.model.span || 1))), k = ft(() => f.value / M.value), _ = (N) => `${N / M.value * 100}%`, F = ft(() => {
      const N = o.find((U) => U * k.value >= 56) || o[o.length - 1], X = [];
      for (let U = 0; U < M.value; U += N) X.push(U);
      return X;
    });
    function L(N) {
      const X = a.value.getBoundingClientRect(), U = Math.floor((N - X.left) / Math.max(1, X.width) * M.value);
      return Math.min(M.value - 1, Math.max(0, U));
    }
    function W(N, X, U) {
      const q = Math.ceil(B2 / Math.max(1e-6, k.value)), Y = new Map(X.map((ne) => [ne.frame, ne.full]));
      return px(X.map((ne) => ne.frame), q).map((ne, J) => ({
        ...ne,
        key: `${N}:${J}`,
        partial: ne.frames.some((E) => !Y.get(E)),
        selected: ne.frames.some((E) => U.includes(E))
      }));
    }
    function I(N) {
      return W(N.id, N.keys, N.selectedFrames);
    }
    function z(N) {
      return W(N.key, N.frames.map((X) => ({ frame: X, full: !0 })), N.selectedFrames);
    }
    function O(N) {
      const X = N.end === null ? M.value : N.end;
      return { left: _(N.start), width: _(Math.max(0, X - N.start)) };
    }
    function R(N, X) {
      const U = N.clientX, q = Math.max(1e-6, k.value);
      let Y = 0;
      X("start", 0, N);
      const ne = (E) => {
        if (E.pointerId !== N.pointerId) return;
        const Le = Math.round((E.clientX - U) / q);
        Le !== Y && (Y = Le, X("move", Y, E));
      }, J = (E) => {
        E.pointerId === N.pointerId && (x(), X("end", Y, E));
      };
      x == null || x(), x = () => {
        window.removeEventListener("pointermove", ne), window.removeEventListener("pointerup", J), window.removeEventListener("pointercancel", J), x = null;
      }, window.addEventListener("pointermove", ne), window.addEventListener("pointerup", J), window.addEventListener("pointercancel", J);
    }
    function G(N) {
      N.button === 0 && R(N, (X, U, q) => r("action", { type: "seek", frame: L(q.clientX), phase: X }));
    }
    function ee(N, X, U) {
      N.button === 0 && (r("action", { type: "select-row", id: X.id }), R(N, (q, Y) => r("action", { type: "clip", id: X.id, mode: U, delta: Y, phase: q })));
    }
    function ve(N, X, U, q, Y) {
      if (N.button === 0) {
        if (N.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: U, frames: q.frames, additive: !0 });
          return;
        }
        q.frames.every((ne) => Y.includes(ne)) || r("action", { type: "select-keys", owner: X.id, lane: U, frames: q.frames, additive: !1 }), R(N, (ne, J) => r("action", { type: "move-keys", delta: J, phase: ne }));
      }
    }
    function T(N, X, U) {
      N.button !== 0 || N.target !== N.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: U, frames: [], additive: !1 });
    }
    return (N, X) => _i((ae(), fe("section", {
      class: at(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      B("div", N2, [
        B("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (U) => r("action", { type: "play" }))
        }, [
          Fe(It, {
            icon: e.model.playing ? Je(Me).pause : Je(Me).play
          }, null, 8, ["icon"])
        ], 8, P2),
        e.model.hasAudio ? (ae(), fe("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (U) => r("action", { type: "mute" }))
        }, [
          Fe(It, {
            icon: e.model.muted ? Je(Me).volume_muted : Je(Me).volume2
          }, null, 8, ["icon"])
        ], 8, A2)) : ct("", !0),
        B("span", C2, tt(e.model.label), 1),
        B("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (U) => r("action", { type: "toggle-expanded" }))
        }, [
          X[6] || (X[6] = B("span", null, "Timeline", -1)),
          Fe(It, {
            icon: Je(Me).chevron
          }, null, 8, ["icon"])
        ], 8, I2)
      ]),
      B("div", {
        class: at(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: xt({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = Ct((U) => b.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = Ct((U) => b.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = Ct((U) => b.value = !1, ["self"]))
      }, [
        B("div", {
          ref_key: "gridRef",
          ref: c,
          class: "pano-timeline-grid"
        }, [
          X[7] || (X[7] = B("div", { class: "pano-timeline-corner" }, null, -1)),
          B("div", {
            ref_key: "rulerRef",
            ref: a,
            class: "pano-timeline-ruler",
            onPointerdown: G
          }, [
            (ae(!0), fe(Ue, null, St(F.value, (U) => (ae(), fe("span", {
              key: U,
              class: "pano-timeline-tick",
              style: xt({ left: _(U) })
            }, tt(U), 5))), 128)),
            B("span", {
              class: "pano-timeline-playhead",
              style: xt({ left: _(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (ae(!0), fe(Ue, null, St(e.model.rows || [], (U) => (ae(), fe(Ue, {
            key: U.id
          }, [
            B("div", {
              class: at(["pano-timeline-head", { selected: U.selected }])
            }, [
              B("div", O2, [
                B("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": U.open ? "true" : "false",
                  "aria-label": U.open ? `Hide ${U.label} parameters` : `Show ${U.label} parameters`,
                  onClick: Ct((q) => r("action", { type: "toggle-row", id: U.id }), ["stop"])
                }, [
                  Fe(It, {
                    icon: Je(Me).chevron
                  }, null, 8, ["icon"])
                ], 8, F2),
                B("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: U.label,
                  "aria-current": U.selected ? "true" : void 0,
                  onClick: (q) => r("action", { type: "select-row", id: U.id })
                }, [
                  Fe(It, {
                    icon: U.clip ? Je(Me).image : Je(Me).camera
                  }, null, 8, ["icon"]),
                  B("span", null, tt(U.label), 1)
                ], 8, T2),
                B("button", {
                  class: at(["pano-timeline-key", { keyed: U.keyed }]),
                  type: "button",
                  "data-keyed": U.keyed ? "true" : "false",
                  "aria-label": U.keyed ? `Every ${U.label} parameter has a keyframe here; update them` : `Add keyframes for every ${U.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ct((q) => r("action", { type: "key-row", owner: U.id }), ["stop"])
                }, [
                  Fe(It, {
                    icon: Je(Me).keyframe
                  }, null, 8, ["icon"])
                ], 10, D2)
              ]),
              U.open ? (ae(!0), fe(Ue, { key: 0 }, St(U.lanes, (q) => (ae(), fe("div", {
                key: q.key,
                class: "pano-timeline-lane-head"
              }, tt(q.label), 1))), 128)) : ct("", !0)
            ], 2),
            B("div", {
              class: at(["pano-timeline-track", { selected: U.selected }])
            }, [
              B("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (q) => T(q, U, null)
              }, [
                U.clip ? (ae(), fe("div", {
                  key: 0,
                  class: at(["pano-timeline-clip", { open: U.clip.end === null }]),
                  style: xt(O(U.clip)),
                  onPointerdown: Ct((q) => ee(q, U, "move"), ["stop"])
                }, [
                  B("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ct((q) => ee(q, U, "start"), ["stop"])
                  }, null, 40, $2),
                  B("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ct((q) => ee(q, U, "end"), ["stop"])
                  }, null, 40, V2)
                ], 46, R2)) : ct("", !0),
                (ae(!0), fe(Ue, null, St(I(U), (q) => (ae(), fe("button", {
                  key: q.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: q.selected, cluster: q.frames.length > 1, partial: q.partial }]),
                  style: xt({ left: _(q.frame + 0.5) }),
                  "aria-label": `${U.label}: ${q.frames.length > 1 ? `${q.frames.length} keyframes` : `keyframe at frame ${q.frames[0]}`}`,
                  "data-tip": q.frames.length > 1 ? `${q.frames.length} keyframes` : `Frame ${q.frames[0]}`,
                  onPointerdown: Ct((Y) => ve(Y, U, null, q, U.selectedFrames), ["stop"])
                }, [
                  q.frames.length > 1 ? (ae(), fe("span", j2, tt(q.frames.length), 1)) : ct("", !0)
                ], 46, z2))), 128))
              ], 40, L2),
              U.open ? (ae(!0), fe(Ue, { key: 0 }, St(U.lanes, (q) => (ae(), fe("div", {
                key: q.key,
                class: "pano-timeline-lane",
                onPointerdown: (Y) => T(Y, U, q.lane)
              }, [
                (ae(!0), fe(Ue, null, St(z(q), (Y) => (ae(), fe("button", {
                  key: Y.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: Y.selected, cluster: Y.frames.length > 1 }]),
                  style: xt({ left: _(Y.frame + 0.5) }),
                  "aria-label": `${q.label}: ${Y.frames.length > 1 ? `${Y.frames.length} keyframes` : `keyframe at frame ${Y.frames[0]}`}`,
                  "data-tip": Y.frames.length > 1 ? `${Y.frames.length} keyframes` : `Frame ${Y.frames[0]}`,
                  onPointerdown: Ct((ne) => ve(ne, U, q.lane, Y, q.selectedFrames), ["stop"])
                }, [
                  Y.frames.length > 1 ? (ae(), fe("span", K2, tt(Y.frames.length), 1)) : ct("", !0)
                ], 46, G2))), 128))
              ], 40, H2))), 128)) : ct("", !0),
              B("span", {
                class: "pano-timeline-playhead",
                style: xt({ left: _(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, E2)
    ], 2)), [
      [Bo, e.model.visible]
    ]);
  }
}, W2 = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", {
      class: at(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: xt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, tt(e.model.text || ""), 7));
  }
}, Y2 = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, X2 = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ae(), fe("div", Y2, [
      (ae(!0), fe(Ue, null, St(e.buttons, (r) => _i((ae(), Tr(sn, {
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
        [Bo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, q2 = ["data-video-ready"], J2 = { class: "pano-video-transport-shell" }, Z2 = { class: "pano-video-controls-left" }, Q2 = { class: "pano-video-filmstrip" }, eP = {
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
    const t = e, n = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause" : "Play";
    }), r = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause video" : "Play video";
    }), o = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? Me.pause : Me.play;
    }), a = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = ft(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? Me.loop_off : Me.loop;
    }), d = ft(() => {
      var O, R;
      return ((O = t.state) == null ? void 0 : O.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = ft(() => {
      var O, R, G;
      return ((O = t.state) == null ? void 0 : O.hasAudio) !== !0 ? Me.volume : ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((G = t.state) == null ? void 0 : G.volume) ?? 1) <= 0 ? Me.volume_muted : Me.volume2;
    }), g = ft(() => {
      var O;
      return Math.max(0, Math.min(100, Number(((O = t.state) == null ? void 0 : O.progressPct) || 0)));
    }), w = ft(() => ({ left: `${g.value}%` })), x = ft(() => {
      var ee, ve;
      const O = (ee = t.state) == null ? void 0 : ee.volumePct, R = Number(((ve = t.state) == null ? void 0 : ve.volume) ?? 1) * 100, G = Number(O ?? R ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, G))}%`
      };
    }), M = ft(() => {
      var G, ee;
      const R = [
        String(((G = t.state) == null ? void 0 : G.currentTimeLabel) || "0:00"),
        String(((ee = t.state) == null ? void 0 : ee.durationLabel) || "0:00")
      ].reduce((ve, T) => Math.max(ve, T.length), 4);
      return `${Math.max(4, R)}ch`;
    }), k = ft(() => ({ "--pano-video-time-ch": M.value })), _ = ft(() => {
      var G, ee;
      const O = Array.isArray((G = t.state) == null ? void 0 : G.thumbnails) ? t.state.thumbnails : [];
      if (O.length) return O;
      const R = Math.max(7, Number(((ee = t.state) == null ? void 0 : ee.thumbnailCount) || 9));
      return Array.from({ length: R }, (ve, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), F = /* @__PURE__ */ zt(/* @__PURE__ */ new Set()), L = (O) => String((O == null ? void 0 : O.id) || (O == null ? void 0 : O.src) || (O == null ? void 0 : O.label) || ""), W = (O) => F.value.has(L(O)), I = (O) => {
      const R = new Set(F.value);
      R.add(L(O)), F.value = R;
    };
    Ki(_, (O) => {
      const R = new Set(O.map(L)), G = /* @__PURE__ */ new Set();
      for (const ee of F.value)
        R.has(ee) && G.add(ee);
      F.value = G;
    }, { immediate: !0 });
    const z = ft(() => {
      var O;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((O = t.state) == null ? void 0 : O.shellMaxWidthPx) || 640))}px`
      };
    });
    return (O, R) => (ae(), fe("div", {
      class: at(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: xt(z.value)
    }, [
      R[1] || (R[1] = B("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      B("div", J2, [
        B("div", Z2, [
          Fe(sn, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          B("div", {
            class: "pano-video-time pano-video-time-start",
            style: xt(k.value)
          }, tt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        B("div", Q2, [
          B("div", eP, [
            (ae(!0), fe(Ue, null, St(_.value, (G) => (ae(), fe("div", {
              key: L(G),
              class: at(["pano-video-thumb", {
                "is-placeholder": !G.src,
                "is-loaded": G.src && W(G)
              }])
            }, [
              G.src ? (ae(), fe("img", {
                key: 0,
                src: G.src,
                alt: "",
                draggable: "false",
                onLoad: (ee) => I(G)
              }, null, 40, tP)) : (ae(), fe("span", nP))
            ], 2))), 128))
          ]),
          B("div", {
            class: "pano-video-playhead",
            style: xt(w.value),
            "aria-hidden": "true"
          }, [...R[0] || (R[0] = [
            B("span", { class: "pano-video-playhead-line" }, null, -1),
            B("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          B("input", {
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
        B("div", iP, [
          B("div", {
            class: "pano-video-time pano-video-time-end",
            style: xt(k.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          Fe(sn, {
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
          B("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            B("div", aP, [
              B("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: xt(x.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, sP)
            ]),
            Fe(sn, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, oP)
        ])
      ])
    ], 14, q2));
  }
}, cP = { class: "pano-floating-top" }, uP = ["data-selected", "data-view-count"], fP = ["data-view", "aria-pressed", "aria-label", "disabled"], dP = { class: "label" }, hP = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ae(), fe("div", cP, [
        B("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ae(!0), fe(Ue, null, St(e.buttons, (o) => _i((ae(), fe("button", {
            key: o.key,
            class: at(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            Fe(It, {
              icon: o.icon
            }, null, 8, ["icon"]),
            B("span", dP, tt(o.label), 1)
          ], 10, fP)), [
            [Bo, o.visible !== !1]
          ])), 128))
        ], 8, uP)
      ]);
    };
  }
};
function V0(e = "stickers") {
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
const pP = ["aria-label"], mP = { class: "pano-stage-column" }, gP = { class: "pano-stage-wrap" }, yP = {
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
    uiState: { type: Object, default: () => ({}) }
  },
  emits: ["close", "image-file-selected", "image-file-cancelled", "timeline"],
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    let a = "", c = !1, f = null;
    const d = /* @__PURE__ */ zt(null), b = /* @__PURE__ */ zt(null), g = /* @__PURE__ */ zt(null);
    function w() {
      var T, N;
      return ((N = (T = g.value) == null ? void 0 : T.getRefs) == null ? void 0 : N.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(T) {
      var N, X;
      return ((X = (N = b.value) == null ? void 0 : N.open) == null ? void 0 : X.call(N, T)) === !0;
    }
    function M(T) {
      o("image-file-selected", T);
    }
    function k(T) {
      o("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: w, openImagePicker: x });
    const _ = ft(() => r.readOnly === !0), F = ft(() => r.shellPreset || V0(r.type)), L = ft(() => {
      var N, X, U;
      const T = String((((N = r.uiState) == null ? void 0 : N.stageStatus) === "failed" ? (X = r.uiState) == null ? void 0 : X.stageStatusDetail : (U = r.uiState) == null ? void 0 : U.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = ft(() => {
      var N;
      const T = Array.isArray((N = F.value) == null ? void 0 : N.floatingButtons) ? F.value.floatingButtons.slice() : [];
      return _.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Me.fullscreen
      }), T;
    });
    function I() {
      const T = d.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((N) => N instanceof HTMLElement ? !N.hidden && N.tabIndex >= 0 && N.offsetParent !== null : !1) : [];
    }
    function z() {
      var X;
      const N = I()[0] || d.value;
      (X = N == null ? void 0 : N.focus) == null || X.call(N);
    }
    function O() {
      var T;
      f != null && f.isConnected && ((T = f.focus) == null || T.call(f)), f = null;
    }
    function R(T) {
      var N, X, U, q;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const Y = I();
          if (!Y.length) {
            T.preventDefault(), (X = (N = d.value) == null ? void 0 : N.focus) == null || X.call(N);
            return;
          }
          const ne = Y[0], J = Y[Y.length - 1], E = document.activeElement;
          if (T.shiftKey) {
            (E === ne || E === d.value || !((U = d.value) != null && U.contains(E))) && (T.preventDefault(), J.focus());
            return;
          }
          (E === J || !((q = d.value) != null && q.contains(E))) && (T.preventDefault(), ne.focus());
          return;
        }
        T.key === "Escape" && o("close");
      }
    }
    function G() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function ee() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function ve(T) {
      document.removeEventListener("keydown", R), T ? (f || (f = document.activeElement), G(), document.addEventListener("keydown", R), nf(() => {
        z();
      })) : (ee(), O());
    }
    return El(() => {
      ve(r.open);
    }), Ka(() => {
      ee(), document.removeEventListener("keydown", R), O();
    }), Ki(() => r.open, (T) => {
      ve(T);
    }), (T, N) => e.open ? (ae(), fe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: N[2] || (N[2] = Ct((X) => o("close"), ["self"]))
    }, [
      B("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        B("div", mP, [
          B("div", gP, [
            N[3] || (N[3] = B("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            N[4] || (N[4] = B("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            N[5] || (N[5] = B("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ae(), fe("div", yP, tt(L.value), 1)) : ct("", !0),
            N[6] || (N[6] = B("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              B("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Fe(mN, {
              ref_key: "paintOverlaysRef",
              ref: g
            }, null, 512),
            Fe(k0, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: M,
              onFileCancelled: k
            }, null, 512),
            _.value ? ct("", !0) : (ae(), fe(Ue, { key: 1 }, [
              Fe(X2, {
                buttons: e.uiState.toolButtons || F.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Fe(VM, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Fe(pN, {
                "paint-swatches": e.paintSwatches,
                panes: F.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Fe(lP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Fe(hP, {
              buttons: e.uiState.viewButtons || F.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Fe(TM, {
              buttons: e.uiState.floatingButtons || W.value,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
            Fe(_N, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Fe(W2, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Fe(BM, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Fe(U2, {
            model: e.uiState.timeline || {},
            onAction: N[0] || (N[0] = (X) => o("timeline", X))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ct("", !0) : (ae(), Tr(M2, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: N[1] || (N[1] = (X) => o("timeline", X))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, pP)
    ])) : ct("", !0);
  }
}, ur = "loading", Go = "ready", er = "failed";
function z0(e, t = "") {
  return e && (e.__panoLoadState = ur, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function j0(e, t = "") {
  return e && (e.__panoLoadState = Go, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function H0(e, t = "") {
  return e && (e.__panoLoadState = er, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Hu(e, t) {
  return e ? e.__panoLoadState === er ? er : typeof t == "function" && t(e) ? Go : ur : Go;
}
function Gu(e) {
  return Hu(e) === er;
}
function vP({ presented: e, background: t = Go, stickers: n = [] } = {}) {
  if (!e) return { status: ur, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === ur, a = r.includes(ur);
  if (o && a) return { status: ur, detail: "mixed" };
  if (o) return { status: ur, detail: "background" };
  if (a) return { status: ur, detail: "stickers" };
  const c = t === er, f = r.includes(er);
  return c && f ? { status: er, detail: "mixed" } : c ? { status: er, detail: "background" } : f ? { status: er, detail: "stickers" } : { status: Go, detail: "" };
}
const _P = "state_json", wP = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Zc = "sticker_image_1", xP = "external_image", Ns = "pano_sticker_input_images", SP = !0, Xs = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], br = Math.PI / 180, zi = 180 / Math.PI, Qc = 1, kP = "rgb(255, 221, 87)", MP = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, NP = 64, Kp = 40, eu = 16, PP = 0.45, Bp = 180, AP = 160, xl = 24, CP = 4, IP = 4, Ps = /* @__PURE__ */ new Map(), Up = /* @__PURE__ */ new Map(), vi = /* @__PURE__ */ new Map(), EP = 12, Qn = r0({
  app: Ar,
  api: Vt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Gu,
    markImageFailed: H0,
    markImageLoading: z0,
    markImageReady: j0
  }
}), OP = Qn.assetSource, FP = Qn.source, tu = Qn.uiImage, TP = Qn.invalidateUiImage, DP = Qn.resolvePreferredExactLinkedSource, nu = Qn.loadPreferredExactLinkedImage;
function As(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function LP(e) {
  return 1 - Math.pow(1 - e, 3);
}
function RP(e, t, n) {
  const r = Z((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function $P(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = vi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (vi.delete(t), vi.set(t, n), n);
}
function VP(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (vi.delete(n), vi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); vi.size > EP; ) {
      const o = vi.keys().next().value;
      if (!o) break;
      vi.delete(o);
    }
}
function zP(e) {
  return e * e * e;
}
function Vl(e, t, n) {
  return { x: e, y: t, z: n };
}
function Wp(e, t) {
  return Vl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Yp(e, t) {
  return Vl(e.x * t, e.y * t, e.z * t);
}
function ru(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function jP(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Vl(e.x / t, e.y / t, e.z / t);
}
function Cs(e) {
  return {
    yaw: Kt(Math.atan2(e.x, e.z) * zi),
    pitch: Z(Math.asin(Z(e.y, -1, 1)) * zi, -90, 90)
  };
}
function Ur(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, c = t[r].y, f = t[o].x, d = t[o].y;
    c > e.y != d > e.y && e.x < (f - a) * (e.y - c) / (d - c || 1e-6) + a && (n = !n);
  }
  return n;
}
function gi(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function iu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), f = r * r + o * o;
  if (f <= 1e-6) return gi(e, t);
  const d = Z((a * r + c * o) / f, 0, 1), b = Number(t.x || 0) + r * d, g = Number(t.y || 0) + o * d, w = Number(e.x || 0) - b, x = Number(e.y || 0) - g;
  return w * w + x * x;
}
function Jn(e, t, n) {
  return e + (t - e) * n;
}
function vr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Z(n, 0, 1)})`;
}
function HP(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Is = { fillStyle: "", url: "" };
function GP(e, t, n) {
  if (Is.url && Is.fillStyle === String(e || ""))
    return Is.url;
  const r = HP(`
<svg xmlns="http://www.w3.org/2000/svg" width="${xl}" height="${xl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Is = { fillStyle: String(e || ""), url: r }, r;
}
function qs(e, t, n = 0.015) {
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
function gn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function KP(e) {
  return Xs.some((t) => qs(e, t.color));
}
function ou(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = Z(Number(t), 0, 1), a = Z(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const c = Math.floor(r * 6), f = r * 6 - c, d = a * (1 - o), b = a * (1 - f * o), g = a * (1 - (1 - f) * o);
  switch (c % 6) {
    case 0:
      return { r: a, g, b: d };
    case 1:
      return { r: b, g: a, b: d };
    case 2:
      return { r: d, g: a, b: g };
    case 3:
      return { r: d, g: b, b: a };
    case 4:
      return { r: g, g: d, b: a };
    default:
      return { r: a, g: d, b };
  }
}
function au(e) {
  const t = Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let f = 0;
  c > 1e-6 && (o === t ? f = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? f = ((r - t) / c + 2) / 6 : f = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: f, s: d, v: o };
}
function bo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const G0 = "pano_suite.ui_settings.v1", K0 = "pano_suite.node_grid_visibility.v1";
let Mo = null, _r = null;
function Js(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function BP() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(G0)) || "").trim();
    if (!t) return Mo ? Js(Mo) : null;
    const n = JSON.parse(t), r = Js(n);
    return Mo = r, r;
  } catch {
    return Mo ? Js(Mo) : null;
  }
}
function UP(e) {
  var n;
  const t = Js(e);
  Mo = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(G0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function B0() {
  var e;
  if (_r && typeof _r == "object")
    return _r;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(K0)) || "").trim();
    if (!t)
      return _r = {}, _r;
    const n = JSON.parse(t);
    return _r = n && typeof n == "object" ? n : {}, _r;
  } catch {
    return _r = {}, _r;
  }
}
function WP(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = B0()[n];
  return typeof o == "boolean" ? o : !!t;
}
function YP(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = B0();
  r[n] = !!t, _r = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(K0, JSON.stringify(r));
  } catch {
  }
}
function XP(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Xp(e) {
  const { paintCount: t, maskCount: n } = XP(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function vo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Es(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function qP(e, t) {
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
function Di(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function JP(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function ZP(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function QP(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function eA(e, t, n = {}) {
  var fh;
  await P0(e, { tolerateOperationFailure: !0 }), Qn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = qP(e, t);
  await Ef();
  const f = Es(e, "output_preset"), d = Es(e, "coverage"), b = Es(e, "bg_color"), g = Es(e, _P), w = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return nu(
      e,
      i,
      () => de(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = w();
    return QP(i);
  }, M = (i = 2048) => {
    const s = f == null ? void 0 : f.value;
    return ZP(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : JP(s, i);
  }, k = t === "stickers" && e.__panoSceneStateV2 === !0, _ = (k ? Tg : Fg)(String((g == null ? void 0 : g.value) || ""), {
    outputPreset: M(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: Hn(d == null ? void 0 : d.value),
    sharedUiSettings: BP(),
    active: Vg(e)
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0, t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], s = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((u) => String((u == null ? void 0 : u.id) || "") === s) || i[0] || null;
  })() : null, L = F ? bd(F, !1) : { width: 220, height: 132 }, W = V0(t), I = /* @__PURE__ */ Ko({
    stageStatus: ur,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (W.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (W.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(W.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
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
      customColorCss: vr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: vr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: L.width,
      height: L.height,
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), z = document.createElement("div");
  document.body.appendChild(z);
  const O = ({ intent: i, file: s } = {}) => {
    if (Pr(s)) {
      if (i === "add") {
        Od(s);
        return;
      }
      i === "replace" && Hb(s);
    }
  }, R = ({ intent: i } = {}) => {
  }, G = cf(bP, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: W,
    paintSwatches: Xs.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: vr(i.color, 1)
    })),
    uiState: I,
    onClose: () => {
      ho();
    },
    onTimeline: (i) => $b(i),
    onImageFileSelected: O,
    onImageFileCancelled: R
  });
  let ee = null;
  try {
    ee = G.mount(z);
  } catch (i) {
    try {
      G.unmount();
    } catch {
    }
    throw z.remove(), i;
  }
  const ve = z.querySelector(".pano-modal-overlay"), T = z.querySelector(".pano-modal"), N = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), X = T == null ? void 0 : T.querySelector("[data-stage-background]"), U = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), q = ((fh = ee == null ? void 0 : ee.getPaintOverlayRefs) == null ? void 0 : fh.call(ee)) || {}, Y = q.cursor || null, ne = q.sizePreview || null, J = q.sizeSample || null;
  if (!ve || !T || !N || !X || !U || !Y || !ne || !J)
    throw G.unmount(), z.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const E = N.getContext("2d"), Le = T.querySelector("[data-side]"), H = T.querySelector("[data-video-element]"), Ne = T.querySelector(".pano-floating-right"), He = T.querySelector(".pano-floating-top"), nt = T.querySelector("[data-tool-rail]"), pt = T.querySelector("[data-frame-rail]"), rt = T.querySelector("[data-frame-roll-knob]"), Zt = T.querySelector("[data-paint-dock]"), Bn = T.querySelector(".pano-video-transport"), kt = T.querySelector("[data-selection-menu]"), Ut = T.querySelector("[data-tooltip]"), cn = T.querySelector("[data-camera-preview-host]"), $n = T.querySelector("[data-camera-preview-canvas]"), $ = T.querySelector("[data-paint-color-row]"), j = T.querySelector("[data-paint-color-pop]"), te = T.querySelector("[data-paint-color-sv]"), ye = T.querySelector("[data-paint-color-sv-cursor]"), me = T.querySelector("[data-paint-hue-strip]"), be = T.querySelector("[data-paint-hue-handle]");
  let we = 0, ke = 0;
  U == null || U.removeAttribute("data-stage-ready"), U == null || U.setAttribute("data-stage-loading-kind", "boot"), N.style.opacity = "1", X.style.opacity = "0", o && (Le == null || Le.remove(), T.classList.add("pano-modal-readonly"));
  const Se = () => {
    if (!p.customPaintSessionStart) return;
    if (qs(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (KP(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      jn(p.customPaintColor),
      ...p.customPaintHistory.filter((s) => !qs(s, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, ue = (i = !1) => {
    !j || j.hidden || (i ? Se() : p.customPaintSessionStart = null, j.hidden = !0, I.paintDock.colorPopOpen = !1);
  }, Re = () => {
    j && (j.hidden && (p.customPaintSessionStart = jn(p.customPaintColor)), j.hidden = !1, I.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Pi(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), ue(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Ye(), de()), (s = I.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (I.frameRail.aspectOpen = !1)));
  });
  const Ae = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, De = JSON.stringify(ap(_)), p = {
    mode: "pano",
    selectedId: Ae,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Hn(_.coverage),
    historyController: _M(80, { entries: [De], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Kr,
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
    paintEngine: bu(),
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
  }, Ee = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let it = null;
  t === "stickers" && (p.selectedId = null, _.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const We = /* @__PURE__ */ new Map(), st = /* @__PURE__ */ new Map(), Et = /* @__PURE__ */ new Map(), on = /* @__PURE__ */ new Map(), vt = document.createElement("canvas");
  vt.__panoFrameIdx = 0;
  const Oe = {
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
  }, Un = Ex({ onReady: () => de(), onFailed: () => de() });
  let Ht = { key: "", projection: null }, un = { key: null, sceneState: null }, Dr = null, Lr = null, Qi = null;
  const Ua = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, D = (i) => {
    const s = String(i || "default");
    N.style.cursor !== s && (N.style.cursor = s);
  }, ce = {
    timer: 0,
    target: null
  }, Ce = {
    active: !1,
    depth: 0
  }, Pe = {
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
  }, Ge = 9, $e = [];
  let Nt = 0;
  const wn = () => {
    var P, A;
    const i = (P = U == null ? void 0 : U.getBoundingClientRect) == null ? void 0 : P.call(U), s = (A = Ne == null ? void 0 : Ne.getBoundingClientRect) == null ? void 0 : A.call(Ne), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), u = s ? Math.max(0, Number(s.width || 0)) : 0, y = u > 0 ? u + 14 + 12 : 72, v = Math.max(280, Math.floor(l - y * 2)), S = p.fullscreen ? Math.min(1200, v) : v;
    I.videoTransport.shellMaxWidthPx = S;
  }, Wt = () => {
    Nt || (Nt = window.requestAnimationFrame(() => {
      Nt = 0, wn();
    }));
  }, Wn = (i) => {
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
    return !!I.videoTransport.hasAudio;
  }, mt = typeof ResizeObserver < "u" ? new ResizeObserver(() => Wt()) : null;
  mt == null || mt.observe(U), Ne && (mt == null || mt.observe(Ne)), $e.push(() => {
    var i;
    Nt && (window.cancelAnimationFrame(Nt), Nt = 0), (i = mt == null ? void 0 : mt.disconnect) == null || i.call(mt);
  }), Wt();
  const Rr = () => {
    Pe.thumbnailJobId += 1, Pe.thumbnailSrc = "", I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = Ge;
  }, Yo = async (i, s, l) => {
    const u = String(i || "").trim();
    if (!u) {
      Rr();
      return;
    }
    const h = $P(u);
    if (h) {
      Pe.thumbnailSrc = u, I.videoTransport.thumbnails = h.thumbnails, I.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    const m = ++Pe.thumbnailJobId;
    Pe.thumbnailSrc = u, I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = Ge;
    const y = document.createElement("video");
    y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous";
    const v = await new Promise((se) => {
      let he = !1;
      const oe = (xe) => {
        he || (he = !0, se(xe));
      };
      y.addEventListener("loadedmetadata", () => oe(!0), { once: !0 }), y.addEventListener("canplay", () => oe(!0), { once: !0 }), y.addEventListener("error", () => oe(!1), { once: !0 }), y.src = u, y.load();
    });
    if (Pe.thumbnailJobId !== m) return;
    const S = Number(y.videoWidth || 0), P = Number(y.videoHeight || 0);
    if (!v || S < 1 || P < 1) {
      Pe.thumbnailFailedSrcs.add(u);
      return;
    }
    const A = Math.max(0, Number(y.duration || s || 0)), C = document.createElement("canvas"), V = 46, K = Math.max(72, Math.round(S / P * V));
    C.width = K, C.height = V;
    const ie = C.getContext("2d");
    if (!ie) return;
    const Q = [], re = (se) => new Promise((he) => {
      let oe = !1;
      const xe = () => {
        oe || (oe = !0, he());
      };
      y.addEventListener("seeked", xe, { once: !0 }), y.addEventListener("error", xe, { once: !0 });
      try {
        y.currentTime = se;
      } catch {
        xe();
      }
    });
    for (let se = 0; se < Ge; se += 1) {
      if (Pe.thumbnailJobId !== m) return;
      const he = se / (Ge - 1), oe = A > 0 ? Math.max(0, Math.min(A - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), A * he)) : 0;
      if (await re(oe), Pe.thumbnailJobId !== m) return;
      ie.clearRect(0, 0, K, V), ie.drawImage(y, 0, 0, K, V), Q.push({
        id: `thumb-${se}`,
        src: C.toDataURL("image/jpeg", 0.72),
        time: oe,
        label: Xl(oe)
      });
    }
    Pe.thumbnailJobId === m && (I.videoTransport.thumbnails = Q, I.videoTransport.thumbnailCount = Q.length || Ge, VP(u, {
      thumbnails: Q,
      thumbnailCount: Q.length || Ge,
      duration: A,
      fps: l
    }));
  };
  $e.push(() => {
    Rr();
  });
  const Dt = p0({
    video: H instanceof HTMLVideoElement ? H : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    pageHidden: () => document.hidden,
    fps: Za,
    span: () => {
      if (k) return uc();
      const i = Math.round(Number(I.videoTransport.duration || 0) * Za());
      return H.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => k,
    onFrame: (i) => {
      k ? Tb(i) : si(), de({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      my() && (Oe.backgroundDirty = !0);
    },
    onChange: () => {
      si(), Mi(), de({ cause: "frame_view", localOnly: !0 });
    }
  });
  if ($e.push(() => Dt.dispose()), H instanceof HTMLVideoElement) {
    const i = () => {
      li(), de({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      si({
        hasAudio: I.videoTransport.hasAudio,
        muted: H.muted,
        volume: Number(H.volume ?? I.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const u = H.dataset.panoSrc;
      u && (Pe.failedSrcs.add(u), li(), de());
    };
    for (const [u, h] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      H.addEventListener(u, h), $e.push(() => H.removeEventListener(u, h));
  }
  function Cn() {
    I.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", u = i.attr === "data-mask-tool";
      i.active = s ? i.value === p.primaryTool : l ? i.key === p.paintTool : u ? i.key === p.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function $r(i) {
    return Ff(i == null ? void 0 : i.dataTransfer);
  }
  function Yn(i) {
    const s = !!i;
    Ce.active !== s && (Ce.active = s, U.classList.toggle("drop-active", s));
  }
  function Qt(i, s, l = p.viewFov, u = 140, h = 620) {
    const m = sw(p.viewYaw, i), y = s - p.viewPitch, v = l - p.viewFov, S = Math.hypot(m, y) + Math.abs(v) * 0.6, P = Math.round(Z(u + S * 2.2, u, h));
    p.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: P,
      startYaw: p.viewYaw,
      startPitch: p.viewPitch,
      startFov: p.viewFov,
      targetPitch: s,
      targetFov: l,
      deltaYaw: m
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, de();
  }
  Sy();
  function Yt() {
    return t === "stickers" ? ki() : _.shots;
  }
  function ki() {
    return k ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function xn(i) {
    return k && gt(i);
  }
  function Vr(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function Xt(i) {
    return xn(i) ? wf(i, p.frame) : i;
  }
  function ir(i, s) {
    xn(i) ? Dg(i, p.frame, s) : Object.assign(i, s);
  }
  function hn() {
    const i = _.painting || (_.painting = Oo(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function U0(i = "paint") {
    var h, m;
    const s = Array.isArray((m = (h = _.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], u = /* @__PURE__ */ new Set();
    for (const y of s) {
      const v = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !v || u.has(v) || (u.add(v), l.push(v));
    }
    return l;
  }
  function W0() {
    return U0("paint");
  }
  function Xo(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function qo(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function an(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Jo(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const u = l.match(/^(paint|mask):(.*)$/);
    return u ? { layerKind: u[1] === "mask" ? "mask" : "paint", actionGroupId: String(u[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function zl() {
    var s;
    let i = -1;
    for (const l of ki())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of hn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = _.painting) == null ? void 0 : s.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function $f(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const u = hn();
    let h = u.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return h ? s != null && (h.z_index = Math.max(0, Number(s || 0))) : (h = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? zl() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, u.push(h)), h;
  }
  function Y0(i) {
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
  function X0() {
    const i = new Set(W0()), l = hn().filter((u) => i.has(String((u == null ? void 0 : u.actionGroupId) || "")));
    return i.forEach((u) => {
      l.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === u) || l.push({
        id: u,
        type: "strokeGroup",
        actionGroupId: u,
        z_index: zl(),
        locked: !1,
        frame: null
      });
    }), l.sort((u, h) => Number((u == null ? void 0 : u.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), _.painting.groups = l, l;
  }
  function q0(i, s, l) {
    var Q;
    const u = (re) => (Number(re || 0) % 1 + 1) % 1, h = [];
    for (const re of l) {
      const se = re == null ? void 0 : re.geometry, he = (se == null ? void 0 : se.geometryKind) === "lasso_fill" ? se == null ? void 0 : se.points : (se == null ? void 0 : se.processedPoints) || (se == null ? void 0 : se.rawPoints) || (se == null ? void 0 : se.points) || [];
      Array.isArray(he) && h.push(...he);
    }
    if (!h.length) return null;
    const m = u(((Q = h[0]) == null ? void 0 : Q.u) || 0);
    let y = 0, v = 0;
    h.forEach((re) => {
      const se = u((re == null ? void 0 : re.u) || 0);
      y += m + Xn(se, m), v += Number((re == null ? void 0 : re.v) || 0);
    });
    const S = (y / h.length % 1 + 1) % 1;
    let P = 1 / 0, A = -1 / 0, C = 1 / 0, V = -1 / 0;
    h.forEach((re) => {
      const se = u((re == null ? void 0 : re.u) || 0), he = Xn(se, S);
      P = Math.min(P, he), A = Math.max(A, he);
      const oe = Number((re == null ? void 0 : re.v) || 0);
      C = Math.min(C, oe), V = Math.max(V, oe);
    });
    const K = l.reduce((re, se) => {
      const he = hi(String((se == null ? void 0 : se.toolKind) || "pen")), oe = Fn[he] || Fn[Kr], xe = Math.max(1, Number((se == null ? void 0 : se.size) || 10)) * Math.max(0.1, Number((oe == null ? void 0 : oe.sizeScale) ?? 1));
      return Math.max(re, xe);
    }, 0), ie = Math.max(35e-4, K / 2048);
    return {
      centerUv: { u: ((S + (P + A) * 0.5) % 1 + 1) % 1, v: Z((C + V) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (A - P) * 0.5 + ie,
      halfH: (V - C) * 0.5 + ie,
      uvPad: ie
    };
  }
  function ai(i, s, l) {
    const u = String(i || "").trim();
    if (!u) return null;
    const h = hn().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === u);
    if (!h) return null;
    const m = l || or(u, s);
    return h.frame = q0(u, s, m), h.frame;
  }
  function eo() {
    var u;
    const i = ki().map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = X0().map((h) => ({
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
  function jl(i = !0) {
    var l, u, h, m, y, v;
    const s = eo().filter((S) => S.type === "strokeGroup").map((S) => String(S.actionGroupId || "")).filter((S) => !!S);
    if (i) {
      const S = String(((u = (l = p.interaction) == null ? void 0 : l.stroke) == null ? void 0 : u.actionGroupId) || "").trim(), P = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), A = String(((v = (y = p.interaction) == null ? void 0 : y.stroke) == null ? void 0 : v.toolKind) || "").trim();
      S && P === "paint" && A !== "eraser" && !s.includes(S) && s.push(S);
    }
    return s;
  }
  function Hl(i = !0) {
    var v, S, P, A, C, V;
    const s = eo();
    if (!i) return s;
    const l = String(((S = (v = p.interaction) == null ? void 0 : v.stroke) == null ? void 0 : S.actionGroupId) || "").trim(), u = String(((A = (P = p.interaction) == null ? void 0 : P.stroke) == null ? void 0 : A.layerKind) || "").trim(), h = String(((V = (C = p.interaction) == null ? void 0 : C.stroke) == null ? void 0 : V.toolKind) || "").trim();
    if (!l || u !== "paint" || h === "eraser" || s.some((K) => K.type === "strokeGroup" && String(K.actionGroupId || "") === l))
      return s;
    const m = Pt();
    let y = s.reduce((K, ie) => Math.max(K, Number((ie == null ? void 0 : ie.z_index) || 0)), -1) + 1;
    return m && en(m) && String(m.actionGroupId || "") === l && (y = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: y,
        item: null
      }
    ].sort((K, ie) => Number((K == null ? void 0 : K.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0));
  }
  function J0() {
    return hn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => no(Xo("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function Z0() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => to(qo((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Vf(i = p.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, u = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || u;
    }
    return !1;
  }
  function Q0() {
    var s, l, u, h;
    let i = null;
    try {
      const m = jl(), y = ((h = (u = (l = (s = p.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : u.displayPaint) == null ? void 0 : h.canvas) || null;
      y && (i = {
        source: y,
        revision: `${ra()}:${Gl()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Gl() {
    var h, m, y, v, S, P, A;
    const i = p.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Vf(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const C = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, V = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), K = ((y = C == null ? void 0 : C.rawPoints) == null ? void 0 : y.length) ?? ((v = C == null ? void 0 : C.points) == null ? void 0 : v.length) ?? 0, ie = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${V || "paint"}_${s}_live${ie}_${K}_${p.livePaintInteractionRevision}`;
    }
    const l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.actionGroupId) || ""), u = String(((P = i == null ? void 0 : i.item) == null ? void 0 : P.rasterObjectId) || ((A = i == null ? void 0 : i.item) == null ? void 0 : A.id) || "");
    return `_${s}_${l || u || "active"}_${p.livePaintInteractionRevision}`;
  }
  function Kl() {
    const i = Array.isArray(_.shots) ? _.shots : [], s = Array.isArray(_.stickers) ? _.stickers : [];
    return [...i, ...s];
  }
  function Vn(i) {
    return !!i && Array.isArray(_.shots) && _.shots.includes(i);
  }
  function gt(i) {
    return !!i && Array.isArray(_.stickers) && _.stickers.includes(i);
  }
  function In() {
    var i;
    return Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : [];
  }
  function to(i) {
    const s = an(i);
    if (!s) return null;
    const l = In().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: qo(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function pn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = an(i.rasterObjectId || i.id || "");
    return !!s && !!to(qo(s));
  }
  function no(i) {
    const s = Jo(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const u = hn().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === l || String((h == null ? void 0 : h.actionGroupId) || "") === l);
    return u ? {
      ...u,
      id: Xo("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function en(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!no(Xo(l, s));
  }
  function or(i, s = null) {
    const l = Jo(i, s), u = String(l.actionGroupId || "").trim();
    return u ? uo(l.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === u) : [];
  }
  function ey(i, s = "paint") {
    const l = String(i || "").trim(), h = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${p.mode}:${na()}`;
    if (p.mode === "frame") {
      const m = ze(), y = String((m == null ? void 0 : m.id) || ""), v = m ? nn(m) : null;
      return `${h}:frame:${y}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((v == null ? void 0 : v.x) || 0))}:${Math.round(Number((v == null ? void 0 : v.y) || 0))}:${Math.round(Number((v == null ? void 0 : v.w) || 0))}:${Math.round(Number((v == null ? void 0 : v.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((N == null ? void 0 : N.width) || 0))}:${Math.round(Number((N == null ? void 0 : N.height) || 0))}`;
  }
  function Wa(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: Z(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function Xn(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function Bl(i, s = null, l = null) {
    var P;
    const u = Jo(i, s), h = Array.isArray(l) ? l : or(u.actionGroupId, u.layerKind), m = [];
    if (h.forEach((A) => {
      const C = (A == null ? void 0 : A.geometry) || null, V = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(V) && m.push(...V);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((P = m[0]) == null ? void 0 : P.u) || 0);
    let v = 0, S = 0;
    return m.forEach((A) => {
      v += y + Xn(Number((A == null ? void 0 : A.u) || 0), y), S += Number((A == null ? void 0 : A.v) || 0);
    }), {
      u: (v / m.length % 1 + 1) % 1,
      v: Z(S / m.length, 0, 1)
    };
  }
  function Ya(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = Xn(Number(i.u || 0), h), v = Number(i.v || 0) - m, S = Number(u || 0) * br, P = Math.cos(S), A = Math.sin(S), C = Math.max(0.02, Number(l || 1)), V = (y * P - v * A) * C, K = (y * A + v * P) * C;
    return {
      ...i,
      u: ((h + V) % 1 + 1) % 1,
      v: Z(m + K, 0, 1)
    };
  }
  function zf(i, s, l, u = null, h = null, m = null) {
    const y = Jo(i, h), v = String(y.actionGroupId || "").trim();
    if (!v) return !1;
    const S = uo(y.layerKind), P = Array.isArray(u) ? new Map(u.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let A = !1;
    if (S.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== v) return;
      const V = (P == null ? void 0 : P.get(String((C == null ? void 0 : C.id) || ""))) || C, K = C == null ? void 0 : C.geometry, ie = V == null ? void 0 : V.geometry;
      !K || !ie || (Array.isArray(ie.points) && (K.points = ie.points.map((Q) => Wa(Q, s, l)), A = !0), Array.isArray(ie.rawPoints) && (K.rawPoints = ie.rawPoints.map((Q) => Wa(Q, s, l)), A = !0), Array.isArray(ie.processedPoints) && (K.processedPoints = ie.processedPoints.map((Q) => Wa(Q, s, l)), A = !0));
    }), A && m) {
      const C = hn().find((V) => String((V == null ? void 0 : V.actionGroupId) || "") === v);
      C && (C.frame = null);
    }
    return A;
  }
  function jf(i, s = 1, l = 0, u = null, h = null, m = null) {
    const y = Jo(i, h), v = String(y.actionGroupId || "").trim();
    if (!v) return !1;
    const S = uo(y.layerKind), P = Array.isArray(u) ? u : or(v, y.layerKind), A = Array.isArray(P) ? new Map(P.map((K) => [String((K == null ? void 0 : K.id) || ""), K])) : null, C = (m == null ? void 0 : m.centerUv) ?? Bl(v, y.layerKind, P);
    let V = !1;
    if (S.forEach((K) => {
      if (String((K == null ? void 0 : K.actionGroupId) || "").trim() !== v) return;
      const ie = (A == null ? void 0 : A.get(String((K == null ? void 0 : K.id) || ""))) || K, Q = K == null ? void 0 : K.geometry, re = ie == null ? void 0 : ie.geometry;
      !Q || !re || (Array.isArray(re.points) && (Q.points = re.points.map((se) => Ya(se, C, s, l)), V = !0), Array.isArray(re.rawPoints) && (Q.rawPoints = re.rawPoints.map((se) => Ya(se, C, s, l)), V = !0), Array.isArray(re.processedPoints) && (Q.processedPoints = re.processedPoints.map((se) => Ya(se, C, s, l)), V = !0));
    }), V && m) {
      const K = hn().find((ie) => String((ie == null ? void 0 : ie.actionGroupId) || "") === v);
      K && (K.frame = null);
    }
    return V;
  }
  function Hf(i, s, l, u = null) {
    const h = an(i);
    if (!h) return !1;
    const m = In().find((A) => String((A == null ? void 0 : A.id) || "").trim() === h);
    if (!m) return !1;
    const y = u && typeof u == "object" ? u : m, v = (y == null ? void 0 : y.transform) || {}, S = Number(v.du || 0) + Number(s || 0), P = Z(Number(v.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = S, m.transform.dv = P, !0;
  }
  function ty(i, s = 1, l = null) {
    const u = an(i);
    if (!u) return !1;
    const h = In().find((P) => String((P == null ? void 0 : P.id) || "").trim() === u);
    if (!h) return !1;
    const m = l && typeof l == "object" ? l : h, y = (m == null ? void 0 : m.transform) || {}, v = Math.max(0.01, Number(y.scale || 1)), S = Z(v * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = S, !0;
  }
  function Pt() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const s = no(i);
    if (s) return s;
    const l = to(i);
    return l || (t === "cutout" ? Kl().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null : Yt().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null);
  }
  function ar() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((u) => {
      const h = String(u || "").trim();
      if (!h || l.has(h)) return;
      l.add(h);
      const m = h === String(p.selectedId || "") ? Pt() : no(h) || to(h) || (t === "cutout" ? Kl().find((y) => String((y == null ? void 0 : y.id) || "") === h) : Yt().find((y) => String((y == null ? void 0 : y.id) || "") === h));
      m && s.push(m);
    }), s;
  }
  function Xa(i = null) {
    const s = Array.isArray(i) ? i : ar();
    if (!s || s.length < 2) return null;
    const l = s.map((P) => qt(P)).filter((P) => (P == null ? void 0 : P.visible) && Array.isArray(P.corners) && P.corners.length);
    if (!l.length) return null;
    const u = l.flatMap((P) => P.corners.map((A) => Number((A == null ? void 0 : A.x) || 0))), h = l.flatMap((P) => P.corners.map((A) => Number((A == null ? void 0 : A.y) || 0))), m = Math.min(...u), y = Math.max(...u), v = Math.min(...h), S = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (v + S) * 0.5 },
      corners: [
        { x: m, y: v },
        { x: y, y: v },
        { x: y, y: S },
        { x: m, y: S }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: v, a: { x: m, y: v }, b: { x: y, y: v } },
        { edge: "right", x: y, y: (v + S) * 0.5, a: { x: y, y: v }, b: { x: y, y: S } },
        { edge: "bottom", x: (m + y) * 0.5, y: S, a: { x: y, y: S }, b: { x: m, y: S } },
        { edge: "left", x: m, y: (v + S) * 0.5, a: { x: m, y: S }, b: { x: m, y: v } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: v },
      rotateHandle: { x: (m + y) * 0.5, y: v - 30 }
    };
  }
  function Gf(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(p.selectedIds) && p.selectedIds.includes(s);
  }
  function qa() {
    const i = Pt();
    return i ? en(i) || pn(i) ? "stroke" : Vn(i) ? "frame" : "image" : null;
  }
  function Sn(i) {
    if (!i || typeof i != "object") return !1;
    if (en(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = hn().find((u) => String((u == null ? void 0 : u.actionGroupId) || (u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (pn(i)) {
      const s = an(i.rasterObjectId || i.id || ""), l = In().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function Ul(i = null) {
    const s = Array.isArray(i) ? i : ar();
    return s.length > 0 && s.every((l) => Sn(l));
  }
  function ny(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (en(i)) {
      const u = String(i.actionGroupId || i.id || "").trim(), h = hn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    if (pn(i)) {
      const u = an(i.rasterObjectId || i.id || ""), h = In().find((m) => String((m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function ry() {
    if (r) return;
    const i = ar();
    if (!i.length) return;
    const s = !Ul(i);
    let l = !1;
    i.forEach((u) => {
      ny(u, s) && (l = !0);
    }), l && (ot(), lt(), Ye(), Ve(), de());
  }
  function pr(i) {
    p.inspectCamera = !1, Ee.selection = null, p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && gt(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && Vn(i) ? _.active.selected_shot_id = i.id || null : i ? Vn(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function iy(i, s = null) {
    const l = [], u = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((y) => {
      const v = String((y == null ? void 0 : y.id) || "").trim();
      !v || u.has(v) || (u.add(v), l.push(v));
    }), p.selectedIds = l, p.inspectCamera = !1, Ee.selection = null;
    const h = String(s || "").trim();
    p.selectedId = h && l.includes(h) ? h : l[l.length - 1] || null;
    const m = Pt();
    _.active.selected_sticker_id = m && gt(m) && m.id || null, m && Vn(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function Kf() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, u) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${u + 1}`)
    })), s = (Array.isArray(_.stickers) ? _.stickers : []).map((l, u) => {
      var m, y;
      const h = tn(l) ? String(l.id || Zc) : String(((y = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : y.name) || l.asset_id || l.id || `Image ${u + 1}`);
      return {
        kind: "image",
        item: l,
        label: h
      };
    });
    return [...i, ...s];
  }
  function oy(i) {
    return i === "frame" ? Me.camera : i === "stroke" ? Me.paintbrush_vertical_tool : Me.image;
  }
  function Wl(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: oy(i.kind)
    };
  }
  function Ja() {
    return zl();
  }
  function tn(i) {
    var s;
    return !i || typeof i != "object" ? !1 : k ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === Zc || String(i.source_kind || "") === xP;
  }
  function ro(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function ay(i) {
    return tn(i) && ro(i) ? Gg : 1;
  }
  function sy() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function ly() {
    return String(sy() || "") === "lasso_fill";
  }
  function cy() {
    if (r) return;
    const i = Pt();
    !i || !tn(i) || (i.visible = ro(i), Gt(), ot(), lt(), Ve(), Ye(), de());
  }
  function uy() {
    if (r || t !== "stickers") return;
    const i = Pt();
    if (!i || !tn(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = ql(Ns, () => {
      de();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = ci(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), ot(), lt(), Ve(), Ye(), de();
  }
  function fy(i) {
    if (!i || !tn(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, u = ql(Ns, () => {
      de();
    });
    return u && (u.complete || u.naturalWidth || u.width) && (l.vFOV_deg = ci(
      l.hFOV_deg,
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    )), l;
  }
  function dy() {
    const i = Pt();
    if (!i || !tn(i)) return !1;
    const s = fy(i);
    if (!s) return !1;
    const l = (u, h) => Math.abs(Number(u || 0) - Number(h || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Bf(i) {
    return Qn.uiList(e, i);
  }
  function Yl(i) {
    return Qn.uiValue(e, i);
  }
  function Uf() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return ll(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function hy() {
    const { metaKey: i } = Uf(), s = Yl(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function Wf(i) {
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
  function Xl(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), u = s % 60;
    return `${l}:${String(u).padStart(2, "0")}`;
  }
  function Za() {
    return k ? _.timeline.fps : Pe.metaFps || 1e3;
  }
  function si(i = {}) {
    const s = Number(i.duration ?? I.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? I.videoTransport.fps ?? 24)), u = Dt.frame / Za(), h = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!I.videoTransport.ready, m = Dt.playing, y = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!I.videoTransport.visible, v = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(H instanceof HTMLVideoElement ? H.muted : I.videoTransport.muted), S = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : H instanceof HTMLVideoElement ? H.volume : I.videoTransport.volume
    ), P = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Wn(H), A = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!I.videoTransport.loop;
    Object.assign(I.videoTransport, {
      ready: h,
      playing: m,
      visible: y,
      loop: A,
      currentTime: Number.isFinite(u) ? u : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, u / s * 100)) : 0,
      currentTimeLabel: Xl(u),
      durationLabel: Xl(s),
      frameCount: Math.max(0, Number(i.frameCount ?? I.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: P,
      muted: v,
      volume: Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : I.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? I.videoTransport.thumbnailCount ?? Ge))
    });
  }
  function Yf() {
    return !!(H instanceof HTMLVideoElement && !k && H.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function Xf() {
    if (!(H instanceof HTMLVideoElement) || !I.videoTransport.hasAudio) return;
    const i = !H.muted;
    H.muted = i, !i && Number(H.volume || 0) <= 0 && (H.volume = Math.max(0.01, Number(I.videoTransport.volume || 1))), si({
      hasAudio: I.videoTransport.hasAudio,
      muted: H.muted,
      volume: Number(H.volume ?? I.videoTransport.volume ?? 1)
    });
  }
  function py() {
    si({
      visible: Yf()
    });
  }
  function my() {
    if (!(H instanceof HTMLVideoElement) || Number(H.videoWidth || 0) < 1 || Number(H.videoHeight || 0) < 1) return !1;
    const i = Number(H.videoWidth || 0), s = Number(H.videoHeight || 0);
    (vt.width !== i || vt.height !== s) && (vt.width = i, vt.height = s);
    const l = vt.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(H, 0, 0, i, s), vt.__panoFrameIdx = Number(vt.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function qf() {
    return !Dt.showsVideo && Number(vt.width || 0) > 0 && Number(vt.height || 0) > 0 && Number(vt.__panoFrameIdx || 0) > 0 ? vt : H instanceof HTMLVideoElement && Number(H.videoWidth || 0) > 0 && Number(H.videoHeight || 0) > 0 && Number(H.readyState || 0) >= 2 ? H : null;
  }
  function Jf() {
    vt.__panoFrameIdx = 0, Oe.backgroundDirty = !0;
  }
  function li() {
    if (!(H instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Uf(), s = Mr(e, "background") && Bf(i)[0] || null, l = FP(s), u = [l, Qn.linkedVideoFile(e, ld())].filter(Boolean), h = u.find((C) => !Pe.failedSrcs.has(C)) || "";
    Pe.videoFailed = !h && u.length > 0;
    const m = h && h === l ? hy() : null;
    Pe.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const y = Math.max(1, Number((m == null ? void 0 : m.fps) || (k ? _.timeline.fps : 24))), v = H.dataset.panoSrc === h && Number.isFinite(H.duration) ? H.duration : 0, S = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / y : v)), P = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(S * y))), A = !!(m != null && m.has_audio) || Wn(H);
    return h && H.dataset.panoSrc !== h ? (H.pause(), Jf(), H.dataset.panoSrc = h, H.loop = !k && !!I.videoTransport.loop, H.muted = !!I.videoTransport.muted, H.volume = Math.max(0, Math.min(1, Number(I.videoTransport.volume ?? 1))), H.src = h, H.load(), Dt.setSource(!0), k || Dt.seek(0)) : !h && H.getAttribute("src") && (H.pause(), H.removeAttribute("src"), delete H.dataset.panoSrc, H.load(), Jf(), Rr(), Dt.setSource(!1)), k || (H.loop = !!I.videoTransport.loop), h && !k && Pe.thumbnailSrc !== h && !Pe.thumbnailFailedSrcs.has(h) && Yo(h, S, y), h || Rr(), si({
      ready: !!h,
      visible: !!h && Yf(),
      duration: S,
      frameCount: P,
      fps: y,
      hasAudio: A,
      loop: !!H.loop,
      muted: !!H.muted,
      volume: Number(H.volume ?? I.videoTransport.volume ?? 1),
      thumbnailCount: I.videoTransport.thumbnailCount
    }), h || null;
  }
  function Zf(i, s = null) {
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
  function ql(i, s = null) {
    return tu(e, i, We, s || (() => de()));
  }
  function Jl(i = null) {
    return Mr(e, "external-sticker") ? ql(Ns, i) : null;
  }
  function ci(i, s, l) {
    const u = Math.max(1, Number(s || 1)), h = Math.max(1, Number(l || 1)), m = Z(Number(i || 30), 0.1, 179) * br, y = 2 * Math.atan(Math.tan(m * 0.5) * (h / u));
    return Z(y * zi, 0.1, 179);
  }
  function gy(i) {
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
      const y = Number(m.yaw_deg), v = Number(m.pitch_deg), S = Number(m.roll_deg), P = Number(m.hFOV_deg);
      if (![y, v, S, P].every((K) => Number.isFinite(K))) return null;
      let A = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(A, -0) && (A = 0);
      const C = {
        yaw_deg: A,
        pitch_deg: Z(v, -89.9, 89.9),
        roll_deg: S,
        hFOV_deg: Z(P, 0.1, 179)
      }, V = Number(l.source_aspect);
      return Number.isFinite(V) && V > 0 && (C.source_aspect = V), C;
    } catch {
      return null;
    }
  }
  function Qf(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Wi(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(s) ? s : 0),
        pitch_deg: Z(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: Z(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function yy(i) {
    var v;
    if (!i || typeof i != "object") return Qf(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let y = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const S = Z(h, 0.1, 179) * br, P = Z(m, 0.1, 179) * br, A = Math.tan(P * 0.5);
      if (Math.abs(A) > 1e-6) {
        const C = Math.tan(S * 0.5) / A;
        Number.isFinite(C) && C > 0 && (y = C);
      }
    }
    if (i != null && i.asset_id && ((v = _ == null ? void 0 : _.assets) != null && v[i.asset_id])) {
      const S = _.assets[i.asset_id], P = Number((S == null ? void 0 : S.w) || 0), A = Number((S == null ? void 0 : S.h) || 0);
      P > 0 && A > 0 && (y = P / A);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Kt(Number.isFinite(s) ? s : 0),
        pitch_deg: Z(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: Z(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function by(i) {
    return Qn.linkedValue(e, i);
  }
  function vy(i, s, l) {
    const u = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : gy(s);
    if (u) {
      const y = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || u.source_aspect || 1), v = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(u.yaw_deg || 0),
        pitch_deg: Number(u.pitch_deg || 0),
        hFOV_deg: Number(u.hFOV_deg || 30),
        vFOV_deg: ci(u.hFOV_deg, y, v),
        rot_deg: Number(u.roll_deg || 0)
      };
    }
    const h = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: ci(30, h, m),
      rot_deg: 0
    };
  }
  function _y() {
    const i = Jl(() => {
      Qr(e, "image-loaded");
    }), s = Mr(e, "external-sticker") ? Zf(Yl("pano_sticker_input_pose"), null) : null;
    return d0(_, f0(e, { pose: s, image: i }));
  }
  function wy() {
    var v;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((S) => String((S == null ? void 0 : S.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((v = e.getInputLink(i)) == null ? void 0 : v.id) ?? null : null, l = Jl(() => {
      Qr(e, "image-loaded");
    }), u = Zf(Yl("pano_sticker_input_pose"), null), h = by("sticker_state"), m = Qn.externalStateHash(e, h), y = s == null ? null : vy(u, h, l);
    return u0(_, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: y,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function ed(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? _y() : wy();
    if (s.changed) {
      const l = _.stickers.find(tn);
      _.stickers = s.state.stickers, _.active = s.state.active, l && p.selectedId === l.id && !_.stickers.some((u) => u.id === l.id) && (p.selectedId = null, p.selectedIds = []), lt(), Ve(), Ye();
    }
    de();
  }
  function Zo(i = {}) {
    const l = i.preservePanelValues !== !1 ? Xt(Pt()) : null;
    l && (p.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Xr(l)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function xy() {
    if (t !== "cutout") return;
    const i = ze();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function Zl() {
    if (t !== "cutout") return;
    const i = ze();
    yo(I.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Me.camera : Me.plus_circle
    });
  }
  function td() {
    const i = t === "cutout" && p.mode === "frame", s = !i && !!p.showGrid;
    yo(I.floatingButtons, "action", "reset-view", {
      disabled: r || i
    }), yo(I.floatingButtons, "action", "toggle-grid", {
      icon: s ? Me.eye : Me.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function zr() {
    var l;
    const i = !!ze();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, I.viewButtons.forEach((u) => {
      const h = u.key === p.mode;
      u.pressed = h ? "true" : "false", u.visible = !(u.key === "frame" && t !== "cutout"), u.disabled = u.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && p.mode === "frame" ? ze() : null;
    I.frameRail.visible = !!s, I.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.visible = !!s && !r && s.locked !== !0, I.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), I.frameRollKnob.displayValue = bo(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((l = p.interaction) == null ? void 0 : l.kind) === "roll_frame", I.frameRollKnob.armed = !!s && p.altModifier === !0, I.frameRail.rollKnob = I.frameRollKnob, I.frameRail.aspectLabel = s ? Xr(s) : "", I.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((u) => ({
      value: u,
      label: u,
      active: !!s && String(Xr(s)) === u
    })), s || (I.frameRail.aspectOpen = !1), I.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!ze(), t === "cutout" && I.cameraPreview && (I.cameraPreview.visible = p.mode !== "frame", I.cameraPreview.expanded = !!p.outputPreviewExpanded, I.cameraPreview.settled = I.cameraPreview.settled === !0 && Oe.pendingStableLayoutFrames <= 0 && Oe.hasPresentedFrame), td(), zd() ? _t(p.pointerPos) : D(p.mode === "pano" ? "grab" : "default");
  }
  function Sy() {
    const s = cd({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function nd() {
    return Kg({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, N.width, N.height);
  }
  function Ql() {
    const i = `${p.viewYaw}|${p.viewPitch}|${p.viewFov}|${N.width}|${N.height}`;
    return Ht.key !== i && (Ht = { key: i, projection: Bg(nd(), N.width, N.height) }), Ht.projection;
  }
  function Qo(i) {
    const s = Ql().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function ec(i, s) {
    return Ql().ray(i, s);
  }
  function ui() {
    const i = N.width, s = N.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const v = s, S = v * l;
      return { x: (i - S) * 0.5, y: 0, w: S, h: v };
    }
    const h = i, m = h / l;
    return { x: 0, y: (s - m) * 0.5, w: h, h: m };
  }
  function rd(i) {
    var y;
    if (i && typeof i == "object" && (tn(i) || i.external === !0))
      return Jl(() => {
        Qr(e, "image-loaded");
      });
    const s = k ? ea(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = We.get(s);
    if (l) return l;
    const u = k ? Rg(i.source) : (y = _.assets) == null ? void 0 : y[s], h = OP(u);
    if (!h) return null;
    const m = new Image();
    return z0(m, h), m.onload = () => {
      j0(m, h), de();
    }, m.onerror = () => {
      H0(m, h), de();
    }, m.src = h, We.set(s, m), m;
  }
  function ea(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function id(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const u = st.get(l);
    if (u)
      return u.complete || u.width || u.naturalWidth, u;
    const h = new Image();
    return h.onload = () => {
      typeof s == "function" && s();
    }, h.src = l, st.set(l, h), h;
  }
  function ky(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Et.get(s);
    if (l) return l.ready ? l : null;
    const u = id(i, () => {
      const A = Et.get(s);
      A && (A.ready = !1), de({ localOnly: !0 });
    });
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const h = Number(u.naturalWidth || u.width || 0), m = Number(u.naturalHeight || u.height || 0);
    if (h < 1 || m < 1) return null;
    const y = document.createElement("canvas");
    y.width = h, y.height = m;
    const v = y.getContext("2d", { willReadFrequently: !0 });
    if (!v) return null;
    v.clearRect(0, 0, h, m), v.drawImage(u, 0, 0, h, m);
    const S = v.getImageData(0, 0, h, m).data, P = { canvas: y, width: h, height: m, alpha: S, ready: !0 };
    return Et.set(s, P), P;
  }
  function My(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = Xn(Number(i.u || 0), h), v = Number(i.v || 0) - m, S = Math.max(0.02, Number(l || 1)), P = Number(u || 0) * br, A = Math.cos(P), C = Math.sin(P), V = y / S, K = v / S, ie = V * A + K * C, Q = -V * C + K * A;
    return {
      ...i,
      u: ((h + ie) % 1 + 1) % 1,
      v: m + Q
    };
  }
  function Ny(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const u = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(u.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(u.dv || 0)
    }, y = My(
      m,
      h,
      Number(u.scale || 1),
      Number(u.rot_deg || 0)
    ), v = Number(l.u1 || 0) - Number(l.u0 || 0), S = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(v > 1e-6) || !(S > 1e-6)) return null;
    const P = Xn(Number(y.u || 0), Number(l.u0 || 0)) / v, A = (Number(y.v || 0) - Number(l.v0 || 0)) / S;
    if (P < 0 || P > 1 || A < 0 || A > 1) return 0;
    const C = ky(i);
    if (!C) return null;
    const V = Z(Math.floor(P * C.width), 0, C.width - 1), K = Z(Math.floor(A * C.height), 0, C.height - 1);
    return Number(C.alpha[(K * C.width + V) * 4 + 3] || 0);
  }
  function od(i, s, l, u = null) {
    if (!(s != null && s.visible) || !Ur(l, s.corners)) return !1;
    const h = u || lr(l, performance.now()), m = Ny(i, h);
    return m === null ? !0 : m > 8;
  }
  function Py() {
    var u, h, m, y, v, S, P, A;
    const i = ((h = (u = p.paintEngine) == null ? void 0 : u.getErpTarget) == null ? void 0 : h.call(u, jl(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((v = (y = i == null ? void 0 : i.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : v.width) || 2048)), l = Math.max(1, Number(((S = i == null ? void 0 : i.descriptor) == null ? void 0 : S.height) || ((A = (P = i == null ? void 0 : i.displayPaint) == null ? void 0 : P.canvas) == null ? void 0 : A.height) || 1024));
    return { width: s, height: l };
  }
  function Ay() {
    var K, ie, Q;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = zn(), u = `${Gl()}:${l.width}:${l.height}`;
    if (((K = p._activePaintEraserPreviewInfo) == null ? void 0 : K.cacheKey) === u)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = gn(s), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const re = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = lc(re, h.targetSpace, !0);
    }
    const y = ta(l.width, l.height, { readback: !0 });
    if (!Sd(y, h, { w: l.width, h: l.height })) return null;
    const v = ((Q = (ie = y.ctx) == null ? void 0 : ie.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Q.data) || null;
    if (!v) return null;
    let S = l.width, P = l.height, A = -1, C = -1;
    for (let re = 0; re < l.height; re += 1)
      for (let se = 0; se < l.width; se += 1)
        v[(re * l.width + se) * 4 + 3] <= 8 || (se < S && (S = se), re < P && (P = re), se > A && (A = se), re > C && (C = re));
    if (A < S || C < P)
      return p._activePaintEraserPreviewInfo = { cacheKey: u, value: null }, null;
    const V = {
      surface: y,
      bounds: { minX: S, minY: P, maxX: A, maxY: C },
      key: `${u}:${S}:${P}:${A}:${C}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: u, value: V }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), V;
  }
  function io() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function Cy(i, s, l) {
    var u, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((u = i.item) != null && u.bbox)) {
      const m = i.item.bbox, y = ((h = i.item) == null ? void 0 : h.transform) || {}, v = Number(m.u0 || 0) + Number(y.du || 0), S = Number(m.u1 || 0) + Number(y.du || 0), P = Number(m.v0 || 0) + Number(y.dv || 0), A = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((v % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(Z(P, 0, 1) * l),
        maxY: Math.ceil(Z(A, 0, 1) * l),
        wraps: S - v >= 1 || v < 0 || S > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = or(i.actionGroupId, "paint"), y = ai(i.actionGroupId, "paint", m);
      if (!y) return null;
      const v = y.centerUv.u - y.halfW, S = y.centerUv.u + y.halfW, P = y.centerUv.v - y.halfH, A = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((v % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(Z(P, 0, 1) * l),
        maxY: Math.ceil(Z(A, 0, 1) * l),
        wraps: S - v >= 1 || v < 0 || S > 1
      };
    }
    return null;
  }
  function Iy(i, s, l) {
    if (!i || !s) return !1;
    const u = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: l - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], h = u(i), m = u(s);
    return h.some((y) => m.some((v) => !(y.maxX < v.minX || v.maxX < y.minX || y.maxY < v.minY || v.maxY < y.minY)));
  }
  function Ey(i, s, l) {
    var xe, je, Be, et, ge, le, pe;
    if (!i || !s || !((xe = l == null ? void 0 : l.surface) != null && xe.canvas) || s.type !== "rasterObject") return i;
    const u = Number(i.width || l.surface.canvas.width || 0), h = Number(i.height || l.surface.canvas.height || 0);
    if (u < 1 || h < 1) return i;
    const m = Cy(s, u, h);
    if (m && !Iy(m, l.bounds, u)) return i;
    const y = String(((je = s.item) == null ? void 0 : je.id) || s.id || ""), v = ((Be = s.item) == null ? void 0 : Be.transform) || {}, S = `${l.key}:${y}:${u}:${h}:${Number(v.du || 0).toFixed(6)}:${Number(v.dv || 0).toFixed(6)}:${Number(v.rot_deg || 0).toFixed(3)}:${Number(v.scale || 1).toFixed(4)}`, P = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (P.has(S)) return P.get(S);
    const A = Z(Math.floor(Number(((et = l.bounds) == null ? void 0 : et.minX) || 0)), 0, Math.max(0, u - 1)), C = Z(Math.floor(Number(((ge = l.bounds) == null ? void 0 : ge.minY) || 0)), 0, Math.max(0, h - 1)), V = Z(Math.ceil(Number(((le = l.bounds) == null ? void 0 : le.maxX) || 0)), A, Math.max(0, u - 1)), K = Z(Math.ceil(Number(((pe = l.bounds) == null ? void 0 : pe.maxY) || 0)), C, Math.max(0, h - 1)), ie = Math.max(1, V - A + 1), Q = Math.max(1, K - C + 1), re = ta(u, h, { readback: !0 });
    re.ctx.clearRect(0, 0, u, h), re.ctx.drawImage(i, 0, 0);
    const se = re.ctx.getImageData(A, C, ie, Q);
    re.ctx.save(), re.ctx.globalCompositeOperation = "destination-out", re.ctx.drawImage(l.surface.canvas, 0, 0), re.ctx.restore();
    const he = re.ctx.getImageData(A, C, ie, Q);
    let oe = !1;
    for (let _e = 0; _e < ie * Q; _e += 1) {
      const Te = se.data[_e * 4 + 3], Ke = he.data[_e * 4 + 3];
      if (Te > Ke) {
        oe = !0;
        break;
      }
    }
    return oe ? (P.size > 64 && P.clear(), P.set(S, re.canvas), re.canvas) : (P.set(S, i), i);
  }
  function ad(i, s = null) {
    const l = an((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), u = (i == null ? void 0 : i.bbox) || null;
    if (!l || !u) return null;
    const h = id(i, s);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: y } = Py(), v = (i == null ? void 0 : i.transform) || {}, S = [
      l,
      m,
      y,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
      v.du,
      v.dv,
      v.rot_deg,
      v.scale,
      na()
    ].join(":"), P = on.get(S);
    if (P) return P;
    on.size > 64 && on.clear();
    const A = document.createElement("canvas");
    A.width = m, A.height = y;
    const C = A.getContext("2d");
    if (!C) return null;
    const V = Number(u.u0 || 0) * m, K = Number(u.v0 || 0) * y, ie = Math.max(1, (Number(u.u1 || 0) - Number(u.u0 || 0)) * m), Q = Math.max(1, (Number(u.v1 || 0) - Number(u.v0 || 0)) * y), re = V + ie * 0.5 + Number(v.du || 0) * m, se = K + Q * 0.5 + Number(v.dv || 0) * y, he = Number(v.rot_deg || 0) * br, oe = Math.max(0.01, Number(v.scale || 1));
    for (const xe of [-m, 0, m])
      C.save(), C.translate(re + xe, se), C.rotate(he), C.scale(oe, oe), C.drawImage(h, -ie * 0.5, -Q * 0.5, ie, Q), C.restore();
    return on.set(S, A), A;
  }
  async function tc(i, s) {
    const l = await new Promise((v) => i.toBlob(v, "image/png")), u = new FormData();
    u.append("image", l, s), u.append("type", "input"), u.append("subfolder", "panorama_stickers"), u.append("overwrite", "1");
    const h = await Vt.fetchApi("/upload/image", { method: "POST", body: u });
    if (!h || h.status !== 200) throw new Error(`upload failed (${h == null ? void 0 : h.status})`);
    const m = await h.json(), y = String((m == null ? void 0 : m.name) || "").trim();
    if (!y) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: y,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let Qa = null, es = !1;
  function Oy() {
    const i = Xp(_.painting), { width: s, height: l } = ia();
    return wx(_.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function sd() {
    const i = String(e.id ?? "0"), s = Ps.get(i);
    if (es && s) return s;
    const l = (async () => {
      var m, y, v, S, P, A, C, V, K, ie, Q, re;
      const u = ra(), h = Xp(_.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, Qa = u, On());
        return;
      }
      if (Qa !== u && !es) {
        es = !0;
        try {
          as();
          const se = jl(!1), he = ((y = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, se)) || null, oe = ((v = he == null ? void 0 : he.displayPaint) == null ? void 0 : v.canvas) || null, xe = ((S = he == null ? void 0 : he.committedMask) == null ? void 0 : S.canvas) || null, je = Math.max(1, Number(((P = he == null ? void 0 : he.descriptor) == null ? void 0 : P.width) || (oe == null ? void 0 : oe.width) || (xe == null ? void 0 : xe.width) || 2048)), Be = Math.max(1, Number(((A = he == null ? void 0 : he.descriptor) == null ? void 0 : A.height) || (oe == null ? void 0 : oe.height) || (xe == null ? void 0 : xe.height) || 1024));
          (!oe && h.totalPaintCount > 0 || !xe && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((C = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== je || Number(((V = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : V.height) || 0) !== Be) && (p._paintLayerSyncBlankSurface = ta(je, Be)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, je, Be));
          const et = oe || h.totalPaintCount > 0 && ((K = p._paintLayerSyncBlankSurface) == null ? void 0 : K.canvas) || null, ge = xe || h.totalMaskCount > 0 && ((ie = p._paintLayerSyncBlankSurface) == null ? void 0 : ie.canvas) || null;
          if (!et && !ge) return;
          let le = null, pe = null;
          const _e = [];
          if (h.totalPaintCount > 0) {
            le = await tc(et, `pano_paint_${i}.png`);
            for (const Te of se) {
              const Ke = String(Te || "").trim();
              if (!Ke) continue;
              const Ie = ((re = (Q = p.paintEngine) == null ? void 0 : Q.getGroupDisplayCanvas) == null ? void 0 : re.call(Q, Ke)) || null;
              if (!Ie) continue;
              const ut = Ke.replace(/[^a-zA-Z0-9_-]+/g, "_"), Xe = await tc(Ie, `pano_group_${i}_${ut}.png`);
              Xe && _e.push({
                id: Ke,
                actionGroupId: Ke,
                image: Xe
              });
            }
          }
          h.totalMaskCount > 0 && (pe = await tc(ge, `pano_mask_${i}.png`)), u === ra() && (_.painting_layer = {
            paint: le,
            mask: pe,
            groups: _e,
            revision: u
          }, Qa = u, On());
        } catch (se) {
          throw se;
        } finally {
          es = !1;
        }
      }
    })();
    return Ps.set(i, l), l.finally(() => {
      Ps.get(i) === l && Ps.delete(i);
    }), l;
  }
  function nc() {
    if (t === "cutout") {
      const h = qf();
      if (h) return h;
      const m = nu(
        e,
        ["erp_image", "bg_erp"],
        () => de(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !Gu(m) ? m : tu(e, "pano_input_images", We, () => de()) || m || null;
    }
    const i = qf();
    if (i) return i;
    const s = Mr(e, "background") ? tu(e, "pano_input_images", We, () => de()) : null;
    if (s && !Gu(s)) return s;
    if (H instanceof HTMLVideoElement && H.dataset.panoSrc) return H;
    const l = ld();
    return nu(e, l, () => de(), `background:${l.join("|")}`) || s || null;
  }
  function ld() {
    if (t === "cutout") return ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((u) => String((u == null ? void 0 : u.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function rc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Fy() {
    if (Un.failed) return { status: er, detail: "renderer" };
    if (!Un.ready) return { status: ur, detail: "boot" };
    let i = Go;
    const s = [];
    if (p.showPanorama) {
      const l = nc();
      i = Pe.videoFailed ? er : Hu(l, rc);
    }
    if (p.showObjects)
      for (const l of ki()) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const u = rd(l);
        s.push(Hu(u, rc));
      }
    return vP({
      presented: Oe.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function oo() {
    const i = new Set(
      (_.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(_.assets || {}).forEach((s) => {
      i.has(s) || (delete _.assets[s], We.delete(s));
    });
  }
  function ic(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(Z(i.y, -1, 1))
    };
  }
  function oc(i, s = null) {
    const { lon: l, lat: u } = ic(i), h = ui();
    let m = h.x + (l / (2 * Math.PI) + 0.5) * h.w;
    const y = h.y + (0.5 - u / Math.PI) * h.h;
    if (s !== null) {
      for (; m - s > h.w / 2; ) m -= h.w;
      for (; m - s < -h.w / 2; ) m += h.w;
    }
    return { x: m, y, z: 1 };
  }
  function ts(i) {
    const s = Xt(i), l = Uo(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), u = Math.tan(Z(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * br), h = Math.tan(Z(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * br);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: u,
      tanY: h
    };
  }
  function fi(i, s, l) {
    return jP(Wp(Wp(i.centerDir, Yp(i.right, s)), Yp(i.up, l)));
  }
  function cd(i) {
    const s = ts(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u, v: h }) => fi(s, u * s.tanX, h * s.tanY));
  }
  function ud(i, s, l) {
    const u = ts(i), h = (s * 2 - 1) * u.tanX, m = (1 - l * 2) * u.tanY;
    return fi(u, h, m);
  }
  function fd(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: Z((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Ty(i) {
    var S, P, A, C;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, u = Math.max(0.01, Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.scale) || 1)), h = Number(((P = i == null ? void 0 : i.transform) == null ? void 0 : P.rot_deg) || 0), m = Number(((A = i == null ? void 0 : i.transform) == null ? void 0 : A.du) || 0), y = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((V) => Wa(Ya(V, l, u, h), m, y));
  }
  function Dy(i) {
    const s = an((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, u = (i == null ? void 0 : i.bbox) || {}, h = `${s}:${p.mode}:${na()}:${u.u0}:${u.v0}:${u.u1}:${u.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (p.mode === "frame") {
      const m = ze(), y = m ? nn(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((N == null ? void 0 : N.width) || 0))}:${Math.round(Number((N == null ? void 0 : N.height) || 0))}`;
  }
  function Ly(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = Vn(i) ? "frame" : gt(i) ? "sticker" : "item", u = Xt(i), h = [
      l,
      s,
      p.mode,
      Number((u == null ? void 0 : u.yaw_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.pitch_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.hFOV_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.vFOV_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.rot_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.roll_deg) || 0).toFixed(4),
      Xr(u),
      xn(i) && Vi(i.clip, p.frame)
    ].join(":");
    if (p.mode === "frame") {
      const m = ze(), y = m ? nn(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((N == null ? void 0 : N.width) || 0))}:${Math.round(Number((N == null ? void 0 : N.height) || 0))}`;
  }
  function dd() {
    var i, s;
    return ((s = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function Ry() {
    return dd() ? `${vd()}:mask_display` : "";
  }
  function hd(i) {
    if (!p.showMask) return i;
    const s = dd();
    if (!s) return i;
    const l = Ry(), u = i.reduce((y, v) => Math.max(y, Number((v == null ? void 0 : v.zIndex) || 0)), -1), h = (Array.isArray(_.stickers) ? _.stickers : []).reduce((y, v) => Math.max(y, Number((v == null ? void 0 : v.z_index) || 0)), -1), m = Math.max(u, h);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function $y() {
    var u, h;
    const i = Hl(!0), s = Ay(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const v = ((h = (u = p.paintEngine) == null ? void 0 : u.getGroupDisplayCanvas) == null ? void 0 : h.call(u, y)) || null;
        if (!v) continue;
        l.push({
          id: `paint_group:${y}`,
          source: v,
          revision: `${vd()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, v = an((y == null ? void 0 : y.id) || m.id || "");
        if (!v) continue;
        const S = ad(y, () => de());
        if (!S) continue;
        const P = Ey(S, m, s), A = (y == null ? void 0 : y.transform) || {};
        l.push({
          id: `raster:${v}`,
          source: P,
          revision: [
            ra(),
            (s == null ? void 0 : s.key) || "",
            v,
            Number(A.du || 0).toFixed(6),
            Number(A.dv || 0).toFixed(6),
            Number(A.rot_deg || 0).toFixed(3),
            Number(A.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return hd(l);
  }
  function Vy() {
    return (p.showObjects ? $y() : hd([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function ns() {
    return Dr || (Dr = zy()), Dr;
  }
  function zy() {
    const i = nc(), s = Vy(), l = { ..._.assets };
    for (const v of k ? [] : _.stickers) {
      const S = String((v == null ? void 0 : v.asset_id) || "");
      S && !l[S] && We.has(S) && (l[S] = { type: "comfy_image", filename: S });
    }
    const u = k ? _.stickers.map((v) => Vr(v) ? { ...v, source: { kind: "file", filename: ea(v) } } : v) : _.stickers, h = JSON.stringify([u, Object.keys(l)]);
    un.key !== h && (un = { key: h, sceneState: Ho({ ..._, stickers: u, assets: l, painting: null }) });
    const m = p.showObjects ? Ug(un.sceneState, p.frame, _.stickers, {
      media: (v) => {
        const S = rd(v);
        return S ? { media: S, revision: Wf(S) } : null;
      },
      paintLayers: s
    }) : s.map((v) => ({ kind: "erp", ...v }));
    return { background: p.showPanorama && rc(i) ? { media: i, revision: Wf(i), coverage: Hn(_.coverage) } : null, layers: m };
  }
  function jy() {
    if (!Oe.backgroundDirty && Oe.backgroundWasVisible) return;
    const { background: i, layers: s } = ns(), l = X.width, u = X.height, h = Un.render({
      width: l,
      height: u,
      camera: nd(),
      background: i,
      layers: s
    }), m = X.getContext("2d");
    m.clearRect(0, 0, l, u), !i && !s.length ? (m.fillStyle = "#070707", m.fillRect(0, 0, l, u)) : h && m.drawImage(h.canvas, h.x, h.y, h.width, h.height, 0, 0, l, u), Oe.backgroundWasVisible = !!h, Oe.backgroundDirty = !1, Qi = null;
  }
  function pd(i, s, l, u) {
    const { background: h, layers: m } = ns();
    if (!h && !m.length) return !1;
    const y = Un.render({ width: s.w, height: s.h, camera: js(l), background: h, layers: m, owner: u });
    return y ? (i.drawImage(y.canvas, y.x, y.y, y.width, y.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function Hy(i) {
    const s = ns(), l = JSON.stringify([i, X.width, X.height, up(s)]);
    if (l === Qi) return;
    const u = Un.renderUnwrap({ width: i.w, height: i.h, ...s }), h = X.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, X.width, X.height), u && h.drawImage(u.canvas, u.x, u.y, u.width, u.height, i.x, i.y, i.w, i.h), Qi = u ? l : null, Oe.backgroundWasVisible = !1;
  }
  function Gy(i = !1) {
    const s = N.width, l = N.height, u = ui();
    if (E.globalAlpha = 1, E.lineWidth = 1, i || E.clearRect(0, 0, s, l), as(), Hy(u), p.showGrid && !p.fullscreen) {
      E.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = u.x + u.w * m / 16;
        E.beginPath(), E.moveTo(y, u.y), E.lineTo(y, u.y + u.h), E.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = u.y + u.h * m / 8;
        E.beginPath(), E.moveTo(u.x, y), E.lineTo(u.x + u.w, y), E.stroke();
      }
      E.strokeStyle = "rgba(250, 250, 250, 0.86)", E.lineWidth = 1.2, E.beginPath(), E.moveTo(u.x, u.y + u.h / 2), E.lineTo(u.x + u.w, u.y + u.h / 2), E.stroke(), E.fillStyle = "rgba(250, 250, 250, 0.42)", E.font = "500 11px Geist, sans-serif", E.textAlign = "center";
      const h = u.y + u.h * 0.57;
      E.fillText("Left", u.x + u.w * 0.25, h), E.fillText("Front", u.x + u.w * 0.5, h), E.fillText("Right", u.x + u.w * 0.75, h), E.fillText("Back", u.x + 38, h), E.fillText("Back", u.x + u.w - 38, h);
    }
  }
  function md(i, s, l = 1) {
    let u = !1;
    E.strokeStyle = s, E.lineWidth = l, E.beginPath();
    for (const h of i) {
      const m = Qo(h);
      if (!m) {
        u = !1;
        continue;
      }
      u ? E.lineTo(m.x, m.y) : (E.moveTo(m.x, m.y), u = !0);
    }
    E.stroke();
  }
  function Ky(i = !1) {
    const s = N.width, l = N.height;
    if (i || E.clearRect(0, 0, s, l), as(), jy(), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push(Rn(h, y));
        md(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push(Rn(y, h));
        md(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const u = [
        { name: "Left", dir: Rn(-90, 0) },
        { name: "Front", dir: Rn(0, 0) },
        { name: "Right", dir: Rn(90, 0) },
        { name: "Back", dir: Rn(180, 0) }
      ];
      E.fillStyle = "rgba(250, 250, 250, 0.42)", E.font = "500 11px Geist, sans-serif", E.textAlign = "center", u.forEach((h) => {
        const m = Qo(h.dir);
        m && E.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function By(i, s = null, l = null, u = null) {
    if (p.mode === "frame") {
      const h = s || ze();
      if (!h) return [];
      const m = l || nn(h);
      return xb(i, h, m);
    }
    return kd(i, u);
  }
  function rs(i, s = null, l = null, u = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const y = kd([i], h);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = ao(i);
    return m ? jr(m, s, l, u) : null;
  }
  function Uy(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), u = or(l, i.layerKind), h = ai(l, i.layerKind, u), m = (h == null ? void 0 : h.centerUv) || Bl(l, i.layerKind, u), y = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, v = [], S = p.mode === "frame" ? ze() : null, P = S ? nn(S) : null;
    for (const oe of u) {
      const xe = (oe == null ? void 0 : oe.geometry) || null, je = (xe == null ? void 0 : xe.geometryKind) === "lasso_fill" ? xe == null ? void 0 : xe.points : (xe == null ? void 0 : xe.processedPoints) || (xe == null ? void 0 : xe.rawPoints) || (xe == null ? void 0 : xe.points) || [], Be = By(je, S, P, y).filter((le) => Number.isFinite(le == null ? void 0 : le.x) && Number.isFinite(le == null ? void 0 : le.y));
      if (!Be.length) continue;
      const et = hi(String((oe == null ? void 0 : oe.toolKind) || "pen")), ge = Fn[et] || Fn[Kr];
      v.push({
        points: Be,
        closed: String((xe == null ? void 0 : xe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((oe == null ? void 0 : oe.size) || 10) * Math.max(0.1, Number((ge == null ? void 0 : ge.sizeScale) ?? 1)) + 10),
        layerKind: String((oe == null ? void 0 : oe.layerKind) || i.layerKind || "paint")
      });
    }
    const A = rs(m, null, S, P, y);
    if (!A) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, oe), oe;
    }
    const V = Y0(h).map((oe) => rs(oe, A.x, S, P, y)).filter((oe) => Number.isFinite(oe == null ? void 0 : oe.x) && Number.isFinite(oe == null ? void 0 : oe.y)).map((oe) => ({ x: Number(oe.x || 0), y: Number(oe.y || 0) }));
    if (V.length < 4) {
      const oe = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, oe), oe;
    }
    const K = (oe, xe) => ({
      x: (Number((oe == null ? void 0 : oe.x) || 0) + Number((xe == null ? void 0 : xe.x) || 0)) * 0.5,
      y: (Number((oe == null ? void 0 : oe.y) || 0) + Number((xe == null ? void 0 : xe.y) || 0)) * 0.5,
      a: oe,
      b: xe
    }), ie = K(V[0], V[1]), Q = K(V[1], V[2]), re = K(V[2], V[3]), se = K(V[3], V[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(A.x || 0), y: Number(A.y || 0) },
      corners: V,
      edgeMidpoints: [
        { edge: "top", ...ie },
        { edge: "right", ...Q },
        { edge: "bottom", ...re },
        { edge: "left", ...se }
      ],
      rotateStemBase: { x: ie.x, y: ie.y },
      rotateHandle: { x: ie.x, y: ie.y - 30 },
      strokePaths: v,
      visible: !0
    };
    return p._strokeGeomCache.set(s, he), he;
  }
  function Wy(i, s) {
    const l = p.mode === "frame" ? ze() : null, u = l ? nn(l) : null, h = fd(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, y = rs(h, null, l, u, m), S = Ty(i).map((V) => rs(V, (y == null ? void 0 : y.x) ?? null, l, u, m)).filter((V) => Number.isFinite(V == null ? void 0 : V.x) && Number.isFinite(V == null ? void 0 : V.y));
    if (!Array.isArray(S) || S.length < 4) {
      const V = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(s, V), V;
    }
    const P = S.slice(0, 4).map((V) => ({ x: Number((V == null ? void 0 : V.x) || 0), y: Number((V == null ? void 0 : V.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: P.reduce((V, K) => V + Number(K.x || 0), 0) / P.length,
        y: P.reduce((V, K) => V + Number(K.y || 0), 0) / P.length
      },
      corners: P,
      visible: !0
    };
    return p._strokeGeomCache.set(s, C), C;
  }
  function jr(i, s = null, l = null, u = null, h = {}) {
    if (p.mode === "frame") {
      const A = l || ze(), C = u || nn(A);
      if (!A || !C) return null;
      const V = A ? oa(A, i) : null;
      return V ? {
        x: Number(C.x || 0) + Number(V.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(V.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return oc(i, s);
    const m = 1e-4, y = Ql().project(i, m);
    if (!Number.isFinite(y.z) || y.z <= m && !(h != null && h.clipBehind)) return null;
    const v = N.width, S = N.height, P = Math.max(v, S) * 2;
    return {
      x: Z(y.x, -P, v + P),
      y: Z(y.y, -P, S + P),
      z: Math.max(y.z, m),
      rawZ: y.z,
      clipped: y.z <= m
    };
  }
  function Yy(i, s = []) {
    if (p.mode !== "pano" || gt(i)) return 1;
    const l = s.map((u) => Number((u == null ? void 0 : u.rawZ) ?? (u == null ? void 0 : u.z))).filter((u) => Number.isFinite(u));
    return l.length ? RP(0.035, 0.2, Math.min(...l)) : 1;
  }
  function Xy(i) {
    if (xn(i) && !Vi(i.clip, p.frame)) return { visible: !1 };
    const s = Xt(i), l = Rn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), u = p.mode === "frame" ? ze() : null, h = u ? nn(u) : null, m = p.mode === "pano" && (gt(i) || Vn(i)), y = m ? { clipBehind: !0 } : null, v = jr(l, null, u, h, y);
    if (!v) return { visible: !1 };
    const S = ts(i), A = cd(i).map((pe) => jr(pe, v.x, u, h, y)).filter((pe) => Number.isFinite(pe == null ? void 0 : pe.x) && Number.isFinite(pe == null ? void 0 : pe.y));
    if (A.length < 4) return { visible: !1 };
    const C = fi(S, 0, S.tanY), V = fi(S, 0, S.tanY + Math.max(S.tanY * 0.43, 0.053)), K = jr(C, v.x, u, h, y);
    if (!K) return { visible: !1 };
    const ie = jr(V, (K == null ? void 0 : K.x) ?? v.x, u, h, y), Q = ((ie == null ? void 0 : ie.x) ?? K.x) - K.x, re = ((ie == null ? void 0 : ie.y) ?? K.y) - K.y, se = Math.hypot(Q, re) || 1, he = {
      x: K.x + Q / se * 30,
      y: K.y + re / se * 30
    }, oe = jr(fi(S, 0, S.tanY), v.x, u, h, y), xe = jr(fi(S, S.tanX, 0), v.x, u, h, y), je = jr(fi(S, 0, -S.tanY), v.x, u, h, y), Be = jr(fi(S, -S.tanX, 0), v.x, u, h, y);
    if (!oe || !xe || !je || !Be) return { visible: !1 };
    const et = [
      v,
      ...A,
      K,
      ie,
      oe,
      xe,
      je,
      Be
    ];
    if (m && !et.some((pe) => Number((pe == null ? void 0 : pe.rawZ) ?? (pe == null ? void 0 : pe.z)) > 1e-4)) return { visible: !1 };
    const ge = Yy(i, et), le = [
      {
        edge: "top",
        x: oe.x,
        y: oe.y,
        a: { x: A[0].x, y: A[0].y },
        b: { x: A[1].x, y: A[1].y }
      },
      {
        edge: "right",
        x: xe.x,
        y: xe.y,
        a: { x: A[1].x, y: A[1].y },
        b: { x: A[2].x, y: A[2].y }
      },
      {
        edge: "bottom",
        x: je.x,
        y: je.y,
        a: { x: A[2].x, y: A[2].y },
        b: { x: A[3].x, y: A[3].y }
      },
      {
        edge: "left",
        x: Be.x,
        y: Be.y,
        a: { x: A[3].x, y: A[3].y },
        b: { x: A[0].x, y: A[0].y }
      }
    ];
    return {
      center: { x: v.x, y: v.y },
      corners: A.map((pe) => ({ x: pe.x, y: pe.y })),
      edgeMidpoints: le,
      rotateStemBase: { x: K.x, y: K.y },
      rotateHandle: he,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ge,
      visible: !0
    };
  }
  function qt(i) {
    if (en(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = ey(h, i.layerKind), y = p._strokeGeomCache.get(m);
      return y || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Uy(i, m));
    }
    if (pn(i)) {
      const h = Dy(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Wy(i, h));
    }
    const s = Ly(i), l = p._strokeGeomCache.get(s);
    if (l) return l;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const u = Xy(i);
    return p._strokeGeomCache.set(s, u), u;
  }
  function is(i, s, l, u = null) {
    const h = [];
    for (let m = 0; m <= l; m += 1) {
      const y = m / l;
      let v = 0, S = 0;
      s === 0 ? (v = y, S = 0) : s === 1 ? (v = 1, S = y) : s === 2 ? (v = 1 - y, S = 1) : (v = 0, S = 1 - y);
      const P = ud(i, v, S), A = p.mode === "unwrap" ? oc(P, u) : Qo(P);
      A && h.push(A);
    }
    return h;
  }
  function qy(i, s) {
    const l = Xt(i), u = Rn(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), h = p.mode === "unwrap" ? oc(u) : null, m = h ? h.x : null, y = p.mode === "pano" ? 28 : 20, v = [
      is(i, 0, y, m),
      is(i, 1, y, m),
      is(i, 2, y, m),
      is(i, 3, y, m)
    ];
    Cf(E, v, { selected: s });
  }
  function Jy() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], s = [...Array.isArray(_.stickers) ? _.stickers : []].sort((l, u) => Number(l.z_index || 0) - Number(u.z_index || 0));
    return [...i, ...s];
  }
  function ac() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Array.isArray(_.stickers) ? _.stickers : []].sort((l, u) => Number(u.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function os(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function gd(i, s, l) {
    const u = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (u.length < 4) return;
    const h = Z(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = E.globalAlpha;
    E.globalAlpha = m * h;
    const y = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", v = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", S = s ? 3.2 : 2.6;
    os(E, u), E.fillStyle = v, E.fill(), E.strokeStyle = y, E.lineWidth = S, E.stroke(), E.save(), E.strokeStyle = y, E.lineWidth = s ? 3.2 : 2.6, E.lineCap = "round";
    const P = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (u[0].x + u[1].x) * 0.5, y: (u[0].y + u[1].y) * 0.5 },
      { edge: "right", x: (u[1].x + u[2].x) * 0.5, y: (u[1].y + u[2].y) * 0.5 },
      { edge: "bottom", x: (u[2].x + u[3].x) * 0.5, y: (u[2].y + u[3].y) * 0.5 },
      { edge: "left", x: (u[3].x + u[0].x) * 0.5, y: (u[3].y + u[0].y) * 0.5 }
    ], A = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = s ? 12 : 9;
    P.forEach((V) => {
      const ie = P.find((he) => (he == null ? void 0 : he.edge) === A[V == null ? void 0 : V.edge]) || {
        x: (u[0].x + u[1].x + u[2].x + u[3].x) * 0.25,
        y: (u[0].y + u[1].y + u[2].y + u[3].y) * 0.25
      }, Q = ie.x - V.x, re = ie.y - V.y, se = Math.hypot(Q, re) || 1;
      E.beginPath(), E.moveTo(V.x, V.y), E.lineTo(V.x + Q / se * C, V.y + re / se * C), E.stroke();
    }), E.restore(), E.globalAlpha = m;
  }
  function Zy(i, s, l, u) {
    const h = Z(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (Vn(i)) {
      gd(s, l, u);
      return;
    }
    if (gt(i)) {
      const y = E.globalAlpha;
      E.globalAlpha = y * ay(i) * h, p.mode === "frame" ? (E.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : u ? "rgba(255, 89, 89, 0.72)" : "#71717a", E.lineWidth = l ? 2 : 1, os(E, s.corners), E.stroke()) : qy(i, l), E.globalAlpha = y;
      return;
    }
    const m = E.globalAlpha;
    E.globalAlpha = m * h, E.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : u ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", os(E, s.corners), E.fill(), E.strokeStyle = l ? "rgba(255, 255, 255, 1)" : u ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", E.lineWidth = l ? 2.8 : 1.9, os(E, s.corners), E.stroke(), E.globalAlpha = m;
  }
  function yd(i, s, l) {
    if (gt(i)) {
      M0(E, s, { accent: l });
      return;
    }
    E.fillStyle = l, s.corners.forEach((u) => {
      E.beginPath(), E.arc(u.x, u.y, 6.5, 0, Math.PI * 2), E.fill();
    }), Vn(i) && (E.strokeStyle = l, E.lineCap = "round", E.lineWidth = 4, s.edgeMidpoints.forEach((u) => {
      var A, C, V, K;
      const h = (((A = u.b) == null ? void 0 : A.x) ?? u.x) - (((C = u.a) == null ? void 0 : C.x) ?? u.x), m = (((V = u.b) == null ? void 0 : V.y) ?? u.y) - (((K = u.a) == null ? void 0 : K.y) ?? u.y), y = Math.hypot(h, m) || 1, v = h / y, S = m / y, P = 10;
      E.beginPath(), E.moveTo(u.x - v * P, u.y - S * P), E.lineTo(u.x + v * P, u.y + S * P), E.stroke();
    }), E.lineCap = "butt"), en(i) || (E.strokeStyle = "rgba(250, 250, 250, 0.9)", E.lineWidth = 1.8, E.beginPath(), E.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), E.lineTo(s.rotateHandle.x, s.rotateHandle.y), E.stroke(), E.fillStyle = l, E.beginPath(), E.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), E.fill());
  }
  function Qy() {
    var m;
    const i = p.mode === "frame" ? [] : ar(), s = i.length > 1, l = t === "cutout" ? Jy() : Yt(), u = l.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${Vn(y) ? "frame" : Number((y == null ? void 0 : y.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== l || p._sortedItemsCache.orderKey !== u) && (p._sortedItemsCache = {
      src: l,
      orderKey: u,
      sorted: [...l]
    });
    const h = p._sortedItemsCache.sorted;
    for (const y of h) {
      const v = p.mode !== "frame" && !s && Gf(y);
      if (p.mode === "frame" && !v || !p.showObjects && !Vn(y)) continue;
      const S = gt(y), P = Vn(y), A = Sn(y);
      if (!S && !P || xn(y) && !Vi(y.clip, p.frame)) continue;
      const C = qt(y);
      if (t !== "stickers" && !C.visible)
        continue;
      const V = Z(Number((C == null ? void 0 : C.visibilityAlpha) ?? 1), 0, 1);
      if (V <= 0.01) continue;
      const K = P && t === "cutout" && p.mode === "pano" ? Z(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (E.save(), E.globalAlpha *= K, Zy(y, C, v, A), v && C.visible) {
        const ie = A ? "#ff4d4f" : S && tn(y) ? "#f59e0b" : "#0070f3", Q = E.globalAlpha;
        E.globalAlpha = Q * V, yd(y, C, ie), E.globalAlpha = Q;
      }
      E.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !ze() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const y = p.cutoutPanoFrameVisual, v = Z(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      E.save(), E.globalAlpha *= v, gd(y.geom, y.selected, y.locked), y.selected && yd(
        y.item,
        y.geom,
        y.locked ? "#ff4d4f" : "#0070f3"
      ), E.restore();
    }
    if (s) {
      const y = Xa(i);
      if (y != null && y.visible) {
        const v = Ul(i) ? "#ff4d4f" : "#0070f3";
        E.save(), E.strokeStyle = "rgba(255, 255, 255, 0.95)", E.lineWidth = 2, E.setLineDash([6, 4]), E.beginPath(), E.moveTo(y.corners[0].x, y.corners[0].y);
        for (let S = 1; S < y.corners.length; S += 1) E.lineTo(y.corners[S].x, y.corners[S].y);
        E.closePath(), E.stroke(), E.setLineDash([]), E.fillStyle = v, y.corners.forEach((S) => {
          E.beginPath(), E.arc(S.x, S.y, 6.5, 0, Math.PI * 2), E.fill();
        }), E.restore();
      }
    } else
      i.forEach((y) => {
        if (!en(y) && !pn(y)) return;
        const v = qt(y);
        if (!(v != null && v.visible)) return;
        const S = Sn(y) ? "#ff4d4f" : "#0070f3";
        E.save(), E.strokeStyle = "rgba(255, 255, 255, 0.95)", E.lineWidth = 2, E.setLineDash([6, 4]), E.beginPath(), E.moveTo(v.corners[0].x, v.corners[0].y);
        for (let P = 1; P < v.corners.length; P += 1) E.lineTo(v.corners[P].x, v.corners[P].y);
        E.closePath(), E.stroke(), E.setLineDash([]), E.fillStyle = S, v.corners.forEach((P) => {
          E.beginPath(), E.arc(P.x, P.y, 6.5, 0, Math.PI * 2), E.fill();
        }), E.restore();
      });
    if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const y = Bd(p.interaction.start, p.interaction.current);
      E.save(), E.strokeStyle = "rgba(255, 255, 255, 0.9)", E.fillStyle = "rgba(255, 255, 255, 0.08)", E.lineWidth = 1, E.setLineDash([5, 4]), E.beginPath(), E.rect(y.x0, y.y0, y.x1 - y.x0, y.y1 - y.y0), E.fill(), E.stroke(), E.restore();
    }
  }
  function bd(i, s = !1) {
    const l = Z(Wi(i), 0.05, 20), u = s ? 320 : 220;
    return l >= 1 ? { width: u, height: Math.max(1, Math.round(u / l)) } : { width: Math.max(1, Math.round(u * l)), height: u };
  }
  function eb(i) {
    if (!cn || !i) return !1;
    const s = cn.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || cn.clientWidth || 0)), u = Math.round(Number(s.clientHeight || cn.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(u - Number(i.height || 0)) <= 1;
  }
  function tb() {
    if (p.outputPreviewRect = null, I.outputPreviewToggle.visible = p.mode !== "frame" && !!ze(), t !== "cutout" || !I.cameraPreview) return;
    if (p.mode === "frame") {
      I.cameraPreview.visible = !1, I.cameraPreview.settled = !1;
      return;
    }
    const i = ze();
    I.cameraPreview.visible = !0, I.cameraPreview.expanded = !!p.outputPreviewExpanded;
    const s = $n == null ? void 0 : $n.getContext("2d");
    if (!i || !s) {
      I.cameraPreview.ready = !1, I.cameraPreview.settled = !1, I.cameraPreview.width = 220, I.cameraPreview.height = 132, I.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, $n.width, $n.height), Lr = null;
      return;
    }
    const l = bd(i, !!p.outputPreviewExpanded);
    I.cameraPreview.width = l.width, I.cameraPreview.height = l.height;
    const u = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * u)), h: Math.max(1, Math.round(l.height * u)) };
    ($n.width !== h.w || $n.height !== h.h) && ($n.width = h.w, $n.height = h.h);
    const m = JSON.stringify([h, ii(i), up(ns())]);
    let y = m === Lr;
    if (y || (s.clearRect(0, 0, h.w, h.h), y = pd(s, h, i, "camera_preview"), Lr = y ? m : null), !y) {
      I.cameraPreview.ready = !1, I.cameraPreview.label = nc() ? "Loading preview" : "Connect ERP image", I.cameraPreview.settled = !1;
      return;
    }
    const v = eb(l);
    I.cameraPreview.ready = !0, I.cameraPreview.label = v ? "" : "Loading preview", I.cameraPreview.settled = v && Oe.pendingStableLayoutFrames <= 0 && Oe.hasPresentedFrame;
  }
  function sc(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), u = Number(s.y || 0);
    return ud(i, l, u);
  }
  function ao(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, u = Math.cos(l);
    return Vl(u * Math.sin(s), Math.sin(l), u * Math.cos(s));
  }
  function nb(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function rb(i, s, l, u = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: mn(i, "widthScale", 1),
      pressureLike: mn(i, "pressureLike", 1)
    }, ...u, u: s, v: l };
  }
  function ib(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function lc(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const u = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (u) {
      let Q = null;
      i.forEach((re) => {
        const se = Number((re == null ? void 0 : re.u) || 0), he = Number((re == null ? void 0 : re.v) || 0), oe = (se % 1 + 1) % 1, xe = Q == null ? oe : Q + Xn(oe, (Q % 1 + 1) % 1);
        h.set(re, { x: xe, y: he }), Q = xe;
      });
    }
    const m = (Q) => !Q || typeof Q != "object" ? { x: 0, y: 0 } : h.get(Q) || nb(Q), y = (Q, re, se, he = {}) => {
      const oe = u ? (Number(re) % 1 + 1) % 1 : Number(re), xe = rb(Q, oe, se, he);
      return h.set(xe, { x: Number(re), y: Number(se) }), xe;
    }, v = (Q, re, se) => {
      const he = m(Q), oe = m(re);
      return y(Q, Jn(he.x, oe.x, se), Jn(he.y, oe.y, se), {
        t: Jn(Number((Q == null ? void 0 : Q.t) || 0), Number((re == null ? void 0 : re.t) || 0), se),
        widthScale: Jn(mn(Q, "widthScale", 1), mn(re, "widthScale", 1), se),
        pressureLike: Jn(mn(Q, "pressureLike", 1), mn(re, "pressureLike", 1), se)
      });
    };
    if (i.length === 1) {
      const Q = m(i[0]);
      return [y(i[0], Q.x, Q.y)];
    }
    const S = ib(s, l), P = (Q, re) => {
      const se = [0];
      for (let le = 1; le < Q.length; le += 1) {
        const pe = m(Q[le - 1]), _e = m(Q[le]);
        se.push(se[le - 1] + Math.hypot(_e.x - pe.x, _e.y - pe.y));
      }
      const he = se[se.length - 1] || 0;
      if (he <= 1e-8) {
        const le = Q[0], pe = m(le);
        return [y(le, pe.x, pe.y)];
      }
      const oe = [];
      let xe = 0;
      for (let le = 0; le <= he + 1e-9; le += re) {
        for (; xe < se.length - 2 && se[xe + 1] < le; ) xe += 1;
        const pe = se[xe], _e = se[xe + 1], Te = Math.max(1e-8, _e - pe);
        oe.push(v(Q[xe], Q[xe + 1], Z((le - pe) / Te, 0, 1)));
      }
      const je = Q[Q.length - 1], Be = m(je), et = oe[oe.length - 1], ge = et ? m(et) : null;
      return (!ge || Math.hypot(ge.x - Be.x, ge.y - Be.y) > re * 0.35) && oe.push(y(je, Be.x, Be.y)), oe;
    }, A = (Q) => {
      if (!Array.isArray(Q) || Q.length < 3) return Q ? Q.slice() : [];
      const re = m(Q[0]), se = [y(Q[0], re.x, re.y)];
      for (let xe = 0; xe < Q.length - 1; xe += 1) {
        const je = Q[xe], Be = Q[xe + 1], et = m(je), ge = m(Be), le = y(
          je,
          et.x * 0.75 + ge.x * 0.25,
          et.y * 0.75 + ge.y * 0.25,
          {
            t: Number(je.t || 0) * 0.75 + Number(Be.t || 0) * 0.25,
            widthScale: mn(je, "widthScale", 1) * 0.75 + mn(Be, "widthScale", 1) * 0.25,
            pressureLike: mn(je, "pressureLike", 1) * 0.75 + mn(Be, "pressureLike", 1) * 0.25
          }
        ), pe = y(
          je,
          et.x * 0.25 + ge.x * 0.75,
          et.y * 0.25 + ge.y * 0.75,
          {
            t: Number(je.t || 0) * 0.25 + Number(Be.t || 0) * 0.75,
            widthScale: mn(je, "widthScale", 1) * 0.25 + mn(Be, "widthScale", 1) * 0.75,
            pressureLike: mn(je, "pressureLike", 1) * 0.25 + mn(Be, "pressureLike", 1) * 0.75
          }
        );
        se.push(le, pe);
      }
      const he = Q[Q.length - 1], oe = m(he);
      return se.push(y(he, oe.x, oe.y)), se;
    }, C = P(i, S);
    if (C.length < 3) return C;
    const V = l ? 2 : 1;
    let K = C.slice();
    for (let Q = 0; Q < V; Q += 1) K = A(K);
    return P(K, Math.max(S * 0.75, 55e-5));
  }
  function mn(i, s, l = 1) {
    const u = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(u) ? Math.max(0, u) : l;
  }
  function ob(i) {
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
  function ta(i, s, l = {}) {
    const u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(i)), u.height = Math.max(1, Math.round(s));
    const h = u.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, u.width, u.height), h.imageSmoothingEnabled = !0), { canvas: u, ctx: h };
  }
  function na() {
    const i = ia();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function ra() {
    const i = ia();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function vd() {
    const i = Gl(), s = ra();
    return i ? `${s}:${i}` : s;
  }
  function ab() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function sb() {
    p.paintCompositeRevision += 1;
  }
  function lb() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function _d() {
    var i, s;
    p.paintEngineRevisionKey = null, (s = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, _), p.paintEngineRevisionKey = na();
  }
  function wd() {
    _.painting_layer !== null && (_.painting_layer = null), Qa = "";
  }
  function Gt() {
    lb(), Oe.backgroundDirty = !0, Oe.dirty = !0;
  }
  function sr({ rebuildPaintEngine: i = !1 } = {}) {
    wd(), ab(), Gt(), i && _d();
  }
  function so() {
    wd(), sb(), Gt();
  }
  function as() {
    var u;
    const i = ia(), s = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== s && (p.paintEngine = bu(i), p.paintEngineDescriptorKey = s, p.paintEngineRevisionKey = "");
    const l = na();
    p.paintEngineRevisionKey !== l && (p.paintEngineRevisionKey = l, (u = p.paintEngine) == null || u.rebuildCommitted(_));
  }
  function ia() {
    const i = Math.max(1, M(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function zn() {
    return ia();
  }
  function cb(i, s, l, u, h = null) {
    const m = ob(i), y = mn(s, "widthScale", 1) * mn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * y) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * br) * l * y) : Math.max(0.5, m.value / (2 * Math.PI) * l * y) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * y);
  }
  function ub(i, s, l = {}) {
    const u = String((s == null ? void 0 : s.layerKind) || "paint"), h = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, y = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * y : 1, u === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const v = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, S = m ? Math.max(0.28, Number(v.a ?? 1) * 0.88) : Math.max(0.12, Number(v.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${S})`;
  }
  function fb(i, s, l) {
    const u = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(u) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), u, 0, Math.PI * 2), i.fill());
  }
  function db(i, s, l, u, h = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(u.w, u.h) * 0.25;
    i.save(), ub(i, l, h);
    const y = (v) => fb(i, v, m);
    if (s.length === 1) {
      y(s[0]), i.restore();
      return;
    }
    for (let v = 0; v < s.length - 1; v += 1) {
      const S = s[v], P = s[v + 1];
      if (!S || !P) continue;
      const A = Number(S.x || 0), C = Number(S.y || 0), V = Number(P.x || 0), K = Number(P.y || 0), ie = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5))), Q = Math.max(0.5, Math.min(m, Number(P.radiusPx || 0.5)));
      if (!Number.isFinite(A) || !Number.isFinite(C) || !Number.isFinite(V) || !Number.isFinite(K) || !Number.isFinite(ie) || !Number.isFinite(Q)) continue;
      const re = V - A, se = K - C, he = Math.hypot(re, se);
      if (!Number.isFinite(he) || he < 1e-6) {
        y(S);
        continue;
      }
      if (he > Math.max(u.w, u.h) * 0.5) continue;
      const oe = Math.max(0.5, Math.min(ie, Q)), xe = Math.max(0.35, Math.min(oe * 0.4, 2.25)), je = Math.max(1, Math.ceil(he / xe));
      for (let Be = 0; Be <= je; Be += 1) {
        const et = Be / je;
        y({
          x: Jn(A, V, et),
          y: Jn(C, K, et),
          radiusPx: Jn(ie, Q, et)
        });
      }
    }
    y(s[s.length - 1]), i.restore();
  }
  function hb(i, s, l, u) {
    db(i, s, l, u, { preview: !1 });
  }
  function pb(i, s, l, u, h) {
    var v, S, P, A;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", y = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const C = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(C.r || 0) * 255)}, ${Math.round(Number(C.g || 0) * 255)}, ${Math.round(Number(C.b || 0) * 255)}, ${Number(C.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((v = s[0]) == null ? void 0 : v[m]) || 0) * u.w, Number(((S = s[0]) == null ? void 0 : S[y]) || 0) * u.h);
    for (let C = 1; C < s.length; C += 1)
      i.lineTo(Number(((P = s[C]) == null ? void 0 : P[m]) || 0) * u.w, Number(((A = s[C]) == null ? void 0 : A[y]) || 0) * u.h);
    i.closePath(), i.fill(), i.restore();
  }
  function xd(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function mb(i, s) {
    const l = xd(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((u) => ({
      x: Number((u == null ? void 0 : u.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((u == null ? void 0 : u.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: cb(i, u, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Sd(i, s, l = null) {
    var v, S, P, A;
    if (!(i != null && i.ctx) || !s) return !1;
    const u = l || { w: Number(((v = i.canvas) == null ? void 0 : v.width) || 0), h: Number(((S = i.canvas) == null ? void 0 : S.height) || 0) }, h = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((P = s == null ? void 0 : s.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((A = s == null ? void 0 : s.geometry) == null ? void 0 : A.geometryKind) || "") === "lasso_fill")
      return pb(i.ctx, xd(h), h, u), !0;
    const y = mb(h, u);
    return y.length ? (hb(i.ctx, y, h, u), !0) : !1;
  }
  function gb(i, s, l, u = 8) {
    const h = new Uint8Array(s * l), m = [], y = new Int32Array(s * l), v = new Int32Array(s * l);
    for (let S = 0; S < l; S += 1)
      for (let P = 0; P < s; P += 1) {
        const A = S * s + P;
        if (h[A] || i[A] <= u) continue;
        let C = 0, V = 0;
        y[V] = P, v[V] = S, V += 1, h[A] = 1;
        const K = [];
        let ie = P, Q = S, re = P, se = S;
        for (; C < V; ) {
          const he = y[C], oe = v[C];
          C += 1, K.push({ x: he, y: oe }), he < ie && (ie = he), oe < Q && (Q = oe), he > re && (re = he), oe > se && (se = oe);
          const xe = [
            [(he - 1 + s) % s, oe],
            [(he + 1) % s, oe],
            [he, oe - 1],
            [he, oe + 1]
          ];
          for (const [je, Be] of xe) {
            if (Be < 0 || Be >= l) continue;
            const et = Be * s + je;
            h[et] || i[et] <= u || (h[et] = 1, y[V] = je, v[V] = Be, V += 1);
          }
        }
        m.push({ pixels: K, minX: ie, minY: Q, maxX: re, maxY: se });
      }
    return m;
  }
  function yb(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((S) => Number((S == null ? void 0 : S.x) || 0)).filter((S) => Number.isFinite(S)))].sort((S, P) => S - P);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let u = -1, h = 0;
    for (let S = 0; S < l.length; S += 1) {
      const P = l[S], C = (S === l.length - 1 ? l[0] + s : l[S + 1]) - P - 1;
      C > u && (u = C, h = S);
    }
    const m = (l[(h + 1) % l.length] + s) % s;
    let y = 1 / 0, v = -1 / 0;
    for (const S of l) {
      const P = (S - m + s) % s;
      y = Math.min(y, P), v = Math.max(v, P);
    }
    return {
      startX: m,
      widthPx: Math.max(1, v - y + 1)
    };
  }
  function bb(i, s, l = {}) {
    var P;
    const u = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (P = i == null ? void 0 : i.getContext) == null ? void 0 : P.call(i, "2d");
    if (!m || u < 1 || h < 1) return [];
    const y = m.getImageData(0, 0, u, h), v = new Uint8Array(u * h);
    for (let A = 0; A < v.length; A += 1) v[A] = y.data[A * 4 + 3];
    return gb(v, u, h, 8).map((A, C) => {
      const V = yb(A, u);
      if (!V) return null;
      const K = Number(V.widthPx || 0), ie = A.maxY - A.minY + 1, Q = Number(V.startX || 0), re = document.createElement("canvas");
      re.width = K, re.height = ie;
      const se = re.getContext("2d");
      if (!se) return null;
      const he = se.createImageData(K, ie);
      return A.pixels.forEach(({ x: oe, y: xe }) => {
        const je = (xe * u + oe) * 4, Be = (Number(oe || 0) - Q + u) % u, et = ((xe - A.minY) * K + Be) * 4;
        he.data[et + 0] = y.data[je + 0], he.data[et + 1] = y.data[je + 1], he.data[et + 2] = y.data[je + 2], he.data[et + 3] = y.data[je + 3];
      }), se.putImageData(he, 0, 0), {
        id: vo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + C * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: A.minY / h,
          u1: K / u,
          v1: (A.maxY + 1) / h
        },
        rasterDataUrl: re.toDataURL("image/png"),
        transform: {
          du: Q / u,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function oa(i, s) {
    if (!i || !s) return null;
    const l = ts(i), u = ru(s, l.centerDir);
    if (!Number.isFinite(u) || u <= 1e-6) return null;
    const h = ru(s, l.right) / u, m = ru(s, l.up) / u;
    return {
      x: (h / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function vb(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const l = ui();
      return i.map((u) => ({
        x: l.x + Number(u.u || 0) * l.w,
        y: l.y + Number(u.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Qo(ao(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function kd(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const u = ui();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, y = s == null ? m : Number(s || 0) + Xn(m, s);
        return {
          x: u.x + y * u.w,
          y: u.y + Number(h.v || 0) * u.h
        };
      });
    }
    const l = i.map((u) => Qo(ao(u))).filter(Boolean);
    return l.every((u) => Number(u.z || 0) > 0) ? l.map((u) => ({ x: Number(u.x || 0), y: Number(u.y || 0) })) : [];
  }
  function _b(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l], h = i[(l + 1) % i.length];
      if (!u || !h || !Number.isFinite(u.x) || !Number.isFinite(u.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(u.x), Number(h.y) - Number(u.y)) > s) return !1;
    }
    return !0;
  }
  function wb(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const u = [];
    for (const h of i) {
      const m = ao(h), y = oa(s, m);
      if (!y) return [];
      u.push({
        x: Number(l.x || 0) + Number(y.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(y.y || 0) * Number(l.h || 0)
      });
    }
    return _b(u, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? u : [];
  }
  function xb(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const u = [];
    for (const h of i) {
      const m = ao(h), y = oa(s, m);
      y && u.push({
        x: Number(l.x || 0) + Number(y.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(y.y || 0) * Number(l.h || 0)
      });
    }
    return u;
  }
  function Sb() {
    const i = ze(), s = pc(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: u, shot: h } = Ax(i, s, { width: N.width, height: N.height }), m = kb(l);
    return E.save(), E.fillStyle = "#0a0a0a", E.fillRect(0, 0, N.width, N.height), pd(E, u, h) || (E.fillStyle = "rgba(255, 255, 255, 0.03)", E.fillRect(u.x, u.y, u.w, u.h)), E.restore(), E.save(), E.fillStyle = "rgba(0, 0, 0, 0.58)", E.beginPath(), E.rect(0, 0, N.width, N.height), E.roundRect(l.x, l.y, l.w, l.h, m), E.fill("evenodd"), E.restore(), E.save(), E.strokeStyle = kP, E.globalAlpha = 0.62, E.lineWidth = 2, E.beginPath(), E.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), E.stroke(), E.restore(), !0;
  }
  function kb(i) {
    const s = Math.max(1e-6, Number(Oe.frameCanvasScale || 1));
    return Math.min(Ua * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Hr() {
    var s;
    const i = p.mode === "frame" ? ze() : null;
    I.frameRollKnob.visible = !!i && !r && i.locked !== !0, I.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), I.frameRollKnob.displayValue = bo(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((s = p.interaction) == null ? void 0 : s.kind) === "roll_frame", I.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function Mb() {
    var S, P;
    if (((S = p.interaction) == null ? void 0 : S.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, s = (P = i == null ? void 0 : i.geometry) == null ? void 0 : P.points;
    let l;
    if (p.mode === "frame") {
      const A = ze(), C = nn(A);
      l = wb(s, A, C);
    } else
      l = vb(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const u = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), y = Math.round(Number(h.g || 0) * 255), v = Math.round(Number(h.b || 0) * 255);
    E.save(), E.beginPath(), E.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let A = 1; A < l.length; A++) E.lineTo(Number(l[A].x || 0), Number(l[A].y || 0));
    E.closePath(), u ? (E.lineWidth = 2, E.setLineDash([6, 6]), E.lineDashOffset = 0, E.strokeStyle = "rgba(0,0,0,0.96)", E.stroke(), E.lineDashOffset = -6, E.strokeStyle = "rgba(255,255,255,0.96)", E.stroke(), E.setLineDash([]), E.lineDashOffset = 0) : (E.lineWidth = 1.5, E.setLineDash([6, 4]), E.strokeStyle = `rgba(${m},${y},${v},1)`, E.stroke(), E.setLineDash([])), E.restore();
  }
  function Nb() {
    const i = p.frameRollOverlayVisual, s = Z(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = nn(i.shot);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * br, m = Math.hypot(l.w, l.h) * 0.55, y = Math.cos(h) * m, v = Math.sin(h) * m;
    E.save(), E.globalAlpha *= s, E.beginPath(), E.rect(l.x, l.y, l.w, l.h), E.clip(), E.translate(u.x, u.y), E.rotate(h);
    const S = Math.max(12, Math.min(l.w, l.h) / 6);
    E.beginPath();
    for (let P = -m; P <= m; P += S)
      E.moveTo(P, -m), E.lineTo(P, m);
    for (let P = -m; P <= m; P += S)
      E.moveTo(-m, P), E.lineTo(m, P);
    E.lineWidth = 1, E.strokeStyle = "rgba(255, 255, 255, 0.22)", E.stroke(), E.setTransform(1, 0, 0, 1, 0, 0), E.beginPath(), E.moveTo(u.x - y, u.y - v), E.lineTo(u.x + y, u.y + v), E.lineWidth = 1.5, E.setLineDash([8, 6]), E.strokeStyle = "rgba(255, 255, 255, 0.92)", E.shadowColor = "rgba(0, 0, 0, 0.8)", E.shadowBlur = 3, E.stroke(), E.setLineDash([]), E.restore();
  }
  function Pb() {
    return t !== "cutout" || !ze() ? 0 : PP;
  }
  function Ab() {
    const i = Z(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const s = ze(), l = s ? qt(s) : null, u = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    l != null && l.visible && u && (p.cutoutPanoDimCorners = u), s && (l != null && l.visible) && u && (p.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: Gf(s),
      locked: Sn(s)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? u : h ? p.cutoutPanoDimCorners || [] : [];
    if (E.save(), E.fillStyle = `rgba(0, 0, 0, ${i})`, E.beginPath(), E.rect(0, 0, N.width, N.height), m.length >= 4) {
      E.moveTo(m[0].x, m[0].y);
      for (let y = 1; y < 4; y += 1) E.lineTo(m[y].x, m[y].y);
      E.closePath();
    }
    E.fill("evenodd"), E.restore();
  }
  function Md() {
    Dr = null, p.mode === "frame" ? (Oe.frameSafeRect = i1(), Sb()) : p.mode === "unwrap" ? Gy(!1) : Ky(!1), Ab(), t === "cutout" && tb(), Qy(), Hr(), Mb(), Nb(), I.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && Ye(), Oe.hasPresentedFrame || (Oe.hasPresentedFrame = !0, X.style.opacity = "1"), t === "cutout" && I.cameraPreview && (I.cameraPreview.settled = Oe.pendingStableLayoutFrames <= 0 && Oe.hasPresentedFrame && p.mode !== "frame");
    const i = Fy();
    I.stageStatus = i.status, I.stageStatusDetail = i.detail, i.status === ur ? (U == null || U.removeAttribute("data-stage-ready"), U == null || U.setAttribute("data-stage-loading-kind", i.detail)) : (U == null || U.setAttribute("data-stage-ready", ""), U == null || U.removeAttribute("data-stage-loading-kind"));
  }
  function Cb(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Ib() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Q0();
  }
  function de(i = {}) {
    var v, S, P, A, C, V, K, ie, Q, re;
    const s = !!i.localOnly, l = i.externalSync === !0, u = String(i.cause || ""), h = String(((v = p.interaction) == null ? void 0 : v.kind) || "");
    (!s || h === "view" || h === "pan_frame" || Cb() || !!((S = p.viewTween) != null && S.active) || u === "mode" || u === "frame_view" || u === "cutout_frame") && (Oe.backgroundDirty = !0), s && Vf() && (p.livePaintInteractionRevision += 1, Oe.backgroundDirty = !0), (!s || u === "selection" || u === "mode" || u === "cutout_frame") && (Zl(), zr()), Ib(), l && ((A = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null || A.call(P), (C = e.setDirtyCanvas) == null || C.call(e, !0, !1)), l && !s && ((K = (V = e.graph) == null ? void 0 : V.setDirtyCanvas) == null || K.call(V, !0, !0), (re = (Q = (ie = Ar) == null ? void 0 : ie.canvas) == null ? void 0 : Q.setDirty) == null || re.call(Q, !0, !0)), Oe.dirty = !0;
  }
  function Nd() {
    const i = N.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return N.width !== s || N.height !== l || X.width !== s || X.height !== l ? (N.width = s, N.height = l, X.width = s, X.height = l, Oe.backgroundDirty = !0, Oe.dirty = !0, t === "cutout" && (Oe.pendingStableLayoutFrames = Math.max(Number(Oe.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Eb(i = performance.now()) {
    var m, y;
    Oe.lastTickTs = i;
    const s = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    s != null && s.shot && (p.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = l, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const v = Z(
        (i - Number(p.frameRollOverlayStartTs || i)) / AP,
        0,
        1
      );
      p.frameRollOverlayAlpha = Jn(
        Number(p.frameRollOverlayFrom || 0),
        l,
        As(v)
      ), v >= 1 && (p.frameRollOverlayAlpha = l, l === 0 && (p.frameRollOverlayVisual = null)), Oe.dirty = !0;
    }
    const u = Pb();
    if (Math.abs(u - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = u, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - u) > 1e-6) {
      const v = Z(
        (i - Number(p.cutoutPanoDimStartTs || i)) / Bp,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Jn(
        Number(p.cutoutPanoDimFrom || 0),
        u,
        As(v)
      ), v >= 1 && (p.cutoutPanoDimAlpha = u), v >= 1 && u === 0 && (p.cutoutPanoDimCorners = null), Oe.dirty = !0;
    }
    const h = t === "cutout" && ze() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const v = Z(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / Bp,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Jn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        As(v)
      ), v >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), Oe.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const v = Math.max(1, Number(p.outputPreviewAnimDurationMs)), S = Z((i - Number(p.outputPreviewAnimStartTs || 0)) / v, 0, 1), A = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? LP(S) : zP(S);
      p.outputPreviewAnim = Jn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, A), Oe.dirty = !0, S >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((y = p.viewTween) != null && y.active) {
      const v = p.viewTween, S = Z((i - v.startTs) / v.durationMs, 0, 1), P = As(S);
      p.viewYaw = Kt(v.startYaw + v.deltaYaw * P), p.viewPitch = v.startPitch + (v.targetPitch - v.startPitch) * P, p.viewFov = v.startFov + (v.targetFov - v.startFov) * P, Oe.backgroundDirty = !0, Oe.dirty = !0, S >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(fn.state.inertia.vx || 0), p.viewInertia.vy = Number(fn.state.inertia.vy || 0), p.viewInertia.active = !!fn.state.inertia.active, fn.stepInertia(i) && (p.viewInertia.vx = Number(fn.state.inertia.vx || 0), p.viewInertia.vy = Number(fn.state.inertia.vy || 0), p.viewInertia.active = !!fn.state.inertia.active, Oe.backgroundDirty = !0, Oe.dirty = !0), Oe.pendingStableLayoutFrames > 0 && (Oe.pendingStableLayoutFrames -= 1, Oe.dirty = !0), Oe.dirty) {
      if (Oe.pendingStableLayoutFrames > 0)
        return;
      Oe.dirty = !1, Md();
    }
  }
  function Pd(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Oe.tickErrorSignature !== l && (Oe.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), I.stageStatus = er, I.stageStatusDetail = "frame", U == null || U.setAttribute("data-stage-ready", ""), U == null || U.removeAttribute("data-stage-loading-kind");
    }
  }
  function Ad(i = performance.now()) {
    Oe.running && (Pd(() => Eb(i)), Oe.running && (Oe.rafId = requestAnimationFrame(Ad)));
  }
  function Ob() {
    !Oe.running || !Nd() || Pd(() => {
      Oe.dirty = !1, Md();
    });
  }
  const Cd = new ResizeObserver(Ob);
  Cd.observe(N);
  function Fb() {
    Oe.running = !1, Oe.rafId && cancelAnimationFrame(Oe.rafId), Oe.rafId = 0, Cd.disconnect();
  }
  function ot() {
    r || k && _.stickers.some(Vr) || (p.historyController.commitActionGroup(JSON.stringify(ap(_))), vc());
  }
  function cc(i) {
    if (r) return;
    mr();
    const s = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (vc(), !s) return;
    const l = _x(_, s);
    Object.keys(_).forEach((u) => delete _[u]), Object.assign(_, l.state), p.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], l.paintingChanged ? sr() : Gt(), En(), Ve(), On(), de({ cause: "cutout_frame" });
  }
  function Id() {
    var l, u;
    const i = Array.isArray((l = p.historyController) == null ? void 0 : l.entries) ? p.historyController.entries : [], s = Number((u = p.historyController) == null ? void 0 : u.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function En() {
    Cn();
    const i = xM({
      editor: p,
      swatches: Xs,
      paintColorPopOpen: j ? !j.hidden : !1,
      colorToCss: vr,
      colorsApproximatelyEqual: qs,
      rgb01ToHsv: au,
      hsv01ToRgb: ou,
      getBrushPresetIdForTool: hi,
      isActiveLassoTool: ly
    });
    if (Object.assign(I.paintDock, i), py(), !i.visible) {
      j && (j.hidden = !0);
      return;
    }
    ke && (clearTimeout(ke), ke = 0), $ && (!i.colorEnabled && j && !j.hidden && (ke = window.setTimeout(() => {
      j.hidden = !0, I.paintDock.colorPopOpen = !1, ke = 0;
    }, 170)), j && (j.style.setProperty("--picker-hue-color", i.pickerHueColor), j.style.setProperty("--picker-sat", i.pickerSat), j.style.setProperty("--picker-val", i.pickerVal), j.style.setProperty("--picker-hue", i.pickerHue)), ye && (ye.style.left = i.pickerSvLeft, ye.style.top = i.pickerSvTop), be && (be.style.left = i.pickerHueLeft));
  }
  function lo() {
    const i = Xt(t === "cutout" && p.mode === "frame" ? ze() : Pt());
    i && (p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: Xr(i)
    }, Ve());
  }
  function Ve() {
    var et, ge, le, pe;
    if (Mi(), o) return;
    _.ui_settings = _.ui_settings || {};
    const i = wM(_.ui_settings);
    if (a) {
      I.sidePanel = SM({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: Hn
      });
      return;
    }
    const s = Pt(), l = t === "cutout" && p.mode === "frame" ? ze() : null, u = l || s, h = l ? [l] : ar(), m = l ? "shot" : qa();
    if (h.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), u && m !== "stroke") {
      const _e = Xt(u);
      p.panelLastValues = {
        yaw_deg: Number(_e.yaw_deg || 0),
        pitch_deg: Number(_e.pitch_deg || 0),
        hFOV_deg: Number(_e.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(_e.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(_e.rot_deg || 0),
        roll_deg: Number(_e.roll_deg || 0),
        aspect_id: Xr(_e)
      }, xn(u) && (p.panelLastValues.opacity = $l(u, p.frame).opacity * 100);
    }
    const y = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), v = m === "stroke" ? null : u, S = k && p.inspectCamera, P = S ? kx(_.camera, p.frame) : xn(v) ? p.panelLastValues : v || y, A = S || !!v && !Sn(v);
    p.panelWasEnabled = A, Zl();
    let C = null;
    if (l) {
      const _e = Wl({ item: l, kind: "shot", label: "Frame" });
      C = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: _e.label,
        currentIcon: _e.icon || null,
        items: [{
          id: String(l.id || ""),
          label: _e.label,
          icon: _e.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const _e = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Yt().forEach((Ie, ut) => {
        var At, Rt;
        if (!Ie) return;
        const Xe = k ? $g(Ie) : tn(Ie) ? String(Ie.id || Zc) : String(((Rt = (At = _.assets) == null ? void 0 : At[Ie.asset_id]) == null ? void 0 : Rt.name) || Ie.asset_id || Ie.id), Lt = `${ut + 1}. ${Xe}${tn(Ie) && ro(Ie) ? " (hidden)" : ""}`, dn = Wl({ item: Ie, label: Lt, kind: "image" });
        _e.push({ id: Ie.id, label: dn.label, icon: dn.icon, item: Ie, kind: "image" });
      }) : Kf().forEach((Ie) => {
        if (!(Ie != null && Ie.item)) return;
        const ut = Wl(Ie);
        _e.push({ id: Ie.item.id, label: ut.label, icon: ut.icon, item: Ie.item, kind: Ie.kind });
      });
      const Te = (v == null ? void 0 : v.id) || "", Ke = S ? { label: "Camera", icon: Me.camera } : _e.find((Ie) => Ie.id === Te) || _e[0];
      C = {
        label: "Selection",
        open: !1,
        disabled: _e.length <= 1,
        currentLabel: Ke.label,
        currentIcon: Ke.icon || null,
        items: _e.map((Ie) => ({
          id: Ie.id,
          label: Ie.label,
          icon: Ie.icon || null,
          active: Ie.id === Te
        }))
      };
    }
    const V = [], K = (_e, Te, Ke, Ie, ut) => {
      const Xe = Z(Number(P[_e] || 0), Ke, Ie);
      V.push({
        key: _e,
        label: Te,
        min: Ke,
        max: Ie,
        step: ut,
        value: Xe,
        displayValue: bo(Xe),
        fillPct: Z((Xe - Ke) / Math.max(1e-6, Ie - Ke) * 100, 0, 100),
        enabled: A && !r
      });
    }, ie = [];
    S ? (K("position_x", "X", -100, 100, 0.01), K("position_y", "Y", -100, 100, 0.01), K("position_z", "Z", -100, 100, 0.01), K("yaw_deg", "Yaw", -180, 180, 0.1), K("pitch_deg", "Pitch", -90, 90, 0.1), K("roll_deg", "Roll", -180, 180, 0.1), K("hFOV_deg", "FOV", 1, 179, 0.1)) : h.length > 1 ? (ie.push(`Selected objects: ${h.length}`), ie.push("Multi-selection supports z-order and delete.")) : (K("yaw_deg", "Yaw", -180, 180, 0.1), K("pitch_deg", "Pitch", -90, 90, 0.1), K("hFOV_deg", "H FOV", 1, 179, 0.1), K("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? K("rot_deg", "Rotation", -180, 180, 0.1) : K("roll_deg", "Roll", -180, 180, 0.1), k && K("opacity", "Opacity", 0, 100, 1));
    const Q = Array.isArray((ge = (et = _ == null ? void 0 : _.painting) == null ? void 0 : et.paint) == null ? void 0 : ge.strokes) ? _.painting.paint.strokes.length : 0, re = Array.isArray((pe = (le = _ == null ? void 0 : _.painting) == null ? void 0 : le.mask) == null ? void 0 : pe.strokes) ? _.painting.mask.strokes.length : 0, se = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((_e) => String((_e == null ? void 0 : _e.name) || "")) : [], he = DP(
      e,
      se.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), oe = !!String((he == null ? void 0 : he.src) || "").trim() || Bf("pano_input_images").length > 0, xe = Yt().length > 0 || Q > 0, je = re > 0, Be = [
      { key: "mask", label: "Mask", icon: Me.circle_dashed_tool, visible: !!p.showMask, enabled: je },
      { key: "objects", label: "Paint / Images", icon: Me.image, visible: !!p.showObjects, enabled: xe },
      { key: "panorama", label: "Panorama", icon: Me.globe, visible: !!p.showPanorama, enabled: oe }
    ].map((_e) => ({
      ..._e,
      ariaLabel: `Toggle ${_e.label.toLowerCase()}`,
      tip: _e.visible ? "Hide" : "Show"
    }));
    I.sidePanel = kM({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: C,
      enabled: A,
      selectedKind: S ? "camera" : m,
      selectedItems: h,
      params: V,
      notes: ie,
      visibilityRows: Be,
      uiSettings: i,
      normalizeCoverageValue: Hn
    });
  }
  function Mi() {
    if (!k || r) return;
    const i = uc(), s = Ee.selection, l = s && di(s.owner);
    if (s) {
      const h = l ? aa(s) : [];
      s.frames = s.frames.filter((m) => h.some((y) => l[y].keyframes.some((v) => v.frame === m))), s.frames.length || (Ee.selection = null);
    }
    const u = _.timeline.fps;
    I.timeline = PM(_, {
      frame: p.frame,
      span: i,
      selection: Ee.selection,
      selectedId: p.inspectCamera ? "camera" : p.selectedId,
      expanded: Ee.expanded ?? Cu(_),
      openRows: Ee.openRows,
      audio: Db() && I.videoTransport.hasAudio ? { muted: H.muted } : null,
      playing: Dt.playing,
      label: `${p.frame}f · ${(p.frame / u).toFixed(2)}s @ ${Number(u.toFixed(3))} fps`
    }), I.easing = Ee.selection ? AM(l, aa(Ee.selection), Ee.selection.frames, sa(Ee.selection.owner)) : null;
  }
  function uc(i = null) {
    const s = _.timeline.fps, l = I.videoTransport.ready ? Math.round(Number(I.videoTransport.duration || 0) * s) : 0;
    return Eg(_, { minimum: Math.round(s * 5), frames: l, openClip: i });
  }
  function di(i) {
    return i === "camera" ? _.camera : _.stickers.find((s) => s.id === i) || null;
  }
  function aa(i) {
    return i.lane ? [i.lane] : Wo(di(i.owner));
  }
  function sa(i) {
    if (i === "camera") return 0;
    const { clip: s } = di(i);
    return s.start - s.in;
  }
  function ss(i) {
    const s = di(i);
    return !!s && s.locked !== !0;
  }
  function Ed() {
    const i = Pt();
    xn(i) && !Vi(i.clip, p.frame) && pr(null);
  }
  function Tb(i) {
    const s = Math.max(0, Math.round(i));
    s !== p.frame && (p.frame = s, Ed(), Gt(), Ve(), Ye(), de());
  }
  function Db() {
    return H instanceof HTMLVideoElement && !!H.getAttribute("src");
  }
  function Lb(i) {
    li(), Dt.seek(i);
  }
  function mr() {
    k && Dt.stop();
  }
  function fc() {
    li(), Dt.toggle();
  }
  function co() {
    Gt(), Ve(), Ye(), de();
  }
  function la() {
    ot(), lt(), co();
  }
  function Rb() {
    const { selection: i } = Ee;
    ss(i.owner) && (mr(), sx(di(i.owner), aa(i), i.frames, p.frame - sa(i.owner)), Ee.selection = null, la());
  }
  function $b(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        i.phase === "start" && li(), Dt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        fc();
        return;
      }
      if (i.type === "mute") {
        Xf(), Mi();
        return;
      }
      if (i.type === "toggle-expanded") {
        Ee.expanded = !(Ee.expanded ?? Cu(_)), Ee.selection = null, Mi();
        return;
      }
      if (i.type === "toggle-row") {
        Ee.openRows.has(i.id) ? Ee.openRows.delete(i.id) : Ee.openRows.add(i.id), Mi();
        return;
      }
      if (i.type === "select-row") {
        const s = _.stickers.find((l) => l.id === i.id);
        s && !Vi(s.clip, p.frame) && Lb(s.clip.start), pr(Yt().find((l) => l.id === i.id) || null), p.inspectCamera = i.id === "camera", Ee.selection = null, Ve(), Ye(), de();
        return;
      }
      if (i.type === "select-keys") {
        const s = sa(i.owner), l = i.frames.map((m) => m - s), u = Ee.selection, h = (u == null ? void 0 : u.owner) === i.owner && u.lane === i.lane;
        if (i.additive && h) {
          const m = new Set(u.frames);
          for (const y of l)
            m.has(y) ? m.delete(y) : m.add(y);
          u.frames = [...m].sort((y, v) => y - v);
        } else
          Ee.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        Mi();
        return;
      }
      if (i.type === "move-keys") {
        const s = Ee.selection;
        if (!s || !ss(s.owner)) return;
        const l = di(s.owner), u = aa(s);
        if (i.phase === "start") {
          mr(), Ee.drag = { keyframes: u.map((y) => structuredClone(l[y].keyframes)), frames: s.frames };
          return;
        }
        const { drag: h } = Ee;
        if (!(h != null && h.keyframes)) return;
        u.forEach((y, v) => {
          l[y].keyframes = structuredClone(h.keyframes[v]);
        });
        const m = lx(l, u, h.frames, i.delta, -sa(s.owner));
        if (s.frames = h.frames.map((y) => y + m), i.phase !== "end") {
          co();
          return;
        }
        Ee.drag = null, m ? la() : co();
        return;
      }
      if (i.type === "clip") {
        const s = _.stickers.find((h) => h.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          mr(), Ee.drag = { clip: { ...s.clip }, span: uc(s.clip) };
          return;
        }
        const { drag: l } = Ee;
        if (!(l != null && l.clip)) return;
        const u = l.clip;
        if (s.clip = { ...u }, i.delta && i.mode === "move" ? fx(s.clip, i.delta) : i.delta && i.mode === "start" ? dx(s.clip, u.start + i.delta) : i.delta && hx(s.clip, (u.duration === null ? l.span : u.start + u.duration) + i.delta, l.span), i.phase !== "end") {
          co();
          return;
        }
        Ee.drag = null, Ed(), JSON.stringify(s.clip) !== JSON.stringify(u) ? la() : co();
        return;
      }
      if (i.type === "key-row") {
        if (!ss(i.owner)) return;
        mr(), ix(di(i.owner), p.frame - sa(i.owner)), la();
        return;
      }
      if (i.type === "easing") {
        const s = Ee.selection;
        if (!s || !ss(s.owner)) return;
        mr(), ux(di(s.owner), aa(s), s.frames, i.easing), i.commit ? la() : co();
      }
    }
  }
  async function Od(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Pr(i)) return;
    if (k) {
      mr(), await zb(i);
      return;
    }
    const s = Di("asset"), l = wa(e, `add:${s}`, async () => {
      try {
        const { image: u } = await xa(i);
        We.set(s, u);
        const h = Di("st");
        _.stickers.push({
          id: h,
          asset_id: s,
          yaw_deg: p.viewYaw,
          pitch_deg: p.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: ci(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
          rot_deg: 0,
          z_index: Ja()
        }), pr(_.stickers[_.stickers.length - 1]), ls(), Ve(), Ye(), de();
        const m = await Ri(i, {
          fetchApi: (S, P) => Vt.fetchApi(S, P)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === s).length) return;
        _.assets[s] = m, oo(), ot(), lt(), Ve(), Ye(), de();
      } catch (u) {
        delete _.assets[s], We.delete(s);
        const h = Array.isArray(_.stickers) ? _.stickers : [], m = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") === s);
        throw m.length && (_.stickers = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") !== s), m.some((y) => String((y == null ? void 0 : y.id) || "") === String(p.selectedId || "")) && pr(null), Ve(), Ye(), de(), lt()), u;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function Vb() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = ee == null ? void 0 : ee.openImagePicker) == null || i.call(ee, "add");
  }
  async function zb(i) {
    const s = Di("st"), l = wa(e, `add:${s}`, async () => {
      const { image: u } = await xa(i), h = {
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: ci(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
        rot_deg: 0
      }, m = xf(s, { kind: "file", filename: "" }, h, Ja());
      We.set(ea(m), u), _.stickers.push(m), pr(m), ls(), Ve(), Ye(), de();
      try {
        const y = await Ri(i, {
          fetchApi: (S, P) => Vt.fetchApi(S, P)
        }), v = _.stickers.find((S) => S.id === s);
        if (!v) return;
        v.source = zs(y), We.set(ea(v), u), ot(), lt();
      } catch (y) {
        throw _.stickers = _.stickers.filter((v) => v.id !== s), p.selectedId === s && pr(null), ot(), lt(), y;
      } finally {
        Ve(), Ye(), de();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function jb(i, s) {
    const l = wa(e, `replace:${s}:${Di("asset")}`, async () => {
      const { image: u } = await xa(i), h = await Ri(i, {
        fetchApi: (y, v) => Vt.fetchApi(y, v)
      }), m = _.stickers.find((y) => y.id === s);
      if (m) {
        m.source = zs(h), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const y of [m.size.value, ...m.size.keyframes.map((v) => v.value)])
          y.vFOV_deg = ci(y.hFOV_deg, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1));
        We.set(ea(m), u), Gt(), ot(), lt(), Ve(), Ye(), de();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function Hb(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Pt();
    if (!s || !gt(s) || tn(s) || !Pr(i)) return;
    if (k) {
      await jb(i, s.id);
      return;
    }
    const l = String(s.id || ""), u = Di("asset"), h = wa(e, `replace:${l}:${u}`, async () => {
      var A;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === l) || null;
      if (!m || !gt(m) || tn(m)) return;
      const y = String(m.asset_id || ""), v = y ? gn(((A = _.assets) == null ? void 0 : A[y]) || null) : null, S = Number(m.vFOV_deg || 0), P = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: C } = await xa(i);
        We.set(u, C), m.asset_id = u, m.vFOV_deg = ci(
          Number(m.hFOV_deg || 30),
          Number(C.naturalWidth || C.width || 1),
          Number(C.naturalHeight || C.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Gt(), Ve(), Ye(), de();
        const V = await Ri(i, {
          fetchApi: (ie, Q) => Vt.fetchApi(ie, Q)
        }), K = (Array.isArray(_.stickers) ? _.stickers : []).find((ie) => String((ie == null ? void 0 : ie.id) || "") === l) || null;
        if (!K || String(K.asset_id || "") !== u) return;
        _.assets[u] = V, oo(), ot(), lt(), Ve(), Ye(), de();
      } catch (C) {
        delete _.assets[u], We.delete(u);
        const V = (Array.isArray(_.stickers) ? _.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === l) || null;
        throw V && String(V.asset_id || "") === u && (y && v && (_.assets[y] = v), V.asset_id = y, V.vFOV_deg = S, V.crop = P ? { ...P } : null), Gt(), lt(), Ve(), Ye(), de(), C;
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function Gb() {
    var s;
    if (r) return;
    const i = Pt();
    !i || !gt(i) || tn(i) || (s = ee == null ? void 0 : ee.openImagePicker) == null || s.call(ee, "replace");
  }
  async function Kb() {
    if (r || t !== "stickers") return;
    if (k) {
      await Bb();
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
        const y = await fetch(m).then((C) => C.blob()), v = String(y.type || "image/png").split("/")[1] || "png", S = String((h == null ? void 0 : h.name) || `${u}.${v}`), P = new File([y], S, { type: y.type || "image/png" }), A = await Ri(P, {
          fetchApi: (C, V) => Vt.fetchApi(C, V)
        });
        _.assets[u] = {
          ...A,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (lt(), de());
  }
  async function Bb() {
    let i = !1;
    for (const s of _.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const u = await fetch(l).then((v) => v.blob()), h = String(u.type || "image/png").split("/")[1] || "png", m = new File([u], `${s.id}.${h}`, { type: u.type || "image/png" }), y = await Ri(m, {
            fetchApi: (v, S) => Vt.fetchApi(v, S)
          });
          s.source = zs(y), i = !0;
        } catch {
        }
    }
    i && (lt(), de());
  }
  function Ub() {
    if (r || t !== "cutout") return;
    const i = ze();
    if (i) {
      pr(i), p.mode = "pano", Qt(
        Kt(Number(i.yaw_deg || 0)),
        Z(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), Ve(), Ye(), de({ cause: "cutout_frame" });
      return;
    }
    const s = cg({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Kt(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    _.shots = [s], pr(s), ls(), p.mode = "pano", ot(), lt(), Ve(), Ye(), de({ cause: "cutout_frame" });
  }
  function Wb() {
    r || t !== "cutout" || (_.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, _.active.selected_shot_id = null, ot(), lt(), Ve(), Ye(), de());
  }
  function Yb() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], s = [];
    for (const l of i)
      tn(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function Fd(i, s, l = "Clear") {
    return new Promise((u) => {
      I.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: u
      };
    });
  }
  async function Xb() {
    var l, u;
    if (r || !await Fd(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = Oo(null), sr();
    const s = Yb();
    if (t === "stickers")
      _.stickers = k ? _.stickers.filter((h) => h.placement === "world" || s.includes(h)) : s, k || (_.assets = {}), p.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = ((u = s[0]) == null ? void 0 : u.id) || null, oo();
    else {
      const h = vx(_.shots, _.active.selected_shot_id);
      _.stickers = s, _.assets = {}, _.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, oo();
    }
    ot(), lt(), Ve(), Ye(), de();
  }
  async function qb(i) {
    var m, y, v, S;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", u = uo(s);
    if (!(!u.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((y = p.interaction) == null ? void 0 : y.layerKind) === s) || !await Fd(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((v = p.interaction) == null ? void 0 : v.kind) === "draw" && ((S = p.interaction) == null ? void 0 : S.layerKind) === s) {
        const P = zn();
        P && p.paintEngine.cancelActiveStroke(P), p.interaction = null;
      }
      u.length = 0, _.painting.raster_objects = In().filter((P) => String((P == null ? void 0 : P.layerKind) || "paint") !== s), s === "paint" && (hn().length = 0), sr(), ot(), lt(), Ve(), Ye(), En(), de();
    }
  }
  function Jb() {
    if (r) return;
    const i = Pt();
    if (!i || !gt(i) || tn(i) || k && Vr(i)) return;
    let s;
    k ? s = Px(i, Di("st"), Ja()) : (s = JSON.parse(JSON.stringify(i)), s.id = Di("st"), s.yaw_deg = Kt((s.yaw_deg || 0) + 8), s.z_index = Ja()), _.stickers.push(s), _.active.selected_sticker_id = s.id, p.selectedId = s.id, p.selectedIds = [s.id], Gt(), ot(), lt(), Ye(), Ve(), de();
  }
  function Td() {
    var l, u, h, m, y;
    if (r) return;
    const i = ar(), s = Pt();
    if (!(!s && i.length === 0) && !i.some((v) => Sn(v))) {
      if (mr(), i.length > 1) {
        const v = new Set(i.filter((A) => en(A)).map((A) => String(A.actionGroupId || A.id || ""))), S = new Set(i.filter((A) => pn(A)).map((A) => an(A.rasterObjectId || A.id || ""))), P = new Set(i.filter(gt).map((A) => String(A.id || "")));
        v.size > 0 && (_.painting.paint.strokes = (Array.isArray((u = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : u.strokes) ? _.painting.paint.strokes : []).filter((A) => !v.has(String((A == null ? void 0 : A.actionGroupId) || ""))), _.painting.groups = hn().filter((A) => !v.has(String((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || ""))), sr()), S.size > 0 && (_.painting.raster_objects = In().filter((A) => !S.has(String((A == null ? void 0 : A.id) || ""))), so()), P.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((A) => P.has(String((A == null ? void 0 : A.id) || "")) ? tn(A) ? (ro(A) || (A.visible = !1), !0) : !1 : !0), oo(), Gt()), p.selectedId = null, p.selectedIds = [], ot(), lt(), Ve(), Ye(), de();
        return;
      }
      if (en(s)) {
        const v = String(s.actionGroupId || s.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (h = _.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== v), _.painting.groups = hn().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== v), sr(), p.selectedId = null, p.selectedIds = [], ot(), lt(), Ve(), Ye(), de();
        return;
      }
      if (pn(s)) {
        const v = an(s.rasterObjectId || s.id || "");
        _.painting.raster_objects = In().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== v), so(), p.selectedId = null, p.selectedIds = [], ot(), lt(), Ve(), Ye(), de();
        return;
      }
      if (t === "stickers" || gt(s)) {
        if (tn(s)) {
          if (ro(s)) return;
          s.visible = !1, Gt(), ot(), lt(), Ve(), Ye(), de();
          return;
        }
        _.stickers = _.stickers.filter((v) => v.id !== s.id), oo(), Gt(), p.selectedId = ((y = Yt()[0]) == null ? void 0 : y.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = p.selectedId, ot(), lt(), Ve(), Ye(), de();
        return;
      }
      Wb();
    }
  }
  function dc(i, s) {
    const l = Oe.frameSafeRect;
    if (!i || !l || p.mode !== "frame") return !1;
    const u = Qc * Ui(l, i), h = yf(gf(l, s), u);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function Dd(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, u = (() => {
      const v = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(v)) {
        const [A, C] = v.split(":").map((V) => Number(V));
        if (Number.isFinite(A) && Number.isFinite(C)) return A >= C;
      }
      const S = Number(i.hFOV_deg || 64), P = Number(i.vFOV_deg || 40);
      return Math.abs(S - P) > 1e-6 ? S >= P : Wi(i) >= 1;
    })();
    let [h, m] = l[String(s)] || l["1:1"];
    h >= m !== u && ([h, m] = [m, h]);
    const y = h / m;
    if (!dc(i, y)) {
      const v = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = v, i.hFOV_deg = $s(v, y);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function Zb(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const u = Va(s, l);
    if (!u) return !1;
    const h = u.ratio;
    if (!dc(i, h)) {
      const m = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = $s(m, h);
    }
    return i.aspect_id = u.label, !0;
  }
  function Ld(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = ii(i), u = l.tanHalfX / Math.max(1e-12, l.tanHalfY), h = 1 / Math.max(1e-12, u);
    if (!dc(i, h)) {
      const m = Z(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = $s(m, h);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, y] = s.split(":");
      i.aspect_id = `${y}:${m}`;
    } else
      i.aspect_id = $i(i);
  }
  function Rd() {
    eo().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function Qb() {
    if (r) return;
    const i = ar();
    if (!Pt() || i.length === 0 || i.some((v) => Sn(v))) return;
    Rd();
    const l = eo(), u = new Set(i.map((v) => gt(v) ? `sticker:${String(v.id || "")}` : pn(v) ? `rasterObject:${an(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), h = [], m = [];
    if (l.forEach((v) => {
      var P, A;
      const S = v.type === "sticker" ? `sticker:${String(((P = v.item) == null ? void 0 : P.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((A = v.item) == null ? void 0 : A.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      u.has(S) ? h.push(v) : m.push(v);
    }), !h.length || h[h.length - 1] === l[l.length - 1]) return;
    [...m, ...h].forEach((v, S) => {
      v.type === "sticker" && v.item && (v.item.z_index = S), v.type === "strokeGroup" && v.item && (v.item.z_index = S), v.type === "rasterObject" && v.item && (v.item.z_index = S);
    }), Gt(), ot(), lt(), Ye(), de();
  }
  function e1() {
    if (r) return;
    const i = ar();
    if (!Pt() || i.length === 0 || i.some((v) => Sn(v))) return;
    Rd();
    const l = eo(), u = new Set(i.map((v) => gt(v) ? `sticker:${String(v.id || "")}` : pn(v) ? `rasterObject:${an(v.rasterObjectId || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || v.id || "")}`)), h = [], m = [];
    if (l.forEach((v) => {
      var P, A;
      const S = v.type === "sticker" ? `sticker:${String(((P = v.item) == null ? void 0 : P.id) || "")}` : v.type === "rasterObject" ? `rasterObject:${String(((A = v.item) == null ? void 0 : A.id) || v.id || "")}` : `strokeGroup:${String(v.actionGroupId || "")}`;
      u.has(S) ? h.push(v) : m.push(v);
    }), !h.length || h[0] === l[0]) return;
    [...h, ...m].forEach((v, S) => {
      v.type === "sticker" && v.item && (v.item.z_index = S), v.type === "strokeGroup" && v.item && (v.item.z_index = S), v.type === "rasterObject" && v.item && (v.item.z_index = S);
    }), Gt(), ot(), lt(), Ye(), de();
  }
  function t1() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", f && (_.output_preset = M(Number(_.output_preset || 2048))), d && (_.coverage = Hn(d.value)), b && (_.bg_color = String(b.value || _.bg_color || "#00ff00")), On(), e.setDirtyCanvas(!0, !0));
  }
  function On() {
    var s;
    if (r) return;
    _.coverage = Hn(_.coverage), zg(e, _.active);
    const i = jg(e, _);
    g && !Hg(e, i, String(g.value ?? "")) && (g.value = i, (s = g.callback) == null || s.call(g, i));
  }
  const $d = () => On();
  r || (e.__panoFlushStateBeforeQueue = $d);
  function hc() {
    _.ui_settings = UP(_.ui_settings), r || On();
  }
  function lt() {
    var i;
    r || (On(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function n1() {
    r || Oy() && sd().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function r1(i = {}) {
    var u, h, m, y, v, S, P, A, C, V;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((h = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || h.call(u), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (v = e.setDirtyCanvas) == null || v.call(e, !0, !1)), l && ((P = (S = e.graph) == null ? void 0 : S.setDirtyCanvas) == null || P.call(S, !0, !0), (V = (C = (A = Ar) == null ? void 0 : A.canvas) == null ? void 0 : C.setDirty) == null || V.call(C, !0, !0));
  }
  function ls() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", En(), Ve());
  }
  function Ni(i) {
    const s = N.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * N.width,
      y: (i.clientY - s.top) / s.height * N.height
    };
  }
  function cs(i) {
    const s = N.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Vd() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function ze() {
    if (t !== "cutout") return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const s = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function i1() {
    var K, ie, Q, re, se;
    if (!N) return null;
    const i = (K = N.getBoundingClientRect) == null ? void 0 : K.call(N), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? N.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? N.height / i.height : 1;
    Oe.frameCanvasScale = Math.min(s, l);
    let u = 24, h = 24;
    const m = Math.max(u + 1, N.width - 24);
    let y = Math.max(h + 1, N.height - 24);
    const v = (ie = nt == null ? void 0 : nt.getBoundingClientRect) == null ? void 0 : ie.call(nt), S = (Q = pt == null ? void 0 : pt.getBoundingClientRect) == null ? void 0 : Q.call(pt);
    let P = 24;
    v && i && v.width > 0 && v.height > 0 && (P = Math.max(P, (v.right - i.left) * s + Kp)), S && i && S.width > 0 && S.height > 0 && ((re = I.frameRail) == null ? void 0 : re.visible) === !0 && (P = Math.max(P, (i.right - S.left) * s + Kp)), u = Math.max(u, P);
    const A = Math.min(m, N.width - P);
    let C = 24;
    const V = (se = He == null ? void 0 : He.getBoundingClientRect) == null ? void 0 : se.call(He);
    if (V && i && V.width > 0 && V.height > 0 && (C = Math.max(C, (V.bottom - i.top) * l + eu)), [Zt, Bn].forEach((he) => {
      var je;
      if (!he || !i) return;
      const oe = getComputedStyle(he);
      if (oe.display === "none" || oe.visibility === "hidden" || Number(oe.opacity) <= 0) return;
      const xe = (je = he.getBoundingClientRect) == null ? void 0 : je.call(he);
      !xe || xe.width <= 0 || xe.height <= 0 || (C = Math.max(C, (i.bottom - xe.top) * l + eu));
    }), Ne && i) {
      const he = getComputedStyle(Ne);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (C = Math.max(C, (NP + eu) * l));
    }
    return h = Math.max(h, C), y = Math.max(h + 1, Math.min(y, N.height - C)), {
      x: u,
      y: h,
      w: Math.max(1, A - u),
      h: Math.max(1, y - h)
    };
  }
  function pc(i = ze()) {
    if (!i || !N) return null;
    const s = Oe.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, N.width - 48),
      h: Math.max(1, N.height - 48)
    };
    return Sw(s, i, Qc * Ui(s, i));
  }
  function nn(i = ze()) {
    const s = pc(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function mc() {
    return t === "cutout" && !!ze();
  }
  function lr(i, s = performance.now()) {
    if (p.mode === "unwrap") {
      const m = ui(), y = (i.x - m.x) / Math.max(1, m.w), v = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: Z(v, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = ec(i.x, i.y), { lon: u, lat: h } = ic(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (u / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - h / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function cr(i, s, l = performance.now()) {
    const u = nn(s);
    if (!u) return null;
    const h = {
      x: (Number(i.x) - u.x) / Math.max(1, u.w),
      y: (Number(i.y) - u.y) / Math.max(1, u.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = sc(s, h);
    if (!m) return null;
    const { lon: y, lat: v } = ic(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - v / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function o1(i, s) {
    const l = ze();
    if (!l || l.locked === !0) return !1;
    const u = Number(s) > 0, h = fg(l, s);
    if (!h) return !1;
    if (u) {
      const m = Qc * Ui(
        Oe.frameSafeRect || { w: N.width, h: N.height },
        h
      ), y = bf({ width: N.width, height: N.height }, m);
      if (y.halfW < N.width * 0.5 - 1e-6 || y.halfH < N.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = h.hFOV_deg, l.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, ot(), lt(), Ve());
    }, 180), Ve(), !0;
  }
  function a1() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, ot(), lt(), Ve(), !0) : !1;
  }
  function ca() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Pi(), p.interaction = null, io(), zr(), Ve(), _t(p.pointerPos), de({ localOnly: !0 }), !0;
  }
  function s1(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function hi(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Kr : Fn[s] ? s : p.activeBrushPresetId || Kr;
  }
  function zd() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (Vd() || mc());
  }
  function jd() {
    var i;
    return zd() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function us(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), u = Number((i == null ? void 0 : i.y) || 0), h = s !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== h || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - u) > 0.01;
    return p.pointerPos = { x: l, y: u, inside: h }, y;
  }
  function l1() {
    var A, C;
    if (!jd()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool, l = hi(s), u = Fn[l] || Fn[Kr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), y = Math.max(3, m * 0.5), v = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : jn(p.paintColor), S = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : Z(Math.max(0.16, Number(v.a ?? 1) * 0.3), 0.16, 0.52), P = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : Z(Math.max(0.46, Number(v.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: u,
      radius: y,
      fillStyle: vr(v, S),
      strokeStyle: vr(v, P),
      x: Number(((A = p.pointerPos) == null ? void 0 : A.x) || 0),
      y: Number(((C = p.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function c1() {
    var V, K, ie;
    const i = l1();
    if (!Y) return;
    if (!i) {
      Y.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, u = "999px", h = 0, m = i.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", v = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const S = "rgba(222, 222, 222, 0.72)", P = "rgba(52, 52, 52, 0.72)";
    let A = Number(i.hotspotX ?? s * 0.5), C = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = xl, l = xl, u = "0", y = "0", v = "none", A = CP, C = IP, m = GP(i.fillStyle, P, S);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Q = Math.max(1, Number(((V = i.preset) == null ? void 0 : V.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * Q), l = Math.max(6, i.radius * 2), u = `${Math.min(6, l * 0.42)}px`, h = Number(((ie = (K = i.preset) == null ? void 0 : K.angle) == null ? void 0 : ie.value) || 0) * zi;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    Y.style.display = "block", Y.style.width = `${Math.round(s)}px`, Y.style.height = `${Math.round(l)}px`, Y.style.borderRadius = u, Y.style.border = y, Y.style.boxShadow = v, Y.style.background = m, Y.style.backgroundRepeat = "no-repeat", Y.style.backgroundPosition = "center", Y.style.backgroundSize = "contain", Y.style.transform = `translate(${Math.round(i.x - A)}px, ${Math.round(i.y - C)}px) rotate(${h}deg)`;
  }
  function u1() {
    var he;
    if (!ne || !J) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool;
    if (s === "lasso_fill") return;
    const l = hi(s), u = Fn[l] || Fn[Kr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), y = Math.max(6, m * 0.5), v = s === "eraser", S = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : v ? { r: 1, g: 1, b: 1, a: 0.22 } : jn(p.paintColor), P = i === "mask" ? vr(S, 0.22) : v ? "rgba(255,255,255,0.14)" : vr(S, Z(Math.max(0.18, Number(S.a ?? 1) * 0.34), 0.18, 0.56)), A = i === "mask" ? vr(S, 0.96) : v ? "rgba(255,255,255,0.72)" : vr(S, Z(Math.max(0.56, Number(S.a ?? 1) * 0.96), 0.56, 1));
    let C = y * 2, V = y * 2, K = "999px", ie = 0, Q = P;
    const re = "rgba(222, 222, 222, 0.72)", se = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Q = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const oe = Math.max(1, Number((u == null ? void 0 : u.aspect) ?? 1));
      C = Math.max(16, y * 2 * oe), V = Math.max(10, y * 2), K = `${Math.min(8, V * 0.42)}px`, ie = Number(((he = u == null ? void 0 : u.angle) == null ? void 0 : he.value) || 0) * zi;
    } else s === "brush" ? Q = `radial-gradient(circle at 50% 50%, ${A} 0%, ${P} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (C = Math.max(18, y * 1.8), V = C, Q = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${A} 43%, ${A} 58%, rgba(0,0,0,0) 59%)`) : v && (Q = "rgba(255,255,255,0.12)");
    J.style.width = `${Math.round(C)}px`, J.style.height = `${Math.round(V)}px`, J.style.borderRadius = K, J.style.background = Q, J.style.border = `1px solid ${re}`, J.style.boxShadow = `0 0 0 1px ${se}`, J.style.transform = `rotate(${ie}deg)`, we && (clearTimeout(we), we = 0), ne.classList.remove("fade-out"), ne.classList.add("show");
  }
  function fs() {
    !ne || !ne.classList.contains("show") || (ne.classList.add("fade-out"), we && clearTimeout(we), we = window.setTimeout(() => {
      ne.classList.remove("show", "fade-out"), we = 0;
    }, 180));
  }
  function Hd(i, s, l, u) {
    const h = hi(s), m = Fn[h] || Fn[Kr], y = p.brushSizes[h] ?? 10, v = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), S = s1(u, v), P = l.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), A = {
      id: vo(i),
      actionGroupId: vo("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: v,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: S.radiusModel,
      radiusValue: S.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: P.map((C) => ({ ...C })),
        points: P.map((C) => ({ ...C }))
      }
    };
    return Gp(A, m), Number(m.aspect ?? 1), Number(A.aspect ?? 1), String(A.stampKind || ""), Number(A.size || 0), String(A.radiusModel || ""), Number(A.radiusValue || 0), { ...A.targetSpace }, A;
  }
  function Gd(i, s, l, u) {
    const h = l.map((S) => ({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: Number.isFinite(Number(S == null ? void 0 : S.widthScale)) ? Math.max(0, Number(S.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(S == null ? void 0 : S.pressureLike)) ? Math.max(0, Number(S.pressureLike)) : 1
    })), m = hi(s), y = Fn[m] || Fn[Kr], v = {
      id: vo(i),
      actionGroupId: vo("ag"),
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
    return Gp(v, y), Number(y.aspect ?? 1), Number(v.aspect ?? 1), String(v.stampKind || ""), { ...v.targetSpace }, v;
  }
  function uo(i) {
    const s = _.painting || (_.painting = Oo(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function f1(i, s, l = performance.now()) {
    let u;
    if (p.mode === "frame") {
      const P = ze();
      if (!P || (u = cr(s, P, l), !u)) return !1;
    } else
      u = lr(s, l);
    if (!u) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, y = h[h.length - 1];
    if (y) {
      const P = Math.abs(Number(u.u ?? u.x ?? 0) - Number(y.u ?? y.x ?? 0)), A = Math.abs(Number(u.v ?? u.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (P < 15e-4 && A < 15e-4) return !1;
    }
    const v = {
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...v }), m.push({ ...v });
    const S = zn();
    if (S) {
      const P = p.paintEngine.ensureTarget(S);
      p.paintEngine.appendStrokePoint(P, Number(v.u ?? 0), Number(v.v ?? 0), i.stroke);
    }
    return !0;
  }
  function d1(i, s, l = performance.now()) {
    var y, v;
    let u;
    if (p.mode === "frame") {
      const S = ze();
      if (!S) return !1;
      u = cr(s, S, l);
    } else
      u = lr(s, l);
    const h = (v = (y = i == null ? void 0 : i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : v.points;
    if (!u || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const S = Math.abs(Number(u.u ?? u.x ?? 0) - Number(m.u ?? m.x ?? 0)), P = Math.abs(Number(u.v ?? u.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (S < 15e-4 && P < 15e-4) return !1;
    }
    return h.push({
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function h1(i) {
    var oe, xe, je, Be, et;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    as();
    const l = zn(), u = ta(l.width, l.height);
    if (!Sd(u, s, { w: l.width, h: l.height })) return !1;
    const h = ((xe = (oe = u.ctx) == null ? void 0 : oe.getImageData(0, 0, l.width, l.height)) == null ? void 0 : xe.data) || null;
    if (!h) return !1;
    const m = new Map(hn().map((ge) => [String((ge == null ? void 0 : ge.actionGroupId) || (ge == null ? void 0 : ge.id) || "").trim(), ge ? { ...ge } : null])), y = [], v = [], S = [...In().filter((ge) => String((ge == null ? void 0 : ge.layerKind) || "paint") !== "paint")];
    let P = !1, A = eo().reduce((ge, le) => Math.max(ge, Number((le == null ? void 0 : le.z_index) || 0)), -1) + 1;
    function C(ge, le, pe, _e = 8) {
      let Te = le, Ke = pe, Ie = -1, ut = -1;
      for (let Xe = 0; Xe < pe; Xe += 1)
        for (let Lt = 0; Lt < le; Lt += 1)
          ge[(Xe * le + Lt) * 4 + 3] <= _e || (Lt < Te && (Te = Lt), Xe < Ke && (Ke = Xe), Lt > Ie && (Ie = Lt), Xe > ut && (ut = Xe));
      return Ie < Te || ut < Ke ? null : { minX: Te, minY: Ke, maxX: Ie, maxY: ut };
    }
    const V = C(h, l.width, l.height, 8);
    if (!V) return !1;
    function K(ge, le) {
      return !ge || !le ? !1 : !(ge.maxX < le.minX || le.maxX < ge.minX || ge.maxY < le.minY || le.maxY < ge.minY);
    }
    function ie(ge, le) {
      const pe = ai((ge == null ? void 0 : ge.actionGroupId) || (ge == null ? void 0 : ge.id) || "", "paint", le);
      if (!pe) return null;
      const _e = pe.centerUv.u - pe.halfW, Te = pe.centerUv.u + pe.halfW, Ke = pe.centerUv.v - pe.halfH, Ie = pe.centerUv.v + pe.halfH, ut = l.width, Xe = l.height;
      return {
        minX: Math.floor((_e % 1 + 1) % 1 * ut),
        maxX: Math.ceil((Te % 1 + 1) % 1 * ut),
        minY: Math.floor(Z(Ke, 0, 1) * Xe),
        maxY: Math.ceil(Z(Ie, 0, 1) * Xe),
        wraps: Te - _e >= 1 || _e < 0 || Te > 1
      };
    }
    function Q(ge) {
      const le = (ge == null ? void 0 : ge.bbox) || null;
      if (!le) return null;
      const pe = (ge == null ? void 0 : ge.transform) || {}, _e = l.width, Te = l.height, Ke = Number(le.u0 || 0) + Number(pe.du || 0), Ie = Number(le.u1 || 0) + Number(pe.du || 0), ut = Number(le.v0 || 0) + Number(pe.dv || 0), Xe = Number(le.v1 || 0) + Number(pe.dv || 0);
      return {
        minX: Math.floor((Ke % 1 + 1) % 1 * _e),
        maxX: Math.ceil((Ie % 1 + 1) % 1 * _e),
        minY: Math.floor(Z(ut, 0, 1) * Te),
        maxY: Math.ceil(Z(Xe, 0, 1) * Te),
        wraps: Ie - Ke >= 1 || Ke < 0 || Ie > 1
      };
    }
    function re(ge) {
      return ge ? ge.wraps ? K(V, { minX: 0, maxX: ge.maxX, minY: ge.minY, maxY: ge.maxY }) || K(V, { minX: ge.minX, maxX: l.width - 1, minY: ge.minY, maxY: ge.maxY }) : K(V, ge) : !0;
    }
    function se(ge) {
      if (!ge) return { touched: !1, canvas: null };
      const le = ta(l.width, l.height, { readback: !0 });
      le.ctx.drawImage(ge, 0, 0);
      const pe = le.ctx.getImageData(0, 0, l.width, l.height);
      le.ctx.save(), le.ctx.globalCompositeOperation = "destination-out", le.ctx.drawImage(u.canvas, 0, 0), le.ctx.restore();
      const _e = le.ctx.getImageData(0, 0, l.width, l.height);
      for (let Te = 0; Te < l.width * l.height; Te += 1) {
        if (h[Te * 4 + 3] <= 8) continue;
        const Ie = pe.data[Te * 4 + 3], ut = _e.data[Te * 4 + 3];
        if (Ie > ut)
          return { touched: !0, canvas: le.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function he(ge, le, pe) {
      const _e = Number(pe == null ? void 0 : pe.z_index), Te = bb(ge, le, pe).map((Ke, Ie) => ({
        ...Ke,
        z_index: Number.isFinite(_e) ? _e + Ie * 1e-3 : A + Ie * 1e-3
      }));
      return Te.length && (A = Math.max(A, ...Te.map((Ke) => Number((Ke == null ? void 0 : Ke.z_index) || 0))) + 1), Te;
    }
    for (const ge of hn()) {
      const le = String((ge == null ? void 0 : ge.actionGroupId) || (ge == null ? void 0 : ge.id) || "").trim();
      if (!le) continue;
      const pe = or(le, "paint");
      if (!re(ie(ge, pe))) {
        v.push(ge), y.push(...pe);
        continue;
      }
      const _e = ((Be = (je = p.paintEngine) == null ? void 0 : je.getGroupTarget) == null ? void 0 : Be.call(je, le)) || null, Te = ((et = _e == null ? void 0 : _e.committedPaint) == null ? void 0 : et.canvas) || null;
      if (!Te) {
        v.push(ge), y.push(...pe);
        continue;
      }
      const Ke = se(Te);
      if (!Ke.touched || !Ke.canvas) {
        v.push(ge), y.push(...pe);
        continue;
      }
      P = !0;
      const Ie = he(Ke.canvas, "paint", m.get(le) || ge || {});
      S.push(...Ie);
    }
    for (const ge of In().filter((le) => String((le == null ? void 0 : le.layerKind) || "paint") === "paint")) {
      if (!re(Q(ge))) {
        S.push(ge);
        continue;
      }
      const le = ad(ge, null);
      if (!le) {
        S.push(ge);
        continue;
      }
      const pe = se(le);
      if (!pe.touched || !pe.canvas) {
        S.push(ge);
        continue;
      }
      P = !0;
      const _e = he(pe.canvas, "paint", ge);
      S.push(..._e);
    }
    return P ? (_.painting.paint.strokes = y, _.painting.groups = v.sort((ge, le) => Number((ge == null ? void 0 : ge.z_index) || 0) - Number((le == null ? void 0 : le.z_index) || 0)), _.painting.raster_objects = S.sort((ge, le) => Number((ge == null ? void 0 : ge.z_index) || 0) - Number((le == null ? void 0 : le.z_index) || 0)), Zo({ preservePanelValues: !1 }), !0) : !1;
  }
  function p1(i) {
    var y, v, S, P, A;
    if ((((v = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : v.rawPoints) || ((P = (S = i.stroke) == null ? void 0 : S.geometry) == null ? void 0 : P.points) || []).length >= 1) {
      gc(i);
      const C = zn();
      C && (String(((A = i.stroke) == null ? void 0 : A.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(C) : p.paintEngine.commitActiveStroke(i.stroke, C)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Hd(i.layerKind, l.toolKind, [], u);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = zn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function m1(i) {
    var y, v;
    if ((((v = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : v.points) || []).length >= 3) {
      gc(i);
      const S = zn();
      S && p.paintEngine.commitActiveStroke(i.stroke, S), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Gd(i.layerKind, l.toolKind, [], u);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = zn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function gc(i) {
    var m, y, v, S;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((y = i == null ? void 0 : i.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = lc(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), h1(i);
    const u = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (u && $f((v = i.stroke) == null ? void 0 : v.actionGroupId), uo(i.layerKind).push(i.stroke), !0);
    const h = s.rawPoints || s.points || [];
    return h.length < 1 ? !1 : (s.processedPoints = lc(h, i.stroke.targetSpace, !0), u && $f((S = i.stroke) == null ? void 0 : S.actionGroupId), uo(i.layerKind).push(i.stroke), !0);
  }
  function Kd(i) {
    var l;
    if (t === "cutout" && p.mode === "frame") {
      const u = ze(), h = nn(u);
      if (!u || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const y = cr(i, u, performance.now()), v = y ? ao(y) : null;
      if (v)
        for (const P of ac()) {
          if (!gt(P)) continue;
          const A = oa(P, v);
          if (A && Number(A.x) >= 0 && Number(A.x) <= 1 && Number(A.y) >= 0 && Number(A.y) <= 1) {
            const C = qt(P);
            if (C != null && C.visible) return { item: P, geom: C };
          }
        }
      const S = Hl(!1).slice().sort((P, A) => Number((A == null ? void 0 : A.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0));
      for (const P of S) {
        if (P.type === "strokeGroup") {
          const V = no(Xo("paint", P.actionGroupId || P.id || ""));
          if (!V) continue;
          const K = qt(V);
          if (!(K != null && K.visible)) continue;
          const ie = Array.isArray(K.strokePaths) ? K.strokePaths : [];
          for (const Q of ie) {
            const re = Array.isArray(Q == null ? void 0 : Q.points) ? Q.points : [];
            if (!re.length) continue;
            if (Q.closed && re.length >= 3 && Ur(i, re)) return { item: V, geom: K };
            const se = Math.max(8, Number((Q == null ? void 0 : Q.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < re.length - 1; he += 1)
              if (iu(i, re[he], re[he + 1]) <= se * se) return { item: V, geom: K };
            if (re.length === 1 && gi(i, re[0]) <= se * se) return { item: V, geom: K };
          }
          continue;
        }
        if (P.type === "rasterObject") {
          const V = to(qo(((l = P.item) == null ? void 0 : l.id) || P.id || ""));
          if (!V) continue;
          const K = qt(V);
          if (od(V, K, i, y)) return { item: V, geom: K };
          continue;
        }
        const A = P.item;
        if (!A || !gt(A) || !v) continue;
        const C = oa(A, v);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const V = qt(A);
          if (V != null && V.visible) return { item: A, geom: V };
        }
      }
      return null;
    }
    const s = [
      ...Hl(!1).slice().sort((u, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((u) => {
        var h;
        return u.type === "strokeGroup" ? no(Xo("paint", u.actionGroupId || u.id || "")) : u.type === "rasterObject" ? to(qo(((h = u.item) == null ? void 0 : h.id) || u.id || "")) : u.item;
      }).filter(Boolean),
      ...t === "cutout" ? ac().filter((u) => Vn(u)) : []
    ];
    for (const u of s) {
      if (en(u)) {
        const m = qt(u);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const v of y) {
          const S = Array.isArray(v == null ? void 0 : v.points) ? v.points : [];
          if (!S.length) continue;
          if (v.closed && S.length >= 3 && Ur(i, S)) return { item: u, geom: m };
          const P = Math.max(8, Number((v == null ? void 0 : v.lineWidth) || 0) * 0.5 + 6);
          for (let A = 0; A < S.length - 1; A += 1)
            if (iu(i, S[A], S[A + 1]) <= P * P) return { item: u, geom: m };
          if (S.length === 1 && gi(i, S[0]) <= P * P) return { item: u, geom: m };
        }
        continue;
      }
      if (pn(u)) {
        const m = qt(u);
        if (!(m != null && m.visible)) continue;
        if (od(u, m, i)) return { item: u, geom: m };
        continue;
      }
      const h = qt(u);
      if (h.visible && Ur(i, h.corners))
        return { item: u, geom: h };
    }
    return null;
  }
  function yc(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (gt(l)) return Ou(i, s);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((y) => gi(y, s) <= 121);
      if (h >= 0) {
        const y = i.corners[h], v = y.x - i.center.x, S = y.y - i.center.y, P = v * S >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: P };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const y of m) {
        const v = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
        if (y.closed && v.length >= 3 && Ur(s, v)) return { kind: "move", cursor: "default" };
        const S = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
        for (let P = 0; P < v.length - 1; P += 1)
          if (iu(s, v[P], v[P + 1]) <= S * S) return { kind: "move", cursor: "default" };
      }
      return Ur(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => gi(m, s) <= 121);
      if (h >= 0) {
        const m = i.corners[h], y = m.x - i.center.x, v = m.y - i.center.y, S = y * v >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: S };
      }
      return Ur(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const h = i.edgeMidpoints.find((m) => gi(m, s) <= 169);
      if (h) {
        const m = h.edge === "left" || h.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: h.edge, mid: h };
      }
    }
    const u = i.corners.findIndex((h) => gi(h, s) <= 121);
    if (u >= 0) {
      const h = i.corners[u], m = h.x - i.center.x, y = h.y - i.center.y, v = m * y >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: u, cursor: v };
    }
    return gi(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Ur(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function Bd(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function g1(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function y1(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((h) => g1(i, h))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, u = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Ur({ x: l, y: u }, s.corners);
  }
  function _t(i) {
    if (c1(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? D("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" || p.interaction.kind === "roll_frame" ? D("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? D("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? D(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? D("grabbing") : D("default");
      return;
    }
    if (jd()) {
      D("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        D(MP);
        return;
      }
      if (p.primaryTool !== "cursor") {
        D("default");
        return;
      }
      D("grab");
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      D("default");
      return;
    }
    const s = Pt(), l = s ? qt(s) : null, u = s ? Sn(s) : !1, h = u ? { kind: "none", cursor: "default" } : yc(l, i, s);
    if (!u && h.kind !== "none") {
      D(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && Kd(i)) {
      D("default");
      return;
    }
    D(p.mode === "pano" ? "grab" : "default");
  }
  function Ye() {
    var S, P;
    if (!kt) return;
    if (p.mode === "frame") {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = Pt(), s = ar();
    if (!i && s.length === 0 || p.interaction) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = qa(), u = MM({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? Xa(s) : qt(i),
      allLocked: Ul(s),
      anyLocked: s.some((A) => Sn(A)),
      selectedLocked: Sn(i),
      activeAspect: Xr(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: tn,
      isStickerHidden: ro,
      canRestoreSelectedToInitial: dy,
      iconSet: Me
    });
    if (!u.visible) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (A, C, { requireFitsBelow: V = !0 } = {}) => {
      var xe, je, Be;
      const ie = Number((xe = u.anchor) == null ? void 0 : xe.minX), Q = Number((je = u.anchor) == null ? void 0 : je.maxX), re = Number((Be = u.anchor) == null ? void 0 : Be.maxY);
      if (![ie, Q, re].every(Number.isFinite)) return null;
      const se = Math.max(14, N.width - A - 14), he = Z((ie + Q) * 0.5 - A * 0.5, 14, se), oe = re + 18;
      return !Number.isFinite(he) || !Number.isFinite(oe) || V && oe + C > N.height - 14 ? null : { left: he, top: oe };
    }, m = Math.max(1, Number(((S = p.menuSize) == null ? void 0 : S.w) || 220)), y = Math.max(1, Number(((P = p.menuSize) == null ? void 0 : P.h) || 40)), v = h(m, y, { requireFitsBelow: !1 });
    if (!v) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    I.selectionMenu = {
      visible: !0,
      left: v.left,
      top: v.top,
      items: u.items
    }, requestAnimationFrame(() => {
      if (!kt || I.selectionMenu.visible !== !0) return;
      const A = kt.getBoundingClientRect(), C = Math.round(Number((A == null ? void 0 : A.width) || 0)) || 220, V = Math.round(Number((A == null ? void 0 : A.height) || 0)) || 40;
      p.menuSize = { w: C, h: V, measured: !0 };
      const K = h(C, V);
      if (!K) {
        I.selectionMenu.visible = !1;
        return;
      }
      I.selectionMenu.left = K.left, I.selectionMenu.top = K.top;
    });
  }
  function Pi() {
    ce.timer && (clearTimeout(ce.timer), ce.timer = 0), ce.target = null, I.tooltip.visible = !1;
  }
  function b1(i) {
    if (!Ut || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    I.tooltip.text = s, I.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var Q, re;
      if (ce.target !== l || !Ut || !(l != null && l.isConnected)) return;
      const u = U.getBoundingClientRect(), h = l.getBoundingClientRect(), m = 8, y = 12, v = Math.round(Number(((Q = Ut.getBoundingClientRect()) == null ? void 0 : Q.width) || 0)) || 100, S = Math.round(Number(((re = Ut.getBoundingClientRect()) == null ? void 0 : re.height) || 0)) || 24, P = !!l.closest(".pano-floating-left"), A = !!l.closest(".pano-frame-rail"), C = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let V = "", K = h.left - u.left + h.width * 0.5 - v * 0.5, ie = h.top - u.top - S - y;
      if (P)
        V = "tool-rail", K = h.right - u.left + 10, ie = h.top - u.top + h.height * 0.5 - S * 0.5, K = Z(K, m, Math.max(m, u.width - v - m)), ie = Z(ie, m, Math.max(m, u.height - S - m));
      else if (A)
        V = "frame-rail", K = h.left - u.left - v - 10, ie = h.top - u.top + h.height * 0.5 - S * 0.5, K = Z(K, m, Math.max(m, u.width - v - m)), ie = Z(ie, m, Math.max(m, u.height - S - m));
      else if (C) {
        V = "footer";
        const se = l.closest(".pano-paint-footer"), he = se ? se.getBoundingClientRect() : h;
        K = he.left - u.left + he.width * 0.5 - v * 0.5, ie = he.bottom - u.top + 5, K = Z(K, m, Math.max(m, u.width - v - m)), ie = Math.max(m, ie);
      }
      K = Z(K, m, Math.max(m, u.width - v - m)), ie = Math.max(m, ie), I.tooltip.left = K, I.tooltip.top = ie, I.tooltip.variant = V, I.tooltip.visible = !0;
    });
  }
  const fn = pf({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Kt(Number(i.yaw || 0)), p.viewPitch = Z(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = Z(Number(i.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = N.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || N.clientWidth || 0)),
        h: Math.max(1, Number(i.height || N.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = _.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = _.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: ui,
    onInteraction: () => {
      Oe.backgroundDirty = !0, Oe.dirty = !0;
    }
  });
  function v1(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += og(s, i.lastAngle), i.lastAngle = s;
    const u = ag(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = u, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = u, h.displayValue = bo(u), h.fillPct = (u + 180) / 360 * 100), Hr(), bc(i), de({ localOnly: !0 });
  }
  function _1(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const u = w0(i.rollGesture, s, l);
    if (!u) return;
    i.rollGesture = u.gesture, i.center = u.gesture.center, i.lastAngle = u.gesture.lastAngle, i.accumulatedRad = u.gesture.accumulatedRad, i.shot.roll_deg = u.rollDeg, i.changed = i.changed || Math.abs(u.gesture.accumulatedRad) > 1e-9;
    const h = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = u.rollDeg, h.displayValue = bo(u.rollDeg), h.fillPct = (u.rollDeg + 180) / 360 * 100), Hr(), bc(i), de({ localOnly: !0 });
  }
  const Ud = (i, s) => {
    const l = Ni(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function bc(i) {
    var y, v;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    ce.timer && (clearTimeout(ce.timer), ce.timer = 0), ce.target = null;
    const s = nn(i.shot), l = (y = N.getBoundingClientRect) == null ? void 0 : y.call(N), u = (v = U.getBoundingClientRect) == null ? void 0 : v.call(U);
    if (!s || !l || !u || N.width <= 0 || N.height <= 0) return;
    const h = l.width / N.width, m = l.height / N.height;
    I.tooltip.text = `${bo(i.shot.roll_deg)}°`, I.tooltip.left = l.left - u.left + (s.x + s.w * 0.5) * h, I.tooltip.top = l.top - u.top + (s.y + s.h * 0.5) * m + 12, I.tooltip.variant = "roll", I.tooltip.visible = !0;
  }
  rt == null || rt.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const s = ze();
    if (!s || s.locked === !0) return;
    const l = nn(s);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Ud(i, u);
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
    }, (m = rt.setPointerCapture) == null || m.call(rt, i.pointerId), i.preventDefault(), Hr(), bc(p.interaction), de({ localOnly: !0 });
  }), rt == null || rt.addEventListener("pointermove", (i) => {
    var s;
    ((s = p.interaction) == null ? void 0 : s.kind) !== "roll_frame" || p.interaction.source !== "knob" || v1(
      p.interaction,
      Ud(i, p.interaction.center),
      i
    );
  });
  const w1 = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (ot(), lt(), Ve()), p.interaction = null, Pi(), zr(), Hr(), de());
  };
  rt == null || rt.addEventListener("pointerup", w1), rt == null || rt.addEventListener("pointercancel", () => ca()), rt == null || rt.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && ca();
  }), rt == null || rt.addEventListener("dblclick", (i) => {
    const s = p.mode === "frame" && !r ? ze() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, ot(), lt(), Ve(), Hr(), de(), i.preventDefault());
  }), N.onpointerdown = (i) => {
    Ee.selection && (Ee.selection = null, Mi());
    const s = Ni(i);
    if (it = s, us(s, !0), p.viewTween = null, fn.state.inertia.active = !1, fn.state.inertia.vx = 0, fn.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode === "frame") {
        const v = ze();
        if (!v || r || v.locked === !0) return;
        p.interaction = {
          kind: "pan_frame",
          shot: v,
          last: s,
          start: {
            yaw_deg: Number(v.yaw_deg || 0),
            pitch_deg: Number(v.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const v = p.mode === "unwrap" ? s : cs(i);
        p.interaction = { kind: "view", last: v, lastTs: performance.now() }, fn.startDrag(v.x, v.y, i.pointerId, performance.now());
      }
      _t(s), N.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const v = ze(), S = nn(v);
      if (!v || v.locked === !0 || !S) return;
      const P = _0({
        frame: S,
        point: s,
        startRollDeg: Number(v.roll_deg ?? v.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!P) return;
      p.interaction = {
        kind: "roll_frame",
        shot: v,
        center: P.center,
        lastAngle: P.lastAngle,
        accumulatedRad: P.accumulatedRad,
        rollGesture: P,
        start: { roll_deg: Number(v.roll_deg ?? v.rot_deg ?? 0) },
        changed: !1,
        altStarted: P.source === "alt",
        source: P.source
      }, N.setPointerCapture(i.pointerId), i.preventDefault(), Hr(), de({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      const v = ze();
      if (!v || r || v.locked === !0) return;
      p.interaction = {
        kind: "pan_frame",
        shot: v,
        last: s,
        start: { yaw_deg: Number(v.yaw_deg || 0), pitch_deg: Number(v.pitch_deg || 0) },
        changed: !1
      }, _t(s), N.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (p.mode === "pano") {
        const v = cs(i);
        p.interaction = { kind: "view", last: v, lastTs: performance.now() }, fn.startDrag(v.x, v.y, i.pointerId, performance.now()), _t(s), N.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (j && !j.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (Vd() || mc())) {
      mr();
      const v = p.primaryTool === "mask" ? "mask" : "paint", S = p.primaryTool === "mask" ? p.maskTool : p.paintTool, P = p.mode === "frame" && mc() ? ze() : null, A = { kind: "ERP_GLOBAL" }, C = P ? cr(s, P, performance.now()) : lr(s, performance.now());
      if (!C) {
        _t(s);
        return;
      }
      p.interaction = {
        kind: S === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: v,
        _livePreviewToken: vo("live"),
        stroke: S === "lasso_fill" ? Gd(v, S, [C], A) : Hd(v, S, [C], A)
      }, io();
      const V = zn();
      if (V)
        if (p.paintEngine.beginStroke(p.interaction.stroke, V), p.interaction.kind === "paint_stroke") {
          const K = p.paintEngine.ensureTarget(V), ie = Number((C == null ? void 0 : C.u) ?? (C == null ? void 0 : C.x) ?? 0), Q = Number((C == null ? void 0 : C.v) ?? (C == null ? void 0 : C.y) ?? 0);
          p.paintEngine.appendStrokePoint(K, ie, Q, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, V);
      _t(s), N.setPointerCapture(i.pointerId), de();
      return;
    }
    const l = ar(), u = Pt(), h = l.length > 1 ? Xa(l) : u ? qt(u) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: s, current: s }, _t(s), N.setPointerCapture(i.pointerId), de({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (h != null && h.visible)) {
      if ((l.some((S) => Sn(S)) ? { kind: "none" } : yc(h, s)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: l.map((S) => S),
          offset: { x: s.x - h.center.x, y: s.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: l.filter((S) => gt(S)).map((S) => ({
            id: String(S.id || ""),
            yaw_deg: Number(Xt(S).yaw_deg || 0),
            pitch_deg: Number(Xt(S).pitch_deg || 0),
            center: (() => {
              var A, C;
              const P = qt(S);
              return P != null && P.visible ? { x: Number(((A = P.center) == null ? void 0 : A.x) || 0), y: Number(((C = P.center) == null ? void 0 : C.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: l.filter((S) => en(S)).map((S) => ({
            id: String(S.actionGroupId || S.id || ""),
            layerKind: String(S.layerKind || "paint"),
            snapshot: gn(or(S.actionGroupId, S.layerKind)),
            frameSnapshot: gn(ai(S.actionGroupId, S.layerKind)),
            center: (() => {
              var A, C;
              const P = qt(S);
              return P != null && P.visible ? { x: Number(((A = P.center) == null ? void 0 : A.x) || 0), y: Number(((C = P.center) == null ? void 0 : C.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Bl(S.actionGroupId, S.layerKind)
          })),
          rasterSnapshots: l.filter((S) => pn(S)).map((S) => ({
            id: an(S.rasterObjectId || S.id || ""),
            snapshot: gn(In().find((P) => String((P == null ? void 0 : P.id) || "") === an(S.rasterObjectId || S.id || ""))),
            center: (() => {
              var A, C;
              const P = qt(S);
              return P != null && P.visible ? { x: Number(((A = P.center) == null ? void 0 : A.x) || 0), y: Number(((C = P.center) == null ? void 0 : C.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: fd(S)
          }))
        }, _t(s), N.setPointerCapture(i.pointerId);
        return;
      }
    } else if (u && (h != null && h.visible)) {
      const v = Sn(u) ? { kind: "none" } : yc(h, s, u);
      if (v.kind === "scale") {
        p.interaction = en(u) ? {
          kind: "scale_stroke_group",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: gn(or(u.actionGroupId, u.layerKind)),
          frameSnapshot: gn(ai(u.actionGroupId, u.layerKind)),
          cursor: v.cursor
        } : pn(u) ? {
          kind: "scale_raster_object",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: gn(In().find((S) => String((S == null ? void 0 : S.id) || "") === an(u.rasterObjectId || u.id || ""))),
          cursor: v.cursor
        } : {
          kind: "scale",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(Xt(u).hFOV_deg || 20),
          startVFOV: Number(Xt(u).vFOV_deg || 20),
          cursor: v.cursor
        }, _t(s), N.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "scale_x" || v.kind === "scale_y") {
        p.interaction = {
          kind: v.kind,
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(Xt(u).hFOV_deg || 20),
          startVFOV: Number(Xt(u).vFOV_deg || 20),
          cursor: v.cursor,
          edge: v.edge
        }, _t(s), N.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "rotate") {
        p.interaction = en(u) ? {
          kind: "rotate_stroke_group",
          item: u,
          center: h.center,
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x),
          snapshot: gn(or(u.actionGroupId, u.layerKind)),
          frameSnapshot: gn(ai(u.actionGroupId, u.layerKind))
        } : {
          kind: "rotate",
          item: u,
          center: h.center,
          startRot: Number(Xt(u).rot_deg || Xt(u).roll_deg || 0),
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x)
        }, _t(s), N.setPointerCapture(i.pointerId);
        return;
      }
      if (v.kind === "move") {
        if (en(u)) {
          const S = p.mode === "frame" ? (() => {
            const P = ze();
            return P ? cr(s, P, performance.now()) : null;
          })() : lr(s, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: u,
            startUv: S,
            snapshot: gn(or(u.actionGroupId, u.layerKind)),
            frameSnapshot: gn(ai(u.actionGroupId, u.layerKind))
          }, _t(s), N.setPointerCapture(i.pointerId);
          return;
        }
        if (pn(u)) {
          const S = p.mode === "frame" ? (() => {
            const P = ze();
            return P ? cr(s, P, performance.now()) : null;
          })() : lr(s, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: u,
            startUv: S,
            snapshot: gn(In().find((P) => String((P == null ? void 0 : P.id) || "") === an(u.rasterObjectId || u.id || "")))
          }, _t(s), N.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: u,
          offset: { x: s.x - h.center.x, y: s.y - h.center.y }
        }, _t(s), N.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = Kd(s);
    if (m) {
      const v = p.selectedId !== m.item.id;
      if (v && p.selectedId && (ot(), On()), pr(m.item), t === "cutout" && v && (p.cutoutAspectOpen = !1), v && Ve(), Ye(), de(), Sn(m.item)) {
        _t(s);
        return;
      }
      p.interaction = {
        kind: en(m.item) ? "move_stroke_group" : pn(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: s.x - m.geom.center.x, y: s.y - m.geom.center.y },
        startUv: en(m.item) || pn(m.item) ? p.mode === "frame" ? (() => {
          const S = ze();
          return S ? cr(s, S, performance.now()) : null;
        })() : lr(s, performance.now()) : null,
        snapshot: en(m.item) ? gn(or(m.item.actionGroupId, m.item.layerKind)) : pn(m.item) ? gn(In().find((S) => String((S == null ? void 0 : S.id) || "") === an(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: en(m.item) ? gn(ai(m.item.actionGroupId, m.item.layerKind)) : null
      }, _t(s), N.setPointerCapture(i.pointerId);
      return;
    }
    const y = !!p.selectedId;
    if (y && (ot(), On()), Zo(), y && Ve(), Ye(), de(), p.mode === "pano") {
      const v = cs(i);
      p.interaction = { kind: "view", last: v, lastTs: performance.now() }, fn.startDrag(v.x, v.y, i.pointerId, performance.now()), _t(s), N.setPointerCapture(i.pointerId);
    }
  };
  function x1(i, s) {
    if (!k || !Dt.playing) return;
    if (Dt.stop(), i.kind === "move_multi") {
      const h = Xa(i.items);
      if (!(h != null && h.visible)) return;
      i.offset = { x: s.x - h.center.x, y: s.y - h.center.y }, i.startCenter = { x: h.center.x, y: h.center.y };
      for (const m of i.stickerSnapshots) {
        const y = i.items.find((S) => String((S == null ? void 0 : S.id) || "") === m.id), v = y ? qt(y) : null;
        v != null && v.visible && (m.yaw_deg = Number(Xt(y).yaw_deg || 0), m.pitch_deg = Number(Xt(y).pitch_deg || 0), m.center = { x: v.center.x, y: v.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const l = qt(i.item);
    if (!(l != null && l.visible)) return;
    const u = Xt(i.item);
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
  N.onpointermove = (i) => {
    var u, h, m, y, v, S, P, A, C, V, K, ie, Q, re, se, he, oe, xe, je, Be, et, ge;
    const s = Ni(i);
    if (us(s, !0), !p.interaction) {
      _t(s);
      return;
    }
    _t(s);
    const l = p.interaction;
    if (it && (s.x !== it.x || s.y !== it.y)) {
      const le = it;
      it = null, l.kind !== "view" && l.kind !== "marquee_select" && x1(l, le);
    }
    if (l.kind === "paint_stroke") {
      const le = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let pe = !1;
      le.forEach((_e) => {
        const Te = Ni(_e);
        if (p.mode === "frame") {
          const Ke = ze(), Ie = Ke ? nn(Ke) : null;
          if (Ie) {
            const ut = (Te.x - Ie.x) / Math.max(1, Ie.w), Xe = (Te.y - Ie.y) / Math.max(1, Ie.h);
            if (!(ut >= 0 && ut <= 1 && Xe >= 0 && Xe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, p1(l));
          }
        }
        f1(l, Te, performance.now()) && (pe = !0);
      }), pe && de({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const le = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let pe = !1;
      if (le.forEach((_e) => {
        const Te = Ni(_e);
        if (p.mode === "frame") {
          const Ke = ze(), Ie = Ke ? nn(Ke) : null;
          if (Ie) {
            const ut = (Te.x - Ie.x) / Math.max(1, Ie.w), Xe = (Te.y - Ie.y) / Math.max(1, Ie.h);
            if (!(ut >= 0 && ut <= 1 && Xe >= 0 && Xe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, m1(l));
          }
        }
        d1(l, Te, performance.now()) && (pe = !0);
      }), pe) {
        const _e = zn();
        _e && p.paintEngine.updateActiveStroke(l.stroke, _e), de({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const le = performance.now(), pe = p.mode === "unwrap" ? s : cs(i);
      fn.moveDrag(pe.x, pe.y, p.mode === "unwrap" ? "unwrap" : "pano", le), l.lastTs = le, l.last = pe, de({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const le = pc(l.shot);
      if (!le || !l.shot) return;
      const pe = s.x - l.last.x, _e = s.y - l.last.y, Te = x0(l.shot, {
        dx: pe,
        dy: _e,
        focalPx: le.focalPx,
        invertX: ((u = _.ui_settings) == null ? void 0 : u.invert_view_x) === !0,
        invertY: ((h = _.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      l.shot.yaw_deg = Te.yaw_deg, l.shot.pitch_deg = Te.pitch_deg, l.changed = l.changed || Math.abs(pe) > 0 || Math.abs(_e) > 0, l.last = s, de({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      _1(l, s, i);
      return;
    }
    if (l.kind === "move") {
      const le = s.x - l.offset.x, pe = s.y - l.offset.y;
      if (p.mode === "frame" && t === "cutout") {
        const _e = ze(), Te = nn(_e);
        if (!_e || !Te) return;
        const Ke = {
          x: Z((le - Te.x) / Math.max(1, Te.w), 0, 1),
          y: Z((pe - Te.y) / Math.max(1, Te.h), 0, 1)
        }, Ie = sc(_e, Ke);
        if (!Ie) return;
        const ut = Cs(Ie);
        ir(l.item, { yaw_deg: ut.yaw, pitch_deg: ut.pitch });
      } else if (p.mode === "unwrap") {
        const _e = ui(), Te = Z((le - _e.x) / Math.max(_e.w, 1), 0, 1), Ke = Z((pe - _e.y) / Math.max(_e.h, 1), 0, 1);
        ir(l.item, { yaw_deg: Kt(Te * 360 - 180), pitch_deg: Z(90 - Ke * 180, -90, 90) });
      } else {
        const _e = ec(le, pe), Te = Cs(_e);
        ir(l.item, { yaw_deg: Te.yaw, pitch_deg: Te.pitch });
      }
      gt(l.item) && Gt(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const le = p.mode === "frame" ? (() => {
        const Te = ze();
        return Te ? cr(s, Te, performance.now()) : null;
      })() : lr(s, performance.now());
      if (!le || !l.startUv) return;
      const pe = Xn(Number(le.u || 0), Number(l.startUv.u || 0)), _e = Number(le.v || 0) - Number(l.startUv.v || 0);
      zf((m = l.item) == null ? void 0 : m.actionGroupId, pe, _e, l.snapshot, (y = l.item) == null ? void 0 : y.layerKind, l.frameSnapshot) && (sr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const le = p.mode === "frame" ? (() => {
        const Te = ze();
        return Te ? cr(s, Te, performance.now()) : null;
      })() : lr(s, performance.now());
      if (!le || !l.startUv) return;
      const pe = Xn(Number(le.u || 0), Number(l.startUv.u || 0)), _e = Number(le.v || 0) - Number(l.startUv.v || 0);
      Hf(((v = l.item) == null ? void 0 : v.rasterObjectId) || ((S = l.item) == null ? void 0 : S.id) || "", pe, _e, l.snapshot) && (so(), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      ty(((P = l.item) == null ? void 0 : P.rasterObjectId) || ((A = l.item) == null ? void 0 : A.id) || "", pe, l.snapshot) && (so(), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const le = s.x - Number(((C = l.offset) == null ? void 0 : C.x) || 0), pe = s.y - Number(((V = l.offset) == null ? void 0 : V.y) || 0);
      let _e = !1, Te = !1, Ke = !1;
      const Ie = le - Number(((K = l.startCenter) == null ? void 0 : K.x) || le), ut = pe - Number(((ie = l.startCenter) == null ? void 0 : ie.y) || pe);
      for (const Xe of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const Lt = (t === "cutout" ? Kl() : Yt()).find((At) => String((At == null ? void 0 : At.id) || "") === String(Xe.id || ""));
        if (!Lt || !gt(Lt)) continue;
        const dn = {
          x: Number(((Q = Xe.center) == null ? void 0 : Q.x) || 0) + Ie,
          y: Number(((re = Xe.center) == null ? void 0 : re.y) || 0) + ut
        };
        if (p.mode === "frame" && t === "cutout") {
          const At = ze(), Rt = nn(At);
          if (!At || !Rt) continue;
          const Ai = {
            x: Z((dn.x - Rt.x) / Math.max(1, Rt.w), 0, 1),
            y: Z((dn.y - Rt.y) / Math.max(1, Rt.h), 0, 1)
          }, dh = sc(At, Ai);
          if (!dh) continue;
          const hh = Cs(dh);
          ir(Lt, { yaw_deg: hh.yaw, pitch_deg: hh.pitch });
        } else if (p.mode === "unwrap") {
          const At = ui(), Rt = Z((dn.x - At.x) / Math.max(At.w, 1), 0, 1), Ai = Z((dn.y - At.y) / Math.max(At.h, 1), 0, 1);
          ir(Lt, { yaw_deg: Kt(Rt * 360 - 180), pitch_deg: Z(90 - Ai * 180, -90, 90) });
        } else {
          const At = ec(dn.x, dn.y), Rt = Cs(At);
          ir(Lt, { yaw_deg: Rt.yaw, pitch_deg: Rt.pitch });
        }
        _e = !0;
      }
      for (const Xe of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const Lt = {
          x: Number(((se = Xe.center) == null ? void 0 : se.x) || 0) + Ie,
          y: Number(((he = Xe.center) == null ? void 0 : he.y) || 0) + ut
        }, dn = p.mode === "frame" ? (() => {
          const Rt = ze();
          return Rt ? cr(Lt, Rt, performance.now()) : null;
        })() : lr(Lt, performance.now()), At = Xe.centerUv || null;
        if (dn && At) {
          const Rt = Xn(Number(dn.u || 0), Number(At.u || 0)), Ai = Number(dn.v || 0) - Number(At.v || 0);
          zf(Xe.id, Rt, Ai, Xe.snapshot, Xe.layerKind, Xe.frameSnapshot) && (_e = !0, Te = !0);
        }
      }
      for (const Xe of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const Lt = {
          x: Number(((oe = Xe.center) == null ? void 0 : oe.x) || 0) + Ie,
          y: Number(((xe = Xe.center) == null ? void 0 : xe.y) || 0) + ut
        }, dn = p.mode === "frame" ? (() => {
          const Rt = ze();
          return Rt ? cr(Lt, Rt, performance.now()) : null;
        })() : lr(Lt, performance.now()), At = Xe.centerUv || null;
        if (dn && At) {
          const Rt = Xn(Number(dn.u || 0), Number(At.u || 0)), Ai = Number(dn.v || 0) - Number(At.v || 0);
          Hf(Xe.id, Rt, Ai, Xe.snapshot) && (_e = !0, Ke = !0);
        }
      }
      _e && (Te ? sr({ rebuildPaintEngine: !1 }) : Ke ? so() : Gt(), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      jf((je = l.item) == null ? void 0 : je.actionGroupId, pe, 0, l.snapshot, (Be = l.item) == null ? void 0 : Be.layerKind, l.frameSnapshot) && (sr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let le = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * zi;
      i.shiftKey && (le = Math.round(le / 45) * 45), jf((et = l.item) == null ? void 0 : et.actionGroupId, 1, le, l.snapshot, (ge = l.item) == null ? void 0 : ge.layerKind, l.frameSnapshot) && (sr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = s, de({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      ir(l.item, { hFOV_deg: Z(l.startHFOV * pe, 1, 179), vFOV_deg: Z(l.startVFOV * pe, 1, 179) }), xn(l.item) || (l.item.aspect_id = $i(l.item)), gt(l.item) && Gt(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      ir(l.item, { hFOV_deg: Z(l.startHFOV * pe, 1, 179) }), xn(l.item) || (l.item.aspect_id = $i(l.item)), gt(l.item) && Gt(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      ir(l.item, { vFOV_deg: Z(l.startVFOV * pe, 1, 179) }), xn(l.item) || (l.item.aspect_id = $i(l.item)), gt(l.item) && Gt(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let pe = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * zi, _e = l.startRot - pe;
      i.shiftKey && (_e = Math.round(_e / 45) * 45), ir(l.item, { [gt(l.item) ? "rot_deg" : "roll_deg"]: _e }), gt(l.item) && Gt(), de({ localOnly: !0 });
    }
  }, N.onpointerup = () => {
    var s, l, u, h, m, y, v, S;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        io();
        const P = gc(p.interaction), A = !!p.interaction._hasCommittedSegments;
        if (P || A) {
          sr();
          const C = String(((u = p.interaction.stroke) == null ? void 0 : u.actionGroupId) || "").trim();
          if (C) {
            const K = hn().find((ie) => String((ie == null ? void 0 : ie.actionGroupId) || "") === C);
            K && (K.frame = null);
          }
          const V = zn();
          V && (P ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(V), _d()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, V) : p.paintEngine.cancelActiveStroke(V)), ot(), On(), Ve(), Ye(), e.setDirtyCanvas(!0, !0), de();
        } else {
          const C = zn();
          C && p.paintEngine.cancelActiveStroke(C);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const P = Bd(p.interaction.start, p.interaction.current), C = [
          ...t === "cutout" ? ac().filter((V) => !Vn(V)) : [...Yt()],
          ...J0(),
          ...Z0()
        ].filter((V) => y1(P, qt(V)));
        iy(C, ((y = C[C.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && C.length && (p.cutoutAspectOpen = !1), Ve(), Ye(), de();
      } else if (((v = p.interaction) == null ? void 0 : v.kind) === "pan_frame" || ((S = p.interaction) == null ? void 0 : S.kind) === "roll_frame")
        p.interaction.changed && (ot(), lt(), Ve());
      else if (p.interaction && p.interaction.kind !== "view") {
        let P = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (P = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (P = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (P = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (P = !0), P && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? sr({ rebuildPaintEngine: !0 }) : so()), ot(), On(), e.setDirtyCanvas(!0, !0), lo(), Ye(), de();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Pi(), io(), i && i.kind === "view" && fn.endDrag(performance.now()), zr(), Ye(), _t(p.pointerPos), de();
    }
  }, N.onpointercancel = () => {
    var i, s, l;
    if (!ca()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && fn.endDrag(performance.now()), ((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        io();
        const u = zn();
        u && p.paintEngine.cancelActiveStroke(u);
      }
      p.interaction = null, io(), zr(), _t(p.pointerPos), de({ localOnly: !0 });
    }
  }, N.onlostpointercapture = () => {
    ca();
  }, N.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, N.onmousemove = (i) => {
    const s = Ni(i), l = us(s, !0);
    p.interaction || (_t(s), l && p.mode === "frame" && p.primaryTool === "cursor" && de({ localOnly: !0 }));
  }, N.onmouseleave = () => {
    us(p.pointerPos, !1), _t(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && de({ localOnly: !0 });
  }, N.onwheel = (i) => {
    if (p.mode === "frame") {
      const s = Ni(i), l = hf(i);
      l && o1(s, l) && de({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (fn.applyWheelEvent(i) && de({ localOnly: !0 }), i.preventDefault());
  }, N.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Yn(!0));
  }, N.ondrop = (i) => {
    var u;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Ce.depth = 0, Yn(!1);
    const l = Array.from(((u = i.dataTransfer) == null ? void 0 : u.files) || []).find((h) => Pr(h));
    l && Od(l);
  };
  const Wd = (i) => {
    t !== "stickers" && t !== "cutout" || r || $r(i) && (Ce.depth += 1, Yn(!0), i.preventDefault());
  }, Yd = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Ce.active && $r(i) && Yn(!0), Ce.active && i.preventDefault());
  }, Xd = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Ce.active) return;
    Ce.depth = Math.max(0, Ce.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Ce.depth === 0 || s) && Yn(!1);
  }, qd = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Ce.depth = 0, Yn(!1), $r(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Wd, !0), window.addEventListener("dragover", Yd, !0), window.addEventListener("dragleave", Xd, !0), window.addEventListener("drop", qd, !0);
  function vc() {
    const { canUndo: i, canRedo: s } = Id();
    yo(I.toolButtons, "value", "undo", { disabled: !i }), yo(I.toolButtons, "value", "redo", { disabled: !s });
  }
  const Jd = (i, s, l = !1) => {
    var P;
    mr();
    const u = t === "cutout" && p.mode === "frame" ? ze() : null, h = u || Pt(), m = u ? "shot" : qa(), y = k && p.inspectCamera;
    if (!y && (!h || m === "stroke" || Sn(h))) return;
    const v = (((P = I.sidePanel) == null ? void 0 : P.params) || []).find((A) => A.key === i);
    if (!v || v.enabled === !1) return;
    let S = Number(s);
    if (Number.isNaN(S) && (S = 0), S = Z(S, Number(v.min), Number(v.max)), i === "yaw_deg" && (S = Kt(S)), y) {
      Mx(_.camera, p.frame, i, S), Ve(), l && ot();
      return;
    }
    i === "opacity" ? Nx(h, p.frame, S / 100) : ir(h, { [i]: S }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = $i(h)), Ve(), de(), l && ot();
  };
  Le == null || Le.addEventListener("click", async (i) => {
    var u, h, m, y, v, S, P;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const A = Hn(s.getAttribute("data-coverage"));
      if (A === Hn(_.coverage)) return;
      _.coverage = A, p.coverage = A, d && (d.value = String(A)), a ? Oe.backgroundDirty = !0 : (On(), r1({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ve(), Ye(), de();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((h = (u = I.sidePanel) == null ? void 0 : u.selectionPicker) != null && h.disabled) return;
      I.sidePanel.selectionPicker.open = !I.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      I.sidePanel.selectionPicker.open = !1;
      const A = String(s.getAttribute("data-selection-id") || "");
      let C = null;
      if (A && (t === "stickers" ? C = Yt().find((V) => String((V == null ? void 0 : V.id) || "") === A) || null : C = ((m = Kf().find((V) => {
        var K;
        return String(((K = V == null ? void 0 : V.item) == null ? void 0 : K.id) || "") === A;
      })) == null ? void 0 : m.item) || null), pr(C || null), C && !en(C)) {
        const V = Xt(C);
        Qt(
          Kt(Number(V.yaw_deg || 0)),
          Z(Number(V.pitch_deg || 0), -89.9, 89.9),
          p.viewFov
        );
      }
      Ve(), Ye(), de();
      return;
    }
    if (l === "copy-state-inline") {
      const A = Pt(), C = qa();
      if (!A || C === "stroke" || ar().length > 1) return;
      const V = JSON.stringify(t === "cutout" && C !== "image" ? Qf(A) : yy(Xt(A)));
      try {
        await navigator.clipboard.writeText(V), (y = I.sidePanel) != null && y.copyStateButton && (I.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var K;
          (K = I.sidePanel) != null && K.copyStateButton && (I.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const A = String(s.getAttribute("data-visibility") || "");
      A === "panorama" ? p.showPanorama = !p.showPanorama : A === "objects" ? p.showObjects = !p.showObjects : A === "mask" && (p.showMask = !p.showMask), Ve(), de();
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", hc(), Ve(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0), de();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", hc(), Ve(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0), de();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, hc(), Ve(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), de();
      return;
    }
    if (l === "close-preview") {
      ho();
      return;
    }
    if (l === "cancel-close") {
      ho();
      return;
    }
    l === "save-close" && (t1(), ho());
  }), Le == null || Le.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Jd(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), Le == null || Le.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Jd(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const _c = () => td();
  _c(), T.addEventListener("click", (i) => {
    var v, S, P, A;
    if ((S = (v = i.target) == null ? void 0 : v.matches) != null && S.call(v, "[data-confirm-overlay]")) {
      const C = (P = I.confirmDialog) == null ? void 0 : P.resolve;
      I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, C == null || C(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const C = p.mode;
      p.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (C !== "frame" && (Oe.frameSafeRect = null), Ve(), Ye()), ls(), zr(), de();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const C = String(l.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = C, (C === "paint" || C === "mask") && Zo({ preservePanelValues: !0 }), En(), Ve(), Ye(), de();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const C = String(l.getAttribute("data-tool-ui-action") || "");
        if ((C === "undo" || C === "redo") && l.disabled) return;
        C === "undo" ? cc(-1) : C === "redo" ? cc(1) : C === "clear" ? Xb() : C === "add" || C === "add-image" ? Vb() : C === "add-or-look" && Ub();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const C = String(l.getAttribute("data-paint-tool") || "pen");
        p.paintTool = C, Zo({ preservePanelValues: !0 }), Fn[C] && (p.activeBrushPresetId = C), En(), Ve(), Ye(), de();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), Zo({ preservePanelValues: !0 }), En(), Ve(), Ye(), de();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const C = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        qb(C);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const C = Xs.find((V) => V.id === l.getAttribute("data-paint-color-swatch"));
        if (!C) return;
        p.paintColor = jn(C.color), ue(!0), En();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), j && !j.hidden ? ue(!0) : Re(), En();
        return;
      }
    }
    const u = String(((A = l == null ? void 0 : l.getAttribute) == null ? void 0 : A.call(l, "data-action")) || "");
    if (u === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(H instanceof HTMLVideoElement)) return;
      Pe.resumeAfterScrub = !1, fc();
      return;
    }
    if (u === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), Xf(), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (u === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(H instanceof HTMLVideoElement)) return;
      const C = !I.videoTransport.loop;
      I.videoTransport.loop = C, H.loop = C, si({
        hasAudio: I.videoTransport.hasAudio,
        loop: C,
        muted: H.muted,
        volume: Number(H.volume ?? I.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (u === "frame-aspect") {
        I.frameRail.aspectOpen = !I.frameRail.aspectOpen;
        return;
      }
      if (u === "frame-aspect-set") {
        const C = p.mode === "frame" ? ze() : null;
        if (!C || C.locked === !0) return;
        Dd(C, String(l.getAttribute("data-aspect") || "1:1")), I.frameRail.aspectOpen = !1, lo(), ot(), lt(), zr(), de();
        return;
      }
      if (u === "frame-aspect-custom") {
        const C = p.mode === "frame" ? ze() : null, V = l.getAttribute("data-custom-width"), K = l.getAttribute("data-custom-height");
        if (!C || !Zb(C, V, K)) return;
        I.frameRail.aspectOpen = !1, lo(), ot(), lt(), zr(), de();
        return;
      }
      if (u === "frame-rotate-90") {
        const C = p.mode === "frame" ? ze() : null;
        if (!C || C.locked === !0) return;
        Ld(C), I.frameRail.aspectOpen = !1, lo(), ot(), lt(), zr(), de();
        return;
      }
      if (u === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Ye(), de();
        return;
      }
      if (u === "aspect-set") {
        const C = Pt();
        if (!C) return;
        const V = String(l.getAttribute("data-aspect") || "1:1");
        Dd(C, V), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, lo(), ot(), lt(), Ye(), de();
        return;
      }
      if (u === "rotate-90") {
        const C = Pt();
        if (!C) return;
        Ld(C), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, lo(), ot(), lt(), Ye(), de();
        return;
      }
      if (u === "bring-front") {
        Qb();
        return;
      }
      if (u === "send-back") {
        e1();
        return;
      }
      if (u === "duplicate") {
        Jb();
        return;
      }
      if (u === "replace-image") {
        Gb();
        return;
      }
      if (u === "toggle-lock") {
        ry();
        return;
      }
      if (u === "back-initial") {
        uy();
        return;
      }
      if (u === "toggle-visible") {
        cy();
        return;
      }
      if (u === "delete") {
        Td();
        return;
      }
    }
    if (u === "reset-view") {
      if (p.mode === "frame") return;
      Qt(0, 0, 100, 180, 680);
      return;
    }
    if (u === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, YP(e == null ? void 0 : e.id, p.showGrid), _c(), de();
      return;
    }
    if (u === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), M1();
      return;
    }
    if (u === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const C = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = C, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = C ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), nh(), de();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), y = p.customPaintHistory[m];
    y && (p.customPaintColor = jn(y), p.paintColor = jn(y), En());
  }), T.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(H instanceof HTMLVideoElement)) return;
      Dt.playing && (Pe.resumeAfterScrub = !0), Dt.seek(mi(Number(s.value || 0), Za()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(H instanceof HTMLVideoElement)) return;
      const m = Z(Number(l.value || 0), 0, 1);
      H.volume = m, H.muted = m <= 1e-4, si({
        hasAudio: I.videoTransport.hasAudio,
        muted: H.muted,
        volume: m
      });
      return;
    }
    const u = i.target.closest("[data-paint-size-slider]");
    if (u) {
      if (u.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(u.value)))), y = hi(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[y] = m, En(), u1();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: Z(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = jn(m), p.paintColor = jn(m), En();
    }
  }), T.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(H instanceof HTMLVideoElement)) return;
      Pe.resumeAfterScrub && Dt.play(), Pe.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && fs();
  }), T.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && fs();
  }), T.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && fs();
  }), T.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && fs();
  }), T.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !T.contains(s) || ce.target !== s && (ce.target = s, ce.timer && clearTimeout(ce.timer), ce.timer = window.setTimeout(() => {
      ce.target === s && b1(s);
    }, 220));
  }), T.addEventListener("pointerout", (i) => {
    var u, h;
    const s = i.target.closest("[data-tip]");
    !s || ce.target !== s || (i.relatedTarget instanceof Element ? (h = (u = i.relatedTarget).closest) == null ? void 0 : h.call(u, "[data-tip]") : null) === s || Pi();
  }), T.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Pi();
  });
  const S1 = (i, s) => {
    var v;
    if (!te) return;
    const l = te.getBoundingClientRect(), u = Z((i - l.left) / Math.max(1, l.width), 0, 1), h = 1 - Z((s - l.top) / Math.max(1, l.height), 0, 1), m = au(p.customPaintColor), y = { ...ou(m.h, u, h), a: Number(((v = p.customPaintColor) == null ? void 0 : v.a) ?? 1) };
    p.customPaintColor = jn(y), p.paintColor = jn(y), En();
  }, k1 = (i) => {
    var m;
    if (!me) return;
    const s = me.getBoundingClientRect(), l = Z((i - s.left) / Math.max(1, s.width), 0, 1), u = au(p.customPaintColor), h = { ...ou(l, u.s, u.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = jn(h), p.paintColor = jn(h), En();
  }, Zd = (i, s) => {
    const l = i.pointerId;
    s(i);
    const u = (m) => {
      m.pointerId === l && s(m);
    }, h = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", u), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  te && (te.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Zd(i, (s) => S1(s.clientX, s.clientY));
  }), me && (me.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Zd(i, (s) => k1(s.clientX));
  }), T.addEventListener("click", (i) => {
    var h;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", u = (h = I.confirmDialog) == null ? void 0 : h.resolve;
    I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, u == null || u(l);
  });
  const Qd = () => {
    const i = !!p.fullscreen;
    yo(I.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Me.fullscreen_close : Me.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, ds = (i) => {
    const s = !!i;
    p.fullscreen !== s && (p.fullscreen = s, T.classList.toggle("pano-modal-fullscreen", s), s ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), _c(), Qd(), Wt(), de());
  }, eh = () => document.fullscreenElement === ve, M1 = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        ds(!p.fullscreen);
        return;
      }
      eh() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = ve.requestFullscreen) == null ? void 0 : i.call(ve));
    } catch {
      ds(!p.fullscreen);
    }
  }, th = () => {
    document.fullscreenEnabled && ds(eh());
  };
  document.addEventListener("fullscreenchange", th), Qd();
  const nh = () => {
    const i = !!p.outputPreviewExpanded;
    I.outputPreviewToggle.icon = i ? Me.fullscreen_close : Me.fullscreen, I.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", I.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  nh();
  const wc = e.onConnectionsChange;
  let xc = null, rh = () => {
  };
  !r && t === "stickers" && (rh = N0(e, (i = "sync") => {
    i === "executed" && (TP(We, Ns), li()), ed(i);
  }, { editor: !0 }), xc = function(...s) {
    typeof wc == "function" && wc.apply(this, s), li(), Qr(this, "connections");
  }, e.onConnectionsChange = xc), r || Up.set(String(e.id ?? "0"), () => sd());
  let fo = null;
  const ho = async () => fo || (fo = (async () => {
    var i, s, l, u, h, m, y, v;
    return Up.delete(String(e.id ?? "0")), a1(), r || On(), document.fullscreenElement === ve && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", th), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === $d && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (h = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || h.call(u, !0, !0), (v = (y = (m = Ar) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || v.call(y, !0, !0), Pi(), Fb(), H instanceof HTMLVideoElement && H.pause(), $e.forEach((S) => {
      try {
        S();
      } catch {
      }
    }), Un.dispose(), Yn(!1), window.removeEventListener("keydown", ih, !0), window.removeEventListener("keydown", oh, !0), window.removeEventListener("keydown", sh, !0), window.removeEventListener("keyup", lh, !0), window.removeEventListener("keydown", hs, !0), window.removeEventListener("keyup", hs, !0), window.removeEventListener("blur", ch), window.removeEventListener("keydown", uh, !0), window.removeEventListener("dragenter", Wd, !0), window.removeEventListener("dragover", Yd, !0), window.removeEventListener("dragleave", Xd, !0), window.removeEventListener("drop", qd, !0), !r && t === "stickers" && (e.onConnectionsChange === xc && (e.onConnectionsChange = wc), rh()), G.unmount(), z.remove(), n1(), fo = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), fo = null, !1)), fo), ih = (i) => {
    var s, l, u, h, m;
    if (i.key === "Escape") {
      if (ca()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === ve) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (u = document.exitFullscreen) == null || u.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), ds(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), ho();
    }
  }, oh = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), u = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || u === 46) && !(s === "Backspace" || l === "Backspace" || u === 8)) return;
    const y = i.target, v = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    if (v === "INPUT" || v === "TEXTAREA" || y != null && y.isContentEditable) return;
    if (Ee.selection) {
      Rb(), i.preventDefault(), i.stopPropagation();
      return;
    }
    Pt() && (Td(), i.preventDefault(), i.stopPropagation());
  }, ah = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !k || !I.timeline.visible || I.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !ve.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !wP.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, sh = (i) => {
    ah(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || fc());
  }, lh = (i) => {
    ah(i) && (i.preventDefault(), i.stopPropagation());
  }, hs = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    p.marqueeModifier === s && p.altModifier === l || (p.marqueeModifier = s, p.altModifier = l, Hr(), _t(p.pointerPos));
  }, ch = () => {
    p.marqueeModifier = !1, p.altModifier = !1, Hr(), _t(p.pointerPos);
  }, uh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const u = i.target, h = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || u != null && u.isContentEditable) return;
    const { canUndo: m, canRedo: y } = Id();
    i.shiftKey && !y || !i.shiftKey && !m || (cc(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", ih, !0), window.addEventListener("keydown", oh, !0), window.addEventListener("keydown", sh, !0), window.addEventListener("keyup", lh, !0), window.addEventListener("keydown", hs, !0), window.addEventListener("keyup", hs, !0), window.addEventListener("blur", ch), window.addEventListener("keydown", uh, !0), ve.addEventListener("pointerdown", (i) => {
    i.target === ve && ho();
  });
  function gr(i, s, { rollbackState: l = !1 } = {}) {
    let u = "";
    try {
      l && (u = JSON.stringify(_)), s();
    } catch (h) {
      if (u)
        try {
          const m = JSON.parse(u);
          Object.keys(_).forEach((y) => delete _[y]), Object.assign(_, m), r || On();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      I.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, h);
    }
  }
  gr("cutout-focus", xy), !r && t === "stickers" && gr("external-sticker-sync", () => ed("open"), { rollbackState: !0 }), Kb().catch((i) => {
    I.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), gr("history", ot), gr("undo-redo", vc), gr("paint-ui", En), gr("side-panel", Ve), gr("look-at-frame", Zl), gr("video-source", li), gr("canvas-size", Nd), gr("cursor", () => _t(p.pointerPos)), de(), Oe.rafId = requestAnimationFrame(Ad);
}
Ar.registerExtension(ok({
  app: Ar,
  openEditor: eA,
  attachStickers: bM,
  attachCutout: vM,
  attachPreview: yM,
  restoreOutput: iM,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: SP
}));
