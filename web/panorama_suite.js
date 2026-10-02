import * as Os from "../../scripts/app.js";
import { app as Ar } from "../../scripts/app.js";
import { api as jt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Wu(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const wt = {}, Co = [], Cr = () => {
}, rm = () => !1, kl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ml = (e) => e.startsWith("onUpdate:"), vn = Object.assign, Yu = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, O1 = Object.prototype.hasOwnProperty, ht = (e, t) => O1.call(e, t), qe = Array.isArray, Io = (e) => Ha(e) === "[object Map]", im = (e) => Ha(e) === "[object Set]", vh = (e) => Ha(e) === "[object Date]", Ze = (e) => typeof e == "function", Wt = (e) => typeof e == "string", Ir = (e) => typeof e == "symbol", bt = (e) => e !== null && typeof e == "object", om = (e) => (bt(e) || Ze(e)) && Ze(e.then) && Ze(e.catch), am = Object.prototype.toString, Ha = (e) => am.call(e), F1 = (e) => Ha(e).slice(8, -1), sm = (e) => Ha(e) === "[object Object]", Xu = (e) => Wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ka = /* @__PURE__ */ Wu(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Nl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, T1 = /-\w/g, Mn = Nl(
  (e) => e.replace(T1, (t) => t.slice(1).toUpperCase())
), D1 = /\B([A-Z])/g, Zi = Nl(
  (e) => e.replace(D1, "-$1").toLowerCase()
), Pl = Nl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Nc = Nl(
  (e) => e ? `on${Pl(e)}` : ""
), Mr = (e, t) => !Object.is(e, t), Fs = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, lm = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, qu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let _h;
const Al = () => _h || (_h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xt(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Wt(r) ? V1(r) : xt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (Wt(e) || bt(e))
    return e;
}
const L1 = /;(?![^(]*\))/g, R1 = /:([^]+)/, $1 = /\/\*[^]*?\*\//g;
function V1(e) {
  const t = {};
  return e.replace($1, "").split(L1).forEach((n) => {
    if (n) {
      const r = n.split(R1);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function it(e) {
  let t = "";
  if (Wt(e))
    t = e;
  else if (qe(e))
    for (let n = 0; n < e.length; n++) {
      const r = it(e[n]);
      r && (t += r + " ");
    }
  else if (bt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const z1 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", j1 = /* @__PURE__ */ Wu(z1);
function cm(e) {
  return !!e || e === "";
}
function H1(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Ju(e[r], t[r]);
  return n;
}
function Ju(e, t) {
  if (e === t) return !0;
  let n = vh(e), r = vh(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Ir(e), r = Ir(t), n || r)
    return e === t;
  if (n = qe(e), r = qe(t), n || r)
    return n && r ? H1(e, t) : !1;
  if (n = bt(e), r = bt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const f = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (f && !d || !f && d || !Ju(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const um = (e) => !!(e && e.__v_isRef === !0), tt = (e) => Wt(e) ? e : e == null ? "" : qe(e) || bt(e) && (e.toString === am || !Ze(e.toString)) ? um(e) ? tt(e.value) : JSON.stringify(e, fm, 2) : String(e), fm = (e, t) => um(t) ? fm(e, t.value) : Io(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Pc(r, a) + " =>"] = o, n),
    {}
  )
} : im(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Pc(n))
} : Ir(t) ? Pc(t) : bt(t) && !qe(t) && !sm(t) ? String(t) : t, Pc = (e, t = "") => {
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
class G1 {
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
function K1() {
  return Ln;
}
let Pt;
const Ac = /* @__PURE__ */ new WeakSet();
class dm {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ln && Ln.active && Ln.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ac.has(this) && (Ac.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || pm(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, wh(this), mm(this);
    const t = Pt, n = pr;
    Pt = this, pr = !0;
    try {
      return this.fn();
    } finally {
      gm(this), Pt = t, pr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ef(t);
      this.deps = this.depsTail = void 0, wh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ac.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    fu(this) && this.run();
  }
  get dirty() {
    return fu(this);
  }
}
let hm = 0, Ma, Na;
function pm(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Na, Na = e;
    return;
  }
  e.next = Ma, Ma = e;
}
function Zu() {
  hm++;
}
function Qu() {
  if (--hm > 0)
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
function mm(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function gm(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), ef(r), B1(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function fu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ym(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ym(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ea) || (e.globalVersion = Ea, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !fu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Pt, r = pr;
  Pt = e, pr = !0;
  try {
    mm(e);
    const o = e.fn(e._value);
    (t.version === 0 || Mr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Pt = n, pr = r, gm(e), e.flags &= -3;
  }
}
function ef(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      ef(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function B1(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let pr = !0;
const bm = [];
function ti() {
  bm.push(pr), pr = !1;
}
function ni() {
  const e = bm.pop();
  pr = e === void 0 ? !0 : e;
}
function wh(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Pt;
    Pt = void 0;
    try {
      t();
    } finally {
      Pt = n;
    }
  }
}
let Ea = 0;
class U1 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class tf {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Pt || !pr || Pt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Pt)
      n = this.activeLink = new U1(Pt, this), Pt.deps ? (n.prevDep = Pt.depsTail, Pt.depsTail.nextDep = n, Pt.depsTail = n) : Pt.deps = Pt.depsTail = n, vm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Pt.depsTail, n.nextDep = void 0, Pt.depsTail.nextDep = n, Pt.depsTail = n, Pt.deps === n && (Pt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ea++, this.notify(t);
  }
  notify(t) {
    Zu();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Qu();
    }
  }
}
function vm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        vm(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const du = /* @__PURE__ */ new WeakMap(), Hi = /* @__PURE__ */ Symbol(
  ""
), hu = /* @__PURE__ */ Symbol(
  ""
), Oa = /* @__PURE__ */ Symbol(
  ""
);
function gn(e, t, n) {
  if (pr && Pt) {
    let r = du.get(e);
    r || du.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new tf()), o.map = r, o.key = n), o.track();
  }
}
function Jr(e, t, n, r, o, a) {
  const c = du.get(e);
  if (!c) {
    Ea++;
    return;
  }
  const f = (d) => {
    d && d.trigger();
  };
  if (Zu(), t === "clear")
    c.forEach(f);
  else {
    const d = qe(e), v = d && Xu(n);
    if (d && n === "length") {
      const g = Number(r);
      c.forEach((w, x) => {
        (x === "length" || x === Oa || !Ir(x) && x >= g) && f(w);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && f(c.get(n)), v && f(c.get(Oa)), t) {
        case "add":
          d ? v && f(c.get("length")) : (f(c.get(Hi)), Io(e) && f(c.get(hu)));
          break;
        case "delete":
          d || (f(c.get(Hi)), Io(e) && f(c.get(hu)));
          break;
        case "set":
          Io(e) && f(c.get(Hi));
          break;
      }
  }
  Qu();
}
function go(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (gn(t, "iterate", Oa), /* @__PURE__ */ ir(e) ? t : t.map(mr));
}
function Cl(e) {
  return gn(e = /* @__PURE__ */ dt(e), "iterate", Oa), e;
}
function Sr(e, t) {
  return /* @__PURE__ */ ri(e) ? Vo(/* @__PURE__ */ Gi(e) ? mr(t) : t) : mr(t);
}
const W1 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Cc(this, Symbol.iterator, (e) => Sr(this, e));
  },
  concat(...e) {
    return go(this).concat(
      ...e.map((t) => qe(t) ? go(t) : t)
    );
  },
  entries() {
    return Cc(this, "entries", (e) => (e[1] = Sr(this, e[1]), e));
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
      (n) => n.map((r) => Sr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Gr(
      this,
      "find",
      e,
      t,
      (n) => Sr(this, n),
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
      (n) => Sr(this, n),
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
    return Ic(this, "includes", e);
  },
  indexOf(...e) {
    return Ic(this, "indexOf", e);
  },
  join(e) {
    return go(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ic(this, "lastIndexOf", e);
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
    return xh(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return xh(this, "reduceRight", e, t);
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
    return go(this).toReversed();
  },
  toSorted(e) {
    return go(this).toSorted(e);
  },
  toSpliced(...e) {
    return go(this).toSpliced(...e);
  },
  unshift(...e) {
    return ua(this, "unshift", e);
  },
  values() {
    return Cc(this, "values", (e) => Sr(this, e));
  }
};
function Cc(e, t, n) {
  const r = Cl(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ ir(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const Y1 = Array.prototype;
function Gr(e, t, n, r, o, a) {
  const c = Cl(e), f = c !== e && !/* @__PURE__ */ ir(e), d = c[t];
  if (d !== Y1[t]) {
    const w = d.apply(e, a);
    return f ? mr(w) : w;
  }
  let v = n;
  c !== e && (f ? v = function(w, x) {
    return n.call(this, Sr(e, w), x, e);
  } : n.length > 2 && (v = function(w, x) {
    return n.call(this, w, x, e);
  }));
  const g = d.call(c, v, r);
  return f && o ? o(g) : g;
}
function xh(e, t, n, r) {
  const o = Cl(e), a = o !== e && !/* @__PURE__ */ ir(e);
  let c = n, f = !1;
  o !== e && (a ? (f = r.length === 0, c = function(v, g, w) {
    return f && (f = !1, v = Sr(e, v)), n.call(this, v, Sr(e, g), w, e);
  }) : n.length > 3 && (c = function(v, g, w) {
    return n.call(this, v, g, w, e);
  }));
  const d = o[t](c, ...r);
  return f ? Sr(e, d) : d;
}
function Ic(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  gn(r, "iterate", Oa);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ of(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : o;
}
function ua(e, t, n = []) {
  ti(), Zu();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return Qu(), ni(), r;
}
const X1 = /* @__PURE__ */ Wu("__proto__,__v_isRef,__isVue"), _m = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ir)
);
function q1(e) {
  Ir(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return gn(t, "has", e), t.hasOwnProperty(e);
}
class wm {
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
      return r === (o ? a ? av : Mm : a ? km : Sm).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = qe(t);
    if (!o) {
      let d;
      if (c && (d = W1[n]))
        return d;
      if (n === "hasOwnProperty")
        return q1;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ bn(t) ? t : r
    );
    if ((Ir(n) ? _m.has(n) : X1(n)) || (o || gn(t, "get", n), a))
      return f;
    if (/* @__PURE__ */ bn(f)) {
      const d = c && Xu(n) ? f : f.value;
      return o && bt(d) ? /* @__PURE__ */ mu(d) : d;
    }
    return bt(f) ? o ? /* @__PURE__ */ mu(f) : /* @__PURE__ */ Uo(f) : f;
  }
}
class xm extends wm {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = qe(t) && Xu(n);
    if (!this._isShallow) {
      const v = /* @__PURE__ */ ri(a);
      if (!/* @__PURE__ */ ir(r) && !/* @__PURE__ */ ri(r) && (a = /* @__PURE__ */ dt(a), r = /* @__PURE__ */ dt(r)), !c && /* @__PURE__ */ bn(a) && !/* @__PURE__ */ bn(r))
        return v || (a.value = r), !0;
    }
    const f = c ? Number(n) < t.length : ht(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ bn(t) ? t : o
    );
    return t === /* @__PURE__ */ dt(o) && (f ? Mr(r, a) && Jr(t, "set", n, r) : Jr(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = ht(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Jr(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Ir(n) || !_m.has(n)) && gn(t, "has", n), r;
  }
  ownKeys(t) {
    return gn(
      t,
      "iterate",
      qe(t) ? "length" : Hi
    ), Reflect.ownKeys(t);
  }
}
class J1 extends wm {
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
const Z1 = /* @__PURE__ */ new xm(), Q1 = /* @__PURE__ */ new J1(), ev = /* @__PURE__ */ new xm(!0);
const pu = (e) => e, ps = (e) => Reflect.getPrototypeOf(e);
function tv(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ dt(o), c = Io(a), f = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, v = o[e](...r), g = n ? pu : t ? Vo : mr;
    return !t && gn(
      a,
      "iterate",
      d ? hu : Hi
    ), vn(
      // inheriting all iterator properties
      Object.create(v),
      {
        // iterator protocol
        next() {
          const { value: w, done: x } = v.next();
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
function nv(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ dt(a), f = /* @__PURE__ */ dt(o);
      e || (Mr(o, f) && gn(c, "get", o), gn(c, "get", f));
      const { has: d } = ps(c), v = t ? pu : e ? Vo : mr;
      if (d.call(c, o))
        return v(a.get(o));
      if (d.call(c, f))
        return v(a.get(f));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && gn(/* @__PURE__ */ dt(o), "iterate", Hi), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ dt(a), f = /* @__PURE__ */ dt(o);
      return e || (Mr(o, f) && gn(c, "has", o), gn(c, "has", f)), o === f ? a.has(o) : a.has(o) || a.has(f);
    },
    forEach(o, a) {
      const c = this, f = c.__v_raw, d = /* @__PURE__ */ dt(f), v = t ? pu : e ? Vo : mr;
      return !e && gn(d, "iterate", Hi), f.forEach((g, w) => o.call(a, v(g), v(w), c));
    }
  };
  return vn(
    n,
    e ? {
      add: ms("add"),
      set: ms("set"),
      delete: ms("delete"),
      clear: ms("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ dt(this), c = ps(a), f = /* @__PURE__ */ dt(o), d = !t && !/* @__PURE__ */ ir(o) && !/* @__PURE__ */ ri(o) ? f : o;
        return c.has.call(a, d) || Mr(o, d) && c.has.call(a, o) || Mr(f, d) && c.has.call(a, f) || (a.add(d), Jr(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ ir(a) && !/* @__PURE__ */ ri(a) && (a = /* @__PURE__ */ dt(a));
        const c = /* @__PURE__ */ dt(this), { has: f, get: d } = ps(c);
        let v = f.call(c, o);
        v || (o = /* @__PURE__ */ dt(o), v = f.call(c, o));
        const g = d.call(c, o);
        return c.set(o, a), v ? Mr(a, g) && Jr(c, "set", o, a) : Jr(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ dt(this), { has: c, get: f } = ps(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ dt(o), d = c.call(a, o)), f && f.call(a, o);
        const v = a.delete(o);
        return d && Jr(a, "delete", o, void 0), v;
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
    n[o] = tv(o, e, t);
  }), n;
}
function nf(e, t) {
  const n = nv(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ht(n, o) && o in r ? n : r,
    o,
    a
  );
}
const rv = {
  get: /* @__PURE__ */ nf(!1, !1)
}, iv = {
  get: /* @__PURE__ */ nf(!1, !0)
}, ov = {
  get: /* @__PURE__ */ nf(!0, !1)
};
const Sm = /* @__PURE__ */ new WeakMap(), km = /* @__PURE__ */ new WeakMap(), Mm = /* @__PURE__ */ new WeakMap(), av = /* @__PURE__ */ new WeakMap();
function sv(e) {
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
function lv(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : sv(F1(e));
}
// @__NO_SIDE_EFFECTS__
function Uo(e) {
  return /* @__PURE__ */ ri(e) ? e : rf(
    e,
    !1,
    Z1,
    rv,
    Sm
  );
}
// @__NO_SIDE_EFFECTS__
function cv(e) {
  return rf(
    e,
    !1,
    ev,
    iv,
    km
  );
}
// @__NO_SIDE_EFFECTS__
function mu(e) {
  return rf(
    e,
    !0,
    Q1,
    ov,
    Mm
  );
}
function rf(e, t, n, r, o) {
  if (!bt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = lv(e);
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
function ir(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function of(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function uv(e) {
  return !ht(e, "__v_skip") && Object.isExtensible(e) && lm(e, "__v_skip", !0), e;
}
const mr = (e) => bt(e) ? /* @__PURE__ */ Uo(e) : e, Vo = (e) => bt(e) ? /* @__PURE__ */ mu(e) : e;
// @__NO_SIDE_EFFECTS__
function bn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return fv(e, !1);
}
function fv(e, t) {
  return /* @__PURE__ */ bn(e) ? e : new dv(e, t);
}
class dv {
  constructor(t, n) {
    this.dep = new tf(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : mr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ ir(t) || /* @__PURE__ */ ri(t);
    t = r ? t : /* @__PURE__ */ dt(t), Mr(t, n) && (this._rawValue = t, this._value = r ? t : mr(t), this.dep.trigger());
  }
}
function Je(e) {
  return /* @__PURE__ */ bn(e) ? e.value : e;
}
const hv = {
  get: (e, t, n) => t === "__v_raw" ? e : Je(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ bn(o) && !/* @__PURE__ */ bn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Nm(e) {
  return /* @__PURE__ */ Gi(e) ? e : new Proxy(e, hv);
}
class pv {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new tf(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ea - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Pt !== this)
      return pm(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ym(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function mv(e, t, n = !1) {
  let r, o;
  return Ze(e) ? r = e : (r = e.get, o = e.set), new pv(r, o, n);
}
const gs = {}, Js = /* @__PURE__ */ new WeakMap();
let Di;
function gv(e, t = !1, n = Di) {
  if (n) {
    let r = Js.get(n);
    r || Js.set(n, r = []), r.push(e);
  }
}
function yv(e, t, n = wt) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: f, call: d } = n, v = (z) => o ? z : /* @__PURE__ */ ir(z) || o === !1 || o === 0 ? Zr(z, 1) : Zr(z);
  let g, w, x, P, S = !1, _ = !1;
  if (/* @__PURE__ */ bn(e) ? (w = () => e.value, S = /* @__PURE__ */ ir(e)) : /* @__PURE__ */ Gi(e) ? (w = () => v(e), S = !0) : qe(e) ? (_ = !0, S = e.some((z) => /* @__PURE__ */ Gi(z) || /* @__PURE__ */ ir(z)), w = () => e.map((z) => {
    if (/* @__PURE__ */ bn(z))
      return z.value;
    if (/* @__PURE__ */ Gi(z))
      return v(z);
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
    const z = Di;
    Di = g;
    try {
      return d ? d(e, 3, [P]) : e(P);
    } finally {
      Di = z;
    }
  } : w = Cr, t && o) {
    const z = w, O = o === !0 ? 1 / 0 : o;
    w = () => Zr(z(), O);
  }
  const F = K1(), D = () => {
    g.stop(), F && F.active && Yu(F.effects, g);
  };
  if (a && t) {
    const z = t;
    t = (...O) => {
      z(...O), D();
    };
  }
  let Y = _ ? new Array(e.length).fill(gs) : gs;
  const I = (z) => {
    if (!(!(g.flags & 1) || !g.dirty && !z))
      if (t) {
        const O = g.run();
        if (o || S || (_ ? O.some((R, G) => Mr(R, Y[G])) : Mr(O, Y))) {
          x && x();
          const R = Di;
          Di = g;
          try {
            const G = [
              O,
              // pass undefined as the old value when it's changed for the first time
              Y === gs ? void 0 : _ && Y[0] === gs ? [] : Y,
              P
            ];
            Y = O, d ? d(t, 3, G) : (
              // @ts-expect-error
              t(...G)
            );
          } finally {
            Di = R;
          }
        }
      } else
        g.run();
  };
  return f && f(I), g = new dm(w), g.scheduler = c ? () => c(I, !1) : I, P = (z) => gv(z, !1, g), x = g.onStop = () => {
    const z = Js.get(g);
    if (z) {
      if (d)
        d(z, 4);
      else
        for (const O of z) O();
      Js.delete(g);
    }
  }, t ? r ? I(!0) : Y = g.run() : c ? c(I.bind(null, !0), !0) : g.run(), D.pause = g.pause.bind(g), D.resume = g.resume.bind(g), D.stop = D, D;
}
function Zr(e, t = 1 / 0, n) {
  if (t <= 0 || !bt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ bn(e))
    Zr(e.value, t, n);
  else if (qe(e))
    for (let r = 0; r < e.length; r++)
      Zr(e[r], t, n);
  else if (im(e) || Io(e))
    e.forEach((r) => {
      Zr(r, t, n);
    });
  else if (sm(e)) {
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
    Il(o, t, n);
  }
}
function Er(e, t, n, r) {
  if (Ze(e)) {
    const o = Ga(e, t, n, r);
    return o && om(o) && o.catch((a) => {
      Il(a, t, n);
    }), o;
  }
  if (qe(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Er(e[a], t, n, r));
    return o;
  }
}
function Il(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || wt;
  if (t) {
    let f = t.parent;
    const d = t.proxy, v = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const g = f.ec;
      if (g) {
        for (let w = 0; w < g.length; w++)
          if (g[w](e, d, v) === !1)
            return;
      }
      f = f.parent;
    }
    if (a) {
      ti(), Ga(a, null, 10, [
        e,
        d,
        v
      ]), ni();
      return;
    }
  }
  bv(e, n, o, r, c);
}
function bv(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const kn = [];
let xr = -1;
const Eo = [];
let gi = null, xo = 0;
const Pm = /* @__PURE__ */ Promise.resolve();
let Zs = null;
function El(e) {
  const t = Zs || Pm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vv(e) {
  let t = xr + 1, n = kn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = kn[r], a = Fa(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function af(e) {
  if (!(e.flags & 1)) {
    const t = Fa(e), n = kn[kn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Fa(n) ? kn.push(e) : kn.splice(vv(t), 0, e), e.flags |= 1, Am();
  }
}
function Am() {
  Zs || (Zs = Pm.then(Im));
}
function _v(e) {
  qe(e) ? Eo.push(...e) : gi && e.id === -1 ? gi.splice(xo + 1, 0, e) : e.flags & 1 || (Eo.push(e), e.flags |= 1), Am();
}
function Sh(e, t, n = xr + 1) {
  for (; n < kn.length; n++) {
    const r = kn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      kn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Cm(e) {
  if (Eo.length) {
    const t = [...new Set(Eo)].sort(
      (n, r) => Fa(n) - Fa(r)
    );
    if (Eo.length = 0, gi) {
      gi.push(...t);
      return;
    }
    for (gi = t, xo = 0; xo < gi.length; xo++) {
      const n = gi[xo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    gi = null, xo = 0;
  }
}
const Fa = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Im(e) {
  try {
    for (xr = 0; xr < kn.length; xr++) {
      const t = kn[xr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ga(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; xr < kn.length; xr++) {
      const t = kn[xr];
      t && (t.flags &= -2);
    }
    xr = -1, kn.length = 0, Cm(), Zs = null, (kn.length || Eo.length) && Im();
  }
}
let Kn = null, Em = null;
function Qs(e) {
  const t = Kn;
  return Kn = e, Em = e && e.type.__scopeId || null, t;
}
function Om(e, t = Kn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Dh(-1);
    const a = Qs(t);
    let c;
    try {
      c = e(...o);
    } finally {
      Qs(a), r._d && Dh(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function vi(e, t) {
  if (Kn === null)
    return e;
  const n = Ll(Kn), r = e.dirs || (e.dirs = []);
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
function Ai(e, t, n, r) {
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
function wv(e, t) {
  if (yn) {
    let n = yn.provides;
    const r = yn.parent && yn.parent.provides;
    r === n && (n = yn.provides = Object.create(r)), n[e] = t;
  }
}
function Ts(e, t, n = !1) {
  const r = v_();
  if (r || Oo) {
    let o = Oo ? Oo._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Ze(t) ? t.call(r && r.proxy) : t;
  }
}
const xv = /* @__PURE__ */ Symbol.for("v-scx"), Sv = () => Ts(xv);
function Ki(e, t, n) {
  return Fm(e, t, n);
}
function Fm(e, t, n = wt) {
  const { immediate: r, deep: o, flush: a, once: c } = n, f = vn({}, n), d = t && r || !t && a !== "post";
  let v;
  if (Da) {
    if (a === "sync") {
      const P = Sv();
      v = P.__watcherHandles || (P.__watcherHandles = []);
    } else if (!d) {
      const P = () => {
      };
      return P.stop = Cr, P.resume = Cr, P.pause = Cr, P;
    }
  }
  const g = yn;
  f.call = (P, S, _) => Er(P, g, S, _);
  let w = !1;
  a === "post" ? f.scheduler = (P) => {
    Dn(P, g && g.suspense);
  } : a !== "sync" && (w = !0, f.scheduler = (P, S) => {
    S ? P() : af(P);
  }), f.augmentJob = (P) => {
    t && (P.flags |= 4), w && (P.flags |= 2, g && (P.id = g.uid, P.i = g));
  };
  const x = yv(e, t, f);
  return Da && (v ? v.push(x) : d && x()), x;
}
function kv(e, t, n) {
  const r = this.proxy, o = Wt(e) ? e.includes(".") ? Tm(r, e) : () => r[e] : e.bind(r, r);
  let a;
  Ze(t) ? a = t : (a = t.handler, n = t);
  const c = Ba(this), f = Fm(o, a.bind(r), n);
  return c(), f;
}
function Tm(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Mv = /* @__PURE__ */ Symbol("_vte"), Nv = (e) => e.__isTeleport, Pv = /* @__PURE__ */ Symbol("_leaveCb");
function sf(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, sf(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Dm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function kh(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const el = /* @__PURE__ */ new WeakMap();
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
  const a = r.shapeFlag & 4 ? Ll(r.component) : r.el, c = o ? null : a, { i: f, r: d } = e, v = t && t.r, g = f.refs === wt ? f.refs = {} : f.refs, w = f.setupState, x = /* @__PURE__ */ dt(w), P = w === wt ? rm : (_) => kh(g, _) ? !1 : ht(x, _), S = (_, F) => !(F && kh(g, F));
  if (v != null && v !== d) {
    if (Mh(t), Wt(v))
      g[v] = null, P(v) && (w[v] = null);
    else if (/* @__PURE__ */ bn(v)) {
      const _ = t;
      S(v, _.k) && (v.value = null), _.k && (g[_.k] = null);
    }
  }
  if (Ze(d))
    Ga(d, f, 12, [c, g]);
  else {
    const _ = Wt(d), F = /* @__PURE__ */ bn(d);
    if (_ || F) {
      const D = () => {
        if (e.f) {
          const Y = _ ? P(d) ? w[d] : g[d] : S() || !e.k ? d.value : g[e.k];
          if (o)
            qe(Y) && Yu(Y, a);
          else if (qe(Y))
            Y.includes(a) || Y.push(a);
          else if (_)
            g[d] = [a], P(d) && (w[d] = g[d]);
          else {
            const I = [a];
            S(d, e.k) && (d.value = I), e.k && (g[e.k] = I);
          }
        } else _ ? (g[d] = c, P(d) && (w[d] = c)) : F && (S(d, e.k) && (d.value = c), e.k && (g[e.k] = c));
      };
      if (c) {
        const Y = () => {
          D(), el.delete(e);
        };
        Y.id = -1, el.set(e, Y), Dn(Y, n);
      } else
        Mh(e), D();
    }
  }
}
function Mh(e) {
  const t = el.get(e);
  t && (t.flags |= 8, el.delete(e));
}
Al().requestIdleCallback;
Al().cancelIdleCallback;
const Aa = (e) => !!e.type.__asyncLoader, Lm = (e) => e.type.__isKeepAlive;
function Av(e, t) {
  Rm(e, "a", t);
}
function Cv(e, t) {
  Rm(e, "da", t);
}
function Rm(e, t, n = yn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Ol(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Lm(o.parent.vnode) && Iv(r, t, n, o), o = o.parent;
  }
}
function Iv(e, t, n, r) {
  const o = Ol(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  $m(() => {
    Yu(r[t], o);
  }, n);
}
function Ol(e, t, n = yn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      ti();
      const f = Ba(n), d = Er(t, n, e, c);
      return f(), ni(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const oi = (e) => (t, n = yn) => {
  (!Da || e === "sp") && Ol(e, (...r) => t(...r), n);
}, Ev = oi("bm"), Fl = oi("m"), Ov = oi(
  "bu"
), Fv = oi("u"), Ka = oi(
  "bum"
), $m = oi("um"), Tv = oi(
  "sp"
), Dv = oi("rtg"), Lv = oi("rtc");
function Rv(e, t = yn) {
  Ol("ec", e, t);
}
const $v = "components", Vm = /* @__PURE__ */ Symbol.for("v-ndc");
function Vv(e) {
  return Wt(e) ? zv($v, e, !1) || e : e || Vm;
}
function zv(e, t, n = !0, r = !1) {
  const o = Kn || yn;
  if (o) {
    const a = o.type;
    {
      const f = k_(
        a,
        !1
      );
      if (f && (f === t || f === Mn(t) || f === Pl(Mn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Nh(o[e] || a[e], t) || // global registration
      Nh(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function Nh(e, t) {
  return e && (e[t] || e[Mn(t)] || e[Pl(Mn(t))]);
}
function St(e, t, n, r) {
  let o;
  const a = n, c = qe(e);
  if (c || Wt(e)) {
    const f = c && /* @__PURE__ */ Gi(e);
    let d = !1, v = !1;
    f && (d = !/* @__PURE__ */ ir(e), v = /* @__PURE__ */ ri(e), e = Cl(e)), o = new Array(e.length);
    for (let g = 0, w = e.length; g < w; g++)
      o[g] = t(
        d ? v ? Vo(mr(e[g])) : mr(e[g]) : e[g],
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
      for (let d = 0, v = f.length; d < v; d++) {
        const g = f[d];
        o[d] = t(e[g], g, d, a);
      }
    }
  else
    o = [];
  return o;
}
const gu = (e) => e ? ag(e) ? Ll(e) : gu(e.parent) : null, Ca = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ vn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => gu(e.parent),
    $root: (e) => gu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => jm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      af(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = El.bind(e.proxy)),
    $watch: (e) => kv.bind(e)
  })
), Ec = (e, t) => e !== wt && !e.__isScriptSetup && ht(e, t), jv = {
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
        if (Ec(r, t))
          return c[t] = 1, r[t];
        if (o !== wt && ht(o, t))
          return c[t] = 2, o[t];
        if (ht(a, t))
          return c[t] = 3, a[t];
        if (n !== wt && ht(n, t))
          return c[t] = 4, n[t];
        yu && (c[t] = 0);
      }
    }
    const v = Ca[t];
    let g, w;
    if (v)
      return t === "$attrs" && gn(e.attrs, "get", ""), v(e);
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
    return Ec(o, t) ? (o[t] = n, !0) : r !== wt && ht(r, t) ? (r[t] = n, !0) : ht(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, f) {
    let d;
    return !!(n[f] || e !== wt && f[0] !== "$" && ht(e, f) || Ec(t, f) || ht(a, f) || ht(r, f) || ht(Ca, f) || ht(o.config.globalProperties, f) || (d = c.__cssModules) && d[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ht(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ph(e) {
  return qe(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let yu = !0;
function Hv(e) {
  const t = jm(e), n = e.proxy, r = e.ctx;
  yu = !1, t.beforeCreate && Ah(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: c,
    watch: f,
    provide: d,
    inject: v,
    // lifecycle
    created: g,
    beforeMount: w,
    mounted: x,
    beforeUpdate: P,
    updated: S,
    activated: _,
    deactivated: F,
    beforeDestroy: D,
    beforeUnmount: Y,
    destroyed: I,
    unmounted: z,
    render: O,
    renderTracked: R,
    renderTriggered: G,
    errorCaptured: Z,
    serverPrefetch: _e,
    // public API
    expose: T,
    inheritAttrs: E,
    // assets
    components: ue,
    directives: fe,
    filters: de
  } = t;
  if (v && Gv(v, r, null), c)
    for (const j in c) {
      const M = c[j];
      Ze(M) && (r[j] = M.bind(n));
    }
  if (o) {
    const j = o.call(n, n);
    bt(j) && (e.data = /* @__PURE__ */ Uo(j));
  }
  if (yu = !0, a)
    for (const j in a) {
      const M = a[j], Q = Ze(M) ? M.bind(n, n) : Ze(M.get) ? M.get.bind(n, n) : Cr, W = !Ze(M) && Ze(M.set) ? M.set.bind(n) : Cr, Pe = ct({
        get: Q,
        set: W
      });
      Object.defineProperty(r, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Pe.value,
        set: (Te) => Pe.value = Te
      });
    }
  if (f)
    for (const j in f)
      zm(f[j], r, n, j);
  if (d) {
    const j = Ze(d) ? d.call(n) : d;
    Reflect.ownKeys(j).forEach((M) => {
      wv(M, j[M]);
    });
  }
  g && Ah(g, e, "c");
  function X(j, M) {
    qe(M) ? M.forEach((Q) => j(Q.bind(n))) : M && j(M.bind(n));
  }
  if (X(Ev, w), X(Fl, x), X(Ov, P), X(Fv, S), X(Av, _), X(Cv, F), X(Rv, Z), X(Lv, R), X(Dv, G), X(Ka, Y), X($m, z), X(Tv, _e), qe(T))
    if (T.length) {
      const j = e.exposed || (e.exposed = {});
      T.forEach((M) => {
        Object.defineProperty(j, M, {
          get: () => n[M],
          set: (Q) => n[M] = Q,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Cr && (e.render = O), E != null && (e.inheritAttrs = E), ue && (e.components = ue), fe && (e.directives = fe), _e && Dm(e);
}
function Gv(e, t, n = Cr) {
  qe(e) && (e = bu(e));
  for (const r in e) {
    const o = e[r];
    let a;
    bt(o) ? "default" in o ? a = Ts(
      o.from || r,
      o.default,
      !0
    ) : a = Ts(o.from || r) : a = Ts(o), /* @__PURE__ */ bn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function Ah(e, t, n) {
  Er(
    qe(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function zm(e, t, n, r) {
  let o = r.includes(".") ? Tm(n, r) : () => n[r];
  if (Wt(e)) {
    const a = t[e];
    Ze(a) && Ki(o, a);
  } else if (Ze(e))
    Ki(o, e.bind(n));
  else if (bt(e))
    if (qe(e))
      e.forEach((a) => zm(a, t, n, r));
    else {
      const a = Ze(e.handler) ? e.handler.bind(n) : t[e.handler];
      Ze(a) && Ki(o, a, e);
    }
}
function jm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, f = a.get(t);
  let d;
  return f ? d = f : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (v) => tl(d, v, c, !0)
  ), tl(d, t, c)), bt(t) && a.set(t, d), d;
}
function tl(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && tl(e, a, n, !0), o && o.forEach(
    (c) => tl(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const f = Kv[c] || n && n[c];
      e[c] = f ? f(e[c], t[c]) : t[c];
    }
  return e;
}
const Kv = {
  data: Ch,
  props: Ih,
  emits: Ih,
  // objects
  methods: ya,
  computed: ya,
  // lifecycle
  beforeCreate: Sn,
  created: Sn,
  beforeMount: Sn,
  mounted: Sn,
  beforeUpdate: Sn,
  updated: Sn,
  beforeDestroy: Sn,
  beforeUnmount: Sn,
  destroyed: Sn,
  unmounted: Sn,
  activated: Sn,
  deactivated: Sn,
  errorCaptured: Sn,
  serverPrefetch: Sn,
  // assets
  components: ya,
  directives: ya,
  // watch
  watch: Uv,
  // provide / inject
  provide: Ch,
  inject: Bv
};
function Ch(e, t) {
  return t ? e ? function() {
    return vn(
      Ze(e) ? e.call(this, this) : e,
      Ze(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Bv(e, t) {
  return ya(bu(e), bu(t));
}
function bu(e) {
  if (qe(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Sn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function ya(e, t) {
  return e ? vn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ih(e, t) {
  return e ? qe(e) && qe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : vn(
    /* @__PURE__ */ Object.create(null),
    Ph(e),
    Ph(t ?? {})
  ) : t;
}
function Uv(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = vn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Sn(e[r], t[r]);
  return n;
}
function Hm() {
  return {
    app: null,
    config: {
      isNativeTag: rm,
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
let Wv = 0;
function Yv(e, t) {
  return function(r, o = null) {
    Ze(r) || (r = vn({}, r)), o != null && !bt(o) && (o = null);
    const a = Hm(), c = /* @__PURE__ */ new WeakSet(), f = [];
    let d = !1;
    const v = a.app = {
      _uid: Wv++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: N_,
      get config() {
        return a.config;
      },
      set config(g) {
      },
      use(g, ...w) {
        return c.has(g) || (g && Ze(g.install) ? (c.add(g), g.install(v, ...w)) : Ze(g) && (c.add(g), g(v, ...w))), v;
      },
      mixin(g) {
        return a.mixins.includes(g) || a.mixins.push(g), v;
      },
      component(g, w) {
        return w ? (a.components[g] = w, v) : a.components[g];
      },
      directive(g, w) {
        return w ? (a.directives[g] = w, v) : a.directives[g];
      },
      mount(g, w, x) {
        if (!d) {
          const P = v._ceVNode || De(r, o);
          return P.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(P, g, x), d = !0, v._container = g, g.__vue_app__ = v, Ll(P.component);
        }
      },
      onUnmount(g) {
        f.push(g);
      },
      unmount() {
        d && (Er(
          f,
          v._instance,
          16
        ), e(null, v._container), delete v._container.__vue_app__);
      },
      provide(g, w) {
        return a.provides[g] = w, v;
      },
      runWithContext(g) {
        const w = Oo;
        Oo = v;
        try {
          return g();
        } finally {
          Oo = w;
        }
      }
    };
    return v;
  };
}
let Oo = null;
const Xv = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Mn(t)}Modifiers`] || e[`${Zi(t)}Modifiers`];
function qv(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || wt;
  let o = n;
  const a = t.startsWith("update:"), c = a && Xv(r, t.slice(7));
  c && (c.trim && (o = n.map((g) => Wt(g) ? g.trim() : g)), c.number && (o = n.map(qu)));
  let f, d = r[f = Nc(t)] || // also try camelCase event handler (#2249)
  r[f = Nc(Mn(t))];
  !d && a && (d = r[f = Nc(Zi(t))]), d && Er(
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
const Jv = /* @__PURE__ */ new WeakMap();
function Gm(e, t, n = !1) {
  const r = n ? Jv : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, f = !1;
  if (!Ze(e)) {
    const d = (v) => {
      const g = Gm(v, t, !0);
      g && (f = !0, vn(c, g));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !f ? (bt(e) && r.set(e, null), null) : (qe(a) ? a.forEach((d) => c[d] = null) : vn(c, a), bt(e) && r.set(e, c), c);
}
function Tl(e, t) {
  return !e || !kl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ht(e, t[0].toLowerCase() + t.slice(1)) || ht(e, Zi(t)) || ht(e, t));
}
function Eh(e) {
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
    renderCache: g,
    props: w,
    data: x,
    setupState: P,
    ctx: S,
    inheritAttrs: _
  } = e, F = Qs(e);
  let D, Y;
  try {
    if (n.shapeFlag & 4) {
      const z = o || r, O = z;
      D = kr(
        v.call(
          O,
          z,
          g,
          w,
          P,
          x,
          S
        )
      ), Y = f;
    } else {
      const z = t;
      D = kr(
        z.length > 1 ? z(
          w,
          { attrs: f, slots: c, emit: d }
        ) : z(
          w,
          null
        )
      ), Y = t.props ? f : Zv(f);
    }
  } catch (z) {
    Ia.length = 0, Il(z, e, 1), D = De(_i);
  }
  let I = D;
  if (Y && _ !== !1) {
    const z = Object.keys(Y), { shapeFlag: O } = I;
    z.length && O & 7 && (a && z.some(Ml) && (Y = Qv(
      Y,
      a
    )), I = zo(I, Y, !1, !0));
  }
  return n.dirs && (I = zo(I, null, !1, !0), I.dirs = I.dirs ? I.dirs.concat(n.dirs) : n.dirs), n.transition && sf(I, n.transition), D = I, Qs(F), D;
}
const Zv = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || kl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Qv = (e, t) => {
  const n = {};
  for (const r in e)
    (!Ml(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function e_(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: f, patchFlag: d } = t, v = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Oh(r, c, v) : !!c;
    if (d & 8) {
      const g = t.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        const x = g[w];
        if (Km(c, r, x) && !Tl(v, x))
          return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable) ? !0 : r === c ? !1 : r ? c ? Oh(r, c, v) : !0 : !!c;
  return !1;
}
function Oh(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (Km(t, e, a) && !Tl(n, a))
      return !0;
  }
  return !1;
}
function Km(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && bt(r) && bt(o) ? !Ju(r, o) : r !== o;
}
function t_({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Bm = {}, Um = () => Object.create(Bm), Wm = (e) => Object.getPrototypeOf(e) === Bm;
function n_(e, t, n, r = !1) {
  const o = {}, a = Um();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ym(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ cv(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function r_(e, t, n, r) {
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
      const g = e.vnode.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        let x = g[w];
        if (Tl(e.emitsOptions, x))
          continue;
        const P = t[x];
        if (d)
          if (ht(a, x))
            P !== a[x] && (a[x] = P, v = !0);
          else {
            const S = Mn(x);
            o[S] = vu(
              d,
              f,
              S,
              P,
              e,
              !1
            );
          }
        else
          P !== a[x] && (a[x] = P, v = !0);
      }
    }
  } else {
    Ym(e, t, o, a) && (v = !0);
    let g;
    for (const w in f)
      (!t || // for camelCase
      !ht(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = Zi(w)) === w || !ht(t, g))) && (d ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[g] !== void 0) && (o[w] = vu(
        d,
        f,
        w,
        void 0,
        e,
        !0
      )) : delete o[w]);
    if (a !== f)
      for (const w in a)
        (!t || !ht(t, w)) && (delete a[w], v = !0);
  }
  v && Jr(e.attrs, "set", "");
}
function Ym(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, f;
  if (t)
    for (let d in t) {
      if (ka(d))
        continue;
      const v = t[d];
      let g;
      o && ht(o, g = Mn(d)) ? !a || !a.includes(g) ? n[g] = v : (f || (f = {}))[g] = v : Tl(e.emitsOptions, d) || (!(d in r) || v !== r[d]) && (r[d] = v, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ dt(n), v = f || wt;
    for (let g = 0; g < a.length; g++) {
      const w = a[g];
      n[w] = vu(
        o,
        d,
        w,
        v[w],
        e,
        !ht(v, w)
      );
    }
  }
  return c;
}
function vu(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const f = ht(c, "default");
    if (f && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Ze(d)) {
        const { propsDefaults: v } = o;
        if (n in v)
          r = v[n];
        else {
          const g = Ba(o);
          r = v[n] = d.call(
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
const i_ = /* @__PURE__ */ new WeakMap();
function Xm(e, t, n = !1) {
  const r = n ? i_ : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, f = [];
  let d = !1;
  if (!Ze(e)) {
    const g = (w) => {
      d = !0;
      const [x, P] = Xm(w, t, !0);
      vn(c, x), P && f.push(...P);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!a && !d)
    return bt(e) && r.set(e, Co), Co;
  if (qe(a))
    for (let g = 0; g < a.length; g++) {
      const w = Mn(a[g]);
      Fh(w) && (c[w] = wt);
    }
  else if (a)
    for (const g in a) {
      const w = Mn(g);
      if (Fh(w)) {
        const x = a[g], P = c[w] = qe(x) || Ze(x) ? { type: x } : vn({}, x), S = P.type;
        let _ = !1, F = !0;
        if (qe(S))
          for (let D = 0; D < S.length; ++D) {
            const Y = S[D], I = Ze(Y) && Y.name;
            if (I === "Boolean") {
              _ = !0;
              break;
            } else I === "String" && (F = !1);
          }
        else
          _ = Ze(S) && S.name === "Boolean";
        P[
          0
          /* shouldCast */
        ] = _, P[
          1
          /* shouldCastTrue */
        ] = F, (_ || ht(P, "default")) && f.push(w);
      }
    }
  const v = [c, f];
  return bt(e) && r.set(e, v), v;
}
function Fh(e) {
  return e[0] !== "$" && !ka(e);
}
const lf = (e) => e === "_" || e === "_ctx" || e === "$stable", cf = (e) => qe(e) ? e.map(kr) : [kr(e)], o_ = (e, t, n) => {
  if (t._n)
    return t;
  const r = Om((...o) => cf(t(...o)), n);
  return r._c = !1, r;
}, qm = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (lf(o)) continue;
    const a = e[o];
    if (Ze(a))
      t[o] = o_(o, a, r);
    else if (a != null) {
      const c = cf(a);
      t[o] = () => c;
    }
  }
}, Jm = (e, t) => {
  const n = cf(t);
  e.slots.default = () => n;
}, Zm = (e, t, n) => {
  for (const r in t)
    (n || !lf(r)) && (e[r] = t[r]);
}, a_ = (e, t, n) => {
  const r = e.slots = Um();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Zm(r, t, n), n && lm(r, "_", o, !0)) : qm(t, r);
  } else t && Jm(e, t);
}, s_ = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = wt;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? a = !1 : Zm(o, t, n) : (a = !t.$stable, qm(t, o)), c = t;
  } else t && (Jm(e, t), c = { default: 1 });
  if (a)
    for (const f in o)
      !lf(f) && c[f] == null && delete o[f];
}, Dn = d_;
function l_(e) {
  return c_(e);
}
function c_(e, t) {
  const n = Al();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: c,
    createText: f,
    createComment: d,
    setText: v,
    setElementText: g,
    parentNode: w,
    nextSibling: x,
    setScopeId: P = Cr,
    insertStaticContent: S
  } = e, _ = ($, H, ee, be = null, ge = null, ve = null, xe = void 0, Me = null, ke = !!H.dynamicChildren) => {
    if ($ === H)
      return;
    $ && !fa($, H) && (be = Un($), Te($, ge, ve, !0), $ = null), H.patchFlag === -2 && (ke = !1, H.dynamicChildren = null);
    const { type: le, ref: $e, shapeFlag: Ae } = H;
    switch (le) {
      case Dl:
        F($, H, ee, be);
        break;
      case _i:
        D($, H, ee, be);
        break;
      case Fc:
        $ == null && Y(H, ee, be, xe);
        break;
      case Be:
        ue(
          $,
          H,
          ee,
          be,
          ge,
          ve,
          xe,
          Me,
          ke
        );
        break;
      default:
        Ae & 1 ? O(
          $,
          H,
          ee,
          be,
          ge,
          ve,
          xe,
          Me,
          ke
        ) : Ae & 6 ? fe(
          $,
          H,
          ee,
          be,
          ge,
          ve,
          xe,
          Me,
          ke
        ) : (Ae & 64 || Ae & 128) && le.process(
          $,
          H,
          ee,
          be,
          ge,
          ve,
          xe,
          Me,
          ke,
          ln
        );
    }
    $e != null && ge ? Pa($e, $ && $.ref, ve, H || $, !H) : $e == null && $ && $.ref != null && Pa($.ref, null, ve, $, !0);
  }, F = ($, H, ee, be) => {
    if ($ == null)
      r(
        H.el = f(H.children),
        ee,
        be
      );
    else {
      const ge = H.el = $.el;
      H.children !== $.children && v(ge, H.children);
    }
  }, D = ($, H, ee, be) => {
    $ == null ? r(
      H.el = d(H.children || ""),
      ee,
      be
    ) : H.el = $.el;
  }, Y = ($, H, ee, be) => {
    [$.el, $.anchor] = S(
      $.children,
      H,
      ee,
      be,
      $.el,
      $.anchor
    );
  }, I = ({ el: $, anchor: H }, ee, be) => {
    let ge;
    for (; $ && $ !== H; )
      ge = x($), r($, ee, be), $ = ge;
    r(H, ee, be);
  }, z = ({ el: $, anchor: H }) => {
    let ee;
    for (; $ && $ !== H; )
      ee = x($), o($), $ = ee;
    o(H);
  }, O = ($, H, ee, be, ge, ve, xe, Me, ke) => {
    if (H.type === "svg" ? xe = "svg" : H.type === "math" && (xe = "mathml"), $ == null)
      R(
        H,
        ee,
        be,
        ge,
        ve,
        xe,
        Me,
        ke
      );
    else {
      const le = $.el && $.el._isVueCE ? $.el : null;
      try {
        le && le._beginPatch(), _e(
          $,
          H,
          ge,
          ve,
          xe,
          Me,
          ke
        );
      } finally {
        le && le._endPatch();
      }
    }
  }, R = ($, H, ee, be, ge, ve, xe, Me) => {
    let ke, le;
    const { props: $e, shapeFlag: Ae, transition: Re, dirs: p } = $;
    if (ke = $.el = c(
      $.type,
      ve,
      $e && $e.is,
      $e
    ), Ae & 8 ? g(ke, $.children) : Ae & 16 && Z(
      $.children,
      ke,
      null,
      be,
      ge,
      Oc($, ve),
      xe,
      Me
    ), p && Ai($, null, be, "created"), G(ke, $, $.scopeId, xe, be), $e) {
      for (const nt in $e)
        nt !== "value" && !ka(nt) && a(ke, nt, null, $e[nt], ve, be);
      "value" in $e && a(ke, "value", null, $e.value, ve), (le = $e.onVnodeBeforeMount) && br(le, be, $);
    }
    p && Ai($, null, be, "beforeMount");
    const Ee = u_(ge, Re);
    Ee && Re.beforeEnter(ke), r(ke, H, ee), ((le = $e && $e.onVnodeMounted) || Ee || p) && Dn(() => {
      try {
        le && br(le, be, $), Ee && Re.enter(ke), p && Ai($, null, be, "mounted");
      } finally {
      }
    }, ge);
  }, G = ($, H, ee, be, ge) => {
    if (ee && P($, ee), be)
      for (let ve = 0; ve < be.length; ve++)
        P($, be[ve]);
    if (ge) {
      let ve = ge.subTree;
      if (H === ve || ng(ve.type) && (ve.ssContent === H || ve.ssFallback === H)) {
        const xe = ge.vnode;
        G(
          $,
          xe,
          xe.scopeId,
          xe.slotScopeIds,
          ge.parent
        );
      }
    }
  }, Z = ($, H, ee, be, ge, ve, xe, Me, ke = 0) => {
    for (let le = ke; le < $.length; le++) {
      const $e = $[le] = Me ? qr($[le]) : kr($[le]);
      _(
        null,
        $e,
        H,
        ee,
        be,
        ge,
        ve,
        xe,
        Me
      );
    }
  }, _e = ($, H, ee, be, ge, ve, xe) => {
    const Me = H.el = $.el;
    let { patchFlag: ke, dynamicChildren: le, dirs: $e } = H;
    ke |= $.patchFlag & 16;
    const Ae = $.props || wt, Re = H.props || wt;
    let p;
    if (ee && Ci(ee, !1), (p = Re.onVnodeBeforeUpdate) && br(p, ee, H, $), $e && Ai(H, $, ee, "beforeUpdate"), ee && Ci(ee, !0), (Ae.innerHTML && Re.innerHTML == null || Ae.textContent && Re.textContent == null) && g(Me, ""), le ? T(
      $.dynamicChildren,
      le,
      Me,
      ee,
      be,
      Oc(H, ge),
      ve
    ) : xe || M(
      $,
      H,
      Me,
      null,
      ee,
      be,
      Oc(H, ge),
      ve,
      !1
    ), ke > 0) {
      if (ke & 16)
        E(Me, Ae, Re, ee, ge);
      else if (ke & 2 && Ae.class !== Re.class && a(Me, "class", null, Re.class, ge), ke & 4 && a(Me, "style", Ae.style, Re.style, ge), ke & 8) {
        const Ee = H.dynamicProps;
        for (let nt = 0; nt < Ee.length; nt++) {
          const We = Ee[nt], ot = Ae[We], Ft = Re[We];
          (Ft !== ot || We === "value") && a(Me, We, ot, Ft, ge, ee);
        }
      }
      ke & 1 && $.children !== H.children && g(Me, H.children);
    } else !xe && le == null && E(Me, Ae, Re, ee, ge);
    ((p = Re.onVnodeUpdated) || $e) && Dn(() => {
      p && br(p, ee, H, $), $e && Ai(H, $, ee, "updated");
    }, be);
  }, T = ($, H, ee, be, ge, ve, xe) => {
    for (let Me = 0; Me < H.length; Me++) {
      const ke = $[Me], le = H[Me], $e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ke.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ke.type === Be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !fa(ke, le) || // - In the case of a component, it could contain anything.
        ke.shapeFlag & 198) ? w(ke.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ee
        )
      );
      _(
        ke,
        le,
        $e,
        null,
        be,
        ge,
        ve,
        xe,
        !0
      );
    }
  }, E = ($, H, ee, be, ge) => {
    if (H !== ee) {
      if (H !== wt)
        for (const ve in H)
          !ka(ve) && !(ve in ee) && a(
            $,
            ve,
            H[ve],
            null,
            ge,
            be
          );
      for (const ve in ee) {
        if (ka(ve)) continue;
        const xe = ee[ve], Me = H[ve];
        xe !== Me && ve !== "value" && a($, ve, Me, xe, ge, be);
      }
      "value" in ee && a($, "value", H.value, ee.value, ge);
    }
  }, ue = ($, H, ee, be, ge, ve, xe, Me, ke) => {
    const le = H.el = $ ? $.el : f(""), $e = H.anchor = $ ? $.anchor : f("");
    let { patchFlag: Ae, dynamicChildren: Re, slotScopeIds: p } = H;
    p && (Me = Me ? Me.concat(p) : p), $ == null ? (r(le, ee, be), r($e, ee, be), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      ee,
      $e,
      ge,
      ve,
      xe,
      Me,
      ke
    )) : Ae > 0 && Ae & 64 && Re && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    $.dynamicChildren && $.dynamicChildren.length === Re.length ? (T(
      $.dynamicChildren,
      Re,
      ee,
      ge,
      ve,
      xe,
      Me
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (H.key != null || ge && H === ge.subTree) && Qm(
      $,
      H,
      !0
      /* shallow */
    )) : M(
      $,
      H,
      ee,
      $e,
      ge,
      ve,
      xe,
      Me,
      ke
    );
  }, fe = ($, H, ee, be, ge, ve, xe, Me, ke) => {
    H.slotScopeIds = Me, $ == null ? H.shapeFlag & 512 ? ge.ctx.activate(
      H,
      ee,
      be,
      xe,
      ke
    ) : de(
      H,
      ee,
      be,
      ge,
      ve,
      xe,
      ke
    ) : U($, H, ke);
  }, de = ($, H, ee, be, ge, ve, xe) => {
    const Me = $.component = b_(
      $,
      be,
      ge
    );
    if (Lm($) && (Me.ctx.renderer = ln), __(Me, !1, xe), Me.asyncDep) {
      if (ge && ge.registerDep(Me, X, xe), !$.el) {
        const ke = Me.subTree = De(_i);
        D(null, ke, H, ee), $.placeholder = ke.el;
      }
    } else
      X(
        Me,
        $,
        H,
        ee,
        ge,
        ve,
        xe
      );
  }, U = ($, H, ee) => {
    const be = H.component = $.component;
    if (e_($, H, ee))
      if (be.asyncDep && !be.asyncResolved) {
        j(be, H, ee);
        return;
      } else
        be.next = H, be.update();
    else
      H.el = $.el, be.vnode = H;
  }, X = ($, H, ee, be, ge, ve, xe) => {
    const Me = () => {
      if ($.isMounted) {
        let { next: Ae, bu: Re, u: p, parent: Ee, vnode: nt } = $;
        {
          const vt = eg($);
          if (vt) {
            Ae && (Ae.el = nt.el, j($, Ae, xe)), vt.asyncDep.then(() => {
              Dn(() => {
                $.isUnmounted || le();
              }, ge);
            });
            return;
          }
        }
        let We = Ae, ot;
        Ci($, !1), Ae ? (Ae.el = nt.el, j($, Ae, xe)) : Ae = nt, Re && Fs(Re), (ot = Ae.props && Ae.props.onVnodeBeforeUpdate) && br(ot, Ee, Ae, nt), Ci($, !0);
        const Ft = Eh($), rn = $.subTree;
        $.subTree = Ft, _(
          rn,
          Ft,
          // parent may have changed if it's in a teleport
          w(rn.el),
          // anchor may have changed if it's in a fragment
          Un(rn),
          $,
          ge,
          ve
        ), Ae.el = Ft.el, We === null && t_($, Ft.el), p && Dn(p, ge), (ot = Ae.props && Ae.props.onVnodeUpdated) && Dn(
          () => br(ot, Ee, Ae, nt),
          ge
        );
      } else {
        let Ae;
        const { el: Re, props: p } = H, { bm: Ee, m: nt, parent: We, root: ot, type: Ft } = $, rn = Aa(H);
        Ci($, !1), Ee && Fs(Ee), !rn && (Ae = p && p.onVnodeBeforeMount) && br(Ae, We, H), Ci($, !0);
        {
          ot.ce && ot.ce._hasShadowRoot() && ot.ce._injectChildStyle(
            Ft,
            $.parent ? $.parent.type : void 0
          );
          const vt = $.subTree = Eh($);
          _(
            null,
            vt,
            ee,
            be,
            $,
            ge,
            ve
          ), H.el = vt.el;
        }
        if (nt && Dn(nt, ge), !rn && (Ae = p && p.onVnodeMounted)) {
          const vt = H;
          Dn(
            () => br(Ae, We, vt),
            ge
          );
        }
        (H.shapeFlag & 256 || We && Aa(We.vnode) && We.vnode.shapeFlag & 256) && $.a && Dn($.a, ge), $.isMounted = !0, H = ee = be = null;
      }
    };
    $.scope.on();
    const ke = $.effect = new dm(Me);
    $.scope.off();
    const le = $.update = ke.run.bind(ke), $e = $.job = ke.runIfDirty.bind(ke);
    $e.i = $, $e.id = $.uid, ke.scheduler = () => af($e), Ci($, !0), le();
  }, j = ($, H, ee) => {
    H.component = $;
    const be = $.vnode.props;
    $.vnode = H, $.next = null, r_($, H.props, be, ee), s_($, H.children, ee), ti(), Sh($), ni();
  }, M = ($, H, ee, be, ge, ve, xe, Me, ke = !1) => {
    const le = $ && $.children, $e = $ ? $.shapeFlag : 0, Ae = H.children, { patchFlag: Re, shapeFlag: p } = H;
    if (Re > 0) {
      if (Re & 128) {
        W(
          le,
          Ae,
          ee,
          be,
          ge,
          ve,
          xe,
          Me,
          ke
        );
        return;
      } else if (Re & 256) {
        Q(
          le,
          Ae,
          ee,
          be,
          ge,
          ve,
          xe,
          Me,
          ke
        );
        return;
      }
    }
    p & 8 ? ($e & 16 && Zt(le, ge, ve), Ae !== le && g(ee, Ae)) : $e & 16 ? p & 16 ? W(
      le,
      Ae,
      ee,
      be,
      ge,
      ve,
      xe,
      Me,
      ke
    ) : Zt(le, ge, ve, !0) : ($e & 8 && g(ee, ""), p & 16 && Z(
      Ae,
      ee,
      be,
      ge,
      ve,
      xe,
      Me,
      ke
    ));
  }, Q = ($, H, ee, be, ge, ve, xe, Me, ke) => {
    $ = $ || Co, H = H || Co;
    const le = $.length, $e = H.length, Ae = Math.min(le, $e);
    let Re;
    for (Re = 0; Re < Ae; Re++) {
      const p = H[Re] = ke ? qr(H[Re]) : kr(H[Re]);
      _(
        $[Re],
        p,
        ee,
        null,
        ge,
        ve,
        xe,
        Me,
        ke
      );
    }
    le > $e ? Zt(
      $,
      ge,
      ve,
      !0,
      !1,
      Ae
    ) : Z(
      H,
      ee,
      be,
      ge,
      ve,
      xe,
      Me,
      ke,
      Ae
    );
  }, W = ($, H, ee, be, ge, ve, xe, Me, ke) => {
    let le = 0;
    const $e = H.length;
    let Ae = $.length - 1, Re = $e - 1;
    for (; le <= Ae && le <= Re; ) {
      const p = $[le], Ee = H[le] = ke ? qr(H[le]) : kr(H[le]);
      if (fa(p, Ee))
        _(
          p,
          Ee,
          ee,
          null,
          ge,
          ve,
          xe,
          Me,
          ke
        );
      else
        break;
      le++;
    }
    for (; le <= Ae && le <= Re; ) {
      const p = $[Ae], Ee = H[Re] = ke ? qr(H[Re]) : kr(H[Re]);
      if (fa(p, Ee))
        _(
          p,
          Ee,
          ee,
          null,
          ge,
          ve,
          xe,
          Me,
          ke
        );
      else
        break;
      Ae--, Re--;
    }
    if (le > Ae) {
      if (le <= Re) {
        const p = Re + 1, Ee = p < $e ? H[p].el : be;
        for (; le <= Re; )
          _(
            null,
            H[le] = ke ? qr(H[le]) : kr(H[le]),
            ee,
            Ee,
            ge,
            ve,
            xe,
            Me,
            ke
          ), le++;
      }
    } else if (le > Re)
      for (; le <= Ae; )
        Te($[le], ge, ve, !0), le++;
    else {
      const p = le, Ee = le, nt = /* @__PURE__ */ new Map();
      for (le = Ee; le <= Re; le++) {
        const Kt = H[le] = ke ? qr(H[le]) : kr(H[le]);
        Kt.key != null && nt.set(Kt.key, le);
      }
      let We, ot = 0;
      const Ft = Re - Ee + 1;
      let rn = !1, vt = 0;
      const Fe = new Array(Ft);
      for (le = 0; le < Ft; le++) Fe[le] = 0;
      for (le = p; le <= Ae; le++) {
        const Kt = $[le];
        if (ot >= Ft) {
          Te(Kt, ge, ve, !0);
          continue;
        }
        let cn;
        if (Kt.key != null)
          cn = nt.get(Kt.key);
        else
          for (We = Ee; We <= Re; We++)
            if (Fe[We - Ee] === 0 && fa(Kt, H[We])) {
              cn = We;
              break;
            }
        cn === void 0 ? Te(Kt, ge, ve, !0) : (Fe[cn - Ee] = le + 1, cn >= vt ? vt = cn : rn = !0, _(
          Kt,
          H[cn],
          ee,
          null,
          ge,
          ve,
          xe,
          Me,
          ke
        ), ot++);
      }
      const Wn = rn ? f_(Fe) : Co;
      for (We = Wn.length - 1, le = Ft - 1; le >= 0; le--) {
        const Kt = Ee + le, cn = H[Kt], Dr = H[Kt + 1], Lr = Kt + 1 < $e ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Dr.el || tg(Dr)
        ) : be;
        Fe[le] === 0 ? _(
          null,
          cn,
          ee,
          Lr,
          ge,
          ve,
          xe,
          Me,
          ke
        ) : rn && (We < 0 || le !== Wn[We] ? Pe(cn, ee, Lr, 2) : We--);
      }
    }
  }, Pe = ($, H, ee, be, ge = null) => {
    const { el: ve, type: xe, transition: Me, children: ke, shapeFlag: le } = $;
    if (le & 6) {
      Pe($.component.subTree, H, ee, be);
      return;
    }
    if (le & 128) {
      $.suspense.move(H, ee, be);
      return;
    }
    if (le & 64) {
      xe.move($, H, ee, ln);
      return;
    }
    if (xe === Be) {
      r(ve, H, ee);
      for (let Ae = 0; Ae < ke.length; Ae++)
        Pe(ke[Ae], H, ee, be);
      r($.anchor, H, ee);
      return;
    }
    if (xe === Fc) {
      I($, H, ee);
      return;
    }
    if (be !== 2 && le & 1 && Me)
      if (be === 0)
        Me.beforeEnter(ve), r(ve, H, ee), Dn(() => Me.enter(ve), ge);
      else {
        const { leave: Ae, delayLeave: Re, afterLeave: p } = Me, Ee = () => {
          $.ctx.isUnmounted ? o(ve) : r(ve, H, ee);
        }, nt = () => {
          ve._isLeaving && ve[Pv](
            !0
            /* cancelled */
          ), Ae(ve, () => {
            Ee(), p && p();
          });
        };
        Re ? Re(ve, Ee, nt) : nt();
      }
    else
      r(ve, H, ee);
  }, Te = ($, H, ee, be = !1, ge = !1) => {
    const {
      type: ve,
      props: xe,
      ref: Me,
      children: ke,
      dynamicChildren: le,
      shapeFlag: $e,
      patchFlag: Ae,
      dirs: Re,
      cacheIndex: p,
      memo: Ee
    } = $;
    if (Ae === -2 && (ge = !1), Me != null && (ti(), Pa(Me, null, ee, $, !0), ni()), p != null && (H.renderCache[p] = void 0), $e & 256) {
      H.ctx.deactivate($);
      return;
    }
    const nt = $e & 1 && Re, We = !Aa($);
    let ot;
    if (We && (ot = xe && xe.onVnodeBeforeUnmount) && br(ot, H, $), $e & 6)
      ut($.component, ee, be);
    else {
      if ($e & 128) {
        $.suspense.unmount(ee, be);
        return;
      }
      nt && Ai($, null, H, "beforeUnmount"), $e & 64 ? $.type.remove(
        $,
        H,
        ee,
        ln,
        be
      ) : le && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !le.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ve !== Be || Ae > 0 && Ae & 64) ? Zt(
        le,
        H,
        ee,
        !1,
        !0
      ) : (ve === Be && Ae & 384 || !ge && $e & 16) && Zt(ke, H, ee), be && kt($);
    }
    const Ft = Ee != null && p == null;
    (We && (ot = xe && xe.onVnodeUnmounted) || nt || Ft) && Dn(() => {
      ot && br(ot, H, $), nt && Ai($, null, H, "unmounted"), Ft && ($.el = null);
    }, ee);
  }, kt = ($) => {
    const { type: H, el: ee, anchor: be, transition: ge } = $;
    if (H === Be) {
      pt(ee, be);
      return;
    }
    if (H === Fc) {
      z($);
      return;
    }
    const ve = () => {
      o(ee), ge && !ge.persisted && ge.afterLeave && ge.afterLeave();
    };
    if ($.shapeFlag & 1 && ge && !ge.persisted) {
      const { leave: xe, delayLeave: Me } = ge, ke = () => xe(ee, ve);
      Me ? Me($.el, ve, ke) : ke();
    } else
      ve();
  }, pt = ($, H) => {
    let ee;
    for (; $ !== H; )
      ee = x($), o($), $ = ee;
    o(H);
  }, ut = ($, H, ee) => {
    const { bum: be, scope: ge, job: ve, subTree: xe, um: Me, m: ke, a: le } = $;
    Th(ke), Th(le), be && Fs(be), ge.stop(), ve && (ve.flags |= 8, Te(xe, $, H, ee)), Me && Dn(Me, H), Dn(() => {
      $.isUnmounted = !0;
    }, H);
  }, Zt = ($, H, ee, be = !1, ge = !1, ve = 0) => {
    for (let xe = ve; xe < $.length; xe++)
      Te($[xe], H, ee, be, ge);
  }, Un = ($) => {
    if ($.shapeFlag & 6)
      return Un($.component.subTree);
    if ($.shapeFlag & 128)
      return $.suspense.next();
    const H = x($.anchor || $.el), ee = H && H[Mv];
    return ee ? x(ee) : H;
  };
  let Mt = !1;
  const Yt = ($, H, ee) => {
    let be;
    $ == null ? H._vnode && (Te(H._vnode, null, null, !0), be = H._vnode.component) : _(
      H._vnode || null,
      $,
      H,
      null,
      null,
      null,
      ee
    ), H._vnode = $, Mt || (Mt = !0, Sh(be), Cm(), Mt = !1);
  }, ln = {
    p: _,
    um: Te,
    m: Pe,
    r: kt,
    mt: de,
    mc: Z,
    pc: M,
    pbc: T,
    n: Un,
    o: e
  };
  return {
    render: Yt,
    hydrate: void 0,
    createApp: Yv(Yt)
  };
}
function Oc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ci({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function u_(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Qm(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (qe(r) && qe(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let f = o[a];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = o[a] = qr(o[a]), f.el = c.el), !n && f.patchFlag !== -2 && Qm(c, f)), f.type === Dl && (f.patchFlag === -1 && (f = o[a] = qr(f)), f.el = c.el), f.type === _i && !f.el && (f.el = c.el);
    }
}
function f_(e) {
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
function eg(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : eg(t);
}
function Th(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function tg(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? tg(t.subTree) : null;
}
const ng = (e) => e.__isSuspense;
function d_(e, t) {
  t && t.pendingBranch ? qe(e) ? t.effects.push(...e) : t.effects.push(e) : _v(e);
}
const Be = /* @__PURE__ */ Symbol.for("v-fgt"), Dl = /* @__PURE__ */ Symbol.for("v-txt"), _i = /* @__PURE__ */ Symbol.for("v-cmt"), Fc = /* @__PURE__ */ Symbol.for("v-stc"), Ia = [];
let Bn = null;
function ie(e = !1) {
  Ia.push(Bn = e ? null : []);
}
function h_() {
  Ia.pop(), Bn = Ia[Ia.length - 1] || null;
}
let Ta = 1;
function Dh(e, t = !1) {
  Ta += e, e < 0 && Bn && t && (Bn.hasOnce = !0);
}
function rg(e) {
  return e.dynamicChildren = Ta > 0 ? Bn || Co : null, h_(), Ta > 0 && Bn && Bn.push(e), e;
}
function ce(e, t, n, r, o, a) {
  return rg(
    K(
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
  return rg(
    De(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function ig(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function fa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const og = ({ key: e }) => e ?? null, Ds = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Wt(e) || /* @__PURE__ */ bn(e) || Ze(e) ? { i: Kn, r: e, k: t, f: !!n } : e : null);
function K(e, t = null, n = null, r = 0, o = null, a = e === Be ? 0 : 1, c = !1, f = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && og(t),
    ref: t && Ds(t),
    scopeId: Em,
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
    ctx: Kn
  };
  return f ? (uf(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= Wt(n) ? 8 : 16), Ta > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Bn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Bn.push(d), d;
}
const De = p_;
function p_(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Vm) && (e = _i), ig(e)) {
    const f = zo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && uf(f, n), Ta > 0 && !a && Bn && (f.shapeFlag & 6 ? Bn[Bn.indexOf(e)] = f : Bn.push(f)), f.patchFlag = -2, f;
  }
  if (M_(e) && (e = e.__vccOpts), t) {
    t = m_(t);
    let { class: f, style: d } = t;
    f && !Wt(f) && (t.class = it(f)), bt(d) && (/* @__PURE__ */ of(d) && !qe(d) && (d = vn({}, d)), t.style = xt(d));
  }
  const c = Wt(e) ? 1 : ng(e) ? 128 : Nv(e) ? 64 : bt(e) ? 4 : Ze(e) ? 2 : 0;
  return K(
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
function m_(e) {
  return e ? /* @__PURE__ */ of(e) || Wm(e) ? vn({}, e) : e : null;
}
function zo(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: f, transition: d } = e, v = t ? yi(o || {}, t) : o, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: v,
    key: v && og(v),
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
    patchFlag: t && e.type !== Be ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && zo(e.ssContent),
    ssFallback: e.ssFallback && zo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && sf(
    g,
    d.clone(g)
  ), g;
}
function ba(e = " ", t = 0) {
  return De(Dl, null, e, t);
}
function st(e = "", t = !1) {
  return t ? (ie(), Tr(_i, null, e)) : De(_i, null, e);
}
function kr(e) {
  return e == null || typeof e == "boolean" ? De(_i) : qe(e) ? De(
    Be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ig(e) ? qr(e) : De(Dl, null, String(e));
}
function qr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : zo(e);
}
function uf(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (qe(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), uf(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Wm(t) ? t._ctx = Kn : o === 3 && Kn && (Kn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ze(t) ? (t = { default: t, _ctx: Kn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ba(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function yi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = it([t.class, r.class]));
      else if (o === "style")
        t.style = xt([t.style, r.style]);
      else if (kl(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(qe(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ml(o) && (t[o] = c);
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
const g_ = Hm();
let y_ = 0;
function b_(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || g_, a = {
    uid: y_++,
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
    scope: new G1(
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
    propsOptions: Xm(r, o),
    emitsOptions: Gm(r, o),
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = qv.bind(null, a), e.ce && e.ce(a), a;
}
let yn = null;
const v_ = () => yn || Kn;
let nl, _u;
{
  const e = Al(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  nl = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => yn = n
  ), _u = t(
    "__VUE_SSR_SETTERS__",
    (n) => Da = n
  );
}
const Ba = (e) => {
  const t = yn;
  return nl(e), e.scope.on(), () => {
    e.scope.off(), nl(t);
  };
}, Lh = () => {
  yn && yn.scope.off(), nl(null);
};
function ag(e) {
  return e.vnode.shapeFlag & 4;
}
let Da = !1;
function __(e, t = !1, n = !1) {
  t && _u(t);
  const { props: r, children: o } = e.vnode, a = ag(e);
  n_(e, r, a, t), a_(e, o, n || t);
  const c = a ? w_(e, t) : void 0;
  return t && _u(!1), c;
}
function w_(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, jv);
  const { setup: r } = n;
  if (r) {
    ti();
    const o = e.setupContext = r.length > 1 ? S_(e) : null, a = Ba(e), c = Ga(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), f = om(c);
    if (ni(), a(), (f || e.sp) && !Aa(e) && Dm(e), f) {
      if (c.then(Lh, Lh), t)
        return c.then((d) => {
          Rh(e, d);
        }).catch((d) => {
          Il(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Rh(e, c);
  } else
    sg(e);
}
function Rh(e, t, n) {
  Ze(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : bt(t) && (e.setupState = Nm(t)), sg(e);
}
function sg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Cr);
  {
    const o = Ba(e);
    ti();
    try {
      Hv(e);
    } finally {
      ni(), o();
    }
  }
}
const x_ = {
  get(e, t) {
    return gn(e, "get", ""), e[t];
  }
};
function S_(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, x_),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Ll(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Nm(uv(e.exposed)), {
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
function k_(e, t = !0) {
  return Ze(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function M_(e) {
  return Ze(e) && "__vccOpts" in e;
}
const ct = (e, t) => /* @__PURE__ */ mv(e, t, Da), N_ = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let wu;
const $h = typeof window < "u" && window.trustedTypes;
if ($h)
  try {
    wu = /* @__PURE__ */ $h.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const lg = wu ? (e) => wu.createHTML(e) : (e) => e, P_ = "http://www.w3.org/2000/svg", A_ = "http://www.w3.org/1998/Math/MathML", Wr = typeof document < "u" ? document : null, Vh = Wr && /* @__PURE__ */ Wr.createElement("template"), C_ = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Wr.createElementNS(P_, e) : t === "mathml" ? Wr.createElementNS(A_, e) : n ? Wr.createElement(e, { is: n }) : Wr.createElement(e);
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
      Vh.innerHTML = lg(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = Vh.content;
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
}, I_ = /* @__PURE__ */ Symbol("_vtc");
function E_(e, t, n) {
  const r = e[I_];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const rl = /* @__PURE__ */ Symbol("_vod"), cg = /* @__PURE__ */ Symbol("_vsh"), Wo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[rl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : da(e, t);
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
  e.style.display = t ? e[rl] : "none", e[cg] = !t;
}
const O_ = /* @__PURE__ */ Symbol(""), F_ = /(?:^|;)\s*display\s*:/;
function T_(e, t, n) {
  const r = e.style, o = Wt(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (Wt(t))
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
      const c = r[O_];
      c && (n += ";" + c), r.cssText = n, a = F_.test(n);
    }
  } else t && e.removeAttribute("style");
  rl in e && (e[rl] = a ? r.display : "", e[cg] && (r.display = "none"));
}
const zh = /\s*!important$/;
function Ls(e, t, n) {
  if (qe(n))
    n.forEach((r) => Ls(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = D_(e, t);
    zh.test(n) ? e.setProperty(
      Zi(r),
      n.replace(zh, ""),
      "important"
    ) : e[r] = n;
  }
}
const jh = ["Webkit", "Moz", "ms"], Tc = {};
function D_(e, t) {
  const n = Tc[t];
  if (n)
    return n;
  let r = Mn(t);
  if (r !== "filter" && r in e)
    return Tc[t] = r;
  r = Pl(r);
  for (let o = 0; o < jh.length; o++) {
    const a = jh[o] + r;
    if (a in e)
      return Tc[t] = a;
  }
  return t;
}
const Hh = "http://www.w3.org/1999/xlink";
function Gh(e, t, n, r, o, a = j1(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Hh, t.slice(6, t.length)) : e.setAttributeNS(Hh, t, n) : n == null || a && !cm(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Ir(n) ? String(n) : n
  );
}
function Kh(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? lg(n) : n);
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
    f === "boolean" ? n = cm(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function So(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function L_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Bh = /* @__PURE__ */ Symbol("_vei");
function R_(e, t, n, r, o = null) {
  const a = e[Bh] || (e[Bh] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [f, d] = $_(t);
    if (r) {
      const v = a[t] = j_(
        r,
        o
      );
      So(e, f, v, d);
    } else c && (L_(e, f, c, d), a[t] = void 0);
  }
}
const Uh = /(?:Once|Passive|Capture)$/;
function $_(e) {
  let t;
  if (Uh.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Uh); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Zi(e.slice(2)), t];
}
let Dc = 0;
const V_ = /* @__PURE__ */ Promise.resolve(), z_ = () => Dc || (V_.then(() => Dc = 0), Dc = Date.now());
function j_(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Er(
      H_(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = z_(), n;
}
function H_(e, t) {
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
const Wh = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, G_ = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? E_(e, r, c) : t === "style" ? T_(e, n, r) : kl(t) ? Ml(t) || R_(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : K_(e, t, r, c)) ? (Kh(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Gh(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (B_(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Wt(r))) ? Kh(e, Mn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Gh(e, t, r, c));
};
function K_(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wh(t) && Ze(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Wh(t) && Wt(n) ? !1 : t in e;
}
function B_(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Mn(t);
  return Array.isArray(n) ? n.some((o) => Mn(o) === r) : Object.keys(n).some((o) => Mn(o) === r);
}
const Yh = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return qe(t) ? (n) => Fs(t, n) : t;
};
function U_(e) {
  e.target.composing = !0;
}
function Xh(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Lc = /* @__PURE__ */ Symbol("_assign");
function qh(e, t, n) {
  return t && (e = e.trim()), n && (e = qu(e)), e;
}
const Jh = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Lc] = Yh(o);
    const a = r || o.props && o.props.type === "number";
    So(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Lc](qh(e.value, n, a));
    }), (n || a) && So(e, "change", () => {
      e.value = qh(e.value, n, a);
    }), t || (So(e, "compositionstart", U_), So(e, "compositionend", Xh), So(e, "change", Xh));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[Lc] = Yh(c), e.composing) return;
    const f = (a || e.type === "number") && !/^0\d/.test(e.value) ? qu(e.value) : e.value, d = t ?? "";
    if (f === d)
      return;
    const v = e.getRootNode();
    (v instanceof Document || v instanceof ShadowRoot) && v.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, W_ = ["ctrl", "shift", "alt", "meta"], Y_ = {
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
  exact: (e, t) => W_.some((n) => e[`${n}Key`] && !t.includes(n))
}, Et = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const f = Y_[t[c]];
      if (f && f(o, t)) return;
    }
    return e(o, ...a);
  }));
}, X_ = /* @__PURE__ */ vn({ patchProp: G_ }, C_);
let Zh;
function q_() {
  return Zh || (Zh = l_(X_));
}
const ff = ((...e) => {
  const t = q_().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Z_(r);
    if (!o) return;
    const a = t._component;
    !Ze(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, J_(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function J_(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Z_(e) {
  return Wt(e) ? document.querySelector(e) : e;
}
function ko(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function Q_() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Qh(e, t = 8) {
  var g;
  const n = (g = e == null ? void 0 : e.getContext) == null ? void 0 : g.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let c = r, f = o, d = -1, v = -1;
  for (let w = 0; w < o; w += 1)
    for (let x = 0; x < r; x += 1)
      a[(w * r + x) * 4 + 3] <= t || (x < c && (c = x), w < f && (f = w), x > d && (d = x), w > v && (v = w));
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
function df(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Yr(e, t, n) {
  if (!e) return ko(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Tt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Rc = null, $c = null, ep = null, tp = null, zt = null, ha = null, xn = null, pi = null;
function ew() {
  if ($c) return $c;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), $c = n, n;
}
function Vc(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Rc = Yr(Rc, n, r);
  const o = Rc;
  Tt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", tp !== o.ctx && (ep = o.ctx.createPattern(ew(), "repeat"), tp = o.ctx), o.ctx.fillStyle = ep, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function tw(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function nw(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function rw(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function iw(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Dt = /* @__PURE__ */ new Map(), hf = 128;
function ow(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), d = `${c}:${f.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Dt.has(d)) {
    const Y = Dt.get(d);
    return Dt.delete(d), Dt.set(d, Y), Y;
  }
  Dt.size >= hf && Dt.delete(Dt.keys().next().value);
  const v = c * 2 + 2, g = c + 1, w = df(v, v), x = w.getContext("2d"), P = f * c, S = c + 1, _ = `rgba(${n},${r},${o},${a})`, F = `rgba(${n},${r},${o},0)`, D = x.createRadialGradient(g, g, P, g, g, S);
  return D.addColorStop(0, _), D.addColorStop(1, F), x.fillStyle = D, x.fillRect(0, 0, v, v), Dt.set(d, w), w;
}
function aw(e, t, n, r, o, a, c) {
  const { r: f, g: d, b: v, a: g } = r, w = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), P = Math.max(0, o), S = Math.max(0, Math.min(0.99, a)), _ = Math.max(0, Math.min(1, c ?? 0)), F = `chisel:${w}:${x}:${n.toFixed(2)}:${f}:${d}:${v}:${g.toFixed(3)}:${P.toFixed(2)}:${S.toFixed(2)}:${_.toFixed(2)}`;
  if (Dt.has(F)) {
    const Z = Dt.get(F);
    return Dt.delete(F), Dt.set(F, Z), Z;
  }
  Dt.size >= hf && Dt.delete(Dt.keys().next().value);
  const D = df(w, x), Y = D.getContext("2d"), I = Y.createImageData(w, x), z = I.data, O = Math.max(0, e - t), R = Math.max(0, Math.min(1, n)), G = 1 + P;
  for (let Z = 0; Z < x; Z++)
    for (let _e = 0; _e < w; _e++) {
      const T = _e + 0.5 - e, E = Z + 0.5 - t, ue = Math.max(Math.abs(T) - O, 0), de = Math.hypot(ue, E) / t;
      if (de >= 1) continue;
      const U = de <= R ? 1 : Math.max(0, (1 - de) / Math.max(1e-4, 1 - R)), X = 1 - de, j = 1 + P * (1 - X) * (1 - X), M = 1 - S * X * X, Q = j * M / G;
      let W = 1;
      if (_ > 0) {
        const kt = Math.floor((E + t) / 1.5), pt = Math.floor((T + e) / 8), ut = Bi(Fo(kt * 41 + 500, pt * 19 + 300));
        W = 1 - _ * 0.42 * ut;
      }
      const Pe = Math.round(255 * Math.min(1, g * U * Q * W));
      if (Pe <= 0) continue;
      const Te = (Z * w + _e) * 4;
      z[Te] = f, z[Te + 1] = d, z[Te + 2] = v, z[Te + 3] = Pe;
    }
  return Y.putImageData(I, 0, 0), Dt.set(F, D), D;
}
function Fo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function Bi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function sw(e, t, n, r, o, a, c) {
  const f = e + 0.5 - n, d = t + 0.5 - r, v = Math.max(0, n - r), g = Math.max(Math.abs(f) - v, 0), w = Math.hypot(g, d) / r;
  if (w >= 1) return 0;
  const x = Bi(Fo(e * 17 + 3, t * 13 + 7)), P = w + a * 0.22 * (x - 0.5);
  if (P >= 1) return 0;
  const S = P <= o ? 1 : Math.max(0, (1 - P) / Math.max(1e-4, 1 - o)), _ = lw(e, t, f, d, n, r), F = a * 0.55;
  if (_ < F) return 0;
  const Y = 0.45 + 0.55 * ((_ - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, c * S * Y));
}
function lw(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), f = Math.floor((r + a) / 2), d = Bi(Fo(c * 13 + 700, f * 17 + 400)), v = Math.floor((n + o) / 1.5), g = Math.floor((r + a) / 1.5), w = Bi(Fo(v * 23 + 800, g * 29 + 500)), x = Bi(Fo(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + w * 0.3 + x * 0.15;
}
function cw(e, t, n, r, o) {
  const { r: a, g: c, b: f, a: d } = r, v = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), w = Math.max(0, Math.min(1, o)), x = `crayon:${v}:${g}:${n.toFixed(2)}:${a}:${c}:${f}:${d.toFixed(3)}:${w.toFixed(2)}`;
  if (Dt.has(x)) {
    const Y = Dt.get(x);
    return Dt.delete(x), Dt.set(x, Y), Y;
  }
  Dt.size >= hf && Dt.delete(Dt.keys().next().value);
  const P = df(v, g), S = P.getContext("2d"), _ = S.createImageData(v, g), F = _.data, D = Math.max(0, Math.min(1, n));
  for (let Y = 0; Y < g; Y++)
    for (let I = 0; I < v; I++) {
      const z = sw(I, Y, e, t, D, w, d);
      if (z <= 0) continue;
      const O = (Y * v + I) * 4;
      F[O] = a, F[O + 1] = c, F[O + 2] = f, F[O + 3] = z;
    }
  return S.putImageData(_, 0, 0), Dt.set(x, P), P;
}
function ug(e, t, n) {
  var _, F;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = rw(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = uw(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((_ = t == null ? void 0 : t.angle) == null ? void 0 : _.value) ?? 0), v = iw(t, o), g = String(((F = t == null ? void 0 : t.targetSpace) == null ? void 0 : F.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && g !== "unwrap", x = t == null ? void 0 : t.scatter, P = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let S;
  if (r === "chisel") {
    const D = o * f, Y = o, I = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), z = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), O = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = aw(D, Y, a, c, I, z, O);
  } else if (r === "crayon") {
    const D = o * f, Y = o, I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = cw(D, Y, a, c, I);
  } else
    S = ow(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: S, radiusPx: o, spacingPx: v, desc: n, aspect: f, angle: d, stampKind: r, scatter: P, latitudeCorrection: w };
}
function uw(e) {
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
function fw(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function np(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function f(v, g) {
    a === 0 ? e.ctx.drawImage(e.stampTex, v - o, g - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(v, g), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && f(t + c, n), t + d > c && f(t - c, n);
}
function pf(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: v, count: g } = e.scatter, w = v * e.radiusPx * o, x = Fo(t, n);
    for (let P = 0; P < g; P++) {
      const S = Bi(x + P * 2) * Math.PI * 2, _ = Math.sqrt(Bi(x + P * 2 + 1)) * w, F = t + Math.cos(S) * _, D = n + Math.sin(S) * _, Y = Math.max(0.5, e.radiusPx * o * 0.48), I = (0.5 - D / Math.max(1, e.desc.height)) * Math.PI, z = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(I)) : 1, O = Y * e.aspect * z;
      np(e, F, D, Y, O);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * f;
  np(e, t, n, a, d);
}
function rp(e, t, n) {
  const r = nw(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = ug(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let x = 0; x < r.length; x++) {
    let P = Number(r[x].u || 0) * o;
    const S = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(P - f[x - 1].x) > o * 0.5 && (P += P < f[x - 1].x ? o : -o), f.push({ x: P, y: S });
  }
  if (pf(c, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let d = f[0], v = f[0], g = f[0], w = 0;
  for (let x = 1; x < f.length; x++) {
    const P = f[x], S = { x: (v.x + P.x) * 0.5, y: (v.y + P.y) * 0.5 };
    x === 1 ? w = La(c, g.x, g.y, S.x, S.y, w) : w = il(c, d, g, S, P, w), d = v, v = P, g = S;
  }
  f.length === 2 ? La(c, g.x, g.y, v.x, v.y, w) : il(c, d, g, v, v, w), e.restore();
}
function Rs(e, t, n) {
  var w;
  const r = Array.isArray((w = t == null ? void 0 : t.geometry) == null ? void 0 : w.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = fw(t), f = [];
  let d = 1 / 0, v = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const P = tw(r[x]);
    let S = Number(P.x || 0) * o;
    x > 0 && Math.abs(S - f[x - 1].x) > o * 0.5 && (S += S < f[x - 1].x ? o : -o), f.push({ x: S, y: Number(P.y || 0) * a }), S < d && (d = S), S > v && (v = S);
  }
  function g(x) {
    e.beginPath(), e.moveTo(f[0].x + x, f[0].y);
    for (let P = 1; P < f.length; P++) e.lineTo(f[P].x + x, f[P].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, g(0), d < 0 && g(o), v > o && g(-o), e.restore();
}
function ys(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Rs(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? rp(e, t, n) : (ha = Yr(ha, n.width, n.height), Tt(ha), rp(ha.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(ha.canvas, 0, 0), e.restore());
}
function Ii(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function La(e, t, n, r, o, a) {
  const c = r - t, f = o - n, d = Math.hypot(c, f);
  if (d < 1e-9) return a;
  let v = e.spacingPx - a;
  for (; v <= d; ) {
    const g = v / d;
    pf(e, t + c * g, n + f * g, 1), v += e.spacingPx;
  }
  return d - v + e.spacingPx;
}
function il(e, t, n, r, o, a) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, v = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, g = 0, w = f, x = w + d, P = x + v, S = x - w, _ = 16;
  let F = a, D = n.x, Y = n.y;
  for (let I = 1; I <= _; I++) {
    const z = w + S * I / _, O = ((w - z) * t.x + (z - g) * n.x) / (w - g), R = ((w - z) * t.y + (z - g) * n.y) / (w - g), G = ((x - z) * n.x + (z - w) * r.x) / (x - w), Z = ((x - z) * n.y + (z - w) * r.y) / (x - w), _e = ((P - z) * r.x + (z - x) * o.x) / (P - x), T = ((P - z) * r.y + (z - x) * o.y) / (P - x), E = ((x - z) * O + (z - g) * G) / (x - g), ue = ((x - z) * R + (z - g) * Z) / (x - g), fe = ((P - z) * G + (z - w) * _e) / (P - w), de = ((P - z) * Z + (z - w) * T) / (P - w), U = ((x - z) * E + (z - w) * fe) / (x - w), X = ((x - z) * ue + (z - w) * de) / (x - w);
    F = La(e, D, Y, U, X, F), D = U, Y = X;
  }
  return F;
}
function dw(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, f = n * a.height, d = e.activeStroke;
  let v = t * c;
  if (d && Math.abs(v - d.prev.x) > c * 0.5 && (v += v < d.prev.x ? c : -c), !d) {
    const P = ug(o, r, a), S = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), _ = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", D = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", pf(P, v, f, 1), e.activeStroke = {
      pprev: { x: v, y: f },
      prev: { x: v, y: f },
      lastMidX: v,
      lastMidY: f,
      stampTex: P.stampTex,
      radiusPx: P.radiusPx,
      spacingPx: P.spacingPx,
      aspect: P.aspect,
      angle: P.angle,
      stampKind: P.stampKind,
      scatter: P.scatter,
      latitudeCorrection: P.latitudeCorrection,
      strokeOpacity: S,
      velocityWidthFactor: _,
      distSinceStamp: 0,
      isEraser: F,
      layerKind: D,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const g = (d.prev.x + v) * 0.5, w = (d.prev.y + f) * 0.5;
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
  d.pointCount === 1 ? d.distSinceStamp = La(x, d.lastMidX, d.lastMidY, g, w, d.distSinceStamp) : d.distSinceStamp = il(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: g, y: w },
    { x: v, y: f },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: v, y: f }, d.lastMidX = g, d.lastMidY = w, d.pointCount++, e.displayDirty = !0;
}
function xu(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = ko(t, n), c = {
    descriptor: r,
    committedMask: ko(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: ko(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = ko(t, n);
  let v = null, g = "", w = null;
  function x(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: ko(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function P(T) {
    let E = o.get(T);
    return E || (E = x(T), o.set(T, E)), E;
  }
  function S(T) {
    return g === "mask" ? c : v ? P(v) : f;
  }
  function _(T) {
    var X;
    const E = !w || w.length !== T.length || T.some((j, M) => j !== w[M]), ue = g === "paint" && ((X = v ? o.get(v) : f) == null ? void 0 : X.activeStroke) || null;
    let fe = c.displayDirty || f.displayDirty || E;
    for (const j of T) {
      const M = o.get(j);
      if (M != null && M.displayDirty) {
        fe = !0;
        break;
      }
    }
    if (ue && (fe = !0), !fe) return;
    c.displayDirty = !1, f.displayDirty = !1;
    for (const j of T) {
      const M = o.get(j);
      M && (M.displayDirty = !1);
    }
    w = [...T];
    const de = d.ctx;
    Tt(d);
    const U = !!(ue != null && ue.isEraser);
    for (const j of T) {
      const M = o.get(j);
      if (!M) continue;
      const W = v === M.actionGroupId && g === "paint" ? M.activeStroke : null;
      if (U)
        zt = Yr(zt, t, n), Tt(zt), zt.ctx.drawImage(M.committedPaint.canvas, 0, 0), Ii(zt.ctx, a.canvas), de.drawImage(zt.canvas, 0, 0);
      else if (de.drawImage(M.committedPaint.canvas, 0, 0), W) {
        const Pe = M.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, W.strokeOpacity ?? 1));
        de.save(), de.globalAlpha = Pe, de.drawImage(a.canvas, 0, 0), de.restore();
      }
    }
  }
  function F(T) {
    var ue, fe, de, U, X;
    for (const j of o.values())
      Tt(j.committedPaint), Tt(j.currentStroke), j.activeStroke = null, j.displayDirty = !0;
    Tt(c.committedMask), Tt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, f.displayDirty = !0, w = null;
    const E = [
      ...Array.isArray((fe = (ue = T == null ? void 0 : T.painting) == null ? void 0 : ue.paint) == null ? void 0 : fe.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((U = (de = T == null ? void 0 : T.painting) == null ? void 0 : de.mask) == null ? void 0 : U.strokes) ? T.painting.mask.strokes : []
    ];
    for (const j of E) {
      if (((X = j == null ? void 0 : j.targetSpace) == null ? void 0 : X.kind) !== "ERP_GLOBAL") continue;
      const M = String((j == null ? void 0 : j.layerKind) || "paint"), W = String((j == null ? void 0 : j.toolKind) || "pen") === "eraser";
      if (M === "mask") {
        const Pe = c.descriptor;
        W ? (zt = Yr(zt, Pe.width, Pe.height), Tt(zt), ys(zt.ctx, j, Pe), Ii(c.committedMask.ctx, zt.canvas)) : ys(c.committedMask.ctx, j, Pe);
        continue;
      }
      if (W) {
        zt = Yr(zt, r.width, r.height), Tt(zt), ys(zt.ctx, j, r);
        for (const Pe of o.values())
          Ii(Pe.committedPaint.ctx, zt.canvas), Pe.displayDirty = !0;
      } else {
        const Pe = String((j == null ? void 0 : j.actionGroupId) || "__default__"), Te = P(Pe), kt = Te.descriptor;
        ys(Te.committedPaint.ctx, j, kt), Te.displayDirty = !0;
      }
    }
    _([...o.keys()]);
  }
  function D(T, E) {
    g = String((T == null ? void 0 : T.layerKind) || "");
    const ue = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (g === "mask")
      v = null, Tt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const fe = ue ? f : P(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      v = ue ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), Tt(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0;
    }
  }
  function Y(T, E) {
    var M;
    const ue = String((T == null ? void 0 : T.layerKind) || "paint"), fe = String((T == null ? void 0 : T.toolKind) || "") === "eraser", de = ue === "mask" ? c : fe ? f : P(String((T == null ? void 0 : T.actionGroupId) || v || "__default__")), U = de.activeStroke, X = de.descriptor;
    if (U && U.pointCount > 1) {
      const Q = de.currentStroke.ctx;
      Q.globalCompositeOperation = "source-over";
      const W = {
        ctx: Q,
        stampTex: U.stampTex,
        radiusPx: U.radiusPx,
        spacingPx: U.spacingPx,
        desc: X,
        aspect: U.aspect,
        angle: U.angle,
        stampKind: U.stampKind,
        scatter: U.scatter,
        latitudeCorrection: U.latitudeCorrection
      };
      U.pointCount === 2 ? La(W, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : il(W, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    de.lassoPreviewActive && (Tt(de.currentStroke), Rs(de.currentStroke.ctx, T, X), de.lassoPreviewActive = !1);
    const j = ue === "mask" ? c.committedMask : de.committedPaint;
    if (fe && ue === "paint")
      for (const Q of o.values())
        Ii(Q.committedPaint.ctx, de.currentStroke.canvas), Q.displayDirty = !0;
    else if (fe)
      Ii(j.ctx, de.currentStroke.canvas);
    else {
      const Q = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      j.ctx.save(), j.ctx.globalAlpha = Q, j.ctx.drawImage(de.currentStroke.canvas, 0, 0), j.ctx.restore();
    }
    Q_() && (String((T == null ? void 0 : T.toolKind) || ""), String((X == null ? void 0 : X.kind) || ""), Number((X == null ? void 0 : X.width) || 0), Number((X == null ? void 0 : X.height) || 0), String(((M = T == null ? void 0 : T.targetSpace) == null ? void 0 : M.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), Qh(de.currentStroke.canvas), Qh(j.canvas), void 0), Tt(de.currentStroke), de.activeStroke = null, de.displayDirty = !0, v = null, g = "", _([...o.keys()]);
  }
  function I(T) {
    if (g === "mask")
      Tt(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (g === "paint" && !v)
      Tt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (v) {
      const E = o.get(v);
      E && (Tt(E.currentStroke), E.activeStroke = null, E.lassoPreviewActive = !1, E.displayDirty = !0);
    }
    v = null, g = "", _([...o.keys()]);
  }
  function z(T, E) {
    var fe;
    if (g = String((T == null ? void 0 : T.layerKind) || ""), String(((fe = T == null ? void 0 : T.geometry) == null ? void 0 : fe.geometryKind) || "") === "lasso_fill") {
      if (g === "mask")
        Tt(c.currentStroke), Rs(c.currentStroke.ctx, T, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const de = String((T == null ? void 0 : T.toolKind) || "") === "eraser", U = de ? f : P(String((T == null ? void 0 : T.actionGroupId) || v || "__default__"));
        v = de ? "" : String((T == null ? void 0 : T.actionGroupId) || v || "__default__"), Tt(U.currentStroke), Rs(U.currentStroke.ctx, T, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
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
  function Z(T) {
    var X;
    const E = o.get(String(T));
    if (!E) return null;
    const ue = g === "paint" && v === E.actionGroupId, fe = g === "paint" && ((X = v ? o.get(v) : f) == null ? void 0 : X.activeStroke) || null;
    if (fe != null && fe.isEraser)
      return xn = Yr(xn, t, n), Tt(xn), xn.ctx.drawImage(E.committedPaint.canvas, 0, 0), Ii(xn.ctx, a.canvas), xn.canvas;
    const de = ue ? E.activeStroke : null;
    if (!de) return E.committedPaint.canvas;
    xn = Yr(xn, t, n), Tt(xn), xn.ctx.drawImage(E.committedPaint.canvas, 0, 0);
    const U = E.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, de.strokeOpacity ?? 1));
    return xn.ctx.save(), xn.ctx.globalAlpha = U, xn.ctx.drawImage(a.canvas, 0, 0), xn.ctx.restore(), xn.canvas;
  }
  function _e() {
    return pi = Yr(pi, t, n), Tt(pi), Vc(pi.ctx, c.committedMask.canvas), g === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (zt = Yr(zt, t, n), Tt(zt), zt.ctx.drawImage(c.committedMask.canvas, 0, 0), Ii(zt.ctx, a.canvas), Tt(pi), Vc(pi.ctx, zt.canvas)) : Vc(pi.ctx, a.canvas)), pi.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: D,
    appendStrokePoint: dw,
    updateActiveStroke: z,
    commitActiveStroke: Y,
    cancelActiveStroke: I,
    getErpTarget: O,
    ensureTarget: S,
    getGroupTarget: R,
    getGroupDisplayCanvas: Z,
    getMaskDisplayCanvas: _e,
    getAllGroupIds: G
  };
}
function q(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ut(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function hw(e, t) {
  let n = Ut(t) - Ut(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Su = 3;
function pa(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function mf(e, t = 0) {
  const n = pa(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = pa(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = pa(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = pa(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(pa(t) || 0);
}
function fg(e) {
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
const ip = Math.PI / 180, op = 0.12, pw = Su, mw = 35, gw = 140, va = 100, yw = 20, ap = 0.8;
function bw(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = q(Number(e || va), 1, 179) * ip;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / ip;
}
function gf(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: va })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function v(Y, I = null) {
    f && f(Y, I);
  }
  function g(Y, I, z = null, O = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(Y || 0), d.drag.lastY = Number(I || 0), d.drag.lastTs = Number(O || performance.now()), d.drag.pointerId = z, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], v("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: z }), !0;
  }
  function w(Y, I, z = "pano", O = performance.now()) {
    if (!d.drag.active) return !1;
    const R = Number(O || performance.now()), G = Number(Y), Z = Number(I), _e = G - d.drag.lastX, T = Z - d.drag.lastY;
    d.drag.lastX = G, d.drag.lastY = Z, d.drag.lastTs = R;
    const E = r() || { x: 1, y: 1 }, ue = Number(E.x || 1), fe = Number(E.y || 1), de = { ...t() };
    let U = 0, X = 0;
    if (z === "unwrap") {
      const M = o() || { w: 1, h: 1 }, Q = Math.max(1, Number(M.w || 1)), W = Math.max(1, Number(M.h || 1)), Pe = _e / Q, Te = T / W;
      U = -Pe * 360 * ue, X = Te * 180 * fe;
    } else {
      const M = a() || { w: 0, h: 0 }, Q = Math.max(1, Number(M.w || 0)), W = Math.max(1, Number(M.h || 0));
      if (Q > 1 && W > 1) {
        const Pe = q(Number(de.fov || va), 1, 179), Te = q(bw(Pe, Q, W), 0.1, 179);
        U = -(_e / Q) * Pe * ue, X = T / W * Te * fe;
      } else
        U = -_e * op * ue, X = T * op * fe;
    }
    de.yaw = Ut(Number(de.yaw || 0) + U), de.pitch = q(Number(de.pitch || 0) + X, -89.9, 89.9), n(de), d.velHistory.push({ ts: R, yaw: de.yaw, pitch: de.pitch });
    let j = 0;
    for (; j < d.velHistory.length - 1 && d.velHistory[j].ts < R - 100; ) j++;
    return j > 0 && d.velHistory.splice(0, j), d.inertia.active = !1, d.inertia.lastTs = R, c(), v("drag", { phase: "move", dx: _e, dy: T, dYaw: U, dPitch: X }), !0;
  }
  function x(Y = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const I = Number(Y || performance.now());
    d.drag.lastTs = I;
    const z = d.velHistory.filter((R) => I - R.ts <= 80);
    if (z.length >= 2) {
      const R = z[0], G = z.at(-1), Z = Math.max(1e-3, (G.ts - R.ts) / 1e3);
      let _e = G.yaw - R.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / Z, d.inertia.vy = (G.pitch - R.pitch) / Z;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const O = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = O > yw, d.inertia.lastTs = I, v("drag", { phase: "end", speed: O, inertiaActive: d.inertia.active }), !0;
  }
  function P(Y = performance.now()) {
    if (!d.inertia.active) return !1;
    const I = Number(Y || performance.now()), z = Math.max(1e-3, (I - (d.inertia.lastTs || I)) / 1e3);
    d.inertia.lastTs = I;
    const O = { ...t() };
    O.yaw = Ut(Number(O.yaw || 0) + d.inertia.vx * z), O.pitch = q(Number(O.pitch || 0) + d.inertia.vy * z, -89.9, 89.9);
    const R = Math.exp(-5.5 * z);
    return d.inertia.vx *= R, d.inertia.vy *= R, Math.abs(d.inertia.vx) < ap && Math.abs(d.inertia.vy) < ap && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(O), c(), d.inertia.active;
  }
  function S() {
    const Y = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], Y;
  }
  function _(Y) {
    const I = Math.sign(Number(Y || 0));
    if (!I) return !1;
    const z = { ...t() }, O = Number(z.fov || va);
    return z.fov = q(O + I * pw, mw, gw), n(z), c(), v("wheel", { deltaSign: I, fovBefore: O, fovAfter: z.fov }), !0;
  }
  function F(Y, I = 0) {
    return _(mf(Y, I));
  }
  function D() {
    n({ yaw: 0, pitch: 0, fov: va }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: g,
    moveDrag: w,
    endDrag: x,
    stepInertia: P,
    stopMotion: S,
    applyWheel: _,
    applyWheelEvent: F,
    resetView: D
  };
}
const sn = Math.PI / 180, Nn = 180 / Math.PI;
function or(e, t, n) {
  return { x: e, y: t, z: n };
}
function ol(e, t) {
  return or(e.x + t.x, e.y + t.y, e.z + t.z);
}
function al(e, t) {
  return or(e.x * t, e.y * t, e.z * t);
}
function zc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function yf(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return or(e.x / t, e.y / t, e.z / t);
}
function Rn(e, t) {
  const n = e * sn, r = t * sn, o = Math.cos(r);
  return or(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Yo(e, t, n = 0) {
  const r = Number(e || 0) * sn, o = Number(t || 0) * sn, a = n * sn, c = Math.cos(r), f = Math.sin(r), d = Math.cos(o), v = Math.sin(o), g = Math.cos(a), w = Math.sin(a);
  return {
    right: or(
      c * g - f * v * w,
      d * w,
      -f * g - c * v * w
    ),
    up: or(
      -c * w - f * v * g,
      d * g,
      f * w - c * v * g
    ),
    fwd: or(f * d, v, c * d)
  };
}
function sl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function yt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function vw() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function _w(e) {
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
function ww(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function xw(e, t) {
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
    const a = xw(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function Sw(e, t, n, r) {
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
function kw(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = ww(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = Sw(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = yt(e.size, null), c = yt(e.opacity, null);
  if (a == null || c == null) return null;
  const f = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!f || !d) return null;
  const v = yt(e.radiusValue, null), g = String(e.radiusModel || "").trim() || null;
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
    radiusValue: v == null ? null : Math.max(0, v),
    geometry: o
  };
}
function sp(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = kw(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function Mw(e) {
  if (!e || typeof e != "object") return null;
  const t = yt(e.u0, null), n = yt(e.v0, null), r = yt(e.u1, null), o = yt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (f) => Math.max(0, Math.min(1, f)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function Nw(e) {
  const t = e || {};
  return {
    du: yt(t.du, 0) ?? 0,
    dv: yt(t.dv, 0) ?? 0,
    rot_deg: yt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, yt(t.scale, 1) ?? 1)
  };
}
function Pw(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = Mw(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, yt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: Nw(e.transform)
  } : null;
}
function Aw(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = Pw(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function To(e) {
  const t = vw();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: _w(e.groups),
    paint: sp(e.paint, "paint"),
    mask: sp(e.mask, "mask"),
    raster_objects: Aw(e.raster_objects)
  };
}
const Or = 1, Fr = 179, ku = 85;
function Rl(e) {
  const t = ((Qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function dg(e, t) {
  let n = Qe(e, 0) - Qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function hg(e, t, { shiftKey: n = !1 } = {}) {
  let r = Qe(e, 0) + Qe(t, 0) * Nn;
  return n && (r = Math.round(r / 15) * 15), Rl(r);
}
function Qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function ii(e = {}) {
  const t = q(Qe(e.hFOV_deg || 90, 90), Or, Fr), n = q(Qe(e.vFOV_deg || 60, 60), Or, Fr), r = Math.tan(t * sn * 0.5), o = Math.tan(n * sn * 0.5);
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
function bf(e, t) {
  const n = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, Qe(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function vf(e, t) {
  const n = Math.max(1e-12, Qe(t, 1)), r = Math.max(1e-6, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = q(2 * Math.atan(r / (2 * n)) * Nn, Or, Fr), c = q(2 * Math.atan(o / (2 * n)) * Nn, Or, Fr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function Cw(e, t, n) {
  const r = Qe(e == null ? void 0 : e.x, 0), o = Qe(e == null ? void 0 : e.y, 0), a = Math.max(1, Qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, Qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = ii(t), d = Math.max(1e-12, Qe(n, 1)), v = 2 * d * f.tanHalfX, g = 2 * d * f.tanHalfY;
  return {
    x: r + (a - v) * 0.5,
    y: o + (c - g) * 0.5,
    w: v,
    h: g,
    focalPx: d
  };
}
function _f(e, t, n = ku) {
  const r = Math.max(1e-12, Qe(t, 1)), o = q(Qe(n, ku), 1, 89.999), a = r * Math.tan(o * sn), c = Math.max(1, Qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, Qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(f * 0.5, a)
  };
}
function pg(e, t, n) {
  const r = Math.max(1e-12, Qe(t, 1));
  return {
    x: (Qe(n == null ? void 0 : n.x, 0) - Qe(e == null ? void 0 : e.x, 0)) / r,
    y: -(Qe(n == null ? void 0 : n.y, 0) - Qe(e == null ? void 0 : e.y, 0)) / r
  };
}
function $s(e, t) {
  const n = q(Qe(e, 60), Or, Fr), r = Math.max(1e-6, Qe(t, 1));
  return q(
    2 * Math.atan(Math.tan(n * sn * 0.5) * r) * Nn,
    Or,
    Fr
  );
}
function lp(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Iw(e, t) {
  const n = lp(e, 1), r = lp(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), f = (v, g) => g ? f(g, v % g) : v, d = f(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function Wi(e) {
  const t = q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * sn, n = q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * sn;
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
  return (r == null ? void 0 : r[0]) || Iw(t, 1);
}
function mg(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = $i(t), t;
}
function gg({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), f = Number.isFinite(c) ? q(c, Or, Fr) : q(Math.min(42, Qe(o, 100) * 0.42), 8, 96);
  return mg({
    id: String(e),
    label: "Frame 1",
    yaw_deg: Qe(t, 0),
    pitch_deg: q(Qe(n, 0), -89.9, 89.9),
    roll_deg: Rl(r),
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
function yg(e, t) {
  const n = ii(e), r = Qe(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * Nn, a = 2 * Math.atan(n.tanHalfY * r) * Nn;
  return o < Or || o > Fr || a < Or || a > Fr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function bg(e, t, n = Su) {
  const r = Math.sign(Qe(t, 0)), o = Math.abs(Qe(n, Su));
  if (!r || !(o > 0)) return null;
  const a = ii(e), c = a.hFovDeg + r * o;
  if (c < Or || c > Fr) return null;
  const f = Math.tan(c * sn * 0.5);
  return yg(e, f / a.tanHalfX);
}
function vg(e, t) {
  const n = ii(e), r = Yo(n.yawDeg, n.pitchDeg, n.rollDeg), o = Qe(t == null ? void 0 : t.x, 0), a = Qe(t == null ? void 0 : t.y, 0);
  return yf(ol(ol(r.fwd, al(r.right, o)), al(r.up, a)));
}
function Ew(e) {
  return or(e.x, e.y, -e.z);
}
function Vs(e) {
  return or(e.x, e.y, -e.z);
}
function $l(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = Yo(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function Ow(e) {
  const t = Vs(or(e[0][0], e[1][0], e[2][0])), n = Vs(or(e[0][1], e[1][1], e[2][1])), r = Vs(or(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), f = Math.sin(o), d = Math.atan2(f * n.z - c * n.x, c * t.x - f * t.z);
  return { yawDeg: o * Nn, pitchDeg: a * Nn, rollDeg: d * Nn };
}
function _g(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Vl(e) {
  const [[t, n, r], [o, a, c], [f, d, v]] = e, g = t + a + v;
  if (g > 0) {
    const x = 0.5 / Math.sqrt(g + 1);
    return { x: (d - c) * x, y: (r - f) * x, z: (o - n) * x, w: 0.25 / x };
  }
  if (t > a && t > v) {
    const x = 2 * Math.sqrt(1 + t - a - v);
    return { x: 0.25 * x, y: (n + o) / x, z: (r + f) / x, w: (d - c) / x };
  }
  if (a > v) {
    const x = 2 * Math.sqrt(1 + a - t - v);
    return { x: (n + o) / x, y: 0.25 * x, z: (c + d) / x, w: (r - f) / x };
  }
  const w = 2 * Math.sqrt(1 + v - t - a);
  return { x: (r + f) / w, y: (c + d) / w, z: 0.25 * w, w: (o - n) / w };
}
function vs(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const ji = 1e-6, Mu = 1e-6, Fw = 1e-9;
function Ra(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function Tw(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, f = 1;
  for (let d = 0; d < 50; d += 1) {
    const v = 0.5 * (c + f);
    Ra(0, n, o, 1, v) < t ? c = v : f = v;
  }
  return Ra(0, r, a, 1, 0.5 * (c + f));
}
function jo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Ho(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((x) => -x / o), f = r.map((x) => x / a);
  if (c.reduce((x, P, S) => x + P * f[S], 0) < 0) return n.map(() => 0);
  const d = c.map((x, P) => (x * a + f[P] * o) / (o + a)), v = (x) => Math.sqrt(x.reduce((P, S) => P + S * S, 0)), g = 3 * Math.min(v(c), v(f)), w = v(d);
  return w <= g ? d : d.map((x) => x * g / w);
}
function wg(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], f = o.map((g, w) => a[w] - g);
  let d = f;
  jo(e, r) && (d = Ho(t, r, n[r - 1].map((g, w) => g - o[w]), f).map((g) => g * c));
  let v = f;
  return jo(e, r + 1) && (v = Ho(t, r + 1, f.map((g) => -g), n[r + 2].map((g, w) => g - a[w])).map((g) => g * c)), [d.map((g) => g / 3), v.map((g) => -g / 3)];
}
function xg(e, t, n, r, o) {
  const [[a], [c]] = wg(e, t, n.map((f) => [f]), r);
  return Ra(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function Dw(e, t, n, r) {
  var v, g;
  const o = e.map((w) => w.value);
  let [a, c] = wg(e, t, o, n);
  a = ((v = e[n].handles) == null ? void 0 : v.out) ?? a, c = ((g = e[n + 1].handles) == null ? void 0 : g.in) ?? c;
  const f = o[n], d = o[n + 1];
  return [0, 1, 2].map((w) => Ra(f[w], f[w] + a[w], d[w] + c[w], d[w], r));
}
function ll([e, t, n, r], [o, a, c, f]) {
  return [
    r * o + e * f + t * c - n * a,
    r * a - e * c + t * f + n * o,
    r * c + e * a - t * o + n * f,
    r * f - e * o - t * a - n * c
  ];
}
function Lw(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function jc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Rw([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function Nu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Ao(e, t) {
  return Rw(ll([-e[0], -e[1], -e[2], e[3]], t));
}
function Hc(e, t, n) {
  return ll(e, Nu(Ao(e, t).map((r) => n * r)));
}
function Gc(e, t) {
  const n = Lw(e, t);
  if (Math.abs(n) > Mu) return n < 0;
  const [r, o, a] = Ao(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > Mu) return c < 0;
  return !1;
}
function _s(e) {
  const { x: t, y: n, z: r, w: o } = Vl($l(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function Pu(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function $w(e, t, n, r) {
  const o = _s(e[n].value);
  let a = _s(e[n + 1].value);
  Gc(o, a) && (a = jc(a));
  const c = t[n + 1] - t[n], f = Ao(o, a);
  let d = f;
  if (jo(e, n)) {
    let O = _s(e[n - 1].value);
    Gc(O, o) && (O = jc(O)), d = Ho(t, n, Ao(o, O), f).map((R) => R * c);
  }
  let v = f;
  if (jo(e, n + 1)) {
    let O = _s(e[n + 2].value);
    Gc(a, O) && (O = jc(O)), v = Ho(t, n + 1, Ao(a, o), Ao(a, O)).map((R) => R * c);
  }
  const g = ll(o, Nu(d.map((O, R) => 0.5 * (O - f[R])))), w = ll(a, Nu(f.map((O, R) => 0.5 * (O - v[R])))), [x, P, S, _] = Hc(Hc(o, a, r), Hc(g, w, r), 2 * r * (1 - r)), { yawDeg: F, pitchDeg: D, rollDeg: Y } = Ow(_g({ x, y: P, z: S, w: _ })), I = e[n].value, z = e[n + 1].value;
  return {
    yaw_deg: Pu(F, I.yaw_deg, z.yaw_deg, r),
    pitch_deg: D,
    roll_deg: Pu(Y, I.roll_deg, z.roll_deg, r)
  };
}
function $a(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function cl(e) {
  return Math.sqrt($a(e, e));
}
function ul(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function Sg(e, t) {
  const n = $a(e, t), r = t.map((c, f) => c - n * e[f]), o = cl(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function Mo(e, t) {
  const n = cl(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function ws(e, t, n) {
  return Mo(e, Sg(e, t).map((r) => n * r));
}
function Kc(e, t) {
  const n = ul(e[t].value), r = ul(e[t + 1].value), o = $a(n, r), a = o < 0 && cl(r.map((d, v) => d - o * n[v])) <= Mu;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = Sg(n, r);
  const f = cl(c);
  return [c, c.map((d, v) => Math.cos(f) * d - f * Math.sin(f) * n[v]), a];
}
function Vw(e, t, n, r) {
  const o = ul(e[n].value), a = ul(e[n + 1].value), [c, f, d] = Kc(e, n);
  let v = c, g = f;
  const w = t[n + 1] - t[n];
  jo(e, n) && (v = Ho(t, n, Kc(e, n - 1)[1].map((I) => -I), v).map((I) => I * w)), jo(e, n + 1) && (g = Ho(t, n + 1, g.map((I) => -I), Kc(e, n + 1)[0]).map((I) => I * w));
  let x, P, S;
  if (d) {
    const I = Math.PI, z = Ra(0, $a(v, c) / I / 3, I - $a(g, f) / I / 3, I, r);
    [x, P, S] = Mo(o, c.map((O) => z * O / I));
  } else {
    const I = ws(Mo(o, v.map((R) => R / 3)), Mo(a, g.map((R) => -R / 3)), r), z = ws(Mo(o, v.map((R) => r * R / 3)), I, r), O = ws(I, Mo(a, g.map((R) => -(1 - r) * R / 3)), r);
    [x, P, S] = ws(z, O, r);
  }
  const _ = Math.hypot(x, S), F = e[n].value.yaw_deg, D = e[n + 1].value.yaw_deg;
  return { yaw_deg: _ <= Fw ? F + (D - F) * r : Pu(Math.atan2(x, S) * 180 / Math.PI, F, D, r), pitch_deg: Math.atan2(P, _) * 180 / Math.PI };
}
function zw(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = xg(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function jw(e, t, n, r) {
  return xg(e, t, e.map((o) => o.value), n, r);
}
const Hw = { position: Dw, rotation: $w, direction: Vw, size: zw };
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
  const f = r.map((v) => v.frame), d = Tw(c.easing, (n - f[a]) / (f[a + 1] - f[a]));
  return (Hw[t] ?? jw)(r, f, a, d);
}
function Au(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Gw(e) {
  return Math.min(1, Math.max(0, e));
}
function kg(e) {
  return Math.max(1e-6, e);
}
function Mg(e, t) {
  return t - (e.start - e.in);
}
function Vi(e, t) {
  return t >= e.start - ji && (e.duration === null || t < e.start + e.duration - ji);
}
function Kw(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = Mg(o.clip, n);
  return {
    frame: n,
    camera: {
      position: Jt(r, "position", n),
      ...Jt(r, "rotation", n),
      hFOV_deg: Au(Jt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: Vi(o.clip, n),
      clip_frame: a,
      position: Jt(o, "position", a),
      ...Jt(o, "rotation", a),
      scale: kg(Jt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => zl(c, n))
  };
}
function Bw(e, t) {
  if (e.placement === "world")
    return {
      position: Jt(e, "position", t),
      ...Jt(e, "rotation", t),
      scale: kg(Jt(e, "scale", t))
    };
  const n = Jt(e, "size", t);
  return {
    ...Jt(e, "direction", t),
    roll_deg: Jt(e, "roll", t),
    hFOV_deg: Au(n.hFOV_deg),
    vFOV_deg: Au(n.vFOV_deg)
  };
}
function zl(e, t) {
  const n = Mg(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Vi(e.clip, t),
    clip_frame: n,
    ...Bw(e, n),
    opacity: Gw(Jt(e, "opacity", n))
  };
}
const Uw = 2, Ww = ["sky", "world"], Yw = ["input", "output", "temp"], Ng = [0.42, 0, 0.58, 1];
function nn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Gt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function fl(e, t) {
  const n = Gt(e, t);
  return n !== null && n > 0 ? n : t;
}
function nr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Yi(e) {
  const t = Gt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function cp(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Pg(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Gt(n, null));
  return t.includes(null) ? null : t;
}
function Ag(e) {
  return Pg(e) || [0, 0, 0];
}
function Cg(e) {
  const t = nn(e) ? e : {};
  return {
    yaw_deg: Gt(t.yaw_deg, 0),
    pitch_deg: nr(Gt(t.pitch_deg, 0), -90, 90),
    roll_deg: Gt(t.roll_deg, 0)
  };
}
function Xw(e) {
  return nr(Gt(e, 90), 0.1, 179);
}
function qw(e) {
  return fl(e, 1);
}
function Jw(e) {
  const t = nn(e) ? e : {};
  return {
    yaw_deg: Gt(t.yaw_deg, 0),
    pitch_deg: nr(Gt(t.pitch_deg, 0), -90, 90)
  };
}
function Zw(e) {
  return Gt(e, 0);
}
function Qw(e) {
  const t = nn(e) ? e : {};
  return {
    hFOV_deg: nr(Gt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: nr(Gt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Ig(e) {
  return nr(Gt(e, 1), 0, 1);
}
const wf = [["position", Ag], ["rotation", Cg], ["fov", Xw]], jl = [["position", Ag], ["rotation", Cg], ["scale", qw]], xf = [["direction", Jw], ["roll", Zw], ["size", Qw], ["opacity", Ig]], Sf = [...jl, ["opacity", Ig]];
function ex(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Gt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...Ng];
}
function tx(e) {
  if (!nn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Pg(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function nx(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!nn(o)) continue;
    const a = Yi(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: ex(o.easing) }, f = n ? tx(o.handles) : null;
    f && (c.handles = f), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function Cu(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = nn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: nx(a.keyframes, o, r === "position") };
  }
  return n;
}
function Eg(e) {
  const t = nn(e) ? e : {}, n = Yi(t.start), r = Yi(t.in), o = Yi(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function rx(e) {
  const t = nn(e) ? e : {}, n = nr(Gt(t.x0, 0), 0, 1), r = nr(Gt(t.y0, 0), 0, 1), o = nr(Gt(t.x1, 1), 0, 1), a = nr(Gt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function ix(e) {
  if (!nn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Yw.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function ox(e) {
  const t = ix(e.source);
  if (!t) return null;
  const n = Ww.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: Eg(e.clip),
    visible: cp(e.visible, !0),
    locked: cp(e.locked, !1),
    crop: rx(e.crop),
    ...Cu(e, r ? Sf : xf)
  };
  return r || (o.z_index = Yi(e.z_index) ?? 0), o;
}
function ax(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = nn(a) ? ox(a) : null;
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
function dl(e) {
  const t = nn(e.timeline) ? e.timeline : {}, n = nn(e.camera) ? e.camera : {}, r = nn(e.scene) ? e.scene : {}, o = Yi(t.length);
  return {
    version: Uw,
    timeline: {
      fps: fl(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: fl(n.aspect, 1), ...Cu(n, wf) },
    scene: { clip: Eg(r.clip), ...Cu(r, jl) },
    stickers: ax(e.stickers),
    painting: To(e.painting),
    painting_layer: nn(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function sx(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!nn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function lx(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!nn(t)) return {};
  const n = nr(Gt(t.hFOV_deg, 90), 1, 179), r = nr(Gt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function cx(e) {
  const t = nn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(nn) : [];
  return n.sort((r, o) => Gt(r.z_index, 0) - Gt(o.z_index, 0)), dl({
    camera: lx(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: sx(r, t),
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
function Go(e) {
  if (e == null || typeof e == "string" && !e.trim()) return dl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!nn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? cx(t) : dl(t);
}
function Bc(e, t, n, r, o) {
  const a = {};
  for (const [c] of t)
    a[c] = {
      value: e[c].value,
      keyframes: e[c].keyframes.map((f) => ({ ...f, frame: n(r + f.frame) - o }))
    };
  return a;
}
function up(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function Og(e, t) {
  if (fl(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (c) => Yi(c * n), { length: o } = e.timeline, a = up(e.scene.clip, r);
  return dl({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: { aspect: e.camera.aspect, ...Bc(e.camera, wf, r, 0, 0) },
    scene: { clip: a.clip, ...Bc(e.scene, jl, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((c) => {
      const { clip: f, anchor: d, newAnchor: v } = up(c.clip, r), g = c.placement === "world" ? Sf : xf;
      return { ...c, clip: f, ...Bc(c, g, r, d, v) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function Uc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Fg(e) {
  return Array.isArray(e) ? [...e] : e;
}
function kf(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= ji);
}
function Tg(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? Fg(e.keyframes[r - 1].easing) : [...Ng];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function Xi(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = Uc(o.value, r);
    return;
  }
  const a = kf(o, n);
  a ? a.value = Uc(a.value, r) : Tg(o, n, Uc(Jt(e, t, n), r));
}
function Qi(e) {
  return e.placement === "world" ? Sf.map(([t]) => t) : e.placement === "sky" ? xf.map(([t]) => t) : (e.clip ? jl : wf).map(([t]) => t);
}
function ux(e, t) {
  for (const n of Qi(e))
    kf(e[n], t) || Tg(e[n], t, Jt(e, n, t));
}
function fx(e) {
  const t = Qi(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function dx(e, t) {
  return Qi(e).every((n) => !!kf(e[n], t));
}
function hx(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const f = Jt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = f);
  }
}
function px(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const c of t) {
    const f = e[c], d = f.keyframes.filter((g) => a.has(g.frame)).map((g) => ({ ...g, frame: g.frame + r })), v = new Set(d.map((g) => g.frame));
    f.keyframes = [
      ...f.keyframes.filter((g) => !a.has(g.frame) && !v.has(g.frame)),
      ...d
    ].sort((g, w) => g.frame - w.frame);
  }
  return r;
}
function Dg(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function mx(e, t, n) {
  const r = Dg(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function gx(e, t, n, r) {
  for (const o of Dg(e, t, n)) o.easing = Fg(r);
}
function yx(e, t) {
  e.start = Math.max(0, e.start + t);
}
function bx(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function vx(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function fp(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Iu(e) {
  return Qi(e).map((t) => e[t]);
}
function Eu(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => Iu(t).some((n) => n.keyframes.length > 0)) || !fp(e.scene.clip) || e.stickers.some((t) => !fp(t.clip));
}
function Lg(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = e.timeline.length ?? Math.max(t, n);
  for (const a of Iu(e.camera))
    for (const c of a.keyframes) o = Math.max(o, c.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: c } = a;
    o = Math.max(o, c.duration === null || c === r ? c.start + 1 : c.start + c.duration);
    for (const f of Iu(a))
      for (const d of f.keyframes) o = Math.max(o, c.start - c.in + d.frame + 1);
  }
  return o;
}
function _x(e, t) {
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
function hl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function wx({
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
    painting: To(null),
    painting_layer: null,
    ui_settings: hl(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Rg(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function xx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function Sx(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function kx(e) {
  return Array.isArray(e) ? e.map((t) => mg(t)) : [];
}
function Mx(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function $g(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = wx(n), o = String(e || "").trim();
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
      assets: xx(a.assets),
      stickers: Sx(a.stickers),
      shots: kx(a.shots),
      painting: To(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: hl(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (f.ui_settings = hl({ ...f.ui_settings, ...c })), f.output_preset = Rg(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = Hn(n.coverage), delete f.editor_history, f;
  } catch {
    return xs = { text: o, parsed: null }, r;
  }
}
function dp(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Nx(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function Px(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function Vg(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c, fps: f = null } = t;
  let d;
  try {
    d = Go(e);
  } catch {
    d = Go(null);
  }
  return f && f !== d.timeline.fps && (d = Og(d, f)), {
    ...d,
    coverage: Hn(o),
    bg_color: r,
    output_preset: Rg(n),
    ui_settings: hl(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function Ax(e, t) {
  const n = Og(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, c] of o)
    if (c) {
      a.clip && (a.clip = c.clip);
      for (const f of Qi(a)) a[f].keyframes = c[f].keyframes;
    }
}
function Mf(e, t) {
  const n = zl(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const Cx = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function hp(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function Ix(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[Cx[n]].keyframes.length));
}
function zg(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = hp(n, ["yaw_deg", "pitch_deg"]), a = hp(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && Xi(e, "direction", r, o), n.rot_deg !== void 0 && Xi(e, "roll", r, n.rot_deg), Object.keys(a).length && Xi(e, "size", r, a);
}
const jg = ["position_x", "position_y", "position_z"];
function Ex(e, t) {
  const n = Jt(e, "position", t), r = Jt(e, "rotation", t);
  return {
    ...Object.fromEntries(jg.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Jt(e, "fov", t)
  };
}
function Ox(e, t, n, r) {
  const o = jg.indexOf(n);
  if (o >= 0) {
    const a = Jt(e, "position", t);
    a[o] = r, Xi(e, "position", t, a);
  } else n === "hFOV_deg" ? Xi(e, "fov", t, r) : Xi(e, "rotation", t, { [n]: r });
}
function Fx(e, t, n) {
  Xi(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function zs(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Hg(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Nf(e, t, n, r) {
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
function Tx(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Ut(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function Gg(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Kg(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Bg(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Ug(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? Go(t) : t);
}
function Wg(e, t, n) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    return JSON.stringify(Go(n)) === t;
  } catch {
    return !1;
  }
}
const pp = 2048, Yg = 0.28;
function Xg(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * sn);
  return {
    quaternion: Vl($l(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * Nn,
    aspect: r
  };
}
function js(e) {
  const t = ii(e);
  return {
    quaternion: Vl($l(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Dx(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = _f(n, r), c = t.x + t.w * 0.5, f = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: f - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * Nn,
      vFOV_deg: 2 * Math.atan(a / r) * Nn
    }
  };
}
function qg(e, t, n) {
  const [[r, o, a], [c, f, d], [v, g, w]] = _g(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * sn), P = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, _ = 1e-4) {
      const F = Ew(S), D = r * F.x + c * F.y + v * F.z, Y = o * F.x + f * F.y + g * F.z, I = -(a * F.x + d * F.y + w * F.z), z = Math.max(I, _);
      return {
        x: t * 0.5 * (1 + D / z / P),
        y: n * 0.5 * (1 - Y / z / x),
        z: I
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, _) {
      const F = (S / t * 2 - 1) * P, D = (1 - _ / n * 2) * x;
      return yf(Vs({
        x: r * F + o * D - a,
        y: c * F + f * D - d,
        z: v * F + g * D - w
      }));
    }
  };
}
function Lx(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = Kw(e, t), c = [];
  e.stickers.forEach((f, d) => {
    const v = a.stickers[d];
    if (f.placement !== "sky") return;
    const g = f.source.kind === "port" && !f.visible;
    if (!v.active && !g) return;
    const w = n(f);
    if (!w) return;
    const x = Math.tan(v.hFOV_deg * 0.5 * sn), P = Math.tan(v.vFOV_deg * 0.5 * sn), { crop: S } = f;
    c.push({
      kind: "sticker",
      id: f.id,
      media: w.media,
      revision: w.revision,
      opacity: g ? Yg : v.opacity,
      zIndex: r(f),
      quaternion: Vl($l(v.yaw_deg, v.pitch_deg, v.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * S.x0 - 1) * x,
        x1: (2 * S.x1 - 1) * x,
        y0: (1 - 2 * S.y1) * P,
        y1: (1 - 2 * S.y0) * P
      }
    });
  });
  for (const f of o) c.push({ kind: "erp", ...f });
  return c.sort((f, d) => f.zIndex - d.zIndex);
}
function Jg(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const c of n)
    typeof (c == null ? void 0 : c.id) == "string" && c.id && !a.has(c.id) && a.set(c.id, c);
  return Lx(e, t, {
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
const Wc = /* @__PURE__ */ new WeakMap();
let Rx = 1;
function mp(e) {
  return Wc.has(e) || Wc.set(e, Rx++), Wc.get(e);
}
function gp({ background: e, layers: t }) {
  return JSON.stringify([
    e && [mp(e.media), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, mp(n.media), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function $x({ onReady: e, onFailed: t }) {
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
const Zg = "3D view unavailable. Check the browser console.";
function pl(e, t, n) {
  return Xg({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function Vx(e) {
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
      render(g) {
        return v ? null : (a(), t ? t.render({ ...g, owner: d }) : null);
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
const Qg = Vx(
  () => import("./.lazy/pano_three_view-BMrUcsVg.js").then((e) => e.createThreeView())
), xi = ["erp_image", "bg_erp", "bg_media"], Pf = ["sticker_image", "sticker"], zx = {
  background: xi,
  "external-sticker": Pf
};
function e0(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function jx(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = e0(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function Hx(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function t0(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((f) => String(f == null ? void 0 : f.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((f) => (f == null ? void 0 : f.id) === c.type);
  }
}
function Gx(e, t) {
  const { graph: n, entry: r } = t0(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const f = e0(o.get(c == null ? void 0 : c.link));
    f && (a[String((c == null ? void 0 : c.name) || "")] = f);
  }
  return a;
}
const Kx = [...xi, ...Pf], Bx = 256, No = /* @__PURE__ */ new Map(), Yc = /* @__PURE__ */ new WeakMap();
let n0 = () => null;
function r0(e) {
  return Yc.has(e) || Yc.set(e, JSON.stringify(e)), Yc.get(e);
}
function Ux(e) {
  n0 = e;
}
function i0(e, t) {
  const n = r0(e);
  No.delete(n), No.set(n, t), No.size > Bx && No.delete(No.keys().next().value);
}
function rr(e, t) {
  const n = e ? n0(e) : null, r = n ? No.get(r0(n)) : null;
  if (!r) return !0;
  const o = jx(e);
  return zx[t].every((a) => r[a] === o[a]);
}
const ml = /* @__PURE__ */ new WeakSet();
async function Ou(e, t) {
  if (ml.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && ml.add(e), n.ok && r !== void 0 ? r : null;
}
function o0(e, t) {
  var a, c, f, d, v;
  const n = (f = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : f.workflow, { entry: r } = t0(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((v = r == null ? void 0 : r.inputs) != null && v.some((g) => Kx.includes(g == null ? void 0 : g.name))) ? null : { output: o, inputs: Gx(n, t) };
}
const Hs = /* @__PURE__ */ new Map();
function Wx(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Hs.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await Ou(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = o0(o, a);
        c && i0(c.output, c.inputs);
      }
    });
}
const Yx = 5;
function Xx(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${Yx}`, r = Ou(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, Ou(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, f) {
      var v, g, w, x;
      const d = String(c.id);
      for (const { id: P } of await r) {
        if (!f()) return null;
        const S = await a(P);
        if ((v = S == null ? void 0 : S.outputs) != null && v[d])
          return ((x = (w = (g = S.workflow) == null ? void 0 : g.prompt) == null ? void 0 : w[d]) == null ? void 0 : x.class_type) !== c.comfyClass ? null : o0(S, d);
      }
      return null;
    }
  };
}
function qx(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let yo = null;
async function Jx(e, t, n) {
  var f;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || ml.has(n) || (f = Hs.get(o)) != null && f.has(r) || qx(t)) return null;
  (yo == null ? void 0 : yo.workflowId) !== o && (yo = { workflowId: o, history: Xx(n, o) }, queueMicrotask(() => {
    yo = null;
  }));
  const c = await yo.history.lastNodeOutput(e, a);
  return a() ? c ? (i0(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (ml.has(n) || Hs.set(o, (Hs.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function yp(e, t, n, r = xi) {
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
const Xc = /* @__PURE__ */ new WeakMap();
function Zx(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Fu(e) {
  return Zx(e) ? (Xc.has(e) || Xc.set(e, Math.random().toString(36).slice(2, 10)), Xc.get(e)) : "run";
}
function a0(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function Qx(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const f of c) {
      const d = n(a, f);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((v, g) => g)));
    }
  };
  return o(e, t), r;
}
function s0(e, t = [], n = null) {
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
function eS({
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
  }, g = () => o(), w = () => {
    o(), d();
  }, x = () => o();
  let P = !1;
  const S = () => {
    P = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", v, { once: !0 }), r.addEventListener("canplay", v, { once: !0 }), f || r.addEventListener("timeupdate", g), r.addEventListener("play", w), r.addEventListener("pause", x), r.addEventListener("error", S), r.src = t, r.load(), { video: r, destroy: () => {
    var D, Y;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", v), r.removeEventListener("canplay", v), r.removeEventListener("timeupdate", g), r.removeEventListener("play", w), r.removeEventListener("pause", x), r.removeEventListener("error", S), r.pause(), (D = r.removeAttribute) == null || D.call(r, "src"), (Y = r.load) == null || Y.call(r));
  }, failed: () => P };
}
function Ei(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function tS(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function vp(e, t, n = null) {
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
  return !r && n != null && (r = tS(e == null ? void 0 : e.graph, n)), r;
}
function nS(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function rS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function iS(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function l0({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return o(O[0]);
      const R = String(O[0] || "").trim();
      if (R)
        return Ei(t, {
          filename: R,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const G of O) {
        const Z = o(G);
        if (Z) return Z;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : Ei(t, O);
  }, a = (O) => {
    if (!O || typeof O != "object") return "";
    const R = String(O.type || "").trim().toLowerCase();
    if (R === "dataurl") return String(O.value || "");
    if (R !== "comfy_image") return "";
    const G = String(O.filename || "").trim();
    return G ? Ei(t, {
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
    var Z;
    const G = c(O == null ? void 0 : O.id);
    return Array.isArray((Z = G == null ? void 0 : G.ui) == null ? void 0 : Z[R]) ? G.ui[R] : Array.isArray(G == null ? void 0 : G[R]) ? G[R] : [];
  }, d = (O, R) => {
    const G = c(O == null ? void 0 : O.id);
    return G != null && G.ui && Object.prototype.hasOwnProperty.call(G.ui, R) ? G.ui[R] : G && Object.prototype.hasOwnProperty.call(G, R) ? G[R] : null;
  }, v = (O, R) => {
    const G = d(O, "pano_sticker_input_state_hash"), Z = Array.isArray(G) ? G[0] : G;
    return String(Z ?? "").trim() || iS(R);
  }, g = (O) => {
    const R = [], G = /* @__PURE__ */ new Set();
    for (const Z of O || []) {
      const _e = o(Z);
      !_e || G.has(_e) || (G.add(_e), R.push(_e));
    }
    return R;
  }, w = (O, R) => {
    var _e;
    const G = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && G.push(O.images), Array.isArray((_e = O == null ? void 0 : O.ui) == null ? void 0 : _e.images) && O.ui.images.length && G.push(O.ui.images);
    const Z = [];
    for (const T of G)
      R >= 0 && R < T.length && Z.push(T[R]), Z.push(...T);
    return Z;
  }, x = (O, R) => {
    var Q;
    const G = String(R || "").trim();
    if (!G) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : []).findIndex((W) => String((W == null ? void 0 : W.name) || "") === G);
    if (_e < 0) return { src: "", sourceType: "", inputName: G };
    const T = O.graph ? O.getInputLink(_e) : null;
    if ((T == null ? void 0 : T.origin_id) == null) return { src: "", sourceType: "", inputName: G };
    const E = T.origin_id, ue = vp(O, _e, E);
    if (!ue) return { src: "", sourceType: "", inputName: G };
    const fe = Number(T.origin_slot ?? 0);
    let de = [];
    try {
      de = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ue) || [] : [];
    } catch {
      de = [];
    }
    if (Array.isArray(de) && de.length) {
      const W = [];
      fe >= 0 && fe < de.length && W.push(de[fe]), W.push(...de);
      const Pe = g(W.filter((Te) => !Gs(Te)));
      if (Pe.length)
        return { src: Pe[0], srcCandidates: Pe, sourceType: "appNodeImageUrls", inputName: G };
    }
    const U = c((ue == null ? void 0 : ue.id) ?? E), X = g(w(U, fe).filter((W) => !Gs(W))).map((W) => `${W}&pano_src=${Fu(U)}`);
    if (X.length)
      return { src: X[0], srcCandidates: X, sourceType: "nodeOutputs", inputName: G };
    const j = Array.isArray(ue == null ? void 0 : ue.imgs) ? ue.imgs : [];
    if (j.length) {
      const W = [];
      fe >= 0 && fe < j.length && W.push(j[fe]), W.push(...j);
      const Pe = g(W);
      if (Pe.length)
        return { src: Pe[0], srcCandidates: Pe, sourceType: "nodeImgs", inputName: G };
    }
    const M = (Q = ue == null ? void 0 : ue.widgets) == null ? void 0 : Q.find((W) => String((W == null ? void 0 : W.name) || "").toLowerCase() === "image");
    if (M) {
      let W = o(M.value);
      if (W && !W.includes("/") && !W.includes(":") && (ue.comfyClass === "LoadImage" || ue.type === "LoadImage") && (W = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(W)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(W)}&type=input&subfolder=`), W) return { src: W, sourceType: "widget", inputName: G };
    }
    return { src: "", sourceType: "", inputName: G };
  }, P = (O, R = []) => {
    var Z;
    const G = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [];
    for (const _e of R) {
      const T = G.findIndex((de) => String((de == null ? void 0 : de.name) || "") === _e), E = T >= 0 && O.graph ? O.getInputLink(T) : null;
      if ((E == null ? void 0 : E.origin_id) == null) continue;
      const ue = c(((Z = vp(O, T, E.origin_id)) == null ? void 0 : Z.id) ?? E.origin_id), fe = (Array.isArray(ue == null ? void 0 : ue.images) ? ue.images : []).find(Gs);
      return fe ? `${Ei(t, fe)}&pano_src=${Fu(ue)}` : "";
    }
    return "";
  }, S = (O, R = []) => {
    const G = Array.isArray(R) ? R : [R];
    for (const Z of G) {
      const _e = x(O, Z);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, _ = (O) => {
    const R = String(O || "").trim();
    if (!R) return [];
    if (nS(R)) return [R];
    const { filename: G, subfolder: Z } = rS(R);
    return G ? g([
      Ei(t, { filename: G, subfolder: Z, type: "temp" }),
      Ei(t, { filename: G, subfolder: Z, type: "output" }),
      Ei(t, { filename: G, subfolder: Z, type: "input" }),
      R
    ]) : [R];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (O) => {
      var R, G;
      try {
        (G = (R = O == null ? void 0 : O.__panoLinkedInputImageCache) == null ? void 0 : R.forEach) == null || G.call(R, (Z, _e, T) => {
          var E;
          Z != null && Z.img && ((E = r == null ? void 0 : r.isImageLoadFailed) != null && E.call(r, Z.img)) && T.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: v,
    invalidateUiImage: (O, R) => {
      var G;
      (G = O == null ? void 0 : O.delete) == null || G.call(O, `__ui__${String(R || "")}`);
    },
    linkedValue: (O, R) => {
      var E, ue, fe, de;
      const G = String(R || ""), Z = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === G) : -1, _e = Z >= 0 && O.graph ? O.getInputLink(Z) : null;
      if (_e) {
        const U = c(_e.origin_id), X = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (E = U == null ? void 0 : U.data) == null ? void 0 : E.output,
          (ue = U == null ? void 0 : U.data) == null ? void 0 : ue.result,
          (fe = U == null ? void 0 : U.ui) == null ? void 0 : fe.output,
          (de = U == null ? void 0 : U.ui) == null ? void 0 : de.result
        ];
        for (const j of X) {
          if (!Array.isArray(j)) continue;
          const M = j[Number(_e.origin_slot || 0)];
          if (typeof M == "string" && M.trim()) return M;
        }
      }
      const T = Array.isArray(O == null ? void 0 : O.widgets) ? O.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === G) : null;
      return String((T == null ? void 0 : T.value) || "");
    },
    linkedVideoFile: P,
    loadPreferredExactLinkedImage: (O, R = [], G = null, Z = "") => {
      var kt;
      const _e = Array.isArray(R) ? R : [R], T = S(O, _e), ue = (Array.isArray(T == null ? void 0 : T.srcCandidates) && T.srcCandidates.length ? T.srcCandidates : [T == null ? void 0 : T.src]).map((pt) => String(pt || "").trim()).filter(Boolean);
      if (!ue.length) return null;
      const fe = g(ue.flatMap((pt) => _(pt)));
      if (!fe.length) return null;
      O.__panoLinkedInputImageCache || (O.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const de = String(Z || _e.join("|") || "image_exact"), U = ue.join(`
`), X = O.__panoLinkedInputImageCache.get(de);
      if (X && X.srcRaw === U && X.img) return X.img;
      const j = n || globalThis.Image;
      if (typeof j != "function") return null;
      const M = new j();
      (kt = r == null ? void 0 : r.markImageLoading) == null || kt.call(r, M, U);
      const Q = { srcRaw: U, resolvedSrc: "", img: M };
      O.__panoLinkedInputImageCache.set(de, Q);
      let W = -1;
      const Pe = (pt) => {
        var ut, Zt, Un;
        pt === "ready" ? (ut = r == null ? void 0 : r.markImageReady) == null || ut.call(r, M, U) : (Zt = r == null ? void 0 : r.markImageFailed) == null || Zt.call(r, M, U), G == null || G(M), (Un = O.setDirtyCanvas) == null || Un.call(O, !0, !0);
      }, Te = () => {
        if (W += 1, W >= fe.length) {
          Pe("failed");
          return;
        }
        Q.resolvedSrc = fe[W], M.src = Q.resolvedSrc;
      };
      return M.onload = () => Pe("ready"), M.onerror = () => {
        if (W + 1 < fe.length) {
          Te();
          return;
        }
        Pe("failed");
      }, Te(), M;
    },
    output: c,
    resolvePreferredExactLinkedSource: S,
    source: o,
    uiImage: (O, R, G, Z = null) => {
      var U, X, j;
      const _e = f(O, R)[0] || null, T = o(_e);
      if (!T) return null;
      const E = `__ui__${R}`, ue = (U = G == null ? void 0 : G.get) == null ? void 0 : U.call(G, E);
      if (ue && ue.__panoSrc === T) return ue;
      const fe = n || globalThis.Image;
      if (typeof fe != "function") return null;
      const de = new fe();
      return de.__panoSrc = T, (X = r == null ? void 0 : r.markImageLoading) == null || X.call(r, de, T), de.onload = () => {
        var M;
        (M = r == null ? void 0 : r.markImageReady) == null || M.call(r, de, T), Z == null || Z(de);
      }, de.onerror = () => {
        var M;
        (M = r == null ? void 0 : r.markImageFailed) == null || M.call(r, de, T), Z == null || Z(de);
      }, de.src = T, (j = G == null ? void 0 : G.set) == null || j.call(G, E, de), de;
    },
    uiList: f,
    uiValue: d
  };
}
function c0({
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
  const v = () => c || e(), g = () => a(n(v()));
  return {
    model: () => n(v()),
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
const Ks = "sticker_image_1", u0 = "external_image", Ko = 0;
function Do(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function qc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function wi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Tu(e, t = Ko) {
  return (e == null ? void 0 : e.version) !== 2 ? wi(e) : wi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: zl(n, t).active,
    external: n.source.kind === "port",
    ...Mf(n, t)
  }));
}
function Af(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && wi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function f0(e) {
  return String((e == null ? void 0 : e.id) || "") === Ks || String((e == null ? void 0 : e.source_kind) || "") === u0;
}
function Cf(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : f0(t);
}
const d0 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function h0(e) {
  return !f0(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(d0.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function p0(e) {
  const t = h0(e);
  return t ? d0.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function m0(e, t = {}) {
  var z, O, R;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((G) => String((G == null ? void 0 : G.id) || "") === Ks);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const G = String(((z = e.active) == null ? void 0 : z.selected_sticker_id) || "") === Ks;
    return {
      state: {
        ...e,
        stickers: n.filter((Z, _e) => _e !== r),
        active: G ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, f = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), v = Number(t.imageHeight || 0), g = d > 0 && v > 0, w = Math.max(1, d), x = Math.max(1, v), P = t.pose && typeof t.pose == "object" ? t.pose : {}, S = f ? P.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || P.hFOV_deg || 30, _ = Math.min(179, Math.max(0.1, Number(S)));
  if (!f) {
    if (!g) return { state: e, changed: !1 };
    const G = Do(_, w, x), Z = Number(((O = c == null ? void 0 : c.initial_pose) == null ? void 0 : O.hFOV_deg) ?? _), _e = Do(Z, w, x), T = Number(((R = c == null ? void 0 : c.initial_pose) == null ? void 0 : R.vFOV_deg) ?? _e);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - G) <= 1e-6 && Math.abs(T - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((E, ue) => ue === r ? {
          ...E,
          vFOV_deg: G,
          initial_pose: E.initial_pose && typeof E.initial_pose == "object" ? { ...E.initial_pose, vFOV_deg: _e } : E.initial_pose
        } : E)
      },
      changed: !0
    };
  }
  const F = n.reduce((G, Z) => Math.max(G, Number((Z == null ? void 0 : Z.z_index) || 0)), -1), D = {
    yaw_deg: Number(P.yaw_deg || 0),
    pitch_deg: Number(P.pitch_deg || 0),
    hFOV_deg: _,
    vFOV_deg: g ? Do(_, w, x) : Number(P.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || _),
    rot_deg: Number(P.rot_deg ?? P.roll_deg ?? 0)
  }, Y = {
    ...c || {},
    id: Ks,
    source_kind: u0,
    source_link_id: o,
    source_state_hash: a,
    ...D,
    initial_pose: { ...D },
    visible: !0,
    z_index: F + 1
  }, I = r >= 0 ? n.map((G, Z) => Z === r ? Y : G) : [...n, Y];
  return { state: { ...e, stickers: I }, changed: !0 };
}
function _p(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
function g0(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: _p(e, "sticker"),
    awaitingPose: !t && _p(e, "sticker_state"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function y0(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var P;
  const c = e.stickers.findIndex((S) => Cf(e, S)), f = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!f) return { state: e, changed: !1 };
    const S = ((P = e.active) == null ? void 0 : P.selected_sticker_id) === f.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((_, F) => F !== c),
        active: S ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (f) {
    if (!d) return { state: e, changed: !1 };
    const S = [f.size.value, ...f.size.keyframes.map((D) => D.value)], _ = S.map((D) => Do(D.hFOV_deg, o, a));
    if (S.every((D, Y) => Math.abs(D.vFOV_deg - _[Y]) <= 1e-6)) return { state: e, changed: !1 };
    const F = {
      value: { ...f.size.value, vFOV_deg: _[0] },
      keyframes: f.size.keyframes.map((D, Y) => ({ ...D, value: { ...D.value, vFOV_deg: _[Y + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((D, Y) => Y === c ? { ...D, size: F } : D) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const v = new Set(e.stickers.map((S) => S.id));
  let g = 1;
  for (; v.has(`sticker_${g}`); ) g += 1;
  const w = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = Nf(`sticker_${g}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: w,
    vFOV_deg: d ? Do(w, o, a) : w
  }, wi(e).reduce((S, _) => Math.max(S, _.z_index), -1) + 1);
  return { state: { ...e, stickers: [...e.stickers, x] }, changed: !0 };
}
function If(e) {
  const t = wi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: qc(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: qc(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: qc(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function b0(e) {
  const t = Af(e), n = Cf(e, t), r = wi(e).some((f) => f && f.visible !== !1), o = If(e), a = t ? o.findIndex((f) => f.type === "sticker" && f.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: p0(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function oS(e) {
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
function wp(e, t) {
  const n = Af(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = oS(e), o = String(n.id || ""), a = If(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [f] = a.splice(c, 1);
  return t === "front" ? a.push(f) : a.unshift(f), a.forEach((d, v) => {
    d.item.z_index = v;
  }), { state: r, changed: !0 };
}
function aS(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function sS(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return m0(e, t.value);
  if (t.type === "sync-port") return y0(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = If(e).reduce((x, P) => Math.max(x, Number(P.z_index || 0)), -1), v = 30, g = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: v,
      vFOV_deg: Do(v, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Nf(a, zs(o.asset), g, d + 1)],
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
    return !o || !wi(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = Af(e);
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
    const o = h0(n);
    return !o || !p0(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return wp(e, "front");
  if (t.type === "send-back") return wp(e, "back");
  if (t.type === "delete-selected") {
    if (Cf(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = wi({ ...e, stickers: o })[0], c = (a == null ? void 0 : a.id) == null ? null : String(a.id), f = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return e.version !== 2 && (f.assets = aS(f)), { state: f, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? Mf(n, Ko) : n, f = {};
    if (a.forEach((d) => {
      const v = Number(o[d]);
      Number.isFinite(v) && Math.abs(v - Number(c[d] || 0)) > 1e-12 && (f[d] = v);
    }), !Object.keys(f).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = Ix(n, f);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const v = structuredClone(n);
      return zg(v, Ko, d), { state: { ...e, stickers: e.stickers.map((g) => g === n ? v : g) }, changed: !0 };
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
function lS(e = {}) {
  return c0({
    ...e,
    reduce: sS,
    projectModel: b0
  });
}
const xp = 2;
function Li(e, t) {
  return Math.floor(e * t + 0.5);
}
function cS(e, t) {
  return Math.floor(e * t + 1e-3);
}
function v0({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: c, onChange: f }) {
  let d = 0, v = !1, g = !1, w = { name: "idle" }, x = [];
  const P = () => v && !g, S = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function _() {
    for (const Q of x) Q();
    x = [];
  }
  function F(Q, W = {}) {
    return _(), w = { name: Q, ...W }, f(), w;
  }
  function D(Q, W, Pe) {
    const Te = () => {
      w === Q && Pe();
    };
    e.addEventListener(W, Te), x.push(() => e.removeEventListener(W, Te));
  }
  function Y(Q, W) {
    let Pe = t.requestFrame(function Te(kt) {
      w === Q && (W(kt), w === Q && (Pe = t.requestFrame(Te)));
    });
    x.push(() => t.cancelFrame(Pe));
  }
  function I(Q) {
    d = Q, a(d);
  }
  function z() {
    return F(g ? "error" : "idle");
  }
  function O() {
    g = !0, z();
  }
  function R() {
    const { seekable: Q } = e, W = Q != null && Q.length ? Q.end(Q.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(W) ? W : 1 / 0));
  }
  function G(Q) {
    if (!P()) return Q === "play" ? ue() : z();
    if (e.readyState < xp) {
      const W = F("loading", { then: Q });
      return D(W, "loadeddata", () => G(W.then)), D(W, "error", O), W;
    }
    return Q === "play" && d / n() >= Number(e.duration) ? ue() : Z(Q, !1);
  }
  function Z(Q, W) {
    const Pe = R();
    if (!e.ended && Li(Number(e.currentTime), n()) === Li(Pe, n())) return _e(Q);
    const Te = F("seeking", { then: Q, frame: d, retried: W });
    return D(Te, "seeked", () => {
      const kt = Li(Number(e.currentTime), n()) === Li(R(), n()), pt = d === Te.frame;
      kt || pt && Te.retried ? _e(Te.then) : Z(Te.then, pt);
    }), D(Te, "error", O), e.currentTime = Pe, Te;
  }
  function _e(Q) {
    return Q === "play" ? T() : (c(), z());
  }
  function T() {
    const Q = F("playingVideo", { shown: !1 });
    if (D(Q, "pause", () => e.ended ? E() : U()), D(Q, "ended", E), D(Q, "error", O), o() && Li(Number(e.duration), n()) >= r()) {
      const Pe = e.loop;
      e.loop = !0, x.push(() => {
        e.loop = Pe;
      });
    }
    const W = (Pe, Te) => {
      Te && !Q.shown && (Q.shown = !0, f()), fe(Li(Pe, n()));
    };
    if (S()) {
      let Pe = e.requestVideoFrameCallback(function Te(kt, pt) {
        w === Q && (W(Number(pt.mediaTime), !0), w === Q && (Pe = e.requestVideoFrameCallback(Te)));
      });
      x.push(() => {
        var Te;
        return (Te = e.cancelVideoFrameCallback) == null ? void 0 : Te.call(e, Pe);
      });
    } else
      Y(Q, () => W(Number(e.currentTime), e.readyState >= xp));
    return Promise.resolve(e.play()).catch(() => {
      w === Q && U();
    }), Q;
  }
  function E() {
    c(), ue();
  }
  function ue() {
    const Q = F("playingClock", { startTs: t.now(), startFrame: d });
    return Y(Q, (W) => fe(Q.startFrame + Math.floor((W - Q.startTs) / 1e3 * n()))), Q;
  }
  function fe(Q) {
    if (Q < r()) {
      I(Q);
      return;
    }
    if (!o()) {
      de(r() - 1);
      return;
    }
    w.name === "playingVideo" && (_(), e.pause()), I(0), G("play");
  }
  function de(Q) {
    w.name === "playingVideo" ? (_(), e.pause(), I(Math.max(0, Q)), c()) : I(Math.max(0, Q)), G("still");
  }
  function U() {
    if (w.name === "loading" || w.name === "seeking")
      w.then = "still", f();
    else if (w.name === "playingVideo") {
      _(), e.pause();
      const Q = cS(Number(e.currentTime), n());
      I(Math.min(Q, r() - 1)), c(), d === Q ? z() : G("still");
    } else w.name === "playingClock" && de(Math.min(d, r() - 1));
  }
  function X() {
    if (!M()) {
      if (d >= r() - 1 && I(0), w.name === "loading" || w.name === "seeking") {
        w.then = "play", f();
        return;
      }
      G("play");
    }
  }
  function j(Q) {
    const W = Math.max(0, Math.round(Q));
    if (w.name === "loading" || w.name === "seeking") {
      w.then = "still", I(W), f();
      return;
    }
    w.name === "playingVideo" && (_(), e.pause()), I(W), G("still");
  }
  function M() {
    return w.name === "playingVideo" || w.name === "playingClock" || w.then === "play";
  }
  return {
    get frame() {
      return d;
    },
    get state() {
      return w.name;
    },
    get playing() {
      return M();
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return w.name === "playingVideo" && w.shown;
    },
    play: X,
    stop: U,
    seek: j,
    toggle() {
      M() ? U() : X();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(Q) {
      _(), v = !!Q, g = !1, G("still");
    },
    dispose() {
      _(), v = !1, w = { name: "idle" };
    }
  };
}
function uS(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function fS({ video: e, clock: t, readState: n, onFrame: r, onCapture: o, onChange: a }) {
  let c = "", f = "", d = 0;
  const v = /* @__PURE__ */ new Set(), g = () => n().timeline.fps, w = () => Lg(n(), {
    minimum: Math.round(g() * 5),
    frames: c ? Math.round(d * g()) : 0
  }), x = v0({
    video: e,
    clock: t,
    fps: g,
    span: w,
    loop: () => !0,
    onFrame: r,
    onCapture: o,
    onChange: a
  }), P = () => {
    f === c && Number.isFinite(e.duration) && (d = e.duration);
  }, S = () => {
    f && (v.add(f), a());
  };
  e.muted = !0, e.addEventListener("loadedmetadata", P), e.addEventListener("error", S);
  function _(D) {
    D !== f && (f = D, e.pause(), D ? e.src = D : e.removeAttribute("src"), e.load(), x.setSource(!!D));
  }
  function F() {
    x.playing && x.stop();
  }
  return {
    get frame() {
      return x.frame;
    },
    get playing() {
      return x.playing;
    },
    get showsVideo() {
      return x.showsVideo;
    },
    get source() {
      return f;
    },
    pause: F,
    toggle() {
      x.playing ? x.stop() : x.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. Out of sight,
    // the node pauses and lets its VIDEO go, keeping the frame. Another background VIDEO, a Timeline
    // that no longer reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: D, sources: Y, state: I }) {
      if (!D)
        return F(), _(""), !1;
      for (const Z of v)
        Y.includes(Z) || v.delete(Z);
      const z = Y.find((Z) => Z && !v.has(Z)) || "", O = z !== c;
      O && (c = z, d = 0), _(c);
      const R = Eu(I) || !!c && x.state !== "error";
      return R || F(), (O || !R || !x.playing && x.frame >= w()) && x.frame !== Ko && x.seek(Ko), R;
    },
    dispose() {
      x.dispose(), e.removeEventListener("loadedmetadata", P), e.removeEventListener("error", S), e.pause(), e.removeAttribute("src"), e.load(), f = "";
    }
  };
}
const gl = Math.PI / 180, Nr = 180 / Math.PI, dS = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), hS = 260;
function Sp(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function _0(e, t) {
  return t ? _0(t, e % t) : e;
}
function pS(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), f = Math.max(1, Math.round(t / a * o)), d = _0(c, f) || 1;
  return `${Math.round(c / d)}:${Math.round(f / d)}`;
}
function Va(e, t) {
  const n = Sp(e), r = Sp(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: pS(n, r) };
}
function qi(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function w0(e) {
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
function Ef(e, t, n = dS) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), v = (F, D, Y) => {
    const I = F + D, z = Math.max(0, Y - 1), O = I > z && I > 0 ? z / I : 1;
    return [F * O, D * O];
  }, [g, w] = v(d, c, r), [x, P] = v(a, f, o), S = {
    x: g,
    y: x,
    w: Math.max(1, r - g - w),
    h: Math.max(1, o - x - P)
  }, _ = bf(S, t);
  return {
    x: S.x + (S.w - _.width) * 0.5,
    y: S.y + (S.h - _.height) * 0.5,
    w: _.width,
    h: _.height,
    safeRect: S
  };
}
function mS(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Ef({ width: n, height: r }, 1), a = q(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * gl * 0.5)), f = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, v = vg(d, pg(
    { x: n * 0.5, y: r * 0.5 },
    c,
    f
  )), g = gS(v, Yo(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), w = vf({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: g.yaw,
    pitchDeg: g.pitch,
    rollDeg: g.roll,
    frameFovDeg: w.hFOV_deg
  };
}
function x0(e) {
  return {
    yaw: Ut(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Nr),
    pitch: q(Math.asin(q(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Nr, -89.9, 89.9)
  };
}
function gS(e, t) {
  const n = x0(e), r = Yo(n.yaw, n.pitch, 0), o = zc(t, e), a = {
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
    roll: Rl(Math.atan2(
      zc(f, r.up),
      zc(f, r.right)
    ) * Nr)
  };
}
function S0(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Ef({ width: n, height: r }, Wi(e)), a = Ui(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, f = vg(e, pg(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = x0(f);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: q(2 * Math.atan(n / (2 * a)) * Nr, 1, 179)
  };
}
function yS(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = Ui(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: v, halfH: g } = _f(d, f), w = {
    x: a - v,
    y: c - g,
    w: v * 2,
    h: g * 2
  }, x = w.x <= 0 && w.y <= 0 && w.x + w.w >= r && w.y + w.h >= o, P = r / o, S = Math.tan(ku * gl), _ = P >= 1 ? S : S * P, F = P >= 1 ? S / P : S;
  return {
    focalPx: f,
    rect: w,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(v / f) * Nr,
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
function bo(e, t) {
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
function bS(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = Ui(n, e);
    return vf(bf(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: $s(a, t) };
}
function kp(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Va(t, n);
  if (!a) return e;
  const c = Wi(e) >= 1;
  r && a.ratio >= 1 !== c && (a = Va(a.height, a.width));
  const f = bS(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...f, aspect_id: a.label };
}
function k0(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (qi(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = gg({
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
    return bo(e, (r) => kp(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return bo(e, (r) => {
      const a = String(Xr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? Va(a[1], a[2]) : Va(Wi(r), 1);
      return c ? kp(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? bo(e, (o) => {
      const a = Rl(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const f = { ...o, roll_deg: a };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? bo(e, (r) => {
    const o = yg(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? bo(e, (r) => {
    const o = bg(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? bo(e, (r) => {
    const o = P0(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function M0({
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
  }, g = Math.hypot(Number(t.x || 0) - v.x, Number(t.y || 0) - v.y);
  if (f === "shift" && g < Math.min(d.w, d.h) * c) return null;
  const w = Math.atan2(Number(t.y || 0) - v.y, Number(t.x || 0) - v.x);
  return {
    source: f,
    frame: d,
    center: v,
    startRollDeg: Number(n || 0),
    lastAngle: w,
    accumulatedRad: 0
  };
}
function N0(e, t, n = {}) {
  var c, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + dg(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: hg(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function P0(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * gl, d = Math.cos(f), v = Math.sin(f), g = a / n, w = -c / n, x = g * d - w * v, P = g * v + w * d, S = Number(e.pitch_deg || 0) * gl, _ = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: Ut(Number(e.yaw_deg || 0) - Math.atan(x) / _ * Nr),
    pitch_deg: q(Number(e.pitch_deg || 0) - Math.atan(P) * Nr, -90, 90)
  };
}
function vS({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return c0({
    readState: e,
    reduce: k0,
    projectModel: w0,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ne = Object.freeze({
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
}), _S = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, wS = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: _S(t[2])
})), xS = {
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
}, Mp = Object.fromEntries(
  Object.entries(xS).map(([e, t]) => [e, {
    name: t.name,
    elements: wS(t.body)
  }])
), Ot = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ct(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Mp, r) ? Mp[r] : null;
    });
    return (r, o) => n.value ? (ie(), ce("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: it(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (ie(!0), ce(Be, null, St(n.value.elements, (a, c) => (ie(), ce(Be, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ie(), ce("path", yi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ie(), ce("circle", yi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ie(), ce("rect", yi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ie(), ce("line", yi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ie(), ce("polyline", yi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ie(), ce("polygon", yi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : st("", !0)
      ], 64))), 128))
    ], 2)) : st("", !0);
  }
}, an = {
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
    const t = e, n = ct(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (ie(), Tr(Vv(e.tag), yi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Om(() => [
        De(Ot, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, SS = ["aria-expanded", "disabled"], kS = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, MS = ["data-aspect", "disabled", "onClick"], NS = { class: "pano-cutout-aspect-custom" }, PS = ["disabled"], AS = ["disabled"], CS = ["data-custom-width", "data-custom-height", "disabled"], A0 = {
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
    ]), a = /* @__PURE__ */ Ht("1"), c = /* @__PURE__ */ Ht("1"), f = /* @__PURE__ */ Ht(null), d = ct(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), v = ct(() => {
      const _ = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], F = String(n.model.aspectLabel || "");
      return _.length ? _.map((D) => {
        const Y = typeof D == "string" ? D : String((D == null ? void 0 : D.value) || ""), I = typeof D == "string" ? D : String((D == null ? void 0 : D.label) || Y);
        return {
          ...typeof D == "object" && D ? D : {},
          value: Y,
          label: I,
          active: F ? Y === F : (D == null ? void 0 : D.active) === !0
        };
      }) : o.map((D) => ({
        ...D,
        active: D.value === F
      }));
    }), g = ct(() => {
      var F;
      const _ = String(n.model.aspectLabel || "").trim();
      return _ || String(((F = v.value.find((D) => D.active === !0)) == null ? void 0 : F.label) || "Aspect");
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
    Fl(() => {
      document.addEventListener("pointerdown", x, !0);
    }), Ka(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function P(_) {
      const [F, D] = String(_.value || "").split(":");
      w({
        type: "set-aspect",
        width: F,
        height: D,
        preserveOrientation: !0
      });
    }
    function S() {
      w({
        type: "set-aspect",
        width: a.value,
        height: c.value,
        preserveOrientation: !1
      });
    }
    return (_, F) => (ie(), ce("div", {
      ref_key: "rootElement",
      ref: f,
      class: it(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ie(), Tr(an, {
        key: 0,
        icon: e.model.aspectIcon || Je(Ne).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: F[0] || (F[0] = (D) => w({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ie(), ce("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: F[1] || (F[1] = (D) => w({ type: "toggle-aspect" }))
      }, [
        De(Ot, {
          icon: e.model.aspectIcon || Je(Ne).aspect
        }, null, 8, ["icon"]),
        K("span", null, tt(g.value), 1),
        De(Ot, {
          icon: Je(Ne).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, SS)),
      vi(K("div", kS, [
        (ie(!0), ce(Be, null, St(v.value, (D) => (ie(), ce("button", {
          key: D.value,
          class: it(["pano-btn pano-frame-aspect-choice", { active: D.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": D.value,
          disabled: d.value,
          onClick: (Y) => P(D)
        }, tt(D.label), 11, MS))), 128)),
        K("div", NS, [
          vi(K("input", {
            "onUpdate:modelValue": F[2] || (F[2] = (D) => a.value = D),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, PS), [
            [Jh, a.value]
          ]),
          F[4] || (F[4] = K("span", { "aria-hidden": "true" }, ":", -1)),
          vi(K("input", {
            "onUpdate:modelValue": F[3] || (F[3] = (D) => c.value = D),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, AS), [
            [Jh, c.value]
          ]),
          K("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: S
          }, "Apply", 8, CS)
        ])
      ], 512), [
        [Wo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, IS = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, ES = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Ht(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (ie(), ce("div", {
      class: it(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Et(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Et(() => {
      }, ["stop"]))
    }, [
      De(an, {
        icon: Je(Ne).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Et((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      K("div", IS, [
        o[3] || (o[3] = K("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ie(!0), ce(Be, null, St(Je(n), (a) => (ie(), ce("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          K("kbd", null, tt(a[0]), 1),
          K("span", null, tt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, OS = {
  class: "pano-view-unavailable",
  role: "status"
}, Of = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ie(), ce("div", OS, tt(Je(Zg)), 1));
  }
}, FS = { class: "pano-cutout-node-surface" }, TS = ["title", "disabled"], DS = { class: "value" }, LS = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, RS = {
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
    return (r, o) => (ie(), ce("div", FS, [
      K("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Et(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Et(() => {
        }, ["stop"]))
      }, [
        K("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          De(Ot, {
            icon: Je(Ne).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = K("span", { class: "label" }, "Full Editor", -1))
        ]),
        De(an, {
          icon: e.model.hasShot ? Je(Ne).delete : Je(Ne).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(A0, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        K("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = Et((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          De(Ot, {
            icon: Je(Ne).roll
          }, null, 8, ["icon"]),
          K("span", DS, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, TS),
        De(an, {
          icon: Je(Ne).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        De(ES)
      ], 32),
      e.model.hasShot === !1 ? (ie(), ce("div", LS, " Choose a view · + Add Frame ")) : st("", !0),
      e.model.viewUnavailable ? (ie(), Tr(Of, { key: 1 })) : st("", !0)
    ]));
  }
}, C0 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Ht(null);
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
    function v(w) {
      var _, F;
      const { active: x, intent: P } = f();
      if (!x) return;
      const S = ((F = (_ = w.target) == null ? void 0 : _.files) == null ? void 0 : F[0]) || null;
      if (S) {
        r("file-selected", { intent: P, file: S });
        return;
      }
      r("file-cancelled", { intent: P });
    }
    function g() {
      const { active: w, intent: x } = f();
      w && r("file-cancelled", { intent: x });
    }
    return t({ open: d }), (w, x) => (ie(), ce("input", {
      ref_key: "inputRef",
      ref: o,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: v,
      onCancel: g
    }, null, 544));
  }
}, $S = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, VS = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Ht(!1), n = Object.freeze([
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
    return (r, o) => (ie(), ce("div", {
      class: it(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Et(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Et(() => {
      }, ["stop"]))
    }, [
      De(an, {
        icon: Je(Ne).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Et((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      K("div", $S, [
        o[3] || (o[3] = K("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ie(!0), ce(Be, null, St(Je(n), (a) => (ie(), ce("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          K("kbd", null, tt(a[0]), 1),
          K("span", null, tt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, zS = { class: "pano-stickers-node-surface" }, jS = ["disabled"], HS = ["aria-label", "data-tip"], GS = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, KS = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, BS = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Ht(null);
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
    return (c, f) => (ie(), ce("div", zS, [
      K("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: f[5] || (f[5] = Et(() => {
        }, ["stop"])),
        onWheel: f[6] || (f[6] = Et(() => {
        }, ["stop"]))
      }, [
        K("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: f[0] || (f[0] = (d) => r({ type: "open-editor" }))
        }, [
          De(Ot, {
            icon: Je(Ne).fullscreen
          }, null, 8, ["icon"]),
          f[10] || (f[10] = K("span", { class: "label" }, "Full Editor", -1))
        ]),
        K("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          De(Ot, {
            icon: Je(Ne).image
          }, null, 8, ["icon"]),
          f[11] || (f[11] = K("span", { class: "label" }, "Add Image", -1))
        ], 8, jS),
        De(an, {
          icon: e.model.locked ? Je(Ne).lock_closed : Je(Ne).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        De(an, {
          icon: Je(Ne).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        De(an, {
          icon: Je(Ne).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        De(an, {
          icon: e.model.isExternalSelection ? Je(Ne).back_initial : Je(Ne).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(VS)
      ], 32),
      e.model.playable === !0 ? (ie(), ce("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: f[7] || (f[7] = Et(() => {
        }, ["stop"])),
        onWheel: f[8] || (f[8] = Et(() => {
        }, ["stop"])),
        onClick: f[9] || (f[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        De(Ot, {
          icon: e.model.playing ? Je(Ne).pause : Je(Ne).play
        }, null, 8, ["icon"])
      ], 40, HS)) : st("", !0),
      e.model.hasStickers === !1 ? (ie(), ce("div", GS, " Add Image to place a sticker ")) : st("", !0),
      e.model.dropActive === !0 ? (ie(), ce("div", KS, "Drop image to add")) : st("", !0),
      De(C0, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ie(), Tr(Of, { key: 3 })) : st("", !0)
    ]));
  }
}, Np = 24;
function US(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Pp(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function WS(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function Du(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Pp(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Pp(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : WS(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Ff(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function I0(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ma(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: q(n.x, -r, t.width + r),
    y: q(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function YS(e) {
  const t = Yo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(q(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * sn * 0.5),
    tanY: Math.tan(q(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * sn * 0.5)
  };
}
function Oi(e, t, n) {
  return yf(ol(
    ol(e.centerDir, al(e.right, t)),
    al(e.up, n)
  ));
}
function Tf(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = YS(e), r = ma(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    Oi(n, -n.tanX, n.tanY),
    Oi(n, n.tanX, n.tanY),
    Oi(n, n.tanX, -n.tanY),
    Oi(n, -n.tanX, -n.tanY)
  ].map((x) => ma(x, t)), a = Array.from({ length: 4 }, (x, P) => {
    const S = [];
    for (let _ = 0; _ <= 28; _ += 1) {
      const F = _ / 28;
      let D, Y;
      P === 0 ? (D = -n.tanX + 2 * n.tanX * F, Y = n.tanY) : P === 1 ? (D = n.tanX, Y = n.tanY - 2 * n.tanY * F) : P === 2 ? (D = n.tanX - 2 * n.tanX * F, Y = -n.tanY) : (D = -n.tanX, Y = -n.tanY + 2 * n.tanY * F);
      const I = ma(Oi(n, D, Y), t);
      I && S.push({ x: I.x, y: I.y });
    }
    return S;
  }), c = ma(Oi(n, 0, n.tanY), t), f = ma(
    Oi(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, c, f];
  if (d.some((x) => !x || !Number.isFinite(x.x) || !Number.isFinite(x.y)))
    return { visible: !1 };
  if (!d.some((x) => x.rawZ > 1e-4)) return { visible: !1 };
  const v = f.x - c.x, g = f.y - c.y, w = Math.hypot(v, g) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((x) => ({ x: x.x, y: x.y })),
    boundaryEdges: a,
    rotateStemBase: { x: c.x, y: c.y },
    rotateHandle: {
      x: c.x + v / w * Np,
      y: c.y + g / w * Np
    },
    visible: !0
  };
}
function Ap(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: Tf(c, r) })).filter((c) => c.geometry.visible).sort((c, f) => {
    var d, v;
    return Number(((d = f.item) == null ? void 0 : d.z_index) || 0) - Number(((v = c.item) == null ? void 0 : v.z_index) || 0);
  }), a = o.find((c) => {
    var f;
    return String(((f = c.item) == null ? void 0 : f.id) || "") === String(t || "");
  });
  if (a) {
    const c = Du(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const f = Du(c.geometry, n);
    if (f.kind !== "none") return { ...c, hit: f };
  }
  return null;
}
function XS(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Ut(Math.atan2(r.x, r.z) * Nn),
    pitch_deg: Math.asin(q(r.y, -1, 1)) * Nn
  };
}
function qS(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: q(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: q(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function JS(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * Nn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Ss = null;
function Df() {
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
function er(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function ZS(e, t = 1024) {
  const n = Math.max(1, Math.round(er(e, 2048))), r = Math.min(n, Math.max(1, Math.round(er(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function QS(e, t, n) {
  const r = er(t), o = er(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = er(a.u0), f = er(a.v0), d = er(a.u1), v = er(a.v1);
  if (d <= c || v <= f) return null;
  const g = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + er(g.du)) * r,
    centerY: ((f + v) * 0.5 + er(g.dv)) * o,
    width: (d - c) * r,
    height: (v - f) * o,
    rotationRad: er(g.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, er(g.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function ek(e, t, n) {
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
function tk() {
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
      const g = [...f.listeners];
      f.listeners.clear(), g.forEach((w) => w()), n();
    };
    return d.onload = v, d.onerror = v, d.src = a, n(), d;
  }
  function o(a, c, f, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const v = String(a.rasterDataUrl || "").trim(), g = QS(a, c, f);
    if (!v.startsWith("data:") || !g) return null;
    const w = ek(a, c, f), x = String((a == null ? void 0 : a.id) || "").trim() || w, P = t.get(x);
    if ((P == null ? void 0 : P.revision) === w) return { source: P.source, revision: w };
    const S = r(v, d), _ = Number(S.naturalWidth || S.width || 0), F = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || _ < 1 || F < 1) return null;
    const D = document.createElement("canvas");
    D.width = Math.max(1, Math.round(c)), D.height = Math.max(1, Math.round(f));
    const Y = D.getContext("2d");
    return Y ? (g.wrapOffsets.forEach((I) => {
      Y.save(), Y.translate(g.centerX + I, g.centerY), Y.rotate(g.rotationRad), Y.scale(g.scale, g.scale), Y.drawImage(
        S,
        -g.width * 0.5,
        -g.height * 0.5,
        g.width,
        g.height
      ), Y.restore();
    }), t.set(x, { revision: w, source: D }), { source: D, revision: w }) : null;
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
function nk(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function rk(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function ik({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(w) {
    if (!w) return;
    w.entry.listeners.delete(w);
    const x = r.get(w.owner);
    (x == null ? void 0 : x.get(w.key)) === w && x.delete(w.key);
  }
  function c(w, x, P, S) {
    if (!w || typeof S != "function" || P.settled) return;
    let _ = r.get(w);
    _ || (_ = /* @__PURE__ */ new Map(), r.set(w, _));
    const F = _.get(x);
    if ((F == null ? void 0 : F.entry) === P) {
      F.callback = S;
      return;
    }
    a(F);
    const D = { owner: w, key: x, entry: P, callback: S };
    _.set(x, D), P.listeners.add(D);
  }
  function f(w, x) {
    w.settled || (w.settled = !0, w.image.onload = null, w.image.onerror = null, !x && n.get(w.key) === w && n.delete(w.key), [...w.listeners].forEach((P) => {
      a(P);
      try {
        P.callback(w.image, x);
      } catch {
      }
    }), d(o));
  }
  function d(w) {
    if (!(n.size <= w))
      for (const [x, P] of n) {
        if (n.size <= w) break;
        !P.settled || P.listeners.size > 0 || (P.image.onload = null, P.image.onerror = null, n.delete(x));
      }
  }
  function v(w, x, P, S = null) {
    const _ = String(x || ""), F = String(P || "");
    if (!_ || !F) return null;
    let D = n.get(_);
    if (D)
      n.delete(_), n.set(_, D);
    else {
      d(o - 1);
      const I = e || globalThis.Image;
      if (typeof I != "function") return null;
      const z = new I();
      D = { key: _, image: z, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(_, D), z.onload = () => f(D, !0), z.onerror = () => f(D, !1), z.src = F;
    }
    return D.settled || D.image.complete && Number(D.image.naturalWidth || D.image.width || 0) > 0 || c(w, _, D, S), D.image;
  }
  function g(w) {
    const x = r.get(w);
    x && ([...x.values()].forEach(a), r.delete(w), d(o));
  }
  return { get: v, disposeOwner: g };
}
const _a = /* @__PURE__ */ new WeakMap();
function E0(e, t, { editor: n = !1 } = {}) {
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
const yl = "state_json";
function ei(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function ok(e) {
  var c, f;
  const t = ei(e, yl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = $g(n, {
    coverage: (c = ei(e, "coverage")) == null ? void 0 : c.value
  }), o = k0(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (f = t.callback) == null || f.call(t, a), !0;
}
function Lf(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = ei(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, f, d, v, g, w, x, P, S;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (v = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || v.call(d), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (x = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), (S = (P = t == null ? void 0 : t.canvas) == null ? void 0 : P.setDirty) == null || S.call(P, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function ak(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Cp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function sk(e) {
  var g, w, x, P, S, _;
  if (!e) return;
  const t = ei(e, "coverage"), n = ei(e, "bg_color"), r = ei(e, yl), o = ei(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && ak(a) && (Cp(c) || c === ""))) return;
  let v = "360";
  if (Cp(c))
    try {
      v = String(Hn((g = JSON.parse(c)) == null ? void 0 : g.coverage));
    } catch {
      v = "360";
    }
  t.value = v, (w = t.callback) == null || w.call(t, v), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = c, (P = r.callback) == null || P.call(r, c), o && (o.value = f, (S = o.callback) == null || S.call(o, f)), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
}
function Bs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function Lu(e, t, n) {
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
async function lk(e, { tolerateOperationFailure: t = !1 } = {}) {
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
    var d, v;
    ((v = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : v.call(d, t)) === a && e.__panoPendingStickerUploads.delete(t);
  };
  return a.then(f, f), c.then(() => {
    e.__panoStickerOperationTail === c && (e.__panoStickerOperationTail = null);
  }), a;
}
async function O0(e, t = {}) {
  var r;
  await lk(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function ck(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await O0(e), n ? n.apply(this, r) : this.value;
  };
}
function uk(e) {
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
function fk(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function Jc(e, {
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
  function v(g) {
    var P;
    const w = `editor_btn|${n}`;
    if (g.__panoPreviewAttached === !0 && g.__panoPreviewMountKey === w) return;
    uk(g), Lf(g, t), Bs(g, yl);
    const x = ei(g, yl);
    if (ck(g, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const S = x.callback;
      x.callback = (_) => {
        var D;
        const F = S ? S(_) : void 0;
        return (D = g.setDirtyCanvas) == null || D.call(g, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      g.__panoSceneStateV2 = d;
      const S = ei(g, "bg_color");
      !d && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (P = S.callback) == null || P.call(S, "#00ff00")), Lu(g, r, () => o(g, "stickers")), f && (a(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(g, "stickers")
      }), g.__panoStickersNodeSurface && Bs(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = w;
      return;
    }
    Lu(g, r, () => o(g, "cutout")), c(g, {
      buttonText: r,
      onOpen: () => o(g, "cutout")
    }), g.__panoCutoutNodeSurface && Bs(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = w;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const w = e.prototype[g];
    e.prototype[g] = function() {
      const x = w ? w.apply(this, arguments) : void 0;
      g === "onNodeCreated" && n === "PanoramaCutout" && ok(this), g === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && sk(this);
      const P = !!this.__panoPreviewAttached;
      return (g === "onNodeCreated" || this.widgets) && v(this), g === "onAdded" && P && Qr(this, "attach"), x;
    };
  }
}
function dk(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return fk(this), r;
  };
}
function hk(e, {
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
    Lf(e, t);
    const d = (v = e) => n(v, "stickers", { readOnly: !0, hideSidebar: !1 });
    Lu(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && Bs(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function pk({
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
      const g = String((v == null ? void 0 : v.name) || "");
      (g === "PanoramaStickers" || g === "Panorama Stickers") && Jc(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f
      }), g === "PanoramaStickersNode" && Jc(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f,
        sceneStateV2: !0
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && Jc(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f
      }), sl(g) && dk(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const v = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Lf(d, e), sl(v) && hk(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const mk = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Pr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : mk.test(String(e.name || "")) : !1;
}
function Rf(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Pr(n)) : !1;
}
function gk(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var v, g, w;
    (v = d == null ? void 0 : d.preventDefault) == null || v.call(d), (g = d == null ? void 0 : d.stopPropagation) == null || g.call(d), (w = d == null ? void 0 : d.stopImmediatePropagation) == null || w.call(d);
  }, a = (d) => {
    if (Rf(d == null ? void 0 : d.dataTransfer)) {
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
    var g;
    const v = Array.from(((g = d == null ? void 0 : d.dataTransfer) == null ? void 0 : g.files) || []).find((w) => Pr(w));
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
async function xa(e, t = {}) {
  var c, f, d, v;
  if (!Pr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((f = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : f.bind(globalThis.URL)), o = t.revokeObjectURL || ((v = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : v.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const g = await new Promise((w, x) => {
      const P = new n();
      P.onload = () => w(P), P.onerror = () => x(new Error("image load failed")), P.src = a;
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
const Ip = /* @__PURE__ */ new WeakSet(), Ep = /* @__PURE__ */ new WeakSet();
let Op = 0;
function Ru(e) {
  if (!e || typeof e != "object" || Ep.has(e)) return e;
  const t = String(e.type || "preview");
  return Op += 1, e.type = `${t}:pano-${Op}`, Ep.add(e), e;
}
function bl(e) {
  if (!e || typeof e != "object" || Ip.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Ip.add(e), e;
}
function F0(e, t) {
  var r, o;
  if (!t || ((o = (r = bl(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function yk({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const v = o;
    o = null, a || n == null || n(v);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Lt } = Os;
Ux((e) => Ji(e.id));
Wx(jt);
const $f = ik(), { linkedVideoFile: bk } = l0({ app: Lt, api: jt });
function $u() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Os == null ? void 0 : Os.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const vk = "pano_suite.ui_settings.v1", _k = 120, wk = 2048;
function Fp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(vk)) || "").trim();
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
function xk() {
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
function Sk() {
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
function Vu(e) {
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
function T0(e) {
  const t = Vu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function kk(e, t, n) {
  T0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function zu(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Vf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function D0(e) {
  return sl(Vf(e));
}
function Tp(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function L0(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = zu(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && f === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && Us(e), pM(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = zu(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Us(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Us(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function Mk(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Us(e, t = {}) {
  var r, o, a, c, f;
  if (!e) return;
  ju.unregister(e), Mk(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const g = String((v == null ? void 0 : v.name) || ""), w = String((v == null ? void 0 : v.type) || ""), x = $u();
      return g === x || w === x || g === "pano_preview" || w === "pano_preview" ? !0 : g === "preview" && w === "pano_preview";
    }).forEach((v) => Uk(e, v));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function Nk(e, t = "#00ff00") {
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
function Pk(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Lo(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Tn(e) {
  var f, d;
  const t = Pk(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = Lo(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), o = Number(((d = Lo(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? Vg(t, { backgroundColor: r, coverage: o, active: Kg(e) }) : Nk(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function Lo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Ak(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function R0(e, t, n = null) {
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
  return !r && n != null && (r = Ak(e == null ? void 0 : e.graph, n)), r;
}
function Ck(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function $0(e, t = []) {
  const n = Ck(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    xi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function Dp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function vl(e, t) {
  const n = Dp(e), r = Dp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Ik(e, t) {
  var n;
  return R0(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function Ek(e, t = xi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = $0(e, t).map((f) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(f))).filter((f) => f >= 0), a = n.map((f, d) => ({ input: f, idx: d })).filter(({ input: f }) => String((f == null ? void 0 : f.type) || "").toUpperCase() === "IMAGE").map(({ idx: f }) => f), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return Qx(e, c, Ik);
}
const ju = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = jt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, v, g, w, x;
        if (!a) return;
        const c = vl(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...Ek(a)].some((P) => vl(r, P)) || a0(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (V0(a), (v = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || v.call(d), (g = a.setDirtyCanvas) == null || g.call(a, !0, !0), (x = (w = a.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, jt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = jt) != null && e.removeEventListener) || (jt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function _l(e) {
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
  return typeof ((a = jt) == null ? void 0 : a.apiURL) == "function" ? jt.apiURL(o) : o;
}
function Ok(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Fk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function Tk(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function Dk(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Ok(t)) return [t];
  const { filename: n, subfolder: r } = Fk(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => _l({
    filename: n,
    subfolder: r,
    type: a
  }));
  return Tk([...o, t]);
}
function Lk(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? _l({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ji(e) {
  const t = Lt == null ? void 0 : Lt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (vl(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (vl(c, o)) return t[c];
  }
  return null;
}
function Ws(e, t, n = null) {
  const r = n || Ji(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function hr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return hr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return _l({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = hr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : _l(e);
}
function wl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Lp(e) {
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
function zf(e, t) {
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
function Rk(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function $k(e, t) {
  try {
    e.__panoOwnOutputRev = nk(e.__panoOwnOutputRev);
    const n = Rk(t);
    let r = "";
    for (const o of n)
      if (r = hr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), zf(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Ro(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function Vk(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!rr(e, "background"))
    return Ro(e), null;
  const o = Ji(r), a = s0(o, t, hr);
  if (!a)
    return Ro(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = zf(a, c), d = `${t.join("|")}:${f}`, v = e.__panoOwnOutputVideoCache;
  if (v != null && v.video && v.key === d) return v.failed() ? null : v.video;
  Ro(e);
  const g = eS({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return g ? (e.__panoOwnOutputVideoCache = { key: d, ...g }, g.video) : null;
}
function zk(e, t = []) {
  var v, g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = $0(e, t).map((w) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(w))).filter((w) => w >= 0), a = n.map((w, x) => ({ input: w, idx: x })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const w of c) {
    const x = n[w], P = e.graph ? e.getInputLink(w) : null;
    if ((P == null ? void 0 : P.origin_id) == null) continue;
    const S = P.origin_id, _ = R0(e, w, S);
    if (!_) continue;
    const F = Number(P.origin_slot ?? 0), D = Ji((_ == null ? void 0 : _.id) ?? S), Y = Array.isArray(D == null ? void 0 : D.images) ? D.images : [];
    if (Y.length) {
      const R = [];
      F >= 0 && F < Y.length && R.push(Y[F]), R.push(...Y);
      for (const G of R.filter((Z) => !Gs(Z))) {
        const Z = hr(G);
        if (Z)
          return String((x == null ? void 0 : x.name) || ""), { src: `${Z}&pano_src=${Fu(D)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let I = [];
    try {
      I = typeof (Lt == null ? void 0 : Lt.getNodeImageUrls) == "function" ? Lt.getNodeImageUrls(_) || [] : [];
    } catch {
      I = [];
    }
    if (Array.isArray(I) && I.length) {
      const R = [];
      F >= 0 && F < I.length && R.push(I[F]), R.push(...I);
      for (const G of R) {
        const Z = hr(G);
        if (Z)
          return String((x == null ? void 0 : x.name) || ""), { src: Z, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const z = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
    if (z.length) {
      const R = [];
      F >= 0 && F < z.length && R.push(z[F]), R.push(...z);
      for (const G of R) {
        const Z = hr(G);
        if (Z)
          return String((x == null ? void 0 : x.name) || ""), { src: Z, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const O = (v = _ == null ? void 0 : _.widgets) == null ? void 0 : v.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (O) {
      let R = hr(O.value);
      if (R && !R.includes("/") && !R.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (R = jt.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R)
        return String((x == null ? void 0 : x.name) || ""), { src: R, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const f = rr(e, "background") ? Ji(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && d.push(...f.pano_input_images), Array.isArray((g = f == null ? void 0 : f.ui) == null ? void 0 : g.pano_input_images) && d.push(...f.ui.pano_input_images), d.length > 0)
    for (const w of d) {
      const x = hr(w);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function jk(e, t = [], n = {}) {
  const r = zk(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = Dk(o);
  if (!a.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(f);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return c && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const v = new Image(), g = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  g.pendingSrcRaw = o, g.pendingResolvedSrc = "", g.pendingImg = v, e.__panoLinkedInputImageCache.set(f, g);
  let w = -1;
  const x = () => {
    var S, _, F, D;
    if (w += 1, w >= a.length) {
      if (((_ = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : _.call(S, f)) === g && g.pendingImg === v && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
        try {
          (D = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || D.call(F, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const P = a[w];
    g.pendingResolvedSrc = P, v.src = P;
  };
  return v.onload = () => {
    var P, S, _;
    ((S = (P = e.__panoLinkedInputImageCache) == null ? void 0 : P.get) == null ? void 0 : S.call(P, f)) === g && g.pendingImg === v && (g.srcRaw = o, g.resolvedSrc = String(g.pendingResolvedSrc || v.src || ""), g.img = v, g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null), String(g.pendingResolvedSrc || g.resolvedSrc || v.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, v.onerror = (P) => {
    var S, _, F, D;
    if (w + 1 < a.length) {
      x();
      return;
    }
    if (((_ = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : _.call(S, f)) === g && g.pendingImg === v && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
      try {
        (D = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || D.call(F, f);
      } catch {
      }
    String(g.pendingResolvedSrc || g.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((P == null ? void 0 : P.type) || "error");
  }, x(), c && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : v;
}
function Hk(e, t = [], n = null, r = {}) {
  const o = jk(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function V0(e) {
  var t, n;
  if (e) {
    $f.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Ro(e), e.__panoWrappedErpCache = null;
  }
}
function Gk(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, Ro(e), e.__panoWrappedErpCache = null;
  }
}
function z0(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function ks(e, t, n = "") {
  const r = z0(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < _k ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Rp(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, f = r / a, d = Math.min(c, f);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function Kk(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), v = Math.max(Math.round(34 * n), f + Math.round(14 * n)), g = r + (a - d) * 0.5, w = o + (c - v) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(g, w, d, v, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", g + d * 0.5, w + v * 0.5 + 0.5), e.restore();
}
function Zc(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function Bk(e) {
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
function Uk(e, t) {
  return F0(e, t);
}
function za(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = Lk(n);
  if (!a && (r != null && r.external)) {
    if (!rr(e, "external-sticker")) return null;
    const P = Ji(e == null ? void 0 : e.id), S = ((x = P == null ? void 0 : P.ui) == null ? void 0 : x.pano_sticker_input_images) || (P == null ? void 0 : P.pano_sticker_input_images) || [];
    for (const _ of Array.isArray(S) ? S : [S])
      if (a = hr(_), a) break;
  }
  if (!a) return null;
  const c = Ws(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, v = r != null && r.external ? zf(a, d) : a, g = rk(a, f, d);
  return $f.get(e, g, v, (P, S) => {
    var _, F;
    S && (r != null && r.external && e.__panoOutputFromRun && Qr(e, "image-loaded"), (F = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null || F.call(_));
  }) || null;
}
function Wk(e, t) {
  var w, x, P, S;
  const n = Zk(e, t), r = Qk(t), o = Array.isArray((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) ? t.painting.groups : [], a = new Map(
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
    return (S = (P = e.__panoRasterObjectSurfaceCache) == null ? void 0 : P.retain) == null || S.call(P, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = tk()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var _, F;
    return (F = (_ = e.__panoDomPreview) == null ? void 0 : _.requestDraw) == null ? void 0 : F.call(_);
  });
  const d = ZS(t == null ? void 0 : t.output_preset), v = f.filter((_) => (_ == null ? void 0 : _.visible) !== !1 && String((_ == null ? void 0 : _.layerKind) || "paint") === "paint").map((_) => String((_ == null ? void 0 : _.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(v);
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
function Yk(e, t, n, r) {
  var a, c, f, d, v, g;
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
      x: Number(t.canvasX) - Number(((v = e == null ? void 0 : e.pos) == null ? void 0 : v[0]) || 0),
      y: Number(t.canvasY) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
    };
  const o = qk(e, t, r);
  return o || null;
}
function Xk(e, t) {
  var w, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (w = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : w.call(o), c = (t == null ? void 0 : t.ds) || ((x = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : x.ds);
  if (!a || !c) return null;
  const f = Number(c.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], v = (n - Number(a.left || 0)) / f - Number(d[0] || 0), g = (r - Number(a.top || 0)) / f - Number(d[1] || 0);
  return !Number.isFinite(v) || !Number.isFinite(g) ? null : { x: v, y: g };
}
function qk(e, t, n) {
  var o, a;
  const r = Xk(t, n || (Lt == null ? void 0 : Lt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function Jk(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function Zk(e, t) {
  var v, g, w, x, P, S, _, F, D, Y, I, z;
  const n = (g = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.paint) == null ? void 0 : g.strokes, r = (x = (w = t == null ? void 0 : t.painting) == null ? void 0 : w.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = Jk(e, t), f = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = xu(c), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((P = t == null ? void 0 : t.painting) == null ? void 0 : P.groups) || null,
    rasterObjects: ((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) || null
  };
  return (((_ = e.__panoPreviewPaintRevision) == null ? void 0 : _.paint) !== d.paint || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== d.mask || ((D = e.__panoPreviewPaintRevision) == null ? void 0 : D.groups) !== d.groups || ((Y = e.__panoPreviewPaintRevision) == null ? void 0 : Y.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Qk(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function eM(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function tM(e, t, n) {
  const r = Tf(t, n);
  r.visible && Ff(e, r.boundaryEdges, { selected: !1 });
}
function nM(e, t, n) {
  const r = Tf(t, n);
  r.visible && (e.save(), Ff(e, r.boundaryEdges, { selected: !0 }), I0(e, r, { accent: US(t) }), e.restore());
}
function Hu(e, t, n) {
  return qg(pl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function xl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Ko;
}
function rM(e) {
  return [rr(e, "background") ? s0(Ji(e.id), ["pano_input_videos"], hr) : "", bk(e, xi)];
}
function iM({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function $p(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Go({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let f;
    if (t.version === 2)
      f = za(e, c.id, Hg(c.source), { external: c.source.kind === "port" });
    else {
      const v = c.type === "external_image" || c.source_kind === "external_image", g = String(c.asset_id || "") || (v ? String(c.id || "") : "");
      f = za(e, g, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: v });
    }
    return wl(f) ? { media: f, revision: Lp(f) } : null;
  }, o = Wk(e, t).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: wl(n) ? { media: n, revision: Lp(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Jg(e.__panoSurfaceScene.sceneState, xl(e), t.stickers, { media: r, paintLayers: o })
  };
}
function oM(e, t, n) {
  var z, O, R, G, Z, _e, T;
  const r = String(e.__panoPreviewMode || "stickers");
  z0(e, r);
  const o = Tn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (R = (O = (z = e.__panoCutoutNodeSurface) == null ? void 0 : z.session) == null ? void 0 : O.refresh) == null || R.call(O)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (Z = (G = e.__panoStickersNodeSurface) == null ? void 0 : G.session) == null ? void 0 : Z.refresh) == null || _e.call(Z));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), f = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== f) && (t.width = c, t.height = f);
  const v = { x: 0, y: 0, w: c, h: f };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, f);
  const g = (e.__panoSurfacePlayback ? iM(e.__panoSurfacePlayback) : Vk(e, ["pano_input_videos"], () => {
    var E, ue;
    return (ue = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : ue.call(E);
  })) || Hk(
    e,
    xi,
    () => {
      var E, ue;
      return (ue = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : ue.call(E);
    },
    { preserveReadyWhilePending: !1 }
  ), w = wl(g);
  let x = null;
  const P = (E, ue) => {
    x || (x = $p(e, o, g));
    const fe = n.render({ width: E.w, height: E.h, camera: ue, ...x });
    return fe && d.drawImage(fe.canvas, fe.x, fe.y, fe.width, fe.height, E.x, E.y, E.w, E.h), !!fe;
  };
  if (r === "cutout") {
    const E = Bk(o), ue = eM(g), fe = E ? q(ii(E).aspect, 0.1, 10) : w ? q(Number(ue.width / ue.height), 0.05, 20) : 1, de = Ef(v, fe);
    e.__panoCutoutNodeFrame = de;
    let U = "none";
    const X = String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "");
    if (E)
      if (g && !w)
        U = "loading";
      else if (w) {
        const j = yS({ width: c, height: f }, de, E);
        [
          !j.fallback || P(j.fallback.rect, js(j.fallback.shot)),
          P(j.rect, js(j.shot)),
          !j.fallback || P(de, js(E))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const j = e.__panoLastCutoutShot;
      j ? (e.__panoPreviewView = S0(j, { width: c, height: f }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), w ? P(v, pl(e.__panoPreviewView, c, f)) || (U = "loading") : g ? U = "loading" : U = "empty";
    }
    w || n.release(), n.failed && U === "loading" && (U = "none"), E && (e.__panoLastCutoutShot = { ...E }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, f), d.rect(de.x, de.y, de.w, de.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(de.x + 0.5, de.y + 0.5, Math.max(0, de.w - 1), Math.max(0, de.h - 1)), d.restore()), U === "loading" ? (Zc(e, !1), ks(e, !0, X)) : U === "empty" ? (Zc(e, !0), ks(e, !1, "")) : (Zc(e, !1), ks(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let S = !1;
  (!g || w) && (x = $p(e, o, g), !x.background && !x.layers.length ? (n.release(), S = !0) : S = P(v, pl(e.__panoPreviewView, c, f)));
  const _ = !S && !n.failed;
  ks(e, _, _ ? String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "") : ""), _ && Kk(d, v, Rp(t, v));
  const F = Hu(e, c, f);
  !g && S && aM(d, F, Rp(t, v));
  const D = String(((T = o == null ? void 0 : o.active) == null ? void 0 : T.selected_sticker_id) || ""), Y = Tu(o, xl(e)), I = S ? Y.find((E) => String((E == null ? void 0 : E.id) || "") === D && (E == null ? void 0 : E.visible) !== !1) : null;
  S && Y.filter((E) => E !== I && (E == null ? void 0 : E.visible) !== !1 && (E.external || E.source_kind === "external_image")).filter((E) => !wl(za(e, E.id, null, { external: !0 }))).forEach((E) => tM(d, E, F)), I && nM(d, I, F);
}
function Vp(e, t, n, r, o = 1) {
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
function aM(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let f = -75; f <= 75; f += 15) {
    const d = [];
    for (let v = -180; v <= 180; v += 4) d.push(Rn(v, f));
    Vp(e, d, t, f === 0 ? o : r, f === 0 ? 1.5 : 1);
  }
  for (let f = -180; f <= 180; f += 15) {
    const d = [];
    for (let v = -89; v <= 89; v += 4) d.push(Rn(f, v));
    Vp(e, d, t, r, f % 90 === 0 ? 1.3 : 1);
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
function Gu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function sM(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function Zn(e, t) {
  return sM(e, t) ? !1 : (Gu(e), !0);
}
function zp() {
  var n;
  const e = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function lM(e) {
  var n;
  if (!e) return;
  const t = (n = Lt == null ? void 0 : Lt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function cM(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !T0(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function uM(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function jp(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && fM(e, 180, t);
    }
  };
}
function fM(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Sa(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const dM = /* @__PURE__ */ new WeakMap();
function j0(e, t) {
  return a0(dM, e, t) ? !1 : ($k(e, t), V0(e), Sa(e), !0);
}
async function hM(e) {
  var n, r;
  const t = await Jx(e, Lt, jt);
  t && (j0(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function pM(e, t = {}) {
  var Ua;
  const n = t.__allowStandalone === !0, r = D0(e);
  if (r && !n) {
    Vf(e);
    return;
  }
  r && cM(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: Tp(e)
  }, f = "dom", d = c.signature || Tp(e);
  if (Number(e.__panoRebindGeneration || 0), zu(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Vu(e), e.__panoFrontendSig = d, e.__panoStickersPath = f, (Ua = e.__panoDomPreview) != null && Ua.widget || (e.__panoLegacyPreviewHooked && Us(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const v = t.noPreview === !0, g = v ? 0 : 56, w = v ? 0 : hS, x = document.createElement("div");
  if (Sk(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), v && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
    "width:100%",
    v ? "height:auto" : "height:100%",
    w > 0 ? `min-height:${w}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), v) {
    const L = bl(Ru(
      e.addDOMWidget($u(), "preview", x, jp(e, null))
    ));
    Sa(e), e.__panoDomPreview = { widget: L, root: x, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const P = document.createElement("div");
  P.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const S = document.createElement("canvas");
  S.style.cssText = [
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
  ].join(";"), _.textContent = "Connect ERP image", P.appendChild(S), P.appendChild(_), x.appendChild(P);
  const F = fg(x), D = document.createElement("div");
  D && (D.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", D.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild(D)), kk(e, 120, 120), Sa(e);
  let Y = null;
  try {
    uM(e, g, () => {
      var L, se;
      return (se = (L = e.__panoDomPreview) == null ? void 0 : L.requestDraw) == null ? void 0 : se.call(L);
    }), Y = bl(Ru(e.addDOMWidget(
      $u(),
      "preview",
      x,
      jp(
        e,
        () => {
          var L, se;
          return (se = (L = e.__panoDomPreview) == null ? void 0 : L.requestDraw) == null ? void 0 : se.call(L);
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
    I.destroyed || (I.needsDraw = !0, !I.inTick && !I.raf && (I.raf = requestAnimationFrame(Un)));
  }, O = Qg(z), R = /* @__PURE__ */ Uo(o ? { ...b0(Tn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...w0(Tn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((L) => ({ value: L, label: L }))
  });
  let G = null;
  if (o && e.__panoSceneStateV2) {
    const L = document.createElement("video");
    L.playsInline = !0, L.preload = "auto", L.crossOrigin = "anonymous", L.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", P.appendChild(L);
    const se = document.createElement("canvas");
    se.__panoFrameIdx = 0;
    const Ie = fS({
      video: L,
      clock: {
        now: () => performance.now(),
        requestFrame: (Ce) => requestAnimationFrame(Ce),
        cancelFrame: (Ce) => cancelAnimationFrame(Ce)
      },
      readState: () => Tn(e),
      onFrame: z,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ge;
        if (!(L.videoWidth > 0 && L.videoHeight > 0)) return;
        const Ce = Math.min(1, wk / L.videoWidth);
        se.width = Math.round(L.videoWidth * Ce), se.height = Math.round(L.videoHeight * Ce), (Ge = se.getContext("2d")) == null || Ge.drawImage(L, 0, 0, se.width, se.height), se.__panoFrameIdx += 1, z();
      },
      onChange: () => {
        R.playing = Ie.playing, z();
      }
    });
    G = { playback: Ie, video: L, still: se }, e.__panoSurfacePlayback = G;
  }
  const Z = () => {
    var Ue;
    const { playback: L, still: se } = G, Ie = uS(P, !!((Ue = e.flags) != null && Ue.collapsed)), Ce = L.source, Ge = L.follow({ shown: Ie, sources: Ie ? rM(e) : [], state: Tn(e) });
    L.source !== Ce && (se.width = 0, se.__panoFrameIdx = 0), R.playable = Ge, R.playing = L.playing;
  }, _e = () => G == null ? void 0 : G.playback.pause();
  let T = null;
  const E = (o ? lS : vS)({
    readState: () => Tn(e),
    publishLiveState: (L) => {
      L ? (T = L, e.__panoLiveStateOverride = L) : (e.__panoLiveStateOverride === T && (e.__panoLiveStateOverride = null), T = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, z();
    },
    commitState: (L) => {
      var Ce, Ge, Ue, lt;
      const se = Lo(e, "state_json");
      if (!se) return;
      Bg(e, L.active);
      const Ie = Ug(e, L);
      Wg(e, Ie, String(se.value ?? "")) || (se.value = Ie, (Ce = se.callback) == null || Ce.call(se, Ie), e.__panoStateCache = null, (Ge = e.setDirtyCanvas) == null || Ge.call(e, !0, !0), (lt = (Ue = e.graph) == null ? void 0 : Ue.setDirtyCanvas) == null || lt.call(Ue, !0, !0));
    },
    onChange: (L) => Object.assign(R, L)
  }), fe = o ? E0(e, (L = "sync", se = null) => {
    var At;
    if (!o || !e.graph || !E || E.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Pn = rr(e, "external-sticker"), $r = Tn(e).stickers.find((Xn) => Xn.source.kind === "port");
      return E.apply({
        type: "sync-port",
        value: g0(e, {
          pose: Pn ? Ws(e, "pano_sticker_input_pose", se) : null,
          image: $r ? za(e, $r.id, null, { external: !0 }) : null
        })
      });
    }
    const Ie = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Pn) => String((Pn == null ? void 0 : Pn.name) || "") === "sticker_image") : -1, Ce = Ie >= 0 ? ((At = e.getInputLink(Ie)) == null ? void 0 : At.id) ?? null : null;
    if (Ce == null)
      return E.apply({ type: "sync-external", value: { connected: !1 } });
    if (!rr(e, "external-sticker")) return !1;
    const Ge = Ws(e, "pano_sticker_input_pose", se), Ue = Array.isArray(Ge) ? Ge[0] : Ge, lt = String(Ws(e, "pano_sticker_input_state_hash", se) ?? ""), _n = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Xt = Tn(e), Yn = (Array.isArray(Xt == null ? void 0 : Xt.stickers) ? Xt.stickers : []).find((Pn) => String((Pn == null ? void 0 : Pn.id) || "") === "sticker_image_1"), mt = za(e, "sticker_image_1", null, { external: !0 }), Rr = Ue && typeof Ue == "object" ? Ue : Yn || { yaw_deg: _n.yaw, pitch_deg: _n.pitch, hFOV_deg: 30, rot_deg: 0 };
    return E.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Ce,
        stateHash: lt,
        pose: Rr,
        imageWidth: Number((mt == null ? void 0 : mt.naturalWidth) || (mt == null ? void 0 : mt.width) || 0),
        imageHeight: Number((mt == null ? void 0 : mt.naturalHeight) || (mt == null ? void 0 : mt.height) || 0)
      }
    });
  }) : () => {
  };
  let de = 0;
  const U = async (L) => {
    if (!o || !E || !Pr(L)) return !1;
    _e();
    const se = `asset_${Math.random().toString(16).slice(2, 10)}`, Ie = `st_${Math.random().toString(16).slice(2, 10)}`, Ce = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    de += 1, R.importing = !0;
    const Ge = wa(e, `add:${se}`, async () => {
      const Ue = await xa(L), lt = await Ri(L, {
        fetchApi: (_n, Xt) => jt.fetchApi(_n, Xt)
      });
      return Pe(), E.apply({
        type: "add-sticker",
        value: {
          stickerId: Ie,
          assetId: se,
          asset: lt,
          imageWidth: Ue.width,
          imageHeight: Ue.height,
          yaw_deg: Number(Ce.yaw || 0),
          pitch_deg: Number(Ce.pitch || 0)
        }
      });
    });
    try {
      return await Ge;
    } catch {
      return !1;
    } finally {
      de = Math.max(0, de - 1), R.importing = de > 0, z();
    }
  };
  let X = null, j = null, M = null, Q = !1;
  const W = () => {
    var L;
    return M && (clearTimeout(M), M = null), Q ? (Q = !1, ((L = E == null ? void 0 : E.commitGesture) == null ? void 0 : L.call(E)) ?? !1) : !1;
  }, Pe = () => {
    var Ce, Ge, Ue;
    const L = W(), se = (X == null ? void 0 : X.pointerId) ?? (j == null ? void 0 : j.pointerId);
    if (X = null, j = null, se != null) {
      try {
        (Ce = S.hasPointerCapture) != null && Ce.call(S, se) && ((Ge = S.releasePointerCapture) == null || Ge.call(S, se));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Ie = ((Ue = E == null ? void 0 : E.commitGesture) == null ? void 0 : Ue.call(E)) ?? !1;
    return L || Ie;
  }, Te = () => {
    var Ce, Ge, Ue;
    const L = W(), se = X == null ? void 0 : X.pointerId;
    if (X = null, se != null) {
      try {
        (Ce = S.hasPointerCapture) != null && Ce.call(S, se) && ((Ge = S.releasePointerCapture) == null || Ge.call(S, se));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Ie = ((Ue = E == null ? void 0 : E.cancelGesture) == null ? void 0 : Ue.call(E)) ?? !1;
    return L || Ie;
  }, kt = () => Pe();
  E && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(kt));
  let pt = null, ut = !1;
  if (D && E)
    try {
      Df(), pt = ff(o ? BS : RS, {
        model: R,
        onAction: (L) => {
          var Ce, Ge;
          if ((L == null ? void 0 : L.type) === "toggle-playback") {
            Pe(), G == null || G.playback.toggle();
            return;
          }
          if (_e(), (L == null ? void 0 : L.type) === "open-editor") {
            Pe(), o || (R.aspectOpen = !1), (Ce = e.__panoOpenEditor) == null || Ce.call(e);
            return;
          }
          if (o) {
            if ((L == null ? void 0 : L.type) === "add-image-file") {
              U(L.file);
              return;
            }
            E.apply(L) && z();
            return;
          }
          if ((L == null ? void 0 : L.type) === "toggle-aspect") {
            R.aspectOpen = !R.aspectOpen;
            return;
          }
          if ((L == null ? void 0 : L.type) === "close-aspect") {
            R.aspectOpen = !1;
            return;
          }
          let se = L;
          if ((L == null ? void 0 : L.type) === "add-frame") {
            const Ue = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            se = {
              ...L,
              ...mS(Ue, {
                width: S.width,
                height: S.height
              })
            };
          } else if ((L == null ? void 0 : L.type) === "delete-frame") {
            const Ue = qi(Tn(e));
            Ue && (e.__panoPreviewView = S0(Ue, {
              width: S.width,
              height: S.height
            }));
          }
          const Ie = ((Ge = e.__panoCutoutNodeFrame) == null ? void 0 : Ge.safeRect) || null;
          R.aspectOpen = !1, E.apply({ ...se, safeRect: Ie }) && z();
        }
      }), pt.mount(D), ut = !0;
    } catch {
      pt = null, ut = !1;
    }
  const Zt = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    G && Z(), z();
  }) : null;
  Zt == null || Zt.observe(P);
  const Un = (L) => {
    var Ie, Ce;
    I.raf = 0, I.inTick = !0;
    let se = !1;
    try {
      se = Mt.stepInertia(L), (I.needsDraw || se) && (I.needsDraw = !1, G && Z(), (Ie = e.flags) != null && Ie.collapsed || oM(e, S, O), R.viewUnavailable = O.failed);
    } finally {
      I.inTick = !1;
    }
    (se || I.needsDraw) && !I.raf && (I.raf = requestAnimationFrame(Un)), xk() && (!e.__panoDebugLastTs || L - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = L, e.__panoPreviewMode, Vu(e), ga(x), ga(P), ga(S), ga(x.parentElement), ga((Ce = x.parentElement) == null ? void 0 : Ce.parentElement), Number(S.width || 0), Number(S.height || 0), void 0);
  }, Mt = gf({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (L) => {
      e.__panoPreviewView = L;
    },
    getViewportSize: () => {
      const L = S.getBoundingClientRect();
      return {
        w: Math.max(1, Number(L.width || S.clientWidth || 0)),
        h: Math.max(1, Number(L.height || S.clientHeight || 0))
      };
    },
    getInvert: () => {
      const L = Fp();
      return {
        x: L.invert_view_x ? -1 : 1,
        y: L.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      z();
    }
  }), Yt = o ? P : x, ln = (L) => {
    const se = S.getBoundingClientRect();
    return {
      x: (Number(L.clientX) - se.left) * (S.width / Math.max(1, se.width)),
      y: (Number(L.clientY) - se.top) * (S.height / Math.max(1, se.height))
    };
  }, $n = (L) => {
    var Ce, Ge;
    if (!o || !a) return;
    const se = Tn(e), Ie = Ap(
      Tu(se, xl(e)),
      String(((Ce = se == null ? void 0 : se.active) == null ? void 0 : Ce.selected_sticker_id) || ""),
      ln(L),
      Hu(e, S.width, S.height)
    );
    if (!Ie) {
      S.style.cursor = "grab";
      return;
    }
    if (((Ge = Ie.item) == null ? void 0 : Ge.locked) === !0) {
      S.style.cursor = "default";
      return;
    }
    S.style.cursor = Ie.hit.cursor || "default";
  };
  S.addEventListener("pointerdown", (L) => {
    var _n, Xt, Yn, mt, Rr, Xo, At, Pn, $r, Xn, to;
    if (!Zn(L, Yt) || L.button !== 0) return;
    if (!o) {
      const Rt = qi(Tn(e)), An = e.__panoCutoutNodeFrame;
      if (!Rt) {
        (_n = x.focus) == null || _n.call(x, { preventScroll: !0 }), (Xt = S.setPointerCapture) == null || Xt.call(S, L.pointerId), S.style.cursor = "grabbing", Mt.startDrag(L.clientX, L.clientY, L.pointerId);
        return;
      }
      if (Rt.locked === !0 || !An || !E) return;
      const Cn = ln(L);
      let Si;
      if (L.shiftKey) {
        const Nt = M0({
          frame: An,
          point: Cn,
          startRollDeg: Number(Rt.roll_deg ?? Rt.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!Nt) return;
        Si = { kind: "roll", pointerId: L.pointerId, rollGesture: Nt };
      } else {
        const Nt = ((Yn = Tn(e)) == null ? void 0 : Yn.ui_settings) || Fp();
        Si = {
          kind: "pan",
          pointerId: L.pointerId,
          startPoint: Cn,
          startShot: { ...Rt },
          focalPx: Ui(An, Rt),
          invertX: Nt.invert_view_x === !0,
          invertY: Nt.invert_view_y === !0
        };
      }
      Pe(), (mt = x.focus) == null || mt.call(x, { preventScroll: !0 }), (Rr = S.setPointerCapture) == null || Rr.call(S, L.pointerId), S.style.cursor = "grabbing", E.beginGesture(), X = Si;
      return;
    }
    if (!a) return;
    const se = ln(L), Ie = Tn(e), Ce = String(((Xo = Ie == null ? void 0 : Ie.active) == null ? void 0 : Xo.selected_sticker_id) || ""), Ge = Hu(e, S.width, S.height);
    (At = x.focus) == null || At.call(x, { preventScroll: !0 });
    const Ue = () => Ap(Tu(Ie, xl(e)), Ce, se, Ge);
    let lt = Ue();
    if (lt && (G != null && G.playback.playing) && (_e(), lt = Ue()), lt && E) {
      if (Mt.stopMotion(), Pe(), String(((Pn = lt.item) == null ? void 0 : Pn.id) || "") !== Ce && E.apply({ type: "select-sticker", id: lt.item.id }), (($r = lt.item) == null ? void 0 : $r.locked) === !0) {
        z();
        return;
      }
      const Rt = se, An = lt.geometry.center;
      j = {
        active: !0,
        kind: lt.hit.kind,
        pointerId: L.pointerId,
        startPoint: Rt,
        startCenter: { ...An },
        startSticker: { ...lt.item },
        startDistance: Math.max(1, Math.hypot(Rt.x - An.x, Rt.y - An.y)),
        startAngle: Math.atan2(Rt.y - An.y, Rt.x - An.x),
        projection: Ge
      }, E.beginGesture(), (Xn = S.setPointerCapture) == null || Xn.call(S, L.pointerId), S.style.cursor = lt.hit.kind === "rotate" ? "grabbing" : lt.hit.kind === "move" ? "move" : lt.hit.cursor, z();
      return;
    }
    (to = S.setPointerCapture) == null || to.call(S, L.pointerId), S.style.cursor = "grabbing", Mt.startDrag(L.clientX, L.clientY, L.pointerId);
  }), S.addEventListener("pointermove", (L) => {
    if (!o) {
      if (!X) {
        if (!Mt.state.drag.active) return;
        Zn(L, Yt), Mt.moveDrag(L.clientX, L.clientY, "pano");
        return;
      }
      if (X.pointerId !== L.pointerId || !E) return;
      if (Zn(L, Yt), X.kind === "pan") {
        const Ie = ln(L);
        E.updateGesture({
          type: "pan-camera",
          startShot: X.startShot,
          dx: Ie.x - X.startPoint.x,
          dy: Ie.y - X.startPoint.y,
          focalPx: X.focalPx,
          invertX: X.invertX,
          invertY: X.invertY
        });
        return;
      }
      const se = N0(X.rollGesture, ln(L), L);
      if (!se) return;
      X.rollGesture = se.gesture, E.updateGesture({ type: "set-roll", value: se.rollDeg });
      return;
    }
    if (!j && !Mt.state.drag.active) {
      $n(L);
      return;
    }
    if (j) {
      if (j.pointerId !== L.pointerId || !E) return;
      Zn(L, Yt);
      const se = ln(L);
      let Ie = j.startSticker;
      if (j.kind === "move")
        Ie = XS(
          j.startSticker,
          {
            x: j.startCenter.x + se.x - j.startPoint.x,
            y: j.startCenter.y + se.y - j.startPoint.y
          },
          j.projection
        );
      else if (j.kind === "scale") {
        const Ce = Math.hypot(se.x - j.startCenter.x, se.y - j.startCenter.y);
        Ie = qS(j.startSticker, j.startDistance, Ce);
      } else if (j.kind === "rotate") {
        const Ce = Math.atan2(se.y - j.startCenter.y, se.x - j.startCenter.x);
        Ie = JS(j.startSticker, j.startAngle, Ce, L.shiftKey === !0);
      }
      E.updateGesture({ type: "set-transform", value: Ie }), z();
      return;
    }
    !a || !Mt.state.drag.active || (Zn(L, Yt), Mt.moveDrag(L.clientX, L.clientY, "pano"));
  });
  const $ = () => {
    var se, Ie;
    if (!X && !j) {
      if (!Mt.state.drag.active) return;
      Mt.endDrag(), S.style.cursor = "grab", z();
      return;
    }
    if (!E) return;
    const L = (X == null ? void 0 : X.pointerId) ?? (j == null ? void 0 : j.pointerId);
    X = null, j = null;
    try {
      (se = S.hasPointerCapture) != null && se.call(S, L) && ((Ie = S.releasePointerCapture) == null || Ie.call(S, L));
    } catch {
    }
    E.cancelGesture(), S.style.cursor = "grab", z();
  }, H = (L, se = !1) => {
    var Ie, Ce, Ge, Ue;
    if (!o) {
      if (!X) {
        if (!Mt.state.drag.active) return;
        Zn(L, Yt), (Ie = S.releasePointerCapture) == null || Ie.call(S, L.pointerId), S.style.cursor = "grab", Mt.endDrag(), z();
        return;
      }
      if (X.pointerId !== L.pointerId || !E) return;
      Zn(L, Yt), X = null, (Ce = S.releasePointerCapture) == null || Ce.call(S, L.pointerId), S.style.cursor = "grab", se ? E.cancelGesture() : E.commitGesture(), $n(L), z();
      return;
    }
    if (j) {
      if (j.pointerId !== L.pointerId || !E) return;
      Zn(L, Yt), j = null, (Ge = S.releasePointerCapture) == null || Ge.call(S, L.pointerId), S.style.cursor = "grab", se ? E.cancelGesture() : E.commitGesture(), z();
      return;
    }
    !a || !Mt.state.drag.active || (Zn(L, Yt), (Ue = S.releasePointerCapture) == null || Ue.call(S, L.pointerId), S.style.cursor = "grab", Mt.endDrag(), z());
  };
  S.addEventListener("pointerup", H), S.addEventListener("pointercancel", (L) => H(L, !0)), S.addEventListener("lostpointercapture", $), S.addEventListener("pointerleave", (L) => {
    !o && X || j || Mt.state.drag.active && H(L);
  });
  const ee = (L) => {
    const se = document.activeElement;
    if (se !== x && !x.contains(se)) return;
    if (L.key === "Escape" && (X || j) && E) {
      $(), Gu(L);
      return;
    }
    if (!o || L.key !== "Delete" && L.key !== "Backspace" || !E) return;
    const Ie = L.target, Ce = String((Ie == null ? void 0 : Ie.tagName) || "").toUpperCase();
    Ce === "INPUT" || Ce === "TEXTAREA" || Ie != null && Ie.isContentEditable || R.canDelete === !0 && (_e(), Pe(), E.apply({ type: "delete-selected" }) && z(), Gu(L));
  };
  window.addEventListener("keydown", ee, !0);
  const be = yk({
    requestFrame: (L) => requestAnimationFrame(L),
    cancelFrame: (L) => cancelAnimationFrame(L),
    restore: (L) => lM(L)
  }), ge = (L) => {
    var Ie, Ce, Ge, Ue, lt, _n;
    if (!Zn(L, Yt)) return;
    if (!o) {
      const Xt = qi(Tn(e));
      if (Xt && Xt.locked !== !0 && E) {
        const Yn = mf(L);
        Yn !== 0 && (Q || (Pe(), E.beginGesture(), Q = !0), E.updateGesture({
          type: "step-fov",
          direction: Yn
        }) ? (M && clearTimeout(M), M = setTimeout(W, 180), z()) : E.hasGestureChanges() || (E.cancelGesture(), Q = !1));
      } else if (!Xt) {
        const Yn = zp();
        Mt.applyWheelEvent(L) && z(), be.schedule(Yn);
      }
      (Ie = L.preventDefault) == null || Ie.call(L), (Ce = L.stopPropagation) == null || Ce.call(L), (Ge = L.stopImmediatePropagation) == null || Ge.call(L);
      return;
    }
    if (!a) return;
    const se = zp();
    Mt.applyWheelEvent(L) && z(), (Ue = L.preventDefault) == null || Ue.call(L), (lt = L.stopPropagation) == null || lt.call(L), (_n = L.stopImmediatePropagation) == null || _n.call(L), be.schedule(se);
  }, ve = o ? [P, S] : [P];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((L) => {
    ve.forEach((se) => se.addEventListener(L, ge, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((L) => {
    S.addEventListener(L, (se) => Zn(se, Yt)), P.addEventListener(L, (se) => Zn(se, Yt));
  });
  const xe = Lo(e, "state_json");
  let Me = null, ke = null;
  xe && !xe.__panoPreviewPatchedCb && (Me = xe.callback, ke = (L) => {
    const se = Me ? Me(L) : void 0;
    return z(), se;
  }, xe.callback = ke, xe.__panoPreviewPatchedCb = ke);
  const le = Lo(e, "bg_color");
  let $e = null, Ae = null;
  le && !le.__panoPreviewPatchedCb && ($e = le.callback, Ae = (L) => {
    const se = $e ? $e(L) : void 0;
    return z(), se;
  }, le.callback = Ae, le.__panoPreviewPatchedCb = Ae);
  const Re = e.onRemoved, p = e.onResize, Ee = e.onExecuted, nt = e.onDragOver, We = e.onDragDrop;
  let ot = null;
  const Ft = () => {
    o && (R.dropActive = !0, ot && clearTimeout(ot), ot = setTimeout(() => {
      ot = null, R.dropActive = !1;
    }, 140));
  }, rn = o ? function(L) {
    return (nt ? nt.apply(this, arguments) : !1) === !0 ? !0 : Rf(L == null ? void 0 : L.dataTransfer) ? (Ft(), !0) : !1;
  } : null, vt = o ? function(L) {
    var Ce;
    if ((We ? We.apply(this, arguments) : !1) === !0) return !0;
    const Ie = Array.from(((Ce = L == null ? void 0 : L.dataTransfer) == null ? void 0 : Ce.files) || []).find((Ge) => Pr(Ge));
    return Ie ? (ot && clearTimeout(ot), ot = null, R.dropActive = !1, U(Ie), !0) : !1;
  } : null;
  o && (e.onDragOver = rn, e.onDragDrop = vt);
  const Fe = o ? gk(x, {
    onActive: (L) => {
      if (L) {
        Ft();
        return;
      }
      ot && clearTimeout(ot), ot = null, R.dropActive = !1;
    },
    onDrop: (L) => {
      U(L);
    }
  }) : () => {
  }, Wn = function(L) {
    e.__panoOutputFromRun = !0;
    const se = j0(e, L);
    Qr(e, se ? "executed" : "sync", L), z();
    const Ie = Ee ? Ee.apply(this, arguments) : void 0;
    return Sa(e), Ie;
  };
  e.onExecuted = Wn;
  const Kt = e.onConnectionsChange, cn = function(L, se) {
    const Ie = yp(e, L, se, Pf), Ce = yp(e, L, se, xi), Ge = arguments, Ue = Kt ? Kt.apply(this, Ge) : void 0, lt = () => {
      I.destroyed || (Ce && Gk(e), Ie && Qr(e, "connection-change"), Sa(e), z());
    };
    return lt(), queueMicrotask(lt), Ue;
  };
  e.onConnectionsChange = cn;
  const Dr = function() {
    const L = p ? p.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, z(), L;
  };
  e.onResize = Dr;
  const Lr = function() {
    return eo(), ju.unregister(this), Re ? Re.apply(this, arguments) : void 0;
  };
  e.onRemoved = Lr;
  const eo = () => {
    var L, se, Ie, Ce, Ge, Ue, lt, _n, Xt;
    I.destroyed = !0, (L = Zt == null ? void 0 : Zt.disconnect) == null || L.call(Zt), o ? Pe() : Te(), S.removeEventListener("lostpointercapture", $), Fe(), F(), window.removeEventListener("keydown", ee, !0), (Ie = (se = e.__panoStateFlushers) == null ? void 0 : se.delete) == null || Ie.call(se, kt), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Ce = E == null ? void 0 : E.destroy) == null || Ce.call(E), (Ge = pt == null ? void 0 : pt.unmount) == null || Ge.call(pt), G && (G.playback.dispose(), G.video.remove(), e.__panoSurfacePlayback === G && (e.__panoSurfacePlayback = null)), O.dispose(), e.__panoSurfaceScene = null, (lt = (Ue = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Ue.dispose) == null || lt.call(Ue), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, fe(), be.dispose(), ot && clearTimeout(ot), ot = null, $f.disposeOwner(e), Ro(e), I.raf && cancelAnimationFrame(I.raf), I.raf = 0, ((_n = e.__panoCutoutNodeSurface) == null ? void 0 : _n.session) === E && (e.__panoCutoutNodeSurface = null), ((Xt = e.__panoStickersNodeSurface) == null ? void 0 : Xt.session) === E && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Dr && (e.onResize = p), e.onExecuted === Wn && (e.onExecuted = Ee), e.onConnectionsChange === cn && (e.onConnectionsChange = Kt), ke && (xe == null ? void 0 : xe.callback) === ke && (xe.callback = Me), ke && (xe == null ? void 0 : xe.__panoPreviewPatchedCb) === ke && delete xe.__panoPreviewPatchedCb, Ae && (le == null ? void 0 : le.callback) === Ae && (le.callback = $e), Ae && (le == null ? void 0 : le.__panoPreviewPatchedCb) === Ae && delete le.__panoPreviewPatchedCb, e.onDragOver === rn && (e.onDragOver = nt), e.onDragDrop === vt && (e.onDragDrop = We), e.onRemoved === Lr && (e.onRemoved = Re);
  };
  e.__panoDomRestore = eo, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = E && ut && !o ? { session: E, model: R } : null, e.__panoStickersNodeSurface = E && ut && o ? { session: E, model: R } : null, e.__panoDomPreview = {
    widget: Y,
    root: x,
    canvas: S,
    requestDraw: z,
    state: I,
    emptyHintEl: _,
    nodeSurface: e.__panoCutoutNodeSurface
  }, ju.register(e), e.graph && Qr(e, "attach"), z();
}
function Hp(e, t = {}) {
  L0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Gp(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (D0(e) && !n) {
    Vf(e);
    return;
  }
  L0(e).attach(t);
}
function mM(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function gM(e, t = 1, n = pp) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), f = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, v = Number(n), g = Number.isFinite(v) && v > 0 ? v : pp, w = Math.max(f, d), x = w > 0 ? Math.min(1, g / w) : 1;
  return {
    width: Math.max(1, Math.round(f * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function yM({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var P;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let c = !1, f = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, v = () => {
    const S = d();
    return S === f || (f = S, o(S)), S;
  }, g = () => v();
  return (P = t == null ? void 0 : t.addEventListener) == null || P.call(t, "fullscreenchange", g), v(), { toggle: async () => {
    var S;
    if (c || !e || !t) return !1;
    if (d()) {
      try {
        await ((S = t.exitFullscreen) == null ? void 0 : S.call(t));
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
    var S, _, F;
    if (!c) {
      if (c = !0, (S = t == null ? void 0 : t.removeEventListener) == null || S.call(t, "fullscreenchange", g), d())
        try {
          const D = (_ = t.exitFullscreen) == null ? void 0 : _.call(t);
          (F = D == null ? void 0 : D.catch) == null || F.call(D, () => {
          });
        } catch {
        }
      f = !1, o(!1);
    }
  } };
}
const bM = { class: "pano-preview-node-surface" }, vM = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ie(), ce("div", bM, [
      De(an, {
        icon: e.model.fullscreen ? Je(Ne).fullscreen_close : Je(Ne).fullscreen,
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
      e.model.viewUnavailable ? (ie(), Tr(Of, { key: 0 })) : st("", !0)
    ]));
  }
}, Ms = 140, _M = 180, Kp = 40, Qc = 10;
function Bp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Up(e, t) {
  const n = Bp(e), r = Bp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Wp(e) {
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
  return typeof ((a = jt) == null ? void 0 : a.apiURL) == "function" ? jt.apiURL(o) : o;
}
function $o(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return $o(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Wp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = $o(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Wp(e);
}
function H0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function wM(e) {
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
function Ku(e) {
  var o;
  const t = (o = Ar) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Up(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (Up(a, n)) return t[a];
  return null;
}
function xM(e) {
  var r, o;
  const t = Ku(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const f = $o(c);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function SM(e, t = "erp_image") {
  var P, S, _, F, D, Y, I;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((z) => String((z == null ? void 0 : z.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((z, O) => String((z == null ? void 0 : z.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(O))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (_ = (S = (P = Ar) == null ? void 0 : P.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : _.call(S, a), f = Ku(a), d = Ku(e == null ? void 0 : e.id), v = [
    (F = d == null ? void 0 : d.ui) == null ? void 0 : F.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    f == null ? void 0 : f.images,
    (D = f == null ? void 0 : f.ui) == null ? void 0 : D.pano_input_images,
    f == null ? void 0 : f.pano_input_images
  ];
  for (const z of v)
    if (Array.isArray(z))
      for (const O of z) {
        const R = $o(O);
        if (R) return R;
      }
  let g = [];
  try {
    g = typeof ((Y = Ar) == null ? void 0 : Y.getNodeImageUrls) == "function" ? Ar.getNodeImageUrls(c) || [] : [];
  } catch {
    g = [];
  }
  if (Array.isArray(g) && g.length > 0)
    for (const z of g) {
      const O = $o(z);
      if (O) return O;
    }
  if (c) {
    const z = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const O of z) {
      const R = $o(O);
      if (R) return R;
    }
  }
  const w = (I = c == null ? void 0 : c.widgets) == null ? void 0 : I.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image"), x = String((w == null ? void 0 : w.value) || "").trim();
  return x ? jt.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function eu(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Yp(e, t, n, r, o, a, c) {
  var v, g, w;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !H0(a) || n <= 1 || r <= 1) {
    eu(t, n, r);
    return;
  }
  if (c.failed) {
    eu(t, n, r);
    return;
  }
  const f = Number(((w = (g = (v = e == null ? void 0 : e.widgets) == null ? void 0 : v.find) == null ? void 0 : g.call(v, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : w.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: pl(o, n, r),
    background: { media: a, revision: wM(a), coverage: f },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : eu(t, n, r);
}
function Xp(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class kM {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Qg(() => this.requestDraw()), this.controller = gf({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ut(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: q(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: q(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
      if (this.widget = bl(Ru(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Ms, Number(a.minHeight || 0)),
            minWidth: Math.max(_M, Number(a.minWidth || 0))
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
      return Df(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Uo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = yM({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, d;
          return (d = (f = this.options).onOpen) == null ? void 0 : d.call(f, this.node);
        }
      }), this.surfaceApp = ff(vM, {
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = fg(n), t.addEventListener("pointerdown", (a) => {
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
      mM(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !H0(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return Xp(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, v, g, w, x, P;
      const a = Yk(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !Xp(a.x, a.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const f = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((v = t.view) == null ? void 0 : v.fov) || 100), f && ((g = this.setDirtyCanvas) == null || g.call(this, !0, !1)), (w = n == null ? void 0 : n.preventDefault) == null || w.call(n), (x = n == null ? void 0 : n.stopPropagation) == null || x.call(n), (P = n == null ? void 0 : n.stopImmediatePropagation) == null || P.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, c;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - Qc * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - Kp - Qc);
    return { x: Qc, y: Kp, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), Yp(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Zg : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = gM(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = xM(this.node);
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
    const n = SM(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), Yp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, f, d, v, g, w, x, P, S, _, F, D;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (v = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || v.call(d), this.surfaceApp = null, (w = (g = this.surfaceHost) == null ? void 0 : g.remove) == null || w.call(g), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (P = this.root) == null ? void 0 : P.remove) == null || S.call(P);
    } catch {
    }
    try {
      F0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((D = (F = (_ = this.node) == null ? void 0 : _.widgets) == null ? void 0 : F.find) == null ? void 0 : D.call(F, (Y) => (Y == null ? void 0 : Y.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function MM(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new kM(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function G0(e, t, n) {
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
function jf(e) {
  return !!(e != null && e.prototype);
}
function ja(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function NM(e, t = {}) {
  jf(e) || MM(e, {
    ...t,
    onOpen: ja(e, t.onOpen)
  });
}
function PM(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!jf(e)) {
    Gp(e, {
      ...r,
      onOpen: ja(e, t.onOpen)
    });
    return;
  }
  G0(e, "stickers_node_preview", (o) => {
    Gp(o, {
      ...r,
      onOpen: ja(o, t.onOpen)
    });
  });
}
function AM(e, t = {}) {
  if (!jf(e)) {
    Hp(e, {
      ...t,
      onOpen: ja(e, t.onOpen)
    });
    return;
  }
  G0(e, "cutout_preview", (n) => {
    Hp(n, {
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
function qp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function CM(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function f(v) {
    if (r.splice(0, r.length), o = -1, !v || typeof v != "object" || !Array.isArray(v.entries) || (v.entries.forEach((w) => {
      r.push(String(w || ""));
    }), !r.length)) return;
    const g = Number(v.index);
    Number.isInteger(g) ? g === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, g)) : o = r.length - 1;
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
      const v = r.length, g = Math.max(0, v - c), w = o >= 0 ? Math.max(0, Math.min(o, g)) : g, x = r.slice(w, w + c), P = o < 0 ? -1 : Math.max(-1, Math.min(x.length - 1, o - w));
      return {
        version: 1,
        entries: x,
        index: P
      };
    },
    hydrate: f
  };
}
function vo(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function IM(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function EM({
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
  const v = e.primaryTool === "paint" || e.primaryTool === "mask", g = {
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
    historyEntries: Array.from({ length: 8 }, (O, R) => ({ index: R, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!v) return g;
  const w = ((I = t.find((O) => o(e.paintColor, O.color))) == null ? void 0 : I.id) || "", x = !w, P = a(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number(((z = e.customPaintColor) == null ? void 0 : z.a) ?? 1))) * 100), _ = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), F = e.brushSizes[_] ?? 10, D = d(), Y = Array.from({ length: 8 }, (O, R) => e.customPaintHistory[R] || null);
  return {
    ...g,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: w,
    customColorActive: x,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...c(P.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, P.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, P.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, P.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, P.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, P.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, P.h)) * 100}%`,
    alphaValue: S,
    alphaText: `${S}%`,
    historyEntries: Y.map((O, R) => ({
      index: R,
      color: O ? { cssColor: r(O, 1) } : null
    })),
    sizeValue: F,
    sizeText: String(F),
    sizeFill: `${Math.max(0, Math.min(100, (F - 1) / 119 * 100))}%`,
    sizeDisabled: D,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function OM({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function FM({
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
    uiSettings: t ? null : v,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function TM({
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
  isExternalSticker: g,
  isStickerHidden: w,
  canRestoreSelectedToInitial: x,
  iconSet: P
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let S = [];
  if (n.length > 1)
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: P.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: P.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? P.lock_open : P.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: P.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: P.send_back, disabled: !!f },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? P.lock_open : P.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!f }
    ];
  else if (e === "stickers" || r === "image") {
    if (S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: P.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: P.send_back, disabled: !!f }
    ], g(t) || (S.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: P.duplicate }), S.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: P.replace_image })), g(t)) {
      const R = x(), G = w(t);
      S.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: R ? "Back to initial position" : "Already at initial position",
        icon: P.back_initial,
        disabled: !R
      }), S.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: G ? "Show" : "Hide",
        tip: G ? "Show input image" : "Hide input image",
        icon: G ? P.eye : P.eye_dashed
      });
    }
    S.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? P.lock_open : P.lock_closed }), g(t) || S.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!f });
  } else
    S = [
      {
        key: "aspect",
        kind: "aspect",
        icon: P.aspect,
        open: !!v,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((R) => ({ value: R, label: R, active: d === R }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: P.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? P.lock_open : P.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: P.delete, disabled: !!f }
    ];
  const _ = o.corners.map((R) => ({ x: Number(R == null ? void 0 : R.x), y: Number(R == null ? void 0 : R.y) })).filter((R) => Number.isFinite(R.x) && Number.isFinite(R.y));
  if (!_.length) return { visible: !1, left: 0, top: 0, items: [] };
  const F = _.map((R) => R.x), D = _.map((R) => R.y), Y = Math.min(...F), I = Math.max(...F), z = Math.min(...D), O = Math.max(...D);
  return {
    visible: !0,
    left: (Y + I) * 0.5,
    top: O + 18,
    items: S,
    anchor: { minX: Y, maxX: I, minY: z, maxY: O }
  };
}
const DM = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function LM(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: c, playing: f, label: d, audio: v = null, fpsLocked: g = !1 }) {
  const w = (S, _, F, D, Y) => {
    const I = (z) => (r == null ? void 0 : r.owner) === S && r.lane === z ? r.frames.map((O) => O + Y) : [];
    return {
      id: S,
      label: F,
      clip: D,
      selected: S === o,
      open: c.has(S),
      keyed: dx(_, t - Y),
      keys: fx(_).map((z) => ({ frame: z.frame + Y, full: z.full })),
      selectedFrames: I(null),
      lanes: Qi(_).map((z) => ({
        key: `${S}:${z}`,
        lane: z,
        label: DM[z],
        frames: _[z].keyframes.map((O) => O.frame + Y),
        selectedFrames: I(z)
      }))
    };
  }, x = e.stickers.filter((S) => S.placement === "sky").sort((S, _) => _.z_index - S.z_index), P = e.stickers.filter((S) => S.placement === "world");
  return {
    visible: !0,
    expanded: a,
    playing: f,
    hasAudio: !!v,
    muted: !!(v != null && v.muted),
    frame: t,
    span: n,
    label: d,
    fps: e.timeline.fps,
    fpsLocked: g,
    length: e.timeline.length,
    rows: [
      w("camera", e.camera, "Camera", null, 0),
      ...[...x, ...P].map((S) => {
        const { start: _, in: F, duration: D } = S.clip;
        return w(S.id, S, Gg(S), { start: _, end: D === null ? null : _ + D }, _ - F);
      })
    ]
  };
}
function RM(e, t, n, r) {
  const o = mx(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const $M = { class: "pano-floating-right" }, VM = ["data-settled"], zM = ["data-ready", "data-settled"], jM = ["aria-label", "data-tip"], HM = {
  key: 1,
  class: "pano-camera-preview-label"
}, GM = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce(Be, null, [
      K("div", $M, [
        (ie(!0), ce(Be, null, St(e.buttons, (r) => (ie(), Tr(an, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      vi(K("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        K("div", {
          class: it(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: xt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = K("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            K("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (ie(), ce("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            De(Ot, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, jM)) : st("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ie(), ce("div", HM, tt(e.preview.label || "Preview unavailable"), 1)) : st("", !0)
        ], 14, zM)
      ], 8, VM), [
        [Wo, e.preview.visible]
      ])
    ], 64));
  }
}, KM = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, BM = ["y2", "transform"], UM = ["transform"], WM = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = ct(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => vi((ie(), ce("div", {
      class: it(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ie(), ce("svg", KM, [
        a[1] || (a[1] = K("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ie(!0), ce(Be, null, St(Je(n), (c) => (ie(), ce("line", {
          key: c,
          class: it(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, BM))), 128)),
        K("g", { transform: r.value }, [...a[0] || (a[0] = [
          K("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, UM),
        a[2] || (a[2] = K("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Wo, e.model.visible === !0]
    ]);
  }
}, YM = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", {
      class: it(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      De(A0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      De(an, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      De(WM, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, XM = ["aria-label"], qM = { class: "pano-canvas-confirm-title" }, JM = { class: "pano-canvas-confirm-text" }, ZM = { class: "pano-canvas-confirm-actions" }, QM = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, eN = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Ht(null), r = /* @__PURE__ */ Ht(null);
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
      const P = x.querySelector(`[data-action='${w}']`);
      P instanceof HTMLButtonElement && P.click();
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
      const S = a()[0] || w;
      (_ = S == null ? void 0 : S.focus) == null || _.call(S);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function v(w) {
      var D;
      if (w.defaultPrevented) return;
      if (w.key === "Escape") {
        w.preventDefault(), w.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (w.key !== "Tab") return;
      const x = a(), P = r.value;
      if (!x.length) {
        w.preventDefault(), (D = P == null ? void 0 : P.focus) == null || D.call(P);
        return;
      }
      const S = x[0], _ = x[x.length - 1], F = document.activeElement;
      if (w.shiftKey) {
        (F === S || F === P || !(P != null && P.contains(F))) && (w.preventDefault(), _.focus());
        return;
      }
      (F === _ || !(P != null && P.contains(F))) && (w.preventDefault(), S.focus());
    }
    function g(w) {
      w.target === n.value && c("confirm-cancel");
    }
    return Ki(() => t.model.visible, (w, x) => {
      if (w) {
        o = document.activeElement, El(() => {
          f();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), Ka(() => {
      d();
    }), (w, x) => e.model.visible === !0 ? (ie(), ce("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Et(g, ["self"])
    }, [
      K("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: v
      }, [
        K("div", qM, tt(e.model.title), 1),
        K("div", JM, tt(e.model.text), 1),
        K("div", ZM, [
          x[0] || (x[0] = K("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          K("button", QM, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, XM)
    ], 512)) : st("", !0);
  }
}, tN = ["data-paint-pane"], nN = ["hidden"], rN = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], iN = ["aria-pressed", "disabled"], oN = ["hidden"], aN = { class: "pano-paint-color-pop-head" }, sN = { class: "pano-paint-color-field" }, lN = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, cN = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, uN = { class: "pano-paint-color-field" }, fN = { class: "pano-paint-alpha-wrap" }, dN = ["value"], hN = { "data-paint-alpha-value": "" }, pN = ["hidden"], mN = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, gN = ["data-paint-history-index", "aria-label", "disabled"], yN = ["data-paint-footer"], bN = ["data-paint-group"], vN = ["hidden"], _N = ["value", "disabled"], wN = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, xN = ["hidden"], SN = {
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
    return (r, o) => (ie(), ce("div", {
      class: it(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ie(!0), ce(Be, null, St(e.panes, (a) => {
        var c;
        return ie(), ce("div", {
          key: a.key,
          class: it(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ie(), ce("div", {
            key: 0,
            class: it(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ie(!0), ce(Be, null, St(e.paintSwatches, (f) => (ie(), ce("button", {
              key: f.id,
              class: it(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: xt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, rN))), 128)),
            K("button", {
              class: it(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: xt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, iN),
            K("div", {
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
              K("div", aN, [
                K("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: xt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = K("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              K("div", sN, [
                K("div", lN, [
                  K("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: xt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                K("div", cN, [
                  K("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: xt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              K("label", uN, [
                o[1] || (o[1] = K("span", null, "Opacity", -1)),
                K("div", fN, [
                  K("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, dN),
                  K("span", hN, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              K("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                K("div", mN, [
                  (ie(!0), ce(Be, null, St(e.state.historyEntries || [], (f) => (ie(), ce("button", {
                    key: f.index,
                    class: it(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: xt(n(f.color))
                  }, null, 14, gN))), 128))
                ])
              ], 8, pN)
            ], 12, oN)
          ], 10, nN)) : st("", !0),
          K("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            K("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (ie(!0), ce(Be, null, St(a.tools, (f) => {
                var d;
                return ie(), Tr(an, {
                  key: `${a.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, bN),
            K("div", {
              class: it(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              K("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: xt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, _N),
              K("span", wN, tt(e.state.sizeText || "10"), 1)
            ], 10, vN),
            K("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              De(an, {
                icon: Je(Ne).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, xN)
          ], 8, yN)
        ], 10, tN);
      }), 128))
    ], 2));
  }
}, kN = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Ht(null), r = /* @__PURE__ */ Ht(null), o = /* @__PURE__ */ Ht(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, f) => (ie(), ce(Be, null, [
      K("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      K("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        K("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, MN = {
  key: 0,
  class: "pano-cutout-menu"
}, NN = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, PN = ["data-aspect"], AN = ["data-action", "aria-label", "data-tip", "disabled"], CN = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: xt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ie(!0), ce(Be, null, St(e.model.items || [], (r) => (ie(), ce(Be, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ie(), ce("div", MN, [
          K("button", NN, [
            De(Ot, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          K("div", {
            class: it(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ie(!0), ce(Be, null, St(r.choices || [], (o) => (ie(), ce("button", {
              key: o.value,
              class: it(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, tt(o.label), 11, PN))), 128))
          ], 2)
        ])) : (ie(), ce("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          De(Ot, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, AN))
      ], 64))), 128))
    ], 4));
  }
}, IN = {
  key: 0,
  class: "pano-easing"
}, EN = { class: "pano-section-title" }, ON = { class: "pano-easing-range" }, FN = { class: "pano-easing-modes" }, TN = ["aria-pressed", "onClick"], DN = ["viewBox"], LN = ["x", "y"], RN = ["x1", "y1", "x2", "y2"], $N = ["d"], VN = ["x1", "y1", "x2", "y2"], zN = ["x1", "y1", "x2", "y2"], jN = ["cx", "cy"], HN = ["cx", "cy"], GN = { class: "pano-easing-note" }, Br = 132, Fi = 14, KN = {
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
    ], a = /* @__PURE__ */ Ht(null), c = ct(() => {
      var S;
      return Array.isArray((S = n.model) == null ? void 0 : S.easing) ? n.model.easing : null;
    }), f = (S) => Fi + S * Br, d = (S) => Fi + (1 - S) * Br, v = ct(() => {
      var Y;
      if (((Y = n.model) == null ? void 0 : Y.easing) === "hold") return `M${f(0)} ${d(0)} H${f(1)} V${d(1)}`;
      const [S, _, F, D] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${f(0)} ${d(0)} C${f(S)} ${d(_)} ${f(F)} ${d(D)} ${f(1)} ${d(1)}`;
    }), g = ct(() => c.value ? c.value.map((S) => S.toFixed(2)).join(", ") : "");
    function w(S) {
      var _;
      return JSON.stringify(S.easing) === JSON.stringify((_ = n.model) == null ? void 0 : _.easing);
    }
    function x(S, _) {
      r("timeline", { type: "easing", easing: S, commit: _ });
    }
    function P(S, _) {
      var z;
      if (S.button !== 0 || !c.value) return;
      const F = S.currentTarget;
      (z = F.setPointerCapture) == null || z.call(F, S.pointerId);
      let D = null;
      const Y = (O) => {
        const R = a.value.getBoundingClientRect(), G = R.width / (Br + Fi * 2), Z = ((O.clientX - R.left) / G - Fi) / Br, _e = 1 - ((O.clientY - R.top) / G - Fi) / Br;
        D = [...D || c.value], D[_] = Math.round(Math.min(1, Math.max(0, Z)) * 100) / 100, D[_ + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, x(D, !1);
      }, I = () => {
        F.removeEventListener("pointermove", Y), F.removeEventListener("pointerup", I), F.removeEventListener("pointercancel", I), D && x(D, !0);
      };
      F.addEventListener("pointermove", Y), F.addEventListener("pointerup", I), F.addEventListener("pointercancel", I);
    }
    return (S, _) => e.model ? (ie(), ce("div", IN, [
      K("div", EN, [
        _[2] || (_[2] = K("span", null, "Easing", -1)),
        K("span", ON, tt(e.model.label), 1)
      ]),
      K("div", FN, [
        (ie(), ce(Be, null, St(o, (F) => K("button", {
          key: F.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": w(F) ? "true" : "false",
          onClick: (D) => x(F.easing, !0)
        }, tt(F.label), 9, TN)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ie(), ce("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Br + Fi * 2} ${Br + Fi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        K("rect", {
          class: "pano-easing-square",
          x: f(0),
          y: d(1),
          width: Br,
          height: Br
        }, null, 8, LN),
        K("line", {
          class: "pano-easing-diagonal",
          x1: f(0),
          y1: d(0),
          x2: f(1),
          y2: d(1)
        }, null, 8, RN),
        K("path", {
          class: "pano-easing-curve",
          d: v.value
        }, null, 8, $N),
        c.value ? (ie(), ce(Be, { key: 0 }, [
          K("line", {
            class: "pano-easing-arm",
            x1: f(0),
            y1: d(0),
            x2: f(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, VN),
          K("line", {
            class: "pano-easing-arm",
            x1: f(1),
            y1: d(1),
            x2: f(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, zN),
          K("circle", {
            class: "pano-easing-handle",
            cx: f(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: _[0] || (_[0] = (F) => P(F, 0))
          }, null, 40, jN),
          K("circle", {
            class: "pano-easing-handle",
            cx: f(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: _[1] || (_[1] = (F) => P(F, 2))
          }, null, 40, HN)
        ], 64)) : st("", !0)
      ], 8, DN)) : st("", !0),
      K("div", GN, [
        e.model.mixed ? (ie(), ce(Be, { key: 0 }, [
          ba("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ie(), ce(Be, { key: 1 }, [
          ba("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ie(), ce(Be, { key: 2 }, [
          ba("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ie(), ce(Be, { key: 3 }, [
          ba("cubic-bezier(" + tt(g.value) + ")", 1)
        ], 64)) : st("", !0)
      ])
    ])) : st("", !0);
  }
}, BN = {
  class: "pano-side",
  "data-side": ""
}, UN = { class: "pano-side-head" }, WN = { class: "pano-side-title" }, YN = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, XN = {
  key: 0,
  class: "pano-side-scroll"
}, qN = { class: "pano-inspector" }, JN = { class: "pano-ui-row pano-coverage-row" }, ZN = ["data-selected"], QN = ["aria-pressed", "disabled"], eP = ["aria-pressed", "disabled"], tP = {
  key: 0,
  class: "pano-section-title"
}, nP = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, rP = {
  class: "pano-picker",
  "data-picker": "selection"
}, iP = ["disabled"], oP = { class: "pano-picker-label" }, aP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, sP = ["hidden"], lP = ["data-selection-id"], cP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, uP = {
  key: 2,
  class: "pano-state-actions"
}, fP = ["disabled"], dP = ["data-key"], hP = ["min", "max", "step", "value", "disabled", "data-param-key"], pP = ["min", "max", "step", "value", "disabled", "data-param-key"], mP = { class: "pano-visibility-section" }, gP = { class: "pano-visibility-stack" }, yP = ["data-visibility-row"], bP = { class: "pano-visibility-name" }, vP = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, _P = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], wP = ["open"], xP = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, SP = { class: "pano-ui-settings-body" }, kP = { class: "pano-ui-row" }, MP = ["data-selected"], NP = ["aria-pressed"], PP = ["aria-pressed"], AP = { class: "pano-ui-row" }, CP = ["data-selected"], IP = ["aria-pressed"], EP = ["aria-pressed"], OP = {
  key: 1,
  class: "pano-side-footer"
}, FP = ["data-action"], TP = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = ct(() => {
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
      var v, g, w, x, P;
      return ie(), ce("div", BN, [
        K("div", UN, [
          K("div", WN, [
            K("span", YN, [
              De(Ot, {
                icon: Je(Ne).globe
              }, null, 8, ["icon"])
            ]),
            K("span", null, tt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = K("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = K("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ie(), ce("div", XN, [
          K("div", qN, [
            d[11] || (d[11] = K("div", { class: "pano-section-title" }, [
              K("span", null, "Scene")
            ], -1)),
            K("div", JN, [
              d[2] || (d[2] = K("label", null, "Coverage", -1)),
              K("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "1" : "0"
              }, [
                K("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((g = e.model.coverage) == null ? void 0 : g.value) === 360 ? "true" : "false",
                  disabled: ((w = e.model.coverage) == null ? void 0 : w.disabled) === !0
                }, "360", 8, QN),
                K("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 180 ? "true" : "false",
                  disabled: ((P = e.model.coverage) == null ? void 0 : P.disabled) === !0
                }, "180", 8, eP)
              ], 8, ZN)
            ]),
            e.model.transformTitle !== !1 ? (ie(), ce("div", tP, [...d[3] || (d[3] = [
              K("span", null, "Transform", -1)
            ])])) : st("", !0),
            e.model.selectionPicker ? (ie(), ce("div", nP, [
              K("label", null, tt(e.model.selectionPicker.label), 1),
              K("div", rP, [
                K("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  K("span", oP, [
                    e.model.selectionPicker.currentIcon ? (ie(), ce("span", aP, [
                      De(Ot, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : st("", !0),
                    K("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = K("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, iP),
                K("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ie(!0), ce(Be, null, St(e.model.selectionPicker.items || [], (S) => (ie(), ce("button", {
                    key: S.id,
                    type: "button",
                    class: it(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (ie(), ce("span", cP, [
                      De(Ot, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : st("", !0),
                    K("span", null, tt(S.label), 1)
                  ], 10, lP))), 128))
                ], 8, sP)
              ])
            ])) : st("", !0),
            e.model.copyStateButton ? (ie(), ce("div", uP, [
              K("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                De(Ot, {
                  icon: Je(Ne).copy
                }, null, 8, ["icon"]),
                K("span", null, tt(e.model.copyStateButton.label), 1)
              ], 8, fP)
            ])) : st("", !0),
            K("div", {
              class: it(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ie(!0), ce(Be, { key: 0 }, St(e.model.notes, (S) => (ie(), ce("div", {
                key: S,
                class: "pano-param-note"
              }, tt(S), 1))), 128)) : (ie(!0), ce(Be, { key: 1 }, St(e.model.params || [], (S) => (ie(), ce("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                K("label", null, tt(S.label), 1),
                K("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: c(S, e.model),
                  style: xt(a(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, hP),
                K("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: c(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, pP)
              ], 8, dP))), 128))
            ], 2),
            De(KN, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (S) => r("timeline", S))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (ie(), ce(Be, { key: 3 }, [
              d[6] || (d[6] = K("div", { class: "pano-divider" }, null, -1)),
              K("div", mP, [
                d[5] || (d[5] = K("div", { class: "pano-section-title" }, [
                  K("span", null, "Layers")
                ], -1)),
                K("div", gP, [
                  (ie(!0), ce(Be, null, St(e.model.visibilityRows, (S) => (ie(), ce("div", {
                    key: S.key,
                    class: it(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    K("span", bP, [
                      K("span", vP, [
                        De(Ot, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      K("span", null, tt(S.label), 1)
                    ]),
                    K("button", {
                      class: it(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      De(Ot, {
                        icon: S.visible === !0 ? Je(Ne).eye : Je(Ne).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, _P)
                  ], 10, yP))), 128))
                ])
              ])
            ], 64)) : st("", !0),
            e.model.uiSettings ? (ie(), ce("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              K("summary", null, [
                d[7] || (d[7] = K("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                K("span", xP, [
                  De(Ot, {
                    icon: Je(Ne).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              K("div", SP, [
                K("div", kP, [
                  d[8] || (d[8] = K("label", null, "Drag X", -1)),
                  K("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, NP),
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, PP)
                  ], 8, MP)
                ]),
                K("div", AP, [
                  d[9] || (d[9] = K("label", null, "Drag Y", -1)),
                  K("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, IP),
                    K("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, EP)
                  ], 8, CP)
                ]),
                d[10] || (d[10] = K("div", { class: "pano-ui-row" }, [
                  K("span"),
                  K("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, wP)) : st("", !0)
          ])
        ])) : st("", !0),
        (e.model.footerButtons || []).length ? (ie(), ce("div", OP, [
          (ie(!0), ce(Be, null, St(e.model.footerButtons, (S) => (ie(), ce("button", {
            key: S.action,
            class: it(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, tt(S.label), 11, FP))), 128))
        ])) : st("", !0)
      ]);
    };
  }
}, DP = { class: "pano-timeline-bar" }, LP = ["aria-label", "data-tip"], RP = ["aria-label", "data-tip"], $P = { class: "pano-timeline-time" }, VP = ["data-tip"], zP = { key: 0 }, jP = ["value"], HP = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, GP = ["value"], KP = ["aria-expanded"], BP = ["inert"], UP = { class: "pano-timeline-name" }, WP = ["aria-expanded", "aria-label", "onClick"], YP = ["title", "aria-current", "onClick"], XP = ["data-keyed", "aria-label", "onClick"], qP = ["onPointerdown"], JP = ["onPointerdown"], ZP = ["onPointerdown"], QP = ["onPointerdown"], e2 = ["aria-label", "data-tip", "onPointerdown"], t2 = { key: 0 }, n2 = ["onPointerdown"], r2 = ["aria-label", "data-tip", "onPointerdown"], i2 = { key: 0 }, o2 = 10, a2 = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Ht(null), c = /* @__PURE__ */ Ht(null), f = /* @__PURE__ */ Ht(1), d = /* @__PURE__ */ Ht(0), v = /* @__PURE__ */ Ht(!1);
    let g = null, w = null, x = null;
    Fl(() => {
      g = new ResizeObserver(([U]) => {
        f.value = Math.max(1, U.contentRect.width);
      }), a.value && g.observe(a.value), w = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), c.value && w.observe(c.value);
    }), Ka(() => {
      g == null || g.disconnect(), w == null || w.disconnect(), x == null || x();
    });
    const P = ct(() => Math.max(1, Number(n.model.span || 1))), S = ct(() => f.value / P.value), _ = (U) => `${U / P.value * 100}%`, F = ct(() => {
      const U = o.find((j) => j * S.value >= 56) || o[o.length - 1], X = [];
      for (let j = 0; j < P.value; j += U) X.push(j);
      return X;
    });
    function D(U) {
      const X = a.value.getBoundingClientRect(), j = Math.floor((U - X.left) / Math.max(1, X.width) * P.value);
      return Math.min(P.value - 1, Math.max(0, j));
    }
    function Y(U, X, j) {
      const M = Math.ceil(o2 / Math.max(1e-6, S.value)), Q = new Map(X.map((W) => [W.frame, W.full]));
      return _x(X.map((W) => W.frame), M).map((W, Pe) => ({
        ...W,
        key: `${U}:${Pe}`,
        partial: W.frames.some((Te) => !Q.get(Te)),
        selected: W.frames.some((Te) => j.includes(Te))
      }));
    }
    function I(U) {
      return Y(U.id, U.keys, U.selectedFrames);
    }
    function z(U) {
      return Y(U.key, U.frames.map((X) => ({ frame: X, full: !0 })), U.selectedFrames);
    }
    function O(U) {
      const X = U.end === null ? P.value : U.end;
      return { left: _(U.start), width: _(Math.max(0, X - U.start)) };
    }
    function R(U, X) {
      const j = U.clientX, M = Math.max(1e-6, S.value);
      let Q = 0;
      X("start", 0, U);
      const W = (Te) => {
        if (Te.pointerId !== U.pointerId) return;
        const kt = Math.round((Te.clientX - j) / M);
        kt !== Q && (Q = kt, X("move", Q, Te));
      }, Pe = (Te) => {
        Te.pointerId === U.pointerId && (x(), X("end", Q, Te));
      };
      x == null || x(), x = () => {
        window.removeEventListener("pointermove", W), window.removeEventListener("pointerup", Pe), window.removeEventListener("pointercancel", Pe), x = null;
      }, window.addEventListener("pointermove", W), window.addEventListener("pointerup", Pe), window.addEventListener("pointercancel", Pe);
    }
    function G(U) {
      U.button === 0 && R(U, (X, j, M) => r("action", { type: "seek", frame: D(M.clientX), phase: X }));
    }
    function Z(U, X, j) {
      U.button === 0 && (r("action", { type: "select-row", id: X.id }), R(U, (M, Q) => r("action", { type: "clip", id: X.id, mode: j, delta: Q, phase: M })));
    }
    function _e(U, X, j, M, Q) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: j, frames: M.frames, additive: !0 });
          return;
        }
        M.frames.every((W) => Q.includes(W)) || r("action", { type: "select-keys", owner: X.id, lane: j, frames: M.frames, additive: !1 }), R(U, (W, Pe) => r("action", { type: "move-keys", delta: Pe, phase: W }));
      }
    }
    const T = ct(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function E(U, X, j) {
      r("action", X), await El(), U.target.value = j();
    }
    function ue(U) {
      E(U, { type: "fps", fps: Number(U.target.value) }, () => T.value);
    }
    function fe(U) {
      const X = U.target.value.trim();
      E(U, { type: "length", length: X ? Number(X) : null }, () => n.model.length ?? "");
    }
    function de(U, X, j) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: j, frames: [], additive: !1 });
    }
    return (U, X) => vi((ie(), ce("section", {
      class: it(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      K("div", DP, [
        K("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (j) => r("action", { type: "play" }))
        }, [
          De(Ot, {
            icon: e.model.playing ? Je(Ne).pause : Je(Ne).play
          }, null, 8, ["icon"])
        ], 8, LP),
        e.model.hasAudio ? (ie(), ce("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (j) => r("action", { type: "mute" }))
        }, [
          De(Ot, {
            icon: e.model.muted ? Je(Ne).volume_muted : Je(Ne).volume2
          }, null, 8, ["icon"])
        ], 8, RP)) : st("", !0),
        K("span", $P, tt(e.model.label), 1),
        K("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (ie(), ce("span", zP, tt(T.value), 1)) : (ie(), ce("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: T.value,
            "aria-label": "Timeline fps",
            onChange: ue
          }, null, 40, jP)),
          X[6] || (X[6] = K("span", null, "fps", -1))
        ], 8, VP),
        K("label", HP, [
          X[7] || (X[7] = K("span", null, "Length", -1)),
          K("input", {
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: fe
          }, null, 40, GP)
        ]),
        K("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (j) => r("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = K("span", null, "Timeline", -1)),
          De(Ot, {
            icon: Je(Ne).chevron
          }, null, 8, ["icon"])
        ], 8, KP)
      ]),
      K("div", {
        class: it(["pano-timeline-body", { open: e.model.expanded, sliding: v.value }]),
        style: xt({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = Et((j) => v.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = Et((j) => v.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = Et((j) => v.value = !1, ["self"]))
      }, [
        K("div", {
          ref_key: "gridRef",
          ref: c,
          class: "pano-timeline-grid"
        }, [
          X[9] || (X[9] = K("div", { class: "pano-timeline-corner" }, null, -1)),
          K("div", {
            ref_key: "rulerRef",
            ref: a,
            class: "pano-timeline-ruler",
            onPointerdown: G
          }, [
            (ie(!0), ce(Be, null, St(F.value, (j) => (ie(), ce("span", {
              key: j,
              class: "pano-timeline-tick",
              style: xt({ left: _(j) })
            }, tt(j), 5))), 128)),
            K("span", {
              class: "pano-timeline-playhead",
              style: xt({ left: _(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (ie(!0), ce(Be, null, St(e.model.rows || [], (j) => (ie(), ce(Be, {
            key: j.id
          }, [
            K("div", {
              class: it(["pano-timeline-head", { selected: j.selected }])
            }, [
              K("div", UP, [
                K("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": j.open ? "true" : "false",
                  "aria-label": j.open ? `Hide ${j.label} parameters` : `Show ${j.label} parameters`,
                  onClick: Et((M) => r("action", { type: "toggle-row", id: j.id }), ["stop"])
                }, [
                  De(Ot, {
                    icon: Je(Ne).chevron
                  }, null, 8, ["icon"])
                ], 8, WP),
                K("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: j.label,
                  "aria-current": j.selected ? "true" : void 0,
                  onClick: (M) => r("action", { type: "select-row", id: j.id })
                }, [
                  De(Ot, {
                    icon: j.clip ? Je(Ne).image : Je(Ne).camera
                  }, null, 8, ["icon"]),
                  K("span", null, tt(j.label), 1)
                ], 8, YP),
                K("button", {
                  class: it(["pano-timeline-key", { keyed: j.keyed }]),
                  type: "button",
                  "data-keyed": j.keyed ? "true" : "false",
                  "aria-label": j.keyed ? `Every ${j.label} parameter has a keyframe here; update them` : `Add keyframes for every ${j.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Et((M) => r("action", { type: "key-row", owner: j.id }), ["stop"])
                }, [
                  De(Ot, {
                    icon: Je(Ne).keyframe
                  }, null, 8, ["icon"])
                ], 10, XP)
              ]),
              j.open ? (ie(!0), ce(Be, { key: 0 }, St(j.lanes, (M) => (ie(), ce("div", {
                key: M.key,
                class: "pano-timeline-lane-head"
              }, tt(M.label), 1))), 128)) : st("", !0)
            ], 2),
            K("div", {
              class: it(["pano-timeline-track", { selected: j.selected }])
            }, [
              K("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (M) => de(M, j, null)
              }, [
                j.clip ? (ie(), ce("div", {
                  key: 0,
                  class: it(["pano-timeline-clip", { open: j.clip.end === null }]),
                  style: xt(O(j.clip)),
                  onPointerdown: Et((M) => Z(M, j, "move"), ["stop"])
                }, [
                  K("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Et((M) => Z(M, j, "start"), ["stop"])
                  }, null, 40, ZP),
                  K("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Et((M) => Z(M, j, "end"), ["stop"])
                  }, null, 40, QP)
                ], 46, JP)) : st("", !0),
                (ie(!0), ce(Be, null, St(I(j), (M) => (ie(), ce("button", {
                  key: M.key,
                  type: "button",
                  class: it(["pano-timeline-pin", { selected: M.selected, cluster: M.frames.length > 1, partial: M.partial }]),
                  style: xt({ left: _(M.frame + 0.5) }),
                  "aria-label": `${j.label}: ${M.frames.length > 1 ? `${M.frames.length} keyframes` : `keyframe at frame ${M.frames[0]}`}`,
                  "data-tip": M.frames.length > 1 ? `${M.frames.length} keyframes` : `Frame ${M.frames[0]}`,
                  onPointerdown: Et((Q) => _e(Q, j, null, M, j.selectedFrames), ["stop"])
                }, [
                  M.frames.length > 1 ? (ie(), ce("span", t2, tt(M.frames.length), 1)) : st("", !0)
                ], 46, e2))), 128))
              ], 40, qP),
              j.open ? (ie(!0), ce(Be, { key: 0 }, St(j.lanes, (M) => (ie(), ce("div", {
                key: M.key,
                class: "pano-timeline-lane",
                onPointerdown: (Q) => de(Q, j, M.lane)
              }, [
                (ie(!0), ce(Be, null, St(z(M), (Q) => (ie(), ce("button", {
                  key: Q.key,
                  type: "button",
                  class: it(["pano-timeline-pin", { selected: Q.selected, cluster: Q.frames.length > 1 }]),
                  style: xt({ left: _(Q.frame + 0.5) }),
                  "aria-label": `${M.label}: ${Q.frames.length > 1 ? `${Q.frames.length} keyframes` : `keyframe at frame ${Q.frames[0]}`}`,
                  "data-tip": Q.frames.length > 1 ? `${Q.frames.length} keyframes` : `Frame ${Q.frames[0]}`,
                  onPointerdown: Et((W) => _e(W, j, M.lane, Q, M.selectedFrames), ["stop"])
                }, [
                  Q.frames.length > 1 ? (ie(), ce("span", i2, tt(Q.frames.length), 1)) : st("", !0)
                ], 46, r2))), 128))
              ], 40, n2))), 128)) : st("", !0),
              K("span", {
                class: "pano-timeline-playhead",
                style: xt({ left: _(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, BP)
    ], 2)), [
      [Wo, e.model.visible]
    ]);
  }
}, s2 = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", {
      class: it(["pano-tooltip", {
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
}, l2 = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, c2 = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", l2, [
      (ie(!0), ce(Be, null, St(e.buttons, (r) => vi((ie(), Tr(an, {
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
        [Wo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, u2 = ["data-video-ready"], f2 = { class: "pano-video-transport-shell" }, d2 = { class: "pano-video-controls-left" }, h2 = { class: "pano-video-filmstrip" }, p2 = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, m2 = ["src", "onLoad"], g2 = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, y2 = ["max", "value", "disabled"], b2 = { class: "pano-video-controls-right" }, v2 = ["data-has-audio"], _2 = { class: "pano-video-volume-pop" }, w2 = ["value", "disabled"], x2 = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ct(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause" : "Play";
    }), r = ct(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause video" : "Play video";
    }), o = ct(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? Ne.pause : Ne.play;
    }), a = ct(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = ct(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = ct(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? Ne.loop_off : Ne.loop;
    }), d = ct(() => {
      var O, R;
      return ((O = t.state) == null ? void 0 : O.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), v = ct(() => {
      var O, R, G;
      return ((O = t.state) == null ? void 0 : O.hasAudio) !== !0 ? Ne.volume : ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((G = t.state) == null ? void 0 : G.volume) ?? 1) <= 0 ? Ne.volume_muted : Ne.volume2;
    }), g = ct(() => {
      var O;
      return Math.max(0, Math.min(100, Number(((O = t.state) == null ? void 0 : O.progressPct) || 0)));
    }), w = ct(() => ({ left: `${g.value}%` })), x = ct(() => {
      var Z, _e;
      const O = (Z = t.state) == null ? void 0 : Z.volumePct, R = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, G = Number(O ?? R ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, G))}%`
      };
    }), P = ct(() => {
      var G, Z;
      const R = [
        String(((G = t.state) == null ? void 0 : G.currentTimeLabel) || "0:00"),
        String(((Z = t.state) == null ? void 0 : Z.durationLabel) || "0:00")
      ].reduce((_e, T) => Math.max(_e, T.length), 4);
      return `${Math.max(4, R)}ch`;
    }), S = ct(() => ({ "--pano-video-time-ch": P.value })), _ = ct(() => {
      var G, Z;
      const O = Array.isArray((G = t.state) == null ? void 0 : G.thumbnails) ? t.state.thumbnails : [];
      if (O.length) return O;
      const R = Math.max(7, Number(((Z = t.state) == null ? void 0 : Z.thumbnailCount) || 9));
      return Array.from({ length: R }, (_e, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), F = /* @__PURE__ */ Ht(/* @__PURE__ */ new Set()), D = (O) => String((O == null ? void 0 : O.id) || (O == null ? void 0 : O.src) || (O == null ? void 0 : O.label) || ""), Y = (O) => F.value.has(D(O)), I = (O) => {
      const R = new Set(F.value);
      R.add(D(O)), F.value = R;
    };
    Ki(_, (O) => {
      const R = new Set(O.map(D)), G = /* @__PURE__ */ new Set();
      for (const Z of F.value)
        R.has(Z) && G.add(Z);
      F.value = G;
    }, { immediate: !0 });
    const z = ct(() => {
      var O;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((O = t.state) == null ? void 0 : O.shellMaxWidthPx) || 640))}px`
      };
    });
    return (O, R) => (ie(), ce("div", {
      class: it(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: xt(z.value)
    }, [
      R[1] || (R[1] = K("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      K("div", f2, [
        K("div", d2, [
          De(an, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          K("div", {
            class: "pano-video-time pano-video-time-start",
            style: xt(S.value)
          }, tt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        K("div", h2, [
          K("div", p2, [
            (ie(!0), ce(Be, null, St(_.value, (G) => (ie(), ce("div", {
              key: D(G),
              class: it(["pano-video-thumb", {
                "is-placeholder": !G.src,
                "is-loaded": G.src && Y(G)
              }])
            }, [
              G.src ? (ie(), ce("img", {
                key: 0,
                src: G.src,
                alt: "",
                draggable: "false",
                onLoad: (Z) => I(G)
              }, null, 40, m2)) : (ie(), ce("span", g2))
            ], 2))), 128))
          ]),
          K("div", {
            class: "pano-video-playhead",
            style: xt(w.value),
            "aria-hidden": "true"
          }, [...R[0] || (R[0] = [
            K("span", { class: "pano-video-playhead-line" }, null, -1),
            K("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          K("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, y2)
        ]),
        K("div", b2, [
          K("div", {
            class: "pano-video-time pano-video-time-end",
            style: xt(S.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          De(an, {
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
          K("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            K("div", _2, [
              K("input", {
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
              }, null, 12, w2)
            ]),
            De(an, {
              "extra-class": "pano-video-control",
              icon: v.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, v2)
        ])
      ])
    ], 14, u2));
  }
}, S2 = { class: "pano-floating-top" }, k2 = ["data-selected", "data-view-count"], M2 = ["data-view", "aria-pressed", "aria-label", "disabled"], N2 = { class: "label" }, P2 = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ie(), ce("div", S2, [
        K("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ie(!0), ce(Be, null, St(e.buttons, (o) => vi((ie(), ce("button", {
            key: o.key,
            class: it(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            De(Ot, {
              icon: o.icon
            }, null, 8, ["icon"]),
            K("span", N2, tt(o.label), 1)
          ], 10, M2)), [
            [Wo, o.visible !== !1]
          ])), 128))
        ], 8, k2)
      ]);
    };
  }
};
function K0(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ne.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ne.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Ne.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ne.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ne.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ne.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ne.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ne.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ne.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ne.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ne.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ne.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ne.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ne.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ne.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ne.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ne.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ne.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ne.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ne.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ne.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ne.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ne.lasso_tool }
        ]
      }
    ]
  };
}
const A2 = ["aria-label"], C2 = { class: "pano-stage-column" }, I2 = { class: "pano-stage-wrap" }, E2 = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, O2 = {
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
    const d = /* @__PURE__ */ Ht(null), v = /* @__PURE__ */ Ht(null), g = /* @__PURE__ */ Ht(null);
    function w() {
      var T, E;
      return ((E = (T = g.value) == null ? void 0 : T.getRefs) == null ? void 0 : E.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(T) {
      var E, ue;
      return ((ue = (E = v.value) == null ? void 0 : E.open) == null ? void 0 : ue.call(E, T)) === !0;
    }
    function P(T) {
      o("image-file-selected", T);
    }
    function S(T) {
      o("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: w, openImagePicker: x });
    const _ = ct(() => r.readOnly === !0), F = ct(() => r.shellPreset || K0(r.type)), D = ct(() => {
      var E, ue, fe;
      const T = String((((E = r.uiState) == null ? void 0 : E.stageStatus) === "failed" ? (ue = r.uiState) == null ? void 0 : ue.stageStatusDetail : (fe = r.uiState) == null ? void 0 : fe.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), Y = ct(() => {
      var E;
      const T = Array.isArray((E = F.value) == null ? void 0 : E.floatingButtons) ? F.value.floatingButtons.slice() : [];
      return _.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ne.fullscreen
      }), T;
    });
    function I() {
      const T = d.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((E) => E instanceof HTMLElement ? !E.hidden && E.tabIndex >= 0 && E.offsetParent !== null : !1) : [];
    }
    function z() {
      var ue;
      const E = I()[0] || d.value;
      (ue = E == null ? void 0 : E.focus) == null || ue.call(E);
    }
    function O() {
      var T;
      f != null && f.isConnected && ((T = f.focus) == null || T.call(f)), f = null;
    }
    function R(T) {
      var E, ue, fe, de;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const U = I();
          if (!U.length) {
            T.preventDefault(), (ue = (E = d.value) == null ? void 0 : E.focus) == null || ue.call(E);
            return;
          }
          const X = U[0], j = U[U.length - 1], M = document.activeElement;
          if (T.shiftKey) {
            (M === X || M === d.value || !((fe = d.value) != null && fe.contains(M))) && (T.preventDefault(), j.focus());
            return;
          }
          (M === j || !((de = d.value) != null && de.contains(M))) && (T.preventDefault(), X.focus());
          return;
        }
        T.key === "Escape" && o("close");
      }
    }
    function G() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function Z() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function _e(T) {
      document.removeEventListener("keydown", R), T ? (f || (f = document.activeElement), G(), document.addEventListener("keydown", R), El(() => {
        z();
      })) : (Z(), O());
    }
    return Fl(() => {
      _e(r.open);
    }), Ka(() => {
      Z(), document.removeEventListener("keydown", R), O();
    }), Ki(() => r.open, (T) => {
      _e(T);
    }), (T, E) => e.open ? (ie(), ce("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: E[2] || (E[2] = Et((ue) => o("close"), ["self"]))
    }, [
      K("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        K("div", C2, [
          K("div", I2, [
            E[3] || (E[3] = K("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            E[4] || (E[4] = K("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            E[5] || (E[5] = K("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ie(), ce("div", E2, tt(D.value), 1)) : st("", !0),
            E[6] || (E[6] = K("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              K("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            De(kN, {
              ref_key: "paintOverlaysRef",
              ref: g
            }, null, 512),
            De(C0, {
              ref_key: "imageFilePickerRef",
              ref: v,
              onFileSelected: P,
              onFileCancelled: S
            }, null, 512),
            _.value ? st("", !0) : (ie(), ce(Be, { key: 1 }, [
              De(c2, {
                buttons: e.uiState.toolButtons || F.value.toolButtons || []
              }, null, 8, ["buttons"]),
              De(YM, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              De(SN, {
                "paint-swatches": e.paintSwatches,
                panes: F.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            De(x2, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            De(P2, {
              buttons: e.uiState.viewButtons || F.value.viewButtons || []
            }, null, 8, ["buttons"]),
            De(GM, {
              buttons: e.uiState.floatingButtons || Y.value,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
            De(CN, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            De(s2, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            De(eN, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          De(a2, {
            model: e.uiState.timeline || {},
            onAction: E[0] || (E[0] = (ue) => o("timeline", ue))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? st("", !0) : (ie(), Tr(TP, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: E[1] || (E[1] = (ue) => o("timeline", ue))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, A2)
    ])) : st("", !0);
  }
}, dr = "loading", Bo = "ready", tr = "failed";
function B0(e, t = "") {
  return e && (e.__panoLoadState = dr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function U0(e, t = "") {
  return e && (e.__panoLoadState = Bo, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function W0(e, t = "") {
  return e && (e.__panoLoadState = tr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Bu(e, t) {
  return e ? e.__panoLoadState === tr ? tr : typeof t == "function" && t(e) ? Bo : dr : Bo;
}
function Uu(e) {
  return Bu(e) === tr;
}
function F2({ presented: e, background: t = Bo, stickers: n = [] } = {}) {
  if (!e) return { status: dr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === dr, a = r.includes(dr);
  if (o && a) return { status: dr, detail: "mixed" };
  if (o) return { status: dr, detail: "background" };
  if (a) return { status: dr, detail: "stickers" };
  const c = t === tr, f = r.includes(tr);
  return c && f ? { status: tr, detail: "mixed" } : c ? { status: tr, detail: "background" } : f ? { status: tr, detail: "stickers" } : { status: Bo, detail: "" };
}
const T2 = "state_json", D2 = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), tu = "sticker_image_1", L2 = "external_image", Ns = "pano_sticker_input_images", R2 = !0, Ys = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], vr = Math.PI / 180, zi = 180 / Math.PI, nu = 1, $2 = "rgb(255, 221, 87)", V2 = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, z2 = 64, Jp = 40, ru = 16, j2 = 0.45, Zp = 180, H2 = 160, Sl = 24, G2 = 4, K2 = 4, Ps = /* @__PURE__ */ new Map(), Qp = /* @__PURE__ */ new Map(), bi = /* @__PURE__ */ new Map(), B2 = 12, Gn = l0({
  app: Ar,
  api: jt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Uu,
    markImageFailed: W0,
    markImageLoading: B0,
    markImageReady: U0
  }
});
function iu(e) {
  if (!rr(e, "background") || !rr(e, "external-sticker")) return null;
  const t = Gn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const U2 = Gn.assetSource, W2 = Gn.source, ou = Gn.uiImage, Y2 = Gn.invalidateUiImage, X2 = Gn.resolvePreferredExactLinkedSource, au = Gn.loadPreferredExactLinkedImage;
function As(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function q2(e) {
  return 1 - Math.pow(1 - e, 3);
}
function J2(e, t, n) {
  const r = q((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function Z2(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = bi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (bi.delete(t), bi.set(t, n), n);
}
function Q2(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (bi.delete(n), bi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); bi.size > B2; ) {
      const o = bi.keys().next().value;
      if (!o) break;
      bi.delete(o);
    }
}
function eA(e) {
  return e * e * e;
}
function Hl(e, t, n) {
  return { x: e, y: t, z: n };
}
function em(e, t) {
  return Hl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function tm(e, t) {
  return Hl(e.x * t, e.y * t, e.z * t);
}
function su(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function tA(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Hl(e.x / t, e.y / t, e.z / t);
}
function Cs(e) {
  return {
    yaw: Ut(Math.atan2(e.x, e.z) * zi),
    pitch: q(Math.asin(q(e.y, -1, 1)) * zi, -90, 90)
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
function mi(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function lu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), f = r * r + o * o;
  if (f <= 1e-6) return mi(e, t);
  const d = q((a * r + c * o) / f, 0, 1), v = Number(t.x || 0) + r * d, g = Number(t.y || 0) + o * d, w = Number(e.x || 0) - v, x = Number(e.y || 0) - g;
  return w * w + x * x;
}
function Qn(e, t, n) {
  return e + (t - e) * n;
}
function _r(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${q(n, 0, 1)})`;
}
function nA(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Is = { fillStyle: "", url: "" };
function rA(e, t, n) {
  if (Is.url && Is.fillStyle === String(e || ""))
    return Is.url;
  const r = nA(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Sl}" height="${Sl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Is = { fillStyle: String(e || ""), url: r }, r;
}
function Xs(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function jn(e) {
  return {
    r: q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: q(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function mn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function iA(e) {
  return Ys.some((t) => Xs(e, t.color));
}
function cu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = q(Number(t), 0, 1), a = q(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const c = Math.floor(r * 6), f = r * 6 - c, d = a * (1 - o), v = a * (1 - f * o), g = a * (1 - (1 - f) * o);
  switch (c % 6) {
    case 0:
      return { r: a, g, b: d };
    case 1:
      return { r: v, g: a, b: d };
    case 2:
      return { r: d, g: a, b: g };
    case 3:
      return { r: d, g: v, b: a };
    case 4:
      return { r: g, g: d, b: a };
    default:
      return { r: a, g: d, b: v };
  }
}
function uu(e) {
  const t = q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let f = 0;
  c > 1e-6 && (o === t ? f = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? f = ((r - t) / c + 2) / 6 : f = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: f, s: d, v: o };
}
function _o(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const Y0 = "pano_suite.ui_settings.v1", X0 = "pano_suite.node_grid_visibility.v1";
let Po = null, wr = null;
function qs(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function oA() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Y0)) || "").trim();
    if (!t) return Po ? qs(Po) : null;
    const n = JSON.parse(t), r = qs(n);
    return Po = r, r;
  } catch {
    return Po ? qs(Po) : null;
  }
}
function aA(e) {
  var n;
  const t = qs(e);
  Po = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Y0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function q0() {
  var e;
  if (wr && typeof wr == "object")
    return wr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(X0)) || "").trim();
    if (!t)
      return wr = {}, wr;
    const n = JSON.parse(t);
    return wr = n && typeof n == "object" ? n : {}, wr;
  } catch {
    return wr = {}, wr;
  }
}
function sA(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = q0()[n];
  return typeof o == "boolean" ? o : !!t;
}
function lA(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = q0();
  r[n] = !!t, wr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(X0, JSON.stringify(r));
  } catch {
  }
}
function cA(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function nm(e) {
  const { paintCount: t, maskCount: n } = cA(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function wo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Es(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function uA(e, t) {
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
function fA(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function dA(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function hA(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function pA(e, t, n = {}) {
  var gh;
  await O0(e, { tolerateOperationFailure: !0 }), Gn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = uA(e, t);
  await Df();
  const f = Es(e, "output_preset"), d = Es(e, "coverage"), v = Es(e, "bg_color"), g = Es(e, T2), w = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return au(
      e,
      i,
      () => he(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = w();
    return hA(i);
  }, P = (i = 2048) => {
    const s = f == null ? void 0 : f.value;
    return dA(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : fA(s, i);
  }, S = t === "stickers" && e.__panoSceneStateV2 === !0, _ = (S ? Vg : $g)(String((g == null ? void 0 : g.value) || ""), {
    outputPreset: P(2048),
    backgroundColor: String((v == null ? void 0 : v.value) || "#00ff00"),
    coverage: Hn(d == null ? void 0 : d.value),
    sharedUiSettings: oA(),
    active: Kg(e),
    fps: S ? iu(e) : null
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0, t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], s = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((u) => String((u == null ? void 0 : u.id) || "") === s) || i[0] || null;
  })() : null, D = F ? xd(F, !1) : { width: 220, height: 132 }, Y = K0(t), I = /* @__PURE__ */ Uo({
    stageStatus: dr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (Y.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (Y.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(Y.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ne.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ne.aspect,
      rotateIcon: Ne.rotate_90,
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
      icon: Ne.fullscreen,
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
      width: D.width,
      height: D.height,
      label: F ? "Loading preview" : "Add Frame to preview"
    }
  }), z = document.createElement("div");
  document.body.appendChild(z);
  const O = ({ intent: i, file: s } = {}) => {
    if (Pr(s)) {
      if (i === "add") {
        Rd(s);
        return;
      }
      i === "replace" && Yb(s);
    }
  }, R = ({ intent: i } = {}) => {
  }, G = ff(O2, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: Y,
    paintSwatches: Ys.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: _r(i.color, 1)
    })),
    uiState: I,
    onClose: () => {
      mo();
    },
    onTimeline: (i) => Kb(i),
    onImageFileSelected: O,
    onImageFileCancelled: R
  });
  let Z = null;
  try {
    Z = G.mount(z);
  } catch (i) {
    try {
      G.unmount();
    } catch {
    }
    throw z.remove(), i;
  }
  const _e = z.querySelector(".pano-modal-overlay"), T = z.querySelector(".pano-modal"), E = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), ue = T == null ? void 0 : T.querySelector("[data-stage-background]"), fe = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), de = ((gh = Z == null ? void 0 : Z.getPaintOverlayRefs) == null ? void 0 : gh.call(Z)) || {}, U = de.cursor || null, X = de.sizePreview || null, j = de.sizeSample || null;
  if (!_e || !T || !E || !ue || !fe || !U || !X || !j)
    throw G.unmount(), z.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const M = E.getContext("2d"), Q = T.querySelector("[data-side]"), W = T.querySelector("[data-video-element]"), Pe = T.querySelector(".pano-floating-right"), Te = T.querySelector(".pano-floating-top"), kt = T.querySelector("[data-tool-rail]"), pt = T.querySelector("[data-frame-rail]"), ut = T.querySelector("[data-frame-roll-knob]"), Zt = T.querySelector("[data-paint-dock]"), Un = T.querySelector(".pano-video-transport"), Mt = T.querySelector("[data-selection-menu]"), Yt = T.querySelector("[data-tooltip]"), ln = T.querySelector("[data-camera-preview-host]"), $n = T.querySelector("[data-camera-preview-canvas]"), $ = T.querySelector("[data-paint-color-row]"), H = T.querySelector("[data-paint-color-pop]"), ee = T.querySelector("[data-paint-color-sv]"), be = T.querySelector("[data-paint-color-sv-cursor]"), ge = T.querySelector("[data-paint-hue-strip]"), ve = T.querySelector("[data-paint-hue-handle]");
  let xe = 0, Me = 0;
  fe == null || fe.removeAttribute("data-stage-ready"), fe == null || fe.setAttribute("data-stage-loading-kind", "boot"), E.style.opacity = "1", ue.style.opacity = "0", o && (Q == null || Q.remove(), T.classList.add("pano-modal-readonly"));
  const ke = () => {
    if (!p.customPaintSessionStart) return;
    if (Xs(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (iA(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      jn(p.customPaintColor),
      ...p.customPaintHistory.filter((s) => !Xs(s, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, le = (i = !1) => {
    !H || H.hidden || (i ? ke() : p.customPaintSessionStart = null, H.hidden = !0, I.paintDock.colorPopOpen = !1);
  }, $e = () => {
    H && (H.hidden && (p.customPaintSessionStart = jn(p.customPaintColor)), H.hidden = !1, I.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Ni(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), le(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Ye(), he()), (s = I.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (I.frameRail.aspectOpen = !1)));
  });
  const Ae = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, Re = JSON.stringify(dp(_)), p = {
    mode: "pano",
    selectedId: Ae,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Hn(_.coverage),
    historyController: CM(80, { entries: [Re], index: 0 }),
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
    showGrid: sA(e == null ? void 0 : e.id, !0),
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
    paintEngine: xu(),
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
  let nt = null;
  t === "stickers" && (p.selectedId = null, _.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const We = /* @__PURE__ */ new Map(), ot = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map(), rn = /* @__PURE__ */ new Map(), vt = document.createElement("canvas");
  vt.__panoFrameIdx = 0;
  const Fe = {
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
  }, Wn = $x({ onReady: () => he(), onFailed: () => he() });
  let Kt = { key: "", projection: null }, cn = { key: null, sceneState: null }, Dr = null, Lr = null, eo = null;
  const Ua = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, L = (i) => {
    const s = String(i || "default");
    E.style.cursor !== s && (E.style.cursor = s);
  }, se = {
    timer: 0,
    target: null
  }, Ie = {
    active: !1,
    depth: 0
  }, Ce = {
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
  }, Ge = 9, Ue = [];
  let lt = 0;
  const _n = () => {
    var N, A;
    const i = (N = fe == null ? void 0 : fe.getBoundingClientRect) == null ? void 0 : N.call(fe), s = (A = Pe == null ? void 0 : Pe.getBoundingClientRect) == null ? void 0 : A.call(Pe), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), u = s ? Math.max(0, Number(s.width || 0)) : 0, y = u > 0 ? u + 14 + 12 : 72, b = Math.max(280, Math.floor(l - y * 2)), k = p.fullscreen ? Math.min(1200, b) : b;
    I.videoTransport.shellMaxWidthPx = k;
  }, Xt = () => {
    lt || (lt = window.requestAnimationFrame(() => {
      lt = 0, _n();
    }));
  }, Yn = (i) => {
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
  }, mt = typeof ResizeObserver < "u" ? new ResizeObserver(() => Xt()) : null;
  mt == null || mt.observe(fe), Pe && (mt == null || mt.observe(Pe)), Ue.push(() => {
    var i;
    lt && (window.cancelAnimationFrame(lt), lt = 0), (i = mt == null ? void 0 : mt.disconnect) == null || i.call(mt);
  }), Xt();
  const Rr = () => {
    Ce.thumbnailJobId += 1, Ce.thumbnailSrc = "", I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = Ge;
  }, Xo = async (i, s, l) => {
    const u = String(i || "").trim();
    if (!u) {
      Rr();
      return;
    }
    const h = Z2(u);
    if (h) {
      Ce.thumbnailSrc = u, I.videoTransport.thumbnails = h.thumbnails, I.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    const m = ++Ce.thumbnailJobId;
    Ce.thumbnailSrc = u, I.videoTransport.thumbnails = [], I.videoTransport.thumbnailCount = Ge;
    const y = document.createElement("video");
    y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous";
    const b = await new Promise((oe) => {
      let pe = !1;
      const re = (Se) => {
        pe || (pe = !0, oe(Se));
      };
      y.addEventListener("loadedmetadata", () => re(!0), { once: !0 }), y.addEventListener("canplay", () => re(!0), { once: !0 }), y.addEventListener("error", () => re(!1), { once: !0 }), y.src = u, y.load();
    });
    if (Ce.thumbnailJobId !== m) return;
    const k = Number(y.videoWidth || 0), N = Number(y.videoHeight || 0);
    if (!b || k < 1 || N < 1) {
      Ce.thumbnailFailedSrcs.add(u);
      return;
    }
    const A = Math.max(0, Number(y.duration || s || 0)), C = document.createElement("canvas"), V = 46, B = Math.max(72, Math.round(k / N * V));
    C.width = B, C.height = V;
    const ne = C.getContext("2d");
    if (!ne) return;
    const J = [], te = (oe) => new Promise((pe) => {
      let re = !1;
      const Se = () => {
        re || (re = !0, pe());
      };
      y.addEventListener("seeked", Se, { once: !0 }), y.addEventListener("error", Se, { once: !0 });
      try {
        y.currentTime = oe;
      } catch {
        Se();
      }
    });
    for (let oe = 0; oe < Ge; oe += 1) {
      if (Ce.thumbnailJobId !== m) return;
      const pe = oe / (Ge - 1), re = A > 0 ? Math.max(0, Math.min(A - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), A * pe)) : 0;
      if (await te(re), Ce.thumbnailJobId !== m) return;
      ne.clearRect(0, 0, B, V), ne.drawImage(y, 0, 0, B, V), J.push({
        id: `thumb-${oe}`,
        src: C.toDataURL("image/jpeg", 0.72),
        time: re,
        label: Zl(re)
      });
    }
    Ce.thumbnailJobId === m && (I.videoTransport.thumbnails = J, I.videoTransport.thumbnailCount = J.length || Ge, Q2(u, {
      thumbnails: J,
      thumbnailCount: J.length || Ge,
      duration: A,
      fps: l
    }));
  };
  Ue.push(() => {
    Rr();
  });
  const At = v0({
    video: W instanceof HTMLVideoElement ? W : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: Za,
    span: () => {
      if (S) return hc();
      const i = Math.round(Number(I.videoTransport.duration || 0) * Za());
      return W.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => S,
    onFrame: (i) => {
      S ? Vb(i) : si(), he({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      _y() && (Fe.backgroundDirty = !0);
    },
    onChange: () => {
      si(), Hr(), he({ cause: "frame_view", localOnly: !0 });
    }
  });
  if (Ue.push(() => At.dispose()), W instanceof HTMLVideoElement) {
    const i = () => {
      li(), he({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      si({
        hasAudio: I.videoTransport.hasAudio,
        muted: W.muted,
        volume: Number(W.volume ?? I.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const u = W.dataset.panoSrc;
      u && (Ce.failedSrcs.add(u), li(), he());
    };
    for (const [u, h] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      W.addEventListener(u, h), Ue.push(() => W.removeEventListener(u, h));
  }
  function Pn() {
    I.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", u = i.attr === "data-mask-tool";
      i.active = s ? i.value === p.primaryTool : l ? i.key === p.paintTool : u ? i.key === p.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function $r(i) {
    return Rf(i == null ? void 0 : i.dataTransfer);
  }
  function Xn(i) {
    const s = !!i;
    Ie.active !== s && (Ie.active = s, fe.classList.toggle("drop-active", s));
  }
  function to(i, s, l = p.viewFov, u = 140, h = 620) {
    const m = hw(p.viewYaw, i), y = s - p.viewPitch, b = l - p.viewFov, k = Math.hypot(m, y) + Math.abs(b) * 0.6, N = Math.round(q(u + k * 2.2, u, h));
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
    }, p.viewInertia.active = !1, p.viewInertia.vx = 0, p.viewInertia.vy = 0, he();
  }
  Ay();
  function Rt() {
    return t === "stickers" ? An() : _.shots;
  }
  function An() {
    return S ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function Cn(i) {
    return S && gt(i);
  }
  function Si(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function Nt(i) {
    return Cn(i) ? Mf(i, p.frame) : i;
  }
  function ar(i, s) {
    Cn(i) ? zg(i, p.frame, s) : Object.assign(i, s);
  }
  function dn() {
    const i = _.painting || (_.painting = To(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function J0(i = "paint") {
    var h, m;
    const s = Array.isArray((m = (h = _.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], u = /* @__PURE__ */ new Set();
    for (const y of s) {
      const b = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !b || u.has(b) || (u.add(b), l.push(b));
    }
    return l;
  }
  function Z0() {
    return J0("paint");
  }
  function qo(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Jo(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function on(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Zo(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const u = l.match(/^(paint|mask):(.*)$/);
    return u ? { layerKind: u[1] === "mask" ? "mask" : "paint", actionGroupId: String(u[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function Gl() {
    var s;
    let i = -1;
    for (const l of An())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of dn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = _.painting) == null ? void 0 : s.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function Hf(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const u = dn();
    let h = u.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return h ? s != null && (h.z_index = Math.max(0, Number(s || 0))) : (h = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? Gl() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, u.push(h)), h;
  }
  function Q0(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), u = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((s - u) % 1 + 1) % 1,
        v: q(l - h, 0, 1)
      },
      {
        u: ((s + u) % 1 + 1) % 1,
        v: q(l - h, 0, 1)
      },
      {
        u: ((s + u) % 1 + 1) % 1,
        v: q(l + h, 0, 1)
      },
      {
        u: ((s - u) % 1 + 1) % 1,
        v: q(l + h, 0, 1)
      }
    ];
  }
  function ey() {
    const i = new Set(Z0()), l = dn().filter((u) => i.has(String((u == null ? void 0 : u.actionGroupId) || "")));
    return i.forEach((u) => {
      l.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === u) || l.push({
        id: u,
        type: "strokeGroup",
        actionGroupId: u,
        z_index: Gl(),
        locked: !1,
        frame: null
      });
    }), l.sort((u, h) => Number((u == null ? void 0 : u.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), _.painting.groups = l, l;
  }
  function ty(i, s, l) {
    var J;
    const u = (te) => (Number(te || 0) % 1 + 1) % 1, h = [];
    for (const te of l) {
      const oe = te == null ? void 0 : te.geometry, pe = (oe == null ? void 0 : oe.geometryKind) === "lasso_fill" ? oe == null ? void 0 : oe.points : (oe == null ? void 0 : oe.processedPoints) || (oe == null ? void 0 : oe.rawPoints) || (oe == null ? void 0 : oe.points) || [];
      Array.isArray(pe) && h.push(...pe);
    }
    if (!h.length) return null;
    const m = u(((J = h[0]) == null ? void 0 : J.u) || 0);
    let y = 0, b = 0;
    h.forEach((te) => {
      const oe = u((te == null ? void 0 : te.u) || 0);
      y += m + qn(oe, m), b += Number((te == null ? void 0 : te.v) || 0);
    });
    const k = (y / h.length % 1 + 1) % 1;
    let N = 1 / 0, A = -1 / 0, C = 1 / 0, V = -1 / 0;
    h.forEach((te) => {
      const oe = u((te == null ? void 0 : te.u) || 0), pe = qn(oe, k);
      N = Math.min(N, pe), A = Math.max(A, pe);
      const re = Number((te == null ? void 0 : te.v) || 0);
      C = Math.min(C, re), V = Math.max(V, re);
    });
    const B = l.reduce((te, oe) => {
      const pe = hi(String((oe == null ? void 0 : oe.toolKind) || "pen")), re = Fn[pe] || Fn[Kr], Se = Math.max(1, Number((oe == null ? void 0 : oe.size) || 10)) * Math.max(0.1, Number((re == null ? void 0 : re.sizeScale) ?? 1));
      return Math.max(te, Se);
    }, 0), ne = Math.max(35e-4, B / 2048);
    return {
      centerUv: { u: ((k + (N + A) * 0.5) % 1 + 1) % 1, v: q((C + V) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (A - N) * 0.5 + ne,
      halfH: (V - C) * 0.5 + ne,
      uvPad: ne
    };
  }
  function ai(i, s, l) {
    const u = String(i || "").trim();
    if (!u) return null;
    const h = dn().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === u);
    if (!h) return null;
    const m = l || sr(u, s);
    return h.frame = ty(u, s, m), h.frame;
  }
  function no() {
    var u;
    const i = An().map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = ey().map((h) => ({
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
  function Kl(i = !0) {
    var l, u, h, m, y, b;
    const s = no().filter((k) => k.type === "strokeGroup").map((k) => String(k.actionGroupId || "")).filter((k) => !!k);
    if (i) {
      const k = String(((u = (l = p.interaction) == null ? void 0 : l.stroke) == null ? void 0 : u.actionGroupId) || "").trim(), N = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), A = String(((b = (y = p.interaction) == null ? void 0 : y.stroke) == null ? void 0 : b.toolKind) || "").trim();
      k && N === "paint" && A !== "eraser" && !s.includes(k) && s.push(k);
    }
    return s;
  }
  function Bl(i = !0) {
    var b, k, N, A, C, V;
    const s = no();
    if (!i) return s;
    const l = String(((k = (b = p.interaction) == null ? void 0 : b.stroke) == null ? void 0 : k.actionGroupId) || "").trim(), u = String(((A = (N = p.interaction) == null ? void 0 : N.stroke) == null ? void 0 : A.layerKind) || "").trim(), h = String(((V = (C = p.interaction) == null ? void 0 : C.stroke) == null ? void 0 : V.toolKind) || "").trim();
    if (!l || u !== "paint" || h === "eraser" || s.some((B) => B.type === "strokeGroup" && String(B.actionGroupId || "") === l))
      return s;
    const m = Ct();
    let y = s.reduce((B, ne) => Math.max(B, Number((ne == null ? void 0 : ne.z_index) || 0)), -1) + 1;
    return m && Qt(m) && String(m.actionGroupId || "") === l && (y = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: y,
        item: null
      }
    ].sort((B, ne) => Number((B == null ? void 0 : B.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0));
  }
  function ny() {
    return dn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => io(qo("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function ry() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => ro(Jo((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Gf(i = p.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, u = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || u;
    }
    return !1;
  }
  function iy() {
    var s, l, u, h;
    let i = null;
    try {
      const m = Kl(), y = ((h = (u = (l = (s = p.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : u.displayPaint) == null ? void 0 : h.canvas) || null;
      y && (i = {
        source: y,
        revision: `${ia()}:${Ul()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Ul() {
    var h, m, y, b, k, N, A;
    const i = p.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Gf(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const C = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, V = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), B = ((y = C == null ? void 0 : C.rawPoints) == null ? void 0 : y.length) ?? ((b = C == null ? void 0 : C.points) == null ? void 0 : b.length) ?? 0, ne = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${V || "paint"}_${s}_live${ne}_${B}_${p.livePaintInteractionRevision}`;
    }
    const l = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.actionGroupId) || ""), u = String(((N = i == null ? void 0 : i.item) == null ? void 0 : N.rasterObjectId) || ((A = i == null ? void 0 : i.item) == null ? void 0 : A.id) || "");
    return `_${s}_${l || u || "active"}_${p.livePaintInteractionRevision}`;
  }
  function Wl() {
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
  function ro(i) {
    const s = on(i);
    if (!s) return null;
    const l = In().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Jo(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function hn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = on(i.rasterObjectId || i.id || "");
    return !!s && !!ro(Jo(s));
  }
  function io(i) {
    const s = Zo(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const u = dn().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === l || String((h == null ? void 0 : h.actionGroupId) || "") === l);
    return u ? {
      ...u,
      id: qo("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function Qt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!io(qo(l, s));
  }
  function sr(i, s = null) {
    const l = Zo(i, s), u = String(l.actionGroupId || "").trim();
    return u ? ho(l.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === u) : [];
  }
  function oy(i, s = "paint") {
    const l = String(i || "").trim(), h = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${p.mode}:${ra()}`;
    if (p.mode === "frame") {
      const m = ze(), y = String((m == null ? void 0 : m.id) || ""), b = m ? tn(m) : null;
      return `${h}:frame:${y}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((b == null ? void 0 : b.x) || 0))}:${Math.round(Number((b == null ? void 0 : b.y) || 0))}:${Math.round(Number((b == null ? void 0 : b.w) || 0))}:${Math.round(Number((b == null ? void 0 : b.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((E == null ? void 0 : E.width) || 0))}:${Math.round(Number((E == null ? void 0 : E.height) || 0))}`;
  }
  function Wa(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: q(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function qn(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function Yl(i, s = null, l = null) {
    var N;
    const u = Zo(i, s), h = Array.isArray(l) ? l : sr(u.actionGroupId, u.layerKind), m = [];
    if (h.forEach((A) => {
      const C = (A == null ? void 0 : A.geometry) || null, V = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(V) && m.push(...V);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((N = m[0]) == null ? void 0 : N.u) || 0);
    let b = 0, k = 0;
    return m.forEach((A) => {
      b += y + qn(Number((A == null ? void 0 : A.u) || 0), y), k += Number((A == null ? void 0 : A.v) || 0);
    }), {
      u: (b / m.length % 1 + 1) % 1,
      v: q(k / m.length, 0, 1)
    };
  }
  function Ya(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = qn(Number(i.u || 0), h), b = Number(i.v || 0) - m, k = Number(u || 0) * vr, N = Math.cos(k), A = Math.sin(k), C = Math.max(0.02, Number(l || 1)), V = (y * N - b * A) * C, B = (y * A + b * N) * C;
    return {
      ...i,
      u: ((h + V) % 1 + 1) % 1,
      v: q(m + B, 0, 1)
    };
  }
  function Kf(i, s, l, u = null, h = null, m = null) {
    const y = Zo(i, h), b = String(y.actionGroupId || "").trim();
    if (!b) return !1;
    const k = ho(y.layerKind), N = Array.isArray(u) ? new Map(u.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let A = !1;
    if (k.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== b) return;
      const V = (N == null ? void 0 : N.get(String((C == null ? void 0 : C.id) || ""))) || C, B = C == null ? void 0 : C.geometry, ne = V == null ? void 0 : V.geometry;
      !B || !ne || (Array.isArray(ne.points) && (B.points = ne.points.map((J) => Wa(J, s, l)), A = !0), Array.isArray(ne.rawPoints) && (B.rawPoints = ne.rawPoints.map((J) => Wa(J, s, l)), A = !0), Array.isArray(ne.processedPoints) && (B.processedPoints = ne.processedPoints.map((J) => Wa(J, s, l)), A = !0));
    }), A && m) {
      const C = dn().find((V) => String((V == null ? void 0 : V.actionGroupId) || "") === b);
      C && (C.frame = null);
    }
    return A;
  }
  function Bf(i, s = 1, l = 0, u = null, h = null, m = null) {
    const y = Zo(i, h), b = String(y.actionGroupId || "").trim();
    if (!b) return !1;
    const k = ho(y.layerKind), N = Array.isArray(u) ? u : sr(b, y.layerKind), A = Array.isArray(N) ? new Map(N.map((B) => [String((B == null ? void 0 : B.id) || ""), B])) : null, C = (m == null ? void 0 : m.centerUv) ?? Yl(b, y.layerKind, N);
    let V = !1;
    if (k.forEach((B) => {
      if (String((B == null ? void 0 : B.actionGroupId) || "").trim() !== b) return;
      const ne = (A == null ? void 0 : A.get(String((B == null ? void 0 : B.id) || ""))) || B, J = B == null ? void 0 : B.geometry, te = ne == null ? void 0 : ne.geometry;
      !J || !te || (Array.isArray(te.points) && (J.points = te.points.map((oe) => Ya(oe, C, s, l)), V = !0), Array.isArray(te.rawPoints) && (J.rawPoints = te.rawPoints.map((oe) => Ya(oe, C, s, l)), V = !0), Array.isArray(te.processedPoints) && (J.processedPoints = te.processedPoints.map((oe) => Ya(oe, C, s, l)), V = !0));
    }), V && m) {
      const B = dn().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === b);
      B && (B.frame = null);
    }
    return V;
  }
  function Uf(i, s, l, u = null) {
    const h = on(i);
    if (!h) return !1;
    const m = In().find((A) => String((A == null ? void 0 : A.id) || "").trim() === h);
    if (!m) return !1;
    const y = u && typeof u == "object" ? u : m, b = (y == null ? void 0 : y.transform) || {}, k = Number(b.du || 0) + Number(s || 0), N = q(Number(b.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = k, m.transform.dv = N, !0;
  }
  function ay(i, s = 1, l = null) {
    const u = on(i);
    if (!u) return !1;
    const h = In().find((N) => String((N == null ? void 0 : N.id) || "").trim() === u);
    if (!h) return !1;
    const m = l && typeof l == "object" ? l : h, y = (m == null ? void 0 : m.transform) || {}, b = Math.max(0.01, Number(y.scale || 1)), k = q(b * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = k, !0;
  }
  function Ct() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const s = io(i);
    if (s) return s;
    const l = ro(i);
    return l || (t === "cutout" ? Wl().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null : Rt().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null);
  }
  function lr() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((u) => {
      const h = String(u || "").trim();
      if (!h || l.has(h)) return;
      l.add(h);
      const m = h === String(p.selectedId || "") ? Ct() : io(h) || ro(h) || (t === "cutout" ? Wl().find((y) => String((y == null ? void 0 : y.id) || "") === h) : Rt().find((y) => String((y == null ? void 0 : y.id) || "") === h));
      m && s.push(m);
    }), s;
  }
  function Xa(i = null) {
    const s = Array.isArray(i) ? i : lr();
    if (!s || s.length < 2) return null;
    const l = s.map((N) => qt(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!l.length) return null;
    const u = l.flatMap((N) => N.corners.map((A) => Number((A == null ? void 0 : A.x) || 0))), h = l.flatMap((N) => N.corners.map((A) => Number((A == null ? void 0 : A.y) || 0))), m = Math.min(...u), y = Math.max(...u), b = Math.min(...h), k = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (b + k) * 0.5 },
      corners: [
        { x: m, y: b },
        { x: y, y: b },
        { x: y, y: k },
        { x: m, y: k }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: b, a: { x: m, y: b }, b: { x: y, y: b } },
        { edge: "right", x: y, y: (b + k) * 0.5, a: { x: y, y: b }, b: { x: y, y: k } },
        { edge: "bottom", x: (m + y) * 0.5, y: k, a: { x: y, y: k }, b: { x: m, y: k } },
        { edge: "left", x: m, y: (b + k) * 0.5, a: { x: m, y: k }, b: { x: m, y: b } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: b },
      rotateHandle: { x: (m + y) * 0.5, y: b - 30 }
    };
  }
  function Wf(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(p.selectedIds) && p.selectedIds.includes(s);
  }
  function qa() {
    const i = Ct();
    return i ? Qt(i) || hn(i) ? "stroke" : Vn(i) ? "frame" : "image" : null;
  }
  function wn(i) {
    if (!i || typeof i != "object") return !1;
    if (Qt(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = dn().find((u) => String((u == null ? void 0 : u.actionGroupId) || (u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (hn(i)) {
      const s = on(i.rasterObjectId || i.id || ""), l = In().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function Xl(i = null) {
    const s = Array.isArray(i) ? i : lr();
    return s.length > 0 && s.every((l) => wn(l));
  }
  function sy(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (Qt(i)) {
      const u = String(i.actionGroupId || i.id || "").trim(), h = dn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    if (hn(i)) {
      const u = on(i.rasterObjectId || i.id || ""), h = In().find((m) => String((m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function ly() {
    if (r) return;
    const i = lr();
    if (!i.length) return;
    const s = !Xl(i);
    let l = !1;
    i.forEach((u) => {
      sy(u, s) && (l = !0);
    }), l && (rt(), at(), Ye(), Ve(), he());
  }
  function gr(i) {
    p.inspectCamera = !1, Ee.selection = null, p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && gt(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && Vn(i) ? _.active.selected_shot_id = i.id || null : i ? Vn(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function cy(i, s = null) {
    const l = [], u = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((y) => {
      const b = String((y == null ? void 0 : y.id) || "").trim();
      !b || u.has(b) || (u.add(b), l.push(b));
    }), p.selectedIds = l, p.inspectCamera = !1, Ee.selection = null;
    const h = String(s || "").trim();
    p.selectedId = h && l.includes(h) ? h : l[l.length - 1] || null;
    const m = Ct();
    _.active.selected_sticker_id = m && gt(m) && m.id || null, m && Vn(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function Yf() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, u) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${u + 1}`)
    })), s = (Array.isArray(_.stickers) ? _.stickers : []).map((l, u) => {
      var m, y;
      const h = en(l) ? String(l.id || tu) : String(((y = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : y.name) || l.asset_id || l.id || `Image ${u + 1}`);
      return {
        kind: "image",
        item: l,
        label: h
      };
    });
    return [...i, ...s];
  }
  function uy(i) {
    return i === "frame" ? Ne.camera : i === "stroke" ? Ne.paintbrush_vertical_tool : Ne.image;
  }
  function ql(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: uy(i.kind)
    };
  }
  function Ja() {
    return Gl();
  }
  function en(i) {
    var s;
    return !i || typeof i != "object" ? !1 : S ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === tu || String(i.source_kind || "") === L2;
  }
  function oo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function fy(i) {
    return en(i) && oo(i) ? Yg : 1;
  }
  function dy() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function hy() {
    return String(dy() || "") === "lasso_fill";
  }
  function py() {
    if (r) return;
    const i = Ct();
    !i || !en(i) || (i.visible = oo(i), Bt(), rt(), at(), Ve(), Ye(), he());
  }
  function my() {
    if (r || t !== "stickers") return;
    const i = Ct();
    if (!i || !en(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = Ql(Ns, () => {
      he();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = ci(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), rt(), at(), Ve(), Ye(), he();
  }
  function gy(i) {
    if (!i || !en(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, u = Ql(Ns, () => {
      he();
    });
    return u && (u.complete || u.naturalWidth || u.width) && (l.vFOV_deg = ci(
      l.hFOV_deg,
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    )), l;
  }
  function yy() {
    const i = Ct();
    if (!i || !en(i)) return !1;
    const s = gy(i);
    if (!s) return !1;
    const l = (u, h) => Math.abs(Number(u || 0) - Number(h || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Xf(i) {
    return Gn.uiList(e, i);
  }
  function Jl(i) {
    return Gn.uiValue(e, i);
  }
  function qf() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return sl(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function by() {
    const { metaKey: i } = qf(), s = Jl(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function Jf(i) {
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
  function Zl(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), u = s % 60;
    return `${l}:${String(u).padStart(2, "0")}`;
  }
  function Za() {
    return S ? _.timeline.fps : Ce.metaFps || 1e3;
  }
  function si(i = {}) {
    const s = Number(i.duration ?? I.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? I.videoTransport.fps ?? 24)), u = At.frame / Za(), h = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!I.videoTransport.ready, m = At.playing, y = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!I.videoTransport.visible, b = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(W instanceof HTMLVideoElement ? W.muted : I.videoTransport.muted), k = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : W instanceof HTMLVideoElement ? W.volume : I.videoTransport.volume
    ), N = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Yn(W), A = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!I.videoTransport.loop;
    Object.assign(I.videoTransport, {
      ready: h,
      playing: m,
      visible: y,
      loop: A,
      currentTime: Number.isFinite(u) ? u : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, u / s * 100)) : 0,
      currentTimeLabel: Zl(u),
      durationLabel: Zl(s),
      frameCount: Math.max(0, Number(i.frameCount ?? I.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: N,
      muted: b,
      volume: Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : I.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? I.videoTransport.thumbnailCount ?? Ge))
    });
  }
  function Zf() {
    return !!(W instanceof HTMLVideoElement && !S && W.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function Qf() {
    if (!(W instanceof HTMLVideoElement) || !I.videoTransport.hasAudio) return;
    const i = !W.muted;
    W.muted = i, !i && Number(W.volume || 0) <= 0 && (W.volume = Math.max(0.01, Number(I.videoTransport.volume || 1))), si({
      hasAudio: I.videoTransport.hasAudio,
      muted: W.muted,
      volume: Number(W.volume ?? I.videoTransport.volume ?? 1)
    });
  }
  function vy() {
    si({
      visible: Zf()
    });
  }
  function _y() {
    if (!(W instanceof HTMLVideoElement) || Number(W.videoWidth || 0) < 1 || Number(W.videoHeight || 0) < 1) return !1;
    const i = Number(W.videoWidth || 0), s = Number(W.videoHeight || 0);
    (vt.width !== i || vt.height !== s) && (vt.width = i, vt.height = s);
    const l = vt.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(W, 0, 0, i, s), vt.__panoFrameIdx = Number(vt.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function ed() {
    return !At.showsVideo && Number(vt.width || 0) > 0 && Number(vt.height || 0) > 0 && Number(vt.__panoFrameIdx || 0) > 0 ? vt : W instanceof HTMLVideoElement && Number(W.videoWidth || 0) > 0 && Number(W.videoHeight || 0) > 0 && Number(W.readyState || 0) >= 2 ? W : null;
  }
  function td() {
    vt.__panoFrameIdx = 0, Fe.backgroundDirty = !0;
  }
  function li() {
    if (!(W instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = qf(), s = rr(e, "background") && Xf(i)[0] || null, l = W2(s), u = [l, Gn.linkedVideoFile(e, dd())].filter(Boolean), h = u.find((C) => !Ce.failedSrcs.has(C)) || "";
    Ce.videoFailed = !h && u.length > 0;
    const m = h && h === l ? by() : null;
    Ce.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const y = Math.max(1, Number((m == null ? void 0 : m.fps) || (S ? _.timeline.fps : 24))), b = W.dataset.panoSrc === h && Number.isFinite(W.duration) ? W.duration : 0, k = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / y : b)), N = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(k * y))), A = !!(m != null && m.has_audio) || Yn(W);
    return h && W.dataset.panoSrc !== h ? (W.pause(), td(), W.dataset.panoSrc = h, W.loop = !S && !!I.videoTransport.loop, W.muted = !!I.videoTransport.muted, W.volume = Math.max(0, Math.min(1, Number(I.videoTransport.volume ?? 1))), W.src = h, W.load(), At.setSource(!0), S || At.seek(0)) : !h && W.getAttribute("src") && (W.pause(), W.removeAttribute("src"), delete W.dataset.panoSrc, W.load(), td(), Rr(), At.setSource(!1)), S || (W.loop = !!I.videoTransport.loop), h && !S && Ce.thumbnailSrc !== h && !Ce.thumbnailFailedSrcs.has(h) && Xo(h, k, y), h || Rr(), si({
      ready: !!h,
      visible: !!h && Zf(),
      duration: k,
      frameCount: N,
      fps: y,
      hasAudio: A,
      loop: !!W.loop,
      muted: !!W.muted,
      volume: Number(W.volume ?? I.videoTransport.volume ?? 1),
      thumbnailCount: I.videoTransport.thumbnailCount
    }), h || null;
  }
  function nd(i, s = null) {
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
  function Ql(i, s = null) {
    return ou(e, i, We, s || (() => he()));
  }
  function ec(i = null) {
    return rr(e, "external-sticker") ? Ql(Ns, i) : null;
  }
  function ci(i, s, l) {
    const u = Math.max(1, Number(s || 1)), h = Math.max(1, Number(l || 1)), m = q(Number(i || 30), 0.1, 179) * vr, y = 2 * Math.atan(Math.tan(m * 0.5) * (h / u));
    return q(y * zi, 0.1, 179);
  }
  function wy(i) {
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
      const y = Number(m.yaw_deg), b = Number(m.pitch_deg), k = Number(m.roll_deg), N = Number(m.hFOV_deg);
      if (![y, b, k, N].every((B) => Number.isFinite(B))) return null;
      let A = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(A, -0) && (A = 0);
      const C = {
        yaw_deg: A,
        pitch_deg: q(b, -89.9, 89.9),
        roll_deg: k,
        hFOV_deg: q(N, 0.1, 179)
      }, V = Number(l.source_aspect);
      return Number.isFinite(V) && V > 0 && (C.source_aspect = V), C;
    } catch {
      return null;
    }
  }
  function rd(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Wi(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ut(Number.isFinite(s) ? s : 0),
        pitch_deg: q(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: q(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function xy(i) {
    var b;
    if (!i || typeof i != "object") return rd(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let y = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const k = q(h, 0.1, 179) * vr, N = q(m, 0.1, 179) * vr, A = Math.tan(N * 0.5);
      if (Math.abs(A) > 1e-6) {
        const C = Math.tan(k * 0.5) / A;
        Number.isFinite(C) && C > 0 && (y = C);
      }
    }
    if (i != null && i.asset_id && ((b = _ == null ? void 0 : _.assets) != null && b[i.asset_id])) {
      const k = _.assets[i.asset_id], N = Number((k == null ? void 0 : k.w) || 0), A = Number((k == null ? void 0 : k.h) || 0);
      N > 0 && A > 0 && (y = N / A);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ut(Number.isFinite(s) ? s : 0),
        pitch_deg: q(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: q(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function Sy(i) {
    return Gn.linkedValue(e, i);
  }
  function ky(i, s, l) {
    const u = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : wy(s);
    if (u) {
      const y = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || u.source_aspect || 1), b = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(u.yaw_deg || 0),
        pitch_deg: Number(u.pitch_deg || 0),
        hFOV_deg: Number(u.hFOV_deg || 30),
        vFOV_deg: ci(u.hFOV_deg, y, b),
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
  function My() {
    const i = ec(() => {
      Qr(e, "image-loaded");
    }), s = rr(e, "external-sticker") ? nd(Jl("pano_sticker_input_pose"), null) : null;
    return y0(_, g0(e, { pose: s, image: i }));
  }
  function Ny() {
    var b;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((b = e.getInputLink(i)) == null ? void 0 : b.id) ?? null : null, l = ec(() => {
      Qr(e, "image-loaded");
    }), u = nd(Jl("pano_sticker_input_pose"), null), h = Sy("sticker_state"), m = Gn.externalStateHash(e, h), y = s == null ? null : ky(u, h, l);
    return m0(_, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: y,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function id(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? My() : Ny();
    if (s.changed) {
      const l = _.stickers.find(en);
      _.stickers = s.state.stickers, _.active = s.state.active, l && p.selectedId === l.id && !_.stickers.some((u) => u.id === l.id) && (p.selectedId = null, p.selectedIds = []), at(), Ve(), Ye();
    }
    he();
  }
  function Qo(i = {}) {
    const l = i.preservePanelValues !== !1 ? Nt(Ct()) : null;
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
  function Py() {
    if (t !== "cutout") return;
    const i = ze();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function tc() {
    if (t !== "cutout") return;
    const i = ze();
    vo(I.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Ne.camera : Ne.plus_circle
    });
  }
  function od() {
    const i = t === "cutout" && p.mode === "frame", s = !i && !!p.showGrid;
    vo(I.floatingButtons, "action", "reset-view", {
      disabled: r || i
    }), vo(I.floatingButtons, "action", "toggle-grid", {
      icon: s ? Ne.eye : Ne.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function Vr() {
    var l;
    const i = !!ze();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, I.viewButtons.forEach((u) => {
      const h = u.key === p.mode;
      u.pressed = h ? "true" : "false", u.visible = !(u.key === "frame" && t !== "cutout"), u.disabled = u.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && p.mode === "frame" ? ze() : null;
    I.frameRail.visible = !!s, I.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.visible = !!s && !r && s.locked !== !0, I.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, I.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), I.frameRollKnob.displayValue = _o(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((l = p.interaction) == null ? void 0 : l.kind) === "roll_frame", I.frameRollKnob.armed = !!s && p.altModifier === !0, I.frameRail.rollKnob = I.frameRollKnob, I.frameRail.aspectLabel = s ? Xr(s) : "", I.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((u) => ({
      value: u,
      label: u,
      active: !!s && String(Xr(s)) === u
    })), s || (I.frameRail.aspectOpen = !1), I.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!ze(), t === "cutout" && I.cameraPreview && (I.cameraPreview.visible = p.mode !== "frame", I.cameraPreview.expanded = !!p.outputPreviewExpanded, I.cameraPreview.settled = I.cameraPreview.settled === !0 && Fe.pendingStableLayoutFrames <= 0 && Fe.hasPresentedFrame), od(), Bd() ? _t(p.pointerPos) : L(p.mode === "pano" ? "grab" : "default");
  }
  function Ay() {
    const s = hd({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function ad() {
    return Xg({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, E.width, E.height);
  }
  function nc() {
    const i = `${p.viewYaw}|${p.viewPitch}|${p.viewFov}|${E.width}|${E.height}`;
    return Kt.key !== i && (Kt = { key: i, projection: qg(ad(), E.width, E.height) }), Kt.projection;
  }
  function ea(i) {
    const s = nc().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function rc(i, s) {
    return nc().ray(i, s);
  }
  function ui() {
    const i = E.width, s = E.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const b = s, k = b * l;
      return { x: (i - k) * 0.5, y: 0, w: k, h: b };
    }
    const h = i, m = h / l;
    return { x: 0, y: (s - m) * 0.5, w: h, h: m };
  }
  function sd(i) {
    var y;
    if (i && typeof i == "object" && (en(i) || i.external === !0))
      return ec(() => {
        Qr(e, "image-loaded");
      });
    const s = S ? ta(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = We.get(s);
    if (l) return l;
    const u = S ? Hg(i.source) : (y = _.assets) == null ? void 0 : y[s], h = U2(u);
    if (!h) return null;
    const m = new Image();
    return B0(m, h), m.onload = () => {
      U0(m, h), he();
    }, m.onerror = () => {
      W0(m, h), he();
    }, m.src = h, We.set(s, m), m;
  }
  function ta(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function ld(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const u = ot.get(l);
    if (u)
      return u.complete || u.width || u.naturalWidth, u;
    const h = new Image();
    return h.onload = () => {
      typeof s == "function" && s();
    }, h.src = l, ot.set(l, h), h;
  }
  function Cy(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Ft.get(s);
    if (l) return l.ready ? l : null;
    const u = ld(i, () => {
      const A = Ft.get(s);
      A && (A.ready = !1), he({ localOnly: !0 });
    });
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const h = Number(u.naturalWidth || u.width || 0), m = Number(u.naturalHeight || u.height || 0);
    if (h < 1 || m < 1) return null;
    const y = document.createElement("canvas");
    y.width = h, y.height = m;
    const b = y.getContext("2d", { willReadFrequently: !0 });
    if (!b) return null;
    b.clearRect(0, 0, h, m), b.drawImage(u, 0, 0, h, m);
    const k = b.getImageData(0, 0, h, m).data, N = { canvas: y, width: h, height: m, alpha: k, ready: !0 };
    return Ft.set(s, N), N;
  }
  function Iy(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = qn(Number(i.u || 0), h), b = Number(i.v || 0) - m, k = Math.max(0.02, Number(l || 1)), N = Number(u || 0) * vr, A = Math.cos(N), C = Math.sin(N), V = y / k, B = b / k, ne = V * A + B * C, J = -V * C + B * A;
    return {
      ...i,
      u: ((h + ne) % 1 + 1) % 1,
      v: m + J
    };
  }
  function Ey(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const u = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(u.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(u.dv || 0)
    }, y = Iy(
      m,
      h,
      Number(u.scale || 1),
      Number(u.rot_deg || 0)
    ), b = Number(l.u1 || 0) - Number(l.u0 || 0), k = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(b > 1e-6) || !(k > 1e-6)) return null;
    const N = qn(Number(y.u || 0), Number(l.u0 || 0)) / b, A = (Number(y.v || 0) - Number(l.v0 || 0)) / k;
    if (N < 0 || N > 1 || A < 0 || A > 1) return 0;
    const C = Cy(i);
    if (!C) return null;
    const V = q(Math.floor(N * C.width), 0, C.width - 1), B = q(Math.floor(A * C.height), 0, C.height - 1);
    return Number(C.alpha[(B * C.width + V) * 4 + 3] || 0);
  }
  function cd(i, s, l, u = null) {
    if (!(s != null && s.visible) || !Ur(l, s.corners)) return !1;
    const h = u || ur(l, performance.now()), m = Ey(i, h);
    return m === null ? !0 : m > 8;
  }
  function Oy() {
    var u, h, m, y, b, k, N, A;
    const i = ((h = (u = p.paintEngine) == null ? void 0 : u.getErpTarget) == null ? void 0 : h.call(u, Kl(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((b = (y = i == null ? void 0 : i.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : b.width) || 2048)), l = Math.max(1, Number(((k = i == null ? void 0 : i.descriptor) == null ? void 0 : k.height) || ((A = (N = i == null ? void 0 : i.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : A.height) || 1024));
    return { width: s, height: l };
  }
  function Fy() {
    var B, ne, J;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = zn(), u = `${Ul()}:${l.width}:${l.height}`;
    if (((B = p._activePaintEraserPreviewInfo) == null ? void 0 : B.cacheKey) === u)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = mn(s), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const te = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = fc(te, h.targetSpace, !0);
    }
    const y = na(l.width, l.height, { readback: !0 });
    if (!Pd(y, h, { w: l.width, h: l.height })) return null;
    const b = ((J = (ne = y.ctx) == null ? void 0 : ne.getImageData(0, 0, l.width, l.height)) == null ? void 0 : J.data) || null;
    if (!b) return null;
    let k = l.width, N = l.height, A = -1, C = -1;
    for (let te = 0; te < l.height; te += 1)
      for (let oe = 0; oe < l.width; oe += 1)
        b[(te * l.width + oe) * 4 + 3] <= 8 || (oe < k && (k = oe), te < N && (N = te), oe > A && (A = oe), te > C && (C = te));
    if (A < k || C < N)
      return p._activePaintEraserPreviewInfo = { cacheKey: u, value: null }, null;
    const V = {
      surface: y,
      bounds: { minX: k, minY: N, maxX: A, maxY: C },
      key: `${u}:${k}:${N}:${A}:${C}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: u, value: V }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), V;
  }
  function ao() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function Ty(i, s, l) {
    var u, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((u = i.item) != null && u.bbox)) {
      const m = i.item.bbox, y = ((h = i.item) == null ? void 0 : h.transform) || {}, b = Number(m.u0 || 0) + Number(y.du || 0), k = Number(m.u1 || 0) + Number(y.du || 0), N = Number(m.v0 || 0) + Number(y.dv || 0), A = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((b % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(q(N, 0, 1) * l),
        maxY: Math.ceil(q(A, 0, 1) * l),
        wraps: k - b >= 1 || b < 0 || k > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = sr(i.actionGroupId, "paint"), y = ai(i.actionGroupId, "paint", m);
      if (!y) return null;
      const b = y.centerUv.u - y.halfW, k = y.centerUv.u + y.halfW, N = y.centerUv.v - y.halfH, A = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((b % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(q(N, 0, 1) * l),
        maxY: Math.ceil(q(A, 0, 1) * l),
        wraps: k - b >= 1 || b < 0 || k > 1
      };
    }
    return null;
  }
  function Dy(i, s, l) {
    if (!i || !s) return !1;
    const u = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: l - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], h = u(i), m = u(s);
    return h.some((y) => m.some((b) => !(y.maxX < b.minX || b.maxX < y.minX || y.maxY < b.minY || b.maxY < y.minY)));
  }
  function Ly(i, s, l) {
    var Se, je, Ke, et, ye, ae, me;
    if (!i || !s || !((Se = l == null ? void 0 : l.surface) != null && Se.canvas) || s.type !== "rasterObject") return i;
    const u = Number(i.width || l.surface.canvas.width || 0), h = Number(i.height || l.surface.canvas.height || 0);
    if (u < 1 || h < 1) return i;
    const m = Ty(s, u, h);
    if (m && !Dy(m, l.bounds, u)) return i;
    const y = String(((je = s.item) == null ? void 0 : je.id) || s.id || ""), b = ((Ke = s.item) == null ? void 0 : Ke.transform) || {}, k = `${l.key}:${y}:${u}:${h}:${Number(b.du || 0).toFixed(6)}:${Number(b.dv || 0).toFixed(6)}:${Number(b.rot_deg || 0).toFixed(3)}:${Number(b.scale || 1).toFixed(4)}`, N = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(k)) return N.get(k);
    const A = q(Math.floor(Number(((et = l.bounds) == null ? void 0 : et.minX) || 0)), 0, Math.max(0, u - 1)), C = q(Math.floor(Number(((ye = l.bounds) == null ? void 0 : ye.minY) || 0)), 0, Math.max(0, h - 1)), V = q(Math.ceil(Number(((ae = l.bounds) == null ? void 0 : ae.maxX) || 0)), A, Math.max(0, u - 1)), B = q(Math.ceil(Number(((me = l.bounds) == null ? void 0 : me.maxY) || 0)), C, Math.max(0, h - 1)), ne = Math.max(1, V - A + 1), J = Math.max(1, B - C + 1), te = na(u, h, { readback: !0 });
    te.ctx.clearRect(0, 0, u, h), te.ctx.drawImage(i, 0, 0);
    const oe = te.ctx.getImageData(A, C, ne, J);
    te.ctx.save(), te.ctx.globalCompositeOperation = "destination-out", te.ctx.drawImage(l.surface.canvas, 0, 0), te.ctx.restore();
    const pe = te.ctx.getImageData(A, C, ne, J);
    let re = !1;
    for (let we = 0; we < ne * J; we += 1) {
      const Le = oe.data[we * 4 + 3], He = pe.data[we * 4 + 3];
      if (Le > He) {
        re = !0;
        break;
      }
    }
    return re ? (N.size > 64 && N.clear(), N.set(k, te.canvas), te.canvas) : (N.set(k, i), i);
  }
  function ud(i, s = null) {
    const l = on((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), u = (i == null ? void 0 : i.bbox) || null;
    if (!l || !u) return null;
    const h = ld(i, s);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: y } = Oy(), b = (i == null ? void 0 : i.transform) || {}, k = [
      l,
      m,
      y,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
      b.du,
      b.dv,
      b.rot_deg,
      b.scale,
      ra()
    ].join(":"), N = rn.get(k);
    if (N) return N;
    rn.size > 64 && rn.clear();
    const A = document.createElement("canvas");
    A.width = m, A.height = y;
    const C = A.getContext("2d");
    if (!C) return null;
    const V = Number(u.u0 || 0) * m, B = Number(u.v0 || 0) * y, ne = Math.max(1, (Number(u.u1 || 0) - Number(u.u0 || 0)) * m), J = Math.max(1, (Number(u.v1 || 0) - Number(u.v0 || 0)) * y), te = V + ne * 0.5 + Number(b.du || 0) * m, oe = B + J * 0.5 + Number(b.dv || 0) * y, pe = Number(b.rot_deg || 0) * vr, re = Math.max(0.01, Number(b.scale || 1));
    for (const Se of [-m, 0, m])
      C.save(), C.translate(te + Se, oe), C.rotate(pe), C.scale(re, re), C.drawImage(h, -ne * 0.5, -J * 0.5, ne, J), C.restore();
    return rn.set(k, A), A;
  }
  async function ic(i, s) {
    const l = await new Promise((b) => i.toBlob(b, "image/png")), u = new FormData();
    u.append("image", l, s), u.append("type", "input"), u.append("subfolder", "panorama_stickers"), u.append("overwrite", "1");
    const h = await jt.fetchApi("/upload/image", { method: "POST", body: u });
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
  function Ry() {
    const i = nm(_.painting), { width: s, height: l } = oa();
    return Px(_.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function fd() {
    const i = String(e.id ?? "0"), s = Ps.get(i);
    if (es && s) return s;
    const l = (async () => {
      var m, y, b, k, N, A, C, V, B, ne, J, te;
      const u = ia(), h = nm(_.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, Qa = u, On());
        return;
      }
      if (Qa !== u && !es) {
        es = !0;
        try {
          as();
          const oe = Kl(!1), pe = ((y = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, oe)) || null, re = ((b = pe == null ? void 0 : pe.displayPaint) == null ? void 0 : b.canvas) || null, Se = ((k = pe == null ? void 0 : pe.committedMask) == null ? void 0 : k.canvas) || null, je = Math.max(1, Number(((N = pe == null ? void 0 : pe.descriptor) == null ? void 0 : N.width) || (re == null ? void 0 : re.width) || (Se == null ? void 0 : Se.width) || 2048)), Ke = Math.max(1, Number(((A = pe == null ? void 0 : pe.descriptor) == null ? void 0 : A.height) || (re == null ? void 0 : re.height) || (Se == null ? void 0 : Se.height) || 1024));
          (!re && h.totalPaintCount > 0 || !Se && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((C = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== je || Number(((V = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : V.height) || 0) !== Ke) && (p._paintLayerSyncBlankSurface = na(je, Ke)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, je, Ke));
          const et = re || h.totalPaintCount > 0 && ((B = p._paintLayerSyncBlankSurface) == null ? void 0 : B.canvas) || null, ye = Se || h.totalMaskCount > 0 && ((ne = p._paintLayerSyncBlankSurface) == null ? void 0 : ne.canvas) || null;
          if (!et && !ye) return;
          let ae = null, me = null;
          const we = [];
          if (h.totalPaintCount > 0) {
            ae = await ic(et, `pano_paint_${i}.png`);
            for (const Le of oe) {
              const He = String(Le || "").trim();
              if (!He) continue;
              const Oe = ((te = (J = p.paintEngine) == null ? void 0 : J.getGroupDisplayCanvas) == null ? void 0 : te.call(J, He)) || null;
              if (!Oe) continue;
              const ft = He.replace(/[^a-zA-Z0-9_-]+/g, "_"), Xe = await ic(Oe, `pano_group_${i}_${ft}.png`);
              Xe && we.push({
                id: He,
                actionGroupId: He,
                image: Xe
              });
            }
          }
          h.totalMaskCount > 0 && (me = await ic(ye, `pano_mask_${i}.png`)), u === ia() && (_.painting_layer = {
            paint: ae,
            mask: me,
            groups: we,
            revision: u
          }, Qa = u, On());
        } catch (oe) {
          throw oe;
        } finally {
          es = !1;
        }
      }
    })();
    return Ps.set(i, l), l.finally(() => {
      Ps.get(i) === l && Ps.delete(i);
    }), l;
  }
  function oc() {
    if (t === "cutout") {
      const h = ed();
      if (h) return h;
      const m = au(
        e,
        ["erp_image", "bg_erp"],
        () => he(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !Uu(m) ? m : ou(e, "pano_input_images", We, () => he()) || m || null;
    }
    const i = ed();
    if (i) return i;
    const s = rr(e, "background") ? ou(e, "pano_input_images", We, () => he()) : null;
    if (s && !Uu(s)) return s;
    if (W instanceof HTMLVideoElement && W.dataset.panoSrc) return W;
    const l = dd();
    return au(e, l, () => he(), `background:${l.join("|")}`) || s || null;
  }
  function dd() {
    if (t === "cutout") return ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((u) => String((u == null ? void 0 : u.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function ac(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function $y() {
    if (Wn.failed) return { status: tr, detail: "renderer" };
    if (!Wn.ready) return { status: dr, detail: "boot" };
    let i = Bo;
    const s = [];
    if (p.showPanorama) {
      const l = oc();
      i = Ce.videoFailed ? tr : Bu(l, ac);
    }
    if (p.showObjects)
      for (const l of An()) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const u = sd(l);
        s.push(Bu(u, ac));
      }
    return F2({
      presented: Fe.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function so() {
    const i = new Set(
      (_.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(_.assets || {}).forEach((s) => {
      i.has(s) || (delete _.assets[s], We.delete(s));
    });
  }
  function sc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(q(i.y, -1, 1))
    };
  }
  function lc(i, s = null) {
    const { lon: l, lat: u } = sc(i), h = ui();
    let m = h.x + (l / (2 * Math.PI) + 0.5) * h.w;
    const y = h.y + (0.5 - u / Math.PI) * h.h;
    if (s !== null) {
      for (; m - s > h.w / 2; ) m -= h.w;
      for (; m - s < -h.w / 2; ) m += h.w;
    }
    return { x: m, y, z: 1 };
  }
  function ts(i) {
    const s = Nt(i), l = Yo(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), u = Math.tan(q(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * vr), h = Math.tan(q(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * vr);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: u,
      tanY: h
    };
  }
  function fi(i, s, l) {
    return tA(em(em(i.centerDir, tm(i.right, s)), tm(i.up, l)));
  }
  function hd(i) {
    const s = ts(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u, v: h }) => fi(s, u * s.tanX, h * s.tanY));
  }
  function pd(i, s, l) {
    const u = ts(i), h = (s * 2 - 1) * u.tanX, m = (1 - l * 2) * u.tanY;
    return fi(u, h, m);
  }
  function md(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: q((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Vy(i) {
    var k, N, A, C;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, u = Math.max(0.01, Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.scale) || 1)), h = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.rot_deg) || 0), m = Number(((A = i == null ? void 0 : i.transform) == null ? void 0 : A.du) || 0), y = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((V) => Wa(Ya(V, l, u, h), m, y));
  }
  function zy(i) {
    const s = on((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, u = (i == null ? void 0 : i.bbox) || {}, h = `${s}:${p.mode}:${ra()}:${u.u0}:${u.v0}:${u.u1}:${u.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (p.mode === "frame") {
      const m = ze(), y = m ? tn(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((E == null ? void 0 : E.width) || 0))}:${Math.round(Number((E == null ? void 0 : E.height) || 0))}`;
  }
  function jy(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = Vn(i) ? "frame" : gt(i) ? "sticker" : "item", u = Nt(i), h = [
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
      Cn(i) && Vi(i.clip, p.frame)
    ].join(":");
    if (p.mode === "frame") {
      const m = ze(), y = m ? tn(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((E == null ? void 0 : E.width) || 0))}:${Math.round(Number((E == null ? void 0 : E.height) || 0))}`;
  }
  function gd() {
    var i, s;
    return ((s = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function Hy() {
    return gd() ? `${Sd()}:mask_display` : "";
  }
  function yd(i) {
    if (!p.showMask) return i;
    const s = gd();
    if (!s) return i;
    const l = Hy(), u = i.reduce((y, b) => Math.max(y, Number((b == null ? void 0 : b.zIndex) || 0)), -1), h = (Array.isArray(_.stickers) ? _.stickers : []).reduce((y, b) => Math.max(y, Number((b == null ? void 0 : b.z_index) || 0)), -1), m = Math.max(u, h);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Gy() {
    var u, h;
    const i = Bl(!0), s = Fy(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const b = ((h = (u = p.paintEngine) == null ? void 0 : u.getGroupDisplayCanvas) == null ? void 0 : h.call(u, y)) || null;
        if (!b) continue;
        l.push({
          id: `paint_group:${y}`,
          source: b,
          revision: `${Sd()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, b = on((y == null ? void 0 : y.id) || m.id || "");
        if (!b) continue;
        const k = ud(y, () => he());
        if (!k) continue;
        const N = Ly(k, m, s), A = (y == null ? void 0 : y.transform) || {};
        l.push({
          id: `raster:${b}`,
          source: N,
          revision: [
            ia(),
            (s == null ? void 0 : s.key) || "",
            b,
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
    return yd(l);
  }
  function Ky() {
    return (p.showObjects ? Gy() : yd([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function ns() {
    return Dr || (Dr = By()), Dr;
  }
  function By() {
    const i = oc(), s = Ky(), l = { ..._.assets };
    for (const b of S ? [] : _.stickers) {
      const k = String((b == null ? void 0 : b.asset_id) || "");
      k && !l[k] && We.has(k) && (l[k] = { type: "comfy_image", filename: k });
    }
    const u = S ? _.stickers.map((b) => Si(b) ? { ...b, source: { kind: "file", filename: ta(b) } } : b) : _.stickers, h = JSON.stringify([u, Object.keys(l)]);
    cn.key !== h && (cn = { key: h, sceneState: Go({ ..._, stickers: u, assets: l, painting: null }) });
    const m = p.showObjects ? Jg(cn.sceneState, p.frame, _.stickers, {
      media: (b) => {
        const k = sd(b);
        return k ? { media: k, revision: Jf(k) } : null;
      },
      paintLayers: s
    }) : s.map((b) => ({ kind: "erp", ...b }));
    return { background: p.showPanorama && ac(i) ? { media: i, revision: Jf(i), coverage: Hn(_.coverage) } : null, layers: m };
  }
  function Uy() {
    if (!Fe.backgroundDirty && Fe.backgroundWasVisible) return;
    const { background: i, layers: s } = ns(), l = ue.width, u = ue.height, h = Wn.render({
      width: l,
      height: u,
      camera: ad(),
      background: i,
      layers: s
    }), m = ue.getContext("2d");
    m.clearRect(0, 0, l, u), !i && !s.length ? (m.fillStyle = "#070707", m.fillRect(0, 0, l, u)) : h && m.drawImage(h.canvas, h.x, h.y, h.width, h.height, 0, 0, l, u), Fe.backgroundWasVisible = !!h, Fe.backgroundDirty = !1, eo = null;
  }
  function bd(i, s, l, u) {
    const { background: h, layers: m } = ns();
    if (!h && !m.length) return !1;
    const y = Wn.render({ width: s.w, height: s.h, camera: js(l), background: h, layers: m, owner: u });
    return y ? (i.drawImage(y.canvas, y.x, y.y, y.width, y.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function Wy(i) {
    const s = ns(), l = JSON.stringify([i, ue.width, ue.height, gp(s)]);
    if (l === eo) return;
    const u = Wn.renderUnwrap({ width: i.w, height: i.h, ...s }), h = ue.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, ue.width, ue.height), u && h.drawImage(u.canvas, u.x, u.y, u.width, u.height, i.x, i.y, i.w, i.h), eo = u ? l : null, Fe.backgroundWasVisible = !1;
  }
  function Yy(i = !1) {
    const s = E.width, l = E.height, u = ui();
    if (M.globalAlpha = 1, M.lineWidth = 1, i || M.clearRect(0, 0, s, l), as(), Wy(u), p.showGrid && !p.fullscreen) {
      M.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = u.x + u.w * m / 16;
        M.beginPath(), M.moveTo(y, u.y), M.lineTo(y, u.y + u.h), M.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = u.y + u.h * m / 8;
        M.beginPath(), M.moveTo(u.x, y), M.lineTo(u.x + u.w, y), M.stroke();
      }
      M.strokeStyle = "rgba(250, 250, 250, 0.86)", M.lineWidth = 1.2, M.beginPath(), M.moveTo(u.x, u.y + u.h / 2), M.lineTo(u.x + u.w, u.y + u.h / 2), M.stroke(), M.fillStyle = "rgba(250, 250, 250, 0.42)", M.font = "500 11px Geist, sans-serif", M.textAlign = "center";
      const h = u.y + u.h * 0.57;
      M.fillText("Left", u.x + u.w * 0.25, h), M.fillText("Front", u.x + u.w * 0.5, h), M.fillText("Right", u.x + u.w * 0.75, h), M.fillText("Back", u.x + 38, h), M.fillText("Back", u.x + u.w - 38, h);
    }
  }
  function vd(i, s, l = 1) {
    let u = !1;
    M.strokeStyle = s, M.lineWidth = l, M.beginPath();
    for (const h of i) {
      const m = ea(h);
      if (!m) {
        u = !1;
        continue;
      }
      u ? M.lineTo(m.x, m.y) : (M.moveTo(m.x, m.y), u = !0);
    }
    M.stroke();
  }
  function Xy(i = !1) {
    const s = E.width, l = E.height;
    if (i || M.clearRect(0, 0, s, l), as(), Uy(), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push(Rn(h, y));
        vd(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push(Rn(y, h));
        vd(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const u = [
        { name: "Left", dir: Rn(-90, 0) },
        { name: "Front", dir: Rn(0, 0) },
        { name: "Right", dir: Rn(90, 0) },
        { name: "Back", dir: Rn(180, 0) }
      ];
      M.fillStyle = "rgba(250, 250, 250, 0.42)", M.font = "500 11px Geist, sans-serif", M.textAlign = "center", u.forEach((h) => {
        const m = ea(h.dir);
        m && M.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function qy(i, s = null, l = null, u = null) {
    if (p.mode === "frame") {
      const h = s || ze();
      if (!h) return [];
      const m = l || tn(h);
      return Pb(i, h, m);
    }
    return Ad(i, u);
  }
  function rs(i, s = null, l = null, u = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const y = Ad([i], h);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = lo(i);
    return m ? zr(m, s, l, u) : null;
  }
  function Jy(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), u = sr(l, i.layerKind), h = ai(l, i.layerKind, u), m = (h == null ? void 0 : h.centerUv) || Yl(l, i.layerKind, u), y = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, b = [], k = p.mode === "frame" ? ze() : null, N = k ? tn(k) : null;
    for (const re of u) {
      const Se = (re == null ? void 0 : re.geometry) || null, je = (Se == null ? void 0 : Se.geometryKind) === "lasso_fill" ? Se == null ? void 0 : Se.points : (Se == null ? void 0 : Se.processedPoints) || (Se == null ? void 0 : Se.rawPoints) || (Se == null ? void 0 : Se.points) || [], Ke = qy(je, k, N, y).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y));
      if (!Ke.length) continue;
      const et = hi(String((re == null ? void 0 : re.toolKind) || "pen")), ye = Fn[et] || Fn[Kr];
      b.push({
        points: Ke,
        closed: String((Se == null ? void 0 : Se.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((re == null ? void 0 : re.size) || 10) * Math.max(0.1, Number((ye == null ? void 0 : ye.sizeScale) ?? 1)) + 10),
        layerKind: String((re == null ? void 0 : re.layerKind) || i.layerKind || "paint")
      });
    }
    const A = rs(m, null, k, N, y);
    if (!A) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, re), re;
    }
    const V = Q0(h).map((re) => rs(re, A.x, k, N, y)).filter((re) => Number.isFinite(re == null ? void 0 : re.x) && Number.isFinite(re == null ? void 0 : re.y)).map((re) => ({ x: Number(re.x || 0), y: Number(re.y || 0) }));
    if (V.length < 4) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, re), re;
    }
    const B = (re, Se) => ({
      x: (Number((re == null ? void 0 : re.x) || 0) + Number((Se == null ? void 0 : Se.x) || 0)) * 0.5,
      y: (Number((re == null ? void 0 : re.y) || 0) + Number((Se == null ? void 0 : Se.y) || 0)) * 0.5,
      a: re,
      b: Se
    }), ne = B(V[0], V[1]), J = B(V[1], V[2]), te = B(V[2], V[3]), oe = B(V[3], V[0]), pe = {
      kind: "strokeGroup",
      center: { x: Number(A.x || 0), y: Number(A.y || 0) },
      corners: V,
      edgeMidpoints: [
        { edge: "top", ...ne },
        { edge: "right", ...J },
        { edge: "bottom", ...te },
        { edge: "left", ...oe }
      ],
      rotateStemBase: { x: ne.x, y: ne.y },
      rotateHandle: { x: ne.x, y: ne.y - 30 },
      strokePaths: b,
      visible: !0
    };
    return p._strokeGeomCache.set(s, pe), pe;
  }
  function Zy(i, s) {
    const l = p.mode === "frame" ? ze() : null, u = l ? tn(l) : null, h = md(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, y = rs(h, null, l, u, m), k = Vy(i).map((V) => rs(V, (y == null ? void 0 : y.x) ?? null, l, u, m)).filter((V) => Number.isFinite(V == null ? void 0 : V.x) && Number.isFinite(V == null ? void 0 : V.y));
    if (!Array.isArray(k) || k.length < 4) {
      const V = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(s, V), V;
    }
    const N = k.slice(0, 4).map((V) => ({ x: Number((V == null ? void 0 : V.x) || 0), y: Number((V == null ? void 0 : V.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: N.reduce((V, B) => V + Number(B.x || 0), 0) / N.length,
        y: N.reduce((V, B) => V + Number(B.y || 0), 0) / N.length
      },
      corners: N,
      visible: !0
    };
    return p._strokeGeomCache.set(s, C), C;
  }
  function zr(i, s = null, l = null, u = null, h = {}) {
    if (p.mode === "frame") {
      const A = l || ze(), C = u || tn(A);
      if (!A || !C) return null;
      const V = A ? aa(A, i) : null;
      return V ? {
        x: Number(C.x || 0) + Number(V.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(V.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return lc(i, s);
    const m = 1e-4, y = nc().project(i, m);
    if (!Number.isFinite(y.z) || y.z <= m && !(h != null && h.clipBehind)) return null;
    const b = E.width, k = E.height, N = Math.max(b, k) * 2;
    return {
      x: q(y.x, -N, b + N),
      y: q(y.y, -N, k + N),
      z: Math.max(y.z, m),
      rawZ: y.z,
      clipped: y.z <= m
    };
  }
  function Qy(i, s = []) {
    if (p.mode !== "pano" || gt(i)) return 1;
    const l = s.map((u) => Number((u == null ? void 0 : u.rawZ) ?? (u == null ? void 0 : u.z))).filter((u) => Number.isFinite(u));
    return l.length ? J2(0.035, 0.2, Math.min(...l)) : 1;
  }
  function eb(i) {
    if (Cn(i) && !Vi(i.clip, p.frame)) return { visible: !1 };
    const s = Nt(i), l = Rn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), u = p.mode === "frame" ? ze() : null, h = u ? tn(u) : null, m = p.mode === "pano" && (gt(i) || Vn(i)), y = m ? { clipBehind: !0 } : null, b = zr(l, null, u, h, y);
    if (!b) return { visible: !1 };
    const k = ts(i), A = hd(i).map((me) => zr(me, b.x, u, h, y)).filter((me) => Number.isFinite(me == null ? void 0 : me.x) && Number.isFinite(me == null ? void 0 : me.y));
    if (A.length < 4) return { visible: !1 };
    const C = fi(k, 0, k.tanY), V = fi(k, 0, k.tanY + Math.max(k.tanY * 0.43, 0.053)), B = zr(C, b.x, u, h, y);
    if (!B) return { visible: !1 };
    const ne = zr(V, (B == null ? void 0 : B.x) ?? b.x, u, h, y), J = ((ne == null ? void 0 : ne.x) ?? B.x) - B.x, te = ((ne == null ? void 0 : ne.y) ?? B.y) - B.y, oe = Math.hypot(J, te) || 1, pe = {
      x: B.x + J / oe * 30,
      y: B.y + te / oe * 30
    }, re = zr(fi(k, 0, k.tanY), b.x, u, h, y), Se = zr(fi(k, k.tanX, 0), b.x, u, h, y), je = zr(fi(k, 0, -k.tanY), b.x, u, h, y), Ke = zr(fi(k, -k.tanX, 0), b.x, u, h, y);
    if (!re || !Se || !je || !Ke) return { visible: !1 };
    const et = [
      b,
      ...A,
      B,
      ne,
      re,
      Se,
      je,
      Ke
    ];
    if (m && !et.some((me) => Number((me == null ? void 0 : me.rawZ) ?? (me == null ? void 0 : me.z)) > 1e-4)) return { visible: !1 };
    const ye = Qy(i, et), ae = [
      {
        edge: "top",
        x: re.x,
        y: re.y,
        a: { x: A[0].x, y: A[0].y },
        b: { x: A[1].x, y: A[1].y }
      },
      {
        edge: "right",
        x: Se.x,
        y: Se.y,
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
        x: Ke.x,
        y: Ke.y,
        a: { x: A[3].x, y: A[3].y },
        b: { x: A[0].x, y: A[0].y }
      }
    ];
    return {
      center: { x: b.x, y: b.y },
      corners: A.map((me) => ({ x: me.x, y: me.y })),
      edgeMidpoints: ae,
      rotateStemBase: { x: B.x, y: B.y },
      rotateHandle: pe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ye,
      visible: !0
    };
  }
  function qt(i) {
    if (Qt(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = oy(h, i.layerKind), y = p._strokeGeomCache.get(m);
      return y || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Jy(i, m));
    }
    if (hn(i)) {
      const h = zy(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), Zy(i, h));
    }
    const s = jy(i), l = p._strokeGeomCache.get(s);
    if (l) return l;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const u = eb(i);
    return p._strokeGeomCache.set(s, u), u;
  }
  function is(i, s, l, u = null) {
    const h = [];
    for (let m = 0; m <= l; m += 1) {
      const y = m / l;
      let b = 0, k = 0;
      s === 0 ? (b = y, k = 0) : s === 1 ? (b = 1, k = y) : s === 2 ? (b = 1 - y, k = 1) : (b = 0, k = 1 - y);
      const N = pd(i, b, k), A = p.mode === "unwrap" ? lc(N, u) : ea(N);
      A && h.push(A);
    }
    return h;
  }
  function tb(i, s) {
    const l = Nt(i), u = Rn(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), h = p.mode === "unwrap" ? lc(u) : null, m = h ? h.x : null, y = p.mode === "pano" ? 28 : 20, b = [
      is(i, 0, y, m),
      is(i, 1, y, m),
      is(i, 2, y, m),
      is(i, 3, y, m)
    ];
    Ff(M, b, { selected: s });
  }
  function nb() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], s = [...Array.isArray(_.stickers) ? _.stickers : []].sort((l, u) => Number(l.z_index || 0) - Number(u.z_index || 0));
    return [...i, ...s];
  }
  function cc() {
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
  function _d(i, s, l) {
    const u = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (u.length < 4) return;
    const h = q(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = M.globalAlpha;
    M.globalAlpha = m * h;
    const y = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", b = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", k = s ? 3.2 : 2.6;
    os(M, u), M.fillStyle = b, M.fill(), M.strokeStyle = y, M.lineWidth = k, M.stroke(), M.save(), M.strokeStyle = y, M.lineWidth = s ? 3.2 : 2.6, M.lineCap = "round";
    const N = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (u[0].x + u[1].x) * 0.5, y: (u[0].y + u[1].y) * 0.5 },
      { edge: "right", x: (u[1].x + u[2].x) * 0.5, y: (u[1].y + u[2].y) * 0.5 },
      { edge: "bottom", x: (u[2].x + u[3].x) * 0.5, y: (u[2].y + u[3].y) * 0.5 },
      { edge: "left", x: (u[3].x + u[0].x) * 0.5, y: (u[3].y + u[0].y) * 0.5 }
    ], A = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = s ? 12 : 9;
    N.forEach((V) => {
      const ne = N.find((pe) => (pe == null ? void 0 : pe.edge) === A[V == null ? void 0 : V.edge]) || {
        x: (u[0].x + u[1].x + u[2].x + u[3].x) * 0.25,
        y: (u[0].y + u[1].y + u[2].y + u[3].y) * 0.25
      }, J = ne.x - V.x, te = ne.y - V.y, oe = Math.hypot(J, te) || 1;
      M.beginPath(), M.moveTo(V.x, V.y), M.lineTo(V.x + J / oe * C, V.y + te / oe * C), M.stroke();
    }), M.restore(), M.globalAlpha = m;
  }
  function rb(i, s, l, u) {
    const h = q(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (Vn(i)) {
      _d(s, l, u);
      return;
    }
    if (gt(i)) {
      const y = M.globalAlpha;
      M.globalAlpha = y * fy(i) * h, p.mode === "frame" ? (M.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : u ? "rgba(255, 89, 89, 0.72)" : "#71717a", M.lineWidth = l ? 2 : 1, os(M, s.corners), M.stroke()) : tb(i, l), M.globalAlpha = y;
      return;
    }
    const m = M.globalAlpha;
    M.globalAlpha = m * h, M.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : u ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", os(M, s.corners), M.fill(), M.strokeStyle = l ? "rgba(255, 255, 255, 1)" : u ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", M.lineWidth = l ? 2.8 : 1.9, os(M, s.corners), M.stroke(), M.globalAlpha = m;
  }
  function wd(i, s, l) {
    if (gt(i)) {
      I0(M, s, { accent: l });
      return;
    }
    M.fillStyle = l, s.corners.forEach((u) => {
      M.beginPath(), M.arc(u.x, u.y, 6.5, 0, Math.PI * 2), M.fill();
    }), Vn(i) && (M.strokeStyle = l, M.lineCap = "round", M.lineWidth = 4, s.edgeMidpoints.forEach((u) => {
      var A, C, V, B;
      const h = (((A = u.b) == null ? void 0 : A.x) ?? u.x) - (((C = u.a) == null ? void 0 : C.x) ?? u.x), m = (((V = u.b) == null ? void 0 : V.y) ?? u.y) - (((B = u.a) == null ? void 0 : B.y) ?? u.y), y = Math.hypot(h, m) || 1, b = h / y, k = m / y, N = 10;
      M.beginPath(), M.moveTo(u.x - b * N, u.y - k * N), M.lineTo(u.x + b * N, u.y + k * N), M.stroke();
    }), M.lineCap = "butt"), Qt(i) || (M.strokeStyle = "rgba(250, 250, 250, 0.9)", M.lineWidth = 1.8, M.beginPath(), M.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), M.lineTo(s.rotateHandle.x, s.rotateHandle.y), M.stroke(), M.fillStyle = l, M.beginPath(), M.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), M.fill());
  }
  function ib() {
    var m;
    const i = p.mode === "frame" ? [] : lr(), s = i.length > 1, l = t === "cutout" ? nb() : Rt(), u = l.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${Vn(y) ? "frame" : Number((y == null ? void 0 : y.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== l || p._sortedItemsCache.orderKey !== u) && (p._sortedItemsCache = {
      src: l,
      orderKey: u,
      sorted: [...l]
    });
    const h = p._sortedItemsCache.sorted;
    for (const y of h) {
      const b = p.mode !== "frame" && !s && Wf(y);
      if (p.mode === "frame" && !b || !p.showObjects && !Vn(y)) continue;
      const k = gt(y), N = Vn(y), A = wn(y);
      if (!k && !N || Cn(y) && !Vi(y.clip, p.frame)) continue;
      const C = qt(y);
      if (t !== "stickers" && !C.visible)
        continue;
      const V = q(Number((C == null ? void 0 : C.visibilityAlpha) ?? 1), 0, 1);
      if (V <= 0.01) continue;
      const B = N && t === "cutout" && p.mode === "pano" ? q(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (M.save(), M.globalAlpha *= B, rb(y, C, b, A), b && C.visible) {
        const ne = A ? "#ff4d4f" : k && en(y) ? "#f59e0b" : "#0070f3", J = M.globalAlpha;
        M.globalAlpha = J * V, wd(y, C, ne), M.globalAlpha = J;
      }
      M.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !ze() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const y = p.cutoutPanoFrameVisual, b = q(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      M.save(), M.globalAlpha *= b, _d(y.geom, y.selected, y.locked), y.selected && wd(
        y.item,
        y.geom,
        y.locked ? "#ff4d4f" : "#0070f3"
      ), M.restore();
    }
    if (s) {
      const y = Xa(i);
      if (y != null && y.visible) {
        const b = Xl(i) ? "#ff4d4f" : "#0070f3";
        M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.95)", M.lineWidth = 2, M.setLineDash([6, 4]), M.beginPath(), M.moveTo(y.corners[0].x, y.corners[0].y);
        for (let k = 1; k < y.corners.length; k += 1) M.lineTo(y.corners[k].x, y.corners[k].y);
        M.closePath(), M.stroke(), M.setLineDash([]), M.fillStyle = b, y.corners.forEach((k) => {
          M.beginPath(), M.arc(k.x, k.y, 6.5, 0, Math.PI * 2), M.fill();
        }), M.restore();
      }
    } else
      i.forEach((y) => {
        if (!Qt(y) && !hn(y)) return;
        const b = qt(y);
        if (!(b != null && b.visible)) return;
        const k = wn(y) ? "#ff4d4f" : "#0070f3";
        M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.95)", M.lineWidth = 2, M.setLineDash([6, 4]), M.beginPath(), M.moveTo(b.corners[0].x, b.corners[0].y);
        for (let N = 1; N < b.corners.length; N += 1) M.lineTo(b.corners[N].x, b.corners[N].y);
        M.closePath(), M.stroke(), M.setLineDash([]), M.fillStyle = k, b.corners.forEach((N) => {
          M.beginPath(), M.arc(N.x, N.y, 6.5, 0, Math.PI * 2), M.fill();
        }), M.restore();
      });
    if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const y = qd(p.interaction.start, p.interaction.current);
      M.save(), M.strokeStyle = "rgba(255, 255, 255, 0.9)", M.fillStyle = "rgba(255, 255, 255, 0.08)", M.lineWidth = 1, M.setLineDash([5, 4]), M.beginPath(), M.rect(y.x0, y.y0, y.x1 - y.x0, y.y1 - y.y0), M.fill(), M.stroke(), M.restore();
    }
  }
  function xd(i, s = !1) {
    const l = q(Wi(i), 0.05, 20), u = s ? 320 : 220;
    return l >= 1 ? { width: u, height: Math.max(1, Math.round(u / l)) } : { width: Math.max(1, Math.round(u * l)), height: u };
  }
  function ob(i) {
    if (!ln || !i) return !1;
    const s = ln.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || ln.clientWidth || 0)), u = Math.round(Number(s.clientHeight || ln.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(u - Number(i.height || 0)) <= 1;
  }
  function ab() {
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
    const l = xd(i, !!p.outputPreviewExpanded);
    I.cameraPreview.width = l.width, I.cameraPreview.height = l.height;
    const u = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * u)), h: Math.max(1, Math.round(l.height * u)) };
    ($n.width !== h.w || $n.height !== h.h) && ($n.width = h.w, $n.height = h.h);
    const m = JSON.stringify([h, ii(i), gp(ns())]);
    let y = m === Lr;
    if (y || (s.clearRect(0, 0, h.w, h.h), y = bd(s, h, i, "camera_preview"), Lr = y ? m : null), !y) {
      I.cameraPreview.ready = !1, I.cameraPreview.label = oc() ? "Loading preview" : "Connect ERP image", I.cameraPreview.settled = !1;
      return;
    }
    const b = ob(l);
    I.cameraPreview.ready = !0, I.cameraPreview.label = b ? "" : "Loading preview", I.cameraPreview.settled = b && Fe.pendingStableLayoutFrames <= 0 && Fe.hasPresentedFrame;
  }
  function uc(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), u = Number(s.y || 0);
    return pd(i, l, u);
  }
  function lo(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, u = Math.cos(l);
    return Hl(u * Math.sin(s), Math.sin(l), u * Math.cos(s));
  }
  function sb(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function lb(i, s, l, u = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: pn(i, "widthScale", 1),
      pressureLike: pn(i, "pressureLike", 1)
    }, ...u, u: s, v: l };
  }
  function cb(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function fc(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const u = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (u) {
      let J = null;
      i.forEach((te) => {
        const oe = Number((te == null ? void 0 : te.u) || 0), pe = Number((te == null ? void 0 : te.v) || 0), re = (oe % 1 + 1) % 1, Se = J == null ? re : J + qn(re, (J % 1 + 1) % 1);
        h.set(te, { x: Se, y: pe }), J = Se;
      });
    }
    const m = (J) => !J || typeof J != "object" ? { x: 0, y: 0 } : h.get(J) || sb(J), y = (J, te, oe, pe = {}) => {
      const re = u ? (Number(te) % 1 + 1) % 1 : Number(te), Se = lb(J, re, oe, pe);
      return h.set(Se, { x: Number(te), y: Number(oe) }), Se;
    }, b = (J, te, oe) => {
      const pe = m(J), re = m(te);
      return y(J, Qn(pe.x, re.x, oe), Qn(pe.y, re.y, oe), {
        t: Qn(Number((J == null ? void 0 : J.t) || 0), Number((te == null ? void 0 : te.t) || 0), oe),
        widthScale: Qn(pn(J, "widthScale", 1), pn(te, "widthScale", 1), oe),
        pressureLike: Qn(pn(J, "pressureLike", 1), pn(te, "pressureLike", 1), oe)
      });
    };
    if (i.length === 1) {
      const J = m(i[0]);
      return [y(i[0], J.x, J.y)];
    }
    const k = cb(s, l), N = (J, te) => {
      const oe = [0];
      for (let ae = 1; ae < J.length; ae += 1) {
        const me = m(J[ae - 1]), we = m(J[ae]);
        oe.push(oe[ae - 1] + Math.hypot(we.x - me.x, we.y - me.y));
      }
      const pe = oe[oe.length - 1] || 0;
      if (pe <= 1e-8) {
        const ae = J[0], me = m(ae);
        return [y(ae, me.x, me.y)];
      }
      const re = [];
      let Se = 0;
      for (let ae = 0; ae <= pe + 1e-9; ae += te) {
        for (; Se < oe.length - 2 && oe[Se + 1] < ae; ) Se += 1;
        const me = oe[Se], we = oe[Se + 1], Le = Math.max(1e-8, we - me);
        re.push(b(J[Se], J[Se + 1], q((ae - me) / Le, 0, 1)));
      }
      const je = J[J.length - 1], Ke = m(je), et = re[re.length - 1], ye = et ? m(et) : null;
      return (!ye || Math.hypot(ye.x - Ke.x, ye.y - Ke.y) > te * 0.35) && re.push(y(je, Ke.x, Ke.y)), re;
    }, A = (J) => {
      if (!Array.isArray(J) || J.length < 3) return J ? J.slice() : [];
      const te = m(J[0]), oe = [y(J[0], te.x, te.y)];
      for (let Se = 0; Se < J.length - 1; Se += 1) {
        const je = J[Se], Ke = J[Se + 1], et = m(je), ye = m(Ke), ae = y(
          je,
          et.x * 0.75 + ye.x * 0.25,
          et.y * 0.75 + ye.y * 0.25,
          {
            t: Number(je.t || 0) * 0.75 + Number(Ke.t || 0) * 0.25,
            widthScale: pn(je, "widthScale", 1) * 0.75 + pn(Ke, "widthScale", 1) * 0.25,
            pressureLike: pn(je, "pressureLike", 1) * 0.75 + pn(Ke, "pressureLike", 1) * 0.25
          }
        ), me = y(
          je,
          et.x * 0.25 + ye.x * 0.75,
          et.y * 0.25 + ye.y * 0.75,
          {
            t: Number(je.t || 0) * 0.25 + Number(Ke.t || 0) * 0.75,
            widthScale: pn(je, "widthScale", 1) * 0.25 + pn(Ke, "widthScale", 1) * 0.75,
            pressureLike: pn(je, "pressureLike", 1) * 0.25 + pn(Ke, "pressureLike", 1) * 0.75
          }
        );
        oe.push(ae, me);
      }
      const pe = J[J.length - 1], re = m(pe);
      return oe.push(y(pe, re.x, re.y)), oe;
    }, C = N(i, k);
    if (C.length < 3) return C;
    const V = l ? 2 : 1;
    let B = C.slice();
    for (let J = 0; J < V; J += 1) B = A(B);
    return N(B, Math.max(k * 0.75, 55e-5));
  }
  function pn(i, s, l = 1) {
    const u = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(u) ? Math.max(0, u) : l;
  }
  function ub(i) {
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
  function na(i, s, l = {}) {
    const u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(i)), u.height = Math.max(1, Math.round(s));
    const h = u.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, u.width, u.height), h.imageSmoothingEnabled = !0), { canvas: u, ctx: h };
  }
  function ra() {
    const i = oa();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function ia() {
    const i = oa();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Sd() {
    const i = Ul(), s = ia();
    return i ? `${s}:${i}` : s;
  }
  function fb() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function db() {
    p.paintCompositeRevision += 1;
  }
  function hb() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function kd() {
    var i, s;
    p.paintEngineRevisionKey = null, (s = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, _), p.paintEngineRevisionKey = ra();
  }
  function Md() {
    _.painting_layer !== null && (_.painting_layer = null), Qa = "";
  }
  function Bt() {
    hb(), Fe.backgroundDirty = !0, Fe.dirty = !0;
  }
  function cr({ rebuildPaintEngine: i = !1 } = {}) {
    Md(), fb(), Bt(), i && kd();
  }
  function co() {
    Md(), db(), Bt();
  }
  function as() {
    var u;
    const i = oa(), s = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== s && (p.paintEngine = xu(i), p.paintEngineDescriptorKey = s, p.paintEngineRevisionKey = "");
    const l = ra();
    p.paintEngineRevisionKey !== l && (p.paintEngineRevisionKey = l, (u = p.paintEngine) == null || u.rebuildCommitted(_));
  }
  function oa() {
    const i = Math.max(1, P(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function zn() {
    return oa();
  }
  function pb(i, s, l, u, h = null) {
    const m = ub(i), y = pn(s, "widthScale", 1) * pn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * y) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * vr) * l * y) : Math.max(0.5, m.value / (2 * Math.PI) * l * y) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * y);
  }
  function mb(i, s, l = {}) {
    const u = String((s == null ? void 0 : s.layerKind) || "paint"), h = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, y = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * y : 1, u === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const b = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, k = m ? Math.max(0.28, Number(b.a ?? 1) * 0.88) : Math.max(0.12, Number(b.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(b.r || 0) * 255)}, ${Math.round(Number(b.g || 0) * 255)}, ${Math.round(Number(b.b || 0) * 255)}, ${k})`;
  }
  function gb(i, s, l) {
    const u = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(u) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), u, 0, Math.PI * 2), i.fill());
  }
  function yb(i, s, l, u, h = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(u.w, u.h) * 0.25;
    i.save(), mb(i, l, h);
    const y = (b) => gb(i, b, m);
    if (s.length === 1) {
      y(s[0]), i.restore();
      return;
    }
    for (let b = 0; b < s.length - 1; b += 1) {
      const k = s[b], N = s[b + 1];
      if (!k || !N) continue;
      const A = Number(k.x || 0), C = Number(k.y || 0), V = Number(N.x || 0), B = Number(N.y || 0), ne = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5))), J = Math.max(0.5, Math.min(m, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(A) || !Number.isFinite(C) || !Number.isFinite(V) || !Number.isFinite(B) || !Number.isFinite(ne) || !Number.isFinite(J)) continue;
      const te = V - A, oe = B - C, pe = Math.hypot(te, oe);
      if (!Number.isFinite(pe) || pe < 1e-6) {
        y(k);
        continue;
      }
      if (pe > Math.max(u.w, u.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(ne, J)), Se = Math.max(0.35, Math.min(re * 0.4, 2.25)), je = Math.max(1, Math.ceil(pe / Se));
      for (let Ke = 0; Ke <= je; Ke += 1) {
        const et = Ke / je;
        y({
          x: Qn(A, V, et),
          y: Qn(C, B, et),
          radiusPx: Qn(ne, J, et)
        });
      }
    }
    y(s[s.length - 1]), i.restore();
  }
  function bb(i, s, l, u) {
    yb(i, s, l, u, { preview: !1 });
  }
  function vb(i, s, l, u, h) {
    var b, k, N, A;
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
    i.beginPath(), i.moveTo(Number(((b = s[0]) == null ? void 0 : b[m]) || 0) * u.w, Number(((k = s[0]) == null ? void 0 : k[y]) || 0) * u.h);
    for (let C = 1; C < s.length; C += 1)
      i.lineTo(Number(((N = s[C]) == null ? void 0 : N[m]) || 0) * u.w, Number(((A = s[C]) == null ? void 0 : A[y]) || 0) * u.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Nd(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function _b(i, s) {
    const l = Nd(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((u) => ({
      x: Number((u == null ? void 0 : u.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((u == null ? void 0 : u.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: pb(i, u, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Pd(i, s, l = null) {
    var b, k, N, A;
    if (!(i != null && i.ctx) || !s) return !1;
    const u = l || { w: Number(((b = i.canvas) == null ? void 0 : b.width) || 0), h: Number(((k = i.canvas) == null ? void 0 : k.height) || 0) }, h = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((N = s == null ? void 0 : s.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((A = s == null ? void 0 : s.geometry) == null ? void 0 : A.geometryKind) || "") === "lasso_fill")
      return vb(i.ctx, Nd(h), h, u), !0;
    const y = _b(h, u);
    return y.length ? (bb(i.ctx, y, h, u), !0) : !1;
  }
  function wb(i, s, l, u = 8) {
    const h = new Uint8Array(s * l), m = [], y = new Int32Array(s * l), b = new Int32Array(s * l);
    for (let k = 0; k < l; k += 1)
      for (let N = 0; N < s; N += 1) {
        const A = k * s + N;
        if (h[A] || i[A] <= u) continue;
        let C = 0, V = 0;
        y[V] = N, b[V] = k, V += 1, h[A] = 1;
        const B = [];
        let ne = N, J = k, te = N, oe = k;
        for (; C < V; ) {
          const pe = y[C], re = b[C];
          C += 1, B.push({ x: pe, y: re }), pe < ne && (ne = pe), re < J && (J = re), pe > te && (te = pe), re > oe && (oe = re);
          const Se = [
            [(pe - 1 + s) % s, re],
            [(pe + 1) % s, re],
            [pe, re - 1],
            [pe, re + 1]
          ];
          for (const [je, Ke] of Se) {
            if (Ke < 0 || Ke >= l) continue;
            const et = Ke * s + je;
            h[et] || i[et] <= u || (h[et] = 1, y[V] = je, b[V] = Ke, V += 1);
          }
        }
        m.push({ pixels: B, minX: ne, minY: J, maxX: te, maxY: oe });
      }
    return m;
  }
  function xb(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((k) => Number((k == null ? void 0 : k.x) || 0)).filter((k) => Number.isFinite(k)))].sort((k, N) => k - N);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let u = -1, h = 0;
    for (let k = 0; k < l.length; k += 1) {
      const N = l[k], C = (k === l.length - 1 ? l[0] + s : l[k + 1]) - N - 1;
      C > u && (u = C, h = k);
    }
    const m = (l[(h + 1) % l.length] + s) % s;
    let y = 1 / 0, b = -1 / 0;
    for (const k of l) {
      const N = (k - m + s) % s;
      y = Math.min(y, N), b = Math.max(b, N);
    }
    return {
      startX: m,
      widthPx: Math.max(1, b - y + 1)
    };
  }
  function Sb(i, s, l = {}) {
    var N;
    const u = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (N = i == null ? void 0 : i.getContext) == null ? void 0 : N.call(i, "2d");
    if (!m || u < 1 || h < 1) return [];
    const y = m.getImageData(0, 0, u, h), b = new Uint8Array(u * h);
    for (let A = 0; A < b.length; A += 1) b[A] = y.data[A * 4 + 3];
    return wb(b, u, h, 8).map((A, C) => {
      const V = xb(A, u);
      if (!V) return null;
      const B = Number(V.widthPx || 0), ne = A.maxY - A.minY + 1, J = Number(V.startX || 0), te = document.createElement("canvas");
      te.width = B, te.height = ne;
      const oe = te.getContext("2d");
      if (!oe) return null;
      const pe = oe.createImageData(B, ne);
      return A.pixels.forEach(({ x: re, y: Se }) => {
        const je = (Se * u + re) * 4, Ke = (Number(re || 0) - J + u) % u, et = ((Se - A.minY) * B + Ke) * 4;
        pe.data[et + 0] = y.data[je + 0], pe.data[et + 1] = y.data[je + 1], pe.data[et + 2] = y.data[je + 2], pe.data[et + 3] = y.data[je + 3];
      }), oe.putImageData(pe, 0, 0), {
        id: wo("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + C * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: A.minY / h,
          u1: B / u,
          v1: (A.maxY + 1) / h
        },
        rasterDataUrl: te.toDataURL("image/png"),
        transform: {
          du: J / u,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function aa(i, s) {
    if (!i || !s) return null;
    const l = ts(i), u = su(s, l.centerDir);
    if (!Number.isFinite(u) || u <= 1e-6) return null;
    const h = su(s, l.right) / u, m = su(s, l.up) / u;
    return {
      x: (h / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function kb(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const l = ui();
      return i.map((u) => ({
        x: l.x + Number(u.u || 0) * l.w,
        y: l.y + Number(u.v || 0) * l.h
      }));
    }
    const s = i.map((l) => ea(lo(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Ad(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const u = ui();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, y = s == null ? m : Number(s || 0) + qn(m, s);
        return {
          x: u.x + y * u.w,
          y: u.y + Number(h.v || 0) * u.h
        };
      });
    }
    const l = i.map((u) => ea(lo(u))).filter(Boolean);
    return l.every((u) => Number(u.z || 0) > 0) ? l.map((u) => ({ x: Number(u.x || 0), y: Number(u.y || 0) })) : [];
  }
  function Mb(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l], h = i[(l + 1) % i.length];
      if (!u || !h || !Number.isFinite(u.x) || !Number.isFinite(u.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(u.x), Number(h.y) - Number(u.y)) > s) return !1;
    }
    return !0;
  }
  function Nb(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const u = [];
    for (const h of i) {
      const m = lo(h), y = aa(s, m);
      if (!y) return [];
      u.push({
        x: Number(l.x || 0) + Number(y.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(y.y || 0) * Number(l.h || 0)
      });
    }
    return Mb(u, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? u : [];
  }
  function Pb(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const u = [];
    for (const h of i) {
      const m = lo(h), y = aa(s, m);
      y && u.push({
        x: Number(l.x || 0) + Number(y.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(y.y || 0) * Number(l.h || 0)
      });
    }
    return u;
  }
  function Ab() {
    const i = ze(), s = yc(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: u, shot: h } = Dx(i, s, { width: E.width, height: E.height }), m = Cb(l);
    return M.save(), M.fillStyle = "#0a0a0a", M.fillRect(0, 0, E.width, E.height), bd(M, u, h) || (M.fillStyle = "rgba(255, 255, 255, 0.03)", M.fillRect(u.x, u.y, u.w, u.h)), M.restore(), M.save(), M.fillStyle = "rgba(0, 0, 0, 0.58)", M.beginPath(), M.rect(0, 0, E.width, E.height), M.roundRect(l.x, l.y, l.w, l.h, m), M.fill("evenodd"), M.restore(), M.save(), M.strokeStyle = $2, M.globalAlpha = 0.62, M.lineWidth = 2, M.beginPath(), M.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), M.stroke(), M.restore(), !0;
  }
  function Cb(i) {
    const s = Math.max(1e-6, Number(Fe.frameCanvasScale || 1));
    return Math.min(Ua * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function jr() {
    var s;
    const i = p.mode === "frame" ? ze() : null;
    I.frameRollKnob.visible = !!i && !r && i.locked !== !0, I.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), I.frameRollKnob.displayValue = _o(I.frameRollKnob.rollDeg), I.frameRollKnob.dragging = ((s = p.interaction) == null ? void 0 : s.kind) === "roll_frame", I.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function Ib() {
    var k, N;
    if (((k = p.interaction) == null ? void 0 : k.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, s = (N = i == null ? void 0 : i.geometry) == null ? void 0 : N.points;
    let l;
    if (p.mode === "frame") {
      const A = ze(), C = tn(A);
      l = Nb(s, A, C);
    } else
      l = kb(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const u = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), y = Math.round(Number(h.g || 0) * 255), b = Math.round(Number(h.b || 0) * 255);
    M.save(), M.beginPath(), M.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let A = 1; A < l.length; A++) M.lineTo(Number(l[A].x || 0), Number(l[A].y || 0));
    M.closePath(), u ? (M.lineWidth = 2, M.setLineDash([6, 6]), M.lineDashOffset = 0, M.strokeStyle = "rgba(0,0,0,0.96)", M.stroke(), M.lineDashOffset = -6, M.strokeStyle = "rgba(255,255,255,0.96)", M.stroke(), M.setLineDash([]), M.lineDashOffset = 0) : (M.lineWidth = 1.5, M.setLineDash([6, 4]), M.strokeStyle = `rgba(${m},${y},${b},1)`, M.stroke(), M.setLineDash([])), M.restore();
  }
  function Eb() {
    const i = p.frameRollOverlayVisual, s = q(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = tn(i.shot);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * vr, m = Math.hypot(l.w, l.h) * 0.55, y = Math.cos(h) * m, b = Math.sin(h) * m;
    M.save(), M.globalAlpha *= s, M.beginPath(), M.rect(l.x, l.y, l.w, l.h), M.clip(), M.translate(u.x, u.y), M.rotate(h);
    const k = Math.max(12, Math.min(l.w, l.h) / 6);
    M.beginPath();
    for (let N = -m; N <= m; N += k)
      M.moveTo(N, -m), M.lineTo(N, m);
    for (let N = -m; N <= m; N += k)
      M.moveTo(-m, N), M.lineTo(m, N);
    M.lineWidth = 1, M.strokeStyle = "rgba(255, 255, 255, 0.22)", M.stroke(), M.setTransform(1, 0, 0, 1, 0, 0), M.beginPath(), M.moveTo(u.x - y, u.y - b), M.lineTo(u.x + y, u.y + b), M.lineWidth = 1.5, M.setLineDash([8, 6]), M.strokeStyle = "rgba(255, 255, 255, 0.92)", M.shadowColor = "rgba(0, 0, 0, 0.8)", M.shadowBlur = 3, M.stroke(), M.setLineDash([]), M.restore();
  }
  function Ob() {
    return t !== "cutout" || !ze() ? 0 : j2;
  }
  function Fb() {
    const i = q(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const s = ze(), l = s ? qt(s) : null, u = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    l != null && l.visible && u && (p.cutoutPanoDimCorners = u), s && (l != null && l.visible) && u && (p.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: Wf(s),
      locked: wn(s)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? u : h ? p.cutoutPanoDimCorners || [] : [];
    if (M.save(), M.fillStyle = `rgba(0, 0, 0, ${i})`, M.beginPath(), M.rect(0, 0, E.width, E.height), m.length >= 4) {
      M.moveTo(m[0].x, m[0].y);
      for (let y = 1; y < 4; y += 1) M.lineTo(m[y].x, m[y].y);
      M.closePath();
    }
    M.fill("evenodd"), M.restore();
  }
  function Cd() {
    Dr = null, p.mode === "frame" ? (Fe.frameSafeRect = u1(), Ab()) : p.mode === "unwrap" ? Yy(!1) : Xy(!1), Fb(), t === "cutout" && ab(), ib(), jr(), Ib(), Eb(), I.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && Ye(), Fe.hasPresentedFrame || (Fe.hasPresentedFrame = !0, ue.style.opacity = "1"), t === "cutout" && I.cameraPreview && (I.cameraPreview.settled = Fe.pendingStableLayoutFrames <= 0 && Fe.hasPresentedFrame && p.mode !== "frame");
    const i = $y();
    I.stageStatus = i.status, I.stageStatusDetail = i.detail, i.status === dr ? (fe == null || fe.removeAttribute("data-stage-ready"), fe == null || fe.setAttribute("data-stage-loading-kind", i.detail)) : (fe == null || fe.setAttribute("data-stage-ready", ""), fe == null || fe.removeAttribute("data-stage-loading-kind"));
  }
  function Tb(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Db() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = iy();
  }
  function he(i = {}) {
    var b, k, N, A, C, V, B, ne, J, te;
    const s = !!i.localOnly, l = i.externalSync === !0, u = String(i.cause || ""), h = String(((b = p.interaction) == null ? void 0 : b.kind) || "");
    (!s || h === "view" || h === "pan_frame" || Tb() || !!((k = p.viewTween) != null && k.active) || u === "mode" || u === "frame_view" || u === "cutout_frame") && (Fe.backgroundDirty = !0), s && Gf() && (p.livePaintInteractionRevision += 1, Fe.backgroundDirty = !0), (!s || u === "selection" || u === "mode" || u === "cutout_frame") && (tc(), Vr()), Db(), l && ((A = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || A.call(N), (C = e.setDirtyCanvas) == null || C.call(e, !0, !1)), l && !s && ((B = (V = e.graph) == null ? void 0 : V.setDirtyCanvas) == null || B.call(V, !0, !0), (te = (J = (ne = Ar) == null ? void 0 : ne.canvas) == null ? void 0 : J.setDirty) == null || te.call(J, !0, !0)), Fe.dirty = !0;
  }
  function Id() {
    const i = E.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return E.width !== s || E.height !== l || ue.width !== s || ue.height !== l ? (E.width = s, E.height = l, ue.width = s, ue.height = l, Fe.backgroundDirty = !0, Fe.dirty = !0, t === "cutout" && (Fe.pendingStableLayoutFrames = Math.max(Number(Fe.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Lb(i = performance.now()) {
    var m, y;
    Fe.lastTickTs = i;
    const s = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    s != null && s.shot && (p.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = l, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const b = q(
        (i - Number(p.frameRollOverlayStartTs || i)) / H2,
        0,
        1
      );
      p.frameRollOverlayAlpha = Qn(
        Number(p.frameRollOverlayFrom || 0),
        l,
        As(b)
      ), b >= 1 && (p.frameRollOverlayAlpha = l, l === 0 && (p.frameRollOverlayVisual = null)), Fe.dirty = !0;
    }
    const u = Ob();
    if (Math.abs(u - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = u, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - u) > 1e-6) {
      const b = q(
        (i - Number(p.cutoutPanoDimStartTs || i)) / Zp,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Qn(
        Number(p.cutoutPanoDimFrom || 0),
        u,
        As(b)
      ), b >= 1 && (p.cutoutPanoDimAlpha = u), b >= 1 && u === 0 && (p.cutoutPanoDimCorners = null), Fe.dirty = !0;
    }
    const h = t === "cutout" && ze() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const b = q(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / Zp,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Qn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        As(b)
      ), b >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), Fe.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const b = Math.max(1, Number(p.outputPreviewAnimDurationMs)), k = q((i - Number(p.outputPreviewAnimStartTs || 0)) / b, 0, 1), A = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? q2(k) : eA(k);
      p.outputPreviewAnim = Qn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, A), Fe.dirty = !0, k >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((y = p.viewTween) != null && y.active) {
      const b = p.viewTween, k = q((i - b.startTs) / b.durationMs, 0, 1), N = As(k);
      p.viewYaw = Ut(b.startYaw + b.deltaYaw * N), p.viewPitch = b.startPitch + (b.targetPitch - b.startPitch) * N, p.viewFov = b.startFov + (b.targetFov - b.startFov) * N, Fe.backgroundDirty = !0, Fe.dirty = !0, k >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(un.state.inertia.vx || 0), p.viewInertia.vy = Number(un.state.inertia.vy || 0), p.viewInertia.active = !!un.state.inertia.active, un.stepInertia(i) && (p.viewInertia.vx = Number(un.state.inertia.vx || 0), p.viewInertia.vy = Number(un.state.inertia.vy || 0), p.viewInertia.active = !!un.state.inertia.active, Fe.backgroundDirty = !0, Fe.dirty = !0), Fe.pendingStableLayoutFrames > 0 && (Fe.pendingStableLayoutFrames -= 1, Fe.dirty = !0), Fe.dirty) {
      if (Fe.pendingStableLayoutFrames > 0)
        return;
      Fe.dirty = !1, Cd();
    }
  }
  function Ed(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Fe.tickErrorSignature !== l && (Fe.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), I.stageStatus = tr, I.stageStatusDetail = "frame", fe == null || fe.setAttribute("data-stage-ready", ""), fe == null || fe.removeAttribute("data-stage-loading-kind");
    }
  }
  function Od(i = performance.now()) {
    Fe.running && (Ed(() => Lb(i)), Fe.running && (Fe.rafId = requestAnimationFrame(Od)));
  }
  function Rb() {
    !Fe.running || !Id() || Ed(() => {
      Fe.dirty = !1, Cd();
    });
  }
  const Fd = new ResizeObserver(Rb);
  Fd.observe(E);
  function $b() {
    Fe.running = !1, Fe.rafId && cancelAnimationFrame(Fe.rafId), Fe.rafId = 0, Fd.disconnect();
  }
  function rt() {
    r || S && _.stickers.some(Si) || (p.historyController.commitActionGroup(JSON.stringify(dp(_))), xc());
  }
  function dc(i) {
    var h;
    if (r) return;
    Jn();
    const s = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (xc(), !s) return;
    const l = Nx(_, s), u = (h = _.timeline) == null ? void 0 : h.fps;
    Object.keys(_).forEach((m) => delete _[m]), Object.assign(_, l.state), S && _.timeline.fps !== u && At.seek(Math.round(p.frame * _.timeline.fps / u)), p.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], l.paintingChanged ? cr() : Bt(), En(), Ve(), On(), he({ cause: "cutout_frame" });
  }
  function Td() {
    var l, u;
    const i = Array.isArray((l = p.historyController) == null ? void 0 : l.entries) ? p.historyController.entries : [], s = Number((u = p.historyController) == null ? void 0 : u.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function En() {
    Pn();
    const i = EM({
      editor: p,
      swatches: Ys,
      paintColorPopOpen: H ? !H.hidden : !1,
      colorToCss: _r,
      colorsApproximatelyEqual: Xs,
      rgb01ToHsv: uu,
      hsv01ToRgb: cu,
      getBrushPresetIdForTool: hi,
      isActiveLassoTool: hy
    });
    if (Object.assign(I.paintDock, i), vy(), !i.visible) {
      H && (H.hidden = !0);
      return;
    }
    Me && (clearTimeout(Me), Me = 0), $ && (!i.colorEnabled && H && !H.hidden && (Me = window.setTimeout(() => {
      H.hidden = !0, I.paintDock.colorPopOpen = !1, Me = 0;
    }, 170)), H && (H.style.setProperty("--picker-hue-color", i.pickerHueColor), H.style.setProperty("--picker-sat", i.pickerSat), H.style.setProperty("--picker-val", i.pickerVal), H.style.setProperty("--picker-hue", i.pickerHue)), be && (be.style.left = i.pickerSvLeft, be.style.top = i.pickerSvTop), ve && (ve.style.left = i.pickerHueLeft));
  }
  function uo() {
    const i = Nt(t === "cutout" && p.mode === "frame" ? ze() : Ct());
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
    var et, ye, ae, me;
    if (Hr(), o) return;
    _.ui_settings = _.ui_settings || {};
    const i = IM(_.ui_settings);
    if (a) {
      I.sidePanel = OM({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: Hn
      });
      return;
    }
    const s = Ct(), l = t === "cutout" && p.mode === "frame" ? ze() : null, u = l || s, h = l ? [l] : lr(), m = l ? "shot" : qa();
    if (h.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), u && m !== "stroke") {
      const we = Nt(u);
      p.panelLastValues = {
        yaw_deg: Number(we.yaw_deg || 0),
        pitch_deg: Number(we.pitch_deg || 0),
        hFOV_deg: Number(we.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(we.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(we.rot_deg || 0),
        roll_deg: Number(we.roll_deg || 0),
        aspect_id: Xr(we)
      }, Cn(u) && (p.panelLastValues.opacity = zl(u, p.frame).opacity * 100);
    }
    const y = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), b = m === "stroke" ? null : u, k = S && p.inspectCamera, N = k ? Ex(_.camera, p.frame) : Cn(b) ? p.panelLastValues : b || y, A = k || !!b && !wn(b);
    p.panelWasEnabled = A, tc();
    let C = null;
    if (l) {
      const we = ql({ item: l, kind: "shot", label: "Frame" });
      C = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: we.label,
        currentIcon: we.icon || null,
        items: [{
          id: String(l.id || ""),
          label: we.label,
          icon: we.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const we = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Rt().forEach((Oe, ft) => {
        var It, Vt;
        if (!Oe) return;
        const Xe = S ? Gg(Oe) : en(Oe) ? String(Oe.id || tu) : String(((Vt = (It = _.assets) == null ? void 0 : It[Oe.asset_id]) == null ? void 0 : Vt.name) || Oe.asset_id || Oe.id), $t = `${ft + 1}. ${Xe}${en(Oe) && oo(Oe) ? " (hidden)" : ""}`, fn = ql({ item: Oe, label: $t, kind: "image" });
        we.push({ id: Oe.id, label: fn.label, icon: fn.icon, item: Oe, kind: "image" });
      }) : Yf().forEach((Oe) => {
        if (!(Oe != null && Oe.item)) return;
        const ft = ql(Oe);
        we.push({ id: Oe.item.id, label: ft.label, icon: ft.icon, item: Oe.item, kind: Oe.kind });
      });
      const Le = (b == null ? void 0 : b.id) || "", He = k ? { label: "Camera", icon: Ne.camera } : we.find((Oe) => Oe.id === Le) || we[0];
      C = {
        label: "Selection",
        open: !1,
        disabled: we.length <= 1,
        currentLabel: He.label,
        currentIcon: He.icon || null,
        items: we.map((Oe) => ({
          id: Oe.id,
          label: Oe.label,
          icon: Oe.icon || null,
          active: Oe.id === Le
        }))
      };
    }
    const V = [], B = (we, Le, He, Oe, ft) => {
      const Xe = q(Number(N[we] || 0), He, Oe);
      V.push({
        key: we,
        label: Le,
        min: He,
        max: Oe,
        step: ft,
        value: Xe,
        displayValue: _o(Xe),
        fillPct: q((Xe - He) / Math.max(1e-6, Oe - He) * 100, 0, 100),
        enabled: A && !r
      });
    }, ne = [];
    k ? (B("position_x", "X", -100, 100, 0.01), B("position_y", "Y", -100, 100, 0.01), B("position_z", "Z", -100, 100, 0.01), B("yaw_deg", "Yaw", -180, 180, 0.1), B("pitch_deg", "Pitch", -90, 90, 0.1), B("roll_deg", "Roll", -180, 180, 0.1), B("hFOV_deg", "FOV", 1, 179, 0.1)) : h.length > 1 ? (ne.push(`Selected objects: ${h.length}`), ne.push("Multi-selection supports z-order and delete.")) : (B("yaw_deg", "Yaw", -180, 180, 0.1), B("pitch_deg", "Pitch", -90, 90, 0.1), B("hFOV_deg", "H FOV", 1, 179, 0.1), B("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? B("rot_deg", "Rotation", -180, 180, 0.1) : B("roll_deg", "Roll", -180, 180, 0.1), S && B("opacity", "Opacity", 0, 100, 1));
    const J = Array.isArray((ye = (et = _ == null ? void 0 : _.painting) == null ? void 0 : et.paint) == null ? void 0 : ye.strokes) ? _.painting.paint.strokes.length : 0, te = Array.isArray((me = (ae = _ == null ? void 0 : _.painting) == null ? void 0 : ae.mask) == null ? void 0 : me.strokes) ? _.painting.mask.strokes.length : 0, oe = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((we) => String((we == null ? void 0 : we.name) || "")) : [], pe = X2(
      e,
      oe.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), re = !!String((pe == null ? void 0 : pe.src) || "").trim() || Xf("pano_input_images").length > 0, Se = Rt().length > 0 || J > 0, je = te > 0, Ke = [
      { key: "mask", label: "Mask", icon: Ne.circle_dashed_tool, visible: !!p.showMask, enabled: je },
      { key: "objects", label: "Paint / Images", icon: Ne.image, visible: !!p.showObjects, enabled: Se },
      { key: "panorama", label: "Panorama", icon: Ne.globe, visible: !!p.showPanorama, enabled: re }
    ].map((we) => ({
      ...we,
      ariaLabel: `Toggle ${we.label.toLowerCase()}`,
      tip: we.visible ? "Hide" : "Show"
    }));
    I.sidePanel = FM({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: C,
      enabled: A,
      selectedKind: k ? "camera" : m,
      selectedItems: h,
      params: V,
      notes: ne,
      visibilityRows: Ke,
      uiSettings: i,
      normalizeCoverageValue: Hn
    });
  }
  function Hr() {
    if (!S || r) return;
    const i = hc(), s = Ee.selection, l = s && di(s.owner);
    if (s) {
      const h = l ? sa(s) : [];
      s.frames = s.frames.filter((m) => h.some((y) => l[y].keyframes.some((b) => b.frame === m))), s.frames.length || (Ee.selection = null);
    }
    const u = _.timeline.fps;
    I.timeline = LM(_, {
      frame: p.frame,
      span: i,
      selection: Ee.selection,
      selectedId: p.inspectCamera ? "camera" : p.selectedId,
      expanded: Ee.expanded ?? Eu(_),
      openRows: Ee.openRows,
      audio: zb() && I.videoTransport.hasAudio ? { muted: W.muted } : null,
      playing: At.playing,
      label: `${p.frame}f · ${(p.frame / u).toFixed(2)}s`,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: iu(e) !== null || Hx(e, ["bg_media", "sticker"])
    }), I.easing = Ee.selection ? RM(l, sa(Ee.selection), Ee.selection.frames, la(Ee.selection.owner)) : null;
  }
  function hc(i = null) {
    const s = _.timeline.fps, l = I.videoTransport.ready ? Math.round(Number(I.videoTransport.duration || 0) * s) : 0;
    return Lg(_, { minimum: Math.round(s * 5), frames: l, openClip: i });
  }
  function di(i) {
    return i === "camera" ? _.camera : _.stickers.find((s) => s.id === i) || null;
  }
  function sa(i) {
    return i.lane ? [i.lane] : Qi(di(i.owner));
  }
  function la(i) {
    if (i === "camera") return 0;
    const { clip: s } = di(i);
    return s.start - s.in;
  }
  function ss(i) {
    const s = di(i);
    return !!s && s.locked !== !0;
  }
  function Dd() {
    const i = Ct();
    Cn(i) && !Vi(i.clip, p.frame) && gr(null);
  }
  function Vb(i) {
    const s = Math.max(0, Math.round(i));
    s !== p.frame && (p.frame = s, Dd(), Bt(), Ve(), Ye(), he());
  }
  function zb() {
    return W instanceof HTMLVideoElement && !!W.getAttribute("src");
  }
  function jb(i) {
    li(), At.seek(i);
  }
  function Jn() {
    S && At.stop();
  }
  function pc() {
    li(), At.toggle();
  }
  function fo() {
    Bt(), Ve(), Ye(), he();
  }
  function ki() {
    rt(), at(), fo();
  }
  function Hb() {
    const { selection: i } = Ee;
    ss(i.owner) && (Jn(), hx(di(i.owner), sa(i), i.frames, p.frame - la(i.owner)), Ee.selection = null, ki());
  }
  function Ld(i) {
    Jn();
    const s = Math.round(p.frame * i / _.timeline.fps);
    Ax(_, i), Ee.selection = null, At.seek(s), ki();
  }
  function Gb() {
    const i = iu(e);
    i !== null && i !== _.timeline.fps && Ld(i);
  }
  function Kb(i) {
    if (!(r || !S)) {
      if (i.type === "seek") {
        i.phase === "start" && li(), At.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        pc();
        return;
      }
      if (i.type === "mute") {
        Qf(), Hr();
        return;
      }
      if (i.type === "toggle-expanded") {
        Ee.expanded = !(Ee.expanded ?? Eu(_)), Ee.selection = null, Hr();
        return;
      }
      if (i.type === "toggle-row") {
        Ee.openRows.has(i.id) ? Ee.openRows.delete(i.id) : Ee.openRows.add(i.id), Hr();
        return;
      }
      if (i.type === "select-row") {
        const s = _.stickers.find((l) => l.id === i.id);
        s && !Vi(s.clip, p.frame) && jb(s.clip.start), gr(Rt().find((l) => l.id === i.id) || null), p.inspectCamera = i.id === "camera", Ee.selection = null, Ve(), Ye(), he();
        return;
      }
      if (i.type === "select-keys") {
        const s = la(i.owner), l = i.frames.map((m) => m - s), u = Ee.selection, h = (u == null ? void 0 : u.owner) === i.owner && u.lane === i.lane;
        if (i.additive && h) {
          const m = new Set(u.frames);
          for (const y of l)
            m.has(y) ? m.delete(y) : m.add(y);
          u.frames = [...m].sort((y, b) => y - b);
        } else
          Ee.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        Hr();
        return;
      }
      if (i.type === "move-keys") {
        const s = Ee.selection;
        if (!s || !ss(s.owner)) return;
        const l = di(s.owner), u = sa(s);
        if (i.phase === "start") {
          Jn(), Ee.drag = { keyframes: u.map((y) => structuredClone(l[y].keyframes)), frames: s.frames };
          return;
        }
        const { drag: h } = Ee;
        if (!(h != null && h.keyframes)) return;
        u.forEach((y, b) => {
          l[y].keyframes = structuredClone(h.keyframes[b]);
        });
        const m = px(l, u, h.frames, i.delta, -la(s.owner));
        if (s.frames = h.frames.map((y) => y + m), i.phase !== "end") {
          fo();
          return;
        }
        Ee.drag = null, m ? ki() : fo();
        return;
      }
      if (i.type === "clip") {
        const s = _.stickers.find((h) => h.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          Jn(), Ee.drag = { clip: { ...s.clip }, span: hc(s.clip) };
          return;
        }
        const { drag: l } = Ee;
        if (!(l != null && l.clip)) return;
        const u = l.clip;
        if (s.clip = { ...u }, i.delta && i.mode === "move" ? yx(s.clip, i.delta) : i.delta && i.mode === "start" ? bx(s.clip, u.start + i.delta) : i.delta && vx(s.clip, (u.duration === null ? l.span : u.start + u.duration) + i.delta, l.span), i.phase !== "end") {
          fo();
          return;
        }
        Ee.drag = null, Dd(), JSON.stringify(s.clip) !== JSON.stringify(u) ? ki() : fo();
        return;
      }
      if (i.type === "key-row") {
        if (!ss(i.owner)) return;
        Jn(), ux(di(i.owner), p.frame - la(i.owner)), ki();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === _.timeline.fps || I.timeline.fpsLocked) {
          Hr();
          return;
        }
        Ld(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === _.timeline.length) {
          Hr();
          return;
        }
        Jn(), _.timeline.length = s, ki();
        return;
      }
      if (i.type === "easing") {
        const s = Ee.selection;
        if (!s || !ss(s.owner)) return;
        Jn(), gx(di(s.owner), sa(s), s.frames, i.easing), i.commit ? ki() : fo();
      }
    }
  }
  async function Rd(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Pr(i)) return;
    if (S) {
      Jn(), await Ub(i);
      return;
    }
    const s = Ti("asset"), l = wa(e, `add:${s}`, async () => {
      try {
        const { image: u } = await xa(i);
        We.set(s, u);
        const h = Ti("st");
        _.stickers.push({
          id: h,
          asset_id: s,
          yaw_deg: p.viewYaw,
          pitch_deg: p.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: ci(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
          rot_deg: 0,
          z_index: Ja()
        }), gr(_.stickers[_.stickers.length - 1]), ls(), Ve(), Ye(), he();
        const m = await Ri(i, {
          fetchApi: (k, N) => jt.fetchApi(k, N)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((k) => String((k == null ? void 0 : k.asset_id) || "") === s).length) return;
        _.assets[s] = m, so(), rt(), at(), Ve(), Ye(), he();
      } catch (u) {
        delete _.assets[s], We.delete(s);
        const h = Array.isArray(_.stickers) ? _.stickers : [], m = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") === s);
        throw m.length && (_.stickers = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") !== s), m.some((y) => String((y == null ? void 0 : y.id) || "") === String(p.selectedId || "")) && gr(null), Ve(), Ye(), he(), at()), u;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function Bb() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = Z == null ? void 0 : Z.openImagePicker) == null || i.call(Z, "add");
  }
  async function Ub(i) {
    const s = Ti("st"), l = wa(e, `add:${s}`, async () => {
      const { image: u } = await xa(i), h = {
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: ci(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
        rot_deg: 0
      }, m = Nf(s, { kind: "file", filename: "" }, h, Ja());
      We.set(ta(m), u), _.stickers.push(m), gr(m), ls(), Ve(), Ye(), he();
      try {
        const y = await Ri(i, {
          fetchApi: (k, N) => jt.fetchApi(k, N)
        }), b = _.stickers.find((k) => k.id === s);
        if (!b) return;
        b.source = zs(y), We.set(ta(b), u), rt(), at();
      } catch (y) {
        throw _.stickers = _.stickers.filter((b) => b.id !== s), p.selectedId === s && gr(null), rt(), at(), y;
      } finally {
        Ve(), Ye(), he();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function Wb(i, s) {
    const l = wa(e, `replace:${s}:${Ti("asset")}`, async () => {
      const { image: u } = await xa(i), h = await Ri(i, {
        fetchApi: (y, b) => jt.fetchApi(y, b)
      }), m = _.stickers.find((y) => y.id === s);
      if (m) {
        m.source = zs(h), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const y of [m.size.value, ...m.size.keyframes.map((b) => b.value)])
          y.vFOV_deg = ci(y.hFOV_deg, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1));
        We.set(ta(m), u), Bt(), rt(), at(), Ve(), Ye(), he();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function Yb(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Ct();
    if (!s || !gt(s) || en(s) || !Pr(i)) return;
    if (S) {
      await Wb(i, s.id);
      return;
    }
    const l = String(s.id || ""), u = Ti("asset"), h = wa(e, `replace:${l}:${u}`, async () => {
      var A;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === l) || null;
      if (!m || !gt(m) || en(m)) return;
      const y = String(m.asset_id || ""), b = y ? mn(((A = _.assets) == null ? void 0 : A[y]) || null) : null, k = Number(m.vFOV_deg || 0), N = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: C } = await xa(i);
        We.set(u, C), m.asset_id = u, m.vFOV_deg = ci(
          Number(m.hFOV_deg || 30),
          Number(C.naturalWidth || C.width || 1),
          Number(C.naturalHeight || C.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Bt(), Ve(), Ye(), he();
        const V = await Ri(i, {
          fetchApi: (ne, J) => jt.fetchApi(ne, J)
        }), B = (Array.isArray(_.stickers) ? _.stickers : []).find((ne) => String((ne == null ? void 0 : ne.id) || "") === l) || null;
        if (!B || String(B.asset_id || "") !== u) return;
        _.assets[u] = V, so(), rt(), at(), Ve(), Ye(), he();
      } catch (C) {
        delete _.assets[u], We.delete(u);
        const V = (Array.isArray(_.stickers) ? _.stickers : []).find((B) => String((B == null ? void 0 : B.id) || "") === l) || null;
        throw V && String(V.asset_id || "") === u && (y && b && (_.assets[y] = b), V.asset_id = y, V.vFOV_deg = k, V.crop = N ? { ...N } : null), Bt(), at(), Ve(), Ye(), he(), C;
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function Xb() {
    var s;
    if (r) return;
    const i = Ct();
    !i || !gt(i) || en(i) || (s = Z == null ? void 0 : Z.openImagePicker) == null || s.call(Z, "replace");
  }
  async function qb() {
    if (r || t !== "stickers") return;
    if (S) {
      await Jb();
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
        const y = await fetch(m).then((C) => C.blob()), b = String(y.type || "image/png").split("/")[1] || "png", k = String((h == null ? void 0 : h.name) || `${u}.${b}`), N = new File([y], k, { type: y.type || "image/png" }), A = await Ri(N, {
          fetchApi: (C, V) => jt.fetchApi(C, V)
        });
        _.assets[u] = {
          ...A,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (at(), he());
  }
  async function Jb() {
    let i = !1;
    for (const s of _.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const u = await fetch(l).then((b) => b.blob()), h = String(u.type || "image/png").split("/")[1] || "png", m = new File([u], `${s.id}.${h}`, { type: u.type || "image/png" }), y = await Ri(m, {
            fetchApi: (b, k) => jt.fetchApi(b, k)
          });
          s.source = zs(y), i = !0;
        } catch {
        }
    }
    i && (at(), he());
  }
  function Zb() {
    if (r || t !== "cutout") return;
    const i = ze();
    if (i) {
      gr(i), p.mode = "pano", to(
        Ut(Number(i.yaw_deg || 0)),
        q(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), Ve(), Ye(), he({ cause: "cutout_frame" });
      return;
    }
    const s = gg({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ut(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    _.shots = [s], gr(s), ls(), p.mode = "pano", rt(), at(), Ve(), Ye(), he({ cause: "cutout_frame" });
  }
  function Qb() {
    r || t !== "cutout" || (_.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, _.active.selected_shot_id = null, rt(), at(), Ve(), Ye(), he());
  }
  function e1() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], s = [];
    for (const l of i)
      en(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function $d(i, s, l = "Clear") {
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
  async function t1() {
    var l, u;
    if (r || !await $d(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = To(null), cr();
    const s = e1();
    if (t === "stickers")
      _.stickers = S ? _.stickers.filter((h) => h.placement === "world" || s.includes(h)) : s, S || (_.assets = {}), p.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = ((u = s[0]) == null ? void 0 : u.id) || null, so();
    else {
      const h = Mx(_.shots, _.active.selected_shot_id);
      _.stickers = s, _.assets = {}, _.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, so();
    }
    rt(), at(), Ve(), Ye(), he();
  }
  async function n1(i) {
    var m, y, b, k;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", u = ho(s);
    if (!(!u.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((y = p.interaction) == null ? void 0 : y.layerKind) === s) || !await $d(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((b = p.interaction) == null ? void 0 : b.kind) === "draw" && ((k = p.interaction) == null ? void 0 : k.layerKind) === s) {
        const N = zn();
        N && p.paintEngine.cancelActiveStroke(N), p.interaction = null;
      }
      u.length = 0, _.painting.raster_objects = In().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== s), s === "paint" && (dn().length = 0), cr(), rt(), at(), Ve(), Ye(), En(), he();
    }
  }
  function r1() {
    if (r) return;
    const i = Ct();
    if (!i || !gt(i) || en(i) || S && Si(i)) return;
    let s;
    S ? s = Tx(i, Ti("st"), Ja()) : (s = JSON.parse(JSON.stringify(i)), s.id = Ti("st"), s.yaw_deg = Ut((s.yaw_deg || 0) + 8), s.z_index = Ja()), _.stickers.push(s), _.active.selected_sticker_id = s.id, p.selectedId = s.id, p.selectedIds = [s.id], Bt(), rt(), at(), Ye(), Ve(), he();
  }
  function Vd() {
    var l, u, h, m, y;
    if (r) return;
    const i = lr(), s = Ct();
    if (!(!s && i.length === 0) && !i.some((b) => wn(b))) {
      if (Jn(), i.length > 1) {
        const b = new Set(i.filter((A) => Qt(A)).map((A) => String(A.actionGroupId || A.id || ""))), k = new Set(i.filter((A) => hn(A)).map((A) => on(A.rasterObjectId || A.id || ""))), N = new Set(i.filter(gt).map((A) => String(A.id || "")));
        b.size > 0 && (_.painting.paint.strokes = (Array.isArray((u = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : u.strokes) ? _.painting.paint.strokes : []).filter((A) => !b.has(String((A == null ? void 0 : A.actionGroupId) || ""))), _.painting.groups = dn().filter((A) => !b.has(String((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || ""))), cr()), k.size > 0 && (_.painting.raster_objects = In().filter((A) => !k.has(String((A == null ? void 0 : A.id) || ""))), co()), N.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((A) => N.has(String((A == null ? void 0 : A.id) || "")) ? en(A) ? (oo(A) || (A.visible = !1), !0) : !1 : !0), so(), Bt()), p.selectedId = null, p.selectedIds = [], rt(), at(), Ve(), Ye(), he();
        return;
      }
      if (Qt(s)) {
        const b = String(s.actionGroupId || s.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (h = _.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== b), _.painting.groups = dn().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== b), cr(), p.selectedId = null, p.selectedIds = [], rt(), at(), Ve(), Ye(), he();
        return;
      }
      if (hn(s)) {
        const b = on(s.rasterObjectId || s.id || "");
        _.painting.raster_objects = In().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== b), co(), p.selectedId = null, p.selectedIds = [], rt(), at(), Ve(), Ye(), he();
        return;
      }
      if (t === "stickers" || gt(s)) {
        if (en(s)) {
          if (oo(s)) return;
          s.visible = !1, Bt(), rt(), at(), Ve(), Ye(), he();
          return;
        }
        _.stickers = _.stickers.filter((b) => b.id !== s.id), so(), Bt(), p.selectedId = ((y = Rt()[0]) == null ? void 0 : y.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], _.active.selected_sticker_id = p.selectedId, rt(), at(), Ve(), Ye(), he();
        return;
      }
      Qb();
    }
  }
  function mc(i, s) {
    const l = Fe.frameSafeRect;
    if (!i || !l || p.mode !== "frame") return !1;
    const u = nu * Ui(l, i), h = vf(bf(l, s), u);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function zd(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, u = (() => {
      const b = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(b)) {
        const [A, C] = b.split(":").map((V) => Number(V));
        if (Number.isFinite(A) && Number.isFinite(C)) return A >= C;
      }
      const k = Number(i.hFOV_deg || 64), N = Number(i.vFOV_deg || 40);
      return Math.abs(k - N) > 1e-6 ? k >= N : Wi(i) >= 1;
    })();
    let [h, m] = l[String(s)] || l["1:1"];
    h >= m !== u && ([h, m] = [m, h]);
    const y = h / m;
    if (!mc(i, y)) {
      const b = q(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = b, i.hFOV_deg = $s(b, y);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function i1(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const u = Va(s, l);
    if (!u) return !1;
    const h = u.ratio;
    if (!mc(i, h)) {
      const m = q(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = $s(m, h);
    }
    return i.aspect_id = u.label, !0;
  }
  function jd(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = ii(i), u = l.tanHalfX / Math.max(1e-12, l.tanHalfY), h = 1 / Math.max(1e-12, u);
    if (!mc(i, h)) {
      const m = q(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = $s(m, h);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, y] = s.split(":");
      i.aspect_id = `${y}:${m}`;
    } else
      i.aspect_id = $i(i);
  }
  function Hd() {
    no().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function o1() {
    if (r) return;
    const i = lr();
    if (!Ct() || i.length === 0 || i.some((b) => wn(b))) return;
    Hd();
    const l = no(), u = new Set(i.map((b) => gt(b) ? `sticker:${String(b.id || "")}` : hn(b) ? `rasterObject:${on(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (l.forEach((b) => {
      var N, A;
      const k = b.type === "sticker" ? `sticker:${String(((N = b.item) == null ? void 0 : N.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((A = b.item) == null ? void 0 : A.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      u.has(k) ? h.push(b) : m.push(b);
    }), !h.length || h[h.length - 1] === l[l.length - 1]) return;
    [...m, ...h].forEach((b, k) => {
      b.type === "sticker" && b.item && (b.item.z_index = k), b.type === "strokeGroup" && b.item && (b.item.z_index = k), b.type === "rasterObject" && b.item && (b.item.z_index = k);
    }), Bt(), rt(), at(), Ye(), he();
  }
  function a1() {
    if (r) return;
    const i = lr();
    if (!Ct() || i.length === 0 || i.some((b) => wn(b))) return;
    Hd();
    const l = no(), u = new Set(i.map((b) => gt(b) ? `sticker:${String(b.id || "")}` : hn(b) ? `rasterObject:${on(b.rasterObjectId || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || b.id || "")}`)), h = [], m = [];
    if (l.forEach((b) => {
      var N, A;
      const k = b.type === "sticker" ? `sticker:${String(((N = b.item) == null ? void 0 : N.id) || "")}` : b.type === "rasterObject" ? `rasterObject:${String(((A = b.item) == null ? void 0 : A.id) || b.id || "")}` : `strokeGroup:${String(b.actionGroupId || "")}`;
      u.has(k) ? h.push(b) : m.push(b);
    }), !h.length || h[0] === l[0]) return;
    [...h, ...m].forEach((b, k) => {
      b.type === "sticker" && b.item && (b.item.z_index = k), b.type === "strokeGroup" && b.item && (b.item.z_index = k), b.type === "rasterObject" && b.item && (b.item.z_index = k);
    }), Bt(), rt(), at(), Ye(), he();
  }
  function s1() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", f && (_.output_preset = P(Number(_.output_preset || 2048))), d && (_.coverage = Hn(d.value)), v && (_.bg_color = String(v.value || _.bg_color || "#00ff00")), On(), e.setDirtyCanvas(!0, !0));
  }
  function On() {
    var s;
    if (r) return;
    _.coverage = Hn(_.coverage), Bg(e, _.active);
    const i = Ug(e, _);
    g && !Wg(e, i, String(g.value ?? "")) && (g.value = i, (s = g.callback) == null || s.call(g, i));
  }
  const Gd = () => On();
  r || (e.__panoFlushStateBeforeQueue = Gd);
  function gc() {
    _.ui_settings = aA(_.ui_settings), r || On();
  }
  function at() {
    var i;
    r || (On(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function l1() {
    r || Ry() && fd().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function c1(i = {}) {
    var u, h, m, y, b, k, N, A, C, V;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((h = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || h.call(u), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (b = e.setDirtyCanvas) == null || b.call(e, !0, !1)), l && ((N = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || N.call(k, !0, !0), (V = (C = (A = Ar) == null ? void 0 : A.canvas) == null ? void 0 : C.setDirty) == null || V.call(C, !0, !0));
  }
  function ls() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", En(), Ve());
  }
  function Mi(i) {
    const s = E.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * E.width,
      y: (i.clientY - s.top) / s.height * E.height
    };
  }
  function cs(i) {
    const s = E.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Kd() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function ze() {
    if (t !== "cutout") return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const s = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function u1() {
    var B, ne, J, te, oe;
    if (!E) return null;
    const i = (B = E.getBoundingClientRect) == null ? void 0 : B.call(E), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? E.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? E.height / i.height : 1;
    Fe.frameCanvasScale = Math.min(s, l);
    let u = 24, h = 24;
    const m = Math.max(u + 1, E.width - 24);
    let y = Math.max(h + 1, E.height - 24);
    const b = (ne = kt == null ? void 0 : kt.getBoundingClientRect) == null ? void 0 : ne.call(kt), k = (J = pt == null ? void 0 : pt.getBoundingClientRect) == null ? void 0 : J.call(pt);
    let N = 24;
    b && i && b.width > 0 && b.height > 0 && (N = Math.max(N, (b.right - i.left) * s + Jp)), k && i && k.width > 0 && k.height > 0 && ((te = I.frameRail) == null ? void 0 : te.visible) === !0 && (N = Math.max(N, (i.right - k.left) * s + Jp)), u = Math.max(u, N);
    const A = Math.min(m, E.width - N);
    let C = 24;
    const V = (oe = Te == null ? void 0 : Te.getBoundingClientRect) == null ? void 0 : oe.call(Te);
    if (V && i && V.width > 0 && V.height > 0 && (C = Math.max(C, (V.bottom - i.top) * l + ru)), [Zt, Un].forEach((pe) => {
      var je;
      if (!pe || !i) return;
      const re = getComputedStyle(pe);
      if (re.display === "none" || re.visibility === "hidden" || Number(re.opacity) <= 0) return;
      const Se = (je = pe.getBoundingClientRect) == null ? void 0 : je.call(pe);
      !Se || Se.width <= 0 || Se.height <= 0 || (C = Math.max(C, (i.bottom - Se.top) * l + ru));
    }), Pe && i) {
      const pe = getComputedStyle(Pe);
      pe.display !== "none" && pe.visibility !== "hidden" && Number(pe.opacity) > 0 && (C = Math.max(C, (z2 + ru) * l));
    }
    return h = Math.max(h, C), y = Math.max(h + 1, Math.min(y, E.height - C)), {
      x: u,
      y: h,
      w: Math.max(1, A - u),
      h: Math.max(1, y - h)
    };
  }
  function yc(i = ze()) {
    if (!i || !E) return null;
    const s = Fe.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, E.width - 48),
      h: Math.max(1, E.height - 48)
    };
    return Cw(s, i, nu * Ui(s, i));
  }
  function tn(i = ze()) {
    const s = yc(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function bc() {
    return t === "cutout" && !!ze();
  }
  function ur(i, s = performance.now()) {
    if (p.mode === "unwrap") {
      const m = ui(), y = (i.x - m.x) / Math.max(1, m.w), b = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: q(b, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = rc(i.x, i.y), { lon: u, lat: h } = sc(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (u / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - h / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function fr(i, s, l = performance.now()) {
    const u = tn(s);
    if (!u) return null;
    const h = {
      x: (Number(i.x) - u.x) / Math.max(1, u.w),
      y: (Number(i.y) - u.y) / Math.max(1, u.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = uc(s, h);
    if (!m) return null;
    const { lon: y, lat: b } = sc(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: q(0.5 - b / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function f1(i, s) {
    const l = ze();
    if (!l || l.locked === !0) return !1;
    const u = Number(s) > 0, h = bg(l, s);
    if (!h) return !1;
    if (u) {
      const m = nu * Ui(
        Fe.frameSafeRect || { w: E.width, h: E.height },
        h
      ), y = _f({ width: E.width, height: E.height }, m);
      if (y.halfW < E.width * 0.5 - 1e-6 || y.halfH < E.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = h.hFOV_deg, l.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, rt(), at(), Ve());
    }, 180), Ve(), !0;
  }
  function d1() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, rt(), at(), Ve(), !0) : !1;
  }
  function ca() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Ni(), p.interaction = null, ao(), Vr(), Ve(), _t(p.pointerPos), he({ localOnly: !0 }), !0;
  }
  function h1(i, s) {
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
  function Bd() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (Kd() || bc());
  }
  function Ud() {
    var i;
    return Bd() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function us(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), u = Number((i == null ? void 0 : i.y) || 0), h = s !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== h || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - u) > 0.01;
    return p.pointerPos = { x: l, y: u, inside: h }, y;
  }
  function p1() {
    var A, C;
    if (!Ud()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool, l = hi(s), u = Fn[l] || Fn[Kr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), y = Math.max(3, m * 0.5), b = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : jn(p.paintColor), k = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : q(Math.max(0.16, Number(b.a ?? 1) * 0.3), 0.16, 0.52), N = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : q(Math.max(0.46, Number(b.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: u,
      radius: y,
      fillStyle: _r(b, k),
      strokeStyle: _r(b, N),
      x: Number(((A = p.pointerPos) == null ? void 0 : A.x) || 0),
      y: Number(((C = p.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function m1() {
    var V, B, ne;
    const i = p1();
    if (!U) return;
    if (!i) {
      U.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, u = "999px", h = 0, m = i.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", b = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const k = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let A = Number(i.hotspotX ?? s * 0.5), C = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Sl, l = Sl, u = "0", y = "0", b = "none", A = G2, C = K2, m = rA(i.fillStyle, N, k);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const J = Math.max(1, Number(((V = i.preset) == null ? void 0 : V.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * J), l = Math.max(6, i.radius * 2), u = `${Math.min(6, l * 0.42)}px`, h = Number(((ne = (B = i.preset) == null ? void 0 : B.angle) == null ? void 0 : ne.value) || 0) * zi;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(s)}px`, U.style.height = `${Math.round(l)}px`, U.style.borderRadius = u, U.style.border = y, U.style.boxShadow = b, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(i.x - A)}px, ${Math.round(i.y - C)}px) rotate(${h}deg)`;
  }
  function g1() {
    var pe;
    if (!X || !j) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool;
    if (s === "lasso_fill") return;
    const l = hi(s), u = Fn[l] || Fn[Kr], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), y = Math.max(6, m * 0.5), b = s === "eraser", k = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : b ? { r: 1, g: 1, b: 1, a: 0.22 } : jn(p.paintColor), N = i === "mask" ? _r(k, 0.22) : b ? "rgba(255,255,255,0.14)" : _r(k, q(Math.max(0.18, Number(k.a ?? 1) * 0.34), 0.18, 0.56)), A = i === "mask" ? _r(k, 0.96) : b ? "rgba(255,255,255,0.72)" : _r(k, q(Math.max(0.56, Number(k.a ?? 1) * 0.96), 0.56, 1));
    let C = y * 2, V = y * 2, B = "999px", ne = 0, J = N;
    const te = "rgba(222, 222, 222, 0.72)", oe = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      J = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const re = Math.max(1, Number((u == null ? void 0 : u.aspect) ?? 1));
      C = Math.max(16, y * 2 * re), V = Math.max(10, y * 2), B = `${Math.min(8, V * 0.42)}px`, ne = Number(((pe = u == null ? void 0 : u.angle) == null ? void 0 : pe.value) || 0) * zi;
    } else s === "brush" ? J = `radial-gradient(circle at 50% 50%, ${A} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (C = Math.max(18, y * 1.8), V = C, J = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${A} 43%, ${A} 58%, rgba(0,0,0,0) 59%)`) : b && (J = "rgba(255,255,255,0.12)");
    j.style.width = `${Math.round(C)}px`, j.style.height = `${Math.round(V)}px`, j.style.borderRadius = B, j.style.background = J, j.style.border = `1px solid ${te}`, j.style.boxShadow = `0 0 0 1px ${oe}`, j.style.transform = `rotate(${ne}deg)`, xe && (clearTimeout(xe), xe = 0), X.classList.remove("fade-out"), X.classList.add("show");
  }
  function fs() {
    !X || !X.classList.contains("show") || (X.classList.add("fade-out"), xe && clearTimeout(xe), xe = window.setTimeout(() => {
      X.classList.remove("show", "fade-out"), xe = 0;
    }, 180));
  }
  function Wd(i, s, l, u) {
    const h = hi(s), m = Fn[h] || Fn[Kr], y = p.brushSizes[h] ?? 10, b = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), k = h1(u, b), N = l.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), A = {
      id: wo(i),
      actionGroupId: wo("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: b,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: k.radiusModel,
      radiusValue: k.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((C) => ({ ...C })),
        points: N.map((C) => ({ ...C }))
      }
    };
    return qp(A, m), Number(m.aspect ?? 1), Number(A.aspect ?? 1), String(A.stampKind || ""), Number(A.size || 0), String(A.radiusModel || ""), Number(A.radiusValue || 0), { ...A.targetSpace }, A;
  }
  function Yd(i, s, l, u) {
    const h = l.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), m = hi(s), y = Fn[m] || Fn[Kr], b = {
      id: wo(i),
      actionGroupId: wo("ag"),
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
        points: h.map((k) => ({ ...k }))
      }
    };
    return qp(b, y), Number(y.aspect ?? 1), Number(b.aspect ?? 1), String(b.stampKind || ""), { ...b.targetSpace }, b;
  }
  function ho(i) {
    const s = _.painting || (_.painting = To(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function y1(i, s, l = performance.now()) {
    let u;
    if (p.mode === "frame") {
      const N = ze();
      if (!N || (u = fr(s, N, l), !u)) return !1;
    } else
      u = ur(s, l);
    if (!u) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, y = h[h.length - 1];
    if (y) {
      const N = Math.abs(Number(u.u ?? u.x ?? 0) - Number(y.u ?? y.x ?? 0)), A = Math.abs(Number(u.v ?? u.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (N < 15e-4 && A < 15e-4) return !1;
    }
    const b = {
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...b }), m.push({ ...b });
    const k = zn();
    if (k) {
      const N = p.paintEngine.ensureTarget(k);
      p.paintEngine.appendStrokePoint(N, Number(b.u ?? 0), Number(b.v ?? 0), i.stroke);
    }
    return !0;
  }
  function b1(i, s, l = performance.now()) {
    var y, b;
    let u;
    if (p.mode === "frame") {
      const k = ze();
      if (!k) return !1;
      u = fr(s, k, l);
    } else
      u = ur(s, l);
    const h = (b = (y = i == null ? void 0 : i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : b.points;
    if (!u || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const k = Math.abs(Number(u.u ?? u.x ?? 0) - Number(m.u ?? m.x ?? 0)), N = Math.abs(Number(u.v ?? u.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (k < 15e-4 && N < 15e-4) return !1;
    }
    return h.push({
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function v1(i) {
    var re, Se, je, Ke, et;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    as();
    const l = zn(), u = na(l.width, l.height);
    if (!Pd(u, s, { w: l.width, h: l.height })) return !1;
    const h = ((Se = (re = u.ctx) == null ? void 0 : re.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Se.data) || null;
    if (!h) return !1;
    const m = new Map(dn().map((ye) => [String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim(), ye ? { ...ye } : null])), y = [], b = [], k = [...In().filter((ye) => String((ye == null ? void 0 : ye.layerKind) || "paint") !== "paint")];
    let N = !1, A = no().reduce((ye, ae) => Math.max(ye, Number((ae == null ? void 0 : ae.z_index) || 0)), -1) + 1;
    function C(ye, ae, me, we = 8) {
      let Le = ae, He = me, Oe = -1, ft = -1;
      for (let Xe = 0; Xe < me; Xe += 1)
        for (let $t = 0; $t < ae; $t += 1)
          ye[(Xe * ae + $t) * 4 + 3] <= we || ($t < Le && (Le = $t), Xe < He && (He = Xe), $t > Oe && (Oe = $t), Xe > ft && (ft = Xe));
      return Oe < Le || ft < He ? null : { minX: Le, minY: He, maxX: Oe, maxY: ft };
    }
    const V = C(h, l.width, l.height, 8);
    if (!V) return !1;
    function B(ye, ae) {
      return !ye || !ae ? !1 : !(ye.maxX < ae.minX || ae.maxX < ye.minX || ye.maxY < ae.minY || ae.maxY < ye.minY);
    }
    function ne(ye, ae) {
      const me = ai((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "", "paint", ae);
      if (!me) return null;
      const we = me.centerUv.u - me.halfW, Le = me.centerUv.u + me.halfW, He = me.centerUv.v - me.halfH, Oe = me.centerUv.v + me.halfH, ft = l.width, Xe = l.height;
      return {
        minX: Math.floor((we % 1 + 1) % 1 * ft),
        maxX: Math.ceil((Le % 1 + 1) % 1 * ft),
        minY: Math.floor(q(He, 0, 1) * Xe),
        maxY: Math.ceil(q(Oe, 0, 1) * Xe),
        wraps: Le - we >= 1 || we < 0 || Le > 1
      };
    }
    function J(ye) {
      const ae = (ye == null ? void 0 : ye.bbox) || null;
      if (!ae) return null;
      const me = (ye == null ? void 0 : ye.transform) || {}, we = l.width, Le = l.height, He = Number(ae.u0 || 0) + Number(me.du || 0), Oe = Number(ae.u1 || 0) + Number(me.du || 0), ft = Number(ae.v0 || 0) + Number(me.dv || 0), Xe = Number(ae.v1 || 0) + Number(me.dv || 0);
      return {
        minX: Math.floor((He % 1 + 1) % 1 * we),
        maxX: Math.ceil((Oe % 1 + 1) % 1 * we),
        minY: Math.floor(q(ft, 0, 1) * Le),
        maxY: Math.ceil(q(Xe, 0, 1) * Le),
        wraps: Oe - He >= 1 || He < 0 || Oe > 1
      };
    }
    function te(ye) {
      return ye ? ye.wraps ? B(V, { minX: 0, maxX: ye.maxX, minY: ye.minY, maxY: ye.maxY }) || B(V, { minX: ye.minX, maxX: l.width - 1, minY: ye.minY, maxY: ye.maxY }) : B(V, ye) : !0;
    }
    function oe(ye) {
      if (!ye) return { touched: !1, canvas: null };
      const ae = na(l.width, l.height, { readback: !0 });
      ae.ctx.drawImage(ye, 0, 0);
      const me = ae.ctx.getImageData(0, 0, l.width, l.height);
      ae.ctx.save(), ae.ctx.globalCompositeOperation = "destination-out", ae.ctx.drawImage(u.canvas, 0, 0), ae.ctx.restore();
      const we = ae.ctx.getImageData(0, 0, l.width, l.height);
      for (let Le = 0; Le < l.width * l.height; Le += 1) {
        if (h[Le * 4 + 3] <= 8) continue;
        const Oe = me.data[Le * 4 + 3], ft = we.data[Le * 4 + 3];
        if (Oe > ft)
          return { touched: !0, canvas: ae.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function pe(ye, ae, me) {
      const we = Number(me == null ? void 0 : me.z_index), Le = Sb(ye, ae, me).map((He, Oe) => ({
        ...He,
        z_index: Number.isFinite(we) ? we + Oe * 1e-3 : A + Oe * 1e-3
      }));
      return Le.length && (A = Math.max(A, ...Le.map((He) => Number((He == null ? void 0 : He.z_index) || 0))) + 1), Le;
    }
    for (const ye of dn()) {
      const ae = String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim();
      if (!ae) continue;
      const me = sr(ae, "paint");
      if (!te(ne(ye, me))) {
        b.push(ye), y.push(...me);
        continue;
      }
      const we = ((Ke = (je = p.paintEngine) == null ? void 0 : je.getGroupTarget) == null ? void 0 : Ke.call(je, ae)) || null, Le = ((et = we == null ? void 0 : we.committedPaint) == null ? void 0 : et.canvas) || null;
      if (!Le) {
        b.push(ye), y.push(...me);
        continue;
      }
      const He = oe(Le);
      if (!He.touched || !He.canvas) {
        b.push(ye), y.push(...me);
        continue;
      }
      N = !0;
      const Oe = pe(He.canvas, "paint", m.get(ae) || ye || {});
      k.push(...Oe);
    }
    for (const ye of In().filter((ae) => String((ae == null ? void 0 : ae.layerKind) || "paint") === "paint")) {
      if (!te(J(ye))) {
        k.push(ye);
        continue;
      }
      const ae = ud(ye, null);
      if (!ae) {
        k.push(ye);
        continue;
      }
      const me = oe(ae);
      if (!me.touched || !me.canvas) {
        k.push(ye);
        continue;
      }
      N = !0;
      const we = pe(me.canvas, "paint", ye);
      k.push(...we);
    }
    return N ? (_.painting.paint.strokes = y, _.painting.groups = b.sort((ye, ae) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), _.painting.raster_objects = k.sort((ye, ae) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), Qo({ preservePanelValues: !1 }), !0) : !1;
  }
  function _1(i) {
    var y, b, k, N, A;
    if ((((b = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : b.rawPoints) || ((N = (k = i.stroke) == null ? void 0 : k.geometry) == null ? void 0 : N.points) || []).length >= 1) {
      vc(i);
      const C = zn();
      C && (String(((A = i.stroke) == null ? void 0 : A.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(C) : p.paintEngine.commitActiveStroke(i.stroke, C)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Wd(i.layerKind, l.toolKind, [], u);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = zn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function w1(i) {
    var y, b;
    if ((((b = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : b.points) || []).length >= 3) {
      vc(i);
      const k = zn();
      k && p.paintEngine.commitActiveStroke(i.stroke, k), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = Yd(i.layerKind, l.toolKind, [], u);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = zn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function vc(i) {
    var m, y, b, k;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((y = i == null ? void 0 : i.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = fc(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), v1(i);
    const u = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (u && Hf((b = i.stroke) == null ? void 0 : b.actionGroupId), ho(i.layerKind).push(i.stroke), !0);
    const h = s.rawPoints || s.points || [];
    return h.length < 1 ? !1 : (s.processedPoints = fc(h, i.stroke.targetSpace, !0), u && Hf((k = i.stroke) == null ? void 0 : k.actionGroupId), ho(i.layerKind).push(i.stroke), !0);
  }
  function Xd(i) {
    var l;
    if (t === "cutout" && p.mode === "frame") {
      const u = ze(), h = tn(u);
      if (!u || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const y = fr(i, u, performance.now()), b = y ? lo(y) : null;
      if (b)
        for (const N of cc()) {
          if (!gt(N)) continue;
          const A = aa(N, b);
          if (A && Number(A.x) >= 0 && Number(A.x) <= 1 && Number(A.y) >= 0 && Number(A.y) <= 1) {
            const C = qt(N);
            if (C != null && C.visible) return { item: N, geom: C };
          }
        }
      const k = Bl(!1).slice().sort((N, A) => Number((A == null ? void 0 : A.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of k) {
        if (N.type === "strokeGroup") {
          const V = io(qo("paint", N.actionGroupId || N.id || ""));
          if (!V) continue;
          const B = qt(V);
          if (!(B != null && B.visible)) continue;
          const ne = Array.isArray(B.strokePaths) ? B.strokePaths : [];
          for (const J of ne) {
            const te = Array.isArray(J == null ? void 0 : J.points) ? J.points : [];
            if (!te.length) continue;
            if (J.closed && te.length >= 3 && Ur(i, te)) return { item: V, geom: B };
            const oe = Math.max(8, Number((J == null ? void 0 : J.lineWidth) || 0) * 0.5 + 6);
            for (let pe = 0; pe < te.length - 1; pe += 1)
              if (lu(i, te[pe], te[pe + 1]) <= oe * oe) return { item: V, geom: B };
            if (te.length === 1 && mi(i, te[0]) <= oe * oe) return { item: V, geom: B };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const V = ro(Jo(((l = N.item) == null ? void 0 : l.id) || N.id || ""));
          if (!V) continue;
          const B = qt(V);
          if (cd(V, B, i, y)) return { item: V, geom: B };
          continue;
        }
        const A = N.item;
        if (!A || !gt(A) || !b) continue;
        const C = aa(A, b);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const V = qt(A);
          if (V != null && V.visible) return { item: A, geom: V };
        }
      }
      return null;
    }
    const s = [
      ...Bl(!1).slice().sort((u, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((u) => {
        var h;
        return u.type === "strokeGroup" ? io(qo("paint", u.actionGroupId || u.id || "")) : u.type === "rasterObject" ? ro(Jo(((h = u.item) == null ? void 0 : h.id) || u.id || "")) : u.item;
      }).filter(Boolean),
      ...t === "cutout" ? cc().filter((u) => Vn(u)) : []
    ];
    for (const u of s) {
      if (Qt(u)) {
        const m = qt(u);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const b of y) {
          const k = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
          if (!k.length) continue;
          if (b.closed && k.length >= 3 && Ur(i, k)) return { item: u, geom: m };
          const N = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
          for (let A = 0; A < k.length - 1; A += 1)
            if (lu(i, k[A], k[A + 1]) <= N * N) return { item: u, geom: m };
          if (k.length === 1 && mi(i, k[0]) <= N * N) return { item: u, geom: m };
        }
        continue;
      }
      if (hn(u)) {
        const m = qt(u);
        if (!(m != null && m.visible)) continue;
        if (cd(u, m, i)) return { item: u, geom: m };
        continue;
      }
      const h = qt(u);
      if (h.visible && Ur(i, h.corners))
        return { item: u, geom: h };
    }
    return null;
  }
  function _c(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (gt(l)) return Du(i, s);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((y) => mi(y, s) <= 121);
      if (h >= 0) {
        const y = i.corners[h], b = y.x - i.center.x, k = y.y - i.center.y, N = b * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: N };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const y of m) {
        const b = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
        if (y.closed && b.length >= 3 && Ur(s, b)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
        for (let N = 0; N < b.length - 1; N += 1)
          if (lu(s, b[N], b[N + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return Ur(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => mi(m, s) <= 121);
      if (h >= 0) {
        const m = i.corners[h], y = m.x - i.center.x, b = m.y - i.center.y, k = y * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: k };
      }
      return Ur(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
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
      const h = i.corners[u], m = h.x - i.center.x, y = h.y - i.center.y, b = m * y >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: u, cursor: b };
    }
    return mi(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Ur(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function qd(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function x1(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function S1(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((h) => x1(i, h))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, u = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Ur({ x: l, y: u }, s.corners);
  }
  function _t(i) {
    if (m1(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? L("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" || p.interaction.kind === "roll_frame" ? L("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? L("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? L(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? L("grabbing") : L("default");
      return;
    }
    if (Ud()) {
      L("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        L(V2);
        return;
      }
      if (p.primaryTool !== "cursor") {
        L("default");
        return;
      }
      L("grab");
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      L("default");
      return;
    }
    const s = Ct(), l = s ? qt(s) : null, u = s ? wn(s) : !1, h = u ? { kind: "none", cursor: "default" } : _c(l, i, s);
    if (!u && h.kind !== "none") {
      L(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && Xd(i)) {
      L("default");
      return;
    }
    L(p.mode === "pano" ? "grab" : "default");
  }
  function Ye() {
    var k, N;
    if (!Mt) return;
    if (p.mode === "frame") {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = Ct(), s = lr();
    if (!i && s.length === 0 || p.interaction) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = qa(), u = TM({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? Xa(s) : qt(i),
      allLocked: Xl(s),
      anyLocked: s.some((A) => wn(A)),
      selectedLocked: wn(i),
      activeAspect: Xr(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: en,
      isStickerHidden: oo,
      canRestoreSelectedToInitial: yy,
      iconSet: Ne
    });
    if (!u.visible) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (A, C, { requireFitsBelow: V = !0 } = {}) => {
      var Se, je, Ke;
      const ne = Number((Se = u.anchor) == null ? void 0 : Se.minX), J = Number((je = u.anchor) == null ? void 0 : je.maxX), te = Number((Ke = u.anchor) == null ? void 0 : Ke.maxY);
      if (![ne, J, te].every(Number.isFinite)) return null;
      const oe = Math.max(14, E.width - A - 14), pe = q((ne + J) * 0.5 - A * 0.5, 14, oe), re = te + 18;
      return !Number.isFinite(pe) || !Number.isFinite(re) || V && re + C > E.height - 14 ? null : { left: pe, top: re };
    }, m = Math.max(1, Number(((k = p.menuSize) == null ? void 0 : k.w) || 220)), y = Math.max(1, Number(((N = p.menuSize) == null ? void 0 : N.h) || 40)), b = h(m, y, { requireFitsBelow: !1 });
    if (!b) {
      I.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    I.selectionMenu = {
      visible: !0,
      left: b.left,
      top: b.top,
      items: u.items
    }, requestAnimationFrame(() => {
      if (!Mt || I.selectionMenu.visible !== !0) return;
      const A = Mt.getBoundingClientRect(), C = Math.round(Number((A == null ? void 0 : A.width) || 0)) || 220, V = Math.round(Number((A == null ? void 0 : A.height) || 0)) || 40;
      p.menuSize = { w: C, h: V, measured: !0 };
      const B = h(C, V);
      if (!B) {
        I.selectionMenu.visible = !1;
        return;
      }
      I.selectionMenu.left = B.left, I.selectionMenu.top = B.top;
    });
  }
  function Ni() {
    se.timer && (clearTimeout(se.timer), se.timer = 0), se.target = null, I.tooltip.visible = !1;
  }
  function k1(i) {
    if (!Yt || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    I.tooltip.text = s, I.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var J, te;
      if (se.target !== l || !Yt || !(l != null && l.isConnected)) return;
      const u = fe.getBoundingClientRect(), h = l.getBoundingClientRect(), m = 8, y = 12, b = Math.round(Number(((J = Yt.getBoundingClientRect()) == null ? void 0 : J.width) || 0)) || 100, k = Math.round(Number(((te = Yt.getBoundingClientRect()) == null ? void 0 : te.height) || 0)) || 24, N = !!l.closest(".pano-floating-left"), A = !!l.closest(".pano-frame-rail"), C = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let V = "", B = h.left - u.left + h.width * 0.5 - b * 0.5, ne = h.top - u.top - k - y;
      if (N)
        V = "tool-rail", B = h.right - u.left + 10, ne = h.top - u.top + h.height * 0.5 - k * 0.5, B = q(B, m, Math.max(m, u.width - b - m)), ne = q(ne, m, Math.max(m, u.height - k - m));
      else if (A)
        V = "frame-rail", B = h.left - u.left - b - 10, ne = h.top - u.top + h.height * 0.5 - k * 0.5, B = q(B, m, Math.max(m, u.width - b - m)), ne = q(ne, m, Math.max(m, u.height - k - m));
      else if (C) {
        V = "footer";
        const oe = l.closest(".pano-paint-footer"), pe = oe ? oe.getBoundingClientRect() : h;
        B = pe.left - u.left + pe.width * 0.5 - b * 0.5, ne = pe.bottom - u.top + 5, B = q(B, m, Math.max(m, u.width - b - m)), ne = Math.max(m, ne);
      }
      B = q(B, m, Math.max(m, u.width - b - m)), ne = Math.max(m, ne), I.tooltip.left = B, I.tooltip.top = ne, I.tooltip.variant = V, I.tooltip.visible = !0;
    });
  }
  const un = gf({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Ut(Number(i.yaw || 0)), p.viewPitch = q(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = q(Number(i.fov || p.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = E.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || E.clientWidth || 0)),
        h: Math.max(1, Number(i.height || E.clientHeight || 0))
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
      Fe.backgroundDirty = !0, Fe.dirty = !0;
    }
  });
  function M1(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += dg(s, i.lastAngle), i.lastAngle = s;
    const u = hg(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = u, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = u, h.displayValue = _o(u), h.fillPct = (u + 180) / 360 * 100), jr(), wc(i), he({ localOnly: !0 });
  }
  function N1(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const u = N0(i.rollGesture, s, l);
    if (!u) return;
    i.rollGesture = u.gesture, i.center = u.gesture.center, i.lastAngle = u.gesture.lastAngle, i.accumulatedRad = u.gesture.accumulatedRad, i.shot.roll_deg = u.rollDeg, i.changed = i.changed || Math.abs(u.gesture.accumulatedRad) > 1e-9;
    const h = (((m = I.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = u.rollDeg, h.displayValue = _o(u.rollDeg), h.fillPct = (u.rollDeg + 180) / 360 * 100), jr(), wc(i), he({ localOnly: !0 });
  }
  const Jd = (i, s) => {
    const l = Mi(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function wc(i) {
    var y, b;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    se.timer && (clearTimeout(se.timer), se.timer = 0), se.target = null;
    const s = tn(i.shot), l = (y = E.getBoundingClientRect) == null ? void 0 : y.call(E), u = (b = fe.getBoundingClientRect) == null ? void 0 : b.call(fe);
    if (!s || !l || !u || E.width <= 0 || E.height <= 0) return;
    const h = l.width / E.width, m = l.height / E.height;
    I.tooltip.text = `${_o(i.shot.roll_deg)}°`, I.tooltip.left = l.left - u.left + (s.x + s.w * 0.5) * h, I.tooltip.top = l.top - u.top + (s.y + s.h * 0.5) * m + 12, I.tooltip.variant = "roll", I.tooltip.visible = !0;
  }
  ut == null || ut.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const s = ze();
    if (!s || s.locked === !0) return;
    const l = tn(s);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Jd(i, u);
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
    }, (m = ut.setPointerCapture) == null || m.call(ut, i.pointerId), i.preventDefault(), jr(), wc(p.interaction), he({ localOnly: !0 });
  }), ut == null || ut.addEventListener("pointermove", (i) => {
    var s;
    ((s = p.interaction) == null ? void 0 : s.kind) !== "roll_frame" || p.interaction.source !== "knob" || M1(
      p.interaction,
      Jd(i, p.interaction.center),
      i
    );
  });
  const P1 = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (rt(), at(), Ve()), p.interaction = null, Ni(), Vr(), jr(), he());
  };
  ut == null || ut.addEventListener("pointerup", P1), ut == null || ut.addEventListener("pointercancel", () => ca()), ut == null || ut.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && ca();
  }), ut == null || ut.addEventListener("dblclick", (i) => {
    const s = p.mode === "frame" && !r ? ze() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, rt(), at(), Ve(), jr(), he(), i.preventDefault());
  }), E.onpointerdown = (i) => {
    Ee.selection && (Ee.selection = null, Hr());
    const s = Mi(i);
    if (nt = s, us(s, !0), p.viewTween = null, un.state.inertia.active = !1, un.state.inertia.vx = 0, un.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode === "frame") {
        const b = ze();
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
        const b = p.mode === "unwrap" ? s : cs(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, un.startDrag(b.x, b.y, i.pointerId, performance.now());
      }
      _t(s), E.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const b = ze(), k = tn(b);
      if (!b || b.locked === !0 || !k) return;
      const N = M0({
        frame: k,
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
      }, E.setPointerCapture(i.pointerId), i.preventDefault(), jr(), he({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      const b = ze();
      if (!b || r || b.locked === !0) return;
      p.interaction = {
        kind: "pan_frame",
        shot: b,
        last: s,
        start: { yaw_deg: Number(b.yaw_deg || 0), pitch_deg: Number(b.pitch_deg || 0) },
        changed: !1
      }, _t(s), E.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (p.mode === "pano") {
        const b = cs(i);
        p.interaction = { kind: "view", last: b, lastTs: performance.now() }, un.startDrag(b.x, b.y, i.pointerId, performance.now()), _t(s), E.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (H && !H.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (Kd() || bc())) {
      Jn();
      const b = p.primaryTool === "mask" ? "mask" : "paint", k = p.primaryTool === "mask" ? p.maskTool : p.paintTool, N = p.mode === "frame" && bc() ? ze() : null, A = { kind: "ERP_GLOBAL" }, C = N ? fr(s, N, performance.now()) : ur(s, performance.now());
      if (!C) {
        _t(s);
        return;
      }
      p.interaction = {
        kind: k === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: b,
        _livePreviewToken: wo("live"),
        stroke: k === "lasso_fill" ? Yd(b, k, [C], A) : Wd(b, k, [C], A)
      }, ao();
      const V = zn();
      if (V)
        if (p.paintEngine.beginStroke(p.interaction.stroke, V), p.interaction.kind === "paint_stroke") {
          const B = p.paintEngine.ensureTarget(V), ne = Number((C == null ? void 0 : C.u) ?? (C == null ? void 0 : C.x) ?? 0), J = Number((C == null ? void 0 : C.v) ?? (C == null ? void 0 : C.y) ?? 0);
          p.paintEngine.appendStrokePoint(B, ne, J, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, V);
      _t(s), E.setPointerCapture(i.pointerId), he();
      return;
    }
    const l = lr(), u = Ct(), h = l.length > 1 ? Xa(l) : u ? qt(u) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: s, current: s }, _t(s), E.setPointerCapture(i.pointerId), he({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (h != null && h.visible)) {
      if ((l.some((k) => wn(k)) ? { kind: "none" } : _c(h, s)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: l.map((k) => k),
          offset: { x: s.x - h.center.x, y: s.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: l.filter((k) => gt(k)).map((k) => ({
            id: String(k.id || ""),
            yaw_deg: Number(Nt(k).yaw_deg || 0),
            pitch_deg: Number(Nt(k).pitch_deg || 0),
            center: (() => {
              var A, C;
              const N = qt(k);
              return N != null && N.visible ? { x: Number(((A = N.center) == null ? void 0 : A.x) || 0), y: Number(((C = N.center) == null ? void 0 : C.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: l.filter((k) => Qt(k)).map((k) => ({
            id: String(k.actionGroupId || k.id || ""),
            layerKind: String(k.layerKind || "paint"),
            snapshot: mn(sr(k.actionGroupId, k.layerKind)),
            frameSnapshot: mn(ai(k.actionGroupId, k.layerKind)),
            center: (() => {
              var A, C;
              const N = qt(k);
              return N != null && N.visible ? { x: Number(((A = N.center) == null ? void 0 : A.x) || 0), y: Number(((C = N.center) == null ? void 0 : C.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Yl(k.actionGroupId, k.layerKind)
          })),
          rasterSnapshots: l.filter((k) => hn(k)).map((k) => ({
            id: on(k.rasterObjectId || k.id || ""),
            snapshot: mn(In().find((N) => String((N == null ? void 0 : N.id) || "") === on(k.rasterObjectId || k.id || ""))),
            center: (() => {
              var A, C;
              const N = qt(k);
              return N != null && N.visible ? { x: Number(((A = N.center) == null ? void 0 : A.x) || 0), y: Number(((C = N.center) == null ? void 0 : C.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: md(k)
          }))
        }, _t(s), E.setPointerCapture(i.pointerId);
        return;
      }
    } else if (u && (h != null && h.visible)) {
      const b = wn(u) ? { kind: "none" } : _c(h, s, u);
      if (b.kind === "scale") {
        p.interaction = Qt(u) ? {
          kind: "scale_stroke_group",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: mn(sr(u.actionGroupId, u.layerKind)),
          frameSnapshot: mn(ai(u.actionGroupId, u.layerKind)),
          cursor: b.cursor
        } : hn(u) ? {
          kind: "scale_raster_object",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: mn(In().find((k) => String((k == null ? void 0 : k.id) || "") === on(u.rasterObjectId || u.id || ""))),
          cursor: b.cursor
        } : {
          kind: "scale",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(Nt(u).hFOV_deg || 20),
          startVFOV: Number(Nt(u).vFOV_deg || 20),
          cursor: b.cursor
        }, _t(s), E.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "scale_x" || b.kind === "scale_y") {
        p.interaction = {
          kind: b.kind,
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(Nt(u).hFOV_deg || 20),
          startVFOV: Number(Nt(u).vFOV_deg || 20),
          cursor: b.cursor,
          edge: b.edge
        }, _t(s), E.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "rotate") {
        p.interaction = Qt(u) ? {
          kind: "rotate_stroke_group",
          item: u,
          center: h.center,
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x),
          snapshot: mn(sr(u.actionGroupId, u.layerKind)),
          frameSnapshot: mn(ai(u.actionGroupId, u.layerKind))
        } : {
          kind: "rotate",
          item: u,
          center: h.center,
          startRot: Number(Nt(u).rot_deg || Nt(u).roll_deg || 0),
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x)
        }, _t(s), E.setPointerCapture(i.pointerId);
        return;
      }
      if (b.kind === "move") {
        if (Qt(u)) {
          const k = p.mode === "frame" ? (() => {
            const N = ze();
            return N ? fr(s, N, performance.now()) : null;
          })() : ur(s, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: u,
            startUv: k,
            snapshot: mn(sr(u.actionGroupId, u.layerKind)),
            frameSnapshot: mn(ai(u.actionGroupId, u.layerKind))
          }, _t(s), E.setPointerCapture(i.pointerId);
          return;
        }
        if (hn(u)) {
          const k = p.mode === "frame" ? (() => {
            const N = ze();
            return N ? fr(s, N, performance.now()) : null;
          })() : ur(s, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: u,
            startUv: k,
            snapshot: mn(In().find((N) => String((N == null ? void 0 : N.id) || "") === on(u.rasterObjectId || u.id || "")))
          }, _t(s), E.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: u,
          offset: { x: s.x - h.center.x, y: s.y - h.center.y }
        }, _t(s), E.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = Xd(s);
    if (m) {
      const b = p.selectedId !== m.item.id;
      if (b && p.selectedId && (rt(), On()), gr(m.item), t === "cutout" && b && (p.cutoutAspectOpen = !1), b && Ve(), Ye(), he(), wn(m.item)) {
        _t(s);
        return;
      }
      p.interaction = {
        kind: Qt(m.item) ? "move_stroke_group" : hn(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: s.x - m.geom.center.x, y: s.y - m.geom.center.y },
        startUv: Qt(m.item) || hn(m.item) ? p.mode === "frame" ? (() => {
          const k = ze();
          return k ? fr(s, k, performance.now()) : null;
        })() : ur(s, performance.now()) : null,
        snapshot: Qt(m.item) ? mn(sr(m.item.actionGroupId, m.item.layerKind)) : hn(m.item) ? mn(In().find((k) => String((k == null ? void 0 : k.id) || "") === on(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Qt(m.item) ? mn(ai(m.item.actionGroupId, m.item.layerKind)) : null
      }, _t(s), E.setPointerCapture(i.pointerId);
      return;
    }
    const y = !!p.selectedId;
    if (y && (rt(), On()), Qo(), y && Ve(), Ye(), he(), p.mode === "pano") {
      const b = cs(i);
      p.interaction = { kind: "view", last: b, lastTs: performance.now() }, un.startDrag(b.x, b.y, i.pointerId, performance.now()), _t(s), E.setPointerCapture(i.pointerId);
    }
  };
  function A1(i, s) {
    if (!S || !At.playing) return;
    if (At.stop(), i.kind === "move_multi") {
      const h = Xa(i.items);
      if (!(h != null && h.visible)) return;
      i.offset = { x: s.x - h.center.x, y: s.y - h.center.y }, i.startCenter = { x: h.center.x, y: h.center.y };
      for (const m of i.stickerSnapshots) {
        const y = i.items.find((k) => String((k == null ? void 0 : k.id) || "") === m.id), b = y ? qt(y) : null;
        b != null && b.visible && (m.yaw_deg = Number(Nt(y).yaw_deg || 0), m.pitch_deg = Number(Nt(y).pitch_deg || 0), m.center = { x: b.center.x, y: b.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const l = qt(i.item);
    if (!(l != null && l.visible)) return;
    const u = Nt(i.item);
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
  E.onpointermove = (i) => {
    var u, h, m, y, b, k, N, A, C, V, B, ne, J, te, oe, pe, re, Se, je, Ke, et, ye;
    const s = Mi(i);
    if (us(s, !0), !p.interaction) {
      _t(s);
      return;
    }
    _t(s);
    const l = p.interaction;
    if (nt && (s.x !== nt.x || s.y !== nt.y)) {
      const ae = nt;
      nt = null, l.kind !== "view" && l.kind !== "marquee_select" && A1(l, ae);
    }
    if (l.kind === "paint_stroke") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let me = !1;
      ae.forEach((we) => {
        const Le = Mi(we);
        if (p.mode === "frame") {
          const He = ze(), Oe = He ? tn(He) : null;
          if (Oe) {
            const ft = (Le.x - Oe.x) / Math.max(1, Oe.w), Xe = (Le.y - Oe.y) / Math.max(1, Oe.h);
            if (!(ft >= 0 && ft <= 1 && Xe >= 0 && Xe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, _1(l));
          }
        }
        y1(l, Le, performance.now()) && (me = !0);
      }), me && he({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let me = !1;
      if (ae.forEach((we) => {
        const Le = Mi(we);
        if (p.mode === "frame") {
          const He = ze(), Oe = He ? tn(He) : null;
          if (Oe) {
            const ft = (Le.x - Oe.x) / Math.max(1, Oe.w), Xe = (Le.y - Oe.y) / Math.max(1, Oe.h);
            if (!(ft >= 0 && ft <= 1 && Xe >= 0 && Xe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, w1(l));
          }
        }
        b1(l, Le, performance.now()) && (me = !0);
      }), me) {
        const we = zn();
        we && p.paintEngine.updateActiveStroke(l.stroke, we), he({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const ae = performance.now(), me = p.mode === "unwrap" ? s : cs(i);
      un.moveDrag(me.x, me.y, p.mode === "unwrap" ? "unwrap" : "pano", ae), l.lastTs = ae, l.last = me, he({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const ae = yc(l.shot);
      if (!ae || !l.shot) return;
      const me = s.x - l.last.x, we = s.y - l.last.y, Le = P0(l.shot, {
        dx: me,
        dy: we,
        focalPx: ae.focalPx,
        invertX: ((u = _.ui_settings) == null ? void 0 : u.invert_view_x) === !0,
        invertY: ((h = _.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      l.shot.yaw_deg = Le.yaw_deg, l.shot.pitch_deg = Le.pitch_deg, l.changed = l.changed || Math.abs(me) > 0 || Math.abs(we) > 0, l.last = s, he({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      N1(l, s, i);
      return;
    }
    if (l.kind === "move") {
      const ae = s.x - l.offset.x, me = s.y - l.offset.y;
      if (p.mode === "frame" && t === "cutout") {
        const we = ze(), Le = tn(we);
        if (!we || !Le) return;
        const He = {
          x: q((ae - Le.x) / Math.max(1, Le.w), 0, 1),
          y: q((me - Le.y) / Math.max(1, Le.h), 0, 1)
        }, Oe = uc(we, He);
        if (!Oe) return;
        const ft = Cs(Oe);
        ar(l.item, { yaw_deg: ft.yaw, pitch_deg: ft.pitch });
      } else if (p.mode === "unwrap") {
        const we = ui(), Le = q((ae - we.x) / Math.max(we.w, 1), 0, 1), He = q((me - we.y) / Math.max(we.h, 1), 0, 1);
        ar(l.item, { yaw_deg: Ut(Le * 360 - 180), pitch_deg: q(90 - He * 180, -90, 90) });
      } else {
        const we = rc(ae, me), Le = Cs(we);
        ar(l.item, { yaw_deg: Le.yaw, pitch_deg: Le.pitch });
      }
      gt(l.item) && Bt(), he({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const ae = p.mode === "frame" ? (() => {
        const Le = ze();
        return Le ? fr(s, Le, performance.now()) : null;
      })() : ur(s, performance.now());
      if (!ae || !l.startUv) return;
      const me = qn(Number(ae.u || 0), Number(l.startUv.u || 0)), we = Number(ae.v || 0) - Number(l.startUv.v || 0);
      Kf((m = l.item) == null ? void 0 : m.actionGroupId, me, we, l.snapshot, (y = l.item) == null ? void 0 : y.layerKind, l.frameSnapshot) && (cr({ rebuildPaintEngine: !1 }), he({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const ae = p.mode === "frame" ? (() => {
        const Le = ze();
        return Le ? fr(s, Le, performance.now()) : null;
      })() : ur(s, performance.now());
      if (!ae || !l.startUv) return;
      const me = qn(Number(ae.u || 0), Number(l.startUv.u || 0)), we = Number(ae.v || 0) - Number(l.startUv.v || 0);
      Uf(((b = l.item) == null ? void 0 : b.rasterObjectId) || ((k = l.item) == null ? void 0 : k.id) || "", me, we, l.snapshot) && (co(), he({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      ay(((N = l.item) == null ? void 0 : N.rasterObjectId) || ((A = l.item) == null ? void 0 : A.id) || "", me, l.snapshot) && (co(), he({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const ae = s.x - Number(((C = l.offset) == null ? void 0 : C.x) || 0), me = s.y - Number(((V = l.offset) == null ? void 0 : V.y) || 0);
      let we = !1, Le = !1, He = !1;
      const Oe = ae - Number(((B = l.startCenter) == null ? void 0 : B.x) || ae), ft = me - Number(((ne = l.startCenter) == null ? void 0 : ne.y) || me);
      for (const Xe of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const $t = (t === "cutout" ? Wl() : Rt()).find((It) => String((It == null ? void 0 : It.id) || "") === String(Xe.id || ""));
        if (!$t || !gt($t)) continue;
        const fn = {
          x: Number(((J = Xe.center) == null ? void 0 : J.x) || 0) + Oe,
          y: Number(((te = Xe.center) == null ? void 0 : te.y) || 0) + ft
        };
        if (p.mode === "frame" && t === "cutout") {
          const It = ze(), Vt = tn(It);
          if (!It || !Vt) continue;
          const Pi = {
            x: q((fn.x - Vt.x) / Math.max(1, Vt.w), 0, 1),
            y: q((fn.y - Vt.y) / Math.max(1, Vt.h), 0, 1)
          }, yh = uc(It, Pi);
          if (!yh) continue;
          const bh = Cs(yh);
          ar($t, { yaw_deg: bh.yaw, pitch_deg: bh.pitch });
        } else if (p.mode === "unwrap") {
          const It = ui(), Vt = q((fn.x - It.x) / Math.max(It.w, 1), 0, 1), Pi = q((fn.y - It.y) / Math.max(It.h, 1), 0, 1);
          ar($t, { yaw_deg: Ut(Vt * 360 - 180), pitch_deg: q(90 - Pi * 180, -90, 90) });
        } else {
          const It = rc(fn.x, fn.y), Vt = Cs(It);
          ar($t, { yaw_deg: Vt.yaw, pitch_deg: Vt.pitch });
        }
        we = !0;
      }
      for (const Xe of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const $t = {
          x: Number(((oe = Xe.center) == null ? void 0 : oe.x) || 0) + Oe,
          y: Number(((pe = Xe.center) == null ? void 0 : pe.y) || 0) + ft
        }, fn = p.mode === "frame" ? (() => {
          const Vt = ze();
          return Vt ? fr($t, Vt, performance.now()) : null;
        })() : ur($t, performance.now()), It = Xe.centerUv || null;
        if (fn && It) {
          const Vt = qn(Number(fn.u || 0), Number(It.u || 0)), Pi = Number(fn.v || 0) - Number(It.v || 0);
          Kf(Xe.id, Vt, Pi, Xe.snapshot, Xe.layerKind, Xe.frameSnapshot) && (we = !0, Le = !0);
        }
      }
      for (const Xe of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const $t = {
          x: Number(((re = Xe.center) == null ? void 0 : re.x) || 0) + Oe,
          y: Number(((Se = Xe.center) == null ? void 0 : Se.y) || 0) + ft
        }, fn = p.mode === "frame" ? (() => {
          const Vt = ze();
          return Vt ? fr($t, Vt, performance.now()) : null;
        })() : ur($t, performance.now()), It = Xe.centerUv || null;
        if (fn && It) {
          const Vt = qn(Number(fn.u || 0), Number(It.u || 0)), Pi = Number(fn.v || 0) - Number(It.v || 0);
          Uf(Xe.id, Vt, Pi, Xe.snapshot) && (we = !0, He = !0);
        }
      }
      we && (Le ? cr({ rebuildPaintEngine: !1 }) : He ? co() : Bt(), he({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      Bf((je = l.item) == null ? void 0 : je.actionGroupId, me, 0, l.snapshot, (Ke = l.item) == null ? void 0 : Ke.layerKind, l.frameSnapshot) && (cr({ rebuildPaintEngine: !1 }), he({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let ae = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * zi;
      i.shiftKey && (ae = Math.round(ae / 45) * 45), Bf((et = l.item) == null ? void 0 : et.actionGroupId, 1, ae, l.snapshot, (ye = l.item) == null ? void 0 : ye.layerKind, l.frameSnapshot) && (cr({ rebuildPaintEngine: !1 }), he({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = s, he({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      ar(l.item, { hFOV_deg: q(l.startHFOV * me, 1, 179), vFOV_deg: q(l.startVFOV * me, 1, 179) }), Cn(l.item) || (l.item.aspect_id = $i(l.item)), gt(l.item) && Bt(), he({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      ar(l.item, { hFOV_deg: q(l.startHFOV * me, 1, 179) }), Cn(l.item) || (l.item.aspect_id = $i(l.item)), gt(l.item) && Bt(), he({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      ar(l.item, { vFOV_deg: q(l.startVFOV * me, 1, 179) }), Cn(l.item) || (l.item.aspect_id = $i(l.item)), gt(l.item) && Bt(), he({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let me = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * zi, we = l.startRot - me;
      i.shiftKey && (we = Math.round(we / 45) * 45), ar(l.item, { [gt(l.item) ? "rot_deg" : "roll_deg"]: we }), gt(l.item) && Bt(), he({ localOnly: !0 });
    }
  }, E.onpointerup = () => {
    var s, l, u, h, m, y, b, k;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        ao();
        const N = vc(p.interaction), A = !!p.interaction._hasCommittedSegments;
        if (N || A) {
          cr();
          const C = String(((u = p.interaction.stroke) == null ? void 0 : u.actionGroupId) || "").trim();
          if (C) {
            const B = dn().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === C);
            B && (B.frame = null);
          }
          const V = zn();
          V && (N ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(V), kd()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, V) : p.paintEngine.cancelActiveStroke(V)), rt(), On(), Ve(), Ye(), e.setDirtyCanvas(!0, !0), he();
        } else {
          const C = zn();
          C && p.paintEngine.cancelActiveStroke(C);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const N = qd(p.interaction.start, p.interaction.current), C = [
          ...t === "cutout" ? cc().filter((V) => !Vn(V)) : [...Rt()],
          ...ny(),
          ...ry()
        ].filter((V) => S1(N, qt(V)));
        cy(C, ((y = C[C.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && C.length && (p.cutoutAspectOpen = !1), Ve(), Ye(), he();
      } else if (((b = p.interaction) == null ? void 0 : b.kind) === "pan_frame" || ((k = p.interaction) == null ? void 0 : k.kind) === "roll_frame")
        p.interaction.changed && (rt(), at(), Ve());
      else if (p.interaction && p.interaction.kind !== "view") {
        let N = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (N = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (N = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (N = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (N = !0), N && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? cr({ rebuildPaintEngine: !0 }) : co()), rt(), On(), e.setDirtyCanvas(!0, !0), uo(), Ye(), he();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Ni(), ao(), i && i.kind === "view" && un.endDrag(performance.now()), Vr(), Ye(), _t(p.pointerPos), he();
    }
  }, E.onpointercancel = () => {
    var i, s, l;
    if (!ca()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && un.endDrag(performance.now()), ((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        ao();
        const u = zn();
        u && p.paintEngine.cancelActiveStroke(u);
      }
      p.interaction = null, ao(), Vr(), _t(p.pointerPos), he({ localOnly: !0 });
    }
  }, E.onlostpointercapture = () => {
    ca();
  }, E.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, E.onmousemove = (i) => {
    const s = Mi(i), l = us(s, !0);
    p.interaction || (_t(s), l && p.mode === "frame" && p.primaryTool === "cursor" && he({ localOnly: !0 }));
  }, E.onmouseleave = () => {
    us(p.pointerPos, !1), _t(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && he({ localOnly: !0 });
  }, E.onwheel = (i) => {
    if (p.mode === "frame") {
      const s = Mi(i), l = mf(i);
      l && f1(s, l) && he({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (un.applyWheelEvent(i) && he({ localOnly: !0 }), i.preventDefault());
  }, E.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Xn(!0));
  }, E.ondrop = (i) => {
    var u;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Ie.depth = 0, Xn(!1);
    const l = Array.from(((u = i.dataTransfer) == null ? void 0 : u.files) || []).find((h) => Pr(h));
    l && Rd(l);
  };
  const Zd = (i) => {
    t !== "stickers" && t !== "cutout" || r || $r(i) && (Ie.depth += 1, Xn(!0), i.preventDefault());
  }, Qd = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Ie.active && $r(i) && Xn(!0), Ie.active && i.preventDefault());
  }, eh = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Ie.active) return;
    Ie.depth = Math.max(0, Ie.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Ie.depth === 0 || s) && Xn(!1);
  }, th = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Ie.depth = 0, Xn(!1), $r(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Zd, !0), window.addEventListener("dragover", Qd, !0), window.addEventListener("dragleave", eh, !0), window.addEventListener("drop", th, !0);
  function xc() {
    const { canUndo: i, canRedo: s } = Td();
    vo(I.toolButtons, "value", "undo", { disabled: !i }), vo(I.toolButtons, "value", "redo", { disabled: !s });
  }
  const nh = (i, s, l = !1) => {
    var N;
    Jn();
    const u = t === "cutout" && p.mode === "frame" ? ze() : null, h = u || Ct(), m = u ? "shot" : qa(), y = S && p.inspectCamera;
    if (!y && (!h || m === "stroke" || wn(h))) return;
    const b = (((N = I.sidePanel) == null ? void 0 : N.params) || []).find((A) => A.key === i);
    if (!b || b.enabled === !1) return;
    let k = Number(s);
    if (Number.isNaN(k) && (k = 0), k = q(k, Number(b.min), Number(b.max)), i === "yaw_deg" && (k = Ut(k)), y) {
      Ox(_.camera, p.frame, i, k), Ve(), l && rt();
      return;
    }
    i === "opacity" ? Fx(h, p.frame, k / 100) : ar(h, { [i]: k }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = $i(h)), Ve(), he(), l && rt();
  };
  Q == null || Q.addEventListener("click", async (i) => {
    var u, h, m, y, b, k, N;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const A = Hn(s.getAttribute("data-coverage"));
      if (A === Hn(_.coverage)) return;
      _.coverage = A, p.coverage = A, d && (d.value = String(A)), a ? Fe.backgroundDirty = !0 : (On(), c1({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ve(), Ye(), he();
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
      if (A && (t === "stickers" ? C = Rt().find((V) => String((V == null ? void 0 : V.id) || "") === A) || null : C = ((m = Yf().find((V) => {
        var B;
        return String(((B = V == null ? void 0 : V.item) == null ? void 0 : B.id) || "") === A;
      })) == null ? void 0 : m.item) || null), gr(C || null), C && !Qt(C)) {
        const V = Nt(C);
        to(
          Ut(Number(V.yaw_deg || 0)),
          q(Number(V.pitch_deg || 0), -89.9, 89.9),
          p.viewFov
        );
      }
      Ve(), Ye(), he();
      return;
    }
    if (l === "copy-state-inline") {
      const A = Ct(), C = qa();
      if (!A || C === "stroke" || lr().length > 1) return;
      const V = JSON.stringify(t === "cutout" && C !== "image" ? rd(A) : xy(Nt(A)));
      try {
        await navigator.clipboard.writeText(V), (y = I.sidePanel) != null && y.copyStateButton && (I.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = I.sidePanel) != null && B.copyStateButton && (I.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const A = String(s.getAttribute("data-visibility") || "");
      A === "panorama" ? p.showPanorama = !p.showPanorama : A === "objects" ? p.showObjects = !p.showObjects : A === "mask" && (p.showMask = !p.showMask), Ve(), he();
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", gc(), Ve(), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), he();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", gc(), Ve(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), he();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, gc(), Ve(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), he();
      return;
    }
    if (l === "close-preview") {
      mo();
      return;
    }
    if (l === "cancel-close") {
      mo();
      return;
    }
    l === "save-close" && (s1(), mo());
  }), Q == null || Q.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && nh(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), Q == null || Q.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && nh(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Sc = () => od();
  Sc(), T.addEventListener("click", (i) => {
    var b, k, N, A;
    if ((k = (b = i.target) == null ? void 0 : b.matches) != null && k.call(b, "[data-confirm-overlay]")) {
      const C = (N = I.confirmDialog) == null ? void 0 : N.resolve;
      I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, C == null || C(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const C = p.mode;
      p.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (C !== "frame" && (Fe.frameSafeRect = null), Ve(), Ye()), ls(), Vr(), he();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const C = String(l.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = C, (C === "paint" || C === "mask") && Qo({ preservePanelValues: !0 }), En(), Ve(), Ye(), he();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const C = String(l.getAttribute("data-tool-ui-action") || "");
        if ((C === "undo" || C === "redo") && l.disabled) return;
        C === "undo" ? dc(-1) : C === "redo" ? dc(1) : C === "clear" ? t1() : C === "add" || C === "add-image" ? Bb() : C === "add-or-look" && Zb();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const C = String(l.getAttribute("data-paint-tool") || "pen");
        p.paintTool = C, Qo({ preservePanelValues: !0 }), Fn[C] && (p.activeBrushPresetId = C), En(), Ve(), Ye(), he();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), Qo({ preservePanelValues: !0 }), En(), Ve(), Ye(), he();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const C = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        n1(C);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const C = Ys.find((V) => V.id === l.getAttribute("data-paint-color-swatch"));
        if (!C) return;
        p.paintColor = jn(C.color), le(!0), En();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), H && !H.hidden ? le(!0) : $e(), En();
        return;
      }
    }
    const u = String(((A = l == null ? void 0 : l.getAttribute) == null ? void 0 : A.call(l, "data-action")) || "");
    if (u === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(W instanceof HTMLVideoElement)) return;
      Ce.resumeAfterScrub = !1, pc();
      return;
    }
    if (u === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), Qf(), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (u === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(W instanceof HTMLVideoElement)) return;
      const C = !I.videoTransport.loop;
      I.videoTransport.loop = C, W.loop = C, si({
        hasAudio: I.videoTransport.hasAudio,
        loop: C,
        muted: W.muted,
        volume: Number(W.volume ?? I.videoTransport.volume ?? 1)
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
        zd(C, String(l.getAttribute("data-aspect") || "1:1")), I.frameRail.aspectOpen = !1, uo(), rt(), at(), Vr(), he();
        return;
      }
      if (u === "frame-aspect-custom") {
        const C = p.mode === "frame" ? ze() : null, V = l.getAttribute("data-custom-width"), B = l.getAttribute("data-custom-height");
        if (!C || !i1(C, V, B)) return;
        I.frameRail.aspectOpen = !1, uo(), rt(), at(), Vr(), he();
        return;
      }
      if (u === "frame-rotate-90") {
        const C = p.mode === "frame" ? ze() : null;
        if (!C || C.locked === !0) return;
        jd(C), I.frameRail.aspectOpen = !1, uo(), rt(), at(), Vr(), he();
        return;
      }
      if (u === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Ye(), he();
        return;
      }
      if (u === "aspect-set") {
        const C = Ct();
        if (!C) return;
        const V = String(l.getAttribute("data-aspect") || "1:1");
        zd(C, V), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, uo(), rt(), at(), Ye(), he();
        return;
      }
      if (u === "rotate-90") {
        const C = Ct();
        if (!C) return;
        jd(C), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, uo(), rt(), at(), Ye(), he();
        return;
      }
      if (u === "bring-front") {
        o1();
        return;
      }
      if (u === "send-back") {
        a1();
        return;
      }
      if (u === "duplicate") {
        r1();
        return;
      }
      if (u === "replace-image") {
        Xb();
        return;
      }
      if (u === "toggle-lock") {
        ly();
        return;
      }
      if (u === "back-initial") {
        my();
        return;
      }
      if (u === "toggle-visible") {
        py();
        return;
      }
      if (u === "delete") {
        Vd();
        return;
      }
    }
    if (u === "reset-view") {
      if (p.mode === "frame") return;
      to(0, 0, 100, 180, 680);
      return;
    }
    if (u === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, lA(e == null ? void 0 : e.id, p.showGrid), Sc(), he();
      return;
    }
    if (u === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), E1();
      return;
    }
    if (u === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const C = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = C, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = C ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), sh(), he();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), y = p.customPaintHistory[m];
    y && (p.customPaintColor = jn(y), p.paintColor = jn(y), En());
  }), T.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(W instanceof HTMLVideoElement)) return;
      At.playing && (Ce.resumeAfterScrub = !0), At.seek(Li(Number(s.value || 0), Za()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(W instanceof HTMLVideoElement)) return;
      const m = q(Number(l.value || 0), 0, 1);
      W.volume = m, W.muted = m <= 1e-4, si({
        hasAudio: I.videoTransport.hasAudio,
        muted: W.muted,
        volume: m
      });
      return;
    }
    const u = i.target.closest("[data-paint-size-slider]");
    if (u) {
      if (u.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(u.value)))), y = hi(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[y] = m, En(), g1();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: q(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = jn(m), p.paintColor = jn(m), En();
    }
  }), T.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(W instanceof HTMLVideoElement)) return;
      Ce.resumeAfterScrub && At.play(), Ce.resumeAfterScrub = !1;
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
    !s || !T.contains(s) || se.target !== s && (se.target = s, se.timer && clearTimeout(se.timer), se.timer = window.setTimeout(() => {
      se.target === s && k1(s);
    }, 220));
  }), T.addEventListener("pointerout", (i) => {
    var u, h;
    const s = i.target.closest("[data-tip]");
    !s || se.target !== s || (i.relatedTarget instanceof Element ? (h = (u = i.relatedTarget).closest) == null ? void 0 : h.call(u, "[data-tip]") : null) === s || Ni();
  }), T.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Ni();
  });
  const C1 = (i, s) => {
    var b;
    if (!ee) return;
    const l = ee.getBoundingClientRect(), u = q((i - l.left) / Math.max(1, l.width), 0, 1), h = 1 - q((s - l.top) / Math.max(1, l.height), 0, 1), m = uu(p.customPaintColor), y = { ...cu(m.h, u, h), a: Number(((b = p.customPaintColor) == null ? void 0 : b.a) ?? 1) };
    p.customPaintColor = jn(y), p.paintColor = jn(y), En();
  }, I1 = (i) => {
    var m;
    if (!ge) return;
    const s = ge.getBoundingClientRect(), l = q((i - s.left) / Math.max(1, s.width), 0, 1), u = uu(p.customPaintColor), h = { ...cu(l, u.s, u.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = jn(h), p.paintColor = jn(h), En();
  }, rh = (i, s) => {
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
    i.preventDefault(), i.stopPropagation(), rh(i, (s) => C1(s.clientX, s.clientY));
  }), ge && (ge.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), rh(i, (s) => I1(s.clientX));
  }), T.addEventListener("click", (i) => {
    var h;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", u = (h = I.confirmDialog) == null ? void 0 : h.resolve;
    I.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, u == null || u(l);
  });
  const ih = () => {
    const i = !!p.fullscreen;
    vo(I.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Ne.fullscreen_close : Ne.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, ds = (i) => {
    const s = !!i;
    p.fullscreen !== s && (p.fullscreen = s, T.classList.toggle("pano-modal-fullscreen", s), s ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), Sc(), ih(), Xt(), he());
  }, oh = () => document.fullscreenElement === _e, E1 = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        ds(!p.fullscreen);
        return;
      }
      oh() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = _e.requestFullscreen) == null ? void 0 : i.call(_e));
    } catch {
      ds(!p.fullscreen);
    }
  }, ah = () => {
    document.fullscreenEnabled && ds(oh());
  };
  document.addEventListener("fullscreenchange", ah), ih();
  const sh = () => {
    const i = !!p.outputPreviewExpanded;
    I.outputPreviewToggle.icon = i ? Ne.fullscreen_close : Ne.fullscreen, I.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", I.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  sh();
  const kc = e.onConnectionsChange;
  let Mc = null, lh = () => {
  };
  !r && t === "stickers" && (lh = E0(e, (i = "sync") => {
    i === "executed" && (Y2(We, Ns), li(), S && Gb()), id(i);
  }, { editor: !0 }), Mc = function(...s) {
    typeof kc == "function" && kc.apply(this, s), li(), Qr(this, "connections");
  }, e.onConnectionsChange = Mc), r || Qp.set(String(e.id ?? "0"), () => fd());
  let po = null;
  const mo = async () => po || (po = (async () => {
    var i, s, l, u, h, m, y, b;
    return Qp.delete(String(e.id ?? "0")), d1(), r || On(), document.fullscreenElement === _e && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", ah), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Gd && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (h = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || h.call(u, !0, !0), (b = (y = (m = Ar) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || b.call(y, !0, !0), Ni(), $b(), W instanceof HTMLVideoElement && W.pause(), Ue.forEach((k) => {
      try {
        k();
      } catch {
      }
    }), Wn.dispose(), Xn(!1), window.removeEventListener("keydown", ch, !0), window.removeEventListener("keydown", uh, !0), window.removeEventListener("keydown", dh, !0), window.removeEventListener("keyup", hh, !0), window.removeEventListener("keydown", hs, !0), window.removeEventListener("keyup", hs, !0), window.removeEventListener("blur", ph), window.removeEventListener("keydown", mh, !0), window.removeEventListener("dragenter", Zd, !0), window.removeEventListener("dragover", Qd, !0), window.removeEventListener("dragleave", eh, !0), window.removeEventListener("drop", th, !0), !r && t === "stickers" && (e.onConnectionsChange === Mc && (e.onConnectionsChange = kc), lh()), G.unmount(), z.remove(), l1(), po = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), po = null, !1)), po), ch = (i) => {
    var s, l, u, h, m;
    if (i.key === "Escape") {
      if (ca()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === _e) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (u = document.exitFullscreen) == null || u.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), ds(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), mo();
    }
  }, uh = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), u = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || u === 46) && !(s === "Backspace" || l === "Backspace" || u === 8)) return;
    const y = i.target, b = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    if (b === "INPUT" || b === "TEXTAREA" || y != null && y.isContentEditable) return;
    if (Ee.selection) {
      Hb(), i.preventDefault(), i.stopPropagation();
      return;
    }
    Ct() && (Vd(), i.preventDefault(), i.stopPropagation());
  }, fh = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !S || !I.timeline.visible || I.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !_e.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !D2.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, dh = (i) => {
    fh(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || pc());
  }, hh = (i) => {
    fh(i) && (i.preventDefault(), i.stopPropagation());
  }, hs = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    p.marqueeModifier === s && p.altModifier === l || (p.marqueeModifier = s, p.altModifier = l, jr(), _t(p.pointerPos));
  }, ph = () => {
    p.marqueeModifier = !1, p.altModifier = !1, jr(), _t(p.pointerPos);
  }, mh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const u = i.target, h = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || u != null && u.isContentEditable) return;
    const { canUndo: m, canRedo: y } = Td();
    i.shiftKey && !y || !i.shiftKey && !m || (dc(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", ch, !0), window.addEventListener("keydown", uh, !0), window.addEventListener("keydown", dh, !0), window.addEventListener("keyup", hh, !0), window.addEventListener("keydown", hs, !0), window.addEventListener("keyup", hs, !0), window.addEventListener("blur", ph), window.addEventListener("keydown", mh, !0), _e.addEventListener("pointerdown", (i) => {
    i.target === _e && mo();
  });
  function yr(i, s, { rollbackState: l = !1 } = {}) {
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
  yr("cutout-focus", Py), !r && t === "stickers" && yr("external-sticker-sync", () => id("open"), { rollbackState: !0 }), qb().catch((i) => {
    I.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), yr("history", rt), yr("undo-redo", xc), yr("paint-ui", En), yr("side-panel", Ve), yr("look-at-frame", tc), yr("video-source", li), yr("canvas-size", Id), yr("cursor", () => _t(p.pointerPos)), he(), Fe.rafId = requestAnimationFrame(Od);
}
Ar.registerExtension(pk({
  app: Ar,
  openEditor: pA,
  attachStickers: PM,
  attachCutout: AM,
  attachPreview: NM,
  restoreOutput: hM,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: R2
}));
