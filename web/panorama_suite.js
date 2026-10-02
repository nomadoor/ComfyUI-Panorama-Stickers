import * as Rs from "../../scripts/app.js";
import { app as Er } from "../../scripts/app.js";
import { api as jt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function af(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _t = {}, Oo = [], Or = () => {
}, hm = () => !1, Cl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Il = (e) => e.startsWith("onUpdate:"), _n = Object.assign, sf = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, U1 = Object.prototype.hasOwnProperty, ht = (e, t) => U1.call(e, t), Je = Array.isArray, Fo = (e) => Wa(e) === "[object Map]", pm = (e) => Wa(e) === "[object Set]", Ih = (e) => Wa(e) === "[object Date]", et = (e) => typeof e == "function", Wt = (e) => typeof e == "string", Fr = (e) => typeof e == "symbol", bt = (e) => e !== null && typeof e == "object", mm = (e) => (bt(e) || et(e)) && et(e.then) && et(e.catch), gm = Object.prototype.toString, Wa = (e) => gm.call(e), Y1 = (e) => Wa(e).slice(8, -1), ym = (e) => Wa(e) === "[object Object]", lf = (e) => Wt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Pa = /* @__PURE__ */ af(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), El = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, X1 = /-\w/g, Nn = El(
  (e) => e.replace(X1, (t) => t.slice(1).toUpperCase())
), q1 = /\B([A-Z])/g, to = El(
  (e) => e.replace(q1, "-$1").toLowerCase()
), Ol = El((e) => e.charAt(0).toUpperCase() + e.slice(1)), Tc = El(
  (e) => e ? `on${Ol(e)}` : ""
), Ar = (e, t) => !Object.is(e, t), $s = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, bm = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, cf = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Eh;
const Fl = () => Eh || (Eh = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function wt(e) {
  if (Je(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = Wt(r) ? ev(r) : wt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (Wt(e) || bt(e))
    return e;
}
const J1 = /;(?![^(]*\))/g, Z1 = /:([^]+)/, Q1 = /\/\*[^]*?\*\//g;
function ev(e) {
  const t = {};
  return e.replace(Q1, "").split(J1).forEach((n) => {
    if (n) {
      const r = n.split(Z1);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function at(e) {
  let t = "";
  if (Wt(e))
    t = e;
  else if (Je(e))
    for (let n = 0; n < e.length; n++) {
      const r = at(e[n]);
      r && (t += r + " ");
    }
  else if (bt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const tv = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", nv = /* @__PURE__ */ af(tv);
function vm(e) {
  return !!e || e === "";
}
function rv(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = uf(e[r], t[r]);
  return n;
}
function uf(e, t) {
  if (e === t) return !0;
  let n = Ih(e), r = Ih(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Fr(e), r = Fr(t), n || r)
    return e === t;
  if (n = Je(e), r = Je(t), n || r)
    return n && r ? rv(e, t) : !1;
  if (n = bt(e), r = bt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const f = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (f && !d || !f && d || !uf(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const _m = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Wt(e) ? e : e == null ? "" : Je(e) || bt(e) && (e.toString === gm || !et(e.toString)) ? _m(e) ? rt(e.value) : JSON.stringify(e, wm, 2) : String(e), wm = (e, t) => _m(t) ? wm(e, t.value) : Fo(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Dc(r, a) + " =>"] = o, n),
    {}
  )
} : pm(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Dc(n))
} : Fr(t) ? Dc(t) : bt(t) && !Je(t) && !ym(t) ? String(t) : t, Dc = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Fr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ln;
class iv {
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
function ov() {
  return Ln;
}
let Mt;
const Lc = /* @__PURE__ */ new WeakSet();
class xm {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ln && Ln.active && Ln.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Lc.has(this) && (Lc.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || km(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Oh(this), Mm(this);
    const t = Mt, n = mr;
    Mt = this, mr = !0;
    try {
      return this.fn();
    } finally {
      Nm(this), Mt = t, mr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        hf(t);
      this.deps = this.depsTail = void 0, Oh(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Lc.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    wu(this) && this.run();
  }
  get dirty() {
    return wu(this);
  }
}
let Sm = 0, Aa, Ca;
function km(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ca, Ca = e;
    return;
  }
  e.next = Aa, Aa = e;
}
function ff() {
  Sm++;
}
function df() {
  if (--Sm > 0)
    return;
  if (Ca) {
    let t = Ca;
    for (Ca = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Aa; ) {
    let t = Aa;
    for (Aa = void 0; t; ) {
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
function Mm(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Nm(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), hf(r), av(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function wu(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Pm(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Pm(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Da) || (e.globalVersion = Da, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !wu(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Mt, r = mr;
  Mt = e, mr = !0;
  try {
    Mm(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ar(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Mt = n, mr = r, Nm(e), e.flags &= -3;
  }
}
function hf(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      hf(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function av(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let mr = !0;
const Am = [];
function ni() {
  Am.push(mr), mr = !1;
}
function ri() {
  const e = Am.pop();
  mr = e === void 0 ? !0 : e;
}
function Oh(e) {
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
let Da = 0;
class sv {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class pf {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Mt || !mr || Mt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Mt)
      n = this.activeLink = new sv(Mt, this), Mt.deps ? (n.prevDep = Mt.depsTail, Mt.depsTail.nextDep = n, Mt.depsTail = n) : Mt.deps = Mt.depsTail = n, Cm(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Mt.depsTail, n.nextDep = void 0, Mt.depsTail.nextDep = n, Mt.depsTail = n, Mt.deps === n && (Mt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Da++, this.notify(t);
  }
  notify(t) {
    ff();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      df();
    }
  }
}
function Cm(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        Cm(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const xu = /* @__PURE__ */ new WeakMap(), Wi = /* @__PURE__ */ Symbol(
  ""
), Su = /* @__PURE__ */ Symbol(
  ""
), La = /* @__PURE__ */ Symbol(
  ""
);
function yn(e, t, n) {
  if (mr && Mt) {
    let r = xu.get(e);
    r || xu.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new pf()), o.map = r, o.key = n), o.track();
  }
}
function Zr(e, t, n, r, o, a) {
  const c = xu.get(e);
  if (!c) {
    Da++;
    return;
  }
  const f = (d) => {
    d && d.trigger();
  };
  if (ff(), t === "clear")
    c.forEach(f);
  else {
    const d = Je(e), b = d && lf(n);
    if (d && n === "length") {
      const g = Number(r);
      c.forEach((w, x) => {
        (x === "length" || x === La || !Fr(x) && x >= g) && f(w);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && f(c.get(n)), b && f(c.get(La)), t) {
        case "add":
          d ? b && f(c.get("length")) : (f(c.get(Wi)), Fo(e) && f(c.get(Su)));
          break;
        case "delete":
          d || (f(c.get(Wi)), Fo(e) && f(c.get(Su)));
          break;
        case "set":
          Fo(e) && f(c.get(Wi));
          break;
      }
  }
  df();
}
function vo(e) {
  const t = /* @__PURE__ */ dt(e);
  return t === e ? t : (yn(t, "iterate", La), /* @__PURE__ */ rr(e) ? t : t.map(gr));
}
function Tl(e) {
  return yn(e = /* @__PURE__ */ dt(e), "iterate", La), e;
}
function Nr(e, t) {
  return /* @__PURE__ */ ii(e) ? Ho(/* @__PURE__ */ Ui(e) ? gr(t) : t) : gr(t);
}
const lv = {
  __proto__: null,
  [Symbol.iterator]() {
    return Rc(this, Symbol.iterator, (e) => Nr(this, e));
  },
  concat(...e) {
    return vo(this).concat(
      ...e.map((t) => Je(t) ? vo(t) : t)
    );
  },
  entries() {
    return Rc(this, "entries", (e) => (e[1] = Nr(this, e[1]), e));
  },
  every(e, t) {
    return Kr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Kr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Nr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return Kr(
      this,
      "find",
      e,
      t,
      (n) => Nr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Kr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Kr(
      this,
      "findLast",
      e,
      t,
      (n) => Nr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Kr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Kr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return $c(this, "includes", e);
  },
  indexOf(...e) {
    return $c(this, "indexOf", e);
  },
  join(e) {
    return vo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return $c(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Kr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ha(this, "pop");
  },
  push(...e) {
    return ha(this, "push", e);
  },
  reduce(e, ...t) {
    return Fh(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Fh(this, "reduceRight", e, t);
  },
  shift() {
    return ha(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Kr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ha(this, "splice", e);
  },
  toReversed() {
    return vo(this).toReversed();
  },
  toSorted(e) {
    return vo(this).toSorted(e);
  },
  toSpliced(...e) {
    return vo(this).toSpliced(...e);
  },
  unshift(...e) {
    return ha(this, "unshift", e);
  },
  values() {
    return Rc(this, "values", (e) => Nr(this, e));
  }
};
function Rc(e, t, n) {
  const r = Tl(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ rr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const cv = Array.prototype;
function Kr(e, t, n, r, o, a) {
  const c = Tl(e), f = c !== e && !/* @__PURE__ */ rr(e), d = c[t];
  if (d !== cv[t]) {
    const w = d.apply(e, a);
    return f ? gr(w) : w;
  }
  let b = n;
  c !== e && (f ? b = function(w, x) {
    return n.call(this, Nr(e, w), x, e);
  } : n.length > 2 && (b = function(w, x) {
    return n.call(this, w, x, e);
  }));
  const g = d.call(c, b, r);
  return f && o ? o(g) : g;
}
function Fh(e, t, n, r) {
  const o = Tl(e), a = o !== e && !/* @__PURE__ */ rr(e);
  let c = n, f = !1;
  o !== e && (a ? (f = r.length === 0, c = function(b, g, w) {
    return f && (f = !1, b = Nr(e, b)), n.call(this, b, Nr(e, g), w, e);
  }) : n.length > 3 && (c = function(b, g, w) {
    return n.call(this, b, g, w, e);
  }));
  const d = o[t](c, ...r);
  return f ? Nr(e, d) : d;
}
function $c(e, t, n) {
  const r = /* @__PURE__ */ dt(e);
  yn(r, "iterate", La);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ yf(n[0]) ? (n[0] = /* @__PURE__ */ dt(n[0]), r[t](...n)) : o;
}
function ha(e, t, n = []) {
  ni(), ff();
  const r = (/* @__PURE__ */ dt(e))[t].apply(e, n);
  return df(), ri(), r;
}
const uv = /* @__PURE__ */ af("__proto__,__v_isRef,__isVue"), Im = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Fr)
);
function fv(e) {
  Fr(e) || (e = String(e));
  const t = /* @__PURE__ */ dt(this);
  return yn(t, "has", e), t.hasOwnProperty(e);
}
class Em {
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
      return r === (o ? a ? wv : Dm : a ? Tm : Fm).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Je(t);
    if (!o) {
      let d;
      if (c && (d = lv[n]))
        return d;
      if (n === "hasOwnProperty")
        return fv;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ vn(t) ? t : r
    );
    if ((Fr(n) ? Im.has(n) : uv(n)) || (o || yn(t, "get", n), a))
      return f;
    if (/* @__PURE__ */ vn(f)) {
      const d = c && lf(n) ? f : f.value;
      return o && bt(d) ? /* @__PURE__ */ Mu(d) : d;
    }
    return bt(f) ? o ? /* @__PURE__ */ Mu(f) : /* @__PURE__ */ Xo(f) : f;
  }
}
class Om extends Em {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = Je(t) && lf(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ ii(a);
      if (!/* @__PURE__ */ rr(r) && !/* @__PURE__ */ ii(r) && (a = /* @__PURE__ */ dt(a), r = /* @__PURE__ */ dt(r)), !c && /* @__PURE__ */ vn(a) && !/* @__PURE__ */ vn(r))
        return b || (a.value = r), !0;
    }
    const f = c ? Number(n) < t.length : ht(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ vn(t) ? t : o
    );
    return t === /* @__PURE__ */ dt(o) && (f ? Ar(r, a) && Zr(t, "set", n, r) : Zr(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = ht(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && Zr(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Fr(n) || !Im.has(n)) && yn(t, "has", n), r;
  }
  ownKeys(t) {
    return yn(
      t,
      "iterate",
      Je(t) ? "length" : Wi
    ), Reflect.ownKeys(t);
  }
}
class dv extends Em {
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
const hv = /* @__PURE__ */ new Om(), pv = /* @__PURE__ */ new dv(), mv = /* @__PURE__ */ new Om(!0);
const ku = (e) => e, vs = (e) => Reflect.getPrototypeOf(e);
function gv(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ dt(o), c = Fo(a), f = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, b = o[e](...r), g = n ? ku : t ? Ho : gr;
    return !t && yn(
      a,
      "iterate",
      d ? Su : Wi
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
function _s(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function yv(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ dt(a), f = /* @__PURE__ */ dt(o);
      e || (Ar(o, f) && yn(c, "get", o), yn(c, "get", f));
      const { has: d } = vs(c), b = t ? ku : e ? Ho : gr;
      if (d.call(c, o))
        return b(a.get(o));
      if (d.call(c, f))
        return b(a.get(f));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && yn(/* @__PURE__ */ dt(o), "iterate", Wi), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ dt(a), f = /* @__PURE__ */ dt(o);
      return e || (Ar(o, f) && yn(c, "has", o), yn(c, "has", f)), o === f ? a.has(o) : a.has(o) || a.has(f);
    },
    forEach(o, a) {
      const c = this, f = c.__v_raw, d = /* @__PURE__ */ dt(f), b = t ? ku : e ? Ho : gr;
      return !e && yn(d, "iterate", Wi), f.forEach((g, w) => o.call(a, b(g), b(w), c));
    }
  };
  return _n(
    n,
    e ? {
      add: _s("add"),
      set: _s("set"),
      delete: _s("delete"),
      clear: _s("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ dt(this), c = vs(a), f = /* @__PURE__ */ dt(o), d = !t && !/* @__PURE__ */ rr(o) && !/* @__PURE__ */ ii(o) ? f : o;
        return c.has.call(a, d) || Ar(o, d) && c.has.call(a, o) || Ar(f, d) && c.has.call(a, f) || (a.add(d), Zr(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ rr(a) && !/* @__PURE__ */ ii(a) && (a = /* @__PURE__ */ dt(a));
        const c = /* @__PURE__ */ dt(this), { has: f, get: d } = vs(c);
        let b = f.call(c, o);
        b || (o = /* @__PURE__ */ dt(o), b = f.call(c, o));
        const g = d.call(c, o);
        return c.set(o, a), b ? Ar(a, g) && Zr(c, "set", o, a) : Zr(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ dt(this), { has: c, get: f } = vs(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ dt(o), d = c.call(a, o)), f && f.call(a, o);
        const b = a.delete(o);
        return d && Zr(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ dt(this), a = o.size !== 0, c = o.clear();
        return a && Zr(
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
    n[o] = gv(o, e, t);
  }), n;
}
function mf(e, t) {
  const n = yv(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    ht(n, o) && o in r ? n : r,
    o,
    a
  );
}
const bv = {
  get: /* @__PURE__ */ mf(!1, !1)
}, vv = {
  get: /* @__PURE__ */ mf(!1, !0)
}, _v = {
  get: /* @__PURE__ */ mf(!0, !1)
};
const Fm = /* @__PURE__ */ new WeakMap(), Tm = /* @__PURE__ */ new WeakMap(), Dm = /* @__PURE__ */ new WeakMap(), wv = /* @__PURE__ */ new WeakMap();
function xv(e) {
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
function Sv(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : xv(Y1(e));
}
// @__NO_SIDE_EFFECTS__
function Xo(e) {
  return /* @__PURE__ */ ii(e) ? e : gf(
    e,
    !1,
    hv,
    bv,
    Fm
  );
}
// @__NO_SIDE_EFFECTS__
function kv(e) {
  return gf(
    e,
    !1,
    mv,
    vv,
    Tm
  );
}
// @__NO_SIDE_EFFECTS__
function Mu(e) {
  return gf(
    e,
    !0,
    pv,
    _v,
    Dm
  );
}
function gf(e, t, n, r, o) {
  if (!bt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = Sv(e);
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
function Ui(e) {
  return /* @__PURE__ */ ii(e) ? /* @__PURE__ */ Ui(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ii(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function rr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function yf(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function dt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ dt(t) : e;
}
function Mv(e) {
  return !ht(e, "__v_skip") && Object.isExtensible(e) && bm(e, "__v_skip", !0), e;
}
const gr = (e) => bt(e) ? /* @__PURE__ */ Xo(e) : e, Ho = (e) => bt(e) ? /* @__PURE__ */ Mu(e) : e;
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ht(e) {
  return Nv(e, !1);
}
function Nv(e, t) {
  return /* @__PURE__ */ vn(e) ? e : new Pv(e, t);
}
class Pv {
  constructor(t, n) {
    this.dep = new pf(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ dt(t), this._value = n ? t : gr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ rr(t) || /* @__PURE__ */ ii(t);
    t = r ? t : /* @__PURE__ */ dt(t), Ar(t, n) && (this._rawValue = t, this._value = r ? t : gr(t), this.dep.trigger());
  }
}
function Qe(e) {
  return /* @__PURE__ */ vn(e) ? e.value : e;
}
const Av = {
  get: (e, t, n) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ vn(o) && !/* @__PURE__ */ vn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function Lm(e) {
  return /* @__PURE__ */ Ui(e) ? e : new Proxy(e, Av);
}
class Cv {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new pf(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Da - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Mt !== this)
      return km(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Pm(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Iv(e, t, n = !1) {
  let r, o;
  return et(e) ? r = e : (r = e.get, o = e.set), new Cv(r, o, n);
}
const ws = {}, tl = /* @__PURE__ */ new WeakMap();
let zi;
function Ev(e, t = !1, n = zi) {
  if (n) {
    let r = tl.get(n);
    r || tl.set(n, r = []), r.push(e);
  }
}
function Ov(e, t, n = _t) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: f, call: d } = n, b = (L) => o ? L : /* @__PURE__ */ rr(L) || o === !1 || o === 0 ? Qr(L, 1) : Qr(L);
  let g, w, x, M, S = !1, v = !1;
  if (/* @__PURE__ */ vn(e) ? (w = () => e.value, S = /* @__PURE__ */ rr(e)) : /* @__PURE__ */ Ui(e) ? (w = () => b(e), S = !0) : Je(e) ? (v = !0, S = e.some((L) => /* @__PURE__ */ Ui(L) || /* @__PURE__ */ rr(L)), w = () => e.map((L) => {
    if (/* @__PURE__ */ vn(L))
      return L.value;
    if (/* @__PURE__ */ Ui(L))
      return b(L);
    if (et(L))
      return d ? d(L, 2) : L();
  })) : et(e) ? t ? w = d ? () => d(e, 2) : e : w = () => {
    if (x) {
      ni();
      try {
        x();
      } finally {
        ri();
      }
    }
    const L = zi;
    zi = g;
    try {
      return d ? d(e, 3, [M]) : e(M);
    } finally {
      zi = L;
    }
  } : w = Or, t && o) {
    const L = w, O = o === !0 ? 1 / 0 : o;
    w = () => Qr(L(), O);
  }
  const F = ov(), $ = () => {
    g.stop(), F && F.active && sf(F.effects, g);
  };
  if (a && t) {
    const L = t;
    t = (...O) => {
      L(...O), $();
    };
  }
  let K = v ? new Array(e.length).fill(ws) : ws;
  const C = (L) => {
    if (!(!(g.flags & 1) || !g.dirty && !L))
      if (t) {
        const O = g.run();
        if (o || S || (v ? O.some((R, H) => Ar(R, K[H])) : Ar(O, K))) {
          x && x();
          const R = zi;
          zi = g;
          try {
            const H = [
              O,
              // pass undefined as the old value when it's changed for the first time
              K === ws ? void 0 : v && K[0] === ws ? [] : K,
              M
            ];
            K = O, d ? d(t, 3, H) : (
              // @ts-expect-error
              t(...H)
            );
          } finally {
            zi = R;
          }
        }
      } else
        g.run();
  };
  return f && f(C), g = new xm(w), g.scheduler = c ? () => c(C, !1) : C, M = (L) => Ev(L, !1, g), x = g.onStop = () => {
    const L = tl.get(g);
    if (L) {
      if (d)
        d(L, 4);
      else
        for (const O of L) O();
      tl.delete(g);
    }
  }, t ? r ? C(!0) : K = g.run() : c ? c(C.bind(null, !0), !0) : g.run(), $.pause = g.pause.bind(g), $.resume = g.resume.bind(g), $.stop = $, $;
}
function Qr(e, t = 1 / 0, n) {
  if (t <= 0 || !bt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ vn(e))
    Qr(e.value, t, n);
  else if (Je(e))
    for (let r = 0; r < e.length; r++)
      Qr(e[r], t, n);
  else if (pm(e) || Fo(e))
    e.forEach((r) => {
      Qr(r, t, n);
    });
  else if (ym(e)) {
    for (const r in e)
      Qr(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && Qr(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ua(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Dl(o, t, n);
  }
}
function Tr(e, t, n, r) {
  if (et(e)) {
    const o = Ua(e, t, n, r);
    return o && mm(o) && o.catch((a) => {
      Dl(a, t, n);
    }), o;
  }
  if (Je(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Tr(e[a], t, n, r));
    return o;
  }
}
function Dl(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || _t;
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
      ni(), Ua(a, null, 10, [
        e,
        d,
        b
      ]), ri();
      return;
    }
  }
  Fv(e, n, o, r, c);
}
function Fv(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Mn = [];
let Mr = -1;
const To = [];
let bi = null, Mo = 0;
const Rm = /* @__PURE__ */ Promise.resolve();
let nl = null;
function Ll(e) {
  const t = nl || Rm;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Tv(e) {
  let t = Mr + 1, n = Mn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = Mn[r], a = Ra(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function bf(e) {
  if (!(e.flags & 1)) {
    const t = Ra(e), n = Mn[Mn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ra(n) ? Mn.push(e) : Mn.splice(Tv(t), 0, e), e.flags |= 1, $m();
  }
}
function $m() {
  nl || (nl = Rm.then(zm));
}
function Dv(e) {
  Je(e) ? To.push(...e) : bi && e.id === -1 ? bi.splice(Mo + 1, 0, e) : e.flags & 1 || (To.push(e), e.flags |= 1), $m();
}
function Th(e, t, n = Mr + 1) {
  for (; n < Mn.length; n++) {
    const r = Mn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      Mn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Vm(e) {
  if (To.length) {
    const t = [...new Set(To)].sort(
      (n, r) => Ra(n) - Ra(r)
    );
    if (To.length = 0, bi) {
      bi.push(...t);
      return;
    }
    for (bi = t, Mo = 0; Mo < bi.length; Mo++) {
      const n = bi[Mo];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    bi = null, Mo = 0;
  }
}
const Ra = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function zm(e) {
  try {
    for (Mr = 0; Mr < Mn.length; Mr++) {
      const t = Mn[Mr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ua(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Mr < Mn.length; Mr++) {
      const t = Mn[Mr];
      t && (t.flags &= -2);
    }
    Mr = -1, Mn.length = 0, Vm(), nl = null, (Mn.length || To.length) && zm();
  }
}
let Wn = null, jm = null;
function rl(e) {
  const t = Wn;
  return Wn = e, jm = e && e.type.__scopeId || null, t;
}
function Hm(e, t = Wn, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Wh(-1);
    const a = rl(t);
    let c;
    try {
      c = e(...o);
    } finally {
      rl(a), r._d && Wh(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function xi(e, t) {
  if (Wn === null)
    return e;
  const n = jl(Wn), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, f, d = _t] = t[o];
    a && (et(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && Qr(c), r.push({
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
function Fi(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const f = o[c];
    a && (f.oldValue = a[c].value);
    let d = f.dir[r];
    d && (ni(), Tr(d, n, 8, [
      e.el,
      f,
      e,
      t
    ]), ri());
  }
}
function Lv(e, t) {
  if (bn) {
    let n = bn.provides;
    const r = bn.parent && bn.parent.provides;
    r === n && (n = bn.provides = Object.create(r)), n[e] = t;
  }
}
function Vs(e, t, n = !1) {
  const r = T_();
  if (r || Do) {
    let o = Do ? Do._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && et(t) ? t.call(r && r.proxy) : t;
  }
}
const Rv = /* @__PURE__ */ Symbol.for("v-scx"), $v = () => Vs(Rv);
function Yi(e, t, n) {
  return Gm(e, t, n);
}
function Gm(e, t, n = _t) {
  const { immediate: r, deep: o, flush: a, once: c } = n, f = _n({}, n), d = t && r || !t && a !== "post";
  let b;
  if (Va) {
    if (a === "sync") {
      const M = $v();
      b = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!d) {
      const M = () => {
      };
      return M.stop = Or, M.resume = Or, M.pause = Or, M;
    }
  }
  const g = bn;
  f.call = (M, S, v) => Tr(M, g, S, v);
  let w = !1;
  a === "post" ? f.scheduler = (M) => {
    Dn(M, g && g.suspense);
  } : a !== "sync" && (w = !0, f.scheduler = (M, S) => {
    S ? M() : bf(M);
  }), f.augmentJob = (M) => {
    t && (M.flags |= 4), w && (M.flags |= 2, g && (M.id = g.uid, M.i = g));
  };
  const x = Ov(e, t, f);
  return Va && (b ? b.push(x) : d && x()), x;
}
function Vv(e, t, n) {
  const r = this.proxy, o = Wt(e) ? e.includes(".") ? Km(r, e) : () => r[e] : e.bind(r, r);
  let a;
  et(t) ? a = t : (a = t.handler, n = t);
  const c = Xa(this), f = Gm(o, a.bind(r), n);
  return c(), f;
}
function Km(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const zv = /* @__PURE__ */ Symbol("_vte"), jv = (e) => e.__isTeleport, Hv = /* @__PURE__ */ Symbol("_leaveCb");
function vf(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, vf(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Bm(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Dh(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const il = /* @__PURE__ */ new WeakMap();
function Ia(e, t, n, r, o = !1) {
  if (Je(e)) {
    e.forEach(
      (v, F) => Ia(
        v,
        t && (Je(t) ? t[F] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Ea(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && Ia(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? jl(r.component) : r.el, c = o ? null : a, { i: f, r: d } = e, b = t && t.r, g = f.refs === _t ? f.refs = {} : f.refs, w = f.setupState, x = /* @__PURE__ */ dt(w), M = w === _t ? hm : (v) => Dh(g, v) ? !1 : ht(x, v), S = (v, F) => !(F && Dh(g, F));
  if (b != null && b !== d) {
    if (Lh(t), Wt(b))
      g[b] = null, M(b) && (w[b] = null);
    else if (/* @__PURE__ */ vn(b)) {
      const v = t;
      S(b, v.k) && (b.value = null), v.k && (g[v.k] = null);
    }
  }
  if (et(d))
    Ua(d, f, 12, [c, g]);
  else {
    const v = Wt(d), F = /* @__PURE__ */ vn(d);
    if (v || F) {
      const $ = () => {
        if (e.f) {
          const K = v ? M(d) ? w[d] : g[d] : S() || !e.k ? d.value : g[e.k];
          if (o)
            Je(K) && sf(K, a);
          else if (Je(K))
            K.includes(a) || K.push(a);
          else if (v)
            g[d] = [a], M(d) && (w[d] = g[d]);
          else {
            const C = [a];
            S(d, e.k) && (d.value = C), e.k && (g[e.k] = C);
          }
        } else v ? (g[d] = c, M(d) && (w[d] = c)) : F && (S(d, e.k) && (d.value = c), e.k && (g[e.k] = c));
      };
      if (c) {
        const K = () => {
          $(), il.delete(e);
        };
        K.id = -1, il.set(e, K), Dn(K, n);
      } else
        Lh(e), $();
    }
  }
}
function Lh(e) {
  const t = il.get(e);
  t && (t.flags |= 8, il.delete(e));
}
Fl().requestIdleCallback;
Fl().cancelIdleCallback;
const Ea = (e) => !!e.type.__asyncLoader, Wm = (e) => e.type.__isKeepAlive;
function Gv(e, t) {
  Um(e, "a", t);
}
function Kv(e, t) {
  Um(e, "da", t);
}
function Um(e, t, n = bn) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Rl(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Wm(o.parent.vnode) && Bv(r, t, n, o), o = o.parent;
  }
}
function Bv(e, t, n, r) {
  const o = Rl(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ym(() => {
    sf(r[t], o);
  }, n);
}
function Rl(e, t, n = bn, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      ni();
      const f = Xa(n), d = Tr(t, n, e, c);
      return f(), ri(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const ai = (e) => (t, n = bn) => {
  (!Va || e === "sp") && Rl(e, (...r) => t(...r), n);
}, Wv = ai("bm"), $l = ai("m"), Uv = ai(
  "bu"
), Yv = ai("u"), Ya = ai(
  "bum"
), Ym = ai("um"), Xv = ai(
  "sp"
), qv = ai("rtg"), Jv = ai("rtc");
function Zv(e, t = bn) {
  Rl("ec", e, t);
}
const Qv = "components", Xm = /* @__PURE__ */ Symbol.for("v-ndc");
function e_(e) {
  return Wt(e) ? t_(Qv, e, !1) || e : e || Xm;
}
function t_(e, t, n = !0, r = !1) {
  const o = Wn || bn;
  if (o) {
    const a = o.type;
    {
      const f = V_(
        a,
        !1
      );
      if (f && (f === t || f === Nn(t) || f === Ol(Nn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Rh(o[e] || a[e], t) || // global registration
      Rh(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function Rh(e, t) {
  return e && (e[t] || e[Nn(t)] || e[Ol(Nn(t))]);
}
function xt(e, t, n, r) {
  let o;
  const a = n, c = Je(e);
  if (c || Wt(e)) {
    const f = c && /* @__PURE__ */ Ui(e);
    let d = !1, b = !1;
    f && (d = !/* @__PURE__ */ rr(e), b = /* @__PURE__ */ ii(e), e = Tl(e)), o = new Array(e.length);
    for (let g = 0, w = e.length; g < w; g++)
      o[g] = t(
        d ? b ? Ho(gr(e[g])) : gr(e[g]) : e[g],
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
const Nu = (e) => e ? gg(e) ? jl(e) : Nu(e.parent) : null, Oa = (
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
    $parent: (e) => Nu(e.parent),
    $root: (e) => Nu(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Jm(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      bf(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ll.bind(e.proxy)),
    $watch: (e) => Vv.bind(e)
  })
), Vc = (e, t) => e !== _t && !e.__isScriptSetup && ht(e, t), n_ = {
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
        if (Vc(r, t))
          return c[t] = 1, r[t];
        if (o !== _t && ht(o, t))
          return c[t] = 2, o[t];
        if (ht(a, t))
          return c[t] = 3, a[t];
        if (n !== _t && ht(n, t))
          return c[t] = 4, n[t];
        Pu && (c[t] = 0);
      }
    }
    const b = Oa[t];
    let g, w;
    if (b)
      return t === "$attrs" && yn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (g = f.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== _t && ht(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      w = d.config.globalProperties, ht(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Vc(o, t) ? (o[t] = n, !0) : r !== _t && ht(r, t) ? (r[t] = n, !0) : ht(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, f) {
    let d;
    return !!(n[f] || e !== _t && f[0] !== "$" && ht(e, f) || Vc(t, f) || ht(a, f) || ht(r, f) || ht(Oa, f) || ht(o.config.globalProperties, f) || (d = c.__cssModules) && d[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ht(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function $h(e) {
  return Je(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Pu = !0;
function r_(e) {
  const t = Jm(e), n = e.proxy, r = e.ctx;
  Pu = !1, t.beforeCreate && Vh(t.beforeCreate, e, "bc");
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
    updated: S,
    activated: v,
    deactivated: F,
    beforeDestroy: $,
    beforeUnmount: K,
    destroyed: C,
    unmounted: L,
    render: O,
    renderTracked: R,
    renderTriggered: H,
    errorCaptured: Q,
    serverPrefetch: _e,
    // public API
    expose: T,
    inheritAttrs: E,
    // assets
    components: se,
    directives: le,
    filters: ue
  } = t;
  if (b && i_(b, r, null), c)
    for (const j in c) {
      const P = c[j];
      et(P) && (r[j] = P.bind(n));
    }
  if (o) {
    const j = o.call(n, n);
    bt(j) && (e.data = /* @__PURE__ */ Xo(j));
  }
  if (Pu = !0, a)
    for (const j in a) {
      const P = a[j], ee = et(P) ? P.bind(n, n) : et(P.get) ? P.get.bind(n, n) : Or, Y = !et(P) && et(P.set) ? P.set.bind(n) : Or, Ie = ut({
        get: ee,
        set: Y
      });
      Object.defineProperty(r, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Ie.value,
        set: (Fe) => Ie.value = Fe
      });
    }
  if (f)
    for (const j in f)
      qm(f[j], r, n, j);
  if (d) {
    const j = et(d) ? d.call(n) : d;
    Reflect.ownKeys(j).forEach((P) => {
      Lv(P, j[P]);
    });
  }
  g && Vh(g, e, "c");
  function X(j, P) {
    Je(P) ? P.forEach((ee) => j(ee.bind(n))) : P && j(P.bind(n));
  }
  if (X(Wv, w), X($l, x), X(Uv, M), X(Yv, S), X(Gv, v), X(Kv, F), X(Zv, Q), X(Jv, R), X(qv, H), X(Ya, K), X(Ym, L), X(Xv, _e), Je(T))
    if (T.length) {
      const j = e.exposed || (e.exposed = {});
      T.forEach((P) => {
        Object.defineProperty(j, P, {
          get: () => n[P],
          set: (ee) => n[P] = ee,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  O && e.render === Or && (e.render = O), E != null && (e.inheritAttrs = E), se && (e.components = se), le && (e.directives = le), _e && Bm(e);
}
function i_(e, t, n = Or) {
  Je(e) && (e = Au(e));
  for (const r in e) {
    const o = e[r];
    let a;
    bt(o) ? "default" in o ? a = Vs(
      o.from || r,
      o.default,
      !0
    ) : a = Vs(o.from || r) : a = Vs(o), /* @__PURE__ */ vn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function Vh(e, t, n) {
  Tr(
    Je(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function qm(e, t, n, r) {
  let o = r.includes(".") ? Km(n, r) : () => n[r];
  if (Wt(e)) {
    const a = t[e];
    et(a) && Yi(o, a);
  } else if (et(e))
    Yi(o, e.bind(n));
  else if (bt(e))
    if (Je(e))
      e.forEach((a) => qm(a, t, n, r));
    else {
      const a = et(e.handler) ? e.handler.bind(n) : t[e.handler];
      et(a) && Yi(o, a, e);
    }
}
function Jm(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, f = a.get(t);
  let d;
  return f ? d = f : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => ol(d, b, c, !0)
  ), ol(d, t, c)), bt(t) && a.set(t, d), d;
}
function ol(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && ol(e, a, n, !0), o && o.forEach(
    (c) => ol(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const f = o_[c] || n && n[c];
      e[c] = f ? f(e[c], t[c]) : t[c];
    }
  return e;
}
const o_ = {
  data: zh,
  props: jh,
  emits: jh,
  // objects
  methods: _a,
  computed: _a,
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
  components: _a,
  directives: _a,
  // watch
  watch: s_,
  // provide / inject
  provide: zh,
  inject: a_
};
function zh(e, t) {
  return t ? e ? function() {
    return _n(
      et(e) ? e.call(this, this) : e,
      et(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function a_(e, t) {
  return _a(Au(e), Au(t));
}
function Au(e) {
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
function _a(e, t) {
  return e ? _n(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function jh(e, t) {
  return e ? Je(e) && Je(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : _n(
    /* @__PURE__ */ Object.create(null),
    $h(e),
    $h(t ?? {})
  ) : t;
}
function s_(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = _n(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = kn(e[r], t[r]);
  return n;
}
function Zm() {
  return {
    app: null,
    config: {
      isNativeTag: hm,
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
let l_ = 0;
function c_(e, t) {
  return function(r, o = null) {
    et(r) || (r = _n({}, r)), o != null && !bt(o) && (o = null);
    const a = Zm(), c = /* @__PURE__ */ new WeakSet(), f = [];
    let d = !1;
    const b = a.app = {
      _uid: l_++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: j_,
      get config() {
        return a.config;
      },
      set config(g) {
      },
      use(g, ...w) {
        return c.has(g) || (g && et(g.install) ? (c.add(g), g.install(b, ...w)) : et(g) && (c.add(g), g(b, ...w))), b;
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
          const M = b._ceVNode || De(r, o);
          return M.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(M, g, x), d = !0, b._container = g, g.__vue_app__ = b, jl(M.component);
        }
      },
      onUnmount(g) {
        f.push(g);
      },
      unmount() {
        d && (Tr(
          f,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(g, w) {
        return a.provides[g] = w, b;
      },
      runWithContext(g) {
        const w = Do;
        Do = b;
        try {
          return g();
        } finally {
          Do = w;
        }
      }
    };
    return b;
  };
}
let Do = null;
const u_ = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Nn(t)}Modifiers`] || e[`${to(t)}Modifiers`];
function f_(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || _t;
  let o = n;
  const a = t.startsWith("update:"), c = a && u_(r, t.slice(7));
  c && (c.trim && (o = n.map((g) => Wt(g) ? g.trim() : g)), c.number && (o = n.map(cf)));
  let f, d = r[f = Tc(t)] || // also try camelCase event handler (#2249)
  r[f = Tc(Nn(t))];
  !d && a && (d = r[f = Tc(to(t))]), d && Tr(
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
    e.emitted[f] = !0, Tr(
      b,
      e,
      6,
      o
    );
  }
}
const d_ = /* @__PURE__ */ new WeakMap();
function Qm(e, t, n = !1) {
  const r = n ? d_ : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, f = !1;
  if (!et(e)) {
    const d = (b) => {
      const g = Qm(b, t, !0);
      g && (f = !0, _n(c, g));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !f ? (bt(e) && r.set(e, null), null) : (Je(a) ? a.forEach((d) => c[d] = null) : _n(c, a), bt(e) && r.set(e, c), c);
}
function Vl(e, t) {
  return !e || !Cl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ht(e, t[0].toLowerCase() + t.slice(1)) || ht(e, to(t)) || ht(e, t));
}
function Hh(e) {
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
    ctx: S,
    inheritAttrs: v
  } = e, F = rl(e);
  let $, K;
  try {
    if (n.shapeFlag & 4) {
      const L = o || r, O = L;
      $ = Pr(
        b.call(
          O,
          L,
          g,
          w,
          M,
          x,
          S
        )
      ), K = f;
    } else {
      const L = t;
      $ = Pr(
        L.length > 1 ? L(
          w,
          { attrs: f, slots: c, emit: d }
        ) : L(
          w,
          null
        )
      ), K = t.props ? f : h_(f);
    }
  } catch (L) {
    Fa.length = 0, Dl(L, e, 1), $ = De(Si);
  }
  let C = $;
  if (K && v !== !1) {
    const L = Object.keys(K), { shapeFlag: O } = C;
    L.length && O & 7 && (a && L.some(Il) && (K = p_(
      K,
      a
    )), C = Go(C, K, !1, !0));
  }
  return n.dirs && (C = Go(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && vf(C, n.transition), $ = C, rl(F), $;
}
const h_ = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Cl(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, p_ = (e, t) => {
  const n = {};
  for (const r in e)
    (!Il(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function m_(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: f, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Gh(r, c, b) : !!c;
    if (d & 8) {
      const g = t.dynamicProps;
      for (let w = 0; w < g.length; w++) {
        const x = g[w];
        if (eg(c, r, x) && !Vl(b, x))
          return !0;
      }
    }
  } else
    return (o || f) && (!f || !f.$stable) ? !0 : r === c ? !1 : r ? c ? Gh(r, c, b) : !0 : !!c;
  return !1;
}
function Gh(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (eg(t, e, a) && !Vl(n, a))
      return !0;
  }
  return !1;
}
function eg(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && bt(r) && bt(o) ? !uf(r, o) : r !== o;
}
function g_({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const tg = {}, ng = () => Object.create(tg), rg = (e) => Object.getPrototypeOf(e) === tg;
function y_(e, t, n, r = !1) {
  const o = {}, a = ng();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ig(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ kv(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function b_(e, t, n, r) {
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
        if (Vl(e.emitsOptions, x))
          continue;
        const M = t[x];
        if (d)
          if (ht(a, x))
            M !== a[x] && (a[x] = M, b = !0);
          else {
            const S = Nn(x);
            o[S] = Cu(
              d,
              f,
              S,
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
    ig(e, t, o, a) && (b = !0);
    let g;
    for (const w in f)
      (!t || // for camelCase
      !ht(t, w) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = to(w)) === w || !ht(t, g))) && (d ? n && // for camelCase
      (n[w] !== void 0 || // for kebab-case
      n[g] !== void 0) && (o[w] = Cu(
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
  b && Zr(e.attrs, "set", "");
}
function ig(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, f;
  if (t)
    for (let d in t) {
      if (Pa(d))
        continue;
      const b = t[d];
      let g;
      o && ht(o, g = Nn(d)) ? !a || !a.includes(g) ? n[g] = b : (f || (f = {}))[g] = b : Vl(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ dt(n), b = f || _t;
    for (let g = 0; g < a.length; g++) {
      const w = a[g];
      n[w] = Cu(
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
function Cu(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const f = ht(c, "default");
    if (f && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && et(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const g = Xa(o);
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
    ] && (r === "" || r === to(n)) && (r = !0));
  }
  return r;
}
const v_ = /* @__PURE__ */ new WeakMap();
function og(e, t, n = !1) {
  const r = n ? v_ : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, f = [];
  let d = !1;
  if (!et(e)) {
    const g = (w) => {
      d = !0;
      const [x, M] = og(w, t, !0);
      _n(c, x), M && f.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!a && !d)
    return bt(e) && r.set(e, Oo), Oo;
  if (Je(a))
    for (let g = 0; g < a.length; g++) {
      const w = Nn(a[g]);
      Kh(w) && (c[w] = _t);
    }
  else if (a)
    for (const g in a) {
      const w = Nn(g);
      if (Kh(w)) {
        const x = a[g], M = c[w] = Je(x) || et(x) ? { type: x } : _n({}, x), S = M.type;
        let v = !1, F = !0;
        if (Je(S))
          for (let $ = 0; $ < S.length; ++$) {
            const K = S[$], C = et(K) && K.name;
            if (C === "Boolean") {
              v = !0;
              break;
            } else C === "String" && (F = !1);
          }
        else
          v = et(S) && S.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = v, M[
          1
          /* shouldCastTrue */
        ] = F, (v || ht(M, "default")) && f.push(w);
      }
    }
  const b = [c, f];
  return bt(e) && r.set(e, b), b;
}
function Kh(e) {
  return e[0] !== "$" && !Pa(e);
}
const _f = (e) => e === "_" || e === "_ctx" || e === "$stable", wf = (e) => Je(e) ? e.map(Pr) : [Pr(e)], __ = (e, t, n) => {
  if (t._n)
    return t;
  const r = Hm((...o) => wf(t(...o)), n);
  return r._c = !1, r;
}, ag = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (_f(o)) continue;
    const a = e[o];
    if (et(a))
      t[o] = __(o, a, r);
    else if (a != null) {
      const c = wf(a);
      t[o] = () => c;
    }
  }
}, sg = (e, t) => {
  const n = wf(t);
  e.slots.default = () => n;
}, lg = (e, t, n) => {
  for (const r in t)
    (n || !_f(r)) && (e[r] = t[r]);
}, w_ = (e, t, n) => {
  const r = e.slots = ng();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (lg(r, t, n), n && bm(r, "_", o, !0)) : ag(t, r);
  } else t && sg(e, t);
}, x_ = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = _t;
  if (r.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? a = !1 : lg(o, t, n) : (a = !t.$stable, ag(t, o)), c = t;
  } else t && (sg(e, t), c = { default: 1 });
  if (a)
    for (const f in o)
      !_f(f) && c[f] == null && delete o[f];
}, Dn = P_;
function S_(e) {
  return k_(e);
}
function k_(e, t) {
  const n = Fl();
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
    setScopeId: M = Or,
    insertStaticContent: S
  } = e, v = (D, B, q, be = null, me = null, ge = null, ke = void 0, Me = null, xe = !!B.dynamicChildren) => {
    if (D === B)
      return;
    D && !pa(D, B) && (be = Yn(D), Fe(D, me, ge, !0), D = null), B.patchFlag === -2 && (xe = !1, B.dynamicChildren = null);
    const { type: fe, ref: $e, shapeFlag: Ee } = B;
    switch (fe) {
      case zl:
        F(D, B, q, be);
        break;
      case Si:
        $(D, B, q, be);
        break;
      case jc:
        D == null && K(B, q, be, ke);
        break;
      case Ye:
        se(
          D,
          B,
          q,
          be,
          me,
          ge,
          ke,
          Me,
          xe
        );
        break;
      default:
        Ee & 1 ? O(
          D,
          B,
          q,
          be,
          me,
          ge,
          ke,
          Me,
          xe
        ) : Ee & 6 ? le(
          D,
          B,
          q,
          be,
          me,
          ge,
          ke,
          Me,
          xe
        ) : (Ee & 64 || Ee & 128) && fe.process(
          D,
          B,
          q,
          be,
          me,
          ge,
          ke,
          Me,
          xe,
          ln
        );
    }
    $e != null && me ? Ia($e, D && D.ref, ge, B || D, !B) : $e == null && D && D.ref != null && Ia(D.ref, null, ge, D, !0);
  }, F = (D, B, q, be) => {
    if (D == null)
      r(
        B.el = f(B.children),
        q,
        be
      );
    else {
      const me = B.el = D.el;
      B.children !== D.children && b(me, B.children);
    }
  }, $ = (D, B, q, be) => {
    D == null ? r(
      B.el = d(B.children || ""),
      q,
      be
    ) : B.el = D.el;
  }, K = (D, B, q, be) => {
    [D.el, D.anchor] = S(
      D.children,
      B,
      q,
      be,
      D.el,
      D.anchor
    );
  }, C = ({ el: D, anchor: B }, q, be) => {
    let me;
    for (; D && D !== B; )
      me = x(D), r(D, q, be), D = me;
    r(B, q, be);
  }, L = ({ el: D, anchor: B }) => {
    let q;
    for (; D && D !== B; )
      q = x(D), o(D), D = q;
    o(B);
  }, O = (D, B, q, be, me, ge, ke, Me, xe) => {
    if (B.type === "svg" ? ke = "svg" : B.type === "math" && (ke = "mathml"), D == null)
      R(
        B,
        q,
        be,
        me,
        ge,
        ke,
        Me,
        xe
      );
    else {
      const fe = D.el && D.el._isVueCE ? D.el : null;
      try {
        fe && fe._beginPatch(), _e(
          D,
          B,
          me,
          ge,
          ke,
          Me,
          xe
        );
      } finally {
        fe && fe._endPatch();
      }
    }
  }, R = (D, B, q, be, me, ge, ke, Me) => {
    let xe, fe;
    const { props: $e, shapeFlag: Ee, transition: Ve, dirs: Ke } = D;
    if (xe = D.el = c(
      D.type,
      ge,
      $e && $e.is,
      $e
    ), Ee & 8 ? g(xe, D.children) : Ee & 16 && Q(
      D.children,
      xe,
      null,
      be,
      me,
      zc(D, ge),
      ke,
      Me
    ), Ke && Fi(D, null, be, "created"), H(xe, D, D.scopeId, ke, be), $e) {
      for (const Le in $e)
        Le !== "value" && !Pa(Le) && a(xe, Le, null, $e[Le], ge, be);
      "value" in $e && a(xe, "value", null, $e.value, ge), (fe = $e.onVnodeBeforeMount) && wr(fe, be, D);
    }
    Ke && Fi(D, null, be, "beforeMount");
    const p = M_(me, Ve);
    p && Ve.beforeEnter(xe), r(xe, B, q), ((fe = $e && $e.onVnodeMounted) || p || Ke) && Dn(() => {
      try {
        fe && wr(fe, be, D), p && Ve.enter(xe), Ke && Fi(D, null, be, "mounted");
      } finally {
      }
    }, me);
  }, H = (D, B, q, be, me) => {
    if (q && M(D, q), be)
      for (let ge = 0; ge < be.length; ge++)
        M(D, be[ge]);
    if (me) {
      let ge = me.subTree;
      if (B === ge || dg(ge.type) && (ge.ssContent === B || ge.ssFallback === B)) {
        const ke = me.vnode;
        H(
          D,
          ke,
          ke.scopeId,
          ke.slotScopeIds,
          me.parent
        );
      }
    }
  }, Q = (D, B, q, be, me, ge, ke, Me, xe = 0) => {
    for (let fe = xe; fe < D.length; fe++) {
      const $e = D[fe] = Me ? Jr(D[fe]) : Pr(D[fe]);
      v(
        null,
        $e,
        B,
        q,
        be,
        me,
        ge,
        ke,
        Me
      );
    }
  }, _e = (D, B, q, be, me, ge, ke) => {
    const Me = B.el = D.el;
    let { patchFlag: xe, dynamicChildren: fe, dirs: $e } = B;
    xe |= D.patchFlag & 16;
    const Ee = D.props || _t, Ve = B.props || _t;
    let Ke;
    if (q && Ti(q, !1), (Ke = Ve.onVnodeBeforeUpdate) && wr(Ke, q, B, D), $e && Fi(B, D, q, "beforeUpdate"), q && Ti(q, !0), (Ee.innerHTML && Ve.innerHTML == null || Ee.textContent && Ve.textContent == null) && g(Me, ""), fe ? T(
      D.dynamicChildren,
      fe,
      Me,
      q,
      be,
      zc(B, me),
      ge
    ) : ke || P(
      D,
      B,
      Me,
      null,
      q,
      be,
      zc(B, me),
      ge,
      !1
    ), xe > 0) {
      if (xe & 16)
        E(Me, Ee, Ve, q, me);
      else if (xe & 2 && Ee.class !== Ve.class && a(Me, "class", null, Ve.class, me), xe & 4 && a(Me, "style", Ee.style, Ve.style, me), xe & 8) {
        const p = B.dynamicProps;
        for (let Le = 0; Le < p.length; Le++) {
          const st = p[Le], Be = Ee[st], Tt = Ve[st];
          (Tt !== Be || st === "value") && a(Me, st, Be, Tt, me, q);
        }
      }
      xe & 1 && D.children !== B.children && g(Me, B.children);
    } else !ke && fe == null && E(Me, Ee, Ve, q, me);
    ((Ke = Ve.onVnodeUpdated) || $e) && Dn(() => {
      Ke && wr(Ke, q, B, D), $e && Fi(B, D, q, "updated");
    }, be);
  }, T = (D, B, q, be, me, ge, ke) => {
    for (let Me = 0; Me < B.length; Me++) {
      const xe = D[Me], fe = B[Me], $e = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        xe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (xe.type === Ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !pa(xe, fe) || // - In the case of a component, it could contain anything.
        xe.shapeFlag & 198) ? w(xe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          q
        )
      );
      v(
        xe,
        fe,
        $e,
        null,
        be,
        me,
        ge,
        ke,
        !0
      );
    }
  }, E = (D, B, q, be, me) => {
    if (B !== q) {
      if (B !== _t)
        for (const ge in B)
          !Pa(ge) && !(ge in q) && a(
            D,
            ge,
            B[ge],
            null,
            me,
            be
          );
      for (const ge in q) {
        if (Pa(ge)) continue;
        const ke = q[ge], Me = B[ge];
        ke !== Me && ge !== "value" && a(D, ge, Me, ke, me, be);
      }
      "value" in q && a(D, "value", B.value, q.value, me);
    }
  }, se = (D, B, q, be, me, ge, ke, Me, xe) => {
    const fe = B.el = D ? D.el : f(""), $e = B.anchor = D ? D.anchor : f("");
    let { patchFlag: Ee, dynamicChildren: Ve, slotScopeIds: Ke } = B;
    Ke && (Me = Me ? Me.concat(Ke) : Ke), D == null ? (r(fe, q, be), r($e, q, be), Q(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      B.children || [],
      q,
      $e,
      me,
      ge,
      ke,
      Me,
      xe
    )) : Ee > 0 && Ee & 64 && Ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren && D.dynamicChildren.length === Ve.length ? (T(
      D.dynamicChildren,
      Ve,
      q,
      me,
      ge,
      ke,
      Me
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (B.key != null || me && B === me.subTree) && cg(
      D,
      B,
      !0
      /* shallow */
    )) : P(
      D,
      B,
      q,
      $e,
      me,
      ge,
      ke,
      Me,
      xe
    );
  }, le = (D, B, q, be, me, ge, ke, Me, xe) => {
    B.slotScopeIds = Me, D == null ? B.shapeFlag & 512 ? me.ctx.activate(
      B,
      q,
      be,
      ke,
      xe
    ) : ue(
      B,
      q,
      be,
      me,
      ge,
      ke,
      xe
    ) : U(D, B, xe);
  }, ue = (D, B, q, be, me, ge, ke) => {
    const Me = D.component = F_(
      D,
      be,
      me
    );
    if (Wm(D) && (Me.ctx.renderer = ln), D_(Me, !1, ke), Me.asyncDep) {
      if (me && me.registerDep(Me, X, ke), !D.el) {
        const xe = Me.subTree = De(Si);
        $(null, xe, B, q), D.placeholder = xe.el;
      }
    } else
      X(
        Me,
        D,
        B,
        q,
        me,
        ge,
        ke
      );
  }, U = (D, B, q) => {
    const be = B.component = D.component;
    if (m_(D, B, q))
      if (be.asyncDep && !be.asyncResolved) {
        j(be, B, q);
        return;
      } else
        be.next = B, be.update();
    else
      B.el = D.el, be.vnode = B;
  }, X = (D, B, q, be, me, ge, ke) => {
    const Me = () => {
      if (D.isMounted) {
        let { next: Ee, bu: Ve, u: Ke, parent: p, vnode: Le } = D;
        {
          const nn = ug(D);
          if (nn) {
            Ee && (Ee.el = Le.el, j(D, Ee, ke)), nn.asyncDep.then(() => {
              Dn(() => {
                D.isUnmounted || fe();
              }, me);
            });
            return;
          }
        }
        let st = Ee, Be;
        Ti(D, !1), Ee ? (Ee.el = Le.el, j(D, Ee, ke)) : Ee = Le, Ve && $s(Ve), (Be = Ee.props && Ee.props.onVnodeBeforeUpdate) && wr(Be, p, Ee, Le), Ti(D, !0);
        const Tt = Hh(D), cn = D.subTree;
        D.subTree = Tt, v(
          cn,
          Tt,
          // parent may have changed if it's in a teleport
          w(cn.el),
          // anchor may have changed if it's in a fragment
          Yn(cn),
          D,
          me,
          ge
        ), Ee.el = Tt.el, st === null && g_(D, Tt.el), Ke && Dn(Ke, me), (Be = Ee.props && Ee.props.onVnodeUpdated) && Dn(
          () => wr(Be, p, Ee, Le),
          me
        );
      } else {
        let Ee;
        const { el: Ve, props: Ke } = B, { bm: p, m: Le, parent: st, root: Be, type: Tt } = D, cn = Ea(B);
        Ti(D, !1), p && $s(p), !cn && (Ee = Ke && Ke.onVnodeBeforeMount) && wr(Ee, st, B), Ti(D, !0);
        {
          Be.ce && Be.ce._hasShadowRoot() && Be.ce._injectChildStyle(
            Tt,
            D.parent ? D.parent.type : void 0
          );
          const nn = D.subTree = Hh(D);
          v(
            null,
            nn,
            q,
            be,
            D,
            me,
            ge
          ), B.el = nn.el;
        }
        if (Le && Dn(Le, me), !cn && (Ee = Ke && Ke.onVnodeMounted)) {
          const nn = B;
          Dn(
            () => wr(Ee, st, nn),
            me
          );
        }
        (B.shapeFlag & 256 || st && Ea(st.vnode) && st.vnode.shapeFlag & 256) && D.a && Dn(D.a, me), D.isMounted = !0, B = q = be = null;
      }
    };
    D.scope.on();
    const xe = D.effect = new xm(Me);
    D.scope.off();
    const fe = D.update = xe.run.bind(xe), $e = D.job = xe.runIfDirty.bind(xe);
    $e.i = D, $e.id = D.uid, xe.scheduler = () => bf($e), Ti(D, !0), fe();
  }, j = (D, B, q) => {
    B.component = D;
    const be = D.vnode.props;
    D.vnode = B, D.next = null, b_(D, B.props, be, q), x_(D, B.children, q), ni(), Th(D), ri();
  }, P = (D, B, q, be, me, ge, ke, Me, xe = !1) => {
    const fe = D && D.children, $e = D ? D.shapeFlag : 0, Ee = B.children, { patchFlag: Ve, shapeFlag: Ke } = B;
    if (Ve > 0) {
      if (Ve & 128) {
        Y(
          fe,
          Ee,
          q,
          be,
          me,
          ge,
          ke,
          Me,
          xe
        );
        return;
      } else if (Ve & 256) {
        ee(
          fe,
          Ee,
          q,
          be,
          me,
          ge,
          ke,
          Me,
          xe
        );
        return;
      }
    }
    Ke & 8 ? ($e & 16 && it(fe, me, ge), Ee !== fe && g(q, Ee)) : $e & 16 ? Ke & 16 ? Y(
      fe,
      Ee,
      q,
      be,
      me,
      ge,
      ke,
      Me,
      xe
    ) : it(fe, me, ge, !0) : ($e & 8 && g(q, ""), Ke & 16 && Q(
      Ee,
      q,
      be,
      me,
      ge,
      ke,
      Me,
      xe
    ));
  }, ee = (D, B, q, be, me, ge, ke, Me, xe) => {
    D = D || Oo, B = B || Oo;
    const fe = D.length, $e = B.length, Ee = Math.min(fe, $e);
    let Ve;
    for (Ve = 0; Ve < Ee; Ve++) {
      const Ke = B[Ve] = xe ? Jr(B[Ve]) : Pr(B[Ve]);
      v(
        D[Ve],
        Ke,
        q,
        null,
        me,
        ge,
        ke,
        Me,
        xe
      );
    }
    fe > $e ? it(
      D,
      me,
      ge,
      !0,
      !1,
      Ee
    ) : Q(
      B,
      q,
      be,
      me,
      ge,
      ke,
      Me,
      xe,
      Ee
    );
  }, Y = (D, B, q, be, me, ge, ke, Me, xe) => {
    let fe = 0;
    const $e = B.length;
    let Ee = D.length - 1, Ve = $e - 1;
    for (; fe <= Ee && fe <= Ve; ) {
      const Ke = D[fe], p = B[fe] = xe ? Jr(B[fe]) : Pr(B[fe]);
      if (pa(Ke, p))
        v(
          Ke,
          p,
          q,
          null,
          me,
          ge,
          ke,
          Me,
          xe
        );
      else
        break;
      fe++;
    }
    for (; fe <= Ee && fe <= Ve; ) {
      const Ke = D[Ee], p = B[Ve] = xe ? Jr(B[Ve]) : Pr(B[Ve]);
      if (pa(Ke, p))
        v(
          Ke,
          p,
          q,
          null,
          me,
          ge,
          ke,
          Me,
          xe
        );
      else
        break;
      Ee--, Ve--;
    }
    if (fe > Ee) {
      if (fe <= Ve) {
        const Ke = Ve + 1, p = Ke < $e ? B[Ke].el : be;
        for (; fe <= Ve; )
          v(
            null,
            B[fe] = xe ? Jr(B[fe]) : Pr(B[fe]),
            q,
            p,
            me,
            ge,
            ke,
            Me,
            xe
          ), fe++;
      }
    } else if (fe > Ve)
      for (; fe <= Ee; )
        Fe(D[fe], me, ge, !0), fe++;
    else {
      const Ke = fe, p = fe, Le = /* @__PURE__ */ new Map();
      for (fe = p; fe <= Ve; fe++) {
        const Ce = B[fe] = xe ? Jr(B[fe]) : Pr(B[fe]);
        Ce.key != null && Le.set(Ce.key, fe);
      }
      let st, Be = 0;
      const Tt = Ve - p + 1;
      let cn = !1, nn = 0;
      const $t = new Array(Tt);
      for (fe = 0; fe < Tt; fe++) $t[fe] = 0;
      for (fe = Ke; fe <= Ee; fe++) {
        const Ce = D[fe];
        if (Be >= Tt) {
          Fe(Ce, me, ge, !0);
          continue;
        }
        let Ut;
        if (Ce.key != null)
          Ut = Le.get(Ce.key);
        else
          for (st = p; st <= Ve; st++)
            if ($t[st - p] === 0 && pa(Ce, B[st])) {
              Ut = st;
              break;
            }
        Ut === void 0 ? Fe(Ce, me, ge, !0) : ($t[Ut - p] = fe + 1, Ut >= nn ? nn = Ut : cn = !0, v(
          Ce,
          B[Ut],
          q,
          null,
          me,
          ge,
          ke,
          Me,
          xe
        ), Be++);
      }
      const Xn = cn ? N_($t) : Oo;
      for (st = Xn.length - 1, fe = Tt - 1; fe >= 0; fe--) {
        const Ce = p + fe, Ut = B[Ce], $r = B[Ce + 1], Vr = Ce + 1 < $e ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          $r.el || fg($r)
        ) : be;
        $t[fe] === 0 ? v(
          null,
          Ut,
          q,
          Vr,
          me,
          ge,
          ke,
          Me,
          xe
        ) : cn && (st < 0 || fe !== Xn[st] ? Ie(Ut, q, Vr, 2) : st--);
      }
    }
  }, Ie = (D, B, q, be, me = null) => {
    const { el: ge, type: ke, transition: Me, children: xe, shapeFlag: fe } = D;
    if (fe & 6) {
      Ie(D.component.subTree, B, q, be);
      return;
    }
    if (fe & 128) {
      D.suspense.move(B, q, be);
      return;
    }
    if (fe & 64) {
      ke.move(D, B, q, ln);
      return;
    }
    if (ke === Ye) {
      r(ge, B, q);
      for (let Ee = 0; Ee < xe.length; Ee++)
        Ie(xe[Ee], B, q, be);
      r(D.anchor, B, q);
      return;
    }
    if (ke === jc) {
      C(D, B, q);
      return;
    }
    if (be !== 2 && fe & 1 && Me)
      if (be === 0)
        Me.beforeEnter(ge), r(ge, B, q), Dn(() => Me.enter(ge), me);
      else {
        const { leave: Ee, delayLeave: Ve, afterLeave: Ke } = Me, p = () => {
          D.ctx.isUnmounted ? o(ge) : r(ge, B, q);
        }, Le = () => {
          ge._isLeaving && ge[Hv](
            !0
            /* cancelled */
          ), Ee(ge, () => {
            p(), Ke && Ke();
          });
        };
        Ve ? Ve(ge, p, Le) : Le();
      }
    else
      r(ge, B, q);
  }, Fe = (D, B, q, be = !1, me = !1) => {
    const {
      type: ge,
      props: ke,
      ref: Me,
      children: xe,
      dynamicChildren: fe,
      shapeFlag: $e,
      patchFlag: Ee,
      dirs: Ve,
      cacheIndex: Ke,
      memo: p
    } = D;
    if (Ee === -2 && (me = !1), Me != null && (ni(), Ia(Me, null, q, D, !0), ri()), Ke != null && (B.renderCache[Ke] = void 0), $e & 256) {
      B.ctx.deactivate(D);
      return;
    }
    const Le = $e & 1 && Ve, st = !Ea(D);
    let Be;
    if (st && (Be = ke && ke.onVnodeBeforeUnmount) && wr(Be, B, D), $e & 6)
      sn(D.component, q, be);
    else {
      if ($e & 128) {
        D.suspense.unmount(q, be);
        return;
      }
      Le && Fi(D, null, B, "beforeUnmount"), $e & 64 ? D.type.remove(
        D,
        B,
        q,
        ln,
        be
      ) : fe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !fe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ge !== Ye || Ee > 0 && Ee & 64) ? it(
        fe,
        B,
        q,
        !1,
        !0
      ) : (ge === Ye && Ee & 384 || !me && $e & 16) && it(xe, B, q), be && St(D);
    }
    const Tt = p != null && Ke == null;
    (st && (Be = ke && ke.onVnodeUnmounted) || Le || Tt) && Dn(() => {
      Be && wr(Be, B, D), Le && Fi(D, null, B, "unmounted"), Tt && (D.el = null);
    }, q);
  }, St = (D) => {
    const { type: B, el: q, anchor: be, transition: me } = D;
    if (B === Ye) {
      pt(q, be);
      return;
    }
    if (B === jc) {
      L(D);
      return;
    }
    const ge = () => {
      o(q), me && !me.persisted && me.afterLeave && me.afterLeave();
    };
    if (D.shapeFlag & 1 && me && !me.persisted) {
      const { leave: ke, delayLeave: Me } = me, xe = () => ke(q, ge);
      Me ? Me(D.el, ge, xe) : xe();
    } else
      ge();
  }, pt = (D, B) => {
    let q;
    for (; D !== B; )
      q = x(D), o(D), D = q;
    o(B);
  }, sn = (D, B, q) => {
    const { bum: be, scope: me, job: ge, subTree: ke, um: Me, m: xe, a: fe } = D;
    Bh(xe), Bh(fe), be && $s(be), me.stop(), ge && (ge.flags |= 8, Fe(ke, D, B, q)), Me && Dn(Me, B), Dn(() => {
      D.isUnmounted = !0;
    }, B);
  }, it = (D, B, q, be = !1, me = !1, ge = 0) => {
    for (let ke = ge; ke < D.length; ke++)
      Fe(D[ke], B, q, be, me);
  }, Yn = (D) => {
    if (D.shapeFlag & 6)
      return Yn(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const B = x(D.anchor || D.el), q = B && B[zv];
    return q ? x(q) : B;
  };
  let It = !1;
  const Zt = (D, B, q) => {
    let be;
    D == null ? B._vnode && (Fe(B._vnode, null, null, !0), be = B._vnode.component) : v(
      B._vnode || null,
      D,
      B,
      null,
      null,
      null,
      q
    ), B._vnode = D, It || (It = !0, Th(be), Vm(), It = !1);
  }, ln = {
    p: v,
    um: Fe,
    m: Ie,
    r: St,
    mt: ue,
    mc: Q,
    pc: P,
    pbc: T,
    n: Yn,
    o: e
  };
  return {
    render: Zt,
    hydrate: void 0,
    createApp: c_(Zt)
  };
}
function zc({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ti({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function M_(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function cg(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Je(r) && Je(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let f = o[a];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = o[a] = Jr(o[a]), f.el = c.el), !n && f.patchFlag !== -2 && cg(c, f)), f.type === zl && (f.patchFlag === -1 && (f = o[a] = Jr(f)), f.el = c.el), f.type === Si && !f.el && (f.el = c.el);
    }
}
function N_(e) {
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
function ug(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ug(t);
}
function Bh(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function fg(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? fg(t.subTree) : null;
}
const dg = (e) => e.__isSuspense;
function P_(e, t) {
  t && t.pendingBranch ? Je(e) ? t.effects.push(...e) : t.effects.push(e) : Dv(e);
}
const Ye = /* @__PURE__ */ Symbol.for("v-fgt"), zl = /* @__PURE__ */ Symbol.for("v-txt"), Si = /* @__PURE__ */ Symbol.for("v-cmt"), jc = /* @__PURE__ */ Symbol.for("v-stc"), Fa = [];
let Un = null;
function ie(e = !1) {
  Fa.push(Un = e ? null : []);
}
function A_() {
  Fa.pop(), Un = Fa[Fa.length - 1] || null;
}
let $a = 1;
function Wh(e, t = !1) {
  $a += e, e < 0 && Un && t && (Un.hasOnce = !0);
}
function hg(e) {
  return e.dynamicChildren = $a > 0 ? Un || Oo : null, A_(), $a > 0 && Un && Un.push(e), e;
}
function ce(e, t, n, r, o, a) {
  return hg(
    G(
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
function Rr(e, t, n, r, o) {
  return hg(
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
function pg(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function pa(e, t) {
  return e.type === t.type && e.key === t.key;
}
const mg = ({ key: e }) => e ?? null, zs = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Wt(e) || /* @__PURE__ */ vn(e) || et(e) ? { i: Wn, r: e, k: t, f: !!n } : e : null);
function G(e, t = null, n = null, r = 0, o = null, a = e === Ye ? 0 : 1, c = !1, f = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && mg(t),
    ref: t && zs(t),
    scopeId: jm,
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
    ctx: Wn
  };
  return f ? (xf(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= Wt(n) ? 8 : 16), $a > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Un && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && Un.push(d), d;
}
const De = C_;
function C_(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Xm) && (e = Si), pg(e)) {
    const f = Go(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && xf(f, n), $a > 0 && !a && Un && (f.shapeFlag & 6 ? Un[Un.indexOf(e)] = f : Un.push(f)), f.patchFlag = -2, f;
  }
  if (z_(e) && (e = e.__vccOpts), t) {
    t = I_(t);
    let { class: f, style: d } = t;
    f && !Wt(f) && (t.class = at(f)), bt(d) && (/* @__PURE__ */ yf(d) && !Je(d) && (d = _n({}, d)), t.style = wt(d));
  }
  const c = Wt(e) ? 1 : dg(e) ? 128 : jv(e) ? 64 : bt(e) ? 4 : et(e) ? 2 : 0;
  return G(
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
function I_(e) {
  return e ? /* @__PURE__ */ yf(e) || rg(e) ? _n({}, e) : e : null;
}
function Go(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: f, transition: d } = e, b = t ? vi(o || {}, t) : o, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && mg(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Je(a) ? a.concat(zs(t)) : [a, zs(t)] : zs(t)
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
    patchFlag: t && e.type !== Ye ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && Go(e.ssContent),
    ssFallback: e.ssFallback && Go(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && vf(
    g,
    d.clone(g)
  ), g;
}
function wa(e = " ", t = 0) {
  return De(zl, null, e, t);
}
function ct(e = "", t = !1) {
  return t ? (ie(), Rr(Si, null, e)) : De(Si, null, e);
}
function Pr(e) {
  return e == null || typeof e == "boolean" ? De(Si) : Je(e) ? De(
    Ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : pg(e) ? Jr(e) : De(zl, null, String(e));
}
function Jr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Go(e);
}
function xf(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Je(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), xf(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !rg(t) ? t._ctx = Wn : o === 3 && Wn && (Wn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else et(t) ? (t = { default: t, _ctx: Wn }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [wa(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = at([t.class, r.class]));
      else if (o === "style")
        t.style = wt([t.style, r.style]);
      else if (Cl(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(Je(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Il(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function wr(e, t, n, r = null) {
  Tr(e, t, 7, [
    n,
    r
  ]);
}
const E_ = Zm();
let O_ = 0;
function F_(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || E_, a = {
    uid: O_++,
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
    scope: new iv(
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
    propsOptions: og(r, o),
    emitsOptions: Qm(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _t,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: _t,
    data: _t,
    props: _t,
    attrs: _t,
    slots: _t,
    refs: _t,
    setupState: _t,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = f_.bind(null, a), e.ce && e.ce(a), a;
}
let bn = null;
const T_ = () => bn || Wn;
let al, Iu;
{
  const e = Fl(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  al = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => bn = n
  ), Iu = t(
    "__VUE_SSR_SETTERS__",
    (n) => Va = n
  );
}
const Xa = (e) => {
  const t = bn;
  return al(e), e.scope.on(), () => {
    e.scope.off(), al(t);
  };
}, Uh = () => {
  bn && bn.scope.off(), al(null);
};
function gg(e) {
  return e.vnode.shapeFlag & 4;
}
let Va = !1;
function D_(e, t = !1, n = !1) {
  t && Iu(t);
  const { props: r, children: o } = e.vnode, a = gg(e);
  y_(e, r, a, t), w_(e, o, n || t);
  const c = a ? L_(e, t) : void 0;
  return t && Iu(!1), c;
}
function L_(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, n_);
  const { setup: r } = n;
  if (r) {
    ni();
    const o = e.setupContext = r.length > 1 ? $_(e) : null, a = Xa(e), c = Ua(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), f = mm(c);
    if (ri(), a(), (f || e.sp) && !Ea(e) && Bm(e), f) {
      if (c.then(Uh, Uh), t)
        return c.then((d) => {
          Yh(e, d);
        }).catch((d) => {
          Dl(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Yh(e, c);
  } else
    yg(e);
}
function Yh(e, t, n) {
  et(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : bt(t) && (e.setupState = Lm(t)), yg(e);
}
function yg(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Or);
  {
    const o = Xa(e);
    ni();
    try {
      r_(e);
    } finally {
      ri(), o();
    }
  }
}
const R_ = {
  get(e, t) {
    return yn(e, "get", ""), e[t];
  }
};
function $_(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, R_),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function jl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Lm(Mv(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Oa)
        return Oa[n](e);
    },
    has(t, n) {
      return n in t || n in Oa;
    }
  })) : e.proxy;
}
function V_(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function z_(e) {
  return et(e) && "__vccOpts" in e;
}
const ut = (e, t) => /* @__PURE__ */ Iv(e, t, Va), j_ = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Eu;
const Xh = typeof window < "u" && window.trustedTypes;
if (Xh)
  try {
    Eu = /* @__PURE__ */ Xh.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const bg = Eu ? (e) => Eu.createHTML(e) : (e) => e, H_ = "http://www.w3.org/2000/svg", G_ = "http://www.w3.org/1998/Math/MathML", Yr = typeof document < "u" ? document : null, qh = Yr && /* @__PURE__ */ Yr.createElement("template"), K_ = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? Yr.createElementNS(H_, e) : t === "mathml" ? Yr.createElementNS(G_, e) : n ? Yr.createElement(e, { is: n }) : Yr.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => Yr.createTextNode(e),
  createComment: (e) => Yr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Yr.querySelector(e),
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
      qh.innerHTML = bg(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const f = qh.content;
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
}, B_ = /* @__PURE__ */ Symbol("_vtc");
function W_(e, t, n) {
  const r = e[B_];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const sl = /* @__PURE__ */ Symbol("_vod"), vg = /* @__PURE__ */ Symbol("_vsh"), qo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[sl] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ma(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), ma(e, !0), r.enter(e)) : r.leave(e, () => {
      ma(e, !1);
    }) : ma(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ma(e, t);
  }
};
function ma(e, t) {
  e.style.display = t ? e[sl] : "none", e[vg] = !t;
}
const U_ = /* @__PURE__ */ Symbol(""), Y_ = /(?:^|;)\s*display\s*:/;
function X_(e, t, n) {
  const r = e.style, o = Wt(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (Wt(t))
        for (const c of t.split(";")) {
          const f = c.slice(0, c.indexOf(":")).trim();
          n[f] == null && js(r, f, "");
        }
      else
        for (const c in t)
          n[c] == null && js(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), js(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[U_];
      c && (n += ";" + c), r.cssText = n, a = Y_.test(n);
    }
  } else t && e.removeAttribute("style");
  sl in e && (e[sl] = a ? r.display : "", e[vg] && (r.display = "none"));
}
const Jh = /\s*!important$/;
function js(e, t, n) {
  if (Je(n))
    n.forEach((r) => js(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = q_(e, t);
    Jh.test(n) ? e.setProperty(
      to(r),
      n.replace(Jh, ""),
      "important"
    ) : e[r] = n;
  }
}
const Zh = ["Webkit", "Moz", "ms"], Hc = {};
function q_(e, t) {
  const n = Hc[t];
  if (n)
    return n;
  let r = Nn(t);
  if (r !== "filter" && r in e)
    return Hc[t] = r;
  r = Ol(r);
  for (let o = 0; o < Zh.length; o++) {
    const a = Zh[o] + r;
    if (a in e)
      return Hc[t] = a;
  }
  return t;
}
const Qh = "http://www.w3.org/1999/xlink";
function ep(e, t, n, r, o, a = nv(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Qh, t.slice(6, t.length)) : e.setAttributeNS(Qh, t, n) : n == null || a && !vm(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Fr(n) ? String(n) : n
  );
}
function tp(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? bg(n) : n);
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
    f === "boolean" ? n = vm(n) : n == null && f === "string" ? (n = "", c = !0) : f === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function No(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function J_(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const np = /* @__PURE__ */ Symbol("_vei");
function Z_(e, t, n, r, o = null) {
  const a = e[np] || (e[np] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [f, d] = Q_(t);
    if (r) {
      const b = a[t] = nw(
        r,
        o
      );
      No(e, f, b, d);
    } else c && (J_(e, f, c, d), a[t] = void 0);
  }
}
const rp = /(?:Once|Passive|Capture)$/;
function Q_(e) {
  let t;
  if (rp.test(e)) {
    t = {};
    let r;
    for (; r = e.match(rp); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : to(e.slice(2)), t];
}
let Gc = 0;
const ew = /* @__PURE__ */ Promise.resolve(), tw = () => Gc || (ew.then(() => Gc = 0), Gc = Date.now());
function nw(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Tr(
      rw(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = tw(), n;
}
function rw(e, t) {
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
const ip = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, iw = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? W_(e, r, c) : t === "style" ? X_(e, n, r) : Cl(t) ? Il(t) || Z_(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : ow(e, t, r, c)) ? (tp(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ep(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (aw(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Wt(r))) ? tp(e, Nn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), ep(e, t, r, c));
};
function ow(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ip(t) && et(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ip(t) && Wt(n) ? !1 : t in e;
}
function aw(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Nn(t);
  return Array.isArray(n) ? n.some((o) => Nn(o) === r) : Object.keys(n).some((o) => Nn(o) === r);
}
const op = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Je(t) ? (n) => $s(t, n) : t;
};
function sw(e) {
  e.target.composing = !0;
}
function ap(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Kc = /* @__PURE__ */ Symbol("_assign");
function sp(e, t, n) {
  return t && (e = e.trim()), n && (e = cf(e)), e;
}
const lp = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Kc] = op(o);
    const a = r || o.props && o.props.type === "number";
    No(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Kc](sp(e.value, n, a));
    }), (n || a) && No(e, "change", () => {
      e.value = sp(e.value, n, a);
    }), t || (No(e, "compositionstart", sw), No(e, "compositionend", ap), No(e, "change", ap));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[Kc] = op(c), e.composing) return;
    const f = (a || e.type === "number") && !/^0\d/.test(e.value) ? cf(e.value) : e.value, d = t ?? "";
    if (f === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, lw = ["ctrl", "shift", "alt", "meta"], cw = {
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
  exact: (e, t) => lw.some((n) => e[`${n}Key`] && !t.includes(n))
}, At = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const f = cw[t[c]];
      if (f && f(o, t)) return;
    }
    return e(o, ...a);
  }));
}, uw = /* @__PURE__ */ _n({ patchProp: iw }, K_);
let cp;
function fw() {
  return cp || (cp = S_(uw));
}
const Sf = ((...e) => {
  const t = fw().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = hw(r);
    if (!o) return;
    const a = t._component;
    !et(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, dw(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function dw(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function hw(e) {
  return Wt(e) ? document.querySelector(e) : e;
}
function Po(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function pw() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function up(e, t = 8) {
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
function kf(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function Xr(e, t, n) {
  if (!e) return Po(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Et(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Bc = null, Wc = null, fp = null, dp = null, zt = null, ga = null, Sn = null, gi = null;
function mw() {
  if (Wc) return Wc;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Wc = n, n;
}
function Uc(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Bc = Xr(Bc, n, r);
  const o = Bc;
  Et(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", dp !== o.ctx && (fp = o.ctx.createPattern(mw(), "repeat"), dp = o.ctx), o.ctx.fillStyle = fp, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function gw(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function yw(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function bw(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function vw(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Ot = /* @__PURE__ */ new Map(), Mf = 128;
function _w(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), d = `${c}:${f.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Ot.has(d)) {
    const K = Ot.get(d);
    return Ot.delete(d), Ot.set(d, K), K;
  }
  Ot.size >= Mf && Ot.delete(Ot.keys().next().value);
  const b = c * 2 + 2, g = c + 1, w = kf(b, b), x = w.getContext("2d"), M = f * c, S = c + 1, v = `rgba(${n},${r},${o},${a})`, F = `rgba(${n},${r},${o},0)`, $ = x.createRadialGradient(g, g, M, g, g, S);
  return $.addColorStop(0, v), $.addColorStop(1, F), x.fillStyle = $, x.fillRect(0, 0, b, b), Ot.set(d, w), w;
}
function ww(e, t, n, r, o, a, c) {
  const { r: f, g: d, b, a: g } = r, w = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, o), S = Math.max(0, Math.min(0.99, a)), v = Math.max(0, Math.min(1, c ?? 0)), F = `chisel:${w}:${x}:${n.toFixed(2)}:${f}:${d}:${b}:${g.toFixed(3)}:${M.toFixed(2)}:${S.toFixed(2)}:${v.toFixed(2)}`;
  if (Ot.has(F)) {
    const Q = Ot.get(F);
    return Ot.delete(F), Ot.set(F, Q), Q;
  }
  Ot.size >= Mf && Ot.delete(Ot.keys().next().value);
  const $ = kf(w, x), K = $.getContext("2d"), C = K.createImageData(w, x), L = C.data, O = Math.max(0, e - t), R = Math.max(0, Math.min(1, n)), H = 1 + M;
  for (let Q = 0; Q < x; Q++)
    for (let _e = 0; _e < w; _e++) {
      const T = _e + 0.5 - e, E = Q + 0.5 - t, se = Math.max(Math.abs(T) - O, 0), ue = Math.hypot(se, E) / t;
      if (ue >= 1) continue;
      const U = ue <= R ? 1 : Math.max(0, (1 - ue) / Math.max(1e-4, 1 - R)), X = 1 - ue, j = 1 + M * (1 - X) * (1 - X), P = 1 - S * X * X, ee = j * P / H;
      let Y = 1;
      if (v > 0) {
        const St = Math.floor((E + t) / 1.5), pt = Math.floor((T + e) / 8), sn = Xi(Lo(St * 41 + 500, pt * 19 + 300));
        Y = 1 - v * 0.42 * sn;
      }
      const Ie = Math.round(255 * Math.min(1, g * U * ee * Y));
      if (Ie <= 0) continue;
      const Fe = (Q * w + _e) * 4;
      L[Fe] = f, L[Fe + 1] = d, L[Fe + 2] = b, L[Fe + 3] = Ie;
    }
  return K.putImageData(C, 0, 0), Ot.set(F, $), $;
}
function Lo(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function Xi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function xw(e, t, n, r, o, a, c) {
  const f = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), g = Math.max(Math.abs(f) - b, 0), w = Math.hypot(g, d) / r;
  if (w >= 1) return 0;
  const x = Xi(Lo(e * 17 + 3, t * 13 + 7)), M = w + a * 0.22 * (x - 0.5);
  if (M >= 1) return 0;
  const S = M <= o ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - o)), v = Sw(e, t, f, d, n, r), F = a * 0.55;
  if (v < F) return 0;
  const K = 0.45 + 0.55 * ((v - F) / Math.max(1e-4, 1 - F));
  return Math.round(255 * Math.min(1, c * S * K));
}
function Sw(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), f = Math.floor((r + a) / 2), d = Xi(Lo(c * 13 + 700, f * 17 + 400)), b = Math.floor((n + o) / 1.5), g = Math.floor((r + a) / 1.5), w = Xi(Lo(b * 23 + 800, g * 29 + 500)), x = Xi(Lo(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + w * 0.3 + x * 0.15;
}
function kw(e, t, n, r, o) {
  const { r: a, g: c, b: f, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), w = Math.max(0, Math.min(1, o)), x = `crayon:${b}:${g}:${n.toFixed(2)}:${a}:${c}:${f}:${d.toFixed(3)}:${w.toFixed(2)}`;
  if (Ot.has(x)) {
    const K = Ot.get(x);
    return Ot.delete(x), Ot.set(x, K), K;
  }
  Ot.size >= Mf && Ot.delete(Ot.keys().next().value);
  const M = kf(b, g), S = M.getContext("2d"), v = S.createImageData(b, g), F = v.data, $ = Math.max(0, Math.min(1, n));
  for (let K = 0; K < g; K++)
    for (let C = 0; C < b; C++) {
      const L = xw(C, K, e, t, $, w, d);
      if (L <= 0) continue;
      const O = (K * b + C) * 4;
      F[O] = a, F[O + 1] = c, F[O + 2] = f, F[O + 3] = L;
    }
  return S.putImageData(v, 0, 0), Ot.set(x, M), M;
}
function _g(e, t, n) {
  var v, F;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = bw(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = Mw(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((v = t == null ? void 0 : t.angle) == null ? void 0 : v.value) ?? 0), b = vw(t, o), g = String(((F = t == null ? void 0 : t.targetSpace) == null ? void 0 : F.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && g !== "unwrap", x = t == null ? void 0 : t.scatter, M = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let S;
  if (r === "chisel") {
    const $ = o * f, K = o, C = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), L = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), O = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    S = ww($, K, a, c, C, L, O);
  } else if (r === "crayon") {
    const $ = o * f, K = o, C = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    S = kw($, K, a, c, C);
  } else
    S = _w(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: S, radiusPx: o, spacingPx: b, desc: n, aspect: f, angle: d, stampKind: r, scatter: M, latitudeCorrection: w };
}
function Mw(e) {
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
function Nw(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function hp(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function f(b, g) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, g - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, g), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  f(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && f(t + c, n), t + d > c && f(t - c, n);
}
function Nf(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: g } = e.scatter, w = b * e.radiusPx * o, x = Lo(t, n);
    for (let M = 0; M < g; M++) {
      const S = Xi(x + M * 2) * Math.PI * 2, v = Math.sqrt(Xi(x + M * 2 + 1)) * w, F = t + Math.cos(S) * v, $ = n + Math.sin(S) * v, K = Math.max(0.5, e.radiusPx * o * 0.48), C = (0.5 - $ / Math.max(1, e.desc.height)) * Math.PI, L = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(C)) : 1, O = K * e.aspect * L;
      hp(e, F, $, K, O);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * f;
  hp(e, t, n, a, d);
}
function pp(e, t, n) {
  const r = yw(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = _g(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let x = 0; x < r.length; x++) {
    let M = Number(r[x].u || 0) * o;
    const S = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(M - f[x - 1].x) > o * 0.5 && (M += M < f[x - 1].x ? o : -o), f.push({ x: M, y: S });
  }
  if (Nf(c, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let d = f[0], b = f[0], g = f[0], w = 0;
  for (let x = 1; x < f.length; x++) {
    const M = f[x], S = { x: (b.x + M.x) * 0.5, y: (b.y + M.y) * 0.5 };
    x === 1 ? w = za(c, g.x, g.y, S.x, S.y, w) : w = ll(c, d, g, S, M, w), d = b, b = M, g = S;
  }
  f.length === 2 ? za(c, g.x, g.y, b.x, b.y, w) : ll(c, d, g, b, b, w), e.restore();
}
function Hs(e, t, n) {
  var w;
  const r = Array.isArray((w = t == null ? void 0 : t.geometry) == null ? void 0 : w.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = Nw(t), f = [];
  let d = 1 / 0, b = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const M = gw(r[x]);
    let S = Number(M.x || 0) * o;
    x > 0 && Math.abs(S - f[x - 1].x) > o * 0.5 && (S += S < f[x - 1].x ? o : -o), f.push({ x: S, y: Number(M.y || 0) * a }), S < d && (d = S), S > b && (b = S);
  }
  function g(x) {
    e.beginPath(), e.moveTo(f[0].x + x, f[0].y);
    for (let M = 1; M < f.length; M++) e.lineTo(f[M].x + x, f[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, g(0), d < 0 && g(o), b > o && g(-o), e.restore();
}
function xs(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Hs(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? pp(e, t, n) : (ga = Xr(ga, n.width, n.height), Et(ga), pp(ga.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(ga.canvas, 0, 0), e.restore());
}
function Di(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function za(e, t, n, r, o, a) {
  const c = r - t, f = o - n, d = Math.hypot(c, f);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const g = b / d;
    Nf(e, t + c * g, n + f * g, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function ll(e, t, n, r, o, a) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, g = 0, w = f, x = w + d, M = x + b, S = x - w, v = 16;
  let F = a, $ = n.x, K = n.y;
  for (let C = 1; C <= v; C++) {
    const L = w + S * C / v, O = ((w - L) * t.x + (L - g) * n.x) / (w - g), R = ((w - L) * t.y + (L - g) * n.y) / (w - g), H = ((x - L) * n.x + (L - w) * r.x) / (x - w), Q = ((x - L) * n.y + (L - w) * r.y) / (x - w), _e = ((M - L) * r.x + (L - x) * o.x) / (M - x), T = ((M - L) * r.y + (L - x) * o.y) / (M - x), E = ((x - L) * O + (L - g) * H) / (x - g), se = ((x - L) * R + (L - g) * Q) / (x - g), le = ((M - L) * H + (L - w) * _e) / (M - w), ue = ((M - L) * Q + (L - w) * T) / (M - w), U = ((x - L) * E + (L - w) * le) / (x - w), X = ((x - L) * se + (L - w) * ue) / (x - w);
    F = za(e, $, K, U, X, F), $ = U, K = X;
  }
  return F;
}
function Pw(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, f = n * a.height, d = e.activeStroke;
  let b = t * c;
  if (d && Math.abs(b - d.prev.x) > c * 0.5 && (b += b < d.prev.x ? c : -c), !d) {
    const M = _g(o, r, a), S = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), v = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), F = String((r == null ? void 0 : r.toolKind) || "") === "eraser", $ = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", Nf(M, b, f, 1), e.activeStroke = {
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
      strokeOpacity: S,
      velocityWidthFactor: v,
      distSinceStamp: 0,
      isEraser: F,
      layerKind: $,
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
  d.pointCount === 1 ? d.distSinceStamp = za(x, d.lastMidX, d.lastMidY, g, w, d.distSinceStamp) : d.distSinceStamp = ll(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: g, y: w },
    { x: b, y: f },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: f }, d.lastMidX = g, d.lastMidY = w, d.pointCount++, e.displayDirty = !0;
}
function Ou(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = Po(t, n), c = {
    descriptor: r,
    committedMask: Po(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: Po(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = Po(t, n);
  let b = null, g = "", w = null;
  function x(T) {
    return {
      actionGroupId: T,
      descriptor: r,
      committedPaint: Po(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function M(T) {
    let E = o.get(T);
    return E || (E = x(T), o.set(T, E)), E;
  }
  function S(T) {
    return g === "mask" ? c : b ? M(b) : f;
  }
  function v(T) {
    var X;
    const E = !w || w.length !== T.length || T.some((j, P) => j !== w[P]), se = g === "paint" && ((X = b ? o.get(b) : f) == null ? void 0 : X.activeStroke) || null;
    let le = c.displayDirty || f.displayDirty || E;
    for (const j of T) {
      const P = o.get(j);
      if (P != null && P.displayDirty) {
        le = !0;
        break;
      }
    }
    if (se && (le = !0), !le) return;
    c.displayDirty = !1, f.displayDirty = !1;
    for (const j of T) {
      const P = o.get(j);
      P && (P.displayDirty = !1);
    }
    w = [...T];
    const ue = d.ctx;
    Et(d);
    const U = !!(se != null && se.isEraser);
    for (const j of T) {
      const P = o.get(j);
      if (!P) continue;
      const Y = b === P.actionGroupId && g === "paint" ? P.activeStroke : null;
      if (U)
        zt = Xr(zt, t, n), Et(zt), zt.ctx.drawImage(P.committedPaint.canvas, 0, 0), Di(zt.ctx, a.canvas), ue.drawImage(zt.canvas, 0, 0);
      else if (ue.drawImage(P.committedPaint.canvas, 0, 0), Y) {
        const Ie = P.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Y.strokeOpacity ?? 1));
        ue.save(), ue.globalAlpha = Ie, ue.drawImage(a.canvas, 0, 0), ue.restore();
      }
    }
  }
  function F(T) {
    var se, le, ue, U, X;
    for (const j of o.values())
      Et(j.committedPaint), Et(j.currentStroke), j.activeStroke = null, j.displayDirty = !0;
    Et(c.committedMask), Et(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, f.displayDirty = !0, w = null;
    const E = [
      ...Array.isArray((le = (se = T == null ? void 0 : T.painting) == null ? void 0 : se.paint) == null ? void 0 : le.strokes) ? T.painting.paint.strokes : [],
      ...Array.isArray((U = (ue = T == null ? void 0 : T.painting) == null ? void 0 : ue.mask) == null ? void 0 : U.strokes) ? T.painting.mask.strokes : []
    ];
    for (const j of E) {
      if (((X = j == null ? void 0 : j.targetSpace) == null ? void 0 : X.kind) !== "ERP_GLOBAL") continue;
      const P = String((j == null ? void 0 : j.layerKind) || "paint"), Y = String((j == null ? void 0 : j.toolKind) || "pen") === "eraser";
      if (P === "mask") {
        const Ie = c.descriptor;
        Y ? (zt = Xr(zt, Ie.width, Ie.height), Et(zt), xs(zt.ctx, j, Ie), Di(c.committedMask.ctx, zt.canvas)) : xs(c.committedMask.ctx, j, Ie);
        continue;
      }
      if (Y) {
        zt = Xr(zt, r.width, r.height), Et(zt), xs(zt.ctx, j, r);
        for (const Ie of o.values())
          Di(Ie.committedPaint.ctx, zt.canvas), Ie.displayDirty = !0;
      } else {
        const Ie = String((j == null ? void 0 : j.actionGroupId) || "__default__"), Fe = M(Ie), St = Fe.descriptor;
        xs(Fe.committedPaint.ctx, j, St), Fe.displayDirty = !0;
      }
    }
    v([...o.keys()]);
  }
  function $(T, E) {
    g = String((T == null ? void 0 : T.layerKind) || "");
    const se = String((T == null ? void 0 : T.toolKind) || "") === "eraser";
    if (g === "mask")
      b = null, Et(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const le = se ? f : M(String((T == null ? void 0 : T.actionGroupId) || "__default__"));
      b = se ? "" : String((T == null ? void 0 : T.actionGroupId) || "__default__"), Et(le.currentStroke), le.activeStroke = null, le.displayDirty = !0;
    }
  }
  function K(T, E) {
    var P;
    const se = String((T == null ? void 0 : T.layerKind) || "paint"), le = String((T == null ? void 0 : T.toolKind) || "") === "eraser", ue = se === "mask" ? c : le ? f : M(String((T == null ? void 0 : T.actionGroupId) || b || "__default__")), U = ue.activeStroke, X = ue.descriptor;
    if (U && U.pointCount > 1) {
      const ee = ue.currentStroke.ctx;
      ee.globalCompositeOperation = "source-over";
      const Y = {
        ctx: ee,
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
      U.pointCount === 2 ? za(Y, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : ll(Y, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    ue.lassoPreviewActive && (Et(ue.currentStroke), Hs(ue.currentStroke.ctx, T, X), ue.lassoPreviewActive = !1);
    const j = se === "mask" ? c.committedMask : ue.committedPaint;
    if (le && se === "paint")
      for (const ee of o.values())
        Di(ee.committedPaint.ctx, ue.currentStroke.canvas), ee.displayDirty = !0;
    else if (le)
      Di(j.ctx, ue.currentStroke.canvas);
    else {
      const ee = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      j.ctx.save(), j.ctx.globalAlpha = ee, j.ctx.drawImage(ue.currentStroke.canvas, 0, 0), j.ctx.restore();
    }
    pw() && (String((T == null ? void 0 : T.toolKind) || ""), String((X == null ? void 0 : X.kind) || ""), Number((X == null ? void 0 : X.width) || 0), Number((X == null ? void 0 : X.height) || 0), String(((P = T == null ? void 0 : T.targetSpace) == null ? void 0 : P.viewMode) || ""), Number((T == null ? void 0 : T.aspect) ?? 1), up(ue.currentStroke.canvas), up(j.canvas), void 0), Et(ue.currentStroke), ue.activeStroke = null, ue.displayDirty = !0, b = null, g = "", v([...o.keys()]);
  }
  function C(T) {
    if (g === "mask")
      Et(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (g === "paint" && !b)
      Et(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (b) {
      const E = o.get(b);
      E && (Et(E.currentStroke), E.activeStroke = null, E.lassoPreviewActive = !1, E.displayDirty = !0);
    }
    b = null, g = "", v([...o.keys()]);
  }
  function L(T, E) {
    var le;
    if (g = String((T == null ? void 0 : T.layerKind) || ""), String(((le = T == null ? void 0 : T.geometry) == null ? void 0 : le.geometryKind) || "") === "lasso_fill") {
      if (g === "mask")
        Et(c.currentStroke), Hs(c.currentStroke.ctx, T, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const ue = String((T == null ? void 0 : T.toolKind) || "") === "eraser", U = ue ? f : M(String((T == null ? void 0 : T.actionGroupId) || b || "__default__"));
        b = ue ? "" : String((T == null ? void 0 : T.actionGroupId) || b || "__default__"), Et(U.currentStroke), Hs(U.currentStroke.ctx, T, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
      }
      v([...o.keys()]);
    }
  }
  function O(T) {
    return v(T ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function R(T) {
    return o.get(String(T)) ?? null;
  }
  function H() {
    return [...o.keys()];
  }
  function Q(T) {
    var X;
    const E = o.get(String(T));
    if (!E) return null;
    const se = g === "paint" && b === E.actionGroupId, le = g === "paint" && ((X = b ? o.get(b) : f) == null ? void 0 : X.activeStroke) || null;
    if (le != null && le.isEraser)
      return Sn = Xr(Sn, t, n), Et(Sn), Sn.ctx.drawImage(E.committedPaint.canvas, 0, 0), Di(Sn.ctx, a.canvas), Sn.canvas;
    const ue = se ? E.activeStroke : null;
    if (!ue) return E.committedPaint.canvas;
    Sn = Xr(Sn, t, n), Et(Sn), Sn.ctx.drawImage(E.committedPaint.canvas, 0, 0);
    const U = E.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ue.strokeOpacity ?? 1));
    return Sn.ctx.save(), Sn.ctx.globalAlpha = U, Sn.ctx.drawImage(a.canvas, 0, 0), Sn.ctx.restore(), Sn.canvas;
  }
  function _e() {
    return gi = Xr(gi, t, n), Et(gi), Uc(gi.ctx, c.committedMask.canvas), g === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (zt = Xr(zt, t, n), Et(zt), zt.ctx.drawImage(c.committedMask.canvas, 0, 0), Di(zt.ctx, a.canvas), Et(gi), Uc(gi.ctx, zt.canvas)) : Uc(gi.ctx, a.canvas)), gi.canvas;
  }
  return {
    rebuildCommitted: F,
    beginStroke: $,
    appendStrokePoint: Pw,
    updateActiveStroke: L,
    commitActiveStroke: K,
    cancelActiveStroke: C,
    getErpTarget: O,
    ensureTarget: S,
    getGroupTarget: R,
    getGroupDisplayCanvas: Q,
    getMaskDisplayCanvas: _e,
    getAllGroupIds: H
  };
}
function J(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Bt(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Aw(e, t) {
  let n = Bt(t) - Bt(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Fu = 3;
function ya(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Pf(e, t = 0) {
  const n = ya(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = ya(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = ya(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = ya(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(ya(t) || 0);
}
function wg(e) {
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
const mp = Math.PI / 180, gp = 0.12, Cw = Fu, Iw = 35, Ew = 140, xa = 100, Ow = 20, yp = 0.8;
function Fw(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = J(Number(e || xa), 1, 179) * mp;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / mp;
}
function Af(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: xa })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(K, C = null) {
    f && f(K, C);
  }
  function g(K, C, L = null, O = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(K || 0), d.drag.lastY = Number(C || 0), d.drag.lastTs = Number(O || performance.now()), d.drag.pointerId = L, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: L }), !0;
  }
  function w(K, C, L = "pano", O = performance.now()) {
    if (!d.drag.active) return !1;
    const R = Number(O || performance.now()), H = Number(K), Q = Number(C), _e = H - d.drag.lastX, T = Q - d.drag.lastY;
    d.drag.lastX = H, d.drag.lastY = Q, d.drag.lastTs = R;
    const E = r() || { x: 1, y: 1 }, se = Number(E.x || 1), le = Number(E.y || 1), ue = { ...t() };
    let U = 0, X = 0;
    if (L === "unwrap") {
      const P = o() || { w: 1, h: 1 }, ee = Math.max(1, Number(P.w || 1)), Y = Math.max(1, Number(P.h || 1)), Ie = _e / ee, Fe = T / Y;
      U = -Ie * 360 * se, X = Fe * 180 * le;
    } else {
      const P = a() || { w: 0, h: 0 }, ee = Math.max(1, Number(P.w || 0)), Y = Math.max(1, Number(P.h || 0));
      if (ee > 1 && Y > 1) {
        const Ie = J(Number(ue.fov || xa), 1, 179), Fe = J(Fw(Ie, ee, Y), 0.1, 179);
        U = -(_e / ee) * Ie * se, X = T / Y * Fe * le;
      } else
        U = -_e * gp * se, X = T * gp * le;
    }
    ue.yaw = Bt(Number(ue.yaw || 0) + U), ue.pitch = J(Number(ue.pitch || 0) + X, -89.9, 89.9), n(ue), d.velHistory.push({ ts: R, yaw: ue.yaw, pitch: ue.pitch });
    let j = 0;
    for (; j < d.velHistory.length - 1 && d.velHistory[j].ts < R - 100; ) j++;
    return j > 0 && d.velHistory.splice(0, j), d.inertia.active = !1, d.inertia.lastTs = R, c(), b("drag", { phase: "move", dx: _e, dy: T, dYaw: U, dPitch: X }), !0;
  }
  function x(K = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const C = Number(K || performance.now());
    d.drag.lastTs = C;
    const L = d.velHistory.filter((R) => C - R.ts <= 80);
    if (L.length >= 2) {
      const R = L[0], H = L.at(-1), Q = Math.max(1e-3, (H.ts - R.ts) / 1e3);
      let _e = H.yaw - R.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / Q, d.inertia.vy = (H.pitch - R.pitch) / Q;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const O = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = O > Ow, d.inertia.lastTs = C, b("drag", { phase: "end", speed: O, inertiaActive: d.inertia.active }), !0;
  }
  function M(K = performance.now()) {
    if (!d.inertia.active) return !1;
    const C = Number(K || performance.now()), L = Math.max(1e-3, (C - (d.inertia.lastTs || C)) / 1e3);
    d.inertia.lastTs = C;
    const O = { ...t() };
    O.yaw = Bt(Number(O.yaw || 0) + d.inertia.vx * L), O.pitch = J(Number(O.pitch || 0) + d.inertia.vy * L, -89.9, 89.9);
    const R = Math.exp(-5.5 * L);
    return d.inertia.vx *= R, d.inertia.vy *= R, Math.abs(d.inertia.vx) < yp && Math.abs(d.inertia.vy) < yp && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(O), c(), d.inertia.active;
  }
  function S() {
    const K = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], K;
  }
  function v(K) {
    const C = Math.sign(Number(K || 0));
    if (!C) return !1;
    const L = { ...t() }, O = Number(L.fov || xa);
    return L.fov = J(O + C * Cw, Iw, Ew), n(L), c(), b("wheel", { deltaSign: C, fovBefore: O, fovAfter: L.fov }), !0;
  }
  function F(K, C = 0) {
    return v(Pf(K, C));
  }
  function $() {
    n({ yaw: 0, pitch: 0, fov: xa }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: g,
    moveDrag: w,
    endDrag: x,
    stepInertia: M,
    stopMotion: S,
    applyWheel: v,
    applyWheelEvent: F,
    resetView: $
  };
}
const an = Math.PI / 180, Pn = 180 / Math.PI;
function ir(e, t, n) {
  return { x: e, y: t, z: n };
}
function cl(e, t) {
  return ir(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ul(e, t) {
  return ir(e.x * t, e.y * t, e.z * t);
}
function Yc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Cf(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ir(e.x / t, e.y / t, e.z / t);
}
function Rn(e, t) {
  const n = e * an, r = t * an, o = Math.cos(r);
  return ir(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Jo(e, t, n = 0) {
  const r = Number(e || 0) * an, o = Number(t || 0) * an, a = n * an, c = Math.cos(r), f = Math.sin(r), d = Math.cos(o), b = Math.sin(o), g = Math.cos(a), w = Math.sin(a);
  return {
    right: ir(
      c * g - f * b * w,
      d * w,
      -f * g - c * b * w
    ),
    up: ir(
      -c * w - f * b * g,
      d * g,
      f * w - c * b * g
    ),
    fwd: ir(f * d, b, c * d)
  };
}
function fl(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function yt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Tw() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Dw(e) {
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
function Lw(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Rw(e, t) {
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
function Ss(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = Rw(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function $w(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = Ss(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = Ss(e.points, t, 1);
  if (!a) return null;
  const c = Ss(e.rawPoints, t, 1), f = Ss(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: f || a.map((d) => ({ ...d }))
  };
}
function Vw(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Lw(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = $w(e.geometry, n, r, t === "paint");
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
function bp(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = Vw(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function zw(e) {
  if (!e || typeof e != "object") return null;
  const t = yt(e.u0, null), n = yt(e.v0, null), r = yt(e.u1, null), o = yt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (f) => Math.max(0, Math.min(1, f)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function jw(e) {
  const t = e || {};
  return {
    du: yt(t.du, 0) ?? 0,
    dv: yt(t.dv, 0) ?? 0,
    rot_deg: yt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, yt(t.scale, 1) ?? 1)
  };
}
function Hw(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = zw(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, yt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: jw(e.transform)
  } : null;
}
function Gw(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = Hw(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function Ro(e) {
  const t = Tw();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Dw(e.groups),
    paint: bp(e.paint, "paint"),
    mask: bp(e.mask, "mask"),
    raster_objects: Gw(e.raster_objects)
  };
}
const Dr = 1, Lr = 179, Tu = 85;
function Hl(e) {
  const t = ((tt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function xg(e, t) {
  let n = tt(e, 0) - tt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Sg(e, t, { shiftKey: n = !1 } = {}) {
  let r = tt(e, 0) + tt(t, 0) * Pn;
  return n && (r = Math.round(r / 15) * 15), Hl(r);
}
function tt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function oi(e = {}) {
  const t = J(tt(e.hFOV_deg || 90, 90), Dr, Lr), n = J(tt(e.vFOV_deg || 60, 60), Dr, Lr), r = Math.tan(t * an * 0.5), o = Math.tan(n * an * 0.5);
  return {
    yawDeg: tt(e.yaw_deg, 0),
    pitchDeg: tt(e.pitch_deg, 0),
    rollDeg: tt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function qi(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = oi(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function If(e, t) {
  const n = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, tt(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function Ef(e, t) {
  const n = Math.max(1e-12, tt(t, 1)), r = Math.max(1e-6, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = J(2 * Math.atan(r / (2 * n)) * Pn, Dr, Lr), c = J(2 * Math.atan(o / (2 * n)) * Pn, Dr, Lr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function Kw(e, t, n) {
  const r = tt(e == null ? void 0 : e.x, 0), o = tt(e == null ? void 0 : e.y, 0), a = Math.max(1, tt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, tt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = oi(t), d = Math.max(1e-12, tt(n, 1)), b = 2 * d * f.tanHalfX, g = 2 * d * f.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (c - g) * 0.5,
    w: b,
    h: g,
    focalPx: d
  };
}
function Of(e, t, n = Tu) {
  const r = Math.max(1e-12, tt(t, 1)), o = J(tt(n, Tu), 1, 89.999), a = r * Math.tan(o * an), c = Math.max(1, tt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, tt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(f * 0.5, a)
  };
}
function kg(e, t, n) {
  const r = Math.max(1e-12, tt(t, 1));
  return {
    x: (tt(n == null ? void 0 : n.x, 0) - tt(e == null ? void 0 : e.x, 0)) / r,
    y: -(tt(n == null ? void 0 : n.y, 0) - tt(e == null ? void 0 : e.y, 0)) / r
  };
}
function Gs(e, t) {
  const n = J(tt(e, 60), Dr, Lr), r = Math.max(1e-6, tt(t, 1));
  return J(
    2 * Math.atan(Math.tan(n * an * 0.5) * r) * Pn,
    Dr,
    Lr
  );
}
function vp(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Bw(e, t) {
  const n = vp(e, 1), r = vp(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), f = (b, g) => g ? f(g, b % g) : b, d = f(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function Ji(e) {
  const t = J(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * an, n = J(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * an;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Gi(e) {
  const t = Ji(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || Bw(t, 1);
}
function Mg(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Gi(t), t;
}
function Ng({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), f = Number.isFinite(c) ? J(c, Dr, Lr) : J(Math.min(42, tt(o, 100) * 0.42), 8, 96);
  return Mg({
    id: String(e),
    label: "Frame 1",
    yaw_deg: tt(t, 0),
    pitch_deg: J(tt(n, 0), -89.9, 89.9),
    roll_deg: Hl(r),
    hFOV_deg: f,
    vFOV_deg: f,
    locked: !1
  });
}
function qr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Gi(e);
}
function Pg(e, t) {
  const n = oi(e), r = tt(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * Pn, a = 2 * Math.atan(n.tanHalfY * r) * Pn;
  return o < Dr || o > Lr || a < Dr || a > Lr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function Ag(e, t, n = Fu) {
  const r = Math.sign(tt(t, 0)), o = Math.abs(tt(n, Fu));
  if (!r || !(o > 0)) return null;
  const a = oi(e), c = a.hFovDeg + r * o;
  if (c < Dr || c > Lr) return null;
  const f = Math.tan(c * an * 0.5);
  return Pg(e, f / a.tanHalfX);
}
function Cg(e, t) {
  const n = oi(e), r = Jo(n.yawDeg, n.pitchDeg, n.rollDeg), o = tt(t == null ? void 0 : t.x, 0), a = tt(t == null ? void 0 : t.y, 0);
  return Cf(cl(cl(r.fwd, ul(r.right, o)), ul(r.up, a)));
}
function Ww(e) {
  return ir(e.x, e.y, -e.z);
}
function Ks(e) {
  return ir(e.x, e.y, -e.z);
}
function Gl(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = Jo(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function Uw(e) {
  const t = Ks(ir(e[0][0], e[1][0], e[2][0])), n = Ks(ir(e[0][1], e[1][1], e[2][1])), r = Ks(ir(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), f = Math.sin(o), d = Math.atan2(f * n.z - c * n.x, c * t.x - f * t.z);
  return { yawDeg: o * Pn, pitchDeg: a * Pn, rollDeg: d * Pn };
}
function Ig(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Kl(e) {
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
function ks(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const Bi = 1e-6, Du = 1e-6, Yw = 1e-9;
function ja(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function Xw(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, f = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (c + f);
    ja(0, n, o, 1, b) < t ? c = b : f = b;
  }
  return ja(0, r, a, 1, 0.5 * (c + f));
}
function Ko(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Bo(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((x) => -x / o), f = r.map((x) => x / a);
  if (c.reduce((x, M, S) => x + M * f[S], 0) < 0) return n.map(() => 0);
  const d = c.map((x, M) => (x * a + f[M] * o) / (o + a)), b = (x) => Math.sqrt(x.reduce((M, S) => M + S * S, 0)), g = 3 * Math.min(b(c), b(f)), w = b(d);
  return w <= g ? d : d.map((x) => x * g / w);
}
function Eg(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], f = o.map((g, w) => a[w] - g);
  let d = f;
  Ko(e, r) && (d = Bo(t, r, n[r - 1].map((g, w) => g - o[w]), f).map((g) => g * c));
  let b = f;
  return Ko(e, r + 1) && (b = Bo(t, r + 1, f.map((g) => -g), n[r + 2].map((g, w) => g - a[w])).map((g) => g * c)), [d.map((g) => g / 3), b.map((g) => -g / 3)];
}
function Og(e, t, n, r, o) {
  const [[a], [c]] = Eg(e, t, n.map((f) => [f]), r);
  return ja(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function qw(e, t, n, r) {
  var b, g;
  const o = e.map((w) => w.value);
  let [a, c] = Eg(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, c = ((g = e[n + 1].handles) == null ? void 0 : g.in) ?? c;
  const f = o[n], d = o[n + 1];
  return [0, 1, 2].map((w) => ja(f[w], f[w] + a[w], d[w] + c[w], d[w], r));
}
function dl([e, t, n, r], [o, a, c, f]) {
  return [
    r * o + e * f + t * c - n * a,
    r * a - e * c + t * f + n * o,
    r * c + e * a - t * o + n * f,
    r * f - e * o - t * a - n * c
  ];
}
function Jw(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Xc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Zw([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function Lu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function Eo(e, t) {
  return Zw(dl([-e[0], -e[1], -e[2], e[3]], t));
}
function qc(e, t, n) {
  return dl(e, Lu(Eo(e, t).map((r) => n * r)));
}
function Jc(e, t) {
  const n = Jw(e, t);
  if (Math.abs(n) > Du) return n < 0;
  const [r, o, a] = Eo(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > Du) return c < 0;
  return !1;
}
function Ms(e) {
  const { x: t, y: n, z: r, w: o } = Kl(Gl(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function Ru(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function Qw(e, t, n, r) {
  const o = Ms(e[n].value);
  let a = Ms(e[n + 1].value);
  Jc(o, a) && (a = Xc(a));
  const c = t[n + 1] - t[n], f = Eo(o, a);
  let d = f;
  if (Ko(e, n)) {
    let O = Ms(e[n - 1].value);
    Jc(O, o) && (O = Xc(O)), d = Bo(t, n, Eo(o, O), f).map((R) => R * c);
  }
  let b = f;
  if (Ko(e, n + 1)) {
    let O = Ms(e[n + 2].value);
    Jc(a, O) && (O = Xc(O)), b = Bo(t, n + 1, Eo(a, o), Eo(a, O)).map((R) => R * c);
  }
  const g = dl(o, Lu(d.map((O, R) => 0.5 * (O - f[R])))), w = dl(a, Lu(f.map((O, R) => 0.5 * (O - b[R])))), [x, M, S, v] = qc(qc(o, a, r), qc(g, w, r), 2 * r * (1 - r)), { yawDeg: F, pitchDeg: $, rollDeg: K } = Uw(Ig({ x, y: M, z: S, w: v })), C = e[n].value, L = e[n + 1].value;
  return {
    yaw_deg: Ru(F, C.yaw_deg, L.yaw_deg, r),
    pitch_deg: $,
    roll_deg: Ru(K, C.roll_deg, L.roll_deg, r)
  };
}
function Ha(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function hl(e) {
  return Math.sqrt(Ha(e, e));
}
function pl(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function Fg(e, t) {
  const n = Ha(e, t), r = t.map((c, f) => c - n * e[f]), o = hl(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function Ao(e, t) {
  const n = hl(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Ns(e, t, n) {
  return Ao(e, Fg(e, t).map((r) => n * r));
}
function Zc(e, t) {
  const n = pl(e[t].value), r = pl(e[t + 1].value), o = Ha(n, r), a = o < 0 && hl(r.map((d, b) => d - o * n[b])) <= Du;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = Fg(n, r);
  const f = hl(c);
  return [c, c.map((d, b) => Math.cos(f) * d - f * Math.sin(f) * n[b]), a];
}
function ex(e, t, n, r) {
  const o = pl(e[n].value), a = pl(e[n + 1].value), [c, f, d] = Zc(e, n);
  let b = c, g = f;
  const w = t[n + 1] - t[n];
  Ko(e, n) && (b = Bo(t, n, Zc(e, n - 1)[1].map((C) => -C), b).map((C) => C * w)), Ko(e, n + 1) && (g = Bo(t, n + 1, g.map((C) => -C), Zc(e, n + 1)[0]).map((C) => C * w));
  let x, M, S;
  if (d) {
    const C = Math.PI, L = ja(0, Ha(b, c) / C / 3, C - Ha(g, f) / C / 3, C, r);
    [x, M, S] = Ao(o, c.map((O) => L * O / C));
  } else {
    const C = Ns(Ao(o, b.map((R) => R / 3)), Ao(a, g.map((R) => -R / 3)), r), L = Ns(Ao(o, b.map((R) => r * R / 3)), C, r), O = Ns(C, Ao(a, g.map((R) => -(1 - r) * R / 3)), r);
    [x, M, S] = Ns(L, O, r);
  }
  const v = Math.hypot(x, S), F = e[n].value.yaw_deg, $ = e[n + 1].value.yaw_deg;
  return { yaw_deg: v <= Yw ? F + ($ - F) * r : Ru(Math.atan2(x, S) * 180 / Math.PI, F, $, r), pitch_deg: Math.atan2(M, v) * 180 / Math.PI };
}
function tx(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = Og(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function nx(e, t, n, r) {
  return Og(e, t, e.map((o) => o.value), n, r);
}
const rx = { position: qw, rotation: Qw, direction: ex, size: tx };
function Jt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return ks(e[t].value);
  if (n <= r[0].frame + Bi) return ks(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - Bi) return ks(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + Bi; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= Bi || c.easing === "hold") return ks(c.value);
  const f = r.map((b) => b.frame), d = Xw(c.easing, (n - f[a]) / (f[a + 1] - f[a]));
  return (rx[t] ?? nx)(r, f, a, d);
}
function $u(e) {
  return Math.min(179, Math.max(0.1, e));
}
function ix(e) {
  return Math.min(1, Math.max(0, e));
}
function Tg(e) {
  return Math.max(1e-6, e);
}
function Dg(e, t) {
  return t - (e.start - e.in);
}
function _i(e, t) {
  return t >= e.start - Bi && (e.duration === null || t < e.start + e.duration - Bi);
}
function ox(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = Dg(o.clip, n);
  return {
    frame: n,
    camera: {
      position: Jt(r, "position", n),
      ...Jt(r, "rotation", n),
      hFOV_deg: $u(Jt(r, "fov", n)),
      aspect: r.aspect
    },
    scene: {
      active: _i(o.clip, n),
      clip_frame: a,
      position: Jt(o, "position", a),
      ...Jt(o, "rotation", a),
      scale: Tg(Jt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => Bl(c, n))
  };
}
function ax(e, t) {
  if (e.placement === "world")
    return {
      position: Jt(e, "position", t),
      ...Jt(e, "rotation", t),
      scale: Tg(Jt(e, "scale", t))
    };
  const n = Jt(e, "size", t);
  return {
    ...Jt(e, "direction", t),
    roll_deg: Jt(e, "roll", t),
    hFOV_deg: $u(n.hFOV_deg),
    vFOV_deg: $u(n.vFOV_deg)
  };
}
function Bl(e, t) {
  const n = Dg(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && _i(e.clip, t),
    clip_frame: n,
    ...ax(e, n),
    opacity: ix(Jt(e, "opacity", n))
  };
}
const sx = 2, lx = ["sky", "world"], cx = ["input", "output", "temp"], Lg = [0.42, 0, 0.58, 1];
function tn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Gt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function ml(e, t) {
  const n = Gt(e, t);
  return n !== null && n > 0 ? n : t;
}
function nr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Zi(e) {
  const t = Gt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function _p(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Rg(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Gt(n, null));
  return t.includes(null) ? null : t;
}
function $g(e) {
  return Rg(e) || [0, 0, 0];
}
function Vg(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Gt(t.yaw_deg, 0),
    pitch_deg: nr(Gt(t.pitch_deg, 0), -90, 90),
    roll_deg: Gt(t.roll_deg, 0)
  };
}
function ux(e) {
  return nr(Gt(e, 90), 0.1, 179);
}
function fx(e) {
  return ml(e, 1);
}
function dx(e) {
  const t = tn(e) ? e : {};
  return {
    yaw_deg: Gt(t.yaw_deg, 0),
    pitch_deg: nr(Gt(t.pitch_deg, 0), -90, 90)
  };
}
function hx(e) {
  return Gt(e, 0);
}
function px(e) {
  const t = tn(e) ? e : {};
  return {
    hFOV_deg: nr(Gt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: nr(Gt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function zg(e) {
  return nr(Gt(e, 1), 0, 1);
}
const Ff = [["position", $g], ["rotation", Vg], ["fov", ux]], Wl = [["position", $g], ["rotation", Vg], ["scale", fx]], Tf = [["direction", dx], ["roll", hx], ["size", px], ["opacity", zg]], Df = [...Wl, ["opacity", zg]];
function mx(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Gt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...Lg];
}
function gx(e) {
  if (!tn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Rg(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function yx(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!tn(o)) continue;
    const a = Zi(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: mx(o.easing) }, f = n ? gx(o.handles) : null;
    f && (c.handles = f), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function Vu(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = tn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: yx(a.keyframes, o, r === "position") };
  }
  return n;
}
function jg(e) {
  const t = tn(e) ? e : {}, n = Zi(t.start), r = Zi(t.in), o = Zi(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function bx(e) {
  const t = tn(e) ? e : {}, n = nr(Gt(t.x0, 0), 0, 1), r = nr(Gt(t.y0, 0), 0, 1), o = nr(Gt(t.x1, 1), 0, 1), a = nr(Gt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function vx(e) {
  if (!tn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: cx.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function _x(e) {
  const t = vx(e.source);
  if (!t) return null;
  const n = lx.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: jg(e.clip),
    visible: _p(e.visible, !0),
    locked: _p(e.locked, !1),
    crop: bx(e.crop),
    ...Vu(e, r ? Df : Tf)
  };
  return r || (o.z_index = Zi(e.z_index) ?? 0), o;
}
function wx(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = tn(a) ? _x(a) : null;
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
function gl(e) {
  const t = tn(e.timeline) ? e.timeline : {}, n = tn(e.camera) ? e.camera : {}, r = tn(e.scene) ? e.scene : {}, o = Zi(t.length);
  return {
    version: sx,
    timeline: {
      fps: ml(t.fps, 24),
      length: o !== null && o >= 1 ? o : null
    },
    camera: { aspect: ml(n.aspect, 1), ...Vu(n, Ff) },
    scene: { clip: jg(r.clip), ...Vu(r, Wl) },
    stickers: wx(e.stickers),
    painting: Ro(e.painting),
    painting_layer: tn(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function xx(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!tn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function Sx(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!tn(t)) return {};
  const n = nr(Gt(t.hFOV_deg, 90), 1, 179), r = nr(Gt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function kx(e) {
  const t = tn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(tn) : [];
  return n.sort((r, o) => Gt(r.z_index, 0) - Gt(o.z_index, 0)), gl({
    camera: Sx(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: xx(r, t),
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
function Wo(e) {
  if (e == null || typeof e == "string" && !e.trim()) return gl({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!tn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? kx(t) : gl(t);
}
function Qc(e, t, n, r, o) {
  const a = {};
  for (const [c] of t)
    a[c] = {
      value: e[c].value,
      keyframes: e[c].keyframes.map((f) => ({ ...f, frame: n(r + f.frame) - o }))
    };
  return a;
}
function wp(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function Hg(e, t) {
  if (ml(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (c) => Zi(c * n), { length: o } = e.timeline, a = wp(e.scene.clip, r);
  return gl({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: { aspect: e.camera.aspect, ...Qc(e.camera, Ff, r, 0, 0) },
    scene: { clip: a.clip, ...Qc(e.scene, Wl, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((c) => {
      const { clip: f, anchor: d, newAnchor: b } = wp(c.clip, r), g = c.placement === "world" ? Df : Tf;
      return { ...c, clip: f, ...Qc(c, g, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function eu(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Gg(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Lf(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= Bi);
}
function Kg(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? Gg(e.keyframes[r - 1].easing) : [...Lg];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function Qi(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = eu(o.value, r);
    return;
  }
  const a = Lf(o, n);
  a ? a.value = eu(a.value, r) : Kg(o, n, eu(Jt(e, t, n), r));
}
function no(e) {
  return e.placement === "world" ? Df.map(([t]) => t) : e.placement === "sky" ? Tf.map(([t]) => t) : (e.clip ? Wl : Ff).map(([t]) => t);
}
function Mx(e, t) {
  for (const n of no(e))
    Lf(e[n], t) || Kg(e[n], t, Jt(e, n, t));
}
function Nx(e) {
  const t = no(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function Px(e, t) {
  return no(e).every((n) => !!Lf(e[n], t));
}
function Ax(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const f = Jt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = f);
  }
}
function Cx(e, t, n, r, o) {
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
function Bg(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function Ix(e, t, n) {
  const r = Bg(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function Ex(e, t, n, r) {
  for (const o of Bg(e, t, n)) o.easing = Gg(r);
}
function Ox(e, t) {
  e.start = Math.max(0, e.start + t);
}
function Fx(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function Tx(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function xp(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function zu(e) {
  return no(e).map((t) => e[t]);
}
function ju(e) {
  return [e.camera, e.scene, ...e.stickers].some((t) => zu(t).some((n) => n.keyframes.length > 0)) || !xp(e.scene.clip) || e.stickers.some((t) => !xp(t.clip));
}
function Wg(e, { minimum: t, frames: n = 0, openClip: r = null }) {
  let o = e.timeline.length ?? Math.max(t, n);
  for (const a of zu(e.camera))
    for (const c of a.keyframes) o = Math.max(o, c.frame + 1);
  for (const a of [e.scene, ...e.stickers]) {
    const { clip: c } = a;
    o = Math.max(o, c.duration === null || c === r ? c.start + 1 : c.start + c.duration);
    for (const f of zu(a))
      for (const d of f.keyframes) o = Math.max(o, c.start - c.in + d.frame + 1);
  }
  return o;
}
function Dx(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let Ps = { text: null, parsed: null };
function Gn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function yl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function Lx({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Gn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: Ro(null),
    painting_layer: null,
    ui_settings: yl(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Ug(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function Rx(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function $x(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Vx(e) {
  return Array.isArray(e) ? e.map((t) => Mg(t)) : [];
}
function zx(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function Yg(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = Lx(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (Ps.text === o ? a = Ps.parsed : (a = JSON.parse(o), Ps = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, f = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Rx(a.assets),
      stickers: $x(a.stickers),
      shots: Vx(a.shots),
      painting: Ro(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: yl(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (f.ui_settings = yl({ ...f.ui_settings, ...c })), f.output_preset = Ug(
      n.outputPreset,
      Number(f.output_preset || r.output_preset)
    ), f.bg_color = String(n.backgroundColor || f.bg_color || r.bg_color), f.coverage = Gn(n.coverage), delete f.editor_history, f;
  } catch {
    return Ps = { text: o, parsed: null }, r;
  }
}
function Sp(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function jx(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function Hx(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function Xg(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c, fps: f = null } = t;
  let d;
  try {
    d = Wo(e);
  } catch {
    d = Wo(null);
  }
  return f && f !== d.timeline.fps && (d = Hg(d, f)), {
    ...d,
    coverage: Gn(o),
    bg_color: r,
    output_preset: Ug(n),
    ui_settings: yl(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function Gx(e, t) {
  const n = Hg(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, c] of o)
    if (c) {
      a.clip && (a.clip = c.clip);
      for (const f of no(a)) a[f].keyframes = c[f].keyframes;
    }
}
function Rf(e, t) {
  const n = Bl(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const Kx = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function kp(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function Bx(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[Kx[n]].keyframes.length));
}
function qg(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = kp(n, ["yaw_deg", "pitch_deg"]), a = kp(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && Qi(e, "direction", r, o), n.rot_deg !== void 0 && Qi(e, "roll", r, n.rot_deg), Object.keys(a).length && Qi(e, "size", r, a);
}
const Jg = ["position_x", "position_y", "position_z"];
function Wx(e, t) {
  const n = Jt(e, "position", t), r = Jt(e, "rotation", t);
  return {
    ...Object.fromEntries(Jg.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Jt(e, "fov", t)
  };
}
function Ux(e, t, n, r) {
  const o = Jg.indexOf(n);
  if (o >= 0) {
    const a = Jt(e, "position", t);
    a[o] = r, Qi(e, "position", t, a);
  } else n === "hFOV_deg" ? Qi(e, "fov", t, r) : Qi(e, "rotation", t, { [n]: r });
}
function Yx(e, t, n) {
  Qi(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function Bs(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Zg(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function $f(e, t, n, r) {
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
function Xx(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Bt(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function Qg(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function e0(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function t0(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function n0(e, t) {
  return JSON.stringify(e != null && e.__panoSceneStateV2 ? Wo(t) : t);
}
function r0(e, t, n) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    return JSON.stringify(Wo(n)) === t;
  } catch {
    return !1;
  }
}
const Mp = 2048, i0 = 0.28;
function o0(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * an);
  return {
    quaternion: Kl(Gl(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * Pn,
    aspect: r
  };
}
function Ws(e) {
  const t = oi(e);
  return {
    quaternion: Kl(Gl(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function qx(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = Of(n, r), c = t.x + t.w * 0.5, f = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: f - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * Pn,
      vFOV_deg: 2 * Math.atan(a / r) * Pn
    }
  };
}
function a0(e, t, n) {
  const [[r, o, a], [c, f, d], [b, g, w]] = Ig(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * an), M = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(S, v = 1e-4) {
      const F = Ww(S), $ = r * F.x + c * F.y + b * F.z, K = o * F.x + f * F.y + g * F.z, C = -(a * F.x + d * F.y + w * F.z), L = Math.max(C, v);
      return {
        x: t * 0.5 * (1 + $ / L / M),
        y: n * 0.5 * (1 - K / L / x),
        z: C
      };
    },
    // The unit direction seen at the point (x, y).
    ray(S, v) {
      const F = (S / t * 2 - 1) * M, $ = (1 - v / n * 2) * x;
      return Cf(Ks({
        x: r * F + o * $ - a,
        y: c * F + f * $ - d,
        z: b * F + g * $ - w
      }));
    }
  };
}
function Jx(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = ox(e, t), c = [];
  e.stickers.forEach((f, d) => {
    const b = a.stickers[d];
    if (f.placement !== "sky") return;
    const g = f.source.kind === "port" && !f.visible;
    if (!b.active && !g) return;
    const w = n(f);
    if (!w) return;
    const x = Math.tan(b.hFOV_deg * 0.5 * an), M = Math.tan(b.vFOV_deg * 0.5 * an), { crop: S } = f;
    c.push({
      kind: "sticker",
      id: f.id,
      media: w.media,
      revision: w.revision,
      source: w.source,
      opacity: g ? i0 : b.opacity,
      zIndex: r(f),
      quaternion: Kl(Gl(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * S.x0 - 1) * x,
        x1: (2 * S.x1 - 1) * x,
        y0: (1 - 2 * S.y1) * M,
        y1: (1 - 2 * S.y0) * M
      }
    });
  });
  for (const f of o) c.push({ kind: "erp", ...f });
  return c.sort((f, d) => f.zIndex - d.zIndex);
}
function s0(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const c of n)
    typeof (c == null ? void 0 : c.id) == "string" && c.id && !a.has(c.id) && a.set(c.id, c);
  return Jx(e, t, {
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
const tu = /* @__PURE__ */ new WeakMap();
let Zx = 1;
function Hu(e) {
  return tu.has(e) || tu.set(e, Zx++), tu.get(e);
}
function Np(e) {
  return e && typeof e == "object" ? Hu(e) : e;
}
function Pp({ background: e, layers: t }) {
  return JSON.stringify([
    e && [Hu(e.media), Np(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, Hu(n.media), Np(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function Qx({ onReady: e, onFailed: t }) {
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
  return import("./.lazy/pano_three_view-CKsO0o0A.js").then((a) => {
    r || (n = a.createThreeView(), o.ready = !0, e());
  }).catch((a) => {
    console.error("[PanoramaStickers] three.js view is unavailable", a), o.failed = !0, t();
  }), o;
}
const l0 = "3D view unavailable. Check the browser console.";
function bl(e, t, n) {
  return o0({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function eS(e) {
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
const c0 = eS(
  () => import("./.lazy/pano_three_view-CKsO0o0A.js").then((e) => e.createThreeView())
), Ni = ["erp_image", "bg_erp", "bg_media"], Vf = ["sticker_image", "sticker"], tS = {
  background: Ni,
  "external-sticker": Vf
};
function u0(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function nS(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = u0(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function rS(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function f0(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((f) => String(f == null ? void 0 : f.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((f) => (f == null ? void 0 : f.id) === c.type);
  }
}
function iS(e, t) {
  const { graph: n, entry: r } = f0(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const f = u0(o.get(c == null ? void 0 : c.link));
    f && (a[String((c == null ? void 0 : c.name) || "")] = f);
  }
  return a;
}
const d0 = [...Ni, ...Vf], oS = 256, Co = /* @__PURE__ */ new Map(), nu = /* @__PURE__ */ new WeakMap();
let h0 = () => null;
function p0(e) {
  return nu.has(e) || nu.set(e, JSON.stringify(e)), nu.get(e);
}
function aS(e) {
  h0 = e;
}
function vl(e, t) {
  const n = p0(e);
  Co.delete(n), Co.set(n, t), Co.size > oS && Co.delete(Co.keys().next().value);
}
function $n(e, t) {
  var a;
  const n = e ? h0(e) : null;
  if (!n) return !0;
  const r = nS(e);
  let o = Co.get(p0(n));
  if (o)
    vl(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((c) => d0.includes(c == null ? void 0 : c.name)))) return !0;
    vl(n, r), o = r;
  }
  return tS[t].every((c) => o[c] === r[c]);
}
const _l = /* @__PURE__ */ new WeakSet();
async function Gu(e, t) {
  if (_l.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && _l.add(e), n.ok && r !== void 0 ? r : null;
}
function m0(e, t) {
  var a, c, f, d, b;
  const n = (f = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : f.workflow, { entry: r } = f0(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((g) => d0.includes(g == null ? void 0 : g.name))) ? null : { output: o, inputs: iS(n, t) };
}
const Us = /* @__PURE__ */ new Map();
function sS(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Us.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await Gu(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = m0(o, a);
        c && vl(c.output, c.inputs);
      }
    });
}
const lS = 5;
function cS(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${lS}`, r = Gu(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, Gu(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, f) {
      var b, g, w, x;
      const d = String(c.id);
      for (const { id: M } of await r) {
        if (!f()) return null;
        const S = await a(M);
        if ((b = S == null ? void 0 : S.outputs) != null && b[d])
          return ((x = (w = (g = S.workflow) == null ? void 0 : g.prompt) == null ? void 0 : w[d]) == null ? void 0 : x.class_type) !== c.comfyClass ? null : m0(S, d);
      }
      return null;
    }
  };
}
function uS(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let _o = null;
async function fS(e, t, n) {
  var f;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || _l.has(n) || (f = Us.get(o)) != null && f.has(r) || uS(t)) return null;
  (_o == null ? void 0 : _o.workflowId) !== o && (_o = { workflowId: o, history: cS(n, o) }, queueMicrotask(() => {
    _o = null;
  }));
  const c = await _o.history.lastNodeOutput(e, a);
  return a() ? c ? (vl(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (_l.has(n) || Us.set(o, (Us.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Ap(e, t, n, r = Ni) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const Cp = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Ys(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Cp.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Cp.test(String((e == null ? void 0 : e.filename) || ""));
}
const ru = /* @__PURE__ */ new WeakMap();
function dS(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Ku(e) {
  return dS(e) ? (ru.has(e) || ru.set(e, Math.random().toString(36).slice(2, 10)), ru.get(e)) : "run";
}
function g0(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function hS(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const f of c) {
      const d = n(a, f);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, g) => g)));
    }
  };
  return o(e, t), r;
}
function zf(e, t = [], n = null) {
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
function pS({
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
  const S = () => {
    M = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), f || r.addEventListener("timeupdate", g), r.addEventListener("play", w), r.addEventListener("pause", x), r.addEventListener("error", S), r.src = t, r.load(), { video: r, destroy: () => {
    var $, K;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", g), r.removeEventListener("play", w), r.removeEventListener("pause", x), r.removeEventListener("error", S), r.pause(), ($ = r.removeAttribute) == null || $.call(r, "src"), (K = r.load) == null || K.call(r));
  }, failed: () => M };
}
function Li(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function mS(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Ip(e, t, n = null) {
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
  return !r && n != null && (r = mS(e == null ? void 0 : e.graph, n)), r;
}
function gS(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function yS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function bS(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function y0({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (O) => {
    if (!O) return "";
    if (typeof O == "string") return String(O || "").trim();
    if (Array.isArray(O)) {
      if (O.length === 0) return "";
      if (O.length === 1) return o(O[0]);
      const R = String(O[0] || "").trim();
      if (R)
        return Li(t, {
          filename: R,
          subfolder: String(O[1] || "").trim(),
          type: String(O[2] || "output").trim() || "output"
        });
      for (const H of O) {
        const Q = o(H);
        if (Q) return Q;
      }
      return "";
    }
    return typeof (O == null ? void 0 : O.src) == "string" && O.src ? O.src : typeof (O == null ? void 0 : O.url) == "string" && O.url ? O.url : Li(t, O);
  }, a = (O) => {
    if (!O || typeof O != "object") return "";
    const R = String(O.type || "").trim().toLowerCase();
    if (R === "dataurl") return String(O.value || "");
    if (R !== "comfy_image") return "";
    const H = String(O.filename || "").trim();
    return H ? Li(t, {
      filename: H,
      subfolder: String(O.subfolder || ""),
      type: String(O.storage || "input")
    }) : "";
  }, c = (O) => {
    const R = e == null ? void 0 : e.nodeOutputs;
    if (!R || O == null) return null;
    const H = String(O);
    return R instanceof Map ? R.get(O) || R.get(H) || R.get(Number(H)) || null : R[O] || R[H] || null;
  }, f = (O, R) => {
    var Q;
    const H = c(O == null ? void 0 : O.id);
    return Array.isArray((Q = H == null ? void 0 : H.ui) == null ? void 0 : Q[R]) ? H.ui[R] : Array.isArray(H == null ? void 0 : H[R]) ? H[R] : [];
  }, d = (O, R) => {
    const H = c(O == null ? void 0 : O.id);
    return H != null && H.ui && Object.prototype.hasOwnProperty.call(H.ui, R) ? H.ui[R] : H && Object.prototype.hasOwnProperty.call(H, R) ? H[R] : null;
  }, b = (O, R) => {
    const H = d(O, "pano_sticker_input_state_hash"), Q = Array.isArray(H) ? H[0] : H;
    return String(Q ?? "").trim() || bS(R);
  }, g = (O) => {
    const R = [], H = /* @__PURE__ */ new Set();
    for (const Q of O || []) {
      const _e = o(Q);
      !_e || H.has(_e) || (H.add(_e), R.push(_e));
    }
    return R;
  }, w = (O, R) => {
    var _e;
    const H = [];
    Array.isArray(O == null ? void 0 : O.images) && O.images.length && H.push(O.images), Array.isArray((_e = O == null ? void 0 : O.ui) == null ? void 0 : _e.images) && O.ui.images.length && H.push(O.ui.images);
    const Q = [];
    for (const T of H)
      R >= 0 && R < T.length && Q.push(T[R]), Q.push(...T);
    return Q;
  }, x = (O, R) => {
    var ee;
    const H = String(R || "").trim();
    if (!H) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : []).findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === H);
    if (_e < 0) return { src: "", sourceType: "", inputName: H };
    const T = O.graph ? O.getInputLink(_e) : null;
    if ((T == null ? void 0 : T.origin_id) == null) return { src: "", sourceType: "", inputName: H };
    const E = T.origin_id, se = Ip(O, _e, E);
    if (!se) return { src: "", sourceType: "", inputName: H };
    const le = Number(T.origin_slot ?? 0);
    let ue = [];
    try {
      ue = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(se) || [] : [];
    } catch {
      ue = [];
    }
    if (Array.isArray(ue) && ue.length) {
      const Y = [];
      le >= 0 && le < ue.length && Y.push(ue[le]), Y.push(...ue);
      const Ie = g(Y.filter((Fe) => !Ys(Fe)));
      if (Ie.length)
        return { src: Ie[0], srcCandidates: Ie, sourceType: "appNodeImageUrls", inputName: H };
    }
    const U = c((se == null ? void 0 : se.id) ?? E), X = g(w(U, le).filter((Y) => !Ys(Y))).map((Y) => `${Y}&pano_src=${Ku(U)}`);
    if (X.length)
      return { src: X[0], srcCandidates: X, sourceType: "nodeOutputs", inputName: H };
    const j = Array.isArray(se == null ? void 0 : se.imgs) ? se.imgs : [];
    if (j.length) {
      const Y = [];
      le >= 0 && le < j.length && Y.push(j[le]), Y.push(...j);
      const Ie = g(Y);
      if (Ie.length)
        return { src: Ie[0], srcCandidates: Ie, sourceType: "nodeImgs", inputName: H };
    }
    const P = (ee = se == null ? void 0 : se.widgets) == null ? void 0 : ee.find((Y) => String((Y == null ? void 0 : Y.name) || "").toLowerCase() === "image");
    if (P) {
      let Y = o(P.value);
      if (Y && !Y.includes("/") && !Y.includes(":") && (se.comfyClass === "LoadImage" || se.type === "LoadImage") && (Y = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Y)}&type=input&subfolder=`), Y) return { src: Y, sourceType: "widget", inputName: H };
    }
    return { src: "", sourceType: "", inputName: H };
  }, M = (O, R = []) => {
    var Q;
    const H = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs : [];
    for (const _e of R) {
      const T = H.findIndex((ue) => String((ue == null ? void 0 : ue.name) || "") === _e), E = T >= 0 && O.graph ? O.getInputLink(T) : null;
      if ((E == null ? void 0 : E.origin_id) == null) continue;
      const se = c(((Q = Ip(O, T, E.origin_id)) == null ? void 0 : Q.id) ?? E.origin_id), le = (Array.isArray(se == null ? void 0 : se.images) ? se.images : []).find(Ys);
      return le ? `${Li(t, le)}&pano_src=${Ku(se)}` : "";
    }
    return "";
  }, S = (O, R = []) => {
    const H = Array.isArray(R) ? R : [R];
    for (const Q of H) {
      const _e = x(O, Q);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, v = (O) => {
    const R = String(O || "").trim();
    if (!R) return [];
    if (gS(R)) return [R];
    const { filename: H, subfolder: Q } = yS(R);
    return H ? g([
      Li(t, { filename: H, subfolder: Q, type: "temp" }),
      Li(t, { filename: H, subfolder: Q, type: "output" }),
      Li(t, { filename: H, subfolder: Q, type: "input" }),
      R
    ]) : [R];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (O) => {
      var R, H;
      try {
        (H = (R = O == null ? void 0 : O.__panoLinkedInputImageCache) == null ? void 0 : R.forEach) == null || H.call(R, (Q, _e, T) => {
          var E;
          Q != null && Q.img && ((E = r == null ? void 0 : r.isImageLoadFailed) != null && E.call(r, Q.img)) && T.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (O, R) => {
      var H;
      (H = O == null ? void 0 : O.delete) == null || H.call(O, `__ui__${String(R || "")}`);
    },
    linkedValue: (O, R) => {
      var E, se, le, ue;
      const H = String(R || ""), Q = Array.isArray(O == null ? void 0 : O.inputs) ? O.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === H) : -1, _e = Q >= 0 && O.graph ? O.getInputLink(Q) : null;
      if (_e) {
        const U = c(_e.origin_id), X = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (E = U == null ? void 0 : U.data) == null ? void 0 : E.output,
          (se = U == null ? void 0 : U.data) == null ? void 0 : se.result,
          (le = U == null ? void 0 : U.ui) == null ? void 0 : le.output,
          (ue = U == null ? void 0 : U.ui) == null ? void 0 : ue.result
        ];
        for (const j of X) {
          if (!Array.isArray(j)) continue;
          const P = j[Number(_e.origin_slot || 0)];
          if (typeof P == "string" && P.trim()) return P;
        }
      }
      const T = Array.isArray(O == null ? void 0 : O.widgets) ? O.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === H) : null;
      return String((T == null ? void 0 : T.value) || "");
    },
    linkedVideoFile: M,
    loadPreferredExactLinkedImage: (O, R = [], H = null, Q = "") => {
      var St;
      const _e = Array.isArray(R) ? R : [R], T = S(O, _e), se = (Array.isArray(T == null ? void 0 : T.srcCandidates) && T.srcCandidates.length ? T.srcCandidates : [T == null ? void 0 : T.src]).map((pt) => String(pt || "").trim()).filter(Boolean);
      if (!se.length) return null;
      const le = g(se.flatMap((pt) => v(pt)));
      if (!le.length) return null;
      O.__panoLinkedInputImageCache || (O.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const ue = String(Q || _e.join("|") || "image_exact"), U = se.join(`
`), X = O.__panoLinkedInputImageCache.get(ue);
      if (X && X.srcRaw === U && X.img) return X.img;
      const j = n || globalThis.Image;
      if (typeof j != "function") return null;
      const P = new j();
      (St = r == null ? void 0 : r.markImageLoading) == null || St.call(r, P, U);
      const ee = { srcRaw: U, resolvedSrc: "", img: P };
      O.__panoLinkedInputImageCache.set(ue, ee);
      let Y = -1;
      const Ie = (pt) => {
        var sn, it, Yn;
        pt === "ready" ? (sn = r == null ? void 0 : r.markImageReady) == null || sn.call(r, P, U) : (it = r == null ? void 0 : r.markImageFailed) == null || it.call(r, P, U), H == null || H(P), (Yn = O.setDirtyCanvas) == null || Yn.call(O, !0, !0);
      }, Fe = () => {
        if (Y += 1, Y >= le.length) {
          Ie("failed");
          return;
        }
        ee.resolvedSrc = le[Y], P.src = ee.resolvedSrc;
      };
      return P.onload = () => Ie("ready"), P.onerror = () => {
        if (Y + 1 < le.length) {
          Fe();
          return;
        }
        Ie("failed");
      }, Fe(), P;
    },
    output: c,
    resolvePreferredExactLinkedSource: S,
    source: o,
    uiImage: (O, R, H, Q = null) => {
      var U, X, j;
      const _e = f(O, R)[0] || null, T = o(_e);
      if (!T) return null;
      const E = `__ui__${R}`, se = (U = H == null ? void 0 : H.get) == null ? void 0 : U.call(H, E);
      if (se && se.__panoSrc === T) return se;
      const le = n || globalThis.Image;
      if (typeof le != "function") return null;
      const ue = new le();
      return ue.__panoSrc = T, (X = r == null ? void 0 : r.markImageLoading) == null || X.call(r, ue, T), ue.onload = () => {
        var P;
        (P = r == null ? void 0 : r.markImageReady) == null || P.call(r, ue, T), Q == null || Q(ue);
      }, ue.onerror = () => {
        var P;
        (P = r == null ? void 0 : r.markImageFailed) == null || P.call(r, ue, T), Q == null || Q(ue);
      }, ue.src = T, (j = H == null ? void 0 : H.set) == null || j.call(H, E, ue), ue;
    },
    uiList: f,
    uiValue: d
  };
}
const vS = 1e-3;
function b0(e, t, n, r) {
  if (!_i(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const c = Math.floor(o + 0.5);
    return c >= 0 && c < r.frames ? (c + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(vS / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function v0(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function _S(e, t) {
  return Math.floor(e * t.fps);
}
function _0(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Ep = 4;
function w0({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(c) {
    return r.has(c) || r.set(c, e(n[c], t)), r.get(c);
  }
  return {
    picture(c, f, d, b) {
      if ((c.length !== n.length || c.some((x, M) => x !== n[M])) && (n = c, r.clear(), o = null), f === null) return null;
      const g = _S(f, d);
      for (let x = g; x < Math.min(n.length, g + Ep + 1); x += 1) a(x);
      for (const x of r.keys())
        (x < g || x > g + Ep) && x !== o && r.delete(x);
      const w = r.get(g);
      return w != null && w.complete && w.naturalWidth > 0 && (o !== null && o !== g && r.delete(o), o = g), o === null ? b : r.get(o);
    }
  };
}
function x0({
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
const Xs = "sticker_image_1", S0 = "external_image", Uo = 0;
function $o(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function iu(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function ki(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Bu(e, t = Uo) {
  return (e == null ? void 0 : e.version) !== 2 ? ki(e) : ki(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: Bl(n, t).active,
    external: n.source.kind === "port",
    ...Rf(n, t)
  }));
}
function jf(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && ki(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function k0(e) {
  return String((e == null ? void 0 : e.id) || "") === Xs || String((e == null ? void 0 : e.source_kind) || "") === S0;
}
function Hf(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : k0(t);
}
const M0 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function N0(e) {
  return !k0(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(M0.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function P0(e) {
  const t = N0(e);
  return t ? M0.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function A0(e, t = {}) {
  var L, O, R;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((H) => String((H == null ? void 0 : H.id) || "") === Xs);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const H = String(((L = e.active) == null ? void 0 : L.selected_sticker_id) || "") === Xs;
    return {
      state: {
        ...e,
        stickers: n.filter((Q, _e) => _e !== r),
        active: H ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, f = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), g = d > 0 && b > 0, w = Math.max(1, d), x = Math.max(1, b), M = t.pose && typeof t.pose == "object" ? t.pose : {}, S = f ? M.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || M.hFOV_deg || 30, v = Math.min(179, Math.max(0.1, Number(S)));
  if (!f) {
    if (!g) return { state: e, changed: !1 };
    const H = $o(v, w, x), Q = Number(((O = c == null ? void 0 : c.initial_pose) == null ? void 0 : O.hFOV_deg) ?? v), _e = $o(Q, w, x), T = Number(((R = c == null ? void 0 : c.initial_pose) == null ? void 0 : R.vFOV_deg) ?? _e);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - H) <= 1e-6 && Math.abs(T - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((E, se) => se === r ? {
          ...E,
          vFOV_deg: H,
          initial_pose: E.initial_pose && typeof E.initial_pose == "object" ? { ...E.initial_pose, vFOV_deg: _e } : E.initial_pose
        } : E)
      },
      changed: !0
    };
  }
  const F = n.reduce((H, Q) => Math.max(H, Number((Q == null ? void 0 : Q.z_index) || 0)), -1), $ = {
    yaw_deg: Number(M.yaw_deg || 0),
    pitch_deg: Number(M.pitch_deg || 0),
    hFOV_deg: v,
    vFOV_deg: g ? $o(v, w, x) : Number(M.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || v),
    rot_deg: Number(M.rot_deg ?? M.roll_deg ?? 0)
  }, K = {
    ...c || {},
    id: Xs,
    source_kind: S0,
    source_link_id: o,
    source_state_hash: a,
    ...$,
    initial_pose: { ...$ },
    visible: !0,
    z_index: F + 1
  }, C = r >= 0 ? n.map((H, Q) => Q === r ? K : H) : [...n, K];
  return { state: { ...e, stickers: C }, changed: !0 };
}
function Op(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
function C0(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Op(e, "sticker"),
    awaitingPose: !t && Op(e, "sticker_state"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function I0(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var v;
  const c = e.stickers.findIndex((F) => Hf(e, F)), f = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!f) return { state: e, changed: !1 };
    const F = ((v = e.active) == null ? void 0 : v.selected_sticker_id) === f.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter(($, K) => K !== c),
        active: F ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (f) {
    if (!d) return { state: e, changed: !1 };
    const F = [f.size.value, ...f.size.keyframes.map((C) => C.value)], $ = F.map((C) => $o(C.hFOV_deg, o, a));
    if (F.every((C, L) => Math.abs(C.vFOV_deg - $[L]) <= 1e-6)) return { state: e, changed: !1 };
    const K = {
      value: { ...f.size.value, vFOV_deg: $[0] },
      keyframes: f.size.keyframes.map((C, L) => ({ ...C, value: { ...C.value, vFOV_deg: $[L + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((C, L) => L === c ? { ...C, size: K } : C) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((F) => F.id));
  let g = 1;
  for (; b.has(`sticker_${g}`); ) g += 1;
  const w = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = (F) => d ? $o(F, o, a) : F, M = $f(`sticker_${g}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: w,
    vFOV_deg: x(w)
  }, ki(e).reduce((F, $) => Math.max(F, $.z_index), -1) + 1), S = (r == null ? void 0 : r.keyframes) ?? {};
  return M.direction.keyframes = S.direction ?? [], M.roll.keyframes = S.roll ?? [], M.size.keyframes = (S.size ?? []).map((F) => ({ ...F, value: { ...F.value, vFOV_deg: x(F.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, M] }, changed: !0 };
}
function Gf(e) {
  const t = ki(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: iu(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: iu(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: iu(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function E0(e) {
  const t = jf(e), n = Hf(e, t), r = ki(e).some((f) => f && f.visible !== !1), o = Gf(e), a = t ? o.findIndex((f) => f.type === "sticker" && f.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: P0(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function wS(e) {
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
function Fp(e, t) {
  const n = jf(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = wS(e), o = String(n.id || ""), a = Gf(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [f] = a.splice(c, 1);
  return t === "front" ? a.push(f) : a.unshift(f), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function xS(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function SS(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return A0(e, t.value);
  if (t.type === "sync-port") return I0(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = Gf(e).reduce((x, M) => Math.max(x, Number(M.z_index || 0)), -1), b = 30, g = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: $o(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, $f(a, Bs(o.asset), g, d + 1)],
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
    return !o || !ki(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = jf(e);
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
    const o = N0(n);
    return !o || !P0(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Fp(e, "front");
  if (t.type === "send-back") return Fp(e, "back");
  if (t.type === "delete-selected") {
    if (Hf(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = ki({ ...e, stickers: o })[0], c = (a == null ? void 0 : a.id) == null ? null : String(a.id), f = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return e.version !== 2 && (f.assets = xS(f)), { state: f, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? Rf(n, Uo) : n, f = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(c[d] || 0)) > 1e-12 && (f[d] = b);
    }), !Object.keys(f).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = Bx(n, f);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return qg(b, Uo, d), { state: { ...e, stickers: e.stickers.map((g) => g === n ? b : g) }, changed: !0 };
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
function kS(e = {}) {
  return x0({
    ...e,
    reduce: SS,
    projectModel: E0
  });
}
const Wu = 2;
function ji(e, t) {
  return Math.floor(e * t + 0.5);
}
function MS(e, t) {
  return Math.floor(e * t + 1e-3);
}
function O0({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: c, onChange: f }) {
  let d = 0, b = !1, g = !1, w = { name: "idle" }, x = [];
  const M = () => b && !g, S = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function v() {
    for (const ee of x) ee();
    x = [];
  }
  function F(ee, Y = {}) {
    return v(), w = { name: ee, ...Y }, f(), w;
  }
  function $(ee, Y, Ie) {
    const Fe = () => {
      w === ee && Ie();
    };
    e.addEventListener(Y, Fe), x.push(() => e.removeEventListener(Y, Fe));
  }
  function K(ee, Y) {
    let Ie = t.requestFrame(function Fe(St) {
      w === ee && (Y(St), w === ee && (Ie = t.requestFrame(Fe)));
    });
    x.push(() => t.cancelFrame(Ie));
  }
  function C(ee) {
    d = ee, a(d);
  }
  function L() {
    return F(g ? "error" : "idle");
  }
  function O() {
    g = !0, L();
  }
  function R() {
    const { seekable: ee } = e, Y = ee != null && ee.length ? ee.end(ee.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Y) ? Y : 1 / 0));
  }
  function H(ee) {
    if (!M()) return ee === "play" ? se() : L();
    if (e.readyState < Wu) {
      const Y = F("loading", { then: ee });
      return $(Y, "loadeddata", () => H(Y.then)), $(Y, "error", O), Y;
    }
    return ee === "play" && d / n() >= Number(e.duration) ? se() : Q(ee, !1);
  }
  function Q(ee, Y) {
    const Ie = R();
    if (!e.ended && ji(Number(e.currentTime), n()) === ji(Ie, n())) return _e(ee);
    const Fe = F("seeking", { then: ee, frame: d, retried: Y });
    return $(Fe, "seeked", () => {
      const St = ji(Number(e.currentTime), n()) === ji(R(), n()), pt = d === Fe.frame;
      St || pt && Fe.retried ? _e(Fe.then) : Q(Fe.then, pt);
    }), $(Fe, "error", O), e.currentTime = Ie, Fe;
  }
  function _e(ee) {
    return ee === "play" ? T() : (c(), L());
  }
  function T() {
    const ee = F("playingVideo", { shown: !1 });
    if ($(ee, "pause", () => e.ended ? E() : U()), $(ee, "ended", E), $(ee, "error", O), o() && ji(Number(e.duration), n()) >= r()) {
      const Ie = e.loop;
      e.loop = !0, x.push(() => {
        e.loop = Ie;
      });
    }
    const Y = (Ie, Fe) => {
      Fe && !ee.shown && (ee.shown = !0, f()), le(ji(Ie, n()));
    };
    if (S()) {
      let Ie = e.requestVideoFrameCallback(function Fe(St, pt) {
        w === ee && (Y(Number(pt.mediaTime), !0), w === ee && (Ie = e.requestVideoFrameCallback(Fe)));
      });
      x.push(() => {
        var Fe;
        return (Fe = e.cancelVideoFrameCallback) == null ? void 0 : Fe.call(e, Ie);
      });
    } else
      K(ee, () => Y(Number(e.currentTime), e.readyState >= Wu));
    return Promise.resolve(e.play()).catch(() => {
      w === ee && U();
    }), ee;
  }
  function E() {
    c(), se();
  }
  function se() {
    const ee = F("playingClock", { startTs: t.now(), startFrame: d });
    return K(ee, (Y) => le(ee.startFrame + Math.floor((Y - ee.startTs) / 1e3 * n()))), ee;
  }
  function le(ee) {
    if (ee < r()) {
      C(ee);
      return;
    }
    if (!o()) {
      ue(r() - 1);
      return;
    }
    w.name === "playingVideo" && (v(), e.pause()), C(0), H("play");
  }
  function ue(ee) {
    w.name === "playingVideo" ? (v(), e.pause(), C(Math.max(0, ee)), c()) : C(Math.max(0, ee)), H("still");
  }
  function U() {
    if (w.name === "loading" || w.name === "seeking")
      w.then = "still", f();
    else if (w.name === "playingVideo") {
      v(), e.pause();
      const ee = MS(Number(e.currentTime), n());
      C(Math.min(ee, r() - 1)), c(), d === ee ? L() : H("still");
    } else w.name === "playingClock" && ue(Math.min(d, r() - 1));
  }
  function X() {
    if (!P()) {
      if (d >= r() - 1 && C(0), w.name === "loading" || w.name === "seeking") {
        w.then = "play", f();
        return;
      }
      H("play");
    }
  }
  function j(ee) {
    const Y = Math.max(0, Math.round(ee));
    if (w.name === "loading" || w.name === "seeking") {
      w.then = "still", C(Y), f();
      return;
    }
    w.name === "playingVideo" && (v(), e.pause()), C(Y), H("still");
  }
  function P() {
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
      return P();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return w.name === "playingVideo" || w.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return w.name === "playingVideo" && w.shown;
    },
    play: X,
    stop: U,
    seek: j,
    toggle() {
      P() ? U() : X();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(ee) {
      v(), b = !!ee, g = !1, H("still");
    },
    dispose() {
      v(), b = !1, w = { name: "idle" };
    }
  };
}
function F0({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, c = null, f = null, d = !1;
  function b(v) {
    f = v, t();
  }
  function g(v) {
    c = v, e.currentTime = v;
  }
  function w() {
    const v = d;
    x(), d !== v && n();
  }
  function x() {
    if (!r || o || e.readyState < Wu) return;
    const { time: v, playing: F, fps: $ } = a;
    if (v === null) {
      e.pause(), d = !1;
      return;
    }
    if (F) {
      if (c !== null) return;
      const K = Number(e.duration), C = Number.isFinite(K) ? Math.min(v, K) : v, L = Math.abs(Number(e.currentTime) - C) > 1.5 / $;
      if (e.ended && !L) return;
      L && g(C), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(c !== null || f === v) && (Number(e.currentTime) === v ? b(v) : g(v));
  }
  const M = {
    loadeddata: w,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: w,
    seeked: () => {
      const v = c;
      c = null, !a.playing && v === a.time ? b(v) : w();
    },
    playing: () => {
      !a.playing || d || (d = !0, n());
    },
    error: () => {
      r && (o = !0, n());
    }
  };
  e.muted = !0;
  for (const [v, F] of Object.entries(M)) e.addEventListener(v, F);
  function S(v) {
    r = v, o = !1, c = null, f = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: v = "", time: F = null, playing: $ = !1, fps: K }) {
      v !== r && (S(v), n()), a = { time: F, playing: $, fps: K }, w();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(v, F) {
      return !r || o ? F : a.time === null ? null : a.playing && d ? e : f === null ? F : v;
    },
    dispose() {
      for (const [v, F] of Object.entries(M)) e.removeEventListener(v, F);
      S("");
    }
  };
}
function NS(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function PS({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: c, onStickerCapture: f, onChange: d }) {
  let b = "", g = "", w = 0;
  const x = /* @__PURE__ */ new Set();
  let M = null, S = null;
  const v = () => o().timeline.fps, F = (T) => T.stickers.find((E) => E.source.kind === "port"), $ = () => {
    const T = o(), E = F(T);
    return Wg(T, {
      minimum: Math.round(v() * 5),
      frames: Math.max(
        b ? Math.round(w * v()) : 0,
        M && E ? v0(E.clip, v(), M.meta) : 0
      )
    });
  }, K = O0({
    video: e,
    clock: r,
    fps: v,
    span: $,
    loop: () => !0,
    onFrame: a,
    onCapture: c,
    onChange: d
  }), C = () => {
    g === b && Number.isFinite(e.duration) && (w = e.duration);
  }, L = () => {
    g && (x.add(g), d());
  }, O = F0({ video: t, onCapture: f, onChange: d }), R = w0({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", C), e.addEventListener("error", L);
  function H(T) {
    T !== g && (g = T, e.pause(), T ? e.src = T : e.removeAttribute("src"), e.load(), K.setSource(!!T));
  }
  function Q() {
    K.playing && K.stop();
  }
  function _e(T) {
    const E = F(T);
    S = M && E ? b0(E.clip, K.frame, T.timeline.fps, M.meta) : null, O.follow({
      src: (M == null ? void 0 : M.src) || "",
      time: S,
      playing: K.advancing,
      fps: T.timeline.fps
    });
  }
  return {
    get frame() {
      return K.frame;
    },
    get playing() {
      return K.playing;
    },
    get showsVideo() {
      return K.showsVideo;
    },
    get source() {
      return g;
    },
    pause: Q,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return M;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(T, E) {
      return M != null && M.frames ? R.picture(M.frames, S, M.meta, E) : O.picture(T, E);
    },
    toggle() {
      K.playing ? K.stop() : K.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: T, sources: E, state: se, sticker: le = null }) {
      if (M = T ? le : null, !T)
        return Q(), H(""), _e(se), !1;
      for (const P of x)
        E.includes(P) || x.delete(P);
      const ue = E.find((P) => P && !x.has(P)) || "", U = ue !== b;
      U && (b = ue, w = 0), H(b);
      const X = ju(se) || !!b && K.state !== "error" || !!M;
      return X || Q(), (U || !X || !K.playing && K.frame >= $()) && K.frame !== Uo && K.seek(Uo), _e(se), X;
    },
    dispose() {
      K.dispose(), O.dispose(), e.removeEventListener("loadedmetadata", C), e.removeEventListener("error", L), e.pause(), e.removeAttribute("src"), e.load(), g = "";
    }
  };
}
const wl = Math.PI / 180, Cr = 180 / Math.PI, AS = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), CS = 260;
function Tp(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function T0(e, t) {
  return t ? T0(t, e % t) : e;
}
function IS(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), f = Math.max(1, Math.round(t / a * o)), d = T0(c, f) || 1;
  return `${Math.round(c / d)}:${Math.round(f / d)}`;
}
function Ga(e, t) {
  const n = Tp(e), r = Tp(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: IS(n, r) };
}
function eo(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function D0(e) {
  const t = eo(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? qr(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function Kf(e, t, n = AS) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), f = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (F, $, K) => {
    const C = F + $, L = Math.max(0, K - 1), O = C > L && C > 0 ? L / C : 1;
    return [F * O, $ * O];
  }, [g, w] = b(d, c, r), [x, M] = b(a, f, o), S = {
    x: g,
    y: x,
    w: Math.max(1, r - g - w),
    h: Math.max(1, o - x - M)
  }, v = If(S, t);
  return {
    x: S.x + (S.w - v.width) * 0.5,
    y: S.y + (S.h - v.height) * 0.5,
    w: v.width,
    h: v.height,
    safeRect: S
  };
}
function ES(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Kf({ width: n, height: r }, 1), a = J(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * wl * 0.5)), f = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = Cg(d, kg(
    { x: n * 0.5, y: r * 0.5 },
    c,
    f
  )), g = OS(b, Jo(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), w = Ef({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: g.yaw,
    pitchDeg: g.pitch,
    rollDeg: g.roll,
    frameFovDeg: w.hFOV_deg
  };
}
function L0(e) {
  return {
    yaw: Bt(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Cr),
    pitch: J(Math.asin(J(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Cr, -89.9, 89.9)
  };
}
function OS(e, t) {
  const n = L0(e), r = Jo(n.yaw, n.pitch, 0), o = Yc(t, e), a = {
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
    roll: Hl(Math.atan2(
      Yc(f, r.up),
      Yc(f, r.right)
    ) * Cr)
  };
}
function R0(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = Kf({ width: n, height: r }, Ji(e)), a = qi(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, f = Cg(e, kg(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = L0(f);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: J(2 * Math.atan(n / (2 * a)) * Cr, 1, 179)
  };
}
function FS(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, f = qi(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: b, halfH: g } = Of(d, f), w = {
    x: a - b,
    y: c - g,
    w: b * 2,
    h: g * 2
  }, x = w.x <= 0 && w.y <= 0 && w.x + w.w >= r && w.y + w.h >= o, M = r / o, S = Math.tan(Tu * wl), v = M >= 1 ? S : S * M, F = M >= 1 ? S / M : S;
  return {
    focalPx: f,
    rect: w,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / f) * Cr,
      vFOV_deg: 2 * Math.atan(g / f) * Cr
    },
    fallback: x ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(v) * Cr,
        vFOV_deg: 2 * Math.atan(F) * Cr
      }
    }
  };
}
function wo(e, t) {
  const n = eo(e);
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
function TS(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = qi(n, e);
    return Ef(If(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Gs(a, t) };
}
function Dp(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Ga(t, n);
  if (!a) return e;
  const c = Ji(e) >= 1;
  r && a.ratio >= 1 !== c && (a = Ga(a.height, a.width));
  const f = TS(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - f.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - f.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...f, aspect_id: a.label };
}
function $0(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (eo(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = Ng({
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
    const r = eo(e);
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
    return wo(e, (r) => Dp(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return wo(e, (r) => {
      const a = String(qr(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? Ga(a[1], a[2]) : Ga(Ji(r), 1);
      return c ? Dp(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? wo(e, (o) => {
      const a = Hl(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const f = { ...o, roll_deg: a };
      return delete f.rot_deg, f;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? wo(e, (r) => {
    const o = Pg(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? wo(e, (r) => {
    const o = Ag(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? wo(e, (r) => {
    const o = j0(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function V0({
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
function z0(e, t, n = {}) {
  var c, f;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((f = e.center) == null ? void 0 : f.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + xg(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: Sg(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function j0(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, f = Number(e.roll_deg ?? e.rot_deg ?? 0) * wl, d = Math.cos(f), b = Math.sin(f), g = a / n, w = -c / n, x = g * d - w * b, M = g * b + w * d, S = Number(e.pitch_deg || 0) * wl, v = Math.max(0.25, Math.abs(Math.cos(S)));
  return {
    ...e,
    yaw_deg: Bt(Number(e.yaw_deg || 0) - Math.atan(x) / v * Cr),
    pitch_deg: J(Number(e.pitch_deg || 0) - Math.atan(M) * Cr, -90, 90)
  };
}
function DS({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return x0({
    readState: e,
    reduce: $0,
    projectModel: D0,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Ae = Object.freeze({
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
}), LS = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, RS = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: LS(t[2])
})), $S = {
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
}, Lp = Object.fromEntries(
  Object.entries($S).map(([e, t]) => [e, {
    name: t.name,
    elements: RS(t.body)
  }])
), Ct = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ut(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Lp, r) ? Lp[r] : null;
    });
    return (r, o) => n.value ? (ie(), ce("svg", {
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
      (ie(!0), ce(Ye, null, xt(n.value.elements, (a, c) => (ie(), ce(Ye, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ie(), ce("path", vi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ie(), ce("circle", vi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ie(), ce("rect", vi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ie(), ce("line", vi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ie(), ce("polyline", vi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ie(), ce("polygon", vi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ct("", !0)
      ], 64))), 128))
    ], 2)) : ct("", !0);
  }
}, on = {
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
    const t = e, n = ut(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (ie(), Rr(e_(e.tag), vi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Hm(() => [
        De(Ct, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, VS = ["aria-expanded", "disabled"], zS = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, jS = ["data-aspect", "disabled", "onClick"], HS = { class: "pano-cutout-aspect-custom" }, GS = ["disabled"], KS = ["disabled"], BS = ["data-custom-width", "data-custom-height", "disabled"], H0 = {
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
    ]), a = /* @__PURE__ */ Ht("1"), c = /* @__PURE__ */ Ht("1"), f = /* @__PURE__ */ Ht(null), d = ut(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = ut(() => {
      const v = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], F = String(n.model.aspectLabel || "");
      return v.length ? v.map(($) => {
        const K = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.value) || ""), C = typeof $ == "string" ? $ : String(($ == null ? void 0 : $.label) || K);
        return {
          ...typeof $ == "object" && $ ? $ : {},
          value: K,
          label: C,
          active: F ? K === F : ($ == null ? void 0 : $.active) === !0
        };
      }) : o.map(($) => ({
        ...$,
        active: $.value === F
      }));
    }), g = ut(() => {
      var F;
      const v = String(n.model.aspectLabel || "").trim();
      return v || String(((F = b.value.find(($) => $.active === !0)) == null ? void 0 : F.label) || "Aspect");
    });
    Yi(g, (v) => {
      const F = String(v || "").match(/^([0-9.]+):([0-9.]+)$/);
      F && (a.value = F[1], c.value = F[2]);
    }, { immediate: !0 });
    function w(v) {
      r("action", v);
    }
    function x(v) {
      var F;
      n.model.aspectOpen === !0 && ((F = f.value) != null && F.contains(v.target) || w({ type: "close-aspect" }));
    }
    $l(() => {
      document.addEventListener("pointerdown", x, !0);
    }), Ya(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function M(v) {
      const [F, $] = String(v.value || "").split(":");
      w({
        type: "set-aspect",
        width: F,
        height: $,
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
    return (v, F) => (ie(), ce("div", {
      ref_key: "rootElement",
      ref: f,
      class: at(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ie(), Rr(on, {
        key: 0,
        icon: e.model.aspectIcon || Qe(Ae).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: F[0] || (F[0] = ($) => w({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ie(), ce("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: F[1] || (F[1] = ($) => w({ type: "toggle-aspect" }))
      }, [
        De(Ct, {
          icon: e.model.aspectIcon || Qe(Ae).aspect
        }, null, 8, ["icon"]),
        G("span", null, rt(g.value), 1),
        De(Ct, {
          icon: Qe(Ae).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, VS)),
      xi(G("div", zS, [
        (ie(!0), ce(Ye, null, xt(b.value, ($) => (ie(), ce("button", {
          key: $.value,
          class: at(["pano-btn pano-frame-aspect-choice", { active: $.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": $.value,
          disabled: d.value,
          onClick: (K) => M($)
        }, rt($.label), 11, jS))), 128)),
        G("div", HS, [
          xi(G("input", {
            "onUpdate:modelValue": F[2] || (F[2] = ($) => a.value = $),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, GS), [
            [lp, a.value]
          ]),
          F[4] || (F[4] = G("span", { "aria-hidden": "true" }, ":", -1)),
          xi(G("input", {
            "onUpdate:modelValue": F[3] || (F[3] = ($) => c.value = $),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, KS), [
            [lp, c.value]
          ]),
          G("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: S
          }, "Apply", 8, BS)
        ])
      ], 512), [
        [qo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, WS = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, US = {
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
      class: at(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = At(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = At(() => {
      }, ["stop"]))
    }, [
      De(on, {
        icon: Qe(Ae).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = At((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      G("div", WS, [
        o[3] || (o[3] = G("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ie(!0), ce(Ye, null, xt(Qe(n), (a) => (ie(), ce("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          G("kbd", null, rt(a[0]), 1),
          G("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, YS = {
  class: "pano-view-unavailable",
  role: "status"
}, Bf = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ie(), ce("div", YS, rt(Qe(l0)), 1));
  }
}, XS = { class: "pano-cutout-node-surface" }, qS = ["title", "disabled"], JS = { class: "value" }, ZS = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, QS = {
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
    return (r, o) => (ie(), ce("div", XS, [
      G("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = At(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = At(() => {
        }, ["stop"]))
      }, [
        G("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          De(Ct, {
            icon: Qe(Ae).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = G("span", { class: "label" }, "Full Editor", -1))
        ]),
        De(on, {
          icon: e.model.hasShot ? Qe(Ae).delete : Qe(Ae).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(H0, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        G("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = At((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          De(Ct, {
            icon: Qe(Ae).roll
          }, null, 8, ["icon"]),
          G("span", JS, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, qS),
        De(on, {
          icon: Qe(Ae).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        De(US)
      ], 32),
      e.model.hasShot === !1 ? (ie(), ce("div", ZS, " Choose a view · + Add Frame ")) : ct("", !0),
      e.model.viewUnavailable ? (ie(), Rr(Bf, { key: 1 })) : ct("", !0)
    ]));
  }
}, G0 = {
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
    function b(w) {
      var v, F;
      const { active: x, intent: M } = f();
      if (!x) return;
      const S = ((F = (v = w.target) == null ? void 0 : v.files) == null ? void 0 : F[0]) || null;
      if (S) {
        r("file-selected", { intent: M, file: S });
        return;
      }
      r("file-cancelled", { intent: M });
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
      onChange: b,
      onCancel: g
    }, null, 544));
  }
}, ek = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, tk = {
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
      class: at(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = At(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = At(() => {
      }, ["stop"]))
    }, [
      De(on, {
        icon: Qe(Ae).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = At((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      G("div", ek, [
        o[3] || (o[3] = G("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ie(!0), ce(Ye, null, xt(Qe(n), (a) => (ie(), ce("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          G("kbd", null, rt(a[0]), 1),
          G("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, nk = { class: "pano-stickers-node-surface" }, rk = ["disabled"], ik = ["aria-label", "data-tip"], ok = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, ak = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, sk = {
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
    return (c, f) => (ie(), ce("div", nk, [
      G("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: f[5] || (f[5] = At(() => {
        }, ["stop"])),
        onWheel: f[6] || (f[6] = At(() => {
        }, ["stop"]))
      }, [
        G("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: f[0] || (f[0] = (d) => r({ type: "open-editor" }))
        }, [
          De(Ct, {
            icon: Qe(Ae).fullscreen
          }, null, 8, ["icon"]),
          f[10] || (f[10] = G("span", { class: "label" }, "Full Editor", -1))
        ]),
        G("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          De(Ct, {
            icon: Qe(Ae).image
          }, null, 8, ["icon"]),
          f[11] || (f[11] = G("span", { class: "label" }, "Add Image", -1))
        ], 8, rk),
        De(on, {
          icon: e.model.locked ? Qe(Ae).lock_closed : Qe(Ae).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: f[1] || (f[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        De(on, {
          icon: Qe(Ae).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: f[2] || (f[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        De(on, {
          icon: Qe(Ae).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: f[3] || (f[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        De(on, {
          icon: e.model.isExternalSelection ? Qe(Ae).back_initial : Qe(Ae).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: f[4] || (f[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(tk)
      ], 32),
      e.model.playable === !0 ? (ie(), ce("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: f[7] || (f[7] = At(() => {
        }, ["stop"])),
        onWheel: f[8] || (f[8] = At(() => {
        }, ["stop"])),
        onClick: f[9] || (f[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        De(Ct, {
          icon: e.model.playing ? Qe(Ae).pause : Qe(Ae).play
        }, null, 8, ["icon"])
      ], 40, ik)) : ct("", !0),
      e.model.hasStickers === !1 ? (ie(), ce("div", ok, " Add Image to place a sticker ")) : ct("", !0),
      e.model.dropActive === !0 ? (ie(), ce("div", ak, "Drop image to add")) : ct("", !0),
      De(G0, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ie(), Rr(Bf, { key: 3 })) : ct("", !0)
    ]));
  }
}, Rp = 24;
function lk(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function $p(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function ck(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function Uu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => $p(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return $p(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : ck(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Wf(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function K0(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ba(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: J(n.x, -r, t.width + r),
    y: J(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function uk(e) {
  const t = Jo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(J(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * an * 0.5),
    tanY: Math.tan(J(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * an * 0.5)
  };
}
function Ri(e, t, n) {
  return Cf(cl(
    cl(e.centerDir, ul(e.right, t)),
    ul(e.up, n)
  ));
}
function Uf(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = uk(e), r = ba(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    Ri(n, -n.tanX, n.tanY),
    Ri(n, n.tanX, n.tanY),
    Ri(n, n.tanX, -n.tanY),
    Ri(n, -n.tanX, -n.tanY)
  ].map((x) => ba(x, t)), a = Array.from({ length: 4 }, (x, M) => {
    const S = [];
    for (let v = 0; v <= 28; v += 1) {
      const F = v / 28;
      let $, K;
      M === 0 ? ($ = -n.tanX + 2 * n.tanX * F, K = n.tanY) : M === 1 ? ($ = n.tanX, K = n.tanY - 2 * n.tanY * F) : M === 2 ? ($ = n.tanX - 2 * n.tanX * F, K = -n.tanY) : ($ = -n.tanX, K = -n.tanY + 2 * n.tanY * F);
      const C = ba(Ri(n, $, K), t);
      C && S.push({ x: C.x, y: C.y });
    }
    return S;
  }), c = ba(Ri(n, 0, n.tanY), t), f = ba(
    Ri(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
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
      x: c.x + b / w * Rp,
      y: c.y + g / w * Rp
    },
    visible: !0
  };
}
function Vp(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: Uf(c, r) })).filter((c) => c.geometry.visible).sort((c, f) => {
    var d, b;
    return Number(((d = f.item) == null ? void 0 : d.z_index) || 0) - Number(((b = c.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((c) => {
    var f;
    return String(((f = c.item) == null ? void 0 : f.id) || "") === String(t || "");
  });
  if (a) {
    const c = Uu(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const f = Uu(c.geometry, n);
    if (f.kind !== "none") return { ...c, hit: f };
  }
  return null;
}
function fk(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Bt(Math.atan2(r.x, r.z) * Pn),
    pitch_deg: Math.asin(J(r.y, -1, 1)) * Pn
  };
}
function dk(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: J(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: J(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function hk(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * Pn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let As = null;
function Yf() {
  return As || (As = new Promise((e) => {
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
  }), As);
}
function er(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function pk(e, t = 1024) {
  const n = Math.max(1, Math.round(er(e, 2048))), r = Math.min(n, Math.max(1, Math.round(er(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function mk(e, t, n) {
  const r = er(t), o = er(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = er(a.u0), f = er(a.v0), d = er(a.u1), b = er(a.v1);
  if (d <= c || b <= f) return null;
  const g = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + er(g.du)) * r,
    centerY: ((f + b) * 0.5 + er(g.dv)) * o,
    width: (d - c) * r,
    height: (b - f) * o,
    rotationRad: er(g.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, er(g.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function gk(e, t, n) {
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
function yk() {
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
    const b = String(a.rasterDataUrl || "").trim(), g = mk(a, c, f);
    if (!b.startsWith("data:") || !g) return null;
    const w = gk(a, c, f), x = String((a == null ? void 0 : a.id) || "").trim() || w, M = t.get(x);
    if ((M == null ? void 0 : M.revision) === w) return { source: M.source, revision: w };
    const S = r(b, d), v = Number(S.naturalWidth || S.width || 0), F = Number(S.naturalHeight || S.height || 0);
    if (!S.complete || v < 1 || F < 1) return null;
    const $ = document.createElement("canvas");
    $.width = Math.max(1, Math.round(c)), $.height = Math.max(1, Math.round(f));
    const K = $.getContext("2d");
    return K ? (g.wrapOffsets.forEach((C) => {
      K.save(), K.translate(g.centerX + C, g.centerY), K.rotate(g.rotationRad), K.scale(g.scale, g.scale), K.drawImage(
        S,
        -g.width * 0.5,
        -g.height * 0.5,
        g.width,
        g.height
      ), K.restore();
    }), t.set(x, { revision: w, source: $ }), { source: $, revision: w }) : null;
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
function bk(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function vk(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function _k({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(w) {
    if (!w) return;
    w.entry.listeners.delete(w);
    const x = r.get(w.owner);
    (x == null ? void 0 : x.get(w.key)) === w && x.delete(w.key);
  }
  function c(w, x, M, S) {
    if (!w || typeof S != "function" || M.settled) return;
    let v = r.get(w);
    v || (v = /* @__PURE__ */ new Map(), r.set(w, v));
    const F = v.get(x);
    if ((F == null ? void 0 : F.entry) === M) {
      F.callback = S;
      return;
    }
    a(F);
    const $ = { owner: w, key: x, entry: M, callback: S };
    v.set(x, $), M.listeners.add($);
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
  function b(w, x, M, S = null) {
    const v = String(x || ""), F = String(M || "");
    if (!v || !F) return null;
    let $ = n.get(v);
    if ($)
      n.delete(v), n.set(v, $);
    else {
      d(o - 1);
      const C = e || globalThis.Image;
      if (typeof C != "function") return null;
      const L = new C();
      $ = { key: v, image: L, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(v, $), L.onload = () => f($, !0), L.onerror = () => f($, !1), L.src = F;
    }
    return $.settled || $.image.complete && Number($.image.naturalWidth || $.image.width || 0) > 0 || c(w, v, $, S), $.image;
  }
  function g(w) {
    const x = r.get(w);
    x && ([...x.values()].forEach(a), r.delete(w), d(o));
  }
  return { get: b, disposeOwner: g };
}
const Sa = /* @__PURE__ */ new WeakMap();
function B0(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = Sa.get(e);
  r || (r = [], Sa.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = Sa.get(e);
    if (!c) return;
    const f = c.indexOf(o);
    f >= 0 && c.splice(f, 1), c.length === 0 && Sa.delete(e);
  };
}
function ei(e, ...t) {
  const n = Sa.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const xl = "state_json";
function ti(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function wk(e) {
  var c, f;
  const t = ti(e, xl);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = Yg(n, {
    coverage: (c = ti(e, "coverage")) == null ? void 0 : c.value
  }), o = $0(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (f = t.callback) == null || f.call(t, a), !0;
}
function Xf(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = ti(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, f, d, b, g, w, x, M, S;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (f = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || f.call(c), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (x = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), (S = (M = t == null ? void 0 : t.canvas) == null ? void 0 : M.setDirty) == null || S.call(M, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function xk(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function zp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Sk(e) {
  var g, w, x, M, S, v;
  if (!e) return;
  const t = ti(e, "coverage"), n = ti(e, "bg_color"), r = ti(e, xl), o = ti(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), f = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && xk(a) && (zp(c) || c === ""))) return;
  let b = "360";
  if (zp(c))
    try {
      b = String(Gn((g = JSON.parse(c)) == null ? void 0 : g.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (w = t.callback) == null || w.call(t, b), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = c, (M = r.callback) == null || M.call(r, c), o && (o.value = f, (S = o.callback) == null || S.call(o, f)), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
}
function qs(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function Yu(e, t, n) {
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
async function kk(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function ka(e, t, n) {
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
async function W0(e, t = {}) {
  var r;
  await kk(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function Mk(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await W0(e), n ? n.apply(this, r) : this.value;
  };
}
function Nk(e) {
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
function Pk(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function ou(e, {
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
    Nk(g), Xf(g, t), qs(g, xl);
    const x = ti(g, xl);
    if (Mk(g, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const S = x.callback;
      x.callback = (v) => {
        var $;
        const F = S ? S(v) : void 0;
        return ($ = g.setDirtyCanvas) == null || $.call(g, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      g.__panoSceneStateV2 = d;
      const S = ti(g, "bg_color");
      !d && S && (S.value == null || String(S.value).trim() === "" || String(S.value).toLowerCase() === "#000000") && (S.value = "#00ff00", (M = S.callback) == null || M.call(S, "#00ff00")), Yu(g, r, () => o(g, "stickers")), f && (a(g, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(g, "stickers")
      }), g.__panoStickersNodeSurface && qs(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260])), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = w;
      return;
    }
    Yu(g, r, () => o(g, "cutout")), c(g, {
      buttonText: r,
      onOpen: () => o(g, "cutout")
    }), g.__panoCutoutNodeSurface && qs(g, r), (!Array.isArray(g.size) || g.size[0] < 10 || g.size[1] < 10) && (g.size = [360, 260]), g.__panoPreviewAttached = !0, g.__panoPreviewMountKey = w;
  }
  for (const g of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const w = e.prototype[g];
    e.prototype[g] = function() {
      const x = w ? w.apply(this, arguments) : void 0;
      g === "onNodeCreated" && n === "PanoramaCutout" && wk(this), g === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && Sk(this);
      const M = !!this.__panoPreviewAttached;
      return (g === "onNodeCreated" || this.widgets) && b(this), g === "onAdded" && M && ei(this, "attach"), x;
    };
  }
}
function Ak(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return Pk(this), r;
  };
}
function Ck(e, {
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
    Xf(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    Yu(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && qs(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function Ik({
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
      (g === "PanoramaStickers" || g === "Panorama Stickers") && ou(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f
      }), g === "PanoramaStickersNode" && ou(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f,
        sceneStateV2: !0
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && ou(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: f
      }), fl(g) && Ak(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Xf(d, e), fl(b) && Ck(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const Ek = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Ir(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : Ek.test(String(e.name || "")) : !1;
}
function qf(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Ir(n)) : !1;
}
function Ok(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, g, w;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (g = d == null ? void 0 : d.stopPropagation) == null || g.call(d), (w = d == null ? void 0 : d.stopImmediatePropagation) == null || w.call(d);
  }, a = (d) => {
    if (qf(d == null ? void 0 : d.dataTransfer)) {
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
    const b = Array.from(((g = d == null ? void 0 : d.dataTransfer) == null ? void 0 : g.files) || []).find((w) => Ir(w));
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
async function Ma(e, t = {}) {
  var c, f, d, b;
  if (!Ir(e)) throw new TypeError("A supported image file is required.");
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
async function Hi(e, { fetchApi: t } = {}) {
  if (!Ir(e)) throw new TypeError("A supported image file is required.");
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
const jp = /* @__PURE__ */ new WeakSet(), Hp = /* @__PURE__ */ new WeakSet();
let Gp = 0;
function Xu(e) {
  if (!e || typeof e != "object" || Hp.has(e)) return e;
  const t = String(e.type || "preview");
  return Gp += 1, e.type = `${t}:pano-${Gp}`, Hp.add(e), e;
}
function Sl(e) {
  if (!e || typeof e != "object" || jp.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, jp.add(e), e;
}
function U0(e, t) {
  var r, o;
  if (!t || ((o = (r = Sl(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function Fk({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Ft } = Rs;
aS((e) => Mi(e.id));
sS(jt);
const Jf = _k(), { linkedVideoFile: Tk } = y0({ app: Ft, api: jt });
function qu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Rs == null ? void 0 : Rs.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Dk = "pano_suite.ui_settings.v1", Lk = 120, Rk = 2048;
function Kp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Dk)) || "").trim();
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
function $k() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function va(e) {
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
function Vk() {
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
function Ju(e) {
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
function Y0(e) {
  const t = Ju(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function zk(e, t, n) {
  Y0(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function Zu(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Zf(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function X0(e) {
  return fl(Zf(e));
}
function Bp(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function q0(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = Zu(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && f === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && Js(e), EM(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = Zu(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Js(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Js(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function jk(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Js(e, t = {}) {
  var r, o, a, c, f;
  if (!e) return;
  Qu.unregister(e), jk(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const g = String((b == null ? void 0 : b.name) || ""), w = String((b == null ? void 0 : b.type) || ""), x = qu();
      return g === x || w === x || g === "pano_preview" || w === "pano_preview" ? !0 : g === "preview" && w === "pano_preview";
    }).forEach((b) => lM(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function Hk(e, t = "#00ff00") {
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
function Gk(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Vo(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Tn(e) {
  var f, d;
  const t = Gk(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((f = Vo(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), o = Number(((d = Vo(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? Xg(t, { backgroundColor: r, coverage: o, active: e0(e) }) : Hk(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function Vo(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function Kk(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function J0(e, t, n = null) {
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
  return !r && n != null && (r = Kk(e == null ? void 0 : e.graph, n)), r;
}
function Bk(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Z0(e, t = []) {
  const n = Bk(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Ni.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function Wp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function kl(e, t) {
  const n = Wp(e), r = Wp(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function Wk(e, t) {
  var n;
  return J0(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function Uk(e, t = Ni) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = Z0(e, t).map((f) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(f))).filter((f) => f >= 0), a = n.map((f, d) => ({ input: f, idx: d })).filter(({ input: f }) => String((f == null ? void 0 : f.type) || "").toUpperCase() === "IMAGE").map(({ idx: f }) => f), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return hS(e, c, Wk);
}
const Qu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = jt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, g, w, x;
        if (!a) return;
        const c = kl(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...Uk(a)].some((M) => kl(r, M)) || g0(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (Q0(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = a.setDirtyCanvas) == null || g.call(a, !0, !0), (x = (w = a.graph) == null ? void 0 : w.setDirtyCanvas) == null || x.call(w, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
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
function Ml(e) {
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
function Yk(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Xk(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function qk(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function Jk(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Yk(t)) return [t];
  const { filename: n, subfolder: r } = Xk(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Ml({
    filename: n,
    subfolder: r,
    type: a
  }));
  return qk([...o, t]);
}
function Zk(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Ml({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Mi(e) {
  const t = Ft == null ? void 0 : Ft.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (kl(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (kl(c, o)) return t[c];
  }
  return null;
}
function Ta(e, t, n = null) {
  const r = n || Mi(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function Bn(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Bn(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Ml({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = Bn(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ml(e);
}
function Nl(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function au(e) {
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
function Qf(e, t) {
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
function Qk(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function eM(e, t) {
  try {
    e.__panoOwnOutputRev = bk(e.__panoOwnOutputRev);
    const n = Qk(t);
    let r = "";
    for (const o of n)
      if (r = Bn(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Qf(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function zo(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function tM(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!$n(e, "background"))
    return zo(e), null;
  const o = Mi(r), a = zf(o, t, Bn);
  if (!a)
    return zo(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), f = Qf(a, c), d = `${t.join("|")}:${f}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  zo(e);
  const g = pS({
    documentRef: document,
    src: f,
    onFrame: n
  });
  return g ? (e.__panoOwnOutputVideoCache = { key: d, ...g }, g.video) : null;
}
function nM(e, t = []) {
  var b, g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = Z0(e, t).map((w) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(w))).filter((w) => w >= 0), a = n.map((w, x) => ({ input: w, idx: x })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const w of c) {
    const x = n[w], M = e.graph ? e.getInputLink(w) : null;
    if ((M == null ? void 0 : M.origin_id) == null) continue;
    const S = M.origin_id, v = J0(e, w, S);
    if (!v) continue;
    const F = Number(M.origin_slot ?? 0), $ = Mi((v == null ? void 0 : v.id) ?? S), K = Array.isArray($ == null ? void 0 : $.images) ? $.images : [];
    if (K.length) {
      const R = [];
      F >= 0 && F < K.length && R.push(K[F]), R.push(...K);
      for (const H of R.filter((Q) => !Ys(Q))) {
        const Q = Bn(H);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: `${Q}&pano_src=${Ku($)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let C = [];
    try {
      C = typeof (Ft == null ? void 0 : Ft.getNodeImageUrls) == "function" ? Ft.getNodeImageUrls(v) || [] : [];
    } catch {
      C = [];
    }
    if (Array.isArray(C) && C.length) {
      const R = [];
      F >= 0 && F < C.length && R.push(C[F]), R.push(...C);
      for (const H of R) {
        const Q = Bn(H);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: Q, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const L = Array.isArray(v == null ? void 0 : v.imgs) ? v.imgs : [];
    if (L.length) {
      const R = [];
      F >= 0 && F < L.length && R.push(L[F]), R.push(...L);
      for (const H of R) {
        const Q = Bn(H);
        if (Q)
          return String((x == null ? void 0 : x.name) || ""), { src: Q, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const O = (b = v == null ? void 0 : v.widgets) == null ? void 0 : b.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (O) {
      let R = Bn(O.value);
      if (R && !R.includes("/") && !R.includes(":") && (v.comfyClass === "LoadImage" || v.type === "LoadImage") && (R = jt.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R)
        return String((x == null ? void 0 : x.name) || ""), { src: R, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const f = $n(e, "background") ? Mi(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && d.push(...f.pano_input_images), Array.isArray((g = f == null ? void 0 : f.ui) == null ? void 0 : g.pano_input_images) && d.push(...f.ui.pano_input_images), d.length > 0)
    for (const w of d) {
      const x = Bn(w);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function rM(e, t = [], n = {}) {
  const r = nM(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = Jk(o);
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
    var S, v, F, $;
    if (w += 1, w >= a.length) {
      if (((v = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : v.call(S, f)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
        try {
          ($ = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || $.call(F, f);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const M = a[w];
    g.pendingResolvedSrc = M, b.src = M;
  };
  return b.onload = () => {
    var M, S, v;
    ((S = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : S.call(M, f)) === g && g.pendingImg === b && (g.srcRaw = o, g.resolvedSrc = String(g.pendingResolvedSrc || b.src || ""), g.img = b, g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null), String(g.pendingResolvedSrc || g.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, b.onerror = (M) => {
    var S, v, F, $;
    if (w + 1 < a.length) {
      x();
      return;
    }
    if (((v = (S = e.__panoLinkedInputImageCache) == null ? void 0 : S.get) == null ? void 0 : v.call(S, f)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
      try {
        ($ = (F = e.__panoLinkedInputImageCache) == null ? void 0 : F.delete) == null || $.call(F, f);
      } catch {
      }
    String(g.pendingResolvedSrc || g.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, x(), c && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : b;
}
function iM(e, t = [], n = null, r = {}) {
  const o = rM(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function Q0(e) {
  var t, n;
  if (e) {
    Jf.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, zo(e), e.__panoWrappedErpCache = null;
  }
}
function oM(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, zo(e), e.__panoWrappedErpCache = null;
  }
}
function ey(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Cs(e, t, n = "") {
  const r = ey(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < Lk ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Up(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, f = r / a, d = Math.min(c, f);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function aM(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), f + Math.round(14 * n)), g = r + (a - d) * 0.5, w = o + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(g, w, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", g + d * 0.5, w + b * 0.5 + 0.5), e.restore();
}
function su(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function sM(e) {
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
function lM(e, t) {
  return U0(e, t);
}
function Ka(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = Zk(n);
  if (!a && (r != null && r.external)) {
    if (!$n(e, "external-sticker")) return null;
    const M = Mi(e == null ? void 0 : e.id), S = ((x = M == null ? void 0 : M.ui) == null ? void 0 : x.pano_sticker_input_images) || (M == null ? void 0 : M.pano_sticker_input_images) || [];
    for (const v of Array.isArray(S) ? S : [S])
      if (a = Bn(v), a) break;
  }
  if (!a) return null;
  const c = Ta(e, "pano_sticker_input_state_hash"), f = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? Qf(a, d) : a, g = vk(a, f, d);
  return Jf.get(e, g, b, (M, S) => {
    var v, F;
    S && (r != null && r.external && e.__panoOutputFromRun && ei(e, "image-loaded"), (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null || F.call(v));
  }) || null;
}
function cM(e, t) {
  var w, x, M, S;
  const n = pM(e, t), r = mM(t), o = Array.isArray((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) ? t.painting.groups : [], a = new Map(
    o.filter((v) => v && typeof v == "object").map((v) => [String((v == null ? void 0 : v.actionGroupId) || (v == null ? void 0 : v.id) || "").trim(), Number((v == null ? void 0 : v.z_index) || 0)])
  ), c = n ? r.map((v) => {
    const F = n.getGroupDisplayCanvas(v);
    return F ? {
      id: `paint_group:${v}`,
      source: F,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${v}`,
      zIndex: Number(a.get(v) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], f = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) ? t.painting.raster_objects : [];
  if (f.length === 0)
    return (S = (M = e.__panoRasterObjectSurfaceCache) == null ? void 0 : M.retain) == null || S.call(M, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = yk()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var v, F;
    return (F = (v = e.__panoDomPreview) == null ? void 0 : v.requestDraw) == null ? void 0 : F.call(v);
  });
  const d = pk(t == null ? void 0 : t.output_preset), b = f.filter((v) => (v == null ? void 0 : v.visible) !== !1 && String((v == null ? void 0 : v.layerKind) || "paint") === "paint").map((v) => String((v == null ? void 0 : v.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const g = f.map((v) => {
    const F = e.__panoRasterObjectSurfaceCache.get(
      v,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return F ? {
      id: `raster:${String((v == null ? void 0 : v.id) || "")}`,
      source: F.source,
      revision: F.revision,
      zIndex: Number((v == null ? void 0 : v.z_index) || 0),
      opacity: 1,
      visible: (v == null ? void 0 : v.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...g];
}
function uM(e, t, n, r) {
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
  const o = dM(e, t, r);
  return o || null;
}
function fM(e, t) {
  var w, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (w = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : w.call(o), c = (t == null ? void 0 : t.ds) || ((x = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : x.ds);
  if (!a || !c) return null;
  const f = Number(c.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(a.left || 0)) / f - Number(d[0] || 0), g = (r - Number(a.top || 0)) / f - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(g) ? null : { x: b, y: g };
}
function dM(e, t, n) {
  var o, a;
  const r = fM(t, n || (Ft == null ? void 0 : Ft.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function hM(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function pM(e, t) {
  var b, g, w, x, M, S, v, F, $, K, C, L;
  const n = (g = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : g.strokes, r = (x = (w = t == null ? void 0 : t.painting) == null ? void 0 : w.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = hM(e, t), f = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = Ou(c), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) || null
  };
  return (((v = e.__panoPreviewPaintRevision) == null ? void 0 : v.paint) !== d.paint || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.mask) !== d.mask || (($ = e.__panoPreviewPaintRevision) == null ? void 0 : $.groups) !== d.groups || ((K = e.__panoPreviewPaintRevision) == null ? void 0 : K.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((C = t == null ? void 0 : t.painting) == null ? void 0 : C.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((L = t == null ? void 0 : t.painting) == null ? void 0 : L.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function mM(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function gM(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function yM(e, t, n) {
  const r = Uf(t, n);
  r.visible && Wf(e, r.boundaryEdges, { selected: !1 });
}
function bM(e, t, n) {
  const r = Uf(t, n);
  r.visible && (e.save(), Wf(e, r.boundaryEdges, { selected: !0 }), K0(e, r, { accent: lk(t) }), e.restore());
}
function ef(e, t, n) {
  return a0(bl(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Pl(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Uo;
}
function vM(e) {
  return [$n(e, "background") ? zf(Mi(e.id), ["pano_input_videos"], Bn) : "", Tk(e, Ni)];
}
function _M(e) {
  var a;
  if (!$n(e, "external-sticker")) return null;
  const t = Mi(e.id), n = Ta(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(Bn), meta: n };
  const o = zf(t, ["pano_sticker_input_videos"], Bn);
  return o ? { src: o, meta: n } : null;
}
function wM({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function Yp(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: Wo({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let f;
    if (t.version === 2) {
      f = Ka(e, c.id, Zg(c.source), { external: c.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (c.source.kind === "port" && b) {
        const g = b.playback.stickerPicture(b.stickerStill, f), w = _0(b.playback.stickerMedia, f);
        return g ? { media: g, revision: au(g), source: w } : null;
      }
    } else {
      const b = c.type === "external_image" || c.source_kind === "external_image", g = String(c.asset_id || "") || (b ? String(c.id || "") : "");
      f = Ka(e, g, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: b });
    }
    return Nl(f) ? { media: f, revision: au(f) } : null;
  }, o = cM(e, t).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: Nl(n) ? { media: n, revision: au(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: s0(e.__panoSurfaceScene.sceneState, Pl(e), t.stickers, { media: r, paintLayers: o })
  };
}
function xM(e, t, n) {
  var L, O, R, H, Q, _e, T;
  const r = String(e.__panoPreviewMode || "stickers");
  ey(e, r);
  const o = Tn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (R = (O = (L = e.__panoCutoutNodeSurface) == null ? void 0 : L.session) == null ? void 0 : O.refresh) == null || R.call(O)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (Q = (H = e.__panoStickersNodeSurface) == null ? void 0 : H.session) == null ? void 0 : Q.refresh) == null || _e.call(Q));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), f = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== f) && (t.width = c, t.height = f);
  const b = { x: 0, y: 0, w: c, h: f };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, f);
  const g = (e.__panoSurfacePlayback ? wM(e.__panoSurfacePlayback) : tM(e, ["pano_input_videos"], () => {
    var E, se;
    return (se = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : se.call(E);
  })) || iM(
    e,
    Ni,
    () => {
      var E, se;
      return (se = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null ? void 0 : se.call(E);
    },
    { preserveReadyWhilePending: !1 }
  ), w = Nl(g);
  let x = null;
  const M = (E, se) => {
    x || (x = Yp(e, o, g));
    const le = n.render({ width: E.w, height: E.h, camera: se, ...x });
    return le && d.drawImage(le.canvas, le.x, le.y, le.width, le.height, E.x, E.y, E.w, E.h), !!le;
  };
  if (r === "cutout") {
    const E = sM(o), se = gM(g), le = E ? J(oi(E).aspect, 0.1, 10) : w ? J(Number(se.width / se.height), 0.05, 20) : 1, ue = Kf(b, le);
    e.__panoCutoutNodeFrame = ue;
    let U = "none";
    const X = String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "");
    if (E)
      if (g && !w)
        U = "loading";
      else if (w) {
        const j = FS({ width: c, height: f }, ue, E);
        [
          !j.fallback || M(j.fallback.rect, Ws(j.fallback.shot)),
          M(j.rect, Ws(j.shot)),
          !j.fallback || M(ue, Ws(E))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const j = e.__panoLastCutoutShot;
      j ? (e.__panoPreviewView = R0(j, { width: c, height: f }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), w ? M(b, bl(e.__panoPreviewView, c, f)) || (U = "loading") : g ? U = "loading" : U = "empty";
    }
    w || n.release(), n.failed && U === "loading" && (U = "none"), E && (e.__panoLastCutoutShot = { ...E }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, f), d.rect(ue.x, ue.y, ue.w, ue.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(ue.x + 0.5, ue.y + 0.5, Math.max(0, ue.w - 1), Math.max(0, ue.h - 1)), d.restore()), U === "loading" ? (su(e, !1), Cs(e, !0, X)) : U === "empty" ? (su(e, !0), Cs(e, !1, "")) : (su(e, !1), Cs(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let S = !1;
  (!g || w) && (x = Yp(e, o, g), !x.background && !x.layers.length ? (n.release(), S = !0) : S = M(b, bl(e.__panoPreviewView, c, f)));
  const v = !S && !n.failed;
  Cs(e, v, v ? String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "") : ""), v && aM(d, b, Up(t, b));
  const F = ef(e, c, f);
  !g && S && SM(d, F, Up(t, b));
  const $ = String(((T = o == null ? void 0 : o.active) == null ? void 0 : T.selected_sticker_id) || ""), K = Bu(o, Pl(e)), C = S ? K.find((E) => String((E == null ? void 0 : E.id) || "") === $ && (E == null ? void 0 : E.visible) !== !1) : null;
  S && K.filter((E) => E !== C && (E == null ? void 0 : E.visible) !== !1 && (E.external || E.source_kind === "external_image")).filter((E) => !Nl(Ka(e, E.id, null, { external: !0 }))).forEach((E) => yM(d, E, F)), C && bM(d, C, F);
}
function Xp(e, t, n, r, o = 1) {
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
function SM(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let f = -75; f <= 75; f += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(Rn(b, f));
    Xp(e, d, t, f === 0 ? o : r, f === 0 ? 1.5 : 1);
  }
  for (let f = -180; f <= 180; f += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(Rn(f, b));
    Xp(e, d, t, r, f % 90 === 0 ? 1.3 : 1);
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
function tf(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function kM(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function Zn(e, t) {
  return kM(e, t) ? !1 : (tf(e), !0);
}
function qp() {
  var n;
  const e = (n = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function MM(e) {
  var n;
  if (!e) return;
  const t = (n = Ft == null ? void 0 : Ft.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function NM(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Y0(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function PM(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function Jp(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && AM(e, 180, t);
    }
  };
}
function AM(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Na(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const CM = /* @__PURE__ */ new WeakMap();
function ty(e, t) {
  return g0(CM, e, t) ? !1 : (eM(e, t), Q0(e), Na(e), !0);
}
async function IM(e) {
  var n, r;
  const t = await fS(e, Ft, jt);
  t && (ty(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function EM(e, t = {}) {
  var io;
  const n = t.__allowStandalone === !0, r = X0(e);
  if (r && !n) {
    Zf(e);
    return;
  }
  r && NM(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: Bp(e)
  }, f = "dom", d = c.signature || Bp(e);
  if (Number(e.__panoRebindGeneration || 0), Zu(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, Ju(e), e.__panoFrontendSig = d, e.__panoStickersPath = f, (io = e.__panoDomPreview) != null && io.widget || (e.__panoLegacyPreviewHooked && Js(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, g = b ? 0 : 56, w = b ? 0 : CS, x = document.createElement("div");
  if (Vk(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
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
    const z = Sl(Xu(
      e.addDOMWidget(qu(), "preview", x, Jp(e, null))
    ));
    Na(e), e.__panoDomPreview = { widget: z, root: x, requestDraw: () => {
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
  const v = document.createElement("div");
  v.style.cssText = [
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
  ].join(";"), v.textContent = "Connect ERP image", M.appendChild(S), M.appendChild(v), x.appendChild(M);
  const F = wg(x), $ = document.createElement("div");
  $ && ($.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", $.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild($)), zk(e, 120, 120), Na(e);
  let K = null;
  try {
    PM(e, g, () => {
      var z, ve;
      return (ve = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : ve.call(z);
    }), K = Sl(Xu(e.addDOMWidget(
      qu(),
      "preview",
      x,
      Jp(
        e,
        () => {
          var z, ve;
          return (ve = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : ve.call(z);
        },
        g,
        w,
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
  }, L = () => {
    C.destroyed || (C.needsDraw = !0, !C.inTick && !C.raf && (C.raf = requestAnimationFrame(Yn)));
  }, O = c0(L), R = /* @__PURE__ */ Xo(o ? { ...E0(Tn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...D0(Tn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((z) => ({ value: z, label: z }))
  });
  let H = null;
  if (o && e.__panoSceneStateV2) {
    const [z, ve] = [0, 1].map(() => {
      const Pe = document.createElement("video");
      return Pe.playsInline = !0, Pe.preload = "auto", Pe.crossOrigin = "anonymous", Pe.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", M.appendChild(Pe), Pe;
    }), Ne = document.createElement("canvas");
    Ne.__panoFrameIdx = 0;
    const Oe = document.createElement("canvas");
    Oe.__panoFrameIdx = 0;
    const je = PS({
      video: z,
      stickerVideo: ve,
      createImage: (Pe, Ze) => {
        const mt = new Image();
        return mt.onload = Ze, mt.onerror = Ze, mt.src = Pe, mt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Pe) => requestAnimationFrame(Pe),
        cancelFrame: (Pe) => cancelAnimationFrame(Pe)
      },
      readState: () => Tn(e),
      onFrame: L,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var Ze;
        if (!(z.videoWidth > 0 && z.videoHeight > 0)) return;
        const Pe = Math.min(1, Rk / z.videoWidth);
        Ne.width = Math.round(z.videoWidth * Pe), Ne.height = Math.round(z.videoHeight * Pe), (Ze = Ne.getContext("2d")) == null || Ze.drawImage(z, 0, 0, Ne.width, Ne.height), Ne.__panoFrameIdx += 1, L();
      },
      onStickerCapture: () => {
        var Pe;
        ve.videoWidth > 0 && ve.videoHeight > 0 && (Oe.width = ve.videoWidth, Oe.height = ve.videoHeight, (Pe = Oe.getContext("2d")) == null || Pe.drawImage(ve, 0, 0), Oe.__panoFrameIdx += 1, L());
      },
      onChange: () => {
        R.playing = je.playing, L();
      }
    });
    H = { playback: je, video: z, still: Ne, stickerVideo: ve, stickerStill: Oe, stickerSource: "" }, e.__panoSurfacePlayback = H;
  }
  const Q = () => {
    var mt;
    const { playback: z, still: ve, stickerStill: Ne } = H, Oe = NS(M, !!((mt = e.flags) != null && mt.collapsed)), je = z.source, Pe = Oe ? _M(e) : null, Ze = z.follow({
      shown: Oe,
      sources: Oe ? vM(e) : [],
      state: Tn(e),
      sticker: Pe
    });
    ((Pe == null ? void 0 : Pe.src) || "") !== H.stickerSource && (H.stickerSource = (Pe == null ? void 0 : Pe.src) || "", Ne.width = 0), z.source !== je && (ve.width = 0, ve.__panoFrameIdx = 0), R.playable = Ze, R.playing = z.playing;
  }, _e = () => H == null ? void 0 : H.playback.pause();
  let T = null;
  const E = (o ? kS : DS)({
    readState: () => Tn(e),
    publishLiveState: (z) => {
      z ? (T = z, e.__panoLiveStateOverride = z) : (e.__panoLiveStateOverride === T && (e.__panoLiveStateOverride = null), T = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, L();
    },
    commitState: (z) => {
      var Oe, je, Pe, Ze;
      const ve = Vo(e, "state_json");
      if (!ve) return;
      t0(e, z.active);
      const Ne = n0(e, z);
      r0(e, Ne, String(ve.value ?? "")) || (ve.value = Ne, (Oe = ve.callback) == null || Oe.call(ve, Ne), e.__panoStateCache = null, (je = e.setDirtyCanvas) == null || je.call(e, !0, !0), (Ze = (Pe = e.graph) == null ? void 0 : Pe.setDirtyCanvas) == null || Ze.call(Pe, !0, !0));
    },
    onChange: (z) => Object.assign(R, z)
  }), le = o ? B0(e, (z = "sync", ve = null) => {
    var yr;
    if (!o || !e.graph || !E || E.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const An = $n(e, "external-sticker"), kt = Tn(e).stickers.find((ar) => ar.source.kind === "port");
      return E.apply({
        type: "sync-port",
        value: C0(e, {
          pose: An ? Ta(e, "pano_sticker_input_pose", ve) : null,
          image: kt ? Ka(e, kt.id, null, { external: !0 }) : null
        })
      });
    }
    const Ne = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((An) => String((An == null ? void 0 : An.name) || "") === "sticker_image") : -1, Oe = Ne >= 0 ? ((yr = e.getInputLink(Ne)) == null ? void 0 : yr.id) ?? null : null;
    if (Oe == null)
      return E.apply({ type: "sync-external", value: { connected: !1 } });
    if (!$n(e, "external-sticker")) return !1;
    const je = Ta(e, "pano_sticker_input_pose", ve), Pe = Array.isArray(je) ? je[0] : je, Ze = String(Ta(e, "pano_sticker_input_state_hash", ve) ?? ""), mt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, Dt = Tn(e), or = (Array.isArray(Dt == null ? void 0 : Dt.stickers) ? Dt.stickers : []).find((An) => String((An == null ? void 0 : An.id) || "") === "sticker_image_1"), Yt = Ka(e, "sticker_image_1", null, { external: !0 }), Pi = Pe && typeof Pe == "object" ? Pe : or || { yaw_deg: mt.yaw, pitch_deg: mt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return E.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Oe,
        stateHash: Ze,
        pose: Pi,
        imageWidth: Number((Yt == null ? void 0 : Yt.naturalWidth) || (Yt == null ? void 0 : Yt.width) || 0),
        imageHeight: Number((Yt == null ? void 0 : Yt.naturalHeight) || (Yt == null ? void 0 : Yt.height) || 0)
      }
    });
  }) : () => {
  };
  let ue = 0;
  const U = async (z) => {
    if (!o || !E || !Ir(z)) return !1;
    _e();
    const ve = `asset_${Math.random().toString(16).slice(2, 10)}`, Ne = `st_${Math.random().toString(16).slice(2, 10)}`, Oe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    ue += 1, R.importing = !0;
    const je = ka(e, `add:${ve}`, async () => {
      const Pe = await Ma(z), Ze = await Hi(z, {
        fetchApi: (mt, Dt) => jt.fetchApi(mt, Dt)
      });
      return Ie(), E.apply({
        type: "add-sticker",
        value: {
          stickerId: Ne,
          assetId: ve,
          asset: Ze,
          imageWidth: Pe.width,
          imageHeight: Pe.height,
          yaw_deg: Number(Oe.yaw || 0),
          pitch_deg: Number(Oe.pitch || 0)
        }
      });
    });
    try {
      return await je;
    } catch {
      return !1;
    } finally {
      ue = Math.max(0, ue - 1), R.importing = ue > 0, L();
    }
  };
  let X = null, j = null, P = null, ee = !1;
  const Y = () => {
    var z;
    return P && (clearTimeout(P), P = null), ee ? (ee = !1, ((z = E == null ? void 0 : E.commitGesture) == null ? void 0 : z.call(E)) ?? !1) : !1;
  }, Ie = () => {
    var Oe, je, Pe;
    const z = Y(), ve = (X == null ? void 0 : X.pointerId) ?? (j == null ? void 0 : j.pointerId);
    if (X = null, j = null, ve != null) {
      try {
        (Oe = S.hasPointerCapture) != null && Oe.call(S, ve) && ((je = S.releasePointerCapture) == null || je.call(S, ve));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Ne = ((Pe = E == null ? void 0 : E.commitGesture) == null ? void 0 : Pe.call(E)) ?? !1;
    return z || Ne;
  }, Fe = () => {
    var Oe, je, Pe;
    const z = Y(), ve = X == null ? void 0 : X.pointerId;
    if (X = null, ve != null) {
      try {
        (Oe = S.hasPointerCapture) != null && Oe.call(S, ve) && ((je = S.releasePointerCapture) == null || je.call(S, ve));
      } catch {
      }
      S.style.cursor = "grab";
    }
    const Ne = ((Pe = E == null ? void 0 : E.cancelGesture) == null ? void 0 : Pe.call(E)) ?? !1;
    return z || Ne;
  }, St = () => Ie();
  E && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(St));
  let pt = null, sn = !1;
  if ($ && E)
    try {
      Yf(), pt = Sf(o ? sk : QS, {
        model: R,
        onAction: (z) => {
          var Oe, je;
          if ((z == null ? void 0 : z.type) === "toggle-playback") {
            Ie(), H == null || H.playback.toggle();
            return;
          }
          if (_e(), (z == null ? void 0 : z.type) === "open-editor") {
            Ie(), o || (R.aspectOpen = !1), (Oe = e.__panoOpenEditor) == null || Oe.call(e);
            return;
          }
          if (o) {
            if ((z == null ? void 0 : z.type) === "add-image-file") {
              U(z.file);
              return;
            }
            E.apply(z) && L();
            return;
          }
          if ((z == null ? void 0 : z.type) === "toggle-aspect") {
            R.aspectOpen = !R.aspectOpen;
            return;
          }
          if ((z == null ? void 0 : z.type) === "close-aspect") {
            R.aspectOpen = !1;
            return;
          }
          let ve = z;
          if ((z == null ? void 0 : z.type) === "add-frame") {
            const Pe = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ve = {
              ...z,
              ...ES(Pe, {
                width: S.width,
                height: S.height
              })
            };
          } else if ((z == null ? void 0 : z.type) === "delete-frame") {
            const Pe = eo(Tn(e));
            Pe && (e.__panoPreviewView = R0(Pe, {
              width: S.width,
              height: S.height
            }));
          }
          const Ne = ((je = e.__panoCutoutNodeFrame) == null ? void 0 : je.safeRect) || null;
          R.aspectOpen = !1, E.apply({ ...ve, safeRect: Ne }) && L();
        }
      }), pt.mount($), sn = !0;
    } catch {
      pt = null, sn = !1;
    }
  const it = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    H && Q(), L();
  }) : null;
  it == null || it.observe(M);
  const Yn = (z) => {
    var Ne, Oe;
    C.raf = 0, C.inTick = !0;
    let ve = !1;
    try {
      ve = It.stepInertia(z), (C.needsDraw || ve) && (C.needsDraw = !1, H && Q(), (Ne = e.flags) != null && Ne.collapsed || xM(e, S, O), R.viewUnavailable = O.failed);
    } finally {
      C.inTick = !1;
    }
    (ve || C.needsDraw) && !C.raf && (C.raf = requestAnimationFrame(Yn)), $k() && (!e.__panoDebugLastTs || z - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = z, e.__panoPreviewMode, Ju(e), va(x), va(M), va(S), va(x.parentElement), va((Oe = x.parentElement) == null ? void 0 : Oe.parentElement), Number(S.width || 0), Number(S.height || 0), void 0);
  }, It = Af({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (z) => {
      e.__panoPreviewView = z;
    },
    getViewportSize: () => {
      const z = S.getBoundingClientRect();
      return {
        w: Math.max(1, Number(z.width || S.clientWidth || 0)),
        h: Math.max(1, Number(z.height || S.clientHeight || 0))
      };
    },
    getInvert: () => {
      const z = Kp();
      return {
        x: z.invert_view_x ? -1 : 1,
        y: z.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      L();
    }
  }), Zt = o ? M : x, ln = (z) => {
    const ve = S.getBoundingClientRect();
    return {
      x: (Number(z.clientX) - ve.left) * (S.width / Math.max(1, ve.width)),
      y: (Number(z.clientY) - ve.top) * (S.height / Math.max(1, ve.height))
    };
  }, si = (z) => {
    var Oe, je;
    if (!o || !a) return;
    const ve = Tn(e), Ne = Vp(
      Bu(ve, Pl(e)),
      String(((Oe = ve == null ? void 0 : ve.active) == null ? void 0 : Oe.selected_sticker_id) || ""),
      ln(z),
      ef(e, S.width, S.height)
    );
    if (!Ne) {
      S.style.cursor = "grab";
      return;
    }
    if (((je = Ne.item) == null ? void 0 : je.locked) === !0) {
      S.style.cursor = "default";
      return;
    }
    S.style.cursor = Ne.hit.cursor || "default";
  };
  S.addEventListener("pointerdown", (z) => {
    var mt, Dt, or, Yt, Pi, wn, yr, An, kt, ar, qa;
    if (!Zn(z, Zt) || z.button !== 0) return;
    if (!o) {
      const Cn = eo(Tn(e)), Vn = e.__panoCutoutNodeFrame;
      if (!Cn) {
        (mt = x.focus) == null || mt.call(x, { preventScroll: !0 }), (Dt = S.setPointerCapture) == null || Dt.call(S, z.pointerId), S.style.cursor = "grabbing", It.startDrag(z.clientX, z.clientY, z.pointerId);
        return;
      }
      if (Cn.locked === !0 || !Vn || !E) return;
      const br = ln(z);
      let Ai;
      if (z.shiftKey) {
        const dn = V0({
          frame: Vn,
          point: br,
          startRollDeg: Number(Cn.roll_deg ?? Cn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!dn) return;
        Ai = { kind: "roll", pointerId: z.pointerId, rollGesture: dn };
      } else {
        const dn = ((or = Tn(e)) == null ? void 0 : or.ui_settings) || Kp();
        Ai = {
          kind: "pan",
          pointerId: z.pointerId,
          startPoint: br,
          startShot: { ...Cn },
          focalPx: qi(Vn, Cn),
          invertX: dn.invert_view_x === !0,
          invertY: dn.invert_view_y === !0
        };
      }
      Ie(), (Yt = x.focus) == null || Yt.call(x, { preventScroll: !0 }), (Pi = S.setPointerCapture) == null || Pi.call(S, z.pointerId), S.style.cursor = "grabbing", E.beginGesture(), X = Ai;
      return;
    }
    if (!a) return;
    const ve = ln(z), Ne = Tn(e), Oe = String(((wn = Ne == null ? void 0 : Ne.active) == null ? void 0 : wn.selected_sticker_id) || ""), je = ef(e, S.width, S.height);
    (yr = x.focus) == null || yr.call(x, { preventScroll: !0 });
    const Pe = () => Vp(Bu(Ne, Pl(e)), Oe, ve, je);
    let Ze = Pe();
    if (Ze && (H != null && H.playback.playing) && (_e(), Ze = Pe()), Ze && E) {
      if (It.stopMotion(), Ie(), String(((An = Ze.item) == null ? void 0 : An.id) || "") !== Oe && E.apply({ type: "select-sticker", id: Ze.item.id }), ((kt = Ze.item) == null ? void 0 : kt.locked) === !0) {
        L();
        return;
      }
      const Cn = ve, Vn = Ze.geometry.center;
      j = {
        active: !0,
        kind: Ze.hit.kind,
        pointerId: z.pointerId,
        startPoint: Cn,
        startCenter: { ...Vn },
        startSticker: { ...Ze.item },
        startDistance: Math.max(1, Math.hypot(Cn.x - Vn.x, Cn.y - Vn.y)),
        startAngle: Math.atan2(Cn.y - Vn.y, Cn.x - Vn.x),
        projection: je
      }, E.beginGesture(), (ar = S.setPointerCapture) == null || ar.call(S, z.pointerId), S.style.cursor = Ze.hit.kind === "rotate" ? "grabbing" : Ze.hit.kind === "move" ? "move" : Ze.hit.cursor, L();
      return;
    }
    (qa = S.setPointerCapture) == null || qa.call(S, z.pointerId), S.style.cursor = "grabbing", It.startDrag(z.clientX, z.clientY, z.pointerId);
  }), S.addEventListener("pointermove", (z) => {
    if (!o) {
      if (!X) {
        if (!It.state.drag.active) return;
        Zn(z, Zt), It.moveDrag(z.clientX, z.clientY, "pano");
        return;
      }
      if (X.pointerId !== z.pointerId || !E) return;
      if (Zn(z, Zt), X.kind === "pan") {
        const Ne = ln(z);
        E.updateGesture({
          type: "pan-camera",
          startShot: X.startShot,
          dx: Ne.x - X.startPoint.x,
          dy: Ne.y - X.startPoint.y,
          focalPx: X.focalPx,
          invertX: X.invertX,
          invertY: X.invertY
        });
        return;
      }
      const ve = z0(X.rollGesture, ln(z), z);
      if (!ve) return;
      X.rollGesture = ve.gesture, E.updateGesture({ type: "set-roll", value: ve.rollDeg });
      return;
    }
    if (!j && !It.state.drag.active) {
      si(z);
      return;
    }
    if (j) {
      if (j.pointerId !== z.pointerId || !E) return;
      Zn(z, Zt);
      const ve = ln(z);
      let Ne = j.startSticker;
      if (j.kind === "move")
        Ne = fk(
          j.startSticker,
          {
            x: j.startCenter.x + ve.x - j.startPoint.x,
            y: j.startCenter.y + ve.y - j.startPoint.y
          },
          j.projection
        );
      else if (j.kind === "scale") {
        const Oe = Math.hypot(ve.x - j.startCenter.x, ve.y - j.startCenter.y);
        Ne = dk(j.startSticker, j.startDistance, Oe);
      } else if (j.kind === "rotate") {
        const Oe = Math.atan2(ve.y - j.startCenter.y, ve.x - j.startCenter.x);
        Ne = hk(j.startSticker, j.startAngle, Oe, z.shiftKey === !0);
      }
      E.updateGesture({ type: "set-transform", value: Ne }), L();
      return;
    }
    !a || !It.state.drag.active || (Zn(z, Zt), It.moveDrag(z.clientX, z.clientY, "pano"));
  });
  const D = () => {
    var ve, Ne;
    if (!X && !j) {
      if (!It.state.drag.active) return;
      It.endDrag(), S.style.cursor = "grab", L();
      return;
    }
    if (!E) return;
    const z = (X == null ? void 0 : X.pointerId) ?? (j == null ? void 0 : j.pointerId);
    X = null, j = null;
    try {
      (ve = S.hasPointerCapture) != null && ve.call(S, z) && ((Ne = S.releasePointerCapture) == null || Ne.call(S, z));
    } catch {
    }
    E.cancelGesture(), S.style.cursor = "grab", L();
  }, B = (z, ve = !1) => {
    var Ne, Oe, je, Pe;
    if (!o) {
      if (!X) {
        if (!It.state.drag.active) return;
        Zn(z, Zt), (Ne = S.releasePointerCapture) == null || Ne.call(S, z.pointerId), S.style.cursor = "grab", It.endDrag(), L();
        return;
      }
      if (X.pointerId !== z.pointerId || !E) return;
      Zn(z, Zt), X = null, (Oe = S.releasePointerCapture) == null || Oe.call(S, z.pointerId), S.style.cursor = "grab", ve ? E.cancelGesture() : E.commitGesture(), si(z), L();
      return;
    }
    if (j) {
      if (j.pointerId !== z.pointerId || !E) return;
      Zn(z, Zt), j = null, (je = S.releasePointerCapture) == null || je.call(S, z.pointerId), S.style.cursor = "grab", ve ? E.cancelGesture() : E.commitGesture(), L();
      return;
    }
    !a || !It.state.drag.active || (Zn(z, Zt), (Pe = S.releasePointerCapture) == null || Pe.call(S, z.pointerId), S.style.cursor = "grab", It.endDrag(), L());
  };
  S.addEventListener("pointerup", B), S.addEventListener("pointercancel", (z) => B(z, !0)), S.addEventListener("lostpointercapture", D), S.addEventListener("pointerleave", (z) => {
    !o && X || j || It.state.drag.active && B(z);
  });
  const q = (z) => {
    const ve = document.activeElement;
    if (ve !== x && !x.contains(ve)) return;
    if (z.key === "Escape" && (X || j) && E) {
      D(), tf(z);
      return;
    }
    if (!o || z.key !== "Delete" && z.key !== "Backspace" || !E) return;
    const Ne = z.target, Oe = String((Ne == null ? void 0 : Ne.tagName) || "").toUpperCase();
    Oe === "INPUT" || Oe === "TEXTAREA" || Ne != null && Ne.isContentEditable || R.canDelete === !0 && (_e(), Ie(), E.apply({ type: "delete-selected" }) && L(), tf(z));
  };
  window.addEventListener("keydown", q, !0);
  const be = Fk({
    requestFrame: (z) => requestAnimationFrame(z),
    cancelFrame: (z) => cancelAnimationFrame(z),
    restore: (z) => MM(z)
  }), me = (z) => {
    var Ne, Oe, je, Pe, Ze, mt;
    if (!Zn(z, Zt)) return;
    if (!o) {
      const Dt = eo(Tn(e));
      if (Dt && Dt.locked !== !0 && E) {
        const or = Pf(z);
        or !== 0 && (ee || (Ie(), E.beginGesture(), ee = !0), E.updateGesture({
          type: "step-fov",
          direction: or
        }) ? (P && clearTimeout(P), P = setTimeout(Y, 180), L()) : E.hasGestureChanges() || (E.cancelGesture(), ee = !1));
      } else if (!Dt) {
        const or = qp();
        It.applyWheelEvent(z) && L(), be.schedule(or);
      }
      (Ne = z.preventDefault) == null || Ne.call(z), (Oe = z.stopPropagation) == null || Oe.call(z), (je = z.stopImmediatePropagation) == null || je.call(z);
      return;
    }
    if (!a) return;
    const ve = qp();
    It.applyWheelEvent(z) && L(), (Pe = z.preventDefault) == null || Pe.call(z), (Ze = z.stopPropagation) == null || Ze.call(z), (mt = z.stopImmediatePropagation) == null || mt.call(z), be.schedule(ve);
  }, ge = o ? [M, S] : [M];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((z) => {
    ge.forEach((ve) => ve.addEventListener(z, me, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((z) => {
    S.addEventListener(z, (ve) => Zn(ve, Zt)), M.addEventListener(z, (ve) => Zn(ve, Zt));
  });
  const ke = Vo(e, "state_json");
  let Me = null, xe = null;
  ke && !ke.__panoPreviewPatchedCb && (Me = ke.callback, xe = (z) => {
    const ve = Me ? Me(z) : void 0;
    return L(), ve;
  }, ke.callback = xe, ke.__panoPreviewPatchedCb = xe);
  const fe = Vo(e, "bg_color");
  let $e = null, Ee = null;
  fe && !fe.__panoPreviewPatchedCb && ($e = fe.callback, Ee = (z) => {
    const ve = $e ? $e(z) : void 0;
    return L(), ve;
  }, fe.callback = Ee, fe.__panoPreviewPatchedCb = Ee);
  const Ve = e.onRemoved, Ke = e.onResize, p = e.onExecuted, Le = e.onDragOver, st = e.onDragDrop;
  let Be = null;
  const Tt = () => {
    o && (R.dropActive = !0, Be && clearTimeout(Be), Be = setTimeout(() => {
      Be = null, R.dropActive = !1;
    }, 140));
  }, cn = o ? function(z) {
    return (Le ? Le.apply(this, arguments) : !1) === !0 ? !0 : qf(z == null ? void 0 : z.dataTransfer) ? (Tt(), !0) : !1;
  } : null, nn = o ? function(z) {
    var Oe;
    if ((st ? st.apply(this, arguments) : !1) === !0) return !0;
    const Ne = Array.from(((Oe = z == null ? void 0 : z.dataTransfer) == null ? void 0 : Oe.files) || []).find((je) => Ir(je));
    return Ne ? (Be && clearTimeout(Be), Be = null, R.dropActive = !1, U(Ne), !0) : !1;
  } : null;
  o && (e.onDragOver = cn, e.onDragDrop = nn);
  const $t = o ? Ok(x, {
    onActive: (z) => {
      if (z) {
        Tt();
        return;
      }
      Be && clearTimeout(Be), Be = null, R.dropActive = !1;
    },
    onDrop: (z) => {
      U(z);
    }
  }) : () => {
  }, Xn = function(z) {
    e.__panoOutputFromRun = !0;
    const ve = ty(e, z);
    ei(e, ve ? "executed" : "sync", z), L();
    const Ne = p ? p.apply(this, arguments) : void 0;
    return Na(e), Ne;
  };
  e.onExecuted = Xn;
  const Ce = e.onConnectionsChange, Ut = function(z, ve) {
    const Ne = Ap(e, z, ve, Vf), Oe = Ap(e, z, ve, Ni), je = arguments, Pe = Ce ? Ce.apply(this, je) : void 0, Ze = () => {
      C.destroyed || (Oe && oM(e), Ne && ei(e, "connection-change"), Na(e), L());
    };
    return Ze(), queueMicrotask(Ze), Pe;
  };
  e.onConnectionsChange = Ut;
  const $r = function() {
    const z = Ke ? Ke.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, L(), z;
  };
  e.onResize = $r;
  const Vr = function() {
    return ro(), Qu.unregister(this), Ve ? Ve.apply(this, arguments) : void 0;
  };
  e.onRemoved = Vr;
  const ro = () => {
    var z, ve, Ne, Oe, je, Pe, Ze, mt, Dt;
    C.destroyed = !0, (z = it == null ? void 0 : it.disconnect) == null || z.call(it), o ? Ie() : Fe(), S.removeEventListener("lostpointercapture", D), $t(), F(), window.removeEventListener("keydown", q, !0), (Ne = (ve = e.__panoStateFlushers) == null ? void 0 : ve.delete) == null || Ne.call(ve, St), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Oe = E == null ? void 0 : E.destroy) == null || Oe.call(E), (je = pt == null ? void 0 : pt.unmount) == null || je.call(pt), H && (H.playback.dispose(), H.video.remove(), H.stickerVideo.remove(), e.__panoSurfacePlayback === H && (e.__panoSurfacePlayback = null)), O.dispose(), e.__panoSurfaceScene = null, (Ze = (Pe = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Pe.dispose) == null || Ze.call(Pe), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, le(), be.dispose(), Be && clearTimeout(Be), Be = null, Jf.disposeOwner(e), zo(e), C.raf && cancelAnimationFrame(C.raf), C.raf = 0, ((mt = e.__panoCutoutNodeSurface) == null ? void 0 : mt.session) === E && (e.__panoCutoutNodeSurface = null), ((Dt = e.__panoStickersNodeSurface) == null ? void 0 : Dt.session) === E && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === $r && (e.onResize = Ke), e.onExecuted === Xn && (e.onExecuted = p), e.onConnectionsChange === Ut && (e.onConnectionsChange = Ce), xe && (ke == null ? void 0 : ke.callback) === xe && (ke.callback = Me), xe && (ke == null ? void 0 : ke.__panoPreviewPatchedCb) === xe && delete ke.__panoPreviewPatchedCb, Ee && (fe == null ? void 0 : fe.callback) === Ee && (fe.callback = $e), Ee && (fe == null ? void 0 : fe.__panoPreviewPatchedCb) === Ee && delete fe.__panoPreviewPatchedCb, e.onDragOver === cn && (e.onDragOver = Le), e.onDragDrop === nn && (e.onDragDrop = st), e.onRemoved === Vr && (e.onRemoved = Ve);
  };
  e.__panoDomRestore = ro, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = E && sn && !o ? { session: E, model: R } : null, e.__panoStickersNodeSurface = E && sn && o ? { session: E, model: R } : null, e.__panoDomPreview = {
    widget: K,
    root: x,
    canvas: S,
    requestDraw: L,
    state: C,
    emptyHintEl: v,
    nodeSurface: e.__panoCutoutNodeSurface
  }, Qu.register(e), e.graph && ei(e, "attach"), L();
}
function Zp(e, t = {}) {
  q0(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Qp(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (X0(e) && !n) {
    Zf(e);
    return;
  }
  q0(e).attach(t);
}
function OM(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function FM(e, t = 1, n = Mp) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), f = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, b = Number(n), g = Number.isFinite(b) && b > 0 ? b : Mp, w = Math.max(f, d), x = w > 0 ? Math.min(1, g / w) : 1;
  return {
    width: Math.max(1, Math.round(f * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function TM({
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
    const S = d();
    return S === f || (f = S, o(S)), S;
  }, g = () => b();
  return (M = t == null ? void 0 : t.addEventListener) == null || M.call(t, "fullscreenchange", g), b(), { toggle: async () => {
    var S;
    if (c || !e || !t) return !1;
    if (d()) {
      try {
        await ((S = t.exitFullscreen) == null ? void 0 : S.call(t));
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
    var S, v, F;
    if (!c) {
      if (c = !0, (S = t == null ? void 0 : t.removeEventListener) == null || S.call(t, "fullscreenchange", g), d())
        try {
          const $ = (v = t.exitFullscreen) == null ? void 0 : v.call(t);
          (F = $ == null ? void 0 : $.catch) == null || F.call($, () => {
          });
        } catch {
        }
      f = !1, o(!1);
    }
  } };
}
const DM = { class: "pano-preview-node-surface" }, LM = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ie(), ce("div", DM, [
      De(on, {
        icon: e.model.fullscreen ? Qe(Ae).fullscreen_close : Qe(Ae).fullscreen,
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
      e.model.viewUnavailable ? (ie(), Rr(Bf, { key: 0 })) : ct("", !0)
    ]));
  }
}, Is = 140, RM = 180, em = 40, lu = 10;
function tm(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function nm(e, t) {
  const n = tm(e), r = tm(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function rm(e) {
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
function jo(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return jo(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return rm({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = jo(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : rm(e);
}
function ny(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function $M(e) {
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
function nf(e) {
  var o;
  const t = (o = Er) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (nm(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (nm(a, n)) return t[a];
  return null;
}
function VM(e) {
  var r, o;
  const t = nf(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const f = jo(c);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function zM(e, t = "erp_image") {
  var M, S, v, F, $, K, C;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((L) => String((L == null ? void 0 : L.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((L, O) => String((L == null ? void 0 : L.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(O))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (v = (S = (M = Er) == null ? void 0 : M.graph) == null ? void 0 : S.getNodeById) == null ? void 0 : v.call(S, a), f = nf(a), d = nf(e == null ? void 0 : e.id), b = [
    (F = d == null ? void 0 : d.ui) == null ? void 0 : F.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    f == null ? void 0 : f.images,
    ($ = f == null ? void 0 : f.ui) == null ? void 0 : $.pano_input_images,
    f == null ? void 0 : f.pano_input_images
  ];
  for (const L of b)
    if (Array.isArray(L))
      for (const O of L) {
        const R = jo(O);
        if (R) return R;
      }
  let g = [];
  try {
    g = typeof ((K = Er) == null ? void 0 : K.getNodeImageUrls) == "function" ? Er.getNodeImageUrls(c) || [] : [];
  } catch {
    g = [];
  }
  if (Array.isArray(g) && g.length > 0)
    for (const L of g) {
      const O = jo(L);
      if (O) return O;
    }
  if (c) {
    const L = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const O of L) {
      const R = jo(O);
      if (R) return R;
    }
  }
  const w = (C = c == null ? void 0 : c.widgets) == null ? void 0 : C.find((L) => String((L == null ? void 0 : L.name) || "").toLowerCase() === "image"), x = String((w == null ? void 0 : w.value) || "").trim();
  return x ? jt.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function cu(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function im(e, t, n, r, o, a, c) {
  var b, g, w;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !ny(a) || n <= 1 || r <= 1) {
    cu(t, n, r);
    return;
  }
  if (c.failed) {
    cu(t, n, r);
    return;
  }
  const f = Number(((w = (g = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : g.call(b, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : w.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: bl(o, n, r),
    background: { media: a, revision: $M(a), coverage: f },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : cu(t, n, r);
}
function om(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class jM {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = c0(() => this.requestDraw()), this.controller = Af({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Bt(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: J(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: J(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${Is}px`,
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
          return Is;
        },
        getHeight() {
          return Is;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Sl(Xu(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Is, Number(a.minHeight || 0)),
            minWidth: Math.max(RM, Number(a.minWidth || 0))
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
      return Yf(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Xo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = TM({
        root: this.root,
        documentRef: document,
        onChange: (f) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = f), this.requestDraw();
        },
        onFallback: () => {
          var f, d;
          return (d = (f = this.options).onOpen) == null ? void 0 : d.call(f, this.node);
        }
      }), this.surfaceApp = Sf(LM, {
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = wg(n), t.addEventListener("pointerdown", (a) => {
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
      OM(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !ny(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return om(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      const a = uM(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !om(a.x, a.y, c))
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
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - lu * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - em - lu);
    return { x: lu, y: em, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), im(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? l0 : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = FM(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = VM(this.node);
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
    const n = zM(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), im(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, f, d, b, g, w, x, M, S, v, F, $;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (f = this.wheelCaptureCleanup) == null || f.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (w = (g = this.surfaceHost) == null ? void 0 : g.remove) == null || w.call(g), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (S = (M = this.root) == null ? void 0 : M.remove) == null || S.call(M);
    } catch {
    }
    try {
      U0(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = (($ = (F = (v = this.node) == null ? void 0 : v.widgets) == null ? void 0 : F.find) == null ? void 0 : $.call(F, (K) => (K == null ? void 0 : K.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function HM(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new jM(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function ry(e, t, n) {
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
function ed(e) {
  return !!(e != null && e.prototype);
}
function Ba(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function GM(e, t = {}) {
  ed(e) || HM(e, {
    ...t,
    onOpen: Ba(e, t.onOpen)
  });
}
function KM(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!ed(e)) {
    Qp(e, {
      ...r,
      onOpen: Ba(e, t.onOpen)
    });
    return;
  }
  ry(e, "stickers_node_preview", (o) => {
    Qp(o, {
      ...r,
      onOpen: Ba(o, t.onOpen)
    });
  });
}
function BM(e, t = {}) {
  if (!ed(e)) {
    Zp(e, {
      ...t,
      onOpen: Ba(e, t.onOpen)
    });
    return;
  }
  ry(e, "cutout_preview", (n) => {
    Zp(n, {
      ...t,
      onOpen: Ba(n, t.onOpen)
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
}, Br = "pen";
function am(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function WM(e = 80, t = null, n = 8) {
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
function xo(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function UM(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function YM({
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
  var C, L;
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
  const w = ((C = t.find((O) => o(e.paintColor, O.color))) == null ? void 0 : C.id) || "", x = !w, M = a(e.customPaintColor), S = Math.round(Math.max(0, Math.min(1, Number(((L = e.customPaintColor) == null ? void 0 : L.a) ?? 1))) * 100), v = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), F = e.brushSizes[v] ?? 10, $ = d(), K = Array.from({ length: 8 }, (O, R) => e.customPaintHistory[R] || null);
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
    alphaValue: S,
    alphaText: `${S}%`,
    historyEntries: K.map((O, R) => ({
      index: R,
      color: O ? { cssColor: r(O, 1) } : null
    })),
    sizeValue: F,
    sizeText: String(F),
    sizeFill: `${Math.max(0, Math.min(100, (F - 1) / 119 * 100))}%`,
    sizeDisabled: $,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function XM({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function qM({
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
function JM({
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
  let S = [];
  if (n.length > 1)
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!f },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f }
    ];
  else if (e === "stickers" || r === "image") {
    if (S = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!f },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!f }
    ], g(t) || (S.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: M.duplicate }), S.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: M.replace_image })), g(t)) {
      const R = x(), H = w(t);
      S.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: R ? "Back to initial position" : "Already at initial position",
        icon: M.back_initial,
        disabled: !R
      }), S.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: H ? "Show" : "Hide",
        tip: H ? "Show input image" : "Hide input image",
        icon: H ? M.eye : M.eye_dashed
      });
    }
    S.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: f ? "Unlock" : "Lock", tip: f ? "Unlock" : "Lock", icon: f ? M.lock_open : M.lock_closed }), g(t) || S.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!f });
  } else
    S = [
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
  const v = o.corners.map((R) => ({ x: Number(R == null ? void 0 : R.x), y: Number(R == null ? void 0 : R.y) })).filter((R) => Number.isFinite(R.x) && Number.isFinite(R.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const F = v.map((R) => R.x), $ = v.map((R) => R.y), K = Math.min(...F), C = Math.max(...F), L = Math.min(...$), O = Math.max(...$);
  return {
    visible: !0,
    left: (K + C) * 0.5,
    top: O + 18,
    items: S,
    anchor: { minX: K, maxX: C, minY: L, maxY: O }
  };
}
const ZM = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function QM(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: c, playing: f, label: d, audio: b = null, fpsLocked: g = !1 }) {
  const w = (S, v, F, $, K) => {
    const C = (L) => (r == null ? void 0 : r.owner) === S && r.lane === L ? r.frames.map((O) => O + K) : [];
    return {
      id: S,
      label: F,
      clip: $,
      selected: S === o,
      open: c.has(S),
      keyed: Px(v, t - K),
      keys: Nx(v).map((L) => ({ frame: L.frame + K, full: L.full })),
      selectedFrames: C(null),
      lanes: no(v).map((L) => ({
        key: `${S}:${L}`,
        lane: L,
        label: ZM[L],
        frames: v[L].keyframes.map((O) => O.frame + K),
        selectedFrames: C(L)
      }))
    };
  }, x = e.stickers.filter((S) => S.placement === "sky").sort((S, v) => v.z_index - S.z_index), M = e.stickers.filter((S) => S.placement === "world");
  return {
    visible: !0,
    expanded: a,
    playing: f,
    hasAudio: !!b,
    muted: !!(b != null && b.muted),
    frame: t,
    span: n,
    label: d,
    fps: e.timeline.fps,
    fpsLocked: g,
    length: e.timeline.length,
    rows: [
      w("camera", e.camera, "Camera", null, 0),
      ...[...x, ...M].map((S) => {
        const { start: v, in: F, duration: $ } = S.clip;
        return w(S.id, S, Qg(S), { start: v, end: $ === null ? null : v + $ }, v - F);
      })
    ]
  };
}
function eN(e, t, n, r) {
  const o = Ix(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const tN = { class: "pano-floating-right" }, nN = ["data-settled"], rN = ["data-ready", "data-settled"], iN = ["aria-label", "data-tip"], oN = {
  key: 1,
  class: "pano-camera-preview-label"
}, aN = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce(Ye, null, [
      G("div", tN, [
        (ie(!0), ce(Ye, null, xt(e.buttons, (r) => (ie(), Rr(on, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      xi(G("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        G("div", {
          class: at(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: wt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = G("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            G("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (ie(), ce("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            De(Ct, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, iN)) : ct("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ie(), ce("div", oN, rt(e.preview.label || "Preview unavailable"), 1)) : ct("", !0)
        ], 14, rN)
      ], 8, nN), [
        [qo, e.preview.visible]
      ])
    ], 64));
  }
}, sN = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, lN = ["y2", "transform"], cN = ["transform"], uN = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = ut(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => xi((ie(), ce("div", {
      class: at(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ie(), ce("svg", sN, [
        a[1] || (a[1] = G("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ie(!0), ce(Ye, null, xt(Qe(n), (c) => (ie(), ce("line", {
          key: c,
          class: at(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, lN))), 128)),
        G("g", { transform: r.value }, [...a[0] || (a[0] = [
          G("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, cN),
        a[2] || (a[2] = G("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [qo, e.model.visible === !0]
    ]);
  }
}, fN = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", {
      class: at(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      De(H0, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      De(on, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      De(uN, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, dN = ["aria-label"], hN = { class: "pano-canvas-confirm-title" }, pN = { class: "pano-canvas-confirm-text" }, mN = { class: "pano-canvas-confirm-actions" }, gN = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, yN = {
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
      const M = x.querySelector(`[data-action='${w}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function f() {
      var v;
      const w = r.value;
      if (!w) return;
      const x = w.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const S = a()[0] || w;
      (v = S == null ? void 0 : S.focus) == null || v.call(S);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(w) {
      var $;
      if (w.defaultPrevented) return;
      if (w.key === "Escape") {
        w.preventDefault(), w.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (w.key !== "Tab") return;
      const x = a(), M = r.value;
      if (!x.length) {
        w.preventDefault(), ($ = M == null ? void 0 : M.focus) == null || $.call(M);
        return;
      }
      const S = x[0], v = x[x.length - 1], F = document.activeElement;
      if (w.shiftKey) {
        (F === S || F === M || !(M != null && M.contains(F))) && (w.preventDefault(), v.focus());
        return;
      }
      (F === v || !(M != null && M.contains(F))) && (w.preventDefault(), S.focus());
    }
    function g(w) {
      w.target === n.value && c("confirm-cancel");
    }
    return Yi(() => t.model.visible, (w, x) => {
      if (w) {
        o = document.activeElement, Ll(() => {
          f();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), Ya(() => {
      d();
    }), (w, x) => e.model.visible === !0 ? (ie(), ce("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: At(g, ["self"])
    }, [
      G("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        G("div", hN, rt(e.model.title), 1),
        G("div", pN, rt(e.model.text), 1),
        G("div", mN, [
          x[0] || (x[0] = G("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          G("button", gN, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, dN)
    ], 512)) : ct("", !0);
  }
}, bN = ["data-paint-pane"], vN = ["hidden"], _N = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], wN = ["aria-pressed", "disabled"], xN = ["hidden"], SN = { class: "pano-paint-color-pop-head" }, kN = { class: "pano-paint-color-field" }, MN = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, NN = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, PN = { class: "pano-paint-color-field" }, AN = { class: "pano-paint-alpha-wrap" }, CN = ["value"], IN = { "data-paint-alpha-value": "" }, EN = ["hidden"], ON = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, FN = ["data-paint-history-index", "aria-label", "disabled"], TN = ["data-paint-footer"], DN = ["data-paint-group"], LN = ["hidden"], RN = ["value", "disabled"], $N = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, VN = ["hidden"], zN = {
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
      class: at(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ie(!0), ce(Ye, null, xt(e.panes, (a) => {
        var c;
        return ie(), ce("div", {
          key: a.key,
          class: at(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ie(), ce("div", {
            key: 0,
            class: at(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ie(!0), ce(Ye, null, xt(e.paintSwatches, (f) => (ie(), ce("button", {
              key: f.id,
              class: at(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: wt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, _N))), 128)),
            G("button", {
              class: at(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: wt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, wN),
            G("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: wt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              G("div", SN, [
                G("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: wt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = G("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              G("div", kN, [
                G("div", MN, [
                  G("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: wt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                G("div", NN, [
                  G("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: wt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              G("label", PN, [
                o[1] || (o[1] = G("span", null, "Opacity", -1)),
                G("div", AN, [
                  G("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, CN),
                  G("span", IN, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              G("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                G("div", ON, [
                  (ie(!0), ce(Ye, null, xt(e.state.historyEntries || [], (f) => (ie(), ce("button", {
                    key: f.index,
                    class: at(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: wt(n(f.color))
                  }, null, 14, FN))), 128))
                ])
              ], 8, EN)
            ], 12, xN)
          ], 10, vN)) : ct("", !0),
          G("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            G("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (ie(!0), ce(Ye, null, xt(a.tools, (f) => {
                var d;
                return ie(), Rr(on, {
                  key: `${a.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, DN),
            G("div", {
              class: at(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              G("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: wt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, RN),
              G("span", $N, rt(e.state.sizeText || "10"), 1)
            ], 10, LN),
            G("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              De(on, {
                icon: Qe(Ae).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, VN)
          ], 8, TN)
        ], 10, bN);
      }), 128))
    ], 2));
  }
}, jN = {
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
    return t({ getRefs: a }), (c, f) => (ie(), ce(Ye, null, [
      G("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      G("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        G("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, HN = {
  key: 0,
  class: "pano-cutout-menu"
}, GN = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, KN = ["data-aspect"], BN = ["data-action", "aria-label", "data-tip", "disabled"], WN = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: wt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ie(!0), ce(Ye, null, xt(e.model.items || [], (r) => (ie(), ce(Ye, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ie(), ce("div", HN, [
          G("button", GN, [
            De(Ct, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          G("div", {
            class: at(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ie(!0), ce(Ye, null, xt(r.choices || [], (o) => (ie(), ce("button", {
              key: o.value,
              class: at(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, rt(o.label), 11, KN))), 128))
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
          De(Ct, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, BN))
      ], 64))), 128))
    ], 4));
  }
}, UN = {
  key: 0,
  class: "pano-easing"
}, YN = { class: "pano-section-title" }, XN = { class: "pano-easing-range" }, qN = { class: "pano-easing-modes" }, JN = ["aria-pressed", "onClick"], ZN = ["viewBox"], QN = ["x", "y"], eP = ["x1", "y1", "x2", "y2"], tP = ["d"], nP = ["x1", "y1", "x2", "y2"], rP = ["x1", "y1", "x2", "y2"], iP = ["cx", "cy"], oP = ["cx", "cy"], aP = { class: "pano-easing-note" }, Wr = 132, $i = 14, sP = {
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
    ], a = /* @__PURE__ */ Ht(null), c = ut(() => {
      var S;
      return Array.isArray((S = n.model) == null ? void 0 : S.easing) ? n.model.easing : null;
    }), f = (S) => $i + S * Wr, d = (S) => $i + (1 - S) * Wr, b = ut(() => {
      var K;
      if (((K = n.model) == null ? void 0 : K.easing) === "hold") return `M${f(0)} ${d(0)} H${f(1)} V${d(1)}`;
      const [S, v, F, $] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${f(0)} ${d(0)} C${f(S)} ${d(v)} ${f(F)} ${d($)} ${f(1)} ${d(1)}`;
    }), g = ut(() => c.value ? c.value.map((S) => S.toFixed(2)).join(", ") : "");
    function w(S) {
      var v;
      return JSON.stringify(S.easing) === JSON.stringify((v = n.model) == null ? void 0 : v.easing);
    }
    function x(S, v) {
      r("timeline", { type: "easing", easing: S, commit: v });
    }
    function M(S, v) {
      var L;
      if (S.button !== 0 || !c.value) return;
      const F = S.currentTarget;
      (L = F.setPointerCapture) == null || L.call(F, S.pointerId);
      let $ = null;
      const K = (O) => {
        const R = a.value.getBoundingClientRect(), H = R.width / (Wr + $i * 2), Q = ((O.clientX - R.left) / H - $i) / Wr, _e = 1 - ((O.clientY - R.top) / H - $i) / Wr;
        $ = [...$ || c.value], $[v] = Math.round(Math.min(1, Math.max(0, Q)) * 100) / 100, $[v + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, x($, !1);
      }, C = () => {
        F.removeEventListener("pointermove", K), F.removeEventListener("pointerup", C), F.removeEventListener("pointercancel", C), $ && x($, !0);
      };
      F.addEventListener("pointermove", K), F.addEventListener("pointerup", C), F.addEventListener("pointercancel", C);
    }
    return (S, v) => e.model ? (ie(), ce("div", UN, [
      G("div", YN, [
        v[2] || (v[2] = G("span", null, "Easing", -1)),
        G("span", XN, rt(e.model.label), 1)
      ]),
      G("div", qN, [
        (ie(), ce(Ye, null, xt(o, (F) => G("button", {
          key: F.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": w(F) ? "true" : "false",
          onClick: ($) => x(F.easing, !0)
        }, rt(F.label), 9, JN)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ie(), ce("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Wr + $i * 2} ${Wr + $i * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        G("rect", {
          class: "pano-easing-square",
          x: f(0),
          y: d(1),
          width: Wr,
          height: Wr
        }, null, 8, QN),
        G("line", {
          class: "pano-easing-diagonal",
          x1: f(0),
          y1: d(0),
          x2: f(1),
          y2: d(1)
        }, null, 8, eP),
        G("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, tP),
        c.value ? (ie(), ce(Ye, { key: 0 }, [
          G("line", {
            class: "pano-easing-arm",
            x1: f(0),
            y1: d(0),
            x2: f(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, nP),
          G("line", {
            class: "pano-easing-arm",
            x1: f(1),
            y1: d(1),
            x2: f(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, rP),
          G("circle", {
            class: "pano-easing-handle",
            cx: f(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: v[0] || (v[0] = (F) => M(F, 0))
          }, null, 40, iP),
          G("circle", {
            class: "pano-easing-handle",
            cx: f(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: v[1] || (v[1] = (F) => M(F, 2))
          }, null, 40, oP)
        ], 64)) : ct("", !0)
      ], 8, ZN)) : ct("", !0),
      G("div", aP, [
        e.model.mixed ? (ie(), ce(Ye, { key: 0 }, [
          wa("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ie(), ce(Ye, { key: 1 }, [
          wa("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ie(), ce(Ye, { key: 2 }, [
          wa("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ie(), ce(Ye, { key: 3 }, [
          wa("cubic-bezier(" + rt(g.value) + ")", 1)
        ], 64)) : ct("", !0)
      ])
    ])) : ct("", !0);
  }
}, lP = {
  class: "pano-side",
  "data-side": ""
}, cP = { class: "pano-side-head" }, uP = { class: "pano-side-title" }, fP = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, dP = {
  key: 0,
  class: "pano-side-scroll"
}, hP = { class: "pano-inspector" }, pP = { class: "pano-ui-row pano-coverage-row" }, mP = ["data-selected"], gP = ["aria-pressed", "disabled"], yP = ["aria-pressed", "disabled"], bP = {
  key: 0,
  class: "pano-section-title"
}, vP = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, _P = {
  class: "pano-picker",
  "data-picker": "selection"
}, wP = ["disabled"], xP = { class: "pano-picker-label" }, SP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, kP = ["hidden"], MP = ["data-selection-id"], NP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, PP = {
  key: 2,
  class: "pano-state-actions"
}, AP = ["disabled"], CP = ["data-key"], IP = ["min", "max", "step", "value", "disabled", "data-param-key"], EP = ["min", "max", "step", "value", "disabled", "data-param-key"], OP = { class: "pano-visibility-section" }, FP = { class: "pano-visibility-stack" }, TP = ["data-visibility-row"], DP = { class: "pano-visibility-name" }, LP = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, RP = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], $P = ["open"], VP = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, zP = { class: "pano-ui-settings-body" }, jP = { class: "pano-ui-row" }, HP = ["data-selected"], GP = ["aria-pressed"], KP = ["aria-pressed"], BP = { class: "pano-ui-row" }, WP = ["data-selected"], UP = ["aria-pressed"], YP = ["aria-pressed"], XP = {
  key: 1,
  class: "pano-side-footer"
}, qP = ["data-action"], JP = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = ut(() => {
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
      return ie(), ce("div", lP, [
        G("div", cP, [
          G("div", uP, [
            G("span", fP, [
              De(Ct, {
                icon: Qe(Ae).globe
              }, null, 8, ["icon"])
            ]),
            G("span", null, rt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = G("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = G("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ie(), ce("div", dP, [
          G("div", hP, [
            d[11] || (d[11] = G("div", { class: "pano-section-title" }, [
              G("span", null, "Scene")
            ], -1)),
            G("div", pP, [
              d[2] || (d[2] = G("label", null, "Coverage", -1)),
              G("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((b = e.model.coverage) == null ? void 0 : b.value) === 180 ? "1" : "0"
              }, [
                G("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((g = e.model.coverage) == null ? void 0 : g.value) === 360 ? "true" : "false",
                  disabled: ((w = e.model.coverage) == null ? void 0 : w.disabled) === !0
                }, "360", 8, gP),
                G("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 180 ? "true" : "false",
                  disabled: ((M = e.model.coverage) == null ? void 0 : M.disabled) === !0
                }, "180", 8, yP)
              ], 8, mP)
            ]),
            e.model.transformTitle !== !1 ? (ie(), ce("div", bP, [...d[3] || (d[3] = [
              G("span", null, "Transform", -1)
            ])])) : ct("", !0),
            e.model.selectionPicker ? (ie(), ce("div", vP, [
              G("label", null, rt(e.model.selectionPicker.label), 1),
              G("div", _P, [
                G("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  G("span", xP, [
                    e.model.selectionPicker.currentIcon ? (ie(), ce("span", SP, [
                      De(Ct, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    G("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = G("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, wP),
                G("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ie(!0), ce(Ye, null, xt(e.model.selectionPicker.items || [], (S) => (ie(), ce("button", {
                    key: S.id,
                    type: "button",
                    class: at(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (ie(), ce("span", NP, [
                      De(Ct, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    G("span", null, rt(S.label), 1)
                  ], 10, MP))), 128))
                ], 8, kP)
              ])
            ])) : ct("", !0),
            e.model.copyStateButton ? (ie(), ce("div", PP, [
              G("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                De(Ct, {
                  icon: Qe(Ae).copy
                }, null, 8, ["icon"]),
                G("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, AP)
            ])) : ct("", !0),
            G("div", {
              class: at(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ie(!0), ce(Ye, { key: 0 }, xt(e.model.notes, (S) => (ie(), ce("div", {
                key: S,
                class: "pano-param-note"
              }, rt(S), 1))), 128)) : (ie(!0), ce(Ye, { key: 1 }, xt(e.model.params || [], (S) => (ie(), ce("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                G("label", null, rt(S.label), 1),
                G("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: c(S, e.model),
                  style: wt(a(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, IP),
                G("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: c(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, EP)
              ], 8, CP))), 128))
            ], 2),
            De(sP, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (S) => r("timeline", S))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (ie(), ce(Ye, { key: 3 }, [
              d[6] || (d[6] = G("div", { class: "pano-divider" }, null, -1)),
              G("div", OP, [
                d[5] || (d[5] = G("div", { class: "pano-section-title" }, [
                  G("span", null, "Layers")
                ], -1)),
                G("div", FP, [
                  (ie(!0), ce(Ye, null, xt(e.model.visibilityRows, (S) => (ie(), ce("div", {
                    key: S.key,
                    class: at(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    G("span", DP, [
                      G("span", LP, [
                        De(Ct, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      G("span", null, rt(S.label), 1)
                    ]),
                    G("button", {
                      class: at(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      De(Ct, {
                        icon: S.visible === !0 ? Qe(Ae).eye : Qe(Ae).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, RP)
                  ], 10, TP))), 128))
                ])
              ])
            ], 64)) : ct("", !0),
            e.model.uiSettings ? (ie(), ce("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              G("summary", null, [
                d[7] || (d[7] = G("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                G("span", VP, [
                  De(Ct, {
                    icon: Qe(Ae).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              G("div", zP, [
                G("div", jP, [
                  d[8] || (d[8] = G("label", null, "Drag X", -1)),
                  G("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    G("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, GP),
                    G("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, KP)
                  ], 8, HP)
                ]),
                G("div", BP, [
                  d[9] || (d[9] = G("label", null, "Drag Y", -1)),
                  G("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    G("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, UP),
                    G("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, YP)
                  ], 8, WP)
                ]),
                d[10] || (d[10] = G("div", { class: "pano-ui-row" }, [
                  G("span"),
                  G("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, $P)) : ct("", !0)
          ])
        ])) : ct("", !0),
        (e.model.footerButtons || []).length ? (ie(), ce("div", XP, [
          (ie(!0), ce(Ye, null, xt(e.model.footerButtons, (S) => (ie(), ce("button", {
            key: S.action,
            class: at(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, rt(S.label), 11, qP))), 128))
        ])) : ct("", !0)
      ]);
    };
  }
}, ZP = { class: "pano-timeline-bar" }, QP = ["aria-label", "data-tip"], e2 = ["aria-label", "data-tip"], t2 = { class: "pano-timeline-time" }, n2 = ["data-tip"], r2 = { key: 0 }, i2 = ["value"], o2 = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, a2 = ["value"], s2 = ["aria-expanded"], l2 = ["inert"], c2 = { class: "pano-timeline-name" }, u2 = ["aria-expanded", "aria-label", "onClick"], f2 = ["title", "aria-current", "onClick"], d2 = ["data-keyed", "aria-label", "onClick"], h2 = ["onPointerdown"], p2 = ["onPointerdown"], m2 = ["onPointerdown"], g2 = ["onPointerdown"], y2 = ["aria-label", "data-tip", "onPointerdown"], b2 = { key: 0 }, v2 = ["onPointerdown"], _2 = ["aria-label", "data-tip", "onPointerdown"], w2 = { key: 0 }, x2 = 10, S2 = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Ht(null), c = /* @__PURE__ */ Ht(null), f = /* @__PURE__ */ Ht(1), d = /* @__PURE__ */ Ht(0), b = /* @__PURE__ */ Ht(!1);
    let g = null, w = null, x = null;
    $l(() => {
      g = new ResizeObserver(([U]) => {
        f.value = Math.max(1, U.contentRect.width);
      }), a.value && g.observe(a.value), w = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), c.value && w.observe(c.value);
    }), Ya(() => {
      g == null || g.disconnect(), w == null || w.disconnect(), x == null || x();
    });
    const M = ut(() => Math.max(1, Number(n.model.span || 1))), S = ut(() => f.value / M.value), v = (U) => `${U / M.value * 100}%`, F = ut(() => {
      const U = o.find((j) => j * S.value >= 56) || o[o.length - 1], X = [];
      for (let j = 0; j < M.value; j += U) X.push(j);
      return X;
    });
    function $(U) {
      const X = a.value.getBoundingClientRect(), j = Math.floor((U - X.left) / Math.max(1, X.width) * M.value);
      return Math.min(M.value - 1, Math.max(0, j));
    }
    function K(U, X, j) {
      const P = Math.ceil(x2 / Math.max(1e-6, S.value)), ee = new Map(X.map((Y) => [Y.frame, Y.full]));
      return Dx(X.map((Y) => Y.frame), P).map((Y, Ie) => ({
        ...Y,
        key: `${U}:${Ie}`,
        partial: Y.frames.some((Fe) => !ee.get(Fe)),
        selected: Y.frames.some((Fe) => j.includes(Fe))
      }));
    }
    function C(U) {
      return K(U.id, U.keys, U.selectedFrames);
    }
    function L(U) {
      return K(U.key, U.frames.map((X) => ({ frame: X, full: !0 })), U.selectedFrames);
    }
    function O(U) {
      const X = U.end === null ? M.value : U.end;
      return { left: v(U.start), width: v(Math.max(0, X - U.start)) };
    }
    function R(U, X) {
      const j = U.clientX, P = Math.max(1e-6, S.value);
      let ee = 0;
      X("start", 0, U);
      const Y = (Fe) => {
        if (Fe.pointerId !== U.pointerId) return;
        const St = Math.round((Fe.clientX - j) / P);
        St !== ee && (ee = St, X("move", ee, Fe));
      }, Ie = (Fe) => {
        Fe.pointerId === U.pointerId && (x(), X("end", ee, Fe));
      };
      x == null || x(), x = () => {
        window.removeEventListener("pointermove", Y), window.removeEventListener("pointerup", Ie), window.removeEventListener("pointercancel", Ie), x = null;
      }, window.addEventListener("pointermove", Y), window.addEventListener("pointerup", Ie), window.addEventListener("pointercancel", Ie);
    }
    function H(U) {
      U.button === 0 && R(U, (X, j, P) => r("action", { type: "seek", frame: $(P.clientX), phase: X }));
    }
    function Q(U, X, j) {
      U.button === 0 && (r("action", { type: "select-row", id: X.id }), R(U, (P, ee) => r("action", { type: "clip", id: X.id, mode: j, delta: ee, phase: P })));
    }
    function _e(U, X, j, P, ee) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: X.id, lane: j, frames: P.frames, additive: !0 });
          return;
        }
        P.frames.every((Y) => ee.includes(Y)) || r("action", { type: "select-keys", owner: X.id, lane: j, frames: P.frames, additive: !1 }), R(U, (Y, Ie) => r("action", { type: "move-keys", delta: Ie, phase: Y }));
      }
    }
    const T = ut(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function E(U, X, j) {
      r("action", X), await Ll(), U.target.value = j();
    }
    function se(U) {
      E(U, { type: "fps", fps: Number(U.target.value) }, () => T.value);
    }
    function le(U) {
      const X = U.target.value.trim();
      E(U, { type: "length", length: X ? Number(X) : null }, () => n.model.length ?? "");
    }
    function ue(U, X, j) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: X.id, lane: j, frames: [], additive: !1 });
    }
    return (U, X) => xi((ie(), ce("section", {
      class: at(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      G("div", ZP, [
        G("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: X[0] || (X[0] = (j) => r("action", { type: "play" }))
        }, [
          De(Ct, {
            icon: e.model.playing ? Qe(Ae).pause : Qe(Ae).play
          }, null, 8, ["icon"])
        ], 8, QP),
        e.model.hasAudio ? (ie(), ce("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: X[1] || (X[1] = (j) => r("action", { type: "mute" }))
        }, [
          De(Ct, {
            icon: e.model.muted ? Qe(Ae).volume_muted : Qe(Ae).volume2
          }, null, 8, ["icon"])
        ], 8, e2)) : ct("", !0),
        G("span", t2, rt(e.model.label), 1),
        G("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (ie(), ce("span", r2, rt(T.value), 1)) : (ie(), ce("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: T.value,
            "aria-label": "Timeline fps",
            onChange: se
          }, null, 40, i2)),
          X[6] || (X[6] = G("span", null, "fps", -1))
        ], 8, n2),
        G("label", o2, [
          X[7] || (X[7] = G("span", null, "Length", -1)),
          G("input", {
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: le
          }, null, 40, a2)
        ]),
        G("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: X[2] || (X[2] = (j) => r("action", { type: "toggle-expanded" }))
        }, [
          X[8] || (X[8] = G("span", null, "Timeline", -1)),
          De(Ct, {
            icon: Qe(Ae).chevron
          }, null, 8, ["icon"])
        ], 8, s2)
      ]),
      G("div", {
        class: at(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: wt({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: X[3] || (X[3] = At((j) => b.value = !0, ["self"])),
        onTransitionend: X[4] || (X[4] = At((j) => b.value = !1, ["self"])),
        onTransitioncancel: X[5] || (X[5] = At((j) => b.value = !1, ["self"]))
      }, [
        G("div", {
          ref_key: "gridRef",
          ref: c,
          class: "pano-timeline-grid"
        }, [
          X[9] || (X[9] = G("div", { class: "pano-timeline-corner" }, null, -1)),
          G("div", {
            ref_key: "rulerRef",
            ref: a,
            class: "pano-timeline-ruler",
            onPointerdown: H
          }, [
            (ie(!0), ce(Ye, null, xt(F.value, (j) => (ie(), ce("span", {
              key: j,
              class: "pano-timeline-tick",
              style: wt({ left: v(j) })
            }, rt(j), 5))), 128)),
            G("span", {
              class: "pano-timeline-playhead",
              style: wt({ left: v(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (ie(!0), ce(Ye, null, xt(e.model.rows || [], (j) => (ie(), ce(Ye, {
            key: j.id
          }, [
            G("div", {
              class: at(["pano-timeline-head", { selected: j.selected }])
            }, [
              G("div", c2, [
                G("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": j.open ? "true" : "false",
                  "aria-label": j.open ? `Hide ${j.label} parameters` : `Show ${j.label} parameters`,
                  onClick: At((P) => r("action", { type: "toggle-row", id: j.id }), ["stop"])
                }, [
                  De(Ct, {
                    icon: Qe(Ae).chevron
                  }, null, 8, ["icon"])
                ], 8, u2),
                G("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: j.label,
                  "aria-current": j.selected ? "true" : void 0,
                  onClick: (P) => r("action", { type: "select-row", id: j.id })
                }, [
                  De(Ct, {
                    icon: j.clip ? Qe(Ae).image : Qe(Ae).camera
                  }, null, 8, ["icon"]),
                  G("span", null, rt(j.label), 1)
                ], 8, f2),
                G("button", {
                  class: at(["pano-timeline-key", { keyed: j.keyed }]),
                  type: "button",
                  "data-keyed": j.keyed ? "true" : "false",
                  "aria-label": j.keyed ? `Every ${j.label} parameter has a keyframe here; update them` : `Add keyframes for every ${j.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: At((P) => r("action", { type: "key-row", owner: j.id }), ["stop"])
                }, [
                  De(Ct, {
                    icon: Qe(Ae).keyframe
                  }, null, 8, ["icon"])
                ], 10, d2)
              ]),
              j.open ? (ie(!0), ce(Ye, { key: 0 }, xt(j.lanes, (P) => (ie(), ce("div", {
                key: P.key,
                class: "pano-timeline-lane-head"
              }, rt(P.label), 1))), 128)) : ct("", !0)
            ], 2),
            G("div", {
              class: at(["pano-timeline-track", { selected: j.selected }])
            }, [
              G("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (P) => ue(P, j, null)
              }, [
                j.clip ? (ie(), ce("div", {
                  key: 0,
                  class: at(["pano-timeline-clip", { open: j.clip.end === null }]),
                  style: wt(O(j.clip)),
                  onPointerdown: At((P) => Q(P, j, "move"), ["stop"])
                }, [
                  G("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: At((P) => Q(P, j, "start"), ["stop"])
                  }, null, 40, m2),
                  G("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: At((P) => Q(P, j, "end"), ["stop"])
                  }, null, 40, g2)
                ], 46, p2)) : ct("", !0),
                (ie(!0), ce(Ye, null, xt(C(j), (P) => (ie(), ce("button", {
                  key: P.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: P.selected, cluster: P.frames.length > 1, partial: P.partial }]),
                  style: wt({ left: v(P.frame + 0.5) }),
                  "aria-label": `${j.label}: ${P.frames.length > 1 ? `${P.frames.length} keyframes` : `keyframe at frame ${P.frames[0]}`}`,
                  "data-tip": P.frames.length > 1 ? `${P.frames.length} keyframes` : `Frame ${P.frames[0]}`,
                  onPointerdown: At((ee) => _e(ee, j, null, P, j.selectedFrames), ["stop"])
                }, [
                  P.frames.length > 1 ? (ie(), ce("span", b2, rt(P.frames.length), 1)) : ct("", !0)
                ], 46, y2))), 128))
              ], 40, h2),
              j.open ? (ie(!0), ce(Ye, { key: 0 }, xt(j.lanes, (P) => (ie(), ce("div", {
                key: P.key,
                class: "pano-timeline-lane",
                onPointerdown: (ee) => ue(ee, j, P.lane)
              }, [
                (ie(!0), ce(Ye, null, xt(L(P), (ee) => (ie(), ce("button", {
                  key: ee.key,
                  type: "button",
                  class: at(["pano-timeline-pin", { selected: ee.selected, cluster: ee.frames.length > 1 }]),
                  style: wt({ left: v(ee.frame + 0.5) }),
                  "aria-label": `${P.label}: ${ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `keyframe at frame ${ee.frames[0]}`}`,
                  "data-tip": ee.frames.length > 1 ? `${ee.frames.length} keyframes` : `Frame ${ee.frames[0]}`,
                  onPointerdown: At((Y) => _e(Y, j, P.lane, ee, P.selectedFrames), ["stop"])
                }, [
                  ee.frames.length > 1 ? (ie(), ce("span", w2, rt(ee.frames.length), 1)) : ct("", !0)
                ], 46, _2))), 128))
              ], 40, v2))), 128)) : ct("", !0),
              G("span", {
                class: "pano-timeline-playhead",
                style: wt({ left: v(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, l2)
    ], 2)), [
      [qo, e.model.visible]
    ]);
  }
}, k2 = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", {
      class: at(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: wt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, rt(e.model.text || ""), 7));
  }
}, M2 = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, N2 = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", M2, [
      (ie(!0), ce(Ye, null, xt(e.buttons, (r) => xi((ie(), Rr(on, {
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
        [qo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, P2 = ["data-video-ready"], A2 = { class: "pano-video-transport-shell" }, C2 = { class: "pano-video-controls-left" }, I2 = { class: "pano-video-filmstrip" }, E2 = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, O2 = ["src", "onLoad"], F2 = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, T2 = ["max", "value", "disabled"], D2 = { class: "pano-video-controls-right" }, L2 = ["data-has-audio"], R2 = { class: "pano-video-volume-pop" }, $2 = ["value", "disabled"], V2 = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause" : "Play";
    }), r = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? "Pause video" : "Play video";
    }), o = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.playing) === !0 ? Ae.pause : Ae.play;
    }), a = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = ut(() => {
      var O;
      return ((O = t.state) == null ? void 0 : O.loop) === !1 ? Ae.loop_off : Ae.loop;
    }), d = ut(() => {
      var O, R;
      return ((O = t.state) == null ? void 0 : O.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = ut(() => {
      var O, R, H;
      return ((O = t.state) == null ? void 0 : O.hasAudio) !== !0 ? Ae.volume : ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((H = t.state) == null ? void 0 : H.volume) ?? 1) <= 0 ? Ae.volume_muted : Ae.volume2;
    }), g = ut(() => {
      var O;
      return Math.max(0, Math.min(100, Number(((O = t.state) == null ? void 0 : O.progressPct) || 0)));
    }), w = ut(() => ({ left: `${g.value}%` })), x = ut(() => {
      var Q, _e;
      const O = (Q = t.state) == null ? void 0 : Q.volumePct, R = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, H = Number(O ?? R ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, H))}%`
      };
    }), M = ut(() => {
      var H, Q;
      const R = [
        String(((H = t.state) == null ? void 0 : H.currentTimeLabel) || "0:00"),
        String(((Q = t.state) == null ? void 0 : Q.durationLabel) || "0:00")
      ].reduce((_e, T) => Math.max(_e, T.length), 4);
      return `${Math.max(4, R)}ch`;
    }), S = ut(() => ({ "--pano-video-time-ch": M.value })), v = ut(() => {
      var H, Q;
      const O = Array.isArray((H = t.state) == null ? void 0 : H.thumbnails) ? t.state.thumbnails : [];
      if (O.length) return O;
      const R = Math.max(7, Number(((Q = t.state) == null ? void 0 : Q.thumbnailCount) || 9));
      return Array.from({ length: R }, (_e, T) => ({
        id: `placeholder-${T}`,
        src: "",
        label: ""
      }));
    }), F = /* @__PURE__ */ Ht(/* @__PURE__ */ new Set()), $ = (O) => String((O == null ? void 0 : O.id) || (O == null ? void 0 : O.src) || (O == null ? void 0 : O.label) || ""), K = (O) => F.value.has($(O)), C = (O) => {
      const R = new Set(F.value);
      R.add($(O)), F.value = R;
    };
    Yi(v, (O) => {
      const R = new Set(O.map($)), H = /* @__PURE__ */ new Set();
      for (const Q of F.value)
        R.has(Q) && H.add(Q);
      F.value = H;
    }, { immediate: !0 });
    const L = ut(() => {
      var O;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((O = t.state) == null ? void 0 : O.shellMaxWidthPx) || 640))}px`
      };
    });
    return (O, R) => (ie(), ce("div", {
      class: at(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: wt(L.value)
    }, [
      R[1] || (R[1] = G("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      R[2] || (R[2] = G("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      G("div", A2, [
        G("div", C2, [
          De(on, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          G("div", {
            class: "pano-video-time pano-video-time-start",
            style: wt(S.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        G("div", I2, [
          G("div", E2, [
            (ie(!0), ce(Ye, null, xt(v.value, (H) => (ie(), ce("div", {
              key: $(H),
              class: at(["pano-video-thumb", {
                "is-placeholder": !H.src,
                "is-loaded": H.src && K(H)
              }])
            }, [
              H.src ? (ie(), ce("img", {
                key: 0,
                src: H.src,
                alt: "",
                draggable: "false",
                onLoad: (Q) => C(H)
              }, null, 40, O2)) : (ie(), ce("span", F2))
            ], 2))), 128))
          ]),
          G("div", {
            class: "pano-video-playhead",
            style: wt(w.value),
            "aria-hidden": "true"
          }, [...R[0] || (R[0] = [
            G("span", { class: "pano-video-playhead-line" }, null, -1),
            G("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          G("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, T2)
        ]),
        G("div", D2, [
          G("div", {
            class: "pano-video-time pano-video-time-end",
            style: wt(S.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
          De(on, {
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
          G("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            G("div", R2, [
              G("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: wt(x.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, $2)
            ]),
            De(on, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, L2)
        ])
      ])
    ], 14, P2));
  }
}, z2 = { class: "pano-floating-top" }, j2 = ["data-selected", "data-view-count"], H2 = ["data-view", "aria-pressed", "aria-label", "disabled"], G2 = { class: "label" }, K2 = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ie(), ce("div", z2, [
        G("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ie(!0), ce(Ye, null, xt(e.buttons, (o) => xi((ie(), ce("button", {
            key: o.key,
            class: at(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            disabled: o.disabled === !0
          }, [
            De(Ct, {
              icon: o.icon
            }, null, 8, ["icon"]),
            G("span", G2, rt(o.label), 1)
          ], 10, H2)), [
            [qo, o.visible !== !1]
          ])), 128))
        ], 8, j2)
      ]);
    };
  }
};
function iy(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Ae.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Ae.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: Ae.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Ae.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Ae.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Ae.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Ae.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Ae.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Ae.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Ae.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Ae.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Ae.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Ae.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Ae.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Ae.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Ae.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Ae.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Ae.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Ae.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Ae.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Ae.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Ae.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Ae.lasso_tool }
        ]
      }
    ]
  };
}
const B2 = ["aria-label"], W2 = { class: "pano-stage-column" }, U2 = { class: "pano-stage-wrap" }, Y2 = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, X2 = {
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
    const d = /* @__PURE__ */ Ht(null), b = /* @__PURE__ */ Ht(null), g = /* @__PURE__ */ Ht(null);
    function w() {
      var T, E;
      return ((E = (T = g.value) == null ? void 0 : T.getRefs) == null ? void 0 : E.call(T)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(T) {
      var E, se;
      return ((se = (E = b.value) == null ? void 0 : E.open) == null ? void 0 : se.call(E, T)) === !0;
    }
    function M(T) {
      o("image-file-selected", T);
    }
    function S(T) {
      o("image-file-cancelled", T);
    }
    t({ getPaintOverlayRefs: w, openImagePicker: x });
    const v = ut(() => r.readOnly === !0), F = ut(() => r.shellPreset || iy(r.type)), $ = ut(() => {
      var E, se, le;
      const T = String((((E = r.uiState) == null ? void 0 : E.stageStatus) === "failed" ? (se = r.uiState) == null ? void 0 : se.stageStatusDetail : (le = r.uiState) == null ? void 0 : le.stageWarningDetail) ?? "");
      return T === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : T === "stickers" ? "One or more sticker previews are unavailable." : T === "frame" ? "The editor hit a rendering error. Check the browser console for details." : T === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : T.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), K = ut(() => {
      var E;
      const T = Array.isArray((E = F.value) == null ? void 0 : E.floatingButtons) ? F.value.floatingButtons.slice() : [];
      return v.value && T.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Ae.fullscreen
      }), T;
    });
    function C() {
      const T = d.value;
      return T ? Array.from(T.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((E) => E instanceof HTMLElement ? !E.hidden && E.tabIndex >= 0 && E.offsetParent !== null : !1) : [];
    }
    function L() {
      var se;
      const E = C()[0] || d.value;
      (se = E == null ? void 0 : E.focus) == null || se.call(E);
    }
    function O() {
      var T;
      f != null && f.isConnected && ((T = f.focus) == null || T.call(f)), f = null;
    }
    function R(T) {
      var E, se, le, ue;
      if (!T.defaultPrevented) {
        if (T.key === "Tab") {
          const U = C();
          if (!U.length) {
            T.preventDefault(), (se = (E = d.value) == null ? void 0 : E.focus) == null || se.call(E);
            return;
          }
          const X = U[0], j = U[U.length - 1], P = document.activeElement;
          if (T.shiftKey) {
            (P === X || P === d.value || !((le = d.value) != null && le.contains(P))) && (T.preventDefault(), j.focus());
            return;
          }
          (P === j || !((ue = d.value) != null && ue.contains(P))) && (T.preventDefault(), X.focus());
          return;
        }
        T.key === "Escape" && o("close");
      }
    }
    function H() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function Q() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function _e(T) {
      document.removeEventListener("keydown", R), T ? (f || (f = document.activeElement), H(), document.addEventListener("keydown", R), Ll(() => {
        L();
      })) : (Q(), O());
    }
    return $l(() => {
      _e(r.open);
    }), Ya(() => {
      Q(), document.removeEventListener("keydown", R), O();
    }), Yi(() => r.open, (T) => {
      _e(T);
    }), (T, E) => e.open ? (ie(), ce("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: E[2] || (E[2] = At((se) => o("close"), ["self"]))
    }, [
      G("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        G("div", W2, [
          G("div", U2, [
            E[3] || (E[3] = G("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            E[4] || (E[4] = G("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            E[5] || (E[5] = G("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ie(), ce("div", Y2, rt($.value), 1)) : ct("", !0),
            E[6] || (E[6] = G("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              G("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            De(jN, {
              ref_key: "paintOverlaysRef",
              ref: g
            }, null, 512),
            De(G0, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: M,
              onFileCancelled: S
            }, null, 512),
            v.value ? ct("", !0) : (ie(), ce(Ye, { key: 1 }, [
              De(N2, {
                buttons: e.uiState.toolButtons || F.value.toolButtons || []
              }, null, 8, ["buttons"]),
              De(fN, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              De(zN, {
                "paint-swatches": e.paintSwatches,
                panes: F.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            De(V2, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            De(K2, {
              buttons: e.uiState.viewButtons || F.value.viewButtons || []
            }, null, 8, ["buttons"]),
            De(aN, {
              buttons: e.uiState.floatingButtons || K.value,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
            De(WN, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            De(k2, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            De(yN, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          De(S2, {
            model: e.uiState.timeline || {},
            onAction: E[0] || (E[0] = (se) => o("timeline", se))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ct("", !0) : (ie(), Rr(JP, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: E[1] || (E[1] = (se) => o("timeline", se))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, B2)
    ])) : ct("", !0);
  }
}, pr = "loading", Yo = "ready", tr = "failed";
function oy(e, t = "") {
  return e && (e.__panoLoadState = pr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ay(e, t = "") {
  return e && (e.__panoLoadState = Yo, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function sy(e, t = "") {
  return e && (e.__panoLoadState = tr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function rf(e, t) {
  return e ? e.__panoLoadState === tr ? tr : typeof t == "function" && t(e) ? Yo : pr : Yo;
}
function of(e) {
  return rf(e) === tr;
}
function q2({ presented: e, background: t = Yo, stickers: n = [] } = {}) {
  if (!e) return { status: pr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === pr, a = r.includes(pr);
  if (o && a) return { status: pr, detail: "mixed" };
  if (o) return { status: pr, detail: "background" };
  if (a) return { status: pr, detail: "stickers" };
  const c = t === tr, f = r.includes(tr);
  return c && f ? { status: tr, detail: "mixed" } : c ? { status: tr, detail: "background" } : f ? { status: tr, detail: "stickers" } : { status: Yo, detail: "" };
}
const J2 = "state_json", Z2 = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), uu = "sticker_image_1", Q2 = "external_image", Es = "pano_sticker_input_images", eA = "pano_sticker_input_videos", tA = "pano_sticker_input_frames", nA = "pano_sticker_input_video_meta", rA = !0, Zs = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], xr = Math.PI / 180, Ki = 180 / Math.PI, fu = 1, iA = "rgb(255, 221, 87)", oA = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, aA = 64, sm = 40, du = 16, sA = 0.45, lm = 180, lA = 160, Al = 24, cA = 4, uA = 4, Os = /* @__PURE__ */ new Map(), cm = /* @__PURE__ */ new Map(), wi = /* @__PURE__ */ new Map(), fA = 12, Kn = y0({
  app: Er,
  api: jt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: of,
    markImageFailed: sy,
    markImageLoading: oy,
    markImageReady: ay
  }
});
function hu(e) {
  if (!$n(e, "background") || !$n(e, "external-sticker")) return null;
  const t = Kn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const dA = Kn.assetSource, pu = Kn.source, mu = Kn.uiImage, hA = Kn.invalidateUiImage, pA = Kn.resolvePreferredExactLinkedSource, gu = Kn.loadPreferredExactLinkedImage;
function Fs(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function mA(e) {
  return 1 - Math.pow(1 - e, 3);
}
function gA(e, t, n) {
  const r = J((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function yA(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = wi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (wi.delete(t), wi.set(t, n), n);
}
function bA(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (wi.delete(n), wi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); wi.size > fA; ) {
      const o = wi.keys().next().value;
      if (!o) break;
      wi.delete(o);
    }
}
function vA(e) {
  return e * e * e;
}
function Ul(e, t, n) {
  return { x: e, y: t, z: n };
}
function um(e, t) {
  return Ul(e.x + t.x, e.y + t.y, e.z + t.z);
}
function fm(e, t) {
  return Ul(e.x * t, e.y * t, e.z * t);
}
function yu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function _A(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Ul(e.x / t, e.y / t, e.z / t);
}
function Ts(e) {
  return {
    yaw: Bt(Math.atan2(e.x, e.z) * Ki),
    pitch: J(Math.asin(J(e.y, -1, 1)) * Ki, -90, 90)
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
function yi(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function bu(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), f = r * r + o * o;
  if (f <= 1e-6) return yi(e, t);
  const d = J((a * r + c * o) / f, 0, 1), b = Number(t.x || 0) + r * d, g = Number(t.y || 0) + o * d, w = Number(e.x || 0) - b, x = Number(e.y || 0) - g;
  return w * w + x * x;
}
function Qn(e, t, n) {
  return e + (t - e) * n;
}
function Sr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${J(n, 0, 1)})`;
}
function wA(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ds = { fillStyle: "", url: "" };
function xA(e, t, n) {
  if (Ds.url && Ds.fillStyle === String(e || ""))
    return Ds.url;
  const r = wA(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Al}" height="${Al}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ds = { fillStyle: String(e || ""), url: r }, r;
}
function Qs(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function Hn(e) {
  return {
    r: J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: J(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function gn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function SA(e) {
  return Zs.some((t) => Qs(e, t.color));
}
function vu(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = J(Number(t), 0, 1), a = J(Number(n), 0, 1);
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
function _u(e) {
  const t = J(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = J(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = J(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let f = 0;
  c > 1e-6 && (o === t ? f = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? f = ((r - t) / c + 2) / 6 : f = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: f, s: d, v: o };
}
function So(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const ly = "pano_suite.ui_settings.v1", cy = "pano_suite.node_grid_visibility.v1";
let Io = null, kr = null;
function el(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function kA() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(ly)) || "").trim();
    if (!t) return Io ? el(Io) : null;
    const n = JSON.parse(t), r = el(n);
    return Io = r, r;
  } catch {
    return Io ? el(Io) : null;
  }
}
function MA(e) {
  var n;
  const t = el(e);
  Io = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(ly, JSON.stringify(t));
  } catch {
  }
  return t;
}
function uy() {
  var e;
  if (kr && typeof kr == "object")
    return kr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(cy)) || "").trim();
    if (!t)
      return kr = {}, kr;
    const n = JSON.parse(t);
    return kr = n && typeof n == "object" ? n : {}, kr;
  } catch {
    return kr = {}, kr;
  }
}
function NA(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = uy()[n];
  return typeof o == "boolean" ? o : !!t;
}
function PA(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = uy();
  r[n] = !!t, kr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(cy, JSON.stringify(r));
  } catch {
  }
}
function AA(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function dm(e) {
  const { paintCount: t, maskCount: n } = AA(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function ko(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ls(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function CA(e, t) {
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
function Vi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function IA(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function EA(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function OA(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function FA(e, t, n = {}) {
  var Ph;
  await W0(e, { tolerateOperationFailure: !0 }), Kn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = CA(e, t);
  await Yf();
  const f = Ls(e, "output_preset"), d = Ls(e, "coverage"), b = Ls(e, "bg_color"), g = Ls(e, J2), w = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return gu(
      e,
      i,
      () => de(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = w();
    return OA(i);
  }, M = (i = 2048) => {
    const s = f == null ? void 0 : f.value;
    return EA(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : IA(s, i);
  }, S = t === "stickers" && e.__panoSceneStateV2 === !0, v = (S ? Xg : Yg)(String((g == null ? void 0 : g.value) || ""), {
    outputPreset: M(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: Gn(d == null ? void 0 : d.value),
    sharedUiSettings: kA(),
    active: e0(e),
    fps: S ? hu(e) : null
  });
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const F = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(v.shots) ? v.shots : [], s = String(((l = v == null ? void 0 : v.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((u) => String((u == null ? void 0 : u.id) || "") === s) || i[0] || null;
  })() : null, $ = F ? Fd(F, !1) : { width: 220, height: 132 }, K = iy(t), C = /* @__PURE__ */ Xo({
    stageStatus: pr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (K.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    toolButtons: (K.toolButtons || []).map((i) => ({ ...i, disabled: !1 })),
    floatingButtons: [
      ...(K.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Ae.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Ae.aspect,
      rotateIcon: Ae.rotate_90,
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
      icon: Ae.fullscreen,
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
      customColorCss: Sr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Sr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
  }), L = document.createElement("div");
  document.body.appendChild(L);
  const O = ({ intent: i, file: s } = {}) => {
    if (Ir(s)) {
      if (i === "add") {
        Yd(s);
        return;
      }
      i === "replace" && c1(s);
    }
  }, R = ({ intent: i } = {}) => {
  }, H = Sf(X2, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: K,
    paintSwatches: Zs.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Sr(i.color, 1)
    })),
    uiState: C,
    onClose: () => {
      bo();
    },
    onTimeline: (i) => o1(i),
    onImageFileSelected: O,
    onImageFileCancelled: R
  });
  let Q = null;
  try {
    Q = H.mount(L);
  } catch (i) {
    try {
      H.unmount();
    } catch {
    }
    throw L.remove(), i;
  }
  const _e = L.querySelector(".pano-modal-overlay"), T = L.querySelector(".pano-modal"), E = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), se = T == null ? void 0 : T.querySelector("[data-stage-background]"), le = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), ue = ((Ph = Q == null ? void 0 : Q.getPaintOverlayRefs) == null ? void 0 : Ph.call(Q)) || {}, U = ue.cursor || null, X = ue.sizePreview || null, j = ue.sizeSample || null;
  if (!_e || !T || !E || !se || !le || !U || !X || !j)
    throw H.unmount(), L.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const P = E.getContext("2d"), ee = T.querySelector("[data-side]"), Y = T.querySelector("[data-video-element]"), Ie = T.querySelector("[data-port-video-element]"), Fe = T.querySelector(".pano-floating-right"), St = T.querySelector(".pano-floating-top"), pt = T.querySelector("[data-tool-rail]"), sn = T.querySelector("[data-frame-rail]"), it = T.querySelector("[data-frame-roll-knob]"), Yn = T.querySelector("[data-paint-dock]"), It = T.querySelector(".pano-video-transport"), Zt = T.querySelector("[data-selection-menu]"), ln = T.querySelector("[data-tooltip]"), si = T.querySelector("[data-camera-preview-host]"), D = T.querySelector("[data-camera-preview-canvas]"), B = T.querySelector("[data-paint-color-row]"), q = T.querySelector("[data-paint-color-pop]"), be = T.querySelector("[data-paint-color-sv]"), me = T.querySelector("[data-paint-color-sv-cursor]"), ge = T.querySelector("[data-paint-hue-strip]"), ke = T.querySelector("[data-paint-hue-handle]");
  let Me = 0, xe = 0;
  le == null || le.removeAttribute("data-stage-ready"), le == null || le.setAttribute("data-stage-loading-kind", "boot"), E.style.opacity = "1", se.style.opacity = "0", o && (ee == null || ee.remove(), T.classList.add("pano-modal-readonly"));
  const fe = () => {
    if (!p.customPaintSessionStart) return;
    if (Qs(p.customPaintSessionStart, p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    if (SA(p.customPaintColor)) {
      p.customPaintSessionStart = null;
      return;
    }
    const i = [
      Hn(p.customPaintColor),
      ...p.customPaintHistory.filter((s) => !Qs(s, p.customPaintColor))
    ];
    p.customPaintHistory = i.slice(0, 8), p.customPaintSessionStart = null;
  }, $e = (i = !1) => {
    !q || q.hidden || (i ? fe() : p.customPaintSessionStart = null, q.hidden = !0, C.paintDock.colorPopOpen = !1);
  }, Ee = () => {
    q && (q.hidden && (p.customPaintSessionStart = Hn(p.customPaintColor)), q.hidden = !1, C.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || Ei(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), $e(!0), t === "cutout" && p.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (p.cutoutAspectOpen = !1, p.menuMode = "", p.menuSize.measured = !1, Xe(), de()), (s = C.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (C.frameRail.aspectOpen = !1)));
  });
  const Ve = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, Ke = JSON.stringify(Sp(v)), p = {
    mode: "pano",
    selectedId: Ve,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Gn(v.coverage),
    historyController: WM(80, { entries: [Ke], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Br,
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
    showGrid: NA(e == null ? void 0 : e.id, !0),
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
    paintEngine: Ou(),
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
  }, Le = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let st = null;
  t === "stickers" && (p.selectedId = null, v.active.selected_sticker_id = null), p.selectedIds = p.selectedId ? [p.selectedId] : [];
  const Be = /* @__PURE__ */ new Map(), Tt = /* @__PURE__ */ new Map(), cn = /* @__PURE__ */ new Map(), nn = /* @__PURE__ */ new Map(), $t = document.createElement("canvas");
  $t.__panoFrameIdx = 0;
  const Xn = document.createElement("canvas");
  Xn.__panoFrameIdx = 0;
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
  }, Ut = Qx({ onReady: () => de(), onFailed: () => de() });
  let $r = { key: "", projection: null }, Vr = { key: null, sceneState: null }, ro = null, io = null, z = null;
  const ve = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, Ne = (i) => {
    const s = String(i || "default");
    E.style.cursor !== s && (E.style.cursor = s);
  }, Oe = {
    timer: 0,
    target: null
  }, je = {
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
  }, Ze = 9, mt = [];
  let Dt = 0;
  const or = () => {
    var N, A;
    const i = (N = le == null ? void 0 : le.getBoundingClientRect) == null ? void 0 : N.call(le), s = (A = Fe == null ? void 0 : Fe.getBoundingClientRect) == null ? void 0 : A.call(Fe), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), u = s ? Math.max(0, Number(s.width || 0)) : 0, y = u > 0 ? u + 14 + 12 : 72, _ = Math.max(280, Math.floor(l - y * 2)), k = p.fullscreen ? Math.min(1200, _) : _;
    C.videoTransport.shellMaxWidthPx = k;
  }, Yt = () => {
    Dt || (Dt = window.requestAnimationFrame(() => {
      Dt = 0, or();
    }));
  }, Pi = (i) => {
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
  }, wn = typeof ResizeObserver < "u" ? new ResizeObserver(() => Yt()) : null;
  wn == null || wn.observe(le), Fe && (wn == null || wn.observe(Fe)), mt.push(() => {
    var i;
    Dt && (window.cancelAnimationFrame(Dt), Dt = 0), (i = wn == null ? void 0 : wn.disconnect) == null || i.call(wn);
  }), Yt();
  const yr = () => {
    Pe.thumbnailJobId += 1, Pe.thumbnailSrc = "", C.videoTransport.thumbnails = [], C.videoTransport.thumbnailCount = Ze;
  }, An = async (i, s, l) => {
    const u = String(i || "").trim();
    if (!u) {
      yr();
      return;
    }
    const h = yA(u);
    if (h) {
      Pe.thumbnailSrc = u, C.videoTransport.thumbnails = h.thumbnails, C.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    const m = ++Pe.thumbnailJobId;
    Pe.thumbnailSrc = u, C.videoTransport.thumbnails = [], C.videoTransport.thumbnailCount = Ze;
    const y = document.createElement("video");
    y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous";
    const _ = await new Promise((oe) => {
      let he = !1;
      const re = (Se) => {
        he || (he = !0, oe(Se));
      };
      y.addEventListener("loadedmetadata", () => re(!0), { once: !0 }), y.addEventListener("canplay", () => re(!0), { once: !0 }), y.addEventListener("error", () => re(!1), { once: !0 }), y.src = u, y.load();
    });
    if (Pe.thumbnailJobId !== m) return;
    const k = Number(y.videoWidth || 0), N = Number(y.videoHeight || 0);
    if (!_ || k < 1 || N < 1) {
      Pe.thumbnailFailedSrcs.add(u);
      return;
    }
    const A = Math.max(0, Number(y.duration || s || 0)), I = document.createElement("canvas"), V = 46, W = Math.max(72, Math.round(k / N * V));
    I.width = W, I.height = V;
    const ne = I.getContext("2d");
    if (!ne) return;
    const Z = [], te = (oe) => new Promise((he) => {
      let re = !1;
      const Se = () => {
        re || (re = !0, he());
      };
      y.addEventListener("seeked", Se, { once: !0 }), y.addEventListener("error", Se, { once: !0 });
      try {
        y.currentTime = oe;
      } catch {
        Se();
      }
    });
    for (let oe = 0; oe < Ze; oe += 1) {
      if (Pe.thumbnailJobId !== m) return;
      const he = oe / (Ze - 1), re = A > 0 ? Math.max(0, Math.min(A - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), A * he)) : 0;
      if (await te(re), Pe.thumbnailJobId !== m) return;
      ne.clearRect(0, 0, W, V), ne.drawImage(y, 0, 0, W, V), Z.push({
        id: `thumb-${oe}`,
        src: I.toDataURL("image/jpeg", 0.72),
        time: re,
        label: oc(re)
      });
    }
    Pe.thumbnailJobId === m && (C.videoTransport.thumbnails = Z, C.videoTransport.thumbnailCount = Z.length || Ze, bA(u, {
      thumbnails: Z,
      thumbnailCount: Z.length || Ze,
      duration: A,
      fps: l
    }));
  };
  mt.push(() => {
    yr();
  });
  const kt = O0({
    video: Y instanceof HTMLVideoElement ? Y : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: rs,
    span: () => {
      if (S) return wc();
      const i = Math.round(Number(C.videoTransport.duration || 0) * rs());
      return Y.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => S,
    onFrame: (i) => {
      S ? e1(i) : ci(), de({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      Ty() && (Ce.backgroundDirty = !0);
    },
    onChange: () => {
      ci(), Gr(), de({ cause: "frame_view", localOnly: !0 });
    }
  });
  mt.push(() => kt.dispose());
  const ar = S && Ie instanceof HTMLVideoElement ? F0({
    video: Ie,
    onCapture: () => {
      var l;
      const i = Number(Ie.videoWidth || 0), s = Number(Ie.videoHeight || 0);
      i < 1 || s < 1 || (Xn.width = i, Xn.height = s, (l = Xn.getContext("2d")) == null || l.drawImage(Ie, 0, 0), Xn.__panoFrameIdx += 1, de({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => de({ cause: "frame_view", localOnly: !0 })
  }) : null;
  ar && mt.push(() => ar.dispose());
  const qa = S ? w0({
    createImage: (i, s) => {
      const l = new Image();
      return l.onload = s, l.onerror = s, l.src = i, l;
    },
    onLoad: () => de({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Y instanceof HTMLVideoElement) {
    const i = () => {
      ui(), de({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      ci({
        hasAudio: C.videoTransport.hasAudio,
        muted: Y.muted,
        volume: Number(Y.volume ?? C.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const u = Y.dataset.panoSrc;
      u && (Pe.failedSrcs.add(u), ui(), de());
    };
    for (const [u, h] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      Y.addEventListener(u, h), mt.push(() => Y.removeEventListener(u, h));
  }
  function Cn() {
    C.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", u = i.attr === "data-mask-tool";
      i.active = s ? i.value === p.primaryTool : l ? i.key === p.paintTool : u ? i.key === p.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Vn(i) {
    return qf(i == null ? void 0 : i.dataTransfer);
  }
  function br(i) {
    const s = !!i;
    je.active !== s && (je.active = s, le.classList.toggle("drop-active", s));
  }
  function Ai(i, s, l = p.viewFov, u = 140, h = 620) {
    const m = Aw(p.viewYaw, i), y = s - p.viewPitch, _ = l - p.viewFov, k = Math.hypot(m, y) + Math.abs(_) * 0.6, N = Math.round(J(u + k * 2.2, u, h));
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
  Gy();
  function dn() {
    return t === "stickers" ? Ja() : v.shots;
  }
  function Ja() {
    return S ? v.stickers.filter((i) => i.placement === "sky") : v.stickers;
  }
  function sr(i) {
    return S && gt(i);
  }
  function Yl(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function Xt(i) {
    return sr(i) ? Rf(i, p.frame) : i;
  }
  function lr(i, s) {
    sr(i) ? qg(i, p.frame, s) : Object.assign(i, s);
  }
  function hn() {
    const i = v.painting || (v.painting = Ro(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function fy(i = "paint") {
    var h, m;
    const s = Array.isArray((m = (h = v.painting) == null ? void 0 : h[i]) == null ? void 0 : m.strokes) ? v.painting[i].strokes : [], l = [], u = /* @__PURE__ */ new Set();
    for (const y of s) {
      const _ = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !_ || u.has(_) || (u.add(_), l.push(_));
    }
    return l;
  }
  function dy() {
    return fy("paint");
  }
  function Zo(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Qo(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function rn(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function ea(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const u = l.match(/^(paint|mask):(.*)$/);
    return u ? { layerKind: u[1] === "mask" ? "mask" : "paint", actionGroupId: String(u[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function Xl() {
    var s;
    let i = -1;
    for (const l of Ja())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of hn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = v.painting) == null ? void 0 : s.raster_objects) ? v.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function td(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const u = hn();
    let h = u.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return h ? s != null && (h.z_index = Math.max(0, Number(s || 0))) : (h = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? Xl() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, u.push(h)), h;
  }
  function hy(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), u = Number(i.halfW || 0), h = Number(i.halfH || 0);
    return [
      {
        u: ((s - u) % 1 + 1) % 1,
        v: J(l - h, 0, 1)
      },
      {
        u: ((s + u) % 1 + 1) % 1,
        v: J(l - h, 0, 1)
      },
      {
        u: ((s + u) % 1 + 1) % 1,
        v: J(l + h, 0, 1)
      },
      {
        u: ((s - u) % 1 + 1) % 1,
        v: J(l + h, 0, 1)
      }
    ];
  }
  function py() {
    const i = new Set(dy()), l = hn().filter((u) => i.has(String((u == null ? void 0 : u.actionGroupId) || "")));
    return i.forEach((u) => {
      l.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === u) || l.push({
        id: u,
        type: "strokeGroup",
        actionGroupId: u,
        z_index: Xl(),
        locked: !1,
        frame: null
      });
    }), l.sort((u, h) => Number((u == null ? void 0 : u.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), v.painting.groups = l, l;
  }
  function my(i, s, l) {
    var Z;
    const u = (te) => (Number(te || 0) % 1 + 1) % 1, h = [];
    for (const te of l) {
      const oe = te == null ? void 0 : te.geometry, he = (oe == null ? void 0 : oe.geometryKind) === "lasso_fill" ? oe == null ? void 0 : oe.points : (oe == null ? void 0 : oe.processedPoints) || (oe == null ? void 0 : oe.rawPoints) || (oe == null ? void 0 : oe.points) || [];
      Array.isArray(he) && h.push(...he);
    }
    if (!h.length) return null;
    const m = u(((Z = h[0]) == null ? void 0 : Z.u) || 0);
    let y = 0, _ = 0;
    h.forEach((te) => {
      const oe = u((te == null ? void 0 : te.u) || 0);
      y += m + qn(oe, m), _ += Number((te == null ? void 0 : te.v) || 0);
    });
    const k = (y / h.length % 1 + 1) % 1;
    let N = 1 / 0, A = -1 / 0, I = 1 / 0, V = -1 / 0;
    h.forEach((te) => {
      const oe = u((te == null ? void 0 : te.u) || 0), he = qn(oe, k);
      N = Math.min(N, he), A = Math.max(A, he);
      const re = Number((te == null ? void 0 : te.v) || 0);
      I = Math.min(I, re), V = Math.max(V, re);
    });
    const W = l.reduce((te, oe) => {
      const he = mi(String((oe == null ? void 0 : oe.toolKind) || "pen")), re = Fn[he] || Fn[Br], Se = Math.max(1, Number((oe == null ? void 0 : oe.size) || 10)) * Math.max(0.1, Number((re == null ? void 0 : re.sizeScale) ?? 1));
      return Math.max(te, Se);
    }, 0), ne = Math.max(35e-4, W / 2048);
    return {
      centerUv: { u: ((k + (N + A) * 0.5) % 1 + 1) % 1, v: J((I + V) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (A - N) * 0.5 + ne,
      halfH: (V - I) * 0.5 + ne,
      uvPad: ne
    };
  }
  function li(i, s, l) {
    const u = String(i || "").trim();
    if (!u) return null;
    const h = hn().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === u);
    if (!h) return null;
    const m = l || cr(u, s);
    return h.frame = my(u, s, m), h.frame;
  }
  function oo() {
    var u;
    const i = Ja().map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), s = py().map((h) => ({
      type: "strokeGroup",
      id: String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || ""),
      actionGroupId: String((h == null ? void 0 : h.actionGroupId) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), l = (Array.isArray((u = v.painting) == null ? void 0 : u.raster_objects) ? v.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...i, ...s, ...l].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function ql(i = !0) {
    var l, u, h, m, y, _;
    const s = oo().filter((k) => k.type === "strokeGroup").map((k) => String(k.actionGroupId || "")).filter((k) => !!k);
    if (i) {
      const k = String(((u = (l = p.interaction) == null ? void 0 : l.stroke) == null ? void 0 : u.actionGroupId) || "").trim(), N = String(((m = (h = p.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), A = String(((_ = (y = p.interaction) == null ? void 0 : y.stroke) == null ? void 0 : _.toolKind) || "").trim();
      k && N === "paint" && A !== "eraser" && !s.includes(k) && s.push(k);
    }
    return s;
  }
  function Jl(i = !0) {
    var _, k, N, A, I, V;
    const s = oo();
    if (!i) return s;
    const l = String(((k = (_ = p.interaction) == null ? void 0 : _.stroke) == null ? void 0 : k.actionGroupId) || "").trim(), u = String(((A = (N = p.interaction) == null ? void 0 : N.stroke) == null ? void 0 : A.layerKind) || "").trim(), h = String(((V = (I = p.interaction) == null ? void 0 : I.stroke) == null ? void 0 : V.toolKind) || "").trim();
    if (!l || u !== "paint" || h === "eraser" || s.some((W) => W.type === "strokeGroup" && String(W.actionGroupId || "") === l))
      return s;
    const m = Nt();
    let y = s.reduce((W, ne) => Math.max(W, Number((ne == null ? void 0 : ne.z_index) || 0)), -1) + 1;
    return m && Qt(m) && String(m.actionGroupId || "") === l && (y = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: y,
        item: null
      }
    ].sort((W, ne) => Number((W == null ? void 0 : W.z_index) || 0) - Number((ne == null ? void 0 : ne.z_index) || 0));
  }
  function gy() {
    return hn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => so(Zo("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function yy() {
    var i;
    return (Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => ao(Qo((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function nd(i = p.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, u = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || u;
    }
    return !1;
  }
  function by() {
    var s, l, u, h;
    let i = null;
    try {
      const m = ql(), y = ((h = (u = (l = (s = p.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : u.displayPaint) == null ? void 0 : h.canvas) || null;
      y && (i = {
        source: y,
        revision: `${sa()}:${Zl()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Zl() {
    var h, m, y, _, k, N, A;
    const i = p.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!nd(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const I = ((h = i == null ? void 0 : i.stroke) == null ? void 0 : h.geometry) || null, V = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), W = ((y = I == null ? void 0 : I.rawPoints) == null ? void 0 : y.length) ?? ((_ = I == null ? void 0 : I.points) == null ? void 0 : _.length) ?? 0, ne = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${V || "paint"}_${s}_live${ne}_${W}_${p.livePaintInteractionRevision}`;
    }
    const l = String(((k = i == null ? void 0 : i.item) == null ? void 0 : k.actionGroupId) || ""), u = String(((N = i == null ? void 0 : i.item) == null ? void 0 : N.rasterObjectId) || ((A = i == null ? void 0 : i.item) == null ? void 0 : A.id) || "");
    return `_${s}_${l || u || "active"}_${p.livePaintInteractionRevision}`;
  }
  function Ql() {
    const i = Array.isArray(v.shots) ? v.shots : [], s = Array.isArray(v.stickers) ? v.stickers : [];
    return [...i, ...s];
  }
  function zn(i) {
    return !!i && Array.isArray(v.shots) && v.shots.includes(i);
  }
  function gt(i) {
    return !!i && Array.isArray(v.stickers) && v.stickers.includes(i);
  }
  function In() {
    var i;
    return Array.isArray((i = v.painting) == null ? void 0 : i.raster_objects) ? v.painting.raster_objects : [];
  }
  function ao(i) {
    const s = rn(i);
    if (!s) return null;
    const l = In().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Qo(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function pn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = rn(i.rasterObjectId || i.id || "");
    return !!s && !!ao(Qo(s));
  }
  function so(i) {
    const s = ea(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const u = hn().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === l || String((h == null ? void 0 : h.actionGroupId) || "") === l);
    return u ? {
      ...u,
      id: Zo("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function Qt(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!so(Zo(l, s));
  }
  function cr(i, s = null) {
    const l = ea(i, s), u = String(l.actionGroupId || "").trim();
    return u ? go(l.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === u) : [];
  }
  function vy(i, s = "paint") {
    const l = String(i || "").trim(), h = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${p.mode}:${aa()}`;
    if (p.mode === "frame") {
      const m = He(), y = String((m == null ? void 0 : m.id) || ""), _ = m ? en(m) : null;
      return `${h}:frame:${y}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((_ == null ? void 0 : _.x) || 0))}:${Math.round(Number((_ == null ? void 0 : _.y) || 0))}:${Math.round(Number((_ == null ? void 0 : _.w) || 0))}:${Math.round(Number((_ == null ? void 0 : _.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((E == null ? void 0 : E.width) || 0))}:${Math.round(Number((E == null ? void 0 : E.height) || 0))}`;
  }
  function Za(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: J(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function qn(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function ec(i, s = null, l = null) {
    var N;
    const u = ea(i, s), h = Array.isArray(l) ? l : cr(u.actionGroupId, u.layerKind), m = [];
    if (h.forEach((A) => {
      const I = (A == null ? void 0 : A.geometry) || null, V = (I == null ? void 0 : I.geometryKind) === "lasso_fill" ? I == null ? void 0 : I.points : (I == null ? void 0 : I.processedPoints) || (I == null ? void 0 : I.rawPoints) || (I == null ? void 0 : I.points) || [];
      Array.isArray(V) && m.push(...V);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((N = m[0]) == null ? void 0 : N.u) || 0);
    let _ = 0, k = 0;
    return m.forEach((A) => {
      _ += y + qn(Number((A == null ? void 0 : A.u) || 0), y), k += Number((A == null ? void 0 : A.v) || 0);
    }), {
      u: (_ / m.length % 1 + 1) % 1,
      v: J(k / m.length, 0, 1)
    };
  }
  function Qa(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = qn(Number(i.u || 0), h), _ = Number(i.v || 0) - m, k = Number(u || 0) * xr, N = Math.cos(k), A = Math.sin(k), I = Math.max(0.02, Number(l || 1)), V = (y * N - _ * A) * I, W = (y * A + _ * N) * I;
    return {
      ...i,
      u: ((h + V) % 1 + 1) % 1,
      v: J(m + W, 0, 1)
    };
  }
  function rd(i, s, l, u = null, h = null, m = null) {
    const y = ea(i, h), _ = String(y.actionGroupId || "").trim();
    if (!_) return !1;
    const k = go(y.layerKind), N = Array.isArray(u) ? new Map(u.map((I) => [String((I == null ? void 0 : I.id) || ""), I])) : null;
    let A = !1;
    if (k.forEach((I) => {
      if (String((I == null ? void 0 : I.actionGroupId) || "").trim() !== _) return;
      const V = (N == null ? void 0 : N.get(String((I == null ? void 0 : I.id) || ""))) || I, W = I == null ? void 0 : I.geometry, ne = V == null ? void 0 : V.geometry;
      !W || !ne || (Array.isArray(ne.points) && (W.points = ne.points.map((Z) => Za(Z, s, l)), A = !0), Array.isArray(ne.rawPoints) && (W.rawPoints = ne.rawPoints.map((Z) => Za(Z, s, l)), A = !0), Array.isArray(ne.processedPoints) && (W.processedPoints = ne.processedPoints.map((Z) => Za(Z, s, l)), A = !0));
    }), A && m) {
      const I = hn().find((V) => String((V == null ? void 0 : V.actionGroupId) || "") === _);
      I && (I.frame = null);
    }
    return A;
  }
  function id(i, s = 1, l = 0, u = null, h = null, m = null) {
    const y = ea(i, h), _ = String(y.actionGroupId || "").trim();
    if (!_) return !1;
    const k = go(y.layerKind), N = Array.isArray(u) ? u : cr(_, y.layerKind), A = Array.isArray(N) ? new Map(N.map((W) => [String((W == null ? void 0 : W.id) || ""), W])) : null, I = (m == null ? void 0 : m.centerUv) ?? ec(_, y.layerKind, N);
    let V = !1;
    if (k.forEach((W) => {
      if (String((W == null ? void 0 : W.actionGroupId) || "").trim() !== _) return;
      const ne = (A == null ? void 0 : A.get(String((W == null ? void 0 : W.id) || ""))) || W, Z = W == null ? void 0 : W.geometry, te = ne == null ? void 0 : ne.geometry;
      !Z || !te || (Array.isArray(te.points) && (Z.points = te.points.map((oe) => Qa(oe, I, s, l)), V = !0), Array.isArray(te.rawPoints) && (Z.rawPoints = te.rawPoints.map((oe) => Qa(oe, I, s, l)), V = !0), Array.isArray(te.processedPoints) && (Z.processedPoints = te.processedPoints.map((oe) => Qa(oe, I, s, l)), V = !0));
    }), V && m) {
      const W = hn().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === _);
      W && (W.frame = null);
    }
    return V;
  }
  function od(i, s, l, u = null) {
    const h = rn(i);
    if (!h) return !1;
    const m = In().find((A) => String((A == null ? void 0 : A.id) || "").trim() === h);
    if (!m) return !1;
    const y = u && typeof u == "object" ? u : m, _ = (y == null ? void 0 : y.transform) || {}, k = Number(_.du || 0) + Number(s || 0), N = J(Number(_.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = k, m.transform.dv = N, !0;
  }
  function _y(i, s = 1, l = null) {
    const u = rn(i);
    if (!u) return !1;
    const h = In().find((N) => String((N == null ? void 0 : N.id) || "").trim() === u);
    if (!h) return !1;
    const m = l && typeof l == "object" ? l : h, y = (m == null ? void 0 : m.transform) || {}, _ = Math.max(0.01, Number(y.scale || 1)), k = J(_ * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = k, !0;
  }
  function Nt() {
    const i = String(p.selectedId || "");
    if (!i) return null;
    const s = so(i);
    if (s) return s;
    const l = ao(i);
    return l || (t === "cutout" ? Ql().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null : dn().find((u) => String((u == null ? void 0 : u.id) || "") === i) || null);
  }
  function ur() {
    const i = Array.isArray(p.selectedIds) && p.selectedIds.length ? p.selectedIds : p.selectedId ? [p.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((u) => {
      const h = String(u || "").trim();
      if (!h || l.has(h)) return;
      l.add(h);
      const m = h === String(p.selectedId || "") ? Nt() : so(h) || ao(h) || (t === "cutout" ? Ql().find((y) => String((y == null ? void 0 : y.id) || "") === h) : dn().find((y) => String((y == null ? void 0 : y.id) || "") === h));
      m && s.push(m);
    }), s;
  }
  function es(i = null) {
    const s = Array.isArray(i) ? i : ur();
    if (!s || s.length < 2) return null;
    const l = s.map((N) => qt(N)).filter((N) => (N == null ? void 0 : N.visible) && Array.isArray(N.corners) && N.corners.length);
    if (!l.length) return null;
    const u = l.flatMap((N) => N.corners.map((A) => Number((A == null ? void 0 : A.x) || 0))), h = l.flatMap((N) => N.corners.map((A) => Number((A == null ? void 0 : A.y) || 0))), m = Math.min(...u), y = Math.max(...u), _ = Math.min(...h), k = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (_ + k) * 0.5 },
      corners: [
        { x: m, y: _ },
        { x: y, y: _ },
        { x: y, y: k },
        { x: m, y: k }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: _, a: { x: m, y: _ }, b: { x: y, y: _ } },
        { edge: "right", x: y, y: (_ + k) * 0.5, a: { x: y, y: _ }, b: { x: y, y: k } },
        { edge: "bottom", x: (m + y) * 0.5, y: k, a: { x: y, y: k }, b: { x: m, y: k } },
        { edge: "left", x: m, y: (_ + k) * 0.5, a: { x: m, y: k }, b: { x: m, y: _ } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: _ },
      rotateHandle: { x: (m + y) * 0.5, y: _ - 30 }
    };
  }
  function ad(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(p.selectedIds) && p.selectedIds.includes(s);
  }
  function ts() {
    const i = Nt();
    return i ? Qt(i) || pn(i) ? "stroke" : zn(i) ? "frame" : "image" : null;
  }
  function xn(i) {
    if (!i || typeof i != "object") return !1;
    if (Qt(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = hn().find((u) => String((u == null ? void 0 : u.actionGroupId) || (u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (pn(i)) {
      const s = rn(i.rasterObjectId || i.id || ""), l = In().find((u) => String((u == null ? void 0 : u.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function tc(i = null) {
    const s = Array.isArray(i) ? i : ur();
    return s.length > 0 && s.every((l) => xn(l));
  }
  function wy(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (Qt(i)) {
      const u = String(i.actionGroupId || i.id || "").trim(), h = hn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    if (pn(i)) {
      const u = rn(i.rasterObjectId || i.id || ""), h = In().find((m) => String((m == null ? void 0 : m.id) || "").trim() === u);
      return !h || h.locked === l ? !1 : (h.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function xy() {
    if (r) return;
    const i = ur();
    if (!i.length) return;
    const s = !tc(i);
    let l = !1;
    i.forEach((u) => {
      wy(u, s) && (l = !0);
    }), l && (ot(), lt(), Xe(), ze(), de());
  }
  function vr(i) {
    p.inspectCamera = !1, Le.selection = null, p.selectedId = (i == null ? void 0 : i.id) || null, p.selectedIds = i != null && i.id ? [i.id] : [], i && gt(i) ? v.active.selected_sticker_id = i.id || null : v.active.selected_sticker_id = null, i && zn(i) ? v.active.selected_shot_id = i.id || null : i ? zn(i) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function Sy(i, s = null) {
    const l = [], u = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((y) => {
      const _ = String((y == null ? void 0 : y.id) || "").trim();
      !_ || u.has(_) || (u.add(_), l.push(_));
    }), p.selectedIds = l, p.inspectCamera = !1, Le.selection = null;
    const h = String(s || "").trim();
    p.selectedId = h && l.includes(h) ? h : l[l.length - 1] || null;
    const m = Nt();
    v.active.selected_sticker_id = m && gt(m) && m.id || null, m && zn(m) ? v.active.selected_shot_id = m.id || null : l.length || (v.active.selected_shot_id = null);
  }
  function sd() {
    const i = (Array.isArray(v.shots) ? v.shots : []).map((l, u) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${u + 1}`)
    })), s = (Array.isArray(v.stickers) ? v.stickers : []).map((l, u) => {
      var m, y;
      const h = Vt(l) ? String(l.id || uu) : String(((y = (m = v.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : y.name) || l.asset_id || l.id || `Image ${u + 1}`);
      return {
        kind: "image",
        item: l,
        label: h
      };
    });
    return [...i, ...s];
  }
  function ky(i) {
    return i === "frame" ? Ae.camera : i === "stroke" ? Ae.paintbrush_vertical_tool : Ae.image;
  }
  function nc(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: ky(i.kind)
    };
  }
  function ns() {
    return Xl();
  }
  function Vt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : S ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === uu || String(i.source_kind || "") === Q2;
  }
  function lo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function My(i) {
    return Vt(i) && lo(i) ? i0 : 1;
  }
  function Ny() {
    return p.primaryTool === "mask" ? p.maskTool : p.paintTool;
  }
  function Py() {
    return String(Ny() || "") === "lasso_fill";
  }
  function Ay() {
    if (r) return;
    const i = Nt();
    !i || !Vt(i) || (i.visible = lo(i), Kt(), ot(), lt(), ze(), Xe(), de());
  }
  function Cy() {
    if (r || t !== "stickers") return;
    const i = Nt();
    if (!i || !Vt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = ac(Es, () => {
      de();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = fi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), ot(), lt(), ze(), Xe(), de();
  }
  function Iy(i) {
    if (!i || !Vt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, u = ac(Es, () => {
      de();
    });
    return u && (u.complete || u.naturalWidth || u.width) && (l.vFOV_deg = fi(
      l.hFOV_deg,
      Number(u.naturalWidth || u.width || 1),
      Number(u.naturalHeight || u.height || 1)
    )), l;
  }
  function Ey() {
    const i = Nt();
    if (!i || !Vt(i)) return !1;
    const s = Iy(i);
    if (!s) return !1;
    const l = (u, h) => Math.abs(Number(u || 0) - Number(h || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function ta(i) {
    return Kn.uiList(e, i);
  }
  function rc(i) {
    return Kn.uiValue(e, i);
  }
  function ld() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return fl(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Oy() {
    const { metaKey: i } = ld(), s = rc(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function ic(i) {
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
  function oc(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), u = s % 60;
    return `${l}:${String(u).padStart(2, "0")}`;
  }
  function rs() {
    return S ? v.timeline.fps : Pe.metaFps || 1e3;
  }
  function ci(i = {}) {
    const s = Number(i.duration ?? C.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? C.videoTransport.fps ?? 24)), u = kt.frame / rs(), h = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!C.videoTransport.ready, m = kt.playing, y = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!C.videoTransport.visible, _ = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Y instanceof HTMLVideoElement ? Y.muted : C.videoTransport.muted), k = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Y instanceof HTMLVideoElement ? Y.volume : C.videoTransport.volume
    ), N = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Pi(Y), A = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!C.videoTransport.loop;
    Object.assign(C.videoTransport, {
      ready: h,
      playing: m,
      visible: y,
      loop: A,
      currentTime: Number.isFinite(u) ? u : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, u / s * 100)) : 0,
      currentTimeLabel: oc(u),
      durationLabel: oc(s),
      frameCount: Math.max(0, Number(i.frameCount ?? C.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: N,
      muted: _,
      volume: Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(k) ? k : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : C.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? C.videoTransport.thumbnailCount ?? Ze))
    });
  }
  function cd() {
    return !!(Y instanceof HTMLVideoElement && !S && Y.getAttribute("src") && p.primaryTool !== "paint" && p.primaryTool !== "mask");
  }
  function ud() {
    if (!(Y instanceof HTMLVideoElement) || !C.videoTransport.hasAudio) return;
    const i = !Y.muted;
    Y.muted = i, !i && Number(Y.volume || 0) <= 0 && (Y.volume = Math.max(0.01, Number(C.videoTransport.volume || 1))), ci({
      hasAudio: C.videoTransport.hasAudio,
      muted: Y.muted,
      volume: Number(Y.volume ?? C.videoTransport.volume ?? 1)
    });
  }
  function Fy() {
    ci({
      visible: cd()
    });
  }
  function Ty() {
    if (!(Y instanceof HTMLVideoElement) || Number(Y.videoWidth || 0) < 1 || Number(Y.videoHeight || 0) < 1) return !1;
    const i = Number(Y.videoWidth || 0), s = Number(Y.videoHeight || 0);
    ($t.width !== i || $t.height !== s) && ($t.width = i, $t.height = s);
    const l = $t.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(Y, 0, 0, i, s), $t.__panoFrameIdx = Number($t.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function fd() {
    return !kt.showsVideo && Number($t.width || 0) > 0 && Number($t.height || 0) > 0 && Number($t.__panoFrameIdx || 0) > 0 ? $t : Y instanceof HTMLVideoElement && Number(Y.videoWidth || 0) > 0 && Number(Y.videoHeight || 0) > 0 && Number(Y.readyState || 0) >= 2 ? Y : null;
  }
  function dd() {
    $t.__panoFrameIdx = 0, Ce.backgroundDirty = !0;
  }
  function ui() {
    if (!(Y instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = ld(), s = $n(e, "background") && ta(i)[0] || null, l = pu(s), u = [l, Kn.linkedVideoFile(e, Sd())].filter(Boolean), h = u.find((I) => !Pe.failedSrcs.has(I)) || "";
    Pe.videoFailed = !h && u.length > 0;
    const m = h && h === l ? Oy() : null;
    Pe.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const y = Math.max(1, Number((m == null ? void 0 : m.fps) || (S ? v.timeline.fps : 24))), _ = Y.dataset.panoSrc === h && Number.isFinite(Y.duration) ? Y.duration : 0, k = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / y : _)), N = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(k * y))), A = !!(m != null && m.has_audio) || Pi(Y);
    return h && Y.dataset.panoSrc !== h ? (Y.pause(), dd(), Y.dataset.panoSrc = h, Y.loop = !S && !!C.videoTransport.loop, Y.muted = !!C.videoTransport.muted, Y.volume = Math.max(0, Math.min(1, Number(C.videoTransport.volume ?? 1))), Y.src = h, Y.load(), kt.setSource(!0), S || kt.seek(0)) : !h && Y.getAttribute("src") && (Y.pause(), Y.removeAttribute("src"), delete Y.dataset.panoSrc, Y.load(), dd(), yr(), kt.setSource(!1)), S || (Y.loop = !!C.videoTransport.loop), h && !S && Pe.thumbnailSrc !== h && !Pe.thumbnailFailedSrcs.has(h) && An(h, k, y), h || yr(), ci({
      ready: !!h,
      visible: !!h && cd(),
      duration: k,
      frameCount: N,
      fps: y,
      hasAudio: A,
      loop: !!Y.loop,
      muted: !!Y.muted,
      volume: Number(Y.volume ?? C.videoTransport.volume ?? 1),
      thumbnailCount: C.videoTransport.thumbnailCount
    }), h || null;
  }
  function hd(i, s = null) {
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
  function ac(i, s = null) {
    return mu(e, i, Be, s || (() => de()));
  }
  function sc(i = null) {
    return $n(e, "external-sticker") ? ac(Es, i) : null;
  }
  function pd() {
    if (!$n(e, "external-sticker")) return null;
    const i = ta(nA)[0];
    if (!i || typeof i != "object") return null;
    const s = ta(tA).map(pu).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const l = pu(ta(eA)[0] || null);
    return l ? { src: l, meta: i } : null;
  }
  function Dy() {
    const i = v.stickers.find(Vt), s = i ? pd() : null, l = s ? b0(i.clip, p.frame, v.timeline.fps, s.meta) : null;
    ar.follow({ src: (s == null ? void 0 : s.src) || "", time: l, playing: kt.advancing, fps: v.timeline.fps });
    const u = i ? fc(i) : null, h = s != null && s.frames ? qa.picture(s.frames, l, s.meta, u) : ar.picture(Xn, u);
    return h ? { media: h, revision: ic(h), source: _0(s, u) } : null;
  }
  function fi(i, s, l) {
    const u = Math.max(1, Number(s || 1)), h = Math.max(1, Number(l || 1)), m = J(Number(i || 30), 0.1, 179) * xr, y = 2 * Math.atan(Math.tan(m * 0.5) * (h / u));
    return J(y * Ki, 0.1, 179);
  }
  function Ly(i) {
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
      const y = Number(m.yaw_deg), _ = Number(m.pitch_deg), k = Number(m.roll_deg), N = Number(m.hFOV_deg);
      if (![y, _, k, N].every((W) => Number.isFinite(W))) return null;
      let A = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(A, -0) && (A = 0);
      const I = {
        yaw_deg: A,
        pitch_deg: J(_, -89.9, 89.9),
        roll_deg: k,
        hFOV_deg: J(N, 0.1, 179)
      }, V = Number(l.source_aspect);
      return Number.isFinite(V) && V > 0 && (I.source_aspect = V), I;
    } catch {
      return null;
    }
  }
  function md(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Ji(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Bt(Number.isFinite(s) ? s : 0),
        pitch_deg: J(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: J(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function Ry(i) {
    var _;
    if (!i || typeof i != "object") return md(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), u = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), h = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let y = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const k = J(h, 0.1, 179) * xr, N = J(m, 0.1, 179) * xr, A = Math.tan(N * 0.5);
      if (Math.abs(A) > 1e-6) {
        const I = Math.tan(k * 0.5) / A;
        Number.isFinite(I) && I > 0 && (y = I);
      }
    }
    if (i != null && i.asset_id && ((_ = v == null ? void 0 : v.assets) != null && _[i.asset_id])) {
      const k = v.assets[i.asset_id], N = Number((k == null ? void 0 : k.w) || 0), A = Number((k == null ? void 0 : k.h) || 0);
      N > 0 && A > 0 && (y = N / A);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Bt(Number.isFinite(s) ? s : 0),
        pitch_deg: J(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(u) ? u : 0,
        hFOV_deg: J(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function $y(i) {
    return Kn.linkedValue(e, i);
  }
  function Vy(i, s, l) {
    const u = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Ly(s);
    if (u) {
      const y = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || u.source_aspect || 1), _ = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(u.yaw_deg || 0),
        pitch_deg: Number(u.pitch_deg || 0),
        hFOV_deg: Number(u.hFOV_deg || 30),
        vFOV_deg: fi(u.hFOV_deg, y, _),
        rot_deg: Number(u.roll_deg || 0)
      };
    }
    const h = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(p.viewYaw || 0),
      pitch_deg: Number(p.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: fi(30, h, m),
      rot_deg: 0
    };
  }
  function zy() {
    const i = sc(() => {
      ei(e, "image-loaded");
    }), s = $n(e, "external-sticker") ? hd(rc("pano_sticker_input_pose"), null) : null;
    return I0(v, C0(e, { pose: s, image: i }));
  }
  function jy() {
    var _;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((k) => String((k == null ? void 0 : k.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((_ = e.getInputLink(i)) == null ? void 0 : _.id) ?? null : null, l = sc(() => {
      ei(e, "image-loaded");
    }), u = hd(rc("pano_sticker_input_pose"), null), h = $y("sticker_state"), m = Kn.externalStateHash(e, h), y = s == null ? null : Vy(u, h, l);
    return A0(v, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: y,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function gd(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? zy() : jy();
    if (s.changed) {
      const l = v.stickers.find(Vt);
      v.stickers = s.state.stickers, v.active = s.state.active, l && p.selectedId === l.id && !v.stickers.some((u) => u.id === l.id) && (p.selectedId = null, p.selectedIds = []), lt(), ze(), Xe();
    }
    de();
  }
  function na(i = {}) {
    const l = i.preservePanelValues !== !1 ? Xt(Nt()) : null;
    l && (p.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: qr(l)
    }), p.selectedId = null, p.selectedIds = [], p.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function Hy() {
    if (t !== "cutout") return;
    const i = He();
    i && (p.selectedId = String(i.id || "") || null, p.selectedIds = p.selectedId ? [p.selectedId] : []);
  }
  function lc() {
    if (t !== "cutout") return;
    const i = He();
    xo(C.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Ae.camera : Ae.plus_circle
    });
  }
  function yd() {
    const i = t === "cutout" && p.mode === "frame", s = !i && !!p.showGrid;
    xo(C.floatingButtons, "action", "reset-view", {
      disabled: r || i
    }), xo(C.floatingButtons, "action", "toggle-grid", {
      icon: s ? Ae.eye : Ae.eye_dashed,
      pressed: s ? "true" : "false",
      label: s ? "Hide Grid" : "Show Grid",
      tip: s ? "Hide grid" : "Show grid",
      disabled: r || i
    });
  }
  function zr() {
    var l;
    const i = !!He();
    p.mode === "frame" && !i && (p.mode = "pano"), p.outputPreviewRect = null, C.viewButtons.forEach((u) => {
      const h = u.key === p.mode;
      u.pressed = h ? "true" : "false", u.visible = !(u.key === "frame" && t !== "cutout"), u.disabled = u.key === "frame" ? !i : !1;
    });
    const s = t === "cutout" && p.mode === "frame" ? He() : null;
    C.frameRail.visible = !!s, C.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, C.frameRollKnob.visible = !!s && !r && s.locked !== !0, C.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, C.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), C.frameRollKnob.displayValue = So(C.frameRollKnob.rollDeg), C.frameRollKnob.dragging = ((l = p.interaction) == null ? void 0 : l.kind) === "roll_frame", C.frameRollKnob.armed = !!s && p.altModifier === !0, C.frameRail.rollKnob = C.frameRollKnob, C.frameRail.aspectLabel = s ? qr(s) : "", C.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((u) => ({
      value: u,
      label: u,
      active: !!s && String(qr(s)) === u
    })), s || (C.frameRail.aspectOpen = !1), C.outputPreviewToggle.visible = t === "cutout" && p.mode !== "frame" && !!He(), t === "cutout" && C.cameraPreview && (C.cameraPreview.visible = p.mode !== "frame", C.cameraPreview.expanded = !!p.outputPreviewExpanded, C.cameraPreview.settled = C.cameraPreview.settled === !0 && Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame), yd(), nh() ? vt(p.pointerPos) : Ne(p.mode === "pano" ? "grab" : "default");
  }
  function Gy() {
    const s = kd({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function bd() {
    return o0({ yaw_deg: p.viewYaw, pitch_deg: p.viewPitch, roll_deg: 0, hFOV_deg: p.viewFov }, E.width, E.height);
  }
  function cc() {
    const i = `${p.viewYaw}|${p.viewPitch}|${p.viewFov}|${E.width}|${E.height}`;
    return $r.key !== i && ($r = { key: i, projection: a0(bd(), E.width, E.height) }), $r.projection;
  }
  function ra(i) {
    const s = cc().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function uc(i, s) {
    return cc().ray(i, s);
  }
  function di() {
    const i = E.width, s = E.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const _ = s, k = _ * l;
      return { x: (i - k) * 0.5, y: 0, w: k, h: _ };
    }
    const h = i, m = h / l;
    return { x: 0, y: (s - m) * 0.5, w: h, h: m };
  }
  function fc(i) {
    var y;
    if (i && typeof i == "object" && (Vt(i) || i.external === !0))
      return sc(() => {
        ei(e, "image-loaded");
      });
    const s = S ? ia(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Be.get(s);
    if (l) return l;
    const u = S ? Zg(i.source) : (y = v.assets) == null ? void 0 : y[s], h = dA(u);
    if (!h) return null;
    const m = new Image();
    return oy(m, h), m.onload = () => {
      ay(m, h), de();
    }, m.onerror = () => {
      sy(m, h), de();
    }, m.src = h, Be.set(s, m), m;
  }
  function ia(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function vd(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const u = Tt.get(l);
    if (u)
      return u.complete || u.width || u.naturalWidth, u;
    const h = new Image();
    return h.onload = () => {
      typeof s == "function" && s();
    }, h.src = l, Tt.set(l, h), h;
  }
  function Ky(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = cn.get(s);
    if (l) return l.ready ? l : null;
    const u = vd(i, () => {
      const A = cn.get(s);
      A && (A.ready = !1), de({ localOnly: !0 });
    });
    if (!u || !(u.complete || u.width || u.naturalWidth)) return null;
    const h = Number(u.naturalWidth || u.width || 0), m = Number(u.naturalHeight || u.height || 0);
    if (h < 1 || m < 1) return null;
    const y = document.createElement("canvas");
    y.width = h, y.height = m;
    const _ = y.getContext("2d", { willReadFrequently: !0 });
    if (!_) return null;
    _.clearRect(0, 0, h, m), _.drawImage(u, 0, 0, h, m);
    const k = _.getImageData(0, 0, h, m).data, N = { canvas: y, width: h, height: m, alpha: k, ready: !0 };
    return cn.set(s, N), N;
  }
  function By(i, s, l = 1, u = 0) {
    if (!i || typeof i != "object") return i;
    const h = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = qn(Number(i.u || 0), h), _ = Number(i.v || 0) - m, k = Math.max(0.02, Number(l || 1)), N = Number(u || 0) * xr, A = Math.cos(N), I = Math.sin(N), V = y / k, W = _ / k, ne = V * A + W * I, Z = -V * I + W * A;
    return {
      ...i,
      u: ((h + ne) % 1 + 1) % 1,
      v: m + Z
    };
  }
  function Wy(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const u = (i == null ? void 0 : i.transform) || {}, h = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(u.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(u.dv || 0)
    }, y = By(
      m,
      h,
      Number(u.scale || 1),
      Number(u.rot_deg || 0)
    ), _ = Number(l.u1 || 0) - Number(l.u0 || 0), k = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(_ > 1e-6) || !(k > 1e-6)) return null;
    const N = qn(Number(y.u || 0), Number(l.u0 || 0)) / _, A = (Number(y.v || 0) - Number(l.v0 || 0)) / k;
    if (N < 0 || N > 1 || A < 0 || A > 1) return 0;
    const I = Ky(i);
    if (!I) return null;
    const V = J(Math.floor(N * I.width), 0, I.width - 1), W = J(Math.floor(A * I.height), 0, I.height - 1);
    return Number(I.alpha[(W * I.width + V) * 4 + 3] || 0);
  }
  function _d(i, s, l, u = null) {
    if (!(s != null && s.visible) || !Ur(l, s.corners)) return !1;
    const h = u || dr(l, performance.now()), m = Wy(i, h);
    return m === null ? !0 : m > 8;
  }
  function Uy() {
    var u, h, m, y, _, k, N, A;
    const i = ((h = (u = p.paintEngine) == null ? void 0 : u.getErpTarget) == null ? void 0 : h.call(u, ql(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((_ = (y = i == null ? void 0 : i.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : _.width) || 2048)), l = Math.max(1, Number(((k = i == null ? void 0 : i.descriptor) == null ? void 0 : k.height) || ((A = (N = i == null ? void 0 : i.displayPaint) == null ? void 0 : N.canvas) == null ? void 0 : A.height) || 1024));
    return { width: s, height: l };
  }
  function Yy() {
    var W, ne, Z;
    const i = p.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = jn(), u = `${Zl()}:${l.width}:${l.height}`;
    if (((W = p._activePaintEraserPreviewInfo) == null ? void 0 : W.cacheKey) === u)
      return p._activePaintEraserPreviewInfo.value || null;
    const h = gn(s), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const te = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = vc(te, h.targetSpace, !0);
    }
    const y = oa(l.width, l.height, { readback: !0 });
    if (!$d(y, h, { w: l.width, h: l.height })) return null;
    const _ = ((Z = (ne = y.ctx) == null ? void 0 : ne.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Z.data) || null;
    if (!_) return null;
    let k = l.width, N = l.height, A = -1, I = -1;
    for (let te = 0; te < l.height; te += 1)
      for (let oe = 0; oe < l.width; oe += 1)
        _[(te * l.width + oe) * 4 + 3] <= 8 || (oe < k && (k = oe), te < N && (N = te), oe > A && (A = oe), te > I && (I = te));
    if (A < k || I < N)
      return p._activePaintEraserPreviewInfo = { cacheKey: u, value: null }, null;
    const V = {
      surface: y,
      bounds: { minX: k, minY: N, maxX: A, maxY: I },
      key: `${u}:${k}:${N}:${A}:${I}`
    };
    return p._activePaintEraserPreviewInfo = { cacheKey: u, value: V }, p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), V;
  }
  function co() {
    p._activePaintEraserPreviewInfo = null, p._liveEraserPreviewCanvasCache = null;
  }
  function Xy(i, s, l) {
    var u, h;
    if (!i) return null;
    if (i.type === "rasterObject" && ((u = i.item) != null && u.bbox)) {
      const m = i.item.bbox, y = ((h = i.item) == null ? void 0 : h.transform) || {}, _ = Number(m.u0 || 0) + Number(y.du || 0), k = Number(m.u1 || 0) + Number(y.du || 0), N = Number(m.v0 || 0) + Number(y.dv || 0), A = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(J(N, 0, 1) * l),
        maxY: Math.ceil(J(A, 0, 1) * l),
        wraps: k - _ >= 1 || _ < 0 || k > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = cr(i.actionGroupId, "paint"), y = li(i.actionGroupId, "paint", m);
      if (!y) return null;
      const _ = y.centerUv.u - y.halfW, k = y.centerUv.u + y.halfW, N = y.centerUv.v - y.halfH, A = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((_ % 1 + 1) % 1 * s),
        maxX: Math.ceil((k % 1 + 1) % 1 * s),
        minY: Math.floor(J(N, 0, 1) * l),
        maxY: Math.ceil(J(A, 0, 1) * l),
        wraps: k - _ >= 1 || _ < 0 || k > 1
      };
    }
    return null;
  }
  function qy(i, s, l) {
    if (!i || !s) return !1;
    const u = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: l - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], h = u(i), m = u(s);
    return h.some((y) => m.some((_) => !(y.maxX < _.minX || _.maxX < y.minX || y.maxY < _.minY || _.maxY < y.minY)));
  }
  function Jy(i, s, l) {
    var Se, Ge, Ue, nt, ye, ae, pe;
    if (!i || !s || !((Se = l == null ? void 0 : l.surface) != null && Se.canvas) || s.type !== "rasterObject") return i;
    const u = Number(i.width || l.surface.canvas.width || 0), h = Number(i.height || l.surface.canvas.height || 0);
    if (u < 1 || h < 1) return i;
    const m = Xy(s, u, h);
    if (m && !qy(m, l.bounds, u)) return i;
    const y = String(((Ge = s.item) == null ? void 0 : Ge.id) || s.id || ""), _ = ((Ue = s.item) == null ? void 0 : Ue.transform) || {}, k = `${l.key}:${y}:${u}:${h}:${Number(_.du || 0).toFixed(6)}:${Number(_.dv || 0).toFixed(6)}:${Number(_.rot_deg || 0).toFixed(3)}:${Number(_.scale || 1).toFixed(4)}`, N = p._liveEraserPreviewCanvasCache instanceof Map ? p._liveEraserPreviewCanvasCache : p._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (N.has(k)) return N.get(k);
    const A = J(Math.floor(Number(((nt = l.bounds) == null ? void 0 : nt.minX) || 0)), 0, Math.max(0, u - 1)), I = J(Math.floor(Number(((ye = l.bounds) == null ? void 0 : ye.minY) || 0)), 0, Math.max(0, h - 1)), V = J(Math.ceil(Number(((ae = l.bounds) == null ? void 0 : ae.maxX) || 0)), A, Math.max(0, u - 1)), W = J(Math.ceil(Number(((pe = l.bounds) == null ? void 0 : pe.maxY) || 0)), I, Math.max(0, h - 1)), ne = Math.max(1, V - A + 1), Z = Math.max(1, W - I + 1), te = oa(u, h, { readback: !0 });
    te.ctx.clearRect(0, 0, u, h), te.ctx.drawImage(i, 0, 0);
    const oe = te.ctx.getImageData(A, I, ne, Z);
    te.ctx.save(), te.ctx.globalCompositeOperation = "destination-out", te.ctx.drawImage(l.surface.canvas, 0, 0), te.ctx.restore();
    const he = te.ctx.getImageData(A, I, ne, Z);
    let re = !1;
    for (let we = 0; we < ne * Z; we += 1) {
      const Re = oe.data[we * 4 + 3], We = he.data[we * 4 + 3];
      if (Re > We) {
        re = !0;
        break;
      }
    }
    return re ? (N.size > 64 && N.clear(), N.set(k, te.canvas), te.canvas) : (N.set(k, i), i);
  }
  function wd(i, s = null) {
    const l = rn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), u = (i == null ? void 0 : i.bbox) || null;
    if (!l || !u) return null;
    const h = vd(i, s);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: y } = Uy(), _ = (i == null ? void 0 : i.transform) || {}, k = [
      l,
      m,
      y,
      u.u0,
      u.v0,
      u.u1,
      u.v1,
      _.du,
      _.dv,
      _.rot_deg,
      _.scale,
      aa()
    ].join(":"), N = nn.get(k);
    if (N) return N;
    nn.size > 64 && nn.clear();
    const A = document.createElement("canvas");
    A.width = m, A.height = y;
    const I = A.getContext("2d");
    if (!I) return null;
    const V = Number(u.u0 || 0) * m, W = Number(u.v0 || 0) * y, ne = Math.max(1, (Number(u.u1 || 0) - Number(u.u0 || 0)) * m), Z = Math.max(1, (Number(u.v1 || 0) - Number(u.v0 || 0)) * y), te = V + ne * 0.5 + Number(_.du || 0) * m, oe = W + Z * 0.5 + Number(_.dv || 0) * y, he = Number(_.rot_deg || 0) * xr, re = Math.max(0.01, Number(_.scale || 1));
    for (const Se of [-m, 0, m])
      I.save(), I.translate(te + Se, oe), I.rotate(he), I.scale(re, re), I.drawImage(h, -ne * 0.5, -Z * 0.5, ne, Z), I.restore();
    return nn.set(k, A), A;
  }
  async function dc(i, s) {
    const l = await new Promise((_) => i.toBlob(_, "image/png")), u = new FormData();
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
  let is = null, os = !1;
  function Zy() {
    const i = dm(v.painting), { width: s, height: l } = la();
    return Hx(v.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function xd() {
    const i = String(e.id ?? "0"), s = Os.get(i);
    if (os && s) return s;
    const l = (async () => {
      var m, y, _, k, N, A, I, V, W, ne, Z, te;
      const u = sa(), h = dm(v.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, is = u, On());
        return;
      }
      if (is !== u && !os) {
        os = !0;
        try {
          fs();
          const oe = ql(!1), he = ((y = (m = p.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, oe)) || null, re = ((_ = he == null ? void 0 : he.displayPaint) == null ? void 0 : _.canvas) || null, Se = ((k = he == null ? void 0 : he.committedMask) == null ? void 0 : k.canvas) || null, Ge = Math.max(1, Number(((N = he == null ? void 0 : he.descriptor) == null ? void 0 : N.width) || (re == null ? void 0 : re.width) || (Se == null ? void 0 : Se.width) || 2048)), Ue = Math.max(1, Number(((A = he == null ? void 0 : he.descriptor) == null ? void 0 : A.height) || (re == null ? void 0 : re.height) || (Se == null ? void 0 : Se.height) || 1024));
          (!re && h.totalPaintCount > 0 || !Se && h.totalMaskCount > 0) && ((!p._paintLayerSyncBlankSurface || Number(((I = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : I.width) || 0) !== Ge || Number(((V = p._paintLayerSyncBlankSurface.canvas) == null ? void 0 : V.height) || 0) !== Ue) && (p._paintLayerSyncBlankSurface = oa(Ge, Ue)), p._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ge, Ue));
          const nt = re || h.totalPaintCount > 0 && ((W = p._paintLayerSyncBlankSurface) == null ? void 0 : W.canvas) || null, ye = Se || h.totalMaskCount > 0 && ((ne = p._paintLayerSyncBlankSurface) == null ? void 0 : ne.canvas) || null;
          if (!nt && !ye) return;
          let ae = null, pe = null;
          const we = [];
          if (h.totalPaintCount > 0) {
            ae = await dc(nt, `pano_paint_${i}.png`);
            for (const Re of oe) {
              const We = String(Re || "").trim();
              if (!We) continue;
              const Te = ((te = (Z = p.paintEngine) == null ? void 0 : Z.getGroupDisplayCanvas) == null ? void 0 : te.call(Z, We)) || null;
              if (!Te) continue;
              const ft = We.replace(/[^a-zA-Z0-9_-]+/g, "_"), qe = await dc(Te, `pano_group_${i}_${ft}.png`);
              qe && we.push({
                id: We,
                actionGroupId: We,
                image: qe
              });
            }
          }
          h.totalMaskCount > 0 && (pe = await dc(ye, `pano_mask_${i}.png`)), u === sa() && (v.painting_layer = {
            paint: ae,
            mask: pe,
            groups: we,
            revision: u
          }, is = u, On());
        } catch (oe) {
          throw oe;
        } finally {
          os = !1;
        }
      }
    })();
    return Os.set(i, l), l.finally(() => {
      Os.get(i) === l && Os.delete(i);
    }), l;
  }
  function hc() {
    if (t === "cutout") {
      const h = fd();
      if (h) return h;
      const m = gu(
        e,
        ["erp_image", "bg_erp"],
        () => de(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !of(m) ? m : mu(e, "pano_input_images", Be, () => de()) || m || null;
    }
    const i = fd();
    if (i) return i;
    const s = $n(e, "background") ? mu(e, "pano_input_images", Be, () => de()) : null;
    if (s && !of(s)) return s;
    if (Y instanceof HTMLVideoElement && Y.dataset.panoSrc) return Y;
    const l = Sd();
    return gu(e, l, () => de(), `background:${l.join("|")}`) || s || null;
  }
  function Sd() {
    if (t === "cutout") return ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((u) => String((u == null ? void 0 : u.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function pc(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Qy() {
    if (Ut.failed) return { status: tr, detail: "renderer" };
    if (!Ut.ready) return { status: pr, detail: "boot" };
    let i = Yo;
    const s = [];
    if (p.showPanorama) {
      const l = hc();
      i = Pe.videoFailed ? tr : rf(l, pc);
    }
    if (p.showObjects)
      for (const l of Ja()) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const u = fc(l);
        s.push(rf(u, pc));
      }
    return q2({
      presented: Ce.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function uo() {
    const i = new Set(
      (v.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(v.assets || {}).forEach((s) => {
      i.has(s) || (delete v.assets[s], Be.delete(s));
    });
  }
  function mc(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(J(i.y, -1, 1))
    };
  }
  function gc(i, s = null) {
    const { lon: l, lat: u } = mc(i), h = di();
    let m = h.x + (l / (2 * Math.PI) + 0.5) * h.w;
    const y = h.y + (0.5 - u / Math.PI) * h.h;
    if (s !== null) {
      for (; m - s > h.w / 2; ) m -= h.w;
      for (; m - s < -h.w / 2; ) m += h.w;
    }
    return { x: m, y, z: 1 };
  }
  function as(i) {
    const s = Xt(i), l = Jo(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), u = Math.tan(J(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * xr), h = Math.tan(J(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * xr);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: u,
      tanY: h
    };
  }
  function hi(i, s, l) {
    return _A(um(um(i.centerDir, fm(i.right, s)), fm(i.up, l)));
  }
  function kd(i) {
    const s = as(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u, v: h }) => hi(s, u * s.tanX, h * s.tanY));
  }
  function Md(i, s, l) {
    const u = as(i), h = (s * 2 - 1) * u.tanX, m = (1 - l * 2) * u.tanY;
    return hi(u, h, m);
  }
  function Nd(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: J((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function eb(i) {
    var k, N, A, I;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, u = Math.max(0.01, Number(((k = i == null ? void 0 : i.transform) == null ? void 0 : k.scale) || 1)), h = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.rot_deg) || 0), m = Number(((A = i == null ? void 0 : i.transform) == null ? void 0 : A.du) || 0), y = Number(((I = i == null ? void 0 : i.transform) == null ? void 0 : I.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((V) => Za(Qa(V, l, u, h), m, y));
  }
  function tb(i) {
    const s = rn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, u = (i == null ? void 0 : i.bbox) || {}, h = `${s}:${p.mode}:${aa()}:${u.u0}:${u.v0}:${u.u1}:${u.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (p.mode === "frame") {
      const m = He(), y = m ? en(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((E == null ? void 0 : E.width) || 0))}:${Math.round(Number((E == null ? void 0 : E.height) || 0))}`;
  }
  function nb(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = zn(i) ? "frame" : gt(i) ? "sticker" : "item", u = Xt(i), h = [
      l,
      s,
      p.mode,
      Number((u == null ? void 0 : u.yaw_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.pitch_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.hFOV_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.vFOV_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.rot_deg) || 0).toFixed(4),
      Number((u == null ? void 0 : u.roll_deg) || 0).toFixed(4),
      qr(u),
      sr(i) && _i(i.clip, p.frame)
    ].join(":");
    if (p.mode === "frame") {
      const m = He(), y = m ? en(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(p.viewYaw || 0) * 100)}:${Math.round(Number(p.viewPitch || 0) * 100)}:${Math.round(Number(p.viewFov || 0) * 100)}:${Math.round(Number((E == null ? void 0 : E.width) || 0))}:${Math.round(Number((E == null ? void 0 : E.height) || 0))}`;
  }
  function Pd() {
    var i, s;
    return ((s = (i = p.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function rb() {
    return Pd() ? `${Td()}:mask_display` : "";
  }
  function Ad(i) {
    if (!p.showMask) return i;
    const s = Pd();
    if (!s) return i;
    const l = rb(), u = i.reduce((y, _) => Math.max(y, Number((_ == null ? void 0 : _.zIndex) || 0)), -1), h = (Array.isArray(v.stickers) ? v.stickers : []).reduce((y, _) => Math.max(y, Number((_ == null ? void 0 : _.z_index) || 0)), -1), m = Math.max(u, h);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function ib() {
    var u, h;
    const i = Jl(!0), s = Yy(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const _ = ((h = (u = p.paintEngine) == null ? void 0 : u.getGroupDisplayCanvas) == null ? void 0 : h.call(u, y)) || null;
        if (!_) continue;
        l.push({
          id: `paint_group:${y}`,
          source: _,
          revision: `${Td()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, _ = rn((y == null ? void 0 : y.id) || m.id || "");
        if (!_) continue;
        const k = wd(y, () => de());
        if (!k) continue;
        const N = Jy(k, m, s), A = (y == null ? void 0 : y.transform) || {};
        l.push({
          id: `raster:${_}`,
          source: N,
          revision: [
            sa(),
            (s == null ? void 0 : s.key) || "",
            _,
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
    return Ad(l);
  }
  function ob() {
    return (p.showObjects ? ib() : Ad([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function ss() {
    return ro || (ro = ab()), ro;
  }
  function ab() {
    const i = hc(), s = ob(), l = { ...v.assets };
    for (const N of S ? [] : v.stickers) {
      const A = String((N == null ? void 0 : N.asset_id) || "");
      A && !l[A] && Be.has(A) && (l[A] = { type: "comfy_image", filename: A });
    }
    const u = S ? v.stickers.map((N) => Yl(N) ? { ...N, source: { kind: "file", filename: ia(N) } } : N) : v.stickers, h = JSON.stringify([u, Object.keys(l)]);
    Vr.key !== h && (Vr = { key: h, sceneState: Wo({ ...v, stickers: u, assets: l, painting: null }) });
    const m = ar ? Dy() : null, y = p.showObjects ? s0(Vr.sceneState, p.frame, v.stickers, {
      media: (N) => {
        if (ar && Vt(N)) return m;
        const A = fc(N);
        return A ? { media: A, revision: ic(A) } : null;
      },
      paintLayers: s
    }) : s.map((N) => ({ kind: "erp", ...N })), _ = i && (i === Y || i === $t) ? Y.dataset.panoSrc : i;
    return { background: p.showPanorama && pc(i) ? { media: i, revision: ic(i), coverage: Gn(v.coverage), source: _ } : null, layers: y };
  }
  function sb() {
    if (!Ce.backgroundDirty && Ce.backgroundWasVisible) return;
    const { background: i, layers: s } = ss(), l = se.width, u = se.height, h = Ut.render({
      width: l,
      height: u,
      camera: bd(),
      background: i,
      layers: s
    }), m = se.getContext("2d");
    m.clearRect(0, 0, l, u), !i && !s.length ? (m.fillStyle = "#070707", m.fillRect(0, 0, l, u)) : h && m.drawImage(h.canvas, h.x, h.y, h.width, h.height, 0, 0, l, u), Ce.backgroundWasVisible = !!h, Ce.backgroundDirty = !1, z = null;
  }
  function Cd(i, s, l, u) {
    const { background: h, layers: m } = ss();
    if (!h && !m.length) return !1;
    const y = Ut.render({ width: s.w, height: s.h, camera: Ws(l), background: h, layers: m, owner: u });
    return y ? (i.drawImage(y.canvas, y.x, y.y, y.width, y.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function lb(i) {
    const s = ss(), l = JSON.stringify([i, se.width, se.height, Pp(s)]);
    if (l === z) return;
    const u = Ut.renderUnwrap({ width: i.w, height: i.h, ...s }), h = se.getContext("2d");
    h.fillStyle = "#070707", h.fillRect(0, 0, se.width, se.height), u && h.drawImage(u.canvas, u.x, u.y, u.width, u.height, i.x, i.y, i.w, i.h), z = u ? l : null, Ce.backgroundWasVisible = !1;
  }
  function cb(i = !1) {
    const s = E.width, l = E.height, u = di();
    if (P.globalAlpha = 1, P.lineWidth = 1, i || P.clearRect(0, 0, s, l), fs(), lb(u), p.showGrid && !p.fullscreen) {
      P.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = u.x + u.w * m / 16;
        P.beginPath(), P.moveTo(y, u.y), P.lineTo(y, u.y + u.h), P.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = u.y + u.h * m / 8;
        P.beginPath(), P.moveTo(u.x, y), P.lineTo(u.x + u.w, y), P.stroke();
      }
      P.strokeStyle = "rgba(250, 250, 250, 0.86)", P.lineWidth = 1.2, P.beginPath(), P.moveTo(u.x, u.y + u.h / 2), P.lineTo(u.x + u.w, u.y + u.h / 2), P.stroke(), P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center";
      const h = u.y + u.h * 0.57;
      P.fillText("Left", u.x + u.w * 0.25, h), P.fillText("Front", u.x + u.w * 0.5, h), P.fillText("Right", u.x + u.w * 0.75, h), P.fillText("Back", u.x + 38, h), P.fillText("Back", u.x + u.w - 38, h);
    }
  }
  function Id(i, s, l = 1) {
    let u = !1;
    P.strokeStyle = s, P.lineWidth = l, P.beginPath();
    for (const h of i) {
      const m = ra(h);
      if (!m) {
        u = !1;
        continue;
      }
      u ? P.lineTo(m.x, m.y) : (P.moveTo(m.x, m.y), u = !0);
    }
    P.stroke();
  }
  function ub(i = !1) {
    const s = E.width, l = E.height;
    if (i || P.clearRect(0, 0, s, l), fs(), sb(), p.showGrid && !p.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push(Rn(h, y));
        Id(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push(Rn(y, h));
        Id(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const u = [
        { name: "Left", dir: Rn(-90, 0) },
        { name: "Front", dir: Rn(0, 0) },
        { name: "Right", dir: Rn(90, 0) },
        { name: "Back", dir: Rn(180, 0) }
      ];
      P.fillStyle = "rgba(250, 250, 250, 0.42)", P.font = "500 11px Geist, sans-serif", P.textAlign = "center", u.forEach((h) => {
        const m = ra(h.dir);
        m && P.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function fb(i, s = null, l = null, u = null) {
    if (p.mode === "frame") {
      const h = s || He();
      if (!h) return [];
      const m = l || en(h);
      return Hb(i, h, m);
    }
    return Vd(i, u);
  }
  function ls(i, s = null, l = null, u = null, h = null) {
    if (!i) return null;
    if (p.mode === "unwrap") {
      const y = Vd([i], h);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = fo(i);
    return m ? jr(m, s, l, u) : null;
  }
  function db(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), u = cr(l, i.layerKind), h = li(l, i.layerKind, u), m = (h == null ? void 0 : h.centerUv) || ec(l, i.layerKind, u), y = p.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, _ = [], k = p.mode === "frame" ? He() : null, N = k ? en(k) : null;
    for (const re of u) {
      const Se = (re == null ? void 0 : re.geometry) || null, Ge = (Se == null ? void 0 : Se.geometryKind) === "lasso_fill" ? Se == null ? void 0 : Se.points : (Se == null ? void 0 : Se.processedPoints) || (Se == null ? void 0 : Se.rawPoints) || (Se == null ? void 0 : Se.points) || [], Ue = fb(Ge, k, N, y).filter((ae) => Number.isFinite(ae == null ? void 0 : ae.x) && Number.isFinite(ae == null ? void 0 : ae.y));
      if (!Ue.length) continue;
      const nt = mi(String((re == null ? void 0 : re.toolKind) || "pen")), ye = Fn[nt] || Fn[Br];
      _.push({
        points: Ue,
        closed: String((Se == null ? void 0 : Se.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((re == null ? void 0 : re.size) || 10) * Math.max(0.1, Number((ye == null ? void 0 : ye.sizeScale) ?? 1)) + 10),
        layerKind: String((re == null ? void 0 : re.layerKind) || i.layerKind || "paint")
      });
    }
    const A = ls(m, null, k, N, y);
    if (!A) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, re), re;
    }
    const V = hy(h).map((re) => ls(re, A.x, k, N, y)).filter((re) => Number.isFinite(re == null ? void 0 : re.x) && Number.isFinite(re == null ? void 0 : re.y)).map((re) => ({ x: Number(re.x || 0), y: Number(re.y || 0) }));
    if (V.length < 4) {
      const re = { visible: !1, kind: "strokeGroup" };
      return p._strokeGeomCache.set(s, re), re;
    }
    const W = (re, Se) => ({
      x: (Number((re == null ? void 0 : re.x) || 0) + Number((Se == null ? void 0 : Se.x) || 0)) * 0.5,
      y: (Number((re == null ? void 0 : re.y) || 0) + Number((Se == null ? void 0 : Se.y) || 0)) * 0.5,
      a: re,
      b: Se
    }), ne = W(V[0], V[1]), Z = W(V[1], V[2]), te = W(V[2], V[3]), oe = W(V[3], V[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(A.x || 0), y: Number(A.y || 0) },
      corners: V,
      edgeMidpoints: [
        { edge: "top", ...ne },
        { edge: "right", ...Z },
        { edge: "bottom", ...te },
        { edge: "left", ...oe }
      ],
      rotateStemBase: { x: ne.x, y: ne.y },
      rotateHandle: { x: ne.x, y: ne.y - 30 },
      strokePaths: _,
      visible: !0
    };
    return p._strokeGeomCache.set(s, he), he;
  }
  function hb(i, s) {
    const l = p.mode === "frame" ? He() : null, u = l ? en(l) : null, h = Nd(i), m = p.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, y = ls(h, null, l, u, m), k = eb(i).map((V) => ls(V, (y == null ? void 0 : y.x) ?? null, l, u, m)).filter((V) => Number.isFinite(V == null ? void 0 : V.x) && Number.isFinite(V == null ? void 0 : V.y));
    if (!Array.isArray(k) || k.length < 4) {
      const V = { visible: !1, kind: "rasterObject" };
      return p._strokeGeomCache.set(s, V), V;
    }
    const N = k.slice(0, 4).map((V) => ({ x: Number((V == null ? void 0 : V.x) || 0), y: Number((V == null ? void 0 : V.y) || 0) })), I = {
      kind: "rasterObject",
      center: {
        x: N.reduce((V, W) => V + Number(W.x || 0), 0) / N.length,
        y: N.reduce((V, W) => V + Number(W.y || 0), 0) / N.length
      },
      corners: N,
      visible: !0
    };
    return p._strokeGeomCache.set(s, I), I;
  }
  function jr(i, s = null, l = null, u = null, h = {}) {
    if (p.mode === "frame") {
      const A = l || He(), I = u || en(A);
      if (!A || !I) return null;
      const V = A ? ca(A, i) : null;
      return V ? {
        x: Number(I.x || 0) + Number(V.x || 0) * Number(I.w || 0),
        y: Number(I.y || 0) + Number(V.y || 0) * Number(I.h || 0),
        z: 1
      } : null;
    }
    if (p.mode === "unwrap") return gc(i, s);
    const m = 1e-4, y = cc().project(i, m);
    if (!Number.isFinite(y.z) || y.z <= m && !(h != null && h.clipBehind)) return null;
    const _ = E.width, k = E.height, N = Math.max(_, k) * 2;
    return {
      x: J(y.x, -N, _ + N),
      y: J(y.y, -N, k + N),
      z: Math.max(y.z, m),
      rawZ: y.z,
      clipped: y.z <= m
    };
  }
  function pb(i, s = []) {
    if (p.mode !== "pano" || gt(i)) return 1;
    const l = s.map((u) => Number((u == null ? void 0 : u.rawZ) ?? (u == null ? void 0 : u.z))).filter((u) => Number.isFinite(u));
    return l.length ? gA(0.035, 0.2, Math.min(...l)) : 1;
  }
  function mb(i) {
    if (sr(i) && !_i(i.clip, p.frame)) return { visible: !1 };
    const s = Xt(i), l = Rn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), u = p.mode === "frame" ? He() : null, h = u ? en(u) : null, m = p.mode === "pano" && (gt(i) || zn(i)), y = m ? { clipBehind: !0 } : null, _ = jr(l, null, u, h, y);
    if (!_) return { visible: !1 };
    const k = as(i), A = kd(i).map((pe) => jr(pe, _.x, u, h, y)).filter((pe) => Number.isFinite(pe == null ? void 0 : pe.x) && Number.isFinite(pe == null ? void 0 : pe.y));
    if (A.length < 4) return { visible: !1 };
    const I = hi(k, 0, k.tanY), V = hi(k, 0, k.tanY + Math.max(k.tanY * 0.43, 0.053)), W = jr(I, _.x, u, h, y);
    if (!W) return { visible: !1 };
    const ne = jr(V, (W == null ? void 0 : W.x) ?? _.x, u, h, y), Z = ((ne == null ? void 0 : ne.x) ?? W.x) - W.x, te = ((ne == null ? void 0 : ne.y) ?? W.y) - W.y, oe = Math.hypot(Z, te) || 1, he = {
      x: W.x + Z / oe * 30,
      y: W.y + te / oe * 30
    }, re = jr(hi(k, 0, k.tanY), _.x, u, h, y), Se = jr(hi(k, k.tanX, 0), _.x, u, h, y), Ge = jr(hi(k, 0, -k.tanY), _.x, u, h, y), Ue = jr(hi(k, -k.tanX, 0), _.x, u, h, y);
    if (!re || !Se || !Ge || !Ue) return { visible: !1 };
    const nt = [
      _,
      ...A,
      W,
      ne,
      re,
      Se,
      Ge,
      Ue
    ];
    if (m && !nt.some((pe) => Number((pe == null ? void 0 : pe.rawZ) ?? (pe == null ? void 0 : pe.z)) > 1e-4)) return { visible: !1 };
    const ye = pb(i, nt), ae = [
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
        x: Ge.x,
        y: Ge.y,
        a: { x: A[2].x, y: A[2].y },
        b: { x: A[3].x, y: A[3].y }
      },
      {
        edge: "left",
        x: Ue.x,
        y: Ue.y,
        a: { x: A[3].x, y: A[3].y },
        b: { x: A[0].x, y: A[0].y }
      }
    ];
    return {
      center: { x: _.x, y: _.y },
      corners: A.map((pe) => ({ x: pe.x, y: pe.y })),
      edgeMidpoints: ae,
      rotateStemBase: { x: W.x, y: W.y },
      rotateHandle: he,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ye,
      visible: !0
    };
  }
  function qt(i) {
    if (Qt(i)) {
      const h = String(i.actionGroupId || i.id || "").trim(), m = vy(h, i.layerKind), y = p._strokeGeomCache.get(m);
      return y || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), db(i, m));
    }
    if (pn(i)) {
      const h = tb(i), m = p._strokeGeomCache.get(h);
      return m || (p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear(), hb(i, h));
    }
    const s = nb(i), l = p._strokeGeomCache.get(s);
    if (l) return l;
    p._strokeGeomCache.size > 256 && p._strokeGeomCache.clear();
    const u = mb(i);
    return p._strokeGeomCache.set(s, u), u;
  }
  function cs(i, s, l, u = null) {
    const h = [];
    for (let m = 0; m <= l; m += 1) {
      const y = m / l;
      let _ = 0, k = 0;
      s === 0 ? (_ = y, k = 0) : s === 1 ? (_ = 1, k = y) : s === 2 ? (_ = 1 - y, k = 1) : (_ = 0, k = 1 - y);
      const N = Md(i, _, k), A = p.mode === "unwrap" ? gc(N, u) : ra(N);
      A && h.push(A);
    }
    return h;
  }
  function gb(i, s) {
    const l = Xt(i), u = Rn(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), h = p.mode === "unwrap" ? gc(u) : null, m = h ? h.x : null, y = p.mode === "pano" ? 28 : 20, _ = [
      cs(i, 0, y, m),
      cs(i, 1, y, m),
      cs(i, 2, y, m),
      cs(i, 3, y, m)
    ];
    Wf(P, _, { selected: s });
  }
  function yb() {
    const i = [...Array.isArray(v.shots) ? v.shots : []], s = [...Array.isArray(v.stickers) ? v.stickers : []].sort((l, u) => Number(l.z_index || 0) - Number(u.z_index || 0));
    return [...i, ...s];
  }
  function yc() {
    const i = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((l, u) => Number(u.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function us(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function Ed(i, s, l) {
    const u = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (u.length < 4) return;
    const h = J(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = P.globalAlpha;
    P.globalAlpha = m * h;
    const y = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", _ = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", k = s ? 3.2 : 2.6;
    us(P, u), P.fillStyle = _, P.fill(), P.strokeStyle = y, P.lineWidth = k, P.stroke(), P.save(), P.strokeStyle = y, P.lineWidth = s ? 3.2 : 2.6, P.lineCap = "round";
    const N = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (u[0].x + u[1].x) * 0.5, y: (u[0].y + u[1].y) * 0.5 },
      { edge: "right", x: (u[1].x + u[2].x) * 0.5, y: (u[1].y + u[2].y) * 0.5 },
      { edge: "bottom", x: (u[2].x + u[3].x) * 0.5, y: (u[2].y + u[3].y) * 0.5 },
      { edge: "left", x: (u[3].x + u[0].x) * 0.5, y: (u[3].y + u[0].y) * 0.5 }
    ], A = { top: "bottom", right: "left", bottom: "top", left: "right" }, I = s ? 12 : 9;
    N.forEach((V) => {
      const ne = N.find((he) => (he == null ? void 0 : he.edge) === A[V == null ? void 0 : V.edge]) || {
        x: (u[0].x + u[1].x + u[2].x + u[3].x) * 0.25,
        y: (u[0].y + u[1].y + u[2].y + u[3].y) * 0.25
      }, Z = ne.x - V.x, te = ne.y - V.y, oe = Math.hypot(Z, te) || 1;
      P.beginPath(), P.moveTo(V.x, V.y), P.lineTo(V.x + Z / oe * I, V.y + te / oe * I), P.stroke();
    }), P.restore(), P.globalAlpha = m;
  }
  function bb(i, s, l, u) {
    const h = J(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (zn(i)) {
      Ed(s, l, u);
      return;
    }
    if (gt(i)) {
      const y = P.globalAlpha;
      P.globalAlpha = y * My(i) * h, p.mode === "frame" ? (P.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : u ? "rgba(255, 89, 89, 0.72)" : "#71717a", P.lineWidth = l ? 2 : 1, us(P, s.corners), P.stroke()) : gb(i, l), P.globalAlpha = y;
      return;
    }
    const m = P.globalAlpha;
    P.globalAlpha = m * h, P.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : u ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", us(P, s.corners), P.fill(), P.strokeStyle = l ? "rgba(255, 255, 255, 1)" : u ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", P.lineWidth = l ? 2.8 : 1.9, us(P, s.corners), P.stroke(), P.globalAlpha = m;
  }
  function Od(i, s, l) {
    if (gt(i)) {
      K0(P, s, { accent: l });
      return;
    }
    P.fillStyle = l, s.corners.forEach((u) => {
      P.beginPath(), P.arc(u.x, u.y, 6.5, 0, Math.PI * 2), P.fill();
    }), zn(i) && (P.strokeStyle = l, P.lineCap = "round", P.lineWidth = 4, s.edgeMidpoints.forEach((u) => {
      var A, I, V, W;
      const h = (((A = u.b) == null ? void 0 : A.x) ?? u.x) - (((I = u.a) == null ? void 0 : I.x) ?? u.x), m = (((V = u.b) == null ? void 0 : V.y) ?? u.y) - (((W = u.a) == null ? void 0 : W.y) ?? u.y), y = Math.hypot(h, m) || 1, _ = h / y, k = m / y, N = 10;
      P.beginPath(), P.moveTo(u.x - _ * N, u.y - k * N), P.lineTo(u.x + _ * N, u.y + k * N), P.stroke();
    }), P.lineCap = "butt"), Qt(i) || (P.strokeStyle = "rgba(250, 250, 250, 0.9)", P.lineWidth = 1.8, P.beginPath(), P.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), P.lineTo(s.rotateHandle.x, s.rotateHandle.y), P.stroke(), P.fillStyle = l, P.beginPath(), P.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), P.fill());
  }
  function vb() {
    var m;
    const i = p.mode === "frame" ? [] : ur(), s = i.length > 1, l = t === "cutout" ? yb() : dn(), u = l.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${zn(y) ? "frame" : Number((y == null ? void 0 : y.z_index) || 0)}`).join("|");
    (!p._sortedItemsCache || p._sortedItemsCache.src !== l || p._sortedItemsCache.orderKey !== u) && (p._sortedItemsCache = {
      src: l,
      orderKey: u,
      sorted: [...l]
    });
    const h = p._sortedItemsCache.sorted;
    for (const y of h) {
      const _ = p.mode !== "frame" && !s && ad(y);
      if (p.mode === "frame" && !_ || !p.showObjects && !zn(y)) continue;
      const k = gt(y), N = zn(y), A = xn(y);
      if (!k && !N || sr(y) && !_i(y.clip, p.frame)) continue;
      const I = qt(y);
      if (t !== "stickers" && !I.visible)
        continue;
      const V = J(Number((I == null ? void 0 : I.visibilityAlpha) ?? 1), 0, 1);
      if (V <= 0.01) continue;
      const W = N && t === "cutout" && p.mode === "pano" ? J(Number(p.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (P.save(), P.globalAlpha *= W, bb(y, I, _, A), _ && I.visible) {
        const ne = A ? "#ff4d4f" : k && Vt(y) ? "#f59e0b" : "#0070f3", Z = P.globalAlpha;
        P.globalAlpha = Z * V, Od(y, I, ne), P.globalAlpha = Z;
      }
      P.restore();
    }
    if (t === "cutout" && p.mode === "pano" && !He() && p.cutoutPanoFrameVisual && p.cutoutPanoFrameAlpha > 1e-4) {
      const y = p.cutoutPanoFrameVisual, _ = J(Number(p.cutoutPanoFrameAlpha || 0), 0, 1);
      P.save(), P.globalAlpha *= _, Ed(y.geom, y.selected, y.locked), y.selected && Od(
        y.item,
        y.geom,
        y.locked ? "#ff4d4f" : "#0070f3"
      ), P.restore();
    }
    if (s) {
      const y = es(i);
      if (y != null && y.visible) {
        const _ = tc(i) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(y.corners[0].x, y.corners[0].y);
        for (let k = 1; k < y.corners.length; k += 1) P.lineTo(y.corners[k].x, y.corners[k].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = _, y.corners.forEach((k) => {
          P.beginPath(), P.arc(k.x, k.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      }
    } else
      i.forEach((y) => {
        if (!Qt(y) && !pn(y)) return;
        const _ = qt(y);
        if (!(_ != null && _.visible)) return;
        const k = xn(y) ? "#ff4d4f" : "#0070f3";
        P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.95)", P.lineWidth = 2, P.setLineDash([6, 4]), P.beginPath(), P.moveTo(_.corners[0].x, _.corners[0].y);
        for (let N = 1; N < _.corners.length; N += 1) P.lineTo(_.corners[N].x, _.corners[N].y);
        P.closePath(), P.stroke(), P.setLineDash([]), P.fillStyle = k, _.corners.forEach((N) => {
          P.beginPath(), P.arc(N.x, N.y, 6.5, 0, Math.PI * 2), P.fill();
        }), P.restore();
      });
    if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const y = sh(p.interaction.start, p.interaction.current);
      P.save(), P.strokeStyle = "rgba(255, 255, 255, 0.9)", P.fillStyle = "rgba(255, 255, 255, 0.08)", P.lineWidth = 1, P.setLineDash([5, 4]), P.beginPath(), P.rect(y.x0, y.y0, y.x1 - y.x0, y.y1 - y.y0), P.fill(), P.stroke(), P.restore();
    }
  }
  function Fd(i, s = !1) {
    const l = J(Ji(i), 0.05, 20), u = s ? 320 : 220;
    return l >= 1 ? { width: u, height: Math.max(1, Math.round(u / l)) } : { width: Math.max(1, Math.round(u * l)), height: u };
  }
  function _b(i) {
    if (!si || !i) return !1;
    const s = si.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || si.clientWidth || 0)), u = Math.round(Number(s.clientHeight || si.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(u - Number(i.height || 0)) <= 1;
  }
  function wb() {
    if (p.outputPreviewRect = null, C.outputPreviewToggle.visible = p.mode !== "frame" && !!He(), t !== "cutout" || !C.cameraPreview) return;
    if (p.mode === "frame") {
      C.cameraPreview.visible = !1, C.cameraPreview.settled = !1;
      return;
    }
    const i = He();
    C.cameraPreview.visible = !0, C.cameraPreview.expanded = !!p.outputPreviewExpanded;
    const s = D == null ? void 0 : D.getContext("2d");
    if (!i || !s) {
      C.cameraPreview.ready = !1, C.cameraPreview.settled = !1, C.cameraPreview.width = 220, C.cameraPreview.height = 132, C.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, D.width, D.height), io = null;
      return;
    }
    const l = Fd(i, !!p.outputPreviewExpanded);
    C.cameraPreview.width = l.width, C.cameraPreview.height = l.height;
    const u = window.devicePixelRatio || 1, h = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * u)), h: Math.max(1, Math.round(l.height * u)) };
    (D.width !== h.w || D.height !== h.h) && (D.width = h.w, D.height = h.h);
    const m = JSON.stringify([h, oi(i), Pp(ss())]);
    let y = m === io;
    if (y || (s.clearRect(0, 0, h.w, h.h), y = Cd(s, h, i, "camera_preview"), io = y ? m : null), !y) {
      C.cameraPreview.ready = !1, C.cameraPreview.label = hc() ? "Loading preview" : "Connect ERP image", C.cameraPreview.settled = !1;
      return;
    }
    const _ = _b(l);
    C.cameraPreview.ready = !0, C.cameraPreview.label = _ ? "" : "Loading preview", C.cameraPreview.settled = _ && Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame;
  }
  function bc(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), u = Number(s.y || 0);
    return Md(i, l, u);
  }
  function fo(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, u = Math.cos(l);
    return Ul(u * Math.sin(s), Math.sin(l), u * Math.cos(s));
  }
  function xb(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function Sb(i, s, l, u = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: mn(i, "widthScale", 1),
      pressureLike: mn(i, "pressureLike", 1)
    }, ...u, u: s, v: l };
  }
  function kb(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function vc(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const u = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (u) {
      let Z = null;
      i.forEach((te) => {
        const oe = Number((te == null ? void 0 : te.u) || 0), he = Number((te == null ? void 0 : te.v) || 0), re = (oe % 1 + 1) % 1, Se = Z == null ? re : Z + qn(re, (Z % 1 + 1) % 1);
        h.set(te, { x: Se, y: he }), Z = Se;
      });
    }
    const m = (Z) => !Z || typeof Z != "object" ? { x: 0, y: 0 } : h.get(Z) || xb(Z), y = (Z, te, oe, he = {}) => {
      const re = u ? (Number(te) % 1 + 1) % 1 : Number(te), Se = Sb(Z, re, oe, he);
      return h.set(Se, { x: Number(te), y: Number(oe) }), Se;
    }, _ = (Z, te, oe) => {
      const he = m(Z), re = m(te);
      return y(Z, Qn(he.x, re.x, oe), Qn(he.y, re.y, oe), {
        t: Qn(Number((Z == null ? void 0 : Z.t) || 0), Number((te == null ? void 0 : te.t) || 0), oe),
        widthScale: Qn(mn(Z, "widthScale", 1), mn(te, "widthScale", 1), oe),
        pressureLike: Qn(mn(Z, "pressureLike", 1), mn(te, "pressureLike", 1), oe)
      });
    };
    if (i.length === 1) {
      const Z = m(i[0]);
      return [y(i[0], Z.x, Z.y)];
    }
    const k = kb(s, l), N = (Z, te) => {
      const oe = [0];
      for (let ae = 1; ae < Z.length; ae += 1) {
        const pe = m(Z[ae - 1]), we = m(Z[ae]);
        oe.push(oe[ae - 1] + Math.hypot(we.x - pe.x, we.y - pe.y));
      }
      const he = oe[oe.length - 1] || 0;
      if (he <= 1e-8) {
        const ae = Z[0], pe = m(ae);
        return [y(ae, pe.x, pe.y)];
      }
      const re = [];
      let Se = 0;
      for (let ae = 0; ae <= he + 1e-9; ae += te) {
        for (; Se < oe.length - 2 && oe[Se + 1] < ae; ) Se += 1;
        const pe = oe[Se], we = oe[Se + 1], Re = Math.max(1e-8, we - pe);
        re.push(_(Z[Se], Z[Se + 1], J((ae - pe) / Re, 0, 1)));
      }
      const Ge = Z[Z.length - 1], Ue = m(Ge), nt = re[re.length - 1], ye = nt ? m(nt) : null;
      return (!ye || Math.hypot(ye.x - Ue.x, ye.y - Ue.y) > te * 0.35) && re.push(y(Ge, Ue.x, Ue.y)), re;
    }, A = (Z) => {
      if (!Array.isArray(Z) || Z.length < 3) return Z ? Z.slice() : [];
      const te = m(Z[0]), oe = [y(Z[0], te.x, te.y)];
      for (let Se = 0; Se < Z.length - 1; Se += 1) {
        const Ge = Z[Se], Ue = Z[Se + 1], nt = m(Ge), ye = m(Ue), ae = y(
          Ge,
          nt.x * 0.75 + ye.x * 0.25,
          nt.y * 0.75 + ye.y * 0.25,
          {
            t: Number(Ge.t || 0) * 0.75 + Number(Ue.t || 0) * 0.25,
            widthScale: mn(Ge, "widthScale", 1) * 0.75 + mn(Ue, "widthScale", 1) * 0.25,
            pressureLike: mn(Ge, "pressureLike", 1) * 0.75 + mn(Ue, "pressureLike", 1) * 0.25
          }
        ), pe = y(
          Ge,
          nt.x * 0.25 + ye.x * 0.75,
          nt.y * 0.25 + ye.y * 0.75,
          {
            t: Number(Ge.t || 0) * 0.25 + Number(Ue.t || 0) * 0.75,
            widthScale: mn(Ge, "widthScale", 1) * 0.25 + mn(Ue, "widthScale", 1) * 0.75,
            pressureLike: mn(Ge, "pressureLike", 1) * 0.25 + mn(Ue, "pressureLike", 1) * 0.75
          }
        );
        oe.push(ae, pe);
      }
      const he = Z[Z.length - 1], re = m(he);
      return oe.push(y(he, re.x, re.y)), oe;
    }, I = N(i, k);
    if (I.length < 3) return I;
    const V = l ? 2 : 1;
    let W = I.slice();
    for (let Z = 0; Z < V; Z += 1) W = A(W);
    return N(W, Math.max(k * 0.75, 55e-5));
  }
  function mn(i, s, l = 1) {
    const u = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(u) ? Math.max(0, u) : l;
  }
  function Mb(i) {
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
  function oa(i, s, l = {}) {
    const u = document.createElement("canvas");
    u.width = Math.max(1, Math.round(i)), u.height = Math.max(1, Math.round(s));
    const h = u.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, u.width, u.height), h.imageSmoothingEnabled = !0), { canvas: u, ctx: h };
  }
  function aa() {
    const i = la();
    return `${String(p.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function sa() {
    const i = la();
    return `${String(p.paintStrokeRevision)}:${String(p.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function Td() {
    const i = Zl(), s = sa();
    return i ? `${s}:${i}` : s;
  }
  function Nb() {
    p.paintStrokeRevision += 1, p.paintCompositeRevision += 1;
  }
  function Pb() {
    p.paintCompositeRevision += 1;
  }
  function Ab() {
    p._sortedItemsCache = null, p._strokeGeomCache.clear();
  }
  function Dd() {
    var i, s;
    p.paintEngineRevisionKey = null, (s = (i = p.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, v), p.paintEngineRevisionKey = aa();
  }
  function Ld() {
    v.painting_layer !== null && (v.painting_layer = null), is = "";
  }
  function Kt() {
    Ab(), Ce.backgroundDirty = !0, Ce.dirty = !0;
  }
  function fr({ rebuildPaintEngine: i = !1 } = {}) {
    Ld(), Nb(), Kt(), i && Dd();
  }
  function ho() {
    Ld(), Pb(), Kt();
  }
  function fs() {
    var u;
    const i = la(), s = `${i.width}x${i.height}`;
    p.paintEngineDescriptorKey !== s && (p.paintEngine = Ou(i), p.paintEngineDescriptorKey = s, p.paintEngineRevisionKey = "");
    const l = aa();
    p.paintEngineRevisionKey !== l && (p.paintEngineRevisionKey = l, (u = p.paintEngine) == null || u.rebuildCommitted(v));
  }
  function la() {
    const i = Math.max(1, M(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function jn() {
    return la();
  }
  function Cb(i, s, l, u, h = null) {
    const m = Mb(i), y = mn(s, "widthScale", 1) * mn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * y) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * xr) * l * y) : Math.max(0.5, m.value / (2 * Math.PI) * l * y) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * y);
  }
  function Ib(i, s, l = {}) {
    const u = String((s == null ? void 0 : s.layerKind) || "paint"), h = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, y = m ? 0.78 : 1;
    if (i.globalAlpha = h === "marker" ? 0.7 * y : 1, u === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const _ = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, k = m ? Math.max(0.28, Number(_.a ?? 1) * 0.88) : Math.max(0.12, Number(_.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(_.r || 0) * 255)}, ${Math.round(Number(_.g || 0) * 255)}, ${Math.round(Number(_.b || 0) * 255)}, ${k})`;
  }
  function Eb(i, s, l) {
    const u = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(u) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), u, 0, Math.PI * 2), i.fill());
  }
  function Ob(i, s, l, u, h = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(u.w, u.h) * 0.25;
    i.save(), Ib(i, l, h);
    const y = (_) => Eb(i, _, m);
    if (s.length === 1) {
      y(s[0]), i.restore();
      return;
    }
    for (let _ = 0; _ < s.length - 1; _ += 1) {
      const k = s[_], N = s[_ + 1];
      if (!k || !N) continue;
      const A = Number(k.x || 0), I = Number(k.y || 0), V = Number(N.x || 0), W = Number(N.y || 0), ne = Math.max(0.5, Math.min(m, Number(k.radiusPx || 0.5))), Z = Math.max(0.5, Math.min(m, Number(N.radiusPx || 0.5)));
      if (!Number.isFinite(A) || !Number.isFinite(I) || !Number.isFinite(V) || !Number.isFinite(W) || !Number.isFinite(ne) || !Number.isFinite(Z)) continue;
      const te = V - A, oe = W - I, he = Math.hypot(te, oe);
      if (!Number.isFinite(he) || he < 1e-6) {
        y(k);
        continue;
      }
      if (he > Math.max(u.w, u.h) * 0.5) continue;
      const re = Math.max(0.5, Math.min(ne, Z)), Se = Math.max(0.35, Math.min(re * 0.4, 2.25)), Ge = Math.max(1, Math.ceil(he / Se));
      for (let Ue = 0; Ue <= Ge; Ue += 1) {
        const nt = Ue / Ge;
        y({
          x: Qn(A, V, nt),
          y: Qn(I, W, nt),
          radiusPx: Qn(ne, Z, nt)
        });
      }
    }
    y(s[s.length - 1]), i.restore();
  }
  function Fb(i, s, l, u) {
    Ob(i, s, l, u, { preview: !1 });
  }
  function Tb(i, s, l, u, h) {
    var _, k, N, A;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", y = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const I = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(I.r || 0) * 255)}, ${Math.round(Number(I.g || 0) * 255)}, ${Math.round(Number(I.b || 0) * 255)}, ${Number(I.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((_ = s[0]) == null ? void 0 : _[m]) || 0) * u.w, Number(((k = s[0]) == null ? void 0 : k[y]) || 0) * u.h);
    for (let I = 1; I < s.length; I += 1)
      i.lineTo(Number(((N = s[I]) == null ? void 0 : N[m]) || 0) * u.w, Number(((A = s[I]) == null ? void 0 : A[y]) || 0) * u.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Rd(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function Db(i, s) {
    const l = Rd(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((u) => ({
      x: Number((u == null ? void 0 : u.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((u == null ? void 0 : u.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: Cb(i, u, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function $d(i, s, l = null) {
    var _, k, N, A;
    if (!(i != null && i.ctx) || !s) return !1;
    const u = l || { w: Number(((_ = i.canvas) == null ? void 0 : _.width) || 0), h: Number(((k = i.canvas) == null ? void 0 : k.height) || 0) }, h = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((N = s == null ? void 0 : s.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((A = s == null ? void 0 : s.geometry) == null ? void 0 : A.geometryKind) || "") === "lasso_fill")
      return Tb(i.ctx, Rd(h), h, u), !0;
    const y = Db(h, u);
    return y.length ? (Fb(i.ctx, y, h, u), !0) : !1;
  }
  function Lb(i, s, l, u = 8) {
    const h = new Uint8Array(s * l), m = [], y = new Int32Array(s * l), _ = new Int32Array(s * l);
    for (let k = 0; k < l; k += 1)
      for (let N = 0; N < s; N += 1) {
        const A = k * s + N;
        if (h[A] || i[A] <= u) continue;
        let I = 0, V = 0;
        y[V] = N, _[V] = k, V += 1, h[A] = 1;
        const W = [];
        let ne = N, Z = k, te = N, oe = k;
        for (; I < V; ) {
          const he = y[I], re = _[I];
          I += 1, W.push({ x: he, y: re }), he < ne && (ne = he), re < Z && (Z = re), he > te && (te = he), re > oe && (oe = re);
          const Se = [
            [(he - 1 + s) % s, re],
            [(he + 1) % s, re],
            [he, re - 1],
            [he, re + 1]
          ];
          for (const [Ge, Ue] of Se) {
            if (Ue < 0 || Ue >= l) continue;
            const nt = Ue * s + Ge;
            h[nt] || i[nt] <= u || (h[nt] = 1, y[V] = Ge, _[V] = Ue, V += 1);
          }
        }
        m.push({ pixels: W, minX: ne, minY: Z, maxX: te, maxY: oe });
      }
    return m;
  }
  function Rb(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((k) => Number((k == null ? void 0 : k.x) || 0)).filter((k) => Number.isFinite(k)))].sort((k, N) => k - N);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let u = -1, h = 0;
    for (let k = 0; k < l.length; k += 1) {
      const N = l[k], I = (k === l.length - 1 ? l[0] + s : l[k + 1]) - N - 1;
      I > u && (u = I, h = k);
    }
    const m = (l[(h + 1) % l.length] + s) % s;
    let y = 1 / 0, _ = -1 / 0;
    for (const k of l) {
      const N = (k - m + s) % s;
      y = Math.min(y, N), _ = Math.max(_, N);
    }
    return {
      startX: m,
      widthPx: Math.max(1, _ - y + 1)
    };
  }
  function $b(i, s, l = {}) {
    var N;
    const u = Number((i == null ? void 0 : i.width) || 0), h = Number((i == null ? void 0 : i.height) || 0), m = (N = i == null ? void 0 : i.getContext) == null ? void 0 : N.call(i, "2d");
    if (!m || u < 1 || h < 1) return [];
    const y = m.getImageData(0, 0, u, h), _ = new Uint8Array(u * h);
    for (let A = 0; A < _.length; A += 1) _[A] = y.data[A * 4 + 3];
    return Lb(_, u, h, 8).map((A, I) => {
      const V = Rb(A, u);
      if (!V) return null;
      const W = Number(V.widthPx || 0), ne = A.maxY - A.minY + 1, Z = Number(V.startX || 0), te = document.createElement("canvas");
      te.width = W, te.height = ne;
      const oe = te.getContext("2d");
      if (!oe) return null;
      const he = oe.createImageData(W, ne);
      return A.pixels.forEach(({ x: re, y: Se }) => {
        const Ge = (Se * u + re) * 4, Ue = (Number(re || 0) - Z + u) % u, nt = ((Se - A.minY) * W + Ue) * 4;
        he.data[nt + 0] = y.data[Ge + 0], he.data[nt + 1] = y.data[Ge + 1], he.data[nt + 2] = y.data[Ge + 2], he.data[nt + 3] = y.data[Ge + 3];
      }), oe.putImageData(he, 0, 0), {
        id: ko("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + I * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: A.minY / h,
          u1: W / u,
          v1: (A.maxY + 1) / h
        },
        rasterDataUrl: te.toDataURL("image/png"),
        transform: {
          du: Z / u,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ca(i, s) {
    if (!i || !s) return null;
    const l = as(i), u = yu(s, l.centerDir);
    if (!Number.isFinite(u) || u <= 1e-6) return null;
    const h = yu(s, l.right) / u, m = yu(s, l.up) / u;
    return {
      x: (h / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function Vb(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (p.mode === "unwrap") {
      const l = di();
      return i.map((u) => ({
        x: l.x + Number(u.u || 0) * l.w,
        y: l.y + Number(u.v || 0) * l.h
      }));
    }
    const s = i.map((l) => ra(fo(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Vd(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (p.mode === "unwrap") {
      const u = di();
      return i.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, y = s == null ? m : Number(s || 0) + qn(m, s);
        return {
          x: u.x + y * u.w,
          y: u.y + Number(h.v || 0) * u.h
        };
      });
    }
    const l = i.map((u) => ra(fo(u))).filter(Boolean);
    return l.every((u) => Number(u.z || 0) > 0) ? l.map((u) => ({ x: Number(u.x || 0), y: Number(u.y || 0) })) : [];
  }
  function zb(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const u = i[l], h = i[(l + 1) % i.length];
      if (!u || !h || !Number.isFinite(u.x) || !Number.isFinite(u.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(u.x), Number(h.y) - Number(u.y)) > s) return !1;
    }
    return !0;
  }
  function jb(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const u = [];
    for (const h of i) {
      const m = fo(h), y = ca(s, m);
      if (!y) return [];
      u.push({
        x: Number(l.x || 0) + Number(y.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(y.y || 0) * Number(l.h || 0)
      });
    }
    return zb(u, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? u : [];
  }
  function Hb(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const u = [];
    for (const h of i) {
      const m = fo(h), y = ca(s, m);
      y && u.push({
        x: Number(l.x || 0) + Number(y.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(y.y || 0) * Number(l.h || 0)
      });
    }
    return u;
  }
  function Gb() {
    const i = He(), s = Mc(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: u, shot: h } = qx(i, s, { width: E.width, height: E.height }), m = Kb(l);
    return P.save(), P.fillStyle = "#0a0a0a", P.fillRect(0, 0, E.width, E.height), Cd(P, u, h) || (P.fillStyle = "rgba(255, 255, 255, 0.03)", P.fillRect(u.x, u.y, u.w, u.h)), P.restore(), P.save(), P.fillStyle = "rgba(0, 0, 0, 0.58)", P.beginPath(), P.rect(0, 0, E.width, E.height), P.roundRect(l.x, l.y, l.w, l.h, m), P.fill("evenodd"), P.restore(), P.save(), P.strokeStyle = iA, P.globalAlpha = 0.62, P.lineWidth = 2, P.beginPath(), P.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), P.stroke(), P.restore(), !0;
  }
  function Kb(i) {
    const s = Math.max(1e-6, Number(Ce.frameCanvasScale || 1));
    return Math.min(ve * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function Hr() {
    var s;
    const i = p.mode === "frame" ? He() : null;
    C.frameRollKnob.visible = !!i && !r && i.locked !== !0, C.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), C.frameRollKnob.displayValue = So(C.frameRollKnob.rollDeg), C.frameRollKnob.dragging = ((s = p.interaction) == null ? void 0 : s.kind) === "roll_frame", C.frameRollKnob.armed = !!i && p.altModifier === !0;
  }
  function Bb() {
    var k, N;
    if (((k = p.interaction) == null ? void 0 : k.kind) !== "paint_lasso_fill") return;
    const i = p.interaction.stroke, s = (N = i == null ? void 0 : i.geometry) == null ? void 0 : N.points;
    let l;
    if (p.mode === "frame") {
      const A = He(), I = en(A);
      l = jb(s, A, I);
    } else
      l = Vb(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const u = String((i == null ? void 0 : i.layerKind) || "") === "mask", h = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), y = Math.round(Number(h.g || 0) * 255), _ = Math.round(Number(h.b || 0) * 255);
    P.save(), P.beginPath(), P.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let A = 1; A < l.length; A++) P.lineTo(Number(l[A].x || 0), Number(l[A].y || 0));
    P.closePath(), u ? (P.lineWidth = 2, P.setLineDash([6, 6]), P.lineDashOffset = 0, P.strokeStyle = "rgba(0,0,0,0.96)", P.stroke(), P.lineDashOffset = -6, P.strokeStyle = "rgba(255,255,255,0.96)", P.stroke(), P.setLineDash([]), P.lineDashOffset = 0) : (P.lineWidth = 1.5, P.setLineDash([6, 4]), P.strokeStyle = `rgba(${m},${y},${_},1)`, P.stroke(), P.setLineDash([])), P.restore();
  }
  function Wb() {
    const i = p.frameRollOverlayVisual, s = J(Number(p.frameRollOverlayAlpha || 0), 0, 1);
    if (p.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = en(i.shot);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * xr, m = Math.hypot(l.w, l.h) * 0.55, y = Math.cos(h) * m, _ = Math.sin(h) * m;
    P.save(), P.globalAlpha *= s, P.beginPath(), P.rect(l.x, l.y, l.w, l.h), P.clip(), P.translate(u.x, u.y), P.rotate(h);
    const k = Math.max(12, Math.min(l.w, l.h) / 6);
    P.beginPath();
    for (let N = -m; N <= m; N += k)
      P.moveTo(N, -m), P.lineTo(N, m);
    for (let N = -m; N <= m; N += k)
      P.moveTo(-m, N), P.lineTo(m, N);
    P.lineWidth = 1, P.strokeStyle = "rgba(255, 255, 255, 0.22)", P.stroke(), P.setTransform(1, 0, 0, 1, 0, 0), P.beginPath(), P.moveTo(u.x - y, u.y - _), P.lineTo(u.x + y, u.y + _), P.lineWidth = 1.5, P.setLineDash([8, 6]), P.strokeStyle = "rgba(255, 255, 255, 0.92)", P.shadowColor = "rgba(0, 0, 0, 0.8)", P.shadowBlur = 3, P.stroke(), P.setLineDash([]), P.restore();
  }
  function Ub() {
    return t !== "cutout" || !He() ? 0 : sA;
  }
  function Yb() {
    const i = J(Number(p.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || t !== "cutout" || p.mode !== "pano") return;
    const s = He(), l = s ? qt(s) : null, u = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    l != null && l.visible && u && (p.cutoutPanoDimCorners = u), s && (l != null && l.visible) && u && (p.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: ad(s),
      locked: xn(s)
    });
    const h = Number(p.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? u : h ? p.cutoutPanoDimCorners || [] : [];
    if (P.save(), P.fillStyle = `rgba(0, 0, 0, ${i})`, P.beginPath(), P.rect(0, 0, E.width, E.height), m.length >= 4) {
      P.moveTo(m[0].x, m[0].y);
      for (let y = 1; y < 4; y += 1) P.lineTo(m[y].x, m[y].y);
      P.closePath();
    }
    P.fill("evenodd"), P.restore();
  }
  function zd() {
    ro = null, p.mode === "frame" ? (Ce.frameSafeRect = M1(), Gb()) : p.mode === "unwrap" ? cb(!1) : ub(!1), Yb(), t === "cutout" && wb(), vb(), Hr(), Bb(), Wb(), C.fovValue = `${Math.round(p.viewFov)}°`, Math.abs(Number(p.outputPreviewAnim || 0) - Number(p.outputPreviewAnimTo || 0)) < 1e-6 && Xe(), Ce.hasPresentedFrame || (Ce.hasPresentedFrame = !0, se.style.opacity = "1"), t === "cutout" && C.cameraPreview && (C.cameraPreview.settled = Ce.pendingStableLayoutFrames <= 0 && Ce.hasPresentedFrame && p.mode !== "frame");
    const i = Qy();
    C.stageStatus = i.status, C.stageStatusDetail = i.detail, i.status === pr ? (le == null || le.removeAttribute("data-stage-ready"), le == null || le.setAttribute("data-stage-loading-kind", i.detail)) : (le == null || le.setAttribute("data-stage-ready", ""), le == null || le.removeAttribute("data-stage-loading-kind"));
  }
  function Xb(i = p.interaction) {
    if (t !== "stickers" || p.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function qb() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = by();
  }
  function de(i = {}) {
    var _, k, N, A, I, V, W, ne, Z, te;
    const s = !!i.localOnly, l = i.externalSync === !0, u = String(i.cause || ""), h = String(((_ = p.interaction) == null ? void 0 : _.kind) || "");
    (!s || h === "view" || h === "pan_frame" || Xb() || !!((k = p.viewTween) != null && k.active) || u === "mode" || u === "frame_view" || u === "cutout_frame") && (Ce.backgroundDirty = !0), s && nd() && (p.livePaintInteractionRevision += 1, Ce.backgroundDirty = !0), (!s || u === "selection" || u === "mode" || u === "cutout_frame") && (lc(), zr()), qb(), l && ((A = (N = e.__panoDomPreview) == null ? void 0 : N.requestDraw) == null || A.call(N), (I = e.setDirtyCanvas) == null || I.call(e, !0, !1)), l && !s && ((W = (V = e.graph) == null ? void 0 : V.setDirtyCanvas) == null || W.call(V, !0, !0), (te = (Z = (ne = Er) == null ? void 0 : ne.canvas) == null ? void 0 : Z.setDirty) == null || te.call(Z, !0, !0)), Ce.dirty = !0;
  }
  function jd() {
    const i = E.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return E.width !== s || E.height !== l || se.width !== s || se.height !== l ? (E.width = s, E.height = l, se.width = s, se.height = l, Ce.backgroundDirty = !0, Ce.dirty = !0, t === "cutout" && (Ce.pendingStableLayoutFrames = Math.max(Number(Ce.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Jb(i = performance.now()) {
    var m, y;
    Ce.lastTickTs = i;
    const s = p.mode === "frame" && ((m = p.interaction) == null ? void 0 : m.kind) === "roll_frame" ? p.interaction : null;
    s != null && s.shot && (p.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(p.frameRollOverlayTarget || 0)) > 1e-6 && (p.frameRollOverlayFrom = Number(p.frameRollOverlayAlpha || 0), p.frameRollOverlayTarget = l, p.frameRollOverlayStartTs = i), Math.abs(Number(p.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const _ = J(
        (i - Number(p.frameRollOverlayStartTs || i)) / lA,
        0,
        1
      );
      p.frameRollOverlayAlpha = Qn(
        Number(p.frameRollOverlayFrom || 0),
        l,
        Fs(_)
      ), _ >= 1 && (p.frameRollOverlayAlpha = l, l === 0 && (p.frameRollOverlayVisual = null)), Ce.dirty = !0;
    }
    const u = Ub();
    if (Math.abs(u - Number(p.cutoutPanoDimTarget || 0)) > 1e-6 && (p.cutoutPanoDimFrom = Number(p.cutoutPanoDimAlpha || 0), p.cutoutPanoDimTarget = u, p.cutoutPanoDimStartTs = i), Math.abs(Number(p.cutoutPanoDimAlpha || 0) - u) > 1e-6) {
      const _ = J(
        (i - Number(p.cutoutPanoDimStartTs || i)) / lm,
        0,
        1
      );
      p.cutoutPanoDimAlpha = Qn(
        Number(p.cutoutPanoDimFrom || 0),
        u,
        Fs(_)
      ), _ >= 1 && (p.cutoutPanoDimAlpha = u), _ >= 1 && u === 0 && (p.cutoutPanoDimCorners = null), Ce.dirty = !0;
    }
    const h = t === "cutout" && He() ? 1 : 0;
    if (Math.abs(h - Number(p.cutoutPanoFrameTarget || 0)) > 1e-6 && (p.cutoutPanoFrameFrom = Number(p.cutoutPanoFrameAlpha || 0), p.cutoutPanoFrameTarget = h, p.cutoutPanoFrameStartTs = i), Math.abs(Number(p.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const _ = J(
        (i - Number(p.cutoutPanoFrameStartTs || i)) / lm,
        0,
        1
      );
      p.cutoutPanoFrameAlpha = Qn(
        Number(p.cutoutPanoFrameFrom || 0),
        h,
        Fs(_)
      ), _ >= 1 && (p.cutoutPanoFrameAlpha = h, h === 0 && (p.cutoutPanoFrameVisual = null)), Ce.dirty = !0;
    }
    if (p.outputPreviewAnim !== p.outputPreviewAnimTo) {
      const _ = Math.max(1, Number(p.outputPreviewAnimDurationMs)), k = J((i - Number(p.outputPreviewAnimStartTs || 0)) / _, 0, 1), A = p.outputPreviewAnimTo > p.outputPreviewAnimFrom ? mA(k) : vA(k);
      p.outputPreviewAnim = Qn(p.outputPreviewAnimFrom, p.outputPreviewAnimTo, A), Ce.dirty = !0, k >= 1 && (p.outputPreviewAnim = p.outputPreviewAnimTo);
    }
    if ((y = p.viewTween) != null && y.active) {
      const _ = p.viewTween, k = J((i - _.startTs) / _.durationMs, 0, 1), N = Fs(k);
      p.viewYaw = Bt(_.startYaw + _.deltaYaw * N), p.viewPitch = _.startPitch + (_.targetPitch - _.startPitch) * N, p.viewFov = _.startFov + (_.targetFov - _.startFov) * N, Ce.backgroundDirty = !0, Ce.dirty = !0, k >= 1 && (p.viewTween = null);
    }
    if (p.viewInertia.vx = Number(un.state.inertia.vx || 0), p.viewInertia.vy = Number(un.state.inertia.vy || 0), p.viewInertia.active = !!un.state.inertia.active, un.stepInertia(i) && (p.viewInertia.vx = Number(un.state.inertia.vx || 0), p.viewInertia.vy = Number(un.state.inertia.vy || 0), p.viewInertia.active = !!un.state.inertia.active, Ce.backgroundDirty = !0, Ce.dirty = !0), Ce.pendingStableLayoutFrames > 0 && (Ce.pendingStableLayoutFrames -= 1, Ce.dirty = !0), Ce.dirty) {
      if (Ce.pendingStableLayoutFrames > 0)
        return;
      Ce.dirty = !1, zd();
    }
  }
  function Hd(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Ce.tickErrorSignature !== l && (Ce.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), C.stageStatus = tr, C.stageStatusDetail = "frame", le == null || le.setAttribute("data-stage-ready", ""), le == null || le.removeAttribute("data-stage-loading-kind");
    }
  }
  function Gd(i = performance.now()) {
    Ce.running && (Hd(() => Jb(i)), Ce.running && (Ce.rafId = requestAnimationFrame(Gd)));
  }
  function Zb() {
    !Ce.running || !jd() || Hd(() => {
      Ce.dirty = !1, zd();
    });
  }
  const Kd = new ResizeObserver(Zb);
  Kd.observe(E);
  function Qb() {
    Ce.running = !1, Ce.rafId && cancelAnimationFrame(Ce.rafId), Ce.rafId = 0, Kd.disconnect();
  }
  function ot() {
    r || S && v.stickers.some(Yl) || (p.historyController.commitActionGroup(JSON.stringify(Sp(v))), Ic());
  }
  function _c(i) {
    var h;
    if (r) return;
    Jn();
    const s = i < 0 ? p.historyController.undo() : p.historyController.redo();
    if (Ic(), !s) return;
    const l = jx(v, s), u = (h = v.timeline) == null ? void 0 : h.fps;
    Object.keys(v).forEach((m) => delete v[m]), Object.assign(v, l.state), S && v.timeline.fps !== u && kt.seek(Math.round(p.frame * v.timeline.fps / u)), p.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, p.selectedIds = p.selectedId ? [p.selectedId] : [], l.paintingChanged ? fr() : Kt(), En(), ze(), On(), de({ cause: "cutout_frame" });
  }
  function Bd() {
    var l, u;
    const i = Array.isArray((l = p.historyController) == null ? void 0 : l.entries) ? p.historyController.entries : [], s = Number((u = p.historyController) == null ? void 0 : u.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function En() {
    Cn();
    const i = YM({
      editor: p,
      swatches: Zs,
      paintColorPopOpen: q ? !q.hidden : !1,
      colorToCss: Sr,
      colorsApproximatelyEqual: Qs,
      rgb01ToHsv: _u,
      hsv01ToRgb: vu,
      getBrushPresetIdForTool: mi,
      isActiveLassoTool: Py
    });
    if (Object.assign(C.paintDock, i), Fy(), !i.visible) {
      q && (q.hidden = !0);
      return;
    }
    xe && (clearTimeout(xe), xe = 0), B && (!i.colorEnabled && q && !q.hidden && (xe = window.setTimeout(() => {
      q.hidden = !0, C.paintDock.colorPopOpen = !1, xe = 0;
    }, 170)), q && (q.style.setProperty("--picker-hue-color", i.pickerHueColor), q.style.setProperty("--picker-sat", i.pickerSat), q.style.setProperty("--picker-val", i.pickerVal), q.style.setProperty("--picker-hue", i.pickerHue)), me && (me.style.left = i.pickerSvLeft, me.style.top = i.pickerSvTop), ke && (ke.style.left = i.pickerHueLeft));
  }
  function po() {
    const i = Xt(t === "cutout" && p.mode === "frame" ? He() : Nt());
    i && (p.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: qr(i)
    }, ze());
  }
  function ze() {
    var nt, ye, ae, pe;
    if (Gr(), o) return;
    v.ui_settings = v.ui_settings || {};
    const i = UM(v.ui_settings);
    if (a) {
      C.sidePanel = XM({
        coverage: v.coverage,
        uiSettings: i,
        normalizeCoverageValue: Gn
      });
      return;
    }
    const s = Nt(), l = t === "cutout" && p.mode === "frame" ? He() : null, u = l || s, h = l ? [l] : ur(), m = l ? "shot" : ts();
    if (h.length > 1 && (p.panelLastValues = p.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), u && m !== "stroke") {
      const we = Xt(u);
      p.panelLastValues = {
        yaw_deg: Number(we.yaw_deg || 0),
        pitch_deg: Number(we.pitch_deg || 0),
        hFOV_deg: Number(we.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(we.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(we.rot_deg || 0),
        roll_deg: Number(we.roll_deg || 0),
        aspect_id: qr(we)
      }, sr(u) && (p.panelLastValues.opacity = Bl(u, p.frame).opacity * 100);
    }
    const y = p.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), _ = m === "stroke" ? null : u, k = S && p.inspectCamera, N = k ? Wx(v.camera, p.frame) : sr(_) ? p.panelLastValues : _ || y, A = k || !!_ && !xn(_);
    p.panelWasEnabled = A, lc();
    let I = null;
    if (l) {
      const we = nc({ item: l, kind: "shot", label: "Frame" });
      I = {
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
      t === "stickers" ? dn().forEach((Te, ft) => {
        var Pt, Rt;
        if (!Te) return;
        const qe = S ? Qg(Te) : Vt(Te) ? String(Te.id || uu) : String(((Rt = (Pt = v.assets) == null ? void 0 : Pt[Te.asset_id]) == null ? void 0 : Rt.name) || Te.asset_id || Te.id), Lt = `${ft + 1}. ${qe}${Vt(Te) && lo(Te) ? " (hidden)" : ""}`, fn = nc({ item: Te, label: Lt, kind: "image" });
        we.push({ id: Te.id, label: fn.label, icon: fn.icon, item: Te, kind: "image" });
      }) : sd().forEach((Te) => {
        if (!(Te != null && Te.item)) return;
        const ft = nc(Te);
        we.push({ id: Te.item.id, label: ft.label, icon: ft.icon, item: Te.item, kind: Te.kind });
      });
      const Re = (_ == null ? void 0 : _.id) || "", We = k ? { label: "Camera", icon: Ae.camera } : we.find((Te) => Te.id === Re) || we[0];
      I = {
        label: "Selection",
        open: !1,
        disabled: we.length <= 1,
        currentLabel: We.label,
        currentIcon: We.icon || null,
        items: we.map((Te) => ({
          id: Te.id,
          label: Te.label,
          icon: Te.icon || null,
          active: Te.id === Re
        }))
      };
    }
    const V = [], W = (we, Re, We, Te, ft) => {
      const qe = J(Number(N[we] || 0), We, Te);
      V.push({
        key: we,
        label: Re,
        min: We,
        max: Te,
        step: ft,
        value: qe,
        displayValue: So(qe),
        fillPct: J((qe - We) / Math.max(1e-6, Te - We) * 100, 0, 100),
        enabled: A && !r
      });
    }, ne = [];
    k ? (W("position_x", "X", -100, 100, 0.01), W("position_y", "Y", -100, 100, 0.01), W("position_z", "Z", -100, 100, 0.01), W("yaw_deg", "Yaw", -180, 180, 0.1), W("pitch_deg", "Pitch", -90, 90, 0.1), W("roll_deg", "Roll", -180, 180, 0.1), W("hFOV_deg", "FOV", 1, 179, 0.1)) : h.length > 1 ? (ne.push(`Selected objects: ${h.length}`), ne.push("Multi-selection supports z-order and delete.")) : (W("yaw_deg", "Yaw", -180, 180, 0.1), W("pitch_deg", "Pitch", -90, 90, 0.1), W("hFOV_deg", "H FOV", 1, 179, 0.1), W("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? W("rot_deg", "Rotation", -180, 180, 0.1) : W("roll_deg", "Roll", -180, 180, 0.1), S && W("opacity", "Opacity", 0, 100, 1));
    const Z = Array.isArray((ye = (nt = v == null ? void 0 : v.painting) == null ? void 0 : nt.paint) == null ? void 0 : ye.strokes) ? v.painting.paint.strokes.length : 0, te = Array.isArray((pe = (ae = v == null ? void 0 : v.painting) == null ? void 0 : ae.mask) == null ? void 0 : pe.strokes) ? v.painting.mask.strokes.length : 0, oe = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((we) => String((we == null ? void 0 : we.name) || "")) : [], he = pA(
      e,
      oe.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), re = !!String((he == null ? void 0 : he.src) || "").trim() || ta("pano_input_images").length > 0, Se = dn().length > 0 || Z > 0, Ge = te > 0, Ue = [
      { key: "mask", label: "Mask", icon: Ae.circle_dashed_tool, visible: !!p.showMask, enabled: Ge },
      { key: "objects", label: "Paint / Images", icon: Ae.image, visible: !!p.showObjects, enabled: Se },
      { key: "panorama", label: "Panorama", icon: Ae.globe, visible: !!p.showPanorama, enabled: re }
    ].map((we) => ({
      ...we,
      ariaLabel: `Toggle ${we.label.toLowerCase()}`,
      tip: we.visible ? "Hide" : "Show"
    }));
    C.sidePanel = qM({
      coverage: v.coverage,
      readOnly: r,
      selectionPicker: I,
      enabled: A,
      selectedKind: k ? "camera" : m,
      selectedItems: h,
      params: V,
      notes: ne,
      visibilityRows: Ue,
      uiSettings: i,
      normalizeCoverageValue: Gn
    });
  }
  function Gr() {
    if (!S || r) return;
    const i = wc(), s = Le.selection, l = s && pi(s.owner);
    if (s) {
      const h = l ? ua(s) : [];
      s.frames = s.frames.filter((m) => h.some((y) => l[y].keyframes.some((_) => _.frame === m))), s.frames.length || (Le.selection = null);
    }
    const u = v.timeline.fps;
    C.timeline = QM(v, {
      frame: p.frame,
      span: i,
      selection: Le.selection,
      selectedId: p.inspectCamera ? "camera" : p.selectedId,
      expanded: Le.expanded ?? ju(v),
      openRows: Le.openRows,
      audio: t1() && C.videoTransport.hasAudio ? { muted: Y.muted } : null,
      playing: kt.playing,
      label: `${p.frame}f · ${(p.frame / u).toFixed(2)}s`,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: hu(e) !== null || rS(e, ["bg_media", "sticker"])
    }), C.easing = Le.selection ? eN(l, ua(Le.selection), Le.selection.frames, fa(Le.selection.owner)) : null;
  }
  function wc(i = null) {
    const s = v.timeline.fps, l = v.stickers.find(Vt), u = l ? pd() : null, h = Math.max(
      C.videoTransport.ready ? Math.round(Number(C.videoTransport.duration || 0) * s) : 0,
      u ? v0(l.clip, s, u.meta) : 0
    );
    return Wg(v, { minimum: Math.round(s * 5), frames: h, openClip: i });
  }
  function pi(i) {
    return i === "camera" ? v.camera : v.stickers.find((s) => s.id === i) || null;
  }
  function ua(i) {
    return i.lane ? [i.lane] : no(pi(i.owner));
  }
  function fa(i) {
    if (i === "camera") return 0;
    const { clip: s } = pi(i);
    return s.start - s.in;
  }
  function ds(i) {
    const s = pi(i);
    return !!s && s.locked !== !0;
  }
  function Wd() {
    const i = Nt();
    sr(i) && !_i(i.clip, p.frame) && vr(null);
  }
  function e1(i) {
    const s = Math.max(0, Math.round(i));
    s !== p.frame && (p.frame = s, Wd(), Kt(), ze(), Xe(), de());
  }
  function t1() {
    return Y instanceof HTMLVideoElement && !!Y.getAttribute("src");
  }
  function n1(i) {
    ui(), kt.seek(i);
  }
  function Jn() {
    S && kt.stop();
  }
  function xc() {
    ui(), kt.toggle();
  }
  function mo() {
    Kt(), ze(), Xe(), de();
  }
  function Ci() {
    ot(), lt(), mo();
  }
  function r1() {
    const { selection: i } = Le;
    ds(i.owner) && (Jn(), Ax(pi(i.owner), ua(i), i.frames, p.frame - fa(i.owner)), Le.selection = null, Ci());
  }
  function Ud(i) {
    Jn();
    const s = Math.round(p.frame * i / v.timeline.fps);
    Gx(v, i), Le.selection = null, kt.seek(s), Ci();
  }
  function i1() {
    const i = hu(e);
    i !== null && i !== v.timeline.fps && Ud(i);
  }
  function o1(i) {
    if (!(r || !S)) {
      if (i.type === "seek") {
        i.phase === "start" && ui(), kt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        xc();
        return;
      }
      if (i.type === "mute") {
        ud(), Gr();
        return;
      }
      if (i.type === "toggle-expanded") {
        Le.expanded = !(Le.expanded ?? ju(v)), Le.selection = null, Gr();
        return;
      }
      if (i.type === "toggle-row") {
        Le.openRows.has(i.id) ? Le.openRows.delete(i.id) : Le.openRows.add(i.id), Gr();
        return;
      }
      if (i.type === "select-row") {
        const s = v.stickers.find((l) => l.id === i.id);
        s && !_i(s.clip, p.frame) && n1(s.clip.start), vr(dn().find((l) => l.id === i.id) || null), p.inspectCamera = i.id === "camera", Le.selection = null, ze(), Xe(), de();
        return;
      }
      if (i.type === "select-keys") {
        const s = fa(i.owner), l = i.frames.map((m) => m - s), u = Le.selection, h = (u == null ? void 0 : u.owner) === i.owner && u.lane === i.lane;
        if (i.additive && h) {
          const m = new Set(u.frames);
          for (const y of l)
            m.has(y) ? m.delete(y) : m.add(y);
          u.frames = [...m].sort((y, _) => y - _);
        } else
          Le.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        Gr();
        return;
      }
      if (i.type === "move-keys") {
        const s = Le.selection;
        if (!s || !ds(s.owner)) return;
        const l = pi(s.owner), u = ua(s);
        if (i.phase === "start") {
          Jn(), Le.drag = { keyframes: u.map((y) => structuredClone(l[y].keyframes)), frames: s.frames };
          return;
        }
        const { drag: h } = Le;
        if (!(h != null && h.keyframes)) return;
        u.forEach((y, _) => {
          l[y].keyframes = structuredClone(h.keyframes[_]);
        });
        const m = Cx(l, u, h.frames, i.delta, -fa(s.owner));
        if (s.frames = h.frames.map((y) => y + m), i.phase !== "end") {
          mo();
          return;
        }
        Le.drag = null, m ? Ci() : mo();
        return;
      }
      if (i.type === "clip") {
        const s = v.stickers.find((h) => h.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          Jn(), Le.drag = { clip: { ...s.clip }, span: wc(s.clip) };
          return;
        }
        const { drag: l } = Le;
        if (!(l != null && l.clip)) return;
        const u = l.clip;
        if (s.clip = { ...u }, i.delta && i.mode === "move" ? Ox(s.clip, i.delta) : i.delta && i.mode === "start" ? Fx(s.clip, u.start + i.delta) : i.delta && Tx(s.clip, (u.duration === null ? l.span : u.start + u.duration) + i.delta, l.span), i.phase !== "end") {
          mo();
          return;
        }
        Le.drag = null, Wd(), JSON.stringify(s.clip) !== JSON.stringify(u) ? Ci() : mo();
        return;
      }
      if (i.type === "key-row") {
        if (!ds(i.owner)) return;
        Jn(), Mx(pi(i.owner), p.frame - fa(i.owner)), Ci();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === v.timeline.fps || C.timeline.fpsLocked) {
          Gr();
          return;
        }
        Ud(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === v.timeline.length) {
          Gr();
          return;
        }
        Jn(), v.timeline.length = s, Ci();
        return;
      }
      if (i.type === "easing") {
        const s = Le.selection;
        if (!s || !ds(s.owner)) return;
        Jn(), Ex(pi(s.owner), ua(s), s.frames, i.easing), i.commit ? Ci() : mo();
      }
    }
  }
  async function Yd(i) {
    if (r || t !== "stickers" && t !== "cutout" || !Ir(i)) return;
    if (S) {
      Jn(), await s1(i);
      return;
    }
    const s = Vi("asset"), l = ka(e, `add:${s}`, async () => {
      try {
        const { image: u } = await Ma(i);
        Be.set(s, u);
        const h = Vi("st");
        v.stickers.push({
          id: h,
          asset_id: s,
          yaw_deg: p.viewYaw,
          pitch_deg: p.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: fi(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
          rot_deg: 0,
          z_index: ns()
        }), vr(v.stickers[v.stickers.length - 1]), hs(), ze(), Xe(), de();
        const m = await Hi(i, {
          fetchApi: (k, N) => jt.fetchApi(k, N)
        });
        if (!(Array.isArray(v.stickers) ? v.stickers : []).filter((k) => String((k == null ? void 0 : k.asset_id) || "") === s).length) return;
        v.assets[s] = m, uo(), ot(), lt(), ze(), Xe(), de();
      } catch (u) {
        delete v.assets[s], Be.delete(s);
        const h = Array.isArray(v.stickers) ? v.stickers : [], m = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") === s);
        throw m.length && (v.stickers = h.filter((y) => String((y == null ? void 0 : y.asset_id) || "") !== s), m.some((y) => String((y == null ? void 0 : y.id) || "") === String(p.selectedId || "")) && vr(null), ze(), Xe(), de(), lt()), u;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function a1() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = Q == null ? void 0 : Q.openImagePicker) == null || i.call(Q, "add");
  }
  async function s1(i) {
    const s = Vi("st"), l = ka(e, `add:${s}`, async () => {
      const { image: u } = await Ma(i), h = {
        yaw_deg: p.viewYaw,
        pitch_deg: p.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: fi(30, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1)),
        rot_deg: 0
      }, m = $f(s, { kind: "file", filename: "" }, h, ns());
      Be.set(ia(m), u), v.stickers.push(m), vr(m), hs(), ze(), Xe(), de();
      try {
        const y = await Hi(i, {
          fetchApi: (k, N) => jt.fetchApi(k, N)
        }), _ = v.stickers.find((k) => k.id === s);
        if (!_) return;
        _.source = Bs(y), Be.set(ia(_), u), ot(), lt();
      } catch (y) {
        throw v.stickers = v.stickers.filter((_) => _.id !== s), p.selectedId === s && vr(null), ot(), lt(), y;
      } finally {
        ze(), Xe(), de();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function l1(i, s) {
    const l = ka(e, `replace:${s}:${Vi("asset")}`, async () => {
      const { image: u } = await Ma(i), h = await Hi(i, {
        fetchApi: (y, _) => jt.fetchApi(y, _)
      }), m = v.stickers.find((y) => y.id === s);
      if (m) {
        m.source = Bs(h), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const y of [m.size.value, ...m.size.keyframes.map((_) => _.value)])
          y.vFOV_deg = fi(y.hFOV_deg, Number(u.naturalWidth || u.width || 1), Number(u.naturalHeight || u.height || 1));
        Be.set(ia(m), u), Kt(), ot(), lt(), ze(), Xe(), de();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function c1(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Nt();
    if (!s || !gt(s) || Vt(s) || !Ir(i)) return;
    if (S) {
      await l1(i, s.id);
      return;
    }
    const l = String(s.id || ""), u = Vi("asset"), h = ka(e, `replace:${l}:${u}`, async () => {
      var A;
      const m = (Array.isArray(v.stickers) ? v.stickers : []).find((I) => String((I == null ? void 0 : I.id) || "") === l) || null;
      if (!m || !gt(m) || Vt(m)) return;
      const y = String(m.asset_id || ""), _ = y ? gn(((A = v.assets) == null ? void 0 : A[y]) || null) : null, k = Number(m.vFOV_deg || 0), N = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: I } = await Ma(i);
        Be.set(u, I), m.asset_id = u, m.vFOV_deg = fi(
          Number(m.hFOV_deg || 30),
          Number(I.naturalWidth || I.width || 1),
          Number(I.naturalHeight || I.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Kt(), ze(), Xe(), de();
        const V = await Hi(i, {
          fetchApi: (ne, Z) => jt.fetchApi(ne, Z)
        }), W = (Array.isArray(v.stickers) ? v.stickers : []).find((ne) => String((ne == null ? void 0 : ne.id) || "") === l) || null;
        if (!W || String(W.asset_id || "") !== u) return;
        v.assets[u] = V, uo(), ot(), lt(), ze(), Xe(), de();
      } catch (I) {
        delete v.assets[u], Be.delete(u);
        const V = (Array.isArray(v.stickers) ? v.stickers : []).find((W) => String((W == null ? void 0 : W.id) || "") === l) || null;
        throw V && String(V.asset_id || "") === u && (y && _ && (v.assets[y] = _), V.asset_id = y, V.vFOV_deg = k, V.crop = N ? { ...N } : null), Kt(), lt(), ze(), Xe(), de(), I;
      }
    });
    try {
      await h;
    } catch {
    }
  }
  function u1() {
    var s;
    if (r) return;
    const i = Nt();
    !i || !gt(i) || Vt(i) || (s = Q == null ? void 0 : Q.openImagePicker) == null || s.call(Q, "replace");
  }
  async function f1() {
    if (r || t !== "stickers") return;
    if (S) {
      await d1();
      return;
    }
    const i = v.assets && typeof v.assets == "object" ? v.assets : {}, s = Object.entries(i).filter(([, u]) => {
      const h = String((u == null ? void 0 : u.type) || "").toLowerCase(), m = String((u == null ? void 0 : u.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [u, h] of s)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const y = await fetch(m).then((I) => I.blob()), _ = String(y.type || "image/png").split("/")[1] || "png", k = String((h == null ? void 0 : h.name) || `${u}.${_}`), N = new File([y], k, { type: y.type || "image/png" }), A = await Hi(N, {
          fetchApi: (I, V) => jt.fetchApi(I, V)
        });
        v.assets[u] = {
          ...A,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (lt(), de());
  }
  async function d1() {
    let i = !1;
    for (const s of v.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const u = await fetch(l).then((_) => _.blob()), h = String(u.type || "image/png").split("/")[1] || "png", m = new File([u], `${s.id}.${h}`, { type: u.type || "image/png" }), y = await Hi(m, {
            fetchApi: (_, k) => jt.fetchApi(_, k)
          });
          s.source = Bs(y), i = !0;
        } catch {
        }
    }
    i && (lt(), de());
  }
  function h1() {
    if (r || t !== "cutout") return;
    const i = He();
    if (i) {
      vr(i), p.mode = "pano", Ai(
        Bt(Number(i.yaw_deg || 0)),
        J(Number(i.pitch_deg || 0), -89.9, 89.9),
        p.viewFov
      ), ze(), Xe(), de({ cause: "cutout_frame" });
      return;
    }
    const s = Ng({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Bt(Number(p.viewYaw || 0)),
      pitchDeg: Number(p.viewPitch || 0),
      viewFovDeg: Number(p.viewFov || 90)
    });
    v.shots = [s], vr(s), hs(), p.mode = "pano", ot(), lt(), ze(), Xe(), de({ cause: "cutout_frame" });
  }
  function p1() {
    r || t !== "cutout" || (v.shots = [], p.selectedId = null, p.selectedIds = [], p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, v.active.selected_shot_id = null, ot(), lt(), ze(), Xe(), de());
  }
  function m1() {
    const i = Array.isArray(v.stickers) ? v.stickers : [], s = [];
    for (const l of i)
      Vt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function Xd(i, s, l = "Clear") {
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
  async function g1() {
    var l, u;
    if (r || !await Xd(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    v.painting = Ro(null), fr();
    const s = m1();
    if (t === "stickers")
      v.stickers = S ? v.stickers.filter((h) => h.placement === "world" || s.includes(h)) : s, S || (v.assets = {}), p.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = ((u = s[0]) == null ? void 0 : u.id) || null, uo();
    else {
      const h = zx(v.shots, v.active.selected_shot_id);
      v.stickers = s, v.assets = {}, v.shots = h.shots, p.selectedId = h.selectedShotId, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = null, v.active.selected_shot_id = h.selectedShotId, !h.selectedShotId && p.mode === "frame" && (p.mode = "pano"), p.cutoutAspectOpen = !1, uo();
    }
    ot(), lt(), ze(), Xe(), de();
  }
  async function y1(i) {
    var m, y, _, k;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", u = go(s);
    if (!(!u.length && !(((m = p.interaction) == null ? void 0 : m.kind) === "draw" && ((y = p.interaction) == null ? void 0 : y.layerKind) === s) || !await Xd(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((_ = p.interaction) == null ? void 0 : _.kind) === "draw" && ((k = p.interaction) == null ? void 0 : k.layerKind) === s) {
        const N = jn();
        N && p.paintEngine.cancelActiveStroke(N), p.interaction = null;
      }
      u.length = 0, v.painting.raster_objects = In().filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") !== s), s === "paint" && (hn().length = 0), fr(), ot(), lt(), ze(), Xe(), En(), de();
    }
  }
  function b1() {
    if (r) return;
    const i = Nt();
    if (!i || !gt(i) || Vt(i) || S && Yl(i)) return;
    let s;
    S ? s = Xx(i, Vi("st"), ns()) : (s = JSON.parse(JSON.stringify(i)), s.id = Vi("st"), s.yaw_deg = Bt((s.yaw_deg || 0) + 8), s.z_index = ns()), v.stickers.push(s), v.active.selected_sticker_id = s.id, p.selectedId = s.id, p.selectedIds = [s.id], Kt(), ot(), lt(), Xe(), ze(), de();
  }
  function qd() {
    var l, u, h, m, y;
    if (r) return;
    const i = ur(), s = Nt();
    if (!(!s && i.length === 0) && !i.some((_) => xn(_))) {
      if (Jn(), i.length > 1) {
        const _ = new Set(i.filter((A) => Qt(A)).map((A) => String(A.actionGroupId || A.id || ""))), k = new Set(i.filter((A) => pn(A)).map((A) => rn(A.rasterObjectId || A.id || ""))), N = new Set(i.filter(gt).map((A) => String(A.id || "")));
        _.size > 0 && (v.painting.paint.strokes = (Array.isArray((u = (l = v.painting) == null ? void 0 : l.paint) == null ? void 0 : u.strokes) ? v.painting.paint.strokes : []).filter((A) => !_.has(String((A == null ? void 0 : A.actionGroupId) || ""))), v.painting.groups = hn().filter((A) => !_.has(String((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || ""))), fr()), k.size > 0 && (v.painting.raster_objects = In().filter((A) => !k.has(String((A == null ? void 0 : A.id) || ""))), ho()), N.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((A) => N.has(String((A == null ? void 0 : A.id) || "")) ? Vt(A) ? (lo(A) || (A.visible = !1), !0) : !1 : !0), uo(), Kt()), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Xe(), de();
        return;
      }
      if (Qt(s)) {
        const _ = String(s.actionGroupId || s.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (h = v.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((k) => String((k == null ? void 0 : k.actionGroupId) || "").trim() !== _), v.painting.groups = hn().filter((k) => String((k == null ? void 0 : k.actionGroupId) || (k == null ? void 0 : k.id) || "").trim() !== _), fr(), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Xe(), de();
        return;
      }
      if (pn(s)) {
        const _ = rn(s.rasterObjectId || s.id || "");
        v.painting.raster_objects = In().filter((k) => String((k == null ? void 0 : k.id) || "").trim() !== _), ho(), p.selectedId = null, p.selectedIds = [], ot(), lt(), ze(), Xe(), de();
        return;
      }
      if (t === "stickers" || gt(s)) {
        if (Vt(s)) {
          if (lo(s)) return;
          s.visible = !1, Kt(), ot(), lt(), ze(), Xe(), de();
          return;
        }
        v.stickers = v.stickers.filter((_) => _.id !== s.id), uo(), Kt(), p.selectedId = ((y = dn()[0]) == null ? void 0 : y.id) || null, p.selectedIds = p.selectedId ? [p.selectedId] : [], v.active.selected_sticker_id = p.selectedId, ot(), lt(), ze(), Xe(), de();
        return;
      }
      p1();
    }
  }
  function Sc(i, s) {
    const l = Ce.frameSafeRect;
    if (!i || !l || p.mode !== "frame") return !1;
    const u = fu * qi(l, i), h = Ef(If(l, s), u);
    return i.hFOV_deg = h.hFOV_deg, i.vFOV_deg = h.vFOV_deg, !0;
  }
  function Jd(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, u = (() => {
      const _ = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(_)) {
        const [A, I] = _.split(":").map((V) => Number(V));
        if (Number.isFinite(A) && Number.isFinite(I)) return A >= I;
      }
      const k = Number(i.hFOV_deg || 64), N = Number(i.vFOV_deg || 40);
      return Math.abs(k - N) > 1e-6 ? k >= N : Ji(i) >= 1;
    })();
    let [h, m] = l[String(s)] || l["1:1"];
    h >= m !== u && ([h, m] = [m, h]);
    const y = h / m;
    if (!Sc(i, y)) {
      const _ = J(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = _, i.hFOV_deg = Gs(_, y);
    }
    i.aspect_id = `${h}:${m}`;
  }
  function v1(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const u = Ga(s, l);
    if (!u) return !1;
    const h = u.ratio;
    if (!Sc(i, h)) {
      const m = J(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Gs(m, h);
    }
    return i.aspect_id = u.label, !0;
  }
  function Zd(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = oi(i), u = l.tanHalfX / Math.max(1e-12, l.tanHalfY), h = 1 / Math.max(1e-12, u);
    if (!Sc(i, h)) {
      const m = J(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Gs(m, h);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, y] = s.split(":");
      i.aspect_id = `${y}:${m}`;
    } else
      i.aspect_id = Gi(i);
  }
  function Qd() {
    oo().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function _1() {
    if (r) return;
    const i = ur();
    if (!Nt() || i.length === 0 || i.some((_) => xn(_))) return;
    Qd();
    const l = oo(), u = new Set(i.map((_) => gt(_) ? `sticker:${String(_.id || "")}` : pn(_) ? `rasterObject:${rn(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), h = [], m = [];
    if (l.forEach((_) => {
      var N, A;
      const k = _.type === "sticker" ? `sticker:${String(((N = _.item) == null ? void 0 : N.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((A = _.item) == null ? void 0 : A.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      u.has(k) ? h.push(_) : m.push(_);
    }), !h.length || h[h.length - 1] === l[l.length - 1]) return;
    [...m, ...h].forEach((_, k) => {
      _.type === "sticker" && _.item && (_.item.z_index = k), _.type === "strokeGroup" && _.item && (_.item.z_index = k), _.type === "rasterObject" && _.item && (_.item.z_index = k);
    }), Kt(), ot(), lt(), Xe(), de();
  }
  function w1() {
    if (r) return;
    const i = ur();
    if (!Nt() || i.length === 0 || i.some((_) => xn(_))) return;
    Qd();
    const l = oo(), u = new Set(i.map((_) => gt(_) ? `sticker:${String(_.id || "")}` : pn(_) ? `rasterObject:${rn(_.rasterObjectId || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || _.id || "")}`)), h = [], m = [];
    if (l.forEach((_) => {
      var N, A;
      const k = _.type === "sticker" ? `sticker:${String(((N = _.item) == null ? void 0 : N.id) || "")}` : _.type === "rasterObject" ? `rasterObject:${String(((A = _.item) == null ? void 0 : A.id) || _.id || "")}` : `strokeGroup:${String(_.actionGroupId || "")}`;
      u.has(k) ? h.push(_) : m.push(_);
    }), !h.length || h[0] === l[0]) return;
    [...h, ...m].forEach((_, k) => {
      _.type === "sticker" && _.item && (_.item.z_index = k), _.type === "strokeGroup" && _.item && (_.item.z_index = k), _.type === "rasterObject" && _.item && (_.item.z_index = k);
    }), Kt(), ot(), lt(), Xe(), de();
  }
  function x1() {
    r || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", f && (v.output_preset = M(Number(v.output_preset || 2048))), d && (v.coverage = Gn(d.value)), b && (v.bg_color = String(b.value || v.bg_color || "#00ff00")), On(), e.setDirtyCanvas(!0, !0));
  }
  function On() {
    var s;
    if (r) return;
    v.coverage = Gn(v.coverage), t0(e, v.active);
    const i = n0(e, v);
    g && !r0(e, i, String(g.value ?? "")) && (g.value = i, (s = g.callback) == null || s.call(g, i));
  }
  const eh = () => On();
  r || (e.__panoFlushStateBeforeQueue = eh);
  function kc() {
    v.ui_settings = MA(v.ui_settings), r || On();
  }
  function lt() {
    var i;
    r || (On(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function S1() {
    r || Zy() && xd().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function k1(i = {}) {
    var u, h, m, y, _, k, N, A, I, V;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((h = (u = e.__panoPreviewNodeRuntime) == null ? void 0 : u.requestDraw) == null || h.call(u), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !1)), l && ((N = (k = e.graph) == null ? void 0 : k.setDirtyCanvas) == null || N.call(k, !0, !0), (V = (I = (A = Er) == null ? void 0 : A.canvas) == null ? void 0 : I.setDirty) == null || V.call(I, !0, !0));
  }
  function hs() {
    p.primaryTool !== "cursor" && (p.primaryTool = "cursor", En(), ze());
  }
  function Ii(i) {
    const s = E.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * E.width,
      y: (i.clientY - s.top) / s.height * E.height
    };
  }
  function ps(i) {
    const s = E.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function th() {
    return p.mode === "pano" || p.mode === "unwrap";
  }
  function He() {
    if (t !== "cutout") return null;
    const i = Array.isArray(v.shots) ? v.shots : [];
    if (!i.length) return null;
    const s = String(v.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function M1() {
    var W, ne, Z, te, oe;
    if (!E) return null;
    const i = (W = E.getBoundingClientRect) == null ? void 0 : W.call(E), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? E.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? E.height / i.height : 1;
    Ce.frameCanvasScale = Math.min(s, l);
    let u = 24, h = 24;
    const m = Math.max(u + 1, E.width - 24);
    let y = Math.max(h + 1, E.height - 24);
    const _ = (ne = pt == null ? void 0 : pt.getBoundingClientRect) == null ? void 0 : ne.call(pt), k = (Z = sn == null ? void 0 : sn.getBoundingClientRect) == null ? void 0 : Z.call(sn);
    let N = 24;
    _ && i && _.width > 0 && _.height > 0 && (N = Math.max(N, (_.right - i.left) * s + sm)), k && i && k.width > 0 && k.height > 0 && ((te = C.frameRail) == null ? void 0 : te.visible) === !0 && (N = Math.max(N, (i.right - k.left) * s + sm)), u = Math.max(u, N);
    const A = Math.min(m, E.width - N);
    let I = 24;
    const V = (oe = St == null ? void 0 : St.getBoundingClientRect) == null ? void 0 : oe.call(St);
    if (V && i && V.width > 0 && V.height > 0 && (I = Math.max(I, (V.bottom - i.top) * l + du)), [Yn, It].forEach((he) => {
      var Ge;
      if (!he || !i) return;
      const re = getComputedStyle(he);
      if (re.display === "none" || re.visibility === "hidden" || Number(re.opacity) <= 0) return;
      const Se = (Ge = he.getBoundingClientRect) == null ? void 0 : Ge.call(he);
      !Se || Se.width <= 0 || Se.height <= 0 || (I = Math.max(I, (i.bottom - Se.top) * l + du));
    }), Fe && i) {
      const he = getComputedStyle(Fe);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (I = Math.max(I, (aA + du) * l));
    }
    return h = Math.max(h, I), y = Math.max(h + 1, Math.min(y, E.height - I)), {
      x: u,
      y: h,
      w: Math.max(1, A - u),
      h: Math.max(1, y - h)
    };
  }
  function Mc(i = He()) {
    if (!i || !E) return null;
    const s = Ce.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, E.width - 48),
      h: Math.max(1, E.height - 48)
    };
    return Kw(s, i, fu * qi(s, i));
  }
  function en(i = He()) {
    const s = Mc(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Nc() {
    return t === "cutout" && !!He();
  }
  function dr(i, s = performance.now()) {
    if (p.mode === "unwrap") {
      const m = di(), y = (i.x - m.x) / Math.max(1, m.w), _ = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: J(_, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = uc(i.x, i.y), { lon: u, lat: h } = mc(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (u / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - h / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function hr(i, s, l = performance.now()) {
    const u = en(s);
    if (!u) return null;
    const h = {
      x: (Number(i.x) - u.x) / Math.max(1, u.w),
      y: (Number(i.y) - u.y) / Math.max(1, u.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = bc(s, h);
    if (!m) return null;
    const { lon: y, lat: _ } = mc(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: J(0.5 - _ / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function N1(i, s) {
    const l = He();
    if (!l || l.locked === !0) return !1;
    const u = Number(s) > 0, h = Ag(l, s);
    if (!h) return !1;
    if (u) {
      const m = fu * qi(
        Ce.frameSafeRect || { w: E.width, h: E.height },
        h
      ), y = Of({ width: E.width, height: E.height }, m);
      if (y.halfW < E.width * 0.5 - 1e-6 || y.halfH < E.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = h.hFOV_deg, l.vFOV_deg = h.vFOV_deg, p.frameWheelChanged = !0, p.frameWheelCommitTimer && window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = window.setTimeout(() => {
      p.frameWheelCommitTimer = 0, p.frameWheelChanged && (p.frameWheelChanged = !1, ot(), lt(), ze());
    }, 180), ze(), !0;
  }
  function P1() {
    return p.frameWheelCommitTimer && (window.clearTimeout(p.frameWheelCommitTimer), p.frameWheelCommitTimer = 0), p.frameWheelChanged ? (p.frameWheelChanged = !1, ot(), lt(), ze(), !0) : !1;
  }
  function da() {
    const i = p.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && Ei(), p.interaction = null, co(), zr(), ze(), vt(p.pointerPos), de({ localOnly: !0 }), !0;
  }
  function A1(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function mi(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? Br : Fn[s] ? s : p.activeBrushPresetId || Br;
  }
  function nh() {
    return (p.primaryTool === "paint" || p.primaryTool === "mask") && (th() || Nc());
  }
  function rh() {
    var i;
    return nh() && ((i = p.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function ms(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), u = Number((i == null ? void 0 : i.y) || 0), h = s !== !1, m = p.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== h || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - u) > 0.01;
    return p.pointerPos = { x: l, y: u, inside: h }, y;
  }
  function C1() {
    var A, I;
    if (!rh()) return null;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool, l = mi(s), u = Fn[l] || Fn[Br], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), y = Math.max(3, m * 0.5), _ = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : Hn(p.paintColor), k = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : J(Math.max(0.16, Number(_.a ?? 1) * 0.3), 0.16, 0.52), N = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : J(Math.max(0.46, Number(_.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: u,
      radius: y,
      fillStyle: Sr(_, k),
      strokeStyle: Sr(_, N),
      x: Number(((A = p.pointerPos) == null ? void 0 : A.x) || 0),
      y: Number(((I = p.pointerPos) == null ? void 0 : I.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function I1() {
    var V, W, ne;
    const i = C1();
    if (!U) return;
    if (!i) {
      U.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, u = "999px", h = 0, m = i.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", _ = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const k = "rgba(222, 222, 222, 0.72)", N = "rgba(52, 52, 52, 0.72)";
    let A = Number(i.hotspotX ?? s * 0.5), I = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Al, l = Al, u = "0", y = "0", _ = "none", A = cA, I = uA, m = xA(i.fillStyle, N, k);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Z = Math.max(1, Number(((V = i.preset) == null ? void 0 : V.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * Z), l = Math.max(6, i.radius * 2), u = `${Math.min(6, l * 0.42)}px`, h = Number(((ne = (W = i.preset) == null ? void 0 : W.angle) == null ? void 0 : ne.value) || 0) * Ki;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(s)}px`, U.style.height = `${Math.round(l)}px`, U.style.borderRadius = u, U.style.border = y, U.style.boxShadow = _, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(i.x - A)}px, ${Math.round(i.y - I)}px) rotate(${h}deg)`;
  }
  function E1() {
    var he;
    if (!X || !j) return;
    const i = p.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? p.maskTool : p.paintTool;
    if (s === "lasso_fill") return;
    const l = mi(s), u = Fn[l] || Fn[Br], h = Number(p.brushSizes[l] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(u.sizeScale ?? 1)), y = Math.max(6, m * 0.5), _ = s === "eraser", k = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : _ ? { r: 1, g: 1, b: 1, a: 0.22 } : Hn(p.paintColor), N = i === "mask" ? Sr(k, 0.22) : _ ? "rgba(255,255,255,0.14)" : Sr(k, J(Math.max(0.18, Number(k.a ?? 1) * 0.34), 0.18, 0.56)), A = i === "mask" ? Sr(k, 0.96) : _ ? "rgba(255,255,255,0.72)" : Sr(k, J(Math.max(0.56, Number(k.a ?? 1) * 0.96), 0.56, 1));
    let I = y * 2, V = y * 2, W = "999px", ne = 0, Z = N;
    const te = "rgba(222, 222, 222, 0.72)", oe = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Z = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const re = Math.max(1, Number((u == null ? void 0 : u.aspect) ?? 1));
      I = Math.max(16, y * 2 * re), V = Math.max(10, y * 2), W = `${Math.min(8, V * 0.42)}px`, ne = Number(((he = u == null ? void 0 : u.angle) == null ? void 0 : he.value) || 0) * Ki;
    } else s === "brush" ? Z = `radial-gradient(circle at 50% 50%, ${A} 0%, ${N} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (I = Math.max(18, y * 1.8), V = I, Z = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${A} 43%, ${A} 58%, rgba(0,0,0,0) 59%)`) : _ && (Z = "rgba(255,255,255,0.12)");
    j.style.width = `${Math.round(I)}px`, j.style.height = `${Math.round(V)}px`, j.style.borderRadius = W, j.style.background = Z, j.style.border = `1px solid ${te}`, j.style.boxShadow = `0 0 0 1px ${oe}`, j.style.transform = `rotate(${ne}deg)`, Me && (clearTimeout(Me), Me = 0), X.classList.remove("fade-out"), X.classList.add("show");
  }
  function gs() {
    !X || !X.classList.contains("show") || (X.classList.add("fade-out"), Me && clearTimeout(Me), Me = window.setTimeout(() => {
      X.classList.remove("show", "fade-out"), Me = 0;
    }, 180));
  }
  function ih(i, s, l, u) {
    const h = mi(s), m = Fn[h] || Fn[Br], y = p.brushSizes[h] ?? 10, _ = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), k = A1(u, _), N = l.map((I) => ({
      ...I,
      t: Number((I == null ? void 0 : I.t) || 0),
      widthScale: Number.isFinite(Number(I == null ? void 0 : I.widthScale)) ? Math.max(0, Number(I.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(I == null ? void 0 : I.pressureLike)) ? Math.max(0, Number(I.pressureLike)) : 1
    })), A = {
      id: ko(i),
      actionGroupId: ko("ag"),
      targetSpace: u && typeof u == "object" ? { ...u, viewMode: String(p.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(p.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: _,
      createdAt: Date.now(),
      color: i === "paint" ? { ...p.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: k.radiusModel,
      radiusValue: k.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: N.map((I) => ({ ...I })),
        points: N.map((I) => ({ ...I }))
      }
    };
    return am(A, m), Number(m.aspect ?? 1), Number(A.aspect ?? 1), String(A.stampKind || ""), Number(A.size || 0), String(A.radiusModel || ""), Number(A.radiusValue || 0), { ...A.targetSpace }, A;
  }
  function oh(i, s, l, u) {
    const h = l.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), m = mi(s), y = Fn[m] || Fn[Br], _ = {
      id: ko(i),
      actionGroupId: ko("ag"),
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
    return am(_, y), Number(y.aspect ?? 1), Number(_.aspect ?? 1), String(_.stampKind || ""), { ..._.targetSpace }, _;
  }
  function go(i) {
    const s = v.painting || (v.painting = Ro(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function O1(i, s, l = performance.now()) {
    let u;
    if (p.mode === "frame") {
      const N = He();
      if (!N || (u = hr(s, N, l), !u)) return !1;
    } else
      u = dr(s, l);
    if (!u) return !1;
    const h = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, y = h[h.length - 1];
    if (y) {
      const N = Math.abs(Number(u.u ?? u.x ?? 0) - Number(y.u ?? y.x ?? 0)), A = Math.abs(Number(u.v ?? u.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (N < 15e-4 && A < 15e-4) return !1;
    }
    const _ = {
      ...u,
      t: Number((u == null ? void 0 : u.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ..._ }), m.push({ ..._ });
    const k = jn();
    if (k) {
      const N = p.paintEngine.ensureTarget(k);
      p.paintEngine.appendStrokePoint(N, Number(_.u ?? 0), Number(_.v ?? 0), i.stroke);
    }
    return !0;
  }
  function F1(i, s, l = performance.now()) {
    var y, _;
    let u;
    if (p.mode === "frame") {
      const k = He();
      if (!k) return !1;
      u = hr(s, k, l);
    } else
      u = dr(s, l);
    const h = (_ = (y = i == null ? void 0 : i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : _.points;
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
  function T1(i) {
    var re, Se, Ge, Ue, nt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    fs();
    const l = jn(), u = oa(l.width, l.height);
    if (!$d(u, s, { w: l.width, h: l.height })) return !1;
    const h = ((Se = (re = u.ctx) == null ? void 0 : re.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Se.data) || null;
    if (!h) return !1;
    const m = new Map(hn().map((ye) => [String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim(), ye ? { ...ye } : null])), y = [], _ = [], k = [...In().filter((ye) => String((ye == null ? void 0 : ye.layerKind) || "paint") !== "paint")];
    let N = !1, A = oo().reduce((ye, ae) => Math.max(ye, Number((ae == null ? void 0 : ae.z_index) || 0)), -1) + 1;
    function I(ye, ae, pe, we = 8) {
      let Re = ae, We = pe, Te = -1, ft = -1;
      for (let qe = 0; qe < pe; qe += 1)
        for (let Lt = 0; Lt < ae; Lt += 1)
          ye[(qe * ae + Lt) * 4 + 3] <= we || (Lt < Re && (Re = Lt), qe < We && (We = qe), Lt > Te && (Te = Lt), qe > ft && (ft = qe));
      return Te < Re || ft < We ? null : { minX: Re, minY: We, maxX: Te, maxY: ft };
    }
    const V = I(h, l.width, l.height, 8);
    if (!V) return !1;
    function W(ye, ae) {
      return !ye || !ae ? !1 : !(ye.maxX < ae.minX || ae.maxX < ye.minX || ye.maxY < ae.minY || ae.maxY < ye.minY);
    }
    function ne(ye, ae) {
      const pe = li((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "", "paint", ae);
      if (!pe) return null;
      const we = pe.centerUv.u - pe.halfW, Re = pe.centerUv.u + pe.halfW, We = pe.centerUv.v - pe.halfH, Te = pe.centerUv.v + pe.halfH, ft = l.width, qe = l.height;
      return {
        minX: Math.floor((we % 1 + 1) % 1 * ft),
        maxX: Math.ceil((Re % 1 + 1) % 1 * ft),
        minY: Math.floor(J(We, 0, 1) * qe),
        maxY: Math.ceil(J(Te, 0, 1) * qe),
        wraps: Re - we >= 1 || we < 0 || Re > 1
      };
    }
    function Z(ye) {
      const ae = (ye == null ? void 0 : ye.bbox) || null;
      if (!ae) return null;
      const pe = (ye == null ? void 0 : ye.transform) || {}, we = l.width, Re = l.height, We = Number(ae.u0 || 0) + Number(pe.du || 0), Te = Number(ae.u1 || 0) + Number(pe.du || 0), ft = Number(ae.v0 || 0) + Number(pe.dv || 0), qe = Number(ae.v1 || 0) + Number(pe.dv || 0);
      return {
        minX: Math.floor((We % 1 + 1) % 1 * we),
        maxX: Math.ceil((Te % 1 + 1) % 1 * we),
        minY: Math.floor(J(ft, 0, 1) * Re),
        maxY: Math.ceil(J(qe, 0, 1) * Re),
        wraps: Te - We >= 1 || We < 0 || Te > 1
      };
    }
    function te(ye) {
      return ye ? ye.wraps ? W(V, { minX: 0, maxX: ye.maxX, minY: ye.minY, maxY: ye.maxY }) || W(V, { minX: ye.minX, maxX: l.width - 1, minY: ye.minY, maxY: ye.maxY }) : W(V, ye) : !0;
    }
    function oe(ye) {
      if (!ye) return { touched: !1, canvas: null };
      const ae = oa(l.width, l.height, { readback: !0 });
      ae.ctx.drawImage(ye, 0, 0);
      const pe = ae.ctx.getImageData(0, 0, l.width, l.height);
      ae.ctx.save(), ae.ctx.globalCompositeOperation = "destination-out", ae.ctx.drawImage(u.canvas, 0, 0), ae.ctx.restore();
      const we = ae.ctx.getImageData(0, 0, l.width, l.height);
      for (let Re = 0; Re < l.width * l.height; Re += 1) {
        if (h[Re * 4 + 3] <= 8) continue;
        const Te = pe.data[Re * 4 + 3], ft = we.data[Re * 4 + 3];
        if (Te > ft)
          return { touched: !0, canvas: ae.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function he(ye, ae, pe) {
      const we = Number(pe == null ? void 0 : pe.z_index), Re = $b(ye, ae, pe).map((We, Te) => ({
        ...We,
        z_index: Number.isFinite(we) ? we + Te * 1e-3 : A + Te * 1e-3
      }));
      return Re.length && (A = Math.max(A, ...Re.map((We) => Number((We == null ? void 0 : We.z_index) || 0))) + 1), Re;
    }
    for (const ye of hn()) {
      const ae = String((ye == null ? void 0 : ye.actionGroupId) || (ye == null ? void 0 : ye.id) || "").trim();
      if (!ae) continue;
      const pe = cr(ae, "paint");
      if (!te(ne(ye, pe))) {
        _.push(ye), y.push(...pe);
        continue;
      }
      const we = ((Ue = (Ge = p.paintEngine) == null ? void 0 : Ge.getGroupTarget) == null ? void 0 : Ue.call(Ge, ae)) || null, Re = ((nt = we == null ? void 0 : we.committedPaint) == null ? void 0 : nt.canvas) || null;
      if (!Re) {
        _.push(ye), y.push(...pe);
        continue;
      }
      const We = oe(Re);
      if (!We.touched || !We.canvas) {
        _.push(ye), y.push(...pe);
        continue;
      }
      N = !0;
      const Te = he(We.canvas, "paint", m.get(ae) || ye || {});
      k.push(...Te);
    }
    for (const ye of In().filter((ae) => String((ae == null ? void 0 : ae.layerKind) || "paint") === "paint")) {
      if (!te(Z(ye))) {
        k.push(ye);
        continue;
      }
      const ae = wd(ye, null);
      if (!ae) {
        k.push(ye);
        continue;
      }
      const pe = oe(ae);
      if (!pe.touched || !pe.canvas) {
        k.push(ye);
        continue;
      }
      N = !0;
      const we = he(pe.canvas, "paint", ye);
      k.push(...we);
    }
    return N ? (v.painting.paint.strokes = y, v.painting.groups = _.sort((ye, ae) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), v.painting.raster_objects = k.sort((ye, ae) => Number((ye == null ? void 0 : ye.z_index) || 0) - Number((ae == null ? void 0 : ae.z_index) || 0)), na({ preservePanelValues: !1 }), !0) : !1;
  }
  function D1(i) {
    var y, _, k, N, A;
    if ((((_ = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : _.rawPoints) || ((N = (k = i.stroke) == null ? void 0 : k.geometry) == null ? void 0 : N.points) || []).length >= 1) {
      Pc(i);
      const I = jn();
      I && (String(((A = i.stroke) == null ? void 0 : A.toolKind) || "") === "eraser" ? p.paintEngine.cancelActiveStroke(I) : p.paintEngine.commitActiveStroke(i.stroke, I)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = ih(i.layerKind, l.toolKind, [], u);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = jn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function L1(i) {
    var y, _;
    if ((((_ = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : _.points) || []).length >= 3) {
      Pc(i);
      const k = jn();
      k && p.paintEngine.commitActiveStroke(i.stroke, k), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, u = { kind: "ERP_GLOBAL", viewMode: String(p.mode || "frame") }, h = oh(i.layerKind, l.toolKind, [], u);
    h.actionGroupId = l.actionGroupId, i.stroke = h;
    const m = jn();
    m && p.paintEngine.beginStroke(h, m);
  }
  function Pc(i) {
    var m, y, _, k;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((y = i == null ? void 0 : i.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = vc(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), T1(i);
    const u = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (u && td((_ = i.stroke) == null ? void 0 : _.actionGroupId), go(i.layerKind).push(i.stroke), !0);
    const h = s.rawPoints || s.points || [];
    return h.length < 1 ? !1 : (s.processedPoints = vc(h, i.stroke.targetSpace, !0), u && td((k = i.stroke) == null ? void 0 : k.actionGroupId), go(i.layerKind).push(i.stroke), !0);
  }
  function ah(i) {
    var l;
    if (t === "cutout" && p.mode === "frame") {
      const u = He(), h = en(u);
      if (!u || !h || !(Number((i == null ? void 0 : i.x) || 0) >= Number(h.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(h.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const y = hr(i, u, performance.now()), _ = y ? fo(y) : null;
      if (_)
        for (const N of yc()) {
          if (!gt(N)) continue;
          const A = ca(N, _);
          if (A && Number(A.x) >= 0 && Number(A.x) <= 1 && Number(A.y) >= 0 && Number(A.y) <= 1) {
            const I = qt(N);
            if (I != null && I.visible) return { item: N, geom: I };
          }
        }
      const k = Jl(!1).slice().sort((N, A) => Number((A == null ? void 0 : A.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0));
      for (const N of k) {
        if (N.type === "strokeGroup") {
          const V = so(Zo("paint", N.actionGroupId || N.id || ""));
          if (!V) continue;
          const W = qt(V);
          if (!(W != null && W.visible)) continue;
          const ne = Array.isArray(W.strokePaths) ? W.strokePaths : [];
          for (const Z of ne) {
            const te = Array.isArray(Z == null ? void 0 : Z.points) ? Z.points : [];
            if (!te.length) continue;
            if (Z.closed && te.length >= 3 && Ur(i, te)) return { item: V, geom: W };
            const oe = Math.max(8, Number((Z == null ? void 0 : Z.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < te.length - 1; he += 1)
              if (bu(i, te[he], te[he + 1]) <= oe * oe) return { item: V, geom: W };
            if (te.length === 1 && yi(i, te[0]) <= oe * oe) return { item: V, geom: W };
          }
          continue;
        }
        if (N.type === "rasterObject") {
          const V = ao(Qo(((l = N.item) == null ? void 0 : l.id) || N.id || ""));
          if (!V) continue;
          const W = qt(V);
          if (_d(V, W, i, y)) return { item: V, geom: W };
          continue;
        }
        const A = N.item;
        if (!A || !gt(A) || !_) continue;
        const I = ca(A, _);
        if (I && Number(I.x) >= 0 && Number(I.x) <= 1 && Number(I.y) >= 0 && Number(I.y) <= 1) {
          const V = qt(A);
          if (V != null && V.visible) return { item: A, geom: V };
        }
      }
      return null;
    }
    const s = [
      ...Jl(!1).slice().sort((u, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0)).map((u) => {
        var h;
        return u.type === "strokeGroup" ? so(Zo("paint", u.actionGroupId || u.id || "")) : u.type === "rasterObject" ? ao(Qo(((h = u.item) == null ? void 0 : h.id) || u.id || "")) : u.item;
      }).filter(Boolean),
      ...t === "cutout" ? yc().filter((u) => zn(u)) : []
    ];
    for (const u of s) {
      if (Qt(u)) {
        const m = qt(u);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const _ of y) {
          const k = Array.isArray(_ == null ? void 0 : _.points) ? _.points : [];
          if (!k.length) continue;
          if (_.closed && k.length >= 3 && Ur(i, k)) return { item: u, geom: m };
          const N = Math.max(8, Number((_ == null ? void 0 : _.lineWidth) || 0) * 0.5 + 6);
          for (let A = 0; A < k.length - 1; A += 1)
            if (bu(i, k[A], k[A + 1]) <= N * N) return { item: u, geom: m };
          if (k.length === 1 && yi(i, k[0]) <= N * N) return { item: u, geom: m };
        }
        continue;
      }
      if (pn(u)) {
        const m = qt(u);
        if (!(m != null && m.visible)) continue;
        if (_d(u, m, i)) return { item: u, geom: m };
        continue;
      }
      const h = qt(u);
      if (h.visible && Ur(i, h.corners))
        return { item: u, geom: h };
    }
    return null;
  }
  function Ac(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    if (gt(l)) return Uu(i, s);
    if (i.kind === "strokeGroup") {
      const h = i.corners.findIndex((y) => yi(y, s) <= 121);
      if (h >= 0) {
        const y = i.corners[h], _ = y.x - i.center.x, k = y.y - i.center.y, N = _ * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: N };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const y of m) {
        const _ = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
        if (y.closed && _.length >= 3 && Ur(s, _)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
        for (let N = 0; N < _.length - 1; N += 1)
          if (bu(s, _[N], _[N + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return Ur(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const h = i.corners.findIndex((m) => yi(m, s) <= 121);
      if (h >= 0) {
        const m = i.corners[h], y = m.x - i.center.x, _ = m.y - i.center.y, k = y * _ >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: h, cursor: k };
      }
      return Ur(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(i.edgeMidpoints)) {
      const h = i.edgeMidpoints.find((m) => yi(m, s) <= 169);
      if (h) {
        const m = h.edge === "left" || h.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: h.edge, mid: h };
      }
    }
    const u = i.corners.findIndex((h) => yi(h, s) <= 121);
    if (u >= 0) {
      const h = i.corners[u], m = h.x - i.center.x, y = h.y - i.center.y, _ = m * y >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: u, cursor: _ };
    }
    return yi(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : Ur(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: p.mode === "pano" ? "grab" : "default" };
  }
  function sh(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function R1(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function $1(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((h) => R1(i, h))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, u = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Ur({ x: l, y: u }, s.corners);
  }
  function vt(i) {
    if (I1(), p.interaction) {
      p.interaction.kind === "paint_stroke" || p.interaction.kind === "paint_lasso_fill" ? Ne("none") : p.interaction.kind === "view" || p.interaction.kind === "pan_frame" || p.interaction.kind === "roll_frame" ? Ne("grabbing") : p.interaction.kind === "move" || p.interaction.kind === "move_multi" || p.interaction.kind === "move_stroke_group" || p.interaction.kind === "move_raster_object" ? Ne("move") : p.interaction.kind === "scale" || p.interaction.kind === "scale_x" || p.interaction.kind === "scale_y" || p.interaction.kind === "scale_raster_object" ? Ne(p.interaction.cursor || "nwse-resize") : p.interaction.kind === "rotate" ? Ne("grabbing") : Ne("default");
      return;
    }
    if (rh()) {
      Ne("none");
      return;
    }
    if (p.mode === "frame") {
      if (p.altModifier && !r) {
        Ne(oA);
        return;
      }
      if (p.primaryTool !== "cursor") {
        Ne("default");
        return;
      }
      Ne("grab");
      return;
    }
    if (p.primaryTool === "cursor" && p.marqueeModifier) {
      Ne("default");
      return;
    }
    const s = Nt(), l = s ? qt(s) : null, u = s ? xn(s) : !1, h = u ? { kind: "none", cursor: "default" } : Ac(l, i, s);
    if (!u && h.kind !== "none") {
      Ne(h.cursor);
      return;
    }
    if (p.primaryTool === "cursor" && ah(i)) {
      Ne("default");
      return;
    }
    Ne(p.mode === "pano" ? "grab" : "default");
  }
  function Xe() {
    var k, N;
    if (!Zt) return;
    if (p.mode === "frame") {
      C.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const i = Nt(), s = ur();
    if (!i && s.length === 0 || p.interaction) {
      C.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = ts(), u = JM({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? es(s) : qt(i),
      allLocked: tc(s),
      anyLocked: s.some((A) => xn(A)),
      selectedLocked: xn(i),
      activeAspect: qr(i),
      cutoutAspectOpen: p.cutoutAspectOpen,
      isExternalSticker: Vt,
      isStickerHidden: lo,
      canRestoreSelectedToInitial: Ey,
      iconSet: Ae
    });
    if (!u.visible) {
      C.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (A, I, { requireFitsBelow: V = !0 } = {}) => {
      var Se, Ge, Ue;
      const ne = Number((Se = u.anchor) == null ? void 0 : Se.minX), Z = Number((Ge = u.anchor) == null ? void 0 : Ge.maxX), te = Number((Ue = u.anchor) == null ? void 0 : Ue.maxY);
      if (![ne, Z, te].every(Number.isFinite)) return null;
      const oe = Math.max(14, E.width - A - 14), he = J((ne + Z) * 0.5 - A * 0.5, 14, oe), re = te + 18;
      return !Number.isFinite(he) || !Number.isFinite(re) || V && re + I > E.height - 14 ? null : { left: he, top: re };
    }, m = Math.max(1, Number(((k = p.menuSize) == null ? void 0 : k.w) || 220)), y = Math.max(1, Number(((N = p.menuSize) == null ? void 0 : N.h) || 40)), _ = h(m, y, { requireFitsBelow: !1 });
    if (!_) {
      C.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    C.selectionMenu = {
      visible: !0,
      left: _.left,
      top: _.top,
      items: u.items
    }, requestAnimationFrame(() => {
      if (!Zt || C.selectionMenu.visible !== !0) return;
      const A = Zt.getBoundingClientRect(), I = Math.round(Number((A == null ? void 0 : A.width) || 0)) || 220, V = Math.round(Number((A == null ? void 0 : A.height) || 0)) || 40;
      p.menuSize = { w: I, h: V, measured: !0 };
      const W = h(I, V);
      if (!W) {
        C.selectionMenu.visible = !1;
        return;
      }
      C.selectionMenu.left = W.left, C.selectionMenu.top = W.top;
    });
  }
  function Ei() {
    Oe.timer && (clearTimeout(Oe.timer), Oe.timer = 0), Oe.target = null, C.tooltip.visible = !1;
  }
  function V1(i) {
    if (!ln || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    C.tooltip.text = s, C.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var Z, te;
      if (Oe.target !== l || !ln || !(l != null && l.isConnected)) return;
      const u = le.getBoundingClientRect(), h = l.getBoundingClientRect(), m = 8, y = 12, _ = Math.round(Number(((Z = ln.getBoundingClientRect()) == null ? void 0 : Z.width) || 0)) || 100, k = Math.round(Number(((te = ln.getBoundingClientRect()) == null ? void 0 : te.height) || 0)) || 24, N = !!l.closest(".pano-floating-left"), A = !!l.closest(".pano-frame-rail"), I = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let V = "", W = h.left - u.left + h.width * 0.5 - _ * 0.5, ne = h.top - u.top - k - y;
      if (N)
        V = "tool-rail", W = h.right - u.left + 10, ne = h.top - u.top + h.height * 0.5 - k * 0.5, W = J(W, m, Math.max(m, u.width - _ - m)), ne = J(ne, m, Math.max(m, u.height - k - m));
      else if (A)
        V = "frame-rail", W = h.left - u.left - _ - 10, ne = h.top - u.top + h.height * 0.5 - k * 0.5, W = J(W, m, Math.max(m, u.width - _ - m)), ne = J(ne, m, Math.max(m, u.height - k - m));
      else if (I) {
        V = "footer";
        const oe = l.closest(".pano-paint-footer"), he = oe ? oe.getBoundingClientRect() : h;
        W = he.left - u.left + he.width * 0.5 - _ * 0.5, ne = he.bottom - u.top + 5, W = J(W, m, Math.max(m, u.width - _ - m)), ne = Math.max(m, ne);
      }
      W = J(W, m, Math.max(m, u.width - _ - m)), ne = Math.max(m, ne), C.tooltip.left = W, C.tooltip.top = ne, C.tooltip.variant = V, C.tooltip.visible = !0;
    });
  }
  const un = Af({
    getView: () => ({ yaw: p.viewYaw, pitch: p.viewPitch, fov: p.viewFov }),
    setView: (i) => {
      p.viewYaw = Bt(Number(i.yaw || 0)), p.viewPitch = J(Number(i.pitch || 0), -89.9, 89.9), p.viewFov = J(Number(i.fov || p.viewFov || 100), 35, 140);
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
        x: (i = v.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = v.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: di,
    onInteraction: () => {
      Ce.backgroundDirty = !0, Ce.dirty = !0;
    }
  });
  function z1(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += xg(s, i.lastAngle), i.lastAngle = s;
    const u = Sg(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = u, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const h = (((m = C.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = u, h.displayValue = So(u), h.fillPct = (u + 180) / 360 * 100), Hr(), Cc(i), de({ localOnly: !0 });
  }
  function j1(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const u = z0(i.rollGesture, s, l);
    if (!u) return;
    i.rollGesture = u.gesture, i.center = u.gesture.center, i.lastAngle = u.gesture.lastAngle, i.accumulatedRad = u.gesture.accumulatedRad, i.shot.roll_deg = u.rollDeg, i.changed = i.changed || Math.abs(u.gesture.accumulatedRad) > 1e-9;
    const h = (((m = C.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    h && (h.value = u.rollDeg, h.displayValue = So(u.rollDeg), h.fillPct = (u.rollDeg + 180) / 360 * 100), Hr(), Cc(i), de({ localOnly: !0 });
  }
  const lh = (i, s) => {
    const l = Ii(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Cc(i) {
    var y, _;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Oe.timer && (clearTimeout(Oe.timer), Oe.timer = 0), Oe.target = null;
    const s = en(i.shot), l = (y = E.getBoundingClientRect) == null ? void 0 : y.call(E), u = (_ = le.getBoundingClientRect) == null ? void 0 : _.call(le);
    if (!s || !l || !u || E.width <= 0 || E.height <= 0) return;
    const h = l.width / E.width, m = l.height / E.height;
    C.tooltip.text = `${So(i.shot.roll_deg)}°`, C.tooltip.left = l.left - u.left + (s.x + s.w * 0.5) * h, C.tooltip.top = l.top - u.top + (s.y + s.h * 0.5) * m + 12, C.tooltip.variant = "roll", C.tooltip.visible = !0;
  }
  it == null || it.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || p.mode !== "frame") return;
    const s = He();
    if (!s || s.locked === !0) return;
    const l = en(s);
    if (!l) return;
    const u = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, h = lh(i, u);
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
    }, (m = it.setPointerCapture) == null || m.call(it, i.pointerId), i.preventDefault(), Hr(), Cc(p.interaction), de({ localOnly: !0 });
  }), it == null || it.addEventListener("pointermove", (i) => {
    var s;
    ((s = p.interaction) == null ? void 0 : s.kind) !== "roll_frame" || p.interaction.source !== "knob" || z1(
      p.interaction,
      lh(i, p.interaction.center),
      i
    );
  });
  const H1 = () => {
    const i = p.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (ot(), lt(), ze()), p.interaction = null, Ei(), zr(), Hr(), de());
  };
  it == null || it.addEventListener("pointerup", H1), it == null || it.addEventListener("pointercancel", () => da()), it == null || it.addEventListener("lostpointercapture", () => {
    var i;
    ((i = p.interaction) == null ? void 0 : i.source) === "knob" && da();
  }), it == null || it.addEventListener("dblclick", (i) => {
    const s = p.mode === "frame" && !r ? He() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, ot(), lt(), ze(), Hr(), de(), i.preventDefault());
  }), E.onpointerdown = (i) => {
    Le.selection && (Le.selection = null, Gr());
    const s = Ii(i);
    if (st = s, ms(s, !0), p.viewTween = null, un.state.inertia.active = !1, un.state.inertia.vx = 0, un.state.inertia.vy = 0, i.button === 1) {
      if (i.preventDefault(), p.mode === "frame") {
        const _ = He();
        if (!_ || r || _.locked === !0) return;
        p.interaction = {
          kind: "pan_frame",
          shot: _,
          last: s,
          start: {
            yaw_deg: Number(_.yaw_deg || 0),
            pitch_deg: Number(_.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const _ = p.mode === "unwrap" ? s : ps(i);
        p.interaction = { kind: "view", last: _, lastTs: performance.now() }, un.startDrag(_.x, _.y, i.pointerId, performance.now());
      }
      vt(s), E.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (p.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const _ = He(), k = en(_);
      if (!_ || _.locked === !0 || !k) return;
      const N = V0({
        frame: k,
        point: s,
        startRollDeg: Number(_.roll_deg ?? _.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!N) return;
      p.interaction = {
        kind: "roll_frame",
        shot: _,
        center: N.center,
        lastAngle: N.lastAngle,
        accumulatedRad: N.accumulatedRad,
        rollGesture: N,
        start: { roll_deg: Number(_.roll_deg ?? _.rot_deg ?? 0) },
        changed: !1,
        altStarted: N.source === "alt",
        source: N.source
      }, E.setPointerCapture(i.pointerId), i.preventDefault(), Hr(), de({ localOnly: !0 });
      return;
    }
    if (p.mode === "frame" && p.primaryTool === "cursor") {
      const _ = He();
      if (!_ || r || _.locked === !0) return;
      p.interaction = {
        kind: "pan_frame",
        shot: _,
        last: s,
        start: { yaw_deg: Number(_.yaw_deg || 0), pitch_deg: Number(_.pitch_deg || 0) },
        changed: !1
      }, vt(s), E.setPointerCapture(i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      if (p.mode === "pano") {
        const _ = ps(i);
        p.interaction = { kind: "view", last: _, lastTs: performance.now() }, un.startDrag(_.x, _.y, i.pointerId, performance.now()), vt(s), E.setPointerCapture(i.pointerId);
      }
      return;
    }
    if (q && !q.hidden)
      return;
    if ((p.primaryTool === "paint" || p.primaryTool === "mask") && (th() || Nc())) {
      Jn();
      const _ = p.primaryTool === "mask" ? "mask" : "paint", k = p.primaryTool === "mask" ? p.maskTool : p.paintTool, N = p.mode === "frame" && Nc() ? He() : null, A = { kind: "ERP_GLOBAL" }, I = N ? hr(s, N, performance.now()) : dr(s, performance.now());
      if (!I) {
        vt(s);
        return;
      }
      p.interaction = {
        kind: k === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: _,
        _livePreviewToken: ko("live"),
        stroke: k === "lasso_fill" ? oh(_, k, [I], A) : ih(_, k, [I], A)
      }, co();
      const V = jn();
      if (V)
        if (p.paintEngine.beginStroke(p.interaction.stroke, V), p.interaction.kind === "paint_stroke") {
          const W = p.paintEngine.ensureTarget(V), ne = Number((I == null ? void 0 : I.u) ?? (I == null ? void 0 : I.x) ?? 0), Z = Number((I == null ? void 0 : I.v) ?? (I == null ? void 0 : I.y) ?? 0);
          p.paintEngine.appendStrokePoint(W, ne, Z, p.interaction.stroke);
        } else
          p.paintEngine.updateActiveStroke(p.interaction.stroke, V);
      vt(s), E.setPointerCapture(i.pointerId), de();
      return;
    }
    const l = ur(), u = Nt(), h = l.length > 1 ? es(l) : u ? qt(u) : null;
    if (p.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      p.interaction = { kind: "marquee_select", start: s, current: s }, vt(s), E.setPointerCapture(i.pointerId), de({ localOnly: !0 });
      return;
    }
    if (l.length > 1 && (h != null && h.visible)) {
      if ((l.some((k) => xn(k)) ? { kind: "none" } : Ac(h, s)).kind === "move") {
        p.interaction = {
          kind: "move_multi",
          items: l.map((k) => k),
          offset: { x: s.x - h.center.x, y: s.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: l.filter((k) => gt(k)).map((k) => ({
            id: String(k.id || ""),
            yaw_deg: Number(Xt(k).yaw_deg || 0),
            pitch_deg: Number(Xt(k).pitch_deg || 0),
            center: (() => {
              var A, I;
              const N = qt(k);
              return N != null && N.visible ? { x: Number(((A = N.center) == null ? void 0 : A.x) || 0), y: Number(((I = N.center) == null ? void 0 : I.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: l.filter((k) => Qt(k)).map((k) => ({
            id: String(k.actionGroupId || k.id || ""),
            layerKind: String(k.layerKind || "paint"),
            snapshot: gn(cr(k.actionGroupId, k.layerKind)),
            frameSnapshot: gn(li(k.actionGroupId, k.layerKind)),
            center: (() => {
              var A, I;
              const N = qt(k);
              return N != null && N.visible ? { x: Number(((A = N.center) == null ? void 0 : A.x) || 0), y: Number(((I = N.center) == null ? void 0 : I.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: ec(k.actionGroupId, k.layerKind)
          })),
          rasterSnapshots: l.filter((k) => pn(k)).map((k) => ({
            id: rn(k.rasterObjectId || k.id || ""),
            snapshot: gn(In().find((N) => String((N == null ? void 0 : N.id) || "") === rn(k.rasterObjectId || k.id || ""))),
            center: (() => {
              var A, I;
              const N = qt(k);
              return N != null && N.visible ? { x: Number(((A = N.center) == null ? void 0 : A.x) || 0), y: Number(((I = N.center) == null ? void 0 : I.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Nd(k)
          }))
        }, vt(s), E.setPointerCapture(i.pointerId);
        return;
      }
    } else if (u && (h != null && h.visible)) {
      const _ = xn(u) ? { kind: "none" } : Ac(h, s, u);
      if (_.kind === "scale") {
        p.interaction = Qt(u) ? {
          kind: "scale_stroke_group",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: gn(cr(u.actionGroupId, u.layerKind)),
          frameSnapshot: gn(li(u.actionGroupId, u.layerKind)),
          cursor: _.cursor
        } : pn(u) ? {
          kind: "scale_raster_object",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          snapshot: gn(In().find((k) => String((k == null ? void 0 : k.id) || "") === rn(u.rasterObjectId || u.id || ""))),
          cursor: _.cursor
        } : {
          kind: "scale",
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(Xt(u).hFOV_deg || 20),
          startVFOV: Number(Xt(u).vFOV_deg || 20),
          cursor: _.cursor
        }, vt(s), E.setPointerCapture(i.pointerId);
        return;
      }
      if (_.kind === "scale_x" || _.kind === "scale_y") {
        p.interaction = {
          kind: _.kind,
          item: u,
          center: h.center,
          startDist: Math.max(1, Math.hypot(s.x - h.center.x, s.y - h.center.y)),
          startHFOV: Number(Xt(u).hFOV_deg || 20),
          startVFOV: Number(Xt(u).vFOV_deg || 20),
          cursor: _.cursor,
          edge: _.edge
        }, vt(s), E.setPointerCapture(i.pointerId);
        return;
      }
      if (_.kind === "rotate") {
        p.interaction = Qt(u) ? {
          kind: "rotate_stroke_group",
          item: u,
          center: h.center,
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x),
          snapshot: gn(cr(u.actionGroupId, u.layerKind)),
          frameSnapshot: gn(li(u.actionGroupId, u.layerKind))
        } : {
          kind: "rotate",
          item: u,
          center: h.center,
          startRot: Number(Xt(u).rot_deg || Xt(u).roll_deg || 0),
          startAng: Math.atan2(s.y - h.center.y, s.x - h.center.x)
        }, vt(s), E.setPointerCapture(i.pointerId);
        return;
      }
      if (_.kind === "move") {
        if (Qt(u)) {
          const k = p.mode === "frame" ? (() => {
            const N = He();
            return N ? hr(s, N, performance.now()) : null;
          })() : dr(s, performance.now());
          p.interaction = {
            kind: "move_stroke_group",
            item: u,
            startUv: k,
            snapshot: gn(cr(u.actionGroupId, u.layerKind)),
            frameSnapshot: gn(li(u.actionGroupId, u.layerKind))
          }, vt(s), E.setPointerCapture(i.pointerId);
          return;
        }
        if (pn(u)) {
          const k = p.mode === "frame" ? (() => {
            const N = He();
            return N ? hr(s, N, performance.now()) : null;
          })() : dr(s, performance.now());
          p.interaction = {
            kind: "move_raster_object",
            item: u,
            startUv: k,
            snapshot: gn(In().find((N) => String((N == null ? void 0 : N.id) || "") === rn(u.rasterObjectId || u.id || "")))
          }, vt(s), E.setPointerCapture(i.pointerId);
          return;
        }
        p.interaction = {
          kind: "move",
          item: u,
          offset: { x: s.x - h.center.x, y: s.y - h.center.y }
        }, vt(s), E.setPointerCapture(i.pointerId);
        return;
      }
    }
    const m = ah(s);
    if (m) {
      const _ = p.selectedId !== m.item.id;
      if (_ && p.selectedId && (ot(), On()), vr(m.item), t === "cutout" && _ && (p.cutoutAspectOpen = !1), _ && ze(), Xe(), de(), xn(m.item)) {
        vt(s);
        return;
      }
      p.interaction = {
        kind: Qt(m.item) ? "move_stroke_group" : pn(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: s.x - m.geom.center.x, y: s.y - m.geom.center.y },
        startUv: Qt(m.item) || pn(m.item) ? p.mode === "frame" ? (() => {
          const k = He();
          return k ? hr(s, k, performance.now()) : null;
        })() : dr(s, performance.now()) : null,
        snapshot: Qt(m.item) ? gn(cr(m.item.actionGroupId, m.item.layerKind)) : pn(m.item) ? gn(In().find((k) => String((k == null ? void 0 : k.id) || "") === rn(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Qt(m.item) ? gn(li(m.item.actionGroupId, m.item.layerKind)) : null
      }, vt(s), E.setPointerCapture(i.pointerId);
      return;
    }
    const y = !!p.selectedId;
    if (y && (ot(), On()), na(), y && ze(), Xe(), de(), p.mode === "pano") {
      const _ = ps(i);
      p.interaction = { kind: "view", last: _, lastTs: performance.now() }, un.startDrag(_.x, _.y, i.pointerId, performance.now()), vt(s), E.setPointerCapture(i.pointerId);
    }
  };
  function G1(i, s) {
    if (!S || !kt.playing) return;
    if (kt.stop(), i.kind === "move_multi") {
      const h = es(i.items);
      if (!(h != null && h.visible)) return;
      i.offset = { x: s.x - h.center.x, y: s.y - h.center.y }, i.startCenter = { x: h.center.x, y: h.center.y };
      for (const m of i.stickerSnapshots) {
        const y = i.items.find((k) => String((k == null ? void 0 : k.id) || "") === m.id), _ = y ? qt(y) : null;
        _ != null && _.visible && (m.yaw_deg = Number(Xt(y).yaw_deg || 0), m.pitch_deg = Number(Xt(y).pitch_deg || 0), m.center = { x: _.center.x, y: _.center.y });
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
  E.onpointermove = (i) => {
    var u, h, m, y, _, k, N, A, I, V, W, ne, Z, te, oe, he, re, Se, Ge, Ue, nt, ye;
    const s = Ii(i);
    if (ms(s, !0), !p.interaction) {
      vt(s);
      return;
    }
    vt(s);
    const l = p.interaction;
    if (st && (s.x !== st.x || s.y !== st.y)) {
      const ae = st;
      st = null, l.kind !== "view" && l.kind !== "marquee_select" && G1(l, ae);
    }
    if (l.kind === "paint_stroke") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let pe = !1;
      ae.forEach((we) => {
        const Re = Ii(we);
        if (p.mode === "frame") {
          const We = He(), Te = We ? en(We) : null;
          if (Te) {
            const ft = (Re.x - Te.x) / Math.max(1, Te.w), qe = (Re.y - Te.y) / Math.max(1, Te.h);
            if (!(ft >= 0 && ft <= 1 && qe >= 0 && qe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, D1(l));
          }
        }
        O1(l, Re, performance.now()) && (pe = !0);
      }), pe && de({ localOnly: !0 });
      return;
    }
    if (l.kind === "paint_lasso_fill") {
      const ae = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
      let pe = !1;
      if (ae.forEach((we) => {
        const Re = Ii(we);
        if (p.mode === "frame") {
          const We = He(), Te = We ? en(We) : null;
          if (Te) {
            const ft = (Re.x - Te.x) / Math.max(1, Te.w), qe = (Re.y - Te.y) / Math.max(1, Te.h);
            if (!(ft >= 0 && ft <= 1 && qe >= 0 && qe <= 1)) {
              l._outOfFrame = !0;
              return;
            }
            l._outOfFrame && (l._outOfFrame = !1, L1(l));
          }
        }
        F1(l, Re, performance.now()) && (pe = !0);
      }), pe) {
        const we = jn();
        we && p.paintEngine.updateActiveStroke(l.stroke, we), de({ localOnly: !0 });
      }
      return;
    }
    if (l.kind === "view") {
      const ae = performance.now(), pe = p.mode === "unwrap" ? s : ps(i);
      un.moveDrag(pe.x, pe.y, p.mode === "unwrap" ? "unwrap" : "pano", ae), l.lastTs = ae, l.last = pe, de({ localOnly: !0 });
      return;
    }
    if (l.kind === "pan_frame") {
      const ae = Mc(l.shot);
      if (!ae || !l.shot) return;
      const pe = s.x - l.last.x, we = s.y - l.last.y, Re = j0(l.shot, {
        dx: pe,
        dy: we,
        focalPx: ae.focalPx,
        invertX: ((u = v.ui_settings) == null ? void 0 : u.invert_view_x) === !0,
        invertY: ((h = v.ui_settings) == null ? void 0 : h.invert_view_y) === !0
      });
      l.shot.yaw_deg = Re.yaw_deg, l.shot.pitch_deg = Re.pitch_deg, l.changed = l.changed || Math.abs(pe) > 0 || Math.abs(we) > 0, l.last = s, de({ localOnly: !0 });
      return;
    }
    if (l.kind === "roll_frame") {
      if (l.source === "knob") return;
      j1(l, s, i);
      return;
    }
    if (l.kind === "move") {
      const ae = s.x - l.offset.x, pe = s.y - l.offset.y;
      if (p.mode === "frame" && t === "cutout") {
        const we = He(), Re = en(we);
        if (!we || !Re) return;
        const We = {
          x: J((ae - Re.x) / Math.max(1, Re.w), 0, 1),
          y: J((pe - Re.y) / Math.max(1, Re.h), 0, 1)
        }, Te = bc(we, We);
        if (!Te) return;
        const ft = Ts(Te);
        lr(l.item, { yaw_deg: ft.yaw, pitch_deg: ft.pitch });
      } else if (p.mode === "unwrap") {
        const we = di(), Re = J((ae - we.x) / Math.max(we.w, 1), 0, 1), We = J((pe - we.y) / Math.max(we.h, 1), 0, 1);
        lr(l.item, { yaw_deg: Bt(Re * 360 - 180), pitch_deg: J(90 - We * 180, -90, 90) });
      } else {
        const we = uc(ae, pe), Re = Ts(we);
        lr(l.item, { yaw_deg: Re.yaw, pitch_deg: Re.pitch });
      }
      gt(l.item) && Kt(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "move_stroke_group") {
      const ae = p.mode === "frame" ? (() => {
        const Re = He();
        return Re ? hr(s, Re, performance.now()) : null;
      })() : dr(s, performance.now());
      if (!ae || !l.startUv) return;
      const pe = qn(Number(ae.u || 0), Number(l.startUv.u || 0)), we = Number(ae.v || 0) - Number(l.startUv.v || 0);
      rd((m = l.item) == null ? void 0 : m.actionGroupId, pe, we, l.snapshot, (y = l.item) == null ? void 0 : y.layerKind, l.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_raster_object") {
      const ae = p.mode === "frame" ? (() => {
        const Re = He();
        return Re ? hr(s, Re, performance.now()) : null;
      })() : dr(s, performance.now());
      if (!ae || !l.startUv) return;
      const pe = qn(Number(ae.u || 0), Number(l.startUv.u || 0)), we = Number(ae.v || 0) - Number(l.startUv.v || 0);
      od(((_ = l.item) == null ? void 0 : _.rasterObjectId) || ((k = l.item) == null ? void 0 : k.id) || "", pe, we, l.snapshot) && (ho(), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_raster_object") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      _y(((N = l.item) == null ? void 0 : N.rasterObjectId) || ((A = l.item) == null ? void 0 : A.id) || "", pe, l.snapshot) && (ho(), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "move_multi") {
      const ae = s.x - Number(((I = l.offset) == null ? void 0 : I.x) || 0), pe = s.y - Number(((V = l.offset) == null ? void 0 : V.y) || 0);
      let we = !1, Re = !1, We = !1;
      const Te = ae - Number(((W = l.startCenter) == null ? void 0 : W.x) || ae), ft = pe - Number(((ne = l.startCenter) == null ? void 0 : ne.y) || pe);
      for (const qe of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
        const Lt = (t === "cutout" ? Ql() : dn()).find((Pt) => String((Pt == null ? void 0 : Pt.id) || "") === String(qe.id || ""));
        if (!Lt || !gt(Lt)) continue;
        const fn = {
          x: Number(((Z = qe.center) == null ? void 0 : Z.x) || 0) + Te,
          y: Number(((te = qe.center) == null ? void 0 : te.y) || 0) + ft
        };
        if (p.mode === "frame" && t === "cutout") {
          const Pt = He(), Rt = en(Pt);
          if (!Pt || !Rt) continue;
          const Oi = {
            x: J((fn.x - Rt.x) / Math.max(1, Rt.w), 0, 1),
            y: J((fn.y - Rt.y) / Math.max(1, Rt.h), 0, 1)
          }, Ah = bc(Pt, Oi);
          if (!Ah) continue;
          const Ch = Ts(Ah);
          lr(Lt, { yaw_deg: Ch.yaw, pitch_deg: Ch.pitch });
        } else if (p.mode === "unwrap") {
          const Pt = di(), Rt = J((fn.x - Pt.x) / Math.max(Pt.w, 1), 0, 1), Oi = J((fn.y - Pt.y) / Math.max(Pt.h, 1), 0, 1);
          lr(Lt, { yaw_deg: Bt(Rt * 360 - 180), pitch_deg: J(90 - Oi * 180, -90, 90) });
        } else {
          const Pt = uc(fn.x, fn.y), Rt = Ts(Pt);
          lr(Lt, { yaw_deg: Rt.yaw, pitch_deg: Rt.pitch });
        }
        we = !0;
      }
      for (const qe of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
        const Lt = {
          x: Number(((oe = qe.center) == null ? void 0 : oe.x) || 0) + Te,
          y: Number(((he = qe.center) == null ? void 0 : he.y) || 0) + ft
        }, fn = p.mode === "frame" ? (() => {
          const Rt = He();
          return Rt ? hr(Lt, Rt, performance.now()) : null;
        })() : dr(Lt, performance.now()), Pt = qe.centerUv || null;
        if (fn && Pt) {
          const Rt = qn(Number(fn.u || 0), Number(Pt.u || 0)), Oi = Number(fn.v || 0) - Number(Pt.v || 0);
          rd(qe.id, Rt, Oi, qe.snapshot, qe.layerKind, qe.frameSnapshot) && (we = !0, Re = !0);
        }
      }
      for (const qe of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
        const Lt = {
          x: Number(((re = qe.center) == null ? void 0 : re.x) || 0) + Te,
          y: Number(((Se = qe.center) == null ? void 0 : Se.y) || 0) + ft
        }, fn = p.mode === "frame" ? (() => {
          const Rt = He();
          return Rt ? hr(Lt, Rt, performance.now()) : null;
        })() : dr(Lt, performance.now()), Pt = qe.centerUv || null;
        if (fn && Pt) {
          const Rt = qn(Number(fn.u || 0), Number(Pt.u || 0)), Oi = Number(fn.v || 0) - Number(Pt.v || 0);
          od(qe.id, Rt, Oi, qe.snapshot) && (we = !0, We = !0);
        }
      }
      we && (Re ? fr({ rebuildPaintEngine: !1 }) : We ? ho() : Kt(), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "scale_stroke_group") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
      id((Ge = l.item) == null ? void 0 : Ge.actionGroupId, pe, 0, l.snapshot, (Ue = l.item) == null ? void 0 : Ue.layerKind, l.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "rotate_stroke_group") {
      let ae = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * Ki;
      i.shiftKey && (ae = Math.round(ae / 45) * 45), id((nt = l.item) == null ? void 0 : nt.actionGroupId, 1, ae, l.snapshot, (ye = l.item) == null ? void 0 : ye.layerKind, l.frameSnapshot) && (fr({ rebuildPaintEngine: !1 }), de({ localOnly: !0 }));
      return;
    }
    if (l.kind === "marquee_select") {
      l.current = s, de({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      lr(l.item, { hFOV_deg: J(l.startHFOV * pe, 1, 179), vFOV_deg: J(l.startVFOV * pe, 1, 179) }), sr(l.item) || (l.item.aspect_id = Gi(l.item)), gt(l.item) && Kt(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_x") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      lr(l.item, { hFOV_deg: J(l.startHFOV * pe, 1, 179) }), sr(l.item) || (l.item.aspect_id = Gi(l.item)), gt(l.item) && Kt(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "scale_y") {
      const pe = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
      lr(l.item, { vFOV_deg: J(l.startVFOV * pe, 1, 179) }), sr(l.item) || (l.item.aspect_id = Gi(l.item)), gt(l.item) && Kt(), de({ localOnly: !0 });
      return;
    }
    if (l.kind === "rotate") {
      let pe = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * Ki, we = l.startRot - pe;
      i.shiftKey && (we = Math.round(we / 45) * 45), lr(l.item, { [gt(l.item) ? "rot_deg" : "roll_deg"]: we }), gt(l.item) && Kt(), de({ localOnly: !0 });
    }
  }, E.onpointerup = () => {
    var s, l, u, h, m, y, _, k;
    const i = p.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if (((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        co();
        const N = Pc(p.interaction), A = !!p.interaction._hasCommittedSegments;
        if (N || A) {
          fr();
          const I = String(((u = p.interaction.stroke) == null ? void 0 : u.actionGroupId) || "").trim();
          if (I) {
            const W = hn().find((ne) => String((ne == null ? void 0 : ne.actionGroupId) || "") === I);
            W && (W.frame = null);
          }
          const V = jn();
          V && (N ? String(((h = p.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (p.paintEngine.cancelActiveStroke(V), Dd()) : p.paintEngine.commitActiveStroke(p.interaction.stroke, V) : p.paintEngine.cancelActiveStroke(V)), ot(), On(), ze(), Xe(), e.setDirtyCanvas(!0, !0), de();
        } else {
          const I = jn();
          I && p.paintEngine.cancelActiveStroke(I);
        }
      } else if (((m = p.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const N = sh(p.interaction.start, p.interaction.current), I = [
          ...t === "cutout" ? yc().filter((V) => !zn(V)) : [...dn()],
          ...gy(),
          ...yy()
        ].filter((V) => $1(N, qt(V)));
        Sy(I, ((y = I[I.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && I.length && (p.cutoutAspectOpen = !1), ze(), Xe(), de();
      } else if (((_ = p.interaction) == null ? void 0 : _.kind) === "pan_frame" || ((k = p.interaction) == null ? void 0 : k.kind) === "roll_frame")
        p.interaction.changed && (ot(), lt(), ze());
      else if (p.interaction && p.interaction.kind !== "view") {
        let N = !1;
        (p.interaction.kind === "move_stroke_group" || p.interaction.kind === "scale_stroke_group" || p.interaction.kind === "rotate_stroke_group") && (N = !0), (p.interaction.kind === "move_raster_object" || p.interaction.kind === "scale_raster_object") && (N = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length && (N = !0), p.interaction.kind === "move_multi" && Array.isArray(p.interaction.rasterSnapshots) && p.interaction.rasterSnapshots.length && (N = !0), N && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(p.interaction.kind) || p.interaction.kind === "move_multi" && Array.isArray(p.interaction.strokeSnapshots) && p.interaction.strokeSnapshots.length ? fr({ rebuildPaintEngine: !0 }) : ho()), ot(), On(), e.setDirtyCanvas(!0, !0), po(), Xe(), de();
      }
      p.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && Ei(), co(), i && i.kind === "view" && un.endDrag(performance.now()), zr(), Xe(), vt(p.pointerPos), de();
    }
  }, E.onpointercancel = () => {
    var i, s, l;
    if (!da()) {
      if (((i = p.interaction) == null ? void 0 : i.kind) === "view" && un.endDrag(performance.now()), ((s = p.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = p.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        co();
        const u = jn();
        u && p.paintEngine.cancelActiveStroke(u);
      }
      p.interaction = null, co(), zr(), vt(p.pointerPos), de({ localOnly: !0 });
    }
  }, E.onlostpointercapture = () => {
    da();
  }, E.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, E.onmousemove = (i) => {
    const s = Ii(i), l = ms(s, !0);
    p.interaction || (vt(s), l && p.mode === "frame" && p.primaryTool === "cursor" && de({ localOnly: !0 }));
  }, E.onmouseleave = () => {
    ms(p.pointerPos, !1), vt(p.pointerPos), p.mode === "frame" && p.primaryTool === "cursor" && de({ localOnly: !0 });
  }, E.onwheel = (i) => {
    if (p.mode === "frame") {
      const s = Ii(i), l = Pf(i);
      l && N1(s, l) && de({ localOnly: !0 }), i.preventDefault();
      return;
    }
    p.mode === "pano" && (un.applyWheelEvent(i) && de({ localOnly: !0 }), i.preventDefault());
  }, E.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), br(!0));
  }, E.ondrop = (i) => {
    var u;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), je.depth = 0, br(!1);
    const l = Array.from(((u = i.dataTransfer) == null ? void 0 : u.files) || []).find((h) => Ir(h));
    l && Yd(l);
  };
  const ch = (i) => {
    t !== "stickers" && t !== "cutout" || r || Vn(i) && (je.depth += 1, br(!0), i.preventDefault());
  }, uh = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!je.active && Vn(i) && br(!0), je.active && i.preventDefault());
  }, fh = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !je.active) return;
    je.depth = Math.max(0, je.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (je.depth === 0 || s) && br(!1);
  }, dh = (i) => {
    t !== "stickers" && t !== "cutout" || r || (je.depth = 0, br(!1), Vn(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", ch, !0), window.addEventListener("dragover", uh, !0), window.addEventListener("dragleave", fh, !0), window.addEventListener("drop", dh, !0);
  function Ic() {
    const { canUndo: i, canRedo: s } = Bd();
    xo(C.toolButtons, "value", "undo", { disabled: !i }), xo(C.toolButtons, "value", "redo", { disabled: !s });
  }
  const hh = (i, s, l = !1) => {
    var N;
    Jn();
    const u = t === "cutout" && p.mode === "frame" ? He() : null, h = u || Nt(), m = u ? "shot" : ts(), y = S && p.inspectCamera;
    if (!y && (!h || m === "stroke" || xn(h))) return;
    const _ = (((N = C.sidePanel) == null ? void 0 : N.params) || []).find((A) => A.key === i);
    if (!_ || _.enabled === !1) return;
    let k = Number(s);
    if (Number.isNaN(k) && (k = 0), k = J(k, Number(_.min), Number(_.max)), i === "yaw_deg" && (k = Bt(k)), y) {
      Ux(v.camera, p.frame, i, k), ze(), l && ot();
      return;
    }
    i === "opacity" ? Yx(h, p.frame, k / 100) : lr(h, { [i]: k }), t === "cutout" && (i === "hFOV_deg" || i === "vFOV_deg") && (h.aspect_id = Gi(h)), ze(), de(), l && ot();
  };
  ee == null || ee.addEventListener("click", async (i) => {
    var u, h, m, y, _, k, N;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const A = Gn(s.getAttribute("data-coverage"));
      if (A === Gn(v.coverage)) return;
      v.coverage = A, p.coverage = A, d && (d.value = String(A)), a ? Ce.backgroundDirty = !0 : (On(), k1({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), Xe(), de();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((h = (u = C.sidePanel) == null ? void 0 : u.selectionPicker) != null && h.disabled) return;
      C.sidePanel.selectionPicker.open = !C.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      C.sidePanel.selectionPicker.open = !1;
      const A = String(s.getAttribute("data-selection-id") || "");
      let I = null;
      if (A && (t === "stickers" ? I = dn().find((V) => String((V == null ? void 0 : V.id) || "") === A) || null : I = ((m = sd().find((V) => {
        var W;
        return String(((W = V == null ? void 0 : V.item) == null ? void 0 : W.id) || "") === A;
      })) == null ? void 0 : m.item) || null), vr(I || null), I && !Qt(I)) {
        const V = Xt(I);
        Ai(
          Bt(Number(V.yaw_deg || 0)),
          J(Number(V.pitch_deg || 0), -89.9, 89.9),
          p.viewFov
        );
      }
      ze(), Xe(), de();
      return;
    }
    if (l === "copy-state-inline") {
      const A = Nt(), I = ts();
      if (!A || I === "stroke" || ur().length > 1) return;
      const V = JSON.stringify(t === "cutout" && I !== "image" ? md(A) : Ry(Xt(A)));
      try {
        await navigator.clipboard.writeText(V), (y = C.sidePanel) != null && y.copyStateButton && (C.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var W;
          (W = C.sidePanel) != null && W.copyStateButton && (C.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const A = String(s.getAttribute("data-visibility") || "");
      A === "panorama" ? p.showPanorama = !p.showPanorama : A === "objects" ? p.showObjects = !p.showObjects : A === "mask" && (p.showMask = !p.showMask), ze(), de();
      return;
    }
    if (l === "set-invert-x") {
      v.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", kc(), ze(), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0), de();
      return;
    }
    if (l === "set-invert-y") {
      v.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", kc(), ze(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), de();
      return;
    }
    if (l === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, kc(), ze(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), de();
      return;
    }
    if (l === "close-preview") {
      bo();
      return;
    }
    if (l === "cancel-close") {
      bo();
      return;
    }
    l === "save-close" && (x1(), bo());
  }), ee == null || ee.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && hh(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), ee == null || ee.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && hh(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Ec = () => yd();
  Ec(), T.addEventListener("click", (i) => {
    var _, k, N, A;
    if ((k = (_ = i.target) == null ? void 0 : _.matches) != null && k.call(_, "[data-confirm-overlay]")) {
      const I = (N = C.confirmDialog) == null ? void 0 : N.resolve;
      C.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, I == null || I(!1);
      return;
    }
    const s = i.target.closest("[data-view]");
    if (s) {
      if (s.disabled) return;
      const I = p.mode;
      p.mode = String(s.getAttribute("data-view") || "pano"), t === "cutout" && p.mode === "frame" && (I !== "frame" && (Ce.frameSafeRect = null), ze(), Xe()), hs(), zr(), de();
      return;
    }
    const l = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (l && !r) {
      if (l.matches("[data-tool-mode]")) {
        const I = String(l.getAttribute("data-tool-mode") || "cursor");
        p.primaryTool = I, (I === "paint" || I === "mask") && na({ preservePanelValues: !0 }), En(), ze(), Xe(), de();
        return;
      }
      if (l.matches("[data-tool-ui-action]")) {
        const I = String(l.getAttribute("data-tool-ui-action") || "");
        if ((I === "undo" || I === "redo") && l.disabled) return;
        I === "undo" ? _c(-1) : I === "redo" ? _c(1) : I === "clear" ? g1() : I === "add" || I === "add-image" ? a1() : I === "add-or-look" && h1();
        return;
      }
      if (l.matches("[data-paint-tool]")) {
        p.primaryTool = "paint";
        const I = String(l.getAttribute("data-paint-tool") || "pen");
        p.paintTool = I, na({ preservePanelValues: !0 }), Fn[I] && (p.activeBrushPresetId = I), En(), ze(), Xe(), de();
        return;
      }
      if (l.matches("[data-mask-tool]")) {
        p.primaryTool = "mask", p.maskTool = String(l.getAttribute("data-mask-tool") || "pen"), na({ preservePanelValues: !0 }), En(), ze(), Xe(), de();
        return;
      }
      if (l.matches("[data-paint-layer-clear-current]")) {
        const I = String(l.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        y1(I);
        return;
      }
      if (l.matches("[data-paint-color-swatch]")) {
        const I = Zs.find((V) => V.id === l.getAttribute("data-paint-color-swatch"));
        if (!I) return;
        p.paintColor = Hn(I.color), $e(!0), En();
        return;
      }
      if (l.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), q && !q.hidden ? $e(!0) : Ee(), En();
        return;
      }
    }
    const u = String(((A = l == null ? void 0 : l.getAttribute) == null ? void 0 : A.call(l, "data-action")) || "");
    if (u === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      Pe.resumeAfterScrub = !1, xc();
      return;
    }
    if (u === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), ud(), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (u === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Y instanceof HTMLVideoElement)) return;
      const I = !C.videoTransport.loop;
      C.videoTransport.loop = I, Y.loop = I, ci({
        hasAudio: C.videoTransport.hasAudio,
        loop: I,
        muted: Y.muted,
        volume: Number(Y.volume ?? C.videoTransport.volume ?? 1)
      }), typeof (l == null ? void 0 : l.blur) == "function" && l.blur();
      return;
    }
    if (!r) {
      if (u === "frame-aspect") {
        C.frameRail.aspectOpen = !C.frameRail.aspectOpen;
        return;
      }
      if (u === "frame-aspect-set") {
        const I = p.mode === "frame" ? He() : null;
        if (!I || I.locked === !0) return;
        Jd(I, String(l.getAttribute("data-aspect") || "1:1")), C.frameRail.aspectOpen = !1, po(), ot(), lt(), zr(), de();
        return;
      }
      if (u === "frame-aspect-custom") {
        const I = p.mode === "frame" ? He() : null, V = l.getAttribute("data-custom-width"), W = l.getAttribute("data-custom-height");
        if (!I || !v1(I, V, W)) return;
        C.frameRail.aspectOpen = !1, po(), ot(), lt(), zr(), de();
        return;
      }
      if (u === "frame-rotate-90") {
        const I = p.mode === "frame" ? He() : null;
        if (!I || I.locked === !0) return;
        Zd(I), C.frameRail.aspectOpen = !1, po(), ot(), lt(), zr(), de();
        return;
      }
      if (u === "aspect") {
        p.cutoutAspectOpen = !p.cutoutAspectOpen, p.menuSize.measured = !1, Xe(), de();
        return;
      }
      if (u === "aspect-set") {
        const I = Nt();
        if (!I) return;
        const V = String(l.getAttribute("data-aspect") || "1:1");
        Jd(I, V), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, po(), ot(), lt(), Xe(), de();
        return;
      }
      if (u === "rotate-90") {
        const I = Nt();
        if (!I) return;
        Zd(I), p.cutoutAspectOpen = !1, p.menuSize.measured = !1, po(), ot(), lt(), Xe(), de();
        return;
      }
      if (u === "bring-front") {
        _1();
        return;
      }
      if (u === "send-back") {
        w1();
        return;
      }
      if (u === "duplicate") {
        b1();
        return;
      }
      if (u === "replace-image") {
        u1();
        return;
      }
      if (u === "toggle-lock") {
        xy();
        return;
      }
      if (u === "back-initial") {
        Cy();
        return;
      }
      if (u === "toggle-visible") {
        Ay();
        return;
      }
      if (u === "delete") {
        qd();
        return;
      }
    }
    if (u === "reset-view") {
      if (p.mode === "frame") return;
      Ai(0, 0, 100, 180, 680);
      return;
    }
    if (u === "toggle-grid") {
      if (p.mode === "frame") return;
      p.showGrid = !p.showGrid, PA(e == null ? void 0 : e.id, p.showGrid), Ec(), de();
      return;
    }
    if (u === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), W1();
      return;
    }
    if (u === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const I = !p.outputPreviewExpanded;
      p.outputPreviewExpanded = I, p.outputPreviewAnimFrom = p.outputPreviewAnim, p.outputPreviewAnimTo = I ? 1 : 0, p.outputPreviewAnimStartTs = performance.now(), bh(), de();
      return;
    }
    const h = i.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), y = p.customPaintHistory[m];
    y && (p.customPaintColor = Hn(y), p.paintColor = Hn(y), En());
  }), T.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Y instanceof HTMLVideoElement)) return;
      kt.playing && (Pe.resumeAfterScrub = !0), kt.seek(ji(Number(s.value || 0), rs()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(Y instanceof HTMLVideoElement)) return;
      const m = J(Number(l.value || 0), 0, 1);
      Y.volume = m, Y.muted = m <= 1e-4, ci({
        hasAudio: C.videoTransport.hasAudio,
        muted: Y.muted,
        volume: m
      });
      return;
    }
    const u = i.target.closest("[data-paint-size-slider]");
    if (u) {
      if (u.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(u.value)))), y = mi(p.primaryTool === "paint" ? p.paintTool : p.maskTool);
      p.brushSizes[y] = m, En(), E1();
      return;
    }
    const h = i.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...p.customPaintColor, a: J(Number(h.value) / 100, 0, 1) };
      p.customPaintColor = Hn(m), p.paintColor = Hn(m), En();
    }
  }), T.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Y instanceof HTMLVideoElement)) return;
      Pe.resumeAfterScrub && kt.play(), Pe.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && gs();
  }), T.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && gs();
  }), T.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && gs();
  }), T.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && gs();
  }), T.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !T.contains(s) || Oe.target !== s && (Oe.target = s, Oe.timer && clearTimeout(Oe.timer), Oe.timer = window.setTimeout(() => {
      Oe.target === s && V1(s);
    }, 220));
  }), T.addEventListener("pointerout", (i) => {
    var u, h;
    const s = i.target.closest("[data-tip]");
    !s || Oe.target !== s || (i.relatedTarget instanceof Element ? (h = (u = i.relatedTarget).closest) == null ? void 0 : h.call(u, "[data-tip]") : null) === s || Ei();
  }), T.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || Ei();
  });
  const K1 = (i, s) => {
    var _;
    if (!be) return;
    const l = be.getBoundingClientRect(), u = J((i - l.left) / Math.max(1, l.width), 0, 1), h = 1 - J((s - l.top) / Math.max(1, l.height), 0, 1), m = _u(p.customPaintColor), y = { ...vu(m.h, u, h), a: Number(((_ = p.customPaintColor) == null ? void 0 : _.a) ?? 1) };
    p.customPaintColor = Hn(y), p.paintColor = Hn(y), En();
  }, B1 = (i) => {
    var m;
    if (!ge) return;
    const s = ge.getBoundingClientRect(), l = J((i - s.left) / Math.max(1, s.width), 0, 1), u = _u(p.customPaintColor), h = { ...vu(l, u.s, u.v), a: Number(((m = p.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    p.customPaintColor = Hn(h), p.paintColor = Hn(h), En();
  }, ph = (i, s) => {
    const l = i.pointerId;
    s(i);
    const u = (m) => {
      m.pointerId === l && s(m);
    }, h = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", u), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", u), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  be && (be.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), ph(i, (s) => K1(s.clientX, s.clientY));
  }), ge && (ge.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), ph(i, (s) => B1(s.clientX));
  }), T.addEventListener("click", (i) => {
    var h;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", u = (h = C.confirmDialog) == null ? void 0 : h.resolve;
    C.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, u == null || u(l);
  });
  const mh = () => {
    const i = !!p.fullscreen;
    xo(C.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Ae.fullscreen_close : Ae.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, ys = (i) => {
    const s = !!i;
    p.fullscreen !== s && (p.fullscreen = s, T.classList.toggle("pano-modal-fullscreen", s), s ? (p.fullscreenPrevShowGrid = !!p.showGrid, p.showGrid = !1) : p.fullscreenPrevShowGrid !== null && (p.showGrid = !!p.fullscreenPrevShowGrid, p.fullscreenPrevShowGrid = null), Ec(), mh(), Yt(), de());
  }, gh = () => document.fullscreenElement === _e, W1 = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        ys(!p.fullscreen);
        return;
      }
      gh() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = _e.requestFullscreen) == null ? void 0 : i.call(_e));
    } catch {
      ys(!p.fullscreen);
    }
  }, yh = () => {
    document.fullscreenEnabled && ys(gh());
  };
  document.addEventListener("fullscreenchange", yh), mh();
  const bh = () => {
    const i = !!p.outputPreviewExpanded;
    C.outputPreviewToggle.icon = i ? Ae.fullscreen_close : Ae.fullscreen, C.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", C.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  bh();
  const Oc = e.onConnectionsChange;
  let Fc = null, vh = () => {
  };
  !r && t === "stickers" && (vh = B0(e, (i = "sync") => {
    i === "executed" && (hA(Be, Es), ui(), S && i1()), gd(i);
  }, { editor: !0 }), Fc = function(...s) {
    typeof Oc == "function" && Oc.apply(this, s), ui(), ei(this, "connections");
  }, e.onConnectionsChange = Fc), r || cm.set(String(e.id ?? "0"), () => xd());
  let yo = null;
  const bo = async () => yo || (yo = (async () => {
    var i, s, l, u, h, m, y, _;
    return cm.delete(String(e.id ?? "0")), P1(), r || On(), document.fullscreenElement === _e && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", yh), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === eh && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (h = (u = e.graph) == null ? void 0 : u.setDirtyCanvas) == null || h.call(u, !0, !0), (_ = (y = (m = Er) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || _.call(y, !0, !0), Ei(), Qb(), Y instanceof HTMLVideoElement && Y.pause(), mt.forEach((k) => {
      try {
        k();
      } catch {
      }
    }), Ut.dispose(), br(!1), window.removeEventListener("keydown", _h, !0), window.removeEventListener("keydown", wh, !0), window.removeEventListener("keydown", Sh, !0), window.removeEventListener("keyup", kh, !0), window.removeEventListener("keydown", bs, !0), window.removeEventListener("keyup", bs, !0), window.removeEventListener("blur", Mh), window.removeEventListener("keydown", Nh, !0), window.removeEventListener("dragenter", ch, !0), window.removeEventListener("dragover", uh, !0), window.removeEventListener("dragleave", fh, !0), window.removeEventListener("drop", dh, !0), !r && t === "stickers" && (e.onConnectionsChange === Fc && (e.onConnectionsChange = Oc), vh()), H.unmount(), L.remove(), S1(), yo = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), yo = null, !1)), yo), _h = (i) => {
    var s, l, u, h, m;
    if (i.key === "Escape") {
      if (da()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (p.fullscreen && document.fullscreenElement === _e) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (u = document.exitFullscreen) == null || u.call(document).catch(() => {
        });
        return;
      }
      if (p.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (h = i.stopImmediatePropagation) == null || h.call(i), ys(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), bo();
    }
  }, wh = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), u = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || u === 46) && !(s === "Backspace" || l === "Backspace" || u === 8)) return;
    const y = i.target, _ = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    if (_ === "INPUT" || _ === "TEXTAREA" || y != null && y.isContentEditable) return;
    if (Le.selection) {
      r1(), i.preventDefault(), i.stopPropagation();
      return;
    }
    Nt() && (qd(), i.preventDefault(), i.stopPropagation());
  }, xh = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !S || !C.timeline.visible || C.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !_e.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !Z2.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, Sh = (i) => {
    xh(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || xc());
  }, kh = (i) => {
    xh(i) && (i.preventDefault(), i.stopPropagation());
  }, bs = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    p.marqueeModifier === s && p.altModifier === l || (p.marqueeModifier = s, p.altModifier = l, Hr(), vt(p.pointerPos));
  }, Mh = () => {
    p.marqueeModifier = !1, p.altModifier = !1, Hr(), vt(p.pointerPos);
  }, Nh = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const u = i.target, h = ((u == null ? void 0 : u.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || u != null && u.isContentEditable) return;
    const { canUndo: m, canRedo: y } = Bd();
    i.shiftKey && !y || !i.shiftKey && !m || (_c(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", _h, !0), window.addEventListener("keydown", wh, !0), window.addEventListener("keydown", Sh, !0), window.addEventListener("keyup", kh, !0), window.addEventListener("keydown", bs, !0), window.addEventListener("keyup", bs, !0), window.addEventListener("blur", Mh), window.addEventListener("keydown", Nh, !0), _e.addEventListener("pointerdown", (i) => {
    i.target === _e && bo();
  });
  function _r(i, s, { rollbackState: l = !1 } = {}) {
    let u = "";
    try {
      l && (u = JSON.stringify(v)), s();
    } catch (h) {
      if (u)
        try {
          const m = JSON.parse(u);
          Object.keys(v).forEach((y) => delete v[y]), Object.assign(v, m), r || On();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      C.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, h);
    }
  }
  _r("cutout-focus", Hy), !r && t === "stickers" && _r("external-sticker-sync", () => gd("open"), { rollbackState: !0 }), f1().catch((i) => {
    C.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), _r("history", ot), _r("undo-redo", Ic), _r("paint-ui", En), _r("side-panel", ze), _r("look-at-frame", lc), _r("video-source", ui), _r("canvas-size", jd), _r("cursor", () => vt(p.pointerPos)), de(), Ce.rafId = requestAnimationFrame(Gd);
}
Er.registerExtension(Ik({
  app: Er,
  openEditor: FA,
  attachStickers: KM,
  attachCutout: BM,
  attachPreview: GM,
  restoreOutput: IM,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: rA
}));
