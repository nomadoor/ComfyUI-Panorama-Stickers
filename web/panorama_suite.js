import * as Fl from "../../scripts/app.js";
import { app as Ir } from "../../scripts/app.js";
import { api as Jt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function wd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ct = {}, la = [], Xr = () => {
}, x0 = () => !1, Ac = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Cc = (e) => e.startsWith("onUpdate:"), Fn = Object.assign, xd = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Lw = Object.prototype.hasOwnProperty, bt = (e, t) => Lw.call(e, t), Ze = Array.isArray, ca = (e) => Gs(e) === "[object Map]", S0 = (e) => Gs(e) === "[object Set]", xm = (e) => Gs(e) === "[object Date]", nt = (e) => typeof e == "function", nn = (e) => typeof e == "string", Zr = (e) => typeof e == "symbol", Pt = (e) => e !== null && typeof e == "object", k0 = (e) => (Pt(e) || nt(e)) && nt(e.then) && nt(e.catch), M0 = Object.prototype.toString, Gs = (e) => M0.call(e), Rw = (e) => Gs(e).slice(8, -1), N0 = (e) => Gs(e) === "[object Object]", Sd = (e) => nn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vs = /* @__PURE__ */ wd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ic = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Vw = /-\w/g, Hn = Ic(
  (e) => e.replace(Vw, (t) => t.slice(1).toUpperCase())
), $w = /\B([A-Z])/g, Po = Ic(
  (e) => e.replace($w, "-$1").toLowerCase()
), Oc = Ic((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ru = Ic(
  (e) => e ? `on${Oc(e)}` : ""
), Ur = (e, t) => !Object.is(e, t), Tl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, P0 = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, kd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Sm;
const Ec = () => Sm || (Sm = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mt(e) {
  if (Ze(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = nn(r) ? Gw(r) : Mt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (nn(e) || Pt(e))
    return e;
}
const zw = /;(?![^(]*\))/g, jw = /:([^]+)/, Hw = /\/\*[^]*?\*\//g;
function Gw(e) {
  const t = {};
  return e.replace(Hw, "").split(zw).forEach((n) => {
    if (n) {
      const r = n.split(jw);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function ct(e) {
  let t = "";
  if (nn(e))
    t = e;
  else if (Ze(e))
    for (let n = 0; n < e.length; n++) {
      const r = ct(e[n]);
      r && (t += r + " ");
    }
  else if (Pt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Kw = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ww = /* @__PURE__ */ wd(Kw);
function A0(e) {
  return !!e || e === "";
}
function Bw(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Md(e[r], t[r]);
  return n;
}
function Md(e, t) {
  if (e === t) return !0;
  let n = xm(e), r = xm(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Zr(e), r = Zr(t), n || r)
    return e === t;
  if (n = Ze(e), r = Ze(t), n || r)
    return n && r ? Bw(e, t) : !1;
  if (n = Pt(e), r = Pt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !Md(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const C0 = (e) => !!(e && e.__v_isRef === !0), tt = (e) => nn(e) ? e : e == null ? "" : Ze(e) || Pt(e) && (e.toString === M0 || !nt(e.toString)) ? C0(e) ? tt(e.value) : JSON.stringify(e, I0, 2) : String(e), I0 = (e, t) => C0(t) ? I0(e, t.value) : ca(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Vu(r, a) + " =>"] = o, n),
    {}
  )
} : S0(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Vu(n))
} : Zr(t) ? Vu(t) : Pt(t) && !Ze(t) && !N0(t) ? String(t) : t, Vu = (e, t = "") => {
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
class Uw {
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
function Yw() {
  return Yn;
}
let Ot;
const $u = /* @__PURE__ */ new WeakSet();
class O0 {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Yn && Yn.active && Yn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, $u.has(this) && ($u.delete(this), this.trigger()));
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
    this.flags |= 2, km(this), T0(this);
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
        Ad(t);
      this.deps = this.depsTail = void 0, km(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? $u.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Af(this) && this.run();
  }
  get dirty() {
    return Af(this);
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
function Nd() {
  E0++;
}
function Pd() {
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
    r.version === -1 ? (r === n && (n = o), Ad(r), Xw(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Af(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (L0(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function L0(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Cs) || (e.globalVersion = Cs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Af(e))))
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
function Ad(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Ad(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xw(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Or = !0;
const R0 = [];
function Si() {
  R0.push(Or), Or = !1;
}
function ki() {
  const e = R0.pop();
  Or = e === void 0 ? !0 : e;
}
function km(e) {
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
let Cs = 0;
class qw {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Cd {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Ot || !Or || Ot === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Ot)
      n = this.activeLink = new qw(Ot, this), Ot.deps ? (n.prevDep = Ot.depsTail, Ot.depsTail.nextDep = n, Ot.depsTail = n) : Ot.deps = Ot.depsTail = n, V0(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Ot.depsTail, n.nextDep = void 0, Ot.depsTail.nextDep = n, Ot.depsTail = n, Ot.deps === n && (Ot.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Cs++, this.notify(t);
  }
  notify(t) {
    Nd();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Pd();
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
const Cf = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ Symbol(
  ""
), If = /* @__PURE__ */ Symbol(
  ""
), Is = /* @__PURE__ */ Symbol(
  ""
);
function An(e, t, n) {
  if (Or && Ot) {
    let r = Cf.get(e);
    r || Cf.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Cd()), o.map = r, o.key = n), o.track();
  }
}
function bi(e, t, n, r, o, a) {
  const c = Cf.get(e);
  if (!c) {
    Cs++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Nd(), t === "clear")
    c.forEach(u);
  else {
    const d = Ze(e), b = d && Sd(n);
    if (d && n === "length") {
      const y = Number(r);
      c.forEach((v, x) => {
        (x === "length" || x === Is || !Zr(x) && x >= y) && u(v);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), b && u(c.get(Is)), t) {
        case "add":
          d ? b && u(c.get("length")) : (u(c.get(yo)), ca(e) && u(c.get(If)));
          break;
        case "delete":
          d || (u(c.get(yo)), ca(e) && u(c.get(If)));
          break;
        case "set":
          ca(e) && u(c.get(yo));
          break;
      }
  }
  Pd();
}
function Xo(e) {
  const t = /* @__PURE__ */ yt(e);
  return t === e ? t : (An(t, "iterate", Is), /* @__PURE__ */ yr(e) ? t : t.map(Er));
}
function Fc(e) {
  return An(e = /* @__PURE__ */ yt(e), "iterate", Is), e;
}
function Wr(e, t) {
  return /* @__PURE__ */ Mi(e) ? _a(/* @__PURE__ */ bo(e) ? Er(t) : t) : Er(t);
}
const Jw = {
  __proto__: null,
  [Symbol.iterator]() {
    return zu(this, Symbol.iterator, (e) => Wr(this, e));
  },
  concat(...e) {
    return Xo(this).concat(
      ...e.map((t) => Ze(t) ? Xo(t) : t)
    );
  },
  entries() {
    return zu(this, "entries", (e) => (e[1] = Wr(this, e[1]), e));
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
    return ju(this, "includes", e);
  },
  indexOf(...e) {
    return ju(this, "indexOf", e);
  },
  join(e) {
    return Xo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return ju(this, "lastIndexOf", e);
  },
  map(e, t) {
    return ci(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ns(this, "pop");
  },
  push(...e) {
    return ns(this, "push", e);
  },
  reduce(e, ...t) {
    return Mm(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Mm(this, "reduceRight", e, t);
  },
  shift() {
    return ns(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ci(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ns(this, "splice", e);
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
    return ns(this, "unshift", e);
  },
  values() {
    return zu(this, "values", (e) => Wr(this, e));
  }
};
function zu(e, t, n) {
  const r = Fc(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ yr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const Zw = Array.prototype;
function ci(e, t, n, r, o, a) {
  const c = Fc(e), u = c !== e && !/* @__PURE__ */ yr(e), d = c[t];
  if (d !== Zw[t]) {
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
function Mm(e, t, n, r) {
  const o = Fc(e), a = o !== e && !/* @__PURE__ */ yr(e);
  let c = n, u = !1;
  o !== e && (a ? (u = r.length === 0, c = function(b, y, v) {
    return u && (u = !1, b = Wr(e, b)), n.call(this, b, Wr(e, y), v, e);
  }) : n.length > 3 && (c = function(b, y, v) {
    return n.call(this, b, y, v, e);
  }));
  const d = o[t](c, ...r);
  return u ? Wr(e, d) : d;
}
function ju(e, t, n) {
  const r = /* @__PURE__ */ yt(e);
  An(r, "iterate", Is);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Ed(n[0]) ? (n[0] = /* @__PURE__ */ yt(n[0]), r[t](...n)) : o;
}
function ns(e, t, n = []) {
  Si(), Nd();
  const r = (/* @__PURE__ */ yt(e))[t].apply(e, n);
  return Pd(), ki(), r;
}
const Qw = /* @__PURE__ */ wd("__proto__,__v_isRef,__isVue"), $0 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zr)
);
function ex(e) {
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
      return r === (o ? a ? ux : K0 : a ? G0 : H0).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Ze(t);
    if (!o) {
      let d;
      if (c && (d = Jw[n]))
        return d;
      if (n === "hasOwnProperty")
        return ex;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ En(t) ? t : r
    );
    if ((Zr(n) ? $0.has(n) : Qw(n)) || (o || An(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ En(u)) {
      const d = c && Sd(n) ? u : u.value;
      return o && Pt(d) ? /* @__PURE__ */ Ef(d) : d;
    }
    return Pt(u) ? o ? /* @__PURE__ */ Ef(u) : /* @__PURE__ */ Na(u) : u;
  }
}
class j0 extends z0 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = Ze(t) && Sd(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ Mi(a);
      if (!/* @__PURE__ */ yr(r) && !/* @__PURE__ */ Mi(r) && (a = /* @__PURE__ */ yt(a), r = /* @__PURE__ */ yt(r)), !c && /* @__PURE__ */ En(a) && !/* @__PURE__ */ En(r))
        return b || (a.value = r), !0;
    }
    const u = c ? Number(n) < t.length : bt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ En(t) ? t : o
    );
    return t === /* @__PURE__ */ yt(o) && (u ? Ur(r, a) && bi(t, "set", n, r) : bi(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = bt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && bi(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Zr(n) || !$0.has(n)) && An(t, "has", n), r;
  }
  ownKeys(t) {
    return An(
      t,
      "iterate",
      Ze(t) ? "length" : yo
    ), Reflect.ownKeys(t);
  }
}
class tx extends z0 {
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
const nx = /* @__PURE__ */ new j0(), rx = /* @__PURE__ */ new tx(), ix = /* @__PURE__ */ new j0(!0);
const Of = (e) => e, gl = (e) => Reflect.getPrototypeOf(e);
function ox(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ yt(o), c = ca(a), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, b = o[e](...r), y = n ? Of : t ? _a : Er;
    return !t && An(
      a,
      "iterate",
      d ? If : yo
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
function yl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ax(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ yt(a), u = /* @__PURE__ */ yt(o);
      e || (Ur(o, u) && An(c, "get", o), An(c, "get", u));
      const { has: d } = gl(c), b = t ? Of : e ? _a : Er;
      if (d.call(c, o))
        return b(a.get(o));
      if (d.call(c, u))
        return b(a.get(u));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && An(/* @__PURE__ */ yt(o), "iterate", yo), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ yt(a), u = /* @__PURE__ */ yt(o);
      return e || (Ur(o, u) && An(c, "has", o), An(c, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const c = this, u = c.__v_raw, d = /* @__PURE__ */ yt(u), b = t ? Of : e ? _a : Er;
      return !e && An(d, "iterate", yo), u.forEach((y, v) => o.call(a, b(y), b(v), c));
    }
  };
  return Fn(
    n,
    e ? {
      add: yl("add"),
      set: yl("set"),
      delete: yl("delete"),
      clear: yl("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ yt(this), c = gl(a), u = /* @__PURE__ */ yt(o), d = !t && !/* @__PURE__ */ yr(o) && !/* @__PURE__ */ Mi(o) ? u : o;
        return c.has.call(a, d) || Ur(o, d) && c.has.call(a, o) || Ur(u, d) && c.has.call(a, u) || (a.add(d), bi(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ yr(a) && !/* @__PURE__ */ Mi(a) && (a = /* @__PURE__ */ yt(a));
        const c = /* @__PURE__ */ yt(this), { has: u, get: d } = gl(c);
        let b = u.call(c, o);
        b || (o = /* @__PURE__ */ yt(o), b = u.call(c, o));
        const y = d.call(c, o);
        return c.set(o, a), b ? Ur(a, y) && bi(c, "set", o, a) : bi(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ yt(this), { has: c, get: u } = gl(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ yt(o), d = c.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && bi(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ yt(this), a = o.size !== 0, c = o.clear();
        return a && bi(
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
    n[o] = ox(o, e, t);
  }), n;
}
function Id(e, t) {
  const n = ax(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    bt(n, o) && o in r ? n : r,
    o,
    a
  );
}
const sx = {
  get: /* @__PURE__ */ Id(!1, !1)
}, lx = {
  get: /* @__PURE__ */ Id(!1, !0)
}, cx = {
  get: /* @__PURE__ */ Id(!0, !1)
};
const H0 = /* @__PURE__ */ new WeakMap(), G0 = /* @__PURE__ */ new WeakMap(), K0 = /* @__PURE__ */ new WeakMap(), ux = /* @__PURE__ */ new WeakMap();
function fx(e) {
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
function dx(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : fx(Rw(e));
}
// @__NO_SIDE_EFFECTS__
function Na(e) {
  return /* @__PURE__ */ Mi(e) ? e : Od(
    e,
    !1,
    nx,
    sx,
    H0
  );
}
// @__NO_SIDE_EFFECTS__
function px(e) {
  return Od(
    e,
    !1,
    ix,
    lx,
    G0
  );
}
// @__NO_SIDE_EFFECTS__
function Ef(e) {
  return Od(
    e,
    !0,
    rx,
    cx,
    K0
  );
}
function Od(e, t, n, r, o) {
  if (!Pt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = dx(e);
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
function bo(e) {
  return /* @__PURE__ */ Mi(e) ? /* @__PURE__ */ bo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Mi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Ed(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function yt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ yt(t) : e;
}
function hx(e) {
  return !bt(e, "__v_skip") && Object.isExtensible(e) && P0(e, "__v_skip", !0), e;
}
const Er = (e) => Pt(e) ? /* @__PURE__ */ Na(e) : e, _a = (e) => Pt(e) ? /* @__PURE__ */ Ef(e) : e;
// @__NO_SIDE_EFFECTS__
function En(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Zt(e) {
  return mx(e, !1);
}
function mx(e, t) {
  return /* @__PURE__ */ En(e) ? e : new gx(e, t);
}
class gx {
  constructor(t, n) {
    this.dep = new Cd(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ yt(t), this._value = n ? t : Er(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ yr(t) || /* @__PURE__ */ Mi(t);
    t = r ? t : /* @__PURE__ */ yt(t), Ur(t, n) && (this._rawValue = t, this._value = r ? t : Er(t), this.dep.trigger());
  }
}
function ot(e) {
  return /* @__PURE__ */ En(e) ? e.value : e;
}
const yx = {
  get: (e, t, n) => t === "__v_raw" ? e : ot(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ En(o) && !/* @__PURE__ */ En(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function W0(e) {
  return /* @__PURE__ */ bo(e) ? e : new Proxy(e, yx);
}
class bx {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Cd(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Cs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
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
function vx(e, t, n = !1) {
  let r, o;
  return nt(e) ? r = e : (r = e.get, o = e.set), new bx(r, o, n);
}
const bl = {}, Ql = /* @__PURE__ */ new WeakMap();
let uo;
function _x(e, t = !1, n = uo) {
  if (n) {
    let r = Ql.get(n);
    r || Ql.set(n, r = []), r.push(e);
  }
}
function wx(e, t, n = Ct) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: u, call: d } = n, b = (T) => o ? T : /* @__PURE__ */ yr(T) || o === !1 || o === 0 ? vi(T, 1) : vi(T);
  let y, v, x, N, k = !1, A = !1;
  if (/* @__PURE__ */ En(e) ? (v = () => e.value, k = /* @__PURE__ */ yr(e)) : /* @__PURE__ */ bo(e) ? (v = () => b(e), k = !0) : Ze(e) ? (A = !0, k = e.some((T) => /* @__PURE__ */ bo(T) || /* @__PURE__ */ yr(T)), v = () => e.map((T) => {
    if (/* @__PURE__ */ En(T))
      return T.value;
    if (/* @__PURE__ */ bo(T))
      return b(T);
    if (nt(T))
      return d ? d(T, 2) : T();
  })) : nt(e) ? t ? v = d ? () => d(e, 2) : e : v = () => {
    if (x) {
      Si();
      try {
        x();
      } finally {
        ki();
      }
    }
    const T = uo;
    uo = y;
    try {
      return d ? d(e, 3, [N]) : e(N);
    } finally {
      uo = T;
    }
  } : v = Xr, t && o) {
    const T = v, _ = o === !0 ? 1 / 0 : o;
    v = () => vi(T(), _);
  }
  const E = Yw(), L = () => {
    y.stop(), E && E.active && xd(E.effects, y);
  };
  if (a && t) {
    const T = t;
    t = (..._) => {
      T(..._), L();
    };
  }
  let K = A ? new Array(e.length).fill(bl) : bl;
  const G = (T) => {
    if (!(!(y.flags & 1) || !y.dirty && !T))
      if (t) {
        const _ = y.run();
        if (o || k || (A ? _.some(($, B) => Ur($, K[B])) : Ur(_, K))) {
          x && x();
          const $ = uo;
          uo = y;
          try {
            const B = [
              _,
              // pass undefined as the old value when it's changed for the first time
              K === bl ? void 0 : A && K[0] === bl ? [] : K,
              N
            ];
            K = _, d ? d(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            uo = $;
          }
        }
      } else
        y.run();
  };
  return u && u(G), y = new O0(v), y.scheduler = c ? () => c(G, !1) : G, N = (T) => _x(T, !1, y), x = y.onStop = () => {
    const T = Ql.get(y);
    if (T) {
      if (d)
        d(T, 4);
      else
        for (const _ of T) _();
      Ql.delete(y);
    }
  }, t ? r ? G(!0) : K = y.run() : c ? c(G.bind(null, !0), !0) : y.run(), L.pause = y.pause.bind(y), L.resume = y.resume.bind(y), L.stop = L, L;
}
function vi(e, t = 1 / 0, n) {
  if (t <= 0 || !Pt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ En(e))
    vi(e.value, t, n);
  else if (Ze(e))
    for (let r = 0; r < e.length; r++)
      vi(e[r], t, n);
  else if (S0(e) || ca(e))
    e.forEach((r) => {
      vi(r, t, n);
    });
  else if (N0(e)) {
    for (const r in e)
      vi(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && vi(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ks(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Tc(o, t, n);
  }
}
function Qr(e, t, n, r) {
  if (nt(e)) {
    const o = Ks(e, t, n, r);
    return o && k0(o) && o.catch((a) => {
      Tc(a, t, n);
    }), o;
  }
  if (Ze(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Qr(e[a], t, n, r));
    return o;
  }
}
function Tc(e, t, n, r = !0) {
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
      Si(), Ks(a, null, 10, [
        e,
        d,
        b
      ]), ki();
      return;
    }
  }
  xx(e, n, o, r, c);
}
function xx(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const jn = [];
let Gr = -1;
const ua = [];
let zi = null, ta = 0;
const B0 = /* @__PURE__ */ Promise.resolve();
let ec = null;
function Dc(e) {
  const t = ec || B0;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Sx(e) {
  let t = Gr + 1, n = jn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = jn[r], a = Os(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Fd(e) {
  if (!(e.flags & 1)) {
    const t = Os(e), n = jn[jn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Os(n) ? jn.push(e) : jn.splice(Sx(t), 0, e), e.flags |= 1, U0();
  }
}
function U0() {
  ec || (ec = B0.then(X0));
}
function kx(e) {
  Ze(e) ? ua.push(...e) : zi && e.id === -1 ? zi.splice(ta + 1, 0, e) : e.flags & 1 || (ua.push(e), e.flags |= 1), U0();
}
function Nm(e, t, n = Gr + 1) {
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
      (n, r) => Os(n) - Os(r)
    );
    if (ua.length = 0, zi) {
      zi.push(...t);
      return;
    }
    for (zi = t, ta = 0; ta < zi.length; ta++) {
      const n = zi[ta];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    zi = null, ta = 0;
  }
}
const Os = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function X0(e) {
  try {
    for (Gr = 0; Gr < jn.length; Gr++) {
      const t = jn[Gr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ks(
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
    Gr = -1, jn.length = 0, Y0(), ec = null, (jn.length || ua.length) && X0();
  }
}
let nr = null, q0 = null;
function tc(e) {
  const t = nr;
  return nr = e, q0 = e && e.type.__scopeId || null, t;
}
function J0(e, t = nr, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Vm(-1);
    const a = tc(t);
    let c;
    try {
      c = e(...o);
    } finally {
      tc(a), r._d && Vm(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function xi(e, t) {
  if (nr === null)
    return e;
  const n = zc(nr), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, u, d = Ct] = t[o];
    a && (nt(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && vi(c), r.push({
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
function ro(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const u = o[c];
    a && (u.oldValue = a[c].value);
    let d = u.dir[r];
    d && (Si(), Qr(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), ki());
  }
}
function Mx(e, t) {
  if (In) {
    let n = In.provides;
    const r = In.parent && In.parent.provides;
    r === n && (n = In.provides = Object.create(r)), n[e] = t;
  }
}
function Dl(e, t, n = !1) {
  const r = SS();
  if (r || fa) {
    let o = fa ? fa._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && nt(t) ? t.call(r && r.proxy) : t;
  }
}
const Nx = /* @__PURE__ */ Symbol.for("v-scx"), Px = () => Dl(Nx);
function vo(e, t, n) {
  return Z0(e, t, n);
}
function Z0(e, t, n = Ct) {
  const { immediate: r, deep: o, flush: a, once: c } = n, u = Fn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (Fs) {
    if (a === "sync") {
      const N = Px();
      b = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!d) {
      const N = () => {
      };
      return N.stop = Xr, N.resume = Xr, N.pause = Xr, N;
    }
  }
  const y = In;
  u.call = (N, k, A) => Qr(N, y, k, A);
  let v = !1;
  a === "post" ? u.scheduler = (N) => {
    Un(N, y && y.suspense);
  } : a !== "sync" && (v = !0, u.scheduler = (N, k) => {
    k ? N() : Fd(N);
  }), u.augmentJob = (N) => {
    t && (N.flags |= 4), v && (N.flags |= 2, y && (N.id = y.uid, N.i = y));
  };
  const x = wx(e, t, u);
  return Fs && (b ? b.push(x) : d && x()), x;
}
function Ax(e, t, n) {
  const r = this.proxy, o = nn(e) ? e.includes(".") ? Q0(r, e) : () => r[e] : e.bind(r, r);
  let a;
  nt(t) ? a = t : (a = t.handler, n = t);
  const c = Bs(this), u = Z0(o, a.bind(r), n);
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
const Cx = /* @__PURE__ */ Symbol("_vte"), Ix = (e) => e.__isTeleport, Ox = /* @__PURE__ */ Symbol("_leaveCb");
function Td(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Td(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ey(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Pm(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const nc = /* @__PURE__ */ new WeakMap();
function xs(e, t, n, r, o = !1) {
  if (Ze(e)) {
    e.forEach(
      (A, E) => xs(
        A,
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
  const a = r.shapeFlag & 4 ? zc(r.component) : r.el, c = o ? null : a, { i: u, r: d } = e, b = t && t.r, y = u.refs === Ct ? u.refs = {} : u.refs, v = u.setupState, x = /* @__PURE__ */ yt(v), N = v === Ct ? x0 : (A) => Pm(y, A) ? !1 : bt(x, A), k = (A, E) => !(E && Pm(y, E));
  if (b != null && b !== d) {
    if (Am(t), nn(b))
      y[b] = null, N(b) && (v[b] = null);
    else if (/* @__PURE__ */ En(b)) {
      const A = t;
      k(b, A.k) && (b.value = null), A.k && (y[A.k] = null);
    }
  }
  if (nt(d))
    Ks(d, u, 12, [c, y]);
  else {
    const A = nn(d), E = /* @__PURE__ */ En(d);
    if (A || E) {
      const L = () => {
        if (e.f) {
          const K = A ? N(d) ? v[d] : y[d] : k() || !e.k ? d.value : y[e.k];
          if (o)
            Ze(K) && xd(K, a);
          else if (Ze(K))
            K.includes(a) || K.push(a);
          else if (A)
            y[d] = [a], N(d) && (v[d] = y[d]);
          else {
            const G = [a];
            k(d, e.k) && (d.value = G), e.k && (y[e.k] = G);
          }
        } else A ? (y[d] = c, N(d) && (v[d] = c)) : E && (k(d, e.k) && (d.value = c), e.k && (y[e.k] = c));
      };
      if (c) {
        const K = () => {
          L(), nc.delete(e);
        };
        K.id = -1, nc.set(e, K), Un(K, n);
      } else
        Am(e), L();
    }
  }
}
function Am(e) {
  const t = nc.get(e);
  t && (t.flags |= 8, nc.delete(e));
}
Ec().requestIdleCallback;
Ec().cancelIdleCallback;
const Ss = (e) => !!e.type.__asyncLoader, ty = (e) => e.type.__isKeepAlive;
function Ex(e, t) {
  ny(e, "a", t);
}
function Fx(e, t) {
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
  if (Lc(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ty(o.parent.vnode) && Tx(r, t, n, o), o = o.parent;
  }
}
function Tx(e, t, n, r) {
  const o = Lc(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  ry(() => {
    xd(r[t], o);
  }, n);
}
function Lc(e, t, n = In, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      Si();
      const u = Bs(n), d = Qr(t, n, e, c);
      return u(), ki(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const Pi = (e) => (t, n = In) => {
  (!Fs || e === "sp") && Lc(e, (...r) => t(...r), n);
}, Dx = Pi("bm"), Rc = Pi("m"), Lx = Pi(
  "bu"
), Rx = Pi("u"), Ws = Pi(
  "bum"
), ry = Pi("um"), Vx = Pi(
  "sp"
), $x = Pi("rtg"), zx = Pi("rtc");
function jx(e, t = In) {
  Lc("ec", e, t);
}
const Hx = "components", iy = /* @__PURE__ */ Symbol.for("v-ndc");
function Gx(e) {
  return nn(e) ? Kx(Hx, e, !1) || e : e || iy;
}
function Kx(e, t, n = !0, r = !1) {
  const o = nr || In;
  if (o) {
    const a = o.type;
    {
      const u = AS(
        a,
        !1
      );
      if (u && (u === t || u === Hn(t) || u === Oc(Hn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Cm(o[e] || a[e], t) || // global registration
      Cm(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function Cm(e, t) {
  return e && (e[t] || e[Hn(t)] || e[Oc(Hn(t))]);
}
function _t(e, t, n, r) {
  let o;
  const a = n, c = Ze(e);
  if (c || nn(e)) {
    const u = c && /* @__PURE__ */ bo(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ yr(e), b = /* @__PURE__ */ Mi(e), e = Fc(e)), o = new Array(e.length);
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
const Ff = (e) => e ? My(e) ? zc(e) : Ff(e.parent) : null, ks = (
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
    $parent: (e) => Ff(e.parent),
    $root: (e) => Ff(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ay(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Dc.bind(e.proxy)),
    $watch: (e) => Ax.bind(e)
  })
), Hu = (e, t) => e !== Ct && !e.__isScriptSetup && bt(e, t), Wx = {
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
        if (Hu(r, t))
          return c[t] = 1, r[t];
        if (o !== Ct && bt(o, t))
          return c[t] = 2, o[t];
        if (bt(a, t))
          return c[t] = 3, a[t];
        if (n !== Ct && bt(n, t))
          return c[t] = 4, n[t];
        Tf && (c[t] = 0);
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
    return Hu(o, t) ? (o[t] = n, !0) : r !== Ct && bt(r, t) ? (r[t] = n, !0) : bt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== Ct && u[0] !== "$" && bt(e, u) || Hu(t, u) || bt(a, u) || bt(r, u) || bt(ks, u) || bt(o.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : bt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Im(e) {
  return Ze(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Tf = !0;
function Bx(e) {
  const t = ay(e), n = e.proxy, r = e.ctx;
  Tf = !1, t.beforeCreate && Om(t.beforeCreate, e, "bc");
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
    activated: A,
    deactivated: E,
    beforeDestroy: L,
    beforeUnmount: K,
    destroyed: G,
    unmounted: T,
    render: _,
    renderTracked: $,
    renderTriggered: B,
    errorCaptured: re,
    serverPrefetch: _e,
    // public API
    expose: P,
    inheritAttrs: D,
    // assets
    components: pe,
    directives: Ce,
    filters: fe
  } = t;
  if (b && Ux(b, r, null), c)
    for (const R in c) {
      const O = c[R];
      nt(O) && (r[R] = O.bind(n));
    }
  if (o) {
    const R = o.call(n, n);
    Pt(R) && (e.data = /* @__PURE__ */ Na(R));
  }
  if (Tf = !0, a)
    for (const R in a) {
      const O = a[R], te = nt(O) ? O.bind(n, n) : nt(O.get) ? O.get.bind(n, n) : Xr, ee = !nt(O) && nt(O.set) ? O.set.bind(n) : Xr, Ee = pt({
        get: te,
        set: ee
      });
      Object.defineProperty(r, R, {
        enumerable: !0,
        configurable: !0,
        get: () => Ee.value,
        set: (Fe) => Ee.value = Fe
      });
    }
  if (u)
    for (const R in u)
      oy(u[R], r, n, R);
  if (d) {
    const R = nt(d) ? d.call(n) : d;
    Reflect.ownKeys(R).forEach((O) => {
      Mx(O, R[O]);
    });
  }
  y && Om(y, e, "c");
  function q(R, O) {
    Ze(O) ? O.forEach((te) => R(te.bind(n))) : O && R(O.bind(n));
  }
  if (q(Dx, v), q(Rc, x), q(Lx, N), q(Rx, k), q(Ex, A), q(Fx, E), q(jx, re), q(zx, $), q($x, B), q(Ws, K), q(ry, T), q(Vx, _e), Ze(P))
    if (P.length) {
      const R = e.exposed || (e.exposed = {});
      P.forEach((O) => {
        Object.defineProperty(R, O, {
          get: () => n[O],
          set: (te) => n[O] = te,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  _ && e.render === Xr && (e.render = _), D != null && (e.inheritAttrs = D), pe && (e.components = pe), Ce && (e.directives = Ce), _e && ey(e);
}
function Ux(e, t, n = Xr) {
  Ze(e) && (e = Df(e));
  for (const r in e) {
    const o = e[r];
    let a;
    Pt(o) ? "default" in o ? a = Dl(
      o.from || r,
      o.default,
      !0
    ) : a = Dl(o.from || r) : a = Dl(o), /* @__PURE__ */ En(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function Om(e, t, n) {
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
    nt(a) && vo(o, a);
  } else if (nt(e))
    vo(o, e.bind(n));
  else if (Pt(e))
    if (Ze(e))
      e.forEach((a) => oy(a, t, n, r));
    else {
      const a = nt(e.handler) ? e.handler.bind(n) : t[e.handler];
      nt(a) && vo(o, a, e);
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
    (b) => rc(d, b, c, !0)
  ), rc(d, t, c)), Pt(t) && a.set(t, d), d;
}
function rc(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && rc(e, a, n, !0), o && o.forEach(
    (c) => rc(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const u = Yx[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Yx = {
  data: Em,
  props: Fm,
  emits: Fm,
  // objects
  methods: fs,
  computed: fs,
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
  components: fs,
  directives: fs,
  // watch
  watch: qx,
  // provide / inject
  provide: Em,
  inject: Xx
};
function Em(e, t) {
  return t ? e ? function() {
    return Fn(
      nt(e) ? e.call(this, this) : e,
      nt(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Xx(e, t) {
  return fs(Df(e), Df(t));
}
function Df(e) {
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
function fs(e, t) {
  return e ? Fn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fm(e, t) {
  return e ? Ze(e) && Ze(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Fn(
    /* @__PURE__ */ Object.create(null),
    Im(e),
    Im(t ?? {})
  ) : t;
}
function qx(e, t) {
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
let Jx = 0;
function Zx(e, t) {
  return function(r, o = null) {
    nt(r) || (r = Fn({}, r)), o != null && !Pt(o) && (o = null);
    const a = sy(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: Jx++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: IS,
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
          return N.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(N, y, x), d = !0, b._container = y, y.__vue_app__ = b, zc(N.component);
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
const Qx = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Hn(t)}Modifiers`] || e[`${Po(t)}Modifiers`];
function eS(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ct;
  let o = n;
  const a = t.startsWith("update:"), c = a && Qx(r, t.slice(7));
  c && (c.trim && (o = n.map((y) => nn(y) ? y.trim() : y)), c.number && (o = n.map(kd)));
  let u, d = r[u = Ru(t)] || // also try camelCase event handler (#2249)
  r[u = Ru(Hn(t))];
  !d && a && (d = r[u = Ru(Po(t))]), d && Qr(
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
const tS = /* @__PURE__ */ new WeakMap();
function ly(e, t, n = !1) {
  const r = n ? tS : t.emitsCache, o = r.get(e);
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
function Vc(e, t) {
  return !e || !Ac(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), bt(e, t[0].toLowerCase() + t.slice(1)) || bt(e, Po(t)) || bt(e, t));
}
function Tm(e) {
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
    inheritAttrs: A
  } = e, E = tc(e);
  let L, K;
  try {
    if (n.shapeFlag & 4) {
      const T = o || r, _ = T;
      L = Br(
        b.call(
          _,
          T,
          y,
          v,
          N,
          x,
          k
        )
      ), K = u;
    } else {
      const T = t;
      L = Br(
        T.length > 1 ? T(
          v,
          { attrs: u, slots: c, emit: d }
        ) : T(
          v,
          null
        )
      ), K = t.props ? u : nS(u);
    }
  } catch (T) {
    Ms.length = 0, Tc(T, e, 1), L = Re(Gi);
  }
  let G = L;
  if (K && A !== !1) {
    const T = Object.keys(K), { shapeFlag: _ } = G;
    T.length && _ & 7 && (a && T.some(Cc) && (K = rS(
      K,
      a
    )), G = wa(G, K, !1, !0));
  }
  return n.dirs && (G = wa(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(n.dirs) : n.dirs), n.transition && Td(G, n.transition), L = G, tc(E), L;
}
const nS = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ac(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, rS = (e, t) => {
  const n = {};
  for (const r in e)
    (!Cc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function iS(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Dm(r, c, b) : !!c;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let v = 0; v < y.length; v++) {
        const x = y[v];
        if (cy(c, r, x) && !Vc(b, x))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? Dm(r, c, b) : !0 : !!c;
  return !1;
}
function Dm(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (cy(t, e, a) && !Vc(n, a))
      return !0;
  }
  return !1;
}
function cy(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && Pt(r) && Pt(o) ? !Md(r, o) : r !== o;
}
function oS({ vnode: e, parent: t, suspense: n }, r) {
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
function aS(e, t, n, r = !1) {
  const o = {}, a = fy();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), py(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ px(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function sS(e, t, n, r) {
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
        if (Vc(e.emitsOptions, x))
          continue;
        const N = t[x];
        if (d)
          if (bt(a, x))
            N !== a[x] && (a[x] = N, b = !0);
          else {
            const k = Hn(x);
            o[k] = Lf(
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
      ((y = Po(v)) === v || !bt(t, y))) && (d ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[v] = Lf(
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
  b && bi(e.attrs, "set", "");
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
      o && bt(o, y = Hn(d)) ? !a || !a.includes(y) ? n[y] = b : (u || (u = {}))[y] = b : Vc(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ yt(n), b = u || Ct;
    for (let y = 0; y < a.length; y++) {
      const v = a[y];
      n[v] = Lf(
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
function Lf(e, t, n, r, o, a) {
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
          const y = Bs(o);
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
    ] && (r === "" || r === Po(n)) && (r = !0));
  }
  return r;
}
const lS = /* @__PURE__ */ new WeakMap();
function hy(e, t, n = !1) {
  const r = n ? lS : t.propsCache, o = r.get(e);
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
      Lm(v) && (c[v] = Ct);
    }
  else if (a)
    for (const y in a) {
      const v = Hn(y);
      if (Lm(v)) {
        const x = a[y], N = c[v] = Ze(x) || nt(x) ? { type: x } : Fn({}, x), k = N.type;
        let A = !1, E = !0;
        if (Ze(k))
          for (let L = 0; L < k.length; ++L) {
            const K = k[L], G = nt(K) && K.name;
            if (G === "Boolean") {
              A = !0;
              break;
            } else G === "String" && (E = !1);
          }
        else
          A = nt(k) && k.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = A, N[
          1
          /* shouldCastTrue */
        ] = E, (A || bt(N, "default")) && u.push(v);
      }
    }
  const b = [c, u];
  return Pt(e) && r.set(e, b), b;
}
function Lm(e) {
  return e[0] !== "$" && !vs(e);
}
const Dd = (e) => e === "_" || e === "_ctx" || e === "$stable", Ld = (e) => Ze(e) ? e.map(Br) : [Br(e)], cS = (e, t, n) => {
  if (t._n)
    return t;
  const r = J0((...o) => Ld(t(...o)), n);
  return r._c = !1, r;
}, my = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (Dd(o)) continue;
    const a = e[o];
    if (nt(a))
      t[o] = cS(o, a, r);
    else if (a != null) {
      const c = Ld(a);
      t[o] = () => c;
    }
  }
}, gy = (e, t) => {
  const n = Ld(t);
  e.slots.default = () => n;
}, yy = (e, t, n) => {
  for (const r in t)
    (n || !Dd(r)) && (e[r] = t[r]);
}, uS = (e, t, n) => {
  const r = e.slots = fy();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (yy(r, t, n), n && P0(r, "_", o, !0)) : my(t, r);
  } else t && gy(e, t);
}, fS = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = Ct;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : yy(o, t, n) : (a = !t.$stable, my(t, o)), c = t;
  } else t && (gy(e, t), c = { default: 1 });
  if (a)
    for (const u in o)
      !Dd(u) && c[u] == null && delete o[u];
}, Un = gS;
function dS(e) {
  return pS(e);
}
function pS(e, t) {
  const n = Ec();
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
  } = e, A = (z, W, ie, we = null, ge = null, ve = null, Me = void 0, Ae = null, Se = !!W.dynamicChildren) => {
    if (z === W)
      return;
    z && !rs(z, W) && (we = Pe(z), Fe(z, ge, ve, !0), z = null), W.patchFlag === -2 && (Se = !1, W.dynamicChildren = null);
    const { type: de, ref: Oe, shapeFlag: Ie } = W;
    switch (de) {
      case $c:
        E(z, W, ie, we);
        break;
      case Gi:
        L(z, W, ie, we);
        break;
      case Ku:
        z == null && K(W, ie, we, Me);
        break;
      case Xe:
        pe(
          z,
          W,
          ie,
          we,
          ge,
          ve,
          Me,
          Ae,
          Se
        );
        break;
      default:
        Ie & 1 ? _(
          z,
          W,
          ie,
          we,
          ge,
          ve,
          Me,
          Ae,
          Se
        ) : Ie & 6 ? Ce(
          z,
          W,
          ie,
          we,
          ge,
          ve,
          Me,
          Ae,
          Se
        ) : (Ie & 64 || Ie & 128) && de.process(
          z,
          W,
          ie,
          we,
          ge,
          ve,
          Me,
          Ae,
          Se,
          mn
        );
    }
    Oe != null && ge ? xs(Oe, z && z.ref, ve, W || z, !W) : Oe == null && z && z.ref != null && xs(z.ref, null, ve, z, !0);
  }, E = (z, W, ie, we) => {
    if (z == null)
      r(
        W.el = u(W.children),
        ie,
        we
      );
    else {
      const ge = W.el = z.el;
      W.children !== z.children && b(ge, W.children);
    }
  }, L = (z, W, ie, we) => {
    z == null ? r(
      W.el = d(W.children || ""),
      ie,
      we
    ) : W.el = z.el;
  }, K = (z, W, ie, we) => {
    [z.el, z.anchor] = k(
      z.children,
      W,
      ie,
      we,
      z.el,
      z.anchor
    );
  }, G = ({ el: z, anchor: W }, ie, we) => {
    let ge;
    for (; z && z !== W; )
      ge = x(z), r(z, ie, we), z = ge;
    r(W, ie, we);
  }, T = ({ el: z, anchor: W }) => {
    let ie;
    for (; z && z !== W; )
      ie = x(z), o(z), z = ie;
    o(W);
  }, _ = (z, W, ie, we, ge, ve, Me, Ae, Se) => {
    if (W.type === "svg" ? Me = "svg" : W.type === "math" && (Me = "mathml"), z == null)
      $(
        W,
        ie,
        we,
        ge,
        ve,
        Me,
        Ae,
        Se
      );
    else {
      const de = z.el && z.el._isVueCE ? z.el : null;
      try {
        de && de._beginPatch(), _e(
          z,
          W,
          ge,
          ve,
          Me,
          Ae,
          Se
        );
      } finally {
        de && de._endPatch();
      }
    }
  }, $ = (z, W, ie, we, ge, ve, Me, Ae) => {
    let Se, de;
    const { props: Oe, shapeFlag: Ie, transition: $e, dirs: He } = z;
    if (Se = z.el = c(
      z.type,
      ve,
      Oe && Oe.is,
      Oe
    ), Ie & 8 ? y(Se, z.children) : Ie & 16 && re(
      z.children,
      Se,
      null,
      we,
      ge,
      Gu(z, ve),
      Me,
      Ae
    ), He && ro(z, null, we, "created"), B(Se, z, z.scopeId, Me, we), Oe) {
      for (const st in Oe)
        st !== "value" && !vs(st) && a(Se, st, null, Oe[st], ve, we);
      "value" in Oe && a(Se, "value", null, Oe.value, ve), (de = Oe.onVnodeBeforeMount) && $r(de, we, z);
    }
    He && ro(z, null, we, "beforeMount");
    const at = hS(ge, $e);
    at && $e.beforeEnter(Se), r(Se, W, ie), ((de = Oe && Oe.onVnodeMounted) || at || He) && Un(() => {
      try {
        de && $r(de, we, z), at && $e.enter(Se), He && ro(z, null, we, "mounted");
      } finally {
      }
    }, ge);
  }, B = (z, W, ie, we, ge) => {
    if (ie && N(z, ie), we)
      for (let ve = 0; ve < we.length; ve++)
        N(z, we[ve]);
    if (ge) {
      let ve = ge.subTree;
      if (W === ve || wy(ve.type) && (ve.ssContent === W || ve.ssFallback === W)) {
        const Me = ge.vnode;
        B(
          z,
          Me,
          Me.scopeId,
          Me.slotScopeIds,
          ge.parent
        );
      }
    }
  }, re = (z, W, ie, we, ge, ve, Me, Ae, Se = 0) => {
    for (let de = Se; de < z.length; de++) {
      const Oe = z[de] = Ae ? gi(z[de]) : Br(z[de]);
      A(
        null,
        Oe,
        W,
        ie,
        we,
        ge,
        ve,
        Me,
        Ae
      );
    }
  }, _e = (z, W, ie, we, ge, ve, Me) => {
    const Ae = W.el = z.el;
    let { patchFlag: Se, dynamicChildren: de, dirs: Oe } = W;
    Se |= z.patchFlag & 16;
    const Ie = z.props || Ct, $e = W.props || Ct;
    let He;
    if (ie && io(ie, !1), (He = $e.onVnodeBeforeUpdate) && $r(He, ie, W, z), Oe && ro(W, z, ie, "beforeUpdate"), ie && io(ie, !0), (Ie.innerHTML && $e.innerHTML == null || Ie.textContent && $e.textContent == null) && y(Ae, ""), de ? P(
      z.dynamicChildren,
      de,
      Ae,
      ie,
      we,
      Gu(W, ge),
      ve
    ) : Me || O(
      z,
      W,
      Ae,
      null,
      ie,
      we,
      Gu(W, ge),
      ve,
      !1
    ), Se > 0) {
      if (Se & 16)
        D(Ae, Ie, $e, ie, ge);
      else if (Se & 2 && Ie.class !== $e.class && a(Ae, "class", null, $e.class, ge), Se & 4 && a(Ae, "style", Ie.style, $e.style, ge), Se & 8) {
        const at = W.dynamicProps;
        for (let st = 0; st < at.length; st++) {
          const ft = at[st], dt = Ie[ft], Rt = $e[ft];
          (Rt !== dt || ft === "value") && a(Ae, ft, dt, Rt, ge, ie);
        }
      }
      Se & 1 && z.children !== W.children && y(Ae, W.children);
    } else !Me && de == null && D(Ae, Ie, $e, ie, ge);
    ((He = $e.onVnodeUpdated) || Oe) && Un(() => {
      He && $r(He, ie, W, z), Oe && ro(W, z, ie, "updated");
    }, we);
  }, P = (z, W, ie, we, ge, ve, Me) => {
    for (let Ae = 0; Ae < W.length; Ae++) {
      const Se = z[Ae], de = W[Ae], Oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Se.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Se.type === Xe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !rs(Se, de) || // - In the case of a component, it could contain anything.
        Se.shapeFlag & 198) ? v(Se.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ie
        )
      );
      A(
        Se,
        de,
        Oe,
        null,
        we,
        ge,
        ve,
        Me,
        !0
      );
    }
  }, D = (z, W, ie, we, ge) => {
    if (W !== ie) {
      if (W !== Ct)
        for (const ve in W)
          !vs(ve) && !(ve in ie) && a(
            z,
            ve,
            W[ve],
            null,
            ge,
            we
          );
      for (const ve in ie) {
        if (vs(ve)) continue;
        const Me = ie[ve], Ae = W[ve];
        Me !== Ae && ve !== "value" && a(z, ve, Ae, Me, ge, we);
      }
      "value" in ie && a(z, "value", W.value, ie.value, ge);
    }
  }, pe = (z, W, ie, we, ge, ve, Me, Ae, Se) => {
    const de = W.el = z ? z.el : u(""), Oe = W.anchor = z ? z.anchor : u("");
    let { patchFlag: Ie, dynamicChildren: $e, slotScopeIds: He } = W;
    He && (Ae = Ae ? Ae.concat(He) : He), z == null ? (r(de, ie, we), r(Oe, ie, we), re(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      W.children || [],
      ie,
      Oe,
      ge,
      ve,
      Me,
      Ae,
      Se
    )) : Ie > 0 && Ie & 64 && $e && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    z.dynamicChildren && z.dynamicChildren.length === $e.length ? (P(
      z.dynamicChildren,
      $e,
      ie,
      ge,
      ve,
      Me,
      Ae
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (W.key != null || ge && W === ge.subTree) && by(
      z,
      W,
      !0
      /* shallow */
    )) : O(
      z,
      W,
      ie,
      Oe,
      ge,
      ve,
      Me,
      Ae,
      Se
    );
  }, Ce = (z, W, ie, we, ge, ve, Me, Ae, Se) => {
    W.slotScopeIds = Ae, z == null ? W.shapeFlag & 512 ? ge.ctx.activate(
      W,
      ie,
      we,
      Me,
      Se
    ) : fe(
      W,
      ie,
      we,
      ge,
      ve,
      Me,
      Se
    ) : U(z, W, Se);
  }, fe = (z, W, ie, we, ge, ve, Me) => {
    const Ae = z.component = xS(
      z,
      we,
      ge
    );
    if (ty(z) && (Ae.ctx.renderer = mn), kS(Ae, !1, Me), Ae.asyncDep) {
      if (ge && ge.registerDep(Ae, q, Me), !z.el) {
        const Se = Ae.subTree = Re(Gi);
        L(null, Se, W, ie), z.placeholder = Se.el;
      }
    } else
      q(
        Ae,
        z,
        W,
        ie,
        ge,
        ve,
        Me
      );
  }, U = (z, W, ie) => {
    const we = W.component = z.component;
    if (iS(z, W, ie))
      if (we.asyncDep && !we.asyncResolved) {
        R(we, W, ie);
        return;
      } else
        we.next = W, we.update();
    else
      W.el = z.el, we.vnode = W;
  }, q = (z, W, ie, we, ge, ve, Me) => {
    const Ae = () => {
      if (z.isMounted) {
        let { next: Ie, bu: $e, u: He, parent: at, vnode: st } = z;
        {
          const Dn = vy(z);
          if (Dn) {
            Ie && (Ie.el = st.el, R(z, Ie, Me)), Dn.asyncDep.then(() => {
              Un(() => {
                z.isUnmounted || de();
              }, ge);
            });
            return;
          }
        }
        let ft = Ie, dt;
        io(z, !1), Ie ? (Ie.el = st.el, R(z, Ie, Me)) : Ie = st, $e && Tl($e), (dt = Ie.props && Ie.props.onVnodeBeforeUpdate) && $r(dt, at, Ie, st), io(z, !0);
        const Rt = Tm(z), Tn = z.subTree;
        z.subTree = Rt, A(
          Tn,
          Rt,
          // parent may have changed if it's in a teleport
          v(Tn.el),
          // anchor may have changed if it's in a fragment
          Pe(Tn),
          z,
          ge,
          ve
        ), Ie.el = Rt.el, ft === null && oS(z, Rt.el), He && Un(He, ge), (dt = Ie.props && Ie.props.onVnodeUpdated) && Un(
          () => $r(dt, at, Ie, st),
          ge
        );
      } else {
        let Ie;
        const { el: $e, props: He } = W, { bm: at, m: st, parent: ft, root: dt, type: Rt } = z, Tn = Ss(W);
        io(z, !1), at && Tl(at), !Tn && (Ie = He && He.onVnodeBeforeMount) && $r(Ie, ft, W), io(z, !0);
        {
          dt.ce && dt.ce._hasShadowRoot() && dt.ce._injectChildStyle(
            Rt,
            z.parent ? z.parent.type : void 0
          );
          const Dn = z.subTree = Tm(z);
          A(
            null,
            Dn,
            ie,
            we,
            z,
            ge,
            ve
          ), W.el = Dn.el;
        }
        if (st && Un(st, ge), !Tn && (Ie = He && He.onVnodeMounted)) {
          const Dn = W;
          Un(
            () => $r(Ie, ft, Dn),
            ge
          );
        }
        (W.shapeFlag & 256 || ft && Ss(ft.vnode) && ft.vnode.shapeFlag & 256) && z.a && Un(z.a, ge), z.isMounted = !0, W = ie = we = null;
      }
    };
    z.scope.on();
    const Se = z.effect = new O0(Ae);
    z.scope.off();
    const de = z.update = Se.run.bind(Se), Oe = z.job = Se.runIfDirty.bind(Se);
    Oe.i = z, Oe.id = z.uid, Se.scheduler = () => Fd(Oe), io(z, !0), de();
  }, R = (z, W, ie) => {
    W.component = z;
    const we = z.vnode.props;
    z.vnode = W, z.next = null, sS(z, W.props, we, ie), fS(z, W.children, ie), Si(), Nm(z), ki();
  }, O = (z, W, ie, we, ge, ve, Me, Ae, Se = !1) => {
    const de = z && z.children, Oe = z ? z.shapeFlag : 0, Ie = W.children, { patchFlag: $e, shapeFlag: He } = W;
    if ($e > 0) {
      if ($e & 128) {
        ee(
          de,
          Ie,
          ie,
          we,
          ge,
          ve,
          Me,
          Ae,
          Se
        );
        return;
      } else if ($e & 256) {
        te(
          de,
          Ie,
          ie,
          we,
          ge,
          ve,
          Me,
          Ae,
          Se
        );
        return;
      }
    }
    He & 8 ? (Oe & 16 && gt(de, ge, ve), Ie !== de && y(ie, Ie)) : Oe & 16 ? He & 16 ? ee(
      de,
      Ie,
      ie,
      we,
      ge,
      ve,
      Me,
      Ae,
      Se
    ) : gt(de, ge, ve, !0) : (Oe & 8 && y(ie, ""), He & 16 && re(
      Ie,
      ie,
      we,
      ge,
      ve,
      Me,
      Ae,
      Se
    ));
  }, te = (z, W, ie, we, ge, ve, Me, Ae, Se) => {
    z = z || la, W = W || la;
    const de = z.length, Oe = W.length, Ie = Math.min(de, Oe);
    let $e;
    for ($e = 0; $e < Ie; $e++) {
      const He = W[$e] = Se ? gi(W[$e]) : Br(W[$e]);
      A(
        z[$e],
        He,
        ie,
        null,
        ge,
        ve,
        Me,
        Ae,
        Se
      );
    }
    de > Oe ? gt(
      z,
      ge,
      ve,
      !0,
      !1,
      Ie
    ) : re(
      W,
      ie,
      we,
      ge,
      ve,
      Me,
      Ae,
      Se,
      Ie
    );
  }, ee = (z, W, ie, we, ge, ve, Me, Ae, Se) => {
    let de = 0;
    const Oe = W.length;
    let Ie = z.length - 1, $e = Oe - 1;
    for (; de <= Ie && de <= $e; ) {
      const He = z[de], at = W[de] = Se ? gi(W[de]) : Br(W[de]);
      if (rs(He, at))
        A(
          He,
          at,
          ie,
          null,
          ge,
          ve,
          Me,
          Ae,
          Se
        );
      else
        break;
      de++;
    }
    for (; de <= Ie && de <= $e; ) {
      const He = z[Ie], at = W[$e] = Se ? gi(W[$e]) : Br(W[$e]);
      if (rs(He, at))
        A(
          He,
          at,
          ie,
          null,
          ge,
          ve,
          Me,
          Ae,
          Se
        );
      else
        break;
      Ie--, $e--;
    }
    if (de > Ie) {
      if (de <= $e) {
        const He = $e + 1, at = He < Oe ? W[He].el : we;
        for (; de <= $e; )
          A(
            null,
            W[de] = Se ? gi(W[de]) : Br(W[de]),
            ie,
            at,
            ge,
            ve,
            Me,
            Ae,
            Se
          ), de++;
      }
    } else if (de > $e)
      for (; de <= Ie; )
        Fe(z[de], ge, ve, !0), de++;
    else {
      const He = de, at = de, st = /* @__PURE__ */ new Map();
      for (de = at; de <= $e; de++) {
        const We = W[de] = Se ? gi(W[de]) : Br(W[de]);
        We.key != null && st.set(We.key, de);
      }
      let ft, dt = 0;
      const Rt = $e - at + 1;
      let Tn = !1, Dn = 0;
      const ti = new Array(Rt);
      for (de = 0; de < Rt; de++) ti[de] = 0;
      for (de = He; de <= Ie; de++) {
        const We = z[de];
        if (dt >= Rt) {
          Fe(We, ge, ve, !0);
          continue;
        }
        let rn;
        if (We.key != null)
          rn = st.get(We.key);
        else
          for (ft = at; ft <= $e; ft++)
            if (ti[ft - at] === 0 && rs(We, W[ft])) {
              rn = ft;
              break;
            }
        rn === void 0 ? Fe(We, ge, ve, !0) : (ti[rn - at] = de + 1, rn >= Dn ? Dn = rn : Tn = !0, A(
          We,
          W[rn],
          ie,
          null,
          ge,
          ve,
          Me,
          Ae,
          Se
        ), dt++);
      }
      const h = Tn ? mS(ti) : la;
      for (ft = h.length - 1, de = Rt - 1; de >= 0; de--) {
        const We = at + de, rn = W[We], en = W[We + 1], Ai = We + 1 < Oe ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          en.el || _y(en)
        ) : we;
        ti[de] === 0 ? A(
          null,
          rn,
          ie,
          Ai,
          ge,
          ve,
          Me,
          Ae,
          Se
        ) : Tn && (ft < 0 || de !== h[ft] ? Ee(rn, ie, Ai, 2) : ft--);
      }
    }
  }, Ee = (z, W, ie, we, ge = null) => {
    const { el: ve, type: Me, transition: Ae, children: Se, shapeFlag: de } = z;
    if (de & 6) {
      Ee(z.component.subTree, W, ie, we);
      return;
    }
    if (de & 128) {
      z.suspense.move(W, ie, we);
      return;
    }
    if (de & 64) {
      Me.move(z, W, ie, mn);
      return;
    }
    if (Me === Xe) {
      r(ve, W, ie);
      for (let Ie = 0; Ie < Se.length; Ie++)
        Ee(Se[Ie], W, ie, we);
      r(z.anchor, W, ie);
      return;
    }
    if (Me === Ku) {
      G(z, W, ie);
      return;
    }
    if (we !== 2 && de & 1 && Ae)
      if (we === 0)
        Ae.beforeEnter(ve), r(ve, W, ie), Un(() => Ae.enter(ve), ge);
      else {
        const { leave: Ie, delayLeave: $e, afterLeave: He } = Ae, at = () => {
          z.ctx.isUnmounted ? o(ve) : r(ve, W, ie);
        }, st = () => {
          ve._isLeaving && ve[Ox](
            !0
            /* cancelled */
          ), Ie(ve, () => {
            at(), He && He();
          });
        };
        $e ? $e(ve, at, st) : st();
      }
    else
      r(ve, W, ie);
  }, Fe = (z, W, ie, we = !1, ge = !1) => {
    const {
      type: ve,
      props: Me,
      ref: Ae,
      children: Se,
      dynamicChildren: de,
      shapeFlag: Oe,
      patchFlag: Ie,
      dirs: $e,
      cacheIndex: He,
      memo: at
    } = z;
    if (Ie === -2 && (ge = !1), Ae != null && (Si(), xs(Ae, null, ie, z, !0), ki()), He != null && (W.renderCache[He] = void 0), Oe & 256) {
      W.ctx.deactivate(z);
      return;
    }
    const st = Oe & 1 && $e, ft = !Ss(z);
    let dt;
    if (ft && (dt = Me && Me.onVnodeBeforeUnmount) && $r(dt, W, z), Oe & 6)
      V(z.component, ie, we);
    else {
      if (Oe & 128) {
        z.suspense.unmount(ie, we);
        return;
      }
      st && ro(z, null, W, "beforeUnmount"), Oe & 64 ? z.type.remove(
        z,
        W,
        ie,
        mn,
        we
      ) : de && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !de.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ve !== Xe || Ie > 0 && Ie & 64) ? gt(
        de,
        W,
        ie,
        !1,
        !0
      ) : (ve === Xe && Ie & 384 || !ge && Oe & 16) && gt(Se, W, ie), we && vt(z);
    }
    const Rt = at != null && He == null;
    (ft && (dt = Me && Me.onVnodeUnmounted) || st || Rt) && Un(() => {
      dt && $r(dt, W, z), st && ro(z, null, W, "unmounted"), Rt && (z.el = null);
    }, ie);
  }, vt = (z) => {
    const { type: W, el: ie, anchor: we, transition: ge } = z;
    if (W === Xe) {
      ht(ie, we);
      return;
    }
    if (W === Ku) {
      T(z);
      return;
    }
    const ve = () => {
      o(ie), ge && !ge.persisted && ge.afterLeave && ge.afterLeave();
    };
    if (z.shapeFlag & 1 && ge && !ge.persisted) {
      const { leave: Me, delayLeave: Ae } = ge, Se = () => Me(ie, ve);
      Ae ? Ae(z.el, ve, Se) : Se();
    } else
      ve();
  }, ht = (z, W) => {
    let ie;
    for (; z !== W; )
      ie = x(z), o(z), z = ie;
    o(W);
  }, V = (z, W, ie) => {
    const { bum: we, scope: ge, job: ve, subTree: Me, um: Ae, m: Se, a: de } = z;
    Rm(Se), Rm(de), we && Tl(we), ge.stop(), ve && (ve.flags |= 8, Fe(Me, z, W, ie)), Ae && Un(Ae, W), Un(() => {
      z.isUnmounted = !0;
    }, W);
  }, gt = (z, W, ie, we = !1, ge = !1, ve = 0) => {
    for (let Me = ve; Me < z.length; Me++)
      Fe(z[Me], W, ie, we, ge);
  }, Pe = (z) => {
    if (z.shapeFlag & 6)
      return Pe(z.component.subTree);
    if (z.shapeFlag & 128)
      return z.suspense.next();
    const W = x(z.anchor || z.el), ie = W && W[Cx];
    return ie ? x(ie) : W;
  };
  let wt = !1;
  const Et = (z, W, ie) => {
    let we;
    z == null ? W._vnode && (Fe(W._vnode, null, null, !0), we = W._vnode.component) : A(
      W._vnode || null,
      z,
      W,
      null,
      null,
      null,
      ie
    ), W._vnode = z, wt || (wt = !0, Nm(we), Y0(), wt = !1);
  }, mn = {
    p: A,
    um: Fe,
    m: Ee,
    r: vt,
    mt: fe,
    mc: re,
    pc: O,
    pbc: P,
    n: Pe,
    o: e
  };
  return {
    render: Et,
    hydrate: void 0,
    createApp: Zx(Et)
  };
}
function Gu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function io({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function hS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function by(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Ze(r) && Ze(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = gi(o[a]), u.el = c.el), !n && u.patchFlag !== -2 && by(c, u)), u.type === $c && (u.patchFlag === -1 && (u = o[a] = gi(u)), u.el = c.el), u.type === Gi && !u.el && (u.el = c.el);
    }
}
function mS(e) {
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
function Rm(e) {
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
function gS(e, t) {
  t && t.pendingBranch ? Ze(e) ? t.effects.push(...e) : t.effects.push(e) : kx(e);
}
const Xe = /* @__PURE__ */ Symbol.for("v-fgt"), $c = /* @__PURE__ */ Symbol.for("v-txt"), Gi = /* @__PURE__ */ Symbol.for("v-cmt"), Ku = /* @__PURE__ */ Symbol.for("v-stc"), Ms = [];
let rr = null;
function ne(e = !1) {
  Ms.push(rr = e ? null : []);
}
function yS() {
  Ms.pop(), rr = Ms[Ms.length - 1] || null;
}
let Es = 1;
function Vm(e, t = !1) {
  Es += e, e < 0 && rr && t && (rr.hasOnce = !0);
}
function xy(e) {
  return e.dynamicChildren = Es > 0 ? rr || la : null, yS(), Es > 0 && rr && rr.push(e), e;
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
function rs(e, t) {
  return e.type === t.type && e.key === t.key;
}
const ky = ({ key: e }) => e ?? null, Ll = ({
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
    ref: t && Ll(t),
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
  return u ? (Rd(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= nn(n) ? 8 : 16), Es > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  rr && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && rr.push(d), d;
}
const Re = bS;
function bS(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === iy) && (e = Gi), Sy(e)) {
    const u = wa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Rd(u, n), Es > 0 && !a && rr && (u.shapeFlag & 6 ? rr[rr.indexOf(e)] = u : rr.push(u)), u.patchFlag = -2, u;
  }
  if (CS(e) && (e = e.__vccOpts), t) {
    t = vS(t);
    let { class: u, style: d } = t;
    u && !nn(u) && (t.class = ct(u)), Pt(d) && (/* @__PURE__ */ Ed(d) && !Ze(d) && (d = Fn({}, d)), t.style = Mt(d));
  }
  const c = nn(e) ? 1 : wy(e) ? 128 : Ix(e) ? 64 : Pt(e) ? 4 : nt(e) ? 2 : 0;
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
function vS(e) {
  return e ? /* @__PURE__ */ Ed(e) || dy(e) ? Fn({}, e) : e : null;
}
function wa(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: u, transition: d } = e, b = t ? yi(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && ky(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Ze(a) ? a.concat(Ll(t)) : [a, Ll(t)] : Ll(t)
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
  return d && r && Td(
    y,
    d.clone(y)
  ), y;
}
function ds(e = " ", t = 0) {
  return Re($c, null, e, t);
}
function ut(e = "", t = !1) {
  return t ? (ne(), vr(Gi, null, e)) : Re(Gi, null, e);
}
function Br(e) {
  return e == null || typeof e == "boolean" ? Re(Gi) : Ze(e) ? Re(
    Xe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Sy(e) ? gi(e) : Re($c, null, String(e));
}
function gi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : wa(e);
}
function Rd(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ze(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Rd(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !dy(t) ? t._ctx = nr : o === 3 && nr && (nr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else nt(t) ? (t = { default: t, _ctx: nr }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ds(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function yi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = ct([t.class, r.class]));
      else if (o === "style")
        t.style = Mt([t.style, r.style]);
      else if (Ac(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(Ze(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Cc(o) && (t[o] = c);
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
const _S = sy();
let wS = 0;
function xS(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || _S, a = {
    uid: wS++,
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
    scope: new Uw(
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = eS.bind(null, a), e.ce && e.ce(a), a;
}
let In = null;
const SS = () => In || nr;
let ic, Rf;
{
  const e = Ec(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  ic = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => In = n
  ), Rf = t(
    "__VUE_SSR_SETTERS__",
    (n) => Fs = n
  );
}
const Bs = (e) => {
  const t = In;
  return ic(e), e.scope.on(), () => {
    e.scope.off(), ic(t);
  };
}, $m = () => {
  In && In.scope.off(), ic(null);
};
function My(e) {
  return e.vnode.shapeFlag & 4;
}
let Fs = !1;
function kS(e, t = !1, n = !1) {
  t && Rf(t);
  const { props: r, children: o } = e.vnode, a = My(e);
  aS(e, r, a, t), uS(e, o, n || t);
  const c = a ? MS(e, t) : void 0;
  return t && Rf(!1), c;
}
function MS(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Wx);
  const { setup: r } = n;
  if (r) {
    Si();
    const o = e.setupContext = r.length > 1 ? PS(e) : null, a = Bs(e), c = Ks(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = k0(c);
    if (ki(), a(), (u || e.sp) && !Ss(e) && ey(e), u) {
      if (c.then($m, $m), t)
        return c.then((d) => {
          zm(e, d);
        }).catch((d) => {
          Tc(d, e, 0);
        });
      e.asyncDep = c;
    } else
      zm(e, c);
  } else
    Ny(e);
}
function zm(e, t, n) {
  nt(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Pt(t) && (e.setupState = W0(t)), Ny(e);
}
function Ny(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Xr);
  {
    const o = Bs(e);
    Si();
    try {
      Bx(e);
    } finally {
      ki(), o();
    }
  }
}
const NS = {
  get(e, t) {
    return An(e, "get", ""), e[t];
  }
};
function PS(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, NS),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function zc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(W0(hx(e.exposed)), {
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
function AS(e, t = !0) {
  return nt(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function CS(e) {
  return nt(e) && "__vccOpts" in e;
}
const pt = (e, t) => /* @__PURE__ */ vx(e, t, Fs), IS = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Vf;
const jm = typeof window < "u" && window.trustedTypes;
if (jm)
  try {
    Vf = /* @__PURE__ */ jm.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Py = Vf ? (e) => Vf.createHTML(e) : (e) => e, OS = "http://www.w3.org/2000/svg", ES = "http://www.w3.org/1998/Math/MathML", pi = typeof document < "u" ? document : null, Hm = pi && /* @__PURE__ */ pi.createElement("template"), FS = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? pi.createElementNS(OS, e) : t === "mathml" ? pi.createElementNS(ES, e) : n ? pi.createElement(e, { is: n }) : pi.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => pi.createTextNode(e),
  createComment: (e) => pi.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => pi.querySelector(e),
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
      Hm.innerHTML = Py(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Hm.content;
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
}, TS = /* @__PURE__ */ Symbol("_vtc");
function DS(e, t, n) {
  const r = e[TS];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const oc = /* @__PURE__ */ Symbol("_vod"), Ay = /* @__PURE__ */ Symbol("_vsh"), No = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[oc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : is(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), is(e, !0), r.enter(e)) : r.leave(e, () => {
      is(e, !1);
    }) : is(e, t));
  },
  beforeUnmount(e, { value: t }) {
    is(e, t);
  }
};
function is(e, t) {
  e.style.display = t ? e[oc] : "none", e[Ay] = !t;
}
const LS = /* @__PURE__ */ Symbol(""), RS = /(?:^|;)\s*display\s*:/;
function VS(e, t, n) {
  const r = e.style, o = nn(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (nn(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && Rl(r, u, "");
        }
      else
        for (const c in t)
          n[c] == null && Rl(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), Rl(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[LS];
      c && (n += ";" + c), r.cssText = n, a = RS.test(n);
    }
  } else t && e.removeAttribute("style");
  oc in e && (e[oc] = a ? r.display : "", e[Ay] && (r.display = "none"));
}
const Gm = /\s*!important$/;
function Rl(e, t, n) {
  if (Ze(n))
    n.forEach((r) => Rl(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = $S(e, t);
    Gm.test(n) ? e.setProperty(
      Po(r),
      n.replace(Gm, ""),
      "important"
    ) : e[r] = n;
  }
}
const Km = ["Webkit", "Moz", "ms"], Wu = {};
function $S(e, t) {
  const n = Wu[t];
  if (n)
    return n;
  let r = Hn(t);
  if (r !== "filter" && r in e)
    return Wu[t] = r;
  r = Oc(r);
  for (let o = 0; o < Km.length; o++) {
    const a = Km[o] + r;
    if (a in e)
      return Wu[t] = a;
  }
  return t;
}
const Wm = "http://www.w3.org/1999/xlink";
function Bm(e, t, n, r, o, a = Ww(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Wm, t.slice(6, t.length)) : e.setAttributeNS(Wm, t, n) : n == null || a && !A0(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Zr(n) ? String(n) : n
  );
}
function Um(e, t, n, r, o) {
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
function zS(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Ym = /* @__PURE__ */ Symbol("_vei");
function jS(e, t, n, r, o = null) {
  const a = e[Ym] || (e[Ym] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [u, d] = HS(t);
    if (r) {
      const b = a[t] = WS(
        r,
        o
      );
      na(e, u, b, d);
    } else c && (zS(e, u, c, d), a[t] = void 0);
  }
}
const Xm = /(?:Once|Passive|Capture)$/;
function HS(e) {
  let t;
  if (Xm.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Xm); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Po(e.slice(2)), t];
}
let Bu = 0;
const GS = /* @__PURE__ */ Promise.resolve(), KS = () => Bu || (GS.then(() => Bu = 0), Bu = Date.now());
function WS(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Qr(
      BS(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = KS(), n;
}
function BS(e, t) {
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
const qm = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, US = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? DS(e, r, c) : t === "style" ? VS(e, n, r) : Ac(t) ? Cc(t) || jS(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : YS(e, t, r, c)) ? (Um(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bm(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (XS(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !nn(r))) ? Um(e, Hn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Bm(e, t, r, c));
};
function YS(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && qm(t) && nt(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return qm(t) && nn(n) ? !1 : t in e;
}
function XS(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Hn(t);
  return Array.isArray(n) ? n.some((o) => Hn(o) === r) : Object.keys(n).some((o) => Hn(o) === r);
}
const Jm = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ze(t) ? (n) => Tl(t, n) : t;
};
function qS(e) {
  e.target.composing = !0;
}
function Zm(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Uu = /* @__PURE__ */ Symbol("_assign");
function Qm(e, t, n) {
  return t && (e = e.trim()), n && (e = kd(e)), e;
}
const eg = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Uu] = Jm(o);
    const a = r || o.props && o.props.type === "number";
    na(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Uu](Qm(e.value, n, a));
    }), (n || a) && na(e, "change", () => {
      e.value = Qm(e.value, n, a);
    }), t || (na(e, "compositionstart", qS), na(e, "compositionend", Zm), na(e, "change", Zm));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[Uu] = Jm(c), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? kd(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, JS = ["ctrl", "shift", "alt", "meta"], ZS = {
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
  exact: (e, t) => JS.some((n) => e[`${n}Key`] && !t.includes(n))
}, Dt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const u = ZS[t[c]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, QS = /* @__PURE__ */ Fn({ patchProp: US }, FS);
let tg;
function ek() {
  return tg || (tg = dS(QS));
}
const Vd = ((...e) => {
  const t = ek().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = nk(r);
    if (!o) return;
    const a = t._component;
    !nt(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, tk(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function tk(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function nk(e) {
  return nn(e) ? document.querySelector(e) : e;
}
function ra(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function rk() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ng(e, t = 8) {
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
function $d(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function hi(e, t, n) {
  if (!e) return ra(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function jt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Yu = null, Xu = null, rg = null, ig = null, qt = null, os = null, $n = null, Vi = null;
function ik() {
  if (Xu) return Xu;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), Xu = n, n;
}
function qu(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Yu = hi(Yu, n, r);
  const o = Yu;
  jt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", ig !== o.ctx && (rg = o.ctx.createPattern(ik(), "repeat"), ig = o.ctx), o.ctx.fillStyle = rg, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function ok(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function ak(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function sk(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function lk(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Gt = /* @__PURE__ */ new Map(), zd = 128;
function ck(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${c}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Gt.has(d)) {
    const K = Gt.get(d);
    return Gt.delete(d), Gt.set(d, K), K;
  }
  Gt.size >= zd && Gt.delete(Gt.keys().next().value);
  const b = c * 2 + 2, y = c + 1, v = $d(b, b), x = v.getContext("2d"), N = u * c, k = c + 1, A = `rgba(${n},${r},${o},${a})`, E = `rgba(${n},${r},${o},0)`, L = x.createRadialGradient(y, y, N, y, y, k);
  return L.addColorStop(0, A), L.addColorStop(1, E), x.fillStyle = L, x.fillRect(0, 0, b, b), Gt.set(d, v), v;
}
function uk(e, t, n, r, o, a, c) {
  const { r: u, g: d, b, a: y } = r, v = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, o), k = Math.max(0, Math.min(0.99, a)), A = Math.max(0, Math.min(1, c ?? 0)), E = `chisel:${v}:${x}:${n.toFixed(2)}:${u}:${d}:${b}:${y.toFixed(3)}:${N.toFixed(2)}:${k.toFixed(2)}:${A.toFixed(2)}`;
  if (Gt.has(E)) {
    const re = Gt.get(E);
    return Gt.delete(E), Gt.set(E, re), re;
  }
  Gt.size >= zd && Gt.delete(Gt.keys().next().value);
  const L = $d(v, x), K = L.getContext("2d"), G = K.createImageData(v, x), T = G.data, _ = Math.max(0, e - t), $ = Math.max(0, Math.min(1, n)), B = 1 + N;
  for (let re = 0; re < x; re++)
    for (let _e = 0; _e < v; _e++) {
      const P = _e + 0.5 - e, D = re + 0.5 - t, pe = Math.max(Math.abs(P) - _, 0), fe = Math.hypot(pe, D) / t;
      if (fe >= 1) continue;
      const U = fe <= $ ? 1 : Math.max(0, (1 - fe) / Math.max(1e-4, 1 - $)), q = 1 - fe, R = 1 + N * (1 - q) * (1 - q), O = 1 - k * q * q, te = R * O / B;
      let ee = 1;
      if (A > 0) {
        const vt = Math.floor((D + t) / 1.5), ht = Math.floor((P + e) / 8), V = _o(da(vt * 41 + 500, ht * 19 + 300));
        ee = 1 - A * 0.42 * V;
      }
      const Ee = Math.round(255 * Math.min(1, y * U * te * ee));
      if (Ee <= 0) continue;
      const Fe = (re * v + _e) * 4;
      T[Fe] = u, T[Fe + 1] = d, T[Fe + 2] = b, T[Fe + 3] = Ee;
    }
  return K.putImageData(G, 0, 0), Gt.set(E, L), L;
}
function da(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function _o(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function fk(e, t, n, r, o, a, c) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), y = Math.max(Math.abs(u) - b, 0), v = Math.hypot(y, d) / r;
  if (v >= 1) return 0;
  const x = _o(da(e * 17 + 3, t * 13 + 7)), N = v + a * 0.22 * (x - 0.5);
  if (N >= 1) return 0;
  const k = N <= o ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - o)), A = dk(e, t, u, d, n, r), E = a * 0.55;
  if (A < E) return 0;
  const K = 0.45 + 0.55 * ((A - E) / Math.max(1e-4, 1 - E));
  return Math.round(255 * Math.min(1, c * k * K));
}
function dk(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = _o(da(c * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), y = Math.floor((r + a) / 1.5), v = _o(da(b * 23 + 800, y * 29 + 500)), x = _o(da(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + v * 0.3 + x * 0.15;
}
function pk(e, t, n, r, o) {
  const { r: a, g: c, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), v = Math.max(0, Math.min(1, o)), x = `crayon:${b}:${y}:${n.toFixed(2)}:${a}:${c}:${u}:${d.toFixed(3)}:${v.toFixed(2)}`;
  if (Gt.has(x)) {
    const K = Gt.get(x);
    return Gt.delete(x), Gt.set(x, K), K;
  }
  Gt.size >= zd && Gt.delete(Gt.keys().next().value);
  const N = $d(b, y), k = N.getContext("2d"), A = k.createImageData(b, y), E = A.data, L = Math.max(0, Math.min(1, n));
  for (let K = 0; K < y; K++)
    for (let G = 0; G < b; G++) {
      const T = fk(G, K, e, t, L, v, d);
      if (T <= 0) continue;
      const _ = (K * b + G) * 4;
      E[_] = a, E[_ + 1] = c, E[_ + 2] = u, E[_ + 3] = T;
    }
  return k.putImageData(A, 0, 0), Gt.set(x, N), N;
}
function Cy(e, t, n) {
  var A, E;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = sk(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = hk(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((A = t == null ? void 0 : t.angle) == null ? void 0 : A.value) ?? 0), b = lk(t, o), y = String(((E = t == null ? void 0 : t.targetSpace) == null ? void 0 : E.viewMode) || ""), v = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", x = t == null ? void 0 : t.scatter, N = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const L = o * u, K = o, G = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), T = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), _ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = uk(L, K, a, c, G, T, _);
  } else if (r === "crayon") {
    const L = o * u, K = o, G = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = pk(L, K, a, c, G);
  } else
    k = ck(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: N, latitudeCorrection: v };
}
function hk(e) {
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
function mk(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function og(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function u(b, y) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, y), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + c, n), t + d > c && u(t - c, n);
}
function jd(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: y } = e.scatter, v = b * e.radiusPx * o, x = da(t, n);
    for (let N = 0; N < y; N++) {
      const k = _o(x + N * 2) * Math.PI * 2, A = Math.sqrt(_o(x + N * 2 + 1)) * v, E = t + Math.cos(k) * A, L = n + Math.sin(k) * A, K = Math.max(0.5, e.radiusPx * o * 0.48), G = (0.5 - L / Math.max(1, e.desc.height)) * Math.PI, T = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(G)) : 1, _ = K * e.aspect * T;
      og(e, E, L, K, _);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * u;
  og(e, t, n, a, d);
}
function ag(e, t, n) {
  const r = ak(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = Cy(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let x = 0; x < r.length; x++) {
    let N = Number(r[x].u || 0) * o;
    const k = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(N - u[x - 1].x) > o * 0.5 && (N += N < u[x - 1].x ? o : -o), u.push({ x: N, y: k });
  }
  if (jd(c, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], y = u[0], v = 0;
  for (let x = 1; x < u.length; x++) {
    const N = u[x], k = { x: (b.x + N.x) * 0.5, y: (b.y + N.y) * 0.5 };
    x === 1 ? v = Ts(c, y.x, y.y, k.x, k.y, v) : v = ac(c, d, y, k, N, v), d = b, b = N, y = k;
  }
  u.length === 2 ? Ts(c, y.x, y.y, b.x, b.y, v) : ac(c, d, y, b, b, v), e.restore();
}
function Vl(e, t, n) {
  var v;
  const r = Array.isArray((v = t == null ? void 0 : t.geometry) == null ? void 0 : v.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = mk(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const N = ok(r[x]);
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
function vl(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Vl(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? ag(e, t, n) : (os = hi(os, n.width, n.height), jt(os), ag(os.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(os.canvas, 0, 0), e.restore());
}
function oo(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Ts(e, t, n, r, o, a) {
  const c = r - t, u = o - n, d = Math.hypot(c, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const y = b / d;
    jd(e, t + c * y, n + u * y, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function ac(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, v = u, x = v + d, N = x + b, k = x - v, A = 16;
  let E = a, L = n.x, K = n.y;
  for (let G = 1; G <= A; G++) {
    const T = v + k * G / A, _ = ((v - T) * t.x + (T - y) * n.x) / (v - y), $ = ((v - T) * t.y + (T - y) * n.y) / (v - y), B = ((x - T) * n.x + (T - v) * r.x) / (x - v), re = ((x - T) * n.y + (T - v) * r.y) / (x - v), _e = ((N - T) * r.x + (T - x) * o.x) / (N - x), P = ((N - T) * r.y + (T - x) * o.y) / (N - x), D = ((x - T) * _ + (T - y) * B) / (x - y), pe = ((x - T) * $ + (T - y) * re) / (x - y), Ce = ((N - T) * B + (T - v) * _e) / (N - v), fe = ((N - T) * re + (T - v) * P) / (N - v), U = ((x - T) * D + (T - v) * Ce) / (x - v), q = ((x - T) * pe + (T - v) * fe) / (x - v);
    E = Ts(e, L, K, U, q, E), L = U, K = q;
  }
  return E;
}
function gk(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * c;
  if (d && Math.abs(b - d.prev.x) > c * 0.5 && (b += b < d.prev.x ? c : -c), !d) {
    const N = Cy(o, r, a), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), A = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), E = String((r == null ? void 0 : r.toolKind) || "") === "eraser", L = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", jd(N, b, u, 1), e.activeStroke = {
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
      velocityWidthFactor: A,
      distSinceStamp: 0,
      isEraser: E,
      layerKind: L,
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
  d.pointCount === 1 ? d.distSinceStamp = Ts(x, d.lastMidX, d.lastMidY, y, v, d.distSinceStamp) : d.distSinceStamp = ac(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: v },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = y, d.lastMidY = v, d.pointCount++, e.displayDirty = !0;
}
function $f(e = {}) {
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
  function x(P) {
    return {
      actionGroupId: P,
      descriptor: r,
      committedPaint: ra(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function N(P) {
    let D = o.get(P);
    return D || (D = x(P), o.set(P, D)), D;
  }
  function k(P) {
    return y === "mask" ? c : b ? N(b) : u;
  }
  function A(P) {
    var q;
    const D = !v || v.length !== P.length || P.some((R, O) => R !== v[O]), pe = y === "paint" && ((q = b ? o.get(b) : u) == null ? void 0 : q.activeStroke) || null;
    let Ce = c.displayDirty || u.displayDirty || D;
    for (const R of P) {
      const O = o.get(R);
      if (O != null && O.displayDirty) {
        Ce = !0;
        break;
      }
    }
    if (pe && (Ce = !0), !Ce) return;
    c.displayDirty = !1, u.displayDirty = !1;
    for (const R of P) {
      const O = o.get(R);
      O && (O.displayDirty = !1);
    }
    v = [...P];
    const fe = d.ctx;
    jt(d);
    const U = !!(pe != null && pe.isEraser);
    for (const R of P) {
      const O = o.get(R);
      if (!O) continue;
      const ee = b === O.actionGroupId && y === "paint" ? O.activeStroke : null;
      if (U)
        qt = hi(qt, t, n), jt(qt), qt.ctx.drawImage(O.committedPaint.canvas, 0, 0), oo(qt.ctx, a.canvas), fe.drawImage(qt.canvas, 0, 0);
      else if (fe.drawImage(O.committedPaint.canvas, 0, 0), ee) {
        const Ee = O.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, ee.strokeOpacity ?? 1));
        fe.save(), fe.globalAlpha = Ee, fe.drawImage(a.canvas, 0, 0), fe.restore();
      }
    }
  }
  function E(P) {
    var pe, Ce, fe, U, q;
    for (const R of o.values())
      jt(R.committedPaint), jt(R.currentStroke), R.activeStroke = null, R.displayDirty = !0;
    jt(c.committedMask), jt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, u.displayDirty = !0, v = null;
    const D = [
      ...Array.isArray((Ce = (pe = P == null ? void 0 : P.painting) == null ? void 0 : pe.paint) == null ? void 0 : Ce.strokes) ? P.painting.paint.strokes : [],
      ...Array.isArray((U = (fe = P == null ? void 0 : P.painting) == null ? void 0 : fe.mask) == null ? void 0 : U.strokes) ? P.painting.mask.strokes : []
    ];
    for (const R of D) {
      if (((q = R == null ? void 0 : R.targetSpace) == null ? void 0 : q.kind) !== "ERP_GLOBAL") continue;
      const O = String((R == null ? void 0 : R.layerKind) || "paint"), ee = String((R == null ? void 0 : R.toolKind) || "pen") === "eraser";
      if (O === "mask") {
        const Ee = c.descriptor;
        ee ? (qt = hi(qt, Ee.width, Ee.height), jt(qt), vl(qt.ctx, R, Ee), oo(c.committedMask.ctx, qt.canvas)) : vl(c.committedMask.ctx, R, Ee);
        continue;
      }
      if (ee) {
        qt = hi(qt, r.width, r.height), jt(qt), vl(qt.ctx, R, r);
        for (const Ee of o.values())
          oo(Ee.committedPaint.ctx, qt.canvas), Ee.displayDirty = !0;
      } else {
        const Ee = String((R == null ? void 0 : R.actionGroupId) || "__default__"), Fe = N(Ee), vt = Fe.descriptor;
        vl(Fe.committedPaint.ctx, R, vt), Fe.displayDirty = !0;
      }
    }
    A([...o.keys()]);
  }
  function L(P, D) {
    y = String((P == null ? void 0 : P.layerKind) || "");
    const pe = String((P == null ? void 0 : P.toolKind) || "") === "eraser";
    if (y === "mask")
      b = null, jt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const Ce = pe ? u : N(String((P == null ? void 0 : P.actionGroupId) || "__default__"));
      b = pe ? "" : String((P == null ? void 0 : P.actionGroupId) || "__default__"), jt(Ce.currentStroke), Ce.activeStroke = null, Ce.displayDirty = !0;
    }
  }
  function K(P, D) {
    var O;
    const pe = String((P == null ? void 0 : P.layerKind) || "paint"), Ce = String((P == null ? void 0 : P.toolKind) || "") === "eraser", fe = pe === "mask" ? c : Ce ? u : N(String((P == null ? void 0 : P.actionGroupId) || b || "__default__")), U = fe.activeStroke, q = fe.descriptor;
    if (U && U.pointCount > 1) {
      const te = fe.currentStroke.ctx;
      te.globalCompositeOperation = "source-over";
      const ee = {
        ctx: te,
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
      U.pointCount === 2 ? Ts(ee, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : ac(ee, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    fe.lassoPreviewActive && (jt(fe.currentStroke), Vl(fe.currentStroke.ctx, P, q), fe.lassoPreviewActive = !1);
    const R = pe === "mask" ? c.committedMask : fe.committedPaint;
    if (Ce && pe === "paint")
      for (const te of o.values())
        oo(te.committedPaint.ctx, fe.currentStroke.canvas), te.displayDirty = !0;
    else if (Ce)
      oo(R.ctx, fe.currentStroke.canvas);
    else {
      const te = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      R.ctx.save(), R.ctx.globalAlpha = te, R.ctx.drawImage(fe.currentStroke.canvas, 0, 0), R.ctx.restore();
    }
    rk() && (String((P == null ? void 0 : P.toolKind) || ""), String((q == null ? void 0 : q.kind) || ""), Number((q == null ? void 0 : q.width) || 0), Number((q == null ? void 0 : q.height) || 0), String(((O = P == null ? void 0 : P.targetSpace) == null ? void 0 : O.viewMode) || ""), Number((P == null ? void 0 : P.aspect) ?? 1), ng(fe.currentStroke.canvas), ng(R.canvas), void 0), jt(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0, b = null, y = "", A([...o.keys()]);
  }
  function G(P) {
    if (y === "mask")
      jt(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (y === "paint" && !b)
      jt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b) {
      const D = o.get(b);
      D && (jt(D.currentStroke), D.activeStroke = null, D.lassoPreviewActive = !1, D.displayDirty = !0);
    }
    b = null, y = "", A([...o.keys()]);
  }
  function T(P, D) {
    var Ce;
    if (y = String((P == null ? void 0 : P.layerKind) || ""), String(((Ce = P == null ? void 0 : P.geometry) == null ? void 0 : Ce.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        jt(c.currentStroke), Vl(c.currentStroke.ctx, P, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const fe = String((P == null ? void 0 : P.toolKind) || "") === "eraser", U = fe ? u : N(String((P == null ? void 0 : P.actionGroupId) || b || "__default__"));
        b = fe ? "" : String((P == null ? void 0 : P.actionGroupId) || b || "__default__"), jt(U.currentStroke), Vl(U.currentStroke.ctx, P, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
      }
      A([...o.keys()]);
    }
  }
  function _(P) {
    return A(P ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function $(P) {
    return o.get(String(P)) ?? null;
  }
  function B() {
    return [...o.keys()];
  }
  function re(P) {
    var q;
    const D = o.get(String(P));
    if (!D) return null;
    const pe = y === "paint" && b === D.actionGroupId, Ce = y === "paint" && ((q = b ? o.get(b) : u) == null ? void 0 : q.activeStroke) || null;
    if (Ce != null && Ce.isEraser)
      return $n = hi($n, t, n), jt($n), $n.ctx.drawImage(D.committedPaint.canvas, 0, 0), oo($n.ctx, a.canvas), $n.canvas;
    const fe = pe ? D.activeStroke : null;
    if (!fe) return D.committedPaint.canvas;
    $n = hi($n, t, n), jt($n), $n.ctx.drawImage(D.committedPaint.canvas, 0, 0);
    const U = D.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, fe.strokeOpacity ?? 1));
    return $n.ctx.save(), $n.ctx.globalAlpha = U, $n.ctx.drawImage(a.canvas, 0, 0), $n.ctx.restore(), $n.canvas;
  }
  function _e() {
    return Vi = hi(Vi, t, n), jt(Vi), qu(Vi.ctx, c.committedMask.canvas), y === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (qt = hi(qt, t, n), jt(qt), qt.ctx.drawImage(c.committedMask.canvas, 0, 0), oo(qt.ctx, a.canvas), jt(Vi), qu(Vi.ctx, qt.canvas)) : qu(Vi.ctx, a.canvas)), Vi.canvas;
  }
  return {
    rebuildCommitted: E,
    beginStroke: L,
    appendStrokePoint: gk,
    updateActiveStroke: T,
    commitActiveStroke: K,
    cancelActiveStroke: G,
    getErpTarget: _,
    ensureTarget: k,
    getGroupTarget: $,
    getGroupDisplayCanvas: re,
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
function Hd(e, t) {
  let n = Ht(t) - Ht(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const zf = 3;
function as(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function sc(e, t = 0) {
  const n = as(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = as(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = as(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = as(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(as(t) || 0);
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
const sg = Math.PI / 180, lg = 0.12, yk = zf, bk = 35, vk = 140, ps = 100, _k = 20, cg = 0.8;
function wk(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = Z(Number(e || ps), 1, 179) * sg;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / sg;
}
function Gd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ps })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(K, G = null) {
    u && u(K, G);
  }
  function y(K, G, T = null, _ = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(K || 0), d.drag.lastY = Number(G || 0), d.drag.lastTs = Number(_ || performance.now()), d.drag.pointerId = T, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: T }), !0;
  }
  function v(K, G, T = "pano", _ = performance.now()) {
    if (!d.drag.active) return !1;
    const $ = Number(_ || performance.now()), B = Number(K), re = Number(G), _e = B - d.drag.lastX, P = re - d.drag.lastY;
    d.drag.lastX = B, d.drag.lastY = re, d.drag.lastTs = $;
    const D = r() || { x: 1, y: 1 }, pe = Number(D.x || 1), Ce = Number(D.y || 1), fe = { ...t() };
    let U = 0, q = 0;
    if (T === "unwrap") {
      const O = o() || { w: 1, h: 1 }, te = Math.max(1, Number(O.w || 1)), ee = Math.max(1, Number(O.h || 1)), Ee = _e / te, Fe = P / ee;
      U = -Ee * 360 * pe, q = Fe * 180 * Ce;
    } else {
      const O = a() || { w: 0, h: 0 }, te = Math.max(1, Number(O.w || 0)), ee = Math.max(1, Number(O.h || 0));
      if (te > 1 && ee > 1) {
        const Ee = Z(Number(fe.fov || ps), 1, 179), Fe = Z(wk(Ee, te, ee), 0.1, 179);
        U = -(_e / te) * Ee * pe, q = P / ee * Fe * Ce;
      } else
        U = -_e * lg * pe, q = P * lg * Ce;
    }
    fe.yaw = Ht(Number(fe.yaw || 0) + U), fe.pitch = Z(Number(fe.pitch || 0) + q, -89.9, 89.9), n(fe), d.velHistory.push({ ts: $, yaw: fe.yaw, pitch: fe.pitch });
    let R = 0;
    for (; R < d.velHistory.length - 1 && d.velHistory[R].ts < $ - 100; ) R++;
    return R > 0 && d.velHistory.splice(0, R), d.inertia.active = !1, d.inertia.lastTs = $, c(), b("drag", { phase: "move", dx: _e, dy: P, dYaw: U, dPitch: q }), !0;
  }
  function x(K = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const G = Number(K || performance.now());
    d.drag.lastTs = G;
    const T = d.velHistory.filter(($) => G - $.ts <= 80);
    if (T.length >= 2) {
      const $ = T[0], B = T.at(-1), re = Math.max(1e-3, (B.ts - $.ts) / 1e3);
      let _e = B.yaw - $.yaw;
      _e > 180 && (_e -= 360), _e < -180 && (_e += 360), d.inertia.vx = _e / re, d.inertia.vy = (B.pitch - $.pitch) / re;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const _ = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = _ > _k, d.inertia.lastTs = G, b("drag", { phase: "end", speed: _, inertiaActive: d.inertia.active }), !0;
  }
  function N(K = performance.now()) {
    if (!d.inertia.active) return !1;
    const G = Number(K || performance.now()), T = Math.max(1e-3, (G - (d.inertia.lastTs || G)) / 1e3);
    d.inertia.lastTs = G;
    const _ = { ...t() };
    _.yaw = Ht(Number(_.yaw || 0) + d.inertia.vx * T), _.pitch = Z(Number(_.pitch || 0) + d.inertia.vy * T, -89.9, 89.9);
    const $ = Math.exp(-5.5 * T);
    return d.inertia.vx *= $, d.inertia.vy *= $, Math.abs(d.inertia.vx) < cg && Math.abs(d.inertia.vy) < cg && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(_), c(), d.inertia.active;
  }
  function k() {
    const K = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], K;
  }
  function A(K) {
    const G = Math.sign(Number(K || 0));
    if (!G) return !1;
    const T = { ...t() }, _ = Number(T.fov || ps);
    return T.fov = Z(_ + G * yk, bk, vk), n(T), c(), b("wheel", { deltaSign: G, fovBefore: _, fovAfter: T.fov }), !0;
  }
  function E(K, G = 0) {
    return A(sc(K, G));
  }
  function L() {
    n({ yaw: 0, pitch: 0, fov: ps }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: v,
    endDrag: x,
    stepInertia: N,
    stopMotion: k,
    applyWheel: A,
    applyWheelEvent: E,
    resetView: L
  };
}
const Nt = Math.PI / 180, un = 180 / Math.PI;
function br(e, t, n) {
  return { x: e, y: t, z: n };
}
function lc(e, t) {
  return br(e.x + t.x, e.y + t.y, e.z + t.z);
}
function cc(e, t) {
  return br(e.x * t, e.y * t, e.z * t);
}
function Ju(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Kd(e) {
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
function uc(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function kt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function xk() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Sk(e) {
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
function kk(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Mk(e, t) {
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
function _l(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = Mk(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function Nk(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = _l(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = _l(e.points, t, 1);
  if (!a) return null;
  const c = _l(e.rawPoints, t, 1), u = _l(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function Pk(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = kk(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = Nk(e.geometry, n, r, t === "paint");
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
function ug(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = Pk(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function Ak(e) {
  if (!e || typeof e != "object") return null;
  const t = kt(e.u0, null), n = kt(e.v0, null), r = kt(e.u1, null), o = kt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function Ck(e) {
  const t = e || {};
  return {
    du: kt(t.du, 0) ?? 0,
    dv: kt(t.dv, 0) ?? 0,
    rot_deg: kt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, kt(t.scale, 1) ?? 1)
  };
}
function Ik(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = Ak(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, kt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: Ck(e.transform)
  } : null;
}
function Ok(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = Ik(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function pa(e) {
  const t = xk();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Sk(e.groups),
    paint: ug(e.paint, "paint"),
    mask: ug(e.mask, "mask"),
    raster_objects: Ok(e.raster_objects)
  };
}
const _r = 1, wr = 179, jf = 85;
function jc(e) {
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
  let r = et(e, 0) + et(t, 0) * un;
  return n && (r = Math.round(r / 15) * 15), jc(r);
}
function et(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Ni(e = {}) {
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
function wo(e, t) {
  const n = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Ni(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function Wd(e, t) {
  const n = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, et(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function Bd(e, t) {
  const n = Math.max(1e-12, et(t, 1)), r = Math.max(1e-6, et((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, et((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = Z(2 * Math.atan(r / (2 * n)) * un, _r, wr), c = Z(2 * Math.atan(o / (2 * n)) * un, _r, wr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function Ek(e, t, n) {
  const r = et(e == null ? void 0 : e.x, 0), o = et(e == null ? void 0 : e.y, 0), a = Math.max(1, et((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, et((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = Ni(t), d = Math.max(1e-12, et(n, 1)), b = 2 * d * u.tanHalfX, y = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (c - y) * 0.5,
    w: b,
    h: y,
    focalPx: d
  };
}
function Ud(e, t, n = jf) {
  const r = Math.max(1e-12, et(t, 1)), o = Z(et(n, jf), 1, 89.999), a = r * Math.tan(o * Nt), c = Math.max(1, et((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, et((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
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
function Fk(e, t) {
  const n = Z(et(e, 90), _r, wr), r = Math.max(1e-6, et(t, 1));
  return Z(
    2 * Math.atan(Math.tan(n * Nt * 0.5) / r) * un,
    _r,
    wr
  );
}
function $l(e, t) {
  const n = Z(et(e, 60), _r, wr), r = Math.max(1e-6, et(t, 1));
  return Z(
    2 * Math.atan(Math.tan(n * Nt * 0.5) * r) * un,
    _r,
    wr
  );
}
function fg(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Tk(e, t) {
  const n = fg(e, 1), r = fg(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), u = (b, y) => y ? u(y, b % y) : b, d = u(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function xo(e) {
  const t = Z(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Nt, n = Z(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Nt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function ho(e) {
  const t = xo(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || Tk(t, 1);
}
function Yd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = ho(t), t;
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
  return Yd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: et(t, 0),
    pitch_deg: Z(et(n, 0), -89.9, 89.9),
    roll_deg: jc(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function mi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : ho(e);
}
function Dy(e, t) {
  const n = Ni(e), r = et(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * un, a = 2 * Math.atan(n.tanHalfY * r) * un;
  return o < _r || o > wr || a < _r || a > wr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function Ly(e, t, n = zf) {
  const r = Math.sign(et(t, 0)), o = Math.abs(et(n, zf));
  if (!r || !(o > 0)) return null;
  const a = Ni(e), c = a.hFovDeg + r * o;
  if (c < _r || c > wr) return null;
  const u = Math.tan(c * Nt * 0.5);
  return Dy(e, u / a.tanHalfX);
}
function Ry(e, t) {
  const n = Ni(e), r = Pa(n.yawDeg, n.pitchDeg, n.rollDeg), o = et(t == null ? void 0 : t.x, 0), a = et(t == null ? void 0 : t.y, 0);
  return Kd(lc(lc(r.fwd, cc(r.right, o)), cc(r.up, a)));
}
function Dk(e) {
  return br(e.x, e.y, -e.z);
}
function zl(e) {
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
  const t = zl(br(e[0][0], e[1][0], e[2][0])), n = zl(br(e[0][1], e[1][1], e[2][1])), r = zl(br(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - c * n.x, c * t.x - u * t.z);
  return { yawDeg: o * un, pitchDeg: a * un, rollDeg: d * un };
}
function Ds(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Ao(e) {
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
function wl(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const go = 1e-6, Hf = 1e-6, Lk = 1e-9;
function Ls(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function Rk(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (c + u);
    Ls(0, n, o, 1, b) < t ? c = b : u = b;
  }
  return Ls(0, r, a, 1, 0.5 * (c + u));
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
  return Ls(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function Vk(e, t, n, r) {
  var b, y;
  const o = e.map((v) => v.value);
  let [a, c] = $y(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, c = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? c;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((v) => Ls(u[v], u[v] + a[v], d[v] + c[v], d[v], r));
}
function fc([e, t, n, r], [o, a, c, u]) {
  return [
    r * o + e * u + t * c - n * a,
    r * a - e * c + t * u + n * o,
    r * c + e * a - t * o + n * u,
    r * u - e * o - t * a - n * c
  ];
}
function $k(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Zu(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function zk([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function Gf(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function sa(e, t) {
  return zk(fc([-e[0], -e[1], -e[2], e[3]], t));
}
function Qu(e, t, n) {
  return fc(e, Gf(sa(e, t).map((r) => n * r)));
}
function ef(e, t) {
  const n = $k(e, t);
  if (Math.abs(n) > Hf) return n < 0;
  const [r, o, a] = sa(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > Hf) return c < 0;
  return !1;
}
function xl(e) {
  const { x: t, y: n, z: r, w: o } = Ao(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function Kf(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function jk(e, t, n, r) {
  const o = xl(e[n].value);
  let a = xl(e[n + 1].value);
  ef(o, a) && (a = Zu(a));
  const c = t[n + 1] - t[n], u = sa(o, a);
  let d = u;
  if (xa(e, n)) {
    let _ = xl(e[n - 1].value);
    ef(_, o) && (_ = Zu(_)), d = Sa(t, n, sa(o, _), u).map(($) => $ * c);
  }
  let b = u;
  if (xa(e, n + 1)) {
    let _ = xl(e[n + 2].value);
    ef(a, _) && (_ = Zu(_)), b = Sa(t, n + 1, sa(a, o), sa(a, _)).map(($) => $ * c);
  }
  const y = fc(o, Gf(d.map((_, $) => 0.5 * (_ - u[$])))), v = fc(a, Gf(u.map((_, $) => 0.5 * (_ - b[$])))), [x, N, k, A] = Qu(Qu(o, a, r), Qu(y, v, r), 2 * r * (1 - r)), { yawDeg: E, pitchDeg: L, rollDeg: K } = Vy(Ds({ x, y: N, z: k, w: A })), G = e[n].value, T = e[n + 1].value;
  return {
    yaw_deg: Kf(E, G.yaw_deg, T.yaw_deg, r),
    pitch_deg: L,
    roll_deg: Kf(K, G.roll_deg, T.roll_deg, r)
  };
}
function Rs(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function dc(e) {
  return Math.sqrt(Rs(e, e));
}
function pc(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function jy(e, t) {
  const n = Rs(e, t), r = t.map((c, u) => c - n * e[u]), o = dc(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function ia(e, t) {
  const n = dc(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Sl(e, t, n) {
  return ia(e, jy(e, t).map((r) => n * r));
}
function tf(e, t) {
  const n = pc(e[t].value), r = pc(e[t + 1].value), o = Rs(n, r), a = o < 0 && dc(r.map((d, b) => d - o * n[b])) <= Hf;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = jy(n, r);
  const u = dc(c);
  return [c, c.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function Hk(e, t, n, r) {
  const o = pc(e[n].value), a = pc(e[n + 1].value), [c, u, d] = tf(e, n);
  let b = c, y = u;
  const v = t[n + 1] - t[n];
  xa(e, n) && (b = Sa(t, n, tf(e, n - 1)[1].map((G) => -G), b).map((G) => G * v)), xa(e, n + 1) && (y = Sa(t, n + 1, y.map((G) => -G), tf(e, n + 1)[0]).map((G) => G * v));
  let x, N, k;
  if (d) {
    const G = Math.PI, T = Ls(0, Rs(b, c) / G / 3, G - Rs(y, u) / G / 3, G, r);
    [x, N, k] = ia(o, c.map((_) => T * _ / G));
  } else {
    const G = Sl(ia(o, b.map(($) => $ / 3)), ia(a, y.map(($) => -$ / 3)), r), T = Sl(ia(o, b.map(($) => r * $ / 3)), G, r), _ = Sl(G, ia(a, y.map(($) => -(1 - r) * $ / 3)), r);
    [x, N, k] = Sl(T, _, r);
  }
  const A = Math.hypot(x, k), E = e[n].value.yaw_deg, L = e[n + 1].value.yaw_deg;
  return { yaw_deg: A <= Lk ? E + (L - E) * r : Kf(Math.atan2(x, k) * 180 / Math.PI, E, L, r), pitch_deg: Math.atan2(N, A) * 180 / Math.PI };
}
function Gk(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = zy(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function Kk(e, t, n, r) {
  return zy(e, t, e.map((o) => o.value), n, r);
}
const Wk = { position: Vk, rotation: jk, direction: Hk, size: Gk };
function Bt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return wl(e[t].value);
  if (n <= r[0].frame + go) return wl(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - go) return wl(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + go; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= go || c.easing === "hold") return wl(c.value);
  const u = r.map((b) => b.frame), d = Rk(c.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (Wk[t] ?? Kk)(r, u, a, d);
}
function Wf(e) {
  return Math.min(179, Math.max(0.1, e));
}
function Bk(e) {
  return Math.min(1, Math.max(0, e));
}
function Hy(e) {
  return Math.max(1e-6, e);
}
function Gy(e, t) {
  return t - (e.start - e.in);
}
function ji(e, t) {
  return t >= e.start - go && (e.duration === null || t < e.start + e.duration - go);
}
function Xd(e, t) {
  return {
    position: Bt(e, "position", t),
    ...Bt(e, "rotation", t),
    hFOV_deg: Wf(Bt(e, "fov", t)),
    aspect: e.aspect
  };
}
function hc(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = Gy(o.clip, n);
  return {
    frame: n,
    camera: r == null ? null : Xd(r, n),
    scene: {
      active: ji(o.clip, n),
      clip_frame: a,
      position: Bt(o, "position", a),
      ...Bt(o, "rotation", a),
      scale: Hy(Bt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => So(c, n))
  };
}
function Uk(e, t) {
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
    hFOV_deg: Wf(n.hFOV_deg),
    vFOV_deg: Wf(n.vFOV_deg)
  };
}
function So(e, t) {
  const n = Gy(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && ji(e.clip, t),
    clip_frame: n,
    ...Uk(e, n),
    opacity: Bk(Bt(e, "opacity", n))
  };
}
const Yk = 2, Xk = ["sky", "world"], Bf = ["perspective", "erp"], qk = ["input", "output", "temp"], Ky = [0.42, 0, 0.58, 1];
function hn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Qt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Hc(e, t) {
  const n = Qt(e, t);
  return n !== null && n > 0 ? n : t;
}
function gr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ko(e) {
  const t = Qt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function dg(e, t) {
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
  const t = hn(e) ? e : {};
  return {
    yaw_deg: Qt(t.yaw_deg, 0),
    pitch_deg: gr(Qt(t.pitch_deg, 0), -90, 90),
    roll_deg: Qt(t.roll_deg, 0)
  };
}
function Jk(e) {
  return gr(Qt(e, 90), 0.1, 179);
}
function Zk(e) {
  return Hc(e, 1);
}
function Qk(e) {
  const t = hn(e) ? e : {};
  return {
    yaw_deg: Qt(t.yaw_deg, 0),
    pitch_deg: gr(Qt(t.pitch_deg, 0), -90, 90)
  };
}
function eM(e) {
  return Qt(e, 0);
}
function tM(e) {
  const t = hn(e) ? e : {};
  return {
    hFOV_deg: gr(Qt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: gr(Qt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Yy(e) {
  return gr(Qt(e, 1), 0, 1);
}
const qd = [["position", By], ["rotation", Uy], ["fov", Jk]], Gc = [["position", By], ["rotation", Uy], ["scale", Zk]], Jd = [["direction", Qk], ["roll", eM], ["size", tM], ["opacity", Yy]], Zd = [...Gc, ["opacity", Yy]];
function nM(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Qt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...Ky];
}
function rM(e) {
  if (!hn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Wy(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function iM(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!hn(o)) continue;
    const a = ko(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: nM(o.easing) }, u = n ? rM(o.handles) : null;
    u && (c.handles = u), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function Qd(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = hn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: iM(a.keyframes, o, r === "position") };
  }
  return n;
}
function Xy(e) {
  const t = hn(e) ? e : {}, n = ko(t.start), r = ko(t.in), o = ko(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function oM(e) {
  const t = hn(e) ? e : {}, n = gr(Qt(t.x0, 0), 0, 1), r = gr(Qt(t.y0, 0), 0, 1), o = gr(Qt(t.x1, 1), 0, 1), a = gr(Qt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function aM(e) {
  if (!hn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: qk.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function sM(e) {
  const t = aM(e.source);
  if (!t) return null;
  const n = Xk.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: Xy(e.clip),
    visible: dg(e.visible, !0),
    locked: dg(e.locked, !1),
    crop: oM(e.crop),
    ...Qd(e, r ? Zd : Jd)
  };
  return r || (o.z_index = ko(e.z_index) ?? 0), o;
}
function lM(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = hn(a) ? sM(a) : null;
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
  if (!hn(e)) return null;
  const t = Bf.includes(e.projection) ? e.projection : Bf[0];
  return { aspect: Hc(e.aspect, 1), projection: t, ...Qd(e, qd) };
}
function ep() {
  return qy({});
}
function mc(e) {
  const t = hn(e.timeline) ? e.timeline : {}, n = hn(e.scene) ? e.scene : {}, r = ko(t.length);
  return {
    version: Yk,
    timeline: {
      fps: Hc(t.fps, 24),
      length: r !== null && r >= 1 ? r : null
    },
    camera: qy(e.camera),
    scene: { clip: Xy(n.clip), ...Qd(n, Gc) },
    stickers: lM(e.stickers),
    painting: pa(e.painting),
    painting_layer: hn(e.painting_layer) ? structuredClone(e.painting_layer) : null
  };
}
function cM(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!hn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function uM(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!hn(t)) return null;
  const n = gr(Qt(t.hFOV_deg, 90), 1, 179), r = gr(Qt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function fM(e) {
  const t = hn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(hn) : [];
  return n.sort((r, o) => Qt(r.z_index, 0) - Qt(o.z_index, 0)), mc({
    camera: uM(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: cM(r, t),
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
  if (e == null || typeof e == "string" && !e.trim()) return mc({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!hn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? fM(t) : mc(t);
}
function Uf(e) {
  var r;
  if (((r = e.camera) == null ? void 0 : r.projection) !== Bf[0]) return JSON.stringify(e);
  const { projection: t, ...n } = e.camera;
  return JSON.stringify({ ...e, camera: n });
}
function nf(e, t, n, r, o) {
  const a = {};
  for (const [c] of t)
    a[c] = {
      value: e[c].value,
      keyframes: e[c].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function pg(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function Vs(e, t) {
  if (Hc(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (c) => ko(c * n), { length: o } = e.timeline, a = pg(e.scene.clip, r);
  return mc({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...nf(e.camera, qd, r, 0, 0) },
    scene: { clip: a.clip, ...nf(e.scene, Gc, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((c) => {
      const { clip: u, anchor: d, newAnchor: b } = pg(c.clip, r), y = c.placement === "world" ? Zd : Jd;
      return { ...c, clip: u, ...nf(c, y, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function rf(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Jy(e) {
  return Array.isArray(e) ? [...e] : e;
}
function tp(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= go);
}
function Zy(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? Jy(e.keyframes[r - 1].easing) : [...Ky];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function On(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = rf(o.value, r);
    return;
  }
  const a = tp(o, n);
  a ? a.value = rf(a.value, r) : Zy(o, n, rf(Bt(e, t, n), r));
}
function Ki(e) {
  return e.placement === "world" ? Zd.map(([t]) => t) : e.placement === "sky" ? Jd.map(([t]) => t) : (e.clip ? Gc : qd).map(([t]) => t);
}
function dM(e, t) {
  for (const n of Ki(e))
    tp(e[n], t) || Zy(e[n], t, Bt(e, n, t));
}
function pM(e) {
  const t = Ki(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function hM(e, t) {
  return Ki(e).every((n) => !!tp(e[n], t));
}
function mM(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Bt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = u);
  }
}
function gM(e, t, n, r, o) {
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
function yM(e, t, n) {
  const r = Qy(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function bM(e, t, n, r) {
  for (const o of Qy(e, t, n)) o.easing = Jy(r);
}
function vM(e, t) {
  e.start = Math.max(0, e.start + t);
}
function _M(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function wM(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function xM(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Yf(e) {
  return Ki(e).map((t) => e[t]);
}
function eb(e) {
  return Yf(e).some((t) => t.keyframes.length > 0) || !!e.clip && !xM(e.clip);
}
function tb(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(eb);
}
function nb(e, { minimum: t, frames: n = 0, openClip: r = null, camera: o = !1 }) {
  let a = e.timeline.length ?? Math.max(t, n);
  if (o && e.camera)
    for (const c of Yf(e.camera))
      for (const u of c.keyframes) a = Math.max(a, u.frame + 1);
  for (const c of [e.scene, ...e.stickers]) {
    const { clip: u } = c;
    a = Math.max(a, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const d of Yf(c))
      for (const b of d.keyframes) a = Math.max(a, u.start - u.in + b.frame + 1);
  }
  return a;
}
function SM(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let kl = { text: null, parsed: null };
function Xn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function gc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function kM({
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
    ui_settings: gc(r),
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
function MM(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function NM(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function PM(e) {
  return Array.isArray(e) ? e.map((t) => Yd(t)) : [];
}
function AM(e, t) {
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
  }, r = kM(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (kl.text === o ? a = kl.parsed : (a = JSON.parse(o), kl = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: MM(a.assets),
      stickers: NM(a.stickers),
      shots: PM(a.shots),
      painting: pa(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: gc(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (u.ui_settings = gc({ ...u.ui_settings, ...c })), u.output_preset = rb(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Xn(n.coverage), delete u.editor_history, u;
  } catch {
    return kl = { text: o, parsed: null }, r;
  }
}
function hg(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function CM(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function IM(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
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
  u && u !== y.timeline.fps && (y = Vs(y, u));
  const v = b && y.camera === null;
  if (v && (y = { ...y, camera: ep() }), d) {
    let x = qr(d);
    u && u !== x.timeline.fps && (x = Vs(x, u)), y = { ...x, camera: y.camera, cutout_state: y };
  }
  return {
    ...y,
    ...v ? { default_camera: !0 } : {},
    coverage: Xn(o),
    bg_color: r,
    output_preset: rb(n),
    ui_settings: gc(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function OM(e, t) {
  e.cutout_state && (e.cutout_state = Vs(e.cutout_state, t));
  const n = Vs(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, c] of o)
    if (c) {
      a.clip && (a.clip = c.clip);
      for (const u of Ki(a)) a[u].keyframes = c[u].keyframes;
    }
}
function np(e, t) {
  const n = So(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const EM = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function mg(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function FM(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[EM[n]].keyframes.length));
}
function ab(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = mg(n, ["yaw_deg", "pitch_deg"]), a = mg(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && On(e, "direction", r, o), n.rot_deg !== void 0 && On(e, "roll", r, n.rot_deg), Object.keys(a).length && On(e, "size", r, a);
}
const Kc = ["position_x", "position_y", "position_z"], Xf = "camera";
function gg(e, t) {
  const n = Xd(e, t);
  return Yd({
    id: Xf,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: Fk(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function TM(e) {
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
function DM(e) {
  return e - 360 * Math.round(e / 360);
}
function LM(e, t, n, r) {
  const o = {};
  for (const a of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[a] !== r[a] && (o[a] = r[a] + DM(n[a] - r[a]));
  Object.keys(o).length && On(e, "rotation", t, o), n.hFOV_deg !== r.hFOV_deg && On(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * Nt * 0.5) / Math.tan(n.vFOV_deg * Nt * 0.5)), n.position.some((a, c) => a !== r.position[c]) && On(e, "position", t, [...n.position]);
}
function RM(e, t) {
  const n = Bt(e, "position", t), r = Bt(e, "rotation", t);
  return {
    ...Object.fromEntries(Kc.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Bt(e, "fov", t)
  };
}
function VM(e, t, n, r) {
  const o = Kc.indexOf(n);
  if (o >= 0) {
    const a = Bt(e, "position", t);
    a[o] = r, On(e, "position", t, a);
  } else n === "hFOV_deg" ? On(e, "fov", t, r) : On(e, "rotation", t, { [n]: r });
}
function $M(e, t, n) {
  On(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function zM(e, t) {
  const n = So(e, t);
  return {
    ...Object.fromEntries(Kc.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function jM(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = Kc.indexOf(n);
  if (a >= 0) {
    const c = Bt(e, "position", o);
    c[a] = r, On(e, "position", o, c);
  } else n === "scale" ? On(e, "scale", o, r) : n === "opacity" ? On(e, "opacity", o, r / 100) : On(e, "rotation", o, { [n]: r });
}
function HM(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && On(e, o, r, n[o]);
}
function GM(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function KM(e, t, n) {
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
function jl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function sb(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function rp(e, t, n, r) {
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
function WM(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Ht(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function qf(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function lb(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function cb(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function yg(e) {
  e.default_camera && JSON.stringify(qr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(ep()) && delete e.default_camera;
}
function ub(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = qr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(ep()) && (n.camera = null), Uf(n);
}
function fb(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const o = qr(n);
    if (Uf(o) === t) return !0;
    const { fps: a } = JSON.parse(t).timeline;
    return r && a !== o.timeline.fps && Uf(Vs(o, a)) === t;
  } catch {
    return !1;
  }
}
const of = 0.15, BM = 0.01, UM = 1e-3, YM = 0.05, XM = 4, bg = 250, qM = 16, Kr = 1, JM = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function ir(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Jr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Wc(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function Aa(e, t, n = 0) {
  const r = Jn(e, t, n), o = Jr(r, 2);
  return { right: Jr(r, 0), up: Jr(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function ZM(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function Jf(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function QM(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : Jf(e, "3dof", n);
}
function eN(e) {
  return ir(e.position, Aa(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Ui(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Ns(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function ha(e, t) {
  return Ns(Ui(t, e.position), Aa(e.yaw_deg, e.pitch_deg).forward);
}
function af(e, t, n = null, r = Kr) {
  if (t) return t;
  const o = Math.max(r, 1e-6) * YM;
  if (n && ha(e, n) > 0) {
    const a = Ui(n, e.position), c = Math.hypot(...a);
    return c >= o ? n : ir(e.position, a, o / c);
  }
  return ir(e.position, Aa(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function vg(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > XM ? !1 : t.time - e.time < bg || e.cost > qM && t.time - e.wheelTime < bg;
}
function ip(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Nt);
  return { tanX: r, tanY: r * n / t };
}
function _g(e, t, n, r, o = eN(e)) {
  const a = Ht(e.yaw_deg + t / r * 360), c = Z(e.pitch_deg - n / r * 360, -89.9, 89.9), u = Jn(e.yaw_deg, e.pitch_deg, 0), d = Jn(a, c, 0), b = Ui(e.position, o), y = [0, 1, 2].map((x) => Ns(Jr(u, x), b)), v = { ...e, yaw_deg: a, pitch_deg: c, position: ir(o, Wc(d, y)) };
  return { ...v, distance: ha(v, o) };
}
function wg(e, t, n, r, o, a = e.distance) {
  const { right: c, up: u } = Aa(e.yaw_deg, e.pitch_deg), d = 2 * a * ip(e, r, o).tanY / o;
  return { ...e, position: ir(ir(e.position, c, -t * d), u, n * d), distance: a };
}
function xg(e, t, n, r = Kr) {
  const o = Ui(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const c = Math.max(r, 1e-6), u = c * BM, d = n > 0 ? Math.min(Math.max(a * of, u), a - c * UM) : -Math.max(a * of / (1 - of), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: ir(e.position, o, d / a) };
  return { ...b, distance: ha(b, t) };
}
function Sg(e, t, n, r) {
  const { tanX: o, tanY: a } = ip(e, n, r), c = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(c) * 1.1, { forward: d } = Aa(e.yaw_deg, e.pitch_deg);
  return { ...e, position: ir(t.center, d, -u), distance: u };
}
function sf(e, t, n, r = null) {
  return db({
    quaternion: Ao(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(ip(e, t, n).tanY) * un,
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
function $s(e, t, n, r) {
  const { right: o, up: a, forward: c } = pb(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * c[0] + u[1] * c[1] + u[2] * c[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * Nt), y = b * e.aspect, v = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], x = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + v / d / y), y: r * 0.5 * (1 - x / d / b), z: d };
}
function pb(e) {
  const t = Ds(e.quaternion), n = Jr(t, 2);
  return { right: Jr(t, 0), up: Jr(t, 1), forward: n.map((r) => -r) };
}
function kg(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function tN({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function hb(e, t) {
  if (!e || !t.active) return null;
  const n = iN(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: Zf(t),
    itemQuaternion: e.kind === "splat" ? JM : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function nN(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], c = hb(e, a);
  return c && { ...c, id: o.id, opacity: a.opacity, value: a };
}
function rN(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function iN(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function Zf(e) {
  return {
    position: [...e.position],
    quaternion: Ao(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Qf(e, t) {
  return ir(e.position, Wc(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function ed(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function td({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function nd(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((c) => c[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((c) => c[a]))), r = t.map((a, c) => (a + n[c]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function oN(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...td(t).map((a) => Qf(e.scene, a)));
  for (const a of n) o.push(...op(a));
  for (const { box: a, value: c } of r) o.push(...td(a).map((u) => Qf(c, u)));
  return o;
}
function aN(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: Ao(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Jn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function op(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => ir(e.position, Wc(e.rotation, [r, o, 0])));
}
function sN(e, t = null) {
  const { sticker: n, value: r, plane: o, item: a } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : o ? nd(op(o)) : a != null && a.box ? nd(td(ed(a.kind, a.box)).map((c) => Qf(r, c))) : { center: [...r.position], radius: r.scale };
}
const lN = 2, cN = 0.5, uN = 30;
function mb(e, t) {
  const n = Ui(t, e), r = Math.atan2(n[0], -n[2]) * un, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * un;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function fN(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * cN : lN, a = t ? [...t] : ir(e.position, Aa(e.yaw_deg, e.pitch_deg).forward, o), c = Math.hypot(...Ui(a, e.position)), u = c > 0 ? mb(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(c, 1e-3) * Math.tan(uN * 0.5 * Nt);
  return { position: a, rotation: u, scale: d };
}
function Mg(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function dN(e) {
  return [0, 1, 2].map((t) => Jr(e, t));
}
function Ng(e, t, n, r) {
  if (e === "translate") return { position: ir(t.position, Ui(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * yN(n.scale, r.scale) / n.scale };
  const o = Mg(Ds(r.quaternion), dN(Ds(n.quaternion))), a = Mg(o, Jn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: c, pitchDeg: u, rollDeg: d } = Vy(a);
  return Math.abs(u) <= pN ? { rotation: { yaw_deg: c + 0, pitch_deg: u, roll_deg: d + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: u, roll_deg: hN(a, t.yaw_deg) } };
}
const pN = 89.9;
function hN(e, t) {
  const n = Jr(e, 0), r = Jr(e, 1), o = Math.cos(t * Nt), a = Math.sin(t * Nt);
  return Math.atan2(a * -r[2] - o * r[0], o * n[0] - a * -n[2]) * un + 0;
}
const mN = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function gN(e, t, n, r, o) {
  if (!$s(e, t, r, o)) return null;
  const { right: a, up: c, forward: u } = pb(e), d = Ui(t, e.position), b = Ns(d, a), y = Ns(d, c), v = Ns(d, u), x = Math.tan(e.fovY_deg * 0.5 * Nt), N = x * e.aspect, k = Math.hypot(b, y, v) * mN[n] * Math.min(1.9 * x, 7) / 4;
  if (!(v > k)) return { minX: 0, maxX: r, minY: 0, maxY: o };
  const A = (T) => {
    const _ = k * Math.sqrt(T * T + v * v - k * k);
    return [(T * v - _) / (v * v - k * k), (T * v + _) / (v * v - k * k)];
  }, [E, L] = A(b), [K, G] = A(y);
  return {
    minX: r * 0.5 * (1 + E / N),
    maxX: r * 0.5 * (1 + L / N),
    minY: o * 0.5 * (1 - G / x),
    maxY: o * 0.5 * (1 - K / x)
  };
}
function yN(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, c) => Math.abs(c - e) > Math.abs(a - e) ? c : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function bN(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Pg(e, t) {
  const n = Jn(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * Nt) * t, o = r / e.aspect, a = (b, y, v) => ir(e.position, Wc(n, [b, y, v])), c = [a(-r, -o, -t), a(r, -o, -t), a(r, o, -t), a(-r, o, -t)], u = c.map((b) => [e.position, b]);
  c.forEach((b, y) => u.push([b, c[(y + 1) % 4]]));
  const d = [a(-r * 0.5, o * 1.1, -t), a(0, o * 1.5, -t), a(r * 0.5, o * 1.1, -t)];
  return u.push([d[0], d[1]], [d[1], d[2]], [d[2], d[0]]), u;
}
function vN(e, t, n, r, o, a = 6) {
  return t.some(([c, u]) => {
    const d = $s(e, c, r, o), b = $s(e, u, r, o);
    if (!d || !b) return !1;
    const y = b.x - d.x, v = b.y - d.y, x = Z(((n.x - d.x) * y + (n.y - d.y) * v) / Math.max(y * y + v * v, 1e-12), 0, 1);
    return Math.hypot(d.x + y * x - n.x, d.y + v * x - n.y) <= a;
  });
}
function _N(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function wN(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Bt(r, "position", 0)];
  const o = Math.max(t - 1, 0), a = Math.min(n, o + 1);
  return Array.from({ length: a }, (c, u) => {
    const d = a === 1 ? 0 : u * o / (a - 1);
    return Bt(r, "position", d);
  });
}
const Ag = 2048, gb = 0.28;
function yb(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Nt);
  return {
    quaternion: Ao(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * un,
    aspect: r
  };
}
function Ps(e) {
  const t = Ni(e);
  return {
    quaternion: Ao(Jn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Cg(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = Ud(n, r), c = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * un,
      vFOV_deg: 2 * Math.atan(a / r) * un
    }
  };
}
function bb(e, t, n) {
  const [[r, o, a], [c, u, d], [b, y, v]] = Ds(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * Nt), N = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, A = 1e-4) {
      const E = Dk(k), L = r * E.x + c * E.y + b * E.z, K = o * E.x + u * E.y + y * E.z, G = -(a * E.x + d * E.y + v * E.z), T = Math.max(G, A);
      return {
        x: t * 0.5 * (1 + L / T / N),
        y: n * 0.5 * (1 - K / T / x),
        z: G
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, A) {
      const E = (k / t * 2 - 1) * N, L = (1 - A / n * 2) * x;
      return Kd(zl({
        x: r * E + o * L - a,
        y: c * E + u * L - d,
        z: b * E + y * L - v
      }));
    }
  };
}
function xN(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = hc(e, t), c = [];
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
      quaternion: Ao(Jn(b.yaw_deg, b.pitch_deg, b.roll_deg)),
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
  return xN(e, t, {
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
function SN(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function kN(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = hc(e, t), c = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const y = o.get(u.id), v = y ? r(y) : null;
    if (!v) return;
    const { width: x, height: N } = SN(v.media), k = aN(b, u.crop, x, N);
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
const lf = /* @__PURE__ */ new WeakMap();
let MN = 1;
function rd(e) {
  return lf.has(e) || lf.set(e, MN++), lf.get(e);
}
function Ig(e) {
  return e && typeof e == "object" ? rd(e) : e;
}
function Og({ background: e, layers: t }) {
  return JSON.stringify([
    e && [rd(e.media), Ig(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, rd(n.media), Ig(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function NN({ onReady: e, onFailed: t, onUpdate: n = () => {
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
function yc(e, t, n) {
  return yb({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function PN(e) {
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
const wb = PN(
  () => import("./.lazy/pano_three_view-DwTlaKAE.js").then((e) => e.$).then((e) => e.createThreeView())
), Yi = ["erp_image", "bg_erp", "bg_media"], Hl = ["source"], ap = ["sticker_image", "sticker"], xb = ["scene"], AN = {
  background: [...Yi, ...Hl],
  "external-sticker": [...ap, ...Hl],
  scene: [...xb, ...Hl]
};
function Sb(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function id(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = Sb(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function CN(e, t) {
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
function IN(e, t) {
  const { graph: n, entry: r } = kb(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = Sb(o.get(c == null ? void 0 : c.link));
    u && (a[String((c == null ? void 0 : c.name) || "")] = u);
  }
  return a;
}
const Mb = [...Yi, ...ap, ...xb, ...Hl], ON = 256, oa = /* @__PURE__ */ new Map(), cf = /* @__PURE__ */ new WeakMap();
let Nb = () => null;
function Pb(e) {
  return cf.has(e) || cf.set(e, JSON.stringify(e)), cf.get(e);
}
function EN(e) {
  Nb = e;
}
function bc(e, t) {
  const n = Pb(e);
  oa.delete(n), oa.set(n, t), oa.size > ON && oa.delete(oa.keys().next().value);
}
function xn(e, t) {
  var a;
  const n = e ? Nb(e) : null;
  if (!n) return !0;
  const r = id(e);
  let o = oa.get(Pb(n));
  if (o)
    bc(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((c) => Mb.includes(c == null ? void 0 : c.name)))) return !0;
    bc(n, r), o = r;
  }
  return AN[t].every((c) => o[c] === r[c]);
}
const vc = /* @__PURE__ */ new WeakSet();
async function od(e, t) {
  if (vc.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && vc.add(e), n.ok && r !== void 0 ? r : null;
}
function Ab(e, t) {
  var a, c, u, d, b;
  const n = (u = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = kb(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((y) => Mb.includes(y == null ? void 0 : y.name))) ? null : { output: o, inputs: IN(n, t) };
}
const Gl = /* @__PURE__ */ new Map();
function FN(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Gl.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await od(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = Ab(o, a);
        c && bc(c.output, c.inputs);
      }
    });
}
const TN = 5;
function DN(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${TN}`, r = od(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, od(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
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
function LN(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let qo = null;
async function RN(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || vc.has(n) || (u = Gl.get(o)) != null && u.has(r) || LN(t)) return null;
  (qo == null ? void 0 : qo.workflowId) !== o && (qo = { workflowId: o, history: DN(n, o) }, queueMicrotask(() => {
    qo = null;
  }));
  const c = await qo.history.lastNodeOutput(e, a);
  return a() ? c ? (bc(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (vc.has(n) || Gl.set(o, (Gl.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function Eg(e, t, n, r = Yi) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const Fg = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Kl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Fg.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Fg.test(String((e == null ? void 0 : e.filename) || ""));
}
const uf = /* @__PURE__ */ new WeakMap();
function VN(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function ad(e) {
  return VN(e) ? (uf.has(e) || uf.set(e, Math.random().toString(36).slice(2, 10)), uf.get(e)) : "run";
}
function Cb(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function $N(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const u of c) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, y) => y)));
    }
  };
  return o(e, t), r;
}
function sp(e, t = [], n = null) {
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
function zN({
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
    var L, K;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", y), r.removeEventListener("play", v), r.removeEventListener("pause", x), r.removeEventListener("error", k), r.pause(), (L = r.removeAttribute) == null || L.call(r, "src"), (K = r.load) == null || K.call(r));
  }, failed: () => N };
}
function ao(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function jN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Tg(e, t, n = null) {
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
  return !r && n != null && (r = jN(e == null ? void 0 : e.graph, n)), r;
}
function HN(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function GN(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function KN(e) {
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
      const $ = String(_[0] || "").trim();
      if ($)
        return ao(t, {
          filename: $,
          subfolder: String(_[1] || "").trim(),
          type: String(_[2] || "output").trim() || "output"
        });
      for (const B of _) {
        const re = o(B);
        if (re) return re;
      }
      return "";
    }
    return typeof (_ == null ? void 0 : _.src) == "string" && _.src ? _.src : typeof (_ == null ? void 0 : _.url) == "string" && _.url ? _.url : ao(t, _);
  }, a = (_) => {
    if (!_ || typeof _ != "object") return "";
    const $ = String(_.type || "").trim().toLowerCase();
    if ($ === "dataurl") return String(_.value || "");
    if ($ !== "comfy_image") return "";
    const B = String(_.filename || "").trim();
    return B ? ao(t, {
      filename: B,
      subfolder: String(_.subfolder || ""),
      type: String(_.storage || "input")
    }) : "";
  }, c = (_) => {
    const $ = e == null ? void 0 : e.nodeOutputs;
    if (!$ || _ == null) return null;
    const B = String(_);
    return $ instanceof Map ? $.get(_) || $.get(B) || $.get(Number(B)) || null : $[_] || $[B] || null;
  }, u = (_, $) => {
    var re;
    const B = c(_ == null ? void 0 : _.id);
    return Array.isArray((re = B == null ? void 0 : B.ui) == null ? void 0 : re[$]) ? B.ui[$] : Array.isArray(B == null ? void 0 : B[$]) ? B[$] : [];
  }, d = (_, $) => {
    const B = c(_ == null ? void 0 : _.id);
    return B != null && B.ui && Object.prototype.hasOwnProperty.call(B.ui, $) ? B.ui[$] : B && Object.prototype.hasOwnProperty.call(B, $) ? B[$] : null;
  }, b = (_, $) => {
    const B = d(_, "pano_sticker_input_state_hash"), re = Array.isArray(B) ? B[0] : B;
    return String(re ?? "").trim() || KN($);
  }, y = (_) => {
    const $ = [], B = /* @__PURE__ */ new Set();
    for (const re of _ || []) {
      const _e = o(re);
      !_e || B.has(_e) || (B.add(_e), $.push(_e));
    }
    return $;
  }, v = (_, $) => {
    var _e;
    const B = [];
    Array.isArray(_ == null ? void 0 : _.images) && _.images.length && B.push(_.images), Array.isArray((_e = _ == null ? void 0 : _.ui) == null ? void 0 : _e.images) && _.ui.images.length && B.push(_.ui.images);
    const re = [];
    for (const P of B)
      $ >= 0 && $ < P.length && re.push(P[$]), re.push(...P);
    return re;
  }, x = (_, $) => {
    var te;
    const B = String($ || "").trim();
    if (!B) return { src: "", sourceType: "", inputName: "" };
    const _e = (Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : []).findIndex((ee) => String((ee == null ? void 0 : ee.name) || "") === B);
    if (_e < 0) return { src: "", sourceType: "", inputName: B };
    const P = _.graph ? _.getInputLink(_e) : null;
    if ((P == null ? void 0 : P.origin_id) == null) return { src: "", sourceType: "", inputName: B };
    const D = P.origin_id, pe = Tg(_, _e, D);
    if (!pe) return { src: "", sourceType: "", inputName: B };
    const Ce = Number(P.origin_slot ?? 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(pe) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const ee = [];
      Ce >= 0 && Ce < fe.length && ee.push(fe[Ce]), ee.push(...fe);
      const Ee = y(ee.filter((Fe) => !Kl(Fe)));
      if (Ee.length)
        return { src: Ee[0], srcCandidates: Ee, sourceType: "appNodeImageUrls", inputName: B };
    }
    const U = c((pe == null ? void 0 : pe.id) ?? D), q = y(v(U, Ce).filter((ee) => !Kl(ee))).map((ee) => `${ee}&pano_src=${ad(U)}`);
    if (q.length)
      return { src: q[0], srcCandidates: q, sourceType: "nodeOutputs", inputName: B };
    const R = Array.isArray(pe == null ? void 0 : pe.imgs) ? pe.imgs : [];
    if (R.length) {
      const ee = [];
      Ce >= 0 && Ce < R.length && ee.push(R[Ce]), ee.push(...R);
      const Ee = y(ee);
      if (Ee.length)
        return { src: Ee[0], srcCandidates: Ee, sourceType: "nodeImgs", inputName: B };
    }
    const O = (te = pe == null ? void 0 : pe.widgets) == null ? void 0 : te.find((ee) => String((ee == null ? void 0 : ee.name) || "").toLowerCase() === "image");
    if (O) {
      let ee = o(O.value);
      if (ee && !ee.includes("/") && !ee.includes(":") && (pe.comfyClass === "LoadImage" || pe.type === "LoadImage") && (ee = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(ee)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(ee)}&type=input&subfolder=`), ee) return { src: ee, sourceType: "widget", inputName: B };
    }
    return { src: "", sourceType: "", inputName: B };
  }, N = (_, $ = []) => {
    var re;
    const B = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : [];
    for (const _e of $) {
      const P = B.findIndex((fe) => String((fe == null ? void 0 : fe.name) || "") === _e), D = P >= 0 && _.graph ? _.getInputLink(P) : null;
      if ((D == null ? void 0 : D.origin_id) == null) continue;
      const pe = c(((re = Tg(_, P, D.origin_id)) == null ? void 0 : re.id) ?? D.origin_id), Ce = (Array.isArray(pe == null ? void 0 : pe.images) ? pe.images : []).find(Kl);
      return Ce ? `${ao(t, Ce)}&pano_src=${ad(pe)}` : "";
    }
    return "";
  }, k = (_, $ = []) => {
    const B = Array.isArray($) ? $ : [$];
    for (const re of B) {
      const _e = x(_, re);
      if (String((_e == null ? void 0 : _e.src) || "").trim()) return _e;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, A = (_) => {
    const $ = String(_ || "").trim();
    if (!$) return [];
    if (HN($)) return [$];
    const { filename: B, subfolder: re } = GN($);
    return B ? y([
      ao(t, { filename: B, subfolder: re, type: "temp" }),
      ao(t, { filename: B, subfolder: re, type: "output" }),
      ao(t, { filename: B, subfolder: re, type: "input" }),
      $
    ]) : [$];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (_) => {
      var $, B;
      try {
        (B = ($ = _ == null ? void 0 : _.__panoLinkedInputImageCache) == null ? void 0 : $.forEach) == null || B.call($, (re, _e, P) => {
          var D;
          re != null && re.img && ((D = r == null ? void 0 : r.isImageLoadFailed) != null && D.call(r, re.img)) && P.delete(_e);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (_, $) => {
      var B;
      (B = _ == null ? void 0 : _.delete) == null || B.call(_, `__ui__${String($ || "")}`);
    },
    linkedValue: (_, $) => {
      var D, pe, Ce, fe;
      const B = String($ || ""), re = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === B) : -1, _e = re >= 0 && _.graph ? _.getInputLink(re) : null;
      if (_e) {
        const U = c(_e.origin_id), q = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (D = U == null ? void 0 : U.data) == null ? void 0 : D.output,
          (pe = U == null ? void 0 : U.data) == null ? void 0 : pe.result,
          (Ce = U == null ? void 0 : U.ui) == null ? void 0 : Ce.output,
          (fe = U == null ? void 0 : U.ui) == null ? void 0 : fe.result
        ];
        for (const R of q) {
          if (!Array.isArray(R)) continue;
          const O = R[Number(_e.origin_slot || 0)];
          if (typeof O == "string" && O.trim()) return O;
        }
      }
      const P = Array.isArray(_ == null ? void 0 : _.widgets) ? _.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === B) : null;
      return String((P == null ? void 0 : P.value) || "");
    },
    linkedVideoFile: N,
    loadPreferredExactLinkedImage: (_, $ = [], B = null, re = "") => {
      var vt;
      const _e = Array.isArray($) ? $ : [$], P = k(_, _e), pe = (Array.isArray(P == null ? void 0 : P.srcCandidates) && P.srcCandidates.length ? P.srcCandidates : [P == null ? void 0 : P.src]).map((ht) => String(ht || "").trim()).filter(Boolean);
      if (!pe.length) return null;
      const Ce = y(pe.flatMap((ht) => A(ht)));
      if (!Ce.length) return null;
      _.__panoLinkedInputImageCache || (_.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const fe = String(re || _e.join("|") || "image_exact"), U = pe.join(`
`), q = _.__panoLinkedInputImageCache.get(fe);
      if (q && q.srcRaw === U && q.img) return q.img;
      const R = n || globalThis.Image;
      if (typeof R != "function") return null;
      const O = new R();
      (vt = r == null ? void 0 : r.markImageLoading) == null || vt.call(r, O, U);
      const te = { srcRaw: U, resolvedSrc: "", img: O };
      _.__panoLinkedInputImageCache.set(fe, te);
      let ee = -1;
      const Ee = (ht) => {
        var V, gt, Pe;
        ht === "ready" ? (V = r == null ? void 0 : r.markImageReady) == null || V.call(r, O, U) : (gt = r == null ? void 0 : r.markImageFailed) == null || gt.call(r, O, U), B == null || B(O), (Pe = _.setDirtyCanvas) == null || Pe.call(_, !0, !0);
      }, Fe = () => {
        if (ee += 1, ee >= Ce.length) {
          Ee("failed");
          return;
        }
        te.resolvedSrc = Ce[ee], O.src = te.resolvedSrc;
      };
      return O.onload = () => Ee("ready"), O.onerror = () => {
        if (ee + 1 < Ce.length) {
          Fe();
          return;
        }
        Ee("failed");
      }, Fe(), O;
    },
    output: c,
    resolvePreferredExactLinkedSource: k,
    source: o,
    uiImage: (_, $, B, re = null) => {
      var U, q, R;
      const _e = u(_, $)[0] || null, P = o(_e);
      if (!P) return null;
      const D = `__ui__${$}`, pe = (U = B == null ? void 0 : B.get) == null ? void 0 : U.call(B, D);
      if (pe && pe.__panoSrc === P) return pe;
      const Ce = n || globalThis.Image;
      if (typeof Ce != "function") return null;
      const fe = new Ce();
      return fe.__panoSrc = P, (q = r == null ? void 0 : r.markImageLoading) == null || q.call(r, fe, P), fe.onload = () => {
        var O;
        (O = r == null ? void 0 : r.markImageReady) == null || O.call(r, fe, P), re == null || re(fe);
      }, fe.onerror = () => {
        var O;
        (O = r == null ? void 0 : r.markImageFailed) == null || O.call(r, fe, P), re == null || re(fe);
      }, fe.src = P, (R = B == null ? void 0 : B.set) == null || R.call(B, D, fe), fe;
    },
    uiList: u,
    uiValue: d
  };
}
const WN = 1e-3;
function Ob(e, t, n, r) {
  if (!ji(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const c = Math.floor(o + 0.5);
    return c >= 0 && c < r.frames ? (c + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(WN / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function Eb(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function BN(e, t) {
  return Math.floor(e * t.fps);
}
function Fb(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Dg = 4;
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
      const y = BN(u, d);
      for (let x = y; x < Math.min(n.length, y + Dg + 1); x += 1) a(x);
      for (const x of r.keys())
        (x < y || x > y + Dg) && x !== o && r.delete(x);
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
const Wl = "sticker_image_1", Lb = "external_image", ka = 0;
function ma(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function ff(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Wi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function sd(e, t = ka) {
  return (e == null ? void 0 : e.version) !== 2 ? Wi(e) : Wi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: So(n, t).active,
    external: n.source.kind === "port",
    ...np(n, t)
  }));
}
function lp(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Wi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Rb(e) {
  return String((e == null ? void 0 : e.id) || "") === Wl || String((e == null ? void 0 : e.source_kind) || "") === Lb;
}
function cp(e, t) {
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
  var T, _, $;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((B) => String((B == null ? void 0 : B.id) || "") === Wl);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const B = String(((T = e.active) == null ? void 0 : T.selected_sticker_id) || "") === Wl;
    return {
      state: {
        ...e,
        stickers: n.filter((re, _e) => _e !== r),
        active: B ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, u = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), y = d > 0 && b > 0, v = Math.max(1, d), x = Math.max(1, b), N = t.pose && typeof t.pose == "object" ? t.pose : {}, k = u ? N.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || N.hFOV_deg || 30, A = Math.min(179, Math.max(0.1, Number(k)));
  if (!u) {
    if (!y) return { state: e, changed: !1 };
    const B = ma(A, v, x), re = Number(((_ = c == null ? void 0 : c.initial_pose) == null ? void 0 : _.hFOV_deg) ?? A), _e = ma(re, v, x), P = Number((($ = c == null ? void 0 : c.initial_pose) == null ? void 0 : $.vFOV_deg) ?? _e);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - B) <= 1e-6 && Math.abs(P - _e) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((D, pe) => pe === r ? {
          ...D,
          vFOV_deg: B,
          initial_pose: D.initial_pose && typeof D.initial_pose == "object" ? { ...D.initial_pose, vFOV_deg: _e } : D.initial_pose
        } : D)
      },
      changed: !0
    };
  }
  const E = n.reduce((B, re) => Math.max(B, Number((re == null ? void 0 : re.z_index) || 0)), -1), L = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: A,
    vFOV_deg: y ? ma(A, v, x) : Number(N.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || A),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, K = {
    ...c || {},
    id: Wl,
    source_kind: Lb,
    source_link_id: o,
    source_state_hash: a,
    ...L,
    initial_pose: { ...L },
    visible: !0,
    z_index: E + 1
  }, G = r >= 0 ? n.map((B, re) => re === r ? K : B) : [...n, K];
  return { state: { ...e, stickers: G }, changed: !0 };
}
function Lg(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const UN = ["IMAGE", "VIDEO"];
function Rg(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => UN.includes(n)) ? "2d" : null;
}
function YN(e, t) {
  var o, a, c, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((y) => (y == null ? void 0 : y.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? Rg(r.type) ?? Rg((b = (d = (u = (c = (a = e.graph).getNodeById) == null ? void 0 : c.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function Hb(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Lg(e, "sticker"),
    awaitingPose: !t && (Lg(e, "sticker_state") || YN(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function Vg(e, t) {
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
  var A;
  const c = e.stickers.findIndex((E) => cp(e, E)), u = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const E = ((A = e.active) == null ? void 0 : A.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((L, K) => K !== c),
        active: E ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const E = { ...Vg(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map((L, K) => K === c ? E : L) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const E = [u.size.value, ...u.size.keyframes.map((G) => G.value)], L = E.map((G) => ma(G.hFOV_deg, o, a));
    if (E.every((G, T) => Math.abs(G.vFOV_deg - L[T]) <= 1e-6)) return { state: e, changed: !1 };
    const K = {
      value: { ...u.size.value, vFOV_deg: L[0] },
      keyframes: u.size.keyframes.map((G, T) => ({ ...G, value: { ...G.value, vFOV_deg: L[T + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((G, T) => T === c ? { ...G, size: K } : G) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((E) => E.id));
  let y = 1;
  for (; b.has(`sticker_${y}`); ) y += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Vg(`sticker_${y}`, r)] }, changed: !0 };
  const v = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = (E) => d ? ma(E, o, a) : E, N = rp(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: v,
    vFOV_deg: x(v)
  }, Wi(e).reduce((E, L) => Math.max(E, L.z_index), -1) + 1), k = (r == null ? void 0 : r.keyframes) ?? {};
  return N.direction.keyframes = k.direction ?? [], N.roll.keyframes = k.roll ?? [], N.size.keyframes = (k.size ?? []).map((E) => ({ ...E, value: { ...E.value, vFOV_deg: x(E.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, N] }, changed: !0 };
}
function up(e) {
  const t = Wi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: ff(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: ff(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: ff(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function Kb(e) {
  const t = lp(e), n = cp(e, t), r = Wi(e).some((u) => u && u.visible !== !1), o = up(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
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
function XN(e) {
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
function $g(e, t) {
  const n = lp(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = XN(e), o = String(n.id || ""), a = up(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(c, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function qN(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function JN(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return jb(e, t.value);
  if (t.type === "sync-port") return Gb(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = up(e).reduce((x, N) => Math.max(x, Number(N.z_index || 0)), -1), b = 30, y = {
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
          stickers: [...e.stickers, rp(a, jl(o.asset), y, d + 1)],
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
    return !o || !Wi(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = lp(e);
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
  if (t.type === "bring-front") return $g(e, "front");
  if (t.type === "send-back") return $g(e, "back");
  if (t.type === "delete-selected") {
    if (cp(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Wi({ ...e, stickers: o })[0], c = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return e.version !== 2 && (u.assets = qN(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? np(n, ka) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(c[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = FM(n, u);
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
function ZN(e = {}) {
  return Db({
    ...e,
    reduce: JN,
    projectModel: Kb
  });
}
const ld = 2;
function fo(e, t) {
  return Math.floor(e * t + 0.5);
}
function QN(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Wb({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: c, onChange: u }) {
  let d = 0, b = !1, y = !1, v = { name: "idle" }, x = [];
  const N = () => b && !y, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function A() {
    for (const te of x) te();
    x = [];
  }
  function E(te, ee = {}) {
    return A(), v = { name: te, ...ee }, u(), v;
  }
  function L(te, ee, Ee) {
    const Fe = () => {
      v === te && Ee();
    };
    e.addEventListener(ee, Fe), x.push(() => e.removeEventListener(ee, Fe));
  }
  function K(te, ee) {
    let Ee = t.requestFrame(function Fe(vt) {
      v === te && (ee(vt), v === te && (Ee = t.requestFrame(Fe)));
    });
    x.push(() => t.cancelFrame(Ee));
  }
  function G(te) {
    d = te, a(d);
  }
  function T() {
    return E(y ? "error" : "idle");
  }
  function _() {
    y = !0, T();
  }
  function $() {
    const { seekable: te } = e, ee = te != null && te.length ? te.end(te.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(ee) ? ee : 1 / 0));
  }
  function B(te) {
    if (!N()) return te === "play" ? pe() : T();
    if (e.readyState < ld) {
      const ee = E("loading", { then: te });
      return L(ee, "loadeddata", () => B(ee.then)), L(ee, "error", _), ee;
    }
    return te === "play" && d / n() >= Number(e.duration) ? pe() : re(te, !1);
  }
  function re(te, ee) {
    const Ee = $();
    if (!e.ended && fo(Number(e.currentTime), n()) === fo(Ee, n())) return _e(te);
    const Fe = E("seeking", { then: te, frame: d, retried: ee });
    return L(Fe, "seeked", () => {
      const vt = fo(Number(e.currentTime), n()) === fo($(), n()), ht = d === Fe.frame;
      vt || ht && Fe.retried ? _e(Fe.then) : re(Fe.then, ht);
    }), L(Fe, "error", _), e.currentTime = Ee, Fe;
  }
  function _e(te) {
    return te === "play" ? P() : (c(), T());
  }
  function P() {
    const te = E("playingVideo", { shown: !1 });
    if (L(te, "pause", () => e.ended ? D() : U()), L(te, "ended", D), L(te, "error", _), o() && fo(Number(e.duration), n()) >= r()) {
      const Ee = e.loop;
      e.loop = !0, x.push(() => {
        e.loop = Ee;
      });
    }
    const ee = (Ee, Fe) => {
      Fe && !te.shown && (te.shown = !0, u()), Ce(fo(Ee, n()));
    };
    if (k()) {
      let Ee = e.requestVideoFrameCallback(function Fe(vt, ht) {
        v === te && (ee(Number(ht.mediaTime), !0), v === te && (Ee = e.requestVideoFrameCallback(Fe)));
      });
      x.push(() => {
        var Fe;
        return (Fe = e.cancelVideoFrameCallback) == null ? void 0 : Fe.call(e, Ee);
      });
    } else
      K(te, () => ee(Number(e.currentTime), e.readyState >= ld));
    return Promise.resolve(e.play()).catch(() => {
      v === te && U();
    }), te;
  }
  function D() {
    c(), pe();
  }
  function pe() {
    const te = E("playingClock", { startTs: t.now(), startFrame: d });
    return K(te, (ee) => Ce(te.startFrame + Math.floor((ee - te.startTs) / 1e3 * n()))), te;
  }
  function Ce(te) {
    if (te < r()) {
      G(te);
      return;
    }
    if (!o()) {
      fe(r() - 1);
      return;
    }
    v.name === "playingVideo" && (A(), e.pause()), G(0), B("play");
  }
  function fe(te) {
    v.name === "playingVideo" ? (A(), e.pause(), G(Math.max(0, te)), c()) : G(Math.max(0, te)), B("still");
  }
  function U() {
    if (v.name === "loading" || v.name === "seeking")
      v.then = "still", u();
    else if (v.name === "playingVideo") {
      A(), e.pause();
      const te = QN(Number(e.currentTime), n());
      G(Math.min(te, r() - 1)), c(), d === te ? T() : B("still");
    } else v.name === "playingClock" && fe(Math.min(d, r() - 1));
  }
  function q() {
    if (!O()) {
      if (d >= r() - 1 && G(0), v.name === "loading" || v.name === "seeking") {
        v.then = "play", u();
        return;
      }
      B("play");
    }
  }
  function R(te) {
    const ee = Math.max(0, Math.round(te));
    if (v.name === "loading" || v.name === "seeking") {
      v.then = "still", G(ee), u();
      return;
    }
    v.name === "playingVideo" && (A(), e.pause()), G(ee), B("still");
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
    seek: R,
    toggle() {
      O() ? U() : q();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(te) {
      A(), b = !!te, y = !1, B("still");
    },
    dispose() {
      A(), b = !1, v = { name: "idle" };
    }
  };
}
function Bb({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, c = null, u = null, d = !1;
  function b(A) {
    u = A, t();
  }
  function y(A) {
    c = A, e.currentTime = A;
  }
  function v() {
    const A = d;
    x(), d !== A && n();
  }
  function x() {
    if (!r || o || e.readyState < ld) return;
    const { time: A, playing: E, fps: L } = a;
    if (A === null) {
      e.pause(), d = !1;
      return;
    }
    if (E) {
      if (c !== null) return;
      const K = Number(e.duration), G = Number.isFinite(K) ? Math.min(A, K) : A, T = Math.abs(Number(e.currentTime) - G) > 1.5 / L;
      if (e.ended && !T) return;
      T && y(G), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(c !== null || u === A) && (Number(e.currentTime) === A ? b(A) : y(A));
  }
  const N = {
    loadeddata: v,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: v,
    seeked: () => {
      const A = c;
      c = null, !a.playing && A === a.time ? b(A) : v();
    },
    playing: () => {
      !a.playing || d || (d = !0, n());
    },
    error: () => {
      r && (o = !0, n());
    }
  };
  e.muted = !0;
  for (const [A, E] of Object.entries(N)) e.addEventListener(A, E);
  function k(A) {
    r = A, o = !1, c = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: A = "", time: E = null, playing: L = !1, fps: K }) {
      A !== r && (k(A), n()), a = { time: E, playing: L, fps: K }, v();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(A, E) {
      return !r || o ? E : a.time === null ? null : a.playing && d ? e : u === null ? E : A;
    },
    dispose() {
      for (const [A, E] of Object.entries(N)) e.removeEventListener(A, E);
      k("");
    }
  };
}
function e2(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function t2({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: c, onStickerCapture: u, onChange: d }) {
  let b = "", y = "", v = 0;
  const x = /* @__PURE__ */ new Set();
  let N = null, k = null;
  const A = () => o().timeline.fps, E = (P) => P.stickers.find((D) => D.source.kind === "port"), L = () => {
    const P = o(), D = E(P);
    return nb(P, {
      minimum: Math.round(A() * 5),
      frames: Math.max(
        b ? Math.round(v * A()) : 0,
        N && D ? Eb(D.clip, A(), N.meta) : 0
      )
    });
  }, K = Wb({
    video: e,
    clock: r,
    fps: A,
    span: L,
    loop: () => !0,
    onFrame: a,
    onCapture: c,
    onChange: d
  }), G = () => {
    y === b && Number.isFinite(e.duration) && (v = e.duration);
  }, T = () => {
    y && (x.add(y), d());
  }, _ = Bb({ video: t, onCapture: u, onChange: d }), $ = Tb({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", G), e.addEventListener("error", T);
  function B(P) {
    P !== y && (y = P, e.pause(), P ? e.src = P : e.removeAttribute("src"), e.load(), K.setSource(!!P));
  }
  function re() {
    K.playing && K.stop();
  }
  function _e(P) {
    const D = E(P);
    k = N && D ? Ob(D.clip, K.frame, P.timeline.fps, N.meta) : null, _.follow({
      src: (N == null ? void 0 : N.src) || "",
      time: k,
      playing: K.advancing,
      fps: P.timeline.fps
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
      return y;
    },
    pause: re,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return N;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(P, D) {
      return N != null && N.frames ? $.picture(N.frames, k, N.meta, D) : _.picture(P, D);
    },
    toggle() {
      K.playing ? K.stop() : K.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: P, sources: D, state: pe, sticker: Ce = null }) {
      if (N = P ? Ce : null, !P)
        return re(), B(""), _e(pe), !1;
      for (const O of x)
        D.includes(O) || x.delete(O);
      const fe = D.find((O) => O && !x.has(O)) || "", U = fe !== b;
      U && (b = fe, v = 0), B(b);
      const q = tb(pe) || !!b && K.state !== "error" || !!N;
      return q || re(), (U || !q || !K.playing && K.frame >= L()) && K.frame !== ka && K.seek(ka), _e(pe), q;
    },
    dispose() {
      K.dispose(), _.dispose(), e.removeEventListener("loadedmetadata", G), e.removeEventListener("error", T), e.pause(), e.removeAttribute("src"), e.load(), y = "";
    }
  };
}
const _c = Math.PI / 180, Yr = 180 / Math.PI, n2 = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), r2 = 260;
function zg(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Ub(e, t) {
  return t ? Ub(t, e % t) : e;
}
function i2(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = Ub(c, u) || 1;
  return `${Math.round(c / d)}:${Math.round(u / d)}`;
}
function zs(e, t) {
  const n = zg(e), r = zg(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: i2(n, r) };
}
function Mo(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function Yb(e) {
  const t = Mo(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? mi(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function fp(e, t, n = n2) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (E, L, K) => {
    const G = E + L, T = Math.max(0, K - 1), _ = G > T && G > 0 ? T / G : 1;
    return [E * _, L * _];
  }, [y, v] = b(d, c, r), [x, N] = b(a, u, o), k = {
    x: y,
    y: x,
    w: Math.max(1, r - y - v),
    h: Math.max(1, o - x - N)
  }, A = Wd(k, t);
  return {
    x: k.x + (k.w - A.width) * 0.5,
    y: k.y + (k.h - A.height) * 0.5,
    w: A.width,
    h: A.height,
    safeRect: k
  };
}
function o2(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = fp({ width: n, height: r }, 1), a = Z(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * _c * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = Ry(d, Fy(
    { x: n * 0.5, y: r * 0.5 },
    c,
    u
  )), y = a2(b, Pa(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), v = Bd({ width: o.w, height: o.h }, c);
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
function a2(e, t) {
  const n = Xb(e), r = Pa(n.yaw, n.pitch, 0), o = Ju(t, e), a = {
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
    roll: jc(Math.atan2(
      Ju(u, r.up),
      Ju(u, r.right)
    ) * Yr)
  };
}
function qb(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = fp({ width: n, height: r }, xo(e)), a = wo(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = Ry(e, Fy(
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
function s2(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = wo(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: b, halfH: y } = Ud(d, u), v = {
    x: a - b,
    y: c - y,
    w: b * 2,
    h: y * 2
  }, x = v.x <= 0 && v.y <= 0 && v.x + v.w >= r && v.y + v.h >= o, N = r / o, k = Math.tan(jf * _c), A = N >= 1 ? k : k * N, E = N >= 1 ? k / N : k;
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
        hFOV_deg: 2 * Math.atan(A) * Yr,
        vFOV_deg: 2 * Math.atan(E) * Yr
      }
    }
  };
}
function Jo(e, t) {
  const n = Mo(e);
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
function l2(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = wo(n, e);
    return Bd(Wd(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: $l(a, t) };
}
function jg(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = zs(t, n);
  if (!a) return e;
  const c = xo(e) >= 1;
  r && a.ratio >= 1 !== c && (a = zs(a.height, a.width));
  const u = l2(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function Jb(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Mo(e)) return { state: e, changed: !1 };
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
    const r = Mo(e);
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
    return Jo(e, (r) => jg(
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
      const a = String(mi(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? zs(a[1], a[2]) : zs(xo(r), 1);
      return c ? jg(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Jo(e, (o) => {
      const a = jc(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
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
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * _c, d = Math.cos(u), b = Math.sin(u), y = a / n, v = -c / n, x = y * d - v * b, N = y * b + v * d, k = Number(e.pitch_deg || 0) * _c, A = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(x) / A * Yr),
    pitch_deg: Z(Number(e.pitch_deg || 0) - Math.atan(N) * Yr, -90, 90)
  };
}
function c2({
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
}), u2 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, f2 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: u2(t[2])
})), d2 = {
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
}, Hg = Object.fromEntries(
  Object.entries(d2).map(([e, t]) => [e, {
    name: t.name,
    elements: f2(t.body)
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
      return Object.prototype.hasOwnProperty.call(Hg, r) ? Hg[r] : null;
    });
    return (r, o) => n.value ? (ne(), ue("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: ct(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (ne(!0), ue(Xe, null, _t(n.value.elements, (a, c) => (ne(), ue(Xe, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ne(), ue("path", yi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ne(), ue("circle", yi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ne(), ue("rect", yi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ne(), ue("line", yi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ne(), ue("polyline", yi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ne(), ue("polygon", yi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ut("", !0)
      ], 64))), 128))
    ], 2)) : ut("", !0);
  }
}, cn = {
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
    return (r, o) => (ne(), vr(Gx(e.tag), yi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: J0(() => [
        Re(Lt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, p2 = ["aria-expanded", "disabled"], h2 = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, m2 = ["data-aspect", "disabled", "onClick"], g2 = { class: "pano-cutout-aspect-custom" }, y2 = ["disabled"], b2 = ["disabled"], v2 = ["data-custom-width", "data-custom-height", "disabled"], t1 = {
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
      const A = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], E = String(n.model.aspectLabel || "");
      return A.length ? A.map((L) => {
        const K = typeof L == "string" ? L : String((L == null ? void 0 : L.value) || ""), G = typeof L == "string" ? L : String((L == null ? void 0 : L.label) || K);
        return {
          ...typeof L == "object" && L ? L : {},
          value: K,
          label: G,
          active: E ? K === E : (L == null ? void 0 : L.active) === !0
        };
      }) : o.map((L) => ({
        ...L,
        active: L.value === E
      }));
    }), y = pt(() => {
      var E;
      const A = String(n.model.aspectLabel || "").trim();
      return A || String(((E = b.value.find((L) => L.active === !0)) == null ? void 0 : E.label) || "Aspect");
    });
    vo(y, (A) => {
      const E = String(A || "").match(/^([0-9.]+):([0-9.]+)$/);
      E && (a.value = E[1], c.value = E[2]);
    }, { immediate: !0 });
    function v(A) {
      r("action", A);
    }
    function x(A) {
      var E;
      n.model.aspectOpen === !0 && ((E = u.value) != null && E.contains(A.target) || v({ type: "close-aspect" }));
    }
    Rc(() => {
      document.addEventListener("pointerdown", x, !0);
    }), Ws(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function N(A) {
      const [E, L] = String(A.value || "").split(":");
      v({
        type: "set-aspect",
        width: E,
        height: L,
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
    return (A, E) => (ne(), ue("div", {
      ref_key: "rootElement",
      ref: u,
      class: ct(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ne(), vr(cn, {
        key: 0,
        icon: e.model.aspectIcon || ot(ke).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: E[0] || (E[0] = (L) => v({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ne(), ue("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: E[1] || (E[1] = (L) => v({ type: "toggle-aspect" }))
      }, [
        Re(Lt, {
          icon: e.model.aspectIcon || ot(ke).aspect
        }, null, 8, ["icon"]),
        Y("span", null, tt(y.value), 1),
        Re(Lt, {
          icon: ot(ke).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, p2)),
      xi(Y("div", h2, [
        (ne(!0), ue(Xe, null, _t(b.value, (L) => (ne(), ue("button", {
          key: L.value,
          class: ct(["pano-btn pano-frame-aspect-choice", { active: L.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": L.value,
          disabled: d.value,
          onClick: (K) => N(L)
        }, tt(L.label), 11, m2))), 128)),
        Y("div", g2, [
          xi(Y("input", {
            "onUpdate:modelValue": E[2] || (E[2] = (L) => a.value = L),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, y2), [
            [eg, a.value]
          ]),
          E[4] || (E[4] = Y("span", { "aria-hidden": "true" }, ":", -1)),
          xi(Y("input", {
            "onUpdate:modelValue": E[3] || (E[3] = (L) => c.value = L),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, b2), [
            [eg, c.value]
          ]),
          Y("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, v2)
        ])
      ], 512), [
        [No, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, _2 = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, w2 = {
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
      class: ct(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Dt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Dt(() => {
      }, ["stop"]))
    }, [
      Re(cn, {
        icon: ot(ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Dt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Y("div", _2, [
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
}, x2 = {
  class: "pano-view-unavailable",
  role: "status"
}, dp = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ne(), ue("div", x2, tt(ot(_b)), 1));
  }
}, S2 = { class: "pano-cutout-node-surface" }, k2 = ["title", "disabled"], M2 = { class: "value" }, N2 = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, P2 = {
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
    return (r, o) => (ne(), ue("div", S2, [
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
        Re(cn, {
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
          Y("span", M2, tt(e.model.rollLabel || "0.0°"), 1)
        ], 40, k2),
        Re(cn, {
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
        Re(w2)
      ], 32),
      e.model.hasShot === !1 ? (ne(), ue("div", N2, " Choose a view · + Add Frame ")) : ut("", !0),
      e.model.viewUnavailable ? (ne(), vr(dp, { key: 1 })) : ut("", !0)
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
      var A, E;
      const { active: x, intent: N } = u();
      if (!x) return;
      const k = ((E = (A = v.target) == null ? void 0 : A.files) == null ? void 0 : E[0]) || null;
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
}, A2 = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, C2 = {
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
      class: ct(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Dt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Dt(() => {
      }, ["stop"]))
    }, [
      Re(cn, {
        icon: ot(ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Dt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Y("div", A2, [
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
}, I2 = { class: "pano-stickers-node-surface" }, O2 = ["disabled"], E2 = ["aria-label", "data-tip"], F2 = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, T2 = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, D2 = {
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
    return (c, u) => (ne(), ue("div", I2, [
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
        ], 8, O2),
        Re(cn, {
          icon: e.model.locked ? ot(ke).lock_closed : ot(ke).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Re(cn, {
          icon: ot(ke).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Re(cn, {
          icon: ot(ke).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Re(cn, {
          icon: e.model.isExternalSelection ? ot(ke).back_initial : ot(ke).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Re(C2)
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
      ], 40, E2)) : ut("", !0),
      e.model.hasStickers === !1 ? (ne(), ue("div", F2, " Add Image to place a sticker ")) : ut("", !0),
      e.model.dropActive === !0 ? (ne(), ue("div", T2, "Drop image to add")) : ut("", !0),
      Re(n1, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ne(), vr(dp, { key: 3 })) : ut("", !0)
    ]));
  }
}, Gg = 24;
function L2(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Kg(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function R2(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function cd(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Kg(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Kg(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : R2(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function pp(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function r1(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ss(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Z(n.x, -r, t.width + r),
    y: Z(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function V2(e) {
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
function so(e, t, n) {
  return Kd(lc(
    lc(e.centerDir, cc(e.right, t)),
    cc(e.up, n)
  ));
}
function hp(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = V2(e), r = ss(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    so(n, -n.tanX, n.tanY),
    so(n, n.tanX, n.tanY),
    so(n, n.tanX, -n.tanY),
    so(n, -n.tanX, -n.tanY)
  ].map((x) => ss(x, t)), a = Array.from({ length: 4 }, (x, N) => {
    const k = [];
    for (let A = 0; A <= 28; A += 1) {
      const E = A / 28;
      let L, K;
      N === 0 ? (L = -n.tanX + 2 * n.tanX * E, K = n.tanY) : N === 1 ? (L = n.tanX, K = n.tanY - 2 * n.tanY * E) : N === 2 ? (L = n.tanX - 2 * n.tanX * E, K = -n.tanY) : (L = -n.tanX, K = -n.tanY + 2 * n.tanY * E);
      const G = ss(so(n, L, K), t);
      G && k.push({ x: G.x, y: G.y });
    }
    return k;
  }), c = ss(so(n, 0, n.tanY), t), u = ss(
    so(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
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
      x: c.x + b / v * Gg,
      y: c.y + y / v * Gg
    },
    visible: !0
  };
}
function Wg(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: hp(c, r) })).filter((c) => c.geometry.visible).sort((c, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = c.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((c) => {
    var u;
    return String(((u = c.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const c = cd(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const u = cd(c.geometry, n);
    if (u.kind !== "none") return { ...c, hit: u };
  }
  return null;
}
function $2(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Ht(Math.atan2(r.x, r.z) * un),
    pitch_deg: Math.asin(Z(r.y, -1, 1)) * un
  };
}
function z2(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Z(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Z(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function j2(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * un;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Ml = null;
function mp() {
  return Ml || (Ml = new Promise((e) => {
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
  }), Ml);
}
function hr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function H2(e, t = 1024) {
  const n = Math.max(1, Math.round(hr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(hr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function G2(e, t, n) {
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
function K2(e, t, n) {
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
function W2() {
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
    const b = String(a.rasterDataUrl || "").trim(), y = G2(a, c, u);
    if (!b.startsWith("data:") || !y) return null;
    const v = K2(a, c, u), x = String((a == null ? void 0 : a.id) || "").trim() || v, N = t.get(x);
    if ((N == null ? void 0 : N.revision) === v) return { source: N.source, revision: v };
    const k = r(b, d), A = Number(k.naturalWidth || k.width || 0), E = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || A < 1 || E < 1) return null;
    const L = document.createElement("canvas");
    L.width = Math.max(1, Math.round(c)), L.height = Math.max(1, Math.round(u));
    const K = L.getContext("2d");
    return K ? (y.wrapOffsets.forEach((G) => {
      K.save(), K.translate(y.centerX + G, y.centerY), K.rotate(y.rotationRad), K.scale(y.scale, y.scale), K.drawImage(
        k,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), K.restore();
    }), t.set(x, { revision: v, source: L }), { source: L, revision: v }) : null;
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
function B2(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function U2(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function Y2({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(v) {
    if (!v) return;
    v.entry.listeners.delete(v);
    const x = r.get(v.owner);
    (x == null ? void 0 : x.get(v.key)) === v && x.delete(v.key);
  }
  function c(v, x, N, k) {
    if (!v || typeof k != "function" || N.settled) return;
    let A = r.get(v);
    A || (A = /* @__PURE__ */ new Map(), r.set(v, A));
    const E = A.get(x);
    if ((E == null ? void 0 : E.entry) === N) {
      E.callback = k;
      return;
    }
    a(E);
    const L = { owner: v, key: x, entry: N, callback: k };
    A.set(x, L), N.listeners.add(L);
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
    const A = String(x || ""), E = String(N || "");
    if (!A || !E) return null;
    let L = n.get(A);
    if (L)
      n.delete(A), n.set(A, L);
    else {
      d(o - 1);
      const G = e || globalThis.Image;
      if (typeof G != "function") return null;
      const T = new G();
      L = { key: A, image: T, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(A, L), T.onload = () => u(L, !0), T.onerror = () => u(L, !1), T.src = E;
    }
    return L.settled || L.image.complete && Number(L.image.naturalWidth || L.image.width || 0) > 0 || c(v, A, L, k), L.image;
  }
  function y(v) {
    const x = r.get(v);
    x && ([...x.values()].forEach(a), r.delete(v), d(o));
  }
  return { get: b, disposeOwner: y };
}
const hs = /* @__PURE__ */ new WeakMap();
function i1(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = hs.get(e);
  r || (r = [], hs.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = hs.get(e);
    if (!c) return;
    const u = c.indexOf(o);
    u >= 0 && c.splice(u, 1), c.length === 0 && hs.delete(e);
  };
}
function _i(e, ...t) {
  const n = hs.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Bl = Object.freeze({
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
}), o1 = "PanoramaSuite.Editor.ViewControls", X2 = {
  id: o1,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Bl).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function q2(e) {
  return Object.hasOwn(Bl, e) ? Bl[e] : Bl.default;
}
function J2(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const c = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (c == null ? void 0 : c.action) ?? null;
}
function Z2(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const wc = "state_json";
function wi(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function Q2(e) {
  var c, u;
  const t = wi(e, wc);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = ib(n, {
    coverage: (c = wi(e, "coverage")) == null ? void 0 : c.value
  }), o = Jb(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function gp(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = wi(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, u, d, b, y, v, x, N, k;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (x = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || x.call(v, !0, !0), (k = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || k.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function eP(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Bg(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function tP(e) {
  var y, v, x, N, k, A;
  if (!e) return;
  const t = wi(e, "coverage"), n = wi(e, "bg_color"), r = wi(e, wc), o = wi(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && eP(a) && (Bg(c) || c === ""))) return;
  let b = "360";
  if (Bg(c))
    try {
      b = String(Xn((y = JSON.parse(c)) == null ? void 0 : y.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (v = t.callback) == null || v.call(t, b), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = c, (N = r.callback) == null || N.call(r, c), o && (o.value = u, (k = o.callback) == null || k.call(o, u)), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0);
}
function Ul(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function ud(e, t, n) {
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
async function nP(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function ms(e, t, n) {
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
async function a1(e, t = {}) {
  var r;
  await nP(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function rP(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await a1(e), n ? n.apply(this, r) : this.value;
  };
}
function iP(e) {
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
function oP(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function ls(e, {
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
    iP(v), gp(v, t), Ul(v, wc);
    const N = wi(v, wc);
    if (rP(v, N), N && !N.__panoPreviewPatchedCb) {
      N.__panoPreviewPatchedCb = !0;
      const A = N.callback;
      N.callback = (E) => {
        var K;
        const L = A ? A(E) : void 0;
        return (K = v.setDirtyCanvas) == null || K.call(v, !0, !1), L;
      };
    }
    if (n === "PanoramaStickers") {
      v.__panoSceneStateV2 = d, v.__panoStudio = b;
      const A = wi(v, "bg_color");
      !d && A && (A.value == null || String(A.value).trim() === "" || String(A.value).toLowerCase() === "#000000") && (A.value = "#00ff00", (k = A.callback) == null || k.call(A, "#00ff00")), ud(v, r, () => o(v, "stickers")), u && (a(v, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(v, "stickers")
      }), v.__panoStickersNodeSurface && Ul(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260])), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = x;
      return;
    }
    v.__panoSceneStateV2 = d, ud(v, r, () => o(v, "cutout")), d || c(v, {
      buttonText: r,
      onOpen: () => o(v, "cutout")
    }), v.__panoCutoutNodeSurface && Ul(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260]), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = x;
  }
  for (const v of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const x = e.prototype[v];
    e.prototype[v] = function() {
      const N = x ? x.apply(this, arguments) : void 0;
      v === "onNodeCreated" && n === "PanoramaCutout" && !d && Q2(this), v === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && tP(this);
      const k = !!this.__panoPreviewAttached;
      return (v === "onNodeCreated" || this.widgets) && y(this), v === "onAdded" && k && _i(this, "attach"), N;
    };
  }
}
function aP(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return oP(this), r;
  };
}
function sP(e, {
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
    gp(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    ud(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && Ul(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function lP({
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
    settings: [X2],
    beforeRegisterNodeDef(d, b) {
      const y = String((b == null ? void 0 : b.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && ls(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaStickersNode" && ls(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), y === "PanoramaStudio" && ls(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0,
        studio: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && ls(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaCutoutNode" && ls(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), uc(y) && aP(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      gp(d, e), uc(b) && sP(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const cP = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Cr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : cP.test(String(e.name || "")) : !1;
}
function yp(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Cr(n)) : !1;
}
function uP(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, y, v;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (v = d == null ? void 0 : d.stopImmediatePropagation) == null || v.call(d);
  }, a = (d) => {
    if (yp(d == null ? void 0 : d.dataTransfer)) {
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
async function gs(e, t = {}) {
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
async function po(e, { fetchApi: t } = {}) {
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
function fd(e) {
  if (!e || typeof e != "object" || Yg.has(e)) return e;
  const t = String(e.type || "preview");
  return Xg += 1, e.type = `${t}:pano-${Xg}`, Yg.add(e), e;
}
function xc(e) {
  if (!e || typeof e != "object" || Ug.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Ug.add(e), e;
}
function s1(e, t) {
  var r, o;
  if (!t || ((o = (r = xc(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function fP({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Kt } = Fl;
EN((e) => Bi(e.id));
FN(Jt);
const bp = Y2(), { linkedVideoFile: dP } = Ib({ app: Kt, api: Jt });
function dd() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Fl == null ? void 0 : Fl.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const pP = "pano_suite.ui_settings.v1", hP = 120, mP = 2048;
function qg() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(pP)) || "").trim();
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
function gP() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function cs(e) {
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
function yP() {
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
function pd(e) {
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
function l1(e) {
  const t = pd(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function bP(e, t, n) {
  l1(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function hd(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function vp(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function c1(e) {
  return uc(vp(e));
}
function Jg(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function u1(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = hd(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && Yl(e), cA(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = hd(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Yl(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Yl(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function vP(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Yl(e, t = {}) {
  var r, o, a, c, u;
  if (!e) return;
  md.unregister(e), vP(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const y = String((b == null ? void 0 : b.name) || ""), v = String((b == null ? void 0 : b.type) || ""), x = dd();
      return y === x || v === x || y === "pano_preview" || v === "pano_preview" ? !0 : y === "preview" && v === "pano_preview";
    }).forEach((b) => zP(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function _P(e, t = "#00ff00") {
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
function wP(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ga(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Bn(e) {
  var u, d;
  const t = wP(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = ga(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = ga(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? ob(t, { backgroundColor: r, coverage: o, active: lb(e) }) : _P(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function ga(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function xP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function f1(e, t, n = null) {
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
  return !r && n != null && (r = xP(e == null ? void 0 : e.graph, n)), r;
}
function SP(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function d1(e, t = []) {
  const n = SP(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Yi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function Zg(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Sc(e, t) {
  const n = Zg(e), r = Zg(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function kP(e, t) {
  var n;
  return f1(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function MP(e, t = Yi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = d1(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return $N(e, c, kP);
}
const md = {
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
        const c = Sc(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...MP(a)].some((N) => Sc(r, N)) || Cb(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (p1(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = a.setDirtyCanvas) == null || y.call(a, !0, !0), (x = (v = a.graph) == null ? void 0 : v.setDirtyCanvas) == null || x.call(v, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
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
function kc(e) {
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
function NP(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function PP(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function AP(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function CP(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (NP(t)) return [t];
  const { filename: n, subfolder: r } = PP(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => kc({
    filename: n,
    subfolder: r,
    type: a
  }));
  return AP([...o, t]);
}
function IP(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? kc({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Bi(e) {
  const t = Kt == null ? void 0 : Kt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Sc(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (Sc(c, o)) return t[c];
  }
  return null;
}
function As(e, t, n = null) {
  const r = n || Bi(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
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
      return kc({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = tr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : kc(e);
}
function Mc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function df(e) {
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
function _p(e, t) {
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
function OP(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function EP(e, t) {
  try {
    e.__panoOwnOutputRev = B2(e.__panoOwnOutputRev);
    const n = OP(t);
    let r = "";
    for (const o of n)
      if (r = tr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), _p(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function ya(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function FP(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!xn(e, "background"))
    return ya(e), null;
  const o = Bi(r), a = sp(o, t, tr);
  if (!a)
    return ya(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = _p(a, c), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  ya(e);
  const y = zN({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function TP(e, t = []) {
  var b, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = d1(e, t).map((v) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(v))).filter((v) => v >= 0), a = n.map((v, x) => ({ input: v, idx: x })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const v of c) {
    const x = n[v], N = e.graph ? e.getInputLink(v) : null;
    if ((N == null ? void 0 : N.origin_id) == null) continue;
    const k = N.origin_id, A = f1(e, v, k);
    if (!A) continue;
    const E = Number(N.origin_slot ?? 0), L = Bi((A == null ? void 0 : A.id) ?? k), K = Array.isArray(L == null ? void 0 : L.images) ? L.images : [];
    if (K.length) {
      const $ = [];
      E >= 0 && E < K.length && $.push(K[E]), $.push(...K);
      for (const B of $.filter((re) => !Kl(re))) {
        const re = tr(B);
        if (re)
          return String((x == null ? void 0 : x.name) || ""), { src: `${re}&pano_src=${ad(L)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let G = [];
    try {
      G = typeof (Kt == null ? void 0 : Kt.getNodeImageUrls) == "function" ? Kt.getNodeImageUrls(A) || [] : [];
    } catch {
      G = [];
    }
    if (Array.isArray(G) && G.length) {
      const $ = [];
      E >= 0 && E < G.length && $.push(G[E]), $.push(...G);
      for (const B of $) {
        const re = tr(B);
        if (re)
          return String((x == null ? void 0 : x.name) || ""), { src: re, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const T = Array.isArray(A == null ? void 0 : A.imgs) ? A.imgs : [];
    if (T.length) {
      const $ = [];
      E >= 0 && E < T.length && $.push(T[E]), $.push(...T);
      for (const B of $) {
        const re = tr(B);
        if (re)
          return String((x == null ? void 0 : x.name) || ""), { src: re, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const _ = (b = A == null ? void 0 : A.widgets) == null ? void 0 : b.find(($) => String(($ == null ? void 0 : $.name) || "").toLowerCase() === "image");
    if (_) {
      let $ = tr(_.value);
      if ($ && !$.includes("/") && !$.includes(":") && (A.comfyClass === "LoadImage" || A.type === "LoadImage") && ($ = Jt.apiURL(`/view?filename=${encodeURIComponent($)}&type=input&subfolder=`)), $)
        return String((x == null ? void 0 : x.name) || ""), { src: $, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const u = xn(e, "background") ? Bi(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((y = u == null ? void 0 : u.ui) == null ? void 0 : y.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const v of d) {
      const x = tr(v);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function DP(e, t = [], n = {}) {
  const r = TP(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = CP(o);
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
    var k, A, E, L;
    if (v += 1, v >= a.length) {
      if (((A = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : A.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (L = (E = e.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || L.call(E, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const N = a[v];
    y.pendingResolvedSrc = N, b.src = N;
  };
  return b.onload = () => {
    var N, k, A;
    ((k = (N = e.__panoLinkedInputImageCache) == null ? void 0 : N.get) == null ? void 0 : k.call(N, u)) === y && y.pendingImg === b && (y.srcRaw = o, y.resolvedSrc = String(y.pendingResolvedSrc || b.src || ""), y.img = b, y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null), String(y.pendingResolvedSrc || y.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0);
  }, b.onerror = (N) => {
    var k, A, E, L;
    if (v + 1 < a.length) {
      x();
      return;
    }
    if (((A = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : A.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (L = (E = e.__panoLinkedInputImageCache) == null ? void 0 : E.delete) == null || L.call(E, u);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, x(), c && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : b;
}
function LP(e, t = [], n = null, r = {}) {
  const o = DP(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function p1(e) {
  var t, n;
  if (e) {
    bp.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ya(e), e.__panoWrappedErpCache = null;
  }
}
function RP(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ya(e), e.__panoWrappedErpCache = null;
  }
}
function h1(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Nl(e, t, n = "") {
  const r = h1(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < hP ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function Qg(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, u = r / a, d = Math.min(c, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function VP(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), y = r + (a - d) * 0.5, v = o + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, v, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, v + b * 0.5 + 0.5), e.restore();
}
function pf(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function $P(e) {
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
function zP(e, t) {
  return s1(e, t);
}
function js(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = IP(n);
  if (!a && (r != null && r.external)) {
    if (!xn(e, "external-sticker")) return null;
    const N = Bi(e == null ? void 0 : e.id), k = ((x = N == null ? void 0 : N.ui) == null ? void 0 : x.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const A of Array.isArray(k) ? k : [k])
      if (a = tr(A), a) break;
  }
  if (!a) return null;
  const c = As(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? _p(a, d) : a, y = U2(a, u, d);
  return bp.get(e, y, b, (N, k) => {
    var A, E;
    k && (r != null && r.external && e.__panoOutputFromRun && _i(e, "image-loaded"), (E = (A = e.__panoDomPreview) == null ? void 0 : A.requestDraw) == null || E.call(A));
  }) || null;
}
function jP(e, t) {
  var v, x, N, k;
  const n = BP(e, t), r = UP(t), o = Array.isArray((v = t == null ? void 0 : t.painting) == null ? void 0 : v.groups) ? t.painting.groups : [], a = new Map(
    o.filter((A) => A && typeof A == "object").map((A) => [String((A == null ? void 0 : A.actionGroupId) || (A == null ? void 0 : A.id) || "").trim(), Number((A == null ? void 0 : A.z_index) || 0)])
  ), c = n ? r.map((A) => {
    const E = n.getGroupDisplayCanvas(A);
    return E ? {
      id: `paint_group:${A}`,
      source: E,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${A}`,
      zIndex: Number(a.get(A) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (k = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || k.call(N, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = W2()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var A, E;
    return (E = (A = e.__panoDomPreview) == null ? void 0 : A.requestDraw) == null ? void 0 : E.call(A);
  });
  const d = H2(t == null ? void 0 : t.output_preset), b = u.filter((A) => (A == null ? void 0 : A.visible) !== !1 && String((A == null ? void 0 : A.layerKind) || "paint") === "paint").map((A) => String((A == null ? void 0 : A.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const y = u.map((A) => {
    const E = e.__panoRasterObjectSurfaceCache.get(
      A,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return E ? {
      id: `raster:${String((A == null ? void 0 : A.id) || "")}`,
      source: E.source,
      revision: E.revision,
      zIndex: Number((A == null ? void 0 : A.z_index) || 0),
      opacity: 1,
      visible: (A == null ? void 0 : A.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...y];
}
function HP(e, t, n, r) {
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
  const o = KP(e, t, r);
  return o || null;
}
function GP(e, t) {
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
function KP(e, t, n) {
  var o, a;
  const r = GP(t, n || (Kt == null ? void 0 : Kt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function WP(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function BP(e, t) {
  var b, y, v, x, N, k, A, E, L, K, G, T;
  const n = (y = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : y.strokes, r = (x = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = WP(e, t), u = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = $f(c), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((A = e.__panoPreviewPaintRevision) == null ? void 0 : A.paint) !== d.paint || ((E = e.__panoPreviewPaintRevision) == null ? void 0 : E.mask) !== d.mask || ((L = e.__panoPreviewPaintRevision) == null ? void 0 : L.groups) !== d.groups || ((K = e.__panoPreviewPaintRevision) == null ? void 0 : K.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((G = t == null ? void 0 : t.painting) == null ? void 0 : G.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function UP(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function YP(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function XP(e, t, n) {
  const r = hp(t, n);
  r.visible && pp(e, r.boundaryEdges, { selected: !1 });
}
function qP(e, t, n) {
  const r = hp(t, n);
  r.visible && (e.save(), pp(e, r.boundaryEdges, { selected: !0 }), r1(e, r, { accent: L2(t) }), e.restore());
}
function gd(e, t, n) {
  return bb(yc(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Nc(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? ka;
}
function JP(e) {
  return [xn(e, "background") ? sp(Bi(e.id), ["pano_input_videos"], tr) : "", dP(e, Yi)];
}
function ZP(e) {
  var a;
  if (!xn(e, "external-sticker")) return null;
  const t = Bi(e.id), n = As(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(tr), meta: n };
  const o = sp(t, ["pano_sticker_input_videos"], tr);
  return o ? { src: o, meta: n } : null;
}
function QP({ playback: e, video: t, still: n }) {
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
      u = js(e, c.id, sb(c.source), { external: c.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (c.source.kind === "port" && b) {
        const y = b.playback.stickerPicture(b.stickerStill, u), v = Fb(b.playback.stickerMedia, u);
        return y ? { media: y, revision: df(y), source: v } : null;
      }
    } else {
      const b = c.type === "external_image" || c.source_kind === "external_image", y = String(c.asset_id || "") || (b ? String(c.id || "") : "");
      u = js(e, y, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: b });
    }
    return Mc(u) ? { media: u, revision: df(u) } : null;
  }, o = jP(e, t).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: Mc(n) ? { media: n, revision: df(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: vb(e.__panoSurfaceScene.sceneState, Nc(e), t.stickers, { media: r, paintLayers: o })
  };
}
function eA(e, t, n) {
  var T, _, $, B, re, _e, P;
  const r = String(e.__panoPreviewMode || "stickers");
  h1(e, r);
  const o = Bn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, ($ = (_ = (T = e.__panoCutoutNodeSurface) == null ? void 0 : T.session) == null ? void 0 : _.refresh) == null || $.call(_)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (_e = (re = (B = e.__panoStickersNodeSurface) == null ? void 0 : B.session) == null ? void 0 : re.refresh) == null || _e.call(re));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== u) && (t.width = c, t.height = u);
  const b = { x: 0, y: 0, w: c, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, u);
  const y = (e.__panoSurfacePlayback ? QP(e.__panoSurfacePlayback) : FP(e, ["pano_input_videos"], () => {
    var D, pe;
    return (pe = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null ? void 0 : pe.call(D);
  })) || LP(
    e,
    Yi,
    () => {
      var D, pe;
      return (pe = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null ? void 0 : pe.call(D);
    },
    { preserveReadyWhilePending: !1 }
  ), v = Mc(y);
  let x = null;
  const N = (D, pe) => {
    x || (x = e0(e, o, y));
    const Ce = n.render({ width: D.w, height: D.h, camera: pe, ...x });
    return Ce && d.drawImage(Ce.canvas, Ce.x, Ce.y, Ce.width, Ce.height, D.x, D.y, D.w, D.h), !!Ce;
  };
  if (r === "cutout") {
    const D = $P(o), pe = YP(y), Ce = D ? Z(Ni(D).aspect, 0.1, 10) : v ? Z(Number(pe.width / pe.height), 0.05, 20) : 1, fe = fp(b, Ce);
    e.__panoCutoutNodeFrame = fe;
    let U = "none";
    const q = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (D)
      if (y && !v)
        U = "loading";
      else if (v) {
        const R = s2({ width: c, height: u }, fe, D);
        [
          !R.fallback || N(R.fallback.rect, Ps(R.fallback.shot)),
          N(R.rect, Ps(R.shot)),
          !R.fallback || N(fe, Ps(D))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const R = e.__panoLastCutoutShot;
      R ? (e.__panoPreviewView = qb(R, { width: c, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), v ? N(b, yc(e.__panoPreviewView, c, u)) || (U = "loading") : y ? U = "loading" : U = "empty";
    }
    v || n.release(), n.failed && U === "loading" && (U = "none"), D && (e.__panoLastCutoutShot = { ...D }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, u), d.rect(fe.x, fe.y, fe.w, fe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(fe.x + 0.5, fe.y + 0.5, Math.max(0, fe.w - 1), Math.max(0, fe.h - 1)), d.restore()), U === "loading" ? (pf(e, !1), Nl(e, !0, q)) : U === "empty" ? (pf(e, !0), Nl(e, !1, "")) : (pf(e, !1), Nl(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!y || v) && (x = e0(e, o, y), !x.background && !x.layers.length ? (n.release(), k = !0) : k = N(b, yc(e.__panoPreviewView, c, u)));
  const A = !k && !n.failed;
  Nl(e, A, A ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), A && VP(d, b, Qg(t, b));
  const E = gd(e, c, u);
  !y && k && tA(d, E, Qg(t, b));
  const L = String(((P = o == null ? void 0 : o.active) == null ? void 0 : P.selected_sticker_id) || ""), K = sd(o, Nc(e)), G = k ? K.find((D) => String((D == null ? void 0 : D.id) || "") === L && (D == null ? void 0 : D.visible) !== !1) : null;
  k && K.filter((D) => D !== G && (D == null ? void 0 : D.visible) !== !1 && (D.external || D.source_kind === "external_image")).filter((D) => !Mc(js(e, D.id, null, { external: !0 }))).forEach((D) => XP(d, D, E)), G && qP(d, G, E);
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
function tA(e, t, n) {
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
function yd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function nA(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function dr(e, t) {
  return nA(e, t) ? !1 : (yd(e), !0);
}
function n0() {
  var n;
  const e = (n = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function rA(e) {
  var n;
  if (!e) return;
  const t = (n = Kt == null ? void 0 : Kt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function iA(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !l1(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function oA(e, t = 0, n = null, r = 1200) {
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
      e.__panoUserResized = !0, t == null || t(), o && aA(e, 180, t);
    }
  };
}
function aA(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ys(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const sA = /* @__PURE__ */ new WeakMap();
function m1(e, t) {
  return Cb(sA, e, t) ? !1 : (EP(e, t), p1(e), ys(e), !0);
}
async function lA(e) {
  var n, r;
  const t = await RN(e, Kt, Jt);
  t && (m1(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function cA(e, t = {}) {
  var Xi;
  const n = t.__allowStandalone === !0, r = c1(e);
  if (r && !n) {
    vp(e);
    return;
  }
  r && iA(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: Jg(e)
  }, u = "dom", d = c.signature || Jg(e);
  if (Number(e.__panoRebindGeneration || 0), hd(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, pd(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (Xi = e.__panoDomPreview) != null && Xi.widget || (e.__panoLegacyPreviewHooked && Yl(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, y = b ? 0 : 56, v = b ? 0 : r2, x = document.createElement("div");
  if (yP(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
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
    const j = xc(fd(
      e.addDOMWidget(dd(), "preview", x, r0(e, null))
    ));
    ys(e), e.__panoDomPreview = { widget: j, root: x, requestDraw: () => {
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
  const A = document.createElement("div");
  A.style.cssText = [
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
  ].join(";"), A.textContent = "Connect ERP image", N.appendChild(k), N.appendChild(A), x.appendChild(N);
  const E = Iy(x), L = document.createElement("div");
  L && (L.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", L.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild(L)), bP(e, 120, 120), ys(e);
  let K = null;
  try {
    oA(e, y, () => {
      var j, he;
      return (he = (j = e.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : he.call(j);
    }), K = xc(fd(e.addDOMWidget(
      dd(),
      "preview",
      x,
      r0(
        e,
        () => {
          var j, he;
          return (he = (j = e.__panoDomPreview) == null ? void 0 : j.requestDraw) == null ? void 0 : he.call(j);
        },
        y,
        v,
        !1
      )
    )));
  } catch {
    return;
  }
  const G = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, T = () => {
    G.destroyed || (G.needsDraw = !0, !G.inTick && !G.raf && (G.raf = requestAnimationFrame(Pe)));
  }, _ = wb(T), $ = /* @__PURE__ */ Na(o ? { ...Kb(Bn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...Yb(Bn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((j) => ({ value: j, label: j }))
  });
  let B = null;
  if (o && e.__panoSceneStateV2) {
    const [j, he] = [0, 1].map(() => {
      const De = document.createElement("video");
      return De.playsInline = !0, De.preload = "auto", De.crossOrigin = "anonymous", De.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", N.appendChild(De), De;
    }), Q = document.createElement("canvas");
    Q.__panoFrameIdx = 0;
    const Te = document.createElement("canvas");
    Te.__panoFrameIdx = 0;
    const Je = t2({
      video: j,
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
      onFrame: T,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var rt;
        if (!(j.videoWidth > 0 && j.videoHeight > 0)) return;
        const De = Math.min(1, mP / j.videoWidth);
        Q.width = Math.round(j.videoWidth * De), Q.height = Math.round(j.videoHeight * De), (rt = Q.getContext("2d")) == null || rt.drawImage(j, 0, 0, Q.width, Q.height), Q.__panoFrameIdx += 1, T();
      },
      onStickerCapture: () => {
        var De;
        he.videoWidth > 0 && he.videoHeight > 0 && (Te.width = he.videoWidth, Te.height = he.videoHeight, (De = Te.getContext("2d")) == null || De.drawImage(he, 0, 0), Te.__panoFrameIdx += 1, T());
      },
      onChange: () => {
        $.playing = Je.playing, T();
      }
    });
    B = { playback: Je, video: j, still: Q, stickerVideo: he, stickerStill: Te, stickerSource: "" }, e.__panoSurfacePlayback = B;
  }
  const re = () => {
    var Ft;
    const { playback: j, still: he, stickerStill: Q } = B, Te = e2(N, !!((Ft = e.flags) != null && Ft.collapsed)), Je = j.source, De = Te ? ZP(e) : null, rt = j.follow({
      shown: Te,
      sources: Te ? JP(e) : [],
      state: Bn(e),
      sticker: De
    });
    ((De == null ? void 0 : De.src) || "") !== B.stickerSource && (B.stickerSource = (De == null ? void 0 : De.src) || "", Q.width = 0), j.source !== Je && (he.width = 0, he.__panoFrameIdx = 0), $.playable = rt, $.playing = j.playing;
  }, _e = () => B == null ? void 0 : B.playback.pause();
  let P = null;
  const D = (o ? ZN : c2)({
    readState: () => Bn(e),
    publishLiveState: (j) => {
      j ? (P = j, e.__panoLiveStateOverride = j) : (e.__panoLiveStateOverride === P && (e.__panoLiveStateOverride = null), P = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, T();
    },
    commitState: (j) => {
      var Te, Je, De, rt;
      const he = ga(e, "state_json");
      if (!he) return;
      cb(e, j.active);
      const Q = ub(e, j);
      fb(e, Q, String(he.value ?? "")) || (he.value = Q, (Te = he.callback) == null || Te.call(he, Q), e.__panoStateCache = null, (Je = e.setDirtyCanvas) == null || Je.call(e, !0, !0), (rt = (De = e.graph) == null ? void 0 : De.setDirtyCanvas) == null || rt.call(De, !0, !0));
    },
    onChange: (j) => Object.assign($, j)
  }), Ce = o ? i1(e, (j = "sync", he = null) => {
    var Yt;
    if (!o || !e.graph || !D || D.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Vt = xn(e, "external-sticker"), xt = Bn(e).stickers.find((or) => or.source.kind === "port");
      return D.apply({
        type: "sync-port",
        value: Hb(e, {
          pose: Vt ? As(e, "pano_sticker_input_pose", he) : null,
          image: xt ? js(e, xt.id, null, { external: !0 }) : null
        })
      });
    }
    const Q = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Vt) => String((Vt == null ? void 0 : Vt.name) || "") === "sticker_image") : -1, Te = Q >= 0 ? ((Yt = e.getInputLink(Q)) == null ? void 0 : Yt.id) ?? null : null;
    if (Te == null)
      return D.apply({ type: "sync-external", value: { connected: !1 } });
    if (!xn(e, "external-sticker")) return !1;
    const Je = As(e, "pano_sticker_input_pose", he), De = Array.isArray(Je) ? Je[0] : Je, rt = String(As(e, "pano_sticker_input_state_hash", he) ?? ""), Ft = e.__panoPreviewView || { yaw: 0, pitch: 0 }, on = Bn(e), Ln = (Array.isArray(on == null ? void 0 : on.stickers) ? on.stickers : []).find((Vt) => String((Vt == null ? void 0 : Vt.id) || "") === "sticker_image_1"), Ut = js(e, "sticker_image_1", null, { external: !0 }), Io = De && typeof De == "object" ? De : Ln || { yaw_deg: Ft.yaw, pitch_deg: Ft.pitch, hFOV_deg: 30, rot_deg: 0 };
    return D.apply({
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
  let fe = 0;
  const U = async (j) => {
    if (!o || !D || !Cr(j)) return !1;
    _e();
    const he = `asset_${Math.random().toString(16).slice(2, 10)}`, Q = `st_${Math.random().toString(16).slice(2, 10)}`, Te = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    fe += 1, $.importing = !0;
    const Je = ms(e, `add:${he}`, async () => {
      const De = await gs(j), rt = await po(j, {
        fetchApi: (Ft, on) => Jt.fetchApi(Ft, on)
      });
      return Ee(), D.apply({
        type: "add-sticker",
        value: {
          stickerId: Q,
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
      fe = Math.max(0, fe - 1), $.importing = fe > 0, T();
    }
  };
  let q = null, R = null, O = null, te = !1;
  const ee = () => {
    var j;
    return O && (clearTimeout(O), O = null), te ? (te = !1, ((j = D == null ? void 0 : D.commitGesture) == null ? void 0 : j.call(D)) ?? !1) : !1;
  }, Ee = () => {
    var Te, Je, De;
    const j = ee(), he = (q == null ? void 0 : q.pointerId) ?? (R == null ? void 0 : R.pointerId);
    if (q = null, R = null, he != null) {
      try {
        (Te = k.hasPointerCapture) != null && Te.call(k, he) && ((Je = k.releasePointerCapture) == null || Je.call(k, he));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Q = ((De = D == null ? void 0 : D.commitGesture) == null ? void 0 : De.call(D)) ?? !1;
    return j || Q;
  }, Fe = () => {
    var Te, Je, De;
    const j = ee(), he = q == null ? void 0 : q.pointerId;
    if (q = null, he != null) {
      try {
        (Te = k.hasPointerCapture) != null && Te.call(k, he) && ((Je = k.releasePointerCapture) == null || Je.call(k, he));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Q = ((De = D == null ? void 0 : D.cancelGesture) == null ? void 0 : De.call(D)) ?? !1;
    return j || Q;
  }, vt = () => Ee();
  D && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(vt));
  let ht = null, V = !1;
  if (L && D)
    try {
      mp(), ht = Vd(o ? D2 : P2, {
        model: $,
        onAction: (j) => {
          var Te, Je;
          if ((j == null ? void 0 : j.type) === "toggle-playback") {
            Ee(), B == null || B.playback.toggle();
            return;
          }
          if (_e(), (j == null ? void 0 : j.type) === "open-editor") {
            Ee(), o || ($.aspectOpen = !1), (Te = e.__panoOpenEditor) == null || Te.call(e);
            return;
          }
          if (o) {
            if ((j == null ? void 0 : j.type) === "add-image-file") {
              U(j.file);
              return;
            }
            D.apply(j) && T();
            return;
          }
          if ((j == null ? void 0 : j.type) === "toggle-aspect") {
            $.aspectOpen = !$.aspectOpen;
            return;
          }
          if ((j == null ? void 0 : j.type) === "close-aspect") {
            $.aspectOpen = !1;
            return;
          }
          let he = j;
          if ((j == null ? void 0 : j.type) === "add-frame") {
            const De = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            he = {
              ...j,
              ...o2(De, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((j == null ? void 0 : j.type) === "delete-frame") {
            const De = Mo(Bn(e));
            De && (e.__panoPreviewView = qb(De, {
              width: k.width,
              height: k.height
            }));
          }
          const Q = ((Je = e.__panoCutoutNodeFrame) == null ? void 0 : Je.safeRect) || null;
          $.aspectOpen = !1, D.apply({ ...he, safeRect: Q }) && T();
        }
      }), ht.mount(L), V = !0;
    } catch {
      ht = null, V = !1;
    }
  const gt = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    B && re(), T();
  }) : null;
  gt == null || gt.observe(N);
  const Pe = (j) => {
    var Q, Te;
    G.raf = 0, G.inTick = !0;
    let he = !1;
    try {
      he = wt.stepInertia(j), (G.needsDraw || he) && (G.needsDraw = !1, B && re(), (Q = e.flags) != null && Q.collapsed || eA(e, k, _), $.viewUnavailable = _.failed);
    } finally {
      G.inTick = !1;
    }
    (he || G.needsDraw) && !G.raf && (G.raf = requestAnimationFrame(Pe)), gP() && (!e.__panoDebugLastTs || j - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = j, e.__panoPreviewMode, pd(e), cs(x), cs(N), cs(k), cs(x.parentElement), cs((Te = x.parentElement) == null ? void 0 : Te.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, wt = Gd({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (j) => {
      e.__panoPreviewView = j;
    },
    getViewportSize: () => {
      const j = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(j.width || k.clientWidth || 0)),
        h: Math.max(1, Number(j.height || k.clientHeight || 0))
      };
    },
    getInvert: () => {
      const j = qg();
      return {
        x: j.invert_view_x ? -1 : 1,
        y: j.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      T();
    }
  }), Et = o ? N : x, mn = (j) => {
    const he = k.getBoundingClientRect();
    return {
      x: (Number(j.clientX) - he.left) * (k.width / Math.max(1, he.width)),
      y: (Number(j.clientY) - he.top) * (k.height / Math.max(1, he.height))
    };
  }, ei = (j) => {
    var Te, Je;
    if (!o || !a) return;
    const he = Bn(e), Q = Wg(
      sd(he, Nc(e)),
      String(((Te = he == null ? void 0 : he.active) == null ? void 0 : Te.selected_sticker_id) || ""),
      mn(j),
      gd(e, k.width, k.height)
    );
    if (!Q) {
      k.style.cursor = "grab";
      return;
    }
    if (((Je = Q.item) == null ? void 0 : Je.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = Q.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (j) => {
    var Ft, on, Ln, Ut, Io, Tt, Yt, Vt, xt, or, ni;
    if (!dr(j, Et) || j.button !== 0) return;
    if (!o) {
      const fn = Mo(Bn(e)), xr = e.__panoCutoutNodeFrame;
      if (!fn) {
        (Ft = x.focus) == null || Ft.call(x, { preventScroll: !0 }), (on = k.setPointerCapture) == null || on.call(k, j.pointerId), k.style.cursor = "grabbing", wt.startDrag(j.clientX, j.clientY, j.pointerId);
        return;
      }
      if (fn.locked === !0 || !xr || !D) return;
      const Oo = mn(j);
      let Eo;
      if (j.shiftKey) {
        const vn = Zb({
          frame: xr,
          point: Oo,
          startRollDeg: Number(fn.roll_deg ?? fn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!vn) return;
        Eo = { kind: "roll", pointerId: j.pointerId, rollGesture: vn };
      } else {
        const vn = ((Ln = Bn(e)) == null ? void 0 : Ln.ui_settings) || qg();
        Eo = {
          kind: "pan",
          pointerId: j.pointerId,
          startPoint: Oo,
          startShot: { ...fn },
          focalPx: wo(xr, fn),
          invertX: vn.invert_view_x === !0,
          invertY: vn.invert_view_y === !0
        };
      }
      Ee(), (Ut = x.focus) == null || Ut.call(x, { preventScroll: !0 }), (Io = k.setPointerCapture) == null || Io.call(k, j.pointerId), k.style.cursor = "grabbing", D.beginGesture(), q = Eo;
      return;
    }
    if (!a) return;
    const he = mn(j), Q = Bn(e), Te = String(((Tt = Q == null ? void 0 : Q.active) == null ? void 0 : Tt.selected_sticker_id) || ""), Je = gd(e, k.width, k.height);
    (Yt = x.focus) == null || Yt.call(x, { preventScroll: !0 });
    const De = () => Wg(sd(Q, Nc(e)), Te, he, Je);
    let rt = De();
    if (rt && (B != null && B.playback.playing) && (_e(), rt = De()), rt && D) {
      if (wt.stopMotion(), Ee(), String(((Vt = rt.item) == null ? void 0 : Vt.id) || "") !== Te && D.apply({ type: "select-sticker", id: rt.item.id }), ((xt = rt.item) == null ? void 0 : xt.locked) === !0) {
        T();
        return;
      }
      const fn = he, xr = rt.geometry.center;
      R = {
        active: !0,
        kind: rt.hit.kind,
        pointerId: j.pointerId,
        startPoint: fn,
        startCenter: { ...xr },
        startSticker: { ...rt.item },
        startDistance: Math.max(1, Math.hypot(fn.x - xr.x, fn.y - xr.y)),
        startAngle: Math.atan2(fn.y - xr.y, fn.x - xr.x),
        projection: Je
      }, D.beginGesture(), (or = k.setPointerCapture) == null || or.call(k, j.pointerId), k.style.cursor = rt.hit.kind === "rotate" ? "grabbing" : rt.hit.kind === "move" ? "move" : rt.hit.cursor, T();
      return;
    }
    (ni = k.setPointerCapture) == null || ni.call(k, j.pointerId), k.style.cursor = "grabbing", wt.startDrag(j.clientX, j.clientY, j.pointerId);
  }), k.addEventListener("pointermove", (j) => {
    if (!o) {
      if (!q) {
        if (!wt.state.drag.active) return;
        dr(j, Et), wt.moveDrag(j.clientX, j.clientY, "pano");
        return;
      }
      if (q.pointerId !== j.pointerId || !D) return;
      if (dr(j, Et), q.kind === "pan") {
        const Q = mn(j);
        D.updateGesture({
          type: "pan-camera",
          startShot: q.startShot,
          dx: Q.x - q.startPoint.x,
          dy: Q.y - q.startPoint.y,
          focalPx: q.focalPx,
          invertX: q.invertX,
          invertY: q.invertY
        });
        return;
      }
      const he = Qb(q.rollGesture, mn(j), j);
      if (!he) return;
      q.rollGesture = he.gesture, D.updateGesture({ type: "set-roll", value: he.rollDeg });
      return;
    }
    if (!R && !wt.state.drag.active) {
      ei(j);
      return;
    }
    if (R) {
      if (R.pointerId !== j.pointerId || !D) return;
      dr(j, Et);
      const he = mn(j);
      let Q = R.startSticker;
      if (R.kind === "move")
        Q = $2(
          R.startSticker,
          {
            x: R.startCenter.x + he.x - R.startPoint.x,
            y: R.startCenter.y + he.y - R.startPoint.y
          },
          R.projection
        );
      else if (R.kind === "scale") {
        const Te = Math.hypot(he.x - R.startCenter.x, he.y - R.startCenter.y);
        Q = z2(R.startSticker, R.startDistance, Te);
      } else if (R.kind === "rotate") {
        const Te = Math.atan2(he.y - R.startCenter.y, he.x - R.startCenter.x);
        Q = j2(R.startSticker, R.startAngle, Te, j.shiftKey === !0);
      }
      D.updateGesture({ type: "set-transform", value: Q }), T();
      return;
    }
    !a || !wt.state.drag.active || (dr(j, Et), wt.moveDrag(j.clientX, j.clientY, "pano"));
  });
  const z = () => {
    var he, Q;
    if (!q && !R) {
      if (!wt.state.drag.active) return;
      wt.endDrag(), k.style.cursor = "grab", T();
      return;
    }
    if (!D) return;
    const j = (q == null ? void 0 : q.pointerId) ?? (R == null ? void 0 : R.pointerId);
    q = null, R = null;
    try {
      (he = k.hasPointerCapture) != null && he.call(k, j) && ((Q = k.releasePointerCapture) == null || Q.call(k, j));
    } catch {
    }
    D.cancelGesture(), k.style.cursor = "grab", T();
  }, W = (j, he = !1) => {
    var Q, Te, Je, De;
    if (!o) {
      if (!q) {
        if (!wt.state.drag.active) return;
        dr(j, Et), (Q = k.releasePointerCapture) == null || Q.call(k, j.pointerId), k.style.cursor = "grab", wt.endDrag(), T();
        return;
      }
      if (q.pointerId !== j.pointerId || !D) return;
      dr(j, Et), q = null, (Te = k.releasePointerCapture) == null || Te.call(k, j.pointerId), k.style.cursor = "grab", he ? D.cancelGesture() : D.commitGesture(), ei(j), T();
      return;
    }
    if (R) {
      if (R.pointerId !== j.pointerId || !D) return;
      dr(j, Et), R = null, (Je = k.releasePointerCapture) == null || Je.call(k, j.pointerId), k.style.cursor = "grab", he ? D.cancelGesture() : D.commitGesture(), T();
      return;
    }
    !a || !wt.state.drag.active || (dr(j, Et), (De = k.releasePointerCapture) == null || De.call(k, j.pointerId), k.style.cursor = "grab", wt.endDrag(), T());
  };
  k.addEventListener("pointerup", W), k.addEventListener("pointercancel", (j) => W(j, !0)), k.addEventListener("lostpointercapture", z), k.addEventListener("pointerleave", (j) => {
    !o && q || R || wt.state.drag.active && W(j);
  });
  const ie = (j) => {
    const he = document.activeElement;
    if (he !== x && !x.contains(he)) return;
    if (j.key === "Escape" && (q || R) && D) {
      z(), yd(j);
      return;
    }
    if (!o || j.key !== "Delete" && j.key !== "Backspace" || !D) return;
    const Q = j.target, Te = String((Q == null ? void 0 : Q.tagName) || "").toUpperCase();
    Te === "INPUT" || Te === "TEXTAREA" || Q != null && Q.isContentEditable || $.canDelete === !0 && (_e(), Ee(), D.apply({ type: "delete-selected" }) && T(), yd(j));
  };
  window.addEventListener("keydown", ie, !0);
  const we = fP({
    requestFrame: (j) => requestAnimationFrame(j),
    cancelFrame: (j) => cancelAnimationFrame(j),
    restore: (j) => rA(j)
  }), ge = (j) => {
    var Q, Te, Je, De, rt, Ft;
    if (!dr(j, Et)) return;
    if (!o) {
      const on = Mo(Bn(e));
      if (on && on.locked !== !0 && D) {
        const Ln = sc(j);
        Ln !== 0 && (te || (Ee(), D.beginGesture(), te = !0), D.updateGesture({
          type: "step-fov",
          direction: Ln
        }) ? (O && clearTimeout(O), O = setTimeout(ee, 180), T()) : D.hasGestureChanges() || (D.cancelGesture(), te = !1));
      } else if (!on) {
        const Ln = n0();
        wt.applyWheelEvent(j) && T(), we.schedule(Ln);
      }
      (Q = j.preventDefault) == null || Q.call(j), (Te = j.stopPropagation) == null || Te.call(j), (Je = j.stopImmediatePropagation) == null || Je.call(j);
      return;
    }
    if (!a) return;
    const he = n0();
    wt.applyWheelEvent(j) && T(), (De = j.preventDefault) == null || De.call(j), (rt = j.stopPropagation) == null || rt.call(j), (Ft = j.stopImmediatePropagation) == null || Ft.call(j), we.schedule(he);
  }, ve = o ? [N, k] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((j) => {
    ve.forEach((he) => he.addEventListener(j, ge, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((j) => {
    k.addEventListener(j, (he) => dr(he, Et)), N.addEventListener(j, (he) => dr(he, Et));
  });
  const Me = ga(e, "state_json");
  let Ae = null, Se = null;
  Me && !Me.__panoPreviewPatchedCb && (Ae = Me.callback, Se = (j) => {
    const he = Ae ? Ae(j) : void 0;
    return T(), he;
  }, Me.callback = Se, Me.__panoPreviewPatchedCb = Se);
  const de = ga(e, "bg_color");
  let Oe = null, Ie = null;
  de && !de.__panoPreviewPatchedCb && (Oe = de.callback, Ie = (j) => {
    const he = Oe ? Oe(j) : void 0;
    return T(), he;
  }, de.callback = Ie, de.__panoPreviewPatchedCb = Ie);
  const $e = e.onRemoved, He = e.onResize, at = e.onExecuted, st = e.onDragOver, ft = e.onDragDrop;
  let dt = null;
  const Rt = () => {
    o && ($.dropActive = !0, dt && clearTimeout(dt), dt = setTimeout(() => {
      dt = null, $.dropActive = !1;
    }, 140));
  }, Tn = o ? function(j) {
    return (st ? st.apply(this, arguments) : !1) === !0 ? !0 : yp(j == null ? void 0 : j.dataTransfer) ? (Rt(), !0) : !1;
  } : null, Dn = o ? function(j) {
    var Te;
    if ((ft ? ft.apply(this, arguments) : !1) === !0) return !0;
    const Q = Array.from(((Te = j == null ? void 0 : j.dataTransfer) == null ? void 0 : Te.files) || []).find((Je) => Cr(Je));
    return Q ? (dt && clearTimeout(dt), dt = null, $.dropActive = !1, U(Q), !0) : !1;
  } : null;
  o && (e.onDragOver = Tn, e.onDragDrop = Dn);
  const ti = o ? uP(x, {
    onActive: (j) => {
      if (j) {
        Rt();
        return;
      }
      dt && clearTimeout(dt), dt = null, $.dropActive = !1;
    },
    onDrop: (j) => {
      U(j);
    }
  }) : () => {
  }, h = function(j) {
    e.__panoOutputFromRun = !0;
    const he = m1(e, j);
    _i(e, he ? "executed" : "sync", j), T();
    const Q = at ? at.apply(this, arguments) : void 0;
    return ys(e), Q;
  };
  e.onExecuted = h;
  const We = e.onConnectionsChange, rn = function(j, he) {
    const Q = Eg(e, j, he, ap), Te = Eg(e, j, he, Yi), Je = arguments, De = We ? We.apply(this, Je) : void 0, rt = () => {
      G.destroyed || (Te && RP(e), Q && _i(e, "connection-change"), ys(e), T());
    };
    return rt(), queueMicrotask(rt), De;
  };
  e.onConnectionsChange = rn;
  const en = function() {
    const j = He ? He.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, T(), j;
  };
  e.onResize = en;
  const Ai = function() {
    return Co(), md.unregister(this), $e ? $e.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ai;
  const Co = () => {
    var j, he, Q, Te, Je, De, rt, Ft, on;
    G.destroyed = !0, (j = gt == null ? void 0 : gt.disconnect) == null || j.call(gt), o ? Ee() : Fe(), k.removeEventListener("lostpointercapture", z), ti(), E(), window.removeEventListener("keydown", ie, !0), (Q = (he = e.__panoStateFlushers) == null ? void 0 : he.delete) == null || Q.call(he, vt), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Te = D == null ? void 0 : D.destroy) == null || Te.call(D), (Je = ht == null ? void 0 : ht.unmount) == null || Je.call(ht), B && (B.playback.dispose(), B.video.remove(), B.stickerVideo.remove(), e.__panoSurfacePlayback === B && (e.__panoSurfacePlayback = null)), _.dispose(), e.__panoSurfaceScene = null, (rt = (De = e.__panoRasterObjectSurfaceCache) == null ? void 0 : De.dispose) == null || rt.call(De), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Ce(), we.dispose(), dt && clearTimeout(dt), dt = null, bp.disposeOwner(e), ya(e), G.raf && cancelAnimationFrame(G.raf), G.raf = 0, ((Ft = e.__panoCutoutNodeSurface) == null ? void 0 : Ft.session) === D && (e.__panoCutoutNodeSurface = null), ((on = e.__panoStickersNodeSurface) == null ? void 0 : on.session) === D && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === en && (e.onResize = He), e.onExecuted === h && (e.onExecuted = at), e.onConnectionsChange === rn && (e.onConnectionsChange = We), Se && (Me == null ? void 0 : Me.callback) === Se && (Me.callback = Ae), Se && (Me == null ? void 0 : Me.__panoPreviewPatchedCb) === Se && delete Me.__panoPreviewPatchedCb, Ie && (de == null ? void 0 : de.callback) === Ie && (de.callback = Oe), Ie && (de == null ? void 0 : de.__panoPreviewPatchedCb) === Ie && delete de.__panoPreviewPatchedCb, e.onDragOver === Tn && (e.onDragOver = st), e.onDragDrop === Dn && (e.onDragDrop = ft), e.onRemoved === Ai && (e.onRemoved = $e);
  };
  e.__panoDomRestore = Co, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = D && V && !o ? { session: D, model: $ } : null, e.__panoStickersNodeSurface = D && V && o ? { session: D, model: $ } : null, e.__panoDomPreview = {
    widget: K,
    root: x,
    canvas: k,
    requestDraw: T,
    state: G,
    emptyHintEl: A,
    nodeSurface: e.__panoCutoutNodeSurface
  }, md.register(e), e.graph && _i(e, "attach"), T();
}
function i0(e, t = {}) {
  u1(e).attach({
    ...t,
    mode: "cutout"
  });
}
function o0(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (c1(e) && !n) {
    vp(e);
    return;
  }
  u1(e).attach(t);
}
function uA(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function fA(e, t = 1, n = Ag) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, b = Number(n), y = Number.isFinite(b) && b > 0 ? b : Ag, v = Math.max(u, d), x = v > 0 ? Math.min(1, y / v) : 1;
  return {
    width: Math.max(1, Math.round(u * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function dA({
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
    var k, A, E;
    if (!c) {
      if (c = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", y), d())
        try {
          const L = (A = t.exitFullscreen) == null ? void 0 : A.call(t);
          (E = L == null ? void 0 : L.catch) == null || E.call(L, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const pA = { class: "pano-preview-node-surface" }, hA = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ne(), ue("div", pA, [
      Re(cn, {
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
      e.model.viewUnavailable ? (ne(), vr(dp, { key: 0 })) : ut("", !0)
    ]));
  }
}, Pl = 140, mA = 180, a0 = 40, hf = 10;
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
function g1(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function gA(e) {
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
function bd(e) {
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
function yA(e) {
  var r, o;
  const t = bd(e == null ? void 0 : e.id), n = [
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
function bA(e, t = "erp_image") {
  var N, k, A, E, L, K, G;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((T) => String((T == null ? void 0 : T.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((T, _) => String((T == null ? void 0 : T.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(_))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (A = (k = (N = Ir) == null ? void 0 : N.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : A.call(k, a), u = bd(a), d = bd(e == null ? void 0 : e.id), b = [
    (E = d == null ? void 0 : d.ui) == null ? void 0 : E.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    (L = u == null ? void 0 : u.ui) == null ? void 0 : L.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const T of b)
    if (Array.isArray(T))
      for (const _ of T) {
        const $ = ba(_);
        if ($) return $;
      }
  let y = [];
  try {
    y = typeof ((K = Ir) == null ? void 0 : K.getNodeImageUrls) == "function" ? Ir.getNodeImageUrls(c) || [] : [];
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
      const $ = ba(_);
      if ($) return $;
    }
  }
  const v = (G = c == null ? void 0 : c.widgets) == null ? void 0 : G.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image"), x = String((v == null ? void 0 : v.value) || "").trim();
  return x ? Jt.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function mf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function u0(e, t, n, r, o, a, c) {
  var b, y, v;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !g1(a) || n <= 1 || r <= 1) {
    mf(t, n, r);
    return;
  }
  if (c.failed) {
    mf(t, n, r);
    return;
  }
  const u = Number(((v = (y = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: yc(o, n, r),
    background: { media: a, revision: gA(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : mf(t, n, r);
}
function f0(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class vA {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = wb(() => this.requestDraw()), this.controller = Gd({
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
        `min-height:${Pl}px`,
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
          return Pl;
        },
        getHeight() {
          return Pl;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = xc(fd(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Pl, Number(a.minHeight || 0)),
            minWidth: Math.max(mA, Number(a.minWidth || 0))
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
      return mp(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Na({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = dA({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = Vd(hA, {
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
      uA(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !g1(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      const a = HP(this, n, r, o), c = t.getLegacyPreviewRect();
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
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - hf * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - a0 - hf);
    return { x: hf, y: a0, w: t, h: n };
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
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = fA(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = yA(this.node);
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
    const n = bA(this.node, this.imageInputName);
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
    var n, r, o, a, c, u, d, b, y, v, x, N, k, A, E, L;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (v = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || v.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (N = this.root) == null ? void 0 : N.remove) == null || k.call(N);
    } catch {
    }
    try {
      s1(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((L = (E = (A = this.node) == null ? void 0 : A.widgets) == null ? void 0 : E.find) == null ? void 0 : L.call(E, (K) => (K == null ? void 0 : K.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function _A(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new vA(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function y1(e, t, n) {
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
function wp(e) {
  return !!(e != null && e.prototype);
}
function Hs(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function wA(e, t = {}) {
  wp(e) || _A(e, {
    ...t,
    onOpen: Hs(e, t.onOpen)
  });
}
function xA(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!wp(e)) {
    o0(e, {
      ...r,
      onOpen: Hs(e, t.onOpen)
    });
    return;
  }
  y1(e, "stickers_node_preview", (o) => {
    o0(o, {
      ...r,
      onOpen: Hs(o, t.onOpen)
    });
  });
}
function SA(e, t = {}) {
  if (!wp(e)) {
    i0(e, {
      ...t,
      onOpen: Hs(e, t.onOpen)
    });
    return;
  }
  y1(e, "cutout_preview", (n) => {
    i0(n, {
      ...t,
      onOpen: Hs(n, t.onOpen)
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
function kA(e = 80, t = null, n = 8) {
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
const MA = 250, NA = 600, PA = 180, AA = 2;
function CA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function bs(e, t, n) {
  return e + (t - e) * n;
}
function IA(e, t, n = 1) {
  const r = Math.max(
    Math.abs(Hd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), o = Math.hypot(...t.position.map((c, u) => c - e.position[u])) / Math.max(n, 1e-6), a = Math.min(1, r / PA + o / AA);
  return Math.round(bs(MA, NA, a));
}
function OA(e, t, n) {
  const r = CA(Z(n, 0, 1));
  return {
    position: e.position.map((o, a) => bs(o, t.position[a], r)),
    yaw_deg: Ht(e.yaw_deg + Hd(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: bs(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: bs(e.hFOV_deg, t.hFOV_deg, r),
    distance: bs(e.distance, t.distance, r)
  };
}
function EA(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(Hd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function FA(e, t, n, { scale: r = 1, end: o = null } = {}) {
  return EA(e, t) ? null : { from: e, to: t, startTs: n, durationMs: IA(e, t, r), end: o };
}
function TA(e, t) {
  const n = Z((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: OA(e.from, e.to, n), done: !1 };
}
function Xl(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function DA(e, t, n) {
  const r = Xl(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function Zo(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function LA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function RA({
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
  var G, T;
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
    historyEntries: Array.from({ length: 8 }, (_, $) => ({ index: $, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return y;
  const v = ((G = t.find((_) => o(e.paintColor, _.color))) == null ? void 0 : G.id) || "", x = !v, N = a(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((T = e.customPaintColor) == null ? void 0 : T.a) ?? 1))) * 100), A = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), E = e.brushSizes[A] ?? 10, L = d(), K = Array.from({ length: 8 }, (_, $) => e.customPaintHistory[$] || null);
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
    historyEntries: K.map((_, $) => ({
      index: $,
      color: _ ? { cssColor: r(_, 1) } : null
    })),
    sizeValue: E,
    sizeText: String(E),
    sizeFill: `${Math.max(0, Math.min(100, (E - 1) / 119 * 100))}%`,
    sizeDisabled: L,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function VA({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function gf(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function $A({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: o }) {
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
function zA({ hasShot: e, erp: t = !1, studio: n = !1 }) {
  const r = !e || t;
  return { disabled: r, tip: n && r ? e ? "A 360° camera has no frame" : "Add a camera to use the Frame view" : null };
}
const va = "erp", jA = ["1:1", "4:3", "3:2", "16:9"];
function b1(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...jA.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: va, label: Number(n) === 180 ? "180°" : "360°", active: e === va }] : []
  ];
}
function HA({
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
function GA({
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
  cameraDeletable: A = !1,
  erpChoice: E = !1,
  coverage: L = 360
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let K = [];
  if (n.length > 1)
    K = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    K = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    ];
  else if (r === "image") {
    if (K = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: N.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: N.send_back, disabled: !!u }
    ], y(t) || (K.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: N.duplicate }), K.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: N.replace_image })), y(t)) {
      const G = x(), T = v(t);
      K.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: G ? "Back to initial position" : "Already at initial position",
        icon: N.back_initial,
        disabled: !G
      }), K.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: T ? "Show" : "Hide",
        tip: T ? "Show input image" : "Hide input image",
        icon: T ? N.eye : N.eye_dashed
      });
    }
    K.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed }), y(t) || K.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u });
  } else
    K = [
      {
        key: "aspect",
        kind: "aspect",
        icon: N.aspect,
        open: !!b,
        choices: b1(d, { erp: E, coverage: L })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90, disabled: d === va }
    ], k ? A && K.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete }) : K.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    );
  return v1(o.corners, K);
}
const p0 = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function KA({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: o = !1 }) {
  const a = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], c = r ? p0.filter((u) => u.cameraTip) : p0;
  return v1([...e, ...a], [
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
function WA(e, t, n, r, o) {
  const { minX: u, maxX: d, minY: b, maxY: y } = e || {};
  if (![u, d, b, y].every(Number.isFinite)) return null;
  const v = Math.min(Math.max((u + d) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), x = Math.max(14, o - n - 14), N = y + 18, k = b - 18 - n;
  let A;
  return N <= x ? A = Math.max(N, 14) : k >= 14 ? A = Math.min(k, x) : A = Math.min(Math.max(N, 14), x), { left: v, top: A };
}
function v1(e, t) {
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
const BA = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function UA(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: c, playing: u, label: d, audio: b = null, fpsLocked: y = !1, camera: v = !1, stickers: x = !0, scene: N = !1, sceneLocked: k = !1 }) {
  const A = (T, _, $, B, re, _e) => {
    const P = (D) => (r == null ? void 0 : r.owner) === T && r.lane === D ? r.frames.map((pe) => pe + _e) : [];
    return {
      id: T,
      label: $,
      icon: B,
      clip: re,
      selected: T === o,
      open: c.has(T),
      keyed: hM(_, t - _e),
      keys: pM(_).map((D) => ({ frame: D.frame + _e, full: D.full })),
      selectedFrames: P(null),
      lanes: Ki(_).map((D) => ({
        key: `${T}:${D}`,
        lane: D,
        label: BA[D],
        frames: _[D].keyframes.map((pe) => pe.frame + _e),
        selectedFrames: P(D)
      }))
    };
  }, E = x ? e.stickers : [], L = E.filter((T) => T.placement === "sky").sort((T, _) => _.z_index - T.z_index), K = E.filter((T) => T.placement === "world"), G = ({ start: T, in: _, duration: $ }) => ({ clip: { start: T, end: $ === null ? null : T + $ }, offset: T - _ });
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
      ...v ? [A("camera", e.camera, "Camera", ke.camera, null, 0)] : [],
      ...[...L, ...K].map((T) => {
        const { clip: _, offset: $ } = G(T.clip);
        return A(T.id, T, qf(T), ke.image, _, $);
      }),
      ...x && (N || eb(e.scene)) ? [(() => {
        const { clip: T, offset: _ } = G(e.scene.clip);
        return A("scene", e.scene, "Scene", ke.box, T, _);
      })()] : []
    ]
  };
}
function YA(e, t, n, r) {
  const o = yM(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const XA = { class: "pano-floating-right" }, qA = {
  key: 0,
  class: "pano-floating-space"
}, JA = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, ZA = ["data-settled"], QA = ["data-ready", "data-settled"], eC = ["aria-label", "data-tip"], tC = {
  key: 1,
  class: "pano-camera-preview-label"
}, nC = {
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
      Y("div", XA, [
        e.space ? xi((ne(), ue("div", qA, [
          Y("div", JA, [
            (ne(!0), ue(Xe, null, _t(e.space.modes, (r) => (ne(), vr(cn, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Re(cn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [No, e.space.visible]
        ]) : ut("", !0),
        (ne(!0), ue(Xe, null, _t(e.buttons, (r) => (ne(), vr(cn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      xi(Y("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Y("div", {
          class: ct(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
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
          ], 8, eC)) : ut("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ne(), ue("div", tC, tt(e.preview.label || "Preview unavailable"), 1)) : ut("", !0)
        ], 14, QA)
      ], 8, ZA), [
        [No, e.preview.visible]
      ])
    ], 64));
  }
}, rC = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, iC = ["y2", "transform"], oC = ["transform"], aC = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = pt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => xi((ne(), ue("div", {
      class: ct(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ne(), ue("svg", rC, [
        a[1] || (a[1] = Y("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ne(!0), ue(Xe, null, _t(ot(n), (c) => (ne(), ue("line", {
          key: c,
          class: ct(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, iC))), 128)),
        Y("g", { transform: r.value }, [...a[0] || (a[0] = [
          Y("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, oC),
        a[2] || (a[2] = Y("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [No, e.model.visible === !0]
    ]);
  }
}, sC = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", {
      class: ct(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Re(t1, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Re(cn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Re(aC, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, lC = ["aria-label"], cC = { class: "pano-canvas-confirm-title" }, uC = { class: "pano-canvas-confirm-text" }, fC = { class: "pano-canvas-confirm-actions" }, dC = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, pC = {
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
      var A;
      const v = r.value;
      if (!v) return;
      const x = v.querySelector("[data-action='confirm-accept']");
      if (x instanceof HTMLElement) {
        x.focus();
        return;
      }
      const k = a()[0] || v;
      (A = k == null ? void 0 : k.focus) == null || A.call(k);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(v) {
      var L;
      if (v.defaultPrevented) return;
      if (v.key === "Escape") {
        v.preventDefault(), v.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (v.key !== "Tab") return;
      const x = a(), N = r.value;
      if (!x.length) {
        v.preventDefault(), (L = N == null ? void 0 : N.focus) == null || L.call(N);
        return;
      }
      const k = x[0], A = x[x.length - 1], E = document.activeElement;
      if (v.shiftKey) {
        (E === k || E === N || !(N != null && N.contains(E))) && (v.preventDefault(), A.focus());
        return;
      }
      (E === A || !(N != null && N.contains(E))) && (v.preventDefault(), k.focus());
    }
    function y(v) {
      v.target === n.value && c("confirm-cancel");
    }
    return vo(() => t.model.visible, (v, x) => {
      if (v) {
        o = document.activeElement, Dc(() => {
          u();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), Ws(() => {
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
        Y("div", cC, tt(e.model.title), 1),
        Y("div", uC, tt(e.model.text), 1),
        Y("div", fC, [
          x[0] || (x[0] = Y("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Y("button", dC, tt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, lC)
    ], 512)) : ut("", !0);
  }
}, hC = ["data-paint-pane"], mC = ["hidden"], gC = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], yC = ["aria-pressed", "disabled"], bC = ["hidden"], vC = { class: "pano-paint-color-pop-head" }, _C = { class: "pano-paint-color-field" }, wC = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, xC = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, SC = { class: "pano-paint-color-field" }, kC = { class: "pano-paint-alpha-wrap" }, MC = ["value"], NC = { "data-paint-alpha-value": "" }, PC = ["hidden"], AC = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, CC = ["data-paint-history-index", "aria-label", "disabled"], IC = ["data-paint-footer"], OC = ["data-paint-group"], EC = ["hidden"], FC = ["value", "disabled"], TC = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, DC = ["hidden"], LC = {
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
      class: ct(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ne(!0), ue(Xe, null, _t(e.panes, (a) => {
        var c;
        return ne(), ue("div", {
          key: a.key,
          class: ct(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ne(), ue("div", {
            key: 0,
            class: ct(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ne(!0), ue(Xe, null, _t(e.paintSwatches, (u) => (ne(), ue("button", {
              key: u.id,
              class: ct(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: Mt(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, gC))), 128)),
            Y("button", {
              class: ct(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Mt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, yC),
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
              Y("div", vC, [
                Y("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Mt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = Y("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Y("div", _C, [
                Y("div", wC, [
                  Y("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Mt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Y("div", xC, [
                  Y("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Mt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Y("label", SC, [
                o[1] || (o[1] = Y("span", null, "Opacity", -1)),
                Y("div", kC, [
                  Y("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, MC),
                  Y("span", NC, tt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Y("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Y("div", AC, [
                  (ne(!0), ue(Xe, null, _t(e.state.historyEntries || [], (u) => (ne(), ue("button", {
                    key: u.index,
                    class: ct(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: Mt(n(u.color))
                  }, null, 14, CC))), 128))
                ])
              ], 8, PC)
            ], 12, bC)
          ], 10, mC)) : ut("", !0),
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
                return ne(), vr(cn, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, OC),
            Y("div", {
              class: ct(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
              }, null, 12, FC),
              Y("span", TC, tt(e.state.sizeText || "10"), 1)
            ], 10, EC),
            Y("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              Re(cn, {
                icon: ot(ke).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, DC)
          ], 8, IC)
        ], 10, hC);
      }), 128))
    ], 2));
  }
}, RC = {
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
}, VC = ["aria-label"], $C = ["data-tip", "aria-pressed"], zC = {
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
      (ne(!0), ue(Xe, null, _t(e.buttons, (a) => (ne(), ue("button", yi({
        key: a.key,
        class: ["pano-segments-item", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), tt(a.label), 17, $C))), 128))
    ], 12, VC));
  }
}, jC = {
  key: 0,
  class: "pano-cutout-menu"
}, HC = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, GC = ["data-aspect"], KC = ["data-action", "aria-label", "data-tip", "disabled"], WC = {
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
        r.kind === "aspect" ? (ne(), ue("div", jC, [
          Y("button", HC, [
            Re(Lt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          Y("div", {
            class: ct(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ne(!0), ue(Xe, null, _t(r.choices || [], (o) => (ne(), ue("button", {
              key: o.value,
              class: ct(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, tt(o.label), 11, GC))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (ne(), vr(zC, {
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
        ], 8, KC))
      ], 64))), 128))
    ], 4));
  }
}, BC = {
  key: 0,
  class: "pano-easing"
}, UC = { class: "pano-section-title" }, YC = { class: "pano-easing-range" }, XC = { class: "pano-easing-modes" }, qC = ["aria-pressed", "onClick"], JC = ["viewBox"], ZC = ["x", "y"], QC = ["x1", "y1", "x2", "y2"], eI = ["d"], tI = ["x1", "y1", "x2", "y2"], nI = ["x1", "y1", "x2", "y2"], rI = ["cx", "cy"], iI = ["cx", "cy"], oI = { class: "pano-easing-note" }, fi = 132, lo = 14, aI = {
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
    }), u = (k) => lo + k * fi, d = (k) => lo + (1 - k) * fi, b = pt(() => {
      var K;
      if (((K = n.model) == null ? void 0 : K.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [k, A, E, L] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(k)} ${d(A)} ${u(E)} ${d(L)} ${u(1)} ${d(1)}`;
    }), y = pt(() => c.value ? c.value.map((k) => k.toFixed(2)).join(", ") : "");
    function v(k) {
      var A;
      return JSON.stringify(k.easing) === JSON.stringify((A = n.model) == null ? void 0 : A.easing);
    }
    function x(k, A) {
      r("timeline", { type: "easing", easing: k, commit: A });
    }
    function N(k, A) {
      var T;
      if (k.button !== 0 || !c.value) return;
      const E = k.currentTarget;
      (T = E.setPointerCapture) == null || T.call(E, k.pointerId);
      let L = null;
      const K = (_) => {
        const $ = a.value.getBoundingClientRect(), B = $.width / (fi + lo * 2), re = ((_.clientX - $.left) / B - lo) / fi, _e = 1 - ((_.clientY - $.top) / B - lo) / fi;
        L = [...L || c.value], L[A] = Math.round(Math.min(1, Math.max(0, re)) * 100) / 100, L[A + 1] = Math.round(Math.min(1, Math.max(0, _e)) * 100) / 100, x(L, !1);
      }, G = () => {
        E.removeEventListener("pointermove", K), E.removeEventListener("pointerup", G), E.removeEventListener("pointercancel", G), L && x(L, !0);
      };
      E.addEventListener("pointermove", K), E.addEventListener("pointerup", G), E.addEventListener("pointercancel", G);
    }
    return (k, A) => e.model ? (ne(), ue("div", BC, [
      Y("div", UC, [
        A[2] || (A[2] = Y("span", null, "Easing", -1)),
        Y("span", YC, tt(e.model.label), 1)
      ]),
      Y("div", XC, [
        (ne(), ue(Xe, null, _t(o, (E) => Y("button", {
          key: E.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": v(E) ? "true" : "false",
          onClick: (L) => x(E.easing, !0)
        }, tt(E.label), 9, qC)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ne(), ue("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${fi + lo * 2} ${fi + lo * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Y("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: fi,
          height: fi
        }, null, 8, ZC),
        Y("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, QC),
        Y("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, eI),
        c.value ? (ne(), ue(Xe, { key: 0 }, [
          Y("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, tI),
          Y("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, nI),
          Y("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: A[0] || (A[0] = (E) => N(E, 0))
          }, null, 40, rI),
          Y("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: A[1] || (A[1] = (E) => N(E, 2))
          }, null, 40, iI)
        ], 64)) : ut("", !0)
      ], 8, JC)) : ut("", !0),
      Y("div", oI, [
        e.model.mixed ? (ne(), ue(Xe, { key: 0 }, [
          ds("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ne(), ue(Xe, { key: 1 }, [
          ds("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ne(), ue(Xe, { key: 2 }, [
          ds("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ne(), ue(Xe, { key: 3 }, [
          ds("cubic-bezier(" + tt(y.value) + ")", 1)
        ], 64)) : ut("", !0)
      ])
    ])) : ut("", !0);
  }
}, sI = {
  class: "pano-side",
  "data-side": ""
}, lI = { class: "pano-side-head" }, cI = { class: "pano-side-title" }, uI = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, fI = {
  key: 0,
  class: "pano-side-scroll"
}, dI = { class: "pano-inspector" }, pI = { class: "pano-ui-row pano-coverage-row" }, hI = ["data-selected"], mI = ["aria-pressed", "disabled"], gI = ["aria-pressed", "disabled"], yI = {
  key: 0,
  class: "pano-section-title"
}, bI = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, vI = {
  class: "pano-picker",
  "data-picker": "selection"
}, _I = ["disabled"], wI = { class: "pano-picker-label" }, xI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, SI = ["hidden"], kI = ["data-selection-id"], MI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, NI = {
  key: 2,
  class: "pano-state-actions"
}, PI = ["disabled"], AI = ["data-key"], CI = ["min", "max", "step", "value", "disabled", "data-param-key"], II = ["min", "max", "step", "value", "disabled", "data-param-key"], OI = { class: "pano-visibility-section" }, EI = { class: "pano-visibility-stack" }, FI = ["data-visibility-row"], TI = { class: "pano-visibility-name" }, DI = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, LI = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], RI = ["open"], VI = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, $I = { class: "pano-ui-settings-body" }, zI = { class: "pano-ui-row" }, jI = ["data-selected"], HI = ["aria-pressed"], GI = ["aria-pressed"], KI = { class: "pano-ui-row" }, WI = ["data-selected"], BI = ["aria-pressed"], UI = ["aria-pressed"], YI = {
  key: 1,
  class: "pano-side-footer"
}, XI = ["data-action"], qI = {
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
      return ne(), ue("div", sI, [
        Y("div", lI, [
          Y("div", cI, [
            Y("span", uI, [
              Re(Lt, {
                icon: ot(ke).globe
              }, null, 8, ["icon"])
            ]),
            Y("span", null, tt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Y("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[12] || (d[12] = Y("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ne(), ue("div", fI, [
          Y("div", dI, [
            d[11] || (d[11] = Y("div", { class: "pano-section-title" }, [
              Y("span", null, "Scene")
            ], -1)),
            Y("div", pI, [
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
                }, "360", 8, mI),
                Y("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 180 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "180", 8, gI)
              ], 8, hI)
            ]),
            e.model.transformTitle !== !1 ? (ne(), ue("div", yI, [...d[3] || (d[3] = [
              Y("span", null, "Transform", -1)
            ])])) : ut("", !0),
            e.model.selectionPicker ? (ne(), ue("div", bI, [
              Y("label", null, tt(e.model.selectionPicker.label), 1),
              Y("div", vI, [
                Y("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Y("span", wI, [
                    e.model.selectionPicker.currentIcon ? (ne(), ue("span", xI, [
                      Re(Lt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    Y("span", null, tt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Y("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, _I),
                Y("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ne(!0), ue(Xe, null, _t(e.model.selectionPicker.items || [], (k) => (ne(), ue("button", {
                    key: k.id,
                    type: "button",
                    class: ct(["pano-picker-item", { active: k.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": k.id
                  }, [
                    k.icon ? (ne(), ue("span", MI, [
                      Re(Lt, {
                        icon: k.icon
                      }, null, 8, ["icon"])
                    ])) : ut("", !0),
                    Y("span", null, tt(k.label), 1)
                  ], 10, kI))), 128))
                ], 8, SI)
              ])
            ])) : ut("", !0),
            e.model.copyStateButton ? (ne(), ue("div", NI, [
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
              ], 8, PI)
            ])) : ut("", !0),
            Y("div", {
              class: ct(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
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
                }, null, 12, CI),
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
                }, null, 8, II)
              ], 8, AI))), 128))
            ], 2),
            Re(aI, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (k) => r("timeline", k))
            }, null, 8, ["model"]),
            (e.model.visibilityRows || []).length ? (ne(), ue(Xe, { key: 3 }, [
              d[6] || (d[6] = Y("div", { class: "pano-divider" }, null, -1)),
              Y("div", OI, [
                d[5] || (d[5] = Y("div", { class: "pano-section-title" }, [
                  Y("span", null, "Layers")
                ], -1)),
                Y("div", EI, [
                  (ne(!0), ue(Xe, null, _t(e.model.visibilityRows, (k) => (ne(), ue("div", {
                    key: k.key,
                    class: ct(["pano-visibility-row", { "is-hidden": k.visible === !1, "is-disabled": k.enabled === !1 }]),
                    "data-visibility-row": k.key
                  }, [
                    Y("span", TI, [
                      Y("span", DI, [
                        Re(Lt, {
                          icon: k.icon
                        }, null, 8, ["icon"])
                      ]),
                      Y("span", null, tt(k.label), 1)
                    ]),
                    Y("button", {
                      class: ct(["pano-visibility-toggle", { active: k.visible === !0 }]),
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
                    ], 10, LI)
                  ], 10, FI))), 128))
                ])
              ])
            ], 64)) : ut("", !0),
            e.model.uiSettings ? (ne(), ue("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Y("summary", null, [
                d[7] || (d[7] = Y("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Y("span", VI, [
                  Re(Lt, {
                    icon: ot(ke).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Y("div", $I, [
                Y("div", zI, [
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
                    }, "Normal", 8, HI),
                    Y("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, GI)
                  ], 8, jI)
                ]),
                Y("div", KI, [
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
                    }, "Normal", 8, BI),
                    Y("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, UI)
                  ], 8, WI)
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
            ], 8, RI)) : ut("", !0)
          ])
        ])) : ut("", !0),
        (e.model.footerButtons || []).length ? (ne(), ue("div", YI, [
          (ne(!0), ue(Xe, null, _t(e.model.footerButtons, (k) => (ne(), ue("button", {
            key: k.action,
            class: ct(["pano-btn", { "pano-btn-primary": k.primary === !0 }]),
            type: "button",
            "data-action": k.action
          }, tt(k.label), 11, XI))), 128))
        ])) : ut("", !0)
      ]);
    };
  }
}, JI = { class: "pano-timeline-bar" }, ZI = ["aria-label", "data-tip"], QI = ["aria-label", "data-tip"], eO = { class: "pano-timeline-time" }, tO = ["data-tip"], nO = { key: 0 }, rO = ["value"], iO = ["data-tip"], oO = { key: 0 }, aO = ["value"], sO = ["aria-expanded"], lO = ["inert"], cO = { class: "pano-timeline-name" }, uO = ["aria-expanded", "aria-label", "onClick"], fO = ["title", "aria-current", "onClick"], dO = ["data-keyed", "aria-label", "onClick"], pO = ["onPointerdown"], hO = ["onPointerdown"], mO = ["onPointerdown"], gO = ["onPointerdown"], yO = ["aria-label", "data-tip", "onPointerdown"], bO = { key: 0 }, vO = ["onPointerdown"], _O = ["aria-label", "data-tip", "onPointerdown"], wO = { key: 0 }, xO = 10, SO = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ Zt(null), c = /* @__PURE__ */ Zt(null), u = /* @__PURE__ */ Zt(1), d = /* @__PURE__ */ Zt(0), b = /* @__PURE__ */ Zt(!1);
    let y = null, v = null, x = null;
    Rc(() => {
      y = new ResizeObserver(([U]) => {
        u.value = Math.max(1, U.contentRect.width);
      }), a.value && y.observe(a.value), v = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), c.value && v.observe(c.value);
    }), Ws(() => {
      y == null || y.disconnect(), v == null || v.disconnect(), x == null || x();
    });
    const N = pt(() => Math.max(1, Number(n.model.span || 1))), k = pt(() => u.value / N.value), A = (U) => `${U / N.value * 100}%`, E = pt(() => {
      const U = o.find((R) => R * k.value >= 56) || o[o.length - 1], q = [];
      for (let R = 0; R < N.value; R += U) q.push(R);
      return q;
    });
    function L(U) {
      const q = a.value.getBoundingClientRect(), R = Math.floor((U - q.left) / Math.max(1, q.width) * N.value);
      return Math.min(N.value - 1, Math.max(0, R));
    }
    function K(U, q, R) {
      const O = Math.ceil(xO / Math.max(1e-6, k.value)), te = new Map(q.map((ee) => [ee.frame, ee.full]));
      return SM(q.map((ee) => ee.frame), O).map((ee, Ee) => ({
        ...ee,
        key: `${U}:${Ee}`,
        partial: ee.frames.some((Fe) => !te.get(Fe)),
        selected: ee.frames.some((Fe) => R.includes(Fe))
      }));
    }
    function G(U) {
      return K(U.id, U.keys, U.selectedFrames);
    }
    function T(U) {
      return K(U.key, U.frames.map((q) => ({ frame: q, full: !0 })), U.selectedFrames);
    }
    function _(U) {
      const q = U.end === null ? N.value : U.end;
      return { left: A(U.start), width: A(Math.max(0, q - U.start)) };
    }
    function $(U, q) {
      const R = U.clientX, O = Math.max(1e-6, k.value);
      let te = 0;
      q("start", 0, U);
      const ee = (Fe) => {
        if (Fe.pointerId !== U.pointerId) return;
        const vt = Math.round((Fe.clientX - R) / O);
        vt !== te && (te = vt, q("move", te, Fe));
      }, Ee = (Fe) => {
        Fe.pointerId === U.pointerId && (x(), q("end", te, Fe));
      };
      x == null || x(), x = () => {
        window.removeEventListener("pointermove", ee), window.removeEventListener("pointerup", Ee), window.removeEventListener("pointercancel", Ee), x = null;
      }, window.addEventListener("pointermove", ee), window.addEventListener("pointerup", Ee), window.addEventListener("pointercancel", Ee);
    }
    function B(U) {
      U.button === 0 && $(U, (q, R, O) => r("action", { type: "seek", frame: L(O.clientX), phase: q }));
    }
    function re(U, q, R) {
      U.button === 0 && (r("action", { type: "select-row", id: q.id }), $(U, (O, te) => r("action", { type: "clip", id: q.id, mode: R, delta: te, phase: O })));
    }
    function _e(U, q, R, O, te) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: q.id, lane: R, frames: O.frames, additive: !0 });
          return;
        }
        O.frames.every((ee) => te.includes(ee)) || r("action", { type: "select-keys", owner: q.id, lane: R, frames: O.frames, additive: !1 }), $(U, (ee, Ee) => r("action", { type: "move-keys", delta: Ee, phase: ee }));
      }
    }
    const P = pt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function D(U, q, R) {
      r("action", q), await Dc(), U.target.value = R();
    }
    function pe(U) {
      D(U, { type: "fps", fps: Number(U.target.value) }, () => P.value);
    }
    function Ce(U) {
      const q = U.target.value.trim();
      D(U, { type: "length", length: q ? Number(q) : null }, () => n.model.length ?? "");
    }
    function fe(U, q, R) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: q.id, lane: R, frames: [], additive: !1 });
    }
    return (U, q) => xi((ne(), ue("section", {
      class: ct(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Y("div", JI, [
        Y("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: q[0] || (q[0] = (R) => r("action", { type: "play" }))
        }, [
          Re(Lt, {
            icon: e.model.playing ? ot(ke).pause : ot(ke).play
          }, null, 8, ["icon"])
        ], 8, ZI),
        e.model.hasAudio ? (ne(), ue("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: q[1] || (q[1] = (R) => r("action", { type: "mute" }))
        }, [
          Re(Lt, {
            icon: e.model.muted ? ot(ke).volume_muted : ot(ke).volume2
          }, null, 8, ["icon"])
        ], 8, QI)) : ut("", !0),
        Y("span", eO, tt(e.model.label), 1),
        Y("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (ne(), ue("span", nO, tt(P.value), 1)) : (ne(), ue("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: P.value,
            "aria-label": "Timeline fps",
            onChange: pe
          }, null, 40, rO)),
          q[6] || (q[6] = Y("span", null, "fps", -1))
        ], 8, tO),
        Y("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          q[7] || (q[7] = Y("span", null, "Length", -1)),
          e.model.lengthLocked ? (ne(), ue("span", oO, tt(e.model.length), 1)) : (ne(), ue("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Ce
          }, null, 40, aO))
        ], 8, iO),
        Y("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: q[2] || (q[2] = (R) => r("action", { type: "toggle-expanded" }))
        }, [
          q[8] || (q[8] = Y("span", null, "Timeline", -1)),
          Re(Lt, {
            icon: ot(ke).chevron
          }, null, 8, ["icon"])
        ], 8, sO)
      ]),
      Y("div", {
        class: ct(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: Mt({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: q[3] || (q[3] = Dt((R) => b.value = !0, ["self"])),
        onTransitionend: q[4] || (q[4] = Dt((R) => b.value = !1, ["self"])),
        onTransitioncancel: q[5] || (q[5] = Dt((R) => b.value = !1, ["self"]))
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
            (ne(!0), ue(Xe, null, _t(E.value, (R) => (ne(), ue("span", {
              key: R,
              class: "pano-timeline-tick",
              style: Mt({ left: A(R) })
            }, tt(R), 5))), 128)),
            Y("span", {
              class: "pano-timeline-playhead",
              style: Mt({ left: A(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (ne(!0), ue(Xe, null, _t(e.model.rows || [], (R) => (ne(), ue(Xe, {
            key: R.id
          }, [
            Y("div", {
              class: ct(["pano-timeline-head", { selected: R.selected }])
            }, [
              Y("div", cO, [
                Y("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  "aria-expanded": R.open ? "true" : "false",
                  "aria-label": R.open ? `Hide ${R.label} parameters` : `Show ${R.label} parameters`,
                  onClick: Dt((O) => r("action", { type: "toggle-row", id: R.id }), ["stop"])
                }, [
                  Re(Lt, {
                    icon: ot(ke).chevron
                  }, null, 8, ["icon"])
                ], 8, uO),
                Y("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: R.label,
                  "aria-current": R.selected ? "true" : void 0,
                  onClick: (O) => r("action", { type: "select-row", id: R.id })
                }, [
                  Re(Lt, {
                    icon: R.icon
                  }, null, 8, ["icon"]),
                  Y("span", null, tt(R.label), 1)
                ], 8, fO),
                Y("button", {
                  class: ct(["pano-timeline-key", { keyed: R.keyed }]),
                  type: "button",
                  "data-keyed": R.keyed ? "true" : "false",
                  "aria-label": R.keyed ? `Every ${R.label} parameter has a keyframe here; update them` : `Add keyframes for every ${R.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Dt((O) => r("action", { type: "key-row", owner: R.id }), ["stop"])
                }, [
                  Re(Lt, {
                    icon: ot(ke).keyframe
                  }, null, 8, ["icon"])
                ], 10, dO)
              ]),
              R.open ? (ne(!0), ue(Xe, { key: 0 }, _t(R.lanes, (O) => (ne(), ue("div", {
                key: O.key,
                class: "pano-timeline-lane-head"
              }, tt(O.label), 1))), 128)) : ut("", !0)
            ], 2),
            Y("div", {
              class: ct(["pano-timeline-track", { selected: R.selected }])
            }, [
              Y("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (O) => fe(O, R, null)
              }, [
                R.clip ? (ne(), ue("div", {
                  key: 0,
                  class: ct(["pano-timeline-clip", { open: R.clip.end === null }]),
                  style: Mt(_(R.clip)),
                  onPointerdown: Dt((O) => re(O, R, "move"), ["stop"])
                }, [
                  Y("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Dt((O) => re(O, R, "start"), ["stop"])
                  }, null, 40, mO),
                  Y("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Dt((O) => re(O, R, "end"), ["stop"])
                  }, null, 40, gO)
                ], 46, hO)) : ut("", !0),
                (ne(!0), ue(Xe, null, _t(G(R), (O) => (ne(), ue("button", {
                  key: O.key,
                  type: "button",
                  class: ct(["pano-timeline-pin", { selected: O.selected, cluster: O.frames.length > 1, partial: O.partial }]),
                  style: Mt({ left: A(O.frame + 0.5) }),
                  "aria-label": `${R.label}: ${O.frames.length > 1 ? `${O.frames.length} keyframes` : `keyframe at frame ${O.frames[0]}`}`,
                  "data-tip": O.frames.length > 1 ? `${O.frames.length} keyframes` : `Frame ${O.frames[0]}`,
                  onPointerdown: Dt((te) => _e(te, R, null, O, R.selectedFrames), ["stop"])
                }, [
                  O.frames.length > 1 ? (ne(), ue("span", bO, tt(O.frames.length), 1)) : ut("", !0)
                ], 46, yO))), 128))
              ], 40, pO),
              R.open ? (ne(!0), ue(Xe, { key: 0 }, _t(R.lanes, (O) => (ne(), ue("div", {
                key: O.key,
                class: "pano-timeline-lane",
                onPointerdown: (te) => fe(te, R, O.lane)
              }, [
                (ne(!0), ue(Xe, null, _t(T(O), (te) => (ne(), ue("button", {
                  key: te.key,
                  type: "button",
                  class: ct(["pano-timeline-pin", { selected: te.selected, cluster: te.frames.length > 1 }]),
                  style: Mt({ left: A(te.frame + 0.5) }),
                  "aria-label": `${O.label}: ${te.frames.length > 1 ? `${te.frames.length} keyframes` : `keyframe at frame ${te.frames[0]}`}`,
                  "data-tip": te.frames.length > 1 ? `${te.frames.length} keyframes` : `Frame ${te.frames[0]}`,
                  onPointerdown: Dt((ee) => _e(ee, R, O.lane, te, O.selectedFrames), ["stop"])
                }, [
                  te.frames.length > 1 ? (ne(), ue("span", wO, tt(te.frames.length), 1)) : ut("", !0)
                ], 46, _O))), 128))
              ], 40, vO))), 128)) : ut("", !0),
              Y("span", {
                class: "pano-timeline-playhead",
                style: Mt({ left: A(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, lO)
    ], 2)), [
      [No, e.model.visible]
    ]);
  }
}, kO = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", {
      class: ct(["pano-tooltip", {
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
}, MO = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, NO = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ne(), ue("div", MO, [
      (ne(!0), ue(Xe, null, _t(e.buttons, (r) => xi((ne(), vr(cn, {
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
        [No, r.visible !== !1]
      ])), 128))
    ]));
  }
}, PO = ["data-video-ready"], AO = { class: "pano-video-transport-shell" }, CO = { class: "pano-video-controls-left" }, IO = { class: "pano-video-filmstrip" }, OO = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, EO = ["src", "onLoad"], FO = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, TO = ["max", "value", "disabled"], DO = { class: "pano-video-controls-right" }, LO = ["data-has-audio"], RO = { class: "pano-video-volume-pop" }, VO = ["value", "disabled"], $O = {
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
      var _, $;
      return ((_ = t.state) == null ? void 0 : _.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = pt(() => {
      var _, $, B;
      return ((_ = t.state) == null ? void 0 : _.hasAudio) !== !0 ? ke.volume : (($ = t.state) == null ? void 0 : $.muted) === !0 || Number(((B = t.state) == null ? void 0 : B.volume) ?? 1) <= 0 ? ke.volume_muted : ke.volume2;
    }), y = pt(() => {
      var _;
      return Math.max(0, Math.min(100, Number(((_ = t.state) == null ? void 0 : _.progressPct) || 0)));
    }), v = pt(() => ({ left: `${y.value}%` })), x = pt(() => {
      var re, _e;
      const _ = (re = t.state) == null ? void 0 : re.volumePct, $ = Number(((_e = t.state) == null ? void 0 : _e.volume) ?? 1) * 100, B = Number(_ ?? $ ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, B))}%`
      };
    }), N = pt(() => {
      var B, re;
      const $ = [
        String(((B = t.state) == null ? void 0 : B.currentTimeLabel) || "0:00"),
        String(((re = t.state) == null ? void 0 : re.durationLabel) || "0:00")
      ].reduce((_e, P) => Math.max(_e, P.length), 4);
      return `${Math.max(4, $)}ch`;
    }), k = pt(() => ({ "--pano-video-time-ch": N.value })), A = pt(() => {
      var B, re;
      const _ = Array.isArray((B = t.state) == null ? void 0 : B.thumbnails) ? t.state.thumbnails : [];
      if (_.length) return _;
      const $ = Math.max(7, Number(((re = t.state) == null ? void 0 : re.thumbnailCount) || 9));
      return Array.from({ length: $ }, (_e, P) => ({
        id: `placeholder-${P}`,
        src: "",
        label: ""
      }));
    }), E = /* @__PURE__ */ Zt(/* @__PURE__ */ new Set()), L = (_) => String((_ == null ? void 0 : _.id) || (_ == null ? void 0 : _.src) || (_ == null ? void 0 : _.label) || ""), K = (_) => E.value.has(L(_)), G = (_) => {
      const $ = new Set(E.value);
      $.add(L(_)), E.value = $;
    };
    vo(A, (_) => {
      const $ = new Set(_.map(L)), B = /* @__PURE__ */ new Set();
      for (const re of E.value)
        $.has(re) && B.add(re);
      E.value = B;
    }, { immediate: !0 });
    const T = pt(() => {
      var _;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((_ = t.state) == null ? void 0 : _.shellMaxWidthPx) || 640))}px`
      };
    });
    return (_, $) => (ne(), ue("div", {
      class: ct(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Mt(T.value)
    }, [
      $[1] || ($[1] = Y("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      $[2] || ($[2] = Y("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Y("div", AO, [
        Y("div", CO, [
          Re(cn, {
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
        Y("div", IO, [
          Y("div", OO, [
            (ne(!0), ue(Xe, null, _t(A.value, (B) => (ne(), ue("div", {
              key: L(B),
              class: ct(["pano-video-thumb", {
                "is-placeholder": !B.src,
                "is-loaded": B.src && K(B)
              }])
            }, [
              B.src ? (ne(), ue("img", {
                key: 0,
                src: B.src,
                alt: "",
                draggable: "false",
                onLoad: (re) => G(B)
              }, null, 40, EO)) : (ne(), ue("span", FO))
            ], 2))), 128))
          ]),
          Y("div", {
            class: "pano-video-playhead",
            style: Mt(v.value),
            "aria-hidden": "true"
          }, [...$[0] || ($[0] = [
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
          }, null, 8, TO)
        ]),
        Y("div", DO, [
          Y("div", {
            class: "pano-video-time pano-video-time-end",
            style: Mt(k.value)
          }, tt(e.state.durationLabel || "0:00"), 5),
          Re(cn, {
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
            Y("div", RO, [
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
              }, null, 12, VO)
            ]),
            Re(cn, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, LO)
        ])
      ])
    ], 14, PO));
  }
}, zO = { class: "pano-floating-top" }, jO = ["data-selected", "data-view-count"], HO = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "data-tip"], GO = { class: "label" }, KO = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ne(), ue("div", zO, [
        Y("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ne(!0), ue(Xe, null, _t(e.buttons, (o) => xi((ne(), ue("button", {
            key: o.key,
            class: ct(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            "aria-disabled": o.disabled === !0 ? "true" : null,
            "data-tip": o.tip || null
          }, [
            Re(Lt, {
              icon: o.icon
            }, null, 8, ["icon"]),
            Y("span", GO, tt(o.label), 1)
          ], 10, HO)), [
            [No, o.visible !== !1]
          ])), 128))
        ], 8, jO)
      ]);
    };
  }
};
function _1(e = "stickers") {
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
const WO = ["aria-label"], BO = { class: "pano-stage-column" }, UO = { class: "pano-stage-wrap" }, YO = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, XO = {
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
      var P, D;
      return ((D = (P = y.value) == null ? void 0 : P.getRefs) == null ? void 0 : D.call(P)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(P) {
      var D, pe;
      return ((pe = (D = b.value) == null ? void 0 : D.open) == null ? void 0 : pe.call(D, P)) === !0;
    }
    function N(P) {
      o("image-file-selected", P);
    }
    function k(P) {
      o("image-file-cancelled", P);
    }
    t({ getPaintOverlayRefs: v, openImagePicker: x });
    const A = pt(() => r.readOnly === !0), E = pt(() => r.shellPreset || _1(r.type)), L = pt(() => {
      var D, pe, Ce;
      const P = String((((D = r.uiState) == null ? void 0 : D.stageStatus) === "failed" ? (pe = r.uiState) == null ? void 0 : pe.stageStatusDetail : (Ce = r.uiState) == null ? void 0 : Ce.stageWarningDetail) ?? "");
      return P === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : P === "stickers" ? "One or more sticker previews are unavailable." : P === "frame" ? "The editor hit a rendering error. Check the browser console for details." : P === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : P.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), K = pt(() => {
      var D;
      const P = Array.isArray((D = E.value) == null ? void 0 : D.floatingButtons) ? E.value.floatingButtons.slice() : [];
      return A.value && P.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ke.fullscreen
      }), P;
    });
    function G() {
      const P = d.value;
      return P ? Array.from(P.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((D) => D instanceof HTMLElement ? !D.hidden && D.tabIndex >= 0 && D.offsetParent !== null : !1) : [];
    }
    function T() {
      var pe;
      const D = G()[0] || d.value;
      (pe = D == null ? void 0 : D.focus) == null || pe.call(D);
    }
    function _() {
      var P;
      u != null && u.isConnected && ((P = u.focus) == null || P.call(u)), u = null;
    }
    function $(P) {
      var D, pe, Ce, fe;
      if (!P.defaultPrevented) {
        if (P.key === "Tab") {
          const U = G();
          if (!U.length) {
            P.preventDefault(), (pe = (D = d.value) == null ? void 0 : D.focus) == null || pe.call(D);
            return;
          }
          const q = U[0], R = U[U.length - 1], O = document.activeElement;
          if (P.shiftKey) {
            (O === q || O === d.value || !((Ce = d.value) != null && Ce.contains(O))) && (P.preventDefault(), R.focus());
            return;
          }
          (O === R || !((fe = d.value) != null && fe.contains(O))) && (P.preventDefault(), q.focus());
          return;
        }
        P.key === "Escape" && o("close");
      }
    }
    function B() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function re() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function _e(P) {
      document.removeEventListener("keydown", $), P ? (u || (u = document.activeElement), B(), document.addEventListener("keydown", $), Dc(() => {
        T();
      })) : (re(), _());
    }
    return Rc(() => {
      _e(r.open);
    }), Ws(() => {
      re(), document.removeEventListener("keydown", $), _();
    }), vo(() => r.open, (P) => {
      _e(P);
    }), (P, D) => e.open ? (ne(), ue("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: D[2] || (D[2] = Dt((pe) => o("close"), ["self"]))
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
        Y("div", BO, [
          Y("div", UO, [
            D[3] || (D[3] = Y("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            D[4] || (D[4] = Y("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            D[5] || (D[5] = Y("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ne(), ue("div", YO, tt(L.value), 1)) : ut("", !0),
            D[6] || (D[6] = Y("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Y("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Re(RC, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            Re(n1, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: N,
              onFileCancelled: k
            }, null, 512),
            A.value ? ut("", !0) : (ne(), ue(Xe, { key: 1 }, [
              Re(NO, {
                buttons: e.uiState.toolButtons || E.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Re(sC, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Re(LC, {
                "paint-swatches": e.paintSwatches,
                panes: E.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Re($O, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Re(KO, {
              buttons: e.uiState.viewButtons || E.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Re(nC, {
              buttons: e.uiState.floatingButtons || K.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Re(WC, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Re(kO, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Re(pC, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Re(SO, {
            model: e.uiState.timeline || {},
            onAction: D[0] || (D[0] = (pe) => o("timeline", pe))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ut("", !0) : (ne(), vr(qI, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: D[1] || (D[1] = (pe) => o("timeline", pe))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, WO)
    ])) : ut("", !0);
  }
}, Ar = "loading", Ma = "ready", mr = "failed";
function w1(e, t = "") {
  return e && (e.__panoLoadState = Ar, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function x1(e, t = "") {
  return e && (e.__panoLoadState = Ma, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function S1(e, t = "") {
  return e && (e.__panoLoadState = mr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function vd(e, t) {
  return e ? e.__panoLoadState === mr ? mr : typeof t == "function" && t(e) ? Ma : Ar : Ma;
}
function _d(e) {
  return vd(e) === mr;
}
function qO({ presented: e, background: t = Ma, stickers: n = [] } = {}) {
  if (!e) return { status: Ar, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === Ar, a = r.includes(Ar);
  if (o && a) return { status: Ar, detail: "mixed" };
  if (o) return { status: Ar, detail: "background" };
  if (a) return { status: Ar, detail: "stickers" };
  const c = t === mr, u = r.includes(mr);
  return c && u ? { status: mr, detail: "mixed" } : c ? { status: mr, detail: "background" } : u ? { status: mr, detail: "stickers" } : { status: Ma, detail: "" };
}
const JO = "state_json", ZO = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), yf = "sticker_image_1", QO = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), h0 = 0.01, eE = "external_image", Al = "pano_sticker_input_images", tE = "pano_sticker_input_videos", nE = "pano_sticker_input_frames", rE = "pano_sticker_input_video_meta", iE = !0, ql = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], zr = Math.PI / 180, mo = 180 / Math.PI, bf = 1, m0 = "rgb(255, 221, 87)", oE = "rgb(228, 228, 231)", aE = "rgb(180, 150, 60)", sE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, lE = 64, g0 = 40, vf = 16, cE = 0.45, y0 = 180, uE = 160, Pc = 24, fE = 4, dE = 4, Cl = /* @__PURE__ */ new Map(), b0 = /* @__PURE__ */ new Map(), Hi = /* @__PURE__ */ new Map(), pE = 12, Cn = Ib({
  app: Ir,
  api: Jt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: _d,
    markImageFailed: S1,
    markImageLoading: w1,
    markImageReady: x1
  }
});
function _f(e) {
  if (!xn(e, "background") || !xn(e, "external-sticker")) return null;
  const t = Cn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const hE = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function mE(e) {
  if (!xn(e, "background")) return null;
  const [t] = Cn.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = Cn.uiValue(e, "pano_timeline_frames") || [], [r] = Cn.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: Xn(r) };
}
const gE = Cn.assetSource, us = Cn.source, wf = Cn.uiImage, yE = Cn.invalidateUiImage, bE = Cn.resolvePreferredExactLinkedSource, xf = Cn.loadPreferredExactLinkedImage;
function Sf(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function vE(e) {
  return 1 - Math.pow(1 - e, 3);
}
function _E(e, t, n) {
  const r = Z((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function wE(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Hi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Hi.delete(t), Hi.set(t, n), n);
}
function xE(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Hi.delete(n), Hi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Hi.size > pE; ) {
      const o = Hi.keys().next().value;
      if (!o) break;
      Hi.delete(o);
    }
}
function SE(e) {
  return e * e * e;
}
function Bc(e, t, n) {
  return { x: e, y: t, z: n };
}
function v0(e, t) {
  return Bc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function _0(e, t) {
  return Bc(e.x * t, e.y * t, e.z * t);
}
function kf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function kE(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Bc(e.x / t, e.y / t, e.z / t);
}
function Il(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * mo),
    pitch: Z(Math.asin(Z(e.y, -1, 1)) * mo, -90, 90)
  };
}
function di(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, c = t[r].y, u = t[o].x, d = t[o].y;
    c > e.y != d > e.y && e.x < (u - a) * (e.y - c) / (d - c || 1e-6) + a && (n = !n);
  }
  return n;
}
function $i(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Mf(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return $i(e, t);
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
function ME(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Ol = { fillStyle: "", url: "" };
function NE(e, t, n) {
  if (Ol.url && Ol.fillStyle === String(e || ""))
    return Ol.url;
  const r = ME(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Pc}" height="${Pc}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Ol = { fillStyle: String(e || ""), url: r }, r;
}
function Jl(e, t, n = 0.015) {
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
function PE(e) {
  return ql.some((t) => Jl(e, t.color));
}
function Nf(e, t, n) {
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
function Pf(e) {
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
const k1 = "pano_suite.ui_settings.v1", M1 = "pano_suite.node_grid_visibility.v1";
let aa = null, Hr = null;
function Zl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function AE() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(k1)) || "").trim();
    if (!t) return aa ? Zl(aa) : null;
    const n = JSON.parse(t), r = Zl(n);
    return aa = r, r;
  } catch {
    return aa ? Zl(aa) : null;
  }
}
function CE(e) {
  var n;
  const t = Zl(e);
  aa = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(k1, JSON.stringify(t));
  } catch {
  }
  return t;
}
function N1() {
  var e;
  if (Hr && typeof Hr == "object")
    return Hr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(M1)) || "").trim();
    if (!t)
      return Hr = {}, Hr;
    const n = JSON.parse(t);
    return Hr = n && typeof n == "object" ? n : {}, Hr;
  } catch {
    return Hr = {}, Hr;
  }
}
function IE(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = N1()[n];
  return typeof o == "boolean" ? o : !!t;
}
function OE(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = N1();
  r[n] = !!t, Hr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(M1, JSON.stringify(r));
  } catch {
  }
}
function EE(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function w0(e) {
  const { paintCount: t, maskCount: n } = EE(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function El(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function FE(e, t) {
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
function co(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function TE(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function DE(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function LE(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function RE(e, t, n = {}) {
  var vm, _m;
  await a1(e, { tolerateOperationFailure: !0 }), Cn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = FE(e, t);
  await mp();
  const u = El(e, "output_preset"), d = El(e, "coverage"), b = El(e, "bg_color"), y = El(e, JO), v = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return xf(
      e,
      i,
      () => ae(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = v();
    return LE(i);
  }, N = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return DE(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : TE(s, i);
  }, k = e.__panoSceneStateV2 === !0, A = t === "stickers" && k, E = t === "cutout" && k, L = A && e.__panoStudio === !0, K = E || L, G = t === "cutout" || L, T = E ? mE(e) : null, _ = (k ? ob : ib)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: T ? T.coverage : Xn(d == null ? void 0 : d.value),
    sharedUiSettings: AE(),
    active: lb(e),
    fps: k ? _f(e) : null,
    scene: (T == null ? void 0 : T.state) ?? null,
    camera: E
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0;
  let $ = null;
  K ? ($ = _.camera ? gg(_.camera, 0) : null, _.shots = $ ? [{ ...$, position: [...$.position] }] : [], _.active.selected_shot_id = $ && E ? Xf : null) : t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const B = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], s = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, re = B ? uh(B, !1) : { width: 220, height: 132 }, _e = _1(L ? "studio" : t), P = /* @__PURE__ */ Na({
    stageStatus: Ar,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (_e.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (vm = _e.spaceButtons) != null && vm.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: _e.spaceButtons, frame: _e.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (_e.toolButtons || []).map((i) => ({
      ...i,
      disabled: !1,
      ...i.key === "add-world" ? { visible: A } : {},
      ...E && hE.has(i.key) ? { visible: !1 } : {}
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
      width: re.width,
      height: re.height,
      label: B ? "Loading preview" : "Add Frame to preview"
    }
  }), D = document.createElement("div");
  document.body.appendChild(D);
  const pe = ({ intent: i, file: s } = {}) => {
    if (Cr(s)) {
      if (i === "add") {
        Nh(s);
        return;
      }
      if (i === "add-world") {
        $_(s);
        return;
      }
      i === "replace" && H_(s);
    }
  }, Ce = ({ intent: i } = {}) => {
  }, fe = Vd(XO, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: _e,
    paintSwatches: ql.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: jr(i.color, 1)
    })),
    uiState: P,
    onClose: () => {
      Yo();
    },
    onTimeline: (i) => L_(i),
    onImageFileSelected: pe,
    onImageFileCancelled: Ce
  });
  let U = null;
  try {
    U = fe.mount(D);
  } catch (i) {
    try {
      fe.unmount();
    } catch {
    }
    throw D.remove(), i;
  }
  const q = D.querySelector(".pano-modal-overlay"), R = D.querySelector(".pano-modal"), O = R == null ? void 0 : R.querySelector("[data-stage-overlay]"), te = R == null ? void 0 : R.querySelector("[data-stage-background]"), ee = R == null ? void 0 : R.querySelector(".pano-stage-wrap"), Ee = ((_m = U == null ? void 0 : U.getPaintOverlayRefs) == null ? void 0 : _m.call(U)) || {}, Fe = Ee.cursor || null, vt = Ee.sizePreview || null, ht = Ee.sizeSample || null;
  if (!q || !R || !O || !te || !ee || !Fe || !vt || !ht)
    throw fe.unmount(), D.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const V = O.getContext("2d"), gt = R.querySelector("[data-side]"), Pe = R.querySelector("[data-video-element]"), wt = R.querySelector("[data-port-video-element]"), Et = R.querySelector(".pano-floating-right"), mn = R.querySelector(".pano-floating-top"), ei = R.querySelector("[data-tool-rail]"), z = R.querySelector("[data-frame-rail]"), W = R.querySelector("[data-frame-roll-knob]"), ie = R.querySelector("[data-paint-dock]"), we = R.querySelector(".pano-video-transport"), ge = R.querySelector("[data-selection-menu]");
  let ve = !1;
  const Me = R.querySelector("[data-tooltip]"), Ae = R.querySelector("[data-camera-preview-host]"), Se = R.querySelector("[data-camera-preview-canvas]"), de = R.querySelector("[data-paint-color-row]"), Oe = R.querySelector("[data-paint-color-pop]"), Ie = R.querySelector("[data-paint-color-sv]"), $e = R.querySelector("[data-paint-color-sv-cursor]"), He = R.querySelector("[data-paint-hue-strip]"), at = R.querySelector("[data-paint-hue-handle]");
  let st = 0, ft = 0;
  ee == null || ee.removeAttribute("data-stage-ready"), ee == null || ee.setAttribute("data-stage-loading-kind", "boot"), O.style.opacity = "1", te.style.opacity = "0", o && (gt == null || gt.remove(), R.classList.add("pano-modal-readonly"));
  const dt = () => {
    if (!h.customPaintSessionStart) return;
    if (Jl(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (PE(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      er(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !Jl(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, Rt = (i = !1) => {
    !Oe || Oe.hidden || (i ? dt() : h.customPaintSessionStart = null, Oe.hidden = !0, P.paintDock.colorPopOpen = !1);
  }, Tn = () => {
    Oe && (Oe.hidden && (h.customPaintSessionStart = er(h.customPaintColor)), Oe.hidden = !1, P.paintDock.colorPopOpen = !0);
  };
  R.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || to(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (R.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), Rt(!0), G && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ge(), ae()), (s = P.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (P.frameRail.aspectOpen = !1)));
  });
  const Dn = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, ti = JSON.stringify(hg(_)), h = {
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
    historyController: kA(80, { entries: [ti], index: 0 }),
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
    showGrid: IE(e == null ? void 0 : e.id, !0),
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
    paintEngine: $f(),
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
  const en = /* @__PURE__ */ new Map(), Ai = /* @__PURE__ */ new Map(), Co = /* @__PURE__ */ new Map(), Xi = /* @__PURE__ */ new Map(), j = document.createElement("canvas");
  j.__panoFrameIdx = 0;
  const he = document.createElement("canvas");
  he.__panoFrameIdx = 0;
  const Q = {
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
  }, Te = NN({
    onReady: () => ae(),
    onFailed: () => ae(),
    onUpdate: () => {
      Q.backgroundDirty = !0, ae({ localOnly: !0 });
    }
  });
  let Je = { key: "", projection: null }, De = { key: null, sceneState: null }, rt = null, Ft = null, on = null, Ln = null, Ut = null;
  const Io = Number.parseFloat(
    getComputedStyle(R).getPropertyValue("--pano-float-radius")
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
  let fn = 0;
  const xr = () => {
    var I, M;
    const i = (I = ee == null ? void 0 : ee.getBoundingClientRect) == null ? void 0 : I.call(ee), s = (M = Et == null ? void 0 : Et.getBoundingClientRect) == null ? void 0 : M.call(Et), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, g = f > 0 ? f + 14 + 12 : 72, w = Math.max(280, Math.floor(l - g * 2)), S = h.fullscreen ? Math.min(1200, w) : w;
    P.videoTransport.shellMaxWidthPx = S;
  }, Oo = () => {
    fn || (fn = window.requestAnimationFrame(() => {
      fn = 0, xr();
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
    return !!P.videoTransport.hasAudio;
  }, vn = typeof ResizeObserver < "u" ? new ResizeObserver(() => Oo()) : null;
  vn == null || vn.observe(ee), Et && (vn == null || vn.observe(Et)), ni.push(() => {
    var i;
    fn && (window.cancelAnimationFrame(fn), fn = 0), (i = vn == null ? void 0 : vn.disconnect) == null || i.call(vn);
  }), Oo();
  const Us = () => {
    xt.thumbnailJobId += 1, xt.thumbnailSrc = "", P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = or;
  }, P1 = async (i, s, l) => {
    const f = String(i || "").trim();
    if (!f) {
      Us();
      return;
    }
    const p = wE(f);
    if (p) {
      xt.thumbnailSrc = f, P.videoTransport.thumbnails = p.thumbnails, P.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++xt.thumbnailJobId;
    xt.thumbnailSrc = f, P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = or;
    const g = document.createElement("video");
    g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous";
    const w = await new Promise((ce) => {
      let ye = !1;
      const le = (Ne) => {
        ye || (ye = !0, ce(Ne));
      };
      g.addEventListener("loadedmetadata", () => le(!0), { once: !0 }), g.addEventListener("canplay", () => le(!0), { once: !0 }), g.addEventListener("error", () => le(!1), { once: !0 }), g.src = f, g.load();
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
    const J = [], oe = (ce) => new Promise((ye) => {
      let le = !1;
      const Ne = () => {
        le || (le = !0, ye());
      };
      g.addEventListener("seeked", Ne, { once: !0 }), g.addEventListener("error", Ne, { once: !0 });
      try {
        g.currentTime = ce;
      } catch {
        Ne();
      }
    });
    for (let ce = 0; ce < or; ce += 1) {
      if (xt.thumbnailJobId !== m) return;
      const ye = ce / (or - 1), le = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), M * ye)) : 0;
      if (await oe(le), xt.thumbnailJobId !== m) return;
      H.clearRect(0, 0, X, F), H.drawImage(g, 0, 0, X, F), J.push({
        id: `thumb-${ce}`,
        src: C.toDataURL("image/jpeg", 0.72),
        time: le,
        label: ou(le)
      });
    }
    xt.thumbnailJobId === m && (P.videoTransport.thumbnails = J, P.videoTransport.thumbnailCount = J.length || or, xE(f, {
      thumbnails: J,
      thumbnailCount: J.length || or,
      duration: M,
      fps: l
    }));
  };
  ni.push(() => {
    Us();
  });
  const an = Wb({
    video: Pe instanceof HTMLVideoElement ? Pe : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: Qs,
    span: () => {
      if (k) return ll();
      const i = Math.round(Number(P.videoTransport.duration || 0) * Qs());
      return Pe.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => k,
    onFrame: (i) => {
      k ? O_(i) : Ii(), ae({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      Z1() && (Q.backgroundDirty = !0);
    },
    onChange: () => {
      Ii(), si(), ae({ cause: "frame_view", localOnly: !0 });
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
  const A1 = k ? Tb({
    createImage: (i, s) => {
      const l = new Image();
      return l.onload = s, l.onerror = s, l.src = i, l;
    },
    onLoad: () => ae({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Pe instanceof HTMLVideoElement) {
    const i = () => {
      Oi(), ae({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      Ii({
        hasAudio: P.videoTransport.hasAudio,
        muted: Pe.muted,
        volume: Number(Pe.volume ?? P.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const f = Pe.dataset.panoSrc;
      f && (xt.failedSrcs.add(f), Oi(), ae());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      Pe.addEventListener(f, p), ni.push(() => Pe.removeEventListener(f, p));
  }
  function C1() {
    P.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : l ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Uc(i) {
    return yp(i == null ? void 0 : i.dataTransfer);
  }
  function qi(i) {
    const s = !!i;
    Vt.active !== s && (Vt.active = s, ee.classList.toggle("drop-active", s));
  }
  function Ji(i, s = null) {
    const l = bn();
    h.viewTransition = FA(l, i, performance.now(), { scale: Fi(), end: s }), !h.viewTransition && s && xp(s), ln.state.inertia.active = !1, ln.state.inertia.vx = 0, ln.state.inertia.vy = 0, Tr(), ae({ localOnly: !0 });
  }
  function xp(i) {
    $a(Jf({ ...fu(), moved: i.moved }, i.mode, $o())), Q.backgroundDirty = !0;
  }
  function Ca() {
    h.viewTransition && (h.viewTransition = null, Tr());
  }
  function Sp(i, s) {
    Ji({ ...bn(), yaw_deg: i, pitch_deg: s });
  }
  sv();
  function Fr() {
    return t === "stickers" ? Ia() : _.shots;
  }
  function Ia() {
    return A ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function ar(i) {
    return A && St(i);
  }
  function Yc(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function sn(i) {
    return ar(i) ? np(i, h.frame) : i;
  }
  function Sr(i, s) {
    ar(i) ? ab(i, h.frame, s) : Object.assign(i, s);
  }
  function Sn() {
    const i = _.painting || (_.painting = pa(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function I1(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = _.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], f = /* @__PURE__ */ new Set();
    for (const g of s) {
      const w = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }
    return l;
  }
  function O1() {
    return I1("paint");
  }
  function Oa(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Ea(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function gn(i) {
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
  function Xc() {
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
  function kp(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const f = Sn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? Xc() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function E1(i) {
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
  function F1() {
    const i = new Set(O1()), l = Sn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || l.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: Xc(),
        locked: !1,
        frame: null
      });
    }), l.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), _.painting.groups = l, l;
  }
  function T1(i, s, l) {
    var J;
    const f = (oe) => (Number(oe || 0) % 1 + 1) % 1, p = [];
    for (const oe of l) {
      const ce = oe == null ? void 0 : oe.geometry, ye = (ce == null ? void 0 : ce.geometryKind) === "lasso_fill" ? ce == null ? void 0 : ce.points : (ce == null ? void 0 : ce.processedPoints) || (ce == null ? void 0 : ce.rawPoints) || (ce == null ? void 0 : ce.points) || [];
      Array.isArray(ye) && p.push(...ye);
    }
    if (!p.length) return null;
    const m = f(((J = p[0]) == null ? void 0 : J.u) || 0);
    let g = 0, w = 0;
    p.forEach((oe) => {
      const ce = f((oe == null ? void 0 : oe.u) || 0);
      g += m + sr(ce, m), w += Number((oe == null ? void 0 : oe.v) || 0);
    });
    const S = (g / p.length % 1 + 1) % 1;
    let I = 1 / 0, M = -1 / 0, C = 1 / 0, F = -1 / 0;
    p.forEach((oe) => {
      const ce = f((oe == null ? void 0 : oe.u) || 0), ye = sr(ce, S);
      I = Math.min(I, ye), M = Math.max(M, ye);
      const le = Number((oe == null ? void 0 : oe.v) || 0);
      C = Math.min(C, le), F = Math.max(F, le);
    });
    const X = l.reduce((oe, ce) => {
      const ye = Ri(String((ce == null ? void 0 : ce.toolKind) || "pen")), le = Wn[ye] || Wn[ui], Ne = Math.max(1, Number((ce == null ? void 0 : ce.size) || 10)) * Math.max(0.1, Number((le == null ? void 0 : le.sizeScale) ?? 1));
      return Math.max(oe, Ne);
    }, 0), H = Math.max(35e-4, X / 2048);
    return {
      centerUv: { u: ((S + (I + M) * 0.5) % 1 + 1) % 1, v: Z((C + F) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - I) * 0.5 + H,
      halfH: (F - C) * 0.5 + H,
      uvPad: H
    };
  }
  function Ci(i, s, l) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = Sn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === f);
    if (!p) return null;
    const m = l || kr(f, s);
    return p.frame = T1(f, s, m), p.frame;
  }
  function To() {
    var f;
    const i = Ia().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = F1().map((p) => ({
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
  function qc(i = !0) {
    var l, f, p, m, g, w;
    const s = To().filter((S) => S.type === "strokeGroup").map((S) => String(S.actionGroupId || "")).filter((S) => !!S);
    if (i) {
      const S = String(((f = (l = h.interaction) == null ? void 0 : l.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), I = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((w = (g = h.interaction) == null ? void 0 : g.stroke) == null ? void 0 : w.toolKind) || "").trim();
      S && I === "paint" && M !== "eraser" && !s.includes(S) && s.push(S);
    }
    return s;
  }
  function Jc(i = !0) {
    var w, S, I, M, C, F;
    const s = To();
    if (!i) return s;
    const l = String(((S = (w = h.interaction) == null ? void 0 : w.stroke) == null ? void 0 : S.actionGroupId) || "").trim(), f = String(((M = (I = h.interaction) == null ? void 0 : I.stroke) == null ? void 0 : M.layerKind) || "").trim(), p = String(((F = (C = h.interaction) == null ? void 0 : C.stroke) == null ? void 0 : F.toolKind) || "").trim();
    if (!l || f !== "paint" || p === "eraser" || s.some((X) => X.type === "strokeGroup" && String(X.actionGroupId || "") === l))
      return s;
    const m = It();
    let g = s.reduce((X, H) => Math.max(X, Number((H == null ? void 0 : H.z_index) || 0)), -1) + 1;
    return m && dn(m) && String(m.actionGroupId || "") === l && (g = Number(m.z_index || 0)), [
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
  function D1() {
    return Sn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Lo(Oa("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function L1() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Do(Ea((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Mp(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || f;
    }
    return !1;
  }
  function R1() {
    var s, l, f, p;
    let i = null;
    try {
      const m = qc(), g = ((p = (f = (l = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      g && (i = {
        source: g,
        revision: `${Ka()}:${Zc()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function Zc() {
    var p, m, g, w, S, I, M;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Mp(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const C = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, F = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), X = ((g = C == null ? void 0 : C.rawPoints) == null ? void 0 : g.length) ?? ((w = C == null ? void 0 : C.points) == null ? void 0 : w.length) ?? 0, H = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${F || "paint"}_${s}_live${H}_${X}_${h.livePaintInteractionRevision}`;
    }
    const l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.actionGroupId) || ""), f = String(((I = i == null ? void 0 : i.item) == null ? void 0 : I.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${l || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function Ys() {
    return E || !Array.isArray(_.stickers) ? [] : Ia();
  }
  function Qc() {
    return [...Array.isArray(_.shots) ? _.shots : [], ...Ys()];
  }
  function yn(i) {
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
    const s = gn(i);
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
    const s = gn(i.rasterObjectId || i.id || "");
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
  function dn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Lo(Oa(l, s));
  }
  function kr(i, s = null) {
    const l = Fa(i, s), f = String(l.actionGroupId || "").trim();
    return f ? Bo(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function V1(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${h.mode}:${Ga()}`;
    if (h.mode === "frame") {
      const m = ze(), g = String((m == null ? void 0 : m.id) || ""), w = m ? pn(m) : null;
      return `${p}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function Xs(i, s, l) {
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
  function eu(i, s = null, l = null) {
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
  function qs(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = sr(Number(i.u || 0), p), w = Number(i.v || 0) - m, S = Number(f || 0) * zr, I = Math.cos(S), M = Math.sin(S), C = Math.max(0.02, Number(l || 1)), F = (g * I - w * M) * C, X = (g * M + w * I) * C;
    return {
      ...i,
      u: ((p + F) % 1 + 1) % 1,
      v: Z(m + X, 0, 1)
    };
  }
  function Np(i, s, l, f = null, p = null, m = null) {
    const g = Fa(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const S = Bo(g.layerKind), I = Array.isArray(f) ? new Map(f.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let M = !1;
    if (S.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== w) return;
      const F = (I == null ? void 0 : I.get(String((C == null ? void 0 : C.id) || ""))) || C, X = C == null ? void 0 : C.geometry, H = F == null ? void 0 : F.geometry;
      !X || !H || (Array.isArray(H.points) && (X.points = H.points.map((J) => Xs(J, s, l)), M = !0), Array.isArray(H.rawPoints) && (X.rawPoints = H.rawPoints.map((J) => Xs(J, s, l)), M = !0), Array.isArray(H.processedPoints) && (X.processedPoints = H.processedPoints.map((J) => Xs(J, s, l)), M = !0));
    }), M && m) {
      const C = Sn().find((F) => String((F == null ? void 0 : F.actionGroupId) || "") === w);
      C && (C.frame = null);
    }
    return M;
  }
  function Pp(i, s = 1, l = 0, f = null, p = null, m = null) {
    const g = Fa(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const S = Bo(g.layerKind), I = Array.isArray(f) ? f : kr(w, g.layerKind), M = Array.isArray(I) ? new Map(I.map((X) => [String((X == null ? void 0 : X.id) || ""), X])) : null, C = (m == null ? void 0 : m.centerUv) ?? eu(w, g.layerKind, I);
    let F = !1;
    if (S.forEach((X) => {
      if (String((X == null ? void 0 : X.actionGroupId) || "").trim() !== w) return;
      const H = (M == null ? void 0 : M.get(String((X == null ? void 0 : X.id) || ""))) || X, J = X == null ? void 0 : X.geometry, oe = H == null ? void 0 : H.geometry;
      !J || !oe || (Array.isArray(oe.points) && (J.points = oe.points.map((ce) => qs(ce, C, s, l)), F = !0), Array.isArray(oe.rawPoints) && (J.rawPoints = oe.rawPoints.map((ce) => qs(ce, C, s, l)), F = !0), Array.isArray(oe.processedPoints) && (J.processedPoints = oe.processedPoints.map((ce) => qs(ce, C, s, l)), F = !0));
    }), F && m) {
      const X = Sn().find((H) => String((H == null ? void 0 : H.actionGroupId) || "") === w);
      X && (X.frame = null);
    }
    return F;
  }
  function Ap(i, s, l, f = null) {
    const p = gn(i);
    if (!p) return !1;
    const m = Gn().find((M) => String((M == null ? void 0 : M.id) || "").trim() === p);
    if (!m) return !1;
    const g = f && typeof f == "object" ? f : m, w = (g == null ? void 0 : g.transform) || {}, S = Number(w.du || 0) + Number(s || 0), I = Z(Number(w.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = S, m.transform.dv = I, !0;
  }
  function $1(i, s = 1, l = null) {
    const f = gn(i);
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
    return l || (G ? Qc().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : Fr().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function lr() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(h.selectedId || "") ? It() : Lo(p) || Do(p) || (G ? Qc().find((g) => String((g == null ? void 0 : g.id) || "") === p) : Fr().find((g) => String((g == null ? void 0 : g.id) || "") === p));
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
  function Cp(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function Js() {
    const i = It();
    return i ? dn(i) || kn(i) ? "stroke" : yn(i) ? "frame" : "image" : null;
  }
  function _n(i) {
    if (!i || typeof i != "object") return !1;
    if (dn(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = Sn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (kn(i)) {
      const s = gn(i.rasterObjectId || i.id || ""), l = Gn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function tu(i = null) {
    const s = Array.isArray(i) ? i : lr();
    return s.length > 0 && s.every((l) => _n(l));
  }
  function z1(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (dn(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = Sn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (kn(i)) {
      const f = gn(i.rasterObjectId || i.id || ""), p = Gn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function j1() {
    if (r) return;
    const i = lr();
    if (!i.length) return;
    const s = !tu(i);
    let l = !1;
    i.forEach((f) => {
      z1(f, s) && (l = !0);
    }), l && (Qe(), it(), Ge(), Ve(), ae());
  }
  function Rn(i) {
    Vo(), We.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && St(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && yn(i) ? _.active.selected_shot_id = i.id || null : i ? yn(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function H1(i, s = null) {
    const l = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const w = String((g == null ? void 0 : g.id) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }), h.selectedIds = l, Vo(), We.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = It();
    _.active.selected_sticker_id = m && St(m) && m.id || null, m && yn(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function Ip() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, f) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${f + 1}`)
    })), s = Ys().map((l, f) => {
      var m, g;
      const p = Xt(l) ? String(l.id || yf) : String(((g = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : g.name) || l.asset_id || l.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function Op(i) {
    return i === "frame" ? ke.camera : i === "stroke" ? ke.paintbrush_vertical_tool : ke.image;
  }
  function nu(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Op(i.kind)
    };
  }
  function Zs() {
    return Xc();
  }
  function Xt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : k ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === yf || String(i.source_kind || "") === eE;
  }
  function Ro(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function G1(i) {
    return Xt(i) && Ro(i) ? gb : 1;
  }
  function K1() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function W1() {
    return String(K1() || "") === "lasso_fill";
  }
  function B1() {
    if (r) return;
    const i = It();
    !i || !Xt(i) || (i.visible = Ro(i), $t(), Qe(), it(), Ve(), Ge(), ae());
  }
  function U1() {
    if (r || t !== "stickers") return;
    const i = It();
    if (!i || !Xt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = au(Al, () => {
      ae();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Ei(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), Qe(), it(), Ve(), Ge(), ae();
  }
  function Y1(i) {
    if (!i || !Xt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = au(Al, () => {
      ae();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (l.vFOV_deg = Ei(
      l.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), l;
  }
  function X1() {
    const i = It();
    if (!i || !Xt(i)) return !1;
    const s = Y1(i);
    if (!s) return !1;
    const l = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function ri(i) {
    return Cn.uiList(e, i);
  }
  function ru(i) {
    return Cn.uiValue(e, i);
  }
  function Ep() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return uc(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function q1() {
    const { metaKey: i } = Ep(), s = ru(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function iu(i) {
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
  function ou(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), f = s % 60;
    return `${l}:${String(f).padStart(2, "0")}`;
  }
  function Qs() {
    return k ? _.timeline.fps : xt.metaFps || 1e3;
  }
  function Ii(i = {}) {
    const s = Number(i.duration ?? P.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? P.videoTransport.fps ?? 24)), f = an.frame / Qs(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!P.videoTransport.ready, m = an.playing, g = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!P.videoTransport.visible, w = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Pe instanceof HTMLVideoElement ? Pe.muted : P.videoTransport.muted), S = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Pe instanceof HTMLVideoElement ? Pe.volume : P.videoTransport.volume
    ), I = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Eo(Pe), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!P.videoTransport.loop;
    Object.assign(P.videoTransport, {
      ready: p,
      playing: m,
      visible: g,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: ou(f),
      durationLabel: ou(s),
      frameCount: Math.max(0, Number(i.frameCount ?? P.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: I,
      muted: w,
      volume: Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : P.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? P.videoTransport.thumbnailCount ?? or))
    });
  }
  function Fp() {
    return !!(Pe instanceof HTMLVideoElement && !k && Pe.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function Tp() {
    if (!(Pe instanceof HTMLVideoElement) || !P.videoTransport.hasAudio) return;
    const i = !Pe.muted;
    Pe.muted = i, !i && Number(Pe.volume || 0) <= 0 && (Pe.volume = Math.max(0.01, Number(P.videoTransport.volume || 1))), Ii({
      hasAudio: P.videoTransport.hasAudio,
      muted: Pe.muted,
      volume: Number(Pe.volume ?? P.videoTransport.volume ?? 1)
    });
  }
  function J1() {
    Ii({
      visible: Fp()
    });
  }
  function Z1() {
    if (!(Pe instanceof HTMLVideoElement) || Number(Pe.videoWidth || 0) < 1 || Number(Pe.videoHeight || 0) < 1) return !1;
    const i = Number(Pe.videoWidth || 0), s = Number(Pe.videoHeight || 0);
    (j.width !== i || j.height !== s) && (j.width = i, j.height = s);
    const l = j.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(Pe, 0, 0, i, s), j.__panoFrameIdx = Number(j.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function Dp() {
    return !an.showsVideo && Number(j.width || 0) > 0 && Number(j.height || 0) > 0 && Number(j.__panoFrameIdx || 0) > 0 ? j : Pe instanceof HTMLVideoElement && Number(Pe.videoWidth || 0) > 0 && Number(Pe.videoHeight || 0) > 0 && Number(Pe.readyState || 0) >= 2 ? Pe : null;
  }
  function Lp() {
    j.__panoFrameIdx = 0, Q.backgroundDirty = !0;
  }
  function Oi() {
    if (!(Pe instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = Ep(), s = xn(e, "background") && ri(i)[0] || null, l = us(s), f = [l, Cn.linkedVideoFile(e, Zp())].filter(Boolean), p = f.find((C) => !xt.failedSrcs.has(C)) || "";
    xt.videoFailed = !p && f.length > 0;
    const m = p && p === l ? q1() : null;
    xt.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const g = Math.max(1, Number((m == null ? void 0 : m.fps) || (k ? _.timeline.fps : 24))), w = Pe.dataset.panoSrc === p && Number.isFinite(Pe.duration) ? Pe.duration : 0, S = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / g : w)), I = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(S * g))), M = !!(m != null && m.has_audio) || Eo(Pe);
    return p && Pe.dataset.panoSrc !== p ? (Pe.pause(), Lp(), Pe.dataset.panoSrc = p, Pe.loop = !k && !!P.videoTransport.loop, Pe.muted = !!P.videoTransport.muted, Pe.volume = Math.max(0, Math.min(1, Number(P.videoTransport.volume ?? 1))), Pe.src = p, Pe.load(), an.setSource(!0), k || an.seek(0)) : !p && Pe.getAttribute("src") && (Pe.pause(), Pe.removeAttribute("src"), delete Pe.dataset.panoSrc, Pe.load(), Lp(), Us(), an.setSource(!1)), k || (Pe.loop = !!P.videoTransport.loop), p && !k && xt.thumbnailSrc !== p && !xt.thumbnailFailedSrcs.has(p) && P1(p, S, g), p || Us(), Ii({
      ready: !!p,
      visible: !!p && Fp(),
      duration: S,
      frameCount: I,
      fps: g,
      hasAudio: M,
      loop: !!Pe.loop,
      muted: !!Pe.muted,
      volume: Number(Pe.volume ?? P.videoTransport.volume ?? 1),
      thumbnailCount: P.videoTransport.thumbnailCount
    }), p || null;
  }
  function Rp(i, s = null) {
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
  function au(i, s = null) {
    return wf(e, i, en, s || (() => ae()));
  }
  function su(i = null) {
    return xn(e, "external-sticker") ? au(Al, i) : null;
  }
  function Vp() {
    if (!xn(e, "external-sticker")) return null;
    const i = ri(rE)[0];
    if (!i || typeof i != "object") return null;
    const s = ri(nE).map(us).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const l = us(ri(tE)[0] || null);
    return l ? { src: l, meta: i } : null;
  }
  function Q1() {
    const i = _.stickers.find(Xt), s = i ? Vp() : null, l = s ? Ob(i.clip, h.frame, _.timeline.fps, s.meta) : null;
    Fo.follow({ src: (s == null ? void 0 : s.src) || "", time: l, playing: an.advancing, fps: _.timeline.fps });
    const f = i ? mu(i) : null, p = s != null && s.frames ? A1.picture(s.frames, l, s.meta, f) : Fo.picture(he, f);
    return p ? { media: p, revision: iu(p), source: Fb(s, f) } : null;
  }
  function Ei(i, s, l) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = Z(Number(i || 30), 0.1, 179) * zr, g = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return Z(g * mo, 0.1, 179);
  }
  function ev(i) {
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
  function $p(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = xo(i);
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
  function tv(i) {
    var w;
    if (!i || typeof i != "object") return $p(null);
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
  function nv(i) {
    return Cn.linkedValue(e, i);
  }
  function rv(i, s, l) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : ev(s);
    if (f) {
      const g = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || f.source_aspect || 1), w = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: Ei(f.hFOV_deg, g, w),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const p = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Ei(30, p, m),
      rot_deg: 0
    };
  }
  function iv() {
    const i = su(() => {
      _i(e, "image-loaded");
    }), s = xn(e, "external-sticker") ? Rp(ru("pano_sticker_input_pose"), null) : null;
    return Gb(_, Hb(e, { pose: s, image: i }));
  }
  function ov() {
    var w;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((S) => String((S == null ? void 0 : S.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((w = e.getInputLink(i)) == null ? void 0 : w.id) ?? null : null, l = su(() => {
      _i(e, "image-loaded");
    }), f = Rp(ru("pano_sticker_input_pose"), null), p = nv("sticker_state"), m = Cn.externalStateHash(e, p), g = s == null ? null : rv(f, p, l);
    return jb(_, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: g,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function zp(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? iv() : ov();
    if (s.changed) {
      const l = _.stickers.find(Xt);
      _.stickers = s.state.stickers, _.active = s.state.active, l && h.selectedId === l.id && !_.stickers.some((f) => f.id === l.id) && (h.selectedId = null, h.selectedIds = []), it(), Ve(), Ge();
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
      aspect_id: mi(l)
    }), h.selectedId = null, h.selectedIds = [], Vo(), h.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function La() {
    return !A || !h.worldSelectedId ? null : _.stickers.find((i) => i.id === h.worldSelectedId && i.placement === "world") || null;
  }
  function lu(i) {
    Rn(null), h.worldSelectedId = i, Q.backgroundDirty = !0;
  }
  function Vo() {
    h.worldSelectedId && (h.worldSelectedId = null, h.gizmoAxis = null, Q.backgroundDirty = !0);
  }
  function el(i) {
    return !!i && !r && !i.locked;
  }
  function av() {
    if (t !== "cutout") return;
    const i = ze();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function cu() {
    if (L && Zo(P.toolButtons, "value", "add-camera", { disabled: Dr() }), t !== "cutout") return;
    const i = ze();
    Zo(P.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? ke.camera : ke.plus_circle
    });
  }
  function Tr() {
    const i = $A({
      spaceView: Zi(),
      spaceMode: Xl(h.spaceMode, h.viewTransition),
      readOnly: r,
      frameMode: G && h.mode === "frame",
      showGrid: h.showGrid
    });
    P.space && Object.assign(P.space, i.space);
    for (const [s, l] of Object.entries(i.buttons)) Zo(P.floatingButtons, "action", s, l);
  }
  function ii() {
    var l;
    const i = zA({ hasShot: !!ze(), erp: Ra(), studio: L });
    h.mode === "frame" && i.disabled && (L ? Lh(ze()) : h.mode = "pano"), h.outputPreviewRect = null, P.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && !G), f.key === "frame" ? Object.assign(f, i) : f.disabled = !1;
    });
    const s = G && h.mode === "frame" ? ze() : null;
    P.frameRail.visible = !!s, P.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.visible = !!s && !r && s.locked !== !0, P.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, P.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), P.frameRollKnob.displayValue = Qo(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((l = h.interaction) == null ? void 0 : l.kind) === "roll_frame", P.frameRollKnob.armed = !!s && h.altModifier === !0, P.frameRail.rollKnob = P.frameRollKnob, P.frameRail.aspectLabel = s ? mi(s) : "", P.frameRail.aspectChoices = b1(s ? String(mi(s)) : null, { erp: L, coverage: _.coverage }), s || (P.frameRail.aspectOpen = !1), P.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!ze(), G && P.cameraPreview && (P.cameraPreview.visible = h.mode !== "frame" && jp(), P.cameraPreview.expanded = !!h.outputPreviewExpanded, P.cameraPreview.settled = P.cameraPreview.settled === !0 && Q.pendingStableLayoutFrames <= 0 && Q.hasPresentedFrame), Tr(), Kh() ? mt(h.pointerPos) : Tt(h.mode === "pano" ? "grab" : "default");
  }
  function jp() {
    return !L || Dr() && !Ra();
  }
  function Ra() {
    return L && Dr() && _.camera.projection === "erp";
  }
  function sv() {
    const s = Qp({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Hp() {
    return yb({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, O.width, O.height);
  }
  function Gp() {
    return !k || !xn(e, "scene") ? null : kg(ri("pano_scene_files"), ri("pano_scene_meta"), us);
  }
  function lv() {
    return !k || !xn(e, "external-sticker") ? null : kg(ri("pano_sticker_files"), ri("pano_sticker_meta"), us);
  }
  function Zi() {
    return h.mode === "pano" && Va();
  }
  function Va() {
    return k && tN({ sceneLinked: A && !!id(e).scene, files: Gp(), stickers: _.stickers });
  }
  function cr() {
    return h.spaceMode === "6dof" && Zi();
  }
  function uu() {
    var i, s, l;
    return q2((l = (s = (i = Ir.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : l.call(s, o1));
  }
  function fu() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function $a(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function cv(i) {
    var l;
    const s = DA(h.spaceMode, h.viewTransition, i);
    if (s !== "keep") {
      if (s === "return") {
        Ji({ ...bn(), position: $o(), distance: ((l = Lr()) == null ? void 0 : l.radius) || Kr }, { mode: i, moved: !1 });
        return;
      }
      Ca(), $a(Jf({ ...fu(), position: bn().position }, i, $o())), Q.backgroundDirty = !0, Tr(), ae({ localOnly: !0 });
    }
  }
  function bn() {
    var l;
    const i = h.viewMoved ? h.viewDistance : ((l = Lr()) == null ? void 0 : l.radius) || Kr, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return ZM(h.spaceMode, s, $o());
  }
  function $o() {
    return Dr() ? Qi().position : [0, 0, 0];
  }
  function Dr() {
    return K && _.camera !== null;
  }
  function Qi() {
    return Xd(_.camera, h.frame);
  }
  function Lr() {
    var s;
    const i = Zn();
    return ((s = i.space ?? i.content) == null ? void 0 : s.sphere) ?? null;
  }
  function Kp(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, Q.backgroundDirty = !0, ae({ localOnly: !0 });
  }
  function Fi() {
    var i;
    return ((i = Lr()) == null ? void 0 : i.radius) || Kr;
  }
  function uv() {
    var w;
    const i = Zn().space, s = De.sceneState, l = h.worldSelectedId || h.selectedId, f = s.stickers.findIndex((S) => S.id === l), p = f < 0 ? null : {
      sticker: s.stickers[f],
      value: hc(s, h.frame).stickers[f],
      plane: i.stickers.find((S) => S.id === l) ?? null,
      item: ((w = i.sticker) == null ? void 0 : w.id) === l && i.sticker.url ? { kind: i.sticker.kind, box: Te.sceneBox(i.sticker.url) } : null
    }, m = ur() ? ih() : sN(Lr(), p);
    if (!m) return;
    const g = bn();
    h.viewDistance = g.distance, h.viewMoved = !0, Ji(Sg(g, m, O.width, O.height));
  }
  function du(i) {
    return Te.pick(es(), i.x, i.y, O.width, O.height);
  }
  function Wp(i, s) {
    var l;
    return af(i, s, h.viewMoved ? null : (l = Lr()) == null ? void 0 : l.center, Fi());
  }
  function Bp() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function fv(i, s) {
    const l = performance.now(), f = { x: i.x, y: i.y, time: l, key: Te.contentKey(), view: Bp() };
    if (!vg(Ln, f)) {
      const m = du(i);
      Ln = { ...f, cost: performance.now() - l, hit: m };
    }
    const p = bn();
    Kp(xg(p, Wp(p, Ln.hit), s, Fi())), Ln.view = Bp(), Ln.wheelTime = l;
  }
  function Up(i, s, l) {
    const f = Wp(bn(), du(s));
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: f } : { kind: "space_pan", last: s, depth: ha(bn(), f) }, mt(s), O.setPointerCapture(l);
  }
  function pu() {
    const i = `${h.viewYaw}|${h.viewPitch}|${h.viewFov}|${O.width}|${O.height}`;
    return Je.key !== i && (Je = { key: i, projection: bb(Hp(), O.width, O.height) }), Je.projection;
  }
  function za(i) {
    const s = pu().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function hu(i, s) {
    return pu().ray(i, s);
  }
  function Ti() {
    const i = O.width, s = O.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const w = s, S = w * l;
      return { x: (i - S) * 0.5, y: 0, w: S, h: w };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function mu(i) {
    var g;
    if (i && typeof i == "object" && (Xt(i) || i.external === !0))
      return su(() => {
        _i(e, "image-loaded");
      });
    const s = k ? ja(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = en.get(s);
    if (l) return l;
    const f = k ? sb(i.source) : (g = _.assets) == null ? void 0 : g[s], p = gE(f);
    if (!p) return null;
    const m = new Image();
    return w1(m, p), m.onload = () => {
      x1(m, p), ae();
    }, m.onerror = () => {
      S1(m, p), ae();
    }, m.src = p, en.set(s, m), m;
  }
  function ja(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function Yp(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const f = Ai.get(l);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, Ai.set(l, p), p;
  }
  function dv(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Co.get(s);
    if (l) return l.ready ? l : null;
    const f = Yp(i, () => {
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
  function pv(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = sr(Number(i.u || 0), p), w = Number(i.v || 0) - m, S = Math.max(0.02, Number(l || 1)), I = Number(f || 0) * zr, M = Math.cos(I), C = Math.sin(I), F = g / S, X = w / S, H = F * M + X * C, J = -F * C + X * M;
    return {
      ...i,
      u: ((p + H) % 1 + 1) % 1,
      v: m + J
    };
  }
  function hv(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, g = pv(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), w = Number(l.u1 || 0) - Number(l.u0 || 0), S = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(w > 1e-6) || !(S > 1e-6)) return null;
    const I = sr(Number(g.u || 0), Number(l.u0 || 0)) / w, M = (Number(g.v || 0) - Number(l.v0 || 0)) / S;
    if (I < 0 || I > 1 || M < 0 || M > 1) return 0;
    const C = dv(i);
    if (!C) return null;
    const F = Z(Math.floor(I * C.width), 0, C.width - 1), X = Z(Math.floor(M * C.height), 0, C.height - 1);
    return Number(C.alpha[(X * C.width + F) * 4 + 3] || 0);
  }
  function Xp(i, s, l, f = null) {
    if (!(s != null && s.visible) || !di(l, s.corners)) return !1;
    const p = f || Nr(l, performance.now()), m = hv(i, p);
    return m === null ? !0 : m > 8;
  }
  function mv() {
    var f, p, m, g, w, S, I, M;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, qc(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((w = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : w.width) || 2048)), l = Math.max(1, Number(((S = i == null ? void 0 : i.descriptor) == null ? void 0 : S.height) || ((M = (I = i == null ? void 0 : i.displayPaint) == null ? void 0 : I.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: l };
  }
  function gv() {
    var X, H, J;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = Qn(), f = `${Zc()}:${l.width}:${l.height}`;
    if (((X = h._activePaintEraserPreviewInfo) == null ? void 0 : X.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = Pn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const oe = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = ku(oe, p.targetSpace, !0);
    }
    const g = Ha(l.width, l.height, { readback: !0 });
    if (!mh(g, p, { w: l.width, h: l.height })) return null;
    const w = ((J = (H = g.ctx) == null ? void 0 : H.getImageData(0, 0, l.width, l.height)) == null ? void 0 : J.data) || null;
    if (!w) return null;
    let S = l.width, I = l.height, M = -1, C = -1;
    for (let oe = 0; oe < l.height; oe += 1)
      for (let ce = 0; ce < l.width; ce += 1)
        w[(oe * l.width + ce) * 4 + 3] <= 8 || (ce < S && (S = ce), oe < I && (I = oe), ce > M && (M = ce), oe > C && (C = oe));
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
  function yv(i, s, l) {
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
      const m = kr(i.actionGroupId, "paint"), g = Ci(i.actionGroupId, "paint", m);
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
  function bv(i, s, l) {
    if (!i || !s) return !1;
    const f = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: l - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], p = f(i), m = f(s);
    return p.some((g) => m.some((w) => !(g.maxX < w.minX || w.maxX < g.minX || g.maxY < w.minY || w.maxY < g.minY)));
  }
  function vv(i, s, l) {
    var Ne, Ye, qe, lt, be, se, me;
    if (!i || !s || !((Ne = l == null ? void 0 : l.surface) != null && Ne.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = yv(s, f, p);
    if (m && !bv(m, l.bounds, f)) return i;
    const g = String(((Ye = s.item) == null ? void 0 : Ye.id) || s.id || ""), w = ((qe = s.item) == null ? void 0 : qe.transform) || {}, S = `${l.key}:${g}:${f}:${p}:${Number(w.du || 0).toFixed(6)}:${Number(w.dv || 0).toFixed(6)}:${Number(w.rot_deg || 0).toFixed(3)}:${Number(w.scale || 1).toFixed(4)}`, I = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (I.has(S)) return I.get(S);
    const M = Z(Math.floor(Number(((lt = l.bounds) == null ? void 0 : lt.minX) || 0)), 0, Math.max(0, f - 1)), C = Z(Math.floor(Number(((be = l.bounds) == null ? void 0 : be.minY) || 0)), 0, Math.max(0, p - 1)), F = Z(Math.ceil(Number(((se = l.bounds) == null ? void 0 : se.maxX) || 0)), M, Math.max(0, f - 1)), X = Z(Math.ceil(Number(((me = l.bounds) == null ? void 0 : me.maxY) || 0)), C, Math.max(0, p - 1)), H = Math.max(1, F - M + 1), J = Math.max(1, X - C + 1), oe = Ha(f, p, { readback: !0 });
    oe.ctx.clearRect(0, 0, f, p), oe.ctx.drawImage(i, 0, 0);
    const ce = oe.ctx.getImageData(M, C, H, J);
    oe.ctx.save(), oe.ctx.globalCompositeOperation = "destination-out", oe.ctx.drawImage(l.surface.canvas, 0, 0), oe.ctx.restore();
    const ye = oe.ctx.getImageData(M, C, H, J);
    let le = !1;
    for (let Le = 0; Le < H * J; Le += 1) {
      const xe = ce.data[Le * 4 + 3], Ke = ye.data[Le * 4 + 3];
      if (xe > Ke) {
        le = !0;
        break;
      }
    }
    return le ? (I.size > 64 && I.clear(), I.set(S, oe.canvas), oe.canvas) : (I.set(S, i), i);
  }
  function qp(i, s = null) {
    const l = gn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!l || !f) return null;
    const p = Yp(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: g } = mv(), w = (i == null ? void 0 : i.transform) || {}, S = [
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
      Ga()
    ].join(":"), I = Xi.get(S);
    if (I) return I;
    Xi.size > 64 && Xi.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = g;
    const C = M.getContext("2d");
    if (!C) return null;
    const F = Number(f.u0 || 0) * m, X = Number(f.v0 || 0) * g, H = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), J = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * g), oe = F + H * 0.5 + Number(w.du || 0) * m, ce = X + J * 0.5 + Number(w.dv || 0) * g, ye = Number(w.rot_deg || 0) * zr, le = Math.max(0.01, Number(w.scale || 1));
    for (const Ne of [-m, 0, m])
      C.save(), C.translate(oe + Ne, ce), C.rotate(ye), C.scale(le, le), C.drawImage(p, -H * 0.5, -J * 0.5, H, J), C.restore();
    return Xi.set(S, M), M;
  }
  async function gu(i, s) {
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
  let tl = null, nl = !1;
  function _v() {
    if (E) return !1;
    const i = w0(_.painting), { width: s, height: l } = Wa();
    return IM(_.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function Jp() {
    const i = String(e.id ?? "0"), s = Cl.get(i);
    if (nl && s) return s;
    const l = (async () => {
      var m, g, w, S, I, M, C, F, X, H, J, oe;
      const f = Ka(), p = w0(_.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, tl = f, Vn());
        return;
      }
      if (tl !== f && !nl) {
        nl = !0;
        try {
          sl();
          const ce = qc(!1), ye = ((g = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, ce)) || null, le = ((w = ye == null ? void 0 : ye.displayPaint) == null ? void 0 : w.canvas) || null, Ne = ((S = ye == null ? void 0 : ye.committedMask) == null ? void 0 : S.canvas) || null, Ye = Math.max(1, Number(((I = ye == null ? void 0 : ye.descriptor) == null ? void 0 : I.width) || (le == null ? void 0 : le.width) || (Ne == null ? void 0 : Ne.width) || 2048)), qe = Math.max(1, Number(((M = ye == null ? void 0 : ye.descriptor) == null ? void 0 : M.height) || (le == null ? void 0 : le.height) || (Ne == null ? void 0 : Ne.height) || 1024));
          (!le && p.totalPaintCount > 0 || !Ne && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((C = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== Ye || Number(((F = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : F.height) || 0) !== qe) && (h._paintLayerSyncBlankSurface = Ha(Ye, qe)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ye, qe));
          const lt = le || p.totalPaintCount > 0 && ((X = h._paintLayerSyncBlankSurface) == null ? void 0 : X.canvas) || null, be = Ne || p.totalMaskCount > 0 && ((H = h._paintLayerSyncBlankSurface) == null ? void 0 : H.canvas) || null;
          if (!lt && !be) return;
          let se = null, me = null;
          const Le = [];
          if (p.totalPaintCount > 0) {
            se = await gu(lt, `pano_paint_${i}.png`);
            for (const xe of ce) {
              const Ke = String(xe || "").trim();
              if (!Ke) continue;
              const Be = ((oe = (J = h.paintEngine) == null ? void 0 : J.getGroupDisplayCanvas) == null ? void 0 : oe.call(J, Ke)) || null;
              if (!Be) continue;
              const Ue = Ke.replace(/[^a-zA-Z0-9_-]+/g, "_"), je = await gu(Be, `pano_group_${i}_${Ue}.png`);
              je && Le.push({
                id: Ke,
                actionGroupId: Ke,
                image: je
              });
            }
          }
          p.totalMaskCount > 0 && (me = await gu(be, `pano_mask_${i}.png`)), f === Ka() && (_.painting_layer = {
            paint: se,
            mask: me,
            groups: Le,
            revision: f
          }, tl = f, Vn());
        } catch (ce) {
          throw ce;
        } finally {
          nl = !1;
        }
      }
    })();
    return Cl.set(i, l), l.finally(() => {
      Cl.get(i) === l && Cl.delete(i);
    }), l;
  }
  function yu() {
    if (t === "cutout" && !E) {
      const p = Dp();
      if (p) return p;
      const m = xf(
        e,
        ["erp_image", "bg_erp"],
        () => ae(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !_d(m) ? m : wf(e, "pano_input_images", en, () => ae()) || m || null;
    }
    const i = Dp();
    if (i) return i;
    const s = xn(e, "background") ? wf(e, "pano_input_images", en, () => ae()) : null;
    if (s && !_d(s)) return s;
    if (Pe instanceof HTMLVideoElement && Pe.dataset.panoSrc) return Pe;
    const l = Zp();
    return xf(e, l, () => ae(), `background:${l.join("|")}`) || s || null;
  }
  function wv() {
    var s;
    const i = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((l) => (l == null ? void 0 : l.name) === "source");
    return i >= 0 && e.graph ? String(((s = e.getInputLink(i)) == null ? void 0 : s.type) || "") : "";
  }
  function Zp() {
    if (t === "cutout") return E ? wv() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function bu(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function xv() {
    if (Te.failed) return { status: mr, detail: "renderer" };
    if (!Te.ready) return { status: Ar, detail: "boot" };
    let i = Ma;
    const s = [];
    if (h.showPanorama) {
      const l = yu();
      i = xt.videoFailed ? mr : vd(l, bu);
    }
    if (h.showObjects)
      for (const l of Ia()) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const f = mu(l);
        s.push(vd(f, bu));
      }
    return qO({
      presented: Q.hasPresentedFrame,
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
  function vu(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(Z(i.y, -1, 1))
    };
  }
  function _u(i, s = null) {
    const { lon: l, lat: f } = vu(i), p = Ti();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const g = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function rl(i) {
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
  function Di(i, s, l) {
    return kE(v0(v0(i.centerDir, _0(i.right, s)), _0(i.up, l)));
  }
  function Qp(i) {
    const s = rl(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => Di(s, f * s.tanX, p * s.tanY));
  }
  function eh(i, s, l) {
    const f = rl(i), p = (s * 2 - 1) * f.tanX, m = (1 - l * 2) * f.tanY;
    return Di(f, p, m);
  }
  function th(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: Z((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Sv(i) {
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
    ].map((F) => Xs(qs(F, l, f, p), m, g));
  }
  function kv(i) {
    const s = gn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${Ga()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (h.mode === "frame") {
      const m = ze(), g = m ? pn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function Mv(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = yn(i) ? "frame" : St(i) ? "sticker" : "item", f = sn(i), p = [
      l,
      s,
      h.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      mi(f),
      ar(i) && ji(i.clip, h.frame)
    ].join(":");
    if (h.mode === "frame") {
      const m = ze(), g = m ? pn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((O == null ? void 0 : O.width) || 0))}:${Math.round(Number((O == null ? void 0 : O.height) || 0))}`;
  }
  function nh() {
    var i, s;
    return ((s = (i = h.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function Nv() {
    return nh() ? `${fh()}:mask_display` : "";
  }
  function rh(i) {
    if (!h.showMask) return i;
    const s = nh();
    if (!s) return i;
    const l = Nv(), f = i.reduce((g, w) => Math.max(g, Number((w == null ? void 0 : w.zIndex) || 0)), -1), p = (Array.isArray(_.stickers) ? _.stickers : []).reduce((g, w) => Math.max(g, Number((w == null ? void 0 : w.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Pv() {
    var f, p;
    const i = Jc(!0), s = gv(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const w = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, g)) || null;
        if (!w) continue;
        l.push({
          id: `paint_group:${g}`,
          source: w,
          revision: `${fh()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, w = gn((g == null ? void 0 : g.id) || m.id || "");
        if (!w) continue;
        const S = qp(g, () => ae());
        if (!S) continue;
        const I = vv(S, m, s), M = (g == null ? void 0 : g.transform) || {};
        l.push({
          id: `raster:${w}`,
          source: I,
          revision: [
            Ka(),
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
    return rh(l);
  }
  function Av() {
    return (h.showObjects ? Pv() : rh([])).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  }
  function Zn() {
    return rt || (rt = Cv()), rt;
  }
  function Cv() {
    const i = yu(), s = Av(), l = { ..._.assets };
    for (const H of k ? [] : _.stickers) {
      const J = String((H == null ? void 0 : H.asset_id) || "");
      J && !l[J] && en.has(J) && (l[J] = { type: "comfy_image", filename: J });
    }
    const f = k ? _.stickers.map((H) => Yc(H) ? { ...H, source: { kind: "file", filename: ja(H) } } : H) : _.stickers, p = JSON.stringify([f, Object.keys(l), _.scene]);
    De.key !== p && (De = { key: p, sceneState: qr({ ..._, stickers: f, assets: l, painting: null }) });
    const m = Fo ? Q1() : null, g = (H) => {
      if (Fo && Xt(H)) return m;
      const J = mu(H);
      return J ? { media: J, revision: iu(J) } : null;
    }, w = h.showObjects ? vb(De.sceneState, h.frame, _.stickers, { media: g, paintLayers: s }) : s.map((H) => ({ kind: "erp", ...H })), S = i && (i === Pe || i === j) ? Pe.dataset.panoSrc : i, I = h.showPanorama && bu(i) ? { media: i, revision: iu(i), coverage: Xn(_.coverage), source: S } : null, M = Va(), C = QM(fu(), M, $o());
    C.mode !== h.spaceMode && Ca(), $a(C);
    const F = M ? Iv(De.sceneState, g) : null, X = Zi() ? { ...F, ...Ov(F) } : null;
    return { background: I, layers: w, space: X, content: F };
  }
  function Iv(i, s) {
    const l = hc(i, h.frame), f = Gp(), p = hb(f, l.scene), m = p != null && p.url ? Te.sceneBox(p.url) : null, g = m && ed(p.kind, m), w = lv(), S = h.showObjects ? nN(w, i, l) : null, I = S != null && S.url ? Te.sceneBox(S.url) : null, M = I ? [{ box: ed(S.kind, I), value: S.value }] : [], C = h.showObjects ? kN(i, h.frame, _.stickers, { media: s }) : [], F = nd(oN(l, g, C, M));
    return {
      evaluated: l,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: rN(w, i),
      sticker: S,
      stickers: C,
      sphere: F
    };
  }
  function Ov(i) {
    var l;
    const s = ((l = i.sphere) == null ? void 0 : l.radius) || Kr;
    return {
      gizmo: ur() ? Dv() : Ev(i.evaluated),
      grid: h.showGrid && !h.fullscreen ? bN(s) : null,
      lines: Dr() ? Tv(s) : []
    };
  }
  function Ev(i) {
    const s = La(), l = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !h.showObjects || !el(s) || !(l != null && l.active) ? null : { mode: h.gizmoMode, transform: Zf(l) };
  }
  function wu(i) {
    return i * 0.2;
  }
  function ih() {
    return { center: Qi().position, radius: wu(Fi()) };
  }
  function Fv(i, s) {
    const { yaw_deg: l, pitch_deg: f } = mb(i.position, s);
    return { ...i, yaw_deg: l, pitch_deg: f };
  }
  function ur() {
    return Dr() && h.selectedId === Xf;
  }
  function Tv(i) {
    const s = h.showObjects ? _N(wN(_, ll())) : [], l = s.length ? [{ segments: s, color: aE }] : [];
    if (!cr()) return l;
    const f = ur() ? m0 : oE;
    return [...l, { segments: Pg(Qi(), wu(i)), color: f }];
  }
  function Dv() {
    return !cr() || !ur() || r ? null : { mode: h.gizmoMode === "rotate" ? "rotate" : "translate", transform: Zf({ ...Qi(), scale: 1 }) };
  }
  function Lv(i, s) {
    var p;
    const l = (p = Zn().space) == null ? void 0 : p.gizmo;
    if (ur() && l && no("hover", s) !== null && no("down", s))
      return h.interaction = { kind: "world_gizmo", camera: !0, mode: l.mode, start: l.transform, base: Qi(), changed: !1 }, O.setPointerCapture(i.pointerId), mt(s), !0;
    const f = Pg(Qi(), wu(Fi()));
    return vN(es(), f, s, O.width, O.height) ? (ur() || (Rn(ze()), Ve(), Ge(), ae()), h.interaction = { kind: "world_select" }, O.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Rv() {
    if (!Q.backgroundDirty && Q.backgroundWasVisible) return;
    const { background: i, layers: s, space: l } = Zn(), f = te.width, p = te.height, m = Te.render({
      width: f,
      height: p,
      camera: l ? sf(bn(), f, p, l.sphere) : Hp(),
      background: i,
      layers: s,
      space: l
    }), g = te.getContext("2d");
    g.clearRect(0, 0, f, p), !i && !s.length && !l ? (g.fillStyle = "#070707", g.fillRect(0, 0, f, p)) : m && g.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, p), Q.backgroundWasVisible = !!m, Q.backgroundDirty = !1, on = null, Tr(), (h.worldSelectedId || ur() || ve) && Ge();
  }
  function oh(i) {
    const { content: s } = Zn();
    return !s || !i.position ? Ps(i) : db(Ps(i), i.position, Vh(), s.sphere);
  }
  function ah(i, s, l, f) {
    const { background: p, layers: m, content: g } = Zn();
    if (!p && !m.length && !g) return !1;
    const w = g && l.position ? g : null, S = Te.render({ width: s.w, height: s.h, camera: oh(l), background: p, layers: m, space: w, owner: f });
    return S ? (i.drawImage(S.canvas, S.x, S.y, S.width, S.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function Vv(i) {
    const s = Zn(), l = JSON.stringify([i, te.width, te.height, Og(s)]);
    if (l === on) return;
    const f = Te.renderUnwrap({ width: i.w, height: i.h, ...s }), p = te.getContext("2d");
    p.fillStyle = "#070707", p.fillRect(0, 0, te.width, te.height), f && p.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), on = f ? l : null, Q.backgroundWasVisible = !1;
  }
  function $v(i = !1) {
    const s = O.width, l = O.height, f = Ti();
    if (V.globalAlpha = 1, V.lineWidth = 1, i || V.clearRect(0, 0, s, l), sl(), Vv(f), h.showGrid && !h.fullscreen) {
      V.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const g = f.x + f.w * m / 16;
        V.beginPath(), V.moveTo(g, f.y), V.lineTo(g, f.y + f.h), V.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const g = f.y + f.h * m / 8;
        V.beginPath(), V.moveTo(f.x, g), V.lineTo(f.x + f.w, g), V.stroke();
      }
      V.strokeStyle = "rgba(250, 250, 250, 0.86)", V.lineWidth = 1.2, V.beginPath(), V.moveTo(f.x, f.y + f.h / 2), V.lineTo(f.x + f.w, f.y + f.h / 2), V.stroke(), V.fillStyle = "rgba(250, 250, 250, 0.42)", V.font = "500 11px Geist, sans-serif", V.textAlign = "center";
      const p = f.y + f.h * 0.57;
      V.fillText("Left", f.x + f.w * 0.25, p), V.fillText("Front", f.x + f.w * 0.5, p), V.fillText("Right", f.x + f.w * 0.75, p), V.fillText("Back", f.x + 38, p), V.fillText("Back", f.x + f.w - 38, p);
    }
  }
  function sh(i, s, l = 1) {
    let f = !1;
    V.strokeStyle = s, V.lineWidth = l, V.beginPath();
    for (const p of i) {
      const m = za(p);
      if (!m) {
        f = !1;
        continue;
      }
      f ? V.lineTo(m.x, m.y) : (V.moveTo(m.x, m.y), f = !0);
    }
    V.stroke();
  }
  function zv(i = !1) {
    const s = O.width, l = O.height;
    if (i || V.clearRect(0, 0, s, l), sl(), Rv(), h.showGrid && !h.fullscreen && Zn().space)
      jv();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(qn(p, g));
        sh(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(qn(g, p));
        sh(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: qn(-90, 0) },
        { name: "Front", dir: qn(0, 0) },
        { name: "Right", dir: qn(90, 0) },
        { name: "Back", dir: qn(180, 0) }
      ];
      V.fillStyle = "rgba(250, 250, 250, 0.42)", V.font = "500 11px Geist, sans-serif", V.textAlign = "center", f.forEach((p) => {
        const m = za(p.dir);
        m && V.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function jv() {
    const i = sf(bn(), O.width, O.height, Lr()), s = $s(i, [0, 0, 0], O.width, O.height);
    s && (V.fillStyle = "rgba(255, 221, 87, 0.9)", V.font = "500 11px Geist, sans-serif", V.textAlign = "center", V.fillText("ERP origin", s.x, s.y - 12));
  }
  function Hv(i, s = null, l = null, f = null) {
    if (h.mode === "frame") {
      const p = s || ze();
      if (!p) return [];
      const m = l || pn(p);
      return v_(i, p, m);
    }
    return gh(i, f);
  }
  function il(i, s = null, l = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const g = gh([i], p);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = Ho(i);
    return m ? oi(m, s, l, f) : null;
  }
  function Gv(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), f = kr(l, i.layerKind), p = Ci(l, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || eu(l, i.layerKind, f), g = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, w = [], S = h.mode === "frame" ? ze() : null, I = S ? pn(S) : null;
    for (const le of f) {
      const Ne = (le == null ? void 0 : le.geometry) || null, Ye = (Ne == null ? void 0 : Ne.geometryKind) === "lasso_fill" ? Ne == null ? void 0 : Ne.points : (Ne == null ? void 0 : Ne.processedPoints) || (Ne == null ? void 0 : Ne.rawPoints) || (Ne == null ? void 0 : Ne.points) || [], qe = Hv(Ye, S, I, g).filter((se) => Number.isFinite(se == null ? void 0 : se.x) && Number.isFinite(se == null ? void 0 : se.y));
      if (!qe.length) continue;
      const lt = Ri(String((le == null ? void 0 : le.toolKind) || "pen")), be = Wn[lt] || Wn[ui];
      w.push({
        points: qe,
        closed: String((Ne == null ? void 0 : Ne.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((le == null ? void 0 : le.size) || 10) * Math.max(0.1, Number((be == null ? void 0 : be.sizeScale) ?? 1)) + 10),
        layerKind: String((le == null ? void 0 : le.layerKind) || i.layerKind || "paint")
      });
    }
    const M = il(m, null, S, I, g);
    if (!M) {
      const le = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, le), le;
    }
    const F = E1(p).map((le) => il(le, M.x, S, I, g)).filter((le) => Number.isFinite(le == null ? void 0 : le.x) && Number.isFinite(le == null ? void 0 : le.y)).map((le) => ({ x: Number(le.x || 0), y: Number(le.y || 0) }));
    if (F.length < 4) {
      const le = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, le), le;
    }
    const X = (le, Ne) => ({
      x: (Number((le == null ? void 0 : le.x) || 0) + Number((Ne == null ? void 0 : Ne.x) || 0)) * 0.5,
      y: (Number((le == null ? void 0 : le.y) || 0) + Number((Ne == null ? void 0 : Ne.y) || 0)) * 0.5,
      a: le,
      b: Ne
    }), H = X(F[0], F[1]), J = X(F[1], F[2]), oe = X(F[2], F[3]), ce = X(F[3], F[0]), ye = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: F,
      edgeMidpoints: [
        { edge: "top", ...H },
        { edge: "right", ...J },
        { edge: "bottom", ...oe },
        { edge: "left", ...ce }
      ],
      rotateStemBase: { x: H.x, y: H.y },
      rotateHandle: { x: H.x, y: H.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return h._strokeGeomCache.set(s, ye), ye;
  }
  function Kv(i, s) {
    const l = h.mode === "frame" ? ze() : null, f = l ? pn(l) : null, p = th(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = il(p, null, l, f, m), S = Sv(i).map((F) => il(F, (g == null ? void 0 : g.x) ?? null, l, f, m)).filter((F) => Number.isFinite(F == null ? void 0 : F.x) && Number.isFinite(F == null ? void 0 : F.y));
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
      const M = l || ze(), C = f || pn(M);
      if (!M || !C) return null;
      const F = M ? Ba(M, i) : null;
      return F ? {
        x: Number(C.x || 0) + Number(F.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(F.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return _u(i, s);
    const m = 1e-4, g = pu().project(i, m);
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
  function Wv(i, s = []) {
    if (h.mode !== "pano" || St(i)) return 1;
    const l = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return l.length ? _E(0.035, 0.2, Math.min(...l)) : 1;
  }
  function Bv(i) {
    if (ar(i) && !ji(i.clip, h.frame)) return { visible: !1 };
    const s = sn(i), l = qn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? ze() : null, p = f ? pn(f) : null, m = h.mode === "pano" && (St(i) || yn(i)), g = m ? { clipBehind: !0 } : null, w = oi(l, null, f, p, g);
    if (!w) return { visible: !1 };
    const S = rl(i), M = Qp(i).map((me) => oi(me, w.x, f, p, g)).filter((me) => Number.isFinite(me == null ? void 0 : me.x) && Number.isFinite(me == null ? void 0 : me.y));
    if (M.length < 4) return { visible: !1 };
    const C = Di(S, 0, S.tanY), F = Di(S, 0, S.tanY + Math.max(S.tanY * 0.43, 0.053)), X = oi(C, w.x, f, p, g);
    if (!X) return { visible: !1 };
    const H = oi(F, (X == null ? void 0 : X.x) ?? w.x, f, p, g), J = ((H == null ? void 0 : H.x) ?? X.x) - X.x, oe = ((H == null ? void 0 : H.y) ?? X.y) - X.y, ce = Math.hypot(J, oe) || 1, ye = {
      x: X.x + J / ce * 30,
      y: X.y + oe / ce * 30
    }, le = oi(Di(S, 0, S.tanY), w.x, f, p, g), Ne = oi(Di(S, S.tanX, 0), w.x, f, p, g), Ye = oi(Di(S, 0, -S.tanY), w.x, f, p, g), qe = oi(Di(S, -S.tanX, 0), w.x, f, p, g);
    if (!le || !Ne || !Ye || !qe) return { visible: !1 };
    const lt = [
      w,
      ...M,
      X,
      H,
      le,
      Ne,
      Ye,
      qe
    ];
    if (m && !lt.some((me) => Number((me == null ? void 0 : me.rawZ) ?? (me == null ? void 0 : me.z)) > 1e-4)) return { visible: !1 };
    const be = Wv(i, lt), se = [
      {
        edge: "top",
        x: le.x,
        y: le.y,
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
      edgeMidpoints: se,
      rotateStemBase: { x: X.x, y: X.y },
      rotateHandle: ye,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: be,
      visible: !0
    };
  }
  function tn(i) {
    if (K && yn(i) && cr()) return { visible: !1 };
    if (dn(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = V1(p, i.layerKind), g = h._strokeGeomCache.get(m);
      return g || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Gv(i, m));
    }
    if (kn(i)) {
      const p = kv(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Kv(i, p));
    }
    const s = Mv(i), l = h._strokeGeomCache.get(s);
    if (l) return l;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = Bv(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function ol(i, s, l, f = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const g = m / l;
      let w = 0, S = 0;
      s === 0 ? (w = g, S = 0) : s === 1 ? (w = 1, S = g) : s === 2 ? (w = 1 - g, S = 1) : (w = 0, S = 1 - g);
      const I = eh(i, w, S), M = h.mode === "unwrap" ? _u(I, f) : za(I);
      M && p.push(M);
    }
    return p;
  }
  function Uv(i, s) {
    const l = sn(i), f = qn(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), p = h.mode === "unwrap" ? _u(f) : null, m = p ? p.x : null, g = h.mode === "pano" ? 28 : 20, w = [
      ol(i, 0, g, m),
      ol(i, 1, g, m),
      ol(i, 2, g, m),
      ol(i, 3, g, m)
    ];
    pp(V, w, { selected: s });
  }
  function Yv() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], s = [...Ys()].sort((l, f) => Number(l.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function xu() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Ys()].sort((l, f) => Number(f.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function al(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function lh(i, s, l) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = Z(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = V.globalAlpha;
    V.globalAlpha = m * p;
    const g = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", w = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", S = s ? 3.2 : 2.6;
    al(V, f), V.fillStyle = w, V.fill(), V.strokeStyle = g, V.lineWidth = S, V.stroke(), V.save(), V.strokeStyle = g, V.lineWidth = s ? 3.2 : 2.6, V.lineCap = "round";
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
      }, J = H.x - F.x, oe = H.y - F.y, ce = Math.hypot(J, oe) || 1;
      V.beginPath(), V.moveTo(F.x, F.y), V.lineTo(F.x + J / ce * C, F.y + oe / ce * C), V.stroke();
    }), V.restore(), V.globalAlpha = m;
  }
  function Xv(i, s, l, f) {
    const p = Z(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (yn(i)) {
      lh(s, l, f);
      return;
    }
    if (St(i)) {
      const g = V.globalAlpha;
      V.globalAlpha = g * G1(i) * p, h.mode === "frame" ? (V.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", V.lineWidth = l ? 2 : 1, al(V, s.corners), V.stroke()) : Uv(i, l), V.globalAlpha = g;
      return;
    }
    const m = V.globalAlpha;
    V.globalAlpha = m * p, V.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", al(V, s.corners), V.fill(), V.strokeStyle = l ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", V.lineWidth = l ? 2.8 : 1.9, al(V, s.corners), V.stroke(), V.globalAlpha = m;
  }
  function ch(i, s, l) {
    if (St(i)) {
      r1(V, s, { accent: l });
      return;
    }
    V.fillStyle = l, s.corners.forEach((f) => {
      V.beginPath(), V.arc(f.x, f.y, 6.5, 0, Math.PI * 2), V.fill();
    }), yn(i) && (V.strokeStyle = l, V.lineCap = "round", V.lineWidth = 4, s.edgeMidpoints.forEach((f) => {
      var M, C, F, X;
      const p = (((M = f.b) == null ? void 0 : M.x) ?? f.x) - (((C = f.a) == null ? void 0 : C.x) ?? f.x), m = (((F = f.b) == null ? void 0 : F.y) ?? f.y) - (((X = f.a) == null ? void 0 : X.y) ?? f.y), g = Math.hypot(p, m) || 1, w = p / g, S = m / g, I = 10;
      V.beginPath(), V.moveTo(f.x - w * I, f.y - S * I), V.lineTo(f.x + w * I, f.y + S * I), V.stroke();
    }), V.lineCap = "butt"), dn(i) || (V.strokeStyle = "rgba(250, 250, 250, 0.9)", V.lineWidth = 1.8, V.beginPath(), V.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), V.lineTo(s.rotateHandle.x, s.rotateHandle.y), V.stroke(), V.fillStyle = l, V.beginPath(), V.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), V.fill());
  }
  function qv() {
    var m;
    const i = h.mode === "frame" ? [] : lr(), s = i.length > 1, l = G ? Yv() : Fr(), f = l.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${yn(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== l || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: l,
      orderKey: f,
      sorted: [...l]
    });
    const p = h._sortedItemsCache.sorted;
    for (const g of p) {
      const w = h.mode !== "frame" && !s && Cp(g);
      if (h.mode === "frame" && !w || !h.showObjects && !yn(g)) continue;
      const S = St(g), I = yn(g), M = _n(g);
      if (!S && !I || ar(g) && !ji(g.clip, h.frame)) continue;
      const C = tn(g);
      if (t !== "stickers" && !C.visible)
        continue;
      const F = Z(Number((C == null ? void 0 : C.visibilityAlpha) ?? 1), 0, 1);
      if (F <= 0.01) continue;
      const X = I && G && h.mode === "pano" ? Z(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (V.save(), V.globalAlpha *= X, Xv(g, C, w, M), w && C.visible) {
        const H = M ? "#ff4d4f" : S && Xt(g) ? "#f59e0b" : "#0070f3", J = V.globalAlpha;
        V.globalAlpha = J * F, ch(g, C, H), V.globalAlpha = J;
      }
      V.restore();
    }
    if (G && h.mode === "pano" && !ze() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const g = h.cutoutPanoFrameVisual, w = Z(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      V.save(), V.globalAlpha *= w, lh(g.geom, g.selected, g.locked), g.selected && ch(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), V.restore();
    }
    if (s) {
      const g = Ta(i);
      if (g != null && g.visible) {
        const w = tu(i) ? "#ff4d4f" : "#0070f3";
        V.save(), V.strokeStyle = "rgba(255, 255, 255, 0.95)", V.lineWidth = 2, V.setLineDash([6, 4]), V.beginPath(), V.moveTo(g.corners[0].x, g.corners[0].y);
        for (let S = 1; S < g.corners.length; S += 1) V.lineTo(g.corners[S].x, g.corners[S].y);
        V.closePath(), V.stroke(), V.setLineDash([]), V.fillStyle = w, g.corners.forEach((S) => {
          V.beginPath(), V.arc(S.x, S.y, 6.5, 0, Math.PI * 2), V.fill();
        }), V.restore();
      }
    } else
      i.forEach((g) => {
        if (!dn(g) && !kn(g)) return;
        const w = tn(g);
        if (!(w != null && w.visible)) return;
        const S = _n(g) ? "#ff4d4f" : "#0070f3";
        V.save(), V.strokeStyle = "rgba(255, 255, 255, 0.95)", V.lineWidth = 2, V.setLineDash([6, 4]), V.beginPath(), V.moveTo(w.corners[0].x, w.corners[0].y);
        for (let I = 1; I < w.corners.length; I += 1) V.lineTo(w.corners[I].x, w.corners[I].y);
        V.closePath(), V.stroke(), V.setLineDash([]), V.fillStyle = S, w.corners.forEach((I) => {
          V.beginPath(), V.arc(I.x, I.y, 6.5, 0, Math.PI * 2), V.fill();
        }), V.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = Xh(h.interaction.start, h.interaction.current);
      V.save(), V.strokeStyle = "rgba(255, 255, 255, 0.9)", V.fillStyle = "rgba(255, 255, 255, 0.08)", V.lineWidth = 1, V.setLineDash([5, 4]), V.beginPath(), V.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), V.fill(), V.stroke(), V.restore();
    }
  }
  function uh(i, s = !1) {
    const l = Z(xo(i), 0.05, 20), f = s ? 320 : 220;
    return l >= 1 ? { width: f, height: Math.max(1, Math.round(f / l)) } : { width: Math.max(1, Math.round(f * l)), height: f };
  }
  function Jv(i) {
    if (!Ae || !i) return !1;
    const s = Ae.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || Ae.clientWidth || 0)), f = Math.round(Number(s.clientHeight || Ae.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function Zv() {
    if (h.outputPreviewRect = null, P.outputPreviewToggle.visible = h.mode !== "frame" && !!ze(), L && (P.outputPreviewToggle.visible = !1), !G || !P.cameraPreview) return;
    if (h.mode === "frame" || !jp()) {
      P.cameraPreview.visible = !1, P.cameraPreview.settled = !1;
      return;
    }
    const i = ze();
    P.cameraPreview.visible = !0, P.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const s = Se == null ? void 0 : Se.getContext("2d");
    if (!i || !s) {
      P.cameraPreview.ready = !1, P.cameraPreview.settled = !1, P.cameraPreview.width = 220, P.cameraPreview.height = 132, P.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, Se.width, Se.height), Ft = null;
      return;
    }
    const l = uh(i, !!h.outputPreviewExpanded);
    P.cameraPreview.width = l.width, P.cameraPreview.height = l.height;
    const f = window.devicePixelRatio || 1, p = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * f)), h: Math.max(1, Math.round(l.height * f)) };
    (Se.width !== p.w || Se.height !== p.h) && (Se.width = p.w, Se.height = p.h);
    const { content: m } = Zn(), g = m && [i.position, Te.contentKey(), m.stickers.map((M) => [M.id, M.revision, M.opacity, M.position, M.quaternion, M.width])], w = JSON.stringify([p, Ni(i), Og(Zn()), g]);
    let S = w === Ft;
    if (S || (s.clearRect(0, 0, p.w, p.h), S = ah(s, p, i, "camera_preview"), Ft = S ? w : null), !S) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = yu() ? "Loading preview" : "Connect ERP image", P.cameraPreview.settled = !1;
      return;
    }
    const I = Jv(l);
    P.cameraPreview.ready = !0, P.cameraPreview.label = I ? "" : "Loading preview", P.cameraPreview.settled = I && Q.pendingStableLayoutFrames <= 0 && Q.hasPresentedFrame;
  }
  function Su(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), f = Number(s.y || 0);
    return eh(i, l, f);
  }
  function Ho(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(l);
    return Bc(f * Math.sin(s), Math.sin(l), f * Math.cos(s));
  }
  function Qv(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function e_(i, s, l, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Mn(i, "widthScale", 1),
      pressureLike: Mn(i, "pressureLike", 1)
    }, ...f, u: s, v: l };
  }
  function t_(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function ku(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let J = null;
      i.forEach((oe) => {
        const ce = Number((oe == null ? void 0 : oe.u) || 0), ye = Number((oe == null ? void 0 : oe.v) || 0), le = (ce % 1 + 1) % 1, Ne = J == null ? le : J + sr(le, (J % 1 + 1) % 1);
        p.set(oe, { x: Ne, y: ye }), J = Ne;
      });
    }
    const m = (J) => !J || typeof J != "object" ? { x: 0, y: 0 } : p.get(J) || Qv(J), g = (J, oe, ce, ye = {}) => {
      const le = f ? (Number(oe) % 1 + 1) % 1 : Number(oe), Ne = e_(J, le, ce, ye);
      return p.set(Ne, { x: Number(oe), y: Number(ce) }), Ne;
    }, w = (J, oe, ce) => {
      const ye = m(J), le = m(oe);
      return g(J, pr(ye.x, le.x, ce), pr(ye.y, le.y, ce), {
        t: pr(Number((J == null ? void 0 : J.t) || 0), Number((oe == null ? void 0 : oe.t) || 0), ce),
        widthScale: pr(Mn(J, "widthScale", 1), Mn(oe, "widthScale", 1), ce),
        pressureLike: pr(Mn(J, "pressureLike", 1), Mn(oe, "pressureLike", 1), ce)
      });
    };
    if (i.length === 1) {
      const J = m(i[0]);
      return [g(i[0], J.x, J.y)];
    }
    const S = t_(s, l), I = (J, oe) => {
      const ce = [0];
      for (let se = 1; se < J.length; se += 1) {
        const me = m(J[se - 1]), Le = m(J[se]);
        ce.push(ce[se - 1] + Math.hypot(Le.x - me.x, Le.y - me.y));
      }
      const ye = ce[ce.length - 1] || 0;
      if (ye <= 1e-8) {
        const se = J[0], me = m(se);
        return [g(se, me.x, me.y)];
      }
      const le = [];
      let Ne = 0;
      for (let se = 0; se <= ye + 1e-9; se += oe) {
        for (; Ne < ce.length - 2 && ce[Ne + 1] < se; ) Ne += 1;
        const me = ce[Ne], Le = ce[Ne + 1], xe = Math.max(1e-8, Le - me);
        le.push(w(J[Ne], J[Ne + 1], Z((se - me) / xe, 0, 1)));
      }
      const Ye = J[J.length - 1], qe = m(Ye), lt = le[le.length - 1], be = lt ? m(lt) : null;
      return (!be || Math.hypot(be.x - qe.x, be.y - qe.y) > oe * 0.35) && le.push(g(Ye, qe.x, qe.y)), le;
    }, M = (J) => {
      if (!Array.isArray(J) || J.length < 3) return J ? J.slice() : [];
      const oe = m(J[0]), ce = [g(J[0], oe.x, oe.y)];
      for (let Ne = 0; Ne < J.length - 1; Ne += 1) {
        const Ye = J[Ne], qe = J[Ne + 1], lt = m(Ye), be = m(qe), se = g(
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
        ce.push(se, me);
      }
      const ye = J[J.length - 1], le = m(ye);
      return ce.push(g(ye, le.x, le.y)), ce;
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
  function n_(i) {
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
  function Ha(i, s, l = {}) {
    const f = document.createElement("canvas");
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const p = f.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, f.width, f.height), p.imageSmoothingEnabled = !0), { canvas: f, ctx: p };
  }
  function Ga() {
    const i = Wa();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Ka() {
    const i = Wa();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function fh() {
    const i = Zc(), s = Ka();
    return i ? `${s}:${i}` : s;
  }
  function r_() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function i_() {
    h.paintCompositeRevision += 1;
  }
  function o_() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function dh() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, _), h.paintEngineRevisionKey = Ga();
  }
  function ph() {
    _.painting_layer !== null && (_.painting_layer = null), tl = "";
  }
  function $t() {
    o_(), Q.backgroundDirty = !0, Q.dirty = !0;
  }
  function Mr({ rebuildPaintEngine: i = !1 } = {}) {
    ph(), r_(), $t(), i && dh();
  }
  function Go() {
    ph(), i_(), $t();
  }
  function sl() {
    var f;
    const i = Wa(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = $f(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
    const l = Ga();
    h.paintEngineRevisionKey !== l && (h.paintEngineRevisionKey = l, (f = h.paintEngine) == null || f.rebuildCommitted(_));
  }
  function Wa() {
    const i = Math.max(1, N(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function Qn() {
    return Wa();
  }
  function a_(i, s, l, f, p = null) {
    const m = n_(i), g = Mn(s, "widthScale", 1) * Mn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * g) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * zr) * l * g) : Math.max(0.5, m.value / (2 * Math.PI) * l * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function s_(i, s, l = {}) {
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
  function l_(i, s, l) {
    const f = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function c_(i, s, l, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), s_(i, l, p);
    const g = (w) => l_(i, w, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let w = 0; w < s.length - 1; w += 1) {
      const S = s[w], I = s[w + 1];
      if (!S || !I) continue;
      const M = Number(S.x || 0), C = Number(S.y || 0), F = Number(I.x || 0), X = Number(I.y || 0), H = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5))), J = Math.max(0.5, Math.min(m, Number(I.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(C) || !Number.isFinite(F) || !Number.isFinite(X) || !Number.isFinite(H) || !Number.isFinite(J)) continue;
      const oe = F - M, ce = X - C, ye = Math.hypot(oe, ce);
      if (!Number.isFinite(ye) || ye < 1e-6) {
        g(S);
        continue;
      }
      if (ye > Math.max(f.w, f.h) * 0.5) continue;
      const le = Math.max(0.5, Math.min(H, J)), Ne = Math.max(0.35, Math.min(le * 0.4, 2.25)), Ye = Math.max(1, Math.ceil(ye / Ne));
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
  function u_(i, s, l, f) {
    c_(i, s, l, f, { preview: !1 });
  }
  function f_(i, s, l, f, p) {
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
  function hh(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function d_(i, s) {
    const l = hh(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: a_(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function mh(i, s, l = null) {
    var w, S, I, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = l || { w: Number(((w = i.canvas) == null ? void 0 : w.width) || 0), h: Number(((S = i.canvas) == null ? void 0 : S.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((I = s == null ? void 0 : s.geometry) == null ? void 0 : I.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return f_(i.ctx, hh(p), p, f), !0;
    const g = d_(p, f);
    return g.length ? (u_(i.ctx, g, p, f), !0) : !1;
  }
  function p_(i, s, l, f = 8) {
    const p = new Uint8Array(s * l), m = [], g = new Int32Array(s * l), w = new Int32Array(s * l);
    for (let S = 0; S < l; S += 1)
      for (let I = 0; I < s; I += 1) {
        const M = S * s + I;
        if (p[M] || i[M] <= f) continue;
        let C = 0, F = 0;
        g[F] = I, w[F] = S, F += 1, p[M] = 1;
        const X = [];
        let H = I, J = S, oe = I, ce = S;
        for (; C < F; ) {
          const ye = g[C], le = w[C];
          C += 1, X.push({ x: ye, y: le }), ye < H && (H = ye), le < J && (J = le), ye > oe && (oe = ye), le > ce && (ce = le);
          const Ne = [
            [(ye - 1 + s) % s, le],
            [(ye + 1) % s, le],
            [ye, le - 1],
            [ye, le + 1]
          ];
          for (const [Ye, qe] of Ne) {
            if (qe < 0 || qe >= l) continue;
            const lt = qe * s + Ye;
            p[lt] || i[lt] <= f || (p[lt] = 1, g[F] = Ye, w[F] = qe, F += 1);
          }
        }
        m.push({ pixels: X, minX: H, minY: J, maxX: oe, maxY: ce });
      }
    return m;
  }
  function h_(i, s) {
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
  function m_(i, s, l = {}) {
    var I;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (I = i == null ? void 0 : i.getContext) == null ? void 0 : I.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const g = m.getImageData(0, 0, f, p), w = new Uint8Array(f * p);
    for (let M = 0; M < w.length; M += 1) w[M] = g.data[M * 4 + 3];
    return p_(w, f, p, 8).map((M, C) => {
      const F = h_(M, f);
      if (!F) return null;
      const X = Number(F.widthPx || 0), H = M.maxY - M.minY + 1, J = Number(F.startX || 0), oe = document.createElement("canvas");
      oe.width = X, oe.height = H;
      const ce = oe.getContext("2d");
      if (!ce) return null;
      const ye = ce.createImageData(X, H);
      return M.pixels.forEach(({ x: le, y: Ne }) => {
        const Ye = (Ne * f + le) * 4, qe = (Number(le || 0) - J + f) % f, lt = ((Ne - M.minY) * X + qe) * 4;
        ye.data[lt + 0] = g.data[Ye + 0], ye.data[lt + 1] = g.data[Ye + 1], ye.data[lt + 2] = g.data[Ye + 2], ye.data[lt + 3] = g.data[Ye + 3];
      }), ce.putImageData(ye, 0, 0), {
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
        rasterDataUrl: oe.toDataURL("image/png"),
        transform: {
          du: J / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Ba(i, s) {
    if (!i || !s) return null;
    const l = rl(i), f = kf(s, l.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = kf(s, l.right) / f, m = kf(s, l.up) / f;
    return {
      x: (p / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function g_(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const l = Ti();
      return i.map((f) => ({
        x: l.x + Number(f.u || 0) * l.w,
        y: l.y + Number(f.v || 0) * l.h
      }));
    }
    const s = i.map((l) => za(Ho(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function gh(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const f = Ti();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, g = s == null ? m : Number(s || 0) + sr(m, s);
        return {
          x: f.x + g * f.w,
          y: f.y + Number(p.v || 0) * f.h
        };
      });
    }
    const l = i.map((f) => za(Ho(f))).filter(Boolean);
    return l.every((f) => Number(f.z || 0) > 0) ? l.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function y_(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l], p = i[(l + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function b_(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ho(p), g = Ba(s, m);
      if (!g) return [];
      f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return y_(f, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? f : [];
  }
  function v_(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ho(p), g = Ba(s, m);
      g && f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return f;
  }
  function __() {
    const i = ze(), s = fl(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: p } = Cg(i, s, { width: O.width, height: O.height }), m = w_(l);
    return V.save(), V.fillStyle = "#0a0a0a", V.fillRect(0, 0, O.width, O.height), ah(V, f, p) || (V.fillStyle = "rgba(255, 255, 255, 0.03)", V.fillRect(f.x, f.y, f.w, f.h)), V.restore(), V.save(), V.fillStyle = "rgba(0, 0, 0, 0.58)", V.beginPath(), V.rect(0, 0, O.width, O.height), V.roundRect(l.x, l.y, l.w, l.h, m), V.fill("evenodd"), V.restore(), V.save(), V.strokeStyle = m0, V.globalAlpha = 0.62, V.lineWidth = 2, V.beginPath(), V.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), V.stroke(), V.restore(), !0;
  }
  function w_(i) {
    const s = Math.max(1e-6, Number(Q.frameCanvasScale || 1));
    return Math.min(Io * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function ai() {
    var s;
    const i = h.mode === "frame" ? ze() : null;
    P.frameRollKnob.visible = !!i && !r && i.locked !== !0, P.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), P.frameRollKnob.displayValue = Qo(P.frameRollKnob.rollDeg), P.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", P.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function x_() {
    var S, I;
    if (((S = h.interaction) == null ? void 0 : S.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (I = i == null ? void 0 : i.geometry) == null ? void 0 : I.points;
    let l;
    if (h.mode === "frame") {
      const M = ze(), C = pn(M);
      l = b_(s, M, C);
    } else
      l = g_(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), g = Math.round(Number(p.g || 0) * 255), w = Math.round(Number(p.b || 0) * 255);
    V.save(), V.beginPath(), V.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let M = 1; M < l.length; M++) V.lineTo(Number(l[M].x || 0), Number(l[M].y || 0));
    V.closePath(), f ? (V.lineWidth = 2, V.setLineDash([6, 6]), V.lineDashOffset = 0, V.strokeStyle = "rgba(0,0,0,0.96)", V.stroke(), V.lineDashOffset = -6, V.strokeStyle = "rgba(255,255,255,0.96)", V.stroke(), V.setLineDash([]), V.lineDashOffset = 0) : (V.lineWidth = 1.5, V.setLineDash([6, 4]), V.strokeStyle = `rgba(${m},${g},${w},1)`, V.stroke(), V.setLineDash([])), V.restore();
  }
  function S_() {
    const i = h.frameRollOverlayVisual, s = Z(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = pn(i.shot);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * zr, m = Math.hypot(l.w, l.h) * 0.55, g = Math.cos(p) * m, w = Math.sin(p) * m;
    V.save(), V.globalAlpha *= s, V.beginPath(), V.rect(l.x, l.y, l.w, l.h), V.clip(), V.translate(f.x, f.y), V.rotate(p);
    const S = Math.max(12, Math.min(l.w, l.h) / 6);
    V.beginPath();
    for (let I = -m; I <= m; I += S)
      V.moveTo(I, -m), V.lineTo(I, m);
    for (let I = -m; I <= m; I += S)
      V.moveTo(-m, I), V.lineTo(m, I);
    V.lineWidth = 1, V.strokeStyle = "rgba(255, 255, 255, 0.22)", V.stroke(), V.setTransform(1, 0, 0, 1, 0, 0), V.beginPath(), V.moveTo(f.x - g, f.y - w), V.lineTo(f.x + g, f.y + w), V.lineWidth = 1.5, V.setLineDash([8, 6]), V.strokeStyle = "rgba(255, 255, 255, 0.92)", V.shadowColor = "rgba(0, 0, 0, 0.8)", V.shadowBlur = 3, V.stroke(), V.setLineDash([]), V.restore();
  }
  function k_() {
    return !G || !ze() || K && cr() || L && !ur() ? 0 : cE;
  }
  function M_() {
    const i = Z(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || !G || h.mode !== "pano") return;
    const s = ze(), l = s ? tn(s) : null, f = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    l != null && l.visible && f && (h.cutoutPanoDimCorners = f), s && (l != null && l.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: Cp(s),
      locked: _n(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if (V.save(), V.fillStyle = `rgba(0, 0, 0, ${i})`, V.beginPath(), V.rect(0, 0, O.width, O.height), m.length >= 4) {
      V.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) V.lineTo(m[g].x, m[g].y);
      V.closePath();
    }
    V.fill("evenodd"), V.restore();
  }
  function yh() {
    rt = null, h.mode === "frame" ? (Q.frameSafeRect = lw(), __()) : h.mode === "unwrap" ? $v(!1) : zv(!1), M_(), G && Zv(), qv(), ai(), x_(), S_(), P.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && Ge(), Q.hasPresentedFrame || (Q.hasPresentedFrame = !0, te.style.opacity = "1"), G && P.cameraPreview && (P.cameraPreview.settled = Q.pendingStableLayoutFrames <= 0 && Q.hasPresentedFrame && h.mode !== "frame");
    const i = xv();
    P.stageStatus = i.status, P.stageStatusDetail = i.detail, i.status === Ar ? (ee == null || ee.removeAttribute("data-stage-ready"), ee == null || ee.setAttribute("data-stage-loading-kind", i.detail)) : (ee == null || ee.setAttribute("data-stage-ready", ""), ee == null || ee.removeAttribute("data-stage-loading-kind"));
  }
  function N_(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function P_() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = R1();
  }
  function ae(i = {}) {
    var w, S, I, M, C, F, X, H, J;
    const s = !!i.localOnly, l = i.externalSync === !0, f = String(i.cause || ""), p = String(((w = h.interaction) == null ? void 0 : w.kind) || "");
    (!s || p === "view" || p === "pan_frame" || N_() || !!h.viewTransition || f === "mode" || f === "frame_view" || f === "cutout_frame") && (Q.backgroundDirty = !0), s && Mp() && (h.livePaintInteractionRevision += 1, Q.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (cu(), ii()), P_(), l && ((I = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || I.call(S), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), l && !s && ((F = (C = e.graph) == null ? void 0 : C.setDirtyCanvas) == null || F.call(C, !0, !0), (J = (H = (X = Ir) == null ? void 0 : X.canvas) == null ? void 0 : H.setDirty) == null || J.call(H, !0, !0)), Q.dirty = !0;
  }
  function bh() {
    const i = O.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return O.width !== s || O.height !== l || te.width !== s || te.height !== l ? (O.width = s, O.height = l, te.width = s, te.height = l, Q.backgroundDirty = !0, Q.dirty = !0, G && (Q.pendingStableLayoutFrames = Math.max(Number(Q.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function A_(i = performance.now()) {
    var m;
    fr(), Q.lastTickTs = i;
    const s = h.mode === "frame" && ((m = h.interaction) == null ? void 0 : m.kind) === "roll_frame" ? h.interaction : null;
    s != null && s.shot && (h.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = l, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const g = Z(
        (i - Number(h.frameRollOverlayStartTs || i)) / uE,
        0,
        1
      );
      h.frameRollOverlayAlpha = pr(
        Number(h.frameRollOverlayFrom || 0),
        l,
        Sf(g)
      ), g >= 1 && (h.frameRollOverlayAlpha = l, l === 0 && (h.frameRollOverlayVisual = null)), Q.dirty = !0;
    }
    const f = k_();
    if (Math.abs(f - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = f, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const g = Z(
        (i - Number(h.cutoutPanoDimStartTs || i)) / y0,
        0,
        1
      );
      h.cutoutPanoDimAlpha = pr(
        Number(h.cutoutPanoDimFrom || 0),
        f,
        Sf(g)
      ), g >= 1 && (h.cutoutPanoDimAlpha = f), g >= 1 && f === 0 && (h.cutoutPanoDimCorners = null), Q.dirty = !0;
    }
    const p = G && ze() ? 1 : 0;
    if (Math.abs(p - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = p, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const g = Z(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / y0,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = pr(
        Number(h.cutoutPanoFrameFrom || 0),
        p,
        Sf(g)
      ), g >= 1 && (h.cutoutPanoFrameAlpha = p, p === 0 && (h.cutoutPanoFrameVisual = null)), Q.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const g = Math.max(1, Number(h.outputPreviewAnimDurationMs)), w = Z((i - Number(h.outputPreviewAnimStartTs || 0)) / g, 0, 1), I = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? vE(w) : SE(w);
      h.outputPreviewAnim = pr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, I), Q.dirty = !0, w >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if (h.viewTransition) {
      const { view: g, done: w } = TA(h.viewTransition, i);
      if (h.viewPosition = g.position, h.viewYaw = g.yaw_deg, h.viewPitch = g.pitch_deg, h.viewFov = g.hFOV_deg, h.viewDistance = g.distance, w) {
        const { end: S } = h.viewTransition;
        h.viewTransition = null, S && xp(S), Tr();
      }
      Q.backgroundDirty = !0, Q.dirty = !0;
    }
    if (h.viewInertia.vx = Number(ln.state.inertia.vx || 0), h.viewInertia.vy = Number(ln.state.inertia.vy || 0), h.viewInertia.active = !!ln.state.inertia.active, ln.stepInertia(i) && (h.viewInertia.vx = Number(ln.state.inertia.vx || 0), h.viewInertia.vy = Number(ln.state.inertia.vy || 0), h.viewInertia.active = !!ln.state.inertia.active, Q.backgroundDirty = !0, Q.dirty = !0), Q.pendingStableLayoutFrames > 0 && (Q.pendingStableLayoutFrames -= 1, Q.dirty = !0), Q.dirty) {
      if (Q.pendingStableLayoutFrames > 0)
        return;
      Q.dirty = !1, yh();
    }
  }
  function vh(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      Q.tickErrorSignature !== l && (Q.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), P.stageStatus = mr, P.stageStatusDetail = "frame", ee == null || ee.setAttribute("data-stage-ready", ""), ee == null || ee.removeAttribute("data-stage-loading-kind");
    }
  }
  function _h(i = performance.now()) {
    Q.running && (vh(() => A_(i)), Q.running && (Q.rafId = requestAnimationFrame(_h)));
  }
  function C_() {
    !Q.running || !bh() || vh(() => {
      Q.dirty = !1, yh();
    });
  }
  const wh = new ResizeObserver(C_);
  wh.observe(O);
  function I_() {
    Q.running = !1, Q.rafId && cancelAnimationFrame(Q.rafId), Q.rafId = 0, wh.disconnect();
  }
  function Qe() {
    r || (fr(), yg(_), !(k && _.stickers.some(Yc)) && (h.historyController.commitActionGroup(JSON.stringify(hg(_))), Fu()));
  }
  function Mu(i) {
    var p, m;
    if (r) return;
    wn();
    const s = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Fu(), !s) return;
    const l = CM(_, s), f = (p = _.timeline) == null ? void 0 : p.fps;
    Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, l.state), fr(!1), k && _.timeline.fps !== f && an.seek(Math.round(h.frame * _.timeline.fps / f)), h.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, L && !h.selectedId && _.active.selected_shot_id && (h.selectedId = ((m = ze()) == null ? void 0 : m.id) ?? null), h.selectedIds = h.selectedId ? [h.selectedId] : [], h.selectedId && Vo(), Q.backgroundDirty = !0, l.paintingChanged ? Mr() : $t(), Kn(), Ve(), Vn(), ae({ cause: "cutout_frame" });
  }
  function xh() {
    var l, f;
    const i = Array.isArray((l = h.historyController) == null ? void 0 : l.entries) ? h.historyController.entries : [], s = Number((f = h.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Kn() {
    C1();
    const i = RA({
      editor: h,
      swatches: ql,
      paintColorPopOpen: Oe ? !Oe.hidden : !1,
      colorToCss: jr,
      colorsApproximatelyEqual: Jl,
      rgb01ToHsv: Pf,
      hsv01ToRgb: Nf,
      getBrushPresetIdForTool: Ri,
      isActiveLassoTool: W1
    });
    if (Object.assign(P.paintDock, i), J1(), !i.visible) {
      Oe && (Oe.hidden = !0);
      return;
    }
    ft && (clearTimeout(ft), ft = 0), de && (!i.colorEnabled && Oe && !Oe.hidden && (ft = window.setTimeout(() => {
      Oe.hidden = !0, P.paintDock.colorPopOpen = !1, ft = 0;
    }, 170)), Oe && (Oe.style.setProperty("--picker-hue-color", i.pickerHueColor), Oe.style.setProperty("--picker-sat", i.pickerSat), Oe.style.setProperty("--picker-val", i.pickerVal), Oe.style.setProperty("--picker-hue", i.pickerHue)), $e && ($e.style.left = i.pickerSvLeft, $e.style.top = i.pickerSvTop), at && (at.style.left = i.pickerHueLeft));
  }
  function Ko() {
    const i = sn(G && h.mode === "frame" ? ze() : It());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: mi(i)
    }, Ve());
  }
  function Ve() {
    var be, se, me, Le;
    if (fr(), si(), o) return;
    _.ui_settings = _.ui_settings || {};
    const i = LA(_.ui_settings);
    if (a) {
      P.sidePanel = VA({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: Xn
      });
      return;
    }
    const s = It(), l = G && h.mode === "frame" ? ze() : null, f = l || s, p = l ? [l] : lr(), m = l ? "shot" : Js();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const xe = sn(f);
      h.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: mi(xe)
      }, ar(f) && (h.panelLastValues.opacity = So(f, h.frame).opacity * 100);
    }
    const g = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = m === "stroke" ? null : f, S = La(), I = K && (m === "shot" || m === "frame") && Va(), M = S ? zM(S, h.frame) : I ? { ...w, ...RM(_.camera, h.frame), vFOV_deg: w.vFOV_deg } : ar(w) ? h.panelLastValues : w || g, C = S ? el(S) : !!w && !_n(w);
    h.panelWasEnabled = C, cu();
    let F = null;
    if (l) {
      const xe = nu({ item: l, kind: "shot", label: "Frame" });
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
        Ue && xe.push({ id: Ue.id, label: "Camera", icon: Op("frame"), item: Ue, kind: "frame" }), Fr().forEach((je, At) => {
          var Vr, ts;
          if (!je) return;
          const Nn = A ? qf(je) : Xt(je) ? String(je.id || yf) : String(((ts = (Vr = _.assets) == null ? void 0 : Vr[je.asset_id]) == null ? void 0 : ts.name) || je.asset_id || je.id), zt = `${At + 1}. ${Nn}${Xt(je) && Ro(je) ? " (hidden)" : ""}`, Wt = nu({ item: je, label: zt, kind: "image" });
          xe.push({ id: je.id, label: Wt.label, icon: Wt.icon, item: je, kind: "image" });
        });
      } else
        Ip().forEach((Ue) => {
          if (!(Ue != null && Ue.item)) return;
          const je = nu(Ue);
          xe.push({ id: Ue.item.id, label: je.label, icon: je.icon, item: Ue.item, kind: Ue.kind });
        });
      const Ke = (w == null ? void 0 : w.id) || "", Be = S ? { label: qf(S), icon: ke.globe } : xe.find((Ue) => Ue.id === Ke) || xe[0];
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
          active: Ue.id === Ke
        }))
      };
    }
    const X = [], H = (xe, Ke, Be, Ue, je) => {
      const At = Z(Number(M[xe] || 0), Be, Ue);
      X.push({
        key: xe,
        label: Ke,
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
      for (const [xe, Ke] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Be = gf(M[xe]);
        H(xe, Ke, -Be, Be, 0.01);
      }
      H("yaw_deg", "Yaw", -180, 180, 0.1), H("pitch_deg", "Pitch", -90, 90, 0.1), H("roll_deg", "Roll", -180, 180, 0.1), H("scale", "Scale", h0, gf(M.scale), 0.01), H("opacity", "Opacity", 0, 100, 1);
    } else if (p.length > 1)
      J.push(`Selected objects: ${p.length}`), J.push("Multi-selection supports z-order and delete.");
    else {
      const xe = m === "shot" || m === "frame";
      if (H("yaw_deg", "Yaw", -180, 180, 0.1), H("pitch_deg", "Pitch", -90, 90, 0.1), H("hFOV_deg", "H FOV", 1, 179, 0.1), H("vFOV_deg", "V FOV", 1, 179, 0.1), xe && Ra() && X.slice(-2).forEach((Ke) => {
        Ke.enabled = !1;
      }), m === "image" || t === "stickers" && !xe ? H("rot_deg", "Rotation", -180, 180, 0.1) : H("roll_deg", "Roll", -180, 180, 0.1), A && !xe && H("opacity", "Opacity", 0, 100, 1), I)
        for (const [Ke, Be] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Ue = gf(M[Ke]);
          H(Ke, Be, -Ue, Ue, 0.01);
        }
    }
    const oe = Array.isArray((se = (be = _ == null ? void 0 : _.painting) == null ? void 0 : be.paint) == null ? void 0 : se.strokes) ? _.painting.paint.strokes.length : 0, ce = Array.isArray((Le = (me = _ == null ? void 0 : _.painting) == null ? void 0 : me.mask) == null ? void 0 : Le.strokes) ? _.painting.mask.strokes.length : 0, ye = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((xe) => String((xe == null ? void 0 : xe.name) || "")) : [], le = bE(
      e,
      ye.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_media", "bg_erp", "erp_image"]
    ), Ne = !!String((le == null ? void 0 : le.src) || "").trim() || ri("pano_input_images").length > 0, Ye = Fr().length > 0 || oe > 0, qe = ce > 0, lt = [
      { key: "mask", label: "Mask", icon: ke.circle_dashed_tool, visible: !!h.showMask, enabled: qe },
      { key: "objects", label: "Paint / Images", icon: ke.image, visible: !!h.showObjects, enabled: Ye },
      { key: "panorama", label: "Panorama", icon: ke.globe, visible: !!h.showPanorama, enabled: Ne }
    ].map((xe) => ({
      ...xe,
      ariaLabel: `Toggle ${xe.label.toLowerCase()}`,
      tip: xe.visible ? "Hide" : "Show"
    }));
    P.sidePanel = HA({
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
    const i = ll(), s = We.selection, l = s && li(s.owner);
    if (s) {
      const p = l ? Ua(s) : [];
      s.frames = s.frames.filter((m) => p.some((g) => l[g].keyframes.some((w) => w.frame === m))), s.frames.length || (We.selection = null);
    }
    const f = _.timeline.fps;
    P.timeline = UA(_, {
      frame: h.frame,
      span: i,
      selection: We.selection,
      selectedId: h.worldSelectedId || h.selectedId,
      expanded: We.expanded ?? Sh(),
      openRows: We.openRows,
      audio: E_() && P.videoTransport.hasAudio ? { muted: Pe.muted } : null,
      playing: an.playing,
      label: `${h.frame}f · ${(h.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: _f(e) !== null || CN(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: Dr(),
      stickers: !E,
      scene: A && !!id(e).scene,
      sceneLocked: !!T
    }), P.easing = We.selection ? YA(l, Ua(We.selection), We.selection.frames, Ya(We.selection.owner)) : null;
  }
  function Sh() {
    return E ? Ki(_.camera).some((i) => _.camera[i].keyframes.length > 0) : tb(_, { camera: L });
  }
  function ll(i = null) {
    if (T != null && T.frames) return T.frames;
    const s = _.timeline.fps, l = _.stickers.find(Xt), f = l ? Vp() : null, p = Math.max(
      P.videoTransport.ready ? Math.round(Number(P.videoTransport.duration || 0) * s) : 0,
      f ? Eb(l.clip, s, f.meta) : 0
    );
    return nb(_, { minimum: Math.round(s * 5), frames: p, openClip: i, camera: E && !T || L });
  }
  function li(i) {
    return i === "camera" ? Dr() ? _.camera : null : i === "scene" ? A ? _.scene : null : _.stickers.find((s) => s.id === i) || null;
  }
  function Ua(i) {
    return i.lane ? [i.lane] : Ki(li(i.owner));
  }
  function Ya(i) {
    if (i === "camera") return 0;
    const { clip: s } = li(i);
    return s.start - s.in;
  }
  function cl(i) {
    const s = li(i);
    return !!s && s.locked !== !0;
  }
  function kh() {
    const i = It();
    ar(i) && !ji(i.clip, h.frame) && Rn(null);
  }
  function O_(i) {
    const s = Math.max(0, Math.round(i));
    s !== h.frame && (fr(), h.frame = s, fr(), kh(), $t(), Ve(), Ge(), ae());
  }
  function E_() {
    return Pe instanceof HTMLVideoElement && !!Pe.getAttribute("src");
  }
  function F_(i) {
    Oi(), an.seek(i);
  }
  function wn() {
    k && an.stop();
  }
  function Nu() {
    Oi(), an.toggle();
  }
  function Wo() {
    fr(), $t(), Ve(), Ge(), ae();
  }
  function eo() {
    Qe(), it(), Wo();
  }
  function T_() {
    const { selection: i } = We;
    cl(i.owner) && (wn(), mM(li(i.owner), Ua(i), i.frames, h.frame - Ya(i.owner)), We.selection = null, eo());
  }
  function Mh(i) {
    wn();
    const s = Math.round(h.frame * i / _.timeline.fps);
    OM(_, i), We.selection = null, an.seek(s), eo();
  }
  function D_() {
    const i = _f(e);
    i !== null && i !== _.timeline.fps && Mh(i);
  }
  function L_(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        i.phase === "start" && Oi(), an.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Nu();
        return;
      }
      if (i.type === "mute") {
        Tp(), si();
        return;
      }
      if (i.type === "toggle-expanded") {
        We.expanded = !(We.expanded ?? Sh()), We.selection = null, si();
        return;
      }
      if (i.type === "toggle-row") {
        We.openRows.has(i.id) ? We.openRows.delete(i.id) : We.openRows.add(i.id), si();
        return;
      }
      if (i.type === "select-row") {
        const s = _.stickers.find((l) => l.id === i.id);
        s && !ji(s.clip, h.frame) && F_(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? lu(s.id) : i.id === "camera" ? Rn(ze()) : Rn(Fr().find((l) => l.id === i.id) || null), Tr(), We.selection = null, Ve(), Ge(), ae();
        return;
      }
      if (i.type === "select-keys") {
        const s = Ya(i.owner), l = i.frames.map((m) => m - s), f = We.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
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
        if (!s || !cl(s.owner)) return;
        const l = li(s.owner), f = Ua(s);
        if (i.phase === "start") {
          wn(), We.drag = { keyframes: f.map((g) => structuredClone(l[g].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = We;
        if (!(p != null && p.keyframes)) return;
        f.forEach((g, w) => {
          l[g].keyframes = structuredClone(p.keyframes[w]);
        });
        const m = gM(l, f, p.frames, i.delta, -Ya(s.owner));
        if (s.frames = p.frames.map((g) => g + m), i.phase !== "end") {
          Wo();
          return;
        }
        We.drag = null, m ? eo() : Wo();
        return;
      }
      if (i.type === "clip") {
        const s = i.id === "scene" ? li("scene") : _.stickers.find((p) => p.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          wn(), We.drag = { clip: { ...s.clip }, span: ll(s.clip) };
          return;
        }
        const { drag: l } = We;
        if (!(l != null && l.clip)) return;
        const f = l.clip;
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? vM(s.clip, i.delta) : i.delta && i.mode === "start" ? _M(s.clip, f.start + i.delta) : i.delta && wM(s.clip, (f.duration === null ? l.span : f.start + f.duration) + i.delta, l.span), i.phase !== "end") {
          Wo();
          return;
        }
        We.drag = null, kh(), JSON.stringify(s.clip) !== JSON.stringify(f) ? eo() : Wo();
        return;
      }
      if (i.type === "key-row") {
        if (!cl(i.owner)) return;
        wn(), dM(li(i.owner), h.frame - Ya(i.owner)), eo();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === _.timeline.fps || P.timeline.fpsLocked) {
          si();
          return;
        }
        Mh(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === _.timeline.length) {
          si();
          return;
        }
        wn(), _.timeline.length = s, eo();
        return;
      }
      if (i.type === "easing") {
        const s = We.selection;
        if (!s || !cl(s.owner)) return;
        wn(), bM(li(s.owner), Ua(s), s.frames, i.easing), i.commit ? eo() : Wo();
      }
    }
  }
  async function Nh(i) {
    if (r || E || t !== "stickers" && t !== "cutout" || !Cr(i)) return;
    if (A) {
      wn(), await Ph(i);
      return;
    }
    const s = co("asset"), l = ms(e, `add:${s}`, async () => {
      try {
        const { image: f } = await gs(i);
        en.set(s, f);
        const p = co("st");
        _.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Ei(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: Zs()
        }), Rn(_.stickers[_.stickers.length - 1]), Xa(), Ve(), Ge(), ae();
        const m = await po(i, {
          fetchApi: (S, I) => Jt.fetchApi(S, I)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === s).length) return;
        _.assets[s] = m, jo(), Qe(), it(), Ve(), Ge(), ae();
      } catch (f) {
        delete _.assets[s], en.delete(s);
        const p = Array.isArray(_.stickers) ? _.stickers : [], m = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (_.stickers = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(h.selectedId || "")) && Rn(null), Ve(), Ge(), ae(), it()), f;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function R_() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = U == null ? void 0 : U.openImagePicker) == null || i.call(U, "add");
  }
  function V_() {
    var i;
    r || !A || (i = U == null ? void 0 : U.openImagePicker) == null || i.call(U, "add-world");
  }
  async function $_(i) {
    r || !A || !Cr(i) || (wn(), await Ph(i, "world"));
  }
  function z_() {
    const i = { x: O.width / 2, y: O.height / 2 }, s = Zi() ? du(i) : null;
    return fN(bn(), s, Lr());
  }
  async function Ph(i, s = "sky") {
    const l = co("st"), f = ms(e, `add:${l}`, async () => {
      const { image: p } = await gs(i), m = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Ei(30, Number(p.naturalWidth || p.width || 1), Number(p.naturalHeight || p.height || 1)),
        rot_deg: 0
      }, g = { kind: "file", filename: "" }, w = s === "world" ? KM(l, g, z_()) : rp(l, g, m, Zs());
      en.set(ja(w), p), _.stickers.push(w), s === "world" ? lu(l) : Rn(w), Xa(), Ve(), Ge(), ae();
      try {
        const S = await po(i, {
          fetchApi: (M, C) => Jt.fetchApi(M, C)
        }), I = _.stickers.find((M) => M.id === l);
        if (!I) return;
        I.source = jl(S), en.set(ja(I), p), Qe(), it();
      } catch (S) {
        throw _.stickers = _.stickers.filter((I) => I.id !== l), h.selectedId === l && Rn(null), h.worldSelectedId === l && Vo(), Qe(), it(), S;
      } finally {
        Ve(), Ge(), ae();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function j_(i, s) {
    const l = ms(e, `replace:${s}:${co("asset")}`, async () => {
      const { image: f } = await gs(i), p = await po(i, {
        fetchApi: (g, w) => Jt.fetchApi(g, w)
      }), m = _.stickers.find((g) => g.id === s);
      if (m) {
        m.source = jl(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((w) => w.value)])
          g.vFOV_deg = Ei(g.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        en.set(ja(m), f), $t(), Qe(), it(), Ve(), Ge(), ae();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function H_(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = It();
    if (!s || !St(s) || Xt(s) || !Cr(i)) return;
    if (A) {
      await j_(i, s.id);
      return;
    }
    const l = String(s.id || ""), f = co("asset"), p = ms(e, `replace:${l}:${f}`, async () => {
      var M;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === l) || null;
      if (!m || !St(m) || Xt(m)) return;
      const g = String(m.asset_id || ""), w = g ? Pn(((M = _.assets) == null ? void 0 : M[g]) || null) : null, S = Number(m.vFOV_deg || 0), I = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: C } = await gs(i);
        en.set(f, C), m.asset_id = f, m.vFOV_deg = Ei(
          Number(m.hFOV_deg || 30),
          Number(C.naturalWidth || C.width || 1),
          Number(C.naturalHeight || C.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, $t(), Ve(), Ge(), ae();
        const F = await po(i, {
          fetchApi: (H, J) => Jt.fetchApi(H, J)
        }), X = (Array.isArray(_.stickers) ? _.stickers : []).find((H) => String((H == null ? void 0 : H.id) || "") === l) || null;
        if (!X || String(X.asset_id || "") !== f) return;
        _.assets[f] = F, jo(), Qe(), it(), Ve(), Ge(), ae();
      } catch (C) {
        delete _.assets[f], en.delete(f);
        const F = (Array.isArray(_.stickers) ? _.stickers : []).find((X) => String((X == null ? void 0 : X.id) || "") === l) || null;
        throw F && String(F.asset_id || "") === f && (g && w && (_.assets[g] = w), F.asset_id = g, F.vFOV_deg = S, F.crop = I ? { ...I } : null), $t(), it(), Ve(), Ge(), ae(), C;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function G_() {
    var s;
    if (r) return;
    const i = It();
    !i || !St(i) || Xt(i) || (s = U == null ? void 0 : U.openImagePicker) == null || s.call(U, "replace");
  }
  async function K_() {
    if (r || t !== "stickers") return;
    if (A) {
      await W_();
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
        const g = await fetch(m).then((C) => C.blob()), w = String(g.type || "image/png").split("/")[1] || "png", S = String((p == null ? void 0 : p.name) || `${f}.${w}`), I = new File([g], S, { type: g.type || "image/png" }), M = await po(I, {
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
  async function W_() {
    let i = !1;
    for (const s of _.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const f = await fetch(l).then((w) => w.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), g = await po(m, {
            fetchApi: (w, S) => Jt.fetchApi(w, S)
          });
          s.source = jl(g), i = !0;
        } catch {
        }
    }
    i && (it(), ae());
  }
  function B_() {
    if (r || t !== "cutout") return;
    const i = ze();
    if (i) {
      Rn(i), h.mode = "pano", E && cr() ? Ji(Sg(Fv(bn(), i.position), ih(), O.width, O.height)) : Sp(Ht(Number(i.yaw_deg || 0)), Z(Number(i.pitch_deg || 0), -89.9, 89.9)), Ve(), Ge(), ae({ cause: "cutout_frame" });
      return;
    }
    const s = Ty({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    _.shots = [s], Rn(s), Xa(), h.mode = "pano", Qe(), it(), Ve(), Ge(), ae({ cause: "cutout_frame" });
  }
  function U_() {
    r || !L || Dr() || (wn(), _.camera = TM(bn()), fr(), Rn(ze()), Xa(), Qe(), it(), Ve(), Ge(), ae({ cause: "cutout_frame" }));
  }
  function Y_() {
    wn(), _.camera = null, Rn(null), fr(), Qe(), it(), Ve(), Ge(), ae({ cause: "cutout_frame" });
  }
  function Ah(i, s) {
    L && yn(i) && (_.camera.projection = s === va ? "erp" : "perspective", s === va) || tw(i, s);
  }
  function X_() {
    r || t !== "cutout" || (_.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, _.active.selected_shot_id = null, Qe(), it(), Ve(), Ge(), ae());
  }
  function q_() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], s = [];
    for (const l of i)
      Xt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function Ch(i, s, l = "Clear") {
    return new Promise((f) => {
      P.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: f
      };
    });
  }
  async function J_() {
    var l, f;
    if (r || !await Ch(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = pa(null), Mr();
    const s = q_();
    if (t === "stickers")
      _.stickers = A ? _.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, A || (_.assets = {}), h.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, jo();
    else {
      const p = AM(_.shots, _.active.selected_shot_id);
      _.stickers = s, _.assets = {}, _.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, jo();
    }
    Qe(), it(), Ve(), Ge(), ae();
  }
  async function Z_(i) {
    var m, g, w, S;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", f = Bo(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((g = h.interaction) == null ? void 0 : g.layerKind) === s) || !await Ch(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((w = h.interaction) == null ? void 0 : w.kind) === "draw" && ((S = h.interaction) == null ? void 0 : S.layerKind) === s) {
        const I = Qn();
        I && h.paintEngine.cancelActiveStroke(I), h.interaction = null;
      }
      f.length = 0, _.painting.raster_objects = Gn().filter((I) => String((I == null ? void 0 : I.layerKind) || "paint") !== s), s === "paint" && (Sn().length = 0), Mr(), Qe(), it(), Ve(), Ge(), Kn(), ae();
    }
  }
  function Q_() {
    if (r) return;
    const i = It();
    if (!i || !St(i) || Xt(i) || A && Yc(i)) return;
    let s;
    A ? s = WM(i, co("st"), Zs()) : (s = JSON.parse(JSON.stringify(i)), s.id = co("st"), s.yaw_deg = Ht((s.yaw_deg || 0) + 8), s.z_index = Zs()), _.stickers.push(s), _.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], $t(), Qe(), it(), Ge(), Ve(), ae();
  }
  function ew() {
    const i = La();
    return i ? (el(i) && (wn(), GM(_, i.id), Vo(), $t(), Qe(), it(), Ve(), Ge(), Tr(), ae()), !0) : !1;
  }
  function Ih() {
    var l, f, p, m, g;
    if (r || E) return;
    const i = lr(), s = It();
    if (!(!s && i.length === 0) && !i.some((w) => _n(w))) {
      if (wn(), i.length > 1) {
        const w = new Set(i.filter((M) => dn(M)).map((M) => String(M.actionGroupId || M.id || ""))), S = new Set(i.filter((M) => kn(M)).map((M) => gn(M.rasterObjectId || M.id || ""))), I = new Set(i.filter(St).map((M) => String(M.id || "")));
        w.size > 0 && (_.painting.paint.strokes = (Array.isArray((f = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : f.strokes) ? _.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), _.painting.groups = Sn().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), Mr()), S.size > 0 && (_.painting.raster_objects = Gn().filter((M) => !S.has(String((M == null ? void 0 : M.id) || ""))), Go()), I.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((M) => I.has(String((M == null ? void 0 : M.id) || "")) ? Xt(M) ? (Ro(M) || (M.visible = !1), !0) : !1 : !0), jo(), $t()), h.selectedId = null, h.selectedIds = [], Qe(), it(), Ve(), Ge(), ae();
        return;
      }
      if (dn(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (p = _.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== w), _.painting.groups = Sn().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== w), Mr(), h.selectedId = null, h.selectedIds = [], Qe(), it(), Ve(), Ge(), ae();
        return;
      }
      if (kn(s)) {
        const w = gn(s.rasterObjectId || s.id || "");
        _.painting.raster_objects = Gn().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== w), Go(), h.selectedId = null, h.selectedIds = [], Qe(), it(), Ve(), Ge(), ae();
        return;
      }
      if (L && yn(s)) {
        Y_();
        return;
      }
      if (t === "stickers" || St(s)) {
        if (Xt(s)) {
          if (Ro(s)) return;
          s.visible = !1, $t(), Qe(), it(), Ve(), Ge(), ae();
          return;
        }
        _.stickers = _.stickers.filter((w) => w.id !== s.id), jo(), $t(), h.selectedId = ((g = Fr()[0]) == null ? void 0 : g.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = h.selectedId, Qe(), it(), Ve(), Ge(), ae();
        return;
      }
      X_();
    }
  }
  function Pu(i, s) {
    const l = Q.frameSafeRect;
    if (!i || !l || h.mode !== "frame") return !1;
    const f = bf * wo(l, i), p = Bd(Wd(l, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function tw(i, s) {
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
      return Math.abs(S - I) > 1e-6 ? S >= I : xo(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const g = p / m;
    if (!Pu(i, g)) {
      const w = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = w, i.hFOV_deg = $l(w, g);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function nw(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const f = zs(s, l);
    if (!f) return !1;
    const p = f.ratio;
    if (!Pu(i, p)) {
      const m = Z(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = $l(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function Oh(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Ni(i), f = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!Pu(i, p)) {
      const m = Z(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = $l(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = ho(i);
  }
  function Eh() {
    To().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function rw() {
    if (r) return;
    const i = lr();
    if (!It() || i.length === 0 || i.some((w) => _n(w))) return;
    Eh();
    const l = To(), f = new Set(i.map((w) => St(w) ? `sticker:${String(w.id || "")}` : kn(w) ? `rasterObject:${gn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var I, M;
      const S = w.type === "sticker" ? `sticker:${String(((I = w.item) == null ? void 0 : I.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(S) ? p.push(w) : m.push(w);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((w, S) => {
      w.type === "sticker" && w.item && (w.item.z_index = S), w.type === "strokeGroup" && w.item && (w.item.z_index = S), w.type === "rasterObject" && w.item && (w.item.z_index = S);
    }), $t(), Qe(), it(), Ge(), ae();
  }
  function iw() {
    if (r) return;
    const i = lr();
    if (!It() || i.length === 0 || i.some((w) => _n(w))) return;
    Eh();
    const l = To(), f = new Set(i.map((w) => St(w) ? `sticker:${String(w.id || "")}` : kn(w) ? `rasterObject:${gn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var I, M;
      const S = w.type === "sticker" ? `sticker:${String(((I = w.item) == null ? void 0 : I.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(S) ? p.push(w) : m.push(w);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((w, S) => {
      w.type === "sticker" && w.item && (w.item.z_index = S), w.type === "strokeGroup" && w.item && (w.item.z_index = S), w.type === "rasterObject" && w.item && (w.item.z_index = S);
    }), $t(), Qe(), it(), Ge(), ae();
  }
  function ow() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", u && (_.output_preset = N(Number(_.output_preset || 2048))), d && (_.coverage = Xn(d.value)), b && (_.bg_color = String(b.value || _.bg_color || "#00ff00")), Vn(), e.setDirtyCanvas(!0, !0));
  }
  function Vn() {
    var s;
    if (r) return;
    fr(), yg(_), _.coverage = Xn(_.coverage), cb(e, _.active);
    const i = ub(e, _);
    y && !fb(e, i, String(y.value ?? ""), { rebased: K }) && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const Fh = () => Vn();
  r || (e.__panoFlushStateBeforeQueue = Fh);
  function Au() {
    _.ui_settings = CE(_.ui_settings), r || Vn();
  }
  function it() {
    var i;
    r || (Vn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function aw() {
    r || _v() && Jp().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function sw(i = {}) {
    var f, p, m, g, w, S, I, M, C, F;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1)), l && ((I = (S = e.graph) == null ? void 0 : S.setDirtyCanvas) == null || I.call(S, !0, !0), (F = (C = (M = Ir) == null ? void 0 : M.canvas) == null ? void 0 : C.setDirty) == null || F.call(C, !0, !0));
  }
  function Xa() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", Kn(), Ve());
  }
  function Li(i) {
    const s = O.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * O.width,
      y: (i.clientY - s.top) / s.height * O.height
    };
  }
  function ul(i) {
    const s = O.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function Th() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function fr(i = !0) {
    var f, p;
    if (!K) return;
    const s = $;
    if (!_.camera) {
      $ = null, (f = _.shots) != null && f.length && (_.shots = []), s && Dh(s, null);
      return;
    }
    const l = (p = _.shots) == null ? void 0 : p[0];
    i && l && $ && LM(_.camera, h.frame, l, $), $ = gg(_.camera, h.frame), l ? Object.assign(l, $, { position: [...$.position] }) : _.shots = [{ ...$, position: [...$.position] }], s || Dh(null, $);
  }
  function Dh(i, s) {
    var m, g;
    !s && h.mode === "frame" && Lh(i);
    const l = (s == null ? void 0 : s.position) ?? [0, 0, 0];
    if (((g = (m = h.viewTransition) == null ? void 0 : m.end) == null ? void 0 : g.mode) === "3dof") {
      Ji({ ...bn(), position: l }, h.viewTransition.end);
      return;
    }
    if (h.mode !== "pano" || h.spaceMode !== "3dof" || !Va()) return;
    const f = (i == null ? void 0 : i.position) ?? [0, 0, 0];
    if (f.every((w, S) => w === l[S])) return;
    const p = { ...bn(), position: f };
    $a({ mode: "6dof", position: f, moved: !0 }), h.viewDistance = p.distance, Ji({ ...p, position: l }, { mode: "3dof", moved: !1 });
  }
  function Lh(i) {
    if (h.mode = "pano", !i) return;
    Ca();
    const s = bn().distance;
    h.viewYaw = Ht(i.yaw_deg), h.viewPitch = Z(i.pitch_deg, -89.9, 89.9), h.viewFov = Z(i.hFOV_deg, 35, 140), h.spaceMode === "6dof" && $a({ mode: "6dof", position: [...i.position], moved: !0 }), h.viewDistance = s, Q.backgroundDirty = !0;
  }
  function ze() {
    if (!G) return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const s = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function lw() {
    var X, H, J, oe, ce;
    if (!O) return null;
    const i = (X = O.getBoundingClientRect) == null ? void 0 : X.call(O), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? O.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? O.height / i.height : 1;
    Q.frameCanvasScale = Math.min(s, l);
    let f = 24, p = 24;
    const m = Math.max(f + 1, O.width - 24);
    let g = Math.max(p + 1, O.height - 24);
    const w = (H = ei == null ? void 0 : ei.getBoundingClientRect) == null ? void 0 : H.call(ei), S = (J = z == null ? void 0 : z.getBoundingClientRect) == null ? void 0 : J.call(z);
    let I = 24;
    w && i && w.width > 0 && w.height > 0 && (I = Math.max(I, (w.right - i.left) * s + g0)), S && i && S.width > 0 && S.height > 0 && ((oe = P.frameRail) == null ? void 0 : oe.visible) === !0 && (I = Math.max(I, (i.right - S.left) * s + g0)), f = Math.max(f, I);
    const M = Math.min(m, O.width - I);
    let C = 24;
    const F = (ce = mn == null ? void 0 : mn.getBoundingClientRect) == null ? void 0 : ce.call(mn);
    if (F && i && F.width > 0 && F.height > 0 && (C = Math.max(C, (F.bottom - i.top) * l + vf)), [ie, we].forEach((ye) => {
      var Ye;
      if (!ye || !i) return;
      const le = getComputedStyle(ye);
      if (le.display === "none" || le.visibility === "hidden" || Number(le.opacity) <= 0) return;
      const Ne = (Ye = ye.getBoundingClientRect) == null ? void 0 : Ye.call(ye);
      !Ne || Ne.width <= 0 || Ne.height <= 0 || (C = Math.max(C, (i.bottom - Ne.top) * l + vf));
    }), Et && i) {
      const ye = getComputedStyle(Et);
      ye.display !== "none" && ye.visibility !== "hidden" && Number(ye.opacity) > 0 && (C = Math.max(C, (lE + vf) * l));
    }
    return p = Math.max(p, C), g = Math.max(p + 1, Math.min(g, O.height - C)), {
      x: f,
      y: p,
      w: Math.max(1, M - f),
      h: Math.max(1, g - p)
    };
  }
  function fl(i = ze()) {
    if (!i || !O) return null;
    const s = Q.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, O.width - 48),
      h: Math.max(1, O.height - 48)
    };
    return Ek(s, i, bf * wo(s, i));
  }
  function pn(i = ze()) {
    const s = fl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Cu() {
    return G && !!ze();
  }
  function Nr(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = Ti(), g = (i.x - m.x) / Math.max(1, m.w), w = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: Z(w, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = hu(i.x, i.y), { lon: f, lat: p } = vu(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Pr(i, s, l = performance.now()) {
    const f = pn(s);
    if (!f) return null;
    const p = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Su(s, p);
    if (!m) return null;
    const { lon: g, lat: w } = vu(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Z(0.5 - w / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function cw(i, s) {
    const l = ze();
    if (!l || l.locked === !0) return !1;
    const f = Number(s) > 0, p = Ly(l, s);
    if (!p) return !1;
    if (f) {
      const m = bf * wo(
        Q.frameSafeRect || { w: O.width, h: O.height },
        p
      ), g = Ud({ width: O.width, height: O.height }, m);
      if (g.halfW < O.width * 0.5 - 1e-6 || g.halfH < O.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, Rh(), Ve(), !0;
  }
  function Rh() {
    h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, Qe(), it(), Ve());
    }, 180);
  }
  function Iu() {
    return K && h.mode === "frame" && Va();
  }
  function qa() {
    const i = ze(), s = fl(i);
    return i && s ? Cg(i, s, { width: O.width, height: O.height }) : null;
  }
  function Vh() {
    var i;
    return h.frameDistance || ((i = Lr()) == null ? void 0 : i.radius) || Kr;
  }
  function Ja(i) {
    const { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m } = i.shot;
    return { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m, distance: Vh() };
  }
  function $h(i, s) {
    const { rect: l } = i;
    return Te.pick(oh(i.shot), s.x - l.x, s.y - l.y, l.w, l.h);
  }
  function zh(i, s, l) {
    return af(s, $h(i, l), null, Fi());
  }
  function jh(i) {
    return JSON.stringify([Ja(i), i.rect]);
  }
  function Hh(i) {
    const s = ze();
    s.position = [...i.position], s.yaw_deg = i.yaw_deg, s.pitch_deg = i.pitch_deg, h.frameDistance = i.distance;
  }
  function Gh(i, s) {
    const l = ze();
    !l || r || l.locked === !0 || (h.interaction = {
      kind: "pan_frame",
      shot: l,
      last: i,
      start: { yaw_deg: Number(l.yaw_deg || 0), pitch_deg: Number(l.pitch_deg || 0) },
      changed: !1
    }, mt(i), O.setPointerCapture(s));
  }
  function uw(i, s, l) {
    const f = qa();
    if (!f || r) return;
    const p = Ja(f), m = zh(f, p, s);
    h.interaction = i === "orbit" ? { kind: "frame_orbit", last: s, pivot: m, changed: !1 } : { kind: "frame_pan", last: s, depth: ha(p, m), changed: !1 }, mt(s), O.setPointerCapture(l);
  }
  function fw(i, s) {
    const l = qa();
    if (!l) return;
    const f = Ja(l), p = s.x - i.last.x, m = s.y - i.last.y;
    Hh(i.kind === "frame_pan" ? wg(f, p, m, l.rect.w, l.rect.h, i.depth) : _g(f, p, m, O.height, i.pivot)), i.changed = i.changed || p !== 0 || m !== 0, i.last = s, ae({ localOnly: !0, cause: "frame_view" });
  }
  function dw(i, s) {
    const l = qa();
    if (!l || r) return;
    const f = Ja(l), p = performance.now(), m = { x: i.x, y: i.y, time: p, key: Te.contentKey(), view: jh(l) };
    if (!vg(Ut, m)) {
      const g = $h(l, i);
      Ut = { ...m, cost: performance.now() - p, hit: g };
    }
    Hh(xg(f, af(f, Ut.hit, null, Fi()), s, Fi())), Ut.view = jh(qa() ?? l), Ut.wheelTime = p, Rh(), Ve(), ae({ localOnly: !0, cause: "frame_view" });
  }
  function pw() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, Qe(), it(), Ve(), !0) : !1;
  }
  function Za() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && to(), h.interaction = null, zo(), ii(), Ve(), mt(h.pointerPos), ae({ localOnly: !0 }), !0;
  }
  function hw(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function Ri(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? ui : Wn[s] ? s : h.activeBrushPresetId || ui;
  }
  function Kh() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (Th() || Cu());
  }
  function Wh() {
    var i;
    return Kh() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function dl(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: l, y: f, inside: p }, g;
  }
  function mw() {
    var M, C;
    if (!Wh()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, l = Ri(s), f = Wn[l] || Wn[ui], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(3, m * 0.5), w = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : er(h.paintColor), S = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : Z(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), I = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : Z(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
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
  function gw() {
    var F, X, H;
    const i = mw();
    if (!Fe) return;
    if (!i) {
      Fe.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const S = "rgba(222, 222, 222, 0.72)", I = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), C = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Pc, l = Pc, f = "0", g = "0", w = "none", M = fE, C = dE, m = NE(i.fillStyle, I, S);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const J = Math.max(1, Number(((F = i.preset) == null ? void 0 : F.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * J), l = Math.max(6, i.radius * 2), f = `${Math.min(6, l * 0.42)}px`, p = Number(((H = (X = i.preset) == null ? void 0 : X.angle) == null ? void 0 : H.value) || 0) * mo;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    Fe.style.display = "block", Fe.style.width = `${Math.round(s)}px`, Fe.style.height = `${Math.round(l)}px`, Fe.style.borderRadius = f, Fe.style.border = g, Fe.style.boxShadow = w, Fe.style.background = m, Fe.style.backgroundRepeat = "no-repeat", Fe.style.backgroundPosition = "center", Fe.style.backgroundSize = "contain", Fe.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - C)}px) rotate(${p}deg)`;
  }
  function yw() {
    var ye;
    if (!vt || !ht) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const l = Ri(s), f = Wn[l] || Wn[ui], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(6, m * 0.5), w = s === "eraser", S = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : er(h.paintColor), I = i === "mask" ? jr(S, 0.22) : w ? "rgba(255,255,255,0.14)" : jr(S, Z(Math.max(0.18, Number(S.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? jr(S, 0.96) : w ? "rgba(255,255,255,0.72)" : jr(S, Z(Math.max(0.56, Number(S.a ?? 1) * 0.96), 0.56, 1));
    let C = g * 2, F = g * 2, X = "999px", H = 0, J = I;
    const oe = "rgba(222, 222, 222, 0.72)", ce = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      J = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const le = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      C = Math.max(16, g * 2 * le), F = Math.max(10, g * 2), X = `${Math.min(8, F * 0.42)}px`, H = Number(((ye = f == null ? void 0 : f.angle) == null ? void 0 : ye.value) || 0) * mo;
    } else s === "brush" ? J = `radial-gradient(circle at 50% 50%, ${M} 0%, ${I} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (C = Math.max(18, g * 1.8), F = C, J = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : w && (J = "rgba(255,255,255,0.12)");
    ht.style.width = `${Math.round(C)}px`, ht.style.height = `${Math.round(F)}px`, ht.style.borderRadius = X, ht.style.background = J, ht.style.border = `1px solid ${oe}`, ht.style.boxShadow = `0 0 0 1px ${ce}`, ht.style.transform = `rotate(${H}deg)`, st && (clearTimeout(st), st = 0), vt.classList.remove("fade-out"), vt.classList.add("show");
  }
  function pl() {
    !vt || !vt.classList.contains("show") || (vt.classList.add("fade-out"), st && clearTimeout(st), st = window.setTimeout(() => {
      vt.classList.remove("show", "fade-out"), st = 0;
    }, 180));
  }
  function Bh(i, s, l, f) {
    const p = Ri(s), m = Wn[p] || Wn[ui], g = h.brushSizes[p] ?? 10, w = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), S = hw(f, w), I = l.map((C) => ({
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
  function Uh(i, s, l, f) {
    const p = l.map((S) => ({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: Number.isFinite(Number(S == null ? void 0 : S.widthScale)) ? Math.max(0, Number(S.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(S == null ? void 0 : S.pressureLike)) ? Math.max(0, Number(S.pressureLike)) : 1
    })), m = Ri(s), g = Wn[m] || Wn[ui], w = {
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
  function bw(i, s, l = performance.now()) {
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
  function vw(i, s, l = performance.now()) {
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
  function _w(i) {
    var le, Ne, Ye, qe, lt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    sl();
    const l = Qn(), f = Ha(l.width, l.height);
    if (!mh(f, s, { w: l.width, h: l.height })) return !1;
    const p = ((Ne = (le = f.ctx) == null ? void 0 : le.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Ne.data) || null;
    if (!p) return !1;
    const m = new Map(Sn().map((be) => [String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim(), be ? { ...be } : null])), g = [], w = [], S = [...Gn().filter((be) => String((be == null ? void 0 : be.layerKind) || "paint") !== "paint")];
    let I = !1, M = To().reduce((be, se) => Math.max(be, Number((se == null ? void 0 : se.z_index) || 0)), -1) + 1;
    function C(be, se, me, Le = 8) {
      let xe = se, Ke = me, Be = -1, Ue = -1;
      for (let je = 0; je < me; je += 1)
        for (let At = 0; At < se; At += 1)
          be[(je * se + At) * 4 + 3] <= Le || (At < xe && (xe = At), je < Ke && (Ke = je), At > Be && (Be = At), je > Ue && (Ue = je));
      return Be < xe || Ue < Ke ? null : { minX: xe, minY: Ke, maxX: Be, maxY: Ue };
    }
    const F = C(p, l.width, l.height, 8);
    if (!F) return !1;
    function X(be, se) {
      return !be || !se ? !1 : !(be.maxX < se.minX || se.maxX < be.minX || be.maxY < se.minY || se.maxY < be.minY);
    }
    function H(be, se) {
      const me = Ci((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "", "paint", se);
      if (!me) return null;
      const Le = me.centerUv.u - me.halfW, xe = me.centerUv.u + me.halfW, Ke = me.centerUv.v - me.halfH, Be = me.centerUv.v + me.halfH, Ue = l.width, je = l.height;
      return {
        minX: Math.floor((Le % 1 + 1) % 1 * Ue),
        maxX: Math.ceil((xe % 1 + 1) % 1 * Ue),
        minY: Math.floor(Z(Ke, 0, 1) * je),
        maxY: Math.ceil(Z(Be, 0, 1) * je),
        wraps: xe - Le >= 1 || Le < 0 || xe > 1
      };
    }
    function J(be) {
      const se = (be == null ? void 0 : be.bbox) || null;
      if (!se) return null;
      const me = (be == null ? void 0 : be.transform) || {}, Le = l.width, xe = l.height, Ke = Number(se.u0 || 0) + Number(me.du || 0), Be = Number(se.u1 || 0) + Number(me.du || 0), Ue = Number(se.v0 || 0) + Number(me.dv || 0), je = Number(se.v1 || 0) + Number(me.dv || 0);
      return {
        minX: Math.floor((Ke % 1 + 1) % 1 * Le),
        maxX: Math.ceil((Be % 1 + 1) % 1 * Le),
        minY: Math.floor(Z(Ue, 0, 1) * xe),
        maxY: Math.ceil(Z(je, 0, 1) * xe),
        wraps: Be - Ke >= 1 || Ke < 0 || Be > 1
      };
    }
    function oe(be) {
      return be ? be.wraps ? X(F, { minX: 0, maxX: be.maxX, minY: be.minY, maxY: be.maxY }) || X(F, { minX: be.minX, maxX: l.width - 1, minY: be.minY, maxY: be.maxY }) : X(F, be) : !0;
    }
    function ce(be) {
      if (!be) return { touched: !1, canvas: null };
      const se = Ha(l.width, l.height, { readback: !0 });
      se.ctx.drawImage(be, 0, 0);
      const me = se.ctx.getImageData(0, 0, l.width, l.height);
      se.ctx.save(), se.ctx.globalCompositeOperation = "destination-out", se.ctx.drawImage(f.canvas, 0, 0), se.ctx.restore();
      const Le = se.ctx.getImageData(0, 0, l.width, l.height);
      for (let xe = 0; xe < l.width * l.height; xe += 1) {
        if (p[xe * 4 + 3] <= 8) continue;
        const Be = me.data[xe * 4 + 3], Ue = Le.data[xe * 4 + 3];
        if (Be > Ue)
          return { touched: !0, canvas: se.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ye(be, se, me) {
      const Le = Number(me == null ? void 0 : me.z_index), xe = m_(be, se, me).map((Ke, Be) => ({
        ...Ke,
        z_index: Number.isFinite(Le) ? Le + Be * 1e-3 : M + Be * 1e-3
      }));
      return xe.length && (M = Math.max(M, ...xe.map((Ke) => Number((Ke == null ? void 0 : Ke.z_index) || 0))) + 1), xe;
    }
    for (const be of Sn()) {
      const se = String((be == null ? void 0 : be.actionGroupId) || (be == null ? void 0 : be.id) || "").trim();
      if (!se) continue;
      const me = kr(se, "paint");
      if (!oe(H(be, me))) {
        w.push(be), g.push(...me);
        continue;
      }
      const Le = ((qe = (Ye = h.paintEngine) == null ? void 0 : Ye.getGroupTarget) == null ? void 0 : qe.call(Ye, se)) || null, xe = ((lt = Le == null ? void 0 : Le.committedPaint) == null ? void 0 : lt.canvas) || null;
      if (!xe) {
        w.push(be), g.push(...me);
        continue;
      }
      const Ke = ce(xe);
      if (!Ke.touched || !Ke.canvas) {
        w.push(be), g.push(...me);
        continue;
      }
      I = !0;
      const Be = ye(Ke.canvas, "paint", m.get(se) || be || {});
      S.push(...Be);
    }
    for (const be of Gn().filter((se) => String((se == null ? void 0 : se.layerKind) || "paint") === "paint")) {
      if (!oe(J(be))) {
        S.push(be);
        continue;
      }
      const se = qp(be, null);
      if (!se) {
        S.push(be);
        continue;
      }
      const me = ce(se);
      if (!me.touched || !me.canvas) {
        S.push(be);
        continue;
      }
      I = !0;
      const Le = ye(me.canvas, "paint", be);
      S.push(...Le);
    }
    return I ? (_.painting.paint.strokes = g, _.painting.groups = w.sort((be, se) => Number((be == null ? void 0 : be.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)), _.painting.raster_objects = S.sort((be, se) => Number((be == null ? void 0 : be.z_index) || 0) - Number((se == null ? void 0 : se.z_index) || 0)), Da({ preservePanelValues: !1 }), !0) : !1;
  }
  function ww(i) {
    var g, w, S, I, M;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.rawPoints) || ((I = (S = i.stroke) == null ? void 0 : S.geometry) == null ? void 0 : I.points) || []).length >= 1) {
      Ou(i);
      const C = Qn();
      C && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(C) : h.paintEngine.commitActiveStroke(i.stroke, C)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Bh(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = Qn();
    m && h.paintEngine.beginStroke(p, m);
  }
  function xw(i) {
    var g, w;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      Ou(i);
      const S = Qn();
      S && h.paintEngine.commitActiveStroke(i.stroke, S), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Uh(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = Qn();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Ou(i) {
    var m, g, w, S;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = ku(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), _w(i);
    const f = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && kp((w = i.stroke) == null ? void 0 : w.actionGroupId), Bo(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = ku(p, i.stroke.targetSpace, !0), f && kp((S = i.stroke) == null ? void 0 : S.actionGroupId), Bo(i.layerKind).push(i.stroke), !0);
  }
  function Yh(i) {
    var l;
    if (G && h.mode === "frame") {
      const f = ze(), p = pn(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const g = Pr(i, f, performance.now()), w = g ? Ho(g) : null;
      if (w)
        for (const I of xu()) {
          if (!St(I)) continue;
          const M = Ba(I, w);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const C = tn(I);
            if (C != null && C.visible) return { item: I, geom: C };
          }
        }
      const S = Jc(!1).slice().sort((I, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((I == null ? void 0 : I.z_index) || 0));
      for (const I of S) {
        if (I.type === "strokeGroup") {
          const F = Lo(Oa("paint", I.actionGroupId || I.id || ""));
          if (!F) continue;
          const X = tn(F);
          if (!(X != null && X.visible)) continue;
          const H = Array.isArray(X.strokePaths) ? X.strokePaths : [];
          for (const J of H) {
            const oe = Array.isArray(J == null ? void 0 : J.points) ? J.points : [];
            if (!oe.length) continue;
            if (J.closed && oe.length >= 3 && di(i, oe)) return { item: F, geom: X };
            const ce = Math.max(8, Number((J == null ? void 0 : J.lineWidth) || 0) * 0.5 + 6);
            for (let ye = 0; ye < oe.length - 1; ye += 1)
              if (Mf(i, oe[ye], oe[ye + 1]) <= ce * ce) return { item: F, geom: X };
            if (oe.length === 1 && $i(i, oe[0]) <= ce * ce) return { item: F, geom: X };
          }
          continue;
        }
        if (I.type === "rasterObject") {
          const F = Do(Ea(((l = I.item) == null ? void 0 : l.id) || I.id || ""));
          if (!F) continue;
          const X = tn(F);
          if (Xp(F, X, i, g)) return { item: F, geom: X };
          continue;
        }
        const M = I.item;
        if (!M || !St(M) || !w) continue;
        const C = Ba(M, w);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const F = tn(M);
          if (F != null && F.visible) return { item: M, geom: F };
        }
      }
      return null;
    }
    const s = [
      ...Jc(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? Lo(Oa("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? Do(Ea(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...G ? xu().filter((f) => yn(f)) : []
    ];
    for (const f of s) {
      if (dn(f)) {
        const m = tn(f);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const w of g) {
          const S = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!S.length) continue;
          if (w.closed && S.length >= 3 && di(i, S)) return { item: f, geom: m };
          const I = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < S.length - 1; M += 1)
            if (Mf(i, S[M], S[M + 1]) <= I * I) return { item: f, geom: m };
          if (S.length === 1 && $i(i, S[0]) <= I * I) return { item: f, geom: m };
        }
        continue;
      }
      if (kn(f)) {
        const m = tn(f);
        if (!(m != null && m.visible)) continue;
        if (Xp(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = tn(f);
      if (p.visible && di(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function Qa(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (St(l)) return cd(i, s);
    if (i.kind === "strokeGroup") {
      const p = i.corners.findIndex((g) => $i(g, s) <= 121);
      if (p >= 0) {
        const g = i.corners[p], w = g.x - i.center.x, S = g.y - i.center.y, I = w * S >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: I };
      }
      const m = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const g of m) {
        const w = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
        if (g.closed && w.length >= 3 && di(s, w)) return { kind: "move", cursor: "default" };
        const S = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
        for (let I = 0; I < w.length - 1; I += 1)
          if (Mf(s, w[I], w[I + 1]) <= S * S) return { kind: "move", cursor: "default" };
      }
      return di(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const p = i.corners.findIndex((m) => $i(m, s) <= 121);
      if (p >= 0) {
        const m = i.corners[p], g = m.x - i.center.x, w = m.y - i.center.y, S = g * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: p, cursor: S };
      }
      return di(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if ((t === "cutout" || yn(l)) && Array.isArray(i.edgeMidpoints)) {
      const p = i.edgeMidpoints.find((m) => $i(m, s) <= 169);
      if (p) {
        const m = p.edge === "left" || p.edge === "right";
        return { kind: m ? "scale_x" : "scale_y", cursor: m ? "ew-resize" : "ns-resize", edge: p.edge, mid: p };
      }
    }
    const f = i.corners.findIndex((p) => $i(p, s) <= 121);
    if (f >= 0) {
      const p = i.corners[f], m = p.x - i.center.x, g = p.y - i.center.y, w = m * g >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: f, cursor: w };
    }
    return $i(i.rotateHandle, s) <= 144 ? { kind: "rotate", cursor: "grab" } : di(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
  }
  function Xh(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function Sw(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function kw(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => Sw(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!di({ x: l, y: f }, s.corners);
  }
  function mt(i) {
    if (gw(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? Tt("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? Tt("grabbing") : h.interaction.kind === "space_pan" || h.interaction.kind === "frame_pan" ? Tt("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "frame_orbit" || h.interaction.kind === "world_gizmo" || h.interaction.kind === "roll_frame" ? Tt("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? Tt("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? Tt(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? Tt("grabbing") : Tt("default");
      return;
    }
    if (Wh()) {
      Tt("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        Tt(sE);
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
    const s = It(), l = s ? tn(s) : null, f = s ? _n(s) : !1, p = f ? { kind: "none", cursor: "default" } : Qa(l, i, s);
    if (!f && p.kind !== "none") {
      Tt(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && Yh(i)) {
      Tt("default");
      return;
    }
    Tt(h.mode === "pano" ? "grab" : "default");
  }
  function Ge() {
    if (!ge) return;
    if (ve = !1, h.mode === "frame") {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (h.worldSelectedId || ur() && cr()) {
      const p = Mw();
      ve = p.visible, qh(p);
      return;
    }
    const i = It(), s = lr();
    if (!i && s.length === 0 || h.interaction) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Js(), f = GA({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? Ta(s) : tn(i),
      allLocked: tu(s),
      anyLocked: s.some((p) => _n(p)),
      selectedLocked: _n(i),
      activeAspect: yn(i) && Ra() ? va : mi(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Xt,
      isStickerHidden: Ro,
      canRestoreSelectedToInitial: X1,
      iconSet: ke,
      cameraShot: K,
      cameraDeletable: L,
      erpChoice: L,
      coverage: _.coverage
    });
    qh(f);
  }
  function Mw() {
    const i = Zi() && !h.interaction ? Zn().space : null;
    if (!(i != null && i.gizmo)) return { visible: !1 };
    const s = es(), l = i.stickers.find((g) => g.id === h.worldSelectedId), p = (l ? op(l) : [i.gizmo.transform.position]).map((g) => $s(s, g, O.width, O.height)).filter(Boolean), m = gN(s, i.gizmo.transform.position, i.gizmo.mode, O.width, O.height);
    return KA({ corners: p, gizmoBox: m, gizmoMode: i.gizmo.mode, camera: ur(), deletable: L && ur() });
  }
  function qh(i) {
    var m, g;
    if (!i.visible) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = (w, S) => WA(i.anchor, w, S, O.width, O.height), l = Math.max(1, Number(((m = h.menuSize) == null ? void 0 : m.w) || 220)), f = Math.max(1, Number(((g = h.menuSize) == null ? void 0 : g.h) || 40)), p = s(l, f);
    if (!p) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    P.selectionMenu = {
      visible: !0,
      left: p.left,
      top: p.top,
      items: i.items
    }, requestAnimationFrame(() => {
      if (!ge || P.selectionMenu.visible !== !0) return;
      const w = ge.getBoundingClientRect(), S = Math.round(Number((w == null ? void 0 : w.width) || 0)) || 220, I = Math.round(Number((w == null ? void 0 : w.height) || 0)) || 40;
      h.menuSize = { w: S, h: I, measured: !0 };
      const M = s(S, I);
      M && (P.selectionMenu.left = M.left, P.selectionMenu.top = M.top);
    });
  }
  function to() {
    Yt.timer && (clearTimeout(Yt.timer), Yt.timer = 0), Yt.target = null, P.tooltip.visible = !1;
  }
  function Nw(i) {
    if (!Me || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    P.tooltip.text = s, P.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var J, oe;
      if (Yt.target !== l || !Me || !(l != null && l.isConnected)) return;
      const f = ee.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, g = 12, w = Math.round(Number(((J = Me.getBoundingClientRect()) == null ? void 0 : J.width) || 0)) || 100, S = Math.round(Number(((oe = Me.getBoundingClientRect()) == null ? void 0 : oe.height) || 0)) || 24, I = !!l.closest(".pano-floating-left"), M = !!l.closest(".pano-frame-rail"), C = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let F = "", X = p.left - f.left + p.width * 0.5 - w * 0.5, H = p.top - f.top - S - g;
      if (l.closest(".pano-floating-top") && (H = p.bottom - f.top + g), I)
        F = "tool-rail", X = p.right - f.left + 10, H = p.top - f.top + p.height * 0.5 - S * 0.5, X = Z(X, m, Math.max(m, f.width - w - m)), H = Z(H, m, Math.max(m, f.height - S - m));
      else if (M)
        F = "frame-rail", X = p.left - f.left - w - 10, H = p.top - f.top + p.height * 0.5 - S * 0.5, X = Z(X, m, Math.max(m, f.width - w - m)), H = Z(H, m, Math.max(m, f.height - S - m));
      else if (C) {
        F = "footer";
        const ce = l.closest(".pano-paint-footer"), ye = ce ? ce.getBoundingClientRect() : p;
        X = ye.left - f.left + ye.width * 0.5 - w * 0.5, H = ye.bottom - f.top + 5, X = Z(X, m, Math.max(m, f.width - w - m)), H = Math.max(m, H);
      }
      X = Z(X, m, Math.max(m, f.width - w - m)), H = Math.max(m, H), P.tooltip.left = X, P.tooltip.top = H, P.tooltip.variant = F, P.tooltip.visible = !0;
    });
  }
  const ln = Gd({
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
    getUnwrapRect: Ti,
    onInteraction: () => {
      Q.backgroundDirty = !0, Q.dirty = !0;
    }
  });
  function Pw(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += Oy(s, i.lastAngle), i.lastAngle = s;
    const f = Ey(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f, p.displayValue = Qo(f), p.fillPct = (f + 180) / 360 * 100), ai(), Eu(i), ae({ localOnly: !0 });
  }
  function Aw(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = Qb(i.rollGesture, s, l);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = P.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = Qo(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), ai(), Eu(i), ae({ localOnly: !0 });
  }
  const Jh = (i, s) => {
    const l = Li(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Eu(i) {
    var g, w;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Yt.timer && (clearTimeout(Yt.timer), Yt.timer = 0), Yt.target = null;
    const s = pn(i.shot), l = (g = O.getBoundingClientRect) == null ? void 0 : g.call(O), f = (w = ee.getBoundingClientRect) == null ? void 0 : w.call(ee);
    if (!s || !l || !f || O.width <= 0 || O.height <= 0) return;
    const p = l.width / O.width, m = l.height / O.height;
    P.tooltip.text = `${Qo(i.shot.roll_deg)}°`, P.tooltip.left = l.left - f.left + (s.x + s.w * 0.5) * p, P.tooltip.top = l.top - f.top + (s.y + s.h * 0.5) * m + 12, P.tooltip.variant = "roll", P.tooltip.visible = !0;
  }
  W == null || W.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = ze();
    if (!s || s.locked === !0) return;
    const l = pn(s);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Jh(i, f);
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
    }, (m = W.setPointerCapture) == null || m.call(W, i.pointerId), i.preventDefault(), ai(), Eu(h.interaction), ae({ localOnly: !0 });
  }), W == null || W.addEventListener("pointermove", (i) => {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || Pw(
      h.interaction,
      Jh(i, h.interaction.center),
      i
    );
  });
  const Cw = () => {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (Qe(), it(), Ve()), h.interaction = null, to(), ii(), ai(), ae());
  };
  W == null || W.addEventListener("pointerup", Cw), W == null || W.addEventListener("pointercancel", () => Za()), W == null || W.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && Za();
  }), W == null || W.addEventListener("dblclick", (i) => {
    const s = h.mode === "frame" && !r ? ze() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, Qe(), it(), Ve(), ai(), ae(), i.preventDefault());
  }), O.onpointerdown = (i) => {
    We.selection && (We.selection = null, si());
    const s = Li(i);
    rn = s, dl(s, !0), Ca(), ln.state.inertia.active = !1, ln.state.inertia.vx = 0, ln.state.inertia.vy = 0;
    const l = cr(), f = Iu(), p = l || f ? J2(uu(), i) : null;
    if (f && p) {
      i.preventDefault(), p === "look" ? Gh(s, i.pointerId) : uw(p, s, i.pointerId);
      return;
    }
    if (p === "look") {
      i.preventDefault();
      const M = ul(i);
      h.interaction = { kind: "view", last: M, lastTs: performance.now() }, ln.startDrag(M.x, M.y, i.pointerId, performance.now()), mt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (p) {
      i.preventDefault(), Up(p, s, i.pointerId);
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
        const M = h.mode === "unwrap" ? s : ul(i);
        h.interaction = { kind: "view", last: M, lastTs: performance.now() }, ln.startDrag(M.x, M.y, i.pointerId, performance.now());
      }
      mt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const M = ze(), C = pn(M);
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
      Gh(s, i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && em(i, s);
      return;
    }
    if (Oe && !Oe.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (Th() || Cu())) {
      wn();
      const M = h.primaryTool === "mask" ? "mask" : "paint", C = h.primaryTool === "mask" ? h.maskTool : h.paintTool, F = h.mode === "frame" && Cu() ? ze() : null, X = { kind: "ERP_GLOBAL" }, H = F ? Pr(s, F, performance.now()) : Nr(s, performance.now());
      if (!H) {
        mt(s);
        return;
      }
      h.interaction = {
        kind: C === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: M,
        _livePreviewToken: ea("live"),
        stroke: C === "lasso_fill" ? Uh(M, C, [H], X) : Bh(M, C, [H], X)
      }, zo();
      const J = Qn();
      if (J)
        if (h.paintEngine.beginStroke(h.interaction.stroke, J), h.interaction.kind === "paint_stroke") {
          const oe = h.paintEngine.ensureTarget(J), ce = Number((H == null ? void 0 : H.u) ?? (H == null ? void 0 : H.x) ?? 0), ye = Number((H == null ? void 0 : H.v) ?? (H == null ? void 0 : H.y) ?? 0);
          h.paintEngine.appendStrokePoint(oe, ce, ye, h.interaction.stroke);
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
    if (h.primaryTool === "cursor" && Dr() && cr() && Lv(i, s) || h.primaryTool === "cursor" && A && Zi() && Iw(i, s)) return;
    if (m.length > 1 && (w != null && w.visible)) {
      if ((m.some((C) => _n(C)) ? { kind: "none" } : Qa(w, s)).kind === "move") {
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
          strokeSnapshots: m.filter((C) => dn(C)).map((C) => ({
            id: String(C.actionGroupId || C.id || ""),
            layerKind: String(C.layerKind || "paint"),
            snapshot: Pn(kr(C.actionGroupId, C.layerKind)),
            frameSnapshot: Pn(Ci(C.actionGroupId, C.layerKind)),
            center: (() => {
              var X, H;
              const F = tn(C);
              return F != null && F.visible ? { x: Number(((X = F.center) == null ? void 0 : X.x) || 0), y: Number(((H = F.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: eu(C.actionGroupId, C.layerKind)
          })),
          rasterSnapshots: m.filter((C) => kn(C)).map((C) => ({
            id: gn(C.rasterObjectId || C.id || ""),
            snapshot: Pn(Gn().find((F) => String((F == null ? void 0 : F.id) || "") === gn(C.rasterObjectId || C.id || ""))),
            center: (() => {
              var X, H;
              const F = tn(C);
              return F != null && F.visible ? { x: Number(((X = F.center) == null ? void 0 : X.x) || 0), y: Number(((H = F.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: th(C)
          }))
        }, mt(s), O.setPointerCapture(i.pointerId);
        return;
      }
    } else if (g && (w != null && w.visible)) {
      const M = _n(g) ? { kind: "none" } : Qa(w, s, g);
      if (M.kind === "scale") {
        h.interaction = dn(g) ? {
          kind: "scale_stroke_group",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: Pn(kr(g.actionGroupId, g.layerKind)),
          frameSnapshot: Pn(Ci(g.actionGroupId, g.layerKind)),
          cursor: M.cursor
        } : kn(g) ? {
          kind: "scale_raster_object",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: Pn(Gn().find((C) => String((C == null ? void 0 : C.id) || "") === gn(g.rasterObjectId || g.id || ""))),
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
        h.interaction = dn(g) ? {
          kind: "rotate_stroke_group",
          item: g,
          center: w.center,
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x),
          snapshot: Pn(kr(g.actionGroupId, g.layerKind)),
          frameSnapshot: Pn(Ci(g.actionGroupId, g.layerKind))
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
        if (dn(g)) {
          const C = h.mode === "frame" ? (() => {
            const F = ze();
            return F ? Pr(s, F, performance.now()) : null;
          })() : Nr(s, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: g,
            startUv: C,
            snapshot: Pn(kr(g.actionGroupId, g.layerKind)),
            frameSnapshot: Pn(Ci(g.actionGroupId, g.layerKind))
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
            snapshot: Pn(Gn().find((F) => String((F == null ? void 0 : F.id) || "") === gn(g.rasterObjectId || g.id || "")))
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
    const S = Yh(s);
    if (S) {
      const M = h.selectedId !== S.item.id;
      if (M && h.selectedId && (Qe(), Vn()), Rn(S.item), G && M && (h.cutoutAspectOpen = !1), M && Ve(), Ge(), ae(), _n(S.item)) {
        mt(s);
        return;
      }
      h.interaction = {
        kind: dn(S.item) ? "move_stroke_group" : kn(S.item) ? "move_raster_object" : "move",
        item: S.item,
        offset: { x: s.x - S.geom.center.x, y: s.y - S.geom.center.y },
        startUv: dn(S.item) || kn(S.item) ? h.mode === "frame" ? (() => {
          const C = ze();
          return C ? Pr(s, C, performance.now()) : null;
        })() : Nr(s, performance.now()) : null,
        snapshot: dn(S.item) ? Pn(kr(S.item.actionGroupId, S.item.layerKind)) : kn(S.item) ? Pn(Gn().find((C) => String((C == null ? void 0 : C.id) || "") === gn(S.item.rasterObjectId || S.item.id || ""))) : null,
        frameSnapshot: dn(S.item) ? Pn(Ci(S.item.actionGroupId, S.item.layerKind)) : null
      }, mt(s), O.setPointerCapture(i.pointerId);
      return;
    }
    const I = !!h.selectedId;
    I && (Qe(), Vn()), Da(), I && Ve(), Ge(), ae(), h.mode === "pano" && em(i, s);
  };
  function es() {
    return sf(bn(), O.width, O.height, Lr());
  }
  function no(i, s) {
    return Te.gizmoPointer(i, es(), s.x, s.y, O.width, O.height);
  }
  function Iw(i, s) {
    var w;
    const l = (w = Zn().space) == null ? void 0 : w.gizmo;
    if (l && no("hover", s) !== null && no("down", s))
      return h.interaction = {
        kind: "world_gizmo",
        id: h.worldSelectedId,
        mode: l.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: l.transform,
        base: So(La(), h.frame),
        changed: !1
      }, O.setPointerCapture(i.pointerId), mt(s), !0;
    const f = lr(), p = It(), m = f.length > 1 ? f.some((S) => _n(S)) ? "none" : Qa(Ta(f), s).kind : p && !_n(p) ? Qa(tn(p), s, p).kind : "none";
    if (m !== "none" && m !== "move") return !1;
    const g = Te.pickSticker(es(), s.x, s.y, O.width, O.height);
    return _.stickers.some((S) => S.id === g && S.placement === "world") ? (h.worldSelectedId !== g && (h.selectedId && (Qe(), Vn()), lu(g), Ve(), Ge(), Tr(), ae()), h.interaction = { kind: "world_select" }, O.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Zh(i) {
    var f;
    const l = !!(h.worldSelectedId || ur()) && h.primaryTool === "cursor" && Zi() && !!((f = Zn().space) != null && f.gizmo) ? no("hover", i) : null;
    l !== h.gizmoAxis && (h.gizmoAxis = l, Q.backgroundDirty = !0, ae({ localOnly: !0 }));
  }
  function Ow(i, s) {
    const l = no("move", s);
    if (l && i.camera) {
      for (const [p, m] of Object.entries(Ng(i.mode, i.base, i.start, l))) On(_.camera, p, h.frame, m);
      fr(), i.changed = !0, Ve(), ae({ localOnly: !0 });
      return;
    }
    const f = _.stickers.find((p) => p.id === i.id);
    !l || !f || (HM(f, h.frame, Ng(i.mode, i.base, i.start, l)), i.changed = !0, $t(), Ve(), ae({ localOnly: !0 }));
  }
  function Qh(i) {
    h.interaction = null, h.gizmoAxis = null, i.kind === "world_gizmo" && (no("up", h.pointerPos), Q.backgroundDirty = !0, i.changed && (Qe(), it(), Ve())), mt(h.pointerPos), ae();
  }
  function em(i, s) {
    if (cr()) {
      const f = uu().emptyLeft;
      f && Up(f, s, i.pointerId);
      return;
    }
    const l = ul(i);
    h.interaction = { kind: "view", last: l, lastTs: performance.now() }, ln.startDrag(l.x, l.y, i.pointerId, performance.now()), mt(s), O.setPointerCapture(i.pointerId);
  }
  function Ew(i, s) {
    if (!k || !an.playing) return;
    if (an.stop(), i.kind === "frame_orbit" || i.kind === "frame_pan") {
      const p = qa();
      if (!p) return;
      const m = Ja(p), g = zh(p, m, s);
      i.kind === "frame_orbit" ? i.pivot = g : i.depth = ha(m, g);
      return;
    }
    if (i.kind === "world_gizmo") {
      const p = _.stickers.find((m) => m.id === i.id);
      i.camera ? i.base = Qi() : p && (i.base = So(p, h.frame));
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
    var f, p, m, g, w, S, I, M, C, F, X, H, J, oe, ce, ye, le, Ne, Ye, qe, lt, be;
    const s = Li(i);
    if (dl(s, !0), !h.interaction) {
      Zh(s), mt(s);
      return;
    }
    mt(s);
    const l = h.interaction;
    if (rn && (s.x !== rn.x || s.y !== rn.y)) {
      const se = rn;
      rn = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(l.kind) || Ew(l, se);
    }
    if (l.kind !== "world_select") {
      if (l.kind === "world_gizmo") {
        Ow(l, s);
        return;
      }
      if (l.kind === "paint_stroke") {
        const se = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let me = !1;
        se.forEach((Le) => {
          const xe = Li(Le);
          if (h.mode === "frame") {
            const Ke = ze(), Be = Ke ? pn(Ke) : null;
            if (Be) {
              const Ue = (xe.x - Be.x) / Math.max(1, Be.w), je = (xe.y - Be.y) / Math.max(1, Be.h);
              if (!(Ue >= 0 && Ue <= 1 && je >= 0 && je <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, ww(l));
            }
          }
          bw(l, xe, performance.now()) && (me = !0);
        }), me && ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "paint_lasso_fill") {
        const se = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let me = !1;
        if (se.forEach((Le) => {
          const xe = Li(Le);
          if (h.mode === "frame") {
            const Ke = ze(), Be = Ke ? pn(Ke) : null;
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
        }), me) {
          const Le = Qn();
          Le && h.paintEngine.updateActiveStroke(l.stroke, Le), ae({ localOnly: !0 });
        }
        return;
      }
      if (l.kind === "view") {
        const se = performance.now(), me = h.mode === "unwrap" ? s : ul(i);
        ln.moveDrag(me.x, me.y, h.mode === "unwrap" ? "unwrap" : "pano", se), l.lastTs = se, l.last = me, ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "frame_pan" || l.kind === "frame_orbit") {
        fw(l, s);
        return;
      }
      if (l.kind === "space_pan" || l.kind === "space_orbit") {
        const se = bn();
        Kp(l.kind === "space_pan" ? wg(se, s.x - l.last.x, s.y - l.last.y, O.width, O.height, l.depth) : _g(se, s.x - l.last.x, s.y - l.last.y, O.height, l.pivot)), l.last = s;
        return;
      }
      if (l.kind === "pan_frame") {
        const se = fl(l.shot);
        if (!se || !l.shot) return;
        const me = s.x - l.last.x, Le = s.y - l.last.y, xe = e1(l.shot, {
          dx: me,
          dy: Le,
          focalPx: se.focalPx,
          invertX: ((f = _.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((p = _.ui_settings) == null ? void 0 : p.invert_view_y) === !0
        });
        l.shot.yaw_deg = xe.yaw_deg, l.shot.pitch_deg = xe.pitch_deg, l.changed = l.changed || Math.abs(me) > 0 || Math.abs(Le) > 0, l.last = s, ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "roll_frame") {
        if (l.source === "knob") return;
        Aw(l, s, i);
        return;
      }
      if (l.kind === "move") {
        const se = s.x - l.offset.x, me = s.y - l.offset.y;
        if (h.mode === "frame" && G) {
          const Le = ze(), xe = pn(Le);
          if (!Le || !xe) return;
          const Ke = {
            x: Z((se - xe.x) / Math.max(1, xe.w), 0, 1),
            y: Z((me - xe.y) / Math.max(1, xe.h), 0, 1)
          }, Be = Su(Le, Ke);
          if (!Be) return;
          const Ue = Il(Be);
          Sr(l.item, { yaw_deg: Ue.yaw, pitch_deg: Ue.pitch });
        } else if (h.mode === "unwrap") {
          const Le = Ti(), xe = Z((se - Le.x) / Math.max(Le.w, 1), 0, 1), Ke = Z((me - Le.y) / Math.max(Le.h, 1), 0, 1);
          Sr(l.item, { yaw_deg: Ht(xe * 360 - 180), pitch_deg: Z(90 - Ke * 180, -90, 90) });
        } else {
          const Le = hu(se, me), xe = Il(Le);
          Sr(l.item, { yaw_deg: xe.yaw, pitch_deg: xe.pitch });
        }
        St(l.item) && $t(), ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "move_stroke_group") {
        const se = h.mode === "frame" ? (() => {
          const xe = ze();
          return xe ? Pr(s, xe, performance.now()) : null;
        })() : Nr(s, performance.now());
        if (!se || !l.startUv) return;
        const me = sr(Number(se.u || 0), Number(l.startUv.u || 0)), Le = Number(se.v || 0) - Number(l.startUv.v || 0);
        Np((m = l.item) == null ? void 0 : m.actionGroupId, me, Le, l.snapshot, (g = l.item) == null ? void 0 : g.layerKind, l.frameSnapshot) && (Mr({ rebuildPaintEngine: !1 }), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_raster_object") {
        const se = h.mode === "frame" ? (() => {
          const xe = ze();
          return xe ? Pr(s, xe, performance.now()) : null;
        })() : Nr(s, performance.now());
        if (!se || !l.startUv) return;
        const me = sr(Number(se.u || 0), Number(l.startUv.u || 0)), Le = Number(se.v || 0) - Number(l.startUv.v || 0);
        Ap(((w = l.item) == null ? void 0 : w.rasterObjectId) || ((S = l.item) == null ? void 0 : S.id) || "", me, Le, l.snapshot) && (Go(), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_raster_object") {
        const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        $1(((I = l.item) == null ? void 0 : I.rasterObjectId) || ((M = l.item) == null ? void 0 : M.id) || "", me, l.snapshot) && (Go(), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_multi") {
        const se = s.x - Number(((C = l.offset) == null ? void 0 : C.x) || 0), me = s.y - Number(((F = l.offset) == null ? void 0 : F.y) || 0);
        let Le = !1, xe = !1, Ke = !1;
        const Be = se - Number(((X = l.startCenter) == null ? void 0 : X.x) || se), Ue = me - Number(((H = l.startCenter) == null ? void 0 : H.y) || me);
        for (const je of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
          const At = (t === "cutout" ? Qc() : Fr()).find((zt) => String((zt == null ? void 0 : zt.id) || "") === String(je.id || ""));
          if (!At || !St(At)) continue;
          const Nn = {
            x: Number(((J = je.center) == null ? void 0 : J.x) || 0) + Be,
            y: Number(((oe = je.center) == null ? void 0 : oe.y) || 0) + Ue
          };
          if (h.mode === "frame" && G) {
            const zt = ze(), Wt = pn(zt);
            if (!zt || !Wt) continue;
            const Vr = {
              x: Z((Nn.x - Wt.x) / Math.max(1, Wt.w), 0, 1),
              y: Z((Nn.y - Wt.y) / Math.max(1, Wt.h), 0, 1)
            }, ts = Su(zt, Vr);
            if (!ts) continue;
            const wm = Il(ts);
            Sr(At, { yaw_deg: wm.yaw, pitch_deg: wm.pitch });
          } else if (h.mode === "unwrap") {
            const zt = Ti(), Wt = Z((Nn.x - zt.x) / Math.max(zt.w, 1), 0, 1), Vr = Z((Nn.y - zt.y) / Math.max(zt.h, 1), 0, 1);
            Sr(At, { yaw_deg: Ht(Wt * 360 - 180), pitch_deg: Z(90 - Vr * 180, -90, 90) });
          } else {
            const zt = hu(Nn.x, Nn.y), Wt = Il(zt);
            Sr(At, { yaw_deg: Wt.yaw, pitch_deg: Wt.pitch });
          }
          Le = !0;
        }
        for (const je of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
          const At = {
            x: Number(((ce = je.center) == null ? void 0 : ce.x) || 0) + Be,
            y: Number(((ye = je.center) == null ? void 0 : ye.y) || 0) + Ue
          }, Nn = h.mode === "frame" ? (() => {
            const Wt = ze();
            return Wt ? Pr(At, Wt, performance.now()) : null;
          })() : Nr(At, performance.now()), zt = je.centerUv || null;
          if (Nn && zt) {
            const Wt = sr(Number(Nn.u || 0), Number(zt.u || 0)), Vr = Number(Nn.v || 0) - Number(zt.v || 0);
            Np(je.id, Wt, Vr, je.snapshot, je.layerKind, je.frameSnapshot) && (Le = !0, xe = !0);
          }
        }
        for (const je of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
          const At = {
            x: Number(((le = je.center) == null ? void 0 : le.x) || 0) + Be,
            y: Number(((Ne = je.center) == null ? void 0 : Ne.y) || 0) + Ue
          }, Nn = h.mode === "frame" ? (() => {
            const Wt = ze();
            return Wt ? Pr(At, Wt, performance.now()) : null;
          })() : Nr(At, performance.now()), zt = je.centerUv || null;
          if (Nn && zt) {
            const Wt = sr(Number(Nn.u || 0), Number(zt.u || 0)), Vr = Number(Nn.v || 0) - Number(zt.v || 0);
            Ap(je.id, Wt, Vr, je.snapshot) && (Le = !0, Ke = !0);
          }
        }
        Le && (xe ? Mr({ rebuildPaintEngine: !1 }) : Ke ? Go() : $t(), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_stroke_group") {
        const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        Pp((Ye = l.item) == null ? void 0 : Ye.actionGroupId, me, 0, l.snapshot, (qe = l.item) == null ? void 0 : qe.layerKind, l.frameSnapshot) && (Mr({ rebuildPaintEngine: !1 }), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "rotate_stroke_group") {
        let se = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * mo;
        i.shiftKey && (se = Math.round(se / 45) * 45), Pp((lt = l.item) == null ? void 0 : lt.actionGroupId, 1, se, l.snapshot, (be = l.item) == null ? void 0 : be.layerKind, l.frameSnapshot) && (Mr({ rebuildPaintEngine: !1 }), ae({ localOnly: !0 }));
        return;
      }
      if (l.kind === "marquee_select") {
        l.current = s, ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale") {
        const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Sr(l.item, { hFOV_deg: Z(l.startHFOV * me, 1, 179), vFOV_deg: Z(l.startVFOV * me, 1, 179) }), ar(l.item) || (l.item.aspect_id = ho(l.item)), St(l.item) && $t(), ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_x") {
        const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Sr(l.item, { hFOV_deg: Z(l.startHFOV * me, 1, 179) }), ar(l.item) || (l.item.aspect_id = ho(l.item)), St(l.item) && $t(), ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_y") {
        const me = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Sr(l.item, { vFOV_deg: Z(l.startVFOV * me, 1, 179) }), ar(l.item) || (l.item.aspect_id = ho(l.item)), St(l.item) && $t(), ae({ localOnly: !0 });
        return;
      }
      if (l.kind === "rotate") {
        let me = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * mo, Le = l.startRot - me;
        i.shiftKey && (Le = Math.round(Le / 45) * 45), Sr(l.item, { [St(l.item) ? "rot_deg" : "roll_deg"]: Le }), St(l.item) && $t(), ae({ localOnly: !0 });
      }
    }
  }, O.onpointerup = () => {
    var s, l, f, p, m, g, w;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, mt(h.pointerPos), Ge();
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        Qh(i);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = h.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        zo();
        const S = Ou(h.interaction), I = !!h.interaction._hasCommittedSegments;
        if (S || I) {
          Mr();
          const M = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (M) {
            const F = Sn().find((X) => String((X == null ? void 0 : X.actionGroupId) || "") === M);
            F && (F.frame = null);
          }
          const C = Qn();
          C && (S ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(C), dh()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, C) : h.paintEngine.cancelActiveStroke(C)), Qe(), Vn(), Ve(), Ge(), e.setDirtyCanvas(!0, !0), ae();
        } else {
          const M = Qn();
          M && h.paintEngine.cancelActiveStroke(M);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const S = Xh(h.interaction.start, h.interaction.current), M = [
          ...t === "cutout" ? xu().filter((C) => !yn(C)) : [...Fr()],
          ...D1(),
          ...L1()
        ].filter((C) => kw(S, tn(C)));
        H1(M, ((g = M[M.length - 1]) == null ? void 0 : g.id) || null), G && M.length && (h.cutoutAspectOpen = !1), Ve(), Ge(), ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((w = h.interaction) == null ? void 0 : w.kind))
        h.interaction.changed && (Qe(), it(), Ve());
      else if (h.interaction && h.interaction.kind !== "view") {
        let S = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (S = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (S = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (S = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (S = !0), S && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? Mr({ rebuildPaintEngine: !0 }) : Go()), Qe(), Vn(), e.setDirtyCanvas(!0, !0), Ko(), Ge(), ae();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && to(), zo(), i && i.kind === "view" && ln.endDrag(performance.now()), ii(), Ge(), mt(h.pointerPos), ae();
    }
  }, O.onpointercancel = () => {
    var i, s, l, f, p;
    if (!Za()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = h.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        Qh(h.interaction);
        return;
      }
      if (((l = h.interaction) == null ? void 0 : l.kind) === "view" && ln.endDrag(performance.now()), ((f = h.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((p = h.interaction) == null ? void 0 : p.kind) === "paint_lasso_fill") {
        zo();
        const m = Qn();
        m && h.paintEngine.cancelActiveStroke(m);
      }
      h.interaction = null, zo(), ii(), mt(h.pointerPos), ae({ localOnly: !0 });
    }
  }, O.onlostpointercapture = () => {
    Za();
  }, O.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, O.oncontextmenu = (i) => {
    (cr() || Iu()) && Z2(uu(), 2) && i.preventDefault();
  }, O.onmousemove = (i) => {
    const s = Li(i), l = dl(s, !0);
    h.interaction || (mt(s), l && h.mode === "frame" && h.primaryTool === "cursor" && ae({ localOnly: !0 }));
  }, O.onpointerleave = () => {
    h.interaction || Zh({ x: -1e6, y: -1e6 });
  }, O.onmouseleave = () => {
    dl(h.pointerPos, !1), mt(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && ae({ localOnly: !0 });
  }, O.onwheel = (i) => {
    if (h.mode === "frame") {
      const s = Li(i), l = sc(i);
      l && wn(), l && Iu() ? dw(s, -l) : l && cw(s, l) && ae({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (Ca(), cr()) {
        const s = sc(i);
        s && fv(Li(i), -s);
      } else ln.applyWheelEvent(i) && ae({ localOnly: !0 });
      i.preventDefault();
    }
  }, O.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), qi(!0));
  }, O.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Vt.depth = 0, qi(!1);
    const l = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => Cr(p));
    l && Nh(l);
  };
  const tm = (i) => {
    t !== "stickers" && t !== "cutout" || r || Uc(i) && (Vt.depth += 1, qi(!0), i.preventDefault());
  }, nm = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Vt.active && Uc(i) && qi(!0), Vt.active && i.preventDefault());
  }, rm = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Vt.active) return;
    Vt.depth = Math.max(0, Vt.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Vt.depth === 0 || s) && qi(!1);
  }, im = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Vt.depth = 0, qi(!1), Uc(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", tm, !0), window.addEventListener("dragover", nm, !0), window.addEventListener("dragleave", rm, !0), window.addEventListener("drop", im, !0);
  function Fu() {
    const { canUndo: i, canRedo: s } = xh();
    Zo(P.toolButtons, "value", "undo", { disabled: !i }), Zo(P.toolButtons, "value", "redo", { disabled: !s });
  }
  const om = (i, s, l = !1) => {
    var I;
    wn();
    const f = G && h.mode === "frame" ? ze() : null, p = f || It(), m = f ? "shot" : Js(), g = La();
    if (g && !el(g) || !g && (!p || m === "stroke" || _n(p))) return;
    const w = (((I = P.sidePanel) == null ? void 0 : I.params) || []).find((M) => M.key === i);
    if (!w || w.enabled === !1) return;
    let S = Number(s);
    if (Number.isNaN(S) && (S = 0), (g || K) && QO.has(i) ? S = i === "scale" ? Math.max(S, h0) : S : S = Z(S, Number(w.min), Number(w.max)), i === "yaw_deg" && (S = Ht(S)), !g && K && i.startsWith("position_")) {
      fr(), VM(_.camera, h.frame, i, S), Ve(), ae(), l && Qe();
      return;
    }
    if (g) {
      jM(g, h.frame, i, S), $t(), Ve(), ae(), l && Qe();
      return;
    }
    i === "opacity" ? $M(p, h.frame, S / 100) : Sr(p, { [i]: S }), G && !ar(p) && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = ho(p)), Ve(), ae(), l && Qe();
  };
  gt == null || gt.addEventListener("click", async (i) => {
    var f, p, m, g, w, S, I;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const M = Xn(s.getAttribute("data-coverage"));
      if (M === Xn(_.coverage)) return;
      _.coverage = M, h.coverage = M, d && (d.value = String(M)), a ? Q.backgroundDirty = !0 : (Vn(), sw({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ve(), Ge(), ae();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (f = P.sidePanel) == null ? void 0 : f.selectionPicker) != null && p.disabled) return;
      P.sidePanel.selectionPicker.open = !P.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      P.sidePanel.selectionPicker.open = !1;
      const M = String(s.getAttribute("data-selection-id") || "");
      let C = null;
      if (M && (t === "stickers" ? C = [...Fr(), ...L ? _.shots : []].find((F) => String((F == null ? void 0 : F.id) || "") === M) || null : C = ((m = Ip().find((F) => {
        var X;
        return String(((X = F == null ? void 0 : F.item) == null ? void 0 : X.id) || "") === M;
      })) == null ? void 0 : m.item) || null), Rn(C || null), C && !dn(C)) {
        const F = sn(C);
        Sp(Ht(Number(F.yaw_deg || 0)), Z(Number(F.pitch_deg || 0), -89.9, 89.9));
      }
      Ve(), Ge(), ae();
      return;
    }
    if (l === "copy-state-inline") {
      const M = It(), C = Js();
      if (!M || C === "stroke" || lr().length > 1) return;
      const F = JSON.stringify(G && C !== "image" ? $p(M) : tv(sn(M)));
      try {
        await navigator.clipboard.writeText(F), (g = P.sidePanel) != null && g.copyStateButton && (P.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var X;
          (X = P.sidePanel) != null && X.copyStateButton && (P.sidePanel.copyStateButton.label = "Copy State");
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
      _.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Au(), Ve(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ae();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Au(), Ve(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0), ae();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, Au(), Ve(), (I = e.setDirtyCanvas) == null || I.call(e, !0, !0), ae();
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
    l === "save-close" && (ow(), Yo());
  }), gt == null || gt.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && om(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), gt == null || gt.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && om(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const Tu = () => Tr();
  Tu(), R.addEventListener("click", (i) => {
    var I, M, C, F, X;
    if ((M = (I = i.target) == null ? void 0 : I.matches) != null && M.call(I, "[data-confirm-overlay]")) {
      const H = (C = P.confirmDialog) == null ? void 0 : C.resolve;
      P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, H == null || H(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      cv(s.getAttribute("data-space-mode"));
      return;
    }
    const l = i.target.closest("[data-gizmo-mode]");
    if (l) {
      h.gizmoMode = l.getAttribute("data-gizmo-mode"), Q.backgroundDirty = !0, Ge(), ae({ localOnly: !0 });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.getAttribute("aria-disabled") === "true") return;
      const H = h.mode;
      h.mode = String(f.getAttribute("data-view") || "pano"), G && h.mode === "frame" && (H !== "frame" && (Q.frameSafeRect = null), Ve(), Ge()), Xa(), ii(), ae();
      return;
    }
    const p = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (p && !r) {
      if (p.matches("[data-tool-mode]")) {
        const H = String(p.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = H, (H === "paint" || H === "mask") && Da({ preservePanelValues: !0 }), Kn(), Ve(), Ge(), ae();
        return;
      }
      if (p.matches("[data-tool-ui-action]")) {
        const H = String(p.getAttribute("data-tool-ui-action") || "");
        if ((H === "undo" || H === "redo") && p.disabled) return;
        H === "undo" ? Mu(-1) : H === "redo" ? Mu(1) : H === "clear" ? J_() : H === "add" || H === "add-image" ? R_() : H === "add-world" ? V_() : H === "add-or-look" ? B_() : H === "add-camera" && U_();
        return;
      }
      if (p.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const H = String(p.getAttribute("data-paint-tool") || "pen");
        h.paintTool = H, Da({ preservePanelValues: !0 }), Wn[H] && (h.activeBrushPresetId = H), Kn(), Ve(), Ge(), ae();
        return;
      }
      if (p.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(p.getAttribute("data-mask-tool") || "pen"), Da({ preservePanelValues: !0 }), Kn(), Ve(), Ge(), ae();
        return;
      }
      if (p.matches("[data-paint-layer-clear-current]")) {
        const H = String(p.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        Z_(H);
        return;
      }
      if (p.matches("[data-paint-color-swatch]")) {
        const H = ql.find((J) => J.id === p.getAttribute("data-paint-color-swatch"));
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
      if (i.preventDefault(), i.stopPropagation(), !(Pe instanceof HTMLVideoElement)) return;
      xt.resumeAfterScrub = !1, Nu();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), Tp(), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (m === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Pe instanceof HTMLVideoElement)) return;
      const H = !P.videoTransport.loop;
      P.videoTransport.loop = H, Pe.loop = H, Ii({
        hasAudio: P.videoTransport.hasAudio,
        loop: H,
        muted: Pe.muted,
        volume: Number(Pe.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (!r) {
      if (m === "frame-aspect") {
        P.frameRail.aspectOpen = !P.frameRail.aspectOpen;
        return;
      }
      if (m === "frame-aspect-set") {
        const H = h.mode === "frame" ? ze() : null;
        if (!H || H.locked === !0) return;
        Ah(H, String(p.getAttribute("data-aspect") || "1:1")), P.frameRail.aspectOpen = !1, Ko(), Qe(), it(), ii(), Ve(), Ge(), ae();
        return;
      }
      if (m === "frame-aspect-custom") {
        const H = h.mode === "frame" ? ze() : null, J = p.getAttribute("data-custom-width"), oe = p.getAttribute("data-custom-height");
        if (!H || !nw(H, J, oe)) return;
        P.frameRail.aspectOpen = !1, Ko(), Qe(), it(), ii(), ae();
        return;
      }
      if (m === "frame-rotate-90") {
        const H = h.mode === "frame" ? ze() : null;
        if (!H || H.locked === !0) return;
        Oh(H), P.frameRail.aspectOpen = !1, Ko(), Qe(), it(), ii(), ae();
        return;
      }
      if (m === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Ge(), ae();
        return;
      }
      if (m === "aspect-set") {
        const H = It();
        if (!H) return;
        const J = String(p.getAttribute("data-aspect") || "1:1");
        Ah(H, J), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ko(), Qe(), it(), Ge(), ae();
        return;
      }
      if (m === "rotate-90") {
        const H = It();
        if (!H || Ra()) return;
        Oh(H), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Ko(), Qe(), it(), Ge(), ae();
        return;
      }
      if (m === "bring-front") {
        rw();
        return;
      }
      if (m === "send-back") {
        iw();
        return;
      }
      if (m === "duplicate") {
        Q_();
        return;
      }
      if (m === "replace-image") {
        G_();
        return;
      }
      if (m === "toggle-lock") {
        j1();
        return;
      }
      if (m === "back-initial") {
        U1();
        return;
      }
      if (m === "toggle-visible") {
        B1();
        return;
      }
      if (m === "delete") {
        Ih();
        return;
      }
    }
    if (m === "reset-view") {
      if (h.mode === "frame") return;
      Ji(
        { position: $o(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((X = Lr()) == null ? void 0 : X.radius) || Kr },
        { mode: Xl(h.spaceMode, h.viewTransition), moved: !1 }
      );
      return;
    }
    if (m === "frame-view") {
      if (!cr() || Xl(h.spaceMode, h.viewTransition) !== "6dof") return;
      uv();
      return;
    }
    if (m === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, OE(e == null ? void 0 : e.id, h.showGrid), Tu(), ae();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Dw();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const H = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = H, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = H ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), um(), ae();
      return;
    }
    const g = i.target.closest("[data-paint-history-index]");
    if (!g) return;
    const w = Number(g.getAttribute("data-paint-history-index")), S = h.customPaintHistory[w];
    S && (h.customPaintColor = er(S), h.paintColor = er(S), Kn());
  }), R.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Pe instanceof HTMLVideoElement)) return;
      an.playing && (xt.resumeAfterScrub = !0), an.seek(fo(Number(s.value || 0), Qs()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(Pe instanceof HTMLVideoElement)) return;
      const m = Z(Number(l.value || 0), 0, 1);
      Pe.volume = m, Pe.muted = m <= 1e-4, Ii({
        hasAudio: P.videoTransport.hasAudio,
        muted: Pe.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), g = Ri(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[g] = m, Kn(), yw();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: Z(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = er(m), h.paintColor = er(m), Kn();
    }
  }), R.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Pe instanceof HTMLVideoElement)) return;
      xt.resumeAfterScrub && an.play(), xt.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && pl();
  }), R.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && pl();
  }), R.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && pl();
  }), R.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && pl();
  }), R.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !R.contains(s) || Yt.target !== s && (Yt.target = s, Yt.timer && clearTimeout(Yt.timer), Yt.timer = window.setTimeout(() => {
      Yt.target === s && Nw(s);
    }, 220));
  }), R.addEventListener("pointerout", (i) => {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || Yt.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || to();
  }), R.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || to();
  });
  const Fw = (i, s) => {
    var w;
    if (!Ie) return;
    const l = Ie.getBoundingClientRect(), f = Z((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - Z((s - l.top) / Math.max(1, l.height), 0, 1), m = Pf(h.customPaintColor), g = { ...Nf(m.h, f, p), a: Number(((w = h.customPaintColor) == null ? void 0 : w.a) ?? 1) };
    h.customPaintColor = er(g), h.paintColor = er(g), Kn();
  }, Tw = (i) => {
    var m;
    if (!He) return;
    const s = He.getBoundingClientRect(), l = Z((i - s.left) / Math.max(1, s.width), 0, 1), f = Pf(h.customPaintColor), p = { ...Nf(l, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = er(p), h.paintColor = er(p), Kn();
  }, am = (i, s) => {
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
    i.preventDefault(), i.stopPropagation(), am(i, (s) => Fw(s.clientX, s.clientY));
  }), He && (He.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), am(i, (s) => Tw(s.clientX));
  }), R.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", f = (p = P.confirmDialog) == null ? void 0 : p.resolve;
    P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(l);
  });
  const sm = () => {
    const i = !!h.fullscreen;
    Zo(P.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? ke.fullscreen_close : ke.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, hl = (i) => {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, R.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), Tu(), sm(), Oo(), ae());
  }, lm = () => document.fullscreenElement === q, Dw = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        hl(!h.fullscreen);
        return;
      }
      lm() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = q.requestFullscreen) == null ? void 0 : i.call(q));
    } catch {
      hl(!h.fullscreen);
    }
  }, cm = () => {
    document.fullscreenEnabled && hl(lm());
  };
  document.addEventListener("fullscreenchange", cm), sm();
  const um = () => {
    const i = !!h.outputPreviewExpanded;
    P.outputPreviewToggle.icon = i ? ke.fullscreen_close : ke.fullscreen, P.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", P.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  um();
  const Du = e.onConnectionsChange;
  let Lu = null, fm = () => {
  };
  !r && t === "stickers" && (fm = i1(e, (i = "sync") => {
    i === "executed" && (yE(en, Al), Oi(), A && D_()), zp(i);
  }, { editor: !0 }), Lu = function(...s) {
    typeof Du == "function" && Du.apply(this, s), Oi(), _i(this, "connections");
  }, e.onConnectionsChange = Lu), !r && !E && b0.set(String(e.id ?? "0"), () => Jp());
  let Uo = null;
  const Yo = async () => Uo || (Uo = (async () => {
    var i, s, l, f, p, m, g, w;
    return b0.delete(String(e.id ?? "0")), pw(), r || Vn(), document.fullscreenElement === q && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", cm), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === Fh && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (w = (g = (m = Ir) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || w.call(g, !0, !0), to(), I_(), Pe instanceof HTMLVideoElement && Pe.pause(), ni.forEach((S) => {
      try {
        S();
      } catch {
      }
    }), Te.dispose(), qi(!1), window.removeEventListener("keydown", dm, !0), window.removeEventListener("keydown", pm, !0), window.removeEventListener("keydown", mm, !0), window.removeEventListener("keyup", gm, !0), window.removeEventListener("keydown", ml, !0), window.removeEventListener("keyup", ml, !0), window.removeEventListener("blur", ym), window.removeEventListener("keydown", bm, !0), window.removeEventListener("dragenter", tm, !0), window.removeEventListener("dragover", nm, !0), window.removeEventListener("dragleave", rm, !0), window.removeEventListener("drop", im, !0), !r && t === "stickers" && (e.onConnectionsChange === Lu && (e.onConnectionsChange = Du), fm()), fe.unmount(), D.remove(), aw(), Uo = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Uo = null, !1)), Uo), dm = (i) => {
    var s, l, f, p, m;
    if (i.key === "Escape") {
      if (Za()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (h.fullscreen && document.fullscreenElement === q) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), hl(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Yo();
    }
  }, pm = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || f === 46) && !(s === "Backspace" || l === "Backspace" || f === 8)) return;
    const g = i.target, w = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (w === "INPUT" || w === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (We.selection) {
      T_(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if (ew()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    It() && (Ih(), i.preventDefault(), i.stopPropagation());
  }, hm = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !k || !P.timeline.visible || P.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !q.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !ZO.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, mm = (i) => {
    hm(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Nu());
  }, gm = (i) => {
    hm(i) && (i.preventDefault(), i.stopPropagation());
  }, ml = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === l || (h.marqueeModifier = s, h.altModifier = l, ai(), mt(h.pointerPos));
  }, ym = () => {
    h.marqueeModifier = !1, h.altModifier = !1, ai(), mt(h.pointerPos);
  }, bm = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: g } = xh();
    i.shiftKey && !g || !i.shiftKey && !m || (Mu(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", dm, !0), window.addEventListener("keydown", pm, !0), window.addEventListener("keydown", mm, !0), window.addEventListener("keyup", gm, !0), window.addEventListener("keydown", ml, !0), window.addEventListener("keyup", ml, !0), window.addEventListener("blur", ym), window.addEventListener("keydown", bm, !0), q.addEventListener("pointerdown", (i) => {
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
      P.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  Rr("cutout-focus", av), !r && t === "stickers" && Rr("external-sticker-sync", () => zp("open"), { rollbackState: !0 }), K_().catch((i) => {
    P.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), Rr("history", Qe), Rr("undo-redo", Fu), Rr("paint-ui", Kn), Rr("side-panel", Ve), Rr("look-at-frame", cu), Rr("video-source", Oi), Rr("canvas-size", bh), Rr("cursor", () => mt(h.pointerPos)), ae(), Q.rafId = requestAnimationFrame(_h);
}
Ir.registerExtension(lP({
  app: Ir,
  openEditor: RE,
  attachStickers: xA,
  attachCutout: SA,
  attachPreview: wA,
  restoreOutput: lA,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: iE
}));
