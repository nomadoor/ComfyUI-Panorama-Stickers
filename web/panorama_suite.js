import * as Rl from "../../scripts/app.js";
import { app as Or } from "../../scripts/app.js";
import { api as Xt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Nd(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Pt = {}, ua = [], Xr = () => {
}, A0 = () => !1, Tc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Dc = (e) => e.startsWith("onUpdate:"), On = Object.assign, Pd = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ww = Object.prototype.hasOwnProperty, yt = (e, t) => Ww.call(e, t), Ye = Array.isArray, fa = (e) => Bs(e) === "[object Map]", C0 = (e) => Bs(e) === "[object Set]", Cm = (e) => Bs(e) === "[object Date]", Qe = (e) => typeof e == "function", tn = (e) => typeof e == "string", Zr = (e) => typeof e == "symbol", Nt = (e) => e !== null && typeof e == "object", I0 = (e) => (Nt(e) || Qe(e)) && Qe(e.then) && Qe(e.catch), O0 = Object.prototype.toString, Bs = (e) => O0.call(e), Bw = (e) => Bs(e).slice(8, -1), E0 = (e) => Bs(e) === "[object Object]", Ad = (e) => tn(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, bs = /* @__PURE__ */ Nd(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Lc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Uw = /-\w/g, jn = Lc(
  (e) => e.replace(Uw, (t) => t.slice(1).toUpperCase())
), Yw = /\B([A-Z])/g, Po = Lc(
  (e) => e.replace(Yw, "-$1").toLowerCase()
), Rc = Lc((e) => e.charAt(0).toUpperCase() + e.slice(1)), Hu = Lc(
  (e) => e ? `on${Rc(e)}` : ""
), Ur = (e, t) => !Object.is(e, t), Vl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, F0 = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, Cd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Im;
const Vc = () => Im || (Im = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Mt(e) {
  if (Ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = tn(r) ? Zw(r) : Mt(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (tn(e) || Nt(e))
    return e;
}
const Xw = /;(?![^(]*\))/g, qw = /:([^]+)/, Jw = /\/\*[^]*?\*\//g;
function Zw(e) {
  const t = {};
  return e.replace(Jw, "").split(Xw).forEach((n) => {
    if (n) {
      const r = n.split(qw);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function lt(e) {
  let t = "";
  if (tn(e))
    t = e;
  else if (Ye(e))
    for (let n = 0; n < e.length; n++) {
      const r = lt(e[n]);
      r && (t += r + " ");
    }
  else if (Nt(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Qw = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ex = /* @__PURE__ */ Nd(Qw);
function T0(e) {
  return !!e || e === "";
}
function tx(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Id(e[r], t[r]);
  return n;
}
function Id(e, t) {
  if (e === t) return !0;
  let n = Cm(e), r = Cm(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = Zr(e), r = Zr(t), n || r)
    return e === t;
  if (n = Ye(e), r = Ye(t), n || r)
    return n && r ? tx(e, t) : !1;
  if (n = Nt(e), r = Nt(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !Id(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const D0 = (e) => !!(e && e.__v_isRef === !0), Je = (e) => tn(e) ? e : e == null ? "" : Ye(e) || Nt(e) && (e.toString === O0 || !Qe(e.toString)) ? D0(e) ? Je(e.value) : JSON.stringify(e, L0, 2) : String(e), L0 = (e, t) => D0(t) ? L0(e, t.value) : fa(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[Gu(r, a) + " =>"] = o, n),
    {}
  )
} : C0(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Gu(n))
} : Zr(t) ? Gu(t) : Nt(t) && !Ye(t) && !E0(t) ? String(t) : t, Gu = (e, t = "") => {
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
class nx {
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
function rx() {
  return Yn;
}
let It;
const Ku = /* @__PURE__ */ new WeakSet();
class R0 {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Yn && Yn.active && Yn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ku.has(this) && (Ku.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || $0(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Om(this), z0(this);
    const t = It, n = Er;
    It = this, Er = !0;
    try {
      return this.fn();
    } finally {
      j0(this), It = t, Er = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Fd(t);
      this.deps = this.depsTail = void 0, Om(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ku.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Df(this) && this.run();
  }
  get dirty() {
    return Df(this);
  }
}
let V0 = 0, vs, _s;
function $0(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = _s, _s = e;
    return;
  }
  e.next = vs, vs = e;
}
function Od() {
  V0++;
}
function Ed() {
  if (--V0 > 0)
    return;
  if (_s) {
    let t = _s;
    for (_s = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; vs; ) {
    let t = vs;
    for (vs = void 0; t; ) {
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
function z0(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function j0(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), Fd(r), ix(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function Df(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (H0(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function H0(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Cs) || (e.globalVersion = Cs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Df(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = It, r = Er;
  It = e, Er = !0;
  try {
    z0(e);
    const o = e.fn(e._value);
    (t.version === 0 || Ur(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    It = n, Er = r, j0(e), e.flags &= -3;
  }
}
function Fd(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      Fd(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function ix(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Er = !0;
const G0 = [];
function wi() {
  G0.push(Er), Er = !1;
}
function xi() {
  const e = G0.pop();
  Er = e === void 0 ? !0 : e;
}
function Om(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = It;
    It = void 0;
    try {
      t();
    } finally {
      It = n;
    }
  }
}
let Cs = 0;
class ox {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Td {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!It || !Er || It === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== It)
      n = this.activeLink = new ox(It, this), It.deps ? (n.prevDep = It.depsTail, It.depsTail.nextDep = n, It.depsTail = n) : It.deps = It.depsTail = n, K0(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = It.depsTail, n.nextDep = void 0, It.depsTail.nextDep = n, It.depsTail = n, It.deps === n && (It.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Cs++, this.notify(t);
  }
  notify(t) {
    Od();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ed();
    }
  }
}
function K0(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        K0(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Lf = /* @__PURE__ */ new WeakMap(), yo = /* @__PURE__ */ Symbol(
  ""
), Rf = /* @__PURE__ */ Symbol(
  ""
), Is = /* @__PURE__ */ Symbol(
  ""
);
function Pn(e, t, n) {
  if (Er && It) {
    let r = Lf.get(e);
    r || Lf.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new Td()), o.map = r, o.key = n), o.track();
  }
}
function gi(e, t, n, r, o, a) {
  const c = Lf.get(e);
  if (!c) {
    Cs++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Od(), t === "clear")
    c.forEach(u);
  else {
    const d = Ye(e), b = d && Ad(n);
    if (d && n === "length") {
      const y = Number(r);
      c.forEach((v, x) => {
        (x === "length" || x === Is || !Zr(x) && x >= y) && u(v);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), b && u(c.get(Is)), t) {
        case "add":
          d ? b && u(c.get("length")) : (u(c.get(yo)), fa(e) && u(c.get(Rf)));
          break;
        case "delete":
          d || (u(c.get(yo)), fa(e) && u(c.get(Rf)));
          break;
        case "set":
          fa(e) && u(c.get(yo));
          break;
      }
  }
  Ed();
}
function Jo(e) {
  const t = /* @__PURE__ */ gt(e);
  return t === e ? t : (Pn(t, "iterate", Is), /* @__PURE__ */ yr(e) ? t : t.map(Fr));
}
function $c(e) {
  return Pn(e = /* @__PURE__ */ gt(e), "iterate", Is), e;
}
function Wr(e, t) {
  return /* @__PURE__ */ Si(e) ? wa(/* @__PURE__ */ bo(e) ? Fr(t) : t) : Fr(t);
}
const ax = {
  __proto__: null,
  [Symbol.iterator]() {
    return Wu(this, Symbol.iterator, (e) => Wr(this, e));
  },
  concat(...e) {
    return Jo(this).concat(
      ...e.map((t) => Ye(t) ? Jo(t) : t)
    );
  },
  entries() {
    return Wu(this, "entries", (e) => (e[1] = Wr(this, e[1]), e));
  },
  every(e, t) {
    return li(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return li(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Wr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return li(
      this,
      "find",
      e,
      t,
      (n) => Wr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return li(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return li(
      this,
      "findLast",
      e,
      t,
      (n) => Wr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return li(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return li(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Bu(this, "includes", e);
  },
  indexOf(...e) {
    return Bu(this, "indexOf", e);
  },
  join(e) {
    return Jo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Bu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return li(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return es(this, "pop");
  },
  push(...e) {
    return es(this, "push", e);
  },
  reduce(e, ...t) {
    return Em(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Em(this, "reduceRight", e, t);
  },
  shift() {
    return es(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return li(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return es(this, "splice", e);
  },
  toReversed() {
    return Jo(this).toReversed();
  },
  toSorted(e) {
    return Jo(this).toSorted(e);
  },
  toSpliced(...e) {
    return Jo(this).toSpliced(...e);
  },
  unshift(...e) {
    return es(this, "unshift", e);
  },
  values() {
    return Wu(this, "values", (e) => Wr(this, e));
  }
};
function Wu(e, t, n) {
  const r = $c(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ yr(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const sx = Array.prototype;
function li(e, t, n, r, o, a) {
  const c = $c(e), u = c !== e && !/* @__PURE__ */ yr(e), d = c[t];
  if (d !== sx[t]) {
    const v = d.apply(e, a);
    return u ? Fr(v) : v;
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
function Em(e, t, n, r) {
  const o = $c(e), a = o !== e && !/* @__PURE__ */ yr(e);
  let c = n, u = !1;
  o !== e && (a ? (u = r.length === 0, c = function(b, y, v) {
    return u && (u = !1, b = Wr(e, b)), n.call(this, b, Wr(e, y), v, e);
  }) : n.length > 3 && (c = function(b, y, v) {
    return n.call(this, b, y, v, e);
  }));
  const d = o[t](c, ...r);
  return u ? Wr(e, d) : d;
}
function Bu(e, t, n) {
  const r = /* @__PURE__ */ gt(e);
  Pn(r, "iterate", Is);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ Rd(n[0]) ? (n[0] = /* @__PURE__ */ gt(n[0]), r[t](...n)) : o;
}
function es(e, t, n = []) {
  wi(), Od();
  const r = (/* @__PURE__ */ gt(e))[t].apply(e, n);
  return Ed(), xi(), r;
}
const lx = /* @__PURE__ */ Nd("__proto__,__v_isRef,__isVue"), W0 = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Zr)
);
function cx(e) {
  Zr(e) || (e = String(e));
  const t = /* @__PURE__ */ gt(this);
  return Pn(t, "has", e), t.hasOwnProperty(e);
}
class B0 {
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
      return r === (o ? a ? vx : q0 : a ? X0 : Y0).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = Ye(t);
    if (!o) {
      let d;
      if (c && (d = ax[n]))
        return d;
      if (n === "hasOwnProperty")
        return cx;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ In(t) ? t : r
    );
    if ((Zr(n) ? W0.has(n) : lx(n)) || (o || Pn(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ In(u)) {
      const d = c && Ad(n) ? u : u.value;
      return o && Nt(d) ? /* @__PURE__ */ $f(d) : d;
    }
    return Nt(u) ? o ? /* @__PURE__ */ $f(u) : /* @__PURE__ */ Na(u) : u;
  }
}
class U0 extends B0 {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = Ye(t) && Ad(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ Si(a);
      if (!/* @__PURE__ */ yr(r) && !/* @__PURE__ */ Si(r) && (a = /* @__PURE__ */ gt(a), r = /* @__PURE__ */ gt(r)), !c && /* @__PURE__ */ In(a) && !/* @__PURE__ */ In(r))
        return b || (a.value = r), !0;
    }
    const u = c ? Number(n) < t.length : yt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ In(t) ? t : o
    );
    return t === /* @__PURE__ */ gt(o) && (u ? Ur(r, a) && gi(t, "set", n, r) : gi(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = yt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && gi(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!Zr(n) || !W0.has(n)) && Pn(t, "has", n), r;
  }
  ownKeys(t) {
    return Pn(
      t,
      "iterate",
      Ye(t) ? "length" : yo
    ), Reflect.ownKeys(t);
  }
}
class ux extends B0 {
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
const fx = /* @__PURE__ */ new U0(), dx = /* @__PURE__ */ new ux(), px = /* @__PURE__ */ new U0(!0);
const Vf = (e) => e, _l = (e) => Reflect.getPrototypeOf(e);
function hx(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ gt(o), c = fa(a), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, b = o[e](...r), y = n ? Vf : t ? wa : Fr;
    return !t && Pn(
      a,
      "iterate",
      d ? Rf : yo
    ), On(
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
function wl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function mx(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ gt(a), u = /* @__PURE__ */ gt(o);
      e || (Ur(o, u) && Pn(c, "get", o), Pn(c, "get", u));
      const { has: d } = _l(c), b = t ? Vf : e ? wa : Fr;
      if (d.call(c, o))
        return b(a.get(o));
      if (d.call(c, u))
        return b(a.get(u));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Pn(/* @__PURE__ */ gt(o), "iterate", yo), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ gt(a), u = /* @__PURE__ */ gt(o);
      return e || (Ur(o, u) && Pn(c, "has", o), Pn(c, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const c = this, u = c.__v_raw, d = /* @__PURE__ */ gt(u), b = t ? Vf : e ? wa : Fr;
      return !e && Pn(d, "iterate", yo), u.forEach((y, v) => o.call(a, b(y), b(v), c));
    }
  };
  return On(
    n,
    e ? {
      add: wl("add"),
      set: wl("set"),
      delete: wl("delete"),
      clear: wl("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ gt(this), c = _l(a), u = /* @__PURE__ */ gt(o), d = !t && !/* @__PURE__ */ yr(o) && !/* @__PURE__ */ Si(o) ? u : o;
        return c.has.call(a, d) || Ur(o, d) && c.has.call(a, o) || Ur(u, d) && c.has.call(a, u) || (a.add(d), gi(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ yr(a) && !/* @__PURE__ */ Si(a) && (a = /* @__PURE__ */ gt(a));
        const c = /* @__PURE__ */ gt(this), { has: u, get: d } = _l(c);
        let b = u.call(c, o);
        b || (o = /* @__PURE__ */ gt(o), b = u.call(c, o));
        const y = d.call(c, o);
        return c.set(o, a), b ? Ur(a, y) && gi(c, "set", o, a) : gi(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ gt(this), { has: c, get: u } = _l(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ gt(o), d = c.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && gi(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ gt(this), a = o.size !== 0, c = o.clear();
        return a && gi(
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
    n[o] = hx(o, e, t);
  }), n;
}
function Dd(e, t) {
  const n = mx(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    yt(n, o) && o in r ? n : r,
    o,
    a
  );
}
const gx = {
  get: /* @__PURE__ */ Dd(!1, !1)
}, yx = {
  get: /* @__PURE__ */ Dd(!1, !0)
}, bx = {
  get: /* @__PURE__ */ Dd(!0, !1)
};
const Y0 = /* @__PURE__ */ new WeakMap(), X0 = /* @__PURE__ */ new WeakMap(), q0 = /* @__PURE__ */ new WeakMap(), vx = /* @__PURE__ */ new WeakMap();
function _x(e) {
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
function wx(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : _x(Bw(e));
}
// @__NO_SIDE_EFFECTS__
function Na(e) {
  return /* @__PURE__ */ Si(e) ? e : Ld(
    e,
    !1,
    fx,
    gx,
    Y0
  );
}
// @__NO_SIDE_EFFECTS__
function xx(e) {
  return Ld(
    e,
    !1,
    px,
    yx,
    X0
  );
}
// @__NO_SIDE_EFFECTS__
function $f(e) {
  return Ld(
    e,
    !0,
    dx,
    bx,
    q0
  );
}
function Ld(e, t, n, r, o) {
  if (!Nt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = wx(e);
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
  return /* @__PURE__ */ Si(e) ? /* @__PURE__ */ bo(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Si(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Rd(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ gt(t) : e;
}
function Sx(e) {
  return !yt(e, "__v_skip") && Object.isExtensible(e) && F0(e, "__v_skip", !0), e;
}
const Fr = (e) => Nt(e) ? /* @__PURE__ */ Na(e) : e, wa = (e) => Nt(e) ? /* @__PURE__ */ $f(e) : e;
// @__NO_SIDE_EFFECTS__
function In(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return kx(e, !1);
}
function kx(e, t) {
  return /* @__PURE__ */ In(e) ? e : new Mx(e, t);
}
class Mx {
  constructor(t, n) {
    this.dep = new Td(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ gt(t), this._value = n ? t : Fr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ yr(t) || /* @__PURE__ */ Si(t);
    t = r ? t : /* @__PURE__ */ gt(t), Ur(t, n) && (this._rawValue = t, this._value = r ? t : Fr(t), this.dep.trigger());
  }
}
function nt(e) {
  return /* @__PURE__ */ In(e) ? e.value : e;
}
const Nx = {
  get: (e, t, n) => t === "__v_raw" ? e : nt(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ In(o) && !/* @__PURE__ */ In(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function J0(e) {
  return /* @__PURE__ */ bo(e) ? e : new Proxy(e, Nx);
}
class Px {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Td(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Cs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    It !== this)
      return $0(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return H0(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Ax(e, t, n = !1) {
  let r, o;
  return Qe(e) ? r = e : (r = e.get, o = e.set), new Px(r, o, n);
}
const xl = {}, ic = /* @__PURE__ */ new WeakMap();
let uo;
function Cx(e, t = !1, n = uo) {
  if (n) {
    let r = ic.get(n);
    r || ic.set(n, r = []), r.push(e);
  }
}
function Ix(e, t, n = Pt) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: u, call: d } = n, b = (z) => o ? z : /* @__PURE__ */ yr(z) || o === !1 || o === 0 ? yi(z, 1) : yi(z);
  let y, v, x, N, k = !1, P = !1;
  if (/* @__PURE__ */ In(e) ? (v = () => e.value, k = /* @__PURE__ */ yr(e)) : /* @__PURE__ */ bo(e) ? (v = () => b(e), k = !0) : Ye(e) ? (P = !0, k = e.some((z) => /* @__PURE__ */ bo(z) || /* @__PURE__ */ yr(z)), v = () => e.map((z) => {
    if (/* @__PURE__ */ In(z))
      return z.value;
    if (/* @__PURE__ */ bo(z))
      return b(z);
    if (Qe(z))
      return d ? d(z, 2) : z();
  })) : Qe(e) ? t ? v = d ? () => d(e, 2) : e : v = () => {
    if (x) {
      wi();
      try {
        x();
      } finally {
        xi();
      }
    }
    const z = uo;
    uo = y;
    try {
      return d ? d(e, 3, [N]) : e(N);
    } finally {
      uo = z;
    }
  } : v = Xr, t && o) {
    const z = v, _ = o === !0 ? 1 / 0 : o;
    v = () => yi(z(), _);
  }
  const I = rx(), F = () => {
    y.stop(), I && I.active && Pd(I.effects, y);
  };
  if (a && t) {
    const z = t;
    t = (..._) => {
      z(..._), F();
    };
  }
  let W = P ? new Array(e.length).fill(xl) : xl;
  const V = (z) => {
    if (!(!(y.flags & 1) || !y.dirty && !z))
      if (t) {
        const _ = y.run();
        if (o || k || (P ? _.some((R, B) => Ur(R, W[B])) : Ur(_, W))) {
          x && x();
          const R = uo;
          uo = y;
          try {
            const B = [
              _,
              // pass undefined as the old value when it's changed for the first time
              W === xl ? void 0 : P && W[0] === xl ? [] : W,
              N
            ];
            W = _, d ? d(t, 3, B) : (
              // @ts-expect-error
              t(...B)
            );
          } finally {
            uo = R;
          }
        }
      } else
        y.run();
  };
  return u && u(V), y = new R0(v), y.scheduler = c ? () => c(V, !1) : V, N = (z) => Cx(z, !1, y), x = y.onStop = () => {
    const z = ic.get(y);
    if (z) {
      if (d)
        d(z, 4);
      else
        for (const _ of z) _();
      ic.delete(y);
    }
  }, t ? r ? V(!0) : W = y.run() : c ? c(V.bind(null, !0), !0) : y.run(), F.pause = y.pause.bind(y), F.resume = y.resume.bind(y), F.stop = F, F;
}
function yi(e, t = 1 / 0, n) {
  if (t <= 0 || !Nt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ In(e))
    yi(e.value, t, n);
  else if (Ye(e))
    for (let r = 0; r < e.length; r++)
      yi(e[r], t, n);
  else if (C0(e) || fa(e))
    e.forEach((r) => {
      yi(r, t, n);
    });
  else if (E0(e)) {
    for (const r in e)
      yi(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && yi(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Us(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    zc(o, t, n);
  }
}
function Qr(e, t, n, r) {
  if (Qe(e)) {
    const o = Us(e, t, n, r);
    return o && I0(o) && o.catch((a) => {
      zc(a, t, n);
    }), o;
  }
  if (Ye(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(Qr(e[a], t, n, r));
    return o;
  }
}
function zc(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || Pt;
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
      wi(), Us(a, null, 10, [
        e,
        d,
        b
      ]), xi();
      return;
    }
  }
  Ox(e, n, o, r, c);
}
function Ox(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const $n = [];
let Kr = -1;
const da = [];
let $i = null, ra = 0;
const Z0 = /* @__PURE__ */ Promise.resolve();
let oc = null;
function jc(e) {
  const t = oc || Z0;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ex(e) {
  let t = Kr + 1, n = $n.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = $n[r], a = Os(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function Vd(e) {
  if (!(e.flags & 1)) {
    const t = Os(e), n = $n[$n.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Os(n) ? $n.push(e) : $n.splice(Ex(t), 0, e), e.flags |= 1, Q0();
  }
}
function Q0() {
  oc || (oc = Z0.then(ty));
}
function Fx(e) {
  Ye(e) ? da.push(...e) : $i && e.id === -1 ? $i.splice(ra + 1, 0, e) : e.flags & 1 || (da.push(e), e.flags |= 1), Q0();
}
function Fm(e, t, n = Kr + 1) {
  for (; n < $n.length; n++) {
    const r = $n[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      $n.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function ey(e) {
  if (da.length) {
    const t = [...new Set(da)].sort(
      (n, r) => Os(n) - Os(r)
    );
    if (da.length = 0, $i) {
      $i.push(...t);
      return;
    }
    for ($i = t, ra = 0; ra < $i.length; ra++) {
      const n = $i[ra];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    $i = null, ra = 0;
  }
}
const Os = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ty(e) {
  try {
    for (Kr = 0; Kr < $n.length; Kr++) {
      const t = $n[Kr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Us(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Kr < $n.length; Kr++) {
      const t = $n[Kr];
      t && (t.flags &= -2);
    }
    Kr = -1, $n.length = 0, ey(), oc = null, ($n.length || da.length) && ty();
  }
}
let rr = null, ny = null;
function ac(e) {
  const t = rr;
  return rr = e, ny = e && e.type.__scopeId || null, t;
}
function ry(e, t = rr, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && Wm(-1);
    const a = ac(t);
    let c;
    try {
      c = e(...o);
    } finally {
      ac(a), r._d && Wm(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function _i(e, t) {
  if (rr === null)
    return e;
  const n = Bc(rr), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, u, d = Pt] = t[o];
    a && (Qe(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && yi(c), r.push({
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
    d && (wi(), Qr(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), xi());
  }
}
function Tx(e, t) {
  if (An) {
    let n = An.provides;
    const r = An.parent && An.parent.provides;
    r === n && (n = An.provides = Object.create(r)), n[e] = t;
  }
}
function $l(e, t, n = !1) {
  const r = ES();
  if (r || pa) {
    let o = pa ? pa._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Qe(t) ? t.call(r && r.proxy) : t;
  }
}
const Dx = /* @__PURE__ */ Symbol.for("v-scx"), Lx = () => $l(Dx);
function vo(e, t, n) {
  return iy(e, t, n);
}
function iy(e, t, n = Pt) {
  const { immediate: r, deep: o, flush: a, once: c } = n, u = On({}, n), d = t && r || !t && a !== "post";
  let b;
  if (Fs) {
    if (a === "sync") {
      const N = Lx();
      b = N.__watcherHandles || (N.__watcherHandles = []);
    } else if (!d) {
      const N = () => {
      };
      return N.stop = Xr, N.resume = Xr, N.pause = Xr, N;
    }
  }
  const y = An;
  u.call = (N, k, P) => Qr(N, y, k, P);
  let v = !1;
  a === "post" ? u.scheduler = (N) => {
    Un(N, y && y.suspense);
  } : a !== "sync" && (v = !0, u.scheduler = (N, k) => {
    k ? N() : Vd(N);
  }), u.augmentJob = (N) => {
    t && (N.flags |= 4), v && (N.flags |= 2, y && (N.id = y.uid, N.i = y));
  };
  const x = Ix(e, t, u);
  return Fs && (b ? b.push(x) : d && x()), x;
}
function Rx(e, t, n) {
  const r = this.proxy, o = tn(e) ? e.includes(".") ? oy(r, e) : () => r[e] : e.bind(r, r);
  let a;
  Qe(t) ? a = t : (a = t.handler, n = t);
  const c = Xs(this), u = iy(o, a.bind(r), n);
  return c(), u;
}
function oy(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const Vx = /* @__PURE__ */ Symbol("_vte"), $x = (e) => e.__isTeleport, zx = /* @__PURE__ */ Symbol("_leaveCb");
function $d(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, $d(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ay(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Tm(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const sc = /* @__PURE__ */ new WeakMap();
function ws(e, t, n, r, o = !1) {
  if (Ye(e)) {
    e.forEach(
      (P, I) => ws(
        P,
        t && (Ye(t) ? t[I] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (xs(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ws(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? Bc(r.component) : r.el, c = o ? null : a, { i: u, r: d } = e, b = t && t.r, y = u.refs === Pt ? u.refs = {} : u.refs, v = u.setupState, x = /* @__PURE__ */ gt(v), N = v === Pt ? A0 : (P) => Tm(y, P) ? !1 : yt(x, P), k = (P, I) => !(I && Tm(y, I));
  if (b != null && b !== d) {
    if (Dm(t), tn(b))
      y[b] = null, N(b) && (v[b] = null);
    else if (/* @__PURE__ */ In(b)) {
      const P = t;
      k(b, P.k) && (b.value = null), P.k && (y[P.k] = null);
    }
  }
  if (Qe(d))
    Us(d, u, 12, [c, y]);
  else {
    const P = tn(d), I = /* @__PURE__ */ In(d);
    if (P || I) {
      const F = () => {
        if (e.f) {
          const W = P ? N(d) ? v[d] : y[d] : k() || !e.k ? d.value : y[e.k];
          if (o)
            Ye(W) && Pd(W, a);
          else if (Ye(W))
            W.includes(a) || W.push(a);
          else if (P)
            y[d] = [a], N(d) && (v[d] = y[d]);
          else {
            const V = [a];
            k(d, e.k) && (d.value = V), e.k && (y[e.k] = V);
          }
        } else P ? (y[d] = c, N(d) && (v[d] = c)) : I && (k(d, e.k) && (d.value = c), e.k && (y[e.k] = c));
      };
      if (c) {
        const W = () => {
          F(), sc.delete(e);
        };
        W.id = -1, sc.set(e, W), Un(W, n);
      } else
        Dm(e), F();
    }
  }
}
function Dm(e) {
  const t = sc.get(e);
  t && (t.flags |= 8, sc.delete(e));
}
Vc().requestIdleCallback;
Vc().cancelIdleCallback;
const xs = (e) => !!e.type.__asyncLoader, sy = (e) => e.type.__isKeepAlive;
function jx(e, t) {
  ly(e, "a", t);
}
function Hx(e, t) {
  ly(e, "da", t);
}
function ly(e, t, n = An) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Hc(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      sy(o.parent.vnode) && Gx(r, t, n, o), o = o.parent;
  }
}
function Gx(e, t, n, r) {
  const o = Hc(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  cy(() => {
    Pd(r[t], o);
  }, n);
}
function Hc(e, t, n = An, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      wi();
      const u = Xs(n), d = Qr(t, n, e, c);
      return u(), xi(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const Mi = (e) => (t, n = An) => {
  (!Fs || e === "sp") && Hc(e, (...r) => t(...r), n);
}, Kx = Mi("bm"), Gc = Mi("m"), Wx = Mi(
  "bu"
), Bx = Mi("u"), Ys = Mi(
  "bum"
), cy = Mi("um"), Ux = Mi(
  "sp"
), Yx = Mi("rtg"), Xx = Mi("rtc");
function qx(e, t = An) {
  Hc("ec", e, t);
}
const Jx = "components", uy = /* @__PURE__ */ Symbol.for("v-ndc");
function Zx(e) {
  return tn(e) ? Qx(Jx, e, !1) || e : e || uy;
}
function Qx(e, t, n = !0, r = !1) {
  const o = rr || An;
  if (o) {
    const a = o.type;
    {
      const u = RS(
        a,
        !1
      );
      if (u && (u === t || u === jn(t) || u === Rc(jn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      Lm(o[e] || a[e], t) || // global registration
      Lm(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function Lm(e, t) {
  return e && (e[t] || e[jn(t)] || e[Rc(jn(t))]);
}
function _t(e, t, n, r) {
  let o;
  const a = n, c = Ye(e);
  if (c || tn(e)) {
    const u = c && /* @__PURE__ */ bo(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ yr(e), b = /* @__PURE__ */ Si(e), e = $c(e)), o = new Array(e.length);
    for (let y = 0, v = e.length; y < v; y++)
      o[y] = t(
        d ? b ? wa(Fr(e[y])) : Fr(e[y]) : e[y],
        y,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let u = 0; u < e; u++)
      o[u] = t(u + 1, u, void 0, a);
  } else if (Nt(e))
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
const zf = (e) => e ? Oy(e) ? Bc(e) : zf(e.parent) : null, Ss = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ On(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zf(e.parent),
    $root: (e) => zf(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => dy(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Vd(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = jc.bind(e.proxy)),
    $watch: (e) => Rx.bind(e)
  })
), Uu = (e, t) => e !== Pt && !e.__isScriptSetup && yt(e, t), eS = {
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
        if (Uu(r, t))
          return c[t] = 1, r[t];
        if (o !== Pt && yt(o, t))
          return c[t] = 2, o[t];
        if (yt(a, t))
          return c[t] = 3, a[t];
        if (n !== Pt && yt(n, t))
          return c[t] = 4, n[t];
        jf && (c[t] = 0);
      }
    }
    const b = Ss[t];
    let y, v;
    if (b)
      return t === "$attrs" && Pn(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (y = u.__cssModules) && (y = y[t])
    )
      return y;
    if (n !== Pt && yt(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      v = d.config.globalProperties, yt(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return Uu(o, t) ? (o[t] = n, !0) : r !== Pt && yt(r, t) ? (r[t] = n, !0) : yt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== Pt && u[0] !== "$" && yt(e, u) || Uu(t, u) || yt(a, u) || yt(r, u) || yt(Ss, u) || yt(o.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : yt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Rm(e) {
  return Ye(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let jf = !0;
function tS(e) {
  const t = dy(e), n = e.proxy, r = e.ctx;
  jf = !1, t.beforeCreate && Vm(t.beforeCreate, e, "bc");
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
    deactivated: I,
    beforeDestroy: F,
    beforeUnmount: W,
    destroyed: V,
    unmounted: z,
    render: _,
    renderTracked: R,
    renderTriggered: B,
    errorCaptured: se,
    serverPrefetch: xe,
    // public API
    expose: A,
    inheritAttrs: L,
    // assets
    components: de,
    directives: Pe,
    filters: fe
  } = t;
  if (b && nS(b, r, null), c)
    for (const T in c) {
      const E = c[T];
      Qe(E) && (r[T] = E.bind(n));
    }
  if (o) {
    const T = o.call(n, n);
    Nt(T) && (e.data = /* @__PURE__ */ Na(T));
  }
  if (jf = !0, a)
    for (const T in a) {
      const E = a[T], te = Qe(E) ? E.bind(n, n) : Qe(E.get) ? E.get.bind(n, n) : Xr, re = !Qe(E) && Qe(E.set) ? E.set.bind(n) : Xr, Oe = dt({
        get: te,
        set: re
      });
      Object.defineProperty(r, T, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (Ee) => Oe.value = Ee
      });
    }
  if (u)
    for (const T in u)
      fy(u[T], r, n, T);
  if (d) {
    const T = Qe(d) ? d.call(n) : d;
    Reflect.ownKeys(T).forEach((E) => {
      Tx(E, T[E]);
    });
  }
  y && Vm(y, e, "c");
  function q(T, E) {
    Ye(E) ? E.forEach((te) => T(te.bind(n))) : E && T(E.bind(n));
  }
  if (q(Kx, v), q(Gc, x), q(Wx, N), q(Bx, k), q(jx, P), q(Hx, I), q(qx, se), q(Xx, R), q(Yx, B), q(Ys, W), q(cy, z), q(Ux, xe), Ye(A))
    if (A.length) {
      const T = e.exposed || (e.exposed = {});
      A.forEach((E) => {
        Object.defineProperty(T, E, {
          get: () => n[E],
          set: (te) => n[E] = te,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  _ && e.render === Xr && (e.render = _), L != null && (e.inheritAttrs = L), de && (e.components = de), Pe && (e.directives = Pe), xe && ay(e);
}
function nS(e, t, n = Xr) {
  Ye(e) && (e = Hf(e));
  for (const r in e) {
    const o = e[r];
    let a;
    Nt(o) ? "default" in o ? a = $l(
      o.from || r,
      o.default,
      !0
    ) : a = $l(o.from || r) : a = $l(o), /* @__PURE__ */ In(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function Vm(e, t, n) {
  Qr(
    Ye(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function fy(e, t, n, r) {
  let o = r.includes(".") ? oy(n, r) : () => n[r];
  if (tn(e)) {
    const a = t[e];
    Qe(a) && vo(o, a);
  } else if (Qe(e))
    vo(o, e.bind(n));
  else if (Nt(e))
    if (Ye(e))
      e.forEach((a) => fy(a, t, n, r));
    else {
      const a = Qe(e.handler) ? e.handler.bind(n) : t[e.handler];
      Qe(a) && vo(o, a, e);
    }
}
function dy(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => lc(d, b, c, !0)
  ), lc(d, t, c)), Nt(t) && a.set(t, d), d;
}
function lc(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && lc(e, a, n, !0), o && o.forEach(
    (c) => lc(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const u = rS[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const rS = {
  data: $m,
  props: zm,
  emits: zm,
  // objects
  methods: cs,
  computed: cs,
  // lifecycle
  beforeCreate: Vn,
  created: Vn,
  beforeMount: Vn,
  mounted: Vn,
  beforeUpdate: Vn,
  updated: Vn,
  beforeDestroy: Vn,
  beforeUnmount: Vn,
  destroyed: Vn,
  unmounted: Vn,
  activated: Vn,
  deactivated: Vn,
  errorCaptured: Vn,
  serverPrefetch: Vn,
  // assets
  components: cs,
  directives: cs,
  // watch
  watch: oS,
  // provide / inject
  provide: $m,
  inject: iS
};
function $m(e, t) {
  return t ? e ? function() {
    return On(
      Qe(e) ? e.call(this, this) : e,
      Qe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function iS(e, t) {
  return cs(Hf(e), Hf(t));
}
function Hf(e) {
  if (Ye(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Vn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function cs(e, t) {
  return e ? On(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function zm(e, t) {
  return e ? Ye(e) && Ye(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : On(
    /* @__PURE__ */ Object.create(null),
    Rm(e),
    Rm(t ?? {})
  ) : t;
}
function oS(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = On(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = Vn(e[r], t[r]);
  return n;
}
function py() {
  return {
    app: null,
    config: {
      isNativeTag: A0,
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
let aS = 0;
function sS(e, t) {
  return function(r, o = null) {
    Qe(r) || (r = On({}, r)), o != null && !Nt(o) && (o = null);
    const a = py(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: aS++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: $S,
      get config() {
        return a.config;
      },
      set config(y) {
      },
      use(y, ...v) {
        return c.has(y) || (y && Qe(y.install) ? (c.add(y), y.install(b, ...v)) : Qe(y) && (c.add(y), y(b, ...v))), b;
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
          const N = b._ceVNode || De(r, o);
          return N.appContext = a, x === !0 ? x = "svg" : x === !1 && (x = void 0), e(N, y, x), d = !0, b._container = y, y.__vue_app__ = b, Bc(N.component);
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
        const v = pa;
        pa = b;
        try {
          return y();
        } finally {
          pa = v;
        }
      }
    };
    return b;
  };
}
let pa = null;
const lS = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${jn(t)}Modifiers`] || e[`${Po(t)}Modifiers`];
function cS(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Pt;
  let o = n;
  const a = t.startsWith("update:"), c = a && lS(r, t.slice(7));
  c && (c.trim && (o = n.map((y) => tn(y) ? y.trim() : y)), c.number && (o = n.map(Cd)));
  let u, d = r[u = Hu(t)] || // also try camelCase event handler (#2249)
  r[u = Hu(jn(t))];
  !d && a && (d = r[u = Hu(Po(t))]), d && Qr(
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
const uS = /* @__PURE__ */ new WeakMap();
function hy(e, t, n = !1) {
  const r = n ? uS : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, u = !1;
  if (!Qe(e)) {
    const d = (b) => {
      const y = hy(b, t, !0);
      y && (u = !0, On(c, y));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (Nt(e) && r.set(e, null), null) : (Ye(a) ? a.forEach((d) => c[d] = null) : On(c, a), Nt(e) && r.set(e, c), c);
}
function Kc(e, t) {
  return !e || !Tc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), yt(e, t[0].toLowerCase() + t.slice(1)) || yt(e, Po(t)) || yt(e, t));
}
function jm(e) {
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
  } = e, I = ac(e);
  let F, W;
  try {
    if (n.shapeFlag & 4) {
      const z = o || r, _ = z;
      F = Br(
        b.call(
          _,
          z,
          y,
          v,
          N,
          x,
          k
        )
      ), W = u;
    } else {
      const z = t;
      F = Br(
        z.length > 1 ? z(
          v,
          { attrs: u, slots: c, emit: d }
        ) : z(
          v,
          null
        )
      ), W = t.props ? u : fS(u);
    }
  } catch (z) {
    ks.length = 0, zc(z, e, 1), F = De(ji);
  }
  let V = F;
  if (W && P !== !1) {
    const z = Object.keys(W), { shapeFlag: _ } = V;
    z.length && _ & 7 && (a && z.some(Dc) && (W = dS(
      W,
      a
    )), V = xa(V, W, !1, !0));
  }
  return n.dirs && (V = xa(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(n.dirs) : n.dirs), n.transition && $d(V, n.transition), F = V, ac(I), F;
}
const fS = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Tc(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, dS = (e, t) => {
  const n = {};
  for (const r in e)
    (!Dc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function pS(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? Hm(r, c, b) : !!c;
    if (d & 8) {
      const y = t.dynamicProps;
      for (let v = 0; v < y.length; v++) {
        const x = y[v];
        if (my(c, r, x) && !Kc(b, x))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? Hm(r, c, b) : !0 : !!c;
  return !1;
}
function Hm(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (my(t, e, a) && !Kc(n, a))
      return !0;
  }
  return !1;
}
function my(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && Nt(r) && Nt(o) ? !Id(r, o) : r !== o;
}
function hS({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const gy = {}, yy = () => Object.create(gy), by = (e) => Object.getPrototypeOf(e) === gy;
function mS(e, t, n, r = !1) {
  const o = {}, a = yy();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), vy(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ xx(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function gS(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, u = /* @__PURE__ */ gt(o), [d] = e.propsOptions;
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
        if (Kc(e.emitsOptions, x))
          continue;
        const N = t[x];
        if (d)
          if (yt(a, x))
            N !== a[x] && (a[x] = N, b = !0);
          else {
            const k = jn(x);
            o[k] = Gf(
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
    vy(e, t, o, a) && (b = !0);
    let y;
    for (const v in u)
      (!t || // for camelCase
      !yt(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((y = Po(v)) === v || !yt(t, y))) && (d ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[y] !== void 0) && (o[v] = Gf(
        d,
        u,
        v,
        void 0,
        e,
        !0
      )) : delete o[v]);
    if (a !== u)
      for (const v in a)
        (!t || !yt(t, v)) && (delete a[v], b = !0);
  }
  b && gi(e.attrs, "set", "");
}
function vy(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (bs(d))
        continue;
      const b = t[d];
      let y;
      o && yt(o, y = jn(d)) ? !a || !a.includes(y) ? n[y] = b : (u || (u = {}))[y] = b : Kc(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ gt(n), b = u || Pt;
    for (let y = 0; y < a.length; y++) {
      const v = a[y];
      n[v] = Gf(
        o,
        d,
        v,
        b[v],
        e,
        !yt(b, v)
      );
    }
  }
  return c;
}
function Gf(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const u = yt(c, "default");
    if (u && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && Qe(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const y = Xs(o);
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
const yS = /* @__PURE__ */ new WeakMap();
function _y(e, t, n = !1) {
  const r = n ? yS : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, u = [];
  let d = !1;
  if (!Qe(e)) {
    const y = (v) => {
      d = !0;
      const [x, N] = _y(v, t, !0);
      On(c, x), N && u.push(...N);
    };
    !n && t.mixins.length && t.mixins.forEach(y), e.extends && y(e.extends), e.mixins && e.mixins.forEach(y);
  }
  if (!a && !d)
    return Nt(e) && r.set(e, ua), ua;
  if (Ye(a))
    for (let y = 0; y < a.length; y++) {
      const v = jn(a[y]);
      Gm(v) && (c[v] = Pt);
    }
  else if (a)
    for (const y in a) {
      const v = jn(y);
      if (Gm(v)) {
        const x = a[y], N = c[v] = Ye(x) || Qe(x) ? { type: x } : On({}, x), k = N.type;
        let P = !1, I = !0;
        if (Ye(k))
          for (let F = 0; F < k.length; ++F) {
            const W = k[F], V = Qe(W) && W.name;
            if (V === "Boolean") {
              P = !0;
              break;
            } else V === "String" && (I = !1);
          }
        else
          P = Qe(k) && k.name === "Boolean";
        N[
          0
          /* shouldCast */
        ] = P, N[
          1
          /* shouldCastTrue */
        ] = I, (P || yt(N, "default")) && u.push(v);
      }
    }
  const b = [c, u];
  return Nt(e) && r.set(e, b), b;
}
function Gm(e) {
  return e[0] !== "$" && !bs(e);
}
const zd = (e) => e === "_" || e === "_ctx" || e === "$stable", jd = (e) => Ye(e) ? e.map(Br) : [Br(e)], bS = (e, t, n) => {
  if (t._n)
    return t;
  const r = ry((...o) => jd(t(...o)), n);
  return r._c = !1, r;
}, wy = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (zd(o)) continue;
    const a = e[o];
    if (Qe(a))
      t[o] = bS(o, a, r);
    else if (a != null) {
      const c = jd(a);
      t[o] = () => c;
    }
  }
}, xy = (e, t) => {
  const n = jd(t);
  e.slots.default = () => n;
}, Sy = (e, t, n) => {
  for (const r in t)
    (n || !zd(r)) && (e[r] = t[r]);
}, vS = (e, t, n) => {
  const r = e.slots = yy();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (Sy(r, t, n), n && F0(r, "_", o, !0)) : wy(t, r);
  } else t && xy(e, t);
}, _S = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = Pt;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : Sy(o, t, n) : (a = !t.$stable, wy(t, o)), c = t;
  } else t && (xy(e, t), c = { default: 1 });
  if (a)
    for (const u in o)
      !zd(u) && c[u] == null && delete o[u];
}, Un = MS;
function wS(e) {
  return xS(e);
}
function xS(e, t) {
  const n = Vc();
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
  } = e, P = (j, K, ae, we = null, be = null, _e = null, Me = void 0, Ae = null, Se = !!K.dynamicChildren) => {
    if (j === K)
      return;
    j && !ts(j, K) && (we = Ne(j), Ee(j, be, _e, !0), j = null), K.patchFlag === -2 && (Se = !1, K.dynamicChildren = null);
    const { type: he, ref: Ie, shapeFlag: Ce } = K;
    switch (he) {
      case Wc:
        I(j, K, ae, we);
        break;
      case ji:
        F(j, K, ae, we);
        break;
      case Xu:
        j == null && W(K, ae, we, Me);
        break;
      case We:
        de(
          j,
          K,
          ae,
          we,
          be,
          _e,
          Me,
          Ae,
          Se
        );
        break;
      default:
        Ce & 1 ? _(
          j,
          K,
          ae,
          we,
          be,
          _e,
          Me,
          Ae,
          Se
        ) : Ce & 6 ? Pe(
          j,
          K,
          ae,
          we,
          be,
          _e,
          Me,
          Ae,
          Se
        ) : (Ce & 64 || Ce & 128) && he.process(
          j,
          K,
          ae,
          we,
          be,
          _e,
          Me,
          Ae,
          Se,
          gn
        );
    }
    Ie != null && be ? ws(Ie, j && j.ref, _e, K || j, !K) : Ie == null && j && j.ref != null && ws(j.ref, null, _e, j, !0);
  }, I = (j, K, ae, we) => {
    if (j == null)
      r(
        K.el = u(K.children),
        ae,
        we
      );
    else {
      const be = K.el = j.el;
      K.children !== j.children && b(be, K.children);
    }
  }, F = (j, K, ae, we) => {
    j == null ? r(
      K.el = d(K.children || ""),
      ae,
      we
    ) : K.el = j.el;
  }, W = (j, K, ae, we) => {
    [j.el, j.anchor] = k(
      j.children,
      K,
      ae,
      we,
      j.el,
      j.anchor
    );
  }, V = ({ el: j, anchor: K }, ae, we) => {
    let be;
    for (; j && j !== K; )
      be = x(j), r(j, ae, we), j = be;
    r(K, ae, we);
  }, z = ({ el: j, anchor: K }) => {
    let ae;
    for (; j && j !== K; )
      ae = x(j), o(j), j = ae;
    o(K);
  }, _ = (j, K, ae, we, be, _e, Me, Ae, Se) => {
    if (K.type === "svg" ? Me = "svg" : K.type === "math" && (Me = "mathml"), j == null)
      R(
        K,
        ae,
        we,
        be,
        _e,
        Me,
        Ae,
        Se
      );
    else {
      const he = j.el && j.el._isVueCE ? j.el : null;
      try {
        he && he._beginPatch(), xe(
          j,
          K,
          be,
          _e,
          Me,
          Ae,
          Se
        );
      } finally {
        he && he._endPatch();
      }
    }
  }, R = (j, K, ae, we, be, _e, Me, Ae) => {
    let Se, he;
    const { props: Ie, shapeFlag: Ce, transition: Ve, dirs: je } = j;
    if (Se = j.el = c(
      j.type,
      _e,
      Ie && Ie.is,
      Ie
    ), Ce & 8 ? y(Se, j.children) : Ce & 16 && se(
      j.children,
      Se,
      null,
      we,
      be,
      Yu(j, _e),
      Me,
      Ae
    ), je && ro(j, null, we, "created"), B(Se, j, j.scopeId, Me, we), Ie) {
      for (const it in Ie)
        it !== "value" && !bs(it) && a(Se, it, null, Ie[it], _e, we);
      "value" in Ie && a(Se, "value", null, Ie.value, _e), (he = Ie.onVnodeBeforeMount) && zr(he, we, j);
    }
    je && ro(j, null, we, "beforeMount");
    const rt = SS(be, Ve);
    rt && Ve.beforeEnter(Se), r(Se, K, ae), ((he = Ie && Ie.onVnodeMounted) || rt || je) && Un(() => {
      try {
        he && zr(he, we, j), rt && Ve.enter(Se), je && ro(j, null, we, "mounted");
      } finally {
      }
    }, be);
  }, B = (j, K, ae, we, be) => {
    if (ae && N(j, ae), we)
      for (let _e = 0; _e < we.length; _e++)
        N(j, we[_e]);
    if (be) {
      let _e = be.subTree;
      if (K === _e || Py(_e.type) && (_e.ssContent === K || _e.ssFallback === K)) {
        const Me = be.vnode;
        B(
          j,
          Me,
          Me.scopeId,
          Me.slotScopeIds,
          be.parent
        );
      }
    }
  }, se = (j, K, ae, we, be, _e, Me, Ae, Se = 0) => {
    for (let he = Se; he < j.length; he++) {
      const Ie = j[he] = Ae ? hi(j[he]) : Br(j[he]);
      P(
        null,
        Ie,
        K,
        ae,
        we,
        be,
        _e,
        Me,
        Ae
      );
    }
  }, xe = (j, K, ae, we, be, _e, Me) => {
    const Ae = K.el = j.el;
    let { patchFlag: Se, dynamicChildren: he, dirs: Ie } = K;
    Se |= j.patchFlag & 16;
    const Ce = j.props || Pt, Ve = K.props || Pt;
    let je;
    if (ae && io(ae, !1), (je = Ve.onVnodeBeforeUpdate) && zr(je, ae, K, j), Ie && ro(K, j, ae, "beforeUpdate"), ae && io(ae, !0), (Ce.innerHTML && Ve.innerHTML == null || Ce.textContent && Ve.textContent == null) && y(Ae, ""), he ? A(
      j.dynamicChildren,
      he,
      Ae,
      ae,
      we,
      Yu(K, be),
      _e
    ) : Me || E(
      j,
      K,
      Ae,
      null,
      ae,
      we,
      Yu(K, be),
      _e,
      !1
    ), Se > 0) {
      if (Se & 16)
        L(Ae, Ce, Ve, ae, be);
      else if (Se & 2 && Ce.class !== Ve.class && a(Ae, "class", null, Ve.class, be), Se & 4 && a(Ae, "style", Ce.style, Ve.style, be), Se & 8) {
        const rt = K.dynamicProps;
        for (let it = 0; it < rt.length; it++) {
          const ut = rt[it], ft = Ce[ut], Dt = Ve[ut];
          (Dt !== ft || ut === "value") && a(Ae, ut, ft, Dt, be, ae);
        }
      }
      Se & 1 && j.children !== K.children && y(Ae, K.children);
    } else !Me && he == null && L(Ae, Ce, Ve, ae, be);
    ((je = Ve.onVnodeUpdated) || Ie) && Un(() => {
      je && zr(je, ae, K, j), Ie && ro(K, j, ae, "updated");
    }, we);
  }, A = (j, K, ae, we, be, _e, Me) => {
    for (let Ae = 0; Ae < K.length; Ae++) {
      const Se = j[Ae], he = K[Ae], Ie = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Se.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Se.type === We || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ts(Se, he) || // - In the case of a component, it could contain anything.
        Se.shapeFlag & 198) ? v(Se.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ae
        )
      );
      P(
        Se,
        he,
        Ie,
        null,
        we,
        be,
        _e,
        Me,
        !0
      );
    }
  }, L = (j, K, ae, we, be) => {
    if (K !== ae) {
      if (K !== Pt)
        for (const _e in K)
          !bs(_e) && !(_e in ae) && a(
            j,
            _e,
            K[_e],
            null,
            be,
            we
          );
      for (const _e in ae) {
        if (bs(_e)) continue;
        const Me = ae[_e], Ae = K[_e];
        Me !== Ae && _e !== "value" && a(j, _e, Ae, Me, be, we);
      }
      "value" in ae && a(j, "value", K.value, ae.value, be);
    }
  }, de = (j, K, ae, we, be, _e, Me, Ae, Se) => {
    const he = K.el = j ? j.el : u(""), Ie = K.anchor = j ? j.anchor : u("");
    let { patchFlag: Ce, dynamicChildren: Ve, slotScopeIds: je } = K;
    je && (Ae = Ae ? Ae.concat(je) : je), j == null ? (r(he, ae, we), r(Ie, ae, we), se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      K.children || [],
      ae,
      Ie,
      be,
      _e,
      Me,
      Ae,
      Se
    )) : Ce > 0 && Ce & 64 && Ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    j.dynamicChildren && j.dynamicChildren.length === Ve.length ? (A(
      j.dynamicChildren,
      Ve,
      ae,
      be,
      _e,
      Me,
      Ae
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (K.key != null || be && K === be.subTree) && ky(
      j,
      K,
      !0
      /* shallow */
    )) : E(
      j,
      K,
      ae,
      Ie,
      be,
      _e,
      Me,
      Ae,
      Se
    );
  }, Pe = (j, K, ae, we, be, _e, Me, Ae, Se) => {
    K.slotScopeIds = Ae, j == null ? K.shapeFlag & 512 ? be.ctx.activate(
      K,
      ae,
      we,
      Me,
      Se
    ) : fe(
      K,
      ae,
      we,
      be,
      _e,
      Me,
      Se
    ) : U(j, K, Se);
  }, fe = (j, K, ae, we, be, _e, Me) => {
    const Ae = j.component = OS(
      j,
      we,
      be
    );
    if (sy(j) && (Ae.ctx.renderer = gn), FS(Ae, !1, Me), Ae.asyncDep) {
      if (be && be.registerDep(Ae, q, Me), !j.el) {
        const Se = Ae.subTree = De(ji);
        F(null, Se, K, ae), j.placeholder = Se.el;
      }
    } else
      q(
        Ae,
        j,
        K,
        ae,
        be,
        _e,
        Me
      );
  }, U = (j, K, ae) => {
    const we = K.component = j.component;
    if (pS(j, K, ae))
      if (we.asyncDep && !we.asyncResolved) {
        T(we, K, ae);
        return;
      } else
        we.next = K, we.update();
    else
      K.el = j.el, we.vnode = K;
  }, q = (j, K, ae, we, be, _e, Me) => {
    const Ae = () => {
      if (j.isMounted) {
        let { next: Ce, bu: Ve, u: je, parent: rt, vnode: it } = j;
        {
          const Fn = My(j);
          if (Fn) {
            Ce && (Ce.el = it.el, T(j, Ce, Me)), Fn.asyncDep.then(() => {
              Un(() => {
                j.isUnmounted || he();
              }, be);
            });
            return;
          }
        }
        let ut = Ce, ft;
        io(j, !1), Ce ? (Ce.el = it.el, T(j, Ce, Me)) : Ce = it, Ve && Vl(Ve), (ft = Ce.props && Ce.props.onVnodeBeforeUpdate) && zr(ft, rt, Ce, it), io(j, !0);
        const Dt = jm(j), En = j.subTree;
        j.subTree = Dt, P(
          En,
          Dt,
          // parent may have changed if it's in a teleport
          v(En.el),
          // anchor may have changed if it's in a fragment
          Ne(En),
          j,
          be,
          _e
        ), Ce.el = Dt.el, ut === null && hS(j, Dt.el), je && Un(je, be), (ft = Ce.props && Ce.props.onVnodeUpdated) && Un(
          () => zr(ft, rt, Ce, it),
          be
        );
      } else {
        let Ce;
        const { el: Ve, props: je } = K, { bm: rt, m: it, parent: ut, root: ft, type: Dt } = j, En = xs(K);
        io(j, !1), rt && Vl(rt), !En && (Ce = je && je.onVnodeBeforeMount) && zr(Ce, ut, K), io(j, !0);
        {
          ft.ce && ft.ce._hasShadowRoot() && ft.ce._injectChildStyle(
            Dt,
            j.parent ? j.parent.type : void 0
          );
          const Fn = j.subTree = jm(j);
          P(
            null,
            Fn,
            ae,
            we,
            j,
            be,
            _e
          ), K.el = Fn.el;
        }
        if (it && Un(it, be), !En && (Ce = je && je.onVnodeMounted)) {
          const Fn = K;
          Un(
            () => zr(Ce, ut, Fn),
            be
          );
        }
        (K.shapeFlag & 256 || ut && xs(ut.vnode) && ut.vnode.shapeFlag & 256) && j.a && Un(j.a, be), j.isMounted = !0, K = ae = we = null;
      }
    };
    j.scope.on();
    const Se = j.effect = new R0(Ae);
    j.scope.off();
    const he = j.update = Se.run.bind(Se), Ie = j.job = Se.runIfDirty.bind(Se);
    Ie.i = j, Ie.id = j.uid, Se.scheduler = () => Vd(Ie), io(j, !0), he();
  }, T = (j, K, ae) => {
    K.component = j;
    const we = j.vnode.props;
    j.vnode = K, j.next = null, gS(j, K.props, we, ae), _S(j, K.children, ae), wi(), Fm(j), xi();
  }, E = (j, K, ae, we, be, _e, Me, Ae, Se = !1) => {
    const he = j && j.children, Ie = j ? j.shapeFlag : 0, Ce = K.children, { patchFlag: Ve, shapeFlag: je } = K;
    if (Ve > 0) {
      if (Ve & 128) {
        re(
          he,
          Ce,
          ae,
          we,
          be,
          _e,
          Me,
          Ae,
          Se
        );
        return;
      } else if (Ve & 256) {
        te(
          he,
          Ce,
          ae,
          we,
          be,
          _e,
          Me,
          Ae,
          Se
        );
        return;
      }
    }
    je & 8 ? (Ie & 16 && mt(he, be, _e), Ce !== he && y(ae, Ce)) : Ie & 16 ? je & 16 ? re(
      he,
      Ce,
      ae,
      we,
      be,
      _e,
      Me,
      Ae,
      Se
    ) : mt(he, be, _e, !0) : (Ie & 8 && y(ae, ""), je & 16 && se(
      Ce,
      ae,
      we,
      be,
      _e,
      Me,
      Ae,
      Se
    ));
  }, te = (j, K, ae, we, be, _e, Me, Ae, Se) => {
    j = j || ua, K = K || ua;
    const he = j.length, Ie = K.length, Ce = Math.min(he, Ie);
    let Ve;
    for (Ve = 0; Ve < Ce; Ve++) {
      const je = K[Ve] = Se ? hi(K[Ve]) : Br(K[Ve]);
      P(
        j[Ve],
        je,
        ae,
        null,
        be,
        _e,
        Me,
        Ae,
        Se
      );
    }
    he > Ie ? mt(
      j,
      be,
      _e,
      !0,
      !1,
      Ce
    ) : se(
      K,
      ae,
      we,
      be,
      _e,
      Me,
      Ae,
      Se,
      Ce
    );
  }, re = (j, K, ae, we, be, _e, Me, Ae, Se) => {
    let he = 0;
    const Ie = K.length;
    let Ce = j.length - 1, Ve = Ie - 1;
    for (; he <= Ce && he <= Ve; ) {
      const je = j[he], rt = K[he] = Se ? hi(K[he]) : Br(K[he]);
      if (ts(je, rt))
        P(
          je,
          rt,
          ae,
          null,
          be,
          _e,
          Me,
          Ae,
          Se
        );
      else
        break;
      he++;
    }
    for (; he <= Ce && he <= Ve; ) {
      const je = j[Ce], rt = K[Ve] = Se ? hi(K[Ve]) : Br(K[Ve]);
      if (ts(je, rt))
        P(
          je,
          rt,
          ae,
          null,
          be,
          _e,
          Me,
          Ae,
          Se
        );
      else
        break;
      Ce--, Ve--;
    }
    if (he > Ce) {
      if (he <= Ve) {
        const je = Ve + 1, rt = je < Ie ? K[je].el : we;
        for (; he <= Ve; )
          P(
            null,
            K[he] = Se ? hi(K[he]) : Br(K[he]),
            ae,
            rt,
            be,
            _e,
            Me,
            Ae,
            Se
          ), he++;
      }
    } else if (he > Ve)
      for (; he <= Ce; )
        Ee(j[he], be, _e, !0), he++;
    else {
      const je = he, rt = he, it = /* @__PURE__ */ new Map();
      for (he = rt; he <= Ve; he++) {
        const Ke = K[he] = Se ? hi(K[he]) : Br(K[he]);
        Ke.key != null && it.set(Ke.key, he);
      }
      let ut, ft = 0;
      const Dt = Ve - rt + 1;
      let En = !1, Fn = 0;
      const ti = new Array(Dt);
      for (he = 0; he < Dt; he++) ti[he] = 0;
      for (he = je; he <= Ce; he++) {
        const Ke = j[he];
        if (ft >= Dt) {
          Ee(Ke, be, _e, !0);
          continue;
        }
        let nn;
        if (Ke.key != null)
          nn = it.get(Ke.key);
        else
          for (ut = rt; ut <= Ve; ut++)
            if (ti[ut - rt] === 0 && ts(Ke, K[ut])) {
              nn = ut;
              break;
            }
        nn === void 0 ? Ee(Ke, be, _e, !0) : (ti[nn - rt] = he + 1, nn >= Fn ? Fn = nn : En = !0, P(
          Ke,
          K[nn],
          ae,
          null,
          be,
          _e,
          Me,
          Ae,
          Se
        ), ft++);
      }
      const h = En ? kS(ti) : ua;
      for (ut = h.length - 1, he = Dt - 1; he >= 0; he--) {
        const Ke = rt + he, nn = K[Ke], Zt = K[Ke + 1], Ni = Ke + 1 < Ie ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Zt.el || Ny(Zt)
        ) : we;
        ti[he] === 0 ? P(
          null,
          nn,
          ae,
          Ni,
          be,
          _e,
          Me,
          Ae,
          Se
        ) : En && (ut < 0 || he !== h[ut] ? Oe(nn, ae, Ni, 2) : ut--);
      }
    }
  }, Oe = (j, K, ae, we, be = null) => {
    const { el: _e, type: Me, transition: Ae, children: Se, shapeFlag: he } = j;
    if (he & 6) {
      Oe(j.component.subTree, K, ae, we);
      return;
    }
    if (he & 128) {
      j.suspense.move(K, ae, we);
      return;
    }
    if (he & 64) {
      Me.move(j, K, ae, gn);
      return;
    }
    if (Me === We) {
      r(_e, K, ae);
      for (let Ce = 0; Ce < Se.length; Ce++)
        Oe(Se[Ce], K, ae, we);
      r(j.anchor, K, ae);
      return;
    }
    if (Me === Xu) {
      V(j, K, ae);
      return;
    }
    if (we !== 2 && he & 1 && Ae)
      if (we === 0)
        Ae.beforeEnter(_e), r(_e, K, ae), Un(() => Ae.enter(_e), be);
      else {
        const { leave: Ce, delayLeave: Ve, afterLeave: je } = Ae, rt = () => {
          j.ctx.isUnmounted ? o(_e) : r(_e, K, ae);
        }, it = () => {
          _e._isLeaving && _e[zx](
            !0
            /* cancelled */
          ), Ce(_e, () => {
            rt(), je && je();
          });
        };
        Ve ? Ve(_e, rt, it) : it();
      }
    else
      r(_e, K, ae);
  }, Ee = (j, K, ae, we = !1, be = !1) => {
    const {
      type: _e,
      props: Me,
      ref: Ae,
      children: Se,
      dynamicChildren: he,
      shapeFlag: Ie,
      patchFlag: Ce,
      dirs: Ve,
      cacheIndex: je,
      memo: rt
    } = j;
    if (Ce === -2 && (be = !1), Ae != null && (wi(), ws(Ae, null, ae, j, !0), xi()), je != null && (K.renderCache[je] = void 0), Ie & 256) {
      K.ctx.deactivate(j);
      return;
    }
    const it = Ie & 1 && Ve, ut = !xs(j);
    let ft;
    if (ut && (ft = Me && Me.onVnodeBeforeUnmount) && zr(ft, K, j), Ie & 6)
      $(j.component, ae, we);
    else {
      if (Ie & 128) {
        j.suspense.unmount(ae, we);
        return;
      }
      it && ro(j, null, K, "beforeUnmount"), Ie & 64 ? j.type.remove(
        j,
        K,
        ae,
        gn,
        we
      ) : he && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !he.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_e !== We || Ce > 0 && Ce & 64) ? mt(
        he,
        K,
        ae,
        !1,
        !0
      ) : (_e === We && Ce & 384 || !be && Ie & 16) && mt(Se, K, ae), we && vt(j);
    }
    const Dt = rt != null && je == null;
    (ut && (ft = Me && Me.onVnodeUnmounted) || it || Dt) && Un(() => {
      ft && zr(ft, K, j), it && ro(j, null, K, "unmounted"), Dt && (j.el = null);
    }, ae);
  }, vt = (j) => {
    const { type: K, el: ae, anchor: we, transition: be } = j;
    if (K === We) {
      pt(ae, we);
      return;
    }
    if (K === Xu) {
      z(j);
      return;
    }
    const _e = () => {
      o(ae), be && !be.persisted && be.afterLeave && be.afterLeave();
    };
    if (j.shapeFlag & 1 && be && !be.persisted) {
      const { leave: Me, delayLeave: Ae } = be, Se = () => Me(ae, _e);
      Ae ? Ae(j.el, _e, Se) : Se();
    } else
      _e();
  }, pt = (j, K) => {
    let ae;
    for (; j !== K; )
      ae = x(j), o(j), j = ae;
    o(K);
  }, $ = (j, K, ae) => {
    const { bum: we, scope: be, job: _e, subTree: Me, um: Ae, m: Se, a: he } = j;
    Km(Se), Km(he), we && Vl(we), be.stop(), _e && (_e.flags |= 8, Ee(Me, j, K, ae)), Ae && Un(Ae, K), Un(() => {
      j.isUnmounted = !0;
    }, K);
  }, mt = (j, K, ae, we = !1, be = !1, _e = 0) => {
    for (let Me = _e; Me < j.length; Me++)
      Ee(j[Me], K, ae, we, be);
  }, Ne = (j) => {
    if (j.shapeFlag & 6)
      return Ne(j.component.subTree);
    if (j.shapeFlag & 128)
      return j.suspense.next();
    const K = x(j.anchor || j.el), ae = K && K[Vx];
    return ae ? x(ae) : K;
  };
  let wt = !1;
  const Et = (j, K, ae) => {
    let we;
    j == null ? K._vnode && (Ee(K._vnode, null, null, !0), we = K._vnode.component) : P(
      K._vnode || null,
      j,
      K,
      null,
      null,
      null,
      ae
    ), K._vnode = j, wt || (wt = !0, Fm(we), ey(), wt = !1);
  }, gn = {
    p: P,
    um: Ee,
    m: Oe,
    r: vt,
    mt: fe,
    mc: se,
    pc: E,
    pbc: A,
    n: Ne,
    o: e
  };
  return {
    render: Et,
    hydrate: void 0,
    createApp: sS(Et)
  };
}
function Yu({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function io({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function SS(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ky(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (Ye(r) && Ye(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = hi(o[a]), u.el = c.el), !n && u.patchFlag !== -2 && ky(c, u)), u.type === Wc && (u.patchFlag === -1 && (u = o[a] = hi(u)), u.el = c.el), u.type === ji && !u.el && (u.el = c.el);
    }
}
function kS(e) {
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
function My(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : My(t);
}
function Km(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Ny(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Ny(t.subTree) : null;
}
const Py = (e) => e.__isSuspense;
function MS(e, t) {
  t && t.pendingBranch ? Ye(e) ? t.effects.push(...e) : t.effects.push(e) : Fx(e);
}
const We = /* @__PURE__ */ Symbol.for("v-fgt"), Wc = /* @__PURE__ */ Symbol.for("v-txt"), ji = /* @__PURE__ */ Symbol.for("v-cmt"), Xu = /* @__PURE__ */ Symbol.for("v-stc"), ks = [];
let ir = null;
function ie(e = !1) {
  ks.push(ir = e ? null : []);
}
function NS() {
  ks.pop(), ir = ks[ks.length - 1] || null;
}
let Es = 1;
function Wm(e, t = !1) {
  Es += e, e < 0 && ir && t && (ir.hasOnce = !0);
}
function Ay(e) {
  return e.dynamicChildren = Es > 0 ? ir || ua : null, NS(), Es > 0 && ir && ir.push(e), e;
}
function ce(e, t, n, r, o, a) {
  return Ay(
    X(
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
  return Ay(
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
function Cy(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ts(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Iy = ({ key: e }) => e ?? null, zl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? tn(e) || /* @__PURE__ */ In(e) || Qe(e) ? { i: rr, r: e, k: t, f: !!n } : e : null);
function X(e, t = null, n = null, r = 0, o = null, a = e === We ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Iy(t),
    ref: t && zl(t),
    scopeId: ny,
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
    ctx: rr
  };
  return u ? (Hd(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= tn(n) ? 8 : 16), Es > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  ir && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && ir.push(d), d;
}
const De = PS;
function PS(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === uy) && (e = ji), Cy(e)) {
    const u = xa(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Hd(u, n), Es > 0 && !a && ir && (u.shapeFlag & 6 ? ir[ir.indexOf(e)] = u : ir.push(u)), u.patchFlag = -2, u;
  }
  if (VS(e) && (e = e.__vccOpts), t) {
    t = AS(t);
    let { class: u, style: d } = t;
    u && !tn(u) && (t.class = lt(u)), Nt(d) && (/* @__PURE__ */ Rd(d) && !Ye(d) && (d = On({}, d)), t.style = Mt(d));
  }
  const c = tn(e) ? 1 : Py(e) ? 128 : $x(e) ? 64 : Nt(e) ? 4 : Qe(e) ? 2 : 0;
  return X(
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
function AS(e) {
  return e ? /* @__PURE__ */ Rd(e) || by(e) ? On({}, e) : e : null;
}
function xa(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: u, transition: d } = e, b = t ? mi(o || {}, t) : o, y = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && Iy(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? Ye(a) ? a.concat(zl(t)) : [a, zl(t)] : zl(t)
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
    ssContent: e.ssContent && xa(e.ssContent),
    ssFallback: e.ssFallback && xa(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && $d(
    y,
    d.clone(y)
  ), y;
}
function us(e = " ", t = 0) {
  return De(Wc, null, e, t);
}
function ct(e = "", t = !1) {
  return t ? (ie(), vr(ji, null, e)) : De(ji, null, e);
}
function Br(e) {
  return e == null || typeof e == "boolean" ? De(ji) : Ye(e) ? De(
    We,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Cy(e) ? hi(e) : De(Wc, null, String(e));
}
function hi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : xa(e);
}
function Hd(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (Ye(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), Hd(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !by(t) ? t._ctx = rr : o === 3 && rr && (rr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Qe(t) ? (t = { default: t, _ctx: rr }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [us(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function mi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = lt([t.class, r.class]));
      else if (o === "style")
        t.style = Mt([t.style, r.style]);
      else if (Tc(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(Ye(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Dc(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function zr(e, t, n, r = null) {
  Qr(e, t, 7, [
    n,
    r
  ]);
}
const CS = py();
let IS = 0;
function OS(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || CS, a = {
    uid: IS++,
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
    scope: new nx(
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
    propsOptions: _y(r, o),
    emitsOptions: hy(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Pt,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: Pt,
    data: Pt,
    props: Pt,
    attrs: Pt,
    slots: Pt,
    refs: Pt,
    setupState: Pt,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = cS.bind(null, a), e.ce && e.ce(a), a;
}
let An = null;
const ES = () => An || rr;
let cc, Kf;
{
  const e = Vc(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  cc = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => An = n
  ), Kf = t(
    "__VUE_SSR_SETTERS__",
    (n) => Fs = n
  );
}
const Xs = (e) => {
  const t = An;
  return cc(e), e.scope.on(), () => {
    e.scope.off(), cc(t);
  };
}, Bm = () => {
  An && An.scope.off(), cc(null);
};
function Oy(e) {
  return e.vnode.shapeFlag & 4;
}
let Fs = !1;
function FS(e, t = !1, n = !1) {
  t && Kf(t);
  const { props: r, children: o } = e.vnode, a = Oy(e);
  mS(e, r, a, t), vS(e, o, n || t);
  const c = a ? TS(e, t) : void 0;
  return t && Kf(!1), c;
}
function TS(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, eS);
  const { setup: r } = n;
  if (r) {
    wi();
    const o = e.setupContext = r.length > 1 ? LS(e) : null, a = Xs(e), c = Us(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = I0(c);
    if (xi(), a(), (u || e.sp) && !xs(e) && ay(e), u) {
      if (c.then(Bm, Bm), t)
        return c.then((d) => {
          Um(e, d);
        }).catch((d) => {
          zc(d, e, 0);
        });
      e.asyncDep = c;
    } else
      Um(e, c);
  } else
    Ey(e);
}
function Um(e, t, n) {
  Qe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Nt(t) && (e.setupState = J0(t)), Ey(e);
}
function Ey(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || Xr);
  {
    const o = Xs(e);
    wi();
    try {
      tS(e);
    } finally {
      xi(), o();
    }
  }
}
const DS = {
  get(e, t) {
    return Pn(e, "get", ""), e[t];
  }
};
function LS(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, DS),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Bc(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(J0(Sx(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Ss)
        return Ss[n](e);
    },
    has(t, n) {
      return n in t || n in Ss;
    }
  })) : e.proxy;
}
function RS(e, t = !0) {
  return Qe(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function VS(e) {
  return Qe(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ Ax(e, t, Fs), $S = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Wf;
const Ym = typeof window < "u" && window.trustedTypes;
if (Ym)
  try {
    Wf = /* @__PURE__ */ Ym.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Fy = Wf ? (e) => Wf.createHTML(e) : (e) => e, zS = "http://www.w3.org/2000/svg", jS = "http://www.w3.org/1998/Math/MathML", fi = typeof document < "u" ? document : null, Xm = fi && /* @__PURE__ */ fi.createElement("template"), HS = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? fi.createElementNS(zS, e) : t === "mathml" ? fi.createElementNS(jS, e) : n ? fi.createElement(e, { is: n }) : fi.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => fi.createTextNode(e),
  createComment: (e) => fi.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => fi.querySelector(e),
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
      Xm.innerHTML = Fy(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = Xm.content;
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
}, GS = /* @__PURE__ */ Symbol("_vtc");
function KS(e, t, n) {
  const r = e[GS];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const uc = /* @__PURE__ */ Symbol("_vod"), Ty = /* @__PURE__ */ Symbol("_vsh"), No = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[uc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : ns(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), ns(e, !0), r.enter(e)) : r.leave(e, () => {
      ns(e, !1);
    }) : ns(e, t));
  },
  beforeUnmount(e, { value: t }) {
    ns(e, t);
  }
};
function ns(e, t) {
  e.style.display = t ? e[uc] : "none", e[Ty] = !t;
}
const WS = /* @__PURE__ */ Symbol(""), BS = /(?:^|;)\s*display\s*:/;
function US(e, t, n) {
  const r = e.style, o = tn(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (tn(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && jl(r, u, "");
        }
      else
        for (const c in t)
          n[c] == null && jl(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), jl(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[WS];
      c && (n += ";" + c), r.cssText = n, a = BS.test(n);
    }
  } else t && e.removeAttribute("style");
  uc in e && (e[uc] = a ? r.display : "", e[Ty] && (r.display = "none"));
}
const qm = /\s*!important$/;
function jl(e, t, n) {
  if (Ye(n))
    n.forEach((r) => jl(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = YS(e, t);
    qm.test(n) ? e.setProperty(
      Po(r),
      n.replace(qm, ""),
      "important"
    ) : e[r] = n;
  }
}
const Jm = ["Webkit", "Moz", "ms"], qu = {};
function YS(e, t) {
  const n = qu[t];
  if (n)
    return n;
  let r = jn(t);
  if (r !== "filter" && r in e)
    return qu[t] = r;
  r = Rc(r);
  for (let o = 0; o < Jm.length; o++) {
    const a = Jm[o] + r;
    if (a in e)
      return qu[t] = a;
  }
  return t;
}
const Zm = "http://www.w3.org/1999/xlink";
function Qm(e, t, n, r, o, a = ex(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Zm, t.slice(6, t.length)) : e.setAttributeNS(Zm, t, n) : n == null || a && !T0(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : Zr(n) ? String(n) : n
  );
}
function eg(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Fy(n) : n);
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
    u === "boolean" ? n = T0(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function ia(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function XS(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const tg = /* @__PURE__ */ Symbol("_vei");
function qS(e, t, n, r, o = null) {
  const a = e[tg] || (e[tg] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [u, d] = JS(t);
    if (r) {
      const b = a[t] = ek(
        r,
        o
      );
      ia(e, u, b, d);
    } else c && (XS(e, u, c, d), a[t] = void 0);
  }
}
const ng = /(?:Once|Passive|Capture)$/;
function JS(e) {
  let t;
  if (ng.test(e)) {
    t = {};
    let r;
    for (; r = e.match(ng); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Po(e.slice(2)), t];
}
let Ju = 0;
const ZS = /* @__PURE__ */ Promise.resolve(), QS = () => Ju || (ZS.then(() => Ju = 0), Ju = Date.now());
function ek(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    Qr(
      tk(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = QS(), n;
}
function tk(e, t) {
  if (Ye(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const rg = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, nk = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? KS(e, r, c) : t === "style" ? US(e, n, r) : Tc(t) ? Dc(t) || qS(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : rk(e, t, r, c)) ? (eg(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Qm(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ik(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !tn(r))) ? eg(e, jn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Qm(e, t, r, c));
};
function rk(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && rg(t) && Qe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return rg(t) && tn(n) ? !1 : t in e;
}
function ik(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = jn(t);
  return Array.isArray(n) ? n.some((o) => jn(o) === r) : Object.keys(n).some((o) => jn(o) === r);
}
const ig = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Ye(t) ? (n) => Vl(t, n) : t;
};
function ok(e) {
  e.target.composing = !0;
}
function og(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Zu = /* @__PURE__ */ Symbol("_assign");
function ag(e, t, n) {
  return t && (e = e.trim()), n && (e = Cd(e)), e;
}
const sg = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[Zu] = ig(o);
    const a = r || o.props && o.props.type === "number";
    ia(e, t ? "change" : "input", (c) => {
      c.target.composing || e[Zu](ag(e.value, n, a));
    }), (n || a) && ia(e, "change", () => {
      e.value = ag(e.value, n, a);
    }), t || (ia(e, "compositionstart", ok), ia(e, "compositionend", og), ia(e, "change", og));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[Zu] = ig(c), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? Cd(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, ak = ["ctrl", "shift", "alt", "meta"], sk = {
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
  exact: (e, t) => ak.some((n) => e[`${n}Key`] && !t.includes(n))
}, Ot = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const u = sk[t[c]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, lk = /* @__PURE__ */ On({ patchProp: nk }, HS);
let lg;
function ck() {
  return lg || (lg = wS(lk));
}
const Gd = ((...e) => {
  const t = ck().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = fk(r);
    if (!o) return;
    const a = t._component;
    !Qe(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, uk(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function uk(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function fk(e) {
  return tn(e) ? document.querySelector(e) : e;
}
function oa(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function dk() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function cg(e, t = 8) {
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
function Kd(e, t) {
  const n = Math.max(1, Math.ceil(e)), r = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, r);
  const o = document.createElement("canvas");
  return o.width = n, o.height = r, o;
}
function di(e, t, n) {
  if (!e) return oa(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Vt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Qu = null, ef = null, ug = null, fg = null, Yt = null, rs = null, Rn = null, Ri = null;
function pk() {
  if (ef) return ef;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), ef = n, n;
}
function tf(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  Qu = di(Qu, n, r);
  const o = Qu;
  Vt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", fg !== o.ctx && (ug = o.ctx.createPattern(pk(), "repeat"), fg = o.ctx), o.ctx.fillStyle = ug, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function hk(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function mk(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function gk(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function yk(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const zt = /* @__PURE__ */ new Map(), Wd = 128;
function bk(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${c}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (zt.has(d)) {
    const W = zt.get(d);
    return zt.delete(d), zt.set(d, W), W;
  }
  zt.size >= Wd && zt.delete(zt.keys().next().value);
  const b = c * 2 + 2, y = c + 1, v = Kd(b, b), x = v.getContext("2d"), N = u * c, k = c + 1, P = `rgba(${n},${r},${o},${a})`, I = `rgba(${n},${r},${o},0)`, F = x.createRadialGradient(y, y, N, y, y, k);
  return F.addColorStop(0, P), F.addColorStop(1, I), x.fillStyle = F, x.fillRect(0, 0, b, b), zt.set(d, v), v;
}
function vk(e, t, n, r, o, a, c) {
  const { r: u, g: d, b, a: y } = r, v = Math.max(2, Math.ceil(e) * 2), x = Math.max(2, Math.ceil(t) * 2), N = Math.max(0, o), k = Math.max(0, Math.min(0.99, a)), P = Math.max(0, Math.min(1, c ?? 0)), I = `chisel:${v}:${x}:${n.toFixed(2)}:${u}:${d}:${b}:${y.toFixed(3)}:${N.toFixed(2)}:${k.toFixed(2)}:${P.toFixed(2)}`;
  if (zt.has(I)) {
    const se = zt.get(I);
    return zt.delete(I), zt.set(I, se), se;
  }
  zt.size >= Wd && zt.delete(zt.keys().next().value);
  const F = Kd(v, x), W = F.getContext("2d"), V = W.createImageData(v, x), z = V.data, _ = Math.max(0, e - t), R = Math.max(0, Math.min(1, n)), B = 1 + N;
  for (let se = 0; se < x; se++)
    for (let xe = 0; xe < v; xe++) {
      const A = xe + 0.5 - e, L = se + 0.5 - t, de = Math.max(Math.abs(A) - _, 0), fe = Math.hypot(de, L) / t;
      if (fe >= 1) continue;
      const U = fe <= R ? 1 : Math.max(0, (1 - fe) / Math.max(1e-4, 1 - R)), q = 1 - fe, T = 1 + N * (1 - q) * (1 - q), E = 1 - k * q * q, te = T * E / B;
      let re = 1;
      if (P > 0) {
        const vt = Math.floor((L + t) / 1.5), pt = Math.floor((A + e) / 8), $ = _o(ha(vt * 41 + 500, pt * 19 + 300));
        re = 1 - P * 0.42 * $;
      }
      const Oe = Math.round(255 * Math.min(1, y * U * te * re));
      if (Oe <= 0) continue;
      const Ee = (se * v + xe) * 4;
      z[Ee] = u, z[Ee + 1] = d, z[Ee + 2] = b, z[Ee + 3] = Oe;
    }
  return W.putImageData(V, 0, 0), zt.set(I, F), F;
}
function ha(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function _o(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function _k(e, t, n, r, o, a, c) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), y = Math.max(Math.abs(u) - b, 0), v = Math.hypot(y, d) / r;
  if (v >= 1) return 0;
  const x = _o(ha(e * 17 + 3, t * 13 + 7)), N = v + a * 0.22 * (x - 0.5);
  if (N >= 1) return 0;
  const k = N <= o ? 1 : Math.max(0, (1 - N) / Math.max(1e-4, 1 - o)), P = wk(e, t, u, d, n, r), I = a * 0.55;
  if (P < I) return 0;
  const W = 0.45 + 0.55 * ((P - I) / Math.max(1e-4, 1 - I));
  return Math.round(255 * Math.min(1, c * k * W));
}
function wk(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = _o(ha(c * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), y = Math.floor((r + a) / 1.5), v = _o(ha(b * 23 + 800, y * 29 + 500)), x = _o(ha(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + v * 0.3 + x * 0.15;
}
function xk(e, t, n, r, o) {
  const { r: a, g: c, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), y = Math.max(2, Math.ceil(t) * 2), v = Math.max(0, Math.min(1, o)), x = `crayon:${b}:${y}:${n.toFixed(2)}:${a}:${c}:${u}:${d.toFixed(3)}:${v.toFixed(2)}`;
  if (zt.has(x)) {
    const W = zt.get(x);
    return zt.delete(x), zt.set(x, W), W;
  }
  zt.size >= Wd && zt.delete(zt.keys().next().value);
  const N = Kd(b, y), k = N.getContext("2d"), P = k.createImageData(b, y), I = P.data, F = Math.max(0, Math.min(1, n));
  for (let W = 0; W < y; W++)
    for (let V = 0; V < b; V++) {
      const z = _k(V, W, e, t, F, v, d);
      if (z <= 0) continue;
      const _ = (W * b + V) * 4;
      I[_] = a, I[_ + 1] = c, I[_ + 2] = u, I[_ + 3] = z;
    }
  return k.putImageData(P, 0, 0), zt.set(x, N), N;
}
function Dy(e, t, n) {
  var P, I;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = gk(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = Sk(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((P = t == null ? void 0 : t.angle) == null ? void 0 : P.value) ?? 0), b = yk(t, o), y = String(((I = t == null ? void 0 : t.targetSpace) == null ? void 0 : I.viewMode) || ""), v = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && y !== "unwrap", x = t == null ? void 0 : t.scatter, N = x ? { radius: Number(x.radius ?? 1.5), count: Math.max(1, Math.round(x.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const F = o * u, W = o, V = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), z = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), _ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = vk(F, W, a, c, V, z, _);
  } else if (r === "crayon") {
    const F = o * u, W = o, V = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = xk(F, W, a, c, V);
  } else
    k = bk(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: N, latitudeCorrection: v };
}
function Sk(e) {
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
function kk(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function dg(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function u(b, y) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, y - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, y), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + c, n), t + d > c && u(t - c, n);
}
function Bd(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: y } = e.scatter, v = b * e.radiusPx * o, x = ha(t, n);
    for (let N = 0; N < y; N++) {
      const k = _o(x + N * 2) * Math.PI * 2, P = Math.sqrt(_o(x + N * 2 + 1)) * v, I = t + Math.cos(k) * P, F = n + Math.sin(k) * P, W = Math.max(0.5, e.radiusPx * o * 0.48), V = (0.5 - F / Math.max(1, e.desc.height)) * Math.PI, z = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(V)) : 1, _ = W * e.aspect * z;
      dg(e, I, F, W, _);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * u;
  dg(e, t, n, a, d);
}
function pg(e, t, n) {
  const r = mk(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = Dy(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let x = 0; x < r.length; x++) {
    let N = Number(r[x].u || 0) * o;
    const k = Number(r[x].v || 0) * a;
    x > 0 && Math.abs(N - u[x - 1].x) > o * 0.5 && (N += N < u[x - 1].x ? o : -o), u.push({ x: N, y: k });
  }
  if (Bd(c, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], y = u[0], v = 0;
  for (let x = 1; x < u.length; x++) {
    const N = u[x], k = { x: (b.x + N.x) * 0.5, y: (b.y + N.y) * 0.5 };
    x === 1 ? v = Ts(c, y.x, y.y, k.x, k.y, v) : v = fc(c, d, y, k, N, v), d = b, b = N, y = k;
  }
  u.length === 2 ? Ts(c, y.x, y.y, b.x, b.y, v) : fc(c, d, y, b, b, v), e.restore();
}
function Hl(e, t, n) {
  var v;
  const r = Array.isArray((v = t == null ? void 0 : t.geometry) == null ? void 0 : v.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = kk(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let x = 0; x < r.length; x++) {
    const N = hk(r[x]);
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
function Sl(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Hl(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? pg(e, t, n) : (rs = di(rs, n.width, n.height), Vt(rs), pg(rs.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(rs.canvas, 0, 0), e.restore());
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
    Bd(e, t + c * y, n + u * y, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function fc(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, y = 0, v = u, x = v + d, N = x + b, k = x - v, P = 16;
  let I = a, F = n.x, W = n.y;
  for (let V = 1; V <= P; V++) {
    const z = v + k * V / P, _ = ((v - z) * t.x + (z - y) * n.x) / (v - y), R = ((v - z) * t.y + (z - y) * n.y) / (v - y), B = ((x - z) * n.x + (z - v) * r.x) / (x - v), se = ((x - z) * n.y + (z - v) * r.y) / (x - v), xe = ((N - z) * r.x + (z - x) * o.x) / (N - x), A = ((N - z) * r.y + (z - x) * o.y) / (N - x), L = ((x - z) * _ + (z - y) * B) / (x - y), de = ((x - z) * R + (z - y) * se) / (x - y), Pe = ((N - z) * B + (z - v) * xe) / (N - v), fe = ((N - z) * se + (z - v) * A) / (N - v), U = ((x - z) * L + (z - v) * Pe) / (x - v), q = ((x - z) * de + (z - v) * fe) / (x - v);
    I = Ts(e, F, W, U, q, I), F = U, W = q;
  }
  return I;
}
function Mk(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * c;
  if (d && Math.abs(b - d.prev.x) > c * 0.5 && (b += b < d.prev.x ? c : -c), !d) {
    const N = Dy(o, r, a), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), P = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), I = String((r == null ? void 0 : r.toolKind) || "") === "eraser", F = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", Bd(N, b, u, 1), e.activeStroke = {
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
      isEraser: I,
      layerKind: F,
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
  d.pointCount === 1 ? d.distSinceStamp = Ts(x, d.lastMidX, d.lastMidY, y, v, d.distSinceStamp) : d.distSinceStamp = fc(
    x,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: y, y: v },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = y, d.lastMidY = v, d.pointCount++, e.displayDirty = !0;
}
function Bf(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = oa(t, n), c = {
    descriptor: r,
    committedMask: oa(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: oa(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = oa(t, n);
  let b = null, y = "", v = null;
  function x(A) {
    return {
      actionGroupId: A,
      descriptor: r,
      committedPaint: oa(t, n),
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
    const L = !v || v.length !== A.length || A.some((T, E) => T !== v[E]), de = y === "paint" && ((q = b ? o.get(b) : u) == null ? void 0 : q.activeStroke) || null;
    let Pe = c.displayDirty || u.displayDirty || L;
    for (const T of A) {
      const E = o.get(T);
      if (E != null && E.displayDirty) {
        Pe = !0;
        break;
      }
    }
    if (de && (Pe = !0), !Pe) return;
    c.displayDirty = !1, u.displayDirty = !1;
    for (const T of A) {
      const E = o.get(T);
      E && (E.displayDirty = !1);
    }
    v = [...A];
    const fe = d.ctx;
    Vt(d);
    const U = !!(de != null && de.isEraser);
    for (const T of A) {
      const E = o.get(T);
      if (!E) continue;
      const re = b === E.actionGroupId && y === "paint" ? E.activeStroke : null;
      if (U)
        Yt = di(Yt, t, n), Vt(Yt), Yt.ctx.drawImage(E.committedPaint.canvas, 0, 0), oo(Yt.ctx, a.canvas), fe.drawImage(Yt.canvas, 0, 0);
      else if (fe.drawImage(E.committedPaint.canvas, 0, 0), re) {
        const Oe = E.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, re.strokeOpacity ?? 1));
        fe.save(), fe.globalAlpha = Oe, fe.drawImage(a.canvas, 0, 0), fe.restore();
      }
    }
  }
  function I(A) {
    var de, Pe, fe, U, q;
    for (const T of o.values())
      Vt(T.committedPaint), Vt(T.currentStroke), T.activeStroke = null, T.displayDirty = !0;
    Vt(c.committedMask), Vt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0, u.displayDirty = !0, v = null;
    const L = [
      ...Array.isArray((Pe = (de = A == null ? void 0 : A.painting) == null ? void 0 : de.paint) == null ? void 0 : Pe.strokes) ? A.painting.paint.strokes : [],
      ...Array.isArray((U = (fe = A == null ? void 0 : A.painting) == null ? void 0 : fe.mask) == null ? void 0 : U.strokes) ? A.painting.mask.strokes : []
    ];
    for (const T of L) {
      if (((q = T == null ? void 0 : T.targetSpace) == null ? void 0 : q.kind) !== "ERP_GLOBAL") continue;
      const E = String((T == null ? void 0 : T.layerKind) || "paint"), re = String((T == null ? void 0 : T.toolKind) || "pen") === "eraser";
      if (E === "mask") {
        const Oe = c.descriptor;
        re ? (Yt = di(Yt, Oe.width, Oe.height), Vt(Yt), Sl(Yt.ctx, T, Oe), oo(c.committedMask.ctx, Yt.canvas)) : Sl(c.committedMask.ctx, T, Oe);
        continue;
      }
      if (re) {
        Yt = di(Yt, r.width, r.height), Vt(Yt), Sl(Yt.ctx, T, r);
        for (const Oe of o.values())
          oo(Oe.committedPaint.ctx, Yt.canvas), Oe.displayDirty = !0;
      } else {
        const Oe = String((T == null ? void 0 : T.actionGroupId) || "__default__"), Ee = N(Oe), vt = Ee.descriptor;
        Sl(Ee.committedPaint.ctx, T, vt), Ee.displayDirty = !0;
      }
    }
    P([...o.keys()]);
  }
  function F(A, L) {
    y = String((A == null ? void 0 : A.layerKind) || "");
    const de = String((A == null ? void 0 : A.toolKind) || "") === "eraser";
    if (y === "mask")
      b = null, Vt(c.currentStroke), c.activeStroke = null, c.displayDirty = !0;
    else {
      const Pe = de ? u : N(String((A == null ? void 0 : A.actionGroupId) || "__default__"));
      b = de ? "" : String((A == null ? void 0 : A.actionGroupId) || "__default__"), Vt(Pe.currentStroke), Pe.activeStroke = null, Pe.displayDirty = !0;
    }
  }
  function W(A, L) {
    var E;
    const de = String((A == null ? void 0 : A.layerKind) || "paint"), Pe = String((A == null ? void 0 : A.toolKind) || "") === "eraser", fe = de === "mask" ? c : Pe ? u : N(String((A == null ? void 0 : A.actionGroupId) || b || "__default__")), U = fe.activeStroke, q = fe.descriptor;
    if (U && U.pointCount > 1) {
      const te = fe.currentStroke.ctx;
      te.globalCompositeOperation = "source-over";
      const re = {
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
      U.pointCount === 2 ? Ts(re, U.lastMidX, U.lastMidY, U.prev.x, U.prev.y, U.distSinceStamp) : fc(re, U.pprev, { x: U.lastMidX, y: U.lastMidY }, U.prev, U.prev, U.distSinceStamp);
    }
    fe.lassoPreviewActive && (Vt(fe.currentStroke), Hl(fe.currentStroke.ctx, A, q), fe.lassoPreviewActive = !1);
    const T = de === "mask" ? c.committedMask : fe.committedPaint;
    if (Pe && de === "paint")
      for (const te of o.values())
        oo(te.committedPaint.ctx, fe.currentStroke.canvas), te.displayDirty = !0;
    else if (Pe)
      oo(T.ctx, fe.currentStroke.canvas);
    else {
      const te = Math.max(0, Math.min(1, (U == null ? void 0 : U.strokeOpacity) ?? 1));
      T.ctx.save(), T.ctx.globalAlpha = te, T.ctx.drawImage(fe.currentStroke.canvas, 0, 0), T.ctx.restore();
    }
    dk() && (String((A == null ? void 0 : A.toolKind) || ""), String((q == null ? void 0 : q.kind) || ""), Number((q == null ? void 0 : q.width) || 0), Number((q == null ? void 0 : q.height) || 0), String(((E = A == null ? void 0 : A.targetSpace) == null ? void 0 : E.viewMode) || ""), Number((A == null ? void 0 : A.aspect) ?? 1), cg(fe.currentStroke.canvas), cg(T.canvas), void 0), Vt(fe.currentStroke), fe.activeStroke = null, fe.displayDirty = !0, b = null, y = "", P([...o.keys()]);
  }
  function V(A) {
    if (y === "mask")
      Vt(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, c.displayDirty = !0;
    else if (y === "paint" && !b)
      Vt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (b) {
      const L = o.get(b);
      L && (Vt(L.currentStroke), L.activeStroke = null, L.lassoPreviewActive = !1, L.displayDirty = !0);
    }
    b = null, y = "", P([...o.keys()]);
  }
  function z(A, L) {
    var Pe;
    if (y = String((A == null ? void 0 : A.layerKind) || ""), String(((Pe = A == null ? void 0 : A.geometry) == null ? void 0 : Pe.geometryKind) || "") === "lasso_fill") {
      if (y === "mask")
        Vt(c.currentStroke), Hl(c.currentStroke.ctx, A, c.descriptor), c.lassoPreviewActive = !0, c.displayDirty = !0;
      else {
        const fe = String((A == null ? void 0 : A.toolKind) || "") === "eraser", U = fe ? u : N(String((A == null ? void 0 : A.actionGroupId) || b || "__default__"));
        b = fe ? "" : String((A == null ? void 0 : A.actionGroupId) || b || "__default__"), Vt(U.currentStroke), Hl(U.currentStroke.ctx, A, U.descriptor), U.lassoPreviewActive = !0, U.displayDirty = !0;
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
  function R(A) {
    return o.get(String(A)) ?? null;
  }
  function B() {
    return [...o.keys()];
  }
  function se(A) {
    var q;
    const L = o.get(String(A));
    if (!L) return null;
    const de = y === "paint" && b === L.actionGroupId, Pe = y === "paint" && ((q = b ? o.get(b) : u) == null ? void 0 : q.activeStroke) || null;
    if (Pe != null && Pe.isEraser)
      return Rn = di(Rn, t, n), Vt(Rn), Rn.ctx.drawImage(L.committedPaint.canvas, 0, 0), oo(Rn.ctx, a.canvas), Rn.canvas;
    const fe = de ? L.activeStroke : null;
    if (!fe) return L.committedPaint.canvas;
    Rn = di(Rn, t, n), Vt(Rn), Rn.ctx.drawImage(L.committedPaint.canvas, 0, 0);
    const U = L.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, fe.strokeOpacity ?? 1));
    return Rn.ctx.save(), Rn.ctx.globalAlpha = U, Rn.ctx.drawImage(a.canvas, 0, 0), Rn.ctx.restore(), Rn.canvas;
  }
  function xe() {
    return Ri = di(Ri, t, n), Vt(Ri), tf(Ri.ctx, c.committedMask.canvas), y === "mask" && c.activeStroke && (c.activeStroke.isEraser ? (Yt = di(Yt, t, n), Vt(Yt), Yt.ctx.drawImage(c.committedMask.canvas, 0, 0), oo(Yt.ctx, a.canvas), Vt(Ri), tf(Ri.ctx, Yt.canvas)) : tf(Ri.ctx, a.canvas)), Ri.canvas;
  }
  return {
    rebuildCommitted: I,
    beginStroke: F,
    appendStrokePoint: Mk,
    updateActiveStroke: z,
    commitActiveStroke: W,
    cancelActiveStroke: V,
    getErpTarget: _,
    ensureTarget: k,
    getGroupTarget: R,
    getGroupDisplayCanvas: se,
    getMaskDisplayCanvas: xe,
    getAllGroupIds: B
  };
}
function Q(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function $t(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Ud(e, t) {
  let n = $t(t) - $t(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const Uf = 3;
function is(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function dc(e, t = 0) {
  const n = is(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = is(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = is(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = is(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(is(t) || 0);
}
function Ly(e) {
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
const hg = Math.PI / 180, mg = 0.12, Nk = Uf, Pk = 35, Ak = 140, fs = 100, Ck = 20, gg = 0.8;
function Ik(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = Q(Number(e || fs), 1, 179) * hg;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / hg;
}
function Yd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: fs })), n = typeof e.setView == "function" ? e.setView : (() => {
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
  function y(W, V, z = null, _ = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(W || 0), d.drag.lastY = Number(V || 0), d.drag.lastTs = Number(_ || performance.now()), d.drag.pointerId = z, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: z }), !0;
  }
  function v(W, V, z = "pano", _ = performance.now()) {
    if (!d.drag.active) return !1;
    const R = Number(_ || performance.now()), B = Number(W), se = Number(V), xe = B - d.drag.lastX, A = se - d.drag.lastY;
    d.drag.lastX = B, d.drag.lastY = se, d.drag.lastTs = R;
    const L = r() || { x: 1, y: 1 }, de = Number(L.x || 1), Pe = Number(L.y || 1), fe = { ...t() };
    let U = 0, q = 0;
    if (z === "unwrap") {
      const E = o() || { w: 1, h: 1 }, te = Math.max(1, Number(E.w || 1)), re = Math.max(1, Number(E.h || 1)), Oe = xe / te, Ee = A / re;
      U = -Oe * 360 * de, q = Ee * 180 * Pe;
    } else {
      const E = a() || { w: 0, h: 0 }, te = Math.max(1, Number(E.w || 0)), re = Math.max(1, Number(E.h || 0));
      if (te > 1 && re > 1) {
        const Oe = Q(Number(fe.fov || fs), 1, 179), Ee = Q(Ik(Oe, te, re), 0.1, 179);
        U = -(xe / te) * Oe * de, q = A / re * Ee * Pe;
      } else
        U = -xe * mg * de, q = A * mg * Pe;
    }
    fe.yaw = $t(Number(fe.yaw || 0) + U), fe.pitch = Q(Number(fe.pitch || 0) + q, -89.9, 89.9), n(fe), d.velHistory.push({ ts: R, yaw: fe.yaw, pitch: fe.pitch });
    let T = 0;
    for (; T < d.velHistory.length - 1 && d.velHistory[T].ts < R - 100; ) T++;
    return T > 0 && d.velHistory.splice(0, T), d.inertia.active = !1, d.inertia.lastTs = R, c(), b("drag", { phase: "move", dx: xe, dy: A, dYaw: U, dPitch: q }), !0;
  }
  function x(W = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const V = Number(W || performance.now());
    d.drag.lastTs = V;
    const z = d.velHistory.filter((R) => V - R.ts <= 80);
    if (z.length >= 2) {
      const R = z[0], B = z.at(-1), se = Math.max(1e-3, (B.ts - R.ts) / 1e3);
      let xe = B.yaw - R.yaw;
      xe > 180 && (xe -= 360), xe < -180 && (xe += 360), d.inertia.vx = xe / se, d.inertia.vy = (B.pitch - R.pitch) / se;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const _ = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = _ > Ck, d.inertia.lastTs = V, b("drag", { phase: "end", speed: _, inertiaActive: d.inertia.active }), !0;
  }
  function N(W = performance.now()) {
    if (!d.inertia.active) return !1;
    const V = Number(W || performance.now()), z = Math.max(1e-3, (V - (d.inertia.lastTs || V)) / 1e3);
    d.inertia.lastTs = V;
    const _ = { ...t() };
    _.yaw = $t(Number(_.yaw || 0) + d.inertia.vx * z), _.pitch = Q(Number(_.pitch || 0) + d.inertia.vy * z, -89.9, 89.9);
    const R = Math.exp(-5.5 * z);
    return d.inertia.vx *= R, d.inertia.vy *= R, Math.abs(d.inertia.vx) < gg && Math.abs(d.inertia.vy) < gg && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(_), c(), d.inertia.active;
  }
  function k() {
    const W = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], W;
  }
  function P(W) {
    const V = Math.sign(Number(W || 0));
    if (!V) return !1;
    const z = { ...t() }, _ = Number(z.fov || fs);
    return z.fov = Q(_ + V * Nk, Pk, Ak), n(z), c(), b("wheel", { deltaSign: V, fovBefore: _, fovAfter: z.fov }), !0;
  }
  function I(W, V = 0) {
    return P(dc(W, V));
  }
  function F() {
    n({ yaw: 0, pitch: 0, fov: fs }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: y,
    moveDrag: v,
    endDrag: x,
    stepInertia: N,
    stopMotion: k,
    applyWheel: P,
    applyWheelEvent: I,
    resetView: F
  };
}
const bt = Math.PI / 180, fn = 180 / Math.PI;
function br(e, t, n) {
  return { x: e, y: t, z: n };
}
function pc(e, t) {
  return br(e.x + t.x, e.y + t.y, e.z + t.z);
}
function hc(e, t) {
  return br(e.x * t, e.y * t, e.z * t);
}
function nf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Xd(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return br(e.x / t, e.y / t, e.z / t);
}
function qn(e, t) {
  const n = e * bt, r = t * bt, o = Math.cos(r);
  return br(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Pa(e, t, n = 0) {
  const r = Number(e || 0) * bt, o = Number(t || 0) * bt, a = n * bt, c = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), y = Math.cos(a), v = Math.sin(a);
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
function mc(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function kt(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function Ok() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Ek(e) {
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
function Fk(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function Tk(e, t) {
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
function kl(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = Tk(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function Dk(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = kl(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = kl(e.points, t, 1);
  if (!a) return null;
  const c = kl(e.rawPoints, t, 1), u = kl(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function Lk(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = Fk(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = Dk(e.geometry, n, r, t === "paint");
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
function yg(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = Lk(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function Rk(e) {
  if (!e || typeof e != "object") return null;
  const t = kt(e.u0, null), n = kt(e.v0, null), r = kt(e.u1, null), o = kt(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function Vk(e) {
  const t = e || {};
  return {
    du: kt(t.du, 0) ?? 0,
    dv: kt(t.dv, 0) ?? 0,
    rot_deg: kt(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, kt(t.scale, 1) ?? 1)
  };
}
function $k(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = Rk(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, kt(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: Vk(e.transform)
  } : null;
}
function zk(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = $k(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function ma(e) {
  const t = Ok();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Ek(e.groups),
    paint: yg(e.paint, "paint"),
    mask: yg(e.mask, "mask"),
    raster_objects: zk(e.raster_objects)
  };
}
const _r = 1, wr = 179, Yf = 85;
function Uc(e) {
  const t = ((qe(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Ry(e, t) {
  let n = qe(e, 0) - qe(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function Vy(e, t, { shiftKey: n = !1 } = {}) {
  let r = qe(e, 0) + qe(t, 0) * fn;
  return n && (r = Math.round(r / 15) * 15), Uc(r);
}
function qe(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function ki(e = {}) {
  const t = Q(qe(e.hFOV_deg || 90, 90), _r, wr), n = Q(qe(e.vFOV_deg || 60, 60), _r, wr), r = Math.tan(t * bt * 0.5), o = Math.tan(n * bt * 0.5);
  return {
    yawDeg: qe(e.yaw_deg, 0),
    pitchDeg: qe(e.pitch_deg, 0),
    rollDeg: qe(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function wo(e, t) {
  const n = Math.max(1, qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = ki(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function qd(e, t) {
  const n = Math.max(1, qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, qe(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function Jd(e, t) {
  const n = Math.max(1e-12, qe(t, 1)), r = Math.max(1e-6, qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = Q(2 * Math.atan(r / (2 * n)) * fn, _r, wr), c = Q(2 * Math.atan(o / (2 * n)) * fn, _r, wr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function jk(e, t, n) {
  const r = qe(e == null ? void 0 : e.x, 0), o = qe(e == null ? void 0 : e.y, 0), a = Math.max(1, qe((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, qe((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = ki(t), d = Math.max(1e-12, qe(n, 1)), b = 2 * d * u.tanHalfX, y = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (c - y) * 0.5,
    w: b,
    h: y,
    focalPx: d
  };
}
function Zd(e, t, n = Yf) {
  const r = Math.max(1e-12, qe(t, 1)), o = Q(qe(n, Yf), 1, 89.999), a = r * Math.tan(o * bt), c = Math.max(1, qe((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, qe((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function $y(e, t, n) {
  const r = Math.max(1e-12, qe(t, 1));
  return {
    x: (qe(n == null ? void 0 : n.x, 0) - qe(e == null ? void 0 : e.x, 0)) / r,
    y: -(qe(n == null ? void 0 : n.y, 0) - qe(e == null ? void 0 : e.y, 0)) / r
  };
}
function Hk(e, t) {
  const n = Q(qe(e, 90), _r, wr), r = Math.max(1e-6, qe(t, 1));
  return Q(
    2 * Math.atan(Math.tan(n * bt * 0.5) / r) * fn,
    _r,
    wr
  );
}
function Gl(e, t) {
  const n = Q(qe(e, 60), _r, wr), r = Math.max(1e-6, qe(t, 1));
  return Q(
    2 * Math.atan(Math.tan(n * bt * 0.5) * r) * fn,
    _r,
    wr
  );
}
function bg(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Gk(e, t) {
  const n = bg(e, 1), r = bg(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), u = (b, y) => y ? u(y, b % y) : b, d = u(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function xo(e) {
  const t = Q(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * bt, n = Q(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * bt;
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
  return (r == null ? void 0 : r[0]) || Gk(t, 1);
}
function Qd(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = ho(t), t;
}
function zy({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(c) ? Q(c, _r, wr) : Q(Math.min(42, qe(o, 100) * 0.42), 8, 96);
  return Qd({
    id: String(e),
    label: "Frame 1",
    yaw_deg: qe(t, 0),
    pitch_deg: Q(qe(n, 0), -89.9, 89.9),
    roll_deg: Uc(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function pi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : ho(e);
}
function jy(e, t) {
  const n = ki(e), r = qe(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * fn, a = 2 * Math.atan(n.tanHalfY * r) * fn;
  return o < _r || o > wr || a < _r || a > wr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function Hy(e, t, n = Uf) {
  const r = Math.sign(qe(t, 0)), o = Math.abs(qe(n, Uf));
  if (!r || !(o > 0)) return null;
  const a = ki(e), c = a.hFovDeg + r * o;
  if (c < _r || c > wr) return null;
  const u = Math.tan(c * bt * 0.5);
  return jy(e, u / a.tanHalfX);
}
function Gy(e, t) {
  const n = ki(e), r = Pa(n.yawDeg, n.pitchDeg, n.rollDeg), o = qe(t == null ? void 0 : t.x, 0), a = qe(t == null ? void 0 : t.y, 0);
  return Xd(pc(pc(r.fwd, hc(r.right, o)), hc(r.up, a)));
}
function Kk(e) {
  return br(e.x, e.y, -e.z);
}
function Kl(e) {
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
function Ky(e) {
  const t = Kl(br(e[0][0], e[1][0], e[2][0])), n = Kl(br(e[0][1], e[1][1], e[2][1])), r = Kl(br(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - c * n.x, c * t.x - u * t.z);
  return { yawDeg: o * fn, pitchDeg: a * fn, rollDeg: d * fn };
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
function Ml(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const go = 1e-6, Xf = 1e-6, Wk = 1e-9;
function Ls(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function Bk(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (c + u);
    Ls(0, n, o, 1, b) < t ? c = b : u = b;
  }
  return Ls(0, r, a, 1, 0.5 * (c + u));
}
function Sa(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function ka(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((x) => -x / o), u = r.map((x) => x / a);
  if (c.reduce((x, N, k) => x + N * u[k], 0) < 0) return n.map(() => 0);
  const d = c.map((x, N) => (x * a + u[N] * o) / (o + a)), b = (x) => Math.sqrt(x.reduce((N, k) => N + k * k, 0)), y = 3 * Math.min(b(c), b(u)), v = b(d);
  return v <= y ? d : d.map((x) => x * y / v);
}
function Wy(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], u = o.map((y, v) => a[v] - y);
  let d = u;
  Sa(e, r) && (d = ka(t, r, n[r - 1].map((y, v) => y - o[v]), u).map((y) => y * c));
  let b = u;
  return Sa(e, r + 1) && (b = ka(t, r + 1, u.map((y) => -y), n[r + 2].map((y, v) => y - a[v])).map((y) => y * c)), [d.map((y) => y / 3), b.map((y) => -y / 3)];
}
function By(e, t, n, r, o) {
  const [[a], [c]] = Wy(e, t, n.map((u) => [u]), r);
  return Ls(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function Uk(e, t, n, r) {
  var b, y;
  const o = e.map((v) => v.value);
  let [a, c] = Wy(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, c = ((y = e[n + 1].handles) == null ? void 0 : y.in) ?? c;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((v) => Ls(u[v], u[v] + a[v], d[v] + c[v], d[v], r));
}
function gc([e, t, n, r], [o, a, c, u]) {
  return [
    r * o + e * u + t * c - n * a,
    r * a - e * c + t * u + n * o,
    r * c + e * a - t * o + n * u,
    r * u - e * o - t * a - n * c
  ];
}
function Yk(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function rf(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Xk([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function qf(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ca(e, t) {
  return Xk(gc([-e[0], -e[1], -e[2], e[3]], t));
}
function of(e, t, n) {
  return gc(e, qf(ca(e, t).map((r) => n * r)));
}
function af(e, t) {
  const n = Yk(e, t);
  if (Math.abs(n) > Xf) return n < 0;
  const [r, o, a] = ca(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > Xf) return c < 0;
  return !1;
}
function Nl(e) {
  const { x: t, y: n, z: r, w: o } = Ao(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function Jf(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function qk(e, t, n, r) {
  const o = Nl(e[n].value);
  let a = Nl(e[n + 1].value);
  af(o, a) && (a = rf(a));
  const c = t[n + 1] - t[n], u = ca(o, a);
  let d = u;
  if (Sa(e, n)) {
    let _ = Nl(e[n - 1].value);
    af(_, o) && (_ = rf(_)), d = ka(t, n, ca(o, _), u).map((R) => R * c);
  }
  let b = u;
  if (Sa(e, n + 1)) {
    let _ = Nl(e[n + 2].value);
    af(a, _) && (_ = rf(_)), b = ka(t, n + 1, ca(a, o), ca(a, _)).map((R) => R * c);
  }
  const y = gc(o, qf(d.map((_, R) => 0.5 * (_ - u[R])))), v = gc(a, qf(u.map((_, R) => 0.5 * (_ - b[R])))), [x, N, k, P] = of(of(o, a, r), of(y, v, r), 2 * r * (1 - r)), { yawDeg: I, pitchDeg: F, rollDeg: W } = Ky(Ds({ x, y: N, z: k, w: P })), V = e[n].value, z = e[n + 1].value;
  return {
    yaw_deg: Jf(I, V.yaw_deg, z.yaw_deg, r),
    pitch_deg: F,
    roll_deg: Jf(W, V.roll_deg, z.roll_deg, r)
  };
}
function Rs(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function yc(e) {
  return Math.sqrt(Rs(e, e));
}
function bc(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function Uy(e, t) {
  const n = Rs(e, t), r = t.map((c, u) => c - n * e[u]), o = yc(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function aa(e, t) {
  const n = yc(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Pl(e, t, n) {
  return aa(e, Uy(e, t).map((r) => n * r));
}
function sf(e, t) {
  const n = bc(e[t].value), r = bc(e[t + 1].value), o = Rs(n, r), a = o < 0 && yc(r.map((d, b) => d - o * n[b])) <= Xf;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = Uy(n, r);
  const u = yc(c);
  return [c, c.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function Jk(e, t, n, r) {
  const o = bc(e[n].value), a = bc(e[n + 1].value), [c, u, d] = sf(e, n);
  let b = c, y = u;
  const v = t[n + 1] - t[n];
  Sa(e, n) && (b = ka(t, n, sf(e, n - 1)[1].map((V) => -V), b).map((V) => V * v)), Sa(e, n + 1) && (y = ka(t, n + 1, y.map((V) => -V), sf(e, n + 1)[0]).map((V) => V * v));
  let x, N, k;
  if (d) {
    const V = Math.PI, z = Ls(0, Rs(b, c) / V / 3, V - Rs(y, u) / V / 3, V, r);
    [x, N, k] = aa(o, c.map((_) => z * _ / V));
  } else {
    const V = Pl(aa(o, b.map((R) => R / 3)), aa(a, y.map((R) => -R / 3)), r), z = Pl(aa(o, b.map((R) => r * R / 3)), V, r), _ = Pl(V, aa(a, y.map((R) => -(1 - r) * R / 3)), r);
    [x, N, k] = Pl(z, _, r);
  }
  const P = Math.hypot(x, k), I = e[n].value.yaw_deg, F = e[n + 1].value.yaw_deg;
  return { yaw_deg: P <= Wk ? I + (F - I) * r : Jf(Math.atan2(x, k) * 180 / Math.PI, I, F, r), pitch_deg: Math.atan2(N, P) * 180 / Math.PI };
}
function Zk(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = By(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function Qk(e, t, n, r) {
  return By(e, t, e.map((o) => o.value), n, r);
}
const eM = { position: Uk, rotation: qk, direction: Jk, size: Zk };
function Gt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Ml(e[t].value);
  if (n <= r[0].frame + go) return Ml(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - go) return Ml(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + go; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= go || c.easing === "hold") return Ml(c.value);
  const u = r.map((b) => b.frame), d = Bk(c.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (eM[t] ?? Qk)(r, u, a, d);
}
function Zf(e) {
  return Math.min(179, Math.max(0.1, e));
}
function tM(e) {
  return Math.min(1, Math.max(0, e));
}
function Yy(e) {
  return Math.max(1e-6, e);
}
function Xy(e, t) {
  return t - (e.start - e.in);
}
function Vs(e, t) {
  return t >= e.start - go && (e.duration === null || t < e.start + e.duration - go);
}
function ep(e, t) {
  return {
    position: Gt(e, "position", t),
    ...Gt(e, "rotation", t),
    hFOV_deg: Zf(Gt(e, "fov", t)),
    aspect: e.aspect
  };
}
function vc(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = Xy(o.clip, n);
  return {
    frame: n,
    camera: r == null ? null : ep(r, n),
    scene: {
      active: o.visible && Vs(o.clip, n),
      clip_frame: a,
      position: Gt(o, "position", a),
      ...Gt(o, "rotation", a),
      scale: Yy(Gt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => So(c, n))
  };
}
function nM(e, t) {
  if (e.placement === "world")
    return {
      position: Gt(e, "position", t),
      ...Gt(e, "rotation", t),
      scale: Yy(Gt(e, "scale", t))
    };
  const n = Gt(e, "size", t);
  return {
    ...Gt(e, "direction", t),
    roll_deg: Gt(e, "roll", t),
    hFOV_deg: Zf(n.hFOV_deg),
    vFOV_deg: Zf(n.vFOV_deg)
  };
}
function So(e, t) {
  const n = Xy(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && Vs(e.clip, t),
    clip_frame: n,
    ...nM(e, n),
    opacity: tM(Gt(e, "opacity", n))
  };
}
const rM = 2, iM = ["sky", "world"], Qf = ["perspective", "erp"], oM = ["input", "output", "temp"], qy = [0.42, 0, 0.58, 1];
function mn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Jt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function Yc(e, t) {
  const n = Jt(e, t);
  return n !== null && n > 0 ? n : t;
}
function gr(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function ko(e) {
  const t = Jt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function $s(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Jy(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => Jt(n, null));
  return t.includes(null) ? null : t;
}
function Zy(e) {
  return Jy(e) || [0, 0, 0];
}
function Qy(e) {
  const t = mn(e) ? e : {};
  return {
    yaw_deg: Jt(t.yaw_deg, 0),
    pitch_deg: gr(Jt(t.pitch_deg, 0), -90, 90),
    roll_deg: Jt(t.roll_deg, 0)
  };
}
function aM(e) {
  return gr(Jt(e, 90), 0.1, 179);
}
function sM(e) {
  return Yc(e, 1);
}
function lM(e) {
  const t = mn(e) ? e : {};
  return {
    yaw_deg: Jt(t.yaw_deg, 0),
    pitch_deg: gr(Jt(t.pitch_deg, 0), -90, 90)
  };
}
function cM(e) {
  return Jt(e, 0);
}
function uM(e) {
  const t = mn(e) ? e : {};
  return {
    hFOV_deg: gr(Jt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: gr(Jt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function eb(e) {
  return gr(Jt(e, 1), 0, 1);
}
const tp = [["position", Zy], ["rotation", Qy], ["fov", aM]], Xc = [["position", Zy], ["rotation", Qy], ["scale", sM]], np = [["direction", lM], ["roll", cM], ["size", uM], ["opacity", eb]], rp = [...Xc, ["opacity", eb]];
function fM(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => Jt(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...qy];
}
function dM(e) {
  if (!mn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Jy(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function pM(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!mn(o)) continue;
    const a = ko(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: fM(o.easing) }, u = n ? dM(o.handles) : null;
    u && (c.handles = u), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function ip(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = mn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: pM(a.keyframes, o, r === "position") };
  }
  return n;
}
function tb(e) {
  const t = mn(e) ? e : {}, n = ko(t.start), r = ko(t.in), o = ko(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function hM(e) {
  const t = mn(e) ? e : {}, n = gr(Jt(t.x0, 0), 0, 1), r = gr(Jt(t.y0, 0), 0, 1), o = gr(Jt(t.x1, 1), 0, 1), a = gr(Jt(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function mM(e) {
  if (!mn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: oM.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function gM(e) {
  const t = mM(e.source);
  if (!t) return null;
  const n = iM.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: tb(e.clip),
    visible: $s(e.visible, !0),
    locked: $s(e.locked, !1),
    crop: hM(e.crop),
    ...ip(e, r ? rp : np)
  };
  return r || (o.z_index = ko(e.z_index) ?? 0), o;
}
function yM(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = mn(a) ? gM(a) : null;
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
function nb(e) {
  if (!mn(e)) return null;
  const t = Qf.includes(e.projection) ? e.projection : Qf[0];
  return { aspect: Yc(e.aspect, 1), projection: t, visible: $s(e.visible, !0), ...ip(e, tp) };
}
function op() {
  return nb({});
}
function _c(e) {
  const t = mn(e.timeline) ? e.timeline : {}, n = mn(e.scene) ? e.scene : {}, r = ko(t.length);
  return {
    version: rM,
    timeline: {
      fps: Yc(t.fps, 24),
      length: r !== null && r >= 1 ? r : null
    },
    camera: nb(e.camera),
    scene: { clip: tb(n.clip), visible: $s(n.visible, !0), ...ip(n, Xc) },
    stickers: yM(e.stickers),
    painting: ma(e.painting),
    painting_layer: mn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: $s(e.painting_visible, !0)
  };
}
function bM(e, t) {
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
function vM(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!mn(t)) return null;
  const n = gr(Jt(t.hFOV_deg, 90), 1, 179), r = gr(Jt(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function _M(e) {
  const t = mn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(mn) : [];
  return n.sort((r, o) => Jt(r.z_index, 0) - Jt(o.z_index, 0)), _c({
    camera: vM(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: bM(r, t),
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
  if (e == null || typeof e == "string" && !e.trim()) return _c({});
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
  return n === 1 ? _M(t) : _c(t);
}
const lf = {
  state: { painting_visible: !0 },
  camera: { projection: Qf[0], visible: !0 },
  scene: { visible: !0 }
};
function cf(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function ed(e) {
  return JSON.stringify({
    ...cf(e, lf.state),
    camera: e.camera && cf(e.camera, lf.camera),
    scene: cf(e.scene, lf.scene)
  });
}
function uf(e, t, n, r, o) {
  const a = {};
  for (const [c] of t)
    a[c] = {
      value: e[c].value,
      keyframes: e[c].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function vg(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function zs(e, t) {
  if (Yc(t, null) === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = t / e.timeline.fps, r = (c) => ko(c * n), { length: o } = e.timeline, a = vg(e.scene.clip, r);
  return _c({
    timeline: { fps: t, length: o === null ? null : Math.max(1, r(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...uf(e.camera, tp, r, 0, 0) },
    scene: { clip: a.clip, visible: e.scene.visible, ...uf(e.scene, Xc, r, a.anchor, a.newAnchor) },
    stickers: e.stickers.map((c) => {
      const { clip: u, anchor: d, newAnchor: b } = vg(c.clip, r), y = c.placement === "world" ? rp : np;
      return { ...c, clip: u, ...uf(c, y, r, d, b) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function ff(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function rb(e) {
  return Array.isArray(e) ? [...e] : e;
}
function ap(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= go);
}
function ib(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? rb(e.keyframes[r - 1].easing) : [...qy];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function Cn(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = ff(o.value, r);
    return;
  }
  const a = ap(o, n);
  a ? a.value = ff(a.value, r) : ib(o, n, ff(Gt(e, t, n), r));
}
function Co(e) {
  return e.placement === "world" ? rp.map(([t]) => t) : e.placement === "sky" ? np.map(([t]) => t) : (e.clip ? Xc : tp).map(([t]) => t);
}
function wM(e, t) {
  for (const n of Co(e))
    ap(e[n], t) || ib(e[n], t, Gt(e, n, t));
}
function xM(e) {
  const t = Co(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function SM(e, t) {
  return Co(e).every((n) => !!ap(e[n], t));
}
function kM(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Gt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = u);
  }
}
function MM(e, t, n, r, o) {
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
function ob(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function NM(e, t, n) {
  const r = ob(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function PM(e, t, n, r) {
  for (const o of ob(e, t, n)) o.easing = rb(r);
}
function AM(e, t) {
  e.start = Math.max(0, e.start + t);
}
function CM(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function IM(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function OM(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function wc(e) {
  return Co(e).map((t) => e[t]);
}
function EM(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? wc(e.camera).some((r) => r.keyframes.length > 0) : sb(e, { camera: n });
}
function ab(e) {
  return wc(e).some((t) => t.keyframes.length > 0) || !!e.clip && !OM(e.clip);
}
function sb(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(ab);
}
function lb(e, { minimum: t, frames: n = 0, openClip: r = null, camera: o = !1 }) {
  let a = e.timeline.length ?? Math.max(t, n);
  if (o && e.camera)
    for (const c of wc(e.camera))
      for (const u of c.keyframes) a = Math.max(a, u.frame + 1);
  for (const c of [e.scene, ...e.stickers]) {
    const { clip: u } = c;
    a = Math.max(a, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const d of wc(c))
      for (const b of d.keyframes) a = Math.max(a, u.start - u.in + b.frame + 1);
  }
  return a;
}
function FM(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let Al = { text: null, parsed: null };
function Xn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function xc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function TM({
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
    painting: ma(null),
    painting_layer: null,
    ui_settings: xc(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function cb(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function DM(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function LM(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function RM(e) {
  return Array.isArray(e) ? e.map((t) => Qd(t)) : [];
}
function VM(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function ub(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = TM(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (Al.text === o ? a = Al.parsed : (a = JSON.parse(o), Al = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: DM(a.assets),
      stickers: LM(a.stickers),
      shots: RM(a.shots),
      painting: ma(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: xc(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (u.ui_settings = xc({ ...u.ui_settings, ...c })), u.output_preset = cb(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Xn(n.coverage), delete u.editor_history, u;
  } catch {
    return Al = { text: o, parsed: null }, r;
  }
}
function _g(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function $M(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function zM(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function fb(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c, fps: u = null, scene: d = null, camera: b = !1 } = t;
  let y;
  try {
    y = qr(e);
  } catch {
    y = qr(null);
  }
  u && u !== y.timeline.fps && (y = zs(y, u));
  const v = b && y.camera === null;
  if (v && (y = { ...y, camera: op() }), d) {
    let x = qr(d);
    u && u !== x.timeline.fps && (x = zs(x, u)), y = { ...x, camera: y.camera, cutout_state: y };
  }
  return {
    ...y,
    ...v ? { default_camera: !0 } : {},
    coverage: Xn(o),
    bg_color: r,
    output_preset: cb(n),
    ui_settings: xc(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function jM(e, t) {
  e.cutout_state && (e.cutout_state = zs(e.cutout_state, t));
  const n = zs(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, c] of o)
    if (c) {
      a.clip && (a.clip = c.clip);
      for (const u of Co(a)) a[u].keyframes = c[u].keyframes;
    }
}
function sp(e, t) {
  const n = So(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const HM = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function wg(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function GM(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[HM[n]].keyframes.length));
}
function db(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = wg(n, ["yaw_deg", "pitch_deg"]), a = wg(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && Cn(e, "direction", r, o), n.rot_deg !== void 0 && Cn(e, "roll", r, n.rot_deg), Object.keys(a).length && Cn(e, "size", r, a);
}
const qc = ["position_x", "position_y", "position_z"], Wl = "camera";
function xg(e, t) {
  const n = ep(e, t);
  return Qd({
    id: Wl,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: Hk(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function KM(e) {
  return qr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: $t(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function WM(e) {
  return e - 360 * Math.round(e / 360);
}
function BM(e, t, n, r) {
  const o = {};
  for (const a of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[a] !== r[a] && (o[a] = r[a] + WM(n[a] - r[a]));
  Object.keys(o).length && Cn(e, "rotation", t, o), n.hFOV_deg !== r.hFOV_deg && Cn(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * bt * 0.5) / Math.tan(n.vFOV_deg * bt * 0.5)), n.position.some((a, c) => a !== r.position[c]) && Cn(e, "position", t, [...n.position]);
}
function UM(e, t) {
  const n = Gt(e, "position", t), r = Gt(e, "rotation", t);
  return {
    ...Object.fromEntries(qc.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Gt(e, "fov", t)
  };
}
function YM(e, t, n, r) {
  const o = qc.indexOf(n);
  if (o >= 0) {
    const a = Gt(e, "position", t);
    a[o] = r, Cn(e, "position", t, a);
  } else n === "hFOV_deg" ? Cn(e, "fov", t, r) : Cn(e, "rotation", t, { [n]: r });
}
function XM(e, t, n) {
  Cn(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function qM(e, t) {
  const n = So(e, t);
  return {
    ...Object.fromEntries(qc.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function JM(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = qc.indexOf(n);
  if (a >= 0) {
    const c = Gt(e, "position", o);
    c[a] = r, Cn(e, "position", o, c);
  } else n === "scale" ? Cn(e, "scale", o, r) : n === "opacity" ? Cn(e, "opacity", o, r / 100) : Cn(e, "rotation", o, { [n]: r });
}
function ZM(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && Cn(e, o, r, n[o]);
}
function QM(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function eN(e, t, n) {
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
function Bl(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function pb(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function lp(e, t, n, r) {
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
function tN(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = $t(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function td(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function hb(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function mb(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Sg(e) {
  e.default_camera && JSON.stringify(qr({ version: 2, camera: e.camera }).camera) !== JSON.stringify(op()) && delete e.default_camera;
}
function gb(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = qr(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(op()) && (n.camera = null), ed(n);
}
function yb(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const o = qr(n);
    if (ed(o) === t) return !0;
    const { fps: a } = JSON.parse(t).timeline;
    return r && a !== o.timeline.fps && ed(zs(o, a)) === t;
  } catch {
    return !1;
  }
}
const df = 0.15, nN = 0.01, rN = 1e-3, iN = 0.05, oN = 4, kg = 250, aN = 16, Ar = 1, sN = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function or(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function Jr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Jc(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function Aa(e, t, n = 0) {
  const r = Jn(e, t, n), o = Jr(r, 2);
  return { right: Jr(r, 0), up: Jr(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function lN(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function nd(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function cN(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : nd(e, "3dof", n);
}
function uN(e) {
  return Aa(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function fN(e) {
  return or(e.position, Aa(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Ki(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Ms(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function cp(e, t) {
  return Ms(Ki(t, e.position), Aa(e.yaw_deg, e.pitch_deg).forward);
}
function up(e) {
  return Math.max(e, 1e-6) * iN;
}
function pf(e, t, n = null, r = Ar) {
  if (t) return t;
  const o = up(r);
  if (n && cp(e, n) > 0) {
    const a = Ki(n, e.position), c = Math.hypot(...a);
    return c >= o ? n : or(e.position, a, o / c);
  }
  return or(e.position, Aa(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function Mg(e, t = Ar) {
  return Math.max(e.distance, up(t));
}
function Ng(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > oN ? !1 : t.time - e.time < kg || e.cost > aN && t.time - e.wheelTime < kg;
}
function fp(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * bt);
  return { tanX: r, tanY: r * n / t };
}
function Pg(e, t, n, r, o = fN(e)) {
  const a = e.roll_deg ?? 0, [c, u] = dN(t, n, a), d = $t(e.yaw_deg + c / r * 360), b = Q(e.pitch_deg - u / r * 360, -89.9, 89.9), y = Jn(e.yaw_deg, e.pitch_deg, a), v = Jn(d, b, a), x = Ki(e.position, o), N = [0, 1, 2].map((P) => Ms(Jr(y, P), x)), k = { ...e, yaw_deg: d, pitch_deg: b, position: or(o, Jc(v, N)) };
  return { ...k, distance: cp(k, o) };
}
function dN(e, t, n) {
  const r = Math.cos(n * bt), o = Math.sin(n * bt);
  return [e * r + t * o, t * r - e * o];
}
function Ag(e, t, n, r, o, a = e.distance) {
  const { right: c, up: u } = uN(e), d = 2 * a * fp(e, r, o).tanY / o;
  return { ...e, position: or(or(e.position, c, -t * d), u, n * d), distance: a };
}
function Cg(e, t, n, r = Ar) {
  const o = Ki(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const c = Math.max(r, 1e-6), u = c * nN, d = n > 0 ? Math.min(Math.max(a * df, u), a - c * rN) : -Math.max(a * df / (1 - df), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: or(e.position, o, d / a) };
  return { ...b, distance: Math.max(cp(b, t), up(r)) };
}
function Ig(e, t, n, r) {
  const { tanX: o, tanY: a } = fp(e, n, r), c = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(c) * 1.1, { forward: d } = Aa(e.yaw_deg, e.pitch_deg);
  return { ...e, position: or(t.center, d, -u), distance: u };
}
function hf(e, t, n, r = null) {
  return bb({
    quaternion: Ao(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(fp(e, t, n).tanY) * fn,
    aspect: t / n
  }, e.position, e.distance, r);
}
function bb(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: Ar }, c = Math.hypot(o[0] - t[0], o[1] - t[1], o[2] - t[2]), u = Math.max(c + a, Math.hypot(...t) + 6 * a);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, a * 1e-4),
    far: u * 2
  };
}
function js(e, t, n, r) {
  const { right: o, up: a, forward: c } = vb(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * c[0] + u[1] * c[1] + u[2] * c[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * bt), y = b * e.aspect, v = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], x = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + v / d / y), y: r * 0.5 * (1 - x / d / b), z: d };
}
function vb(e) {
  const t = Ds(e.quaternion), n = Jr(t, 2);
  return { right: Jr(t, 0), up: Jr(t, 1), forward: n.map((r) => -r) };
}
function Og(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function pN({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function _b(e, t) {
  if (!e || !t.active) return null;
  const n = gN(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: rd(t),
    itemQuaternion: e.kind === "splat" ? sN : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function hN(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], c = _b(e, a);
  return c && { ...c, id: o.id, opacity: a.opacity, value: a };
}
function mN(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function gN(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function rd(e) {
  return {
    position: [...e.position],
    quaternion: Ao(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function id(e, t) {
  return or(e.position, Jc(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function od(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function ad({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function sd(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((c) => c[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((c) => c[a]))), r = t.map((a, c) => (a + n[c]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function yN(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...ad(t).map((a) => id(e.scene, a)));
  for (const a of n) o.push(...dp(a));
  for (const { box: a, value: c } of r) o.push(...ad(a).map((u) => id(c, u)));
  return o;
}
function bN(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: Ao(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: Jn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function dp(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => or(e.position, Jc(e.rotation, [r, o, 0])));
}
function vN(e, t = null) {
  const { sticker: n, value: r, plane: o, item: a } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : o ? sd(dp(o)) : a != null && a.box ? sd(ad(od(a.kind, a.box)).map((c) => id(r, c))) : { center: [...r.position], radius: r.scale };
}
const _N = 2, wN = 0.5, xN = 30;
function wb(e, t) {
  const n = Ki(t, e), r = Math.atan2(n[0], -n[2]) * fn, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * fn;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function SN(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * wN : _N, a = t ? [...t] : or(e.position, Aa(e.yaw_deg, e.pitch_deg).forward, o), c = Math.hypot(...Ki(a, e.position)), u = c > 0 ? wb(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(c, 1e-3) * Math.tan(xN * 0.5 * bt);
  return { position: a, rotation: u, scale: d };
}
function Eg(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function kN(e) {
  return [0, 1, 2].map((t) => Jr(e, t));
}
function Fg(e, t, n, r) {
  if (e === "translate") return { position: or(t.position, Ki(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * CN(n.scale, r.scale) / n.scale };
  const o = Eg(Ds(r.quaternion), kN(Ds(n.quaternion))), a = Eg(o, Jn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: c, pitchDeg: u, rollDeg: d } = Ky(a);
  return Math.abs(u) <= MN ? { rotation: { yaw_deg: c + 0, pitch_deg: u, roll_deg: d + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: u, roll_deg: NN(a, t.yaw_deg) } };
}
const MN = 89.9;
function NN(e, t) {
  const n = Jr(e, 0), r = Jr(e, 1), o = Math.cos(t * bt), a = Math.sin(t * bt);
  return Math.atan2(a * -r[2] - o * r[0], o * n[0] - a * -n[2]) * fn + 0;
}
const PN = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function AN(e, t, n, r, o) {
  if (!js(e, t, r, o)) return null;
  const { right: a, up: c, forward: u } = vb(e), d = Ki(t, e.position), b = Ms(d, a), y = Ms(d, c), v = Ms(d, u), x = Math.tan(e.fovY_deg * 0.5 * bt), N = x * e.aspect, k = Math.hypot(b, y, v) * PN[n] * Math.min(1.9 * x, 7) / 4;
  if (!(v > k)) return { minX: 0, maxX: r, minY: 0, maxY: o };
  const P = (z) => {
    const _ = k * Math.sqrt(z * z + v * v - k * k);
    return [(z * v - _) / (v * v - k * k), (z * v + _) / (v * v - k * k)];
  }, [I, F] = P(b), [W, V] = P(y);
  return {
    minX: r * 0.5 * (1 + I / N),
    maxX: r * 0.5 * (1 + F / N),
    minY: o * 0.5 * (1 - V / x),
    maxY: o * 0.5 * (1 - W / x)
  };
}
function CN(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, c) => Math.abs(c - e) > Math.abs(a - e) ? c : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function IN(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Tg(e, t) {
  const n = Jn(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * bt) * t, o = r / e.aspect, a = (b, y, v) => or(e.position, Jc(n, [b, y, v])), c = [a(-r, -o, -t), a(r, -o, -t), a(r, o, -t), a(-r, o, -t)], u = c.map((b) => [e.position, b]);
  c.forEach((b, y) => u.push([b, c[(y + 1) % 4]]));
  const d = [a(-r * 0.5, o * 1.1, -t), a(0, o * 1.5, -t), a(r * 0.5, o * 1.1, -t)];
  return u.push([d[0], d[1]], [d[1], d[2]], [d[2], d[0]]), u;
}
function ON(e, t, n, r, o, a = 6) {
  return t.some(([c, u]) => {
    const d = js(e, c, r, o), b = js(e, u, r, o);
    if (!d || !b) return !1;
    const y = b.x - d.x, v = b.y - d.y, x = Q(((n.x - d.x) * y + (n.y - d.y) * v) / Math.max(y * y + v * v, 1e-12), 0, 1);
    return Math.hypot(d.x + y * x - n.x, d.y + v * x - n.y) <= a;
  });
}
function EN(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function FN(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Gt(r, "position", 0)];
  const o = Math.max(t - 1, 0), a = Math.min(n, o + 1);
  return Array.from({ length: a }, (c, u) => {
    const d = a === 1 ? 0 : u * o / (a - 1);
    return Gt(r, "position", d);
  });
}
const Dg = 2048, xb = 0.28;
function Sb(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * bt);
  return {
    quaternion: Ao(Jn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * fn,
    aspect: r
  };
}
function Ns(e) {
  const t = ki(e);
  return {
    quaternion: Ao(Jn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Lg(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = Zd(n, r), c = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * fn,
      vFOV_deg: 2 * Math.atan(a / r) * fn
    }
  };
}
function kb(e, t, n) {
  const [[r, o, a], [c, u, d], [b, y, v]] = Ds(e.quaternion), x = Math.tan(e.fovY_deg * 0.5 * bt), N = x * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, P = 1e-4) {
      const I = Kk(k), F = r * I.x + c * I.y + b * I.z, W = o * I.x + u * I.y + y * I.z, V = -(a * I.x + d * I.y + v * I.z), z = Math.max(V, P);
      return {
        x: t * 0.5 * (1 + F / z / N),
        y: n * 0.5 * (1 - W / z / x),
        z: V
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, P) {
      const I = (k / t * 2 - 1) * N, F = (1 - P / n * 2) * x;
      return Xd(Kl({
        x: r * I + o * F - a,
        y: c * I + u * F - d,
        z: b * I + y * F - v
      }));
    }
  };
}
function TN(e, t, { media: n, zIndex: r, paintLayers: o }) {
  const a = vc(e, t), c = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const y = u.source.kind === "port" && !u.visible;
    if (!b.active && !y) return;
    const v = n(u);
    if (!v) return;
    const x = Math.tan(b.hFOV_deg * 0.5 * bt), N = Math.tan(b.vFOV_deg * 0.5 * bt), { crop: k } = u;
    c.push({
      kind: "sticker",
      id: u.id,
      media: v.media,
      revision: v.revision,
      source: v.source,
      opacity: y ? xb : b.opacity,
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
function Mb(e, t, n, { media: r, paintLayers: o }) {
  const a = /* @__PURE__ */ new Map();
  for (const c of n)
    typeof (c == null ? void 0 : c.id) == "string" && c.id && !a.has(c.id) && a.set(c.id, c);
  return TN(e, t, {
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
function DN(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function LN(e, t, n, { media: r }) {
  const o = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !o.has(u.id) && o.set(u.id, u);
  const a = vc(e, t), c = [];
  return e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const y = o.get(u.id), v = y ? r(y) : null;
    if (!v) return;
    const { width: x, height: N } = DN(v.media), k = bN(b, u.crop, x, N);
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
const mf = /* @__PURE__ */ new WeakMap();
let RN = 1;
function ld(e) {
  return mf.has(e) || mf.set(e, RN++), mf.get(e);
}
function Rg(e) {
  return e && typeof e == "object" ? ld(e) : e;
}
function Vg({ background: e, layers: t }) {
  return JSON.stringify([
    e && [ld(e.media), Rg(e.source), e.revision, e.coverage],
    t.map((n) => [n.kind, n.id, ld(n.media), Rg(n.source), n.revision, n.opacity, n.quaternion, n.rect])
  ]);
}
function VN({ onReady: e, onFailed: t, onUpdate: n = () => {
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
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(c, u, d, b, y) {
      return r ? r.pickSurface(c, u, d, b, y) : null;
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
  return import("./.lazy/pano_three_view-ClhLZ0Eh.js").then((c) => c.$).then((c) => {
    o || (r = c.createThreeView({ onUpdate: n }), a.ready = !0, e());
  }).catch((c) => {
    console.error("[PanoramaStickers] three.js view is unavailable", c), a.failed = !0, t();
  }), a;
}
const Nb = "3D view unavailable. Check the browser console.";
function Sc(e, t, n) {
  return Sb({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function $N(e) {
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
const Pb = $N(
  () => import("./.lazy/pano_three_view-ClhLZ0Eh.js").then((e) => e.$).then((e) => e.createThreeView())
), Wi = ["erp_image", "bg_erp", "bg_media"], Ul = ["source"], pp = ["sticker_image", "sticker"], Ab = ["scene"], zN = {
  background: [...Wi, ...Ul],
  "external-sticker": [...pp, ...Ul],
  scene: [...Ab, ...Ul]
};
function Cb(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function cd(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = Cb(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function jN(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function Ib(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === c.type);
  }
}
function HN(e, t) {
  const { graph: n, entry: r } = Ib(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = Cb(o.get(c == null ? void 0 : c.link));
    u && (a[String((c == null ? void 0 : c.name) || "")] = u);
  }
  return a;
}
const Ob = [...Wi, ...pp, ...Ab, ...Ul], GN = 256, sa = /* @__PURE__ */ new Map(), gf = /* @__PURE__ */ new WeakMap();
let Eb = () => null;
function Fb(e) {
  return gf.has(e) || gf.set(e, JSON.stringify(e)), gf.get(e);
}
function KN(e) {
  Eb = e;
}
function kc(e, t) {
  const n = Fb(e);
  sa.delete(n), sa.set(n, t), sa.size > GN && sa.delete(sa.keys().next().value);
}
function Sn(e, t) {
  var a;
  const n = e ? Eb(e) : null;
  if (!n) return !0;
  const r = cd(e);
  let o = sa.get(Fb(n));
  if (o)
    kc(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((c) => Ob.includes(c == null ? void 0 : c.name)))) return !0;
    kc(n, r), o = r;
  }
  return zN[t].every((c) => o[c] === r[c]);
}
const Mc = /* @__PURE__ */ new WeakSet();
async function ud(e, t) {
  if (Mc.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Mc.add(e), n.ok && r !== void 0 ? r : null;
}
function Tb(e, t) {
  var a, c, u, d, b;
  const n = (u = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = Ib(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((y) => Ob.includes(y == null ? void 0 : y.name))) ? null : { output: o, inputs: HN(n, t) };
}
const Yl = /* @__PURE__ */ new Map();
function WN(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && Yl.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await ud(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = Tb(o, a);
        c && kc(c.output, c.inputs);
      }
    });
}
const BN = 5;
function UN(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${BN}`, r = ud(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, ud(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, u) {
      var b, y, v, x;
      const d = String(c.id);
      for (const { id: N } of await r) {
        if (!u()) return null;
        const k = await a(N);
        if ((b = k == null ? void 0 : k.outputs) != null && b[d])
          return ((x = (v = (y = k.workflow) == null ? void 0 : y.prompt) == null ? void 0 : v[d]) == null ? void 0 : x.class_type) !== c.comfyClass ? null : Tb(k, d);
      }
      return null;
    }
  };
}
function YN(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let Zo = null;
async function XN(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || Mc.has(n) || (u = Yl.get(o)) != null && u.has(r) || YN(t)) return null;
  (Zo == null ? void 0 : Zo.workflowId) !== o && (Zo = { workflowId: o, history: UN(n, o) }, queueMicrotask(() => {
    Zo = null;
  }));
  const c = await Zo.history.lastNodeOutput(e, a);
  return a() ? c ? (kc(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (Mc.has(n) || Yl.set(o, (Yl.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function $g(e, t, n, r = Wi) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const zg = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Xl(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return zg.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return zg.test(String((e == null ? void 0 : e.filename) || ""));
}
const yf = /* @__PURE__ */ new WeakMap();
function qN(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function fd(e) {
  return qN(e) ? (yf.has(e) || yf.set(e, Math.random().toString(36).slice(2, 10)), yf.get(e)) : "run";
}
function Db(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function JN(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const u of c) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, y) => y)));
    }
  };
  return o(e, t), r;
}
function hp(e, t = [], n = null) {
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
function ZN({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  var I;
  const r = ((I = e == null ? void 0 : e.createElement) == null ? void 0 : I.call(e, "video")) || null;
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
    var F, W;
    a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("canplay", b), r.removeEventListener("timeupdate", y), r.removeEventListener("play", v), r.removeEventListener("pause", x), r.removeEventListener("error", k), r.pause(), (F = r.removeAttribute) == null || F.call(r, "src"), (W = r.load) == null || W.call(r));
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
function QN(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function jg(e, t, n = null) {
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
  return !r && n != null && (r = QN(e == null ? void 0 : e.graph, n)), r;
}
function e2(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function t2(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function n2(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function Lb({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (_) => {
    if (!_) return "";
    if (typeof _ == "string") return String(_ || "").trim();
    if (Array.isArray(_)) {
      if (_.length === 0) return "";
      if (_.length === 1) return o(_[0]);
      const R = String(_[0] || "").trim();
      if (R)
        return ao(t, {
          filename: R,
          subfolder: String(_[1] || "").trim(),
          type: String(_[2] || "output").trim() || "output"
        });
      for (const B of _) {
        const se = o(B);
        if (se) return se;
      }
      return "";
    }
    return typeof (_ == null ? void 0 : _.src) == "string" && _.src ? _.src : typeof (_ == null ? void 0 : _.url) == "string" && _.url ? _.url : ao(t, _);
  }, a = (_) => {
    if (!_ || typeof _ != "object") return "";
    const R = String(_.type || "").trim().toLowerCase();
    if (R === "dataurl") return String(_.value || "");
    if (R !== "comfy_image") return "";
    const B = String(_.filename || "").trim();
    return B ? ao(t, {
      filename: B,
      subfolder: String(_.subfolder || ""),
      type: String(_.storage || "input")
    }) : "";
  }, c = (_) => {
    const R = e == null ? void 0 : e.nodeOutputs;
    if (!R || _ == null) return null;
    const B = String(_);
    return R instanceof Map ? R.get(_) || R.get(B) || R.get(Number(B)) || null : R[_] || R[B] || null;
  }, u = (_, R) => {
    var se;
    const B = c(_ == null ? void 0 : _.id);
    return Array.isArray((se = B == null ? void 0 : B.ui) == null ? void 0 : se[R]) ? B.ui[R] : Array.isArray(B == null ? void 0 : B[R]) ? B[R] : [];
  }, d = (_, R) => {
    const B = c(_ == null ? void 0 : _.id);
    return B != null && B.ui && Object.prototype.hasOwnProperty.call(B.ui, R) ? B.ui[R] : B && Object.prototype.hasOwnProperty.call(B, R) ? B[R] : null;
  }, b = (_, R) => {
    const B = d(_, "pano_sticker_input_state_hash"), se = Array.isArray(B) ? B[0] : B;
    return String(se ?? "").trim() || n2(R);
  }, y = (_) => {
    const R = [], B = /* @__PURE__ */ new Set();
    for (const se of _ || []) {
      const xe = o(se);
      !xe || B.has(xe) || (B.add(xe), R.push(xe));
    }
    return R;
  }, v = (_, R) => {
    var xe;
    const B = [];
    Array.isArray(_ == null ? void 0 : _.images) && _.images.length && B.push(_.images), Array.isArray((xe = _ == null ? void 0 : _.ui) == null ? void 0 : xe.images) && _.ui.images.length && B.push(_.ui.images);
    const se = [];
    for (const A of B)
      R >= 0 && R < A.length && se.push(A[R]), se.push(...A);
    return se;
  }, x = (_, R) => {
    var te;
    const B = String(R || "").trim();
    if (!B) return { src: "", sourceType: "", inputName: "" };
    const xe = (Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : []).findIndex((re) => String((re == null ? void 0 : re.name) || "") === B);
    if (xe < 0) return { src: "", sourceType: "", inputName: B };
    const A = _.graph ? _.getInputLink(xe) : null;
    if ((A == null ? void 0 : A.origin_id) == null) return { src: "", sourceType: "", inputName: B };
    const L = A.origin_id, de = jg(_, xe, L);
    if (!de) return { src: "", sourceType: "", inputName: B };
    const Pe = Number(A.origin_slot ?? 0);
    let fe = [];
    try {
      fe = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(de) || [] : [];
    } catch {
      fe = [];
    }
    if (Array.isArray(fe) && fe.length) {
      const re = [];
      Pe >= 0 && Pe < fe.length && re.push(fe[Pe]), re.push(...fe);
      const Oe = y(re.filter((Ee) => !Xl(Ee)));
      if (Oe.length)
        return { src: Oe[0], srcCandidates: Oe, sourceType: "appNodeImageUrls", inputName: B };
    }
    const U = c((de == null ? void 0 : de.id) ?? L), q = y(v(U, Pe).filter((re) => !Xl(re))).map((re) => `${re}&pano_src=${fd(U)}`);
    if (q.length)
      return { src: q[0], srcCandidates: q, sourceType: "nodeOutputs", inputName: B };
    const T = Array.isArray(de == null ? void 0 : de.imgs) ? de.imgs : [];
    if (T.length) {
      const re = [];
      Pe >= 0 && Pe < T.length && re.push(T[Pe]), re.push(...T);
      const Oe = y(re);
      if (Oe.length)
        return { src: Oe[0], srcCandidates: Oe, sourceType: "nodeImgs", inputName: B };
    }
    const E = (te = de == null ? void 0 : de.widgets) == null ? void 0 : te.find((re) => String((re == null ? void 0 : re.name) || "").toLowerCase() === "image");
    if (E) {
      let re = o(E.value);
      if (re && !re.includes("/") && !re.includes(":") && (de.comfyClass === "LoadImage" || de.type === "LoadImage") && (re = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(re)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(re)}&type=input&subfolder=`), re) return { src: re, sourceType: "widget", inputName: B };
    }
    return { src: "", sourceType: "", inputName: B };
  }, N = (_, R = []) => {
    var se;
    const B = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : [];
    for (const xe of R) {
      const A = B.findIndex((fe) => String((fe == null ? void 0 : fe.name) || "") === xe), L = A >= 0 && _.graph ? _.getInputLink(A) : null;
      if ((L == null ? void 0 : L.origin_id) == null) continue;
      const de = c(((se = jg(_, A, L.origin_id)) == null ? void 0 : se.id) ?? L.origin_id), Pe = (Array.isArray(de == null ? void 0 : de.images) ? de.images : []).find(Xl);
      return Pe ? `${ao(t, Pe)}&pano_src=${fd(de)}` : "";
    }
    return "";
  }, k = (_, R = []) => {
    const B = Array.isArray(R) ? R : [R];
    for (const se of B) {
      const xe = x(_, se);
      if (String((xe == null ? void 0 : xe.src) || "").trim()) return xe;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, P = (_) => {
    const R = String(_ || "").trim();
    if (!R) return [];
    if (e2(R)) return [R];
    const { filename: B, subfolder: se } = t2(R);
    return B ? y([
      ao(t, { filename: B, subfolder: se, type: "temp" }),
      ao(t, { filename: B, subfolder: se, type: "output" }),
      ao(t, { filename: B, subfolder: se, type: "input" }),
      R
    ]) : [R];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (_) => {
      var R, B;
      try {
        (B = (R = _ == null ? void 0 : _.__panoLinkedInputImageCache) == null ? void 0 : R.forEach) == null || B.call(R, (se, xe, A) => {
          var L;
          se != null && se.img && ((L = r == null ? void 0 : r.isImageLoadFailed) != null && L.call(r, se.img)) && A.delete(xe);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (_, R) => {
      var B;
      (B = _ == null ? void 0 : _.delete) == null || B.call(_, `__ui__${String(R || "")}`);
    },
    linkedValue: (_, R) => {
      var L, de, Pe, fe;
      const B = String(R || ""), se = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs.findIndex((U) => String((U == null ? void 0 : U.name) || "") === B) : -1, xe = se >= 0 && _.graph ? _.getInputLink(se) : null;
      if (xe) {
        const U = c(xe.origin_id), q = [
          U == null ? void 0 : U.output,
          U == null ? void 0 : U.result,
          (L = U == null ? void 0 : U.data) == null ? void 0 : L.output,
          (de = U == null ? void 0 : U.data) == null ? void 0 : de.result,
          (Pe = U == null ? void 0 : U.ui) == null ? void 0 : Pe.output,
          (fe = U == null ? void 0 : U.ui) == null ? void 0 : fe.result
        ];
        for (const T of q) {
          if (!Array.isArray(T)) continue;
          const E = T[Number(xe.origin_slot || 0)];
          if (typeof E == "string" && E.trim()) return E;
        }
      }
      const A = Array.isArray(_ == null ? void 0 : _.widgets) ? _.widgets.find((U) => String((U == null ? void 0 : U.name) || "") === B) : null;
      return String((A == null ? void 0 : A.value) || "");
    },
    linkedVideoFile: N,
    loadPreferredExactLinkedImage: (_, R = [], B = null, se = "") => {
      var vt;
      const xe = Array.isArray(R) ? R : [R], A = k(_, xe), de = (Array.isArray(A == null ? void 0 : A.srcCandidates) && A.srcCandidates.length ? A.srcCandidates : [A == null ? void 0 : A.src]).map((pt) => String(pt || "").trim()).filter(Boolean);
      if (!de.length) return null;
      const Pe = y(de.flatMap((pt) => P(pt)));
      if (!Pe.length) return null;
      _.__panoLinkedInputImageCache || (_.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const fe = String(se || xe.join("|") || "image_exact"), U = de.join(`
`), q = _.__panoLinkedInputImageCache.get(fe);
      if (q && q.srcRaw === U && q.img) return q.img;
      const T = n || globalThis.Image;
      if (typeof T != "function") return null;
      const E = new T();
      (vt = r == null ? void 0 : r.markImageLoading) == null || vt.call(r, E, U);
      const te = { srcRaw: U, resolvedSrc: "", img: E };
      _.__panoLinkedInputImageCache.set(fe, te);
      let re = -1;
      const Oe = (pt) => {
        var $, mt, Ne;
        pt === "ready" ? ($ = r == null ? void 0 : r.markImageReady) == null || $.call(r, E, U) : (mt = r == null ? void 0 : r.markImageFailed) == null || mt.call(r, E, U), B == null || B(E), (Ne = _.setDirtyCanvas) == null || Ne.call(_, !0, !0);
      }, Ee = () => {
        if (re += 1, re >= Pe.length) {
          Oe("failed");
          return;
        }
        te.resolvedSrc = Pe[re], E.src = te.resolvedSrc;
      };
      return E.onload = () => Oe("ready"), E.onerror = () => {
        if (re + 1 < Pe.length) {
          Ee();
          return;
        }
        Oe("failed");
      }, Ee(), E;
    },
    output: c,
    resolvePreferredExactLinkedSource: k,
    source: o,
    uiImage: (_, R, B, se = null) => {
      var U, q, T;
      const xe = u(_, R)[0] || null, A = o(xe);
      if (!A) return null;
      const L = `__ui__${R}`, de = (U = B == null ? void 0 : B.get) == null ? void 0 : U.call(B, L);
      if (de && de.__panoSrc === A) return de;
      const Pe = n || globalThis.Image;
      if (typeof Pe != "function") return null;
      const fe = new Pe();
      return fe.__panoSrc = A, (q = r == null ? void 0 : r.markImageLoading) == null || q.call(r, fe, A), fe.onload = () => {
        var E;
        (E = r == null ? void 0 : r.markImageReady) == null || E.call(r, fe, A), se == null || se(fe);
      }, fe.onerror = () => {
        var E;
        (E = r == null ? void 0 : r.markImageFailed) == null || E.call(r, fe, A), se == null || se(fe);
      }, fe.src = A, (T = B == null ? void 0 : B.set) == null || T.call(B, L, fe), fe;
    },
    uiList: u,
    uiValue: d
  };
}
const r2 = 1e-3;
function Rb(e, t, n, r) {
  if (!Vs(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const c = Math.floor(o + 0.5);
    return c >= 0 && c < r.frames ? (c + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(r2 / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function Vb(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function i2(e, t) {
  return Math.floor(e * t.fps);
}
function $b(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const Hg = 4;
function zb({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(c) {
    return r.has(c) || r.set(c, e(n[c], t)), r.get(c);
  }
  return {
    picture(c, u, d, b) {
      if ((c.length !== n.length || c.some((x, N) => x !== n[N])) && (n = c, r.clear(), o = null), u === null) return null;
      const y = i2(u, d);
      for (let x = y; x < Math.min(n.length, y + Hg + 1); x += 1) a(x);
      for (const x of r.keys())
        (x < y || x > y + Hg) && x !== o && r.delete(x);
      const v = r.get(y);
      return v != null && v.complete && v.naturalWidth > 0 && (o !== null && o !== y && r.delete(o), o = y), o === null ? b : r.get(o);
    }
  };
}
function jb({
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
const ql = "sticker_image_1", Hb = "external_image", Ma = 0;
function ga(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function bf(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Hi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function dd(e, t = Ma) {
  return (e == null ? void 0 : e.version) !== 2 ? Hi(e) : Hi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: So(n, t).active,
    external: n.source.kind === "port",
    ...sp(n, t)
  }));
}
function mp(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Hi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function Gb(e) {
  return String((e == null ? void 0 : e.id) || "") === ql || String((e == null ? void 0 : e.source_kind) || "") === Hb;
}
function gp(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Gb(t);
}
const Kb = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function Wb(e) {
  return !Gb(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(Kb.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function Bb(e) {
  const t = Wb(e);
  return t ? Kb.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function Ub(e, t = {}) {
  var z, _, R;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((B) => String((B == null ? void 0 : B.id) || "") === ql);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const B = String(((z = e.active) == null ? void 0 : z.selected_sticker_id) || "") === ql;
    return {
      state: {
        ...e,
        stickers: n.filter((se, xe) => xe !== r),
        active: B ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, u = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), y = d > 0 && b > 0, v = Math.max(1, d), x = Math.max(1, b), N = t.pose && typeof t.pose == "object" ? t.pose : {}, k = u ? N.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || N.hFOV_deg || 30, P = Math.min(179, Math.max(0.1, Number(k)));
  if (!u) {
    if (!y) return { state: e, changed: !1 };
    const B = ga(P, v, x), se = Number(((_ = c == null ? void 0 : c.initial_pose) == null ? void 0 : _.hFOV_deg) ?? P), xe = ga(se, v, x), A = Number(((R = c == null ? void 0 : c.initial_pose) == null ? void 0 : R.vFOV_deg) ?? xe);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - B) <= 1e-6 && Math.abs(A - xe) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((L, de) => de === r ? {
          ...L,
          vFOV_deg: B,
          initial_pose: L.initial_pose && typeof L.initial_pose == "object" ? { ...L.initial_pose, vFOV_deg: xe } : L.initial_pose
        } : L)
      },
      changed: !0
    };
  }
  const I = n.reduce((B, se) => Math.max(B, Number((se == null ? void 0 : se.z_index) || 0)), -1), F = {
    yaw_deg: Number(N.yaw_deg || 0),
    pitch_deg: Number(N.pitch_deg || 0),
    hFOV_deg: P,
    vFOV_deg: y ? ga(P, v, x) : Number(N.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || P),
    rot_deg: Number(N.rot_deg ?? N.roll_deg ?? 0)
  }, W = {
    ...c || {},
    id: ql,
    source_kind: Hb,
    source_link_id: o,
    source_state_hash: a,
    ...F,
    initial_pose: { ...F },
    visible: !0,
    z_index: I + 1
  }, V = r >= 0 ? n.map((B, se) => se === r ? W : B) : [...n, W];
  return { state: { ...e, stickers: V }, changed: !0 };
}
function Gg(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const o2 = ["IMAGE", "VIDEO"];
function Kg(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => o2.includes(n)) ? "2d" : null;
}
function a2(e, t) {
  var o, a, c, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((y) => (y == null ? void 0 : y.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? Kg(r.type) ?? Kg((b = (d = (u = (c = (a = e.graph).getNodeById) == null ? void 0 : c.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function Yb(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: Gg(e, "sticker"),
    awaitingPose: !t && (Gg(e, "sticker_state") || a2(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function Wg(e, t) {
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
function Xb(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var P;
  const c = e.stickers.findIndex((I) => gp(e, I)), u = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const I = ((P = e.active) == null ? void 0 : P.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((F, W) => W !== c),
        active: I ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const I = { ...Wg(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map((F, W) => W === c ? I : F) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const I = [u.size.value, ...u.size.keyframes.map((V) => V.value)], F = I.map((V) => ga(V.hFOV_deg, o, a));
    if (I.every((V, z) => Math.abs(V.vFOV_deg - F[z]) <= 1e-6)) return { state: e, changed: !1 };
    const W = {
      value: { ...u.size.value, vFOV_deg: F[0] },
      keyframes: u.size.keyframes.map((V, z) => ({ ...V, value: { ...V.value, vFOV_deg: F[z + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((V, z) => z === c ? { ...V, size: W } : V) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((I) => I.id));
  let y = 1;
  for (; b.has(`sticker_${y}`); ) y += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, Wg(`sticker_${y}`, r)] }, changed: !0 };
  const v = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), x = (I) => d ? ga(I, o, a) : I, N = lp(`sticker_${y}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: v,
    vFOV_deg: x(v)
  }, Hi(e).reduce((I, F) => Math.max(I, F.z_index), -1) + 1), k = (r == null ? void 0 : r.keyframes) ?? {};
  return N.direction.keyframes = k.direction ?? [], N.roll.keyframes = k.roll ?? [], N.size.keyframes = (k.size ?? []).map((I) => ({ ...I, value: { ...I.value, vFOV_deg: x(I.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, N] }, changed: !0 };
}
function yp(e) {
  const t = Hi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: bf(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: bf(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: bf(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function qb(e) {
  const t = mp(e), n = gp(e, t), r = Hi(e).some((u) => u && u.visible !== !1), o = yp(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: Bb(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function s2(e) {
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
function Bg(e, t) {
  const n = mp(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = s2(e), o = String(n.id || ""), a = yp(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(c, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function l2(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function c2(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return Ub(e, t.value);
  if (t.type === "sync-port") return Xb(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((x) => String((x == null ? void 0 : x.id) || "") === a))
      return { state: e, changed: !1 };
    const d = yp(e).reduce((x, N) => Math.max(x, Number(N.z_index || 0)), -1), b = 30, y = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ga(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, lp(a, Bl(o.asset), y, d + 1)],
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
    return !o || !Hi(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = mp(e);
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
    const o = Wb(n);
    return !o || !Bb(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Bg(e, "front");
  if (t.type === "send-back") return Bg(e, "back");
  if (t.type === "delete-selected") {
    if (gp(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Hi({ ...e, stickers: o })[0], c = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return e.version !== 2 && (u.assets = l2(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? sp(n, Ma) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(c[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = GM(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return db(b, Ma, d), { state: { ...e, stickers: e.stickers.map((y) => y === n ? b : y) }, changed: !0 };
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
function u2(e = {}) {
  return jb({
    ...e,
    reduce: c2,
    projectModel: qb
  });
}
const pd = 2;
function fo(e, t) {
  return Math.floor(e * t + 0.5);
}
function f2(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Jb({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: c, onChange: u }) {
  let d = 0, b = !1, y = !1, v = { name: "idle" }, x = [];
  const N = () => b && !y, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function P() {
    for (const te of x) te();
    x = [];
  }
  function I(te, re = {}) {
    return P(), v = { name: te, ...re }, u(), v;
  }
  function F(te, re, Oe) {
    const Ee = () => {
      v === te && Oe();
    };
    e.addEventListener(re, Ee), x.push(() => e.removeEventListener(re, Ee));
  }
  function W(te, re) {
    let Oe = t.requestFrame(function Ee(vt) {
      v === te && (re(vt), v === te && (Oe = t.requestFrame(Ee)));
    });
    x.push(() => t.cancelFrame(Oe));
  }
  function V(te) {
    d = te, a(d);
  }
  function z() {
    return I(y ? "error" : "idle");
  }
  function _() {
    y = !0, z();
  }
  function R() {
    const { seekable: te } = e, re = te != null && te.length ? te.end(te.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(re) ? re : 1 / 0));
  }
  function B(te) {
    if (!N()) return te === "play" ? de() : z();
    if (e.readyState < pd) {
      const re = I("loading", { then: te });
      return F(re, "loadeddata", () => B(re.then)), F(re, "error", _), re;
    }
    return te === "play" && d / n() >= Number(e.duration) ? de() : se(te, !1);
  }
  function se(te, re) {
    const Oe = R();
    if (!e.ended && fo(Number(e.currentTime), n()) === fo(Oe, n())) return xe(te);
    const Ee = I("seeking", { then: te, frame: d, retried: re });
    return F(Ee, "seeked", () => {
      const vt = fo(Number(e.currentTime), n()) === fo(R(), n()), pt = d === Ee.frame;
      vt || pt && Ee.retried ? xe(Ee.then) : se(Ee.then, pt);
    }), F(Ee, "error", _), e.currentTime = Oe, Ee;
  }
  function xe(te) {
    return te === "play" ? A() : (c(), z());
  }
  function A() {
    const te = I("playingVideo", { shown: !1 });
    if (F(te, "pause", () => e.ended ? L() : U()), F(te, "ended", L), F(te, "error", _), o() && fo(Number(e.duration), n()) >= r()) {
      const Oe = e.loop;
      e.loop = !0, x.push(() => {
        e.loop = Oe;
      });
    }
    const re = (Oe, Ee) => {
      Ee && !te.shown && (te.shown = !0, u()), Pe(fo(Oe, n()));
    };
    if (k()) {
      let Oe = e.requestVideoFrameCallback(function Ee(vt, pt) {
        v === te && (re(Number(pt.mediaTime), !0), v === te && (Oe = e.requestVideoFrameCallback(Ee)));
      });
      x.push(() => {
        var Ee;
        return (Ee = e.cancelVideoFrameCallback) == null ? void 0 : Ee.call(e, Oe);
      });
    } else
      W(te, () => re(Number(e.currentTime), e.readyState >= pd));
    return Promise.resolve(e.play()).catch(() => {
      v === te && U();
    }), te;
  }
  function L() {
    c(), de();
  }
  function de() {
    const te = I("playingClock", { startTs: t.now(), startFrame: d });
    return W(te, (re) => Pe(te.startFrame + Math.floor((re - te.startTs) / 1e3 * n()))), te;
  }
  function Pe(te) {
    if (te < r()) {
      V(te);
      return;
    }
    if (!o()) {
      fe(r() - 1);
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), V(0), B("play");
  }
  function fe(te) {
    v.name === "playingVideo" ? (P(), e.pause(), V(Math.max(0, te)), c()) : V(Math.max(0, te)), B("still");
  }
  function U() {
    if (v.name === "loading" || v.name === "seeking")
      v.then = "still", u();
    else if (v.name === "playingVideo") {
      P(), e.pause();
      const te = f2(Number(e.currentTime), n());
      V(Math.min(te, r() - 1)), c(), d === te ? z() : B("still");
    } else v.name === "playingClock" && fe(Math.min(d, r() - 1));
  }
  function q() {
    if (!E()) {
      if (d >= r() - 1 && V(0), v.name === "loading" || v.name === "seeking") {
        v.then = "play", u();
        return;
      }
      B("play");
    }
  }
  function T(te) {
    const re = Math.max(0, Math.round(te));
    if (v.name === "loading" || v.name === "seeking") {
      v.then = "still", V(re), u();
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), V(re), B("still");
  }
  function E() {
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
      return E();
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
    seek: T,
    toggle() {
      E() ? U() : q();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(te) {
      P(), b = !!te, y = !1, B("still");
    },
    dispose() {
      P(), b = !1, v = { name: "idle" };
    }
  };
}
function Zb({ video: e, onCapture: t, onChange: n }) {
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
    if (!r || o || e.readyState < pd) return;
    const { time: P, playing: I, fps: F } = a;
    if (P === null) {
      e.pause(), d = !1;
      return;
    }
    if (I) {
      if (c !== null) return;
      const W = Number(e.duration), V = Number.isFinite(W) ? Math.min(P, W) : P, z = Math.abs(Number(e.currentTime) - V) > 1.5 / F;
      if (e.ended && !z) return;
      z && y(V), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
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
  for (const [P, I] of Object.entries(N)) e.addEventListener(P, I);
  function k(P) {
    r = P, o = !1, c = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: P = "", time: I = null, playing: F = !1, fps: W }) {
      P !== r && (k(P), n()), a = { time: I, playing: F, fps: W }, v();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(P, I) {
      return !r || o ? I : a.time === null ? null : a.playing && d ? e : u === null ? I : P;
    },
    dispose() {
      for (const [P, I] of Object.entries(N)) e.removeEventListener(P, I);
      k("");
    }
  };
}
function d2(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function p2({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: c, onStickerCapture: u, onChange: d, camera: b = !1 }) {
  let y = "", v = "", x = 0;
  const N = /* @__PURE__ */ new Set();
  let k = null, P = null;
  const I = () => o().timeline.fps, F = (L) => L.stickers.find((de) => de.source.kind === "port"), W = () => {
    const L = o(), de = F(L);
    return lb(L, {
      minimum: Math.round(I() * 5),
      frames: Math.max(
        y ? Math.round(x * I()) : 0,
        k && de ? Vb(de.clip, I(), k.meta) : 0
      ),
      camera: b
    });
  }, V = Jb({
    video: e,
    clock: r,
    fps: I,
    span: W,
    loop: () => !0,
    onFrame: a,
    onCapture: c,
    onChange: d
  }), z = () => {
    v === y && Number.isFinite(e.duration) && (x = e.duration);
  }, _ = () => {
    v && (N.add(v), d());
  }, R = Zb({ video: t, onCapture: u, onChange: d }), B = zb({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", z), e.addEventListener("error", _);
  function se(L) {
    L !== v && (v = L, e.pause(), L ? e.src = L : e.removeAttribute("src"), e.load(), V.setSource(!!L));
  }
  function xe() {
    V.playing && V.stop();
  }
  function A(L) {
    const de = F(L);
    P = k && de ? Rb(de.clip, V.frame, L.timeline.fps, k.meta) : null, R.follow({
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
    pause: xe,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return k;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(L, de) {
      return k != null && k.frames ? B.picture(k.frames, P, k.meta, de) : R.picture(L, de);
    },
    toggle() {
      V.playing ? V.stop() : V.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: L, sources: de, state: Pe, sticker: fe = null }) {
      if (k = L ? fe : null, !L)
        return xe(), se(""), A(Pe), !1;
      for (const te of N)
        de.includes(te) || N.delete(te);
      const U = de.find((te) => te && !N.has(te)) || "", q = U !== y;
      q && (y = U, x = 0), se(y);
      const T = sb(Pe, { camera: b }) || !!y && V.state !== "error" || !!k;
      return T || xe(), (q || !T || !V.playing && V.frame >= W()) && V.frame !== Ma && V.seek(Ma), A(Pe), T;
    },
    dispose() {
      V.dispose(), R.dispose(), e.removeEventListener("loadedmetadata", z), e.removeEventListener("error", _), e.pause(), e.removeAttribute("src"), e.load(), v = "";
    }
  };
}
const Nc = Math.PI / 180, Yr = 180 / Math.PI, h2 = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), m2 = 260;
function Ug(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function Qb(e, t) {
  return t ? Qb(t, e % t) : e;
}
function g2(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = Qb(c, u) || 1;
  return `${Math.round(c / d)}:${Math.round(u / d)}`;
}
function Hs(e, t) {
  const n = Ug(e), r = Ug(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: g2(n, r) };
}
function Mo(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function e1(e) {
  const t = Mo(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? pi(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function bp(e, t, n = h2) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (I, F, W) => {
    const V = I + F, z = Math.max(0, W - 1), _ = V > z && V > 0 ? z / V : 1;
    return [I * _, F * _];
  }, [y, v] = b(d, c, r), [x, N] = b(a, u, o), k = {
    x: y,
    y: x,
    w: Math.max(1, r - y - v),
    h: Math.max(1, o - x - N)
  }, P = qd(k, t);
  return {
    x: k.x + (k.w - P.width) * 0.5,
    y: k.y + (k.h - P.height) * 0.5,
    w: P.width,
    h: P.height,
    safeRect: k
  };
}
function y2(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = bp({ width: n, height: r }, 1), a = Q(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * Nc * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = Gy(d, $y(
    { x: n * 0.5, y: r * 0.5 },
    c,
    u
  )), y = b2(b, Pa(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), v = Jd({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: y.yaw,
    pitchDeg: y.pitch,
    rollDeg: y.roll,
    frameFovDeg: v.hFOV_deg
  };
}
function t1(e) {
  return {
    yaw: $t(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * Yr),
    pitch: Q(Math.asin(Q(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * Yr, -89.9, 89.9)
  };
}
function b2(e, t) {
  const n = t1(e), r = Pa(n.yaw, n.pitch, 0), o = nf(t, e), a = {
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
    roll: Uc(Math.atan2(
      nf(u, r.up),
      nf(u, r.right)
    ) * Yr)
  };
}
function n1(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = bp({ width: n, height: r }, xo(e)), a = wo(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = Gy(e, $y(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = t1(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: Q(2 * Math.atan(n / (2 * a)) * Yr, 1, 179)
  };
}
function v2(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = wo(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: b, halfH: y } = Zd(d, u), v = {
    x: a - b,
    y: c - y,
    w: b * 2,
    h: y * 2
  }, x = v.x <= 0 && v.y <= 0 && v.x + v.w >= r && v.y + v.h >= o, N = r / o, k = Math.tan(Yf * Nc), P = N >= 1 ? k : k * N, I = N >= 1 ? k / N : k;
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
        vFOV_deg: 2 * Math.atan(I) * Yr
      }
    }
  };
}
function Qo(e, t) {
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
function _2(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = wo(n, e);
    return Jd(qd(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Gl(a, t) };
}
function Yg(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Hs(t, n);
  if (!a) return e;
  const c = xo(e) >= 1;
  r && a.ratio >= 1 !== c && (a = Hs(a.height, a.width));
  const u = _2(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function r1(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Mo(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = zy({
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
    return Qo(e, (r) => Yg(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Qo(e, (r) => {
      const a = String(pi(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? Hs(a[1], a[2]) : Hs(xo(r), 1);
      return c ? Yg(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? Qo(e, (o) => {
      const a = Uc(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Qo(e, (r) => {
    const o = jy(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? Qo(e, (r) => {
    const o = Hy(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? Qo(e, (r) => {
    const o = a1(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function i1({
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
function o1(e, t, n = {}) {
  var c, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + Ry(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: Vy(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function a1(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * Nc, d = Math.cos(u), b = Math.sin(u), y = a / n, v = -c / n, x = y * d - v * b, N = y * b + v * d, k = Number(e.pitch_deg || 0) * Nc, P = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: $t(Number(e.yaw_deg || 0) - Math.atan(x) / P * Yr),
    pitch_deg: Q(Number(e.pitch_deg || 0) - Math.atan(N) * Yr, -90, 90)
  };
}
function w2({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return jb({
    readState: e,
    reduce: r1,
    projectModel: e1,
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
}), x2 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, S2 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: x2(t[2])
})), k2 = {
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
}, Xg = Object.fromEntries(
  Object.entries(k2).map(([e, t]) => [e, {
    name: t.name,
    elements: S2(t.body)
  }])
), jt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = dt(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(Xg, r) ? Xg[r] : null;
    });
    return (r, o) => n.value ? (ie(), ce("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: lt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (ie(!0), ce(We, null, _t(n.value.elements, (a, c) => (ie(), ce(We, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (ie(), ce("path", mi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (ie(), ce("circle", mi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (ie(), ce("rect", mi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (ie(), ce("line", mi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (ie(), ce("polyline", mi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (ie(), ce("polygon", mi({
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
    const t = e, n = dt(() => {
      const r = { ...t.attrs };
      return t.tag === "button" && r.type == null && (r.type = t.type), t.label && (r["aria-label"] = t.label), t.tip && (r["data-tip"] = t.tip), t.pressed != null && (r["aria-pressed"] = t.pressed), r;
    });
    return (r, o) => (ie(), vr(Zx(e.tag), mi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: ry(() => [
        De(jt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, M2 = ["aria-expanded", "disabled"], N2 = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, P2 = ["data-aspect", "disabled", "onClick"], A2 = { class: "pano-cutout-aspect-custom" }, C2 = ["disabled"], I2 = ["disabled"], O2 = ["data-custom-width", "data-custom-height", "disabled"], s1 = {
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
    ]), a = /* @__PURE__ */ qt("1"), c = /* @__PURE__ */ qt("1"), u = /* @__PURE__ */ qt(null), d = dt(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = dt(() => {
      const P = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], I = String(n.model.aspectLabel || "");
      return P.length ? P.map((F) => {
        const W = typeof F == "string" ? F : String((F == null ? void 0 : F.value) || ""), V = typeof F == "string" ? F : String((F == null ? void 0 : F.label) || W);
        return {
          ...typeof F == "object" && F ? F : {},
          value: W,
          label: V,
          active: I ? W === I : (F == null ? void 0 : F.active) === !0
        };
      }) : o.map((F) => ({
        ...F,
        active: F.value === I
      }));
    }), y = dt(() => {
      var I;
      const P = String(n.model.aspectLabel || "").trim();
      return P || String(((I = b.value.find((F) => F.active === !0)) == null ? void 0 : I.label) || "Aspect");
    });
    vo(y, (P) => {
      const I = String(P || "").match(/^([0-9.]+):([0-9.]+)$/);
      I && (a.value = I[1], c.value = I[2]);
    }, { immediate: !0 });
    function v(P) {
      r("action", P);
    }
    function x(P) {
      var I;
      n.model.aspectOpen === !0 && ((I = u.value) != null && I.contains(P.target) || v({ type: "close-aspect" }));
    }
    Gc(() => {
      document.addEventListener("pointerdown", x, !0);
    }), Ys(() => {
      document.removeEventListener("pointerdown", x, !0);
    });
    function N(P) {
      const [I, F] = String(P.value || "").split(":");
      v({
        type: "set-aspect",
        width: I,
        height: F,
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
    return (P, I) => (ie(), ce("div", {
      ref_key: "rootElement",
      ref: u,
      class: lt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (ie(), vr(un, {
        key: 0,
        icon: e.model.aspectIcon || nt(ke).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: I[0] || (I[0] = (F) => v({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (ie(), ce("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: I[1] || (I[1] = (F) => v({ type: "toggle-aspect" }))
      }, [
        De(jt, {
          icon: e.model.aspectIcon || nt(ke).aspect
        }, null, 8, ["icon"]),
        X("span", null, Je(y.value), 1),
        De(jt, {
          icon: nt(ke).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, M2)),
      _i(X("div", N2, [
        (ie(!0), ce(We, null, _t(b.value, (F) => (ie(), ce("button", {
          key: F.value,
          class: lt(["pano-btn pano-frame-aspect-choice", { active: F.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": F.value,
          disabled: d.value,
          onClick: (W) => N(F)
        }, Je(F.label), 11, P2))), 128)),
        X("div", A2, [
          _i(X("input", {
            "onUpdate:modelValue": I[2] || (I[2] = (F) => a.value = F),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, C2), [
            [sg, a.value]
          ]),
          I[4] || (I[4] = X("span", { "aria-hidden": "true" }, ":", -1)),
          _i(X("input", {
            "onUpdate:modelValue": I[3] || (I[3] = (F) => c.value = F),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, I2), [
            [sg, c.value]
          ]),
          X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, O2)
        ])
      ], 512), [
        [No, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, E2 = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, F2 = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ qt(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (ie(), ce("div", {
      class: lt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Ot(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Ot(() => {
      }, ["stop"]))
    }, [
      De(un, {
        icon: nt(ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Ot((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", E2, [
        o[3] || (o[3] = X("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (ie(!0), ce(We, null, _t(nt(n), (a) => (ie(), ce("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          X("kbd", null, Je(a[0]), 1),
          X("span", null, Je(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, T2 = {
  class: "pano-view-unavailable",
  role: "status"
}, vp = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (ie(), ce("div", T2, Je(nt(Nb)), 1));
  }
}, D2 = { class: "pano-cutout-node-surface" }, L2 = ["title", "disabled"], R2 = { class: "value" }, V2 = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, $2 = {
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
    return (r, o) => (ie(), ce("div", D2, [
      X("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Ot(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Ot(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          De(jt, {
            icon: nt(ke).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        De(un, {
          icon: e.model.hasShot ? nt(ke).delete : nt(ke).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(s1, {
          model: e.model,
          mode: "node",
          onAction: n
        }, null, 8, ["model"]),
        X("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: o[2] || (o[2] = Ot((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          De(jt, {
            icon: nt(ke).roll
          }, null, 8, ["icon"]),
          X("span", R2, Je(e.model.rollLabel || "0.0°"), 1)
        ], 40, L2),
        De(un, {
          icon: nt(ke).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        De(F2)
      ], 32),
      e.model.hasShot === !1 ? (ie(), ce("div", V2, " Choose a view · + Add Frame ")) : ct("", !0),
      e.model.viewUnavailable ? (ie(), vr(vp, { key: 1 })) : ct("", !0)
    ]));
  }
}, l1 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ qt(null);
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
      var P, I;
      const { active: x, intent: N } = u();
      if (!x) return;
      const k = ((I = (P = v.target) == null ? void 0 : P.files) == null ? void 0 : I[0]) || null;
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
    return t({ open: d }), (v, x) => (ie(), ce("input", {
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
}, z2 = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, j2 = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ qt(!1), n = Object.freeze([
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
      class: lt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Ot(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Ot(() => {
      }, ["stop"]))
    }, [
      De(un, {
        icon: nt(ke).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Ot((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      X("div", z2, [
        o[3] || (o[3] = X("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (ie(!0), ce(We, null, _t(nt(n), (a) => (ie(), ce("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          X("kbd", null, Je(a[0]), 1),
          X("span", null, Je(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, H2 = { class: "pano-stickers-node-surface" }, G2 = ["disabled"], K2 = ["aria-label", "data-tip"], W2 = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, B2 = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, U2 = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ qt(null);
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
    return (c, u) => (ie(), ce("div", H2, [
      X("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = Ot(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = Ot(() => {
        }, ["stop"]))
      }, [
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          De(jt, {
            icon: nt(ke).fullscreen
          }, null, 8, ["icon"]),
          u[10] || (u[10] = X("span", { class: "label" }, "Full Editor", -1))
        ]),
        X("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: o
        }, [
          De(jt, {
            icon: nt(ke).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = X("span", { class: "label" }, "Add Image", -1))
        ], 8, G2),
        De(un, {
          icon: e.model.locked ? nt(ke).lock_closed : nt(ke).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        De(un, {
          icon: nt(ke).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        De(un, {
          icon: nt(ke).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        De(un, {
          icon: e.model.isExternalSelection ? nt(ke).back_initial : nt(ke).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        De(j2)
      ], 32),
      e.model.playable === !0 ? (ie(), ce("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = Ot(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = Ot(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        De(jt, {
          icon: e.model.playing ? nt(ke).pause : nt(ke).play
        }, null, 8, ["icon"])
      ], 40, K2)) : ct("", !0),
      e.model.hasStickers === !1 ? (ie(), ce("div", W2, " Add Image to place a sticker ")) : ct("", !0),
      e.model.dropActive === !0 ? (ie(), ce("div", B2, "Drop image to add")) : ct("", !0),
      De(l1, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (ie(), vr(vp, { key: 3 })) : ct("", !0)
    ]));
  }
}, qg = 24;
function Y2(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ps(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function c1(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function hd(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Ps(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Ps(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : c1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function X2(e, t, { edges: n = !1, resize: r = !0, emptyCursor: o = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const c = e.edgeMidpoints.find((u) => Ps(u, t) <= 169);
    if (c) {
      const u = c.edge === "left" || c.edge === "right";
      return { kind: u ? "scale_x" : "scale_y", cursor: u ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
    }
  }
  const a = r ? e.corners.findIndex((c) => Ps(c, t) <= 121) : -1;
  if (a >= 0) {
    const c = e.corners[a], u = c.x - e.center.x, d = c.y - e.center.y;
    return { kind: "scale", cornerIdx: a, cursor: u * d >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Ps(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : c1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: o };
}
function _p(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function u1(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function os(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: Q(n.x, -r, t.width + r),
    y: Q(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function q2(e) {
  const t = Pa(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Q(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * bt * 0.5),
    tanY: Math.tan(Q(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * bt * 0.5)
  };
}
function so(e, t, n) {
  return Xd(pc(
    pc(e.centerDir, hc(e.right, t)),
    hc(e.up, n)
  ));
}
function wp(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = q2(e), r = os(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    so(n, -n.tanX, n.tanY),
    so(n, n.tanX, n.tanY),
    so(n, n.tanX, -n.tanY),
    so(n, -n.tanX, -n.tanY)
  ].map((x) => os(x, t)), a = Array.from({ length: 4 }, (x, N) => {
    const k = [];
    for (let P = 0; P <= 28; P += 1) {
      const I = P / 28;
      let F, W;
      N === 0 ? (F = -n.tanX + 2 * n.tanX * I, W = n.tanY) : N === 1 ? (F = n.tanX, W = n.tanY - 2 * n.tanY * I) : N === 2 ? (F = n.tanX - 2 * n.tanX * I, W = -n.tanY) : (F = -n.tanX, W = -n.tanY + 2 * n.tanY * I);
      const V = os(so(n, F, W), t);
      V && k.push({ x: V.x, y: V.y });
    }
    return k;
  }), c = os(so(n, 0, n.tanY), t), u = os(
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
      x: c.x + b / v * qg,
      y: c.y + y / v * qg
    },
    visible: !0
  };
}
function Jg(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: wp(c, r) })).filter((c) => c.geometry.visible).sort((c, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = c.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((c) => {
    var u;
    return String(((u = c.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const c = hd(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const u = hd(c.geometry, n);
    if (u.kind !== "none") return { ...c, hit: u };
  }
  return null;
}
function J2(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: $t(Math.atan2(r.x, r.z) * fn),
    pitch_deg: Math.asin(Q(r.y, -1, 1)) * fn
  };
}
function Z2(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Q(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: Q(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function Q2(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * fn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Cl = null;
function xp() {
  return Cl || (Cl = new Promise((e) => {
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
  }), Cl);
}
function hr(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function eP(e, t = 1024) {
  const n = Math.max(1, Math.round(hr(e, 2048))), r = Math.min(n, Math.max(1, Math.round(hr(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function tP(e, t, n) {
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
function nP(e, t, n) {
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
function rP() {
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
    const b = String(a.rasterDataUrl || "").trim(), y = tP(a, c, u);
    if (!b.startsWith("data:") || !y) return null;
    const v = nP(a, c, u), x = String((a == null ? void 0 : a.id) || "").trim() || v, N = t.get(x);
    if ((N == null ? void 0 : N.revision) === v) return { source: N.source, revision: v };
    const k = r(b, d), P = Number(k.naturalWidth || k.width || 0), I = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || P < 1 || I < 1) return null;
    const F = document.createElement("canvas");
    F.width = Math.max(1, Math.round(c)), F.height = Math.max(1, Math.round(u));
    const W = F.getContext("2d");
    return W ? (y.wrapOffsets.forEach((V) => {
      W.save(), W.translate(y.centerX + V, y.centerY), W.rotate(y.rotationRad), W.scale(y.scale, y.scale), W.drawImage(
        k,
        -y.width * 0.5,
        -y.height * 0.5,
        y.width,
        y.height
      ), W.restore();
    }), t.set(x, { revision: v, source: F }), { source: F, revision: v }) : null;
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
function iP(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function oP(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function aP({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
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
    const I = P.get(x);
    if ((I == null ? void 0 : I.entry) === N) {
      I.callback = k;
      return;
    }
    a(I);
    const F = { owner: v, key: x, entry: N, callback: k };
    P.set(x, F), N.listeners.add(F);
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
    const P = String(x || ""), I = String(N || "");
    if (!P || !I) return null;
    let F = n.get(P);
    if (F)
      n.delete(P), n.set(P, F);
    else {
      d(o - 1);
      const V = e || globalThis.Image;
      if (typeof V != "function") return null;
      const z = new V();
      F = { key: P, image: z, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(P, F), z.onload = () => u(F, !0), z.onerror = () => u(F, !1), z.src = I;
    }
    return F.settled || F.image.complete && Number(F.image.naturalWidth || F.image.width || 0) > 0 || c(v, P, F, k), F.image;
  }
  function y(v) {
    const x = r.get(v);
    x && ([...x.values()].forEach(a), r.delete(v), d(o));
  }
  return { get: b, disposeOwner: y };
}
const ds = /* @__PURE__ */ new WeakMap();
function f1(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = ds.get(e);
  r || (r = [], ds.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = ds.get(e);
    if (!c) return;
    const u = c.indexOf(o);
    u >= 0 && c.splice(u, 1), c.length === 0 && ds.delete(e);
  };
}
function bi(e, ...t) {
  const n = ds.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const Jl = Object.freeze({
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
}), d1 = "PanoramaSuite.Editor.ViewControls", sP = {
  id: d1,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Jl).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function lP(e) {
  return Object.hasOwn(Jl, e) ? Jl[e] : Jl.default;
}
function cP(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const c = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (c == null ? void 0 : c.action) ?? null;
}
function uP(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const Pc = "state_json";
function vi(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function fP(e) {
  var c, u;
  const t = vi(e, Pc);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = ub(n, {
    coverage: (c = vi(e, "coverage")) == null ? void 0 : c.value
  }), o = r1(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function Sp(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = vi(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, u, d, b, y, v, x, N, k;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (x = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || x.call(v, !0, !0), (k = (N = t == null ? void 0 : t.canvas) == null ? void 0 : N.setDirty) == null || k.call(N, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function dP(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Zg(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function pP(e) {
  var y, v, x, N, k, P;
  if (!e) return;
  const t = vi(e, "coverage"), n = vi(e, "bg_color"), r = vi(e, Pc), o = vi(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && dP(a) && (Zg(c) || c === ""))) return;
  let b = "360";
  if (Zg(c))
    try {
      b = String(Xn((y = JSON.parse(c)) == null ? void 0 : y.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (v = t.callback) == null || v.call(t, b), n.value = a, (x = n.callback) == null || x.call(n, a), r.value = c, (N = r.callback) == null || N.call(r, c), o && (o.value = u, (k = o.callback) == null || k.call(o, u)), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
}
function Zl(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function md(e, t, n) {
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
async function hP(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function ps(e, t, n) {
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
async function p1(e, t = {}) {
  var r;
  await hP(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function mP(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await p1(e), n ? n.apply(this, r) : this.value;
  };
}
function gP(e) {
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
function yP(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function as(e, {
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
    gP(v), Sp(v, t), Zl(v, Pc);
    const N = vi(v, Pc);
    if (mP(v, N), N && !N.__panoPreviewPatchedCb) {
      N.__panoPreviewPatchedCb = !0;
      const P = N.callback;
      N.callback = (I) => {
        var W;
        const F = P ? P(I) : void 0;
        return (W = v.setDirtyCanvas) == null || W.call(v, !0, !1), F;
      };
    }
    if (n === "PanoramaStickers") {
      v.__panoSceneStateV2 = d, v.__panoStudio = b;
      const P = vi(v, "bg_color");
      !d && P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (k = P.callback) == null || k.call(P, "#00ff00")), md(v, r, () => o(v, "stickers")), u && (a(v, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(v, "stickers")
      }), v.__panoStickersNodeSurface && Zl(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260])), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = x;
      return;
    }
    v.__panoSceneStateV2 = d, md(v, r, () => o(v, "cutout")), d || c(v, {
      buttonText: r,
      onOpen: () => o(v, "cutout")
    }), v.__panoCutoutNodeSurface && Zl(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260]), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = x;
  }
  for (const v of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const x = e.prototype[v];
    e.prototype[v] = function() {
      const N = x ? x.apply(this, arguments) : void 0;
      v === "onNodeCreated" && n === "PanoramaCutout" && !d && fP(this), v === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && pP(this);
      const k = !!this.__panoPreviewAttached;
      return (v === "onNodeCreated" || this.widgets) && y(this), v === "onAdded" && k && bi(this, "attach"), N;
    };
  }
}
function bP(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return yP(this), r;
  };
}
function vP(e, {
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
    Sp(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    md(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && Zl(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function _P({
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
    settings: [sP],
    beforeRegisterNodeDef(d, b) {
      const y = String((b == null ? void 0 : b.name) || "");
      (y === "PanoramaStickers" || y === "Panorama Stickers") && as(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaStickersNode" && as(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), y === "PanoramaStudio" && as(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0,
        studio: !0
      }), (y === "PanoramaCutout" || y === "Panorama Cutout") && as(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), y === "PanoramaCutoutNode" && as(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), mc(y) && bP(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Sp(d, e), mc(b) && vP(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const wP = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Ir(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : wP.test(String(e.name || "")) : !1;
}
function kp(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Ir(n)) : !1;
}
function xP(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, y, v;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (y = d == null ? void 0 : d.stopPropagation) == null || y.call(d), (v = d == null ? void 0 : d.stopImmediatePropagation) == null || v.call(d);
  }, a = (d) => {
    if (kp(d == null ? void 0 : d.dataTransfer)) {
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
    const b = Array.from(((y = d == null ? void 0 : d.dataTransfer) == null ? void 0 : y.files) || []).find((v) => Ir(v));
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
async function hs(e, t = {}) {
  var c, u, d, b;
  if (!Ir(e)) throw new TypeError("A supported image file is required.");
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
const Qg = /* @__PURE__ */ new WeakSet(), e0 = /* @__PURE__ */ new WeakSet();
let t0 = 0;
function gd(e) {
  if (!e || typeof e != "object" || e0.has(e)) return e;
  const t = String(e.type || "preview");
  return t0 += 1, e.type = `${t}:pano-${t0}`, e0.add(e), e;
}
function Ac(e) {
  if (!e || typeof e != "object" || Qg.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, Qg.add(e), e;
}
function h1(e, t) {
  var r, o;
  if (!t || ((o = (r = Ac(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function SP({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Ht } = Rl;
KN((e) => Gi(e.id));
WN(Xt);
const Mp = aP(), { linkedVideoFile: kP } = Lb({ app: Ht, api: Xt });
function yd() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Rl == null ? void 0 : Rl.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const MP = "pano_suite.ui_settings.v1", NP = 120, PP = 2048;
function n0() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(MP)) || "").trim();
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
function AP() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ss(e) {
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
function CP() {
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
function bd(e) {
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
function m1(e) {
  const t = bd(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function IP(e, t, n) {
  m1(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function vd(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Np(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function g1(e) {
  return mc(Np(e));
}
function r0(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function y1(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = vd(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && Ql(e), wA(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = vd(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      Ql(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      Ql(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function OP(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function Ql(e, t = {}) {
  var r, o, a, c, u;
  if (!e) return;
  _d.unregister(e), OP(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const y = String((b == null ? void 0 : b.name) || ""), v = String((b == null ? void 0 : b.type) || ""), x = yd();
      return y === x || v === x || y === "pano_preview" || v === "pano_preview" ? !0 : y === "preview" && v === "pano_preview";
    }).forEach((b) => ZP(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function EP(e, t = "#00ff00") {
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
function FP(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = ya(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Bn(e) {
  var u, d;
  const t = FP(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = ya(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = ya(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? fb(t, { backgroundColor: r, coverage: o, active: hb(e) }) : EP(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function ya(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function TP(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function b1(e, t, n = null) {
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
  return !r && n != null && (r = TP(e == null ? void 0 : e.graph, n)), r;
}
function DP(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function v1(e, t = []) {
  const n = DP(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    Wi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function i0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function Cc(e, t) {
  const n = i0(e), r = i0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function LP(e, t) {
  var n;
  return b1(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function RP(e, t = Wi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = v1(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return JN(e, c, LP);
}
const _d = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Xt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, y, v, x;
        if (!a) return;
        const c = Cc(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...RP(a)].some((N) => Cc(r, N)) || Db(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (_1(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (y = a.setDirtyCanvas) == null || y.call(a, !0, !0), (x = (v = a.graph) == null ? void 0 : v.setDirtyCanvas) == null || x.call(v, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Xt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Xt) != null && e.removeEventListener) || (Xt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Ic(e) {
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
  return typeof ((a = Xt) == null ? void 0 : a.apiURL) == "function" ? Xt.apiURL(o) : o;
}
function VP(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function $P(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function zP(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function jP(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (VP(t)) return [t];
  const { filename: n, subfolder: r } = $P(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Ic({
    filename: n,
    subfolder: r,
    type: a
  }));
  return zP([...o, t]);
}
function HP(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Ic({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Gi(e) {
  const t = Ht == null ? void 0 : Ht.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (Cc(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (Cc(c, o)) return t[c];
  }
  return null;
}
function As(e, t, n = null) {
  const r = n || Gi(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function nr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return nr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Ic({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = nr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ic(e);
}
function Oc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function vf(e) {
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
function Pp(e, t) {
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
function GP(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function KP(e, t) {
  try {
    e.__panoOwnOutputRev = iP(e.__panoOwnOutputRev);
    const n = GP(t);
    let r = "";
    for (const o of n)
      if (r = nr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), Pp(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function ba(e) {
  var t, n;
  (n = (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null ? void 0 : t.destroy) == null || n.call(t), e && (e.__panoOwnOutputVideoCache = null);
}
function WP(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!Sn(e, "background"))
    return ba(e), null;
  const o = Gi(r), a = hp(o, t, nr);
  if (!a)
    return ba(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = Pp(a, c), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b != null && b.video && b.key === d) return b.failed() ? null : b.video;
  ba(e);
  const y = ZN({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return y ? (e.__panoOwnOutputVideoCache = { key: d, ...y }, y.video) : null;
}
function BP(e, t = []) {
  var b, y;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = v1(e, t).map((v) => n.findIndex((x) => String((x == null ? void 0 : x.name) || "") === String(v))).filter((v) => v >= 0), a = n.map((v, x) => ({ input: v, idx: x })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const v of c) {
    const x = n[v], N = e.graph ? e.getInputLink(v) : null;
    if ((N == null ? void 0 : N.origin_id) == null) continue;
    const k = N.origin_id, P = b1(e, v, k);
    if (!P) continue;
    const I = Number(N.origin_slot ?? 0), F = Gi((P == null ? void 0 : P.id) ?? k), W = Array.isArray(F == null ? void 0 : F.images) ? F.images : [];
    if (W.length) {
      const R = [];
      I >= 0 && I < W.length && R.push(W[I]), R.push(...W);
      for (const B of R.filter((se) => !Xl(se))) {
        const se = nr(B);
        if (se)
          return String((x == null ? void 0 : x.name) || ""), { src: `${se}&pano_src=${fd(F)}`, sourceType: "nodeOutputs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    let V = [];
    try {
      V = typeof (Ht == null ? void 0 : Ht.getNodeImageUrls) == "function" ? Ht.getNodeImageUrls(P) || [] : [];
    } catch {
      V = [];
    }
    if (Array.isArray(V) && V.length) {
      const R = [];
      I >= 0 && I < V.length && R.push(V[I]), R.push(...V);
      for (const B of R) {
        const se = nr(B);
        if (se)
          return String((x == null ? void 0 : x.name) || ""), { src: se, sourceType: "appNodeImageUrls", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const z = Array.isArray(P == null ? void 0 : P.imgs) ? P.imgs : [];
    if (z.length) {
      const R = [];
      I >= 0 && I < z.length && R.push(z[I]), R.push(...z);
      for (const B of R) {
        const se = nr(B);
        if (se)
          return String((x == null ? void 0 : x.name) || ""), { src: se, sourceType: "nodeImgs", inputName: String((x == null ? void 0 : x.name) || "") };
      }
    }
    const _ = (b = P == null ? void 0 : P.widgets) == null ? void 0 : b.find((R) => String((R == null ? void 0 : R.name) || "").toLowerCase() === "image");
    if (_) {
      let R = nr(_.value);
      if (R && !R.includes("/") && !R.includes(":") && (P.comfyClass === "LoadImage" || P.type === "LoadImage") && (R = Xt.apiURL(`/view?filename=${encodeURIComponent(R)}&type=input&subfolder=`)), R)
        return String((x == null ? void 0 : x.name) || ""), { src: R, sourceType: "widget", inputName: String((x == null ? void 0 : x.name) || "") };
    }
  }
  const u = Sn(e, "background") ? Gi(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((y = u == null ? void 0 : u.ui) == null ? void 0 : y.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const v of d) {
      const x = nr(v);
      if (x)
        return { src: x, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function UP(e, t = [], n = {}) {
  const r = BP(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = jP(o);
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
    var k, P, I, F;
    if (v += 1, v >= a.length) {
      if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
        try {
          (F = (I = e.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || F.call(I, u);
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
    var k, P, I, F;
    if (v + 1 < a.length) {
      x();
      return;
    }
    if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === y && y.pendingImg === b && (y.pendingSrcRaw = "", y.pendingResolvedSrc = "", y.pendingImg = null, !y.img))
      try {
        (F = (I = e.__panoLinkedInputImageCache) == null ? void 0 : I.delete) == null || F.call(I, u);
      } catch {
      }
    String(y.pendingResolvedSrc || y.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((N == null ? void 0 : N.type) || "error");
  }, x(), c && y.img && (y.img.complete || y.img.naturalWidth || y.img.width) ? y.img : b;
}
function YP(e, t = [], n = null, r = {}) {
  const o = UP(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function _1(e) {
  var t, n;
  if (e) {
    Mp.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ba(e), e.__panoWrappedErpCache = null;
  }
}
function XP(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, ba(e), e.__panoWrappedErpCache = null;
  }
}
function w1(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Il(e, t, n = "") {
  const r = w1(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < NP ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function o0(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, u = r / a, d = Math.min(c, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function qP(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), y = r + (a - d) * 0.5, v = o + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(y, v, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", y + d * 0.5, v + b * 0.5 + 0.5), e.restore();
}
function _f(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function JP(e) {
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
function ZP(e, t) {
  return h1(e, t);
}
function Gs(e, t, n, r = null) {
  var x;
  if (!String(t || "")) return null;
  let a = HP(n);
  if (!a && (r != null && r.external)) {
    if (!Sn(e, "external-sticker")) return null;
    const N = Gi(e == null ? void 0 : e.id), k = ((x = N == null ? void 0 : N.ui) == null ? void 0 : x.pano_sticker_input_images) || (N == null ? void 0 : N.pano_sticker_input_images) || [];
    for (const P of Array.isArray(k) ? k : [k])
      if (a = nr(P), a) break;
  }
  if (!a) return null;
  const c = As(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? Pp(a, d) : a, y = oP(a, u, d);
  return Mp.get(e, y, b, (N, k) => {
    var P, I;
    k && (r != null && r.external && e.__panoOutputFromRun && bi(e, "image-loaded"), (I = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null || I.call(P));
  }) || null;
}
function QP(e, t) {
  var v, x, N, k;
  const n = iA(e, t), r = oA(t), o = Array.isArray((v = t == null ? void 0 : t.painting) == null ? void 0 : v.groups) ? t.painting.groups : [], a = new Map(
    o.filter((P) => P && typeof P == "object").map((P) => [String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim(), Number((P == null ? void 0 : P.z_index) || 0)])
  ), c = n ? r.map((P) => {
    const I = n.getGroupDisplayCanvas(P);
    return I ? {
      id: `paint_group:${P}`,
      source: I,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${P}`,
      zIndex: Number(a.get(P) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((x = t == null ? void 0 : t.painting) == null ? void 0 : x.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (k = (N = e.__panoRasterObjectSurfaceCache) == null ? void 0 : N.retain) == null || k.call(N, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = rP()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var P, I;
    return (I = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null ? void 0 : I.call(P);
  });
  const d = eP(t == null ? void 0 : t.output_preset), b = u.filter((P) => (P == null ? void 0 : P.visible) !== !1 && String((P == null ? void 0 : P.layerKind) || "paint") === "paint").map((P) => String((P == null ? void 0 : P.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const y = u.map((P) => {
    const I = e.__panoRasterObjectSurfaceCache.get(
      P,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return I ? {
      id: `raster:${String((P == null ? void 0 : P.id) || "")}`,
      source: I.source,
      revision: I.revision,
      zIndex: Number((P == null ? void 0 : P.z_index) || 0),
      opacity: 1,
      visible: (P == null ? void 0 : P.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...y];
}
function eA(e, t, n, r) {
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
  const o = nA(e, t, r);
  return o || null;
}
function tA(e, t) {
  var v, x;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (v = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : v.call(o), c = (t == null ? void 0 : t.ds) || ((x = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : x.ds);
  if (!a || !c) return null;
  const u = Number(c.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), y = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(y) ? null : { x: b, y };
}
function nA(e, t, n) {
  var o, a;
  const r = tA(t, n || (Ht == null ? void 0 : Ht.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function rA(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function iA(e, t) {
  var b, y, v, x, N, k, P, I, F, W, V, z;
  const n = (y = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : y.strokes, r = (x = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.mask) == null ? void 0 : x.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = rA(e, t), u = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = Bf(c), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((N = t == null ? void 0 : t.painting) == null ? void 0 : N.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.paint) !== d.paint || ((I = e.__panoPreviewPaintRevision) == null ? void 0 : I.mask) !== d.mask || ((F = e.__panoPreviewPaintRevision) == null ? void 0 : F.groups) !== d.groups || ((W = e.__panoPreviewPaintRevision) == null ? void 0 : W.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((z = t == null ? void 0 : t.painting) == null ? void 0 : z.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function oA(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function aA(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function sA(e, t, n) {
  const r = wp(t, n);
  r.visible && _p(e, r.boundaryEdges, { selected: !1 });
}
function lA(e, t, n) {
  const r = wp(t, n);
  r.visible && (e.save(), _p(e, r.boundaryEdges, { selected: !0 }), u1(e, r, { accent: Y2(t) }), e.restore());
}
function wd(e, t, n) {
  return kb(Sc(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Ec(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Ma;
}
function cA(e) {
  return [Sn(e, "background") ? hp(Gi(e.id), ["pano_input_videos"], nr) : "", kP(e, Wi)];
}
function uA(e) {
  var a;
  if (!Sn(e, "external-sticker")) return null;
  const t = Gi(e.id), n = As(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(nr), meta: n };
  const o = hp(t, ["pano_sticker_input_videos"], nr);
  return o ? { src: o, meta: n } : null;
}
function fA({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function a0(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: qr({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = Gs(e, c.id, pb(c.source), { external: c.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (c.source.kind === "port" && b) {
        const y = b.playback.stickerPicture(b.stickerStill, u), v = $b(b.playback.stickerMedia, u);
        return y ? { media: y, revision: vf(y), source: v } : null;
      }
    } else {
      const b = c.type === "external_image" || c.source_kind === "external_image", y = String(c.asset_id || "") || (b ? String(c.id || "") : "");
      u = Gs(e, y, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: b });
    }
    return Oc(u) ? { media: u, revision: vf(u) } : null;
  }, o = (t.painting_visible === !1 ? [] : QP(e, t)).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: Oc(n) ? { media: n, revision: vf(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Mb(e.__panoSurfaceScene.sceneState, Ec(e), t.stickers, { media: r, paintLayers: o })
  };
}
function dA(e, t, n) {
  var z, _, R, B, se, xe, A;
  const r = String(e.__panoPreviewMode || "stickers");
  w1(e, r);
  const o = Bn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (R = (_ = (z = e.__panoCutoutNodeSurface) == null ? void 0 : z.session) == null ? void 0 : _.refresh) == null || R.call(_)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (xe = (se = (B = e.__panoStickersNodeSurface) == null ? void 0 : B.session) == null ? void 0 : se.refresh) == null || xe.call(se));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== u) && (t.width = c, t.height = u);
  const b = { x: 0, y: 0, w: c, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, u);
  const y = (e.__panoSurfacePlayback ? fA(e.__panoSurfacePlayback) : WP(e, ["pano_input_videos"], () => {
    var L, de;
    return (de = (L = e.__panoDomPreview) == null ? void 0 : L.requestDraw) == null ? void 0 : de.call(L);
  })) || YP(
    e,
    Wi,
    () => {
      var L, de;
      return (de = (L = e.__panoDomPreview) == null ? void 0 : L.requestDraw) == null ? void 0 : de.call(L);
    },
    { preserveReadyWhilePending: !1 }
  ), v = Oc(y);
  let x = null;
  const N = (L, de) => {
    x || (x = a0(e, o, y));
    const Pe = n.render({ width: L.w, height: L.h, camera: de, ...x });
    return Pe && d.drawImage(Pe.canvas, Pe.x, Pe.y, Pe.width, Pe.height, L.x, L.y, L.w, L.h), !!Pe;
  };
  if (r === "cutout") {
    const L = JP(o), de = aA(y), Pe = L ? Q(ki(L).aspect, 0.1, 10) : v ? Q(Number(de.width / de.height), 0.05, 20) : 1, fe = bp(b, Pe);
    e.__panoCutoutNodeFrame = fe;
    let U = "none";
    const q = String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "");
    if (L)
      if (y && !v)
        U = "loading";
      else if (v) {
        const T = v2({ width: c, height: u }, fe, L);
        [
          !T.fallback || N(T.fallback.rect, Ns(T.fallback.shot)),
          N(T.rect, Ns(T.shot)),
          !T.fallback || N(fe, Ns(L))
        ].every(Boolean) || (U = "loading");
      } else
        U = "empty";
    else {
      const T = e.__panoLastCutoutShot;
      T ? (e.__panoPreviewView = n1(T, { width: c, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), v ? N(b, Sc(e.__panoPreviewView, c, u)) || (U = "loading") : y ? U = "loading" : U = "empty";
    }
    v || n.release(), n.failed && U === "loading" && (U = "none"), L && (e.__panoLastCutoutShot = { ...L }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, u), d.rect(fe.x, fe.y, fe.w, fe.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(fe.x + 0.5, fe.y + 0.5, Math.max(0, fe.w - 1), Math.max(0, fe.h - 1)), d.restore()), U === "loading" ? (_f(e, !1), Il(e, !0, q)) : U === "empty" ? (_f(e, !0), Il(e, !1, "")) : (_f(e, !1), Il(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!y || v) && (x = a0(e, o, y), !x.background && !x.layers.length ? (n.release(), k = !0) : k = N(b, Sc(e.__panoPreviewView, c, u)));
  const P = !k && !n.failed;
  Il(e, P, P ? String((y == null ? void 0 : y.currentSrc) || (y == null ? void 0 : y.src) || "") : ""), P && qP(d, b, o0(t, b));
  const I = wd(e, c, u);
  !y && k && pA(d, I, o0(t, b));
  const F = String(((A = o == null ? void 0 : o.active) == null ? void 0 : A.selected_sticker_id) || ""), W = dd(o, Ec(e)), V = k ? W.find((L) => String((L == null ? void 0 : L.id) || "") === F && (L == null ? void 0 : L.visible) !== !1) : null;
  k && W.filter((L) => L !== V && (L == null ? void 0 : L.visible) !== !1 && (L.external || L.source_kind === "external_image")).filter((L) => !Oc(Gs(e, L.id, null, { external: !0 }))).forEach((L) => sA(d, L, I)), V && lA(d, V, I);
}
function s0(e, t, n, r, o = 1) {
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
function pA(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(qn(b, u));
    s0(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(qn(u, b));
    s0(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
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
function xd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function hA(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function dr(e, t) {
  return hA(e, t) ? !1 : (xd(e), !0);
}
function l0() {
  var n;
  const e = (n = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function mA(e) {
  var n;
  if (!e) return;
  const t = (n = Ht == null ? void 0 : Ht.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function gA(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !m1(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function yA(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function c0(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && bA(e, 180, t);
    }
  };
}
function bA(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function ms(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const vA = /* @__PURE__ */ new WeakMap();
function x1(e, t) {
  return Db(vA, e, t) ? !1 : (KP(e, t), _1(e), ms(e), !0);
}
async function _A(e) {
  var n, r;
  const t = await XN(e, Ht, Xt);
  t && (x1(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function wA(e, t = {}) {
  var Bi;
  const n = t.__allowStandalone === !0, r = g1(e);
  if (r && !n) {
    Np(e);
    return;
  }
  r && gA(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: r0(e)
  }, u = "dom", d = c.signature || r0(e);
  if (Number(e.__panoRebindGeneration || 0), vd(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, bd(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (Bi = e.__panoDomPreview) != null && Bi.widget || (e.__panoLegacyPreviewHooked && Ql(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, y = b ? 0 : 56, v = b ? 0 : m2, x = document.createElement("div");
  if (CP(), x.className = "pano-node-preview-dom", x.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && x.classList.add("pano-node-preview--no-preview"), x.setAttribute("data-capture-wheel", "true"), x.tabIndex = 0, x.style.cssText = [
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
    const G = Ac(gd(
      e.addDOMWidget(yd(), "preview", x, c0(e, null))
    ));
    ms(e), e.__panoDomPreview = { widget: G, root: x, requestDraw: () => {
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
  const I = Ly(x), F = document.createElement("div");
  F && (F.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", F.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", x.appendChild(F)), IP(e, 120, 120), ms(e);
  let W = null;
  try {
    yA(e, y, () => {
      var G, ge;
      return (ge = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : ge.call(G);
    }), W = Ac(gd(e.addDOMWidget(
      yd(),
      "preview",
      x,
      c0(
        e,
        () => {
          var G, ge;
          return (ge = (G = e.__panoDomPreview) == null ? void 0 : G.requestDraw) == null ? void 0 : ge.call(G);
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
  }, z = () => {
    V.destroyed || (V.needsDraw = !0, !V.inTick && !V.raf && (V.raf = requestAnimationFrame(Ne)));
  }, _ = Pb(z), R = /* @__PURE__ */ Na(o ? { ...qb(Bn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...e1(Bn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((G) => ({ value: G, label: G }))
  });
  let B = null;
  if (o && e.__panoSceneStateV2) {
    const [G, ge] = [0, 1].map(() => {
      const Te = document.createElement("video");
      return Te.playsInline = !0, Te.preload = "auto", Te.crossOrigin = "anonymous", Te.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", N.appendChild(Te), Te;
    }), ne = document.createElement("canvas");
    ne.__panoFrameIdx = 0;
    const Fe = document.createElement("canvas");
    Fe.__panoFrameIdx = 0;
    const Ue = p2({
      video: G,
      stickerVideo: ge,
      createImage: (Te, et) => {
        const Ft = new Image();
        return Ft.onload = et, Ft.onerror = et, Ft.src = Te, Ft;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Te) => requestAnimationFrame(Te),
        cancelFrame: (Te) => cancelAnimationFrame(Te)
      },
      readState: () => Bn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: z,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var et;
        if (!(G.videoWidth > 0 && G.videoHeight > 0)) return;
        const Te = Math.min(1, PP / G.videoWidth);
        ne.width = Math.round(G.videoWidth * Te), ne.height = Math.round(G.videoHeight * Te), (et = ne.getContext("2d")) == null || et.drawImage(G, 0, 0, ne.width, ne.height), ne.__panoFrameIdx += 1, z();
      },
      onStickerCapture: () => {
        var Te;
        ge.videoWidth > 0 && ge.videoHeight > 0 && (Fe.width = ge.videoWidth, Fe.height = ge.videoHeight, (Te = Fe.getContext("2d")) == null || Te.drawImage(ge, 0, 0), Fe.__panoFrameIdx += 1, z());
      },
      onChange: () => {
        R.playing = Ue.playing, z();
      }
    });
    B = { playback: Ue, video: G, still: ne, stickerVideo: ge, stickerStill: Fe, stickerSource: "" }, e.__panoSurfacePlayback = B;
  }
  const se = () => {
    var Ft;
    const { playback: G, still: ge, stickerStill: ne } = B, Fe = d2(N, !!((Ft = e.flags) != null && Ft.collapsed)), Ue = G.source, Te = Fe ? uA(e) : null, et = G.follow({
      shown: Fe,
      sources: Fe ? cA(e) : [],
      state: Bn(e),
      sticker: Te
    });
    ((Te == null ? void 0 : Te.src) || "") !== B.stickerSource && (B.stickerSource = (Te == null ? void 0 : Te.src) || "", ne.width = 0), G.source !== Ue && (ge.width = 0, ge.__panoFrameIdx = 0), R.playable = et, R.playing = G.playing;
  }, xe = () => B == null ? void 0 : B.playback.pause();
  let A = null;
  const L = (o ? u2 : w2)({
    readState: () => Bn(e),
    publishLiveState: (G) => {
      G ? (A = G, e.__panoLiveStateOverride = G) : (e.__panoLiveStateOverride === A && (e.__panoLiveStateOverride = null), A = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, z();
    },
    commitState: (G) => {
      var Fe, Ue, Te, et;
      const ge = ya(e, "state_json");
      if (!ge) return;
      mb(e, G.active);
      const ne = gb(e, G);
      yb(e, ne, String(ge.value ?? "")) || (ge.value = ne, (Fe = ge.callback) == null || Fe.call(ge, ne), e.__panoStateCache = null, (Ue = e.setDirtyCanvas) == null || Ue.call(e, !0, !0), (et = (Te = e.graph) == null ? void 0 : Te.setDirtyCanvas) == null || et.call(Te, !0, !0));
    },
    onChange: (G) => Object.assign(R, G)
  }), Pe = o ? f1(e, (G = "sync", ge = null) => {
    var Wt;
    if (!o || !e.graph || !L || L.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Lt = Sn(e, "external-sticker"), xt = Bn(e).stickers.find((ar) => ar.source.kind === "port");
      return L.apply({
        type: "sync-port",
        value: Yb(e, {
          pose: Lt ? As(e, "pano_sticker_input_pose", ge) : null,
          image: xt ? Gs(e, xt.id, null, { external: !0 }) : null
        })
      });
    }
    const ne = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Lt) => String((Lt == null ? void 0 : Lt.name) || "") === "sticker_image") : -1, Fe = ne >= 0 ? ((Wt = e.getInputLink(ne)) == null ? void 0 : Wt.id) ?? null : null;
    if (Fe == null)
      return L.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Sn(e, "external-sticker")) return !1;
    const Ue = As(e, "pano_sticker_input_pose", ge), Te = Array.isArray(Ue) ? Ue[0] : Ue, et = String(As(e, "pano_sticker_input_state_hash", ge) ?? ""), Ft = e.__panoPreviewView || { yaw: 0, pitch: 0 }, rn = Bn(e), Tn = (Array.isArray(rn == null ? void 0 : rn.stickers) ? rn.stickers : []).find((Lt) => String((Lt == null ? void 0 : Lt.id) || "") === "sticker_image_1"), Kt = Gs(e, "sticker_image_1", null, { external: !0 }), Oo = Te && typeof Te == "object" ? Te : Tn || { yaw_deg: Ft.yaw, pitch_deg: Ft.pitch, hFOV_deg: 30, rot_deg: 0 };
    return L.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Fe,
        stateHash: et,
        pose: Oo,
        imageWidth: Number((Kt == null ? void 0 : Kt.naturalWidth) || (Kt == null ? void 0 : Kt.width) || 0),
        imageHeight: Number((Kt == null ? void 0 : Kt.naturalHeight) || (Kt == null ? void 0 : Kt.height) || 0)
      }
    });
  }) : () => {
  };
  let fe = 0;
  const U = async (G) => {
    if (!o || !L || !Ir(G)) return !1;
    xe();
    const ge = `asset_${Math.random().toString(16).slice(2, 10)}`, ne = `st_${Math.random().toString(16).slice(2, 10)}`, Fe = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    fe += 1, R.importing = !0;
    const Ue = ps(e, `add:${ge}`, async () => {
      const Te = await hs(G), et = await po(G, {
        fetchApi: (Ft, rn) => Xt.fetchApi(Ft, rn)
      });
      return Oe(), L.apply({
        type: "add-sticker",
        value: {
          stickerId: ne,
          assetId: ge,
          asset: et,
          imageWidth: Te.width,
          imageHeight: Te.height,
          yaw_deg: Number(Fe.yaw || 0),
          pitch_deg: Number(Fe.pitch || 0)
        }
      });
    });
    try {
      return await Ue;
    } catch {
      return !1;
    } finally {
      fe = Math.max(0, fe - 1), R.importing = fe > 0, z();
    }
  };
  let q = null, T = null, E = null, te = !1;
  const re = () => {
    var G;
    return E && (clearTimeout(E), E = null), te ? (te = !1, ((G = L == null ? void 0 : L.commitGesture) == null ? void 0 : G.call(L)) ?? !1) : !1;
  }, Oe = () => {
    var Fe, Ue, Te;
    const G = re(), ge = (q == null ? void 0 : q.pointerId) ?? (T == null ? void 0 : T.pointerId);
    if (q = null, T = null, ge != null) {
      try {
        (Fe = k.hasPointerCapture) != null && Fe.call(k, ge) && ((Ue = k.releasePointerCapture) == null || Ue.call(k, ge));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const ne = ((Te = L == null ? void 0 : L.commitGesture) == null ? void 0 : Te.call(L)) ?? !1;
    return G || ne;
  }, Ee = () => {
    var Fe, Ue, Te;
    const G = re(), ge = q == null ? void 0 : q.pointerId;
    if (q = null, ge != null) {
      try {
        (Fe = k.hasPointerCapture) != null && Fe.call(k, ge) && ((Ue = k.releasePointerCapture) == null || Ue.call(k, ge));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const ne = ((Te = L == null ? void 0 : L.cancelGesture) == null ? void 0 : Te.call(L)) ?? !1;
    return G || ne;
  }, vt = () => Oe();
  L && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(vt));
  let pt = null, $ = !1;
  if (F && L)
    try {
      xp(), pt = Gd(o ? U2 : $2, {
        model: R,
        onAction: (G) => {
          var Fe, Ue;
          if ((G == null ? void 0 : G.type) === "toggle-playback") {
            Oe(), B == null || B.playback.toggle();
            return;
          }
          if (xe(), (G == null ? void 0 : G.type) === "open-editor") {
            Oe(), o || (R.aspectOpen = !1), (Fe = e.__panoOpenEditor) == null || Fe.call(e);
            return;
          }
          if (o) {
            if ((G == null ? void 0 : G.type) === "add-image-file") {
              U(G.file);
              return;
            }
            L.apply(G) && z();
            return;
          }
          if ((G == null ? void 0 : G.type) === "toggle-aspect") {
            R.aspectOpen = !R.aspectOpen;
            return;
          }
          if ((G == null ? void 0 : G.type) === "close-aspect") {
            R.aspectOpen = !1;
            return;
          }
          let ge = G;
          if ((G == null ? void 0 : G.type) === "add-frame") {
            const Te = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            ge = {
              ...G,
              ...y2(Te, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((G == null ? void 0 : G.type) === "delete-frame") {
            const Te = Mo(Bn(e));
            Te && (e.__panoPreviewView = n1(Te, {
              width: k.width,
              height: k.height
            }));
          }
          const ne = ((Ue = e.__panoCutoutNodeFrame) == null ? void 0 : Ue.safeRect) || null;
          R.aspectOpen = !1, L.apply({ ...ge, safeRect: ne }) && z();
        }
      }), pt.mount(F), $ = !0;
    } catch {
      pt = null, $ = !1;
    }
  const mt = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    B && se(), z();
  }) : null;
  mt == null || mt.observe(N);
  const Ne = (G) => {
    var ne, Fe;
    V.raf = 0, V.inTick = !0;
    let ge = !1;
    try {
      ge = wt.stepInertia(G), (V.needsDraw || ge) && (V.needsDraw = !1, B && se(), (ne = e.flags) != null && ne.collapsed || dA(e, k, _), R.viewUnavailable = _.failed);
    } finally {
      V.inTick = !1;
    }
    (ge || V.needsDraw) && !V.raf && (V.raf = requestAnimationFrame(Ne)), AP() && (!e.__panoDebugLastTs || G - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = G, e.__panoPreviewMode, bd(e), ss(x), ss(N), ss(k), ss(x.parentElement), ss((Fe = x.parentElement) == null ? void 0 : Fe.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, wt = Yd({
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
      const G = n0();
      return {
        x: G.invert_view_x ? -1 : 1,
        y: G.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      z();
    }
  }), Et = o ? N : x, gn = (G) => {
    const ge = k.getBoundingClientRect();
    return {
      x: (Number(G.clientX) - ge.left) * (k.width / Math.max(1, ge.width)),
      y: (Number(G.clientY) - ge.top) * (k.height / Math.max(1, ge.height))
    };
  }, ei = (G) => {
    var Fe, Ue;
    if (!o || !a) return;
    const ge = Bn(e), ne = Jg(
      dd(ge, Ec(e)),
      String(((Fe = ge == null ? void 0 : ge.active) == null ? void 0 : Fe.selected_sticker_id) || ""),
      gn(G),
      wd(e, k.width, k.height)
    );
    if (!ne) {
      k.style.cursor = "grab";
      return;
    }
    if (((Ue = ne.item) == null ? void 0 : Ue.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = ne.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (G) => {
    var Ft, rn, Tn, Kt, Oo, Tt, Wt, Lt, xt, ar, ni;
    if (!dr(G, Et) || G.button !== 0) return;
    if (!o) {
      const dn = Mo(Bn(e)), xr = e.__panoCutoutNodeFrame;
      if (!dn) {
        (Ft = x.focus) == null || Ft.call(x, { preventScroll: !0 }), (rn = k.setPointerCapture) == null || rn.call(k, G.pointerId), k.style.cursor = "grabbing", wt.startDrag(G.clientX, G.clientY, G.pointerId);
        return;
      }
      if (dn.locked === !0 || !xr || !L) return;
      const Eo = gn(G);
      let Fo;
      if (G.shiftKey) {
        const bn = i1({
          frame: xr,
          point: Eo,
          startRollDeg: Number(dn.roll_deg ?? dn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!bn) return;
        Fo = { kind: "roll", pointerId: G.pointerId, rollGesture: bn };
      } else {
        const bn = ((Tn = Bn(e)) == null ? void 0 : Tn.ui_settings) || n0();
        Fo = {
          kind: "pan",
          pointerId: G.pointerId,
          startPoint: Eo,
          startShot: { ...dn },
          focalPx: wo(xr, dn),
          invertX: bn.invert_view_x === !0,
          invertY: bn.invert_view_y === !0
        };
      }
      Oe(), (Kt = x.focus) == null || Kt.call(x, { preventScroll: !0 }), (Oo = k.setPointerCapture) == null || Oo.call(k, G.pointerId), k.style.cursor = "grabbing", L.beginGesture(), q = Fo;
      return;
    }
    if (!a) return;
    const ge = gn(G), ne = Bn(e), Fe = String(((Tt = ne == null ? void 0 : ne.active) == null ? void 0 : Tt.selected_sticker_id) || ""), Ue = wd(e, k.width, k.height);
    (Wt = x.focus) == null || Wt.call(x, { preventScroll: !0 });
    const Te = () => Jg(dd(ne, Ec(e)), Fe, ge, Ue);
    let et = Te();
    if (et && (B != null && B.playback.playing) && (xe(), et = Te()), et && L) {
      if (wt.stopMotion(), Oe(), String(((Lt = et.item) == null ? void 0 : Lt.id) || "") !== Fe && L.apply({ type: "select-sticker", id: et.item.id }), ((xt = et.item) == null ? void 0 : xt.locked) === !0) {
        z();
        return;
      }
      const dn = ge, xr = et.geometry.center;
      T = {
        active: !0,
        kind: et.hit.kind,
        pointerId: G.pointerId,
        startPoint: dn,
        startCenter: { ...xr },
        startSticker: { ...et.item },
        startDistance: Math.max(1, Math.hypot(dn.x - xr.x, dn.y - xr.y)),
        startAngle: Math.atan2(dn.y - xr.y, dn.x - xr.x),
        projection: Ue
      }, L.beginGesture(), (ar = k.setPointerCapture) == null || ar.call(k, G.pointerId), k.style.cursor = et.hit.kind === "rotate" ? "grabbing" : et.hit.kind === "move" ? "move" : et.hit.cursor, z();
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
        const ne = gn(G);
        L.updateGesture({
          type: "pan-camera",
          startShot: q.startShot,
          dx: ne.x - q.startPoint.x,
          dy: ne.y - q.startPoint.y,
          focalPx: q.focalPx,
          invertX: q.invertX,
          invertY: q.invertY
        });
        return;
      }
      const ge = o1(q.rollGesture, gn(G), G);
      if (!ge) return;
      q.rollGesture = ge.gesture, L.updateGesture({ type: "set-roll", value: ge.rollDeg });
      return;
    }
    if (!T && !wt.state.drag.active) {
      ei(G);
      return;
    }
    if (T) {
      if (T.pointerId !== G.pointerId || !L) return;
      dr(G, Et);
      const ge = gn(G);
      let ne = T.startSticker;
      if (T.kind === "move")
        ne = J2(
          T.startSticker,
          {
            x: T.startCenter.x + ge.x - T.startPoint.x,
            y: T.startCenter.y + ge.y - T.startPoint.y
          },
          T.projection
        );
      else if (T.kind === "scale") {
        const Fe = Math.hypot(ge.x - T.startCenter.x, ge.y - T.startCenter.y);
        ne = Z2(T.startSticker, T.startDistance, Fe);
      } else if (T.kind === "rotate") {
        const Fe = Math.atan2(ge.y - T.startCenter.y, ge.x - T.startCenter.x);
        ne = Q2(T.startSticker, T.startAngle, Fe, G.shiftKey === !0);
      }
      L.updateGesture({ type: "set-transform", value: ne }), z();
      return;
    }
    !a || !wt.state.drag.active || (dr(G, Et), wt.moveDrag(G.clientX, G.clientY, "pano"));
  });
  const j = () => {
    var ge, ne;
    if (!q && !T) {
      if (!wt.state.drag.active) return;
      wt.endDrag(), k.style.cursor = "grab", z();
      return;
    }
    if (!L) return;
    const G = (q == null ? void 0 : q.pointerId) ?? (T == null ? void 0 : T.pointerId);
    q = null, T = null;
    try {
      (ge = k.hasPointerCapture) != null && ge.call(k, G) && ((ne = k.releasePointerCapture) == null || ne.call(k, G));
    } catch {
    }
    L.cancelGesture(), k.style.cursor = "grab", z();
  }, K = (G, ge = !1) => {
    var ne, Fe, Ue, Te;
    if (!o) {
      if (!q) {
        if (!wt.state.drag.active) return;
        dr(G, Et), (ne = k.releasePointerCapture) == null || ne.call(k, G.pointerId), k.style.cursor = "grab", wt.endDrag(), z();
        return;
      }
      if (q.pointerId !== G.pointerId || !L) return;
      dr(G, Et), q = null, (Fe = k.releasePointerCapture) == null || Fe.call(k, G.pointerId), k.style.cursor = "grab", ge ? L.cancelGesture() : L.commitGesture(), ei(G), z();
      return;
    }
    if (T) {
      if (T.pointerId !== G.pointerId || !L) return;
      dr(G, Et), T = null, (Ue = k.releasePointerCapture) == null || Ue.call(k, G.pointerId), k.style.cursor = "grab", ge ? L.cancelGesture() : L.commitGesture(), z();
      return;
    }
    !a || !wt.state.drag.active || (dr(G, Et), (Te = k.releasePointerCapture) == null || Te.call(k, G.pointerId), k.style.cursor = "grab", wt.endDrag(), z());
  };
  k.addEventListener("pointerup", K), k.addEventListener("pointercancel", (G) => K(G, !0)), k.addEventListener("lostpointercapture", j), k.addEventListener("pointerleave", (G) => {
    !o && q || T || wt.state.drag.active && K(G);
  });
  const ae = (G) => {
    const ge = document.activeElement;
    if (ge !== x && !x.contains(ge)) return;
    if (G.key === "Escape" && (q || T) && L) {
      j(), xd(G);
      return;
    }
    if (!o || G.key !== "Delete" && G.key !== "Backspace" || !L) return;
    const ne = G.target, Fe = String((ne == null ? void 0 : ne.tagName) || "").toUpperCase();
    Fe === "INPUT" || Fe === "TEXTAREA" || ne != null && ne.isContentEditable || R.canDelete === !0 && (xe(), Oe(), L.apply({ type: "delete-selected" }) && z(), xd(G));
  };
  window.addEventListener("keydown", ae, !0);
  const we = SP({
    requestFrame: (G) => requestAnimationFrame(G),
    cancelFrame: (G) => cancelAnimationFrame(G),
    restore: (G) => mA(G)
  }), be = (G) => {
    var ne, Fe, Ue, Te, et, Ft;
    if (!dr(G, Et)) return;
    if (!o) {
      const rn = Mo(Bn(e));
      if (rn && rn.locked !== !0 && L) {
        const Tn = dc(G);
        Tn !== 0 && (te || (Oe(), L.beginGesture(), te = !0), L.updateGesture({
          type: "step-fov",
          direction: Tn
        }) ? (E && clearTimeout(E), E = setTimeout(re, 180), z()) : L.hasGestureChanges() || (L.cancelGesture(), te = !1));
      } else if (!rn) {
        const Tn = l0();
        wt.applyWheelEvent(G) && z(), we.schedule(Tn);
      }
      (ne = G.preventDefault) == null || ne.call(G), (Fe = G.stopPropagation) == null || Fe.call(G), (Ue = G.stopImmediatePropagation) == null || Ue.call(G);
      return;
    }
    if (!a) return;
    const ge = l0();
    wt.applyWheelEvent(G) && z(), (Te = G.preventDefault) == null || Te.call(G), (et = G.stopPropagation) == null || et.call(G), (Ft = G.stopImmediatePropagation) == null || Ft.call(G), we.schedule(ge);
  }, _e = o ? [N, k] : [N];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((G) => {
    _e.forEach((ge) => ge.addEventListener(G, be, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((G) => {
    k.addEventListener(G, (ge) => dr(ge, Et)), N.addEventListener(G, (ge) => dr(ge, Et));
  });
  const Me = ya(e, "state_json");
  let Ae = null, Se = null;
  Me && !Me.__panoPreviewPatchedCb && (Ae = Me.callback, Se = (G) => {
    const ge = Ae ? Ae(G) : void 0;
    return z(), ge;
  }, Me.callback = Se, Me.__panoPreviewPatchedCb = Se);
  const he = ya(e, "bg_color");
  let Ie = null, Ce = null;
  he && !he.__panoPreviewPatchedCb && (Ie = he.callback, Ce = (G) => {
    const ge = Ie ? Ie(G) : void 0;
    return z(), ge;
  }, he.callback = Ce, he.__panoPreviewPatchedCb = Ce);
  const Ve = e.onRemoved, je = e.onResize, rt = e.onExecuted, it = e.onDragOver, ut = e.onDragDrop;
  let ft = null;
  const Dt = () => {
    o && (R.dropActive = !0, ft && clearTimeout(ft), ft = setTimeout(() => {
      ft = null, R.dropActive = !1;
    }, 140));
  }, En = o ? function(G) {
    return (it ? it.apply(this, arguments) : !1) === !0 ? !0 : kp(G == null ? void 0 : G.dataTransfer) ? (Dt(), !0) : !1;
  } : null, Fn = o ? function(G) {
    var Fe;
    if ((ut ? ut.apply(this, arguments) : !1) === !0) return !0;
    const ne = Array.from(((Fe = G == null ? void 0 : G.dataTransfer) == null ? void 0 : Fe.files) || []).find((Ue) => Ir(Ue));
    return ne ? (ft && clearTimeout(ft), ft = null, R.dropActive = !1, U(ne), !0) : !1;
  } : null;
  o && (e.onDragOver = En, e.onDragDrop = Fn);
  const ti = o ? xP(x, {
    onActive: (G) => {
      if (G) {
        Dt();
        return;
      }
      ft && clearTimeout(ft), ft = null, R.dropActive = !1;
    },
    onDrop: (G) => {
      U(G);
    }
  }) : () => {
  }, h = function(G) {
    e.__panoOutputFromRun = !0;
    const ge = x1(e, G);
    bi(e, ge ? "executed" : "sync", G), z();
    const ne = rt ? rt.apply(this, arguments) : void 0;
    return ms(e), ne;
  };
  e.onExecuted = h;
  const Ke = e.onConnectionsChange, nn = function(G, ge) {
    const ne = $g(e, G, ge, pp), Fe = $g(e, G, ge, Wi), Ue = arguments, Te = Ke ? Ke.apply(this, Ue) : void 0, et = () => {
      V.destroyed || (Fe && XP(e), ne && bi(e, "connection-change"), ms(e), z());
    };
    return et(), queueMicrotask(et), Te;
  };
  e.onConnectionsChange = nn;
  const Zt = function() {
    const G = je ? je.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, z(), G;
  };
  e.onResize = Zt;
  const Ni = function() {
    return Io(), _d.unregister(this), Ve ? Ve.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ni;
  const Io = () => {
    var G, ge, ne, Fe, Ue, Te, et, Ft, rn;
    V.destroyed = !0, (G = mt == null ? void 0 : mt.disconnect) == null || G.call(mt), o ? Oe() : Ee(), k.removeEventListener("lostpointercapture", j), ti(), I(), window.removeEventListener("keydown", ae, !0), (ne = (ge = e.__panoStateFlushers) == null ? void 0 : ge.delete) == null || ne.call(ge, vt), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (Fe = L == null ? void 0 : L.destroy) == null || Fe.call(L), (Ue = pt == null ? void 0 : pt.unmount) == null || Ue.call(pt), B && (B.playback.dispose(), B.video.remove(), B.stickerVideo.remove(), e.__panoSurfacePlayback === B && (e.__panoSurfacePlayback = null)), _.dispose(), e.__panoSurfaceScene = null, (et = (Te = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Te.dispose) == null || et.call(Te), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, Pe(), we.dispose(), ft && clearTimeout(ft), ft = null, Mp.disposeOwner(e), ba(e), V.raf && cancelAnimationFrame(V.raf), V.raf = 0, ((Ft = e.__panoCutoutNodeSurface) == null ? void 0 : Ft.session) === L && (e.__panoCutoutNodeSurface = null), ((rn = e.__panoStickersNodeSurface) == null ? void 0 : rn.session) === L && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === Zt && (e.onResize = je), e.onExecuted === h && (e.onExecuted = rt), e.onConnectionsChange === nn && (e.onConnectionsChange = Ke), Se && (Me == null ? void 0 : Me.callback) === Se && (Me.callback = Ae), Se && (Me == null ? void 0 : Me.__panoPreviewPatchedCb) === Se && delete Me.__panoPreviewPatchedCb, Ce && (he == null ? void 0 : he.callback) === Ce && (he.callback = Ie), Ce && (he == null ? void 0 : he.__panoPreviewPatchedCb) === Ce && delete he.__panoPreviewPatchedCb, e.onDragOver === En && (e.onDragOver = it), e.onDragDrop === Fn && (e.onDragDrop = ut), e.onRemoved === Ni && (e.onRemoved = Ve);
  };
  e.__panoDomRestore = Io, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = L && $ && !o ? { session: L, model: R } : null, e.__panoStickersNodeSurface = L && $ && o ? { session: L, model: R } : null, e.__panoDomPreview = {
    widget: W,
    root: x,
    canvas: k,
    requestDraw: z,
    state: V,
    emptyHintEl: P,
    nodeSurface: e.__panoCutoutNodeSurface
  }, _d.register(e), e.graph && bi(e, "attach"), z();
}
function u0(e, t = {}) {
  y1(e).attach({
    ...t,
    mode: "cutout"
  });
}
function f0(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (g1(e) && !n) {
    Np(e);
    return;
  }
  y1(e).attach(t);
}
function xA(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function SA(e, t = 1, n = Dg) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, b = Number(n), y = Number.isFinite(b) && b > 0 ? b : Dg, v = Math.max(u, d), x = v > 0 ? Math.min(1, y / v) : 1;
  return {
    width: Math.max(1, Math.round(u * x)),
    height: Math.max(1, Math.round(d * x))
  };
}
function kA({
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
    var k, P, I;
    if (!c) {
      if (c = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", y), d())
        try {
          const F = (P = t.exitFullscreen) == null ? void 0 : P.call(t);
          (I = F == null ? void 0 : F.catch) == null || I.call(F, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const MA = { class: "pano-preview-node-surface" }, NA = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (ie(), ce("div", MA, [
      De(un, {
        icon: e.model.fullscreen ? nt(ke).fullscreen_close : nt(ke).fullscreen,
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
      e.model.viewUnavailable ? (ie(), vr(vp, { key: 0 })) : ct("", !0)
    ]));
  }
}, Ol = 140, PA = 180, d0 = 40, wf = 10;
function p0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function h0(e, t) {
  const n = p0(e), r = p0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function m0(e) {
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
  return typeof ((a = Xt) == null ? void 0 : a.apiURL) == "function" ? Xt.apiURL(o) : o;
}
function va(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return va(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return m0({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = va(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : m0(e);
}
function S1(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function AA(e) {
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
function Sd(e) {
  var o;
  const t = (o = Or) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (h0(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (h0(a, n)) return t[a];
  return null;
}
function CA(e) {
  var r, o;
  const t = Sd(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const u = va(c);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function IA(e, t = "erp_image") {
  var N, k, P, I, F, W, V;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((z) => String((z == null ? void 0 : z.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((z, _) => String((z == null ? void 0 : z.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(_))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (P = (k = (N = Or) == null ? void 0 : N.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : P.call(k, a), u = Sd(a), d = Sd(e == null ? void 0 : e.id), b = [
    (I = d == null ? void 0 : d.ui) == null ? void 0 : I.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    (F = u == null ? void 0 : u.ui) == null ? void 0 : F.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const z of b)
    if (Array.isArray(z))
      for (const _ of z) {
        const R = va(_);
        if (R) return R;
      }
  let y = [];
  try {
    y = typeof ((W = Or) == null ? void 0 : W.getNodeImageUrls) == "function" ? Or.getNodeImageUrls(c) || [] : [];
  } catch {
    y = [];
  }
  if (Array.isArray(y) && y.length > 0)
    for (const z of y) {
      const _ = va(z);
      if (_) return _;
    }
  if (c) {
    const z = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const _ of z) {
      const R = va(_);
      if (R) return R;
    }
  }
  const v = (V = c == null ? void 0 : c.widgets) == null ? void 0 : V.find((z) => String((z == null ? void 0 : z.name) || "").toLowerCase() === "image"), x = String((v == null ? void 0 : v.value) || "").trim();
  return x ? Xt.apiURL(`/view?filename=${encodeURIComponent(x)}&type=input&subfolder=`) : "";
}
function xf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function g0(e, t, n, r, o, a, c) {
  var b, y, v;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !S1(a) || n <= 1 || r <= 1) {
    xf(t, n, r);
    return;
  }
  if (c.failed) {
    xf(t, n, r);
    return;
  }
  const u = Number(((v = (y = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : y.call(b, (x) => (x == null ? void 0 : x.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: Sc(o, n, r),
    background: { media: a, revision: AA(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : xf(t, n, r);
}
function y0(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class OA {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Pb(() => this.requestDraw()), this.controller = Yd({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: $t(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: Q(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: Q(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${Ol}px`,
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
          return Ol;
        },
        getHeight() {
          return Ol;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = Ac(gd(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(Ol, Number(a.minHeight || 0)),
            minWidth: Math.max(PA, Number(a.minWidth || 0))
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
      return xp(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Na({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = kA({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = Gd(NA, {
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = Ly(n), t.addEventListener("pointerdown", (a) => {
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
      xA(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !S1(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      return y0(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      const a = eA(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !y0(a.x, a.y, c))
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
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - wf * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - d0 - wf);
    return { x: wf, y: d0, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), g0(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? Nb : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = SA(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = CA(this.node);
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
    const n = IA(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), g0(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, u, d, b, y, v, x, N, k, P, I, F;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (v = (y = this.surfaceHost) == null ? void 0 : y.remove) == null || v.call(y), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (x = this.mediaCleanup) == null || x.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (N = this.root) == null ? void 0 : N.remove) == null || k.call(N);
    } catch {
    }
    try {
      h1(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((F = (I = (P = this.node) == null ? void 0 : P.widgets) == null ? void 0 : I.find) == null ? void 0 : F.call(I, (W) => (W == null ? void 0 : W.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function EA(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new OA(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function k1(e, t, n) {
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
function Ap(e) {
  return !!(e != null && e.prototype);
}
function Ks(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function FA(e, t = {}) {
  Ap(e) || EA(e, {
    ...t,
    onOpen: Ks(e, t.onOpen)
  });
}
function TA(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Ap(e)) {
    f0(e, {
      ...r,
      onOpen: Ks(e, t.onOpen)
    });
    return;
  }
  k1(e, "stickers_node_preview", (o) => {
    f0(o, {
      ...r,
      onOpen: Ks(o, t.onOpen)
    });
  });
}
function DA(e, t = {}) {
  if (!Ap(e)) {
    u0(e, {
      ...t,
      onOpen: Ks(e, t.onOpen)
    });
    return;
  }
  k1(e, "cutout_preview", (n) => {
    u0(n, {
      ...t,
      onOpen: Ks(n, t.onOpen)
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
}, ci = "pen";
function b0(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function LA(e = 80, t = null, n = 8) {
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
const RA = 250, VA = 600, $A = 180, zA = 2;
function jA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function gs(e, t, n) {
  return e + (t - e) * n;
}
function HA(e, t, n = 1) {
  const r = Math.max(
    Math.abs(Ud(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), o = Math.hypot(...t.position.map((c, u) => c - e.position[u])) / Math.max(n, 1e-6), a = Math.min(1, r / $A + o / zA);
  return Math.round(gs(RA, VA, a));
}
function GA(e, t, n) {
  const r = jA(Q(n, 0, 1));
  return {
    position: e.position.map((o, a) => gs(o, t.position[a], r)),
    yaw_deg: $t(e.yaw_deg + Ud(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: gs(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: gs(e.hFOV_deg, t.hFOV_deg, r),
    distance: gs(e.distance, t.distance, r)
  };
}
function KA(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(Ud(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function WA(e, t, n, { scale: r = 1, end: o = null } = {}) {
  return KA(e, t) ? null : { from: e, to: t, startTs: n, durationMs: HA(e, t, r), end: o };
}
function BA(e, t) {
  const n = Q((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: GA(e.from, e.to, n), done: !1 };
}
function ec(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function UA(e, t, n) {
  const r = ec(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function ea(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function YA(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function XA({
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
  var V, z;
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
    historyEntries: Array.from({ length: 8 }, (_, R) => ({ index: R, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return y;
  const v = ((V = t.find((_) => o(e.paintColor, _.color))) == null ? void 0 : V.id) || "", x = !v, N = a(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((z = e.customPaintColor) == null ? void 0 : z.a) ?? 1))) * 100), P = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), I = e.brushSizes[P] ?? 10, F = d(), W = Array.from({ length: 8 }, (_, R) => e.customPaintHistory[R] || null);
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
    historyEntries: W.map((_, R) => ({
      index: R,
      color: _ ? { cssColor: r(_, 1) } : null
    })),
    sizeValue: I,
    sizeText: String(I),
    sizeFill: `${Math.max(0, Math.min(100, (I - 1) / 119 * 100))}%`,
    sizeDisabled: F,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function qA({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
  return {
    coverage: { value: n(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
const JA = {
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
function ZA(e) {
  const t = [];
  for (const n of e) {
    const [r, o, a] = JA[n.key] || [], c = t[t.length - 1];
    r && (c != null && c.grouped) && c.label === r ? c.fields.push({ ...n, short: o, drag: a }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: o, drag: a }] });
  }
  return t;
}
function Sf(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function QA({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: o }) {
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
function eC({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const o = !e || t;
  let a = null;
  return r && o && (n ? a = "The camera is hidden" : a = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: o, tip: a };
}
function tC(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const _a = "erp", nC = ["1:1", "4:3", "3:2", "16:9"];
function M1(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...nC.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: _a, label: Number(n) === 180 ? "180°" : "360°", active: e === _a }] : []
  ];
}
function rC({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: r,
  selectedKind: o,
  selectedItems: a,
  params: c,
  notes: u,
  uiSettings: d,
  normalizeCoverageValue: b
}) {
  return {
    coverage: { value: b(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: n,
    copyStateButton: {
      disabled: !r || o === "stroke" || o === "camera" || o === "world" || a.length > 1,
      label: "Copy State"
    },
    params: c,
    rows: ZA(c),
    notes: u,
    paramsDisabled: !r,
    uiSettings: t ? null : d,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function iC({
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
  erpChoice: I = !1,
  coverage: F = 360
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
      const V = x(), z = v(t);
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
        label: z ? "Show" : "Hide",
        tip: z ? "Show input image" : "Hide input image",
        icon: z ? N.eye : N.eye_dashed
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
        choices: M1(d, { erp: I, coverage: F })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: N.rotate_90, disabled: d === _a }
    ], k ? P && W.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete }) : W.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? N.lock_open : N.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: N.delete, disabled: !!u }
    );
  return N1(o.corners, W);
}
const v0 = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function oC({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: o = !1 }) {
  const a = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], c = r ? v0.filter((u) => u.cameraTip) : v0;
  return N1([...e, ...a], [
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
function aC(e, t, n, r, o) {
  const { minX: u, maxX: d, minY: b, maxY: y } = e || {};
  if (![u, d, b, y].every(Number.isFinite)) return null;
  const v = Math.min(Math.max((u + d) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), x = Math.max(14, o - n - 14), N = y + 18, k = b - 18 - n;
  let P;
  return N <= x ? P = Math.max(N, 14) : k >= 14 ? P = Math.min(k, x) : P = Math.min(Math.max(N, 14), x), { left: v, top: P };
}
function N1(e, t) {
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
const P1 = "painting";
function sC(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const lC = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function cC(e, { frame: t, span: n, selection: r, selectedId: o, expanded: a, openRows: c, playing: u, label: d, audio: b = null, fpsLocked: y = !1, camera: v = !1, cameraHideable: x = !1, stickers: N = !0, scene: k = !1, sceneLocked: P = !1 }) {
  const I = (_, R, B, se, xe, A, { keyable: L = !0, hideable: de = !0 } = {}) => {
    const Pe = (fe) => (r == null ? void 0 : r.owner) === _ && r.lane === fe ? r.frames.map((U) => U + A) : [];
    return {
      id: _,
      label: B,
      icon: se,
      clip: xe,
      selected: _ === o,
      hideable: de,
      visible: R.visible,
      keyable: L,
      open: L && c.has(_),
      keyed: SM(R, t - A),
      keys: xM(R).map((fe) => ({ frame: fe.frame + A, full: fe.full })),
      selectedFrames: Pe(null),
      lanes: (L ? Co(R) : []).map((fe) => ({
        key: `${_}:${fe}`,
        lane: fe,
        label: lC[fe],
        frames: R[fe].keyframes.map((U) => U.frame + A),
        selectedFrames: Pe(fe)
      }))
    };
  }, F = N ? e.stickers : [], W = F.filter((_) => _.placement === "sky").sort((_, R) => R.z_index - _.z_index), V = F.filter((_) => _.placement === "world"), z = ({ start: _, in: R, duration: B }) => ({ clip: { start: _, end: B === null ? null : _ + B }, offset: _ - R });
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
    fpsLocked: y || P,
    lengthLocked: P,
    lockTip: P ? "Set by the scene" : "Set by the video input",
    length: P ? n : e.timeline.length,
    rows: [
      ...v ? [I("camera", e.camera, "Camera", ke.camera, null, 0, { hideable: x })] : [],
      ...[...W, ...V].map((_) => {
        const { clip: R, offset: B } = z(_.clip);
        return I(_.id, _, td(_), ke.image, R, B);
      }),
      ...N && (sC(e.painting) || !e.painting_visible) ? [{
        id: P1,
        label: "Paint",
        icon: ke.paintbrush_vertical_tool,
        clip: null,
        selected: !1,
        hideable: !0,
        visible: e.painting_visible,
        keyable: !1,
        open: !1,
        keyed: !1,
        keys: [],
        selectedFrames: [],
        lanes: []
      }] : [],
      ...N && (k || ab(e.scene)) ? [(() => {
        const { clip: _, offset: R } = z(e.scene.clip);
        return I("scene", e.scene, "Scene", ke.box, _, R, { keyable: !1 });
      })()] : []
    ]
  };
}
function uC(e, t, n, r) {
  const o = NM(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const fC = { class: "pano-floating-right" }, dC = {
  key: 0,
  class: "pano-floating-space"
}, pC = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, hC = ["data-settled"], mC = ["data-ready", "data-settled"], gC = ["aria-label", "data-tip"], yC = {
  key: 1,
  class: "pano-camera-preview-label"
}, bC = {
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
    return (t, n) => (ie(), ce(We, null, [
      X("div", fC, [
        e.space ? _i((ie(), ce("div", dC, [
          X("div", pC, [
            (ie(!0), ce(We, null, _t(e.space.modes, (r) => (ie(), vr(un, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          De(un, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [No, e.space.visible]
        ]) : ct("", !0),
        (ie(!0), ce(We, null, _t(e.buttons, (r) => (ie(), vr(un, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      _i(X("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        X("div", {
          class: lt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Mt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = X("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            X("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (ie(), ce("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            De(jt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, gC)) : ct("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (ie(), ce("div", yC, Je(e.preview.label || "Preview unavailable"), 1)) : ct("", !0)
        ], 14, mC)
      ], 8, hC), [
        [No, e.preview.visible]
      ])
    ], 64));
  }
}, vC = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, _C = ["y2", "transform"], wC = ["transform"], xC = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => _i((ie(), ce("div", {
      class: lt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (ie(), ce("svg", vC, [
        a[1] || (a[1] = X("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (ie(!0), ce(We, null, _t(nt(n), (c) => (ie(), ce("line", {
          key: c,
          class: lt(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, _C))), 128)),
        X("g", { transform: r.value }, [...a[0] || (a[0] = [
          X("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, wC),
        a[2] || (a[2] = X("circle", {
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
}, SC = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", {
      class: lt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      De(s1, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      De(un, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      De(xC, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, kC = ["aria-label"], MC = { class: "pano-canvas-confirm-title" }, NC = { class: "pano-canvas-confirm-text" }, PC = { class: "pano-canvas-confirm-actions" }, AC = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, CC = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ qt(null), r = /* @__PURE__ */ qt(null);
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
      var F;
      if (v.defaultPrevented) return;
      if (v.key === "Escape") {
        v.preventDefault(), v.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (v.key !== "Tab") return;
      const x = a(), N = r.value;
      if (!x.length) {
        v.preventDefault(), (F = N == null ? void 0 : N.focus) == null || F.call(N);
        return;
      }
      const k = x[0], P = x[x.length - 1], I = document.activeElement;
      if (v.shiftKey) {
        (I === k || I === N || !(N != null && N.contains(I))) && (v.preventDefault(), P.focus());
        return;
      }
      (I === P || !(N != null && N.contains(I))) && (v.preventDefault(), k.focus());
    }
    function y(v) {
      v.target === n.value && c("confirm-cancel");
    }
    return vo(() => t.model.visible, (v, x) => {
      if (v) {
        o = document.activeElement, jc(() => {
          u();
        });
        return;
      }
      x && d();
    }, { immediate: !0 }), Ys(() => {
      d();
    }), (v, x) => e.model.visible === !0 ? (ie(), ce("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Ot(y, ["self"])
    }, [
      X("div", {
        ref_key: "cardRef",
        ref: r,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        X("div", MC, Je(e.model.title), 1),
        X("div", NC, Je(e.model.text), 1),
        X("div", PC, [
          x[0] || (x[0] = X("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          X("button", AC, Je(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, kC)
    ], 512)) : ct("", !0);
  }
}, IC = ["data-paint-pane"], OC = ["hidden"], EC = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], FC = ["aria-pressed", "disabled"], TC = ["hidden"], DC = { class: "pano-paint-color-pop-head" }, LC = { class: "pano-paint-color-field" }, RC = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, VC = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, $C = { class: "pano-paint-color-field" }, zC = { class: "pano-paint-alpha-wrap" }, jC = ["value"], HC = { "data-paint-alpha-value": "" }, GC = ["hidden"], KC = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, WC = ["data-paint-history-index", "aria-label", "disabled"], BC = ["data-paint-footer"], UC = ["data-paint-group"], YC = ["hidden"], XC = ["value", "disabled"], qC = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, JC = ["hidden"], ZC = {
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
      class: lt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (ie(!0), ce(We, null, _t(e.panes, (a) => {
        var c;
        return ie(), ce("div", {
          key: a.key,
          class: lt(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (ie(), ce("div", {
            key: 0,
            class: lt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (ie(!0), ce(We, null, _t(e.paintSwatches, (u) => (ie(), ce("button", {
              key: u.id,
              class: lt(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: Mt(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, EC))), 128)),
            X("button", {
              class: lt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Mt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, FC),
            X("div", {
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
              X("div", DC, [
                X("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Mt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = X("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              X("div", LC, [
                X("div", RC, [
                  X("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Mt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                X("div", VC, [
                  X("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Mt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              X("label", $C, [
                o[1] || (o[1] = X("span", null, "Opacity", -1)),
                X("div", zC, [
                  X("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, jC),
                  X("span", HC, Je(e.state.alphaText || "100%"), 1)
                ])
              ]),
              X("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                X("div", KC, [
                  (ie(!0), ce(We, null, _t(e.state.historyEntries || [], (u) => (ie(), ce("button", {
                    key: u.index,
                    class: lt(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: Mt(n(u.color))
                  }, null, 14, WC))), 128))
                ])
              ], 8, GC)
            ], 12, TC)
          ], 10, OC)) : ct("", !0),
          X("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            X("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (ie(!0), ce(We, null, _t(a.tools, (u) => {
                var d;
                return ie(), vr(un, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, UC),
            X("div", {
              class: lt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              X("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Mt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, XC),
              X("span", qC, Je(e.state.sizeText || "10"), 1)
            ], 10, YC),
            X("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              De(un, {
                icon: nt(ke).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, JC)
          ], 8, BC)
        ], 10, IC);
      }), 128))
    ], 2));
  }
}, QC = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ qt(null), r = /* @__PURE__ */ qt(null), o = /* @__PURE__ */ qt(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, u) => (ie(), ce(We, null, [
      X("div", {
        ref_key: "cursorRef",
        ref: n,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      X("div", {
        ref_key: "sizePreviewRef",
        ref: r,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        X("div", {
          ref_key: "sizeSampleRef",
          ref: o,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, eI = ["aria-label"], tI = ["data-tip", "aria-pressed"], nI = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = dt(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, o) => (ie(), ce("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: Mt({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (ie(!0), ce(We, null, _t(e.buttons, (a) => (ie(), ce("button", mi({
        key: a.key,
        class: ["pano-segments-item", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), Je(a.label), 17, tI))), 128))
    ], 12, eI));
  }
}, rI = {
  key: 0,
  class: "pano-cutout-menu"
}, iI = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, oI = ["data-aspect"], aI = ["data-action", "aria-label", "data-tip", "disabled"], sI = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Mt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (ie(!0), ce(We, null, _t(e.model.items || [], (r) => (ie(), ce(We, {
        key: r.key
      }, [
        r.kind === "aspect" ? (ie(), ce("div", rI, [
          X("button", iI, [
            De(jt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          X("div", {
            class: lt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (ie(!0), ce(We, null, _t(r.choices || [], (o) => (ie(), ce("button", {
              key: o.value,
              class: lt(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, Je(o.label), 11, oI))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (ie(), vr(nI, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (ie(), ce("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          De(jt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, aI))
      ], 64))), 128))
    ], 4));
  }
}, lI = {
  key: 0,
  class: "pano-easing"
}, cI = { class: "pano-section-title" }, uI = { class: "pano-easing-range" }, fI = { class: "pano-easing-modes" }, dI = ["aria-pressed", "onClick"], pI = ["viewBox"], hI = ["x", "y"], mI = ["x1", "y1", "x2", "y2"], gI = ["d"], yI = ["x1", "y1", "x2", "y2"], bI = ["x1", "y1", "x2", "y2"], vI = ["cx", "cy"], _I = ["cx", "cy"], wI = { class: "pano-easing-note" }, ui = 132, lo = 14, xI = {
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
    ], a = /* @__PURE__ */ qt(null), c = dt(() => {
      var k;
      return Array.isArray((k = n.model) == null ? void 0 : k.easing) ? n.model.easing : null;
    }), u = (k) => lo + k * ui, d = (k) => lo + (1 - k) * ui, b = dt(() => {
      var W;
      if (((W = n.model) == null ? void 0 : W.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [k, P, I, F] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(k)} ${d(P)} ${u(I)} ${d(F)} ${u(1)} ${d(1)}`;
    }), y = dt(() => c.value ? c.value.map((k) => k.toFixed(2)).join(", ") : "");
    function v(k) {
      var P;
      return JSON.stringify(k.easing) === JSON.stringify((P = n.model) == null ? void 0 : P.easing);
    }
    function x(k, P) {
      r("timeline", { type: "easing", easing: k, commit: P });
    }
    function N(k, P) {
      var z;
      if (k.button !== 0 || !c.value) return;
      const I = k.currentTarget;
      (z = I.setPointerCapture) == null || z.call(I, k.pointerId);
      let F = null;
      const W = (_) => {
        const R = a.value.getBoundingClientRect(), B = R.width / (ui + lo * 2), se = ((_.clientX - R.left) / B - lo) / ui, xe = 1 - ((_.clientY - R.top) / B - lo) / ui;
        F = [...F || c.value], F[P] = Math.round(Math.min(1, Math.max(0, se)) * 100) / 100, F[P + 1] = Math.round(Math.min(1, Math.max(0, xe)) * 100) / 100, x(F, !1);
      }, V = () => {
        I.removeEventListener("pointermove", W), I.removeEventListener("pointerup", V), I.removeEventListener("pointercancel", V), F && x(F, !0);
      };
      I.addEventListener("pointermove", W), I.addEventListener("pointerup", V), I.addEventListener("pointercancel", V);
    }
    return (k, P) => e.model ? (ie(), ce("div", lI, [
      X("div", cI, [
        P[2] || (P[2] = X("span", null, "Easing", -1)),
        X("span", uI, Je(e.model.label), 1)
      ]),
      X("div", fI, [
        (ie(), ce(We, null, _t(o, (I) => X("button", {
          key: I.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": v(I) ? "true" : "false",
          onClick: (F) => x(I.easing, !0)
        }, Je(I.label), 9, dI)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (ie(), ce("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${ui + lo * 2} ${ui + lo * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        X("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: ui,
          height: ui
        }, null, 8, hI),
        X("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, mI),
        X("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, gI),
        c.value ? (ie(), ce(We, { key: 0 }, [
          X("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, yI),
          X("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, bI),
          X("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: P[0] || (P[0] = (I) => N(I, 0))
          }, null, 40, vI),
          X("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: P[1] || (P[1] = (I) => N(I, 2))
          }, null, 40, _I)
        ], 64)) : ct("", !0)
      ], 8, pI)) : ct("", !0),
      X("div", wI, [
        e.model.mixed ? (ie(), ce(We, { key: 0 }, [
          us("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (ie(), ce(We, { key: 1 }, [
          us("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (ie(), ce(We, { key: 2 }, [
          us("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (ie(), ce(We, { key: 3 }, [
          us("cubic-bezier(" + Je(y.value) + ")", 1)
        ], 64)) : ct("", !0)
      ])
    ])) : ct("", !0);
  }
}, SI = {
  class: "pano-side",
  "data-side": ""
}, kI = { class: "pano-side-head" }, MI = { class: "pano-side-title" }, NI = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, PI = {
  key: 0,
  class: "pano-side-scroll"
}, AI = { class: "pano-inspector" }, CI = { class: "pano-ui-row pano-coverage-row" }, II = ["data-selected"], OI = ["aria-pressed", "disabled"], EI = ["aria-pressed", "disabled"], FI = {
  key: 0,
  class: "pano-section-title"
}, TI = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, DI = {
  class: "pano-picker",
  "data-picker": "selection"
}, LI = ["disabled"], RI = { class: "pano-picker-label" }, VI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, $I = ["hidden"], zI = ["data-selection-id"], jI = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, HI = {
  key: 2,
  class: "pano-state-actions"
}, GI = ["disabled"], KI = ["data-key"], WI = { class: "pano-field-group-values" }, BI = ["title", "onPointerdown"], UI = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], YI = ["data-key"], XI = ["min", "max", "step", "value", "disabled", "data-param-key"], qI = ["min", "max", "step", "value", "disabled", "data-param-key"], JI = ["open"], ZI = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, QI = { class: "pano-ui-settings-body" }, eO = { class: "pano-ui-row" }, tO = ["data-selected"], nO = ["aria-pressed"], rO = ["aria-pressed"], iO = { class: "pano-ui-row" }, oO = ["data-selected"], aO = ["aria-pressed"], sO = ["aria-pressed"], lO = {
  key: 1,
  class: "pano-side-footer"
}, cO = ["data-action"], uO = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = dt(() => {
      const b = n.model;
      return !b || typeof b != "object" ? !1 : Object.keys(b).length > 0 && !!b.coverage;
    });
    function a(b) {
      return { "--v": `${Number((b == null ? void 0 : b.fillPct) || 0)}%` };
    }
    function c(b, y) {
      return (y == null ? void 0 : y.paramsDisabled) === !0 || (b == null ? void 0 : b.enabled) === !1;
    }
    const u = {};
    function d(b, y) {
      const v = u[y.key];
      if (b.button !== 0 || !v || c(y, n.model)) return;
      b.preventDefault();
      const x = b.currentTarget, N = b.clientX, k = Number(v.value) || 0;
      let P = !1;
      x.setPointerCapture(b.pointerId);
      const I = (W) => {
        if (!P && Math.abs(W.clientX - N) < 3) return;
        P = !0;
        const V = k + (W.clientX - N) * y.drag * (W.shiftKey ? 0.1 : 1);
        v.value = String(Number(V.toFixed(3))), v.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, F = () => {
        x.removeEventListener("pointermove", I), x.removeEventListener("pointerup", F), x.removeEventListener("pointercancel", F), P ? v.dispatchEvent(new Event("change", { bubbles: !0 })) : v.focus();
      };
      x.addEventListener("pointermove", I), x.addEventListener("pointerup", F), x.addEventListener("pointercancel", F);
    }
    return (b, y) => {
      var v, x, N, k, P;
      return ie(), ce("div", SI, [
        X("div", kI, [
          X("div", MI, [
            X("span", NI, [
              De(jt, {
                icon: nt(ke).globe
              }, null, 8, ["icon"])
            ]),
            X("span", null, Je(e.nodeTitle), 1)
          ]),
          y[1] || (y[1] = X("div", { class: "pano-side-actions" }, null, -1))
        ]),
        y[10] || (y[10] = X("div", { class: "pano-divider" }, null, -1)),
        o.value ? (ie(), ce("div", PI, [
          X("div", AI, [
            y[9] || (y[9] = X("div", { class: "pano-section-title" }, [
              X("span", null, "Scene")
            ], -1)),
            X("div", CI, [
              y[2] || (y[2] = X("label", null, "Coverage", -1)),
              X("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "1" : "0"
              }, [
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 360 ? "true" : "false",
                  disabled: ((N = e.model.coverage) == null ? void 0 : N.disabled) === !0
                }, "360", 8, OI),
                X("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((k = e.model.coverage) == null ? void 0 : k.value) === 180 ? "true" : "false",
                  disabled: ((P = e.model.coverage) == null ? void 0 : P.disabled) === !0
                }, "180", 8, EI)
              ], 8, II)
            ]),
            e.model.transformTitle !== !1 ? (ie(), ce("div", FI, [...y[3] || (y[3] = [
              X("span", null, "Transform", -1)
            ])])) : ct("", !0),
            e.model.selectionPicker ? (ie(), ce("div", TI, [
              X("label", null, Je(e.model.selectionPicker.label), 1),
              X("div", DI, [
                X("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  X("span", RI, [
                    e.model.selectionPicker.currentIcon ? (ie(), ce("span", VI, [
                      De(jt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    X("span", null, Je(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  y[4] || (y[4] = X("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, LI),
                X("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (ie(!0), ce(We, null, _t(e.model.selectionPicker.items || [], (I) => (ie(), ce("button", {
                    key: I.id,
                    type: "button",
                    class: lt(["pano-picker-item", { active: I.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": I.id
                  }, [
                    I.icon ? (ie(), ce("span", jI, [
                      De(jt, {
                        icon: I.icon
                      }, null, 8, ["icon"])
                    ])) : ct("", !0),
                    X("span", null, Je(I.label), 1)
                  ], 10, zI))), 128))
                ], 8, $I)
              ])
            ])) : ct("", !0),
            e.model.copyStateButton ? (ie(), ce("div", HI, [
              X("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                De(jt, {
                  icon: nt(ke).copy
                }, null, 8, ["icon"]),
                X("span", null, Je(e.model.copyStateButton.label), 1)
              ], 8, GI)
            ])) : ct("", !0),
            X("div", {
              class: lt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (ie(!0), ce(We, { key: 0 }, _t(e.model.notes, (I) => (ie(), ce("div", {
                key: I,
                class: "pano-param-note"
              }, Je(I), 1))), 128)) : (ie(!0), ce(We, { key: 1 }, _t(e.model.rows || [], (I) => (ie(), ce(We, {
                key: I.key
              }, [
                I.grouped ? (ie(), ce("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": I.key
                }, [
                  X("label", null, Je(I.label), 1),
                  X("div", WI, [
                    (ie(!0), ce(We, null, _t(I.fields, (F) => (ie(), ce("div", {
                      key: F.key,
                      class: "pano-axis-field"
                    }, [
                      X("span", {
                        class: lt(["pano-axis", { disabled: c(F, e.model) }]),
                        title: F.label,
                        onPointerdown: (W) => d(W, F)
                      }, Je(F.short), 43, BI),
                      X("input", {
                        ref_for: !0,
                        ref: (W) => {
                          u[F.key] = W;
                        },
                        type: "number",
                        min: F.min,
                        max: F.max,
                        step: F.step,
                        value: F.displayValue,
                        disabled: c(F, e.model),
                        "aria-label": `${I.label} ${F.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": F.key
                      }, null, 8, UI)
                    ]))), 128))
                  ])
                ], 8, KI)) : (ie(), ce("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": I.key
                }, [
                  X("label", null, Je(I.label), 1),
                  X("input", {
                    type: "range",
                    min: I.fields[0].min,
                    max: I.fields[0].max,
                    step: I.fields[0].step,
                    value: I.fields[0].value,
                    disabled: c(I.fields[0], e.model),
                    style: Mt(a(I.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": I.fields[0].key
                  }, null, 12, XI),
                  X("input", {
                    type: "number",
                    min: I.fields[0].min,
                    max: I.fields[0].max,
                    step: I.fields[0].step,
                    value: I.fields[0].displayValue,
                    disabled: c(I.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": I.fields[0].key
                  }, null, 8, qI)
                ], 8, YI))
              ], 64))), 128))
            ], 2),
            De(xI, {
              model: e.easing,
              onTimeline: y[0] || (y[0] = (I) => r("timeline", I))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (ie(), ce("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              X("summary", null, [
                y[5] || (y[5] = X("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                X("span", ZI, [
                  De(jt, {
                    icon: nt(ke).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              X("div", QI, [
                X("div", eO, [
                  y[6] || (y[6] = X("label", null, "Drag X", -1)),
                  X("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, nO),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, rO)
                  ], 8, tO)
                ]),
                X("div", iO, [
                  y[7] || (y[7] = X("label", null, "Drag Y", -1)),
                  X("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, aO),
                    X("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, sO)
                  ], 8, oO)
                ]),
                y[8] || (y[8] = X("div", { class: "pano-ui-row" }, [
                  X("span"),
                  X("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, JI)) : ct("", !0)
          ])
        ])) : ct("", !0),
        (e.model.footerButtons || []).length ? (ie(), ce("div", lO, [
          (ie(!0), ce(We, null, _t(e.model.footerButtons, (I) => (ie(), ce("button", {
            key: I.action,
            class: lt(["pano-btn", { "pano-btn-primary": I.primary === !0 }]),
            type: "button",
            "data-action": I.action
          }, Je(I.label), 11, cO))), 128))
        ])) : ct("", !0)
      ]);
    };
  }
}, fO = { class: "pano-timeline-bar" }, dO = ["aria-label", "data-tip"], pO = ["aria-label", "data-tip"], hO = { class: "pano-timeline-time" }, mO = ["data-tip"], gO = { key: 0 }, yO = ["value"], bO = ["data-tip"], vO = { key: 0 }, _O = ["value"], wO = ["aria-expanded"], xO = ["inert"], SO = { class: "pano-timeline-name" }, kO = ["aria-pressed", "aria-label", "data-tip", "onClick"], MO = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, NO = ["disabled", "aria-expanded", "aria-label", "onClick"], PO = ["title", "aria-current", "onClick"], AO = ["data-keyed", "aria-label", "onClick"], CO = ["onPointerdown"], IO = ["onPointerdown"], OO = ["onPointerdown"], EO = ["onPointerdown"], FO = ["aria-label", "data-tip", "onPointerdown"], TO = { key: 0 }, DO = ["onPointerdown"], LO = ["aria-label", "data-tip", "onPointerdown"], RO = { key: 0 }, VO = 10, $O = {
  __name: "PanoTimeline",
  props: { model: { type: Object, default: () => ({}) } },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], a = /* @__PURE__ */ qt(null), c = /* @__PURE__ */ qt(null), u = /* @__PURE__ */ qt(1), d = /* @__PURE__ */ qt(0), b = /* @__PURE__ */ qt(!1);
    let y = null, v = null, x = null;
    Gc(() => {
      y = new ResizeObserver(([U]) => {
        u.value = Math.max(1, U.contentRect.width);
      }), a.value && y.observe(a.value), v = new ResizeObserver(([U]) => {
        d.value = U.contentRect.height;
      }), c.value && v.observe(c.value);
    }), Ys(() => {
      y == null || y.disconnect(), v == null || v.disconnect(), x == null || x();
    });
    const N = dt(() => Math.max(1, Number(n.model.span || 1))), k = dt(() => u.value / N.value), P = (U) => `${U / N.value * 100}%`, I = dt(() => {
      const U = o.find((T) => T * k.value >= 56) || o[o.length - 1], q = [];
      for (let T = 0; T < N.value; T += U) q.push(T);
      return q;
    });
    function F(U) {
      const q = a.value.getBoundingClientRect(), T = Math.floor((U - q.left) / Math.max(1, q.width) * N.value);
      return Math.min(N.value - 1, Math.max(0, T));
    }
    function W(U, q, T) {
      const E = Math.ceil(VO / Math.max(1e-6, k.value)), te = new Map(q.map((re) => [re.frame, re.full]));
      return FM(q.map((re) => re.frame), E).map((re, Oe) => ({
        ...re,
        key: `${U}:${Oe}`,
        partial: re.frames.some((Ee) => !te.get(Ee)),
        selected: re.frames.some((Ee) => T.includes(Ee))
      }));
    }
    function V(U) {
      return W(U.id, U.keys, U.selectedFrames);
    }
    function z(U) {
      return W(U.key, U.frames.map((q) => ({ frame: q, full: !0 })), U.selectedFrames);
    }
    function _(U) {
      const q = U.end === null ? N.value : U.end;
      return { left: P(U.start), width: P(Math.max(0, q - U.start)) };
    }
    function R(U, q) {
      const T = U.clientX, E = Math.max(1e-6, k.value);
      let te = 0;
      q("start", 0, U);
      const re = (Ee) => {
        if (Ee.pointerId !== U.pointerId) return;
        const vt = Math.round((Ee.clientX - T) / E);
        vt !== te && (te = vt, q("move", te, Ee));
      }, Oe = (Ee) => {
        Ee.pointerId === U.pointerId && (x(), q("end", te, Ee));
      };
      x == null || x(), x = () => {
        window.removeEventListener("pointermove", re), window.removeEventListener("pointerup", Oe), window.removeEventListener("pointercancel", Oe), x = null;
      }, window.addEventListener("pointermove", re), window.addEventListener("pointerup", Oe), window.addEventListener("pointercancel", Oe);
    }
    function B(U) {
      U.button === 0 && R(U, (q, T, E) => r("action", { type: "seek", frame: F(E.clientX), phase: q }));
    }
    function se(U, q, T) {
      U.button === 0 && (r("action", { type: "select-row", id: q.id }), R(U, (E, te) => r("action", { type: "clip", id: q.id, mode: T, delta: te, phase: E })));
    }
    function xe(U, q, T, E, te) {
      if (U.button === 0) {
        if (U.shiftKey) {
          r("action", { type: "select-keys", owner: q.id, lane: T, frames: E.frames, additive: !0 });
          return;
        }
        E.frames.every((re) => te.includes(re)) || r("action", { type: "select-keys", owner: q.id, lane: T, frames: E.frames, additive: !1 }), R(U, (re, Oe) => r("action", { type: "move-keys", delta: Oe, phase: re }));
      }
    }
    const A = dt(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function L(U, q, T) {
      r("action", q), await jc(), U.target.value = T();
    }
    function de(U) {
      L(U, { type: "fps", fps: Number(U.target.value) }, () => A.value);
    }
    function Pe(U) {
      const q = U.target.value.trim();
      L(U, { type: "length", length: q ? Number(q) : null }, () => n.model.length ?? "");
    }
    function fe(U, q, T) {
      U.button !== 0 || U.target !== U.currentTarget || r("action", { type: "select-keys", owner: q.id, lane: T, frames: [], additive: !1 });
    }
    return (U, q) => _i((ie(), ce("section", {
      class: lt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      X("div", fO, [
        X("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": e.model.playing ? "Pause (Space)" : "Play (Space)",
          "data-tip": e.model.playing ? "Pause (Space)" : "Play (Space)",
          onClick: q[0] || (q[0] = (T) => r("action", { type: "play" }))
        }, [
          De(jt, {
            icon: e.model.playing ? nt(ke).pause : nt(ke).play
          }, null, 8, ["icon"])
        ], 8, dO),
        e.model.hasAudio ? (ie(), ce("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: q[1] || (q[1] = (T) => r("action", { type: "mute" }))
        }, [
          De(jt, {
            icon: e.model.muted ? nt(ke).volume_muted : nt(ke).volume2
          }, null, 8, ["icon"])
        ], 8, pO)) : ct("", !0),
        X("span", hO, Je(e.model.label), 1),
        X("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (ie(), ce("span", gO, Je(A.value), 1)) : (ie(), ce("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "any",
            value: A.value,
            "aria-label": "Timeline fps",
            onChange: de
          }, null, 40, yO)),
          q[6] || (q[6] = X("span", null, "fps", -1))
        ], 8, mO),
        X("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          q[7] || (q[7] = X("span", null, "Length", -1)),
          e.model.lengthLocked ? (ie(), ce("span", vO, Je(e.model.length), 1)) : (ie(), ce("input", {
            key: 1,
            type: "number",
            min: "1",
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: Pe
          }, null, 40, _O))
        ], 8, bO),
        X("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: q[2] || (q[2] = (T) => r("action", { type: "toggle-expanded" }))
        }, [
          q[8] || (q[8] = X("span", null, "Timeline", -1)),
          De(jt, {
            icon: nt(ke).chevron
          }, null, 8, ["icon"])
        ], 8, wO)
      ]),
      X("div", {
        class: lt(["pano-timeline-body", { open: e.model.expanded, sliding: b.value }]),
        style: Mt({ "--pano-timeline-rows": `${d.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: q[3] || (q[3] = Ot((T) => b.value = !0, ["self"])),
        onTransitionend: q[4] || (q[4] = Ot((T) => b.value = !1, ["self"])),
        onTransitioncancel: q[5] || (q[5] = Ot((T) => b.value = !1, ["self"]))
      }, [
        X("div", {
          ref_key: "gridRef",
          ref: c,
          class: "pano-timeline-grid"
        }, [
          q[9] || (q[9] = X("div", { class: "pano-timeline-corner" }, null, -1)),
          X("div", {
            ref_key: "rulerRef",
            ref: a,
            class: "pano-timeline-ruler",
            onPointerdown: B
          }, [
            (ie(!0), ce(We, null, _t(I.value, (T) => (ie(), ce("span", {
              key: T,
              class: "pano-timeline-tick",
              style: Mt({ left: P(T) })
            }, Je(T), 5))), 128)),
            X("span", {
              class: "pano-timeline-playhead",
              style: Mt({ left: P(e.model.frame + 0.5) })
            }, null, 4)
          ], 544),
          (ie(!0), ce(We, null, _t(e.model.rows || [], (T) => (ie(), ce(We, {
            key: T.id
          }, [
            X("div", {
              class: lt(["pano-timeline-head", { selected: T.selected, hidden: !T.visible }])
            }, [
              X("div", SO, [
                T.hideable ? (ie(), ce("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": T.visible ? "true" : "false",
                  "aria-label": `${T.label} visible`,
                  "data-tip": T.visible ? "Hide" : "Show",
                  onClick: Ot((E) => r("action", { type: "toggle-visible", id: T.id }), ["stop"])
                }, [
                  De(jt, {
                    icon: T.visible ? nt(ke).eye : nt(ke).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, kO)) : (ie(), ce("span", MO)),
                X("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !T.keyable,
                  "aria-expanded": T.open ? "true" : "false",
                  "aria-label": T.open ? `Hide ${T.label} parameters` : `Show ${T.label} parameters`,
                  onClick: Ot((E) => r("action", { type: "toggle-row", id: T.id }), ["stop"])
                }, [
                  De(jt, {
                    icon: nt(ke).chevron
                  }, null, 8, ["icon"])
                ], 8, NO),
                X("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: T.label,
                  "aria-current": T.selected ? "true" : void 0,
                  onClick: (E) => r("action", { type: "select-row", id: T.id })
                }, [
                  De(jt, {
                    icon: T.icon
                  }, null, 8, ["icon"]),
                  X("span", null, Je(T.label), 1)
                ], 8, PO),
                T.keyable ? (ie(), ce("button", {
                  key: 2,
                  class: lt(["pano-timeline-key", { keyed: T.keyed }]),
                  type: "button",
                  "data-keyed": T.keyed ? "true" : "false",
                  "aria-label": T.keyed ? `Every ${T.label} parameter has a keyframe here; update them` : `Add keyframes for every ${T.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Ot((E) => r("action", { type: "key-row", owner: T.id }), ["stop"])
                }, [
                  De(jt, {
                    icon: nt(ke).keyframe
                  }, null, 8, ["icon"])
                ], 10, AO)) : ct("", !0)
              ]),
              T.open ? (ie(!0), ce(We, { key: 0 }, _t(T.lanes, (E) => (ie(), ce("div", {
                key: E.key,
                class: "pano-timeline-lane-head"
              }, Je(E.label), 1))), 128)) : ct("", !0)
            ], 2),
            X("div", {
              class: lt(["pano-timeline-track", { selected: T.selected }])
            }, [
              X("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (E) => fe(E, T, null)
              }, [
                T.clip ? (ie(), ce("div", {
                  key: 0,
                  class: lt(["pano-timeline-clip", { open: T.clip.end === null }]),
                  style: Mt(_(T.clip)),
                  onPointerdown: Ot((E) => se(E, T, "move"), ["stop"])
                }, [
                  X("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Ot((E) => se(E, T, "start"), ["stop"])
                  }, null, 40, OO),
                  X("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Ot((E) => se(E, T, "end"), ["stop"])
                  }, null, 40, EO)
                ], 46, IO)) : ct("", !0),
                (ie(!0), ce(We, null, _t(V(T), (E) => (ie(), ce("button", {
                  key: E.key,
                  type: "button",
                  class: lt(["pano-timeline-pin", { selected: E.selected, cluster: E.frames.length > 1, partial: E.partial }]),
                  style: Mt({ left: P(E.frame + 0.5) }),
                  "aria-label": `${T.label}: ${E.frames.length > 1 ? `${E.frames.length} keyframes` : `keyframe at frame ${E.frames[0]}`}`,
                  "data-tip": E.frames.length > 1 ? `${E.frames.length} keyframes` : `Frame ${E.frames[0]}`,
                  onPointerdown: Ot((te) => xe(te, T, null, E, T.selectedFrames), ["stop"])
                }, [
                  E.frames.length > 1 ? (ie(), ce("span", TO, Je(E.frames.length), 1)) : ct("", !0)
                ], 46, FO))), 128))
              ], 40, CO),
              T.open ? (ie(!0), ce(We, { key: 0 }, _t(T.lanes, (E) => (ie(), ce("div", {
                key: E.key,
                class: "pano-timeline-lane",
                onPointerdown: (te) => fe(te, T, E.lane)
              }, [
                (ie(!0), ce(We, null, _t(z(E), (te) => (ie(), ce("button", {
                  key: te.key,
                  type: "button",
                  class: lt(["pano-timeline-pin", { selected: te.selected, cluster: te.frames.length > 1 }]),
                  style: Mt({ left: P(te.frame + 0.5) }),
                  "aria-label": `${E.label}: ${te.frames.length > 1 ? `${te.frames.length} keyframes` : `keyframe at frame ${te.frames[0]}`}`,
                  "data-tip": te.frames.length > 1 ? `${te.frames.length} keyframes` : `Frame ${te.frames[0]}`,
                  onPointerdown: Ot((re) => xe(re, T, E.lane, te, E.selectedFrames), ["stop"])
                }, [
                  te.frames.length > 1 ? (ie(), ce("span", RO, Je(te.frames.length), 1)) : ct("", !0)
                ], 46, LO))), 128))
              ], 40, DO))), 128)) : ct("", !0),
              X("span", {
                class: "pano-timeline-playhead",
                style: Mt({ left: P(e.model.frame + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, xO)
    ], 2)), [
      [No, e.model.visible]
    ]);
  }
}, zO = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", {
      class: lt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: Mt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, Je(e.model.text || ""), 7));
  }
}, jO = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, HO = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (ie(), ce("div", jO, [
      (ie(!0), ce(We, null, _t(e.buttons, (r) => _i((ie(), vr(un, {
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
}, GO = ["data-video-ready"], KO = { class: "pano-video-transport-shell" }, WO = { class: "pano-video-controls-left" }, BO = { class: "pano-video-filmstrip" }, UO = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, YO = ["src", "onLoad"], XO = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, qO = ["max", "value", "disabled"], JO = { class: "pano-video-controls-right" }, ZO = ["data-has-audio"], QO = { class: "pano-video-volume-pop" }, eE = ["value", "disabled"], tE = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = dt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? "Pause" : "Play";
    }), r = dt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? "Pause video" : "Play video";
    }), o = dt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? ke.pause : ke.play;
    }), a = dt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = dt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = dt(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? ke.loop_off : ke.loop;
    }), d = dt(() => {
      var _, R;
      return ((_ = t.state) == null ? void 0 : _.muted) === !0 || Number(((R = t.state) == null ? void 0 : R.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = dt(() => {
      var _, R, B;
      return ((_ = t.state) == null ? void 0 : _.hasAudio) !== !0 ? ke.volume : ((R = t.state) == null ? void 0 : R.muted) === !0 || Number(((B = t.state) == null ? void 0 : B.volume) ?? 1) <= 0 ? ke.volume_muted : ke.volume2;
    }), y = dt(() => {
      var _;
      return Math.max(0, Math.min(100, Number(((_ = t.state) == null ? void 0 : _.progressPct) || 0)));
    }), v = dt(() => ({ left: `${y.value}%` })), x = dt(() => {
      var se, xe;
      const _ = (se = t.state) == null ? void 0 : se.volumePct, R = Number(((xe = t.state) == null ? void 0 : xe.volume) ?? 1) * 100, B = Number(_ ?? R ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, B))}%`
      };
    }), N = dt(() => {
      var B, se;
      const R = [
        String(((B = t.state) == null ? void 0 : B.currentTimeLabel) || "0:00"),
        String(((se = t.state) == null ? void 0 : se.durationLabel) || "0:00")
      ].reduce((xe, A) => Math.max(xe, A.length), 4);
      return `${Math.max(4, R)}ch`;
    }), k = dt(() => ({ "--pano-video-time-ch": N.value })), P = dt(() => {
      var B, se;
      const _ = Array.isArray((B = t.state) == null ? void 0 : B.thumbnails) ? t.state.thumbnails : [];
      if (_.length) return _;
      const R = Math.max(7, Number(((se = t.state) == null ? void 0 : se.thumbnailCount) || 9));
      return Array.from({ length: R }, (xe, A) => ({
        id: `placeholder-${A}`,
        src: "",
        label: ""
      }));
    }), I = /* @__PURE__ */ qt(/* @__PURE__ */ new Set()), F = (_) => String((_ == null ? void 0 : _.id) || (_ == null ? void 0 : _.src) || (_ == null ? void 0 : _.label) || ""), W = (_) => I.value.has(F(_)), V = (_) => {
      const R = new Set(I.value);
      R.add(F(_)), I.value = R;
    };
    vo(P, (_) => {
      const R = new Set(_.map(F)), B = /* @__PURE__ */ new Set();
      for (const se of I.value)
        R.has(se) && B.add(se);
      I.value = B;
    }, { immediate: !0 });
    const z = dt(() => {
      var _;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((_ = t.state) == null ? void 0 : _.shellMaxWidthPx) || 640))}px`
      };
    });
    return (_, R) => (ie(), ce("div", {
      class: lt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Mt(z.value)
    }, [
      R[1] || (R[1] = X("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      R[2] || (R[2] = X("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X("div", KO, [
        X("div", WO, [
          De(un, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: o.value,
            label: n.value,
            tip: r.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          X("div", {
            class: "pano-video-time pano-video-time-start",
            style: Mt(k.value)
          }, Je(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        X("div", BO, [
          X("div", UO, [
            (ie(!0), ce(We, null, _t(P.value, (B) => (ie(), ce("div", {
              key: F(B),
              class: lt(["pano-video-thumb", {
                "is-placeholder": !B.src,
                "is-loaded": B.src && W(B)
              }])
            }, [
              B.src ? (ie(), ce("img", {
                key: 0,
                src: B.src,
                alt: "",
                draggable: "false",
                onLoad: (se) => V(B)
              }, null, 40, YO)) : (ie(), ce("span", XO))
            ], 2))), 128))
          ]),
          X("div", {
            class: "pano-video-playhead",
            style: Mt(v.value),
            "aria-hidden": "true"
          }, [...R[0] || (R[0] = [
            X("span", { class: "pano-video-playhead-line" }, null, -1),
            X("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          X("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, qO)
        ]),
        X("div", JO, [
          X("div", {
            class: "pano-video-time pano-video-time-end",
            style: Mt(k.value)
          }, Je(e.state.durationLabel || "0:00"), 5),
          De(un, {
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
          X("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            X("div", QO, [
              X("input", {
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
              }, null, 12, eE)
            ]),
            De(un, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, ZO)
        ])
      ])
    ], 14, GO));
  }
}, nE = { class: "pano-floating-top" }, rE = ["data-selected", "data-view-count"], iE = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], oE = { class: "label" }, aE = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return ie(), ce("div", nE, [
        X("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (ie(!0), ce(We, null, _t(e.buttons, (o) => _i((ie(), ce("button", {
            key: o.key,
            class: lt(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            "aria-disabled": o.disabled === !0 ? "true" : null,
            tabindex: o.disabled === !0 ? -1 : null,
            "data-tip": o.tip || null
          }, [
            De(jt, {
              icon: o.icon
            }, null, 8, ["icon"]),
            X("span", oE, Je(o.label), 1)
          ], 10, iE)), [
            [No, o.visible !== !1]
          ])), 128))
        ], 8, rE)
      ]);
    };
  }
};
function A1(e = "stickers") {
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
const sE = ["aria-label"], lE = { class: "pano-stage-column" }, cE = { class: "pano-stage-wrap" }, uE = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, fE = {
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
    const d = /* @__PURE__ */ qt(null), b = /* @__PURE__ */ qt(null), y = /* @__PURE__ */ qt(null);
    function v() {
      var A, L;
      return ((L = (A = y.value) == null ? void 0 : A.getRefs) == null ? void 0 : L.call(A)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function x(A) {
      var L, de;
      return ((de = (L = b.value) == null ? void 0 : L.open) == null ? void 0 : de.call(L, A)) === !0;
    }
    function N(A) {
      o("image-file-selected", A);
    }
    function k(A) {
      o("image-file-cancelled", A);
    }
    t({ getPaintOverlayRefs: v, openImagePicker: x });
    const P = dt(() => r.readOnly === !0), I = dt(() => r.shellPreset || A1(r.type)), F = dt(() => {
      var L, de, Pe;
      const A = String((((L = r.uiState) == null ? void 0 : L.stageStatus) === "failed" ? (de = r.uiState) == null ? void 0 : de.stageStatusDetail : (Pe = r.uiState) == null ? void 0 : Pe.stageWarningDetail) ?? "");
      return A === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : A === "stickers" ? "One or more sticker previews are unavailable." : A === "frame" ? "The editor hit a rendering error. Check the browser console for details." : A === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : A.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), W = dt(() => {
      var L;
      const A = Array.isArray((L = I.value) == null ? void 0 : L.floatingButtons) ? I.value.floatingButtons.slice() : [];
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
    function z() {
      var de;
      const L = V()[0] || d.value;
      (de = L == null ? void 0 : L.focus) == null || de.call(L);
    }
    function _() {
      var A;
      u != null && u.isConnected && ((A = u.focus) == null || A.call(u)), u = null;
    }
    function R(A) {
      var L, de, Pe, fe;
      if (!A.defaultPrevented) {
        if (A.key === "Tab") {
          const U = V();
          if (!U.length) {
            A.preventDefault(), (de = (L = d.value) == null ? void 0 : L.focus) == null || de.call(L);
            return;
          }
          const q = U[0], T = U[U.length - 1], E = document.activeElement;
          if (A.shiftKey) {
            (E === q || E === d.value || !((Pe = d.value) != null && Pe.contains(E))) && (A.preventDefault(), T.focus());
            return;
          }
          (E === T || !((fe = d.value) != null && fe.contains(E))) && (A.preventDefault(), q.focus());
          return;
        }
        A.key === "Escape" && o("close");
      }
    }
    function B() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function se() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function xe(A) {
      document.removeEventListener("keydown", R), A ? (u || (u = document.activeElement), B(), document.addEventListener("keydown", R), jc(() => {
        z();
      })) : (se(), _());
    }
    return Gc(() => {
      xe(r.open);
    }), Ys(() => {
      se(), document.removeEventListener("keydown", R), _();
    }), vo(() => r.open, (A) => {
      xe(A);
    }), (A, L) => e.open ? (ie(), ce("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: L[2] || (L[2] = Ot((de) => o("close"), ["self"]))
    }, [
      X("section", {
        ref_key: "modalRef",
        ref: d,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        X("div", lE, [
          X("div", cE, [
            L[3] || (L[3] = X("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            L[4] || (L[4] = X("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            L[5] || (L[5] = X("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (ie(), ce("div", uE, Je(F.value), 1)) : ct("", !0),
            L[6] || (L[6] = X("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              X("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            De(QC, {
              ref_key: "paintOverlaysRef",
              ref: y
            }, null, 512),
            De(l1, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: N,
              onFileCancelled: k
            }, null, 512),
            P.value ? ct("", !0) : (ie(), ce(We, { key: 1 }, [
              De(HO, {
                buttons: e.uiState.toolButtons || I.value.toolButtons || []
              }, null, 8, ["buttons"]),
              De(SC, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              De(ZC, {
                "paint-swatches": e.paintSwatches,
                panes: I.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            De(tE, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            De(aE, {
              buttons: e.uiState.viewButtons || I.value.viewButtons || []
            }, null, 8, ["buttons"]),
            De(bC, {
              buttons: e.uiState.floatingButtons || W.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            De(sI, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            De(zO, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            De(CC, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          De($O, {
            model: e.uiState.timeline || {},
            onAction: L[0] || (L[0] = (de) => o("timeline", de))
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? ct("", !0) : (ie(), vr(uO, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: L[1] || (L[1] = (de) => o("timeline", de))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, sE)
    ])) : ct("", !0);
  }
}, Cr = "loading", Ws = "ready", mr = "failed";
function C1(e, t = "") {
  return e && (e.__panoLoadState = Cr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function I1(e, t = "") {
  return e && (e.__panoLoadState = Ws, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function O1(e, t = "") {
  return e && (e.__panoLoadState = mr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function kd(e, t) {
  return e ? e.__panoLoadState === mr ? mr : typeof t == "function" && t(e) ? Ws : Cr : Ws;
}
function Md(e) {
  return kd(e) === mr;
}
function dE({ presented: e, background: t = Ws, stickers: n = [] } = {}) {
  if (!e) return { status: Cr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === Cr, a = r.includes(Cr);
  if (o && a) return { status: Cr, detail: "mixed" };
  if (o) return { status: Cr, detail: "background" };
  if (a) return { status: Cr, detail: "stickers" };
  const c = t === mr, u = r.includes(mr);
  return c && u ? { status: mr, detail: "mixed" } : c ? { status: mr, detail: "background" } : u ? { status: mr, detail: "stickers" } : { status: Ws, detail: "" };
}
const pE = "state_json", hE = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), kf = "sticker_image_1", mE = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), _0 = 0.01, gE = "external_image", El = "pano_sticker_input_images", yE = "pano_sticker_input_videos", bE = "pano_sticker_input_frames", vE = "pano_sticker_input_video_meta", _E = !0, tc = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], jr = Math.PI / 180, mo = 180 / Math.PI, Mf = 1, w0 = "rgb(255, 221, 87)", wE = "rgb(228, 228, 231)", xE = "rgb(180, 150, 60)", SE = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, kE = 64, x0 = 40, Nf = 16, ME = 0.45, S0 = 180, NE = 160, Fc = 24, PE = 4, AE = 4, Fl = /* @__PURE__ */ new Map(), k0 = /* @__PURE__ */ new Map(), zi = /* @__PURE__ */ new Map(), CE = 12, zn = Lb({
  app: Or,
  api: Xt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Md,
    markImageFailed: O1,
    markImageLoading: C1,
    markImageReady: I1
  }
});
function Pf(e) {
  if (!Sn(e, "background") || !Sn(e, "external-sticker")) return null;
  const t = zn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) && t[0] > 0 ? t[0] : null;
}
const IE = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function OE(e) {
  if (!Sn(e, "background")) return null;
  const [t] = zn.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = zn.uiValue(e, "pano_timeline_frames") || [], [r] = zn.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: Xn(r) };
}
const EE = zn.assetSource, ls = zn.source, Af = zn.uiImage, FE = zn.invalidateUiImage, Cf = zn.loadPreferredExactLinkedImage;
function If(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function TE(e) {
  return 1 - Math.pow(1 - e, 3);
}
function DE(e, t, n) {
  const r = Q((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function LE(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = zi.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (zi.delete(t), zi.set(t, n), n);
}
function RE(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (zi.delete(n), zi.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); zi.size > CE; ) {
      const o = zi.keys().next().value;
      if (!o) break;
      zi.delete(o);
    }
}
function VE(e) {
  return e * e * e;
}
function Zc(e, t, n) {
  return { x: e, y: t, z: n };
}
function M0(e, t) {
  return Zc(e.x + t.x, e.y + t.y, e.z + t.z);
}
function N0(e, t) {
  return Zc(e.x * t, e.y * t, e.z * t);
}
function Of(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function $E(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Zc(e.x / t, e.y / t, e.z / t);
}
function Tl(e) {
  return {
    yaw: $t(Math.atan2(e.x, e.z) * mo),
    pitch: Q(Math.asin(Q(e.y, -1, 1)) * mo, -90, 90)
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
function ys(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Ef(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return ys(e, t);
  const d = Q((a * r + c * o) / u, 0, 1), b = Number(t.x || 0) + r * d, y = Number(t.y || 0) + o * d, v = Number(e.x || 0) - b, x = Number(e.y || 0) - y;
  return v * v + x * x;
}
function pr(e, t, n) {
  return e + (t - e) * n;
}
function Hr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Q(n, 0, 1)})`;
}
function zE(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Dl = { fillStyle: "", url: "" };
function jE(e, t, n) {
  if (Dl.url && Dl.fillStyle === String(e || ""))
    return Dl.url;
  const r = zE(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Fc}" height="${Fc}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Dl = { fillStyle: String(e || ""), url: r }, r;
}
function nc(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function tr(e) {
  return {
    r: Q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Q(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Nn(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function HE(e) {
  return tc.some((t) => nc(e, t.color));
}
function Ff(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = Q(Number(t), 0, 1), a = Q(Number(n), 0, 1);
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
function Tf(e) {
  const t = Q(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = Q(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = Q(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let u = 0;
  c > 1e-6 && (o === t ? u = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / c + 2) / 6 : u = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: u, s: d, v: o };
}
function ta(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const E1 = "pano_suite.ui_settings.v1", F1 = "pano_suite.node_grid_visibility.v1";
let la = null, Gr = null;
function rc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function GE() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(E1)) || "").trim();
    if (!t) return la ? rc(la) : null;
    const n = JSON.parse(t), r = rc(n);
    return la = r, r;
  } catch {
    return la ? rc(la) : null;
  }
}
function KE(e) {
  var n;
  const t = rc(e);
  la = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(E1, JSON.stringify(t));
  } catch {
  }
  return t;
}
function T1() {
  var e;
  if (Gr && typeof Gr == "object")
    return Gr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(F1)) || "").trim();
    if (!t)
      return Gr = {}, Gr;
    const n = JSON.parse(t);
    return Gr = n && typeof n == "object" ? n : {}, Gr;
  } catch {
    return Gr = {}, Gr;
  }
}
function WE(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = T1()[n];
  return typeof o == "boolean" ? o : !!t;
}
function BE(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = T1();
  r[n] = !!t, Gr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(F1, JSON.stringify(r));
  } catch {
  }
}
function UE(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function P0(e) {
  const { paintCount: t, maskCount: n } = UE(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function na(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Ll(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function YE(e, t) {
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
function XE(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function qE(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function JE(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function ZE(e, t, n = {}) {
  var Mm, Nm;
  await p1(e, { tolerateOperationFailure: !0 }), zn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = YE(e, t);
  await xp();
  const u = Ll(e, "output_preset"), d = Ll(e, "coverage"), b = Ll(e, "bg_color"), y = Ll(e, pE), v = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Cf(
      e,
      i,
      () => le(),
      `background:size:${i.join("|")}`
    );
  }, x = () => {
    const i = v();
    return JE(i);
  }, N = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return qE(s) ? x() || Math.max(1, Math.round(Number(i || 2048))) : XE(s, i);
  }, k = e.__panoSceneStateV2 === !0, P = t === "stickers" && k, I = t === "cutout" && k, F = P && e.__panoStudio === !0, W = I || F, V = t === "cutout" || F, z = I ? OE(e) : null, _ = (k ? fb : ub)(String((y == null ? void 0 : y.value) || ""), {
    outputPreset: N(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: z ? z.coverage : Xn(d == null ? void 0 : d.value),
    sharedUiSettings: GE(),
    active: hb(e),
    fps: k ? Pf(e) : null,
    scene: (z == null ? void 0 : z.state) ?? null,
    camera: I
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0;
  let R = null;
  W ? (R = _.camera ? xg(_.camera, 0) : null, _.shots = R ? [{ ...R, position: [...R.position] }] : [], _.active.selected_shot_id = R && I ? Wl : null) : t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const B = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], s = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, se = B ? yh(B, !1) : { width: 220, height: 132 }, xe = A1(F ? "studio" : t), A = /* @__PURE__ */ Na({
    stageStatus: Cr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (xe.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Mm = xe.spaceButtons) != null && Mm.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: xe.spaceButtons, frame: xe.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (xe.toolButtons || []).map((i) => ({
      ...i,
      disabled: !1,
      ...i.key === "add-world" ? { visible: P } : {},
      ...I && IE.has(i.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(xe.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
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
      customColorCss: Hr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Hr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: se.width,
      height: se.height,
      label: B ? "Loading preview" : "Add Frame to preview"
    }
  }), L = document.createElement("div");
  document.body.appendChild(L);
  const de = ({ intent: i, file: s } = {}) => {
    if (Ir(s)) {
      if (i === "add") {
        Eh(s);
        return;
      }
      if (i === "add-world") {
        Y_(s);
        return;
      }
      i === "replace" && J_(s);
    }
  }, Pe = ({ intent: i } = {}) => {
  }, fe = Gd(fE, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: xe,
    paintSwatches: tc.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Hr(i.color, 1)
    })),
    uiState: A,
    onClose: () => {
      qo();
    },
    onTimeline: (i) => W_(i),
    onImageFileSelected: de,
    onImageFileCancelled: Pe
  });
  let U = null;
  try {
    U = fe.mount(L);
  } catch (i) {
    try {
      fe.unmount();
    } catch {
    }
    throw L.remove(), i;
  }
  const q = L.querySelector(".pano-modal-overlay"), T = L.querySelector(".pano-modal"), E = T == null ? void 0 : T.querySelector("[data-stage-overlay]"), te = T == null ? void 0 : T.querySelector("[data-stage-background]"), re = T == null ? void 0 : T.querySelector(".pano-stage-wrap"), Oe = ((Nm = U == null ? void 0 : U.getPaintOverlayRefs) == null ? void 0 : Nm.call(U)) || {}, Ee = Oe.cursor || null, vt = Oe.sizePreview || null, pt = Oe.sizeSample || null;
  if (!q || !T || !E || !te || !re || !Ee || !vt || !pt)
    throw fe.unmount(), L.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const $ = E.getContext("2d"), mt = T.querySelector("[data-side]"), Ne = T.querySelector("[data-video-element]"), wt = T.querySelector("[data-port-video-element]"), Et = T.querySelector(".pano-floating-right"), gn = T.querySelector(".pano-floating-top"), ei = T.querySelector("[data-tool-rail]"), j = T.querySelector("[data-frame-rail]"), K = T.querySelector("[data-frame-roll-knob]"), ae = T.querySelector("[data-paint-dock]"), we = T.querySelector(".pano-video-transport"), be = T.querySelector("[data-selection-menu]");
  let _e = !1;
  const Me = T.querySelector("[data-tooltip]"), Ae = T.querySelector("[data-camera-preview-host]"), Se = T.querySelector("[data-camera-preview-canvas]"), he = T.querySelector("[data-paint-color-row]"), Ie = T.querySelector("[data-paint-color-pop]"), Ce = T.querySelector("[data-paint-color-sv]"), Ve = T.querySelector("[data-paint-color-sv-cursor]"), je = T.querySelector("[data-paint-hue-strip]"), rt = T.querySelector("[data-paint-hue-handle]");
  let it = 0, ut = 0;
  re == null || re.removeAttribute("data-stage-ready"), re == null || re.setAttribute("data-stage-loading-kind", "boot"), E.style.opacity = "1", te.style.opacity = "0", o && (mt == null || mt.remove(), T.classList.add("pano-modal-readonly"));
  const ft = () => {
    if (!h.customPaintSessionStart) return;
    if (nc(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (HE(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      tr(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !nc(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, Dt = (i = !1) => {
    !Ie || Ie.hidden || (i ? ft() : h.customPaintSessionStart = null, Ie.hidden = !0, A.paintDock.colorPopOpen = !1);
  }, En = () => {
    Ie && (Ie.hidden && (h.customPaintSessionStart = tr(h.customPaintColor)), Ie.hidden = !1, A.paintDock.colorPopOpen = !0);
  };
  T.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || eo(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (T.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), Dt(!0), V && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, He(), le()), (s = A.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (A.frameRail.aspectOpen = !1)));
  });
  const Fn = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, ti = JSON.stringify(_g(_)), h = {
    mode: "pano",
    selectedId: Fn,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Ar,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Xn(_.coverage),
    historyController: LA(80, { entries: [ti], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: ci,
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
    showGrid: WE(e == null ? void 0 : e.id, !0),
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
    paintEngine: Bf(),
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
  }, Ke = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null };
  let nn = null;
  t === "stickers" && (h.selectedId = null, _.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const Zt = /* @__PURE__ */ new Map(), Ni = /* @__PURE__ */ new Map(), Io = /* @__PURE__ */ new Map(), Bi = /* @__PURE__ */ new Map(), G = document.createElement("canvas");
  G.__panoFrameIdx = 0;
  const ge = document.createElement("canvas");
  ge.__panoFrameIdx = 0;
  const ne = {
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
  }, Fe = VN({
    onReady: () => le(),
    onFailed: () => le(),
    onUpdate: () => {
      ne.backgroundDirty = !0, le({ localOnly: !0 });
    }
  });
  let Ue = { key: "", projection: null }, Te = { key: null, sceneState: null }, et = null, Ft = null, rn = null, Tn = null, Kt = null;
  const Oo = Number.parseFloat(
    getComputedStyle(T).getPropertyValue("--pano-float-radius")
  ) || 10, Tt = (i) => {
    const s = String(i || "default");
    E.style.cursor !== s && (E.style.cursor = s);
  }, Wt = {
    timer: 0,
    target: null
  }, Lt = {
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
  }, ar = 9, ni = [];
  let dn = 0;
  const xr = () => {
    var O, M;
    const i = (O = re == null ? void 0 : re.getBoundingClientRect) == null ? void 0 : O.call(re), s = (M = Et == null ? void 0 : Et.getBoundingClientRect) == null ? void 0 : M.call(Et), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, g = f > 0 ? f + 14 + 12 : 72, w = Math.max(280, Math.floor(l - g * 2)), S = h.fullscreen ? Math.min(1200, w) : w;
    A.videoTransport.shellMaxWidthPx = S;
  }, Eo = () => {
    dn || (dn = window.requestAnimationFrame(() => {
      dn = 0, xr();
    }));
  }, Fo = (i) => {
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
  }, bn = typeof ResizeObserver < "u" ? new ResizeObserver(() => Eo()) : null;
  bn == null || bn.observe(re), Et && (bn == null || bn.observe(Et)), ni.push(() => {
    var i;
    dn && (window.cancelAnimationFrame(dn), dn = 0), (i = bn == null ? void 0 : bn.disconnect) == null || i.call(bn);
  }), Eo();
  const qs = () => {
    xt.thumbnailJobId += 1, xt.thumbnailSrc = "", A.videoTransport.thumbnails = [], A.videoTransport.thumbnailCount = ar;
  }, D1 = async (i, s, l) => {
    const f = String(i || "").trim();
    if (!f) {
      qs();
      return;
    }
    const p = LE(f);
    if (p) {
      xt.thumbnailSrc = f, A.videoTransport.thumbnails = p.thumbnails, A.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++xt.thumbnailJobId;
    xt.thumbnailSrc = f, A.videoTransport.thumbnails = [], A.videoTransport.thumbnailCount = ar;
    const g = document.createElement("video");
    g.preload = "auto", g.muted = !0, g.playsInline = !0, g.crossOrigin = "anonymous";
    const w = await new Promise((oe) => {
      let pe = !1;
      const ee = (me) => {
        pe || (pe = !0, oe(me));
      };
      g.addEventListener("loadedmetadata", () => ee(!0), { once: !0 }), g.addEventListener("canplay", () => ee(!0), { once: !0 }), g.addEventListener("error", () => ee(!1), { once: !0 }), g.src = f, g.load();
    });
    if (xt.thumbnailJobId !== m) return;
    const S = Number(g.videoWidth || 0), O = Number(g.videoHeight || 0);
    if (!w || S < 1 || O < 1) {
      xt.thumbnailFailedSrcs.add(f);
      return;
    }
    const M = Math.max(0, Number(g.duration || s || 0)), C = document.createElement("canvas"), D = 46, Y = Math.max(72, Math.round(S / O * D));
    C.width = Y, C.height = D;
    const H = C.getContext("2d");
    if (!H) return;
    const J = [], Z = (oe) => new Promise((pe) => {
      let ee = !1;
      const me = () => {
        ee || (ee = !0, pe());
      };
      g.addEventListener("seeked", me, { once: !0 }), g.addEventListener("error", me, { once: !0 });
      try {
        g.currentTime = oe;
      } catch {
        me();
      }
    });
    for (let oe = 0; oe < ar; oe += 1) {
      if (xt.thumbnailJobId !== m) return;
      const pe = oe / (ar - 1), ee = M > 0 ? Math.max(0, Math.min(M - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), M * pe)) : 0;
      if (await Z(ee), xt.thumbnailJobId !== m) return;
      H.clearRect(0, 0, Y, D), H.drawImage(g, 0, 0, Y, D), J.push({
        id: `thumb-${oe}`,
        src: C.toDataURL("image/jpeg", 0.72),
        time: ee,
        label: fu(ee)
      });
    }
    xt.thumbnailJobId === m && (A.videoTransport.thumbnails = J, A.videoTransport.thumbnailCount = J.length || ar, RE(f, {
      thumbnails: J,
      thumbnailCount: J.length || ar,
      duration: M,
      fps: l
    }));
  };
  ni.push(() => {
    qs();
  });
  const on = Jb({
    video: Ne instanceof HTMLVideoElement ? Ne : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => requestAnimationFrame(i),
      cancelFrame: (i) => cancelAnimationFrame(i)
    },
    fps: tl,
    span: () => {
      if (k) return dl();
      const i = Math.round(Number(A.videoTransport.duration || 0) * tl());
      return Ne.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => k,
    onFrame: (i) => {
      k ? z_(i) : Ci(), le({ cause: "frame_view", localOnly: !0 });
    },
    onCapture: () => {
      av() && (ne.backgroundDirty = !0);
    },
    onChange: () => {
      Ci(), si(), le({ cause: "frame_view", localOnly: !0 });
    }
  });
  ni.push(() => on.dispose());
  const To = k && wt instanceof HTMLVideoElement ? Zb({
    video: wt,
    onCapture: () => {
      var l;
      const i = Number(wt.videoWidth || 0), s = Number(wt.videoHeight || 0);
      i < 1 || s < 1 || (ge.width = i, ge.height = s, (l = ge.getContext("2d")) == null || l.drawImage(wt, 0, 0), ge.__panoFrameIdx += 1, le({ cause: "frame_view", localOnly: !0 }));
    },
    onChange: () => le({ cause: "frame_view", localOnly: !0 })
  }) : null;
  To && ni.push(() => To.dispose());
  const L1 = k ? zb({
    createImage: (i, s) => {
      const l = new Image();
      return l.onload = s, l.onerror = s, l.src = i, l;
    },
    onLoad: () => le({ cause: "frame_view", localOnly: !0 })
  }) : null;
  if (Ne instanceof HTMLVideoElement) {
    const i = () => {
      Ii(), le({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      Ci({
        hasAudio: A.videoTransport.hasAudio,
        muted: Ne.muted,
        volume: Number(Ne.volume ?? A.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const f = Ne.dataset.panoSrc;
      f && (xt.failedSrcs.add(f), Ii(), le());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      Ne.addEventListener(f, p), ni.push(() => Ne.removeEventListener(f, p));
  }
  function R1() {
    A.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : l ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function Qc(i) {
    return kp(i == null ? void 0 : i.dataTransfer);
  }
  function Ui(i) {
    const s = !!i;
    Lt.active !== s && (Lt.active = s, re.classList.toggle("drop-active", s));
  }
  function Yi(i, s = null) {
    const l = wn();
    h.viewTransition = WA(l, i, performance.now(), { scale: Rr(), end: s }), !h.viewTransition && s && Cp(s), ln.state.inertia.active = !1, ln.state.inertia.vx = 0, ln.state.inertia.vy = 0, Tr(), le({ localOnly: !0 });
  }
  function Cp(i) {
    Va(nd({ ...yu(), moved: i.moved }, i.mode, zo())), ne.backgroundDirty = !0;
  }
  function Ca() {
    h.viewTransition && (h.viewTransition = null, Tr());
  }
  function Ip(i, s) {
    Yi({ ...wn(), yaw_deg: i, pitch_deg: s });
  }
  mv();
  function ri() {
    return t === "stickers" ? Ia() : _.shots;
  }
  function Ia() {
    return P ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function Zn(i) {
    return P && St(i);
  }
  function eu(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function an(i) {
    return Zn(i) ? sp(i, h.frame) : i;
  }
  function Sr(i, s) {
    Zn(i) ? db(i, h.frame, s) : Object.assign(i, s);
  }
  function kn() {
    const i = _.painting || (_.painting = ma(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function V1(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = _.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], f = /* @__PURE__ */ new Set();
    for (const g of s) {
      const w = String((g == null ? void 0 : g.actionGroupId) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }
    return l;
  }
  function $1() {
    return V1("paint");
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
  function tu() {
    var s;
    let i = -1;
    for (const l of Ia())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of kn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = _.painting) == null ? void 0 : s.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function Op(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const f = kn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? tu() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function z1(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: Q(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: Q(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: Q(l + p, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: Q(l + p, 0, 1)
      }
    ];
  }
  function j1() {
    const i = new Set($1()), l = kn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || l.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: tu(),
        locked: !1,
        frame: null
      });
    }), l.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), _.painting.groups = l, l;
  }
  function H1(i, s, l) {
    var J;
    const f = (Z) => (Number(Z || 0) % 1 + 1) % 1, p = [];
    for (const Z of l) {
      const oe = Z == null ? void 0 : Z.geometry, pe = (oe == null ? void 0 : oe.geometryKind) === "lasso_fill" ? oe == null ? void 0 : oe.points : (oe == null ? void 0 : oe.processedPoints) || (oe == null ? void 0 : oe.rawPoints) || (oe == null ? void 0 : oe.points) || [];
      Array.isArray(pe) && p.push(...pe);
    }
    if (!p.length) return null;
    const m = f(((J = p[0]) == null ? void 0 : J.u) || 0);
    let g = 0, w = 0;
    p.forEach((Z) => {
      const oe = f((Z == null ? void 0 : Z.u) || 0);
      g += m + sr(oe, m), w += Number((Z == null ? void 0 : Z.v) || 0);
    });
    const S = (g / p.length % 1 + 1) % 1;
    let O = 1 / 0, M = -1 / 0, C = 1 / 0, D = -1 / 0;
    p.forEach((Z) => {
      const oe = f((Z == null ? void 0 : Z.u) || 0), pe = sr(oe, S);
      O = Math.min(O, pe), M = Math.max(M, pe);
      const ee = Number((Z == null ? void 0 : Z.v) || 0);
      C = Math.min(C, ee), D = Math.max(D, ee);
    });
    const Y = l.reduce((Z, oe) => {
      const pe = Li(String((oe == null ? void 0 : oe.toolKind) || "pen")), ee = Wn[pe] || Wn[ci], me = Math.max(1, Number((oe == null ? void 0 : oe.size) || 10)) * Math.max(0.1, Number((ee == null ? void 0 : ee.sizeScale) ?? 1));
      return Math.max(Z, me);
    }, 0), H = Math.max(35e-4, Y / 2048);
    return {
      centerUv: { u: ((S + (O + M) * 0.5) % 1 + 1) % 1, v: Q((C + D) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (M - O) * 0.5 + H,
      halfH: (D - C) * 0.5 + H,
      uvPad: H
    };
  }
  function Pi(i, s, l) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = kn().find((g) => String((g == null ? void 0 : g.actionGroupId) || "") === f);
    if (!p) return null;
    const m = l || kr(f, s);
    return p.frame = H1(f, s, m), p.frame;
  }
  function Do() {
    var f;
    const i = Ia().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = j1().map((p) => ({
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
  function nu(i = !0) {
    var l, f, p, m, g, w;
    const s = Do().filter((S) => S.type === "strokeGroup").map((S) => String(S.actionGroupId || "")).filter((S) => !!S);
    if (i) {
      const S = String(((f = (l = h.interaction) == null ? void 0 : l.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), O = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), M = String(((w = (g = h.interaction) == null ? void 0 : g.stroke) == null ? void 0 : w.toolKind) || "").trim();
      S && O === "paint" && M !== "eraser" && !s.includes(S) && s.push(S);
    }
    return s;
  }
  function ru(i = !0) {
    var w, S, O, M, C, D;
    const s = Do();
    if (!i) return s;
    const l = String(((S = (w = h.interaction) == null ? void 0 : w.stroke) == null ? void 0 : S.actionGroupId) || "").trim(), f = String(((M = (O = h.interaction) == null ? void 0 : O.stroke) == null ? void 0 : M.layerKind) || "").trim(), p = String(((D = (C = h.interaction) == null ? void 0 : C.stroke) == null ? void 0 : D.toolKind) || "").trim();
    if (!l || f !== "paint" || p === "eraser" || s.some((Y) => Y.type === "strokeGroup" && String(Y.actionGroupId || "") === l))
      return s;
    const m = At();
    let g = s.reduce((Y, H) => Math.max(Y, Number((H == null ? void 0 : H.z_index) || 0)), -1) + 1;
    return m && sn(m) && String(m.actionGroupId || "") === l && (g = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: g,
        item: null
      }
    ].sort((Y, H) => Number((Y == null ? void 0 : Y.z_index) || 0) - Number((H == null ? void 0 : H.z_index) || 0));
  }
  function G1() {
    return kn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => Ro(Oa("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function K1() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Lo(Ea((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function Ep(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || f;
    }
    return !1;
  }
  function W1() {
    var s, l, f, p;
    let i = null;
    try {
      const m = nu(), g = ((p = (f = (l = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      g && (i = {
        source: g,
        revision: `${Ga()}:${iu()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function iu() {
    var p, m, g, w, S, O, M;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!Ep(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const C = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, D = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), Y = ((g = C == null ? void 0 : C.rawPoints) == null ? void 0 : g.length) ?? ((w = C == null ? void 0 : C.points) == null ? void 0 : w.length) ?? 0, H = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${D || "paint"}_${s}_live${H}_${Y}_${h.livePaintInteractionRevision}`;
    }
    const l = String(((S = i == null ? void 0 : i.item) == null ? void 0 : S.actionGroupId) || ""), f = String(((O = i == null ? void 0 : i.item) == null ? void 0 : O.rasterObjectId) || ((M = i == null ? void 0 : i.item) == null ? void 0 : M.id) || "");
    return `_${s}_${l || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function Js() {
    return I || !Array.isArray(_.stickers) ? [] : Ia();
  }
  function ou() {
    return [...Array.isArray(_.shots) ? _.shots : [], ...Js()];
  }
  function pn(i) {
    return !!i && Array.isArray(_.shots) && _.shots.includes(i);
  }
  function St(i) {
    return !!i && Array.isArray(_.stickers) && _.stickers.includes(i);
  }
  function Hn() {
    var i;
    return Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : [];
  }
  function Lo(i) {
    const s = yn(i);
    if (!s) return null;
    const l = Hn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Ea(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function vn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = yn(i.rasterObjectId || i.id || "");
    return !!s && !!Lo(Ea(s));
  }
  function Ro(i) {
    const s = Fa(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const f = kn().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return f ? {
      ...f,
      id: Oa("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function sn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!Ro(Oa(l, s));
  }
  function kr(i, s = null) {
    const l = Fa(i, s), f = String(l.actionGroupId || "").trim();
    return f ? Uo(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function B1(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${h.mode}:${Ha()}`;
    if (h.mode === "frame") {
      const m = $e(), g = String((m == null ? void 0 : m.id) || ""), w = m ? hn(m) : null;
      return `${p}:frame:${g}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((E == null ? void 0 : E.width) || 0))}:${Math.round(Number((E == null ? void 0 : E.height) || 0))}`;
  }
  function Zs(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: Q(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function sr(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function au(i, s = null, l = null) {
    var O;
    const f = Fa(i, s), p = Array.isArray(l) ? l : kr(f.actionGroupId, f.layerKind), m = [];
    if (p.forEach((M) => {
      const C = (M == null ? void 0 : M.geometry) || null, D = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(D) && m.push(...D);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const g = Number(((O = m[0]) == null ? void 0 : O.u) || 0);
    let w = 0, S = 0;
    return m.forEach((M) => {
      w += g + sr(Number((M == null ? void 0 : M.u) || 0), g), S += Number((M == null ? void 0 : M.v) || 0);
    }), {
      u: (w / m.length % 1 + 1) % 1,
      v: Q(S / m.length, 0, 1)
    };
  }
  function Qs(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = sr(Number(i.u || 0), p), w = Number(i.v || 0) - m, S = Number(f || 0) * jr, O = Math.cos(S), M = Math.sin(S), C = Math.max(0.02, Number(l || 1)), D = (g * O - w * M) * C, Y = (g * M + w * O) * C;
    return {
      ...i,
      u: ((p + D) % 1 + 1) % 1,
      v: Q(m + Y, 0, 1)
    };
  }
  function Fp(i, s, l, f = null, p = null, m = null) {
    const g = Fa(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const S = Uo(g.layerKind), O = Array.isArray(f) ? new Map(f.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let M = !1;
    if (S.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== w) return;
      const D = (O == null ? void 0 : O.get(String((C == null ? void 0 : C.id) || ""))) || C, Y = C == null ? void 0 : C.geometry, H = D == null ? void 0 : D.geometry;
      !Y || !H || (Array.isArray(H.points) && (Y.points = H.points.map((J) => Zs(J, s, l)), M = !0), Array.isArray(H.rawPoints) && (Y.rawPoints = H.rawPoints.map((J) => Zs(J, s, l)), M = !0), Array.isArray(H.processedPoints) && (Y.processedPoints = H.processedPoints.map((J) => Zs(J, s, l)), M = !0));
    }), M && m) {
      const C = kn().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === w);
      C && (C.frame = null);
    }
    return M;
  }
  function Tp(i, s = 1, l = 0, f = null, p = null, m = null) {
    const g = Fa(i, p), w = String(g.actionGroupId || "").trim();
    if (!w) return !1;
    const S = Uo(g.layerKind), O = Array.isArray(f) ? f : kr(w, g.layerKind), M = Array.isArray(O) ? new Map(O.map((Y) => [String((Y == null ? void 0 : Y.id) || ""), Y])) : null, C = (m == null ? void 0 : m.centerUv) ?? au(w, g.layerKind, O);
    let D = !1;
    if (S.forEach((Y) => {
      if (String((Y == null ? void 0 : Y.actionGroupId) || "").trim() !== w) return;
      const H = (M == null ? void 0 : M.get(String((Y == null ? void 0 : Y.id) || ""))) || Y, J = Y == null ? void 0 : Y.geometry, Z = H == null ? void 0 : H.geometry;
      !J || !Z || (Array.isArray(Z.points) && (J.points = Z.points.map((oe) => Qs(oe, C, s, l)), D = !0), Array.isArray(Z.rawPoints) && (J.rawPoints = Z.rawPoints.map((oe) => Qs(oe, C, s, l)), D = !0), Array.isArray(Z.processedPoints) && (J.processedPoints = Z.processedPoints.map((oe) => Qs(oe, C, s, l)), D = !0));
    }), D && m) {
      const Y = kn().find((H) => String((H == null ? void 0 : H.actionGroupId) || "") === w);
      Y && (Y.frame = null);
    }
    return D;
  }
  function Dp(i, s, l, f = null) {
    const p = yn(i);
    if (!p) return !1;
    const m = Hn().find((M) => String((M == null ? void 0 : M.id) || "").trim() === p);
    if (!m) return !1;
    const g = f && typeof f == "object" ? f : m, w = (g == null ? void 0 : g.transform) || {}, S = Number(w.du || 0) + Number(s || 0), O = Q(Number(w.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = S, m.transform.dv = O, !0;
  }
  function U1(i, s = 1, l = null) {
    const f = yn(i);
    if (!f) return !1;
    const p = Hn().find((O) => String((O == null ? void 0 : O.id) || "").trim() === f);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, g = (m == null ? void 0 : m.transform) || {}, w = Math.max(0.01, Number(g.scale || 1)), S = Q(w * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = S, !0;
  }
  function At() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const s = Ro(i);
    if (s) return s;
    const l = Lo(i);
    return l || (V ? ou().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : ri().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function lr() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(h.selectedId || "") ? At() : Ro(p) || Lo(p) || (V ? ou().find((g) => String((g == null ? void 0 : g.id) || "") === p) : ri().find((g) => String((g == null ? void 0 : g.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function Ta(i = null) {
    const s = Array.isArray(i) ? i : lr();
    if (!s || s.length < 2) return null;
    const l = s.map((O) => Qt(O)).filter((O) => (O == null ? void 0 : O.visible) && Array.isArray(O.corners) && O.corners.length);
    if (!l.length) return null;
    const f = l.flatMap((O) => O.corners.map((M) => Number((M == null ? void 0 : M.x) || 0))), p = l.flatMap((O) => O.corners.map((M) => Number((M == null ? void 0 : M.y) || 0))), m = Math.min(...f), g = Math.max(...f), w = Math.min(...p), S = Math.max(...p);
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
  function Lp(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function Da() {
    const i = At();
    return i ? sn(i) || vn(i) ? "stroke" : pn(i) ? "frame" : "image" : null;
  }
  function _n(i) {
    if (!i || typeof i != "object") return !1;
    if (sn(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = kn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (vn(i)) {
      const s = yn(i.rasterObjectId || i.id || ""), l = Hn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function su(i = null) {
    const s = Array.isArray(i) ? i : lr();
    return s.length > 0 && s.every((l) => _n(l));
  }
  function Y1(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (sn(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = kn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (vn(i)) {
      const f = yn(i.rasterObjectId || i.id || ""), p = Hn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function X1() {
    if (r) return;
    const i = lr();
    if (!i.length) return;
    const s = !su(i);
    let l = !1;
    i.forEach((f) => {
      Y1(f, s) && (l = !0);
    }), l && (Xe(), tt(), He(), Re(), le());
  }
  function Dn(i) {
    Xi(), Ke.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && St(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && pn(i) ? _.active.selected_shot_id = i.id || null : i ? pn(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function q1(i, s = null) {
    const l = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((g) => {
      const w = String((g == null ? void 0 : g.id) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }), h.selectedIds = l, Xi(), Ke.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = At();
    _.active.selected_sticker_id = m && St(m) && m.id || null, m && pn(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function Rp() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, f) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${f + 1}`)
    })), s = Js().map((l, f) => {
      var m, g;
      const p = Bt(l) ? String(l.id || kf) : String(((g = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : g.name) || l.asset_id || l.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function Vp(i) {
    return i === "frame" ? ke.camera : i === "stroke" ? ke.paintbrush_vertical_tool : ke.image;
  }
  function lu(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: Vp(i.kind)
    };
  }
  function el() {
    return tu();
  }
  function Bt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : k ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === kf || String(i.source_kind || "") === gE;
  }
  function Vo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function J1(i) {
    return Bt(i) && Vo(i) ? xb : 1;
  }
  function Z1() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function Q1() {
    return String(Z1() || "") === "lasso_fill";
  }
  function ev() {
    if (r) return;
    const i = At();
    !i || !Bt(i) || (i.visible = Vo(i), Ya(), Rt(), Xe(), tt(), Re(), He(), le());
  }
  function tv() {
    if (r || t !== "stickers") return;
    const i = At();
    if (!i || !Bt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = du(El, () => {
      le();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Oi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), Xe(), tt(), Re(), He(), le();
  }
  function nv(i) {
    if (!i || !Bt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = du(El, () => {
      le();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (l.vFOV_deg = Oi(
      l.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), l;
  }
  function rv() {
    const i = At();
    if (!i || !Bt(i)) return !1;
    const s = nv(i);
    if (!s) return !1;
    const l = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Ai(i) {
    return zn.uiList(e, i);
  }
  function cu(i) {
    return zn.uiValue(e, i);
  }
  function $p() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return mc(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function iv() {
    const { metaKey: i } = $p(), s = cu(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function uu(i) {
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
  function fu(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), f = s % 60;
    return `${l}:${String(f).padStart(2, "0")}`;
  }
  function tl() {
    return k ? _.timeline.fps : xt.metaFps || 1e3;
  }
  function Ci(i = {}) {
    const s = Number(i.duration ?? A.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? A.videoTransport.fps ?? 24)), f = on.frame / tl(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!A.videoTransport.ready, m = on.playing, g = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!A.videoTransport.visible, w = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Ne instanceof HTMLVideoElement ? Ne.muted : A.videoTransport.muted), S = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Ne instanceof HTMLVideoElement ? Ne.volume : A.videoTransport.volume
    ), O = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Fo(Ne), M = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!A.videoTransport.loop;
    Object.assign(A.videoTransport, {
      ready: p,
      playing: m,
      visible: g,
      loop: M,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: fu(f),
      durationLabel: fu(s),
      frameCount: Math.max(0, Number(i.frameCount ?? A.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: O,
      muted: w,
      volume: Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(S) ? S : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : A.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? A.videoTransport.thumbnailCount ?? ar))
    });
  }
  function zp() {
    return !!(Ne instanceof HTMLVideoElement && !k && Ne.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function jp() {
    if (!(Ne instanceof HTMLVideoElement) || !A.videoTransport.hasAudio) return;
    const i = !Ne.muted;
    Ne.muted = i, !i && Number(Ne.volume || 0) <= 0 && (Ne.volume = Math.max(0.01, Number(A.videoTransport.volume || 1))), Ci({
      hasAudio: A.videoTransport.hasAudio,
      muted: Ne.muted,
      volume: Number(Ne.volume ?? A.videoTransport.volume ?? 1)
    });
  }
  function ov() {
    Ci({
      visible: zp()
    });
  }
  function av() {
    if (!(Ne instanceof HTMLVideoElement) || Number(Ne.videoWidth || 0) < 1 || Number(Ne.videoHeight || 0) < 1) return !1;
    const i = Number(Ne.videoWidth || 0), s = Number(Ne.videoHeight || 0);
    (G.width !== i || G.height !== s) && (G.width = i, G.height = s);
    const l = G.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(Ne, 0, 0, i, s), G.__panoFrameIdx = Number(G.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function Hp() {
    return !on.showsVideo && Number(G.width || 0) > 0 && Number(G.height || 0) > 0 && Number(G.__panoFrameIdx || 0) > 0 ? G : Ne instanceof HTMLVideoElement && Number(Ne.videoWidth || 0) > 0 && Number(Ne.videoHeight || 0) > 0 && Number(Ne.readyState || 0) >= 2 ? Ne : null;
  }
  function Gp() {
    G.__panoFrameIdx = 0, ne.backgroundDirty = !0;
  }
  function Ii() {
    if (!(Ne instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = $p(), s = Sn(e, "background") && Ai(i)[0] || null, l = ls(s), f = [l, zn.linkedVideoFile(e, ah())].filter(Boolean), p = f.find((C) => !xt.failedSrcs.has(C)) || "";
    xt.videoFailed = !p && f.length > 0;
    const m = p && p === l ? iv() : null;
    xt.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const g = Math.max(1, Number((m == null ? void 0 : m.fps) || (k ? _.timeline.fps : 24))), w = Ne.dataset.panoSrc === p && Number.isFinite(Ne.duration) ? Ne.duration : 0, S = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / g : w)), O = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(S * g))), M = !!(m != null && m.has_audio) || Fo(Ne);
    return p && Ne.dataset.panoSrc !== p ? (Ne.pause(), Gp(), Ne.dataset.panoSrc = p, Ne.loop = !k && !!A.videoTransport.loop, Ne.muted = !!A.videoTransport.muted, Ne.volume = Math.max(0, Math.min(1, Number(A.videoTransport.volume ?? 1))), Ne.src = p, Ne.load(), on.setSource(!0), k || on.seek(0)) : !p && Ne.getAttribute("src") && (Ne.pause(), Ne.removeAttribute("src"), delete Ne.dataset.panoSrc, Ne.load(), Gp(), qs(), on.setSource(!1)), k || (Ne.loop = !!A.videoTransport.loop), p && !k && xt.thumbnailSrc !== p && !xt.thumbnailFailedSrcs.has(p) && D1(p, S, g), p || qs(), Ci({
      ready: !!p,
      visible: !!p && zp(),
      duration: S,
      frameCount: O,
      fps: g,
      hasAudio: M,
      loop: !!Ne.loop,
      muted: !!Ne.muted,
      volume: Number(Ne.volume ?? A.videoTransport.volume ?? 1),
      thumbnailCount: A.videoTransport.thumbnailCount
    }), p || null;
  }
  function Kp(i, s = null) {
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
  function du(i, s = null) {
    return Af(e, i, Zt, s || (() => le()));
  }
  function pu(i = null) {
    return Sn(e, "external-sticker") ? du(El, i) : null;
  }
  function Wp() {
    if (!Sn(e, "external-sticker")) return null;
    const i = Ai(vE)[0];
    if (!i || typeof i != "object") return null;
    const s = Ai(bE).map(ls).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const l = ls(Ai(yE)[0] || null);
    return l ? { src: l, meta: i } : null;
  }
  function sv() {
    const i = _.stickers.find(Bt), s = i ? Wp() : null, l = s ? Rb(i.clip, h.frame, _.timeline.fps, s.meta) : null;
    To.follow({ src: (s == null ? void 0 : s.src) || "", time: l, playing: on.advancing, fps: _.timeline.fps });
    const f = i ? _u(i) : null, p = s != null && s.frames ? L1.picture(s.frames, l, s.meta, f) : To.picture(ge, f);
    return p ? { media: p, revision: uu(p), source: $b(s, f) } : null;
  }
  function Oi(i, s, l) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = Q(Number(i || 30), 0.1, 179) * jr, g = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return Q(g * mo, 0.1, 179);
  }
  function lv(i) {
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
      const g = Number(m.yaw_deg), w = Number(m.pitch_deg), S = Number(m.roll_deg), O = Number(m.hFOV_deg);
      if (![g, w, S, O].every((Y) => Number.isFinite(Y))) return null;
      let M = ((g + 180) % 360 + 360) % 360 - 180;
      Object.is(M, -0) && (M = 0);
      const C = {
        yaw_deg: M,
        pitch_deg: Q(w, -89.9, 89.9),
        roll_deg: S,
        hFOV_deg: Q(O, 0.1, 179)
      }, D = Number(l.source_aspect);
      return Number.isFinite(D) && D > 0 && (C.source_aspect = D), C;
    } catch {
      return null;
    }
  }
  function Bp(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = xo(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(s) ? s : 0),
        pitch_deg: Q(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: Q(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function cv(i) {
    var w;
    if (!i || typeof i != "object") return Bp(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let g = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const S = Q(p, 0.1, 179) * jr, O = Q(m, 0.1, 179) * jr, M = Math.tan(O * 0.5);
      if (Math.abs(M) > 1e-6) {
        const C = Math.tan(S * 0.5) / M;
        Number.isFinite(C) && C > 0 && (g = C);
      }
    }
    if (i != null && i.asset_id && ((w = _ == null ? void 0 : _.assets) != null && w[i.asset_id])) {
      const S = _.assets[i.asset_id], O = Number((S == null ? void 0 : S.w) || 0), M = Number((S == null ? void 0 : S.h) || 0);
      O > 0 && M > 0 && (g = O / M);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: $t(Number.isFinite(s) ? s : 0),
        pitch_deg: Q(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: Q(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: g
    };
  }
  function uv(i) {
    return zn.linkedValue(e, i);
  }
  function fv(i, s, l) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : lv(s);
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
  function dv() {
    const i = pu(() => {
      bi(e, "image-loaded");
    }), s = Sn(e, "external-sticker") ? Kp(cu("pano_sticker_input_pose"), null) : null;
    return Xb(_, Yb(e, { pose: s, image: i }));
  }
  function pv() {
    var w;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((S) => String((S == null ? void 0 : S.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((w = e.getInputLink(i)) == null ? void 0 : w.id) ?? null : null, l = pu(() => {
      bi(e, "image-loaded");
    }), f = Kp(cu("pano_sticker_input_pose"), null), p = uv("sticker_state"), m = zn.externalStateHash(e, p), g = s == null ? null : fv(f, p, l);
    return Ub(_, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: g,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function Up(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? dv() : pv();
    if (s.changed) {
      const l = _.stickers.find(Bt);
      _.stickers = s.state.stickers, _.active = s.state.active, l && h.selectedId === l.id && !_.stickers.some((f) => f.id === l.id) && (h.selectedId = null, h.selectedIds = []), tt(), Re(), He();
    }
    le();
  }
  function La(i = {}) {
    const l = i.preservePanelValues !== !1 ? an(At()) : null;
    l && (h.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: pi(l)
    }), h.selectedId = null, h.selectedIds = [], Xi(), h.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function $o() {
    return !P || !h.worldSelectedId ? null : _.stickers.find((i) => i.id === h.worldSelectedId && i.placement === "world") || null;
  }
  function hu(i) {
    Dn(null), h.worldSelectedId = i, ne.backgroundDirty = !0;
  }
  function Xi() {
    h.worldSelectedId && (h.worldSelectedId = null, h.gizmoAxis = null, ne.backgroundDirty = !0);
  }
  function nl(i) {
    return !!i && !r && !i.locked;
  }
  function hv() {
    if (t !== "cutout") return;
    const i = $e();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function mu() {
    if (F && ea(A.toolButtons, "value", "add-camera", { disabled: Zi() }), t !== "cutout") return;
    const i = $e();
    ea(A.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? ke.camera : ke.plus_circle
    });
  }
  function Tr() {
    const i = QA({
      spaceView: Ji(),
      spaceMode: ec(h.spaceMode, h.viewTransition),
      readOnly: r,
      frameMode: V && h.mode === "frame",
      showGrid: h.showGrid
    });
    A.space && Object.assign(A.space, i.space);
    for (const [s, l] of Object.entries(i.buttons)) ea(A.floatingButtons, "action", s, l);
  }
  function ii() {
    var l;
    const i = eC({ hasShot: !!$e(), erp: qi(), hidden: Zi() && !Dr(), studio: F });
    h.mode === "frame" && i.disabled && (F ? Hh($e()) : h.mode = "pano"), h.outputPreviewRect = null, A.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && !V), f.key === "frame" ? Object.assign(f, i) : f.disabled = !1;
    });
    const s = V && h.mode === "frame" ? $e() : null;
    A.frameRail.visible = !!s, A.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, A.frameRollKnob.visible = !!s && !r && s.locked !== !0, A.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, A.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), A.frameRollKnob.displayValue = ta(A.frameRollKnob.rollDeg), A.frameRollKnob.dragging = ((l = h.interaction) == null ? void 0 : l.kind) === "roll_frame", A.frameRollKnob.armed = !!s && h.altModifier === !0, A.frameRail.rollKnob = A.frameRollKnob, A.frameRail.aspectLabel = s ? pi(s) : "", A.frameRail.aspectChoices = M1(s ? String(pi(s)) : null, { erp: F, coverage: _.coverage }), s || (A.frameRail.aspectOpen = !1), A.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!$e(), V && A.cameraPreview && (A.cameraPreview.visible = h.mode !== "frame" && Yp(), A.cameraPreview.expanded = !!h.outputPreviewExpanded, A.cameraPreview.settled = A.cameraPreview.settled === !0 && ne.pendingStableLayoutFrames <= 0 && ne.hasPresentedFrame), Tr(), qh() ? ht(h.pointerPos) : Tt(h.mode === "pano" ? "grab" : "default");
  }
  function Yp() {
    return !F || Dr() && !qi();
  }
  function qi() {
    return F && Dr() && _.camera.projection === "erp";
  }
  function mv() {
    const s = sh({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function Xp() {
    return Sb({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, E.width, E.height);
  }
  function qp() {
    return !k || !Sn(e, "scene") ? null : Og(Ai("pano_scene_files"), Ai("pano_scene_meta"), ls);
  }
  function gv() {
    return !k || !Sn(e, "external-sticker") ? null : Og(Ai("pano_sticker_files"), Ai("pano_sticker_meta"), ls);
  }
  function Ji() {
    return h.mode === "pano" && Ra();
  }
  function Ra() {
    return k && pN({ sceneLinked: P && !!cd(e).scene, files: qp(), stickers: _.stickers });
  }
  function cr() {
    return h.spaceMode === "6dof" && Ji();
  }
  function gu() {
    var i, s, l;
    return lP((l = (s = (i = Or.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : l.call(s, d1));
  }
  function yu() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function Va(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function yv(i) {
    var l;
    const s = UA(h.spaceMode, h.viewTransition, i);
    if (s !== "keep") {
      if (s === "return") {
        Yi({ ...wn(), position: zo(), distance: ((l = Lr()) == null ? void 0 : l.radius) || Ar }, { mode: i, moved: !1 });
        return;
      }
      Ca(), Va(nd({ ...yu(), position: wn().position }, i, zo())), ne.backgroundDirty = !0, Tr(), le({ localOnly: !0 });
    }
  }
  function wn() {
    var l;
    const i = h.viewMoved ? h.viewDistance : ((l = Lr()) == null ? void 0 : l.radius) || Ar, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return lN(h.spaceMode, s, zo());
  }
  function zo() {
    return Dr() ? Qi().position : [0, 0, 0];
  }
  function Zi() {
    return W && _.camera !== null;
  }
  function Dr() {
    return Zi() && (!F || _.camera.visible);
  }
  function rl() {
    return _.painting_visible !== !1;
  }
  function il(i) {
    return i.visible && Vs(i.clip, h.frame);
  }
  function Qi() {
    return ep(_.camera, h.frame);
  }
  function Lr() {
    var s;
    const i = Qn();
    return ((s = i.space ?? i.content) == null ? void 0 : s.sphere) ?? null;
  }
  function Jp(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, ne.backgroundDirty = !0, le({ localOnly: !0 });
  }
  function Rr() {
    var i;
    return ((i = Lr()) == null ? void 0 : i.radius) || Ar;
  }
  function bv() {
    var w;
    const i = Qn().space, s = Te.sceneState, l = h.worldSelectedId || h.selectedId, f = s.stickers.findIndex((S) => S.id === l), p = f < 0 ? null : {
      sticker: s.stickers[f],
      value: vc(s, h.frame).stickers[f],
      plane: i.stickers.find((S) => S.id === l) ?? null,
      item: ((w = i.sticker) == null ? void 0 : w.id) === l && i.sticker.url ? { kind: i.sticker.kind, box: Fe.sceneBox(i.sticker.url) } : null
    }, m = ur() ? fh() : vN(Lr(), p);
    if (!m) return;
    const g = wn();
    h.viewDistance = g.distance, h.viewMoved = !0, Yi(Ig(g, m, E.width, E.height));
  }
  function Zp(i) {
    return Fe.pickSurface(Yo(), i.x, i.y, E.width, E.height);
  }
  function Qp(i, s) {
    var l;
    return pf(i, s, h.viewMoved ? null : (l = Lr()) == null ? void 0 : l.center, Rr());
  }
  function eh() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function vv(i, s) {
    const l = performance.now(), f = { x: i.x, y: i.y, time: l, key: Fe.contentKey(), view: eh() };
    if (!Ng(Tn, f)) {
      const m = Zp(i);
      Tn = { ...f, cost: performance.now() - l, hit: m };
    }
    const p = wn();
    Jp(Cg(p, Qp(p, Tn.hit), s, Rr())), Tn.view = eh(), Tn.wheelTime = l;
  }
  function th(i, s, l) {
    const f = wn();
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: Qp(f, Zp(s)) } : { kind: "space_pan", last: s, depth: Mg(f, Rr()) }, ht(s), E.setPointerCapture(l);
  }
  function bu() {
    const i = `${h.viewYaw}|${h.viewPitch}|${h.viewFov}|${E.width}|${E.height}`;
    return Ue.key !== i && (Ue = { key: i, projection: kb(Xp(), E.width, E.height) }), Ue.projection;
  }
  function $a(i) {
    const s = bu().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function vu(i, s) {
    return bu().ray(i, s);
  }
  function Ei() {
    const i = E.width, s = E.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const w = s, S = w * l;
      return { x: (i - S) * 0.5, y: 0, w: S, h: w };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function _u(i) {
    var g;
    if (i && typeof i == "object" && (Bt(i) || i.external === !0))
      return pu(() => {
        bi(e, "image-loaded");
      });
    const s = k ? za(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = Zt.get(s);
    if (l) return l;
    const f = k ? pb(i.source) : (g = _.assets) == null ? void 0 : g[s], p = EE(f);
    if (!p) return null;
    const m = new Image();
    return C1(m, p), m.onload = () => {
      I1(m, p), le();
    }, m.onerror = () => {
      O1(m, p), le();
    }, m.src = p, Zt.set(s, m), m;
  }
  function za(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function nh(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const f = Ni.get(l);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, Ni.set(l, p), p;
  }
  function _v(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Io.get(s);
    if (l) return l.ready ? l : null;
    const f = nh(i, () => {
      const M = Io.get(s);
      M && (M.ready = !1), le({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const p = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (p < 1 || m < 1) return null;
    const g = document.createElement("canvas");
    g.width = p, g.height = m;
    const w = g.getContext("2d", { willReadFrequently: !0 });
    if (!w) return null;
    w.clearRect(0, 0, p, m), w.drawImage(f, 0, 0, p, m);
    const S = w.getImageData(0, 0, p, m).data, O = { canvas: g, width: p, height: m, alpha: S, ready: !0 };
    return Io.set(s, O), O;
  }
  function wv(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), g = sr(Number(i.u || 0), p), w = Number(i.v || 0) - m, S = Math.max(0.02, Number(l || 1)), O = Number(f || 0) * jr, M = Math.cos(O), C = Math.sin(O), D = g / S, Y = w / S, H = D * M + Y * C, J = -D * C + Y * M;
    return {
      ...i,
      u: ((p + H) % 1 + 1) % 1,
      v: m + J
    };
  }
  function xv(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, g = wv(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), w = Number(l.u1 || 0) - Number(l.u0 || 0), S = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(w > 1e-6) || !(S > 1e-6)) return null;
    const O = sr(Number(g.u || 0), Number(l.u0 || 0)) / w, M = (Number(g.v || 0) - Number(l.v0 || 0)) / S;
    if (O < 0 || O > 1 || M < 0 || M > 1) return 0;
    const C = _v(i);
    if (!C) return null;
    const D = Q(Math.floor(O * C.width), 0, C.width - 1), Y = Q(Math.floor(M * C.height), 0, C.height - 1);
    return Number(C.alpha[(Y * C.width + D) * 4 + 3] || 0);
  }
  function rh(i, s, l, f = null) {
    if (!(s != null && s.visible) || !Vi(l, s.corners)) return !1;
    const p = f || Nr(l, performance.now()), m = xv(i, p);
    return m === null ? !0 : m > 8;
  }
  function Sv() {
    var f, p, m, g, w, S, O, M;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, nu(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((w = (g = i == null ? void 0 : i.displayPaint) == null ? void 0 : g.canvas) == null ? void 0 : w.width) || 2048)), l = Math.max(1, Number(((S = i == null ? void 0 : i.descriptor) == null ? void 0 : S.height) || ((M = (O = i == null ? void 0 : i.displayPaint) == null ? void 0 : O.canvas) == null ? void 0 : M.height) || 1024));
    return { width: s, height: l };
  }
  function kv() {
    var Y, H, J;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = er(), f = `${iu()}:${l.width}:${l.height}`;
    if (((Y = h._activePaintEraserPreviewInfo) == null ? void 0 : Y.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = Nn(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Z = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Cu(Z, p.targetSpace, !0);
    }
    const g = ja(l.width, l.height, { readback: !0 });
    if (!xh(g, p, { w: l.width, h: l.height })) return null;
    const w = ((J = (H = g.ctx) == null ? void 0 : H.getImageData(0, 0, l.width, l.height)) == null ? void 0 : J.data) || null;
    if (!w) return null;
    let S = l.width, O = l.height, M = -1, C = -1;
    for (let Z = 0; Z < l.height; Z += 1)
      for (let oe = 0; oe < l.width; oe += 1)
        w[(Z * l.width + oe) * 4 + 3] <= 8 || (oe < S && (S = oe), Z < O && (O = Z), oe > M && (M = oe), Z > C && (C = Z));
    if (M < S || C < O)
      return h._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const D = {
      surface: g,
      bounds: { minX: S, minY: O, maxX: M, maxY: C },
      key: `${f}:${S}:${O}:${M}:${C}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: f, value: D }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), D;
  }
  function jo() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function Mv(i, s, l) {
    var f, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, g = ((p = i.item) == null ? void 0 : p.transform) || {}, w = Number(m.u0 || 0) + Number(g.du || 0), S = Number(m.u1 || 0) + Number(g.du || 0), O = Number(m.v0 || 0) + Number(g.dv || 0), M = Number(m.v1 || 0) + Number(g.dv || 0);
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(Q(O, 0, 1) * l),
        maxY: Math.ceil(Q(M, 0, 1) * l),
        wraps: S - w >= 1 || w < 0 || S > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = kr(i.actionGroupId, "paint"), g = Pi(i.actionGroupId, "paint", m);
      if (!g) return null;
      const w = g.centerUv.u - g.halfW, S = g.centerUv.u + g.halfW, O = g.centerUv.v - g.halfH, M = g.centerUv.v + g.halfH;
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((S % 1 + 1) % 1 * s),
        minY: Math.floor(Q(O, 0, 1) * l),
        maxY: Math.ceil(Q(M, 0, 1) * l),
        wraps: S - w >= 1 || w < 0 || S > 1
      };
    }
    return null;
  }
  function Nv(i, s, l) {
    if (!i || !s) return !1;
    const f = (g) => g.wraps ? [
      { minX: 0, maxX: g.maxX, minY: g.minY, maxY: g.maxY, wraps: !1 },
      { minX: g.minX, maxX: l - 1, minY: g.minY, maxY: g.maxY, wraps: !1 }
    ] : [g], p = f(i), m = f(s);
    return p.some((g) => m.some((w) => !(g.maxX < w.minX || w.maxX < g.minX || g.maxY < w.minY || w.maxY < g.minY)));
  }
  function Pv(i, s, l) {
    var me, Ge, Be, ot, ve, ue, ye;
    if (!i || !s || !((me = l == null ? void 0 : l.surface) != null && me.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = Mv(s, f, p);
    if (m && !Nv(m, l.bounds, f)) return i;
    const g = String(((Ge = s.item) == null ? void 0 : Ge.id) || s.id || ""), w = ((Be = s.item) == null ? void 0 : Be.transform) || {}, S = `${l.key}:${g}:${f}:${p}:${Number(w.du || 0).toFixed(6)}:${Number(w.dv || 0).toFixed(6)}:${Number(w.rot_deg || 0).toFixed(3)}:${Number(w.scale || 1).toFixed(4)}`, O = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (O.has(S)) return O.get(S);
    const M = Q(Math.floor(Number(((ot = l.bounds) == null ? void 0 : ot.minX) || 0)), 0, Math.max(0, f - 1)), C = Q(Math.floor(Number(((ve = l.bounds) == null ? void 0 : ve.minY) || 0)), 0, Math.max(0, p - 1)), D = Q(Math.ceil(Number(((ue = l.bounds) == null ? void 0 : ue.maxX) || 0)), M, Math.max(0, f - 1)), Y = Q(Math.ceil(Number(((ye = l.bounds) == null ? void 0 : ye.maxY) || 0)), C, Math.max(0, p - 1)), H = Math.max(1, D - M + 1), J = Math.max(1, Y - C + 1), Z = ja(f, p, { readback: !0 });
    Z.ctx.clearRect(0, 0, f, p), Z.ctx.drawImage(i, 0, 0);
    const oe = Z.ctx.getImageData(M, C, H, J);
    Z.ctx.save(), Z.ctx.globalCompositeOperation = "destination-out", Z.ctx.drawImage(l.surface.canvas, 0, 0), Z.ctx.restore();
    const pe = Z.ctx.getImageData(M, C, H, J);
    let ee = !1;
    for (let Le = 0; Le < H * J; Le += 1) {
      const ze = oe.data[Le * 4 + 3], Ze = pe.data[Le * 4 + 3];
      if (ze > Ze) {
        ee = !0;
        break;
      }
    }
    return ee ? (O.size > 64 && O.clear(), O.set(S, Z.canvas), Z.canvas) : (O.set(S, i), i);
  }
  function ih(i, s = null) {
    const l = yn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!l || !f) return null;
    const p = nh(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: g } = Sv(), w = (i == null ? void 0 : i.transform) || {}, S = [
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
    ].join(":"), O = Bi.get(S);
    if (O) return O;
    Bi.size > 64 && Bi.clear();
    const M = document.createElement("canvas");
    M.width = m, M.height = g;
    const C = M.getContext("2d");
    if (!C) return null;
    const D = Number(f.u0 || 0) * m, Y = Number(f.v0 || 0) * g, H = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), J = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * g), Z = D + H * 0.5 + Number(w.du || 0) * m, oe = Y + J * 0.5 + Number(w.dv || 0) * g, pe = Number(w.rot_deg || 0) * jr, ee = Math.max(0.01, Number(w.scale || 1));
    for (const me of [-m, 0, m])
      C.save(), C.translate(Z + me, oe), C.rotate(pe), C.scale(ee, ee), C.drawImage(p, -H * 0.5, -J * 0.5, H, J), C.restore();
    return Bi.set(S, M), M;
  }
  async function wu(i, s) {
    const l = await new Promise((w) => i.toBlob(w, "image/png")), f = new FormData();
    f.append("image", l, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const p = await Xt.fetchApi("/upload/image", { method: "POST", body: f });
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
  let ol = null, al = !1;
  function Av() {
    if (I) return !1;
    const i = P0(_.painting), { width: s, height: l } = Ka();
    return zM(_.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function oh() {
    const i = String(e.id ?? "0"), s = Fl.get(i);
    if (al && s) return s;
    const l = (async () => {
      var m, g, w, S, O, M, C, D, Y, H, J, Z;
      const f = Ga(), p = P0(_.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, ol = f, Ln());
        return;
      }
      if (ol !== f && !al) {
        al = !0;
        try {
          fl();
          const oe = nu(!1), pe = ((g = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : g.call(m, oe)) || null, ee = ((w = pe == null ? void 0 : pe.displayPaint) == null ? void 0 : w.canvas) || null, me = ((S = pe == null ? void 0 : pe.committedMask) == null ? void 0 : S.canvas) || null, Ge = Math.max(1, Number(((O = pe == null ? void 0 : pe.descriptor) == null ? void 0 : O.width) || (ee == null ? void 0 : ee.width) || (me == null ? void 0 : me.width) || 2048)), Be = Math.max(1, Number(((M = pe == null ? void 0 : pe.descriptor) == null ? void 0 : M.height) || (ee == null ? void 0 : ee.height) || (me == null ? void 0 : me.height) || 1024));
          (!ee && p.totalPaintCount > 0 || !me && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((C = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== Ge || Number(((D = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : D.height) || 0) !== Be) && (h._paintLayerSyncBlankSurface = ja(Ge, Be)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ge, Be));
          const ot = ee || p.totalPaintCount > 0 && ((Y = h._paintLayerSyncBlankSurface) == null ? void 0 : Y.canvas) || null, ve = me || p.totalMaskCount > 0 && ((H = h._paintLayerSyncBlankSurface) == null ? void 0 : H.canvas) || null;
          if (!ot && !ve) return;
          let ue = null, ye = null;
          const Le = [];
          if (p.totalPaintCount > 0) {
            ue = await wu(ot, `pano_paint_${i}.png`);
            for (const ze of oe) {
              const Ze = String(ze || "").trim();
              if (!Ze) continue;
              const at = ((Z = (J = h.paintEngine) == null ? void 0 : J.getGroupDisplayCanvas) == null ? void 0 : Z.call(J, Ze)) || null;
              if (!at) continue;
              const Ct = Ze.replace(/[^a-zA-Z0-9_-]+/g, "_"), st = await wu(at, `pano_group_${i}_${Ct}.png`);
              st && Le.push({
                id: Ze,
                actionGroupId: Ze,
                image: st
              });
            }
          }
          p.totalMaskCount > 0 && (ye = await wu(ve, `pano_mask_${i}.png`)), f === Ga() && (_.painting_layer = {
            paint: ue,
            mask: ye,
            groups: Le,
            revision: f
          }, ol = f, Ln());
        } catch (oe) {
          throw oe;
        } finally {
          al = !1;
        }
      }
    })();
    return Fl.set(i, l), l.finally(() => {
      Fl.get(i) === l && Fl.delete(i);
    }), l;
  }
  function xu() {
    if (t === "cutout" && !I) {
      const p = Hp();
      if (p) return p;
      const m = Cf(
        e,
        ["erp_image", "bg_erp"],
        () => le(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !Md(m) ? m : Af(e, "pano_input_images", Zt, () => le()) || m || null;
    }
    const i = Hp();
    if (i) return i;
    const s = Sn(e, "background") ? Af(e, "pano_input_images", Zt, () => le()) : null;
    if (s && !Md(s)) return s;
    if (Ne instanceof HTMLVideoElement && Ne.dataset.panoSrc) return Ne;
    const l = ah();
    return Cf(e, l, () => le(), `background:${l.join("|")}`) || s || null;
  }
  function Cv() {
    var s;
    const i = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((l) => (l == null ? void 0 : l.name) === "source");
    return i >= 0 && e.graph ? String(((s = e.getInputLink(i)) == null ? void 0 : s.type) || "") : "";
  }
  function ah() {
    if (t === "cutout") return I ? Cv() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function Su(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function Iv() {
    if (Fe.failed) return { status: mr, detail: "renderer" };
    if (!Fe.ready) return { status: Cr, detail: "boot" };
    const i = xu(), s = xt.videoFailed ? mr : kd(i, Su), l = [];
    for (const f of Ia()) {
      if ((f == null ? void 0 : f.visible) === !1) continue;
      const p = _u(f);
      l.push(kd(p, Su));
    }
    return dE({
      presented: ne.hasPresentedFrame,
      background: s,
      stickers: l
    });
  }
  function Ho() {
    const i = new Set(
      (_.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(_.assets || {}).forEach((s) => {
      i.has(s) || (delete _.assets[s], Zt.delete(s));
    });
  }
  function ku(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(Q(i.y, -1, 1))
    };
  }
  function Mu(i, s = null) {
    const { lon: l, lat: f } = ku(i), p = Ei();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const g = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y: g, z: 1 };
  }
  function sl(i) {
    const s = an(i), l = Pa(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(Q(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * jr), p = Math.tan(Q(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * jr);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: f,
      tanY: p
    };
  }
  function Fi(i, s, l) {
    return $E(M0(M0(i.centerDir, N0(i.right, s)), N0(i.up, l)));
  }
  function sh(i) {
    const s = sl(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => Fi(s, f * s.tanX, p * s.tanY));
  }
  function lh(i, s, l) {
    const f = sl(i), p = (s * 2 - 1) * f.tanX, m = (1 - l * 2) * f.tanY;
    return Fi(f, p, m);
  }
  function ch(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: Q((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function Ov(i) {
    var S, O, M, C;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((S = i == null ? void 0 : i.transform) == null ? void 0 : S.scale) || 1)), p = Number(((O = i == null ? void 0 : i.transform) == null ? void 0 : O.rot_deg) || 0), m = Number(((M = i == null ? void 0 : i.transform) == null ? void 0 : M.du) || 0), g = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((D) => Zs(Qs(D, l, f, p), m, g));
  }
  function Ev(i) {
    const s = yn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${Ha()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (h.mode === "frame") {
      const m = $e(), g = m ? hn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((E == null ? void 0 : E.width) || 0))}:${Math.round(Number((E == null ? void 0 : E.height) || 0))}`;
  }
  function Fv(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = pn(i) ? "frame" : St(i) ? "sticker" : "item", f = an(i), p = [
      l,
      s,
      h.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      pi(f),
      Zn(i) && il(i)
    ].join(":");
    if (h.mode === "frame") {
      const m = $e(), g = m ? hn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((E == null ? void 0 : E.width) || 0))}:${Math.round(Number((E == null ? void 0 : E.height) || 0))}`;
  }
  function uh() {
    var i, s;
    return ((s = (i = h.paintEngine) == null ? void 0 : i.getMaskDisplayCanvas) == null ? void 0 : s.call(i)) || null;
  }
  function Tv() {
    return uh() ? `${bh()}:mask_display` : "";
  }
  function Dv(i) {
    const s = uh();
    if (!s) return i;
    const l = Tv(), f = i.reduce((g, w) => Math.max(g, Number((w == null ? void 0 : w.zIndex) || 0)), -1), p = (Array.isArray(_.stickers) ? _.stickers : []).reduce((g, w) => Math.max(g, Number((w == null ? void 0 : w.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function Lv() {
    var f, p;
    const i = ru(!0), s = kv(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const g = String(m.actionGroupId || m.id || "");
        if (!g) continue;
        const w = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, g)) || null;
        if (!w) continue;
        l.push({
          id: `paint_group:${g}`,
          source: w,
          revision: `${bh()}:${g}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const g = m.item || null, w = yn((g == null ? void 0 : g.id) || m.id || "");
        if (!w) continue;
        const S = ih(g, () => le());
        if (!S) continue;
        const O = Pv(S, m, s), M = (g == null ? void 0 : g.transform) || {};
        l.push({
          id: `raster:${w}`,
          source: O,
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
    return Dv(l);
  }
  function Rv() {
    return rl() ? Lv().filter((i) => i.visible !== !1).map((i) => ({ id: i.id, media: i.source, revision: i.revision, opacity: i.opacity, zIndex: i.zIndex })) : [];
  }
  function Qn() {
    return et || (et = Vv()), et;
  }
  function Vv() {
    const i = xu(), s = Rv(), l = { ..._.assets };
    for (const H of k ? [] : _.stickers) {
      const J = String((H == null ? void 0 : H.asset_id) || "");
      J && !l[J] && Zt.has(J) && (l[J] = { type: "comfy_image", filename: J });
    }
    const f = k ? _.stickers.map((H) => eu(H) ? { ...H, source: { kind: "file", filename: za(H) } } : H) : _.stickers, p = JSON.stringify([f, Object.keys(l), _.scene]);
    Te.key !== p && (Te = { key: p, sceneState: qr({ ..._, stickers: f, assets: l, painting: null }) });
    const m = To ? sv() : null, g = (H) => {
      if (k && !H.visible) return null;
      if (To && Bt(H)) return m;
      const J = _u(H);
      return J ? { media: J, revision: uu(J) } : null;
    }, w = Mb(Te.sceneState, h.frame, _.stickers, { media: g, paintLayers: s }), S = i && (i === Ne || i === G) ? Ne.dataset.panoSrc : i, O = Su(i) ? { media: i, revision: uu(i), coverage: Xn(_.coverage), source: S } : null, M = Ra(), C = cN(yu(), M, zo());
    C.mode !== h.spaceMode && Ca(), Va(C);
    const D = M ? $v(Te.sceneState, g) : null, Y = Ji() ? { ...D, ...zv(D) } : null;
    return { background: O, layers: w, space: Y, content: D };
  }
  function $v(i, s) {
    const l = vc(i, h.frame), f = qp(), p = _b(f, l.scene), m = p != null && p.url ? Fe.sceneBox(p.url) : null, g = m && od(p.kind, m), w = gv(), S = hN(w, i, l), O = S != null && S.url ? Fe.sceneBox(S.url) : null, M = O ? [{ box: od(S.kind, O), value: S.value }] : [], C = LN(i, h.frame, _.stickers, { media: s }), D = sd(yN(l, g, C, M));
    return {
      evaluated: l,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: mN(w, i),
      sticker: S,
      stickers: C,
      sphere: D
    };
  }
  function zv(i) {
    var l;
    const s = ((l = i.sphere) == null ? void 0 : l.radius) || Ar;
    return {
      gizmo: ur() ? Kv() : jv(i.evaluated),
      grid: h.showGrid && !h.fullscreen ? IN(s) : null,
      lines: Dr() ? Gv(s) : []
    };
  }
  function jv(i) {
    const s = $o(), l = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !nl(s) || !(l != null && l.active) ? null : { mode: h.gizmoMode, transform: rd(l) };
  }
  function Nu(i) {
    return i * 0.2;
  }
  function fh() {
    return { center: Qi().position, radius: Nu(Rr()) };
  }
  function Hv(i, s) {
    const { yaw_deg: l, pitch_deg: f } = wb(i.position, s);
    return { ...i, yaw_deg: l, pitch_deg: f };
  }
  function ur() {
    return Dr() && h.selectedId === Wl;
  }
  function Gv(i) {
    const s = EN(FN(_, dl())), l = s.length ? [{ segments: s, color: xE }] : [];
    if (!cr()) return l;
    const f = ur() ? w0 : wE;
    return [...l, { segments: Tg(Qi(), Nu(i)), color: f }];
  }
  function Kv() {
    return !cr() || !ur() || r ? null : { mode: h.gizmoMode === "rotate" ? "rotate" : "translate", transform: rd({ ...Qi(), scale: 1 }) };
  }
  function Wv(i, s) {
    var p;
    const l = (p = Qn().space) == null ? void 0 : p.gizmo;
    if (ur() && l && to("hover", s) !== null && to("down", s))
      return h.interaction = { kind: "world_gizmo", camera: !0, mode: l.mode, start: l.transform, base: Qi(), changed: !1 }, E.setPointerCapture(i.pointerId), ht(s), !0;
    const f = Tg(Qi(), Nu(Rr()));
    return ON(Yo(), f, s, E.width, E.height) ? (ur() || (Dn($e()), Re(), He(), le()), h.interaction = { kind: "world_select" }, E.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Bv() {
    if (!ne.backgroundDirty && ne.backgroundWasVisible) return;
    const { background: i, layers: s, space: l } = Qn(), f = te.width, p = te.height, m = Fe.render({
      width: f,
      height: p,
      camera: l ? hf(wn(), f, p, l.sphere) : Xp(),
      background: i,
      layers: s,
      space: l
    }), g = te.getContext("2d");
    g.clearRect(0, 0, f, p), !i && !s.length && !l ? (g.fillStyle = "#070707", g.fillRect(0, 0, f, p)) : m && g.drawImage(m.canvas, m.x, m.y, m.width, m.height, 0, 0, f, p), ne.backgroundWasVisible = !!m, ne.backgroundDirty = !1, rn = null, Tr(), (h.worldSelectedId || ur() || _e) && He();
  }
  function dh(i) {
    const { content: s } = Qn();
    return !s || !i.position ? Ns(i) : bb(Ns(i), i.position, Kh(), s.sphere);
  }
  function ph(i, s, l, f) {
    const { background: p, layers: m, content: g } = Qn();
    if (!p && !m.length && !g) return !1;
    const w = g && l.position ? g : null, S = Fe.render({ width: s.w, height: s.h, camera: dh(l), background: p, layers: m, space: w, owner: f });
    return S ? (i.drawImage(S.canvas, S.x, S.y, S.width, S.height, s.x, s.y, s.w, s.h), !0) : !1;
  }
  function Uv(i) {
    const s = Qn(), l = JSON.stringify([i, te.width, te.height, Vg(s)]);
    if (l === rn) return;
    const f = Fe.renderUnwrap({ width: i.w, height: i.h, ...s }), p = te.getContext("2d");
    p.fillStyle = "#070707", p.fillRect(0, 0, te.width, te.height), f && p.drawImage(f.canvas, f.x, f.y, f.width, f.height, i.x, i.y, i.w, i.h), rn = f ? l : null, ne.backgroundWasVisible = !1;
  }
  function Yv(i = !1) {
    const s = E.width, l = E.height, f = Ei();
    if ($.globalAlpha = 1, $.lineWidth = 1, i || $.clearRect(0, 0, s, l), fl(), Uv(f), h.showGrid && !h.fullscreen) {
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
  function hh(i, s, l = 1) {
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
  function Xv(i = !1) {
    const s = E.width, l = E.height;
    if (i || $.clearRect(0, 0, s, l), fl(), Bv(), h.showGrid && !h.fullscreen && Qn().space)
      qv();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let g = -89; g <= 89; g += 4) m.push(qn(p, g));
        hh(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let g = -180; g <= 180; g += 4) m.push(qn(g, p));
        hh(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
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
  function qv() {
    const i = hf(wn(), E.width, E.height, Lr()), s = js(i, [0, 0, 0], E.width, E.height);
    s && ($.fillStyle = "rgba(255, 221, 87, 0.9)", $.font = "500 11px Geist, sans-serif", $.textAlign = "center", $.fillText("ERP origin", s.x, s.y - 12));
  }
  function Jv(i, s = null, l = null, f = null) {
    if (h.mode === "frame") {
      const p = s || $e();
      if (!p) return [];
      const m = l || hn(p);
      return A_(i, p, m);
    }
    return Sh(i, f);
  }
  function ll(i, s = null, l = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const g = Sh([i], p);
      return g[0] ? { x: g[0].x, y: g[0].y, z: 1 } : null;
    }
    const m = Go(i);
    return m ? oi(m, s, l, f) : null;
  }
  function Zv(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), f = kr(l, i.layerKind), p = Pi(l, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || au(l, i.layerKind, f), g = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, w = [], S = h.mode === "frame" ? $e() : null, O = S ? hn(S) : null;
    for (const ee of f) {
      const me = (ee == null ? void 0 : ee.geometry) || null, Ge = (me == null ? void 0 : me.geometryKind) === "lasso_fill" ? me == null ? void 0 : me.points : (me == null ? void 0 : me.processedPoints) || (me == null ? void 0 : me.rawPoints) || (me == null ? void 0 : me.points) || [], Be = Jv(Ge, S, O, g).filter((ue) => Number.isFinite(ue == null ? void 0 : ue.x) && Number.isFinite(ue == null ? void 0 : ue.y));
      if (!Be.length) continue;
      const ot = Li(String((ee == null ? void 0 : ee.toolKind) || "pen")), ve = Wn[ot] || Wn[ci];
      w.push({
        points: Be,
        closed: String((me == null ? void 0 : me.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ee == null ? void 0 : ee.size) || 10) * Math.max(0.1, Number((ve == null ? void 0 : ve.sizeScale) ?? 1)) + 10),
        layerKind: String((ee == null ? void 0 : ee.layerKind) || i.layerKind || "paint")
      });
    }
    const M = ll(m, null, S, O, g);
    if (!M) {
      const ee = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ee), ee;
    }
    const D = z1(p).map((ee) => ll(ee, M.x, S, O, g)).filter((ee) => Number.isFinite(ee == null ? void 0 : ee.x) && Number.isFinite(ee == null ? void 0 : ee.y)).map((ee) => ({ x: Number(ee.x || 0), y: Number(ee.y || 0) }));
    if (D.length < 4) {
      const ee = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ee), ee;
    }
    const Y = (ee, me) => ({
      x: (Number((ee == null ? void 0 : ee.x) || 0) + Number((me == null ? void 0 : me.x) || 0)) * 0.5,
      y: (Number((ee == null ? void 0 : ee.y) || 0) + Number((me == null ? void 0 : me.y) || 0)) * 0.5,
      a: ee,
      b: me
    }), H = Y(D[0], D[1]), J = Y(D[1], D[2]), Z = Y(D[2], D[3]), oe = Y(D[3], D[0]), pe = {
      kind: "strokeGroup",
      center: { x: Number(M.x || 0), y: Number(M.y || 0) },
      corners: D,
      edgeMidpoints: [
        { edge: "top", ...H },
        { edge: "right", ...J },
        { edge: "bottom", ...Z },
        { edge: "left", ...oe }
      ],
      rotateStemBase: { x: H.x, y: H.y },
      rotateHandle: { x: H.x, y: H.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return h._strokeGeomCache.set(s, pe), pe;
  }
  function Qv(i, s) {
    const l = h.mode === "frame" ? $e() : null, f = l ? hn(l) : null, p = ch(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, g = ll(p, null, l, f, m), S = Ov(i).map((D) => ll(D, (g == null ? void 0 : g.x) ?? null, l, f, m)).filter((D) => Number.isFinite(D == null ? void 0 : D.x) && Number.isFinite(D == null ? void 0 : D.y));
    if (!Array.isArray(S) || S.length < 4) {
      const D = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(s, D), D;
    }
    const O = S.slice(0, 4).map((D) => ({ x: Number((D == null ? void 0 : D.x) || 0), y: Number((D == null ? void 0 : D.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: O.reduce((D, Y) => D + Number(Y.x || 0), 0) / O.length,
        y: O.reduce((D, Y) => D + Number(Y.y || 0), 0) / O.length
      },
      corners: O,
      visible: !0
    };
    return h._strokeGeomCache.set(s, C), C;
  }
  function oi(i, s = null, l = null, f = null, p = {}) {
    if (h.mode === "frame") {
      const M = l || $e(), C = f || hn(M);
      if (!M || !C) return null;
      const D = M ? Wa(M, i) : null;
      return D ? {
        x: Number(C.x || 0) + Number(D.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(D.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Mu(i, s);
    const m = 1e-4, g = bu().project(i, m);
    if (!Number.isFinite(g.z) || g.z <= m && !(p != null && p.clipBehind)) return null;
    const w = E.width, S = E.height, O = Math.max(w, S) * 2;
    return {
      x: Q(g.x, -O, w + O),
      y: Q(g.y, -O, S + O),
      z: Math.max(g.z, m),
      rawZ: g.z,
      clipped: g.z <= m
    };
  }
  function e_(i, s = []) {
    if (h.mode !== "pano" || St(i)) return 1;
    const l = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return l.length ? DE(0.035, 0.2, Math.min(...l)) : 1;
  }
  function t_(i) {
    if (Zn(i) && !il(i)) return { visible: !1 };
    const s = an(i), l = qn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? $e() : null, p = f ? hn(f) : null, m = h.mode === "pano" && (St(i) || pn(i)), g = m ? { clipBehind: !0 } : null, w = oi(l, null, f, p, g);
    if (!w) return { visible: !1 };
    const S = sl(i), M = sh(i).map((ye) => oi(ye, w.x, f, p, g)).filter((ye) => Number.isFinite(ye == null ? void 0 : ye.x) && Number.isFinite(ye == null ? void 0 : ye.y));
    if (M.length < 4) return { visible: !1 };
    const C = Fi(S, 0, S.tanY), D = Fi(S, 0, S.tanY + Math.max(S.tanY * 0.43, 0.053)), Y = oi(C, w.x, f, p, g);
    if (!Y) return { visible: !1 };
    const H = oi(D, (Y == null ? void 0 : Y.x) ?? w.x, f, p, g), J = ((H == null ? void 0 : H.x) ?? Y.x) - Y.x, Z = ((H == null ? void 0 : H.y) ?? Y.y) - Y.y, oe = Math.hypot(J, Z) || 1, pe = {
      x: Y.x + J / oe * 30,
      y: Y.y + Z / oe * 30
    }, ee = oi(Fi(S, 0, S.tanY), w.x, f, p, g), me = oi(Fi(S, S.tanX, 0), w.x, f, p, g), Ge = oi(Fi(S, 0, -S.tanY), w.x, f, p, g), Be = oi(Fi(S, -S.tanX, 0), w.x, f, p, g);
    if (!ee || !me || !Ge || !Be) return { visible: !1 };
    const ot = [
      w,
      ...M,
      Y,
      H,
      ee,
      me,
      Ge,
      Be
    ];
    if (m && !ot.some((ye) => Number((ye == null ? void 0 : ye.rawZ) ?? (ye == null ? void 0 : ye.z)) > 1e-4)) return { visible: !1 };
    const ve = e_(i, ot), ue = [
      {
        edge: "top",
        x: ee.x,
        y: ee.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: me.x,
        y: me.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: Ge.x,
        y: Ge.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: Be.x,
        y: Be.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: w.x, y: w.y },
      corners: M.map((ye) => ({ x: ye.x, y: ye.y })),
      edgeMidpoints: ue,
      rotateStemBase: { x: Y.x, y: Y.y },
      rotateHandle: pe,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: ve,
      visible: !0
    };
  }
  function Qt(i) {
    if (W && pn(i) && cr()) return { visible: !1 };
    if (!rl() && (sn(i) || vn(i))) return { visible: !1 };
    if (sn(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = B1(p, i.layerKind), g = h._strokeGeomCache.get(m);
      return g || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Zv(i, m));
    }
    if (vn(i)) {
      const p = Ev(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), Qv(i, p));
    }
    const s = Fv(i), l = h._strokeGeomCache.get(s);
    if (l) return l;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = t_(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function cl(i, s, l, f = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const g = m / l;
      let w = 0, S = 0;
      s === 0 ? (w = g, S = 0) : s === 1 ? (w = 1, S = g) : s === 2 ? (w = 1 - g, S = 1) : (w = 0, S = 1 - g);
      const O = lh(i, w, S), M = h.mode === "unwrap" ? Mu(O, f) : $a(O);
      M && p.push(M);
    }
    return p;
  }
  function n_(i, s) {
    const l = an(i), f = qn(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), p = h.mode === "unwrap" ? Mu(f) : null, m = p ? p.x : null, g = h.mode === "pano" ? 28 : 20, w = [
      cl(i, 0, g, m),
      cl(i, 1, g, m),
      cl(i, 2, g, m),
      cl(i, 3, g, m)
    ];
    _p($, w, { selected: s });
  }
  function r_() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], s = [...Js()].sort((l, f) => Number(l.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function Pu() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...Js()].sort((l, f) => Number(f.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function ul(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function mh(i, s, l) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = Q(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = $.globalAlpha;
    $.globalAlpha = m * p;
    const g = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", w = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", S = s ? 3.2 : 2.6;
    ul($, f), $.fillStyle = w, $.fill(), $.strokeStyle = g, $.lineWidth = S, $.stroke(), $.save(), $.strokeStyle = g, $.lineWidth = s ? 3.2 : 2.6, $.lineCap = "round";
    const O = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], M = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = s ? 12 : 9;
    O.forEach((D) => {
      const H = O.find((pe) => (pe == null ? void 0 : pe.edge) === M[D == null ? void 0 : D.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, J = H.x - D.x, Z = H.y - D.y, oe = Math.hypot(J, Z) || 1;
      $.beginPath(), $.moveTo(D.x, D.y), $.lineTo(D.x + J / oe * C, D.y + Z / oe * C), $.stroke();
    }), $.restore(), $.globalAlpha = m;
  }
  function i_(i, s, l, f) {
    const p = Q(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (pn(i)) {
      mh(s, l, f);
      return;
    }
    if (St(i)) {
      const g = $.globalAlpha;
      $.globalAlpha = g * J1(i) * p, h.mode === "frame" ? ($.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", $.lineWidth = l ? 2 : 1, ul($, s.corners), $.stroke()) : n_(i, l), $.globalAlpha = g;
      return;
    }
    const m = $.globalAlpha;
    $.globalAlpha = m * p, $.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", ul($, s.corners), $.fill(), $.strokeStyle = l ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", $.lineWidth = l ? 2.8 : 1.9, ul($, s.corners), $.stroke(), $.globalAlpha = m;
  }
  function gh(i, s, l) {
    if (St(i)) {
      u1($, s, { accent: l });
      return;
    }
    const f = !(pn(i) && qi());
    $.fillStyle = l, f && s.corners.forEach((p) => {
      $.beginPath(), $.arc(p.x, p.y, 6.5, 0, Math.PI * 2), $.fill();
    }), f && pn(i) && ($.strokeStyle = l, $.lineCap = "round", $.lineWidth = 4, s.edgeMidpoints.forEach((p) => {
      var C, D, Y, H;
      const m = (((C = p.b) == null ? void 0 : C.x) ?? p.x) - (((D = p.a) == null ? void 0 : D.x) ?? p.x), g = (((Y = p.b) == null ? void 0 : Y.y) ?? p.y) - (((H = p.a) == null ? void 0 : H.y) ?? p.y), w = Math.hypot(m, g) || 1, S = m / w, O = g / w, M = 10;
      $.beginPath(), $.moveTo(p.x - S * M, p.y - O * M), $.lineTo(p.x + S * M, p.y + O * M), $.stroke();
    }), $.lineCap = "butt"), sn(i) || ($.strokeStyle = "rgba(250, 250, 250, 0.9)", $.lineWidth = 1.8, $.beginPath(), $.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), $.lineTo(s.rotateHandle.x, s.rotateHandle.y), $.stroke(), $.fillStyle = l, $.beginPath(), $.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), $.fill());
  }
  function o_() {
    var m;
    const i = h.mode === "frame" ? [] : lr(), s = i.length > 1, l = V ? r_() : ri(), f = l.map((g) => `${String((g == null ? void 0 : g.id) || "")}:${pn(g) ? "frame" : Number((g == null ? void 0 : g.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== l || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: l,
      orderKey: f,
      sorted: [...l]
    });
    const p = h._sortedItemsCache.sorted;
    for (const g of p) {
      const w = h.mode !== "frame" && !s && Lp(g);
      if (h.mode === "frame" && !w) continue;
      const S = St(g), O = pn(g), M = _n(g);
      if (!S && !O || Zn(g) && !il(g)) continue;
      const C = Qt(g);
      if (t !== "stickers" && !C.visible)
        continue;
      const D = Q(Number((C == null ? void 0 : C.visibilityAlpha) ?? 1), 0, 1);
      if (D <= 0.01) continue;
      const Y = O && V && h.mode === "pano" ? Q(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if ($.save(), $.globalAlpha *= Y, i_(g, C, w, M), w && C.visible) {
        const H = M ? "#ff4d4f" : S && Bt(g) ? "#f59e0b" : "#0070f3", J = $.globalAlpha;
        $.globalAlpha = J * D, gh(g, C, H), $.globalAlpha = J;
      }
      $.restore();
    }
    if (V && h.mode === "pano" && !$e() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const g = h.cutoutPanoFrameVisual, w = Q(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      $.save(), $.globalAlpha *= w, mh(g.geom, g.selected, g.locked), g.selected && gh(
        g.item,
        g.geom,
        g.locked ? "#ff4d4f" : "#0070f3"
      ), $.restore();
    }
    if (s) {
      const g = Ta(i);
      if (g != null && g.visible) {
        const w = su(i) ? "#ff4d4f" : "#0070f3";
        $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.95)", $.lineWidth = 2, $.setLineDash([6, 4]), $.beginPath(), $.moveTo(g.corners[0].x, g.corners[0].y);
        for (let S = 1; S < g.corners.length; S += 1) $.lineTo(g.corners[S].x, g.corners[S].y);
        $.closePath(), $.stroke(), $.setLineDash([]), $.fillStyle = w, g.corners.forEach((S) => {
          $.beginPath(), $.arc(S.x, S.y, 6.5, 0, Math.PI * 2), $.fill();
        }), $.restore();
      }
    } else
      i.forEach((g) => {
        if (!sn(g) && !vn(g)) return;
        const w = Qt(g);
        if (!(w != null && w.visible)) return;
        const S = _n(g) ? "#ff4d4f" : "#0070f3";
        $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.95)", $.lineWidth = 2, $.setLineDash([6, 4]), $.beginPath(), $.moveTo(w.corners[0].x, w.corners[0].y);
        for (let O = 1; O < w.corners.length; O += 1) $.lineTo(w.corners[O].x, w.corners[O].y);
        $.closePath(), $.stroke(), $.setLineDash([]), $.fillStyle = S, w.corners.forEach((O) => {
          $.beginPath(), $.arc(O.x, O.y, 6.5, 0, Math.PI * 2), $.fill();
        }), $.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const g = tm(h.interaction.start, h.interaction.current);
      $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.9)", $.fillStyle = "rgba(255, 255, 255, 0.08)", $.lineWidth = 1, $.setLineDash([5, 4]), $.beginPath(), $.rect(g.x0, g.y0, g.x1 - g.x0, g.y1 - g.y0), $.fill(), $.stroke(), $.restore();
    }
  }
  function yh(i, s = !1) {
    const l = Q(xo(i), 0.05, 20), f = s ? 320 : 220;
    return l >= 1 ? { width: f, height: Math.max(1, Math.round(f / l)) } : { width: Math.max(1, Math.round(f * l)), height: f };
  }
  function a_(i) {
    if (!Ae || !i) return !1;
    const s = Ae.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || Ae.clientWidth || 0)), f = Math.round(Number(s.clientHeight || Ae.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function s_() {
    if (h.outputPreviewRect = null, A.outputPreviewToggle.visible = h.mode !== "frame" && !!$e(), F && (A.outputPreviewToggle.visible = !1), !V || !A.cameraPreview) return;
    if (h.mode === "frame" || !Yp()) {
      A.cameraPreview.visible = !1, A.cameraPreview.settled = !1;
      return;
    }
    const i = $e();
    A.cameraPreview.visible = !0, A.cameraPreview.expanded = !!h.outputPreviewExpanded;
    const s = Se == null ? void 0 : Se.getContext("2d");
    if (!i || !s) {
      A.cameraPreview.ready = !1, A.cameraPreview.settled = !1, A.cameraPreview.width = 220, A.cameraPreview.height = 132, A.cameraPreview.label = i ? "Preview unavailable" : "Add Frame to preview", s == null || s.clearRect(0, 0, Se.width, Se.height), Ft = null;
      return;
    }
    const l = yh(i, !!h.outputPreviewExpanded);
    A.cameraPreview.width = l.width, A.cameraPreview.height = l.height;
    const f = window.devicePixelRatio || 1, p = { x: 0, y: 0, w: Math.max(1, Math.round(l.width * f)), h: Math.max(1, Math.round(l.height * f)) };
    (Se.width !== p.w || Se.height !== p.h) && (Se.width = p.w, Se.height = p.h);
    const { content: m } = Qn(), g = m && [i.position, Fe.contentKey(), m.stickers.map((M) => [M.id, M.revision, M.opacity, M.position, M.quaternion, M.width])], w = JSON.stringify([p, ki(i), Vg(Qn()), g]);
    let S = w === Ft;
    if (S || (s.clearRect(0, 0, p.w, p.h), S = ph(s, p, i, "camera_preview"), Ft = S ? w : null), !S) {
      A.cameraPreview.ready = !1, A.cameraPreview.label = xu() ? "Loading preview" : "Connect ERP image", A.cameraPreview.settled = !1;
      return;
    }
    const O = a_(l);
    A.cameraPreview.ready = !0, A.cameraPreview.label = O ? "" : "Loading preview", A.cameraPreview.settled = O && ne.pendingStableLayoutFrames <= 0 && ne.hasPresentedFrame;
  }
  function Au(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), f = Number(s.y || 0);
    return lh(i, l, f);
  }
  function Go(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(l);
    return Zc(f * Math.sin(s), Math.sin(l), f * Math.cos(s));
  }
  function l_(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function c_(i, s, l, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Mn(i, "widthScale", 1),
      pressureLike: Mn(i, "pressureLike", 1)
    }, ...f, u: s, v: l };
  }
  function u_(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Cu(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let J = null;
      i.forEach((Z) => {
        const oe = Number((Z == null ? void 0 : Z.u) || 0), pe = Number((Z == null ? void 0 : Z.v) || 0), ee = (oe % 1 + 1) % 1, me = J == null ? ee : J + sr(ee, (J % 1 + 1) % 1);
        p.set(Z, { x: me, y: pe }), J = me;
      });
    }
    const m = (J) => !J || typeof J != "object" ? { x: 0, y: 0 } : p.get(J) || l_(J), g = (J, Z, oe, pe = {}) => {
      const ee = f ? (Number(Z) % 1 + 1) % 1 : Number(Z), me = c_(J, ee, oe, pe);
      return p.set(me, { x: Number(Z), y: Number(oe) }), me;
    }, w = (J, Z, oe) => {
      const pe = m(J), ee = m(Z);
      return g(J, pr(pe.x, ee.x, oe), pr(pe.y, ee.y, oe), {
        t: pr(Number((J == null ? void 0 : J.t) || 0), Number((Z == null ? void 0 : Z.t) || 0), oe),
        widthScale: pr(Mn(J, "widthScale", 1), Mn(Z, "widthScale", 1), oe),
        pressureLike: pr(Mn(J, "pressureLike", 1), Mn(Z, "pressureLike", 1), oe)
      });
    };
    if (i.length === 1) {
      const J = m(i[0]);
      return [g(i[0], J.x, J.y)];
    }
    const S = u_(s, l), O = (J, Z) => {
      const oe = [0];
      for (let ue = 1; ue < J.length; ue += 1) {
        const ye = m(J[ue - 1]), Le = m(J[ue]);
        oe.push(oe[ue - 1] + Math.hypot(Le.x - ye.x, Le.y - ye.y));
      }
      const pe = oe[oe.length - 1] || 0;
      if (pe <= 1e-8) {
        const ue = J[0], ye = m(ue);
        return [g(ue, ye.x, ye.y)];
      }
      const ee = [];
      let me = 0;
      for (let ue = 0; ue <= pe + 1e-9; ue += Z) {
        for (; me < oe.length - 2 && oe[me + 1] < ue; ) me += 1;
        const ye = oe[me], Le = oe[me + 1], ze = Math.max(1e-8, Le - ye);
        ee.push(w(J[me], J[me + 1], Q((ue - ye) / ze, 0, 1)));
      }
      const Ge = J[J.length - 1], Be = m(Ge), ot = ee[ee.length - 1], ve = ot ? m(ot) : null;
      return (!ve || Math.hypot(ve.x - Be.x, ve.y - Be.y) > Z * 0.35) && ee.push(g(Ge, Be.x, Be.y)), ee;
    }, M = (J) => {
      if (!Array.isArray(J) || J.length < 3) return J ? J.slice() : [];
      const Z = m(J[0]), oe = [g(J[0], Z.x, Z.y)];
      for (let me = 0; me < J.length - 1; me += 1) {
        const Ge = J[me], Be = J[me + 1], ot = m(Ge), ve = m(Be), ue = g(
          Ge,
          ot.x * 0.75 + ve.x * 0.25,
          ot.y * 0.75 + ve.y * 0.25,
          {
            t: Number(Ge.t || 0) * 0.75 + Number(Be.t || 0) * 0.25,
            widthScale: Mn(Ge, "widthScale", 1) * 0.75 + Mn(Be, "widthScale", 1) * 0.25,
            pressureLike: Mn(Ge, "pressureLike", 1) * 0.75 + Mn(Be, "pressureLike", 1) * 0.25
          }
        ), ye = g(
          Ge,
          ot.x * 0.25 + ve.x * 0.75,
          ot.y * 0.25 + ve.y * 0.75,
          {
            t: Number(Ge.t || 0) * 0.25 + Number(Be.t || 0) * 0.75,
            widthScale: Mn(Ge, "widthScale", 1) * 0.25 + Mn(Be, "widthScale", 1) * 0.75,
            pressureLike: Mn(Ge, "pressureLike", 1) * 0.25 + Mn(Be, "pressureLike", 1) * 0.75
          }
        );
        oe.push(ue, ye);
      }
      const pe = J[J.length - 1], ee = m(pe);
      return oe.push(g(pe, ee.x, ee.y)), oe;
    }, C = O(i, S);
    if (C.length < 3) return C;
    const D = l ? 2 : 1;
    let Y = C.slice();
    for (let J = 0; J < D; J += 1) Y = M(Y);
    return O(Y, Math.max(S * 0.75, 55e-5));
  }
  function Mn(i, s, l = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : l;
  }
  function f_(i) {
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
  function bh() {
    const i = iu(), s = Ga();
    return i ? `${s}:${i}` : s;
  }
  function d_() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function p_() {
    h.paintCompositeRevision += 1;
  }
  function h_() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function vh() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, _), h.paintEngineRevisionKey = Ha();
  }
  function _h() {
    _.painting_layer !== null && (_.painting_layer = null), ol = "";
  }
  function Rt() {
    h_(), ne.backgroundDirty = !0, ne.dirty = !0;
  }
  function Mr({ rebuildPaintEngine: i = !1 } = {}) {
    _h(), d_(), Rt(), i && vh();
  }
  function Ko() {
    _h(), p_(), Rt();
  }
  function fl() {
    var f;
    const i = Ka(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = Bf(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
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
  function er() {
    return Ka();
  }
  function m_(i, s, l, f, p = null) {
    const m = f_(i), g = Mn(s, "widthScale", 1) * Mn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * g) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * jr) * l * g) : Math.max(0.5, m.value / (2 * Math.PI) * l * g) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * g);
  }
  function g_(i, s, l = {}) {
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
  function y_(i, s, l) {
    const f = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function b_(i, s, l, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), g_(i, l, p);
    const g = (w) => y_(i, w, m);
    if (s.length === 1) {
      g(s[0]), i.restore();
      return;
    }
    for (let w = 0; w < s.length - 1; w += 1) {
      const S = s[w], O = s[w + 1];
      if (!S || !O) continue;
      const M = Number(S.x || 0), C = Number(S.y || 0), D = Number(O.x || 0), Y = Number(O.y || 0), H = Math.max(0.5, Math.min(m, Number(S.radiusPx || 0.5))), J = Math.max(0.5, Math.min(m, Number(O.radiusPx || 0.5)));
      if (!Number.isFinite(M) || !Number.isFinite(C) || !Number.isFinite(D) || !Number.isFinite(Y) || !Number.isFinite(H) || !Number.isFinite(J)) continue;
      const Z = D - M, oe = Y - C, pe = Math.hypot(Z, oe);
      if (!Number.isFinite(pe) || pe < 1e-6) {
        g(S);
        continue;
      }
      if (pe > Math.max(f.w, f.h) * 0.5) continue;
      const ee = Math.max(0.5, Math.min(H, J)), me = Math.max(0.35, Math.min(ee * 0.4, 2.25)), Ge = Math.max(1, Math.ceil(pe / me));
      for (let Be = 0; Be <= Ge; Be += 1) {
        const ot = Be / Ge;
        g({
          x: pr(M, D, ot),
          y: pr(C, Y, ot),
          radiusPx: pr(H, J, ot)
        });
      }
    }
    g(s[s.length - 1]), i.restore();
  }
  function v_(i, s, l, f) {
    b_(i, s, l, f, { preview: !1 });
  }
  function __(i, s, l, f, p) {
    var w, S, O, M;
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
      i.lineTo(Number(((O = s[C]) == null ? void 0 : O[m]) || 0) * f.w, Number(((M = s[C]) == null ? void 0 : M[g]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function wh(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function w_(i, s) {
    const l = wh(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: m_(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function xh(i, s, l = null) {
    var w, S, O, M;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = l || { w: Number(((w = i.canvas) == null ? void 0 : w.width) || 0), h: Number(((S = i.canvas) == null ? void 0 : S.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((O = s == null ? void 0 : s.geometry) == null ? void 0 : O.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((M = s == null ? void 0 : s.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill")
      return __(i.ctx, wh(p), p, f), !0;
    const g = w_(p, f);
    return g.length ? (v_(i.ctx, g, p, f), !0) : !1;
  }
  function x_(i, s, l, f = 8) {
    const p = new Uint8Array(s * l), m = [], g = new Int32Array(s * l), w = new Int32Array(s * l);
    for (let S = 0; S < l; S += 1)
      for (let O = 0; O < s; O += 1) {
        const M = S * s + O;
        if (p[M] || i[M] <= f) continue;
        let C = 0, D = 0;
        g[D] = O, w[D] = S, D += 1, p[M] = 1;
        const Y = [];
        let H = O, J = S, Z = O, oe = S;
        for (; C < D; ) {
          const pe = g[C], ee = w[C];
          C += 1, Y.push({ x: pe, y: ee }), pe < H && (H = pe), ee < J && (J = ee), pe > Z && (Z = pe), ee > oe && (oe = ee);
          const me = [
            [(pe - 1 + s) % s, ee],
            [(pe + 1) % s, ee],
            [pe, ee - 1],
            [pe, ee + 1]
          ];
          for (const [Ge, Be] of me) {
            if (Be < 0 || Be >= l) continue;
            const ot = Be * s + Ge;
            p[ot] || i[ot] <= f || (p[ot] = 1, g[D] = Ge, w[D] = Be, D += 1);
          }
        }
        m.push({ pixels: Y, minX: H, minY: J, maxX: Z, maxY: oe });
      }
    return m;
  }
  function S_(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((S) => Number((S == null ? void 0 : S.x) || 0)).filter((S) => Number.isFinite(S)))].sort((S, O) => S - O);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let f = -1, p = 0;
    for (let S = 0; S < l.length; S += 1) {
      const O = l[S], C = (S === l.length - 1 ? l[0] + s : l[S + 1]) - O - 1;
      C > f && (f = C, p = S);
    }
    const m = (l[(p + 1) % l.length] + s) % s;
    let g = 1 / 0, w = -1 / 0;
    for (const S of l) {
      const O = (S - m + s) % s;
      g = Math.min(g, O), w = Math.max(w, O);
    }
    return {
      startX: m,
      widthPx: Math.max(1, w - g + 1)
    };
  }
  function k_(i, s, l = {}) {
    var O;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (O = i == null ? void 0 : i.getContext) == null ? void 0 : O.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const g = m.getImageData(0, 0, f, p), w = new Uint8Array(f * p);
    for (let M = 0; M < w.length; M += 1) w[M] = g.data[M * 4 + 3];
    return x_(w, f, p, 8).map((M, C) => {
      const D = S_(M, f);
      if (!D) return null;
      const Y = Number(D.widthPx || 0), H = M.maxY - M.minY + 1, J = Number(D.startX || 0), Z = document.createElement("canvas");
      Z.width = Y, Z.height = H;
      const oe = Z.getContext("2d");
      if (!oe) return null;
      const pe = oe.createImageData(Y, H);
      return M.pixels.forEach(({ x: ee, y: me }) => {
        const Ge = (me * f + ee) * 4, Be = (Number(ee || 0) - J + f) % f, ot = ((me - M.minY) * Y + Be) * 4;
        pe.data[ot + 0] = g.data[Ge + 0], pe.data[ot + 1] = g.data[Ge + 1], pe.data[ot + 2] = g.data[Ge + 2], pe.data[ot + 3] = g.data[Ge + 3];
      }), oe.putImageData(pe, 0, 0), {
        id: na("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + C * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: M.minY / p,
          u1: Y / f,
          v1: (M.maxY + 1) / p
        },
        rasterDataUrl: Z.toDataURL("image/png"),
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
    const l = sl(i), f = Of(s, l.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = Of(s, l.right) / f, m = Of(s, l.up) / f;
    return {
      x: (p / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function M_(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const l = Ei();
      return i.map((f) => ({
        x: l.x + Number(f.u || 0) * l.w,
        y: l.y + Number(f.v || 0) * l.h
      }));
    }
    const s = i.map((l) => $a(Go(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Sh(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const f = Ei();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, g = s == null ? m : Number(s || 0) + sr(m, s);
        return {
          x: f.x + g * f.w,
          y: f.y + Number(p.v || 0) * f.h
        };
      });
    }
    const l = i.map((f) => $a(Go(f))).filter(Boolean);
    return l.every((f) => Number(f.z || 0) > 0) ? l.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function N_(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l], p = i[(l + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function P_(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Go(p), g = Wa(s, m);
      if (!g) return [];
      f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return N_(f, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? f : [];
  }
  function A_(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Go(p), g = Wa(s, m);
      g && f.push({
        x: Number(l.x || 0) + Number(g.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(g.y || 0) * Number(l.h || 0)
      });
    }
    return f;
  }
  function C_() {
    const i = $e(), s = ml(i);
    if (!i || !s) return !1;
    const l = { x: s.x, y: s.y, w: s.w, h: s.h }, { rect: f, shot: p } = Lg(i, s, { width: E.width, height: E.height }), m = I_(l);
    return $.save(), $.fillStyle = "#0a0a0a", $.fillRect(0, 0, E.width, E.height), ph($, f, p) || ($.fillStyle = "rgba(255, 255, 255, 0.03)", $.fillRect(f.x, f.y, f.w, f.h)), $.restore(), $.save(), $.fillStyle = "rgba(0, 0, 0, 0.58)", $.beginPath(), $.rect(0, 0, E.width, E.height), $.roundRect(l.x, l.y, l.w, l.h, m), $.fill("evenodd"), $.restore(), $.save(), $.strokeStyle = w0, $.globalAlpha = 0.62, $.lineWidth = 2, $.beginPath(), $.roundRect(l.x + 1, l.y + 1, l.w - 2, l.h - 2, Math.max(0, m - 1)), $.stroke(), $.restore(), !0;
  }
  function I_(i) {
    const s = Math.max(1e-6, Number(ne.frameCanvasScale || 1));
    return Math.min(Oo * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function ai() {
    var s;
    const i = h.mode === "frame" ? $e() : null;
    A.frameRollKnob.visible = !!i && !r && i.locked !== !0, A.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), A.frameRollKnob.displayValue = ta(A.frameRollKnob.rollDeg), A.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", A.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function O_() {
    var S, O;
    if (((S = h.interaction) == null ? void 0 : S.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (O = i == null ? void 0 : i.geometry) == null ? void 0 : O.points;
    let l;
    if (h.mode === "frame") {
      const M = $e(), C = hn(M);
      l = P_(s, M, C);
    } else
      l = M_(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), g = Math.round(Number(p.g || 0) * 255), w = Math.round(Number(p.b || 0) * 255);
    $.save(), $.beginPath(), $.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let M = 1; M < l.length; M++) $.lineTo(Number(l[M].x || 0), Number(l[M].y || 0));
    $.closePath(), f ? ($.lineWidth = 2, $.setLineDash([6, 6]), $.lineDashOffset = 0, $.strokeStyle = "rgba(0,0,0,0.96)", $.stroke(), $.lineDashOffset = -6, $.strokeStyle = "rgba(255,255,255,0.96)", $.stroke(), $.setLineDash([]), $.lineDashOffset = 0) : ($.lineWidth = 1.5, $.setLineDash([6, 4]), $.strokeStyle = `rgba(${m},${g},${w},1)`, $.stroke(), $.setLineDash([])), $.restore();
  }
  function E_() {
    const i = h.frameRollOverlayVisual, s = Q(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = hn(i.shot);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * jr, m = Math.hypot(l.w, l.h) * 0.55, g = Math.cos(p) * m, w = Math.sin(p) * m;
    $.save(), $.globalAlpha *= s, $.beginPath(), $.rect(l.x, l.y, l.w, l.h), $.clip(), $.translate(f.x, f.y), $.rotate(p);
    const S = Math.max(12, Math.min(l.w, l.h) / 6);
    $.beginPath();
    for (let O = -m; O <= m; O += S)
      $.moveTo(O, -m), $.lineTo(O, m);
    for (let O = -m; O <= m; O += S)
      $.moveTo(-m, O), $.lineTo(m, O);
    $.lineWidth = 1, $.strokeStyle = "rgba(255, 255, 255, 0.22)", $.stroke(), $.setTransform(1, 0, 0, 1, 0, 0), $.beginPath(), $.moveTo(f.x - g, f.y - w), $.lineTo(f.x + g, f.y + w), $.lineWidth = 1.5, $.setLineDash([8, 6]), $.strokeStyle = "rgba(255, 255, 255, 0.92)", $.shadowColor = "rgba(0, 0, 0, 0.8)", $.shadowBlur = 3, $.stroke(), $.setLineDash([]), $.restore();
  }
  function F_() {
    return !V || !$e() || W && cr() || F && !ur() ? 0 : ME;
  }
  function T_() {
    const i = Q(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || !V || h.mode !== "pano") return;
    const s = $e(), l = s ? Qt(s) : null, f = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((g) => ({ x: Number(g.x || 0), y: Number(g.y || 0) })) : null;
    l != null && l.visible && f && (h.cutoutPanoDimCorners = f), s && (l != null && l.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: Lp(s),
      locked: _n(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if ($.save(), $.fillStyle = `rgba(0, 0, 0, ${i})`, $.beginPath(), $.rect(0, 0, E.width, E.height), m.length >= 4) {
      $.moveTo(m[0].x, m[0].y);
      for (let g = 1; g < 4; g += 1) $.lineTo(m[g].x, m[g].y);
      $.closePath();
    }
    $.fill("evenodd"), $.restore();
  }
  function kh() {
    et = null, h.mode === "frame" ? (ne.frameSafeRect = yw(), C_()) : h.mode === "unwrap" ? Yv(!1) : Xv(!1), T_(), V && s_(), o_(), ai(), O_(), E_(), A.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && He(), ne.hasPresentedFrame || (ne.hasPresentedFrame = !0, te.style.opacity = "1"), V && A.cameraPreview && (A.cameraPreview.settled = ne.pendingStableLayoutFrames <= 0 && ne.hasPresentedFrame && h.mode !== "frame");
    const i = Iv();
    A.stageStatus = i.status, A.stageStatusDetail = i.detail, i.status === Cr ? (re == null || re.removeAttribute("data-stage-ready"), re == null || re.setAttribute("data-stage-loading-kind", i.detail)) : (re == null || re.setAttribute("data-stage-ready", ""), re == null || re.removeAttribute("data-stage-loading-kind"));
  }
  function D_(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function L_() {
    e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = W1();
  }
  function le(i = {}) {
    var w, S, O, M, C, D, Y, H, J;
    const s = !!i.localOnly, l = i.externalSync === !0, f = String(i.cause || ""), p = String(((w = h.interaction) == null ? void 0 : w.kind) || "");
    (!s || p === "view" || p === "pan_frame" || D_() || !!h.viewTransition || f === "mode" || f === "frame_view" || f === "cutout_frame") && (ne.backgroundDirty = !0), s && Ep() && (h.livePaintInteractionRevision += 1, ne.backgroundDirty = !0), (!s || f === "selection" || f === "mode" || f === "cutout_frame") && (mu(), ii()), L_(), l && ((O = (S = e.__panoDomPreview) == null ? void 0 : S.requestDraw) == null || O.call(S), (M = e.setDirtyCanvas) == null || M.call(e, !0, !1)), l && !s && ((D = (C = e.graph) == null ? void 0 : C.setDirtyCanvas) == null || D.call(C, !0, !0), (J = (H = (Y = Or) == null ? void 0 : Y.canvas) == null ? void 0 : H.setDirty) == null || J.call(H, !0, !0)), ne.dirty = !0;
  }
  function Mh() {
    const i = E.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height));
    return E.width !== s || E.height !== l || te.width !== s || te.height !== l ? (E.width = s, E.height = l, te.width = s, te.height = l, ne.backgroundDirty = !0, ne.dirty = !0, V && (ne.pendingStableLayoutFrames = Math.max(Number(ne.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function R_(i = performance.now()) {
    var m;
    fr(), ne.lastTickTs = i;
    const s = h.mode === "frame" && ((m = h.interaction) == null ? void 0 : m.kind) === "roll_frame" ? h.interaction : null;
    s != null && s.shot && (h.frameRollOverlayVisual = { shot: s.shot });
    const l = s ? 1 : 0;
    if (Math.abs(l - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = l, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - l) > 1e-6) {
      const g = Q(
        (i - Number(h.frameRollOverlayStartTs || i)) / NE,
        0,
        1
      );
      h.frameRollOverlayAlpha = pr(
        Number(h.frameRollOverlayFrom || 0),
        l,
        If(g)
      ), g >= 1 && (h.frameRollOverlayAlpha = l, l === 0 && (h.frameRollOverlayVisual = null)), ne.dirty = !0;
    }
    const f = F_();
    if (Math.abs(f - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = f, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - f) > 1e-6) {
      const g = Q(
        (i - Number(h.cutoutPanoDimStartTs || i)) / S0,
        0,
        1
      );
      h.cutoutPanoDimAlpha = pr(
        Number(h.cutoutPanoDimFrom || 0),
        f,
        If(g)
      ), g >= 1 && (h.cutoutPanoDimAlpha = f), g >= 1 && f === 0 && (h.cutoutPanoDimCorners = null), ne.dirty = !0;
    }
    const p = V && $e() ? 1 : 0;
    if (Math.abs(p - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = p, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const g = Q(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / S0,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = pr(
        Number(h.cutoutPanoFrameFrom || 0),
        p,
        If(g)
      ), g >= 1 && (h.cutoutPanoFrameAlpha = p, p === 0 && (h.cutoutPanoFrameVisual = null)), ne.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const g = Math.max(1, Number(h.outputPreviewAnimDurationMs)), w = Q((i - Number(h.outputPreviewAnimStartTs || 0)) / g, 0, 1), O = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? TE(w) : VE(w);
      h.outputPreviewAnim = pr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, O), ne.dirty = !0, w >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if (h.viewTransition) {
      const { view: g, done: w } = BA(h.viewTransition, i);
      if (h.viewPosition = g.position, h.viewYaw = g.yaw_deg, h.viewPitch = g.pitch_deg, h.viewFov = g.hFOV_deg, h.viewDistance = g.distance, w) {
        const { end: S } = h.viewTransition;
        h.viewTransition = null, S && Cp(S), Tr();
      }
      ne.backgroundDirty = !0, ne.dirty = !0;
    }
    if (h.viewInertia.vx = Number(ln.state.inertia.vx || 0), h.viewInertia.vy = Number(ln.state.inertia.vy || 0), h.viewInertia.active = !!ln.state.inertia.active, ln.stepInertia(i) && (h.viewInertia.vx = Number(ln.state.inertia.vx || 0), h.viewInertia.vy = Number(ln.state.inertia.vy || 0), h.viewInertia.active = !!ln.state.inertia.active, ne.backgroundDirty = !0, ne.dirty = !0), ne.pendingStableLayoutFrames > 0 && (ne.pendingStableLayoutFrames -= 1, ne.dirty = !0), ne.dirty) {
      if (ne.pendingStableLayoutFrames > 0)
        return;
      ne.dirty = !1, kh();
    }
  }
  function Nh(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      ne.tickErrorSignature !== l && (ne.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), A.stageStatus = mr, A.stageStatusDetail = "frame", re == null || re.setAttribute("data-stage-ready", ""), re == null || re.removeAttribute("data-stage-loading-kind");
    }
  }
  function Ph(i = performance.now()) {
    ne.running && (Nh(() => R_(i)), ne.running && (ne.rafId = requestAnimationFrame(Ph)));
  }
  function V_() {
    !ne.running || !Mh() || Nh(() => {
      ne.dirty = !1, kh();
    });
  }
  const Ah = new ResizeObserver(V_);
  Ah.observe(E);
  function $_() {
    ne.running = !1, ne.rafId && cancelAnimationFrame(ne.rafId), ne.rafId = 0, Ah.disconnect();
  }
  function Xe() {
    r || (fr(), Sg(_), !(k && _.stickers.some(eu)) && (h.historyController.commitActionGroup(JSON.stringify(_g(_))), Vu()));
  }
  function Iu(i) {
    var p, m;
    if (r) return;
    xn();
    const s = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (Vu(), !s) return;
    const l = $M(_, s), f = (p = _.timeline) == null ? void 0 : p.fps;
    Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, l.state), fr(!1), k && _.timeline.fps !== f && on.seek(Math.round(h.frame * _.timeline.fps / f)), h.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, F && !h.selectedId && _.active.selected_shot_id && (h.selectedId = ((m = $e()) == null ? void 0 : m.id) ?? null), h.selectedIds = h.selectedId ? [h.selectedId] : [], h.selectedId && Xi(), Ya(), ne.backgroundDirty = !0, l.paintingChanged ? Mr() : Rt(), Gn(), Re(), Ln(), le({ cause: "cutout_frame" });
  }
  function Ch() {
    var l, f;
    const i = Array.isArray((l = h.historyController) == null ? void 0 : l.entries) ? h.historyController.entries : [], s = Number((f = h.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Gn() {
    R1();
    const i = XA({
      editor: h,
      swatches: tc,
      paintColorPopOpen: Ie ? !Ie.hidden : !1,
      colorToCss: Hr,
      colorsApproximatelyEqual: nc,
      rgb01ToHsv: Tf,
      hsv01ToRgb: Ff,
      getBrushPresetIdForTool: Li,
      isActiveLassoTool: Q1
    });
    if (Object.assign(A.paintDock, i), ov(), !i.visible) {
      Ie && (Ie.hidden = !0);
      return;
    }
    ut && (clearTimeout(ut), ut = 0), he && (!i.colorEnabled && Ie && !Ie.hidden && (ut = window.setTimeout(() => {
      Ie.hidden = !0, A.paintDock.colorPopOpen = !1, ut = 0;
    }, 170)), Ie && (Ie.style.setProperty("--picker-hue-color", i.pickerHueColor), Ie.style.setProperty("--picker-sat", i.pickerSat), Ie.style.setProperty("--picker-val", i.pickerVal), Ie.style.setProperty("--picker-hue", i.pickerHue)), Ve && (Ve.style.left = i.pickerSvLeft, Ve.style.top = i.pickerSvTop), rt && (rt.style.left = i.pickerHueLeft));
  }
  function Wo() {
    const i = an(V && h.mode === "frame" ? $e() : At());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: pi(i)
    }, Re());
  }
  function Re() {
    if (fr(), si(), o) return;
    _.ui_settings = _.ui_settings || {};
    const i = YA(_.ui_settings);
    if (a) {
      A.sidePanel = qA({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: Xn
      });
      return;
    }
    const s = At(), l = V && h.mode === "frame" ? $e() : null, f = l || s, p = l ? [l] : lr(), m = l ? "shot" : Da();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const Z = an(f);
      h.panelLastValues = {
        yaw_deg: Number(Z.yaw_deg || 0),
        pitch_deg: Number(Z.pitch_deg || 0),
        hFOV_deg: Number(Z.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(Z.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(Z.rot_deg || 0),
        roll_deg: Number(Z.roll_deg || 0),
        aspect_id: pi(Z)
      }, Zn(f) && (h.panelLastValues.opacity = So(f, h.frame).opacity * 100);
    }
    const g = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = m === "stroke" ? null : f, S = $o(), O = W && (m === "shot" || m === "frame") && Ra(), M = S ? qM(S, h.frame) : O ? { ...w, ...UM(_.camera, h.frame), vFOV_deg: w.vFOV_deg } : Zn(w) ? h.panelLastValues : w || g, C = S ? nl(S) : !!w && !_n(w);
    h.panelWasEnabled = C, mu();
    let D = null;
    if (l) {
      const Z = lu({ item: l, kind: "shot", label: "Frame" });
      D = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: Z.label,
        currentIcon: Z.icon || null,
        items: [{
          id: String(l.id || ""),
          label: Z.label,
          icon: Z.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const Z = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (t === "stickers") {
        const ee = $e();
        ee && Z.push({ id: ee.id, label: "Camera", icon: Vp("frame"), item: ee, kind: "frame" }), ri().forEach((me, Ge) => {
          var ue, ye;
          if (!me || Zn(me) && !me.visible) return;
          const Be = P ? td(me) : Bt(me) ? String(me.id || kf) : String(((ye = (ue = _.assets) == null ? void 0 : ue[me.asset_id]) == null ? void 0 : ye.name) || me.asset_id || me.id), ot = `${Ge + 1}. ${Be}${Bt(me) && Vo(me) ? " (hidden)" : ""}`, ve = lu({ item: me, label: ot, kind: "image" });
          Z.push({ id: me.id, label: ve.label, icon: ve.icon, item: me, kind: "image" });
        });
      } else
        Rp().forEach((ee) => {
          if (!(ee != null && ee.item)) return;
          const me = lu(ee);
          Z.push({ id: ee.item.id, label: me.label, icon: me.icon, item: ee.item, kind: ee.kind });
        });
      const oe = (w == null ? void 0 : w.id) || "", pe = S ? { label: td(S), icon: ke.globe } : Z.find((ee) => ee.id === oe) || Z[0];
      D = {
        label: "Selection",
        open: !1,
        disabled: Z.length <= 1,
        currentLabel: pe.label,
        currentIcon: pe.icon || null,
        items: Z.map((ee) => ({
          id: ee.id,
          label: ee.label,
          icon: ee.icon || null,
          active: ee.id === oe
        }))
      };
    }
    const Y = [], H = (Z, oe, pe, ee, me) => {
      const Ge = Q(Number(M[Z] || 0), pe, ee);
      Y.push({
        key: Z,
        label: oe,
        min: pe,
        max: ee,
        step: me,
        value: Ge,
        displayValue: ta(Ge),
        fillPct: Q((Ge - pe) / Math.max(1e-6, ee - pe) * 100, 0, 100),
        enabled: C && !r
      });
    }, J = [];
    if (S) {
      for (const [Z, oe] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const pe = Sf(M[Z]);
        H(Z, oe, -pe, pe, 0.01);
      }
      H("yaw_deg", "Yaw", -180, 180, 0.1), H("pitch_deg", "Pitch", -90, 90, 0.1), H("roll_deg", "Roll", -180, 180, 0.1), H("scale", "Scale", _0, Sf(M.scale), 0.01), H("opacity", "Opacity", 0, 100, 1);
    } else if (p.length > 1)
      J.push(`Selected objects: ${p.length}`), J.push("Multi-selection supports z-order and delete.");
    else {
      const Z = m === "shot" || m === "frame";
      if (O)
        for (const [oe, pe] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const ee = Sf(M[oe]);
          H(oe, pe, -ee, ee, 0.01);
        }
      H("yaw_deg", "Yaw", -180, 180, 0.1), H("pitch_deg", "Pitch", -90, 90, 0.1), H(m === "image" || t === "stickers" && !Z ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), H("hFOV_deg", "H FOV", 1, 179, 0.1), H("vFOV_deg", "V FOV", 1, 179, 0.1), Z && Y.forEach((oe) => {
        oe.enabled = oe.enabled && tC(oe.key, { erp: qi() });
      }), P && !Z && H("opacity", "Opacity", 0, 100, 1);
    }
    A.sidePanel = rC({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: D,
      enabled: C,
      selectedKind: S ? "world" : m,
      selectedItems: p,
      params: Y,
      notes: J,
      uiSettings: i,
      normalizeCoverageValue: Xn
    });
  }
  function si() {
    if (!k || r) return;
    const i = dl(), s = Ke.selection, l = s && Vr(s.owner);
    if (s) {
      const p = l ? Ba(s) : [];
      s.frames = s.frames.filter((m) => p.some((g) => l[g].keyframes.some((w) => w.frame === m))), s.frames.length || (Ke.selection = null);
    }
    const f = _.timeline.fps;
    A.timeline = cC(_, {
      frame: h.frame,
      span: i,
      selection: Ke.selection,
      selectedId: h.worldSelectedId || h.selectedId,
      expanded: Ke.expanded ?? Ih(),
      openRows: Ke.openRows,
      audio: j_() && A.videoTransport.hasAudio ? { muted: Ne.muted } : null,
      playing: on.playing,
      label: `${h.frame}f · ${(h.frame / f).toFixed(2)}s`,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: Pf(e) !== null || jN(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: Zi(),
      cameraHideable: F,
      stickers: !I,
      scene: P && !!cd(e).scene,
      sceneLocked: !!z
    }), A.easing = Ke.selection ? uC(l, Ba(Ke.selection), Ke.selection.frames, Ua(Ke.selection.owner)) : null;
  }
  function Ih() {
    return EM(_, { cameraOnly: I, camera: F });
  }
  function dl(i = null) {
    if (z != null && z.frames) return z.frames;
    const s = _.timeline.fps, l = _.stickers.find(Bt), f = l ? Wp() : null, p = Math.max(
      A.videoTransport.ready ? Math.round(Number(A.videoTransport.duration || 0) * s) : 0,
      f ? Vb(l.clip, s, f.meta) : 0
    );
    return lb(_, { minimum: Math.round(s * 5), frames: p, openClip: i, camera: I && !z || F });
  }
  function Vr(i) {
    return i === "camera" ? Zi() ? _.camera : null : i === "scene" ? P ? _.scene : null : _.stickers.find((s) => s.id === i) || null;
  }
  function Ba(i) {
    return i.lane ? [i.lane] : Co(Vr(i.owner));
  }
  function Ua(i) {
    if (i === "camera") return 0;
    const { clip: s } = Vr(i);
    return s.start - s.in;
  }
  function pl(i) {
    const s = Vr(i);
    return !!s && s.locked !== !0;
  }
  function Ya() {
    var s;
    const i = At();
    (Zn(i) && !il(i) || h.selectedId === Wl && Zi() && !Dr() || Da() === "stroke" && !rl()) && Dn(null), ((s = $o()) == null ? void 0 : s.visible) === !1 && Xi();
  }
  function z_(i) {
    const s = Math.max(0, Math.round(i));
    s !== h.frame && (fr(), h.frame = s, fr(), Ya(), Rt(), Re(), He(), le());
  }
  function j_() {
    return Ne instanceof HTMLVideoElement && !!Ne.getAttribute("src");
  }
  function H_(i) {
    Ii(), on.seek(i);
  }
  function xn() {
    k && on.stop();
  }
  function Ou() {
    Ii(), on.toggle();
  }
  function Bo() {
    fr(), Rt(), Re(), He(), le();
  }
  function Ti() {
    Xe(), tt(), Bo();
  }
  function G_() {
    const { selection: i } = Ke;
    pl(i.owner) && (xn(), kM(Vr(i.owner), Ba(i), i.frames, h.frame - Ua(i.owner)), Ke.selection = null, Ti());
  }
  function Oh(i) {
    xn();
    const s = Math.round(h.frame * i / _.timeline.fps);
    jM(_, i), Ke.selection = null, on.seek(s), Ti();
  }
  function K_() {
    const i = Pf(e);
    i !== null && i !== _.timeline.fps && Oh(i);
  }
  function W_(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        i.phase === "start" && Ii(), on.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Ou();
        return;
      }
      if (i.type === "mute") {
        jp(), si();
        return;
      }
      if (i.type === "toggle-expanded") {
        Ke.expanded = !(Ke.expanded ?? Ih()), Ke.selection = null, si();
        return;
      }
      if (i.type === "toggle-row") {
        Ke.openRows.has(i.id) ? Ke.openRows.delete(i.id) : Ke.openRows.add(i.id), si();
        return;
      }
      if (i.type === "toggle-visible") {
        if (i.id === P1) _.painting_visible = !_.painting_visible;
        else {
          const s = Vr(i.id);
          if (!s || i.id === "camera" && !F) return;
          s.visible = !s.visible;
        }
        Ya(), Ti();
        return;
      }
      if (i.type === "select-row") {
        const s = _.stickers.find((l) => l.id === i.id);
        if (s && !s.visible || i.id === "camera" && !Dr()) return;
        s && !Vs(s.clip, h.frame) && H_(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? hu(s.id) : i.id === "camera" ? Dn($e()) : Dn(ri().find((l) => l.id === i.id) || null), Tr(), Ke.selection = null, Re(), He(), le();
        return;
      }
      if (i.type === "select-keys") {
        const s = Ua(i.owner), l = i.frames.map((m) => m - s), f = Ke.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && p) {
          const m = new Set(f.frames);
          for (const g of l)
            m.has(g) ? m.delete(g) : m.add(g);
          f.frames = [...m].sort((g, w) => g - w);
        } else
          Ke.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        si();
        return;
      }
      if (i.type === "move-keys") {
        const s = Ke.selection;
        if (!s || !pl(s.owner)) return;
        const l = Vr(s.owner), f = Ba(s);
        if (i.phase === "start") {
          xn(), Ke.drag = { keyframes: f.map((g) => structuredClone(l[g].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = Ke;
        if (!(p != null && p.keyframes)) return;
        f.forEach((g, w) => {
          l[g].keyframes = structuredClone(p.keyframes[w]);
        });
        const m = MM(l, f, p.frames, i.delta, -Ua(s.owner));
        if (s.frames = p.frames.map((g) => g + m), i.phase !== "end") {
          Bo();
          return;
        }
        Ke.drag = null, m ? Ti() : Bo();
        return;
      }
      if (i.type === "clip") {
        const s = i.id === "scene" ? Vr("scene") : _.stickers.find((p) => p.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          xn(), Ke.drag = { clip: { ...s.clip }, span: dl(s.clip) };
          return;
        }
        const { drag: l } = Ke;
        if (!(l != null && l.clip)) return;
        const f = l.clip;
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? AM(s.clip, i.delta) : i.delta && i.mode === "start" ? CM(s.clip, f.start + i.delta) : i.delta && IM(s.clip, (f.duration === null ? l.span : f.start + f.duration) + i.delta, l.span), i.phase !== "end") {
          Bo();
          return;
        }
        Ke.drag = null, Ya(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Ti() : Bo();
        return;
      }
      if (i.type === "key-row") {
        if (i.owner === "scene" || !pl(i.owner)) return;
        xn(), wM(Vr(i.owner), h.frame - Ua(i.owner)), Ti();
        return;
      }
      if (i.type === "fps") {
        if (!(i.fps > 0) || i.fps === _.timeline.fps || A.timeline.fpsLocked) {
          si();
          return;
        }
        Oh(i.fps);
        return;
      }
      if (i.type === "length") {
        const s = i.length === null ? null : Math.max(1, Math.round(i.length));
        if (Number.isNaN(s) || s === _.timeline.length) {
          si();
          return;
        }
        xn(), _.timeline.length = s, Ti();
        return;
      }
      if (i.type === "easing") {
        const s = Ke.selection;
        if (!s || !pl(s.owner)) return;
        xn(), PM(Vr(s.owner), Ba(s), s.frames, i.easing), i.commit ? Ti() : Bo();
      }
    }
  }
  async function Eh(i) {
    if (r || I || t !== "stickers" && t !== "cutout" || !Ir(i)) return;
    if (P) {
      xn(), await Fh(i);
      return;
    }
    const s = co("asset"), l = ps(e, `add:${s}`, async () => {
      try {
        const { image: f } = await hs(i);
        Zt.set(s, f);
        const p = co("st");
        _.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Oi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: el()
        }), Dn(_.stickers[_.stickers.length - 1]), Xa(), Re(), He(), le();
        const m = await po(i, {
          fetchApi: (S, O) => Xt.fetchApi(S, O)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((S) => String((S == null ? void 0 : S.asset_id) || "") === s).length) return;
        _.assets[s] = m, Ho(), Xe(), tt(), Re(), He(), le();
      } catch (f) {
        delete _.assets[s], Zt.delete(s);
        const p = Array.isArray(_.stickers) ? _.stickers : [], m = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") === s);
        throw m.length && (_.stickers = p.filter((g) => String((g == null ? void 0 : g.asset_id) || "") !== s), m.some((g) => String((g == null ? void 0 : g.id) || "") === String(h.selectedId || "")) && Dn(null), Re(), He(), le(), tt()), f;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function B_() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = U == null ? void 0 : U.openImagePicker) == null || i.call(U, "add");
  }
  function U_() {
    var i;
    r || !P || (i = U == null ? void 0 : U.openImagePicker) == null || i.call(U, "add-world");
  }
  async function Y_(i) {
    r || !P || !Ir(i) || (xn(), await Fh(i, "world"));
  }
  function X_() {
    const i = { x: E.width / 2, y: E.height / 2 }, s = Ji() ? Fe.pick(Yo(), i.x, i.y, E.width, E.height) : null;
    return SN(wn(), s, Lr());
  }
  async function Fh(i, s = "sky") {
    const l = co("st"), f = ps(e, `add:${l}`, async () => {
      const { image: p } = await hs(i), m = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Oi(30, Number(p.naturalWidth || p.width || 1), Number(p.naturalHeight || p.height || 1)),
        rot_deg: 0
      }, g = { kind: "file", filename: "" }, w = s === "world" ? eN(l, g, X_()) : lp(l, g, m, el());
      Zt.set(za(w), p), _.stickers.push(w), s === "world" ? hu(l) : Dn(w), Xa(), Re(), He(), le();
      try {
        const S = await po(i, {
          fetchApi: (M, C) => Xt.fetchApi(M, C)
        }), O = _.stickers.find((M) => M.id === l);
        if (!O) return;
        O.source = Bl(S), Zt.set(za(O), p), Xe(), tt();
      } catch (S) {
        throw _.stickers = _.stickers.filter((O) => O.id !== l), h.selectedId === l && Dn(null), h.worldSelectedId === l && Xi(), Xe(), tt(), S;
      } finally {
        Re(), He(), le();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function q_(i, s) {
    const l = ps(e, `replace:${s}:${co("asset")}`, async () => {
      const { image: f } = await hs(i), p = await po(i, {
        fetchApi: (g, w) => Xt.fetchApi(g, w)
      }), m = _.stickers.find((g) => g.id === s);
      if (m) {
        m.source = Bl(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const g of [m.size.value, ...m.size.keyframes.map((w) => w.value)])
          g.vFOV_deg = Oi(g.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        Zt.set(za(m), f), Rt(), Xe(), tt(), Re(), He(), le();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function J_(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = At();
    if (!s || !St(s) || Bt(s) || !Ir(i)) return;
    if (P) {
      await q_(i, s.id);
      return;
    }
    const l = String(s.id || ""), f = co("asset"), p = ps(e, `replace:${l}:${f}`, async () => {
      var M;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === l) || null;
      if (!m || !St(m) || Bt(m)) return;
      const g = String(m.asset_id || ""), w = g ? Nn(((M = _.assets) == null ? void 0 : M[g]) || null) : null, S = Number(m.vFOV_deg || 0), O = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: C } = await hs(i);
        Zt.set(f, C), m.asset_id = f, m.vFOV_deg = Oi(
          Number(m.hFOV_deg || 30),
          Number(C.naturalWidth || C.width || 1),
          Number(C.naturalHeight || C.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, Rt(), Re(), He(), le();
        const D = await po(i, {
          fetchApi: (H, J) => Xt.fetchApi(H, J)
        }), Y = (Array.isArray(_.stickers) ? _.stickers : []).find((H) => String((H == null ? void 0 : H.id) || "") === l) || null;
        if (!Y || String(Y.asset_id || "") !== f) return;
        _.assets[f] = D, Ho(), Xe(), tt(), Re(), He(), le();
      } catch (C) {
        delete _.assets[f], Zt.delete(f);
        const D = (Array.isArray(_.stickers) ? _.stickers : []).find((Y) => String((Y == null ? void 0 : Y.id) || "") === l) || null;
        throw D && String(D.asset_id || "") === f && (g && w && (_.assets[g] = w), D.asset_id = g, D.vFOV_deg = S, D.crop = O ? { ...O } : null), Rt(), tt(), Re(), He(), le(), C;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function Z_() {
    var s;
    if (r) return;
    const i = At();
    !i || !St(i) || Bt(i) || (s = U == null ? void 0 : U.openImagePicker) == null || s.call(U, "replace");
  }
  async function Q_() {
    if (r || t !== "stickers") return;
    if (P) {
      await ew();
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
        const g = await fetch(m).then((C) => C.blob()), w = String(g.type || "image/png").split("/")[1] || "png", S = String((p == null ? void 0 : p.name) || `${f}.${w}`), O = new File([g], S, { type: g.type || "image/png" }), M = await po(O, {
          fetchApi: (C, D) => Xt.fetchApi(C, D)
        });
        _.assets[f] = {
          ...M,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (tt(), le());
  }
  async function ew() {
    let i = !1;
    for (const s of _.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const f = await fetch(l).then((w) => w.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), g = await po(m, {
            fetchApi: (w, S) => Xt.fetchApi(w, S)
          });
          s.source = Bl(g), i = !0;
        } catch {
        }
    }
    i && (tt(), le());
  }
  function tw() {
    if (r || t !== "cutout") return;
    const i = $e();
    if (i) {
      Dn(i), h.mode = "pano", I && cr() ? Yi(Ig(Hv(wn(), i.position), fh(), E.width, E.height)) : Ip($t(Number(i.yaw_deg || 0)), Q(Number(i.pitch_deg || 0), -89.9, 89.9)), Re(), He(), le({ cause: "cutout_frame" });
      return;
    }
    const s = zy({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: $t(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    _.shots = [s], Dn(s), Xa(), h.mode = "pano", Xe(), tt(), Re(), He(), le({ cause: "cutout_frame" });
  }
  function nw() {
    r || !F || Zi() || (xn(), _.camera = KM(wn()), fr(), Dn($e()), Xa(), Xe(), tt(), Re(), He(), le({ cause: "cutout_frame" }));
  }
  function rw() {
    xn(), _.camera = null, Dn(null), fr(), Xe(), tt(), Re(), He(), le({ cause: "cutout_frame" });
  }
  function Th(i, s) {
    F && pn(i) && (_.camera.projection = s === _a ? "erp" : "perspective", s === _a) || uw(i, s);
  }
  function iw() {
    r || t !== "cutout" || (_.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, _.active.selected_shot_id = null, Xe(), tt(), Re(), He(), le());
  }
  function ow() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], s = [];
    for (const l of i)
      Bt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function Dh(i, s, l = "Clear") {
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
  async function aw() {
    var l, f;
    if (r || !await Dh(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = ma(null), Mr();
    const s = ow();
    if (t === "stickers")
      _.stickers = P ? _.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, P || (_.assets = {}), h.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, Ho();
    else {
      const p = VM(_.shots, _.active.selected_shot_id);
      _.stickers = s, _.assets = {}, _.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, Ho();
    }
    Xe(), tt(), Re(), He(), le();
  }
  async function sw(i) {
    var m, g, w, S;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", f = Uo(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((g = h.interaction) == null ? void 0 : g.layerKind) === s) || !await Dh(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((w = h.interaction) == null ? void 0 : w.kind) === "draw" && ((S = h.interaction) == null ? void 0 : S.layerKind) === s) {
        const O = er();
        O && h.paintEngine.cancelActiveStroke(O), h.interaction = null;
      }
      f.length = 0, _.painting.raster_objects = Hn().filter((O) => String((O == null ? void 0 : O.layerKind) || "paint") !== s), s === "paint" && (kn().length = 0), Mr(), Xe(), tt(), Re(), He(), Gn(), le();
    }
  }
  function lw() {
    if (r) return;
    const i = At();
    if (!i || !St(i) || Bt(i) || P && eu(i)) return;
    let s;
    P ? s = tN(i, co("st"), el()) : (s = JSON.parse(JSON.stringify(i)), s.id = co("st"), s.yaw_deg = $t((s.yaw_deg || 0) + 8), s.z_index = el()), _.stickers.push(s), _.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], Rt(), Xe(), tt(), He(), Re(), le();
  }
  function cw() {
    const i = $o();
    return i ? (nl(i) && (xn(), QM(_, i.id), Xi(), Rt(), Xe(), tt(), Re(), He(), Tr(), le()), !0) : !1;
  }
  function Lh() {
    var l, f, p, m, g;
    if (r || I) return;
    const i = lr(), s = At();
    if (!(!s && i.length === 0) && !i.some((w) => _n(w))) {
      if (xn(), i.length > 1) {
        const w = new Set(i.filter((M) => sn(M)).map((M) => String(M.actionGroupId || M.id || ""))), S = new Set(i.filter((M) => vn(M)).map((M) => yn(M.rasterObjectId || M.id || ""))), O = new Set(i.filter(St).map((M) => String(M.id || "")));
        w.size > 0 && (_.painting.paint.strokes = (Array.isArray((f = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : f.strokes) ? _.painting.paint.strokes : []).filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || ""))), _.painting.groups = kn().filter((M) => !w.has(String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || ""))), Mr()), S.size > 0 && (_.painting.raster_objects = Hn().filter((M) => !S.has(String((M == null ? void 0 : M.id) || ""))), Ko()), O.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((M) => O.has(String((M == null ? void 0 : M.id) || "")) ? Bt(M) ? (Vo(M) || (M.visible = !1), !0) : !1 : !0), Ho(), Rt()), h.selectedId = null, h.selectedIds = [], Xe(), tt(), Re(), He(), le();
        return;
      }
      if (sn(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (p = _.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((S) => String((S == null ? void 0 : S.actionGroupId) || "").trim() !== w), _.painting.groups = kn().filter((S) => String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim() !== w), Mr(), h.selectedId = null, h.selectedIds = [], Xe(), tt(), Re(), He(), le();
        return;
      }
      if (vn(s)) {
        const w = yn(s.rasterObjectId || s.id || "");
        _.painting.raster_objects = Hn().filter((S) => String((S == null ? void 0 : S.id) || "").trim() !== w), Ko(), h.selectedId = null, h.selectedIds = [], Xe(), tt(), Re(), He(), le();
        return;
      }
      if (F && pn(s)) {
        rw();
        return;
      }
      if (t === "stickers" || St(s)) {
        if (Bt(s)) {
          if (Vo(s)) return;
          s.visible = !1, Rt(), Xe(), tt(), Re(), He(), le();
          return;
        }
        _.stickers = _.stickers.filter((w) => w.id !== s.id), Ho(), Rt(), h.selectedId = ((g = ri()[0]) == null ? void 0 : g.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = h.selectedId, Xe(), tt(), Re(), He(), le();
        return;
      }
      iw();
    }
  }
  function Eu(i, s) {
    const l = ne.frameSafeRect;
    if (!i || !l || h.mode !== "frame") return !1;
    const f = Mf * wo(l, i), p = Jd(qd(l, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function uw(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const w = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(w)) {
        const [M, C] = w.split(":").map((D) => Number(D));
        if (Number.isFinite(M) && Number.isFinite(C)) return M >= C;
      }
      const S = Number(i.hFOV_deg || 64), O = Number(i.vFOV_deg || 40);
      return Math.abs(S - O) > 1e-6 ? S >= O : xo(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const g = p / m;
    if (!Eu(i, g)) {
      const w = Q(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = w, i.hFOV_deg = Gl(w, g);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function fw(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const f = Hs(s, l);
    if (!f) return !1;
    const p = f.ratio;
    if (!Eu(i, p)) {
      const m = Q(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Gl(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function Rh(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = ki(i), f = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!Eu(i, p)) {
      const m = Q(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Gl(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, g] = s.split(":");
      i.aspect_id = `${g}:${m}`;
    } else
      i.aspect_id = ho(i);
  }
  function Vh() {
    Do().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function dw() {
    if (r) return;
    const i = lr();
    if (!At() || i.length === 0 || i.some((w) => _n(w))) return;
    Vh();
    const l = Do(), f = new Set(i.map((w) => St(w) ? `sticker:${String(w.id || "")}` : vn(w) ? `rasterObject:${yn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var O, M;
      const S = w.type === "sticker" ? `sticker:${String(((O = w.item) == null ? void 0 : O.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(S) ? p.push(w) : m.push(w);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((w, S) => {
      w.type === "sticker" && w.item && (w.item.z_index = S), w.type === "strokeGroup" && w.item && (w.item.z_index = S), w.type === "rasterObject" && w.item && (w.item.z_index = S);
    }), Rt(), Xe(), tt(), He(), le();
  }
  function pw() {
    if (r) return;
    const i = lr();
    if (!At() || i.length === 0 || i.some((w) => _n(w))) return;
    Vh();
    const l = Do(), f = new Set(i.map((w) => St(w) ? `sticker:${String(w.id || "")}` : vn(w) ? `rasterObject:${yn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var O, M;
      const S = w.type === "sticker" ? `sticker:${String(((O = w.item) == null ? void 0 : O.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((M = w.item) == null ? void 0 : M.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(S) ? p.push(w) : m.push(w);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((w, S) => {
      w.type === "sticker" && w.item && (w.item.z_index = S), w.type === "strokeGroup" && w.item && (w.item.z_index = S), w.type === "rasterObject" && w.item && (w.item.z_index = S);
    }), Rt(), Xe(), tt(), He(), le();
  }
  function hw() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", u && (_.output_preset = N(Number(_.output_preset || 2048))), d && (_.coverage = Xn(d.value)), b && (_.bg_color = String(b.value || _.bg_color || "#00ff00")), Ln(), e.setDirtyCanvas(!0, !0));
  }
  function Ln() {
    var s;
    if (r) return;
    fr(), Sg(_), _.coverage = Xn(_.coverage), mb(e, _.active);
    const i = gb(e, _);
    y && !yb(e, i, String(y.value ?? ""), { rebased: W }) && (y.value = i, (s = y.callback) == null || s.call(y, i));
  }
  const $h = () => Ln();
  r || (e.__panoFlushStateBeforeQueue = $h);
  function Fu() {
    _.ui_settings = KE(_.ui_settings), r || Ln();
  }
  function tt() {
    var i;
    r || (Ln(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function mw() {
    r || Av() && oh().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function gw(i = {}) {
    var f, p, m, g, w, S, O, M, C, D;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (g = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || g.call(m), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1)), l && ((O = (S = e.graph) == null ? void 0 : S.setDirtyCanvas) == null || O.call(S, !0, !0), (D = (C = (M = Or) == null ? void 0 : M.canvas) == null ? void 0 : C.setDirty) == null || D.call(C, !0, !0));
  }
  function Xa() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", Gn(), Re());
  }
  function Di(i) {
    const s = E.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * E.width,
      y: (i.clientY - s.top) / s.height * E.height
    };
  }
  function hl(i) {
    const s = E.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function zh() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function fr(i = !0) {
    var f, p;
    if (!W) return;
    const s = R;
    if (!Dr()) {
      R = null, (f = _.shots) != null && f.length && (_.shots = []), s && jh(s, null);
      return;
    }
    const l = (p = _.shots) == null ? void 0 : p[0];
    i && l && R && BM(_.camera, h.frame, l, R), R = xg(_.camera, h.frame), l ? Object.assign(l, R, { position: [...R.position] }) : _.shots = [{ ...R, position: [...R.position] }], s || jh(null, R);
  }
  function jh(i, s) {
    var m, g;
    !s && h.mode === "frame" && Hh(i);
    const l = (s == null ? void 0 : s.position) ?? [0, 0, 0];
    if (((g = (m = h.viewTransition) == null ? void 0 : m.end) == null ? void 0 : g.mode) === "3dof") {
      Yi({ ...wn(), position: l }, h.viewTransition.end);
      return;
    }
    if (h.mode !== "pano" || h.spaceMode !== "3dof" || !Ra()) return;
    const f = (i == null ? void 0 : i.position) ?? [0, 0, 0];
    if (f.every((w, S) => w === l[S])) return;
    const p = { ...wn(), position: f };
    Va({ mode: "6dof", position: f, moved: !0 }), h.viewDistance = p.distance, Yi({ ...p, position: l }, { mode: "3dof", moved: !1 });
  }
  function Hh(i) {
    if (h.mode = "pano", !i) return;
    Ca();
    const s = wn().distance;
    h.viewYaw = $t(i.yaw_deg), h.viewPitch = Q(i.pitch_deg, -89.9, 89.9), h.viewFov = Q(i.hFOV_deg, 35, 140), h.spaceMode === "6dof" && Va({ mode: "6dof", position: [...i.position], moved: !0 }), h.viewDistance = s, ne.backgroundDirty = !0;
  }
  function $e() {
    if (!V) return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const s = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function yw() {
    var Y, H, J, Z, oe;
    if (!E) return null;
    const i = (Y = E.getBoundingClientRect) == null ? void 0 : Y.call(E), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? E.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? E.height / i.height : 1;
    ne.frameCanvasScale = Math.min(s, l);
    let f = 24, p = 24;
    const m = Math.max(f + 1, E.width - 24);
    let g = Math.max(p + 1, E.height - 24);
    const w = (H = ei == null ? void 0 : ei.getBoundingClientRect) == null ? void 0 : H.call(ei), S = (J = j == null ? void 0 : j.getBoundingClientRect) == null ? void 0 : J.call(j);
    let O = 24;
    w && i && w.width > 0 && w.height > 0 && (O = Math.max(O, (w.right - i.left) * s + x0)), S && i && S.width > 0 && S.height > 0 && ((Z = A.frameRail) == null ? void 0 : Z.visible) === !0 && (O = Math.max(O, (i.right - S.left) * s + x0)), f = Math.max(f, O);
    const M = Math.min(m, E.width - O);
    let C = 24;
    const D = (oe = gn == null ? void 0 : gn.getBoundingClientRect) == null ? void 0 : oe.call(gn);
    if (D && i && D.width > 0 && D.height > 0 && (C = Math.max(C, (D.bottom - i.top) * l + Nf)), [ae, we].forEach((pe) => {
      var Ge;
      if (!pe || !i) return;
      const ee = getComputedStyle(pe);
      if (ee.display === "none" || ee.visibility === "hidden" || Number(ee.opacity) <= 0) return;
      const me = (Ge = pe.getBoundingClientRect) == null ? void 0 : Ge.call(pe);
      !me || me.width <= 0 || me.height <= 0 || (C = Math.max(C, (i.bottom - me.top) * l + Nf));
    }), Et && i) {
      const pe = getComputedStyle(Et);
      pe.display !== "none" && pe.visibility !== "hidden" && Number(pe.opacity) > 0 && (C = Math.max(C, (kE + Nf) * l));
    }
    return p = Math.max(p, C), g = Math.max(p + 1, Math.min(g, E.height - C)), {
      x: f,
      y: p,
      w: Math.max(1, M - f),
      h: Math.max(1, g - p)
    };
  }
  function ml(i = $e()) {
    if (!i || !E) return null;
    const s = ne.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, E.width - 48),
      h: Math.max(1, E.height - 48)
    };
    return jk(s, i, Mf * wo(s, i));
  }
  function hn(i = $e()) {
    const s = ml(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function Tu() {
    return V && !!$e();
  }
  function Nr(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = Ei(), g = (i.x - m.x) / Math.max(1, m.w), w = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (g % 1 + 1) % 1,
        v: Q(w, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = vu(i.x, i.y), { lon: f, lat: p } = ku(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Q(0.5 - p / Math.PI, 0, 1),
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
    const m = Au(s, p);
    if (!m) return null;
    const { lon: g, lat: w } = ku(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (g / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Q(0.5 - w / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function bw(i, s) {
    const l = $e();
    if (!l || l.locked === !0) return !1;
    const f = Number(s) > 0, p = Hy(l, s);
    if (!p) return !1;
    if (f) {
      const m = Mf * wo(
        ne.frameSafeRect || { w: E.width, h: E.height },
        p
      ), g = Zd({ width: E.width, height: E.height }, m);
      if (g.halfW < E.width * 0.5 - 1e-6 || g.halfH < E.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, Gh(), Re(), !0;
  }
  function Gh() {
    h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, Xe(), tt(), Re());
    }, 180);
  }
  function Du() {
    return W && h.mode === "frame" && Ra();
  }
  function qa() {
    const i = $e(), s = ml(i);
    return i && s ? Lg(i, s, { width: E.width, height: E.height }) : null;
  }
  function Kh() {
    var i;
    return ((i = Lr()) == null ? void 0 : i.radius) || Ar;
  }
  function Ja(i) {
    const { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m } = i.shot;
    return { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m, distance: Kh() };
  }
  function Wh(i, s) {
    const { rect: l } = i;
    return Fe.pickSurface(dh(i.shot), s.x - l.x, s.y - l.y, l.w, l.h);
  }
  function Bh(i, s, l) {
    return pf(s, Wh(i, l), null, Rr());
  }
  function Uh(i) {
    return JSON.stringify([Ja(i), i.rect]);
  }
  function Yh(i) {
    const s = $e();
    s.position = [...i.position], s.yaw_deg = i.yaw_deg, s.pitch_deg = i.pitch_deg;
  }
  function Xh(i, s) {
    const l = $e();
    !l || r || l.locked === !0 || (h.interaction = {
      kind: "pan_frame",
      shot: l,
      last: i,
      start: { yaw_deg: Number(l.yaw_deg || 0), pitch_deg: Number(l.pitch_deg || 0) },
      changed: !1
    }, ht(i), E.setPointerCapture(s));
  }
  function vw(i, s, l) {
    const f = qa();
    if (!f || r) return;
    const p = Ja(f);
    h.interaction = i === "orbit" ? { kind: "frame_orbit", last: s, pivot: Bh(f, p, s), changed: !1 } : { kind: "frame_pan", last: s, depth: Mg(p, Rr()), changed: !1 }, ht(s), E.setPointerCapture(l);
  }
  function _w(i, s) {
    const l = qa();
    if (!l) return;
    const f = Ja(l), p = s.x - i.last.x, m = s.y - i.last.y;
    Yh(i.kind === "frame_pan" ? Ag(f, p, m, l.rect.w, l.rect.h, i.depth) : Pg(f, p, m, E.height, i.pivot)), i.changed = i.changed || p !== 0 || m !== 0, i.last = s, le({ localOnly: !0, cause: "frame_view" });
  }
  function ww(i, s) {
    const l = qa();
    if (!l || r) return;
    const f = Ja(l), p = performance.now(), m = { x: i.x, y: i.y, time: p, key: Fe.contentKey(), view: Uh(l) };
    if (!Ng(Kt, m)) {
      const g = Wh(l, i);
      Kt = { ...m, cost: performance.now() - p, hit: g };
    }
    Yh(Cg(f, pf(f, Kt.hit, null, Rr()), s, Rr())), Kt.view = Uh(qa() ?? l), Kt.wheelTime = p, Gh(), Re(), le({ localOnly: !0, cause: "frame_view" });
  }
  function xw() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, Xe(), tt(), Re(), !0) : !1;
  }
  function Za() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && eo(), h.interaction = null, jo(), ii(), Re(), ht(h.pointerPos), le({ localOnly: !0 }), !0;
  }
  function Sw(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function Li(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? ci : Wn[s] ? s : h.activeBrushPresetId || ci;
  }
  function qh() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (zh() || Tu());
  }
  function Jh() {
    var i;
    return qh() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function gl(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, g = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: l, y: f, inside: p }, g;
  }
  function kw() {
    var M, C;
    if (!Jh()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, l = Li(s), f = Wn[l] || Wn[ci], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(3, m * 0.5), w = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : tr(h.paintColor), S = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : Q(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), O = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : Q(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: g,
      fillStyle: Hr(w, S),
      strokeStyle: Hr(w, O),
      x: Number(((M = h.pointerPos) == null ? void 0 : M.x) || 0),
      y: Number(((C = h.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: g,
      hotspotY: g
    };
  }
  function Mw() {
    var D, Y, H;
    const i = kw();
    if (!Ee) return;
    if (!i) {
      Ee.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, g = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const S = "rgba(222, 222, 222, 0.72)", O = "rgba(52, 52, 52, 0.72)";
    let M = Number(i.hotspotX ?? s * 0.5), C = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Fc, l = Fc, f = "0", g = "0", w = "none", M = PE, C = AE, m = jE(i.fillStyle, O, S);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const J = Math.max(1, Number(((D = i.preset) == null ? void 0 : D.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * J), l = Math.max(6, i.radius * 2), f = `${Math.min(6, l * 0.42)}px`, p = Number(((H = (Y = i.preset) == null ? void 0 : Y.angle) == null ? void 0 : H.value) || 0) * mo;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    Ee.style.display = "block", Ee.style.width = `${Math.round(s)}px`, Ee.style.height = `${Math.round(l)}px`, Ee.style.borderRadius = f, Ee.style.border = g, Ee.style.boxShadow = w, Ee.style.background = m, Ee.style.backgroundRepeat = "no-repeat", Ee.style.backgroundPosition = "center", Ee.style.backgroundSize = "contain", Ee.style.transform = `translate(${Math.round(i.x - M)}px, ${Math.round(i.y - C)}px) rotate(${p}deg)`;
  }
  function Nw() {
    var pe;
    if (!vt || !pt) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const l = Li(s), f = Wn[l] || Wn[ci], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), g = Math.max(6, m * 0.5), w = s === "eraser", S = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : tr(h.paintColor), O = i === "mask" ? Hr(S, 0.22) : w ? "rgba(255,255,255,0.14)" : Hr(S, Q(Math.max(0.18, Number(S.a ?? 1) * 0.34), 0.18, 0.56)), M = i === "mask" ? Hr(S, 0.96) : w ? "rgba(255,255,255,0.72)" : Hr(S, Q(Math.max(0.56, Number(S.a ?? 1) * 0.96), 0.56, 1));
    let C = g * 2, D = g * 2, Y = "999px", H = 0, J = O;
    const Z = "rgba(222, 222, 222, 0.72)", oe = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      J = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ee = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      C = Math.max(16, g * 2 * ee), D = Math.max(10, g * 2), Y = `${Math.min(8, D * 0.42)}px`, H = Number(((pe = f == null ? void 0 : f.angle) == null ? void 0 : pe.value) || 0) * mo;
    } else s === "brush" ? J = `radial-gradient(circle at 50% 50%, ${M} 0%, ${O} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (C = Math.max(18, g * 1.8), D = C, J = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${M} 43%, ${M} 58%, rgba(0,0,0,0) 59%)`) : w && (J = "rgba(255,255,255,0.12)");
    pt.style.width = `${Math.round(C)}px`, pt.style.height = `${Math.round(D)}px`, pt.style.borderRadius = Y, pt.style.background = J, pt.style.border = `1px solid ${Z}`, pt.style.boxShadow = `0 0 0 1px ${oe}`, pt.style.transform = `rotate(${H}deg)`, it && (clearTimeout(it), it = 0), vt.classList.remove("fade-out"), vt.classList.add("show");
  }
  function yl() {
    !vt || !vt.classList.contains("show") || (vt.classList.add("fade-out"), it && clearTimeout(it), it = window.setTimeout(() => {
      vt.classList.remove("show", "fade-out"), it = 0;
    }, 180));
  }
  function Zh(i, s, l, f) {
    const p = Li(s), m = Wn[p] || Wn[ci], g = h.brushSizes[p] ?? 10, w = Math.max(1, g) * Math.max(0.1, m.sizeScale ?? 1), S = Sw(f, w), O = l.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), M = {
      id: na(i),
      actionGroupId: na("ag"),
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
        rawPoints: O.map((C) => ({ ...C })),
        points: O.map((C) => ({ ...C }))
      }
    };
    return b0(M, m), Number(m.aspect ?? 1), Number(M.aspect ?? 1), String(M.stampKind || ""), Number(M.size || 0), String(M.radiusModel || ""), Number(M.radiusValue || 0), { ...M.targetSpace }, M;
  }
  function Qh(i, s, l, f) {
    const p = l.map((S) => ({
      ...S,
      t: Number((S == null ? void 0 : S.t) || 0),
      widthScale: Number.isFinite(Number(S == null ? void 0 : S.widthScale)) ? Math.max(0, Number(S.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(S == null ? void 0 : S.pressureLike)) ? Math.max(0, Number(S.pressureLike)) : 1
    })), m = Li(s), g = Wn[m] || Wn[ci], w = {
      id: na(i),
      actionGroupId: na("ag"),
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
    return b0(w, g), Number(g.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Uo(i) {
    const s = _.painting || (_.painting = ma(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function Pw(i, s, l = performance.now()) {
    let f;
    if (h.mode === "frame") {
      const O = $e();
      if (!O || (f = Pr(s, O, l), !f)) return !1;
    } else
      f = Nr(s, l);
    if (!f) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, g = p[p.length - 1];
    if (g) {
      const O = Math.abs(Number(f.u ?? f.x ?? 0) - Number(g.u ?? g.x ?? 0)), M = Math.abs(Number(f.v ?? f.y ?? 0) - Number(g.v ?? g.y ?? 0));
      if (O < 15e-4 && M < 15e-4) return !1;
    }
    const w = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...w }), m.push({ ...w });
    const S = er();
    if (S) {
      const O = h.paintEngine.ensureTarget(S);
      h.paintEngine.appendStrokePoint(O, Number(w.u ?? 0), Number(w.v ?? 0), i.stroke);
    }
    return !0;
  }
  function Aw(i, s, l = performance.now()) {
    var g, w;
    let f;
    if (h.mode === "frame") {
      const S = $e();
      if (!S) return !1;
      f = Pr(s, S, l);
    } else
      f = Nr(s, l);
    const p = (w = (g = i == null ? void 0 : i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points;
    if (!f || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const S = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), O = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (S < 15e-4 && O < 15e-4) return !1;
    }
    return p.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Cw(i) {
    var ee, me, Ge, Be, ot;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    fl();
    const l = er(), f = ja(l.width, l.height);
    if (!xh(f, s, { w: l.width, h: l.height })) return !1;
    const p = ((me = (ee = f.ctx) == null ? void 0 : ee.getImageData(0, 0, l.width, l.height)) == null ? void 0 : me.data) || null;
    if (!p) return !1;
    const m = new Map(kn().map((ve) => [String((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "").trim(), ve ? { ...ve } : null])), g = [], w = [], S = [...Hn().filter((ve) => String((ve == null ? void 0 : ve.layerKind) || "paint") !== "paint")];
    let O = !1, M = Do().reduce((ve, ue) => Math.max(ve, Number((ue == null ? void 0 : ue.z_index) || 0)), -1) + 1;
    function C(ve, ue, ye, Le = 8) {
      let ze = ue, Ze = ye, at = -1, Ct = -1;
      for (let st = 0; st < ye; st += 1)
        for (let en = 0; en < ue; en += 1)
          ve[(st * ue + en) * 4 + 3] <= Le || (en < ze && (ze = en), st < Ze && (Ze = st), en > at && (at = en), st > Ct && (Ct = st));
      return at < ze || Ct < Ze ? null : { minX: ze, minY: Ze, maxX: at, maxY: Ct };
    }
    const D = C(p, l.width, l.height, 8);
    if (!D) return !1;
    function Y(ve, ue) {
      return !ve || !ue ? !1 : !(ve.maxX < ue.minX || ue.maxX < ve.minX || ve.maxY < ue.minY || ue.maxY < ve.minY);
    }
    function H(ve, ue) {
      const ye = Pi((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "", "paint", ue);
      if (!ye) return null;
      const Le = ye.centerUv.u - ye.halfW, ze = ye.centerUv.u + ye.halfW, Ze = ye.centerUv.v - ye.halfH, at = ye.centerUv.v + ye.halfH, Ct = l.width, st = l.height;
      return {
        minX: Math.floor((Le % 1 + 1) % 1 * Ct),
        maxX: Math.ceil((ze % 1 + 1) % 1 * Ct),
        minY: Math.floor(Q(Ze, 0, 1) * st),
        maxY: Math.ceil(Q(at, 0, 1) * st),
        wraps: ze - Le >= 1 || Le < 0 || ze > 1
      };
    }
    function J(ve) {
      const ue = (ve == null ? void 0 : ve.bbox) || null;
      if (!ue) return null;
      const ye = (ve == null ? void 0 : ve.transform) || {}, Le = l.width, ze = l.height, Ze = Number(ue.u0 || 0) + Number(ye.du || 0), at = Number(ue.u1 || 0) + Number(ye.du || 0), Ct = Number(ue.v0 || 0) + Number(ye.dv || 0), st = Number(ue.v1 || 0) + Number(ye.dv || 0);
      return {
        minX: Math.floor((Ze % 1 + 1) % 1 * Le),
        maxX: Math.ceil((at % 1 + 1) % 1 * Le),
        minY: Math.floor(Q(Ct, 0, 1) * ze),
        maxY: Math.ceil(Q(st, 0, 1) * ze),
        wraps: at - Ze >= 1 || Ze < 0 || at > 1
      };
    }
    function Z(ve) {
      return ve ? ve.wraps ? Y(D, { minX: 0, maxX: ve.maxX, minY: ve.minY, maxY: ve.maxY }) || Y(D, { minX: ve.minX, maxX: l.width - 1, minY: ve.minY, maxY: ve.maxY }) : Y(D, ve) : !0;
    }
    function oe(ve) {
      if (!ve) return { touched: !1, canvas: null };
      const ue = ja(l.width, l.height, { readback: !0 });
      ue.ctx.drawImage(ve, 0, 0);
      const ye = ue.ctx.getImageData(0, 0, l.width, l.height);
      ue.ctx.save(), ue.ctx.globalCompositeOperation = "destination-out", ue.ctx.drawImage(f.canvas, 0, 0), ue.ctx.restore();
      const Le = ue.ctx.getImageData(0, 0, l.width, l.height);
      for (let ze = 0; ze < l.width * l.height; ze += 1) {
        if (p[ze * 4 + 3] <= 8) continue;
        const at = ye.data[ze * 4 + 3], Ct = Le.data[ze * 4 + 3];
        if (at > Ct)
          return { touched: !0, canvas: ue.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function pe(ve, ue, ye) {
      const Le = Number(ye == null ? void 0 : ye.z_index), ze = k_(ve, ue, ye).map((Ze, at) => ({
        ...Ze,
        z_index: Number.isFinite(Le) ? Le + at * 1e-3 : M + at * 1e-3
      }));
      return ze.length && (M = Math.max(M, ...ze.map((Ze) => Number((Ze == null ? void 0 : Ze.z_index) || 0))) + 1), ze;
    }
    for (const ve of kn()) {
      const ue = String((ve == null ? void 0 : ve.actionGroupId) || (ve == null ? void 0 : ve.id) || "").trim();
      if (!ue) continue;
      const ye = kr(ue, "paint");
      if (!Z(H(ve, ye))) {
        w.push(ve), g.push(...ye);
        continue;
      }
      const Le = ((Be = (Ge = h.paintEngine) == null ? void 0 : Ge.getGroupTarget) == null ? void 0 : Be.call(Ge, ue)) || null, ze = ((ot = Le == null ? void 0 : Le.committedPaint) == null ? void 0 : ot.canvas) || null;
      if (!ze) {
        w.push(ve), g.push(...ye);
        continue;
      }
      const Ze = oe(ze);
      if (!Ze.touched || !Ze.canvas) {
        w.push(ve), g.push(...ye);
        continue;
      }
      O = !0;
      const at = pe(Ze.canvas, "paint", m.get(ue) || ve || {});
      S.push(...at);
    }
    for (const ve of Hn().filter((ue) => String((ue == null ? void 0 : ue.layerKind) || "paint") === "paint")) {
      if (!Z(J(ve))) {
        S.push(ve);
        continue;
      }
      const ue = ih(ve, null);
      if (!ue) {
        S.push(ve);
        continue;
      }
      const ye = oe(ue);
      if (!ye.touched || !ye.canvas) {
        S.push(ve);
        continue;
      }
      O = !0;
      const Le = pe(ye.canvas, "paint", ve);
      S.push(...Le);
    }
    return O ? (_.painting.paint.strokes = g, _.painting.groups = w.sort((ve, ue) => Number((ve == null ? void 0 : ve.z_index) || 0) - Number((ue == null ? void 0 : ue.z_index) || 0)), _.painting.raster_objects = S.sort((ve, ue) => Number((ve == null ? void 0 : ve.z_index) || 0) - Number((ue == null ? void 0 : ue.z_index) || 0)), La({ preservePanelValues: !1 }), !0) : !1;
  }
  function Iw(i) {
    var g, w, S, O, M;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.rawPoints) || ((O = (S = i.stroke) == null ? void 0 : S.geometry) == null ? void 0 : O.points) || []).length >= 1) {
      Lu(i);
      const C = er();
      C && (String(((M = i.stroke) == null ? void 0 : M.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(C) : h.paintEngine.commitActiveStroke(i.stroke, C)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Zh(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = er();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Ow(i) {
    var g, w;
    if ((((w = (g = i.stroke) == null ? void 0 : g.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      Lu(i);
      const S = er();
      S && h.paintEngine.commitActiveStroke(i.stroke, S), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Qh(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = er();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Lu(i) {
    var m, g, w, S;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((g = i == null ? void 0 : i.stroke) == null ? void 0 : g.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Cu(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), Cw(i);
    const f = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && Op((w = i.stroke) == null ? void 0 : w.actionGroupId), Uo(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Cu(p, i.stroke.targetSpace, !0), f && Op((S = i.stroke) == null ? void 0 : S.actionGroupId), Uo(i.layerKind).push(i.stroke), !0);
  }
  function em(i) {
    var l;
    if (V && h.mode === "frame") {
      const f = $e(), p = hn(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const g = Pr(i, f, performance.now()), w = g ? Go(g) : null;
      if (w)
        for (const O of Pu()) {
          if (!St(O)) continue;
          const M = Wa(O, w);
          if (M && Number(M.x) >= 0 && Number(M.x) <= 1 && Number(M.y) >= 0 && Number(M.y) <= 1) {
            const C = Qt(O);
            if (C != null && C.visible) return { item: O, geom: C };
          }
        }
      const S = ru(!1).slice().sort((O, M) => Number((M == null ? void 0 : M.z_index) || 0) - Number((O == null ? void 0 : O.z_index) || 0));
      for (const O of S) {
        if (O.type === "strokeGroup") {
          const D = Ro(Oa("paint", O.actionGroupId || O.id || ""));
          if (!D) continue;
          const Y = Qt(D);
          if (!(Y != null && Y.visible)) continue;
          const H = Array.isArray(Y.strokePaths) ? Y.strokePaths : [];
          for (const J of H) {
            const Z = Array.isArray(J == null ? void 0 : J.points) ? J.points : [];
            if (!Z.length) continue;
            if (J.closed && Z.length >= 3 && Vi(i, Z)) return { item: D, geom: Y };
            const oe = Math.max(8, Number((J == null ? void 0 : J.lineWidth) || 0) * 0.5 + 6);
            for (let pe = 0; pe < Z.length - 1; pe += 1)
              if (Ef(i, Z[pe], Z[pe + 1]) <= oe * oe) return { item: D, geom: Y };
            if (Z.length === 1 && ys(i, Z[0]) <= oe * oe) return { item: D, geom: Y };
          }
          continue;
        }
        if (O.type === "rasterObject") {
          const D = Lo(Ea(((l = O.item) == null ? void 0 : l.id) || O.id || ""));
          if (!D) continue;
          const Y = Qt(D);
          if (rh(D, Y, i, g)) return { item: D, geom: Y };
          continue;
        }
        const M = O.item;
        if (!M || !St(M) || !w) continue;
        const C = Wa(M, w);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const D = Qt(M);
          if (D != null && D.visible) return { item: M, geom: D };
        }
      }
      return null;
    }
    const s = [
      ...ru(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? Ro(Oa("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? Lo(Ea(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...V ? Pu().filter((f) => pn(f)) : []
    ];
    for (const f of s) {
      if (sn(f)) {
        const m = Qt(f);
        if (!(m != null && m.visible)) continue;
        const g = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const w of g) {
          const S = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!S.length) continue;
          if (w.closed && S.length >= 3 && Vi(i, S)) return { item: f, geom: m };
          const O = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let M = 0; M < S.length - 1; M += 1)
            if (Ef(i, S[M], S[M + 1]) <= O * O) return { item: f, geom: m };
          if (S.length === 1 && ys(i, S[0]) <= O * O) return { item: f, geom: m };
        }
        continue;
      }
      if (vn(f)) {
        const m = Qt(f);
        if (!(m != null && m.visible)) continue;
        if (rh(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = Qt(f);
      if (p.visible && Vi(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function Qa(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (St(l)) return hd(i, s);
    if (i.kind === "strokeGroup") {
      const f = i.corners.findIndex((m) => ys(m, s) <= 121);
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
          if (Ef(s, g[S], g[S + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return Vi(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const f = i.corners.findIndex((p) => ys(p, s) <= 121);
      if (f >= 0) {
        const p = i.corners[f], m = p.x - i.center.x, g = p.y - i.center.y, w = m * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: w };
      }
      return Vi(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    return X2(i, s, {
      edges: t === "cutout" || pn(l),
      resize: !(pn(l) && qi()),
      emptyCursor: h.mode === "pano" ? "grab" : "default"
    });
  }
  function tm(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function Ew(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function Fw(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => Ew(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!Vi({ x: l, y: f }, s.corners);
  }
  function ht(i) {
    if (Mw(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? Tt("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? Tt("grabbing") : h.interaction.kind === "space_pan" || h.interaction.kind === "frame_pan" ? Tt("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "frame_orbit" || h.interaction.kind === "world_gizmo" || h.interaction.kind === "roll_frame" ? Tt("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? Tt("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? Tt(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? Tt("grabbing") : Tt("default");
      return;
    }
    if (Jh()) {
      Tt("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        Tt(SE);
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
    const s = At(), l = s ? Qt(s) : null, f = s ? _n(s) : !1, p = f ? { kind: "none", cursor: "default" } : Qa(l, i, s);
    if (!f && p.kind !== "none") {
      Tt(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && em(i)) {
      Tt("default");
      return;
    }
    Tt(h.mode === "pano" ? "grab" : "default");
  }
  function He() {
    if (!be) return;
    if (_e = !1, h.mode === "frame") {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (h.worldSelectedId || ur() && cr()) {
      const p = Tw();
      _e = p.visible, nm(p);
      return;
    }
    const i = At(), s = lr();
    if (!i && s.length === 0 || h.interaction) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = Da(), f = iC({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? Ta(s) : Qt(i),
      allLocked: su(s),
      anyLocked: s.some((p) => _n(p)),
      selectedLocked: _n(i),
      activeAspect: pn(i) && qi() ? _a : pi(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Bt,
      isStickerHidden: Vo,
      canRestoreSelectedToInitial: rv,
      iconSet: ke,
      cameraShot: W,
      cameraDeletable: F,
      erpChoice: F,
      coverage: _.coverage
    });
    nm(f);
  }
  function Tw() {
    const i = Ji() && !h.interaction ? Qn().space : null;
    if (!(i != null && i.gizmo)) return { visible: !1 };
    const s = Yo(), l = i.stickers.find((g) => g.id === h.worldSelectedId), p = (l ? dp(l) : [i.gizmo.transform.position]).map((g) => js(s, g, E.width, E.height)).filter(Boolean), m = AN(s, i.gizmo.transform.position, i.gizmo.mode, E.width, E.height);
    return oC({ corners: p, gizmoBox: m, gizmoMode: i.gizmo.mode, camera: ur(), deletable: F && ur() });
  }
  function nm(i) {
    var m, g;
    if (!i.visible) {
      A.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = (w, S) => aC(i.anchor, w, S, E.width, E.height), l = Math.max(1, Number(((m = h.menuSize) == null ? void 0 : m.w) || 220)), f = Math.max(1, Number(((g = h.menuSize) == null ? void 0 : g.h) || 40)), p = s(l, f);
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
      if (!be || A.selectionMenu.visible !== !0) return;
      const w = be.getBoundingClientRect(), S = Math.round(Number((w == null ? void 0 : w.width) || 0)) || 220, O = Math.round(Number((w == null ? void 0 : w.height) || 0)) || 40;
      h.menuSize = { w: S, h: O, measured: !0 };
      const M = s(S, O);
      M && (A.selectionMenu.left = M.left, A.selectionMenu.top = M.top);
    });
  }
  function eo() {
    Wt.timer && (clearTimeout(Wt.timer), Wt.timer = 0), Wt.target = null, A.tooltip.visible = !1;
  }
  function Dw(i) {
    if (!Me || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    A.tooltip.text = s, A.tooltip.visible = !0;
    const l = i;
    requestAnimationFrame(() => {
      var J, Z;
      if (Wt.target !== l || !Me || !(l != null && l.isConnected)) return;
      const f = re.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, g = 12, w = Math.round(Number(((J = Me.getBoundingClientRect()) == null ? void 0 : J.width) || 0)) || 100, S = Math.round(Number(((Z = Me.getBoundingClientRect()) == null ? void 0 : Z.height) || 0)) || 24, O = !!l.closest(".pano-floating-left"), M = !!l.closest(".pano-frame-rail"), C = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let D = "", Y = p.left - f.left + p.width * 0.5 - w * 0.5, H = p.top - f.top - S - g;
      if (l.closest(".pano-floating-top") && (H = p.bottom - f.top + g), O)
        D = "tool-rail", Y = p.right - f.left + 10, H = p.top - f.top + p.height * 0.5 - S * 0.5, Y = Q(Y, m, Math.max(m, f.width - w - m)), H = Q(H, m, Math.max(m, f.height - S - m));
      else if (M)
        D = "frame-rail", Y = p.left - f.left - w - 10, H = p.top - f.top + p.height * 0.5 - S * 0.5, Y = Q(Y, m, Math.max(m, f.width - w - m)), H = Q(H, m, Math.max(m, f.height - S - m));
      else if (C) {
        D = "footer";
        const oe = l.closest(".pano-paint-footer"), pe = oe ? oe.getBoundingClientRect() : p;
        Y = pe.left - f.left + pe.width * 0.5 - w * 0.5, H = pe.bottom - f.top + 5, Y = Q(Y, m, Math.max(m, f.width - w - m)), H = Math.max(m, H);
      }
      Y = Q(Y, m, Math.max(m, f.width - w - m)), H = Math.max(m, H), A.tooltip.left = Y, A.tooltip.top = H, A.tooltip.variant = D, A.tooltip.visible = !0;
    });
  }
  const ln = Yd({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = $t(Number(i.yaw || 0)), h.viewPitch = Q(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = Q(Number(i.fov || h.viewFov || 100), 35, 140);
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
    getUnwrapRect: Ei,
    onInteraction: () => {
      ne.backgroundDirty = !0, ne.dirty = !0;
    }
  });
  function Lw(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += Ry(s, i.lastAngle), i.lastAngle = s;
    const f = Vy(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = A.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f, p.displayValue = ta(f), p.fillPct = (f + 180) / 360 * 100), ai(), Ru(i), le({ localOnly: !0 });
  }
  function Rw(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = o1(i.rollGesture, s, l);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = A.sidePanel) == null ? void 0 : m.params) || []).find((g) => g.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = ta(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), ai(), Ru(i), le({ localOnly: !0 });
  }
  const rm = (i, s) => {
    const l = Di(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Ru(i) {
    var g, w;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Wt.timer && (clearTimeout(Wt.timer), Wt.timer = 0), Wt.target = null;
    const s = hn(i.shot), l = (g = E.getBoundingClientRect) == null ? void 0 : g.call(E), f = (w = re.getBoundingClientRect) == null ? void 0 : w.call(re);
    if (!s || !l || !f || E.width <= 0 || E.height <= 0) return;
    const p = l.width / E.width, m = l.height / E.height;
    A.tooltip.text = `${ta(i.shot.roll_deg)}°`, A.tooltip.left = l.left - f.left + (s.x + s.w * 0.5) * p, A.tooltip.top = l.top - f.top + (s.y + s.h * 0.5) * m + 12, A.tooltip.variant = "roll", A.tooltip.visible = !0;
  }
  K == null || K.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = $e();
    if (!s || s.locked === !0) return;
    const l = hn(s);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = rm(i, f);
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
    }, (m = K.setPointerCapture) == null || m.call(K, i.pointerId), i.preventDefault(), ai(), Ru(h.interaction), le({ localOnly: !0 });
  }), K == null || K.addEventListener("pointermove", (i) => {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || Lw(
      h.interaction,
      rm(i, h.interaction.center),
      i
    );
  });
  const Vw = () => {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (Xe(), tt(), Re()), h.interaction = null, eo(), ii(), ai(), le());
  };
  K == null || K.addEventListener("pointerup", Vw), K == null || K.addEventListener("pointercancel", () => Za()), K == null || K.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && Za();
  }), K == null || K.addEventListener("dblclick", (i) => {
    const s = h.mode === "frame" && !r ? $e() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, Xe(), tt(), Re(), ai(), le(), i.preventDefault());
  }), E.onpointerdown = (i) => {
    Ke.selection && (Ke.selection = null, si());
    const s = Di(i);
    nn = s, gl(s, !0), Ca(), ln.state.inertia.active = !1, ln.state.inertia.vx = 0, ln.state.inertia.vy = 0;
    const l = cr(), f = Du(), p = l || f ? cP(gu(), i) : null;
    if (f && p) {
      i.preventDefault(), p === "look" ? Xh(s, i.pointerId) : vw(p, s, i.pointerId);
      return;
    }
    if (p === "look") {
      i.preventDefault();
      const M = hl(i);
      h.interaction = { kind: "view", last: M, lastTs: performance.now() }, ln.startDrag(M.x, M.y, i.pointerId, performance.now()), ht(s), E.setPointerCapture(i.pointerId);
      return;
    }
    if (p) {
      i.preventDefault(), th(p, s, i.pointerId);
      return;
    }
    if ((l || f) && i.button !== 0) {
      i.preventDefault();
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), h.mode === "frame") {
        const M = $e();
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
        const M = h.mode === "unwrap" ? s : hl(i);
        h.interaction = { kind: "view", last: M, lastTs: performance.now() }, ln.startDrag(M.x, M.y, i.pointerId, performance.now());
      }
      ht(s), E.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const M = $e(), C = hn(M);
      if (!M || M.locked === !0 || !C) return;
      const D = i1({
        frame: C,
        point: s,
        startRollDeg: Number(M.roll_deg ?? M.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!D) return;
      h.interaction = {
        kind: "roll_frame",
        shot: M,
        center: D.center,
        lastAngle: D.lastAngle,
        accumulatedRad: D.accumulatedRad,
        rollGesture: D,
        start: { roll_deg: Number(M.roll_deg ?? M.rot_deg ?? 0) },
        changed: !1,
        altStarted: D.source === "alt",
        source: D.source
      }, E.setPointerCapture(i.pointerId), i.preventDefault(), ai(), le({ localOnly: !0 });
      return;
    }
    if (h.mode === "frame" && h.primaryTool === "cursor") {
      Xh(s, i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && am(i, s);
      return;
    }
    if (Ie && !Ie.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (zh() || Tu())) {
      if (!rl()) return;
      xn();
      const M = h.primaryTool === "mask" ? "mask" : "paint", C = h.primaryTool === "mask" ? h.maskTool : h.paintTool, D = h.mode === "frame" && Tu() ? $e() : null, Y = { kind: "ERP_GLOBAL" }, H = D ? Pr(s, D, performance.now()) : Nr(s, performance.now());
      if (!H) {
        ht(s);
        return;
      }
      h.interaction = {
        kind: C === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: M,
        _livePreviewToken: na("live"),
        stroke: C === "lasso_fill" ? Qh(M, C, [H], Y) : Zh(M, C, [H], Y)
      }, jo();
      const J = er();
      if (J)
        if (h.paintEngine.beginStroke(h.interaction.stroke, J), h.interaction.kind === "paint_stroke") {
          const Z = h.paintEngine.ensureTarget(J), oe = Number((H == null ? void 0 : H.u) ?? (H == null ? void 0 : H.x) ?? 0), pe = Number((H == null ? void 0 : H.v) ?? (H == null ? void 0 : H.y) ?? 0);
          h.paintEngine.appendStrokePoint(Z, oe, pe, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, J);
      ht(s), E.setPointerCapture(i.pointerId), le();
      return;
    }
    const m = lr(), g = At(), w = m.length > 1 ? Ta(m) : g ? Qt(g) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: s, current: s }, ht(s), E.setPointerCapture(i.pointerId), le({ localOnly: !0 });
      return;
    }
    if (h.primaryTool === "cursor" && Dr() && cr() && Wv(i, s) || h.primaryTool === "cursor" && P && Ji() && $w(i, s)) return;
    if (m.length > 1 && (w != null && w.visible)) {
      if ((m.some((C) => _n(C)) ? { kind: "none" } : Qa(w, s)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: m.map((C) => C),
          offset: { x: s.x - w.center.x, y: s.y - w.center.y },
          startCenter: { x: w.center.x, y: w.center.y },
          stickerSnapshots: m.filter((C) => St(C)).map((C) => ({
            id: String(C.id || ""),
            yaw_deg: Number(an(C).yaw_deg || 0),
            pitch_deg: Number(an(C).pitch_deg || 0),
            center: (() => {
              var Y, H;
              const D = Qt(C);
              return D != null && D.visible ? { x: Number(((Y = D.center) == null ? void 0 : Y.x) || 0), y: Number(((H = D.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: m.filter((C) => sn(C)).map((C) => ({
            id: String(C.actionGroupId || C.id || ""),
            layerKind: String(C.layerKind || "paint"),
            snapshot: Nn(kr(C.actionGroupId, C.layerKind)),
            frameSnapshot: Nn(Pi(C.actionGroupId, C.layerKind)),
            center: (() => {
              var Y, H;
              const D = Qt(C);
              return D != null && D.visible ? { x: Number(((Y = D.center) == null ? void 0 : Y.x) || 0), y: Number(((H = D.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: au(C.actionGroupId, C.layerKind)
          })),
          rasterSnapshots: m.filter((C) => vn(C)).map((C) => ({
            id: yn(C.rasterObjectId || C.id || ""),
            snapshot: Nn(Hn().find((D) => String((D == null ? void 0 : D.id) || "") === yn(C.rasterObjectId || C.id || ""))),
            center: (() => {
              var Y, H;
              const D = Qt(C);
              return D != null && D.visible ? { x: Number(((Y = D.center) == null ? void 0 : Y.x) || 0), y: Number(((H = D.center) == null ? void 0 : H.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: ch(C)
          }))
        }, ht(s), E.setPointerCapture(i.pointerId);
        return;
      }
    } else if (g && (w != null && w.visible)) {
      const M = _n(g) ? { kind: "none" } : Qa(w, s, g);
      if (M.kind === "scale") {
        h.interaction = sn(g) ? {
          kind: "scale_stroke_group",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: Nn(kr(g.actionGroupId, g.layerKind)),
          frameSnapshot: Nn(Pi(g.actionGroupId, g.layerKind)),
          cursor: M.cursor
        } : vn(g) ? {
          kind: "scale_raster_object",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: Nn(Hn().find((C) => String((C == null ? void 0 : C.id) || "") === yn(g.rasterObjectId || g.id || ""))),
          cursor: M.cursor
        } : {
          kind: "scale",
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          startHFOV: Number(an(g).hFOV_deg || 20),
          startVFOV: Number(an(g).vFOV_deg || 20),
          cursor: M.cursor
        }, ht(s), E.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "scale_x" || M.kind === "scale_y") {
        h.interaction = {
          kind: M.kind,
          item: g,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          startHFOV: Number(an(g).hFOV_deg || 20),
          startVFOV: Number(an(g).vFOV_deg || 20),
          cursor: M.cursor,
          edge: M.edge
        }, ht(s), E.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "rotate") {
        h.interaction = sn(g) ? {
          kind: "rotate_stroke_group",
          item: g,
          center: w.center,
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x),
          snapshot: Nn(kr(g.actionGroupId, g.layerKind)),
          frameSnapshot: Nn(Pi(g.actionGroupId, g.layerKind))
        } : {
          kind: "rotate",
          item: g,
          center: w.center,
          startRot: Number(an(g).rot_deg || an(g).roll_deg || 0),
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x)
        }, ht(s), E.setPointerCapture(i.pointerId);
        return;
      }
      if (M.kind === "move") {
        if (sn(g)) {
          const C = h.mode === "frame" ? (() => {
            const D = $e();
            return D ? Pr(s, D, performance.now()) : null;
          })() : Nr(s, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: g,
            startUv: C,
            snapshot: Nn(kr(g.actionGroupId, g.layerKind)),
            frameSnapshot: Nn(Pi(g.actionGroupId, g.layerKind))
          }, ht(s), E.setPointerCapture(i.pointerId);
          return;
        }
        if (vn(g)) {
          const C = h.mode === "frame" ? (() => {
            const D = $e();
            return D ? Pr(s, D, performance.now()) : null;
          })() : Nr(s, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: g,
            startUv: C,
            snapshot: Nn(Hn().find((D) => String((D == null ? void 0 : D.id) || "") === yn(g.rasterObjectId || g.id || "")))
          }, ht(s), E.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: g,
          offset: { x: s.x - w.center.x, y: s.y - w.center.y }
        }, ht(s), E.setPointerCapture(i.pointerId);
        return;
      }
    }
    const S = em(s);
    if (S) {
      const M = h.selectedId !== S.item.id;
      if (M && h.selectedId && (Xe(), Ln()), Dn(S.item), V && M && (h.cutoutAspectOpen = !1), M && Re(), He(), le(), _n(S.item)) {
        ht(s);
        return;
      }
      h.interaction = {
        kind: sn(S.item) ? "move_stroke_group" : vn(S.item) ? "move_raster_object" : "move",
        item: S.item,
        offset: { x: s.x - S.geom.center.x, y: s.y - S.geom.center.y },
        startUv: sn(S.item) || vn(S.item) ? h.mode === "frame" ? (() => {
          const C = $e();
          return C ? Pr(s, C, performance.now()) : null;
        })() : Nr(s, performance.now()) : null,
        snapshot: sn(S.item) ? Nn(kr(S.item.actionGroupId, S.item.layerKind)) : vn(S.item) ? Nn(Hn().find((C) => String((C == null ? void 0 : C.id) || "") === yn(S.item.rasterObjectId || S.item.id || ""))) : null,
        frameSnapshot: sn(S.item) ? Nn(Pi(S.item.actionGroupId, S.item.layerKind)) : null
      }, ht(s), E.setPointerCapture(i.pointerId);
      return;
    }
    const O = !!h.selectedId;
    O && (Xe(), Ln()), La(), O && Re(), He(), le(), h.mode === "pano" && am(i, s);
  };
  function Yo() {
    return hf(wn(), E.width, E.height, Lr());
  }
  function to(i, s) {
    return Fe.gizmoPointer(i, Yo(), s.x, s.y, E.width, E.height);
  }
  function $w(i, s) {
    var w;
    const l = (w = Qn().space) == null ? void 0 : w.gizmo;
    if (l && to("hover", s) !== null && to("down", s))
      return h.interaction = {
        kind: "world_gizmo",
        id: h.worldSelectedId,
        mode: l.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: l.transform,
        base: So($o(), h.frame),
        changed: !1
      }, E.setPointerCapture(i.pointerId), ht(s), !0;
    const f = lr(), p = At(), m = f.length > 1 ? f.some((S) => _n(S)) ? "none" : Qa(Ta(f), s).kind : p && !_n(p) ? Qa(Qt(p), s, p).kind : "none";
    if (m !== "none" && m !== "move") return !1;
    const g = Fe.pickSticker(Yo(), s.x, s.y, E.width, E.height);
    return _.stickers.some((S) => S.id === g && S.placement === "world") ? (h.worldSelectedId !== g && (h.selectedId && (Xe(), Ln()), hu(g), Re(), He(), Tr(), le()), h.interaction = { kind: "world_select" }, E.setPointerCapture(i.pointerId), !0) : !1;
  }
  function im(i) {
    var f;
    const l = !!(h.worldSelectedId || ur()) && h.primaryTool === "cursor" && Ji() && !!((f = Qn().space) != null && f.gizmo) ? to("hover", i) : null;
    l !== h.gizmoAxis && (h.gizmoAxis = l, ne.backgroundDirty = !0, le({ localOnly: !0 }));
  }
  function zw(i, s) {
    const l = to("move", s);
    if (l && i.camera) {
      for (const [p, m] of Object.entries(Fg(i.mode, i.base, i.start, l))) Cn(_.camera, p, h.frame, m);
      fr(), i.changed = !0, Re(), le({ localOnly: !0 });
      return;
    }
    const f = _.stickers.find((p) => p.id === i.id);
    !l || !f || (ZM(f, h.frame, Fg(i.mode, i.base, i.start, l)), i.changed = !0, Rt(), Re(), le({ localOnly: !0 }));
  }
  function om(i) {
    h.interaction = null, h.gizmoAxis = null, i.kind === "world_gizmo" && (to("up", h.pointerPos), ne.backgroundDirty = !0, i.changed && (Xe(), tt(), Re())), ht(h.pointerPos), le();
  }
  function am(i, s) {
    if (cr()) {
      const f = gu().emptyLeft;
      f && th(f, s, i.pointerId);
      return;
    }
    const l = hl(i);
    h.interaction = { kind: "view", last: l, lastTs: performance.now() }, ln.startDrag(l.x, l.y, i.pointerId, performance.now()), ht(s), E.setPointerCapture(i.pointerId);
  }
  function jw(i, s) {
    if (!k || !on.playing || (on.stop(), i.kind === "frame_pan")) return;
    if (i.kind === "frame_orbit") {
      const p = qa();
      p && (i.pivot = Bh(p, Ja(p), s));
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
        const g = i.items.find((S) => String((S == null ? void 0 : S.id) || "") === m.id), w = g ? Qt(g) : null;
        w != null && w.visible && (m.yaw_deg = Number(an(g).yaw_deg || 0), m.pitch_deg = Number(an(g).pitch_deg || 0), m.center = { x: w.center.x, y: w.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const l = Qt(i.item);
    if (!(l != null && l.visible)) return;
    const f = an(i.item);
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
  E.onpointermove = (i) => {
    var f, p, m, g, w, S, O, M, C, D, Y, H, J, Z, oe, pe, ee, me, Ge, Be, ot, ve;
    const s = Di(i);
    if (gl(s, !0), !h.interaction) {
      im(s), ht(s);
      return;
    }
    ht(s);
    const l = h.interaction;
    if (nn && (s.x !== nn.x || s.y !== nn.y)) {
      const ue = nn;
      nn = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(l.kind) || jw(l, ue);
    }
    if (l.kind !== "world_select") {
      if (l.kind === "world_gizmo") {
        zw(l, s);
        return;
      }
      if (l.kind === "paint_stroke") {
        const ue = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let ye = !1;
        ue.forEach((Le) => {
          const ze = Di(Le);
          if (h.mode === "frame") {
            const Ze = $e(), at = Ze ? hn(Ze) : null;
            if (at) {
              const Ct = (ze.x - at.x) / Math.max(1, at.w), st = (ze.y - at.y) / Math.max(1, at.h);
              if (!(Ct >= 0 && Ct <= 1 && st >= 0 && st <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, Iw(l));
            }
          }
          Pw(l, ze, performance.now()) && (ye = !0);
        }), ye && le({ localOnly: !0 });
        return;
      }
      if (l.kind === "paint_lasso_fill") {
        const ue = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let ye = !1;
        if (ue.forEach((Le) => {
          const ze = Di(Le);
          if (h.mode === "frame") {
            const Ze = $e(), at = Ze ? hn(Ze) : null;
            if (at) {
              const Ct = (ze.x - at.x) / Math.max(1, at.w), st = (ze.y - at.y) / Math.max(1, at.h);
              if (!(Ct >= 0 && Ct <= 1 && st >= 0 && st <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, Ow(l));
            }
          }
          Aw(l, ze, performance.now()) && (ye = !0);
        }), ye) {
          const Le = er();
          Le && h.paintEngine.updateActiveStroke(l.stroke, Le), le({ localOnly: !0 });
        }
        return;
      }
      if (l.kind === "view") {
        const ue = performance.now(), ye = h.mode === "unwrap" ? s : hl(i);
        ln.moveDrag(ye.x, ye.y, h.mode === "unwrap" ? "unwrap" : "pano", ue), l.lastTs = ue, l.last = ye, le({ localOnly: !0 });
        return;
      }
      if (l.kind === "frame_pan" || l.kind === "frame_orbit") {
        _w(l, s);
        return;
      }
      if (l.kind === "space_pan" || l.kind === "space_orbit") {
        const ue = wn();
        Jp(l.kind === "space_pan" ? Ag(ue, s.x - l.last.x, s.y - l.last.y, E.width, E.height, l.depth) : Pg(ue, s.x - l.last.x, s.y - l.last.y, E.height, l.pivot)), l.last = s;
        return;
      }
      if (l.kind === "pan_frame") {
        const ue = ml(l.shot);
        if (!ue || !l.shot) return;
        const ye = s.x - l.last.x, Le = s.y - l.last.y, ze = a1(l.shot, {
          dx: ye,
          dy: Le,
          focalPx: ue.focalPx,
          invertX: ((f = _.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((p = _.ui_settings) == null ? void 0 : p.invert_view_y) === !0
        });
        l.shot.yaw_deg = ze.yaw_deg, l.shot.pitch_deg = ze.pitch_deg, l.changed = l.changed || Math.abs(ye) > 0 || Math.abs(Le) > 0, l.last = s, le({ localOnly: !0 });
        return;
      }
      if (l.kind === "roll_frame") {
        if (l.source === "knob") return;
        Rw(l, s, i);
        return;
      }
      if (l.kind === "move") {
        const ue = s.x - l.offset.x, ye = s.y - l.offset.y;
        if (h.mode === "frame" && V) {
          const Le = $e(), ze = hn(Le);
          if (!Le || !ze) return;
          const Ze = {
            x: Q((ue - ze.x) / Math.max(1, ze.w), 0, 1),
            y: Q((ye - ze.y) / Math.max(1, ze.h), 0, 1)
          }, at = Au(Le, Ze);
          if (!at) return;
          const Ct = Tl(at);
          Sr(l.item, { yaw_deg: Ct.yaw, pitch_deg: Ct.pitch });
        } else if (h.mode === "unwrap") {
          const Le = Ei(), ze = Q((ue - Le.x) / Math.max(Le.w, 1), 0, 1), Ze = Q((ye - Le.y) / Math.max(Le.h, 1), 0, 1);
          Sr(l.item, { yaw_deg: $t(ze * 360 - 180), pitch_deg: Q(90 - Ze * 180, -90, 90) });
        } else {
          const Le = vu(ue, ye), ze = Tl(Le);
          Sr(l.item, { yaw_deg: ze.yaw, pitch_deg: ze.pitch });
        }
        St(l.item) && Rt(), le({ localOnly: !0 });
        return;
      }
      if (l.kind === "move_stroke_group") {
        const ue = h.mode === "frame" ? (() => {
          const ze = $e();
          return ze ? Pr(s, ze, performance.now()) : null;
        })() : Nr(s, performance.now());
        if (!ue || !l.startUv) return;
        const ye = sr(Number(ue.u || 0), Number(l.startUv.u || 0)), Le = Number(ue.v || 0) - Number(l.startUv.v || 0);
        Fp((m = l.item) == null ? void 0 : m.actionGroupId, ye, Le, l.snapshot, (g = l.item) == null ? void 0 : g.layerKind, l.frameSnapshot) && (Mr({ rebuildPaintEngine: !1 }), le({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_raster_object") {
        const ue = h.mode === "frame" ? (() => {
          const ze = $e();
          return ze ? Pr(s, ze, performance.now()) : null;
        })() : Nr(s, performance.now());
        if (!ue || !l.startUv) return;
        const ye = sr(Number(ue.u || 0), Number(l.startUv.u || 0)), Le = Number(ue.v || 0) - Number(l.startUv.v || 0);
        Dp(((w = l.item) == null ? void 0 : w.rasterObjectId) || ((S = l.item) == null ? void 0 : S.id) || "", ye, Le, l.snapshot) && (Ko(), le({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_raster_object") {
        const ye = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        U1(((O = l.item) == null ? void 0 : O.rasterObjectId) || ((M = l.item) == null ? void 0 : M.id) || "", ye, l.snapshot) && (Ko(), le({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_multi") {
        const ue = s.x - Number(((C = l.offset) == null ? void 0 : C.x) || 0), ye = s.y - Number(((D = l.offset) == null ? void 0 : D.y) || 0);
        let Le = !1, ze = !1, Ze = !1;
        const at = ue - Number(((Y = l.startCenter) == null ? void 0 : Y.x) || ue), Ct = ye - Number(((H = l.startCenter) == null ? void 0 : H.y) || ye);
        for (const st of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
          const en = (t === "cutout" ? ou() : ri()).find((Ut) => String((Ut == null ? void 0 : Ut.id) || "") === String(st.id || ""));
          if (!en || !St(en)) continue;
          const Kn = {
            x: Number(((J = st.center) == null ? void 0 : J.x) || 0) + at,
            y: Number(((Z = st.center) == null ? void 0 : Z.y) || 0) + Ct
          };
          if (h.mode === "frame" && V) {
            const Ut = $e(), cn = hn(Ut);
            if (!Ut || !cn) continue;
            const no = {
              x: Q((Kn.x - cn.x) / Math.max(1, cn.w), 0, 1),
              y: Q((Kn.y - cn.y) / Math.max(1, cn.h), 0, 1)
            }, Pm = Au(Ut, no);
            if (!Pm) continue;
            const Am = Tl(Pm);
            Sr(en, { yaw_deg: Am.yaw, pitch_deg: Am.pitch });
          } else if (h.mode === "unwrap") {
            const Ut = Ei(), cn = Q((Kn.x - Ut.x) / Math.max(Ut.w, 1), 0, 1), no = Q((Kn.y - Ut.y) / Math.max(Ut.h, 1), 0, 1);
            Sr(en, { yaw_deg: $t(cn * 360 - 180), pitch_deg: Q(90 - no * 180, -90, 90) });
          } else {
            const Ut = vu(Kn.x, Kn.y), cn = Tl(Ut);
            Sr(en, { yaw_deg: cn.yaw, pitch_deg: cn.pitch });
          }
          Le = !0;
        }
        for (const st of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
          const en = {
            x: Number(((oe = st.center) == null ? void 0 : oe.x) || 0) + at,
            y: Number(((pe = st.center) == null ? void 0 : pe.y) || 0) + Ct
          }, Kn = h.mode === "frame" ? (() => {
            const cn = $e();
            return cn ? Pr(en, cn, performance.now()) : null;
          })() : Nr(en, performance.now()), Ut = st.centerUv || null;
          if (Kn && Ut) {
            const cn = sr(Number(Kn.u || 0), Number(Ut.u || 0)), no = Number(Kn.v || 0) - Number(Ut.v || 0);
            Fp(st.id, cn, no, st.snapshot, st.layerKind, st.frameSnapshot) && (Le = !0, ze = !0);
          }
        }
        for (const st of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
          const en = {
            x: Number(((ee = st.center) == null ? void 0 : ee.x) || 0) + at,
            y: Number(((me = st.center) == null ? void 0 : me.y) || 0) + Ct
          }, Kn = h.mode === "frame" ? (() => {
            const cn = $e();
            return cn ? Pr(en, cn, performance.now()) : null;
          })() : Nr(en, performance.now()), Ut = st.centerUv || null;
          if (Kn && Ut) {
            const cn = sr(Number(Kn.u || 0), Number(Ut.u || 0)), no = Number(Kn.v || 0) - Number(Ut.v || 0);
            Dp(st.id, cn, no, st.snapshot) && (Le = !0, Ze = !0);
          }
        }
        Le && (ze ? Mr({ rebuildPaintEngine: !1 }) : Ze ? Ko() : Rt(), le({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_stroke_group") {
        const ye = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        Tp((Ge = l.item) == null ? void 0 : Ge.actionGroupId, ye, 0, l.snapshot, (Be = l.item) == null ? void 0 : Be.layerKind, l.frameSnapshot) && (Mr({ rebuildPaintEngine: !1 }), le({ localOnly: !0 }));
        return;
      }
      if (l.kind === "rotate_stroke_group") {
        let ue = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * mo;
        i.shiftKey && (ue = Math.round(ue / 45) * 45), Tp((ot = l.item) == null ? void 0 : ot.actionGroupId, 1, ue, l.snapshot, (ve = l.item) == null ? void 0 : ve.layerKind, l.frameSnapshot) && (Mr({ rebuildPaintEngine: !1 }), le({ localOnly: !0 }));
        return;
      }
      if (l.kind === "marquee_select") {
        l.current = s, le({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale") {
        const ye = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Sr(l.item, { hFOV_deg: Q(l.startHFOV * ye, 1, 179), vFOV_deg: Q(l.startVFOV * ye, 1, 179) }), Zn(l.item) || (l.item.aspect_id = ho(l.item)), St(l.item) && Rt(), le({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_x") {
        const ye = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Sr(l.item, { hFOV_deg: Q(l.startHFOV * ye, 1, 179) }), Zn(l.item) || (l.item.aspect_id = ho(l.item)), St(l.item) && Rt(), le({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_y") {
        const ye = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Sr(l.item, { vFOV_deg: Q(l.startVFOV * ye, 1, 179) }), Zn(l.item) || (l.item.aspect_id = ho(l.item)), St(l.item) && Rt(), le({ localOnly: !0 });
        return;
      }
      if (l.kind === "rotate") {
        let ye = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * mo, Le = l.startRot - ye;
        i.shiftKey && (Le = Math.round(Le / 45) * 45), Sr(l.item, { [St(l.item) ? "rot_deg" : "roll_deg"]: Le }), St(l.item) && Rt(), le({ localOnly: !0 });
      }
    }
  }, E.onpointerup = () => {
    var s, l, f, p, m, g, w;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, ht(h.pointerPos), He();
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        om(i);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = h.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        jo();
        const S = Lu(h.interaction), O = !!h.interaction._hasCommittedSegments;
        if (S || O) {
          Mr();
          const M = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (M) {
            const D = kn().find((Y) => String((Y == null ? void 0 : Y.actionGroupId) || "") === M);
            D && (D.frame = null);
          }
          const C = er();
          C && (S ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(C), vh()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, C) : h.paintEngine.cancelActiveStroke(C)), Xe(), Ln(), Re(), He(), e.setDirtyCanvas(!0, !0), le();
        } else {
          const M = er();
          M && h.paintEngine.cancelActiveStroke(M);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const S = tm(h.interaction.start, h.interaction.current), M = [
          ...t === "cutout" ? Pu().filter((C) => !pn(C)) : [...ri()],
          ...G1(),
          ...K1()
        ].filter((C) => Fw(S, Qt(C)));
        q1(M, ((g = M[M.length - 1]) == null ? void 0 : g.id) || null), V && M.length && (h.cutoutAspectOpen = !1), Re(), He(), le();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((w = h.interaction) == null ? void 0 : w.kind))
        h.interaction.changed && (Xe(), tt(), Re());
      else if (h.interaction && h.interaction.kind !== "view") {
        let S = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (S = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (S = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (S = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (S = !0), S && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? Mr({ rebuildPaintEngine: !0 }) : Ko()), Xe(), Ln(), e.setDirtyCanvas(!0, !0), Wo(), He(), le();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && eo(), jo(), i && i.kind === "view" && ln.endDrag(performance.now()), ii(), He(), ht(h.pointerPos), le();
    }
  }, E.onpointercancel = () => {
    var i, s, l, f, p;
    if (!Za()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = h.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        om(h.interaction);
        return;
      }
      if (((l = h.interaction) == null ? void 0 : l.kind) === "view" && ln.endDrag(performance.now()), ((f = h.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((p = h.interaction) == null ? void 0 : p.kind) === "paint_lasso_fill") {
        jo();
        const m = er();
        m && h.paintEngine.cancelActiveStroke(m);
      }
      h.interaction = null, jo(), ii(), ht(h.pointerPos), le({ localOnly: !0 });
    }
  }, E.onlostpointercapture = () => {
    Za();
  }, E.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, E.oncontextmenu = (i) => {
    (cr() || Du()) && uP(gu(), 2) && i.preventDefault();
  }, E.onmousemove = (i) => {
    const s = Di(i), l = gl(s, !0);
    h.interaction || (ht(s), l && h.mode === "frame" && h.primaryTool === "cursor" && le({ localOnly: !0 }));
  }, E.onpointerleave = () => {
    h.interaction || im({ x: -1e6, y: -1e6 });
  }, E.onmouseleave = () => {
    gl(h.pointerPos, !1), ht(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && le({ localOnly: !0 });
  }, E.onwheel = (i) => {
    if (h.mode === "frame") {
      const s = Di(i), l = dc(i);
      l && xn(), l && Du() ? ww(s, -l) : l && bw(s, l) && le({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (Ca(), cr()) {
        const s = dc(i);
        s && vv(Di(i), -s);
      } else ln.applyWheelEvent(i) && le({ localOnly: !0 });
      i.preventDefault();
    }
  }, E.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Ui(!0));
  }, E.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), Lt.depth = 0, Ui(!1);
    const l = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => Ir(p));
    l && Eh(l);
  };
  const sm = (i) => {
    t !== "stickers" && t !== "cutout" || r || Qc(i) && (Lt.depth += 1, Ui(!0), i.preventDefault());
  }, lm = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!Lt.active && Qc(i) && Ui(!0), Lt.active && i.preventDefault());
  }, cm = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !Lt.active) return;
    Lt.depth = Math.max(0, Lt.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (Lt.depth === 0 || s) && Ui(!1);
  }, um = (i) => {
    t !== "stickers" && t !== "cutout" || r || (Lt.depth = 0, Ui(!1), Qc(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", sm, !0), window.addEventListener("dragover", lm, !0), window.addEventListener("dragleave", cm, !0), window.addEventListener("drop", um, !0);
  function Vu() {
    const { canUndo: i, canRedo: s } = Ch();
    ea(A.toolButtons, "value", "undo", { disabled: !i }), ea(A.toolButtons, "value", "redo", { disabled: !s });
  }
  const fm = (i, s, l = !1) => {
    var O;
    xn();
    const f = V && h.mode === "frame" ? $e() : null, p = f || At(), m = f ? "shot" : Da(), g = $o();
    if (g && !nl(g) || !g && (!p || m === "stroke" || _n(p))) return;
    const w = (((O = A.sidePanel) == null ? void 0 : O.params) || []).find((M) => M.key === i);
    if (!w || w.enabled === !1) return;
    let S = Number(s);
    if (Number.isNaN(S) && (S = 0), (g || W) && mE.has(i) ? S = i === "scale" ? Math.max(S, _0) : S : S = Q(S, Number(w.min), Number(w.max)), i === "yaw_deg" && (S = $t(S)), !g && W && i.startsWith("position_")) {
      fr(), YM(_.camera, h.frame, i, S), Re(), le(), l && Xe();
      return;
    }
    if (g) {
      JM(g, h.frame, i, S), Rt(), Re(), le(), l && Xe();
      return;
    }
    i === "opacity" ? XM(p, h.frame, S / 100) : Sr(p, { [i]: S }), V && !Zn(p) && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = ho(p)), Re(), le(), l && Xe();
  };
  mt == null || mt.addEventListener("click", async (i) => {
    var f, p, m, g, w, S, O;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const M = Xn(s.getAttribute("data-coverage"));
      if (M === Xn(_.coverage)) return;
      _.coverage = M, h.coverage = M, d && (d.value = String(M)), a ? ne.backgroundDirty = !0 : (Ln(), gw({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Re(), He(), le();
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
      if (M && (t === "stickers" ? C = [...ri(), ...F ? _.shots : []].find((D) => String((D == null ? void 0 : D.id) || "") === M) || null : C = ((m = Rp().find((D) => {
        var Y;
        return String(((Y = D == null ? void 0 : D.item) == null ? void 0 : Y.id) || "") === M;
      })) == null ? void 0 : m.item) || null), Dn(C || null), C && !sn(C)) {
        const D = an(C);
        Ip($t(Number(D.yaw_deg || 0)), Q(Number(D.pitch_deg || 0), -89.9, 89.9));
      }
      Re(), He(), le();
      return;
    }
    if (l === "copy-state-inline") {
      const M = At(), C = Da();
      if (!M || C === "stroke" || lr().length > 1) return;
      const D = JSON.stringify(V && C !== "image" ? Bp(M) : cv(an(M)));
      try {
        await navigator.clipboard.writeText(D), (g = A.sidePanel) != null && g.copyStateButton && (A.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var Y;
          (Y = A.sidePanel) != null && Y.copyStateButton && (A.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Fu(), Re(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), le();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Fu(), Re(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0), le();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, Fu(), Re(), (O = e.setDirtyCanvas) == null || O.call(e, !0, !0), le();
      return;
    }
    if (l === "close-preview") {
      qo();
      return;
    }
    if (l === "cancel-close") {
      qo();
      return;
    }
    l === "save-close" && (hw(), qo());
  }), mt == null || mt.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && fm(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), mt == null || mt.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && fm(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const $u = () => Tr();
  $u(), T.addEventListener("click", (i) => {
    var O, M, C, D, Y;
    if ((M = (O = i.target) == null ? void 0 : O.matches) != null && M.call(O, "[data-confirm-overlay]")) {
      const H = (C = A.confirmDialog) == null ? void 0 : C.resolve;
      A.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, H == null || H(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      yv(s.getAttribute("data-space-mode"));
      return;
    }
    const l = i.target.closest("[data-gizmo-mode]");
    if (l) {
      h.gizmoMode = l.getAttribute("data-gizmo-mode"), ne.backgroundDirty = !0, He(), le({ localOnly: !0 });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.getAttribute("aria-disabled") === "true") return;
      const H = h.mode;
      h.mode = String(f.getAttribute("data-view") || "pano"), V && h.mode === "frame" && (H !== "frame" && (ne.frameSafeRect = null), Re(), He()), Xa(), ii(), le();
      return;
    }
    const p = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (p && !r) {
      if (p.matches("[data-tool-mode]")) {
        const H = String(p.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = H, (H === "paint" || H === "mask") && La({ preservePanelValues: !0 }), Gn(), Re(), He(), le();
        return;
      }
      if (p.matches("[data-tool-ui-action]")) {
        const H = String(p.getAttribute("data-tool-ui-action") || "");
        if ((H === "undo" || H === "redo") && p.disabled) return;
        H === "undo" ? Iu(-1) : H === "redo" ? Iu(1) : H === "clear" ? aw() : H === "add" || H === "add-image" ? B_() : H === "add-world" ? U_() : H === "add-or-look" ? tw() : H === "add-camera" && nw();
        return;
      }
      if (p.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const H = String(p.getAttribute("data-paint-tool") || "pen");
        h.paintTool = H, La({ preservePanelValues: !0 }), Wn[H] && (h.activeBrushPresetId = H), Gn(), Re(), He(), le();
        return;
      }
      if (p.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(p.getAttribute("data-mask-tool") || "pen"), La({ preservePanelValues: !0 }), Gn(), Re(), He(), le();
        return;
      }
      if (p.matches("[data-paint-layer-clear-current]")) {
        const H = String(p.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        sw(H);
        return;
      }
      if (p.matches("[data-paint-color-swatch]")) {
        const H = tc.find((J) => J.id === p.getAttribute("data-paint-color-swatch"));
        if (!H) return;
        h.paintColor = tr(H.color), Dt(!0), Gn();
        return;
      }
      if (p.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), Ie && !Ie.hidden ? Dt(!0) : En(), Gn();
        return;
      }
    }
    const m = String(((D = p == null ? void 0 : p.getAttribute) == null ? void 0 : D.call(p, "data-action")) || "");
    if (m === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ne instanceof HTMLVideoElement)) return;
      xt.resumeAfterScrub = !1, Ou();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), jp(), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (m === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ne instanceof HTMLVideoElement)) return;
      const H = !A.videoTransport.loop;
      A.videoTransport.loop = H, Ne.loop = H, Ci({
        hasAudio: A.videoTransport.hasAudio,
        loop: H,
        muted: Ne.muted,
        volume: Number(Ne.volume ?? A.videoTransport.volume ?? 1)
      }), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (!r) {
      if (m === "frame-aspect") {
        A.frameRail.aspectOpen = !A.frameRail.aspectOpen;
        return;
      }
      if (m === "frame-aspect-set") {
        const H = h.mode === "frame" ? $e() : null;
        if (!H || H.locked === !0) return;
        Th(H, String(p.getAttribute("data-aspect") || "1:1")), A.frameRail.aspectOpen = !1, Wo(), Xe(), tt(), ii(), Re(), He(), le();
        return;
      }
      if (m === "frame-aspect-custom") {
        const H = h.mode === "frame" ? $e() : null, J = p.getAttribute("data-custom-width"), Z = p.getAttribute("data-custom-height");
        if (!H || !fw(H, J, Z)) return;
        A.frameRail.aspectOpen = !1, Wo(), Xe(), tt(), ii(), le();
        return;
      }
      if (m === "frame-rotate-90") {
        const H = h.mode === "frame" ? $e() : null;
        if (!H || H.locked === !0) return;
        Rh(H), A.frameRail.aspectOpen = !1, Wo(), Xe(), tt(), ii(), le();
        return;
      }
      if (m === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, He(), le();
        return;
      }
      if (m === "aspect-set") {
        const H = At();
        if (!H) return;
        const J = String(p.getAttribute("data-aspect") || "1:1");
        Th(H, J), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Wo(), Xe(), tt(), He(), le();
        return;
      }
      if (m === "rotate-90") {
        const H = At();
        if (!H || qi()) return;
        Rh(H), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Wo(), Xe(), tt(), He(), le();
        return;
      }
      if (m === "bring-front") {
        dw();
        return;
      }
      if (m === "send-back") {
        pw();
        return;
      }
      if (m === "duplicate") {
        lw();
        return;
      }
      if (m === "replace-image") {
        Z_();
        return;
      }
      if (m === "toggle-lock") {
        X1();
        return;
      }
      if (m === "back-initial") {
        tv();
        return;
      }
      if (m === "toggle-visible") {
        ev();
        return;
      }
      if (m === "delete") {
        Lh();
        return;
      }
    }
    if (m === "reset-view") {
      if (h.mode === "frame") return;
      Yi(
        { position: zo(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Y = Lr()) == null ? void 0 : Y.radius) || Ar },
        { mode: ec(h.spaceMode, h.viewTransition), moved: !1 }
      );
      return;
    }
    if (m === "frame-view") {
      if (!cr() || ec(h.spaceMode, h.viewTransition) !== "6dof") return;
      bv();
      return;
    }
    if (m === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, BE(e == null ? void 0 : e.id, h.showGrid), $u(), le();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), Kw();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const H = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = H, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = H ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), gm(), le();
      return;
    }
    const g = i.target.closest("[data-paint-history-index]");
    if (!g) return;
    const w = Number(g.getAttribute("data-paint-history-index")), S = h.customPaintHistory[w];
    S && (h.customPaintColor = tr(S), h.paintColor = tr(S), Gn());
  }), T.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Ne instanceof HTMLVideoElement)) return;
      on.playing && (xt.resumeAfterScrub = !0), on.seek(fo(Number(s.value || 0), tl()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(Ne instanceof HTMLVideoElement)) return;
      const m = Q(Number(l.value || 0), 0, 1);
      Ne.volume = m, Ne.muted = m <= 1e-4, Ci({
        hasAudio: A.videoTransport.hasAudio,
        muted: Ne.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), g = Li(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[g] = m, Gn(), Nw();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: Q(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = tr(m), h.paintColor = tr(m), Gn();
    }
  }), T.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Ne instanceof HTMLVideoElement)) return;
      xt.resumeAfterScrub && on.play(), xt.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && yl();
  }), T.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && yl();
  }), T.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && yl();
  }), T.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && yl();
  }), T.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !T.contains(s) || Wt.target !== s && (Wt.target = s, Wt.timer && clearTimeout(Wt.timer), Wt.timer = window.setTimeout(() => {
      Wt.target === s && Dw(s);
    }, 220));
  }), T.addEventListener("pointerout", (i) => {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || Wt.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || eo();
  }), T.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || eo();
  });
  const Hw = (i, s) => {
    var w;
    if (!Ce) return;
    const l = Ce.getBoundingClientRect(), f = Q((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - Q((s - l.top) / Math.max(1, l.height), 0, 1), m = Tf(h.customPaintColor), g = { ...Ff(m.h, f, p), a: Number(((w = h.customPaintColor) == null ? void 0 : w.a) ?? 1) };
    h.customPaintColor = tr(g), h.paintColor = tr(g), Gn();
  }, Gw = (i) => {
    var m;
    if (!je) return;
    const s = je.getBoundingClientRect(), l = Q((i - s.left) / Math.max(1, s.width), 0, 1), f = Tf(h.customPaintColor), p = { ...Ff(l, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = tr(p), h.paintColor = tr(p), Gn();
  }, dm = (i, s) => {
    const l = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === l && s(m);
    }, p = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  Ce && (Ce.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), dm(i, (s) => Hw(s.clientX, s.clientY));
  }), je && (je.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), dm(i, (s) => Gw(s.clientX));
  }), T.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", f = (p = A.confirmDialog) == null ? void 0 : p.resolve;
    A.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(l);
  });
  const pm = () => {
    const i = !!h.fullscreen;
    ea(A.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? ke.fullscreen_close : ke.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, bl = (i) => {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, T.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), $u(), pm(), Eo(), le());
  }, hm = () => document.fullscreenElement === q, Kw = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        bl(!h.fullscreen);
        return;
      }
      hm() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = q.requestFullscreen) == null ? void 0 : i.call(q));
    } catch {
      bl(!h.fullscreen);
    }
  }, mm = () => {
    document.fullscreenEnabled && bl(hm());
  };
  document.addEventListener("fullscreenchange", mm), pm();
  const gm = () => {
    const i = !!h.outputPreviewExpanded;
    A.outputPreviewToggle.icon = i ? ke.fullscreen_close : ke.fullscreen, A.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", A.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  gm();
  const zu = e.onConnectionsChange;
  let ju = null, ym = () => {
  };
  !r && t === "stickers" && (ym = f1(e, (i = "sync") => {
    i === "executed" && (FE(Zt, El), Ii(), P && K_()), Up(i);
  }, { editor: !0 }), ju = function(...s) {
    typeof zu == "function" && zu.apply(this, s), Ii(), bi(this, "connections");
  }, e.onConnectionsChange = ju), !r && !I && k0.set(String(e.id ?? "0"), () => oh());
  let Xo = null;
  const qo = async () => Xo || (Xo = (async () => {
    var i, s, l, f, p, m, g, w;
    return k0.delete(String(e.id ?? "0")), xw(), r || Ln(), document.fullscreenElement === q && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", mm), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === $h && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (w = (g = (m = Or) == null ? void 0 : m.canvas) == null ? void 0 : g.setDirty) == null || w.call(g, !0, !0), eo(), $_(), Ne instanceof HTMLVideoElement && Ne.pause(), ni.forEach((S) => {
      try {
        S();
      } catch {
      }
    }), Fe.dispose(), Ui(!1), window.removeEventListener("keydown", bm, !0), window.removeEventListener("keydown", vm, !0), window.removeEventListener("keydown", wm, !0), window.removeEventListener("keyup", xm, !0), window.removeEventListener("keydown", vl, !0), window.removeEventListener("keyup", vl, !0), window.removeEventListener("blur", Sm), window.removeEventListener("keydown", km, !0), window.removeEventListener("dragenter", sm, !0), window.removeEventListener("dragover", lm, !0), window.removeEventListener("dragleave", cm, !0), window.removeEventListener("drop", um, !0), !r && t === "stickers" && (e.onConnectionsChange === ju && (e.onConnectionsChange = zu), ym()), fe.unmount(), L.remove(), mw(), Xo = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), Xo = null, !1)), Xo), bm = (i) => {
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
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), bl(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), qo();
    }
  }, vm = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || f === 46) && !(s === "Backspace" || l === "Backspace" || f === 8)) return;
    const g = i.target, w = ((g == null ? void 0 : g.tagName) || "").toUpperCase();
    if (w === "INPUT" || w === "TEXTAREA" || g != null && g.isContentEditable) return;
    if (Ke.selection) {
      G_(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if (cw()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    At() && (Lh(), i.preventDefault(), i.stopPropagation());
  }, _m = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !k || !A.timeline.visible || A.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !q.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !hE.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, wm = (i) => {
    _m(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Ou());
  }, xm = (i) => {
    _m(i) && (i.preventDefault(), i.stopPropagation());
  }, vl = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === l || (h.marqueeModifier = s, h.altModifier = l, ai(), ht(h.pointerPos));
  }, Sm = () => {
    h.marqueeModifier = !1, h.altModifier = !1, ai(), ht(h.pointerPos);
  }, km = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: g } = Ch();
    i.shiftKey && !g || !i.shiftKey && !m || (Iu(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", bm, !0), window.addEventListener("keydown", vm, !0), window.addEventListener("keydown", wm, !0), window.addEventListener("keyup", xm, !0), window.addEventListener("keydown", vl, !0), window.addEventListener("keyup", vl, !0), window.addEventListener("blur", Sm), window.addEventListener("keydown", km, !0), q.addEventListener("pointerdown", (i) => {
    i.target === q && qo();
  });
  function $r(i, s, { rollbackState: l = !1 } = {}) {
    let f = "";
    try {
      l && (f = JSON.stringify(_)), s();
    } catch (p) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(_).forEach((g) => delete _[g]), Object.assign(_, m), r || Ln();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      A.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  $r("cutout-focus", hv), !r && t === "stickers" && $r("external-sticker-sync", () => Up("open"), { rollbackState: !0 }), Q_().catch((i) => {
    A.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), $r("history", Xe), $r("undo-redo", Vu), $r("paint-ui", Gn), $r("side-panel", Re), $r("look-at-frame", mu), $r("video-source", Ii), $r("canvas-size", Mh), $r("cursor", () => ht(h.pointerPos)), le(), ne.rafId = requestAnimationFrame(Ph);
}
Or.registerExtension(_P({
  app: Or,
  openEditor: ZE,
  attachStickers: TA,
  attachCutout: DA,
  attachPreview: FA,
  restoreOutput: _A,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: _E
}));
