import * as Bl from "../../scripts/app.js";
import { app as lr } from "../../scripts/app.js";
import { api as Qt } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ud(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const Ot = {}, fa = [], ti = () => {
}, ey = () => !1, Bc = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Uc = (e) => e.startsWith("onUpdate:"), Dn = Object.assign, Yd = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, kS = Object.prototype.hasOwnProperty, kt = (e, t) => kS.call(e, t), et = Array.isArray, da = (e) => Zs(e) === "[object Map]", ty = (e) => Zs(e) === "[object Set]", tg = (e) => Zs(e) === "[object Date]", ot = (e) => typeof e == "function", ln = (e) => typeof e == "string", ii = (e) => typeof e == "symbol", Et = (e) => e !== null && typeof e == "object", ny = (e) => (Et(e) || ot(e)) && ot(e.then) && ot(e.catch), ry = Object.prototype.toString, Zs = (e) => ry.call(e), MS = (e) => Zs(e).slice(8, -1), iy = (e) => Zs(e) === "[object Object]", Xd = (e) => ln(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ms = /* @__PURE__ */ Ud(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Yc = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, NS = /-\w/g, Hn = Yc(
  (e) => e.replace(NS, (t) => t.slice(1).toUpperCase())
), PS = /\B([A-Z])/g, Oo = Yc(
  (e) => e.replace(PS, "-$1").toLowerCase()
), Xc = Yc((e) => e.charAt(0).toUpperCase() + e.slice(1)), of = Yc(
  (e) => e ? `on${Xc(e)}` : ""
), Qr = (e, t) => !Object.is(e, t), Ul = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, oy = (e, t, n, r = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: n
  });
}, qd = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ng;
const qc = () => ng || (ng = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function It(e) {
  if (et(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n], o = ln(r) ? ES(r) : It(r);
      if (o)
        for (const a in o)
          t[a] = o[a];
    }
    return t;
  } else if (ln(e) || Et(e))
    return e;
}
const AS = /;(?![^(]*\))/g, CS = /:([^]+)/, IS = /\/\*[^]*?\*\//g;
function ES(e) {
  const t = {};
  return e.replace(IS, "").split(AS).forEach((n) => {
    if (n) {
      const r = n.split(CS);
      r.length > 1 && (t[r[0].trim()] = r[1].trim());
    }
  }), t;
}
function pt(e) {
  let t = "";
  if (ln(e))
    t = e;
  else if (et(e))
    for (let n = 0; n < e.length; n++) {
      const r = pt(e[n]);
      r && (t += r + " ");
    }
  else if (Et(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const OS = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", FS = /* @__PURE__ */ Ud(OS);
function ay(e) {
  return !!e || e === "";
}
function TS(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let r = 0; n && r < e.length; r++)
    n = Jd(e[r], t[r]);
  return n;
}
function Jd(e, t) {
  if (e === t) return !0;
  let n = tg(e), r = tg(t);
  if (n || r)
    return n && r ? e.getTime() === t.getTime() : !1;
  if (n = ii(e), r = ii(t), n || r)
    return e === t;
  if (n = et(e), r = et(t), n || r)
    return n && r ? TS(e, t) : !1;
  if (n = Et(e), r = Et(t), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(e).length, a = Object.keys(t).length;
    if (o !== a)
      return !1;
    for (const c in e) {
      const u = e.hasOwnProperty(c), d = t.hasOwnProperty(c);
      if (u && !d || !u && d || !Jd(e[c], t[c]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const sy = (e) => !!(e && e.__v_isRef === !0), rt = (e) => ln(e) ? e : e == null ? "" : et(e) || Et(e) && (e.toString === ry || !ot(e.toString)) ? sy(e) ? rt(e.value) : JSON.stringify(e, ly, 2) : String(e), ly = (e, t) => sy(t) ? ly(e, t.value) : da(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [r, o], a) => (n[af(r, a) + " =>"] = o, n),
    {}
  )
} : ty(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => af(n))
} : ii(t) ? af(t) : Et(t) && !et(t) && !iy(t) ? String(t) : t, af = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ii(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qn;
class DS {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = qn, !t && qn && (this.index = (qn.scopes || (qn.scopes = [])).push(
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
      const n = qn;
      try {
        return qn = this, t();
      } finally {
        qn = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = qn, qn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (qn = this.prevScope, this.prevScope = void 0);
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
function LS() {
  return qn;
}
let Dt;
const sf = /* @__PURE__ */ new WeakSet();
class cy {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, qn && qn.active && qn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, sf.has(this) && (sf.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || fy(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, rg(this), dy(this);
    const t = Dt, n = Dr;
    Dt = this, Dr = !0;
    try {
      return this.fn();
    } finally {
      py(this), Dt = t, Dr = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ep(t);
      this.deps = this.depsTail = void 0, rg(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? sf.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ed(this) && this.run();
  }
  get dirty() {
    return ed(this);
  }
}
let uy = 0, Ns, Ps;
function fy(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ps, Ps = e;
    return;
  }
  e.next = Ns, Ns = e;
}
function Zd() {
  uy++;
}
function Qd() {
  if (--uy > 0)
    return;
  if (Ps) {
    let t = Ps;
    for (Ps = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Ns; ) {
    let t = Ns;
    for (Ns = void 0; t; ) {
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
function dy(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function py(e) {
  let t, n = e.depsTail, r = n;
  for (; r; ) {
    const o = r.prevDep;
    r.version === -1 ? (r === n && (n = o), ep(r), RS(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = o;
  }
  e.deps = t, e.depsTail = n;
}
function ed(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (hy(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function hy(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ls) || (e.globalVersion = Ls, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ed(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = Dt, r = Dr;
  Dt = e, Dr = !0;
  try {
    dy(e);
    const o = e.fn(e._value);
    (t.version === 0 || Qr(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    Dt = n, Dr = r, py(e), e.flags &= -3;
  }
}
function ep(e, t = !1) {
  const { dep: n, prevSub: r, nextSub: o } = e;
  if (r && (r.nextSub = o, e.prevSub = void 0), o && (o.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
    n.computed.flags &= -5;
    for (let a = n.computed.deps; a; a = a.nextDep)
      ep(a, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function RS(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Dr = !0;
const my = [];
function Mi() {
  my.push(Dr), Dr = !1;
}
function Ni() {
  const e = my.pop();
  Dr = e === void 0 ? !0 : e;
}
function rg(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = Dt;
    Dt = void 0;
    try {
      t();
    } finally {
      Dt = n;
    }
  }
}
let Ls = 0;
class VS {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class tp {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Dt || !Dr || Dt === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== Dt)
      n = this.activeLink = new VS(Dt, this), Dt.deps ? (n.prevDep = Dt.depsTail, Dt.depsTail.nextDep = n, Dt.depsTail = n) : Dt.deps = Dt.depsTail = n, gy(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const r = n.nextDep;
      r.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = r), n.prevDep = Dt.depsTail, n.nextDep = void 0, Dt.depsTail.nextDep = n, Dt.depsTail = n, Dt.deps === n && (Dt.deps = r);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ls++, this.notify(t);
  }
  notify(t) {
    Zd();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Qd();
    }
  }
}
function gy(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let r = t.deps; r; r = r.nextDep)
        gy(r);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const td = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ Symbol(
  ""
), nd = /* @__PURE__ */ Symbol(
  ""
), Rs = /* @__PURE__ */ Symbol(
  ""
);
function En(e, t, n) {
  if (Dr && Dt) {
    let r = td.get(e);
    r || td.set(e, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || (r.set(n, o = new tp()), o.map = r, o.key = n), o.track();
  }
}
function _i(e, t, n, r, o, a) {
  const c = td.get(e);
  if (!c) {
    Ls++;
    return;
  }
  const u = (d) => {
    d && d.trigger();
  };
  if (Zd(), t === "clear")
    c.forEach(u);
  else {
    const d = et(e), b = d && Xd(n);
    if (d && n === "length") {
      const g = Number(r);
      c.forEach((v, S) => {
        (S === "length" || S === Rs || !ii(S) && S >= g) && u(v);
      });
    } else
      switch ((n !== void 0 || c.has(void 0)) && u(c.get(n)), b && u(c.get(Rs)), t) {
        case "add":
          d ? b && u(c.get("length")) : (u(c.get(xo)), da(e) && u(c.get(nd)));
          break;
        case "delete":
          d || (u(c.get(xo)), da(e) && u(c.get(nd)));
          break;
        case "set":
          da(e) && u(c.get(xo));
          break;
      }
  }
  Qd();
}
function Zo(e) {
  const t = /* @__PURE__ */ xt(e);
  return t === e ? t : (En(t, "iterate", Rs), /* @__PURE__ */ _r(e) ? t : t.map(Lr));
}
function Jc(e) {
  return En(e = /* @__PURE__ */ xt(e), "iterate", Rs), e;
}
function Jr(e, t) {
  return /* @__PURE__ */ Pi(e) ? xa(/* @__PURE__ */ ko(e) ? Lr(t) : t) : Lr(t);
}
const $S = {
  __proto__: null,
  [Symbol.iterator]() {
    return lf(this, Symbol.iterator, (e) => Jr(this, e));
  },
  concat(...e) {
    return Zo(this).concat(
      ...e.map((t) => et(t) ? Zo(t) : t)
    );
  },
  entries() {
    return lf(this, "entries", (e) => (e[1] = Jr(this, e[1]), e));
  },
  every(e, t) {
    return pi(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return pi(
      this,
      "filter",
      e,
      t,
      (n) => n.map((r) => Jr(this, r)),
      arguments
    );
  },
  find(e, t) {
    return pi(
      this,
      "find",
      e,
      t,
      (n) => Jr(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return pi(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return pi(
      this,
      "findLast",
      e,
      t,
      (n) => Jr(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return pi(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return pi(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return cf(this, "includes", e);
  },
  indexOf(...e) {
    return cf(this, "indexOf", e);
  },
  join(e) {
    return Zo(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return cf(this, "lastIndexOf", e);
  },
  map(e, t) {
    return pi(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ss(this, "pop");
  },
  push(...e) {
    return ss(this, "push", e);
  },
  reduce(e, ...t) {
    return ig(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ig(this, "reduceRight", e, t);
  },
  shift() {
    return ss(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return pi(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ss(this, "splice", e);
  },
  toReversed() {
    return Zo(this).toReversed();
  },
  toSorted(e) {
    return Zo(this).toSorted(e);
  },
  toSpliced(...e) {
    return Zo(this).toSpliced(...e);
  },
  unshift(...e) {
    return ss(this, "unshift", e);
  },
  values() {
    return lf(this, "values", (e) => Jr(this, e));
  }
};
function lf(e, t, n) {
  const r = Jc(e), o = r[t]();
  return r !== e && !/* @__PURE__ */ _r(e) && (o._next = o.next, o.next = () => {
    const a = o._next();
    return a.done || (a.value = n(a.value)), a;
  }), o;
}
const zS = Array.prototype;
function pi(e, t, n, r, o, a) {
  const c = Jc(e), u = c !== e && !/* @__PURE__ */ _r(e), d = c[t];
  if (d !== zS[t]) {
    const v = d.apply(e, a);
    return u ? Lr(v) : v;
  }
  let b = n;
  c !== e && (u ? b = function(v, S) {
    return n.call(this, Jr(e, v), S, e);
  } : n.length > 2 && (b = function(v, S) {
    return n.call(this, v, S, e);
  }));
  const g = d.call(c, b, r);
  return u && o ? o(g) : g;
}
function ig(e, t, n, r) {
  const o = Jc(e), a = o !== e && !/* @__PURE__ */ _r(e);
  let c = n, u = !1;
  o !== e && (a ? (u = r.length === 0, c = function(b, g, v) {
    return u && (u = !1, b = Jr(e, b)), n.call(this, b, Jr(e, g), v, e);
  }) : n.length > 3 && (c = function(b, g, v) {
    return n.call(this, b, g, v, e);
  }));
  const d = o[t](c, ...r);
  return u ? Jr(e, d) : d;
}
function cf(e, t, n) {
  const r = /* @__PURE__ */ xt(e);
  En(r, "iterate", Rs);
  const o = r[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ ip(n[0]) ? (n[0] = /* @__PURE__ */ xt(n[0]), r[t](...n)) : o;
}
function ss(e, t, n = []) {
  Mi(), Zd();
  const r = (/* @__PURE__ */ xt(e))[t].apply(e, n);
  return Qd(), Ni(), r;
}
const jS = /* @__PURE__ */ Ud("__proto__,__v_isRef,__isVue"), yy = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ii)
);
function HS(e) {
  ii(e) || (e = String(e));
  const t = /* @__PURE__ */ xt(this);
  return En(t, "has", e), t.hasOwnProperty(e);
}
class by {
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
      return r === (o ? a ? ZS : Sy : a ? wy : _y).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(r) ? t : void 0;
    const c = et(t);
    if (!o) {
      let d;
      if (c && (d = $S[n]))
        return d;
      if (n === "hasOwnProperty")
        return HS;
    }
    const u = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Tn(t) ? t : r
    );
    if ((ii(n) ? yy.has(n) : jS(n)) || (o || En(t, "get", n), a))
      return u;
    if (/* @__PURE__ */ Tn(u)) {
      const d = c && Xd(n) ? u : u.value;
      return o && Et(d) ? /* @__PURE__ */ id(d) : d;
    }
    return Et(u) ? o ? /* @__PURE__ */ id(u) : /* @__PURE__ */ Aa(u) : u;
  }
}
class vy extends by {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, r, o) {
    let a = t[n];
    const c = et(t) && Xd(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ Pi(a);
      if (!/* @__PURE__ */ _r(r) && !/* @__PURE__ */ Pi(r) && (a = /* @__PURE__ */ xt(a), r = /* @__PURE__ */ xt(r)), !c && /* @__PURE__ */ Tn(a) && !/* @__PURE__ */ Tn(r))
        return b || (a.value = r), !0;
    }
    const u = c ? Number(n) < t.length : kt(t, n), d = Reflect.set(
      t,
      n,
      r,
      /* @__PURE__ */ Tn(t) ? t : o
    );
    return t === /* @__PURE__ */ xt(o) && (u ? Qr(r, a) && _i(t, "set", n, r) : _i(t, "add", n, r)), d;
  }
  deleteProperty(t, n) {
    const r = kt(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && r && _i(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const r = Reflect.has(t, n);
    return (!ii(n) || !yy.has(n)) && En(t, "has", n), r;
  }
  ownKeys(t) {
    return En(
      t,
      "iterate",
      et(t) ? "length" : xo
    ), Reflect.ownKeys(t);
  }
}
class GS extends by {
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
const KS = /* @__PURE__ */ new vy(), WS = /* @__PURE__ */ new GS(), BS = /* @__PURE__ */ new vy(!0);
const rd = (e) => e, Al = (e) => Reflect.getPrototypeOf(e);
function US(e, t, n) {
  return function(...r) {
    const o = this.__v_raw, a = /* @__PURE__ */ xt(o), c = da(a), u = e === "entries" || e === Symbol.iterator && c, d = e === "keys" && c, b = o[e](...r), g = n ? rd : t ? xa : Lr;
    return !t && En(
      a,
      "iterate",
      d ? nd : xo
    ), Dn(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: v, done: S } = b.next();
          return S ? { value: v, done: S } : {
            value: u ? [g(v[0]), g(v[1])] : g(v),
            done: S
          };
        }
      }
    );
  };
}
function Cl(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function YS(e, t) {
  const n = {
    get(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ xt(a), u = /* @__PURE__ */ xt(o);
      e || (Qr(o, u) && En(c, "get", o), En(c, "get", u));
      const { has: d } = Al(c), b = t ? rd : e ? xa : Lr;
      if (d.call(c, o))
        return b(a.get(o));
      if (d.call(c, u))
        return b(a.get(u));
      a !== c && a.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && En(/* @__PURE__ */ xt(o), "iterate", xo), o.size;
    },
    has(o) {
      const a = this.__v_raw, c = /* @__PURE__ */ xt(a), u = /* @__PURE__ */ xt(o);
      return e || (Qr(o, u) && En(c, "has", o), En(c, "has", u)), o === u ? a.has(o) : a.has(o) || a.has(u);
    },
    forEach(o, a) {
      const c = this, u = c.__v_raw, d = /* @__PURE__ */ xt(u), b = t ? rd : e ? xa : Lr;
      return !e && En(d, "iterate", xo), u.forEach((g, v) => o.call(a, b(g), b(v), c));
    }
  };
  return Dn(
    n,
    e ? {
      add: Cl("add"),
      set: Cl("set"),
      delete: Cl("delete"),
      clear: Cl("clear")
    } : {
      add(o) {
        const a = /* @__PURE__ */ xt(this), c = Al(a), u = /* @__PURE__ */ xt(o), d = !t && !/* @__PURE__ */ _r(o) && !/* @__PURE__ */ Pi(o) ? u : o;
        return c.has.call(a, d) || Qr(o, d) && c.has.call(a, o) || Qr(u, d) && c.has.call(a, u) || (a.add(d), _i(a, "add", d, d)), this;
      },
      set(o, a) {
        !t && !/* @__PURE__ */ _r(a) && !/* @__PURE__ */ Pi(a) && (a = /* @__PURE__ */ xt(a));
        const c = /* @__PURE__ */ xt(this), { has: u, get: d } = Al(c);
        let b = u.call(c, o);
        b || (o = /* @__PURE__ */ xt(o), b = u.call(c, o));
        const g = d.call(c, o);
        return c.set(o, a), b ? Qr(a, g) && _i(c, "set", o, a) : _i(c, "add", o, a), this;
      },
      delete(o) {
        const a = /* @__PURE__ */ xt(this), { has: c, get: u } = Al(a);
        let d = c.call(a, o);
        d || (o = /* @__PURE__ */ xt(o), d = c.call(a, o)), u && u.call(a, o);
        const b = a.delete(o);
        return d && _i(a, "delete", o, void 0), b;
      },
      clear() {
        const o = /* @__PURE__ */ xt(this), a = o.size !== 0, c = o.clear();
        return a && _i(
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
    n[o] = US(o, e, t);
  }), n;
}
function np(e, t) {
  const n = YS(e, t);
  return (r, o, a) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(
    kt(n, o) && o in r ? n : r,
    o,
    a
  );
}
const XS = {
  get: /* @__PURE__ */ np(!1, !1)
}, qS = {
  get: /* @__PURE__ */ np(!1, !0)
}, JS = {
  get: /* @__PURE__ */ np(!0, !1)
};
const _y = /* @__PURE__ */ new WeakMap(), wy = /* @__PURE__ */ new WeakMap(), Sy = /* @__PURE__ */ new WeakMap(), ZS = /* @__PURE__ */ new WeakMap();
function QS(e) {
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
function ex(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : QS(MS(e));
}
// @__NO_SIDE_EFFECTS__
function Aa(e) {
  return /* @__PURE__ */ Pi(e) ? e : rp(
    e,
    !1,
    KS,
    XS,
    _y
  );
}
// @__NO_SIDE_EFFECTS__
function tx(e) {
  return rp(
    e,
    !1,
    BS,
    qS,
    wy
  );
}
// @__NO_SIDE_EFFECTS__
function id(e) {
  return rp(
    e,
    !0,
    WS,
    JS,
    Sy
  );
}
function rp(e, t, n, r, o) {
  if (!Et(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const a = ex(e);
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
function ko(e) {
  return /* @__PURE__ */ Pi(e) ? /* @__PURE__ */ ko(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Pi(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function _r(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ip(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ xt(t) : e;
}
function nx(e) {
  return !kt(e, "__v_skip") && Object.isExtensible(e) && oy(e, "__v_skip", !0), e;
}
const Lr = (e) => Et(e) ? /* @__PURE__ */ Aa(e) : e, xa = (e) => Et(e) ? /* @__PURE__ */ id(e) : e;
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function en(e) {
  return xy(e, !1);
}
// @__NO_SIDE_EFFECTS__
function hc(e) {
  return xy(e, !0);
}
function xy(e, t) {
  return /* @__PURE__ */ Tn(e) ? e : new rx(e, t);
}
class rx {
  constructor(t, n) {
    this.dep = new tp(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ xt(t), this._value = n ? t : Lr(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, r = this.__v_isShallow || /* @__PURE__ */ _r(t) || /* @__PURE__ */ Pi(t);
    t = r ? t : /* @__PURE__ */ xt(t), Qr(t, n) && (this._rawValue = t, this._value = r ? t : Lr(t), this.dep.trigger());
  }
}
function Qe(e) {
  return /* @__PURE__ */ Tn(e) ? e.value : e;
}
const ix = {
  get: (e, t, n) => t === "__v_raw" ? e : Qe(Reflect.get(e, t, n)),
  set: (e, t, n, r) => {
    const o = e[t];
    return /* @__PURE__ */ Tn(o) && !/* @__PURE__ */ Tn(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r);
  }
};
function ky(e) {
  return /* @__PURE__ */ ko(e) ? e : new Proxy(e, ix);
}
class ox {
  constructor(t, n, r) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new tp(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ls - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Dt !== this)
      return fy(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return hy(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ax(e, t, n = !1) {
  let r, o;
  return ot(e) ? r = e : (r = e.get, o = e.set), new ox(r, o, n);
}
const Il = {}, mc = /* @__PURE__ */ new WeakMap();
let yo;
function sx(e, t = !1, n = yo) {
  if (n) {
    let r = mc.get(n);
    r || mc.set(n, r = []), r.push(e);
  }
}
function lx(e, t, n = Ot) {
  const { immediate: r, deep: o, once: a, scheduler: c, augmentJob: u, call: d } = n, b = (V) => o ? V : /* @__PURE__ */ _r(V) || o === !1 || o === 0 ? wi(V, 1) : wi(V);
  let g, v, S, M, k = !1, P = !1;
  if (/* @__PURE__ */ Tn(e) ? (v = () => e.value, k = /* @__PURE__ */ _r(e)) : /* @__PURE__ */ ko(e) ? (v = () => b(e), k = !0) : et(e) ? (P = !0, k = e.some((V) => /* @__PURE__ */ ko(V) || /* @__PURE__ */ _r(V)), v = () => e.map((V) => {
    if (/* @__PURE__ */ Tn(V))
      return V.value;
    if (/* @__PURE__ */ ko(V))
      return b(V);
    if (ot(V))
      return d ? d(V, 2) : V();
  })) : ot(e) ? t ? v = d ? () => d(e, 2) : e : v = () => {
    if (S) {
      Mi();
      try {
        S();
      } finally {
        Ni();
      }
    }
    const V = yo;
    yo = g;
    try {
      return d ? d(e, 3, [M]) : e(M);
    } finally {
      yo = V;
    }
  } : v = ti, t && o) {
    const V = v, _ = o === !0 ? 1 / 0 : o;
    v = () => wi(V(), _);
  }
  const A = LS(), O = () => {
    g.stop(), A && A.active && Yd(A.effects, g);
  };
  if (a && t) {
    const V = t;
    t = (..._) => {
      V(..._), O();
    };
  }
  let G = P ? new Array(e.length).fill(Il) : Il;
  const R = (V) => {
    if (!(!(g.flags & 1) || !g.dirty && !V))
      if (t) {
        const _ = g.run();
        if (o || k || (P ? _.some((j, W) => Qr(j, G[W])) : Qr(_, G))) {
          S && S();
          const j = yo;
          yo = g;
          try {
            const W = [
              _,
              // pass undefined as the old value when it's changed for the first time
              G === Il ? void 0 : P && G[0] === Il ? [] : G,
              M
            ];
            G = _, d ? d(t, 3, W) : (
              // @ts-expect-error
              t(...W)
            );
          } finally {
            yo = j;
          }
        }
      } else
        g.run();
  };
  return u && u(R), g = new cy(v), g.scheduler = c ? () => c(R, !1) : R, M = (V) => sx(V, !1, g), S = g.onStop = () => {
    const V = mc.get(g);
    if (V) {
      if (d)
        d(V, 4);
      else
        for (const _ of V) _();
      mc.delete(g);
    }
  }, t ? r ? R(!0) : G = g.run() : c ? c(R.bind(null, !0), !0) : g.run(), O.pause = g.pause.bind(g), O.resume = g.resume.bind(g), O.stop = O, O;
}
function wi(e, t = 1 / 0, n) {
  if (t <= 0 || !Et(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Tn(e))
    wi(e.value, t, n);
  else if (et(e))
    for (let r = 0; r < e.length; r++)
      wi(e[r], t, n);
  else if (ty(e) || da(e))
    e.forEach((r) => {
      wi(r, t, n);
    });
  else if (iy(e)) {
    for (const r in e)
      wi(e[r], t, n);
    for (const r of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, r) && wi(e[r], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Qs(e, t, n, r) {
  try {
    return r ? e(...r) : e();
  } catch (o) {
    Zc(o, t, n);
  }
}
function oi(e, t, n, r) {
  if (ot(e)) {
    const o = Qs(e, t, n, r);
    return o && ny(o) && o.catch((a) => {
      Zc(a, t, n);
    }), o;
  }
  if (et(e)) {
    const o = [];
    for (let a = 0; a < e.length; a++)
      o.push(oi(e[a], t, n, r));
    return o;
  }
}
function Zc(e, t, n, r = !0) {
  const o = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: c } = t && t.appContext.config || Ot;
  if (t) {
    let u = t.parent;
    const d = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; u; ) {
      const g = u.ec;
      if (g) {
        for (let v = 0; v < g.length; v++)
          if (g[v](e, d, b) === !1)
            return;
      }
      u = u.parent;
    }
    if (a) {
      Mi(), Qs(a, null, 10, [
        e,
        d,
        b
      ]), Ni();
      return;
    }
  }
  cx(e, n, o, r, c);
}
function cx(e, t, n, r = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const zn = [];
let qr = -1;
const pa = [];
let Hi = null, ia = 0;
const My = /* @__PURE__ */ Promise.resolve();
let gc = null;
function Qc(e) {
  const t = gc || My;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ux(e) {
  let t = qr + 1, n = zn.length;
  for (; t < n; ) {
    const r = t + n >>> 1, o = zn[r], a = Vs(o);
    a < e || a === e && o.flags & 2 ? t = r + 1 : n = r;
  }
  return t;
}
function op(e) {
  if (!(e.flags & 1)) {
    const t = Vs(e), n = zn[zn.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Vs(n) ? zn.push(e) : zn.splice(ux(t), 0, e), e.flags |= 1, Ny();
  }
}
function Ny() {
  gc || (gc = My.then(Ay));
}
function fx(e) {
  et(e) ? pa.push(...e) : Hi && e.id === -1 ? Hi.splice(ia + 1, 0, e) : e.flags & 1 || (pa.push(e), e.flags |= 1), Ny();
}
function og(e, t, n = qr + 1) {
  for (; n < zn.length; n++) {
    const r = zn[n];
    if (r && r.flags & 2) {
      if (e && r.id !== e.uid)
        continue;
      zn.splice(n, 1), n--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function Py(e) {
  if (pa.length) {
    const t = [...new Set(pa)].sort(
      (n, r) => Vs(n) - Vs(r)
    );
    if (pa.length = 0, Hi) {
      Hi.push(...t);
      return;
    }
    for (Hi = t, ia = 0; ia < Hi.length; ia++) {
      const n = Hi[ia];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Hi = null, ia = 0;
  }
}
const Vs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ay(e) {
  try {
    for (qr = 0; qr < zn.length; qr++) {
      const t = zn[qr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Qs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; qr < zn.length; qr++) {
      const t = zn[qr];
      t && (t.flags &= -2);
    }
    qr = -1, zn.length = 0, Py(), gc = null, (zn.length || pa.length) && Ay();
  }
}
let cr = null, Cy = null;
function yc(e) {
  const t = cr;
  return cr = e, Cy = e && e.type.__scopeId || null, t;
}
function Iy(e, t = cr, n) {
  if (!t || e._n)
    return e;
  const r = (...o) => {
    r._d && yg(-1);
    const a = yc(t);
    let c;
    try {
      c = e(...o);
    } finally {
      yc(a), r._d && yg(1);
    }
    return c;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function ki(e, t) {
  if (cr === null)
    return e;
  const n = iu(cr), r = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [a, c, u, d = Ot] = t[o];
    a && (ot(a) && (a = {
      mounted: a,
      updated: a
    }), a.deep && wi(c), r.push({
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
function co(e, t, n, r) {
  const o = e.dirs, a = t && t.dirs;
  for (let c = 0; c < o.length; c++) {
    const u = o[c];
    a && (u.oldValue = a[c].value);
    let d = u.dir[r];
    d && (Mi(), oi(d, n, 8, [
      e.el,
      u,
      e,
      t
    ]), Ni());
  }
}
function dx(e, t) {
  if (On) {
    let n = On.provides;
    const r = On.parent && On.parent.provides;
    r === n && (n = On.provides = Object.create(r)), n[e] = t;
  }
}
function Yl(e, t, n = !1) {
  const r = uk();
  if (r || ha) {
    let o = ha ? ha._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ot(t) ? t.call(r && r.proxy) : t;
  }
}
const px = /* @__PURE__ */ Symbol.for("v-scx"), hx = () => Yl(px);
function Mo(e, t, n) {
  return Ey(e, t, n);
}
function Ey(e, t, n = Ot) {
  const { immediate: r, deep: o, flush: a, once: c } = n, u = Dn({}, n), d = t && r || !t && a !== "post";
  let b;
  if (zs) {
    if (a === "sync") {
      const M = hx();
      b = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!d) {
      const M = () => {
      };
      return M.stop = ti, M.resume = ti, M.pause = ti, M;
    }
  }
  const g = On;
  u.call = (M, k, P) => oi(M, g, k, P);
  let v = !1;
  a === "post" ? u.scheduler = (M) => {
    Xn(M, g && g.suspense);
  } : a !== "sync" && (v = !0, u.scheduler = (M, k) => {
    k ? M() : op(M);
  }), u.augmentJob = (M) => {
    t && (M.flags |= 4), v && (M.flags |= 2, g && (M.id = g.uid, M.i = g));
  };
  const S = lx(e, t, u);
  return zs && (b ? b.push(S) : d && S()), S;
}
function mx(e, t, n) {
  const r = this.proxy, o = ln(e) ? e.includes(".") ? Oy(r, e) : () => r[e] : e.bind(r, r);
  let a;
  ot(t) ? a = t : (a = t.handler, n = t);
  const c = tl(this), u = Ey(o, a.bind(r), n);
  return c(), u;
}
function Oy(e, t) {
  const n = t.split(".");
  return () => {
    let r = e;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
const gx = /* @__PURE__ */ Symbol("_vte"), yx = (e) => e.__isTeleport, bx = /* @__PURE__ */ Symbol("_leaveCb");
function ap(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ap(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Fy(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ag(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const bc = /* @__PURE__ */ new WeakMap();
function As(e, t, n, r, o = !1) {
  if (et(e)) {
    e.forEach(
      (P, A) => As(
        P,
        t && (et(t) ? t[A] : t),
        n,
        r,
        o
      )
    );
    return;
  }
  if (Cs(r) && !o) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && As(e, t, n, r.component.subTree);
    return;
  }
  const a = r.shapeFlag & 4 ? iu(r.component) : r.el, c = o ? null : a, { i: u, r: d } = e, b = t && t.r, g = u.refs === Ot ? u.refs = {} : u.refs, v = u.setupState, S = /* @__PURE__ */ xt(v), M = v === Ot ? ey : (P) => ag(g, P) ? !1 : kt(S, P), k = (P, A) => !(A && ag(g, A));
  if (b != null && b !== d) {
    if (sg(t), ln(b))
      g[b] = null, M(b) && (v[b] = null);
    else if (/* @__PURE__ */ Tn(b)) {
      const P = t;
      k(b, P.k) && (b.value = null), P.k && (g[P.k] = null);
    }
  }
  if (ot(d))
    Qs(d, u, 12, [c, g]);
  else {
    const P = ln(d), A = /* @__PURE__ */ Tn(d);
    if (P || A) {
      const O = () => {
        if (e.f) {
          const G = P ? M(d) ? v[d] : g[d] : k() || !e.k ? d.value : g[e.k];
          if (o)
            et(G) && Yd(G, a);
          else if (et(G))
            G.includes(a) || G.push(a);
          else if (P)
            g[d] = [a], M(d) && (v[d] = g[d]);
          else {
            const R = [a];
            k(d, e.k) && (d.value = R), e.k && (g[e.k] = R);
          }
        } else P ? (g[d] = c, M(d) && (v[d] = c)) : A && (k(d, e.k) && (d.value = c), e.k && (g[e.k] = c));
      };
      if (c) {
        const G = () => {
          O(), bc.delete(e);
        };
        G.id = -1, bc.set(e, G), Xn(G, n);
      } else
        sg(e), O();
    }
  }
}
function sg(e) {
  const t = bc.get(e);
  t && (t.flags |= 8, bc.delete(e));
}
qc().requestIdleCallback;
qc().cancelIdleCallback;
const Cs = (e) => !!e.type.__asyncLoader, Ty = (e) => e.type.__isKeepAlive;
function vx(e, t) {
  Dy(e, "a", t);
}
function _x(e, t) {
  Dy(e, "da", t);
}
function Dy(e, t, n = On) {
  const r = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (eu(t, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ty(o.parent.vnode) && wx(r, t, n, o), o = o.parent;
  }
}
function wx(e, t, n, r) {
  const o = eu(
    t,
    e,
    r,
    !0
    /* prepend */
  );
  Ly(() => {
    Yd(r[t], o);
  }, n);
}
function eu(e, t, n = On, r = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), a = t.__weh || (t.__weh = (...c) => {
      Mi();
      const u = tl(n), d = oi(t, n, e, c);
      return u(), Ni(), d;
    });
    return r ? o.unshift(a) : o.push(a), a;
  }
}
const Ai = (e) => (t, n = On) => {
  (!zs || e === "sp") && eu(e, (...r) => t(...r), n);
}, Sx = Ai("bm"), tu = Ai("m"), xx = Ai(
  "bu"
), kx = Ai("u"), el = Ai(
  "bum"
), Ly = Ai("um"), Mx = Ai(
  "sp"
), Nx = Ai("rtg"), Px = Ai("rtc");
function Ax(e, t = On) {
  eu("ec", e, t);
}
const Cx = "components", Ry = /* @__PURE__ */ Symbol.for("v-ndc");
function Ix(e) {
  return ln(e) ? Ex(Cx, e, !1) || e : e || Ry;
}
function Ex(e, t, n = !0, r = !1) {
  const o = cr || On;
  if (o) {
    const a = o.type;
    {
      const u = mk(
        a,
        !1
      );
      if (u && (u === t || u === Hn(t) || u === Xc(Hn(t))))
        return a;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      lg(o[e] || a[e], t) || // global registration
      lg(o.appContext[e], t)
    );
    return !c && r ? a : c;
  }
}
function lg(e, t) {
  return e && (e[t] || e[Hn(t)] || e[Xc(Hn(t))]);
}
function Pt(e, t, n, r) {
  let o;
  const a = n, c = et(e);
  if (c || ln(e)) {
    const u = c && /* @__PURE__ */ ko(e);
    let d = !1, b = !1;
    u && (d = !/* @__PURE__ */ _r(e), b = /* @__PURE__ */ Pi(e), e = Jc(e)), o = new Array(e.length);
    for (let g = 0, v = e.length; g < v; g++)
      o[g] = t(
        d ? b ? xa(Lr(e[g])) : Lr(e[g]) : e[g],
        g,
        void 0,
        a
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let u = 0; u < e; u++)
      o[u] = t(u + 1, u, void 0, a);
  } else if (Et(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (u, d) => t(u, d, void 0, a)
      );
    else {
      const u = Object.keys(e);
      o = new Array(u.length);
      for (let d = 0, b = u.length; d < b; d++) {
        const g = u[d];
        o[d] = t(e[g], g, d, a);
      }
    }
  else
    o = [];
  return o;
}
const od = (e) => e ? ib(e) ? iu(e) : od(e.parent) : null, Is = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Dn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => od(e.parent),
    $root: (e) => od(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => $y(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      op(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Qc.bind(e.proxy)),
    $watch: (e) => mx.bind(e)
  })
), uf = (e, t) => e !== Ot && !e.__isScriptSetup && kt(e, t), Ox = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: r, data: o, props: a, accessCache: c, type: u, appContext: d } = e;
    if (t[0] !== "$") {
      const S = c[t];
      if (S !== void 0)
        switch (S) {
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
        if (uf(r, t))
          return c[t] = 1, r[t];
        if (o !== Ot && kt(o, t))
          return c[t] = 2, o[t];
        if (kt(a, t))
          return c[t] = 3, a[t];
        if (n !== Ot && kt(n, t))
          return c[t] = 4, n[t];
        ad && (c[t] = 0);
      }
    }
    const b = Is[t];
    let g, v;
    if (b)
      return t === "$attrs" && En(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (g = u.__cssModules) && (g = g[t])
    )
      return g;
    if (n !== Ot && kt(n, t))
      return c[t] = 4, n[t];
    if (
      // global properties
      v = d.config.globalProperties, kt(v, t)
    )
      return v[t];
  },
  set({ _: e }, t, n) {
    const { data: r, setupState: o, ctx: a } = e;
    return uf(o, t) ? (o[t] = n, !0) : r !== Ot && kt(r, t) ? (r[t] = n, !0) : kt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: o, props: a, type: c }
  }, u) {
    let d;
    return !!(n[u] || e !== Ot && u[0] !== "$" && kt(e, u) || uf(t, u) || kt(a, u) || kt(r, u) || kt(Is, u) || kt(o.config.globalProperties, u) || (d = c.__cssModules) && d[u]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : kt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function cg(e) {
  return et(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let ad = !0;
function Fx(e) {
  const t = $y(e), n = e.proxy, r = e.ctx;
  ad = !1, t.beforeCreate && ug(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: a,
    methods: c,
    watch: u,
    provide: d,
    inject: b,
    // lifecycle
    created: g,
    beforeMount: v,
    mounted: S,
    beforeUpdate: M,
    updated: k,
    activated: P,
    deactivated: A,
    beforeDestroy: O,
    beforeUnmount: G,
    destroyed: R,
    unmounted: V,
    render: _,
    renderTracked: j,
    renderTriggered: W,
    errorCaptured: le,
    serverPrefetch: ke,
    // public API
    expose: F,
    inheritAttrs: q,
    // assets
    components: J,
    directives: ne,
    filters: ge
  } = t;
  if (b && Tx(b, r, null), c)
    for (const B in c) {
      const D = c[B];
      ot(D) && (r[B] = D.bind(n));
    }
  if (o) {
    const B = o.call(n, n);
    Et(B) && (e.data = /* @__PURE__ */ Aa(B));
  }
  if (ad = !0, a)
    for (const B in a) {
      const D = a[B], I = ot(D) ? D.bind(n, n) : ot(D.get) ? D.get.bind(n, n) : ti, Z = !ot(D) && ot(D.set) ? D.set.bind(n) : ti, ce = ft({
        get: I,
        set: Z
      });
      Object.defineProperty(r, B, {
        enumerable: !0,
        configurable: !0,
        get: () => ce.value,
        set: (Ee) => ce.value = Ee
      });
    }
  if (u)
    for (const B in u)
      Vy(u[B], r, n, B);
  if (d) {
    const B = ot(d) ? d.call(n) : d;
    Reflect.ownKeys(B).forEach((D) => {
      dx(D, B[D]);
    });
  }
  g && ug(g, e, "c");
  function re(B, D) {
    et(D) ? D.forEach((I) => B(I.bind(n))) : D && B(D.bind(n));
  }
  if (re(Sx, v), re(tu, S), re(xx, M), re(kx, k), re(vx, P), re(_x, A), re(Ax, le), re(Px, j), re(Nx, W), re(el, G), re(Ly, V), re(Mx, ke), et(F))
    if (F.length) {
      const B = e.exposed || (e.exposed = {});
      F.forEach((D) => {
        Object.defineProperty(B, D, {
          get: () => n[D],
          set: (I) => n[D] = I,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  _ && e.render === ti && (e.render = _), q != null && (e.inheritAttrs = q), J && (e.components = J), ne && (e.directives = ne), ke && Fy(e);
}
function Tx(e, t, n = ti) {
  et(e) && (e = sd(e));
  for (const r in e) {
    const o = e[r];
    let a;
    Et(o) ? "default" in o ? a = Yl(
      o.from || r,
      o.default,
      !0
    ) : a = Yl(o.from || r) : a = Yl(o), /* @__PURE__ */ Tn(a) ? Object.defineProperty(t, r, {
      enumerable: !0,
      configurable: !0,
      get: () => a.value,
      set: (c) => a.value = c
    }) : t[r] = a;
  }
}
function ug(e, t, n) {
  oi(
    et(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Vy(e, t, n, r) {
  let o = r.includes(".") ? Oy(n, r) : () => n[r];
  if (ln(e)) {
    const a = t[e];
    ot(a) && Mo(o, a);
  } else if (ot(e))
    Mo(o, e.bind(n));
  else if (Et(e))
    if (et(e))
      e.forEach((a) => Vy(a, t, n, r));
    else {
      const a = ot(e.handler) ? e.handler.bind(n) : t[e.handler];
      ot(a) && Mo(o, a, e);
    }
}
function $y(e) {
  const t = e.type, { mixins: n, extends: r } = t, {
    mixins: o,
    optionsCache: a,
    config: { optionMergeStrategies: c }
  } = e.appContext, u = a.get(t);
  let d;
  return u ? d = u : !o.length && !n && !r ? d = t : (d = {}, o.length && o.forEach(
    (b) => vc(d, b, c, !0)
  ), vc(d, t, c)), Et(t) && a.set(t, d), d;
}
function vc(e, t, n, r = !1) {
  const { mixins: o, extends: a } = t;
  a && vc(e, a, n, !0), o && o.forEach(
    (c) => vc(e, c, n, !0)
  );
  for (const c in t)
    if (!(r && c === "expose")) {
      const u = Dx[c] || n && n[c];
      e[c] = u ? u(e[c], t[c]) : t[c];
    }
  return e;
}
const Dx = {
  data: fg,
  props: dg,
  emits: dg,
  // objects
  methods: gs,
  computed: gs,
  // lifecycle
  beforeCreate: $n,
  created: $n,
  beforeMount: $n,
  mounted: $n,
  beforeUpdate: $n,
  updated: $n,
  beforeDestroy: $n,
  beforeUnmount: $n,
  destroyed: $n,
  unmounted: $n,
  activated: $n,
  deactivated: $n,
  errorCaptured: $n,
  serverPrefetch: $n,
  // assets
  components: gs,
  directives: gs,
  // watch
  watch: Rx,
  // provide / inject
  provide: fg,
  inject: Lx
};
function fg(e, t) {
  return t ? e ? function() {
    return Dn(
      ot(e) ? e.call(this, this) : e,
      ot(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Lx(e, t) {
  return gs(sd(e), sd(t));
}
function sd(e) {
  if (et(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function $n(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function gs(e, t) {
  return e ? Dn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function dg(e, t) {
  return e ? et(e) && et(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Dn(
    /* @__PURE__ */ Object.create(null),
    cg(e),
    cg(t ?? {})
  ) : t;
}
function Rx(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Dn(/* @__PURE__ */ Object.create(null), e);
  for (const r in t)
    n[r] = $n(e[r], t[r]);
  return n;
}
function zy() {
  return {
    app: null,
    config: {
      isNativeTag: ey,
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
let Vx = 0;
function $x(e, t) {
  return function(r, o = null) {
    ot(r) || (r = Dn({}, r)), o != null && !Et(o) && (o = null);
    const a = zy(), c = /* @__PURE__ */ new WeakSet(), u = [];
    let d = !1;
    const b = a.app = {
      _uid: Vx++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: yk,
      get config() {
        return a.config;
      },
      set config(g) {
      },
      use(g, ...v) {
        return c.has(g) || (g && ot(g.install) ? (c.add(g), g.install(b, ...v)) : ot(g) && (c.add(g), g(b, ...v))), b;
      },
      mixin(g) {
        return a.mixins.includes(g) || a.mixins.push(g), b;
      },
      component(g, v) {
        return v ? (a.components[g] = v, b) : a.components[g];
      },
      directive(g, v) {
        return v ? (a.directives[g] = v, b) : a.directives[g];
      },
      mount(g, v, S) {
        if (!d) {
          const M = b._ceVNode || Le(r, o);
          return M.appContext = a, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(M, g, S), d = !0, b._container = g, g.__vue_app__ = b, iu(M.component);
        }
      },
      onUnmount(g) {
        u.push(g);
      },
      unmount() {
        d && (oi(
          u,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(g, v) {
        return a.provides[g] = v, b;
      },
      runWithContext(g) {
        const v = ha;
        ha = b;
        try {
          return g();
        } finally {
          ha = v;
        }
      }
    };
    return b;
  };
}
let ha = null;
const zx = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Hn(t)}Modifiers`] || e[`${Oo(t)}Modifiers`];
function jx(e, t, ...n) {
  if (e.isUnmounted) return;
  const r = e.vnode.props || Ot;
  let o = n;
  const a = t.startsWith("update:"), c = a && zx(r, t.slice(7));
  c && (c.trim && (o = n.map((g) => ln(g) ? g.trim() : g)), c.number && (o = n.map(qd)));
  let u, d = r[u = of(t)] || // also try camelCase event handler (#2249)
  r[u = of(Hn(t))];
  !d && a && (d = r[u = of(Oo(t))]), d && oi(
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
    e.emitted[u] = !0, oi(
      b,
      e,
      6,
      o
    );
  }
}
const Hx = /* @__PURE__ */ new WeakMap();
function jy(e, t, n = !1) {
  const r = n ? Hx : t.emitsCache, o = r.get(e);
  if (o !== void 0)
    return o;
  const a = e.emits;
  let c = {}, u = !1;
  if (!ot(e)) {
    const d = (b) => {
      const g = jy(b, t, !0);
      g && (u = !0, Dn(c, g));
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  return !a && !u ? (Et(e) && r.set(e, null), null) : (et(a) ? a.forEach((d) => c[d] = null) : Dn(c, a), Et(e) && r.set(e, c), c);
}
function nu(e, t) {
  return !e || !Bc(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), kt(e, t[0].toLowerCase() + t.slice(1)) || kt(e, Oo(t)) || kt(e, t));
}
function pg(e) {
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
    renderCache: g,
    props: v,
    data: S,
    setupState: M,
    ctx: k,
    inheritAttrs: P
  } = e, A = yc(e);
  let O, G;
  try {
    if (n.shapeFlag & 4) {
      const V = o || r, _ = V;
      O = Zr(
        b.call(
          _,
          V,
          g,
          v,
          M,
          S,
          k
        )
      ), G = u;
    } else {
      const V = t;
      O = Zr(
        V.length > 1 ? V(
          v,
          { attrs: u, slots: c, emit: d }
        ) : V(
          v,
          null
        )
      ), G = t.props ? u : Gx(u);
    }
  } catch (V) {
    Es.length = 0, Zc(V, e, 1), O = Le(Wi);
  }
  let R = O;
  if (G && P !== !1) {
    const V = Object.keys(G), { shapeFlag: _ } = R;
    V.length && _ & 7 && (a && V.some(Uc) && (G = Kx(
      G,
      a
    )), R = ka(R, G, !1, !0));
  }
  return n.dirs && (R = ka(R, null, !1, !0), R.dirs = R.dirs ? R.dirs.concat(n.dirs) : n.dirs), n.transition && ap(R, n.transition), O = R, yc(A), O;
}
const Gx = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Bc(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Kx = (e, t) => {
  const n = {};
  for (const r in e)
    (!Uc(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
  return n;
};
function Wx(e, t, n) {
  const { props: r, children: o, component: a } = e, { props: c, children: u, patchFlag: d } = t, b = a.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && d >= 0) {
    if (d & 1024)
      return !0;
    if (d & 16)
      return r ? hg(r, c, b) : !!c;
    if (d & 8) {
      const g = t.dynamicProps;
      for (let v = 0; v < g.length; v++) {
        const S = g[v];
        if (Hy(c, r, S) && !nu(b, S))
          return !0;
      }
    }
  } else
    return (o || u) && (!u || !u.$stable) ? !0 : r === c ? !1 : r ? c ? hg(r, c, b) : !0 : !!c;
  return !1;
}
function hg(e, t, n) {
  const r = Object.keys(t);
  if (r.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (Hy(t, e, a) && !nu(n, a))
      return !0;
  }
  return !1;
}
function Hy(e, t, n) {
  const r = e[n], o = t[n];
  return n === "style" && Et(r) && Et(o) ? !Jd(r, o) : r !== o;
}
function Bx({ vnode: e, parent: t, suspense: n }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.suspense.vnode.el = o.el = r, e = o), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = r);
}
const Gy = {}, Ky = () => Object.create(Gy), Wy = (e) => Object.getPrototypeOf(e) === Gy;
function Ux(e, t, n, r = !1) {
  const o = {}, a = Ky();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), By(e, t, o, a);
  for (const c in e.propsOptions[0])
    c in o || (o[c] = void 0);
  n ? e.props = r ? o : /* @__PURE__ */ tx(o) : e.type.props ? e.props = o : e.props = a, e.attrs = a;
}
function Yx(e, t, n, r) {
  const {
    props: o,
    attrs: a,
    vnode: { patchFlag: c }
  } = e, u = /* @__PURE__ */ xt(o), [d] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const g = e.vnode.dynamicProps;
      for (let v = 0; v < g.length; v++) {
        let S = g[v];
        if (nu(e.emitsOptions, S))
          continue;
        const M = t[S];
        if (d)
          if (kt(a, S))
            M !== a[S] && (a[S] = M, b = !0);
          else {
            const k = Hn(S);
            o[k] = ld(
              d,
              u,
              k,
              M,
              e,
              !1
            );
          }
        else
          M !== a[S] && (a[S] = M, b = !0);
      }
    }
  } else {
    By(e, t, o, a) && (b = !0);
    let g;
    for (const v in u)
      (!t || // for camelCase
      !kt(t, v) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((g = Oo(v)) === v || !kt(t, g))) && (d ? n && // for camelCase
      (n[v] !== void 0 || // for kebab-case
      n[g] !== void 0) && (o[v] = ld(
        d,
        u,
        v,
        void 0,
        e,
        !0
      )) : delete o[v]);
    if (a !== u)
      for (const v in a)
        (!t || !kt(t, v)) && (delete a[v], b = !0);
  }
  b && _i(e.attrs, "set", "");
}
function By(e, t, n, r) {
  const [o, a] = e.propsOptions;
  let c = !1, u;
  if (t)
    for (let d in t) {
      if (Ms(d))
        continue;
      const b = t[d];
      let g;
      o && kt(o, g = Hn(d)) ? !a || !a.includes(g) ? n[g] = b : (u || (u = {}))[g] = b : nu(e.emitsOptions, d) || (!(d in r) || b !== r[d]) && (r[d] = b, c = !0);
    }
  if (a) {
    const d = /* @__PURE__ */ xt(n), b = u || Ot;
    for (let g = 0; g < a.length; g++) {
      const v = a[g];
      n[v] = ld(
        o,
        d,
        v,
        b[v],
        e,
        !kt(b, v)
      );
    }
  }
  return c;
}
function ld(e, t, n, r, o, a) {
  const c = e[n];
  if (c != null) {
    const u = kt(c, "default");
    if (u && r === void 0) {
      const d = c.default;
      if (c.type !== Function && !c.skipFactory && ot(d)) {
        const { propsDefaults: b } = o;
        if (n in b)
          r = b[n];
        else {
          const g = tl(o);
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
    ] && (a && !u ? r = !1 : c[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === Oo(n)) && (r = !0));
  }
  return r;
}
const Xx = /* @__PURE__ */ new WeakMap();
function Uy(e, t, n = !1) {
  const r = n ? Xx : t.propsCache, o = r.get(e);
  if (o)
    return o;
  const a = e.props, c = {}, u = [];
  let d = !1;
  if (!ot(e)) {
    const g = (v) => {
      d = !0;
      const [S, M] = Uy(v, t, !0);
      Dn(c, S), M && u.push(...M);
    };
    !n && t.mixins.length && t.mixins.forEach(g), e.extends && g(e.extends), e.mixins && e.mixins.forEach(g);
  }
  if (!a && !d)
    return Et(e) && r.set(e, fa), fa;
  if (et(a))
    for (let g = 0; g < a.length; g++) {
      const v = Hn(a[g]);
      mg(v) && (c[v] = Ot);
    }
  else if (a)
    for (const g in a) {
      const v = Hn(g);
      if (mg(v)) {
        const S = a[g], M = c[v] = et(S) || ot(S) ? { type: S } : Dn({}, S), k = M.type;
        let P = !1, A = !0;
        if (et(k))
          for (let O = 0; O < k.length; ++O) {
            const G = k[O], R = ot(G) && G.name;
            if (R === "Boolean") {
              P = !0;
              break;
            } else R === "String" && (A = !1);
          }
        else
          P = ot(k) && k.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = P, M[
          1
          /* shouldCastTrue */
        ] = A, (P || kt(M, "default")) && u.push(v);
      }
    }
  const b = [c, u];
  return Et(e) && r.set(e, b), b;
}
function mg(e) {
  return e[0] !== "$" && !Ms(e);
}
const sp = (e) => e === "_" || e === "_ctx" || e === "$stable", lp = (e) => et(e) ? e.map(Zr) : [Zr(e)], qx = (e, t, n) => {
  if (t._n)
    return t;
  const r = Iy((...o) => lp(t(...o)), n);
  return r._c = !1, r;
}, Yy = (e, t, n) => {
  const r = e._ctx;
  for (const o in e) {
    if (sp(o)) continue;
    const a = e[o];
    if (ot(a))
      t[o] = qx(o, a, r);
    else if (a != null) {
      const c = lp(a);
      t[o] = () => c;
    }
  }
}, Xy = (e, t) => {
  const n = lp(t);
  e.slots.default = () => n;
}, qy = (e, t, n) => {
  for (const r in t)
    (n || !sp(r)) && (e[r] = t[r]);
}, Jx = (e, t, n) => {
  const r = e.slots = Ky();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (qy(r, t, n), n && oy(r, "_", o, !0)) : Yy(t, r);
  } else t && Xy(e, t);
}, Zx = (e, t, n) => {
  const { vnode: r, slots: o } = e;
  let a = !0, c = Ot;
  if (r.shapeFlag & 32) {
    const u = t._;
    u ? n && u === 1 ? a = !1 : qy(o, t, n) : (a = !t.$stable, Yy(t, o)), c = t;
  } else t && (Xy(e, t), c = { default: 1 });
  if (a)
    for (const u in o)
      !sp(u) && c[u] == null && delete o[u];
}, Xn = rk;
function Qx(e) {
  return ek(e);
}
function ek(e, t) {
  const n = qc();
  n.__VUE__ = !0;
  const {
    insert: r,
    remove: o,
    patchProp: a,
    createElement: c,
    createText: u,
    createComment: d,
    setText: b,
    setElementText: g,
    parentNode: v,
    nextSibling: S,
    setScopeId: M = ti,
    insertStaticContent: k
  } = e, P = (T, H, X, pe = null, ye = null, we = null, Oe = void 0, Ne = null, Ce = !!H.dynamicChildren) => {
    if (T === H)
      return;
    T && !ls(T, H) && (pe = _t(T), Ee(T, ye, we, !0), T = null), H.patchFlag === -2 && (Ce = !1, H.dynamicChildren = null);
    const { type: ve, ref: Re, shapeFlag: Me } = H;
    switch (ve) {
      case ru:
        A(T, H, X, pe);
        break;
      case Wi:
        O(T, H, X, pe);
        break;
      case df:
        T == null && G(H, X, pe, Oe);
        break;
      case qe:
        J(
          T,
          H,
          X,
          pe,
          ye,
          we,
          Oe,
          Ne,
          Ce
        );
        break;
      default:
        Me & 1 ? _(
          T,
          H,
          X,
          pe,
          ye,
          we,
          Oe,
          Ne,
          Ce
        ) : Me & 6 ? ne(
          T,
          H,
          X,
          pe,
          ye,
          we,
          Oe,
          Ne,
          Ce
        ) : (Me & 64 || Me & 128) && ve.process(
          T,
          H,
          X,
          pe,
          ye,
          we,
          Oe,
          Ne,
          Ce,
          Ae
        );
    }
    Re != null && ye ? As(Re, T && T.ref, we, H || T, !H) : Re == null && T && T.ref != null && As(T.ref, null, we, T, !0);
  }, A = (T, H, X, pe) => {
    if (T == null)
      r(
        H.el = u(H.children),
        X,
        pe
      );
    else {
      const ye = H.el = T.el;
      H.children !== T.children && b(ye, H.children);
    }
  }, O = (T, H, X, pe) => {
    T == null ? r(
      H.el = d(H.children || ""),
      X,
      pe
    ) : H.el = T.el;
  }, G = (T, H, X, pe) => {
    [T.el, T.anchor] = k(
      T.children,
      H,
      X,
      pe,
      T.el,
      T.anchor
    );
  }, R = ({ el: T, anchor: H }, X, pe) => {
    let ye;
    for (; T && T !== H; )
      ye = S(T), r(T, X, pe), T = ye;
    r(H, X, pe);
  }, V = ({ el: T, anchor: H }) => {
    let X;
    for (; T && T !== H; )
      X = S(T), o(T), T = X;
    o(H);
  }, _ = (T, H, X, pe, ye, we, Oe, Ne, Ce) => {
    if (H.type === "svg" ? Oe = "svg" : H.type === "math" && (Oe = "mathml"), T == null)
      j(
        H,
        X,
        pe,
        ye,
        we,
        Oe,
        Ne,
        Ce
      );
    else {
      const ve = T.el && T.el._isVueCE ? T.el : null;
      try {
        ve && ve._beginPatch(), ke(
          T,
          H,
          ye,
          we,
          Oe,
          Ne,
          Ce
        );
      } finally {
        ve && ve._endPatch();
      }
    }
  }, j = (T, H, X, pe, ye, we, Oe, Ne) => {
    let Ce, ve;
    const { props: Re, shapeFlag: Me, transition: Ve, dirs: We } = T;
    if (Ce = T.el = c(
      T.type,
      we,
      Re && Re.is,
      Re
    ), Me & 8 ? g(Ce, T.children) : Me & 16 && le(
      T.children,
      Ce,
      null,
      pe,
      ye,
      ff(T, we),
      Oe,
      Ne
    ), We && co(T, null, pe, "created"), W(Ce, T, T.scopeId, Oe, pe), Re) {
      for (const mt in Re)
        mt !== "value" && !Ms(mt) && a(Ce, mt, null, Re[mt], we, pe);
      "value" in Re && a(Ce, "value", null, Re.value, we), (ve = Re.onVnodeBeforeMount) && Br(ve, pe, T);
    }
    We && co(T, null, pe, "beforeMount");
    const at = tk(ye, Ve);
    at && Ve.beforeEnter(Ce), r(Ce, H, X), ((ve = Re && Re.onVnodeMounted) || at || We) && Xn(() => {
      try {
        ve && Br(ve, pe, T), at && Ve.enter(Ce), We && co(T, null, pe, "mounted");
      } finally {
      }
    }, ye);
  }, W = (T, H, X, pe, ye) => {
    if (X && M(T, X), pe)
      for (let we = 0; we < pe.length; we++)
        M(T, pe[we]);
    if (ye) {
      let we = ye.subTree;
      if (H === we || eb(we.type) && (we.ssContent === H || we.ssFallback === H)) {
        const Oe = ye.vnode;
        W(
          T,
          Oe,
          Oe.scopeId,
          Oe.slotScopeIds,
          ye.parent
        );
      }
    }
  }, le = (T, H, X, pe, ye, we, Oe, Ne, Ce = 0) => {
    for (let ve = Ce; ve < T.length; ve++) {
      const Re = T[ve] = Ne ? bi(T[ve]) : Zr(T[ve]);
      P(
        null,
        Re,
        H,
        X,
        pe,
        ye,
        we,
        Oe,
        Ne
      );
    }
  }, ke = (T, H, X, pe, ye, we, Oe) => {
    const Ne = H.el = T.el;
    let { patchFlag: Ce, dynamicChildren: ve, dirs: Re } = H;
    Ce |= T.patchFlag & 16;
    const Me = T.props || Ot, Ve = H.props || Ot;
    let We;
    if (X && uo(X, !1), (We = Ve.onVnodeBeforeUpdate) && Br(We, X, H, T), Re && co(H, T, X, "beforeUpdate"), X && uo(X, !0), (Me.innerHTML && Ve.innerHTML == null || Me.textContent && Ve.textContent == null) && g(Ne, ""), ve ? F(
      T.dynamicChildren,
      ve,
      Ne,
      X,
      pe,
      ff(H, ye),
      we
    ) : Oe || D(
      T,
      H,
      Ne,
      null,
      X,
      pe,
      ff(H, ye),
      we,
      !1
    ), Ce > 0) {
      if (Ce & 16)
        q(Ne, Me, Ve, X, ye);
      else if (Ce & 2 && Me.class !== Ve.class && a(Ne, "class", null, Ve.class, ye), Ce & 4 && a(Ne, "style", Me.style, Ve.style, ye), Ce & 8) {
        const at = H.dynamicProps;
        for (let mt = 0; mt < at.length; mt++) {
          const dt = at[mt], St = Me[dt], yt = Ve[dt];
          (yt !== St || dt === "value") && a(Ne, dt, St, yt, ye, X);
        }
      }
      Ce & 1 && T.children !== H.children && g(Ne, H.children);
    } else !Oe && ve == null && q(Ne, Me, Ve, X, ye);
    ((We = Ve.onVnodeUpdated) || Re) && Xn(() => {
      We && Br(We, X, H, T), Re && co(H, T, X, "updated");
    }, pe);
  }, F = (T, H, X, pe, ye, we, Oe) => {
    for (let Ne = 0; Ne < H.length; Ne++) {
      const Ce = T[Ne], ve = H[Ne], Re = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Ce.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Ce.type === qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ls(Ce, ve) || // - In the case of a component, it could contain anything.
        Ce.shapeFlag & 198) ? v(Ce.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          X
        )
      );
      P(
        Ce,
        ve,
        Re,
        null,
        pe,
        ye,
        we,
        Oe,
        !0
      );
    }
  }, q = (T, H, X, pe, ye) => {
    if (H !== X) {
      if (H !== Ot)
        for (const we in H)
          !Ms(we) && !(we in X) && a(
            T,
            we,
            H[we],
            null,
            ye,
            pe
          );
      for (const we in X) {
        if (Ms(we)) continue;
        const Oe = X[we], Ne = H[we];
        Oe !== Ne && we !== "value" && a(T, we, Ne, Oe, ye, pe);
      }
      "value" in X && a(T, "value", H.value, X.value, ye);
    }
  }, J = (T, H, X, pe, ye, we, Oe, Ne, Ce) => {
    const ve = H.el = T ? T.el : u(""), Re = H.anchor = T ? T.anchor : u("");
    let { patchFlag: Me, dynamicChildren: Ve, slotScopeIds: We } = H;
    We && (Ne = Ne ? Ne.concat(We) : We), T == null ? (r(ve, X, pe), r(Re, X, pe), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      X,
      Re,
      ye,
      we,
      Oe,
      Ne,
      Ce
    )) : Me > 0 && Me & 64 && Ve && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    T.dynamicChildren && T.dynamicChildren.length === Ve.length ? (F(
      T.dynamicChildren,
      Ve,
      X,
      ye,
      we,
      Oe,
      Ne
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (H.key != null || ye && H === ye.subTree) && Jy(
      T,
      H,
      !0
      /* shallow */
    )) : D(
      T,
      H,
      X,
      Re,
      ye,
      we,
      Oe,
      Ne,
      Ce
    );
  }, ne = (T, H, X, pe, ye, we, Oe, Ne, Ce) => {
    H.slotScopeIds = Ne, T == null ? H.shapeFlag & 512 ? ye.ctx.activate(
      H,
      X,
      pe,
      Oe,
      Ce
    ) : ge(
      H,
      X,
      pe,
      ye,
      we,
      Oe,
      Ce
    ) : me(T, H, Ce);
  }, ge = (T, H, X, pe, ye, we, Oe) => {
    const Ne = T.component = ck(
      T,
      pe,
      ye
    );
    if (Ty(T) && (Ne.ctx.renderer = Ae), fk(Ne, !1, Oe), Ne.asyncDep) {
      if (ye && ye.registerDep(Ne, re, Oe), !T.el) {
        const Ce = Ne.subTree = Le(Wi);
        O(null, Ce, H, X), T.placeholder = Ce.el;
      }
    } else
      re(
        Ne,
        T,
        H,
        X,
        ye,
        we,
        Oe
      );
  }, me = (T, H, X) => {
    const pe = H.component = T.component;
    if (Wx(T, H, X))
      if (pe.asyncDep && !pe.asyncResolved) {
        B(pe, H, X);
        return;
      } else
        pe.next = H, pe.update();
    else
      H.el = T.el, pe.vnode = H;
  }, re = (T, H, X, pe, ye, we, Oe) => {
    const Ne = () => {
      if (T.isMounted) {
        let { next: Me, bu: Ve, u: We, parent: at, vnode: mt } = T;
        {
          const Ln = Zy(T);
          if (Ln) {
            Me && (Me.el = mt.el, B(T, Me, Oe)), Ln.asyncDep.then(() => {
              Xn(() => {
                T.isUnmounted || ve();
              }, ye);
            });
            return;
          }
        }
        let dt = Me, St;
        uo(T, !1), Me ? (Me.el = mt.el, B(T, Me, Oe)) : Me = mt, Ve && Ul(Ve), (St = Me.props && Me.props.onVnodeBeforeUpdate) && Br(St, at, Me, mt), uo(T, !0);
        const yt = pg(T), bn = T.subTree;
        T.subTree = yt, P(
          bn,
          yt,
          // parent may have changed if it's in a teleport
          v(bn.el),
          // anchor may have changed if it's in a fragment
          _t(bn),
          T,
          ye,
          we
        ), Me.el = yt.el, dt === null && Bx(T, yt.el), We && Xn(We, ye), (St = Me.props && Me.props.onVnodeUpdated) && Xn(
          () => Br(St, at, Me, mt),
          ye
        );
      } else {
        let Me;
        const { el: Ve, props: We } = H, { bm: at, m: mt, parent: dt, root: St, type: yt } = T, bn = Cs(H);
        uo(T, !1), at && Ul(at), !bn && (Me = We && We.onVnodeBeforeMount) && Br(Me, dt, H), uo(T, !0);
        {
          St.ce && St.ce._hasShadowRoot() && St.ce._injectChildStyle(
            yt,
            T.parent ? T.parent.type : void 0
          );
          const Ln = T.subTree = pg(T);
          P(
            null,
            Ln,
            X,
            pe,
            T,
            ye,
            we
          ), H.el = Ln.el;
        }
        if (mt && Xn(mt, ye), !bn && (Me = We && We.onVnodeMounted)) {
          const Ln = H;
          Xn(
            () => Br(Me, dt, Ln),
            ye
          );
        }
        (H.shapeFlag & 256 || dt && Cs(dt.vnode) && dt.vnode.shapeFlag & 256) && T.a && Xn(T.a, ye), T.isMounted = !0, H = X = pe = null;
      }
    };
    T.scope.on();
    const Ce = T.effect = new cy(Ne);
    T.scope.off();
    const ve = T.update = Ce.run.bind(Ce), Re = T.job = Ce.runIfDirty.bind(Ce);
    Re.i = T, Re.id = T.uid, Ce.scheduler = () => op(Re), uo(T, !0), ve();
  }, B = (T, H, X) => {
    H.component = T;
    const pe = T.vnode.props;
    T.vnode = H, T.next = null, Yx(T, H.props, pe, X), Zx(T, H.children, X), Mi(), og(T), Ni();
  }, D = (T, H, X, pe, ye, we, Oe, Ne, Ce = !1) => {
    const ve = T && T.children, Re = T ? T.shapeFlag : 0, Me = H.children, { patchFlag: Ve, shapeFlag: We } = H;
    if (Ve > 0) {
      if (Ve & 128) {
        Z(
          ve,
          Me,
          X,
          pe,
          ye,
          we,
          Oe,
          Ne,
          Ce
        );
        return;
      } else if (Ve & 256) {
        I(
          ve,
          Me,
          X,
          pe,
          ye,
          we,
          Oe,
          Ne,
          Ce
        );
        return;
      }
    }
    We & 8 ? (Re & 16 && $(ve, ye, we), Me !== ve && g(X, Me)) : Re & 16 ? We & 16 ? Z(
      ve,
      Me,
      X,
      pe,
      ye,
      we,
      Oe,
      Ne,
      Ce
    ) : $(ve, ye, we, !0) : (Re & 8 && g(X, ""), We & 16 && le(
      Me,
      X,
      pe,
      ye,
      we,
      Oe,
      Ne,
      Ce
    ));
  }, I = (T, H, X, pe, ye, we, Oe, Ne, Ce) => {
    T = T || fa, H = H || fa;
    const ve = T.length, Re = H.length, Me = Math.min(ve, Re);
    let Ve;
    for (Ve = 0; Ve < Me; Ve++) {
      const We = H[Ve] = Ce ? bi(H[Ve]) : Zr(H[Ve]);
      P(
        T[Ve],
        We,
        X,
        null,
        ye,
        we,
        Oe,
        Ne,
        Ce
      );
    }
    ve > Re ? $(
      T,
      ye,
      we,
      !0,
      !1,
      Me
    ) : le(
      H,
      X,
      pe,
      ye,
      we,
      Oe,
      Ne,
      Ce,
      Me
    );
  }, Z = (T, H, X, pe, ye, we, Oe, Ne, Ce) => {
    let ve = 0;
    const Re = H.length;
    let Me = T.length - 1, Ve = Re - 1;
    for (; ve <= Me && ve <= Ve; ) {
      const We = T[ve], at = H[ve] = Ce ? bi(H[ve]) : Zr(H[ve]);
      if (ls(We, at))
        P(
          We,
          at,
          X,
          null,
          ye,
          we,
          Oe,
          Ne,
          Ce
        );
      else
        break;
      ve++;
    }
    for (; ve <= Me && ve <= Ve; ) {
      const We = T[Me], at = H[Ve] = Ce ? bi(H[Ve]) : Zr(H[Ve]);
      if (ls(We, at))
        P(
          We,
          at,
          X,
          null,
          ye,
          we,
          Oe,
          Ne,
          Ce
        );
      else
        break;
      Me--, Ve--;
    }
    if (ve > Me) {
      if (ve <= Ve) {
        const We = Ve + 1, at = We < Re ? H[We].el : pe;
        for (; ve <= Ve; )
          P(
            null,
            H[ve] = Ce ? bi(H[ve]) : Zr(H[ve]),
            X,
            at,
            ye,
            we,
            Oe,
            Ne,
            Ce
          ), ve++;
      }
    } else if (ve > Ve)
      for (; ve <= Me; )
        Ee(T[ve], ye, we, !0), ve++;
    else {
      const We = ve, at = ve, mt = /* @__PURE__ */ new Map();
      for (ve = at; ve <= Ve; ve++) {
        const h = H[ve] = Ce ? bi(H[ve]) : Zr(H[ve]);
        h.key != null && mt.set(h.key, ve);
      }
      let dt, St = 0;
      const yt = Ve - at + 1;
      let bn = !1, Ln = 0;
      const Rr = new Array(yt);
      for (ve = 0; ve < yt; ve++) Rr[ve] = 0;
      for (ve = We; ve <= Me; ve++) {
        const h = T[ve];
        if (St >= yt) {
          Ee(h, ye, we, !0);
          continue;
        }
        let Ye;
        if (h.key != null)
          Ye = mt.get(h.key);
        else
          for (dt = at; dt <= Ve; dt++)
            if (Rr[dt - at] === 0 && ls(h, H[dt])) {
              Ye = dt;
              break;
            }
        Ye === void 0 ? Ee(h, ye, we, !0) : (Rr[Ye - at] = ve + 1, Ye >= Ln ? Ln = Ye : bn = !0, P(
          h,
          H[Ye],
          X,
          null,
          ye,
          we,
          Oe,
          Ne,
          Ce
        ), St++);
      }
      const To = bn ? nk(Rr) : fa;
      for (dt = To.length - 1, ve = yt - 1; ve >= 0; ve--) {
        const h = at + ve, Ye = H[h], dr = H[h + 1], nn = h + 1 < Re ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          dr.el || Qy(dr)
        ) : pe;
        Rr[ve] === 0 ? P(
          null,
          Ye,
          X,
          nn,
          ye,
          we,
          Oe,
          Ne,
          Ce
        ) : bn && (dt < 0 || ve !== To[dt] ? ce(Ye, X, nn, 2) : dt--);
      }
    }
  }, ce = (T, H, X, pe, ye = null) => {
    const { el: we, type: Oe, transition: Ne, children: Ce, shapeFlag: ve } = T;
    if (ve & 6) {
      ce(T.component.subTree, H, X, pe);
      return;
    }
    if (ve & 128) {
      T.suspense.move(H, X, pe);
      return;
    }
    if (ve & 64) {
      Oe.move(T, H, X, Ae);
      return;
    }
    if (Oe === qe) {
      r(we, H, X);
      for (let Me = 0; Me < Ce.length; Me++)
        ce(Ce[Me], H, X, pe);
      r(T.anchor, H, X);
      return;
    }
    if (Oe === df) {
      R(T, H, X);
      return;
    }
    if (pe !== 2 && ve & 1 && Ne)
      if (pe === 0)
        Ne.beforeEnter(we), r(we, H, X), Xn(() => Ne.enter(we), ye);
      else {
        const { leave: Me, delayLeave: Ve, afterLeave: We } = Ne, at = () => {
          T.ctx.isUnmounted ? o(we) : r(we, H, X);
        }, mt = () => {
          we._isLeaving && we[bx](
            !0
            /* cancelled */
          ), Me(we, () => {
            at(), We && We();
          });
        };
        Ve ? Ve(we, at, mt) : mt();
      }
    else
      r(we, H, X);
  }, Ee = (T, H, X, pe = !1, ye = !1) => {
    const {
      type: we,
      props: Oe,
      ref: Ne,
      children: Ce,
      dynamicChildren: ve,
      shapeFlag: Re,
      patchFlag: Me,
      dirs: Ve,
      cacheIndex: We,
      memo: at
    } = T;
    if (Me === -2 && (ye = !1), Ne != null && (Mi(), As(Ne, null, X, T, !0), Ni()), We != null && (H.renderCache[We] = void 0), Re & 256) {
      H.ctx.deactivate(T);
      return;
    }
    const mt = Re & 1 && Ve, dt = !Cs(T);
    let St;
    if (dt && (St = Oe && Oe.onVnodeBeforeUnmount) && Br(St, H, T), Re & 6)
      vt(T.component, X, pe);
    else {
      if (Re & 128) {
        T.suspense.unmount(X, pe);
        return;
      }
      mt && co(T, null, H, "beforeUnmount"), Re & 64 ? T.type.remove(
        T,
        H,
        X,
        Ae,
        pe
      ) : ve && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ve.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (we !== qe || Me > 0 && Me & 64) ? $(
        ve,
        H,
        X,
        !1,
        !0
      ) : (we === qe && Me & 384 || !ye && Re & 16) && $(Ce, H, X), pe && Xe(T);
    }
    const yt = at != null && We == null;
    (dt && (St = Oe && Oe.onVnodeUnmounted) || mt || yt) && Xn(() => {
      St && Br(St, H, T), mt && co(T, null, H, "unmounted"), yt && (T.el = null);
    }, X);
  }, Xe = (T) => {
    const { type: H, el: X, anchor: pe, transition: ye } = T;
    if (H === qe) {
      Je(X, pe);
      return;
    }
    if (H === df) {
      V(T);
      return;
    }
    const we = () => {
      o(X), ye && !ye.persisted && ye.afterLeave && ye.afterLeave();
    };
    if (T.shapeFlag & 1 && ye && !ye.persisted) {
      const { leave: Oe, delayLeave: Ne } = ye, Ce = () => Oe(X, we);
      Ne ? Ne(T.el, we, Ce) : Ce();
    } else
      we();
  }, Je = (T, H) => {
    let X;
    for (; T !== H; )
      X = S(T), o(T), T = X;
    o(H);
  }, vt = (T, H, X) => {
    const { bum: pe, scope: ye, job: we, subTree: Oe, um: Ne, m: Ce, a: ve } = T;
    gg(Ce), gg(ve), pe && Ul(pe), ye.stop(), we && (we.flags |= 8, Ee(Oe, T, H, X)), Ne && Xn(Ne, H), Xn(() => {
      T.isUnmounted = !0;
    }, H);
  }, $ = (T, H, X, pe = !1, ye = !1, we = 0) => {
    for (let Oe = we; Oe < T.length; Oe++)
      Ee(T[Oe], H, X, pe, ye);
  }, _t = (T) => {
    if (T.shapeFlag & 6)
      return _t(T.component.subTree);
    if (T.shapeFlag & 128)
      return T.suspense.next();
    const H = S(T.anchor || T.el), X = H && H[gx];
    return X ? S(X) : H;
  };
  let Ie = !1;
  const wt = (T, H, X) => {
    let pe;
    T == null ? H._vnode && (Ee(H._vnode, null, null, !0), pe = H._vnode.component) : P(
      H._vnode || null,
      T,
      H,
      null,
      null,
      null,
      X
    ), H._vnode = T, Ie || (Ie = !0, og(pe), Py(), Ie = !1);
  }, Ae = {
    p: P,
    um: Ee,
    m: ce,
    r: Xe,
    mt: ge,
    mc: le,
    pc: D,
    pbc: F,
    n: _t,
    o: e
  };
  return {
    render: wt,
    hydrate: void 0,
    createApp: $x(wt)
  };
}
function ff({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function uo({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function tk(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Jy(e, t, n = !1) {
  const r = e.children, o = t.children;
  if (et(r) && et(o))
    for (let a = 0; a < r.length; a++) {
      const c = r[a];
      let u = o[a];
      u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = o[a] = bi(o[a]), u.el = c.el), !n && u.patchFlag !== -2 && Jy(c, u)), u.type === ru && (u.patchFlag === -1 && (u = o[a] = bi(u)), u.el = c.el), u.type === Wi && !u.el && (u.el = c.el);
    }
}
function nk(e) {
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
function Zy(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Zy(t);
}
function gg(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Qy(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Qy(t.subTree) : null;
}
const eb = (e) => e.__isSuspense;
function rk(e, t) {
  t && t.pendingBranch ? et(e) ? t.effects.push(...e) : t.effects.push(e) : fx(e);
}
const qe = /* @__PURE__ */ Symbol.for("v-fgt"), ru = /* @__PURE__ */ Symbol.for("v-txt"), Wi = /* @__PURE__ */ Symbol.for("v-cmt"), df = /* @__PURE__ */ Symbol.for("v-stc"), Es = [];
let ur = null;
function oe(e = !1) {
  Es.push(ur = e ? null : []);
}
function ik() {
  Es.pop(), ur = Es[Es.length - 1] || null;
}
let $s = 1;
function yg(e, t = !1) {
  $s += e, e < 0 && ur && t && (ur.hasOnce = !0);
}
function tb(e) {
  return e.dynamicChildren = $s > 0 ? ur || fa : null, ik(), $s > 0 && ur && ur.push(e), e;
}
function fe(e, t, n, r, o, a) {
  return tb(
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
function Sr(e, t, n, r, o) {
  return tb(
    Le(
      e,
      t,
      n,
      r,
      o,
      !0
    )
  );
}
function nb(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ls(e, t) {
  return e.type === t.type && e.key === t.key;
}
const rb = ({ key: e }) => e ?? null, Xl = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ln(e) || /* @__PURE__ */ Tn(e) || ot(e) ? { i: cr, r: e, k: t, f: !!n } : e : null);
function Y(e, t = null, n = null, r = 0, o = null, a = e === qe ? 0 : 1, c = !1, u = !1) {
  const d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && rb(t),
    ref: t && Xl(t),
    scopeId: Cy,
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
    ctx: cr
  };
  return u ? (cp(d, n), a & 128 && e.normalize(d)) : n && (d.shapeFlag |= ln(n) ? 8 : 16), $s > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  ur && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (d.patchFlag > 0 || a & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  d.patchFlag !== 32 && ur.push(d), d;
}
const Le = ok;
function ok(e, t = null, n = null, r = 0, o = null, a = !1) {
  if ((!e || e === Ry) && (e = Wi), nb(e)) {
    const u = ka(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && cp(u, n), $s > 0 && !a && ur && (u.shapeFlag & 6 ? ur[ur.indexOf(e)] = u : ur.push(u)), u.patchFlag = -2, u;
  }
  if (gk(e) && (e = e.__vccOpts), t) {
    t = ak(t);
    let { class: u, style: d } = t;
    u && !ln(u) && (t.class = pt(u)), Et(d) && (/* @__PURE__ */ ip(d) && !et(d) && (d = Dn({}, d)), t.style = It(d));
  }
  const c = ln(e) ? 1 : eb(e) ? 128 : yx(e) ? 64 : Et(e) ? 4 : ot(e) ? 2 : 0;
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
function ak(e) {
  return e ? /* @__PURE__ */ ip(e) || Wy(e) ? Dn({}, e) : e : null;
}
function ka(e, t, n = !1, r = !1) {
  const { props: o, ref: a, patchFlag: c, children: u, transition: d } = e, b = t ? vi(o || {}, t) : o, g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && rb(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && a ? et(a) ? a.concat(Xl(t)) : [a, Xl(t)] : Xl(t)
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
    patchFlag: t && e.type !== qe ? c === -1 ? 16 : c | 16 : c,
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
    ssContent: e.ssContent && ka(e.ssContent),
    ssFallback: e.ssFallback && ka(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return d && r && ap(
    g,
    d.clone(g)
  ), g;
}
function ys(e = " ", t = 0) {
  return Le(ru, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (oe(), Sr(Wi, null, e)) : Le(Wi, null, e);
}
function Zr(e) {
  return e == null || typeof e == "boolean" ? Le(Wi) : et(e) ? Le(
    qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : nb(e) ? bi(e) : Le(ru, null, String(e));
}
function bi(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : ka(e);
}
function cp(e, t) {
  let n = 0;
  const { shapeFlag: r } = e;
  if (t == null)
    t = null;
  else if (et(t))
    n = 16;
  else if (typeof t == "object")
    if (r & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), cp(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Wy(t) ? t._ctx = cr : o === 3 && cr && (cr.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ot(t) ? (t = { default: t, _ctx: cr }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [ys(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function vi(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    for (const o in r)
      if (o === "class")
        t.class !== r.class && (t.class = pt([t.class, r.class]));
      else if (o === "style")
        t.style = It([t.style, r.style]);
      else if (Bc(o)) {
        const a = t[o], c = r[o];
        c && a !== c && !(et(a) && a.includes(c)) ? t[o] = a ? [].concat(a, c) : c : c == null && a == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Uc(o) && (t[o] = c);
      } else o !== "" && (t[o] = r[o]);
  }
  return t;
}
function Br(e, t, n, r = null) {
  oi(e, t, 7, [
    n,
    r
  ]);
}
const sk = zy();
let lk = 0;
function ck(e, t, n) {
  const r = e.type, o = (t ? t.appContext : e.appContext) || sk, a = {
    uid: lk++,
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
    scope: new DS(
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
    propsOptions: Uy(r, o),
    emitsOptions: jy(r, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ot,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
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
  return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = jx.bind(null, a), e.ce && e.ce(a), a;
}
let On = null;
const uk = () => On || cr;
let _c, cd;
{
  const e = qc(), t = (n, r) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(r), (a) => {
      o.length > 1 ? o.forEach((c) => c(a)) : o[0](a);
    };
  };
  _c = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => On = n
  ), cd = t(
    "__VUE_SSR_SETTERS__",
    (n) => zs = n
  );
}
const tl = (e) => {
  const t = On;
  return _c(e), e.scope.on(), () => {
    e.scope.off(), _c(t);
  };
}, bg = () => {
  On && On.scope.off(), _c(null);
};
function ib(e) {
  return e.vnode.shapeFlag & 4;
}
let zs = !1;
function fk(e, t = !1, n = !1) {
  t && cd(t);
  const { props: r, children: o } = e.vnode, a = ib(e);
  Ux(e, r, a, t), Jx(e, o, n || t);
  const c = a ? dk(e, t) : void 0;
  return t && cd(!1), c;
}
function dk(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ox);
  const { setup: r } = n;
  if (r) {
    Mi();
    const o = e.setupContext = r.length > 1 ? hk(e) : null, a = tl(e), c = Qs(
      r,
      e,
      0,
      [
        e.props,
        o
      ]
    ), u = ny(c);
    if (Ni(), a(), (u || e.sp) && !Cs(e) && Fy(e), u) {
      if (c.then(bg, bg), t)
        return c.then((d) => {
          vg(e, d);
        }).catch((d) => {
          Zc(d, e, 0);
        });
      e.asyncDep = c;
    } else
      vg(e, c);
  } else
    ob(e);
}
function vg(e, t, n) {
  ot(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Et(t) && (e.setupState = ky(t)), ob(e);
}
function ob(e, t, n) {
  const r = e.type;
  e.render || (e.render = r.render || ti);
  {
    const o = tl(e);
    Mi();
    try {
      Fx(e);
    } finally {
      Ni(), o();
    }
  }
}
const pk = {
  get(e, t) {
    return En(e, "get", ""), e[t];
  }
};
function hk(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, pk),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function iu(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ky(nx(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Is)
        return Is[n](e);
    },
    has(t, n) {
      return n in t || n in Is;
    }
  })) : e.proxy;
}
function mk(e, t = !0) {
  return ot(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function gk(e) {
  return ot(e) && "__vccOpts" in e;
}
const ft = (e, t) => /* @__PURE__ */ ax(e, t, zs), yk = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ud;
const _g = typeof window < "u" && window.trustedTypes;
if (_g)
  try {
    ud = /* @__PURE__ */ _g.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ab = ud ? (e) => ud.createHTML(e) : (e) => e, bk = "http://www.w3.org/2000/svg", vk = "http://www.w3.org/1998/Math/MathML", gi = typeof document < "u" ? document : null, wg = gi && /* @__PURE__ */ gi.createElement("template"), _k = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, r) => {
    const o = t === "svg" ? gi.createElementNS(bk, e) : t === "mathml" ? gi.createElementNS(vk, e) : n ? gi.createElement(e, { is: n }) : gi.createElement(e);
    return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (e) => gi.createTextNode(e),
  createComment: (e) => gi.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => gi.querySelector(e),
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
      wg.innerHTML = ab(
        r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e
      );
      const u = wg.content;
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
}, wk = /* @__PURE__ */ Symbol("_vtc");
function Sk(e, t, n) {
  const r = e[wk];
  r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const wc = /* @__PURE__ */ Symbol("_vod"), sb = /* @__PURE__ */ Symbol("_vsh"), Eo = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[wc] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : cs(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: r }) {
    !t != !n && (r ? t ? (r.beforeEnter(e), cs(e, !0), r.enter(e)) : r.leave(e, () => {
      cs(e, !1);
    }) : cs(e, t));
  },
  beforeUnmount(e, { value: t }) {
    cs(e, t);
  }
};
function cs(e, t) {
  e.style.display = t ? e[wc] : "none", e[sb] = !t;
}
const xk = /* @__PURE__ */ Symbol(""), kk = /(?:^|;)\s*display\s*:/;
function Mk(e, t, n) {
  const r = e.style, o = ln(n);
  let a = !1;
  if (n && !o) {
    if (t)
      if (ln(t))
        for (const c of t.split(";")) {
          const u = c.slice(0, c.indexOf(":")).trim();
          n[u] == null && ql(r, u, "");
        }
      else
        for (const c in t)
          n[c] == null && ql(r, c, "");
    for (const c in n)
      c === "display" && (a = !0), ql(r, c, n[c]);
  } else if (o) {
    if (t !== n) {
      const c = r[xk];
      c && (n += ";" + c), r.cssText = n, a = kk.test(n);
    }
  } else t && e.removeAttribute("style");
  wc in e && (e[wc] = a ? r.display : "", e[sb] && (r.display = "none"));
}
const Sg = /\s*!important$/;
function ql(e, t, n) {
  if (et(n))
    n.forEach((r) => ql(e, t, r));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const r = Nk(e, t);
    Sg.test(n) ? e.setProperty(
      Oo(r),
      n.replace(Sg, ""),
      "important"
    ) : e[r] = n;
  }
}
const xg = ["Webkit", "Moz", "ms"], pf = {};
function Nk(e, t) {
  const n = pf[t];
  if (n)
    return n;
  let r = Hn(t);
  if (r !== "filter" && r in e)
    return pf[t] = r;
  r = Xc(r);
  for (let o = 0; o < xg.length; o++) {
    const a = xg[o] + r;
    if (a in e)
      return pf[t] = a;
  }
  return t;
}
const kg = "http://www.w3.org/1999/xlink";
function Mg(e, t, n, r, o, a = FS(t)) {
  r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(kg, t.slice(6, t.length)) : e.setAttributeNS(kg, t, n) : n == null || a && !ay(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    a ? "" : ii(n) ? String(n) : n
  );
}
function Ng(e, t, n, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ab(n) : n);
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
    u === "boolean" ? n = ay(n) : n == null && u === "string" ? (n = "", c = !0) : u === "number" && (n = 0, c = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  c && e.removeAttribute(o || t);
}
function oa(e, t, n, r) {
  e.addEventListener(t, n, r);
}
function Pk(e, t, n, r) {
  e.removeEventListener(t, n, r);
}
const Pg = /* @__PURE__ */ Symbol("_vei");
function Ak(e, t, n, r, o = null) {
  const a = e[Pg] || (e[Pg] = {}), c = a[t];
  if (r && c)
    c.value = r;
  else {
    const [u, d] = Ck(t);
    if (r) {
      const b = a[t] = Ok(
        r,
        o
      );
      oa(e, u, b, d);
    } else c && (Pk(e, u, c, d), a[t] = void 0);
  }
}
const Ag = /(?:Once|Passive|Capture)$/;
function Ck(e) {
  let t;
  if (Ag.test(e)) {
    t = {};
    let r;
    for (; r = e.match(Ag); )
      e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Oo(e.slice(2)), t];
}
let hf = 0;
const Ik = /* @__PURE__ */ Promise.resolve(), Ek = () => hf || (Ik.then(() => hf = 0), hf = Date.now());
function Ok(e, t) {
  const n = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= n.attached)
      return;
    oi(
      Fk(r, n.value),
      t,
      5,
      [r]
    );
  };
  return n.value = e, n.attached = Ek(), n;
}
function Fk(e, t) {
  if (et(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (r) => (o) => !o._stopped && r && r(o)
    );
  } else
    return t;
}
const Cg = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tk = (e, t, n, r, o, a) => {
  const c = o === "svg";
  t === "class" ? Sk(e, r, c) : t === "style" ? Mk(e, n, r) : Bc(t) ? Uc(t) || Ak(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Dk(e, t, r, c)) ? (Ng(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Mg(e, t, r, c, a, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Lk(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ln(r))) ? Ng(e, Hn(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Mg(e, t, r, c));
};
function Dk(e, t, n, r) {
  if (r)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Cg(t) && ot(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Cg(t) && ln(n) ? !1 : t in e;
}
function Lk(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const r = Hn(t);
  return Array.isArray(n) ? n.some((o) => Hn(o) === r) : Object.keys(n).some((o) => Hn(o) === r);
}
const Ig = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return et(t) ? (n) => Ul(t, n) : t;
};
function Rk(e) {
  e.target.composing = !0;
}
function Eg(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const mf = /* @__PURE__ */ Symbol("_assign");
function Og(e, t, n) {
  return t && (e = e.trim()), n && (e = qd(e)), e;
}
const Fg = {
  created(e, { modifiers: { lazy: t, trim: n, number: r } }, o) {
    e[mf] = Ig(o);
    const a = r || o.props && o.props.type === "number";
    oa(e, t ? "change" : "input", (c) => {
      c.target.composing || e[mf](Og(e.value, n, a));
    }), (n || a) && oa(e, "change", () => {
      e.value = Og(e.value, n, a);
    }), t || (oa(e, "compositionstart", Rk), oa(e, "compositionend", Eg), oa(e, "change", Eg));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: o, number: a } }, c) {
    if (e[mf] = Ig(c), e.composing) return;
    const u = (a || e.type === "number") && !/^0\d/.test(e.value) ? qd(e.value) : e.value, d = t ?? "";
    if (u === d)
      return;
    const b = e.getRootNode();
    (b instanceof Document || b instanceof ShadowRoot) && b.activeElement === e && e.type !== "range" && (r && t === n || o && e.value.trim() === d) || (e.value = d);
  }
}, Vk = ["ctrl", "shift", "alt", "meta"], $k = {
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
  exact: (e, t) => Vk.some((n) => e[`${n}Key`] && !t.includes(n))
}, Lt = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), r = t.join(".");
  return n[r] || (n[r] = ((o, ...a) => {
    for (let c = 0; c < t.length; c++) {
      const u = $k[t[c]];
      if (u && u(o, t)) return;
    }
    return e(o, ...a);
  }));
}, zk = /* @__PURE__ */ Dn({ patchProp: Tk }, _k);
let Tg;
function jk() {
  return Tg || (Tg = Qx(zk));
}
const up = ((...e) => {
  const t = jk().createApp(...e), { mount: n } = t;
  return t.mount = (r) => {
    const o = Gk(r);
    if (!o) return;
    const a = t._component;
    !ot(a) && !a.render && !a.template && (a.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const c = n(o, !1, Hk(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), c;
  }, t;
});
function Hk(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Gk(e) {
  return ln(e) ? document.querySelector(e) : e;
}
const Kk = "PanoramaSuite.Debug.Diagnostics", Wk = "PanoramaSuite.Debug.ExportDiagnostics", gf = "pano_suite.diagnostics.v1", Dg = "pano_suite.diagnostics.previous.v1", Bk = 300, Uk = 2e5, Yk = 100, Xk = 20, qk = 1e3, Jk = 2, El = 1024 * 1024;
function zi(e, t = 2) {
  const n = 10 ** t;
  return Math.round(e * n) / n;
}
function Zk() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function Qk() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: Zk,
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
      var r;
      const t = globalThis.PerformanceObserver;
      if (!((r = t == null ? void 0 : t.supportedEntryTypes) != null && r.includes("longtask"))) return null;
      const n = new t((o) => e(o.getEntries()));
      return n.observe({ type: "longtask" }), () => n.disconnect();
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
function eM(e = {}) {
  const t = { ...Qk(), ...e };
  let n = !1, r = !1, o = null, a = null, c = 0, u = null, d = 0, b = 0;
  const g = /* @__PURE__ */ new Set(), v = /* @__PURE__ */ new Set(), S = { created: 0, released: 0, collected: 0 }, M = { created: 0, collected: 0 }, k = t.FinalizationRegistry ? new t.FinalizationRegistry((Ae) => {
    g.delete(Ae), S.collected += 1;
  }) : null, P = t.FinalizationRegistry ? new t.FinalizationRegistry((Ae) => {
    v.delete(Ae), M.collected += 1;
  }) : null, A = /* @__PURE__ */ new Set(), O = { created: 0, lost: 0, restored: 0, disposed: 0 }, G = [], R = /* @__PURE__ */ new Map();
  let V = { count: 0, maxMs: 0 }, _ = /* @__PURE__ */ new Map(), j = { count: 0, maxMs: 0 };
  const W = [];
  function le(Ae, De, T = void 0) {
    G.push(T === void 0 ? { t: t.clock(), type: Ae, label: De } : { t: t.clock(), type: Ae, label: De, detail: T }), G.length > Yk && G.shift();
  }
  function ke(Ae, De, T, H, X) {
    if (!n || !H || !t.WeakRef) return H;
    const pe = { ref: new t.WeakRef(H), label: X };
    return Ae.add(pe), De == null || De.register(H, pe), T.created += 1, H;
  }
  function F(Ae, De = "") {
    return ke(g, k, S, Ae, De);
  }
  function q(Ae, De = "") {
    return ke(v, P, M, Ae, De);
  }
  function J({ label: Ae = "", width: De, height: T, offscreen: H = !1 } = {}) {
    const X = globalThis.OffscreenCanvas;
    let pe;
    return H && typeof X < "u" ? pe = new X(De, T) : (pe = t.document().createElement("canvas"), De !== void 0 && T !== void 0 && (pe.width = De, pe.height = T)), F(pe, Ae);
  }
  function ne(Ae) {
    Ae.width = 0, Ae.height = 0, n && (S.released += 1);
  }
  function ge(Ae = t.document(), De = "") {
    var T;
    return q(((T = Ae == null ? void 0 : Ae.createElement) == null ? void 0 : T.call(Ae, "video")) || null, De);
  }
  function me(Ae, De) {
    if (!n || !Ae) return () => {
    };
    const T = { label: De, lost: !1, disposed: !1 };
    A.add(T), O.created += 1, le("webgl-created", De);
    const H = () => {
      T.disposed || (T.lost = !0, O.lost += 1, le("webglcontextlost", De));
    }, X = () => {
      T.disposed || (T.lost = !1, O.restored += 1, le("webglcontextrestored", De));
    };
    return Ae.addEventListener("webglcontextlost", H), Ae.addEventListener("webglcontextrestored", X), () => {
      T.disposed || (T.disposed = !0, A.delete(T), O.disposed += 1, le("webgl-disposed", De));
    };
  }
  function re(Ae, De) {
    return R.set(Ae, De), () => {
      R.get(Ae) === De && R.delete(Ae);
    };
  }
  function B() {
    return n ? t.now() : -1;
  }
  function D(Ae) {
    if (Ae < 0 || !n) return;
    const De = t.now() - Ae;
    V.count += 1, V.maxMs = Math.max(V.maxMs, De);
  }
  function I(Ae, De) {
    if (De < 0 || !n) return;
    const T = t.now() - De, H = _.get(Ae) ?? { count: 0, maxMs: 0 };
    H.count += 1, H.maxMs = Math.max(H.maxMs, T), _.set(Ae, H);
  }
  function Z() {
    let Ae = 0, De = 0, T = 0, H = [0, 0];
    const X = {};
    for (const pe of g) {
      const ye = pe.ref.deref();
      if (!ye) continue;
      Ae += 1;
      const we = ye.width * ye.height;
      we > 0 && (De += 1), T += we, we > H[0] * H[1] && (H = [ye.width, ye.height]);
      const Oe = X[pe.label] ?? (X[pe.label] = [0, 0]);
      Oe[0] += 1, Oe[1] += we;
    }
    return { ...S, alive: Ae, sized: De, pixels: T, mb: zi(T * 4 / El, 1), largest: H, byLabel: X };
  }
  function ce() {
    const Ae = [];
    let De = 0, T = 0;
    for (const H of v) {
      const X = H.ref.deref();
      if (!X) continue;
      De += 1;
      const pe = !X.paused && !X.ended;
      pe && (T += 1), Ae.length < Xk && Ae.push({
        label: H.label,
        playing: pe,
        src: !!(X.currentSrc || X.src),
        size: [X.videoWidth || 0, X.videoHeight || 0],
        ready: X.readyState ?? 0,
        connected: !!X.isConnected
      });
    }
    return { ...M, alive: De, playing: T, list: Ae };
  }
  function Ee() {
    const Ae = t.now(), De = t.memory(), T = {
      t: t.clock(),
      heap: De ? { used: zi(De.usedJSHeapSize / El, 1), total: zi(De.totalJSHeapSize / El, 1), limit: zi(De.jsHeapSizeLimit / El, 1) } : null,
      canvas: Z(),
      webgl: { ...O, alive: [...A].filter((H) => !H.lost).length },
      video: ce(),
      frame: { count: V.count, maxMs: zi(V.maxMs), longTasks: j.count, longTaskMaxMs: zi(j.maxMs) },
      renders: Object.fromEntries([..._].map(([H, X]) => [H, { count: X.count, maxMs: zi(X.maxMs) }])),
      sources: Object.fromEntries([...R].map(([H, X]) => [H, X()])),
      costMs: zi(b, 3)
    };
    return V = { count: 0, maxMs: 0 }, _ = /* @__PURE__ */ new Map(), j = { count: 0, maxMs: 0 }, W.push({ record: T, text: JSON.stringify(T) }), W.length > Bk && W.shift(), d += 1, d % Jk === 0 && Je(), b = t.now() - Ae, T;
  }
  function Xe(Ae = Uk) {
    const De = JSON.stringify({ ...a, events: G }).slice(0, -1);
    let T = Ae - De.length - 14, H = W.length;
    for (; H > 0 && T - W[H - 1].text.length - 1 >= 0; )
      H -= 1, T -= W[H].text.length + 1;
    return `${De},"records":[${W.slice(H).map((X) => X.text).join(",")}]}`;
  }
  function Je() {
    if (!a) return;
    const Ae = t.storage();
    if (Ae) {
      a.savedAt = t.clock();
      try {
        Ae.setItem(gf, Xe());
      } catch {
      }
    }
  }
  function vt() {
    a.closed = !0, a.closedAt = t.clock(), a.closedBy = "unload", Je();
  }
  function $() {
    var X;
    if (r) return o;
    r = !0;
    const Ae = t.storage();
    if (!Ae) return null;
    let De = null;
    try {
      if (De = Ae.getItem(gf), De === null) {
        const pe = Ae.getItem(Dg);
        return o = pe === null ? null : JSON.parse(pe), o;
      }
      Ae.setItem(Dg, De), Ae.removeItem(gf), o = JSON.parse(De);
    } catch {
      return o;
    }
    const T = Array.isArray(o == null ? void 0 : o.records) ? o.records : [], H = T.slice(-5);
    return o != null && o.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${o.closedBy || "unload"}); ${T.length} records kept. Its last records:`,
      JSON.stringify(H)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((o == null ? void 0 : o.startedAt) || 0).toISOString()}, last saved ${new Date((o == null ? void 0 : o.savedAt) || ((X = T.at(-1)) == null ? void 0 : X.t) || 0).toISOString()}; ${T.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(H)
    ), o;
  }
  function _t(Ae) {
    const De = Ae === !0;
    if ($(), De !== n) {
      if (n = De, n) {
        a = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, d = 0, W.length = 0, u = t.observeLongTasks((T) => {
          for (const H of T)
            j.count += 1, j.maxMs = Math.max(j.maxMs, H.duration);
        }), t.addUnload(vt), c = t.setInterval(Ee, qk), Je();
        return;
      }
      t.clearInterval(c), c = 0, u == null || u(), u = null, t.removeUnload(vt), a.closed = !0, a.closedAt = t.clock(), a.closedBy = "disabled", Je();
    }
  }
  function Ie() {
    return {
      exportedAt: t.clock(),
      enabled: n,
      current: a ? { ...a, events: [...G], records: W.map((Ae) => Ae.record) } : null,
      previous: o
    };
  }
  function wt() {
    const Ae = t.document(), De = new Blob([JSON.stringify(Ie(), null, 1)], { type: "application/json" }), T = URL.createObjectURL(De), H = Ae.createElement("a");
    H.href = T, H.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, H.click(), setTimeout(() => URL.revokeObjectURL(T), 0);
  }
  return {
    get enabled() {
      return n;
    },
    createCanvas: J,
    releaseCanvas: ne,
    trackCanvas: F,
    createVideo: ge,
    trackVideo: q,
    watchContext: me,
    addSource: re,
    frameStart: B,
    frameEnd: D,
    renderEnd: I,
    sample: Ee,
    serialize: Xe,
    recoverPrevious: $,
    setEnabled: _t,
    exportData: Ie,
    download: wt
  };
}
const Qn = eM(), In = Qn.createCanvas, fd = Qn.releaseCanvas, yf = Qn.trackCanvas, ou = Qn.createVideo, Lg = Qn.trackVideo, tM = Qn.addSource, nM = Qn.frameStart, rM = Qn.frameEnd;
function lb(e, t) {
  const n = Qn.watchContext(e.canvas, t), r = Qn.addSource(`three.${t}`, () => e.stats()), o = (a) => (c) => {
    const u = Qn.frameStart(), d = a(c);
    return Qn.renderEnd(t, u), d;
  };
  return {
    ...e,
    render: o(e.render),
    renderUnwrap: o(e.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(a) {
      e.dispose(a), !(a != null && a.lost) && (r(), n());
    }
  };
}
const iM = {
  id: Kk,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Qn.setEnabled(e === !0)
}, Rg = {
  id: Wk,
  label: "Export Panorama Suite diagnostics",
  function: () => Qn.download()
};
function aa(e, t) {
  const n = In({ label: "paint.surface" });
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const r = n.getContext("2d");
  return r && (r.clearRect(0, 0, n.width, n.height), r.imageSmoothingEnabled = !0), { canvas: n, ctx: r };
}
function oM() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Vg(e, t = 8) {
  var g;
  const n = (g = e == null ? void 0 : e.getContext) == null ? void 0 : g.call(e, "2d"), r = Number((e == null ? void 0 : e.width) || 0), o = Number((e == null ? void 0 : e.height) || 0);
  if (!n || r < 1 || o < 1) return null;
  const a = n.getImageData(0, 0, r, o).data;
  let c = r, u = o, d = -1, b = -1;
  for (let v = 0; v < o; v += 1)
    for (let S = 0; S < r; S += 1)
      a[(v * r + S) * 4 + 3] <= t || (S < c && (c = S), v < u && (u = v), S > d && (d = S), v > b && (b = v));
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
function fp(e, t) {
  return In({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Gi(e, t, n) {
  if (!e) return aa(t, n);
  const r = Math.max(1, Math.round(t)), o = Math.max(1, Math.round(n));
  return (e.canvas.width !== r || e.canvas.height !== o) && (e.canvas.width = r, e.canvas.height = o, e.ctx.imageSmoothingEnabled = !0), e;
}
function Zt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function Cn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let bf = null, vf = null, $g = null, zg = null, Jt = null, us = null;
function aM() {
  if (vf) return vf;
  const e = 6, t = 17, n = In({ label: "paint.hatch" });
  n.width = t, n.height = t;
  const r = n.getContext("2d");
  return r.fillStyle = "rgba(0, 0, 0, 0.25)", r.fillRect(0, 0, t, t), r.strokeStyle = "rgba(0, 0, 0, 0.5)", r.lineWidth = e, r.lineCap = "square", r.beginPath(), r.moveTo(0, 0), r.lineTo(t, t), r.moveTo(-t / 2, t / 2), r.lineTo(t / 2, t + t / 2), r.moveTo(t / 2, -t / 2), r.lineTo(t + t / 2, t / 2), r.stroke(), vf = n, n;
}
function _f(e, t) {
  if (!e || !t) return;
  const n = t.width, r = t.height;
  bf = Gi(bf, n, r);
  const o = bf;
  Zt(o), o.ctx.drawImage(t, 0, 0), o.ctx.globalCompositeOperation = "source-in", zg !== o.ctx && ($g = o.ctx.createPattern(aM(), "repeat"), zg = o.ctx), o.ctx.fillStyle = $g, o.ctx.fillRect(0, 0, n, r), o.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(o.canvas, 0, 0), e.restore();
}
function sM(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function lM(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function cM(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), r = String((e == null ? void 0 : e.radiusModel) || "").trim(), o = (t == null ? void 0 : t.width) || 1;
  return r === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * o) : r === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * o) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function uM(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const r = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (r === "brush" || r === "eraser" ? 0.15 : 0.2) * t * 2);
}
const Gt = /* @__PURE__ */ new Map(), dp = 128;
function fM(e, t, n, r, o, a) {
  const c = Math.max(1, Math.round(e)), u = Math.max(0, Math.min(1, t)), d = `${c}:${u.toFixed(2)}:${n}:${r}:${o}:${a.toFixed(3)}`;
  if (Gt.has(d)) {
    const G = Gt.get(d);
    return Gt.delete(d), Gt.set(d, G), G;
  }
  Gt.size >= dp && Gt.delete(Gt.keys().next().value);
  const b = c * 2 + 2, g = c + 1, v = fp(b, b), S = v.getContext("2d"), M = u * c, k = c + 1, P = `rgba(${n},${r},${o},${a})`, A = `rgba(${n},${r},${o},0)`, O = S.createRadialGradient(g, g, M, g, g, k);
  return O.addColorStop(0, P), O.addColorStop(1, A), S.fillStyle = O, S.fillRect(0, 0, b, b), Gt.set(d, v), v;
}
function dM(e, t, n, r, o, a, c) {
  const { r: u, g: d, b, a: g } = r, v = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), M = Math.max(0, o), k = Math.max(0, Math.min(0.99, a)), P = Math.max(0, Math.min(1, c ?? 0)), A = `chisel:${v}:${S}:${n.toFixed(2)}:${u}:${d}:${b}:${g.toFixed(3)}:${M.toFixed(2)}:${k.toFixed(2)}:${P.toFixed(2)}`;
  if (Gt.has(A)) {
    const le = Gt.get(A);
    return Gt.delete(A), Gt.set(A, le), le;
  }
  Gt.size >= dp && Gt.delete(Gt.keys().next().value);
  const O = fp(v, S), G = O.getContext("2d"), R = G.createImageData(v, S), V = R.data, _ = Math.max(0, e - t), j = Math.max(0, Math.min(1, n)), W = 1 + M;
  for (let le = 0; le < S; le++)
    for (let ke = 0; ke < v; ke++) {
      const F = ke + 0.5 - e, q = le + 0.5 - t, J = Math.max(Math.abs(F) - _, 0), ge = Math.hypot(J, q) / t;
      if (ge >= 1) continue;
      const me = ge <= j ? 1 : Math.max(0, (1 - ge) / Math.max(1e-4, 1 - j)), re = 1 - ge, B = 1 + M * (1 - re) * (1 - re), D = 1 - k * re * re, I = B * D / W;
      let Z = 1;
      if (P > 0) {
        const Xe = Math.floor((q + t) / 1.5), Je = Math.floor((F + e) / 8), vt = No(ma(Xe * 41 + 500, Je * 19 + 300));
        Z = 1 - P * 0.42 * vt;
      }
      const ce = Math.round(255 * Math.min(1, g * me * I * Z));
      if (ce <= 0) continue;
      const Ee = (le * v + ke) * 4;
      V[Ee] = u, V[Ee + 1] = d, V[Ee + 2] = b, V[Ee + 3] = ce;
    }
  return G.putImageData(R, 0, 0), Gt.set(A, O), O;
}
function ma(e, t) {
  const n = Math.trunc(Math.round(e * 4)), r = Math.trunc(Math.round(t * 4));
  let o = 2166136261;
  return o = Math.imul(o ^ n & 255, 16777619), o = Math.imul(o ^ n >> 8 & 255, 16777619), o = Math.imul(o ^ r & 255, 16777619), o = Math.imul(o ^ r >> 8 & 255, 16777619), o >>> 0;
}
function No(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function pM(e, t, n, r, o, a, c) {
  const u = e + 0.5 - n, d = t + 0.5 - r, b = Math.max(0, n - r), g = Math.max(Math.abs(u) - b, 0), v = Math.hypot(g, d) / r;
  if (v >= 1) return 0;
  const S = No(ma(e * 17 + 3, t * 13 + 7)), M = v + a * 0.22 * (S - 0.5);
  if (M >= 1) return 0;
  const k = M <= o ? 1 : Math.max(0, (1 - M) / Math.max(1e-4, 1 - o)), P = hM(e, t, u, d, n, r), A = a * 0.55;
  if (P < A) return 0;
  const G = 0.45 + 0.55 * ((P - A) / Math.max(1e-4, 1 - A));
  return Math.round(255 * Math.min(1, c * k * G));
}
function hM(e, t, n, r, o, a) {
  const c = Math.floor((n + o) / 3), u = Math.floor((r + a) / 2), d = No(ma(c * 13 + 700, u * 17 + 400)), b = Math.floor((n + o) / 1.5), g = Math.floor((r + a) / 1.5), v = No(ma(b * 23 + 800, g * 29 + 500)), S = No(ma(e * 3 + 100, t * 5 + 200));
  return d * 0.55 + v * 0.3 + S * 0.15;
}
function mM(e, t, n, r, o) {
  const { r: a, g: c, b: u, a: d } = r, b = Math.max(2, Math.ceil(e) * 2), g = Math.max(2, Math.ceil(t) * 2), v = Math.max(0, Math.min(1, o)), S = `crayon:${b}:${g}:${n.toFixed(2)}:${a}:${c}:${u}:${d.toFixed(3)}:${v.toFixed(2)}`;
  if (Gt.has(S)) {
    const G = Gt.get(S);
    return Gt.delete(S), Gt.set(S, G), G;
  }
  Gt.size >= dp && Gt.delete(Gt.keys().next().value);
  const M = fp(b, g), k = M.getContext("2d"), P = k.createImageData(b, g), A = P.data, O = Math.max(0, Math.min(1, n));
  for (let G = 0; G < g; G++)
    for (let R = 0; R < b; R++) {
      const V = pM(R, G, e, t, O, v, d);
      if (V <= 0) continue;
      const _ = (G * b + R) * 4;
      A[_] = a, A[_ + 1] = c, A[_ + 2] = u, A[_ + 3] = V;
    }
  return k.putImageData(P, 0, 0), Gt.set(S, M), M;
}
function cb(e, t, n) {
  var P, A;
  const r = String((t == null ? void 0 : t.stampKind) || "round"), o = cM(t, n), a = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), c = gM(t), u = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), d = Number(((P = t == null ? void 0 : t.angle) == null ? void 0 : P.value) ?? 0), b = uM(t, o), g = String(((A = t == null ? void 0 : t.targetSpace) == null ? void 0 : A.viewMode) || ""), v = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && g !== "unwrap", S = t == null ? void 0 : t.scatter, M = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let k;
  if (r === "chisel") {
    const O = o * u, G = o, R = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), V = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), _ = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    k = dM(O, G, a, c, R, V, _);
  } else if (r === "crayon") {
    const O = o * u, G = o, R = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    k = mM(O, G, a, c, R);
  } else
    k = fM(o, a, c.r, c.g, c.b, c.a);
  return { ctx: e, stampTex: k, radiusPx: o, spacingPx: b, desc: n, aspect: u, angle: d, stampKind: r, scatter: M, latitudeCorrection: v };
}
function gM(e) {
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
function yM(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const r = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, o = Math.max(0, Math.min(1, Number(r.a ?? 1)));
  return `rgba(${Math.round(Number(r.r || 0) * 255)},${Math.round(Number(r.g || 0) * 255)},${Math.round(Number(r.b || 0) * 255)},${o})`;
}
function jg(e, t, n, r, o) {
  const a = e.angle, c = e.desc.width;
  function u(b, g) {
    a === 0 ? e.ctx.drawImage(e.stampTex, b - o, g - r, o * 2, r * 2) : (e.ctx.save(), e.ctx.translate(b, g), e.ctx.rotate(a), e.ctx.drawImage(e.stampTex, -o, -r, o * 2, r * 2), e.ctx.restore());
  }
  u(t, n);
  const d = a === 0 ? o : o * Math.abs(Math.cos(a)) + r * Math.abs(Math.sin(a));
  t - d < 0 && u(t + c, n), t + d > c && u(t - c, n);
}
function pp(e, t, n, r) {
  const o = Math.max(0.01, Number.isFinite(r) ? r : 1);
  if (e.scatter) {
    const { radius: b, count: g } = e.scatter, v = b * e.radiusPx * o, S = ma(t, n);
    for (let M = 0; M < g; M++) {
      const k = No(S + M * 2) * Math.PI * 2, P = Math.sqrt(No(S + M * 2 + 1)) * v, A = t + Math.cos(k) * P, O = n + Math.sin(k) * P, G = Math.max(0.5, e.radiusPx * o * 0.48), R = (0.5 - O / Math.max(1, e.desc.height)) * Math.PI, V = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(R)) : 1, _ = G * e.aspect * V;
      jg(e, A, O, G, _);
    }
    return;
  }
  const a = Math.max(0.5, e.radiusPx * o), c = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, u = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(c)) : 1, d = a * e.aspect * u;
  jg(e, t, n, a, d);
}
function Hg(e, t, n) {
  const r = lM(t);
  if (!e || r.length === 0) return;
  const o = n.width, a = n.height, c = cb(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const u = [];
  for (let S = 0; S < r.length; S++) {
    let M = Number(r[S].u || 0) * o;
    const k = Number(r[S].v || 0) * a;
    S > 0 && Math.abs(M - u[S - 1].x) > o * 0.5 && (M += M < u[S - 1].x ? o : -o), u.push({ x: M, y: k });
  }
  if (pp(c, u[0].x, u[0].y, 1), u.length === 1) {
    e.restore();
    return;
  }
  let d = u[0], b = u[0], g = u[0], v = 0;
  for (let S = 1; S < u.length; S++) {
    const M = u[S], k = { x: (b.x + M.x) * 0.5, y: (b.y + M.y) * 0.5 };
    S === 1 ? v = js(c, g.x, g.y, k.x, k.y, v) : v = Sc(c, d, g, k, M, v), d = b, b = M, g = k;
  }
  u.length === 2 ? js(c, g.x, g.y, b.x, b.y, v) : Sc(c, d, g, b, b, v), e.restore();
}
function Jl(e, t, n) {
  var v;
  const r = Array.isArray((v = t == null ? void 0 : t.geometry) == null ? void 0 : v.points) ? t.geometry.points : [];
  if (!e || r.length < 3) return;
  const o = n.width, a = n.height, c = yM(t), u = [];
  let d = 1 / 0, b = -1 / 0;
  for (let S = 0; S < r.length; S++) {
    const M = sM(r[S]);
    let k = Number(M.x || 0) * o;
    S > 0 && Math.abs(k - u[S - 1].x) > o * 0.5 && (k += k < u[S - 1].x ? o : -o), u.push({ x: k, y: Number(M.y || 0) * a }), k < d && (d = k), k > b && (b = k);
  }
  function g(S) {
    e.beginPath(), e.moveTo(u[0].x + S, u[0].y);
    for (let M = 1; M < u.length; M++) e.lineTo(u[M].x + S, u[M].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = c, g(0), d < 0 && g(o), b > o && g(-o), e.restore();
}
function Ol(e, t, n) {
  var c;
  if (String(((c = t == null ? void 0 : t.geometry) == null ? void 0 : c.geometryKind) || "") === "lasso_fill") {
    Jl(e, t, n);
    return;
  }
  const a = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  a >= 0.999 ? Hg(e, t, n) : (us = Gi(us, n.width, n.height), Zt(us), Hg(us.ctx, t, n), e.save(), e.globalAlpha = a, e.drawImage(us.canvas, 0, 0), e.restore());
}
function fo(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function js(e, t, n, r, o, a) {
  const c = r - t, u = o - n, d = Math.hypot(c, u);
  if (d < 1e-9) return a;
  let b = e.spacingPx - a;
  for (; b <= d; ) {
    const g = b / d;
    pp(e, t + c * g, n + u * g, 1), b += e.spacingPx;
  }
  return d - b + e.spacingPx;
}
function Sc(e, t, n, r, o, a) {
  const u = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, d = Math.sqrt(Math.hypot(r.x - n.x, r.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(o.x - r.x, o.y - r.y)) + 1e-4, g = 0, v = u, S = v + d, M = S + b, k = S - v, P = 16;
  let A = a, O = n.x, G = n.y;
  for (let R = 1; R <= P; R++) {
    const V = v + k * R / P, _ = ((v - V) * t.x + (V - g) * n.x) / (v - g), j = ((v - V) * t.y + (V - g) * n.y) / (v - g), W = ((S - V) * n.x + (V - v) * r.x) / (S - v), le = ((S - V) * n.y + (V - v) * r.y) / (S - v), ke = ((M - V) * r.x + (V - S) * o.x) / (M - S), F = ((M - V) * r.y + (V - S) * o.y) / (M - S), q = ((S - V) * _ + (V - g) * W) / (S - g), J = ((S - V) * j + (V - g) * le) / (S - g), ne = ((M - V) * W + (V - v) * ke) / (M - v), ge = ((M - V) * le + (V - v) * F) / (M - v), me = ((S - V) * q + (V - v) * ne) / (S - v), re = ((S - V) * J + (V - v) * ge) / (S - v);
    A = js(e, O, G, me, re, A), O = me, G = re;
  }
  return A;
}
function bM(e, t, n, r) {
  const o = e.currentStroke.ctx;
  if (!o) return;
  const a = e.descriptor, c = a.width, u = n * a.height, d = e.activeStroke;
  let b = t * c;
  if (d && Math.abs(b - d.prev.x) > c * 0.5 && (b += b < d.prev.x ? c : -c), !d) {
    const M = cb(o, r, a), k = Math.max(0, Math.min(1, Number((r == null ? void 0 : r.opacity) ?? 1))), P = Math.max(0, Number((r == null ? void 0 : r.velocityWidthFactor) ?? 0)), A = String((r == null ? void 0 : r.toolKind) || "") === "eraser", O = String((r == null ? void 0 : r.layerKind) || "paint");
    o.globalCompositeOperation = "source-over", pp(M, b, u, 1), e.activeStroke = {
      pprev: { x: b, y: u },
      prev: { x: b, y: u },
      lastMidX: b,
      lastMidY: u,
      stampTex: M.stampTex,
      radiusPx: M.radiusPx,
      spacingPx: M.spacingPx,
      aspect: M.aspect,
      angle: M.angle,
      stampKind: M.stampKind,
      scatter: M.scatter,
      latitudeCorrection: M.latitudeCorrection,
      strokeOpacity: k,
      velocityWidthFactor: P,
      distSinceStamp: 0,
      isEraser: A,
      layerKind: O,
      pointCount: 1
    }, Cn(e);
    return;
  }
  const g = (d.prev.x + b) * 0.5, v = (d.prev.y + u) * 0.5;
  o.globalCompositeOperation = "source-over";
  const S = {
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
  d.pointCount === 1 ? d.distSinceStamp = js(S, d.lastMidX, d.lastMidY, g, v, d.distSinceStamp) : d.distSinceStamp = Sc(
    S,
    d.pprev,
    { x: d.lastMidX, y: d.lastMidY },
    { x: g, y: v },
    { x: b, y: u },
    d.distSinceStamp
  ), d.pprev = d.prev, d.prev = { x: b, y: u }, d.lastMidX = g, d.lastMidY = v, d.pointCount++, Cn(e);
}
function dd(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), r = { kind: "ERP_GLOBAL", width: t, height: n }, o = /* @__PURE__ */ new Map(), a = aa(t, n), c = {
    descriptor: r,
    committedMask: aa(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, u = {
    actionGroupId: "__eraser__",
    descriptor: r,
    committedPaint: aa(t, n),
    currentStroke: a,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, d = aa(t, n);
  let b = null, g = "", v = null;
  const S = /* @__PURE__ */ new Map();
  let M = null;
  function k(ne) {
    return {
      actionGroupId: ne,
      descriptor: r,
      committedPaint: aa(t, n),
      currentStroke: a,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function P(ne) {
    let ge = o.get(ne);
    return ge || (ge = k(ne), o.set(ne, ge)), ge;
  }
  function A(ne) {
    return g === "mask" ? c : b ? P(b) : u;
  }
  function O(ne) {
    var I;
    const ge = !v || v.length !== ne.length || ne.some((Z, ce) => Z !== v[ce]), me = g === "paint" && ((I = b ? o.get(b) : u) == null ? void 0 : I.activeStroke) || null;
    let re = c.displayDirty || u.displayDirty || ge;
    for (const Z of ne) {
      const ce = o.get(Z);
      if (ce != null && ce.displayDirty) {
        re = !0;
        break;
      }
    }
    if (me && (re = !0), !re) return;
    c.displayDirty = !1, u.displayDirty = !1;
    for (const Z of ne) {
      const ce = o.get(Z);
      ce && (ce.displayDirty = !1);
    }
    v = [...ne];
    const B = d.ctx;
    Zt(d);
    const D = !!(me != null && me.isEraser);
    for (const Z of ne) {
      const ce = o.get(Z);
      if (!ce) continue;
      const Xe = b === ce.actionGroupId && g === "paint" ? ce.activeStroke : null;
      if (D)
        Jt = Gi(Jt, t, n), Zt(Jt), Jt.ctx.drawImage(ce.committedPaint.canvas, 0, 0), fo(Jt.ctx, a.canvas), B.drawImage(Jt.canvas, 0, 0);
      else if (B.drawImage(ce.committedPaint.canvas, 0, 0), Xe) {
        const Je = ce.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Xe.strokeOpacity ?? 1));
        B.save(), B.globalAlpha = Je, B.drawImage(a.canvas, 0, 0), B.restore();
      }
    }
  }
  function G(ne) {
    var me, re, B, D, I;
    for (const Z of o.values())
      Zt(Z.committedPaint), Zt(Z.currentStroke), Z.activeStroke = null, Cn(Z);
    Zt(c.committedMask), Zt(c.currentStroke), c.activeStroke = null, c.painted = !1, S.clear(), Cn(c), Cn(u), v = null;
    const ge = [
      ...Array.isArray((re = (me = ne == null ? void 0 : ne.painting) == null ? void 0 : me.paint) == null ? void 0 : re.strokes) ? ne.painting.paint.strokes : [],
      ...Array.isArray((D = (B = ne == null ? void 0 : ne.painting) == null ? void 0 : B.mask) == null ? void 0 : D.strokes) ? ne.painting.mask.strokes : []
    ];
    for (const Z of ge) {
      if (((I = Z == null ? void 0 : Z.targetSpace) == null ? void 0 : I.kind) !== "ERP_GLOBAL") continue;
      const ce = String((Z == null ? void 0 : Z.layerKind) || "paint"), Xe = String((Z == null ? void 0 : Z.toolKind) || "pen") === "eraser";
      if (ce === "mask") {
        const Je = c.descriptor;
        Xe ? (Jt = Gi(Jt, Je.width, Je.height), Zt(Jt), Ol(Jt.ctx, Z, Je), fo(c.committedMask.ctx, Jt.canvas)) : (Ol(c.committedMask.ctx, Z, Je), c.painted = !0);
        continue;
      }
      if (Xe) {
        Jt = Gi(Jt, r.width, r.height), Zt(Jt), Ol(Jt.ctx, Z, r);
        for (const Je of o.values())
          fo(Je.committedPaint.ctx, Jt.canvas), Cn(Je);
      } else {
        const Je = String((Z == null ? void 0 : Z.actionGroupId) || "__default__"), vt = P(Je), $ = vt.descriptor;
        Ol(vt.committedPaint.ctx, Z, $), Cn(vt);
      }
    }
    O([...o.keys()]);
  }
  function R(ne, ge) {
    g = String((ne == null ? void 0 : ne.layerKind) || "");
    const me = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser";
    if (g === "mask")
      b = null, Zt(c.currentStroke), c.activeStroke = null, Cn(c);
    else {
      const re = me ? u : P(String((ne == null ? void 0 : ne.actionGroupId) || "__default__"));
      b = me ? "" : String((ne == null ? void 0 : ne.actionGroupId) || "__default__"), Zt(re.currentStroke), re.activeStroke = null, Cn(re);
    }
  }
  function V(ne, ge) {
    var ce;
    const me = String((ne == null ? void 0 : ne.layerKind) || "paint"), re = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser", B = me === "mask" ? c : re ? u : P(String((ne == null ? void 0 : ne.actionGroupId) || b || "__default__")), D = B.activeStroke, I = B.descriptor;
    if (D && D.pointCount > 1) {
      const Ee = B.currentStroke.ctx;
      Ee.globalCompositeOperation = "source-over";
      const Xe = {
        ctx: Ee,
        stampTex: D.stampTex,
        radiusPx: D.radiusPx,
        spacingPx: D.spacingPx,
        desc: I,
        aspect: D.aspect,
        angle: D.angle,
        stampKind: D.stampKind,
        scatter: D.scatter,
        latitudeCorrection: D.latitudeCorrection
      };
      D.pointCount === 2 ? js(Xe, D.lastMidX, D.lastMidY, D.prev.x, D.prev.y, D.distSinceStamp) : Sc(Xe, D.pprev, { x: D.lastMidX, y: D.lastMidY }, D.prev, D.prev, D.distSinceStamp);
    }
    B.lassoPreviewActive && (Zt(B.currentStroke), Jl(B.currentStroke.ctx, ne, I), B.lassoPreviewActive = !1);
    const Z = me === "mask" ? c.committedMask : B.committedPaint;
    if (re && me === "paint")
      for (const Ee of o.values())
        fo(Ee.committedPaint.ctx, B.currentStroke.canvas), Cn(Ee);
    else if (re)
      fo(Z.ctx, B.currentStroke.canvas);
    else {
      me === "mask" && (c.painted = !0);
      const Ee = Math.max(0, Math.min(1, (D == null ? void 0 : D.strokeOpacity) ?? 1));
      Z.ctx.save(), Z.ctx.globalAlpha = Ee, Z.ctx.drawImage(B.currentStroke.canvas, 0, 0), Z.ctx.restore();
    }
    oM() && (String((ne == null ? void 0 : ne.toolKind) || ""), String((I == null ? void 0 : I.kind) || ""), Number((I == null ? void 0 : I.width) || 0), Number((I == null ? void 0 : I.height) || 0), String(((ce = ne == null ? void 0 : ne.targetSpace) == null ? void 0 : ce.viewMode) || ""), Number((ne == null ? void 0 : ne.aspect) ?? 1), Vg(B.currentStroke.canvas), Vg(Z.canvas), void 0), Zt(B.currentStroke), B.activeStroke = null, Cn(B), S.clear(), b = null, g = "", O([...o.keys()]);
  }
  function _(ne) {
    if (g === "mask")
      Zt(c.currentStroke), c.activeStroke = null, c.lassoPreviewActive = !1, Cn(c);
    else if (g === "paint" && !b)
      Zt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, Cn(u);
    else if (b) {
      const ge = o.get(b);
      ge && (Zt(ge.currentStroke), ge.activeStroke = null, ge.lassoPreviewActive = !1, Cn(ge));
    }
    S.clear(), b = null, g = "", O([...o.keys()]);
  }
  function j(ne, ge) {
    var re;
    if (g = String((ne == null ? void 0 : ne.layerKind) || ""), String(((re = ne == null ? void 0 : ne.geometry) == null ? void 0 : re.geometryKind) || "") === "lasso_fill") {
      if (g === "mask")
        Zt(c.currentStroke), Jl(c.currentStroke.ctx, ne, c.descriptor), c.lassoPreviewActive = !0, Cn(c);
      else {
        const B = String((ne == null ? void 0 : ne.toolKind) || "") === "eraser", D = B ? u : P(String((ne == null ? void 0 : ne.actionGroupId) || b || "__default__"));
        b = B ? "" : String((ne == null ? void 0 : ne.actionGroupId) || b || "__default__"), Zt(D.currentStroke), Jl(D.currentStroke.ctx, ne, D.descriptor), D.lassoPreviewActive = !0, Cn(D);
      }
      O([...o.keys()]);
    }
  }
  function W(ne) {
    return O(ne ?? [...o.keys()]), {
      displayPaint: d,
      committedMask: c.committedMask,
      descriptor: r
    };
  }
  function le(ne) {
    return o.get(String(ne)) ?? null;
  }
  function ke() {
    return [...o.keys()];
  }
  function F(ne) {
    var Ee;
    const ge = o.get(String(ne));
    if (!ge) return null;
    const me = g === "paint" && b === ge.actionGroupId, re = g === "paint" && ((Ee = b ? o.get(b) : u) == null ? void 0 : Ee.activeStroke) || null, B = !!(re != null && re.isEraser), D = me ? ge.activeStroke : null;
    if (!B && !D) return ge.committedPaint.canvas;
    const I = `${ge.revision}:${u.revision}:${B}`, Z = S.get(ge.actionGroupId);
    if ((Z == null ? void 0 : Z.key) === I) return Z.surface.canvas;
    const ce = Gi((Z == null ? void 0 : Z.surface) ?? null, t, n);
    return Zt(ce), ce.ctx.drawImage(ge.committedPaint.canvas, 0, 0), B ? fo(ce.ctx, a.canvas) : (ce.ctx.save(), ce.ctx.globalAlpha = ge.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, D.strokeOpacity ?? 1)), ce.ctx.drawImage(a.canvas, 0, 0), ce.ctx.restore()), S.set(ge.actionGroupId, { key: I, surface: ce }), ce.canvas;
  }
  function q() {
    const ne = g === "mask" ? c.activeStroke : null;
    return !c.painted && (!ne || ne.isEraser) ? null : `${c.revision}:${!!ne}`;
  }
  function J() {
    const ne = q();
    if (ne === null)
      return M = null, null;
    if ((M == null ? void 0 : M.key) === ne) return M.surface.canvas;
    const ge = Gi((M == null ? void 0 : M.surface) ?? null, t, n);
    Zt(ge);
    const me = g === "mask" ? c.activeStroke : null;
    return me != null && me.isEraser ? (Jt = Gi(Jt, t, n), Zt(Jt), Jt.ctx.drawImage(c.committedMask.canvas, 0, 0), fo(Jt.ctx, a.canvas), _f(ge.ctx, Jt.canvas)) : (_f(ge.ctx, c.committedMask.canvas), me && _f(ge.ctx, a.canvas)), M = { key: ne, surface: ge }, ge.canvas;
  }
  return {
    rebuildCommitted: G,
    beginStroke: R,
    appendStrokePoint: bM,
    updateActiveStroke: j,
    commitActiveStroke: V,
    cancelActiveStroke: _,
    getErpTarget: W,
    ensureTarget: A,
    getGroupTarget: le,
    getGroupDisplayCanvas: F,
    getMaskDisplayCanvas: J,
    getMaskDisplayRevision: q,
    getAllGroupIds: ke
  };
}
function te(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ht(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function hp(e, t) {
  let n = Ht(t) - Ht(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const pd = 3;
function fs(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function xc(e, t = 0) {
  const n = fs(e == null ? void 0 : e.deltaY);
  if (n != null) return Math.sign(n);
  const r = fs(e == null ? void 0 : e.wheelDeltaY);
  if (r != null) return Math.sign(-r);
  const o = fs(e == null ? void 0 : e.wheelDelta);
  if (o != null) return Math.sign(-o);
  const a = fs(e == null ? void 0 : e.detail);
  return a != null ? Math.sign(a) : Math.sign(fs(t) || 0);
}
function ub(e) {
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
const Gg = Math.PI / 180, Kg = 0.12, vM = pd, _M = 35, wM = 140, bs = 100, SM = 20, Wg = 0.8;
function xM(e, t, n) {
  const r = Math.max(1, Number(t || 1)), o = Math.max(1, Number(n || 1)), a = te(Number(e || bs), 1, 179) * Gg;
  return 2 * Math.atan(Math.tan(a * 0.5) * (o / r)) / Gg;
}
function mp(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: bs })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), r = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), o = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), a = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), c = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), u = typeof e.onDebug == "function" ? e.onDebug : null, d = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(G, R = null) {
    u && u(G, R);
  }
  function g(G, R, V = null, _ = performance.now()) {
    return d.drag.active = !0, d.drag.lastX = Number(G || 0), d.drag.lastY = Number(R || 0), d.drag.lastTs = Number(_ || performance.now()), d.drag.pointerId = V, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.lastTs = d.drag.lastTs, d.velHistory = [], b("drag", { phase: "start", x: d.drag.lastX, y: d.drag.lastY, pointerId: V }), !0;
  }
  function v(G, R, V = "pano", _ = performance.now()) {
    if (!d.drag.active) return !1;
    const j = Number(_ || performance.now()), W = Number(G), le = Number(R), ke = W - d.drag.lastX, F = le - d.drag.lastY;
    d.drag.lastX = W, d.drag.lastY = le, d.drag.lastTs = j;
    const q = r() || { x: 1, y: 1 }, J = Number(q.x || 1), ne = Number(q.y || 1), ge = { ...t() };
    let me = 0, re = 0;
    if (V === "unwrap") {
      const D = o() || { w: 1, h: 1 }, I = Math.max(1, Number(D.w || 1)), Z = Math.max(1, Number(D.h || 1)), ce = ke / I, Ee = F / Z;
      me = -ce * 360 * J, re = Ee * 180 * ne;
    } else {
      const D = a() || { w: 0, h: 0 }, I = Math.max(1, Number(D.w || 0)), Z = Math.max(1, Number(D.h || 0));
      if (I > 1 && Z > 1) {
        const ce = te(Number(ge.fov || bs), 1, 179), Ee = te(xM(ce, I, Z), 0.1, 179);
        me = -(ke / I) * ce * J, re = F / Z * Ee * ne;
      } else
        me = -ke * Kg * J, re = F * Kg * ne;
    }
    ge.yaw = Ht(Number(ge.yaw || 0) + me), ge.pitch = te(Number(ge.pitch || 0) + re, -89.9, 89.9), n(ge), d.velHistory.push({ ts: j, yaw: ge.yaw, pitch: ge.pitch });
    let B = 0;
    for (; B < d.velHistory.length - 1 && d.velHistory[B].ts < j - 100; ) B++;
    return B > 0 && d.velHistory.splice(0, B), d.inertia.active = !1, d.inertia.lastTs = j, c(), b("drag", { phase: "move", dx: ke, dy: F, dYaw: me, dPitch: re }), !0;
  }
  function S(G = performance.now()) {
    if (!d.drag.active) return !1;
    d.drag.active = !1;
    const R = Number(G || performance.now());
    d.drag.lastTs = R;
    const V = d.velHistory.filter((j) => R - j.ts <= 80);
    if (V.length >= 2) {
      const j = V[0], W = V.at(-1), le = Math.max(1e-3, (W.ts - j.ts) / 1e3);
      let ke = W.yaw - j.yaw;
      ke > 180 && (ke -= 360), ke < -180 && (ke += 360), d.inertia.vx = ke / le, d.inertia.vy = (W.pitch - j.pitch) / le;
    } else
      d.inertia.vx = 0, d.inertia.vy = 0;
    d.velHistory = [];
    const _ = Math.hypot(d.inertia.vx, d.inertia.vy);
    return d.inertia.active = _ > SM, d.inertia.lastTs = R, b("drag", { phase: "end", speed: _, inertiaActive: d.inertia.active }), !0;
  }
  function M(G = performance.now()) {
    if (!d.inertia.active) return !1;
    const R = Number(G || performance.now()), V = Math.max(1e-3, (R - (d.inertia.lastTs || R)) / 1e3);
    d.inertia.lastTs = R;
    const _ = { ...t() };
    _.yaw = Ht(Number(_.yaw || 0) + d.inertia.vx * V), _.pitch = te(Number(_.pitch || 0) + d.inertia.vy * V, -89.9, 89.9);
    const j = Math.exp(-5.5 * V);
    return d.inertia.vx *= j, d.inertia.vy *= j, Math.abs(d.inertia.vx) < Wg && Math.abs(d.inertia.vy) < Wg && (d.inertia.vx = 0, d.inertia.vy = 0, d.inertia.active = !1), n(_), c(), d.inertia.active;
  }
  function k() {
    const G = d.drag.active || d.inertia.active || d.inertia.vx !== 0 || d.inertia.vy !== 0;
    return d.drag.active = !1, d.drag.pointerId = null, d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, d.velHistory = [], G;
  }
  function P(G) {
    const R = Math.sign(Number(G || 0));
    if (!R) return !1;
    const V = { ...t() }, _ = Number(V.fov || bs);
    return V.fov = te(_ + R * vM, _M, wM), n(V), c(), b("wheel", { deltaSign: R, fovBefore: _, fovAfter: V.fov }), !0;
  }
  function A(G, R = 0) {
    return P(xc(G, R));
  }
  function O() {
    n({ yaw: 0, pitch: 0, fov: bs }), d.inertia.active = !1, d.inertia.vx = 0, d.inertia.vy = 0, c();
  }
  return {
    state: d,
    startDrag: g,
    moveDrag: v,
    endDrag: S,
    stepInertia: M,
    stopMotion: k,
    applyWheel: P,
    applyWheelEvent: A,
    resetView: O
  };
}
const Mt = Math.PI / 180, hn = 180 / Math.PI;
function wr(e, t, n) {
  return { x: e, y: t, z: n };
}
function kc(e, t) {
  return wr(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Mc(e, t) {
  return wr(e.x * t, e.y * t, e.z * t);
}
function wf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function gp(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return wr(e.x / t, e.y / t, e.z / t);
}
function Zn(e, t) {
  const n = e * Mt, r = t * Mt, o = Math.cos(r);
  return wr(o * Math.sin(n), Math.sin(r), o * Math.cos(n));
}
function Ca(e, t, n = 0) {
  const r = Number(e || 0) * Mt, o = Number(t || 0) * Mt, a = n * Mt, c = Math.cos(r), u = Math.sin(r), d = Math.cos(o), b = Math.sin(o), g = Math.cos(a), v = Math.sin(a);
  return {
    right: wr(
      c * g - u * b * v,
      d * v,
      -u * g - c * b * v
    ),
    up: wr(
      -c * v - u * b * g,
      d * g,
      u * v - c * b * g
    ),
    fwd: wr(u * d, b, c * d)
  };
}
function Nc(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Ct(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function kM() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function MM(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    if (!r || typeof r != "object") continue;
    const o = String(r.actionGroupId || r.id || "").trim();
    if (!o || n.has(o)) continue;
    n.add(o);
    const a = Ct(r.z_index ?? r.zIndex, t.length);
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
function NM(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function PM(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = Ct(e.t, 0), r = Ct(e.widthScale, null), o = Ct(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const a = Ct(e.u, null), c = Ct(e.v, null);
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
    const a = Ct(e.u, null), c = Ct(e.v, null);
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
function Fl(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const r = [];
  for (const o of e) {
    const a = PM(o, t);
    if (!a) return null;
    r.push(a);
  }
  return r.length >= n ? r : null;
}
function AM(e, t, n, r) {
  if (!e || typeof e != "object") return null;
  const o = String(e.geometryKind || "").trim();
  if (o === "lasso_fill") {
    if (!r || n !== "lasso_fill") return null;
    const d = Fl(e.points, t, 3);
    return d ? { geometryKind: o, points: d } : null;
  }
  if (o !== "freehand_open" && o !== "freehand_closed" || n === "lasso_fill") return null;
  const a = Fl(e.points, t, 1);
  if (!a) return null;
  const c = Fl(e.rawPoints, t, 1), u = Fl(e.processedPoints, t, 1);
  return {
    geometryKind: o,
    points: a,
    rawPoints: c || a.map((d) => ({ ...d })),
    processedPoints: u || a.map((d) => ({ ...d }))
  };
}
function CM(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = NM(e.targetSpace);
  if (!n) return null;
  const r = String(e.toolKind || "").trim(), o = AM(e.geometry, n, r, t === "paint");
  if (!o) return null;
  const a = Ct(e.size, null), c = Ct(e.opacity, null);
  if (a == null || c == null) return null;
  const u = String(e.id || "").trim(), d = String(e.actionGroupId || "").trim();
  if (!u || !d) return null;
  const b = Ct(e.radiusValue, null), g = String(e.radiusModel || "").trim() || null;
  let v = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    v = {
      r: Math.max(0, Math.min(1, Ct(S.r, 0))),
      g: Math.max(0, Math.min(1, Ct(S.g, 0))),
      b: Math.max(0, Math.min(1, Ct(S.b, 0))),
      a: Math.max(0, Math.min(1, Ct(S.a, 1)))
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
    hardness: Ct(e.hardness, null),
    flow: Ct(e.flow, null),
    spacing: Ct(e.spacing, null),
    createdAt: Math.trunc(Ct(e.createdAt, 0)),
    color: v,
    radiusModel: g,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: o
  };
}
function Bg(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const r of e.strokes) {
    const o = CM(r, t);
    o && n.strokes.push(o);
  }
  return n;
}
function IM(e) {
  if (!e || typeof e != "object") return null;
  const t = Ct(e.u0, null), n = Ct(e.v0, null), r = Ct(e.u1, null), o = Ct(e.v1, null);
  if (t == null || n == null || r == null || o == null) return null;
  const a = (u) => Math.max(0, Math.min(1, u)), c = { u0: a(t), v0: a(n), u1: a(r), v1: a(o) };
  return c.u1 <= c.u0 || c.v1 <= c.v0 ? null : c;
}
function EM(e) {
  const t = e || {};
  return {
    du: Ct(t.du, 0) ?? 0,
    dv: Ct(t.dv, 0) ?? 0,
    rot_deg: Ct(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Ct(t.scale, 1) ?? 1)
  };
}
function OM(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const r = String(e.layerKind || "paint");
  if (r !== "paint" && r !== "mask") return null;
  const o = String(e.rasterDataUrl || "").trim();
  if (!o.startsWith("data:")) return null;
  const a = IM(e.bbox);
  return a ? {
    id: n,
    type: "raster_frozen",
    layerKind: r,
    z_index: Math.max(0, Ct(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: a,
    rasterDataUrl: o,
    transform: EM(e.transform)
  } : null;
}
function FM(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const r of e) {
    const o = OM(r, t.length);
    !o || n.has(o.id) || (n.add(o.id), t.push(o));
  }
  return t;
}
function ga(e) {
  const t = kM();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: MM(e.groups),
    paint: Bg(e.paint, "paint"),
    mask: Bg(e.mask, "mask"),
    raster_objects: FM(e.raster_objects)
  };
}
const xr = 1, kr = 179, hd = 85;
function au(e) {
  const t = ((nt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function fb(e, t) {
  let n = nt(e, 0) - nt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function db(e, t, { shiftKey: n = !1 } = {}) {
  let r = nt(e, 0) + nt(t, 0) * hn;
  return n && (r = Math.round(r / 15) * 15), au(r);
}
function nt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Yi(e = {}) {
  const t = te(nt(e.hFOV_deg || 90, 90), xr, kr), n = te(nt(e.vFOV_deg || 60, 60), xr, kr), r = Math.tan(t * Mt * 0.5), o = Math.tan(n * Mt * 0.5);
  return {
    yawDeg: nt(e.yaw_deg, 0),
    pitchDeg: nt(e.pitch_deg, 0),
    rollDeg: nt(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: r,
    tanHalfY: o,
    aspect: r / Math.max(1e-12, o)
  };
}
function Po(e, t) {
  const n = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Yi(t);
  return Math.max(1, Math.min(
    n / (2 * o.tanHalfX),
    r / (2 * o.tanHalfY)
  ));
}
function yp(e, t) {
  const n = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), r = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), o = Math.max(1e-6, nt(t, 1)), a = Math.min(n, r * o);
  return { width: a, height: a / o };
}
function bp(e, t) {
  const n = Math.max(1e-12, nt(t, 1)), r = Math.max(1e-6, nt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), o = Math.max(1e-6, nt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), a = te(2 * Math.atan(r / (2 * n)) * hn, xr, kr), c = te(2 * Math.atan(o / (2 * n)) * hn, xr, kr);
  return { hFOV_deg: a, vFOV_deg: c };
}
function TM(e, t, n) {
  const r = nt(e == null ? void 0 : e.x, 0), o = nt(e == null ? void 0 : e.y, 0), a = Math.max(1, nt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), c = Math.max(1, nt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), u = Yi(t), d = Math.max(1e-12, nt(n, 1)), b = 2 * d * u.tanHalfX, g = 2 * d * u.tanHalfY;
  return {
    x: r + (a - b) * 0.5,
    y: o + (c - g) * 0.5,
    w: b,
    h: g,
    focalPx: d
  };
}
function vp(e, t, n = hd) {
  const r = Math.max(1e-12, nt(t, 1)), o = te(nt(n, hd), 1, 89.999), a = r * Math.tan(o * Mt), c = Math.max(1, nt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), u = Math.max(1, nt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(c * 0.5, a),
    halfH: Math.min(u * 0.5, a)
  };
}
function pb(e, t, n) {
  const r = Math.max(1e-12, nt(t, 1));
  return {
    x: (nt(n == null ? void 0 : n.x, 0) - nt(e == null ? void 0 : e.x, 0)) / r,
    y: -(nt(n == null ? void 0 : n.y, 0) - nt(e == null ? void 0 : e.y, 0)) / r
  };
}
function DM(e, t) {
  const n = te(nt(e, 90), xr, kr), r = Math.max(1e-6, nt(t, 1));
  return te(
    2 * Math.atan(Math.tan(n * Mt * 0.5) / r) * hn,
    xr,
    kr
  );
}
function Zl(e, t) {
  const n = te(nt(e, 60), xr, kr), r = Math.max(1e-6, nt(t, 1));
  return te(
    2 * Math.atan(Math.tan(n * Mt * 0.5) * r) * hn,
    xr,
    kr
  );
}
function Ug(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function LM(e, t) {
  const n = Ug(e, 1), r = Ug(t, 1);
  if (n <= 0 || r <= 0) return "1:1";
  const o = 1e3, a = Math.max(1, Math.round(n * o)), c = Math.max(1, Math.round(r * o)), u = (b, g) => g ? u(g, b % g) : b, d = u(a, c) || 1;
  return `${Math.max(1, Math.round(a / d))}:${Math.max(1, Math.round(c / d))}`;
}
function Ao(e) {
  const t = te(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Mt, n = te(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Mt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function _o(e) {
  const t = Ao(e), r = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, o]) => Math.abs(t - o) <= 0.015);
  return (r == null ? void 0 : r[0]) || LM(t, 1);
}
function _p(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = _o(t), t;
}
function hb({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: n = 0,
  rollDeg: r = 0,
  viewFovDeg: o = 100,
  frameFovDeg: a = null
} = {}) {
  const c = a == null || String(a).trim() === "" ? NaN : Number(a), u = Number.isFinite(c) ? te(c, xr, kr) : te(Math.min(42, nt(o, 100) * 0.42), 8, 96);
  return _p({
    id: String(e),
    label: "Frame 1",
    yaw_deg: nt(t, 0),
    pitch_deg: te(nt(n, 0), -89.9, 89.9),
    roll_deg: au(r),
    hFOV_deg: u,
    vFOV_deg: u,
    locked: !1
  });
}
function yi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : _o(e);
}
function mb(e, t) {
  const n = Yi(e), r = nt(t, 1);
  if (!(r > 0)) return null;
  const o = 2 * Math.atan(n.tanHalfX * r) * hn, a = 2 * Math.atan(n.tanHalfY * r) * hn;
  return o < xr || o > kr || a < xr || a > kr ? null : { hFOV_deg: o, vFOV_deg: a };
}
function gb(e, t, n = pd) {
  const r = Math.sign(nt(t, 0)), o = Math.abs(nt(n, pd));
  if (!r || !(o > 0)) return null;
  const a = Yi(e), c = a.hFovDeg + r * o;
  if (c < xr || c > kr) return null;
  const u = Math.tan(c * Mt * 0.5);
  return mb(e, u / a.tanHalfX);
}
function yb(e, t) {
  const n = Yi(e), r = Ca(n.yawDeg, n.pitchDeg, n.rollDeg), o = nt(t == null ? void 0 : t.x, 0), a = nt(t == null ? void 0 : t.y, 0);
  return gp(kc(kc(r.fwd, Mc(r.right, o)), Mc(r.up, a)));
}
function RM(e) {
  return wr(e.x, e.y, -e.z);
}
function Ql(e) {
  return wr(e.x, e.y, -e.z);
}
function tr(e, t, n = 0) {
  const { right: r, up: o, fwd: a } = Ca(e, t, n);
  return [
    [r.x, o.x, -a.x],
    [r.y, o.y, -a.y],
    [-r.z, -o.z, a.z]
  ];
}
function bb(e) {
  const t = Ql(wr(e[0][0], e[1][0], e[2][0])), n = Ql(wr(e[0][1], e[1][1], e[2][1])), r = Ql(wr(-e[0][2], -e[1][2], -e[2][2])), o = Math.atan2(r.x + 0, r.z + 0), a = Math.atan2(r.y, Math.hypot(r.x, r.z)), c = Math.cos(o), u = Math.sin(o), d = Math.atan2(u * n.z - c * n.x, c * t.x - u * t.z);
  return { yawDeg: o * hn, pitchDeg: a * hn, rollDeg: d * hn };
}
function Hs(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), n = e.x / t, r = e.y / t, o = e.z / t, a = e.w / t;
  return [
    [1 - 2 * (r * r + o * o), 2 * (n * r - o * a), 2 * (n * o + r * a)],
    [2 * (n * r + o * a), 1 - 2 * (n * n + o * o), 2 * (r * o - n * a)],
    [2 * (n * o - r * a), 2 * (r * o + n * a), 1 - 2 * (n * n + r * r)]
  ];
}
function Fo(e) {
  const [[t, n, r], [o, a, c], [u, d, b]] = e, g = t + a + b;
  if (g > 0) {
    const S = 0.5 / Math.sqrt(g + 1);
    return { x: (d - c) * S, y: (r - u) * S, z: (o - n) * S, w: 0.25 / S };
  }
  if (t > a && t > b) {
    const S = 2 * Math.sqrt(1 + t - a - b);
    return { x: 0.25 * S, y: (n + o) / S, z: (r + u) / S, w: (d - c) / S };
  }
  if (a > b) {
    const S = 2 * Math.sqrt(1 + a - t - b);
    return { x: (n + o) / S, y: 0.25 * S, z: (c + d) / S, w: (r - u) / S };
  }
  const v = 2 * Math.sqrt(1 + b - t - a);
  return { x: (r + u) / v, y: (c + d) / v, z: 0.25 * v, w: (o - n) / v };
}
function Tl(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const So = 1e-6, md = 1e-6, VM = 1e-9;
function Gs(e, t, n, r, o) {
  const a = 1 - o;
  return a * a * a * e + 3 * a * a * o * t + 3 * a * o * o * n + o * o * o * r;
}
function $M(e, t) {
  if (e === "auto") return t;
  const [n, r, o, a] = e;
  let c = 0, u = 1;
  for (let d = 0; d < 50; d += 1) {
    const b = 0.5 * (c + u);
    Gs(0, n, o, 1, b) < t ? c = b : u = b;
  }
  return Gs(0, r, a, 1, 0.5 * (c + u));
}
function Ma(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function Na(e, t, n, r) {
  const o = e[t] - e[t - 1], a = e[t + 1] - e[t], c = n.map((S) => -S / o), u = r.map((S) => S / a);
  if (c.reduce((S, M, k) => S + M * u[k], 0) < 0) return n.map(() => 0);
  const d = c.map((S, M) => (S * a + u[M] * o) / (o + a)), b = (S) => Math.sqrt(S.reduce((M, k) => M + k * k, 0)), g = 3 * Math.min(b(c), b(u)), v = b(d);
  return v <= g ? d : d.map((S) => S * g / v);
}
function vb(e, t, n, r) {
  const o = n[r], a = n[r + 1], c = t[r + 1] - t[r], u = o.map((g, v) => a[v] - g);
  let d = u;
  Ma(e, r) && (d = Na(t, r, n[r - 1].map((g, v) => g - o[v]), u).map((g) => g * c));
  let b = u;
  return Ma(e, r + 1) && (b = Na(t, r + 1, u.map((g) => -g), n[r + 2].map((g, v) => g - a[v])).map((g) => g * c)), [d.map((g) => g / 3), b.map((g) => -g / 3)];
}
function _b(e, t, n, r, o) {
  const [[a], [c]] = vb(e, t, n.map((u) => [u]), r);
  return Gs(n[r], n[r] + a, n[r + 1] + c, n[r + 1], o);
}
function zM(e, t, n, r) {
  var b, g;
  const o = e.map((v) => v.value);
  let [a, c] = vb(e, t, o, n);
  a = ((b = e[n].handles) == null ? void 0 : b.out) ?? a, c = ((g = e[n + 1].handles) == null ? void 0 : g.in) ?? c;
  const u = o[n], d = o[n + 1];
  return [0, 1, 2].map((v) => Gs(u[v], u[v] + a[v], d[v] + c[v], d[v], r));
}
function Pc([e, t, n, r], [o, a, c, u]) {
  return [
    r * o + e * u + t * c - n * a,
    r * a - e * c + t * u + n * o,
    r * c + e * a - t * o + n * u,
    r * u - e * o - t * a - n * c
  ];
}
function jM(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function Sf(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function HM([e, t, n, r]) {
  const o = Math.sqrt(e * e + t * t + n * n), a = o > 1e-12 ? Math.atan2(o, r) / o : 1;
  return [e * a, t * a, n * a];
}
function gd(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), n = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * n, e[1] * n, e[2] * n, Math.cos(t)];
}
function ua(e, t) {
  return HM(Pc([-e[0], -e[1], -e[2], e[3]], t));
}
function xf(e, t, n) {
  return Pc(e, gd(ua(e, t).map((r) => n * r)));
}
function kf(e, t) {
  const n = jM(e, t);
  if (Math.abs(n) > md) return n < 0;
  const [r, o, a] = ua(e, t);
  for (const c of [-o, r, a])
    if (Math.abs(c) > md) return c < 0;
  return !1;
}
function Dl(e) {
  const { x: t, y: n, z: r, w: o } = Fo(tr(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, n, r, o];
}
function yd(e, t, n, r) {
  const o = t + (n - t) * r;
  return e + 360 * Math.ceil((o - 180 - 1e-6 - e) / 360);
}
function GM(e, t, n, r) {
  const o = Dl(e[n].value);
  let a = Dl(e[n + 1].value);
  kf(o, a) && (a = Sf(a));
  const c = t[n + 1] - t[n], u = ua(o, a);
  let d = u;
  if (Ma(e, n)) {
    let _ = Dl(e[n - 1].value);
    kf(_, o) && (_ = Sf(_)), d = Na(t, n, ua(o, _), u).map((j) => j * c);
  }
  let b = u;
  if (Ma(e, n + 1)) {
    let _ = Dl(e[n + 2].value);
    kf(a, _) && (_ = Sf(_)), b = Na(t, n + 1, ua(a, o), ua(a, _)).map((j) => j * c);
  }
  const g = Pc(o, gd(d.map((_, j) => 0.5 * (_ - u[j])))), v = Pc(a, gd(u.map((_, j) => 0.5 * (_ - b[j])))), [S, M, k, P] = xf(xf(o, a, r), xf(g, v, r), 2 * r * (1 - r)), { yawDeg: A, pitchDeg: O, rollDeg: G } = bb(Hs({ x: S, y: M, z: k, w: P })), R = e[n].value, V = e[n + 1].value;
  return {
    yaw_deg: yd(A, R.yaw_deg, V.yaw_deg, r),
    pitch_deg: O,
    roll_deg: yd(G, R.roll_deg, V.roll_deg, r)
  };
}
function Ks(e, t) {
  return e.reduce((n, r, o) => n + r * t[o], 0);
}
function Ac(e) {
  return Math.sqrt(Ks(e, e));
}
function Cc(e) {
  const t = e.yaw_deg * Math.PI / 180, n = e.pitch_deg * Math.PI / 180;
  return [Math.cos(n) * Math.sin(t), Math.sin(n), Math.cos(n) * Math.cos(t)];
}
function wb(e, t) {
  const n = Ks(e, t), r = t.map((c, u) => c - n * e[u]), o = Ac(r), a = o > 1e-12 ? Math.atan2(o, n) / o : 1;
  return r.map((c) => c * a);
}
function sa(e, t) {
  const n = Ac(t), r = n > 1e-12 ? Math.sin(n) / n : 1;
  return e.map((o, a) => Math.cos(n) * o + r * t[a]);
}
function Ll(e, t, n) {
  return sa(e, wb(e, t).map((r) => n * r));
}
function Mf(e, t) {
  const n = Cc(e[t].value), r = Cc(e[t + 1].value), o = Ks(n, r), a = o < 0 && Ac(r.map((d, b) => d - o * n[b])) <= md;
  let c;
  if (a) {
    const d = e[t].value.yaw_deg * Math.PI / 180;
    c = [Math.PI * Math.cos(d), 0, -Math.PI * Math.sin(d)];
  } else
    c = wb(n, r);
  const u = Ac(c);
  return [c, c.map((d, b) => Math.cos(u) * d - u * Math.sin(u) * n[b]), a];
}
function KM(e, t, n, r) {
  const o = Cc(e[n].value), a = Cc(e[n + 1].value), [c, u, d] = Mf(e, n);
  let b = c, g = u;
  const v = t[n + 1] - t[n];
  Ma(e, n) && (b = Na(t, n, Mf(e, n - 1)[1].map((R) => -R), b).map((R) => R * v)), Ma(e, n + 1) && (g = Na(t, n + 1, g.map((R) => -R), Mf(e, n + 1)[0]).map((R) => R * v));
  let S, M, k;
  if (d) {
    const R = Math.PI, V = Gs(0, Ks(b, c) / R / 3, R - Ks(g, u) / R / 3, R, r);
    [S, M, k] = sa(o, c.map((_) => V * _ / R));
  } else {
    const R = Ll(sa(o, b.map((j) => j / 3)), sa(a, g.map((j) => -j / 3)), r), V = Ll(sa(o, b.map((j) => r * j / 3)), R, r), _ = Ll(R, sa(a, g.map((j) => -(1 - r) * j / 3)), r);
    [S, M, k] = Ll(V, _, r);
  }
  const P = Math.hypot(S, k), A = e[n].value.yaw_deg, O = e[n + 1].value.yaw_deg;
  return { yaw_deg: P <= VM ? A + (O - A) * r : yd(Math.atan2(S, k) * 180 / Math.PI, A, O, r), pitch_deg: Math.atan2(M, P) * 180 / Math.PI };
}
function WM(e, t, n, r) {
  const o = {};
  for (const a of ["hFOV_deg", "vFOV_deg"]) o[a] = _b(e, t, e.map((c) => c.value[a]), n, r);
  return o;
}
function BM(e, t, n, r) {
  return _b(e, t, e.map((o) => o.value), n, r);
}
const UM = { position: zM, rotation: GM, direction: KM, size: WM };
function Bt(e, t, n) {
  const { keyframes: r } = e[t];
  if (!r.length) return Tl(e[t].value);
  if (n <= r[0].frame + So) return Tl(r[0].value);
  const o = r[r.length - 1];
  if (n >= o.frame - So) return Tl(o.value);
  let a = 0;
  for (; r[a + 1].frame <= n + So; ) a += 1;
  const c = r[a];
  if (Math.abs(n - c.frame) <= So || c.easing === "hold") return Tl(c.value);
  const u = r.map((b) => b.frame), d = $M(c.easing, (n - u[a]) / (u[a + 1] - u[a]));
  return (UM[t] ?? BM)(r, u, a, d);
}
function bd(e) {
  return Math.min(179, Math.max(0.1, e));
}
function YM(e) {
  return Math.min(1, Math.max(0, e));
}
function Sb(e) {
  return Math.max(1e-6, e);
}
function xb(e, t) {
  return t - (e.start - e.in);
}
function ya(e, t) {
  return t >= e.start - So && (e.duration === null || t < e.start + e.duration - So);
}
function wp(e, t) {
  return {
    position: Bt(e, "position", t),
    ...Bt(e, "rotation", t),
    hFOV_deg: bd(Bt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Ic(e, t) {
  const n = Number(t), { camera: r, scene: o } = e, a = xb(o.clip, n);
  return {
    frame: n,
    camera: r == null ? null : wp(r, n),
    scene: {
      active: o.visible && ya(o.clip, n),
      clip_frame: a,
      position: Bt(o, "position", a),
      ...Bt(o, "rotation", a),
      scale: Sb(Bt(o, "scale", a))
    },
    stickers: e.stickers.map((c) => Co(c, n))
  };
}
function XM(e, t) {
  if (e.placement === "world")
    return {
      position: Bt(e, "position", t),
      ...Bt(e, "rotation", t),
      scale: Sb(Bt(e, "scale", t))
    };
  const n = Bt(e, "size", t);
  return {
    ...Bt(e, "direction", t),
    roll_deg: Bt(e, "roll", t),
    hFOV_deg: bd(n.hFOV_deg),
    vFOV_deg: bd(n.vFOV_deg)
  };
}
function Co(e, t) {
  const n = xb(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && ya(e.clip, t),
    clip_frame: n,
    ...XM(e, n),
    opacity: YM(Bt(e, "opacity", n))
  };
}
const qM = 2, JM = ["sky", "world"], vd = ["perspective", "erp"], ZM = ["input", "output", "temp"], kb = [0.42, 0, 0.58, 1], Mb = 1, Sp = 1e3, _d = 1e7, xp = _d;
function gn(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function tn(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function kp(e, t) {
  const n = tn(e, t);
  return n !== null && n > 0 ? n : t;
}
function er(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function su(e) {
  const t = tn(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ec(e) {
  const t = su(e);
  return t === null ? null : er(t, -_d, _d);
}
function Ia(e) {
  const t = kp(e, null);
  return t === null ? null : er(t, Mb, Sp);
}
function Nb(e) {
  const t = su(e);
  return t !== null && t >= 1 ? Math.min(t, xp) : null;
}
function Ws(e, t) {
  return typeof e == "boolean" ? e : t;
}
function Pb(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((n) => tn(n, null));
  return t.includes(null) ? null : t;
}
function Ab(e) {
  return Pb(e) || [0, 0, 0];
}
function Cb(e) {
  const t = gn(e) ? e : {};
  return {
    yaw_deg: tn(t.yaw_deg, 0),
    pitch_deg: er(tn(t.pitch_deg, 0), -90, 90),
    roll_deg: tn(t.roll_deg, 0)
  };
}
function QM(e) {
  return er(tn(e, 90), 0.1, 179);
}
function eN(e) {
  return kp(e, 1);
}
function tN(e) {
  const t = gn(e) ? e : {};
  return {
    yaw_deg: tn(t.yaw_deg, 0),
    pitch_deg: er(tn(t.pitch_deg, 0), -90, 90)
  };
}
function nN(e) {
  return tn(e, 0);
}
function rN(e) {
  const t = gn(e) ? e : {};
  return {
    hFOV_deg: er(tn(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: er(tn(t.vFOV_deg, 20), 0.1, 179)
  };
}
function Ib(e) {
  return er(tn(e, 1), 0, 1);
}
const Mp = [["position", Ab], ["rotation", Cb], ["fov", QM]], lu = [["position", Ab], ["rotation", Cb], ["scale", eN]], Np = [["direction", tN], ["roll", nN], ["size", rN], ["opacity", Ib]], Pp = [...lu, ["opacity", Ib]];
function iN(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((n) => tn(n, null));
    if (t.every((n) => n !== null && n >= 0 && n <= 1)) return t;
  }
  return [...kb];
}
function oN(e) {
  if (!gn(e)) return null;
  const t = {};
  for (const n of ["in", "out"]) {
    const r = Pb(e[n]);
    r && (t[n] = r);
  }
  return Object.keys(t).length ? t : null;
}
function aN(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  for (const o of Array.isArray(e) ? e : []) {
    if (!gn(o)) continue;
    const a = ec(o.frame);
    if (a === null) continue;
    const c = { frame: a, value: t(o.value), easing: iN(o.easing) }, u = n ? oN(o.handles) : null;
    u && (c.handles = u), r.set(a, c);
  }
  return [...r.keys()].sort((o, a) => o - a).map((o) => r.get(o));
}
function Ap(e, t) {
  const n = {};
  for (const [r, o] of t) {
    const a = gn(e[r]) ? e[r] : {};
    n[r] = { value: o(a.value), keyframes: aN(a.keyframes, o, r === "position") };
  }
  return n;
}
function Eb(e) {
  const t = gn(e) ? e : {}, n = ec(t.start), r = ec(t.in), o = ec(t.duration);
  return {
    start: n === null ? 0 : Math.max(0, n),
    in: r === null ? 0 : Math.max(0, r),
    duration: o === null ? null : Math.max(1, o)
  };
}
function sN(e) {
  const t = gn(e) ? e : {}, n = er(tn(t.x0, 0), 0, 1), r = er(tn(t.y0, 0), 0, 1), o = er(tn(t.x1, 1), 0, 1), a = er(tn(t.y1, 1), 0, 1);
  return { x0: Math.min(n, o), y0: Math.min(r, a), x1: Math.max(n, o), y1: Math.max(r, a) };
}
function lN(e) {
  if (!gn(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: ZM.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function cN(e) {
  const t = lN(e.source);
  if (!t) return null;
  const n = JM.includes(e.placement) ? e.placement : "sky", r = n === "world", o = {
    id: e.id,
    placement: n,
    source: t,
    clip: Eb(e.clip),
    visible: Ws(e.visible, !0),
    locked: Ws(e.locked, !1),
    crop: sN(e.crop),
    ...Ap(e, r ? Pp : Np)
  };
  return r || (o.z_index = su(e.z_index) ?? 0), o;
}
function uN(e) {
  const t = [];
  let n = !1;
  for (const a of Array.isArray(e) ? e : []) {
    const c = gn(a) ? cN(a) : null;
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
function Ob(e) {
  if (!gn(e)) return null;
  const t = vd.includes(e.projection) ? e.projection : vd[0];
  return { aspect: kp(e.aspect, 1), projection: t, visible: Ws(e.visible, !0), ...Ap(e, Mp) };
}
function Cp() {
  return Ob({});
}
function Ec(e) {
  const t = gn(e.timeline) ? e.timeline : {}, n = gn(e.scene) ? e.scene : {};
  return {
    version: qM,
    timeline: {
      fps: Ia(t.fps) ?? 24,
      length: Nb(t.length)
    },
    camera: Ob(e.camera),
    scene: { clip: Eb(n.clip), visible: Ws(n.visible, !0), ...Ap(n, lu) },
    stickers: uN(e.stickers),
    painting: ga(e.painting),
    painting_layer: gn(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: Ws(e.painting_visible, !0)
  };
}
function fN(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const n = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!gn(n)) return null;
  const r = String(n.type || "").trim().toLowerCase();
  return r === "comfy_image" ? {
    kind: "file",
    filename: String(n.filename || "").trim(),
    subfolder: String(n.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(n.storage || "input").trim().toLowerCase()
  } : r === "dataurl" ? { kind: "file", data_url: n.value } : null;
}
function dN(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!gn(t)) return null;
  const n = er(tn(t.hFOV_deg, 90), 1, 179), r = er(tn(t.vFOV_deg, 60), 1, 179), o = Math.PI / 180;
  return {
    aspect: Math.tan(n * o * 0.5) / Math.tan(r * o * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: n }
  };
}
function pN(e) {
  const t = gn(e.assets) ? e.assets : {}, n = Array.isArray(e.stickers) ? e.stickers.filter(gn) : [];
  return n.sort((r, o) => tn(r.z_index, 0) - tn(o.z_index, 0)), Ec({
    camera: dN(e.shots),
    stickers: n.map((r) => ({
      id: r.id,
      placement: "sky",
      source: fN(r, t),
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
function ni(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Ec({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!gn(t)) throw new Error("state_json is not a JSON object.");
  const n = Object.hasOwn(t, "version") ? t.version : 1;
  if (n !== 1 && n !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(n)}; supported versions are 1 and 2.`);
  return n === 1 ? pN(t) : Ec(t);
}
const Nf = {
  state: { painting_visible: !0 },
  camera: { projection: vd[0], visible: !0 },
  scene: { visible: !0 }
};
function Pf(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([n, r]) => !Object.hasOwn(t, n) || r !== t[n]));
}
function wd(e) {
  return JSON.stringify({
    ...Pf(e, Nf.state),
    camera: e.camera && Pf(e.camera, Nf.camera),
    scene: Pf(e.scene, Nf.scene)
  });
}
function Af(e, t, n, r, o) {
  const a = {};
  for (const [c] of t)
    a[c] = {
      value: e[c].value,
      keyframes: e[c].keyframes.map((u) => ({ ...u, frame: n(r + u.frame) - o }))
    };
  return a;
}
function Yg(e, t) {
  const n = t(e.start), r = t(e.start - e.in), o = e.duration === null ? null : t(e.start + e.duration) - n;
  return { clip: { start: n, in: n - r, duration: o }, anchor: e.start - e.in, newAnchor: r };
}
function Bs(e, t) {
  const n = Ia(t);
  if (n === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const r = n / e.timeline.fps, o = (u) => su(u * r), { length: a } = e.timeline, c = Yg(e.scene.clip, o);
  return Ec({
    timeline: { fps: n, length: a === null ? null : Math.max(1, o(a)) },
    camera: e.camera === null ? null : { ...e.camera, ...Af(e.camera, Mp, o, 0, 0) },
    scene: { clip: c.clip, visible: e.scene.visible, ...Af(e.scene, lu, o, c.anchor, c.newAnchor) },
    stickers: e.stickers.map((u) => {
      const { clip: d, anchor: b, newAnchor: g } = Yg(u.clip, o), v = u.placement === "world" ? Pp : Np;
      return { ...u, clip: d, ...Af(u, v, o, b, g) };
    }),
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible
  });
}
function Cf(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function Fb(e) {
  return Array.isArray(e) ? [...e] : e;
}
function Tb(e, t) {
  return e.keyframes.find((n) => Math.abs(n.frame - t) <= So);
}
function Db(e, t, n) {
  const r = e.keyframes.findIndex((a) => a.frame > t), o = r > 0 ? Fb(e.keyframes[r - 1].easing) : [...kb];
  e.keyframes.splice(r < 0 ? e.keyframes.length : r, 0, { frame: t, value: n, easing: o });
}
function Fn(e, t, n, r) {
  const o = e[t];
  if (!o.keyframes.length) {
    o.value = Cf(o.value, r);
    return;
  }
  const a = Tb(o, n);
  a ? a.value = Cf(a.value, r) : Db(o, n, Cf(Bt(e, t, n), r));
}
function Ea(e) {
  return e.placement === "world" ? Pp.map(([t]) => t) : e.placement === "sky" ? Np.map(([t]) => t) : (e.clip ? lu : Mp).map(([t]) => t);
}
function hN(e, t) {
  for (const n of Ea(e))
    Tb(e[n], t) || Db(e[n], t, Bt(e, n, t));
}
function mN(e) {
  const t = Ea(e), n = /* @__PURE__ */ new Map();
  for (const r of t)
    for (const o of e[r].keyframes) n.set(o.frame, (n.get(o.frame) || 0) + 1);
  return [...n].sort((r, o) => r[0] - o[0]).map(([r, o]) => ({ frame: r, full: o === t.length }));
}
function If(e, t) {
  return e.some((n) => n.full && n.frame === t);
}
function gN(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function yN(e, t, n, r) {
  const o = new Set(n);
  for (const a of t) {
    const c = e[a];
    if (!c.keyframes.some((d) => o.has(d.frame))) continue;
    const u = Bt(e, a, r);
    c.keyframes = c.keyframes.filter((d) => !o.has(d.frame)), c.keyframes.length || (c.value = u);
  }
}
function bN(e, t, n, r, o) {
  r = Math.max(r, Math.min(0, o - Math.min(...n)));
  const a = new Set(n);
  for (const c of t) {
    const u = e[c], d = u.keyframes.filter((g) => a.has(g.frame)).map((g) => ({ ...g, frame: g.frame + r })), b = new Set(d.map((g) => g.frame));
    u.keyframes = [
      ...u.keyframes.filter((g) => !a.has(g.frame) && !b.has(g.frame)),
      ...d
    ].sort((g, v) => g.frame - v.frame);
  }
  return r;
}
function Lb(e, t, n) {
  const r = Math.min(...n), o = Math.max(...n);
  return t.flatMap((a) => e[a].keyframes.slice(0, -1).filter((c) => n.length > 1 ? c.frame >= r && c.frame < o : c.frame === r));
}
function vN(e, t, n) {
  const r = Lb(e, t, n);
  if (!r.length) return null;
  const o = r.some((a) => JSON.stringify(a.easing) !== JSON.stringify(r[0].easing));
  return { easing: o ? null : r[0].easing, mixed: o };
}
function _N(e, t, n, r) {
  for (const o of Lb(e, t, n)) o.easing = Fb(r);
}
function wN(e, t) {
  e.start = Math.max(0, e.start + t);
}
function SN(e, t) {
  const n = e.duration === null ? 1 / 0 : e.start + e.duration, r = Math.min(Math.max(t, e.start - e.in, 0), n - 1), o = r - e.start;
  e.start = r, e.in += o, e.duration !== null && (e.duration -= o);
}
function xN(e, t, n) {
  const r = t >= n && (e.duration === null || e.start + e.duration < n);
  e.duration = r ? null : Math.max(1, t - e.start);
}
function kN(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function Oc(e) {
  return Ea(e).map((t) => e[t]);
}
function MN(e, { cameraOnly: t = !1, camera: n = !1 } = {}) {
  return t ? Oc(e.camera).some((r) => r.keyframes.length > 0) : Rb(e, { camera: n });
}
function Fc(e) {
  return Oc(e).some((t) => t.keyframes.length > 0) || !!e.clip && !kN(e.clip);
}
function Rb(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Fc);
}
const NN = 1e5;
function Vb(e, { minimum: t, frames: n = 0, openClip: r = null, camera: o = !1 }) {
  let a = e.timeline.length ?? Math.max(t, n);
  if (o && e.camera)
    for (const c of Oc(e.camera))
      for (const u of c.keyframes) a = Math.max(a, u.frame + 1);
  for (const c of [e.scene, ...e.stickers]) {
    const { clip: u } = c;
    a = Math.max(a, u.duration === null || u === r ? u.start + 1 : u.start + u.duration);
    for (const d of Oc(c))
      for (const b of d.keyframes) a = Math.max(a, u.start - u.in + b.frame + 1);
  }
  return Number.isFinite(a) ? a : NN;
}
function PN(e) {
  return e > 0 ? Ia(Math.min(e, Sp)) : null;
}
function AN(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : Nb(Math.max(1, Math.min(e, xp)));
}
const Ef = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], CN = 2e3;
function IN(e, t, n = 56) {
  const r = Ef.find((a) => a * t >= n) || Ef[Ef.length - 1], o = [];
  for (let a = 0; a < e && o.length < CN; a += r) o.push(a);
  return o;
}
function EN(e, t) {
  const n = [];
  for (const r of e) {
    const o = n[n.length - 1];
    o && r - o.frames[o.frames.length - 1] < t ? o.frames.push(r) : n.push({ frames: [r] });
  }
  for (const r of n) r.frame = (r.frames[0] + r.frames[r.frames.length - 1]) / 2;
  return n;
}
let Rl = { text: null, parsed: null };
function Jn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Tc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function ON({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: n = 360,
  sharedUiSettings: r = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Jn(n),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: ga(null),
    painting_layer: null,
    ui_settings: Tc(r),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function $b(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function FN(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, r]) => {
    t[n] = r && typeof r == "object" ? { ...r } : r;
  }), t;
}
function TN(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function DN(e) {
  return Array.isArray(e) ? e.map((t) => _p(t)) : [];
}
function LN(e, t) {
  const n = Array.isArray(e) ? e : [];
  if (n.length === 0) return { shots: [], selectedShotId: null };
  const r = String(t || ""), o = n.find((c) => String((c == null ? void 0 : c.id) || "") === r) || n[0], a = String((o == null ? void 0 : o.id) || "") || null;
  return { shots: [o], selectedShotId: a };
}
function zb(e, t = {}) {
  const n = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, r = ON(n), o = String(e || "").trim();
  if (!o) return r;
  try {
    let a = null;
    if (Rl.text === o ? a = Rl.parsed : (a = JSON.parse(o), Rl = { text: o, parsed: a }), !a || typeof a != "object" || Array.isArray(a)) return r;
    const c = n.sharedUiSettings && typeof n.sharedUiSettings == "object" ? n.sharedUiSettings : null, u = {
      ...r,
      ...a,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: FN(a.assets),
      stickers: TN(a.stickers),
      shots: DN(a.shots),
      painting: ga(a.painting),
      painting_layer: a.painting_layer && typeof a.painting_layer == "object" ? a.painting_layer : null,
      ui_settings: Tc(a.ui_settings),
      active: a.active && typeof a.active == "object" ? { ...a.active } : { ...r.active }
    };
    return c && (u.ui_settings = Tc({ ...u.ui_settings, ...c })), u.output_preset = $b(
      n.outputPreset,
      Number(u.output_preset || r.output_preset)
    ), u.bg_color = String(n.backgroundColor || u.bg_color || r.bg_color), u.coverage = Jn(n.coverage), delete u.editor_history, u;
  } catch {
    return Rl = { text: o, parsed: null }, r;
  }
}
function Xg(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function RN(e, t) {
  const n = JSON.parse(t), r = JSON.stringify(n.painting) !== JSON.stringify(e.painting);
  return r || (n.painting_layer = e.painting_layer), { state: n, paintingChanged: r };
}
function VN(e, { paintCount: t, maskCount: n, width: r, height: o, nodeId: a }) {
  return t <= 0 && n <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${r}x${o}`) || t > 0 && !e.paint || n > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${a}.png` || n > 0 && e.mask.filename !== `pano_mask_${a}.png`;
}
function jb(e, t = {}) {
  const { outputPreset: n = 2048, backgroundColor: r = "#00ff00", coverage: o = 360, sharedUiSettings: a = null, active: c, scene: u = null, camera: d = !1 } = t, b = Ia(t.fps);
  let g;
  try {
    g = ni(e);
  } catch {
    g = ni(null);
  }
  b && b !== g.timeline.fps && (g = Bs(g, b));
  const v = d && g.camera === null;
  if (v && (g = { ...g, camera: Cp() }), u) {
    let S = ni(u);
    b && b !== S.timeline.fps && (S = Bs(S, b)), g = { ...S, camera: g.camera, cutout_state: g };
  }
  return {
    ...g,
    ...v ? { default_camera: !0 } : {},
    coverage: Jn(o),
    bg_color: r,
    output_preset: $b(n),
    ui_settings: Tc(a),
    active: { selected_sticker_id: null, selected_shot_id: null, ...c }
  };
}
function $N(e, t) {
  e.cutout_state && (e.cutout_state = Bs(e.cutout_state, t));
  const n = Bs(e, t), r = new Map(n.stickers.map((a) => [a.id, a]));
  e.timeline = n.timeline;
  const o = [[e.camera, n.camera], [e.scene, n.scene], ...e.stickers.map((a) => [a, r.get(a.id)])];
  for (const [a, c] of o)
    if (c) {
      a.clip && (a.clip = c.clip);
      for (const u of Ea(a)) a[u].keyframes = c[u].keyframes;
    }
}
function Ip(e, t) {
  const n = Co(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg, rot_deg: n.roll_deg };
}
const zN = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function qg(e, t) {
  return Object.fromEntries(t.filter((n) => e[n] !== void 0).map((n) => [n, e[n]]));
}
function jN(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([n]) => !e[zN[n]].keyframes.length));
}
function Hb(e, t, n) {
  const r = t - (e.clip.start - e.clip.in), o = qg(n, ["yaw_deg", "pitch_deg"]), a = qg(n, ["hFOV_deg", "vFOV_deg"]);
  Object.keys(o).length && Fn(e, "direction", r, o), n.rot_deg !== void 0 && Fn(e, "roll", r, n.rot_deg), Object.keys(a).length && Fn(e, "size", r, a);
}
const cu = ["position_x", "position_y", "position_z"], tc = "camera";
function Jg(e, t) {
  const n = wp(e, t);
  return _p({
    id: tc,
    label: "Camera",
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: n.hFOV_deg,
    vFOV_deg: DM(n.hFOV_deg, e.aspect),
    position: n.position,
    locked: !1
  });
}
function HN(e) {
  return ni({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Ht(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function GN(e) {
  return e - 360 * Math.round(e / 360);
}
function KN(e, t, n, r) {
  const o = {};
  for (const a of ["yaw_deg", "pitch_deg", "roll_deg"])
    n[a] !== r[a] && (o[a] = r[a] + GN(n[a] - r[a]));
  Object.keys(o).length && Fn(e, "rotation", t, o), n.hFOV_deg !== r.hFOV_deg && Fn(e, "fov", t, n.hFOV_deg), (n.hFOV_deg !== r.hFOV_deg || n.vFOV_deg !== r.vFOV_deg) && (e.aspect = Math.tan(n.hFOV_deg * Mt * 0.5) / Math.tan(n.vFOV_deg * Mt * 0.5)), n.position.some((a, c) => a !== r.position[c]) && Fn(e, "position", t, [...n.position]);
}
function WN(e, t) {
  const n = Bt(e, "position", t), r = Bt(e, "rotation", t);
  return {
    ...Object.fromEntries(cu.map((o, a) => [o, n[a]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: Bt(e, "fov", t)
  };
}
function BN(e, t, n, r) {
  const o = cu.indexOf(n);
  if (o >= 0) {
    const a = Bt(e, "position", t);
    a[o] = r, Fn(e, "position", t, a);
  } else n === "hFOV_deg" ? Fn(e, "fov", t, r) : Fn(e, "rotation", t, { [n]: r });
}
function UN(e, t, n) {
  Fn(e, "opacity", t - (e.clip.start - e.clip.in), n);
}
function YN(e, t) {
  const n = Co(e, t);
  return {
    ...Object.fromEntries(cu.map((r, o) => [r, n.position[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    scale: n.scale,
    opacity: n.opacity * 100
  };
}
function XN(e, t, n, r) {
  const o = t - (e.clip.start - e.clip.in), a = cu.indexOf(n);
  if (a >= 0) {
    const c = Bt(e, "position", o);
    c[a] = r, Fn(e, "position", o, c);
  } else n === "scale" ? Fn(e, "scale", o, r) : n === "opacity" ? Fn(e, "opacity", o, r / 100) : Fn(e, "rotation", o, { [n]: r });
}
function qN(e, t, n) {
  const r = t - (e.clip.start - e.clip.in);
  for (const o of ["position", "rotation", "scale"])
    n[o] !== void 0 && Fn(e, o, r, n[o]);
}
function JN(e, t) {
  const n = e.stickers.find((r) => r.id === t && r.placement === "world");
  n && (n.source.kind === "port" ? n.visible = !1 : e.stickers = e.stickers.filter((r) => r !== n));
}
function ZN(e, t, n) {
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
function nc(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Gb(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Ep(e, t, n, r) {
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
function QN(e, t, n) {
  const r = structuredClone(e);
  r.id = t, r.z_index = n, r.direction.value.yaw_deg = Ht(r.direction.value.yaw_deg + 8);
  for (const o of r.direction.keyframes) o.value.yaw_deg += 8;
  return r;
}
function Sd(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Kb(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Wb(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Zg(e) {
  e.default_camera && JSON.stringify(ni({ version: 2, camera: e.camera }).camera) !== JSON.stringify(Cp()) && delete e.default_camera;
}
function Bb(e, t) {
  if (!(e != null && e.__panoSceneStateV2)) return JSON.stringify(t);
  const n = ni(t.cutout_state ? { ...t.cutout_state, camera: t.camera } : t);
  return t.default_camera && JSON.stringify(n.camera) === JSON.stringify(Cp()) && (n.camera = null), wd(n);
}
function Ub(e, t, n, { rebased: r = !1 } = {}) {
  if (t === n) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const o = ni(n);
    if (wd(o) === t) return !0;
    const { fps: a } = JSON.parse(t).timeline;
    return r && a !== o.timeline.fps && wd(Bs(o, a)) === t;
  } catch {
    return !1;
  }
}
const Of = 0.15, e2 = 0.01, t2 = 1e-3, n2 = 0.05, r2 = 4, Qg = 250, i2 = 16, Or = 1, o2 = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function fr(e, t, n = 1) {
  return [e[0] + t[0] * n, e[1] + t[1] * n, e[2] + t[2] * n];
}
function ri(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function uu(e, t) {
  return e.map((n) => n[0] * t[0] + n[1] * t[1] + n[2] * t[2]);
}
function Oa(e, t, n = 0) {
  const r = tr(e, t, n), o = ri(r, 2);
  return { right: ri(r, 0), up: ri(r, 1), forward: [-o[0], -o[1], -o[2]] };
}
function a2(e, t, n = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...n] };
}
function xd(e, t, n = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...n], moved: !1 } : { ...e, mode: t };
}
function s2(e, t, n = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : xd(e, "3dof", n);
}
function l2(e) {
  return Oa(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function c2(e) {
  return fr(e.position, Oa(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function Xi(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function Os(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function Op(e, t) {
  return Os(Xi(t, e.position), Oa(e.yaw_deg, e.pitch_deg).forward);
}
function Fp(e) {
  return Math.max(e, 1e-6) * n2;
}
function Ff(e, t, n = null, r = Or) {
  if (t) return t;
  const o = Fp(r);
  if (n && Op(e, n) > 0) {
    const a = Xi(n, e.position), c = Math.hypot(...a);
    return c >= o ? n : fr(e.position, a, o / c);
  }
  return fr(e.position, Oa(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, o));
}
function e0(e, t = Or) {
  return Math.max(e.distance, Fp(t));
}
function t0(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > r2 ? !1 : t.time - e.time < Qg || e.cost > i2 && t.time - e.wheelTime < Qg;
}
function Tp(e, t, n) {
  const r = Math.tan(e.hFOV_deg * 0.5 * Mt);
  return { tanX: r, tanY: r * n / t };
}
function n0(e, t, n, r, o = c2(e)) {
  const a = e.roll_deg ?? 0, [c, u] = u2(t, n, a), d = Ht(e.yaw_deg + c / r * 360), b = te(e.pitch_deg - u / r * 360, -89.9, 89.9), g = tr(e.yaw_deg, e.pitch_deg, a), v = tr(d, b, a), S = Xi(e.position, o), M = [0, 1, 2].map((P) => Os(ri(g, P), S)), k = { ...e, yaw_deg: d, pitch_deg: b, position: fr(o, uu(v, M)) };
  return { ...k, distance: Op(k, o) };
}
function u2(e, t, n) {
  const r = Math.cos(n * Mt), o = Math.sin(n * Mt);
  return [e * r + t * o, t * r - e * o];
}
function r0(e, t, n, r, o, a = e.distance) {
  const { right: c, up: u } = l2(e), d = 2 * a * Tp(e, r, o).tanY / o;
  return { ...e, position: fr(fr(e.position, c, -t * d), u, n * d), distance: a };
}
function i0(e, t, n, r = Or) {
  const o = Xi(t, e.position), a = Math.hypot(...o);
  if (!(a > 0) || !n) return e;
  const c = Math.max(r, 1e-6), u = c * e2, d = n > 0 ? Math.min(Math.max(a * Of, u), a - c * t2) : -Math.max(a * Of / (1 - Of), u);
  if (n > 0 && d <= 0) return e;
  const b = { ...e, position: fr(e.position, o, d / a) };
  return { ...b, distance: Math.max(Op(b, t), Fp(r)) };
}
function o0(e, t, n, r) {
  const { tanX: o, tanY: a } = Tp(e, n, r), c = Math.atan(Math.min(o, a)), u = Math.max(t.radius, 1e-6) / Math.sin(c) * 1.1, { forward: d } = Oa(e.yaw_deg, e.pitch_deg);
  return { ...e, position: fr(t.center, d, -u), distance: u };
}
function Tf(e, t, n, r = null) {
  return Yb({
    quaternion: Fo(tr(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(Tp(e, t, n).tanY) * hn,
    aspect: t / n
  }, e.position, e.distance, r);
}
function Yb(e, t, n, r = null) {
  const { center: o, radius: a } = r ?? { center: [0, 0, 0], radius: Or }, c = Math.hypot(o[0] - t[0], o[1] - t[1], o[2] - t[2]), u = Math.max(c + a, Math.hypot(...t) + 6 * a);
  return {
    ...e,
    position: [...t],
    near: Math.max(n * 0.01, a * 1e-4),
    far: u * 2
  };
}
function Us(e, t, n, r) {
  const { right: o, up: a, forward: c } = Xb(e), u = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], d = u[0] * c[0] + u[1] * c[1] + u[2] * c[2];
  if (!(d > e.near)) return null;
  const b = Math.tan(e.fovY_deg * 0.5 * Mt), g = b * e.aspect, v = u[0] * o[0] + u[1] * o[1] + u[2] * o[2], S = u[0] * a[0] + u[1] * a[1] + u[2] * a[2];
  return { x: n * 0.5 * (1 + v / d / g), y: r * 0.5 * (1 - S / d / b), z: d };
}
function Xb(e) {
  const t = Hs(e.quaternion), n = ri(t, 2);
  return { right: ri(t, 0), up: ri(t, 1), forward: n.map((r) => -r) };
}
function a0(e, t, n) {
  var o;
  const r = (o = t[0]) == null ? void 0 : o.kind;
  return !e.length || r !== "splat" && r !== "mesh" ? null : { kind: r, urls: e.map((a) => a ? n(a) : null) };
}
function f2({ sceneLinked: e, files: t, stickers: n }) {
  return e || !!t || n.some((r) => r.placement === "world");
}
function qb(e, t) {
  if (!e || !t.active) return null;
  const n = h2(t.clip_frame, e.urls.length), r = n === null ? null : e.urls[n + 1];
  return {
    kind: e.kind,
    url: n === null ? null : e.urls[n],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: r ? [r] : [],
    transform: kd(t),
    itemQuaternion: e.kind === "splat" ? o2 : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function d2(e, t, n) {
  const r = t.stickers.findIndex((u) => u.source.kind === "port"), o = t.stickers[r];
  if (!e || (o == null ? void 0 : o.placement) !== "world") return null;
  const a = n.stickers[r], c = qb(e, a);
  return c && { ...c, id: o.id, opacity: a.opacity, value: a };
}
function p2(e, t) {
  const n = t.stickers.find((r) => r.source.kind === "port");
  return e && (n == null ? void 0 : n.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function h2(e, t) {
  if (t === 1) return 0;
  const n = Math.floor(e + 0.5);
  return n >= 0 && n < t ? n : null;
}
function kd(e) {
  return {
    position: [...e.position],
    quaternion: Fo(tr(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function Md(e, t) {
  return fr(e.position, uu(tr(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Nd(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function Pd({ min: e, max: t }) {
  const n = [];
  for (const r of [e[0], t[0]]) for (const o of [e[1], t[1]]) for (const a of [e[2], t[2]]) n.push([r, o, a]);
  return n;
}
function Ad(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((a) => Math.min(...e.map((c) => c[a]))), n = [0, 1, 2].map((a) => Math.max(...e.map((c) => c[a]))), r = t.map((a, c) => (a + n[c]) / 2), o = Math.max(...e.map((a) => Math.hypot(a[0] - r[0], a[1] - r[1], a[2] - r[2])));
  return { center: r, radius: o };
}
function m2(e, t, n, r = []) {
  const o = [];
  t && e.scene.active && o.push(...Pd(t).map((a) => Md(e.scene, a)));
  for (const a of n) o.push(...Dp(a));
  for (const { box: a, value: c } of r) o.push(...Pd(a).map((u) => Md(c, u)));
  return o;
}
function g2(e, t, n, r) {
  const o = (t.x1 - t.x0) * n, a = (t.y1 - t.y0) * r;
  return o > 0 && a > 0 ? {
    position: [...e.position],
    quaternion: Fo(tr(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: tr(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * a / o
  } : null;
}
function Dp(e) {
  const t = e.width / 2, n = e.height / 2;
  return [[-t, -n], [t, -n], [t, n], [-t, n]].map(([r, o]) => fr(e.position, uu(e.rotation, [r, o, 0])));
}
function y2(e, t = null) {
  const { sticker: n, value: r, plane: o, item: a } = t ?? {};
  return (n == null ? void 0 : n.placement) !== "world" || !(r != null && r.active) ? e : o ? Ad(Dp(o)) : a != null && a.box ? Ad(Pd(Nd(a.kind, a.box)).map((c) => Md(r, c))) : { center: [...r.position], radius: r.scale };
}
const b2 = 2, v2 = 0.5, _2 = 30;
function Jb(e, t) {
  const n = Xi(t, e), r = Math.atan2(n[0], -n[2]) * hn, o = Math.atan2(n[1], Math.hypot(n[0], n[2])) * hn;
  return { yaw_deg: r + 0, pitch_deg: o, roll_deg: 0 };
}
function w2(e, t, n = null) {
  const r = (n == null ? void 0 : n.radius) > 0 ? n.radius : 0, o = r ? r * v2 : b2, a = t ? [...t] : fr(e.position, Oa(e.yaw_deg, e.pitch_deg).forward, o), c = Math.hypot(...Xi(a, e.position)), u = c > 0 ? Jb(e.position, a) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, d = 2 * Math.max(c, 1e-3) * Math.tan(_2 * 0.5 * Mt);
  return { position: a, rotation: u, scale: d };
}
function s0(e, t) {
  return e.map((n) => [0, 1, 2].map((r) => n[0] * t[0][r] + n[1] * t[1][r] + n[2] * t[2][r]));
}
function S2(e) {
  return [0, 1, 2].map((t) => ri(e, t));
}
function l0(e, t, n, r) {
  if (e === "translate") return { position: fr(t.position, Xi(r.position, n.position)) };
  if (e === "scale") return { scale: t.scale * P2(n.scale, r.scale) / n.scale };
  const o = s0(Hs(r.quaternion), S2(Hs(n.quaternion))), a = s0(o, tr(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: c, pitchDeg: u, rollDeg: d } = bb(a);
  return Math.abs(u) <= x2 ? { rotation: { yaw_deg: c + 0, pitch_deg: u, roll_deg: d + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: u, roll_deg: k2(a, t.yaw_deg) } };
}
const x2 = 89.9;
function k2(e, t) {
  const n = ri(e, 0), r = ri(e, 1), o = Math.cos(t * Mt), a = Math.sin(t * Mt);
  return Math.atan2(a * -r[2] - o * r[0], o * n[0] - a * -n[2]) * hn + 0;
}
const M2 = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function N2(e, t, n, r, o) {
  if (!Us(e, t, r, o)) return null;
  const { right: a, up: c, forward: u } = Xb(e), d = Xi(t, e.position), b = Os(d, a), g = Os(d, c), v = Os(d, u), S = Math.tan(e.fovY_deg * 0.5 * Mt), M = S * e.aspect, k = Math.hypot(b, g, v) * M2[n] * Math.min(1.9 * S, 7) / 4;
  if (!(v > k)) return { minX: 0, maxX: r, minY: 0, maxY: o };
  const P = (V) => {
    const _ = k * Math.sqrt(V * V + v * v - k * k);
    return [(V * v - _) / (v * v - k * k), (V * v + _) / (v * v - k * k)];
  }, [A, O] = P(b), [G, R] = P(g);
  return {
    minX: r * 0.5 * (1 + A / M),
    maxX: r * 0.5 * (1 + O / M),
    minY: o * 0.5 * (1 - R / S),
    maxY: o * 0.5 * (1 - G / S)
  };
}
function P2(e, [t, n, r]) {
  const o = [t, n, r].reduce((a, c) => Math.abs(c - e) > Math.abs(a - e) ? c : a, e);
  return Math.max(o, e * 1e-3, 1e-6);
}
function A2(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function c0(e, t) {
  const n = tr(e.yaw_deg, e.pitch_deg, e.roll_deg), r = Math.tan(e.hFOV_deg * 0.5 * Mt) * t, o = r / e.aspect, a = (b, g, v) => fr(e.position, uu(n, [b, g, v])), c = [a(-r, -o, -t), a(r, -o, -t), a(r, o, -t), a(-r, o, -t)], u = c.map((b) => [e.position, b]);
  c.forEach((b, g) => u.push([b, c[(g + 1) % 4]]));
  const d = [a(-r * 0.5, o * 1.1, -t), a(0, o * 1.5, -t), a(r * 0.5, o * 1.1, -t)];
  return u.push([d[0], d[1]], [d[1], d[2]], [d[2], d[0]]), u;
}
function C2(e, t, n, r, o, a = 6) {
  return t.some(([c, u]) => {
    const d = Us(e, c, r, o), b = Us(e, u, r, o);
    if (!d || !b) return !1;
    const g = b.x - d.x, v = b.y - d.y, S = te(((n.x - d.x) * g + (n.y - d.y) * v) / Math.max(g * g + v * v, 1e-12), 0, 1);
    return Math.hypot(d.x + g * S - n.x, d.y + v * S - n.y) <= a;
  });
}
function I2(e) {
  return e.slice(1).map((t, n) => [e[n], t]);
}
function E2(e, t, n = 2e3) {
  const { camera: r } = e;
  if (!r.position.keyframes.length) return [Bt(r, "position", 0)];
  const o = Math.max(t - 1, 0), a = Math.min(n, o + 1);
  return Array.from({ length: a }, (c, u) => {
    const d = a === 1 ? 0 : u * o / (a - 1);
    return Bt(r, "position", d);
  });
}
const Zb = 0.28;
function Qb(e, t, n) {
  const r = t / n, o = Math.tan(e.hFOV_deg * 0.5 * Mt);
  return {
    quaternion: Fo(tr(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(o / r) * hn,
    aspect: r
  };
}
function Fs(e) {
  const t = Yi(e);
  return {
    quaternion: Fo(tr(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function u0(e, t, n) {
  const r = Math.max(1, t.focalPx), { halfW: o, halfH: a } = vp(n, r), c = t.x + t.w * 0.5, u = t.y + t.h * 0.5;
  return {
    rect: { x: c - o, y: u - a, w: o * 2, h: a * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(o / r) * hn,
      vFOV_deg: 2 * Math.atan(a / r) * hn
    }
  };
}
function e1(e, t, n) {
  const [[r, o, a], [c, u, d], [b, g, v]] = Hs(e.quaternion), S = Math.tan(e.fovY_deg * 0.5 * Mt), M = S * e.aspect;
  return {
    width: t,
    height: n,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(k, P = 1e-4) {
      const A = RM(k), O = r * A.x + c * A.y + b * A.z, G = o * A.x + u * A.y + g * A.z, R = -(a * A.x + d * A.y + v * A.z), V = Math.max(R, P);
      return {
        x: t * 0.5 * (1 + O / V / M),
        y: n * 0.5 * (1 - G / V / S),
        z: R
      };
    },
    // The unit direction seen at the point (x, y).
    ray(k, P) {
      const A = (k / t * 2 - 1) * M, O = (1 - P / n * 2) * S;
      return gp(Ql({
        x: r * A + o * O - a,
        y: c * A + u * O - d,
        z: b * A + g * O - v
      }));
    }
  };
}
function O2(e, t, { media: n, zIndex: r, paintLayers: o, evaluated: a = Ic(e, t) }) {
  const c = [];
  e.stickers.forEach((u, d) => {
    const b = a.stickers[d];
    if (u.placement !== "sky") return;
    const g = u.source.kind === "port" && !u.visible;
    if (!b.active && !g) return;
    const v = n(u);
    if (!v) return;
    const S = Math.tan(b.hFOV_deg * 0.5 * Mt), M = Math.tan(b.vFOV_deg * 0.5 * Mt), { crop: k } = u;
    c.push({
      kind: "sticker",
      id: u.id,
      media: v.media,
      revision: v.revision,
      source: v.source,
      opacity: g ? Zb : b.opacity,
      zIndex: r(u),
      quaternion: Fo(tr(b.yaw_deg, b.pitch_deg, b.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * k.x0 - 1) * S,
        x1: (2 * k.x1 - 1) * S,
        y0: (1 - 2 * k.y1) * M,
        y1: (1 - 2 * k.y0) * M
      }
    });
  });
  for (const u of o) c.push({ kind: "erp", ...u });
  return c.sort((u, d) => u.zIndex - d.zIndex);
}
function t1(e, t, n, { media: r, paintLayers: o, evaluated: a }) {
  const c = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !c.has(u.id) && c.set(u.id, u);
  return O2(e, t, {
    media: (u) => {
      const d = c.get(u.id);
      return d ? r(d) : null;
    },
    zIndex: (u) => {
      var d;
      return Number(((d = c.get(u.id)) == null ? void 0 : d.z_index) || 0);
    },
    paintLayers: o,
    evaluated: a
  });
}
function F2(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function T2(e, t, n, { media: r, evaluated: o = Ic(e, t) }) {
  const a = /* @__PURE__ */ new Map();
  for (const u of n)
    typeof (u == null ? void 0 : u.id) == "string" && u.id && !a.has(u.id) && a.set(u.id, u);
  const c = [];
  return e.stickers.forEach((u, d) => {
    const b = o.stickers[d];
    if (u.placement !== "world" || !b.active) return;
    const g = a.get(u.id), v = g ? r(g) : null;
    if (!v) return;
    const { width: S, height: M } = F2(v.media), k = g2(b, u.crop, S, M);
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
function D2({ canvas: e, onReady: t, onFailed: n, onUpdate: r = () => {
}, onRestored: o = () => {
}, load: a = () => import("./.lazy/pano_three_view-CRSltspO.js").then((c) => c.$) }) {
  let c = null, u = null, d = !1;
  const b = () => {
    u = lb(c.createThreeView({ onUpdate: r, createCanvas: () => e }), "editor");
  }, g = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(M) {
      return u && !g.lost ? u.render(M) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(M) {
      return u && !g.lost ? u.renderUnwrap(M) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(M, k) {
      return u && !g.lost ? u.resize(M, k) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(M, k) {
      u && !g.lost && u.clear(M, k);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(M) {
      return u ? u.sceneBox(M) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(M, k, P, A, O) {
      return u && !g.lost ? u.pick(M, k, P, A, O) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(M, k, P, A, O) {
      return u && !g.lost ? u.pickSurface(M, k, P, A, O) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(M, k, P, A, O) {
      return u && !g.lost ? u.pickSticker(M, k, P, A, O) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(M, k, P, A, O, G) {
      return u && !g.lost ? u.gizmoPointer(M, k, P, A, O, G) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return u ? u.contentRevision() : 0;
    },
    dispose() {
      d = !0, e.removeEventListener("webglcontextlost", v), e.removeEventListener("webglcontextrestored", S), u == null || u.dispose(), u = null;
    }
  };
  function v(M) {
    M.preventDefault(), !(d || g.lost) && (g.lost = !0, g.ready = !1, u == null || u.dispose({ lost: !0 }));
  }
  function S() {
    d || !g.lost || queueMicrotask(() => {
      d || !g.lost || (u == null || u.dispose(), u = null, g.lost = !1, c && (b(), g.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", v), e.addEventListener("webglcontextrestored", S), a().then((M) => {
    d || (c = M, !g.lost && (b(), g.ready = !0, t()));
  }).catch((M) => {
    console.error("[PanoramaStickers] three.js view is unavailable", M), g.failed = !0, n();
  }), g;
}
const n1 = "3D view unavailable. Check the browser console.";
function Dc(e, t, n) {
  return Qb({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, n);
}
function L2(e) {
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
const r1 = L2(
  () => import("./.lazy/pano_three_view-CRSltspO.js").then((e) => e.$).then((e) => lb(e.createThreeView({ createCanvas: () => In({ label: "three.node" }) }), "node"))
), qi = ["erp_image", "bg_erp", "bg_media"], rc = ["source"], Lp = ["sticker_image", "sticker"], i1 = ["scene"], R2 = {
  background: [...qi, ...rc],
  "external-sticker": [...Lp, ...rc],
  scene: [...i1, ...rc]
};
function o1(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Cd(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((n, r) => {
    const o = o1(e.graph ? e.getInputLink(r) : null);
    o && (t[String((n == null ? void 0 : n.name) || "")] = o);
  }), t;
}
function V2(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((n, r) => {
    var o;
    return t.includes(String((n == null ? void 0 : n.name) || "")) && !!e.graph && ((o = e.getInputLink(r)) == null ? void 0 : o.type) === "VIDEO";
  });
}
function a1(e, t) {
  var o;
  const n = String(t).split(":");
  let r = e;
  for (let a = 0; ; a += 1) {
    const c = (Array.isArray(r == null ? void 0 : r.nodes) ? r.nodes : []).find((u) => String(u == null ? void 0 : u.id) === n[a]);
    if (!c || a === n.length - 1) return { graph: r, entry: c };
    r = (((o = e == null ? void 0 : e.definitions) == null ? void 0 : o.subgraphs) || []).find((u) => (u == null ? void 0 : u.id) === c.type);
  }
}
function $2(e, t) {
  const { graph: n, entry: r } = a1(e, t), o = new Map((Array.isArray(n == null ? void 0 : n.links) ? n.links : []).map((c) => Array.isArray(c) ? [c[0], { origin_id: c[1], origin_slot: c[2] }] : [c == null ? void 0 : c.id, c])), a = {};
  for (const c of Array.isArray(r == null ? void 0 : r.inputs) ? r.inputs : []) {
    const u = o1(o.get(c == null ? void 0 : c.link));
    u && (a[String((c == null ? void 0 : c.name) || "")] = u);
  }
  return a;
}
const s1 = [...qi, ...Lp, ...i1, ...rc], z2 = 256, la = /* @__PURE__ */ new Map(), Df = /* @__PURE__ */ new WeakMap();
let l1 = () => null;
function c1(e) {
  return Df.has(e) || Df.set(e, JSON.stringify(e)), Df.get(e);
}
function j2(e) {
  l1 = e;
}
function Lc(e, t) {
  const n = c1(e);
  la.delete(n), la.set(n, t), la.size > z2 && la.delete(la.keys().next().value);
}
function xn(e, t) {
  var a;
  const n = e ? l1(e) : null;
  if (!n) return !0;
  const r = Cd(e);
  let o = la.get(c1(n));
  if (o)
    Lc(n, o);
  else {
    if (!e.graph || !((a = e.inputs) != null && a.some((c) => s1.includes(c == null ? void 0 : c.name)))) return !0;
    Lc(n, r), o = r;
  }
  return R2[t].every((c) => o[c] === r[c]);
}
const Rc = /* @__PURE__ */ new WeakSet();
async function Id(e, t) {
  if (Rc.has(e)) return null;
  let n;
  try {
    n = await e.fetchApi(t);
  } catch {
    return null;
  }
  const r = await n.json().catch(() => {
  });
  return r === void 0 && Rc.add(e), n.ok && r !== void 0 ? r : null;
}
function u1(e, t) {
  var a, c, u, d, b;
  const n = (u = (c = (a = e == null ? void 0 : e.workflow) == null ? void 0 : a.extra_data) == null ? void 0 : c.extra_pnginfo) == null ? void 0 : u.workflow, { entry: r } = a1(n, t), o = (d = e == null ? void 0 : e.outputs) == null ? void 0 : d[t];
  return !o || !((b = r == null ? void 0 : r.inputs) != null && b.some((g) => s1.includes(g == null ? void 0 : g.name))) ? null : { output: o, inputs: $2(n, t) };
}
const ic = /* @__PURE__ */ new Map();
function H2(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: n }) => {
    Object.keys((n == null ? void 0 : n.output) || {}).some((r) => r.startsWith("pano_")) && t.add(n.prompt_id);
  });
  for (const n of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(n, async ({ detail: r }) => {
      if (n === "execution_success" && ic.clear(), !t.delete(r == null ? void 0 : r.prompt_id)) return;
      const o = await Id(e, `/jobs/${encodeURIComponent(r.prompt_id)}`);
      for (const a of Object.keys((o == null ? void 0 : o.outputs) || {})) {
        const c = u1(o, a);
        c && Lc(c.output, c.inputs);
      }
    });
}
const G2 = 5;
function K2(e, t) {
  const n = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${G2}`, r = Id(e, `/jobs?${n}`).then((c) => (c == null ? void 0 : c.jobs) || []), o = /* @__PURE__ */ new Map(), a = (c) => (o.has(c) || o.set(c, Id(e, `/jobs/${encodeURIComponent(c)}`)), o.get(c));
  return {
    async lastNodeOutput(c, u) {
      var b, g, v, S;
      const d = String(c.id);
      for (const { id: M } of await r) {
        if (!u()) return null;
        const k = await a(M);
        if ((b = k == null ? void 0 : k.outputs) != null && b[d])
          return ((S = (v = (g = k.workflow) == null ? void 0 : g.prompt) == null ? void 0 : v[d]) == null ? void 0 : S.class_type) !== c.comfyClass ? null : u1(k, d);
      }
      return null;
    }
  };
}
function W2(e) {
  var n, r;
  return (((r = (n = e.extensionManager) == null ? void 0 : n.workflow) == null ? void 0 : r.openWorkflows) || []).some((o) => {
    var a, c;
    return ((a = o == null ? void 0 : o.activeState) == null ? void 0 : a.id) === e.rootGraph.id && ((c = o.changeTracker) == null ? void 0 : c.nodeOutputs);
  });
}
let Qo = null;
async function B2(e, t, n) {
  var u;
  const r = String(e.id), o = t.rootGraph.id, a = () => e.graph === t.rootGraph && !t.nodeOutputs[r];
  if (!a() || Rc.has(n) || (u = ic.get(o)) != null && u.has(r) || W2(t)) return null;
  (Qo == null ? void 0 : Qo.workflowId) !== o && (Qo = { workflowId: o, history: K2(n, o) }, queueMicrotask(() => {
    Qo = null;
  }));
  const c = await Qo.history.lastNodeOutput(e, a);
  return a() ? c ? (Lc(c.output, c.inputs), t.nodeOutputs[r] = c.output, c.output) : (Rc.has(n) || ic.set(o, (ic.get(o) || /* @__PURE__ */ new Set()).add(r)), null) : null;
}
function f0(e, t, n, r = qi) {
  const o = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || o === "input")) return !1;
  const c = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(n)] : null;
  return r.includes(String((c == null ? void 0 : c.name) || ""));
}
const d0 = /\.(mp4|webm|mov|m4v|mkv)$/i;
function oc(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return d0.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return d0.test(String((e == null ? void 0 : e.filename) || ""));
}
const Lf = /* @__PURE__ */ new WeakMap();
function U2(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((n) => Array.isArray(n) && n.some((r) => (r == null ? void 0 : r.type) === "input")));
}
function Ed(e) {
  return U2(e) ? (Lf.has(e) || Lf.set(e, Math.random().toString(36).slice(2, 10)), Lf.get(e)) : "run";
}
function f1(e, t, n) {
  const r = JSON.stringify(n ?? null);
  return e.get(t) === r ? !0 : (e.set(t, r), !1);
}
function Y2(e, t, n) {
  const r = /* @__PURE__ */ new Set(), o = (a, c) => {
    for (const u of c) {
      const d = n(a, u);
      (d == null ? void 0 : d.id) == null || r.has(String(d.id)) || (r.add(String(d.id)), o(d, (Array.isArray(d.inputs) ? d.inputs : []).map((b, g) => g)));
    }
  };
  return o(e, t), r;
}
function Rp(e, t = [], n = null) {
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
function X2({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: n = null
} = {}) {
  const r = ou(e, "looping-preview");
  if (!r || !t) return null;
  const o = typeof n == "function" ? n : () => {
  };
  let a = !1, c = 0;
  const u = typeof r.requestVideoFrameCallback == "function", d = () => {
    a || !u || c || r.paused || r.ended || (c = r.requestVideoFrameCallback(() => {
      c = 0, !a && (o(), d());
    }));
  }, b = () => {
    a || o();
  }, g = () => o(), v = () => {
    o(), d();
  }, S = () => o();
  let M = !1;
  const k = () => {
    M = !0, o();
  };
  r.muted = !0, r.loop = !0, r.autoplay = !1, r.preload = "auto", r.playsInline = !0, r.crossOrigin = "anonymous", r.addEventListener("loadedmetadata", b, { once: !0 }), r.addEventListener("loadeddata", b, { once: !0 }), u || r.addEventListener("timeupdate", g), r.addEventListener("play", v), r.addEventListener("pause", S), r.addEventListener("error", k), r.src = t, r.load();
  const P = () => {
    a || M || !r.paused || Promise.resolve(r.play()).catch(() => {
    });
  }, A = () => {
    !a && !r.paused && r.pause();
  };
  return {
    video: r,
    destroy: () => {
      var G, R;
      a || (a = !0, c && typeof r.cancelVideoFrameCallback == "function" && (r.cancelVideoFrameCallback(c), c = 0), r.removeEventListener("loadedmetadata", b), r.removeEventListener("loadeddata", b), r.removeEventListener("timeupdate", g), r.removeEventListener("play", v), r.removeEventListener("pause", S), r.removeEventListener("error", k), r.pause(), (G = r.removeAttribute) == null || G.call(r, "src"), (R = r.load) == null || R.call(r));
    },
    failed: () => M,
    play: P,
    pause: A,
    toggle() {
      r.paused ? P() : A();
    },
    get playing() {
      return !a && !r.paused && !r.ended;
    }
  };
}
function po(e, t) {
  if (!t || typeof t != "object") return "";
  const n = String(t.filename || "");
  if (!n) return "";
  const r = new URLSearchParams();
  r.set("filename", n), r.set("type", String(t.type || "output")), t.subfolder && r.set("subfolder", String(t.subfolder));
  const o = `/view?${r.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(o) : o;
}
function q2(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function p0(e, t, n = null) {
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
  return !r && n != null && (r = q2(e == null ? void 0 : e.graph, n)), r;
}
function J2(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function Z2(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  return r.length ? { filename: String(r.pop() || "").trim(), subfolder: r.join("/") } : { filename: "", subfolder: "" };
}
function Q2(e) {
  const t = String(e || "");
  let n = 2166136261;
  for (const r of t)
    n ^= r.codePointAt(0) || 0, n = Math.imul(n, 16777619);
  return String(n >>> 0);
}
function d1({ app: e, api: t, ImageCtor: n, imageState: r } = {}) {
  const o = (_) => {
    if (!_) return "";
    if (typeof _ == "string") return String(_ || "").trim();
    if (Array.isArray(_)) {
      if (_.length === 0) return "";
      if (_.length === 1) return o(_[0]);
      const j = String(_[0] || "").trim();
      if (j)
        return po(t, {
          filename: j,
          subfolder: String(_[1] || "").trim(),
          type: String(_[2] || "output").trim() || "output"
        });
      for (const W of _) {
        const le = o(W);
        if (le) return le;
      }
      return "";
    }
    return typeof (_ == null ? void 0 : _.src) == "string" && _.src ? _.src : typeof (_ == null ? void 0 : _.url) == "string" && _.url ? _.url : po(t, _);
  }, a = (_) => {
    if (!_ || typeof _ != "object") return "";
    const j = String(_.type || "").trim().toLowerCase();
    if (j === "dataurl") return String(_.value || "");
    if (j !== "comfy_image") return "";
    const W = String(_.filename || "").trim();
    return W ? po(t, {
      filename: W,
      subfolder: String(_.subfolder || ""),
      type: String(_.storage || "input")
    }) : "";
  }, c = (_) => {
    const j = e == null ? void 0 : e.nodeOutputs;
    if (!j || _ == null) return null;
    const W = String(_);
    return j instanceof Map ? j.get(_) || j.get(W) || j.get(Number(W)) || null : j[_] || j[W] || null;
  }, u = (_, j) => {
    var le;
    const W = c(_ == null ? void 0 : _.id);
    return Array.isArray((le = W == null ? void 0 : W.ui) == null ? void 0 : le[j]) ? W.ui[j] : Array.isArray(W == null ? void 0 : W[j]) ? W[j] : [];
  }, d = (_, j) => {
    const W = c(_ == null ? void 0 : _.id);
    return W != null && W.ui && Object.prototype.hasOwnProperty.call(W.ui, j) ? W.ui[j] : W && Object.prototype.hasOwnProperty.call(W, j) ? W[j] : null;
  }, b = (_, j) => {
    const W = d(_, "pano_sticker_input_state_hash"), le = Array.isArray(W) ? W[0] : W;
    return String(le ?? "").trim() || Q2(j);
  }, g = (_) => {
    const j = [], W = /* @__PURE__ */ new Set();
    for (const le of _ || []) {
      const ke = o(le);
      !ke || W.has(ke) || (W.add(ke), j.push(ke));
    }
    return j;
  }, v = (_, j) => {
    var ke;
    const W = [];
    Array.isArray(_ == null ? void 0 : _.images) && _.images.length && W.push(_.images), Array.isArray((ke = _ == null ? void 0 : _.ui) == null ? void 0 : ke.images) && _.ui.images.length && W.push(_.ui.images);
    const le = [];
    for (const F of W)
      j >= 0 && j < F.length && le.push(F[j]), le.push(...F);
    return le;
  }, S = (_, j) => {
    var I;
    const W = String(j || "").trim();
    if (!W) return { src: "", sourceType: "", inputName: "" };
    const ke = (Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : []).findIndex((Z) => String((Z == null ? void 0 : Z.name) || "") === W);
    if (ke < 0) return { src: "", sourceType: "", inputName: W };
    const F = _.graph ? _.getInputLink(ke) : null;
    if ((F == null ? void 0 : F.origin_id) == null) return { src: "", sourceType: "", inputName: W };
    const q = F.origin_id, J = p0(_, ke, q);
    if (!J) return { src: "", sourceType: "", inputName: W };
    const ne = Number(F.origin_slot ?? 0);
    let ge = [];
    try {
      ge = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(J) || [] : [];
    } catch {
      ge = [];
    }
    if (Array.isArray(ge) && ge.length) {
      const Z = [];
      ne >= 0 && ne < ge.length && Z.push(ge[ne]), Z.push(...ge);
      const ce = g(Z.filter((Ee) => !oc(Ee)));
      if (ce.length)
        return { src: ce[0], srcCandidates: ce, sourceType: "appNodeImageUrls", inputName: W };
    }
    const me = c((J == null ? void 0 : J.id) ?? q), re = g(v(me, ne).filter((Z) => !oc(Z))).map((Z) => `${Z}&pano_src=${Ed(me)}`);
    if (re.length)
      return { src: re[0], srcCandidates: re, sourceType: "nodeOutputs", inputName: W };
    const B = Array.isArray(J == null ? void 0 : J.imgs) ? J.imgs : [];
    if (B.length) {
      const Z = [];
      ne >= 0 && ne < B.length && Z.push(B[ne]), Z.push(...B);
      const ce = g(Z);
      if (ce.length)
        return { src: ce[0], srcCandidates: ce, sourceType: "nodeImgs", inputName: W };
    }
    const D = (I = J == null ? void 0 : J.widgets) == null ? void 0 : I.find((Z) => String((Z == null ? void 0 : Z.name) || "").toLowerCase() === "image");
    if (D) {
      let Z = o(D.value);
      if (Z && !Z.includes("/") && !Z.includes(":") && (J.comfyClass === "LoadImage" || J.type === "LoadImage") && (Z = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`), Z) return { src: Z, sourceType: "widget", inputName: W };
    }
    return { src: "", sourceType: "", inputName: W };
  }, M = (_, j = []) => {
    var le;
    const W = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs : [];
    for (const ke of j) {
      const F = W.findIndex((ge) => String((ge == null ? void 0 : ge.name) || "") === ke), q = F >= 0 && _.graph ? _.getInputLink(F) : null;
      if ((q == null ? void 0 : q.origin_id) == null) continue;
      const J = c(((le = p0(_, F, q.origin_id)) == null ? void 0 : le.id) ?? q.origin_id), ne = (Array.isArray(J == null ? void 0 : J.images) ? J.images : []).find(oc);
      return ne ? `${po(t, ne)}&pano_src=${Ed(J)}` : "";
    }
    return "";
  }, k = (_, j = []) => {
    const W = Array.isArray(j) ? j : [j];
    for (const le of W) {
      const ke = S(_, le);
      if (String((ke == null ? void 0 : ke.src) || "").trim()) return ke;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, P = (_) => {
    const j = String(_ || "").trim();
    if (!j) return [];
    if (J2(j)) return [j];
    const { filename: W, subfolder: le } = Z2(j);
    return W ? g([
      po(t, { filename: W, subfolder: le, type: "temp" }),
      po(t, { filename: W, subfolder: le, type: "output" }),
      po(t, { filename: W, subfolder: le, type: "input" }),
      j
    ]) : [j];
  };
  return {
    assetSource: a,
    clearFailedLinkedImages: (_) => {
      var j, W;
      try {
        (W = (j = _ == null ? void 0 : _.__panoLinkedInputImageCache) == null ? void 0 : j.forEach) == null || W.call(j, (le, ke, F) => {
          var q;
          le != null && le.img && ((q = r == null ? void 0 : r.isImageLoadFailed) != null && q.call(r, le.img)) && F.delete(ke);
        });
      } catch {
      }
    },
    externalStateHash: b,
    invalidateUiImage: (_, j) => {
      var W;
      (W = _ == null ? void 0 : _.delete) == null || W.call(_, `__ui__${String(j || "")}`);
    },
    linkedValue: (_, j) => {
      var q, J, ne, ge;
      const W = String(j || ""), le = Array.isArray(_ == null ? void 0 : _.inputs) ? _.inputs.findIndex((me) => String((me == null ? void 0 : me.name) || "") === W) : -1, ke = le >= 0 && _.graph ? _.getInputLink(le) : null;
      if (ke) {
        const me = c(ke.origin_id), re = [
          me == null ? void 0 : me.output,
          me == null ? void 0 : me.result,
          (q = me == null ? void 0 : me.data) == null ? void 0 : q.output,
          (J = me == null ? void 0 : me.data) == null ? void 0 : J.result,
          (ne = me == null ? void 0 : me.ui) == null ? void 0 : ne.output,
          (ge = me == null ? void 0 : me.ui) == null ? void 0 : ge.result
        ];
        for (const B of re) {
          if (!Array.isArray(B)) continue;
          const D = B[Number(ke.origin_slot || 0)];
          if (typeof D == "string" && D.trim()) return D;
        }
      }
      const F = Array.isArray(_ == null ? void 0 : _.widgets) ? _.widgets.find((me) => String((me == null ? void 0 : me.name) || "") === W) : null;
      return String((F == null ? void 0 : F.value) || "");
    },
    linkedVideoFile: M,
    loadPreferredExactLinkedImage: (_, j = [], W = null, le = "") => {
      var Xe;
      const ke = Array.isArray(j) ? j : [j], F = k(_, ke), J = (Array.isArray(F == null ? void 0 : F.srcCandidates) && F.srcCandidates.length ? F.srcCandidates : [F == null ? void 0 : F.src]).map((Je) => String(Je || "").trim()).filter(Boolean);
      if (!J.length) return null;
      const ne = g(J.flatMap((Je) => P(Je)));
      if (!ne.length) return null;
      _.__panoLinkedInputImageCache || (_.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
      const ge = String(le || ke.join("|") || "image_exact"), me = J.join(`
`), re = _.__panoLinkedInputImageCache.get(ge);
      if (re && re.srcRaw === me && re.img) return re.img;
      const B = n || globalThis.Image;
      if (typeof B != "function") return null;
      const D = new B();
      (Xe = r == null ? void 0 : r.markImageLoading) == null || Xe.call(r, D, me);
      const I = { srcRaw: me, resolvedSrc: "", img: D };
      _.__panoLinkedInputImageCache.set(ge, I);
      let Z = -1;
      const ce = (Je) => {
        var vt, $, _t;
        Je === "ready" ? (vt = r == null ? void 0 : r.markImageReady) == null || vt.call(r, D, me) : ($ = r == null ? void 0 : r.markImageFailed) == null || $.call(r, D, me), W == null || W(D), (_t = _.setDirtyCanvas) == null || _t.call(_, !0, !0);
      }, Ee = () => {
        if (Z += 1, Z >= ne.length) {
          ce("failed");
          return;
        }
        I.resolvedSrc = ne[Z], D.src = I.resolvedSrc;
      };
      return D.onload = () => ce("ready"), D.onerror = () => {
        if (Z + 1 < ne.length) {
          Ee();
          return;
        }
        ce("failed");
      }, Ee(), D;
    },
    output: c,
    resolvePreferredExactLinkedSource: k,
    source: o,
    uiImage: (_, j, W, le = null) => {
      var me, re, B;
      const ke = u(_, j)[0] || null, F = o(ke);
      if (!F) return null;
      const q = `__ui__${j}`, J = (me = W == null ? void 0 : W.get) == null ? void 0 : me.call(W, q);
      if (J && J.__panoSrc === F) return J;
      const ne = n || globalThis.Image;
      if (typeof ne != "function") return null;
      const ge = new ne();
      return ge.__panoSrc = F, (re = r == null ? void 0 : r.markImageLoading) == null || re.call(r, ge, F), ge.onload = () => {
        var D;
        (D = r == null ? void 0 : r.markImageReady) == null || D.call(r, ge, F), le == null || le(ge);
      }, ge.onerror = () => {
        var D;
        (D = r == null ? void 0 : r.markImageFailed) == null || D.call(r, ge, F), le == null || le(ge);
      }, ge.src = F, (B = W == null ? void 0 : W.set) == null || B.call(W, q, ge), ge;
    },
    uiList: u,
    uiValue: d
  };
}
const eP = 1e-3;
function p1(e, t, n, r) {
  if (!ya(e, t)) return null;
  const o = t - (e.start - e.in);
  if (r.kind === "IMAGE") {
    const c = Math.floor(o + 0.5);
    return c >= 0 && c < r.frames ? (c + 0.5) / r.fps : null;
  }
  const a = o / n + Math.max(eP / n, Number(r.pts_tolerance) || 0);
  return a >= 0 && a < r.duration ? a : null;
}
function h1(e, t, n) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (n.kind === "IMAGE" ? n.frames : n.duration * t));
}
function tP(e, t) {
  return Math.floor(e * t.fps);
}
function m1(e, t) {
  var n;
  return (e == null ? void 0 : e.src) || ((n = e == null ? void 0 : e.frames) == null ? void 0 : n.join(`
`)) || t;
}
const h0 = 4;
function g1({ createImage: e, onLoad: t }) {
  let n = [];
  const r = /* @__PURE__ */ new Map();
  let o = null;
  function a(c) {
    return r.has(c) || r.set(c, e(n[c], t)), r.get(c);
  }
  return {
    picture(c, u, d, b) {
      if ((c.length !== n.length || c.some((S, M) => S !== n[M])) && (n = c, r.clear(), o = null), u === null) return null;
      const g = tP(u, d);
      for (let S = g; S < Math.min(n.length, g + h0 + 1); S += 1) a(S);
      for (const S of r.keys())
        (S < g || S > g + h0) && S !== o && r.delete(S);
      const v = r.get(g);
      return v != null && v.complete && v.naturalWidth > 0 && (o !== null && o !== g && r.delete(o), o = g), o === null ? b : r.get(o);
    }
  };
}
function y1({
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
  const b = () => c || e(), g = () => a(n(b()));
  return {
    model: () => n(b()),
    refresh() {
      return d ? this.model() : (g(), this.model());
    },
    beginGesture() {
      return d || c ? !1 : (c = e(), u = !1, g(), !0);
    },
    updateGesture(v) {
      if (d) return !1;
      c || this.beginGesture();
      const S = t(c, v);
      return S.changed ? (c = S.state, u = !0, r(c), g(), !0) : !1;
    },
    hasGestureChanges() {
      return c != null && u;
    },
    commitGesture() {
      if (d || !c) return !1;
      const v = u;
      return v && o(c), c = null, u = !1, r(null), g(), v;
    },
    cancelGesture() {
      return d || !c ? !1 : (c = null, u = !1, r(null), g(), !0);
    },
    apply(v) {
      if (d) return !1;
      c && this.commitGesture();
      const S = t(e(), v);
      return S.changed ? (o(S.state), g(), !0) : !1;
    },
    destroy() {
      if (d) return;
      d = !0;
      const v = c != null;
      c = null, u = !1, v && r(null);
    }
  };
}
const ac = "sticker_image_1", b1 = "external_image", Pa = 0;
function ba(e, t, n) {
  const r = Math.min(179, Math.max(0.1, Number(e || 30))), o = Math.max(1, Number(n || 1)) / Math.max(1, Number(t || 1)), a = 2 * Math.atan(Math.tan(r * Math.PI / 180 * 0.5) * o) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, a));
}
function Rf(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function Bi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((n) => n.placement === "sky") : t;
}
function Od(e, t = Pa) {
  return (e == null ? void 0 : e.version) !== 2 ? Bi(e) : Bi(e).map((n) => ({
    id: n.id,
    z_index: n.z_index,
    locked: n.locked,
    visible: Co(n, t).active,
    external: n.source.kind === "port",
    ...Ip(n, t)
  }));
}
function Vp(e) {
  var n;
  const t = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_sticker_id) || "");
  return t && Bi(e).find((r) => String((r == null ? void 0 : r.id) || "") === t) || null;
}
function v1(e) {
  return String((e == null ? void 0 : e.id) || "") === ac || String((e == null ? void 0 : e.source_kind) || "") === b1;
}
function $p(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : v1(t);
}
const _1 = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function w1(e) {
  return !v1(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(_1.map((t) => {
    const n = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, r = Number(e[t]), o = Number(e.initial_pose[t]);
    return [t, Number.isFinite(o) ? o : Number.isFinite(r) ? r : n];
  }));
}
function S1(e) {
  const t = w1(e);
  return t ? _1.some((n) => Math.abs(Number((e == null ? void 0 : e[n]) || 0) - t[n]) > 1e-4) : !1;
}
function x1(e, t = {}) {
  var V, _, j;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const n = Array.isArray(e.stickers) ? e.stickers : [], r = n.findIndex((W) => String((W == null ? void 0 : W.id) || "") === ac);
  if (t.connected !== !0) {
    if (r < 0) return { state: e, changed: !1 };
    const W = String(((V = e.active) == null ? void 0 : V.selected_sticker_id) || "") === ac;
    return {
      state: {
        ...e,
        stickers: n.filter((le, ke) => ke !== r),
        active: W ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const o = Number(t.linkId), a = String(t.stateHash || ""), c = r >= 0 ? n[r] : null, u = !c || Number(c.source_link_id ?? -1) !== o || String(c.source_state_hash || "") !== a, d = Number(t.imageWidth || 0), b = Number(t.imageHeight || 0), g = d > 0 && b > 0, v = Math.max(1, d), S = Math.max(1, b), M = t.pose && typeof t.pose == "object" ? t.pose : {}, k = u ? M.hFOV_deg || (c == null ? void 0 : c.hFOV_deg) || 30 : (c == null ? void 0 : c.hFOV_deg) || M.hFOV_deg || 30, P = Math.min(179, Math.max(0.1, Number(k)));
  if (!u) {
    if (!g) return { state: e, changed: !1 };
    const W = ba(P, v, S), le = Number(((_ = c == null ? void 0 : c.initial_pose) == null ? void 0 : _.hFOV_deg) ?? P), ke = ba(le, v, S), F = Number(((j = c == null ? void 0 : c.initial_pose) == null ? void 0 : j.vFOV_deg) ?? ke);
    return Math.abs(Number((c == null ? void 0 : c.vFOV_deg) || 0) - W) <= 1e-6 && Math.abs(F - ke) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: n.map((q, J) => J === r ? {
          ...q,
          vFOV_deg: W,
          initial_pose: q.initial_pose && typeof q.initial_pose == "object" ? { ...q.initial_pose, vFOV_deg: ke } : q.initial_pose
        } : q)
      },
      changed: !0
    };
  }
  const A = n.reduce((W, le) => Math.max(W, Number((le == null ? void 0 : le.z_index) || 0)), -1), O = {
    yaw_deg: Number(M.yaw_deg || 0),
    pitch_deg: Number(M.pitch_deg || 0),
    hFOV_deg: P,
    vFOV_deg: g ? ba(P, v, S) : Number(M.vFOV_deg || (c == null ? void 0 : c.vFOV_deg) || P),
    rot_deg: Number(M.rot_deg ?? M.roll_deg ?? 0)
  }, G = {
    ...c || {},
    id: ac,
    source_kind: b1,
    source_link_id: o,
    source_state_hash: a,
    ...O,
    initial_pose: { ...O },
    visible: !0,
    z_index: A + 1
  }, R = r >= 0 ? n.map((W, le) => le === r ? G : W) : [...n, G];
  return { state: { ...e, stickers: R }, changed: !0 };
}
function m0(e, t) {
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((r) => (r == null ? void 0 : r.name) === t);
  return n >= 0 && e.isInputConnected(n);
}
const nP = ["IMAGE", "VIDEO"];
function g0(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((n) => n === "MESH" || n === "SPLAT" || n.startsWith("FILE_3D")) ? "3d" : t.length && t.every((n) => nP.includes(n)) ? "2d" : null;
}
function rP(e, t) {
  var o, a, c, u, d, b;
  const n = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((g) => (g == null ? void 0 : g.name) === t), r = n >= 0 && e.graph ? (o = e.getInputLink) == null ? void 0 : o.call(e, n) : null;
  return r ? g0(r.type) ?? g0((b = (d = (u = (c = (a = e.graph).getNodeById) == null ? void 0 : c.call(a, r.origin_id)) == null ? void 0 : u.outputs) == null ? void 0 : d[r.origin_slot]) == null ? void 0 : b.type) : null;
}
function k1(e, { pose: t = null, image: n = null } = {}) {
  return {
    connected: m0(e, "sticker"),
    awaitingPose: !t && (m0(e, "sticker_state") || rP(e, "sticker") !== "2d"),
    pose: t,
    imageWidth: Number((n == null ? void 0 : n.naturalWidth) || (n == null ? void 0 : n.width) || 0),
    imageHeight: Number((n == null ? void 0 : n.naturalHeight) || (n == null ? void 0 : n.height) || 0)
  };
}
function y0(e, t) {
  const n = {
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return ni({ version: 2, stickers: [n] }).stickers[0];
}
function M1(e, { connected: t = !1, awaitingPose: n = !1, pose: r = null, imageWidth: o = 0, imageHeight: a = 0 } = {}) {
  var P;
  const c = e.stickers.findIndex((A) => $p(e, A)), u = c >= 0 ? e.stickers[c] : null;
  if (!t) {
    if (!u) return { state: e, changed: !1 };
    const A = ((P = e.active) == null ? void 0 : P.selected_sticker_id) === u.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((O, G) => G !== c),
        active: A ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const d = o > 0 && a > 0;
  if (u && (r == null ? void 0 : r.placement) === "world" && r.replace && u.placement === "sky") {
    const A = { ...y0(u.id, r), clip: u.clip, visible: u.visible, locked: u.locked };
    return { state: { ...e, stickers: e.stickers.map((O, G) => G === c ? A : O) }, changed: !0 };
  }
  if (u) {
    if (!d || u.placement !== "sky") return { state: e, changed: !1 };
    const A = [u.size.value, ...u.size.keyframes.map((R) => R.value)], O = A.map((R) => ba(R.hFOV_deg, o, a));
    if (A.every((R, V) => Math.abs(R.vFOV_deg - O[V]) <= 1e-6)) return { state: e, changed: !1 };
    const G = {
      value: { ...u.size.value, vFOV_deg: O[0] },
      keyframes: u.size.keyframes.map((R, V) => ({ ...R, value: { ...R.value, vFOV_deg: O[V + 1] } }))
    };
    return {
      state: { ...e, stickers: e.stickers.map((R, V) => V === c ? { ...R, size: G } : R) },
      changed: !0
    };
  }
  if (n) return { state: e, changed: !1 };
  const b = new Set(e.stickers.map((A) => A.id));
  let g = 1;
  for (; b.has(`sticker_${g}`); ) g += 1;
  if ((r == null ? void 0 : r.placement) === "world")
    return { state: { ...e, stickers: [...e.stickers, y0(`sticker_${g}`, r)] }, changed: !0 };
  const v = Math.min(179, Math.max(0.1, Number((r == null ? void 0 : r.hFOV_deg) ?? 30))), S = (A) => d ? ba(A, o, a) : A, M = Ep(`sticker_${g}`, { kind: "port" }, {
    yaw_deg: Number((r == null ? void 0 : r.yaw_deg) ?? 0),
    pitch_deg: Number((r == null ? void 0 : r.pitch_deg) ?? 0),
    rot_deg: Number((r == null ? void 0 : r.roll_deg) ?? 0),
    hFOV_deg: v,
    vFOV_deg: S(v)
  }, Bi(e).reduce((A, O) => Math.max(A, O.z_index), -1) + 1), k = (r == null ? void 0 : r.keyframes) ?? {};
  return M.direction.keyframes = k.direction ?? [], M.roll.keyframes = k.roll ?? [], M.size.keyframes = (k.size ?? []).map((A) => ({ ...A, value: { ...A.value, vFOV_deg: S(A.value.hFOV_deg) } })), { state: { ...e, stickers: [...e.stickers, M] }, changed: !0 };
}
function zp(e) {
  const t = Bi(e).filter((a) => a && typeof a == "object").map((a) => ({
    type: "sticker",
    id: String(a.id || ""),
    z_index: Rf(a.z_index),
    item: a
  })), n = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, r = (Array.isArray(n.groups) ? n.groups : []).filter((a) => a && typeof a == "object").map((a) => ({
    type: "strokeGroup",
    id: String(a.actionGroupId || a.id || ""),
    z_index: Rf(a.z_index),
    item: a
  })), o = (Array.isArray(n.raster_objects) ? n.raster_objects : []).filter((a) => a && typeof a == "object" && String(a.layerKind || "paint") === "paint").map((a) => ({
    type: "rasterObject",
    id: String(a.id || ""),
    z_index: Rf(a.z_index),
    item: a
  }));
  return [...t, ...r, ...o].sort((a, c) => a.z_index - c.z_index);
}
function N1(e) {
  const t = Vp(e), n = $p(e, t), r = Bi(e).some((u) => u && u.visible !== !1), o = zp(e), a = t ? o.findIndex((u) => u.type === "sticker" && u.item === t) : -1, c = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: r,
    hasSelection: !!t,
    isExternalSelection: n,
    canRestoreInitial: S1(t),
    selectedId: t ? String(t.id || "") : null,
    locked: c,
    canDelete: !!t && !c,
    canMoveForward: a >= 0 && a < o.length - 1,
    canMoveBackward: a > 0
  };
}
function iP(e) {
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
function b0(e, t) {
  const n = Vp(e);
  if (!n || n.locked === !0) return { state: e, changed: !1 };
  const r = iP(e), o = String(n.id || ""), a = zp(r), c = a.findIndex((d) => d.type === "sticker" && d.id === o);
  if (c < 0) return { state: e, changed: !1 };
  if (t === "front" && c === a.length - 1 || t === "back" && c === 0)
    return { state: e, changed: !1 };
  const [u] = a.splice(c, 1);
  return t === "front" ? a.push(u) : a.unshift(u), a.forEach((d, b) => {
    d.item.z_index = b;
  }), { state: r, changed: !0 };
}
function oP(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((n) => String((n == null ? void 0 : n.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([n]) => t.has(String(n)))
  );
}
function aP(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return x1(e, t.value);
  if (t.type === "sync-port") return M1(e, t.value);
  if (t.type === "add-sticker") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = String(o.stickerId || "").trim(), c = String(o.assetId || "").trim();
    if (!a || !c || !o.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((S) => String((S == null ? void 0 : S.id) || "") === a))
      return { state: e, changed: !1 };
    const d = zp(e).reduce((S, M) => Math.max(S, Number(M.z_index || 0)), -1), b = 30, g = {
      yaw_deg: Number(o.yaw_deg || 0),
      pitch_deg: Number(o.pitch_deg || 0),
      hFOV_deg: b,
      vFOV_deg: ba(b, o.imageWidth, o.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2)
      return {
        state: {
          ...e,
          stickers: [...e.stickers, Ep(a, nc(o.asset), g, d + 1)],
          active: { ...e.active || {}, selected_sticker_id: a }
        },
        changed: !0
      };
    const v = { id: a, asset_id: c, ...g, z_index: d + 1 };
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
    return !o || !Bi(e).some((a) => String((a == null ? void 0 : a.id) || "") === o) ? { state: e, changed: !1 } : String(((r = e.active) == null ? void 0 : r.selected_sticker_id) || "") === o ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: o } },
      changed: !0
    };
  }
  const n = Vp(e);
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
    const o = w1(n);
    return !o || !S1(n) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((a) => a === n ? { ...a, ...o } : a)
      },
      changed: !0
    };
  }
  if (n.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return b0(e, "front");
  if (t.type === "send-back") return b0(e, "back");
  if (t.type === "delete-selected") {
    if ($p(e, n))
      return n.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((d) => d === n ? { ...d, visible: !1 } : d)
        },
        changed: !0
      };
    const o = e.stickers.filter((d) => d !== n), a = Bi({ ...e, stickers: o })[0], c = (a == null ? void 0 : a.id) == null ? null : String(a.id), u = {
      ...e,
      stickers: o,
      active: { ...e.active || {}, selected_sticker_id: c }
    };
    return e.version !== 2 && (u.assets = oP(u)), { state: u, changed: !0 };
  }
  if (t.type === "set-transform") {
    const o = t.value && typeof t.value == "object" ? t.value : {}, a = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], c = e.version === 2 ? Ip(n, Pa) : n, u = {};
    if (a.forEach((d) => {
      const b = Number(o[d]);
      Number.isFinite(b) && Math.abs(b - Number(c[d] || 0)) > 1e-12 && (u[d] = b);
    }), !Object.keys(u).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const d = jN(n, u);
      if (!Object.keys(d).length) return { state: e, changed: !1 };
      const b = structuredClone(n);
      return Hb(b, Pa, d), { state: { ...e, stickers: e.stickers.map((g) => g === n ? b : g) }, changed: !0 };
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
function sP(e = {}) {
  return y1({
    ...e,
    reduce: aP,
    projectModel: N1
  });
}
const Fd = 2;
function bo(e, t) {
  return Math.floor(e * t + 0.5);
}
function lP(e, t) {
  return Math.floor(e * t + 1e-3);
}
function P1({ video: e, clock: t, fps: n, span: r, loop: o, onFrame: a, onCapture: c, onChange: u }) {
  let d = 0, b = !1, g = !1, v = { name: "idle" }, S = [];
  const M = () => b && !g, k = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function P() {
    for (const I of S) I();
    S = [];
  }
  function A(I, Z = {}) {
    return P(), v = { name: I, ...Z }, u(), v;
  }
  function O(I, Z, ce) {
    const Ee = () => {
      v === I && ce();
    };
    e.addEventListener(Z, Ee), S.push(() => e.removeEventListener(Z, Ee));
  }
  function G(I, Z) {
    let ce = t.requestFrame(function Ee(Xe) {
      v === I && (Z(Xe), v === I && (ce = t.requestFrame(Ee)));
    });
    S.push(() => t.cancelFrame(ce));
  }
  function R(I) {
    d = I, a(d);
  }
  function V() {
    return A(g ? "error" : "idle");
  }
  function _() {
    g = !0, V();
  }
  function j() {
    const { seekable: I } = e, Z = I != null && I.length ? I.end(I.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(d / n(), Number.isFinite(Z) ? Z : 1 / 0));
  }
  function W(I) {
    if (!M()) return I === "play" ? J() : V();
    if (e.readyState < Fd) {
      const Z = A("loading", { then: I });
      return O(Z, "loadeddata", () => W(Z.then)), O(Z, "error", _), Z;
    }
    return I === "play" && d / n() >= Number(e.duration) ? J() : le(I, !1);
  }
  function le(I, Z) {
    const ce = j();
    if (!e.ended && bo(Number(e.currentTime), n()) === bo(ce, n())) return ke(I);
    const Ee = A("seeking", { then: I, frame: d, retried: Z });
    return O(Ee, "seeked", () => {
      const Xe = bo(Number(e.currentTime), n()) === bo(j(), n()), Je = d === Ee.frame;
      Xe || Je && Ee.retried ? ke(Ee.then) : le(Ee.then, Je);
    }), O(Ee, "error", _), e.currentTime = ce, Ee;
  }
  function ke(I) {
    return I === "play" ? F() : (c(), V());
  }
  function F() {
    const I = A("playingVideo", { shown: !1 });
    if (O(I, "pause", () => e.ended ? q() : me()), O(I, "ended", q), O(I, "error", _), o() && bo(Number(e.duration), n()) >= r()) {
      const ce = e.loop;
      e.loop = !0, S.push(() => {
        e.loop = ce;
      });
    }
    const Z = (ce, Ee) => {
      Ee && !I.shown && (I.shown = !0, u()), ne(bo(ce, n()));
    };
    if (k()) {
      let ce = e.requestVideoFrameCallback(function Ee(Xe, Je) {
        v === I && (Z(Number(Je.mediaTime), !0), v === I && (ce = e.requestVideoFrameCallback(Ee)));
      });
      S.push(() => {
        var Ee;
        return (Ee = e.cancelVideoFrameCallback) == null ? void 0 : Ee.call(e, ce);
      });
    } else
      G(I, () => Z(Number(e.currentTime), e.readyState >= Fd));
    return Promise.resolve(e.play()).catch(() => {
      v === I && me();
    }), I;
  }
  function q() {
    c(), J();
  }
  function J() {
    const I = A("playingClock", { startTs: t.now(), startFrame: d });
    return G(I, (Z) => ne(I.startFrame + Math.floor((Z - I.startTs) / 1e3 * n()))), I;
  }
  function ne(I) {
    if (I < r()) {
      R(I);
      return;
    }
    if (!o()) {
      ge(r() - 1);
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), R(0), W("play");
  }
  function ge(I) {
    v.name === "playingVideo" ? (P(), e.pause(), R(Math.max(0, I)), c()) : R(Math.max(0, I)), W("still");
  }
  function me() {
    if (v.name === "loading" || v.name === "seeking")
      v.then = "still", u();
    else if (v.name === "playingVideo") {
      P(), e.pause();
      const I = lP(Number(e.currentTime), n());
      R(Math.min(I, r() - 1)), c(), d === I ? V() : W("still");
    } else v.name === "playingClock" && ge(Math.min(d, r() - 1));
  }
  function re() {
    if (!D()) {
      if (d >= r() - 1 && R(0), v.name === "loading" || v.name === "seeking") {
        v.then = "play", u();
        return;
      }
      W("play");
    }
  }
  function B(I) {
    const Z = Math.max(0, Math.round(I));
    if (v.name === "loading" || v.name === "seeking") {
      v.then = "still", R(Z), u();
      return;
    }
    v.name === "playingVideo" && (P(), e.pause()), R(Z), W("still");
  }
  function D() {
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
      return D();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return v.name === "playingVideo" || v.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return v.name === "playingVideo" && v.shown;
    },
    play: re,
    stop: me,
    seek: B,
    toggle() {
      D() ? me() : re();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(I) {
      P(), b = !!I, g = !1, W("still");
    },
    dispose() {
      P(), b = !1, v = { name: "idle" };
    }
  };
}
function A1({ video: e, onCapture: t, onChange: n }) {
  let r = "", o = !1, a = { time: null, playing: !1, fps: 1 }, c = null, u = null, d = !1;
  function b(P) {
    u = P, t();
  }
  function g(P) {
    c = P, e.currentTime = P;
  }
  function v() {
    const P = d;
    S(), d !== P && n();
  }
  function S() {
    if (!r || o || e.readyState < Fd) return;
    const { time: P, playing: A, fps: O } = a;
    if (P === null) {
      e.pause(), d = !1;
      return;
    }
    if (A) {
      if (c !== null) return;
      const G = Number(e.duration), R = Number.isFinite(G) ? Math.min(P, G) : P, V = Math.abs(Number(e.currentTime) - R) > 1.5 / O;
      if (e.ended && !V) return;
      V && g(R), e.paused && (d = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), d = !1, b(NaN)), !(c !== null || u === P) && (Number(e.currentTime) === P ? b(P) : g(P));
  }
  const M = {
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
  for (const [P, A] of Object.entries(M)) e.addEventListener(P, A);
  function k(P) {
    r = P, o = !1, c = null, u = null, d = !1, e.pause(), r ? e.src = r : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: P = "", time: A = null, playing: O = !1, fps: G }) {
      P !== r && (k(P), n()), a = { time: A, playing: O, fps: G }, v();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(P, A) {
      return !r || o ? A : a.time === null ? null : a.playing && d ? e : u === null ? A : P;
    },
    dispose() {
      for (const [P, A] of Object.entries(M)) e.removeEventListener(P, A);
      k("");
    }
  };
}
function Td(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function cP({ video: e, stickerVideo: t, createImage: n, clock: r, readState: o, onFrame: a, onCapture: c, onStickerCapture: u, onChange: d, camera: b = !1 }) {
  let g = "", v = "", S = 0;
  const M = /* @__PURE__ */ new Set();
  let k = null, P = null;
  const A = () => o().timeline.fps, O = (q) => q.stickers.find((J) => J.source.kind === "port"), G = () => {
    const q = o(), J = O(q);
    return Vb(q, {
      minimum: Math.round(A() * 5),
      frames: Math.max(
        g ? Math.round(S * A()) : 0,
        k && J ? h1(J.clip, A(), k.meta) : 0
      ),
      camera: b
    });
  }, R = P1({
    video: e,
    clock: r,
    fps: A,
    span: G,
    loop: () => !0,
    onFrame: a,
    onCapture: c,
    onChange: d
  }), V = () => {
    v === g && Number.isFinite(e.duration) && (S = e.duration);
  }, _ = () => {
    v && (M.add(v), d());
  }, j = A1({ video: t, onCapture: u, onChange: d }), W = g1({ createImage: n, onLoad: d });
  e.muted = !0, e.addEventListener("loadedmetadata", V), e.addEventListener("error", _);
  function le(q) {
    q !== v && (v = q, e.pause(), q ? e.src = q : e.removeAttribute("src"), e.load(), R.setSource(!!q));
  }
  function ke() {
    R.playing && R.stop();
  }
  function F(q) {
    const J = O(q);
    P = k && J ? p1(J.clip, R.frame, q.timeline.fps, k.meta) : null, j.follow({
      src: (k == null ? void 0 : k.src) || "",
      time: P,
      playing: R.advancing,
      fps: q.timeline.fps
    });
  }
  return {
    get frame() {
      return R.frame;
    },
    get playing() {
      return R.playing;
    },
    get showsVideo() {
      return R.showsVideo;
    },
    get source() {
      return v;
    },
    pause: ke,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return k;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(q, J) {
      return k != null && k.frames ? W.picture(k.frames, P, k.meta, J) : j.picture(q, J);
    },
    toggle() {
      R.playing ? R.stop() : R.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: q, sources: J, state: ne, sticker: ge = null }) {
      if (k = q ? ge : null, !q)
        return ke(), le(""), F(ne), !1;
      for (const I of M)
        J.includes(I) || M.delete(I);
      const me = J.find((I) => I && !M.has(I)) || "", re = me !== g;
      re && (g = me, S = 0), le(g);
      const B = Rb(ne, { camera: b }) || !!g && R.state !== "error" || !!k;
      return B || ke(), (re || !B || !R.playing && R.frame >= G()) && R.frame !== Pa && R.seek(Pa), F(ne), B;
    },
    dispose() {
      R.dispose(), j.dispose(), e.removeEventListener("loadedmetadata", V), e.removeEventListener("error", _), e.pause(), e.removeAttribute("src"), e.load(), v = "";
    }
  };
}
const Vc = Math.PI / 180, ei = 180 / Math.PI, uP = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), fP = 260;
function v0(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const n = Number(t);
  return Number.isFinite(n) && n > 0 ? n : null;
}
function C1(e, t) {
  return t ? C1(t, e % t) : e;
}
function dP(e, t) {
  const r = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, o = r ? 1e3 : 1e6, a = r ? 1 : Math.max(e, t), c = Math.max(1, Math.round(e / a * o)), u = Math.max(1, Math.round(t / a * o)), d = C1(c, u) || 1;
  return `${Math.round(c / d)}:${Math.round(u / d)}`;
}
function Ys(e, t) {
  const n = v0(e), r = v0(t);
  if (n == null || r == null) return null;
  const o = n / r;
  return !Number.isFinite(o) || o <= 0 ? null : { width: n, height: r, ratio: o, label: dP(n, r) };
}
function Io(e) {
  var r;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const n = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_shot_id) || "");
  return t.find((o) => String((o == null ? void 0 : o.id) || "") === n) || t[0] || null;
}
function I1(e) {
  const t = Io(e), n = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), r = Math.abs(n) < 0.05 ? 0 : n;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? yi(t) : "",
    rollDeg: n,
    rollLabel: `${r.toFixed(1)}°`
  };
}
function jp(e, t, n = uP) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Math.max(0, Number((n == null ? void 0 : n.top) || 0)), c = Math.max(0, Number((n == null ? void 0 : n.right) || 0)), u = Math.max(0, Number((n == null ? void 0 : n.bottom) || 0)), d = Math.max(0, Number((n == null ? void 0 : n.left) || 0)), b = (A, O, G) => {
    const R = A + O, V = Math.max(0, G - 1), _ = R > V && R > 0 ? V / R : 1;
    return [A * _, O * _];
  }, [g, v] = b(d, c, r), [S, M] = b(a, u, o), k = {
    x: g,
    y: S,
    w: Math.max(1, r - g - v),
    h: Math.max(1, o - S - M)
  }, P = yp(k, t);
  return {
    x: k.x + (k.w - P.width) * 0.5,
    y: k.y + (k.h - P.height) * 0.5,
    w: P.width,
    h: P.height,
    safeRect: k
  };
}
function pP(e = {}, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = jp({ width: n, height: r }, 1), a = te(Number((e == null ? void 0 : e.fov) || 100), 1, 179), c = n / (2 * Math.tan(a * Vc * 0.5)), u = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, d = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, b = yb(d, pb(
    { x: n * 0.5, y: r * 0.5 },
    c,
    u
  )), g = hP(b, Ca(
    d.yaw_deg,
    d.pitch_deg,
    d.roll_deg
  ).right), v = bp({ width: o.w, height: o.h }, c);
  return {
    type: "add-frame",
    yawDeg: g.yaw,
    pitchDeg: g.pitch,
    rollDeg: g.roll,
    frameFovDeg: v.hFOV_deg
  };
}
function E1(e) {
  return {
    yaw: Ht(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * ei),
    pitch: te(Math.asin(te(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * ei, -89.9, 89.9)
  };
}
function hP(e, t) {
  const n = E1(e), r = Ca(n.yaw, n.pitch, 0), o = wf(t, e), a = {
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
    roll: au(Math.atan2(
      wf(u, r.up),
      wf(u, r.right)
    ) * ei)
  };
}
function O1(e, t = {}) {
  const n = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), r = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), o = jp({ width: n, height: r }, Ao(e)), a = Po(o, e), c = { x: o.x + o.w * 0.5, y: o.y + o.h * 0.5 }, u = yb(e, pb(
    c,
    a,
    { x: n * 0.5, y: r * 0.5 }
  )), d = E1(u);
  return {
    yaw: d.yaw,
    pitch: d.pitch,
    fov: te(2 * Math.atan(n / (2 * a)) * ei, 1, 179)
  };
}
function mP(e, t, n) {
  const r = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), o = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), a = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, c = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, u = Po(t, n), d = {
    width: Math.max(a, r - a) * 2,
    height: Math.max(c, o - c) * 2
  }, { halfW: b, halfH: g } = vp(d, u), v = {
    x: a - b,
    y: c - g,
    w: b * 2,
    h: g * 2
  }, S = v.x <= 0 && v.y <= 0 && v.x + v.w >= r && v.y + v.h >= o, M = r / o, k = Math.tan(hd * Vc), P = M >= 1 ? k : k * M, A = M >= 1 ? k / M : k;
  return {
    focalPx: u,
    rect: v,
    shot: {
      ...n,
      hFOV_deg: 2 * Math.atan(b / u) * ei,
      vFOV_deg: 2 * Math.atan(g / u) * ei
    },
    fallback: S ? null : {
      rect: { x: 0, y: 0, w: r, h: o },
      shot: {
        ...n,
        hFOV_deg: 2 * Math.atan(P) * ei,
        vFOV_deg: 2 * Math.atan(A) * ei
      }
    }
  };
}
function ea(e, t) {
  const n = Io(e);
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
function gP(e, t, n) {
  const r = Number((n == null ? void 0 : n.w) ?? (n == null ? void 0 : n.width)), o = Number((n == null ? void 0 : n.h) ?? (n == null ? void 0 : n.height));
  if (Number.isFinite(r) && r > 0 && Number.isFinite(o) && o > 0) {
    const c = Po(n, e);
    return bp(yp(n, t), c);
  }
  const a = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: a, hFOV_deg: Zl(a, t) };
}
function _0(e, t, n, { preserveOrientation: r = !1, safeRect: o = null } = {}) {
  let a = Ys(t, n);
  if (!a) return e;
  const c = Ao(e) >= 1;
  r && a.ratio >= 1 !== c && (a = Ys(a.height, a.width));
  const u = gP(e, a.ratio, o);
  return Math.abs(Number(e.hFOV_deg || 0) - u.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - u.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === a.label ? e : { ...e, ...u, aspect_id: a.label };
}
function F1(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Io(e)) return { state: e, changed: !1 };
    const r = String(t.id || `frame_${Date.now().toString(36)}`), o = hb({
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
    const r = Io(e);
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
    return ea(e, (r) => _0(
      r,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return ea(e, (r) => {
      const a = String(yi(r) || "").match(/^([0-9.]+):([0-9.]+)$/), c = a ? Ys(a[1], a[2]) : Ys(Ao(r), 1);
      return c ? _0(r, c.height, c.width, { safeRect: t.safeRect }) : r;
    });
  if (t.type === "set-roll") {
    const r = Number(t.value);
    return Number.isFinite(r) ? ea(e, (o) => {
      const a = au(r), c = Number(o.roll_deg ?? o.rot_deg ?? 0);
      if (Math.abs(c - a) <= 1e-12) return o;
      const u = { ...o, roll_deg: a };
      return delete u.rot_deg, u;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? ea(e, (r) => {
    const o = mb(r, t.scale);
    return o ? { ...r, ...o } : r;
  }) : t.type === "step-fov" ? ea(e, (r) => {
    const o = gb(r, t.direction);
    return o ? { ...r, ...o } : r;
  }) : t.type === "pan-camera" ? ea(e, (r) => {
    const o = L1(t.startShot || r, t);
    return Math.abs(Number(o.yaw_deg) - Number(r.yaw_deg || 0)) > 1e-12 || Math.abs(Number(o.pitch_deg) - Number(r.pitch_deg || 0)) > 1e-12 ? { ...r, yaw_deg: o.yaw_deg, pitch_deg: o.pitch_deg } : r;
  }) : { state: e, changed: !1 };
}
function T1({
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
  }, g = Math.hypot(Number(t.x || 0) - b.x, Number(t.y || 0) - b.y);
  if (u === "shift" && g < Math.min(d.w, d.h) * c) return null;
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
function D1(e, t, n = {}) {
  var c, u;
  if (!e || !t) return null;
  const r = Math.atan2(
    Number(t.y || 0) - Number(((c = e.center) == null ? void 0 : c.y) || 0),
    Number(t.x || 0) - Number(((u = e.center) == null ? void 0 : u.x) || 0)
  ), o = Number(e.accumulatedRad || 0) + fb(r, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: r, accumulatedRad: o },
    rollDeg: db(e.startRollDeg, o, {
      shiftKey: e.source === "alt" && n.shiftKey === !0
    })
  };
}
function L1(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const n = Math.max(1, Number(t.focalPx || 1)), r = t.invertX === !0 ? -1 : 1, o = t.invertY === !0 ? -1 : 1, a = Number(t.dx || 0) * r, c = Number(t.dy || 0) * o, u = Number(e.roll_deg ?? e.rot_deg ?? 0) * Vc, d = Math.cos(u), b = Math.sin(u), g = a / n, v = -c / n, S = g * d - v * b, M = g * b + v * d, k = Number(e.pitch_deg || 0) * Vc, P = Math.max(0.25, Math.abs(Math.cos(k)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(S) / P * ei),
    pitch_deg: te(Number(e.pitch_deg || 0) - Math.atan(M) * ei, -90, 90)
  };
}
function yP({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: n,
  onChange: r = () => {
  }
} = {}) {
  return y1({
    readState: e,
    reduce: F1,
    projectModel: I1,
    publishLiveState: t,
    commitState: n,
    onChange: r
  });
}
const Pe = Object.freeze({
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
}), bP = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, vP = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: bP(t[2])
})), _P = {
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
}, w0 = Object.fromEntries(
  Object.entries(_P).map(([e, t]) => [e, {
    name: t.name,
    elements: vP(t.body)
  }])
), Kt = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = ft(() => {
      const r = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(w0, r) ? w0[r] : null;
    });
    return (r, o) => n.value ? (oe(), fe("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: pt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (oe(!0), fe(qe, null, Pt(n.value.elements, (a, c) => (oe(), fe(qe, {
        key: `${n.value.name || e.icon || "icon"}-${a.tag}-${c}`
      }, [
        a.tag === "path" ? (oe(), fe("path", vi({
          key: 0,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "circle" ? (oe(), fe("circle", vi({
          key: 1,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "rect" ? (oe(), fe("rect", vi({
          key: 2,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "line" ? (oe(), fe("line", vi({
          key: 3,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polyline" ? (oe(), fe("polyline", vi({
          key: 4,
          ref_for: !0
        }, a.attrs), null, 16)) : a.tag === "polygon" ? (oe(), fe("polygon", vi({
          key: 5,
          ref_for: !0
        }, a.attrs), null, 16)) : ht("", !0)
      ], 64))), 128))
    ], 2)) : ht("", !0);
  }
}, pn = {
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
    return (r, o) => (oe(), Sr(Ix(e.tag), vi({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Iy(() => [
        Le(Kt, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, wP = ["aria-expanded", "disabled"], SP = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, xP = ["data-aspect", "disabled", "onClick"], kP = { class: "pano-cutout-aspect-custom" }, MP = ["disabled"], NP = ["disabled"], PP = ["data-custom-width", "data-custom-height", "disabled"], R1 = {
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
    ]), a = /* @__PURE__ */ en("1"), c = /* @__PURE__ */ en("1"), u = /* @__PURE__ */ en(null), d = ft(() => n.model.disabled === !0 || n.model.locked === !0 || n.model.hasShot === !1), b = ft(() => {
      const P = Array.isArray(n.model.aspectChoices) ? n.model.aspectChoices : [], A = String(n.model.aspectLabel || "");
      return P.length ? P.map((O) => {
        const G = typeof O == "string" ? O : String((O == null ? void 0 : O.value) || ""), R = typeof O == "string" ? O : String((O == null ? void 0 : O.label) || G);
        return {
          ...typeof O == "object" && O ? O : {},
          value: G,
          label: R,
          active: A ? G === A : (O == null ? void 0 : O.active) === !0
        };
      }) : o.map((O) => ({
        ...O,
        active: O.value === A
      }));
    }), g = ft(() => {
      var A;
      const P = String(n.model.aspectLabel || "").trim();
      return P || String(((A = b.value.find((O) => O.active === !0)) == null ? void 0 : A.label) || "Aspect");
    });
    Mo(g, (P) => {
      const A = String(P || "").match(/^([0-9.]+):([0-9.]+)$/);
      A && (a.value = A[1], c.value = A[2]);
    }, { immediate: !0 });
    function v(P) {
      r("action", P);
    }
    function S(P) {
      var A;
      n.model.aspectOpen === !0 && ((A = u.value) != null && A.contains(P.target) || v({ type: "close-aspect" }));
    }
    tu(() => {
      document.addEventListener("pointerdown", S, !0);
    }), el(() => {
      document.removeEventListener("pointerdown", S, !0);
    });
    function M(P) {
      const [A, O] = String(P.value || "").split(":");
      v({
        type: "set-aspect",
        width: A,
        height: O,
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
    return (P, A) => (oe(), fe("div", {
      ref_key: "rootElement",
      ref: u,
      class: pt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (oe(), Sr(pn, {
        key: 0,
        icon: e.model.aspectIcon || Qe(Pe).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: d.value },
        onClick: A[0] || (A[0] = (O) => v({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (oe(), fe("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: d.value,
        onClick: A[1] || (A[1] = (O) => v({ type: "toggle-aspect" }))
      }, [
        Le(Kt, {
          icon: e.model.aspectIcon || Qe(Pe).aspect
        }, null, 8, ["icon"]),
        Y("span", null, rt(g.value), 1),
        Le(Kt, {
          icon: Qe(Pe).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, wP)),
      ki(Y("div", SP, [
        (oe(!0), fe(qe, null, Pt(b.value, (O) => (oe(), fe("button", {
          key: O.value,
          class: pt(["pano-btn pano-frame-aspect-choice", { active: O.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": O.value,
          disabled: d.value,
          onClick: (G) => M(O)
        }, rt(O.label), 11, xP))), 128)),
        Y("div", kP, [
          ki(Y("input", {
            "onUpdate:modelValue": A[2] || (A[2] = (O) => a.value = O),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: d.value
          }, null, 8, MP), [
            [Fg, a.value]
          ]),
          A[4] || (A[4] = Y("span", { "aria-hidden": "true" }, ":", -1)),
          ki(Y("input", {
            "onUpdate:modelValue": A[3] || (A[3] = (O) => c.value = O),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: d.value
          }, null, 8, NP), [
            [Fg, c.value]
          ]),
          Y("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": a.value,
            "data-custom-height": c.value,
            disabled: d.value,
            onClick: k
          }, "Apply", 8, PP)
        ])
      ], 512), [
        [Eo, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, AP = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, CP = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ en(!1), n = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (r, o) => (oe(), fe("div", {
      class: pt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Lt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Lt(() => {
      }, ["stop"]))
    }, [
      Le(pn, {
        icon: Qe(Pe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: o[0] || (o[0] = Lt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Y("div", AP, [
        o[3] || (o[3] = Y("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (oe(!0), fe(qe, null, Pt(Qe(n), (a) => (oe(), fe("div", {
          key: a[0],
          class: "pano-cutout-node-help-row"
        }, [
          Y("kbd", null, rt(a[0]), 1),
          Y("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, IP = {
  class: "pano-view-unavailable",
  role: "status"
}, Hp = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, n) => (oe(), fe("div", IP, rt(Qe(n1)), 1));
  }
}, EP = { class: "pano-cutout-node-surface" }, OP = ["title", "disabled"], FP = { class: "value" }, TP = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, DP = {
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
    return (r, o) => (oe(), fe("div", EP, [
      Y("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: o[4] || (o[4] = Lt(() => {
        }, ["stop"])),
        onWheel: o[5] || (o[5] = Lt(() => {
        }, ["stop"]))
      }, [
        Y("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: o[0] || (o[0] = (a) => n({ type: "open-editor" }))
        }, [
          Le(Kt, {
            icon: Qe(Pe).fullscreen
          }, null, 8, ["icon"]),
          o[6] || (o[6] = Y("span", { class: "label" }, "Full Editor", -1))
        ]),
        Le(pn, {
          icon: e.model.hasShot ? Qe(Pe).delete : Qe(Pe).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: o[1] || (o[1] = (a) => n({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Le(R1, {
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
          onDblclick: o[2] || (o[2] = Lt((a) => n({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Le(Kt, {
            icon: Qe(Pe).roll
          }, null, 8, ["icon"]),
          Y("span", FP, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, OP),
        Le(pn, {
          icon: Qe(Pe).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: o[3] || (o[3] = (a) => n({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Le(CP)
      ], 32),
      e.model.hasShot === !1 ? (oe(), fe("div", TP, " Choose a view · + Add Frame ")) : ht("", !0),
      e.model.viewUnavailable ? (oe(), Sr(Hp, { key: 1 })) : ht("", !0)
    ]));
  }
}, V1 = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: n }) {
    const r = n, o = /* @__PURE__ */ en(null);
    let a, c = !1;
    function u() {
      if (!c) return { active: !1, intent: void 0 };
      const v = a;
      return a = void 0, c = !1, { active: !0, intent: v };
    }
    function d(v) {
      const S = o.value;
      return S instanceof HTMLInputElement ? (a = v, c = !0, S.value = "", S.click(), !0) : !1;
    }
    function b(v) {
      var P, A;
      const { active: S, intent: M } = u();
      if (!S) return;
      const k = ((A = (P = v.target) == null ? void 0 : P.files) == null ? void 0 : A[0]) || null;
      if (k) {
        r("file-selected", { intent: M, file: k });
        return;
      }
      r("file-cancelled", { intent: M });
    }
    function g() {
      const { active: v, intent: S } = u();
      v && r("file-cancelled", { intent: S });
    }
    return t({ open: d }), (v, S) => (oe(), fe("input", {
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
}, LP = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, RP = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ en(!1), n = Object.freeze([
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
    return (r, o) => (oe(), fe("div", {
      class: pt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: o[1] || (o[1] = Lt(() => {
      }, ["stop"])),
      onWheel: o[2] || (o[2] = Lt(() => {
      }, ["stop"]))
    }, [
      Le(pn, {
        icon: Qe(Pe).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: o[0] || (o[0] = Lt((a) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Y("div", LP, [
        o[3] || (o[3] = Y("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (oe(!0), fe(qe, null, Pt(Qe(n), (a) => (oe(), fe("div", {
          key: a[0],
          class: "pano-stickers-node-help-row"
        }, [
          Y("kbd", null, rt(a[0]), 1),
          Y("span", null, rt(a[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, VP = { class: "pano-stickers-node-surface" }, $P = ["disabled"], zP = ["aria-label", "data-tip"], jP = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, HP = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, GP = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ en(null);
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
    return (c, u) => (oe(), fe("div", VP, [
      Y("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: u[5] || (u[5] = Lt(() => {
        }, ["stop"])),
        onWheel: u[6] || (u[6] = Lt(() => {
        }, ["stop"]))
      }, [
        Y("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: u[0] || (u[0] = (d) => r({ type: "open-editor" }))
        }, [
          Le(Kt, {
            icon: Qe(Pe).fullscreen
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
          Le(Kt, {
            icon: Qe(Pe).image
          }, null, 8, ["icon"]),
          u[11] || (u[11] = Y("span", { class: "label" }, "Add Image", -1))
        ], 8, $P),
        Le(pn, {
          icon: e.model.locked ? Qe(Pe).lock_closed : Qe(Pe).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: u[1] || (u[1] = (d) => r({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Le(pn, {
          icon: Qe(Pe).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: u[2] || (u[2] = (d) => r({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Le(pn, {
          icon: Qe(Pe).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: u[3] || (u[3] = (d) => r({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Le(pn, {
          icon: e.model.isExternalSelection ? Qe(Pe).back_initial : Qe(Pe).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: u[4] || (u[4] = (d) => r({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Le(RP)
      ], 32),
      e.model.playable === !0 ? (oe(), fe("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: u[7] || (u[7] = Lt(() => {
        }, ["stop"])),
        onWheel: u[8] || (u[8] = Lt(() => {
        }, ["stop"])),
        onClick: u[9] || (u[9] = (d) => r({ type: "toggle-playback" }))
      }, [
        Le(Kt, {
          icon: e.model.playing ? Qe(Pe).pause : Qe(Pe).play
        }, null, 8, ["icon"])
      ], 40, zP)) : ht("", !0),
      e.model.hasStickers === !1 ? (oe(), fe("div", jP, " Add Image to place a sticker ")) : ht("", !0),
      e.model.dropActive === !0 ? (oe(), fe("div", HP, "Drop image to add")) : ht("", !0),
      Le(V1, {
        ref_key: "imageFilePickerRef",
        ref: n,
        onFileSelected: a
      }, null, 512),
      e.model.viewUnavailable ? (oe(), Sr(Hp, { key: 3 })) : ht("", !0)
    ]));
  }
}, S0 = 24;
function KP(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function Ts(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), r = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return n * n + r * r;
}
function $1(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r, r += 1) {
    const a = t[r], c = t[o];
    a.y > e.y != c.y > e.y && e.x < (c.x - a.x) * (e.y - a.y) / (c.y - a.y || 1e-12) + a.x && (n = !n);
  }
  return n;
}
function Dd(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const n = e.corners.findIndex((r) => Ts(r, t) <= 121);
  if (n >= 0) {
    const r = e.corners[n], o = r.x - e.center.x, a = r.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: n,
      cursor: o * a >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return Ts(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : $1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function WP(e, t, { edges: n = !1, resize: r = !0, emptyCursor: o = "default" } = {}) {
  if (r && n && Array.isArray(e.edgeMidpoints)) {
    const c = e.edgeMidpoints.find((u) => Ts(u, t) <= 169);
    if (c) {
      const u = c.edge === "left" || c.edge === "right";
      return { kind: u ? "scale_x" : "scale_y", cursor: u ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
    }
  }
  const a = r ? e.corners.findIndex((c) => Ts(c, t) <= 121) : -1;
  if (a >= 0) {
    const c = e.corners[a], u = c.x - e.center.x, d = c.y - e.center.y;
    return { kind: "scale", cornerIdx: a, cursor: u * d >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return Ts(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : $1(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: o };
}
function Gp(e, t, { selected: n = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = n ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = n ? 2 : 1, e.beginPath();
  let r = !1;
  return t.forEach((o) => (Array.isArray(o) ? o : []).forEach((a) => {
    r ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), r = !0);
  })), r ? (e.closePath(), e.stroke(), !0) : !1;
}
function z1(e, t, { accent: n = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = n, t.corners.forEach((r) => {
    e.beginPath(), e.arc(r.x, r.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = n, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function ds(e, t) {
  const n = t.project(e);
  if (!Number.isFinite(n.z)) return null;
  const r = Math.max(t.width, t.height) * 2;
  return {
    x: te(n.x, -r, t.width + r),
    y: te(n.y, -r, t.height + r),
    rawZ: n.z
  };
}
function BP(e) {
  const t = Ca(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(te(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * Mt * 0.5),
    tanY: Math.tan(te(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * Mt * 0.5)
  };
}
function ho(e, t, n) {
  return gp(kc(
    kc(e.centerDir, Mc(e.right, t)),
    Mc(e.up, n)
  ));
}
function Kp(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const n = BP(e), r = ds(n.centerDir, t);
  if (!r) return { visible: !1 };
  const o = [
    ho(n, -n.tanX, n.tanY),
    ho(n, n.tanX, n.tanY),
    ho(n, n.tanX, -n.tanY),
    ho(n, -n.tanX, -n.tanY)
  ].map((S) => ds(S, t)), a = Array.from({ length: 4 }, (S, M) => {
    const k = [];
    for (let P = 0; P <= 28; P += 1) {
      const A = P / 28;
      let O, G;
      M === 0 ? (O = -n.tanX + 2 * n.tanX * A, G = n.tanY) : M === 1 ? (O = n.tanX, G = n.tanY - 2 * n.tanY * A) : M === 2 ? (O = n.tanX - 2 * n.tanX * A, G = -n.tanY) : (O = -n.tanX, G = -n.tanY + 2 * n.tanY * A);
      const R = ds(ho(n, O, G), t);
      R && k.push({ x: R.x, y: R.y });
    }
    return k;
  }), c = ds(ho(n, 0, n.tanY), t), u = ds(
    ho(n, 0, n.tanY + Math.max(n.tanY * 0.43, 0.053)),
    t
  ), d = [r, ...o, c, u];
  if (d.some((S) => !S || !Number.isFinite(S.x) || !Number.isFinite(S.y)))
    return { visible: !1 };
  if (!d.some((S) => S.rawZ > 1e-4)) return { visible: !1 };
  const b = u.x - c.x, g = u.y - c.y, v = Math.hypot(b, g) || 1;
  return {
    center: { x: r.x, y: r.y },
    corners: o.map((S) => ({ x: S.x, y: S.y })),
    boundaryEdges: a,
    rotateStemBase: { x: c.x, y: c.y },
    rotateHandle: {
      x: c.x + b / v * S0,
      y: c.y + g / v * S0
    },
    visible: !0
  };
}
function x0(e, t, n, r) {
  const o = (Array.isArray(e) ? e : []).filter((c) => c && c.visible !== !1).map((c) => ({ item: c, geometry: Kp(c, r) })).filter((c) => c.geometry.visible).sort((c, u) => {
    var d, b;
    return Number(((d = u.item) == null ? void 0 : d.z_index) || 0) - Number(((b = c.item) == null ? void 0 : b.z_index) || 0);
  }), a = o.find((c) => {
    var u;
    return String(((u = c.item) == null ? void 0 : u.id) || "") === String(t || "");
  });
  if (a) {
    const c = Dd(a.geometry, n);
    if (c.kind === "scale" || c.kind === "rotate") return { ...a, hit: c };
  }
  for (const c of o) {
    const u = Dd(c.geometry, n);
    if (u.kind !== "none") return { ...c, hit: u };
  }
  return null;
}
function UP(e, t, n) {
  const r = n.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Ht(Math.atan2(r.x, r.z) * hn),
    pitch_deg: Math.asin(te(r.y, -1, 1)) * hn
  };
}
function YP(e, t, n) {
  const r = Math.max(1, Number(n || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: te(Number((e == null ? void 0 : e.hFOV_deg) || 20) * r, 1, 179),
    vFOV_deg: te(Number((e == null ? void 0 : e.vFOV_deg) || 20) * r, 1, 179)
  };
}
function XP(e, t, n, r = !1) {
  const o = (Number(n || 0) - Number(t || 0)) * hn;
  let a = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - o;
  return r && (a = Math.round(a / 45) * 45), { ...e, rot_deg: a };
}
let Vl = null;
function Wp() {
  return Vl || (Vl = new Promise((e) => {
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
  }), Vl);
}
function br(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function qP(e, t = 1024) {
  const n = Math.max(1, Math.round(br(e, 2048))), r = Math.min(n, Math.max(1, Math.round(br(t, 1024))));
  return { width: r, height: Math.max(1, Math.round(r * 0.5)) };
}
function JP(e, t, n) {
  const r = br(t), o = br(n), a = e == null ? void 0 : e.bbox;
  if (!a || r < 1 || o < 1) return null;
  const c = br(a.u0), u = br(a.v0), d = br(a.u1), b = br(a.v1);
  if (d <= c || b <= u) return null;
  const g = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((c + d) * 0.5 + br(g.du)) * r,
    centerY: ((u + b) * 0.5 + br(g.dv)) * o,
    width: (d - c) * r,
    height: (b - u) * o,
    rotationRad: br(g.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, br(g.scale, 1)),
    wrapOffsets: [-r, 0, r]
  };
}
function ZP(e, t, n) {
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
function QP() {
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
      const g = [...u.listeners];
      u.listeners.clear(), g.forEach((v) => v()), n();
    };
    return d.onload = b, d.onerror = b, d.src = a, n(), d;
  }
  function o(a, c, u, d = null) {
    if (!a || a.visible === !1 || String(a.layerKind || "paint") !== "paint") return null;
    const b = String(a.rasterDataUrl || "").trim(), g = JP(a, c, u);
    if (!b.startsWith("data:") || !g) return null;
    const v = ZP(a, c, u), S = String((a == null ? void 0 : a.id) || "").trim() || v, M = t.get(S);
    if ((M == null ? void 0 : M.revision) === v) return { source: M.source, revision: v };
    const k = r(b, d), P = Number(k.naturalWidth || k.width || 0), A = Number(k.naturalHeight || k.height || 0);
    if (!k.complete || P < 1 || A < 1) return null;
    const O = In({ label: "raster-object" });
    O.width = Math.max(1, Math.round(c)), O.height = Math.max(1, Math.round(u));
    const G = O.getContext("2d");
    return G ? (g.wrapOffsets.forEach((R) => {
      G.save(), G.translate(g.centerX + R, g.centerY), G.rotate(g.rotationRad), G.scale(g.scale, g.scale), G.drawImage(
        k,
        -g.width * 0.5,
        -g.height * 0.5,
        g.width,
        g.height
      ), G.restore();
    }), t.set(S, { revision: v, source: O }), { source: O, revision: v }) : null;
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
function eA(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function tA(e, t = "", n = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(n || 0))].join("|");
}
function nA({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new WeakMap(), o = Math.max(1, Math.trunc(Number(t || 32)));
  function a(v) {
    if (!v) return;
    v.entry.listeners.delete(v);
    const S = r.get(v.owner);
    (S == null ? void 0 : S.get(v.key)) === v && S.delete(v.key);
  }
  function c(v, S, M, k) {
    if (!v || typeof k != "function" || M.settled) return;
    let P = r.get(v);
    P || (P = /* @__PURE__ */ new Map(), r.set(v, P));
    const A = P.get(S);
    if ((A == null ? void 0 : A.entry) === M) {
      A.callback = k;
      return;
    }
    a(A);
    const O = { owner: v, key: S, entry: M, callback: k };
    P.set(S, O), M.listeners.add(O);
  }
  function u(v, S) {
    v.settled || (v.settled = !0, v.image.onload = null, v.image.onerror = null, !S && n.get(v.key) === v && n.delete(v.key), [...v.listeners].forEach((M) => {
      a(M);
      try {
        M.callback(v.image, S);
      } catch {
      }
    }), d(o));
  }
  function d(v) {
    if (!(n.size <= v))
      for (const [S, M] of n) {
        if (n.size <= v) break;
        !M.settled || M.listeners.size > 0 || (M.image.onload = null, M.image.onerror = null, n.delete(S));
      }
  }
  function b(v, S, M, k = null) {
    const P = String(S || ""), A = String(M || "");
    if (!P || !A) return null;
    let O = n.get(P);
    if (O)
      n.delete(P), n.set(P, O);
    else {
      d(o - 1);
      const R = e || globalThis.Image;
      if (typeof R != "function") return null;
      const V = new R();
      O = { key: P, image: V, listeners: /* @__PURE__ */ new Set(), settled: !1 }, n.set(P, O), V.onload = () => u(O, !0), V.onerror = () => u(O, !1), V.src = A;
    }
    return O.settled || O.image.complete && Number(O.image.naturalWidth || O.image.width || 0) > 0 || c(v, P, O, k), O.image;
  }
  function g(v) {
    const S = r.get(v);
    S && ([...S.values()].forEach(a), r.delete(v), d(o));
  }
  return { get: b, disposeOwner: g };
}
const vs = /* @__PURE__ */ new WeakMap();
function j1(e, t, { editor: n = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let r = vs.get(e);
  r || (r = [], vs.set(e, r));
  const o = { handler: t, editor: n };
  r.push(o);
  let a = !0;
  return () => {
    if (!a) return;
    a = !1;
    const c = vs.get(e);
    if (!c) return;
    const u = c.indexOf(o);
    u >= 0 && c.splice(u, 1), c.length === 0 && vs.delete(e);
  };
}
function Si(e, ...t) {
  const n = vs.get(e), r = (n == null ? void 0 : n.findLast((o) => o.editor)) || (n == null ? void 0 : n.at(-1));
  return r ? (r.handler(...t), !0) : !1;
}
const sc = Object.freeze({
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
}), H1 = "PanoramaSuite.Editor.ViewControls", rA = {
  id: H1,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(sc).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function iA(e) {
  return Object.hasOwn(sc, e) ? sc[e] : sc.default;
}
function oA(e, { button: t, shiftKey: n = !1, altKey: r = !1, ctrlKey: o = !1, metaKey: a = !1 }) {
  if (o || a) return null;
  const c = e.bindings.find((u) => u.button === t && !!u.shift === n && !!u.alt === r);
  return (c == null ? void 0 : c.action) ?? null;
}
function aA(e, t) {
  return e.bindings.some((n) => n.button === t);
}
const $c = "state_json";
function xi(e, t) {
  var n;
  return ((n = e == null ? void 0 : e.widgets) == null ? void 0 : n.find((r) => (r == null ? void 0 : r.name) === t)) || null;
}
function sA(e) {
  var c, u;
  const t = xi(e, $c);
  if (!t) return !1;
  const n = String(t.value ?? "").trim();
  if (n && n !== "{}") return !1;
  const r = zb(n, {
    coverage: (c = xi(e, "coverage")) == null ? void 0 : c.value
  }), o = F1(r, { type: "add-frame" });
  if (!o.changed) return !1;
  const a = JSON.stringify(o.state);
  return t.value = a, (u = t.callback) == null || u.call(t, a), !0;
}
function Bp(e, t) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const n = xi(e, "coverage");
  if (!n) return;
  const r = typeof n.callback == "function" ? n.callback.bind(n) : null;
  n.callback = function(...o) {
    var c, u, d, b, g, v, S, M, k;
    const a = r ? r(...o) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (b = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), (S = (v = e.graph) == null ? void 0 : v.setDirtyCanvas) == null || S.call(v, !0, !0), (k = (M = t == null ? void 0 : t.canvas) == null ? void 0 : M.setDirty) == null || k.call(M, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function lA(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function k0(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function cA(e) {
  var g, v, S, M, k, P;
  if (!e) return;
  const t = xi(e, "coverage"), n = xi(e, "bg_color"), r = xi(e, $c), o = xi(e, "sticker_state");
  if (!t || !n || !r) return;
  const a = String(t.value ?? "").trim(), c = String(n.value ?? "").trim(), u = String(r.value ?? "").trim();
  if (!(!/^(180|360)$/.test(a) && lA(a) && (k0(c) || c === ""))) return;
  let b = "360";
  if (k0(c))
    try {
      b = String(Jn((g = JSON.parse(c)) == null ? void 0 : g.coverage));
    } catch {
      b = "360";
    }
  t.value = b, (v = t.callback) == null || v.call(t, b), n.value = a, (S = n.callback) == null || S.call(n, a), r.value = c, (M = r.callback) == null || M.call(r, c), o && (o.value = u, (k = o.callback) == null || k.call(o, u)), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
}
function lc(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((r) => {
    var a, c;
    const o = String((r == null ? void 0 : r.name) || "");
    (o === t || o.trim() === t || o.toLowerCase().includes(String(t).toLowerCase())) && (r.__panoHidden || (r.__panoHidden = !0, r.__panoComputeSizeBeforeHide = r.computeSize, r.computeSize = () => [0, 0], r.type = "hidden", r.hidden = !0, r.options = { ...r.options || {}, hidden: !0 }, (a = r.element) != null && a.style && (r.element.style.display = "none"), (c = r.parentEl) != null && c.style && (r.parentEl.style.display = "none")));
  });
}
function Ld(e, t, n) {
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
async function uA(e, { tolerateOperationFailure: t = !1 } = {}) {
  const n = e == null ? void 0 : e.__panoPendingStickerUploads;
  if (n instanceof Map)
    for (; n.size > 0; ) {
      const r = Array.from(n.entries());
      t ? await Promise.allSettled(r.map(([, o]) => o)) : await Promise.all(r.map(([, o]) => o)), r.forEach(([o, a]) => {
        n.get(o) === a && n.delete(o);
      });
    }
}
function _s(e, t, n) {
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
async function G1(e, t = {}) {
  var r;
  await uA(e, t);
  const n = (e == null ? void 0 : e.__panoStateFlushers) instanceof Set ? Array.from(e.__panoStateFlushers) : [];
  for (const o of n) await o();
  await ((r = e == null ? void 0 : e.__panoFlushStateBeforeQueue) == null ? void 0 : r.call(e));
}
function fA(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const n = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...r) {
    return await G1(e), n ? n.apply(this, r) : this.value;
  };
}
function dA(e) {
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
function pA(e) {
  var r;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((o) => String((o == null ? void 0 : o.name) || "") === "image" && String((o == null ? void 0 : o.type) || "") === "IMAGE") || (r = e == null ? void 0 : e.addOutput) == null || r.call(e, "image", "IMAGE");
}
function ps(e, {
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
  function g(v) {
    var k;
    const S = `editor_btn|${n}`;
    if (v.__panoPreviewAttached === !0 && v.__panoPreviewMountKey === S) return;
    dA(v), Bp(v, t), lc(v, $c);
    const M = xi(v, $c);
    if (fA(v, M), M && !M.__panoPreviewPatchedCb) {
      M.__panoPreviewPatchedCb = !0;
      const P = M.callback;
      M.callback = (A) => {
        var G;
        const O = P ? P(A) : void 0;
        return (G = v.setDirtyCanvas) == null || G.call(v, !0, !1), O;
      };
    }
    if (n === "PanoramaStickers") {
      v.__panoSceneStateV2 = d, v.__panoStudio = b;
      const P = xi(v, "bg_color");
      !d && P && (P.value == null || String(P.value).trim() === "" || String(P.value).toLowerCase() === "#000000") && (P.value = "#00ff00", (k = P.callback) == null || k.call(P, "#00ff00")), Ld(v, r, () => o(v, "stickers")), u && (a(v, {
        enabled: !0,
        buttonText: r,
        onOpen: () => o(v, "stickers")
      }), v.__panoStickersNodeSurface && lc(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260])), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = S;
      return;
    }
    v.__panoSceneStateV2 = d, Ld(v, r, () => o(v, "cutout")), d || c(v, {
      buttonText: r,
      onOpen: () => o(v, "cutout")
    }), v.__panoCutoutNodeSurface && lc(v, r), (!Array.isArray(v.size) || v.size[0] < 10 || v.size[1] < 10) && (v.size = [360, 260]), v.__panoPreviewAttached = !0, v.__panoPreviewMountKey = S;
  }
  for (const v of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const S = e.prototype[v];
    e.prototype[v] = function() {
      const M = S ? S.apply(this, arguments) : void 0;
      v === "onNodeCreated" && n === "PanoramaCutout" && !d && sA(this), v === "onConfigure" && n === "PanoramaStickers" && !d && this.widgets && cA(this);
      const k = !!this.__panoPreviewAttached;
      return (v === "onNodeCreated" || this.widgets) && g(this), v === "onAdded" && k && Si(this, "attach"), M;
    };
  }
}
function hA(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), r;
  };
  const n = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const r = n ? n.apply(this, arguments) : void 0;
    return pA(this), r;
  };
}
function mA(e, {
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
    Bp(e, t);
    const d = (b = e) => n(b, "stickers", { readOnly: !0, hideSidebar: !1 });
    Ld(e, "Open Preview", () => d(e)), r(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: d
    }), e.__panoPreviewNodeSurface && lc(e, "Open Preview"), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  o(a);
}
function gA({
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
    settings: [rA, iM],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Rg],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Rg.id] }],
    beforeRegisterNodeDef(d, b) {
      const g = String((b == null ? void 0 : b.name) || "");
      (g === "PanoramaStickers" || g === "Panorama Stickers") && ps(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), g === "PanoramaStickersNode" && ps(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), g === "PanoramaStudio" && ps(d, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0,
        studio: !0
      }), (g === "PanoramaCutout" || g === "Panorama Cutout") && ps(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u
      }), g === "PanoramaCutoutNode" && ps(d, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: n,
        attachCutout: r,
        enableStickersPreview: u,
        sceneStateV2: !0
      }), Nc(g) && hA(d);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(d) {
      d.__panoPreviewAttached && a(d);
    },
    nodeCreated(d) {
      const b = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
      Bp(d, e), Nc(b) && mA(d, { app: e, openEditor: t, attachPreview: o, requestFrame: c });
    }
  };
}
const yA = /\.(png|jpe?g|webp|gif|bmp)$/i;
function Tr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : yA.test(String(e.name || "")) : !1;
}
function Up(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((n) => {
    const r = String((n == null ? void 0 : n.type) || "").trim().toLowerCase();
    return (n == null ? void 0 : n.kind) === "file" && (!r || r.startsWith("image/") || r === "application/octet-stream");
  }) : Array.from(e.files || []).some((n) => Tr(n)) : !1;
}
function bA(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const n = typeof t.onActive == "function" ? t.onActive : () => {
  }, r = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, o = (d) => {
    var b, g, v;
    (b = d == null ? void 0 : d.preventDefault) == null || b.call(d), (g = d == null ? void 0 : d.stopPropagation) == null || g.call(d), (v = d == null ? void 0 : d.stopImmediatePropagation) == null || v.call(d);
  }, a = (d) => {
    if (Up(d == null ? void 0 : d.dataTransfer)) {
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
    var g;
    const b = Array.from(((g = d == null ? void 0 : d.dataTransfer) == null ? void 0 : g.files) || []).find((v) => Tr(v));
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
async function ws(e, t = {}) {
  var c, u, d, b;
  if (!Tr(e)) throw new TypeError("A supported image file is required.");
  const n = t.ImageCtor || globalThis.Image, r = t.createObjectURL || ((u = (c = globalThis.URL) == null ? void 0 : c.createObjectURL) == null ? void 0 : u.bind(globalThis.URL)), o = t.revokeObjectURL || ((b = (d = globalThis.URL) == null ? void 0 : d.revokeObjectURL) == null ? void 0 : b.bind(globalThis.URL));
  if (typeof n != "function" || typeof r != "function")
    throw new Error("Image decoding is unavailable.");
  const a = r(e);
  try {
    const g = await new Promise((v, S) => {
      const M = new n();
      M.onload = () => v(M), M.onerror = () => S(new Error("image load failed")), M.src = a;
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
async function vo(e, { fetchApi: t } = {}) {
  if (!Tr(e)) throw new TypeError("A supported image file is required.");
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
const M0 = /* @__PURE__ */ new WeakSet(), N0 = /* @__PURE__ */ new WeakSet();
let P0 = 0;
function Rd(e) {
  if (!e || typeof e != "object" || N0.has(e)) return e;
  const t = String(e.type || "preview");
  return P0 += 1, e.type = `${t}:pano-${P0}`, N0.add(e), e;
}
function zc(e) {
  if (!e || typeof e != "object" || M0.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let n = !1;
  return e.onRemove = function(...r) {
    if (!n)
      return n = !0, t == null ? void 0 : t.apply(this, r);
  }, M0.add(e), e;
}
function K1(e, t) {
  var r, o;
  if (!t || ((o = (r = zc(t)) == null ? void 0 : r.onRemove) == null || o.call(r), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const n = e.widgets.indexOf(t);
  return n < 0 ? !1 : (e.widgets.splice(n, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > n && e.widgets_values.splice(n, 1), !0);
}
function vA({ requestFrame: e, cancelFrame: t, restore: n } = {}) {
  let r = 0, o = null, a = !1;
  return { schedule: (d) => a || r || typeof e != "function" ? !1 : (o = d, r = e(() => {
    r = 0;
    const b = o;
    o = null, a || n == null || n(b);
  }), !0), dispose: () => {
    a || (a = !0, r && typeof t == "function" && t(r), r = 0, o = null);
  } };
}
const { app: Wt } = Bl;
j2((e) => Ui(e.id));
H2(Qt);
const Yp = nA(), { linkedVideoFile: _A } = d1({ app: Wt, api: Qt });
function Vd() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Bl == null ? void 0 : Bl.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const wA = "pano_suite.ui_settings.v1", SA = 120, xA = 2048;
function A0() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const n = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(wA)) || "").trim();
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
function kA() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function hs(e) {
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
function MA() {
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
function $d(e) {
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
function W1(e) {
  const t = $d(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function NA(e, t, n) {
  W1(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(n))]);
}
function zd(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Xp(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function B1(e) {
  return Nc(Xp(e));
}
function C0(e = null) {
  var a, c;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), r = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", o = String(((c = (a = Wt == null ? void 0 : Wt.canvas) == null ? void 0 : a.constructor) == null ? void 0 : c.name) || "");
  return [t, r, n, o].join("|");
}
function U1(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const r = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", a = zd(e);
      this.activeBackend = a;
      const c = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", u = e.__panoPreviewNoPreview === !0, d = n.noPreview === !0;
      if (a === o && a !== "none" && c === r && u === d) {
        e.__panoAttachOptions = { ...n, mode: r }, e.__panoPreviewMode = r, e.__panoPreviewNoPreview = d, e.__panoPreviewButtonText = String(n.buttonText || (r === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      a !== "none" && cc(e), yC(e, { ...n, mode: r, __panoForcedPath: o }), this.activeBackend = zd(e);
    },
    rebind(n = {}) {
      const r = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      cc(e), this.activeBackend = "none", this.attach({ ...n, mode: r });
    },
    teardown() {
      cc(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function PA(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function cc(e, t = {}) {
  var r, o, a, c, u;
  if (!e) return;
  jd.unregister(e), PA(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      const g = String((b == null ? void 0 : b.name) || ""), v = String((b == null ? void 0 : b.type) || ""), S = Vd();
      return g === S || v === S || g === "pano_preview" || v === "pano_preview" ? !0 : g === "preview" && v === "pano_preview";
    }).forEach((b) => YA(e, b));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor;
}
function AA(e, t = "#00ff00") {
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
function CA(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = va(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Yn(e) {
  var u, d;
  const t = CA(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), r = String(((u = va(e, "bg_color")) == null ? void 0 : u.value) || "#1a1a1e"), o = Number(((d = va(e, "coverage")) == null ? void 0 : d.value) || 360) === 180 ? 180 : 360, a = e.__panoStateCache;
  if (a && a.source === t && a.liveVersion === n && a.bg === r && a.coverage === o)
    return a.parsed;
  const c = e.__panoSceneStateV2 && typeof t == "string" ? jb(t, { backgroundColor: r, coverage: o, active: Kb(e) }) : AA(t, r);
  return c.coverage = o, e.__panoStateCache = { source: t, liveVersion: n, bg: r, coverage: o, parsed: c }, c;
}
function va(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function IA(e, t) {
  var n, r;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((r = e._nodes_by_id) == null ? void 0 : r[String(t)]) || null;
}
function Y1(e, t, n = null) {
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
  return !r && n != null && (r = IA(e == null ? void 0 : e.graph, n)), r;
}
function EA(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function X1(e, t = []) {
  const n = EA(e), r = [];
  return t.forEach((o) => {
    n.includes(String(o)) && r.push(String(o));
  }), n.forEach((o) => {
    qi.includes(o) && !r.includes(o) && r.push(o);
  }), r.length ? r : t;
}
function I0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((r) => String(r).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function jc(e, t) {
  const n = I0(e), r = I0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function OA(e, t) {
  var n;
  return Y1(e, t, e.graph ? (n = e.getInputLink(t)) == null ? void 0 : n.origin_id : null);
}
function FA(e, t = qi) {
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return /* @__PURE__ */ new Set();
  const o = X1(e, t).map((u) => n.findIndex((d) => String((d == null ? void 0 : d.name) || "") === String(u))).filter((u) => u >= 0), a = n.map((u, d) => ({ input: u, idx: d })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  return Y2(e, c, OA);
}
const jd = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = Qt) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, r = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((a) => {
        var d, b, g, v, S;
        if (!a) return;
        const c = jc(r, a == null ? void 0 : a.id);
        String(a.__panoPreviewMode || "") === "cutout" && !c || !c && ![...FA(a)].some((M) => jc(r, M)) || f1(a.__panoExecutedOutputs ?? (a.__panoExecutedOutputs = /* @__PURE__ */ new Map()), r, n.output) || (q1(a), (b = (d = a.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || b.call(d), (g = a.setDirtyCanvas) == null || g.call(a, !0, !0), (S = (v = a.graph) == null ? void 0 : v.setDirtyCanvas) == null || S.call(v, !0, !0), String(a.__panoPreviewMode || ""), String(a.__panoPreviewMode || ""), void 0);
      });
    }, Qt.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = Qt) != null && e.removeEventListener) || (Qt.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function Hc(e) {
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
  return typeof ((a = Qt) == null ? void 0 : a.apiURL) == "function" ? Qt.apiURL(o) : o;
}
function TA(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function DA(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const r = n.split("/").filter(Boolean);
  if (!r.length) return { filename: "", subfolder: "" };
  const o = String(r.pop() || "").trim(), a = r.join("/");
  return { filename: o, subfolder: a };
}
function LA(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((r) => {
    const o = String(r || "").trim();
    !o || n.has(o) || (n.add(o), t.push(o));
  }), t;
}
function RA(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (TA(t)) return [t];
  const { filename: n, subfolder: r } = DA(t);
  if (!n) return [t];
  const o = ["temp", "output", "input"].map((a) => Hc({
    filename: n,
    subfolder: r,
    type: a
  }));
  return LA([...o, t]);
}
function VA(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Hc({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ui(e) {
  const t = Wt == null ? void 0 : Wt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  const o = n;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (jc(a, o)) return t.get(a);
  } else {
    const a = Object.keys(t);
    for (const c of a)
      if (jc(c, o)) return t[c];
  }
  return null;
}
function Ds(e, t, n = null) {
  const r = n || Ui(e == null ? void 0 : e.id), o = r != null && r.ui && Object.prototype.hasOwnProperty.call(r.ui, t) ? r.ui[t] : r == null ? void 0 : r[t];
  return Array.isArray(o) ? o[0] : o;
}
function sr(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return sr(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), r = String(e[2] || "output").trim() || "output";
      return Hc({ filename: t, subfolder: n, type: r });
    }
    for (const n of e) {
      const r = sr(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Hc(e);
}
function Gc(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Vf(e) {
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
function qp(e, t) {
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
function $A(e) {
  const t = [], n = /* @__PURE__ */ new Set(), r = (a) => {
    Array.isArray(a) && a.forEach((c) => t.push(c));
  }, o = (a, c = 0) => {
    !a || c > 3 || n.has(a) || typeof a == "object" && (n.add(a), r(a.images), o(a.output, c + 1), o(a.ui, c + 1), o(a.data, c + 1), o(a.result, c + 1));
  };
  return o(e, 0), t;
}
function zA(e, t) {
  try {
    e.__panoOwnOutputRev = eA(e.__panoOwnOutputRev);
    const n = $A(t);
    let r = "";
    for (const o of n)
      if (r = sr(o), r) break;
    r ? (e.__panoOwnOutputSrc = String(r || ""), qp(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function _a(e) {
  var t;
  (t = e == null ? void 0 : e.__panoOwnOutputVideoCache) == null || t.player.destroy(), e && (e.__panoOwnOutputVideoCache = null);
}
function jA(e, t = ["pano_videos"], n = null) {
  const r = e == null ? void 0 : e.id;
  if (r == null) return null;
  if (!xn(e, "background"))
    return _a(e), null;
  const o = Ui(r), a = Rp(o, t, sr);
  if (!a)
    return _a(e), null;
  const c = Number((e == null ? void 0 : e.__panoOwnOutputRev) || 0), u = qp(a, c), d = `${t.join("|")}:${u}`, b = e.__panoOwnOutputVideoCache;
  if (b && b.key === d) return b.player.failed() ? null : b.player.video;
  _a(e);
  const g = X2({
    documentRef: document,
    src: u,
    onFrame: n
  });
  return g ? (e.__panoOwnOutputVideoCache = { key: d, player: g }, g.video) : null;
}
function HA(e, t = []) {
  var b, g;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const o = X1(e, t).map((v) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(v))).filter((v) => v >= 0), a = n.map((v, S) => ({ input: v, idx: S })).filter(({ input: v }) => String((v == null ? void 0 : v.type) || "").toUpperCase() === "IMAGE").map(({ idx: v }) => v), c = [.../* @__PURE__ */ new Set([...o, ...a])];
  for (const v of c) {
    const S = n[v], M = e.graph ? e.getInputLink(v) : null;
    if ((M == null ? void 0 : M.origin_id) == null) continue;
    const k = M.origin_id, P = Y1(e, v, k);
    if (!P) continue;
    const A = Number(M.origin_slot ?? 0), O = Ui((P == null ? void 0 : P.id) ?? k), G = Array.isArray(O == null ? void 0 : O.images) ? O.images : [];
    if (G.length) {
      const j = [];
      A >= 0 && A < G.length && j.push(G[A]), j.push(...G);
      for (const W of j.filter((le) => !oc(le))) {
        const le = sr(W);
        if (le)
          return String((S == null ? void 0 : S.name) || ""), { src: `${le}&pano_src=${Ed(O)}`, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let R = [];
    try {
      R = typeof (Wt == null ? void 0 : Wt.getNodeImageUrls) == "function" ? Wt.getNodeImageUrls(P) || [] : [];
    } catch {
      R = [];
    }
    if (Array.isArray(R) && R.length) {
      const j = [];
      A >= 0 && A < R.length && j.push(R[A]), j.push(...R);
      for (const W of j) {
        const le = sr(W);
        if (le)
          return String((S == null ? void 0 : S.name) || ""), { src: le, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const V = Array.isArray(P == null ? void 0 : P.imgs) ? P.imgs : [];
    if (V.length) {
      const j = [];
      A >= 0 && A < V.length && j.push(V[A]), j.push(...V);
      for (const W of j) {
        const le = sr(W);
        if (le)
          return String((S == null ? void 0 : S.name) || ""), { src: le, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const _ = (b = P == null ? void 0 : P.widgets) == null ? void 0 : b.find((j) => String((j == null ? void 0 : j.name) || "").toLowerCase() === "image");
    if (_) {
      let j = sr(_.value);
      if (j && !j.includes("/") && !j.includes(":") && (P.comfyClass === "LoadImage" || P.type === "LoadImage") && (j = Qt.apiURL(`/view?filename=${encodeURIComponent(j)}&type=input&subfolder=`)), j)
        return String((S == null ? void 0 : S.name) || ""), { src: j, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const u = xn(e, "background") ? Ui(e == null ? void 0 : e.id) : null, d = [];
  if (Array.isArray(u == null ? void 0 : u.pano_input_images) && d.push(...u.pano_input_images), Array.isArray((g = u == null ? void 0 : u.ui) == null ? void 0 : g.pano_input_images) && d.push(...u.ui.pano_input_images), d.length > 0)
    for (const v of d) {
      const S = sr(v);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function GA(e, t = [], n = {}) {
  const r = HA(e, t), o = String((r == null ? void 0 : r.src) || "").trim();
  if (!o) return null;
  const a = RA(o);
  if (!a.length) return null;
  const c = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = t.join("|") || "image", d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === o && d.img) return d.img;
  if (d && d.pendingSrcRaw === o && d.pendingImg)
    return c && d.img && (d.img.complete || d.img.naturalWidth || d.img.width) ? d.img : d.pendingImg;
  const b = new Image(), g = d || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  g.pendingSrcRaw = o, g.pendingResolvedSrc = "", g.pendingImg = b, e.__panoLinkedInputImageCache.set(u, g);
  let v = -1;
  const S = () => {
    var k, P, A, O;
    if (v += 1, v >= a.length) {
      if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
        try {
          (O = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || O.call(A, u);
        } catch {
        }
      String((r == null ? void 0 : r.sourceType) || ""), a.length;
      return;
    }
    const M = a[v];
    g.pendingResolvedSrc = M, b.src = M;
  };
  return b.onload = () => {
    var M, k, P;
    ((k = (M = e.__panoLinkedInputImageCache) == null ? void 0 : M.get) == null ? void 0 : k.call(M, u)) === g && g.pendingImg === b && (g.srcRaw = o, g.resolvedSrc = String(g.pendingResolvedSrc || b.src || ""), g.img = b, g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null), String(g.pendingResolvedSrc || g.resolvedSrc || b.src || ""), String((r == null ? void 0 : r.sourceType) || ""), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0);
  }, b.onerror = (M) => {
    var k, P, A, O;
    if (v + 1 < a.length) {
      S();
      return;
    }
    if (((P = (k = e.__panoLinkedInputImageCache) == null ? void 0 : k.get) == null ? void 0 : P.call(k, u)) === g && g.pendingImg === b && (g.pendingSrcRaw = "", g.pendingResolvedSrc = "", g.pendingImg = null, !g.img))
      try {
        (O = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.delete) == null || O.call(A, u);
      } catch {
      }
    String(g.pendingResolvedSrc || g.resolvedSrc || ""), String((r == null ? void 0 : r.sourceType) || ""), String((M == null ? void 0 : M.type) || "error");
  }, S(), c && g.img && (g.img.complete || g.img.naturalWidth || g.img.width) ? g.img : b;
}
function KA(e, t = [], n = null, r = {}) {
  const o = GA(e, t, r);
  return o ? (typeof n == "function" && (o.complete && (o.naturalWidth || o.width) || o.addEventListener("load", () => n(), { once: !0 })), o) : null;
}
function q1(e) {
  var t, n;
  if (e) {
    Yp.disposeOwner(e);
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, _a(e), e.__panoWrappedErpCache = null;
  }
}
function WA(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, _a(e), e.__panoWrappedErpCache = null;
  }
}
function J1(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, r = String(t || "");
  return n.mode !== r && (n.mode = r, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function $l(e, t, n = "") {
  const r = J1(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), o = performance.now();
  return t ? (r.isLoading || (r.isLoading = !0, r.loadingSinceTs = o), !0) : r.isLoading ? o - Number(r.loadingSinceTs || 0) < SA ? !0 : (r.isLoading = !1, r.loadingSinceTs = 0, !1) : !1;
}
function E0(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), r = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), o = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), a = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || r)), c = n / o, u = r / a, d = Math.min(c, u);
  return Number.isFinite(d) && d > 0 ? d : 1;
}
function BA(e, t, n = 1) {
  const r = Number((t == null ? void 0 : t.x) || 0), o = Number((t == null ? void 0 : t.y) || 0), a = Number((t == null ? void 0 : t.w) || 0), c = Number((t == null ? void 0 : t.h) || 0);
  if (a <= 0 || c <= 0) return;
  const u = Math.max(14, Math.round(14 * n)), d = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), a * 0.44)), b = Math.max(Math.round(34 * n), u + Math.round(14 * n)), g = r + (a - d) * 0.5, v = o + (c - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(g, v, d, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${u}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", g + d * 0.5, v + b * 0.5 + 0.5), e.restore();
}
function $f(e, t) {
  var r;
  const n = (r = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : r.emptyHintEl;
  n && (n.style.display = t ? "flex" : "none");
}
function UA(e) {
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
function YA(e, t) {
  return K1(e, t);
}
function Xs(e, t, n, r = null) {
  var S;
  if (!String(t || "")) return null;
  let a = VA(n);
  if (!a && (r != null && r.external)) {
    if (!xn(e, "external-sticker")) return null;
    const M = Ui(e == null ? void 0 : e.id), k = ((S = M == null ? void 0 : M.ui) == null ? void 0 : S.pano_sticker_input_images) || (M == null ? void 0 : M.pano_sticker_input_images) || [];
    for (const P of Array.isArray(k) ? k : [k])
      if (a = sr(P), a) break;
  }
  if (!a) return null;
  const c = Ds(e, "pano_sticker_input_state_hash"), u = r != null && r.external ? String(c ?? "") : "", d = r != null && r.external ? Number(e.__panoOwnOutputRev || 0) : 0, b = r != null && r.external ? qp(a, d) : a, g = tA(a, u, d);
  return Yp.get(e, g, b, (M, k) => {
    var P, A;
    k && (r != null && r.external && e.__panoOutputFromRun && Si(e, "image-loaded"), (A = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null || A.call(P));
  }) || null;
}
function XA(e, t) {
  var v, S, M, k;
  const n = eC(e, t), r = tC(t), o = Array.isArray((v = t == null ? void 0 : t.painting) == null ? void 0 : v.groups) ? t.painting.groups : [], a = new Map(
    o.filter((P) => P && typeof P == "object").map((P) => [String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim(), Number((P == null ? void 0 : P.z_index) || 0)])
  ), c = n ? r.map((P) => {
    const A = n.getGroupDisplayCanvas(P);
    return A ? {
      id: `paint_group:${P}`,
      source: A,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${P}`,
      zIndex: Number(a.get(P) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], u = Array.isArray((S = t == null ? void 0 : t.painting) == null ? void 0 : S.raster_objects) ? t.painting.raster_objects : [];
  if (u.length === 0)
    return (k = (M = e.__panoRasterObjectSurfaceCache) == null ? void 0 : M.retain) == null || k.call(M, []), c;
  e.__panoRasterObjectSurfaceCache || (e.__panoRasterObjectSurfaceCache = QP()), e.__panoRasterObjectReady || (e.__panoRasterObjectReady = () => {
    var P, A;
    return (A = (P = e.__panoDomPreview) == null ? void 0 : P.requestDraw) == null ? void 0 : A.call(P);
  });
  const d = qP(t == null ? void 0 : t.output_preset), b = u.filter((P) => (P == null ? void 0 : P.visible) !== !1 && String((P == null ? void 0 : P.layerKind) || "paint") === "paint").map((P) => String((P == null ? void 0 : P.id) || ""));
  e.__panoRasterObjectSurfaceCache.retain(b);
  const g = u.map((P) => {
    const A = e.__panoRasterObjectSurfaceCache.get(
      P,
      d.width,
      d.height,
      e.__panoRasterObjectReady
    );
    return A ? {
      id: `raster:${String((P == null ? void 0 : P.id) || "")}`,
      source: A.source,
      revision: A.revision,
      zIndex: Number((P == null ? void 0 : P.z_index) || 0),
      opacity: 1,
      visible: (P == null ? void 0 : P.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...c, ...g];
}
function qA(e, t, n, r) {
  var a, c, u, d, b, g;
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
      y: Number(t.canvasY) - Number(((g = e == null ? void 0 : e.pos) == null ? void 0 : g[1]) || 0)
    };
  const o = ZA(e, t, r);
  return o || null;
}
function JA(e, t) {
  var v, S;
  const n = Number(e == null ? void 0 : e.clientX), r = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(r)) return null;
  const o = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, a = (v = o == null ? void 0 : o.getBoundingClientRect) == null ? void 0 : v.call(o), c = (t == null ? void 0 : t.ds) || ((S = Wt == null ? void 0 : Wt.canvas) == null ? void 0 : S.ds);
  if (!a || !c) return null;
  const u = Number(c.scale || 1);
  if (!Number.isFinite(u) || Math.abs(u) < 1e-6) return null;
  const d = Array.isArray(c.offset) ? c.offset : [0, 0], b = (n - Number(a.left || 0)) / u - Number(d[0] || 0), g = (r - Number(a.top || 0)) / u - Number(d[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(g) ? null : { x: b, y: g };
}
function ZA(e, t, n) {
  var o, a;
  const r = JA(t, n || (Wt == null ? void 0 : Wt.canvas));
  return r ? {
    x: r.x - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
    y: r.y - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[1]) || 0)
  } : null;
}
function QA(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function eC(e, t) {
  var b, g, v, S, M, k, P, A, O, G, R, V;
  const n = (g = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : g.strokes, r = (S = (v = t == null ? void 0 : t.painting) == null ? void 0 : v.mask) == null ? void 0 : S.strokes, o = Array.isArray(n) && n.length > 0, a = Array.isArray(r) && r.length > 0;
  if (!o && !a) return null;
  const c = QA(e, t), u = `${c.width}x${c.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== u) && (e.__panoPreviewPaintEngine = dd(c), e.__panoPreviewPaintDescriptorKey = u, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const d = {
    paint: n || null,
    mask: r || null,
    groups: ((M = t == null ? void 0 : t.painting) == null ? void 0 : M.groups) || null,
    rasterObjects: ((k = t == null ? void 0 : t.painting) == null ? void 0 : k.raster_objects) || null
  };
  return (((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.paint) !== d.paint || ((A = e.__panoPreviewPaintRevision) == null ? void 0 : A.mask) !== d.mask || ((O = e.__panoPreviewPaintRevision) == null ? void 0 : O.groups) !== d.groups || ((G = e.__panoPreviewPaintRevision) == null ? void 0 : G.rasterObjects) !== d.rasterObjects) && (e.__panoPreviewPaintRevision = d, e.__panoPreviewPaintRevisionKey = [
    o ? "p1" : "p0",
    a ? "m1" : "m0",
    String(Array.isArray((R = t == null ? void 0 : t.painting) == null ? void 0 : R.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((V = t == null ? void 0 : t.painting) == null ? void 0 : V.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function tC(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((r) => r && typeof r == "object").slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => String((r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || "").trim()).filter(Boolean);
}
function nC(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function rC(e, t, n) {
  const r = Kp(t, n);
  r.visible && Gp(e, r.boundaryEdges, { selected: !1 });
}
function iC(e, t, n) {
  const r = Kp(t, n);
  r.visible && (e.save(), Gp(e, r.boundaryEdges, { selected: !0 }), z1(e, r, { accent: KP(t) }), e.restore());
}
function Hd(e, t, n) {
  return e1(Dc(e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 }, t, n), t, n);
}
function Kc(e) {
  var t;
  return ((t = e.__panoSurfacePlayback) == null ? void 0 : t.playback.frame) ?? Pa;
}
function oC(e) {
  return [xn(e, "background") ? Rp(Ui(e.id), ["pano_input_videos"], sr) : "", _A(e, qi)];
}
function aC(e) {
  var a;
  if (!xn(e, "external-sticker")) return null;
  const t = Ui(e.id), n = Ds(e, "pano_sticker_input_video_meta");
  if (!n || typeof n != "object") return null;
  const r = ((a = t == null ? void 0 : t.ui) == null ? void 0 : a.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(r) && r.length) return { frames: r.map(sr), meta: n };
  const o = Rp(t, ["pano_sticker_input_videos"], sr);
  return o ? { src: o, meta: n } : null;
}
function sC({ playback: e, video: t, still: n }) {
  return e.source ? !e.showsVideo && n.__panoFrameIdx > 0 ? n : t : null;
}
function O0(e, t, n) {
  var a;
  ((a = e.__panoSurfaceScene) == null ? void 0 : a.state) !== t && (e.__panoSurfaceScene = { state: t, sceneState: ni({ ...t, painting: null }) });
  const r = (c) => {
    var d;
    if (c.visible === !1) return null;
    let u;
    if (t.version === 2) {
      u = Xs(e, c.id, Gb(c.source), { external: c.source.kind === "port" });
      const b = e.__panoSurfacePlayback;
      if (c.source.kind === "port" && b) {
        const g = b.playback.stickerPicture(b.stickerStill, u), v = m1(b.playback.stickerMedia, u);
        return g ? { media: g, revision: Vf(g), source: v } : null;
      }
    } else {
      const b = c.type === "external_image" || c.source_kind === "external_image", g = String(c.asset_id || "") || (b ? String(c.id || "") : "");
      u = Xs(e, g, (d = t.assets) == null ? void 0 : d[c.asset_id], { external: b });
    }
    return Gc(u) ? { media: u, revision: Vf(u) } : null;
  }, o = (t.painting_visible === !1 ? [] : XA(e, t)).filter((c) => c.visible !== !1).map((c) => ({ id: c.id, media: c.source, revision: c.revision, opacity: c.opacity, zIndex: c.zIndex }));
  return {
    background: Gc(n) ? { media: n, revision: Vf(n), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: t1(e.__panoSurfaceScene.sceneState, Kc(e), t.stickers, { media: r, paintLayers: o })
  };
}
function lC(e, t, n) {
  var V, _, j, W, le, ke, F;
  const r = String(e.__panoPreviewMode || "stickers");
  J1(e, r);
  const o = Yn(e);
  r === "cutout" && e.__panoCutoutNodeSurfaceState !== o ? (e.__panoCutoutNodeSurfaceState = o, (j = (_ = (V = e.__panoCutoutNodeSurface) == null ? void 0 : V.session) == null ? void 0 : _.refresh) == null || j.call(_)) : r === "stickers" && e.__panoStickersNodeSurfaceState !== o && (e.__panoStickersNodeSurfaceState = o, (ke = (le = (W = e.__panoStickersNodeSurface) == null ? void 0 : W.session) == null ? void 0 : le.refresh) == null || ke.call(le));
  const a = t.parentElement, c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), u = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== c || t.height !== u) && (t.width = c, t.height = u);
  const b = { x: 0, y: 0, w: c, h: u };
  d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, c, u);
  const g = (e.__panoSurfacePlayback ? sC(e.__panoSurfacePlayback) : jA(e, ["pano_input_videos"], () => {
    var q, J;
    return (J = (q = e.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : J.call(q);
  })) || KA(
    e,
    qi,
    () => {
      var q, J;
      return (J = (q = e.__panoDomPreview) == null ? void 0 : q.requestDraw) == null ? void 0 : J.call(q);
    },
    { preserveReadyWhilePending: !1 }
  ), v = Gc(g);
  let S = null;
  const M = (q, J) => {
    S || (S = O0(e, o, g));
    const ne = n.render({ width: q.w, height: q.h, camera: J, ...S });
    return ne && d.drawImage(ne.canvas, ne.x, ne.y, ne.width, ne.height, q.x, q.y, q.w, q.h), !!ne;
  };
  if (r === "cutout") {
    const q = UA(o), J = nC(g), ne = q ? te(Yi(q).aspect, 0.1, 10) : v ? te(Number(J.width / J.height), 0.05, 20) : 1, ge = jp(b, ne);
    e.__panoCutoutNodeFrame = ge;
    let me = "none";
    const re = String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "");
    if (q)
      if (g && !v)
        me = "loading";
      else if (v) {
        const B = mP({ width: c, height: u }, ge, q);
        [
          !B.fallback || M(B.fallback.rect, Fs(B.fallback.shot)),
          M(B.rect, Fs(B.shot)),
          !B.fallback || M(ge, Fs(q))
        ].every(Boolean) || (me = "loading");
      } else
        me = "empty";
    else {
      const B = e.__panoLastCutoutShot;
      B ? (e.__panoPreviewView = O1(B, { width: c, height: u }), e.__panoLastCutoutShot = null) : e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), v ? M(b, Dc(e.__panoPreviewView, c, u)) || (me = "loading") : g ? me = "loading" : me = "empty";
    }
    v || n.release(), n.failed && me === "loading" && (me = "none"), q && (e.__panoLastCutoutShot = { ...q }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, c, u), d.rect(ge.x, ge.y, ge.w, ge.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(ge.x + 0.5, ge.y + 0.5, Math.max(0, ge.w - 1), Math.max(0, ge.h - 1)), d.restore()), me === "loading" ? ($f(e, !1), $l(e, !0, re)) : me === "empty" ? ($f(e, !0), $l(e, !1, "")) : ($f(e, !1), $l(e, !1, ""));
    return;
  }
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  let k = !1;
  (!g || v) && (S = O0(e, o, g), !S.background && !S.layers.length ? (n.release(), k = !0) : k = M(b, Dc(e.__panoPreviewView, c, u)));
  const P = !k && !n.failed;
  $l(e, P, P ? String((g == null ? void 0 : g.currentSrc) || (g == null ? void 0 : g.src) || "") : ""), P && BA(d, b, E0(t, b));
  const A = Hd(e, c, u);
  !g && k && cC(d, A, E0(t, b));
  const O = String(((F = o == null ? void 0 : o.active) == null ? void 0 : F.selected_sticker_id) || ""), G = Od(o, Kc(e)), R = k ? G.find((q) => String((q == null ? void 0 : q.id) || "") === O && (q == null ? void 0 : q.visible) !== !1) : null;
  k && G.filter((q) => q !== R && (q == null ? void 0 : q.visible) !== !1 && (q.external || q.source_kind === "external_image")).filter((q) => !Gc(Xs(e, q.id, null, { external: !0 }))).forEach((q) => rC(d, q, A)), R && iC(d, R, A);
}
function F0(e, t, n, r, o = 1) {
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
function cC(e, t, n) {
  e.save();
  const r = "#3f3f46", o = "rgba(250, 250, 250, 0.86)";
  for (let u = -75; u <= 75; u += 15) {
    const d = [];
    for (let b = -180; b <= 180; b += 4) d.push(Zn(b, u));
    F0(e, d, t, u === 0 ? o : r, u === 0 ? 1.5 : 1);
  }
  for (let u = -180; u <= 180; u += 15) {
    const d = [];
    for (let b = -89; b <= 89; b += 4) d.push(Zn(u, b));
    F0(e, d, t, r, u % 90 === 0 ? 1.3 : 1);
  }
  const a = [
    { name: "Front", dir: Zn(0, 0) },
    { name: "Right", dir: Zn(90, 0) },
    { name: "Back", dir: Zn(180, 0) },
    { name: "Left", dir: Zn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const c = Math.max(9, Math.round(11 * n));
  e.font = `500 ${c}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", a.forEach((u) => {
    const d = t.project(u.dir);
    d.z > 1e-4 && e.fillText(u.name, d.x, d.y + 24 * n);
  }), e.restore();
}
function Gd(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function uC(e, t, n = 20) {
  var c;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const r = (c = t.getBoundingClientRect) == null ? void 0 : c.call(t);
  if (!r) return !1;
  const o = Number(e.clientX) - Number(r.left || 0), a = Number(e.clientY) - Number(r.top || 0);
  return o >= r.width - n && a >= r.height - n;
}
function gr(e, t) {
  return uC(e, t) ? !1 : (Gd(e), !0);
}
function T0() {
  var n;
  const e = (n = Wt == null ? void 0 : Wt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function fC(e) {
  var n;
  if (!e) return;
  const t = (n = Wt == null ? void 0 : Wt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function dC(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !W1(e)) return;
  const r = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(r) : e.size = r, e.__panoStandaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function pC(e, t = 0, n = null, r = 1200) {
  const o = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = o > 0, !(o <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var a, c;
    e.__panoBootMinHeightTimer = null, (a = e == null ? void 0 : e.__panoDomPreview) != null && a.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (c = e.setDirtyCanvas) == null || c.call(e, !0, !0));
  }, Math.max(0, Number(r || 0))));
}
function D0(e, t = null, n = 0, r = 0, o = !0) {
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
      e.__panoUserResized = !0, t == null || t(), o && hC(e, 180, t);
    }
  };
}
function hC(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var r;
    e.__panoResizeSettleTimer = null, n == null || n(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ss(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const mC = /* @__PURE__ */ new WeakMap();
function Z1(e, t) {
  return f1(mC, e, t) ? !1 : (zA(e, t), q1(e), Ss(e), !0);
}
async function gC(e) {
  var n, r;
  const t = await B2(e, Wt, Qt);
  t && (Z1(e, t), (r = (n = e.__panoDomPreview) == null ? void 0 : n.requestDraw) == null || r.call(n));
}
function yC(e, t = {}) {
  var Ji;
  const n = t.__allowStandalone === !0, r = B1(e);
  if (r && !n) {
    Xp(e);
    return;
  }
  r && dC(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const o = e.__panoPreviewMode === "stickers", a = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
  const c = {
    signature: C0(e)
  }, u = "dom", d = c.signature || C0(e);
  if (Number(e.__panoRebindGeneration || 0), zd(e), e == null || e.id, e.__panoPreviewMode, e.addDOMWidget, $d(e), e.__panoFrontendSig = d, e.__panoStickersPath = u, (Ji = e.__panoDomPreview) != null && Ji.widget || (e.__panoLegacyPreviewHooked && cc(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function"))
    return;
  const b = t.noPreview === !0, g = b ? 0 : 56, v = b ? 0 : fP, S = document.createElement("div");
  if (MA(), S.className = "pano-node-preview-dom", S.classList.add(o ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), b && S.classList.add("pano-node-preview--no-preview"), S.setAttribute("data-capture-wheel", "true"), S.tabIndex = 0, S.style.cssText = [
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
    const z = zc(Rd(
      e.addDOMWidget(Vd(), "preview", S, D0(e, null))
    ));
    Ss(e), e.__panoDomPreview = { widget: z, root: S, requestDraw: () => {
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
  const k = In({ label: "node.surface" });
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
  ].join(";"), P.textContent = "Connect ERP image", M.appendChild(k), M.appendChild(P), S.appendChild(M);
  const A = ub(S), O = document.createElement("div");
  O && (O.className = o ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", O.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", S.appendChild(O)), NA(e, 120, 120), Ss(e);
  let G = null;
  try {
    pC(e, g, () => {
      var z, be;
      return (be = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : be.call(z);
    }), G = zc(Rd(e.addDOMWidget(
      Vd(),
      "preview",
      S,
      D0(
        e,
        () => {
          var z, be;
          return (be = (z = e.__panoDomPreview) == null ? void 0 : z.requestDraw) == null ? void 0 : be.call(z);
        },
        g,
        v,
        !1
      )
    )));
  } catch {
    return;
  }
  const R = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, V = () => {
    R.destroyed || (R.needsDraw = !0, !R.inTick && !R.raf && (R.raf = requestAnimationFrame(Ie)));
  }, _ = r1(V), j = /* @__PURE__ */ Aa(o ? { ...N1(Yn(e)), importing: !1, dropActive: !1, viewUnavailable: !1, playable: !1, playing: !1 } : {
    ...I1(Yn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((z) => ({ value: z, label: z }))
  });
  let W = null;
  if (o && e.__panoSceneStateV2) {
    const [z, be] = [0, 1].map(() => {
      const Te = ou(document, "node.playback");
      return Te.playsInline = !0, Te.preload = "auto", Te.crossOrigin = "anonymous", Te.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", M.appendChild(Te), Te;
    }), Fe = In({ label: "node.still" });
    Fe.__panoFrameIdx = 0;
    const ae = In({ label: "node.port-still" });
    ae.__panoFrameIdx = 0;
    const Be = cP({
      video: z,
      stickerVideo: be,
      createImage: (Te, $e) => {
        const Rt = new Image();
        return Rt.onload = $e, Rt.onerror = $e, Rt.src = Te, Rt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Te) => requestAnimationFrame(Te),
        cancelFrame: (Te) => cancelAnimationFrame(Te)
      },
      readState: () => Yn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: V,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var $e;
        if (!(z.videoWidth > 0 && z.videoHeight > 0)) return;
        const Te = Math.min(1, xA / z.videoWidth);
        Fe.width = Math.round(z.videoWidth * Te), Fe.height = Math.round(z.videoHeight * Te), ($e = Fe.getContext("2d")) == null || $e.drawImage(z, 0, 0, Fe.width, Fe.height), Fe.__panoFrameIdx += 1, V();
      },
      onStickerCapture: () => {
        var Te;
        be.videoWidth > 0 && be.videoHeight > 0 && (ae.width = be.videoWidth, ae.height = be.videoHeight, (Te = ae.getContext("2d")) == null || Te.drawImage(be, 0, 0), ae.__panoFrameIdx += 1, V());
      },
      onChange: () => {
        j.playing = Be.playing, V();
      }
    });
    W = { playback: Be, video: z, still: Fe, stickerVideo: be, stickerStill: ae, stickerSource: "" }, e.__panoSurfacePlayback = W;
  }
  const le = () => {
    var Rt;
    const { playback: z, still: be, stickerStill: Fe } = W, ae = Td(M, !!((Rt = e.flags) != null && Rt.collapsed)), Be = z.source, Te = ae ? aC(e) : null, $e = z.follow({
      shown: ae,
      sources: ae ? oC(e) : [],
      state: Yn(e),
      sticker: Te
    });
    ((Te == null ? void 0 : Te.src) || "") !== W.stickerSource && (W.stickerSource = (Te == null ? void 0 : Te.src) || "", fd(Fe)), z.source !== Be && (fd(be), be.__panoFrameIdx = 0), j.playable = $e, j.playing = z.playing;
  }, ke = () => {
    var be, Fe;
    const z = ((be = e.__panoOwnOutputVideoCache) == null ? void 0 : be.player) ?? null;
    z && !Td(M, !!((Fe = e.flags) != null && Fe.collapsed)) && z.pause(), o && (j.playable = !!z && !z.failed(), j.playing = !!(z != null && z.playing));
  }, F = () => {
    var z;
    W == null || W.playback.pause(), (z = e.__panoOwnOutputVideoCache) == null || z.player.pause();
  };
  let q = null;
  const J = (o ? sP : yP)({
    readState: () => Yn(e),
    publishLiveState: (z) => {
      z ? (q = z, e.__panoLiveStateOverride = z) : (e.__panoLiveStateOverride === q && (e.__panoLiveStateOverride = null), q = null), e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoStateCache = null, V();
    },
    commitState: (z) => {
      var ae, Be, Te, $e;
      const be = va(e, "state_json");
      if (!be) return;
      Wb(e, z.active);
      const Fe = Bb(e, z);
      Ub(e, Fe, String(be.value ?? "")) || (be.value = Fe, (ae = be.callback) == null || ae.call(be, Fe), e.__panoStateCache = null, (Be = e.setDirtyCanvas) == null || Be.call(e, !0, !0), ($e = (Te = e.graph) == null ? void 0 : Te.setDirtyCanvas) == null || $e.call(Te, !0, !0));
    },
    onChange: (z) => Object.assign(j, z)
  }), ge = o ? j1(e, (z = "sync", be = null) => {
    var Zi;
    if (!o || !e.graph || !J || J.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const gt = xn(e, "external-sticker"), Ut = Yn(e).stickers.find((kn) => kn.source.kind === "port");
      return J.apply({
        type: "sync-port",
        value: k1(e, {
          pose: gt ? Ds(e, "pano_sticker_input_pose", be) : null,
          image: Ut ? Xs(e, Ut.id, null, { external: !0 }) : null
        })
      });
    }
    const Fe = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((gt) => String((gt == null ? void 0 : gt.name) || "") === "sticker_image") : -1, ae = Fe >= 0 ? ((Zi = e.getInputLink(Fe)) == null ? void 0 : Zi.id) ?? null : null;
    if (ae == null)
      return J.apply({ type: "sync-external", value: { connected: !1 } });
    if (!xn(e, "external-sticker")) return !1;
    const Be = Ds(e, "pano_sticker_input_pose", be), Te = Array.isArray(Be) ? Be[0] : Be, $e = String(Ds(e, "pano_sticker_input_state_hash", be) ?? ""), Rt = e.__panoPreviewView || { yaw: 0, pitch: 0 }, $t = Yn(e), nr = (Array.isArray($t == null ? void 0 : $t.stickers) ? $t.stickers : []).find((gt) => String((gt == null ? void 0 : gt.id) || "") === "sticker_image_1"), zt = Xs(e, "sticker_image_1", null, { external: !0 }), Vr = Te && typeof Te == "object" ? Te : nr || { yaw_deg: Rt.yaw, pitch_deg: Rt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return J.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: ae,
        stateHash: $e,
        pose: Vr,
        imageWidth: Number((zt == null ? void 0 : zt.naturalWidth) || (zt == null ? void 0 : zt.width) || 0),
        imageHeight: Number((zt == null ? void 0 : zt.naturalHeight) || (zt == null ? void 0 : zt.height) || 0)
      }
    });
  }) : () => {
  };
  let me = 0;
  const re = async (z) => {
    if (!o || !J || !Tr(z)) return !1;
    F();
    const be = `asset_${Math.random().toString(16).slice(2, 10)}`, Fe = `st_${Math.random().toString(16).slice(2, 10)}`, ae = { ...e.__panoPreviewView || { yaw: 0, pitch: 0 } };
    me += 1, j.importing = !0;
    const Be = _s(e, `add:${be}`, async () => {
      const Te = await ws(z), $e = await vo(z, {
        fetchApi: (Rt, $t) => Qt.fetchApi(Rt, $t)
      });
      return Ee(), J.apply({
        type: "add-sticker",
        value: {
          stickerId: Fe,
          assetId: be,
          asset: $e,
          imageWidth: Te.width,
          imageHeight: Te.height,
          yaw_deg: Number(ae.yaw || 0),
          pitch_deg: Number(ae.pitch || 0)
        }
      });
    });
    try {
      return await Be;
    } catch {
      return !1;
    } finally {
      me = Math.max(0, me - 1), j.importing = me > 0, V();
    }
  };
  let B = null, D = null, I = null, Z = !1;
  const ce = () => {
    var z;
    return I && (clearTimeout(I), I = null), Z ? (Z = !1, ((z = J == null ? void 0 : J.commitGesture) == null ? void 0 : z.call(J)) ?? !1) : !1;
  }, Ee = () => {
    var ae, Be, Te;
    const z = ce(), be = (B == null ? void 0 : B.pointerId) ?? (D == null ? void 0 : D.pointerId);
    if (B = null, D = null, be != null) {
      try {
        (ae = k.hasPointerCapture) != null && ae.call(k, be) && ((Be = k.releasePointerCapture) == null || Be.call(k, be));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Fe = ((Te = J == null ? void 0 : J.commitGesture) == null ? void 0 : Te.call(J)) ?? !1;
    return z || Fe;
  }, Xe = () => {
    var ae, Be, Te;
    const z = ce(), be = B == null ? void 0 : B.pointerId;
    if (B = null, be != null) {
      try {
        (ae = k.hasPointerCapture) != null && ae.call(k, be) && ((Be = k.releasePointerCapture) == null || Be.call(k, be));
      } catch {
      }
      k.style.cursor = "grab";
    }
    const Fe = ((Te = J == null ? void 0 : J.cancelGesture) == null ? void 0 : Te.call(J)) ?? !1;
    return z || Fe;
  }, Je = () => Ee();
  J && (e.__panoStateFlushers instanceof Set || (e.__panoStateFlushers = /* @__PURE__ */ new Set()), e.__panoStateFlushers.add(Je));
  let vt = null, $ = !1;
  if (O && J)
    try {
      Wp(), vt = up(o ? GP : DP, {
        model: j,
        onAction: (z) => {
          var ae, Be, Te;
          if ((z == null ? void 0 : z.type) === "toggle-playback") {
            Ee(), W ? W.playback.toggle() : (ae = e.__panoOwnOutputVideoCache) == null || ae.player.toggle(), V();
            return;
          }
          if (F(), (z == null ? void 0 : z.type) === "open-editor") {
            Ee(), o || (j.aspectOpen = !1), (Be = e.__panoOpenEditor) == null || Be.call(e);
            return;
          }
          if (o) {
            if ((z == null ? void 0 : z.type) === "add-image-file") {
              re(z.file);
              return;
            }
            J.apply(z) && V();
            return;
          }
          if ((z == null ? void 0 : z.type) === "toggle-aspect") {
            j.aspectOpen = !j.aspectOpen;
            return;
          }
          if ((z == null ? void 0 : z.type) === "close-aspect") {
            j.aspectOpen = !1;
            return;
          }
          let be = z;
          if ((z == null ? void 0 : z.type) === "add-frame") {
            const $e = e.__panoPreviewView || { yaw: 0, pitch: 0, fov: 100 };
            be = {
              ...z,
              ...pP($e, {
                width: k.width,
                height: k.height
              })
            };
          } else if ((z == null ? void 0 : z.type) === "delete-frame") {
            const $e = Io(Yn(e));
            $e && (e.__panoPreviewView = O1($e, {
              width: k.width,
              height: k.height
            }));
          }
          const Fe = ((Te = e.__panoCutoutNodeFrame) == null ? void 0 : Te.safeRect) || null;
          j.aspectOpen = !1, J.apply({ ...be, safeRect: Fe }) && V();
        }
      }), vt.mount(O), $ = !0;
    } catch {
      vt = null, $ = !1;
    }
  const _t = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    W && le(), V();
  }) : null;
  _t == null || _t.observe(M);
  const Ie = (z) => {
    var Fe, ae;
    R.raf = 0, R.inTick = !0;
    let be = !1;
    try {
      be = wt.stepInertia(z), (R.needsDraw || be) && (R.needsDraw = !1, W ? le() : ke(), (Fe = e.flags) != null && Fe.collapsed || lC(e, k, _), j.viewUnavailable = _.failed);
    } finally {
      R.inTick = !1;
    }
    (be || R.needsDraw) && !R.raf && (R.raf = requestAnimationFrame(Ie)), kA() && (!e.__panoDebugLastTs || z - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = z, e.__panoPreviewMode, $d(e), hs(S), hs(M), hs(k), hs(S.parentElement), hs((ae = S.parentElement) == null ? void 0 : ae.parentElement), Number(k.width || 0), Number(k.height || 0), void 0);
  }, wt = mp({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (z) => {
      e.__panoPreviewView = z;
    },
    getViewportSize: () => {
      const z = k.getBoundingClientRect();
      return {
        w: Math.max(1, Number(z.width || k.clientWidth || 0)),
        h: Math.max(1, Number(z.height || k.clientHeight || 0))
      };
    },
    getInvert: () => {
      const z = A0();
      return {
        x: z.invert_view_x ? -1 : 1,
        y: z.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      V();
    }
  }), Ae = o ? M : S, De = (z) => {
    const be = k.getBoundingClientRect();
    return {
      x: (Number(z.clientX) - be.left) * (k.width / Math.max(1, be.width)),
      y: (Number(z.clientY) - be.top) * (k.height / Math.max(1, be.height))
    };
  }, T = (z) => {
    var ae, Be;
    if (!o || !a) return;
    const be = Yn(e), Fe = x0(
      Od(be, Kc(e)),
      String(((ae = be == null ? void 0 : be.active) == null ? void 0 : ae.selected_sticker_id) || ""),
      De(z),
      Hd(e, k.width, k.height)
    );
    if (!Fe) {
      k.style.cursor = "grab";
      return;
    }
    if (((Be = Fe.item) == null ? void 0 : Be.locked) === !0) {
      k.style.cursor = "default";
      return;
    }
    k.style.cursor = Fe.hit.cursor || "default";
  };
  k.addEventListener("pointerdown", (z) => {
    var Rt, $t, nr, zt, Vr, ai, Zi, gt, Ut, kn, Vt;
    if (!gr(z, Ae) || z.button !== 0) return;
    if (!o) {
      const rn = Io(Yn(e)), Mn = e.__panoCutoutNodeFrame;
      if (!rn) {
        (Rt = S.focus) == null || Rt.call(S, { preventScroll: !0 }), ($t = k.setPointerCapture) == null || $t.call(k, z.pointerId), k.style.cursor = "grabbing", wt.startDrag(z.clientX, z.clientY, z.pointerId);
        return;
      }
      if (rn.locked === !0 || !Mn || !J) return;
      const si = De(z);
      let Ta;
      if (z.shiftKey) {
        const li = T1({
          frame: Mn,
          point: si,
          startRollDeg: Number(rn.roll_deg ?? rn.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!li) return;
        Ta = { kind: "roll", pointerId: z.pointerId, rollGesture: li };
      } else {
        const li = ((nr = Yn(e)) == null ? void 0 : nr.ui_settings) || A0();
        Ta = {
          kind: "pan",
          pointerId: z.pointerId,
          startPoint: si,
          startShot: { ...rn },
          focalPx: Po(Mn, rn),
          invertX: li.invert_view_x === !0,
          invertY: li.invert_view_y === !0
        };
      }
      Ee(), (zt = S.focus) == null || zt.call(S, { preventScroll: !0 }), (Vr = k.setPointerCapture) == null || Vr.call(k, z.pointerId), k.style.cursor = "grabbing", J.beginGesture(), B = Ta;
      return;
    }
    if (!a) return;
    const be = De(z), Fe = Yn(e), ae = String(((ai = Fe == null ? void 0 : Fe.active) == null ? void 0 : ai.selected_sticker_id) || ""), Be = Hd(e, k.width, k.height);
    (Zi = S.focus) == null || Zi.call(S, { preventScroll: !0 });
    const Te = () => x0(Od(Fe, Kc(e)), ae, be, Be);
    let $e = Te();
    if ($e && (W != null && W.playback.playing) && (F(), $e = Te()), $e && J) {
      if (wt.stopMotion(), Ee(), String(((gt = $e.item) == null ? void 0 : gt.id) || "") !== ae && J.apply({ type: "select-sticker", id: $e.item.id }), ((Ut = $e.item) == null ? void 0 : Ut.locked) === !0) {
        V();
        return;
      }
      const rn = be, Mn = $e.geometry.center;
      D = {
        active: !0,
        kind: $e.hit.kind,
        pointerId: z.pointerId,
        startPoint: rn,
        startCenter: { ...Mn },
        startSticker: { ...$e.item },
        startDistance: Math.max(1, Math.hypot(rn.x - Mn.x, rn.y - Mn.y)),
        startAngle: Math.atan2(rn.y - Mn.y, rn.x - Mn.x),
        projection: Be
      }, J.beginGesture(), (kn = k.setPointerCapture) == null || kn.call(k, z.pointerId), k.style.cursor = $e.hit.kind === "rotate" ? "grabbing" : $e.hit.kind === "move" ? "move" : $e.hit.cursor, V();
      return;
    }
    (Vt = k.setPointerCapture) == null || Vt.call(k, z.pointerId), k.style.cursor = "grabbing", wt.startDrag(z.clientX, z.clientY, z.pointerId);
  }), k.addEventListener("pointermove", (z) => {
    if (!o) {
      if (!B) {
        if (!wt.state.drag.active) return;
        gr(z, Ae), wt.moveDrag(z.clientX, z.clientY, "pano");
        return;
      }
      if (B.pointerId !== z.pointerId || !J) return;
      if (gr(z, Ae), B.kind === "pan") {
        const Fe = De(z);
        J.updateGesture({
          type: "pan-camera",
          startShot: B.startShot,
          dx: Fe.x - B.startPoint.x,
          dy: Fe.y - B.startPoint.y,
          focalPx: B.focalPx,
          invertX: B.invertX,
          invertY: B.invertY
        });
        return;
      }
      const be = D1(B.rollGesture, De(z), z);
      if (!be) return;
      B.rollGesture = be.gesture, J.updateGesture({ type: "set-roll", value: be.rollDeg });
      return;
    }
    if (!D && !wt.state.drag.active) {
      T(z);
      return;
    }
    if (D) {
      if (D.pointerId !== z.pointerId || !J) return;
      gr(z, Ae);
      const be = De(z);
      let Fe = D.startSticker;
      if (D.kind === "move")
        Fe = UP(
          D.startSticker,
          {
            x: D.startCenter.x + be.x - D.startPoint.x,
            y: D.startCenter.y + be.y - D.startPoint.y
          },
          D.projection
        );
      else if (D.kind === "scale") {
        const ae = Math.hypot(be.x - D.startCenter.x, be.y - D.startCenter.y);
        Fe = YP(D.startSticker, D.startDistance, ae);
      } else if (D.kind === "rotate") {
        const ae = Math.atan2(be.y - D.startCenter.y, be.x - D.startCenter.x);
        Fe = XP(D.startSticker, D.startAngle, ae, z.shiftKey === !0);
      }
      J.updateGesture({ type: "set-transform", value: Fe }), V();
      return;
    }
    !a || !wt.state.drag.active || (gr(z, Ae), wt.moveDrag(z.clientX, z.clientY, "pano"));
  });
  const H = () => {
    var be, Fe;
    if (!B && !D) {
      if (!wt.state.drag.active) return;
      wt.endDrag(), k.style.cursor = "grab", V();
      return;
    }
    if (!J) return;
    const z = (B == null ? void 0 : B.pointerId) ?? (D == null ? void 0 : D.pointerId);
    B = null, D = null;
    try {
      (be = k.hasPointerCapture) != null && be.call(k, z) && ((Fe = k.releasePointerCapture) == null || Fe.call(k, z));
    } catch {
    }
    J.cancelGesture(), k.style.cursor = "grab", V();
  }, X = (z, be = !1) => {
    var Fe, ae, Be, Te;
    if (!o) {
      if (!B) {
        if (!wt.state.drag.active) return;
        gr(z, Ae), (Fe = k.releasePointerCapture) == null || Fe.call(k, z.pointerId), k.style.cursor = "grab", wt.endDrag(), V();
        return;
      }
      if (B.pointerId !== z.pointerId || !J) return;
      gr(z, Ae), B = null, (ae = k.releasePointerCapture) == null || ae.call(k, z.pointerId), k.style.cursor = "grab", be ? J.cancelGesture() : J.commitGesture(), T(z), V();
      return;
    }
    if (D) {
      if (D.pointerId !== z.pointerId || !J) return;
      gr(z, Ae), D = null, (Be = k.releasePointerCapture) == null || Be.call(k, z.pointerId), k.style.cursor = "grab", be ? J.cancelGesture() : J.commitGesture(), V();
      return;
    }
    !a || !wt.state.drag.active || (gr(z, Ae), (Te = k.releasePointerCapture) == null || Te.call(k, z.pointerId), k.style.cursor = "grab", wt.endDrag(), V());
  };
  k.addEventListener("pointerup", X), k.addEventListener("pointercancel", (z) => X(z, !0)), k.addEventListener("lostpointercapture", H), k.addEventListener("pointerleave", (z) => {
    !o && B || D || wt.state.drag.active && X(z);
  });
  const pe = (z) => {
    const be = document.activeElement;
    if (be !== S && !S.contains(be)) return;
    if (z.key === "Escape" && (B || D) && J) {
      H(), Gd(z);
      return;
    }
    if (!o || z.key !== "Delete" && z.key !== "Backspace" || !J) return;
    const Fe = z.target, ae = String((Fe == null ? void 0 : Fe.tagName) || "").toUpperCase();
    ae === "INPUT" || ae === "TEXTAREA" || Fe != null && Fe.isContentEditable || j.canDelete === !0 && (F(), Ee(), J.apply({ type: "delete-selected" }) && V(), Gd(z));
  };
  window.addEventListener("keydown", pe, !0);
  const ye = vA({
    requestFrame: (z) => requestAnimationFrame(z),
    cancelFrame: (z) => cancelAnimationFrame(z),
    restore: (z) => fC(z)
  }), we = (z) => {
    var Fe, ae, Be, Te, $e, Rt;
    if (!gr(z, Ae)) return;
    if (!o) {
      const $t = Io(Yn(e));
      if ($t && $t.locked !== !0 && J) {
        const nr = xc(z);
        nr !== 0 && (Z || (Ee(), J.beginGesture(), Z = !0), J.updateGesture({
          type: "step-fov",
          direction: nr
        }) ? (I && clearTimeout(I), I = setTimeout(ce, 180), V()) : J.hasGestureChanges() || (J.cancelGesture(), Z = !1));
      } else if (!$t) {
        const nr = T0();
        wt.applyWheelEvent(z) && V(), ye.schedule(nr);
      }
      (Fe = z.preventDefault) == null || Fe.call(z), (ae = z.stopPropagation) == null || ae.call(z), (Be = z.stopImmediatePropagation) == null || Be.call(z);
      return;
    }
    if (!a) return;
    const be = T0();
    wt.applyWheelEvent(z) && V(), (Te = z.preventDefault) == null || Te.call(z), ($e = z.stopPropagation) == null || $e.call(z), (Rt = z.stopImmediatePropagation) == null || Rt.call(z), ye.schedule(be);
  }, Oe = o ? [M, k] : [M];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((z) => {
    Oe.forEach((be) => be.addEventListener(z, we, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((z) => {
    k.addEventListener(z, (be) => gr(be, Ae)), M.addEventListener(z, (be) => gr(be, Ae));
  });
  const Ne = va(e, "state_json");
  let Ce = null, ve = null;
  Ne && !Ne.__panoPreviewPatchedCb && (Ce = Ne.callback, ve = (z) => {
    const be = Ce ? Ce(z) : void 0;
    return V(), be;
  }, Ne.callback = ve, Ne.__panoPreviewPatchedCb = ve);
  const Re = va(e, "bg_color");
  let Me = null, Ve = null;
  Re && !Re.__panoPreviewPatchedCb && (Me = Re.callback, Ve = (z) => {
    const be = Me ? Me(z) : void 0;
    return V(), be;
  }, Re.callback = Ve, Re.__panoPreviewPatchedCb = Ve);
  const We = e.onRemoved, at = e.onResize, mt = e.onExecuted, dt = e.onDragOver, St = e.onDragDrop;
  let yt = null;
  const bn = () => {
    o && (j.dropActive = !0, yt && clearTimeout(yt), yt = setTimeout(() => {
      yt = null, j.dropActive = !1;
    }, 140));
  }, Ln = o ? function(z) {
    return (dt ? dt.apply(this, arguments) : !1) === !0 ? !0 : Up(z == null ? void 0 : z.dataTransfer) ? (bn(), !0) : !1;
  } : null, Rr = o ? function(z) {
    var ae;
    if ((St ? St.apply(this, arguments) : !1) === !0) return !0;
    const Fe = Array.from(((ae = z == null ? void 0 : z.dataTransfer) == null ? void 0 : ae.files) || []).find((Be) => Tr(Be));
    return Fe ? (yt && clearTimeout(yt), yt = null, j.dropActive = !1, re(Fe), !0) : !1;
  } : null;
  o && (e.onDragOver = Ln, e.onDragDrop = Rr);
  const To = o ? bA(S, {
    onActive: (z) => {
      if (z) {
        bn();
        return;
      }
      yt && clearTimeout(yt), yt = null, j.dropActive = !1;
    },
    onDrop: (z) => {
      re(z);
    }
  }) : () => {
  }, h = function(z) {
    e.__panoOutputFromRun = !0;
    const be = Z1(e, z);
    Si(e, be ? "executed" : "sync", z), V();
    const Fe = mt ? mt.apply(this, arguments) : void 0;
    return Ss(e), Fe;
  };
  e.onExecuted = h;
  const Ye = e.onConnectionsChange, dr = function(z, be) {
    const Fe = f0(e, z, be, Lp), ae = f0(e, z, be, qi), Be = arguments, Te = Ye ? Ye.apply(this, Be) : void 0, $e = () => {
      R.destroyed || (ae && WA(e), Fe && Si(e, "connection-change"), Ss(e), V());
    };
    return $e(), queueMicrotask($e), Te;
  };
  e.onConnectionsChange = dr;
  const nn = function() {
    const z = at ? at.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, V(), z;
  };
  e.onResize = nn;
  const Fa = function() {
    return Do(), jd.unregister(this), We ? We.apply(this, arguments) : void 0;
  };
  e.onRemoved = Fa;
  const Do = () => {
    var z, be, Fe, ae, Be, Te, $e, Rt, $t;
    R.destroyed = !0, (z = _t == null ? void 0 : _t.disconnect) == null || z.call(_t), o ? Ee() : Xe(), k.removeEventListener("lostpointercapture", H), To(), A(), window.removeEventListener("keydown", pe, !0), (Fe = (be = e.__panoStateFlushers) == null ? void 0 : be.delete) == null || Fe.call(be, Je), e.__panoStateFlushers instanceof Set && e.__panoStateFlushers.size === 0 && (e.__panoStateFlushers = null), (ae = J == null ? void 0 : J.destroy) == null || ae.call(J), (Be = vt == null ? void 0 : vt.unmount) == null || Be.call(vt), W && (W.playback.dispose(), W.video.remove(), W.stickerVideo.remove(), e.__panoSurfacePlayback === W && (e.__panoSurfacePlayback = null)), _.dispose(), e.__panoSurfaceScene = null, ($e = (Te = e.__panoRasterObjectSurfaceCache) == null ? void 0 : Te.dispose) == null || $e.call(Te), e.__panoRasterObjectSurfaceCache = null, e.__panoRasterObjectReady = null, ge(), ye.dispose(), yt && clearTimeout(yt), yt = null, Yp.disposeOwner(e), _a(e), R.raf && cancelAnimationFrame(R.raf), R.raf = 0, ((Rt = e.__panoCutoutNodeSurface) == null ? void 0 : Rt.session) === J && (e.__panoCutoutNodeSurface = null), (($t = e.__panoStickersNodeSurface) == null ? void 0 : $t.session) === J && (e.__panoStickersNodeSurface = null), e.__panoCutoutNodeSurfaceState = null, e.__panoStickersNodeSurfaceState = null, e.__panoCutoutNodeFrame = null, e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize === nn && (e.onResize = at), e.onExecuted === h && (e.onExecuted = mt), e.onConnectionsChange === dr && (e.onConnectionsChange = Ye), ve && (Ne == null ? void 0 : Ne.callback) === ve && (Ne.callback = Ce), ve && (Ne == null ? void 0 : Ne.__panoPreviewPatchedCb) === ve && delete Ne.__panoPreviewPatchedCb, Ve && (Re == null ? void 0 : Re.callback) === Ve && (Re.callback = Me), Ve && (Re == null ? void 0 : Re.__panoPreviewPatchedCb) === Ve && delete Re.__panoPreviewPatchedCb, e.onDragOver === Ln && (e.onDragOver = dt), e.onDragDrop === Rr && (e.onDragDrop = St), e.onRemoved === Fa && (e.onRemoved = We);
  };
  e.__panoDomRestore = Do, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoCutoutNodeSurface = J && $ && !o ? { session: J, model: j } : null, e.__panoStickersNodeSurface = J && $ && o ? { session: J, model: j } : null, e.__panoDomPreview = {
    widget: G,
    root: S,
    canvas: k,
    requestDraw: V,
    state: R,
    emptyHintEl: P,
    nodeSurface: e.__panoCutoutNodeSurface
  }, jd.register(e), e.graph && Si(e, "attach"), V();
}
function L0(e, t = {}) {
  U1(e).attach({
    ...t,
    mode: "cutout"
  });
}
function R0(e, t = {}) {
  const n = t.__allowStandalone === !0;
  if (B1(e) && !n) {
    Xp(e);
    return;
  }
  U1(e).attach(t);
}
function bC(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function vC(e, t = 1, n = 1 / 0) {
  const r = Number(t), o = Number.isFinite(r) && r > 0 ? r : 1, a = Number(e == null ? void 0 : e.width), c = Number(e == null ? void 0 : e.height), u = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Math.max(0, Number.isFinite(c) ? c : 0) * o, b = Number(n), g = b > 0 ? b : 1 / 0, v = Math.max(u, d), S = v > 0 ? Math.min(1, g / v) : 1;
  return {
    width: Math.max(1, Math.round(u * S)),
    height: Math.max(1, Math.round(d * S))
  };
}
function _C({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: n = null,
  onFallback: r = null
} = {}) {
  var M;
  const o = typeof n == "function" ? n : () => {
  }, a = typeof r == "function" ? r : () => {
  };
  let c = !1, u = null;
  const d = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, b = () => {
    const k = d();
    return k === u || (u = k, o(k)), k;
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
    var k, P, A;
    if (!c) {
      if (c = !0, (k = t == null ? void 0 : t.removeEventListener) == null || k.call(t, "fullscreenchange", g), d())
        try {
          const O = (P = t.exitFullscreen) == null ? void 0 : P.call(t);
          (A = O == null ? void 0 : O.catch) == null || A.call(O, () => {
          });
        } catch {
        }
      u = !1, o(!1);
    }
  } };
}
const wC = { class: "pano-preview-node-surface" }, SC = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (n, r) => (oe(), fe("div", wC, [
      Le(pn, {
        icon: e.model.fullscreen ? Qe(Pe).fullscreen_close : Qe(Pe).fullscreen,
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
      e.model.viewUnavailable ? (oe(), Sr(Hp, { key: 0 })) : ht("", !0)
    ]));
  }
}, zl = 140, xC = 180, V0 = 40, zf = 10;
function $0(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function z0(e, t) {
  const n = $0(e), r = $0(t);
  return !n.full || !r.full ? !1 : n.full === r.full || n.tail === r.full || n.full === r.tail || n.tail === r.tail;
}
function j0(e) {
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
  return typeof ((a = Qt) == null ? void 0 : a.apiURL) == "function" ? Qt.apiURL(o) : o;
}
function wa(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return wa(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return j0({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const r = wa(n);
      if (r) return r;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : j0(e);
}
function Q1(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function kC(e) {
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
function Kd(e) {
  var o;
  const t = (o = lr) == null ? void 0 : o.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let r = null;
  if (t instanceof Map ? r = t.get(e) || t.get(n) || t.get(Number(n)) || null : r = t[e] || t[n] || null, r) return r;
  if (t instanceof Map) {
    for (const a of t.keys())
      if (z0(a, n)) return t.get(a);
  } else
    for (const a of Object.keys(t))
      if (z0(a, n)) return t[a];
  return null;
}
function MC(e) {
  var r, o;
  const t = Kd(e == null ? void 0 : e.id), n = [
    (r = t == null ? void 0 : t.ui) == null ? void 0 : r.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (o = t == null ? void 0 : t.ui) == null ? void 0 : o.images,
    t == null ? void 0 : t.images
  ];
  for (const a of n)
    if (Array.isArray(a))
      for (const c of a) {
        const u = wa(c);
        if (u && /\.mp4(\?|$)/i.test(u) || u && String((c == null ? void 0 : c.format) || "").toLowerCase() === "video/mp4") return u;
      }
  return "";
}
function NC(e, t = "erp_image") {
  var M, k, P, A, O, G, R;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let r = n.findIndex((V) => String((V == null ? void 0 : V.name) || "") === String(t));
  if ((r < 0 || !e.isInputConnected(r)) && (r = n.findIndex((V, _) => String((V == null ? void 0 : V.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(_))), r < 0) return "";
  const o = e.getInputLink(r);
  if (!o) return "";
  const a = Number(o.origin_id);
  if (!Number.isFinite(a)) return "";
  const c = (P = (k = (M = lr) == null ? void 0 : M.graph) == null ? void 0 : k.getNodeById) == null ? void 0 : P.call(k, a), u = Kd(a), d = Kd(e == null ? void 0 : e.id), b = [
    (A = d == null ? void 0 : d.ui) == null ? void 0 : A.pano_input_images,
    d == null ? void 0 : d.pano_input_images,
    u == null ? void 0 : u.images,
    (O = u == null ? void 0 : u.ui) == null ? void 0 : O.pano_input_images,
    u == null ? void 0 : u.pano_input_images
  ];
  for (const V of b)
    if (Array.isArray(V))
      for (const _ of V) {
        const j = wa(_);
        if (j) return j;
      }
  let g = [];
  try {
    g = typeof ((G = lr) == null ? void 0 : G.getNodeImageUrls) == "function" ? lr.getNodeImageUrls(c) || [] : [];
  } catch {
    g = [];
  }
  if (Array.isArray(g) && g.length > 0)
    for (const V of g) {
      const _ = wa(V);
      if (_) return _;
    }
  if (c) {
    const V = Array.isArray(c == null ? void 0 : c.imgs) ? c.imgs : [];
    for (const _ of V) {
      const j = wa(_);
      if (j) return j;
    }
  }
  const v = (R = c == null ? void 0 : c.widgets) == null ? void 0 : R.find((V) => String((V == null ? void 0 : V.name) || "").toLowerCase() === "image"), S = String((v == null ? void 0 : v.value) || "").trim();
  return S ? Qt.apiURL(`/view?filename=${encodeURIComponent(S)}&type=input&subfolder=`) : "";
}
function jf(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function H0(e, t, n, r, o, a, c) {
  var b, g, v;
  if (t.clearRect(0, 0, n, r), t.fillStyle = "#070707", t.fillRect(0, 0, n, r), !Q1(a) || n <= 1 || r <= 1) {
    jf(t, n, r);
    return;
  }
  if (c.failed) {
    jf(t, n, r);
    return;
  }
  const u = Number(((v = (g = (b = e == null ? void 0 : e.widgets) == null ? void 0 : b.find) == null ? void 0 : g.call(b, (S) => (S == null ? void 0 : S.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360, d = c.render({
    width: n,
    height: r,
    camera: Dc(o, n, r),
    background: { media: a, revision: kC(a), coverage: u },
    layers: []
  });
  d ? t.drawImage(d.canvas, d.x, d.y, d.width, d.height, 0, 0, n, r) : jf(t, n, r);
}
function G0(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class PC {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = r1(() => this.requestDraw()), this.controller = mp({
      getView: () => this.view,
      setView: (r) => {
        this.view = {
          yaw: Ht(Number((r == null ? void 0 : r.yaw) || 0)),
          pitch: te(Number((r == null ? void 0 : r.pitch) || 0), -89.9, 89.9),
          fov: te(Number((r == null ? void 0 : r.fov) || 100), 35, 140)
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
        `min-height:${zl}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = In({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const n = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return zl;
        },
        getHeight() {
          return zl;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = zc(Rd(
        this.node.addDOMWidget("preview", "preview", this.root, n)
      )), this.widget) {
        this.widget.serialize = !1;
        const r = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (o) => {
          const a = r ? r(o) || {} : {};
          return {
            ...a,
            minHeight: Math.max(zl, Number(a.minHeight || 0)),
            minWidth: Math.max(xC, Number(a.minWidth || 0))
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
      return Wp(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ Aa({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = _C({
        root: this.root,
        documentRef: document,
        onChange: (u) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = u), this.requestDraw();
        },
        onFallback: () => {
          var u, d;
          return (d = (u = this.options).onOpen) == null ? void 0 : d.call(u, this.node);
        }
      }), this.surfaceApp = up(SC, {
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
    (o = this.wheelCaptureCleanup) == null || o.call(this), this.wheelCaptureCleanup = ub(n), t.addEventListener("pointerdown", (a) => {
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
      bC(a, n) && (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Q1(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, n, r;
    return this.root ? Td(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((n = this.node.flags) != null && n.collapsed) && (!((r = lr.canvas) != null && r.graph) || this.node.graph === lr.canvas.graph);
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
      return G0(o.x, o.y, a) ? (t.legacyDragPointer = !0, t.controller.startDrag(o.x - a.x, o.y - a.y), (c = this.setDirtyCanvas) == null || c.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var d, b, g, v, S, M;
      const a = qA(this, n, r, o), c = t.getLegacyPreviewRect();
      if (!a || !G0(a.x, a.y, c))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((d = t.view) == null ? void 0 : d.fov) || 100);
      const u = t.controller.applyWheelEvent(n, typeof r == "number" ? r : 0);
      return Number(((b = t.view) == null ? void 0 : b.fov) || 100), u && ((g = this.setDirtyCanvas) == null || g.call(this, !0, !1)), (v = n == null ? void 0 : n.preventDefault) == null || v.call(n), (S = n == null ? void 0 : n.stopPropagation) == null || S.call(n), (M = n == null ? void 0 : n.stopImmediatePropagation) == null || M.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var r, o, a, c;
    const t = Math.max(80, Number(((o = (r = this.node) == null ? void 0 : r.size) == null ? void 0 : o[0]) || 0) - zf * 2), n = Math.max(60, Number(((c = (a = this.node) == null ? void 0 : a.size) == null ? void 0 : c[1]) || 0) - V0 - zf);
    return { x: zf, y: V0, w: t, h: n };
  }
  drawLegacy(t) {
    var o, a;
    if (!t || (a = (o = this.node) == null ? void 0 : o.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    if (n.w <= 2 || n.h <= 2) return;
    t.save(), t.translate(n.x, n.y), H0(this.node, t, n.w, n.h, this.view, this.img, this.previewView);
    const r = this.errorText || (this.previewView.failed ? n1 : "");
    r && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(r, n.w * 0.5, n.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: n, height: r } = vC(t, window.devicePixelRatio || 1);
    return this.canvas.width !== n || this.canvas.height !== r ? (this.canvas.width = n, this.canvas.height = r, !0) : !1;
  }
  refreshImage() {
    var o, a, c;
    const t = MC(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (o = this.mediaCleanup) == null || o.call(this), this.imgSrc = t;
      const u = ou(document, "preview-node.video");
      u.muted = !0, u.loop = !0, u.preload = "auto", u.playsInline = !0, u.crossOrigin = "anonymous";
      const d = () => {
        this.imgSrc === t && (this.img = u, this.requestDraw());
      }, b = () => this.requestDraw();
      u.addEventListener("loadedmetadata", d), u.addEventListener("loadeddata", d), u.addEventListener("timeupdate", b), u.addEventListener("play", b), u.addEventListener("pause", b), u.src = t, u.load(), this.mediaCleanup = () => {
        u.pause(), u.removeEventListener("loadedmetadata", d), u.removeEventListener("loadeddata", d), u.removeEventListener("timeupdate", b), u.removeEventListener("play", b), u.removeEventListener("pause", b), u.removeAttribute("src"), u.load();
      };
      return;
    }
    const n = NC(this.node, this.imageInputName);
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
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1, this.img instanceof HTMLVideoElement && !this.img.paused && !this.shown() && this.img.pause();
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), H0(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (a = (o = this.node).setDirtyCanvas) == null || a.call(o, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var n, r, o, a, c, u, d, b, g, v, S, M, k, P, A, O;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (o = (r = this.resizeObserver) == null ? void 0 : r.disconnect) == null || o.call(r), this.resizeObserver = null, (c = (a = this.fullscreenController) == null ? void 0 : a.destroy) == null || c.call(a), this.fullscreenController = null, (u = this.wheelCaptureCleanup) == null || u.call(this), this.wheelCaptureCleanup = null, (b = (d = this.surfaceApp) == null ? void 0 : d.unmount) == null || b.call(d), this.surfaceApp = null, (v = (g = this.surfaceHost) == null ? void 0 : g.remove) == null || v.call(g), this.surfaceHost = null, this.surfaceModel = null, this.node.__panoPreviewNodeSurface = null, (S = this.mediaCleanup) == null || S.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (k = (M = this.root) == null ? void 0 : M.remove) == null || k.call(M);
    } catch {
    }
    try {
      K1(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((O = (A = (P = this.node) == null ? void 0 : P.widgets) == null ? void 0 : A.find) == null ? void 0 : O.call(A, (G) => (G == null ? void 0 : G.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), this.node.__panoPreviewNodeRuntime = null;
  }
}
function AC(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new PC(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function ev(e, t, n) {
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
function Jp(e) {
  return !!(e != null && e.prototype);
}
function qs(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function CC(e, t = {}) {
  Jp(e) || AC(e, {
    ...t,
    onOpen: qs(e, t.onOpen)
  });
}
function IC(e, t = {}) {
  const n = (t == null ? void 0 : t.enabled) === !0, r = {
    ...t,
    mode: "stickers",
    noPreview: !n
  };
  if (!Jp(e)) {
    R0(e, {
      ...r,
      onOpen: qs(e, t.onOpen)
    });
    return;
  }
  ev(e, "stickers_node_preview", (o) => {
    R0(o, {
      ...r,
      onOpen: qs(o, t.onOpen)
    });
  });
}
function EC(e, t = {}) {
  if (!Jp(e)) {
    L0(e, {
      ...t,
      onOpen: qs(e, t.onOpen)
    });
    return;
  }
  ev(e, "cutout_preview", (n) => {
    L0(n, {
      ...t,
      onOpen: qs(n, t.onOpen)
    });
  });
}
const Un = {
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
}, hi = "pen";
function K0(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function OC(e = 80, t = null, n = 8) {
  const r = [];
  let o = -1;
  const a = Math.max(1, Number(e || 80)), c = Math.max(1, Number(n || 8));
  function u(b) {
    if (r.splice(0, r.length), o = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((v) => {
      r.push(String(v || ""));
    }), !r.length)) return;
    const g = Number(b.index);
    Number.isInteger(g) ? g === -1 ? o = -1 : o = Math.max(0, Math.min(r.length - 1, g)) : o = r.length - 1;
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
      const b = r.length, g = Math.max(0, b - c), v = o >= 0 ? Math.max(0, Math.min(o, g)) : g, S = r.slice(v, v + c), M = o < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, o - v));
      return {
        version: 1,
        entries: S,
        index: M
      };
    },
    hydrate: u
  };
}
function FC({ requestFrame: e, cancelFrame: t, tasks: n }) {
  const r = /* @__PURE__ */ new Set();
  let o = null;
  function a() {
    o = null;
    for (const [c, u] of Object.entries(n))
      r.delete(c) && u();
  }
  return {
    request(c) {
      r.add(c), o ?? (o = e(a));
    },
    cancel() {
      r.clear(), o !== null && t(o), o = null;
    }
  };
}
const Nt = Object.freeze({
  // The state changed: Stickers, the Camera, the painting, the selection, the playhead.
  STATE: "state",
  // The view moved: the camera, the mode, a transition step.
  VIEW: "view",
  // The playhead moved (playback, a scrub): the state is drawn at another frame.
  PLAYHEAD: "playhead",
  // Only the 2D overlay changed: a hover, a cursor, a handle.
  OVERLAY: "overlay",
  // Media arrived or changed: an image or a VIDEO frame loaded, a `scene` item loaded, Spark sorted.
  MEDIA: "media",
  // The stage changed size.
  RESIZE: "resize",
  // The WebGL context came back.
  CONTEXT: "context"
}), TC = new Set(Object.values(Nt));
function DC({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: n, animating: r }) {
  let o = 0, a = !1, c = !1, u = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map(), b = 1;
  function g() {
    !o && !a && !c && (o = e(v));
  }
  function v(S) {
    o = 0, a = !0;
    try {
      const M = d;
      d = /* @__PURE__ */ new Map();
      for (const P of M.values()) P(S);
      if (c) return;
      const k = u;
      u = /* @__PURE__ */ new Set(), (k.size || r()) && n(S, k);
    } finally {
      a = !1;
    }
    (u.size || d.size || r()) && g();
  }
  return {
    requestDraw(S) {
      if (!TC.has(S)) throw new Error(`Unknown draw reason: ${S}`);
      u.add(S), g();
    },
    requestFrame(S) {
      const M = b++;
      return d.set(M, S), g(), M;
    },
    cancelFrame(S) {
      d.delete(S);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      g();
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      c = !0, o && t(o), o = 0, d.clear(), u.clear();
    }
  };
}
const LC = 250, RC = 600, VC = 180, $C = 2;
function zC(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function xs(e, t, n) {
  return e + (t - e) * n;
}
function jC(e, t, n = 1) {
  const r = Math.max(
    Math.abs(hp(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), o = Math.hypot(...t.position.map((c, u) => c - e.position[u])) / Math.max(n, 1e-6), a = Math.min(1, r / VC + o / $C);
  return Math.round(xs(LC, RC, a));
}
function HC(e, t, n) {
  const r = zC(te(n, 0, 1));
  return {
    position: e.position.map((o, a) => xs(o, t.position[a], r)),
    yaw_deg: Ht(e.yaw_deg + hp(e.yaw_deg, t.yaw_deg) * r),
    pitch_deg: xs(e.pitch_deg, t.pitch_deg, r),
    hFOV_deg: xs(e.hFOV_deg, t.hFOV_deg, r),
    distance: xs(e.distance, t.distance, r)
  };
}
function GC(e, t) {
  return e.position.every((n, r) => Math.abs(n - t.position[r]) < 1e-9) && Math.abs(hp(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function KC(e, t, n, { scale: r = 1, end: o = null } = {}) {
  return GC(e, t) ? null : { from: e, to: t, startTs: n, durationMs: jC(e, t, r), end: o };
}
function WC(e, t) {
  const n = te((t - e.startTs) / e.durationMs, 0, 1);
  return n >= 1 ? { view: e.to, done: !0 } : { view: HC(e.from, e.to, n), done: !1 };
}
function uc(e, t) {
  var n;
  return ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e;
}
function BC(e, t, n) {
  const r = uc(e, t);
  return n === "3dof" ? e === "3dof" || r === "3dof" ? "keep" : "return" : e === n && r === n ? "keep" : "switch";
}
function ta(e, t, n, r) {
  const o = Array.isArray(e) ? e.find((a) => String((a == null ? void 0 : a[t]) || "") === String(n || "")) : null;
  o && Object.assign(o, r);
}
function UC(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function YC({
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
  var R, V;
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
    historyEntries: Array.from({ length: 8 }, (_, j) => ({ index: j, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return g;
  const v = ((R = t.find((_) => o(e.paintColor, _.color))) == null ? void 0 : R.id) || "", S = !v, M = a(e.customPaintColor), k = Math.round(Math.max(0, Math.min(1, Number(((V = e.customPaintColor) == null ? void 0 : V.a) ?? 1))) * 100), P = u(e.primaryTool === "paint" ? e.paintTool : e.maskTool), A = e.brushSizes[P] ?? 10, O = d(), G = Array.from({ length: 8 }, (_, j) => e.customPaintHistory[j] || null);
  return {
    ...g,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: v,
    customColorActive: S,
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
    historyEntries: G.map((_, j) => ({
      index: j,
      color: _ ? { cssColor: r(_, 1) } : null
    })),
    sizeValue: A,
    sizeText: String(A),
    sizeFill: `${Math.max(0, Math.min(100, (A - 1) / 119 * 100))}%`,
    sizeDisabled: O,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function XC({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
const qC = {
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
function JC(e) {
  const t = [];
  for (const n of e) {
    const [r, o, a] = qC[n.key] || [], c = t[t.length - 1];
    r && (c != null && c.grouped) && c.label === r ? c.fields.push({ ...n, short: o, drag: a }) : t.push({ key: n.key, label: r || n.label, grouped: !!r, fields: [{ ...n, short: o, drag: a }] });
  }
  return t;
}
function Hf(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function ZC({ spaceView: e, spaceMode: t, readOnly: n, frameMode: r, showGrid: o }) {
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
        icon: a ? Pe.eye : Pe.eye_dashed,
        pressed: a ? "true" : "false",
        label: a ? "Hide Grid" : "Show Grid",
        tip: a ? "Hide grid" : "Show grid",
        disabled: !!n || !!r
      }
    }
  };
}
function QC({ hasShot: e, erp: t = !1, hidden: n = !1, studio: r = !1 }) {
  const o = !e || t;
  let a = null;
  return r && o && (n ? a = "The camera is hidden" : a = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: o, tip: a };
}
function eI(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
const Sa = "erp", tI = ["1:1", "4:3", "3:2", "16:9"];
function tv(e, { erp: t = !1, coverage: n = 360 } = {}) {
  return [
    ...tI.map((r) => ({ value: r, label: r, active: e === r })),
    ...t ? [{ value: Sa, label: Number(n) === 180 ? "180°" : "360°", active: e === Sa }] : []
  ];
}
function nI({
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
    rows: JC(c),
    notes: u,
    paramsDisabled: !r,
    uiSettings: t ? null : d,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function rI({
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
  isExternalSticker: g,
  isStickerHidden: v,
  canRestoreSelectedToInitial: S,
  iconSet: M,
  // PanoramaCutoutNode's shot is its Camera (#77), which is always there and is not locked. Panorama
  // Studio's Camera is deleted from its menu and has the 360° preset (#89).
  cameraShot: k = !1,
  cameraDeletable: P = !1,
  erpChoice: A = !1,
  coverage: O = 360
}) {
  if (!(o != null && o.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let G = [];
  if (n.length > 1)
    G = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!c },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!c },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!c }
    ];
  else if (r === "stroke")
    G = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!u },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!u }
    ];
  else if (r === "image") {
    if (G = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: M.bring_front, disabled: !!u },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: M.send_back, disabled: !!u }
    ], g(t) || (G.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: M.duplicate }), G.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: M.replace_image })), g(t)) {
      const R = S(), V = v(t);
      G.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: R ? "Back to initial position" : "Already at initial position",
        icon: M.back_initial,
        disabled: !R
      }), G.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: V ? "Show" : "Hide",
        tip: V ? "Show input image" : "Hide input image",
        icon: V ? M.eye : M.eye_dashed
      });
    }
    G.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed }), g(t) || G.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!u });
  } else
    G = [
      {
        key: "aspect",
        kind: "aspect",
        icon: M.aspect,
        open: !!b,
        choices: tv(d, { erp: A, coverage: O })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: M.rotate_90, disabled: d === Sa }
    ], k ? P && G.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete }) : G.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? M.lock_open : M.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: M.delete, disabled: !!u }
    );
  return nv(o.corners, G);
}
const W0 = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function iI({ corners: e, gizmoBox: t = null, gizmoMode: n, camera: r = !1, deletable: o = !1 }) {
  const a = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], c = r ? W0.filter((u) => u.cameraTip) : W0;
  return nv([...e, ...a], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: c.map(({ key: u, label: d, tip: b, cameraTip: g }) => ({ key: u, label: d, tip: r ? g : b, pressed: u === n ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...o ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: Pe.delete }] : []
  ]);
}
function oI(e, t, n, r, o) {
  const { minX: u, maxX: d, minY: b, maxY: g } = e || {};
  if (![u, d, b, g].every(Number.isFinite)) return null;
  const v = Math.min(Math.max((u + d) * 0.5 - t * 0.5, 14), Math.max(14, r - t - 14)), S = Math.max(14, o - n - 14), M = g + 18, k = b - 18 - n;
  let P;
  return M <= S ? P = Math.max(M, 14) : k >= 14 ? P = Math.min(k, S) : P = Math.min(Math.max(M, 14), S), { left: v, top: P };
}
function nv(e, t) {
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
const rv = "painting";
function aI(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const sI = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function lI(e, { span: t, selection: n, selectedId: r, expanded: o, openRows: a, audio: c = null, fpsLocked: u = !1, camera: d = !1, cameraHideable: b = !1, stickers: g = !0, scene: v = !1, sceneLocked: S = !1 }) {
  const M = (G, R, V, _, j, W, { keyable: le = !0, hideable: ke = !0 } = {}) => {
    const F = (q) => (n == null ? void 0 : n.owner) === G && n.lane === q ? n.frames.map((J) => J + W) : [];
    return {
      id: G,
      label: V,
      icon: _,
      clip: j,
      selected: G === r,
      hideable: ke,
      visible: R.visible,
      keyable: le,
      open: le && a.has(G),
      keys: mN(R).map((q) => ({ frame: q.frame + W, full: q.full })),
      selectedFrames: F(null),
      lanes: (le ? Ea(R) : []).map((q) => ({
        key: `${G}:${q}`,
        lane: q,
        label: sI[q],
        frames: R[q].keyframes.map((J) => J.frame + W),
        selectedFrames: F(q)
      }))
    };
  }, k = g ? e.stickers : [], P = k.filter((G) => G.placement === "sky").sort((G, R) => R.z_index - G.z_index), A = k.filter((G) => G.placement === "world"), O = ({ start: G, in: R, duration: V }) => ({ clip: { start: G, end: V === null ? null : G + V }, offset: G - R });
  return {
    visible: !0,
    expanded: o,
    hasAudio: !!c,
    muted: !!(c != null && c.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: u || S,
    lengthLocked: S,
    lockTip: S ? "Set by the scene" : "Set by the video input",
    length: S ? t : e.timeline.length,
    rows: [
      ...d ? [M("camera", e.camera, "Camera", Pe.camera, null, 0, { hideable: b })] : [],
      ...[...P, ...A].map((G) => {
        const { clip: R, offset: V } = O(G.clip);
        return M(G.id, G, Sd(G), Pe.image, R, V);
      }),
      ...g && (aI(e.painting) || !e.painting_visible) ? [{
        id: rv,
        label: "Paint",
        icon: Pe.paintbrush_vertical_tool,
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
      ...g && (v || Fc(e.scene)) ? [(() => {
        const { clip: G, offset: R } = O(e.scene.clip);
        return M("scene", e.scene, "Scene", Pe.box, G, R, { keyable: !1 });
      })()] : []
    ]
  };
}
function cI(e, t, n, r) {
  const o = vN(e, t, n);
  if (!o) return null;
  const a = Math.min(...n) + r, c = Math.max(...n) + r;
  return { label: a === c ? `Frame ${a}` : `${a} – ${c}`, ...o };
}
const uI = { class: "pano-floating-right" }, fI = {
  key: 0,
  class: "pano-floating-space"
}, dI = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, pI = ["data-settled"], hI = ["data-ready", "data-settled"], mI = ["aria-label", "data-tip"], gI = {
  key: 1,
  class: "pano-camera-preview-label"
}, yI = {
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
    return (t, n) => (oe(), fe(qe, null, [
      Y("div", uI, [
        e.space ? ki((oe(), fe("div", fI, [
          Y("div", dI, [
            (oe(!0), fe(qe, null, Pt(e.space.modes, (r) => (oe(), Sr(pn, {
              key: r.key,
              "extra-class": { active: r.key === e.space.mode },
              icon: r.icon,
              label: r.label,
              tip: r.tip,
              pressed: r.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": r.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Le(pn, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Eo, e.space.visible]
        ]) : ht("", !0),
        (oe(!0), fe(qe, null, Pt(e.buttons, (r) => (oe(), Sr(pn, {
          key: r.action,
          icon: r.icon,
          label: r.label,
          tip: r.tip,
          pressed: r.pressed,
          attrs: { "data-action": r.action, disabled: r.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      ki(Y("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Y("div", {
          class: pt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: It({
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
          e.previewToggle.visible ? (oe(), fe("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Le(Kt, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, mI)) : ht("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (oe(), fe("div", gI, rt(e.preview.label || "Preview unavailable"), 1)) : ht("", !0)
        ], 14, hI)
      ], 8, pI), [
        [Eo, e.preview.visible]
      ])
    ], 64));
  }
}, bI = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, vI = ["y2", "transform"], _I = ["transform"], wI = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (o, a) => a * 15), r = ft(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (o, a) => ki((oe(), fe("div", {
      class: pt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (oe(), fe("svg", bI, [
        a[1] || (a[1] = Y("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (oe(!0), fe(qe, null, Pt(Qe(n), (c) => (oe(), fe("line", {
          key: c,
          class: pt(["pano-frame-roll-knob-tick", { zero: c === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: c % 45 === 0 ? 7 : 6,
          transform: `rotate(${c} 20 20)`
        }, null, 10, vI))), 128)),
        Y("g", { transform: r.value }, [...a[0] || (a[0] = [
          Y("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, _I),
        a[2] || (a[2] = Y("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Eo, e.model.visible === !0]
    ]);
  }
}, SI = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), fe("div", {
      class: pt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Le(R1, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Le(pn, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Le(wI, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, xI = ["aria-label"], kI = { class: "pano-canvas-confirm-title" }, MI = { class: "pano-canvas-confirm-text" }, NI = { class: "pano-canvas-confirm-actions" }, PI = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, AI = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ en(null), r = /* @__PURE__ */ en(null);
    let o = null;
    function a() {
      const v = r.value;
      return v ? Array.from(v.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function c(v) {
      const S = r.value;
      if (!S) return;
      const M = S.querySelector(`[data-action='${v}']`);
      M instanceof HTMLButtonElement && M.click();
    }
    function u() {
      var P;
      const v = r.value;
      if (!v) return;
      const S = v.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const k = a()[0] || v;
      (P = k == null ? void 0 : k.focus) == null || P.call(k);
    }
    function d() {
      o instanceof HTMLElement && o.isConnected && o.focus(), o = null;
    }
    function b(v) {
      var O;
      if (v.defaultPrevented) return;
      if (v.key === "Escape") {
        v.preventDefault(), v.stopPropagation(), c("confirm-cancel");
        return;
      }
      if (v.key !== "Tab") return;
      const S = a(), M = r.value;
      if (!S.length) {
        v.preventDefault(), (O = M == null ? void 0 : M.focus) == null || O.call(M);
        return;
      }
      const k = S[0], P = S[S.length - 1], A = document.activeElement;
      if (v.shiftKey) {
        (A === k || A === M || !(M != null && M.contains(A))) && (v.preventDefault(), P.focus());
        return;
      }
      (A === P || !(M != null && M.contains(A))) && (v.preventDefault(), k.focus());
    }
    function g(v) {
      v.target === n.value && c("confirm-cancel");
    }
    return Mo(() => t.model.visible, (v, S) => {
      if (v) {
        o = document.activeElement, Qc(() => {
          u();
        });
        return;
      }
      S && d();
    }, { immediate: !0 }), el(() => {
      d();
    }), (v, S) => e.model.visible === !0 ? (oe(), fe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Lt(g, ["self"])
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
        Y("div", kI, rt(e.model.title), 1),
        Y("div", MI, rt(e.model.text), 1),
        Y("div", NI, [
          S[0] || (S[0] = Y("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Y("button", PI, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, xI)
    ], 512)) : ht("", !0);
  }
}, CI = ["data-paint-pane"], II = ["hidden"], EI = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], OI = ["aria-pressed", "disabled"], FI = ["hidden"], TI = { class: "pano-paint-color-pop-head" }, DI = { class: "pano-paint-color-field" }, LI = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, RI = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, VI = { class: "pano-paint-color-field" }, $I = { class: "pano-paint-alpha-wrap" }, zI = ["value"], jI = { "data-paint-alpha-value": "" }, HI = ["hidden"], GI = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, KI = ["data-paint-history-index", "aria-label", "disabled"], WI = ["data-paint-footer"], BI = ["data-paint-group"], UI = ["hidden"], YI = ["value", "disabled"], XI = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, qI = ["hidden"], JI = {
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
    return (r, o) => (oe(), fe("div", {
      class: pt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (oe(!0), fe(qe, null, Pt(e.panes, (a) => {
        var c;
        return oe(), fe("div", {
          key: a.key,
          class: pt(["pano-paint-pane", { "is-active": e.state.activePane === a.key }]),
          "data-paint-pane": a.key
        }, [
          a.showColorFloat ? (oe(), fe("div", {
            key: 0,
            class: pt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (oe(!0), fe(qe, null, Pt(e.paintSwatches, (u) => (oe(), fe("button", {
              key: u.id,
              class: pt(["pano-paint-color-dot", { active: e.state.activeSwatchId === u.id }]),
              type: "button",
              "data-paint-color-swatch": u.id,
              "aria-label": u.label,
              style: It(t(u)),
              "aria-pressed": e.state.activeSwatchId === u.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, EI))), 128)),
            Y("button", {
              class: pt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: It({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, OI),
            Y("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: It({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              Y("div", TI, [
                Y("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: It({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                o[0] || (o[0] = Y("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Y("div", DI, [
                Y("div", LI, [
                  Y("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: It({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Y("div", RI, [
                  Y("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: It({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Y("label", VI, [
                o[1] || (o[1] = Y("span", null, "Opacity", -1)),
                Y("div", $I, [
                  Y("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, zI),
                  Y("span", jI, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Y("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Y("div", GI, [
                  (oe(!0), fe(qe, null, Pt(e.state.historyEntries || [], (u) => (oe(), fe("button", {
                    key: u.index,
                    class: pt(["pano-paint-color-history-dot", { empty: !u.color }]),
                    type: "button",
                    "data-paint-history-index": u.index,
                    "aria-label": `Recent color ${u.index + 1}`,
                    disabled: !u.color,
                    style: It(n(u.color))
                  }, null, 14, KI))), 128))
                ])
              ], 8, HI)
            ], 12, FI)
          ], 10, II)) : ht("", !0),
          Y("div", {
            class: "pano-paint-footer",
            "data-paint-footer": a.footer
          }, [
            Y("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": a.group
            }, [
              (oe(!0), fe(qe, null, Pt(a.tools, (u) => {
                var d;
                return oe(), Sr(pn, {
                  key: `${a.key}-${u.key}`,
                  icon: u.icon,
                  label: u.label,
                  tip: u.tip,
                  "extra-class": { active: ((d = e.state.activeTools) == null ? void 0 : d[a.key]) === u.key },
                  attrs: { [u.attr]: u.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, BI),
            Y("div", {
              class: pt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
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
                style: It({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, YI),
              Y("span", XI, rt(e.state.sizeText || "10"), 1)
            ], 10, UI),
            Y("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((c = e.state.clearVisible) == null ? void 0 : c[a.key]) ?? !a.clearHidden)
            }, [
              Le(pn, {
                icon: Qe(Pe).clear,
                label: a.clearLabel,
                tip: a.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": a.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, qI)
          ], 8, WI)
        ], 10, CI);
      }), 128))
    ], 2));
  }
}, ZI = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const n = /* @__PURE__ */ en(null), r = /* @__PURE__ */ en(null), o = /* @__PURE__ */ en(null);
    function a() {
      return {
        cursor: n.value,
        sizePreview: r.value,
        sizeSample: o.value
      };
    }
    return t({ getRefs: a }), (c, u) => (oe(), fe(qe, null, [
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
}, QI = ["aria-label"], eE = ["data-tip", "aria-pressed"], tE = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, n = ft(() => Math.max(0, t.buttons.findIndex((r) => r.pressed === "true")));
    return (r, o) => (oe(), fe("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: It({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": n.value })
    }, [
      (oe(!0), fe(qe, null, Pt(e.buttons, (a) => (oe(), fe("button", vi({
        key: a.key,
        class: ["pano-segments-item", { active: a.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: a.key }, {
        "data-tip": a.tip,
        "aria-pressed": a.pressed
      }), rt(a.label), 17, eE))), 128))
    ], 12, QI));
  }
}, nE = {
  key: 0,
  class: "pano-cutout-menu"
}, rE = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, iE = ["data-aspect"], oE = ["data-action", "aria-label", "data-tip", "disabled"], aE = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), fe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: It({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (oe(!0), fe(qe, null, Pt(e.model.items || [], (r) => (oe(), fe(qe, {
        key: r.key
      }, [
        r.kind === "aspect" ? (oe(), fe("div", nE, [
          Y("button", rE, [
            Le(Kt, {
              icon: r.icon
            }, null, 8, ["icon"])
          ]),
          Y("div", {
            class: pt(["pano-aspect-popover", { open: r.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (oe(!0), fe(qe, null, Pt(r.choices || [], (o) => (oe(), fe("button", {
              key: o.value,
              class: pt(["pano-btn pano-aspect-choice", { active: o.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": o.value
            }, rt(o.label), 11, iE))), 128))
          ], 2)
        ])) : r.kind === "segments" ? (oe(), Sr(tE, {
          key: 1,
          buttons: r.buttons || [],
          attr: r.attr,
          label: r.label
        }, null, 8, ["buttons", "attr", "label"])) : (oe(), fe("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": r.action,
          "aria-label": r.label,
          "data-tip": r.tip,
          disabled: r.disabled === !0
        }, [
          Le(Kt, {
            icon: r.icon
          }, null, 8, ["icon"])
        ], 8, oE))
      ], 64))), 128))
    ], 4));
  }
}, sE = {
  key: 0,
  class: "pano-easing"
}, lE = { class: "pano-section-title" }, cE = { class: "pano-easing-range" }, uE = { class: "pano-easing-modes" }, fE = ["aria-pressed", "onClick"], dE = ["viewBox"], pE = ["x", "y"], hE = ["x1", "y1", "x2", "y2"], mE = ["d"], gE = ["x1", "y1", "x2", "y2"], yE = ["x1", "y1", "x2", "y2"], bE = ["cx", "cy"], vE = ["cx", "cy"], _E = { class: "pano-easing-note" }, mi = 132, mo = 14, wE = {
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
    ], a = /* @__PURE__ */ en(null), c = ft(() => {
      var k;
      return Array.isArray((k = n.model) == null ? void 0 : k.easing) ? n.model.easing : null;
    }), u = (k) => mo + k * mi, d = (k) => mo + (1 - k) * mi, b = ft(() => {
      var G;
      if (((G = n.model) == null ? void 0 : G.easing) === "hold") return `M${u(0)} ${d(0)} H${u(1)} V${d(1)}`;
      const [k, P, A, O] = c.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${u(0)} ${d(0)} C${u(k)} ${d(P)} ${u(A)} ${d(O)} ${u(1)} ${d(1)}`;
    }), g = ft(() => c.value ? c.value.map((k) => k.toFixed(2)).join(", ") : "");
    function v(k) {
      var P;
      return JSON.stringify(k.easing) === JSON.stringify((P = n.model) == null ? void 0 : P.easing);
    }
    function S(k, P) {
      r("timeline", { type: "easing", easing: k, commit: P });
    }
    function M(k, P) {
      var V;
      if (k.button !== 0 || !c.value) return;
      const A = k.currentTarget;
      (V = A.setPointerCapture) == null || V.call(A, k.pointerId);
      let O = null;
      const G = (_) => {
        const j = a.value.getBoundingClientRect(), W = j.width / (mi + mo * 2), le = ((_.clientX - j.left) / W - mo) / mi, ke = 1 - ((_.clientY - j.top) / W - mo) / mi;
        O = [...O || c.value], O[P] = Math.round(Math.min(1, Math.max(0, le)) * 100) / 100, O[P + 1] = Math.round(Math.min(1, Math.max(0, ke)) * 100) / 100, S(O, !1);
      }, R = () => {
        A.removeEventListener("pointermove", G), A.removeEventListener("pointerup", R), A.removeEventListener("pointercancel", R), O && S(O, !0);
      };
      A.addEventListener("pointermove", G), A.addEventListener("pointerup", R), A.addEventListener("pointercancel", R);
    }
    return (k, P) => e.model ? (oe(), fe("div", sE, [
      Y("div", lE, [
        P[2] || (P[2] = Y("span", null, "Easing", -1)),
        Y("span", cE, rt(e.model.label), 1)
      ]),
      Y("div", uE, [
        (oe(), fe(qe, null, Pt(o, (A) => Y("button", {
          key: A.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": v(A) ? "true" : "false",
          onClick: (O) => S(A.easing, !0)
        }, rt(A.label), 9, fE)), 64))
      ]),
      c.value || e.model.easing === "hold" ? (oe(), fe("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: a,
        class: "pano-easing-graph",
        viewBox: `0 0 ${mi + mo * 2} ${mi + mo * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Y("rect", {
          class: "pano-easing-square",
          x: u(0),
          y: d(1),
          width: mi,
          height: mi
        }, null, 8, pE),
        Y("line", {
          class: "pano-easing-diagonal",
          x1: u(0),
          y1: d(0),
          x2: u(1),
          y2: d(1)
        }, null, 8, hE),
        Y("path", {
          class: "pano-easing-curve",
          d: b.value
        }, null, 8, mE),
        c.value ? (oe(), fe(qe, { key: 0 }, [
          Y("line", {
            class: "pano-easing-arm",
            x1: u(0),
            y1: d(0),
            x2: u(c.value[0]),
            y2: d(c.value[1])
          }, null, 8, gE),
          Y("line", {
            class: "pano-easing-arm",
            x1: u(1),
            y1: d(1),
            x2: u(c.value[2]),
            y2: d(c.value[3])
          }, null, 8, yE),
          Y("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[0]),
            cy: d(c.value[1]),
            r: "6",
            onPointerdown: P[0] || (P[0] = (A) => M(A, 0))
          }, null, 40, bE),
          Y("circle", {
            class: "pano-easing-handle",
            cx: u(c.value[2]),
            cy: d(c.value[3]),
            r: "6",
            onPointerdown: P[1] || (P[1] = (A) => M(A, 2))
          }, null, 40, vE)
        ], 64)) : ht("", !0)
      ], 8, dE)) : ht("", !0),
      Y("div", _E, [
        e.model.mixed ? (oe(), fe(qe, { key: 0 }, [
          ys("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (oe(), fe(qe, { key: 1 }, [
          ys("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (oe(), fe(qe, { key: 2 }, [
          ys("Holds the value, then jumps to the next keyframe.")
        ], 64)) : c.value ? (oe(), fe(qe, { key: 3 }, [
          ys("cubic-bezier(" + rt(g.value) + ")", 1)
        ], 64)) : ht("", !0)
      ])
    ])) : ht("", !0);
  }
}, SE = {
  class: "pano-side",
  "data-side": ""
}, xE = { class: "pano-side-head" }, kE = { class: "pano-side-title" }, ME = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, NE = {
  key: 0,
  class: "pano-side-scroll"
}, PE = { class: "pano-inspector" }, AE = { class: "pano-ui-row pano-coverage-row" }, CE = ["data-selected"], IE = ["aria-pressed", "disabled"], EE = ["aria-pressed", "disabled"], OE = {
  key: 0,
  class: "pano-section-title"
}, FE = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, TE = {
  class: "pano-picker",
  "data-picker": "selection"
}, DE = ["disabled"], LE = { class: "pano-picker-label" }, RE = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, VE = ["hidden"], $E = ["data-selection-id"], zE = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, jE = {
  key: 2,
  class: "pano-state-actions"
}, HE = ["disabled"], GE = ["data-key"], KE = { class: "pano-field-group-values" }, WE = ["title", "onPointerdown"], BE = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], UE = ["data-key"], YE = ["min", "max", "step", "value", "disabled", "data-param-key"], XE = ["min", "max", "step", "value", "disabled", "data-param-key"], qE = ["open"], JE = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, ZE = { class: "pano-ui-settings-body" }, QE = { class: "pano-ui-row" }, eO = ["data-selected"], tO = ["aria-pressed"], nO = ["aria-pressed"], rO = { class: "pano-ui-row" }, iO = ["data-selected"], oO = ["aria-pressed"], aO = ["aria-pressed"], sO = {
  key: 1,
  class: "pano-side-footer"
}, lO = ["data-action"], cO = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = ft(() => {
      const b = n.model;
      return !b || typeof b != "object" ? !1 : Object.keys(b).length > 0 && !!b.coverage;
    });
    function a(b) {
      return { "--v": `${Number((b == null ? void 0 : b.fillPct) || 0)}%` };
    }
    function c(b, g) {
      return (g == null ? void 0 : g.paramsDisabled) === !0 || (b == null ? void 0 : b.enabled) === !1;
    }
    const u = {};
    function d(b, g) {
      const v = u[g.key];
      if (b.button !== 0 || !v || c(g, n.model)) return;
      b.preventDefault();
      const S = b.currentTarget, M = b.clientX, k = Number(v.value) || 0;
      let P = !1;
      S.setPointerCapture(b.pointerId);
      const A = (G) => {
        if (!P && Math.abs(G.clientX - M) < 3) return;
        P = !0;
        const R = k + (G.clientX - M) * g.drag * (G.shiftKey ? 0.1 : 1);
        v.value = String(Number(R.toFixed(3))), v.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, O = () => {
        S.removeEventListener("pointermove", A), S.removeEventListener("pointerup", O), S.removeEventListener("pointercancel", O), S.removeEventListener("lostpointercapture", O), P ? v.dispatchEvent(new Event("change", { bubbles: !0 })) : v.focus();
      };
      S.addEventListener("pointermove", A), S.addEventListener("pointerup", O), S.addEventListener("pointercancel", O), S.addEventListener("lostpointercapture", O);
    }
    return (b, g) => {
      var v, S, M, k, P;
      return oe(), fe("div", SE, [
        Y("div", xE, [
          Y("div", kE, [
            Y("span", ME, [
              Le(Kt, {
                icon: Qe(Pe).globe
              }, null, 8, ["icon"])
            ]),
            Y("span", null, rt(e.nodeTitle), 1)
          ]),
          g[1] || (g[1] = Y("div", { class: "pano-side-actions" }, null, -1))
        ]),
        g[10] || (g[10] = Y("div", { class: "pano-divider" }, null, -1)),
        o.value ? (oe(), fe("div", NE, [
          Y("div", PE, [
            g[9] || (g[9] = Y("div", { class: "pano-section-title" }, [
              Y("span", null, "Scene")
            ], -1)),
            Y("div", AE, [
              g[2] || (g[2] = Y("label", null, "Coverage", -1)),
              Y("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((v = e.model.coverage) == null ? void 0 : v.value) === 180 ? "1" : "0"
              }, [
                Y("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((S = e.model.coverage) == null ? void 0 : S.value) === 360 ? "true" : "false",
                  disabled: ((M = e.model.coverage) == null ? void 0 : M.disabled) === !0
                }, "360", 8, IE),
                Y("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((k = e.model.coverage) == null ? void 0 : k.value) === 180 ? "true" : "false",
                  disabled: ((P = e.model.coverage) == null ? void 0 : P.disabled) === !0
                }, "180", 8, EE)
              ], 8, CE)
            ]),
            e.model.transformTitle !== !1 ? (oe(), fe("div", OE, [...g[3] || (g[3] = [
              Y("span", null, "Transform", -1)
            ])])) : ht("", !0),
            e.model.selectionPicker ? (oe(), fe("div", FE, [
              Y("label", null, rt(e.model.selectionPicker.label), 1),
              Y("div", TE, [
                Y("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Y("span", LE, [
                    e.model.selectionPicker.currentIcon ? (oe(), fe("span", RE, [
                      Le(Kt, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    Y("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  g[4] || (g[4] = Y("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, DE),
                Y("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (oe(!0), fe(qe, null, Pt(e.model.selectionPicker.items || [], (A) => (oe(), fe("button", {
                    key: A.id,
                    type: "button",
                    class: pt(["pano-picker-item", { active: A.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": A.id
                  }, [
                    A.icon ? (oe(), fe("span", zE, [
                      Le(Kt, {
                        icon: A.icon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    Y("span", null, rt(A.label), 1)
                  ], 10, $E))), 128))
                ], 8, VE)
              ])
            ])) : ht("", !0),
            e.model.copyStateButton ? (oe(), fe("div", jE, [
              Y("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Le(Kt, {
                  icon: Qe(Pe).copy
                }, null, 8, ["icon"]),
                Y("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, HE)
            ])) : ht("", !0),
            Y("div", {
              class: pt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (oe(!0), fe(qe, { key: 0 }, Pt(e.model.notes, (A) => (oe(), fe("div", {
                key: A,
                class: "pano-param-note"
              }, rt(A), 1))), 128)) : (oe(!0), fe(qe, { key: 1 }, Pt(e.model.rows || [], (A) => (oe(), fe(qe, {
                key: A.key
              }, [
                A.grouped ? (oe(), fe("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": A.key
                }, [
                  Y("label", null, rt(A.label), 1),
                  Y("div", KE, [
                    (oe(!0), fe(qe, null, Pt(A.fields, (O) => (oe(), fe("div", {
                      key: O.key,
                      class: "pano-axis-field"
                    }, [
                      Y("span", {
                        class: pt(["pano-axis", { disabled: c(O, e.model) }]),
                        title: O.label,
                        onPointerdown: (G) => d(G, O)
                      }, rt(O.short), 43, WE),
                      Y("input", {
                        ref_for: !0,
                        ref: (G) => {
                          u[O.key] = G;
                        },
                        type: "number",
                        min: O.min,
                        max: O.max,
                        step: O.step,
                        value: O.displayValue,
                        disabled: c(O, e.model),
                        "aria-label": `${A.label} ${O.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": O.key
                      }, null, 8, BE)
                    ]))), 128))
                  ])
                ], 8, GE)) : (oe(), fe("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": A.key
                }, [
                  Y("label", null, rt(A.label), 1),
                  Y("input", {
                    type: "range",
                    min: A.fields[0].min,
                    max: A.fields[0].max,
                    step: A.fields[0].step,
                    value: A.fields[0].value,
                    disabled: c(A.fields[0], e.model),
                    style: It(a(A.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": A.fields[0].key
                  }, null, 12, YE),
                  Y("input", {
                    type: "number",
                    min: A.fields[0].min,
                    max: A.fields[0].max,
                    step: A.fields[0].step,
                    value: A.fields[0].displayValue,
                    disabled: c(A.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": A.fields[0].key
                  }, null, 8, XE)
                ], 8, UE))
              ], 64))), 128))
            ], 2),
            Le(wE, {
              model: e.easing,
              onTimeline: g[0] || (g[0] = (A) => r("timeline", A))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (oe(), fe("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Y("summary", null, [
                g[5] || (g[5] = Y("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Y("span", JE, [
                  Le(Kt, {
                    icon: Qe(Pe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Y("div", ZE, [
                Y("div", QE, [
                  g[6] || (g[6] = Y("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, tO),
                    Y("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, nO)
                  ], 8, eO)
                ]),
                Y("div", rO, [
                  g[7] || (g[7] = Y("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, oO),
                    Y("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, aO)
                  ], 8, iO)
                ]),
                g[8] || (g[8] = Y("div", { class: "pano-ui-row" }, [
                  Y("span"),
                  Y("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, qE)) : ht("", !0)
          ])
        ])) : ht("", !0),
        (e.model.footerButtons || []).length ? (oe(), fe("div", sO, [
          (oe(!0), fe(qe, null, Pt(e.model.footerButtons, (A) => (oe(), fe("button", {
            key: A.action,
            class: pt(["pano-btn", { "pano-btn-primary": A.primary === !0 }]),
            type: "button",
            "data-action": A.action
          }, rt(A.label), 11, lO))), 128))
        ])) : ht("", !0)
      ]);
    };
  }
}, uO = { class: "pano-timeline-bar" }, fO = ["aria-label", "data-tip"], dO = ["aria-label", "data-tip"], pO = { class: "pano-timeline-time" }, hO = ["data-tip"], mO = { key: 0 }, gO = ["min", "max", "value"], yO = ["data-tip"], bO = { key: 0 }, vO = ["max", "value"], _O = ["aria-expanded"], wO = ["inert"], SO = { class: "pano-timeline-name" }, xO = ["aria-pressed", "aria-label", "data-tip", "onClick"], kO = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, MO = ["disabled", "aria-expanded", "aria-label", "onClick"], NO = ["title", "aria-current", "onClick"], PO = ["data-keyed", "aria-label", "onClick"], AO = ["onPointerdown"], CO = ["onPointerdown"], IO = ["onPointerdown"], EO = ["onPointerdown"], OO = ["aria-label", "data-tip", "onPointerdown"], FO = { key: 0 }, TO = ["onPointerdown"], DO = ["aria-label", "data-tip", "onPointerdown"], LO = { key: 0 }, RO = 10, VO = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ hc(0), playing: /* @__PURE__ */ hc(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const n = e, r = t, o = /* @__PURE__ */ en(null), a = /* @__PURE__ */ en(null), c = /* @__PURE__ */ en(1), u = /* @__PURE__ */ en(0), d = /* @__PURE__ */ en(!1);
    let b = null, g = null, v = null;
    tu(() => {
      b = new ResizeObserver(([re]) => {
        c.value = Math.max(1, re.contentRect.width);
      }), o.value && b.observe(o.value), g = new ResizeObserver(([re]) => {
        u.value = re.contentRect.height;
      }), a.value && g.observe(a.value);
    }), el(() => {
      b == null || b.disconnect(), g == null || g.disconnect(), v == null || v();
    });
    const S = ft(() => Math.max(1, Number(n.model.span || 1))), M = ft(() => n.playhead.frame.value), k = ft(() => n.playhead.playing.value), P = ft(() => gN(M.value, Number(n.model.fps || 1))), A = ft(() => c.value / S.value), O = (re) => `${re / S.value * 100}%`, G = ft(() => IN(S.value, A.value));
    function R(re) {
      const B = o.value.getBoundingClientRect(), D = Math.floor((re - B.left) / Math.max(1, B.width) * S.value);
      return Math.min(S.value - 1, Math.max(0, D));
    }
    function V(re, B, D) {
      const I = Math.ceil(RO / Math.max(1e-6, A.value)), Z = new Map(B.map((ce) => [ce.frame, ce.full]));
      return EN(B.map((ce) => ce.frame), I).map((ce, Ee) => ({
        ...ce,
        key: `${re}:${Ee}`,
        partial: ce.frames.some((Xe) => !Z.get(Xe)),
        selected: ce.frames.some((Xe) => D.includes(Xe))
      }));
    }
    const _ = ft(() => {
      const re = /* @__PURE__ */ new Map();
      for (const B of n.model.rows || []) {
        re.set(B.id, V(B.id, B.keys, B.selectedFrames));
        for (const D of B.lanes) re.set(D.key, V(D.key, D.frames.map((I) => ({ frame: I, full: !0 })), D.selectedFrames));
      }
      return re;
    });
    function j(re) {
      const B = re.end === null ? S.value : re.end;
      return { left: O(re.start), width: O(Math.max(0, B - re.start)) };
    }
    function W(re, B) {
      const D = re.clientX, I = Math.max(1e-6, A.value);
      let Z = 0;
      B("start", 0, re);
      const ce = (Xe) => {
        if (Xe.pointerId !== re.pointerId) return;
        const Je = Math.round((Xe.clientX - D) / I);
        Je !== Z && (Z = Je, B("move", Z, Xe));
      }, Ee = (Xe) => {
        Xe.pointerId === re.pointerId && (v(), B("end", Z, Xe));
      };
      v == null || v(), v = () => {
        window.removeEventListener("pointermove", ce), window.removeEventListener("pointerup", Ee), window.removeEventListener("pointercancel", Ee), v = null;
      }, window.addEventListener("pointermove", ce), window.addEventListener("pointerup", Ee), window.addEventListener("pointercancel", Ee);
    }
    function le(re) {
      re.button === 0 && W(re, (B, D, I) => r("action", { type: "seek", frame: R(I.clientX), phase: B }));
    }
    function ke(re, B, D) {
      re.button === 0 && (r("action", { type: "select-row", id: B.id }), W(re, (I, Z) => r("action", { type: "clip", id: B.id, mode: D, delta: Z, phase: I })));
    }
    function F(re, B, D, I, Z) {
      if (re.button === 0) {
        if (re.shiftKey) {
          r("action", { type: "select-keys", owner: B.id, lane: D, frames: I.frames, additive: !0 });
          return;
        }
        I.frames.every((ce) => Z.includes(ce)) || r("action", { type: "select-keys", owner: B.id, lane: D, frames: I.frames, additive: !1 }), W(re, (ce, Ee) => r("action", { type: "move-keys", delta: Ee, phase: ce }));
      }
    }
    const q = ft(() => String(Number(Number(n.model.fps || 0).toFixed(3))));
    async function J(re, B, D) {
      r("action", B), await Qc(), re.target.value = D();
    }
    function ne(re) {
      J(re, { type: "fps", fps: Number(re.target.value) }, () => q.value);
    }
    function ge(re) {
      const B = re.target.value.trim();
      J(re, { type: "length", length: B ? Number(B) : null }, () => n.model.length ?? "");
    }
    function me(re, B, D) {
      re.button !== 0 || re.target !== re.currentTarget || r("action", { type: "select-keys", owner: B.id, lane: D, frames: [], additive: !1 });
    }
    return (re, B) => ki((oe(), fe("section", {
      class: pt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Y("div", uO, [
        Y("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": k.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": k.value ? "Pause (Space)" : "Play (Space)",
          onClick: B[0] || (B[0] = (D) => r("action", { type: "play" }))
        }, [
          Le(Kt, {
            icon: k.value ? Qe(Pe).pause : Qe(Pe).play
          }, null, 8, ["icon"])
        ], 8, fO),
        e.model.hasAudio ? (oe(), fe("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: B[1] || (B[1] = (D) => r("action", { type: "mute" }))
        }, [
          Le(Kt, {
            icon: e.model.muted ? Qe(Pe).volume_muted : Qe(Pe).volume2
          }, null, 8, ["icon"])
        ], 8, dO)) : ht("", !0),
        Y("span", pO, rt(P.value), 1),
        Y("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? e.model.lockTip : "Timeline fps"
        }, [
          e.model.fpsLocked ? (oe(), fe("span", mO, rt(q.value), 1)) : (oe(), fe("input", {
            key: 1,
            type: "number",
            min: Qe(Mb),
            max: Qe(Sp),
            step: "any",
            value: q.value,
            "aria-label": "Timeline fps",
            onChange: ne
          }, null, 40, gO)),
          B[6] || (B[6] = Y("span", null, "fps", -1))
        ], 8, hO),
        Y("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.lengthLocked ? e.model.lockTip : "Output length in frames; empty follows the inputs"
        }, [
          B[7] || (B[7] = Y("span", null, "Length", -1)),
          e.model.lengthLocked ? (oe(), fe("span", bO, rt(e.model.length), 1)) : (oe(), fe("input", {
            key: 1,
            type: "number",
            min: "1",
            max: Qe(xp),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: ge
          }, null, 40, vO))
        ], 8, yO),
        Y("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: B[2] || (B[2] = (D) => r("action", { type: "toggle-expanded" }))
        }, [
          B[8] || (B[8] = Y("span", null, "Timeline", -1)),
          Le(Kt, {
            icon: Qe(Pe).chevron
          }, null, 8, ["icon"])
        ], 8, _O)
      ]),
      Y("div", {
        class: pt(["pano-timeline-body", { open: e.model.expanded, sliding: d.value }]),
        style: It({ "--pano-timeline-rows": `${u.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: B[3] || (B[3] = Lt((D) => d.value = !0, ["self"])),
        onTransitionend: B[4] || (B[4] = Lt((D) => d.value = !1, ["self"])),
        onTransitioncancel: B[5] || (B[5] = Lt((D) => d.value = !1, ["self"]))
      }, [
        Y("div", {
          ref_key: "gridRef",
          ref: a,
          class: "pano-timeline-grid"
        }, [
          B[9] || (B[9] = Y("div", { class: "pano-timeline-corner" }, null, -1)),
          Y("div", {
            ref_key: "rulerRef",
            ref: o,
            class: "pano-timeline-ruler",
            onPointerdown: le
          }, [
            (oe(!0), fe(qe, null, Pt(G.value, (D) => (oe(), fe("span", {
              key: D,
              class: "pano-timeline-tick",
              style: It({ left: O(D) })
            }, rt(D), 5))), 128)),
            Y("span", {
              class: "pano-timeline-playhead",
              style: It({ left: O(M.value + 0.5) })
            }, null, 4)
          ], 544),
          (oe(!0), fe(qe, null, Pt(e.model.rows || [], (D) => (oe(), fe(qe, {
            key: D.id
          }, [
            Y("div", {
              class: pt(["pano-timeline-head", { selected: D.selected, "is-hidden": !D.visible }])
            }, [
              Y("div", SO, [
                D.hideable ? (oe(), fe("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": D.visible ? "true" : "false",
                  "aria-label": `${D.label} visible`,
                  "data-tip": D.visible ? "Hide" : "Show",
                  onClick: Lt((I) => r("action", { type: "toggle-visible", id: D.id }), ["stop"])
                }, [
                  Le(Kt, {
                    icon: D.visible ? Qe(Pe).eye : Qe(Pe).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, xO)) : (oe(), fe("span", kO)),
                Y("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !D.keyable,
                  "aria-expanded": D.open ? "true" : "false",
                  "aria-label": D.open ? `Hide ${D.label} parameters` : `Show ${D.label} parameters`,
                  onClick: Lt((I) => r("action", { type: "toggle-row", id: D.id }), ["stop"])
                }, [
                  Le(Kt, {
                    icon: Qe(Pe).chevron
                  }, null, 8, ["icon"])
                ], 8, MO),
                Y("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: D.label,
                  "aria-current": D.selected ? "true" : void 0,
                  onClick: (I) => r("action", { type: "select-row", id: D.id })
                }, [
                  Le(Kt, {
                    icon: D.icon
                  }, null, 8, ["icon"]),
                  Y("span", null, rt(D.label), 1)
                ], 8, NO),
                D.keyable ? (oe(), fe("button", {
                  key: 2,
                  class: pt(["pano-timeline-key", { keyed: Qe(If)(D.keys, M.value) }]),
                  type: "button",
                  "data-keyed": Qe(If)(D.keys, M.value) ? "true" : "false",
                  "aria-label": Qe(If)(D.keys, M.value) ? `Every ${D.label} parameter has a keyframe here; update them` : `Add keyframes for every ${D.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: Lt((I) => r("action", { type: "key-row", owner: D.id }), ["stop"])
                }, [
                  Le(Kt, {
                    icon: Qe(Pe).keyframe
                  }, null, 8, ["icon"])
                ], 10, PO)) : ht("", !0)
              ]),
              D.open ? (oe(!0), fe(qe, { key: 0 }, Pt(D.lanes, (I) => (oe(), fe("div", {
                key: I.key,
                class: "pano-timeline-lane-head"
              }, rt(I.label), 1))), 128)) : ht("", !0)
            ], 2),
            Y("div", {
              class: pt(["pano-timeline-track", { selected: D.selected }])
            }, [
              Y("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (I) => me(I, D, null)
              }, [
                D.clip ? (oe(), fe("div", {
                  key: 0,
                  class: pt(["pano-timeline-clip", { open: D.clip.end === null }]),
                  style: It(j(D.clip)),
                  onPointerdown: Lt((I) => ke(I, D, "move"), ["stop"])
                }, [
                  Y("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: Lt((I) => ke(I, D, "start"), ["stop"])
                  }, null, 40, IO),
                  Y("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: Lt((I) => ke(I, D, "end"), ["stop"])
                  }, null, 40, EO)
                ], 46, CO)) : ht("", !0),
                (oe(!0), fe(qe, null, Pt(_.value.get(D.id), (I) => (oe(), fe("button", {
                  key: I.key,
                  type: "button",
                  class: pt(["pano-timeline-pin", { selected: I.selected, cluster: I.frames.length > 1, partial: I.partial }]),
                  style: It({ left: O(I.frame + 0.5) }),
                  "aria-label": `${D.label}: ${I.frames.length > 1 ? `${I.frames.length} keyframes` : `keyframe at frame ${I.frames[0]}`}`,
                  "data-tip": I.frames.length > 1 ? `${I.frames.length} keyframes` : `Frame ${I.frames[0]}`,
                  onPointerdown: Lt((Z) => F(Z, D, null, I, D.selectedFrames), ["stop"])
                }, [
                  I.frames.length > 1 ? (oe(), fe("span", FO, rt(I.frames.length), 1)) : ht("", !0)
                ], 46, OO))), 128))
              ], 40, AO),
              D.open ? (oe(!0), fe(qe, { key: 0 }, Pt(D.lanes, (I) => (oe(), fe("div", {
                key: I.key,
                class: "pano-timeline-lane",
                onPointerdown: (Z) => me(Z, D, I.lane)
              }, [
                (oe(!0), fe(qe, null, Pt(_.value.get(I.key), (Z) => (oe(), fe("button", {
                  key: Z.key,
                  type: "button",
                  class: pt(["pano-timeline-pin", { selected: Z.selected, cluster: Z.frames.length > 1 }]),
                  style: It({ left: O(Z.frame + 0.5) }),
                  "aria-label": `${I.label}: ${Z.frames.length > 1 ? `${Z.frames.length} keyframes` : `keyframe at frame ${Z.frames[0]}`}`,
                  "data-tip": Z.frames.length > 1 ? `${Z.frames.length} keyframes` : `Frame ${Z.frames[0]}`,
                  onPointerdown: Lt((ce) => F(ce, D, I.lane, Z, I.selectedFrames), ["stop"])
                }, [
                  Z.frames.length > 1 ? (oe(), fe("span", LO, rt(Z.frames.length), 1)) : ht("", !0)
                ], 46, DO))), 128))
              ], 40, TO))), 128)) : ht("", !0),
              Y("span", {
                class: "pano-timeline-playhead",
                style: It({ left: O(M.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, wO)
    ], 2)), [
      [Eo, e.model.visible]
    ]);
  }
}, $O = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (oe(), fe("div", {
      class: pt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: It({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, rt(e.model.text || ""), 7));
  }
}, zO = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, jO = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (oe(), fe("div", zO, [
      (oe(!0), fe(qe, null, Pt(e.buttons, (r) => ki((oe(), Sr(pn, {
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
        [Eo, r.visible !== !1]
      ])), 128))
    ]));
  }
}, HO = ["data-video-ready"], GO = { class: "pano-video-transport-shell" }, KO = { class: "pano-video-controls-left" }, WO = { class: "pano-video-filmstrip" }, BO = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, UO = ["src", "onLoad"], YO = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, XO = ["max", "value", "disabled"], qO = { class: "pano-video-controls-right" }, JO = ["data-has-audio"], ZO = { class: "pano-video-volume-pop" }, QO = ["value", "disabled"], eF = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = ft(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? "Pause" : "Play";
    }), r = ft(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? "Pause video" : "Play video";
    }), o = ft(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.playing) === !0 ? Pe.pause : Pe.play;
    }), a = ft(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? "Enable loop" : "Disable loop";
    }), c = ft(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), u = ft(() => {
      var _;
      return ((_ = t.state) == null ? void 0 : _.loop) === !1 ? Pe.loop_off : Pe.loop;
    }), d = ft(() => {
      var _, j;
      return ((_ = t.state) == null ? void 0 : _.muted) === !0 || Number(((j = t.state) == null ? void 0 : j.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = ft(() => {
      var _, j, W;
      return ((_ = t.state) == null ? void 0 : _.hasAudio) !== !0 ? Pe.volume : ((j = t.state) == null ? void 0 : j.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? Pe.volume_muted : Pe.volume2;
    }), g = ft(() => {
      var _;
      return Math.max(0, Math.min(100, Number(((_ = t.state) == null ? void 0 : _.progressPct) || 0)));
    }), v = ft(() => ({ left: `${g.value}%` })), S = ft(() => {
      var le, ke;
      const _ = (le = t.state) == null ? void 0 : le.volumePct, j = Number(((ke = t.state) == null ? void 0 : ke.volume) ?? 1) * 100, W = Number(_ ?? j ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, W))}%`
      };
    }), M = ft(() => {
      var W, le;
      const j = [
        String(((W = t.state) == null ? void 0 : W.currentTimeLabel) || "0:00"),
        String(((le = t.state) == null ? void 0 : le.durationLabel) || "0:00")
      ].reduce((ke, F) => Math.max(ke, F.length), 4);
      return `${Math.max(4, j)}ch`;
    }), k = ft(() => ({ "--pano-video-time-ch": M.value })), P = ft(() => {
      var W, le;
      const _ = Array.isArray((W = t.state) == null ? void 0 : W.thumbnails) ? t.state.thumbnails : [];
      if (_.length) return _;
      const j = Math.max(7, Number(((le = t.state) == null ? void 0 : le.thumbnailCount) || 9));
      return Array.from({ length: j }, (ke, F) => ({
        id: `placeholder-${F}`,
        src: "",
        label: ""
      }));
    }), A = /* @__PURE__ */ en(/* @__PURE__ */ new Set()), O = (_) => String((_ == null ? void 0 : _.id) || (_ == null ? void 0 : _.src) || (_ == null ? void 0 : _.label) || ""), G = (_) => A.value.has(O(_)), R = (_) => {
      const j = new Set(A.value);
      j.add(O(_)), A.value = j;
    };
    Mo(P, (_) => {
      const j = new Set(_.map(O)), W = /* @__PURE__ */ new Set();
      for (const le of A.value)
        j.has(le) && W.add(le);
      A.value = W;
    }, { immediate: !0 });
    const V = ft(() => {
      var _;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((_ = t.state) == null ? void 0 : _.shellMaxWidthPx) || 640))}px`
      };
    });
    return (_, j) => (oe(), fe("div", {
      class: pt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: It(V.value)
    }, [
      j[1] || (j[1] = Y("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      j[2] || (j[2] = Y("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Y("div", GO, [
        Y("div", KO, [
          Le(pn, {
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
            style: It(k.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Y("div", WO, [
          Y("div", BO, [
            (oe(!0), fe(qe, null, Pt(P.value, (W) => (oe(), fe("div", {
              key: O(W),
              class: pt(["pano-video-thumb", {
                "is-placeholder": !W.src,
                "is-loaded": W.src && G(W)
              }])
            }, [
              W.src ? (oe(), fe("img", {
                key: 0,
                src: W.src,
                alt: "",
                draggable: "false",
                onLoad: (le) => R(W)
              }, null, 40, UO)) : (oe(), fe("span", YO))
            ], 2))), 128))
          ]),
          Y("div", {
            class: "pano-video-playhead",
            style: It(v.value),
            "aria-hidden": "true"
          }, [...j[0] || (j[0] = [
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
          }, null, 8, XO)
        ]),
        Y("div", qO, [
          Y("div", {
            class: "pano-video-time pano-video-time-end",
            style: It(k.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
          Le(pn, {
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
            Y("div", ZO, [
              Y("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: It(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, QO)
            ]),
            Le(pn, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: d.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, JO)
        ])
      ])
    ], 14, HO));
  }
}, tF = { class: "pano-floating-top" }, nF = ["data-selected", "data-view-count"], rF = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], iF = { class: "label" }, oF = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var r;
      return oe(), fe("div", tF, [
        Y("div", {
          class: "pano-view-toggle",
          "data-selected": ((r = e.buttons.find((o) => o.pressed === "true")) == null ? void 0 : r.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (oe(!0), fe(qe, null, Pt(e.buttons, (o) => ki((oe(), fe("button", {
            key: o.key,
            class: pt(["pano-view-btn", [o.extraClass, { active: o.pressed === "true" }]]),
            "data-view": o.key,
            "aria-pressed": o.pressed,
            "aria-label": o.label,
            "aria-disabled": o.disabled === !0 ? "true" : null,
            tabindex: o.disabled === !0 ? -1 : null,
            "data-tip": o.tip || null
          }, [
            Le(Kt, {
              icon: o.icon
            }, null, 8, ["icon"]),
            Y("span", iF, rt(o.label), 1)
          ], 10, rF)), [
            [Eo, o.visible !== !1]
          ])), 128))
        ], 8, nF)
      ]);
    };
  }
};
function iv(e = "stickers") {
  const t = String(e || "stickers") === "cutout", n = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: Pe.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: Pe.unwrap, pressed: "false", extraClass: "" },
      ...t || n ? [{ key: "frame", label: "Frame", icon: Pe.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue). The Cutout editor shows them for a PANO_SCENE with World content (#77).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: Pe.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: Pe.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: Pe.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: Pe.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: Pe.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: Pe.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: Pe.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: Pe.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: Pe.image, pressed: null },
        // PanoramaStickersNode only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: Pe.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...n ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: Pe.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: Pe.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: Pe.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: Pe.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: Pe.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: Pe.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: Pe.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: Pe.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: Pe.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: Pe.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: Pe.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: Pe.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: Pe.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: Pe.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: Pe.lasso_tool }
        ]
      }
    ]
  };
}
const aF = ["aria-label"], sF = { class: "pano-stage-column" }, lF = { class: "pano-stage-wrap" }, cF = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, uF = {
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
  setup(e, { expose: t, emit: n }) {
    const r = e, o = n;
    let a = "", c = !1, u = null;
    const d = /* @__PURE__ */ en(null), b = /* @__PURE__ */ en(null), g = /* @__PURE__ */ en(null);
    function v() {
      var F, q;
      return ((q = (F = g.value) == null ? void 0 : F.getRefs) == null ? void 0 : q.call(F)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function S(F) {
      var q, J;
      return ((J = (q = b.value) == null ? void 0 : q.open) == null ? void 0 : J.call(q, F)) === !0;
    }
    function M(F) {
      o("image-file-selected", F);
    }
    function k(F) {
      o("image-file-cancelled", F);
    }
    t({ getPaintOverlayRefs: v, openImagePicker: S });
    const P = ft(() => r.readOnly === !0), A = ft(() => r.shellPreset || iv(r.type)), O = ft(() => {
      var q, J, ne;
      const F = String((((q = r.uiState) == null ? void 0 : q.stageStatus) === "failed" ? (J = r.uiState) == null ? void 0 : J.stageStatusDetail : (ne = r.uiState) == null ? void 0 : ne.stageWarningDetail) ?? "");
      return F === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : F === "stickers" ? "One or more sticker previews are unavailable." : F === "frame" ? "The editor hit a rendering error. Check the browser console for details." : F === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : F.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), G = ft(() => {
      var q;
      const F = Array.isArray((q = A.value) == null ? void 0 : q.floatingButtons) ? A.value.floatingButtons.slice() : [];
      return P.value && F.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: Pe.fullscreen
      }), F;
    });
    function R() {
      const F = d.value;
      return F ? Array.from(F.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((q) => q instanceof HTMLElement ? !q.hidden && q.tabIndex >= 0 && q.offsetParent !== null : !1) : [];
    }
    function V() {
      var J;
      const q = R()[0] || d.value;
      (J = q == null ? void 0 : q.focus) == null || J.call(q);
    }
    function _() {
      var F;
      u != null && u.isConnected && ((F = u.focus) == null || F.call(u)), u = null;
    }
    function j(F) {
      var q, J, ne, ge;
      if (!F.defaultPrevented) {
        if (F.key === "Tab") {
          const me = R();
          if (!me.length) {
            F.preventDefault(), (J = (q = d.value) == null ? void 0 : q.focus) == null || J.call(q);
            return;
          }
          const re = me[0], B = me[me.length - 1], D = document.activeElement;
          if (F.shiftKey) {
            (D === re || D === d.value || !((ne = d.value) != null && ne.contains(D))) && (F.preventDefault(), B.focus());
            return;
          }
          (D === B || !((ge = d.value) != null && ge.contains(D))) && (F.preventDefault(), re.focus());
          return;
        }
        F.key === "Escape" && o("close");
      }
    }
    function W() {
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function le() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function ke(F) {
      document.removeEventListener("keydown", j), F ? (u || (u = document.activeElement), W(), document.addEventListener("keydown", j), Qc(() => {
        V();
      })) : (le(), _());
    }
    return tu(() => {
      ke(r.open);
    }), el(() => {
      le(), document.removeEventListener("keydown", j), _();
    }), Mo(() => r.open, (F) => {
      ke(F);
    }), (F, q) => e.open ? (oe(), fe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: q[2] || (q[2] = Lt((J) => o("close"), ["self"]))
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
        Y("div", sF, [
          Y("div", lF, [
            q[3] || (q[3] = Y("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            q[4] || (q[4] = Y("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            q[5] || (q[5] = Y("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (oe(), fe("div", cF, rt(O.value), 1)) : ht("", !0),
            q[6] || (q[6] = Y("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Y("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Le(ZI, {
              ref_key: "paintOverlaysRef",
              ref: g
            }, null, 512),
            Le(V1, {
              ref_key: "imageFilePickerRef",
              ref: b,
              onFileSelected: M,
              onFileCancelled: k
            }, null, 512),
            P.value ? ht("", !0) : (oe(), fe(qe, { key: 1 }, [
              Le(jO, {
                buttons: e.uiState.toolButtons || A.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Le(SI, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Le(JI, {
                "paint-swatches": e.paintSwatches,
                panes: A.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Le(eF, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Le(oF, {
              buttons: e.uiState.viewButtons || A.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Le(yI, {
              buttons: e.uiState.floatingButtons || G.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Le(aE, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Le($O, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Le(AI, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Le(VO, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: q[0] || (q[0] = (J) => o("timeline", J))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? ht("", !0) : (oe(), Sr(cO, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: q[1] || (q[1] = (J) => o("timeline", J))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, aF)
    ])) : ht("", !0);
  }
}, Fr = "loading", Js = "ready", vr = "failed";
function ov(e, t = "") {
  return e && (e.__panoLoadState = Fr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function av(e, t = "") {
  return e && (e.__panoLoadState = Js, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function sv(e, t = "") {
  return e && (e.__panoLoadState = vr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Wd(e, t) {
  return e ? e.__panoLoadState === vr ? vr : typeof t == "function" && t(e) ? Js : Fr : Js;
}
function Bd(e) {
  return Wd(e) === vr;
}
function fF({ presented: e, background: t = Js, stickers: n = [] } = {}) {
  if (!e) return { status: Fr, detail: "boot" };
  const r = Array.isArray(n) ? n : [], o = t === Fr, a = r.includes(Fr);
  if (o && a) return { status: Fr, detail: "mixed" };
  if (o) return { status: Fr, detail: "background" };
  if (a) return { status: Fr, detail: "stickers" };
  const c = t === vr, u = r.includes(vr);
  return c && u ? { status: vr, detail: "mixed" } : c ? { status: vr, detail: "background" } : u ? { status: vr, detail: "stickers" } : { status: Js, detail: "" };
}
const dF = "state_json", pF = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Gf = "sticker_image_1", hF = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), B0 = 0.01, mF = "external_image", jl = "pano_sticker_input_images", gF = "pano_sticker_input_videos", yF = "pano_sticker_input_frames", bF = "pano_sticker_input_video_meta", vF = !0, fc = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Ur = Math.PI / 180, wo = 180 / Math.PI, Kf = 1, U0 = "rgb(255, 221, 87)", _F = "rgb(228, 228, 231)", wF = "rgb(180, 150, 60)", SF = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, xF = 64, Y0 = 40, Wf = 16, kF = 0.45, X0 = 180, MF = 160, Wc = 24, NF = 4, PF = 4, Hl = /* @__PURE__ */ new Map(), q0 = /* @__PURE__ */ new Map(), Ki = /* @__PURE__ */ new Map(), AF = 12, jn = d1({
  app: lr,
  api: Qt,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Bd,
    markImageFailed: sv,
    markImageLoading: ov,
    markImageReady: av
  }
});
function Bf(e) {
  if (!xn(e, "background") || !xn(e, "external-sticker")) return null;
  const t = jn.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? Ia(t[0]) : null;
}
const CF = /* @__PURE__ */ new Set(["paint", "mask", "add-image", "clear"]);
function IF(e) {
  if (!xn(e, "background")) return null;
  const [t] = jn.uiValue(e, "pano_scene_state") || [];
  if (!t || typeof t != "object") return null;
  const [n] = jn.uiValue(e, "pano_timeline_frames") || [], [r] = jn.uiValue(e, "pano_scene_coverage") || [];
  return { state: t, frames: Number(n) > 0 ? Number(n) : null, coverage: Jn(r) };
}
const EF = jn.assetSource, ms = jn.source, Uf = jn.uiImage, OF = jn.invalidateUiImage, Yf = jn.loadPreferredExactLinkedImage;
function Xf(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function FF(e) {
  return 1 - Math.pow(1 - e, 3);
}
function TF(e, t, n) {
  const r = te((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return r * r * (3 - 2 * r);
}
function DF(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Ki.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Ki.delete(t), Ki.set(t, n), n);
}
function LF(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const r = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (r.length)
    for (Ki.delete(n), Ki.set(n, {
      thumbnails: r,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Ki.size > AF; ) {
      const o = Ki.keys().next().value;
      if (!o) break;
      Ki.delete(o);
    }
}
function RF(e) {
  return e * e * e;
}
function fu(e, t, n) {
  return { x: e, y: t, z: n };
}
function J0(e, t) {
  return fu(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Z0(e, t) {
  return fu(e.x * t, e.y * t, e.z * t);
}
function qf(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function VF(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return fu(e.x / t, e.y / t, e.z / t);
}
function Gl(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * wo),
    pitch: te(Math.asin(te(e.y, -1, 1)) * wo, -90, 90)
  };
}
function ji(e, t) {
  let n = !1;
  for (let r = 0, o = t.length - 1; r < t.length; o = r++) {
    const a = t[r].x, c = t[r].y, u = t[o].x, d = t[o].y;
    c > e.y != d > e.y && e.x < (u - a) * (e.y - c) / (d - c || 1e-6) + a && (n = !n);
  }
  return n;
}
function ks(e, t) {
  const n = e.x - t.x, r = e.y - t.y;
  return n * n + r * r;
}
function Jf(e, t, n) {
  const r = Number(n.x || 0) - Number(t.x || 0), o = Number(n.y || 0) - Number(t.y || 0), a = Number(e.x || 0) - Number(t.x || 0), c = Number(e.y || 0) - Number(t.y || 0), u = r * r + o * o;
  if (u <= 1e-6) return ks(e, t);
  const d = te((a * r + c * o) / u, 0, 1), b = Number(t.x || 0) + r * d, g = Number(t.y || 0) + o * d, v = Number(e.x || 0) - b, S = Number(e.y || 0) - g;
  return v * v + S * S;
}
function yr(e, t, n) {
  return e + (t - e) * n;
}
function Yr(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(te(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(te(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(te(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${te(n, 0, 1)})`;
}
function $F(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Kl = { fillStyle: "", url: "" };
function zF(e, t, n) {
  if (Kl.url && Kl.fillStyle === String(e || ""))
    return Kl.url;
  const r = $F(`
<svg xmlns="http://www.w3.org/2000/svg" width="${Wc}" height="${Wc}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Kl = { fillStyle: String(e || ""), url: r }, r;
}
function dc(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function ar(e) {
  return {
    r: te(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: te(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: te(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: te(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function An(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function jF(e) {
  return fc.some((t) => dc(e, t.color));
}
function Zf(e, t, n) {
  const r = (Number(e) % 1 + 1) % 1, o = te(Number(t), 0, 1), a = te(Number(n), 0, 1);
  if (o <= 1e-6) return { r: a, g: a, b: a };
  const c = Math.floor(r * 6), u = r * 6 - c, d = a * (1 - o), b = a * (1 - u * o), g = a * (1 - (1 - u) * o);
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
function Qf(e) {
  const t = te(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = te(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), r = te(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), o = Math.max(t, n, r), a = Math.min(t, n, r), c = o - a;
  let u = 0;
  c > 1e-6 && (o === t ? u = ((n - r) / c + (n < r ? 6 : 0)) / 6 : o === n ? u = ((r - t) / c + 2) / 6 : u = ((t - n) / c + 4) / 6);
  const d = o <= 1e-6 ? 0 : c / o;
  return { h: u, s: d, v: o };
}
function na(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
const lv = "pano_suite.ui_settings.v1", cv = "pano_suite.node_grid_visibility.v1";
let ca = null, Xr = null;
function pc(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function HF() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(lv)) || "").trim();
    if (!t) return ca ? pc(ca) : null;
    const n = JSON.parse(t), r = pc(n);
    return ca = r, r;
  } catch {
    return ca ? pc(ca) : null;
  }
}
function GF(e) {
  var n;
  const t = pc(e);
  ca = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(lv, JSON.stringify(t));
  } catch {
  }
  return t;
}
function uv() {
  var e;
  if (Xr && typeof Xr == "object")
    return Xr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(cv)) || "").trim();
    if (!t)
      return Xr = {}, Xr;
    const n = JSON.parse(t);
    return Xr = n && typeof n == "object" ? n : {}, Xr;
  } catch {
    return Xr = {}, Xr;
  }
}
function KF(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const o = uv()[n];
  return typeof o == "boolean" ? o : !!t;
}
function WF(e, t) {
  var o;
  const n = String(e ?? "").trim();
  if (!n) return;
  const r = uv();
  r[n] = !!t, Xr = r;
  try {
    (o = window == null ? void 0 : window.localStorage) == null || o.setItem(cv, JSON.stringify(r));
  } catch {
  }
}
function BF(e) {
  var r, o;
  const t = Array.isArray((r = e == null ? void 0 : e.paint) == null ? void 0 : r.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((o = e == null ? void 0 : e.mask) == null ? void 0 : o.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Q0(e) {
  const { paintCount: t, maskCount: n } = BF(e), r = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function ra(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Wl(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((r) => r.name === t)) || null;
}
function UF(e, t) {
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
function go(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function YF(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const r = n.includes("x") ? n.split("x", 1)[0].trim() : n, o = Number(r);
  return Number.isFinite(o) ? Math.round(o) : t;
}
function XF(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function qF(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
async function JF(e, t, n = {}) {
  var Jm, Zm;
  await G1(e, { tolerateOperationFailure: !0 }), jn.clearFailedLinkedImages(e);
  const r = (n == null ? void 0 : n.readOnly) === !0, o = (n == null ? void 0 : n.hideSidebar) ?? r, a = r, c = UF(e, t);
  await Wp();
  const u = Wl(e, "output_preset"), d = Wl(e, "coverage"), b = Wl(e, "bg_color"), g = Wl(e, dF), v = () => {
    const i = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Yf(
      e,
      i,
      () => ue(),
      `background:size:${i.join("|")}`
    );
  }, S = () => {
    const i = v();
    return qF(i);
  }, M = (i = 2048) => {
    const s = u == null ? void 0 : u.value;
    return XF(s) ? S() || Math.max(1, Math.round(Number(i || 2048))) : YF(s, i);
  }, k = e.__panoSceneStateV2 === !0, P = t === "stickers" && k, A = t === "cutout" && k, O = P && e.__panoStudio === !0, G = A || O, R = t === "cutout" || O, V = A ? IF(e) : null, _ = (k ? jb : zb)(String((g == null ? void 0 : g.value) || ""), {
    outputPreset: M(2048),
    backgroundColor: String((b == null ? void 0 : b.value) || "#00ff00"),
    coverage: V ? V.coverage : Jn(d == null ? void 0 : d.value),
    sharedUiSettings: HF(),
    active: Kb(e),
    fps: k ? Bf(e) : null,
    scene: (V == null ? void 0 : V.state) ?? null,
    camera: A
  });
  e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = 0;
  let j = null;
  G ? (j = _.camera && (!O || _.camera.visible !== !1) ? Jg(_.camera, 0) : null, _.shots = j ? [{ ...j, position: [...j.position] }] : [], _.active.selected_shot_id = j && A ? tc : null) : t === "cutout" && (_.shots = Array.isArray(_.shots) ? _.shots.slice(0, 1) : [], _.shots.length || (_.active.selected_shot_id = null));
  const W = t === "cutout" ? (() => {
    var l;
    const i = Array.isArray(_.shots) ? _.shots : [], s = String(((l = _ == null ? void 0 : _.active) == null ? void 0 : l.selected_shot_id) || "");
    return i.find((f) => String((f == null ? void 0 : f.id) || "") === s) || i[0] || null;
  })() : null, le = W ? zh(W, !1) : { width: 220, height: 132 }, ke = iv(O ? "studio" : t), F = /* @__PURE__ */ Aa({
    stageStatus: Fr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (ke.viewButtons || []).map((i) => ({ ...i, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Jm = ke.spaceButtons) != null && Jm.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: ke.spaceButtons, frame: ke.spaceFrameButton } : null,
    // Only PanoramaStickersNode places images in space.
    // PanoramaCutoutNode's editor edits only its Camera (#77), so it has no image, paint or clear tools.
    toolButtons: (ke.toolButtons || []).map((i) => ({
      ...i,
      disabled: !1,
      ...i.key === "add-world" ? { visible: P } : {},
      ...A && CF.has(i.key) ? { visible: !1 } : {}
    })),
    floatingButtons: [
      ...(ke.floatingButtons || []).map((i) => ({ ...i, disabled: !1 })),
      ...a ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Pe.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: r,
      aspectOpen: !1,
      aspectIcon: Pe.aspect,
      rotateIcon: Pe.rotate_90,
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
      icon: Pe.fullscreen,
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
      customColorCss: Yr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: Yr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: le.width,
      height: le.height,
      label: W ? "Loading preview" : "Add Frame to preview"
    }
  }), q = { frame: /* @__PURE__ */ hc(0), playing: /* @__PURE__ */ hc(!1) }, J = document.createElement("div");
  document.body.appendChild(J);
  const ne = ({ intent: i, file: s } = {}) => {
    if (Tr(s)) {
      if (i === "add") {
        im(s);
        return;
      }
      if (i === "add-world") {
        Pw(s);
        return;
      }
      i === "replace" && Iw(s);
    }
  }, ge = ({ intent: i } = {}) => {
  }, me = up(uF, {
    open: !0,
    type: t,
    readOnly: r,
    hideSidebar: o,
    nodeTitle: c,
    shellPreset: ke,
    paintSwatches: fc.map((i) => ({
      id: i.id,
      label: i.label,
      cssColor: Yr(i.color, 1)
    })),
    uiState: F,
    playhead: q,
    onClose: () => {
      Jo();
    },
    onTimeline: (i) => kw(i),
    onImageFileSelected: ne,
    onImageFileCancelled: ge
  });
  let re = null;
  try {
    re = me.mount(J);
  } catch (i) {
    try {
      me.unmount();
    } catch {
    }
    throw J.remove(), i;
  }
  const B = J.querySelector(".pano-modal-overlay"), D = J.querySelector(".pano-modal"), I = D == null ? void 0 : D.querySelector("[data-stage-overlay]"), Z = D == null ? void 0 : D.querySelector("[data-stage-background]"), ce = D == null ? void 0 : D.querySelector(".pano-stage-wrap"), Ee = ((Zm = re == null ? void 0 : re.getPaintOverlayRefs) == null ? void 0 : Zm.call(re)) || {}, Xe = Ee.cursor || null, Je = Ee.sizePreview || null, vt = Ee.sizeSample || null;
  if (!B || !D || !I || !Z || !ce || !Xe || !Je || !vt)
    throw me.unmount(), J.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const $ = I.getContext("2d"), _t = D.querySelector("[data-side]"), Ie = D.querySelector("[data-video-element]"), wt = D.querySelector("[data-port-video-element]");
  yf(I, "editor.stage-overlay"), yf(Z, "editor.stage-background"), Lg(Ie, "editor.video"), Lg(wt, "editor.port-video");
  const Ae = D.querySelector(".pano-floating-right"), De = D.querySelector(".pano-floating-top"), T = D.querySelector("[data-tool-rail]"), H = D.querySelector("[data-frame-rail]"), X = D.querySelector("[data-frame-roll-knob]"), pe = D.querySelector("[data-paint-dock]"), ye = D.querySelector(".pano-video-transport"), we = D.querySelector("[data-selection-menu]");
  let Oe = !1;
  const Ne = D.querySelector("[data-tooltip]"), Ce = D.querySelector("[data-camera-preview-host]"), ve = D.querySelector("[data-camera-preview-canvas]");
  yf(ve, "editor.camera-preview");
  const Re = D.querySelector("[data-paint-color-row]"), Me = D.querySelector("[data-paint-color-pop]"), Ve = D.querySelector("[data-paint-color-sv]"), We = D.querySelector("[data-paint-color-sv-cursor]"), at = D.querySelector("[data-paint-hue-strip]"), mt = D.querySelector("[data-paint-hue-handle]");
  let dt = 0, St = 0;
  ce == null || ce.removeAttribute("data-stage-ready"), ce == null || ce.setAttribute("data-stage-loading-kind", "boot"), I.style.opacity = "1", Z.style.opacity = "0", o && (_t == null || _t.remove(), D.classList.add("pano-modal-readonly"));
  const yt = () => {
    if (!h.customPaintSessionStart) return;
    if (dc(h.customPaintSessionStart, h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    if (jF(h.customPaintColor)) {
      h.customPaintSessionStart = null;
      return;
    }
    const i = [
      ar(h.customPaintColor),
      ...h.customPaintHistory.filter((s) => !dc(s, h.customPaintColor))
    ];
    h.customPaintHistory = i.slice(0, 8), h.customPaintSessionStart = null;
  }, bn = (i = !1) => {
    !Me || Me.hidden || (i ? yt() : h.customPaintSessionStart = null, Me.hidden = !0, F.paintDock.colorPopOpen = !1);
  }, Ln = () => {
    Me && (Me.hidden && (h.customPaintSessionStart = ar(h.customPaintColor)), Me.hidden = !1, F.paintDock.colorPopOpen = !0);
  };
  D.addEventListener("pointerdown", (i) => {
    var s;
    i.target.closest("[data-frame-roll-knob]") || ao(), !i.target.closest(".pano-picker") && (i.target.closest("[data-paint-color-row]") || (D.querySelectorAll(".pano-picker-pop").forEach((l) => {
      l.hidden = !0;
    }), bn(!0), R && h.cutoutAspectOpen && !i.target.closest(".pano-aspect-popover") && !i.target.closest("[data-action='aspect']") && (h.cutoutAspectOpen = !1, h.menuMode = "", h.menuSize.measured = !1, Ke(), ue()), (s = F.frameRail) != null && s.aspectOpen && !i.target.closest(".pano-frame-aspect-control") && (F.frameRail.aspectOpen = !1)));
  });
  const Rr = t === "stickers" ? _.active.selected_sticker_id : _.active.selected_shot_id, To = JSON.stringify(Xg(_)), h = {
    mode: "pano",
    selectedId: Rr,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // PanoramaStickersNode with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // and is not saved. Until it moves (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: Or,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // Each opening starts in 3DoF; it is not saved.
    spaceMode: "3dof",
    coverage: Jn(_.coverage),
    historyController: OC(80, { entries: [To], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: hi,
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
    showGrid: KF(e == null ? void 0 : e.id, !0),
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
    paintEngine: dd(),
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
  }, Ye = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  let dr = null;
  t === "stickers" && (h.selectedId = null, _.active.selected_sticker_id = null), h.selectedIds = h.selectedId ? [h.selectedId] : [];
  const nn = /* @__PURE__ */ new Map(), Fa = /* @__PURE__ */ new Map(), Do = /* @__PURE__ */ new Map(), Ji = /* @__PURE__ */ new Map(), z = In({ label: "editor.still" });
  z.__panoFrameIdx = 0;
  const be = In({ label: "editor.port-still" });
  be.__panoFrameIdx = 0;
  let Fe = () => {
  };
  const ae = {
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
    // Counts the changes to the working state (requestDraw with DRAW_REASON.STATE). What is derived from
    // the state for drawing is kept while it stays the same.
    stateRevision: 0,
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: "",
    // The node's preview has not seen the state since a drag changed it.
    nodePreviewPending: !1
  }, Be = DC({
    requestAnimationFrame: (i) => requestAnimationFrame(i),
    cancelAnimationFrame: (i) => cancelAnimationFrame(i),
    draw: (i, s) => gw(i, s),
    animating: () => hw()
  }), Te = FC({
    requestFrame: (i) => Be.requestFrame(i),
    cancelFrame: (i) => Be.cancelFrame(i),
    tasks: {
      seek: () => Yt.seek(Ye.scrubFrame),
      timeline: () => Gr(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A Clip range is read from the state as it is drawn (copyClipRanges).
      view: () => {
        or(), Be.requestDraw(Nt.VIEW);
      },
      sidePanel: () => je()
    }
  }), $e = D2({
    canvas: Z,
    onReady: () => {
      bl(), ue({ reason: Nt.CONTEXT });
    },
    onFailed: () => ue(),
    onUpdate: () => ue({ localOnly: !0, reason: Nt.MEDIA }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      zt = null, bl(), ue({ reason: Nt.CONTEXT });
    }
  });
  let Rt = { key: [], projection: null }, $t = { revision: -1, sceneState: null }, nr = null, zt = null, Vr = null, ai = null;
  const Zi = Number.parseFloat(
    getComputedStyle(D).getPropertyValue("--pano-float-radius")
  ) || 10, gt = (i) => {
    const s = String(i || "default");
    I.style.cursor !== s && (I.style.cursor = s);
  }, Ut = {
    timer: 0,
    target: null
  }, kn = {
    active: !1,
    depth: 0
  }, Vt = {
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
  }, rn = 9, Mn = [];
  let si = 0;
  const Ta = () => {
    var E, N;
    const i = (E = ce == null ? void 0 : ce.getBoundingClientRect) == null ? void 0 : E.call(ce), s = (N = Ae == null ? void 0 : Ae.getBoundingClientRect) == null ? void 0 : N.call(Ae), l = Math.max(0, Number((i == null ? void 0 : i.width) || 0)), f = s ? Math.max(0, Number(s.width || 0)) : 0, y = f > 0 ? f + 14 + 12 : 72, w = Math.max(280, Math.floor(l - y * 2)), x = h.fullscreen ? Math.min(1200, w) : w;
    F.videoTransport.shellMaxWidthPx = x;
  }, li = () => {
    si || (si = Be.requestFrame(() => {
      si = 0, Ta();
    }));
  }, Zp = (i) => {
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
    return !!F.videoTransport.hasAudio;
  }, Mr = typeof ResizeObserver < "u" ? new ResizeObserver(() => li()) : null;
  Mr == null || Mr.observe(ce), Ae && (Mr == null || Mr.observe(Ae)), Mn.push(() => {
    var i;
    si && (Be.cancelFrame(si), si = 0), (i = Mr == null ? void 0 : Mr.disconnect) == null || i.call(Mr);
  }), li();
  const nl = () => {
    Vt.thumbnailJobId += 1, Vt.thumbnailSrc = "", F.videoTransport.thumbnails = [], F.videoTransport.thumbnailCount = rn;
  }, fv = async (i, s, l) => {
    const f = String(i || "").trim();
    if (!f) {
      nl();
      return;
    }
    const p = DF(f);
    if (p) {
      Vt.thumbnailSrc = f, F.videoTransport.thumbnails = p.thumbnails, F.videoTransport.thumbnailCount = p.thumbnailCount;
      return;
    }
    const m = ++Vt.thumbnailJobId;
    Vt.thumbnailSrc = f, F.videoTransport.thumbnails = [], F.videoTransport.thumbnailCount = rn;
    const y = ou(document, "editor.thumbnails");
    y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous";
    const w = In({ label: "editor.thumbnail" });
    try {
      const x = await new Promise((se) => {
        let he = !1;
        const ie = (_e) => {
          he || (he = !0, se(_e));
        };
        y.addEventListener("loadedmetadata", () => ie(!0), { once: !0 }), y.addEventListener("canplay", () => ie(!0), { once: !0 }), y.addEventListener("error", () => ie(!1), { once: !0 }), y.src = f, y.load();
      });
      if (Vt.thumbnailJobId !== m) return;
      const E = Number(y.videoWidth || 0), N = Number(y.videoHeight || 0);
      if (!x || E < 1 || N < 1) {
        Vt.thumbnailFailedSrcs.add(f);
        return;
      }
      const C = Math.max(0, Number(y.duration || s || 0)), L = 46, U = Math.max(72, Math.round(E / N * L));
      w.width = U, w.height = L;
      const K = w.getContext("2d");
      if (!K) return;
      const Q = [], ee = (se) => new Promise((he) => {
        let ie = !1;
        const _e = () => {
          ie || (ie = !0, he());
        };
        y.addEventListener("seeked", _e, { once: !0 }), y.addEventListener("error", _e, { once: !0 });
        try {
          y.currentTime = se;
        } catch {
          _e();
        }
      });
      for (let se = 0; se < rn; se += 1) {
        if (Vt.thumbnailJobId !== m) return;
        const he = rn <= 1 ? 0 : se / (rn - 1), ie = C > 0 ? Math.max(0, Math.min(C - Math.max(1e-3, 0.5 / Math.max(1, Number(l || 24))), C * he)) : 0;
        if (await ee(ie), Vt.thumbnailJobId !== m) return;
        K.clearRect(0, 0, U, L), K.drawImage(y, 0, 0, U, L), Q.push({
          id: `thumb-${se}`,
          src: w.toDataURL("image/jpeg", 0.72),
          time: ie,
          label: ku(ie)
        });
      }
      if (Vt.thumbnailJobId !== m) return;
      F.videoTransport.thumbnails = Q, F.videoTransport.thumbnailCount = Q.length || rn, LF(f, {
        thumbnails: Q,
        thumbnailCount: Q.length || rn,
        duration: C,
        fps: l
      });
    } finally {
      y.removeAttribute("src"), y.load(), fd(w);
    }
  };
  Mn.push(() => {
    nl();
  });
  const Yt = P1({
    video: Ie instanceof HTMLVideoElement ? Ie : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (i) => Be.requestFrame(i),
      cancelFrame: (i) => Be.cancelFrame(i)
    },
    fps: sl,
    span: () => {
      if (k) return vl();
      const i = Math.round(Number(F.videoTransport.duration || 0) * sl());
      return Ie.loop || !(i > 0) ? 1 / 0 : i;
    },
    loop: () => k,
    onFrame: (i) => {
      k ? vw(i) : Ei(), ue({ cause: "frame_view", localOnly: !0, reason: Nt.PLAYHEAD });
    },
    onCapture: () => {
      Lv() && (ae.backgroundDirty = !0);
    },
    onChange: () => {
      Ei(), q.playing.value = Yt.playing, Gr(), ue({ cause: "frame_view", localOnly: !0, reason: Nt.PLAYHEAD });
    }
  });
  Mn.push(() => Yt.dispose());
  const Lo = k && wt instanceof HTMLVideoElement ? A1({
    video: wt,
    onCapture: () => {
      var l;
      const i = Number(wt.videoWidth || 0), s = Number(wt.videoHeight || 0);
      i < 1 || s < 1 || (be.width = i, be.height = s, (l = be.getContext("2d")) == null || l.drawImage(wt, 0, 0), be.__panoFrameIdx += 1, ue({ cause: "frame_view", localOnly: !0, reason: Nt.MEDIA }));
    },
    onChange: () => ue({ cause: "frame_view", localOnly: !0, reason: Nt.MEDIA })
  }) : null;
  Lo && Mn.push(() => Lo.dispose());
  const dv = k ? g1({
    createImage: (i, s) => {
      const l = new Image();
      return l.onload = s, l.onerror = s, l.src = i, l;
    },
    onLoad: () => ue({ cause: "frame_view", localOnly: !0, reason: Nt.MEDIA })
  }) : null;
  if (Ie instanceof HTMLVideoElement) {
    const i = () => {
      Oi(), ue({ cause: "frame_view", localOnly: !0 });
    }, s = () => {
      Ei({
        hasAudio: F.videoTransport.hasAudio,
        muted: Ie.muted,
        volume: Number(Ie.volume ?? F.videoTransport.volume ?? 1)
      });
    }, l = () => {
      const f = Ie.dataset.panoSrc;
      f && (Vt.failedSrcs.add(f), Oi(), ue());
    };
    for (const [f, p] of [
      ["loadedmetadata", i],
      ["loadeddata", i],
      ["canplay", i],
      ["volumechange", s],
      ["error", l]
    ])
      Ie.addEventListener(f, p), Mn.push(() => Ie.removeEventListener(f, p));
  }
  function pv() {
    F.toolButtons.forEach((i) => {
      const s = i.attr === "data-tool-mode", l = i.attr === "data-paint-tool", f = i.attr === "data-mask-tool";
      i.active = s ? i.value === h.primaryTool : l ? i.key === h.paintTool : f ? i.key === h.maskTool : !1, i.pressed = i.active ? "true" : i.pressed == null ? null : "false";
    });
  }
  function du(i) {
    return Up(i == null ? void 0 : i.dataTransfer);
  }
  function Qi(i) {
    const s = !!i;
    kn.active !== s && (kn.active = s, ce.classList.toggle("drop-active", s));
  }
  function eo(i, s = null) {
    const l = wn();
    h.viewTransition = KC(l, i, performance.now(), { scale: Hr(), end: s }), !h.viewTransition && s && Qp(s), an.state.inertia.active = !1, an.state.inertia.vx = 0, an.state.inertia.vy = 0, $r(), ue({ localOnly: !0, reason: Nt.VIEW });
  }
  function Qp(i) {
    Ka(xd({ ...Iu(), moved: i.moved }, i.mode, jo())), ae.backgroundDirty = !0;
  }
  function Da() {
    h.viewTransition && (h.viewTransition = null, $r());
  }
  function eh(i, s) {
    eo({ ...wn(), yaw_deg: i, pitch_deg: s });
  }
  Wv();
  function ci() {
    return t === "stickers" ? La() : _.shots;
  }
  function La() {
    return P ? _.stickers.filter((i) => i.placement === "sky") : _.stickers;
  }
  function Gn(i) {
    return P && At(i);
  }
  function pu(i) {
    return i.source.kind === "file" && !i.source.filename && !i.source.data_url;
  }
  function cn(i) {
    return Gn(i) ? Ip(i, h.frame) : i;
  }
  function Nr(i, s) {
    Gn(i) ? Hb(i, h.frame, s) : Object.assign(i, s);
  }
  function Nn() {
    const i = _.painting || (_.painting = ga(null));
    return Array.isArray(i.groups) || (i.groups = []), i.groups;
  }
  function hv(i = "paint") {
    var p, m;
    const s = Array.isArray((m = (p = _.painting) == null ? void 0 : p[i]) == null ? void 0 : m.strokes) ? _.painting[i].strokes : [], l = [], f = /* @__PURE__ */ new Set();
    for (const y of s) {
      const w = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }
    return l;
  }
  function mv() {
    return hv("paint");
  }
  function Ra(i, s) {
    const l = String(s || "").trim();
    return l ? `${i === "mask" ? "mask" : "paint"}:${l}` : "";
  }
  function Va(i) {
    const s = String(i || "").trim();
    return s ? `raster:${s}` : "";
  }
  function yn(i) {
    const s = String(i || "").trim();
    if (!s) return "";
    const l = s.match(/^raster:(.*)$/);
    return String(l ? l[1] || "" : s).trim();
  }
  function $a(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return { layerKind: "paint", actionGroupId: "" };
    const f = l.match(/^(paint|mask):(.*)$/);
    return f ? { layerKind: f[1] === "mask" ? "mask" : "paint", actionGroupId: String(f[2] || "").trim() } : { layerKind: s === "mask" ? "mask" : "paint", actionGroupId: l };
  }
  function hu() {
    var s;
    let i = -1;
    for (const l of La())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Nn())
      i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0));
    for (const l of Array.isArray((s = _.painting) == null ? void 0 : s.raster_objects) ? _.painting.raster_objects : [])
      String((l == null ? void 0 : l.layerKind) || "paint") === "paint" && (i = Math.max(i, Number((l == null ? void 0 : l.z_index) || 0)));
    return i + 1;
  }
  function th(i, s = null) {
    const l = String(i || "").trim();
    if (!l) return null;
    const f = Nn();
    let p = f.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === l);
    return p ? s != null && (p.z_index = Math.max(0, Number(s || 0))) : (p = {
      id: l,
      type: "strokeGroup",
      actionGroupId: l,
      z_index: s == null ? hu() : Math.max(0, Number(s || 0)),
      locked: !1,
      frame: null
    }, f.push(p)), p;
  }
  function gv(i) {
    if (!(i != null && i.centerUv)) return [];
    const s = Number(i.centerUv.u || 0), l = Number(i.centerUv.v || 0), f = Number(i.halfW || 0), p = Number(i.halfH || 0);
    return [
      {
        u: ((s - f) % 1 + 1) % 1,
        v: te(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: te(l - p, 0, 1)
      },
      {
        u: ((s + f) % 1 + 1) % 1,
        v: te(l + p, 0, 1)
      },
      {
        u: ((s - f) % 1 + 1) % 1,
        v: te(l + p, 0, 1)
      }
    ];
  }
  function yv() {
    const i = new Set(mv()), l = Nn().filter((f) => i.has(String((f == null ? void 0 : f.actionGroupId) || "")));
    return i.forEach((f) => {
      l.some((p) => String((p == null ? void 0 : p.actionGroupId) || "") === f) || l.push({
        id: f,
        type: "strokeGroup",
        actionGroupId: f,
        z_index: hu(),
        locked: !1,
        frame: null
      });
    }), l.sort((f, p) => Number((f == null ? void 0 : f.z_index) || 0) - Number((p == null ? void 0 : p.z_index) || 0)), _.painting.groups = l, l;
  }
  function bv(i, s, l) {
    var Q;
    const f = (ee) => (Number(ee || 0) % 1 + 1) % 1, p = [];
    for (const ee of l) {
      const se = ee == null ? void 0 : ee.geometry, he = (se == null ? void 0 : se.geometryKind) === "lasso_fill" ? se == null ? void 0 : se.points : (se == null ? void 0 : se.processedPoints) || (se == null ? void 0 : se.rawPoints) || (se == null ? void 0 : se.points) || [];
      Array.isArray(he) && p.push(...he);
    }
    if (!p.length) return null;
    const m = f(((Q = p[0]) == null ? void 0 : Q.u) || 0);
    let y = 0, w = 0;
    p.forEach((ee) => {
      const se = f((ee == null ? void 0 : ee.u) || 0);
      y += m + pr(se, m), w += Number((ee == null ? void 0 : ee.v) || 0);
    });
    const x = (y / p.length % 1 + 1) % 1;
    let E = 1 / 0, N = -1 / 0, C = 1 / 0, L = -1 / 0;
    p.forEach((ee) => {
      const se = f((ee == null ? void 0 : ee.u) || 0), he = pr(se, x);
      E = Math.min(E, he), N = Math.max(N, he);
      const ie = Number((ee == null ? void 0 : ee.v) || 0);
      C = Math.min(C, ie), L = Math.max(L, ie);
    });
    const U = l.reduce((ee, se) => {
      const he = $i(String((se == null ? void 0 : se.toolKind) || "pen")), ie = Un[he] || Un[hi], _e = Math.max(1, Number((se == null ? void 0 : se.size) || 10)) * Math.max(0.1, Number((ie == null ? void 0 : ie.sizeScale) ?? 1));
      return Math.max(ee, _e);
    }, 0), K = Math.max(35e-4, U / 2048);
    return {
      centerUv: { u: ((x + (E + N) * 0.5) % 1 + 1) % 1, v: te((C + L) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (N - E) * 0.5 + K,
      halfH: (L - C) * 0.5 + K,
      uvPad: K
    };
  }
  function Ci(i, s, l) {
    const f = String(i || "").trim();
    if (!f) return null;
    const p = Nn().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === f);
    if (!p) return null;
    const m = l || Pr(f, s);
    return p.frame = bv(f, s, m), p.frame;
  }
  function Ro() {
    var f;
    const i = La().map((p) => ({
      type: "sticker",
      id: String((p == null ? void 0 : p.id) || ""),
      z_index: Number((p == null ? void 0 : p.z_index) || 0),
      item: p
    })), s = yv().map((p) => ({
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
  function mu(i = !0) {
    var l, f, p, m, y, w;
    const s = Ro().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (i) {
      const x = String(((f = (l = h.interaction) == null ? void 0 : l.stroke) == null ? void 0 : f.actionGroupId) || "").trim(), E = String(((m = (p = h.interaction) == null ? void 0 : p.stroke) == null ? void 0 : m.layerKind) || "").trim(), N = String(((w = (y = h.interaction) == null ? void 0 : y.stroke) == null ? void 0 : w.toolKind) || "").trim();
      x && E === "paint" && N !== "eraser" && !s.includes(x) && s.push(x);
    }
    return s;
  }
  function gu(i = !0) {
    var w, x, E, N, C, L;
    const s = Ro();
    if (!i) return s;
    const l = String(((x = (w = h.interaction) == null ? void 0 : w.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), f = String(((N = (E = h.interaction) == null ? void 0 : E.stroke) == null ? void 0 : N.layerKind) || "").trim(), p = String(((L = (C = h.interaction) == null ? void 0 : C.stroke) == null ? void 0 : L.toolKind) || "").trim();
    if (!l || f !== "paint" || p === "eraser" || s.some((U) => U.type === "strokeGroup" && String(U.actionGroupId || "") === l))
      return s;
    const m = Ft();
    let y = s.reduce((U, K) => Math.max(U, Number((K == null ? void 0 : K.z_index) || 0)), -1) + 1;
    return m && fn(m) && String(m.actionGroupId || "") === l && (y = Number(m.z_index || 0)), [
      ...s,
      {
        type: "strokeGroup",
        id: l,
        actionGroupId: l,
        z_index: y,
        item: null
      }
    ].sort((U, K) => Number((U == null ? void 0 : U.z_index) || 0) - Number((K == null ? void 0 : K.z_index) || 0));
  }
  function vv() {
    return Nn().slice().sort((i, s) => Number((i == null ? void 0 : i.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((i) => $o(Ra("paint", (i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || ""))).filter(Boolean);
  }
  function _v() {
    var i;
    return (Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : []).filter((s) => String((s == null ? void 0 : s.layerKind) || "paint") === "paint").slice().sort((s, l) => Number((s == null ? void 0 : s.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((s) => Vo(Va((s == null ? void 0 : s.id) || ""))).filter(Boolean);
  }
  function nh(i = h.interaction) {
    const s = String((i == null ? void 0 : i.kind) || "");
    if (s === "paint_stroke" || s === "paint_lasso_fill" || s === "move_stroke_group" || s === "scale_stroke_group" || s === "rotate_stroke_group" || s === "move_raster_object" || s === "scale_raster_object") return !0;
    if (s === "move_multi") {
      const l = Array.isArray(i == null ? void 0 : i.strokeSnapshots) && i.strokeSnapshots.length > 0, f = Array.isArray(i == null ? void 0 : i.rasterSnapshots) && i.rasterSnapshots.length > 0;
      return l || f;
    }
    return !1;
  }
  function wv() {
    var s, l, f, p;
    let i = null;
    try {
      const m = mu(), y = ((p = (f = (l = (s = h.paintEngine) == null ? void 0 : s.getErpTarget) == null ? void 0 : l.call(s, m)) == null ? void 0 : f.displayPaint) == null ? void 0 : p.canvas) || null;
      y && (i = {
        source: y,
        revision: `${Xa()}:${yu()}`
      });
    } catch {
      i = null;
    }
    return i;
  }
  function yu() {
    var p, m, y, w, x, E, N;
    const i = h.interaction, s = String((i == null ? void 0 : i.kind) || "");
    if (!nh(i)) return "";
    if (s === "paint_stroke" || s === "paint_lasso_fill") {
      const C = ((p = i == null ? void 0 : i.stroke) == null ? void 0 : p.geometry) || null, L = String(((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.layerKind) || ""), U = ((y = C == null ? void 0 : C.rawPoints) == null ? void 0 : y.length) ?? ((w = C == null ? void 0 : C.points) == null ? void 0 : w.length) ?? 0, K = String((i == null ? void 0 : i._livePreviewToken) || "");
      return `_${L || "paint"}_${s}_live${K}_${U}_${h.livePaintInteractionRevision}`;
    }
    const l = String(((x = i == null ? void 0 : i.item) == null ? void 0 : x.actionGroupId) || ""), f = String(((E = i == null ? void 0 : i.item) == null ? void 0 : E.rasterObjectId) || ((N = i == null ? void 0 : i.item) == null ? void 0 : N.id) || "");
    return `_${s}_${l || f || "active"}_${h.livePaintInteractionRevision}`;
  }
  function rl() {
    return A || !Array.isArray(_.stickers) ? [] : La();
  }
  function bu() {
    return [...Array.isArray(_.shots) ? _.shots : [], ...rl()];
  }
  function un(i) {
    return !!i && Array.isArray(_.shots) && _.shots.includes(i);
  }
  function At(i) {
    return !!i && Array.isArray(_.stickers) && _.stickers.includes(i);
  }
  function Kn() {
    var i;
    return Array.isArray((i = _.painting) == null ? void 0 : i.raster_objects) ? _.painting.raster_objects : [];
  }
  function Vo(i) {
    const s = yn(i);
    if (!s) return null;
    const l = Kn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
    return !l || String((l == null ? void 0 : l.layerKind) || "paint") !== "paint" ? null : {
      ...l,
      id: Va(s),
      type: "rasterObject",
      rasterObjectId: s
    };
  }
  function vn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "rasterObject") return !1;
    const s = yn(i.rasterObjectId || i.id || "");
    return !!s && !!Vo(Va(s));
  }
  function $o(i) {
    const s = $a(i), l = String(s.actionGroupId || "").trim();
    if (!l) return null;
    const f = Nn().find((p) => String((p == null ? void 0 : p.id) || (p == null ? void 0 : p.actionGroupId) || "") === l || String((p == null ? void 0 : p.actionGroupId) || "") === l);
    return f ? {
      ...f,
      id: Ra("paint", l),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: l
    } : null;
  }
  function fn(i) {
    if (!i || typeof i != "object" || String(i.type || "") !== "strokeGroup") return !1;
    const s = String(i.actionGroupId || "").trim(), l = String(i.layerKind || "paint").trim() || "paint";
    return !!s && !!$o(Ra(l, s));
  }
  function Pr(i, s = null) {
    const l = $a(i, s), f = String(l.actionGroupId || "").trim();
    return f ? Yo(l.layerKind).filter((p) => String((p == null ? void 0 : p.actionGroupId) || "").trim() === f) : [];
  }
  function Sv(i, s = "paint") {
    const l = String(i || "").trim(), p = `geomv5:${String(s || "paint").trim() || "paint"}:${l}:${h.mode}:${Ya()}`;
    if (h.mode === "frame") {
      const m = He(), y = String((m == null ? void 0 : m.id) || ""), w = m ? mn(m) : null;
      return `${p}:frame:${y}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((w == null ? void 0 : w.x) || 0))}:${Math.round(Number((w == null ? void 0 : w.y) || 0))}:${Math.round(Number((w == null ? void 0 : w.w) || 0))}:${Math.round(Number((w == null ? void 0 : w.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function il(i, s, l) {
    return !i || typeof i != "object" ? i : {
      ...i,
      u: ((Number(i.u || 0) + Number(s || 0)) % 1 + 1) % 1,
      v: te(Number(i.v || 0) + Number(l || 0), 0, 1)
    };
  }
  function pr(i, s) {
    let l = Number(i || 0) - Number(s || 0);
    for (; l > 0.5; ) l -= 1;
    for (; l < -0.5; ) l += 1;
    return l;
  }
  function vu(i, s = null, l = null) {
    var E;
    const f = $a(i, s), p = Array.isArray(l) ? l : Pr(f.actionGroupId, f.layerKind), m = [];
    if (p.forEach((N) => {
      const C = (N == null ? void 0 : N.geometry) || null, L = (C == null ? void 0 : C.geometryKind) === "lasso_fill" ? C == null ? void 0 : C.points : (C == null ? void 0 : C.processedPoints) || (C == null ? void 0 : C.rawPoints) || (C == null ? void 0 : C.points) || [];
      Array.isArray(L) && m.push(...L);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((E = m[0]) == null ? void 0 : E.u) || 0);
    let w = 0, x = 0;
    return m.forEach((N) => {
      w += y + pr(Number((N == null ? void 0 : N.u) || 0), y), x += Number((N == null ? void 0 : N.v) || 0);
    }), {
      u: (w / m.length % 1 + 1) % 1,
      v: te(x / m.length, 0, 1)
    };
  }
  function ol(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = pr(Number(i.u || 0), p), w = Number(i.v || 0) - m, x = Number(f || 0) * Ur, E = Math.cos(x), N = Math.sin(x), C = Math.max(0.02, Number(l || 1)), L = (y * E - w * N) * C, U = (y * N + w * E) * C;
    return {
      ...i,
      u: ((p + L) % 1 + 1) % 1,
      v: te(m + U, 0, 1)
    };
  }
  function rh(i, s, l, f = null, p = null, m = null) {
    const y = $a(i, p), w = String(y.actionGroupId || "").trim();
    if (!w) return !1;
    const x = Yo(y.layerKind), E = Array.isArray(f) ? new Map(f.map((C) => [String((C == null ? void 0 : C.id) || ""), C])) : null;
    let N = !1;
    if (x.forEach((C) => {
      if (String((C == null ? void 0 : C.actionGroupId) || "").trim() !== w) return;
      const L = (E == null ? void 0 : E.get(String((C == null ? void 0 : C.id) || ""))) || C, U = C == null ? void 0 : C.geometry, K = L == null ? void 0 : L.geometry;
      !U || !K || (Array.isArray(K.points) && (U.points = K.points.map((Q) => il(Q, s, l)), N = !0), Array.isArray(K.rawPoints) && (U.rawPoints = K.rawPoints.map((Q) => il(Q, s, l)), N = !0), Array.isArray(K.processedPoints) && (U.processedPoints = K.processedPoints.map((Q) => il(Q, s, l)), N = !0));
    }), N && m) {
      const C = Nn().find((L) => String((L == null ? void 0 : L.actionGroupId) || "") === w);
      C && (C.frame = null);
    }
    return N;
  }
  function ih(i, s = 1, l = 0, f = null, p = null, m = null) {
    const y = $a(i, p), w = String(y.actionGroupId || "").trim();
    if (!w) return !1;
    const x = Yo(y.layerKind), E = Array.isArray(f) ? f : Pr(w, y.layerKind), N = Array.isArray(E) ? new Map(E.map((U) => [String((U == null ? void 0 : U.id) || ""), U])) : null, C = (m == null ? void 0 : m.centerUv) ?? vu(w, y.layerKind, E);
    let L = !1;
    if (x.forEach((U) => {
      if (String((U == null ? void 0 : U.actionGroupId) || "").trim() !== w) return;
      const K = (N == null ? void 0 : N.get(String((U == null ? void 0 : U.id) || ""))) || U, Q = U == null ? void 0 : U.geometry, ee = K == null ? void 0 : K.geometry;
      !Q || !ee || (Array.isArray(ee.points) && (Q.points = ee.points.map((se) => ol(se, C, s, l)), L = !0), Array.isArray(ee.rawPoints) && (Q.rawPoints = ee.rawPoints.map((se) => ol(se, C, s, l)), L = !0), Array.isArray(ee.processedPoints) && (Q.processedPoints = ee.processedPoints.map((se) => ol(se, C, s, l)), L = !0));
    }), L && m) {
      const U = Nn().find((K) => String((K == null ? void 0 : K.actionGroupId) || "") === w);
      U && (U.frame = null);
    }
    return L;
  }
  function oh(i, s, l, f = null) {
    const p = yn(i);
    if (!p) return !1;
    const m = Kn().find((N) => String((N == null ? void 0 : N.id) || "").trim() === p);
    if (!m) return !1;
    const y = f && typeof f == "object" ? f : m, w = (y == null ? void 0 : y.transform) || {}, x = Number(w.du || 0) + Number(s || 0), E = te(Number(w.dv || 0) + Number(l || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = x, m.transform.dv = E, !0;
  }
  function xv(i, s = 1, l = null) {
    const f = yn(i);
    if (!f) return !1;
    const p = Kn().find((E) => String((E == null ? void 0 : E.id) || "").trim() === f);
    if (!p) return !1;
    const m = l && typeof l == "object" ? l : p, y = (m == null ? void 0 : m.transform) || {}, w = Math.max(0.01, Number(y.scale || 1)), x = te(w * Math.max(0.01, Number(s || 1)), 0.01, 100);
    return p.transform || (p.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), p.transform.scale = x, !0;
  }
  function Ft() {
    const i = String(h.selectedId || "");
    if (!i) return null;
    const s = $o(i);
    if (s) return s;
    const l = Vo(i);
    return l || (R ? bu().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null : ci().find((f) => String((f == null ? void 0 : f.id) || "") === i) || null);
  }
  function rr() {
    const i = Array.isArray(h.selectedIds) && h.selectedIds.length ? h.selectedIds : h.selectedId ? [h.selectedId] : [], s = [], l = /* @__PURE__ */ new Set();
    return i.forEach((f) => {
      const p = String(f || "").trim();
      if (!p || l.has(p)) return;
      l.add(p);
      const m = p === String(h.selectedId || "") ? Ft() : $o(p) || Vo(p) || (R ? bu().find((y) => String((y == null ? void 0 : y.id) || "") === p) : ci().find((y) => String((y == null ? void 0 : y.id) || "") === p));
      m && s.push(m);
    }), s;
  }
  function za(i = null) {
    const s = Array.isArray(i) ? i : rr();
    if (!s || s.length < 2) return null;
    const l = s.map((E) => on(E)).filter((E) => (E == null ? void 0 : E.visible) && Array.isArray(E.corners) && E.corners.length);
    if (!l.length) return null;
    const f = l.flatMap((E) => E.corners.map((N) => Number((N == null ? void 0 : N.x) || 0))), p = l.flatMap((E) => E.corners.map((N) => Number((N == null ? void 0 : N.y) || 0))), m = Math.min(...f), y = Math.max(...f), w = Math.min(...p), x = Math.max(...p);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (w + x) * 0.5 },
      corners: [
        { x: m, y: w },
        { x: y, y: w },
        { x: y, y: x },
        { x: m, y: x }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: w, a: { x: m, y: w }, b: { x: y, y: w } },
        { edge: "right", x: y, y: (w + x) * 0.5, a: { x: y, y: w }, b: { x: y, y: x } },
        { edge: "bottom", x: (m + y) * 0.5, y: x, a: { x: y, y: x }, b: { x: m, y: x } },
        { edge: "left", x: m, y: (w + x) * 0.5, a: { x: m, y: x }, b: { x: m, y: w } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: w },
      rotateHandle: { x: (m + y) * 0.5, y: w - 30 }
    };
  }
  function ah(i) {
    const s = String((i == null ? void 0 : i.id) || "").trim();
    return !!s && Array.isArray(h.selectedIds) && h.selectedIds.includes(s);
  }
  function ja() {
    const i = Ft();
    return i ? fn(i) || vn(i) ? "stroke" : un(i) ? "frame" : "image" : null;
  }
  function _n(i) {
    if (!i || typeof i != "object") return !1;
    if (fn(i)) {
      const s = String(i.actionGroupId || i.id || "").trim(), l = Nn().find((f) => String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    if (vn(i)) {
      const s = yn(i.rasterObjectId || i.id || ""), l = Kn().find((f) => String((f == null ? void 0 : f.id) || "").trim() === s);
      return (l == null ? void 0 : l.locked) === !0;
    }
    return i.locked === !0;
  }
  function _u(i = null) {
    const s = Array.isArray(i) ? i : rr();
    return s.length > 0 && s.every((l) => _n(l));
  }
  function kv(i, s) {
    const l = s === !0;
    if (!i || typeof i != "object") return !1;
    if (fn(i)) {
      const f = String(i.actionGroupId || i.id || "").trim(), p = Nn().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    if (vn(i)) {
      const f = yn(i.rasterObjectId || i.id || ""), p = Kn().find((m) => String((m == null ? void 0 : m.id) || "").trim() === f);
      return !p || p.locked === l ? !1 : (p.locked = l, !0);
    }
    return i.locked === l ? !1 : (i.locked = l, !0);
  }
  function Mv() {
    if (r) return;
    const i = rr();
    if (!i.length) return;
    const s = !_u(i);
    let l = !1;
    i.forEach((f) => {
      kv(f, s) && (l = !0);
    }), l && (tt(), st(), Ke(), je(), ue());
  }
  function Rn(i) {
    no(), Ye.selection = null, h.selectedId = (i == null ? void 0 : i.id) || null, h.selectedIds = i != null && i.id ? [i.id] : [], i && At(i) ? _.active.selected_sticker_id = i.id || null : _.active.selected_sticker_id = null, i && un(i) ? _.active.selected_shot_id = i.id || null : i ? un(i) || (_.active.selected_shot_id = _.active.selected_shot_id) : _.active.selected_shot_id = null;
  }
  function Nv(i, s = null) {
    const l = [], f = /* @__PURE__ */ new Set();
    (Array.isArray(i) ? i : []).forEach((y) => {
      const w = String((y == null ? void 0 : y.id) || "").trim();
      !w || f.has(w) || (f.add(w), l.push(w));
    }), h.selectedIds = l, no(), Ye.selection = null;
    const p = String(s || "").trim();
    h.selectedId = p && l.includes(p) ? p : l[l.length - 1] || null;
    const m = Ft();
    _.active.selected_sticker_id = m && At(m) && m.id || null, m && un(m) ? _.active.selected_shot_id = m.id || null : l.length || (_.active.selected_shot_id = null);
  }
  function sh() {
    const i = (Array.isArray(_.shots) ? _.shots : []).map((l, f) => ({
      kind: "frame",
      item: l,
      label: String((l == null ? void 0 : l.label) || `Frame ${f + 1}`)
    })), s = rl().map((l, f) => {
      var m, y;
      const p = Xt(l) ? String(l.id || Gf) : String(((y = (m = _.assets) == null ? void 0 : m[l.asset_id]) == null ? void 0 : y.name) || l.asset_id || l.id || `Image ${f + 1}`);
      return {
        kind: "image",
        item: l,
        label: p
      };
    });
    return [...i, ...s];
  }
  function lh(i) {
    return i === "frame" ? Pe.camera : i === "stroke" ? Pe.paintbrush_vertical_tool : Pe.image;
  }
  function wu(i) {
    return !i || !i.item ? {
      label: String((i == null ? void 0 : i.label) || ""),
      icon: null
    } : {
      label: String(i.label || ""),
      icon: lh(i.kind)
    };
  }
  function al() {
    return hu();
  }
  function Xt(i) {
    var s;
    return !i || typeof i != "object" ? !1 : k ? ((s = i.source) == null ? void 0 : s.kind) === "port" : String(i.id || "") === Gf || String(i.source_kind || "") === mF;
  }
  function zo(i) {
    return !!(i && typeof i == "object" && i.visible === !1);
  }
  function Pv(i) {
    return Xt(i) && zo(i) ? Zb : 1;
  }
  function Av() {
    return h.primaryTool === "mask" ? h.maskTool : h.paintTool;
  }
  function Cv() {
    return String(Av() || "") === "lasso_fill";
  }
  function Iv() {
    if (r) return;
    const i = Ft();
    !i || !Xt(i) || (i.visible = zo(i), ts(), jt(), tt(), st(), je(), Ke(), ue());
  }
  function Ev() {
    if (r || t !== "stickers") return;
    const i = Ft();
    if (!i || !Xt(i)) return;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return;
    i.yaw_deg = Number(s.yaw_deg ?? i.yaw_deg ?? 0), i.pitch_deg = Number(s.pitch_deg ?? i.pitch_deg ?? 0), i.hFOV_deg = Number(s.hFOV_deg ?? i.hFOV_deg ?? 30);
    const l = Mu(jl, () => {
      ue();
    });
    l && (l.complete || l.naturalWidth || l.width) ? i.vFOV_deg = Fi(
      Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    ) : i.vFOV_deg = Number(s.vFOV_deg ?? i.vFOV_deg ?? 30), i.rot_deg = Number(s.rot_deg ?? i.rot_deg ?? 0), tt(), st(), je(), Ke(), ue();
  }
  function Ov(i) {
    if (!i || !Xt(i)) return null;
    const s = i.initial_pose;
    if (!s || typeof s != "object") return null;
    const l = {
      yaw_deg: Number(s.yaw_deg ?? i.yaw_deg ?? 0),
      pitch_deg: Number(s.pitch_deg ?? i.pitch_deg ?? 0),
      hFOV_deg: Number(s.hFOV_deg ?? i.hFOV_deg ?? 30),
      vFOV_deg: Number(s.vFOV_deg ?? i.vFOV_deg ?? 30),
      rot_deg: Number(s.rot_deg ?? i.rot_deg ?? 0)
    }, f = Mu(jl, () => {
      ue();
    });
    return f && (f.complete || f.naturalWidth || f.width) && (l.vFOV_deg = Fi(
      l.hFOV_deg,
      Number(f.naturalWidth || f.width || 1),
      Number(f.naturalHeight || f.height || 1)
    )), l;
  }
  function Fv() {
    const i = Ft();
    if (!i || !Xt(i)) return !1;
    const s = Ov(i);
    if (!s) return !1;
    const l = (f, p) => Math.abs(Number(f || 0) - Number(p || 0)) <= 1e-4;
    return !(l(i.yaw_deg, s.yaw_deg) && l(i.pitch_deg, s.pitch_deg) && l(i.hFOV_deg, s.hFOV_deg) && l(i.vFOV_deg, s.vFOV_deg) && l(i.rot_deg, s.rot_deg));
  }
  function Ii(i) {
    return jn.uiList(e, i);
  }
  function Su(i) {
    return jn.uiValue(e, i);
  }
  function ch() {
    const i = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return Nc(i) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Tv() {
    const { metaKey: i } = ch(), s = Su(i);
    return Array.isArray(s) && s.length > 0 && s[0] && typeof s[0] == "object" ? s[0] : s && typeof s == "object" ? s : null;
  }
  function xu(i) {
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
  function ku(i) {
    const s = Math.max(0, Math.floor(Number(i || 0))), l = Math.floor(s / 60), f = s % 60;
    return `${l}:${String(f).padStart(2, "0")}`;
  }
  function sl() {
    return k ? _.timeline.fps : Vt.metaFps || 1e3;
  }
  function Ei(i = {}) {
    const s = Number(i.duration ?? F.videoTransport.duration ?? 0), l = Math.max(1, Number(i.fps ?? F.videoTransport.fps ?? 24)), f = Yt.frame / sl(), p = Object.prototype.hasOwnProperty.call(i, "ready") ? !!i.ready : !!F.videoTransport.ready, m = Yt.playing, y = Object.prototype.hasOwnProperty.call(i, "visible") ? !!i.visible : !!F.videoTransport.visible, w = Object.prototype.hasOwnProperty.call(i, "muted") ? !!i.muted : !!(Ie instanceof HTMLVideoElement ? Ie.muted : F.videoTransport.muted), x = Number(
      Object.prototype.hasOwnProperty.call(i, "volume") ? i.volume : Ie instanceof HTMLVideoElement ? Ie.volume : F.videoTransport.volume
    ), E = Object.prototype.hasOwnProperty.call(i, "hasAudio") ? !!i.hasAudio : Zp(Ie), N = Object.prototype.hasOwnProperty.call(i, "loop") ? !!i.loop : !!F.videoTransport.loop;
    Object.assign(F.videoTransport, {
      ready: p,
      playing: m,
      visible: y,
      loop: N,
      currentTime: Number.isFinite(f) ? f : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, f / s * 100)) : 0,
      currentTimeLabel: ku(f),
      durationLabel: ku(s),
      frameCount: Math.max(0, Number(i.frameCount ?? F.videoTransport.frameCount ?? 0)),
      fps: l,
      hasAudio: E,
      muted: w,
      volume: Math.max(0, Math.min(1, Number.isFinite(x) ? x : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(x) ? x : 1)) * 100),
      thumbnails: Array.isArray(i.thumbnails) ? i.thumbnails : F.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(i.thumbnailCount ?? F.videoTransport.thumbnailCount ?? rn))
    });
  }
  function uh() {
    return !!(Ie instanceof HTMLVideoElement && !k && Ie.getAttribute("src") && h.primaryTool !== "paint" && h.primaryTool !== "mask");
  }
  function fh() {
    if (!(Ie instanceof HTMLVideoElement) || !F.videoTransport.hasAudio) return;
    const i = !Ie.muted;
    Ie.muted = i, !i && Number(Ie.volume || 0) <= 0 && (Ie.volume = Math.max(0.01, Number(F.videoTransport.volume || 1))), Ei({
      hasAudio: F.videoTransport.hasAudio,
      muted: Ie.muted,
      volume: Number(Ie.volume ?? F.videoTransport.volume ?? 1)
    });
  }
  function Dv() {
    Ei({
      visible: uh()
    });
  }
  function Lv() {
    if (!(Ie instanceof HTMLVideoElement) || Number(Ie.videoWidth || 0) < 1 || Number(Ie.videoHeight || 0) < 1) return !1;
    const i = Number(Ie.videoWidth || 0), s = Number(Ie.videoHeight || 0);
    (z.width !== i || z.height !== s) && (z.width = i, z.height = s);
    const l = z.getContext("2d");
    return l ? (l.clearRect(0, 0, i, s), l.drawImage(Ie, 0, 0, i, s), z.__panoFrameIdx = Number(z.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function dh() {
    return !Yt.showsVideo && Number(z.width || 0) > 0 && Number(z.height || 0) > 0 && Number(z.__panoFrameIdx || 0) > 0 ? z : Ie instanceof HTMLVideoElement && Number(Ie.videoWidth || 0) > 0 && Number(Ie.videoHeight || 0) > 0 && Number(Ie.readyState || 0) >= 2 ? Ie : null;
  }
  function ph() {
    z.__panoFrameIdx = 0, ae.backgroundDirty = !0;
  }
  function Oi() {
    if (!(Ie instanceof HTMLVideoElement)) return null;
    const { videoKey: i } = ch(), s = xn(e, "background") && Ii(i)[0] || null, l = ms(s), f = [l, jn.linkedVideoFile(e, Ih())].filter(Boolean), p = f.find((C) => !Vt.failedSrcs.has(C)) || "";
    Vt.videoFailed = !p && f.length > 0;
    const m = p && p === l ? Tv() : null;
    Vt.metaFps = Number(m == null ? void 0 : m.fps) > 0 ? Number(m.fps) : 0;
    const y = Math.max(1, Number((m == null ? void 0 : m.fps) || (k ? _.timeline.fps : 24))), w = Ie.dataset.panoSrc === p && Number.isFinite(Ie.duration) ? Ie.duration : 0, x = Number((m == null ? void 0 : m.duration) || ((m == null ? void 0 : m.frames) > 0 ? m.frames / y : w)), E = Math.max(0, Number((m == null ? void 0 : m.frames) || Math.round(x * y))), N = !!(m != null && m.has_audio) || Zp(Ie);
    return p && Ie.dataset.panoSrc !== p ? (Ie.pause(), ph(), Ie.dataset.panoSrc = p, Ie.loop = !k && !!F.videoTransport.loop, Ie.muted = !!F.videoTransport.muted, Ie.volume = Math.max(0, Math.min(1, Number(F.videoTransport.volume ?? 1))), Ie.src = p, Ie.load(), Yt.setSource(!0), k || Yt.seek(0)) : !p && Ie.getAttribute("src") && (Ie.pause(), Ie.removeAttribute("src"), delete Ie.dataset.panoSrc, Ie.load(), ph(), nl(), Yt.setSource(!1)), k || (Ie.loop = !!F.videoTransport.loop), p && !k && Vt.thumbnailSrc !== p && !Vt.thumbnailFailedSrcs.has(p) && fv(p, x, y), p || nl(), Ei({
      ready: !!p,
      visible: !!p && uh(),
      duration: x,
      frameCount: E,
      fps: y,
      hasAudio: N,
      loop: !!Ie.loop,
      muted: !!Ie.muted,
      volume: Number(Ie.volume ?? F.videoTransport.volume ?? 1),
      thumbnailCount: F.videoTransport.thumbnailCount
    }), p || null;
  }
  function hh(i, s = null) {
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
  function Mu(i, s = null) {
    return Uf(e, i, nn, s || (() => ue()));
  }
  function Nu(i = null) {
    return xn(e, "external-sticker") ? Mu(jl, i) : null;
  }
  function mh() {
    if (!xn(e, "external-sticker")) return null;
    const i = Ii(bF)[0];
    if (!i || typeof i != "object") return null;
    const s = Ii(yF).map(ms).filter(Boolean);
    if (s.length) return { frames: s, meta: i };
    const l = ms(Ii(gF)[0] || null);
    return l ? { src: l, meta: i } : null;
  }
  function Rv() {
    const i = _.stickers.find(Xt), s = i ? mh() : null, l = s ? p1(i.clip, h.frame, _.timeline.fps, s.meta) : null;
    Lo.follow({ src: (s == null ? void 0 : s.src) || "", time: l, playing: Yt.advancing, fps: _.timeline.fps });
    const f = i ? Fu(i) : null, p = s != null && s.frames ? dv.picture(s.frames, l, s.meta, f) : Lo.picture(be, f);
    return p ? { media: p, revision: xu(p), source: m1(s, f) } : null;
  }
  function Fi(i, s, l) {
    const f = Math.max(1, Number(s || 1)), p = Math.max(1, Number(l || 1)), m = te(Number(i || 30), 0.1, 179) * Ur, y = 2 * Math.atan(Math.tan(m * 0.5) * (p / f));
    return te(y * wo, 0.1, 179);
  }
  function Vv(i) {
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
      const y = Number(m.yaw_deg), w = Number(m.pitch_deg), x = Number(m.roll_deg), E = Number(m.hFOV_deg);
      if (![y, w, x, E].every((U) => Number.isFinite(U))) return null;
      let N = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(N, -0) && (N = 0);
      const C = {
        yaw_deg: N,
        pitch_deg: te(w, -89.9, 89.9),
        roll_deg: x,
        hFOV_deg: te(E, 0.1, 179)
      }, L = Number(l.source_aspect);
      return Number.isFinite(L) && L > 0 && (C.source_aspect = L), C;
    } catch {
      return null;
    }
  }
  function gh(i) {
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Ao(i);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: te(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: te(Number.isFinite(p) ? p : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function $v(i) {
    var w;
    if (!i || typeof i != "object") return gh(null);
    const s = Number(i == null ? void 0 : i.yaw_deg), l = Number(i == null ? void 0 : i.pitch_deg), f = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg)), p = Number(i == null ? void 0 : i.hFOV_deg), m = Number(i == null ? void 0 : i.vFOV_deg);
    let y = 1;
    if (Number.isFinite(p) && Number.isFinite(m)) {
      const x = te(p, 0.1, 179) * Ur, E = te(m, 0.1, 179) * Ur, N = Math.tan(E * 0.5);
      if (Math.abs(N) > 1e-6) {
        const C = Math.tan(x * 0.5) / N;
        Number.isFinite(C) && C > 0 && (y = C);
      }
    }
    if (i != null && i.asset_id && ((w = _ == null ? void 0 : _.assets) != null && w[i.asset_id])) {
      const x = _.assets[i.asset_id], E = Number((x == null ? void 0 : x.w) || 0), N = Number((x == null ? void 0 : x.h) || 0);
      E > 0 && N > 0 && (y = E / N);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(s) ? s : 0),
        pitch_deg: te(Number.isFinite(l) ? l : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(f) ? f : 0,
        hFOV_deg: te(Number.isFinite(p) ? p : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function zv(i) {
    return jn.linkedValue(e, i);
  }
  function jv(i, s, l) {
    const f = i && typeof i == "object" ? {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      roll_deg: Number(i.rot_deg ?? i.roll_deg ?? 0),
      hFOV_deg: Number(i.hFOV_deg || 30)
    } : Vv(s);
    if (f) {
      const y = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || f.source_aspect || 1), w = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
      return {
        yaw_deg: Number(f.yaw_deg || 0),
        pitch_deg: Number(f.pitch_deg || 0),
        hFOV_deg: Number(f.hFOV_deg || 30),
        vFOV_deg: Fi(f.hFOV_deg, y, w),
        rot_deg: Number(f.roll_deg || 0)
      };
    }
    const p = Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 1), m = Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 1);
    return {
      yaw_deg: Number(h.viewYaw || 0),
      pitch_deg: Number(h.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Fi(30, p, m),
      rot_deg: 0
    };
  }
  function Hv() {
    const i = Nu(() => {
      Si(e, "image-loaded");
    }), s = xn(e, "external-sticker") ? hh(Su("pano_sticker_input_pose"), null) : null;
    return M1(_, k1(e, { pose: s, image: i }));
  }
  function Gv() {
    var w;
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((x) => String((x == null ? void 0 : x.name) || "") === "sticker_image") : -1, s = i >= 0 ? ((w = e.getInputLink(i)) == null ? void 0 : w.id) ?? null : null, l = Nu(() => {
      Si(e, "image-loaded");
    }), f = hh(Su("pano_sticker_input_pose"), null), p = zv("sticker_state"), m = jn.externalStateHash(e, p), y = s == null ? null : jv(f, p, l);
    return x1(_, {
      connected: s != null,
      linkId: s,
      stateHash: m,
      pose: y,
      imageWidth: Number((l == null ? void 0 : l.naturalWidth) || (l == null ? void 0 : l.width) || 0),
      imageHeight: Number((l == null ? void 0 : l.naturalHeight) || (l == null ? void 0 : l.height) || 0)
    });
  }
  function yh(i = "sync") {
    if (t !== "stickers" || r) return;
    const s = e.__panoSceneStateV2 ? Hv() : Gv();
    if (s.changed) {
      const l = _.stickers.find(Xt);
      _.stickers = s.state.stickers, _.active = s.state.active, l && h.selectedId === l.id && !_.stickers.some((f) => f.id === l.id) && (h.selectedId = null, h.selectedIds = []), st(), je(), Ke();
    }
    ue();
  }
  function Ha(i = {}) {
    const l = i.preservePanelValues !== !1 ? cn(Ft()) : null;
    l && (h.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: yi(l)
    }), h.selectedId = null, h.selectedIds = [], no(), h.cutoutAspectOpen = !1, _.active.selected_sticker_id = null, _.active.selected_shot_id = null;
  }
  function to() {
    return !P || !h.worldSelectedId ? null : _.stickers.find((i) => i.id === h.worldSelectedId && i.placement === "world") || null;
  }
  function Pu(i) {
    Rn(null), h.worldSelectedId = i, ae.backgroundDirty = !0;
  }
  function no() {
    h.worldSelectedId && (h.worldSelectedId = null, h.gizmoAxis = null, ae.backgroundDirty = !0);
  }
  function ll(i) {
    return !!i && !r && !i.locked;
  }
  function Kv() {
    if (t !== "cutout") return;
    const i = He();
    i && (h.selectedId = String(i.id || "") || null, h.selectedIds = h.selectedId ? [h.selectedId] : []);
  }
  function Au() {
    if (O && ta(F.toolButtons, "value", "add-camera", { disabled: Ti() }), t !== "cutout") return;
    const i = He();
    ta(F.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: i ? "Look At Frame" : "Add Frame",
      tip: i ? "Look at frame" : "Add frame",
      icon: i ? Pe.camera : Pe.plus_circle
    });
  }
  function $r() {
    const i = ZC({
      spaceView: io(),
      spaceMode: uc(h.spaceMode, h.viewTransition),
      readOnly: r,
      frameMode: R && h.mode === "frame",
      showGrid: h.showGrid
    });
    F.space && Object.assign(F.space, i.space);
    for (const [s, l] of Object.entries(i.buttons)) ta(F.floatingButtons, "action", s, l);
  }
  function ui() {
    var l;
    const i = QC({ hasShot: !!He(), erp: ro(), hidden: Ti() && !zr(), studio: O });
    h.mode === "frame" && i.disabled && (O ? hm(He()) : h.mode = "pano"), h.outputPreviewRect = null, F.viewButtons.forEach((f) => {
      const p = f.key === h.mode;
      f.pressed = p ? "true" : "false", f.visible = !(f.key === "frame" && !R), f.key === "frame" ? Object.assign(f, i) : f.disabled = !1;
    });
    const s = R && h.mode === "frame" ? He() : null;
    F.frameRail.visible = !!s, F.frameRail.disabled = r || (s == null ? void 0 : s.locked) === !0, F.frameRollKnob.visible = !!s && !r && s.locked !== !0, F.frameRollKnob.disabled = r || (s == null ? void 0 : s.locked) === !0, F.frameRollKnob.rollDeg = Number((s == null ? void 0 : s.roll_deg) ?? (s == null ? void 0 : s.rot_deg) ?? 0), F.frameRollKnob.displayValue = na(F.frameRollKnob.rollDeg), F.frameRollKnob.dragging = ((l = h.interaction) == null ? void 0 : l.kind) === "roll_frame", F.frameRollKnob.armed = !!s && h.altModifier === !0, F.frameRail.rollKnob = F.frameRollKnob, F.frameRail.aspectLabel = s ? yi(s) : "", F.frameRail.aspectChoices = tv(s ? String(yi(s)) : null, { erp: O, coverage: _.coverage }), s || (F.frameRail.aspectOpen = !1), F.outputPreviewToggle.visible = t === "cutout" && h.mode !== "frame" && !!He(), R && F.cameraPreview && (F.cameraPreview.visible = h.mode !== "frame" && bh(), F.cameraPreview.expanded = !!h.outputPreviewExpanded, F.cameraPreview.settled = F.cameraPreview.settled === !0 && ae.pendingStableLayoutFrames <= 0 && ae.hasPresentedFrame), $r(), Sm() ? bt(h.pointerPos) : gt(h.mode === "pano" ? "grab" : "default");
  }
  function bh() {
    return !O || zr() && !ro();
  }
  function ro() {
    return O && zr() && _.camera.projection === "erp";
  }
  function Wv() {
    const s = Eh({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !s || s.length !== 4 ? !1 : s[0].y >= s[3].y;
  }
  function vh() {
    return Qb({ yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, roll_deg: 0, hFOV_deg: h.viewFov }, I.width, I.height);
  }
  function _h() {
    return !k || !xn(e, "scene") ? null : a0(Ii("pano_scene_files"), Ii("pano_scene_meta"), ms);
  }
  function Bv() {
    return !k || !xn(e, "external-sticker") ? null : a0(Ii("pano_sticker_files"), Ii("pano_sticker_meta"), ms);
  }
  function io() {
    return h.mode === "pano" && Ga();
  }
  function Ga() {
    return k && f2({ sceneLinked: P && !!Cd(e).scene, files: _h(), stickers: _.stickers });
  }
  function hr() {
    return h.spaceMode === "6dof" && io();
  }
  function Cu() {
    var i, s, l;
    return iA((l = (s = (i = lr.ui) == null ? void 0 : i.settings) == null ? void 0 : s.getSettingValue) == null ? void 0 : l.call(s, H1));
  }
  function Iu() {
    return { mode: h.spaceMode, position: h.viewPosition, moved: h.viewMoved };
  }
  function Ka(i) {
    h.spaceMode = i.mode, h.viewPosition = i.position, h.viewMoved = i.moved;
  }
  function Uv(i) {
    var l;
    const s = BC(h.spaceMode, h.viewTransition, i);
    if (s !== "keep") {
      if (s === "return") {
        eo({ ...wn(), position: jo(), distance: ((l = jr()) == null ? void 0 : l.radius) || Or }, { mode: i, moved: !1 });
        return;
      }
      Da(), Ka(xd({ ...Iu(), position: wn().position }, i, jo())), ae.backgroundDirty = !0, $r(), ue({ localOnly: !0, reason: Nt.VIEW });
    }
  }
  function wn() {
    var l;
    const i = h.viewMoved ? h.viewDistance : ((l = jr()) == null ? void 0 : l.radius) || Or, s = { position: h.viewPosition, yaw_deg: h.viewYaw, pitch_deg: h.viewPitch, hFOV_deg: h.viewFov, distance: i };
    return a2(h.spaceMode, s, jo());
  }
  function jo() {
    return zr() ? oo().position : [0, 0, 0];
  }
  function Ti() {
    return G && _.camera !== null;
  }
  function zr() {
    return Ti() && (!O || _.camera.visible);
  }
  function cl() {
    return _.painting_visible !== !1;
  }
  function ul(i) {
    return i.visible && ya(i.clip, h.frame);
  }
  function oo() {
    return wp(_.camera, h.frame);
  }
  function jr() {
    var s;
    const i = Ar();
    return ((s = i.space ?? i.content) == null ? void 0 : s.sphere) ?? null;
  }
  function wh(i) {
    h.viewPosition = i.position, h.viewYaw = i.yaw_deg, h.viewPitch = i.pitch_deg, h.viewDistance = i.distance, h.viewMoved = !0, ae.backgroundDirty = !0, ue({ localOnly: !0, reason: Nt.VIEW });
  }
  function Hr() {
    var i;
    return ((i = jr()) == null ? void 0 : i.radius) || Or;
  }
  function Yv() {
    var w;
    const i = Ar().space, s = $t.sceneState, l = h.worldSelectedId || h.selectedId, f = s.stickers.findIndex((x) => x.id === l), p = f < 0 ? null : {
      sticker: s.stickers[f],
      value: Ic(s, h.frame).stickers[f],
      plane: i.stickers.find((x) => x.id === l) ?? null,
      item: ((w = i.sticker) == null ? void 0 : w.id) === l && i.sticker.url ? { kind: i.sticker.kind, box: $e.sceneBox(i.sticker.url) } : null
    }, m = mr() ? Th() : y2(jr(), p);
    if (!m) return;
    const y = wn();
    h.viewDistance = y.distance, h.viewMoved = !0, eo(o0(y, m, I.width, I.height));
  }
  function Sh(i) {
    return $e.pickSurface(Xo(), i.x, i.y, I.width, I.height);
  }
  function xh(i, s) {
    var l;
    return Ff(i, s, h.viewMoved ? null : (l = jr()) == null ? void 0 : l.center, Hr());
  }
  function kh() {
    return JSON.stringify([h.viewPosition, h.viewYaw, h.viewPitch]);
  }
  function Xv(i, s) {
    const l = performance.now(), f = { x: i.x, y: i.y, time: l, key: $e.contentRevision(), view: kh() };
    if (!t0(Vr, f)) {
      const m = Sh(i);
      Vr = { ...f, cost: performance.now() - l, hit: m };
    }
    const p = wn();
    wh(i0(p, xh(p, Vr.hit), s, Hr())), Vr.view = kh(), Vr.wheelTime = l;
  }
  function Mh(i, s, l) {
    const f = wn();
    h.interaction = i === "orbit" ? { kind: "space_orbit", last: s, pivot: xh(f, Sh(s)) } : { kind: "space_pan", last: s, depth: e0(f, Hr()) }, bt(s), I.setPointerCapture(l);
  }
  function Eu() {
    const i = [h.viewYaw, h.viewPitch, h.viewFov, I.width, I.height];
    return i.some((s, l) => s !== Rt.key[l]) && (Rt = { key: i, projection: e1(vh(), I.width, I.height) }), Rt.projection;
  }
  function Wa(i) {
    const s = Eu().project(i);
    return s.z > 1e-4 ? s : null;
  }
  function Ou(i, s) {
    return Eu().ray(i, s);
  }
  function Di() {
    const i = I.width, s = I.height, l = 2;
    if (i / Math.max(s, 1) >= l) {
      const w = s, x = w * l;
      return { x: (i - x) * 0.5, y: 0, w: x, h: w };
    }
    const p = i, m = p / l;
    return { x: 0, y: (s - m) * 0.5, w: p, h: m };
  }
  function Fu(i) {
    var y;
    if (i && typeof i == "object" && (Xt(i) || i.external === !0))
      return Nu(() => {
        Si(e, "image-loaded");
      });
    const s = k ? Ba(i) : String(i && typeof i == "object" ? i.asset_id || i.assetId || "" : i || "");
    if (!s) return null;
    const l = nn.get(s);
    if (l) return l;
    const f = k ? Gb(i.source) : (y = _.assets) == null ? void 0 : y[s], p = EF(f);
    if (!p) return null;
    const m = new Image();
    return ov(m, p), m.onload = () => {
      av(m, p), ue();
    }, m.onerror = () => {
      sv(m, p), ue();
    }, m.src = p, nn.set(s, m), m;
  }
  function Ba(i) {
    const { source: s } = i;
    return s.filename ? `file:${s.storage}:${s.subfolder}:${s.filename}` : `sticker:${i.id}`;
  }
  function Nh(i, s = null) {
    const l = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!l) return null;
    const f = Fa.get(l);
    if (f)
      return f.complete || f.width || f.naturalWidth, f;
    const p = new Image();
    return p.onload = () => {
      typeof s == "function" && s();
    }, p.src = l, Fa.set(l, p), p;
  }
  function qv(i) {
    const s = String((i == null ? void 0 : i.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Do.get(s);
    if (l) return l.ready ? l : null;
    const f = Nh(i, () => {
      const N = Do.get(s);
      N && (N.ready = !1), ue({ localOnly: !0 });
    });
    if (!f || !(f.complete || f.width || f.naturalWidth)) return null;
    const p = Number(f.naturalWidth || f.width || 0), m = Number(f.naturalHeight || f.height || 0);
    if (p < 1 || m < 1) return null;
    const y = In({ label: "editor.image-pixels" });
    y.width = p, y.height = m;
    const w = y.getContext("2d", { willReadFrequently: !0 });
    if (!w) return null;
    w.clearRect(0, 0, p, m), w.drawImage(f, 0, 0, p, m);
    const x = w.getImageData(0, 0, p, m).data, E = { canvas: y, width: p, height: m, alpha: x, ready: !0 };
    return Do.set(s, E), E;
  }
  function Jv(i, s, l = 1, f = 0) {
    if (!i || typeof i != "object") return i;
    const p = Number((s == null ? void 0 : s.u) || 0), m = Number((s == null ? void 0 : s.v) || 0), y = pr(Number(i.u || 0), p), w = Number(i.v || 0) - m, x = Math.max(0.02, Number(l || 1)), E = Number(f || 0) * Ur, N = Math.cos(E), C = Math.sin(E), L = y / x, U = w / x, K = L * N + U * C, Q = -L * C + U * N;
    return {
      ...i,
      u: ((p + K) % 1 + 1) % 1,
      v: m + Q
    };
  }
  function Zv(i, s) {
    if (!i || !s) return null;
    const l = (i == null ? void 0 : i.bbox) || null;
    if (!l) return null;
    const f = (i == null ? void 0 : i.transform) || {}, p = {
      u: (Number(l.u0 || 0) + Number(l.u1 || 0)) * 0.5,
      v: (Number(l.v0 || 0) + Number(l.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(s.u || 0) - Number(f.du || 0)) % 1 + 1) % 1,
      v: Number(s.v || 0) - Number(f.dv || 0)
    }, y = Jv(
      m,
      p,
      Number(f.scale || 1),
      Number(f.rot_deg || 0)
    ), w = Number(l.u1 || 0) - Number(l.u0 || 0), x = Number(l.v1 || 0) - Number(l.v0 || 0);
    if (!(w > 1e-6) || !(x > 1e-6)) return null;
    const E = pr(Number(y.u || 0), Number(l.u0 || 0)) / w, N = (Number(y.v || 0) - Number(l.v0 || 0)) / x;
    if (E < 0 || E > 1 || N < 0 || N > 1) return 0;
    const C = qv(i);
    if (!C) return null;
    const L = te(Math.floor(E * C.width), 0, C.width - 1), U = te(Math.floor(N * C.height), 0, C.height - 1);
    return Number(C.alpha[(U * C.width + L) * 4 + 3] || 0);
  }
  function Ph(i, s, l, f = null) {
    if (!(s != null && s.visible) || !ji(l, s.corners)) return !1;
    const p = f || Ir(l, performance.now()), m = Zv(i, p);
    return m === null ? !0 : m > 8;
  }
  function Qv() {
    var f, p, m, y, w, x, E, N;
    const i = ((p = (f = h.paintEngine) == null ? void 0 : f.getErpTarget) == null ? void 0 : p.call(f, mu(!1))) || null, s = Math.max(1, Number(((m = i == null ? void 0 : i.descriptor) == null ? void 0 : m.width) || ((w = (y = i == null ? void 0 : i.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : w.width) || 2048)), l = Math.max(1, Number(((x = i == null ? void 0 : i.descriptor) == null ? void 0 : x.height) || ((N = (E = i == null ? void 0 : i.displayPaint) == null ? void 0 : E.canvas) == null ? void 0 : N.height) || 1024));
    return { width: s, height: l };
  }
  function e_() {
    var U, K, Q;
    const i = h.interaction;
    if ((i == null ? void 0 : i.kind) !== "paint_stroke") return null;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || String((s == null ? void 0 : s.layerKind) || "") !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return null;
    const l = ir(), f = `${yu()}:${l.width}:${l.height}`;
    if (((U = h._activePaintEraserPreviewInfo) == null ? void 0 : U.cacheKey) === f)
      return h._activePaintEraserPreviewInfo.value || null;
    const p = An(s), m = (p == null ? void 0 : p.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const ee = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = Gu(ee, p.targetSpace, !0);
    }
    const y = Ua(l.width, l.height, { readback: !0 });
    if (!Wh(y, p, { w: l.width, h: l.height })) return null;
    const w = ((Q = (K = y.ctx) == null ? void 0 : K.getImageData(0, 0, l.width, l.height)) == null ? void 0 : Q.data) || null;
    if (!w) return null;
    let x = l.width, E = l.height, N = -1, C = -1;
    for (let ee = 0; ee < l.height; ee += 1)
      for (let se = 0; se < l.width; se += 1)
        w[(ee * l.width + se) * 4 + 3] <= 8 || (se < x && (x = se), ee < E && (E = ee), se > N && (N = se), ee > C && (C = ee));
    if (N < x || C < E)
      return h._activePaintEraserPreviewInfo = { cacheKey: f, value: null }, null;
    const L = {
      surface: y,
      bounds: { minX: x, minY: E, maxX: N, maxY: C },
      key: `${f}:${x}:${E}:${N}:${C}`
    };
    return h._activePaintEraserPreviewInfo = { cacheKey: f, value: L }, h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), L;
  }
  function Ho() {
    h._activePaintEraserPreviewInfo = null, h._liveEraserPreviewCanvasCache = null;
  }
  function t_(i, s, l) {
    var f, p;
    if (!i) return null;
    if (i.type === "rasterObject" && ((f = i.item) != null && f.bbox)) {
      const m = i.item.bbox, y = ((p = i.item) == null ? void 0 : p.transform) || {}, w = Number(m.u0 || 0) + Number(y.du || 0), x = Number(m.u1 || 0) + Number(y.du || 0), E = Number(m.v0 || 0) + Number(y.dv || 0), N = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((x % 1 + 1) % 1 * s),
        minY: Math.floor(te(E, 0, 1) * l),
        maxY: Math.ceil(te(N, 0, 1) * l),
        wraps: x - w >= 1 || w < 0 || x > 1
      };
    }
    if (i.type === "strokeGroup") {
      const m = Pr(i.actionGroupId, "paint"), y = Ci(i.actionGroupId, "paint", m);
      if (!y) return null;
      const w = y.centerUv.u - y.halfW, x = y.centerUv.u + y.halfW, E = y.centerUv.v - y.halfH, N = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((w % 1 + 1) % 1 * s),
        maxX: Math.ceil((x % 1 + 1) % 1 * s),
        minY: Math.floor(te(E, 0, 1) * l),
        maxY: Math.ceil(te(N, 0, 1) * l),
        wraps: x - w >= 1 || w < 0 || x > 1
      };
    }
    return null;
  }
  function n_(i, s, l) {
    if (!i || !s) return !1;
    const f = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: l - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], p = f(i), m = f(s);
    return p.some((y) => m.some((w) => !(y.maxX < w.minX || w.maxX < y.minX || y.maxY < w.minY || w.maxY < y.minY)));
  }
  function r_(i, s, l) {
    var _e, Ue, Ze, lt, xe, de, Se;
    if (!i || !s || !((_e = l == null ? void 0 : l.surface) != null && _e.canvas) || s.type !== "rasterObject") return i;
    const f = Number(i.width || l.surface.canvas.width || 0), p = Number(i.height || l.surface.canvas.height || 0);
    if (f < 1 || p < 1) return i;
    const m = t_(s, f, p);
    if (m && !n_(m, l.bounds, f)) return i;
    const y = String(((Ue = s.item) == null ? void 0 : Ue.id) || s.id || ""), w = ((Ze = s.item) == null ? void 0 : Ze.transform) || {}, x = `${l.key}:${y}:${f}:${p}:${Number(w.du || 0).toFixed(6)}:${Number(w.dv || 0).toFixed(6)}:${Number(w.rot_deg || 0).toFixed(3)}:${Number(w.scale || 1).toFixed(4)}`, E = h._liveEraserPreviewCanvasCache instanceof Map ? h._liveEraserPreviewCanvasCache : h._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (E.has(x)) return E.get(x);
    const N = te(Math.floor(Number(((lt = l.bounds) == null ? void 0 : lt.minX) || 0)), 0, Math.max(0, f - 1)), C = te(Math.floor(Number(((xe = l.bounds) == null ? void 0 : xe.minY) || 0)), 0, Math.max(0, p - 1)), L = te(Math.ceil(Number(((de = l.bounds) == null ? void 0 : de.maxX) || 0)), N, Math.max(0, f - 1)), U = te(Math.ceil(Number(((Se = l.bounds) == null ? void 0 : Se.maxY) || 0)), C, Math.max(0, p - 1)), K = Math.max(1, L - N + 1), Q = Math.max(1, U - C + 1), ee = Ua(f, p, { readback: !0 });
    ee.ctx.clearRect(0, 0, f, p), ee.ctx.drawImage(i, 0, 0);
    const se = ee.ctx.getImageData(N, C, K, Q);
    ee.ctx.save(), ee.ctx.globalCompositeOperation = "destination-out", ee.ctx.drawImage(l.surface.canvas, 0, 0), ee.ctx.restore();
    const he = ee.ctx.getImageData(N, C, K, Q);
    let ie = !1;
    for (let ze = 0; ze < K * Q; ze += 1) {
      const Ge = se.data[ze * 4 + 3], it = he.data[ze * 4 + 3];
      if (Ge > it) {
        ie = !0;
        break;
      }
    }
    return ie ? (E.size > 64 && E.clear(), E.set(x, ee.canvas), ee.canvas) : (E.set(x, i), i);
  }
  function Ah(i, s = null) {
    const l = yn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), f = (i == null ? void 0 : i.bbox) || null;
    if (!l || !f) return null;
    const p = Nh(i, s);
    if (!p || !(p.complete || p.width || p.naturalWidth)) return null;
    const { width: m, height: y } = Qv(), w = (i == null ? void 0 : i.transform) || {}, x = [
      l,
      m,
      y,
      f.u0,
      f.v0,
      f.u1,
      f.v1,
      w.du,
      w.dv,
      w.rot_deg,
      w.scale,
      Ya()
    ].join(":"), E = Ji.get(x);
    if (E) return E;
    Ji.size > 64 && Ji.clear();
    const N = In({ label: "editor.raster-erp" });
    N.width = m, N.height = y;
    const C = N.getContext("2d");
    if (!C) return null;
    const L = Number(f.u0 || 0) * m, U = Number(f.v0 || 0) * y, K = Math.max(1, (Number(f.u1 || 0) - Number(f.u0 || 0)) * m), Q = Math.max(1, (Number(f.v1 || 0) - Number(f.v0 || 0)) * y), ee = L + K * 0.5 + Number(w.du || 0) * m, se = U + Q * 0.5 + Number(w.dv || 0) * y, he = Number(w.rot_deg || 0) * Ur, ie = Math.max(0.01, Number(w.scale || 1));
    for (const _e of [-m, 0, m])
      C.save(), C.translate(ee + _e, se), C.rotate(he), C.scale(ie, ie), C.drawImage(p, -K * 0.5, -Q * 0.5, K, Q), C.restore();
    return Ji.set(x, N), N;
  }
  async function Tu(i, s) {
    const l = await new Promise((w) => i.toBlob(w, "image/png")), f = new FormData();
    f.append("image", l, s), f.append("type", "input"), f.append("subfolder", "panorama_stickers"), f.append("overwrite", "1");
    const p = await Qt.fetchApi("/upload/image", { method: "POST", body: f });
    if (!p || p.status !== 200) throw new Error(`upload failed (${p == null ? void 0 : p.status})`);
    const m = await p.json(), y = String((m == null ? void 0 : m.name) || "").trim();
    if (!y) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: y,
      subfolder: String((m == null ? void 0 : m.subfolder) || "panorama_stickers"),
      storage: String((m == null ? void 0 : m.type) || "input")
    };
  }
  let fl = null, dl = !1;
  function i_() {
    if (A) return !1;
    const i = Q0(_.painting), { width: s, height: l } = Ja();
    return VN(_.painting_layer, { paintCount: i.totalPaintCount, maskCount: i.totalMaskCount, width: s, height: l, nodeId: String(e.id ?? "0") });
  }
  function Ch() {
    const i = String(e.id ?? "0"), s = Hl.get(i);
    if (dl && s) return s;
    const l = (async () => {
      var m, y, w, x, E, N, C, L, U, K, Q, ee;
      const f = Xa(), p = Q0(_.painting);
      if (p.totalPaintCount <= 0 && p.totalMaskCount <= 0) {
        _.painting_layer !== null && (_.painting_layer = null, fl = f, Vn());
        return;
      }
      if (fl !== f && !dl) {
        dl = !0;
        try {
          qa();
          const se = mu(!1), he = ((y = (m = h.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, se)) || null, ie = ((w = he == null ? void 0 : he.displayPaint) == null ? void 0 : w.canvas) || null, _e = ((x = he == null ? void 0 : he.committedMask) == null ? void 0 : x.canvas) || null, Ue = Math.max(1, Number(((E = he == null ? void 0 : he.descriptor) == null ? void 0 : E.width) || (ie == null ? void 0 : ie.width) || (_e == null ? void 0 : _e.width) || 2048)), Ze = Math.max(1, Number(((N = he == null ? void 0 : he.descriptor) == null ? void 0 : N.height) || (ie == null ? void 0 : ie.height) || (_e == null ? void 0 : _e.height) || 1024));
          (!ie && p.totalPaintCount > 0 || !_e && p.totalMaskCount > 0) && ((!h._paintLayerSyncBlankSurface || Number(((C = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : C.width) || 0) !== Ue || Number(((L = h._paintLayerSyncBlankSurface.canvas) == null ? void 0 : L.height) || 0) !== Ze) && (h._paintLayerSyncBlankSurface = Ua(Ue, Ze)), h._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ue, Ze));
          const lt = ie || p.totalPaintCount > 0 && ((U = h._paintLayerSyncBlankSurface) == null ? void 0 : U.canvas) || null, xe = _e || p.totalMaskCount > 0 && ((K = h._paintLayerSyncBlankSurface) == null ? void 0 : K.canvas) || null;
          if (!lt && !xe) return;
          let de = null, Se = null;
          const ze = [];
          if (p.totalPaintCount > 0) {
            de = await Tu(lt, `pano_paint_${i}.png`);
            for (const Ge of se) {
              const it = String(Ge || "").trim();
              if (!it) continue;
              const ct = ((ee = (Q = h.paintEngine) == null ? void 0 : Q.getGroupDisplayCanvas) == null ? void 0 : ee.call(Q, it)) || null;
              if (!ct) continue;
              const Tt = it.replace(/[^a-zA-Z0-9_-]+/g, "_"), ut = await Tu(ct, `pano_group_${i}_${Tt}.png`);
              ut && ze.push({
                id: it,
                actionGroupId: it,
                image: ut
              });
            }
          }
          p.totalMaskCount > 0 && (Se = await Tu(xe, `pano_mask_${i}.png`)), f === Xa() && (_.painting_layer = {
            paint: de,
            mask: Se,
            groups: ze,
            revision: f
          }, fl = f, Vn());
        } catch (se) {
          throw se;
        } finally {
          dl = !1;
        }
      }
    })();
    return Hl.set(i, l), l.finally(() => {
      Hl.get(i) === l && Hl.delete(i);
    }), l;
  }
  function Du() {
    if (t === "cutout" && !A) {
      const p = dh();
      if (p) return p;
      const m = Yf(
        e,
        ["erp_image", "bg_erp"],
        () => ue(),
        "background:cutout:erp_image|bg_erp"
      );
      return m && !Bd(m) ? m : Uf(e, "pano_input_images", nn, () => ue()) || m || null;
    }
    const i = dh();
    if (i) return i;
    const s = xn(e, "background") ? Uf(e, "pano_input_images", nn, () => ue()) : null;
    if (s && !Bd(s)) return s;
    if (Ie instanceof HTMLVideoElement && Ie.dataset.panoSrc) return Ie;
    const l = Ih();
    return Yf(e, l, () => ue(), `background:${l.join("|")}`) || s || null;
  }
  function o_() {
    var s;
    const i = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((l) => (l == null ? void 0 : l.name) === "source");
    return i >= 0 && e.graph ? String(((s = e.getInputLink(i)) == null ? void 0 : s.type) || "") : "";
  }
  function Ih() {
    if (t === "cutout") return A ? o_() === "PANO_SCENE" ? [] : ["source"] : ["erp_image", "bg_erp"];
    const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((f) => String((f == null ? void 0 : f.name) || "")) : [], s = i.includes("erp_image"), l = i.includes("bg_erp");
    return r && (s || l) ? s ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function Lu(i) {
    return i ? i instanceof HTMLImageElement ? !!i.complete && Number(i.naturalWidth || i.width || 0) > 0 && Number(i.naturalHeight || i.height || 0) > 0 : i instanceof HTMLVideoElement ? Number(i.videoWidth || 0) > 0 && Number(i.videoHeight || 0) > 0 && Number(i.readyState || 0) >= 2 : Number(i.width || i.naturalWidth || 0) > 0 && Number(i.height || i.naturalHeight || 0) > 0 : !1;
  }
  function a_() {
    if ($e.failed) return { status: vr, detail: "renderer" };
    if (!$e.ready) return { status: Fr, detail: "boot" };
    const i = Du(), s = Vt.videoFailed ? vr : Wd(i, Lu), l = [];
    for (const f of La()) {
      if ((f == null ? void 0 : f.visible) === !1) continue;
      const p = Fu(f);
      l.push(Wd(p, Lu));
    }
    return fF({
      presented: ae.hasPresentedFrame,
      background: s,
      stickers: l
    });
  }
  function Go() {
    const i = new Set(
      (_.stickers || []).map((s) => String((s == null ? void 0 : s.asset_id) || "")).filter((s) => !!s)
    );
    Object.keys(_.assets || {}).forEach((s) => {
      i.has(s) || (delete _.assets[s], nn.delete(s));
    });
  }
  function Ru(i) {
    return {
      lon: Math.atan2(i.x, i.z),
      lat: Math.asin(te(i.y, -1, 1))
    };
  }
  function Vu(i, s = null) {
    const { lon: l, lat: f } = Ru(i), p = Di();
    let m = p.x + (l / (2 * Math.PI) + 0.5) * p.w;
    const y = p.y + (0.5 - f / Math.PI) * p.h;
    if (s !== null) {
      for (; m - s > p.w / 2; ) m -= p.w;
      for (; m - s < -p.w / 2; ) m += p.w;
    }
    return { x: m, y, z: 1 };
  }
  function pl(i) {
    const s = cn(i), l = Ca(
      Number(s.yaw_deg || 0),
      Number(s.pitch_deg || 0),
      Number(s.rot_deg || s.roll_deg || 0)
    ), f = Math.tan(te(Number(s.hFOV_deg || 20), 0.1, 179) * 0.5 * Ur), p = Math.tan(te(Number(s.vFOV_deg || 20), 0.1, 179) * 0.5 * Ur);
    return {
      centerDir: l.fwd,
      right: l.right,
      up: l.up,
      tanX: f,
      tanY: p
    };
  }
  function Li(i, s, l) {
    return VF(J0(J0(i.centerDir, Z0(i.right, s)), Z0(i.up, l)));
  }
  function Eh(i) {
    const s = pl(i);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: f, v: p }) => Li(s, f * s.tanX, p * s.tanY));
  }
  function Oh(i, s, l) {
    const f = pl(i), p = (s * 2 - 1) * f.tanX, m = (1 - l * 2) * f.tanY;
    return Li(f, p, m);
  }
  function Fh(i) {
    const s = (i == null ? void 0 : i.bbox) || null, l = (i == null ? void 0 : i.transform) || {};
    return s ? {
      u: (((Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5 + Number(l.du || 0)) % 1 + 1) % 1,
      v: te((Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5 + Number(l.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function s_(i) {
    var x, E, N, C;
    const s = (i == null ? void 0 : i.bbox) || null;
    if (!s) return [];
    const l = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, f = Math.max(0.01, Number(((x = i == null ? void 0 : i.transform) == null ? void 0 : x.scale) || 1)), p = Number(((E = i == null ? void 0 : i.transform) == null ? void 0 : E.rot_deg) || 0), m = Number(((N = i == null ? void 0 : i.transform) == null ? void 0 : N.du) || 0), y = Number(((C = i == null ? void 0 : i.transform) == null ? void 0 : C.dv) || 0);
    return [
      { u: Number(s.u0 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v0 || 0) },
      { u: Number(s.u1 || 0), v: Number(s.v1 || 0) },
      { u: Number(s.u0 || 0), v: Number(s.v1 || 0) }
    ].map((L) => il(ol(L, l, f, p), m, y));
  }
  function l_(i) {
    const s = yn((i == null ? void 0 : i.rasterObjectId) || (i == null ? void 0 : i.id) || ""), l = (i == null ? void 0 : i.transform) || {}, f = (i == null ? void 0 : i.bbox) || {}, p = `${s}:${h.mode}:${Ya()}:${f.u0}:${f.v0}:${f.u1}:${f.v1}:${l.du}:${l.dv}:${l.rot_deg}:${l.scale}`;
    if (h.mode === "frame") {
      const m = He(), y = m ? mn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function c_(i) {
    const s = String((i == null ? void 0 : i.id) || ""), l = un(i) ? "frame" : At(i) ? "sticker" : "item", f = cn(i), p = [
      l,
      s,
      h.mode,
      Number((f == null ? void 0 : f.yaw_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.pitch_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.hFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.vFOV_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.rot_deg) || 0).toFixed(4),
      Number((f == null ? void 0 : f.roll_deg) || 0).toFixed(4),
      yi(f),
      Gn(i) && ul(i)
    ].join(":");
    if (h.mode === "frame") {
      const m = He(), y = m ? mn(m) : null;
      return `${p}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${p}:view:${Math.round(Number(h.viewYaw || 0) * 100)}:${Math.round(Number(h.viewPitch || 0) * 100)}:${Math.round(Number(h.viewFov || 0) * 100)}:${Math.round(Number((I == null ? void 0 : I.width) || 0))}:${Math.round(Number((I == null ? void 0 : I.height) || 0))}`;
  }
  function u_(i) {
    var y;
    const s = ((y = h.paintEngine) == null ? void 0 : y.getMaskDisplayCanvas()) || null;
    if (!s) return i;
    const l = `mask_display:${h.paintEngine.getMaskDisplayRevision()}`, f = i.reduce((w, x) => Math.max(w, Number((x == null ? void 0 : x.zIndex) || 0)), -1), p = (Array.isArray(_.stickers) ? _.stickers : []).reduce((w, x) => Math.max(w, Number((x == null ? void 0 : x.z_index) || 0)), -1), m = Math.max(f, p);
    return i.push({
      id: "mask_display",
      source: s,
      revision: l,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), i;
  }
  function f_() {
    var f, p;
    const i = gu(!0), s = e_(), l = [];
    for (const m of i) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const w = ((p = (f = h.paintEngine) == null ? void 0 : f.getGroupDisplayCanvas) == null ? void 0 : p.call(f, y)) || null;
        if (!w) continue;
        l.push({
          id: `paint_group:${y}`,
          source: w,
          revision: `${G_()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, w = yn((y == null ? void 0 : y.id) || m.id || "");
        if (!w) continue;
        const x = Ah(y, () => ue());
        if (!x) continue;
        const E = r_(x, m, s), N = (y == null ? void 0 : y.transform) || {};
        l.push({
          id: `raster:${w}`,
          source: E,
          revision: [
            Xa(),
            (s == null ? void 0 : s.key) || "",
            w,
            Number(N.du || 0).toFixed(6),
            Number(N.dv || 0).toFixed(6),
            Number(N.rot_deg || 0).toFixed(3),
            Number(N.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return u_(l);
  }
  function d_() {
    return cl() ? f_().filter((i) => i.visible !== !1).map((i) => ({ id: i.id, media: i.source, revision: i.revision, opacity: i.opacity, zIndex: i.zIndex })) : [];
  }
  function Ar() {
    return nr || (nr = p_()), nr;
  }
  function p_() {
    const i = Du(), s = d_(), l = { ..._.assets };
    for (const K of k ? [] : _.stickers) {
      const Q = String((K == null ? void 0 : K.asset_id) || "");
      Q && !l[Q] && nn.has(Q) && (l[Q] = { type: "comfy_image", filename: Q });
    }
    const f = k ? _.stickers.map((K) => pu(K) ? { ...K, source: { kind: "file", filename: Ba(K) } } : K) : _.stickers;
    $t.revision !== ae.stateRevision && ($t = { revision: ae.stateRevision, sceneState: ni({ ..._, stickers: f, assets: l, painting: null }) }), k && h_($t.sceneState);
    const p = Ic($t.sceneState, h.frame), m = Lo ? Rv() : null, y = (K) => {
      if (k && !K.visible) return null;
      if (Lo && Xt(K)) return m;
      const Q = Fu(K);
      return Q ? { media: Q, revision: xu(Q) } : null;
    }, w = t1($t.sceneState, h.frame, _.stickers, { media: y, paintLayers: s, evaluated: p }), x = i && (i === Ie || i === z) ? Ie.dataset.panoSrc : i, E = Lu(i) ? { media: i, revision: xu(i), coverage: Jn(_.coverage), source: x } : null, N = Ga(), C = s2(Iu(), N, jo());
    C.mode !== h.spaceMode && Da(), Ka(C);
    const L = N ? m_($t.sceneState, p, y) : null, U = io() ? { ...L, ...g_(L) } : null;
    return { background: E, layers: w, space: U, content: L };
  }
  function h_(i) {
    const s = new Map(_.stickers.map((l) => [l.id, l.clip]));
    i.scene.clip = { ..._.scene.clip };
    for (const l of i.stickers) {
      const f = s.get(l.id);
      f && (l.clip = { ...f });
    }
  }
  function m_(i, s, l) {
    const f = _h(), p = qb(f, s.scene), m = p != null && p.url ? $e.sceneBox(p.url) : null, y = m && Nd(p.kind, m), w = Bv(), x = d2(w, i, s), E = x != null && x.url ? $e.sceneBox(x.url) : null, N = E ? [{ box: Nd(x.kind, E), value: x.value }] : [], C = T2(i, h.frame, _.stickers, { media: l, evaluated: s }), L = Ad(m2(s, y, C, N));
    return {
      evaluated: s,
      sceneUrls: f ? f.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: p2(w, i),
      sticker: x,
      stickers: C,
      sphere: L
    };
  }
  function g_(i) {
    var l;
    const s = ((l = i.sphere) == null ? void 0 : l.radius) || Or;
    return {
      gizmo: mr() ? __() : y_(i.evaluated),
      grid: h.showGrid && !h.fullscreen ? A2(s) : null,
      lines: zr() ? v_(s) : []
    };
  }
  function y_(i) {
    const s = to(), l = i.stickers.find((f) => f.id === (s == null ? void 0 : s.id));
    return !ll(s) || !(l != null && l.active) ? null : { mode: h.gizmoMode, transform: kd(l) };
  }
  function $u(i) {
    return i * 0.2;
  }
  function Th() {
    return { center: oo().position, radius: $u(Hr()) };
  }
  function b_(i, s) {
    const { yaw_deg: l, pitch_deg: f } = Jb(i.position, s);
    return { ...i, yaw_deg: l, pitch_deg: f };
  }
  function mr() {
    return zr() && h.selectedId === tc;
  }
  let hl = { revision: -1, span: -1, segments: [] };
  function v_(i) {
    const s = vl();
    (hl.revision !== ae.stateRevision || hl.span !== s) && (hl = { revision: ae.stateRevision, span: s, segments: I2(E2(_, s)) });
    const { segments: l } = hl, f = l.length ? [{ segments: l, color: wF }] : [];
    if (!hr()) return f;
    const p = mr() ? U0 : _F;
    return [...f, { segments: c0(oo(), $u(i)), color: p }];
  }
  function __() {
    return !hr() || !mr() || r ? null : { mode: h.gizmoMode === "rotate" ? "rotate" : "translate", transform: kd({ ...oo(), scale: 1 }) };
  }
  function w_(i, s) {
    var p;
    const l = (p = Ar().space) == null ? void 0 : p.gizmo;
    if (mr() && l && so("hover", s) !== null && so("down", s))
      return h.interaction = { kind: "world_gizmo", camera: !0, mode: l.mode, start: l.transform, base: oo(), changed: !1 }, I.setPointerCapture(i.pointerId), bt(s), !0;
    const f = c0(oo(), $u(Hr()));
    return C2(Xo(), f, s, I.width, I.height) ? (mr() || (Rn(He()), je(), Ke(), ue()), h.interaction = { kind: "world_select" }, I.setPointerCapture(i.pointerId), !0) : !1;
  }
  function zu(i) {
    const s = Z.width / Math.max(1, I.width), l = Z.height / Math.max(1, I.height);
    return { x: i.x * s, y: i.y * l, w: i.w * s, h: i.h * l };
  }
  function S_() {
    const { background: i, layers: s, space: l } = Ar(), f = I.width, p = I.height, m = zu({ x: 0, y: 0, w: f, h: p });
    let y = !1;
    return !i && !s.length && !l ? ($e.clear(460551), y = $e.ready) : ($e.clear(), y = !!$e.render({
      rect: m,
      camera: l ? Tf(wn(), f, p, l.sphere) : vh(),
      background: i,
      layers: s,
      space: l
    })), $r(), (h.worldSelectedId || mr() || Oe) && Ke(), y;
  }
  function Dh(i) {
    const { content: s } = Ar();
    return !s || !i.position ? Fs(i) : Yb(Fs(i), i.position, gm(), s.sphere);
  }
  function Lh(i, s, l) {
    const { background: f, layers: p, content: m } = Ar();
    if (!f && !p.length && !m) return null;
    const y = m && s.position ? m : null;
    return $e.render({ rect: i, camera: Dh(s), background: f, layers: p, space: y, owner: l });
  }
  function x_(i) {
    return $e.clear(460551), !!$e.renderUnwrap({ rect: zu(i), ...Ar() });
  }
  function k_(i) {
    const s = I.width, l = I.height, f = Di();
    if ($.globalAlpha = 1, $.lineWidth = 1, $.clearRect(0, 0, s, l), qa(), i && (ae.backgroundDirty = !x_(f)), h.showGrid && !h.fullscreen) {
      $.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = f.x + f.w * m / 16;
        $.beginPath(), $.moveTo(y, f.y), $.lineTo(y, f.y + f.h), $.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = f.y + f.h * m / 8;
        $.beginPath(), $.moveTo(f.x, y), $.lineTo(f.x + f.w, y), $.stroke();
      }
      $.strokeStyle = "rgba(250, 250, 250, 0.86)", $.lineWidth = 1.2, $.beginPath(), $.moveTo(f.x, f.y + f.h / 2), $.lineTo(f.x + f.w, f.y + f.h / 2), $.stroke(), $.fillStyle = "rgba(250, 250, 250, 0.42)", $.font = "500 11px Geist, sans-serif", $.textAlign = "center";
      const p = f.y + f.h * 0.57;
      $.fillText("Left", f.x + f.w * 0.25, p), $.fillText("Front", f.x + f.w * 0.5, p), $.fillText("Right", f.x + f.w * 0.75, p), $.fillText("Back", f.x + 38, p), $.fillText("Back", f.x + f.w - 38, p);
    }
  }
  function Rh(i, s, l = 1) {
    let f = !1;
    $.strokeStyle = s, $.lineWidth = l, $.beginPath();
    for (const p of i) {
      const m = Wa(p);
      if (!m) {
        f = !1;
        continue;
      }
      f ? $.lineTo(m.x, m.y) : ($.moveTo(m.x, m.y), f = !0);
    }
    $.stroke();
  }
  function M_(i) {
    const s = I.width, l = I.height;
    if ($.clearRect(0, 0, s, l), qa(), i && (ae.backgroundDirty = !S_()), h.showGrid && !h.fullscreen && Ar().space)
      N_();
    else if (h.showGrid && !h.fullscreen) {
      for (let p = -180; p <= 180; p += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push(Zn(p, y));
        Rh(m, "#3f3f46", p % 90 === 0 ? 1.3 : 1);
      }
      for (let p = -75; p <= 75; p += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push(Zn(y, p));
        Rh(m, p === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", p === 0 ? 1.5 : 1);
      }
      const f = [
        { name: "Left", dir: Zn(-90, 0) },
        { name: "Front", dir: Zn(0, 0) },
        { name: "Right", dir: Zn(90, 0) },
        { name: "Back", dir: Zn(180, 0) }
      ];
      $.fillStyle = "rgba(250, 250, 250, 0.42)", $.font = "500 11px Geist, sans-serif", $.textAlign = "center", f.forEach((p) => {
        const m = Wa(p.dir);
        m && $.fillText(p.name, m.x, m.y + 24);
      });
    }
  }
  function N_() {
    const i = Tf(wn(), I.width, I.height, jr()), s = Us(i, [0, 0, 0], I.width, I.height);
    s && ($.fillStyle = "rgba(255, 221, 87, 0.9)", $.font = "500 11px Geist, sans-serif", $.textAlign = "center", $.fillText("ERP origin", s.x, s.y - 12));
  }
  function P_(i, s = null, l = null, f = null) {
    if (h.mode === "frame") {
      const p = s || He();
      if (!p) return [];
      const m = l || mn(p);
      return aw(i, p, m);
    }
    return Bh(i, f);
  }
  function ml(i, s = null, l = null, f = null, p = null) {
    if (!i) return null;
    if (h.mode === "unwrap") {
      const y = Bh([i], p);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = Ko(i);
    return m ? fi(m, s, l, f) : null;
  }
  function A_(i, s) {
    const l = String(i.actionGroupId || i.id || "").trim(), f = Pr(l, i.layerKind), p = Ci(l, i.layerKind, f), m = (p == null ? void 0 : p.centerUv) || vu(l, i.layerKind, f), y = h.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, w = [], x = h.mode === "frame" ? He() : null, E = x ? mn(x) : null;
    for (const ie of f) {
      const _e = (ie == null ? void 0 : ie.geometry) || null, Ue = (_e == null ? void 0 : _e.geometryKind) === "lasso_fill" ? _e == null ? void 0 : _e.points : (_e == null ? void 0 : _e.processedPoints) || (_e == null ? void 0 : _e.rawPoints) || (_e == null ? void 0 : _e.points) || [], Ze = P_(Ue, x, E, y).filter((de) => Number.isFinite(de == null ? void 0 : de.x) && Number.isFinite(de == null ? void 0 : de.y));
      if (!Ze.length) continue;
      const lt = $i(String((ie == null ? void 0 : ie.toolKind) || "pen")), xe = Un[lt] || Un[hi];
      w.push({
        points: Ze,
        closed: String((_e == null ? void 0 : _e.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ie == null ? void 0 : ie.size) || 10) * Math.max(0.1, Number((xe == null ? void 0 : xe.sizeScale) ?? 1)) + 10),
        layerKind: String((ie == null ? void 0 : ie.layerKind) || i.layerKind || "paint")
      });
    }
    const N = ml(m, null, x, E, y);
    if (!N) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ie), ie;
    }
    const L = gv(p).map((ie) => ml(ie, N.x, x, E, y)).filter((ie) => Number.isFinite(ie == null ? void 0 : ie.x) && Number.isFinite(ie == null ? void 0 : ie.y)).map((ie) => ({ x: Number(ie.x || 0), y: Number(ie.y || 0) }));
    if (L.length < 4) {
      const ie = { visible: !1, kind: "strokeGroup" };
      return h._strokeGeomCache.set(s, ie), ie;
    }
    const U = (ie, _e) => ({
      x: (Number((ie == null ? void 0 : ie.x) || 0) + Number((_e == null ? void 0 : _e.x) || 0)) * 0.5,
      y: (Number((ie == null ? void 0 : ie.y) || 0) + Number((_e == null ? void 0 : _e.y) || 0)) * 0.5,
      a: ie,
      b: _e
    }), K = U(L[0], L[1]), Q = U(L[1], L[2]), ee = U(L[2], L[3]), se = U(L[3], L[0]), he = {
      kind: "strokeGroup",
      center: { x: Number(N.x || 0), y: Number(N.y || 0) },
      corners: L,
      edgeMidpoints: [
        { edge: "top", ...K },
        { edge: "right", ...Q },
        { edge: "bottom", ...ee },
        { edge: "left", ...se }
      ],
      rotateStemBase: { x: K.x, y: K.y },
      rotateHandle: { x: K.x, y: K.y - 30 },
      strokePaths: w,
      visible: !0
    };
    return h._strokeGeomCache.set(s, he), he;
  }
  function C_(i, s) {
    const l = h.mode === "frame" ? He() : null, f = l ? mn(l) : null, p = Fh(i), m = h.mode === "unwrap" ? Number((p == null ? void 0 : p.u) || 0) : null, y = ml(p, null, l, f, m), x = s_(i).map((L) => ml(L, (y == null ? void 0 : y.x) ?? null, l, f, m)).filter((L) => Number.isFinite(L == null ? void 0 : L.x) && Number.isFinite(L == null ? void 0 : L.y));
    if (!Array.isArray(x) || x.length < 4) {
      const L = { visible: !1, kind: "rasterObject" };
      return h._strokeGeomCache.set(s, L), L;
    }
    const E = x.slice(0, 4).map((L) => ({ x: Number((L == null ? void 0 : L.x) || 0), y: Number((L == null ? void 0 : L.y) || 0) })), C = {
      kind: "rasterObject",
      center: {
        x: E.reduce((L, U) => L + Number(U.x || 0), 0) / E.length,
        y: E.reduce((L, U) => L + Number(U.y || 0), 0) / E.length
      },
      corners: E,
      visible: !0
    };
    return h._strokeGeomCache.set(s, C), C;
  }
  function fi(i, s = null, l = null, f = null, p = {}) {
    if (h.mode === "frame") {
      const N = l || He(), C = f || mn(N);
      if (!N || !C) return null;
      const L = N ? Za(N, i) : null;
      return L ? {
        x: Number(C.x || 0) + Number(L.x || 0) * Number(C.w || 0),
        y: Number(C.y || 0) + Number(L.y || 0) * Number(C.h || 0),
        z: 1
      } : null;
    }
    if (h.mode === "unwrap") return Vu(i, s);
    const m = 1e-4, y = Eu().project(i, m);
    if (!Number.isFinite(y.z) || y.z <= m && !(p != null && p.clipBehind)) return null;
    const w = I.width, x = I.height, E = Math.max(w, x) * 2;
    return {
      x: te(y.x, -E, w + E),
      y: te(y.y, -E, x + E),
      z: Math.max(y.z, m),
      rawZ: y.z,
      clipped: y.z <= m
    };
  }
  function I_(i, s = []) {
    if (h.mode !== "pano" || At(i)) return 1;
    const l = s.map((f) => Number((f == null ? void 0 : f.rawZ) ?? (f == null ? void 0 : f.z))).filter((f) => Number.isFinite(f));
    return l.length ? TF(0.035, 0.2, Math.min(...l)) : 1;
  }
  function E_(i) {
    if (Gn(i) && !ul(i)) return { visible: !1 };
    const s = cn(i), l = Zn(Number(s.yaw_deg || 0), Number(s.pitch_deg || 0)), f = h.mode === "frame" ? He() : null, p = f ? mn(f) : null, m = h.mode === "pano" && (At(i) || un(i)), y = m ? { clipBehind: !0 } : null, w = fi(l, null, f, p, y);
    if (!w) return { visible: !1 };
    const x = pl(i), N = Eh(i).map((Se) => fi(Se, w.x, f, p, y)).filter((Se) => Number.isFinite(Se == null ? void 0 : Se.x) && Number.isFinite(Se == null ? void 0 : Se.y));
    if (N.length < 4) return { visible: !1 };
    const C = Li(x, 0, x.tanY), L = Li(x, 0, x.tanY + Math.max(x.tanY * 0.43, 0.053)), U = fi(C, w.x, f, p, y);
    if (!U) return { visible: !1 };
    const K = fi(L, (U == null ? void 0 : U.x) ?? w.x, f, p, y), Q = ((K == null ? void 0 : K.x) ?? U.x) - U.x, ee = ((K == null ? void 0 : K.y) ?? U.y) - U.y, se = Math.hypot(Q, ee) || 1, he = {
      x: U.x + Q / se * 30,
      y: U.y + ee / se * 30
    }, ie = fi(Li(x, 0, x.tanY), w.x, f, p, y), _e = fi(Li(x, x.tanX, 0), w.x, f, p, y), Ue = fi(Li(x, 0, -x.tanY), w.x, f, p, y), Ze = fi(Li(x, -x.tanX, 0), w.x, f, p, y);
    if (!ie || !_e || !Ue || !Ze) return { visible: !1 };
    const lt = [
      w,
      ...N,
      U,
      K,
      ie,
      _e,
      Ue,
      Ze
    ];
    if (m && !lt.some((Se) => Number((Se == null ? void 0 : Se.rawZ) ?? (Se == null ? void 0 : Se.z)) > 1e-4)) return { visible: !1 };
    const xe = I_(i, lt), de = [
      {
        edge: "top",
        x: ie.x,
        y: ie.y,
        a: { x: N[0].x, y: N[0].y },
        b: { x: N[1].x, y: N[1].y }
      },
      {
        edge: "right",
        x: _e.x,
        y: _e.y,
        a: { x: N[1].x, y: N[1].y },
        b: { x: N[2].x, y: N[2].y }
      },
      {
        edge: "bottom",
        x: Ue.x,
        y: Ue.y,
        a: { x: N[2].x, y: N[2].y },
        b: { x: N[3].x, y: N[3].y }
      },
      {
        edge: "left",
        x: Ze.x,
        y: Ze.y,
        a: { x: N[3].x, y: N[3].y },
        b: { x: N[0].x, y: N[0].y }
      }
    ];
    return {
      center: { x: w.x, y: w.y },
      corners: N.map((Se) => ({ x: Se.x, y: Se.y })),
      edgeMidpoints: de,
      rotateStemBase: { x: U.x, y: U.y },
      rotateHandle: he,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: xe,
      visible: !0
    };
  }
  function on(i) {
    if (G && un(i) && hr()) return { visible: !1 };
    if (!cl() && (fn(i) || vn(i))) return { visible: !1 };
    if (fn(i)) {
      const p = String(i.actionGroupId || i.id || "").trim(), m = Sv(p, i.layerKind), y = h._strokeGeomCache.get(m);
      return y || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), A_(i, m));
    }
    if (vn(i)) {
      const p = l_(i), m = h._strokeGeomCache.get(p);
      return m || (h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear(), C_(i, p));
    }
    const s = c_(i), l = h._strokeGeomCache.get(s);
    if (l) return l;
    h._strokeGeomCache.size > 256 && h._strokeGeomCache.clear();
    const f = E_(i);
    return h._strokeGeomCache.set(s, f), f;
  }
  function gl(i, s, l, f = null) {
    const p = [];
    for (let m = 0; m <= l; m += 1) {
      const y = m / l;
      let w = 0, x = 0;
      s === 0 ? (w = y, x = 0) : s === 1 ? (w = 1, x = y) : s === 2 ? (w = 1 - y, x = 1) : (w = 0, x = 1 - y);
      const E = Oh(i, w, x), N = h.mode === "unwrap" ? Vu(E, f) : Wa(E);
      N && p.push(N);
    }
    return p;
  }
  function O_(i, s) {
    const l = cn(i), f = Zn(Number(l.yaw_deg || 0), Number(l.pitch_deg || 0)), p = h.mode === "unwrap" ? Vu(f) : null, m = p ? p.x : null, y = h.mode === "pano" ? 28 : 20, w = [
      gl(i, 0, y, m),
      gl(i, 1, y, m),
      gl(i, 2, y, m),
      gl(i, 3, y, m)
    ];
    Gp($, w, { selected: s });
  }
  function F_() {
    const i = [...Array.isArray(_.shots) ? _.shots : []], s = [...rl()].sort((l, f) => Number(l.z_index || 0) - Number(f.z_index || 0));
    return [...i, ...s];
  }
  function ju() {
    const i = [...Array.isArray(_.shots) ? _.shots : []];
    return [...[...rl()].sort((l, f) => Number(f.z_index || 0) - Number(l.z_index || 0)), ...i];
  }
  function yl(i, s = []) {
    if (!(!i || !Array.isArray(s) || s.length < 4)) {
      i.beginPath(), i.moveTo(s[0].x, s[0].y);
      for (let l = 1; l < 4; l += 1) i.lineTo(s[l].x, s[l].y);
      i.closePath();
    }
  }
  function Vh(i, s, l) {
    const f = Array.isArray(i == null ? void 0 : i.corners) ? i.corners : [];
    if (f.length < 4) return;
    const p = te(Number((i == null ? void 0 : i.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    const m = $.globalAlpha;
    $.globalAlpha = m * p;
    const y = l ? "rgba(255, 116, 116, 0.96)" : s ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", w = l ? "rgba(255, 89, 89, 0.08)" : s ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", x = s ? 3.2 : 2.6;
    yl($, f), $.fillStyle = w, $.fill(), $.strokeStyle = y, $.lineWidth = x, $.stroke(), $.save(), $.strokeStyle = y, $.lineWidth = s ? 3.2 : 2.6, $.lineCap = "round";
    const E = Array.isArray(i == null ? void 0 : i.edgeMidpoints) && i.edgeMidpoints.length >= 4 ? i.edgeMidpoints : [
      { edge: "top", x: (f[0].x + f[1].x) * 0.5, y: (f[0].y + f[1].y) * 0.5 },
      { edge: "right", x: (f[1].x + f[2].x) * 0.5, y: (f[1].y + f[2].y) * 0.5 },
      { edge: "bottom", x: (f[2].x + f[3].x) * 0.5, y: (f[2].y + f[3].y) * 0.5 },
      { edge: "left", x: (f[3].x + f[0].x) * 0.5, y: (f[3].y + f[0].y) * 0.5 }
    ], N = { top: "bottom", right: "left", bottom: "top", left: "right" }, C = s ? 12 : 9;
    E.forEach((L) => {
      const K = E.find((he) => (he == null ? void 0 : he.edge) === N[L == null ? void 0 : L.edge]) || {
        x: (f[0].x + f[1].x + f[2].x + f[3].x) * 0.25,
        y: (f[0].y + f[1].y + f[2].y + f[3].y) * 0.25
      }, Q = K.x - L.x, ee = K.y - L.y, se = Math.hypot(Q, ee) || 1;
      $.beginPath(), $.moveTo(L.x, L.y), $.lineTo(L.x + Q / se * C, L.y + ee / se * C), $.stroke();
    }), $.restore(), $.globalAlpha = m;
  }
  function T_(i, s, l, f) {
    const p = te(Number((s == null ? void 0 : s.visibilityAlpha) ?? 1), 0, 1);
    if (p <= 0.01) return;
    if (un(i)) {
      Vh(s, l, f);
      return;
    }
    if (At(i)) {
      const y = $.globalAlpha;
      $.globalAlpha = y * Pv(i) * p, h.mode === "frame" ? ($.strokeStyle = l ? "rgba(250, 250, 250, 0.9)" : f ? "rgba(255, 89, 89, 0.72)" : "#71717a", $.lineWidth = l ? 2 : 1, yl($, s.corners), $.stroke()) : O_(i, l), $.globalAlpha = y;
      return;
    }
    const m = $.globalAlpha;
    $.globalAlpha = m * p, $.fillStyle = l ? "rgba(0, 112, 243, 0.24)" : f ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", yl($, s.corners), $.fill(), $.strokeStyle = l ? "rgba(255, 255, 255, 1)" : f ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", $.lineWidth = l ? 2.8 : 1.9, yl($, s.corners), $.stroke(), $.globalAlpha = m;
  }
  function $h(i, s, l) {
    if (At(i)) {
      z1($, s, { accent: l });
      return;
    }
    const f = !(un(i) && ro());
    $.fillStyle = l, f && s.corners.forEach((p) => {
      $.beginPath(), $.arc(p.x, p.y, 6.5, 0, Math.PI * 2), $.fill();
    }), f && un(i) && ($.strokeStyle = l, $.lineCap = "round", $.lineWidth = 4, s.edgeMidpoints.forEach((p) => {
      var C, L, U, K;
      const m = (((C = p.b) == null ? void 0 : C.x) ?? p.x) - (((L = p.a) == null ? void 0 : L.x) ?? p.x), y = (((U = p.b) == null ? void 0 : U.y) ?? p.y) - (((K = p.a) == null ? void 0 : K.y) ?? p.y), w = Math.hypot(m, y) || 1, x = m / w, E = y / w, N = 10;
      $.beginPath(), $.moveTo(p.x - x * N, p.y - E * N), $.lineTo(p.x + x * N, p.y + E * N), $.stroke();
    }), $.lineCap = "butt"), fn(i) || ($.strokeStyle = "rgba(250, 250, 250, 0.9)", $.lineWidth = 1.8, $.beginPath(), $.moveTo(s.rotateStemBase.x, s.rotateStemBase.y), $.lineTo(s.rotateHandle.x, s.rotateHandle.y), $.stroke(), $.fillStyle = l, $.beginPath(), $.arc(s.rotateHandle.x, s.rotateHandle.y, 10, 0, Math.PI * 2), $.fill());
  }
  function D_() {
    var m;
    const i = h.mode === "frame" ? [] : rr(), s = i.length > 1, l = R ? F_() : ci(), f = l.map((y) => `${String((y == null ? void 0 : y.id) || "")}:${un(y) ? "frame" : Number((y == null ? void 0 : y.z_index) || 0)}`).join("|");
    (!h._sortedItemsCache || h._sortedItemsCache.src !== l || h._sortedItemsCache.orderKey !== f) && (h._sortedItemsCache = {
      src: l,
      orderKey: f,
      sorted: [...l]
    });
    const p = h._sortedItemsCache.sorted;
    for (const y of p) {
      const w = h.mode !== "frame" && !s && ah(y);
      if (h.mode === "frame" && !w) continue;
      const x = At(y), E = un(y), N = _n(y);
      if (!x && !E || Gn(y) && !ul(y)) continue;
      const C = on(y);
      if (t !== "stickers" && !C.visible)
        continue;
      const L = te(Number((C == null ? void 0 : C.visibilityAlpha) ?? 1), 0, 1);
      if (L <= 0.01) continue;
      const U = E && R && h.mode === "pano" ? te(Number(h.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if ($.save(), $.globalAlpha *= U, T_(y, C, w, N), w && C.visible) {
        const K = N ? "#ff4d4f" : x && Xt(y) ? "#f59e0b" : "#0070f3", Q = $.globalAlpha;
        $.globalAlpha = Q * L, $h(y, C, K), $.globalAlpha = Q;
      }
      $.restore();
    }
    if (R && h.mode === "pano" && !He() && h.cutoutPanoFrameVisual && h.cutoutPanoFrameAlpha > 1e-4) {
      const y = h.cutoutPanoFrameVisual, w = te(Number(h.cutoutPanoFrameAlpha || 0), 0, 1);
      $.save(), $.globalAlpha *= w, Vh(y.geom, y.selected, y.locked), y.selected && $h(
        y.item,
        y.geom,
        y.locked ? "#ff4d4f" : "#0070f3"
      ), $.restore();
    }
    if (s) {
      const y = za(i);
      if (y != null && y.visible) {
        const w = _u(i) ? "#ff4d4f" : "#0070f3";
        $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.95)", $.lineWidth = 2, $.setLineDash([6, 4]), $.beginPath(), $.moveTo(y.corners[0].x, y.corners[0].y);
        for (let x = 1; x < y.corners.length; x += 1) $.lineTo(y.corners[x].x, y.corners[x].y);
        $.closePath(), $.stroke(), $.setLineDash([]), $.fillStyle = w, y.corners.forEach((x) => {
          $.beginPath(), $.arc(x.x, x.y, 6.5, 0, Math.PI * 2), $.fill();
        }), $.restore();
      }
    } else
      i.forEach((y) => {
        if (!fn(y) && !vn(y)) return;
        const w = on(y);
        if (!(w != null && w.visible)) return;
        const x = _n(y) ? "#ff4d4f" : "#0070f3";
        $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.95)", $.lineWidth = 2, $.setLineDash([6, 4]), $.beginPath(), $.moveTo(w.corners[0].x, w.corners[0].y);
        for (let E = 1; E < w.corners.length; E += 1) $.lineTo(w.corners[E].x, w.corners[E].y);
        $.closePath(), $.stroke(), $.setLineDash([]), $.fillStyle = x, w.corners.forEach((E) => {
          $.beginPath(), $.arc(E.x, E.y, 6.5, 0, Math.PI * 2), $.fill();
        }), $.restore();
      });
    if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const y = Pm(h.interaction.start, h.interaction.current);
      $.save(), $.strokeStyle = "rgba(255, 255, 255, 0.9)", $.fillStyle = "rgba(255, 255, 255, 0.08)", $.lineWidth = 1, $.setLineDash([5, 4]), $.beginPath(), $.rect(y.x0, y.y0, y.x1 - y.x0, y.y1 - y.y0), $.fill(), $.stroke(), $.restore();
    }
  }
  function zh(i, s = !1) {
    const l = te(Ao(i), 0.05, 20), f = s ? 320 : 220;
    return l >= 1 ? { width: f, height: Math.max(1, Math.round(f / l)) } : { width: Math.max(1, Math.round(f * l)), height: f };
  }
  function L_(i) {
    if (!Ce || !i) return !1;
    const s = Ce.closest(".pano-camera-preview");
    if (!s) return !1;
    const l = Math.round(Number(s.clientWidth || Ce.clientWidth || 0)), f = Math.round(Number(s.clientHeight || Ce.clientHeight || 0));
    return Math.abs(l - Number(i.width || 0)) <= 1 && Math.abs(f - Number(i.height || 0)) <= 1;
  }
  function R_(i, s) {
    if (h.outputPreviewRect = null, F.outputPreviewToggle.visible = h.mode !== "frame" && !!He(), O && (F.outputPreviewToggle.visible = !1), !R || !F.cameraPreview) return;
    if (h.mode === "frame" || !bh()) {
      F.cameraPreview.visible = !1, F.cameraPreview.settled = !1;
      return;
    }
    const l = He();
    if (F.cameraPreview.visible = !0, F.cameraPreview.expanded = !!h.outputPreviewExpanded, !l || !ve) {
      F.cameraPreview.ready = !1, F.cameraPreview.settled = !1, F.cameraPreview.width = 220, F.cameraPreview.height = 132, F.cameraPreview.label = l ? "Preview unavailable" : "Add Frame to preview", zt = null;
      return;
    }
    const f = zh(l, !!h.outputPreviewExpanded);
    F.cameraPreview.width = f.width, F.cameraPreview.height = f.height;
    const p = window.devicePixelRatio || 1, m = Math.max(1, f.width * p), y = Math.max(1, f.height * p), w = Math.min(1, Z.width / m, Z.height / y), x = { width: Math.max(1, Math.floor(m * w)), height: Math.max(1, Math.floor(y * w)) }, E = [...s].some((L) => L !== Nt.VIEW && L !== Nt.OVERLAY), N = !zt || zt.width !== x.width || zt.height !== x.height || E;
    if (i && N) {
      const L = Lh({ x: 0, y: Z.height - x.height, w: x.width, h: x.height }, l, "camera_preview");
      zt = L ? x : null, L && V_(L);
    }
    if (!zt) {
      F.cameraPreview.ready = !1, F.cameraPreview.label = Du() ? "Loading preview" : "Connect ERP image", F.cameraPreview.settled = !1;
      return;
    }
    const C = L_(f);
    F.cameraPreview.ready = !0, F.cameraPreview.label = C ? "" : "Loading preview", F.cameraPreview.settled = C && ae.pendingStableLayoutFrames <= 0 && ae.hasPresentedFrame;
  }
  let jh = 0;
  function V_(i) {
    const s = ++jh;
    createImageBitmap(i.canvas, i.x, i.y, i.width, i.height).then((l) => {
      var f;
      if (s !== jh || !ae.running) {
        l.close();
        return;
      }
      (f = ve.getContext("bitmaprenderer")) == null || f.transferFromImageBitmap(l);
    }).catch((l) => console.error("[PanoramaStickers] camera preview frame failed", l));
  }
  function Hu(i, s) {
    if (!i || !s) return null;
    const l = Number(s.x || 0), f = Number(s.y || 0);
    return Oh(i, l, f);
  }
  function Ko(i) {
    if (!i) return null;
    const s = (Number(i.u || 0) - 0.5) * (2 * Math.PI), l = (0.5 - Number(i.v || 0)) * Math.PI, f = Math.cos(l);
    return fu(f * Math.sin(s), Math.sin(l), f * Math.cos(s));
  }
  function $_(i) {
    return !i || typeof i != "object" ? { x: 0, y: 0 } : { x: Number((i == null ? void 0 : i.u) || 0), y: Number((i == null ? void 0 : i.v) || 0) };
  }
  function z_(i, s, l, f = {}) {
    return { ...{
      ...i,
      t: Number((i == null ? void 0 : i.t) || 0),
      widthScale: Pn(i, "widthScale", 1),
      pressureLike: Pn(i, "pressureLike", 1)
    }, ...f, u: s, v: l };
  }
  function j_(i, s = !1) {
    return s ? 12e-4 : 18e-4;
  }
  function Gu(i, s, l = !1) {
    if (!Array.isArray(i) || !i.length) return [];
    const f = String((s == null ? void 0 : s.kind) || "") === "ERP_GLOBAL", p = /* @__PURE__ */ new WeakMap();
    if (f) {
      let Q = null;
      i.forEach((ee) => {
        const se = Number((ee == null ? void 0 : ee.u) || 0), he = Number((ee == null ? void 0 : ee.v) || 0), ie = (se % 1 + 1) % 1, _e = Q == null ? ie : Q + pr(ie, (Q % 1 + 1) % 1);
        p.set(ee, { x: _e, y: he }), Q = _e;
      });
    }
    const m = (Q) => !Q || typeof Q != "object" ? { x: 0, y: 0 } : p.get(Q) || $_(Q), y = (Q, ee, se, he = {}) => {
      const ie = f ? (Number(ee) % 1 + 1) % 1 : Number(ee), _e = z_(Q, ie, se, he);
      return p.set(_e, { x: Number(ee), y: Number(se) }), _e;
    }, w = (Q, ee, se) => {
      const he = m(Q), ie = m(ee);
      return y(Q, yr(he.x, ie.x, se), yr(he.y, ie.y, se), {
        t: yr(Number((Q == null ? void 0 : Q.t) || 0), Number((ee == null ? void 0 : ee.t) || 0), se),
        widthScale: yr(Pn(Q, "widthScale", 1), Pn(ee, "widthScale", 1), se),
        pressureLike: yr(Pn(Q, "pressureLike", 1), Pn(ee, "pressureLike", 1), se)
      });
    };
    if (i.length === 1) {
      const Q = m(i[0]);
      return [y(i[0], Q.x, Q.y)];
    }
    const x = j_(s, l), E = (Q, ee) => {
      const se = [0];
      for (let de = 1; de < Q.length; de += 1) {
        const Se = m(Q[de - 1]), ze = m(Q[de]);
        se.push(se[de - 1] + Math.hypot(ze.x - Se.x, ze.y - Se.y));
      }
      const he = se[se.length - 1] || 0;
      if (he <= 1e-8) {
        const de = Q[0], Se = m(de);
        return [y(de, Se.x, Se.y)];
      }
      const ie = [];
      let _e = 0;
      for (let de = 0; de <= he + 1e-9; de += ee) {
        for (; _e < se.length - 2 && se[_e + 1] < de; ) _e += 1;
        const Se = se[_e], ze = se[_e + 1], Ge = Math.max(1e-8, ze - Se);
        ie.push(w(Q[_e], Q[_e + 1], te((de - Se) / Ge, 0, 1)));
      }
      const Ue = Q[Q.length - 1], Ze = m(Ue), lt = ie[ie.length - 1], xe = lt ? m(lt) : null;
      return (!xe || Math.hypot(xe.x - Ze.x, xe.y - Ze.y) > ee * 0.35) && ie.push(y(Ue, Ze.x, Ze.y)), ie;
    }, N = (Q) => {
      if (!Array.isArray(Q) || Q.length < 3) return Q ? Q.slice() : [];
      const ee = m(Q[0]), se = [y(Q[0], ee.x, ee.y)];
      for (let _e = 0; _e < Q.length - 1; _e += 1) {
        const Ue = Q[_e], Ze = Q[_e + 1], lt = m(Ue), xe = m(Ze), de = y(
          Ue,
          lt.x * 0.75 + xe.x * 0.25,
          lt.y * 0.75 + xe.y * 0.25,
          {
            t: Number(Ue.t || 0) * 0.75 + Number(Ze.t || 0) * 0.25,
            widthScale: Pn(Ue, "widthScale", 1) * 0.75 + Pn(Ze, "widthScale", 1) * 0.25,
            pressureLike: Pn(Ue, "pressureLike", 1) * 0.75 + Pn(Ze, "pressureLike", 1) * 0.25
          }
        ), Se = y(
          Ue,
          lt.x * 0.25 + xe.x * 0.75,
          lt.y * 0.25 + xe.y * 0.75,
          {
            t: Number(Ue.t || 0) * 0.25 + Number(Ze.t || 0) * 0.75,
            widthScale: Pn(Ue, "widthScale", 1) * 0.25 + Pn(Ze, "widthScale", 1) * 0.75,
            pressureLike: Pn(Ue, "pressureLike", 1) * 0.25 + Pn(Ze, "pressureLike", 1) * 0.75
          }
        );
        se.push(de, Se);
      }
      const he = Q[Q.length - 1], ie = m(he);
      return se.push(y(he, ie.x, ie.y)), se;
    }, C = E(i, x);
    if (C.length < 3) return C;
    const L = l ? 2 : 1;
    let U = C.slice();
    for (let Q = 0; Q < L; Q += 1) U = N(U);
    return E(U, Math.max(x * 0.75, 55e-5));
  }
  function Pn(i, s, l = 1) {
    const f = Number(i == null ? void 0 : i[s]);
    return Number.isFinite(f) ? Math.max(0, f) : l;
  }
  function H_(i) {
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
  function Ua(i, s, l = {}) {
    const f = In({ label: "editor.raster-surface" });
    f.width = Math.max(1, Math.round(i)), f.height = Math.max(1, Math.round(s));
    const p = f.getContext("2d", l.readback ? { willReadFrequently: !0 } : void 0);
    return p && (p.clearRect(0, 0, f.width, f.height), p.imageSmoothingEnabled = !0), { canvas: f, ctx: p };
  }
  function Ya() {
    const i = Ja();
    return `${String(h.paintStrokeRevision)}:${i.width}x${i.height}`;
  }
  function Xa() {
    const i = Ja();
    return `${String(h.paintStrokeRevision)}:${String(h.paintCompositeRevision)}:${i.width}x${i.height}`;
  }
  function G_() {
    const i = yu(), s = Xa();
    return i ? `${s}:${i}` : s;
  }
  function K_() {
    h.paintStrokeRevision += 1, h.paintCompositeRevision += 1;
  }
  function W_() {
    h.paintCompositeRevision += 1;
  }
  function B_() {
    h._sortedItemsCache = null, h._strokeGeomCache.clear();
  }
  function Hh() {
    var i, s;
    h.paintEngineRevisionKey = null, (s = (i = h.paintEngine) == null ? void 0 : i.rebuildCommitted) == null || s.call(i, _), h.paintEngineRevisionKey = Ya();
  }
  function Gh() {
    _.painting_layer !== null && (_.painting_layer = null), fl = "";
  }
  function jt() {
    B_(), ae.backgroundDirty = !0, ae.dirty = !0;
  }
  function Cr({ rebuildPaintEngine: i = !1 } = {}) {
    Gh(), K_(), jt(), i && Hh();
  }
  function Wo() {
    Gh(), W_(), jt();
  }
  function qa() {
    var f;
    const i = Ja(), s = `${i.width}x${i.height}`;
    h.paintEngineDescriptorKey !== s && (h.paintEngine = dd(i), h.paintEngineDescriptorKey = s, h.paintEngineRevisionKey = "");
    const l = Ya();
    h.paintEngineRevisionKey !== l && (h.paintEngineRevisionKey = l, (f = h.paintEngine) == null || f.rebuildCommitted(_));
  }
  function Ja() {
    const i = Math.max(1, M(Number((_ == null ? void 0 : _.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: i,
      height: Math.max(1, Math.round(i * 0.5))
    };
  }
  function ir() {
    return Ja();
  }
  function U_(i, s, l, f, p = null) {
    const m = H_(i), y = Pn(s, "widthScale", 1) * Pn(s, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * l * y) : m.model === "world_angle" ? p ? Math.max(0.5, m.value / Math.max(1e-6, Number(p.hFOV_deg || 90) * Ur) * l * y) : Math.max(0.5, m.value / (2 * Math.PI) * l * y) : Math.max(0.5, Number((i == null ? void 0 : i.size) || 10) * 0.5 * y);
  }
  function Y_(i, s, l = {}) {
    const f = String((s == null ? void 0 : s.layerKind) || "paint"), p = String((s == null ? void 0 : s.toolKind) || "pen"), m = l.preview === !0, y = m ? 0.78 : 1;
    if (i.globalAlpha = p === "marker" ? 0.7 * y : 1, f === "mask") {
      i.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (p === "eraser") {
      i.globalCompositeOperation = "destination-out", i.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const w = String((s == null ? void 0 : s.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, x = m ? Math.max(0.28, Number(w.a ?? 1) * 0.88) : Math.max(0.12, Number(w.a ?? 1));
    i.fillStyle = `rgba(${Math.round(Number(w.r || 0) * 255)}, ${Math.round(Number(w.g || 0) * 255)}, ${Math.round(Number(w.b || 0) * 255)}, ${x})`;
  }
  function X_(i, s, l) {
    const f = Math.max(0.5, Math.min(l, Number((s == null ? void 0 : s.radiusPx) || 0.5)));
    !Number.isFinite(s == null ? void 0 : s.x) || !Number.isFinite(s == null ? void 0 : s.y) || !Number.isFinite(f) || (i.beginPath(), i.arc(Number(s.x || 0), Number(s.y || 0), f, 0, Math.PI * 2), i.fill());
  }
  function q_(i, s, l, f, p = {}) {
    if (!i || !Array.isArray(s) || !s.length) return;
    const m = Math.max(f.w, f.h) * 0.25;
    i.save(), Y_(i, l, p);
    const y = (w) => X_(i, w, m);
    if (s.length === 1) {
      y(s[0]), i.restore();
      return;
    }
    for (let w = 0; w < s.length - 1; w += 1) {
      const x = s[w], E = s[w + 1];
      if (!x || !E) continue;
      const N = Number(x.x || 0), C = Number(x.y || 0), L = Number(E.x || 0), U = Number(E.y || 0), K = Math.max(0.5, Math.min(m, Number(x.radiusPx || 0.5))), Q = Math.max(0.5, Math.min(m, Number(E.radiusPx || 0.5)));
      if (!Number.isFinite(N) || !Number.isFinite(C) || !Number.isFinite(L) || !Number.isFinite(U) || !Number.isFinite(K) || !Number.isFinite(Q)) continue;
      const ee = L - N, se = U - C, he = Math.hypot(ee, se);
      if (!Number.isFinite(he) || he < 1e-6) {
        y(x);
        continue;
      }
      if (he > Math.max(f.w, f.h) * 0.5) continue;
      const ie = Math.max(0.5, Math.min(K, Q)), _e = Math.max(0.35, Math.min(ie * 0.4, 2.25)), Ue = Math.max(1, Math.ceil(he / _e));
      for (let Ze = 0; Ze <= Ue; Ze += 1) {
        const lt = Ze / Ue;
        y({
          x: yr(N, L, lt),
          y: yr(C, U, lt),
          radiusPx: yr(K, Q, lt)
        });
      }
    }
    y(s[s.length - 1]), i.restore();
  }
  function J_(i, s, l, f) {
    q_(i, s, l, f, { preview: !1 });
  }
  function Z_(i, s, l, f, p) {
    var w, x, E, N;
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
    i.beginPath(), i.moveTo(Number(((w = s[0]) == null ? void 0 : w[m]) || 0) * f.w, Number(((x = s[0]) == null ? void 0 : x[y]) || 0) * f.h);
    for (let C = 1; C < s.length; C += 1)
      i.lineTo(Number(((E = s[C]) == null ? void 0 : E[m]) || 0) * f.w, Number(((N = s[C]) == null ? void 0 : N[y]) || 0) * f.h);
    i.closePath(), i.fill(), i.restore();
  }
  function Kh(i) {
    const s = (i == null ? void 0 : i.geometry) || null;
    return s ? String(s.geometryKind || "") === "lasso_fill" ? Array.isArray(s.points) ? s.points : [] : Array.isArray(s.processedPoints) && s.processedPoints.length ? s.processedPoints : Array.isArray(s.rawPoints) && s.rawPoints.length ? s.rawPoints : Array.isArray(s.points) ? s.points : [] : [];
  }
  function Q_(i, s) {
    const l = Kh(i);
    return !Array.isArray(l) || !l.length ? [] : l.map((f) => ({
      x: Number((f == null ? void 0 : f.u) || 0) * Number((s == null ? void 0 : s.w) || 1),
      y: Number((f == null ? void 0 : f.v) || 0) * Number((s == null ? void 0 : s.h) || 1),
      radiusPx: U_(i, f, Number((s == null ? void 0 : s.w) || 1), Number((s == null ? void 0 : s.h) || 1))
    }));
  }
  function Wh(i, s, l = null) {
    var w, x, E, N;
    if (!(i != null && i.ctx) || !s) return !1;
    const f = l || { w: Number(((w = i.canvas) == null ? void 0 : w.width) || 0), h: Number(((x = i.canvas) == null ? void 0 : x.height) || 0) }, p = String((s == null ? void 0 : s.toolKind) || "") === "eraser" ? {
      ...s,
      layerKind: "mask",
      toolKind: String(((E = s == null ? void 0 : s.geometry) == null ? void 0 : E.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : s;
    if (String(((N = s == null ? void 0 : s.geometry) == null ? void 0 : N.geometryKind) || "") === "lasso_fill")
      return Z_(i.ctx, Kh(p), p, f), !0;
    const y = Q_(p, f);
    return y.length ? (J_(i.ctx, y, p, f), !0) : !1;
  }
  function ew(i, s, l, f = 8) {
    const p = new Uint8Array(s * l), m = [], y = new Int32Array(s * l), w = new Int32Array(s * l);
    for (let x = 0; x < l; x += 1)
      for (let E = 0; E < s; E += 1) {
        const N = x * s + E;
        if (p[N] || i[N] <= f) continue;
        let C = 0, L = 0;
        y[L] = E, w[L] = x, L += 1, p[N] = 1;
        const U = [];
        let K = E, Q = x, ee = E, se = x;
        for (; C < L; ) {
          const he = y[C], ie = w[C];
          C += 1, U.push({ x: he, y: ie }), he < K && (K = he), ie < Q && (Q = ie), he > ee && (ee = he), ie > se && (se = ie);
          const _e = [
            [(he - 1 + s) % s, ie],
            [(he + 1) % s, ie],
            [he, ie - 1],
            [he, ie + 1]
          ];
          for (const [Ue, Ze] of _e) {
            if (Ze < 0 || Ze >= l) continue;
            const lt = Ze * s + Ue;
            p[lt] || i[lt] <= f || (p[lt] = 1, y[L] = Ue, w[L] = Ze, L += 1);
          }
        }
        m.push({ pixels: U, minX: K, minY: Q, maxX: ee, maxY: se });
      }
    return m;
  }
  function tw(i, s) {
    const l = [...new Set((Array.isArray(i == null ? void 0 : i.pixels) ? i.pixels : []).map((x) => Number((x == null ? void 0 : x.x) || 0)).filter((x) => Number.isFinite(x)))].sort((x, E) => x - E);
    if (!l.length) return null;
    if (l.length === 1)
      return { startX: l[0], widthPx: 1 };
    let f = -1, p = 0;
    for (let x = 0; x < l.length; x += 1) {
      const E = l[x], C = (x === l.length - 1 ? l[0] + s : l[x + 1]) - E - 1;
      C > f && (f = C, p = x);
    }
    const m = (l[(p + 1) % l.length] + s) % s;
    let y = 1 / 0, w = -1 / 0;
    for (const x of l) {
      const E = (x - m + s) % s;
      y = Math.min(y, E), w = Math.max(w, E);
    }
    return {
      startX: m,
      widthPx: Math.max(1, w - y + 1)
    };
  }
  function nw(i, s, l = {}) {
    var E;
    const f = Number((i == null ? void 0 : i.width) || 0), p = Number((i == null ? void 0 : i.height) || 0), m = (E = i == null ? void 0 : i.getContext) == null ? void 0 : E.call(i, "2d");
    if (!m || f < 1 || p < 1) return [];
    const y = m.getImageData(0, 0, f, p), w = new Uint8Array(f * p);
    for (let N = 0; N < w.length; N += 1) w[N] = y.data[N * 4 + 3];
    return ew(w, f, p, 8).map((N, C) => {
      const L = tw(N, f);
      if (!L) return null;
      const U = Number(L.widthPx || 0), K = N.maxY - N.minY + 1, Q = Number(L.startX || 0), ee = In({ label: "editor.lasso-fill" });
      ee.width = U, ee.height = K;
      const se = ee.getContext("2d");
      if (!se) return null;
      const he = se.createImageData(U, K);
      return N.pixels.forEach(({ x: ie, y: _e }) => {
        const Ue = (_e * f + ie) * 4, Ze = (Number(ie || 0) - Q + f) % f, lt = ((_e - N.minY) * U + Ze) * 4;
        he.data[lt + 0] = y.data[Ue + 0], he.data[lt + 1] = y.data[Ue + 1], he.data[lt + 2] = y.data[Ue + 2], he.data[lt + 3] = y.data[Ue + 3];
      }), se.putImageData(he, 0, 0), {
        id: ra("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((l == null ? void 0 : l.z_index) || 0) + C * 1e-3,
        locked: (l == null ? void 0 : l.locked) === !0,
        bbox: {
          u0: 0,
          v0: N.minY / p,
          u1: U / f,
          v1: (N.maxY + 1) / p
        },
        rasterDataUrl: ee.toDataURL("image/png"),
        transform: {
          du: Q / f,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function Za(i, s) {
    if (!i || !s) return null;
    const l = pl(i), f = qf(s, l.centerDir);
    if (!Number.isFinite(f) || f <= 1e-6) return null;
    const p = qf(s, l.right) / f, m = qf(s, l.up) / f;
    return {
      x: (p / Math.max(1e-6, l.tanX) + 1) * 0.5,
      y: (1 - m / Math.max(1e-6, l.tanY)) * 0.5
    };
  }
  function rw(i) {
    if (!Array.isArray(i) || i.length < 3) return [];
    if (h.mode === "unwrap") {
      const l = Di();
      return i.map((f) => ({
        x: l.x + Number(f.u || 0) * l.w,
        y: l.y + Number(f.v || 0) * l.h
      }));
    }
    const s = i.map((l) => Wa(Ko(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function Bh(i, s = null) {
    if (!Array.isArray(i) || i.length < 1) return [];
    if (h.mode === "unwrap") {
      const f = Di();
      return i.map((p) => {
        const m = (Number(p.u || 0) % 1 + 1) % 1, y = s == null ? m : Number(s || 0) + pr(m, s);
        return {
          x: f.x + y * f.w,
          y: f.y + Number(p.v || 0) * f.h
        };
      });
    }
    const l = i.map((f) => Wa(Ko(f))).filter(Boolean);
    return l.every((f) => Number(f.z || 0) > 0) ? l.map((f) => ({ x: Number(f.x || 0), y: Number(f.y || 0) })) : [];
  }
  function iw(i, s = 160) {
    if (!Array.isArray(i) || i.length < 3) return !1;
    for (let l = 0; l < i.length; l += 1) {
      const f = i[l], p = i[(l + 1) % i.length];
      if (!f || !p || !Number.isFinite(f.x) || !Number.isFinite(f.y) || !Number.isFinite(p.x) || !Number.isFinite(p.y) || Math.hypot(Number(p.x) - Number(f.x), Number(p.y) - Number(f.y)) > s) return !1;
    }
    return !0;
  }
  function ow(i, s, l) {
    if (!Array.isArray(i) || i.length < 3 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ko(p), y = Za(s, m);
      if (!y) return [];
      f.push({
        x: Number(l.x || 0) + Number(y.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(y.y || 0) * Number(l.h || 0)
      });
    }
    return iw(f, Math.max(80, Math.max(l.w, l.h) * 0.75)) ? f : [];
  }
  function aw(i, s, l) {
    if (!Array.isArray(i) || i.length < 1 || !s || !l) return [];
    const f = [];
    for (const p of i) {
      const m = Ko(p), y = Za(s, m);
      y && f.push({
        x: Number(l.x || 0) + Number(y.x || 0) * Number(l.w || 0),
        y: Number(l.y || 0) + Number(y.y || 0) * Number(l.h || 0)
      });
    }
    return f;
  }
  function sw(i) {
    const s = He(), l = xl(s);
    if (!s || !l)
      return $.clearRect(0, 0, I.width, I.height), i && $e.clear(657930), !1;
    const f = { x: l.x, y: l.y, w: l.w, h: l.h }, { rect: p, shot: m } = u0(s, l, { width: I.width, height: I.height }), y = lw(f);
    if ($.clearRect(0, 0, I.width, I.height), i) {
      $e.clear(657930);
      const w = zu(p), x = !!Lh(w, m);
      x || $e.clear(1118481, w), ae.backgroundDirty = !x;
    }
    return $.save(), $.fillStyle = "rgba(0, 0, 0, 0.58)", $.beginPath(), $.rect(0, 0, I.width, I.height), $.roundRect(f.x, f.y, f.w, f.h, y), $.fill("evenodd"), $.restore(), $.save(), $.strokeStyle = U0, $.globalAlpha = 0.62, $.lineWidth = 2, $.beginPath(), $.roundRect(f.x + 1, f.y + 1, f.w - 2, f.h - 2, Math.max(0, y - 1)), $.stroke(), $.restore(), !0;
  }
  function lw(i) {
    const s = Math.max(1e-6, Number(ae.frameCanvasScale || 1));
    return Math.min(Zi * s, Number((i == null ? void 0 : i.w) || 0) * 0.5, Number((i == null ? void 0 : i.h) || 0) * 0.5);
  }
  function di() {
    var s;
    const i = h.mode === "frame" ? He() : null;
    F.frameRollKnob.visible = !!i && !r && i.locked !== !0, F.frameRollKnob.rollDeg = Number((i == null ? void 0 : i.roll_deg) ?? (i == null ? void 0 : i.rot_deg) ?? 0), F.frameRollKnob.displayValue = na(F.frameRollKnob.rollDeg), F.frameRollKnob.dragging = ((s = h.interaction) == null ? void 0 : s.kind) === "roll_frame", F.frameRollKnob.armed = !!i && h.altModifier === !0;
  }
  function cw() {
    var x, E;
    if (((x = h.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const i = h.interaction.stroke, s = (E = i == null ? void 0 : i.geometry) == null ? void 0 : E.points;
    let l;
    if (h.mode === "frame") {
      const N = He(), C = mn(N);
      l = ow(s, N, C);
    } else
      l = rw(s);
    if (!Array.isArray(l) || l.length < 3) return;
    const f = String((i == null ? void 0 : i.layerKind) || "") === "mask", p = (i == null ? void 0 : i.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(p.r || 0) * 255), y = Math.round(Number(p.g || 0) * 255), w = Math.round(Number(p.b || 0) * 255);
    $.save(), $.beginPath(), $.moveTo(Number(l[0].x || 0), Number(l[0].y || 0));
    for (let N = 1; N < l.length; N++) $.lineTo(Number(l[N].x || 0), Number(l[N].y || 0));
    $.closePath(), f ? ($.lineWidth = 2, $.setLineDash([6, 6]), $.lineDashOffset = 0, $.strokeStyle = "rgba(0,0,0,0.96)", $.stroke(), $.lineDashOffset = -6, $.strokeStyle = "rgba(255,255,255,0.96)", $.stroke(), $.setLineDash([]), $.lineDashOffset = 0) : ($.lineWidth = 1.5, $.setLineDash([6, 4]), $.strokeStyle = `rgba(${m},${y},${w},1)`, $.stroke(), $.setLineDash([])), $.restore();
  }
  function uw() {
    const i = h.frameRollOverlayVisual, s = te(Number(h.frameRollOverlayAlpha || 0), 0, 1);
    if (h.mode !== "frame" || !(i != null && i.shot) || s <= 1e-4) return;
    const l = mn(i.shot);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Number(i.shot.roll_deg ?? i.shot.rot_deg ?? 0) * Ur, m = Math.hypot(l.w, l.h) * 0.55, y = Math.cos(p) * m, w = Math.sin(p) * m;
    $.save(), $.globalAlpha *= s, $.beginPath(), $.rect(l.x, l.y, l.w, l.h), $.clip(), $.translate(f.x, f.y), $.rotate(p);
    const x = Math.max(12, Math.min(l.w, l.h) / 6);
    $.beginPath();
    for (let E = -m; E <= m; E += x)
      $.moveTo(E, -m), $.lineTo(E, m);
    for (let E = -m; E <= m; E += x)
      $.moveTo(-m, E), $.lineTo(m, E);
    $.lineWidth = 1, $.strokeStyle = "rgba(255, 255, 255, 0.22)", $.stroke(), $.setTransform(1, 0, 0, 1, 0, 0), $.beginPath(), $.moveTo(f.x - y, f.y - w), $.lineTo(f.x + y, f.y + w), $.lineWidth = 1.5, $.setLineDash([8, 6]), $.strokeStyle = "rgba(255, 255, 255, 0.92)", $.shadowColor = "rgba(0, 0, 0, 0.8)", $.shadowBlur = 3, $.stroke(), $.setLineDash([]), $.restore();
  }
  function fw() {
    return !R || !He() || G && hr() || O && !mr() ? 0 : kF;
  }
  function dw() {
    const i = te(Number(h.cutoutPanoDimAlpha || 0), 0, 1);
    if (i <= 1e-4 || !R || h.mode !== "pano") return;
    const s = He(), l = s ? on(s) : null, f = Array.isArray(l == null ? void 0 : l.corners) && l.corners.length >= 4 ? l.corners.map((y) => ({ x: Number(y.x || 0), y: Number(y.y || 0) })) : null;
    l != null && l.visible && f && (h.cutoutPanoDimCorners = f), s && (l != null && l.visible) && f && (h.cutoutPanoFrameVisual = {
      item: s,
      geom: l,
      selected: ah(s),
      locked: _n(s)
    });
    const p = Number(h.cutoutPanoDimTarget || 0) <= 1e-6, m = l != null && l.visible ? f : p ? h.cutoutPanoDimCorners || [] : [];
    if ($.save(), $.fillStyle = `rgba(0, 0, 0, ${i})`, $.beginPath(), $.rect(0, 0, I.width, I.height), m.length >= 4) {
      $.moveTo(m[0].x, m[0].y);
      for (let y = 1; y < 4; y += 1) $.lineTo(m[y].x, m[y].y);
      $.closePath();
    }
    $.fill("evenodd"), $.restore();
  }
  function Uh(i = /* @__PURE__ */ new Set()) {
    nr = null;
    const s = ae.backgroundDirty;
    R && (qa(), R_(s, i)), h.mode === "frame" ? (ae.frameSafeRect = qw(), sw(s)) : h.mode === "unwrap" ? k_(s) : M_(s), dw(), D_(), di(), cw(), uw(), F.fovValue = `${Math.round(h.viewFov)}°`, Math.abs(Number(h.outputPreviewAnim || 0) - Number(h.outputPreviewAnimTo || 0)) < 1e-6 && Ke(), ae.hasPresentedFrame || (ae.hasPresentedFrame = !0, Z.style.opacity = "1"), R && F.cameraPreview && (F.cameraPreview.settled = ae.pendingStableLayoutFrames <= 0 && ae.hasPresentedFrame && h.mode !== "frame");
    const l = a_();
    F.stageStatus = l.status, F.stageStatusDetail = l.detail, l.status === Fr ? (ce == null || ce.removeAttribute("data-stage-ready"), ce == null || ce.setAttribute("data-stage-loading-kind", l.detail)) : (ce == null || ce.setAttribute("data-stage-ready", ""), ce == null || ce.removeAttribute("data-stage-loading-kind"));
  }
  function pw(i = h.interaction) {
    if (t !== "stickers" || h.mode !== "pano") return !1;
    const s = String((i == null ? void 0 : i.kind) || "");
    return s === "move" || s === "scale" || s === "scale_x" || s === "scale_y" || s === "rotate" ? !0 : s === "move_multi" ? Array.isArray(i == null ? void 0 : i.stickerSnapshots) && i.stickerSnapshots.length > 0 : !1;
  }
  function Ku() {
    return !!h.interaction || !!Ye.drag;
  }
  function Yh() {
    ae.nodePreviewPending = !1, e.__panoLiveStateOverride = _, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = wv();
  }
  function ue(i = {}) {
    var x, E, N, C, L, U, K, Q, ee;
    const s = i.reason ?? Nt.STATE;
    s === Nt.STATE && (ae.stateRevision += 1);
    const l = !!i.localOnly, f = i.externalSync === !0, p = String(i.cause || ""), m = String(((x = h.interaction) == null ? void 0 : x.kind) || "");
    (!l || m === "view" || m === "pan_frame" || pw() || !!h.viewTransition || p === "mode" || p === "frame_view" || p === "cutout_frame") && (ae.backgroundDirty = !0), l && nh() && (h.livePaintInteractionRevision += 1, ae.backgroundDirty = !0), (!l || p === "selection" || p === "mode" || p === "cutout_frame") && (Au(), ui()), Ku() ? ae.nodePreviewPending = !0 : Yh(), f && ((N = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null || N.call(E), (C = e.setDirtyCanvas) == null || C.call(e, !0, !1)), f && !l && ((U = (L = e.graph) == null ? void 0 : L.setDirtyCanvas) == null || U.call(L, !0, !0), (ee = (Q = (K = lr) == null ? void 0 : K.canvas) == null ? void 0 : Q.setDirty) == null || ee.call(Q, !0, !0)), Be.requestDraw(s);
  }
  function bl() {
    const i = I.getBoundingClientRect(), s = Math.max(2, Math.round(i.width)), l = Math.max(2, Math.round(i.height)), f = window.devicePixelRatio || 1, p = [I.width, I.height, Z.width, Z.height].join("x");
    return (I.width !== s || I.height !== l) && (I.width = s, I.height = l), $e.resize(Math.round(i.width * f) || s, Math.round(i.height * f) || l), [I.width, I.height, Z.width, Z.height].join("x") === p ? !1 : (ae.backgroundDirty = !0, ae.dirty = !0, R && (ae.pendingStableLayoutFrames = Math.max(Number(ae.pendingStableLayoutFrames || 0), 1)), !0);
  }
  function hw() {
    return !!h.viewTransition || !!an.state.inertia.active || ae.pendingStableLayoutFrames > 0 || Math.abs(Number(h.frameRollOverlayAlpha || 0) - Number(h.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(h.cutoutPanoDimAlpha || 0) - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 || h.outputPreviewAnim !== h.outputPreviewAnimTo || Ku();
  }
  function mw(i = performance.now(), s = /* @__PURE__ */ new Set()) {
    var y;
    ae.nodePreviewPending && !Ku() && Yh(), s.forEach((w) => ae.reasons.add(w)), s.size && (ae.dirty = !0), [...s].some((w) => w !== Nt.OVERLAY) && (ae.backgroundDirty = !0), or(), ae.lastTickTs = i;
    const l = h.mode === "frame" && ((y = h.interaction) == null ? void 0 : y.kind) === "roll_frame" ? h.interaction : null;
    l != null && l.shot && (h.frameRollOverlayVisual = { shot: l.shot });
    const f = l ? 1 : 0;
    if (Math.abs(f - Number(h.frameRollOverlayTarget || 0)) > 1e-6 && (h.frameRollOverlayFrom = Number(h.frameRollOverlayAlpha || 0), h.frameRollOverlayTarget = f, h.frameRollOverlayStartTs = i), Math.abs(Number(h.frameRollOverlayAlpha || 0) - f) > 1e-6) {
      const w = te(
        (i - Number(h.frameRollOverlayStartTs || i)) / MF,
        0,
        1
      );
      h.frameRollOverlayAlpha = yr(
        Number(h.frameRollOverlayFrom || 0),
        f,
        Xf(w)
      ), w >= 1 && (h.frameRollOverlayAlpha = f, f === 0 && (h.frameRollOverlayVisual = null)), ae.dirty = !0;
    }
    const p = fw();
    if (Math.abs(p - Number(h.cutoutPanoDimTarget || 0)) > 1e-6 && (h.cutoutPanoDimFrom = Number(h.cutoutPanoDimAlpha || 0), h.cutoutPanoDimTarget = p, h.cutoutPanoDimStartTs = i), Math.abs(Number(h.cutoutPanoDimAlpha || 0) - p) > 1e-6) {
      const w = te(
        (i - Number(h.cutoutPanoDimStartTs || i)) / X0,
        0,
        1
      );
      h.cutoutPanoDimAlpha = yr(
        Number(h.cutoutPanoDimFrom || 0),
        p,
        Xf(w)
      ), w >= 1 && (h.cutoutPanoDimAlpha = p), w >= 1 && p === 0 && (h.cutoutPanoDimCorners = null), ae.dirty = !0;
    }
    const m = R && He() ? 1 : 0;
    if (Math.abs(m - Number(h.cutoutPanoFrameTarget || 0)) > 1e-6 && (h.cutoutPanoFrameFrom = Number(h.cutoutPanoFrameAlpha || 0), h.cutoutPanoFrameTarget = m, h.cutoutPanoFrameStartTs = i), Math.abs(Number(h.cutoutPanoFrameAlpha || 0) - m) > 1e-6) {
      const w = te(
        (i - Number(h.cutoutPanoFrameStartTs || i)) / X0,
        0,
        1
      );
      h.cutoutPanoFrameAlpha = yr(
        Number(h.cutoutPanoFrameFrom || 0),
        m,
        Xf(w)
      ), w >= 1 && (h.cutoutPanoFrameAlpha = m, m === 0 && (h.cutoutPanoFrameVisual = null)), ae.dirty = !0;
    }
    if (h.outputPreviewAnim !== h.outputPreviewAnimTo) {
      const w = Math.max(1, Number(h.outputPreviewAnimDurationMs)), x = te((i - Number(h.outputPreviewAnimStartTs || 0)) / w, 0, 1), N = h.outputPreviewAnimTo > h.outputPreviewAnimFrom ? FF(x) : RF(x);
      h.outputPreviewAnim = yr(h.outputPreviewAnimFrom, h.outputPreviewAnimTo, N), ae.dirty = !0, x >= 1 && (h.outputPreviewAnim = h.outputPreviewAnimTo);
    }
    if (h.viewTransition) {
      const { view: w, done: x } = WC(h.viewTransition, i);
      if (h.viewPosition = w.position, h.viewYaw = w.yaw_deg, h.viewPitch = w.pitch_deg, h.viewFov = w.hFOV_deg, h.viewDistance = w.distance, x) {
        const { end: E } = h.viewTransition;
        h.viewTransition = null, E && Qp(E), $r();
      }
      ae.backgroundDirty = !0, ae.dirty = !0;
    }
    if (h.viewInertia.vx = Number(an.state.inertia.vx || 0), h.viewInertia.vy = Number(an.state.inertia.vy || 0), h.viewInertia.active = !!an.state.inertia.active, an.stepInertia(i) && (h.viewInertia.vx = Number(an.state.inertia.vx || 0), h.viewInertia.vy = Number(an.state.inertia.vy || 0), h.viewInertia.active = !!an.state.inertia.active, ae.backgroundDirty = !0, ae.dirty = !0), ae.pendingStableLayoutFrames > 0 && (ae.pendingStableLayoutFrames -= 1, ae.dirty = !0), ae.dirty) {
      if (ae.pendingStableLayoutFrames > 0)
        return;
      ae.dirty = !1;
      const w = ae.reasons;
      ae.reasons = /* @__PURE__ */ new Set(), Uh(w);
    }
  }
  function Xh(i) {
    try {
      i();
    } catch (s) {
      const l = String((s == null ? void 0 : s.stack) || (s == null ? void 0 : s.message) || s || "unknown editor frame error");
      ae.tickErrorSignature !== l && (ae.tickErrorSignature = l, console.error("[PanoramaStickers] editor frame failed", s)), F.stageStatus = vr, F.stageStatusDetail = "frame", ce == null || ce.setAttribute("data-stage-ready", ""), ce == null || ce.removeAttribute("data-stage-loading-kind");
    }
  }
  function gw(i = performance.now(), s = /* @__PURE__ */ new Set()) {
    if (!ae.running) return;
    const l = nM();
    Xh(() => mw(i, s)), rM(l);
  }
  function qh() {
    !ae.running || !bl() || Xh(() => {
      ae.dirty = !1, Uh(/* @__PURE__ */ new Set([Nt.RESIZE]));
    });
  }
  const Jh = new ResizeObserver(qh);
  Jh.observe(I);
  let Bo = null;
  function Zh() {
    Bo == null || Bo.removeEventListener("change", Wu), Bo = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), Bo.addEventListener("change", Wu);
  }
  function Wu() {
    Zh(), qh();
  }
  Zh();
  function yw() {
    Fe(), ae.running = !1, Be.stop(), Jh.disconnect(), Bo.removeEventListener("change", Wu);
  }
  function tt() {
    r || (or(), Zg(_), !(k && _.stickers.some(pu)) && (h.historyController.commitActionGroup(JSON.stringify(Xg(_))), ef()));
  }
  function Bu(i) {
    var p, m;
    if (r) return;
    Sn();
    const s = i < 0 ? h.historyController.undo() : h.historyController.redo();
    if (ef(), !s) return;
    const l = RN(_, s), f = (p = _.timeline) == null ? void 0 : p.fps;
    Object.keys(_).forEach((y) => delete _[y]), Object.assign(_, l.state), or(!1), k && _.timeline.fps !== f && Yt.seek(Math.round(h.frame * _.timeline.fps / f)), h.selectedId = t === "stickers" || t === "cutout" ? _.active.selected_sticker_id : _.active.selected_shot_id, O && !h.selectedId && _.active.selected_shot_id && (h.selectedId = ((m = He()) == null ? void 0 : m.id) ?? null), h.selectedIds = h.selectedId ? [h.selectedId] : [], h.selectedId && no(), ts(), ae.backgroundDirty = !0, l.paintingChanged ? Cr() : jt(), Wn(), je(), Vn(), ue({ cause: "cutout_frame" });
  }
  function Qh() {
    var l, f;
    const i = Array.isArray((l = h.historyController) == null ? void 0 : l.entries) ? h.historyController.entries : [], s = Number((f = h.historyController) == null ? void 0 : f.index);
    return {
      canUndo: !r && i.length > 1 && s > 0,
      canRedo: !r && i.length > 1 && s >= 0 && s < i.length - 1
    };
  }
  function Wn() {
    pv();
    const i = YC({
      editor: h,
      swatches: fc,
      paintColorPopOpen: Me ? !Me.hidden : !1,
      colorToCss: Yr,
      colorsApproximatelyEqual: dc,
      rgb01ToHsv: Qf,
      hsv01ToRgb: Zf,
      getBrushPresetIdForTool: $i,
      isActiveLassoTool: Cv
    });
    if (Object.assign(F.paintDock, i), Dv(), !i.visible) {
      Me && (Me.hidden = !0);
      return;
    }
    St && (clearTimeout(St), St = 0), Re && (!i.colorEnabled && Me && !Me.hidden && (St = window.setTimeout(() => {
      Me.hidden = !0, F.paintDock.colorPopOpen = !1, St = 0;
    }, 170)), Me && (Me.style.setProperty("--picker-hue-color", i.pickerHueColor), Me.style.setProperty("--picker-sat", i.pickerSat), Me.style.setProperty("--picker-val", i.pickerVal), Me.style.setProperty("--picker-hue", i.pickerHue)), We && (We.style.left = i.pickerSvLeft, We.style.top = i.pickerSvTop), mt && (mt.style.left = i.pickerHueLeft));
  }
  function Uo() {
    const i = cn(R && h.mode === "frame" ? He() : Ft());
    i && (h.panelLastValues = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: Number(i.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(i.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(i.rot_deg || 0),
      roll_deg: Number(i.roll_deg || 0),
      aspect_id: yi(i)
    }, je());
  }
  function je() {
    or(), Gr(), em();
  }
  function bw() {
    const i = R && h.mode === "frame" ? He() : null;
    return [...rr(), to(), i].some((s) => Gn(s) ? Fc(s) : un(s) && Ti() && Fc(_.camera));
  }
  function em() {
    if (o) return;
    _.ui_settings = _.ui_settings || {};
    const i = UC(_.ui_settings);
    if (a) {
      F.sidePanel = XC({
        coverage: _.coverage,
        uiSettings: i,
        normalizeCoverageValue: Jn
      });
      return;
    }
    const s = Ft(), l = R && h.mode === "frame" ? He() : null, f = l || s, p = l ? [l] : rr(), m = l ? "shot" : ja();
    if (p.length > 1 && (h.panelLastValues = h.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), f && m !== "stroke") {
      const ee = cn(f);
      h.panelLastValues = {
        yaw_deg: Number(ee.yaw_deg || 0),
        pitch_deg: Number(ee.pitch_deg || 0),
        hFOV_deg: Number(ee.hFOV_deg || (m === "image" ? 30 : 90)),
        vFOV_deg: Number(ee.vFOV_deg || (m === "image" ? 30 : 60)),
        rot_deg: Number(ee.rot_deg || 0),
        roll_deg: Number(ee.roll_deg || 0),
        aspect_id: yi(ee)
      }, Gn(f) && (h.panelLastValues.opacity = Co(f, h.frame).opacity * 100);
    }
    const y = h.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), w = m === "stroke" ? null : f, x = to(), E = G && (m === "shot" || m === "frame") && Ga(), N = x ? YN(x, h.frame) : E ? { ...w, ...WN(_.camera, h.frame), vFOV_deg: w.vFOV_deg } : Gn(w) ? h.panelLastValues : w || y, C = x ? ll(x) : !!w && !_n(w);
    h.panelWasEnabled = C, Au();
    let L = null;
    if (l) {
      const ee = wu({ item: l, kind: "shot", label: "Frame" });
      L = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ee.label,
        currentIcon: ee.icon || null,
        items: [{
          id: String(l.id || ""),
          label: ee.label,
          icon: ee.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const ee = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (t === "stickers") {
        const ie = He();
        ie && ee.push({ id: ie.id, label: "Camera", icon: lh("frame"), item: ie, kind: "frame" }), ci().forEach((_e, Ue) => {
          var de, Se;
          if (!_e || Gn(_e) && !_e.visible) return;
          const Ze = P ? Sd(_e) : Xt(_e) ? String(_e.id || Gf) : String(((Se = (de = _.assets) == null ? void 0 : de[_e.asset_id]) == null ? void 0 : Se.name) || _e.asset_id || _e.id), lt = `${Ue + 1}. ${Ze}${Xt(_e) && zo(_e) ? " (hidden)" : ""}`, xe = wu({ item: _e, label: lt, kind: "image" });
          ee.push({ id: _e.id, label: xe.label, icon: xe.icon, item: _e, kind: "image" });
        });
      } else
        sh().forEach((ie) => {
          if (!(ie != null && ie.item)) return;
          const _e = wu(ie);
          ee.push({ id: ie.item.id, label: _e.label, icon: _e.icon, item: ie.item, kind: ie.kind });
        });
      const se = (w == null ? void 0 : w.id) || "", he = x ? { label: Sd(x), icon: Pe.globe } : ee.find((ie) => ie.id === se) || ee[0];
      L = {
        label: "Selection",
        open: !1,
        disabled: ee.length <= 1,
        currentLabel: he.label,
        currentIcon: he.icon || null,
        items: ee.map((ie) => ({
          id: ie.id,
          label: ie.label,
          icon: ie.icon || null,
          active: ie.id === se
        }))
      };
    }
    const U = [], K = (ee, se, he, ie, _e) => {
      const Ue = te(Number(N[ee] || 0), he, ie);
      U.push({
        key: ee,
        label: se,
        min: he,
        max: ie,
        step: _e,
        value: Ue,
        displayValue: na(Ue),
        fillPct: te((Ue - he) / Math.max(1e-6, ie - he) * 100, 0, 100),
        enabled: C && !r
      });
    }, Q = [];
    if (x) {
      for (const [ee, se] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const he = Hf(N[ee]);
        K(ee, se, -he, he, 0.01);
      }
      K("yaw_deg", "Yaw", -180, 180, 0.1), K("pitch_deg", "Pitch", -90, 90, 0.1), K("roll_deg", "Roll", -180, 180, 0.1), K("scale", "Scale", B0, Hf(N.scale), 0.01), K("opacity", "Opacity", 0, 100, 1);
    } else if (p.length > 1)
      Q.push(`Selected objects: ${p.length}`), Q.push("Multi-selection supports z-order and delete.");
    else {
      const ee = m === "shot" || m === "frame";
      if (E)
        for (const [se, he] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const ie = Hf(N[se]);
          K(se, he, -ie, ie, 0.01);
        }
      K("yaw_deg", "Yaw", -180, 180, 0.1), K("pitch_deg", "Pitch", -90, 90, 0.1), K(m === "image" || t === "stickers" && !ee ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), K("hFOV_deg", "H FOV", 1, 179, 0.1), K("vFOV_deg", "V FOV", 1, 179, 0.1), ee && U.forEach((se) => {
        se.enabled = se.enabled && eI(se.key, { erp: ro() });
      }), P && !ee && K("opacity", "Opacity", 0, 100, 1);
    }
    F.sidePanel = nI({
      coverage: _.coverage,
      readOnly: r,
      selectionPicker: L,
      enabled: C,
      selectedKind: x ? "world" : m,
      selectedItems: p,
      params: U,
      notes: Q,
      uiSettings: i,
      normalizeCoverageValue: Jn
    });
  }
  function Gr() {
    if (!k || r) return;
    const i = vl(), s = Ye.selection, l = s && Kr(s.owner);
    if (s) {
      const f = l ? Qa(s) : [];
      s.frames = s.frames.filter((p) => f.some((m) => l[m].keyframes.some((y) => y.frame === p))), s.frames.length || (Ye.selection = null);
    }
    F.timeline = lI(_, {
      span: i,
      selection: Ye.selection,
      selectedId: h.worldSelectedId || h.selectedId,
      expanded: Ye.expanded ?? tm(),
      openRows: Ye.openRows,
      audio: _w() && F.videoTransport.hasAudio ? { muted: Ie.muted } : null,
      // A VIDEO on bg_media, sticker or the Cutout's source sets the Timeline fps (ADR 0024).
      fpsLocked: Bf(e) !== null || V2(e, ["bg_media", "sticker", "source"]),
      // The Cutout shows only its Camera; with a PANO_SCENE it shoots the Scene's Timeline (#77). Panorama
      // Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: Ti(),
      cameraHideable: O,
      stickers: !A,
      scene: P && !!Cd(e).scene,
      sceneLocked: !!V
    }), F.easing = Ye.selection ? cI(l, Qa(Ye.selection), Ye.selection.frames, es(Ye.selection.owner)) : null;
  }
  function tm() {
    return MN(_, { cameraOnly: A, camera: O });
  }
  function vl(i = null) {
    if (V != null && V.frames) return V.frames;
    const s = _.timeline.fps, l = _.stickers.find(Xt), f = l ? mh() : null, p = Math.max(
      F.videoTransport.ready ? Math.round(Number(F.videoTransport.duration || 0) * s) : 0,
      f ? h1(l.clip, s, f.meta) : 0
    );
    return Vb(_, { minimum: Math.round(s * 5), frames: p, openClip: i, camera: A && !V || O });
  }
  function Kr(i) {
    return i === "camera" ? Ti() ? _.camera : null : i === "scene" ? P ? _.scene : null : _.stickers.find((s) => s.id === i) || null;
  }
  function Qa(i) {
    return i.lane ? [i.lane] : Ea(Kr(i.owner));
  }
  function es(i) {
    if (i === "camera") return 0;
    const { clip: s } = Kr(i);
    return s.start - s.in;
  }
  function nm(i) {
    return `${ya(i, h.frame)}:${i.start - i.in}`;
  }
  function _l(i) {
    const s = Kr(i);
    return !!s && s.locked !== !0;
  }
  function ts() {
    var s;
    const i = Ft();
    (Gn(i) && !ul(i) || h.selectedId === tc && Ti() && !zr() || ja() === "stroke" && !cl()) && Rn(null), ((s = to()) == null ? void 0 : s.visible) === !1 && no();
  }
  function vw(i) {
    const s = Math.max(0, Math.round(i));
    if (s === h.frame) return;
    or(), h.frame = s, q.frame.value = s, or();
    const l = [h.selectedId, h.worldSelectedId];
    ts(), jt(), l[0] !== h.selectedId || l[1] !== h.worldSelectedId ? je() : bw() && em(), Ke(), ue({ reason: Nt.PLAYHEAD });
  }
  function _w() {
    return Ie instanceof HTMLVideoElement && !!Ie.getAttribute("src");
  }
  function ww(i) {
    Oi(), Yt.seek(i);
  }
  function Sn() {
    k && Yt.stop();
  }
  function Uu() {
    Oi(), Yt.toggle();
  }
  function wl() {
    or(), jt(), je(), Ke(), ue();
  }
  function Ri() {
    tt(), st(), wl();
  }
  function Sw() {
    const { selection: i } = Ye;
    _l(i.owner) && (Sn(), yN(Kr(i.owner), Qa(i), i.frames, h.frame - es(i.owner)), Ye.selection = null, Ri());
  }
  function rm(i) {
    const s = Ia(i);
    if (s === null || s === _.timeline.fps) return;
    Sn();
    const l = Math.round(h.frame * s / _.timeline.fps);
    $N(_, s), Ye.selection = null, Yt.seek(l), Ri();
  }
  function xw() {
    const i = Bf(e);
    i !== null && i !== _.timeline.fps && rm(i);
  }
  function kw(i) {
    if (!(r || !k)) {
      if (i.type === "seek") {
        if (i.phase === "move") {
          Ye.scrubFrame = i.frame, Te.request("seek");
          return;
        }
        Te.cancel(), i.phase === "start" && Oi(), Yt.seek(i.frame);
        return;
      }
      if (i.type === "play") {
        Uu();
        return;
      }
      if (i.type === "mute") {
        fh(), Gr();
        return;
      }
      if (i.type === "toggle-expanded") {
        Ye.expanded = !(Ye.expanded ?? tm()), Ye.selection = null, Gr();
        return;
      }
      if (i.type === "toggle-row") {
        Ye.openRows.has(i.id) ? Ye.openRows.delete(i.id) : Ye.openRows.add(i.id), Gr();
        return;
      }
      if (i.type === "toggle-visible") {
        if (i.id === rv) _.painting_visible = !_.painting_visible;
        else {
          const s = Kr(i.id);
          if (!s || i.id === "camera" && !O) return;
          s.visible = !s.visible;
        }
        ts(), Ri();
        return;
      }
      if (i.type === "select-row") {
        const s = _.stickers.find((l) => l.id === i.id);
        if (s && !s.visible || i.id === "camera" && !zr()) return;
        s && !ya(s.clip, h.frame) && ww(s.clip.start), (s == null ? void 0 : s.placement) === "world" ? Pu(s.id) : i.id === "camera" ? Rn(He()) : Rn(ci().find((l) => l.id === i.id) || null), $r(), Ye.selection = null, je(), Ke(), ue();
        return;
      }
      if (i.type === "select-keys") {
        const s = es(i.owner), l = i.frames.map((m) => m - s), f = Ye.selection, p = (f == null ? void 0 : f.owner) === i.owner && f.lane === i.lane;
        if (i.additive && p) {
          const m = new Set(f.frames);
          for (const y of l)
            m.has(y) ? m.delete(y) : m.add(y);
          f.frames = [...m].sort((y, w) => y - w);
        } else
          Ye.selection = l.length ? { owner: i.owner, lane: i.lane, frames: l } : null;
        Gr();
        return;
      }
      if (i.type === "move-keys") {
        const s = Ye.selection;
        if (!s || !_l(s.owner)) return;
        const l = Kr(s.owner), f = Qa(s);
        if (i.phase === "start") {
          Sn(), Ye.drag = { keyframes: f.map((y) => structuredClone(l[y].keyframes)), frames: s.frames };
          return;
        }
        const { drag: p } = Ye;
        if (!(p != null && p.keyframes)) return;
        f.forEach((y, w) => {
          l[y].keyframes = structuredClone(p.keyframes[w]);
        });
        const m = bN(l, f, p.frames, i.delta, -es(s.owner));
        if (s.frames = p.frames.map((y) => y + m), i.phase !== "end") {
          Te.request("timeline"), Te.request("view");
          return;
        }
        Te.cancel(), Ye.drag = null, m ? Ri() : wl();
        return;
      }
      if (i.type === "clip") {
        const s = i.id === "scene" ? Kr("scene") : _.stickers.find((m) => m.id === i.id);
        if (!s || s.locked) return;
        if (i.phase === "start") {
          Sn(), Ye.drag = { clip: { ...s.clip }, span: vl(s.clip) };
          return;
        }
        const { drag: l } = Ye;
        if (!(l != null && l.clip)) return;
        const f = l.clip, p = nm(s.clip);
        if (s.clip = { ...f }, i.delta && i.mode === "move" ? wN(s.clip, i.delta) : i.delta && i.mode === "start" ? SN(s.clip, f.start + i.delta) : i.delta && xN(s.clip, (f.duration === null ? l.span : f.start + f.duration) + i.delta, l.span), i.phase !== "end") {
          Te.request("timeline"), nm(s.clip) !== p && Te.request("view");
          return;
        }
        Te.cancel(), Ye.drag = null, ts(), JSON.stringify(s.clip) !== JSON.stringify(f) ? Ri() : wl();
        return;
      }
      if (i.type === "key-row") {
        if (i.owner === "scene" || !_l(i.owner)) return;
        Sn(), hN(Kr(i.owner), h.frame - es(i.owner)), Ri();
        return;
      }
      if (i.type === "fps") {
        const s = PN(i.fps);
        if (s === null || s === _.timeline.fps || F.timeline.fpsLocked) {
          Gr();
          return;
        }
        rm(s);
        return;
      }
      if (i.type === "length") {
        const s = AN(i.length);
        if (s === void 0 || s === _.timeline.length) {
          Gr();
          return;
        }
        Sn(), _.timeline.length = s, Ri();
        return;
      }
      if (i.type === "easing") {
        const s = Ye.selection;
        if (!s || !_l(s.owner)) return;
        Sn(), _N(Kr(s.owner), Qa(s), s.frames, i.easing), i.commit ? Ri() : wl();
      }
    }
  }
  async function im(i) {
    if (r || A || t !== "stickers" && t !== "cutout" || !Tr(i)) return;
    if (P) {
      Sn(), await om(i);
      return;
    }
    const s = go("asset"), l = _s(e, `add:${s}`, async () => {
      try {
        const { image: f } = await ws(i);
        nn.set(s, f);
        const p = go("st");
        _.stickers.push({
          id: p,
          asset_id: s,
          yaw_deg: h.viewYaw,
          pitch_deg: h.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: Fi(30, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1)),
          rot_deg: 0,
          z_index: al()
        }), Rn(_.stickers[_.stickers.length - 1]), ns(), je(), Ke(), ue();
        const m = await vo(i, {
          fetchApi: (x, E) => Qt.fetchApi(x, E)
        });
        if (!(Array.isArray(_.stickers) ? _.stickers : []).filter((x) => String((x == null ? void 0 : x.asset_id) || "") === s).length) return;
        _.assets[s] = m, Go(), tt(), st(), je(), Ke(), ue();
      } catch (f) {
        delete _.assets[s], nn.delete(s);
        const p = Array.isArray(_.stickers) ? _.stickers : [], m = p.filter((y) => String((y == null ? void 0 : y.asset_id) || "") === s);
        throw m.length && (_.stickers = p.filter((y) => String((y == null ? void 0 : y.asset_id) || "") !== s), m.some((y) => String((y == null ? void 0 : y.id) || "") === String(h.selectedId || "")) && Rn(null), je(), Ke(), ue(), st()), f;
      }
    });
    try {
      await l;
    } catch {
    }
  }
  function Mw() {
    var i;
    r || t !== "stickers" && t !== "cutout" || (i = re == null ? void 0 : re.openImagePicker) == null || i.call(re, "add");
  }
  function Nw() {
    var i;
    r || !P || (i = re == null ? void 0 : re.openImagePicker) == null || i.call(re, "add-world");
  }
  async function Pw(i) {
    r || !P || !Tr(i) || (Sn(), await om(i, "world"));
  }
  function Aw() {
    const i = { x: I.width / 2, y: I.height / 2 }, s = io() ? $e.pick(Xo(), i.x, i.y, I.width, I.height) : null;
    return w2(wn(), s, jr());
  }
  async function om(i, s = "sky") {
    const l = go("st"), f = _s(e, `add:${l}`, async () => {
      const { image: p } = await ws(i), m = {
        yaw_deg: h.viewYaw,
        pitch_deg: h.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Fi(30, Number(p.naturalWidth || p.width || 1), Number(p.naturalHeight || p.height || 1)),
        rot_deg: 0
      }, y = { kind: "file", filename: "" }, w = s === "world" ? ZN(l, y, Aw()) : Ep(l, y, m, al());
      nn.set(Ba(w), p), _.stickers.push(w), s === "world" ? Pu(l) : Rn(w), ns(), je(), Ke(), ue();
      try {
        const x = await vo(i, {
          fetchApi: (N, C) => Qt.fetchApi(N, C)
        }), E = _.stickers.find((N) => N.id === l);
        if (!E) return;
        E.source = nc(x), nn.set(Ba(E), p), tt(), st();
      } catch (x) {
        throw _.stickers = _.stickers.filter((E) => E.id !== l), h.selectedId === l && Rn(null), h.worldSelectedId === l && no(), tt(), st(), x;
      } finally {
        je(), Ke(), ue();
      }
    });
    try {
      await f;
    } catch {
    }
  }
  async function Cw(i, s) {
    const l = _s(e, `replace:${s}:${go("asset")}`, async () => {
      const { image: f } = await ws(i), p = await vo(i, {
        fetchApi: (y, w) => Qt.fetchApi(y, w)
      }), m = _.stickers.find((y) => y.id === s);
      if (m) {
        m.source = nc(p), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const y of [m.size.value, ...m.size.keyframes.map((w) => w.value)])
          y.vFOV_deg = Fi(y.hFOV_deg, Number(f.naturalWidth || f.width || 1), Number(f.naturalHeight || f.height || 1));
        nn.set(Ba(m), f), jt(), tt(), st(), je(), Ke(), ue();
      }
    });
    try {
      await l;
    } catch {
    }
  }
  async function Iw(i) {
    if (r || t !== "stickers" && t !== "cutout") return;
    const s = Ft();
    if (!s || !At(s) || Xt(s) || !Tr(i)) return;
    if (P) {
      await Cw(i, s.id);
      return;
    }
    const l = String(s.id || ""), f = go("asset"), p = _s(e, `replace:${l}:${f}`, async () => {
      var N;
      const m = (Array.isArray(_.stickers) ? _.stickers : []).find((C) => String((C == null ? void 0 : C.id) || "") === l) || null;
      if (!m || !At(m) || Xt(m)) return;
      const y = String(m.asset_id || ""), w = y ? An(((N = _.assets) == null ? void 0 : N[y]) || null) : null, x = Number(m.vFOV_deg || 0), E = m.crop && typeof m.crop == "object" ? { ...m.crop } : null;
      try {
        const { image: C } = await ws(i);
        nn.set(f, C), m.asset_id = f, m.vFOV_deg = Fi(
          Number(m.hFOV_deg || 30),
          Number(C.naturalWidth || C.width || 1),
          Number(C.naturalHeight || C.height || 1)
        ), m.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, jt(), je(), Ke(), ue();
        const L = await vo(i, {
          fetchApi: (K, Q) => Qt.fetchApi(K, Q)
        }), U = (Array.isArray(_.stickers) ? _.stickers : []).find((K) => String((K == null ? void 0 : K.id) || "") === l) || null;
        if (!U || String(U.asset_id || "") !== f) return;
        _.assets[f] = L, Go(), tt(), st(), je(), Ke(), ue();
      } catch (C) {
        delete _.assets[f], nn.delete(f);
        const L = (Array.isArray(_.stickers) ? _.stickers : []).find((U) => String((U == null ? void 0 : U.id) || "") === l) || null;
        throw L && String(L.asset_id || "") === f && (y && w && (_.assets[y] = w), L.asset_id = y, L.vFOV_deg = x, L.crop = E ? { ...E } : null), jt(), st(), je(), Ke(), ue(), C;
      }
    });
    try {
      await p;
    } catch {
    }
  }
  function Ew() {
    var s;
    if (r) return;
    const i = Ft();
    !i || !At(i) || Xt(i) || (s = re == null ? void 0 : re.openImagePicker) == null || s.call(re, "replace");
  }
  async function Ow() {
    if (r || t !== "stickers") return;
    if (P) {
      await Fw();
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
        const y = await fetch(m).then((C) => C.blob()), w = String(y.type || "image/png").split("/")[1] || "png", x = String((p == null ? void 0 : p.name) || `${f}.${w}`), E = new File([y], x, { type: y.type || "image/png" }), N = await vo(E, {
          fetchApi: (C, L) => Qt.fetchApi(C, L)
        });
        _.assets[f] = {
          ...N,
          w: Number((p == null ? void 0 : p.w) || 0),
          h: Number((p == null ? void 0 : p.h) || 0)
        }, l = !0;
      } catch {
      }
    l && (st(), ue());
  }
  async function Fw() {
    let i = !1;
    for (const s of _.stickers) {
      const l = s.source.data_url;
      if (l)
        try {
          const f = await fetch(l).then((w) => w.blob()), p = String(f.type || "image/png").split("/")[1] || "png", m = new File([f], `${s.id}.${p}`, { type: f.type || "image/png" }), y = await vo(m, {
            fetchApi: (w, x) => Qt.fetchApi(w, x)
          });
          s.source = nc(y), i = !0;
        } catch {
        }
    }
    i && (st(), ue());
  }
  function Tw() {
    if (r || t !== "cutout") return;
    const i = He();
    if (i) {
      Rn(i), h.mode = "pano", A && hr() ? eo(o0(b_(wn(), i.position), Th(), I.width, I.height)) : eh(Ht(Number(i.yaw_deg || 0)), te(Number(i.pitch_deg || 0), -89.9, 89.9)), je(), Ke(), ue({ cause: "cutout_frame" });
      return;
    }
    const s = hb({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(h.viewYaw || 0)),
      pitchDeg: Number(h.viewPitch || 0),
      viewFovDeg: Number(h.viewFov || 90)
    });
    _.shots = [s], Rn(s), ns(), h.mode = "pano", tt(), st(), je(), Ke(), ue({ cause: "cutout_frame" });
  }
  function Dw() {
    r || !O || Ti() || (Sn(), _.camera = HN(wn()), or(), Rn(He()), ns(), tt(), st(), je(), Ke(), ue({ cause: "cutout_frame" }));
  }
  function Lw() {
    Sn(), _.camera = null, Rn(null), or(), tt(), st(), je(), Ke(), ue({ cause: "cutout_frame" });
  }
  function am(i, s) {
    O && un(i) && (_.camera.projection = s === Sa ? "erp" : "perspective", s === Sa) || Gw(i, s);
  }
  function Rw() {
    r || t !== "cutout" || (_.shots = [], h.selectedId = null, h.selectedIds = [], h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, _.active.selected_shot_id = null, tt(), st(), je(), Ke(), ue());
  }
  function Vw() {
    const i = Array.isArray(_.stickers) ? _.stickers : [], s = [];
    for (const l of i)
      Xt(l) && (l.visible = !1, s.push(l));
    return s;
  }
  function sm(i, s, l = "Clear") {
    return new Promise((f) => {
      F.confirmDialog = {
        visible: !0,
        title: String(i || ""),
        text: String(s || ""),
        confirmLabel: String(l || "Confirm"),
        resolve: f
      };
    });
  }
  async function $w() {
    var l, f;
    if (r || !await sm(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    _.painting = ga(null), Cr();
    const s = Vw();
    if (t === "stickers")
      _.stickers = P ? _.stickers.filter((p) => p.placement === "world" || s.includes(p)) : s, P || (_.assets = {}), h.selectedId = ((l = s[0]) == null ? void 0 : l.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = ((f = s[0]) == null ? void 0 : f.id) || null, Go();
    else {
      const p = LN(_.shots, _.active.selected_shot_id);
      _.stickers = s, _.assets = {}, _.shots = p.shots, h.selectedId = p.selectedShotId, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = null, _.active.selected_shot_id = p.selectedShotId, !p.selectedShotId && h.mode === "frame" && (h.mode = "pano"), h.cutoutAspectOpen = !1, Go();
    }
    tt(), st(), je(), Ke(), ue();
  }
  async function zw(i) {
    var m, y, w, x;
    if (r) return;
    const s = i === "mask" ? "mask" : "paint", l = s === "mask" ? "Mask" : "Paint", f = Yo(s);
    if (!(!f.length && !(((m = h.interaction) == null ? void 0 : m.kind) === "draw" && ((y = h.interaction) == null ? void 0 : y.layerKind) === s) || !await sm(
      `Clear ${l}`,
      `This will remove all ${s} strokes in the current node.`,
      `Clear ${l}`
    ))) {
      if (((w = h.interaction) == null ? void 0 : w.kind) === "draw" && ((x = h.interaction) == null ? void 0 : x.layerKind) === s) {
        const E = ir();
        E && h.paintEngine.cancelActiveStroke(E), h.interaction = null;
      }
      f.length = 0, _.painting.raster_objects = Kn().filter((E) => String((E == null ? void 0 : E.layerKind) || "paint") !== s), s === "paint" && (Nn().length = 0), Cr(), tt(), st(), je(), Ke(), Wn(), ue();
    }
  }
  function jw() {
    if (r) return;
    const i = Ft();
    if (!i || !At(i) || Xt(i) || P && pu(i)) return;
    let s;
    P ? s = QN(i, go("st"), al()) : (s = JSON.parse(JSON.stringify(i)), s.id = go("st"), s.yaw_deg = Ht((s.yaw_deg || 0) + 8), s.z_index = al()), _.stickers.push(s), _.active.selected_sticker_id = s.id, h.selectedId = s.id, h.selectedIds = [s.id], jt(), tt(), st(), Ke(), je(), ue();
  }
  function Hw() {
    const i = to();
    return i ? (ll(i) && (Sn(), JN(_, i.id), no(), jt(), tt(), st(), je(), Ke(), $r(), ue()), !0) : !1;
  }
  function lm() {
    var l, f, p, m, y;
    if (r || A) return;
    const i = rr(), s = Ft();
    if (!(!s && i.length === 0) && !i.some((w) => _n(w))) {
      if (Sn(), i.length > 1) {
        const w = new Set(i.filter((N) => fn(N)).map((N) => String(N.actionGroupId || N.id || ""))), x = new Set(i.filter((N) => vn(N)).map((N) => yn(N.rasterObjectId || N.id || ""))), E = new Set(i.filter(At).map((N) => String(N.id || "")));
        w.size > 0 && (_.painting.paint.strokes = (Array.isArray((f = (l = _.painting) == null ? void 0 : l.paint) == null ? void 0 : f.strokes) ? _.painting.paint.strokes : []).filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || ""))), _.painting.groups = Nn().filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), Cr()), x.size > 0 && (_.painting.raster_objects = Kn().filter((N) => !x.has(String((N == null ? void 0 : N.id) || ""))), Wo()), E.size > 0 && (_.stickers = (Array.isArray(_.stickers) ? _.stickers : []).filter((N) => E.has(String((N == null ? void 0 : N.id) || "")) ? Xt(N) ? (zo(N) || (N.visible = !1), !0) : !1 : !0), Go(), jt()), h.selectedId = null, h.selectedIds = [], tt(), st(), je(), Ke(), ue();
        return;
      }
      if (fn(s)) {
        const w = String(s.actionGroupId || s.id || "").trim();
        _.painting.paint.strokes = (Array.isArray((m = (p = _.painting) == null ? void 0 : p.paint) == null ? void 0 : m.strokes) ? _.painting.paint.strokes : []).filter((x) => String((x == null ? void 0 : x.actionGroupId) || "").trim() !== w), _.painting.groups = Nn().filter((x) => String((x == null ? void 0 : x.actionGroupId) || (x == null ? void 0 : x.id) || "").trim() !== w), Cr(), h.selectedId = null, h.selectedIds = [], tt(), st(), je(), Ke(), ue();
        return;
      }
      if (vn(s)) {
        const w = yn(s.rasterObjectId || s.id || "");
        _.painting.raster_objects = Kn().filter((x) => String((x == null ? void 0 : x.id) || "").trim() !== w), Wo(), h.selectedId = null, h.selectedIds = [], tt(), st(), je(), Ke(), ue();
        return;
      }
      if (O && un(s)) {
        Lw();
        return;
      }
      if (t === "stickers" || At(s)) {
        if (Xt(s)) {
          if (zo(s)) return;
          s.visible = !1, jt(), tt(), st(), je(), Ke(), ue();
          return;
        }
        _.stickers = _.stickers.filter((w) => w.id !== s.id), Go(), jt(), h.selectedId = ((y = ci()[0]) == null ? void 0 : y.id) || null, h.selectedIds = h.selectedId ? [h.selectedId] : [], _.active.selected_sticker_id = h.selectedId, tt(), st(), je(), Ke(), ue();
        return;
      }
      Rw();
    }
  }
  function Yu(i, s) {
    const l = ae.frameSafeRect;
    if (!i || !l || h.mode !== "frame") return !1;
    const f = Kf * Po(l, i), p = bp(yp(l, s), f);
    return i.hFOV_deg = p.hFOV_deg, i.vFOV_deg = p.vFOV_deg, !0;
  }
  function Gw(i, s) {
    if (!i || i.locked === !0) return;
    const l = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, f = (() => {
      const w = String(i.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(w)) {
        const [N, C] = w.split(":").map((L) => Number(L));
        if (Number.isFinite(N) && Number.isFinite(C)) return N >= C;
      }
      const x = Number(i.hFOV_deg || 64), E = Number(i.vFOV_deg || 40);
      return Math.abs(x - E) > 1e-6 ? x >= E : Ao(i) >= 1;
    })();
    let [p, m] = l[String(s)] || l["1:1"];
    p >= m !== f && ([p, m] = [m, p]);
    const y = p / m;
    if (!Yu(i, y)) {
      const w = te(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = w, i.hFOV_deg = Zl(w, y);
    }
    i.aspect_id = `${p}:${m}`;
  }
  function Kw(i, s, l) {
    if (!i || i.locked === !0) return !1;
    const f = Ys(s, l);
    if (!f) return !1;
    const p = f.ratio;
    if (!Yu(i, p)) {
      const m = te(Number(i.vFOV_deg || 40), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Zl(m, p);
    }
    return i.aspect_id = f.label, !0;
  }
  function cm(i) {
    if (!i || i.locked === !0) return;
    const s = String(i.aspect_id || "").trim(), l = Yi(i), f = l.tanHalfX / Math.max(1e-12, l.tanHalfY), p = 1 / Math.max(1e-12, f);
    if (!Yu(i, p)) {
      const m = te(Number(i.vFOV_deg || 60), 1, 179);
      i.vFOV_deg = m, i.hFOV_deg = Zl(m, p);
    }
    if (/^\d+:\d+$/.test(s)) {
      const [m, y] = s.split(":");
      i.aspect_id = `${y}:${m}`;
    } else
      i.aspect_id = _o(i);
  }
  function um() {
    Ro().forEach((s, l) => {
      s.type === "sticker" && s.item && (s.item.z_index = l), s.type === "strokeGroup" && s.item && (s.item.z_index = l), s.type === "rasterObject" && s.item && (s.item.z_index = l);
    });
  }
  function Ww() {
    if (r) return;
    const i = rr();
    if (!Ft() || i.length === 0 || i.some((w) => _n(w))) return;
    um();
    const l = Ro(), f = new Set(i.map((w) => At(w) ? `sticker:${String(w.id || "")}` : vn(w) ? `rasterObject:${yn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var E, N;
      const x = w.type === "sticker" ? `sticker:${String(((E = w.item) == null ? void 0 : E.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((N = w.item) == null ? void 0 : N.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(x) ? p.push(w) : m.push(w);
    }), !p.length || p[p.length - 1] === l[l.length - 1]) return;
    [...m, ...p].forEach((w, x) => {
      w.type === "sticker" && w.item && (w.item.z_index = x), w.type === "strokeGroup" && w.item && (w.item.z_index = x), w.type === "rasterObject" && w.item && (w.item.z_index = x);
    }), jt(), tt(), st(), Ke(), ue();
  }
  function Bw() {
    if (r) return;
    const i = rr();
    if (!Ft() || i.length === 0 || i.some((w) => _n(w))) return;
    um();
    const l = Ro(), f = new Set(i.map((w) => At(w) ? `sticker:${String(w.id || "")}` : vn(w) ? `rasterObject:${yn(w.rasterObjectId || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || w.id || "")}`)), p = [], m = [];
    if (l.forEach((w) => {
      var E, N;
      const x = w.type === "sticker" ? `sticker:${String(((E = w.item) == null ? void 0 : E.id) || "")}` : w.type === "rasterObject" ? `rasterObject:${String(((N = w.item) == null ? void 0 : N.id) || w.id || "")}` : `strokeGroup:${String(w.actionGroupId || "")}`;
      f.has(x) ? p.push(w) : m.push(w);
    }), !p.length || p[0] === l[0]) return;
    [...p, ...m].forEach((w, x) => {
      w.type === "sticker" && w.item && (w.item.z_index = x), w.type === "strokeGroup" && w.item && (w.item.z_index = x), w.type === "rasterObject" && w.item && (w.item.z_index = x);
    }), jt(), tt(), st(), Ke(), ue();
  }
  function Uw() {
    r || (_.projection_model = "pinhole_rectilinear", _.alpha_mode = "straight", u && (_.output_preset = M(Number(_.output_preset || 2048))), d && (_.coverage = Jn(d.value)), b && (_.bg_color = String(b.value || _.bg_color || "#00ff00")), Vn(), e.setDirtyCanvas(!0, !0));
  }
  function Vn() {
    var s;
    if (r) return;
    or(), Zg(_), _.coverage = Jn(_.coverage), Wb(e, _.active);
    const i = Bb(e, _);
    g && !Ub(e, i, String(g.value ?? ""), { rebased: G }) && (g.value = i, (s = g.callback) == null || s.call(g, i));
  }
  const fm = () => Vn();
  r || (e.__panoFlushStateBeforeQueue = fm);
  function Xu() {
    _.ui_settings = GF(_.ui_settings), r || Vn();
  }
  function st() {
    var i;
    r || (Vn(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0));
  }
  function Yw() {
    r || i_() && Ch().catch((i) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", i);
    });
  }
  function Xw(i = {}) {
    var f, p, m, y, w, x, E, N, C, L;
    const s = i.syncPreview !== !1, l = i.syncGraph !== !1;
    s && ((p = (f = e.__panoPreviewNodeRuntime) == null ? void 0 : f.requestDraw) == null || p.call(f), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1)), l && ((E = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || E.call(x, !0, !0), (L = (C = (N = lr) == null ? void 0 : N.canvas) == null ? void 0 : C.setDirty) == null || L.call(C, !0, !0));
  }
  function ns() {
    h.primaryTool !== "cursor" && (h.primaryTool = "cursor", Wn(), je());
  }
  function Vi(i) {
    const s = I.getBoundingClientRect();
    return {
      x: (i.clientX - s.left) / s.width * I.width,
      y: (i.clientY - s.top) / s.height * I.height
    };
  }
  function Sl(i) {
    const s = I.getBoundingClientRect();
    return {
      x: Number(i.clientX) - Number(s.left || 0),
      y: Number(i.clientY) - Number(s.top || 0)
    };
  }
  function dm() {
    return h.mode === "pano" || h.mode === "unwrap";
  }
  function or(i = !0) {
    var f, p;
    if (!G) return;
    const s = j;
    if (!zr()) {
      j = null, (f = _.shots) != null && f.length && (_.shots = []), s && pm(s, null);
      return;
    }
    const l = (p = _.shots) == null ? void 0 : p[0];
    i && l && j && KN(_.camera, h.frame, l, j), j = Jg(_.camera, h.frame), l ? Object.assign(l, j, { position: [...j.position] }) : _.shots = [{ ...j, position: [...j.position] }], s || pm(null, j);
  }
  function pm(i, s) {
    var m, y;
    !s && h.mode === "frame" && hm(i);
    const l = (s == null ? void 0 : s.position) ?? [0, 0, 0];
    if (((y = (m = h.viewTransition) == null ? void 0 : m.end) == null ? void 0 : y.mode) === "3dof") {
      eo({ ...wn(), position: l }, h.viewTransition.end);
      return;
    }
    if (h.mode !== "pano" || h.spaceMode !== "3dof" || !Ga()) return;
    const f = (i == null ? void 0 : i.position) ?? [0, 0, 0];
    if (f.every((w, x) => w === l[x])) return;
    const p = { ...wn(), position: f };
    Ka({ mode: "6dof", position: f, moved: !0 }), h.viewDistance = p.distance, eo({ ...p, position: l }, { mode: "3dof", moved: !1 });
  }
  function hm(i) {
    if (h.mode = "pano", !i) return;
    Da();
    const s = wn().distance;
    h.viewYaw = Ht(i.yaw_deg), h.viewPitch = te(i.pitch_deg, -89.9, 89.9), h.viewFov = te(i.hFOV_deg, 35, 140), h.spaceMode === "6dof" && Ka({ mode: "6dof", position: [...i.position], moved: !0 }), h.viewDistance = s, ae.backgroundDirty = !0;
  }
  function He() {
    if (!R) return null;
    const i = Array.isArray(_.shots) ? _.shots : [];
    if (!i.length) return null;
    const s = String(_.active.selected_shot_id || "");
    return i.find((l) => String((l == null ? void 0 : l.id) || "") === s) || i[0] || null;
  }
  function qw() {
    var U, K, Q, ee, se;
    if (!I) return null;
    const i = (U = I.getBoundingClientRect) == null ? void 0 : U.call(I), s = Number((i == null ? void 0 : i.width) || 0) > 0 ? I.width / i.width : 1, l = Number((i == null ? void 0 : i.height) || 0) > 0 ? I.height / i.height : 1;
    ae.frameCanvasScale = Math.min(s, l);
    let f = 24, p = 24;
    const m = Math.max(f + 1, I.width - 24);
    let y = Math.max(p + 1, I.height - 24);
    const w = (K = T == null ? void 0 : T.getBoundingClientRect) == null ? void 0 : K.call(T), x = (Q = H == null ? void 0 : H.getBoundingClientRect) == null ? void 0 : Q.call(H);
    let E = 24;
    w && i && w.width > 0 && w.height > 0 && (E = Math.max(E, (w.right - i.left) * s + Y0)), x && i && x.width > 0 && x.height > 0 && ((ee = F.frameRail) == null ? void 0 : ee.visible) === !0 && (E = Math.max(E, (i.right - x.left) * s + Y0)), f = Math.max(f, E);
    const N = Math.min(m, I.width - E);
    let C = 24;
    const L = (se = De == null ? void 0 : De.getBoundingClientRect) == null ? void 0 : se.call(De);
    if (L && i && L.width > 0 && L.height > 0 && (C = Math.max(C, (L.bottom - i.top) * l + Wf)), [pe, ye].forEach((he) => {
      var Ue;
      if (!he || !i) return;
      const ie = getComputedStyle(he);
      if (ie.display === "none" || ie.visibility === "hidden" || Number(ie.opacity) <= 0) return;
      const _e = (Ue = he.getBoundingClientRect) == null ? void 0 : Ue.call(he);
      !_e || _e.width <= 0 || _e.height <= 0 || (C = Math.max(C, (i.bottom - _e.top) * l + Wf));
    }), Ae && i) {
      const he = getComputedStyle(Ae);
      he.display !== "none" && he.visibility !== "hidden" && Number(he.opacity) > 0 && (C = Math.max(C, (xF + Wf) * l));
    }
    return p = Math.max(p, C), y = Math.max(p + 1, Math.min(y, I.height - C)), {
      x: f,
      y: p,
      w: Math.max(1, N - f),
      h: Math.max(1, y - p)
    };
  }
  function xl(i = He()) {
    if (!i || !I) return null;
    const s = ae.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, I.width - 48),
      h: Math.max(1, I.height - 48)
    };
    return TM(s, i, Kf * Po(s, i));
  }
  function mn(i = He()) {
    const s = xl(i);
    return s ? { x: s.x, y: s.y, w: s.w, h: s.h } : null;
  }
  function qu() {
    return R && !!He();
  }
  function Ir(i, s = performance.now()) {
    if (h.mode === "unwrap") {
      const m = Di(), y = (i.x - m.x) / Math.max(1, m.w), w = (i.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: te(w, 0, 1),
        t: Number(s || 0)
      };
    }
    const l = Ou(i.x, i.y), { lon: f, lat: p } = Ru(l);
    return {
      targetKind: "ERP_GLOBAL",
      u: (f / (2 * Math.PI) + 0.5 + 1) % 1,
      v: te(0.5 - p / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Er(i, s, l = performance.now()) {
    const f = mn(s);
    if (!f) return null;
    const p = {
      x: (Number(i.x) - f.x) / Math.max(1, f.w),
      y: (Number(i.y) - f.y) / Math.max(1, f.h)
    };
    if (p.x < 0 || p.x > 1 || p.y < 0 || p.y > 1) return null;
    const m = Hu(s, p);
    if (!m) return null;
    const { lon: y, lat: w } = Ru(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: te(0.5 - w / Math.PI, 0, 1),
      t: Number(l || 0)
    };
  }
  function Jw(i, s) {
    const l = He();
    if (!l || l.locked === !0) return !1;
    const f = Number(s) > 0, p = gb(l, s);
    if (!p) return !1;
    if (f) {
      const m = Kf * Po(
        ae.frameSafeRect || { w: I.width, h: I.height },
        p
      ), y = vp({ width: I.width, height: I.height }, m);
      if (y.halfW < I.width * 0.5 - 1e-6 || y.halfH < I.height * 0.5 - 1e-6) return !1;
    }
    return l.hFOV_deg = p.hFOV_deg, l.vFOV_deg = p.vFOV_deg, mm(), je(), !0;
  }
  function mm() {
    h.frameWheelChanged = !0, h.frameWheelCommitTimer && window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = window.setTimeout(() => {
      h.frameWheelCommitTimer = 0, h.frameWheelChanged && (h.frameWheelChanged = !1, tt(), st(), je());
    }, 180);
  }
  function Ju() {
    return G && h.mode === "frame" && Ga();
  }
  function rs() {
    const i = He(), s = xl(i);
    return i && s ? u0(i, s, { width: I.width, height: I.height }) : null;
  }
  function gm() {
    var i;
    return ((i = jr()) == null ? void 0 : i.radius) || Or;
  }
  function is(i) {
    const { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m } = i.shot;
    return { position: s, yaw_deg: l, pitch_deg: f, roll_deg: p, hFOV_deg: m, distance: gm() };
  }
  function ym(i, s) {
    const { rect: l } = i;
    return $e.pickSurface(Dh(i.shot), s.x - l.x, s.y - l.y, l.w, l.h);
  }
  function bm(i, s, l) {
    return Ff(s, ym(i, l), null, Hr());
  }
  function vm(i) {
    return JSON.stringify([is(i), i.rect]);
  }
  function _m(i) {
    const s = He();
    s.position = [...i.position], s.yaw_deg = i.yaw_deg, s.pitch_deg = i.pitch_deg;
  }
  function wm(i, s) {
    const l = He();
    !l || r || l.locked === !0 || (h.interaction = {
      kind: "pan_frame",
      shot: l,
      last: i,
      start: { yaw_deg: Number(l.yaw_deg || 0), pitch_deg: Number(l.pitch_deg || 0) },
      changed: !1
    }, bt(i), I.setPointerCapture(s));
  }
  function Zw(i, s, l) {
    const f = rs();
    if (!f || r) return;
    const p = is(f);
    h.interaction = i === "orbit" ? { kind: "frame_orbit", last: s, pivot: bm(f, p, s), changed: !1 } : { kind: "frame_pan", last: s, depth: e0(p, Hr()), changed: !1 }, bt(s), I.setPointerCapture(l);
  }
  function Qw(i, s) {
    const l = rs();
    if (!l) return;
    const f = is(l), p = s.x - i.last.x, m = s.y - i.last.y;
    _m(i.kind === "frame_pan" ? r0(f, p, m, l.rect.w, l.rect.h, i.depth) : n0(f, p, m, I.height, i.pivot)), i.changed = i.changed || p !== 0 || m !== 0, i.last = s, ue({ localOnly: !0, cause: "frame_view" });
  }
  function eS(i, s) {
    const l = rs();
    if (!l || r) return;
    const f = is(l), p = performance.now(), m = { x: i.x, y: i.y, time: p, key: $e.contentRevision(), view: vm(l) };
    if (!t0(ai, m)) {
      const y = ym(l, i);
      ai = { ...m, cost: performance.now() - p, hit: y };
    }
    _m(i0(f, Ff(f, ai.hit, null, Hr()), s, Hr())), ai.view = vm(rs() ?? l), ai.wheelTime = p, mm(), je(), ue({ localOnly: !0, cause: "frame_view" });
  }
  function tS() {
    return h.frameWheelCommitTimer && (window.clearTimeout(h.frameWheelCommitTimer), h.frameWheelCommitTimer = 0), h.frameWheelChanged ? (h.frameWheelChanged = !1, tt(), st(), je(), !0) : !1;
  }
  function os() {
    const i = h.interaction;
    if (!(i != null && i.shot) || !i.start || i.kind !== "pan_frame" && i.kind !== "roll_frame") return !1;
    const s = i.kind === "roll_frame";
    return i.kind === "pan_frame" ? (i.shot.yaw_deg = i.start.yaw_deg, i.shot.pitch_deg = i.start.pitch_deg) : i.shot.roll_deg = i.start.roll_deg, s && ao(), h.interaction = null, Ho(), ui(), je(), bt(h.pointerPos), ue({ localOnly: !0 }), !0;
  }
  function nS(i, s) {
    const l = Number(s || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, l / 2048)
    };
  }
  function $i(i) {
    const s = String(i || "").trim();
    return s === "eraser" ? hi : Un[s] ? s : h.activeBrushPresetId || hi;
  }
  function Sm() {
    return (h.primaryTool === "paint" || h.primaryTool === "mask") && (dm() || qu());
  }
  function xm() {
    var i;
    return Sm() && ((i = h.pointerPos) == null ? void 0 : i.inside) === !0;
  }
  function kl(i, s = !0) {
    const l = Number((i == null ? void 0 : i.x) || 0), f = Number((i == null ? void 0 : i.y) || 0), p = s !== !1, m = h.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== p || Math.abs(m.x - l) > 0.01 || Math.abs(m.y - f) > 0.01;
    return h.pointerPos = { x: l, y: f, inside: p }, y;
  }
  function rS() {
    var N, C;
    if (!xm()) return null;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool, l = $i(s), f = Un[l] || Un[hi], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), y = Math.max(3, m * 0.5), w = i === "mask" ? s === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : s === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : ar(h.paintColor), x = i === "mask" ? s === "lasso_fill" ? 0.18 : 0.2 : s === "eraser" ? 0.06 : te(Math.max(0.16, Number(w.a ?? 1) * 0.3), 0.16, 0.52), E = i === "mask" ? 0.95 : s === "eraser" ? 0.75 : te(Math.max(0.46, Number(w.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: i,
      toolKind: s,
      preset: f,
      radius: y,
      fillStyle: Yr(w, x),
      strokeStyle: Yr(w, E),
      x: Number(((N = h.pointerPos) == null ? void 0 : N.x) || 0),
      y: Number(((C = h.pointerPos) == null ? void 0 : C.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function iS() {
    var L, U, K;
    const i = rS();
    if (!Xe) return;
    if (!i) {
      Xe.style.display = "none";
      return;
    }
    let s = i.radius * 2, l = i.radius * 2, f = "999px", p = 0, m = i.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", w = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", E = "rgba(52, 52, 52, 0.72)";
    let N = Number(i.hotspotX ?? s * 0.5), C = Number(i.hotspotY ?? l * 0.5);
    if (i.toolKind === "lasso_fill")
      s = Wc, l = Wc, f = "0", y = "0", w = "none", N = NF, C = PF, m = zF(i.fillStyle, E, x);
    else if (i.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (i.toolKind === "marker") {
      const Q = Math.max(1, Number(((L = i.preset) == null ? void 0 : L.aspect) ?? 1));
      s = Math.max(10, i.radius * 2 * Q), l = Math.max(6, i.radius * 2), f = `${Math.min(6, l * 0.42)}px`, p = Number(((K = (U = i.preset) == null ? void 0 : U.angle) == null ? void 0 : K.value) || 0) * wo;
    } else i.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${i.strokeStyle} 0%, ${i.fillStyle} 45%, rgba(0,0,0,0) 100%)` : i.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    Xe.style.display = "block", Xe.style.width = `${Math.round(s)}px`, Xe.style.height = `${Math.round(l)}px`, Xe.style.borderRadius = f, Xe.style.border = y, Xe.style.boxShadow = w, Xe.style.background = m, Xe.style.backgroundRepeat = "no-repeat", Xe.style.backgroundPosition = "center", Xe.style.backgroundSize = "contain", Xe.style.transform = `translate(${Math.round(i.x - N)}px, ${Math.round(i.y - C)}px) rotate(${p}deg)`;
  }
  function oS() {
    var he;
    if (!Je || !vt) return;
    const i = h.primaryTool === "mask" ? "mask" : "paint", s = i === "mask" ? h.maskTool : h.paintTool;
    if (s === "lasso_fill") return;
    const l = $i(s), f = Un[l] || Un[hi], p = Number(h.brushSizes[l] ?? 10), m = Math.max(1, p) * Math.max(0.1, Number(f.sizeScale ?? 1)), y = Math.max(6, m * 0.5), w = s === "eraser", x = i === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : w ? { r: 1, g: 1, b: 1, a: 0.22 } : ar(h.paintColor), E = i === "mask" ? Yr(x, 0.22) : w ? "rgba(255,255,255,0.14)" : Yr(x, te(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), N = i === "mask" ? Yr(x, 0.96) : w ? "rgba(255,255,255,0.72)" : Yr(x, te(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let C = y * 2, L = y * 2, U = "999px", K = 0, Q = E;
    const ee = "rgba(222, 222, 222, 0.72)", se = "rgba(52, 52, 52, 0.72)";
    if (i === "mask")
      Q = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (s === "marker") {
      const ie = Math.max(1, Number((f == null ? void 0 : f.aspect) ?? 1));
      C = Math.max(16, y * 2 * ie), L = Math.max(10, y * 2), U = `${Math.min(8, L * 0.42)}px`, K = Number(((he = f == null ? void 0 : f.angle) == null ? void 0 : he.value) || 0) * wo;
    } else s === "brush" ? Q = `radial-gradient(circle at 50% 50%, ${N} 0%, ${E} 48%, rgba(0,0,0,0) 100%)` : s === "lasso_fill" ? (C = Math.max(18, y * 1.8), L = C, Q = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${N} 43%, ${N} 58%, rgba(0,0,0,0) 59%)`) : w && (Q = "rgba(255,255,255,0.12)");
    vt.style.width = `${Math.round(C)}px`, vt.style.height = `${Math.round(L)}px`, vt.style.borderRadius = U, vt.style.background = Q, vt.style.border = `1px solid ${ee}`, vt.style.boxShadow = `0 0 0 1px ${se}`, vt.style.transform = `rotate(${K}deg)`, dt && (clearTimeout(dt), dt = 0), Je.classList.remove("fade-out"), Je.classList.add("show");
  }
  function Ml() {
    !Je || !Je.classList.contains("show") || (Je.classList.add("fade-out"), dt && clearTimeout(dt), dt = window.setTimeout(() => {
      Je.classList.remove("show", "fade-out"), dt = 0;
    }, 180));
  }
  function km(i, s, l, f) {
    const p = $i(s), m = Un[p] || Un[hi], y = h.brushSizes[p] ?? 10, w = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), x = nS(f, w), E = l.map((C) => ({
      ...C,
      t: Number((C == null ? void 0 : C.t) || 0),
      widthScale: Number.isFinite(Number(C == null ? void 0 : C.widthScale)) ? Math.max(0, Number(C.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(C == null ? void 0 : C.pressureLike)) ? Math.max(0, Number(C.pressureLike)) : 1
    })), N = {
      id: ra(i),
      actionGroupId: ra("ag"),
      targetSpace: f && typeof f == "object" ? { ...f, viewMode: String(h.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(h.mode || "pano") },
      layerKind: i,
      toolKind: s,
      size: w,
      createdAt: Date.now(),
      color: i === "paint" ? { ...h.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: E.map((C) => ({ ...C })),
        points: E.map((C) => ({ ...C }))
      }
    };
    return K0(N, m), Number(m.aspect ?? 1), Number(N.aspect ?? 1), String(N.stampKind || ""), Number(N.size || 0), String(N.radiusModel || ""), Number(N.radiusValue || 0), { ...N.targetSpace }, N;
  }
  function Mm(i, s, l, f) {
    const p = l.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), m = $i(s), y = Un[m] || Un[hi], w = {
      id: ra(i),
      actionGroupId: ra("ag"),
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
        points: p.map((x) => ({ ...x }))
      }
    };
    return K0(w, y), Number(y.aspect ?? 1), Number(w.aspect ?? 1), String(w.stampKind || ""), { ...w.targetSpace }, w;
  }
  function Yo(i) {
    const s = _.painting || (_.painting = ga(null)), l = s[i] || (s[i] = { strokes: [] });
    return Array.isArray(l.strokes) || (l.strokes = []), l.strokes;
  }
  function aS(i, s, l = performance.now()) {
    let f;
    if (h.mode === "frame") {
      const E = He();
      if (!E || (f = Er(s, E, l), !f)) return !1;
    } else
      f = Ir(s, l);
    if (!f) return !1;
    const p = i.stroke.geometry.rawPoints || i.stroke.geometry.points, m = i.stroke.geometry.points, y = p[p.length - 1];
    if (y) {
      const E = Math.abs(Number(f.u ?? f.x ?? 0) - Number(y.u ?? y.x ?? 0)), N = Math.abs(Number(f.v ?? f.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (E < 15e-4 && N < 15e-4) return !1;
    }
    const w = {
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    p.push({ ...w }), m.push({ ...w });
    const x = ir();
    if (x) {
      const E = h.paintEngine.ensureTarget(x);
      h.paintEngine.appendStrokePoint(E, Number(w.u ?? 0), Number(w.v ?? 0), i.stroke);
    }
    return !0;
  }
  function sS(i, s, l = performance.now()) {
    var y, w;
    let f;
    if (h.mode === "frame") {
      const x = He();
      if (!x) return !1;
      f = Er(s, x, l);
    } else
      f = Ir(s, l);
    const p = (w = (y = i == null ? void 0 : i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : w.points;
    if (!f || !Array.isArray(p)) return !1;
    const m = p[p.length - 1];
    if (m) {
      const x = Math.abs(Number(f.u ?? f.x ?? 0) - Number(m.u ?? m.x ?? 0)), E = Math.abs(Number(f.v ?? f.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (x < 15e-4 && E < 15e-4) return !1;
    }
    return p.push({
      ...f,
      t: Number((f == null ? void 0 : f.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function lS(i) {
    var ie, _e, Ue, Ze, lt;
    const s = (i == null ? void 0 : i.stroke) || null;
    if (!s || (i == null ? void 0 : i.layerKind) !== "paint" || String((s == null ? void 0 : s.toolKind) || "") !== "eraser") return !1;
    qa();
    const l = ir(), f = Ua(l.width, l.height);
    if (!Wh(f, s, { w: l.width, h: l.height })) return !1;
    const p = ((_e = (ie = f.ctx) == null ? void 0 : ie.getImageData(0, 0, l.width, l.height)) == null ? void 0 : _e.data) || null;
    if (!p) return !1;
    const m = new Map(Nn().map((xe) => [String((xe == null ? void 0 : xe.actionGroupId) || (xe == null ? void 0 : xe.id) || "").trim(), xe ? { ...xe } : null])), y = [], w = [], x = [...Kn().filter((xe) => String((xe == null ? void 0 : xe.layerKind) || "paint") !== "paint")];
    let E = !1, N = Ro().reduce((xe, de) => Math.max(xe, Number((de == null ? void 0 : de.z_index) || 0)), -1) + 1;
    function C(xe, de, Se, ze = 8) {
      let Ge = de, it = Se, ct = -1, Tt = -1;
      for (let ut = 0; ut < Se; ut += 1)
        for (let sn = 0; sn < de; sn += 1)
          xe[(ut * de + sn) * 4 + 3] <= ze || (sn < Ge && (Ge = sn), ut < it && (it = ut), sn > ct && (ct = sn), ut > Tt && (Tt = ut));
      return ct < Ge || Tt < it ? null : { minX: Ge, minY: it, maxX: ct, maxY: Tt };
    }
    const L = C(p, l.width, l.height, 8);
    if (!L) return !1;
    function U(xe, de) {
      return !xe || !de ? !1 : !(xe.maxX < de.minX || de.maxX < xe.minX || xe.maxY < de.minY || de.maxY < xe.minY);
    }
    function K(xe, de) {
      const Se = Ci((xe == null ? void 0 : xe.actionGroupId) || (xe == null ? void 0 : xe.id) || "", "paint", de);
      if (!Se) return null;
      const ze = Se.centerUv.u - Se.halfW, Ge = Se.centerUv.u + Se.halfW, it = Se.centerUv.v - Se.halfH, ct = Se.centerUv.v + Se.halfH, Tt = l.width, ut = l.height;
      return {
        minX: Math.floor((ze % 1 + 1) % 1 * Tt),
        maxX: Math.ceil((Ge % 1 + 1) % 1 * Tt),
        minY: Math.floor(te(it, 0, 1) * ut),
        maxY: Math.ceil(te(ct, 0, 1) * ut),
        wraps: Ge - ze >= 1 || ze < 0 || Ge > 1
      };
    }
    function Q(xe) {
      const de = (xe == null ? void 0 : xe.bbox) || null;
      if (!de) return null;
      const Se = (xe == null ? void 0 : xe.transform) || {}, ze = l.width, Ge = l.height, it = Number(de.u0 || 0) + Number(Se.du || 0), ct = Number(de.u1 || 0) + Number(Se.du || 0), Tt = Number(de.v0 || 0) + Number(Se.dv || 0), ut = Number(de.v1 || 0) + Number(Se.dv || 0);
      return {
        minX: Math.floor((it % 1 + 1) % 1 * ze),
        maxX: Math.ceil((ct % 1 + 1) % 1 * ze),
        minY: Math.floor(te(Tt, 0, 1) * Ge),
        maxY: Math.ceil(te(ut, 0, 1) * Ge),
        wraps: ct - it >= 1 || it < 0 || ct > 1
      };
    }
    function ee(xe) {
      return xe ? xe.wraps ? U(L, { minX: 0, maxX: xe.maxX, minY: xe.minY, maxY: xe.maxY }) || U(L, { minX: xe.minX, maxX: l.width - 1, minY: xe.minY, maxY: xe.maxY }) : U(L, xe) : !0;
    }
    function se(xe) {
      if (!xe) return { touched: !1, canvas: null };
      const de = Ua(l.width, l.height, { readback: !0 });
      de.ctx.drawImage(xe, 0, 0);
      const Se = de.ctx.getImageData(0, 0, l.width, l.height);
      de.ctx.save(), de.ctx.globalCompositeOperation = "destination-out", de.ctx.drawImage(f.canvas, 0, 0), de.ctx.restore();
      const ze = de.ctx.getImageData(0, 0, l.width, l.height);
      for (let Ge = 0; Ge < l.width * l.height; Ge += 1) {
        if (p[Ge * 4 + 3] <= 8) continue;
        const ct = Se.data[Ge * 4 + 3], Tt = ze.data[Ge * 4 + 3];
        if (ct > Tt)
          return { touched: !0, canvas: de.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function he(xe, de, Se) {
      const ze = Number(Se == null ? void 0 : Se.z_index), Ge = nw(xe, de, Se).map((it, ct) => ({
        ...it,
        z_index: Number.isFinite(ze) ? ze + ct * 1e-3 : N + ct * 1e-3
      }));
      return Ge.length && (N = Math.max(N, ...Ge.map((it) => Number((it == null ? void 0 : it.z_index) || 0))) + 1), Ge;
    }
    for (const xe of Nn()) {
      const de = String((xe == null ? void 0 : xe.actionGroupId) || (xe == null ? void 0 : xe.id) || "").trim();
      if (!de) continue;
      const Se = Pr(de, "paint");
      if (!ee(K(xe, Se))) {
        w.push(xe), y.push(...Se);
        continue;
      }
      const ze = ((Ze = (Ue = h.paintEngine) == null ? void 0 : Ue.getGroupTarget) == null ? void 0 : Ze.call(Ue, de)) || null, Ge = ((lt = ze == null ? void 0 : ze.committedPaint) == null ? void 0 : lt.canvas) || null;
      if (!Ge) {
        w.push(xe), y.push(...Se);
        continue;
      }
      const it = se(Ge);
      if (!it.touched || !it.canvas) {
        w.push(xe), y.push(...Se);
        continue;
      }
      E = !0;
      const ct = he(it.canvas, "paint", m.get(de) || xe || {});
      x.push(...ct);
    }
    for (const xe of Kn().filter((de) => String((de == null ? void 0 : de.layerKind) || "paint") === "paint")) {
      if (!ee(Q(xe))) {
        x.push(xe);
        continue;
      }
      const de = Ah(xe, null);
      if (!de) {
        x.push(xe);
        continue;
      }
      const Se = se(de);
      if (!Se.touched || !Se.canvas) {
        x.push(xe);
        continue;
      }
      E = !0;
      const ze = he(Se.canvas, "paint", xe);
      x.push(...ze);
    }
    return E ? (_.painting.paint.strokes = y, _.painting.groups = w.sort((xe, de) => Number((xe == null ? void 0 : xe.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0)), _.painting.raster_objects = x.sort((xe, de) => Number((xe == null ? void 0 : xe.z_index) || 0) - Number((de == null ? void 0 : de.z_index) || 0)), Ha({ preservePanelValues: !1 }), !0) : !1;
  }
  function cS(i) {
    var y, w, x, E, N;
    if ((((w = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : w.rawPoints) || ((E = (x = i.stroke) == null ? void 0 : x.geometry) == null ? void 0 : E.points) || []).length >= 1) {
      Zu(i);
      const C = ir();
      C && (String(((N = i.stroke) == null ? void 0 : N.toolKind) || "") === "eraser" ? h.paintEngine.cancelActiveStroke(C) : h.paintEngine.commitActiveStroke(i.stroke, C)), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = km(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = ir();
    m && h.paintEngine.beginStroke(p, m);
  }
  function uS(i) {
    var y, w;
    if ((((w = (y = i.stroke) == null ? void 0 : y.geometry) == null ? void 0 : w.points) || []).length >= 3) {
      Zu(i);
      const x = ir();
      x && h.paintEngine.commitActiveStroke(i.stroke, x), i._hasCommittedSegments = !0;
    }
    const l = i.stroke, f = { kind: "ERP_GLOBAL", viewMode: String(h.mode || "frame") }, p = Mm(i.layerKind, l.toolKind, [], f);
    p.actionGroupId = l.actionGroupId, i.stroke = p;
    const m = ir();
    m && h.paintEngine.beginStroke(p, m);
  }
  function Zu(i) {
    var m, y, w, x;
    const s = ((m = i == null ? void 0 : i.stroke) == null ? void 0 : m.geometry) || null;
    if (!s) return !1;
    const l = String(((y = i == null ? void 0 : i.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (i.layerKind === "paint" && l === "eraser")
      return s.geometryKind !== "lasso_fill" && (s.processedPoints = Gu(s.rawPoints || s.points || [], i.stroke.targetSpace, !0)), lS(i);
    const f = i.layerKind === "paint" && l !== "eraser";
    if (s.geometryKind === "lasso_fill")
      return (Array.isArray(s.points) ? s.points : []).length < 3 ? !1 : (f && th((w = i.stroke) == null ? void 0 : w.actionGroupId), Yo(i.layerKind).push(i.stroke), !0);
    const p = s.rawPoints || s.points || [];
    return p.length < 1 ? !1 : (s.processedPoints = Gu(p, i.stroke.targetSpace, !0), f && th((x = i.stroke) == null ? void 0 : x.actionGroupId), Yo(i.layerKind).push(i.stroke), !0);
  }
  function Nm(i) {
    var l;
    if (R && h.mode === "frame") {
      const f = He(), p = mn(f);
      if (!f || !p || !(Number((i == null ? void 0 : i.x) || 0) >= Number(p.x || 0) && Number((i == null ? void 0 : i.x) || 0) <= Number(p.x || 0) + Number(p.w || 0) && Number((i == null ? void 0 : i.y) || 0) >= Number(p.y || 0) && Number((i == null ? void 0 : i.y) || 0) <= Number(p.y || 0) + Number(p.h || 0))) return null;
      const y = Er(i, f, performance.now()), w = y ? Ko(y) : null;
      if (w)
        for (const E of ju()) {
          if (!At(E)) continue;
          const N = Za(E, w);
          if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
            const C = on(E);
            if (C != null && C.visible) return { item: E, geom: C };
          }
        }
      const x = gu(!1).slice().sort((E, N) => Number((N == null ? void 0 : N.z_index) || 0) - Number((E == null ? void 0 : E.z_index) || 0));
      for (const E of x) {
        if (E.type === "strokeGroup") {
          const L = $o(Ra("paint", E.actionGroupId || E.id || ""));
          if (!L) continue;
          const U = on(L);
          if (!(U != null && U.visible)) continue;
          const K = Array.isArray(U.strokePaths) ? U.strokePaths : [];
          for (const Q of K) {
            const ee = Array.isArray(Q == null ? void 0 : Q.points) ? Q.points : [];
            if (!ee.length) continue;
            if (Q.closed && ee.length >= 3 && ji(i, ee)) return { item: L, geom: U };
            const se = Math.max(8, Number((Q == null ? void 0 : Q.lineWidth) || 0) * 0.5 + 6);
            for (let he = 0; he < ee.length - 1; he += 1)
              if (Jf(i, ee[he], ee[he + 1]) <= se * se) return { item: L, geom: U };
            if (ee.length === 1 && ks(i, ee[0]) <= se * se) return { item: L, geom: U };
          }
          continue;
        }
        if (E.type === "rasterObject") {
          const L = Vo(Va(((l = E.item) == null ? void 0 : l.id) || E.id || ""));
          if (!L) continue;
          const U = on(L);
          if (Ph(L, U, i, y)) return { item: L, geom: U };
          continue;
        }
        const N = E.item;
        if (!N || !At(N) || !w) continue;
        const C = Za(N, w);
        if (C && Number(C.x) >= 0 && Number(C.x) <= 1 && Number(C.y) >= 0 && Number(C.y) <= 1) {
          const L = on(N);
          if (L != null && L.visible) return { item: N, geom: L };
        }
      }
      return null;
    }
    const s = [
      ...gu(!1).slice().sort((f, p) => Number((p == null ? void 0 : p.z_index) || 0) - Number((f == null ? void 0 : f.z_index) || 0)).map((f) => {
        var p;
        return f.type === "strokeGroup" ? $o(Ra("paint", f.actionGroupId || f.id || "")) : f.type === "rasterObject" ? Vo(Va(((p = f.item) == null ? void 0 : p.id) || f.id || "")) : f.item;
      }).filter(Boolean),
      ...R ? ju().filter((f) => un(f)) : []
    ];
    for (const f of s) {
      if (fn(f)) {
        const m = on(f);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const w of y) {
          const x = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!x.length) continue;
          if (w.closed && x.length >= 3 && ji(i, x)) return { item: f, geom: m };
          const E = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let N = 0; N < x.length - 1; N += 1)
            if (Jf(i, x[N], x[N + 1]) <= E * E) return { item: f, geom: m };
          if (x.length === 1 && ks(i, x[0]) <= E * E) return { item: f, geom: m };
        }
        continue;
      }
      if (vn(f)) {
        const m = on(f);
        if (!(m != null && m.visible)) continue;
        if (Ph(f, m, i)) return { item: f, geom: m };
        continue;
      }
      const p = on(f);
      if (p.visible && ji(i, p.corners))
        return { item: f, geom: p };
    }
    return null;
  }
  function as(i, s, l = null) {
    if (!i || !i.visible) return { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    if (At(l)) return Dd(i, s);
    if (i.kind === "strokeGroup") {
      const f = i.corners.findIndex((m) => ks(m, s) <= 121);
      if (f >= 0) {
        const m = i.corners[f], y = m.x - i.center.x, w = m.y - i.center.y, x = y * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: x };
      }
      const p = Array.isArray(i.strokePaths) ? i.strokePaths : [];
      for (const m of p) {
        const y = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && y.length >= 3 && ji(s, y)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < y.length - 1; x += 1)
          if (Jf(s, y[x], y[x + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return ji(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    if (i.kind === "rasterObject") {
      const f = i.corners.findIndex((p) => ks(p, s) <= 121);
      if (f >= 0) {
        const p = i.corners[f], m = p.x - i.center.x, y = p.y - i.center.y, w = m * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: f, cursor: w };
      }
      return ji(s, i.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: h.mode === "pano" ? "grab" : "default" };
    }
    return WP(i, s, {
      edges: t === "cutout" || un(l),
      resize: !(un(l) && ro()),
      emptyCursor: h.mode === "pano" ? "grab" : "default"
    });
  }
  function Pm(i, s) {
    return {
      x0: Math.min(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y0: Math.min(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0)),
      x1: Math.max(Number((i == null ? void 0 : i.x) || 0), Number((s == null ? void 0 : s.x) || 0)),
      y1: Math.max(Number((i == null ? void 0 : i.y) || 0), Number((s == null ? void 0 : s.y) || 0))
    };
  }
  function fS(i, s) {
    return !!i && !!s && Number(s.x) >= Number(i.x0) && Number(s.x) <= Number(i.x1) && Number(s.y) >= Number(i.y0) && Number(s.y) <= Number(i.y1);
  }
  function dS(i, s) {
    if (!i || !(s != null && s.visible) || !Array.isArray(s.corners)) return !1;
    if (s.corners.some((p) => fS(i, p))) return !0;
    const l = (Number(i.x0) + Number(i.x1)) * 0.5, f = (Number(i.y0) + Number(i.y1)) * 0.5;
    return !!ji({ x: l, y: f }, s.corners);
  }
  function bt(i) {
    if (iS(), h.interaction) {
      h.interaction.kind === "paint_stroke" || h.interaction.kind === "paint_lasso_fill" ? gt("none") : h.interaction.kind === "view" || h.interaction.kind === "pan_frame" ? gt("grabbing") : h.interaction.kind === "space_pan" || h.interaction.kind === "frame_pan" ? gt("move") : h.interaction.kind === "space_orbit" || h.interaction.kind === "frame_orbit" || h.interaction.kind === "world_gizmo" || h.interaction.kind === "roll_frame" ? gt("grabbing") : h.interaction.kind === "move" || h.interaction.kind === "move_multi" || h.interaction.kind === "move_stroke_group" || h.interaction.kind === "move_raster_object" ? gt("move") : h.interaction.kind === "scale" || h.interaction.kind === "scale_x" || h.interaction.kind === "scale_y" || h.interaction.kind === "scale_raster_object" ? gt(h.interaction.cursor || "nwse-resize") : h.interaction.kind === "rotate" ? gt("grabbing") : gt("default");
      return;
    }
    if (xm()) {
      gt("none");
      return;
    }
    if (h.mode === "frame") {
      if (h.altModifier && !r) {
        gt(SF);
        return;
      }
      if (h.primaryTool !== "cursor") {
        gt("default");
        return;
      }
      gt("grab");
      return;
    }
    if (h.primaryTool === "cursor" && h.marqueeModifier) {
      gt("default");
      return;
    }
    if (h.gizmoAxis) {
      gt("grab");
      return;
    }
    const s = Ft(), l = s ? on(s) : null, f = s ? _n(s) : !1, p = f ? { kind: "none", cursor: "default" } : as(l, i, s);
    if (!f && p.kind !== "none") {
      gt(p.cursor);
      return;
    }
    if (h.primaryTool === "cursor" && Nm(i)) {
      gt("default");
      return;
    }
    gt(h.mode === "pano" ? "grab" : "default");
  }
  function Ke() {
    if (!we) return;
    if (Oe = !1, h.mode === "frame") {
      F.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (h.worldSelectedId || mr() && hr()) {
      const p = pS();
      Oe = p.visible, Am(p);
      return;
    }
    const i = Ft(), s = rr();
    if (!i && s.length === 0 || h.interaction) {
      F.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const l = ja(), f = rI({
      type: t,
      selected: i,
      selectedItems: s,
      selectedKind: l,
      geom: s.length > 1 ? za(s) : on(i),
      allLocked: _u(s),
      anyLocked: s.some((p) => _n(p)),
      selectedLocked: _n(i),
      activeAspect: un(i) && ro() ? Sa : yi(i),
      cutoutAspectOpen: h.cutoutAspectOpen,
      isExternalSticker: Xt,
      isStickerHidden: zo,
      canRestoreSelectedToInitial: Fv,
      iconSet: Pe,
      cameraShot: G,
      cameraDeletable: O,
      erpChoice: O,
      coverage: _.coverage
    });
    Am(f);
  }
  function pS() {
    const i = io() && !h.interaction ? Ar().space : null;
    if (!(i != null && i.gizmo)) return { visible: !1 };
    const s = Xo(), l = i.stickers.find((y) => y.id === h.worldSelectedId), p = (l ? Dp(l) : [i.gizmo.transform.position]).map((y) => Us(s, y, I.width, I.height)).filter(Boolean), m = N2(s, i.gizmo.transform.position, i.gizmo.mode, I.width, I.height);
    return iI({ corners: p, gizmoBox: m, gizmoMode: i.gizmo.mode, camera: mr(), deletable: O && mr() });
  }
  function Am(i) {
    var m, y;
    if (!i.visible) {
      F.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = (w, x) => oI(i.anchor, w, x, I.width, I.height), l = Math.max(1, Number(((m = h.menuSize) == null ? void 0 : m.w) || 220)), f = Math.max(1, Number(((y = h.menuSize) == null ? void 0 : y.h) || 40)), p = s(l, f);
    if (!p) {
      F.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    F.selectionMenu = {
      visible: !0,
      left: p.left,
      top: p.top,
      items: i.items
    }, Be.requestFrame(() => {
      if (!we || F.selectionMenu.visible !== !0) return;
      const w = we.getBoundingClientRect(), x = Math.round(Number((w == null ? void 0 : w.width) || 0)) || 220, E = Math.round(Number((w == null ? void 0 : w.height) || 0)) || 40;
      h.menuSize = { w: x, h: E, measured: !0 };
      const N = s(x, E);
      N && (F.selectionMenu.left = N.left, F.selectionMenu.top = N.top);
    });
  }
  function ao() {
    Ut.timer && (clearTimeout(Ut.timer), Ut.timer = 0), Ut.target = null, F.tooltip.visible = !1;
  }
  function hS(i) {
    if (!Ne || !i || !i.isConnected) return;
    const s = String(i.getAttribute("data-tip") || "").trim();
    if (!s) return;
    F.tooltip.text = s, F.tooltip.visible = !0;
    const l = i;
    Be.requestFrame(() => {
      var Q, ee;
      if (Ut.target !== l || !Ne || !(l != null && l.isConnected)) return;
      const f = ce.getBoundingClientRect(), p = l.getBoundingClientRect(), m = 8, y = 12, w = Math.round(Number(((Q = Ne.getBoundingClientRect()) == null ? void 0 : Q.width) || 0)) || 100, x = Math.round(Number(((ee = Ne.getBoundingClientRect()) == null ? void 0 : ee.height) || 0)) || 24, E = !!l.closest(".pano-floating-left"), N = !!l.closest(".pano-frame-rail"), C = !!l.closest(".pano-paint-footer") || !!l.closest(".pano-paint-color-float");
      let L = "", U = p.left - f.left + p.width * 0.5 - w * 0.5, K = p.top - f.top - x - y;
      if (l.closest(".pano-floating-top") && (K = p.bottom - f.top + y), E)
        L = "tool-rail", U = p.right - f.left + 10, K = p.top - f.top + p.height * 0.5 - x * 0.5, U = te(U, m, Math.max(m, f.width - w - m)), K = te(K, m, Math.max(m, f.height - x - m));
      else if (N)
        L = "frame-rail", U = p.left - f.left - w - 10, K = p.top - f.top + p.height * 0.5 - x * 0.5, U = te(U, m, Math.max(m, f.width - w - m)), K = te(K, m, Math.max(m, f.height - x - m));
      else if (C) {
        L = "footer";
        const se = l.closest(".pano-paint-footer"), he = se ? se.getBoundingClientRect() : p;
        U = he.left - f.left + he.width * 0.5 - w * 0.5, K = he.bottom - f.top + 5, U = te(U, m, Math.max(m, f.width - w - m)), K = Math.max(m, K);
      }
      U = te(U, m, Math.max(m, f.width - w - m)), K = Math.max(m, K), F.tooltip.left = U, F.tooltip.top = K, F.tooltip.variant = L, F.tooltip.visible = !0;
    });
  }
  const an = mp({
    getView: () => ({ yaw: h.viewYaw, pitch: h.viewPitch, fov: h.viewFov }),
    setView: (i) => {
      h.viewYaw = Ht(Number(i.yaw || 0)), h.viewPitch = te(Number(i.pitch || 0), -89.9, 89.9), h.viewFov = te(Number(i.fov || h.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const i = I.getBoundingClientRect();
      return {
        w: Math.max(1, Number(i.width || I.clientWidth || 0)),
        h: Math.max(1, Number(i.height || I.clientHeight || 0))
      };
    },
    getInvert: () => {
      var i, s;
      return {
        x: (i = _.ui_settings) != null && i.invert_view_x ? -1 : 1,
        y: (s = _.ui_settings) != null && s.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: Di,
    onInteraction: () => Be.requestDraw(Nt.VIEW)
  });
  function mS(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    i.accumulatedRad += fb(s, i.lastAngle), i.lastAngle = s;
    const f = db(i.start.roll_deg, i.accumulatedRad, {
      shiftKey: l.shiftKey,
      altKey: i.altStarted ? !1 : l.altKey
    });
    i.shot.roll_deg = f, i.changed = i.changed || Math.abs(i.accumulatedRad) > 1e-9;
    const p = (((m = F.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    p && (p.value = f, p.displayValue = na(f), p.fillPct = (f + 180) / 360 * 100), di(), Qu(i), ue({ localOnly: !0 });
  }
  function gS(i, s, l = {}) {
    var m;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot || !i.rollGesture) return;
    const f = D1(i.rollGesture, s, l);
    if (!f) return;
    i.rollGesture = f.gesture, i.center = f.gesture.center, i.lastAngle = f.gesture.lastAngle, i.accumulatedRad = f.gesture.accumulatedRad, i.shot.roll_deg = f.rollDeg, i.changed = i.changed || Math.abs(f.gesture.accumulatedRad) > 1e-9;
    const p = (((m = F.sidePanel) == null ? void 0 : m.params) || []).find((y) => y.key === "roll_deg");
    p && (p.value = f.rollDeg, p.displayValue = na(f.rollDeg), p.fillPct = (f.rollDeg + 180) / 360 * 100), di(), Qu(i), ue({ localOnly: !0 });
  }
  const Cm = (i, s) => {
    const l = Vi(i);
    return Math.atan2(l.y - s.y, l.x - s.x);
  };
  function Qu(i) {
    var y, w;
    if ((i == null ? void 0 : i.kind) !== "roll_frame" || !i.shot) return;
    Ut.timer && (clearTimeout(Ut.timer), Ut.timer = 0), Ut.target = null;
    const s = mn(i.shot), l = (y = I.getBoundingClientRect) == null ? void 0 : y.call(I), f = (w = ce.getBoundingClientRect) == null ? void 0 : w.call(ce);
    if (!s || !l || !f || I.width <= 0 || I.height <= 0) return;
    const p = l.width / I.width, m = l.height / I.height;
    F.tooltip.text = `${na(i.shot.roll_deg)}°`, F.tooltip.left = l.left - f.left + (s.x + s.w * 0.5) * p, F.tooltip.top = l.top - f.top + (s.y + s.h * 0.5) * m + 12, F.tooltip.variant = "roll", F.tooltip.visible = !0;
  }
  X == null || X.addEventListener("pointerdown", (i) => {
    var m;
    if (i.button !== 0 || r || h.mode !== "frame") return;
    const s = He();
    if (!s || s.locked === !0) return;
    const l = mn(s);
    if (!l) return;
    const f = { x: l.x + l.w * 0.5, y: l.y + l.h * 0.5 }, p = Cm(i, f);
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
    }, (m = X.setPointerCapture) == null || m.call(X, i.pointerId), i.preventDefault(), di(), Qu(h.interaction), ue({ localOnly: !0 });
  }), X == null || X.addEventListener("pointermove", (i) => {
    var s;
    ((s = h.interaction) == null ? void 0 : s.kind) !== "roll_frame" || h.interaction.source !== "knob" || mS(
      h.interaction,
      Cm(i, h.interaction.center),
      i
    );
  });
  const yS = () => {
    const i = h.interaction;
    (i == null ? void 0 : i.kind) !== "roll_frame" || i.source !== "knob" || (i.changed && (tt(), st(), je()), h.interaction = null, ao(), ui(), di(), ue());
  };
  X == null || X.addEventListener("pointerup", yS), X == null || X.addEventListener("pointercancel", () => os()), X == null || X.addEventListener("lostpointercapture", () => {
    var i;
    ((i = h.interaction) == null ? void 0 : i.source) === "knob" && os();
  }), X == null || X.addEventListener("dblclick", (i) => {
    const s = h.mode === "frame" && !r ? He() : null;
    !s || s.locked === !0 || Math.abs(Number(s.roll_deg ?? s.rot_deg ?? 0)) <= 1e-9 || (s.roll_deg = 0, tt(), st(), je(), di(), ue(), i.preventDefault());
  }), I.onpointerdown = (i) => {
    Ye.selection && (Ye.selection = null, Gr());
    const s = Vi(i);
    dr = s, kl(s, !0), Da(), an.state.inertia.active = !1, an.state.inertia.vx = 0, an.state.inertia.vy = 0;
    const l = hr(), f = Ju(), p = l || f ? oA(Cu(), i) : null;
    if (f && p) {
      i.preventDefault(), p === "look" ? wm(s, i.pointerId) : Zw(p, s, i.pointerId);
      return;
    }
    if (p === "look") {
      i.preventDefault();
      const N = Sl(i);
      h.interaction = { kind: "view", last: N, lastTs: performance.now() }, an.startDrag(N.x, N.y, i.pointerId, performance.now()), bt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    if (p) {
      i.preventDefault(), Mh(p, s, i.pointerId);
      return;
    }
    if ((l || f) && i.button !== 0) {
      i.preventDefault();
      return;
    }
    if (i.button === 1) {
      if (i.preventDefault(), h.mode === "frame") {
        const N = He();
        if (!N || r || N.locked === !0) return;
        h.interaction = {
          kind: "pan_frame",
          shot: N,
          last: s,
          start: {
            yaw_deg: Number(N.yaw_deg || 0),
            pitch_deg: Number(N.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const N = h.mode === "unwrap" ? s : Sl(i);
        h.interaction = { kind: "view", last: N, lastTs: performance.now() }, an.startDrag(N.x, N.y, i.pointerId, performance.now());
      }
      bt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    if (i.button !== 0) return;
    if (h.mode === "frame" && (i.altKey || i.shiftKey) && !r) {
      const N = He(), C = mn(N);
      if (!N || N.locked === !0 || !C) return;
      const L = T1({
        frame: C,
        point: s,
        startRollDeg: Number(N.roll_deg ?? N.rot_deg ?? 0),
        shiftKey: i.shiftKey,
        altKey: i.altKey,
        allowAlt: !0
      });
      if (!L) return;
      h.interaction = {
        kind: "roll_frame",
        shot: N,
        center: L.center,
        lastAngle: L.lastAngle,
        accumulatedRad: L.accumulatedRad,
        rollGesture: L,
        start: { roll_deg: Number(N.roll_deg ?? N.rot_deg ?? 0) },
        changed: !1,
        altStarted: L.source === "alt",
        source: L.source
      }, I.setPointerCapture(i.pointerId), i.preventDefault(), di(), ue({ localOnly: !0 });
      return;
    }
    if (h.mode === "frame" && h.primaryTool === "cursor") {
      wm(s, i.pointerId), i.preventDefault();
      return;
    }
    if (r) {
      h.mode === "pano" && Om(i, s);
      return;
    }
    if (Me && !Me.hidden)
      return;
    if ((h.primaryTool === "paint" || h.primaryTool === "mask") && (dm() || qu())) {
      if (!cl()) return;
      Sn();
      const N = h.primaryTool === "mask" ? "mask" : "paint", C = h.primaryTool === "mask" ? h.maskTool : h.paintTool, L = h.mode === "frame" && qu() ? He() : null, U = { kind: "ERP_GLOBAL" }, K = L ? Er(s, L, performance.now()) : Ir(s, performance.now());
      if (!K) {
        bt(s);
        return;
      }
      h.interaction = {
        kind: C === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: N,
        _livePreviewToken: ra("live"),
        stroke: C === "lasso_fill" ? Mm(N, C, [K], U) : km(N, C, [K], U)
      }, Ho();
      const Q = ir();
      if (Q)
        if (h.paintEngine.beginStroke(h.interaction.stroke, Q), h.interaction.kind === "paint_stroke") {
          const ee = h.paintEngine.ensureTarget(Q), se = Number((K == null ? void 0 : K.u) ?? (K == null ? void 0 : K.x) ?? 0), he = Number((K == null ? void 0 : K.v) ?? (K == null ? void 0 : K.y) ?? 0);
          h.paintEngine.appendStrokePoint(ee, se, he, h.interaction.stroke);
        } else
          h.paintEngine.updateActiveStroke(h.interaction.stroke, Q);
      bt(s), I.setPointerCapture(i.pointerId), ue();
      return;
    }
    const m = rr(), y = Ft(), w = m.length > 1 ? za(m) : y ? on(y) : null;
    if (h.primaryTool === "cursor" && (i.ctrlKey || i.metaKey)) {
      h.interaction = { kind: "marquee_select", start: s, current: s }, bt(s), I.setPointerCapture(i.pointerId), ue({ localOnly: !0, reason: Nt.OVERLAY });
      return;
    }
    if (h.primaryTool === "cursor" && zr() && hr() && w_(i, s) || h.primaryTool === "cursor" && P && io() && bS(i, s)) return;
    if (m.length > 1 && (w != null && w.visible)) {
      if ((m.some((C) => _n(C)) ? { kind: "none" } : as(w, s)).kind === "move") {
        h.interaction = {
          kind: "move_multi",
          items: m.map((C) => C),
          offset: { x: s.x - w.center.x, y: s.y - w.center.y },
          startCenter: { x: w.center.x, y: w.center.y },
          stickerSnapshots: m.filter((C) => At(C)).map((C) => ({
            id: String(C.id || ""),
            yaw_deg: Number(cn(C).yaw_deg || 0),
            pitch_deg: Number(cn(C).pitch_deg || 0),
            center: (() => {
              var U, K;
              const L = on(C);
              return L != null && L.visible ? { x: Number(((U = L.center) == null ? void 0 : U.x) || 0), y: Number(((K = L.center) == null ? void 0 : K.y) || 0) } : { x: s.x, y: s.y };
            })()
          })),
          strokeSnapshots: m.filter((C) => fn(C)).map((C) => ({
            id: String(C.actionGroupId || C.id || ""),
            layerKind: String(C.layerKind || "paint"),
            snapshot: An(Pr(C.actionGroupId, C.layerKind)),
            frameSnapshot: An(Ci(C.actionGroupId, C.layerKind)),
            center: (() => {
              var U, K;
              const L = on(C);
              return L != null && L.visible ? { x: Number(((U = L.center) == null ? void 0 : U.x) || 0), y: Number(((K = L.center) == null ? void 0 : K.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: vu(C.actionGroupId, C.layerKind)
          })),
          rasterSnapshots: m.filter((C) => vn(C)).map((C) => ({
            id: yn(C.rasterObjectId || C.id || ""),
            snapshot: An(Kn().find((L) => String((L == null ? void 0 : L.id) || "") === yn(C.rasterObjectId || C.id || ""))),
            center: (() => {
              var U, K;
              const L = on(C);
              return L != null && L.visible ? { x: Number(((U = L.center) == null ? void 0 : U.x) || 0), y: Number(((K = L.center) == null ? void 0 : K.y) || 0) } : { x: s.x, y: s.y };
            })(),
            centerUv: Fh(C)
          }))
        }, bt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    } else if (y && (w != null && w.visible)) {
      const N = _n(y) ? { kind: "none" } : as(w, s, y);
      if (N.kind === "scale") {
        h.interaction = fn(y) ? {
          kind: "scale_stroke_group",
          item: y,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: An(Pr(y.actionGroupId, y.layerKind)),
          frameSnapshot: An(Ci(y.actionGroupId, y.layerKind)),
          cursor: N.cursor
        } : vn(y) ? {
          kind: "scale_raster_object",
          item: y,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          snapshot: An(Kn().find((C) => String((C == null ? void 0 : C.id) || "") === yn(y.rasterObjectId || y.id || ""))),
          cursor: N.cursor
        } : {
          kind: "scale",
          item: y,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          startHFOV: Number(cn(y).hFOV_deg || 20),
          startVFOV: Number(cn(y).vFOV_deg || 20),
          cursor: N.cursor
        }, bt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (N.kind === "scale_x" || N.kind === "scale_y") {
        h.interaction = {
          kind: N.kind,
          item: y,
          center: w.center,
          startDist: Math.max(1, Math.hypot(s.x - w.center.x, s.y - w.center.y)),
          startHFOV: Number(cn(y).hFOV_deg || 20),
          startVFOV: Number(cn(y).vFOV_deg || 20),
          cursor: N.cursor,
          edge: N.edge
        }, bt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (N.kind === "rotate") {
        h.interaction = fn(y) ? {
          kind: "rotate_stroke_group",
          item: y,
          center: w.center,
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x),
          snapshot: An(Pr(y.actionGroupId, y.layerKind)),
          frameSnapshot: An(Ci(y.actionGroupId, y.layerKind))
        } : {
          kind: "rotate",
          item: y,
          center: w.center,
          startRot: Number(cn(y).rot_deg || cn(y).roll_deg || 0),
          startAng: Math.atan2(s.y - w.center.y, s.x - w.center.x)
        }, bt(s), I.setPointerCapture(i.pointerId);
        return;
      }
      if (N.kind === "move") {
        if (fn(y)) {
          const C = h.mode === "frame" ? (() => {
            const L = He();
            return L ? Er(s, L, performance.now()) : null;
          })() : Ir(s, performance.now());
          h.interaction = {
            kind: "move_stroke_group",
            item: y,
            startUv: C,
            snapshot: An(Pr(y.actionGroupId, y.layerKind)),
            frameSnapshot: An(Ci(y.actionGroupId, y.layerKind))
          }, bt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        if (vn(y)) {
          const C = h.mode === "frame" ? (() => {
            const L = He();
            return L ? Er(s, L, performance.now()) : null;
          })() : Ir(s, performance.now());
          h.interaction = {
            kind: "move_raster_object",
            item: y,
            startUv: C,
            snapshot: An(Kn().find((L) => String((L == null ? void 0 : L.id) || "") === yn(y.rasterObjectId || y.id || "")))
          }, bt(s), I.setPointerCapture(i.pointerId);
          return;
        }
        h.interaction = {
          kind: "move",
          item: y,
          offset: { x: s.x - w.center.x, y: s.y - w.center.y }
        }, bt(s), I.setPointerCapture(i.pointerId);
        return;
      }
    }
    const x = Nm(s);
    if (x) {
      const N = h.selectedId !== x.item.id;
      if (N && h.selectedId && (tt(), Vn()), Rn(x.item), R && N && (h.cutoutAspectOpen = !1), N && je(), Ke(), ue(), _n(x.item)) {
        bt(s);
        return;
      }
      h.interaction = {
        kind: fn(x.item) ? "move_stroke_group" : vn(x.item) ? "move_raster_object" : "move",
        item: x.item,
        offset: { x: s.x - x.geom.center.x, y: s.y - x.geom.center.y },
        startUv: fn(x.item) || vn(x.item) ? h.mode === "frame" ? (() => {
          const C = He();
          return C ? Er(s, C, performance.now()) : null;
        })() : Ir(s, performance.now()) : null,
        snapshot: fn(x.item) ? An(Pr(x.item.actionGroupId, x.item.layerKind)) : vn(x.item) ? An(Kn().find((C) => String((C == null ? void 0 : C.id) || "") === yn(x.item.rasterObjectId || x.item.id || ""))) : null,
        frameSnapshot: fn(x.item) ? An(Ci(x.item.actionGroupId, x.item.layerKind)) : null
      }, bt(s), I.setPointerCapture(i.pointerId);
      return;
    }
    const E = !!h.selectedId;
    E && (tt(), Vn()), Ha(), E && je(), Ke(), ue(), h.mode === "pano" && Om(i, s);
  };
  function Xo() {
    return Tf(wn(), I.width, I.height, jr());
  }
  function so(i, s) {
    return $e.gizmoPointer(i, Xo(), s.x, s.y, I.width, I.height);
  }
  function bS(i, s) {
    var w;
    const l = (w = Ar().space) == null ? void 0 : w.gizmo;
    if (l && so("hover", s) !== null && so("down", s))
      return h.interaction = {
        kind: "world_gizmo",
        id: h.worldSelectedId,
        mode: l.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: l.transform,
        base: Co(to(), h.frame),
        changed: !1
      }, I.setPointerCapture(i.pointerId), bt(s), !0;
    const f = rr(), p = Ft(), m = f.length > 1 ? f.some((x) => _n(x)) ? "none" : as(za(f), s).kind : p && !_n(p) ? as(on(p), s, p).kind : "none";
    if (m !== "none" && m !== "move") return !1;
    const y = $e.pickSticker(Xo(), s.x, s.y, I.width, I.height);
    return _.stickers.some((x) => x.id === y && x.placement === "world") ? (h.worldSelectedId !== y && (h.selectedId && (tt(), Vn()), Pu(y), je(), Ke(), $r(), ue()), h.interaction = { kind: "world_select" }, I.setPointerCapture(i.pointerId), !0) : !1;
  }
  function Im(i) {
    var f;
    const l = !!(h.worldSelectedId || mr()) && h.primaryTool === "cursor" && io() && !!((f = Ar().space) != null && f.gizmo) ? so("hover", i) : null;
    l !== h.gizmoAxis && (h.gizmoAxis = l, ae.backgroundDirty = !0, ue({ localOnly: !0, reason: Nt.VIEW }));
  }
  function vS(i, s) {
    const l = so("move", s);
    if (l && i.camera) {
      for (const [p, m] of Object.entries(l0(i.mode, i.base, i.start, l))) Fn(_.camera, p, h.frame, m);
      or(), i.changed = !0, Te.request("sidePanel"), ue({ localOnly: !0 });
      return;
    }
    const f = _.stickers.find((p) => p.id === i.id);
    !l || !f || (qN(f, h.frame, l0(i.mode, i.base, i.start, l)), i.changed = !0, jt(), Te.request("sidePanel"), ue({ localOnly: !0 }));
  }
  function Em(i) {
    h.interaction = null, h.gizmoAxis = null, i.kind === "world_gizmo" && (so("up", h.pointerPos), ae.backgroundDirty = !0, i.changed && (tt(), st(), je())), bt(h.pointerPos), ue();
  }
  function Om(i, s) {
    if (hr()) {
      const f = Cu().emptyLeft;
      f && Mh(f, s, i.pointerId);
      return;
    }
    const l = Sl(i);
    h.interaction = { kind: "view", last: l, lastTs: performance.now() }, an.startDrag(l.x, l.y, i.pointerId, performance.now()), bt(s), I.setPointerCapture(i.pointerId);
  }
  function _S(i, s) {
    if (!k || !Yt.playing || (Yt.stop(), i.kind === "frame_pan")) return;
    if (i.kind === "frame_orbit") {
      const p = rs();
      p && (i.pivot = bm(p, is(p), s));
      return;
    }
    if (i.kind === "world_gizmo") {
      const p = _.stickers.find((m) => m.id === i.id);
      i.camera ? i.base = oo() : p && (i.base = Co(p, h.frame));
      return;
    }
    if (i.kind === "move_multi") {
      const p = za(i.items);
      if (!(p != null && p.visible)) return;
      i.offset = { x: s.x - p.center.x, y: s.y - p.center.y }, i.startCenter = { x: p.center.x, y: p.center.y };
      for (const m of i.stickerSnapshots) {
        const y = i.items.find((x) => String((x == null ? void 0 : x.id) || "") === m.id), w = y ? on(y) : null;
        w != null && w.visible && (m.yaw_deg = Number(cn(y).yaw_deg || 0), m.pitch_deg = Number(cn(y).pitch_deg || 0), m.center = { x: w.center.x, y: w.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(i.kind)) return;
    const l = on(i.item);
    if (!(l != null && l.visible)) return;
    const f = cn(i.item);
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
  I.onpointermove = (i) => {
    var f, p, m, y, w, x, E, N, C, L, U, K, Q, ee, se, he, ie, _e, Ue, Ze, lt, xe;
    const s = Vi(i);
    if (kl(s, !0), !h.interaction) {
      Im(s), bt(s);
      return;
    }
    bt(s);
    const l = h.interaction;
    if (dr && (s.x !== dr.x || s.y !== dr.y)) {
      const de = dr;
      dr = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(l.kind) || _S(l, de);
    }
    if (l.kind !== "world_select") {
      if (l.kind === "world_gizmo") {
        vS(l, s);
        return;
      }
      if (l.kind === "paint_stroke") {
        const de = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let Se = !1;
        de.forEach((ze) => {
          const Ge = Vi(ze);
          if (h.mode === "frame") {
            const it = He(), ct = it ? mn(it) : null;
            if (ct) {
              const Tt = (Ge.x - ct.x) / Math.max(1, ct.w), ut = (Ge.y - ct.y) / Math.max(1, ct.h);
              if (!(Tt >= 0 && Tt <= 1 && ut >= 0 && ut <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, cS(l));
            }
          }
          aS(l, Ge, performance.now()) && (Se = !0);
        }), Se && ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "paint_lasso_fill") {
        const de = typeof i.getCoalescedEvents == "function" ? i.getCoalescedEvents() : [i];
        let Se = !1;
        if (de.forEach((ze) => {
          const Ge = Vi(ze);
          if (h.mode === "frame") {
            const it = He(), ct = it ? mn(it) : null;
            if (ct) {
              const Tt = (Ge.x - ct.x) / Math.max(1, ct.w), ut = (Ge.y - ct.y) / Math.max(1, ct.h);
              if (!(Tt >= 0 && Tt <= 1 && ut >= 0 && ut <= 1)) {
                l._outOfFrame = !0;
                return;
              }
              l._outOfFrame && (l._outOfFrame = !1, uS(l));
            }
          }
          sS(l, Ge, performance.now()) && (Se = !0);
        }), Se) {
          const ze = ir();
          ze && h.paintEngine.updateActiveStroke(l.stroke, ze), ue({ localOnly: !0 });
        }
        return;
      }
      if (l.kind === "view") {
        const de = performance.now(), Se = h.mode === "unwrap" ? s : Sl(i);
        an.moveDrag(Se.x, Se.y, h.mode === "unwrap" ? "unwrap" : "pano", de), l.lastTs = de, l.last = Se, ue({ localOnly: !0, reason: Nt.VIEW });
        return;
      }
      if (l.kind === "frame_pan" || l.kind === "frame_orbit") {
        Qw(l, s);
        return;
      }
      if (l.kind === "space_pan" || l.kind === "space_orbit") {
        const de = wn();
        wh(l.kind === "space_pan" ? r0(de, s.x - l.last.x, s.y - l.last.y, I.width, I.height, l.depth) : n0(de, s.x - l.last.x, s.y - l.last.y, I.height, l.pivot)), l.last = s;
        return;
      }
      if (l.kind === "pan_frame") {
        const de = xl(l.shot);
        if (!de || !l.shot) return;
        const Se = s.x - l.last.x, ze = s.y - l.last.y, Ge = L1(l.shot, {
          dx: Se,
          dy: ze,
          focalPx: de.focalPx,
          invertX: ((f = _.ui_settings) == null ? void 0 : f.invert_view_x) === !0,
          invertY: ((p = _.ui_settings) == null ? void 0 : p.invert_view_y) === !0
        });
        l.shot.yaw_deg = Ge.yaw_deg, l.shot.pitch_deg = Ge.pitch_deg, l.changed = l.changed || Math.abs(Se) > 0 || Math.abs(ze) > 0, l.last = s, ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "roll_frame") {
        if (l.source === "knob") return;
        gS(l, s, i);
        return;
      }
      if (l.kind === "move") {
        const de = s.x - l.offset.x, Se = s.y - l.offset.y;
        if (h.mode === "frame" && R) {
          const ze = He(), Ge = mn(ze);
          if (!ze || !Ge) return;
          const it = {
            x: te((de - Ge.x) / Math.max(1, Ge.w), 0, 1),
            y: te((Se - Ge.y) / Math.max(1, Ge.h), 0, 1)
          }, ct = Hu(ze, it);
          if (!ct) return;
          const Tt = Gl(ct);
          Nr(l.item, { yaw_deg: Tt.yaw, pitch_deg: Tt.pitch });
        } else if (h.mode === "unwrap") {
          const ze = Di(), Ge = te((de - ze.x) / Math.max(ze.w, 1), 0, 1), it = te((Se - ze.y) / Math.max(ze.h, 1), 0, 1);
          Nr(l.item, { yaw_deg: Ht(Ge * 360 - 180), pitch_deg: te(90 - it * 180, -90, 90) });
        } else {
          const ze = Ou(de, Se), Ge = Gl(ze);
          Nr(l.item, { yaw_deg: Ge.yaw, pitch_deg: Ge.pitch });
        }
        At(l.item) && jt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "move_stroke_group") {
        const de = h.mode === "frame" ? (() => {
          const Ge = He();
          return Ge ? Er(s, Ge, performance.now()) : null;
        })() : Ir(s, performance.now());
        if (!de || !l.startUv) return;
        const Se = pr(Number(de.u || 0), Number(l.startUv.u || 0)), ze = Number(de.v || 0) - Number(l.startUv.v || 0);
        rh((m = l.item) == null ? void 0 : m.actionGroupId, Se, ze, l.snapshot, (y = l.item) == null ? void 0 : y.layerKind, l.frameSnapshot) && (Cr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_raster_object") {
        const de = h.mode === "frame" ? (() => {
          const Ge = He();
          return Ge ? Er(s, Ge, performance.now()) : null;
        })() : Ir(s, performance.now());
        if (!de || !l.startUv) return;
        const Se = pr(Number(de.u || 0), Number(l.startUv.u || 0)), ze = Number(de.v || 0) - Number(l.startUv.v || 0);
        oh(((w = l.item) == null ? void 0 : w.rasterObjectId) || ((x = l.item) == null ? void 0 : x.id) || "", Se, ze, l.snapshot) && (Wo(), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_raster_object") {
        const Se = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        xv(((E = l.item) == null ? void 0 : E.rasterObjectId) || ((N = l.item) == null ? void 0 : N.id) || "", Se, l.snapshot) && (Wo(), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "move_multi") {
        const de = s.x - Number(((C = l.offset) == null ? void 0 : C.x) || 0), Se = s.y - Number(((L = l.offset) == null ? void 0 : L.y) || 0);
        let ze = !1, Ge = !1, it = !1;
        const ct = de - Number(((U = l.startCenter) == null ? void 0 : U.x) || de), Tt = Se - Number(((K = l.startCenter) == null ? void 0 : K.y) || Se);
        for (const ut of Array.isArray(l.stickerSnapshots) ? l.stickerSnapshots : []) {
          const sn = (t === "cutout" ? bu() : ci()).find((qt) => String((qt == null ? void 0 : qt.id) || "") === String(ut.id || ""));
          if (!sn || !At(sn)) continue;
          const Bn = {
            x: Number(((Q = ut.center) == null ? void 0 : Q.x) || 0) + ct,
            y: Number(((ee = ut.center) == null ? void 0 : ee.y) || 0) + Tt
          };
          if (h.mode === "frame" && R) {
            const qt = He(), dn = mn(qt);
            if (!qt || !dn) continue;
            const lo = {
              x: te((Bn.x - dn.x) / Math.max(1, dn.w), 0, 1),
              y: te((Bn.y - dn.y) / Math.max(1, dn.h), 0, 1)
            }, Qm = Hu(qt, lo);
            if (!Qm) continue;
            const eg = Gl(Qm);
            Nr(sn, { yaw_deg: eg.yaw, pitch_deg: eg.pitch });
          } else if (h.mode === "unwrap") {
            const qt = Di(), dn = te((Bn.x - qt.x) / Math.max(qt.w, 1), 0, 1), lo = te((Bn.y - qt.y) / Math.max(qt.h, 1), 0, 1);
            Nr(sn, { yaw_deg: Ht(dn * 360 - 180), pitch_deg: te(90 - lo * 180, -90, 90) });
          } else {
            const qt = Ou(Bn.x, Bn.y), dn = Gl(qt);
            Nr(sn, { yaw_deg: dn.yaw, pitch_deg: dn.pitch });
          }
          ze = !0;
        }
        for (const ut of Array.isArray(l.strokeSnapshots) ? l.strokeSnapshots : []) {
          const sn = {
            x: Number(((se = ut.center) == null ? void 0 : se.x) || 0) + ct,
            y: Number(((he = ut.center) == null ? void 0 : he.y) || 0) + Tt
          }, Bn = h.mode === "frame" ? (() => {
            const dn = He();
            return dn ? Er(sn, dn, performance.now()) : null;
          })() : Ir(sn, performance.now()), qt = ut.centerUv || null;
          if (Bn && qt) {
            const dn = pr(Number(Bn.u || 0), Number(qt.u || 0)), lo = Number(Bn.v || 0) - Number(qt.v || 0);
            rh(ut.id, dn, lo, ut.snapshot, ut.layerKind, ut.frameSnapshot) && (ze = !0, Ge = !0);
          }
        }
        for (const ut of Array.isArray(l.rasterSnapshots) ? l.rasterSnapshots : []) {
          const sn = {
            x: Number(((ie = ut.center) == null ? void 0 : ie.x) || 0) + ct,
            y: Number(((_e = ut.center) == null ? void 0 : _e.y) || 0) + Tt
          }, Bn = h.mode === "frame" ? (() => {
            const dn = He();
            return dn ? Er(sn, dn, performance.now()) : null;
          })() : Ir(sn, performance.now()), qt = ut.centerUv || null;
          if (Bn && qt) {
            const dn = pr(Number(Bn.u || 0), Number(qt.u || 0)), lo = Number(Bn.v || 0) - Number(qt.v || 0);
            oh(ut.id, dn, lo, ut.snapshot) && (ze = !0, it = !0);
          }
        }
        ze && (Ge ? Cr({ rebuildPaintEngine: !1 }) : it ? Wo() : jt(), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "scale_stroke_group") {
        const Se = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / Math.max(1, Number(l.startDist || 1));
        ih((Ue = l.item) == null ? void 0 : Ue.actionGroupId, Se, 0, l.snapshot, (Ze = l.item) == null ? void 0 : Ze.layerKind, l.frameSnapshot) && (Cr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "rotate_stroke_group") {
        let de = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - Number(l.startAng || 0)) * wo;
        i.shiftKey && (de = Math.round(de / 45) * 45), ih((lt = l.item) == null ? void 0 : lt.actionGroupId, 1, de, l.snapshot, (xe = l.item) == null ? void 0 : xe.layerKind, l.frameSnapshot) && (Cr({ rebuildPaintEngine: !1 }), ue({ localOnly: !0 }));
        return;
      }
      if (l.kind === "marquee_select") {
        l.current = s, ue({ localOnly: !0, reason: Nt.OVERLAY });
        return;
      }
      if (l.kind === "scale") {
        const Se = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Nr(l.item, { hFOV_deg: te(l.startHFOV * Se, 1, 179), vFOV_deg: te(l.startVFOV * Se, 1, 179) }), Gn(l.item) || (l.item.aspect_id = _o(l.item)), At(l.item) && jt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_x") {
        const Se = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Nr(l.item, { hFOV_deg: te(l.startHFOV * Se, 1, 179) }), Gn(l.item) || (l.item.aspect_id = _o(l.item)), At(l.item) && jt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "scale_y") {
        const Se = Math.max(1, Math.hypot(s.x - l.center.x, s.y - l.center.y)) / l.startDist;
        Nr(l.item, { vFOV_deg: te(l.startVFOV * Se, 1, 179) }), Gn(l.item) || (l.item.aspect_id = _o(l.item)), At(l.item) && jt(), ue({ localOnly: !0 });
        return;
      }
      if (l.kind === "rotate") {
        let Se = (Math.atan2(s.y - l.center.y, s.x - l.center.x) - l.startAng) * wo, ze = l.startRot - Se;
        i.shiftKey && (ze = Math.round(ze / 45) * 45), Nr(l.item, { [At(l.item) ? "rot_deg" : "roll_deg"]: ze }), At(l.item) && jt(), ue({ localOnly: !0 });
      }
    }
  }, I.onpointerup = () => {
    var s, l, f, p, m, y, w;
    const i = h.interaction;
    if (!((i == null ? void 0 : i.kind) === "roll_frame" && i.source === "knob")) {
      if ((i == null ? void 0 : i.kind) === "space_pan" || (i == null ? void 0 : i.kind) === "space_orbit") {
        h.interaction = null, bt(h.pointerPos), Ke();
        return;
      }
      if ((i == null ? void 0 : i.kind) === "world_select" || (i == null ? void 0 : i.kind) === "world_gizmo") {
        Em(i);
        return;
      }
      if (((s = h.interaction) == null ? void 0 : s.kind) === "paint_stroke" || ((l = h.interaction) == null ? void 0 : l.kind) === "paint_lasso_fill") {
        Ho();
        const x = Zu(h.interaction), E = !!h.interaction._hasCommittedSegments;
        if (x || E) {
          Cr();
          const N = String(((f = h.interaction.stroke) == null ? void 0 : f.actionGroupId) || "").trim();
          if (N) {
            const L = Nn().find((U) => String((U == null ? void 0 : U.actionGroupId) || "") === N);
            L && (L.frame = null);
          }
          const C = ir();
          C && (x ? String(((p = h.interaction.stroke) == null ? void 0 : p.toolKind) || "") === "eraser" ? (h.paintEngine.cancelActiveStroke(C), Hh()) : h.paintEngine.commitActiveStroke(h.interaction.stroke, C) : h.paintEngine.cancelActiveStroke(C)), tt(), Vn(), je(), Ke(), e.setDirtyCanvas(!0, !0), ue();
        } else {
          const N = ir();
          N && h.paintEngine.cancelActiveStroke(N);
        }
      } else if (((m = h.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const x = Pm(h.interaction.start, h.interaction.current), N = [
          ...t === "cutout" ? ju().filter((C) => !un(C)) : [...ci()],
          ...vv(),
          ..._v()
        ].filter((C) => dS(x, on(C)));
        Nv(N, ((y = N[N.length - 1]) == null ? void 0 : y.id) || null), R && N.length && (h.cutoutAspectOpen = !1), je(), Ke(), ue();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((w = h.interaction) == null ? void 0 : w.kind))
        h.interaction.changed && (tt(), st(), je());
      else if (h.interaction && h.interaction.kind !== "view") {
        let x = !1;
        (h.interaction.kind === "move_stroke_group" || h.interaction.kind === "scale_stroke_group" || h.interaction.kind === "rotate_stroke_group") && (x = !0), (h.interaction.kind === "move_raster_object" || h.interaction.kind === "scale_raster_object") && (x = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length && (x = !0), h.interaction.kind === "move_multi" && Array.isArray(h.interaction.rasterSnapshots) && h.interaction.rasterSnapshots.length && (x = !0), x && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(h.interaction.kind) || h.interaction.kind === "move_multi" && Array.isArray(h.interaction.strokeSnapshots) && h.interaction.strokeSnapshots.length ? Cr({ rebuildPaintEngine: !0 }) : Wo()), tt(), Vn(), e.setDirtyCanvas(!0, !0), Uo(), Ke(), ue();
      }
      h.interaction = null, (i == null ? void 0 : i.kind) === "roll_frame" && ao(), Ho(), i && i.kind === "view" && an.endDrag(performance.now()), ui(), Ke(), bt(h.pointerPos), ue();
    }
  }, I.onpointercancel = () => {
    var i, s, l, f, p;
    if (!os()) {
      if (((i = h.interaction) == null ? void 0 : i.kind) === "world_select" || ((s = h.interaction) == null ? void 0 : s.kind) === "world_gizmo") {
        Em(h.interaction);
        return;
      }
      if (((l = h.interaction) == null ? void 0 : l.kind) === "view" && an.endDrag(performance.now()), ((f = h.interaction) == null ? void 0 : f.kind) === "paint_stroke" || ((p = h.interaction) == null ? void 0 : p.kind) === "paint_lasso_fill") {
        Ho();
        const m = ir();
        m && h.paintEngine.cancelActiveStroke(m);
      }
      h.interaction = null, Ho(), ui(), bt(h.pointerPos), ue({ localOnly: !0 });
    }
  }, I.onlostpointercapture = () => {
    os();
  }, I.onauxclick = (i) => {
    i.button === 1 && i.preventDefault();
  }, I.oncontextmenu = (i) => {
    (hr() || Ju()) && aA(Cu(), 2) && i.preventDefault();
  }, I.onmousemove = (i) => {
    const s = Vi(i), l = kl(s, !0);
    h.interaction || (bt(s), l && h.mode === "frame" && h.primaryTool === "cursor" && ue({ localOnly: !0, reason: Nt.OVERLAY }));
  }, I.onpointerleave = () => {
    h.interaction || Im({ x: -1e6, y: -1e6 });
  }, I.onmouseleave = () => {
    kl(h.pointerPos, !1), bt(h.pointerPos), h.mode === "frame" && h.primaryTool === "cursor" && ue({ localOnly: !0, reason: Nt.OVERLAY });
  }, I.onwheel = (i) => {
    if (h.mode === "frame") {
      const s = Vi(i), l = xc(i);
      l && Sn(), l && Ju() ? eS(s, -l) : l && Jw(s, l) && ue({ localOnly: !0 }), i.preventDefault();
      return;
    }
    if (h.mode === "pano") {
      if (Da(), hr()) {
        const s = xc(i);
        s && Xv(Vi(i), -s);
      } else an.applyWheelEvent(i) && ue({ localOnly: !0, reason: Nt.VIEW });
      i.preventDefault();
    }
  }, I.ondragover = (i) => {
    t !== "stickers" && t !== "cutout" || r || (i.preventDefault(), Qi(!0));
  }, I.ondrop = (i) => {
    var f;
    if (t !== "stickers" && t !== "cutout" || r) return;
    i.preventDefault(), i.stopPropagation(), kn.depth = 0, Qi(!1);
    const l = Array.from(((f = i.dataTransfer) == null ? void 0 : f.files) || []).find((p) => Tr(p));
    l && im(l);
  };
  const Fm = (i) => {
    t !== "stickers" && t !== "cutout" || r || du(i) && (kn.depth += 1, Qi(!0), i.preventDefault());
  }, Tm = (i) => {
    t !== "stickers" && t !== "cutout" || r || (!kn.active && du(i) && Qi(!0), kn.active && i.preventDefault());
  }, Dm = (i) => {
    if (t !== "stickers" && t !== "cutout" || r || !kn.active) return;
    kn.depth = Math.max(0, kn.depth - 1);
    const s = Number(i.clientX) <= 0 && Number(i.clientY) <= 0;
    (kn.depth === 0 || s) && Qi(!1);
  }, Lm = (i) => {
    t !== "stickers" && t !== "cutout" || r || (kn.depth = 0, Qi(!1), du(i) && i.preventDefault());
  };
  window.addEventListener("dragenter", Fm, !0), window.addEventListener("dragover", Tm, !0), window.addEventListener("dragleave", Dm, !0), window.addEventListener("drop", Lm, !0);
  function ef() {
    const { canUndo: i, canRedo: s } = Qh();
    ta(F.toolButtons, "value", "undo", { disabled: !i }), ta(F.toolButtons, "value", "redo", { disabled: !s });
  }
  const Rm = (i, s, l = !1) => {
    var E;
    Sn();
    const f = R && h.mode === "frame" ? He() : null, p = f || Ft(), m = f ? "shot" : ja(), y = to();
    if (y && !ll(y) || !y && (!p || m === "stroke" || _n(p))) return;
    const w = (((E = F.sidePanel) == null ? void 0 : E.params) || []).find((N) => N.key === i);
    if (!w || w.enabled === !1) return;
    let x = Number(s);
    if (Number.isNaN(x) && (x = 0), (y || G) && hF.has(i) ? x = i === "scale" ? Math.max(x, B0) : x : x = te(x, Number(w.min), Number(w.max)), i === "yaw_deg" && (x = Ht(x)), !y && G && i.startsWith("position_")) {
      or(), BN(_.camera, h.frame, i, x), je(), ue(), l && tt();
      return;
    }
    if (y) {
      XN(y, h.frame, i, x), jt(), je(), ue(), l && tt();
      return;
    }
    i === "opacity" ? UN(p, h.frame, x / 100) : Nr(p, { [i]: x }), R && !Gn(p) && (i === "hFOV_deg" || i === "vFOV_deg") && (p.aspect_id = _o(p)), je(), ue(), l && tt();
  };
  _t == null || _t.addEventListener("click", async (i) => {
    var f, p, m, y, w, x, E;
    const s = i.target.closest("[data-action]");
    if (!s) return;
    const l = String(s.getAttribute("data-action") || "");
    if (l === "coverage-set") {
      const N = Jn(s.getAttribute("data-coverage"));
      if (N === Jn(_.coverage)) return;
      _.coverage = N, h.coverage = N, d && (d.value = String(N)), a ? ae.backgroundDirty = !0 : (Vn(), Xw({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), je(), Ke(), ue();
      return;
    }
    if (l === "toggle-selection-picker") {
      if ((p = (f = F.sidePanel) == null ? void 0 : f.selectionPicker) != null && p.disabled) return;
      F.sidePanel.selectionPicker.open = !F.sidePanel.selectionPicker.open;
      return;
    }
    if (l === "select-picker-item") {
      F.sidePanel.selectionPicker.open = !1;
      const N = String(s.getAttribute("data-selection-id") || "");
      let C = null;
      if (N && (t === "stickers" ? C = [...ci(), ...O ? _.shots : []].find((L) => String((L == null ? void 0 : L.id) || "") === N) || null : C = ((m = sh().find((L) => {
        var U;
        return String(((U = L == null ? void 0 : L.item) == null ? void 0 : U.id) || "") === N;
      })) == null ? void 0 : m.item) || null), Rn(C || null), C && !fn(C)) {
        const L = cn(C);
        eh(Ht(Number(L.yaw_deg || 0)), te(Number(L.pitch_deg || 0), -89.9, 89.9));
      }
      je(), Ke(), ue();
      return;
    }
    if (l === "copy-state-inline") {
      const N = Ft(), C = ja();
      if (!N || C === "stroke" || rr().length > 1) return;
      const L = JSON.stringify(R && C !== "image" ? gh(N) : $v(cn(N)));
      try {
        await navigator.clipboard.writeText(L), (y = F.sidePanel) != null && y.copyStateButton && (F.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var U;
          (U = F.sidePanel) != null && U.copyStateButton && (F.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (l === "set-invert-x") {
      _.ui_settings.invert_view_x = s.getAttribute("data-value") === "1", Xu(), je(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), ue();
      return;
    }
    if (l === "set-invert-y") {
      _.ui_settings.invert_view_y = s.getAttribute("data-value") === "1", Xu(), je(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), ue();
      return;
    }
    if (l === "ui-reset-defaults") {
      _.ui_settings.invert_view_x = !1, _.ui_settings.invert_view_y = !1, Xu(), je(), (E = e.setDirtyCanvas) == null || E.call(e, !0, !0), ue();
      return;
    }
    if (l === "close-preview") {
      Jo();
      return;
    }
    if (l === "cancel-close") {
      Jo();
      return;
    }
    l === "save-close" && (Uw(), Jo());
  }), _t == null || _t.addEventListener("input", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Rm(String(s.getAttribute("data-param-key") || ""), s.value, !1);
  }), _t == null || _t.addEventListener("change", (i) => {
    const s = i.target.closest("[data-action='param-input']");
    s && Rm(String(s.getAttribute("data-param-key") || ""), s.value, !0);
  });
  const tf = () => $r();
  tf(), D.addEventListener("click", (i) => {
    var E, N, C, L, U;
    if ((N = (E = i.target) == null ? void 0 : E.matches) != null && N.call(E, "[data-confirm-overlay]")) {
      const K = (C = F.confirmDialog) == null ? void 0 : C.resolve;
      F.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, K == null || K(!1);
      return;
    }
    const s = i.target.closest("[data-space-mode]");
    if (s) {
      Uv(s.getAttribute("data-space-mode"));
      return;
    }
    const l = i.target.closest("[data-gizmo-mode]");
    if (l) {
      h.gizmoMode = l.getAttribute("data-gizmo-mode"), ae.backgroundDirty = !0, Ke(), ue({ localOnly: !0, reason: Nt.VIEW });
      return;
    }
    const f = i.target.closest("[data-view]");
    if (f) {
      if (f.getAttribute("aria-disabled") === "true") return;
      const K = h.mode;
      h.mode = String(f.getAttribute("data-view") || "pano"), R && h.mode === "frame" && (K !== "frame" && (ae.frameSafeRect = null), je(), Ke()), ns(), ui(), ue();
      return;
    }
    const p = i.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (p && !r) {
      if (p.matches("[data-tool-mode]")) {
        const K = String(p.getAttribute("data-tool-mode") || "cursor");
        h.primaryTool = K, (K === "paint" || K === "mask") && Ha({ preservePanelValues: !0 }), Wn(), je(), Ke(), ue();
        return;
      }
      if (p.matches("[data-tool-ui-action]")) {
        const K = String(p.getAttribute("data-tool-ui-action") || "");
        if ((K === "undo" || K === "redo") && p.disabled) return;
        K === "undo" ? Bu(-1) : K === "redo" ? Bu(1) : K === "clear" ? $w() : K === "add" || K === "add-image" ? Mw() : K === "add-world" ? Nw() : K === "add-or-look" ? Tw() : K === "add-camera" && Dw();
        return;
      }
      if (p.matches("[data-paint-tool]")) {
        h.primaryTool = "paint";
        const K = String(p.getAttribute("data-paint-tool") || "pen");
        h.paintTool = K, Ha({ preservePanelValues: !0 }), Un[K] && (h.activeBrushPresetId = K), Wn(), je(), Ke(), ue();
        return;
      }
      if (p.matches("[data-mask-tool]")) {
        h.primaryTool = "mask", h.maskTool = String(p.getAttribute("data-mask-tool") || "pen"), Ha({ preservePanelValues: !0 }), Wn(), je(), Ke(), ue();
        return;
      }
      if (p.matches("[data-paint-layer-clear-current]")) {
        const K = String(p.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        zw(K);
        return;
      }
      if (p.matches("[data-paint-color-swatch]")) {
        const K = fc.find((Q) => Q.id === p.getAttribute("data-paint-color-swatch"));
        if (!K) return;
        h.paintColor = ar(K.color), bn(!0), Wn();
        return;
      }
      if (p.matches("[data-paint-color-custom]")) {
        i.preventDefault(), i.stopPropagation(), Me && !Me.hidden ? bn(!0) : Ln(), Wn();
        return;
      }
    }
    const m = String(((L = p == null ? void 0 : p.getAttribute) == null ? void 0 : L.call(p, "data-action")) || "");
    if (m === "video-play-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ie instanceof HTMLVideoElement)) return;
      Vt.resumeAfterScrub = !1, Uu();
      return;
    }
    if (m === "video-audio-toggle") {
      i.preventDefault(), i.stopPropagation(), fh(), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (m === "video-loop-toggle") {
      if (i.preventDefault(), i.stopPropagation(), !(Ie instanceof HTMLVideoElement)) return;
      const K = !F.videoTransport.loop;
      F.videoTransport.loop = K, Ie.loop = K, Ei({
        hasAudio: F.videoTransport.hasAudio,
        loop: K,
        muted: Ie.muted,
        volume: Number(Ie.volume ?? F.videoTransport.volume ?? 1)
      }), typeof (p == null ? void 0 : p.blur) == "function" && p.blur();
      return;
    }
    if (!r) {
      if (m === "frame-aspect") {
        F.frameRail.aspectOpen = !F.frameRail.aspectOpen;
        return;
      }
      if (m === "frame-aspect-set") {
        const K = h.mode === "frame" ? He() : null;
        if (!K || K.locked === !0) return;
        am(K, String(p.getAttribute("data-aspect") || "1:1")), F.frameRail.aspectOpen = !1, Uo(), tt(), st(), ui(), je(), Ke(), ue();
        return;
      }
      if (m === "frame-aspect-custom") {
        const K = h.mode === "frame" ? He() : null, Q = p.getAttribute("data-custom-width"), ee = p.getAttribute("data-custom-height");
        if (!K || !Kw(K, Q, ee)) return;
        F.frameRail.aspectOpen = !1, Uo(), tt(), st(), ui(), ue();
        return;
      }
      if (m === "frame-rotate-90") {
        const K = h.mode === "frame" ? He() : null;
        if (!K || K.locked === !0) return;
        cm(K), F.frameRail.aspectOpen = !1, Uo(), tt(), st(), ui(), ue();
        return;
      }
      if (m === "aspect") {
        h.cutoutAspectOpen = !h.cutoutAspectOpen, h.menuSize.measured = !1, Ke(), ue();
        return;
      }
      if (m === "aspect-set") {
        const K = Ft();
        if (!K) return;
        const Q = String(p.getAttribute("data-aspect") || "1:1");
        am(K, Q), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Uo(), tt(), st(), Ke(), ue();
        return;
      }
      if (m === "rotate-90") {
        const K = Ft();
        if (!K || ro()) return;
        cm(K), h.cutoutAspectOpen = !1, h.menuSize.measured = !1, Uo(), tt(), st(), Ke(), ue();
        return;
      }
      if (m === "bring-front") {
        Ww();
        return;
      }
      if (m === "send-back") {
        Bw();
        return;
      }
      if (m === "duplicate") {
        jw();
        return;
      }
      if (m === "replace-image") {
        Ew();
        return;
      }
      if (m === "toggle-lock") {
        Mv();
        return;
      }
      if (m === "back-initial") {
        Ev();
        return;
      }
      if (m === "toggle-visible") {
        Iv();
        return;
      }
      if (m === "delete") {
        lm();
        return;
      }
    }
    if (m === "reset-view") {
      if (h.mode === "frame") return;
      eo(
        { position: jo(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((U = jr()) == null ? void 0 : U.radius) || Or },
        { mode: uc(h.spaceMode, h.viewTransition), moved: !1 }
      );
      return;
    }
    if (m === "frame-view") {
      if (!hr() || uc(h.spaceMode, h.viewTransition) !== "6dof") return;
      Yv();
      return;
    }
    if (m === "toggle-grid") {
      if (h.mode === "frame") return;
      h.showGrid = !h.showGrid, WF(e == null ? void 0 : e.id, h.showGrid), tf(), ue();
      return;
    }
    if (m === "toggle-fullscreen") {
      i.preventDefault(), i.stopPropagation(), xS();
      return;
    }
    if (m === "toggle-output-preview-size") {
      i.preventDefault(), i.stopPropagation();
      const K = !h.outputPreviewExpanded;
      h.outputPreviewExpanded = K, h.outputPreviewAnimFrom = h.outputPreviewAnim, h.outputPreviewAnimTo = K ? 1 : 0, h.outputPreviewAnimStartTs = performance.now(), Hm(), ue();
      return;
    }
    const y = i.target.closest("[data-paint-history-index]");
    if (!y) return;
    const w = Number(y.getAttribute("data-paint-history-index")), x = h.customPaintHistory[w];
    x && (h.customPaintColor = ar(x), h.paintColor = ar(x), Wn());
  }), D.addEventListener("input", (i) => {
    const s = i.target.closest("[data-video-seek]");
    if (s) {
      if (!(Ie instanceof HTMLVideoElement)) return;
      Yt.playing && (Vt.resumeAfterScrub = !0), Yt.seek(bo(Number(s.value || 0), sl()));
      return;
    }
    const l = i.target.closest("[data-video-volume]");
    if (l) {
      if (!(Ie instanceof HTMLVideoElement)) return;
      const m = te(Number(l.value || 0), 0, 1);
      Ie.volume = m, Ie.muted = m <= 1e-4, Ei({
        hasAudio: F.videoTransport.hasAudio,
        muted: Ie.muted,
        volume: m
      });
      return;
    }
    const f = i.target.closest("[data-paint-size-slider]");
    if (f) {
      if (f.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(f.value)))), y = $i(h.primaryTool === "paint" ? h.paintTool : h.maskTool);
      h.brushSizes[y] = m, Wn(), oS();
      return;
    }
    const p = i.target.closest("[data-paint-alpha-slider]");
    if (p) {
      const m = { ...h.customPaintColor, a: te(Number(p.value) / 100, 0, 1) };
      h.customPaintColor = ar(m), h.paintColor = ar(m), Wn();
    }
  }), D.addEventListener("change", (i) => {
    var s;
    if (i.target.closest("[data-video-seek]")) {
      if (!(Ie instanceof HTMLVideoElement)) return;
      Vt.resumeAfterScrub && Yt.play(), Vt.resumeAfterScrub = !1;
      return;
    }
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ml();
  }), D.addEventListener("pointerup", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ml();
  }), D.addEventListener("pointercancel", (i) => {
    var s;
    if (i.target.closest("[data-video-volume]")) {
      typeof ((s = i.target) == null ? void 0 : s.blur) == "function" && i.target.blur();
      return;
    }
    i.target.closest("[data-paint-size-slider]") && Ml();
  }), D.addEventListener("focusout", (i) => {
    i.target.closest("[data-paint-size-slider]") && Ml();
  }), D.addEventListener("pointerover", (i) => {
    const s = i.target.closest("[data-tip]");
    !s || !D.contains(s) || Ut.target !== s && (Ut.target = s, Ut.timer && clearTimeout(Ut.timer), Ut.timer = window.setTimeout(() => {
      Ut.target === s && hS(s);
    }, 220));
  }), D.addEventListener("pointerout", (i) => {
    var f, p;
    const s = i.target.closest("[data-tip]");
    !s || Ut.target !== s || (i.relatedTarget instanceof Element ? (p = (f = i.relatedTarget).closest) == null ? void 0 : p.call(f, "[data-tip]") : null) === s || ao();
  }), D.addEventListener("pointerdown", (i) => {
    i.target.closest("[data-frame-roll-knob]") || ao();
  });
  const wS = (i, s) => {
    var w;
    if (!Ve) return;
    const l = Ve.getBoundingClientRect(), f = te((i - l.left) / Math.max(1, l.width), 0, 1), p = 1 - te((s - l.top) / Math.max(1, l.height), 0, 1), m = Qf(h.customPaintColor), y = { ...Zf(m.h, f, p), a: Number(((w = h.customPaintColor) == null ? void 0 : w.a) ?? 1) };
    h.customPaintColor = ar(y), h.paintColor = ar(y), Wn();
  }, SS = (i) => {
    var m;
    if (!at) return;
    const s = at.getBoundingClientRect(), l = te((i - s.left) / Math.max(1, s.width), 0, 1), f = Qf(h.customPaintColor), p = { ...Zf(l, f.s, f.v), a: Number(((m = h.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    h.customPaintColor = ar(p), h.paintColor = ar(p), Wn();
  }, Vm = (i, s) => {
    const l = i.pointerId;
    s(i);
    const f = (m) => {
      m.pointerId === l && s(m);
    }, p = (m) => {
      m.pointerId === l && (window.removeEventListener("pointermove", f), window.removeEventListener("pointerup", p), window.removeEventListener("pointercancel", p));
    };
    window.addEventListener("pointermove", f), window.addEventListener("pointerup", p), window.addEventListener("pointercancel", p);
  };
  Ve && (Ve.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Vm(i, (s) => wS(s.clientX, s.clientY));
  }), at && (at.onpointerdown = (i) => {
    i.preventDefault(), i.stopPropagation(), Vm(i, (s) => SS(s.clientX));
  }), D.addEventListener("click", (i) => {
    var p;
    const s = i.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!s) return;
    const l = s.getAttribute("data-action") === "confirm-accept", f = (p = F.confirmDialog) == null ? void 0 : p.resolve;
    F.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, f == null || f(l);
  });
  const $m = () => {
    const i = !!h.fullscreen;
    ta(F.floatingButtons, "action", "toggle-fullscreen", {
      icon: i ? Pe.fullscreen_close : Pe.fullscreen,
      label: i ? "Exit Fullscreen" : "Fullscreen",
      tip: i ? "Exit fullscreen" : "Fullscreen"
    });
  }, Nl = (i) => {
    const s = !!i;
    h.fullscreen !== s && (h.fullscreen = s, D.classList.toggle("pano-modal-fullscreen", s), s ? (h.fullscreenPrevShowGrid = !!h.showGrid, h.showGrid = !1) : h.fullscreenPrevShowGrid !== null && (h.showGrid = !!h.fullscreenPrevShowGrid, h.fullscreenPrevShowGrid = null), tf(), $m(), li(), ue());
  }, zm = () => document.fullscreenElement === B, xS = async () => {
    var i, s;
    try {
      if (!document.fullscreenEnabled) {
        Nl(!h.fullscreen);
        return;
      }
      zm() ? await ((s = document.exitFullscreen) == null ? void 0 : s.call(document)) : await ((i = B.requestFullscreen) == null ? void 0 : i.call(B));
    } catch {
      Nl(!h.fullscreen);
    }
  }, jm = () => {
    document.fullscreenEnabled && Nl(zm());
  };
  document.addEventListener("fullscreenchange", jm), $m();
  const Hm = () => {
    const i = !!h.outputPreviewExpanded;
    F.outputPreviewToggle.icon = i ? Pe.fullscreen_close : Pe.fullscreen, F.outputPreviewToggle.label = i ? "Reduce Preview" : "Expand Preview", F.outputPreviewToggle.tip = i ? "Reduce preview" : "Expand preview";
  };
  Hm();
  const nf = e.onConnectionsChange;
  let rf = null, Gm = () => {
  };
  !r && t === "stickers" && (Gm = j1(e, (i = "sync") => {
    i === "executed" && (OF(nn, jl), Oi(), P && xw()), yh(i);
  }, { editor: !0 }), rf = function(...s) {
    typeof nf == "function" && nf.apply(this, s), Oi(), Si(this, "connections");
  }, e.onConnectionsChange = rf), !r && !A && q0.set(String(e.id ?? "0"), () => Ch());
  let qo = null;
  const Jo = async () => qo || (qo = (async () => {
    var i, s, l, f, p, m, y, w;
    return q0.delete(String(e.id ?? "0")), tS(), r || Vn(), document.fullscreenElement === B && ((i = document.exitFullscreen) == null || i.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", jm), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, e.__panoFlushStateBeforeQueue === fm && (e.__panoFlushStateBeforeQueue = null), (l = (s = e.__panoDomPreview) == null ? void 0 : s.requestDraw) == null || l.call(s), (p = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || p.call(f, !0, !0), (w = (y = (m = lr) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || w.call(y, !0, !0), ao(), Te.cancel(), yw(), Ie instanceof HTMLVideoElement && Ie.pause(), Mn.forEach((x) => {
      try {
        x();
      } catch {
      }
    }), $e.dispose(), Qi(!1), window.removeEventListener("keydown", Km, !0), window.removeEventListener("keydown", Wm, !0), window.removeEventListener("keydown", Um, !0), window.removeEventListener("keyup", Ym, !0), window.removeEventListener("keydown", Pl, !0), window.removeEventListener("keyup", Pl, !0), window.removeEventListener("blur", Xm), window.removeEventListener("keydown", qm, !0), window.removeEventListener("dragenter", Fm, !0), window.removeEventListener("dragover", Tm, !0), window.removeEventListener("dragleave", Dm, !0), window.removeEventListener("drop", Lm, !0), !r && t === "stickers" && (e.onConnectionsChange === rf && (e.onConnectionsChange = nf), Gm()), me.unmount(), J.remove(), Yw(), qo = null, !0;
  })().catch((i) => (console.error("[PanoramaCutoutSync] closeEditor failed", i), qo = null, !1)), qo), Km = (i) => {
    var s, l, f, p, m;
    if (i.key === "Escape") {
      if (os()) {
        i.preventDefault(), i.stopPropagation(), (s = i.stopImmediatePropagation) == null || s.call(i);
        return;
      }
      if (h.fullscreen && document.fullscreenElement === B) {
        i.preventDefault(), i.stopPropagation(), (l = i.stopImmediatePropagation) == null || l.call(i), (f = document.exitFullscreen) == null || f.call(document).catch(() => {
        });
        return;
      }
      if (h.fullscreen) {
        i.preventDefault(), i.stopPropagation(), (p = i.stopImmediatePropagation) == null || p.call(i), Nl(!1);
        return;
      }
      i.preventDefault(), i.stopPropagation(), (m = i.stopImmediatePropagation) == null || m.call(i), Jo();
    }
  }, Wm = (i) => {
    const s = String(i.key || ""), l = String(i.code || ""), f = Number(i.keyCode || 0);
    if (!(s === "Delete" || l === "Delete" || f === 46) && !(s === "Backspace" || l === "Backspace" || f === 8)) return;
    const y = i.target, w = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    if (w === "INPUT" || w === "TEXTAREA" || y != null && y.isContentEditable) return;
    if (Ye.selection) {
      Sw(), i.preventDefault(), i.stopPropagation();
      return;
    }
    if (Hw()) {
      i.preventDefault(), i.stopPropagation();
      return;
    }
    Ft() && (lm(), i.preventDefault(), i.stopPropagation());
  }, Bm = (i) => {
    if (i.code !== "Space" || i.ctrlKey || i.metaKey || i.altKey || r || !k || !F.timeline.visible || F.confirmDialog.visible) return !1;
    const s = i.composedPath()[0];
    if (s !== document.body && s !== document.documentElement && !B.contains(s)) return !1;
    const l = ((s == null ? void 0 : s.tagName) || "").toUpperCase();
    return l === "INPUT" ? !pF.has(String(s.type || "text").toLowerCase()) : l !== "TEXTAREA" && l !== "SELECT" && !(s != null && s.isContentEditable);
  }, Um = (i) => {
    Bm(i) && (i.preventDefault(), i.stopPropagation(), i.repeat || Uu());
  }, Ym = (i) => {
    Bm(i) && (i.preventDefault(), i.stopPropagation());
  }, Pl = (i) => {
    const s = !!(i.ctrlKey || i.metaKey), l = !!i.altKey;
    h.marqueeModifier === s && h.altModifier === l || (h.marqueeModifier = s, h.altModifier = l, di(), bt(h.pointerPos));
  }, Xm = () => {
    h.marqueeModifier = !1, h.altModifier = !1, di(), bt(h.pointerPos);
  }, qm = (i) => {
    if (r || !i.ctrlKey && !i.metaKey) return;
    const s = String(i.key || "").toLowerCase(), l = String(i.code || "");
    if (s !== "z" && l !== "KeyZ") return;
    const f = i.target, p = ((f == null ? void 0 : f.tagName) || "").toUpperCase();
    if (p === "INPUT" || p === "TEXTAREA" || f != null && f.isContentEditable) return;
    const { canUndo: m, canRedo: y } = Qh();
    i.shiftKey && !y || !i.shiftKey && !m || (Bu(i.shiftKey ? 1 : -1), i.preventDefault(), i.stopPropagation());
  };
  window.addEventListener("keydown", Km, !0), window.addEventListener("keydown", Wm, !0), window.addEventListener("keydown", Um, !0), window.addEventListener("keyup", Ym, !0), window.addEventListener("keydown", Pl, !0), window.addEventListener("keyup", Pl, !0), window.addEventListener("blur", Xm), window.addEventListener("keydown", qm, !0), B.addEventListener("pointerdown", (i) => {
    i.target === B && Jo();
  });
  function Wr(i, s, { rollbackState: l = !1 } = {}) {
    let f = "";
    try {
      l && (f = JSON.stringify(_)), s();
    } catch (p) {
      if (f)
        try {
          const m = JSON.parse(f);
          Object.keys(_).forEach((y) => delete _[y]), Object.assign(_, m), r || Vn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${i}" rollback failed`, m);
        }
      F.stageWarningDetail = `boot:${i}`, console.error(`[PanoramaStickers] editor boot step "${i}" failed`, p);
    }
  }
  Wr("cutout-focus", Kv), !r && t === "stickers" && Wr("external-sticker-sync", () => yh("open"), { rollbackState: !0 }), Ow().catch((i) => {
    F.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', i);
  }), Wr("history", tt), Wr("undo-redo", ef), Wr("paint-ui", Wn), Wr("side-panel", je), Wr("look-at-frame", Au), Wr("video-source", Oi), Wr("canvas-size", bl), Wr("cursor", () => bt(h.pointerPos)), ue(), Fe = tM("editor", () => {
    var i;
    return {
      type: t,
      readOnly: r,
      mode: h.mode,
      interaction: ((i = h.interaction) == null ? void 0 : i.kind) ?? null,
      timelineDrag: !!Ye.drag,
      playing: !!Yt.playing
    };
  });
}
lr.registerExtension(gA({
  app: lr,
  openEditor: JF,
  attachStickers: IC,
  attachCutout: EC,
  attachPreview: CC,
  restoreOutput: gC,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: vF
}));
