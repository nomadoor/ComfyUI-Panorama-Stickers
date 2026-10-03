import * as Tl from "../../scripts/app.js";
import { app as Ir } from "../../scripts/app.js";
import { api as Jt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function xd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ct = {}, la = [], Xr = () => {
}, x0 = () => !1, Ic = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Oc = (e) => e.startsWith("onUpdate:"), Fn = Object.assign, Sd = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rw = Object.prototype.hasOwnProperty, bt = (e, t) => Rw.call(e, t), Ze = Array.isArray, ca = (e) => Ks(e) === "[object Map]", S0 = (e) => Ks(e) === "[object Set]", Sm = (e) => Ks(e) === "[object Date]", nt = (e) => typeof e == "function", nn = (e) => typeof e == "string", Zr = (e) => typeof e == "symbol", Pt = (e) => e !== null && typeof e == "object", k0 = (e) => (Pt(e) || nt(e)) && nt(e.then) && nt(e.catch), M0 = Object.prototype.toString, Ks = (e) => M0.call(e), Vw = (e) => Ks(e).slice(8, -1), N0 = (e) => Ks(e) === "[object Object]", kd = (e) => nn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vs = /* @__PURE__ */ xd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ec = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, $w = /-\w/g, Hn = Ec(
  (e) => e.replace($w, (t) => t.slice(1).toUpperCase())
), zw = /\B([A-Z])/g, No = Ec(
  (e) => e.replace(zw, "-$1").toLowerCase()
), Fc = Ec((e) => e.charAt(0).toUpperCase() + e.slice(1)), $u = Ec(
  (e) => e ? `on${Fc(e)}` : ""
), Ur = (e, t) => !Object.is(e, t), Dl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, P0 = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Md = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let km;
const Tc = () => km || (km = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mt(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = nn(r) ? Kw(r) : Mt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (nn(e) || Pt(e))
    return e;
}
const jw = /;(?![^(]*\))/g, Hw = /:([^]+)/, Gw = /\/\*[^]*?\*\//g;
function Kw(e) {
  const t = {};
  return e.replace(Gw, "").split(jw).forEach((n) => {
    if (n) {
      const r = n.split(Hw);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ut(e) {
  let t = "";
  if (nn(e))
    t = e;
  else if (Ze(e))
    for (let n = 0; n < e.length; n++) {
      const r = ut(e[n]);
      r && (t += r + " ");
    }
  else if (Pt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ww = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bw = /* @__PURE__ */ xd(Ww);
function A0(e) {
  return !!e || e === "";
}
function Uw(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Nd(e[r], t[r]);
  return n;
}
function Nd(e, t) {
  if (e === t) return !0;
  let n = Sm(e), r = Sm(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Zr(e), r = Zr(t), n || r)
    return e === t;
  if (n = Ze(e), r = Ze(t), n || r)
    return n && r ? Uw(e, t) : !1;
  if (n = Pt(e), r = Pt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !Nd(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const C0 = (e) => !!(e && e.__v_isRef === !0), tt = (e) => nn(e) ? e : e == null ? "" : Ze(e) || Pt(e) && (e.toString === M0 || !nt(e.toString)) ? C0(e) ? tt(e.value) : JSON.stringify(e, I0, 2) : String(e), I0 = (e, t) => C0(t) ? I0(e, t.value) : ca(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[zu(r, a) + " =>"] = o, n),
    {}
  )
} : S0(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => zu(n))
} : Zr(t) ? zu(t) : Pt(t) && !Ze(t) && !N0(t) ? String(t) : t, zu = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Zr(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Yn;
class Yw {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Yn, !t && Yn && (this.index = (Yn.scopes || (Yn.scopes = [])).push(
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
      const n = Yn;
      try {
        return Yn = this, t();
      } finally {
        Yn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Yn, Yn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Yn = this.prevScope, this.prevScope = void 0);
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
function Xw() {
  return Yn;
}
let Ot;
const ju = /* @__PURE__ */ new WeakSet();
class O0 {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Yn && Yn.active && Yn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ju.has(this) && (ju.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || F0(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Mm(this), T0(this);
    const t = Ot, n = Or;
    Ot = this, Or = !0;
    try {
      return this.fn();
    } finally {
      D0(this), Ot = t, Or = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Cd(t);
      this.deps = this.depsTail = void 0, Mm(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ju.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    If(this) && this.run();
  }
  get dirty() {
    return If(this);
  }
}
let E0 = 0, _s, ws;
function F0(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ws, ws = e;
    return;
  }
  e.next = _s, _s = e;
}
function Pd() {
  E0++;
}
function Ad() {
  if (--E0 > 0)
    return;
  if (ws) {
    let t = ws;
    for (ws = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; _s; ) {
    let t = _s;
    for (_s = void 0; t; ) {
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
function T0(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function D0(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Cd(r), qw(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function If(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (L0(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function L0(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Is) || (e.globalVersion = Is, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !If(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Ot, r = Or;
  Ot = e, Or = !0;
  try {
    T0(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ur(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Ot = n, Or = r, D0(e), e.flags &= -3;
  }
}
function Cd(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Cd(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function qw(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Or = !0;
const R0 = [];
function xi() {
  R0.push(Or), Or = !1;
}
function Si() {
  const e = R0.pop();
  Or = e === void 0 ? !0 : e;
}
function Mm(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Ot;
    Ot = void 0;
    try {
      t();
    } finally {
      Ot = n;
    }
  }
}
let Is = 0;
class Jw {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Id {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ot || !Or || Ot === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ot)
      n = this.activeLink = new Jw(Ot, this), Ot.deps ? (n.prevDep = Ot.depsTail, Ot.depsTail.nextDep = n, Ot.depsTail = n) : Ot.deps = Ot.depsTail = n, V0(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ot.depsTail, n.nextDep = void 0, Ot.depsTail.nextDep = n, Ot.depsTail = n, Ot.deps === n && (Ot.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Is++, this.notify(t);
  }
  notify(t) {
    Pd();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ad();
    }
  }
}
function V0(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        V0(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Of = /* @__PURE__ */ new WeakMap(), go = /* @__PURE__ */ Symbol(
  ""
), Ef = /* @__PURE__ */ Symbol(
  ""
), Os = /* @__PURE__ */ Symbol(
  ""
);
function An(e, t, n) {
  if (Or && Ot) {
    let r = Of.get(e);
    r || Of.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Id()), o.map = r, o.key = n), o.track();
  }
}
function yi(e, t, n, r, o, a) {
  const c = Of.get(e);
  if (!c) {
    Is++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Pd(), t === "clear")
    c.forEach(u);
  else {
    const d = Ze(e), b = d && kd(n);
    if (d && n === "length") {
      const y = Number(r);
      c.forEach((v, x) => {
        (x === "length" || x === Os || !Zr(x) && x >= y) && u(v);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), b && u(c.get(Os)), t) {
        case "add":
          d ? b && u(c.get("length")) : (u(c.get(go)), ca(e) && u(c.get(Ef)));
          break;
        case "delete":
          d || (u(c.get(go)), ca(e) && u(c.get(Ef)));
          break;
        case "set":
          ca(e) && u(c.get(go));
          break;
      }
  }
  Ad();
}
function Xo(e) {
  const t = /* @__PURE__ */ yt(e);
  return t === e ? t : (An(t, "iterate", Os), /* @__PURE__ */ yr(e) ? t : t.map(Er));
}
function Dc(e) {
  return An(e = /* @__PURE__ */ yt(e), "iterate", Os), e;
}
function Wr(e, t) {
  return /* @__PURE__ */ ki(e) ? _a(/* @__PURE__ */ yo(e) ? Er(t) : t) : Er(t);
}
const Zw = {
  __proto__: null,
  [Symbol.iterator]() {
    return Hu(this, Symbol.iterator, (e) => Wr(this, e));
  },
  concat(...e) {
    return Xo(this).concat(
      ...e.map((t) => Ze(t) ? Xo(t) : t)
    );
  },
  entries() {
    return Hu(this, "entries", (e) => (e[1] = Wr(this, e[1]), e));
  },
  every(e, t) {
    return ci(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ci(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Wr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return ci(
      this,
      "find",
      e,
      t,
      (n) => Wr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ci(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ci(
      this,
      "findLast",
      e,
      t,
      (n) => Wr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ci(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ci(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Gu(this, "includes", e);
  },
  indexOf(...e) {
    return Gu(this, "indexOf", e);
  },
  join(e) {
    return Xo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Gu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ci(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ts(this, "pop");
  },
  push(...e) {
    return ts(this, "push", e);
  },
  reduce(e, ...t) {
    return Nm(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Nm(this, "reduceRight", e, t);
  },
  shift() {
    return ts(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ci(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ts(this, "splice", e);
  },
  toReversed() {
    return Xo(this).toReversed();
  },
  toSorted(e) {
    return Xo(this).toSorted(e);
  },
  toSpliced(...e) {
    return Xo(this).toSpliced(...e);
  },
  unshift(...e) {
    return ts(this, "unshift", e);
  },
  values() {
    return Hu(this, "values", (e) => Wr(this, e));
  }
};
function Hu(e, t, n) {
  const r = Dc(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ yr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const Qw = Array.prototype;
function ci(e, t, n, r, o, a) {
  const c = Dc(e), u = c !== e && !/* @__PURE__ */ yr(e), d = c[t];
  if (d !== Qw[t]) {
    const v = d.apply(e, a);
    return u ? Er(v) : v;
  }
  let b = n;
  c !== e && (u ? b = function(v, x) {
    return n.call(this, Wr(e, v), x, e);
  } : n.length > 2 && (b = function(v, x) {
    return n.call(this, v, x, e);
  }));
  const y = d.call(c, b, r);
  return u && o ? o(y) : y;
}
function Nm(e, t, n, r) {
  const o = Dc(e), a = o !== e && !/* @__PURE__ */ yr(e);
  let c = n, u = !1;
  o !== e && (a ? (u = r.length === 0, c = function(b, y, v) {
    return u && (u = !1, b = Wr(e, b)), n.call(this, b, Wr(e, y), v, e);
  }) : n.length > 3 && (c = function(b, y, v) {
    return n.call(this, b, y, v, e);
  }));
  const d = o[t](c, ...r);
  return u ? Wr(e, d) : d;
}
function Gu(e, t, n) {
  const r = /* @__PURE__ */ yt(e);
  An(r, "iterate", Os);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Fd(n[0]) ? (n[0] = /* @__PURE__ */ yt(n[0]), r[t](...n)) : o;
}
function ts(e, t, n = []) {
  xi(), Pd();
  const r = (/* @__PURE__ */ yt(e))[t].apply(e, n);
  return Ad(), Si(), r;
}
const ex = /* @__PURE__ */ xd("__proto__,__v_isRef,__isVue"), $0 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zr)
);
function tx(e) {
  Zr(e) || (e = String(e));
  const t = /* @__PURE__ */ yt(this);
  return An(t, "has", e), t.hasOwnProperty(e);
}
class z0 {
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
      return r === (o ? a ? fx : K0 : a ? G0 : H0).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Ze(t);
    if (!o) {
      let d;
      if (c && (d = Zw[n]))
        return d;
      if (n === "hasOwnProperty")
        return tx;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ En(t) ? t : r
    );
    if ((Zr(n) ? $0.has(n) : ex(n)) || (o || An(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ En(u)) {
      const d = c && kd(n) ? u : u.value;
      return o && Pt(d) ? /* @__PURE__ */ Tf(d) : d;
    }
    return Pt(u) ? o ? /* @__PURE__ */ Tf(u) : /* @__PURE__ */ Na(u) : u;
  }
}
class j0 extends z0 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = Ze(t) && kd(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ ki(a);
      if (!/* @__PURE__ */ yr(r) && !/* @__PURE__ */ ki(r) && (a = /* @__PURE__ */ yt(a), r = /* @__PURE__ */ yt(r)), !c && /* @__PURE__ */ En(a) && !/* @__PURE__ */ En(r))
        return b || (a.value = r), !0;
    }
    const u = c ? Number(n) < t.length : bt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ En(t) ? t : o
    );
    return t === /* @__PURE__ */ yt(o) && (u ? Ur(r, a) && yi(t, "set", n, r) : yi(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = bt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && yi(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Zr(n) || !$0.has(n)) && An(t, "has", n), r;
  }
  ownKeys(t) {
    return An(
      t,
      "iterate",
      Ze(t) ? "length" : go
    ), Reflect.ownKeys(t);
  }
}
class nx extends z0 {
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
const rx = /* @__PURE__ */ new j0(), ix = /* @__PURE__ */ new nx(), ox = /* @__PURE__ */ new j0(!0);
const Ff = (e) => e, yl = (e) => Reflect.getPrototypeOf(e);
function ax(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ yt(o), c = ca(a), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, b = o[e](...r), y = n ? Ff : t ? _a : Er;
    return !t && An(
      a,
      "iterate",
      d ? Ef : go
    ), Fn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: v, done: x } = b.next();
          return x ? { value: v, done: x } : {
            value: u ? [y(v[0]), y(v[1])] : y(v),
            done: x
          };
        }
      }
    );
  };
}
function bl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function sx(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ yt(a), u = /* @__PURE__ */ yt(o);
      e || (Ur(o, u) && An(c, "get", o), An(c, "get", u));
      const { has: d } = yl(c), b = t ? Ff : e ? _a : Er;
      if (d.call(c, o))
        return b(a.get(o));
      if (d.call(c, u))
        return b(a.get(u));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && An(/* @__PURE__ */ yt(o), "iterate", go), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ yt(a), u = /* @__PURE__ */ yt(o);
      return e || (Ur(o, u) && An(c, "has", o), An(c, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const c = this, u = c.__v_raw, d = /* @__PURE__ */ yt(u), b = t ? Ff : e ? _a : Er;
      return !e && An(d, "iterate", go), u.forEach((y, v) => o.call(a, b(y), b(v), c));
    }
  };
  return Fn(
    n,
    e ? {
      add: bl("add"),
      set: bl("set"),
      delete: bl("delete"),
      clear: bl("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ yt(this), c = yl(a), u = /* @__PURE__ */ yt(o), d = !t && !/* @__PURE__ */ yr(o) && !/* @__PURE__ */ ki(o) ? u : o;
        return c.has.call(a, d) || Ur(o, d) && c.has.call(a, o) || Ur(u, d) && c.has.call(a, u) || (a.add(d), yi(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ yr(a) && !/* @__PURE__ */ ki(a) && (a = /* @__PURE__ */ yt(a));
        const c = /* @__PURE__ */ yt(this), { has: u, get: d } = yl(c);
        let b = u.call(c, o);
        b || (o = /* @__PURE__ */ yt(o), b = u.call(c, o));
        const y = d.call(c, o);
        return c.set(o, a), b ? Ur(a, y) && yi(c, "set", o, a) : yi(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ yt(this), { has: c, get: u } = yl(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ yt(o), d = c.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && yi(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ yt(this), a = o.size !== 0, c = o.clear();
        return a && yi(
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
    n[o] = ax(o, e, t);
  }), n;
}
function Od(e, t) {
  const n = sx(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    bt(n, o) && o in r ? n : r,
    o,
    a
  );
}
const lx = {
  get: /* @__PURE__ */ Od(!1, !1)
}, cx = {
  get: /* @__PURE__ */ Od(!1, !0)
}, ux = {
  get: /* @__PURE__ */ Od(!0, !1)
};
const H0 = /* @__PURE__ */ new WeakMap(), G0 = /* @__PURE__ */ new WeakMap(), K0 = /* @__PURE__ */ new WeakMap(), fx = /* @__PURE__ */ new WeakMap();
function dx(e) {
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
function px(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : dx(Vw(e));
}
// @__NO_SIDE_EFFECTS__
function Na(e) {
  return /* @__PURE__ */ ki(e) ? e : Ed(
    e,
    !1,
    rx,
    lx,
    H0
  );
}
// @__NO_SIDE_EFFECTS__
function hx(e) {
  return Ed(
    e,
    !1,
    ox,
    cx,
    G0
  );
}
// @__NO_SIDE_EFFECTS__
function Tf(e) {
  return Ed(
    e,
    !0,
    ix,
    ux,
    K0
  );
}
function Ed(e, t, n, r, o) {
  if (!Pt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = px(e);
  if (a === 0)
    return e;
  const c = o.get(e);
  if (c)
    return c;
  const u = new Proxy(
    e,
    a === 2 ? r : n
  );
  return o.set(e, u), u;
}
// @__NO_SIDE_EFFECTS__
function yo(e) {
  return /* @__PURE__ */ ki(e) ? /* @__PURE__ */ yo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function ki(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Fd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ yt(t) : e;
}
function mx(e) {
  return !bt(e, "__v_skip") && Object.isExtensible(e) && P0(e, "__v_skip", !0), e;
}
const Er = (e) => Pt(e) ? /* @__PURE__ */ Na(e) : e, _a = (e) => Pt(e) ? /* @__PURE__ */ Tf(e) : e;
// @__NO_SIDE_EFFECTS__
function En(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  return gx(e, !1);
}
function gx(e, t) {
  return /* @__PURE__ */ En(e) ? e : new yx(e, t);
}
class yx {
  constructor(t, n) {
    this.dep = new Id(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ yt(t), this._value = n ? t : Er(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ yr(t) || /* @__PURE__ */ ki(t);
    t = r ? t : /* @__PURE__ */ yt(t), Ur(t, n) && (this._rawValue = t, this._value = r ? t : Er(t), this.dep.trigger());
  }
}
function ot(e) {
  return /* @__PURE__ */ En(e) ? e.value : e;
}
const bx = {
  get: (e, t, n) => t === "__v_raw" ? e : ot(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ En(o) && !/* @__PURE__ */ En(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function W0(e) {
  return /* @__PURE__ */ yo(e) ? e : new Proxy(e, bx);
}
class vx {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Id(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Is - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Ot !== this)
      return F0(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return L0(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function _x(e, t, n = !1) {
  let r, o;
  return nt(e) ? r = e : (r = e.get, o = e.set), new vx(r, o, n);
}
const vl = {}, ec = /* @__PURE__ */ new WeakMap();
let co;
function wx(e, t = !1, n = co) {
  if (n) {
    let r = ec.get(n);
    r || ec.set(n, r = []), r.push(e);
  }
}
function xx(e, t, n = Ct) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: u, call: d } = n, b = (T) => o ? T : /* @__PURE__ */ yr(T) || o === !1 || o === 0 ? bi(T, 1) : bi(T);
  let y, v, x, N, k = !1, P = !1;
  if (/* @__PURE__ */ En(e) ? (v = () => e.value, k = /* @__PURE__ */ yr(e)) : /* @__PURE__ */ yo(e) ? (v = () => b(e), k = !0) : Ze(e) ? (P = !0, k = e.some((T) => /* @__PURE__ */ yo(T) || /* @__PURE__ */ yr(T)), v = () => e.map((T) => {
    if (/* @__PURE__ */ En(T))
      return T.value;
    if (/* @__PURE__ */ yo(T))
      return b(T);
    if (nt(T))
      return d ? d(T, 2) : T();
  })) : nt(e) ? t ? v = d ? () => d(e, 2) : e : v = () => {
    if (x) {
      xi();
      try {
        x();
      } finally {
        Si();
      }
    }
    const T = co;
    co = y;
    try {
      return d ? d(e, 3, [N]) : e(N);
    } finally {
      co = T;
    }
  } : v = Xr, t && o) {
    const T = v, _ = o === !0 ? 1 / 0 : o;
    v = () => bi(T(), _);
  }
  const E = Xw(), R = () => {
    y.stop(), E && E.active && Sd(E.effects, y);
  };
  if (a && t) {
    const T = t;
    t = (..._) => {
      T(..._), R();
    };
  }
  let W = P ? new Array(e.length).fill(vl) : vl;
  const V = (T) => {
    if (!(!(y.flags & 1) || !y.dirty && !T))
      if (t) {
        const _ = y.run();
        if (o || k || (P ? _.some((z, B) => Ur(z, W[B])) : Ur(_, W))) {
          x && x();
          const z = co;
          co = y;
          try {
            const B = [
              _,
              // pass undefined as the old value when it's changed for the first time
              W === vl ? void 0 : P && W[0] === vl ? [] : W,
              N
            ];
            W = _, d ? d(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            co = z;
          }
        }
      } else
        y.run();
  };
  return u && u(V), y = new O0(v), y.scheduler = c ? () => c(V, !1) : V, N = (T) => wx(T, !1, y), x = y.onStop = () => {
    const T = ec.get(y);
    if (T) {
      if (d)
        d(T, 4);
      else
        for (const _ of T) _();
      ec.delete(y);
    }
  }, t ? r ? V(!0) : W = y.run() : c ? c(V.bind(null, !0), !0) : y.run(), R.pause = y.pause.bind(y), R.resume = y.resume.bind(y), R.stop = R, R;
}
function bi(e, t = 1 / 0, n) {
  if (t <= 0 || !Pt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ En(e))
    bi(e.value, t, n);
  else if (Ze(e))
    for (let r = 0; r < e.length; r++)
      bi(e[r], t, n);
  else if (S0(e) || ca(e))
    e.forEach((r) => {
      bi(r, t, n);
    });
  else if (N0(e)) {
    for (const r in e)
      bi(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && bi(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ws(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Lc(o, t, n);
  }
}
function Qr(e, t, n, r) {
  if (nt(e)) {
    const o = Ws(e, t, n, r);
    return o && k0(o) && o.catch((a) => {
      Lc(a, t, n);
    }), o;
  }
  if (Ze(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Qr(e[a], t, n, r));
    return o;
  }
}
function Lc(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || Ct;
  if (t) {
    let u = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const y = u.ec;
      if (y) {
        for (let v = 0; v < y.length; v++)
          if (y[v](e, d, b) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      xi(), Ws(a, null, 10, [
        e,
        d,
        b
      ]), Si();
      return;
    }
  }
  Sx(e, n, o, r, c);
}
function Sx(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const jn = [];
let Gr = -1;
const ua = [];
let $i = null, ta = 0;
const B0 = /* @__PURE__ */ Promise.resolve();
let tc = null;
function Rc(e) {
  const t = tc || B0;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kx(e) {
  let t = Gr + 1, n = jn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = jn[r], a = Es(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Td(e) {
  if (!(e.flags & 1)) {
    const t = Es(e), n = jn[jn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Es(n) ? jn.push(e) : jn.splice(kx(t), 0, e), e.flags |= 1, U0();
  }
}
function U0() {
  tc || (tc = B0.then(X0));
}
function Mx(e) {
  Ze(e) ? ua.push(...e) : $i && e.id === -1 ? $i.splice(ta + 1, 0, e) : e.flags & 1 || (ua.push(e), e.flags |= 1), U0();
}
function Pm(e, t, n = Gr + 1) {
  for (; n < jn.length; n++) {
    const r = jn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      jn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Y0(e) {
  if (ua.length) {
    const t = [...new Set(ua)].sort(
      (n, r) => Es(n) - Es(r)
    );
    if (ua.length = 0, $i) {
      $i.push(...t);
      return;
    }
    for ($i = t, ta = 0; ta < $i.length; ta++) {
      const n = $i[ta];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    $i = null, ta = 0;
  }
}
const Es = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function X0(e) {
  try {
    for (Gr = 0; Gr < jn.length; Gr++) {
      const t = jn[Gr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ws(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Gr < jn.length; Gr++) {
      const t = jn[Gr];
      t && (t.flags &= -2);
    }
    Gr = -1, jn.length = 0, Y0(), tc = null, (jn.length || ua.length) && X0();
  }
}
let nr = null, q0 = null;
function nc(e) {
  const t = nr;
  return nr = e, q0 = e && e.type.__scopeId || null, t;
}
function J0(e, t = nr, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && $m(-1);
    const a = nc(t);
    let c;
    try {
      c = e(...o);
    } finally {
      nc(a), r._d && $m(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function wi(e, t) {
  if (nr === null)
    return e;
  const n = Hc(nr), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, u, d = Ct] = t[o];
    a && (nt(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && bi(c), r.push({
      dir: a,
      instance: n,
      value: c,
      oldValue: void 0,
      arg: u,
      modifiers: d
    }));
  }
  return e;
}
function no(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const u = o[c];
    a && (u.oldValue = a[c].value);
    let d = u.dir[r];
    d && (xi(), Qr(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Si());
  }
}
function Nx(e, t) {
  if (In) {
    let n = In.provides;
    const r = In.parent && In.parent.provides;
    r === n && (n = In.provides = Object.create(r)), n[e] = t;
  }
}
function Ll(e, t, n = !1) {
  const r = kS();
  if (r || fa) {
    let o = fa ? fa._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && nt(t) ? t.call(r && r.proxy) : t;
  }
}
const Px = /* @__PURE__ */ Symbol.for("v-scx"), Ax = () => Ll(Px);
function bo(e, t, n) {
  return Z0(e, t, n);
}
function Z0(e, t, n = Ct) {
  const { immediate: r, deep: o, flush: a, once: c } = n, u = Fn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (Ts) {
    if (a === "sync") {
      const N = Ax();
      b = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!d) {
      const N = () => {
      };
      return N.stop = Xr, N.resume = Xr, N.pause = Xr, N;
    }
  }
  const y = In;
  u.call = (N, k, P) => Qr(N, y, k, P);
  let v = !1;
  a === "post" ? u.scheduler = (N) => {
    Un(N, y && y.suspense);
  } : a !== "sync" && (v = !0, u.scheduler = (N, k) => {
    k ? N() : Td(N);
  }), u.augmentJob = (N) => {
    t && (N.flags |= 4), v && (N.flags |= 2, y && (N.id = y.uid, N.i = y));
  };
  const x = xx(e, t, u);
  return Ts && (b ? b.push(x) : d && x()), x;
}
function Cx(e, t, n) {
  const r = this.proxy, o = nn(e) ? e.includes(".") ? Q0(r, e) : () => r[e] : e.bind(r, r);
  let a;
  nt(t) ? a = t : (a = t.handler, n = t);
  const c = Us(this), u = Z0(o, a.bind(r), n);
  return c(), u;
}
function Q0(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Ix = /* @__PURE__ */ Symbol("_vte"), Ox = (e) => e.__isTeleport, Ex = /* @__PURE__ */ Symbol("_leaveCb");
function Dd(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Dd(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ey(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Am(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const rc = /* @__PURE__ */ new WeakMap();
function xs(e, t, n, r, o = !1) {
  if (Ze(e)) {
    e.forEach(
      (P, E) => xs(
        P,
        t && (Ze(t) ? t[E] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Ss(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && xs(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Hc(r.component) : r.el, c = o ? null : a, { i: u, r: d } = e, b = t && t.r, y = u.refs === Ct ? u.refs = {} : u.refs, v = u.setupState, x = /* @__PURE__ */ yt(v), N = v === Ct ? x0 : (P) => Am(y, P) ? !1 : bt(x, P), k = (P, E) => !(E && Am(y, E));
  if (b != null && b !== d) {
    if (Cm(t), nn(b))
      y[b] = null, N(b) && (v[b] = null);
    else if (/* @__PURE__ */ En(b)) {
      const P = t;
      k(b, P.k) && (b.value = null), P.k && (y[P.k] = null);
    }
  }
  if (nt(d))
    Ws(d, u, 12, [c, y]);
  else {
    const P = nn(d), E = /* @__PURE__ */ En(d);
    if (P || E) {
      const R = () => {
        if (e.f) {
          const W = P ? N(d) ? v[d] : y[d] : k() || !e.k ? d.value : y[e.k];
          if (o)
            Ze(W) && Sd(W, a);
          else if (Ze(W))
            W.includes(a) || W.push(a);
          else if (P)
            y[d] = [a], N(d) && (v[d] = y[d]);
          else {
            const V = [a];
            k(d, e.k) && (d.value = V), e.k && (y[e.k] = V);
          }
        } else P ? (y[d] = c, N(d) && (v[d] = c)) : E && (k(d, e.k) && (d.value = c), e.k && (y[e.k] = c));
      };
      if (c) {
        const W = () => {
          R(), rc.delete(e);
        };
        W.id = -1, rc.set(e, W), Un(W, n);
      } else
        Cm(e), R();
    }
  }
}
function Cm(e) {
  const t = rc.get(e);
  t && (t.flags |= 8, rc.delete(e));
}
Tc().requestIdleCallback;
Tc().cancelIdleCallback;
const Ss = (e) => !!e.type.__asyncLoader, ty = (e) => e.type.__isKeepAlive;
function Fx(e, t) {
  ny(e, "a", t);
}
function Tx(e, t) {
  ny(e, "da", t);
}
function ny(e, t, n = In) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Vc(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ty(o.parent.vnode) && Dx(r, t, n, o), o = o.parent;
  }
}
function Dx(e, t, n, r) {
  const o = Vc(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ry(() => {
    Sd(r[t], o);
  }, n);
}
function Vc(e, t, n = In, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      xi();
      const u = Us(n), d = Qr(t, n, e, c);
      return u(), Si(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const Ni = (e) => (t, n = In) => {
  (!Ts || e === "sp") && Vc(e, (...r) => t(...r), n);
}, Lx = Ni("bm"), $c = Ni("m"), Rx = Ni(
  "bu"
), Vx = Ni("u"), Bs = Ni(
  "bum"
), ry = Ni("um"), $x = Ni(
  "sp"
), zx = Ni("rtg"), jx = Ni("rtc");
function Hx(e, t = In) {
  Vc("ec", e, t);
}
const Gx = "components", iy = /* @__PURE__ */ Symbol.for("v-ndc");
function Kx(e) {
  return nn(e) ? Wx(Gx, e, !1) || e : e || iy;
}
function Wx(e, t, n = !0, r = !1) {
  const o = nr || In;
  if (o) {
    const a = o.type;
    {
      const u = CS(
        a,
        !1
      );
      if (u && (u === t || u === Hn(t) || u === Fc(Hn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Im(o[e] || a[e], t) || // global registration
      Im(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function Im(e, t) {
  return e && (e[t] || e[Hn(t)] || e[Fc(Hn(t))]);
}
function _t(e, t, n, r) {
  let o;
  const a = n, c = Ze(e);
  if (c || nn(e)) {
    const u = c && /* @__PURE__ */ yo(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ yr(e), b = /* @__PURE__ */ ki(e), e = Dc(e)), o = new Array(e.length);
    for (let y = 0, v = e.length; y < v; y++)
      o[y] = t(
        d ? b ? _a(Er(e[y])) : Er(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let u = 0; u < e; u++)
      o[u] = t(u + 1, u, void 0, a);
  } else if (Pt(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (u, d) => t(u, d, void 0, a)
      );
    else {
      const u = Object.keys(e);
      o = new Array(u.length);
      for (let d = 0, b = u.length; d < b; d++) {
        const y = u[d];
        o[d] = t(e[y], y, d, a);
      }
    }
  else
    o = [];
  return o;
}
const Df = (e) => e ? My(e) ? Hc(e) : Df(e.parent) : null, ks = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Fn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Df(e.parent),
    $root: (e) => Df(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ay(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Td(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rc.bind(e.proxy)),
    $watch: (e) => Cx.bind(e)
  })
), Ku = (e, t) => e !== Ct && !e.__isScriptSetup && bt(e, t), Bx = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: c, type: u, appContext: d } = e;
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
        if (Ku(r, t))
          return c[t] = 1, r[t];
        if (o !== Ct && bt(o, t))
          return c[t] = 2, o[t];
        if (bt(a, t))
          return c[t] = 3, a[t];
        if (n !== Ct && bt(n, t))
          return c[t] = 4, n[t];
        Lf && (c[t] = 0);
      }
    }
    const b = ks[t];
    let y, v;
    if (b)
      return t === "$attrs" && An(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== Ct && bt(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      v = d.config.globalProperties, bt(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Ku(o, t) ? (o[t] = n, !0) : r !== Ct && bt(r, t) ? (r[t] = n, !0) : bt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== Ct && u[0] !== "$" && bt(e, u) || Ku(t, u) || bt(a, u) || bt(r, u) || bt(ks, u) || bt(o.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : bt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Om(e) {
  return Ze(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Lf = !0;
function Ux(e) {
  const t = ay(e), n = e.proxy, r = e.ctx;
  Lf = !1, t.beforeCreate && Em(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: c,
    watch: u,
    provide: d,
    inject: b,
    // lifecycle
    created: y,
    beforeMount: v,
    mounted: x,
    beforeUpdate: N,
    updated: k,
    activated: P,
    deactivated: E,
    beforeDestroy: R,
    beforeUnmount: W,
    destroyed: V,
    unmounted: T,
    render: _,
    renderTracked: z,
    renderTriggered: B,
    errorCaptured: oe,
    serverPrefetch: _e,
    // public API
    expose: A,
    inheritAttrs: L,
    // assets
    components: se,
    directives: Pe,
    filters: de
  } = t;
  if (b && Yx(b, r, null), c)
    for (const D in c) {
      const O = c[D];
      nt(O) && (r[D] = O.bind(n));
    }
  if (o) {
    const D = o.call(n, n);
    Pt(D) && (e.data = /* @__PURE__ */ Na(D));
  }
  if (Lf = !0, a)
    for (const D in a) {
      const O = a[D], Q = nt(O) ? O.bind(n, n) : nt(O.get) ? O.get.bind(n, n) : Xr, te = !nt(O) && nt(O.set) ? O.set.bind(n) : Xr, Ee = pt({
        get: Q,
        set: te
      });
      Object.defineProperty(r, D, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (Fe) => Ee.value = Fe
      });
    }
  if (u)
    for (const D in u)
      oy(u[D], r, n, D);
  if (d) {
    const D = nt(d) ? d.call(n) : d;
    Reflect.ownKeys(D).forEach((O) => {
      Nx(O, D[O]);
    });
  }
  y && Em(y, e, "c");
  function q(D, O) {
    Ze(O) ? O.forEach((Q) => D(Q.bind(n))) : O && D(O.bind(n));
  }
  if (q(Lx, v), q($c, x), q(Rx, N), q(Vx, k), q(Fx, P), q(Tx, E), q(Hx, oe), q(jx, z), q(zx, B), q(Bs, W), q(ry, T), q($x, _e), Ze(A))
    if (A.length) {
      const D = e.exposed || (e.exposed = {});
      A.forEach((O) => {
        Object.defineProperty(D, O, {
          get: () => n[O],
          set: (Q) => n[O] = Q,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  _ && e.render === Xr && (e.render = _), L != null && (e.inheritAttrs = L), se && (e.components = se), Pe && (e.directives = Pe), _e && ey(e);
}
function Yx(e, t, n = Xr) {
  Ze(e) && (e = Rf(e));
  for (const r in e) {
    const o = e[r];
    let a;
    Pt(o) ? "default" in o ? a = Ll(
      o.from || r,
      o.default,
      !0
    ) : a = Ll(o.from || r) : a = Ll(o), /* @__PURE__ */ En(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function Em(e, t, n) {
  Qr(
    Ze(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function oy(e, t, n, r) {
  let o = r.includes(".") ? Q0(n, r) : () => n[r];
  if (nn(e)) {
    const a = t[e];
    nt(a) && bo(o, a);
  } else if (nt(e))
    bo(o, e.bind(n));
  else if (Pt(e))
    if (Ze(e))
      e.forEach((a) => oy(a, t, n, r));
    else {
      const a = nt(e.handler) ? e.handler.bind(n) : t[e.handler];
      nt(a) && bo(o, a, e);
    }
}
function ay(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => ic(d, b, c, !0)
  ), ic(d, t, c)), Pt(t) && a.set(t, d), d;
}
function ic(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && ic(e, a, n, !0), o && o.forEach(
    (c) => ic(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const u = Xx[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Xx = {
  data: Fm,
  props: Tm,
  emits: Tm,
  // objects
  methods: us,
  computed: us,
  // lifecycle
  beforeCreate: zn,
  created: zn,
  beforeMount: zn,
  mounted: zn,
  beforeUpdate: zn,
  updated: zn,
  beforeDestroy: zn,
  beforeUnmount: zn,
  destroyed: zn,
  unmounted: zn,
  activated: zn,
  deactivated: zn,
  errorCaptured: zn,
  serverPrefetch: zn,
  // assets
  components: us,
  directives: us,
  // watch
  watch: Jx,
  // provide / inject
  provide: Fm,
  inject: qx
};
function Fm(e, t) {
  return t ? e ? function() {
    return Fn(
      nt(e) ? e.call(this, this) : e,
      nt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function qx(e, t) {
  return us(Rf(e), Rf(t));
}
function Rf(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function zn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function us(e, t) {
  return e ? Fn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Tm(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fn(
    /* @__PURE__ */ Object.create(null),
    Om(e),
    Om(t ?? {})
  ) : t;
}
function Jx(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Fn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = zn(e[r], t[r]);
  return n;
}
function sy() {
  return {
    app: null,
    config: {
      isNativeTag: x0,
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
let Zx = 0;
function Qx(e, t) {
  return function(r, o = null) {
    nt(r) || (r = Fn({}, r)), o != null && !Pt(o) && (o = null);
    const a = sy(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: Zx++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: OS,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...v) {
        return c.has(y) || (y && nt(y.install) ? (c.add(y), y.install(b, ...v)) : nt(y) && (c.add(y), y(b, ...v))), b;
      },
      mixin(y) {
        return a.mixins.includes(y) || a.mixins.push(y), b;
      },
      component(y, v) {
        return v ? (a.components[y] = v, b) : a.components[y];
      },
      directive(y, v) {
        return v ? (a.directives[y] = v, b) : a.directives[y];
      },
      mount(y, v, x) {
        if (!d) {
          const N = b._ceVNode || Re(r, o);
          return N.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(N, y, x), d = !0, b._container = y, y.__vue_app__ = b, Hc(N.component);
        }
      },
      onUnmount(y) {
        u.push(y);
      },
      unmount() {
        d && (Qr(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(y, v) {
        return a.provides[y] = v, b;
      },
      runWithContext(y) {
        const v = fa;
        fa = b;
        try {
          return y();
        } finally {
          fa = v;
        }
      }
    };
    return b;
  };
}
let fa = null;
const eS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Hn(t)}Modifiers`] || e[`${No(t)}Modifiers`];
function tS(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ct;
  let o = n;
  const a = t.startsWith("update:"), c = a && eS(r, t.slice(7));
  c && (c.trim && (o = n.map((y) => nn(y) ? y.trim() : y)), c.number && (o = n.map(Md)));
  let u, d = r[u = $u(t)] || // also try camelCase event handler (#2249)
  r[u = $u(Hn(t))];
  !d && a && (d = r[u = $u(No(t))]), d && Qr(
    d,
    e,
    6,
    o
  );
  const b = r[u + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[u])
      return;
    e.emitted[u] = !0, Qr(
      b,
      e,
      6,
      o
    );
  }
}
const nS = /* @__PURE__ */ new WeakMap();
function ly(e, t, n = !1) {
  const r = n ? nS : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, u = !1;
  if (!nt(e)) {
    const d = (b) => {
      const y = ly(b, t, !0);
      y && (u = !0, Fn(c, y));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (Pt(e) && r.set(e, null), null) : (Ze(a) ? a.forEach((d) => c[d] = null) : Fn(c, a), Pt(e) && r.set(e, c), c);
}
function zc(e, t) {
  return !e || !Ic(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), bt(e, t[0].toLowerCase() + t.slice(1)) || bt(e, No(t)) || bt(e, t));
}
function Dm(e) {
  const {
    type: t,
    vnode: n,
    proxy: r,
    withProxy: o,
    propsOptions: [a],
    slots: c,
    attrs: u,
    emit: d,
    render: b,
    renderCache: y,
    props: v,
    data: x,
    setupState: N,
    ctx: k,
    inheritAttrs: P
  } = e, E = nc(e);
  let R, W;
  try {
    if (n.shapeFlag & 4) {
      const T = o || r, _ = T;
      R = Br(
        b.call(
          _,
          T,
          y,
          v,
          N,
          x,
          k
        )
      ), W = u;
    } else {
      const T = t;
      R = Br(
        T.length > 1 ? T(
          v,
          { attrs: u, slots: c, emit: d }
        ) : T(
          v,
          null
        )
      ), W = t.props ? u : rS(u);
    }
  } catch (T) {
    Ms.length = 0, Lc(T, e, 1), R = Re(Hi);
  }
  let V = R;
  if (W && P !== !1) {
    const T = Object.keys(W), { shapeFlag: _ } = V;
    T.length && _ & 7 && (a && T.some(Oc) && (W = iS(
      W,
      a
    )), V = wa(V, W, !1, !0));
  }
  return n.dirs && (V = wa(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && Dd(V, n.transition), R = V, nc(E), R;
}
const rS = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ic(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, iS = (e, t) => {
  const n = {};
  for (const r in e)
    (!Oc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function oS(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Lm(r, c, b) : !!c;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let v = 0; v < y.length; v++) {
        const x = y[v];
        if (cy(c, r, x) && !zc(b, x))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? Lm(r, c, b) : !0 : !!c;
  return !1;
}
function Lm(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (cy(t, e, a) && !zc(n, a))
      return !0;
  }
  return !1;
}
function cy(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && Pt(r) && Pt(o) ? !Nd(r, o) : r !== o;
}
function aS({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const uy = {}, fy = () => Object.create(uy), dy = (e) => Object.getPrototypeOf(e) === uy;
function sS(e, t, n, r = !1) {
  const o = {}, a = fy();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), py(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ hx(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function lS(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, u = /* @__PURE__ */ yt(o), [d] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const y = e.vnode.dynamicProps;
      for (let v = 0; v < y.length; v++) {
        let x = y[v];
        if (zc(e.emitsOptions, x))
          continue;
        const N = t[x];
        if (d)
          if (bt(a, x))
            N !== a[x] && (a[x] = N, b = !0);
          else {
            const k = Hn(x);
            o[k] = Vf(
              d,
              u,
              k,
              N,
              e,
              !1
            );
          }
        else
          N !== a[x] && (a[x] = N, b = !0);
      }
    }
  } else {
    py(e, t, o, a) && (b = !0);
    let y;
    for (const v in u)
      (!t || // for camelCase
      !bt(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = No(v)) === v || !bt(t, y))) && (d ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[v] = Vf(
        d,
        u,
        v,
        void 0,
        e,
        !0
      )) : delete o[v]);
    if (a !== u)
      for (const v in a)
        (!t || !bt(t, v)) && (delete a[v], b = !0);
  }
  b && yi(e.attrs, "set", "");
}
function py(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (vs(d))
        continue;
      const b = t[d];
      let y;
      o && bt(o, y = Hn(d)) ? !a || !a.includes(y) ? n[y] = b : (u || (u = {}))[y] = b : zc(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ yt(n), b = u || Ct;
    for (let y = 0; y < a.length; y++) {
      const v = a[y];
      n[v] = Vf(
        o,
        d,
        v,
        b[v],
        e,
        !bt(b, v)
      );
    }
  }
  return c;
}
function Vf(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const u = bt(c, "default");
    if (u && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && nt(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const y = Us(o);
          r = b[n] = d.call(
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
    ] && (a && !u ? r = !1 : c[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === No(n)) && (r = !0));
  }
  return r;
}
const cS = /* @__PURE__ */ new WeakMap();
function hy(e, t, n = !1) {
  const r = n ? cS : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, u = [];
  let d = !1;
  if (!nt(e)) {
    const y = (v) => {
      d = !0;
      const [x, N] = hy(v, t, !0);
      Fn(c, x), N && u.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !d)
    return Pt(e) && r.set(e, la), la;
  if (Ze(a))
    for (let y = 0; y < a.length; y++) {
      const v = Hn(a[y]);
      Rm(v) && (c[v] = Ct);
    }
  else if (a)
    for (const y in a) {
      const v = Hn(y);
      if (Rm(v)) {
        const x = a[y], N = c[v] = Ze(x) || nt(x) ? { type: x } : Fn({}, x), k = N.type;
        let P = !1, E = !0;
        if (Ze(k))
          for (let R = 0; R < k.length; ++R) {
            const W = k[R], V = nt(W) && W.name;
            if (V === "Boolean") {
              P = !0;
              break;
            } else V === "String" && (E = !1);
          }
        else
          P = nt(k) && k.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = P, N[
          1
          /* shouldCastTrue */
        ] = E, (P || bt(N, "default")) && u.push(v);
      }
    }
  const b = [c, u];
  return Pt(e) && r.set(e, b), b;
}
function Rm(e) {
  return e[0] !== "$" && !vs(e);
}
const Ld = (e) => e === "_" || e === "_ctx" || e === "$stable", Rd = (e) => Ze(e) ? e.map(Br) : [Br(e)], uS = (e, t, n) => {
  if (t._n)
    return t;
  const r = J0((...o) => Rd(t(...o)), n);
  return r._c = !1, r;
}, my = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Ld(o)) continue;
    const a = e[o];
    if (nt(a))
      t[o] = uS(o, a, r);
    else if (a != null) {
      const c = Rd(a);
      t[o] = () => c;
    }
  }
}, gy = (e, t) => {
  const n = Rd(t);
  e.slots.default = () => n;
}, yy = (e, t, n) => {
  for (const r in t)
    (n || !Ld(r)) && (e[r] = t[r]);
}, fS = (e, t, n) => {
  const r = e.slots = fy();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (yy(r, t, n), n && P0(r, "_", o, !0)) : my(t, r);
  } else t && gy(e, t);
}, dS = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = Ct;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : yy(o, t, n) : (a = !t.$stable, my(t, o)), c = t;
  } else t && (gy(e, t), c = { default: 1 });
  if (a)
    for (const u in o)
      !Ld(u) && c[u] == null && delete o[u];
}, Un = yS;
function pS(e) {
  return hS(e);
}
function hS(e, t) {
  const n = Tc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: c,
    createText: u,
    createComment: d,
    setText: b,
    setElementText: y,
    parentNode: v,
    nextSibling: x,
    setScopeId: N = Xr,
    insertStaticContent: k
  } = e, P = (j, K, re, we = null, ge = null, ve = null, Me = void 0, Ce = null, Se = !!K.dynamicChildren) => {
    if (j === K)
      return;
    j && !ns(j, K) && (we = Ae(j), Fe(j, ge, ve, !0), j = null), K.patchFlag === -2 && (Se = !1, K.dynamicChildren = null);
    const { type: pe, ref: Oe, shapeFlag: Ie } = K;
    switch (pe) {
      case jc:
        E(j, K, re, we);
        break;
      case Hi:
        R(j, K, re, we);
        break;
      case Bu:
        j == null && W(K, re, we, Me);
        break;
      case Xe:
        se(
          j,
          K,
          re,
          we,
          ge,
          ve,
          Me,
          Ce,
          Se
        );
        break;
      default:
        Ie & 1 ? _(
          j,
          K,
          re,
          we,
          ge,
          ve,
          Me,
          Ce,
          Se
        ) : Ie & 6 ? Pe(
          j,
          K,
          re,
          we,
          ge,
          ve,
          Me,
          Ce,
          Se
        ) : (Ie & 64 || Ie & 128) && pe.process(
          j,
          K,
          re,
          we,
          ge,
          ve,
          Me,
          Ce,
          Se,
          gn
        );
    }
    Oe != null && ge ? xs(Oe, j && j.ref, ve, K || j, !K) : Oe == null && j && j.ref != null && xs(j.ref, null, ve, j, !0);
  }, E = (j, K, re, we) => {
    if (j == null)
      r(
        K.el = u(K.children),
        re,
        we
      );
    else {
      const ge = K.el = j.el;
      K.children !== j.children && b(ge, K.children);
    }
  }, R = (j, K, re, we) => {
    j == null ? r(
      K.el = d(K.children || ""),
      re,
      we
    ) : K.el = j.el;
  }, W = (j, K, re, we) => {
    [j.el, j.anchor] = k(
      j.children,
      K,
      re,
      we,
      j.el,
      j.anchor
    );
  }, V = ({ el: j, anchor: K }, re, we) => {
    let ge;
    for (; j && j !== K; )
      ge = x(j), r(j, re, we), j = ge;
    r(K, re, we);
  }, T = ({ el: j, anchor: K }) => {
    let re;
    for (; j && j !== K; )
      re = x(j), o(j), j = re;
    o(K);
  }, _ = (j, K, re, we, ge, ve, Me, Ce, Se) => {
    if (K.type === "svg" ? Me = "svg" : K.type === "math" && (Me = "mathml"), j == null)
      z(
        K,
        re,
        we,
        ge,
        ve,
        Me,
        Ce,
        Se
      );
    else {
      const pe = j.el && j.el._isVueCE ? j.el : null;
      try {
        pe && pe._beginPatch(), _e(
          j,
          K,
          ge,
          ve,
          Me,
          Ce,
          Se
        );
      } finally {
        pe && pe._endPatch();
      }
    }
  }, z = (j, K, re, we, ge, ve, Me, Ce) => {
    let Se, pe;
    const { props: Oe, shapeFlag: Ie, transition: $e, dirs: Ge } = j;
    if (Se = j.el = c(
      j.type,
      ve,
      Oe && Oe.is,
      Oe
    ), Ie & 8 ? y(Se, j.children) : Ie & 16 && oe(
      j.children,
      Se,
      null,
      we,
      ge,
      Wu(j, ve),
      Me,
      Ce
    ), Ge && no(j, null, we, "created"), B(Se, j, j.scopeId, Me, we), Oe) {
      for (const st in Oe)
        st !== "value" && !vs(st) && a(Se, st, null, Oe[st], ve, we);
      "value" in Oe && a(Se, "value", null, Oe.value, ve), (pe = Oe.onVnodeBeforeMount) && $r(pe, we, j);
    }
    Ge && no(j, null, we, "beforeMount");
    const at = mS(ge, $e);
    at && $e.beforeEnter(Se), r(Se, K, re), ((pe = Oe && Oe.onVnodeMounted) || at || Ge) && Un(() => {
      try {
        pe && $r(pe, we, j), at && $e.enter(Se), Ge && no(j, null, we, "mounted");
      } finally {
      }
    }, ge);
  }, B = (j, K, re, we, ge) => {
    if (re && N(j, re), we)
      for (let ve = 0; ve < we.length; ve++)
        N(j, we[ve]);
    if (ge) {
      let ve = ge.subTree;
      if (K === ve || wy(ve.type) && (ve.ssContent === K || ve.ssFallback === K)) {
        const Me = ge.vnode;
        B(
          j,
          Me,
          Me.scopeId,
          Me.slotScopeIds,
          ge.parent
        );
      }
    }
  }, oe = (j, K, re, we, ge, ve, Me, Ce, Se = 0) => {
    for (let pe = Se; pe < j.length; pe++) {
      const Oe = j[pe] = Ce ? mi(j[pe]) : Br(j[pe]);
      P(
        null,
        Oe,
        K,
        re,
        we,
        ge,
        ve,
        Me,
        Ce
      );
    }
  }, _e = (j, K, re, we, ge, ve, Me) => {
    const Ce = K.el = j.el;
    let { patchFlag: Se, dynamicChildren: pe, dirs: Oe } = K;
    Se |= j.patchFlag & 16;
    const Ie = j.props || Ct, $e = K.props || Ct;
    let Ge;
    if (re && ro(re, !1), (Ge = $e.onVnodeBeforeUpdate) && $r(Ge, re, K, j), Oe && no(K, j, re, "beforeUpdate"), re && ro(re, !0), (Ie.innerHTML && $e.innerHTML == null || Ie.textContent && $e.textContent == null) && y(Ce, ""), pe ? A(
      j.dynamicChildren,
      pe,
      Ce,
      re,
      we,
      Wu(K, ge),
      ve
    ) : Me || O(
      j,
      K,
      Ce,
      null,
      re,
      we,
      Wu(K, ge),
      ve,
      !1
    ), Se > 0) {
      if (Se & 16)
        L(Ce, Ie, $e, re, ge);
      else if (Se & 2 && Ie.class !== $e.class && a(Ce, "class", null, $e.class, ge), Se & 4 && a(Ce, "style", Ie.style, $e.style, ge), Se & 8) {
        const at = K.dynamicProps;
        for (let st = 0; st < at.length; st++) {
          const ft = at[st], dt = Ie[ft], Rt = $e[ft];
          (Rt !== dt || ft === "value") && a(Ce, ft, dt, Rt, ge, re);
        }
      }
      Se & 1 && j.children !== K.children && y(Ce, K.children);
    } else !Me && pe == null && L(Ce, Ie, $e, re, ge);
    ((Ge = $e.onVnodeUpdated) || Oe) && Un(() => {
      Ge && $r(Ge, re, K, j), Oe && no(K, j, re, "updated");
    }, we);
  }, A = (j, K, re, we, ge, ve, Me) => {
    for (let Ce = 0; Ce < K.length; Ce++) {
      const Se = j[Ce], pe = K[Ce], Oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Se.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Se.type === Xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ns(Se, pe) || // - In the case of a component, it could contain anything.
        Se.shapeFlag & 198) ? v(Se.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          re
        )
      );
      P(
        Se,
        pe,
        Oe,
        null,
        we,
        ge,
        ve,
        Me,
        !0
      );
    }
  }, L = (j, K, re, we, ge) => {
    if (K !== re) {
      if (K !== Ct)
        for (const ve in K)
          !vs(ve) && !(ve in re) && a(
            j,
            ve,
            K[ve],
            null,
            ge,
            we
          );
      for (const ve in re) {
        if (vs(ve)) continue;
        const Me = re[ve], Ce = K[ve];
        Me !== Ce && ve !== "value" && a(j, ve, Ce, Me, ge, we);
      }
      "value" in re && a(j, "value", K.value, re.value, ge);
    }
  }, se = (j, K, re, we, ge, ve, Me, Ce, Se) => {
    const pe = K.el = j ? j.el : u(""), Oe = K.anchor = j ? j.anchor : u("");
    let { patchFlag: Ie, dynamicChildren: $e, slotScopeIds: Ge } = K;
    Ge && (Ce = Ce ? Ce.concat(Ge) : Ge), j == null ? (r(pe, re, we), r(Oe, re, we), oe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      K.children || [],
      re,
      Oe,
      ge,
      ve,
      Me,
      Ce,
      Se
    )) : Ie > 0 && Ie & 64 && $e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    j.dynamicChildren && j.dynamicChildren.length === $e.length ? (A(
      j.dynamicChildren,
      $e,
      re,
      ge,
      ve,
      Me,
      Ce
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (K.key != null || ge && K === ge.subTree) && by(
      j,
      K,
      !0
      /* shallow */
    )) : O(
      j,
      K,
      re,
      Oe,
      ge,
      ve,
      Me,
      Ce,
      Se
    );
  }, Pe = (j, K, re, we, ge, ve, Me, Ce, Se) => {
    K.slotScopeIds = Ce, j == null ? K.shapeFlag & 512 ? ge.ctx.activate(
      K,
      re,
      we,
      Me,
      Se
    ) : de(
      K,
      re,
      we,
      ge,
      ve,
      Me,
      Se
    ) : U(j, K, Se);
  }, de = (j, K, re, we, ge, ve, Me) => {
    const Ce = j.component = SS(
      j,
      we,
      ge
    );
    if (ty(j) && (Ce.ctx.renderer = gn), MS(Ce, !1, Me), Ce.asyncDep) {
      if (ge && ge.registerDep(Ce, q, Me), !j.el) {
        const Se = Ce.subTree = Re(Hi);
        R(null, Se, K, re), j.placeholder = Se.el;
      }
    } else
      q(
        Ce,
        j,
        K,
        re,
        ge,
        ve,
        Me
      );
  }, U = (j, K, re) => {
    const we = K.component = j.component;
    if (oS(j, K, re))
      if (we.asyncDep && !we.asyncResolved) {
        D(we, K, re);
        return;
      } else
        we.next = K, we.update();
    else
      K.el = j.el, we.vnode = K;
  }, q = (j, K, re, we, ge, ve, Me) => {
    const Ce = () => {
      if (j.isMounted) {
        let { next: Ie, bu: $e, u: Ge, parent: at, vnode: st } = j;
        {
          const Dn = vy(j);
          if (Dn) {
            Ie && (Ie.el = st.el, D(j, Ie, Me)), Dn.asyncDep.then(() => {
              Un(() => {
                j.isUnmounted || pe();
              }, ge);
            });
            return;
          }
        }
        let ft = Ie, dt;
        ro(j, !1), Ie ? (Ie.el = st.el, D(j, Ie, Me)) : Ie = st, $e && Dl($e), (dt = Ie.props && Ie.props.onVnodeBeforeUpdate) && $r(dt, at, Ie, st), ro(j, !0);
        const Rt = Dm(j), Tn = j.subTree;
        j.subTree = Rt, P(
          Tn,
          Rt,
          // parent may have changed if it's in a teleport
          v(Tn.el),
          // anchor may have changed if it's in a fragment
          Ae(Tn),
          j,
          ge,
          ve
        ), Ie.el = Rt.el, ft === null && aS(j, Rt.el), Ge && Un(Ge, ge), (dt = Ie.props && Ie.props.onVnodeUpdated) && Un(
          () => $r(dt, at, Ie, st),
          ge
        );
      } else {
        let Ie;
        const { el: $e, props: Ge } = K, { bm: at, m: st, parent: ft, root: dt, type: Rt } = j, Tn = Ss(K);
        ro(j, !1), at && Dl(at), !Tn && (Ie = Ge && Ge.onVnodeBeforeMount) && $r(Ie, ft, K), ro(j, !0);
        {
          dt.ce && dt.ce._hasShadowRoot() && dt.ce._injectChildStyle(
            Rt,
            j.parent ? j.parent.type : void 0
          );
          const Dn = j.subTree = Dm(j);
          P(
            null,
            Dn,
            re,
            we,
            j,
            ge,
            ve
          ), K.el = Dn.el;
        }
        if (st && Un(st, ge), !Tn && (Ie = Ge && Ge.onVnodeMounted)) {
          const Dn = K;
          Un(
            () => $r(Ie, ft, Dn),
            ge
          );
        }
        (K.shapeFlag & 256 || ft && Ss(ft.vnode) && ft.vnode.shapeFlag & 256) && j.a && Un(j.a, ge), j.isMounted = !0, K = re = we = null;
      }
    };
    j.scope.on();
    const Se = j.effect = new O0(Ce);
    j.scope.off();
    const pe = j.update = Se.run.bind(Se), Oe = j.job = Se.runIfDirty.bind(Se);
    Oe.i = j, Oe.id = j.uid, Se.scheduler = () => Td(Oe), ro(j, !0), pe();
  }, D = (j, K, re) => {
    K.component = j;
    const we = j.vnode.props;
    j.vnode = K, j.next = null, lS(j, K.props, we, re), dS(j, K.children, re), xi(), Pm(j), Si();
  }, O = (j, K, re, we, ge, ve, Me, Ce, Se = !1) => {
    const pe = j && j.children, Oe = j ? j.shapeFlag : 0, Ie = K.children, { patchFlag: $e, shapeFlag: Ge } = K;
    if ($e > 0) {
      if ($e & 128) {
        te(
          pe,
          Ie,
          re,
          we,
          ge,
          ve,
          Me,
          Ce,
          Se
        );
        return;
      } else if ($e & 256) {
        Q(
          pe,
          Ie,
          re,
          we,
          ge,
          ve,
          Me,
          Ce,
          Se
        );
        return;
      }
    }
    Ge & 8 ? (Oe & 16 && gt(pe, ge, ve), Ie !== pe && y(re, Ie)) : Oe & 16 ? Ge & 16 ? te(
      pe,
      Ie,
      re,
      we,
      ge,
      ve,
      Me,
      Ce,
      Se
    ) : gt(pe, ge, ve, !0) : (Oe & 8 && y(re, ""), Ge & 16 && oe(
      Ie,
      re,
      we,
      ge,
      ve,
      Me,
      Ce,
      Se
    ));
  }, Q = (j, K, re, we, ge, ve, Me, Ce, Se) => {
    j = j || la, K = K || la;
    const pe = j.length, Oe = K.length, Ie = Math.min(pe, Oe);
    let $e;
    for ($e = 0; $e < Ie; $e++) {
      const Ge = K[$e] = Se ? mi(K[$e]) : Br(K[$e]);
      P(
        j[$e],
        Ge,
        re,
        null,
        ge,
        ve,
        Me,
        Ce,
        Se
      );
    }
    pe > Oe ? gt(
      j,
      ge,
      ve,
      !0,
      !1,
      Ie
    ) : oe(
      K,
      re,
      we,
      ge,
      ve,
      Me,
      Ce,
      Se,
      Ie
    );
  }, te = (j, K, re, we, ge, ve, Me, Ce, Se) => {
    let pe = 0;
    const Oe = K.length;
    let Ie = j.length - 1, $e = Oe - 1;
    for (; pe <= Ie && pe <= $e; ) {
      const Ge = j[pe], at = K[pe] = Se ? mi(K[pe]) : Br(K[pe]);
      if (ns(Ge, at))
        P(
          Ge,
          at,
          re,
          null,
          ge,
          ve,
          Me,
          Ce,
          Se
        );
      else
        break;
      pe++;
    }
    for (; pe <= Ie && pe <= $e; ) {
      const Ge = j[Ie], at = K[$e] = Se ? mi(K[$e]) : Br(K[$e]);
      if (ns(Ge, at))
        P(
          Ge,
          at,
          re,
          null,
          ge,
          ve,
          Me,
          Ce,
          Se
        );
      else
        break;
      Ie--, $e--;
    }
    if (pe > Ie) {
      if (pe <= $e) {
        const Ge = $e + 1, at = Ge < Oe ? K[Ge].el : we;
        for (; pe <= $e; )
          P(
            null,
            K[pe] = Se ? mi(K[pe]) : Br(K[pe]),
            re,
            at,
            ge,
            ve,
            Me,
            Ce,
            Se
          ), pe++;
      }
    } else if (pe > $e)
      for (; pe <= Ie; )
        Fe(j[pe], ge, ve, !0), pe++;
    else {
      const Ge = pe, at = pe, st = /* @__PURE__ */ new Map();
      for (pe = at; pe <= $e; pe++) {
        const We = K[pe] = Se ? mi(K[pe]) : Br(K[pe]);
        We.key != null && st.set(We.key, pe);
      }
      let ft, dt = 0;
      const Rt = $e - at + 1;
      let Tn = !1, Dn = 0;
      const ti = new Array(Rt);
      for (pe = 0; pe < Rt; pe++) ti[pe] = 0;
      for (pe = Ge; pe <= Ie; pe++) {
        const We = j[pe];
        if (dt >= Rt) {
          Fe(We, ge, ve, !0);
          continue;
        }
        let rn;
        if (We.key != null)
          rn = st.get(We.key);
        else
          for (ft = at; ft <= $e; ft++)
            if (ti[ft - at] === 0 && ns(We, K[ft])) {
              rn = ft;
              break;
            }
        rn === void 0 ? Fe(We, ge, ve, !0) : (ti[rn - at] = pe + 1, rn >= Dn ? Dn = rn : Tn = !0, P(
          We,
          K[rn],
          re,
          null,
          ge,
          ve,
          Me,
          Ce,
          Se
        ), dt++);
      }
      const h = Tn ? gS(ti) : la;
      for (ft = h.length - 1, pe = Rt - 1; pe >= 0; pe--) {
        const We = at + pe, rn = K[We], en = K[We + 1], Pi = We + 1 < Oe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          en.el || _y(en)
        ) : we;
        ti[pe] === 0 ? P(
          null,
          rn,
          re,
          Pi,
          ge,
          ve,
          Me,
          Ce,
          Se
        ) : Tn && (ft < 0 || pe !== h[ft] ? Ee(rn, re, Pi, 2) : ft--);
      }
    }
  }, Ee = (j, K, re, we, ge = null) => {
    const { el: ve, type: Me, transition: Ce, children: Se, shapeFlag: pe } = j;
    if (pe & 6) {
      Ee(j.component.subTree, K, re, we);
      return;
    }
    if (pe & 128) {
      j.suspense.move(K, re, we);
      return;
    }
    if (pe & 64) {
      Me.move(j, K, re, gn);
      return;
    }
    if (Me === Xe) {
      r(ve, K, re);
      for (let Ie = 0; Ie < Se.length; Ie++)
        Ee(Se[Ie], K, re, we);
      r(j.anchor, K, re);
      return;
    }
    if (Me === Bu) {
      V(j, K, re);
      return;
    }
    if (we !== 2 && pe & 1 && Ce)
      if (we === 0)
        Ce.beforeEnter(ve), r(ve, K, re), Un(() => Ce.enter(ve), ge);
      else {
        const { leave: Ie, delayLeave: $e, afterLeave: Ge } = Ce, at = () => {
          j.ctx.isUnmounted ? o(ve) : r(ve, K, re);
        }, st = () => {
          ve._isLeaving && ve[Ex](
            !0
            /* cancelled */
          ), Ie(ve, () => {
            at(), Ge && Ge();
          });
        };
        $e ? $e(ve, at, st) : st();
      }
    else
      r(ve, K, re);
  }, Fe = (j, K, re, we = !1, ge = !1) => {
    const {
      type: ve,
      props: Me,
      ref: Ce,
      children: Se,
      dynamicChildren: pe,
      shapeFlag: Oe,
      patchFlag: Ie,
      dirs: $e,
      cacheIndex: Ge,
      memo: at
    } = j;
    if (Ie === -2 && (ge = !1), Ce != null && (xi(), xs(Ce, null, re, j, !0), Si()), Ge != null && (K.renderCache[Ge] = void 0), Oe & 256) {
      K.ctx.deactivate(j);
      return;
    }
    const st = Oe & 1 && $e, ft = !Ss(j);
    let dt;
    if (ft && (dt = Me && Me.onVnodeBeforeUnmount) && $r(dt, K, j), Oe & 6)
      $(j.component, re, we);
    else {
      if (Oe & 128) {
        j.suspense.unmount(re, we);
        return;
      }
      st && no(j, null, K, "beforeUnmount"), Oe & 64 ? j.type.remove(
        j,
        K,
        re,
        gn,
        we
      ) : pe && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !pe.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ve !== Xe || Ie > 0 && Ie & 64) ? gt(
        pe,
        K,
        re,
        !1,
        !0
      ) : (ve === Xe && Ie & 384 || !ge && Oe & 16) && gt(Se, K, re), we && vt(j);
    }
    const Rt = at != null && Ge == null;
    (ft && (dt = Me && Me.onVnodeUnmounted) || st || Rt) && Un(() => {
      dt && $r(dt, K, j), st && no(j, null, K, "unmounted"), Rt && (j.el = null);
    }, re);
  }, vt = (j) => {
    const { type: K, el: re, anchor: we, transition: ge } = j;
    if (K === Xe) {
      ht(re, we);
      return;
    }
    if (K === Bu) {
      T(j);
      return;
    }
    const ve = () => {
      o(re), ge && !ge.persisted && ge.afterLeave && ge.afterLeave();
    };
    if (j.shapeFlag & 1 && ge && !ge.persisted) {
      const { leave: Me, delayLeave: Ce } = ge, Se = () => Me(re, ve);
      Ce ? Ce(j.el, ve, Se) : Se();
    } else
      ve();
  }, ht = (j, K) => {
    let re;
    for (; j !== K; )
      re = x(j), o(j), j = re;
    o(K);
  }, $ = (j, K, re) => {
    const { bum: we, scope: ge, job: ve, subTree: Me, um: Ce, m: Se, a: pe } = j;
    Vm(Se), Vm(pe), we && Dl(we), ge.stop(), ve && (ve.flags |= 8, Fe(Me, j, K, re)), Ce && Un(Ce, K), Un(() => {
      j.isUnmounted = !0;
    }, K);
  }, gt = (j, K, re, we = !1, ge = !1, ve = 0) => {
    for (let Me = ve; Me < j.length; Me++)
      Fe(j[Me], K, re, we, ge);
  }, Ae = (j) => {
    if (j.shapeFlag & 6)
      return Ae(j.component.subTree);
    if (j.shapeFlag & 128)
      return j.suspense.next();
    const K = x(j.anchor || j.el), re = K && K[Ix];
    return re ? x(re) : K;
  };
  let wt = !1;
  const Et = (j, K, re) => {
    let we;
    j == null ? K._vnode && (Fe(K._vnode, null, null, !0), we = K._vnode.component) : P(
      K._vnode || null,
      j,
      K,
      null,
      null,
      null,
      re
    ), K._vnode = j, wt || (wt = !0, Pm(we), Y0(), wt = !1);
  }, gn = {
    p: P,
    um: Fe,
    m: Ee,
    r: vt,
    mt: de,
    mc: oe,
    pc: O,
    pbc: A,
    n: Ae,
    o: e
  };
  return {
    render: Et,
    hydrate: void 0,
    createApp: Qx(Et)
  };
}
function Wu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ro({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function by(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Ze(r) && Ze(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = mi(o[a]), u.el = c.el), !n && u.patchFlag !== -2 && by(c, u)), u.type === jc && (u.patchFlag === -1 && (u = o[a] = mi(u)), u.el = c.el), u.type === Hi && !u.el && (u.el = c.el);
    }
}
function gS(e) {
  const t = e.slice(), n = [0];
  let r, o, a, c, u;
  const d = e.length;
  for (r = 0; r < d; r++) {
    const b = e[r];
    if (b !== 0) {
      if (o = n[n.length - 1], e[o] < b) {
        t[r] = o, n.push(r);
        continue;
      }
      for (a = 0, c = n.length - 1; a < c; )
        u = a + c >> 1, e[n[u]] < b ? a = u + 1 : c = u;
      b < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, c = n[a - 1]; a-- > 0; )
    n[a] = c, c = t[c];
  return n;
}
function vy(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : vy(t);
}
function Vm(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function _y(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? _y(t.subTree) : null;
}
const wy = (e) => e.__isSuspense;
function yS(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : Mx(e);
}
const Xe = /* @__PURE__ */ Symbol.for("v-fgt"), jc = /* @__PURE__ */ Symbol.for("v-txt"), Hi = /* @__PURE__ */ Symbol.for("v-cmt"), Bu = /* @__PURE__ */ Symbol.for("v-stc"), Ms = [];
let rr = null;
function ne(e = !1) {
  Ms.push(rr = e ? null : []);
}
function bS() {
  Ms.pop(), rr = Ms[Ms.length - 1] || null;
}
let Fs = 1;
function $m(e, t = !1) {
  Fs += e, e < 0 && rr && t && (rr.hasOnce = !0);
}
function xy(e) {
  return e.dynamicChildren = Fs > 0 ? rr || la : null, bS(), Fs > 0 && rr && rr.push(e), e;
}
function ue(e, t, n, r, o, a) {
  return xy(
    Y(
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
function vr(e, t, n, r, o) {
  return xy(
    Re(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function Sy(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ns(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ky = ({ key: e }) => e ?? null, Rl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? nn(e) || /* @__PURE__ */ En(e) || nt(e) ? { i: nr, r: e, k: t, f: !!n } : e : null);
function Y(e, t = null, n = null, r = 0, o = null, a = e === Xe ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ky(t),
    ref: t && Rl(t),
    scopeId: q0,
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
    ctx: nr
  };
  return u ? (Vd(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= nn(n) ? 8 : 16), Fs > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  rr && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && rr.push(d), d;
}
const Re = vS;
function vS(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === iy) && (e = Hi), Sy(e)) {
    const u = wa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vd(u, n), Fs > 0 && !a && rr && (u.shapeFlag & 6 ? rr[rr.indexOf(e)] = u : rr.push(u)), u.patchFlag = -2, u;
  }
  if (IS(e) && (e = e.__vccOpts), t) {
    t = _S(t);
    let { class: u, style: d } = t;
    u && !nn(u) && (t.class = ut(u)), Pt(d) && (/* @__PURE__ */ Fd(d) && !Ze(d) && (d = Fn({}, d)), t.style = Mt(d));
  }
  const c = nn(e) ? 1 : wy(e) ? 128 : Ox(e) ? 64 : Pt(e) ? 4 : nt(e) ? 2 : 0;
  return Y(
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
function _S(e) {
  return e ? /* @__PURE__ */ Fd(e) || dy(e) ? Fn({}, e) : e : null;
}
function wa(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: u, transition: d } = e, b = t ? gi(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && ky(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Ze(a) ? a.concat(Rl(t)) : [a, Rl(t)] : Rl(t)
    ) : a,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: u,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Xe ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && wa(e.ssContent),
    ssFallback: e.ssFallback && wa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && Dd(
    y,
    d.clone(y)
  ), y;
}
function fs(e = " ", t = 0) {
  return Re(jc, null, e, t);
}
function ct(e = "", t = !1) {
  return t ? (ne(), vr(Hi, null, e)) : Re(Hi, null, e);
}
function Br(e) {
  return e == null || typeof e == "boolean" ? Re(Hi) : Ze(e) ? Re(
    Xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Sy(e) ? mi(e) : Re(jc, null, String(e));
}
function mi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wa(e);
}
function Vd(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Vd(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !dy(t) ? t._ctx = nr : o === 3 && nr && (nr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else nt(t) ? (t = { default: t, _ctx: nr }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [fs(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function gi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ut([t.class, r.class]));
      else if (o === "style")
        t.style = Mt([t.style, r.style]);
      else if (Ic(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(Ze(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Oc(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function $r(e, t, n, r = null) {
  Qr(e, t, 7, [
    n,
    r
  ]);
}
const wS = sy();
let xS = 0;
function SS(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || wS, a = {
    uid: xS++,
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
    scope: new Yw(
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
    propsOptions: hy(r, o),
    emitsOptions: ly(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ct,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Ct,
    data: Ct,
    props: Ct,
    attrs: Ct,
    slots: Ct,
    refs: Ct,
    setupState: Ct,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = tS.bind(null, a), e.ce && e.ce(a), a;
}
let In = null;
const kS = () => In || nr;
let oc, $f;
{
  const e = Tc(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  oc = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => In = n
  ), $f = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ts = n
  );
}
const Us = (e) => {
  const t = In;
  return oc(e), e.scope.on(), () => {
    e.scope.off(), oc(t);
  };
}, zm = () => {
  In && In.scope.off(), oc(null);
};
function My(e) {
  return e.vnode.shapeFlag & 4;
}
let Ts = !1;
function MS(e, t = !1, n = !1) {
  t && $f(t);
  const { props: r, children: o } = e.vnode, a = My(e);
  sS(e, r, a, t), fS(e, o, n || t);
  const c = a ? NS(e, t) : void 0;
  return t && $f(!1), c;
}
function NS(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Bx);
  const { setup: r } = n;
  if (r) {
    xi();
    const o = e.setupContext = r.length > 1 ? AS(e) : null, a = Us(e), c = Ws(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = k0(c);
    if (Si(), a(), (u || e.sp) && !Ss(e) && ey(e), u) {
      if (c.then(zm, zm), t)
        return c.then((d) => {
          jm(e, d);
        }).catch((d) => {
          Lc(d, e, 0);
        });
      e.asyncDep = c;
    } else
      jm(e, c);
  } else
    Ny(e);
}
function jm(e, t, n) {
  nt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pt(t) && (e.setupState = W0(t)), Ny(e);
}
function Ny(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Xr);
  {
    const o = Us(e);
    xi();
    try {
      Ux(e);
    } finally {
      Si(), o();
    }
  }
}
const PS = {
  get(e, t) {
    return An(e, "get", ""), e[t];
  }
};
function AS(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, PS),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Hc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(W0(mx(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ks)
        return ks[n](e);
    },
    has(t, n) {
      return n in t || n in ks;
    }
  })) : e.proxy;
}
function CS(e, t = !0) {
  return nt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function IS(e) {
  return nt(e) && "__vccOpts" in e;
}
const pt = (e, t) => /* @__PURE__ */ _x(e, t, Ts), OS = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let zf;
const Hm = typeof window < "u" && window.trustedTypes;
if (Hm)
  try {
    zf = /* @__PURE__ */ Hm.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Py = zf ? (e) => zf.createHTML(e) : (e) => e, ES = "http://www.w3.org/2000/svg", FS = "http://www.w3.org/1998/Math/MathML", di = typeof document < "u" ? document : null, Gm = di && /* @__PURE__ */ di.createElement("template"), TS = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? di.createElementNS(ES, e) : t === "mathml" ? di.createElementNS(FS, e) : n ? di.createElement(e, { is: n }) : di.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => di.createTextNode(e),
  createComment: (e) => di.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => di.querySelector(e),
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
      Gm.innerHTML = Py(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Gm.content;
      if (r === "svg" || r === "mathml") {
        const d = u.firstChild;
        for (; d.firstChild; )
          u.appendChild(d.firstChild);
        u.removeChild(d);
      }
      t.insertBefore(u, n);
    }
    return [
      // first
      c ? c.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, DS = /* @__PURE__ */ Symbol("_vtc");
function LS(e, t, n) {
  const r = e[DS];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ac = /* @__PURE__ */ Symbol("_vod"), Ay = /* @__PURE__ */ Symbol("_vsh"), Mo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[ac] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : rs(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), rs(e, !0), r.enter(e)) : r.leave(e, () => {
      rs(e, !1);
    }) : rs(e, t));
  },
  beforeUnmount(e, { value: t }) {
    rs(e, t);
  }
};
function rs(e, t) {
  e.style.display = t ? e[ac] : "none", e[Ay] = !t;
}
const RS = /* @__PURE__ */ Symbol(""), VS = /(?:^|;)\s*display\s*:/;
function $S(e, t, n) {
  const r = e.style, o = nn(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (nn(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && Vl(r, u, "");
        }
      else
        for (const c in t)
          n[c] == null && Vl(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), Vl(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[RS];
      c && (n += ";" + c), r.cssText = n, a = VS.test(n);
    }
  } else t && e.removeAttribute("style");
  ac in e && (e[ac] = a ? r.display : "", e[Ay] && (r.display = "none"));
}
const Km = /\s*!important$/;
function Vl(e, t, n) {
  if (Ze(n))
    n.forEach((r) => Vl(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = zS(e, t);
    Km.test(n) ? e.setProperty(
      No(r),
      n.replace(Km, ""),
      "important"
    ) : e[r] = n;
  }
}
const Wm = ["Webkit", "Moz", "ms"], Uu = {};
function zS(e, t) {
  const n = Uu[t];
  if (n)
    return n;
  let r = Hn(t);
  if (r !== "filter" && r in e)
    return Uu[t] = r;
  r = Fc(r);
  for (let o = 0; o < Wm.length; o++) {
    const a = Wm[o] + r;
    if (a in e)
      return Uu[t] = a;
  }
  return t;
}
const Bm = "http://www.w3.org/1999/xlink";
function Um(e, t, n, r, o, a = Bw(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Bm, t.slice(6, t.length)) : e.setAttributeNS(Bm, t, n) : n == null || a && !A0(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Zr(n) ? String(n) : n
  );
}
function Ym(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Py(n) : n);
    return;
  }
  const a = e.tagName;
  if (t === "value" && a !== "PROGRESS" && // custom elements may use _value internally
  !a.includes("-")) {
    const u = a === "OPTION" ? e.getAttribute("value") || "" : e.value, d = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (u !== d || !("_value" in e)) && (e.value = d), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let c = !1;
  if (n === "" || n == null) {
    const u = typeof e[t];
    u === "boolean" ? n = A0(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function na(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function jS(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Xm = /* @__PURE__ */ Symbol("_vei");
function HS(e, t, n, r, o = null) {
  const a = e[Xm] || (e[Xm] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [u, d] = GS(t);
    if (r) {
      const b = a[t] = BS(
        r,
        o
      );
      na(e, u, b, d);
    } else c && (jS(e, u, c, d), a[t] = void 0);
  }
}
const qm = /(?:Once|Passive|Capture)$/;
function GS(e) {
  let t;
  if (qm.test(e)) {
    t = {};
    let r;
    for (; r = e.match(qm); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : No(e.slice(2)), t];
}
let Yu = 0;
const KS = /* @__PURE__ */ Promise.resolve(), WS = () => Yu || (KS.then(() => Yu = 0), Yu = Date.now());
function BS(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Qr(
      US(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = WS(), n;
}
function US(e, t) {
  if (Ze(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Jm = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, YS = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? LS(e, r, c) : t === "style" ? $S(e, n, r) : Ic(t) ? Oc(t) || HS(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : XS(e, t, r, c)) ? (Ym(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Um(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (qS(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !nn(r))) ? Ym(e, Hn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Um(e, t, r, c));
};
function XS(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Jm(t) && nt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Jm(t) && nn(n) ? !1 : t in e;
}
function qS(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Hn(t);
  return Array.isArray(n) ? n.some((o) => Hn(o) === r) : Object.keys(n).some((o) => Hn(o) === r);
}
const Zm = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (n) => Dl(t, n) : t;
};
function JS(e) {
  e.target.composing = !0;
}
function Qm(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Xu = /* @__PURE__ */ Symbol("_assign");
function eg(e, t, n) {
  return t && (e = e.trim()), n && (e = Md(e)), e;
}
const tg = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Xu] = Zm(o);
    const a = r || o.props && o.props.type === "number";
    na(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Xu](eg(e.value, n, a));
    }), (n || a) && na(e, "change", () => {
      e.value = eg(e.value, n, a);
    }), t || (na(e, "compositionstart", JS), na(e, "compositionend", Qm), na(e, "change", Qm));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[Xu] = Zm(c), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? Md(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, ZS = ["ctrl", "shift", "alt", "meta"], QS = {
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
  exact: (e, t) => ZS.some((n) => e[`${n}Key`] && !t.includes(n))
}, Dt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const u = QS[t[c]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, ek = /* @__PURE__ */ Fn({ patchProp: YS }, TS);
let ng;
function tk() {
  return ng || (ng = pS(ek));
}
const $d = ((...e) => {
  const t = tk().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = rk(r);
    if (!o) return;
    const a = t._component;
    !nt(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, nk(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function nk(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function rk(e) {
  return nn(e) ? document.querySelector(e) : e;
}
function ra(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function ik() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function rg(e, t = 8) {
  var y;
  const n = (y = e == null ? void 0 : e.getContext) == null ? void 0 : y.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let c = r, u = o, d = -1, b = -1;
  for (let v = 0; v < o; v += 1)
    for (let x = 0; x < r; x += 1)
      a[(v * r + x) * 4 + 3] <= t || (x < c && (c = x), v < u && (u = v), x > d && (d = x), v > b && (b = v));
  return d < c || b < u ? null : {
    minX: c,
    minY: u,
    maxX: d,
    maxY: b,
    width: d - c + 1,
    height: b - u + 1,
    aspect: Number(((d - c + 1) / Math.max(1, b - u + 1)).toFixed(4))
  };
}
function zd(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function pi(e, t, n) {
  if (!e) return ra(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function jt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let qu = null, Ju = null, ig = null, og = null, qt = null, is = null, $n = null, Ri = null;
function ok() {
  if (Ju) return Ju;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Ju = n, n;
}
function Zu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  qu = pi(qu, n, r);
  const o = qu;
  jt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", og !== o.ctx && (ig = o.ctx.createPattern(ok(), "repeat"), og = o.ctx), o.ctx.fillStyle = ig, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function ak(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function sk(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function lk(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function ck(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Gt = /* @__PURE__ */ new Map(), jd = 128;
function uk(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${c}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Gt.has(d)) {
    const W = Gt.get(d);
    return Gt.delete(d), Gt.set(d, W), W;
  }
  Gt.size >= jd && Gt.delete(Gt.keys().next().value);
  const b = c * 2 + 2, y = c + 1, v = zd(b, b), x = v.getContext("2d"), N = u * c, k = c + 1, P = `rgba(${n},${r},${o},${a})`, E = `rgba(${n},${r},${o},0)`, R = x.createRadialGradient(y, y, N, y, y, k);
  return R.addColorStop(0, P), R.addColorStop(1, E), x.fillStyle = R, x.fillRect(0, 0, b, b), Gt.set(d, v), v;
}
function fk(e, t, n, r, o, a, c) {
  const { r: u, g: d, b, a: y } = r, v = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, o), k = Math.max(0, Math.min(0.99, a)), P = Math.max(0, Math.min(1, c ?? 0)), E = `chisel:${v}:${x}:${n.toFixed(2)}:${u}:${d}:${b}:${y.toFixed(3)}:${N.toFixed(2)}:${k.toFixed(2)}:${P.toFixed(2)}`;
  if (Gt.has(E)) {
    const oe = Gt.get(E);
    return Gt.delete(E), Gt.set(E, oe), oe;
  }
  Gt.size >= jd && Gt.delete(Gt.keys().next().value);
  const R = zd(v, x), W = R.getContext("2d"), V = W.createImageData(v, x), T = V.data, _ = Math.max(0, e - t), z = Math.max(0, Math.min(1, n)), B = 1 + N;
  for (let oe = 0; oe < x; oe++)
    for (let _e = 0; _e < v; _e++) {
      const A = _e + 0.5 - e, L = oe + 0.5 - t, se = Math.max(Math.abs(A) - _, 0), de = Math.hypot(se, L) / t;
      if (de >= 1) continue;
      const U = de <= z ? 1 : Math.max(0, (1 - de) / Math.max(1e-4, 1 - z)), q = 1 - de, D = 1 + N * (1 - q) * (1 - q), O = 1 - k * q * q, Q = D * O / B;
      let te = 1;
      if (P > 0) {
        const vt = Math.floor((L + t) / 1.5), ht = Math.floor((A + e) / 8), $ = vo(da(vt * 41 + 500, ht * 19 + 300));
        te = 1 - P * 0.42 * $;
      }
      const Ee = Math.round(255 * Math.min(1, y * U * Q * te));
      if (Ee <= 0) continue;
      const Fe = (oe * v + _e) * 4;
      T[Fe] = u, T[Fe + 1] = d, T[Fe + 2] = b, T[Fe + 3] = Ee;
    }
  return W.putImageData(V, 0, 0), Gt.set(E, R), R;
}
function da(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function vo(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function dk(e, t, n, r, o, a, c) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), y = Math.max(Math.abs(u) - b, 0), v = Math.hypot(y, d) / r;
  if (v >= 1) return 0;
  const x = vo(da(e * 17 + 3, t * 13 + 7)), N = v + a * 0.22 * (x - 0.5);
  if (N >= 1) return 0;
  const k = N <= o ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - o)), P = pk(e, t, u, d, n, r), E = a * 0.55;
  if (P < E) return 0;
  const W = 0.45 + 0.55 * ((P - E) / Math.max(1e-4, 1 - E));
  return Math.round(255 * Math.min(1, c * k * W));
}
function pk(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = vo(da(c * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), y = Math.floor((r + a) / 1.5), v = vo(da(b * 23 + 800, y * 29 + 500)), x = vo(da(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + v * 0.3 + x * 0.15;
}
function hk(e, t, n, r, o) {
  const { r: a, g: c, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), v = Math.max(0, Math.min(1, o)), x = `crayon:${b}:${y}:${n.toFixed(2)}:${a}:${c}:${u}:${d.toFixed(3)}:${v.toFixed(2)}`;
  if (Gt.has(x)) {
    const W = Gt.get(x);
    return Gt.delete(x), Gt.set(x, W), W;
  }
  Gt.size >= jd && Gt.delete(Gt.keys().next().value);
  const N = zd(b, y), k = N.getContext("2d"), P = k.createImageData(b, y), E = P.data, R = Math.max(0, Math.min(1, n));
  for (let W = 0; W < y; W++)
    for (let V = 0; V < b; V++) {
      const T = dk(V, W, e, t, R, v, d);
      if (T <= 0) continue;
      const _ = (W * b + V) * 4;
      E[_] = a, E[_ + 1] = c, E[_ + 2] = u, E[_ + 3] = T;
    }
  return k.putImageData(P, 0, 0), Gt.set(x, N), N;
}
function Cy(e, t, n) {
  var P, E;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = lk(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = mk(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((P = t == null ? void 0 : t.angle) == null ? void 0 : P.value) ?? 0), b = ck(t, o), y = String(((E = t == null ? void 0 : t.targetSpace) == null ? void 0 : E.viewMode) || ""), v = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", x = t == null ? void 0 : t.scatter, N = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const R = o * u, W = o, V = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), _ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = fk(R, W, a, c, V, T, _);
  } else if (r === "crayon") {
    const R = o * u, W = o, V = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = hk(R, W, a, c, V);
  } else
    k = uk(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: N, latitudeCorrection: v };
}
function mk(e) {
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
function gk(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function ag(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function u(b, y) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, y), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + c, n), t + d > c && u(t - c, n);
}
function Hd(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: y } = e.scatter, v = b * e.radiusPx * o, x = da(t, n);
    for (let N = 0; N < y; N++) {
      const k = vo(x + N * 2) * Math.PI * 2, P = Math.sqrt(vo(x + N * 2 + 1)) * v, E = t + Math.cos(k) * P, R = n + Math.sin(k) * P, W = Math.max(0.5, e.radiusPx * o * 0.48), V = (0.5 - R / Math.max(1, e.desc.height)) * Math.PI, T = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(V)) : 1, _ = W * e.aspect * T;
      ag(e, E, R, W, _);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * u;
  ag(e, t, n, a, d);
}
function sg(e, t, n) {
  const r = sk(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = Cy(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let x = 0; x < r.length; x++) {
    let N = Number(r[x].u || 0) * o;
    const k = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(N - u[x - 1].x) > o * 0.5 && (N += N < u[x - 1].x ? o : -o), u.push({ x: N, y: k });
  }
  if (Hd(c, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], y = u[0], v = 0;
  for (let x = 1; x < u.length; x++) {
    const N = u[x], k = { x: (b.x + N.x) * 0.5, y: (b.y + N.y) * 0.5 };
    x === 1 ? v = Ds(c, y.x, y.y, k.x, k.y, v) : v = sc(c, d, y, k, N, v), d = b, b = N, y = k;
  }
  u.length === 2 ? Ds(c, y.x, y.y, b.x, b.y, v) : sc(c, d, y, b, b, v), e.restore();
}
function $l(e, t, n) {
  var v;
  const r = Array.isArray((v = t == null ? void 0 : t.geometry) == null ? void 0 : v.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = gk(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const N = ak(r[x]);
    let k = Number(N.x || 0) * o;
    x > 0 && Math.abs(k - u[x - 1].x) > o * 0.5 && (k += k < u[x - 1].x ? o : -o), u.push({ x: k, y: Number(N.y || 0) * a }), k < d && (d = k), k > b && (b = k);
  }
  function y(x) {
    e.beginPath(), e.moveTo(u[0].x + x, u[0].y);
    for (let N = 1; N < u.length; N++) e.lineTo(u[N].x + x, u[N].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, y(0), d < 0 && y(o), b > o && y(-o), e.restore();
}
function _l(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    $l(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? sg(e, t, n) : (is = pi(is, n.width, n.height), jt(is), sg(is.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(is.canvas, 0, 0), e.restore());
}
function io(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ds(e, t, n, r, o, a) {
  const c = r - t, u = o - n, d = Math.hypot(c, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const y = b / d;
    Hd(e, t + c * y, n + u * y, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function sc(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, v = u, x = v + d, N = x + b, k = x - v, P = 16;
  let E = a, R = n.x, W = n.y;
  for (let V = 1; V <= P; V++) {
    const T = v + k * V / P, _ = ((v - T) * t.x + (T - y) * n.x) / (v - y), z = ((v - T) * t.y + (T - y) * n.y) / (v - y), B = ((x - T) * n.x + (T - v) * r.x) / (x - v), oe = ((x - T) * n.y + (T - v) * r.y) / (x - v), _e = ((N - T) * r.x + (T - x) * o.x) / (N - x), A = ((N - T) * r.y + (T - x) * o.y) / (N - x), L = ((x - T) * _ + (T - y) * B) / (x - y), se = ((x - T) * z + (T - y) * oe) / (x - y), Pe = ((N - T) * B + (T - v) * _e) / (N - v), de = ((N - T) * oe + (T - v) * A) / (N - v), U = ((x - T) * L + (T - v) * Pe) / (x - v), q = ((x - T) * se + (T - v) * de) / (x - v);
    E = Ds(e, R, W, U, q, E), R = U, W = q;
  }
  return E;
}
function yk(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * c;
  if (d && Math.abs(b - d.prev.x) > c * 0.5 && (b += b < d.prev.x ? c : -c), !d) {
    const N = Cy(o, r, a), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), P = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), E = String((r == null ? void 0 : r.toolKind) || "") === "eraser", R = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", Hd(N, b, u, 1), e.activeStroke = {
      pprev: { x: b, y: u },
      prev: { x: b, y: u },
      lastMidX: b,
      lastMidY: u,
      stampTex: N.stampTex,
      radiusPx: N.radiusPx,
      spacingPx: N.spacingPx,
      aspect: N.aspect,
      angle: N.angle,
      stampKind: N.stampKind,
      scatter: N.scatter,
      latitudeCorrection: N.latitudeCorrection,
      strokeOpacity: k,
      velocityWidthFactor: P,
      distSinceStamp: 0,
      isEraser: E,
      layerKind: R,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const y = (d.prev.x + b) * 0.5, v = (d.prev.y + u) * 0.5;
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
  d.pointCount === 1 ? d.distSinceStamp = Ds(x, d.lastMidX, d.lastMidY, y, v, d.distSinceStamp) : d.distSinceStamp = sc(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: v },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = y, d.lastMidY = v, d.pointCount++, e.displayDirty = !0;
}
function jf(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = ra(t, n), c = {
    descriptor: r,
    committedMask: ra(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: ra(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = ra(t, n);
  let b = null, y = "", v = null;
  function x(A) {
    return {
      actionGroupId: A,
      descriptor: r,
      committedPaint: ra(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function N(A) {
    let L = o.get(A);
    return L || (L = x(A), o.set(A, L)), L;
  }
  function k(A) {
    return y === "mask" ? c : b ? N(b) : u;
  }
  function P(A) {
    var q;
    const L = !v || v.length !== A.length || A.some((D, O) => D !== v[O]), se = y === "paint" && ((q = b ? o.get(b) : u) == null ? void 0 : q.activeStroke) || null;
    let Pe = c.displayDirty || u.displayDirty || L;
    for (const D of A) {
      const O = o.get(D);
      if (O != null && O.displayDirty) {
        Pe = !0;
        break;
      }
    }
    if (se && (Pe = !0), !Pe) return;
    c.displayDirty = !1, u.displayDirty = !1;
    for (const D of A) {
      const O = o.get(D);
      O && (O.displayDirty = !1);
    }
    v = [...A];
    const de = d.ctx;
    jt(d);
    const U = !!(se != null && se.isEraser);
    for (const D of A) {
      const O = o.get(D);
      if (!O) continue;
      const te = b === O.actionGroupId && y === "paint" ? O.activeStroke : null;
      if (U)
        qt = pi(qt, t, n), jt(qt), qt.ctx.drawImage(O.committedPaint.canvas, 0, 0), io(qt.ctx, a.canvas), de.drawImage(qt.canvas, 0, 0);
      else if (de.drawImage(O.committedPaint.canvas, 0, 0), te) {
        const Ee = O.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, te.strokeOpacity ?? 1));
        de.save(), de.globalAlpha = Ee, de.drawImage(a.canvas, 0, 0), de.restore();
      }
    }
  }
  function E(A) {
    var se, Pe, de, U, q;
    for (const D of o.values())
      jt(D.committedPaint), jt(D.currentStroke), D.activeStroke = null, D.displayDirty = !0;
    jt(c.committedMask), jt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, u.displayDirty = !0, v = null;
    const L = [
      ...Array.isArray((Pe = (se = A == null ? void 0 : A.painting) == null ? void 0 : se.paint) == null ? void 0 : Pe.strokes) ? A.painting.paint.strokes : [],
      ...Array.isArray((U = (de = A == null ? void 0 : A.painting) == null ? void 0 : de.mask) == null ? void 0 : U.strokes) ? A.painting.mask.strokes : []
    ];
    for (const D of L) {
      if (((q = D == null ? void 0 : D.targetSpace) == null ? void 0 : q.kind) !== "ERP_GLOBAL") continue;
      const O = String((D == null ? void 0 : D.layerKind) || "paint"), te = String((D == null ? void 0 : D.toolKind) || "pen") === "eraser";
      if (O === "mask") {
        const Ee = c.descriptor;
        te ? (qt = pi(qt, Ee.width, Ee.height), jt(qt), _l(qt.ctx, D, Ee), io(c.committedMask.ctx, qt.canvas)) : _l(c.committedMask.ctx, D, Ee);
        continue;
      }
      if (te) {
        qt = pi(qt, r.width, r.height), jt(qt), _l(qt.ctx, D, r);
        for (const Ee of o.values())
          io(Ee.committedPaint.ctx, qt.canvas), Ee.displayDirty = !0;
      } else {
        const Ee = String((D == null ? void 0 : D.actionGroupId) || "__default__"), Fe = N(Ee), vt = Fe.descriptor;
        _l(Fe.committedPaint.ctx, D, vt), Fe.displayDirty = !0;
      }
    }
    P([...o.keys()]);
  }
  function R(A, L) {
    y = String((A == null ? void 0 : A.layerKind) || "");
    const se = String((A == null ? void 0 : A.toolKind) || "") === "eraser";
    if (y === "mask")
      b = null, jt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const Pe = se ? u : N(String((A == null ? void 0 : A.actionGroupId) || "__default__"));
      b = se ? "" : String((A == null ? void 0 : A.actionGroupId) || "__default__"), jt(Pe.currentStroke), Pe.activeStroke = null, Pe.displayDirty = !0;
    }
  }
  function W(A, L) {
    var O;
    const se = String((A == null ? void 0 : A.layerKind) || "paint"), Pe = String((A == null ? void 0 : A.toolKind) || "") === "eraser", de = se === "mask" ? c : Pe ? u : N(String((A == null ? void 0 : A.actionGroupId) || b || "__default__")), U = de.activeStroke, q = de.descriptor;
    if (U && U.pointCount > 1) {
      const Q = de.currentStroke.ctx;
      Q.globalCompositeOperation = "source-over";
      const te = {
        ctx: Q,
        stampTex: U.stampTex,
        radiusPx: U.radiusPx,
        spacingPx: U.spacingPx,
        desc: q,
        aspect: U.aspect,
        angle: U.angle,
        stampKind: U.stampKind,
        scatter: U.scatter,
        latitudeCorrection: U.latitudeCorrection
      };
      U.pointCount === 2 ? Ds(te, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : sc(te, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    de.lassoPreviewActive && (jt(de.currentStroke), $l(de.currentStroke.ctx, A, q), de.lassoPreviewActive = !1);
    const D = se === "mask" ? c.committedMask : de.committedPaint;
    if (Pe && se === "paint")
      for (const Q of o.values())
        io(Q.committedPaint.ctx, de.currentStroke.canvas), Q.displayDirty = !0;
    else if (Pe)
      io(D.ctx, de.currentStroke.canvas);
    else {
      const Q = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      D.ctx.save(), D.ctx.globalAlpha = Q, D.ctx.drawImage(de.currentStroke.canvas, 0, 0), D.ctx.restore();
    }
    ik() && (String((A == null ? void 0 : A.toolKind) || ""), String((q == null ? void 0 : q.kind) || ""), Number((q == null ? void 0 : q.width) || 0), Number((q == null ? void 0 : q.height) || 0), String(((O = A == null ? void 0 : A.targetSpace) == null ? void 0 : O.viewMode) || ""), Number((A == null ? void 0 : A.aspect) ?? 1), rg(de.currentStroke.canvas), rg(D.canvas), void 0), jt(de.currentStroke), de.activeStroke = null, de.displayDirty = !0, b = null, y = "", P([...o.keys()]);
  }
  function V(A) {
    if (y === "mask")
      jt(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (y === "paint" && !b)
      jt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b) {
      const L = o.get(b);
      L && (jt(L.currentStroke), L.activeStroke = null, L.lassoPreviewActive = !1, L.displayDirty = !0);
    }
    b = null, y = "", P([...o.keys()]);
  }
  function T(A, L) {
    var Pe;
    if (y = String((A == null ? void 0 : A.layerKind) || ""), String(((Pe = A == null ? void 0 : A.geometry) == null ? void 0 : Pe.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        jt(c.currentStroke), $l(c.currentStroke.ctx, A, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const de = String((A == null ? void 0 : A.toolKind) || "") === "eraser", U = de ? u : N(String((A == null ? void 0 : A.actionGroupId) || b || "__default__"));
        b = de ? "" : String((A == null ? void 0 : A.actionGroupId) || b || "__default__"), jt(U.currentStroke), $l(U.currentStroke.ctx, A, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
      }
      P([...o.keys()]);
    }
  }
  function _(A) {
    return P(A ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function z(A) {
    return o.get(String(A)) ?? null;
  }
  function B() {
    return [...o.keys()];
  }
  function oe(A) {
    var q;
    const L = o.get(String(A));
    if (!L) return null;
    const se = y === "paint" && b === L.actionGroupId, Pe = y === "paint" && ((q = b ? o.get(b) : u) == null ? void 0 : q.activeStroke) || null;
    if (Pe != null && Pe.isEraser)
      return $n = pi($n, t, n), jt($n), $n.ctx.drawImage(L.committedPaint.canvas, 0, 0), io($n.ctx, a.canvas), $n.canvas;
    const de = se ? L.activeStroke : null;
    if (!de) return L.committedPaint.canvas;
    $n = pi($n, t, n), jt($n), $n.ctx.drawImage(L.committedPaint.canvas, 0, 0);
    const U = L.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, de.strokeOpacity ?? 1));
    return $n.ctx.save(), $n.ctx.globalAlpha = U, $n.ctx.drawImage(a.canvas, 0, 0), $n.ctx.restore(), $n.canvas;
  }
  function _e() {
    return Ri = pi(Ri, t, n), jt(Ri), Zu(Ri.ctx, c.committedMask.canvas), y === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (qt = pi(qt, t, n), jt(qt), qt.ctx.drawImage(c.committedMask.canvas, 0, 0), io(qt.ctx, a.canvas), jt(Ri), Zu(Ri.ctx, qt.canvas)) : Zu(Ri.ctx, a.canvas)), Ri.canvas;
  }
  return {
    rebuildCommitted: E,
    beginStroke: R,
    appendStrokePoint: yk,
    updateActiveStroke: T,
    commitActiveStroke: W,
    cancelActiveStroke: V,
    getErpTarget: _,
    ensureTarget: k,
    getGroupTarget: z,
    getGroupDisplayCanvas: oe,
    getMaskDisplayCanvas: _e,
    getAllGroupIds: B
  };
}
function Z(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ht(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Gd(e, t) {
  let n = Ht(t) - Ht(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Hf = 3;
function os(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function lc(e, t = 0) {
  const n = os(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = os(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = os(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = os(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(os(t) || 0);
}
function Iy(e) {
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
const lg = Math.PI / 180, cg = 0.12, bk = Hf, vk = 35, _k = 140, ds = 100, wk = 20, ug = 0.8;
function xk(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = Z(Number(e || ds), 1, 179) * lg;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / lg;
}
function Kd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ds })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(W, V = null) {
    u && u(W, V);
  }
  function y(W, V, T = null, _ = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(W || 0), d.drag.lastY = Number(V || 0), d.drag.lastTs = Number(_ || performance.now()), d.drag.pointerId = T, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: T }), !0;
  }
  function v(W, V, T = "pano", _ = performance.now()) {
    if (!d.drag.active) return !1;
    const z = Number(_ || performance.now()), B = Number(W), oe = Number(V), _e = B - d.drag.lastX, A = oe - d.drag.lastY;
    d.drag.lastX = B, d.drag.lastY = oe, d.drag.lastTs = z;
    const L = r() || { x: 1, y: 1 }, se = Number(L.x || 1), Pe = Number(L.y || 1), de = { ...t() };
    let U = 0, q = 0;
    if (T === "unwrap") {
      const O = o() || { w: 1, h: 1 }, Q = Math.max(1, Number(O.w || 1)), te = Math.max(1, Number(O.h || 1)), Ee = _e / Q, Fe = A / te;
      U = -Ee * 360 * se, q = Fe * 180 * Pe;
    } else {
      const O = a() || { w: 0, h: 0 }, Q = Math.max(1, Number(O.w || 0)), te = Math.max(1, Number(O.h || 0));
      if (Q > 1 && te > 1) {
        const Ee = Z(Number(de.fov || ds), 1, 179), Fe = Z(xk(Ee, Q, te), 0.1, 179);
        U = -(_e / Q) * Ee * se, q = A / te * Fe * Pe;
      } else
        U = -_e * cg * se, q = A * cg * Pe;
    }
    de.yaw = Ht(Number(de.yaw || 0) + U), de.pitch = Z(Number(de.pitch || 0) + q, -89.9, 89.9), n(de), d.velHistory.push({ ts: z, yaw: de.yaw, pitch: de.pitch });
    let D = 0;
    for (; D < d.velHistory.length - 1 && d.velHistory[D].ts < z - 100; ) D++;
    return D > 0 && d.velHistory.splice(0, D), d.inertia.active = !1, d.inertia.lastTs = z, c(), b("drag", { phase: "move", dx: _e, dy: A, dYaw: U, dPitch: q }), !0;
  }
  function x(W = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const V = Number(W || performance.now());
    d.drag.lastTs = V;
    const T = d.velHistory.filter((z) => V - z.ts <= 80);
    if (T.length >= 2) {
      const z = T[0], B = T.at(-1), oe = Math.max(1e-3, (B.ts - z.ts) / 1e3);
      let _e = B.yaw - z.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / oe, d.inertia.vy = (B.pitch - z.pitch) / oe;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const _ = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = _ > wk, d.inertia.lastTs = V, b("drag", { phase: "end", speed: _, inertiaActive: d.inertia.active }), !0;
  }
  function N(W = performance.now()) {
    if (!d.inertia.active) return !1;
    const V = Number(W || performance.now()), T = Math.max(1e-3, (V - (d.inertia.lastTs || V)) / 1e3);
    d.inertia.lastTs = V;
    const _ = { ...t() };
    _.yaw = Ht(Number(_.yaw || 0) + d.inertia.vx * T), _.pitch = Z(Number(_.pitch || 0) + d.inertia.vy * T, -89.9, 89.9);
    const z = Math.exp(-5.5 * T);
    return d.inertia.vx *= z, d.inertia.vy *= z, Math.abs(d.inertia.vx) < ug && Math.abs(d.inertia.vy) < ug && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(_), c(), d.inertia.active;
  }
  function k() {
    const W = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], W;
  }
  function P(W) {
    const V = Math.sign(Number(W || 0));
    if (!V) return !1;
    const T = { ...t() }, _ = Number(T.fov || ds);
    return T.fov = Z(_ + V * bk, vk, _k), n(T), c(), b("wheel", { deltaSign: V, fovBefore: _, fovAfter: T.fov }), !0;
  }
  function E(W, V = 0) {
    return P(lc(W, V));
  }
  function R() {
    n({ yaw: 0, pitch: 0, fov: ds }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: v,
    endDrag: x,
    stepInertia: N,
    stopMotion: k,
    applyWheel: P,
    applyWheelEvent: E,
    resetView: R
  };
}
const Nt = Math.PI / 180, fn = 180 / Math.PI;
function br(e, t, n) {
  return { x: e, y: t, z: n };
}
function cc(e, t) {
  return br(e.x + t.x, e.y + t.y, e.z + t.z);
}
function uc(e, t) {
  return br(e.x * t, e.y * t, e.z * t);
}
function Qu(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Wd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return br(e.x / t, e.y / t, e.z / t);
}
function qn(e, t) {
  const n = e * Nt, r = t * Nt, o = Math.cos(r);
  return br(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Pa(e, t, n = 0) {
  const r = Number(e || 0) * Nt, o = Number(t || 0) * Nt, a = n * Nt, c = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), y = Math.cos(a), v = Math.sin(a);
  return {
    right: br(
      c * y - u * b * v,
      d * v,
      -u * y - c * b * v
    ),
    up: br(
      -c * v - u * b * y,
      d * y,
      u * v - c * b * y
    ),
    fwd: br(u * d, b, c * d)
  };
}
function fc(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function kt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Sk() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function kk(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = kt(r.z_index ?? r.zIndex, t.length);
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
function Mk(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Nk(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = kt(e.t, 0), r = kt(e.widthScale, null), o = kt(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = kt(e.u, null), c = kt(e.v, null);
    if (a == null || c == null) return null;
    const u = {
      targetKind: "ERP_GLOBAL",
      u: (a % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, c)),
      t: n
    };
    return r != null && (u.widthScale = Math.max(0, r)), o != null && (u.pressureLike = Math.max(0, o)), u;
  }
  if (t.kind === "FRAME_LOCAL") {
    const a = kt(e.u, null), c = kt(e.v, null);
    if (a == null || c == null) return null;
    const u = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: a,
      v: c,
      t: n
    };
    return r != null && (u.widthScale = Math.max(0, r)), o != null && (u.pressureLike = Math.max(0, o)), u;
  }
  return null;
}
function wl(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = Nk(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function Pk(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = wl(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = wl(e.points, t, 1);
  if (!a) return null;
  const c = wl(e.rawPoints, t, 1), u = wl(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function Ak(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Mk(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = Pk(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = kt(e.size, null), c = kt(e.opacity, null);
  if (a == null || c == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = kt(e.radiusValue, null), y = String(e.radiusModel || "").trim() || null;
  let v = null;
  if (t === "paint") {
    const x = e.color;
    if (!x || typeof x != "object") return null;
    v = {
      r: Math.max(0, Math.min(1, kt(x.r, 0))),
      g: Math.max(0, Math.min(1, kt(x.g, 0))),
      b: Math.max(0, Math.min(1, kt(x.b, 0))),
      a: Math.max(0, Math.min(1, kt(x.a, 1)))
    };
  }
  return {
    id: u,
    actionGroupId: d,
    targetSpace: n,
    layerKind: t,
    toolKind: r,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, a),
    opacity: Math.max(0, Math.min(1, c)),
    hardness: kt(e.hardness, null),
    flow: kt(e.flow, null),
    spacing: kt(e.spacing, null),
    createdAt: Math.trunc(kt(e.createdAt, 0)),
    color: v,
    radiusModel: y,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function fg(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = Ak(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function Ck(e) {
  if (!e || typeof e != "object") return null;
  const t = kt(e.u0, null), n = kt(e.v0, null), r = kt(e.u1, null), o = kt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function Ik(e) {
  const t = e || {};
  return {
    du: kt(t.du, 0) ?? 0,
    dv: kt(t.dv, 0) ?? 0,
    rot_deg: kt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, kt(t.scale, 1) ?? 1)
  };
}
function Ok(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = Ck(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, kt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: Ik(e.transform)
  } : null;
}
function Ek(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = Ok(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function pa(e) {
  const t = Sk();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: kk(e.groups),
    paint: fg(e.paint, "paint"),
    mask: fg(e.mask, "mask"),
    raster_objects: Ek(e.raster_objects)
  };
}
const _r = 1, wr = 179, Gf = 85;
function Gc(e) {
  const t = ((et(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Oy(e, t) {
  let n = et(e, 0) - et(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Ey(e, t, { shiftKey: n = !1 } = {}) {
  let r = et(e, 0) + et(t, 0) * fn;
  return n && (r = Math.round(r / 15) * 15), Gc(r);
}
function et(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Mi(e = {}) {
  const t = Z(et(e.hFOV_deg || 90, 90), _r, wr), n = Z(et(e.vFOV_deg || 60, 60), _r, wr), r = Math.tan(t * Nt * 0.5), o = Math.tan(n * Nt * 0.5);
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
function _o(e, t) {
  const n = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Mi(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function Bd(e, t) {
  const n = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, et(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function Ud(e, t) {
  const n = Math.max(1e-12, et(t, 1)), r = Math.max(1e-6, et((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, et((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = Z(2 * Math.atan(r / (2 * n)) * fn, _r, wr), c = Z(2 * Math.atan(o / (2 * n)) * fn, _r, wr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function Fk(e, t, n) {
  const r = et(e == null ? void 0 : e.x, 0), o = et(e == null ? void 0 : e.y, 0), a = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = Mi(t), d = Math.max(1e-12, et(n, 1)), b = 2 * d * u.tanHalfX, y = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (c - y) * 0.5,
    w: b,
    h: y,
    focalPx: d
  };
}
function Yd(e, t, n = Gf) {
  const r = Math.max(1e-12, et(t, 1)), o = Z(et(n, Gf), 1, 89.999), a = r * Math.tan(o * Nt), c = Math.max(1, et((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, et((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function Fy(e, t, n) {
  const r = Math.max(1e-12, et(t, 1));
  return {
    x: (et(n == null ? void 0 : n.x, 0) - et(e == null ? void 0 : e.x, 0)) / r,
    y: -(et(n == null ? void 0 : n.y, 0) - et(e == null ? void 0 : e.y, 0)) / r
  };
}
function Tk(e, t) {
  const n = Z(et(e, 90), _r, wr), r = Math.max(1e-6, et(t, 1));
  return Z(
    2 * Math.atan(Math.tan(n * Nt * 0.5) / r) * fn,
    _r,
    wr
  );
}
function zl(e, t) {
  const n = Z(et(e, 60), _r, wr), r = Math.max(1e-6, et(t, 1));
  return Z(
    2 * Math.atan(Math.tan(n * Nt * 0.5) * r) * fn,
    _r,
    wr
  );
}
function dg(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Dk(e, t) {
  const n = dg(e, 1), r = dg(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), u = (b, y) => y ? u(y, b % y) : b, d = u(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function wo(e) {
  const t = Z(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Nt, n = Z(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Nt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function po(e) {
  const t = wo(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || Dk(t, 1);
}
function Xd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = po(t), t;
}
function Ty({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(c) ? Z(c, _r, wr) : Z(Math.min(42, et(o, 100) * 0.42), 8, 96);
  return Xd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: et(t, 0),
    pitch_deg: Z(et(n, 0), -89.9, 89.9),
    roll_deg: Gc(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function hi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : po(e);
}
function Dy(e, t) {
  const n = Mi(e), r = et(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * fn, a = 2 * Math.atan(n.tanHalfY * r) * fn;
  return o < _r || o > wr || a < _r || a > wr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function Ly(e, t, n = Hf) {
  const r = Math.sign(et(t, 0)), o = Math.abs(et(n, Hf));
  if (!r || !(o > 0)) return null;
  const a = Mi(e), c = a.hFovDeg + r * o;
  if (c < _r || c > wr) return null;
  const u = Math.tan(c * Nt * 0.5);
  return Dy(e, u / a.tanHalfX);
}
function Ry(e, t) {
  const n = Mi(e), r = Pa(n.yawDeg, n.pitchDeg, n.rollDeg), o = et(t == null ? void 0 : t.x, 0), a = et(t == null ? void 0 : t.y, 0);
  return Wd(cc(cc(r.fwd, uc(r.right, o)), uc(r.up, a)));
}
function Lk(e) {
  return br(e.x, e.y, -e.z);
}
function jl(e) {
  return br(e.x, e.y, -e.z);
}
function Jn(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = Pa(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function Vy(e) {
  const t = jl(br(e[0][0], e[1][0], e[2][0])), n = jl(br(e[0][1], e[1][1], e[2][1])), r = jl(br(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - c * n.x, c * t.x - u * t.z);
  return { yawDeg: o * fn, pitchDeg: a * fn, rollDeg: d * fn };
}
function Ls(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Po(e) {
  const [[t, n, r], [o, a, c], [u, d, b]] = e, y = t + a + b;
  if (y > 0) {
    const x = 0.5 / Math.sqrt(y + 1);
    return { x: (d - c) * x, y: (r - u) * x, z: (o - n) * x, w: 0.25 / x };
  }
  if (t > a && t > b) {
    const x = 2 * Math.sqrt(1 + t - a - b);
    return { x: 0.25 * x, y: (n + o) / x, z: (r + u) / x, w: (d - c) / x };
  }
  if (a > b) {
    const x = 2 * Math.sqrt(1 + a - t - b);
    return { x: (n + o) / x, y: 0.25 * x, z: (c + d) / x, w: (r - u) / x };
  }
  const v = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / v, y: (c + d) / v, z: 0.25 * v, w: (o - n) / v };
}
function xl(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const mo = 1e-6, Kf = 1e-6, Rk = 1e-9;
function Rs(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function Vk(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (c + u);
    Rs(0, n, o, 1, b) < t ? c = b : u = b;
  }
  return Rs(0, r, a, 1, 0.5 * (c + u));
}
function xa(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Sa(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((x) => -x / o), u = r.map((x) => x / a);
  if (c.reduce((x, N, k) => x + N * u[k], 0) < 0) return n.map(() => 0);
  const d = c.map((x, N) => (x * a + u[N] * o) / (o + a)), b = (x) => Math.sqrt(x.reduce((N, k) => N + k * k, 0)), y = 3 * Math.min(b(c), b(u)), v = b(d);
  return v <= y ? d : d.map((x) => x * y / v);
}
function $y(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], u = o.map((y, v) => a[v] - y);
  let d = u;
  xa(e, r) && (d = Sa(t, r, n[r - 1].map((y, v) => y - o[v]), u).map((y) => y * c));
  let b = u;
  return xa(e, r + 1) && (b = Sa(t, r + 1, u.map((y) => -y), n[r + 2].map((y, v) => y - a[v])).map((y) => y * c)), [d.map((y) => y / 3), b.map((y) => -y / 3)];
}
function zy(e, t, n, r, o) {
  const [[a], [c]] = $y(e, t, n.map((u) => [u]), r);
  return Rs(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function $k(e, t, n, r) {
  var b, y;
  const o = e.map((v) => v.value);
  let [a, c] = $y(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, c = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? c;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((v) => Rs(u[v], u[v] + a[v], d[v] + c[v], d[v], r));
}
function dc([e, t, n, r], [o, a, c, u]) {
  return [
    r * o + e * u + t * c - n * a,
    r * a - e * c + t * u + n * o,
    r * c + e * a - t * o + n * u,
    r * u - e * o - t * a - n * c
  ];
}
function zk(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function ef(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function jk([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function Wf(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function sa(e, t) {
  return jk(dc([-e[0], -e[1], -e[2], e[3]], t));
}
function tf(e, t, n) {
  return dc(e, Wf(sa(e, t).map((r) => n * r)));
}
function nf(e, t) {
  const n = zk(e, t);
  if (Math.abs(n) > Kf) return n < 0;
  const [r, o, a] = sa(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > Kf) return c < 0;
  return !1;
}
function Sl(e) {
  const { x: t, y: n, z: r, w: o } = Po(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function Bf(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function Hk(e, t, n, r) {
  const o = Sl(e[n].value);
  let a = Sl(e[n + 1].value);
  nf(o, a) && (a = ef(a));
  const c = t[n + 1] - t[n], u = sa(o, a);
  let d = u;
  if (xa(e, n)) {
    let _ = Sl(e[n - 1].value);
    nf(_, o) && (_ = ef(_)), d = Sa(t, n, sa(o, _), u).map((z) => z * c);
  }
  let b = u;
  if (xa(e, n + 1)) {
    let _ = Sl(e[n + 2].value);
    nf(a, _) && (_ = ef(_)), b = Sa(t, n + 1, sa(a, o), sa(a, _)).map((z) => z * c);
  }
  const y = dc(o, Wf(d.map((_, z) => 0.5 * (_ - u[z])))), v = dc(a, Wf(u.map((_, z) => 0.5 * (_ - b[z])))), [x, N, k, P] = tf(tf(o, a, r), tf(y, v, r), 2 * r * (1 - r)), { yawDeg: E, pitchDeg: R, rollDeg: W } = Vy(Ls({ x, y: N, z: k, w: P })), V = e[n].value, T = e[n + 1].value;
  return {
    yaw_deg: Bf(E, V.yaw_deg, T.yaw_deg, r),
    pitch_deg: R,
    roll_deg: Bf(W, V.roll_deg, T.roll_deg, r)
  };
}
function Vs(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function pc(e) {
  return Math.sqrt(Vs(e, e));
}
function hc(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function jy(e, t) {
  const n = Vs(e, t), r = t.map((c, u) => c - n * e[u]), o = pc(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function ia(e, t) {
  const n = pc(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function kl(e, t, n) {
  return ia(e, jy(e, t).map((r) => n * r));
}
function rf(e, t) {
  const n = hc(e[t].value), r = hc(e[t + 1].value), o = Vs(n, r), a = o < 0 && pc(r.map((d, b) => d - o * n[b])) <= Kf;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = jy(n, r);
  const u = pc(c);
  return [c, c.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function Gk(e, t, n, r) {
  const o = hc(e[n].value), a = hc(e[n + 1].value), [c, u, d] = rf(e, n);
  let b = c, y = u;
  const v = t[n + 1] - t[n];
  xa(e, n) && (b = Sa(t, n, rf(e, n - 1)[1].map((V) => -V), b).map((V) => V * v)), xa(e, n + 1) && (y = Sa(t, n + 1, y.map((V) => -V), rf(e, n + 1)[0]).map((V) => V * v));
  let x, N, k;
  if (d) {
    const V = Math.PI, T = Rs(0, Vs(b, c) / V / 3, V - Vs(y, u) / V / 3, V, r);
    [x, N, k] = ia(o, c.map((_) => T * _ / V));
  } else {
    const V = kl(ia(o, b.map((z) => z / 3)), ia(a, y.map((z) => -z / 3)), r), T = kl(ia(o, b.map((z) => r * z / 3)), V, r), _ = kl(V, ia(a, y.map((z) => -(1 - r) * z / 3)), r);
    [x, N, k] = kl(T, _, r);
  }
  const P = Math.hypot(x, k), E = e[n].value.yaw_deg, R = e[n + 1].value.yaw_deg;
  return { yaw_deg: P <= Rk ? E + (R - E) * r : Bf(Math.atan2(x, k) * 180 / Math.PI, E, R, r), pitch_deg: Math.atan2(N, P) * 180 / Math.PI };
}
function Kk(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = zy(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function Wk(e, t, n, r) {
  return zy(e, t, e.map((o) => o.value), n, r);
}
const Bk = { position: $k, rotation: Hk, direction: Gk, size: Kk };
function Bt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return xl(e[t].value);
  if (n <= r[0].frame + mo) return xl(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - mo) return xl(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + mo; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= mo || c.easing === "hold") return xl(c.value);
  const u = r.map((b) => b.frame), d = Vk(c.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (Bk[t] ?? Wk)(r, u, a, d);
}
function Uf(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Uk(e) {
  return Math.min(1, Math.max(0, e));
}
function Hy(e) {
  return Math.max(1e-6, e);
}
function Gy(e, t) {
  return t - (e.start - e.in);
}
function zi(e, t) {
  return t >= e.start - mo && (e.duration === null || t < e.start + e.duration - mo);
}
function qd(e, t) {
  return {
    position: Bt(e, "position", t),
    ...Bt(e, "rotation", t),
    hFOV_deg: Uf(Bt(e, "fov", t)),
    aspect: e.aspect
  };
}
function mc(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = Gy(o.clip, n);
  return {
    frame: n,
    camera: r == null ? null : qd(r, n),
    scene: {
      active: zi(o.clip, n),
      clip_frame: a,
      position: Bt(o, "position", a),
      ...Bt(o, "rotation", a),
      scale: Hy(Bt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => xo(c, n))
  };
}
function Yk(e, t) {
  if (e.placement === "world")
    return {
      position: Bt(e, "position", t),
      ...Bt(e, "rotation", t),
      scale: Hy(Bt(e, "scale", t))
    };
  const n = Bt(e, "size", t);
  return {
    ...Bt(e, "direction", t),
    roll_deg: Bt(e, "roll", t),
    hFOV_deg: Uf(n.hFOV_deg),
    vFOV_deg: Uf(n.vFOV_deg)
  };
}
function xo(e, t) {
  const n = Gy(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && zi(e.clip, t),
    clip_frame: n,
    ...Yk(e, n),
    opacity: Uk(Bt(e, "opacity", n))
  };
}
const Xk = 2, qk = ["sky", "world"], Yf = ["perspective", "erp"], Jk = ["input", "output", "temp"], Ky = [0.42, 0, 0.58, 1];
function mn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Qt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Kc(e, t) {
  const n = Qt(e, t);
  return n !== null && n > 0 ? n : t;
}
function gr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function So(e) {
  const t = Qt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function pg(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Wy(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Qt(n, null));
  return t.includes(null) ? null : t;
}
function By(e) {
  return Wy(e) || [0, 0, 0];
}
function Uy(e) {
  const t = mn(e) ? e : {};
  return {
    yaw_deg: Qt(t.yaw_deg, 0),
    pitch_deg: gr(Qt(t.pitch_deg, 0), -90, 90),
    roll_deg: Qt(t.roll_deg, 0)
  };
}
function Zk(e) {
  return gr(Qt(e, 90), 0.1, 179);
}
function Qk(e) {
  return Kc(e, 1);
}
function eM(e) {
  const t = mn(e) ? e : {};
  return {
    yaw_deg: Qt(t.yaw_deg, 0),
    pitch_deg: gr(Qt(t.pitch_deg, 0), -90, 90)
  };
}
function tM(e) {
  return Qt(e, 0);
}
function nM(e) {
  const t = mn(e) ? e : {};
  return {
    hFOV_deg: gr(Qt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: gr(Qt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Yy(e) {
  return gr(Qt(e, 1), 0, 1);
}
const Jd = [["position", By], ["rotation", Uy], ["fov", Zk]], Wc = [["position", By], ["rotation", Uy], ["scale", Qk]], Zd = [["direction", eM], ["roll", tM], ["size", nM], ["opacity", Yy]], Qd = [...Wc, ["opacity", Yy]];
function rM(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Qt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...Ky];
}
function iM(e) {
  if (!mn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Wy(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function oM(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!mn(o)) continue;
    const a = So(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: rM(o.easing) }, u = n ? iM(o.handles) : null;
    u && (c.handles = u), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function ep(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = mn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: oM(a.keyframes, o, r === "position") };
  }
  return n;
}
function Xy(e) {
  const t = mn(e) ? e : {}, n = So(t.start), r = So(t.in), o = So(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function aM(e) {
  const t = mn(e) ? e : {}, n = gr(Qt(t.x0, 0), 0, 1), r = gr(Qt(t.y0, 0), 0, 1), o = gr(Qt(t.x1, 1), 0, 1), a = gr(Qt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function sM(e) {
  if (!mn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Jk.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function lM(e) {
  const t = sM(e.source);
  if (!t) return null;
  const n = qk.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: Xy(e.clip),
    visible: pg(e.visible, !0),
    locked: pg(e.locked, !1),
    crop: aM(e.crop),
    ...ep(e, r ? Qd : Zd)
  };
  return r || (o.z_index = So(e.z_index) ?? 0), o;
}
function cM(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = mn(a) ? lM(a) : null;
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
function qy(e) {
  if (!mn(e)) return null;
  const t = Yf.includes(e.projection) ? e.projection : Yf[0];
  return { aspect: Kc(e.aspect, 1), projection: t, ...ep(e, Jd) };
}
function tp() {
  return qy({});
}
function gc(e) {
  const t = mn(e.timeline) ? e.timeline : {}, n = mn(e.scene) ? e.scene : {}, r = So(t.length);
  return {
    version: Xk,
    timeline: {
      fps: Kc(t.fps, 24),
      length: r !== null && r >= 1 ? r : null
    },
    camera: qy(e.camera),
    scene: { clip: Xy(n.clip), ...ep(n, Wc) },
    stickers: cM(e.stickers),
    painting: pa(e.painting),
    painting_layer: mn(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function uM(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!mn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function fM(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!mn(t)) return null;
  const n = gr(Qt(t.hFOV_deg, 90), 1, 179), r = gr(Qt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function dM(e) {
  const t = mn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(mn) : [];
  return n.sort((r, o) => Qt(r.z_index, 0) - Qt(o.z_index, 0)), gc({
    camera: fM(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: uM(r, t),
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
function qr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return gc({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!mn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? dM(t) : gc(t);
}
function Xf(e) {
  var r;
  if (((r = e.camera) == null ? void 0 : r.projection) !== Yf[0]) return JSON.stringify(e);
  const { projection: t, ...n } = e.camera;
  return JSON.stringify({ ...e, camera: n });
}
function of(e, t, n, r, o) {
  const a = {};
  for (const [c] of t)
    a[c] = {
      value: e[c].value,
      keyframes: e[c].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function hg(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function $s(e, t) {
  if (Kc(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (c) => So(c * n), { length: o } = e.timeline, a = hg(e.scene.clip, r);
  return gc({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...of(e.camera, Jd, r, 0, 0) },
    scene: { clip: a.clip, ...of(e.scene, Wc, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((c) => {
      const { clip: u, anchor: d, newAnchor: b } = hg(c.clip, r), y = c.placement === "world" ? Qd : Zd;
      return { ...c, clip: u, ...of(c, y, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function af(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Jy(e) {
  return Array.isArray(e) ? [...e] : e;
}
function np(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= mo);
}
function Zy(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? Jy(e.keyframes[r - 1].easing) : [...Ky];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function On(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = af(o.value, r);
    return;
  }
  const a = np(o, n);
  a ? a.value = af(a.value, r) : Zy(o, n, af(Bt(e, t, n), r));
}
function Ao(e) {
  return e.placement === "world" ? Qd.map(([t]) => t) : e.placement === "sky" ? Zd.map(([t]) => t) : (e.clip ? Wc : Jd).map(([t]) => t);
}
function pM(e, t) {
  for (const n of Ao(e))
    np(e[n], t) || Zy(e[n], t, Bt(e, n, t));
}
function hM(e) {
  const t = Ao(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function mM(e, t) {
  return Ao(e).every((n) => !!np(e[n], t));
}
function gM(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Bt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = u);
  }
}
function yM(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const c of t) {
    const u = e[c], d = u.keyframes.filter((y) => a.has(y.frame)).map((y) => ({ ...y, frame: y.frame + r })), b = new Set(d.map((y) => y.frame));
    u.keyframes = [
      ...u.keyframes.filter((y) => !a.has(y.frame) && !b.has(y.frame)),
      ...d
    ].sort((y, v) => y.frame - v.frame);
  }
  return r;
}
function Qy(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function bM(e, t, n) {
  const r = Qy(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function vM(e, t, n, r) {
  for (const o of Qy(e, t, n)) o.easing = Jy(r);
}
function _M(e, t) {
  e.start = Math.max(0, e.start + t);
}
function wM(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function xM(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function SM(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function yc(e) {
  return Ao(e).map((t) => e[t]);
}
function kM(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? yc(e.camera).some((r) => r.keyframes.length > 0) : tb(e, { camera: n });
}
function eb(e) {
  return yc(e).some((t) => t.keyframes.length > 0) || !!e.clip && !SM(e.clip);
}
function tb(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(eb);
}
function nb(e, { minimum: t, frames: n = 0, openClip: r = null, camera: o = !1 }) {
  let a = e.timeline.length ?? Math.max(t, n);
  if (o && e.camera)
    for (const c of yc(e.camera))
      for (const u of c.keyframes) a = Math.max(a, u.frame + 1);
  for (const c of [e.scene, ...e.stickers]) {
    const { clip: u } = c;
    a = Math.max(a, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const d of yc(c))
      for (const b of d.keyframes) a = Math.max(a, u.start - u.in + b.frame + 1);
  }
  return a;
}
function MM(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let Ml = { text: null, parsed: null };
function Xn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function bc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function NM({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Xn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: pa(null),
    painting_layer: null,
    ui_settings: bc(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function rb(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function PM(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function AM(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function CM(e) {
  return Array.isArray(e) ? e.map((t) => Xd(t)) : [];
}
function IM(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function ib(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = NM(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (Ml.text === o ? a = Ml.parsed : (a = JSON.parse(o), Ml = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: PM(a.assets),
      stickers: AM(a.stickers),
      shots: CM(a.shots),
      painting: pa(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: bc(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (u.ui_settings = bc({ ...u.ui_settings, ...c })), u.output_preset = rb(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Xn(n.coverage), delete u.editor_history, u;
  } catch {
    return Ml = { text: o, parsed: null }, r;
  }
}
function mg(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function OM(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function EM(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function ob(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c, fps: u = null, scene: d = null, camera: b = !1 } = t;
  let y;
  try {
    y = qr(e);
  } catch {
    y = qr(null);
  }
  u && u !== y.timeline.fps && (y = $s(y, u));
  const v = b && y.camera === null;
  if (v && (y = { ...y, camera: tp() }), d) {
    let x = qr(d);
    u && u !== x.timeline.fps && (x = $s(x, u)), y = { ...x, camera: y.camera, cutout_state: y };
  }
  return {
    ...y,
    ...v ? { default_camera: !0 } : {},
    coverage: Xn(o),
    bg_color: r,
    output_preset: rb(n),
    ui_settings: bc(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function FM(e, t) {
  e.cutout_state && (e.cutout_state = $s(e.cutout_state, t));
  const n = $s(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, c] of o)
    if (c) {
      a.clip && (a.clip = c.clip);
      for (const u of Ao(a)) a[u].keyframes = c[u].keyframes;
    }
}
function rp(e, t) {
  const n = xo(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const TM = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function gg(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function DM(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[TM[n]].keyframes.length));
}
function ab(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = gg(n, ["yaw_deg", "pitch_deg"]), a = gg(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && On(e, "direction", r, o), n.rot_deg !== void 0 && On(e, "roll", r, n.rot_deg), Object.keys(a).length && On(e, "size", r, a);
}
const Bc = ["position_x", "position_y", "position_z"], qf = "camera";
function yg(e, t) {
  const n = qd(e, t);
  return Xd({
    id: qf,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: Tk(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function LM(e) {
  return qr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Ht(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function RM(e) {
  return e - 360 * Math.round(e / 360);
}
function VM(e, t, n, r) {
  const o = {};
  for (const a of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[a] !== r[a] && (o[a] = r[a] + RM(n[a] - r[a]));
  Object.keys(o).length && On(e, "rotation", t, o), n.hFOV_deg !== r.hFOV_deg && On(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * Nt * 0.5) / Math.tan(n.vFOV_deg * Nt * 0.5)), n.position.some((a, c) => a !== r.position[c]) && On(e, "position", t, [...n.position]);
}
function $M(e, t) {
  const n = Bt(e, "position", t), r = Bt(e, "rotation", t);
  return {
    ...Object.fromEntries(Bc.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Bt(e, "fov", t)
  };
}
function zM(e, t, n, r) {
  const o = Bc.indexOf(n);
  if (o >= 0) {
    const a = Bt(e, "position", t);
    a[o] = r, On(e, "position", t, a);
  } else n === "hFOV_deg" ? On(e, "fov", t, r) : On(e, "rotation", t, { [n]: r });
}
function jM(e, t, n) {
  On(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function HM(e, t) {
  const n = xo(e, t);
  return {
    ...Object.fromEntries(Bc.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function GM(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = Bc.indexOf(n);
  if (a >= 0) {
    const c = Bt(e, "position", o);
    c[a] = r, On(e, "position", o, c);
  } else n === "scale" ? On(e, "scale", o, r) : n === "opacity" ? On(e, "opacity", o, r / 100) : On(e, "rotation", o, { [n]: r });
}
function KM(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && On(e, o, r, n[o]);
}
function WM(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function BM(e, t, n) {
  return {
    id: e,
    placement: "world",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    position: { value: [...n.position], keyframes: [] },
    rotation: { value: { ...n.rotation }, keyframes: [] },
    scale: { value: n.scale, keyframes: [] },
    opacity: { value: 1, keyframes: [] }
  };
}
function Hl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function sb(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function ip(e, t, n, r) {
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
function UM(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Ht(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function Jf(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function lb(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function cb(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function bg(e) {
  e.default_camera && JSON.stringify(qr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(tp()) && delete e.default_camera;
}
function ub(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = qr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(tp()) && (n.camera = null), Xf(n);
}
function fb(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const o = qr(n);
    if (Xf(o) === t) return !0;
    const { fps: a } = JSON.parse(t).timeline;
    return r && a !== o.timeline.fps && Xf($s(o, a)) === t;
  } catch {
    return !1;
  }
}
const sf = 0.15, YM = 0.01, XM = 1e-3, qM = 0.05, JM = 4, vg = 250, ZM = 16, Kr = 1, QM = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function ir(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Jr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Uc(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function Aa(e, t, n = 0) {
  const r = Jn(e, t, n), o = Jr(r, 2);
  return { right: Jr(r, 0), up: Jr(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function eN(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function Zf(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function tN(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Zf(e, "3dof", n);
}
function nN(e) {
  return ir(e.position, Aa(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Wi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Ns(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function ha(e, t) {
  return Ns(Wi(t, e.position), Aa(e.yaw_deg, e.pitch_deg).forward);
}
function lf(e, t, n = null, r = Kr) {
  if (t) return t;
  const o = Math.max(r, 1e-6) * qM;
  if (n && ha(e, n) > 0) {
    const a = Wi(n, e.position), c = Math.hypot(...a);
    return c >= o ? n : ir(e.position, a, o / c);
  }
  return ir(e.position, Aa(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function _g(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > JM ? !1 : t.time - e.time < vg || e.cost > ZM && t.time - e.wheelTime < vg;
}
function op(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Nt);
  return { tanX: r, tanY: r * n / t };
}
function wg(e, t, n, r, o = nN(e)) {
  const a = Ht(e.yaw_deg + t / r * 360), c = Z(e.pitch_deg - n / r * 360, -89.9, 89.9), u = Jn(e.yaw_deg, e.pitch_deg, 0), d = Jn(a, c, 0), b = Wi(e.position, o), y = [0, 1, 2].map((x) => Ns(Jr(u, x), b)), v = { ...e, yaw_deg: a, pitch_deg: c, position: ir(o, Uc(d, y)) };
  return { ...v, distance: ha(v, o) };
}
function xg(e, t, n, r, o, a = e.distance) {
  const { right: c, up: u } = Aa(e.yaw_deg, e.pitch_deg), d = 2 * a * op(e, r, o).tanY / o;
  return { ...e, position: ir(ir(e.position, c, -t * d), u, n * d), distance: a };
}
function Sg(e, t, n, r = Kr) {
  const o = Wi(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const c = Math.max(r, 1e-6), u = c * YM, d = n > 0 ? Math.min(Math.max(a * sf, u), a - c * XM) : -Math.max(a * sf / (1 - sf), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: ir(e.position, o, d / a) };
  return { ...b, distance: ha(b, t) };
}
function kg(e, t, n, r) {
  const { tanX: o, tanY: a } = op(e, n, r), c = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(c) * 1.1, { forward: d } = Aa(e.yaw_deg, e.pitch_deg);
  return { ...e, position: ir(t.center, d, -u), distance: u };
}
function cf(e, t, n, r = null) {
  return db({
    quaternion: Po(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(op(e, t, n).tanY) * fn,
    aspect: t / n
  }, e.position, e.distance, r);
}
function db(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: Kr }, c = Math.hypot(o[0] - t[0], o[1] - t[1], o[2] - t[2]), u = Math.max(c + a, Math.hypot(...t) + 6 * a);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, a * 1e-4),
    far: u * 2
  };
}
function zs(e, t, n, r) {
  const { right: o, up: a, forward: c } = pb(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * c[0] + u[1] * c[1] + u[2] * c[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * Nt), y = b * e.aspect, v = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], x = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + v / d / y), y: r * 0.5 * (1 - x / d / b), z: d };
}
function pb(e) {
  const t = Ls(e.quaternion), n = Jr(t, 2);
  return { right: Jr(t, 0), up: Jr(t, 1), forward: n.map((r) => -r) };
}
function Mg(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function rN({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function hb(e, t) {
  if (!e || !t.active) return null;
  const n = aN(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: Qf(t),
    itemQuaternion: e.kind === "splat" ? QM : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function iN(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], c = hb(e, a);
  return c && { ...c, id: o.id, opacity: a.opacity, value: a };
}
function oN(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function aN(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function Qf(e) {
  return {
    position: [...e.position],
    quaternion: Po(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function ed(e, t) {
  return ir(e.position, Uc(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function td(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function nd({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function rd(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((c) => c[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((c) => c[a]))), r = t.map((a, c) => (a + n[c]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function sN(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...nd(t).map((a) => ed(e.scene, a)));
  for (const a of n) o.push(...ap(a));
  for (const { box: a, value: c } of r) o.push(...nd(a).map((u) => ed(c, u)));
  return o;
}
function lN(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: Po(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Jn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function ap(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => ir(e.position, Uc(e.rotation, [r, o, 0])));
}
function cN(e, t = null) {
  const { sticker: n, value: r, plane: o, item: a } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : o ? rd(ap(o)) : a != null && a.box ? rd(nd(td(a.kind, a.box)).map((c) => ed(r, c))) : { center: [...r.position], radius: r.scale };
}
const uN = 2, fN = 0.5, dN = 30;
function mb(e, t) {
  const n = Wi(t, e), r = Math.atan2(n[0], -n[2]) * fn, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * fn;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function pN(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * fN : uN, a = t ? [...t] : ir(e.position, Aa(e.yaw_deg, e.pitch_deg).forward, o), c = Math.hypot(...Wi(a, e.position)), u = c > 0 ? mb(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(c, 1e-3) * Math.tan(dN * 0.5 * Nt);
  return { position: a, rotation: u, scale: d };
}
function Ng(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function hN(e) {
  return [0, 1, 2].map((t) => Jr(e, t));
}
function Pg(e, t, n, r) {
  if (e === "translate") return { position: ir(t.position, Wi(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * vN(n.scale, r.scale) / n.scale };
  const o = Ng(Ls(r.quaternion), hN(Ls(n.quaternion))), a = Ng(o, Jn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: c, pitchDeg: u, rollDeg: d } = Vy(a);
  return Math.abs(u) <= mN ? { rotation: { yaw_deg: c + 0, pitch_deg: u, roll_deg: d + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: u, roll_deg: gN(a, t.yaw_deg) } };
}
const mN = 89.9;
function gN(e, t) {
  const n = Jr(e, 0), r = Jr(e, 1), o = Math.cos(t * Nt), a = Math.sin(t * Nt);
  return Math.atan2(a * -r[2] - o * r[0], o * n[0] - a * -n[2]) * fn + 0;
}
const yN = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function bN(e, t, n, r, o) {
  if (!zs(e, t, r, o)) return null;
  const { right: a, up: c, forward: u } = pb(e), d = Wi(t, e.position), b = Ns(d, a), y = Ns(d, c), v = Ns(d, u), x = Math.tan(e.fovY_deg * 0.5 * Nt), N = x * e.aspect, k = Math.hypot(b, y, v) * yN[n] * Math.min(1.9 * x, 7) / 4;
  if (!(v > k)) return { minX: 0, maxX: r, minY: 0, maxY: o };
  const P = (T) => {
    const _ = k * Math.sqrt(T * T + v * v - k * k);
    return [(T * v - _) / (v * v - k * k), (T * v + _) / (v * v - k * k)];
  }, [E, R] = P(b), [W, V] = P(y);
  return {
    minX: r * 0.5 * (1 + E / N),
    maxX: r * 0.5 * (1 + R / N),
    minY: o * 0.5 * (1 - V / x),
    maxY: o * 0.5 * (1 - W / x)
  };
}
function vN(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, c) => Math.abs(c - e) > Math.abs(a - e) ? c : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function _N(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Ag(e, t) {
  const n = Jn(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * Nt) * t, o = r / e.aspect, a = (b, y, v) => ir(e.position, Uc(n, [b, y, v])), c = [a(-r, -o, -t), a(r, -o, -t), a(r, o, -t), a(-r, o, -t)], u = c.map((b) => [e.position, b]);
  c.forEach((b, y) => u.push([b, c[(y + 1) % 4]]));
  const d = [a(-r * 0.5, o * 1.1, -t), a(0, o * 1.5, -t), a(r * 0.5, o * 1.1, -t)];
  return u.push([d[0], d[1]], [d[1], d[2]], [d[2], d[0]]), u;
}
function wN(e, t, n, r, o, a = 6) {
  return t.some(([c, u]) => {
    const d = zs(e, c, r, o), b = zs(e, u, r, o);
    if (!d || !b) return !1;
    const y = b.x - d.x, v = b.y - d.y, x = Z(((n.x - d.x) * y + (n.y - d.y) * v) / Math.max(y * y + v * v, 1e-12), 0, 1);
    return Math.hypot(d.x + y * x - n.x, d.y + v * x - n.y) <= a;
  });
}
function xN(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function SN(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Bt(r, "position", 0)];
  const o = Math.max(t - 1, 0), a = Math.min(n, o + 1);
  return Array.from({ length: a }, (c, u) => {
    const d = a === 1 ? 0 : u * o / (a - 1);
    return Bt(r, "position", d);
  });
}
const Cg = 2048, gb = 0.28;
function yb(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Nt);
  return {
    quaternion: Po(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * fn,
    aspect: r
  };
}
function Ps(e) {
  const t = Mi(e);
  return {
    quaternion: Po(Jn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Ig(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = Yd(n, r), c = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * fn,
      vFOV_deg: 2 * Math.atan(a / r) * fn
    }
  };
}
function bb(e, t, n) {
  const [[r, o, a], [c, u, d], [b, y, v]] = Ls(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * Nt), N = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, P = 1e-4) {
      const E = Lk(k), R = r * E.x + c * E.y + b * E.z, W = o * E.x + u * E.y + y * E.z, V = -(a * E.x + d * E.y + v * E.z), T = Math.max(V, P);
      return {
        x: t * 0.5 * (1 + R / T / N),
        y: n * 0.5 * (1 - W / T / x),
        z: V
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, P) {
      const E = (k / t * 2 - 1) * N, R = (1 - P / n * 2) * x;
      return Wd(jl({
        x: r * E + o * R - a,
        y: c * E + u * R - d,
        z: b * E + y * R - v
      }));
    }
  };
}
function kN(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = mc(e, t), c = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const y = u.source.kind === "port" && !u.visible;
    if (!b.active && !y) return;
    const v = n(u);
    if (!v) return;
    const x = Math.tan(b.hFOV_deg * 0.5 * Nt), N = Math.tan(b.vFOV_deg * 0.5 * Nt), { crop: k } = u;
    c.push({
      kind: "sticker",
      id: u.id,
      media: v.media,
      revision: v.revision,
      source: v.source,
      opacity: y ? gb : b.opacity,
      zIndex: r(u),
      quaternion: Po(Jn(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * x,
        x1: (2 * k.x1 - 1) * x,
        y0: (1 - 2 * k.y1) * N,
        y1: (1 - 2 * k.y0) * N
      }
    });
  });
  for (const u of o) c.push({ kind: "erp", ...u });
  return c.sort((u, d) => u.zIndex - d.zIndex);
}
function vb(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const c of n)
    typeof (c == null ? void 0 : c.id) == "string" && c.id && !a.has(c.id) && a.set(c.id, c);
  return kN(e, t, {
    media: (c) => {
      const u = a.get(c.id);
      return u ? r(u) : null;
    },
    zIndex: (c) => {
      var u;
      return Number(((u = a.get(c.id)) == null ? void 0 : u.z_index) || 0);
    },
    paintLayers: o
  });
}
function MN(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function NN(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = mc(e, t), c = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const y = o.get(u.id), v = y ? r(y) : null;
    if (!v) return;
    const { width: x, height: N } = MN(v.media), k = lN(b, u.crop, x, N);
    k && c.push({
      id: u.id,
      media: v.media,
      revision: v.revision,
      source: v.source,
      opacity: b.opacity,
      position: k.position,
      quaternion: k.quaternion,
      rotation: k.rotation,
      width: k.width,
      height: k.height,
      crop: u.crop
    });
  }), c;
}
const uf = /* @__PURE__ */ new WeakMap();
let PN = 1;
function id(e) {
  return uf.has(e) || uf.set(e, PN++), uf.get(e);
}
function Og(e) {
  return e && typeof e == "object" ? id(e) : e;
}
function Eg({ background: e, layers: t }) {
  return JSON.stringify([
    e && [id(e.media), Og(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, id(n.media), Og(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function AN({ onReady: e, onFailed: t, onUpdate: n = () => {
} }) {
  let r = null, o = !1;
  const a = {
    ready: !1,
    failed: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded.
    render(c) {
      return r ? r.render(c) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(c) {
      return r ? r.renderUnwrap(c) : null;
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(c) {
      return r ? r.sceneBox(c) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(c, u, d, b, y) {
      return r ? r.pick(c, u, d, b, y) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(c, u, d, b, y) {
      return r ? r.pickSticker(c, u, d, b, y) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(c, u, d, b, y, v) {
      return r ? r.gizmoPointer(c, u, d, b, y, v) : null;
    },
    // What pick() hits, as a string that changes with it (pano_three_view.js contentKey).
    contentKey() {
      return r ? r.contentKey() : "";
    },
    dispose() {
      o = !0, r == null || r.dispose(), r = null;
    }
  };
  return import("./.lazy/pano_three_view-DwTlaKAE.js").then((c) => c.$).then((c) => {
    o || (r = c.createThreeView({ onUpdate: n }), a.ready = !0, e());
  }).catch((c) => {
    console.error("[PanoramaStickers] three.js view is unavailable", c), a.failed = !0, t();
  }), a;
}
const _b = "3D view unavailable. Check the browser console.";
function vc(e, t, n) {
  return yb({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function CN(e) {
  let t = null, n = !1, r = !1;
  const o = /* @__PURE__ */ new Set();
  function a() {
    t || n || r || (n = !0, e().then((c) => {
      if (n = !1, !o.size) {
        c.dispose();
        return;
      }
      t = c, o.forEach((u) => u.onChange());
    }).catch((c) => {
      n = !1, o.size && (r = !0, console.error("[PanoramaStickers] three.js view is unavailable", c), o.forEach((u) => u.onChange()));
    }));
  }
  return function(u) {
    const d = { onChange: u };
    let b = !1;
    return o.add(d), {
      get failed() {
        return r;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(y) {
        return b ? null : (a(), t ? t.render({ ...y, owner: d }) : null);
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
const wb = CN(
  () => import("./.lazy/pano_three_view-DwTlaKAE.js").then((e) => e.$).then((e) => e.createThreeView())
), Bi = ["erp_image", "bg_erp", "bg_media"], Gl = ["source"], sp = ["sticker_image", "sticker"], xb = ["scene"], IN = {
  background: [...Bi, ...Gl],
  "external-sticker": [...sp, ...Gl],
  scene: [...xb, ...Gl]
};
function Sb(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function od(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = Sb(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function ON(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function kb(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === c.type);
  }
}
function EN(e, t) {
  const { graph: n, entry: r } = kb(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = Sb(o.get(c == null ? void 0 : c.link));
    u && (a[String((c == null ? void 0 : c.name) || "")] = u);
  }
  return a;
}
const Mb = [...Bi, ...sp, ...xb, ...Gl], FN = 256, oa = /* @__PURE__ */ new Map(), ff = /* @__PURE__ */ new WeakMap();
let Nb = () => null;
function Pb(e) {
  return ff.has(e) || ff.set(e, JSON.stringify(e)), ff.get(e);
}
function TN(e) {
  Nb = e;
}
function _c(e, t) {
  const n = Pb(e);
  oa.delete(n), oa.set(n, t), oa.size > FN && oa.delete(oa.keys().next().value);
}
function xn(e, t) {
  var a;
  const n = e ? Nb(e) : null;
  if (!n) return !0;
  const r = od(e);
  let o = oa.get(Pb(n));
  if (o)
    _c(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((c) => Mb.includes(c == null ? void 0 : c.name)))) return !0;
    _c(n, r), o = r;
  }
  return IN[t].every((c) => o[c] === r[c]);
}
const wc = /* @__PURE__ */ new WeakSet();
async function ad(e, t) {
  if (wc.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && wc.add(e), n.ok && r !== void 0 ? r : null;
}
function Ab(e, t) {
  var a, c, u, d, b;
  const n = (u = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = kb(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((y) => Mb.includes(y == null ? void 0 : y.name))) ? null : { output: o, inputs: EN(n, t) };
}
const Kl = /* @__PURE__ */ new Map();
function DN(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Kl.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await ad(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = Ab(o, a);
        c && _c(c.output, c.inputs);
      }
    });
}
const LN = 5;
function RN(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${LN}`, r = ad(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, ad(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, u) {
      var b, y, v, x;
      const d = String(c.id);
      for (const { id: N } of await r) {
        if (!u()) return null;
        const k = await a(N);
        if ((b = k == null ? void 0 : k.outputs) != null && b[d])
          return ((x = (v = (y = k.workflow) == null ? void 0 : y.prompt) == null ? void 0 : v[d]) == null ? void 0 : x.class_type) !== c.comfyClass ? null : Ab(k, d);
      }
      return null;
    }
  };
}
function VN(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let qo = null;
async function $N(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || wc.has(n) || (u = Kl.get(o)) != null && u.has(r) || VN(t)) return null;
  (qo == null ? void 0 : qo.workflowId) !== o && (qo = { workflowId: o, history: RN(n, o) }, queueMicrotask(() => {
    qo = null;
  }));
  const c = await qo.history.lastNodeOutput(e, a);
  return a() ? c ? (_c(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (wc.has(n) || Kl.set(o, (Kl.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Fg(e, t, n, r = Bi) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const Tg = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Wl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Tg.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Tg.test(String((e == null ? void 0 : e.filename) || ""));
}
const df = /* @__PURE__ */ new WeakMap();
function zN(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function sd(e) {
  return zN(e) ? (df.has(e) || df.set(e, Math.random().toString(36).slice(2, 10)), df.get(e)) : "run";
}
function Cb(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function jN(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const u of c) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, y) => y)));
    }
  };
  return o(e, t), r;
}
function lp(e, t = [], n = null) {
  var o;
  const r = typeof n == "function" ? n : (a) => String((a == null ? void 0 : a.src) || (a == null ? void 0 : a.url) || a || "").trim();
  for (const a of t) {
    const c = [(o = e == null ? void 0 : e.ui) == null ? void 0 : o[a], e == null ? void 0 : e[a]];
    for (const u of c)
      if (Array.isArray(u))
        for (const d of u) {
          const b = r(d);
          if (b && (/\.mp4(\?|$)/i.test(b) || String((d == null ? void 0 : d.format) || "").toLowerCase() === "video/mp4"))
            return b;
        }
  }
  return "";
}
function HN({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var E;
  const r = ((E = e == null ? void 0 : e.createElement) == null ? void 0 : E.call(e, "video")) || null;
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let a = !1, c = 0;
  const u = typeof r.requestVideoFrameCallback == "function", d = () => {
    a || !u || c || r.paused || r.ended || (c = r.requestVideoFrameCallback(() => {
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
  }, y = () => o(), v = () => {
    o(), d();
  }, x = () => o();
  let N = !1;
  const k = () => {
    N = !0, o();
  };
  return r.muted = !0, r.loop = !0, r.autoplay = !0, r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("canplay", b, { once: !0 }), u || r.addEventListener("timeupdate", y), r.addEventListener("play", v), r.addEventListener("pause", x), r.addEventListener("error", k), r.src = t, r.load(), { video: r, destroy: () => {
    var R, W;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", y), r.removeEventListener("play", v), r.removeEventListener("pause", x), r.removeEventListener("error", k), r.pause(), (R = r.removeAttribute) == null || R.call(r, "src"), (W = r.load) == null || W.call(r));
  }, failed: () => N };
}
function oo(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function GN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Dg(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, u = c ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(c.origin_slot ?? 0)) : null;
      u != null && u.outputNode && (r = u.outputNode);
    } catch {
    }
  return !r && n != null && (r = GN(e == null ? void 0 : e.graph, n)), r;
}
function KN(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function WN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function BN(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function Ib({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (_) => {
    if (!_) return "";
    if (typeof _ == "string") return String(_ || "").trim();
    if (Array.isArray(_)) {
      if (_.length === 0) return "";
      if (_.length === 1) return o(_[0]);
      const z = String(_[0] || "").trim();
      if (z)
        return oo(t, {
          filename: z,
          subfolder: String(_[1] || "").trim(),
          type: String(_[2] || "output").trim() || "output"
        });
      for (const B of _) {
        const oe = o(B);
        if (oe) return oe;
      }
      return "";
    }
    return typeof (_ == null ? void 0 : _.src) == "string" && _.src ? _.src : typeof (_ == null ? void 0 : _.url) == "string" && _.url ? _.url : oo(t, _);
  }, a = (_) => {
    if (!_ || typeof _ != "object") return "";
    const z = String(_.type || "").trim().toLowerCase();
    if (z === "dataurl") return String(_.value || "");
    if (z !== "comfy_image") return "";
    const B = String(_.filename || "").trim();
    return B ? oo(t, {
      filename: B,
      subfolder: String(_.subfolder || ""),
      type: String(_.storage || "input")
    }) : "";
  }, c = (_) => {
    const z = e == null ? void 0 : e.nodeOutputs;
    if (!z || _ == null) return null;
    const B = String(_);
    return z instanceof Map ? z.get(_) || z.get(B) || z.get(Number(B)) || null : z[_] || z[B] || null;
  }, u = (_, z) => {
    var oe;
    const B = c(_ == null ? void 0 : _.id);
    return Array.isArray((oe = B == null ? void 0 : B.ui) == null ? void 0 : oe[z]) ? B.ui[z] : Array.isArray(B == null ? void 0 : B[z]) ? B[z] : [];
  }, d = (_, z) => {
    const B = c(_ == null ? void 0 : _.id);
    return B != null && B.ui && Object.prototype.hasOwnProperty.call(B.ui, z) ? B.ui[z] : B && Object.prototype.hasOwnProperty.call(B, z) ? B[z] : null;
  }, b = (_, z) => {
    const B = d(_, "pano_sticker_input_state_hash"), oe = Array.isArray(B) ? B[0] : B;
    return String(oe ?? "").trim() || BN(z);
  }, y = (_) => {
    const z = [], B = /* @__PURE__ */ new Set();
    for (const oe of _ || []) {
      const _e = o(oe);
      !_e || B.has(_e) || (B.add(_e), z.push(_e));
    }
    return z;
  }, v = (_, z) => {
    var _e;
    const B = [];
    Array.isArray(_ == null ? void 0 : _.images) && _.images.length && B.push(_.images), Array.isArray((_e = _ == null ? void 0 : _.ui) == null ? void 0 : _e.images) && _.ui.images.length && B.push(_.ui.images);
    const oe = [];
    for (const A of B)
      z >= 0 && z < A.length && oe.push(A[z]), oe.push(...A);
    return oe;
  }, x = (_, z) => {
    var Q;
    const B = String(z || "").trim();
    if (!B) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : []).findIndex((te) => String((te == null ? void 0 : te.name) || "") === B);
    if (_e < 0) return { src: "", sourceType: "", inputName: B };
    const A = _.graph ? _.getInputLink(_e) : null;
    if ((A == null ? void 0 : A.origin_id) == null) return { src: "", sourceType: "", inputName: B };
    const L = A.origin_id, se = Dg(_, _e, L);
    if (!se) return { src: "", sourceType: "", inputName: B };
    const Pe = Number(A.origin_slot ?? 0);
    let de = [];
    try {
      de = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(se) || [] : [];
    } catch {
      de = [];
    }
    if (Array.isArray(de) && de.length) {
      const te = [];
      Pe >= 0 && Pe < de.length && te.push(de[Pe]), te.push(...de);
      const Ee = y(te.filter((Fe) => !Wl(Fe)));
      if (Ee.length)
        return { src: Ee[0], srcCandidates: Ee, sourceType: "appNodeImageUrls", inputName: B };
    }
    const U = c((se == null ? void 0 : se.id) ?? L), q = y(v(U, Pe).filter((te) => !Wl(te))).map((te) => `${te}&pano_src=${sd(U)}`);
    if (q.length)
      return { src: q[0], srcCandidates: q, sourceType: "nodeOutputs", inputName: B };
    const D = Array.isArray(se == null ? void 0 : se.imgs) ? se.imgs : [];
    if (D.length) {
      const te = [];
      Pe >= 0 && Pe < D.length && te.push(D[Pe]), te.push(...D);
      const Ee = y(te);
      if (Ee.length)
        return { src: Ee[0], srcCandidates: Ee, sourceType: "nodeImgs", inputName: B };
    }
    const O = (Q = se == null ? void 0 : se.widgets) == null ? void 0 : Q.find((te) => String((te == null ? void 0 : te.name) || "").toLowerCase() === "image");
    if (O) {
      let te = o(O.value);
      if (te && !te.includes("/") && !te.includes(":") && (se.comfyClass === "LoadImage" || se.type === "LoadImage") && (te = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(te)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(te)}&type=input&subfolder=`), te) return { src: te, sourceType: "widget", inputName: B };
    }
    return { src: "", sourceType: "", inputName: B };
  }, N = (_, z = []) => {
    var oe;
    const B = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : [];
    for (const _e of z) {
      const A = B.findIndex((de) => String((de == null ? void 0 : de.name) || "") === _e), L = A >= 0 && _.graph ? _.getInputLink(A) : null;
      if ((L == null ? void 0 : L.origin_id) == null) continue;
      const se = c(((oe = Dg(_, A, L.origin_id)) == null ? void 0 : oe.id) ?? L.origin_id), Pe = (Array.isArray(se == null ? void 0 : se.images) ? se.images : []).find(Wl);
      return Pe ? `${oo(t, Pe)}&pano_src=${sd(se)}` : "";
    }
    return "";
  }, k = (_, z = []) => {
    const B = Array.isArray(z) ? z : [z];
    for (const oe of B) {
      const _e = x(_, oe);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, P = (_) => {
    const z = String(_ || "").trim();
    if (!z) return [];
    if (KN(z)) return [z];
    const { filename: B, subfolder: oe } = WN(z);
    return B ? y([
      oo(t, { filename: B, subfolder: oe, type: "temp" }),
      oo(t, { filename: B, subfolder: oe, type: "output" }),
      oo(t, { filename: B, subfolder: oe, type: "input" }),
      z
    ]) : [z];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (_) => {
      var z, B;
      try {
        (B = (z = _ == null ? void 0 : _.__panoLinkedInputImageCache) == null ? void 0 : z.forEach) == null || B.call(z, (oe, _e, A) => {
          var L;
          oe != null && oe.img && ((L = r == null ? void 0 : r.isImageLoadFailed) != null && L.call(r, oe.img)) && A.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (_, z) => {
      var B;
      (B = _ == null ? void 0 : _.delete) == null || B.call(_, `__ui__${String(z || "")}`);
    },
    linkedValue: (_, z) => {
      var L, se, Pe, de;
      const B = String(z || ""), oe = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === B) : -1, _e = oe >= 0 && _.graph ? _.getInputLink(oe) : null;
      if (_e) {
        const U = c(_e.origin_id), q = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (L = U == null ? void 0 : U.data) == null ? void 0 : L.output,
          (se = U == null ? void 0 : U.data) == null ? void 0 : se.result,
          (Pe = U == null ? void 0 : U.ui) == null ? void 0 : Pe.output,
          (de = U == null ? void 0 : U.ui) == null ? void 0 : de.result
        ];
        for (const D of q) {
          if (!Array.isArray(D)) continue;
          const O = D[Number(_e.origin_slot || 0)];
          if (typeof O == "string" && O.trim()) return O;
        }
      }
      const A = Array.isArray(_ == null ? void 0 : _.widgets) ? _.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === B) : null;
      return String((A == null ? void 0 : A.value) || "");
    },
    linkedVideoFile: N,
    loadPreferredExactLinkedImage: (_, z = [], B = null, oe = "") => {
      var vt;
      const _e = Array.isArray(z) ? z : [z], A = k(_, _e), se = (Array.isArray(A == null ? void 0 : A.srcCandidates) && A.srcCandidates.length ? A.srcCandidates : [A == null ? void 0 : A.src]).map((ht) => String(ht || "").trim()).filter(Boolean);
      if (!se.length) return null;
      const Pe = y(se.flatMap((ht) => P(ht)));
      if (!Pe.length) return null;
      _.__panoLinkedInputImageCache || (_.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const de = String(oe || _e.join("|") || "image_exact"), U = se.join(`
`), q = _.__panoLinkedInputImageCache.get(de);
      if (q && q.srcRaw === U && q.img) return q.img;
      const D = n || globalThis.Image;
      if (typeof D != "function") return null;
      const O = new D();
      (vt = r == null ? void 0 : r.markImageLoading) == null || vt.call(r, O, U);
      const Q = { srcRaw: U, resolvedSrc: "", img: O };
      _.__panoLinkedInputImageCache.set(de, Q);
      let te = -1;
      const Ee = (ht) => {
        var $, gt, Ae;
        ht === "ready" ? ($ = r == null ? void 0 : r.markImageReady) == null || $.call(r, O, U) : (gt = r == null ? void 0 : r.markImageFailed) == null || gt.call(r, O, U), B == null || B(O), (Ae = _.setDirtyCanvas) == null || Ae.call(_, !0, !0);
      }, Fe = () => {
        if (te += 1, te >= Pe.length) {
          Ee("failed");
          return;
        }
        Q.resolvedSrc = Pe[te], O.src = Q.resolvedSrc;
      };
      return O.onload = () => Ee("ready"), O.onerror = () => {
        if (te + 1 < Pe.length) {
          Fe();
          return;
        }
        Ee("failed");
      }, Fe(), O;
    },
    output: c,
    resolvePreferredExactLinkedSource: k,
    source: o,
    uiImage: (_, z, B, oe = null) => {
      var U, q, D;
      const _e = u(_, z)[0] || null, A = o(_e);
      if (!A) return null;
      const L = `__ui__${z}`, se = (U = B == null ? void 0 : B.get) == null ? void 0 : U.call(B, L);
      if (se && se.__panoSrc === A) return se;
      const Pe = n || globalThis.Image;
      if (typeof Pe != "function") return null;
      const de = new Pe();
      return de.__panoSrc = A, (q = r == null ? void 0 : r.markImageLoading) == null || q.call(r, de, A), de.onload = () => {
        var O;
        (O = r == null ? void 0 : r.markImageReady) == null || O.call(r, de, A), oe == null || oe(de);
      }, de.onerror = () => {
        var O;
        (O = r == null ? void 0 : r.markImageFailed) == null || O.call(r, de, A), oe == null || oe(de);
      }, de.src = A, (D = B == null ? void 0 : B.set) == null || D.call(B, L, de), de;
    },
    uiList: u,
    uiValue: d
  };
}
const UN = 1e-3;
function Ob(e, t, n, r) {
  if (!zi(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const c = Math.floor(o + 0.5);
    return c >= 0 && c < r.frames ? (c + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(UN / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function Eb(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function YN(e, t) {
  return Math.floor(e * t.fps);
}
function Fb(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Lg = 4;
function Tb({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(c) {
    return r.has(c) || r.set(c, e(n[c], t)), r.get(c);
  }
  return {
    picture(c, u, d, b) {
      if ((c.length !== n.length || c.some((x, N) => x !== n[N])) && (n = c, r.clear(), o = null), u === null) return null;
      const y = YN(u, d);
      for (let x = y; x < Math.min(n.length, y + Lg + 1); x += 1) a(x);
      for (const x of r.keys())
        (x < y || x > y + Lg) && x !== o && r.delete(x);
      const v = r.get(y);
      return v != null && v.complete && v.naturalWidth > 0 && (o !== null && o !== y && r.delete(o), o = y), o === null ? b : r.get(o);
    }
  };
}
function Db({
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
  let c = null, u = !1, d = !1;
  const b = () => c || e(), y = () => a(n(b()));
  return {
    model: () => n(b()),
    refresh() {
      return d ? this.model() : (y(), this.model());
    },
    beginGesture() {
      return d || c ? !1 : (c = e(), u = !1, y(), !0);
    },
    updateGesture(v) {
      if (d) return !1;
      c || this.beginGesture();
      const x = t(c, v);
      return x.changed ? (c = x.state, u = !0, r(c), y(), !0) : !1;
    },
    hasGestureChanges() {
      return c != null && u;
    },
    commitGesture() {
      if (d || !c) return !1;
      const v = u;
      return v && o(c), c = null, u = !1, r(null), y(), v;
    },
    cancelGesture() {
      return d || !c ? !1 : (c = null, u = !1, r(null), y(), !0);
    },
    apply(v) {
      if (d) return !1;
      c && this.commitGesture();
      const x = t(e(), v);
      return x.changed ? (o(x.state), y(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const v = c != null;
      c = null, u = !1, v && r(null);
    }
  };
}
const Bl = "sticker_image_1", Lb = "external_image", ka = 0;
function ma(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function pf(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Gi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function ld(e, t = ka) {
  return (e == null ? void 0 : e.version) !== 2 ? Gi(e) : Gi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: xo(n, t).active,
    external: n.source.kind === "port",
    ...rp(n, t)
  }));
}
function cp(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Gi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Rb(e) {
  return String((e == null ? void 0 : e.id) || "") === Bl || String((e == null ? void 0 : e.source_kind) || "") === Lb;
}
function up(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Rb(t);
}
const Vb = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function $b(e) {
  return !Rb(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Vb.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function zb(e) {
  const t = $b(e);
  return t ? Vb.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function jb(e, t = {}) {
  var T, _, z;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((B) => String((B == null ? void 0 : B.id) || "") === Bl);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const B = String(((T = e.active) == null ? void 0 : T.selected_sticker_id) || "") === Bl;
    return {
      state: {
        ...e,
        stickers: n.filter((oe, _e) => _e !== r),
        active: B ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, u = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), y = d > 0 && b > 0, v = Math.max(1, d), x = Math.max(1, b), N = t.pose && typeof t.pose == "object" ? t.pose : {}, k = u ? N.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || N.hFOV_deg || 30, P = Math.min(179, Math.max(0.1, Number(k)));
  if (!u) {
    if (!y) return { state: e, changed: !1 };
    const B = ma(P, v, x), oe = Number(((_ = c == null ? void 0 : c.initial_pose) == null ? void 0 : _.hFOV_deg) ?? P), _e = ma(oe, v, x), A = Number(((z = c == null ? void 0 : c.initial_pose) == null ? void 0 : z.vFOV_deg) ?? _e);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - B) <= 1e-6 && Math.abs(A - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((L, se) => se === r ? {
          ...L,
          vFOV_deg: B,
          initial_pose: L.initial_pose && typeof L.initial_pose == "object" ? { ...L.initial_pose, vFOV_deg: _e } : L.initial_pose
        } : L)
      },
      changed: !0
    };
  }
  const E = n.reduce((B, oe) => Math.max(B, Number((oe == null ? void 0 : oe.z_index) || 0)), -1), R = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: P,
    vFOV_deg: y ? ma(P, v, x) : Number(N.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || P),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, W = {
    ...c || {},
    id: Bl,
    source_kind: Lb,
    source_link_id: o,
    source_state_hash: a,
    ...R,
    initial_pose: { ...R },
    visible: !0,
    z_index: E + 1
  }, V = r >= 0 ? n.map((B, oe) => oe === r ? W : B) : [...n, W];
  return { state: { ...e, stickers: V }, changed: !0 };
}
function Rg(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const XN = ["IMAGE", "VIDEO"];
function Vg(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => XN.includes(n)) ? "2d" : null;
}
function qN(e, t) {
  var o, a, c, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((y) => (y == null ? void 0 : y.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? Vg(r.type) ?? Vg((b = (d = (u = (c = (a = e.graph).getNodeById) == null ? void 0 : c.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function Hb(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Rg(e, "sticker"),
    awaitingPose: !t && (Rg(e, "sticker_state") || qN(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function $g(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return qr({ version: 2, stickers: [n] }).stickers[0];
}
function Gb(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var P;
  const c = e.stickers.findIndex((E) => up(e, E)), u = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const E = ((P = e.active) == null ? void 0 : P.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((R, W) => W !== c),
        active: E ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const E = { ...$g(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map((R, W) => W === c ? E : R) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const E = [u.size.value, ...u.size.keyframes.map((V) => V.value)], R = E.map((V) => ma(V.hFOV_deg, o, a));
    if (E.every((V, T) => Math.abs(V.vFOV_deg - R[T]) <= 1e-6)) return { state: e, changed: !1 };
    const W = {
      value: { ...u.size.value, vFOV_deg: R[0] },
      keyframes: u.size.keyframes.map((V, T) => ({ ...V, value: { ...V.value, vFOV_deg: R[T + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((V, T) => T === c ? { ...V, size: W } : V) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((E) => E.id));
  let y = 1;
  for (; b.has(`sticker_${y}`); ) y += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, $g(`sticker_${y}`, r)] }, changed: !0 };
  const v = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = (E) => d ? ma(E, o, a) : E, N = ip(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: v,
    vFOV_deg: x(v)
  }, Gi(e).reduce((E, R) => Math.max(E, R.z_index), -1) + 1), k = (r == null ? void 0 : r.keyframes) ?? {};
  return N.direction.keyframes = k.direction ?? [], N.roll.keyframes = k.roll ?? [], N.size.keyframes = (k.size ?? []).map((E) => ({ ...E, value: { ...E.value, vFOV_deg: x(E.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, N] }, changed: !0 };
}
function fp(e) {
  const t = Gi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: pf(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: pf(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: pf(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function Kb(e) {
  const t = cp(e), n = up(e, t), r = Gi(e).some((u) => u && u.visible !== !1), o = fp(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: zb(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function JN(e) {
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
function zg(e, t) {
  const n = cp(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = JN(e), o = String(n.id || ""), a = fp(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(c, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function ZN(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function QN(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return jb(e, t.value);
  if (t.type === "sync-port") return Gb(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = fp(e).reduce((x, N) => Math.max(x, Number(N.z_index || 0)), -1), b = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ma(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, ip(a, Hl(o.asset), y, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const v = { id: a, asset_id: c, ...y, z_index: d + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [c]: o.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], v],
        active: { ...e.active || {}, selected_sticker_id: a }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const o = String(t.id || "");
    return !o || !Gi(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = cp(e);
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
    const o = $b(n);
    return !o || !zb(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return zg(e, "front");
  if (t.type === "send-back") return zg(e, "back");
  if (t.type === "delete-selected") {
    if (up(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Gi({ ...e, stickers: o })[0], c = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return e.version !== 2 && (u.assets = ZN(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? rp(n, ka) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(c[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = DM(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return ab(b, ka, d), { state: { ...e, stickers: e.stickers.map((y) => y === n ? b : y) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((d) => d === n ? { ...d, ...u } : d)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function e2(e = {}) {
  return Db({
    ...e,
    reduce: QN,
    projectModel: Kb
  });
}
const cd = 2;
function uo(e, t) {
  return Math.floor(e * t + 0.5);
}
function t2(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Wb({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: c, onChange: u }) {
  let d = 0, b = !1, y = !1, v = { name: "idle" }, x = [];
  const N = () => b && !y, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function P() {
    for (const Q of x) Q();
    x = [];
  }
  function E(Q, te = {}) {
    return P(), v = { name: Q, ...te }, u(), v;
  }
  function R(Q, te, Ee) {
    const Fe = () => {
      v === Q && Ee();
    };
    e.addEventListener(te, Fe), x.push(() => e.removeEventListener(te, Fe));
  }
  function W(Q, te) {
    let Ee = t.requestFrame(function Fe(vt) {
      v === Q && (te(vt), v === Q && (Ee = t.requestFrame(Fe)));
    });
    x.push(() => t.cancelFrame(Ee));
  }
  function V(Q) {
    d = Q, a(d);
  }
  function T() {
    return E(y ? "error" : "idle");
  }
  function _() {
    y = !0, T();
  }
  function z() {
    const { seekable: Q } = e, te = Q != null && Q.length ? Q.end(Q.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(te) ? te : 1 / 0));
  }
  function B(Q) {
    if (!N()) return Q === "play" ? se() : T();
    if (e.readyState < cd) {
      const te = E("loading", { then: Q });
      return R(te, "loadeddata", () => B(te.then)), R(te, "error", _), te;
    }
    return Q === "play" && d / n() >= Number(e.duration) ? se() : oe(Q, !1);
  }
  function oe(Q, te) {
    const Ee = z();
    if (!e.ended && uo(Number(e.currentTime), n()) === uo(Ee, n())) return _e(Q);
    const Fe = E("seeking", { then: Q, frame: d, retried: te });
    return R(Fe, "seeked", () => {
      const vt = uo(Number(e.currentTime), n()) === uo(z(), n()), ht = d === Fe.frame;
      vt || ht && Fe.retried ? _e(Fe.then) : oe(Fe.then, ht);
    }), R(Fe, "error", _), e.currentTime = Ee, Fe;
  }
  function _e(Q) {
    return Q === "play" ? A() : (c(), T());
  }
  function A() {
    const Q = E("playingVideo", { shown: !1 });
    if (R(Q, "pause", () => e.ended ? L() : U()), R(Q, "ended", L), R(Q, "error", _), o() && uo(Number(e.duration), n()) >= r()) {
      const Ee = e.loop;
      e.loop = !0, x.push(() => {
        e.loop = Ee;
      });
    }
    const te = (Ee, Fe) => {
      Fe && !Q.shown && (Q.shown = !0, u()), Pe(uo(Ee, n()));
    };
    if (k()) {
      let Ee = e.requestVideoFrameCallback(function Fe(vt, ht) {
        v === Q && (te(Number(ht.mediaTime), !0), v === Q && (Ee = e.requestVideoFrameCallback(Fe)));
      });
      x.push(() => {
        var Fe;
        return (Fe = e.cancelVideoFrameCallback) == null ? void 0 : Fe.call(e, Ee);
      });
    } else
      W(Q, () => te(Number(e.currentTime), e.readyState >= cd));
    return Promise.resolve(e.play()).catch(() => {
      v === Q && U();
    }), Q;
  }
  function L() {
    c(), se();
  }
  function se() {
    const Q = E("playingClock", { startTs: t.now(), startFrame: d });
    return W(Q, (te) => Pe(Q.startFrame + Math.floor((te - Q.startTs) / 1e3 * n()))), Q;
  }
  function Pe(Q) {
    if (Q < r()) {
      V(Q);
      return;
    }
    if (!o()) {
      de(r() - 1);
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), V(0), B("play");
  }
  function de(Q) {
    v.name === "playingVideo" ? (P(), e.pause(), V(Math.max(0, Q)), c()) : V(Math.max(0, Q)), B("still");
  }
  function U() {
    if (v.name === "loading" || v.name === "seeking")
      v.then = "still", u();
    else if (v.name === "playingVideo") {
      P(), e.pause();
      const Q = t2(Number(e.currentTime), n());
      V(Math.min(Q, r() - 1)), c(), d === Q ? T() : B("still");
    } else v.name === "playingClock" && de(Math.min(d, r() - 1));
  }
  function q() {
    if (!O()) {
      if (d >= r() - 1 && V(0), v.name === "loading" || v.name === "seeking") {
        v.then = "play", u();
        return;
      }
      B("play");
    }
  }
  function D(Q) {
    const te = Math.max(0, Math.round(Q));
    if (v.name === "loading" || v.name === "seeking") {
      v.then = "still", V(te), u();
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), V(te), B("still");
  }
  function O() {
    return v.name === "playingVideo" || v.name === "playingClock" || v.then === "play";
  }
  return {
    get frame() {
      return d;
    },
    get state() {
      return v.name;
    },
    get playing() {
      return O();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return v.name === "playingVideo" || v.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return v.name === "playingVideo" && v.shown;
    },
    play: q,
    stop: U,
    seek: D,
    toggle() {
      O() ? U() : q();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(Q) {
      P(), b = !!Q, y = !1, B("still");
    },
    dispose() {
      P(), b = !1, v = { name: "idle" };
    }
  };
}
function Bb({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, c = null, u = null, d = !1;
  function b(P) {
    u = P, t();
  }
  function y(P) {
    c = P, e.currentTime = P;
  }
  function v() {
    const P = d;
    x(), d !== P && n();
  }
  function x() {
    if (!r || o || e.readyState < cd) return;
    const { time: P, playing: E, fps: R } = a;
    if (P === null) {
      e.pause(), d = !1;
      return;
    }
    if (E) {
      if (c !== null) return;
      const W = Number(e.duration), V = Number.isFinite(W) ? Math.min(P, W) : P, T = Math.abs(Number(e.currentTime) - V) > 1.5 / R;
      if (e.ended && !T) return;
      T && y(V), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(c !== null || u === P) && (Number(e.currentTime) === P ? b(P) : y(P));
  }
  const N = {
    loadeddata: v,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: v,
    seeked: () => {
      const P = c;
      c = null, !a.playing && P === a.time ? b(P) : v();
    },
    playing: () => {
      !a.playing || d || (d = !0, n());
    },
    error: () => {
      r && (o = !0, n());
    }
  };
  e.muted = !0;
  for (const [P, E] of Object.entries(N)) e.addEventListener(P, E);
  function k(P) {
    r = P, o = !1, c = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: P = "", time: E = null, playing: R = !1, fps: W }) {
      P !== r && (k(P), n()), a = { time: E, playing: R, fps: W }, v();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(P, E) {
      return !r || o ? E : a.time === null ? null : a.playing && d ? e : u === null ? E : P;
    },
    dispose() {
      for (const [P, E] of Object.entries(N)) e.removeEventListener(P, E);
      k("");
    }
  };
}
function n2(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function r2({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: c, onStickerCapture: u, onChange: d, camera: b = !1 }) {
  let y = "", v = "", x = 0;
  const N = /* @__PURE__ */ new Set();
  let k = null, P = null;
  const E = () => o().timeline.fps, R = (L) => L.stickers.find((se) => se.source.kind === "port"), W = () => {
    const L = o(), se = R(L);
    return nb(L, {
      minimum: Math.round(E() * 5),
      frames: Math.max(
        y ? Math.round(x * E()) : 0,
        k && se ? Eb(se.clip, E(), k.meta) : 0
      ),
      camera: b
    });
  }, V = Wb({
    video: e,
    clock: r,
    fps: E,
    span: W,
    loop: () => !0,
    onFrame: a,
    onCapture: c,
    onChange: d
  }), T = () => {
    v === y && Number.isFinite(e.duration) && (x = e.duration);
  }, _ = () => {
    v && (N.add(v), d());
  }, z = Bb({ video: t, onCapture: u, onChange: d }), B = Tb({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", T), e.addEventListener("error", _);
  function oe(L) {
    L !== v && (v = L, e.pause(), L ? e.src = L : e.removeAttribute("src"), e.load(), V.setSource(!!L));
  }
  function _e() {
    V.playing && V.stop();
  }
  function A(L) {
    const se = R(L);
    P = k && se ? Ob(se.clip, V.frame, L.timeline.fps, k.meta) : null, z.follow({
      src: (k == null ? void 0 : k.src) || "",
      time: P,
      playing: V.advancing,
      fps: L.timeline.fps
    });
  }
  return {
    get frame() {
      return V.frame;
    },
    get playing() {
      return V.playing;
    },
    get showsVideo() {
      return V.showsVideo;
    },
    get source() {
      return v;
    },
    pause: _e,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return k;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(L, se) {
      return k != null && k.frames ? B.picture(k.frames, P, k.meta, se) : z.picture(L, se);
    },
    toggle() {
      V.playing ? V.stop() : V.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: L, sources: se, state: Pe, sticker: de = null }) {
      if (k = L ? de : null, !L)
        return _e(), oe(""), A(Pe), !1;
      for (const Q of N)
        se.includes(Q) || N.delete(Q);
      const U = se.find((Q) => Q && !N.has(Q)) || "", q = U !== y;
      q && (y = U, x = 0), oe(y);
      const D = tb(Pe, { camera: b }) || !!y && V.state !== "error" || !!k;
      return D || _e(), (q || !D || !V.playing && V.frame >= W()) && V.frame !== ka && V.seek(ka), A(Pe), D;
    },
    dispose() {
      V.dispose(), z.dispose(), e.removeEventListener("loadedmetadata", T), e.removeEventListener("error", _), e.pause(), e.removeAttribute("src"), e.load(), v = "";
    }
  };
}
const xc = Math.PI / 180, Yr = 180 / Math.PI, i2 = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), o2 = 260;
function jg(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Ub(e, t) {
  return t ? Ub(t, e % t) : e;
}
function a2(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = Ub(c, u) || 1;
  return `${Math.round(c / d)}:${Math.round(u / d)}`;
}
function js(e, t) {
  const n = jg(e), r = jg(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: a2(n, r) };
}
function ko(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function Yb(e) {
  const t = ko(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? hi(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function dp(e, t, n = i2) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (E, R, W) => {
    const V = E + R, T = Math.max(0, W - 1), _ = V > T && V > 0 ? T / V : 1;
    return [E * _, R * _];
  }, [y, v] = b(d, c, r), [x, N] = b(a, u, o), k = {
    x: y,
    y: x,
    w: Math.max(1, r - y - v),
    h: Math.max(1, o - x - N)
  }, P = Bd(k, t);
  return {
    x: k.x + (k.w - P.width) * 0.5,
    y: k.y + (k.h - P.height) * 0.5,
    w: P.width,
    h: P.height,
    safeRect: k
  };
}
function s2(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = dp({ width: n, height: r }, 1), a = Z(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * xc * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = Ry(d, Fy(
    { x: n * 0.5, y: r * 0.5 },
    c,
    u
  )), y = l2(b, Pa(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), v = Ud({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: v.hFOV_deg
  };
}
function Xb(e) {
  return {
    yaw: Ht(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Yr),
    pitch: Z(Math.asin(Z(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Yr, -89.9, 89.9)
  };
}
function l2(e, t) {
  const n = Xb(e), r = Pa(n.yaw, n.pitch, 0), o = Qu(t, e), a = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * o,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * o,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * o
  }, c = Math.hypot(a.x, a.y, a.z);
  if (!(c > 1e-8)) return { ...n, roll: 0 };
  const u = {
    x: a.x / c,
    y: a.y / c,
    z: a.z / c
  };
  return {
    ...n,
    roll: Gc(Math.atan2(
      Qu(u, r.up),
      Qu(u, r.right)
    ) * Yr)
  };
}
function qb(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = dp({ width: n, height: r }, wo(e)), a = _o(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = Ry(e, Fy(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = Xb(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: Z(2 * Math.atan(n / (2 * a)) * Yr, 1, 179)
  };
}
function c2(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = _o(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: b, halfH: y } = Yd(d, u), v = {
    x: a - b,
    y: c - y,
    w: b * 2,
    h: y * 2
  }, x = v.x <= 0 && v.y <= 0 && v.x + v.w >= r && v.y + v.h >= o, N = r / o, k = Math.tan(Gf * xc), P = N >= 1 ? k : k * N, E = N >= 1 ? k / N : k;
  return {
    focalPx: u,
    rect: v,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * Yr,
      vFOV_deg: 2 * Math.atan(y / u) * Yr
    },
    fallback: x ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(P) * Yr,
        vFOV_deg: 2 * Math.atan(E) * Yr
      }
    }
  };
}
function Jo(e, t) {
  const n = ko(e);
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
function u2(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = _o(n, e);
    return Ud(Bd(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: zl(a, t) };
}
function Hg(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = js(t, n);
  if (!a) return e;
  const c = wo(e) >= 1;
  r && a.ratio >= 1 !== c && (a = js(a.height, a.width));
  const u = u2(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function Jb(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (ko(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = Ty({
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
    const r = ko(e);
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
    return Jo(e, (r) => Hg(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Jo(e, (r) => {
      const a = String(hi(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? js(a[1], a[2]) : js(wo(r), 1);
      return c ? Hg(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Jo(e, (o) => {
      const a = Gc(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Jo(e, (r) => {
    const o = Dy(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? Jo(e, (r) => {
    const o = Ly(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? Jo(e, (r) => {
    const o = e1(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function Zb({
  frame: e,
  point: t,
  startRollDeg: n = 0,
  shiftKey: r = !1,
  altKey: o = !1,
  allowAlt: a = !1,
  deadZoneRatio: c = 0.05
} = {}) {
  const u = a && o ? "alt" : r ? "shift" : "";
  if (!u || !e || !t) return null;
  const d = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, b = {
    x: d.x + d.w * 0.5,
    y: d.y + d.h * 0.5
  }, y = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (u === "shift" && y < Math.min(d.w, d.h) * c) return null;
  const v = Math.atan2(Number(t.y || 0) - b.y, Number(t.x || 0) - b.x);
  return {
    source: u,
    frame: d,
    center: b,
    startRollDeg: Number(n || 0),
    lastAngle: v,
    accumulatedRad: 0
  };
}
function Qb(e, t, n = {}) {
  var c, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + Oy(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: Ey(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function e1(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * xc, d = Math.cos(u), b = Math.sin(u), y = a / n, v = -c / n, x = y * d - v * b, N = y * b + v * d, k = Number(e.pitch_deg || 0) * xc, P = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(x) / P * Yr),
    pitch_deg: Z(Number(e.pitch_deg || 0) - Math.atan(N) * Yr, -90, 90)
  };
}
function f2({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return Db({
    readState: e,
    reduce: Jb,
    projectModel: Yb,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const ke = Object.freeze({
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
}), d2 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, p2 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: d2(t[2])
})), h2 = {
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
}, Gg = Object.fromEntries(
  Object.entries(h2).map(([e, t]) => [e, {
    name: t.name,
    elements: p2(t.body)
  }])
), Lt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = pt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Gg, r) ? Gg[r] : null;
    });
    return (r, o) => n.value ? (ne(), ue("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ut(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (ne(!0), ue(Xe, null, _t(n.value.elements, (a, c) => (ne(), ue(Xe, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ne(), ue("path", gi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ne(), ue("circle", gi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ne(), ue("rect", gi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ne(), ue("line", gi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ne(), ue("polyline", gi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ne(), ue("polygon", gi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ct("", !0)
      ], 64))), 128))
    ], 2)) : ct("", !0);
  }
}, un = {
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
    const t = e, n = pt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (ne(), vr(Kx(e.tag), gi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: J0(() => [
        Re(Lt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, m2 = ["aria-expanded", "disabled"], g2 = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, y2 = ["data-aspect", "disabled", "onClick"], b2 = { class: "pano-cutout-aspect-custom" }, v2 = ["disabled"], _2 = ["disabled"], w2 = ["data-custom-width", "data-custom-height", "disabled"], t1 = {
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
    ]), a = /* @__PURE__ */ Zt("1"), c = /* @__PURE__ */ Zt("1"), u = /* @__PURE__ */ Zt(null), d = pt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = pt(() => {
      const P = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], E = String(n.model.aspectLabel || "");
      return P.length ? P.map((R) => {
        const W = typeof R == "string" ? R : String((R == null ? void 0 : R.value) || ""), V = typeof R == "string" ? R : String((R == null ? void 0 : R.label) || W);
        return {
          ...typeof R == "object" && R ? R : {},
          value: W,
          label: V,
          active: E ? W === E : (R == null ? void 0 : R.active) === !0
        };
      }) : o.map((R) => ({
        ...R,
        active: R.value === E
      }));
    }), y = pt(() => {
      var E;
      const P = String(n.model.aspectLabel || "").trim();
      return P || String(((E = b.value.find((R) => R.active === !0)) == null ? void 0 : E.label) || "Aspect");
    });
    bo(y, (P) => {
      const E = String(P || "").match(/^([0-9.]+):([0-9.]+)$/);
      E && (a.value = E[1], c.value = E[2]);
    }, { immediate: !0 });
    function v(P) {
      r("action", P);
    }
    function x(P) {
      var E;
      n.model.aspectOpen === !0 && ((E = u.value) != null && E.contains(P.target) || v({ type: "close-aspect" }));
    }
    $c(() => {
      document.addEventListener("pointerdown", x, !0);
    }), Bs(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function N(P) {
      const [E, R] = String(P.value || "").split(":");
      v({
        type: "set-aspect",
        width: E,
        height: R,
        preserveOrientation: !0
      });
    }
    function k() {
      v({
        type: "set-aspect",
        width: a.value,
        height: c.value,
        preserveOrientation: !1
      });
    }
    return (P, E) => (ne(), ue("div", {
      ref_key: "rootElement",
      ref: u,
      class: ut(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ne(), vr(un, {
        key: 0,
        icon: e.model.aspectIcon || ot(ke).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: E[0] || (E[0] = (R) => v({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ne(), ue("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: E[1] || (E[1] = (R) => v({ type: "toggle-aspect" }))
      }, [
        Re(Lt, {
          icon: e.model.aspectIcon || ot(ke).aspect
        }, null, 8, ["icon"]),
        Y("span", null, tt(y.value), 1),
        Re(Lt, {
          icon: ot(ke).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, m2)),
      wi(Y("div", g2, [
        (ne(!0), ue(Xe, null, _t(b.value, (R) => (ne(), ue("button", {
          key: R.value,
          class: ut(["pano-btn pano-frame-aspect-choice", { active: R.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": R.value,
          disabled: d.value,
          onClick: (W) => N(R)
        }, tt(R.label), 11, y2))), 128)),
        Y("div", b2, [
          wi(Y("input", {
            "onUpdate:modelValue": E[2] || (E[2] = (R) => a.value = R),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, v2), [
            [tg, a.value]
          ]),
          E[4] || (E[4] = Y("span", { "aria-hidden": "true" }, ":", -1)),
          wi(Y("input", {
            "onUpdate:modelValue": E[3] || (E[3] = (R) => c.value = R),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, _2), [
            [tg, c.value]
          ]),
          Y("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, w2)
        ])
      ], 512), [
        [Mo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, x2 = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, S2 = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Zt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (ne(), ue("div", {
      class: ut(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Dt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Dt(() => {
      }, ["stop"]))
    }, [
      Re(un, {
        icon: ot(ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Dt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Y("div", x2, [
        o[3] || (o[3] = Y("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ne(!0), ue(Xe, null, _t(ot(n), (a) => (ne(), ue("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          Y("kbd", null, tt(a[0]), 1),
          Y("span", null, tt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, k2 = {
  class: "pano-view-unavailable",
  role: "status"
}, pp = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ne(), ue("div", k2, tt(ot(_b)), 1));
  }
}, M2 = { class: "pano-cutout-node-surface" }, N2 = ["title", "disabled"], P2 = { class: "value" }, A2 = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, C2 = {
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
    return (r, o) => (ne(), ue("div", M2, [
      Y("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Dt(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Dt(() => {
        }, ["stop"]))
      }, [
        Y("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          Re(Lt, {
            icon: ot(ke).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = Y("span", { class: "label" }, "Full Editor", -1))
        ]),
        Re(un, {
          icon: e.model.hasShot ? ot(ke).delete : ot(ke).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Re(t1, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        Y("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = Dt((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Re(Lt, {
            icon: ot(ke).roll
          }, null, 8, ["icon"]),
          Y("span", P2, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, N2),
        Re(un, {
          icon: ot(ke).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Re(S2)
      ], 32),
      e.model.hasShot === !1 ? (ne(), ue("div", A2, " Choose a view · + Add Frame ")) : ct("", !0),
      e.model.viewUnavailable ? (ne(), vr(pp, { key: 1 })) : ct("", !0)
    ]));
  }
}, n1 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ Zt(null);
    let a, c = !1;
    function u() {
      if (!c) return { active: !1, intent: void 0 };
      const v = a;
      return a = void 0, c = !1, { active: !0, intent: v };
    }
    function d(v) {
      const x = o.value;
      return x instanceof HTMLInputElement ? (a = v, c = !0, x.value = "", x.click(), !0) : !1;
    }
    function b(v) {
      var P, E;
      const { active: x, intent: N } = u();
      if (!x) return;
      const k = ((E = (P = v.target) == null ? void 0 : P.files) == null ? void 0 : E[0]) || null;
      if (k) {
        r("file-selected", { intent: N, file: k });
        return;
      }
      r("file-cancelled", { intent: N });
    }
    function y() {
      const { active: v, intent: x } = u();
      v && r("file-cancelled", { intent: x });
    }
    return t({ open: d }), (v, x) => (ne(), ue("input", {
      ref_key: "inputRef",
      ref: o,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: b,
      onCancel: y
    }, null, 544));
  }
}, I2 = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, O2 = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Zt(!1), n = Object.freeze([
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
    return (r, o) => (ne(), ue("div", {
      class: ut(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Dt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Dt(() => {
      }, ["stop"]))
    }, [
      Re(un, {
        icon: ot(ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Dt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Y("div", I2, [
        o[3] || (o[3] = Y("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ne(!0), ue(Xe, null, _t(ot(n), (a) => (ne(), ue("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          Y("kbd", null, tt(a[0]), 1),
          Y("span", null, tt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, E2 = { class: "pano-stickers-node-surface" }, F2 = ["disabled"], T2 = ["aria-label", "data-tip"], D2 = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, L2 = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, R2 = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Zt(null);
    function r(c) {
      var u;
      (u = t.onAction) == null || u.call(t, c);
    }
    function o() {
      var c, u;
      (u = (c = n.value) == null ? void 0 : c.open) == null || u.call(c, "add");
    }
    function a(c) {
      r({ type: "add-image-file", file: (c == null ? void 0 : c.file) || null });
    }
    return (c, u) => (ne(), ue("div", E2, [
      Y("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = Dt(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = Dt(() => {
        }, ["stop"]))
      }, [
        Y("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          Re(Lt, {
            icon: ot(ke).fullscreen
          }, null, 8, ["icon"]),
          u[10] || (u[10] = Y("span", { class: "label" }, "Full Editor", -1))
        ]),
        Y("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          Re(Lt, {
            icon: ot(ke).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = Y("span", { class: "label" }, "Add Image", -1))
        ], 8, F2),
        Re(un, {
          icon: e.model.locked ? ot(ke).lock_closed : ot(ke).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Re(un, {
          icon: ot(ke).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Re(un, {
          icon: ot(ke).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Re(un, {
          icon: e.model.isExternalSelection ? ot(ke).back_initial : ot(ke).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Re(O2)
      ], 32),
      e.model.playable === !0 ? (ne(), ue("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = Dt(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = Dt(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        Re(Lt, {
          icon: e.model.playing ? ot(ke).pause : ot(ke).play
        }, null, 8, ["icon"])
      ], 40, T2)) : ct("", !0),
      e.model.hasStickers === !1 ? (ne(), ue("div", D2, " Add Image to place a sticker ")) : ct("", !0),
      e.model.dropActive === !0 ? (ne(), ue("div", L2, "Drop image to add")) : ct("", !0),
      Re(n1, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ne(), vr(pp, { key: 3 })) : ct("", !0)
    ]));
  }
}, Kg = 24;
function V2(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function As(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function r1(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function ud(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => As(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return As(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : r1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function $2(e, t, { edges: n = !1, resize: r = !0, emptyCursor: o = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const c = e.edgeMidpoints.find((u) => As(u, t) <= 169);
    if (c) {
      const u = c.edge === "left" || c.edge === "right";
      return { kind: u ? "scale_x" : "scale_y", cursor: u ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
    }
  }
  const a = r ? e.corners.findIndex((c) => As(c, t) <= 121) : -1;
  if (a >= 0) {
    const c = e.corners[a], u = c.x - e.center.x, d = c.y - e.center.y;
    return { kind: "scale", cornerIdx: a, cursor: u * d >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return As(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : r1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: o };
}
function hp(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function i1(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function as(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Z(n.x, -r, t.width + r),
    y: Z(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function z2(e) {
  const t = Pa(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Z(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Nt * 0.5),
    tanY: Math.tan(Z(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Nt * 0.5)
  };
}
function ao(e, t, n) {
  return Wd(cc(
    cc(e.centerDir, uc(e.right, t)),
    uc(e.up, n)
  ));
}
function mp(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = z2(e), r = as(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    ao(n, -n.tanX, n.tanY),
    ao(n, n.tanX, n.tanY),
    ao(n, n.tanX, -n.tanY),
    ao(n, -n.tanX, -n.tanY)
  ].map((x) => as(x, t)), a = Array.from({ length: 4 }, (x, N) => {
    const k = [];
    for (let P = 0; P <= 28; P += 1) {
      const E = P / 28;
      let R, W;
      N === 0 ? (R = -n.tanX + 2 * n.tanX * E, W = n.tanY) : N === 1 ? (R = n.tanX, W = n.tanY - 2 * n.tanY * E) : N === 2 ? (R = n.tanX - 2 * n.tanX * E, W = -n.tanY) : (R = -n.tanX, W = -n.tanY + 2 * n.tanY * E);
      const V = as(ao(n, R, W), t);
      V && k.push({ x: V.x, y: V.y });
    }
    return k;
  }), c = as(ao(n, 0, n.tanY), t), u = as(
    ao(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, c, u];
  if (d.some((x) => !x || !Number.isFinite(x.x) || !Number.isFinite(x.y)))
    return { visible: !1 };
  if (!d.some((x) => x.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - c.x, y = u.y - c.y, v = Math.hypot(b, y) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((x) => ({ x: x.x, y: x.y })),
    boundaryEdges: a,
    rotateStemBase: { x: c.x, y: c.y },
    rotateHandle: {
      x: c.x + b / v * Kg,
      y: c.y + y / v * Kg
    },
    visible: !0
  };
}
function Wg(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: mp(c, r) })).filter((c) => c.geometry.visible).sort((c, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = c.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((c) => {
    var u;
    return String(((u = c.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const c = ud(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const u = ud(c.geometry, n);
    if (u.kind !== "none") return { ...c, hit: u };
  }
  return null;
}
function j2(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Ht(Math.atan2(r.x, r.z) * fn),
    pitch_deg: Math.asin(Z(r.y, -1, 1)) * fn
  };
}
function H2(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Z(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Z(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function G2(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * fn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Nl = null;
function gp() {
  return Nl || (Nl = new Promise((e) => {
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
  }), Nl);
}
function hr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function K2(e, t = 1024) {
  const n = Math.max(1, Math.round(hr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(hr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function W2(e, t, n) {
  const r = hr(t), o = hr(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = hr(a.u0), u = hr(a.v0), d = hr(a.u1), b = hr(a.v1);
  if (d <= c || b <= u) return null;
  const y = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + hr(y.du)) * r,
    centerY: ((u + b) * 0.5 + hr(y.dv)) * o,
    width: (d - c) * r,
    height: (b - u) * o,
    rotationRad: hr(y.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, hr(y.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function B2(e, t, n) {
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
function U2() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function n() {
    if (!(e.size <= 16))
      for (const [a, c] of e) {
        if (e.size <= 16) break;
        c.settled && (c.image.onload = null, c.image.onerror = null, e.delete(a));
      }
  }
  function r(a, c) {
    let u = e.get(a);
    if (u)
      return e.delete(a), e.set(a, u), !u.settled && typeof c == "function" && u.listeners.add(c), u.image;
    const d = new Image();
    u = { image: d, listeners: new Set(typeof c == "function" ? [c] : []), settled: !1 }, e.set(a, u);
    const b = () => {
      u.settled = !0;
      const y = [...u.listeners];
      u.listeners.clear(), y.forEach((v) => v()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, c, u, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), y = W2(a, c, u);
    if (!b.startsWith("data:") || !y) return null;
    const v = B2(a, c, u), x = String((a == null ? void 0 : a.id) || "").trim() || v, N = t.get(x);
    if ((N == null ? void 0 : N.revision) === v) return { source: N.source, revision: v };
    const k = r(b, d), P = Number(k.naturalWidth || k.width || 0), E = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || P < 1 || E < 1) return null;
    const R = document.createElement("canvas");
    R.width = Math.max(1, Math.round(c)), R.height = Math.max(1, Math.round(u));
    const W = R.getContext("2d");
    return W ? (y.wrapOffsets.forEach((V) => {
      W.save(), W.translate(y.centerX + V, y.centerY), W.rotate(y.rotationRad), W.scale(y.scale, y.scale), W.drawImage(
        k,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), W.restore();
    }), t.set(x, { revision: v, source: R }), { source: R, revision: v }) : null;
  }
  return {
    get: o,
    retain(a = []) {
      const c = new Set(Array.from(a, (u) => String(u || "").trim()).filter(Boolean));
      for (const u of t.keys())
        c.has(u) || t.delete(u);
    },
    dispose() {
      e.forEach((a) => {
        a.listeners.clear(), a.image.onload = null, a.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function Y2(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function X2(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function q2({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(v) {
    if (!v) return;
    v.entry.listeners.delete(v);
    const x = r.get(v.owner);
    (x == null ? void 0 : x.get(v.key)) === v && x.delete(v.key);
  }
  function c(v, x, N, k) {
    if (!v || typeof k != "function" || N.settled) return;
    let P = r.get(v);
    P || (P = /* @__PURE__ */ new Map(), r.set(v, P));
    const E = P.get(x);
    if ((E == null ? void 0 : E.entry) === N) {
      E.callback = k;
      return;
    }
    a(E);
    const R = { owner: v, key: x, entry: N, callback: k };
    P.set(x, R), N.listeners.add(R);
  }
  function u(v, x) {
    v.settled || (v.settled = !0, v.image.onload = null, v.image.onerror = null, !x && n.get(v.key) === v && n.delete(v.key), [...v.listeners].forEach((N) => {
      a(N);
      try {
        N.callback(v.image, x);
      } catch {
      }
    }), d(o));
  }
  function d(v) {
    if (!(n.size <= v))
      for (const [x, N] of n) {
        if (n.size <= v) break;
        !N.settled || N.listeners.size > 0 || (N.image.onload = null, N.image.onerror = null, n.delete(x));
      }
  }
  function b(v, x, N, k = null) {
    const P = String(x || ""), E = String(N || "");
    if (!P || !E) return null;
    let R = n.get(P);
    if (R)
      n.delete(P), n.set(P, R);
    else {
      d(o - 1);
      const V = e || globalThis.Image;
      if (typeof V != "function") return null;
      const T = new V();
      R = { key: P, image: T, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(P, R), T.onload = () => u(R, !0), T.onerror = () => u(R, !1), T.src = E;
    }
    return R.settled || R.image.complete && Number(R.image.naturalWidth || R.image.width || 0) > 0 || c(v, P, R, k), R.image;
  }
  function y(v) {
    const x = r.get(v);
    x && ([...x.values()].forEach(a), r.delete(v), d(o));
  }
  return { get: b, disposeOwner: y };
}
const ps = /* @__PURE__ */ new WeakMap();
function o1(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = ps.get(e);
  r || (r = [], ps.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = ps.get(e);
    if (!c) return;
    const u = c.indexOf(o);
    u >= 0 && c.splice(u, 1), c.length === 0 && ps.delete(e);
  };
}
function vi(e, ...t) {
  const n = ps.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Ul = Object.freeze({
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
}), a1 = "PanoramaSuite.Editor.ViewControls", J2 = {
  id: a1,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Ul).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function Z2(e) {
  return Object.hasOwn(Ul, e) ? Ul[e] : Ul.default;
}
function Q2(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const c = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (c == null ? void 0 : c.action) ?? null;
}
function eP(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Sc = "state_json";
function _i(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function tP(e) {
  var c, u;
  const t = _i(e, Sc);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = ib(n, {
    coverage: (c = _i(e, "coverage")) == null ? void 0 : c.value
  }), o = Jb(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function yp(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = _i(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, u, d, b, y, v, x, N, k;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (x = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || x.call(v, !0, !0), (k = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || k.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function nP(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Bg(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function rP(e) {
  var y, v, x, N, k, P;
  if (!e) return;
  const t = _i(e, "coverage"), n = _i(e, "bg_color"), r = _i(e, Sc), o = _i(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && nP(a) && (Bg(c) || c === ""))) return;
  let b = "360";
  if (Bg(c))
    try {
      b = String(Xn((y = JSON.parse(c)) == null ? void 0 : y.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (v = t.callback) == null || v.call(t, b), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = c, (N = r.callback) == null || N.call(r, c), o && (o.value = u, (k = o.callback) == null || k.call(o, u)), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
}
function Yl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function fd(e, t, n) {
  var a, c;
  if (!e || typeof e.addWidget != "function") return null;
  let o = (Array.isArray(e.widgets) ? e.widgets : []).find((u) => String((u == null ? void 0 : u.name) || "") === String(t));
  if (o) {
    o.callback = n, o.hidden = !1, o.__panoHidden = !1, o.type = "button", o.options = { ...o.options || {}, hidden: !1 }, typeof o.__panoComputeSizeBeforeHide == "function" && (o.computeSize = o.__panoComputeSizeBeforeHide), delete o.__panoComputeSizeBeforeHide, (a = o.element) != null && a.style && (o.element.style.display = ""), (c = o.parentEl) != null && c.style && (o.parentEl.style.display = "");
    const u = typeof o.computeSize == "function" ? o.computeSize() : null;
    return (!Array.isArray(u) || Number(u[0] || 0) <= 0 || Number(u[1] || 0) <= 0) && (o.computeSize = () => {
      var d;
      return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
    }), o;
  }
  return o = e.addWidget("button", t, null, n), o && (o.serialize = !1), o;
}
async function iP(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function hs(e, t, n) {
  if (!e || typeof n != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  e.__panoPendingStickerUploads instanceof Map || (e.__panoPendingStickerUploads = /* @__PURE__ */ new Map());
  const r = e.__panoStickerOperationTail, a = (r && typeof r.then == "function" ? r.catch(() => {
  }) : Promise.resolve()).then(() => n()), c = a.catch(() => {
  });
  e.__panoStickerOperationTail = c, e.__panoPendingStickerUploads.set(t, a);
  const u = () => {
    var d, b;
    ((b = (d = e.__panoPendingStickerUploads) == null ? void 0 : d.get) == null ? void 0 : b.call(d, t)) === a && e.__panoPendingStickerUploads.delete(t);
  };
  return a.then(u, u), c.then(() => {
    e.__panoStickerOperationTail === c && (e.__panoStickerOperationTail = null);
  }), a;
}
async function s1(e, t = {}) {
  var r;
  await iP(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function oP(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await s1(e), n ? n.apply(this, r) : this.value;
  };
}
function aP(e) {
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
function sP(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function ss(e, {
  app: t,
  matchType: n,
  buttonText: r,
  openEditor: o,
  attachStickers: a,
  attachCutout: c,
  enableStickersPreview: u,
  sceneStateV2: d = !1,
  studio: b = !1
}) {
  if (!(e != null && e.prototype)) return;
  function y(v) {
    var k;
    const x = `editor_btn|${n}`;
    if (v.__panoPreviewAttached === !0 && v.__panoPreviewMountKey === x) return;
    aP(v), yp(v, t), Yl(v, Sc);
    const N = _i(v, Sc);
    if (oP(v, N), N && !N.__panoPreviewPatchedCb) {
      N.__panoPreviewPatchedCb = !0;
      const P = N.callback;
      N.callback = (E) => {
        var W;
        const R = P ? P(E) : void 0;
        return (W = v.setDirtyCanvas) == null || W.call(v, !0, !1), R;
      };
    }
    if (n === "PanoramaStickers") {
      v.__panoSceneStateV2 = d, v.__panoStudio = b;
      const P = _i(v, "bg_color");
      !d && P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (k = P.callback) == null || k.call(P, "#00ff00")), fd(v, r, () => o(v, "stickers")), u && (a(v, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(v, "stickers")
      }), v.__panoStickersNodeSurface && Yl(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260])), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = x;
      return;
    }
    v.__panoSceneStateV2 = d, fd(v, r, () => o(v, "cutout")), d || c(v, {
      buttonText: r,
      onOpen: () => o(v, "cutout")
    }), v.__panoCutoutNodeSurface && Yl(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260]), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = x;
  }
  for (const v of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const x = e.prototype[v];
    e.prototype[v] = function() {
      const N = x ? x.apply(this, arguments) : void 0;
      v === "onNodeCreated" && n === "PanoramaCutout" && !d && tP(this), v === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && rP(this);
      const k = !!this.__panoPreviewAttached;
      return (v === "onNodeCreated" || this.widgets) && y(this), v === "onAdded" && k && vi(this, "attach"), N;
    };
  }
}
function lP(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return sP(this), r;
  };
}
function cP(e, {
  app: t,
  openEditor: n,
  attachPreview: r,
  requestFrame: o
}) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const a = () => {
    const c = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), u = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = u, !c && u < 40) {
      o(a);
      return;
    }
    yp(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    fd(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && Yl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function uP({
  app: e,
  openEditor: t,
  attachStickers: n,
  attachCutout: r,
  attachPreview: o,
  restoreOutput: a,
  requestFrame: c,
  enableStickersPreview: u = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [J2],
    beforeRegisterNodeDef(d, b) {
      const y = String((b == null ? void 0 : b.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && ss(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaStickersNode" && ss(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), y === "PanoramaStudio" && ss(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0,
        studio: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && ss(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaCutoutNode" && ss(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), fc(y) && lP(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      yp(d, e), fc(b) && cP(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const fP = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Cr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : fP.test(String(e.name || "")) : !1;
}
function bp(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Cr(n)) : !1;
}
function dP(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, y, v;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (v = d == null ? void 0 : d.stopImmediatePropagation) == null || v.call(d);
  }, a = (d) => {
    if (bp(d == null ? void 0 : d.dataTransfer)) {
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
  }, u = (d) => {
    var y;
    const b = Array.from(((y = d == null ? void 0 : d.dataTransfer) == null ? void 0 : y.files) || []).find((v) => Cr(v));
    if (!b) {
      n(!1);
      return;
    }
    o(d), n(!1), r(b);
  };
  return e.addEventListener("dragenter", a, !0), e.addEventListener("dragover", a, !0), e.addEventListener("dragleave", c, !0), e.addEventListener("drop", u, !0), () => {
    e.removeEventListener("dragenter", a, !0), e.removeEventListener("dragover", a, !0), e.removeEventListener("dragleave", c, !0), e.removeEventListener("drop", u, !0), n(!1);
  };
}
async function ms(e, t = {}) {
  var c, u, d, b;
  if (!Cr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const y = await new Promise((v, x) => {
      const N = new n();
      N.onload = () => v(N), N.onerror = () => x(new Error("image load failed")), N.src = a;
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
async function fo(e, { fetchApi: t } = {}) {
  if (!Cr(e)) throw new TypeError("A supported image file is required.");
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
const Ug = /* @__PURE__ */ new WeakSet(), Yg = /* @__PURE__ */ new WeakSet();
let Xg = 0;
function dd(e) {
  if (!e || typeof e != "object" || Yg.has(e)) return e;
  const t = String(e.type || "preview");
  return Xg += 1, e.type = `${t}:pano-${Xg}`, Yg.add(e), e;
}
function kc(e) {
  if (!e || typeof e != "object" || Ug.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Ug.add(e), e;
}
function l1(e, t) {
  var r, o;
  if (!t || ((o = (r = kc(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function pP({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Kt } = Tl;
TN((e) => Ki(e.id));
DN(Jt);
const vp = q2(), { linkedVideoFile: hP } = Ib({ app: Kt, api: Jt });
function pd() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Tl == null ? void 0 : Tl.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const mP = "pano_suite.ui_settings.v1", gP = 120, yP = 2048;
function qg() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(mP)) || "").trim();
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
function bP() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ls(e) {
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
function vP() {
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
function hd(e) {
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
function c1(e) {
  const t = hd(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function _P(e, t, n) {
  c1(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function md(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function _p(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function u1(e) {
  return fc(_p(e));
}
function Jg(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function f1(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = md(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && Xl(e), fA(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = md(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Xl(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Xl(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function wP(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Xl(e, t = {}) {
  var r, o, a, c, u;
  if (!e) return;
  gd.unregister(e), wP(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (u = (c = n.root) == null ? void 0 : c.remove) == null || u.call(c);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((b) => {
      if (b === (n == null ? void 0 : n.widget)) return !0;
      const y = String((b == null ? void 0 : b.name) || ""), v = String((b == null ? void 0 : b.type) || ""), x = pd();
      return y === x || v === x || y === "pano_preview" || v === "pano_preview" ? !0 : y === "preview" && v === "pano_preview";
    }).forEach((b) => HP(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function xP(e, t = "#00ff00") {
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
function SP(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ga(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Bn(e) {
  var u, d;
  const t = SP(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = ga(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = ga(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? ob(t, { backgroundColor: r, coverage: o, active: lb(e) }) : xP(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function ga(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function kP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function d1(e, t, n = null) {
  var o, a;
  let r = null;
  try {
    r = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    r = null;
  }
  if ((o = r == null ? void 0 : r.isSubgraphNode) != null && o.call(r))
    try {
      const c = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, u = c ? (a = r.resolveSubgraphOutputLink) == null ? void 0 : a.call(r, Number(c.origin_slot ?? 0)) : null;
      u != null && u.outputNode && (r = u.outputNode);
    } catch {
    }
  return !r && n != null && (r = kP(e == null ? void 0 : e.graph, n)), r;
}
function MP(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function p1(e, t = []) {
  const n = MP(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Bi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function Zg(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Mc(e, t) {
  const n = Zg(e), r = Zg(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function NP(e, t) {
  var n;
  return d1(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function PP(e, t = Bi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = p1(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return jN(e, c, NP);
}
const gd = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Jt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, y, v, x;
        if (!a) return;
        const c = Mc(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...PP(a)].some((N) => Mc(r, N)) || Cb(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (h1(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = a.setDirtyCanvas) == null || y.call(a, !0, !0), (x = (v = a.graph) == null ? void 0 : v.setDirtyCanvas) == null || x.call(v, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
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
function Nc(e) {
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
  return typeof ((a = Jt) == null ? void 0 : a.apiURL) == "function" ? Jt.apiURL(o) : o;
}
function AP(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function CP(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function IP(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function OP(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (AP(t)) return [t];
  const { filename: n, subfolder: r } = CP(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Nc({
    filename: n,
    subfolder: r,
    type: a
  }));
  return IP([...o, t]);
}
function EP(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Nc({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ki(e) {
  const t = Kt == null ? void 0 : Kt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Mc(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (Mc(c, o)) return t[c];
  }
  return null;
}
function Cs(e, t, n = null) {
  const r = n || Ki(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function tr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return tr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Nc({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = tr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Nc(e);
}
function Pc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function hf(e) {
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
function wp(e, t) {
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
function FP(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function TP(e, t) {
  try {
    e.__panoOwnOutputRev = Y2(e.__panoOwnOutputRev);
    const n = FP(t);
    let r = "";
    for (const o of n)
      if (r = tr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), wp(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function ya(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function DP(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!xn(e, "background"))
    return ya(e), null;
  const o = Ki(r), a = lp(o, t, tr);
  if (!a)
    return ya(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = wp(a, c), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  ya(e);
  const y = HN({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function LP(e, t = []) {
  var b, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = p1(e, t).map((v) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(v))).filter((v) => v >= 0), a = n.map((v, x) => ({ input: v, idx: x })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const v of c) {
    const x = n[v], N = e.graph ? e.getInputLink(v) : null;
    if ((N == null ? void 0 : N.origin_id) == null) continue;
    const k = N.origin_id, P = d1(e, v, k);
    if (!P) continue;
    const E = Number(N.origin_slot ?? 0), R = Ki((P == null ? void 0 : P.id) ?? k), W = Array.isArray(R == null ? void 0 : R.images) ? R.images : [];
    if (W.length) {
      const z = [];
      E >= 0 && E < W.length && z.push(W[E]), z.push(...W);
      for (const B of z.filter((oe) => !Wl(oe))) {
        const oe = tr(B);
        if (oe)
          return String((x == null ? void 0 : x.name) || ""), { src: `${oe}&pano_src=${sd(R)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let V = [];
    try {
      V = typeof (Kt == null ? void 0 : Kt.getNodeImageUrls) == "function" ? Kt.getNodeImageUrls(P) || [] : [];
    } catch {
      V = [];
    }
    if (Array.isArray(V) && V.length) {
      const z = [];
      E >= 0 && E < V.length && z.push(V[E]), z.push(...V);
      for (const B of z) {
        const oe = tr(B);
        if (oe)
          return String((x == null ? void 0 : x.name) || ""), { src: oe, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const T = Array.isArray(P == null ? void 0 : P.imgs) ? P.imgs : [];
    if (T.length) {
      const z = [];
      E >= 0 && E < T.length && z.push(T[E]), z.push(...T);
      for (const B of z) {
        const oe = tr(B);
        if (oe)
          return String((x == null ? void 0 : x.name) || ""), { src: oe, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const _ = (b = P == null ? void 0 : P.widgets) == null ? void 0 : b.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image");
    if (_) {
      let z = tr(_.value);
      if (z && !z.includes("/") && !z.includes(":") && (P.comfyClass === "LoadImage" || P.type === "LoadImage") && (z = Jt.apiURL(`/view?filename=${encodeURIComponent(z)}&type=input&subfolder=`)), z)
        return String((x == null ? void 0 : x.name) || ""), { src: z, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const u = xn(e, "background") ? Ki(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((y = u == null ? void 0 : u.ui) == null ? void 0 : y.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const v of d) {
      const x = tr(v);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function RP(e, t = [], n = {}) {
  const r = LP(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = OP(o);
  if (!a.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return c && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), y = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  y.pendingSrcRaw = o, y.pendingResolvedSrc = "", y.pendingImg = b, e.__panoLinkedInputImageCache.set(u, y);
  let v = -1;
  const x = () => {
    var k, P, E, R;
    if (v += 1, v >= a.length) {
      if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (R = (E = e.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || R.call(E, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const N = a[v];
    y.pendingResolvedSrc = N, b.src = N;
  };
  return b.onload = () => {
    var N, k, P;
    ((k = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : k.call(N, u)) === y && y.pendingImg === b && (y.srcRaw = o, y.resolvedSrc = String(y.pendingResolvedSrc || b.src || ""), y.img = b, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
  }, b.onerror = (N) => {
    var k, P, E, R;
    if (v + 1 < a.length) {
      x();
      return;
    }
    if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (R = (E = e.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || R.call(E, u);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, x(), c && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : b;
}
function VP(e, t = [], n = null, r = {}) {
  const o = RP(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function h1(e) {
  var t, n;
  if (e) {
    vp.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ya(e), e.__panoWrappedErpCache = null;
  }
}
function $P(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ya(e), e.__panoWrappedErpCache = null;
  }
}
function m1(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Pl(e, t, n = "") {
  const r = m1(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < gP ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Qg(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, u = r / a, d = Math.min(c, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function zP(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), y = r + (a - d) * 0.5, v = o + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, v, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, v + b * 0.5 + 0.5), e.restore();
}
function mf(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function jP(e) {
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
function HP(e, t) {
  return l1(e, t);
}
function Hs(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = EP(n);
  if (!a && (r != null && r.external)) {
    if (!xn(e, "external-sticker")) return null;
    const N = Ki(e == null ? void 0 : e.id), k = ((x = N == null ? void 0 : N.ui) == null ? void 0 : x.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const P of Array.isArray(k) ? k : [k])
      if (a = tr(P), a) break;
  }
  if (!a) return null;
  const c = Cs(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? wp(a, d) : a, y = X2(a, u, d);
  return vp.get(e, y, b, (N, k) => {
    var P, E;
    k && (r != null && r.external && e.__panoOutputFromRun && vi(e, "image-loaded"), (E = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null || E.call(P));
  }) || null;
}
function GP(e, t) {
  var v, x, N, k;
  const n = YP(e, t), r = XP(t), o = Array.isArray((v = t == null ? void 0 : t.painting) == null ? void 0 : v.groups) ? t.painting.groups : [], a = new Map(
    o.filter((P) => P && typeof P == "object").map((P) => [String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim(), Number((P == null ? void 0 : P.z_index) || 0)])
  ), c = n ? r.map((P) => {
    const E = n.getGroupDisplayCanvas(P);
    return E ? {
      id: `paint_group:${P}`,
      source: E,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${P}`,
      zIndex: Number(a.get(P) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (k = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || k.call(N, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = U2()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var P, E;
    return (E = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null ? void 0 : E.call(P);
  });
  const d = K2(t == null ? void 0 : t.output_preset), b = u.filter((P) => (P == null ? void 0 : P.visible) !== !1 && String((P == null ? void 0 : P.layerKind) || "paint") === "paint").map((P) => String((P == null ? void 0 : P.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const y = u.map((P) => {
    const E = e.__panoRasterObjectSurfaceCache.get(
      P,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return E ? {
      id: `raster:${String((P == null ? void 0 : P.id) || "")}`,
      source: E.source,
      revision: E.revision,
      zIndex: Number((P == null ? void 0 : P.z_index) || 0),
      opacity: 1,
      visible: (P == null ? void 0 : P.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...y];
}
function KP(e, t, n, r) {
  var a, c, u, d, b, y;
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
      const v = r.convertEventToCanvasOffset(t);
      if (Array.isArray(v) && v.length >= 2)
        return {
          x: Number(v[0]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[0]) || 0),
          y: Number(v[1]) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((y = e == null ? void 0 : e.pos) == null ? void 0 : y[1]) || 0)
    };
  const o = BP(e, t, r);
  return o || null;
}
function WP(e, t) {
  var v, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (v = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : v.call(o), c = (t == null ? void 0 : t.ds) || ((x = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : x.ds);
  if (!a || !c) return null;
  const u = Number(c.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), y = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(y) ? null : { x: b, y };
}
function BP(e, t, n) {
  var o, a;
  const r = WP(t, n || (Kt == null ? void 0 : Kt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function UP(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function YP(e, t) {
  var b, y, v, x, N, k, P, E, R, W, V, T;
  const n = (y = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : y.strokes, r = (x = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = UP(e, t), u = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = jf(c), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.paint) !== d.paint || ((E = e.__panoPreviewPaintRevision) == null ? void 0 : E.mask) !== d.mask || ((R = e.__panoPreviewPaintRevision) == null ? void 0 : R.groups) !== d.groups || ((W = e.__panoPreviewPaintRevision) == null ? void 0 : W.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function XP(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function qP(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function JP(e, t, n) {
  const r = mp(t, n);
  r.visible && hp(e, r.boundaryEdges, { selected: !1 });
}
function ZP(e, t, n) {
  const r = mp(t, n);
  r.visible && (e.save(), hp(e, r.boundaryEdges, { selected: !0 }), i1(e, r, { accent: V2(t) }), e.restore());
}
function yd(e, t, n) {
  return bb(vc(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Ac(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? ka;
}
function QP(e) {
  return [xn(e, "background") ? lp(Ki(e.id), ["pano_input_videos"], tr) : "", hP(e, Bi)];
}
function eA(e) {
  var a;
  if (!xn(e, "external-sticker")) return null;
  const t = Ki(e.id), n = Cs(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(tr), meta: n };
  const o = lp(t, ["pano_sticker_input_videos"], tr);
  return o ? { src: o, meta: n } : null;
}
function tA({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function e0(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: qr({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = Hs(e, c.id, sb(c.source), { external: c.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (c.source.kind === "port" && b) {
        const y = b.playback.stickerPicture(b.stickerStill, u), v = Fb(b.playback.stickerMedia, u);
        return y ? { media: y, revision: hf(y), source: v } : null;
      }
    } else {
      const b = c.type === "external_image" || c.source_kind === "external_image", y = String(c.asset_id || "") || (b ? String(c.id || "") : "");
      u = Hs(e, y, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: b });
    }
    return Pc(u) ? { media: u, revision: hf(u) } : null;
  }, o = GP(e, t).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: Pc(n) ? { media: n, revision: hf(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: vb(e.__panoSurfaceScene.sceneState, Ac(e), t.stickers, { media: r, paintLayers: o })
  };
}
function nA(e, t, n) {
  var T, _, z, B, oe, _e, A;
  const r = String(e.__panoPreviewMode || "stickers");
  m1(e, r);
  const o = Bn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (z = (_ = (T = e.__panoCutoutNodeSurface) == null ? void 0 : T.session) == null ? void 0 : _.refresh) == null || z.call(_)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (oe = (B = e.__panoStickersNodeSurface) == null ? void 0 : B.session) == null ? void 0 : oe.refresh) == null || _e.call(oe));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== u) && (t.width = c, t.height = u);
  const b = { x: 0, y: 0, w: c, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, u);
  const y = (e.__panoSurfacePlayback ? tA(e.__panoSurfacePlayback) : DP(e, ["pano_input_videos"], () => {
    var L, se;
    return (se = (L = e.__panoDomPreview) == null ? void 0 : L.requestDraw) == null ? void 0 : se.call(L);
  })) || VP(
    e,
    Bi,
    () => {
      var L, se;
      return (se = (L = e.__panoDomPreview) == null ? void 0 : L.requestDraw) == null ? void 0 : se.call(L);
    },
    { preserveReadyWhilePending: !1 }
  ), v = Pc(y);
  let x = null;
  const N = (L, se) => {
    x || (x = e0(e, o, y));
    const Pe = n.render({ width: L.w, height: L.h, camera: se, ...x });
    return Pe && d.drawImage(Pe.canvas, Pe.x, Pe.y, Pe.width, Pe.height, L.x, L.y, L.w, L.h), !!Pe;
  };
  if (r === "cutout") {
    const L = jP(o), se = qP(y), Pe = L ? Z(Mi(L).aspect, 0.1, 10) : v ? Z(Number(se.width / se.height), 0.05, 20) : 1, de = dp(b, Pe);
    e.__panoCutoutNodeFrame = de;
    let U = "none";
    const q = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (L)
      if (y && !v)
        U = "loading";
      else if (v) {
        const D = c2({ width: c, height: u }, de, L);
        [
          !D.fallback || N(D.fallback.rect, Ps(D.fallback.shot)),
          N(D.rect, Ps(D.shot)),
          !D.fallback || N(de, Ps(L))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const D = e.__panoLastCutoutShot;
      D ? (e.__panoPreviewView = qb(D, { width: c, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), v ? N(b, vc(e.__panoPreviewView, c, u)) || (U = "loading") : y ? U = "loading" : U = "empty";
    }
    v || n.release(), n.failed && U === "loading" && (U = "none"), L && (e.__panoLastCutoutShot = { ...L }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, u), d.rect(de.x, de.y, de.w, de.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(de.x + 0.5, de.y + 0.5, Math.max(0, de.w - 1), Math.max(0, de.h - 1)), d.restore()), U === "loading" ? (mf(e, !1), Pl(e, !0, q)) : U === "empty" ? (mf(e, !0), Pl(e, !1, "")) : (mf(e, !1), Pl(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!y || v) && (x = e0(e, o, y), !x.background && !x.layers.length ? (n.release(), k = !0) : k = N(b, vc(e.__panoPreviewView, c, u)));
  const P = !k && !n.failed;
  Pl(e, P, P ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), P && zP(d, b, Qg(t, b));
  const E = yd(e, c, u);
  !y && k && rA(d, E, Qg(t, b));
  const R = String(((A = o == null ? void 0 : o.active) == null ? void 0 : A.selected_sticker_id) || ""), W = ld(o, Ac(e)), V = k ? W.find((L) => String((L == null ? void 0 : L.id) || "") === R && (L == null ? void 0 : L.visible) !== !1) : null;
  k && W.filter((L) => L !== V && (L == null ? void 0 : L.visible) !== !1 && (L.external || L.source_kind === "external_image")).filter((L) => !Pc(Hs(e, L.id, null, { external: !0 }))).forEach((L) => JP(d, L, E)), V && ZP(d, V, E);
}
function t0(e, t, n, r, o = 1) {
  let a = !1;
  e.strokeStyle = r, e.lineWidth = o, e.beginPath();
  for (const c of t) {
    const u = n.project(c);
    if (u.z <= 1e-4) {
      a = !1;
      continue;
    }
    a ? e.lineTo(u.x, u.y) : (e.moveTo(u.x, u.y), a = !0);
  }
  e.stroke();
}
function rA(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(qn(b, u));
    t0(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(qn(u, b));
    t0(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: qn(0, 0) },
    { name: "Right", dir: qn(90, 0) },
    { name: "Back", dir: qn(180, 0) },
    { name: "Left", dir: qn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const c = Math.max(9, Math.round(11 * n));
  e.font = `500 ${c}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((u) => {
    const d = t.project(u.dir);
    d.z > 1e-4 && e.fillText(u.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function bd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function iA(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function dr(e, t) {
  return iA(e, t) ? !1 : (bd(e), !0);
}
function n0() {
  var n;
  const e = (n = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function oA(e) {
  var n;
  if (!e) return;
  const t = (n = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function aA(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !c1(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function sA(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function r0(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && lA(e, 180, t);
    }
  };
}
function lA(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function gs(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const cA = /* @__PURE__ */ new WeakMap();
function g1(e, t) {
  return Cb(cA, e, t) ? !1 : (TP(e, t), h1(e), gs(e), !0);
}
async function uA(e) {
  var n, r;
  const t = await $N(e, Kt, Jt);
  t && (g1(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function fA(e, t = {}) {
  var Ui;
  const n = t.__allowStandalone === !0, r = u1(e);
  if (r && !n) {
    _p(e);
    return;
  }
  r && aA(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: Jg(e)
  }, u = "dom", d = c.signature || Jg(e);
  if (Number(e.__panoRebindGeneration || 0), md(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, hd(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (Ui = e.__panoDomPreview) != null && Ui.widget || (e.__panoLegacyPreviewHooked && Xl(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, y = b ? 0 : 56, v = b ? 0 : o2, x = document.createElement("div");
  if (vP(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
    "width:100%",
    b ? "height:auto" : "height:100%",
    v > 0 ? `min-height:${v}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), b) {
    const G = kc(dd(
      e.addDOMWidget(pd(), "preview", x, r0(e, null))
    ));
    gs(e), e.__panoDomPreview = { widget: G, root: x, requestDraw: () => {
    } }, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom";
    return;
  }
  const N = document.createElement("div");
  N.style.cssText = [
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
  const P = document.createElement("div");
  P.style.cssText = [
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
  ].join(";"), P.textContent = "Connect ERP image", N.appendChild(k), N.appendChild(P), x.appendChild(N);
  const E = Iy(x), R = document.createElement("div");
  R && (R.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", R.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild(R)), _P(e, 120, 120), gs(e);
  let W = null;
  try {
    sA(e, y, () => {
      var G, he;
      return (he = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : he.call(G);
    }), W = kc(dd(e.addDOMWidget(
      pd(),
      "preview",
      x,
      r0(
        e,
        () => {
          var G, he;
          return (he = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : he.call(G);
        },
        y,
        v,
        !1
      )
    )));
  } catch {
    return;
  }
  const V = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = () => {
    V.destroyed || (V.needsDraw = !0, !V.inTick && !V.raf && (V.raf = requestAnimationFrame(Ae)));
  }, _ = wb(T), z = /* @__PURE__ */ Na(o ? { ...Kb(Bn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Yb(Bn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((G) => ({ value: G, label: G }))
  });
  let B = null;
  if (o && e.__panoSceneStateV2) {
    const [G, he] = [0, 1].map(() => {
      const De = document.createElement("video");
      return De.playsInline = !0, De.preload = "auto", De.crossOrigin = "anonymous", De.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", N.appendChild(De), De;
    }), ee = document.createElement("canvas");
    ee.__panoFrameIdx = 0;
    const Te = document.createElement("canvas");
    Te.__panoFrameIdx = 0;
    const Je = r2({
      video: G,
      stickerVideo: he,
      createImage: (De, rt) => {
        const Ft = new Image();
        return Ft.onload = rt, Ft.onerror = rt, Ft.src = De, Ft;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (De) => requestAnimationFrame(De),
        cancelFrame: (De) => cancelAnimationFrame(De)
      },
      readState: () => Bn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: T,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var rt;
        if (!(G.videoWidth > 0 && G.videoHeight > 0)) return;
        const De = Math.min(1, yP / G.videoWidth);
        ee.width = Math.round(G.videoWidth * De), ee.height = Math.round(G.videoHeight * De), (rt = ee.getContext("2d")) == null || rt.drawImage(G, 0, 0, ee.width, ee.height), ee.__panoFrameIdx += 1, T();
      },
      onStickerCapture: () => {
        var De;
        he.videoWidth > 0 && he.videoHeight > 0 && (Te.width = he.videoWidth, Te.height = he.videoHeight, (De = Te.getContext("2d")) == null || De.drawImage(he, 0, 0), Te.__panoFrameIdx += 1, T());
      },
      onChange: () => {
        z.playing = Je.playing, T();
      }
    });
    B = { playback: Je, video: G, still: ee, stickerVideo: he, stickerStill: Te, stickerSource: "" }, e.__panoSurfacePlayback = B;
  }
  const oe = () => {
    var Ft;
    const { playback: G, still: he, stickerStill: ee } = B, Te = n2(N, !!((Ft = e.flags) != null && Ft.collapsed)), Je = G.source, De = Te ? eA(e) : null, rt = G.follow({
      shown: Te,
      sources: Te ? QP(e) : [],
      state: Bn(e),
      sticker: De
    });
    ((De == null ? void 0 : De.src) || "") !== B.stickerSource && (B.stickerSource = (De == null ? void 0 : De.src) || "", ee.width = 0), G.source !== Je && (he.width = 0, he.__panoFrameIdx = 0), z.playable = rt, z.playing = G.playing;
  }, _e = () => B == null ? void 0 : B.playback.pause();
  let A = null;
  const L = (o ? e2 : f2)({
    readState: () => Bn(e),
    publishLiveState: (G) => {
      G ? (A = G, e.__panoLiveStateOverride = G) : (e.__panoLiveStateOverride === A && (e.__panoLiveStateOverride = null), A = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, T();
    },
    commitState: (G) => {
      var Te, Je, De, rt;
      const he = ga(e, "state_json");
      if (!he) return;
      cb(e, G.active);
      const ee = ub(e, G);
      fb(e, ee, String(he.value ?? "")) || (he.value = ee, (Te = he.callback) == null || Te.call(he, ee), e.__panoStateCache = null, (Je = e.setDirtyCanvas) == null || Je.call(e, !0, !0), (rt = (De = e.graph) == null ? void 0 : De.setDirtyCanvas) == null || rt.call(De, !0, !0));
    },
    onChange: (G) => Object.assign(z, G)
  }), Pe = o ? o1(e, (G = "sync", he = null) => {
    var Yt;
    if (!o || !e.graph || !L || L.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Vt = xn(e, "external-sticker"), xt = Bn(e).stickers.find((or) => or.source.kind === "port");
      return L.apply({
        type: "sync-port",
        value: Hb(e, {
          pose: Vt ? Cs(e, "pano_sticker_input_pose", he) : null,
          image: xt ? Hs(e, xt.id, null, { external: !0 }) : null
        })
      });
    }
    const ee = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Vt) => String((Vt == null ? void 0 : Vt.name) || "") === "sticker_image") : -1, Te = ee >= 0 ? ((Yt = e.getInputLink(ee)) == null ? void 0 : Yt.id) ?? null : null;
    if (Te == null)
      return L.apply({ type: "sync-external", value: { connected: !1 } });
    if (!xn(e, "external-sticker")) return !1;
    const Je = Cs(e, "pano_sticker_input_pose", he), De = Array.isArray(Je) ? Je[0] : Je, rt = String(Cs(e, "pano_sticker_input_state_hash", he) ?? ""), Ft = e.__panoPreviewView || { yaw: 0, pitch: 0 }, on = Bn(e), Ln = (Array.isArray(on == null ? void 0 : on.stickers) ? on.stickers : []).find((Vt) => String((Vt == null ? void 0 : Vt.id) || "") === "sticker_image_1"), Ut = Hs(e, "sticker_image_1", null, { external: !0 }), Io = De && typeof De == "object" ? De : Ln || { yaw_deg: Ft.yaw, pitch_deg: Ft.pitch, hFOV_deg: 30, rot_deg: 0 };
    return L.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Te,
        stateHash: rt,
        pose: Io,
        imageWidth: Number((Ut == null ? void 0 : Ut.naturalWidth) || (Ut == null ? void 0 : Ut.width) || 0),
        imageHeight: Number((Ut == null ? void 0 : Ut.naturalHeight) || (Ut == null ? void 0 : Ut.height) || 0)
      }
    });
  }) : () => {
  };
  let de = 0;
  const U = async (G) => {
    if (!o || !L || !Cr(G)) return !1;
    _e();
    const he = `asset_${Math.random().toString(16).slice(2, 10)}`, ee = `st_${Math.random().toString(16).slice(2, 10)}`, Te = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    de += 1, z.importing = !0;
    const Je = hs(e, `add:${he}`, async () => {
      const De = await ms(G), rt = await fo(G, {
        fetchApi: (Ft, on) => Jt.fetchApi(Ft, on)
      });
      return Ee(), L.apply({
        type: "add-sticker",
        value: {
          stickerId: ee,
          assetId: he,
          asset: rt,
          imageWidth: De.width,
          imageHeight: De.height,
          yaw_deg: Number(Te.yaw || 0),
          pitch_deg: Number(Te.pitch || 0)
        }
      });
    });
    try {
      return await Je;
    } catch {
      return !1;
    } finally {
      de = Math.max(0, de - 1), z.importing = de > 0, T();
    }
  };
  let q = null, D = null, O = null, Q = !1;
  const te = () => {
    var G;
    return O && (clearTimeout(O), O = null), Q ? (Q = !1, ((G = L == null ? void 0 : L.commitGesture) == null ? void 0 : G.call(L)) ?? !1) : !1;
  }, Ee = () => {
    var Te, Je, De;
    const G = te(), he = (q == null ? void 0 : q.pointerId) ?? (D == null ? void 0 : D.pointerId);
    if (q = null, D = null, he != null) {
      try {
        (Te = k.hasPointerCapture) != null && Te.call(k, he) && ((Je = k.releasePointerCapture) == null || Je.call(k, he));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const ee = ((De = L == null ? void 0 : L.commitGesture) == null ? void 0 : De.call(L)) ?? !1;
    return G || ee;
  }, Fe = () => {
    var Te, Je, De;
    const G = te(), he = q == null ? void 0 : q.pointerId;
    if (q = null, he != null) {
      try {
        (Te = k.hasPointerCapture) != null && Te.call(k, he) && ((Je = k.releasePointerCapture) == null || Je.call(k, he));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const ee = ((De = L == null ? void 0 : L.cancelGesture) == null ? void 0 : De.call(L)) ?? !1;
    return G || ee;
  }, vt = () => Ee();
  L && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(vt));
  let ht = null, $ = !1;
  if (R && L)
    try {
      gp(), ht = $d(o ? R2 : C2, {
        model: z,
        onAction: (G) => {
          var Te, Je;
          if ((G == null ? void 0 : G.type) === "toggle-playback") {
            Ee(), B == null || B.playback.toggle();
            return;
          }
          if (_e(), (G == null ? void 0 : G.type) === "open-editor") {
            Ee(), o || (z.aspectOpen = !1), (Te = e.__panoOpenEditor) == null || Te.call(e);
            return;
          }
          if (o) {
            if ((G == null ? void 0 : G.type) === "add-image-file") {
              U(G.file);
              return;
            }
            L.apply(G) && T();
            return;
          }
          if ((G == null ? void 0 : G.type) === "toggle-aspect") {
            z.aspectOpen = !z.aspectOpen;
            return;
          }
          if ((G == null ? void 0 : G.type) === "close-aspect") {
            z.aspectOpen = !1;
            return;
          }
          let he = G;
          if ((G == null ? void 0 : G.type) === "add-frame") {
            const De = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            he = {
              ...G,
              ...s2(De, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((G == null ? void 0 : G.type) === "delete-frame") {
            const De = ko(Bn(e));
            De && (e.__panoPreviewView = qb(De, {
              width: k.width,
              height: k.height
            }));
          }
          const ee = ((Je = e.__panoCutoutNodeFrame) == null ? void 0 : Je.safeRect) || null;
          z.aspectOpen = !1, L.apply({ ...he, safeRect: ee }) && T();
        }
      }), ht.mount(R), $ = !0;
    } catch {
      ht = null, $ = !1;
    }
  const gt = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    B && oe(), T();
  }) : null;
  gt == null || gt.observe(N);
  const Ae = (G) => {
    var ee, Te;
    V.raf = 0, V.inTick = !0;
    let he = !1;
    try {
      he = wt.stepInertia(G), (V.needsDraw || he) && (V.needsDraw = !1, B && oe(), (ee = e.flags) != null && ee.collapsed || nA(e, k, _), z.viewUnavailable = _.failed);
    } finally {
      V.inTick = !1;
    }
    (he || V.needsDraw) && !V.raf && (V.raf = requestAnimationFrame(Ae)), bP() && (!e.__panoDebugLastTs || G - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = G, e.__panoPreviewMode, hd(e), ls(x), ls(N), ls(k), ls(x.parentElement), ls((Te = x.parentElement) == null ? void 0 : Te.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, wt = Kd({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (G) => {
      e.__panoPreviewView = G;
    },
    getViewportSize: () => {
      const G = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(G.width || k.clientWidth || 0)),
        h: Math.max(1, Number(G.height || k.clientHeight || 0))
      };
    },
    getInvert: () => {
      const G = qg();
      return {
        x: G.invert_view_x ? -1 : 1,
        y: G.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      T();
    }
  }), Et = o ? N : x, gn = (G) => {
    const he = k.getBoundingClientRect();
    return {
      x: (Number(G.clientX) - he.left) * (k.width / Math.max(1, he.width)),
      y: (Number(G.clientY) - he.top) * (k.height / Math.max(1, he.height))
    };
  }, ei = (G) => {
    var Te, Je;
    if (!o || !a) return;
    const he = Bn(e), ee = Wg(
      ld(he, Ac(e)),
      String(((Te = he == null ? void 0 : he.active) == null ? void 0 : Te.selected_sticker_id) || ""),
      gn(G),
      yd(e, k.width, k.height)
    );
    if (!ee) {
      k.style.cursor = "grab";
      return;
    }
    if (((Je = ee.item) == null ? void 0 : Je.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = ee.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (G) => {
    var Ft, on, Ln, Ut, Io, Tt, Yt, Vt, xt, or, ni;
    if (!dr(G, Et) || G.button !== 0) return;
    if (!o) {
      const dn = ko(Bn(e)), xr = e.__panoCutoutNodeFrame;
      if (!dn) {
        (Ft = x.focus) == null || Ft.call(x, { preventScroll: !0 }), (on = k.setPointerCapture) == null || on.call(k, G.pointerId), k.style.cursor = "grabbing", wt.startDrag(G.clientX, G.clientY, G.pointerId);
        return;
      }
      if (dn.locked === !0 || !xr || !L) return;
      const Oo = gn(G);
      let Eo;
      if (G.shiftKey) {
        const vn = Zb({
          frame: xr,
          point: Oo,
          startRollDeg: Number(dn.roll_deg ?? dn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!vn) return;
        Eo = { kind: "roll", pointerId: G.pointerId, rollGesture: vn };
      } else {
        const vn = ((Ln = Bn(e)) == null ? void 0 : Ln.ui_settings) || qg();
        Eo = {
          kind: "pan",
          pointerId: G.pointerId,
          startPoint: Oo,
          startShot: { ...dn },
          focalPx: _o(xr, dn),
          invertX: vn.invert_view_x === !0,
          invertY: vn.invert_view_y === !0
        };
      }
      Ee(), (Ut = x.focus) == null || Ut.call(x, { preventScroll: !0 }), (Io = k.setPointerCapture) == null || Io.call(k, G.pointerId), k.style.cursor = "grabbing", L.beginGesture(), q = Eo;
      return;
    }
    if (!a) return;
    const he = gn(G), ee = Bn(e), Te = String(((Tt = ee == null ? void 0 : ee.active) == null ? void 0 : Tt.selected_sticker_id) || ""), Je = yd(e, k.width, k.height);
    (Yt = x.focus) == null || Yt.call(x, { preventScroll: !0 });
    const De = () => Wg(ld(ee, Ac(e)), Te, he, Je);
    let rt = De();
    if (rt && (B != null && B.playback.playing) && (_e(), rt = De()), rt && L) {
      if (wt.stopMotion(), Ee(), String(((Vt = rt.item) == null ? void 0 : Vt.id) || "") !== Te && L.apply({ type: "select-sticker", id: rt.item.id }), ((xt = rt.item) == null ? void 0 : xt.locked) === !0) {
        T();
        return;
      }
      const dn = he, xr = rt.geometry.center;
      D = {
        active: !0,
        kind: rt.hit.kind,
        pointerId: G.pointerId,
        startPoint: dn,
        startCenter: { ...xr },
        startSticker: { ...rt.item },
        startDistance: Math.max(1, Math.hypot(dn.x - xr.x, dn.y - xr.y)),
        startAngle: Math.atan2(dn.y - xr.y, dn.x - xr.x),
        projection: Je
      }, L.beginGesture(), (or = k.setPointerCapture) == null || or.call(k, G.pointerId), k.style.cursor = rt.hit.kind === "rotate" ? "grabbing" : rt.hit.kind === "move" ? "move" : rt.hit.cursor, T();
      return;
    }
    (ni = k.setPointerCapture) == null || ni.call(k, G.pointerId), k.style.cursor = "grabbing", wt.startDrag(G.clientX, G.clientY, G.pointerId);
  }), k.addEventListener("pointermove", (G) => {
    if (!o) {
      if (!q) {
        if (!wt.state.drag.active) return;
        dr(G, Et), wt.moveDrag(G.clientX, G.clientY, "pano");
        return;
      }
      if (q.pointerId !== G.pointerId || !L) return;
      if (dr(G, Et), q.kind === "pan") {
        const ee = gn(G);
        L.updateGesture({
          type: "pan-camera",
          startShot: q.startShot,
          dx: ee.x - q.startPoint.x,
          dy: ee.y - q.startPoint.y,
          focalPx: q.focalPx,
          invertX: q.invertX,
          invertY: q.invertY
        });
        return;
      }
      const he = Qb(q.rollGesture, gn(G), G);
      if (!he) return;
      q.rollGesture = he.gesture, L.updateGesture({ type: "set-roll", value: he.rollDeg });
      return;
    }
    if (!D && !wt.state.drag.active) {
      ei(G);
      return;
    }
    if (D) {
      if (D.pointerId !== G.pointerId || !L) return;
      dr(G, Et);
      const he = gn(G);
      let ee = D.startSticker;
      if (D.kind === "move")
        ee = j2(
          D.startSticker,
          {
            x: D.startCenter.x + he.x - D.startPoint.x,
            y: D.startCenter.y + he.y - D.startPoint.y
          },
          D.projection
        );
      else if (D.kind === "scale") {
        const Te = Math.hypot(he.x - D.startCenter.x, he.y - D.startCenter.y);
        ee = H2(D.startSticker, D.startDistance, Te);
      } else if (D.kind === "rotate") {
        const Te = Math.atan2(he.y - D.startCenter.y, he.x - D.startCenter.x);
        ee = G2(D.startSticker, D.startAngle, Te, G.shiftKey === !0);
      }
      L.updateGesture({ type: "set-transform", value: ee }), T();
      return;
    }
    !a || !wt.state.drag.active || (dr(G, Et), wt.moveDrag(G.clientX, G.clientY, "pano"));
  });
  const j = () => {
    var he, ee;
    if (!q && !D) {
      if (!wt.state.drag.active) return;
      wt.endDrag(), k.style.cursor = "grab", T();
      return;
    }
    if (!L) return;
    const G = (q == null ? void 0 : q.pointerId) ?? (D == null ? void 0 : D.pointerId);
    q = null, D = null;
    try {
      (he = k.hasPointerCapture) != null && he.call(k, G) && ((ee = k.releasePointerCapture) == null || ee.call(k, G));
    } catch {
    }
    L.cancelGesture(), k.style.cursor = "grab", T();
  }, K = (G, he = !1) => {
    var ee, Te, Je, De;
    if (!o) {
      if (!q) {
        if (!wt.state.drag.active) return;
        dr(G, Et), (ee = k.releasePointerCapture) == null || ee.call(k, G.pointerId), k.style.cursor = "grab", wt.endDrag(), T();
        return;
      }
      if (q.pointerId !== G.pointerId || !L) return;
      dr(G, Et), q = null, (Te = k.releasePointerCapture) == null || Te.call(k, G.pointerId), k.style.cursor = "grab", he ? L.cancelGesture() : L.commitGesture(), ei(G), T();
      return;
    }
    if (D) {
      if (D.pointerId !== G.pointerId || !L) return;
      dr(G, Et), D = null, (Je = k.releasePointerCapture) == null || Je.call(k, G.pointerId), k.style.cursor = "grab", he ? L.cancelGesture() : L.commitGesture(), T();
      return;
    }
    !a || !wt.state.drag.active || (dr(G, Et), (De = k.releasePointerCapture) == null || De.call(k, G.pointerId), k.style.cursor = "grab", wt.endDrag(), T());
  };
  k.addEventListener("pointerup", K), k.addEventListener("pointercancel", (G) => K(G, !0)), k.addEventListener("lostpointercapture", j), k.addEventListener("pointerleave", (G) => {
    !o && q || D || wt.state.drag.active && K(G);
  });
  const re = (G) => {
    const he = document.activeElement;
    if (he !== x && !x.contains(he)) return;
    if (G.key === "Escape" && (q || D) && L) {
      j(), bd(G);
      return;
    }
    if (!o || G.key !== "Delete" && G.key !== "Backspace" || !L) return;
    const ee = G.target, Te = String((ee == null ? void 0 : ee.tagName) || "").toUpperCase();
    Te === "INPUT" || Te === "TEXTAREA" || ee != null && ee.isContentEditable || z.canDelete === !0 && (_e(), Ee(), L.apply({ type: "delete-selected" }) && T(), bd(G));
  };
  window.addEventListener("keydown", re, !0);
  const we = pP({
    requestFrame: (G) => requestAnimationFrame(G),
    cancelFrame: (G) => cancelAnimationFrame(G),
    restore: (G) => oA(G)
  }), ge = (G) => {
    var ee, Te, Je, De, rt, Ft;
    if (!dr(G, Et)) return;
    if (!o) {
      const on = ko(Bn(e));
      if (on && on.locked !== !0 && L) {
        const Ln = lc(G);
        Ln !== 0 && (Q || (Ee(), L.beginGesture(), Q = !0), L.updateGesture({
          type: "step-fov",
          direction: Ln
        }) ? (O && clearTimeout(O), O = setTimeout(te, 180), T()) : L.hasGestureChanges() || (L.cancelGesture(), Q = !1));
      } else if (!on) {
        const Ln = n0();
        wt.applyWheelEvent(G) && T(), we.schedule(Ln);
      }
      (ee = G.preventDefault) == null || ee.call(G), (Te = G.stopPropagation) == null || Te.call(G), (Je = G.stopImmediatePropagation) == null || Je.call(G);
      return;
    }
    if (!a) return;
    const he = n0();
    wt.applyWheelEvent(G) && T(), (De = G.preventDefault) == null || De.call(G), (rt = G.stopPropagation) == null || rt.call(G), (Ft = G.stopImmediatePropagation) == null || Ft.call(G), we.schedule(he);
  }, ve = o ? [N, k] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((G) => {
    ve.forEach((he) => he.addEventListener(G, ge, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((G) => {
    k.addEventListener(G, (he) => dr(he, Et)), N.addEventListener(G, (he) => dr(he, Et));
  });
  const Me = ga(e, "state_json");
  let Ce = null, Se = null;
  Me && !Me.__panoPreviewPatchedCb && (Ce = Me.callback, Se = (G) => {
    const he = Ce ? Ce(G) : void 0;
    return T(), he;
  }, Me.callback = Se, Me.__panoPreviewPatchedCb = Se);
  const pe = ga(e, "bg_color");
  let Oe = null, Ie = null;
  pe && !pe.__panoPreviewPatchedCb && (Oe = pe.callback, Ie = (G) => {
    const he = Oe ? Oe(G) : void 0;
    return T(), he;
  }, pe.callback = Ie, pe.__panoPreviewPatchedCb = Ie);
  const $e = e.onRemoved, Ge = e.onResize, at = e.onExecuted, st = e.onDragOver, ft = e.onDragDrop;
  let dt = null;
  const Rt = () => {
    o && (z.dropActive = !0, dt && clearTimeout(dt), dt = setTimeout(() => {
      dt = null, z.dropActive = !1;
    }, 140));
  }, Tn = o ? function(G) {
    return (st ? st.apply(this, arguments) : !1) === !0 ? !0 : bp(G == null ? void 0 : G.dataTransfer) ? (Rt(), !0) : !1;
  } : null, Dn = o ? function(G) {
    var Te;
    if ((ft ? ft.apply(this, arguments) : !1) === !0) return !0;
    const ee = Array.from(((Te = G == null ? void 0 : G.dataTransfer) == null ? void 0 : Te.files) || []).find((Je) => Cr(Je));
    return ee ? (dt && clearTimeout(dt), dt = null, z.dropActive = !1, U(ee), !0) : !1;
  } : null;
  o && (e.onDragOver = Tn, e.onDragDrop = Dn);
  const ti = o ? dP(x, {
    onActive: (G) => {
      if (G) {
        Rt();
        return;
      }
      dt && clearTimeout(dt), dt = null, z.dropActive = !1;
    },
    onDrop: (G) => {
      U(G);
    }
  }) : () => {
  }, h = function(G) {
    e.__panoOutputFromRun = !0;
    const he = g1(e, G);
    vi(e, he ? "executed" : "sync", G), T();
    const ee = at ? at.apply(this, arguments) : void 0;
    return gs(e), ee;
  };
  e.onExecuted = h;
  const We = e.onConnectionsChange, rn = function(G, he) {
    const ee = Fg(e, G, he, sp), Te = Fg(e, G, he, Bi), Je = arguments, De = We ? We.apply(this, Je) : void 0, rt = () => {
      V.destroyed || (Te && $P(e), ee && vi(e, "connection-change"), gs(e), T());
    };
    return rt(), queueMicrotask(rt), De;
  };
  e.onConnectionsChange = rn;
  const en = function() {
    const G = Ge ? Ge.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, T(), G;
  };
  e.onResize = en;
  const Pi = function() {
    return Co(), gd.unregister(this), $e ? $e.apply(this, arguments) : void 0;
  };
  e.onRemoved = Pi;
  const Co = () => {
    var G, he, ee, Te, Je, De, rt, Ft, on;
    V.destroyed = !0, (G = gt == null ? void 0 : gt.disconnect) == null || G.call(gt), o ? Ee() : Fe(), k.removeEventListener("lostpointercapture", j), ti(), E(), window.removeEventListener("keydown", re, !0), (ee = (he = e.__panoStateFlushers) == null ? void 0 : he.delete) == null || ee.call(he, vt), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Te = L == null ? void 0 : L.destroy) == null || Te.call(L), (Je = ht == null ? void 0 : ht.unmount) == null || Je.call(ht), B && (B.playback.dispose(), B.video.remove(), B.stickerVideo.remove(), e.__panoSurfacePlayback === B && (e.__panoSurfacePlayback = null)), _.dispose(), e.__panoSurfaceScene = null, (rt = (De = e.__panoRasterObjectSurfaceCache) == null ? void 0 : De.dispose) == null || rt.call(De), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Pe(), we.dispose(), dt && clearTimeout(dt), dt = null, vp.disposeOwner(e), ya(e), V.raf && cancelAnimationFrame(V.raf), V.raf = 0, ((Ft = e.__panoCutoutNodeSurface) == null ? void 0 : Ft.session) === L && (e.__panoCutoutNodeSurface = null), ((on = e.__panoStickersNodeSurface) == null ? void 0 : on.session) === L && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === en && (e.onResize = Ge), e.onExecuted === h && (e.onExecuted = at), e.onConnectionsChange === rn && (e.onConnectionsChange = We), Se && (Me == null ? void 0 : Me.callback) === Se && (Me.callback = Ce), Se && (Me == null ? void 0 : Me.__panoPreviewPatchedCb) === Se && delete Me.__panoPreviewPatchedCb, Ie && (pe == null ? void 0 : pe.callback) === Ie && (pe.callback = Oe), Ie && (pe == null ? void 0 : pe.__panoPreviewPatchedCb) === Ie && delete pe.__panoPreviewPatchedCb, e.onDragOver === Tn && (e.onDragOver = st), e.onDragDrop === Dn && (e.onDragDrop = ft), e.onRemoved === Pi && (e.onRemoved = $e);
  };
  e.__panoDomRestore = Co, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = L && $ && !o ? { session: L, model: z } : null, e.__panoStickersNodeSurface = L && $ && o ? { session: L, model: z } : null, e.__panoDomPreview = {
    widget: W,
    root: x,
    canvas: k,
    requestDraw: T,
    state: V,
    emptyHintEl: P,
    nodeSurface: e.__panoCutoutNodeSurface
  }, gd.register(e), e.graph && vi(e, "attach"), T();
}
function i0(e, t = {}) {
  f1(e).attach({
    ...t,
    mode: "cutout"
  });
}
function o0(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (u1(e) && !n) {
    _p(e);
    return;
  }
  f1(e).attach(t);
}
function dA(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function pA(e, t = 1, n = Cg) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, b = Number(n), y = Number.isFinite(b) && b > 0 ? b : Cg, v = Math.max(u, d), x = v > 0 ? Math.min(1, y / v) : 1;
  return {
    width: Math.max(1, Math.round(u * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function hA({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var N;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let c = !1, u = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const k = d();
    return k === u || (u = k, o(k)), k;
  }, y = () => b();
  return (N = t == null ? void 0 : t.addEventListener) == null || N.call(t, "fullscreenchange", y), b(), { toggle: async () => {
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
    var k, P, E;
    if (!c) {
      if (c = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", y), d())
        try {
          const R = (P = t.exitFullscreen) == null ? void 0 : P.call(t);
          (E = R == null ? void 0 : R.catch) == null || E.call(R, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const mA = { class: "pano-preview-node-surface" }, gA = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ne(), ue("div", mA, [
      Re(un, {
        icon: e.model.fullscreen ? ot(ke).fullscreen_close : ot(ke).fullscreen,
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
      e.model.viewUnavailable ? (ne(), vr(pp, { key: 0 })) : ct("", !0)
    ]));
  }
}, Al = 140, yA = 180, a0 = 40, gf = 10;
function s0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function l0(e, t) {
  const n = s0(e), r = s0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function c0(e) {
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
  return typeof ((a = Jt) == null ? void 0 : a.apiURL) == "function" ? Jt.apiURL(o) : o;
}
function ba(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ba(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return c0({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = ba(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : c0(e);
}
function y1(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function bA(e) {
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
function vd(e) {
  var o;
  const t = (o = Ir) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (l0(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (l0(a, n)) return t[a];
  return null;
}
function vA(e) {
  var r, o;
  const t = vd(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const u = ba(c);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function _A(e, t = "erp_image") {
  var N, k, P, E, R, W, V;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((T) => String((T == null ? void 0 : T.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((T, _) => String((T == null ? void 0 : T.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(_))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (P = (k = (N = Ir) == null ? void 0 : N.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : P.call(k, a), u = vd(a), d = vd(e == null ? void 0 : e.id), b = [
    (E = d == null ? void 0 : d.ui) == null ? void 0 : E.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    (R = u == null ? void 0 : u.ui) == null ? void 0 : R.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const T of b)
    if (Array.isArray(T))
      for (const _ of T) {
        const z = ba(_);
        if (z) return z;
      }
  let y = [];
  try {
    y = typeof ((W = Ir) == null ? void 0 : W.getNodeImageUrls) == "function" ? Ir.getNodeImageUrls(c) || [] : [];
  } catch {
    y = [];
  }
  if (Array.isArray(y) && y.length > 0)
    for (const T of y) {
      const _ = ba(T);
      if (_) return _;
    }
  if (c) {
    const T = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const _ of T) {
      const z = ba(_);
      if (z) return z;
    }
  }
  const v = (V = c == null ? void 0 : c.widgets) == null ? void 0 : V.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image"), x = String((v == null ? void 0 : v.value) || "").trim();
  return x ? Jt.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function yf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function u0(e, t, n, r, o, a, c) {
  var b, y, v;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !y1(a) || n <= 1 || r <= 1) {
    yf(t, n, r);
    return;
  }
  if (c.failed) {
    yf(t, n, r);
    return;
  }
  const u = Number(((v = (y = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: vc(o, n, r),
    background: { media: a, revision: bA(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : yf(t, n, r);
}
function f0(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class wA {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = wb(() => this.requestDraw()), this.controller = Kd({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ht(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Z(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Z(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var o, a, c, u;
        const r = (a = (o = this.canvas) == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : a.call(o);
        return {
          w: Math.max(1, Number((r == null ? void 0 : r.width) || ((c = this.canvas) == null ? void 0 : c.clientWidth) || 0)),
          h: Math.max(1, Number((r == null ? void 0 : r.height) || ((u = this.canvas) == null ? void 0 : u.clientHeight) || 0))
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
      const u = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...c) : void 0;
      return t.requestDraw(), u;
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
        `min-height:${Al}px`,
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
          return Al;
        },
        getHeight() {
          return Al;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = kc(dd(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Al, Number(a.minHeight || 0)),
            minWidth: Math.max(yA, Number(a.minWidth || 0))
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
      return gp(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Na({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = hA({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = $d(gA, {
        model: this.surfaceModel,
        onAction: (u) => {
          var d, b;
          (u == null ? void 0 : u.type) === "toggle-fullscreen" && ((b = (d = this.fullscreenController) == null ? void 0 : d.toggle) == null || b.call(d));
        }
      }), this.surfaceApp.mount(this.surfaceHost), this.node.__panoPreviewNodeSurface = {
        mounted: !0,
        toggleFullscreen: () => {
          var u, d;
          return (d = (u = this.fullscreenController) == null ? void 0 : u.toggle) == null ? void 0 : d.call(u);
        }
      }, !0;
    } catch {
      return (n = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || n.call(t), this.fullscreenController = null, (o = (r = this.surfaceApp) == null ? void 0 : r.unmount) == null || o.call(r), this.surfaceApp = null, (c = (a = this.surfaceHost) == null ? void 0 : a.remove) == null || c.call(a), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, !1;
    }
  }
  bindDomInput(t, n) {
    var o;
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = Iy(n), t.addEventListener("pointerdown", (a) => {
      var c, u, d;
      a.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
    const r = (a) => {
      var c, u;
      this.controller.state.drag.active && ((c = t.releasePointerCapture) == null || c.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", r), t.addEventListener("pointercancel", r), n.addEventListener("wheel", (a) => {
      var c;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var c;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }), n.addEventListener("keydown", (a) => {
      var c;
      dA(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !y1(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return f0(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, y, v, x, N;
      const a = KP(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !f0(a.x, a.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((y = this.setDirtyCanvas) == null || y.call(this, !0, !1)), (v = n == null ? void 0 : n.preventDefault) == null || v.call(n), (x = n == null ? void 0 : n.stopPropagation) == null || x.call(n), (N = n == null ? void 0 : n.stopImmediatePropagation) == null || N.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, c;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - gf * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - a0 - gf);
    return { x: gf, y: a0, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), u0(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? _b : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = pA(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = vA(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t, this.videoPaused = !1;
      const u = document.createElement("video");
      u.muted = !0, u.loop = !0, u.playsInline = !0, u.crossOrigin = "anonymous";
      const d = () => {
        this.imgSrc === t && (this.img = u, this.videoPaused || u.play().catch(() => {
        }), this.requestDraw());
      }, b = () => this.requestDraw();
      u.addEventListener("loadedmetadata", d), u.addEventListener("canplay", d), u.addEventListener("timeupdate", b), u.addEventListener("play", b), u.addEventListener("pause", b), u.src = t, u.load(), this.mediaCleanup = () => {
        u.pause(), u.removeEventListener("loadedmetadata", d), u.removeEventListener("canplay", d), u.removeEventListener("timeupdate", b), u.removeEventListener("play", b), u.removeEventListener("pause", b);
      };
      return;
    }
    const n = _A(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), u0(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, u, d, b, y, v, x, N, k, P, E, R;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (v = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || v.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (N = this.root) == null ? void 0 : N.remove) == null || k.call(N);
    } catch {
    }
    try {
      l1(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((R = (E = (P = this.node) == null ? void 0 : P.widgets) == null ? void 0 : E.find) == null ? void 0 : R.call(E, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function xA(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new wA(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function b1(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const r = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[r]) return;
  e[r] = !0;
  const o = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const u = o ? o.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
  const a = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const u = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
  const c = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const u = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return u;
  };
}
function xp(e) {
  return !!(e != null && e.prototype);
}
function Gs(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function SA(e, t = {}) {
  xp(e) || xA(e, {
    ...t,
    onOpen: Gs(e, t.onOpen)
  });
}
function kA(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!xp(e)) {
    o0(e, {
      ...r,
      onOpen: Gs(e, t.onOpen)
    });
    return;
  }
  b1(e, "stickers_node_preview", (o) => {
    o0(o, {
      ...r,
      onOpen: Gs(o, t.onOpen)
    });
  });
}
function MA(e, t = {}) {
  if (!xp(e)) {
    i0(e, {
      ...t,
      onOpen: Gs(e, t.onOpen)
    });
    return;
  }
  b1(e, "cutout_preview", (n) => {
    i0(n, {
      ...t,
      onOpen: Gs(n, t.onOpen)
    });
  });
}
const Wn = {
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
}, ui = "pen";
function d0(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function NA(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function u(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((v) => {
      r.push(String(v || ""));
    }), !r.length)) return;
    const y = Number(b.index);
    Number.isInteger(y) ? y === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, y)) : o = r.length - 1;
  }
  function d(b) {
    r[o] !== b && (r.splice(o + 1), r.push(b), r.length > a && r.shift(), o = r.length - 1);
  }
  return u(t), {
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
      const b = r.length, y = Math.max(0, b - c), v = o >= 0 ? Math.max(0, Math.min(o, y)) : y, x = r.slice(v, v + c), N = o < 0 ? -1 : Math.max(-1, Math.min(x.length - 1, o - v));
      return {
        version: 1,
        entries: x,
        index: N
      };
    },
    hydrate: u
  };
}
const PA = 250, AA = 600, CA = 180, IA = 2;
function OA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function ys(e, t, n) {
  return e + (t - e) * n;
}
function EA(e, t, n = 1) {
  const r = Math.max(
    Math.abs(Gd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), o = Math.hypot(...t.position.map((c, u) => c - e.position[u])) / Math.max(n, 1e-6), a = Math.min(1, r / CA + o / IA);
  return Math.round(ys(PA, AA, a));
}
function FA(e, t, n) {
  const r = OA(Z(n, 0, 1));
  return {
    position: e.position.map((o, a) => ys(o, t.position[a], r)),
    yaw_deg: Ht(e.yaw_deg + Gd(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: ys(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: ys(e.hFOV_deg, t.hFOV_deg, r),
    distance: ys(e.distance, t.distance, r)
  };
}
function TA(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(Gd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function DA(e, t, n, { scale: r = 1, end: o = null } = {}) {
  return TA(e, t) ? null : { from: e, to: t, startTs: n, durationMs: EA(e, t, r), end: o };
}
function LA(e, t) {
  const n = Z((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: FA(e.from, e.to, n), done: !1 };
}
function ql(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function RA(e, t, n) {
  const r = ql(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function Zo(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function VA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function $A({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: r,
  colorsApproximatelyEqual: o,
  rgb01ToHsv: a,
  hsv01ToRgb: c,
  getBrushPresetIdForTool: u,
  isActiveLassoTool: d
}) {
  var V, T;
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", y = {
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
    historyEntries: Array.from({ length: 8 }, (_, z) => ({ index: z, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return y;
  const v = ((V = t.find((_) => o(e.paintColor, _.color))) == null ? void 0 : V.id) || "", x = !v, N = a(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((T = e.customPaintColor) == null ? void 0 : T.a) ?? 1))) * 100), P = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), E = e.brushSizes[P] ?? 10, R = d(), W = Array.from({ length: 8 }, (_, z) => e.customPaintHistory[z] || null);
  return {
    ...y,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: v,
    customColorActive: x,
    customColorCss: r(e.customPaintColor, 1),
    pickerHueColor: r({ ...c(N.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, N.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, N.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, N.h)) * 100}%`,
    alphaValue: k,
    alphaText: `${k}%`,
    historyEntries: W.map((_, z) => ({
      index: z,
      color: _ ? { cssColor: r(_, 1) } : null
    })),
    sizeValue: E,
    sizeText: String(E),
    sizeFill: `${Math.max(0, Math.min(100, (E - 1) / 119 * 100))}%`,
    sizeDisabled: R,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function zA({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function bf(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function jA({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: o }) {
  const a = !r && !!o;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!n || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!n || !!r },
      "toggle-grid": {
        icon: a ? ke.eye : ke.eye_dashed,
        pressed: a ? "true" : "false",
        label: a ? "Hide Grid" : "Show Grid",
        tip: a ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function HA({ hasShot: e, erp: t = !1, studio: n = !1 }) {
  const r = !e || t;
  return { disabled: r, tip: n && r ? e ? "A 360° camera has no frame" : "Add a camera to use the Frame view" : null };
}
function GA(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const va = "erp", KA = ["1:1", "4:3", "3:2", "16:9"];
function v1(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...KA.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: va, label: Number(n) === 180 ? "180°" : "360°", active: e === va }] : []
  ];
}
function WA({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: a,
  params: c,
  notes: u,
  visibilityRows: d,
  uiSettings: b,
  normalizeCoverageValue: y
}) {
  return {
    coverage: { value: y(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || o === "stroke" || o === "camera" || o === "world" || a.length > 1,
      label: "Copy State"
    },
    params: c,
    notes: u,
    paramsDisabled: !r,
    visibilityRows: d,
    uiSettings: t ? null : b,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function BA({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: r,
  geom: o,
  allLocked: a,
  anyLocked: c,
  selectedLocked: u,
  activeAspect: d,
  cutoutAspectOpen: b,
  isExternalSticker: y,
  isStickerHidden: v,
  canRestoreSelectedToInitial: x,
  iconSet: N,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: k = !1,
  cameraDeletable: P = !1,
  erpChoice: E = !1,
  coverage: R = 360
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let W = [];
  if (n.length > 1)
    W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  else if (r === "image") {
    if (W = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u }
    ], y(t) || (W.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: N.duplicate }), W.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: N.replace_image })), y(t)) {
      const V = x(), T = v(t);
      W.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: V ? "Back to initial position" : "Already at initial position",
        icon: N.back_initial,
        disabled: !V
      }), W.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: T ? "Show" : "Hide",
        tip: T ? "Show input image" : "Hide input image",
        icon: T ? N.eye : N.eye_dashed
      });
    }
    W.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed }), y(t) || W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u });
  } else
    W = [
      {
        key: "aspect",
        kind: "aspect",
        icon: N.aspect,
        open: !!b,
        choices: v1(d, { erp: E, coverage: R })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90, disabled: d === va }
    ], k ? P && W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete }) : W.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    );
  return _1(o.corners, W);
}
const p0 = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function UA({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: o = !1 }) {
  const a = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], c = r ? p0.filter((u) => u.cameraTip) : p0;
  return _1([...e, ...a], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: c.map(({ key: u, label: d, tip: b, cameraTip: y }) => ({ key: u, label: d, tip: r ? y : b, pressed: u === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...o ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: ke.delete }] : []
  ]);
}
function YA(e, t, n, r, o) {
  const { minX: u, maxX: d, minY: b, maxY: y } = e || {};
  if (![u, d, b, y].every(Number.isFinite)) return null;
  const v = Math.min(Math.max((u + d) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), x = Math.max(14, o - n - 14), N = y + 18, k = b - 18 - n;
  let P;
  return N <= x ? P = Math.max(N, 14) : k >= 14 ? P = Math.min(k, x) : P = Math.min(Math.max(N, 14), x), { left: v, top: P };
}
function _1(e, t) {
  const n = e.map((b) => ({ x: Number(b == null ? void 0 : b.x), y: Number(b == null ? void 0 : b.y) })).filter((b) => Number.isFinite(b.x) && Number.isFinite(b.y));
  if (!n.length) return { visible: !1, left: 0, top: 0, items: [] };
  const r = n.map((b) => b.x), o = n.map((b) => b.y), a = Math.min(...r), c = Math.max(...r), u = Math.min(...o), d = Math.max(...o);
  return {
    visible: !0,
    left: (a + c) * 0.5,
    top: d + 18,
    items: t,
    anchor: { minX: a, maxX: c, minY: u, maxY: d }
  };
}
const XA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function qA(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: c, playing: u, label: d, audio: b = null, fpsLocked: y = !1, camera: v = !1, stickers: x = !0, scene: N = !1, sceneLocked: k = !1 }) {
  const P = (T, _, z, B, oe, _e, A = !0) => {
    const L = (se) => (r == null ? void 0 : r.owner) === T && r.lane === se ? r.frames.map((Pe) => Pe + _e) : [];
    return {
      id: T,
      label: z,
      icon: B,
      clip: oe,
      selected: T === o,
      keyable: A,
      open: A && c.has(T),
      keyed: mM(_, t - _e),
      keys: hM(_).map((se) => ({ frame: se.frame + _e, full: se.full })),
      selectedFrames: L(null),
      lanes: (A ? Ao(_) : []).map((se) => ({
        key: `${T}:${se}`,
        lane: se,
        label: XA[se],
        frames: _[se].keyframes.map((Pe) => Pe.frame + _e),
        selectedFrames: L(se)
      }))
    };
  }, E = x ? e.stickers : [], R = E.filter((T) => T.placement === "sky").sort((T, _) => _.z_index - T.z_index), W = E.filter((T) => T.placement === "world"), V = ({ start: T, in: _, duration: z }) => ({ clip: { start: T, end: z === null ? null : T + z }, offset: T - _ });
  return {
    visible: !0,
    expanded: a,
    playing: u,
    hasAudio: !!b,
    muted: !!(b != null && b.muted),
    frame: t,
    span: n,
    label: d,
    fps: e.timeline.fps,
    fpsLocked: y || k,
    lengthLocked: k,
    lockTip: k ? "Set by the scene" : "Set by the video input",
    length: k ? n : e.timeline.length,
    rows: [
      ...v ? [P("camera", e.camera, "Camera", ke.camera, null, 0)] : [],
      ...[...R, ...W].map((T) => {
        const { clip: _, offset: z } = V(T.clip);
        return P(T.id, T, Jf(T), ke.image, _, z);
      }),
      ...x && (N || eb(e.scene)) ? [(() => {
        const { clip: T, offset: _ } = V(e.scene.clip);
        return P("scene", e.scene, "Scene", ke.box, T, _, !1);
      })()] : []
    ]
  };
}
function JA(e, t, n, r) {
  const o = bM(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const ZA = { class: "pano-floating-right" }, QA = {
  key: 0,
  class: "pano-floating-space"
}, eC = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, tC = ["data-settled"], nC = ["data-ready", "data-settled"], rC = ["aria-label", "data-tip"], iC = {
  key: 1,
  class: "pano-camera-preview-label"
}, oC = {
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
    return (t, n) => (ne(), ue(Xe, null, [
      Y("div", ZA, [
        e.space ? wi((ne(), ue("div", QA, [
          Y("div", eC, [
            (ne(!0), ue(Xe, null, _t(e.space.modes, (r) => (ne(), vr(un, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Re(un, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Mo, e.space.visible]
        ]) : ct("", !0),
        (ne(!0), ue(Xe, null, _t(e.buttons, (r) => (ne(), vr(un, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      wi(Y("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Y("div", {
          class: ut(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Mt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = Y("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Y("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (ne(), ue("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Re(Lt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, rC)) : ct("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ne(), ue("div", iC, tt(e.preview.label || "Preview unavailable"), 1)) : ct("", !0)
        ], 14, nC)
      ], 8, tC), [
        [Mo, e.preview.visible]
      ])
    ], 64));
  }
}, aC = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, sC = ["y2", "transform"], lC = ["transform"], cC = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = pt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => wi((ne(), ue("div", {
      class: ut(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ne(), ue("svg", aC, [
        a[1] || (a[1] = Y("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ne(!0), ue(Xe, null, _t(ot(n), (c) => (ne(), ue("line", {
          key: c,
          class: ut(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, sC))), 128)),
        Y("g", { transform: r.value }, [...a[0] || (a[0] = [
          Y("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, lC),
        a[2] || (a[2] = Y("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Mo, e.model.visible === !0]
    ]);
  }
}, uC = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", {
      class: ut(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Re(t1, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Re(un, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Re(cC, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, fC = ["aria-label"], dC = { class: "pano-canvas-confirm-title" }, pC = { class: "pano-canvas-confirm-text" }, hC = { class: "pano-canvas-confirm-actions" }, mC = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, gC = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Zt(null), r = /* @__PURE__ */ Zt(null);
    let o = null;
    function a() {
      const v = r.value;
      return v ? Array.from(v.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((x) => x instanceof HTMLElement ? !x.hidden && x.tabIndex >= 0 && x.offsetParent !== null : !1) : [];
    }
    function c(v) {
      const x = r.value;
      if (!x) return;
      const N = x.querySelector(`[data-action='${v}']`);
      N instanceof HTMLButtonElement && N.click();
    }
    function u() {
      var P;
      const v = r.value;
      if (!v) return;
      const x = v.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const k = a()[0] || v;
      (P = k == null ? void 0 : k.focus) == null || P.call(k);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(v) {
      var R;
      if (v.defaultPrevented) return;
      if (v.key === "Escape") {
        v.preventDefault(), v.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (v.key !== "Tab") return;
      const x = a(), N = r.value;
      if (!x.length) {
        v.preventDefault(), (R = N == null ? void 0 : N.focus) == null || R.call(N);
        return;
      }
      const k = x[0], P = x[x.length - 1], E = document.activeElement;
      if (v.shiftKey) {
        (E === k || E === N || !(N != null && N.contains(E))) && (v.preventDefault(), P.focus());
        return;
      }
      (E === P || !(N != null && N.contains(E))) && (v.preventDefault(), k.focus());
    }
    function y(v) {
      v.target === n.value && c("confirm-cancel");
    }
    return bo(() => t.model.visible, (v, x) => {
      if (v) {
        o = document.activeElement, Rc(() => {
          u();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), Bs(() => {
      d();
    }), (v, x) => e.model.visible === !0 ? (ne(), ue("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Dt(y, ["self"])
    }, [
      Y("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        Y("div", dC, tt(e.model.title), 1),
        Y("div", pC, tt(e.model.text), 1),
        Y("div", hC, [
          x[0] || (x[0] = Y("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Y("button", mC, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, fC)
    ], 512)) : ct("", !0);
  }
}, yC = ["data-paint-pane"], bC = ["hidden"], vC = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], _C = ["aria-pressed", "disabled"], wC = ["hidden"], xC = { class: "pano-paint-color-pop-head" }, SC = { class: "pano-paint-color-field" }, kC = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, MC = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, NC = { class: "pano-paint-color-field" }, PC = { class: "pano-paint-alpha-wrap" }, AC = ["value"], CC = { "data-paint-alpha-value": "" }, IC = ["hidden"], OC = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, EC = ["data-paint-history-index", "aria-label", "disabled"], FC = ["data-paint-footer"], TC = ["data-paint-group"], DC = ["hidden"], LC = ["value", "disabled"], RC = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, VC = ["hidden"], $C = {
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
    return (r, o) => (ne(), ue("div", {
      class: ut(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ne(!0), ue(Xe, null, _t(e.panes, (a) => {
        var c;
        return ne(), ue("div", {
          key: a.key,
          class: ut(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ne(), ue("div", {
            key: 0,
            class: ut(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ne(!0), ue(Xe, null, _t(e.paintSwatches, (u) => (ne(), ue("button", {
              key: u.id,
              class: ut(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: Mt(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, vC))), 128)),
            Y("button", {
              class: ut(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Mt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, _C),
            Y("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Mt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Y("div", xC, [
                Y("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Mt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = Y("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Y("div", SC, [
                Y("div", kC, [
                  Y("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Mt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Y("div", MC, [
                  Y("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Mt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Y("label", NC, [
                o[1] || (o[1] = Y("span", null, "Opacity", -1)),
                Y("div", PC, [
                  Y("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, AC),
                  Y("span", CC, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Y("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Y("div", OC, [
                  (ne(!0), ue(Xe, null, _t(e.state.historyEntries || [], (u) => (ne(), ue("button", {
                    key: u.index,
                    class: ut(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: Mt(n(u.color))
                  }, null, 14, EC))), 128))
                ])
              ], 8, IC)
            ], 12, wC)
          ], 10, bC)) : ct("", !0),
          Y("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            Y("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (ne(!0), ue(Xe, null, _t(a.tools, (u) => {
                var d;
                return ne(), vr(un, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, TC),
            Y("div", {
              class: ut(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              Y("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Mt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, LC),
              Y("span", RC, tt(e.state.sizeText || "10"), 1)
            ], 10, DC),
            Y("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              Re(un, {
                icon: ot(ke).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, VC)
          ], 8, FC)
        ], 10, yC);
      }), 128))
    ], 2));
  }
}, zC = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ Zt(null), r = /* @__PURE__ */ Zt(null), o = /* @__PURE__ */ Zt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, u) => (ne(), ue(Xe, null, [
      Y("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Y("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        Y("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, jC = ["aria-label"], HC = ["data-tip", "aria-pressed"], GC = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = pt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, o) => (ne(), ue("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Mt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (ne(!0), ue(Xe, null, _t(e.buttons, (a) => (ne(), ue("button", gi({
        key: a.key,
        class: ["pano-segments-item", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), tt(a.label), 17, HC))), 128))
    ], 12, jC));
  }
}, KC = {
  key: 0,
  class: "pano-cutout-menu"
}, WC = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, BC = ["data-aspect"], UC = ["data-action", "aria-label", "data-tip", "disabled"], YC = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Mt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ne(!0), ue(Xe, null, _t(e.model.items || [], (r) => (ne(), ue(Xe, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ne(), ue("div", KC, [
          Y("button", WC, [
            Re(Lt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          Y("div", {
            class: ut(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ne(!0), ue(Xe, null, _t(r.choices || [], (o) => (ne(), ue("button", {
              key: o.value,
              class: ut(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, tt(o.label), 11, BC))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (ne(), vr(GC, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (ne(), ue("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Re(Lt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, UC))
      ], 64))), 128))
    ], 4));
  }
}, XC = {
  key: 0,
  class: "pano-easing"
}, qC = { class: "pano-section-title" }, JC = { class: "pano-easing-range" }, ZC = { class: "pano-easing-modes" }, QC = ["aria-pressed", "onClick"], eI = ["viewBox"], tI = ["x", "y"], nI = ["x1", "y1", "x2", "y2"], rI = ["d"], iI = ["x1", "y1", "x2", "y2"], oI = ["x1", "y1", "x2", "y2"], aI = ["cx", "cy"], sI = ["cx", "cy"], lI = { class: "pano-easing-note" }, fi = 132, so = 14, cI = {
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
    ], a = /* @__PURE__ */ Zt(null), c = pt(() => {
      var k;
      return Array.isArray((k = n.model) == null ? void 0 : k.easing) ? n.model.easing : null;
    }), u = (k) => so + k * fi, d = (k) => so + (1 - k) * fi, b = pt(() => {
      var W;
      if (((W = n.model) == null ? void 0 : W.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [k, P, E, R] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(k)} ${d(P)} ${u(E)} ${d(R)} ${u(1)} ${d(1)}`;
    }), y = pt(() => c.value ? c.value.map((k) => k.toFixed(2)).join(", ") : "");
    function v(k) {
      var P;
      return JSON.stringify(k.easing) === JSON.stringify((P = n.model) == null ? void 0 : P.easing);
    }
    function x(k, P) {
      r("timeline", { type: "easing", easing: k, commit: P });
    }
    function N(k, P) {
      var T;
      if (k.button !== 0 || !c.value) return;
      const E = k.currentTarget;
      (T = E.setPointerCapture) == null || T.call(E, k.pointerId);
      let R = null;
      const W = (_) => {
        const z = a.value.getBoundingClientRect(), B = z.width / (fi + so * 2), oe = ((_.clientX - z.left) / B - so) / fi, _e = 1 - ((_.clientY - z.top) / B - so) / fi;
        R = [...R || c.value], R[P] = Math.round(Math.min(1, Math.max(0, oe)) * 100) / 100, R[P + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, x(R, !1);
      }, V = () => {
        E.removeEventListener("pointermove", W), E.removeEventListener("pointerup", V), E.removeEventListener("pointercancel", V), R && x(R, !0);
      };
      E.addEventListener("pointermove", W), E.addEventListener("pointerup", V), E.addEventListener("pointercancel", V);
    }
    return (k, P) => e.model ? (ne(), ue("div", XC, [
      Y("div", qC, [
        P[2] || (P[2] = Y("span", null, "Easing", -1)),
        Y("span", JC, tt(e.model.label), 1)
      ]),
      Y("div", ZC, [
        (ne(), ue(Xe, null, _t(o, (E) => Y("button", {
          key: E.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": v(E) ? "true" : "false",
          onClick: (R) => x(E.easing, !0)
        }, tt(E.label), 9, QC)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ne(), ue("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${fi + so * 2} ${fi + so * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Y("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: fi,
          height: fi
        }, null, 8, tI),
        Y("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, nI),
        Y("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, rI),
        c.value ? (ne(), ue(Xe, { key: 0 }, [
          Y("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, iI),
          Y("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, oI),
          Y("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: P[0] || (P[0] = (E) => N(E, 0))
          }, null, 40, aI),
          Y("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: P[1] || (P[1] = (E) => N(E, 2))
          }, null, 40, sI)
        ], 64)) : ct("", !0)
      ], 8, eI)) : ct("", !0),
      Y("div", lI, [
        e.model.mixed ? (ne(), ue(Xe, { key: 0 }, [
          fs("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ne(), ue(Xe, { key: 1 }, [
          fs("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ne(), ue(Xe, { key: 2 }, [
          fs("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ne(), ue(Xe, { key: 3 }, [
          fs("cubic-bezier(" + tt(y.value) + ")", 1)
        ], 64)) : ct("", !0)
      ])
    ])) : ct("", !0);
  }
}, uI = {
  class: "pano-side",
  "data-side": ""
}, fI = { class: "pano-side-head" }, dI = { class: "pano-side-title" }, pI = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, hI = {
  key: 0,
  class: "pano-side-scroll"
}, mI = { class: "pano-inspector" }, gI = { class: "pano-ui-row pano-coverage-row" }, yI = ["data-selected"], bI = ["aria-pressed", "disabled"], vI = ["aria-pressed", "disabled"], _I = {
  key: 0,
  class: "pano-section-title"
}, wI = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, xI = {
  class: "pano-picker",
  "data-picker": "selection"
}, SI = ["disabled"], kI = { class: "pano-picker-label" }, MI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, NI = ["hidden"], PI = ["data-selection-id"], AI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, CI = {
  key: 2,
  class: "pano-state-actions"
}, II = ["disabled"], OI = ["data-key"], EI = ["min", "max", "step", "value", "disabled", "data-param-key"], FI = ["min", "max", "step", "value", "disabled", "data-param-key"], TI = { class: "pano-visibility-section" }, DI = { class: "pano-visibility-stack" }, LI = ["data-visibility-row"], RI = { class: "pano-visibility-name" }, VI = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, $I = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], zI = ["open"], jI = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, HI = { class: "pano-ui-settings-body" }, GI = { class: "pano-ui-row" }, KI = ["data-selected"], WI = ["aria-pressed"], BI = ["aria-pressed"], UI = { class: "pano-ui-row" }, YI = ["data-selected"], XI = ["aria-pressed"], qI = ["aria-pressed"], JI = {
  key: 1,
  class: "pano-side-footer"
}, ZI = ["data-action"], QI = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = pt(() => {
      const u = n.model;
      return !u || typeof u != "object" ? !1 : Object.keys(u).length > 0 && !!u.coverage;
    });
    function a(u) {
      return { "--v": `${Number((u == null ? void 0 : u.fillPct) || 0)}%` };
    }
    function c(u, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (u == null ? void 0 : u.enabled) === !1;
    }
    return (u, d) => {
      var b, y, v, x, N;
      return ne(), ue("div", uI, [
        Y("div", fI, [
          Y("div", dI, [
            Y("span", pI, [
              Re(Lt, {
                icon: ot(ke).globe
              }, null, 8, ["icon"])
            ]),
            Y("span", null, tt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Y("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = Y("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ne(), ue("div", hI, [
          Y("div", mI, [
            d[11] || (d[11] = Y("div", { class: "pano-section-title" }, [
              Y("span", null, "Scene")
            ], -1)),
            Y("div", gI, [
              d[2] || (d[2] = Y("label", null, "Coverage", -1)),
              Y("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((b = e.model.coverage) == null ? void 0 : b.value) === 180 ? "1" : "0"
              }, [
                Y("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((y = e.model.coverage) == null ? void 0 : y.value) === 360 ? "true" : "false",
                  disabled: ((v = e.model.coverage) == null ? void 0 : v.disabled) === !0
                }, "360", 8, bI),
                Y("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 180 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "180", 8, vI)
              ], 8, yI)
            ]),
            e.model.transformTitle !== !1 ? (ne(), ue("div", _I, [...d[3] || (d[3] = [
              Y("span", null, "Transform", -1)
            ])])) : ct("", !0),
            e.model.selectionPicker ? (ne(), ue("div", wI, [
              Y("label", null, tt(e.model.selectionPicker.label), 1),
              Y("div", xI, [
                Y("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Y("span", kI, [
                    e.model.selectionPicker.currentIcon ? (ne(), ue("span", MI, [
                      Re(Lt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    Y("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Y("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, SI),
                Y("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ne(!0), ue(Xe, null, _t(e.model.selectionPicker.items || [], (k) => (ne(), ue("button", {
                    key: k.id,
                    type: "button",
                    class: ut(["pano-picker-item", { active: k.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": k.id
                  }, [
                    k.icon ? (ne(), ue("span", AI, [
                      Re(Lt, {
                        icon: k.icon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    Y("span", null, tt(k.label), 1)
                  ], 10, PI))), 128))
                ], 8, NI)
              ])
            ])) : ct("", !0),
            e.model.copyStateButton ? (ne(), ue("div", CI, [
              Y("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Re(Lt, {
                  icon: ot(ke).copy
                }, null, 8, ["icon"]),
                Y("span", null, tt(e.model.copyStateButton.label), 1)
              ], 8, II)
            ])) : ct("", !0),
            Y("div", {
              class: ut(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ne(!0), ue(Xe, { key: 0 }, _t(e.model.notes, (k) => (ne(), ue("div", {
                key: k,
                class: "pano-param-note"
              }, tt(k), 1))), 128)) : (ne(!0), ue(Xe, { key: 1 }, _t(e.model.params || [], (k) => (ne(), ue("div", {
                key: k.key,
                class: "pano-field",
                "data-key": k.key
              }, [
                Y("label", null, tt(k.label), 1),
                Y("input", {
                  type: "range",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.value,
                  disabled: c(k, e.model),
                  style: Mt(a(k)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": k.key
                }, null, 12, EI),
                Y("input", {
                  type: "number",
                  min: k.min,
                  max: k.max,
                  step: k.step,
                  value: k.displayValue,
                  disabled: c(k, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": k.key
                }, null, 8, FI)
              ], 8, OI))), 128))
            ], 2),
            Re(cI, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (k) => r("timeline", k))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (ne(), ue(Xe, { key: 3 }, [
              d[6] || (d[6] = Y("div", { class: "pano-divider" }, null, -1)),
              Y("div", TI, [
                d[5] || (d[5] = Y("div", { class: "pano-section-title" }, [
                  Y("span", null, "Layers")
                ], -1)),
                Y("div", DI, [
                  (ne(!0), ue(Xe, null, _t(e.model.visibilityRows, (k) => (ne(), ue("div", {
                    key: k.key,
                    class: ut(["pano-visibility-row", { "is-hidden": k.visible === !1, "is-disabled": k.enabled === !1 }]),
                    "data-visibility-row": k.key
                  }, [
                    Y("span", RI, [
                      Y("span", VI, [
                        Re(Lt, {
                          icon: k.icon
                        }, null, 8, ["icon"])
                      ]),
                      Y("span", null, tt(k.label), 1)
                    ]),
                    Y("button", {
                      class: ut(["pano-visibility-toggle", { active: k.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": k.key,
                      "aria-label": k.ariaLabel,
                      "aria-pressed": k.visible === !0 ? "true" : "false",
                      "data-tip": k.tip,
                      disabled: k.enabled === !1
                    }, [
                      Re(Lt, {
                        icon: k.visible === !0 ? ot(ke).eye : ot(ke).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, $I)
                  ], 10, LI))), 128))
                ])
              ])
            ], 64)) : ct("", !0),
            e.model.uiSettings ? (ne(), ue("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Y("summary", null, [
                d[7] || (d[7] = Y("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Y("span", jI, [
                  Re(Lt, {
                    icon: ot(ke).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Y("div", HI, [
                Y("div", GI, [
                  d[8] || (d[8] = Y("label", null, "Drag X", -1)),
                  Y("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    Y("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, WI),
                    Y("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, BI)
                  ], 8, KI)
                ]),
                Y("div", UI, [
                  d[9] || (d[9] = Y("label", null, "Drag Y", -1)),
                  Y("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    Y("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, XI),
                    Y("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, qI)
                  ], 8, YI)
                ]),
                d[10] || (d[10] = Y("div", { class: "pano-ui-row" }, [
                  Y("span"),
                  Y("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, zI)) : ct("", !0)
          ])
        ])) : ct("", !0),
        (e.model.footerButtons || []).length ? (ne(), ue("div", JI, [
          (ne(!0), ue(Xe, null, _t(e.model.footerButtons, (k) => (ne(), ue("button", {
            key: k.action,
            class: ut(["pano-btn", { "pano-btn-primary": k.primary === !0 }]),
            type: "button",
            "data-action": k.action
          }, tt(k.label), 11, ZI))), 128))
        ])) : ct("", !0)
      ]);
    };
  }
}, eO = { class: "pano-timeline-bar" }, tO = ["aria-label", "data-tip"], nO = ["aria-label", "data-tip"], rO = { class: "pano-timeline-time" }, iO = ["data-tip"], oO = { key: 0 }, aO = ["value"], sO = ["data-tip"], lO = { key: 0 }, cO = ["value"], uO = ["aria-expanded"], fO = ["inert"], dO = { class: "pano-timeline-name" }, pO = ["disabled", "aria-expanded", "aria-label", "onClick"], hO = ["title", "aria-current", "onClick"], mO = ["data-keyed", "aria-label", "onClick"], gO = ["onPointerdown"], yO = ["onPointerdown"], bO = ["onPointerdown"], vO = ["onPointerdown"], _O = ["aria-label", "data-tip", "onPointerdown"], wO = { key: 0 }, xO = ["onPointerdown"], SO = ["aria-label", "data-tip", "onPointerdown"], kO = { key: 0 }, MO = 10, NO = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Zt(null), c = /* @__PURE__ */ Zt(null), u = /* @__PURE__ */ Zt(1), d = /* @__PURE__ */ Zt(0), b = /* @__PURE__ */ Zt(!1);
    let y = null, v = null, x = null;
    $c(() => {
      y = new ResizeObserver(([U]) => {
        u.value = Math.max(1, U.contentRect.width);
      }), a.value && y.observe(a.value), v = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), c.value && v.observe(c.value);
    }), Bs(() => {
      y == null || y.disconnect(), v == null || v.disconnect(), x == null || x();
    });
    const N = pt(() => Math.max(1, Number(n.model.span || 1))), k = pt(() => u.value / N.value), P = (U) => `${U / N.value * 100}%`, E = pt(() => {
      const U = o.find((D) => D * k.value >= 56) || o[o.length - 1], q = [];
      for (let D = 0; D < N.value; D += U) q.push(D);
      return q;
    });
    function R(U) {
      const q = a.value.getBoundingClientRect(), D = Math.floor((U - q.left) / Math.max(1, q.width) * N.value);
      return Math.min(N.value - 1, Math.max(0, D));
    }
    function W(U, q, D) {
      const O = Math.ceil(MO / Math.max(1e-6, k.value)), Q = new Map(q.map((te) => [te.frame, te.full]));
      return MM(q.map((te) => te.frame), O).map((te, Ee) => ({
        ...te,
        key: `${U}:${Ee}`,
        partial: te.frames.some((Fe) => !Q.get(Fe)),
        selected: te.frames.some((Fe) => D.includes(Fe))
      }));
    }
    function V(U) {
      return W(U.id, U.keys, U.selectedFrames);
    }
    function T(U) {
      return W(U.key, U.frames.map((q) => ({ frame: q, full: !0 })), U.selectedFrames);
    }
    function _(U) {
      const q = U.end === null ? N.value : U.end;
      return { left: P(U.start), width: P(Math.max(0, q - U.start)) };
    }
    function z(U, q) {
      const D = U.clientX, O = Math.max(1e-6, k.value);
      let Q = 0;
      q("start", 0, U);
      const te = (Fe) => {
        if (Fe.pointerId !== U.pointerId) return;
        const vt = Math.round((Fe.clientX - D) / O);
        vt !== Q && (Q = vt, q("move", Q, Fe));
      }, Ee = (Fe) => {
        Fe.pointerId === U.pointerId && (x(), q("end", Q, Fe));
      };
      x == null || x(), x = () => {
        window.removeEventListener("pointermove", te), window.removeEventListener("pointerup", Ee), window.removeEventListener("pointercancel", Ee), x = null;
      }, window.addEventListener("pointermove", te), window.addEventListener("pointerup", Ee), window.addEventListener("pointercancel", Ee);
    }
    function B(U) {
      U.button === 0 && z(U, (q, D, O) => r("action", { type: "seek", frame: R(O.clientX), phase: q }));
    }
    function oe(U, q, D) {
      U.button === 0 && (r("action", { type: "select-row", id: q.id }), z(U, (O, Q) => r("action", { type: "clip", id: q.id, mode: D, delta: Q, phase: O })));
    }
    function _e(U, q, D, O, Q) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: q.id, lane: D, frames: O.frames, additive: !0 });
          return;
        }
        O.frames.every((te) => Q.includes(te)) || r("action", { type: "select-keys", owner: q.id, lane: D, frames: O.frames, additive: !1 }), z(U, (te, Ee) => r("action", { type: "move-keys", delta: Ee, phase: te }));
      }
    }
    const A = pt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function L(U, q, D) {
      r("action", q), await Rc(), U.target.value = D();
    }
    function se(U) {
      L(U, { type: "fps", fps: Number(U.target.value) }, () => A.value);
    }
    function Pe(U) {
      const q = U.target.value.trim();
      L(U, { type: "length", length: q ? Number(q) : null }, () => n.model.length ?? "");
    }
    function de(U, q, D) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: q.id, lane: D, frames: [], additive: !1 });
    }
    return (U, q) => wi((ne(), ue("section", {
      class: ut(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Y("div", eO, [
        Y("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: q[0] || (q[0] = (D) => r("action", { type: "play" }))
        }, [
          Re(Lt, {
            icon: e.model.playing ? ot(ke).pause : ot(ke).play
          }, null, 8, ["icon"])
        ], 8, tO),
        e.model.hasAudio ? (ne(), ue("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: q[1] || (q[1] = (D) => r("action", { type: "mute" }))
        }, [
          Re(Lt, {
            icon: e.model.muted ? ot(ke).volume_muted : ot(ke).volume2
          }, null, 8, ["icon"])
        ], 8, nO)) : ct("", !0),
        Y("span", rO, tt(e.model.label), 1),
        Y("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (ne(), ue("span", oO, tt(A.value), 1)) : (ne(), ue("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: A.value,
            "aria-label": "Timeline fps",
            onChange: se
          }, null, 40, aO)),
          q[6] || (q[6] = Y("span", null, "fps", -1))
        ], 8, iO),
        Y("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          q[7] || (q[7] = Y("span", null, "Length", -1)),
          e.model.lengthLocked ? (ne(), ue("span", lO, tt(e.model.length), 1)) : (ne(), ue("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Pe
          }, null, 40, cO))
        ], 8, sO),
        Y("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: q[2] || (q[2] = (D) => r("action", { type: "toggle-expanded" }))
        }, [
          q[8] || (q[8] = Y("span", null, "Timeline", -1)),
          Re(Lt, {
            icon: ot(ke).chevron
          }, null, 8, ["icon"])
        ], 8, uO)
      ]),
      Y("div", {
        class: ut(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: Mt({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: q[3] || (q[3] = Dt((D) => b.value = !0, ["self"])),
        onTransitionend: q[4] || (q[4] = Dt((D) => b.value = !1, ["self"])),
        onTransitioncancel: q[5] || (q[5] = Dt((D) => b.value = !1, ["self"]))
      }, [
        Y("div", {
          ref_key: "gridRef",
          ref: c,
          class: "pano-timeline-grid"
        }, [
          q[9] || (q[9] = Y("div", { class: "pano-timeline-corner" }, null, -1)),
          Y("div", {
            ref_key: "rulerRef",
            ref: a,
            class: "pano-timeline-ruler",
            onPointerdown: B
          }, [
            (ne(!0), ue(Xe, null, _t(E.value, (D) => (ne(), ue("span", {
              key: D,
              class: "pano-timeline-tick",
              style: Mt({ left: P(D) })
            }, tt(D), 5))), 128)),
            Y("span", {
              class: "pano-timeline-playhead",
              style: Mt({ left: P(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (ne(!0), ue(Xe, null, _t(e.model.rows || [], (D) => (ne(), ue(Xe, {
            key: D.id
          }, [
            Y("div", {
              class: ut(["pano-timeline-head", { selected: D.selected }])
            }, [
              Y("div", dO, [
                Y("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !D.keyable,
                  "aria-expanded": D.open ? "true" : "false",
                  "aria-label": D.open ? `Hide ${D.label} parameters` : `Show ${D.label} parameters`,
                  onClick: Dt((O) => r("action", { type: "toggle-row", id: D.id }), ["stop"])
                }, [
                  Re(Lt, {
                    icon: ot(ke).chevron
                  }, null, 8, ["icon"])
                ], 8, pO),
                Y("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: D.label,
                  "aria-current": D.selected ? "true" : void 0,
                  onClick: (O) => r("action", { type: "select-row", id: D.id })
                }, [
                  Re(Lt, {
                    icon: D.icon
                  }, null, 8, ["icon"]),
                  Y("span", null, tt(D.label), 1)
                ], 8, hO),
                D.keyable ? (ne(), ue("button", {
                  key: 0,
                  class: ut(["pano-timeline-key", { keyed: D.keyed }]),
                  type: "button",
                  "data-keyed": D.keyed ? "true" : "false",
                  "aria-label": D.keyed ? `Every ${D.label} parameter has a keyframe here; update them` : `Add keyframes for every ${D.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Dt((O) => r("action", { type: "key-row", owner: D.id }), ["stop"])
                }, [
                  Re(Lt, {
                    icon: ot(ke).keyframe
                  }, null, 8, ["icon"])
                ], 10, mO)) : ct("", !0)
              ]),
              D.open ? (ne(!0), ue(Xe, { key: 0 }, _t(D.lanes, (O) => (ne(), ue("div", {
                key: O.key,
                class: "pano-timeline-lane-head"
              }, tt(O.label), 1))), 128)) : ct("", !0)
            ], 2),
            Y("div", {
              class: ut(["pano-timeline-track", { selected: D.selected }])
            }, [
              Y("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (O) => de(O, D, null)
              }, [
                D.clip ? (ne(), ue("div", {
                  key: 0,
                  class: ut(["pano-timeline-clip", { open: D.clip.end === null }]),
                  style: Mt(_(D.clip)),
                  onPointerdown: Dt((O) => oe(O, D, "move"), ["stop"])
                }, [
                  Y("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Dt((O) => oe(O, D, "start"), ["stop"])
                  }, null, 40, bO),
                  Y("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Dt((O) => oe(O, D, "end"), ["stop"])
                  }, null, 40, vO)
                ], 46, yO)) : ct("", !0),
                (ne(!0), ue(Xe, null, _t(V(D), (O) => (ne(), ue("button", {
                  key: O.key,
                  type: "button",
                  class: ut(["pano-timeline-pin", { selected: O.selected, cluster: O.frames.length > 1, partial: O.partial }]),
                  style: Mt({ left: P(O.frame + 0.5) }),
                  "aria-label": `${D.label}: ${O.frames.length > 1 ? `${O.frames.length} keyframes` : `keyframe at frame ${O.frames[0]}`}`,
                  "data-tip": O.frames.length > 1 ? `${O.frames.length} keyframes` : `Frame ${O.frames[0]}`,
                  onPointerdown: Dt((Q) => _e(Q, D, null, O, D.selectedFrames), ["stop"])
                }, [
                  O.frames.length > 1 ? (ne(), ue("span", wO, tt(O.frames.length), 1)) : ct("", !0)
                ], 46, _O))), 128))
              ], 40, gO),
              D.open ? (ne(!0), ue(Xe, { key: 0 }, _t(D.lanes, (O) => (ne(), ue("div", {
                key: O.key,
                class: "pano-timeline-lane",
                onPointerdown: (Q) => de(Q, D, O.lane)
              }, [
                (ne(!0), ue(Xe, null, _t(T(O), (Q) => (ne(), ue("button", {
                  key: Q.key,
                  type: "button",
                  class: ut(["pano-timeline-pin", { selected: Q.selected, cluster: Q.frames.length > 1 }]),
                  style: Mt({ left: P(Q.frame + 0.5) }),
                  "aria-label": `${O.label}: ${Q.frames.length > 1 ? `${Q.frames.length} keyframes` : `keyframe at frame ${Q.frames[0]}`}`,
                  "data-tip": Q.frames.length > 1 ? `${Q.frames.length} keyframes` : `Frame ${Q.frames[0]}`,
                  onPointerdown: Dt((te) => _e(te, D, O.lane, Q, O.selectedFrames), ["stop"])
                }, [
                  Q.frames.length > 1 ? (ne(), ue("span", kO, tt(Q.frames.length), 1)) : ct("", !0)
                ], 46, SO))), 128))
              ], 40, xO))), 128)) : ct("", !0),
              Y("span", {
                class: "pano-timeline-playhead",
                style: Mt({ left: P(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, fO)
    ], 2)), [
      [Mo, e.model.visible]
    ]);
  }
}, PO = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", {
      class: ut(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Mt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, tt(e.model.text || ""), 7));
  }
}, AO = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, CO = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", AO, [
      (ne(!0), ue(Xe, null, _t(e.buttons, (r) => wi((ne(), vr(un, {
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
        [Mo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, IO = ["data-video-ready"], OO = { class: "pano-video-transport-shell" }, EO = { class: "pano-video-controls-left" }, FO = { class: "pano-video-filmstrip" }, TO = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, DO = ["src", "onLoad"], LO = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, RO = ["max", "value", "disabled"], VO = { class: "pano-video-controls-right" }, $O = ["data-has-audio"], zO = { class: "pano-video-volume-pop" }, jO = ["value", "disabled"], HO = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? "Pause" : "Play";
    }), r = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? "Pause video" : "Play video";
    }), o = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? ke.pause : ke.play;
    }), a = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = pt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? ke.loop_off : ke.loop;
    }), d = pt(() => {
      var _, z;
      return ((_ = t.state) == null ? void 0 : _.muted) === !0 || Number(((z = t.state) == null ? void 0 : z.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = pt(() => {
      var _, z, B;
      return ((_ = t.state) == null ? void 0 : _.hasAudio) !== !0 ? ke.volume : ((z = t.state) == null ? void 0 : z.muted) === !0 || Number(((B = t.state) == null ? void 0 : B.volume) ?? 1) <= 0 ? ke.volume_muted : ke.volume2;
    }), y = pt(() => {
      var _;
      return Math.max(0, Math.min(100, Number(((_ = t.state) == null ? void 0 : _.progressPct) || 0)));
    }), v = pt(() => ({ left: `${y.value}%` })), x = pt(() => {
      var oe, _e;
      const _ = (oe = t.state) == null ? void 0 : oe.volumePct, z = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, B = Number(_ ?? z ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, B))}%`
      };
    }), N = pt(() => {
      var B, oe;
      const z = [
        String(((B = t.state) == null ? void 0 : B.currentTimeLabel) || "0:00"),
        String(((oe = t.state) == null ? void 0 : oe.durationLabel) || "0:00")
      ].reduce((_e, A) => Math.max(_e, A.length), 4);
      return `${Math.max(4, z)}ch`;
    }), k = pt(() => ({ "--pano-video-time-ch": N.value })), P = pt(() => {
      var B, oe;
      const _ = Array.isArray((B = t.state) == null ? void 0 : B.thumbnails) ? t.state.thumbnails : [];
      if (_.length) return _;
      const z = Math.max(7, Number(((oe = t.state) == null ? void 0 : oe.thumbnailCount) || 9));
      return Array.from({ length: z }, (_e, A) => ({
        id: `placeholder-${A}`,
        src: "",
        label: ""
      }));
    }), E = /* @__PURE__ */ Zt(/* @__PURE__ */ new Set()), R = (_) => String((_ == null ? void 0 : _.id) || (_ == null ? void 0 : _.src) || (_ == null ? void 0 : _.label) || ""), W = (_) => E.value.has(R(_)), V = (_) => {
      const z = new Set(E.value);
      z.add(R(_)), E.value = z;
    };
    bo(P, (_) => {
      const z = new Set(_.map(R)), B = /* @__PURE__ */ new Set();
      for (const oe of E.value)
        z.has(oe) && B.add(oe);
      E.value = B;
    }, { immediate: !0 });
    const T = pt(() => {
      var _;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((_ = t.state) == null ? void 0 : _.shellMaxWidthPx) || 640))}px`
      };
    });
    return (_, z) => (ne(), ue("div", {
      class: ut(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Mt(T.value)
    }, [
      z[1] || (z[1] = Y("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      z[2] || (z[2] = Y("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Y("div", OO, [
        Y("div", EO, [
          Re(un, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          Y("div", {
            class: "pano-video-time pano-video-time-start",
            style: Mt(k.value)
          }, tt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Y("div", FO, [
          Y("div", TO, [
            (ne(!0), ue(Xe, null, _t(P.value, (B) => (ne(), ue("div", {
              key: R(B),
              class: ut(["pano-video-thumb", {
                "is-placeholder": !B.src,
                "is-loaded": B.src && W(B)
              }])
            }, [
              B.src ? (ne(), ue("img", {
                key: 0,
                src: B.src,
                alt: "",
                draggable: "false",
                onLoad: (oe) => V(B)
              }, null, 40, DO)) : (ne(), ue("span", LO))
            ], 2))), 128))
          ]),
          Y("div", {
            class: "pano-video-playhead",
            style: Mt(v.value),
            "aria-hidden": "true"
          }, [...z[0] || (z[0] = [
            Y("span", { class: "pano-video-playhead-line" }, null, -1),
            Y("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          Y("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, RO)
        ]),
        Y("div", VO, [
          Y("div", {
            class: "pano-video-time pano-video-time-end",
            style: Mt(k.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          Re(un, {
            "extra-class": "pano-video-control",
            icon: u.value,
            label: a.value,
            tip: c.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          Y("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Y("div", zO, [
              Y("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Mt(x.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, jO)
            ]),
            Re(un, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, $O)
        ])
      ])
    ], 14, IO));
  }
}, GO = { class: "pano-floating-top" }, KO = ["data-selected", "data-view-count"], WO = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], BO = { class: "label" }, UO = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ne(), ue("div", GO, [
        Y("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ne(!0), ue(Xe, null, _t(e.buttons, (o) => wi((ne(), ue("button", {
            key: o.key,
            class: ut(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            "aria-disabled": o.disabled === !0 ? "true" : null,
            tabindex: o.disabled === !0 ? -1 : null,
            "data-tip": o.tip || null
          }, [
            Re(Lt, {
              icon: o.icon
            }, null, 8, ["icon"]),
            Y("span", BO, tt(o.label), 1)
          ], 10, WO)), [
            [Mo, o.visible !== !1]
          ])), 128))
        ], 8, KO)
      ]);
    };
  }
};
function w1(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: ke.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: ke.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: ke.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: ke.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: ke.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: ke.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: ke.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: ke.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: ke.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: ke.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: ke.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: ke.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: ke.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: ke.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: ke.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: ke.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: ke.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: ke.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: ke.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: ke.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: ke.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: ke.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: ke.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: ke.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: ke.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: ke.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: ke.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: ke.lasso_tool }
        ]
      }
    ]
  };
}
const YO = ["aria-label"], XO = { class: "pano-stage-column" }, qO = { class: "pano-stage-wrap" }, JO = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, ZO = {
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
    let a = "", c = !1, u = null;
    const d = /* @__PURE__ */ Zt(null), b = /* @__PURE__ */ Zt(null), y = /* @__PURE__ */ Zt(null);
    function v() {
      var A, L;
      return ((L = (A = y.value) == null ? void 0 : A.getRefs) == null ? void 0 : L.call(A)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(A) {
      var L, se;
      return ((se = (L = b.value) == null ? void 0 : L.open) == null ? void 0 : se.call(L, A)) === !0;
    }
    function N(A) {
      o("image-file-selected", A);
    }
    function k(A) {
      o("image-file-cancelled", A);
    }
    t({ getPaintOverlayRefs: v, openImagePicker: x });
    const P = pt(() => r.readOnly === !0), E = pt(() => r.shellPreset || w1(r.type)), R = pt(() => {
      var L, se, Pe;
      const A = String((((L = r.uiState) == null ? void 0 : L.stageStatus) === "failed" ? (se = r.uiState) == null ? void 0 : se.stageStatusDetail : (Pe = r.uiState) == null ? void 0 : Pe.stageWarningDetail) ?? "");
      return A === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : A === "stickers" ? "One or more sticker previews are unavailable." : A === "frame" ? "The editor hit a rendering error. Check the browser console for details." : A === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : A.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = pt(() => {
      var L;
      const A = Array.isArray((L = E.value) == null ? void 0 : L.floatingButtons) ? E.value.floatingButtons.slice() : [];
      return P.value && A.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ke.fullscreen
      }), A;
    });
    function V() {
      const A = d.value;
      return A ? Array.from(A.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((L) => L instanceof HTMLElement ? !L.hidden && L.tabIndex >= 0 && L.offsetParent !== null : !1) : [];
    }
    function T() {
      var se;
      const L = V()[0] || d.value;
      (se = L == null ? void 0 : L.focus) == null || se.call(L);
    }
    function _() {
      var A;
      u != null && u.isConnected && ((A = u.focus) == null || A.call(u)), u = null;
    }
    function z(A) {
      var L, se, Pe, de;
      if (!A.defaultPrevented) {
        if (A.key === "Tab") {
          const U = V();
          if (!U.length) {
            A.preventDefault(), (se = (L = d.value) == null ? void 0 : L.focus) == null || se.call(L);
            return;
          }
          const q = U[0], D = U[U.length - 1], O = document.activeElement;
          if (A.shiftKey) {
            (O === q || O === d.value || !((Pe = d.value) != null && Pe.contains(O))) && (A.preventDefault(), D.focus());
            return;
          }
          (O === D || !((de = d.value) != null && de.contains(O))) && (A.preventDefault(), q.focus());
          return;
        }
        A.key === "Escape" && o("close");
      }
    }
    function B() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function oe() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function _e(A) {
      document.removeEventListener("keydown", z), A ? (u || (u = document.activeElement), B(), document.addEventListener("keydown", z), Rc(() => {
        T();
      })) : (oe(), _());
    }
    return $c(() => {
      _e(r.open);
    }), Bs(() => {
      oe(), document.removeEventListener("keydown", z), _();
    }), bo(() => r.open, (A) => {
      _e(A);
    }), (A, L) => e.open ? (ne(), ue("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: L[2] || (L[2] = Dt((se) => o("close"), ["self"]))
    }, [
      Y("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        Y("div", XO, [
          Y("div", qO, [
            L[3] || (L[3] = Y("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            L[4] || (L[4] = Y("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            L[5] || (L[5] = Y("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ne(), ue("div", JO, tt(R.value), 1)) : ct("", !0),
            L[6] || (L[6] = Y("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Y("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Re(zC, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            Re(n1, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: N,
              onFileCancelled: k
            }, null, 512),
            P.value ? ct("", !0) : (ne(), ue(Xe, { key: 1 }, [
              Re(CO, {
                buttons: e.uiState.toolButtons || E.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Re(uC, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Re($C, {
                "paint-swatches": e.paintSwatches,
                panes: E.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Re(HO, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Re(UO, {
              buttons: e.uiState.viewButtons || E.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Re(oC, {
              buttons: e.uiState.floatingButtons || W.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Re(YC, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Re(PO, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Re(gC, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Re(NO, {
            model: e.uiState.timeline || {},
            onAction: L[0] || (L[0] = (se) => o("timeline", se))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ct("", !0) : (ne(), vr(QI, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: L[1] || (L[1] = (se) => o("timeline", se))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, YO)
    ])) : ct("", !0);
  }
}, Ar = "loading", Ma = "ready", mr = "failed";
function x1(e, t = "") {
  return e && (e.__panoLoadState = Ar, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function S1(e, t = "") {
  return e && (e.__panoLoadState = Ma, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function k1(e, t = "") {
  return e && (e.__panoLoadState = mr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function _d(e, t) {
  return e ? e.__panoLoadState === mr ? mr : typeof t == "function" && t(e) ? Ma : Ar : Ma;
}
function wd(e) {
  return _d(e) === mr;
}
function QO({ presented: e, background: t = Ma, stickers: n = [] } = {}) {
  if (!e) return { status: Ar, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === Ar, a = r.includes(Ar);
  if (o && a) return { status: Ar, detail: "mixed" };
  if (o) return { status: Ar, detail: "background" };
  if (a) return { status: Ar, detail: "stickers" };
  const c = t === mr, u = r.includes(mr);
  return c && u ? { status: mr, detail: "mixed" } : c ? { status: mr, detail: "background" } : u ? { status: mr, detail: "stickers" } : { status: Ma, detail: "" };
}
const eE = "state_json", tE = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), vf = "sticker_image_1", nE = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), h0 = 0.01, rE = "external_image", Cl = "pano_sticker_input_images", iE = "pano_sticker_input_videos", oE = "pano_sticker_input_frames", aE = "pano_sticker_input_video_meta", sE = !0, Jl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], zr = Math.PI / 180, ho = 180 / Math.PI, _f = 1, m0 = "rgb(255, 221, 87)", lE = "rgb(228, 228, 231)", cE = "rgb(180, 150, 60)", uE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, fE = 64, g0 = 40, wf = 16, dE = 0.45, y0 = 180, pE = 160, Cc = 24, hE = 4, mE = 4, Il = /* @__PURE__ */ new Map(), b0 = /* @__PURE__ */ new Map(), ji = /* @__PURE__ */ new Map(), gE = 12, Cn = Ib({
  app: Ir,
  api: Jt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: wd,
    markImageFailed: k1,
    markImageLoading: x1,
    markImageReady: S1
  }
});
function xf(e) {
  if (!xn(e, "background") || !xn(e, "external-sticker")) return null;
  const t = Cn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const yE = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function bE(e) {
  if (!xn(e, "background")) return null;
  const [t] = Cn.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = Cn.uiValue(e, "pano_timeline_frames") || [], [r] = Cn.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: Xn(r) };
}
const vE = Cn.assetSource, cs = Cn.source, Sf = Cn.uiImage, _E = Cn.invalidateUiImage, wE = Cn.resolvePreferredExactLinkedSource, kf = Cn.loadPreferredExactLinkedImage;
function Mf(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function xE(e) {
  return 1 - Math.pow(1 - e, 3);
}
function SE(e, t, n) {
  const r = Z((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function kE(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = ji.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (ji.delete(t), ji.set(t, n), n);
}
function ME(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (ji.delete(n), ji.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ji.size > gE; ) {
      const o = ji.keys().next().value;
      if (!o) break;
      ji.delete(o);
    }
}
function NE(e) {
  return e * e * e;
}
function Yc(e, t, n) {
  return { x: e, y: t, z: n };
}
function v0(e, t) {
  return Yc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function _0(e, t) {
  return Yc(e.x * t, e.y * t, e.z * t);
}
function Nf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function PE(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Yc(e.x / t, e.y / t, e.z / t);
}
function Ol(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * ho),
    pitch: Z(Math.asin(Z(e.y, -1, 1)) * ho, -90, 90)
  };
}
function Vi(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, c = t[r].y, u = t[o].x, d = t[o].y;
    c > e.y != d > e.y && e.x < (u - a) * (e.y - c) / (d - c || 1e-6) + a && (n = !n);
  }
  return n;
}
function bs(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Pf(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return bs(e, t);
  const d = Z((a * r + c * o) / u, 0, 1), b = Number(t.x || 0) + r * d, y = Number(t.y || 0) + o * d, v = Number(e.x || 0) - b, x = Number(e.y || 0) - y;
  return v * v + x * x;
}
function pr(e, t, n) {
  return e + (t - e) * n;
}
function jr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Z(n, 0, 1)})`;
}
function AE(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let El = { fillStyle: "", url: "" };
function CE(e, t, n) {
  if (El.url && El.fillStyle === String(e || ""))
    return El.url;
  const r = AE(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Cc}" height="${Cc}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return El = { fillStyle: String(e || ""), url: r }, r;
}
function Zl(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function er(e) {
  return {
    r: Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Z(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Pn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function IE(e) {
  return Jl.some((t) => Zl(e, t.color));
}
function Af(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = Z(Number(t), 0, 1), a = Z(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const c = Math.floor(r * 6), u = r * 6 - c, d = a * (1 - o), b = a * (1 - u * o), y = a * (1 - (1 - u) * o);
  switch (c % 6) {
    case 0:
      return { r: a, g: y, b: d };
    case 1:
      return { r: b, g: a, b: d };
    case 2:
      return { r: d, g: a, b: y };
    case 3:
      return { r: d, g: b, b: a };
    case 4:
      return { r: y, g: d, b: a };
    default:
      return { r: a, g: d, b };
  }
}
function Cf(e) {
  const t = Z(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Z(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Z(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let u = 0;
  c > 1e-6 && (o === t ? u = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / c + 2) / 6 : u = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: u, s: d, v: o };
}
function Qo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const M1 = "pano_suite.ui_settings.v1", N1 = "pano_suite.node_grid_visibility.v1";
let aa = null, Hr = null;
function Ql(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function OE() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(M1)) || "").trim();
    if (!t) return aa ? Ql(aa) : null;
    const n = JSON.parse(t), r = Ql(n);
    return aa = r, r;
  } catch {
    return aa ? Ql(aa) : null;
  }
}
function EE(e) {
  var n;
  const t = Ql(e);
  aa = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(M1, JSON.stringify(t));
  } catch {
  }
  return t;
}
function P1() {
  var e;
  if (Hr && typeof Hr == "object")
    return Hr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(N1)) || "").trim();
    if (!t)
      return Hr = {}, Hr;
    const n = JSON.parse(t);
    return Hr = n && typeof n == "object" ? n : {}, Hr;
  } catch {
    return Hr = {}, Hr;
  }
}
function FE(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = P1()[n];
  return typeof o == "boolean" ? o : !!t;
}
function TE(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = P1();
  r[n] = !!t, Hr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(N1, JSON.stringify(r));
  } catch {
  }
}
function DE(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function w0(e) {
  const { paintCount: t, maskCount: n } = DE(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function ea(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Fl(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function LE(e, t) {
  const n = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), r = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStickersNode: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return r[n] ? r[n] : n || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function lo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function RE(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function VE(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function $E(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function zE(e, t, n = {}) {
  var _m, wm;
  await s1(e, { tolerateOperationFailure: !0 }), Cn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = LE(e, t);
  await gp();
  const u = Fl(e, "output_preset"), d = Fl(e, "coverage"), b = Fl(e, "bg_color"), y = Fl(e, eE), v = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return kf(
      e,
      i,
      () => ae(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = v();
    return $E(i);
  }, N = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return VE(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : RE(s, i);
  }, k = e.__panoSceneStateV2 === !0, P = t === "stickers" && k, E = t === "cutout" && k, R = P && e.__panoStudio === !0, W = E || R, V = t === "cutout" || R, T = E ? bE(e) : null, _ = (k ? ob : ib)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: T ? T.coverage : Xn(d == null ? void 0 : d.value),
    sharedUiSettings: OE(),
    active: lb(e),
    fps: k ? xf(e) : null,
    scene: (T == null ? void 0 : T.state) ?? null,
    camera: E
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0;
  let z = null;
  W ? (z = _.camera ? yg(_.camera, 0) : null, _.shots = z ? [{ ...z, position: [...z.position] }] : [], _.active.selected_shot_id = z && E ? qf : null) : t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const B = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], s = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, oe = B ? fh(B, !1) : { width: 220, height: 132 }, _e = w1(R ? "studio" : t), A = /* @__PURE__ */ Na({
    stageStatus: Ar,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (_e.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (_m = _e.spaceButtons) != null && _m.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: _e.spaceButtons, frame: _e.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (_e.toolButtons || []).map((i) => ({
      ...i,
      disabled: !1,
      ...i.key === "add-world" ? { visible: P } : {},
      ...E && yE.has(i.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(_e.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: ke.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: ke.aspect,
      rotateIcon: ke.rotate_90,
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
      icon: ke.fullscreen,
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
      customColorCss: jr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: jr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: oe.width,
      height: oe.height,
      label: B ? "Loading preview" : "Add Frame to preview"
    }
  }), L = document.createElement("div");
  document.body.appendChild(L);
  const se = ({ intent: i, file: s } = {}) => {
    if (Cr(s)) {
      if (i === "add") {
        Ph(s);
        return;
      }
      if (i === "add-world") {
        z_(s);
        return;
      }
      i === "replace" && G_(s);
    }
  }, Pe = ({ intent: i } = {}) => {
  }, de = $d(ZO, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: _e,
    paintSwatches: Jl.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: jr(i.color, 1)
    })),
    uiState: A,
    onClose: () => {
      Yo();
    },
    onTimeline: (i) => R_(i),
    onImageFileSelected: se,
    onImageFileCancelled: Pe
  });
  let U = null;
  try {
    U = de.mount(L);
  } catch (i) {
    try {
      de.unmount();
    } catch {
    }
    throw L.remove(), i;
  }
  const q = L.querySelector(".pano-modal-overlay"), D = L.querySelector(".pano-modal"), O = D == null ? void 0 : D.querySelector("[data-stage-overlay]"), Q = D == null ? void 0 : D.querySelector("[data-stage-background]"), te = D == null ? void 0 : D.querySelector(".pano-stage-wrap"), Ee = ((wm = U == null ? void 0 : U.getPaintOverlayRefs) == null ? void 0 : wm.call(U)) || {}, Fe = Ee.cursor || null, vt = Ee.sizePreview || null, ht = Ee.sizeSample || null;
  if (!q || !D || !O || !Q || !te || !Fe || !vt || !ht)
    throw de.unmount(), L.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const $ = O.getContext("2d"), gt = D.querySelector("[data-side]"), Ae = D.querySelector("[data-video-element]"), wt = D.querySelector("[data-port-video-element]"), Et = D.querySelector(".pano-floating-right"), gn = D.querySelector(".pano-floating-top"), ei = D.querySelector("[data-tool-rail]"), j = D.querySelector("[data-frame-rail]"), K = D.querySelector("[data-frame-roll-knob]"), re = D.querySelector("[data-paint-dock]"), we = D.querySelector(".pano-video-transport"), ge = D.querySelector("[data-selection-menu]");
  let ve = !1;
  const Me = D.querySelector("[data-tooltip]"), Ce = D.querySelector("[data-camera-preview-host]"), Se = D.querySelector("[data-camera-preview-canvas]"), pe = D.querySelector("[data-paint-color-row]"), Oe = D.querySelector("[data-paint-color-pop]"), Ie = D.querySelector("[data-paint-color-sv]"), $e = D.querySelector("[data-paint-color-sv-cursor]"), Ge = D.querySelector("[data-paint-hue-strip]"), at = D.querySelector("[data-paint-hue-handle]");
  let st = 0, ft = 0;
  te == null || te.removeAttribute("data-stage-ready"), te == null || te.setAttribute("data-stage-loading-kind", "boot"), O.style.opacity = "1", Q.style.opacity = "0", o && (gt == null || gt.remove(), D.classList.add("pano-modal-readonly"));
  const dt = () => {
    if (!h.customPaintSessionStart) return;
    if (Zl(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (IE(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      er(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !Zl(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, Rt = (i = !1) => {
    !Oe || Oe.hidden || (i ? dt() : h.customPaintSessionStart = null, Oe.hidden = !0, A.paintDock.colorPopOpen = !1);
  }, Tn = () => {
    Oe && (Oe.hidden && (h.customPaintSessionStart = er(h.customPaintColor)), Oe.hidden = !1, A.paintDock.colorPopOpen = !0);
  };
  D.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || eo(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (D.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), Rt(!0), V && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ke(), ae()), (s = A.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (A.frameRail.aspectOpen = !1)));
  });
  const Dn = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, ti = JSON.stringify(mg(_)), h = {
    mode: "pano",
    selectedId: Dn,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Kr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Xn(_.coverage),
    historyController: NA(80, { entries: [ti], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: ui,
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
    showGrid: FE(e == null ? void 0 : e.id, !0),
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
    paintEngine: jf(),
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
    // PanoramaCutoutNode's Frame view with World content: the pivot distance its last move left (#77).
    frameDistance: null,
    panelWasEnabled: !1,
    // The view moving to another over a short time (pano_view_transition.js), or null.
    viewTransition: null,
    fullscreen: !1,
    fullscreenPrevShowGrid: null,
    // The editor's current time, a Timeline frame. PanoramaStickersNode shows and edits its state v2 here.
    frame: 0
  }, We = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let rn = null;
  t === "stickers" && (h.selectedId = null, _.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const en = /* @__PURE__ */ new Map(), Pi = /* @__PURE__ */ new Map(), Co = /* @__PURE__ */ new Map(), Ui = /* @__PURE__ */ new Map(), G = document.createElement("canvas");
  G.__panoFrameIdx = 0;
  const he = document.createElement("canvas");
  he.__panoFrameIdx = 0;
  const ee = {
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
  }, Te = AN({
    onReady: () => ae(),
    onFailed: () => ae(),
    onUpdate: () => {
      ee.backgroundDirty = !0, ae({ localOnly: !0 });
    }
  });
  let Je = { key: "", projection: null }, De = { key: null, sceneState: null }, rt = null, Ft = null, on = null, Ln = null, Ut = null;
  const Io = Number.parseFloat(
    getComputedStyle(D).getPropertyValue("--pano-float-radius")
  ) || 10, Tt = (i) => {
    const s = String(i || "default");
    O.style.cursor !== s && (O.style.cursor = s);
  }, Yt = {
    timer: 0,
    target: null
  }, Vt = {
    active: !1,
    depth: 0
  }, xt = {
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
  }, or = 9, ni = [];
  let dn = 0;
  const xr = () => {
    var I, M;
    const i = (I = te == null ? void 0 : te.getBoundingClientRect) == null ? void 0 : I.call(te), s = (M = Et == null ? void 0 : Et.getBoundingClientRect) == null ? void 0 : M.call(Et), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, g = f > 0 ? f + 14 + 12 : 72, w = Math.max(280, Math.floor(l - g * 2)), S = h.fullscreen ? Math.min(1200, w) : w;
    A.videoTransport.shellMaxWidthPx = S;
  }, Oo = () => {
    dn || (dn = window.requestAnimationFrame(() => {
      dn = 0, xr();
    }));
  }, Eo = (i) => {
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
    return !!A.videoTransport.hasAudio;
  }, vn = typeof ResizeObserver < "u" ? new ResizeObserver(() => Oo()) : null;
  vn == null || vn.observe(te), Et && (vn == null || vn.observe(Et)), ni.push(() => {
    var i;
    dn && (window.cancelAnimationFrame(dn), dn = 0), (i = vn == null ? void 0 : vn.disconnect) == null || i.call(vn);
  }), Oo();
  const Ys = () => {
    xt.thumbnailJobId += 1, xt.thumbnailSrc = "", A.videoTransport.thumbnails = [], A.videoTransport.thumbnailCount = or;
  }, A1 = async (i, s, l) => {
    const f = String(i || "").trim();
    if (!f) {
      Ys();
      return;
    }
    const p = kE(f);
    if (p) {
      xt.thumbnailSrc = f, A.videoTransport.thumbnails = p.thumbnails, A.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++xt.thumbnailJobId;
    xt.thumbnailSrc = f, A.videoTransport.thumbnails = [], A.videoTransport.thumbnailCount = or;
    const g = document.createElement("video");
    g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous";
    const w = await new Promise((fe) => {
      let ye = !1;
      const ce = (Ne) => {
        ye || (ye = !0, fe(Ne));
      };
      g.addEventListener("loadedmetadata", () => ce(!0), { once: !0 }), g.addEventListener("canplay", () => ce(!0), { once: !0 }), g.addEventListener("error", () => ce(!1), { once: !0 }), g.src = f, g.load();
    });
    if (xt.thumbnailJobId !== m) return;
    const S = Number(g.videoWidth || 0), I = Number(g.videoHeight || 0);
    if (!w || S < 1 || I < 1) {
      xt.thumbnailFailedSrcs.add(f);
      return;
    }
    const M = Math.max(0, Number(g.duration || s || 0)), C = document.createElement("canvas"), F = 46, X = Math.max(72, Math.round(S / I * F));
    C.width = X, C.height = F;
    const H = C.getContext("2d");
    if (!H) return;
    const J = [], ie = (fe) => new Promise((ye) => {
      let ce = !1;
      const Ne = () => {
        ce || (ce = !0, ye());
      };
      g.addEventListener("seeked", Ne, { once: !0 }), g.addEventListener("error", Ne, { once: !0 });
      try {
        g.currentTime = fe;
      } catch {
        Ne();
      }
    });
    for (let fe = 0; fe < or; fe += 1) {
      if (xt.thumbnailJobId !== m) return;
      const ye = fe / (or - 1), ce = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), M * ye)) : 0;
      if (await ie(ce), xt.thumbnailJobId !== m) return;
      H.clearRect(0, 0, X, F), H.drawImage(g, 0, 0, X, F), J.push({
        id: `thumb-${fe}`,
        src: C.toDataURL("image/jpeg", 0.72),
        time: ce,
        label: su(ce)
      });
    }
    xt.thumbnailJobId === m && (A.videoTransport.thumbnails = J, A.videoTransport.thumbnailCount = J.length || or, ME(f, {
      thumbnails: J,
      thumbnailCount: J.length || or,
      duration: M,
      fps: l
    }));
  };
  ni.push(() => {
    Ys();
  });
  const an = Wb({
    video: Ae instanceof HTMLVideoElement ? Ae : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: el,
    span: () => {
      if (k) return cl();
      const i = Math.round(Number(A.videoTransport.duration || 0) * el());
      return Ae.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => k,
    onFrame: (i) => {
      k ? E_(i) : Ci(), ae({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      Q1() && (ee.backgroundDirty = !0);
    },
    onChange: () => {
      Ci(), si(), ae({ cause: "frame_view", localOnly: !0 });
    }
  });
  ni.push(() => an.dispose());
  const Fo = k && wt instanceof HTMLVideoElement ? Bb({
    video: wt,
    onCapture: () => {
      var l;
      const i = Number(wt.videoWidth || 0), s = Number(wt.videoHeight || 0);
      i < 1 || s < 1 || (he.width = i, he.height = s, (l = he.getContext("2d")) == null || l.drawImage(wt, 0, 0), he.__panoFrameIdx += 1, ae({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => ae({ cause: "frame_view", localOnly: !0 })
  }) : null;
  Fo && ni.push(() => Fo.dispose());
  const C1 = k ? Tb({
    createImage: (i, s) => {
      const l = new Image();
      return l.onload = s, l.onerror = s, l.src = i, l;
    },
    onLoad: () => ae({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Ae instanceof HTMLVideoElement) {
    const i = () => {
      Ii(), ae({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      Ci({
        hasAudio: A.videoTransport.hasAudio,
        muted: Ae.muted,
        volume: Number(Ae.volume ?? A.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const f = Ae.dataset.panoSrc;
      f && (xt.failedSrcs.add(f), Ii(), ae());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      Ae.addEventListener(f, p), ni.push(() => Ae.removeEventListener(f, p));
  }
  function I1() {
    A.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : l ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Xc(i) {
    return bp(i == null ? void 0 : i.dataTransfer);
  }
  function Yi(i) {
    const s = !!i;
    Vt.active !== s && (Vt.active = s, te.classList.toggle("drop-active", s));
  }
  function Xi(i, s = null) {
    const l = bn();
    h.viewTransition = DA(l, i, performance.now(), { scale: Ei(), end: s }), !h.viewTransition && s && Sp(s), cn.state.inertia.active = !1, cn.state.inertia.vx = 0, cn.state.inertia.vy = 0, Tr(), ae({ localOnly: !0 });
  }
  function Sp(i) {
    Va(Zf({ ...pu(), moved: i.moved }, i.mode, $o())), ee.backgroundDirty = !0;
  }
  function Ca() {
    h.viewTransition && (h.viewTransition = null, Tr());
  }
  function kp(i, s) {
    Xi({ ...bn(), yaw_deg: i, pitch_deg: s });
  }
  lv();
  function Fr() {
    return t === "stickers" ? Ia() : _.shots;
  }
  function Ia() {
    return P ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function ar(i) {
    return P && St(i);
  }
  function qc(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function sn(i) {
    return ar(i) ? rp(i, h.frame) : i;
  }
  function Sr(i, s) {
    ar(i) ? ab(i, h.frame, s) : Object.assign(i, s);
  }
  function Sn() {
    const i = _.painting || (_.painting = pa(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function O1(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = _.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], f = /* @__PURE__ */ new Set();
    for (const g of s) {
      const w = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }
    return l;
  }
  function E1() {
    return O1("paint");
  }
  function Oa(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Ea(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function yn(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function Fa(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const f = l.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function Jc() {
    var s;
    let i = -1;
    for (const l of Ia())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Sn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = _.painting) == null ? void 0 : s.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function Mp(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const f = Sn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? Jc() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function F1(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: Z(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: Z(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: Z(l + p, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: Z(l + p, 0, 1)
      }
    ];
  }
  function T1() {
    const i = new Set(E1()), l = Sn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || l.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: Jc(),
        locked: !1,
        frame: null
      });
    }), l.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), _.painting.groups = l, l;
  }
  function D1(i, s, l) {
    var J;
    const f = (ie) => (Number(ie || 0) % 1 + 1) % 1, p = [];
    for (const ie of l) {
      const fe = ie == null ? void 0 : ie.geometry, ye = (fe == null ? void 0 : fe.geometryKind) === "lasso_fill" ? fe == null ? void 0 : fe.points : (fe == null ? void 0 : fe.processedPoints) || (fe == null ? void 0 : fe.rawPoints) || (fe == null ? void 0 : fe.points) || [];
      Array.isArray(ye) && p.push(...ye);
    }
    if (!p.length) return null;
    const m = f(((J = p[0]) == null ? void 0 : J.u) || 0);
    let g = 0, w = 0;
    p.forEach((ie) => {
      const fe = f((ie == null ? void 0 : ie.u) || 0);
      g += m + sr(fe, m), w += Number((ie == null ? void 0 : ie.v) || 0);
    });
    const S = (g / p.length % 1 + 1) % 1;
    let I = 1 / 0, M = -1 / 0, C = 1 / 0, F = -1 / 0;
    p.forEach((ie) => {
      const fe = f((ie == null ? void 0 : ie.u) || 0), ye = sr(fe, S);
      I = Math.min(I, ye), M = Math.max(M, ye);
      const ce = Number((ie == null ? void 0 : ie.v) || 0);
      C = Math.min(C, ce), F = Math.max(F, ce);
    });
    const X = l.reduce((ie, fe) => {
      const ye = Li(String((fe == null ? void 0 : fe.toolKind) || "pen")), ce = Wn[ye] || Wn[ui], Ne = Math.max(1, Number((fe == null ? void 0 : fe.size) || 10)) * Math.max(0.1, Number((ce == null ? void 0 : ce.sizeScale) ?? 1));
      return Math.max(ie, Ne);
    }, 0), H = Math.max(35e-4, X / 2048);
    return {
      centerUv: { u: ((S + (I + M) * 0.5) % 1 + 1) % 1, v: Z((C + F) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - I) * 0.5 + H,
      halfH: (F - C) * 0.5 + H,
      uvPad: H
    };
  }
  function Ai(i, s, l) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = Sn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === f);
    if (!p) return null;
    const m = l || kr(f, s);
    return p.frame = D1(f, s, m), p.frame;
  }
  function To() {
    var f;
    const i = Ia().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = T1().map((p) => ({
      type: "strokeGroup",
      id: String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || ""),
      actionGroupId: String((p == null ? void 0 : p.actionGroupId) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), l = (Array.isArray((f = _.painting) == null ? void 0 : f.raster_objects) ? _.painting.raster_objects : []).filter((p) => String((p == null ? void 0 : p.layerKind) || "paint") === "paint").map((p) => ({
      type: "rasterObject",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    }));
    return [...i, ...s, ...l].sort((p, m) => Number(p.z_index || 0) - Number(m.z_index || 0));
  }
  function Zc(i = !0) {
    var l, f, p, m, g, w;
    const s = To().filter((S) => S.type === "strokeGroup").map((S) => String(S.actionGroupId || "")).filter((S) => !!S);
    if (i) {
      const S = String(((f = (l = h.interaction) == null ? void 0 : l.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), I = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((w = (g = h.interaction) == null ? void 0 : g.stroke) == null ? void 0 : w.toolKind) || "").trim();
      S && I === "paint" && M !== "eraser" && !s.includes(S) && s.push(S);
    }
    return s;
  }
  function Qc(i = !0) {
    var w, S, I, M, C, F;
    const s = To();
    if (!i) return s;
    const l = String(((S = (w = h.interaction) == null ? void 0 : w.stroke) == null ? void 0 : S.actionGroupId) || "").trim(), f = String(((M = (I = h.interaction) == null ? void 0 : I.stroke) == null ? void 0 : M.layerKind) || "").trim(), p = String(((F = (C = h.interaction) == null ? void 0 : C.stroke) == null ? void 0 : F.toolKind) || "").trim();
    if (!l || f !== "paint" || p === "eraser" || s.some((X) => X.type === "strokeGroup" && String(X.actionGroupId || "") === l))
      return s;
    const m = It();
    let g = s.reduce((X, H) => Math.max(X, Number((H == null ? void 0 : H.z_index) || 0)), -1) + 1;
    return m && pn(m) && String(m.actionGroupId || "") === l && (g = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: g,
        item: null
      }
    ].sort((X, H) => Number((X == null ? void 0 : X.z_index) || 0) - Number((H == null ? void 0 : H.z_index) || 0));
  }
  function L1() {
    return Sn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Lo(Oa("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function R1() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Do(Ea((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Np(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || f;
    }
    return !1;
  }
  function V1() {
    var s, l, f, p;
    let i = null;
    try {
      const m = Zc(), g = ((p = (f = (l = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      g && (i = {
        source: g,
        revision: `${Ga()}:${eu()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function eu() {
    var p, m, g, w, S, I, M;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Np(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const C = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, F = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), X = ((g = C == null ? void 0 : C.rawPoints) == null ? void 0 : g.length) ?? ((w = C == null ? void 0 : C.points) == null ? void 0 : w.length) ?? 0, H = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${F || "paint"}_${s}_live${H}_${X}_${h.livePaintInteractionRevision}`;
    }
    const l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.actionGroupId) || ""), f = String(((I = i == null ? void 0 : i.item) == null ? void 0 : I.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${l || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function Xs() {
    return E || !Array.isArray(_.stickers) ? [] : Ia();
  }
  function tu() {
    return [...Array.isArray(_.shots) ? _.shots : [], ...Xs()];
  }
  function ln(i) {
    return !!i && Array.isArray(_.shots) && _.shots.includes(i);
  }
  function St(i) {
    return !!i && Array.isArray(_.stickers) && _.stickers.includes(i);
  }
  function Gn() {
    var i;
    return Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : [];
  }
  function Do(i) {
    const s = yn(i);
    if (!s) return null;
    const l = Gn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Ea(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function kn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = yn(i.rasterObjectId || i.id || "");
    return !!s && !!Do(Ea(s));
  }
  function Lo(i) {
    const s = Fa(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const f = Sn().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return f ? {
      ...f,
      id: Oa("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function pn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Lo(Oa(l, s));
  }
  function kr(i, s = null) {
    const l = Fa(i, s), f = String(l.actionGroupId || "").trim();
    return f ? Bo(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function $1(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${h.mode}:${Ha()}`;
    if (h.mode === "frame") {
      const m = ze(), g = String((m == null ? void 0 : m.id) || ""), w = m ? hn(m) : null;
      return `${p}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function qs(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: Z(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function sr(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function nu(i, s = null, l = null) {
    var I;
    const f = Fa(i, s), p = Array.isArray(l) ? l : kr(f.actionGroupId, f.layerKind), m = [];
    if (p.forEach((M) => {
      const C = (M == null ? void 0 : M.geometry) || null, F = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(F) && m.push(...F);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((I = m[0]) == null ? void 0 : I.u) || 0);
    let w = 0, S = 0;
    return m.forEach((M) => {
      w += g + sr(Number((M == null ? void 0 : M.u) || 0), g), S += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (w / m.length % 1 + 1) % 1,
      v: Z(S / m.length, 0, 1)
    };
  }
  function Js(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = sr(Number(i.u || 0), p), w = Number(i.v || 0) - m, S = Number(f || 0) * zr, I = Math.cos(S), M = Math.sin(S), C = Math.max(0.02, Number(l || 1)), F = (g * I - w * M) * C, X = (g * M + w * I) * C;
    return {
      ...i,
      u: ((p + F) % 1 + 1) % 1,
      v: Z(m + X, 0, 1)
    };
  }
  function Pp(i, s, l, f = null, p = null, m = null) {
    const g = Fa(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const S = Bo(g.layerKind), I = Array.isArray(f) ? new Map(f.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let M = !1;
    if (S.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== w) return;
      const F = (I == null ? void 0 : I.get(String((C == null ? void 0 : C.id) || ""))) || C, X = C == null ? void 0 : C.geometry, H = F == null ? void 0 : F.geometry;
      !X || !H || (Array.isArray(H.points) && (X.points = H.points.map((J) => qs(J, s, l)), M = !0), Array.isArray(H.rawPoints) && (X.rawPoints = H.rawPoints.map((J) => qs(J, s, l)), M = !0), Array.isArray(H.processedPoints) && (X.processedPoints = H.processedPoints.map((J) => qs(J, s, l)), M = !0));
    }), M && m) {
      const C = Sn().find((F) => String((F == null ? void 0 : F.actionGroupId) || "") === w);
      C && (C.frame = null);
    }
    return M;
  }
  function Ap(i, s = 1, l = 0, f = null, p = null, m = null) {
    const g = Fa(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const S = Bo(g.layerKind), I = Array.isArray(f) ? f : kr(w, g.layerKind), M = Array.isArray(I) ? new Map(I.map((X) => [String((X == null ? void 0 : X.id) || ""), X])) : null, C = (m == null ? void 0 : m.centerUv) ?? nu(w, g.layerKind, I);
    let F = !1;
    if (S.forEach((X) => {
      if (String((X == null ? void 0 : X.actionGroupId) || "").trim() !== w) return;
      const H = (M == null ? void 0 : M.get(String((X == null ? void 0 : X.id) || ""))) || X, J = X == null ? void 0 : X.geometry, ie = H == null ? void 0 : H.geometry;
      !J || !ie || (Array.isArray(ie.points) && (J.points = ie.points.map((fe) => Js(fe, C, s, l)), F = !0), Array.isArray(ie.rawPoints) && (J.rawPoints = ie.rawPoints.map((fe) => Js(fe, C, s, l)), F = !0), Array.isArray(ie.processedPoints) && (J.processedPoints = ie.processedPoints.map((fe) => Js(fe, C, s, l)), F = !0));
    }), F && m) {
      const X = Sn().find((H) => String((H == null ? void 0 : H.actionGroupId) || "") === w);
      X && (X.frame = null);
    }
    return F;
  }
  function Cp(i, s, l, f = null) {
    const p = yn(i);
    if (!p) return !1;
    const m = Gn().find((M) => String((M == null ? void 0 : M.id) || "").trim() === p);
    if (!m) return !1;
    const g = f && typeof f == "object" ? f : m, w = (g == null ? void 0 : g.transform) || {}, S = Number(w.du || 0) + Number(s || 0), I = Z(Number(w.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = S, m.transform.dv = I, !0;
  }
  function z1(i, s = 1, l = null) {
    const f = yn(i);
    if (!f) return !1;
    const p = Gn().find((I) => String((I == null ? void 0 : I.id) || "").trim() === f);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, g = (m == null ? void 0 : m.transform) || {}, w = Math.max(0.01, Number(g.scale || 1)), S = Z(w * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = S, !0;
  }
  function It() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const s = Lo(i);
    if (s) return s;
    const l = Do(i);
    return l || (V ? tu().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : Fr().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function lr() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(h.selectedId || "") ? It() : Lo(p) || Do(p) || (V ? tu().find((g) => String((g == null ? void 0 : g.id) || "") === p) : Fr().find((g) => String((g == null ? void 0 : g.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function Ta(i = null) {
    const s = Array.isArray(i) ? i : lr();
    if (!s || s.length < 2) return null;
    const l = s.map((I) => tn(I)).filter((I) => (I == null ? void 0 : I.visible) && Array.isArray(I.corners) && I.corners.length);
    if (!l.length) return null;
    const f = l.flatMap((I) => I.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), p = l.flatMap((I) => I.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...f), g = Math.max(...f), w = Math.min(...p), S = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + g) * 0.5, y: (w + S) * 0.5 },
      corners: [
        { x: m, y: w },
        { x: g, y: w },
        { x: g, y: S },
        { x: m, y: S }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + g) * 0.5, y: w, a: { x: m, y: w }, b: { x: g, y: w } },
        { edge: "right", x: g, y: (w + S) * 0.5, a: { x: g, y: w }, b: { x: g, y: S } },
        { edge: "bottom", x: (m + g) * 0.5, y: S, a: { x: g, y: S }, b: { x: m, y: S } },
        { edge: "left", x: m, y: (w + S) * 0.5, a: { x: m, y: S }, b: { x: m, y: w } }
      ],
      rotateStemBase: { x: (m + g) * 0.5, y: w },
      rotateHandle: { x: (m + g) * 0.5, y: w - 30 }
    };
  }
  function Ip(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function Zs() {
    const i = It();
    return i ? pn(i) || kn(i) ? "stroke" : ln(i) ? "frame" : "image" : null;
  }
  function _n(i) {
    if (!i || typeof i != "object") return !1;
    if (pn(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = Sn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (kn(i)) {
      const s = yn(i.rasterObjectId || i.id || ""), l = Gn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function ru(i = null) {
    const s = Array.isArray(i) ? i : lr();
    return s.length > 0 && s.every((l) => _n(l));
  }
  function j1(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (pn(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = Sn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (kn(i)) {
      const f = yn(i.rasterObjectId || i.id || ""), p = Gn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function H1() {
    if (r) return;
    const i = lr();
    if (!i.length) return;
    const s = !ru(i);
    let l = !1;
    i.forEach((f) => {
      j1(f, s) && (l = !0);
    }), l && (Qe(), it(), Ke(), Ve(), ae());
  }
  function Rn(i) {
    Vo(), We.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && St(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && ln(i) ? _.active.selected_shot_id = i.id || null : i ? ln(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function G1(i, s = null) {
    const l = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const w = String((g == null ? void 0 : g.id) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }), h.selectedIds = l, Vo(), We.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = It();
    _.active.selected_sticker_id = m && St(m) && m.id || null, m && ln(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function Op() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, f) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${f + 1}`)
    })), s = Xs().map((l, f) => {
      var m, g;
      const p = Xt(l) ? String(l.id || vf) : String(((g = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : g.name) || l.asset_id || l.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function Ep(i) {
    return i === "frame" ? ke.camera : i === "stroke" ? ke.paintbrush_vertical_tool : ke.image;
  }
  function iu(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Ep(i.kind)
    };
  }
  function Qs() {
    return Jc();
  }
  function Xt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : k ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === vf || String(i.source_kind || "") === rE;
  }
  function Ro(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function K1(i) {
    return Xt(i) && Ro(i) ? gb : 1;
  }
  function W1() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function B1() {
    return String(W1() || "") === "lasso_fill";
  }
  function U1() {
    if (r) return;
    const i = It();
    !i || !Xt(i) || (i.visible = Ro(i), $t(), Qe(), it(), Ve(), Ke(), ae());
  }
  function Y1() {
    if (r || t !== "stickers") return;
    const i = It();
    if (!i || !Xt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = lu(Cl, () => {
      ae();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Oi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), Qe(), it(), Ve(), Ke(), ae();
  }
  function X1(i) {
    if (!i || !Xt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = lu(Cl, () => {
      ae();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (l.vFOV_deg = Oi(
      l.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), l;
  }
  function q1() {
    const i = It();
    if (!i || !Xt(i)) return !1;
    const s = X1(i);
    if (!s) return !1;
    const l = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function ri(i) {
    return Cn.uiList(e, i);
  }
  function ou(i) {
    return Cn.uiValue(e, i);
  }
  function Fp() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return fc(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function J1() {
    const { metaKey: i } = Fp(), s = ou(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function au(i) {
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
  function su(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), f = s % 60;
    return `${l}:${String(f).padStart(2, "0")}`;
  }
  function el() {
    return k ? _.timeline.fps : xt.metaFps || 1e3;
  }
  function Ci(i = {}) {
    const s = Number(i.duration ?? A.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? A.videoTransport.fps ?? 24)), f = an.frame / el(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!A.videoTransport.ready, m = an.playing, g = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!A.videoTransport.visible, w = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Ae instanceof HTMLVideoElement ? Ae.muted : A.videoTransport.muted), S = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Ae instanceof HTMLVideoElement ? Ae.volume : A.videoTransport.volume
    ), I = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Eo(Ae), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!A.videoTransport.loop;
    Object.assign(A.videoTransport, {
      ready: p,
      playing: m,
      visible: g,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: su(f),
      durationLabel: su(s),
      frameCount: Math.max(0, Number(i.frameCount ?? A.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: I,
      muted: w,
      volume: Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : A.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? A.videoTransport.thumbnailCount ?? or))
    });
  }
  function Tp() {
    return !!(Ae instanceof HTMLVideoElement && !k && Ae.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function Dp() {
    if (!(Ae instanceof HTMLVideoElement) || !A.videoTransport.hasAudio) return;
    const i = !Ae.muted;
    Ae.muted = i, !i && Number(Ae.volume || 0) <= 0 && (Ae.volume = Math.max(0.01, Number(A.videoTransport.volume || 1))), Ci({
      hasAudio: A.videoTransport.hasAudio,
      muted: Ae.muted,
      volume: Number(Ae.volume ?? A.videoTransport.volume ?? 1)
    });
  }
  function Z1() {
    Ci({
      visible: Tp()
    });
  }
  function Q1() {
    if (!(Ae instanceof HTMLVideoElement) || Number(Ae.videoWidth || 0) < 1 || Number(Ae.videoHeight || 0) < 1) return !1;
    const i = Number(Ae.videoWidth || 0), s = Number(Ae.videoHeight || 0);
    (G.width !== i || G.height !== s) && (G.width = i, G.height = s);
    const l = G.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(Ae, 0, 0, i, s), G.__panoFrameIdx = Number(G.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function Lp() {
    return !an.showsVideo && Number(G.width || 0) > 0 && Number(G.height || 0) > 0 && Number(G.__panoFrameIdx || 0) > 0 ? G : Ae instanceof HTMLVideoElement && Number(Ae.videoWidth || 0) > 0 && Number(Ae.videoHeight || 0) > 0 && Number(Ae.readyState || 0) >= 2 ? Ae : null;
  }
  function Rp() {
    G.__panoFrameIdx = 0, ee.backgroundDirty = !0;
  }
  function Ii() {
    if (!(Ae instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Fp(), s = xn(e, "background") && ri(i)[0] || null, l = cs(s), f = [l, Cn.linkedVideoFile(e, Qp())].filter(Boolean), p = f.find((C) => !xt.failedSrcs.has(C)) || "";
    xt.videoFailed = !p && f.length > 0;
    const m = p && p === l ? J1() : null;
    xt.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const g = Math.max(1, Number((m == null ? void 0 : m.fps) || (k ? _.timeline.fps : 24))), w = Ae.dataset.panoSrc === p && Number.isFinite(Ae.duration) ? Ae.duration : 0, S = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / g : w)), I = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(S * g))), M = !!(m != null && m.has_audio) || Eo(Ae);
    return p && Ae.dataset.panoSrc !== p ? (Ae.pause(), Rp(), Ae.dataset.panoSrc = p, Ae.loop = !k && !!A.videoTransport.loop, Ae.muted = !!A.videoTransport.muted, Ae.volume = Math.max(0, Math.min(1, Number(A.videoTransport.volume ?? 1))), Ae.src = p, Ae.load(), an.setSource(!0), k || an.seek(0)) : !p && Ae.getAttribute("src") && (Ae.pause(), Ae.removeAttribute("src"), delete Ae.dataset.panoSrc, Ae.load(), Rp(), Ys(), an.setSource(!1)), k || (Ae.loop = !!A.videoTransport.loop), p && !k && xt.thumbnailSrc !== p && !xt.thumbnailFailedSrcs.has(p) && A1(p, S, g), p || Ys(), Ci({
      ready: !!p,
      visible: !!p && Tp(),
      duration: S,
      frameCount: I,
      fps: g,
      hasAudio: M,
      loop: !!Ae.loop,
      muted: !!Ae.muted,
      volume: Number(Ae.volume ?? A.videoTransport.volume ?? 1),
      thumbnailCount: A.videoTransport.thumbnailCount
    }), p || null;
  }
  function Vp(i, s = null) {
    var l;
    if (i && typeof i == "object" && !Array.isArray(i)) return i;
    if (Array.isArray(i) && i.length > 0) {
      const f = i[0];
      if (f && typeof f == "object" && !Array.isArray(f)) return f;
    }
    if (Array.isArray(s) && s.length > 0) {
      const f = (l = s[0]) == null ? void 0 : l.parsed_state;
      if (f && typeof f == "object" && !Array.isArray(f))
        return {
          yaw_deg: Number(f.yaw_deg || 0),
          pitch_deg: Number(f.pitch_deg || 0),
          hFOV_deg: Number(f.hFOV_deg || 30),
          rot_deg: Number(f.roll_deg || 0)
        };
    }
    return null;
  }
  function lu(i, s = null) {
    return Sf(e, i, en, s || (() => ae()));
  }
  function cu(i = null) {
    return xn(e, "external-sticker") ? lu(Cl, i) : null;
  }
  function $p() {
    if (!xn(e, "external-sticker")) return null;
    const i = ri(aE)[0];
    if (!i || typeof i != "object") return null;
    const s = ri(oE).map(cs).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const l = cs(ri(iE)[0] || null);
    return l ? { src: l, meta: i } : null;
  }
  function ev() {
    const i = _.stickers.find(Xt), s = i ? $p() : null, l = s ? Ob(i.clip, h.frame, _.timeline.fps, s.meta) : null;
    Fo.follow({ src: (s == null ? void 0 : s.src) || "", time: l, playing: an.advancing, fps: _.timeline.fps });
    const f = i ? yu(i) : null, p = s != null && s.frames ? C1.picture(s.frames, l, s.meta, f) : Fo.picture(he, f);
    return p ? { media: p, revision: au(p), source: Fb(s, f) } : null;
  }
  function Oi(i, s, l) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = Z(Number(i || 30), 0.1, 179) * zr, g = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return Z(g * ho, 0.1, 179);
  }
  function tv(i) {
    const s = String(i || "").trim();
    if (!s) return null;
    try {
      const l = JSON.parse(s);
      if (!l || typeof l != "object" || String(l.kind || "") !== "pano_sticker_state") return null;
      const f = l.version;
      let p = null;
      if (typeof f == "number" && Number.isInteger(f) ? p = f : typeof f == "string" && /^\d+$/.test(f) && (p = Number.parseInt(f, 10)), p !== 1) return null;
      const m = l.pose;
      if (!m || typeof m != "object") return null;
      const g = Number(m.yaw_deg), w = Number(m.pitch_deg), S = Number(m.roll_deg), I = Number(m.hFOV_deg);
      if (![g, w, S, I].every((X) => Number.isFinite(X))) return null;
      let M = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const C = {
        yaw_deg: M,
        pitch_deg: Z(w, -89.9, 89.9),
        roll_deg: S,
        hFOV_deg: Z(I, 0.1, 179)
      }, F = Number(l.source_aspect);
      return Number.isFinite(F) && F > 0 && (C.source_aspect = F), C;
    } catch {
      return null;
    }
  }
  function zp(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = wo(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: Z(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: Z(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function nv(i) {
    var w;
    if (!i || typeof i != "object") return zp(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const S = Z(p, 0.1, 179) * zr, I = Z(m, 0.1, 179) * zr, M = Math.tan(I * 0.5);
      if (Math.abs(M) > 1e-6) {
        const C = Math.tan(S * 0.5) / M;
        Number.isFinite(C) && C > 0 && (g = C);
      }
    }
    if (i != null && i.asset_id && ((w = _ == null ? void 0 : _.assets) != null && w[i.asset_id])) {
      const S = _.assets[i.asset_id], I = Number((S == null ? void 0 : S.w) || 0), M = Number((S == null ? void 0 : S.h) || 0);
      I > 0 && M > 0 && (g = I / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: Z(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: Z(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function rv(i) {
    return Cn.linkedValue(e, i);
  }
  function iv(i, s, l) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : tv(s);
    if (f) {
      const g = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || f.source_aspect || 1), w = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: Oi(f.hFOV_deg, g, w),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const p = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Oi(30, p, m),
      rot_deg: 0
    };
  }
  function ov() {
    const i = cu(() => {
      vi(e, "image-loaded");
    }), s = xn(e, "external-sticker") ? Vp(ou("pano_sticker_input_pose"), null) : null;
    return Gb(_, Hb(e, { pose: s, image: i }));
  }
  function av() {
    var w;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((S) => String((S == null ? void 0 : S.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((w = e.getInputLink(i)) == null ? void 0 : w.id) ?? null : null, l = cu(() => {
      vi(e, "image-loaded");
    }), f = Vp(ou("pano_sticker_input_pose"), null), p = rv("sticker_state"), m = Cn.externalStateHash(e, p), g = s == null ? null : iv(f, p, l);
    return jb(_, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: g,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function jp(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? ov() : av();
    if (s.changed) {
      const l = _.stickers.find(Xt);
      _.stickers = s.state.stickers, _.active = s.state.active, l && h.selectedId === l.id && !_.stickers.some((f) => f.id === l.id) && (h.selectedId = null, h.selectedIds = []), it(), Ve(), Ke();
    }
    ae();
  }
  function Da(i = {}) {
    const l = i.preservePanelValues !== !1 ? sn(It()) : null;
    l && (h.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: hi(l)
    }), h.selectedId = null, h.selectedIds = [], Vo(), h.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function La() {
    return !P || !h.worldSelectedId ? null : _.stickers.find((i) => i.id === h.worldSelectedId && i.placement === "world") || null;
  }
  function uu(i) {
    Rn(null), h.worldSelectedId = i, ee.backgroundDirty = !0;
  }
  function Vo() {
    h.worldSelectedId && (h.worldSelectedId = null, h.gizmoAxis = null, ee.backgroundDirty = !0);
  }
  function tl(i) {
    return !!i && !r && !i.locked;
  }
  function sv() {
    if (t !== "cutout") return;
    const i = ze();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function fu() {
    if (R && Zo(A.toolButtons, "value", "add-camera", { disabled: Dr() }), t !== "cutout") return;
    const i = ze();
    Zo(A.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? ke.camera : ke.plus_circle
    });
  }
  function Tr() {
    const i = jA({
      spaceView: Ji(),
      spaceMode: ql(h.spaceMode, h.viewTransition),
      readOnly: r,
      frameMode: V && h.mode === "frame",
      showGrid: h.showGrid
    });
    A.space && Object.assign(A.space, i.space);
    for (const [s, l] of Object.entries(i.buttons)) Zo(A.floatingButtons, "action", s, l);
  }
  function ii() {
    var l;
    const i = HA({ hasShot: !!ze(), erp: qi(), studio: R });
    h.mode === "frame" && i.disabled && (R ? Rh(ze()) : h.mode = "pano"), h.outputPreviewRect = null, A.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && !V), f.key === "frame" ? Object.assign(f, i) : f.disabled = !1;
    });
    const s = V && h.mode === "frame" ? ze() : null;
    A.frameRail.visible = !!s, A.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, A.frameRollKnob.visible = !!s && !r && s.locked !== !0, A.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, A.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), A.frameRollKnob.displayValue = Qo(A.frameRollKnob.rollDeg), A.frameRollKnob.dragging = ((l = h.interaction) == null ? void 0 : l.kind) === "roll_frame", A.frameRollKnob.armed = !!s && h.altModifier === !0, A.frameRail.rollKnob = A.frameRollKnob, A.frameRail.aspectLabel = s ? hi(s) : "", A.frameRail.aspectChoices = v1(s ? String(hi(s)) : null, { erp: R, coverage: _.coverage }), s || (A.frameRail.aspectOpen = !1), A.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!ze(), V && A.cameraPreview && (A.cameraPreview.visible = h.mode !== "frame" && Hp(), A.cameraPreview.expanded = !!h.outputPreviewExpanded, A.cameraPreview.settled = A.cameraPreview.settled === !0 && ee.pendingStableLayoutFrames <= 0 && ee.hasPresentedFrame), Tr(), Wh() ? mt(h.pointerPos) : Tt(h.mode === "pano" ? "grab" : "default");
  }
  function Hp() {
    return !R || Dr() && !qi();
  }
  function qi() {
    return R && Dr() && _.camera.projection === "erp";
  }
  function lv() {
    const s = eh({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Gp() {
    return yb({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, O.width, O.height);
  }
  function Kp() {
    return !k || !xn(e, "scene") ? null : Mg(ri("pano_scene_files"), ri("pano_scene_meta"), cs);
  }
  function cv() {
    return !k || !xn(e, "external-sticker") ? null : Mg(ri("pano_sticker_files"), ri("pano_sticker_meta"), cs);
  }
  function Ji() {
    return h.mode === "pano" && Ra();
  }
  function Ra() {
    return k && rN({ sceneLinked: P && !!od(e).scene, files: Kp(), stickers: _.stickers });
  }
  function cr() {
    return h.spaceMode === "6dof" && Ji();
  }
  function du() {
    var i, s, l;
    return Z2((l = (s = (i = Ir.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : l.call(s, a1));
  }
  function pu() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function Va(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function uv(i) {
    var l;
    const s = RA(h.spaceMode, h.viewTransition, i);
    if (s !== "keep") {
      if (s === "return") {
        Xi({ ...bn(), position: $o(), distance: ((l = Lr()) == null ? void 0 : l.radius) || Kr }, { mode: i, moved: !1 });
        return;
      }
      Ca(), Va(Zf({ ...pu(), position: bn().position }, i, $o())), ee.backgroundDirty = !0, Tr(), ae({ localOnly: !0 });
    }
  }
  function bn() {
    var l;
    const i = h.viewMoved ? h.viewDistance : ((l = Lr()) == null ? void 0 : l.radius) || Kr, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return eN(h.spaceMode, s, $o());
  }
  function $o() {
    return Dr() ? Zi().position : [0, 0, 0];
  }
  function Dr() {
    return W && _.camera !== null;
  }
  function Zi() {
    return qd(_.camera, h.frame);
  }
  function Lr() {
    var s;
    const i = Zn();
    return ((s = i.space ?? i.content) == null ? void 0 : s.sphere) ?? null;
  }
  function Wp(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, ee.backgroundDirty = !0, ae({ localOnly: !0 });
  }
  function Ei() {
    var i;
    return ((i = Lr()) == null ? void 0 : i.radius) || Kr;
  }
  function fv() {
    var w;
    const i = Zn().space, s = De.sceneState, l = h.worldSelectedId || h.selectedId, f = s.stickers.findIndex((S) => S.id === l), p = f < 0 ? null : {
      sticker: s.stickers[f],
      value: mc(s, h.frame).stickers[f],
      plane: i.stickers.find((S) => S.id === l) ?? null,
      item: ((w = i.sticker) == null ? void 0 : w.id) === l && i.sticker.url ? { kind: i.sticker.kind, box: Te.sceneBox(i.sticker.url) } : null
    }, m = ur() ? oh() : cN(Lr(), p);
    if (!m) return;
    const g = bn();
    h.viewDistance = g.distance, h.viewMoved = !0, Xi(kg(g, m, O.width, O.height));
  }
  function hu(i) {
    return Te.pick(Qa(), i.x, i.y, O.width, O.height);
  }
  function Bp(i, s) {
    var l;
    return lf(i, s, h.viewMoved ? null : (l = Lr()) == null ? void 0 : l.center, Ei());
  }
  function Up() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function dv(i, s) {
    const l = performance.now(), f = { x: i.x, y: i.y, time: l, key: Te.contentKey(), view: Up() };
    if (!_g(Ln, f)) {
      const m = hu(i);
      Ln = { ...f, cost: performance.now() - l, hit: m };
    }
    const p = bn();
    Wp(Sg(p, Bp(p, Ln.hit), s, Ei())), Ln.view = Up(), Ln.wheelTime = l;
  }
  function Yp(i, s, l) {
    const f = Bp(bn(), hu(s));
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: f } : { kind: "space_pan", last: s, depth: ha(bn(), f) }, mt(s), O.setPointerCapture(l);
  }
  function mu() {
    const i = `${h.viewYaw}|${h.viewPitch}|${h.viewFov}|${O.width}|${O.height}`;
    return Je.key !== i && (Je = { key: i, projection: bb(Gp(), O.width, O.height) }), Je.projection;
  }
  function $a(i) {
    const s = mu().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function gu(i, s) {
    return mu().ray(i, s);
  }
  function Fi() {
    const i = O.width, s = O.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const w = s, S = w * l;
      return { x: (i - S) * 0.5, y: 0, w: S, h: w };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function yu(i) {
    var g;
    if (i && typeof i == "object" && (Xt(i) || i.external === !0))
      return cu(() => {
        vi(e, "image-loaded");
      });
    const s = k ? za(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = en.get(s);
    if (l) return l;
    const f = k ? sb(i.source) : (g = _.assets) == null ? void 0 : g[s], p = vE(f);
    if (!p) return null;
    const m = new Image();
    return x1(m, p), m.onload = () => {
      S1(m, p), ae();
    }, m.onerror = () => {
      k1(m, p), ae();
    }, m.src = p, en.set(s, m), m;
  }
  function za(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function Xp(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const f = Pi.get(l);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, Pi.set(l, p), p;
  }
  function pv(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Co.get(s);
    if (l) return l.ready ? l : null;
    const f = Xp(i, () => {
      const M = Co.get(s);
      M && (M.ready = !1), ae({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const p = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (p < 1 || m < 1) return null;
    const g = document.createElement("canvas");
    g.width = p, g.height = m;
    const w = g.getContext("2d", { willReadFrequently: !0 });
    if (!w) return null;
    w.clearRect(0, 0, p, m), w.drawImage(f, 0, 0, p, m);
    const S = w.getImageData(0, 0, p, m).data, I = { canvas: g, width: p, height: m, alpha: S, ready: !0 };
    return Co.set(s, I), I;
  }
  function hv(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = sr(Number(i.u || 0), p), w = Number(i.v || 0) - m, S = Math.max(0.02, Number(l || 1)), I = Number(f || 0) * zr, M = Math.cos(I), C = Math.sin(I), F = g / S, X = w / S, H = F * M + X * C, J = -F * C + X * M;
    return {
      ...i,
      u: ((p + H) % 1 + 1) % 1,
      v: m + J
    };
  }
  function mv(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, g = hv(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), w = Number(l.u1 || 0) - Number(l.u0 || 0), S = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(w > 1e-6) || !(S > 1e-6)) return null;
    const I = sr(Number(g.u || 0), Number(l.u0 || 0)) / w, M = (Number(g.v || 0) - Number(l.v0 || 0)) / S;
    if (I < 0 || I > 1 || M < 0 || M > 1) return 0;
    const C = pv(i);
    if (!C) return null;
    const F = Z(Math.floor(I * C.width), 0, C.width - 1), X = Z(Math.floor(M * C.height), 0, C.height - 1);
    return Number(C.alpha[(X * C.width + F) * 4 + 3] || 0);
  }
  function qp(i, s, l, f = null) {
    if (!(s != null && s.visible) || !Vi(l, s.corners)) return !1;
    const p = f || Nr(l, performance.now()), m = mv(i, p);
    return m === null ? !0 : m > 8;
  }
  function gv() {
    var f, p, m, g, w, S, I, M;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, Zc(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((w = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : w.width) || 2048)), l = Math.max(1, Number(((S = i == null ? void 0 : i.descriptor) == null ? void 0 : S.height) || ((M = (I = i == null ? void 0 : i.displayPaint) == null ? void 0 : I.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: l };
  }
  function yv() {
    var X, H, J;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = Qn(), f = `${eu()}:${l.width}:${l.height}`;
    if (((X = h._activePaintEraserPreviewInfo) == null ? void 0 : X.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = Pn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const ie = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Nu(ie, p.targetSpace, !0);
    }
    const g = ja(l.width, l.height, { readback: !0 });
    if (!gh(g, p, { w: l.width, h: l.height })) return null;
    const w = ((J = (H = g.ctx) == null ? void 0 : H.getImageData(0, 0, l.width, l.height)) == null ? void 0 : J.data) || null;
    if (!w) return null;
    let S = l.width, I = l.height, M = -1, C = -1;
    for (let ie = 0; ie < l.height; ie += 1)
      for (let fe = 0; fe < l.width; fe += 1)
        w[(ie * l.width + fe) * 4 + 3] <= 8 || (fe < S && (S = fe), ie < I && (I = ie), fe > M && (M = fe), ie > C && (C = ie));
    if (M < S || C < I)
      return h._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const F = {
      surface: g,
      bounds: { minX: S, minY: I, maxX: M, maxY: C },
      key: `${f}:${S}:${I}:${M}:${C}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: f, value: F }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), F;
  }
  function zo() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function bv(i, s, l) {
    var f, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, g = ((p = i.item) == null ? void 0 : p.transform) || {}, w = Number(m.u0 || 0) + Number(g.du || 0), S = Number(m.u1 || 0) + Number(g.du || 0), I = Number(m.v0 || 0) + Number(g.dv || 0), M = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(Z(I, 0, 1) * l),
        maxY: Math.ceil(Z(M, 0, 1) * l),
        wraps: S - w >= 1 || w < 0 || S > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = kr(i.actionGroupId, "paint"), g = Ai(i.actionGroupId, "paint", m);
      if (!g) return null;
      const w = g.centerUv.u - g.halfW, S = g.centerUv.u + g.halfW, I = g.centerUv.v - g.halfH, M = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(Z(I, 0, 1) * l),
        maxY: Math.ceil(Z(M, 0, 1) * l),
        wraps: S - w >= 1 || w < 0 || S > 1
      };
    }
    return null;
  }
  function vv(i, s, l) {
    if (!i || !s) return !1;
    const f = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: l - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], p = f(i), m = f(s);
    return p.some((g) => m.some((w) => !(g.maxX < w.minX || w.maxX < g.minX || g.maxY < w.minY || w.maxY < g.minY)));
  }
  function _v(i, s, l) {
    var Ne, Ye, qe, lt, be, le, me;
    if (!i || !s || !((Ne = l == null ? void 0 : l.surface) != null && Ne.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = bv(s, f, p);
    if (m && !vv(m, l.bounds, f)) return i;
    const g = String(((Ye = s.item) == null ? void 0 : Ye.id) || s.id || ""), w = ((qe = s.item) == null ? void 0 : qe.transform) || {}, S = `${l.key}:${g}:${f}:${p}:${Number(w.du || 0).toFixed(6)}:${Number(w.dv || 0).toFixed(6)}:${Number(w.rot_deg || 0).toFixed(3)}:${Number(w.scale || 1).toFixed(4)}`, I = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (I.has(S)) return I.get(S);
    const M = Z(Math.floor(Number(((lt = l.bounds) == null ? void 0 : lt.minX) || 0)), 0, Math.max(0, f - 1)), C = Z(Math.floor(Number(((be = l.bounds) == null ? void 0 : be.minY) || 0)), 0, Math.max(0, p - 1)), F = Z(Math.ceil(Number(((le = l.bounds) == null ? void 0 : le.maxX) || 0)), M, Math.max(0, f - 1)), X = Z(Math.ceil(Number(((me = l.bounds) == null ? void 0 : me.maxY) || 0)), C, Math.max(0, p - 1)), H = Math.max(1, F - M + 1), J = Math.max(1, X - C + 1), ie = ja(f, p, { readback: !0 });
    ie.ctx.clearRect(0, 0, f, p), ie.ctx.drawImage(i, 0, 0);
    const fe = ie.ctx.getImageData(M, C, H, J);
    ie.ctx.save(), ie.ctx.globalCompositeOperation = "destination-out", ie.ctx.drawImage(l.surface.canvas, 0, 0), ie.ctx.restore();
    const ye = ie.ctx.getImageData(M, C, H, J);
    let ce = !1;
    for (let Le = 0; Le < H * J; Le += 1) {
      const xe = fe.data[Le * 4 + 3], He = ye.data[Le * 4 + 3];
      if (xe > He) {
        ce = !0;
        break;
      }
    }
    return ce ? (I.size > 64 && I.clear(), I.set(S, ie.canvas), ie.canvas) : (I.set(S, i), i);
  }
  function Jp(i, s = null) {
    const l = yn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!l || !f) return null;
    const p = Xp(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: g } = gv(), w = (i == null ? void 0 : i.transform) || {}, S = [
      l,
      m,
      g,
      f.u0,
      f.v0,
      f.u1,
      f.v1,
      w.du,
      w.dv,
      w.rot_deg,
      w.scale,
      Ha()
    ].join(":"), I = Ui.get(S);
    if (I) return I;
    Ui.size > 64 && Ui.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = g;
    const C = M.getContext("2d");
    if (!C) return null;
    const F = Number(f.u0 || 0) * m, X = Number(f.v0 || 0) * g, H = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), J = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * g), ie = F + H * 0.5 + Number(w.du || 0) * m, fe = X + J * 0.5 + Number(w.dv || 0) * g, ye = Number(w.rot_deg || 0) * zr, ce = Math.max(0.01, Number(w.scale || 1));
    for (const Ne of [-m, 0, m])
      C.save(), C.translate(ie + Ne, fe), C.rotate(ye), C.scale(ce, ce), C.drawImage(p, -H * 0.5, -J * 0.5, H, J), C.restore();
    return Ui.set(S, M), M;
  }
  async function bu(i, s) {
    const l = await new Promise((w) => i.toBlob(w, "image/png")), f = new FormData();
    f.append("image", l, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const p = await Jt.fetchApi("/upload/image", { method: "POST", body: f });
    if (!p || p.status !== 200) throw new Error(`upload failed (${p == null ? void 0 : p.status})`);
    const m = await p.json(), g = String((m == null ? void 0 : m.name) || "").trim();
    if (!g) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: g,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let nl = null, rl = !1;
  function wv() {
    if (E) return !1;
    const i = w0(_.painting), { width: s, height: l } = Ka();
    return EM(_.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function Zp() {
    const i = String(e.id ?? "0"), s = Il.get(i);
    if (rl && s) return s;
    const l = (async () => {
      var m, g, w, S, I, M, C, F, X, H, J, ie;
      const f = Ga(), p = w0(_.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, nl = f, Vn());
        return;
      }
      if (nl !== f && !rl) {
        rl = !0;
        try {
          ll();
          const fe = Zc(!1), ye = ((g = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, fe)) || null, ce = ((w = ye == null ? void 0 : ye.displayPaint) == null ? void 0 : w.canvas) || null, Ne = ((S = ye == null ? void 0 : ye.committedMask) == null ? void 0 : S.canvas) || null, Ye = Math.max(1, Number(((I = ye == null ? void 0 : ye.descriptor) == null ? void 0 : I.width) || (ce == null ? void 0 : ce.width) || (Ne == null ? void 0 : Ne.width) || 2048)), qe = Math.max(1, Number(((M = ye == null ? void 0 : ye.descriptor) == null ? void 0 : M.height) || (ce == null ? void 0 : ce.height) || (Ne == null ? void 0 : Ne.height) || 1024));
          (!ce && p.totalPaintCount > 0 || !Ne && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((C = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== Ye || Number(((F = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : F.height) || 0) !== qe) && (h._paintLayerSyncBlankSurface = ja(Ye, qe)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ye, qe));
          const lt = ce || p.totalPaintCount > 0 && ((X = h._paintLayerSyncBlankSurface) == null ? void 0 : X.canvas) || null, be = Ne || p.totalMaskCount > 0 && ((H = h._paintLayerSyncBlankSurface) == null ? void 0 : H.canvas) || null;
          if (!lt && !be) return;
          let le = null, me = null;
          const Le = [];
          if (p.totalPaintCount > 0) {
            le = await bu(lt, `pano_paint_${i}.png`);
            for (const xe of fe) {
              const He = String(xe || "").trim();
              if (!He) continue;
              const Be = ((ie = (J = h.paintEngine) == null ? void 0 : J.getGroupDisplayCanvas) == null ? void 0 : ie.call(J, He)) || null;
              if (!Be) continue;
              const Ue = He.replace(/[^a-zA-Z0-9_-]+/g, "_"), je = await bu(Be, `pano_group_${i}_${Ue}.png`);
              je && Le.push({
                id: He,
                actionGroupId: He,
                image: je
              });
            }
          }
          p.totalMaskCount > 0 && (me = await bu(be, `pano_mask_${i}.png`)), f === Ga() && (_.painting_layer = {
            paint: le,
            mask: me,
            groups: Le,
            revision: f
          }, nl = f, Vn());
        } catch (fe) {
          throw fe;
        } finally {
          rl = !1;
        }
      }
    })();
    return Il.set(i, l), l.finally(() => {
      Il.get(i) === l && Il.delete(i);
    }), l;
  }
  function vu() {
    if (t === "cutout" && !E) {
      const p = Lp();
      if (p) return p;
      const m = kf(
        e,
        ["erp_image", "bg_erp"],
        () => ae(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !wd(m) ? m : Sf(e, "pano_input_images", en, () => ae()) || m || null;
    }
    const i = Lp();
    if (i) return i;
    const s = xn(e, "background") ? Sf(e, "pano_input_images", en, () => ae()) : null;
    if (s && !wd(s)) return s;
    if (Ae instanceof HTMLVideoElement && Ae.dataset.panoSrc) return Ae;
    const l = Qp();
    return kf(e, l, () => ae(), `background:${l.join("|")}`) || s || null;
  }
  function xv() {
    var s;
    const i = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((l) => (l == null ? void 0 : l.name) === "source");
    return i >= 0 && e.graph ? String(((s = e.getInputLink(i)) == null ? void 0 : s.type) || "") : "";
  }
  function Qp() {
    if (t === "cutout") return E ? xv() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function _u(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Sv() {
    if (Te.failed) return { status: mr, detail: "renderer" };
    if (!Te.ready) return { status: Ar, detail: "boot" };
    let i = Ma;
    const s = [];
    if (h.showPanorama) {
      const l = vu();
      i = xt.videoFailed ? mr : _d(l, _u);
    }
    if (h.showObjects)
      for (const l of Ia()) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const f = yu(l);
        s.push(_d(f, _u));
      }
    return QO({
      presented: ee.hasPresentedFrame,
      background: i,
      stickers: s
    });
  }
  function jo() {
    const i = new Set(
      (_.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(_.assets || {}).forEach((s) => {
      i.has(s) || (delete _.assets[s], en.delete(s));
    });
  }
  function wu(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(Z(i.y, -1, 1))
    };
  }
  function xu(i, s = null) {
    const { lon: l, lat: f } = wu(i), p = Fi();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const g = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function il(i) {
    const s = sn(i), l = Pa(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(Z(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * zr), p = Math.tan(Z(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * zr);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: f,
      tanY: p
    };
  }
  function Ti(i, s, l) {
    return PE(v0(v0(i.centerDir, _0(i.right, s)), _0(i.up, l)));
  }
  function eh(i) {
    const s = il(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => Ti(s, f * s.tanX, p * s.tanY));
  }
  function th(i, s, l) {
    const f = il(i), p = (s * 2 - 1) * f.tanX, m = (1 - l * 2) * f.tanY;
    return Ti(f, p, m);
  }
  function nh(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: Z((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function kv(i) {
    var S, I, M, C;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.scale) || 1)), p = Number(((I = i == null ? void 0 : i.transform) == null ? void 0 : I.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), g = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((F) => qs(Js(F, l, f, p), m, g));
  }
  function Mv(i) {
    const s = yn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${Ha()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (h.mode === "frame") {
      const m = ze(), g = m ? hn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function Nv(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = ln(i) ? "frame" : St(i) ? "sticker" : "item", f = sn(i), p = [
      l,
      s,
      h.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      hi(f),
      ar(i) && zi(i.clip, h.frame)
    ].join(":");
    if (h.mode === "frame") {
      const m = ze(), g = m ? hn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function rh() {
    var i, s;
    return ((s = (i = h.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function Pv() {
    return rh() ? `${dh()}:mask_display` : "";
  }
  function ih(i) {
    if (!h.showMask) return i;
    const s = rh();
    if (!s) return i;
    const l = Pv(), f = i.reduce((g, w) => Math.max(g, Number((w == null ? void 0 : w.zIndex) || 0)), -1), p = (Array.isArray(_.stickers) ? _.stickers : []).reduce((g, w) => Math.max(g, Number((w == null ? void 0 : w.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Av() {
    var f, p;
    const i = Qc(!0), s = yv(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const w = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, g)) || null;
        if (!w) continue;
        l.push({
          id: `paint_group:${g}`,
          source: w,
          revision: `${dh()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, w = yn((g == null ? void 0 : g.id) || m.id || "");
        if (!w) continue;
        const S = Jp(g, () => ae());
        if (!S) continue;
        const I = _v(S, m, s), M = (g == null ? void 0 : g.transform) || {};
        l.push({
          id: `raster:${w}`,
          source: I,
          revision: [
            Ga(),
            (s == null ? void 0 : s.key) || "",
            w,
            Number(M.du || 0).toFixed(6),
            Number(M.dv || 0).toFixed(6),
            Number(M.rot_deg || 0).toFixed(3),
            Number(M.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (g == null ? void 0 : g.visible) !== !1
        });
      }
    }
    return ih(l);
  }
  function Cv() {
    return (h.showObjects ? Av() : ih([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function Zn() {
    return rt || (rt = Iv()), rt;
  }
  function Iv() {
    const i = vu(), s = Cv(), l = { ..._.assets };
    for (const H of k ? [] : _.stickers) {
      const J = String((H == null ? void 0 : H.asset_id) || "");
      J && !l[J] && en.has(J) && (l[J] = { type: "comfy_image", filename: J });
    }
    const f = k ? _.stickers.map((H) => qc(H) ? { ...H, source: { kind: "file", filename: za(H) } } : H) : _.stickers, p = JSON.stringify([f, Object.keys(l), _.scene]);
    De.key !== p && (De = { key: p, sceneState: qr({ ..._, stickers: f, assets: l, painting: null }) });
    const m = Fo ? ev() : null, g = (H) => {
      if (Fo && Xt(H)) return m;
      const J = yu(H);
      return J ? { media: J, revision: au(J) } : null;
    }, w = h.showObjects ? vb(De.sceneState, h.frame, _.stickers, { media: g, paintLayers: s }) : s.map((H) => ({ kind: "erp", ...H })), S = i && (i === Ae || i === G) ? Ae.dataset.panoSrc : i, I = h.showPanorama && _u(i) ? { media: i, revision: au(i), coverage: Xn(_.coverage), source: S } : null, M = Ra(), C = tN(pu(), M, $o());
    C.mode !== h.spaceMode && Ca(), Va(C);
    const F = M ? Ov(De.sceneState, g) : null, X = Ji() ? { ...F, ...Ev(F) } : null;
    return { background: I, layers: w, space: X, content: F };
  }
  function Ov(i, s) {
    const l = mc(i, h.frame), f = Kp(), p = hb(f, l.scene), m = p != null && p.url ? Te.sceneBox(p.url) : null, g = m && td(p.kind, m), w = cv(), S = h.showObjects ? iN(w, i, l) : null, I = S != null && S.url ? Te.sceneBox(S.url) : null, M = I ? [{ box: td(S.kind, I), value: S.value }] : [], C = h.showObjects ? NN(i, h.frame, _.stickers, { media: s }) : [], F = rd(sN(l, g, C, M));
    return {
      evaluated: l,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: oN(w, i),
      sticker: S,
      stickers: C,
      sphere: F
    };
  }
  function Ev(i) {
    var l;
    const s = ((l = i.sphere) == null ? void 0 : l.radius) || Kr;
    return {
      gizmo: ur() ? Lv() : Fv(i.evaluated),
      grid: h.showGrid && !h.fullscreen ? _N(s) : null,
      lines: Dr() ? Dv(s) : []
    };
  }
  function Fv(i) {
    const s = La(), l = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !h.showObjects || !tl(s) || !(l != null && l.active) ? null : { mode: h.gizmoMode, transform: Qf(l) };
  }
  function Su(i) {
    return i * 0.2;
  }
  function oh() {
    return { center: Zi().position, radius: Su(Ei()) };
  }
  function Tv(i, s) {
    const { yaw_deg: l, pitch_deg: f } = mb(i.position, s);
    return { ...i, yaw_deg: l, pitch_deg: f };
  }
  function ur() {
    return Dr() && h.selectedId === qf;
  }
  function Dv(i) {
    const s = h.showObjects ? xN(SN(_, cl())) : [], l = s.length ? [{ segments: s, color: cE }] : [];
    if (!cr()) return l;
    const f = ur() ? m0 : lE;
    return [...l, { segments: Ag(Zi(), Su(i)), color: f }];
  }
  function Lv() {
    return !cr() || !ur() || r ? null : { mode: h.gizmoMode === "rotate" ? "rotate" : "translate", transform: Qf({ ...Zi(), scale: 1 }) };
  }
  function Rv(i, s) {
    var p;
    const l = (p = Zn().space) == null ? void 0 : p.gizmo;
    if (ur() && l && to("hover", s) !== null && to("down", s))
      return h.interaction = { kind: "world_gizmo", camera: !0, mode: l.mode, start: l.transform, base: Zi(), changed: !1 }, O.setPointerCapture(i.pointerId), mt(s), !0;
    const f = Ag(Zi(), Su(Ei()));
    return wN(Qa(), f, s, O.width, O.height) ? (ur() || (Rn(ze()), Ve(), Ke(), ae()), h.interaction = { kind: "world_select" }, O.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Vv() {
    if (!ee.backgroundDirty && ee.backgroundWasVisible) return;
    const { background: i, layers: s, space: l } = Zn(), f = Q.width, p = Q.height, m = Te.render({
      width: f,
      height: p,
      camera: l ? cf(bn(), f, p, l.sphere) : Gp(),
      background: i,
      layers: s,
      space: l
    }), g = Q.getContext("2d");
    g.clearRect(0, 0, f, p), !i && !s.length && !l ? (g.fillStyle = "#070707", g.fillRect(0, 0, f, p)) : m && g.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, p), ee.backgroundWasVisible = !!m, ee.backgroundDirty = !1, on = null, Tr(), (h.worldSelectedId || ur() || ve) && Ke();
  }
  function ah(i) {
    const { content: s } = Zn();
    return !s || !i.position ? Ps(i) : db(Ps(i), i.position, $h(), s.sphere);
  }
  function sh(i, s, l, f) {
    const { background: p, layers: m, content: g } = Zn();
    if (!p && !m.length && !g) return !1;
    const w = g && l.position ? g : null, S = Te.render({ width: s.w, height: s.h, camera: ah(l), background: p, layers: m, space: w, owner: f });
    return S ? (i.drawImage(S.canvas, S.x, S.y, S.width, S.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function $v(i) {
    const s = Zn(), l = JSON.stringify([i, Q.width, Q.height, Eg(s)]);
    if (l === on) return;
    const f = Te.renderUnwrap({ width: i.w, height: i.h, ...s }), p = Q.getContext("2d");
    p.fillStyle = "#070707", p.fillRect(0, 0, Q.width, Q.height), f && p.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), on = f ? l : null, ee.backgroundWasVisible = !1;
  }
  function zv(i = !1) {
    const s = O.width, l = O.height, f = Fi();
    if ($.globalAlpha = 1, $.lineWidth = 1, i || $.clearRect(0, 0, s, l), ll(), $v(f), h.showGrid && !h.fullscreen) {
      $.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = f.x + f.w * m / 16;
        $.beginPath(), $.moveTo(g, f.y), $.lineTo(g, f.y + f.h), $.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = f.y + f.h * m / 8;
        $.beginPath(), $.moveTo(f.x, g), $.lineTo(f.x + f.w, g), $.stroke();
      }
      $.strokeStyle = "rgba(250, 250, 250, 0.86)", $.lineWidth = 1.2, $.beginPath(), $.moveTo(f.x, f.y + f.h / 2), $.lineTo(f.x + f.w, f.y + f.h / 2), $.stroke(), $.fillStyle = "rgba(250, 250, 250, 0.42)", $.font = "500 11px Geist, sans-serif", $.textAlign = "center";
      const p = f.y + f.h * 0.57;
      $.fillText("Left", f.x + f.w * 0.25, p), $.fillText("Front", f.x + f.w * 0.5, p), $.fillText("Right", f.x + f.w * 0.75, p), $.fillText("Back", f.x + 38, p), $.fillText("Back", f.x + f.w - 38, p);
    }
  }
  function lh(i, s, l = 1) {
    let f = !1;
    $.strokeStyle = s, $.lineWidth = l, $.beginPath();
    for (const p of i) {
      const m = $a(p);
      if (!m) {
        f = !1;
        continue;
      }
      f ? $.lineTo(m.x, m.y) : ($.moveTo(m.x, m.y), f = !0);
    }
    $.stroke();
  }
  function jv(i = !1) {
    const s = O.width, l = O.height;
    if (i || $.clearRect(0, 0, s, l), ll(), Vv(), h.showGrid && !h.fullscreen && Zn().space)
      Hv();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(qn(p, g));
        lh(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(qn(g, p));
        lh(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: qn(-90, 0) },
        { name: "Front", dir: qn(0, 0) },
        { name: "Right", dir: qn(90, 0) },
        { name: "Back", dir: qn(180, 0) }
      ];
      $.fillStyle = "rgba(250, 250, 250, 0.42)", $.font = "500 11px Geist, sans-serif", $.textAlign = "center", f.forEach((p) => {
        const m = $a(p.dir);
        m && $.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function Hv() {
    const i = cf(bn(), O.width, O.height, Lr()), s = zs(i, [0, 0, 0], O.width, O.height);
    s && ($.fillStyle = "rgba(255, 221, 87, 0.9)", $.font = "500 11px Geist, sans-serif", $.textAlign = "center", $.fillText("ERP origin", s.x, s.y - 12));
  }
  function Gv(i, s = null, l = null, f = null) {
    if (h.mode === "frame") {
      const p = s || ze();
      if (!p) return [];
      const m = l || hn(p);
      return __(i, p, m);
    }
    return yh(i, f);
  }
  function ol(i, s = null, l = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const g = yh([i], p);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = Ho(i);
    return m ? oi(m, s, l, f) : null;
  }
  function Kv(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), f = kr(l, i.layerKind), p = Ai(l, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || nu(l, i.layerKind, f), g = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, w = [], S = h.mode === "frame" ? ze() : null, I = S ? hn(S) : null;
    for (const ce of f) {
      const Ne = (ce == null ? void 0 : ce.geometry) || null, Ye = (Ne == null ? void 0 : Ne.geometryKind) === "lasso_fill" ? Ne == null ? void 0 : Ne.points : (Ne == null ? void 0 : Ne.processedPoints) || (Ne == null ? void 0 : Ne.rawPoints) || (Ne == null ? void 0 : Ne.points) || [], qe = Gv(Ye, S, I, g).filter((le) => Number.isFinite(le == null ? void 0 : le.x) && Number.isFinite(le == null ? void 0 : le.y));
      if (!qe.length) continue;
      const lt = Li(String((ce == null ? void 0 : ce.toolKind) || "pen")), be = Wn[lt] || Wn[ui];
      w.push({
        points: qe,
        closed: String((Ne == null ? void 0 : Ne.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ce == null ? void 0 : ce.size) || 10) * Math.max(0.1, Number((be == null ? void 0 : be.sizeScale) ?? 1)) + 10),
        layerKind: String((ce == null ? void 0 : ce.layerKind) || i.layerKind || "paint")
      });
    }
    const M = ol(m, null, S, I, g);
    if (!M) {
      const ce = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ce), ce;
    }
    const F = F1(p).map((ce) => ol(ce, M.x, S, I, g)).filter((ce) => Number.isFinite(ce == null ? void 0 : ce.x) && Number.isFinite(ce == null ? void 0 : ce.y)).map((ce) => ({ x: Number(ce.x || 0), y: Number(ce.y || 0) }));
    if (F.length < 4) {
      const ce = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ce), ce;
    }
    const X = (ce, Ne) => ({
      x: (Number((ce == null ? void 0 : ce.x) || 0) + Number((Ne == null ? void 0 : Ne.x) || 0)) * 0.5,
      y: (Number((ce == null ? void 0 : ce.y) || 0) + Number((Ne == null ? void 0 : Ne.y) || 0)) * 0.5,
      a: ce,
      b: Ne
    }), H = X(F[0], F[1]), J = X(F[1], F[2]), ie = X(F[2], F[3]), fe = X(F[3], F[0]), ye = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: F,
      edgeMidpoints: [
        { edge: "top", ...H },
        { edge: "right", ...J },
        { edge: "bottom", ...ie },
        { edge: "left", ...fe }
      ],
      rotateStemBase: { x: H.x, y: H.y },
      rotateHandle: { x: H.x, y: H.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return h._strokeGeomCache.set(s, ye), ye;
  }
  function Wv(i, s) {
    const l = h.mode === "frame" ? ze() : null, f = l ? hn(l) : null, p = nh(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = ol(p, null, l, f, m), S = kv(i).map((F) => ol(F, (g == null ? void 0 : g.x) ?? null, l, f, m)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y));
    if (!Array.isArray(S) || S.length < 4) {
      const F = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(s, F), F;
    }
    const I = S.slice(0, 4).map((F) => ({ x: Number((F == null ? void 0 : F.x) || 0), y: Number((F == null ? void 0 : F.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: I.reduce((F, X) => F + Number(X.x || 0), 0) / I.length,
        y: I.reduce((F, X) => F + Number(X.y || 0), 0) / I.length
      },
      corners: I,
      visible: !0
    };
    return h._strokeGeomCache.set(s, C), C;
  }
  function oi(i, s = null, l = null, f = null, p = {}) {
    if (h.mode === "frame") {
      const M = l || ze(), C = f || hn(M);
      if (!M || !C) return null;
      const F = M ? Wa(M, i) : null;
      return F ? {
        x: Number(C.x || 0) + Number(F.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(F.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return xu(i, s);
    const m = 1e-4, g = mu().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(p != null && p.clipBehind)) return null;
    const w = O.width, S = O.height, I = Math.max(w, S) * 2;
    return {
      x: Z(g.x, -I, w + I),
      y: Z(g.y, -I, S + I),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function Bv(i, s = []) {
    if (h.mode !== "pano" || St(i)) return 1;
    const l = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return l.length ? SE(0.035, 0.2, Math.min(...l)) : 1;
  }
  function Uv(i) {
    if (ar(i) && !zi(i.clip, h.frame)) return { visible: !1 };
    const s = sn(i), l = qn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? ze() : null, p = f ? hn(f) : null, m = h.mode === "pano" && (St(i) || ln(i)), g = m ? { clipBehind: !0 } : null, w = oi(l, null, f, p, g);
    if (!w) return { visible: !1 };
    const S = il(i), M = eh(i).map((me) => oi(me, w.x, f, p, g)).filter((me) => Number.isFinite(me == null ? void 0 : me.x) && Number.isFinite(me == null ? void 0 : me.y));
    if (M.length < 4) return { visible: !1 };
    const C = Ti(S, 0, S.tanY), F = Ti(S, 0, S.tanY + Math.max(S.tanY * 0.43, 0.053)), X = oi(C, w.x, f, p, g);
    if (!X) return { visible: !1 };
    const H = oi(F, (X == null ? void 0 : X.x) ?? w.x, f, p, g), J = ((H == null ? void 0 : H.x) ?? X.x) - X.x, ie = ((H == null ? void 0 : H.y) ?? X.y) - X.y, fe = Math.hypot(J, ie) || 1, ye = {
      x: X.x + J / fe * 30,
      y: X.y + ie / fe * 30
    }, ce = oi(Ti(S, 0, S.tanY), w.x, f, p, g), Ne = oi(Ti(S, S.tanX, 0), w.x, f, p, g), Ye = oi(Ti(S, 0, -S.tanY), w.x, f, p, g), qe = oi(Ti(S, -S.tanX, 0), w.x, f, p, g);
    if (!ce || !Ne || !Ye || !qe) return { visible: !1 };
    const lt = [
      w,
      ...M,
      X,
      H,
      ce,
      Ne,
      Ye,
      qe
    ];
    if (m && !lt.some((me) => Number((me == null ? void 0 : me.rawZ) ?? (me == null ? void 0 : me.z)) > 1e-4)) return { visible: !1 };
    const be = Bv(i, lt), le = [
      {
        edge: "top",
        x: ce.x,
        y: ce.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: Ne.x,
        y: Ne.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: Ye.x,
        y: Ye.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: qe.x,
        y: qe.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: w.x, y: w.y },
      corners: M.map((me) => ({ x: me.x, y: me.y })),
      edgeMidpoints: le,
      rotateStemBase: { x: X.x, y: X.y },
      rotateHandle: ye,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: be,
      visible: !0
    };
  }
  function tn(i) {
    if (W && ln(i) && cr()) return { visible: !1 };
    if (pn(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = $1(p, i.layerKind), g = h._strokeGeomCache.get(m);
      return g || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Kv(i, m));
    }
    if (kn(i)) {
      const p = Mv(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Wv(i, p));
    }
    const s = Nv(i), l = h._strokeGeomCache.get(s);
    if (l) return l;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = Uv(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function al(i, s, l, f = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const g = m / l;
      let w = 0, S = 0;
      s === 0 ? (w = g, S = 0) : s === 1 ? (w = 1, S = g) : s === 2 ? (w = 1 - g, S = 1) : (w = 0, S = 1 - g);
      const I = th(i, w, S), M = h.mode === "unwrap" ? xu(I, f) : $a(I);
      M && p.push(M);
    }
    return p;
  }
  function Yv(i, s) {
    const l = sn(i), f = qn(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), p = h.mode === "unwrap" ? xu(f) : null, m = p ? p.x : null, g = h.mode === "pano" ? 28 : 20, w = [
      al(i, 0, g, m),
      al(i, 1, g, m),
      al(i, 2, g, m),
      al(i, 3, g, m)
    ];
    hp($, w, { selected: s });
  }
  function Xv() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], s = [...Xs()].sort((l, f) => Number(l.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function ku() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Xs()].sort((l, f) => Number(f.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function sl(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function ch(i, s, l) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = Z(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = $.globalAlpha;
    $.globalAlpha = m * p;
    const g = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", w = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", S = s ? 3.2 : 2.6;
    sl($, f), $.fillStyle = w, $.fill(), $.strokeStyle = g, $.lineWidth = S, $.stroke(), $.save(), $.strokeStyle = g, $.lineWidth = s ? 3.2 : 2.6, $.lineCap = "round";
    const I = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], M = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = s ? 12 : 9;
    I.forEach((F) => {
      const H = I.find((ye) => (ye == null ? void 0 : ye.edge) === M[F == null ? void 0 : F.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, J = H.x - F.x, ie = H.y - F.y, fe = Math.hypot(J, ie) || 1;
      $.beginPath(), $.moveTo(F.x, F.y), $.lineTo(F.x + J / fe * C, F.y + ie / fe * C), $.stroke();
    }), $.restore(), $.globalAlpha = m;
  }
  function qv(i, s, l, f) {
    const p = Z(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (ln(i)) {
      ch(s, l, f);
      return;
    }
    if (St(i)) {
      const g = $.globalAlpha;
      $.globalAlpha = g * K1(i) * p, h.mode === "frame" ? ($.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", $.lineWidth = l ? 2 : 1, sl($, s.corners), $.stroke()) : Yv(i, l), $.globalAlpha = g;
      return;
    }
    const m = $.globalAlpha;
    $.globalAlpha = m * p, $.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", sl($, s.corners), $.fill(), $.strokeStyle = l ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", $.lineWidth = l ? 2.8 : 1.9, sl($, s.corners), $.stroke(), $.globalAlpha = m;
  }
  function uh(i, s, l) {
    if (St(i)) {
      i1($, s, { accent: l });
      return;
    }
    const f = !(ln(i) && qi());
    $.fillStyle = l, f && s.corners.forEach((p) => {
      $.beginPath(), $.arc(p.x, p.y, 6.5, 0, Math.PI * 2), $.fill();
    }), f && ln(i) && ($.strokeStyle = l, $.lineCap = "round", $.lineWidth = 4, s.edgeMidpoints.forEach((p) => {
      var C, F, X, H;
      const m = (((C = p.b) == null ? void 0 : C.x) ?? p.x) - (((F = p.a) == null ? void 0 : F.x) ?? p.x), g = (((X = p.b) == null ? void 0 : X.y) ?? p.y) - (((H = p.a) == null ? void 0 : H.y) ?? p.y), w = Math.hypot(m, g) || 1, S = m / w, I = g / w, M = 10;
      $.beginPath(), $.moveTo(p.x - S * M, p.y - I * M), $.lineTo(p.x + S * M, p.y + I * M), $.stroke();
    }), $.lineCap = "butt"), pn(i) || ($.strokeStyle = "rgba(250, 250, 250, 0.9)", $.lineWidth = 1.8, $.beginPath(), $.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), $.lineTo(s.rotateHandle.x, s.rotateHandle.y), $.stroke(), $.fillStyle = l, $.beginPath(), $.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), $.fill());
  }
  function Jv() {
    var m;
    const i = h.mode === "frame" ? [] : lr(), s = i.length > 1, l = V ? Xv() : Fr(), f = l.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${ln(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== l || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: l,
      orderKey: f,
      sorted: [...l]
    });
    const p = h._sortedItemsCache.sorted;
    for (const g of p) {
      const w = h.mode !== "frame" && !s && Ip(g);
      if (h.mode === "frame" && !w || !h.showObjects && !ln(g)) continue;
      const S = St(g), I = ln(g), M = _n(g);
      if (!S && !I || ar(g) && !zi(g.clip, h.frame)) continue;
      const C = tn(g);
      if (t !== "stickers" && !C.visible)
        continue;
      const F = Z(Number((C == null ? void 0 : C.visibilityAlpha) ?? 1), 0, 1);
      if (F <= 0.01) continue;
      const X = I && V && h.mode === "pano" ? Z(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if ($.save(), $.globalAlpha *= X, qv(g, C, w, M), w && C.visible) {
        const H = M ? "#ff4d4f" : S && Xt(g) ? "#f59e0b" : "#0070f3", J = $.globalAlpha;
        $.globalAlpha = J * F, uh(g, C, H), $.globalAlpha = J;
      }
      $.restore();
    }
    if (V && h.mode === "pano" && !ze() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const g = h.cutoutPanoFrameVisual, w = Z(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      $.save(), $.globalAlpha *= w, ch(g.geom, g.selected, g.locked), g.selected && uh(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), $.restore();
    }
    if (s) {
      const g = Ta(i);
      if (g != null && g.visible) {
        const w = ru(i) ? "#ff4d4f" : "#0070f3";
        $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.95)", $.lineWidth = 2, $.setLineDash([6, 4]), $.beginPath(), $.moveTo(g.corners[0].x, g.corners[0].y);
        for (let S = 1; S < g.corners.length; S += 1) $.lineTo(g.corners[S].x, g.corners[S].y);
        $.closePath(), $.stroke(), $.setLineDash([]), $.fillStyle = w, g.corners.forEach((S) => {
          $.beginPath(), $.arc(S.x, S.y, 6.5, 0, Math.PI * 2), $.fill();
        }), $.restore();
      }
    } else
      i.forEach((g) => {
        if (!pn(g) && !kn(g)) return;
        const w = tn(g);
        if (!(w != null && w.visible)) return;
        const S = _n(g) ? "#ff4d4f" : "#0070f3";
        $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.95)", $.lineWidth = 2, $.setLineDash([6, 4]), $.beginPath(), $.moveTo(w.corners[0].x, w.corners[0].y);
        for (let I = 1; I < w.corners.length; I += 1) $.lineTo(w.corners[I].x, w.corners[I].y);
        $.closePath(), $.stroke(), $.setLineDash([]), $.fillStyle = S, w.corners.forEach((I) => {
          $.beginPath(), $.arc(I.x, I.y, 6.5, 0, Math.PI * 2), $.fill();
        }), $.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = qh(h.interaction.start, h.interaction.current);
      $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.9)", $.fillStyle = "rgba(255, 255, 255, 0.08)", $.lineWidth = 1, $.setLineDash([5, 4]), $.beginPath(), $.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), $.fill(), $.stroke(), $.restore();
    }
  }
  function fh(i, s = !1) {
    const l = Z(wo(i), 0.05, 20), f = s ? 320 : 220;
    return l >= 1 ? { width: f, height: Math.max(1, Math.round(f / l)) } : { width: Math.max(1, Math.round(f * l)), height: f };
  }
  function Zv(i) {
    if (!Ce || !i) return !1;
    const s = Ce.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || Ce.clientWidth || 0)), f = Math.round(Number(s.clientHeight || Ce.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function Qv() {
    if (h.outputPreviewRect = null, A.outputPreviewToggle.visible = h.mode !== "frame" && !!ze(), R && (A.outputPreviewToggle.visible = !1), !V || !A.cameraPreview) return;
    if (h.mode === "frame" || !Hp()) {
      A.cameraPreview.visible = !1, A.cameraPreview.settled = !1;
      return;
    }
    const i = ze();
    A.cameraPreview.visible = !0, A.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const s = Se == null ? void 0 : Se.getContext("2d");
    if (!i || !s) {
      A.cameraPreview.ready = !1, A.cameraPreview.settled = !1, A.cameraPreview.width = 220, A.cameraPreview.height = 132, A.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, Se.width, Se.height), Ft = null;
      return;
    }
    const l = fh(i, !!h.outputPreviewExpanded);
    A.cameraPreview.width = l.width, A.cameraPreview.height = l.height;
    const f = window.devicePixelRatio || 1, p = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * f)), h: Math.max(1, Math.round(l.height * f)) };
    (Se.width !== p.w || Se.height !== p.h) && (Se.width = p.w, Se.height = p.h);
    const { content: m } = Zn(), g = m && [i.position, Te.contentKey(), m.stickers.map((M) => [M.id, M.revision, M.opacity, M.position, M.quaternion, M.width])], w = JSON.stringify([p, Mi(i), Eg(Zn()), g]);
    let S = w === Ft;
    if (S || (s.clearRect(0, 0, p.w, p.h), S = sh(s, p, i, "camera_preview"), Ft = S ? w : null), !S) {
      A.cameraPreview.ready = !1, A.cameraPreview.label = vu() ? "Loading preview" : "Connect ERP image", A.cameraPreview.settled = !1;
      return;
    }
    const I = Zv(l);
    A.cameraPreview.ready = !0, A.cameraPreview.label = I ? "" : "Loading preview", A.cameraPreview.settled = I && ee.pendingStableLayoutFrames <= 0 && ee.hasPresentedFrame;
  }
  function Mu(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), f = Number(s.y || 0);
    return th(i, l, f);
  }
  function Ho(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(l);
    return Yc(f * Math.sin(s), Math.sin(l), f * Math.cos(s));
  }
  function e_(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function t_(i, s, l, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Mn(i, "widthScale", 1),
      pressureLike: Mn(i, "pressureLike", 1)
    }, ...f, u: s, v: l };
  }
  function n_(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Nu(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let J = null;
      i.forEach((ie) => {
        const fe = Number((ie == null ? void 0 : ie.u) || 0), ye = Number((ie == null ? void 0 : ie.v) || 0), ce = (fe % 1 + 1) % 1, Ne = J == null ? ce : J + sr(ce, (J % 1 + 1) % 1);
        p.set(ie, { x: Ne, y: ye }), J = Ne;
      });
    }
    const m = (J) => !J || typeof J != "object" ? { x: 0, y: 0 } : p.get(J) || e_(J), g = (J, ie, fe, ye = {}) => {
      const ce = f ? (Number(ie) % 1 + 1) % 1 : Number(ie), Ne = t_(J, ce, fe, ye);
      return p.set(Ne, { x: Number(ie), y: Number(fe) }), Ne;
    }, w = (J, ie, fe) => {
      const ye = m(J), ce = m(ie);
      return g(J, pr(ye.x, ce.x, fe), pr(ye.y, ce.y, fe), {
        t: pr(Number((J == null ? void 0 : J.t) || 0), Number((ie == null ? void 0 : ie.t) || 0), fe),
        widthScale: pr(Mn(J, "widthScale", 1), Mn(ie, "widthScale", 1), fe),
        pressureLike: pr(Mn(J, "pressureLike", 1), Mn(ie, "pressureLike", 1), fe)
      });
    };
    if (i.length === 1) {
      const J = m(i[0]);
      return [g(i[0], J.x, J.y)];
    }
    const S = n_(s, l), I = (J, ie) => {
      const fe = [0];
      for (let le = 1; le < J.length; le += 1) {
        const me = m(J[le - 1]), Le = m(J[le]);
        fe.push(fe[le - 1] + Math.hypot(Le.x - me.x, Le.y - me.y));
      }
      const ye = fe[fe.length - 1] || 0;
      if (ye <= 1e-8) {
        const le = J[0], me = m(le);
        return [g(le, me.x, me.y)];
      }
      const ce = [];
      let Ne = 0;
      for (let le = 0; le <= ye + 1e-9; le += ie) {
        for (; Ne < fe.length - 2 && fe[Ne + 1] < le; ) Ne += 1;
        const me = fe[Ne], Le = fe[Ne + 1], xe = Math.max(1e-8, Le - me);
        ce.push(w(J[Ne], J[Ne + 1], Z((le - me) / xe, 0, 1)));
      }
      const Ye = J[J.length - 1], qe = m(Ye), lt = ce[ce.length - 1], be = lt ? m(lt) : null;
      return (!be || Math.hypot(be.x - qe.x, be.y - qe.y) > ie * 0.35) && ce.push(g(Ye, qe.x, qe.y)), ce;
    }, M = (J) => {
      if (!Array.isArray(J) || J.length < 3) return J ? J.slice() : [];
      const ie = m(J[0]), fe = [g(J[0], ie.x, ie.y)];
      for (let Ne = 0; Ne < J.length - 1; Ne += 1) {
        const Ye = J[Ne], qe = J[Ne + 1], lt = m(Ye), be = m(qe), le = g(
          Ye,
          lt.x * 0.75 + be.x * 0.25,
          lt.y * 0.75 + be.y * 0.25,
          {
            t: Number(Ye.t || 0) * 0.75 + Number(qe.t || 0) * 0.25,
            widthScale: Mn(Ye, "widthScale", 1) * 0.75 + Mn(qe, "widthScale", 1) * 0.25,
            pressureLike: Mn(Ye, "pressureLike", 1) * 0.75 + Mn(qe, "pressureLike", 1) * 0.25
          }
        ), me = g(
          Ye,
          lt.x * 0.25 + be.x * 0.75,
          lt.y * 0.25 + be.y * 0.75,
          {
            t: Number(Ye.t || 0) * 0.25 + Number(qe.t || 0) * 0.75,
            widthScale: Mn(Ye, "widthScale", 1) * 0.25 + Mn(qe, "widthScale", 1) * 0.75,
            pressureLike: Mn(Ye, "pressureLike", 1) * 0.25 + Mn(qe, "pressureLike", 1) * 0.75
          }
        );
        fe.push(le, me);
      }
      const ye = J[J.length - 1], ce = m(ye);
      return fe.push(g(ye, ce.x, ce.y)), fe;
    }, C = I(i, S);
    if (C.length < 3) return C;
    const F = l ? 2 : 1;
    let X = C.slice();
    for (let J = 0; J < F; J += 1) X = M(X);
    return I(X, Math.max(S * 0.75, 55e-5));
  }
  function Mn(i, s, l = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : l;
  }
  function r_(i) {
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
  function ja(i, s, l = {}) {
    const f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const p = f.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, f.width, f.height), p.imageSmoothingEnabled = !0), { canvas: f, ctx: p };
  }
  function Ha() {
    const i = Ka();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ga() {
    const i = Ka();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function dh() {
    const i = eu(), s = Ga();
    return i ? `${s}:${i}` : s;
  }
  function i_() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function o_() {
    h.paintCompositeRevision += 1;
  }
  function a_() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function ph() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, _), h.paintEngineRevisionKey = Ha();
  }
  function hh() {
    _.painting_layer !== null && (_.painting_layer = null), nl = "";
  }
  function $t() {
    a_(), ee.backgroundDirty = !0, ee.dirty = !0;
  }
  function Mr({ rebuildPaintEngine: i = !1 } = {}) {
    hh(), i_(), $t(), i && ph();
  }
  function Go() {
    hh(), o_(), $t();
  }
  function ll() {
    var f;
    const i = Ka(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = jf(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
    const l = Ha();
    h.paintEngineRevisionKey !== l && (h.paintEngineRevisionKey = l, (f = h.paintEngine) == null || f.rebuildCommitted(_));
  }
  function Ka() {
    const i = Math.max(1, N(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Qn() {
    return Ka();
  }
  function s_(i, s, l, f, p = null) {
    const m = r_(i), g = Mn(s, "widthScale", 1) * Mn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * g) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * zr) * l * g) : Math.max(0.5, m.value / (2 * Math.PI) * l * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function l_(i, s, l = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, g = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * g : 1, f === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const w = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, S = m ? Math.max(0.28, Number(w.a ?? 1) * 0.88) : Math.max(0.12, Number(w.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(w.r || 0) * 255)}, ${Math.round(Number(w.g || 0) * 255)}, ${Math.round(Number(w.b || 0) * 255)}, ${S})`;
  }
  function c_(i, s, l) {
    const f = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function u_(i, s, l, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), l_(i, l, p);
    const g = (w) => c_(i, w, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let w = 0; w < s.length - 1; w += 1) {
      const S = s[w], I = s[w + 1];
      if (!S || !I) continue;
      const M = Number(S.x || 0), C = Number(S.y || 0), F = Number(I.x || 0), X = Number(I.y || 0), H = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5))), J = Math.max(0.5, Math.min(m, Number(I.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(C) || !Number.isFinite(F) || !Number.isFinite(X) || !Number.isFinite(H) || !Number.isFinite(J)) continue;
      const ie = F - M, fe = X - C, ye = Math.hypot(ie, fe);
      if (!Number.isFinite(ye) || ye < 1e-6) {
        g(S);
        continue;
      }
      if (ye > Math.max(f.w, f.h) * 0.5) continue;
      const ce = Math.max(0.5, Math.min(H, J)), Ne = Math.max(0.35, Math.min(ce * 0.4, 2.25)), Ye = Math.max(1, Math.ceil(ye / Ne));
      for (let qe = 0; qe <= Ye; qe += 1) {
        const lt = qe / Ye;
        g({
          x: pr(M, F, lt),
          y: pr(C, X, lt),
          radiusPx: pr(H, J, lt)
        });
      }
    }
    g(s[s.length - 1]), i.restore();
  }
  function f_(i, s, l, f) {
    u_(i, s, l, f, { preview: !1 });
  }
  function d_(i, s, l, f, p) {
    var w, S, I, M;
    if (!i || !Array.isArray(s) || s.length < 3) return;
    const m = "u", g = "v";
    if (i.save(), String((l == null ? void 0 : l.layerKind) || "") === "mask")
      i.fillStyle = "rgba(255,255,255,1)";
    else if (String((l == null ? void 0 : l.toolKind) || "") === "eraser")
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
    else {
      const C = (l == null ? void 0 : l.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      i.fillStyle = `rgba(${Math.round(Number(C.r || 0) * 255)}, ${Math.round(Number(C.g || 0) * 255)}, ${Math.round(Number(C.b || 0) * 255)}, ${Number(C.a ?? 1)})`;
    }
    i.beginPath(), i.moveTo(Number(((w = s[0]) == null ? void 0 : w[m]) || 0) * f.w, Number(((S = s[0]) == null ? void 0 : S[g]) || 0) * f.h);
    for (let C = 1; C < s.length; C += 1)
      i.lineTo(Number(((I = s[C]) == null ? void 0 : I[m]) || 0) * f.w, Number(((M = s[C]) == null ? void 0 : M[g]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function mh(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function p_(i, s) {
    const l = mh(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: s_(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function gh(i, s, l = null) {
    var w, S, I, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = l || { w: Number(((w = i.canvas) == null ? void 0 : w.width) || 0), h: Number(((S = i.canvas) == null ? void 0 : S.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((I = s == null ? void 0 : s.geometry) == null ? void 0 : I.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return d_(i.ctx, mh(p), p, f), !0;
    const g = p_(p, f);
    return g.length ? (f_(i.ctx, g, p, f), !0) : !1;
  }
  function h_(i, s, l, f = 8) {
    const p = new Uint8Array(s * l), m = [], g = new Int32Array(s * l), w = new Int32Array(s * l);
    for (let S = 0; S < l; S += 1)
      for (let I = 0; I < s; I += 1) {
        const M = S * s + I;
        if (p[M] || i[M] <= f) continue;
        let C = 0, F = 0;
        g[F] = I, w[F] = S, F += 1, p[M] = 1;
        const X = [];
        let H = I, J = S, ie = I, fe = S;
        for (; C < F; ) {
          const ye = g[C], ce = w[C];
          C += 1, X.push({ x: ye, y: ce }), ye < H && (H = ye), ce < J && (J = ce), ye > ie && (ie = ye), ce > fe && (fe = ce);
          const Ne = [
            [(ye - 1 + s) % s, ce],
            [(ye + 1) % s, ce],
            [ye, ce - 1],
            [ye, ce + 1]
          ];
          for (const [Ye, qe] of Ne) {
            if (qe < 0 || qe >= l) continue;
            const lt = qe * s + Ye;
            p[lt] || i[lt] <= f || (p[lt] = 1, g[F] = Ye, w[F] = qe, F += 1);
          }
        }
        m.push({ pixels: X, minX: H, minY: J, maxX: ie, maxY: fe });
      }
    return m;
  }
  function m_(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((S) => Number((S == null ? void 0 : S.x) || 0)).filter((S) => Number.isFinite(S)))].sort((S, I) => S - I);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let f = -1, p = 0;
    for (let S = 0; S < l.length; S += 1) {
      const I = l[S], C = (S === l.length - 1 ? l[0] + s : l[S + 1]) - I - 1;
      C > f && (f = C, p = S);
    }
    const m = (l[(p + 1) % l.length] + s) % s;
    let g = 1 / 0, w = -1 / 0;
    for (const S of l) {
      const I = (S - m + s) % s;
      g = Math.min(g, I), w = Math.max(w, I);
    }
    return {
      startX: m,
      widthPx: Math.max(1, w - g + 1)
    };
  }
  function g_(i, s, l = {}) {
    var I;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (I = i == null ? void 0 : i.getContext) == null ? void 0 : I.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const g = m.getImageData(0, 0, f, p), w = new Uint8Array(f * p);
    for (let M = 0; M < w.length; M += 1) w[M] = g.data[M * 4 + 3];
    return h_(w, f, p, 8).map((M, C) => {
      const F = m_(M, f);
      if (!F) return null;
      const X = Number(F.widthPx || 0), H = M.maxY - M.minY + 1, J = Number(F.startX || 0), ie = document.createElement("canvas");
      ie.width = X, ie.height = H;
      const fe = ie.getContext("2d");
      if (!fe) return null;
      const ye = fe.createImageData(X, H);
      return M.pixels.forEach(({ x: ce, y: Ne }) => {
        const Ye = (Ne * f + ce) * 4, qe = (Number(ce || 0) - J + f) % f, lt = ((Ne - M.minY) * X + qe) * 4;
        ye.data[lt + 0] = g.data[Ye + 0], ye.data[lt + 1] = g.data[Ye + 1], ye.data[lt + 2] = g.data[Ye + 2], ye.data[lt + 3] = g.data[Ye + 3];
      }), fe.putImageData(ye, 0, 0), {
        id: ea("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + C * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: M.minY / p,
          u1: X / f,
          v1: (M.maxY + 1) / p
        },
        rasterDataUrl: ie.toDataURL("image/png"),
        transform: {
          du: J / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Wa(i, s) {
    if (!i || !s) return null;
    const l = il(i), f = Nf(s, l.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = Nf(s, l.right) / f, m = Nf(s, l.up) / f;
    return {
      x: (p / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function y_(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const l = Fi();
      return i.map((f) => ({
        x: l.x + Number(f.u || 0) * l.w,
        y: l.y + Number(f.v || 0) * l.h
      }));
    }
    const s = i.map((l) => $a(Ho(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function yh(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const f = Fi();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, g = s == null ? m : Number(s || 0) + sr(m, s);
        return {
          x: f.x + g * f.w,
          y: f.y + Number(p.v || 0) * f.h
        };
      });
    }
    const l = i.map((f) => $a(Ho(f))).filter(Boolean);
    return l.every((f) => Number(f.z || 0) > 0) ? l.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function b_(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l], p = i[(l + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function v_(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ho(p), g = Wa(s, m);
      if (!g) return [];
      f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return b_(f, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? f : [];
  }
  function __(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ho(p), g = Wa(s, m);
      g && f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return f;
  }
  function w_() {
    const i = ze(), s = dl(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: p } = Ig(i, s, { width: O.width, height: O.height }), m = x_(l);
    return $.save(), $.fillStyle = "#0a0a0a", $.fillRect(0, 0, O.width, O.height), sh($, f, p) || ($.fillStyle = "rgba(255, 255, 255, 0.03)", $.fillRect(f.x, f.y, f.w, f.h)), $.restore(), $.save(), $.fillStyle = "rgba(0, 0, 0, 0.58)", $.beginPath(), $.rect(0, 0, O.width, O.height), $.roundRect(l.x, l.y, l.w, l.h, m), $.fill("evenodd"), $.restore(), $.save(), $.strokeStyle = m0, $.globalAlpha = 0.62, $.lineWidth = 2, $.beginPath(), $.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), $.stroke(), $.restore(), !0;
  }
  function x_(i) {
    const s = Math.max(1e-6, Number(ee.frameCanvasScale || 1));
    return Math.min(Io * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function ai() {
    var s;
    const i = h.mode === "frame" ? ze() : null;
    A.frameRollKnob.visible = !!i && !r && i.locked !== !0, A.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), A.frameRollKnob.displayValue = Qo(A.frameRollKnob.rollDeg), A.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", A.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function S_() {
    var S, I;
    if (((S = h.interaction) == null ? void 0 : S.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (I = i == null ? void 0 : i.geometry) == null ? void 0 : I.points;
    let l;
    if (h.mode === "frame") {
      const M = ze(), C = hn(M);
      l = v_(s, M, C);
    } else
      l = y_(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), g = Math.round(Number(p.g || 0) * 255), w = Math.round(Number(p.b || 0) * 255);
    $.save(), $.beginPath(), $.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let M = 1; M < l.length; M++) $.lineTo(Number(l[M].x || 0), Number(l[M].y || 0));
    $.closePath(), f ? ($.lineWidth = 2, $.setLineDash([6, 6]), $.lineDashOffset = 0, $.strokeStyle = "rgba(0,0,0,0.96)", $.stroke(), $.lineDashOffset = -6, $.strokeStyle = "rgba(255,255,255,0.96)", $.stroke(), $.setLineDash([]), $.lineDashOffset = 0) : ($.lineWidth = 1.5, $.setLineDash([6, 4]), $.strokeStyle = `rgba(${m},${g},${w},1)`, $.stroke(), $.setLineDash([])), $.restore();
  }
  function k_() {
    const i = h.frameRollOverlayVisual, s = Z(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = hn(i.shot);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * zr, m = Math.hypot(l.w, l.h) * 0.55, g = Math.cos(p) * m, w = Math.sin(p) * m;
    $.save(), $.globalAlpha *= s, $.beginPath(), $.rect(l.x, l.y, l.w, l.h), $.clip(), $.translate(f.x, f.y), $.rotate(p);
    const S = Math.max(12, Math.min(l.w, l.h) / 6);
    $.beginPath();
    for (let I = -m; I <= m; I += S)
      $.moveTo(I, -m), $.lineTo(I, m);
    for (let I = -m; I <= m; I += S)
      $.moveTo(-m, I), $.lineTo(m, I);
    $.lineWidth = 1, $.strokeStyle = "rgba(255, 255, 255, 0.22)", $.stroke(), $.setTransform(1, 0, 0, 1, 0, 0), $.beginPath(), $.moveTo(f.x - g, f.y - w), $.lineTo(f.x + g, f.y + w), $.lineWidth = 1.5, $.setLineDash([8, 6]), $.strokeStyle = "rgba(255, 255, 255, 0.92)", $.shadowColor = "rgba(0, 0, 0, 0.8)", $.shadowBlur = 3, $.stroke(), $.setLineDash([]), $.restore();
  }
  function M_() {
    return !V || !ze() || W && cr() || R && !ur() ? 0 : dE;
  }
  function N_() {
    const i = Z(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || !V || h.mode !== "pano") return;
    const s = ze(), l = s ? tn(s) : null, f = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    l != null && l.visible && f && (h.cutoutPanoDimCorners = f), s && (l != null && l.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: Ip(s),
      locked: _n(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if ($.save(), $.fillStyle = `rgba(0, 0, 0, ${i})`, $.beginPath(), $.rect(0, 0, O.width, O.height), m.length >= 4) {
      $.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) $.lineTo(m[g].x, m[g].y);
      $.closePath();
    }
    $.fill("evenodd"), $.restore();
  }
  function bh() {
    rt = null, h.mode === "frame" ? (ee.frameSafeRect = cw(), w_()) : h.mode === "unwrap" ? zv(!1) : jv(!1), N_(), V && Qv(), Jv(), ai(), S_(), k_(), A.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && Ke(), ee.hasPresentedFrame || (ee.hasPresentedFrame = !0, Q.style.opacity = "1"), V && A.cameraPreview && (A.cameraPreview.settled = ee.pendingStableLayoutFrames <= 0 && ee.hasPresentedFrame && h.mode !== "frame");
    const i = Sv();
    A.stageStatus = i.status, A.stageStatusDetail = i.detail, i.status === Ar ? (te == null || te.removeAttribute("data-stage-ready"), te == null || te.setAttribute("data-stage-loading-kind", i.detail)) : (te == null || te.setAttribute("data-stage-ready", ""), te == null || te.removeAttribute("data-stage-loading-kind"));
  }
  function P_(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function A_() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = V1();
  }
  function ae(i = {}) {
    var w, S, I, M, C, F, X, H, J;
    const s = !!i.localOnly, l = i.externalSync === !0, f = String(i.cause || ""), p = String(((w = h.interaction) == null ? void 0 : w.kind) || "");
    (!s || p === "view" || p === "pan_frame" || P_() || !!h.viewTransition || f === "mode" || f === "frame_view" || f === "cutout_frame") && (ee.backgroundDirty = !0), s && Np() && (h.livePaintInteractionRevision += 1, ee.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (fu(), ii()), A_(), l && ((I = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || I.call(S), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), l && !s && ((F = (C = e.graph) == null ? void 0 : C.setDirtyCanvas) == null || F.call(C, !0, !0), (J = (H = (X = Ir) == null ? void 0 : X.canvas) == null ? void 0 : H.setDirty) == null || J.call(H, !0, !0)), ee.dirty = !0;
  }
  function vh() {
    const i = O.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return O.width !== s || O.height !== l || Q.width !== s || Q.height !== l ? (O.width = s, O.height = l, Q.width = s, Q.height = l, ee.backgroundDirty = !0, ee.dirty = !0, V && (ee.pendingStableLayoutFrames = Math.max(Number(ee.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function C_(i = performance.now()) {
    var m;
    fr(), ee.lastTickTs = i;
    const s = h.mode === "frame" && ((m = h.interaction) == null ? void 0 : m.kind) === "roll_frame" ? h.interaction : null;
    s != null && s.shot && (h.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = l, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const g = Z(
        (i - Number(h.frameRollOverlayStartTs || i)) / pE,
        0,
        1
      );
      h.frameRollOverlayAlpha = pr(
        Number(h.frameRollOverlayFrom || 0),
        l,
        Mf(g)
      ), g >= 1 && (h.frameRollOverlayAlpha = l, l === 0 && (h.frameRollOverlayVisual = null)), ee.dirty = !0;
    }
    const f = M_();
    if (Math.abs(f - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = f, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const g = Z(
        (i - Number(h.cutoutPanoDimStartTs || i)) / y0,
        0,
        1
      );
      h.cutoutPanoDimAlpha = pr(
        Number(h.cutoutPanoDimFrom || 0),
        f,
        Mf(g)
      ), g >= 1 && (h.cutoutPanoDimAlpha = f), g >= 1 && f === 0 && (h.cutoutPanoDimCorners = null), ee.dirty = !0;
    }
    const p = V && ze() ? 1 : 0;
    if (Math.abs(p - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = p, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const g = Z(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / y0,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = pr(
        Number(h.cutoutPanoFrameFrom || 0),
        p,
        Mf(g)
      ), g >= 1 && (h.cutoutPanoFrameAlpha = p, p === 0 && (h.cutoutPanoFrameVisual = null)), ee.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const g = Math.max(1, Number(h.outputPreviewAnimDurationMs)), w = Z((i - Number(h.outputPreviewAnimStartTs || 0)) / g, 0, 1), I = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? xE(w) : NE(w);
      h.outputPreviewAnim = pr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, I), ee.dirty = !0, w >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if (h.viewTransition) {
      const { view: g, done: w } = LA(h.viewTransition, i);
      if (h.viewPosition = g.position, h.viewYaw = g.yaw_deg, h.viewPitch = g.pitch_deg, h.viewFov = g.hFOV_deg, h.viewDistance = g.distance, w) {
        const { end: S } = h.viewTransition;
        h.viewTransition = null, S && Sp(S), Tr();
      }
      ee.backgroundDirty = !0, ee.dirty = !0;
    }
    if (h.viewInertia.vx = Number(cn.state.inertia.vx || 0), h.viewInertia.vy = Number(cn.state.inertia.vy || 0), h.viewInertia.active = !!cn.state.inertia.active, cn.stepInertia(i) && (h.viewInertia.vx = Number(cn.state.inertia.vx || 0), h.viewInertia.vy = Number(cn.state.inertia.vy || 0), h.viewInertia.active = !!cn.state.inertia.active, ee.backgroundDirty = !0, ee.dirty = !0), ee.pendingStableLayoutFrames > 0 && (ee.pendingStableLayoutFrames -= 1, ee.dirty = !0), ee.dirty) {
      if (ee.pendingStableLayoutFrames > 0)
        return;
      ee.dirty = !1, bh();
    }
  }
  function _h(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      ee.tickErrorSignature !== l && (ee.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), A.stageStatus = mr, A.stageStatusDetail = "frame", te == null || te.setAttribute("data-stage-ready", ""), te == null || te.removeAttribute("data-stage-loading-kind");
    }
  }
  function wh(i = performance.now()) {
    ee.running && (_h(() => C_(i)), ee.running && (ee.rafId = requestAnimationFrame(wh)));
  }
  function I_() {
    !ee.running || !vh() || _h(() => {
      ee.dirty = !1, bh();
    });
  }
  const xh = new ResizeObserver(I_);
  xh.observe(O);
  function O_() {
    ee.running = !1, ee.rafId && cancelAnimationFrame(ee.rafId), ee.rafId = 0, xh.disconnect();
  }
  function Qe() {
    r || (fr(), bg(_), !(k && _.stickers.some(qc)) && (h.historyController.commitActionGroup(JSON.stringify(mg(_))), Du()));
  }
  function Pu(i) {
    var p, m;
    if (r) return;
    wn();
    const s = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Du(), !s) return;
    const l = OM(_, s), f = (p = _.timeline) == null ? void 0 : p.fps;
    Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, l.state), fr(!1), k && _.timeline.fps !== f && an.seek(Math.round(h.frame * _.timeline.fps / f)), h.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, R && !h.selectedId && _.active.selected_shot_id && (h.selectedId = ((m = ze()) == null ? void 0 : m.id) ?? null), h.selectedIds = h.selectedId ? [h.selectedId] : [], h.selectedId && Vo(), ee.backgroundDirty = !0, l.paintingChanged ? Mr() : $t(), Kn(), Ve(), Vn(), ae({ cause: "cutout_frame" });
  }
  function Sh() {
    var l, f;
    const i = Array.isArray((l = h.historyController) == null ? void 0 : l.entries) ? h.historyController.entries : [], s = Number((f = h.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Kn() {
    I1();
    const i = $A({
      editor: h,
      swatches: Jl,
      paintColorPopOpen: Oe ? !Oe.hidden : !1,
      colorToCss: jr,
      colorsApproximatelyEqual: Zl,
      rgb01ToHsv: Cf,
      hsv01ToRgb: Af,
      getBrushPresetIdForTool: Li,
      isActiveLassoTool: B1
    });
    if (Object.assign(A.paintDock, i), Z1(), !i.visible) {
      Oe && (Oe.hidden = !0);
      return;
    }
    ft && (clearTimeout(ft), ft = 0), pe && (!i.colorEnabled && Oe && !Oe.hidden && (ft = window.setTimeout(() => {
      Oe.hidden = !0, A.paintDock.colorPopOpen = !1, ft = 0;
    }, 170)), Oe && (Oe.style.setProperty("--picker-hue-color", i.pickerHueColor), Oe.style.setProperty("--picker-sat", i.pickerSat), Oe.style.setProperty("--picker-val", i.pickerVal), Oe.style.setProperty("--picker-hue", i.pickerHue)), $e && ($e.style.left = i.pickerSvLeft, $e.style.top = i.pickerSvTop), at && (at.style.left = i.pickerHueLeft));
  }
  function Ko() {
    const i = sn(V && h.mode === "frame" ? ze() : It());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: hi(i)
    }, Ve());
  }
  function Ve() {
    var be, le, me, Le;
    if (fr(), si(), o) return;
    _.ui_settings = _.ui_settings || {};
    const i = VA(_.ui_settings);
    if (a) {
      A.sidePanel = zA({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: Xn
      });
      return;
    }
    const s = It(), l = V && h.mode === "frame" ? ze() : null, f = l || s, p = l ? [l] : lr(), m = l ? "shot" : Zs();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const xe = sn(f);
      h.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: hi(xe)
      }, ar(f) && (h.panelLastValues.opacity = xo(f, h.frame).opacity * 100);
    }
    const g = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = m === "stroke" ? null : f, S = La(), I = W && (m === "shot" || m === "frame") && Ra(), M = S ? HM(S, h.frame) : I ? { ...w, ...$M(_.camera, h.frame), vFOV_deg: w.vFOV_deg } : ar(w) ? h.panelLastValues : w || g, C = S ? tl(S) : !!w && !_n(w);
    h.panelWasEnabled = C, fu();
    let F = null;
    if (l) {
      const xe = iu({ item: l, kind: "shot", label: "Frame" });
      F = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: xe.label,
        currentIcon: xe.icon || null,
        items: [{
          id: String(l.id || ""),
          label: xe.label,
          icon: xe.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const xe = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (t === "stickers") {
        const Ue = ze();
        Ue && xe.push({ id: Ue.id, label: "Camera", icon: Ep("frame"), item: Ue, kind: "frame" }), Fr().forEach((je, At) => {
          var Vr, es;
          if (!je) return;
          const Nn = P ? Jf(je) : Xt(je) ? String(je.id || vf) : String(((es = (Vr = _.assets) == null ? void 0 : Vr[je.asset_id]) == null ? void 0 : es.name) || je.asset_id || je.id), zt = `${At + 1}. ${Nn}${Xt(je) && Ro(je) ? " (hidden)" : ""}`, Wt = iu({ item: je, label: zt, kind: "image" });
          xe.push({ id: je.id, label: Wt.label, icon: Wt.icon, item: je, kind: "image" });
        });
      } else
        Op().forEach((Ue) => {
          if (!(Ue != null && Ue.item)) return;
          const je = iu(Ue);
          xe.push({ id: Ue.item.id, label: je.label, icon: je.icon, item: Ue.item, kind: Ue.kind });
        });
      const He = (w == null ? void 0 : w.id) || "", Be = S ? { label: Jf(S), icon: ke.globe } : xe.find((Ue) => Ue.id === He) || xe[0];
      F = {
        label: "Selection",
        open: !1,
        disabled: xe.length <= 1,
        currentLabel: Be.label,
        currentIcon: Be.icon || null,
        items: xe.map((Ue) => ({
          id: Ue.id,
          label: Ue.label,
          icon: Ue.icon || null,
          active: Ue.id === He
        }))
      };
    }
    const X = [], H = (xe, He, Be, Ue, je) => {
      const At = Z(Number(M[xe] || 0), Be, Ue);
      X.push({
        key: xe,
        label: He,
        min: Be,
        max: Ue,
        step: je,
        value: At,
        displayValue: Qo(At),
        fillPct: Z((At - Be) / Math.max(1e-6, Ue - Be) * 100, 0, 100),
        enabled: C && !r
      });
    }, J = [];
    if (S) {
      for (const [xe, He] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Be = bf(M[xe]);
        H(xe, He, -Be, Be, 0.01);
      }
      H("yaw_deg", "Yaw", -180, 180, 0.1), H("pitch_deg", "Pitch", -90, 90, 0.1), H("roll_deg", "Roll", -180, 180, 0.1), H("scale", "Scale", h0, bf(M.scale), 0.01), H("opacity", "Opacity", 0, 100, 1);
    } else if (p.length > 1)
      J.push(`Selected objects: ${p.length}`), J.push("Multi-selection supports z-order and delete.");
    else {
      const xe = m === "shot" || m === "frame";
      if (H("yaw_deg", "Yaw", -180, 180, 0.1), H("pitch_deg", "Pitch", -90, 90, 0.1), H("hFOV_deg", "H FOV", 1, 179, 0.1), H("vFOV_deg", "V FOV", 1, 179, 0.1), xe && X.forEach((He) => {
        He.enabled = He.enabled && GA(He.key, { erp: qi() });
      }), m === "image" || t === "stickers" && !xe ? H("rot_deg", "Rotation", -180, 180, 0.1) : H("roll_deg", "Roll", -180, 180, 0.1), P && !xe && H("opacity", "Opacity", 0, 100, 1), I)
        for (const [He, Be] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ue = bf(M[He]);
          H(He, Be, -Ue, Ue, 0.01);
        }
    }
    const ie = Array.isArray((le = (be = _ == null ? void 0 : _.painting) == null ? void 0 : be.paint) == null ? void 0 : le.strokes) ? _.painting.paint.strokes.length : 0, fe = Array.isArray((Le = (me = _ == null ? void 0 : _.painting) == null ? void 0 : me.mask) == null ? void 0 : Le.strokes) ? _.painting.mask.strokes.length : 0, ye = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((xe) => String((xe == null ? void 0 : xe.name) || "")) : [], ce = wE(
      e,
      ye.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), Ne = !!String((ce == null ? void 0 : ce.src) || "").trim() || ri("pano_input_images").length > 0, Ye = Fr().length > 0 || ie > 0, qe = fe > 0, lt = [
      { key: "mask", label: "Mask", icon: ke.circle_dashed_tool, visible: !!h.showMask, enabled: qe },
      { key: "objects", label: "Paint / Images", icon: ke.image, visible: !!h.showObjects, enabled: Ye },
      { key: "panorama", label: "Panorama", icon: ke.globe, visible: !!h.showPanorama, enabled: Ne }
    ].map((xe) => ({
      ...xe,
      ariaLabel: `Toggle ${xe.label.toLowerCase()}`,
      tip: xe.visible ? "Hide" : "Show"
    }));
    A.sidePanel = WA({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: F,
      enabled: C,
      selectedKind: S ? "world" : m,
      selectedItems: p,
      params: X,
      notes: J,
      visibilityRows: lt,
      uiSettings: i,
      normalizeCoverageValue: Xn
    });
  }
  function si() {
    if (!k || r) return;
    const i = cl(), s = We.selection, l = s && li(s.owner);
    if (s) {
      const p = l ? Ba(s) : [];
      s.frames = s.frames.filter((m) => p.some((g) => l[g].keyframes.some((w) => w.frame === m))), s.frames.length || (We.selection = null);
    }
    const f = _.timeline.fps;
    A.timeline = qA(_, {
      frame: h.frame,
      span: i,
      selection: We.selection,
      selectedId: h.worldSelectedId || h.selectedId,
      expanded: We.expanded ?? kh(),
      openRows: We.openRows,
      audio: F_() && A.videoTransport.hasAudio ? { muted: Ae.muted } : null,
      playing: an.playing,
      label: `${h.frame}f · ${(h.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: xf(e) !== null || ON(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: Dr(),
      stickers: !E,
      scene: P && !!od(e).scene,
      sceneLocked: !!T
    }), A.easing = We.selection ? JA(l, Ba(We.selection), We.selection.frames, Ua(We.selection.owner)) : null;
  }
  function kh() {
    return kM(_, { cameraOnly: E, camera: R });
  }
  function cl(i = null) {
    if (T != null && T.frames) return T.frames;
    const s = _.timeline.fps, l = _.stickers.find(Xt), f = l ? $p() : null, p = Math.max(
      A.videoTransport.ready ? Math.round(Number(A.videoTransport.duration || 0) * s) : 0,
      f ? Eb(l.clip, s, f.meta) : 0
    );
    return nb(_, { minimum: Math.round(s * 5), frames: p, openClip: i, camera: E && !T || R });
  }
  function li(i) {
    return i === "camera" ? Dr() ? _.camera : null : i === "scene" ? P ? _.scene : null : _.stickers.find((s) => s.id === i) || null;
  }
  function Ba(i) {
    return i.lane ? [i.lane] : Ao(li(i.owner));
  }
  function Ua(i) {
    if (i === "camera") return 0;
    const { clip: s } = li(i);
    return s.start - s.in;
  }
  function ul(i) {
    const s = li(i);
    return !!s && s.locked !== !0;
  }
  function Mh() {
    const i = It();
    ar(i) && !zi(i.clip, h.frame) && Rn(null);
  }
  function E_(i) {
    const s = Math.max(0, Math.round(i));
    s !== h.frame && (fr(), h.frame = s, fr(), Mh(), $t(), Ve(), Ke(), ae());
  }
  function F_() {
    return Ae instanceof HTMLVideoElement && !!Ae.getAttribute("src");
  }
  function T_(i) {
    Ii(), an.seek(i);
  }
  function wn() {
    k && an.stop();
  }
  function Au() {
    Ii(), an.toggle();
  }
  function Wo() {
    fr(), $t(), Ve(), Ke(), ae();
  }
  function Qi() {
    Qe(), it(), Wo();
  }
  function D_() {
    const { selection: i } = We;
    ul(i.owner) && (wn(), gM(li(i.owner), Ba(i), i.frames, h.frame - Ua(i.owner)), We.selection = null, Qi());
  }
  function Nh(i) {
    wn();
    const s = Math.round(h.frame * i / _.timeline.fps);
    FM(_, i), We.selection = null, an.seek(s), Qi();
  }
  function L_() {
    const i = xf(e);
    i !== null && i !== _.timeline.fps && Nh(i);
  }
  function R_(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        i.phase === "start" && Ii(), an.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Au();
        return;
      }
      if (i.type === "mute") {
        Dp(), si();
        return;
      }
      if (i.type === "toggle-expanded") {
        We.expanded = !(We.expanded ?? kh()), We.selection = null, si();
        return;
      }
      if (i.type === "toggle-row") {
        We.openRows.has(i.id) ? We.openRows.delete(i.id) : We.openRows.add(i.id), si();
        return;
      }
      if (i.type === "select-row") {
        const s = _.stickers.find((l) => l.id === i.id);
        s && !zi(s.clip, h.frame) && T_(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? uu(s.id) : i.id === "camera" ? Rn(ze()) : Rn(Fr().find((l) => l.id === i.id) || null), Tr(), We.selection = null, Ve(), Ke(), ae();
        return;
      }
      if (i.type === "select-keys") {
        const s = Ua(i.owner), l = i.frames.map((m) => m - s), f = We.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && p) {
          const m = new Set(f.frames);
          for (const g of l)
            m.has(g) ? m.delete(g) : m.add(g);
          f.frames = [...m].sort((g, w) => g - w);
        } else
          We.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        si();
        return;
      }
      if (i.type === "move-keys") {
        const s = We.selection;
        if (!s || !ul(s.owner)) return;
        const l = li(s.owner), f = Ba(s);
        if (i.phase === "start") {
          wn(), We.drag = { keyframes: f.map((g) => structuredClone(l[g].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = We;
        if (!(p != null && p.keyframes)) return;
        f.forEach((g, w) => {
          l[g].keyframes = structuredClone(p.keyframes[w]);
        });
        const m = yM(l, f, p.frames, i.delta, -Ua(s.owner));
        if (s.frames = p.frames.map((g) => g + m), i.phase !== "end") {
          Wo();
          return;
        }
        We.drag = null, m ? Qi() : Wo();
        return;
      }
      if (i.type === "clip") {
        const s = i.id === "scene" ? li("scene") : _.stickers.find((p) => p.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          wn(), We.drag = { clip: { ...s.clip }, span: cl(s.clip) };
          return;
        }
        const { drag: l } = We;
        if (!(l != null && l.clip)) return;
        const f = l.clip;
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? _M(s.clip, i.delta) : i.delta && i.mode === "start" ? wM(s.clip, f.start + i.delta) : i.delta && xM(s.clip, (f.duration === null ? l.span : f.start + f.duration) + i.delta, l.span), i.phase !== "end") {
          Wo();
          return;
        }
        We.drag = null, Mh(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Qi() : Wo();
        return;
      }
      if (i.type === "key-row") {
        if (i.owner === "scene" || !ul(i.owner)) return;
        wn(), pM(li(i.owner), h.frame - Ua(i.owner)), Qi();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === _.timeline.fps || A.timeline.fpsLocked) {
          si();
          return;
        }
        Nh(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === _.timeline.length) {
          si();
          return;
        }
        wn(), _.timeline.length = s, Qi();
        return;
      }
      if (i.type === "easing") {
        const s = We.selection;
        if (!s || !ul(s.owner)) return;
        wn(), vM(li(s.owner), Ba(s), s.frames, i.easing), i.commit ? Qi() : Wo();
      }
    }
  }
  async function Ph(i) {
    if (r || E || t !== "stickers" && t !== "cutout" || !Cr(i)) return;
    if (P) {
      wn(), await Ah(i);
      return;
    }
    const s = lo("asset"), l = hs(e, `add:${s}`, async () => {
      try {
        const { image: f } = await ms(i);
        en.set(s, f);
        const p = lo("st");
        _.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Oi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: Qs()
        }), Rn(_.stickers[_.stickers.length - 1]), Ya(), Ve(), Ke(), ae();
        const m = await fo(i, {
          fetchApi: (S, I) => Jt.fetchApi(S, I)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === s).length) return;
        _.assets[s] = m, jo(), Qe(), it(), Ve(), Ke(), ae();
      } catch (f) {
        delete _.assets[s], en.delete(s);
        const p = Array.isArray(_.stickers) ? _.stickers : [], m = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (_.stickers = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(h.selectedId || "")) && Rn(null), Ve(), Ke(), ae(), it()), f;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function V_() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = U == null ? void 0 : U.openImagePicker) == null || i.call(U, "add");
  }
  function $_() {
    var i;
    r || !P || (i = U == null ? void 0 : U.openImagePicker) == null || i.call(U, "add-world");
  }
  async function z_(i) {
    r || !P || !Cr(i) || (wn(), await Ah(i, "world"));
  }
  function j_() {
    const i = { x: O.width / 2, y: O.height / 2 }, s = Ji() ? hu(i) : null;
    return pN(bn(), s, Lr());
  }
  async function Ah(i, s = "sky") {
    const l = lo("st"), f = hs(e, `add:${l}`, async () => {
      const { image: p } = await ms(i), m = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Oi(30, Number(p.naturalWidth || p.width || 1), Number(p.naturalHeight || p.height || 1)),
        rot_deg: 0
      }, g = { kind: "file", filename: "" }, w = s === "world" ? BM(l, g, j_()) : ip(l, g, m, Qs());
      en.set(za(w), p), _.stickers.push(w), s === "world" ? uu(l) : Rn(w), Ya(), Ve(), Ke(), ae();
      try {
        const S = await fo(i, {
          fetchApi: (M, C) => Jt.fetchApi(M, C)
        }), I = _.stickers.find((M) => M.id === l);
        if (!I) return;
        I.source = Hl(S), en.set(za(I), p), Qe(), it();
      } catch (S) {
        throw _.stickers = _.stickers.filter((I) => I.id !== l), h.selectedId === l && Rn(null), h.worldSelectedId === l && Vo(), Qe(), it(), S;
      } finally {
        Ve(), Ke(), ae();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function H_(i, s) {
    const l = hs(e, `replace:${s}:${lo("asset")}`, async () => {
      const { image: f } = await ms(i), p = await fo(i, {
        fetchApi: (g, w) => Jt.fetchApi(g, w)
      }), m = _.stickers.find((g) => g.id === s);
      if (m) {
        m.source = Hl(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((w) => w.value)])
          g.vFOV_deg = Oi(g.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        en.set(za(m), f), $t(), Qe(), it(), Ve(), Ke(), ae();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function G_(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = It();
    if (!s || !St(s) || Xt(s) || !Cr(i)) return;
    if (P) {
      await H_(i, s.id);
      return;
    }
    const l = String(s.id || ""), f = lo("asset"), p = hs(e, `replace:${l}:${f}`, async () => {
      var M;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === l) || null;
      if (!m || !St(m) || Xt(m)) return;
      const g = String(m.asset_id || ""), w = g ? Pn(((M = _.assets) == null ? void 0 : M[g]) || null) : null, S = Number(m.vFOV_deg || 0), I = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: C } = await ms(i);
        en.set(f, C), m.asset_id = f, m.vFOV_deg = Oi(
          Number(m.hFOV_deg || 30),
          Number(C.naturalWidth || C.width || 1),
          Number(C.naturalHeight || C.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, $t(), Ve(), Ke(), ae();
        const F = await fo(i, {
          fetchApi: (H, J) => Jt.fetchApi(H, J)
        }), X = (Array.isArray(_.stickers) ? _.stickers : []).find((H) => String((H == null ? void 0 : H.id) || "") === l) || null;
        if (!X || String(X.asset_id || "") !== f) return;
        _.assets[f] = F, jo(), Qe(), it(), Ve(), Ke(), ae();
      } catch (C) {
        delete _.assets[f], en.delete(f);
        const F = (Array.isArray(_.stickers) ? _.stickers : []).find((X) => String((X == null ? void 0 : X.id) || "") === l) || null;
        throw F && String(F.asset_id || "") === f && (g && w && (_.assets[g] = w), F.asset_id = g, F.vFOV_deg = S, F.crop = I ? { ...I } : null), $t(), it(), Ve(), Ke(), ae(), C;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function K_() {
    var s;
    if (r) return;
    const i = It();
    !i || !St(i) || Xt(i) || (s = U == null ? void 0 : U.openImagePicker) == null || s.call(U, "replace");
  }
  async function W_() {
    if (r || t !== "stickers") return;
    if (P) {
      await B_();
      return;
    }
    const i = _.assets && typeof _.assets == "object" ? _.assets : {}, s = Object.entries(i).filter(([, f]) => {
      const p = String((f == null ? void 0 : f.type) || "").toLowerCase(), m = String((f == null ? void 0 : f.value) || "");
      return p === "dataurl" && m.startsWith("data:image");
    });
    if (!s.length) return;
    let l = !1;
    for (const [f, p] of s)
      try {
        const m = String((p == null ? void 0 : p.value) || "");
        if (!m) continue;
        const g = await fetch(m).then((C) => C.blob()), w = String(g.type || "image/png").split("/")[1] || "png", S = String((p == null ? void 0 : p.name) || `${f}.${w}`), I = new File([g], S, { type: g.type || "image/png" }), M = await fo(I, {
          fetchApi: (C, F) => Jt.fetchApi(C, F)
        });
        _.assets[f] = {
          ...M,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (it(), ae());
  }
  async function B_() {
    let i = !1;
    for (const s of _.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const f = await fetch(l).then((w) => w.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), g = await fo(m, {
            fetchApi: (w, S) => Jt.fetchApi(w, S)
          });
          s.source = Hl(g), i = !0;
        } catch {
        }
    }
    i && (it(), ae());
  }
  function U_() {
    if (r || t !== "cutout") return;
    const i = ze();
    if (i) {
      Rn(i), h.mode = "pano", E && cr() ? Xi(kg(Tv(bn(), i.position), oh(), O.width, O.height)) : kp(Ht(Number(i.yaw_deg || 0)), Z(Number(i.pitch_deg || 0), -89.9, 89.9)), Ve(), Ke(), ae({ cause: "cutout_frame" });
      return;
    }
    const s = Ty({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    _.shots = [s], Rn(s), Ya(), h.mode = "pano", Qe(), it(), Ve(), Ke(), ae({ cause: "cutout_frame" });
  }
  function Y_() {
    r || !R || Dr() || (wn(), _.camera = LM(bn()), fr(), Rn(ze()), Ya(), Qe(), it(), Ve(), Ke(), ae({ cause: "cutout_frame" }));
  }
  function X_() {
    wn(), _.camera = null, Rn(null), fr(), Qe(), it(), Ve(), Ke(), ae({ cause: "cutout_frame" });
  }
  function Ch(i, s) {
    R && ln(i) && (_.camera.projection = s === va ? "erp" : "perspective", s === va) || nw(i, s);
  }
  function q_() {
    r || t !== "cutout" || (_.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, _.active.selected_shot_id = null, Qe(), it(), Ve(), Ke(), ae());
  }
  function J_() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], s = [];
    for (const l of i)
      Xt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function Ih(i, s, l = "Clear") {
    return new Promise((f) => {
      A.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: f
      };
    });
  }
  async function Z_() {
    var l, f;
    if (r || !await Ih(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = pa(null), Mr();
    const s = J_();
    if (t === "stickers")
      _.stickers = P ? _.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, P || (_.assets = {}), h.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, jo();
    else {
      const p = IM(_.shots, _.active.selected_shot_id);
      _.stickers = s, _.assets = {}, _.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, jo();
    }
    Qe(), it(), Ve(), Ke(), ae();
  }
  async function Q_(i) {
    var m, g, w, S;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", f = Bo(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((g = h.interaction) == null ? void 0 : g.layerKind) === s) || !await Ih(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((w = h.interaction) == null ? void 0 : w.kind) === "draw" && ((S = h.interaction) == null ? void 0 : S.layerKind) === s) {
        const I = Qn();
        I && h.paintEngine.cancelActiveStroke(I), h.interaction = null;
      }
      f.length = 0, _.painting.raster_objects = Gn().filter((I) => String((I == null ? void 0 : I.layerKind) || "paint") !== s), s === "paint" && (Sn().length = 0), Mr(), Qe(), it(), Ve(), Ke(), Kn(), ae();
    }
  }
  function ew() {
    if (r) return;
    const i = It();
    if (!i || !St(i) || Xt(i) || P && qc(i)) return;
    let s;
    P ? s = UM(i, lo("st"), Qs()) : (s = JSON.parse(JSON.stringify(i)), s.id = lo("st"), s.yaw_deg = Ht((s.yaw_deg || 0) + 8), s.z_index = Qs()), _.stickers.push(s), _.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], $t(), Qe(), it(), Ke(), Ve(), ae();
  }
  function tw() {
    const i = La();
    return i ? (tl(i) && (wn(), WM(_, i.id), Vo(), $t(), Qe(), it(), Ve(), Ke(), Tr(), ae()), !0) : !1;
  }
  function Oh() {
    var l, f, p, m, g;
    if (r || E) return;
    const i = lr(), s = It();
    if (!(!s && i.length === 0) && !i.some((w) => _n(w))) {
      if (wn(), i.length > 1) {
        const w = new Set(i.filter((M) => pn(M)).map((M) => String(M.actionGroupId || M.id || ""))), S = new Set(i.filter((M) => kn(M)).map((M) => yn(M.rasterObjectId || M.id || ""))), I = new Set(i.filter(St).map((M) => String(M.id || "")));
        w.size > 0 && (_.painting.paint.strokes = (Array.isArray((f = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : f.strokes) ? _.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), _.painting.groups = Sn().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), Mr()), S.size > 0 && (_.painting.raster_objects = Gn().filter((M) => !S.has(String((M == null ? void 0 : M.id) || ""))), Go()), I.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((M) => I.has(String((M == null ? void 0 : M.id) || "")) ? Xt(M) ? (Ro(M) || (M.visible = !1), !0) : !1 : !0), jo(), $t()), h.selectedId = null, h.selectedIds = [], Qe(), it(), Ve(), Ke(), ae();
        return;
      }
      if (pn(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (p = _.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== w), _.painting.groups = Sn().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== w), Mr(), h.selectedId = null, h.selectedIds = [], Qe(), it(), Ve(), Ke(), ae();
        return;
      }
      if (kn(s)) {
        const w = yn(s.rasterObjectId || s.id || "");
        _.painting.raster_objects = Gn().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== w), Go(), h.selectedId = null, h.selectedIds = [], Qe(), it(), Ve(), Ke(), ae();
        return;
      }
      if (R && ln(s)) {
        X_();
        return;
      }
      if (t === "stickers" || St(s)) {
        if (Xt(s)) {
          if (Ro(s)) return;
          s.visible = !1, $t(), Qe(), it(), Ve(), Ke(), ae();
          return;
        }
        _.stickers = _.stickers.filter((w) => w.id !== s.id), jo(), $t(), h.selectedId = ((g = Fr()[0]) == null ? void 0 : g.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = h.selectedId, Qe(), it(), Ve(), Ke(), ae();
        return;
      }
      q_();
    }
  }
  function Cu(i, s) {
    const l = ee.frameSafeRect;
    if (!i || !l || h.mode !== "frame") return !1;
    const f = _f * _o(l, i), p = Ud(Bd(l, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function nw(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const w = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(w)) {
        const [M, C] = w.split(":").map((F) => Number(F));
        if (Number.isFinite(M) && Number.isFinite(C)) return M >= C;
      }
      const S = Number(i.hFOV_deg || 64), I = Number(i.vFOV_deg || 40);
      return Math.abs(S - I) > 1e-6 ? S >= I : wo(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const g = p / m;
    if (!Cu(i, g)) {
      const w = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = w, i.hFOV_deg = zl(w, g);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function rw(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const f = js(s, l);
    if (!f) return !1;
    const p = f.ratio;
    if (!Cu(i, p)) {
      const m = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = zl(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function Eh(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Mi(i), f = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!Cu(i, p)) {
      const m = Z(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = zl(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = po(i);
  }
  function Fh() {
    To().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function iw() {
    if (r) return;
    const i = lr();
    if (!It() || i.length === 0 || i.some((w) => _n(w))) return;
    Fh();
    const l = To(), f = new Set(i.map((w) => St(w) ? `sticker:${String(w.id || "")}` : kn(w) ? `rasterObject:${yn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var I, M;
      const S = w.type === "sticker" ? `sticker:${String(((I = w.item) == null ? void 0 : I.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(S) ? p.push(w) : m.push(w);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((w, S) => {
      w.type === "sticker" && w.item && (w.item.z_index = S), w.type === "strokeGroup" && w.item && (w.item.z_index = S), w.type === "rasterObject" && w.item && (w.item.z_index = S);
    }), $t(), Qe(), it(), Ke(), ae();
  }
  function ow() {
    if (r) return;
    const i = lr();
    if (!It() || i.length === 0 || i.some((w) => _n(w))) return;
    Fh();
    const l = To(), f = new Set(i.map((w) => St(w) ? `sticker:${String(w.id || "")}` : kn(w) ? `rasterObject:${yn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var I, M;
      const S = w.type === "sticker" ? `sticker:${String(((I = w.item) == null ? void 0 : I.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(S) ? p.push(w) : m.push(w);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((w, S) => {
      w.type === "sticker" && w.item && (w.item.z_index = S), w.type === "strokeGroup" && w.item && (w.item.z_index = S), w.type === "rasterObject" && w.item && (w.item.z_index = S);
    }), $t(), Qe(), it(), Ke(), ae();
  }
  function aw() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", u && (_.output_preset = N(Number(_.output_preset || 2048))), d && (_.coverage = Xn(d.value)), b && (_.bg_color = String(b.value || _.bg_color || "#00ff00")), Vn(), e.setDirtyCanvas(!0, !0));
  }
  function Vn() {
    var s;
    if (r) return;
    fr(), bg(_), _.coverage = Xn(_.coverage), cb(e, _.active);
    const i = ub(e, _);
    y && !fb(e, i, String(y.value ?? ""), { rebased: W }) && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const Th = () => Vn();
  r || (e.__panoFlushStateBeforeQueue = Th);
  function Iu() {
    _.ui_settings = EE(_.ui_settings), r || Vn();
  }
  function it() {
    var i;
    r || (Vn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function sw() {
    r || wv() && Zp().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function lw(i = {}) {
    var f, p, m, g, w, S, I, M, C, F;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1)), l && ((I = (S = e.graph) == null ? void 0 : S.setDirtyCanvas) == null || I.call(S, !0, !0), (F = (C = (M = Ir) == null ? void 0 : M.canvas) == null ? void 0 : C.setDirty) == null || F.call(C, !0, !0));
  }
  function Ya() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", Kn(), Ve());
  }
  function Di(i) {
    const s = O.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * O.width,
      y: (i.clientY - s.top) / s.height * O.height
    };
  }
  function fl(i) {
    const s = O.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Dh() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function fr(i = !0) {
    var f, p;
    if (!W) return;
    const s = z;
    if (!_.camera) {
      z = null, (f = _.shots) != null && f.length && (_.shots = []), s && Lh(s, null);
      return;
    }
    const l = (p = _.shots) == null ? void 0 : p[0];
    i && l && z && VM(_.camera, h.frame, l, z), z = yg(_.camera, h.frame), l ? Object.assign(l, z, { position: [...z.position] }) : _.shots = [{ ...z, position: [...z.position] }], s || Lh(null, z);
  }
  function Lh(i, s) {
    var m, g;
    !s && h.mode === "frame" && Rh(i);
    const l = (s == null ? void 0 : s.position) ?? [0, 0, 0];
    if (((g = (m = h.viewTransition) == null ? void 0 : m.end) == null ? void 0 : g.mode) === "3dof") {
      Xi({ ...bn(), position: l }, h.viewTransition.end);
      return;
    }
    if (h.mode !== "pano" || h.spaceMode !== "3dof" || !Ra()) return;
    const f = (i == null ? void 0 : i.position) ?? [0, 0, 0];
    if (f.every((w, S) => w === l[S])) return;
    const p = { ...bn(), position: f };
    Va({ mode: "6dof", position: f, moved: !0 }), h.viewDistance = p.distance, Xi({ ...p, position: l }, { mode: "3dof", moved: !1 });
  }
  function Rh(i) {
    if (h.mode = "pano", !i) return;
    Ca();
    const s = bn().distance;
    h.viewYaw = Ht(i.yaw_deg), h.viewPitch = Z(i.pitch_deg, -89.9, 89.9), h.viewFov = Z(i.hFOV_deg, 35, 140), h.spaceMode === "6dof" && Va({ mode: "6dof", position: [...i.position], moved: !0 }), h.viewDistance = s, ee.backgroundDirty = !0;
  }
  function ze() {
    if (!V) return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const s = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function cw() {
    var X, H, J, ie, fe;
    if (!O) return null;
    const i = (X = O.getBoundingClientRect) == null ? void 0 : X.call(O), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? O.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? O.height / i.height : 1;
    ee.frameCanvasScale = Math.min(s, l);
    let f = 24, p = 24;
    const m = Math.max(f + 1, O.width - 24);
    let g = Math.max(p + 1, O.height - 24);
    const w = (H = ei == null ? void 0 : ei.getBoundingClientRect) == null ? void 0 : H.call(ei), S = (J = j == null ? void 0 : j.getBoundingClientRect) == null ? void 0 : J.call(j);
    let I = 24;
    w && i && w.width > 0 && w.height > 0 && (I = Math.max(I, (w.right - i.left) * s + g0)), S && i && S.width > 0 && S.height > 0 && ((ie = A.frameRail) == null ? void 0 : ie.visible) === !0 && (I = Math.max(I, (i.right - S.left) * s + g0)), f = Math.max(f, I);
    const M = Math.min(m, O.width - I);
    let C = 24;
    const F = (fe = gn == null ? void 0 : gn.getBoundingClientRect) == null ? void 0 : fe.call(gn);
    if (F && i && F.width > 0 && F.height > 0 && (C = Math.max(C, (F.bottom - i.top) * l + wf)), [re, we].forEach((ye) => {
      var Ye;
      if (!ye || !i) return;
      const ce = getComputedStyle(ye);
      if (ce.display === "none" || ce.visibility === "hidden" || Number(ce.opacity) <= 0) return;
      const Ne = (Ye = ye.getBoundingClientRect) == null ? void 0 : Ye.call(ye);
      !Ne || Ne.width <= 0 || Ne.height <= 0 || (C = Math.max(C, (i.bottom - Ne.top) * l + wf));
    }), Et && i) {
      const ye = getComputedStyle(Et);
      ye.display !== "none" && ye.visibility !== "hidden" && Number(ye.opacity) > 0 && (C = Math.max(C, (fE + wf) * l));
    }
    return p = Math.max(p, C), g = Math.max(p + 1, Math.min(g, O.height - C)), {
      x: f,
      y: p,
      w: Math.max(1, M - f),
      h: Math.max(1, g - p)
    };
  }
  function dl(i = ze()) {
    if (!i || !O) return null;
    const s = ee.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, O.width - 48),
      h: Math.max(1, O.height - 48)
    };
    return Fk(s, i, _f * _o(s, i));
  }
  function hn(i = ze()) {
    const s = dl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Ou() {
    return V && !!ze();
  }
  function Nr(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = Fi(), g = (i.x - m.x) / Math.max(1, m.w), w = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: Z(w, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = gu(i.x, i.y), { lon: f, lat: p } = wu(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Pr(i, s, l = performance.now()) {
    const f = hn(s);
    if (!f) return null;
    const p = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Mu(s, p);
    if (!m) return null;
    const { lon: g, lat: w } = wu(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - w / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function uw(i, s) {
    const l = ze();
    if (!l || l.locked === !0) return !1;
    const f = Number(s) > 0, p = Ly(l, s);
    if (!p) return !1;
    if (f) {
      const m = _f * _o(
        ee.frameSafeRect || { w: O.width, h: O.height },
        p
      ), g = Yd({ width: O.width, height: O.height }, m);
      if (g.halfW < O.width * 0.5 - 1e-6 || g.halfH < O.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, Vh(), Ve(), !0;
  }
  function Vh() {
    h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, Qe(), it(), Ve());
    }, 180);
  }
  function Eu() {
    return W && h.mode === "frame" && Ra();
  }
  function Xa() {
    const i = ze(), s = dl(i);
    return i && s ? Ig(i, s, { width: O.width, height: O.height }) : null;
  }
  function $h() {
    var i;
    return h.frameDistance || ((i = Lr()) == null ? void 0 : i.radius) || Kr;
  }
  function qa(i) {
    const { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m } = i.shot;
    return { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m, distance: $h() };
  }
  function zh(i, s) {
    const { rect: l } = i;
    return Te.pick(ah(i.shot), s.x - l.x, s.y - l.y, l.w, l.h);
  }
  function jh(i, s, l) {
    return lf(s, zh(i, l), null, Ei());
  }
  function Hh(i) {
    return JSON.stringify([qa(i), i.rect]);
  }
  function Gh(i) {
    const s = ze();
    s.position = [...i.position], s.yaw_deg = i.yaw_deg, s.pitch_deg = i.pitch_deg, h.frameDistance = i.distance;
  }
  function Kh(i, s) {
    const l = ze();
    !l || r || l.locked === !0 || (h.interaction = {
      kind: "pan_frame",
      shot: l,
      last: i,
      start: { yaw_deg: Number(l.yaw_deg || 0), pitch_deg: Number(l.pitch_deg || 0) },
      changed: !1
    }, mt(i), O.setPointerCapture(s));
  }
  function fw(i, s, l) {
    const f = Xa();
    if (!f || r) return;
    const p = qa(f), m = jh(f, p, s);
    h.interaction = i === "orbit" ? { kind: "frame_orbit", last: s, pivot: m, changed: !1 } : { kind: "frame_pan", last: s, depth: ha(p, m), changed: !1 }, mt(s), O.setPointerCapture(l);
  }
  function dw(i, s) {
    const l = Xa();
    if (!l) return;
    const f = qa(l), p = s.x - i.last.x, m = s.y - i.last.y;
    Gh(i.kind === "frame_pan" ? xg(f, p, m, l.rect.w, l.rect.h, i.depth) : wg(f, p, m, O.height, i.pivot)), i.changed = i.changed || p !== 0 || m !== 0, i.last = s, ae({ localOnly: !0, cause: "frame_view" });
  }
  function pw(i, s) {
    const l = Xa();
    if (!l || r) return;
    const f = qa(l), p = performance.now(), m = { x: i.x, y: i.y, time: p, key: Te.contentKey(), view: Hh(l) };
    if (!_g(Ut, m)) {
      const g = zh(l, i);
      Ut = { ...m, cost: performance.now() - p, hit: g };
    }
    Gh(Sg(f, lf(f, Ut.hit, null, Ei()), s, Ei())), Ut.view = Hh(Xa() ?? l), Ut.wheelTime = p, Vh(), Ve(), ae({ localOnly: !0, cause: "frame_view" });
  }
  function hw() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, Qe(), it(), Ve(), !0) : !1;
  }
  function Ja() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && eo(), h.interaction = null, zo(), ii(), Ve(), mt(h.pointerPos), ae({ localOnly: !0 }), !0;
  }
  function mw(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function Li(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? ui : Wn[s] ? s : h.activeBrushPresetId || ui;
  }
  function Wh() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (Dh() || Ou());
  }
  function Bh() {
    var i;
    return Wh() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function pl(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: l, y: f, inside: p }, g;
  }
  function gw() {
    var M, C;
    if (!Bh()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, l = Li(s), f = Wn[l] || Wn[ui], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(3, m * 0.5), w = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : er(h.paintColor), S = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : Z(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), I = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : Z(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: g,
      fillStyle: jr(w, S),
      strokeStyle: jr(w, I),
      x: Number(((M = h.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((C = h.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function yw() {
    var F, X, H;
    const i = gw();
    if (!Fe) return;
    if (!i) {
      Fe.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const S = "rgba(222, 222, 222, 0.72)", I = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), C = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Cc, l = Cc, f = "0", g = "0", w = "none", M = hE, C = mE, m = CE(i.fillStyle, I, S);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const J = Math.max(1, Number(((F = i.preset) == null ? void 0 : F.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * J), l = Math.max(6, i.radius * 2), f = `${Math.min(6, l * 0.42)}px`, p = Number(((H = (X = i.preset) == null ? void 0 : X.angle) == null ? void 0 : H.value) || 0) * ho;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    Fe.style.display = "block", Fe.style.width = `${Math.round(s)}px`, Fe.style.height = `${Math.round(l)}px`, Fe.style.borderRadius = f, Fe.style.border = g, Fe.style.boxShadow = w, Fe.style.background = m, Fe.style.backgroundRepeat = "no-repeat", Fe.style.backgroundPosition = "center", Fe.style.backgroundSize = "contain", Fe.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - C)}px) rotate(${p}deg)`;
  }
  function bw() {
    var ye;
    if (!vt || !ht) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const l = Li(s), f = Wn[l] || Wn[ui], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(6, m * 0.5), w = s === "eraser", S = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : er(h.paintColor), I = i === "mask" ? jr(S, 0.22) : w ? "rgba(255,255,255,0.14)" : jr(S, Z(Math.max(0.18, Number(S.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? jr(S, 0.96) : w ? "rgba(255,255,255,0.72)" : jr(S, Z(Math.max(0.56, Number(S.a ?? 1) * 0.96), 0.56, 1));
    let C = g * 2, F = g * 2, X = "999px", H = 0, J = I;
    const ie = "rgba(222, 222, 222, 0.72)", fe = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      J = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ce = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      C = Math.max(16, g * 2 * ce), F = Math.max(10, g * 2), X = `${Math.min(8, F * 0.42)}px`, H = Number(((ye = f == null ? void 0 : f.angle) == null ? void 0 : ye.value) || 0) * ho;
    } else s === "brush" ? J = `radial-gradient(circle at 50% 50%, ${M} 0%, ${I} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (C = Math.max(18, g * 1.8), F = C, J = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : w && (J = "rgba(255,255,255,0.12)");
    ht.style.width = `${Math.round(C)}px`, ht.style.height = `${Math.round(F)}px`, ht.style.borderRadius = X, ht.style.background = J, ht.style.border = `1px solid ${ie}`, ht.style.boxShadow = `0 0 0 1px ${fe}`, ht.style.transform = `rotate(${H}deg)`, st && (clearTimeout(st), st = 0), vt.classList.remove("fade-out"), vt.classList.add("show");
  }
  function hl() {
    !vt || !vt.classList.contains("show") || (vt.classList.add("fade-out"), st && clearTimeout(st), st = window.setTimeout(() => {
      vt.classList.remove("show", "fade-out"), st = 0;
    }, 180));
  }
  function Uh(i, s, l, f) {
    const p = Li(s), m = Wn[p] || Wn[ui], g = h.brushSizes[p] ?? 10, w = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), S = mw(f, w), I = l.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), M = {
      id: ea(i),
      actionGroupId: ea("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: w,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: S.radiusModel,
      radiusValue: S.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: I.map((C) => ({ ...C })),
        points: I.map((C) => ({ ...C }))
      }
    };
    return d0(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function Yh(i, s, l, f) {
    const p = l.map((S) => ({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: Number.isFinite(Number(S == null ? void 0 : S.widthScale)) ? Math.max(0, Number(S.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(S == null ? void 0 : S.pressureLike)) ? Math.max(0, Number(S.pressureLike)) : 1
    })), m = Li(s), g = Wn[m] || Wn[ui], w = {
      id: ea(i),
      actionGroupId: ea("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: 10,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: p.map((S) => ({ ...S }))
      }
    };
    return d0(w, g), Number(g.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Bo(i) {
    const s = _.painting || (_.painting = pa(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function vw(i, s, l = performance.now()) {
    let f;
    if (h.mode === "frame") {
      const I = ze();
      if (!I || (f = Pr(s, I, l), !f)) return !1;
    } else
      f = Nr(s, l);
    if (!f) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = p[p.length - 1];
    if (g) {
      const I = Math.abs(Number(f.u ?? f.x ?? 0) - Number(g.u ?? g.x ?? 0)), M = Math.abs(Number(f.v ?? f.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (I < 15e-4 && M < 15e-4) return !1;
    }
    const w = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...w }), m.push({ ...w });
    const S = Qn();
    if (S) {
      const I = h.paintEngine.ensureTarget(S);
      h.paintEngine.appendStrokePoint(I, Number(w.u ?? 0), Number(w.v ?? 0), i.stroke);
    }
    return !0;
  }
  function _w(i, s, l = performance.now()) {
    var g, w;
    let f;
    if (h.mode === "frame") {
      const S = ze();
      if (!S) return !1;
      f = Pr(s, S, l);
    } else
      f = Nr(s, l);
    const p = (w = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points;
    if (!f || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const S = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), I = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (S < 15e-4 && I < 15e-4) return !1;
    }
    return p.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function ww(i) {
    var ce, Ne, Ye, qe, lt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    ll();
    const l = Qn(), f = ja(l.width, l.height);
    if (!gh(f, s, { w: l.width, h: l.height })) return !1;
    const p = ((Ne = (ce = f.ctx) == null ? void 0 : ce.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Ne.data) || null;
    if (!p) return !1;
    const m = new Map(Sn().map((be) => [String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim(), be ? { ...be } : null])), g = [], w = [], S = [...Gn().filter((be) => String((be == null ? void 0 : be.layerKind) || "paint") !== "paint")];
    let I = !1, M = To().reduce((be, le) => Math.max(be, Number((le == null ? void 0 : le.z_index) || 0)), -1) + 1;
    function C(be, le, me, Le = 8) {
      let xe = le, He = me, Be = -1, Ue = -1;
      for (let je = 0; je < me; je += 1)
        for (let At = 0; At < le; At += 1)
          be[(je * le + At) * 4 + 3] <= Le || (At < xe && (xe = At), je < He && (He = je), At > Be && (Be = At), je > Ue && (Ue = je));
      return Be < xe || Ue < He ? null : { minX: xe, minY: He, maxX: Be, maxY: Ue };
    }
    const F = C(p, l.width, l.height, 8);
    if (!F) return !1;
    function X(be, le) {
      return !be || !le ? !1 : !(be.maxX < le.minX || le.maxX < be.minX || be.maxY < le.minY || le.maxY < be.minY);
    }
    function H(be, le) {
      const me = Ai((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "", "paint", le);
      if (!me) return null;
      const Le = me.centerUv.u - me.halfW, xe = me.centerUv.u + me.halfW, He = me.centerUv.v - me.halfH, Be = me.centerUv.v + me.halfH, Ue = l.width, je = l.height;
      return {
        minX: Math.floor((Le % 1 + 1) % 1 * Ue),
        maxX: Math.ceil((xe % 1 + 1) % 1 * Ue),
        minY: Math.floor(Z(He, 0, 1) * je),
        maxY: Math.ceil(Z(Be, 0, 1) * je),
        wraps: xe - Le >= 1 || Le < 0 || xe > 1
      };
    }
    function J(be) {
      const le = (be == null ? void 0 : be.bbox) || null;
      if (!le) return null;
      const me = (be == null ? void 0 : be.transform) || {}, Le = l.width, xe = l.height, He = Number(le.u0 || 0) + Number(me.du || 0), Be = Number(le.u1 || 0) + Number(me.du || 0), Ue = Number(le.v0 || 0) + Number(me.dv || 0), je = Number(le.v1 || 0) + Number(me.dv || 0);
      return {
        minX: Math.floor((He % 1 + 1) % 1 * Le),
        maxX: Math.ceil((Be % 1 + 1) % 1 * Le),
        minY: Math.floor(Z(Ue, 0, 1) * xe),
        maxY: Math.ceil(Z(je, 0, 1) * xe),
        wraps: Be - He >= 1 || He < 0 || Be > 1
      };
    }
    function ie(be) {
      return be ? be.wraps ? X(F, { minX: 0, maxX: be.maxX, minY: be.minY, maxY: be.maxY }) || X(F, { minX: be.minX, maxX: l.width - 1, minY: be.minY, maxY: be.maxY }) : X(F, be) : !0;
    }
    function fe(be) {
      if (!be) return { touched: !1, canvas: null };
      const le = ja(l.width, l.height, { readback: !0 });
      le.ctx.drawImage(be, 0, 0);
      const me = le.ctx.getImageData(0, 0, l.width, l.height);
      le.ctx.save(), le.ctx.globalCompositeOperation = "destination-out", le.ctx.drawImage(f.canvas, 0, 0), le.ctx.restore();
      const Le = le.ctx.getImageData(0, 0, l.width, l.height);
      for (let xe = 0; xe < l.width * l.height; xe += 1) {
        if (p[xe * 4 + 3] <= 8) continue;
        const Be = me.data[xe * 4 + 3], Ue = Le.data[xe * 4 + 3];
        if (Be > Ue)
          return { touched: !0, canvas: le.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ye(be, le, me) {
      const Le = Number(me == null ? void 0 : me.z_index), xe = g_(be, le, me).map((He, Be) => ({
        ...He,
        z_index: Number.isFinite(Le) ? Le + Be * 1e-3 : M + Be * 1e-3
      }));
      return xe.length && (M = Math.max(M, ...xe.map((He) => Number((He == null ? void 0 : He.z_index) || 0))) + 1), xe;
    }
    for (const be of Sn()) {
      const le = String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim();
      if (!le) continue;
      const me = kr(le, "paint");
      if (!ie(H(be, me))) {
        w.push(be), g.push(...me);
        continue;
      }
      const Le = ((qe = (Ye = h.paintEngine) == null ? void 0 : Ye.getGroupTarget) == null ? void 0 : qe.call(Ye, le)) || null, xe = ((lt = Le == null ? void 0 : Le.committedPaint) == null ? void 0 : lt.canvas) || null;
      if (!xe) {
        w.push(be), g.push(...me);
        continue;
      }
      const He = fe(xe);
      if (!He.touched || !He.canvas) {
        w.push(be), g.push(...me);
        continue;
      }
      I = !0;
      const Be = ye(He.canvas, "paint", m.get(le) || be || {});
      S.push(...Be);
    }
    for (const be of Gn().filter((le) => String((le == null ? void 0 : le.layerKind) || "paint") === "paint")) {
      if (!ie(J(be))) {
        S.push(be);
        continue;
      }
      const le = Jp(be, null);
      if (!le) {
        S.push(be);
        continue;
      }
      const me = fe(le);
      if (!me.touched || !me.canvas) {
        S.push(be);
        continue;
      }
      I = !0;
      const Le = ye(me.canvas, "paint", be);
      S.push(...Le);
    }
    return I ? (_.painting.paint.strokes = g, _.painting.groups = w.sort((be, le) => Number((be == null ? void 0 : be.z_index) || 0) - Number((le == null ? void 0 : le.z_index) || 0)), _.painting.raster_objects = S.sort((be, le) => Number((be == null ? void 0 : be.z_index) || 0) - Number((le == null ? void 0 : le.z_index) || 0)), Da({ preservePanelValues: !1 }), !0) : !1;
  }
  function xw(i) {
    var g, w, S, I, M;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.rawPoints) || ((I = (S = i.stroke) == null ? void 0 : S.geometry) == null ? void 0 : I.points) || []).length >= 1) {
      Fu(i);
      const C = Qn();
      C && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(C) : h.paintEngine.commitActiveStroke(i.stroke, C)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Uh(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = Qn();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Sw(i) {
    var g, w;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      Fu(i);
      const S = Qn();
      S && h.paintEngine.commitActiveStroke(i.stroke, S), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Yh(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = Qn();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Fu(i) {
    var m, g, w, S;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Nu(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), ww(i);
    const f = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && Mp((w = i.stroke) == null ? void 0 : w.actionGroupId), Bo(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Nu(p, i.stroke.targetSpace, !0), f && Mp((S = i.stroke) == null ? void 0 : S.actionGroupId), Bo(i.layerKind).push(i.stroke), !0);
  }
  function Xh(i) {
    var l;
    if (V && h.mode === "frame") {
      const f = ze(), p = hn(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const g = Pr(i, f, performance.now()), w = g ? Ho(g) : null;
      if (w)
        for (const I of ku()) {
          if (!St(I)) continue;
          const M = Wa(I, w);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const C = tn(I);
            if (C != null && C.visible) return { item: I, geom: C };
          }
        }
      const S = Qc(!1).slice().sort((I, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((I == null ? void 0 : I.z_index) || 0));
      for (const I of S) {
        if (I.type === "strokeGroup") {
          const F = Lo(Oa("paint", I.actionGroupId || I.id || ""));
          if (!F) continue;
          const X = tn(F);
          if (!(X != null && X.visible)) continue;
          const H = Array.isArray(X.strokePaths) ? X.strokePaths : [];
          for (const J of H) {
            const ie = Array.isArray(J == null ? void 0 : J.points) ? J.points : [];
            if (!ie.length) continue;
            if (J.closed && ie.length >= 3 && Vi(i, ie)) return { item: F, geom: X };
            const fe = Math.max(8, Number((J == null ? void 0 : J.lineWidth) || 0) * 0.5 + 6);
            for (let ye = 0; ye < ie.length - 1; ye += 1)
              if (Pf(i, ie[ye], ie[ye + 1]) <= fe * fe) return { item: F, geom: X };
            if (ie.length === 1 && bs(i, ie[0]) <= fe * fe) return { item: F, geom: X };
          }
          continue;
        }
        if (I.type === "rasterObject") {
          const F = Do(Ea(((l = I.item) == null ? void 0 : l.id) || I.id || ""));
          if (!F) continue;
          const X = tn(F);
          if (qp(F, X, i, g)) return { item: F, geom: X };
          continue;
        }
        const M = I.item;
        if (!M || !St(M) || !w) continue;
        const C = Wa(M, w);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const F = tn(M);
          if (F != null && F.visible) return { item: M, geom: F };
        }
      }
      return null;
    }
    const s = [
      ...Qc(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? Lo(Oa("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? Do(Ea(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...V ? ku().filter((f) => ln(f)) : []
    ];
    for (const f of s) {
      if (pn(f)) {
        const m = tn(f);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const w of g) {
          const S = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!S.length) continue;
          if (w.closed && S.length >= 3 && Vi(i, S)) return { item: f, geom: m };
          const I = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < S.length - 1; M += 1)
            if (Pf(i, S[M], S[M + 1]) <= I * I) return { item: f, geom: m };
          if (S.length === 1 && bs(i, S[0]) <= I * I) return { item: f, geom: m };
        }
        continue;
      }
      if (kn(f)) {
        const m = tn(f);
        if (!(m != null && m.visible)) continue;
        if (qp(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = tn(f);
      if (p.visible && Vi(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function Za(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (St(l)) return ud(i, s);
    if (i.kind === "strokeGroup") {
      const f = i.corners.findIndex((m) => bs(m, s) <= 121);
      if (f >= 0) {
        const m = i.corners[f], g = m.x - i.center.x, w = m.y - i.center.y, S = g * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: S };
      }
      const p = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of p) {
        const g = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && g.length >= 3 && Vi(s, g)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let S = 0; S < g.length - 1; S += 1)
          if (Pf(s, g[S], g[S + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return Vi(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const f = i.corners.findIndex((p) => bs(p, s) <= 121);
      if (f >= 0) {
        const p = i.corners[f], m = p.x - i.center.x, g = p.y - i.center.y, w = m * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: w };
      }
      return Vi(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    return $2(i, s, {
      edges: t === "cutout" || ln(l),
      resize: !(ln(l) && qi()),
      emptyCursor: h.mode === "pano" ? "grab" : "default"
    });
  }
  function qh(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function kw(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function Mw(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => kw(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Vi({ x: l, y: f }, s.corners);
  }
  function mt(i) {
    if (yw(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? Tt("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? Tt("grabbing") : h.interaction.kind === "space_pan" || h.interaction.kind === "frame_pan" ? Tt("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "frame_orbit" || h.interaction.kind === "world_gizmo" || h.interaction.kind === "roll_frame" ? Tt("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? Tt("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? Tt(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? Tt("grabbing") : Tt("default");
      return;
    }
    if (Bh()) {
      Tt("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        Tt(uE);
        return;
      }
      if (h.primaryTool !== "cursor") {
        Tt("default");
        return;
      }
      Tt("grab");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      Tt("default");
      return;
    }
    if (h.gizmoAxis) {
      Tt("grab");
      return;
    }
    const s = It(), l = s ? tn(s) : null, f = s ? _n(s) : !1, p = f ? { kind: "none", cursor: "default" } : Za(l, i, s);
    if (!f && p.kind !== "none") {
      Tt(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && Xh(i)) {
      Tt("default");
      return;
    }
    Tt(h.mode === "pano" ? "grab" : "default");
  }
  function Ke() {
    if (!ge) return;
    if (ve = !1, h.mode === "frame") {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (h.worldSelectedId || ur() && cr()) {
      const p = Nw();
      ve = p.visible, Jh(p);
      return;
    }
    const i = It(), s = lr();
    if (!i && s.length === 0 || h.interaction) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Zs(), f = BA({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? Ta(s) : tn(i),
      allLocked: ru(s),
      anyLocked: s.some((p) => _n(p)),
      selectedLocked: _n(i),
      activeAspect: ln(i) && qi() ? va : hi(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Xt,
      isStickerHidden: Ro,
      canRestoreSelectedToInitial: q1,
      iconSet: ke,
      cameraShot: W,
      cameraDeletable: R,
      erpChoice: R,
      coverage: _.coverage
    });
    Jh(f);
  }
  function Nw() {
    const i = Ji() && !h.interaction ? Zn().space : null;
    if (!(i != null && i.gizmo)) return { visible: !1 };
    const s = Qa(), l = i.stickers.find((g) => g.id === h.worldSelectedId), p = (l ? ap(l) : [i.gizmo.transform.position]).map((g) => zs(s, g, O.width, O.height)).filter(Boolean), m = bN(s, i.gizmo.transform.position, i.gizmo.mode, O.width, O.height);
    return UA({ corners: p, gizmoBox: m, gizmoMode: i.gizmo.mode, camera: ur(), deletable: R && ur() });
  }
  function Jh(i) {
    var m, g;
    if (!i.visible) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = (w, S) => YA(i.anchor, w, S, O.width, O.height), l = Math.max(1, Number(((m = h.menuSize) == null ? void 0 : m.w) || 220)), f = Math.max(1, Number(((g = h.menuSize) == null ? void 0 : g.h) || 40)), p = s(l, f);
    if (!p) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    A.selectionMenu = {
      visible: !0,
      left: p.left,
      top: p.top,
      items: i.items
    }, requestAnimationFrame(() => {
      if (!ge || A.selectionMenu.visible !== !0) return;
      const w = ge.getBoundingClientRect(), S = Math.round(Number((w == null ? void 0 : w.width) || 0)) || 220, I = Math.round(Number((w == null ? void 0 : w.height) || 0)) || 40;
      h.menuSize = { w: S, h: I, measured: !0 };
      const M = s(S, I);
      M && (A.selectionMenu.left = M.left, A.selectionMenu.top = M.top);
    });
  }
  function eo() {
    Yt.timer && (clearTimeout(Yt.timer), Yt.timer = 0), Yt.target = null, A.tooltip.visible = !1;
  }
  function Pw(i) {
    if (!Me || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    A.tooltip.text = s, A.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var J, ie;
      if (Yt.target !== l || !Me || !(l != null && l.isConnected)) return;
      const f = te.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, g = 12, w = Math.round(Number(((J = Me.getBoundingClientRect()) == null ? void 0 : J.width) || 0)) || 100, S = Math.round(Number(((ie = Me.getBoundingClientRect()) == null ? void 0 : ie.height) || 0)) || 24, I = !!l.closest(".pano-floating-left"), M = !!l.closest(".pano-frame-rail"), C = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let F = "", X = p.left - f.left + p.width * 0.5 - w * 0.5, H = p.top - f.top - S - g;
      if (l.closest(".pano-floating-top") && (H = p.bottom - f.top + g), I)
        F = "tool-rail", X = p.right - f.left + 10, H = p.top - f.top + p.height * 0.5 - S * 0.5, X = Z(X, m, Math.max(m, f.width - w - m)), H = Z(H, m, Math.max(m, f.height - S - m));
      else if (M)
        F = "frame-rail", X = p.left - f.left - w - 10, H = p.top - f.top + p.height * 0.5 - S * 0.5, X = Z(X, m, Math.max(m, f.width - w - m)), H = Z(H, m, Math.max(m, f.height - S - m));
      else if (C) {
        F = "footer";
        const fe = l.closest(".pano-paint-footer"), ye = fe ? fe.getBoundingClientRect() : p;
        X = ye.left - f.left + ye.width * 0.5 - w * 0.5, H = ye.bottom - f.top + 5, X = Z(X, m, Math.max(m, f.width - w - m)), H = Math.max(m, H);
      }
      X = Z(X, m, Math.max(m, f.width - w - m)), H = Math.max(m, H), A.tooltip.left = X, A.tooltip.top = H, A.tooltip.variant = F, A.tooltip.visible = !0;
    });
  }
  const cn = Kd({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = Ht(Number(i.yaw || 0)), h.viewPitch = Z(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = Z(Number(i.fov || h.viewFov || 100), 35, 140);
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
    getUnwrapRect: Fi,
    onInteraction: () => {
      ee.backgroundDirty = !0, ee.dirty = !0;
    }
  });
  function Aw(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += Oy(s, i.lastAngle), i.lastAngle = s;
    const f = Ey(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = A.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f, p.displayValue = Qo(f), p.fillPct = (f + 180) / 360 * 100), ai(), Tu(i), ae({ localOnly: !0 });
  }
  function Cw(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = Qb(i.rollGesture, s, l);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = A.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = Qo(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), ai(), Tu(i), ae({ localOnly: !0 });
  }
  const Zh = (i, s) => {
    const l = Di(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Tu(i) {
    var g, w;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Yt.timer && (clearTimeout(Yt.timer), Yt.timer = 0), Yt.target = null;
    const s = hn(i.shot), l = (g = O.getBoundingClientRect) == null ? void 0 : g.call(O), f = (w = te.getBoundingClientRect) == null ? void 0 : w.call(te);
    if (!s || !l || !f || O.width <= 0 || O.height <= 0) return;
    const p = l.width / O.width, m = l.height / O.height;
    A.tooltip.text = `${Qo(i.shot.roll_deg)}°`, A.tooltip.left = l.left - f.left + (s.x + s.w * 0.5) * p, A.tooltip.top = l.top - f.top + (s.y + s.h * 0.5) * m + 12, A.tooltip.variant = "roll", A.tooltip.visible = !0;
  }
  K == null || K.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = ze();
    if (!s || s.locked === !0) return;
    const l = hn(s);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Zh(i, f);
    h.interaction = {
      kind: "roll_frame",
      shot: s,
      center: f,
      lastAngle: p,
      accumulatedRad: 0,
      start: { roll_deg: Number(s.roll_deg ?? s.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = K.setPointerCapture) == null || m.call(K, i.pointerId), i.preventDefault(), ai(), Tu(h.interaction), ae({ localOnly: !0 });
  }), K == null || K.addEventListener("pointermove", (i) => {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || Aw(
      h.interaction,
      Zh(i, h.interaction.center),
      i
    );
  });
  const Iw = () => {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (Qe(), it(), Ve()), h.interaction = null, eo(), ii(), ai(), ae());
  };
  K == null || K.addEventListener("pointerup", Iw), K == null || K.addEventListener("pointercancel", () => Ja()), K == null || K.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && Ja();
  }), K == null || K.addEventListener("dblclick", (i) => {
    const s = h.mode === "frame" && !r ? ze() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, Qe(), it(), Ve(), ai(), ae(), i.preventDefault());
  }), O.onpointerdown = (i) => {
    We.selection && (We.selection = null, si());
    const s = Di(i);
    rn = s, pl(s, !0), Ca(), cn.state.inertia.active = !1, cn.state.inertia.vx = 0, cn.state.inertia.vy = 0;
    const l = cr(), f = Eu(), p = l || f ? Q2(du(), i) : null;
    if (f && p) {
      i.preventDefault(), p === "look" ? Kh(s, i.pointerId) : fw(p, s, i.pointerId);
      return;
    }
    if (p === "look") {
      i.preventDefault();
      const M = fl(i);
      h.interaction = { kind: "view", last: M, lastTs: performance.now() }, cn.startDrag(M.x, M.y, i.pointerId, performance.now()), mt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (p) {
      i.preventDefault(), Yp(p, s, i.pointerId);
      return;
    }
    if ((l || f) && i.button !== 0) {
      i.preventDefault();
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), h.mode === "frame") {
        const M = ze();
        if (!M || r || M.locked === !0) return;
        h.interaction = {
          kind: "pan_frame",
          shot: M,
          last: s,
          start: {
            yaw_deg: Number(M.yaw_deg || 0),
            pitch_deg: Number(M.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const M = h.mode === "unwrap" ? s : fl(i);
        h.interaction = { kind: "view", last: M, lastTs: performance.now() }, cn.startDrag(M.x, M.y, i.pointerId, performance.now());
      }
      mt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const M = ze(), C = hn(M);
      if (!M || M.locked === !0 || !C) return;
      const F = Zb({
        frame: C,
        point: s,
        startRollDeg: Number(M.roll_deg ?? M.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!F) return;
      h.interaction = {
        kind: "roll_frame",
        shot: M,
        center: F.center,
        lastAngle: F.lastAngle,
        accumulatedRad: F.accumulatedRad,
        rollGesture: F,
        start: { roll_deg: Number(M.roll_deg ?? M.rot_deg ?? 0) },
        changed: !1,
        altStarted: F.source === "alt",
        source: F.source
      }, O.setPointerCapture(i.pointerId), i.preventDefault(), ai(), ae({ localOnly: !0 });
      return;
    }
    if (h.mode === "frame" && h.primaryTool === "cursor") {
      Kh(s, i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && tm(i, s);
      return;
    }
    if (Oe && !Oe.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (Dh() || Ou())) {
      wn();
      const M = h.primaryTool === "mask" ? "mask" : "paint", C = h.primaryTool === "mask" ? h.maskTool : h.paintTool, F = h.mode === "frame" && Ou() ? ze() : null, X = { kind: "ERP_GLOBAL" }, H = F ? Pr(s, F, performance.now()) : Nr(s, performance.now());
      if (!H) {
        mt(s);
        return;
      }
      h.interaction = {
        kind: C === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: M,
        _livePreviewToken: ea("live"),
        stroke: C === "lasso_fill" ? Yh(M, C, [H], X) : Uh(M, C, [H], X)
      }, zo();
      const J = Qn();
      if (J)
        if (h.paintEngine.beginStroke(h.interaction.stroke, J), h.interaction.kind === "paint_stroke") {
          const ie = h.paintEngine.ensureTarget(J), fe = Number((H == null ? void 0 : H.u) ?? (H == null ? void 0 : H.x) ?? 0), ye = Number((H == null ? void 0 : H.v) ?? (H == null ? void 0 : H.y) ?? 0);
          h.paintEngine.appendStrokePoint(ie, fe, ye, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, J);
      mt(s), O.setPointerCapture(i.pointerId), ae();
      return;
    }
    const m = lr(), g = It(), w = m.length > 1 ? Ta(m) : g ? tn(g) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: s, current: s }, mt(s), O.setPointerCapture(i.pointerId), ae({ localOnly: !0 });
      return;
    }
    if (h.primaryTool === "cursor" && Dr() && cr() && Rv(i, s) || h.primaryTool === "cursor" && P && Ji() && Ow(i, s)) return;
    if (m.length > 1 && (w != null && w.visible)) {
      if ((m.some((C) => _n(C)) ? { kind: "none" } : Za(w, s)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: m.map((C) => C),
          offset: { x: s.x - w.center.x, y: s.y - w.center.y },
          startCenter: { x: w.center.x, y: w.center.y },
          stickerSnapshots: m.filter((C) => St(C)).map((C) => ({
            id: String(C.id || ""),
            yaw_deg: Number(sn(C).yaw_deg || 0),
            pitch_deg: Number(sn(C).pitch_deg || 0),
            center: (() => {
              var X, H;
              const F = tn(C);
              return F != null && F.visible ? { x: Number(((X = F.center) == null ? void 0 : X.x) || 0), y: Number(((H = F.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: m.filter((C) => pn(C)).map((C) => ({
            id: String(C.actionGroupId || C.id || ""),
            layerKind: String(C.layerKind || "paint"),
            snapshot: Pn(kr(C.actionGroupId, C.layerKind)),
            frameSnapshot: Pn(Ai(C.actionGroupId, C.layerKind)),
            center: (() => {
              var X, H;
              const F = tn(C);
              return F != null && F.visible ? { x: Number(((X = F.center) == null ? void 0 : X.x) || 0), y: Number(((H = F.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: nu(C.actionGroupId, C.layerKind)
          })),
          rasterSnapshots: m.filter((C) => kn(C)).map((C) => ({
            id: yn(C.rasterObjectId || C.id || ""),
            snapshot: Pn(Gn().find((F) => String((F == null ? void 0 : F.id) || "") === yn(C.rasterObjectId || C.id || ""))),
            center: (() => {
              var X, H;
              const F = tn(C);
              return F != null && F.visible ? { x: Number(((X = F.center) == null ? void 0 : X.x) || 0), y: Number(((H = F.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: nh(C)
          }))
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    } else if (g && (w != null && w.visible)) {
      const M = _n(g) ? { kind: "none" } : Za(w, s, g);
      if (M.kind === "scale") {
        h.interaction = pn(g) ? {
          kind: "scale_stroke_group",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: Pn(kr(g.actionGroupId, g.layerKind)),
          frameSnapshot: Pn(Ai(g.actionGroupId, g.layerKind)),
          cursor: M.cursor
        } : kn(g) ? {
          kind: "scale_raster_object",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: Pn(Gn().find((C) => String((C == null ? void 0 : C.id) || "") === yn(g.rasterObjectId || g.id || ""))),
          cursor: M.cursor
        } : {
          kind: "scale",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          startHFOV: Number(sn(g).hFOV_deg || 20),
          startVFOV: Number(sn(g).vFOV_deg || 20),
          cursor: M.cursor
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "scale_x" || M.kind === "scale_y") {
        h.interaction = {
          kind: M.kind,
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          startHFOV: Number(sn(g).hFOV_deg || 20),
          startVFOV: Number(sn(g).vFOV_deg || 20),
          cursor: M.cursor,
          edge: M.edge
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "rotate") {
        h.interaction = pn(g) ? {
          kind: "rotate_stroke_group",
          item: g,
          center: w.center,
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x),
          snapshot: Pn(kr(g.actionGroupId, g.layerKind)),
          frameSnapshot: Pn(Ai(g.actionGroupId, g.layerKind))
        } : {
          kind: "rotate",
          item: g,
          center: w.center,
          startRot: Number(sn(g).rot_deg || sn(g).roll_deg || 0),
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x)
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "move") {
        if (pn(g)) {
          const C = h.mode === "frame" ? (() => {
            const F = ze();
            return F ? Pr(s, F, performance.now()) : null;
          })() : Nr(s, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: g,
            startUv: C,
            snapshot: Pn(kr(g.actionGroupId, g.layerKind)),
            frameSnapshot: Pn(Ai(g.actionGroupId, g.layerKind))
          }, mt(s), O.setPointerCapture(i.pointerId);
          return;
        }
        if (kn(g)) {
          const C = h.mode === "frame" ? (() => {
            const F = ze();
            return F ? Pr(s, F, performance.now()) : null;
          })() : Nr(s, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: g,
            startUv: C,
            snapshot: Pn(Gn().find((F) => String((F == null ? void 0 : F.id) || "") === yn(g.rasterObjectId || g.id || "")))
          }, mt(s), O.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: g,
          offset: { x: s.x - w.center.x, y: s.y - w.center.y }
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    }
    const S = Xh(s);
    if (S) {
      const M = h.selectedId !== S.item.id;
      if (M && h.selectedId && (Qe(), Vn()), Rn(S.item), V && M && (h.cutoutAspectOpen = !1), M && Ve(), Ke(), ae(), _n(S.item)) {
        mt(s);
        return;
      }
      h.interaction = {
        kind: pn(S.item) ? "move_stroke_group" : kn(S.item) ? "move_raster_object" : "move",
        item: S.item,
        offset: { x: s.x - S.geom.center.x, y: s.y - S.geom.center.y },
        startUv: pn(S.item) || kn(S.item) ? h.mode === "frame" ? (() => {
          const C = ze();
          return C ? Pr(s, C, performance.now()) : null;
        })() : Nr(s, performance.now()) : null,
        snapshot: pn(S.item) ? Pn(kr(S.item.actionGroupId, S.item.layerKind)) : kn(S.item) ? Pn(Gn().find((C) => String((C == null ? void 0 : C.id) || "") === yn(S.item.rasterObjectId || S.item.id || ""))) : null,
        frameSnapshot: pn(S.item) ? Pn(Ai(S.item.actionGroupId, S.item.layerKind)) : null
      }, mt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    const I = !!h.selectedId;
    I && (Qe(), Vn()), Da(), I && Ve(), Ke(), ae(), h.mode === "pano" && tm(i, s);
  };
  function Qa() {
    return cf(bn(), O.width, O.height, Lr());
  }
  function to(i, s) {
    return Te.gizmoPointer(i, Qa(), s.x, s.y, O.width, O.height);
  }
  function Ow(i, s) {
    var w;
    const l = (w = Zn().space) == null ? void 0 : w.gizmo;
    if (l && to("hover", s) !== null && to("down", s))
      return h.interaction = {
        kind: "world_gizmo",
        id: h.worldSelectedId,
        mode: l.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: l.transform,
        base: xo(La(), h.frame),
        changed: !1
      }, O.setPointerCapture(i.pointerId), mt(s), !0;
    const f = lr(), p = It(), m = f.length > 1 ? f.some((S) => _n(S)) ? "none" : Za(Ta(f), s).kind : p && !_n(p) ? Za(tn(p), s, p).kind : "none";
    if (m !== "none" && m !== "move") return !1;
    const g = Te.pickSticker(Qa(), s.x, s.y, O.width, O.height);
    return _.stickers.some((S) => S.id === g && S.placement === "world") ? (h.worldSelectedId !== g && (h.selectedId && (Qe(), Vn()), uu(g), Ve(), Ke(), Tr(), ae()), h.interaction = { kind: "world_select" }, O.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Qh(i) {
    var f;
    const l = !!(h.worldSelectedId || ur()) && h.primaryTool === "cursor" && Ji() && !!((f = Zn().space) != null && f.gizmo) ? to("hover", i) : null;
    l !== h.gizmoAxis && (h.gizmoAxis = l, ee.backgroundDirty = !0, ae({ localOnly: !0 }));
  }
  function Ew(i, s) {
    const l = to("move", s);
    if (l && i.camera) {
      for (const [p, m] of Object.entries(Pg(i.mode, i.base, i.start, l))) On(_.camera, p, h.frame, m);
      fr(), i.changed = !0, Ve(), ae({ localOnly: !0 });
      return;
    }
    const f = _.stickers.find((p) => p.id === i.id);
    !l || !f || (KM(f, h.frame, Pg(i.mode, i.base, i.start, l)), i.changed = !0, $t(), Ve(), ae({ localOnly: !0 }));
  }
  function em(i) {
    h.interaction = null, h.gizmoAxis = null, i.kind === "world_gizmo" && (to("up", h.pointerPos), ee.backgroundDirty = !0, i.changed && (Qe(), it(), Ve())), mt(h.pointerPos), ae();
  }
  function tm(i, s) {
    if (cr()) {
      const f = du().emptyLeft;
      f && Yp(f, s, i.pointerId);
      return;
    }
    const l = fl(i);
    h.interaction = { kind: "view", last: l, lastTs: performance.now() }, cn.startDrag(l.x, l.y, i.pointerId, performance.now()), mt(s), O.setPointerCapture(i.pointerId);
  }
  function Fw(i, s) {
    if (!k || !an.playing) return;
    if (an.stop(), i.kind === "frame_orbit" || i.kind === "frame_pan") {
      const p = Xa();
      if (!p) return;
      const m = qa(p), g = jh(p, m, s);
      i.kind === "frame_orbit" ? i.pivot = g : i.depth = ha(m, g);
      return;
    }
    if (i.kind === "world_gizmo") {
      const p = _.stickers.find((m) => m.id === i.id);
      i.camera ? i.base = Zi() : p && (i.base = xo(p, h.frame));
      return;
    }
    if (i.kind === "move_multi") {
      const p = Ta(i.items);
      if (!(p != null && p.visible)) return;
      i.offset = { x: s.x - p.center.x, y: s.y - p.center.y }, i.startCenter = { x: p.center.x, y: p.center.y };
      for (const m of i.stickerSnapshots) {
        const g = i.items.find((S) => String((S == null ? void 0 : S.id) || "") === m.id), w = g ? tn(g) : null;
        w != null && w.visible && (m.yaw_deg = Number(sn(g).yaw_deg || 0), m.pitch_deg = Number(sn(g).pitch_deg || 0), m.center = { x: w.center.x, y: w.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const l = tn(i.item);
    if (!(l != null && l.visible)) return;
    const f = sn(i.item);
    if (i.kind === "move") {
      i.offset = { x: s.x - l.center.x, y: s.y - l.center.y };
      return;
    }
    if (i.center = l.center, i.kind === "rotate") {
      i.startRot = Number(f.rot_deg || f.roll_deg || 0), i.startAng = Math.atan2(s.y - l.center.y, s.x - l.center.x);
      return;
    }
    i.startDist = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)), i.startHFOV = Number(f.hFOV_deg || 20), i.startVFOV = Number(f.vFOV_deg || 20);
  }
  O.onpointermove = (i) => {
    var f, p, m, g, w, S, I, M, C, F, X, H, J, ie, fe, ye, ce, Ne, Ye, qe, lt, be;
    const s = Di(i);
    if (pl(s, !0), !h.interaction) {
      Qh(s), mt(s);
      return;
    }
    mt(s);
    const l = h.interaction;
    if (rn && (s.x !== rn.x || s.y !== rn.y)) {
      const le = rn;
      rn = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(l.kind) || Fw(l, le);
    }
    if (l.kind !== "world_select") {
      if (l.kind === "world_gizmo") {
        Ew(l, s);
        return;
      }
      if (l.kind === "paint_stroke") {
        const le = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let me = !1;
        le.forEach((Le) => {
          const xe = Di(Le);
          if (h.mode === "frame") {
            const He = ze(), Be = He ? hn(He) : null;
            if (Be) {
              const Ue = (xe.x - Be.x) / Math.max(1, Be.w), je = (xe.y - Be.y) / Math.max(1, Be.h);
              if (!(Ue >= 0 && Ue <= 1 && je >= 0 && je <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, xw(l));
            }
          }
          vw(l, xe, performance.now()) && (me = !0);
        }), me && ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "paint_lasso_fill") {
        const le = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let me = !1;
        if (le.forEach((Le) => {
          const xe = Di(Le);
          if (h.mode === "frame") {
            const He = ze(), Be = He ? hn(He) : null;
            if (Be) {
              const Ue = (xe.x - Be.x) / Math.max(1, Be.w), je = (xe.y - Be.y) / Math.max(1, Be.h);
              if (!(Ue >= 0 && Ue <= 1 && je >= 0 && je <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, Sw(l));
            }
          }
          _w(l, xe, performance.now()) && (me = !0);
        }), me) {
          const Le = Qn();
          Le && h.paintEngine.updateActiveStroke(l.stroke, Le), ae({ localOnly: !0 });
        }
        return;
      }
      if (l.kind === "view") {
        const le = performance.now(), me = h.mode === "unwrap" ? s : fl(i);
        cn.moveDrag(me.x, me.y, h.mode === "unwrap" ? "unwrap" : "pano", le), l.lastTs = le, l.last = me, ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "frame_pan" || l.kind === "frame_orbit") {
        dw(l, s);
        return;
      }
      if (l.kind === "space_pan" || l.kind === "space_orbit") {
        const le = bn();
        Wp(l.kind === "space_pan" ? xg(le, s.x - l.last.x, s.y - l.last.y, O.width, O.height, l.depth) : wg(le, s.x - l.last.x, s.y - l.last.y, O.height, l.pivot)), l.last = s;
        return;
      }
      if (l.kind === "pan_frame") {
        const le = dl(l.shot);
        if (!le || !l.shot) return;
        const me = s.x - l.last.x, Le = s.y - l.last.y, xe = e1(l.shot, {
          dx: me,
          dy: Le,
          focalPx: le.focalPx,
          invertX: ((f = _.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((p = _.ui_settings) == null ? void 0 : p.invert_view_y) === !0
        });
        l.shot.yaw_deg = xe.yaw_deg, l.shot.pitch_deg = xe.pitch_deg, l.changed = l.changed || Math.abs(me) > 0 || Math.abs(Le) > 0, l.last = s, ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "roll_frame") {
        if (l.source === "knob") return;
        Cw(l, s, i);
        return;
      }
      if (l.kind === "move") {
        const le = s.x - l.offset.x, me = s.y - l.offset.y;
        if (h.mode === "frame" && V) {
          const Le = ze(), xe = hn(Le);
          if (!Le || !xe) return;
          const He = {
            x: Z((le - xe.x) / Math.max(1, xe.w), 0, 1),
            y: Z((me - xe.y) / Math.max(1, xe.h), 0, 1)
          }, Be = Mu(Le, He);
          if (!Be) return;
          const Ue = Ol(Be);
          Sr(l.item, { yaw_deg: Ue.yaw, pitch_deg: Ue.pitch });
        } else if (h.mode === "unwrap") {
          const Le = Fi(), xe = Z((le - Le.x) / Math.max(Le.w, 1), 0, 1), He = Z((me - Le.y) / Math.max(Le.h, 1), 0, 1);
          Sr(l.item, { yaw_deg: Ht(xe * 360 - 180), pitch_deg: Z(90 - He * 180, -90, 90) });
        } else {
          const Le = gu(le, me), xe = Ol(Le);
          Sr(l.item, { yaw_deg: xe.yaw, pitch_deg: xe.pitch });
        }
        St(l.item) && $t(), ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "move_stroke_group") {
        const le = h.mode === "frame" ? (() => {
          const xe = ze();
          return xe ? Pr(s, xe, performance.now()) : null;
        })() : Nr(s, performance.now());
        if (!le || !l.startUv) return;
        const me = sr(Number(le.u || 0), Number(l.startUv.u || 0)), Le = Number(le.v || 0) - Number(l.startUv.v || 0);
        Pp((m = l.item) == null ? void 0 : m.actionGroupId, me, Le, l.snapshot, (g = l.item) == null ? void 0 : g.layerKind, l.frameSnapshot) && (Mr({ rebuildPaintEngine: !1 }), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_raster_object") {
        const le = h.mode === "frame" ? (() => {
          const xe = ze();
          return xe ? Pr(s, xe, performance.now()) : null;
        })() : Nr(s, performance.now());
        if (!le || !l.startUv) return;
        const me = sr(Number(le.u || 0), Number(l.startUv.u || 0)), Le = Number(le.v || 0) - Number(l.startUv.v || 0);
        Cp(((w = l.item) == null ? void 0 : w.rasterObjectId) || ((S = l.item) == null ? void 0 : S.id) || "", me, Le, l.snapshot) && (Go(), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_raster_object") {
        const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        z1(((I = l.item) == null ? void 0 : I.rasterObjectId) || ((M = l.item) == null ? void 0 : M.id) || "", me, l.snapshot) && (Go(), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_multi") {
        const le = s.x - Number(((C = l.offset) == null ? void 0 : C.x) || 0), me = s.y - Number(((F = l.offset) == null ? void 0 : F.y) || 0);
        let Le = !1, xe = !1, He = !1;
        const Be = le - Number(((X = l.startCenter) == null ? void 0 : X.x) || le), Ue = me - Number(((H = l.startCenter) == null ? void 0 : H.y) || me);
        for (const je of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
          const At = (t === "cutout" ? tu() : Fr()).find((zt) => String((zt == null ? void 0 : zt.id) || "") === String(je.id || ""));
          if (!At || !St(At)) continue;
          const Nn = {
            x: Number(((J = je.center) == null ? void 0 : J.x) || 0) + Be,
            y: Number(((ie = je.center) == null ? void 0 : ie.y) || 0) + Ue
          };
          if (h.mode === "frame" && V) {
            const zt = ze(), Wt = hn(zt);
            if (!zt || !Wt) continue;
            const Vr = {
              x: Z((Nn.x - Wt.x) / Math.max(1, Wt.w), 0, 1),
              y: Z((Nn.y - Wt.y) / Math.max(1, Wt.h), 0, 1)
            }, es = Mu(zt, Vr);
            if (!es) continue;
            const xm = Ol(es);
            Sr(At, { yaw_deg: xm.yaw, pitch_deg: xm.pitch });
          } else if (h.mode === "unwrap") {
            const zt = Fi(), Wt = Z((Nn.x - zt.x) / Math.max(zt.w, 1), 0, 1), Vr = Z((Nn.y - zt.y) / Math.max(zt.h, 1), 0, 1);
            Sr(At, { yaw_deg: Ht(Wt * 360 - 180), pitch_deg: Z(90 - Vr * 180, -90, 90) });
          } else {
            const zt = gu(Nn.x, Nn.y), Wt = Ol(zt);
            Sr(At, { yaw_deg: Wt.yaw, pitch_deg: Wt.pitch });
          }
          Le = !0;
        }
        for (const je of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
          const At = {
            x: Number(((fe = je.center) == null ? void 0 : fe.x) || 0) + Be,
            y: Number(((ye = je.center) == null ? void 0 : ye.y) || 0) + Ue
          }, Nn = h.mode === "frame" ? (() => {
            const Wt = ze();
            return Wt ? Pr(At, Wt, performance.now()) : null;
          })() : Nr(At, performance.now()), zt = je.centerUv || null;
          if (Nn && zt) {
            const Wt = sr(Number(Nn.u || 0), Number(zt.u || 0)), Vr = Number(Nn.v || 0) - Number(zt.v || 0);
            Pp(je.id, Wt, Vr, je.snapshot, je.layerKind, je.frameSnapshot) && (Le = !0, xe = !0);
          }
        }
        for (const je of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
          const At = {
            x: Number(((ce = je.center) == null ? void 0 : ce.x) || 0) + Be,
            y: Number(((Ne = je.center) == null ? void 0 : Ne.y) || 0) + Ue
          }, Nn = h.mode === "frame" ? (() => {
            const Wt = ze();
            return Wt ? Pr(At, Wt, performance.now()) : null;
          })() : Nr(At, performance.now()), zt = je.centerUv || null;
          if (Nn && zt) {
            const Wt = sr(Number(Nn.u || 0), Number(zt.u || 0)), Vr = Number(Nn.v || 0) - Number(zt.v || 0);
            Cp(je.id, Wt, Vr, je.snapshot) && (Le = !0, He = !0);
          }
        }
        Le && (xe ? Mr({ rebuildPaintEngine: !1 }) : He ? Go() : $t(), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_stroke_group") {
        const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        Ap((Ye = l.item) == null ? void 0 : Ye.actionGroupId, me, 0, l.snapshot, (qe = l.item) == null ? void 0 : qe.layerKind, l.frameSnapshot) && (Mr({ rebuildPaintEngine: !1 }), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "rotate_stroke_group") {
        let le = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * ho;
        i.shiftKey && (le = Math.round(le / 45) * 45), Ap((lt = l.item) == null ? void 0 : lt.actionGroupId, 1, le, l.snapshot, (be = l.item) == null ? void 0 : be.layerKind, l.frameSnapshot) && (Mr({ rebuildPaintEngine: !1 }), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "marquee_select") {
        l.current = s, ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale") {
        const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Sr(l.item, { hFOV_deg: Z(l.startHFOV * me, 1, 179), vFOV_deg: Z(l.startVFOV * me, 1, 179) }), ar(l.item) || (l.item.aspect_id = po(l.item)), St(l.item) && $t(), ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_x") {
        const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Sr(l.item, { hFOV_deg: Z(l.startHFOV * me, 1, 179) }), ar(l.item) || (l.item.aspect_id = po(l.item)), St(l.item) && $t(), ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_y") {
        const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Sr(l.item, { vFOV_deg: Z(l.startVFOV * me, 1, 179) }), ar(l.item) || (l.item.aspect_id = po(l.item)), St(l.item) && $t(), ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "rotate") {
        let me = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * ho, Le = l.startRot - me;
        i.shiftKey && (Le = Math.round(Le / 45) * 45), Sr(l.item, { [St(l.item) ? "rot_deg" : "roll_deg"]: Le }), St(l.item) && $t(), ae({ localOnly: !0 });
      }
    }
  }, O.onpointerup = () => {
    var s, l, f, p, m, g, w;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, mt(h.pointerPos), Ke();
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        em(i);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = h.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        zo();
        const S = Fu(h.interaction), I = !!h.interaction._hasCommittedSegments;
        if (S || I) {
          Mr();
          const M = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (M) {
            const F = Sn().find((X) => String((X == null ? void 0 : X.actionGroupId) || "") === M);
            F && (F.frame = null);
          }
          const C = Qn();
          C && (S ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(C), ph()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, C) : h.paintEngine.cancelActiveStroke(C)), Qe(), Vn(), Ve(), Ke(), e.setDirtyCanvas(!0, !0), ae();
        } else {
          const M = Qn();
          M && h.paintEngine.cancelActiveStroke(M);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const S = qh(h.interaction.start, h.interaction.current), M = [
          ...t === "cutout" ? ku().filter((C) => !ln(C)) : [...Fr()],
          ...L1(),
          ...R1()
        ].filter((C) => Mw(S, tn(C)));
        G1(M, ((g = M[M.length - 1]) == null ? void 0 : g.id) || null), V && M.length && (h.cutoutAspectOpen = !1), Ve(), Ke(), ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((w = h.interaction) == null ? void 0 : w.kind))
        h.interaction.changed && (Qe(), it(), Ve());
      else if (h.interaction && h.interaction.kind !== "view") {
        let S = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (S = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (S = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (S = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (S = !0), S && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? Mr({ rebuildPaintEngine: !0 }) : Go()), Qe(), Vn(), e.setDirtyCanvas(!0, !0), Ko(), Ke(), ae();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && eo(), zo(), i && i.kind === "view" && cn.endDrag(performance.now()), ii(), Ke(), mt(h.pointerPos), ae();
    }
  }, O.onpointercancel = () => {
    var i, s, l, f, p;
    if (!Ja()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = h.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        em(h.interaction);
        return;
      }
      if (((l = h.interaction) == null ? void 0 : l.kind) === "view" && cn.endDrag(performance.now()), ((f = h.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((p = h.interaction) == null ? void 0 : p.kind) === "paint_lasso_fill") {
        zo();
        const m = Qn();
        m && h.paintEngine.cancelActiveStroke(m);
      }
      h.interaction = null, zo(), ii(), mt(h.pointerPos), ae({ localOnly: !0 });
    }
  }, O.onlostpointercapture = () => {
    Ja();
  }, O.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, O.oncontextmenu = (i) => {
    (cr() || Eu()) && eP(du(), 2) && i.preventDefault();
  }, O.onmousemove = (i) => {
    const s = Di(i), l = pl(s, !0);
    h.interaction || (mt(s), l && h.mode === "frame" && h.primaryTool === "cursor" && ae({ localOnly: !0 }));
  }, O.onpointerleave = () => {
    h.interaction || Qh({ x: -1e6, y: -1e6 });
  }, O.onmouseleave = () => {
    pl(h.pointerPos, !1), mt(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && ae({ localOnly: !0 });
  }, O.onwheel = (i) => {
    if (h.mode === "frame") {
      const s = Di(i), l = lc(i);
      l && wn(), l && Eu() ? pw(s, -l) : l && uw(s, l) && ae({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (Ca(), cr()) {
        const s = lc(i);
        s && dv(Di(i), -s);
      } else cn.applyWheelEvent(i) && ae({ localOnly: !0 });
      i.preventDefault();
    }
  }, O.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Yi(!0));
  }, O.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Vt.depth = 0, Yi(!1);
    const l = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => Cr(p));
    l && Ph(l);
  };
  const nm = (i) => {
    t !== "stickers" && t !== "cutout" || r || Xc(i) && (Vt.depth += 1, Yi(!0), i.preventDefault());
  }, rm = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Vt.active && Xc(i) && Yi(!0), Vt.active && i.preventDefault());
  }, im = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Vt.active) return;
    Vt.depth = Math.max(0, Vt.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Vt.depth === 0 || s) && Yi(!1);
  }, om = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Vt.depth = 0, Yi(!1), Xc(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", nm, !0), window.addEventListener("dragover", rm, !0), window.addEventListener("dragleave", im, !0), window.addEventListener("drop", om, !0);
  function Du() {
    const { canUndo: i, canRedo: s } = Sh();
    Zo(A.toolButtons, "value", "undo", { disabled: !i }), Zo(A.toolButtons, "value", "redo", { disabled: !s });
  }
  const am = (i, s, l = !1) => {
    var I;
    wn();
    const f = V && h.mode === "frame" ? ze() : null, p = f || It(), m = f ? "shot" : Zs(), g = La();
    if (g && !tl(g) || !g && (!p || m === "stroke" || _n(p))) return;
    const w = (((I = A.sidePanel) == null ? void 0 : I.params) || []).find((M) => M.key === i);
    if (!w || w.enabled === !1) return;
    let S = Number(s);
    if (Number.isNaN(S) && (S = 0), (g || W) && nE.has(i) ? S = i === "scale" ? Math.max(S, h0) : S : S = Z(S, Number(w.min), Number(w.max)), i === "yaw_deg" && (S = Ht(S)), !g && W && i.startsWith("position_")) {
      fr(), zM(_.camera, h.frame, i, S), Ve(), ae(), l && Qe();
      return;
    }
    if (g) {
      GM(g, h.frame, i, S), $t(), Ve(), ae(), l && Qe();
      return;
    }
    i === "opacity" ? jM(p, h.frame, S / 100) : Sr(p, { [i]: S }), V && !ar(p) && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = po(p)), Ve(), ae(), l && Qe();
  };
  gt == null || gt.addEventListener("click", async (i) => {
    var f, p, m, g, w, S, I;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const M = Xn(s.getAttribute("data-coverage"));
      if (M === Xn(_.coverage)) return;
      _.coverage = M, h.coverage = M, d && (d.value = String(M)), a ? ee.backgroundDirty = !0 : (Vn(), lw({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ve(), Ke(), ae();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (f = A.sidePanel) == null ? void 0 : f.selectionPicker) != null && p.disabled) return;
      A.sidePanel.selectionPicker.open = !A.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      A.sidePanel.selectionPicker.open = !1;
      const M = String(s.getAttribute("data-selection-id") || "");
      let C = null;
      if (M && (t === "stickers" ? C = [...Fr(), ...R ? _.shots : []].find((F) => String((F == null ? void 0 : F.id) || "") === M) || null : C = ((m = Op().find((F) => {
        var X;
        return String(((X = F == null ? void 0 : F.item) == null ? void 0 : X.id) || "") === M;
      })) == null ? void 0 : m.item) || null), Rn(C || null), C && !pn(C)) {
        const F = sn(C);
        kp(Ht(Number(F.yaw_deg || 0)), Z(Number(F.pitch_deg || 0), -89.9, 89.9));
      }
      Ve(), Ke(), ae();
      return;
    }
    if (l === "copy-state-inline") {
      const M = It(), C = Zs();
      if (!M || C === "stroke" || lr().length > 1) return;
      const F = JSON.stringify(V && C !== "image" ? zp(M) : nv(sn(M)));
      try {
        await navigator.clipboard.writeText(F), (g = A.sidePanel) != null && g.copyStateButton && (A.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var X;
          (X = A.sidePanel) != null && X.copyStateButton && (A.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "toggle-visibility") {
      const M = String(s.getAttribute("data-visibility") || "");
      M === "panorama" ? h.showPanorama = !h.showPanorama : M === "objects" ? h.showObjects = !h.showObjects : M === "mask" && (h.showMask = !h.showMask), Ve(), ae();
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Iu(), Ve(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ae();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Iu(), Ve(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0), ae();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, Iu(), Ve(), (I = e.setDirtyCanvas) == null || I.call(e, !0, !0), ae();
      return;
    }
    if (l === "close-preview") {
      Yo();
      return;
    }
    if (l === "cancel-close") {
      Yo();
      return;
    }
    l === "save-close" && (aw(), Yo());
  }), gt == null || gt.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && am(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), gt == null || gt.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && am(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Lu = () => Tr();
  Lu(), D.addEventListener("click", (i) => {
    var I, M, C, F, X;
    if ((M = (I = i.target) == null ? void 0 : I.matches) != null && M.call(I, "[data-confirm-overlay]")) {
      const H = (C = A.confirmDialog) == null ? void 0 : C.resolve;
      A.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, H == null || H(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      uv(s.getAttribute("data-space-mode"));
      return;
    }
    const l = i.target.closest("[data-gizmo-mode]");
    if (l) {
      h.gizmoMode = l.getAttribute("data-gizmo-mode"), ee.backgroundDirty = !0, Ke(), ae({ localOnly: !0 });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.getAttribute("aria-disabled") === "true") return;
      const H = h.mode;
      h.mode = String(f.getAttribute("data-view") || "pano"), V && h.mode === "frame" && (H !== "frame" && (ee.frameSafeRect = null), Ve(), Ke()), Ya(), ii(), ae();
      return;
    }
    const p = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (p && !r) {
      if (p.matches("[data-tool-mode]")) {
        const H = String(p.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = H, (H === "paint" || H === "mask") && Da({ preservePanelValues: !0 }), Kn(), Ve(), Ke(), ae();
        return;
      }
      if (p.matches("[data-tool-ui-action]")) {
        const H = String(p.getAttribute("data-tool-ui-action") || "");
        if ((H === "undo" || H === "redo") && p.disabled) return;
        H === "undo" ? Pu(-1) : H === "redo" ? Pu(1) : H === "clear" ? Z_() : H === "add" || H === "add-image" ? V_() : H === "add-world" ? $_() : H === "add-or-look" ? U_() : H === "add-camera" && Y_();
        return;
      }
      if (p.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const H = String(p.getAttribute("data-paint-tool") || "pen");
        h.paintTool = H, Da({ preservePanelValues: !0 }), Wn[H] && (h.activeBrushPresetId = H), Kn(), Ve(), Ke(), ae();
        return;
      }
      if (p.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(p.getAttribute("data-mask-tool") || "pen"), Da({ preservePanelValues: !0 }), Kn(), Ve(), Ke(), ae();
        return;
      }
      if (p.matches("[data-paint-layer-clear-current]")) {
        const H = String(p.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Q_(H);
        return;
      }
      if (p.matches("[data-paint-color-swatch]")) {
        const H = Jl.find((J) => J.id === p.getAttribute("data-paint-color-swatch"));
        if (!H) return;
        h.paintColor = er(H.color), Rt(!0), Kn();
        return;
      }
      if (p.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), Oe && !Oe.hidden ? Rt(!0) : Tn(), Kn();
        return;
      }
    }
    const m = String(((F = p == null ? void 0 : p.getAttribute) == null ? void 0 : F.call(p, "data-action")) || "");
    if (m === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ae instanceof HTMLVideoElement)) return;
      xt.resumeAfterScrub = !1, Au();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), Dp(), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (m === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ae instanceof HTMLVideoElement)) return;
      const H = !A.videoTransport.loop;
      A.videoTransport.loop = H, Ae.loop = H, Ci({
        hasAudio: A.videoTransport.hasAudio,
        loop: H,
        muted: Ae.muted,
        volume: Number(Ae.volume ?? A.videoTransport.volume ?? 1)
      }), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (!r) {
      if (m === "frame-aspect") {
        A.frameRail.aspectOpen = !A.frameRail.aspectOpen;
        return;
      }
      if (m === "frame-aspect-set") {
        const H = h.mode === "frame" ? ze() : null;
        if (!H || H.locked === !0) return;
        Ch(H, String(p.getAttribute("data-aspect") || "1:1")), A.frameRail.aspectOpen = !1, Ko(), Qe(), it(), ii(), Ve(), Ke(), ae();
        return;
      }
      if (m === "frame-aspect-custom") {
        const H = h.mode === "frame" ? ze() : null, J = p.getAttribute("data-custom-width"), ie = p.getAttribute("data-custom-height");
        if (!H || !rw(H, J, ie)) return;
        A.frameRail.aspectOpen = !1, Ko(), Qe(), it(), ii(), ae();
        return;
      }
      if (m === "frame-rotate-90") {
        const H = h.mode === "frame" ? ze() : null;
        if (!H || H.locked === !0) return;
        Eh(H), A.frameRail.aspectOpen = !1, Ko(), Qe(), it(), ii(), ae();
        return;
      }
      if (m === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Ke(), ae();
        return;
      }
      if (m === "aspect-set") {
        const H = It();
        if (!H) return;
        const J = String(p.getAttribute("data-aspect") || "1:1");
        Ch(H, J), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ko(), Qe(), it(), Ke(), ae();
        return;
      }
      if (m === "rotate-90") {
        const H = It();
        if (!H || qi()) return;
        Eh(H), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ko(), Qe(), it(), Ke(), ae();
        return;
      }
      if (m === "bring-front") {
        iw();
        return;
      }
      if (m === "send-back") {
        ow();
        return;
      }
      if (m === "duplicate") {
        ew();
        return;
      }
      if (m === "replace-image") {
        K_();
        return;
      }
      if (m === "toggle-lock") {
        H1();
        return;
      }
      if (m === "back-initial") {
        Y1();
        return;
      }
      if (m === "toggle-visible") {
        U1();
        return;
      }
      if (m === "delete") {
        Oh();
        return;
      }
    }
    if (m === "reset-view") {
      if (h.mode === "frame") return;
      Xi(
        { position: $o(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((X = Lr()) == null ? void 0 : X.radius) || Kr },
        { mode: ql(h.spaceMode, h.viewTransition), moved: !1 }
      );
      return;
    }
    if (m === "frame-view") {
      if (!cr() || ql(h.spaceMode, h.viewTransition) !== "6dof") return;
      fv();
      return;
    }
    if (m === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, TE(e == null ? void 0 : e.id, h.showGrid), Lu(), ae();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Lw();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const H = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = H, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = H ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), fm(), ae();
      return;
    }
    const g = i.target.closest("[data-paint-history-index]");
    if (!g) return;
    const w = Number(g.getAttribute("data-paint-history-index")), S = h.customPaintHistory[w];
    S && (h.customPaintColor = er(S), h.paintColor = er(S), Kn());
  }), D.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      an.playing && (xt.resumeAfterScrub = !0), an.seek(uo(Number(s.value || 0), el()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      const m = Z(Number(l.value || 0), 0, 1);
      Ae.volume = m, Ae.muted = m <= 1e-4, Ci({
        hasAudio: A.videoTransport.hasAudio,
        muted: Ae.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), g = Li(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[g] = m, Kn(), bw();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: Z(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = er(m), h.paintColor = er(m), Kn();
    }
  }), D.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Ae instanceof HTMLVideoElement)) return;
      xt.resumeAfterScrub && an.play(), xt.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && hl();
  }), D.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && hl();
  }), D.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && hl();
  }), D.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && hl();
  }), D.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !D.contains(s) || Yt.target !== s && (Yt.target = s, Yt.timer && clearTimeout(Yt.timer), Yt.timer = window.setTimeout(() => {
      Yt.target === s && Pw(s);
    }, 220));
  }), D.addEventListener("pointerout", (i) => {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || Yt.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || eo();
  }), D.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || eo();
  });
  const Tw = (i, s) => {
    var w;
    if (!Ie) return;
    const l = Ie.getBoundingClientRect(), f = Z((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - Z((s - l.top) / Math.max(1, l.height), 0, 1), m = Cf(h.customPaintColor), g = { ...Af(m.h, f, p), a: Number(((w = h.customPaintColor) == null ? void 0 : w.a) ?? 1) };
    h.customPaintColor = er(g), h.paintColor = er(g), Kn();
  }, Dw = (i) => {
    var m;
    if (!Ge) return;
    const s = Ge.getBoundingClientRect(), l = Z((i - s.left) / Math.max(1, s.width), 0, 1), f = Cf(h.customPaintColor), p = { ...Af(l, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = er(p), h.paintColor = er(p), Kn();
  }, sm = (i, s) => {
    const l = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === l && s(m);
    }, p = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  Ie && (Ie.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), sm(i, (s) => Tw(s.clientX, s.clientY));
  }), Ge && (Ge.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), sm(i, (s) => Dw(s.clientX));
  }), D.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", f = (p = A.confirmDialog) == null ? void 0 : p.resolve;
    A.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(l);
  });
  const lm = () => {
    const i = !!h.fullscreen;
    Zo(A.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? ke.fullscreen_close : ke.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, ml = (i) => {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, D.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), Lu(), lm(), Oo(), ae());
  }, cm = () => document.fullscreenElement === q, Lw = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        ml(!h.fullscreen);
        return;
      }
      cm() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = q.requestFullscreen) == null ? void 0 : i.call(q));
    } catch {
      ml(!h.fullscreen);
    }
  }, um = () => {
    document.fullscreenEnabled && ml(cm());
  };
  document.addEventListener("fullscreenchange", um), lm();
  const fm = () => {
    const i = !!h.outputPreviewExpanded;
    A.outputPreviewToggle.icon = i ? ke.fullscreen_close : ke.fullscreen, A.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", A.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  fm();
  const Ru = e.onConnectionsChange;
  let Vu = null, dm = () => {
  };
  !r && t === "stickers" && (dm = o1(e, (i = "sync") => {
    i === "executed" && (_E(en, Cl), Ii(), P && L_()), jp(i);
  }, { editor: !0 }), Vu = function(...s) {
    typeof Ru == "function" && Ru.apply(this, s), Ii(), vi(this, "connections");
  }, e.onConnectionsChange = Vu), !r && !E && b0.set(String(e.id ?? "0"), () => Zp());
  let Uo = null;
  const Yo = async () => Uo || (Uo = (async () => {
    var i, s, l, f, p, m, g, w;
    return b0.delete(String(e.id ?? "0")), hw(), r || Vn(), document.fullscreenElement === q && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", um), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Th && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (w = (g = (m = Ir) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || w.call(g, !0, !0), eo(), O_(), Ae instanceof HTMLVideoElement && Ae.pause(), ni.forEach((S) => {
      try {
        S();
      } catch {
      }
    }), Te.dispose(), Yi(!1), window.removeEventListener("keydown", pm, !0), window.removeEventListener("keydown", hm, !0), window.removeEventListener("keydown", gm, !0), window.removeEventListener("keyup", ym, !0), window.removeEventListener("keydown", gl, !0), window.removeEventListener("keyup", gl, !0), window.removeEventListener("blur", bm), window.removeEventListener("keydown", vm, !0), window.removeEventListener("dragenter", nm, !0), window.removeEventListener("dragover", rm, !0), window.removeEventListener("dragleave", im, !0), window.removeEventListener("drop", om, !0), !r && t === "stickers" && (e.onConnectionsChange === Vu && (e.onConnectionsChange = Ru), dm()), de.unmount(), L.remove(), sw(), Uo = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Uo = null, !1)), Uo), pm = (i) => {
    var s, l, f, p, m;
    if (i.key === "Escape") {
      if (Ja()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (h.fullscreen && document.fullscreenElement === q) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), ml(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Yo();
    }
  }, hm = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || f === 46) && !(s === "Backspace" || l === "Backspace" || f === 8)) return;
    const g = i.target, w = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (w === "INPUT" || w === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (We.selection) {
      D_(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if (tw()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    It() && (Oh(), i.preventDefault(), i.stopPropagation());
  }, mm = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !k || !A.timeline.visible || A.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !q.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !tE.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, gm = (i) => {
    mm(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Au());
  }, ym = (i) => {
    mm(i) && (i.preventDefault(), i.stopPropagation());
  }, gl = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === l || (h.marqueeModifier = s, h.altModifier = l, ai(), mt(h.pointerPos));
  }, bm = () => {
    h.marqueeModifier = !1, h.altModifier = !1, ai(), mt(h.pointerPos);
  }, vm = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: g } = Sh();
    i.shiftKey && !g || !i.shiftKey && !m || (Pu(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", pm, !0), window.addEventListener("keydown", hm, !0), window.addEventListener("keydown", gm, !0), window.addEventListener("keyup", ym, !0), window.addEventListener("keydown", gl, !0), window.addEventListener("keyup", gl, !0), window.addEventListener("blur", bm), window.addEventListener("keydown", vm, !0), q.addEventListener("pointerdown", (i) => {
    i.target === q && Yo();
  });
  function Rr(i, s, { rollbackState: l = !1 } = {}) {
    let f = "";
    try {
      l && (f = JSON.stringify(_)), s();
    } catch (p) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, m), r || Vn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      A.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  Rr("cutout-focus", sv), !r && t === "stickers" && Rr("external-sticker-sync", () => jp("open"), { rollbackState: !0 }), W_().catch((i) => {
    A.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), Rr("history", Qe), Rr("undo-redo", Du), Rr("paint-ui", Kn), Rr("side-panel", Ve), Rr("look-at-frame", fu), Rr("video-source", Ii), Rr("canvas-size", vh), Rr("cursor", () => mt(h.pointerPos)), ae(), ee.rafId = requestAnimationFrame(wh);
}
Ir.registerExtension(uP({
  app: Ir,
  openEditor: zE,
  attachStickers: kA,
  attachCutout: MA,
  attachPreview: SA,
  restoreOutput: uA,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: sE
}));
