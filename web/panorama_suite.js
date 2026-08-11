import * as Vo from "../../scripts/app.js";
import { app as bn } from "../../scripts/app.js";
import { api as on } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function vc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const lt = {}, Oi = [], qn = () => {
}, Rd = () => !1, vs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), _s = (e) => e.startsWith("onUpdate:"), Jt = Object.assign, _c = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Jg = Object.prototype.hasOwnProperty, nt = (e, t) => Jg.call(e, t), Ve = Array.isArray, Ri = (e) => Va(e) === "[object Map]", Fd = (e) => Va(e) === "[object Set]", uf = (e) => Va(e) === "[object Date]", He = (e) => typeof e == "function", kt = (e) => typeof e == "string", Xn = (e) => typeof e == "symbol", at = (e) => e !== null && typeof e == "object", Ld = (e) => (at(e) || He(e)) && He(e.then) && He(e.catch), zd = Object.prototype.toString, Va = (e) => zd.call(e), Zg = (e) => Va(e).slice(8, -1), $d = (e) => Va(e) === "[object Object]", xc = (e) => kt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, pa = /* @__PURE__ */ vc(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, Qg = /-\w/g, sn = xs(
  (e) => e.replace(Qg, (t) => t.slice(1).toUpperCase())
), e0 = /\B([A-Z])/g, ii = xs(
  (e) => e.replace(e0, "-$1").toLowerCase()
), ws = xs((e) => e.charAt(0).toUpperCase() + e.slice(1)), xl = xs(
  (e) => e ? `on${ws(e)}` : ""
), Kn = (e, t) => !Object.is(e, t), wl = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, jd = (e, t, n, i = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: i,
    value: n
  });
}, t0 = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let ff;
const Ss = () => ff || (ff = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Tt(e) {
  if (Ve(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = kt(i) ? a0(i) : Tt(i);
      if (a)
        for (const l in a)
          t[l] = a[l];
    }
    return t;
  } else if (kt(e) || at(e))
    return e;
}
const n0 = /;(?![^(]*\))/g, r0 = /:([^]+)/, i0 = /\/\*[^]*?\*\//g;
function a0(e) {
  const t = {};
  return e.replace(i0, "").split(n0).forEach((n) => {
    if (n) {
      const i = n.split(r0);
      i.length > 1 && (t[i[0].trim()] = i[1].trim());
    }
  }), t;
}
function dt(e) {
  let t = "";
  if (kt(e))
    t = e;
  else if (Ve(e))
    for (let n = 0; n < e.length; n++) {
      const i = dt(e[n]);
      i && (t += i + " ");
    }
  else if (at(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const o0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", s0 = /* @__PURE__ */ vc(o0);
function Vd(e) {
  return !!e || e === "";
}
function l0(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = wc(e[i], t[i]);
  return n;
}
function wc(e, t) {
  if (e === t) return !0;
  let n = uf(e), i = uf(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Xn(e), i = Xn(t), n || i)
    return e === t;
  if (n = Ve(e), i = Ve(t), n || i)
    return n && i ? l0(e, t) : !1;
  if (n = at(e), i = at(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(t).length;
    if (a !== l)
      return !1;
    for (const u in e) {
      const f = e.hasOwnProperty(u), p = t.hasOwnProperty(u);
      if (f && !p || !f && p || !wc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Hd = (e) => !!(e && e.__v_isRef === !0), ft = (e) => kt(e) ? e : e == null ? "" : Ve(e) || at(e) && (e.toString === zd || !He(e.toString)) ? Hd(e) ? ft(e.value) : JSON.stringify(e, Ud, 2) : String(e), Ud = (e, t) => Hd(t) ? Ud(e, t.value) : Ri(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], l) => (n[Sl(i, l) + " =>"] = a, n),
    {}
  )
} : Fd(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Sl(n))
} : Xn(t) ? Sl(t) : at(t) && !Ve(t) && !$d(t) ? String(t) : t, Sl = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Xn(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let dn;
class c0 {
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
function u0() {
  return dn;
}
let ut;
const Ml = /* @__PURE__ */ new WeakSet();
class Bd {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, dn && dn.active && dn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ml.has(this) && (Ml.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Kd(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, df(this), Wd(this);
    const t = ut, n = On;
    ut = this, On = !0;
    try {
      return this.fn();
    } finally {
      Yd(this), ut = t, On = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Nc(t);
      this.deps = this.depsTail = void 0, df(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ml.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Xl(this) && this.run();
  }
  get dirty() {
    return Xl(this);
  }
}
let Gd = 0, ga, ba;
function Kd(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = ba, ba = e;
    return;
  }
  e.next = ga, ga = e;
}
function Sc() {
  Gd++;
}
function Mc() {
  if (--Gd > 0)
    return;
  if (ba) {
    let t = ba;
    for (ba = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; ga; ) {
    let t = ga;
    for (ga = void 0; t; ) {
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
function Wd(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yd(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Nc(i), f0(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function Xl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qd(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qd(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Pa) || (e.globalVersion = Pa, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Xl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ut, i = On;
  ut = e, On = !0;
  try {
    Wd(e);
    const a = e.fn(e._value);
    (t.version === 0 || Kn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ut = n, On = i, Yd(e), e.flags &= -3;
  }
}
function Nc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      Nc(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function f0(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let On = !0;
const Xd = [];
function hr() {
  Xd.push(On), On = !1;
}
function mr() {
  const e = Xd.pop();
  On = e === void 0 ? !0 : e;
}
function df(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ut;
    ut = void 0;
    try {
      t();
    } finally {
      ut = n;
    }
  }
}
let Pa = 0;
class d0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class kc {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ut || !On || ut === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ut)
      n = this.activeLink = new d0(ut, this), ut.deps ? (n.prevDep = ut.depsTail, ut.depsTail.nextDep = n, ut.depsTail = n) : ut.deps = ut.depsTail = n, Jd(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ut.depsTail, n.nextDep = void 0, ut.depsTail.nextDep = n, ut.depsTail = n, ut.deps === n && (ut.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Pa++, this.notify(t);
  }
  notify(t) {
    Sc();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Mc();
    }
  }
}
function Jd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        Jd(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Jl = /* @__PURE__ */ new WeakMap(), Wr = /* @__PURE__ */ Symbol(
  ""
), Zl = /* @__PURE__ */ Symbol(
  ""
), Aa = /* @__PURE__ */ Symbol(
  ""
);
function Yt(e, t, n) {
  if (On && ut) {
    let i = Jl.get(e);
    i || Jl.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new kc()), a.map = i, a.key = n), a.track();
  }
}
function cr(e, t, n, i, a, l) {
  const u = Jl.get(e);
  if (!u) {
    Pa++;
    return;
  }
  const f = (p) => {
    p && p.trigger();
  };
  if (Sc(), t === "clear")
    u.forEach(f);
  else {
    const p = Ve(e), b = p && xc(n);
    if (p && n === "length") {
      const _ = Number(i);
      u.forEach((x, S) => {
        (S === "length" || S === Aa || !Xn(S) && S >= _) && f(x);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && f(u.get(n)), b && f(u.get(Aa)), t) {
        case "add":
          p ? b && f(u.get("length")) : (f(u.get(Wr)), Ri(e) && f(u.get(Zl)));
          break;
        case "delete":
          p || (f(u.get(Wr)), Ri(e) && f(u.get(Zl)));
          break;
        case "set":
          Ri(e) && f(u.get(Wr));
          break;
      }
  }
  Mc();
}
function Mi(e) {
  const t = /* @__PURE__ */ tt(e);
  return t === e ? t : (Yt(t, "iterate", Aa), /* @__PURE__ */ kn(e) ? t : t.map(Rn));
}
function Ms(e) {
  return Yt(e = /* @__PURE__ */ tt(e), "iterate", Aa), e;
}
function Un(e, t) {
  return /* @__PURE__ */ pr(e) ? Hi(/* @__PURE__ */ Yr(e) ? Rn(t) : t) : Rn(t);
}
const h0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Nl(this, Symbol.iterator, (e) => Un(this, e));
  },
  concat(...e) {
    return Mi(this).concat(
      ...e.map((t) => Ve(t) ? Mi(t) : t)
    );
  },
  entries() {
    return Nl(this, "entries", (e) => (e[1] = Un(this, e[1]), e));
  },
  every(e, t) {
    return nr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return nr(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Un(this, i)),
      arguments
    );
  },
  find(e, t) {
    return nr(
      this,
      "find",
      e,
      t,
      (n) => Un(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return nr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return nr(
      this,
      "findLast",
      e,
      t,
      (n) => Un(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return nr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return nr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return kl(this, "includes", e);
  },
  indexOf(...e) {
    return kl(this, "indexOf", e);
  },
  join(e) {
    return Mi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return kl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return nr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ra(this, "pop");
  },
  push(...e) {
    return ra(this, "push", e);
  },
  reduce(e, ...t) {
    return hf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return hf(this, "reduceRight", e, t);
  },
  shift() {
    return ra(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return nr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ra(this, "splice", e);
  },
  toReversed() {
    return Mi(this).toReversed();
  },
  toSorted(e) {
    return Mi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Mi(this).toSpliced(...e);
  },
  unshift(...e) {
    return ra(this, "unshift", e);
  },
  values() {
    return Nl(this, "values", (e) => Un(this, e));
  }
};
function Nl(e, t, n) {
  const i = Ms(e), a = i[t]();
  return i !== e && !/* @__PURE__ */ kn(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.done || (l.value = n(l.value)), l;
  }), a;
}
const m0 = Array.prototype;
function nr(e, t, n, i, a, l) {
  const u = Ms(e), f = u !== e && !/* @__PURE__ */ kn(e), p = u[t];
  if (p !== m0[t]) {
    const x = p.apply(e, l);
    return f ? Rn(x) : x;
  }
  let b = n;
  u !== e && (f ? b = function(x, S) {
    return n.call(this, Un(e, x), S, e);
  } : n.length > 2 && (b = function(x, S) {
    return n.call(this, x, S, e);
  }));
  const _ = p.call(u, b, i);
  return f && a ? a(_) : _;
}
function hf(e, t, n, i) {
  const a = Ms(e), l = a !== e && !/* @__PURE__ */ kn(e);
  let u = n, f = !1;
  a !== e && (l ? (f = i.length === 0, u = function(b, _, x) {
    return f && (f = !1, b = Un(e, b)), n.call(this, b, Un(e, _), x, e);
  }) : n.length > 3 && (u = function(b, _, x) {
    return n.call(this, b, _, x, e);
  }));
  const p = a[t](u, ...i);
  return f ? Un(e, p) : p;
}
function kl(e, t, n) {
  const i = /* @__PURE__ */ tt(e);
  Yt(i, "iterate", Aa);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Cc(n[0]) ? (n[0] = /* @__PURE__ */ tt(n[0]), i[t](...n)) : a;
}
function ra(e, t, n = []) {
  hr(), Sc();
  const i = (/* @__PURE__ */ tt(e))[t].apply(e, n);
  return Mc(), mr(), i;
}
const p0 = /* @__PURE__ */ vc("__proto__,__v_isRef,__isVue"), Zd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Xn)
);
function g0(e) {
  Xn(e) || (e = String(e));
  const t = /* @__PURE__ */ tt(this);
  return Yt(t, "has", e), t.hasOwnProperty(e);
}
class Qd {
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
      return i === (a ? l ? k0 : rh : l ? nh : th).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const u = Ve(t);
    if (!a) {
      let p;
      if (u && (p = h0[n]))
        return p;
      if (n === "hasOwnProperty")
        return g0;
    }
    const f = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Xt(t) ? t : i
    );
    if ((Xn(n) ? Zd.has(n) : p0(n)) || (a || Yt(t, "get", n), l))
      return f;
    if (/* @__PURE__ */ Xt(f)) {
      const p = u && xc(n) ? f : f.value;
      return a && at(p) ? /* @__PURE__ */ ec(p) : p;
    }
    return at(f) ? a ? /* @__PURE__ */ ec(f) : /* @__PURE__ */ Ns(f) : f;
  }
}
class eh extends Qd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let l = t[n];
    const u = Ve(t) && xc(n);
    if (!this._isShallow) {
      const b = /* @__PURE__ */ pr(l);
      if (!/* @__PURE__ */ kn(i) && !/* @__PURE__ */ pr(i) && (l = /* @__PURE__ */ tt(l), i = /* @__PURE__ */ tt(i)), !u && /* @__PURE__ */ Xt(l) && !/* @__PURE__ */ Xt(i))
        return b || (l.value = i), !0;
    }
    const f = u ? Number(n) < t.length : nt(t, n), p = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ Xt(t) ? t : a
    );
    return t === /* @__PURE__ */ tt(a) && (f ? Kn(i, l) && cr(t, "set", n, i) : cr(t, "add", n, i)), p;
  }
  deleteProperty(t, n) {
    const i = nt(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && cr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Xn(n) || !Zd.has(n)) && Yt(t, "has", n), i;
  }
  ownKeys(t) {
    return Yt(
      t,
      "iterate",
      Ve(t) ? "length" : Wr
    ), Reflect.ownKeys(t);
  }
}
class b0 extends Qd {
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
const y0 = /* @__PURE__ */ new eh(), v0 = /* @__PURE__ */ new b0(), _0 = /* @__PURE__ */ new eh(!0);
const Ql = (e) => e, yo = (e) => Reflect.getPrototypeOf(e);
function x0(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, l = /* @__PURE__ */ tt(a), u = Ri(l), f = e === "entries" || e === Symbol.iterator && u, p = e === "keys" && u, b = a[e](...i), _ = n ? Ql : t ? Hi : Rn;
    return !t && Yt(
      l,
      "iterate",
      p ? Zl : Wr
    ), Jt(
      // inheriting all iterator properties
      Object.create(b),
      {
        // iterator protocol
        next() {
          const { value: x, done: S } = b.next();
          return S ? { value: x, done: S } : {
            value: f ? [_(x[0]), _(x[1])] : _(x),
            done: S
          };
        }
      }
    );
  };
}
function vo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function w0(e, t) {
  const n = {
    get(a) {
      const l = this.__v_raw, u = /* @__PURE__ */ tt(l), f = /* @__PURE__ */ tt(a);
      e || (Kn(a, f) && Yt(u, "get", a), Yt(u, "get", f));
      const { has: p } = yo(u), b = t ? Ql : e ? Hi : Rn;
      if (p.call(u, a))
        return b(l.get(a));
      if (p.call(u, f))
        return b(l.get(f));
      l !== u && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Yt(/* @__PURE__ */ tt(a), "iterate", Wr), a.size;
    },
    has(a) {
      const l = this.__v_raw, u = /* @__PURE__ */ tt(l), f = /* @__PURE__ */ tt(a);
      return e || (Kn(a, f) && Yt(u, "has", a), Yt(u, "has", f)), a === f ? l.has(a) : l.has(a) || l.has(f);
    },
    forEach(a, l) {
      const u = this, f = u.__v_raw, p = /* @__PURE__ */ tt(f), b = t ? Ql : e ? Hi : Rn;
      return !e && Yt(p, "iterate", Wr), f.forEach((_, x) => a.call(l, b(_), b(x), u));
    }
  };
  return Jt(
    n,
    e ? {
      add: vo("add"),
      set: vo("set"),
      delete: vo("delete"),
      clear: vo("clear")
    } : {
      add(a) {
        const l = /* @__PURE__ */ tt(this), u = yo(l), f = /* @__PURE__ */ tt(a), p = !t && !/* @__PURE__ */ kn(a) && !/* @__PURE__ */ pr(a) ? f : a;
        return u.has.call(l, p) || Kn(a, p) && u.has.call(l, a) || Kn(f, p) && u.has.call(l, f) || (l.add(p), cr(l, "add", p, p)), this;
      },
      set(a, l) {
        !t && !/* @__PURE__ */ kn(l) && !/* @__PURE__ */ pr(l) && (l = /* @__PURE__ */ tt(l));
        const u = /* @__PURE__ */ tt(this), { has: f, get: p } = yo(u);
        let b = f.call(u, a);
        b || (a = /* @__PURE__ */ tt(a), b = f.call(u, a));
        const _ = p.call(u, a);
        return u.set(a, l), b ? Kn(l, _) && cr(u, "set", a, l) : cr(u, "add", a, l), this;
      },
      delete(a) {
        const l = /* @__PURE__ */ tt(this), { has: u, get: f } = yo(l);
        let p = u.call(l, a);
        p || (a = /* @__PURE__ */ tt(a), p = u.call(l, a)), f && f.call(l, a);
        const b = l.delete(a);
        return p && cr(l, "delete", a, void 0), b;
      },
      clear() {
        const a = /* @__PURE__ */ tt(this), l = a.size !== 0, u = a.clear();
        return l && cr(
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
    n[a] = x0(a, e, t);
  }), n;
}
function Pc(e, t) {
  const n = w0(e, t);
  return (i, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    nt(n, a) && a in i ? n : i,
    a,
    l
  );
}
const S0 = {
  get: /* @__PURE__ */ Pc(!1, !1)
}, M0 = {
  get: /* @__PURE__ */ Pc(!1, !0)
}, N0 = {
  get: /* @__PURE__ */ Pc(!0, !1)
};
const th = /* @__PURE__ */ new WeakMap(), nh = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ new WeakMap(), k0 = /* @__PURE__ */ new WeakMap();
function P0(e) {
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
function A0(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : P0(Zg(e));
}
// @__NO_SIDE_EFFECTS__
function Ns(e) {
  return /* @__PURE__ */ pr(e) ? e : Ac(
    e,
    !1,
    y0,
    S0,
    th
  );
}
// @__NO_SIDE_EFFECTS__
function C0(e) {
  return Ac(
    e,
    !1,
    _0,
    M0,
    nh
  );
}
// @__NO_SIDE_EFFECTS__
function ec(e) {
  return Ac(
    e,
    !0,
    v0,
    N0,
    rh
  );
}
function Ac(e, t, n, i, a) {
  if (!at(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = A0(e);
  if (l === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const f = new Proxy(
    e,
    l === 2 ? i : n
  );
  return a.set(e, f), f;
}
// @__NO_SIDE_EFFECTS__
function Yr(e) {
  return /* @__PURE__ */ pr(e) ? /* @__PURE__ */ Yr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function pr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Cc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ tt(t) : e;
}
function I0(e) {
  return !nt(e, "__v_skip") && Object.isExtensible(e) && jd(e, "__v_skip", !0), e;
}
const Rn = (e) => at(e) ? /* @__PURE__ */ Ns(e) : e, Hi = (e) => at(e) ? /* @__PURE__ */ ec(e) : e;
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Qo(e) {
  return T0(e, !1);
}
function T0(e, t) {
  return /* @__PURE__ */ Xt(e) ? e : new E0(e, t);
}
class E0 {
  constructor(t, n) {
    this.dep = new kc(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ tt(t), this._value = n ? t : Rn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ kn(t) || /* @__PURE__ */ pr(t);
    t = i ? t : /* @__PURE__ */ tt(t), Kn(t, n) && (this._rawValue = t, this._value = i ? t : Rn(t), this.dep.trigger());
  }
}
function Gr(e) {
  return /* @__PURE__ */ Xt(e) ? e.value : e;
}
const D0 = {
  get: (e, t, n) => t === "__v_raw" ? e : Gr(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ Xt(a) && !/* @__PURE__ */ Xt(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function ih(e) {
  return /* @__PURE__ */ Yr(e) ? e : new Proxy(e, D0);
}
class O0 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new kc(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Pa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ut !== this)
      return Kd(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qd(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function R0(e, t, n = !1) {
  let i, a;
  return He(e) ? i = e : (i = e.get, a = e.set), new O0(i, a, n);
}
const _o = {}, es = /* @__PURE__ */ new WeakMap();
let Ur;
function F0(e, t = !1, n = Ur) {
  if (n) {
    let i = es.get(n);
    i || es.set(n, i = []), i.push(e);
  }
}
function L0(e, t, n = lt) {
  const { immediate: i, deep: a, once: l, scheduler: u, augmentJob: f, call: p } = n, b = (E) => a ? E : /* @__PURE__ */ kn(E) || a === !1 || a === 0 ? ur(E, 1) : ur(E);
  let _, x, S, A, v = !1, R = !1;
  if (/* @__PURE__ */ Xt(e) ? (x = () => e.value, v = /* @__PURE__ */ kn(e)) : /* @__PURE__ */ Yr(e) ? (x = () => b(e), v = !0) : Ve(e) ? (R = !0, v = e.some((E) => /* @__PURE__ */ Yr(E) || /* @__PURE__ */ kn(E)), x = () => e.map((E) => {
    if (/* @__PURE__ */ Xt(E))
      return E.value;
    if (/* @__PURE__ */ Yr(E))
      return b(E);
    if (He(E))
      return p ? p(E, 2) : E();
  })) : He(e) ? t ? x = p ? () => p(e, 2) : e : x = () => {
    if (S) {
      hr();
      try {
        S();
      } finally {
        mr();
      }
    }
    const E = Ur;
    Ur = _;
    try {
      return p ? p(e, 3, [A]) : e(A);
    } finally {
      Ur = E;
    }
  } : x = qn, t && a) {
    const E = x, F = a === !0 ? 1 / 0 : a;
    x = () => ur(E(), F);
  }
  const H = u0(), j = () => {
    _.stop(), H && H.active && _c(H.effects, _);
  };
  if (l && t) {
    const E = t;
    t = (...F) => {
      E(...F), j();
    };
  }
  let P = R ? new Array(e.length).fill(_o) : _o;
  const D = (E) => {
    if (!(!(_.flags & 1) || !_.dirty && !E))
      if (t) {
        const F = _.run();
        if (a || v || (R ? F.some((Y, L) => Kn(Y, P[L])) : Kn(F, P))) {
          S && S();
          const Y = Ur;
          Ur = _;
          try {
            const L = [
              F,
              // pass undefined as the old value when it's changed for the first time
              P === _o ? void 0 : R && P[0] === _o ? [] : P,
              A
            ];
            P = F, p ? p(t, 3, L) : (
              // @ts-expect-error
              t(...L)
            );
          } finally {
            Ur = Y;
          }
        }
      } else
        _.run();
  };
  return f && f(D), _ = new Bd(x), _.scheduler = u ? () => u(D, !1) : D, A = (E) => F0(E, !1, _), S = _.onStop = () => {
    const E = es.get(_);
    if (E) {
      if (p)
        p(E, 4);
      else
        for (const F of E) F();
      es.delete(_);
    }
  }, t ? i ? D(!0) : P = _.run() : u ? u(D.bind(null, !0), !0) : _.run(), j.pause = _.pause.bind(_), j.resume = _.resume.bind(_), j.stop = j, j;
}
function ur(e, t = 1 / 0, n) {
  if (t <= 0 || !at(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Xt(e))
    ur(e.value, t, n);
  else if (Ve(e))
    for (let i = 0; i < e.length; i++)
      ur(e[i], t, n);
  else if (Fd(e) || Ri(e))
    e.forEach((i) => {
      ur(i, t, n);
    });
  else if ($d(e)) {
    for (const i in e)
      ur(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && ur(e[i], t, n);
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
    ks(a, t, n);
  }
}
function Jn(e, t, n, i) {
  if (He(e)) {
    const a = Ha(e, t, n, i);
    return a && Ld(a) && a.catch((l) => {
      ks(l, t, n);
    }), a;
  }
  if (Ve(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(Jn(e[l], t, n, i));
    return a;
  }
}
function ks(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: u } = t && t.appContext.config || lt;
  if (t) {
    let f = t.parent;
    const p = t.proxy, b = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; f; ) {
      const _ = f.ec;
      if (_) {
        for (let x = 0; x < _.length; x++)
          if (_[x](e, p, b) === !1)
            return;
      }
      f = f.parent;
    }
    if (l) {
      hr(), Ha(l, null, 10, [
        e,
        p,
        b
      ]), mr();
      return;
    }
  }
  z0(e, n, a, i, u);
}
function z0(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const an = [];
let Hn = -1;
const Fi = [];
let Nr = null, Ci = 0;
const ah = /* @__PURE__ */ Promise.resolve();
let ts = null;
function Ic(e) {
  const t = ts || ah;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function $0(e) {
  let t = Hn + 1, n = an.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = an[i], l = Ca(a);
    l < e || l === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Tc(e) {
  if (!(e.flags & 1)) {
    const t = Ca(e), n = an[an.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ca(n) ? an.push(e) : an.splice($0(t), 0, e), e.flags |= 1, oh();
  }
}
function oh() {
  ts || (ts = ah.then(lh));
}
function j0(e) {
  Ve(e) ? Fi.push(...e) : Nr && e.id === -1 ? Nr.splice(Ci + 1, 0, e) : e.flags & 1 || (Fi.push(e), e.flags |= 1), oh();
}
function mf(e, t, n = Hn + 1) {
  for (; n < an.length; n++) {
    const i = an[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      an.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function sh(e) {
  if (Fi.length) {
    const t = [...new Set(Fi)].sort(
      (n, i) => Ca(n) - Ca(i)
    );
    if (Fi.length = 0, Nr) {
      Nr.push(...t);
      return;
    }
    for (Nr = t, Ci = 0; Ci < Nr.length; Ci++) {
      const n = Nr[Ci];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Nr = null, Ci = 0;
  }
}
const Ca = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function lh(e) {
  try {
    for (Hn = 0; Hn < an.length; Hn++) {
      const t = an[Hn];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ha(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; Hn < an.length; Hn++) {
      const t = an[Hn];
      t && (t.flags &= -2);
    }
    Hn = -1, an.length = 0, sh(), ts = null, (an.length || Fi.length) && lh();
  }
}
let yn = null, ch = null;
function ns(e) {
  const t = yn;
  return yn = e, ch = e && e.type.__scopeId || null, t;
}
function uh(e, t = yn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && kf(-1);
    const l = ns(t);
    let u;
    try {
      u = e(...a);
    } finally {
      ns(l), i._d && kf(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ia(e, t) {
  if (yn === null)
    return e;
  const n = Is(yn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [l, u, f, p = lt] = t[a];
    l && (He(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && ur(u), i.push({
      dir: l,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: f,
      modifiers: p
    }));
  }
  return e;
}
function zr(e, t, n, i) {
  const a = e.dirs, l = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    l && (f.oldValue = l[u].value);
    let p = f.dir[i];
    p && (hr(), Jn(p, n, 8, [
      e.el,
      f,
      e,
      t
    ]), mr());
  }
}
function V0(e, t) {
  if (qt) {
    let n = qt.provides;
    const i = qt.parent && qt.parent.provides;
    i === n && (n = qt.provides = Object.create(i)), n[e] = t;
  }
}
function Ho(e, t, n = !1) {
  const i = jb();
  if (i || zi) {
    let a = zi ? zi._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && He(t) ? t.call(i && i.proxy) : t;
  }
}
const H0 = /* @__PURE__ */ Symbol.for("v-scx"), U0 = () => Ho(H0);
function Li(e, t, n) {
  return fh(e, t, n);
}
function fh(e, t, n = lt) {
  const { immediate: i, deep: a, flush: l, once: u } = n, f = Jt({}, n), p = t && i || !t && l !== "post";
  let b;
  if (Ea) {
    if (l === "sync") {
      const A = U0();
      b = A.__watcherHandles || (A.__watcherHandles = []);
    } else if (!p) {
      const A = () => {
      };
      return A.stop = qn, A.resume = qn, A.pause = qn, A;
    }
  }
  const _ = qt;
  f.call = (A, v, R) => Jn(A, _, v, R);
  let x = !1;
  l === "post" ? f.scheduler = (A) => {
    fn(A, _ && _.suspense);
  } : l !== "sync" && (x = !0, f.scheduler = (A, v) => {
    v ? A() : Tc(A);
  }), f.augmentJob = (A) => {
    t && (A.flags |= 4), x && (A.flags |= 2, _ && (A.id = _.uid, A.i = _));
  };
  const S = L0(e, t, f);
  return Ea && (b ? b.push(S) : p && S()), S;
}
function B0(e, t, n) {
  const i = this.proxy, a = kt(e) ? e.includes(".") ? dh(i, e) : () => i[e] : e.bind(i, i);
  let l;
  He(t) ? l = t : (l = t.handler, n = t);
  const u = Ua(this), f = fh(a, l.bind(i), n);
  return u(), f;
}
function dh(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const G0 = /* @__PURE__ */ Symbol("_vte"), K0 = (e) => e.__isTeleport, W0 = /* @__PURE__ */ Symbol("_leaveCb");
function Ec(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Ec(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function hh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function pf(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const rs = /* @__PURE__ */ new WeakMap();
function ya(e, t, n, i, a = !1) {
  if (Ve(e)) {
    e.forEach(
      (R, H) => ya(
        R,
        t && (Ve(t) ? t[H] : t),
        n,
        i,
        a
      )
    );
    return;
  }
  if (va(i) && !a) {
    i.shapeFlag & 512 && i.type.__asyncResolved && i.component.subTree.component && ya(e, t, n, i.component.subTree);
    return;
  }
  const l = i.shapeFlag & 4 ? Is(i.component) : i.el, u = a ? null : l, { i: f, r: p } = e, b = t && t.r, _ = f.refs === lt ? f.refs = {} : f.refs, x = f.setupState, S = /* @__PURE__ */ tt(x), A = x === lt ? Rd : (R) => pf(_, R) ? !1 : nt(S, R), v = (R, H) => !(H && pf(_, H));
  if (b != null && b !== p) {
    if (gf(t), kt(b))
      _[b] = null, A(b) && (x[b] = null);
    else if (/* @__PURE__ */ Xt(b)) {
      const R = t;
      v(b, R.k) && (b.value = null), R.k && (_[R.k] = null);
    }
  }
  if (He(p))
    Ha(p, f, 12, [u, _]);
  else {
    const R = kt(p), H = /* @__PURE__ */ Xt(p);
    if (R || H) {
      const j = () => {
        if (e.f) {
          const P = R ? A(p) ? x[p] : _[p] : v() || !e.k ? p.value : _[e.k];
          if (a)
            Ve(P) && _c(P, l);
          else if (Ve(P))
            P.includes(l) || P.push(l);
          else if (R)
            _[p] = [l], A(p) && (x[p] = _[p]);
          else {
            const D = [l];
            v(p, e.k) && (p.value = D), e.k && (_[e.k] = D);
          }
        } else R ? (_[p] = u, A(p) && (x[p] = u)) : H && (v(p, e.k) && (p.value = u), e.k && (_[e.k] = u));
      };
      if (u) {
        const P = () => {
          j(), rs.delete(e);
        };
        P.id = -1, rs.set(e, P), fn(P, n);
      } else
        gf(e), j();
    }
  }
}
function gf(e) {
  const t = rs.get(e);
  t && (t.flags |= 8, rs.delete(e));
}
Ss().requestIdleCallback;
Ss().cancelIdleCallback;
const va = (e) => !!e.type.__asyncLoader, mh = (e) => e.type.__isKeepAlive;
function Y0(e, t) {
  ph(e, "a", t);
}
function q0(e, t) {
  ph(e, "da", t);
}
function ph(e, t, n = qt) {
  const i = e.__wdc || (e.__wdc = () => {
    let a = n;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Ps(t, i, n), n) {
    let a = n.parent;
    for (; a && a.parent; )
      mh(a.parent.vnode) && X0(i, t, n, a), a = a.parent;
  }
}
function X0(e, t, n, i) {
  const a = Ps(
    t,
    e,
    i,
    !0
    /* prepend */
  );
  bh(() => {
    _c(i[t], a);
  }, n);
}
function Ps(e, t, n = qt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...u) => {
      hr();
      const f = Ua(n), p = Jn(t, n, e, u);
      return f(), mr(), p;
    });
    return i ? a.unshift(l) : a.push(l), l;
  }
}
const gr = (e) => (t, n = qt) => {
  (!Ea || e === "sp") && Ps(e, (...i) => t(...i), n);
}, J0 = gr("bm"), gh = gr("m"), Z0 = gr(
  "bu"
), Q0 = gr("u"), Dc = gr(
  "bum"
), bh = gr("um"), eb = gr(
  "sp"
), tb = gr("rtg"), nb = gr("rtc");
function rb(e, t = qt) {
  Ps("ec", e, t);
}
const ib = "components", yh = /* @__PURE__ */ Symbol.for("v-ndc");
function ab(e) {
  return kt(e) ? ob(ib, e, !1) || e : e || yh;
}
function ob(e, t, n = !0, i = !1) {
  const a = yn || qt;
  if (a) {
    const l = a.type;
    {
      const f = Gb(
        l,
        !1
      );
      if (f && (f === t || f === sn(t) || f === ws(sn(t))))
        return l;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      bf(a[e] || l[e], t) || // global registration
      bf(a.appContext[e], t)
    );
    return !u && i ? l : u;
  }
}
function bf(e, t) {
  return e && (e[t] || e[sn(t)] || e[ws(sn(t))]);
}
function Lt(e, t, n, i) {
  let a;
  const l = n, u = Ve(e);
  if (u || kt(e)) {
    const f = u && /* @__PURE__ */ Yr(e);
    let p = !1, b = !1;
    f && (p = !/* @__PURE__ */ kn(e), b = /* @__PURE__ */ pr(e), e = Ms(e)), a = new Array(e.length);
    for (let _ = 0, x = e.length; _ < x; _++)
      a[_] = t(
        p ? b ? Hi(Rn(e[_])) : Rn(e[_]) : e[_],
        _,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let f = 0; f < e; f++)
      a[f] = t(f + 1, f, void 0, l);
  } else if (at(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (f, p) => t(f, p, void 0, l)
      );
    else {
      const f = Object.keys(e);
      a = new Array(f.length);
      for (let p = 0, b = f.length; p < b; p++) {
        const _ = f[p];
        a[p] = t(e[_], _, p, l);
      }
    }
  else
    a = [];
  return a;
}
const tc = (e) => e ? $h(e) ? Is(e) : tc(e.parent) : null, _a = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Jt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => tc(e.parent),
    $root: (e) => tc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => _h(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Tc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ic.bind(e.proxy)),
    $watch: (e) => B0.bind(e)
  })
), Pl = (e, t) => e !== lt && !e.__isScriptSetup && nt(e, t), sb = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: l, accessCache: u, type: f, appContext: p } = e;
    if (t[0] !== "$") {
      const S = u[t];
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
        if (Pl(i, t))
          return u[t] = 1, i[t];
        if (a !== lt && nt(a, t))
          return u[t] = 2, a[t];
        if (nt(l, t))
          return u[t] = 3, l[t];
        if (n !== lt && nt(n, t))
          return u[t] = 4, n[t];
        nc && (u[t] = 0);
      }
    }
    const b = _a[t];
    let _, x;
    if (b)
      return t === "$attrs" && Yt(e.attrs, "get", ""), b(e);
    if (
      // css module (injected by vue-loader)
      (_ = f.__cssModules) && (_ = _[t])
    )
      return _;
    if (n !== lt && nt(n, t))
      return u[t] = 4, n[t];
    if (
      // global properties
      x = p.config.globalProperties, nt(x, t)
    )
      return x[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: l } = e;
    return Pl(a, t) ? (a[t] = n, !0) : i !== lt && nt(i, t) ? (i[t] = n, !0) : nt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: l, type: u }
  }, f) {
    let p;
    return !!(n[f] || e !== lt && f[0] !== "$" && nt(e, f) || Pl(t, f) || nt(l, f) || nt(i, f) || nt(_a, f) || nt(a.config.globalProperties, f) || (p = u.__cssModules) && p[f]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : nt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function yf(e) {
  return Ve(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let nc = !0;
function lb(e) {
  const t = _h(e), n = e.proxy, i = e.ctx;
  nc = !1, t.beforeCreate && vf(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: u,
    watch: f,
    provide: p,
    inject: b,
    // lifecycle
    created: _,
    beforeMount: x,
    mounted: S,
    beforeUpdate: A,
    updated: v,
    activated: R,
    deactivated: H,
    beforeDestroy: j,
    beforeUnmount: P,
    destroyed: D,
    unmounted: E,
    render: F,
    renderTracked: Y,
    renderTriggered: L,
    errorCaptured: Z,
    serverPrefetch: fe,
    // public API
    expose: U,
    inheritAttrs: be,
    // assets
    components: xe,
    directives: C,
    filters: we
  } = t;
  if (b && cb(b, i, null), u)
    for (const z in u) {
      const J = u[z];
      He(J) && (i[z] = J.bind(n));
    }
  if (a) {
    const z = a.call(n, n);
    at(z) && (e.data = /* @__PURE__ */ Ns(z));
  }
  if (nc = !0, l)
    for (const z in l) {
      const J = l[z], _e = He(J) ? J.bind(n, n) : He(J.get) ? J.get.bind(n, n) : qn, Re = !He(J) && He(J.set) ? J.set.bind(n) : qn, Fe = xt({
        get: _e,
        set: Re
      });
      Object.defineProperty(i, z, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (Be) => Fe.value = Be
      });
    }
  if (f)
    for (const z in f)
      vh(f[z], i, n, z);
  if (p) {
    const z = He(p) ? p.call(n) : p;
    Reflect.ownKeys(z).forEach((J) => {
      V0(J, z[J]);
    });
  }
  _ && vf(_, e, "c");
  function pe(z, J) {
    Ve(J) ? J.forEach((_e) => z(_e.bind(n))) : J && z(J.bind(n));
  }
  if (pe(J0, x), pe(gh, S), pe(Z0, A), pe(Q0, v), pe(Y0, R), pe(q0, H), pe(rb, Z), pe(nb, Y), pe(tb, L), pe(Dc, P), pe(bh, E), pe(eb, fe), Ve(U))
    if (U.length) {
      const z = e.exposed || (e.exposed = {});
      U.forEach((J) => {
        Object.defineProperty(z, J, {
          get: () => n[J],
          set: (_e) => n[J] = _e,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  F && e.render === qn && (e.render = F), be != null && (e.inheritAttrs = be), xe && (e.components = xe), C && (e.directives = C), fe && hh(e);
}
function cb(e, t, n = qn) {
  Ve(e) && (e = rc(e));
  for (const i in e) {
    const a = e[i];
    let l;
    at(a) ? "default" in a ? l = Ho(
      a.from || i,
      a.default,
      !0
    ) : l = Ho(a.from || i) : l = Ho(a), /* @__PURE__ */ Xt(l) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (u) => l.value = u
    }) : t[i] = l;
  }
}
function vf(e, t, n) {
  Jn(
    Ve(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function vh(e, t, n, i) {
  let a = i.includes(".") ? dh(n, i) : () => n[i];
  if (kt(e)) {
    const l = t[e];
    He(l) && Li(a, l);
  } else if (He(e))
    Li(a, e.bind(n));
  else if (at(e))
    if (Ve(e))
      e.forEach((l) => vh(l, t, n, i));
    else {
      const l = He(e.handler) ? e.handler.bind(n) : t[e.handler];
      He(l) && Li(a, l, e);
    }
}
function _h(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: u }
  } = e.appContext, f = l.get(t);
  let p;
  return f ? p = f : !a.length && !n && !i ? p = t : (p = {}, a.length && a.forEach(
    (b) => is(p, b, u, !0)
  ), is(p, t, u)), at(t) && l.set(t, p), p;
}
function is(e, t, n, i = !1) {
  const { mixins: a, extends: l } = t;
  l && is(e, l, n, !0), a && a.forEach(
    (u) => is(e, u, n, !0)
  );
  for (const u in t)
    if (!(i && u === "expose")) {
      const f = ub[u] || n && n[u];
      e[u] = f ? f(e[u], t[u]) : t[u];
    }
  return e;
}
const ub = {
  data: _f,
  props: xf,
  emits: xf,
  // objects
  methods: fa,
  computed: fa,
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
  components: fa,
  directives: fa,
  // watch
  watch: db,
  // provide / inject
  provide: _f,
  inject: fb
};
function _f(e, t) {
  return t ? e ? function() {
    return Jt(
      He(e) ? e.call(this, this) : e,
      He(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function fb(e, t) {
  return fa(rc(e), rc(t));
}
function rc(e) {
  if (Ve(e)) {
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
function fa(e, t) {
  return e ? Jt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xf(e, t) {
  return e ? Ve(e) && Ve(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Jt(
    /* @__PURE__ */ Object.create(null),
    yf(e),
    yf(t ?? {})
  ) : t;
}
function db(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Jt(/* @__PURE__ */ Object.create(null), e);
  for (const i in t)
    n[i] = rn(e[i], t[i]);
  return n;
}
function xh() {
  return {
    app: null,
    config: {
      isNativeTag: Rd,
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
let hb = 0;
function mb(e, t) {
  return function(i, a = null) {
    He(i) || (i = Jt({}, i)), a != null && !at(a) && (a = null);
    const l = xh(), u = /* @__PURE__ */ new WeakSet(), f = [];
    let p = !1;
    const b = l.app = {
      _uid: hb++,
      _component: i,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: Wb,
      get config() {
        return l.config;
      },
      set config(_) {
      },
      use(_, ...x) {
        return u.has(_) || (_ && He(_.install) ? (u.add(_), _.install(b, ...x)) : He(_) && (u.add(_), _(b, ...x))), b;
      },
      mixin(_) {
        return l.mixins.includes(_) || l.mixins.push(_), b;
      },
      component(_, x) {
        return x ? (l.components[_] = x, b) : l.components[_];
      },
      directive(_, x) {
        return x ? (l.directives[_] = x, b) : l.directives[_];
      },
      mount(_, x, S) {
        if (!p) {
          const A = b._ceVNode || We(i, a);
          return A.appContext = l, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(A, _, S), p = !0, b._container = _, _.__vue_app__ = b, Is(A.component);
        }
      },
      onUnmount(_) {
        f.push(_);
      },
      unmount() {
        p && (Jn(
          f,
          b._instance,
          16
        ), e(null, b._container), delete b._container.__vue_app__);
      },
      provide(_, x) {
        return l.provides[_] = x, b;
      },
      runWithContext(_) {
        const x = zi;
        zi = b;
        try {
          return _();
        } finally {
          zi = x;
        }
      }
    };
    return b;
  };
}
let zi = null;
const pb = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${sn(t)}Modifiers`] || e[`${ii(t)}Modifiers`];
function gb(e, t, ...n) {
  if (e.isUnmounted) return;
  const i = e.vnode.props || lt;
  let a = n;
  const l = t.startsWith("update:"), u = l && pb(i, t.slice(7));
  u && (u.trim && (a = n.map((_) => kt(_) ? _.trim() : _)), u.number && (a = n.map(t0)));
  let f, p = i[f = xl(t)] || // also try camelCase event handler (#2249)
  i[f = xl(sn(t))];
  !p && l && (p = i[f = xl(ii(t))]), p && Jn(
    p,
    e,
    6,
    a
  );
  const b = i[f + "Once"];
  if (b) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[f])
      return;
    e.emitted[f] = !0, Jn(
      b,
      e,
      6,
      a
    );
  }
}
const bb = /* @__PURE__ */ new WeakMap();
function wh(e, t, n = !1) {
  const i = n ? bb : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let u = {}, f = !1;
  if (!He(e)) {
    const p = (b) => {
      const _ = wh(b, t, !0);
      _ && (f = !0, Jt(u, _));
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !l && !f ? (at(e) && i.set(e, null), null) : (Ve(l) ? l.forEach((p) => u[p] = null) : Jt(u, l), at(e) && i.set(e, u), u);
}
function As(e, t) {
  return !e || !vs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), nt(e, t[0].toLowerCase() + t.slice(1)) || nt(e, ii(t)) || nt(e, t));
}
function wf(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [l],
    slots: u,
    attrs: f,
    emit: p,
    render: b,
    renderCache: _,
    props: x,
    data: S,
    setupState: A,
    ctx: v,
    inheritAttrs: R
  } = e, H = ns(e);
  let j, P;
  try {
    if (n.shapeFlag & 4) {
      const E = a || i, F = E;
      j = Bn(
        b.call(
          F,
          E,
          _,
          x,
          A,
          S,
          v
        )
      ), P = f;
    } else {
      const E = t;
      j = Bn(
        E.length > 1 ? E(
          x,
          { attrs: f, slots: u, emit: p }
        ) : E(
          x,
          null
        )
      ), P = t.props ? f : yb(f);
    }
  } catch (E) {
    xa.length = 0, ks(E, e, 1), j = We(Cr);
  }
  let D = j;
  if (P && R !== !1) {
    const E = Object.keys(P), { shapeFlag: F } = D;
    E.length && F & 7 && (l && E.some(_s) && (P = vb(
      P,
      l
    )), D = Ui(D, P, !1, !0));
  }
  return n.dirs && (D = Ui(D, null, !1, !0), D.dirs = D.dirs ? D.dirs.concat(n.dirs) : n.dirs), n.transition && Ec(D, n.transition), j = D, ns(H), j;
}
const yb = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || vs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, vb = (e, t) => {
  const n = {};
  for (const i in e)
    (!_s(i) || !(i.slice(9) in t)) && (n[i] = e[i]);
  return n;
};
function _b(e, t, n) {
  const { props: i, children: a, component: l } = e, { props: u, children: f, patchFlag: p } = t, b = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return i ? Sf(i, u, b) : !!u;
    if (p & 8) {
      const _ = t.dynamicProps;
      for (let x = 0; x < _.length; x++) {
        const S = _[x];
        if (Sh(u, i, S) && !As(b, S))
          return !0;
      }
    }
  } else
    return (a || f) && (!f || !f.$stable) ? !0 : i === u ? !1 : i ? u ? Sf(i, u, b) : !0 : !!u;
  return !1;
}
function Sf(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const l = i[a];
    if (Sh(t, e, l) && !As(n, l))
      return !0;
  }
  return !1;
}
function Sh(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && at(i) && at(a) ? !wc(i, a) : i !== a;
}
function xb({ vnode: e, parent: t, suspense: n }, i) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = i, e = a), a === e)
      (e = t.vnode).el = i, t = t.parent;
    else
      break;
  }
  n && n.activeBranch === e && (n.vnode.el = i);
}
const Mh = {}, Nh = () => Object.create(Mh), kh = (e) => Object.getPrototypeOf(e) === Mh;
function wb(e, t, n, i = !1) {
  const a = {}, l = Nh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ph(e, t, a, l);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ C0(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function Sb(e, t, n, i) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: u }
  } = e, f = /* @__PURE__ */ tt(a), [p] = e.propsOptions;
  let b = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const _ = e.vnode.dynamicProps;
      for (let x = 0; x < _.length; x++) {
        let S = _[x];
        if (As(e.emitsOptions, S))
          continue;
        const A = t[S];
        if (p)
          if (nt(l, S))
            A !== l[S] && (l[S] = A, b = !0);
          else {
            const v = sn(S);
            a[v] = ic(
              p,
              f,
              v,
              A,
              e,
              !1
            );
          }
        else
          A !== l[S] && (l[S] = A, b = !0);
      }
    }
  } else {
    Ph(e, t, a, l) && (b = !0);
    let _;
    for (const x in f)
      (!t || // for camelCase
      !nt(t, x) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((_ = ii(x)) === x || !nt(t, _))) && (p ? n && // for camelCase
      (n[x] !== void 0 || // for kebab-case
      n[_] !== void 0) && (a[x] = ic(
        p,
        f,
        x,
        void 0,
        e,
        !0
      )) : delete a[x]);
    if (l !== f)
      for (const x in l)
        (!t || !nt(t, x)) && (delete l[x], b = !0);
  }
  b && cr(e.attrs, "set", "");
}
function Ph(e, t, n, i) {
  const [a, l] = e.propsOptions;
  let u = !1, f;
  if (t)
    for (let p in t) {
      if (pa(p))
        continue;
      const b = t[p];
      let _;
      a && nt(a, _ = sn(p)) ? !l || !l.includes(_) ? n[_] = b : (f || (f = {}))[_] = b : As(e.emitsOptions, p) || (!(p in i) || b !== i[p]) && (i[p] = b, u = !0);
    }
  if (l) {
    const p = /* @__PURE__ */ tt(n), b = f || lt;
    for (let _ = 0; _ < l.length; _++) {
      const x = l[_];
      n[x] = ic(
        a,
        p,
        x,
        b[x],
        e,
        !nt(b, x)
      );
    }
  }
  return u;
}
function ic(e, t, n, i, a, l) {
  const u = e[n];
  if (u != null) {
    const f = nt(u, "default");
    if (f && i === void 0) {
      const p = u.default;
      if (u.type !== Function && !u.skipFactory && He(p)) {
        const { propsDefaults: b } = a;
        if (n in b)
          i = b[n];
        else {
          const _ = Ua(a);
          i = b[n] = p.call(
            null,
            t
          ), _();
        }
      } else
        i = p;
      a.ce && a.ce._setProp(n, i);
    }
    u[
      0
      /* shouldCast */
    ] && (l && !f ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === ii(n)) && (i = !0));
  }
  return i;
}
const Mb = /* @__PURE__ */ new WeakMap();
function Ah(e, t, n = !1) {
  const i = n ? Mb : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const l = e.props, u = {}, f = [];
  let p = !1;
  if (!He(e)) {
    const _ = (x) => {
      p = !0;
      const [S, A] = Ah(x, t, !0);
      Jt(u, S), A && f.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!l && !p)
    return at(e) && i.set(e, Oi), Oi;
  if (Ve(l))
    for (let _ = 0; _ < l.length; _++) {
      const x = sn(l[_]);
      Mf(x) && (u[x] = lt);
    }
  else if (l)
    for (const _ in l) {
      const x = sn(_);
      if (Mf(x)) {
        const S = l[_], A = u[x] = Ve(S) || He(S) ? { type: S } : Jt({}, S), v = A.type;
        let R = !1, H = !0;
        if (Ve(v))
          for (let j = 0; j < v.length; ++j) {
            const P = v[j], D = He(P) && P.name;
            if (D === "Boolean") {
              R = !0;
              break;
            } else D === "String" && (H = !1);
          }
        else
          R = He(v) && v.name === "Boolean";
        A[
          0
          /* shouldCast */
        ] = R, A[
          1
          /* shouldCastTrue */
        ] = H, (R || nt(A, "default")) && f.push(x);
      }
    }
  const b = [u, f];
  return at(e) && i.set(e, b), b;
}
function Mf(e) {
  return e[0] !== "$" && !pa(e);
}
const Oc = (e) => e === "_" || e === "_ctx" || e === "$stable", Rc = (e) => Ve(e) ? e.map(Bn) : [Bn(e)], Nb = (e, t, n) => {
  if (t._n)
    return t;
  const i = uh((...a) => Rc(t(...a)), n);
  return i._c = !1, i;
}, Ch = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (Oc(a)) continue;
    const l = e[a];
    if (He(l))
      t[a] = Nb(a, l, i);
    else if (l != null) {
      const u = Rc(l);
      t[a] = () => u;
    }
  }
}, Ih = (e, t) => {
  const n = Rc(t);
  e.slots.default = () => n;
}, Th = (e, t, n) => {
  for (const i in t)
    (n || !Oc(i)) && (e[i] = t[i]);
}, kb = (e, t, n) => {
  const i = e.slots = Nh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Th(i, t, n), n && jd(i, "_", a, !0)) : Ch(t, i);
  } else t && Ih(e, t);
}, Pb = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let l = !0, u = lt;
  if (i.shapeFlag & 32) {
    const f = t._;
    f ? n && f === 1 ? l = !1 : Th(a, t, n) : (l = !t.$stable, Ch(t, a)), u = t;
  } else t && (Ih(e, t), u = { default: 1 });
  if (l)
    for (const f in a)
      !Oc(f) && u[f] == null && delete a[f];
}, fn = Eb;
function Ab(e) {
  return Cb(e);
}
function Cb(e, t) {
  const n = Ss();
  n.__VUE__ = !0;
  const {
    insert: i,
    remove: a,
    patchProp: l,
    createElement: u,
    createText: f,
    createComment: p,
    setText: b,
    setElementText: _,
    parentNode: x,
    nextSibling: S,
    setScopeId: A = qn,
    insertStaticContent: v
  } = e, R = (O, V, te, ge = null, I = null, G = null, ie = void 0, le = null, d = !!V.dynamicChildren) => {
    if (O === V)
      return;
    O && !ia(O, V) && (ge = Zt(O), Be(O, I, G, !0), O = null), V.patchFlag === -2 && (d = !1, V.dynamicChildren = null);
    const { type: q, ref: ye, shapeFlag: ve } = V;
    switch (q) {
      case Cs:
        H(O, V, te, ge);
        break;
      case Cr:
        j(O, V, te, ge);
        break;
      case Cl:
        O == null && P(V, te, ge, ie);
        break;
      case Je:
        xe(
          O,
          V,
          te,
          ge,
          I,
          G,
          ie,
          le,
          d
        );
        break;
      default:
        ve & 1 ? F(
          O,
          V,
          te,
          ge,
          I,
          G,
          ie,
          le,
          d
        ) : ve & 6 ? C(
          O,
          V,
          te,
          ge,
          I,
          G,
          ie,
          le,
          d
        ) : (ve & 64 || ve & 128) && q.process(
          O,
          V,
          te,
          ge,
          I,
          G,
          ie,
          le,
          d,
          en
        );
    }
    ye != null && I ? ya(ye, O && O.ref, G, V || O, !V) : ye == null && O && O.ref != null && ya(O.ref, null, G, O, !0);
  }, H = (O, V, te, ge) => {
    if (O == null)
      i(
        V.el = f(V.children),
        te,
        ge
      );
    else {
      const I = V.el = O.el;
      V.children !== O.children && b(I, V.children);
    }
  }, j = (O, V, te, ge) => {
    O == null ? i(
      V.el = p(V.children || ""),
      te,
      ge
    ) : V.el = O.el;
  }, P = (O, V, te, ge) => {
    [O.el, O.anchor] = v(
      O.children,
      V,
      te,
      ge,
      O.el,
      O.anchor
    );
  }, D = ({ el: O, anchor: V }, te, ge) => {
    let I;
    for (; O && O !== V; )
      I = S(O), i(O, te, ge), O = I;
    i(V, te, ge);
  }, E = ({ el: O, anchor: V }) => {
    let te;
    for (; O && O !== V; )
      te = S(O), a(O), O = te;
    a(V);
  }, F = (O, V, te, ge, I, G, ie, le, d) => {
    if (V.type === "svg" ? ie = "svg" : V.type === "math" && (ie = "mathml"), O == null)
      Y(
        V,
        te,
        ge,
        I,
        G,
        ie,
        le,
        d
      );
    else {
      const q = O.el && O.el._isVueCE ? O.el : null;
      try {
        q && q._beginPatch(), fe(
          O,
          V,
          I,
          G,
          ie,
          le,
          d
        );
      } finally {
        q && q._endPatch();
      }
    }
  }, Y = (O, V, te, ge, I, G, ie, le) => {
    let d, q;
    const { props: ye, shapeFlag: ve, transition: Se, dirs: Ie } = O;
    if (d = O.el = u(
      O.type,
      G,
      ye && ye.is,
      ye
    ), ve & 8 ? _(d, O.children) : ve & 16 && Z(
      O.children,
      d,
      null,
      ge,
      I,
      Al(O, G),
      ie,
      le
    ), Ie && zr(O, null, ge, "created"), L(d, O, O.scopeId, ie, ge), ye) {
      for (const se in ye)
        se !== "value" && !pa(se) && l(d, se, null, ye[se], G, ge);
      "value" in ye && l(d, "value", null, ye.value, G), (q = ye.onVnodeBeforeMount) && zn(q, ge, O);
    }
    Ie && zr(O, null, ge, "beforeMount");
    const Pe = Ib(I, Se);
    Pe && Se.beforeEnter(d), i(d, V, te), ((q = ye && ye.onVnodeMounted) || Pe || Ie) && fn(() => {
      try {
        q && zn(q, ge, O), Pe && Se.enter(d), Ie && zr(O, null, ge, "mounted");
      } finally {
      }
    }, I);
  }, L = (O, V, te, ge, I) => {
    if (te && A(O, te), ge)
      for (let G = 0; G < ge.length; G++)
        A(O, ge[G]);
    if (I) {
      let G = I.subTree;
      if (V === G || Rh(G.type) && (G.ssContent === V || G.ssFallback === V)) {
        const ie = I.vnode;
        L(
          O,
          ie,
          ie.scopeId,
          ie.slotScopeIds,
          I.parent
        );
      }
    }
  }, Z = (O, V, te, ge, I, G, ie, le, d = 0) => {
    for (let q = d; q < O.length; q++) {
      const ye = O[q] = le ? lr(O[q]) : Bn(O[q]);
      R(
        null,
        ye,
        V,
        te,
        ge,
        I,
        G,
        ie,
        le
      );
    }
  }, fe = (O, V, te, ge, I, G, ie) => {
    const le = V.el = O.el;
    let { patchFlag: d, dynamicChildren: q, dirs: ye } = V;
    d |= O.patchFlag & 16;
    const ve = O.props || lt, Se = V.props || lt;
    let Ie;
    if (te && $r(te, !1), (Ie = Se.onVnodeBeforeUpdate) && zn(Ie, te, V, O), ye && zr(V, O, te, "beforeUpdate"), te && $r(te, !0), (ve.innerHTML && Se.innerHTML == null || ve.textContent && Se.textContent == null) && _(le, ""), q ? U(
      O.dynamicChildren,
      q,
      le,
      te,
      ge,
      Al(V, I),
      G
    ) : ie || J(
      O,
      V,
      le,
      null,
      te,
      ge,
      Al(V, I),
      G,
      !1
    ), d > 0) {
      if (d & 16)
        be(le, ve, Se, te, I);
      else if (d & 2 && ve.class !== Se.class && l(le, "class", null, Se.class, I), d & 4 && l(le, "style", ve.style, Se.style, I), d & 8) {
        const Pe = V.dynamicProps;
        for (let se = 0; se < Pe.length; se++) {
          const Ee = Pe[se], Ke = ve[Ee], Xe = Se[Ee];
          (Xe !== Ke || Ee === "value") && l(le, Ee, Ke, Xe, I, te);
        }
      }
      d & 1 && O.children !== V.children && _(le, V.children);
    } else !ie && q == null && be(le, ve, Se, te, I);
    ((Ie = Se.onVnodeUpdated) || ye) && fn(() => {
      Ie && zn(Ie, te, V, O), ye && zr(V, O, te, "updated");
    }, ge);
  }, U = (O, V, te, ge, I, G, ie) => {
    for (let le = 0; le < V.length; le++) {
      const d = O[le], q = V[le], ye = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        d.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (d.type === Je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !ia(d, q) || // - In the case of a component, it could contain anything.
        d.shapeFlag & 198) ? x(d.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          te
        )
      );
      R(
        d,
        q,
        ye,
        null,
        ge,
        I,
        G,
        ie,
        !0
      );
    }
  }, be = (O, V, te, ge, I) => {
    if (V !== te) {
      if (V !== lt)
        for (const G in V)
          !pa(G) && !(G in te) && l(
            O,
            G,
            V[G],
            null,
            I,
            ge
          );
      for (const G in te) {
        if (pa(G)) continue;
        const ie = te[G], le = V[G];
        ie !== le && G !== "value" && l(O, G, le, ie, I, ge);
      }
      "value" in te && l(O, "value", V.value, te.value, I);
    }
  }, xe = (O, V, te, ge, I, G, ie, le, d) => {
    const q = V.el = O ? O.el : f(""), ye = V.anchor = O ? O.anchor : f("");
    let { patchFlag: ve, dynamicChildren: Se, slotScopeIds: Ie } = V;
    Ie && (le = le ? le.concat(Ie) : Ie), O == null ? (i(q, te, ge), i(ye, te, ge), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      V.children || [],
      te,
      ye,
      I,
      G,
      ie,
      le,
      d
    )) : ve > 0 && ve & 64 && Se && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    O.dynamicChildren && O.dynamicChildren.length === Se.length ? (U(
      O.dynamicChildren,
      Se,
      te,
      I,
      G,
      ie,
      le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (V.key != null || I && V === I.subTree) && Eh(
      O,
      V,
      !0
      /* shallow */
    )) : J(
      O,
      V,
      te,
      ye,
      I,
      G,
      ie,
      le,
      d
    );
  }, C = (O, V, te, ge, I, G, ie, le, d) => {
    V.slotScopeIds = le, O == null ? V.shapeFlag & 512 ? I.ctx.activate(
      V,
      te,
      ge,
      ie,
      d
    ) : we(
      V,
      te,
      ge,
      I,
      G,
      ie,
      d
    ) : re(O, V, d);
  }, we = (O, V, te, ge, I, G, ie) => {
    const le = O.component = $b(
      O,
      ge,
      I
    );
    if (mh(O) && (le.ctx.renderer = en), Vb(le, !1, ie), le.asyncDep) {
      if (I && I.registerDep(le, pe, ie), !O.el) {
        const d = le.subTree = We(Cr);
        j(null, d, V, te), O.placeholder = d.el;
      }
    } else
      pe(
        le,
        O,
        V,
        te,
        I,
        G,
        ie
      );
  }, re = (O, V, te) => {
    const ge = V.component = O.component;
    if (_b(O, V, te))
      if (ge.asyncDep && !ge.asyncResolved) {
        z(ge, V, te);
        return;
      } else
        ge.next = V, ge.update();
    else
      V.el = O.el, ge.vnode = V;
  }, pe = (O, V, te, ge, I, G, ie) => {
    const le = () => {
      if (O.isMounted) {
        let { next: ve, bu: Se, u: Ie, parent: Pe, vnode: se } = O;
        {
          const Pt = Dh(O);
          if (Pt) {
            ve && (ve.el = se.el, z(O, ve, ie)), Pt.asyncDep.then(() => {
              fn(() => {
                O.isUnmounted || q();
              }, I);
            });
            return;
          }
        }
        let Ee = ve, Ke;
        $r(O, !1), ve ? (ve.el = se.el, z(O, ve, ie)) : ve = se, Se && wl(Se), (Ke = ve.props && ve.props.onVnodeBeforeUpdate) && zn(Ke, Pe, ve, se), $r(O, !0);
        const Xe = wf(O), X = O.subTree;
        O.subTree = Xe, R(
          X,
          Xe,
          // parent may have changed if it's in a teleport
          x(X.el),
          // anchor may have changed if it's in a fragment
          Zt(X),
          O,
          I,
          G
        ), ve.el = Xe.el, Ee === null && xb(O, Xe.el), Ie && fn(Ie, I), (Ke = ve.props && ve.props.onVnodeUpdated) && fn(
          () => zn(Ke, Pe, ve, se),
          I
        );
      } else {
        let ve;
        const { el: Se, props: Ie } = V, { bm: Pe, m: se, parent: Ee, root: Ke, type: Xe } = O, X = va(V);
        $r(O, !1), Pe && wl(Pe), !X && (ve = Ie && Ie.onVnodeBeforeMount) && zn(ve, Ee, V), $r(O, !0);
        {
          Ke.ce && Ke.ce._hasShadowRoot() && Ke.ce._injectChildStyle(
            Xe,
            O.parent ? O.parent.type : void 0
          );
          const Pt = O.subTree = wf(O);
          R(
            null,
            Pt,
            te,
            ge,
            O,
            I,
            G
          ), V.el = Pt.el;
        }
        if (se && fn(se, I), !X && (ve = Ie && Ie.onVnodeMounted)) {
          const Pt = V;
          fn(
            () => zn(ve, Ee, Pt),
            I
          );
        }
        (V.shapeFlag & 256 || Ee && va(Ee.vnode) && Ee.vnode.shapeFlag & 256) && O.a && fn(O.a, I), O.isMounted = !0, V = te = ge = null;
      }
    };
    O.scope.on();
    const d = O.effect = new Bd(le);
    O.scope.off();
    const q = O.update = d.run.bind(d), ye = O.job = d.runIfDirty.bind(d);
    ye.i = O, ye.id = O.uid, d.scheduler = () => Tc(ye), $r(O, !0), q();
  }, z = (O, V, te) => {
    V.component = O;
    const ge = O.vnode.props;
    O.vnode = V, O.next = null, Sb(O, V.props, ge, te), Pb(O, V.children, te), hr(), mf(O), mr();
  }, J = (O, V, te, ge, I, G, ie, le, d = !1) => {
    const q = O && O.children, ye = O ? O.shapeFlag : 0, ve = V.children, { patchFlag: Se, shapeFlag: Ie } = V;
    if (Se > 0) {
      if (Se & 128) {
        Re(
          q,
          ve,
          te,
          ge,
          I,
          G,
          ie,
          le,
          d
        );
        return;
      } else if (Se & 256) {
        _e(
          q,
          ve,
          te,
          ge,
          I,
          G,
          ie,
          le,
          d
        );
        return;
      }
    }
    Ie & 8 ? (ye & 16 && pt(q, I, G), ve !== q && _(te, ve)) : ye & 16 ? Ie & 16 ? Re(
      q,
      ve,
      te,
      ge,
      I,
      G,
      ie,
      le,
      d
    ) : pt(q, I, G, !0) : (ye & 8 && _(te, ""), Ie & 16 && Z(
      ve,
      te,
      ge,
      I,
      G,
      ie,
      le,
      d
    ));
  }, _e = (O, V, te, ge, I, G, ie, le, d) => {
    O = O || Oi, V = V || Oi;
    const q = O.length, ye = V.length, ve = Math.min(q, ye);
    let Se;
    for (Se = 0; Se < ve; Se++) {
      const Ie = V[Se] = d ? lr(V[Se]) : Bn(V[Se]);
      R(
        O[Se],
        Ie,
        te,
        null,
        I,
        G,
        ie,
        le,
        d
      );
    }
    q > ye ? pt(
      O,
      I,
      G,
      !0,
      !1,
      ve
    ) : Z(
      V,
      te,
      ge,
      I,
      G,
      ie,
      le,
      d,
      ve
    );
  }, Re = (O, V, te, ge, I, G, ie, le, d) => {
    let q = 0;
    const ye = V.length;
    let ve = O.length - 1, Se = ye - 1;
    for (; q <= ve && q <= Se; ) {
      const Ie = O[q], Pe = V[q] = d ? lr(V[q]) : Bn(V[q]);
      if (ia(Ie, Pe))
        R(
          Ie,
          Pe,
          te,
          null,
          I,
          G,
          ie,
          le,
          d
        );
      else
        break;
      q++;
    }
    for (; q <= ve && q <= Se; ) {
      const Ie = O[ve], Pe = V[Se] = d ? lr(V[Se]) : Bn(V[Se]);
      if (ia(Ie, Pe))
        R(
          Ie,
          Pe,
          te,
          null,
          I,
          G,
          ie,
          le,
          d
        );
      else
        break;
      ve--, Se--;
    }
    if (q > ve) {
      if (q <= Se) {
        const Ie = Se + 1, Pe = Ie < ye ? V[Ie].el : ge;
        for (; q <= Se; )
          R(
            null,
            V[q] = d ? lr(V[q]) : Bn(V[q]),
            te,
            Pe,
            I,
            G,
            ie,
            le,
            d
          ), q++;
      }
    } else if (q > Se)
      for (; q <= ve; )
        Be(O[q], I, G, !0), q++;
    else {
      const Ie = q, Pe = q, se = /* @__PURE__ */ new Map();
      for (q = Pe; q <= Se; q++) {
        const At = V[q] = d ? lr(V[q]) : Bn(V[q]);
        At.key != null && se.set(At.key, q);
      }
      let Ee, Ke = 0;
      const Xe = Se - Pe + 1;
      let X = !1, Pt = 0;
      const Ut = new Array(Xe);
      for (q = 0; q < Xe; q++) Ut[q] = 0;
      for (q = Ie; q <= ve; q++) {
        const At = O[q];
        if (Ke >= Xe) {
          Be(At, I, G, !0);
          continue;
        }
        let xn;
        if (At.key != null)
          xn = se.get(At.key);
        else
          for (Ee = Pe; Ee <= Se; Ee++)
            if (Ut[Ee - Pe] === 0 && ia(At, V[Ee])) {
              xn = Ee;
              break;
            }
        xn === void 0 ? Be(At, I, G, !0) : (Ut[xn - Pe] = q + 1, xn >= Pt ? Pt = xn : X = !0, R(
          At,
          V[xn],
          te,
          null,
          I,
          G,
          ie,
          le,
          d
        ), Ke++);
      }
      const Ze = X ? Tb(Ut) : Oi;
      for (Ee = Ze.length - 1, q = Xe - 1; q >= 0; q--) {
        const At = Pe + q, xn = V[At], ai = V[At + 1], oi = At + 1 < ye ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ai.el || Oh(ai)
        ) : ge;
        Ut[q] === 0 ? R(
          null,
          xn,
          te,
          oi,
          I,
          G,
          ie,
          le,
          d
        ) : X && (Ee < 0 || q !== Ze[Ee] ? Fe(xn, te, oi, 2) : Ee--);
      }
    }
  }, Fe = (O, V, te, ge, I = null) => {
    const { el: G, type: ie, transition: le, children: d, shapeFlag: q } = O;
    if (q & 6) {
      Fe(O.component.subTree, V, te, ge);
      return;
    }
    if (q & 128) {
      O.suspense.move(V, te, ge);
      return;
    }
    if (q & 64) {
      ie.move(O, V, te, en);
      return;
    }
    if (ie === Je) {
      i(G, V, te);
      for (let ve = 0; ve < d.length; ve++)
        Fe(d[ve], V, te, ge);
      i(O.anchor, V, te);
      return;
    }
    if (ie === Cl) {
      D(O, V, te);
      return;
    }
    if (ge !== 2 && q & 1 && le)
      if (ge === 0)
        le.beforeEnter(G), i(G, V, te), fn(() => le.enter(G), I);
      else {
        const { leave: ve, delayLeave: Se, afterLeave: Ie } = le, Pe = () => {
          O.ctx.isUnmounted ? a(G) : i(G, V, te);
        }, se = () => {
          G._isLeaving && G[W0](
            !0
            /* cancelled */
          ), ve(G, () => {
            Pe(), Ie && Ie();
          });
        };
        Se ? Se(G, Pe, se) : se();
      }
    else
      i(G, V, te);
  }, Be = (O, V, te, ge = !1, I = !1) => {
    const {
      type: G,
      props: ie,
      ref: le,
      children: d,
      dynamicChildren: q,
      shapeFlag: ye,
      patchFlag: ve,
      dirs: Se,
      cacheIndex: Ie,
      memo: Pe
    } = O;
    if (ve === -2 && (I = !1), le != null && (hr(), ya(le, null, te, O, !0), mr()), Ie != null && (V.renderCache[Ie] = void 0), ye & 256) {
      V.ctx.deactivate(O);
      return;
    }
    const se = ye & 1 && Se, Ee = !va(O);
    let Ke;
    if (Ee && (Ke = ie && ie.onVnodeBeforeUnmount) && zn(Ke, V, O), ye & 6)
      Ot(O.component, te, ge);
    else {
      if (ye & 128) {
        O.suspense.unmount(te, ge);
        return;
      }
      se && zr(O, null, V, "beforeUnmount"), ye & 64 ? O.type.remove(
        O,
        V,
        te,
        en,
        ge
      ) : q && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !q.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (G !== Je || ve > 0 && ve & 64) ? pt(
        q,
        V,
        te,
        !1,
        !0
      ) : (G === Je && ve & 384 || !I && ye & 16) && pt(d, V, te), ge && wt(O);
    }
    const Xe = Pe != null && Ie == null;
    (Ee && (Ke = ie && ie.onVnodeUnmounted) || se || Xe) && fn(() => {
      Ke && zn(Ke, V, O), se && zr(O, null, V, "unmounted"), Xe && (O.el = null);
    }, te);
  }, wt = (O) => {
    const { type: V, el: te, anchor: ge, transition: I } = O;
    if (V === Je) {
      Nt(te, ge);
      return;
    }
    if (V === Cl) {
      E(O);
      return;
    }
    const G = () => {
      a(te), I && !I.persisted && I.afterLeave && I.afterLeave();
    };
    if (O.shapeFlag & 1 && I && !I.persisted) {
      const { leave: ie, delayLeave: le } = I, d = () => ie(te, G);
      le ? le(O.el, G, d) : d();
    } else
      G();
  }, Nt = (O, V) => {
    let te;
    for (; O !== V; )
      te = S(O), a(O), O = te;
    a(V);
  }, Ot = (O, V, te) => {
    const { bum: ge, scope: I, job: G, subTree: ie, um: le, m: d, a: q } = O;
    Nf(d), Nf(q), ge && wl(ge), I.stop(), G && (G.flags |= 8, Be(ie, O, V, te)), le && fn(le, V), fn(() => {
      O.isUnmounted = !0;
    }, V);
  }, pt = (O, V, te, ge = !1, I = !1, G = 0) => {
    for (let ie = G; ie < O.length; ie++)
      Be(O[ie], V, te, ge, I);
  }, Zt = (O) => {
    if (O.shapeFlag & 6)
      return Zt(O.component.subTree);
    if (O.shapeFlag & 128)
      return O.suspense.next();
    const V = S(O.anchor || O.el), te = V && V[G0];
    return te ? S(te) : V;
  };
  let qe = !1;
  const Qt = (O, V, te) => {
    let ge;
    O == null ? V._vnode && (Be(V._vnode, null, null, !0), ge = V._vnode.component) : R(
      V._vnode || null,
      O,
      V,
      null,
      null,
      null,
      te
    ), V._vnode = O, qe || (qe = !0, mf(ge), sh(), qe = !1);
  }, en = {
    p: R,
    um: Be,
    m: Fe,
    r: wt,
    mt: we,
    mc: Z,
    pc: J,
    pbc: U,
    n: Zt,
    o: e
  };
  return {
    render: Qt,
    hydrate: void 0,
    createApp: mb(Qt)
  };
}
function Al({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function $r({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ib(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Eh(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Ve(i) && Ve(a))
    for (let l = 0; l < i.length; l++) {
      const u = i[l];
      let f = a[l];
      f.shapeFlag & 1 && !f.dynamicChildren && ((f.patchFlag <= 0 || f.patchFlag === 32) && (f = a[l] = lr(a[l]), f.el = u.el), !n && f.patchFlag !== -2 && Eh(u, f)), f.type === Cs && (f.patchFlag === -1 && (f = a[l] = lr(f)), f.el = u.el), f.type === Cr && !f.el && (f.el = u.el);
    }
}
function Tb(e) {
  const t = e.slice(), n = [0];
  let i, a, l, u, f;
  const p = e.length;
  for (i = 0; i < p; i++) {
    const b = e[i];
    if (b !== 0) {
      if (a = n[n.length - 1], e[a] < b) {
        t[i] = a, n.push(i);
        continue;
      }
      for (l = 0, u = n.length - 1; l < u; )
        f = l + u >> 1, e[n[f]] < b ? l = f + 1 : u = f;
      b < e[n[l]] && (l > 0 && (t[i] = n[l - 1]), n[l] = i);
    }
  }
  for (l = n.length, u = n[l - 1]; l-- > 0; )
    n[l] = u, u = t[u];
  return n;
}
function Dh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Dh(t);
}
function Nf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Oh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Oh(t.subTree) : null;
}
const Rh = (e) => e.__isSuspense;
function Eb(e, t) {
  t && t.pendingBranch ? Ve(e) ? t.effects.push(...e) : t.effects.push(e) : j0(e);
}
const Je = /* @__PURE__ */ Symbol.for("v-fgt"), Cs = /* @__PURE__ */ Symbol.for("v-txt"), Cr = /* @__PURE__ */ Symbol.for("v-cmt"), Cl = /* @__PURE__ */ Symbol.for("v-stc"), xa = [];
let vn = null;
function Ne(e = !1) {
  xa.push(vn = e ? null : []);
}
function Db() {
  xa.pop(), vn = xa[xa.length - 1] || null;
}
let Ta = 1;
function kf(e, t = !1) {
  Ta += e, e < 0 && vn && t && (vn.hasOnce = !0);
}
function Fh(e) {
  return e.dynamicChildren = Ta > 0 ? vn || Oi : null, Db(), Ta > 0 && vn && vn.push(e), e;
}
function Ce(e, t, n, i, a, l) {
  return Fh(
    oe(
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
function Ki(e, t, n, i, a) {
  return Fh(
    We(
      e,
      t,
      n,
      i,
      a,
      !0
    )
  );
}
function Lh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function ia(e, t) {
  return e.type === t.type && e.key === t.key;
}
const zh = ({ key: e }) => e ?? null, Uo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? kt(e) || /* @__PURE__ */ Xt(e) || He(e) ? { i: yn, r: e, k: t, f: !!n } : e : null);
function oe(e, t = null, n = null, i = 0, a = null, l = e === Je ? 0 : 1, u = !1, f = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && zh(t),
    ref: t && Uo(t),
    scopeId: ch,
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
    ctx: yn
  };
  return f ? (Fc(p, n), l & 128 && e.normalize(p)) : n && (p.shapeFlag |= kt(n) ? 8 : 16), Ta > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  vn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && vn.push(p), p;
}
const We = Ob;
function Ob(e, t = null, n = null, i = 0, a = null, l = !1) {
  if ((!e || e === yh) && (e = Cr), Lh(e)) {
    const f = Ui(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Fc(f, n), Ta > 0 && !l && vn && (f.shapeFlag & 6 ? vn[vn.indexOf(e)] = f : vn.push(f)), f.patchFlag = -2, f;
  }
  if (Kb(e) && (e = e.__vccOpts), t) {
    t = Rb(t);
    let { class: f, style: p } = t;
    f && !kt(f) && (t.class = dt(f)), at(p) && (/* @__PURE__ */ Cc(p) && !Ve(p) && (p = Jt({}, p)), t.style = Tt(p));
  }
  const u = kt(e) ? 1 : Rh(e) ? 128 : K0(e) ? 64 : at(e) ? 4 : He(e) ? 2 : 0;
  return oe(
    e,
    t,
    n,
    i,
    a,
    u,
    l,
    !0
  );
}
function Rb(e) {
  return e ? /* @__PURE__ */ Cc(e) || kh(e) ? Jt({}, e) : e : null;
}
function Ui(e, t, n = !1, i = !1) {
  const { props: a, ref: l, patchFlag: u, children: f, transition: p } = e, b = t ? kr(a || {}, t) : a, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: b,
    key: b && zh(b),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? Ve(l) ? l.concat(Uo(t)) : [l, Uo(t)] : Uo(t)
    ) : l,
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
    patchFlag: t && e.type !== Je ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: e.ssContent && Ui(e.ssContent),
    ssFallback: e.ssFallback && Ui(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && i && Ec(
    _,
    p.clone(_)
  ), _;
}
function Fb(e = " ", t = 0) {
  return We(Cs, null, e, t);
}
function Dt(e = "", t = !1) {
  return t ? (Ne(), Ki(Cr, null, e)) : We(Cr, null, e);
}
function Bn(e) {
  return e == null || typeof e == "boolean" ? We(Cr) : Ve(e) ? We(
    Je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Lh(e) ? lr(e) : We(Cs, null, String(e));
}
function lr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ui(e);
}
function Fc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Ve(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Fc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !kh(t) ? t._ctx = yn : a === 3 && yn && (yn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else He(t) ? (t = { default: t, _ctx: yn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Fb(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function kr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = dt([t.class, i.class]));
      else if (a === "style")
        t.style = Tt([t.style, i.style]);
      else if (vs(a)) {
        const l = t[a], u = i[a];
        u && l !== u && !(Ve(l) && l.includes(u)) ? t[a] = l ? [].concat(l, u) : u : u == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !_s(a) && (t[a] = u);
      } else a !== "" && (t[a] = i[a]);
  }
  return t;
}
function zn(e, t, n, i = null) {
  Jn(e, t, 7, [
    n,
    i
  ]);
}
const Lb = xh();
let zb = 0;
function $b(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || Lb, l = {
    uid: zb++,
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
    scope: new c0(
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
    propsOptions: Ah(i, a),
    emitsOptions: wh(i, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: lt,
    // inheritAttrs
    inheritAttrs: i.inheritAttrs,
    // state
    ctx: lt,
    data: lt,
    props: lt,
    attrs: lt,
    slots: lt,
    refs: lt,
    setupState: lt,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = gb.bind(null, l), e.ce && e.ce(l), l;
}
let qt = null;
const jb = () => qt || yn;
let as, ac;
{
  const e = Ss(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (l) => {
      a.length > 1 ? a.forEach((u) => u(l)) : a[0](l);
    };
  };
  as = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => qt = n
  ), ac = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ea = n
  );
}
const Ua = (e) => {
  const t = qt;
  return as(e), e.scope.on(), () => {
    e.scope.off(), as(t);
  };
}, Pf = () => {
  qt && qt.scope.off(), as(null);
};
function $h(e) {
  return e.vnode.shapeFlag & 4;
}
let Ea = !1;
function Vb(e, t = !1, n = !1) {
  t && ac(t);
  const { props: i, children: a } = e.vnode, l = $h(e);
  wb(e, i, l, t), kb(e, a, n || t);
  const u = l ? Hb(e, t) : void 0;
  return t && ac(!1), u;
}
function Hb(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, sb);
  const { setup: i } = n;
  if (i) {
    hr();
    const a = e.setupContext = i.length > 1 ? Bb(e) : null, l = Ua(e), u = Ha(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), f = Ld(u);
    if (mr(), l(), (f || e.sp) && !va(e) && hh(e), f) {
      if (u.then(Pf, Pf), t)
        return u.then((p) => {
          Af(e, p);
        }).catch((p) => {
          ks(p, e, 0);
        });
      e.asyncDep = u;
    } else
      Af(e, u);
  } else
    jh(e);
}
function Af(e, t, n) {
  He(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : at(t) && (e.setupState = ih(t)), jh(e);
}
function jh(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || qn);
  {
    const a = Ua(e);
    hr();
    try {
      lb(e);
    } finally {
      mr(), a();
    }
  }
}
const Ub = {
  get(e, t) {
    return Yt(e, "get", ""), e[t];
  }
};
function Bb(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ub),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Is(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ih(I0(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in _a)
        return _a[n](e);
    },
    has(t, n) {
      return n in t || n in _a;
    }
  })) : e.proxy;
}
function Gb(e, t = !0) {
  return He(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Kb(e) {
  return He(e) && "__vccOpts" in e;
}
const xt = (e, t) => /* @__PURE__ */ R0(e, t, Ea), Wb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let oc;
const Cf = typeof window < "u" && window.trustedTypes;
if (Cf)
  try {
    oc = /* @__PURE__ */ Cf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Vh = oc ? (e) => oc.createHTML(e) : (e) => e, Yb = "http://www.w3.org/2000/svg", qb = "http://www.w3.org/1998/Math/MathML", or = typeof document < "u" ? document : null, If = or && /* @__PURE__ */ or.createElement("template"), Xb = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? or.createElementNS(Yb, e) : t === "mathml" ? or.createElementNS(qb, e) : n ? or.createElement(e, { is: n }) : or.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => or.createTextNode(e),
  createComment: (e) => or.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => or.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, a, l) {
    const u = n ? n.previousSibling : t.lastChild;
    if (a && (a === l || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === l || !(a = a.nextSibling)); )
        ;
    else {
      If.innerHTML = Vh(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const f = If.content;
      if (i === "svg" || i === "mathml") {
        const p = f.firstChild;
        for (; p.firstChild; )
          f.appendChild(p.firstChild);
        f.removeChild(p);
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
}, Jb = /* @__PURE__ */ Symbol("_vtc");
function Zb(e, t, n) {
  const i = e[Jb];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const os = /* @__PURE__ */ Symbol("_vod"), Hh = /* @__PURE__ */ Symbol("_vsh"), Da = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: n }) {
    e[os] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : aa(e, t);
  },
  mounted(e, { value: t }, { transition: n }) {
    n && t && n.enter(e);
  },
  updated(e, { value: t, oldValue: n }, { transition: i }) {
    !t != !n && (i ? t ? (i.beforeEnter(e), aa(e, !0), i.enter(e)) : i.leave(e, () => {
      aa(e, !1);
    }) : aa(e, t));
  },
  beforeUnmount(e, { value: t }) {
    aa(e, t);
  }
};
function aa(e, t) {
  e.style.display = t ? e[os] : "none", e[Hh] = !t;
}
const Qb = /* @__PURE__ */ Symbol(""), ey = /(?:^|;)\s*display\s*:/;
function ty(e, t, n) {
  const i = e.style, a = kt(n);
  let l = !1;
  if (n && !a) {
    if (t)
      if (kt(t))
        for (const u of t.split(";")) {
          const f = u.slice(0, u.indexOf(":")).trim();
          n[f] == null && Bo(i, f, "");
        }
      else
        for (const u in t)
          n[u] == null && Bo(i, u, "");
    for (const u in n)
      u === "display" && (l = !0), Bo(i, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = i[Qb];
      u && (n += ";" + u), i.cssText = n, l = ey.test(n);
    }
  } else t && e.removeAttribute("style");
  os in e && (e[os] = l ? i.display : "", e[Hh] && (i.display = "none"));
}
const Tf = /\s*!important$/;
function Bo(e, t, n) {
  if (Ve(n))
    n.forEach((i) => Bo(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = ny(e, t);
    Tf.test(n) ? e.setProperty(
      ii(i),
      n.replace(Tf, ""),
      "important"
    ) : e[i] = n;
  }
}
const Ef = ["Webkit", "Moz", "ms"], Il = {};
function ny(e, t) {
  const n = Il[t];
  if (n)
    return n;
  let i = sn(t);
  if (i !== "filter" && i in e)
    return Il[t] = i;
  i = ws(i);
  for (let a = 0; a < Ef.length; a++) {
    const l = Ef[a] + i;
    if (l in e)
      return Il[t] = l;
  }
  return t;
}
const Df = "http://www.w3.org/1999/xlink";
function Of(e, t, n, i, a, l = s0(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Df, t.slice(6, t.length)) : e.setAttributeNS(Df, t, n) : n == null || l && !Vd(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : Xn(n) ? String(n) : n
  );
}
function Rf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Vh(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const f = l === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (f !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const f = typeof e[t];
    f === "boolean" ? n = Vd(n) : n == null && f === "string" ? (n = "", u = !0) : f === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function ry(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function iy(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const Ff = /* @__PURE__ */ Symbol("_vei");
function ay(e, t, n, i, a = null) {
  const l = e[Ff] || (e[Ff] = {}), u = l[t];
  if (i && u)
    u.value = i;
  else {
    const [f, p] = oy(t);
    if (i) {
      const b = l[t] = cy(
        i,
        a
      );
      ry(e, f, b, p);
    } else u && (iy(e, f, u, p), l[t] = void 0);
  }
}
const Lf = /(?:Once|Passive|Capture)$/;
function oy(e) {
  let t;
  if (Lf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Lf); )
      e = e.slice(0, e.length - i[0].length), t[i[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ii(e.slice(2)), t];
}
let Tl = 0;
const sy = /* @__PURE__ */ Promise.resolve(), ly = () => Tl || (sy.then(() => Tl = 0), Tl = Date.now());
function cy(e, t) {
  const n = (i) => {
    if (!i._vts)
      i._vts = Date.now();
    else if (i._vts <= n.attached)
      return;
    Jn(
      uy(i, n.value),
      t,
      5,
      [i]
    );
  };
  return n.value = e, n.attached = ly(), n;
}
function uy(e, t) {
  if (Ve(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (i) => (a) => !a._stopped && i && i(a)
    );
  } else
    return t;
}
const zf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, fy = (e, t, n, i, a, l) => {
  const u = a === "svg";
  t === "class" ? Zb(e, i, u) : t === "style" ? ty(e, n, i) : vs(t) ? _s(t) || ay(e, t, n, i, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : dy(e, t, i, u)) ? (Rf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Of(e, t, i, u, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (hy(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !kt(i))) ? Rf(e, sn(t), i, l, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Of(e, t, i, u));
};
function dy(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && zf(t) && He(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return zf(t) && kt(n) ? !1 : t in e;
}
function hy(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const i = sn(t);
  return Array.isArray(n) ? n.some((a) => sn(a) === i) : Object.keys(n).some((a) => sn(a) === i);
}
const my = ["ctrl", "shift", "alt", "meta"], py = {
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
  exact: (e, t) => my.some((n) => e[`${n}Key`] && !t.includes(n))
}, Uh = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...l) => {
    for (let u = 0; u < t.length; u++) {
      const f = py[t[u]];
      if (f && f(a, t)) return;
    }
    return e(a, ...l);
  }));
}, gy = /* @__PURE__ */ Jt({ patchProp: fy }, Xb);
let $f;
function by() {
  return $f || ($f = Ab(gy));
}
const yy = ((...e) => {
  const t = by().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = _y(i);
    if (!a) return;
    const l = t._component;
    !He(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, vy(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function vy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _y(e) {
  return kt(e) ? document.querySelector(e) : e;
}
const _t = Math.PI / 180, Bh = Math.PI * 2, xy = 2048;
function st(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ir(e, t, n) {
  return { x: e, y: t, z: n };
}
function ss(e, t) {
  return Ir(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Di(e, t) {
  return Ir(e.x * t, e.y * t, e.z * t);
}
function Go(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function jf(e, t) {
  return Ir(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function da(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Ir(e.x / t, e.y / t, e.z / t);
}
function wy(e, t) {
  const n = Number(e || 0) * _t, i = Number(t || 0) * _t, a = Math.cos(i);
  return Ir(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Ko(e, t, n = 0) {
  const i = wy(e, t);
  let a = Ir(0, 1, 0);
  Math.abs(Go(i, a)) > 0.999 && (a = Ir(0, 0, 1));
  let l = da(jf(a, i)), u = da(jf(i, l));
  const f = Number(n || 0) * _t, p = Math.cos(f), b = Math.sin(f), _ = ss(Di(l, p), Di(u, b)), x = ss(Di(l, -b), Di(u, p));
  return l = da(_), u = da(x), { fwd: i, right: l, up: u };
}
function Sy(e, t) {
  const n = (Number(e || 0) - 0.5) * Bh, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return Ir(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Vf(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), l = Math.max(1, Number(n || 1)), u = Math.max(512, xy), f = Math.min(1, u / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: l,
    renderScale: f,
    width: Math.max(1, Math.round(i * f)),
    height: Math.max(1, Math.round(a * f))
  };
}
function Hf(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function El(e, t, n) {
  const i = Hf(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = Hf(e, e.FRAGMENT_SHADER, n);
  } catch (u) {
    throw e.deleteShader(i), u;
  }
  const l = e.createProgram();
  if (e.attachShader(l, i), e.attachShader(l, a), e.linkProgram(l), e.deleteShader(i), e.deleteShader(a), !e.getProgramParameter(l, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(l) || "program link failed";
    throw e.deleteProgram(l), new Error(u);
  }
  return l;
}
const Dl = `#version 300 es
precision highp float;
layout(location = 0) in vec2 a_position;
out vec2 v_uv;
void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
  v_uv = vec2(a_position.x * 0.5 + 0.5, 1.0 - (a_position.y * 0.5 + 0.5));
}`, My = `#version 300 es
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
}`, Ny = `#version 300 es
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
}`, ky = `#version 300 es
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
function oa(e, t, n) {
  if (!e || e.mode === "unwrap") return null;
  const i = Number(e.mode === "cutout" ? e.hFovDeg || 90 : e.fovDeg || 100), a = Number(e.mode === "cutout" ? e.vFovDeg || 60 : 2 * Math.atan(Math.tan(st(i, 1, 179) * _t * 0.5) * (n / Math.max(t, 1))) / _t);
  return {
    yawDeg: Number(e.yawDeg || 0),
    pitchDeg: Number(e.pitchDeg || 0),
    rollDeg: Number(e.mode === "cutout" && e.rollDeg || 0),
    hFovDeg: st(i, 1, 179),
    vFovDeg: st(a, 0.1, 179)
  };
}
function Py(e) {
  const t = Ko(
    Number(e.yawDeg || 0),
    Number(e.pitchDeg || 0),
    Number(e.rollDeg || 0)
  );
  return {
    right: t.right,
    up: t.up,
    fwd: t.fwd,
    tanX: Math.tan(st(Number(e.hFovDeg), 0.1, 179) * 0.5 * _t),
    tanY: Math.tan(st(Number(e.vFovDeg), 0.1, 179) * 0.5 * _t),
    crop: e.crop || { x0: 0, y0: 0, x1: 1, y1: 1 },
    opacity: st(Number(e.opacity ?? 1), 0, 1)
  };
}
function Ay(e = {}) {
  const t = (e == null ? void 0 : e.targetCanvas) || document.createElement("canvas");
  let n = null, i = null, a = null, l = null, u = null, f = null, p = null, b = null, _ = null, x = null, S = null, A = !1, v = Vf(1, 1, 1), R = null, H = null, j = null, P = null, D = null;
  const E = /* @__PURE__ */ new Map();
  let F = {
    objectPass: { objects: [] },
    scene: {},
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1,
    coverageDeg: 360
  }, Y = {
    background: { width: 0, height: 0 },
    paint: { width: 0, height: 0 },
    mask: { width: 0, height: 0 }
  }, L = {
    paint: !1,
    mask: !1
  };
  function Z(I = null, G = null) {
    const ie = n.createTexture();
    return n.bindTexture(n.TEXTURE_2D, ie), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.LINEAR), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, I ?? n.REPEAT), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, G ?? n.CLAMP_TO_EDGE), ie;
  }
  function fe() {
    if (A) return !0;
    try {
      return n = t.getContext("webgl2", {
        alpha: !0,
        antialias: !1,
        depth: !1,
        stencil: !1,
        premultipliedAlpha: !0,
        preserveDrawingBuffer: !1
      }), n ? (i = El(n, Dl, My), a = El(n, Dl, Ny), l = El(n, Dl, ky), R = {
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
      }, H = {
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
      ]), n.STATIC_DRAW), f = Z(n.REPEAT, n.CLAMP_TO_EDGE), p = Z(n.REPEAT, n.CLAMP_TO_EDGE), b = Z(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), A = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function U() {
    var I;
    if (n) {
      try {
        u && n.deleteBuffer(u), f && n.deleteTexture(f), p && n.deleteTexture(p), b && n.deleteTexture(b), E.forEach((G) => {
          Re(G);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), l && n.deleteProgram(l), (I = n.getExtension("WEBGL_lose_context")) == null || I.loseContext();
      } catch {
      }
      n = null, i = null, a = null, l = null, u = null, f = null, p = null, b = null, E.clear(), _ = null, x = null, S = null, Y = {
        background: { width: 0, height: 0 },
        paint: { width: 0, height: 0 },
        mask: { width: 0, height: 0 }
      }, L = {
        paint: !1,
        mask: !1
      }, P = null, D = null, A = !1;
    }
  }
  function be(I, G, ie = 1) {
    v = Vf(I, G, ie), (t.width !== v.width || t.height !== v.height) && (t.width = v.width, t.height = v.height);
  }
  function xe(I) {
    I === "background" ? _ = null : I === "paint" ? x = null : S = null, Y[I] && (Y[I].width = 0, Y[I].height = 0);
  }
  function C() {
    L.paint = !1, L.mask = !1;
  }
  function we(I) {
    C(), I === "paint" ? L.paint = !0 : I === "mask" && (L.mask = !0);
  }
  function re(I, G, ie = [], le = { width: 0, height: 0 }, d = !1) {
    if (!n || !I || !G) return !1;
    const q = Number(G.width || G.videoWidth || G.naturalWidth || 0), ye = Number(G.height || G.videoHeight || G.naturalHeight || 0);
    if (!(q > 1) || !(ye > 1)) return !1;
    const ve = Array.isArray(ie) ? ie.filter((Se) => Se && Se.w > 0 && Se.h > 0) : [];
    if (!ve.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, I), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, d ? 1 : 0), le.width !== q || le.height !== ye)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), le.width = q, le.height = ye, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (P || (P = document.createElement("canvas"), D = P.getContext("2d")), !D)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const Se of ve) {
      const Ie = Math.max(0, Math.floor(Number(Se.x || 0))), Pe = Math.max(0, Math.floor(Number(Se.y || 0))), se = Math.min(q - Ie, Math.ceil(Number(Se.w || 0))), Ee = Math.min(ye - Pe, Math.ceil(Number(Se.h || 0)));
      if (!(se <= 0 || Ee <= 0)) {
        if (P.width !== se || P.height !== Ee) {
          if (P.width = se, P.height = Ee, D = P.getContext("2d"), !D)
            return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
        } else
          D.clearRect(0, 0, se, Ee);
        D.drawImage(G, Ie, Pe, se, Ee, 0, 0, se, Ee), n.texSubImage2D(n.TEXTURE_2D, 0, Ie, Pe, n.RGBA, n.UNSIGNED_BYTE, P);
      }
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
  }
  function pe(I, G, ie, le, d = null, q = !1) {
    if (!fe()) return !1;
    if (!ie)
      return xe(I), !1;
    const ye = String(le ?? ""), ve = I === "background" ? _ : I === "paint" ? x : S, Se = Y[I], Ie = Number(ie.width || ie.videoWidth || ie.naturalWidth || 0), Pe = Number(ie.height || ie.videoHeight || ie.naturalHeight || 0), se = Se.width !== Ie || Se.height !== Pe;
    if (ve === ye && !se && !(Array.isArray(d) && d.length)) return !0;
    if (!(Ie > 0) || !(Pe > 0))
      return xe(I), !1;
    if (n.bindTexture(n.TEXTURE_2D, G), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, q ? 1 : 0), !(Array.isArray(d) && d.length ? re(G, ie, d, Se, q) : !1)) {
      if (n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, ie), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), xe(I), !1;
      Se.width = Ie, Se.height = Pe;
    }
    return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), I === "background" ? _ = ye : I === "paint" ? x = ye : S = ye, !0;
  }
  function z(I, G) {
    return pe("background", f, I, G, null, !0);
  }
  function J(I, G, ie = null) {
    return pe("paint", p, I, G, ie, !0);
  }
  function _e(I, G, ie = null) {
    return pe("mask", b, I, G, ie, !0);
  }
  function Re(I) {
    I != null && I.texture && n && n.deleteTexture(I.texture);
  }
  function Fe(I = /* @__PURE__ */ new Set()) {
    E.forEach((G, ie) => {
      I.has(ie) || (Re(G), E.delete(ie));
    });
  }
  function Be(I) {
    if (!n || !(I != null && I.assetId) || !(I != null && I.source)) return null;
    const G = String(I.assetId), ie = String(I.revision ?? ""), le = I.source, d = Number(le.width || le.naturalWidth || le.videoWidth || 0), q = Number(le.height || le.naturalHeight || le.videoHeight || 0);
    if (d <= 0 || q <= 0) return null;
    let ye = E.get(G);
    if (ye || (ye = {
      texture: Z(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, E.set(G, ye)), ye.revision !== ie || ye.width !== d || ye.height !== q) {
      if (n.bindTexture(n.TEXTURE_2D, ye.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, le), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), ye.revision = ie, ye.width = d, ye.height = q;
    }
    return ye.texture;
  }
  function wt(I = []) {
    if (!fe()) return !1;
    const G = /* @__PURE__ */ new Set();
    return I.forEach((ie) => {
      !(ie != null && ie.assetId) || !(ie != null && ie.source) || (G.add(String(ie.assetId)), Be(ie));
    }), Fe(G), !0;
  }
  function Nt() {
    return fe() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Ot(I) {
    n.useProgram(I), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
  }
  function pt(I, G = {}) {
    if (!_) return null;
    n.disable(n.BLEND), Ot(i), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, f), n.uniform1i(R.background, 0), n.uniform2f(R.viewport, Math.max(1, v.width), Math.max(1, v.height)), n.uniform1i(R.mode, (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1);
    const ie = oa(I, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    n.uniform1f(R.yaw, Number(ie.yawDeg || 0) * _t), n.uniform1f(R.pitch, Number(ie.pitchDeg || 0) * _t), n.uniform1f(R.roll, Number(ie.rollDeg || 0) * _t), n.uniform1f(R.hFov, st(Number(ie.hFovDeg || 90), 0.1, 179) * _t), n.uniform1f(R.vFov, st(Number(ie.vFovDeg || 60), 0.1, 179) * _t), n.uniform1f(R.opacity, st(Number(G.backgroundOpacity ?? 1), 0, 1));
    const le = Number((I == null ? void 0 : I.coverageDeg) || (G == null ? void 0 : G.coverageDeg) || 360) === 180 ? 180 : 360;
    return n.uniform1i(R.coverage, le), n.drawArrays(n.TRIANGLES, 0, 6), t;
  }
  function Zt(I, G = {}) {
    const ie = L.paint && x != null, le = L.mask && S != null;
    if (!ie && !le) return null;
    n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ot(a), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, p), n.uniform1i(H.paint, 0), n.activeTexture(n.TEXTURE1), n.bindTexture(n.TEXTURE_2D, b), n.uniform1i(H.mask, 1), n.uniform1i(H.mode, (I == null ? void 0 : I.mode) === "unwrap" ? 0 : (I == null ? void 0 : I.mode) === "cutout" ? 2 : 1);
    const d = oa(I, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    };
    return n.uniform1f(H.yaw, Number(d.yawDeg || 0) * _t), n.uniform1f(H.pitch, Number(d.pitchDeg || 0) * _t), n.uniform1f(H.roll, Number(d.rollDeg || 0) * _t), n.uniform1f(H.hFov, st(Number(d.hFovDeg || 90), 0.1, 179) * _t), n.uniform1f(H.vFov, st(Number(d.vFovDeg || 60), 0.1, 179) * _t), n.uniform1f(H.paintOpacity, st(Number(G.paintOpacity ?? 1), 0, 1)), n.uniform1f(H.maskOpacity, st(Number(G.maskOpacity ?? 0.55), 0, 1)), n.uniform1i(H.hasPaint, ie ? 1 : 0), n.uniform1i(H.hasMask, le ? 1 : 0), n.uniform1i(H.showMaskTint, G.showMaskTint === !1 ? 0 : 1), n.uniform3f(H.maskTint, 34 / 255, 197 / 255, 94 / 255), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND), t;
  }
  function qe(I, G) {
    var Se, Ie, Pe, se, Ee, Ke, Xe;
    const ie = Array.isArray(I == null ? void 0 : I.objects) ? I.objects : [];
    if (!ie.length) {
      C(), Fe(/* @__PURE__ */ new Set());
      return;
    }
    const le = (G == null ? void 0 : G.mode) === "unwrap" ? 0 : (G == null ? void 0 : G.mode) === "cutout" ? 2 : 1, d = oa(G, v.width, v.height) || {
      yawDeg: 0,
      pitchDeg: 0,
      rollDeg: 0,
      hFovDeg: 90,
      vFovDeg: 90
    }, q = Ko(d.yawDeg, d.pitchDeg, d.rollDeg), ye = ie.slice().sort((X, Pt) => Number((X == null ? void 0 : X.zIndex) || 0) - Number((Pt == null ? void 0 : Pt.zIndex) || 0)), ve = /* @__PURE__ */ new Set();
    C();
    for (const X of ye)
      if (!(!X || X.visible === !1)) {
        if (X.type === "sticker") {
          const Pt = String(((Se = X == null ? void 0 : X.params) == null ? void 0 : Se.assetId) || (X == null ? void 0 : X.id) || "");
          if (!Pt) continue;
          ve.add(Pt);
          const Ut = Be({
            assetId: Pt,
            source: X.source,
            revision: X.revision
          });
          if (!Ut) continue;
          const Ze = Py({
            yawDeg: ((Ie = X == null ? void 0 : X.transform) == null ? void 0 : Ie.yawDeg) || 0,
            pitchDeg: ((Pe = X == null ? void 0 : X.transform) == null ? void 0 : Pe.pitchDeg) || 0,
            rollDeg: ((se = X == null ? void 0 : X.transform) == null ? void 0 : se.rollDeg) || 0,
            hFovDeg: ((Ee = X == null ? void 0 : X.transform) == null ? void 0 : Ee.hFovDeg) || 30,
            vFovDeg: ((Ke = X == null ? void 0 : X.transform) == null ? void 0 : Ke.vFovDeg) || 30,
            crop: ((Xe = X == null ? void 0 : X.params) == null ? void 0 : Xe.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
            opacity: (X == null ? void 0 : X.opacity) ?? 1
          });
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ot(l), n.uniform1i(j.texture, 0), n.uniform1i(j.mode, le), n.uniform3f(j.viewRight, q.right.x, q.right.y, q.right.z), n.uniform3f(j.viewUp, q.up.x, q.up.y, q.up.z), n.uniform3f(j.viewFwd, q.fwd.x, q.fwd.y, q.fwd.z), n.uniform1f(j.viewHfov, st(Number(d.hFovDeg || 90), 0.1, 179) * _t), n.uniform1f(j.viewVfov, st(Number(d.vFovDeg || 60), 0.1, 179) * _t), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, Ut), n.uniform3f(j.stickerRight, Ze.right.x, Ze.right.y, Ze.right.z), n.uniform3f(j.stickerUp, Ze.up.x, Ze.up.y, Ze.up.z), n.uniform3f(j.stickerFwd, Ze.fwd.x, Ze.fwd.y, Ze.fwd.z), n.uniform1f(j.stickerTanX, Math.max(1e-6, Ze.tanX)), n.uniform1f(j.stickerTanY, Math.max(1e-6, Ze.tanY)), n.uniform4f(
            j.crop,
            st(Number(Ze.crop.x0 ?? 0), 0, 1),
            st(Number(Ze.crop.y0 ?? 0), 0, 1),
            st(Number(Ze.crop.x1 ?? 1), 0, 1),
            st(Number(Ze.crop.y1 ?? 1), 0, 1)
          ), n.uniform1f(j.opacity, Ze.opacity), n.drawArrays(n.TRIANGLES, 0, 6), n.disable(n.BLEND);
          continue;
        }
        if (X.type === "paint" || X.type === "raster") {
          if (!J(X.source, X.revision ?? "")) continue;
          we("paint"), Zt(G, {
            paintOpacity: Number(X.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (X.type === "mask") {
          if (!_e(X.source, X.revision ?? "")) continue;
          we("mask"), Zt(G, {
            paintOpacity: 0,
            maskOpacity: Number(X.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    Fe(ve), C();
  }
  function Qt(I) {
    return !Nt() || !_ ? null : (pt({
      mode: "panorama",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      fovDeg: (I == null ? void 0 : I.fovDeg) || 100
    }, I), t);
  }
  function en(I) {
    return !Nt() || !_ ? null : (pt({ mode: "unwrap" }, I), t);
  }
  function _n(I) {
    return !Nt() || !_ ? null : (pt({
      mode: "cutout",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      rollDeg: (I == null ? void 0 : I.rollDeg) || 0,
      hFovDeg: (I == null ? void 0 : I.hFovDeg) || 90,
      vFovDeg: (I == null ? void 0 : I.vFovDeg) || 60
    }, I), t);
  }
  function O(I = {}) {
    if (!fe() || (be(I.width, I.height, I.dpr || 1), !Nt())) return null;
    const G = Object.prototype.hasOwnProperty.call(I, "backgroundSource"), ie = Object.prototype.hasOwnProperty.call(I, "paintSource"), le = Object.prototype.hasOwnProperty.call(I, "maskSource"), d = Object.prototype.hasOwnProperty.call(I, "textures"), q = Object.prototype.hasOwnProperty.call(I, "scene");
    return G && z(I.backgroundSource, I.backgroundRevision ?? ""), ie && J(I.paintSource, I.paintRevision ?? ""), le && _e(I.maskSource, I.maskRevision ?? ""), d && (wt(I.textures || []), F.textures = I.textures || []), q && (F.scene = I.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "objectPass") && (F.objectPass = I.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "backgroundOpacity") && (F.backgroundOpacity = Number(I.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(I, "showMaskTint") && (F.showMaskTint = I.showMaskTint === !0), Object.prototype.hasOwnProperty.call(I, "coverageDeg") && (F.coverageDeg = Number(I.coverageDeg || 360) === 180 ? 180 : 360), _ && pt(I.view, {
      ...I,
      backgroundOpacity: Number(I.backgroundOpacity ?? F.backgroundOpacity ?? 1),
      coverageDeg: Number(I.coverageDeg || F.coverageDeg || 360) === 180 ? 180 : 360
    }), qe(
      F.objectPass || { objects: [] },
      I.view || { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100 }
    ), t;
  }
  function V(I = {}) {
    return fe() ? !!O({
      ...I,
      view: { mode: "panorama", yawDeg: 0, pitchDeg: 0, fovDeg: 100, coverageDeg: Number(I.coverageDeg || 360) === 180 ? 180 : 360 },
      width: Number(t.width || 1),
      height: Number(t.height || 1),
      dpr: 1
    }) : !1;
  }
  function te(I, G, ie) {
    const le = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || v.sourceWidth || v.width || 1)), d = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || v.sourceHeight || v.height || 1)), q = Number(G), ye = Number(ie);
    if (!Number.isFinite(q) || !Number.isFinite(ye)) return null;
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return { u: (q / le % 1 + 1) % 1, v: st(ye / d, 0, 1) };
    const ve = oa(I, le, d);
    if (!ve) return null;
    const Se = Ko(ve.yawDeg, ve.pitchDeg, ve.rollDeg), Ie = (q - le * 0.5) / (le * 0.5) * Math.tan(st(ve.hFovDeg, 1, 179) * _t * 0.5), Pe = (d * 0.5 - ye) / (d * 0.5) * Math.tan(st(ve.vFovDeg, 0.1, 179) * _t * 0.5), se = da(ss(ss(Di(Se.right, Ie), Di(Se.up, Pe)), Se.fwd));
    return {
      u: (Math.atan2(se.x, se.z) / Bh + 0.5 + 1) % 1,
      v: st(0.5 - Math.asin(st(se.y, -1, 1)) / Math.PI, 0, 1)
    };
  }
  function ge(I, G, ie) {
    const le = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || v.sourceWidth || v.width || 1)), d = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || v.sourceHeight || v.height || 1));
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return {
        x: (Number(G || 0) % 1 + 1) % 1 * le,
        y: st(Number(ie || 0), 0, 1) * d,
        visible: !0
      };
    const q = oa(I, le, d);
    if (!q)
      return { x: le * 0.5, y: d * 0.5, visible: !1 };
    const ye = Ko(q.yawDeg, q.pitchDeg, q.rollDeg), ve = Sy(G, ie), Se = Go(ve, ye.right), Ie = Go(ve, ye.up), Pe = Go(ve, ye.fwd);
    if (Pe <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const se = le * 0.5 + Se / Pe * (le * 0.5 / Math.tan(st(q.hFovDeg, 1, 179) * _t * 0.5)), Ee = d * 0.5 - Ie / Pe * (d * 0.5 / Math.tan(st(q.vFovDeg, 0.1, 179) * _t * 0.5));
    return { x: se, y: Ee, visible: se >= 0 && se <= le && Ee >= 0 && Ee <= d };
  }
  return {
    init: fe,
    dispose: U,
    setViewport: be,
    setBackgroundErp: z,
    setPaintErp: J,
    setMaskErp: _e,
    renderPanorama: Qt,
    renderUnwrap: en,
    renderCutout: _n,
    renderScene: O,
    syncState: V,
    screenToErpUv: te,
    erpUvToScreen: ge,
    getCanvas() {
      return t;
    },
    isSupported() {
      return fe();
    },
    getViewport() {
      return { ...v };
    }
  };
}
function Uf(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function Cy() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, f, p) {
    const b = t(u);
    let _ = e.get(b) || null;
    if (!_) {
      const A = document.createElement("canvas"), v = A.getContext("2d");
      if (!v) return null;
      _ = {
        id: b,
        canvas: A,
        ctx: v,
        width: 0,
        height: 0
      }, e.set(b, _);
    }
    const x = Uf(f), S = Uf(p);
    return _.width !== x && (_.canvas.width = x, _.width = x), _.height !== S && (_.canvas.height = S, _.height = S), _;
  }
  function i(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const f = i(u);
    f && f.ctx.clearRect(0, 0, f.canvas.width, f.canvas.height);
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
const Iy = /* @__PURE__ */ new Set([
  "sticker",
  "raster",
  "paint",
  "mask",
  "3d_object"
]), Ty = /* @__PURE__ */ new Set([
  "erp_image",
  "video",
  "3d"
]);
function Gh(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ey(e, t) {
  return e === "paint" || e === "mask" || e === "raster" ? !1 : t !== !1;
}
function Dy(e = {}) {
  const t = Ty.has(String((e == null ? void 0 : e.type) || "")) ? String(e.type) : "erp_image", n = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number.isFinite(n) ? Gh(n, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function Oy(e = {}) {
  const t = String((e == null ? void 0 : e.type) || "");
  if (!Iy.has(t)) return null;
  const n = Number((e == null ? void 0 : e.opacity) ?? 1), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0);
  return {
    id: String((e == null ? void 0 : e.id) || ""),
    type: t,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    visible: (e == null ? void 0 : e.visible) !== !1,
    opacity: Number.isFinite(n) ? Gh(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: Ey(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Ry(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => Oy(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const l = Number((i == null ? void 0 : i.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return l !== u ? l - u : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
    }),
    selectedId: (e == null ? void 0 : e.selectedId) ?? null,
    hoveredId: (e == null ? void 0 : e.hoveredId) ?? null
  };
}
function Bi(e = {}) {
  return {
    stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
    background: Dy((e == null ? void 0 : e.background) || {}),
    objectPass: Ry((e == null ? void 0 : e.objectPass) || {}),
    overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
  };
}
function Fy(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Lc(e = {}, t = "paint") {
  const n = String((e == null ? void 0 : e.type) || t), i = Number((e == null ? void 0 : e.zIndex) ?? (e == null ? void 0 : e.z_index) ?? 0), a = Number((e == null ? void 0 : e.opacity) ?? 1);
  return {
    id: String((e == null ? void 0 : e.id) || `${n}_layer`),
    type: n,
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    zIndex: Number.isFinite(i) ? i : 0,
    opacity: Number.isFinite(a) ? Fy(a, 0, 1) : 1,
    visible: (e == null ? void 0 : e.visible) !== !1,
    coverageAware: !1,
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Ly(e, t, n = {}) {
  return e ? Lc({
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
function zy(e, t, n = {}) {
  return e ? Lc({
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
function $y(e, t, n = {}) {
  return e ? Lc({
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
function Kh(e = {}) {
  const t = [], n = Ly(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = zy(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((l, u) => {
    const f = $y(
      (l == null ? void 0 : l.source) || null,
      (l == null ? void 0 : l.revision) || "",
      {
        id: String((l == null ? void 0 : l.id) || `raster_layer_${u}`),
        zIndex: Number((l == null ? void 0 : l.zIndex) ?? (l == null ? void 0 : l.z_index) ?? 90),
        opacity: Number((l == null ? void 0 : l.opacity) ?? 1),
        visible: (l == null ? void 0 : l.visible) !== !1,
        transform: (l == null ? void 0 : l.transform) || null,
        params: (l == null ? void 0 : l.params) || {}
      }
    );
    f && t.push(f);
  }), t.sort((l, u) => {
    const f = Number((l == null ? void 0 : l.zIndex) || 0), p = Number((u == null ? void 0 : u.zIndex) || 0);
    return f !== p ? f - p : String((l == null ? void 0 : l.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function zc(e, t) {
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
function Ts(e = {}) {
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, l = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Bi({
    stateRevision: i,
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
      objects: zc(a, l)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function ha(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = zc(t, n), a = Kh({
    paintSource: (e == null ? void 0 : e.paintSource) || null,
    paintRevision: (e == null ? void 0 : e.paintRevision) || "",
    paintOptions: (e == null ? void 0 : e.paintOptions) || null,
    maskSource: (e == null ? void 0 : e.maskSource) || null,
    maskRevision: (e == null ? void 0 : e.maskRevision) || "",
    maskOptions: (e == null ? void 0 : e.maskOptions) || null,
    rasterEntries: (e == null ? void 0 : e.rasterEntries) || []
  });
  return Bi({
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
function jy(e = {}) {
  var l, u, f, p, b, _, x, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const A = Bi(e), v = Array.isArray((l = A.objectPass) == null ? void 0 : l.objects) ? A.objectPass.objects : [], R = {
      stickers: v.filter((D) => D.type === "sticker").map((D) => {
        var E, F, Y, L, Z, fe, U, be, xe, C, we, re, pe;
        return {
          id: D.id,
          assetId: String(((E = D == null ? void 0 : D.params) == null ? void 0 : E.assetId) || ((F = D == null ? void 0 : D.params) == null ? void 0 : F.asset_id) || (D == null ? void 0 : D.id) || ""),
          yawDeg: Number(((Y = D == null ? void 0 : D.transform) == null ? void 0 : Y.yawDeg) ?? ((L = D == null ? void 0 : D.params) == null ? void 0 : L.yawDeg) ?? 0),
          pitchDeg: Number(((Z = D == null ? void 0 : D.transform) == null ? void 0 : Z.pitchDeg) ?? ((fe = D == null ? void 0 : D.params) == null ? void 0 : fe.pitchDeg) ?? 0),
          rollDeg: Number(((U = D == null ? void 0 : D.transform) == null ? void 0 : U.rollDeg) ?? ((be = D == null ? void 0 : D.params) == null ? void 0 : be.rollDeg) ?? 0),
          hFovDeg: Number(((xe = D == null ? void 0 : D.transform) == null ? void 0 : xe.hFovDeg) ?? ((C = D == null ? void 0 : D.params) == null ? void 0 : C.hFovDeg) ?? 30),
          vFovDeg: Number(((we = D == null ? void 0 : D.transform) == null ? void 0 : we.vFovDeg) ?? ((re = D == null ? void 0 : D.params) == null ? void 0 : re.vFovDeg) ?? 30),
          crop: ((pe = D == null ? void 0 : D.params) == null ? void 0 : pe.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 },
          opacity: Number((D == null ? void 0 : D.opacity) ?? 1),
          visible: (D == null ? void 0 : D.visible) !== !1,
          zIndex: Number((D == null ? void 0 : D.zIndex) ?? 0)
        };
      }),
      selectedId: ((u = A.objectPass) == null ? void 0 : u.selectedId) ?? null,
      hoveredId: ((f = A.objectPass) == null ? void 0 : f.hoveredId) ?? null
    }, H = v.filter((D) => D.type === "sticker").map((D) => {
      var E, F;
      return {
        assetId: String(((E = D == null ? void 0 : D.params) == null ? void 0 : E.assetId) || ((F = D == null ? void 0 : D.params) == null ? void 0 : F.asset_id) || (D == null ? void 0 : D.id) || ""),
        source: D.source || null,
        revision: String((D == null ? void 0 : D.revision) || "")
      };
    }).filter((D) => D.assetId && D.source), j = v.find((D) => D.type === "paint") || null, P = v.find((D) => D.type === "mask") || null;
    return {
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      backgroundSource: ((p = A.background) == null ? void 0 : p.source) || null,
      backgroundRevision: String(((b = A.background) == null ? void 0 : b.revision) || ""),
      coverageDeg: Number(((_ = A.background) == null ? void 0 : _.coverageDeg) || 360) === 180 ? 180 : 360,
      paintSource: (j == null ? void 0 : j.source) || null,
      paintRevision: String((j == null ? void 0 : j.revision) || ""),
      maskSource: (P == null ? void 0 : P.source) || null,
      maskRevision: String((P == null ? void 0 : P.revision) || ""),
      textures: H,
      scene: R,
      objectPass: A.objectPass,
      backgroundOpacity: Number(((x = A.background) == null ? void 0 : x.opacity) ?? 1),
      showMaskTint: ((S = e == null ? void 0 : e.overlay) == null ? void 0 : S.showMaskTint) === !0
    };
  }
  const t = e.scene || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e.textures) ? e.textures : [], i = e.layers || {}, a = Bi({
    objectPass: {
      selectedId: (t == null ? void 0 : t.selectedId) ?? null,
      hoveredId: (t == null ? void 0 : t.hoveredId) ?? null,
      objects: [
        ...zc(t, n),
        ...Kh({
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
function Vy(e) {
  let t = null;
  function n(l = {}) {
    const u = jy(l);
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
function Jr(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (H) => Ay(H), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => Cy(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (H) => Vy(H), a = t(e), l = (e == null ? void 0 : e.targetCanvas) || null, u = n();
  let f = null;
  const p = i({
    syncState(H = {}) {
      if (typeof a.syncState == "function") {
        const j = { ...H }, P = a.syncState(j);
        return P && (f = j, P);
      }
      return f = { ...H }, !0;
    }
  });
  function b(H = {}) {
    return p.sync(H);
  }
  function _(H = {}, j = {}) {
    return f ? a.renderScene({
      ...f,
      view: H,
      width: j.width,
      height: j.height,
      dpr: j.dpr,
      backgroundOpacity: j.backgroundOpacity ?? f.backgroundOpacity ?? 1,
      showMaskTint: j.showMaskTint ?? f.showMaskTint ?? !1
    }) : null;
  }
  function x(H, j, P = {}, D = {}) {
    if (!j) return !1;
    const E = _(P, {
      ...D,
      width: j.w,
      height: j.h
    });
    return E ? H ? (H.canvas && E === H.canvas || H.drawImage(E, j.x, j.y, j.w, j.h), !0) : !!l && E === l : !1;
  }
  function S(H, j = {}, P = {}) {
    const D = Number(P.width || 0), E = Number(P.height || 0);
    if (!(D > 0) || !(E > 0)) return null;
    const F = u.ensureTarget(H, D, E);
    if (!F) return null;
    const Y = _(j, {
      ...P,
      width: D,
      height: E
    });
    return Y ? (F.ctx.clearRect(0, 0, F.canvas.width, F.canvas.height), F.ctx.drawImage(Y, 0, 0, F.canvas.width, F.canvas.height), F.canvas) : null;
  }
  function A(H) {
    u.clearTarget(H);
  }
  function v() {
    var H;
    u.dispose(), (H = a.dispose) == null || H.call(a), f = null;
  }
  function R() {
    f = null, p.clear();
  }
  return {
    isSupported: typeof a.isSupported == "function" ? () => a.isSupported() : () => !1,
    syncState: b,
    renderView: _,
    renderToContext: x,
    renderToTarget: S,
    clearTarget: A,
    snapshotState: p.snapshot,
    clearState: R,
    dispose: v
  };
}
function Ii(e, t) {
  const n = document.createElement("canvas");
  n.width = Math.max(1, Math.round(e)), n.height = Math.max(1, Math.round(t));
  const i = n.getContext("2d");
  return i && (i.clearRect(0, 0, n.width, n.height), i.imageSmoothingEnabled = !0), { canvas: n, ctx: i };
}
function Hy() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Bf(e, t = 8) {
  var _;
  const n = (_ = e == null ? void 0 : e.getContext) == null ? void 0 : _.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const l = n.getImageData(0, 0, i, a).data;
  let u = i, f = a, p = -1, b = -1;
  for (let x = 0; x < a; x += 1)
    for (let S = 0; S < i; S += 1)
      l[(x * i + S) * 4 + 3] <= t || (S < u && (u = S), x < f && (f = x), S > p && (p = S), x > b && (b = x));
  return p < u || b < f ? null : {
    minX: u,
    minY: f,
    maxX: p,
    maxY: b,
    width: p - u + 1,
    height: b - f + 1,
    aspect: Number(((p - u + 1) / Math.max(1, b - f + 1)).toFixed(4))
  };
}
function $c(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function sr(e, t, n) {
  if (!e) return Ii(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function yt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let Ol = null, Rl = null, Gf = null, Kf = null, Mt = null, sa = null, nn = null, Sr = null;
function Uy() {
  if (Rl) return Rl;
  const e = 6, t = 17, n = document.createElement("canvas");
  n.width = t, n.height = t;
  const i = n.getContext("2d");
  return i.fillStyle = "rgba(0, 0, 0, 0.25)", i.fillRect(0, 0, t, t), i.strokeStyle = "rgba(0, 0, 0, 0.5)", i.lineWidth = e, i.lineCap = "square", i.beginPath(), i.moveTo(0, 0), i.lineTo(t, t), i.moveTo(-t / 2, t / 2), i.lineTo(t / 2, t + t / 2), i.moveTo(t / 2, -t / 2), i.lineTo(t + t / 2, t / 2), i.stroke(), Rl = n, n;
}
function Fl(e, t) {
  if (!e || !t) return;
  const n = t.width, i = t.height;
  Ol = sr(Ol, n, i);
  const a = Ol;
  yt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", Kf !== a.ctx && (Gf = a.ctx.createPattern(Uy(), "repeat"), Kf = a.ctx), a.ctx.fillStyle = Gf, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
}
function By(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function Gy(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function Ky(e, t) {
  const n = Number(e == null ? void 0 : e.radiusValue), i = String((e == null ? void 0 : e.radiusModel) || "").trim(), a = (t == null ? void 0 : t.width) || 1;
  return i === "erp_uv_norm" && n > 0 ? Math.max(0.5, n * a) : i === "degree_norm" && n > 0 ? Math.max(0.5, n * 90 / 360 * a) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function Wy(e, t) {
  const n = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(n) && n > 0) return Math.max(1, n * t * 2);
  const i = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (i === "brush" || i === "eraser" ? 0.15 : 0.2) * t * 2);
}
const vt = /* @__PURE__ */ new Map(), jc = 128;
function Yy(e, t, n, i, a, l) {
  const u = Math.max(1, Math.round(e)), f = Math.max(0, Math.min(1, t)), p = `${u}:${f.toFixed(2)}:${n}:${i}:${a}:${l.toFixed(3)}`;
  if (vt.has(p)) {
    const P = vt.get(p);
    return vt.delete(p), vt.set(p, P), P;
  }
  vt.size >= jc && vt.delete(vt.keys().next().value);
  const b = u * 2 + 2, _ = u + 1, x = $c(b, b), S = x.getContext("2d"), A = f * u, v = u + 1, R = `rgba(${n},${i},${a},${l})`, H = `rgba(${n},${i},${a},0)`, j = S.createRadialGradient(_, _, A, _, _, v);
  return j.addColorStop(0, R), j.addColorStop(1, H), S.fillStyle = j, S.fillRect(0, 0, b, b), vt.set(p, x), x;
}
function qy(e, t, n, i, a, l, u) {
  const { r: f, g: p, b, a: _ } = i, x = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), A = Math.max(0, a), v = Math.max(0, Math.min(0.99, l)), R = Math.max(0, Math.min(1, u ?? 0)), H = `chisel:${x}:${S}:${n.toFixed(2)}:${f}:${p}:${b}:${_.toFixed(3)}:${A.toFixed(2)}:${v.toFixed(2)}:${R.toFixed(2)}`;
  if (vt.has(H)) {
    const Z = vt.get(H);
    return vt.delete(H), vt.set(H, Z), Z;
  }
  vt.size >= jc && vt.delete(vt.keys().next().value);
  const j = $c(x, S), P = j.getContext("2d"), D = P.createImageData(x, S), E = D.data, F = Math.max(0, e - t), Y = Math.max(0, Math.min(1, n)), L = 1 + A;
  for (let Z = 0; Z < S; Z++)
    for (let fe = 0; fe < x; fe++) {
      const U = fe + 0.5 - e, be = Z + 0.5 - t, xe = Math.max(Math.abs(U) - F, 0), we = Math.hypot(xe, be) / t;
      if (we >= 1) continue;
      const re = we <= Y ? 1 : Math.max(0, (1 - we) / Math.max(1e-4, 1 - Y)), pe = 1 - we, z = 1 + A * (1 - pe) * (1 - pe), J = 1 - v * pe * pe, _e = z * J / L;
      let Re = 1;
      if (R > 0) {
        const wt = Math.floor((be + t) / 1.5), Nt = Math.floor((U + e) / 8), Ot = qr($i(wt * 41 + 500, Nt * 19 + 300));
        Re = 1 - R * 0.42 * Ot;
      }
      const Fe = Math.round(255 * Math.min(1, _ * re * _e * Re));
      if (Fe <= 0) continue;
      const Be = (Z * x + fe) * 4;
      E[Be] = f, E[Be + 1] = p, E[Be + 2] = b, E[Be + 3] = Fe;
    }
  return P.putImageData(D, 0, 0), vt.set(H, j), j;
}
function $i(e, t) {
  const n = Math.trunc(Math.round(e * 4)), i = Math.trunc(Math.round(t * 4));
  let a = 2166136261;
  return a = Math.imul(a ^ n & 255, 16777619), a = Math.imul(a ^ n >> 8 & 255, 16777619), a = Math.imul(a ^ i & 255, 16777619), a = Math.imul(a ^ i >> 8 & 255, 16777619), a >>> 0;
}
function qr(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function Xy(e, t, n, i, a, l, u) {
  const f = e + 0.5 - n, p = t + 0.5 - i, b = Math.max(0, n - i), _ = Math.max(Math.abs(f) - b, 0), x = Math.hypot(_, p) / i;
  if (x >= 1) return 0;
  const S = qr($i(e * 17 + 3, t * 13 + 7)), A = x + l * 0.22 * (S - 0.5);
  if (A >= 1) return 0;
  const v = A <= a ? 1 : Math.max(0, (1 - A) / Math.max(1e-4, 1 - a)), R = Jy(e, t, f, p, n, i), H = l * 0.55;
  if (R < H) return 0;
  const P = 0.45 + 0.55 * ((R - H) / Math.max(1e-4, 1 - H));
  return Math.round(255 * Math.min(1, u * v * P));
}
function Jy(e, t, n, i, a, l) {
  const u = Math.floor((n + a) / 3), f = Math.floor((i + l) / 2), p = qr($i(u * 13 + 700, f * 17 + 400)), b = Math.floor((n + a) / 1.5), _ = Math.floor((i + l) / 1.5), x = qr($i(b * 23 + 800, _ * 29 + 500)), S = qr($i(e * 3 + 100, t * 5 + 200));
  return p * 0.55 + x * 0.3 + S * 0.15;
}
function Zy(e, t, n, i, a) {
  const { r: l, g: u, b: f, a: p } = i, b = Math.max(2, Math.ceil(e) * 2), _ = Math.max(2, Math.ceil(t) * 2), x = Math.max(0, Math.min(1, a)), S = `crayon:${b}:${_}:${n.toFixed(2)}:${l}:${u}:${f}:${p.toFixed(3)}:${x.toFixed(2)}`;
  if (vt.has(S)) {
    const P = vt.get(S);
    return vt.delete(S), vt.set(S, P), P;
  }
  vt.size >= jc && vt.delete(vt.keys().next().value);
  const A = $c(b, _), v = A.getContext("2d"), R = v.createImageData(b, _), H = R.data, j = Math.max(0, Math.min(1, n));
  for (let P = 0; P < _; P++)
    for (let D = 0; D < b; D++) {
      const E = Xy(D, P, e, t, j, x, p);
      if (E <= 0) continue;
      const F = (P * b + D) * 4;
      H[F] = l, H[F + 1] = u, H[F + 2] = f, H[F + 3] = E;
    }
  return v.putImageData(R, 0, 0), vt.set(S, A), A;
}
function Wh(e, t, n) {
  var R, H;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = Ky(t, n), l = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = Qy(t), f = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), p = Number(((R = t == null ? void 0 : t.angle) == null ? void 0 : R.value) ?? 0), b = Wy(t, a), _ = String(((H = t == null ? void 0 : t.targetSpace) == null ? void 0 : H.viewMode) || ""), x = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && _ !== "unwrap", S = t == null ? void 0 : t.scatter, A = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let v;
  if (i === "chisel") {
    const j = a * f, P = a, D = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), E = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), F = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = qy(j, P, l, u, D, E, F);
  } else if (i === "crayon") {
    const j = a * f, P = a, D = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = Zy(j, P, l, u, D);
  } else
    v = Yy(a, l, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: v, radiusPx: a, spacingPx: b, desc: n, aspect: f, angle: p, stampKind: i, scatter: A, latitudeCorrection: x };
}
function Qy(e) {
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
function ev(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function Wf(e, t, n, i, a) {
  const l = e.angle, u = e.desc.width;
  function f(b, _) {
    l === 0 ? e.ctx.drawImage(e.stampTex, b - a, _ - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(b, _), e.ctx.rotate(l), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  f(t, n);
  const p = l === 0 ? a : a * Math.abs(Math.cos(l)) + i * Math.abs(Math.sin(l));
  t - p < 0 && f(t + u, n), t + p > u && f(t - u, n);
}
function Vc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: b, count: _ } = e.scatter, x = b * e.radiusPx * a, S = $i(t, n);
    for (let A = 0; A < _; A++) {
      const v = qr(S + A * 2) * Math.PI * 2, R = Math.sqrt(qr(S + A * 2 + 1)) * x, H = t + Math.cos(v) * R, j = n + Math.sin(v) * R, P = Math.max(0.5, e.radiusPx * a * 0.48), D = (0.5 - j / Math.max(1, e.desc.height)) * Math.PI, E = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(D)) : 1, F = P * e.aspect * E;
      Wf(e, H, j, P, F);
    }
    return;
  }
  const l = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, f = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, p = l * e.aspect * f;
  Wf(e, t, n, l, p);
}
function Yf(e, t, n) {
  const i = Gy(t);
  if (!e || i.length === 0) return;
  const a = n.width, l = n.height, u = Wh(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const f = [];
  for (let S = 0; S < i.length; S++) {
    let A = Number(i[S].u || 0) * a;
    const v = Number(i[S].v || 0) * l;
    S > 0 && Math.abs(A - f[S - 1].x) > a * 0.5 && (A += A < f[S - 1].x ? a : -a), f.push({ x: A, y: v });
  }
  if (Vc(u, f[0].x, f[0].y, 1), f.length === 1) {
    e.restore();
    return;
  }
  let p = f[0], b = f[0], _ = f[0], x = 0;
  for (let S = 1; S < f.length; S++) {
    const A = f[S], v = { x: (b.x + A.x) * 0.5, y: (b.y + A.y) * 0.5 };
    S === 1 ? x = Oa(u, _.x, _.y, v.x, v.y, x) : x = ls(u, p, _, v, A, x), p = b, b = A, _ = v;
  }
  f.length === 2 ? Oa(u, _.x, _.y, b.x, b.y, x) : ls(u, p, _, b, b, x), e.restore();
}
function Wo(e, t, n) {
  var x;
  const i = Array.isArray((x = t == null ? void 0 : t.geometry) == null ? void 0 : x.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, l = n.height, u = ev(t), f = [];
  let p = 1 / 0, b = -1 / 0;
  for (let S = 0; S < i.length; S++) {
    const A = By(i[S]);
    let v = Number(A.x || 0) * a;
    S > 0 && Math.abs(v - f[S - 1].x) > a * 0.5 && (v += v < f[S - 1].x ? a : -a), f.push({ x: v, y: Number(A.y || 0) * l }), v < p && (p = v), v > b && (b = v);
  }
  function _(S) {
    e.beginPath(), e.moveTo(f[0].x + S, f[0].y);
    for (let A = 1; A < f.length; A++) e.lineTo(f[A].x + S, f[A].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, _(0), p < 0 && _(a), b > a && _(-a), e.restore();
}
function xo(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Wo(e, t, n);
    return;
  }
  const l = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  l >= 0.999 ? Yf(e, t, n) : (sa = sr(sa, n.width, n.height), yt(sa), Yf(sa.ctx, t, n), e.save(), e.globalAlpha = l, e.drawImage(sa.canvas, 0, 0), e.restore());
}
function jr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Oa(e, t, n, i, a, l) {
  const u = i - t, f = a - n, p = Math.hypot(u, f);
  if (p < 1e-9) return l;
  let b = e.spacingPx - l;
  for (; b <= p; ) {
    const _ = b / p;
    Vc(e, t + u * _, n + f * _, 1), b += e.spacingPx;
  }
  return p - b + e.spacingPx;
}
function ls(e, t, n, i, a, l) {
  const f = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, b = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, _ = 0, x = f, S = x + p, A = S + b, v = S - x, R = 16;
  let H = l, j = n.x, P = n.y;
  for (let D = 1; D <= R; D++) {
    const E = x + v * D / R, F = ((x - E) * t.x + (E - _) * n.x) / (x - _), Y = ((x - E) * t.y + (E - _) * n.y) / (x - _), L = ((S - E) * n.x + (E - x) * i.x) / (S - x), Z = ((S - E) * n.y + (E - x) * i.y) / (S - x), fe = ((A - E) * i.x + (E - S) * a.x) / (A - S), U = ((A - E) * i.y + (E - S) * a.y) / (A - S), be = ((S - E) * F + (E - _) * L) / (S - _), xe = ((S - E) * Y + (E - _) * Z) / (S - _), C = ((A - E) * L + (E - x) * fe) / (A - x), we = ((A - E) * Z + (E - x) * U) / (A - x), re = ((S - E) * be + (E - x) * C) / (S - x), pe = ((S - E) * xe + (E - x) * we) / (S - x);
    H = Oa(e, j, P, re, pe, H), j = re, P = pe;
  }
  return H;
}
function tv(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const l = e.descriptor, u = l.width, f = n * l.height, p = e.activeStroke;
  let b = t * u;
  if (p && Math.abs(b - p.prev.x) > u * 0.5 && (b += b < p.prev.x ? u : -u), !p) {
    const A = Wh(a, i, l), v = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), R = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), H = String((i == null ? void 0 : i.toolKind) || "") === "eraser", j = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Vc(A, b, f, 1), e.activeStroke = {
      pprev: { x: b, y: f },
      prev: { x: b, y: f },
      lastMidX: b,
      lastMidY: f,
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
      isEraser: H,
      layerKind: j,
      pointCount: 1
    }, e.displayDirty = !0;
    return;
  }
  const _ = (p.prev.x + b) * 0.5, x = (p.prev.y + f) * 0.5;
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
  p.pointCount === 1 ? p.distSinceStamp = Oa(S, p.lastMidX, p.lastMidY, _, x, p.distSinceStamp) : p.distSinceStamp = ls(
    S,
    p.pprev,
    { x: p.lastMidX, y: p.lastMidY },
    { x: _, y: x },
    { x: b, y: f },
    p.distSinceStamp
  ), p.pprev = p.prev, p.prev = { x: b, y: f }, p.lastMidX = _, p.lastMidY = x, p.pointCount++, e.displayDirty = !0;
}
function sc(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), l = Ii(t, n), u = {
    descriptor: i,
    committedMask: Ii(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, f = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: Ii(t, n),
    currentStroke: l,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, p = Ii(t, n);
  let b = null, _ = "", x = null;
  function S(U) {
    return {
      actionGroupId: U,
      descriptor: i,
      committedPaint: Ii(t, n),
      currentStroke: l,
      activeStroke: null,
      displayDirty: !0,
      lassoPreviewActive: !1
    };
  }
  function A(U) {
    let be = a.get(U);
    return be || (be = S(U), a.set(U, be)), be;
  }
  function v(U) {
    return _ === "mask" ? u : b ? A(b) : f;
  }
  function R(U) {
    var pe;
    const be = !x || x.length !== U.length || U.some((z, J) => z !== x[J]), xe = _ === "paint" && ((pe = b ? a.get(b) : f) == null ? void 0 : pe.activeStroke) || null;
    let C = u.displayDirty || f.displayDirty || be;
    for (const z of U) {
      const J = a.get(z);
      if (J != null && J.displayDirty) {
        C = !0;
        break;
      }
    }
    if (xe && (C = !0), !C) return;
    u.displayDirty = !1, f.displayDirty = !1;
    for (const z of U) {
      const J = a.get(z);
      J && (J.displayDirty = !1);
    }
    x = [...U];
    const we = p.ctx;
    yt(p);
    const re = !!(xe != null && xe.isEraser);
    for (const z of U) {
      const J = a.get(z);
      if (!J) continue;
      const Re = b === J.actionGroupId && _ === "paint" ? J.activeStroke : null;
      if (re)
        Mt = sr(Mt, t, n), yt(Mt), Mt.ctx.drawImage(J.committedPaint.canvas, 0, 0), jr(Mt.ctx, l.canvas), we.drawImage(Mt.canvas, 0, 0);
      else if (we.drawImage(J.committedPaint.canvas, 0, 0), Re) {
        const Fe = J.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Re.strokeOpacity ?? 1));
        we.save(), we.globalAlpha = Fe, we.drawImage(l.canvas, 0, 0), we.restore();
      }
    }
  }
  function H(U) {
    var xe, C, we, re, pe;
    for (const z of a.values())
      yt(z.committedPaint), yt(z.currentStroke), z.activeStroke = null, z.displayDirty = !0;
    yt(u.committedMask), yt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, f.displayDirty = !0, x = null;
    const be = [
      ...Array.isArray((C = (xe = U == null ? void 0 : U.painting) == null ? void 0 : xe.paint) == null ? void 0 : C.strokes) ? U.painting.paint.strokes : [],
      ...Array.isArray((re = (we = U == null ? void 0 : U.painting) == null ? void 0 : we.mask) == null ? void 0 : re.strokes) ? U.painting.mask.strokes : []
    ];
    for (const z of be) {
      if (((pe = z == null ? void 0 : z.targetSpace) == null ? void 0 : pe.kind) !== "ERP_GLOBAL") continue;
      const J = String((z == null ? void 0 : z.layerKind) || "paint"), Re = String((z == null ? void 0 : z.toolKind) || "pen") === "eraser";
      if (J === "mask") {
        const Fe = u.descriptor;
        Re ? (Mt = sr(Mt, Fe.width, Fe.height), yt(Mt), xo(Mt.ctx, z, Fe), jr(u.committedMask.ctx, Mt.canvas)) : xo(u.committedMask.ctx, z, Fe);
        continue;
      }
      if (Re) {
        Mt = sr(Mt, i.width, i.height), yt(Mt), xo(Mt.ctx, z, i);
        for (const Fe of a.values())
          jr(Fe.committedPaint.ctx, Mt.canvas), Fe.displayDirty = !0;
      } else {
        const Fe = String((z == null ? void 0 : z.actionGroupId) || "__default__"), Be = A(Fe), wt = Be.descriptor;
        xo(Be.committedPaint.ctx, z, wt), Be.displayDirty = !0;
      }
    }
    R([...a.keys()]);
  }
  function j(U, be) {
    _ = String((U == null ? void 0 : U.layerKind) || "");
    const xe = String((U == null ? void 0 : U.toolKind) || "") === "eraser";
    if (_ === "mask")
      b = null, yt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const C = xe ? f : A(String((U == null ? void 0 : U.actionGroupId) || "__default__"));
      b = xe ? "" : String((U == null ? void 0 : U.actionGroupId) || "__default__"), yt(C.currentStroke), C.activeStroke = null, C.displayDirty = !0;
    }
  }
  function P(U, be) {
    var J;
    const xe = String((U == null ? void 0 : U.layerKind) || "paint"), C = String((U == null ? void 0 : U.toolKind) || "") === "eraser", we = xe === "mask" ? u : C ? f : A(String((U == null ? void 0 : U.actionGroupId) || b || "__default__")), re = we.activeStroke, pe = we.descriptor;
    if (re && re.pointCount > 1) {
      const _e = we.currentStroke.ctx;
      _e.globalCompositeOperation = "source-over";
      const Re = {
        ctx: _e,
        stampTex: re.stampTex,
        radiusPx: re.radiusPx,
        spacingPx: re.spacingPx,
        desc: pe,
        aspect: re.aspect,
        angle: re.angle,
        stampKind: re.stampKind,
        scatter: re.scatter,
        latitudeCorrection: re.latitudeCorrection
      };
      re.pointCount === 2 ? Oa(Re, re.lastMidX, re.lastMidY, re.prev.x, re.prev.y, re.distSinceStamp) : ls(Re, re.pprev, { x: re.lastMidX, y: re.lastMidY }, re.prev, re.prev, re.distSinceStamp);
    }
    we.lassoPreviewActive && (yt(we.currentStroke), Wo(we.currentStroke.ctx, U, pe), we.lassoPreviewActive = !1);
    const z = xe === "mask" ? u.committedMask : we.committedPaint;
    if (C && xe === "paint")
      for (const _e of a.values())
        jr(_e.committedPaint.ctx, we.currentStroke.canvas), _e.displayDirty = !0;
    else if (C)
      jr(z.ctx, we.currentStroke.canvas);
    else {
      const _e = Math.max(0, Math.min(1, (re == null ? void 0 : re.strokeOpacity) ?? 1));
      z.ctx.save(), z.ctx.globalAlpha = _e, z.ctx.drawImage(we.currentStroke.canvas, 0, 0), z.ctx.restore();
    }
    Hy() && (String((U == null ? void 0 : U.toolKind) || ""), String((pe == null ? void 0 : pe.kind) || ""), Number((pe == null ? void 0 : pe.width) || 0), Number((pe == null ? void 0 : pe.height) || 0), String(((J = U == null ? void 0 : U.targetSpace) == null ? void 0 : J.viewMode) || ""), Number((U == null ? void 0 : U.aspect) ?? 1), Bf(we.currentStroke.canvas), Bf(z.canvas), void 0), yt(we.currentStroke), we.activeStroke = null, we.displayDirty = !0, b = null, _ = "", R([...a.keys()]);
  }
  function D(U) {
    if (_ === "mask")
      yt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
    else if (_ === "paint" && !b)
      yt(f.currentStroke), f.activeStroke = null, f.lassoPreviewActive = !1, f.displayDirty = !0;
    else if (b) {
      const be = a.get(b);
      be && (yt(be.currentStroke), be.activeStroke = null, be.lassoPreviewActive = !1, be.displayDirty = !0);
    }
    b = null, _ = "", R([...a.keys()]);
  }
  function E(U, be) {
    var C;
    if (_ = String((U == null ? void 0 : U.layerKind) || ""), String(((C = U == null ? void 0 : U.geometry) == null ? void 0 : C.geometryKind) || "") === "lasso_fill") {
      if (_ === "mask")
        yt(u.currentStroke), Wo(u.currentStroke.ctx, U, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const we = String((U == null ? void 0 : U.toolKind) || "") === "eraser", re = we ? f : A(String((U == null ? void 0 : U.actionGroupId) || b || "__default__"));
        b = we ? "" : String((U == null ? void 0 : U.actionGroupId) || b || "__default__"), yt(re.currentStroke), Wo(re.currentStroke.ctx, U, re.descriptor), re.lassoPreviewActive = !0, re.displayDirty = !0;
      }
      R([...a.keys()]);
    }
  }
  function F(U) {
    return R(U ?? [...a.keys()]), {
      displayPaint: p,
      committedMask: u.committedMask,
      descriptor: i
    };
  }
  function Y(U) {
    return a.get(String(U)) ?? null;
  }
  function L() {
    return [...a.keys()];
  }
  function Z(U) {
    var pe;
    const be = a.get(String(U));
    if (!be) return null;
    const xe = _ === "paint" && b === be.actionGroupId, C = _ === "paint" && ((pe = b ? a.get(b) : f) == null ? void 0 : pe.activeStroke) || null;
    if (C != null && C.isEraser)
      return nn = sr(nn, t, n), yt(nn), nn.ctx.drawImage(be.committedPaint.canvas, 0, 0), jr(nn.ctx, l.canvas), nn.canvas;
    const we = xe ? be.activeStroke : null;
    if (!we) return be.committedPaint.canvas;
    nn = sr(nn, t, n), yt(nn), nn.ctx.drawImage(be.committedPaint.canvas, 0, 0);
    const re = be.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, we.strokeOpacity ?? 1));
    return nn.ctx.save(), nn.ctx.globalAlpha = re, nn.ctx.drawImage(l.canvas, 0, 0), nn.ctx.restore(), nn.canvas;
  }
  function fe() {
    return Sr = sr(Sr, t, n), yt(Sr), Fl(Sr.ctx, u.committedMask.canvas), _ === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Mt = sr(Mt, t, n), yt(Mt), Mt.ctx.drawImage(u.committedMask.canvas, 0, 0), jr(Mt.ctx, l.canvas), yt(Sr), Fl(Sr.ctx, Mt.canvas)) : Fl(Sr.ctx, l.canvas)), Sr.canvas;
  }
  return {
    rebuildCommitted: H,
    beginStroke: j,
    appendStrokePoint: tv,
    updateActiveStroke: E,
    commitActiveStroke: P,
    cancelActiveStroke: D,
    getErpTarget: F,
    ensureTarget: v,
    getGroupTarget: Y,
    getGroupDisplayCanvas: Z,
    getMaskDisplayCanvas: fe,
    getAllGroupIds: L
  };
}
function K(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Ll(e, t, n) {
  const i = Number(e);
  return Number.isFinite(i) ? Math.max(Number(t), Math.min(Number(n), i)) : Number(t);
}
function Ft(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function nv(e, t) {
  let n = Ft(t) - Ft(e);
  return n > 180 && (n -= 360), n < -180 && (n += 360), n;
}
const qf = Math.PI / 180, Xf = 0.12, rv = 3, iv = 35, av = 140, ma = 100, ov = 20, Jf = 0.8;
function sv(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), l = K(Number(e || ma), 1, 179) * qf;
  return 2 * Math.atan(Math.tan(l * 0.5) * (a / i)) / qf;
}
function lv(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function Es(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ma })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), l = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), f = typeof e.onDebug == "function" ? e.onDebug : null, p = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function b(j, P = null) {
    f && f(j, P);
  }
  function _(j, P, D = null, E = performance.now()) {
    return p.drag.active = !0, p.drag.lastX = Number(j || 0), p.drag.lastY = Number(P || 0), p.drag.lastTs = Number(E || performance.now()), p.drag.pointerId = D, p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.lastTs = p.drag.lastTs, p.velHistory = [], b("drag", { phase: "start", x: p.drag.lastX, y: p.drag.lastY, pointerId: D }), !0;
  }
  function x(j, P, D = "pano", E = performance.now()) {
    if (!p.drag.active) return !1;
    const F = Number(E || performance.now()), Y = Number(j), L = Number(P), Z = Y - p.drag.lastX, fe = L - p.drag.lastY;
    p.drag.lastX = Y, p.drag.lastY = L, p.drag.lastTs = F;
    const U = i() || { x: 1, y: 1 }, be = Number(U.x || 1), xe = Number(U.y || 1), C = { ...t() };
    let we = 0, re = 0;
    if (D === "unwrap") {
      const z = a() || { w: 1, h: 1 }, J = Math.max(1, Number(z.w || 1)), _e = Math.max(1, Number(z.h || 1)), Re = Z / J, Fe = fe / _e;
      we = -Re * 360 * be, re = Fe * 180 * xe;
    } else {
      const z = l() || { w: 0, h: 0 }, J = Math.max(1, Number(z.w || 0)), _e = Math.max(1, Number(z.h || 0));
      if (J > 1 && _e > 1) {
        const Re = K(Number(C.fov || ma), 1, 179), Fe = K(sv(Re, J, _e), 0.1, 179);
        we = -(Z / J) * Re * be, re = fe / _e * Fe * xe;
      } else
        we = -Z * Xf * be, re = fe * Xf * xe;
    }
    C.yaw = Ft(Number(C.yaw || 0) + we), C.pitch = K(Number(C.pitch || 0) + re, -89.9, 89.9), n(C), p.velHistory.push({ ts: F, yaw: C.yaw, pitch: C.pitch });
    let pe = 0;
    for (; pe < p.velHistory.length - 1 && p.velHistory[pe].ts < F - 100; ) pe++;
    return pe > 0 && p.velHistory.splice(0, pe), p.inertia.active = !1, p.inertia.lastTs = F, u(), b("drag", { phase: "move", dx: Z, dy: fe, dYaw: we, dPitch: re }), !0;
  }
  function S(j = performance.now()) {
    if (!p.drag.active) return !1;
    p.drag.active = !1;
    const P = Number(j || performance.now());
    p.drag.lastTs = P;
    const D = p.velHistory.filter((F) => P - F.ts <= 80);
    if (D.length >= 2) {
      const F = D[0], Y = D.at(-1), L = Math.max(1e-3, (Y.ts - F.ts) / 1e3);
      let Z = Y.yaw - F.yaw;
      Z > 180 && (Z -= 360), Z < -180 && (Z += 360), p.inertia.vx = Z / L, p.inertia.vy = (Y.pitch - F.pitch) / L;
    } else
      p.inertia.vx = 0, p.inertia.vy = 0;
    p.velHistory = [];
    const E = Math.hypot(p.inertia.vx, p.inertia.vy);
    return p.inertia.active = E > ov, p.inertia.lastTs = P, b("drag", { phase: "end", speed: E, inertiaActive: p.inertia.active }), !0;
  }
  function A(j = performance.now()) {
    if (!p.inertia.active) return !1;
    const P = Number(j || performance.now()), D = Math.max(1e-3, (P - (p.inertia.lastTs || P)) / 1e3);
    p.inertia.lastTs = P;
    const E = { ...t() };
    E.yaw = Ft(Number(E.yaw || 0) + p.inertia.vx * D), E.pitch = K(Number(E.pitch || 0) + p.inertia.vy * D, -89.9, 89.9);
    const F = Math.exp(-5.5 * D);
    return p.inertia.vx *= F, p.inertia.vy *= F, Math.abs(p.inertia.vx) < Jf && Math.abs(p.inertia.vy) < Jf && (p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.active = !1), n(E), u(), p.inertia.active;
  }
  function v(j) {
    const P = Math.sign(Number(j || 0));
    if (!P) return !1;
    const D = { ...t() }, E = Number(D.fov || ma);
    return D.fov = K(E + P * rv, iv, av), n(D), u(), b("wheel", { deltaSign: P, fovBefore: E, fovAfter: D.fov }), !0;
  }
  function R(j) {
    return v(Math.sign(lv(j)));
  }
  function H() {
    n({ yaw: 0, pitch: 0, fov: ma }), p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, u();
  }
  return {
    state: p,
    startDrag: _,
    moveDrag: x,
    endDrag: S,
    stepInertia: A,
    applyWheel: v,
    applyWheelEvent: R,
    resetView: H
  };
}
function cs(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
const Zf = Math.PI / 180;
function la(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function cv(e) {
  const t = e || {}, n = la(t.yaw_deg, 0), i = la(t.pitch_deg, 0), a = la(t.roll_deg ?? t.rot_deg, 0), l = Ll(la(t.hFOV_deg, 90), 1, 179), u = Ll(la(t.vFOV_deg, 60), 1, 179), f = Math.tan(l * Zf * 0.5) / Math.max(1e-6, Math.tan(u * Zf * 0.5)), p = Ll(f, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: l,
    vfov: u,
    aspect: p
  };
}
const Yh = 0.28;
function uv(e) {
  const t = e && typeof e == "object" ? e : {}, n = K(Number(t.x0 ?? 0), 0, 1), i = K(Number(t.y0 ?? 0), 0, 1), a = K(Number(t.x1 ?? 1), 0, 1), l = K(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, l),
    x1: Math.max(n, a),
    y1: Math.max(i, l)
  };
}
function fv(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), l = t.includeHidden === !0, u = e.visible === !1, f = l && i && u;
  return {
    id: String(e.id || ""),
    assetId: a,
    zIndex: Number(e.z_index || e.zIndex || 0),
    yawDeg: Number(e.yaw_deg || e.yawDeg || 0),
    pitchDeg: Number(e.pitch_deg || e.pitchDeg || 0),
    rollDeg: Number(e.rot_deg ?? e.roll_deg ?? e.rollDeg ?? 0),
    hFovDeg: K(Number(e.hFOV_deg || e.hFovDeg || 30), 1, 179),
    vFovDeg: K(Number(e.vFOV_deg || e.vFovDeg || 30), 1, 179),
    crop: uv(e.crop),
    opacity: f ? Yh : K(Number(e.opacity ?? 1), 0, 1),
    visible: f ? !0 : e.visible !== !1,
    external: i
  };
}
function Ds(e, t = {}) {
  var l;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((u) => fv(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, f) => Number(u.zIndex || 0) - Number(f.zIndex || 0)),
    selectedId: t.selectedId ?? ((l = e == null ? void 0 : e.active) == null ? void 0 : l.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function qh(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || Ds(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, l = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((f) => {
    var v;
    const p = String((f == null ? void 0 : f.assetId) || "").trim(), b = p || (f != null && f.external ? String((f == null ? void 0 : f.id) || "").trim() : "");
    if (!b || u.has(b)) return;
    const _ = p ? a[p] : null, x = t(b, _, f);
    if (x instanceof HTMLImageElement && !x.complete) return;
    const S = Number((x == null ? void 0 : x.naturalWidth) || (x == null ? void 0 : x.videoWidth) || (x == null ? void 0 : x.width) || 0), A = Number((x == null ? void 0 : x.naturalHeight) || (x == null ? void 0 : x.videoHeight) || (x == null ? void 0 : x.height) || 0);
    !x || S <= 0 || A <= 0 || (u.add(b), l.push({
      assetId: b,
      source: x,
      revision: String(((v = n.revisionFor) == null ? void 0 : v.call(n, b, _, x)) ?? [
        b,
        Number(x.naturalWidth || x.videoWidth || x.width || 0),
        Number(x.naturalHeight || x.videoHeight || x.height || 0),
        String(x.currentSrc || x.src || "")
      ].join("|"))
    }));
  }), l;
}
function Hc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: K(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function dv(e, t = 360) {
  return Hc(e, t);
}
function Ar(e) {
  const t = cv(e || {});
  return {
    mode: "cutout",
    yawDeg: Number((e == null ? void 0 : e.yaw_deg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch_deg) || 0),
    rollDeg: Number((t == null ? void 0 : t.roll) ?? (e == null ? void 0 : e.roll_deg) ?? (e == null ? void 0 : e.rot_deg) ?? 0),
    hFovDeg: K(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179),
    vFovDeg: K(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179),
    aspect: Number((t == null ? void 0 : t.aspect) || 1)
  };
}
const { app: mt } = Vo;
function lc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Vo == null ? void 0 : Vo.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Zr = Math.PI / 180, us = {}, hv = { Nu: 24, Nv: 14 }, mv = 10, pv = 120;
function gv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function ca(e) {
  var n, i, a, l, u;
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
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
  };
}
function bv() {
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
function Qr(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const n = (i, a) => {
    const l = Number(i), u = Number(a);
    return !Number.isFinite(l) || !Number.isFinite(u) ? null : [l, u];
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
function Xh(e) {
  const t = Qr(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function Jh(e, t, n) {
  Xh(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function cc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function Zh(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function yv(e) {
  return cs(Zh(e));
}
function Xr(e = null) {
  var l, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (l = mt == null ? void 0 : mt.canvas) == null ? void 0 : l.constructor) == null ? void 0 : u.name) || "");
  return [t, i, n, a].join("|");
}
function Qh(e, t = null) {
  const n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || "").trim();
  return n === "legacy_draw" || n === "dom" ? {
    chosenPath: n,
    reason: "forced",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Xr(t)
  } : String(e) === "cutout" ? {
    chosenPath: "dom",
    reason: "cutout_always_dom",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Xr(t)
  } : {
    chosenPath: "dom",
    reason: "dom_default_probe",
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || ""),
    signature: Xr(t)
  };
}
const wa = {
  nodes: /* @__PURE__ */ new Set(),
  intervalId: 0,
  debounceId: 0,
  lastSignature: "",
  generation: 0,
  register(e) {
    !e || String(e.__panoPreviewMode || "") !== "stickers" || (this.nodes.add(e), this.lastSignature || (this.lastSignature = Xr(e)), this.intervalId || (this.intervalId = window.setInterval(() => this.check(), 1e3)));
  },
  unregister(e) {
    e && this.nodes.delete(e), !this.nodes.size && this.intervalId && (window.clearInterval(this.intervalId), this.intervalId = 0), !this.nodes.size && this.debounceId && (window.clearTimeout(this.debounceId), this.debounceId = 0);
  },
  check() {
    const e = this.nodes.values().next().value || null, t = Xr(e);
    t !== this.lastSignature && (this.lastSignature = t, this.debounceId && window.clearTimeout(this.debounceId), this.debounceId = window.setTimeout(() => {
      this.debounceId = 0, this.generation += 1, [...this.nodes].forEach((i) => {
        if (!(!i || String(i.__panoPreviewMode || "") !== "stickers"))
          try {
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, em(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function em(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : Qh(i, e).chosenPath, l = cc(e);
      this.activeBackend = l;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", f = e.__panoPreviewNoPreview === !0, p = n.noPreview === !0;
      if (l === a && l !== "none" && u === i && f === p) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = p, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      l !== "none" && ji(e, { keepMonitor: i === "stickers" }), s1(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = cc(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || (e == null ? void 0 : e.__panoPreviewMode) || "stickers") === "cutout" ? "cutout" : "stickers";
      ji(e, { keepMonitor: i === "stickers" }), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      ji(e), this.activeBackend = "none";
    }
  };
  return e.__panoPreviewController = t, t;
}
function vv(e) {
  if (!(e != null && e.__panoDomMountProbe)) return;
  const t = e.__panoDomMountProbe;
  t.cancelled = !0, t.timeoutId && (clearTimeout(t.timeoutId), t.timeoutId = 0), e.__panoDomMountProbe = null;
}
function ji(e, t = {}) {
  var i, a, l, u, f;
  if (!e) return;
  ds.unregister(e), vv(e), e.__panoDomPreview, e.__panoLegacyPreviewHooked, e.__panoDomRestore, e.__panoLegacyRestore;
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
      (f = (u = n.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && (e.widgets = e.widgets.filter((p) => {
      if (p === (n == null ? void 0 : n.widget)) return !1;
      const b = String((p == null ? void 0 : p.name) || ""), _ = String((p == null ? void 0 : p.type) || ""), x = lc();
      return !(b === x || _ === x || b === "pano_preview" || _ === "pano_preview" || b === "preview" && _ === "pano_preview");
    }));
  } catch {
  }
  e.__panoDomPreview = null, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoPreviewInertia = null, e.__panoDomHealth = null, e.__panoDomProbePending = !1, e.__panoDomMountProbe = null, e.__panoPreviewNoPreview = !1, e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = !1, e.__panoActiveBackend = "none", String(t.reason || ""), t.keepMonitor, t.keepMonitor || wa.unregister(e);
}
function ei(e, t, n) {
  return { x: e, y: t, z: n };
}
function Qf(e, t) {
  return ei(e.x + t.x, e.y + t.y, e.z + t.z);
}
function wo(e, t) {
  return ei(e.x * t, e.y * t, e.z * t);
}
function zl(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function ed(e, t) {
  return ei(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function So(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ei(e.x / t, e.y / t, e.z / t);
}
function Br(e, t) {
  const n = e * Zr, i = t * Zr, a = Math.cos(i);
  return ei(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Uc(e, t, n = 0) {
  const i = Br(e, t), a = ei(0, 1, 0);
  let l = ed(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = ei(1, 0, 0)), l = So(l);
  let u = So(ed(i, l));
  const f = n * Zr, p = Math.cos(f), b = Math.sin(f), _ = Qf(wo(l, p), wo(u, b)), x = Qf(wo(l, -b), wo(u, p));
  return { fwd: i, right: So(_), up: So(x) };
}
function _v(e, t = "#00ff00") {
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
function xv(e) {
  var n;
  const t = e == null ? void 0 : e.__panoLiveStateOverride;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Ra(e, "state_json")) == null ? void 0 : n.value) || "");
}
function Bc(e) {
  var f, p;
  const t = xv(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((f = Ra(e, "bg_color")) == null ? void 0 : f.value) || "#1a1a1e"), a = Number(((p = Ra(e, "coverage")) == null ? void 0 : p.value) || 360) === 180 ? 180 : 360, l = e.__panoStateCache;
  if (l && l.source === t && l.liveVersion === n && l.bg === i && l.coverage === a)
    return l.parsed;
  const u = _v(t, i);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: u }, u;
}
function Ra(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function td(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function tm(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function wv(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function nm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function rm(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && n != null && (i = wv(e == null ? void 0 : e.graph, n)), i;
}
function Sv(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Gc(e, t = []) {
  const n = Sv(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function nd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function fs(e, t) {
  const n = nd(e), i = nd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Mv(e, t = ["erp_image", "bg_erp"]) {
  var p;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = Gc(e, t).map((b) => n.findIndex((_) => String((_ == null ? void 0 : _.name) || "") === String(b))).filter((b) => b >= 0), l = n.map((b, _) => ({ input: b, idx: _ })).filter(({ input: b }) => String((b == null ? void 0 : b.type) || "").toUpperCase() === "IMAGE").map(({ idx: b }) => b), u = [.../* @__PURE__ */ new Set([...a, ...l])], f = [];
  for (const b of u) {
    const _ = rm(e, b);
    if ((_ == null ? void 0 : _.id) != null) {
      f.push(String(_.id));
      continue;
    }
    const x = (p = n[b]) == null ? void 0 : p.link;
    if (x == null) continue;
    const S = tm(e == null ? void 0 : e.graph, x), { originId: A } = nm(S);
    A != null && f.push(String(A));
  }
  return [...new Set(f)];
}
const ds = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = on) != null && e.addEventListener) || (this.listener = (t) => {
      const n = (t == null ? void 0 : t.detail) || {}, i = String((n == null ? void 0 : n.display_node) ?? (n == null ? void 0 : n.node) ?? "").trim();
      [...this.nodes].forEach((l) => {
        var b, _, x, S, A;
        if (!l) return;
        const u = fs(i, l == null ? void 0 : l.id);
        Mv(l, ["erp_image", "bg_erp"]).some((v) => fs(i, v)), !(String(l.__panoPreviewMode || "") === "cutout" && !u) && (fc(l), (_ = (b = l.__panoDomPreview) == null ? void 0 : b.requestDraw) == null || _.call(b), (x = l.setDirtyCanvas) == null || x.call(l, !0, !0), (A = (S = l.graph) == null ? void 0 : S.setDirtyCanvas) == null || A.call(S, !0, !0), String(l.__panoPreviewMode || ""), String(l.__panoPreviewMode || ""), void 0);
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
function hs(e) {
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
function Nv(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function kv(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function Pv(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Av(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Nv(t)) return [t];
  const { filename: n, subfolder: i } = kv(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => hs({
    filename: n,
    subfolder: i,
    type: l
  }));
  return Pv([...a, t]);
}
function Cv(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? hs({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function rd(e) {
  const t = mt == null ? void 0 : mt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (fs(l, a)) return t.get(l);
  } else {
    const l = Object.keys(t);
    for (const u of l)
      if (fs(u, a)) return t[u];
  }
  return null;
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
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return hs({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = fr(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : hs(e);
}
function Iv(e) {
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
function Tv(e, t) {
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
function Ev(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (l) => {
    Array.isArray(l) && l.forEach((u) => t.push(u));
  }, a = (l, u = 0) => {
    !l || u > 3 || n.has(l) || typeof l == "object" && (n.add(l), i(l.images), a(l.output, u + 1), a(l.ui, u + 1), a(l.data, u + 1), a(l.result, u + 1));
  };
  return a(e, 0), t;
}
function Dv(e, t) {
  try {
    const n = Ev(t);
    let i = "";
    for (const a of n)
      if (i = fr(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), Tv(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Ov(e, t = []) {
  var b, _;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Gc(e, t).map((x) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(x))).filter((x) => x >= 0), l = n.map((x, S) => ({ input: x, idx: S })).filter(({ input: x }) => String((x == null ? void 0 : x.type) || "").toUpperCase() === "IMAGE").map(({ idx: x }) => x), u = [.../* @__PURE__ */ new Set([...a, ...l])];
  for (const x of u) {
    const S = n[x], A = S == null ? void 0 : S.link;
    if (A == null) continue;
    const v = tm(e.graph, A), { originId: R, originSlot: H } = nm(v);
    if (R == null) continue;
    const j = rm(e, x, R);
    if (!j) continue;
    const P = Number(H || 0), D = rd((j == null ? void 0 : j.id) ?? R), E = Array.isArray(D == null ? void 0 : D.images) ? D.images : [];
    if (E.length) {
      const Z = [];
      P >= 0 && P < E.length && Z.push(E[P]), Z.push(...E);
      for (const fe of Z) {
        const U = fr(fe);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "nodeOutputs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    let F = [];
    try {
      F = typeof (mt == null ? void 0 : mt.getNodeImageUrls) == "function" ? mt.getNodeImageUrls(j) || [] : [];
    } catch {
      F = [];
    }
    if (Array.isArray(F) && F.length) {
      const Z = [];
      P >= 0 && P < F.length && Z.push(F[P]), Z.push(...F);
      for (const fe of Z) {
        const U = fr(fe);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const Y = Array.isArray(j == null ? void 0 : j.imgs) ? j.imgs : [];
    if (Y.length) {
      const Z = [];
      P >= 0 && P < Y.length && Z.push(Y[P]), Z.push(...Y);
      for (const fe of Z) {
        const U = fr(fe);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const L = (b = j == null ? void 0 : j.widgets) == null ? void 0 : b.find((Z) => String((Z == null ? void 0 : Z.name) || "").toLowerCase() === "image");
    if (L) {
      let Z = fr(L.value);
      if (Z && !Z.includes("/") && !Z.includes(":") && (j.comfyClass === "LoadImage" || j.type === "LoadImage") && (Z = on.apiURL(`/view?filename=${encodeURIComponent(Z)}&type=input&subfolder=`)), Z)
        return String((S == null ? void 0 : S.name) || ""), { src: Z, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const f = rd(e == null ? void 0 : e.id), p = [];
  if (Array.isArray(f == null ? void 0 : f.pano_input_images) && p.push(...f.pano_input_images), Array.isArray((_ = f == null ? void 0 : f.ui) == null ? void 0 : _.pano_input_images) && p.push(...f.ui.pano_input_images), p.length > 0)
    for (const x of p) {
      const S = fr(x);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Rv(e, t = [], n = {}) {
  const i = Ov(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const l = Av(a);
  if (!l.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const f = t.join("|") || "image", p = e.__panoLinkedInputImageCache.get(f);
  if (p && p.srcRaw === a && p.img) return p.img;
  if (p && p.pendingSrcRaw === a && p.pendingImg)
    return u && p.img && (p.img.complete || p.img.naturalWidth || p.img.width) ? p.img : p.pendingImg;
  const b = new Image(), _ = p || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  _.pendingSrcRaw = a, _.pendingResolvedSrc = "", _.pendingImg = b, e.__panoLinkedInputImageCache.set(f, _);
  let x = -1;
  const S = () => {
    var v, R, H, j;
    if (x += 1, x >= l.length) {
      if (((R = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : R.call(v, f)) === _ && _.pendingImg === b && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
        try {
          (j = (H = e.__panoLinkedInputImageCache) == null ? void 0 : H.delete) == null || j.call(H, f);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), l.length;
      return;
    }
    const A = l[x];
    _.pendingResolvedSrc = A, b.src = A;
  };
  return b.onload = () => {
    var A, v, R;
    ((v = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.get) == null ? void 0 : v.call(A, f)) === _ && _.pendingImg === b && (_.srcRaw = a, _.resolvedSrc = String(_.pendingResolvedSrc || b.src || ""), _.img = b, _.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null), String(_.pendingResolvedSrc || _.resolvedSrc || b.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0);
  }, b.onerror = (A) => {
    var v, R, H, j;
    if (x + 1 < l.length) {
      S();
      return;
    }
    if (((R = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : R.call(v, f)) === _ && _.pendingImg === b && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
      try {
        (j = (H = e.__panoLinkedInputImageCache) == null ? void 0 : H.delete) == null || j.call(H, f);
      } catch {
      }
    String(_.pendingResolvedSrc || _.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((A == null ? void 0 : A.type) || "error");
  }, S(), u && _.img && (_.img.complete || _.img.naturalWidth || _.img.width) ? _.img : b;
}
function uc(e, t = [], n = null, i = {}) {
  const a = Rv(e, t, i);
  return a ? (typeof n == "function" && (a.complete && (a.naturalWidth || a.width) || a.addEventListener("load", () => n(), { once: !0 })), a) : null;
}
function fc(e) {
  var t, n;
  if (e) {
    try {
      (n = (t = e.__panoLinkedInputImageCache) == null ? void 0 : t.clear) == null || n.call(t);
    } catch {
    }
    e.__panoOwnOutputImageCache = null, e.__panoOwnOutputVideoCache = null, e.__panoWrappedErpCache = null;
  }
}
function im(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Vr(e, t, n = "") {
  const i = im(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < pv ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function dc(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), l = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), u = n / a, f = i / l, p = Math.min(u, f);
  return Number.isFinite(p) && p > 0 ? p : 1;
}
function Fv(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), l = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (l <= 0 || u <= 0) return;
  const f = Math.max(14, Math.round(14 * n)), p = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), l * 0.44)), b = Math.max(Math.round(34 * n), f + Math.round(14 * n)), _ = i + (l - p) * 0.5, x = a + (u - b) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(_, x, p, b, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${f}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", _ + p * 0.5, x + b * 0.5 + 0.5), e.restore();
}
function Mo(e, t, n = "Open editor and add frame") {
  var a;
  const i = (a = e == null ? void 0 : e.__panoDomPreview) == null ? void 0 : a.emptyHintEl;
  i && (i.textContent = String(n || "Open editor and add frame"), i.style.display = t ? "flex" : "none");
}
function Lv(e) {
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
function am(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), l = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), u = Number(t) > 0 ? Number(t) : 1;
  let f = a, p = a / u;
  return p > l && (p = l, f = l * u), {
    x: n + (a - f) * 0.5,
    y: i + (l - p) * 0.5,
    w: f,
    h: p
  };
}
function zv(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || l <= 1) return !1;
  const u = am(n, a / l);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, u.x, u.y, u.w, u.h);
  const f = Math.max(0, Math.min(1, Number(i) || 0));
  return f > 0 && (e.fillStyle = `rgba(0,0,0,${f})`, e.fillRect(u.x, u.y, u.w, u.h)), e.restore(), !0;
}
function $v(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((l) => {
    var f;
    if (l === t || !l || l.hidden || l.type === "hidden") return;
    let u = 22;
    try {
      const p = typeof l.computeSize == "function" ? l.computeSize(((f = Qr(e)) == null ? void 0 : f[0]) || 0) : null;
      Array.isArray(p) && Number.isFinite(Number(p[1])) && (u = Number(p[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function Yo(e) {
  const n = $v(e) + 2, i = 8, a = Qr(e), l = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || l < 80 ? null : { x: i, y: n, w: l, h: u };
}
function om(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Cv(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const l = window.__panoSharedImageCache.get(a);
  if (l != null && l.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: l.img }), l.img;
  const u = e.__panoPreviewImageCache.get(i);
  if (u && u.src === a) return u.img;
  const f = new Image();
  return f.src = a, f.onload = () => {
    var p, b, _;
    (b = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || b.call(p), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: f }), e.__panoPreviewImageCache.set(i, { src: a, img: f }), f;
}
function jv(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((l, u) => Number((l == null ? void 0 : l.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function hc(e, t) {
  return Ds(t, {
    selectedId: null,
    hoveredId: null
  });
}
function mc(e, t, n) {
  return qh(t, (i, a) => om(e, i, a), { scene: n });
}
function Vv(e, t) {
  var u;
  const n = cm(e, t);
  if (!n) return [];
  const i = um(t), a = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], l = new Map(
    a.filter((f) => f && typeof f == "object").map((f) => [String((f == null ? void 0 : f.actionGroupId) || (f == null ? void 0 : f.id) || "").trim(), Number((f == null ? void 0 : f.z_index) || 0)])
  );
  return i.map((f) => {
    const p = n.getGroupDisplayCanvas(f);
    return p ? {
      id: `paint_group:${f}`,
      source: p,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${f}`,
      zIndex: Number(l.get(f) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function Hv(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, l = (e.y + t.y + n.y) / 3, u = (f) => {
    const p = f.x - a, b = f.y - l, _ = Math.hypot(p, b) || 1;
    return { x: f.x + p / _ * i, y: f.y + b / _ * i };
  };
  return [u(e), u(t), u(n)];
}
function id(e, t, n, i, a, l, u, f) {
  const p = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(p) < 1e-6) return;
  const [b, _, x] = Hv(l, u, f, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(b.x, b.y), e.lineTo(_.x, _.y), e.lineTo(x.x, x.y), e.closePath(), e.clip();
  const S = (l.x * (i.y - a.y) + u.x * (a.y - n.y) + f.x * (n.y - i.y)) / p, A = (l.x * (a.x - i.x) + u.x * (n.x - a.x) + f.x * (i.x - n.x)) / p, v = (l.x * (i.x * a.y - a.x * i.y) + u.x * (a.x * n.y - n.x * a.y) + f.x * (n.x * i.y - i.x * n.y)) / p, R = (l.y * (i.y - a.y) + u.y * (a.y - n.y) + f.y * (n.y - i.y)) / p, H = (l.y * (a.x - i.x) + u.y * (n.x - a.x) + f.y * (i.x - n.x)) / p, j = (l.y * (i.x * a.y - a.x * i.y) + u.y * (a.x * n.y - n.x * a.y) + f.y * (n.x * i.y - i.x * n.y)) / p;
  e.transform(S, R, A, H, v, j), e.drawImage(t, 0, 0), e.restore();
}
function sm(e, t, n, i) {
  const a = zl(e, t.right), l = zl(e, t.up), u = zl(e, t.fwd);
  if (u <= 1e-4) return null;
  const f = l / u / i, p = a / u / i;
  return { x: n.x + n.w * 0.5 + p * n.h * 0.5, y: n.y + n.h * 0.5 - f * n.h * 0.5 };
}
function lm(e, t, n, i, a, l, u, f = 12, p = 9) {
  var we;
  const b = K(Number(u.hFOV_deg || 30), 1, 179) * Zr, _ = K(Number(u.vFOV_deg || 30), 1, 179) * Zr, x = Math.tan(b * 0.5), S = Math.tan(_ * 0.5), A = u.crop || {}, v = K(Number(A.x0 ?? 0), 0, 1), R = K(Number(A.y0 ?? 0), 0, 1), H = K(Number(A.x1 ?? 1), 0, 1), j = K(Number(A.y1 ?? 1), 0, 1), P = Math.max(1e-4, H - v), D = Math.max(1e-4, j - R), E = Uc(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), F = [], Y = [], L = [], Z = [];
  for (let re = 0; re <= p; re++) {
    const pe = re / p, J = (1 - (R + pe * D) * 2) * S;
    for (let _e = 0; _e <= f; _e++) {
      const Re = _e / f, Be = ((v + Re * P) * 2 - 1) * x, wt = E.fwd.x + E.right.x * Be + E.up.x * J, Nt = E.fwd.y + E.right.y * Be + E.up.y * J, Ot = E.fwd.z + E.right.z * Be + E.up.z * J, pt = Math.hypot(wt, Nt, Ot) || 1e-8, Zt = wt / pt, qe = Nt / pt, Qt = Ot / pt, en = Zt * i.right.x + qe * i.right.y + Qt * i.right.z, _n = Zt * i.up.x + qe * i.up.y + Qt * i.up.z, O = Zt * i.fwd.x + qe * i.fwd.y + Qt * i.fwd.z;
      if (O <= 1e-4)
        F[re] || (F[re] = []), Y[re] || (Y[re] = []), F[re][_e] = null, Y[re][_e] = null;
      else {
        const V = _n / O / a, te = en / O / a;
        F[re] || (F[re] = []), Y[re] || (Y[re] = []), F[re][_e] = n.x + n.w * 0.5 + te * n.h * 0.5, Y[re][_e] = n.y + n.h * 0.5 - V * n.h * 0.5;
      }
      L[re] || (L[re] = []), Z[re] || (Z[re] = []), L[re][_e] = Re, Z[re][_e] = pe;
    }
  }
  const fe = (we = l.assets) == null ? void 0 : we[u.asset_id], U = om(t, u.asset_id, fe);
  if (!U || !U.complete || !U.naturalWidth) return;
  const be = Number(U.naturalWidth || U.width || 1), xe = Number(U.naturalHeight || U.height || 1), C = f < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = C;
  for (let re = 0; re < p; re++)
    for (let pe = 0; pe < f; pe++) {
      const z = F[re][pe], J = Y[re][pe], _e = F[re][pe + 1], Re = Y[re][pe + 1], Fe = F[re + 1][pe], Be = Y[re + 1][pe], wt = F[re + 1][pe + 1], Nt = Y[re + 1][pe + 1];
      if (z === null || _e === null || Fe === null || wt === null) continue;
      const Ot = L[re][pe] * be, pt = Z[re][pe] * xe, Zt = L[re][pe + 1] * be, qe = Z[re][pe + 1] * xe, Qt = L[re + 1][pe] * be, en = Z[re + 1][pe] * xe, _n = L[re + 1][pe + 1] * be, O = Z[re + 1][pe + 1] * xe;
      id(e, U, { x: Ot, y: pt }, { x: Zt, y: qe }, { x: _n, y: O }, { x: z, y: J }, { x: _e, y: Re }, { x: wt, y: Nt }), id(e, U, { x: Ot, y: pt }, { x: _n, y: O }, { x: Qt, y: en }, { x: z, y: J }, { x: wt, y: Nt }, { x: Fe, y: Be });
    }
}
function Uv(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = Bc(e), a = Yo(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const l = Uc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(e.__panoPreviewView.fov || 100) * Zr * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const f = uc(
    e,
    Gc(e, ["erp_image", "bg_erp"]),
    () => {
      var E, F, Y;
      (F = (E = e.__panoDomPreview) == null ? void 0 : E.requestDraw) == null || F.call(E), (Y = e.setDirtyCanvas) == null || Y.call(e, !0, !1);
    }
  ), p = !!(f && f.complete && (f.naturalWidth || f.width)), b = hm(e), _ = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, x = b || _, S = us, A = hc(e, i), v = mc(e, i, A), R = Hc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
  let H = !1;
  if (e.__panoRuntimeCore || (e.__panoRuntimeCore = Jr()), p) {
    const E = Ts({
      stateRevision: [
        "runtime_panorama_scene",
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0),
        Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
        Array.isArray(v) ? v.map((L) => `${String((L == null ? void 0 : L.assetId) || "")}:${String((L == null ? void 0 : L.revision) || "")}`).join(",") : ""
      ].join("|"),
      backgroundSource: f,
      backgroundRevision: [
        String(f.currentSrc || f.src || ""),
        Number(f.naturalWidth || f.width || 0),
        Number(f.naturalHeight || f.height || 0)
      ].join("|"),
      coverageDeg: Number((i == null ? void 0 : i.coverage) || 360) === 180 ? 180 : 360,
      scene: A,
      textures: v,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), Y = e.__panoRuntimeCore.syncState(E) ? e.__panoRuntimeCore.renderToTarget("runtime_preview", R, {
      width: a.w,
      height: a.h,
      dpr: window.devicePixelRatio || 1
    }) : null;
    H = !!Y, Y && t.drawImage(Y, a.x, a.y, a.w, a.h);
  }
  const j = x ? 8 : 12, P = x ? 6 : 9, D = jv(e, i);
  if (!p || D.length === 0) {
    const E = dc(t == null ? void 0 : t.canvas, a);
    fm(t, a, l, u, E);
  }
  !H && p && ms(e, t, a, l, u, f, S), !H && D.length > 0 && D.forEach((E) => lm(t, e, a, l, u, i, E, j, P)), t.restore();
}
function Bv(e, t, n, i, a = "preview_scene", l = "") {
  const u = String(
    l || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return Ts({
    stateRevision: [
      a,
      u,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((f) => `${String((f == null ? void 0 : f.assetId) || "")}:${String((f == null ? void 0 : f.revision) || "")}`).join(",") : ""
    ].join("|"),
    backgroundSource: e,
    backgroundRevision: u,
    coverageDeg: Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
    scene: n,
    textures: i,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
}
function qo(e, t, n, i) {
  var l, u, f, p, b, _;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
    };
  if (i && typeof i.convertEventToCanvasOffset == "function" && t)
    try {
      const x = i.convertEventToCanvasOffset(t);
      if (Array.isArray(x) && x.length >= 2)
        return {
          x: Number(x[0]) - Number(((f = e == null ? void 0 : e.pos) == null ? void 0 : f[0]) || 0),
          y: Number(x[1]) - Number(((p = e == null ? void 0 : e.pos) == null ? void 0 : p[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((b = e == null ? void 0 : e.pos) == null ? void 0 : b[0]) || 0),
      y: Number(t.canvasY) - Number(((_ = e == null ? void 0 : e.pos) == null ? void 0 : _[1]) || 0)
    };
  const a = Kv(e, t, i);
  return a || null;
}
function Gv(e, t) {
  var x, S;
  const n = Number(e == null ? void 0 : e.clientX), i = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(n) || !Number.isFinite(i)) return null;
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, l = (x = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : x.call(a), u = (t == null ? void 0 : t.ds) || ((S = mt == null ? void 0 : mt.canvas) == null ? void 0 : S.ds);
  if (!l || !u) return null;
  const f = Number(u.scale || 1);
  if (!Number.isFinite(f) || Math.abs(f) < 1e-6) return null;
  const p = Array.isArray(u.offset) ? u.offset : [0, 0], b = (n - Number(l.left || 0)) / f - Number(p[0] || 0), _ = (i - Number(l.top || 0)) / f - Number(p[1] || 0);
  return !Number.isFinite(b) || !Number.isFinite(_) ? null : { x: b, y: _ };
}
function Kv(e, t, n) {
  var a, l;
  const i = Gv(t, n || (mt == null ? void 0 : mt.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
  } : null;
}
function No(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), Qr(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", Jh(e, 320, 180), Ti(e);
  const t = e.onDrawForeground, n = e.onResize;
  e.onDrawForeground = function() {
    var S, A;
    const x = t ? t.apply(this, arguments) : void 0;
    try {
      const v = arguments[0];
      v && !((S = this.flags) != null && S.collapsed) && (i.stepInertia(performance.now()) && ((A = this.setDirtyCanvas) == null || A.call(this, !0, !1)), Uv(this, v, i));
    } catch {
    }
    return x;
  }, e.onResize = function() {
    var S;
    const x = n ? n.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ps(this, 150), (S = this.setDirtyCanvas) == null || S.call(this, !0, !0), mm(this, 220, null), x;
  };
  const i = Es({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (x) => {
      e.__panoPreviewView = x;
    },
    getViewportSize: () => {
      const x = Yo(e);
      return {
        w: Math.max(1, Number((x == null ? void 0 : x.w) || 0)),
        h: Math.max(1, Number((x == null ? void 0 : x.h) || 0))
      };
    },
    onInteraction: () => {
      var x;
      dm(e), (x = e.setDirtyCanvas) == null || x.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(x, S, A) {
    var v;
    try {
      if (!((v = this.flags) != null && v.collapsed)) {
        const R = qo(this, x, S, A) || { x: 0, y: 0 }, H = Qr(this), j = Number((H == null ? void 0 : H[0]) || 0), P = Number((H == null ? void 0 : H[1]) || 0);
        if (R.x >= j - 20 && R.y >= P - 20)
          return a ? a.apply(this, arguments) : void 0;
        const E = Yo(this);
        if (td(R.x, R.y, E))
          return (x == null ? void 0 : x.button) === 0 && i.startDrag(R.x, R.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const l = e.onMouseMove;
  e.onMouseMove = function(x, S, A) {
    try {
      const v = qo(this, x, S, A);
      if (i.state.drag.active) {
        if (typeof (x == null ? void 0 : x.buttons) == "number" && (x.buttons & 1) === 0)
          return i.endDrag(), !0;
        const R = v || i.state.drag;
        return i.moveDrag(R.x, R.y, "pano"), !0;
      }
    } catch {
    }
    return l ? l.apply(this, arguments) : void 0;
  };
  const u = e.onMouseUp;
  e.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
  };
  const f = e.onMouseLeave;
  e.onMouseLeave = function() {
    const x = f ? f.apply(this, arguments) : void 0;
    return i.state.drag.active && i.endDrag(), x;
  };
  const p = e.onMouseWheel;
  e.onMouseWheel = function(x, S, A) {
    var v, R;
    try {
      if ((v = this.flags) != null && v.collapsed) return p ? p.apply(this, arguments) : void 0;
      const H = qo(this, x, S, A), j = Yo(this);
      if (!H || !td(H.x, H.y, j)) return p ? p.apply(this, arguments) : void 0;
      const P = Number((x == null ? void 0 : x.deltaY) ?? (x == null ? void 0 : x.wheelDeltaY) ?? (typeof S == "number" ? S : 0));
      return i.applyWheel(Math.sign(P)) && ((R = this.setDirtyCanvas) == null || R.call(this, !0, !1)), typeof (x == null ? void 0 : x.preventDefault) == "function" && x.preventDefault(), typeof (x == null ? void 0 : x.stopPropagation) == "function" && x.stopPropagation(), !0;
    } catch {
      return p ? p.apply(this, arguments) : void 0;
    }
  };
  const b = e.onRemoved, _ = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = l, e.onMouseUp = u, e.onMouseLeave = f, e.onMouseWheel = p, e.onRemoved = b, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
  };
  e.__panoLegacyRestore = _, e.onRemoved = function() {
    return _(), wa.unregister(this), ds.unregister(this), b ? b.apply(this, arguments) : void 0;
  };
}
function Wv(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: n,
    height: Math.max(1, Math.round(n * 0.5))
  };
}
function cm(e, t) {
  var b, _, x, S, A, v, R, H, j, P, D, E;
  const n = (_ = (b = t == null ? void 0 : t.painting) == null ? void 0 : b.paint) == null ? void 0 : _.strokes, i = (S = (x = t == null ? void 0 : t.painting) == null ? void 0 : x.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, l = Array.isArray(i) && i.length > 0;
  if (!a && !l) return null;
  const u = Wv(e, t), f = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== f) && (e.__panoPreviewPaintEngine = sc(u), e.__panoPreviewPaintDescriptorKey = f, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const p = {
    paint: n || null,
    mask: i || null,
    groups: ((A = t == null ? void 0 : t.painting) == null ? void 0 : A.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((R = e.__panoPreviewPaintRevision) == null ? void 0 : R.paint) !== p.paint || ((H = e.__panoPreviewPaintRevision) == null ? void 0 : H.mask) !== p.mask || ((j = e.__panoPreviewPaintRevision) == null ? void 0 : j.groups) !== p.groups || ((P = e.__panoPreviewPaintRevision) == null ? void 0 : P.rasterObjects) !== p.rasterObjects) && (e.__panoPreviewPaintRevision = p, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    l ? "m1" : "m0",
    String(Array.isArray((D = t == null ? void 0 : t.painting) == null ? void 0 : D.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function um(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function Yv(e, t) {
  const n = cm(e, t);
  if (!n) return null;
  const i = um(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function qv(e, t, n = null) {
  var f;
  const i = (f = t == null ? void 0 : t.painting_layer) == null ? void 0 : f.paint, a = fr(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const l = e.__panoPaintingLayerImageCache;
  if (l.img && l.src === a) return l.img;
  const u = new Image();
  return u.onload = () => {
    var p;
    n == null || n(), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0);
  }, u.onerror = () => {
    var p;
    ((p = e.__panoPaintingLayerImageCache) == null ? void 0 : p.img) === u && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, e.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function ad(e, t) {
  var l, u;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((l = t == null ? void 0 : t.painting) == null ? void 0 : l.raster_objects) && t.painting.raster_objects.length > 0) {
    const f = qv(e, t, () => {
      var p, b;
      return (b = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null ? void 0 : b.call(p);
    });
    if (f && (f.complete || f.naturalWidth || f.width))
      return {
        source: f,
        revision: String(((u = t == null ? void 0 : t.painting_layer) == null ? void 0 : u.revision) || f.currentSrc || f.src || "")
      };
  }
  const a = Yv(e, t);
  return a ? {
    source: a,
    revision: String(e.__panoPreviewPaintRevisionKey || "")
  } : null;
}
function Xv(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Jv(e, t, n, i) {
  let a = (e == null ? void 0 : e[t]) || null;
  return (!a || a.width !== n || a.height !== i) && (a = document.createElement("canvas"), a.width = n, a.height = i, e[t] = a), a;
}
function Zv(e, t, n, i, a, l) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const u = Xv(n);
  if (u.width === i && u.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const p = Jv(e, l, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!p) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    p.clearRect(0, 0, u.width, u.height), p.drawImage(n, 0, 0, u.width, u.height);
    const b = p.getImageData(0, 0, u.width, u.height).data, _ = t.getImageData(0, 0, i, a), x = _.data, S = Math.max(0, u.width - 1), A = Math.max(0, u.height - 1);
    for (let v = 0; v < a; v += 1) {
      const R = (v + 0.5) * u.height / a - 0.5, H = K(Math.floor(R), 0, A), j = K(H + 1, 0, A), P = K(R - H, 0, 1);
      for (let D = 0; D < i; D += 1) {
        const E = (D + 0.5) * u.width / i - 0.5, F = K(Math.floor(E), 0, S), Y = K(F + 1, 0, S), L = K(E - F, 0, 1);
        let Z = 0, fe = 0, U = 0, be = 0;
        const xe = (re, pe, z) => {
          const J = (pe * u.width + re) * 4, _e = (b[J + 3] || 0) / 255;
          Z += _e * z, fe += (b[J] || 0) / 255 * _e * z, U += (b[J + 1] || 0) / 255 * _e * z, be += (b[J + 2] || 0) / 255 * _e * z;
        };
        if (xe(F, H, (1 - L) * (1 - P)), xe(Y, H, L * (1 - P)), xe(F, j, (1 - L) * P), xe(Y, j, L * P), Z <= 1e-6) continue;
        const C = (v * i + D) * 4, we = 1 - Z;
        x[C] = Math.round(K((fe + x[C] / 255 * we) * 255, 0, 255)), x[C + 1] = Math.round(K((U + x[C + 1] / 255 * we) * 255, 0, 255)), x[C + 2] = Math.round(K((be + x[C + 2] / 255 * we) * 255, 0, 255)), x[C + 3] = 255;
      }
    }
    t.putImageData(_, 0, 0);
  } catch {
    t.drawImage(n, 0, 0, i, a);
  }
}
function od(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), l = Math.max(1, Number(t.naturalHeight || t.height || 0)), f = `${String(t.currentSrc || t.src || "")}|${a}x${l}|${i}`;
  let p = e.__panoPreviewBgPaint;
  if (!p || p.__revKey !== f || p.width !== a || p.height !== l) {
    (!p || p.width !== a || p.height !== l) && (p = document.createElement("canvas"), p.width = a, p.height = l, e.__panoPreviewBgPaint = p);
    const b = p.getContext("2d");
    b.clearRect(0, 0, a, l), b.drawImage(t, 0, 0, a, l), Zv(e, b, n, a, l, "__panoPreviewOverlayScratch"), p.__revKey = f;
  }
  return p;
}
function Qv(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  im(e, a);
  const l = Bc(e), u = t.parentElement, f = 1, p = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), b = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), _ = Math.max(64, Math.round(p * f)), x = Math.max(64, Math.round(b * f)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const A = Lv(l), v = uc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var Z, fe;
          return (fe = (Z = e.__panoDomPreview) == null ? void 0 : Z.requestDraw) == null ? void 0 : fe.call(Z);
        },
        { preserveReadyWhilePending: !1 }
      ), R = !!(v && v.complete && (v.naturalWidth || v.width));
      (t.width !== _ || t.height !== x) && (t.width = _, t.height = x);
      const H = { x: 0, y: 0, w: _, h: x }, j = R ? K(Number((v.naturalWidth || v.width) / Math.max(1, Number(v.naturalHeight || v.height || 1))), 0.05, 20) : 1, P = A ? Ar(A) : null, D = K(Number((P == null ? void 0 : P.aspect) || j || 1), 0.05, 20), E = am(H, D);
      dc(t, H), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, _, x);
      let F = "none", Y = "Open editor and add frame", L = "";
      if (L = String((v == null ? void 0 : v.src) || ""), A)
        if (v && !R)
          F = "loading";
        else if (R) {
          const Z = hc(e, l), fe = mc(e, l, Z), U = Vv(e, l), be = ha({
            stateRevision: [
              "runtime_cutout_scene",
              String(v.currentSrc || v.src || ""),
              Number(v.naturalWidth || v.width || 0),
              Number(v.naturalHeight || v.height || 0),
              Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
              String((A == null ? void 0 : A.id) || ""),
              Array.isArray(fe) ? fe.map((C) => `${String((C == null ? void 0 : C.assetId) || "")}:${String((C == null ? void 0 : C.revision) || "")}`).join(",") : "",
              Array.isArray(U) ? U.map((C) => `${String((C == null ? void 0 : C.id) || "")}:${String((C == null ? void 0 : C.revision) || "")}:${Number((C == null ? void 0 : C.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: v,
            backgroundRevision: String(v.currentSrc || v.src || ""),
            coverageDeg: Number((l == null ? void 0 : l.coverage) || 360) === 180 ? 180 : 360,
            scene: Z,
            textures: fe,
            rasterEntries: U,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = Jr()), e.__panoRuntimeCore.syncState(be), e.__panoRuntimeCore.renderToContext(
            S,
            E,
            Ar(A),
            { width: E.w, height: E.h, dpr: 1 }
          ) || (F = "empty", Y = "Open editor or run node");
        } else
          F = "empty", Y = "Connect ERP image";
      else {
        if (R) {
          const Z = ad(e, l), fe = Z != null && Z.source ? od(e, v, Z.source, Z.revision || "") : v;
          zv(S, fe, H, 0.44);
        }
        F = "empty", Y = "Open editor and add frame";
      }
      F === "loading" ? (Mo(e, !1), Vr(e, !0, L)) : F === "empty" ? (Mo(e, !0, Y), Vr(e, !1, "")) : (Mo(e, !1), Vr(e, !1, ""));
    } else {
      Mo(e, !1), (t.width !== _ || t.height !== x) && (t.width = _, t.height = x);
      const A = { x: 0, y: 0, w: _, h: x }, v = dc(t, A);
      S.setTransform(1, 0, 0, 1, 0, 0), S.clearRect(0, 0, _, x), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const R = Uc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), H = Math.tan(Number(e.__panoPreviewView.fov || 100) * Zr * 0.5), j = uc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var xe, C;
          return (C = (xe = e.__panoDomPreview) == null ? void 0 : xe.requestDraw) == null ? void 0 : C.call(xe);
        }
      ), P = !!(j && j.complete && (j.naturalWidth || j.width));
      S.fillStyle = "#1a1a1e", S.fillRect(0, 0, _, x);
      const D = hc(e, l), E = mc(e, l, D), F = Hc(e.__panoPreviewView, l == null ? void 0 : l.coverage), Y = ad(e, l), L = (Y == null ? void 0 : Y.source) || null, Z = P && L ? od(e, j, L, (Y == null ? void 0 : Y.revision) || "") : j, fe = Z !== j ? String(Z.__revKey || "") : j ? [
        String(j.currentSrc || j.src || ""),
        Number(j.naturalWidth || j.width || 0),
        Number(j.naturalHeight || j.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = Jr());
      let U = !1;
      if (P) {
        const C = e.__panoDomRuntimeCore.syncState(
          Bv(Z, l, D, E, "runtime_dom_scene", fe)
        ) ? e.__panoDomRuntimeCore.renderToTarget("runtime_preview", F, {
          width: A.w,
          height: A.h,
          dpr: window.devicePixelRatio || 1
        }) : null;
        C && (S.drawImage(C, A.x, A.y, A.w, A.h), U = !0);
      }
      const be = D.stickers;
      if (P && U)
        Vr(e, !1, "");
      else if (P)
        ms(e, S, A, R, H, Z, us), Vr(e, !1, "");
      else if (L)
        ms(e, S, A, R, H, L, us), Vr(e, !!j && !P, String((j == null ? void 0 : j.src) || ""));
      else {
        const xe = !!j && !P;
        Vr(e, xe, String((j == null ? void 0 : j.src) || "")), xe && Fv(S, A, v);
      }
      if ((!P || be.length === 0) && fm(S, A, R, H, v), !U && be.length > 0) {
        const xe = hm(e), C = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, we = xe || C, re = we ? 8 : 12, pe = we ? 6 : 9;
        be.forEach((z) => lm(S, e, A, R, H, l, z, re, pe));
      } else if (!j || !P) {
        const xe = Math.max(14, Math.round(16 * v));
        S.fillStyle = "rgba(212,212,216,0.85)", S.font = `600 ${xe}px Plus Jakarta Sans, Geist, sans-serif`, S.textAlign = "center", S.fillText("Open editor to add stickers", _ * 0.5, x * 0.5 + 24 * v);
      }
    }
}
function ms(e, t, n, i, a, l, u = hv) {
  const f = Bc(e), p = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = Jr());
  const b = Iv(l), _ = Ts({
    stateRevision: [
      "runtime_bg_only",
      b,
      Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: b,
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360,
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
    coverageDeg: Number((f == null ? void 0 : f.coverage) || 360) === 180 ? 180 : 360
  }, {
    width: n.w,
    height: n.h,
    dpr: window.devicePixelRatio || 1,
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  S && t.drawImage(S, n.x, n.y, n.w, n.h);
}
function sd(e, t, n, i, a, l, u = 1) {
  let f = !1;
  e.strokeStyle = l, e.lineWidth = u, e.beginPath();
  for (const p of t) {
    const b = sm(p, n, i, a);
    if (!b) {
      f = !1;
      continue;
    }
    f ? e.lineTo(b.x, b.y) : (e.moveTo(b.x, b.y), f = !0);
  }
  e.stroke();
}
function fm(e, t, n, i, a = 1) {
  e.save();
  const l = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let b = -75; b <= 75; b += 15) {
    const _ = [];
    for (let x = -180; x <= 180; x += 15) _.push(Br(x, b));
    sd(e, _, n, t, i, b === 0 ? u : l, b === 0 ? 1.5 : 1);
  }
  for (let b = -180; b <= 180; b += 45) {
    const _ = [];
    for (let x = -89; x <= 89; x += 15) _.push(Br(b, x));
    sd(e, _, n, t, i, b % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : l, b % 90 === 0 ? 1.2 : 1);
  }
  const f = [
    { name: "Front", dir: Br(0, 0) },
    { name: "Right", dir: Br(90, 0) },
    { name: "Back", dir: Br(180, 0) },
    { name: "Left", dir: Br(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.32)";
  const p = Math.max(9, Math.round(11 * a));
  e.font = `500 ${p}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", f.forEach((b) => {
    const _ = sm(b.dir, n, t, i);
    _ && e.fillText(b.name, _.x, _.y + 20 * a);
  }), e.restore();
}
function e1(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function dm(e) {
  const t = e1(e);
  t.dragging = !1, t.hqFrames = mv;
}
function ps(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function hm(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function t1(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function n1(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), l = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && l >= i.height - n;
}
function Ni(e, t) {
  return n1(e, t) ? !1 : (t1(e), !0);
}
function r1() {
  var n;
  const e = (n = mt == null ? void 0 : mt.canvas) == null ? void 0 : n.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function i1(e) {
  var n;
  if (!e) return;
  const t = (n = mt == null ? void 0 : mt.canvas) == null ? void 0 : n.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function a1(e, t = 360, n = 260) {
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !Xh(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, e.__panoStandaloneBootSized = !0;
  } catch (a) {
    String((a == null ? void 0 : a.message) || a || "unknown");
  }
}
function o1(e, t = 0, n = null, i = 1200) {
  const a = Math.max(0, Number(t || 0));
  e != null && e.__panoBootMinHeightTimer && (clearTimeout(e.__panoBootMinHeightTimer), e.__panoBootMinHeightTimer = null), e.__panoBootMinHeightActive = a > 0, !(a <= 0) && (e.__panoBootMinHeightTimer = setTimeout(() => {
    var l, u;
    e.__panoBootMinHeightTimer = null, (l = e == null ? void 0 : e.__panoDomPreview) != null && l.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function ld(e, t = null, n = 0) {
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
      e.__panoUserResized = !0, ps(e, 150), t == null || t(), mm(e, 180, t);
    }
  };
}
function mm(e, t = 180, n = null) {
  e && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoResizeSettleTimer = setTimeout(() => {
    var i;
    e.__panoResizeSettleTimer = null, n == null || n(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0))));
}
function Ti(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
function s1(e, t = {}) {
  var z;
  const n = t.__allowStandalone === !0, i = yv(e);
  if (i && !n) {
    Zh(e);
    return;
  }
  i && a1(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", ds.register(e);
  const a = e.__panoPreviewMode === "stickers", l = t.__noLegacyFallback === !0, u = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || wa.unregister(e);
  const f = String(t.__panoForcedPath || "").trim(), p = a ? Qh(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: Xr(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (f === "dom" || f === "legacy_draw") && (p.chosenPath = f, p.reason = "controller_target_backend");
  const b = a ? p.chosenPath : "dom", _ = p.signature || Xr(e);
  if (Number(e.__panoRebindGeneration || 0), cc(e), e == null || e.id, e.__panoPreviewMode, p.reason, p.frontendVersionRaw, e.addDOMWidget, Qr(e), e.__panoFrontendSig = _, e.__panoStickersPath = b, a && wa.register(e), a && b === "legacy_draw") {
    if (l) return;
    ji(e, { keepMonitor: !0 }), No(e);
    return;
  }
  if ((z = e.__panoDomPreview) != null && z.widget) return;
  if (e.__panoLegacyPreviewHooked && ji(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !l && No(e);
    return;
  }
  const x = t.noPreview === !0, S = a || x ? 0 : 56, A = document.createElement("div");
  if (bv(), A.className = "pano-node-preview-dom", A.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), x && A.classList.add("pano-node-preview--no-preview"), A.setAttribute("data-capture-wheel", "true"), A.setAttribute("tabindex", "-1"), A.style.cssText = [
    "width:100%",
    x ? "height:auto" : "height:100%",
    "position:relative",
    "display:block",
    "min-height:0",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), x) {
    const J = e.addDOMWidget(lc(), "preview", A, ld(e, null));
    Ti(e), e.__panoDomPreview = { widget: J, root: A, requestDraw: () => {
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
  const H = document.createElement("div");
  H.style.cssText = [
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
  ].join(";"), H.textContent = "Open editor and add frame", v.appendChild(R), v.appendChild(H), A.appendChild(v), Jh(e, 120, 120), Ti(e);
  let j = null;
  try {
    o1(e, S, () => {
      var J, _e;
      return (_e = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : _e.call(J);
    }), j = e.addDOMWidget(
      lc(),
      "preview",
      A,
      ld(e, () => {
        var J, _e;
        return (_e = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : _e.call(J);
      }, S)
    );
  } catch {
    a && No(e);
    return;
  }
  const P = {
    raf: 0,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, D = () => {
    P.needsDraw = !0, P.raf || (P.raf = requestAnimationFrame(Y));
  }, E = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    ps(e, 150), D();
  }) : null;
  E == null || E.observe(v);
  const F = () => {
    if (!a || e.__panoDomProbePending) return;
    e.__panoDomProbePending = !0;
    const J = 3, _e = (Re) => {
      requestAnimationFrame(() => {
        var Be;
        const Fe = !!(A != null && A.isConnected && (v != null && v.isConnected) && (R != null && R.isConnected) && Number(v.clientHeight || 0) > 0 && Number(R.clientHeight || 0) > 0);
        if (!Fe && Re < J) {
          _e(Re + 1);
          return;
        }
        if (e.__panoDomProbePending = !1, e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((R == null ? void 0 : R.clientHeight) || 0), !Fe) {
          if (l) {
            e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((R == null ? void 0 : R.clientHeight) || 0);
            return;
          }
          ji(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", No(e), (Be = e.setDirtyCanvas) == null || Be.call(e, !0, !0);
        }
      });
    };
    _e(1);
  }, Y = (J) => {
    var Re, Fe, Be;
    P.raf = 0;
    const _e = L.stepInertia(J);
    (P.needsDraw || _e) && (P.needsDraw = !1, (Re = e.flags) != null && Re.collapsed || Qv(e, R, null, L), (Fe = e.setDirtyCanvas) == null || Fe.call(e, !0, !1)), (_e || P.needsDraw) && (P.raf = requestAnimationFrame(Y)), gv() && (!e.__panoDebugLastTs || J - e.__panoDebugLastTs > 1200) && (e.__panoDebugLastTs = J, e.__panoPreviewMode, Qr(e), ca(A), ca(v), ca(R), ca(A.parentElement), ca((Be = A.parentElement) == null ? void 0 : Be.parentElement), Number(R.width || 0), Number(R.height || 0), void 0);
  }, L = Es({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (J) => {
      e.__panoPreviewView = J;
    },
    onInteraction: () => {
      D();
    }
  });
  R.addEventListener("pointerdown", (J) => {
    var _e, Re;
    Ni(J, v) && u && J.button === 0 && ((_e = A.focus) == null || _e.call(A), (Re = R.setPointerCapture) == null || Re.call(R, J.pointerId), R.style.cursor = "grabbing", L.startDrag(J.clientX, J.clientY, J.pointerId));
  }), R.addEventListener("pointermove", (J) => {
    !u || !L.state.drag.active || (Ni(J, v), L.moveDrag(J.clientX, J.clientY, "pano"));
  });
  const Z = (J) => {
    var _e;
    !u || !L.state.drag.active || (Ni(J, v), (_e = R.releasePointerCapture) == null || _e.call(R, J.pointerId), R.style.cursor = "grab", L.endDrag(), dm(e), D());
  };
  R.addEventListener("pointerup", Z), R.addEventListener("pointercancel", Z), R.addEventListener("pointerleave", (J) => {
    L.state.drag.active && Z(J);
  });
  const fe = (J) => {
    var Re, Fe, Be;
    if (!Ni(J, v) || !u) return;
    const _e = r1();
    L.applyWheelEvent(J) && D(), (Re = J.preventDefault) == null || Re.call(J), (Fe = J.stopPropagation) == null || Fe.call(J), (Be = J.stopImmediatePropagation) == null || Be.call(J), requestAnimationFrame(() => {
      var wt, Nt;
      i1(_e), (Nt = (wt = mt == null ? void 0 : mt.canvas) == null ? void 0 : wt.setDirty) == null || Nt.call(wt, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((J) => {
    v.addEventListener(J, fe, { passive: !1, capture: !0 }), R.addEventListener(J, fe, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((J) => {
    R.addEventListener(J, (_e) => Ni(_e, v)), v.addEventListener(J, (_e) => Ni(_e, v));
  });
  const U = Ra(e, "state_json");
  if (U && !U.__panoPreviewPatchedCb) {
    U.__panoPreviewPatchedCb = !0;
    const J = U.callback;
    U.callback = (_e) => {
      const Re = J ? J(_e) : void 0;
      return D(), Re;
    };
  }
  const be = Ra(e, "bg_color");
  if (be && !be.__panoPreviewPatchedCb) {
    be.__panoPreviewPatchedCb = !0;
    const J = be.callback;
    be.callback = (_e) => {
      const Re = J ? J(_e) : void 0;
      return D(), Re;
    };
  }
  const xe = e.onRemoved, C = e.onResize, we = e.onExecuted;
  e.onExecuted = function(J) {
    Dv(e, J), fc(e), Ti(e), D();
    const _e = we ? we.apply(this, arguments) : void 0;
    return Ti(e), _e;
  };
  const re = e.onConnectionsChange;
  e.onConnectionsChange = function() {
    return fc(e), Ti(e), D(), re ? re.apply(this, arguments) : void 0;
  }, e.onResize = function() {
    var _e;
    const J = C ? C.apply(this, arguments) : void 0;
    return this.__panoUserResized = !0, ps(this, 150), D(), (_e = this.setDirtyCanvas) == null || _e.call(this, !0, !1), J;
  }, e.onRemoved = function() {
    return pe(), wa.unregister(this), ds.unregister(this), xe ? xe.apply(this, arguments) : void 0;
  };
  const pe = () => {
    var J;
    P.raf && cancelAnimationFrame(P.raf), (J = E == null ? void 0 : E.disconnect) == null || J.call(E), e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.__panoDomPreview = null, e.__panoDomRestore = null, e.onResize = C, e.onExecuted = we, e.onConnectionsChange = re, e.onRemoved = xe;
  };
  e.__panoDomRestore = pe, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "dom", e.__panoDomPreview = { widget: j, root: A, canvas: R, requestDraw: D, state: P, emptyHintEl: H }, F(), D();
}
function cd(e, t = {}) {
  em(e).attach({
    ...t,
    mode: "cutout"
  });
}
const Tr = Math.PI / 180, Fa = 180 / Math.PI;
function ti(e, t, n) {
  return { x: e, y: t, z: n };
}
function ud(e, t) {
  return ti(e.x + t.x, e.y + t.y, e.z + t.z);
}
function ko(e, t) {
  return ti(e.x * t, e.y * t, e.z * t);
}
function fd(e, t) {
  return ti(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function Po(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ti(e.x / t, e.y / t, e.z / t);
}
function l1(e, t) {
  const n = e * Tr, i = t * Tr, a = Math.cos(i);
  return ti(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function c1(e, t, n = 0) {
  const i = l1(e, t), a = ti(0, 1, 0);
  let l = fd(a, i);
  Math.hypot(l.x, l.y, l.z) < 1e-6 && (l = ti(1, 0, 0)), l = Po(l);
  const u = Po(fd(i, l)), f = n * Tr, p = Math.cos(f), b = Math.sin(f), _ = ud(ko(l, p), ko(u, b)), x = ud(ko(l, -b), ko(u, p));
  return { fwd: i, right: Po(_), up: Po(x) };
}
const Ao = 140, u1 = 180, dd = 40, $l = 10;
function hd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function md(e, t) {
  const n = hd(e), i = hd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function pd(e) {
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
function Vi(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Vi(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return pd({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const n of e) {
      const i = Vi(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : pd(e);
}
function pm(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function f1(e) {
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
function pc(e) {
  var a;
  const t = (a = bn) == null ? void 0 : a.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  if (t instanceof Map) {
    for (const l of t.keys())
      if (md(l, n)) return t.get(l);
  } else
    for (const l of Object.keys(t))
      if (md(l, n)) return t[l];
  return null;
}
function d1(e) {
  var i, a;
  const t = pc(e == null ? void 0 : e.id), n = [
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (a = t == null ? void 0 : t.ui) == null ? void 0 : a.images,
    t == null ? void 0 : t.images
  ];
  for (const l of n)
    if (Array.isArray(l))
      for (const u of l) {
        const f = Vi(u);
        if (f && /\.mp4(\?|$)/i.test(f) || f && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return f;
      }
  return "";
}
function h1(e, t = "erp_image") {
  var v, R, H, j, P, D, E, F, Y, L, Z, fe;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let i = null;
  const a = n.find((U) => String((U == null ? void 0 : U.name) || "") === String(t));
  if ((a == null ? void 0 : a.link) != null && (i = a.link), i == null) {
    const U = n.find((be) => String((be == null ? void 0 : be.type) || "").toUpperCase() === "IMAGE" && (be == null ? void 0 : be.link) != null);
    (U == null ? void 0 : U.link) != null && (i = U.link);
  }
  if (i == null) return "";
  const l = ((R = (v = e == null ? void 0 : e.graph) == null ? void 0 : v.links) == null ? void 0 : R[i]) || ((P = (j = (H = bn) == null ? void 0 : H.graph) == null ? void 0 : j.links) == null ? void 0 : P[i]);
  if (!l) return "";
  const u = Number(l.origin_id);
  if (!Number.isFinite(u)) return "";
  const f = (F = (E = (D = bn) == null ? void 0 : D.graph) == null ? void 0 : E.getNodeById) == null ? void 0 : F.call(E, u), p = pc(u), b = pc(e == null ? void 0 : e.id), _ = [
    (Y = b == null ? void 0 : b.ui) == null ? void 0 : Y.pano_input_images,
    b == null ? void 0 : b.pano_input_images,
    p == null ? void 0 : p.images,
    (L = p == null ? void 0 : p.ui) == null ? void 0 : L.pano_input_images,
    p == null ? void 0 : p.pano_input_images
  ];
  for (const U of _)
    if (Array.isArray(U))
      for (const be of U) {
        const xe = Vi(be);
        if (xe) return xe;
      }
  let x = [];
  try {
    x = typeof ((Z = bn) == null ? void 0 : Z.getNodeImageUrls) == "function" ? bn.getNodeImageUrls(f) || [] : [];
  } catch {
    x = [];
  }
  if (Array.isArray(x) && x.length > 0)
    for (const U of x) {
      const be = Vi(U);
      if (be) return be;
    }
  if (f) {
    const U = Array.isArray(f == null ? void 0 : f.imgs) ? f.imgs : [];
    for (const be of U) {
      const xe = Vi(be);
      if (xe) return xe;
    }
  }
  const S = (fe = f == null ? void 0 : f.widgets) == null ? void 0 : fe.find((U) => String((U == null ? void 0 : U.name) || "").toLowerCase() === "image"), A = String((S == null ? void 0 : S.value) || "").trim();
  return A ? on.apiURL(`/view?filename=${encodeURIComponent(A)}&type=input&subfolder=`) : "";
}
function gd(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function bd(e, t, n, i, a, l) {
  var S, A, v;
  if (t.clearRect(0, 0, n, i), t.fillStyle = "#070707", t.fillRect(0, 0, n, i), !pm(l) || n <= 1 || i <= 1) {
    gd(t, n, i);
    return;
  }
  const u = c1(Number(a.yaw || 0), Number(a.pitch || 0), 0), f = Math.tan(Number(a.fov || 100) * Tr * 0.5), p = Number(((v = (A = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : A.call(S, (R) => (R == null ? void 0 : R.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = Jr());
  const b = f1(l), _ = Ts({
    stateRevision: [
      "standalone_preview_scene",
      b,
      p
    ].join("|"),
    backgroundSource: l,
    backgroundRevision: b,
    coverageDeg: p,
    scene: Ds(null, {}),
    textures: [],
    backgroundOpacity: 1,
    showMaskTint: !1
  });
  !!e.__panoStandaloneCore.syncState(_) && (() => {
    const R = e.__panoStandaloneCore.renderToTarget(
      "preview_node",
      dv(a, p),
      { width: n, height: i, dpr: window.devicePixelRatio || 1 }
    );
    return R ? (t.drawImage(R, 0, 0, n, i), !0) : !1;
  })() || (ms(e, t, { x: 0, y: 0, w: n, h: i }, u, f, l, us), gd(t, n, i));
}
function yd(e, t, n) {
  return e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
class m1 {
  constructor(t, n = {}) {
    this.node = t, this.options = n, this.imageInputName = String(n.imageInputName || "erp_image"), this.buttonText = String(n.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.videoPaused = !1, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.controller = Es({
      getView: () => this.view,
      setView: (i) => {
        this.view = {
          yaw: Ft(Number((i == null ? void 0 : i.yaw) || 0)),
          pitch: K(Number((i == null ? void 0 : i.pitch) || 0), -89.9, 89.9),
          fov: K(Number((i == null ? void 0 : i.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var a, l, u, f;
        const i = (l = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : l.call(a);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
          h: Math.max(1, Number((i == null ? void 0 : i.height) || ((f = this.canvas) == null ? void 0 : f.clientHeight) || 0))
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
    const n = ((l = (a = (i = this.node) == null ? void 0 : i.widgets) == null ? void 0 : a.find) == null ? void 0 : l.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...u) => {
      const f = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
      return t.requestDraw(), f;
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
        `min-height:${Ao}px`,
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
          return Ao;
        },
        getHeight() {
          return Ao;
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
            minHeight: Math.max(Ao, Number(l.minHeight || 0)),
            minWidth: Math.max(u1, Number(l.minWidth || 0))
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
      var l, u, f;
      a.button === 0 && ((l = n.focus) == null || l.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (f = a.stopImmediatePropagation) == null || f.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var l;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (l = a.stopImmediatePropagation) == null || l.call(a));
    });
    const i = (a) => {
      var l, u;
      this.controller.state.drag.active && ((l = t.releasePointerCapture) == null || l.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
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
    !(this.img instanceof HTMLVideoElement) || !pm(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
    })) : (this.videoPaused = !0, this.img.pause()), this.requestDraw());
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(n), i;
    }, this.node.onMouseDown = function(n, i) {
      var u;
      const a = t.localPoint(i);
      if (!a) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const l = t.getLegacyPreviewRect();
      return yd(a.x, a.y, l) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - l.x, a.y - l.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, i) {
      var u;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(i);
      if (!a) return !0;
      const l = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - l.x, a.y - l.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, i, a) {
      var b, _, x, S, A, v;
      const l = qo(this, n, i, a), u = t.getLegacyPreviewRect();
      if (!l || !yd(l.x, l.y, u))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      const f = Number((n == null ? void 0 : n.deltaY) ?? (n == null ? void 0 : n.wheelDeltaY) ?? (typeof i == "number" ? i : 0));
      Number(((b = t.view) == null ? void 0 : b.fov) || 100);
      const p = t.controller.applyWheel(Math.sign(f));
      return Number(((_ = t.view) == null ? void 0 : _.fov) || 100), p && ((x = this.setDirtyCanvas) == null || x.call(this, !0, !1)), (S = n == null ? void 0 : n.preventDefault) == null || S.call(n), (A = n == null ? void 0 : n.stopPropagation) == null || A.call(n), (v = n == null ? void 0 : n.stopImmediatePropagation) == null || v.call(n), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var i, a, l, u;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - $l * 2), n = Math.max(60, Number(((u = (l = this.node) == null ? void 0 : l.size) == null ? void 0 : u[1]) || 0) - dd - $l);
    return { x: $l, y: dd, w: t, h: n };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), bd(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, i = Math.max(1, Math.round(t.width * n)), a = Math.max(1, Math.round(t.height * n));
    (this.canvas.width !== i || this.canvas.height !== a) && (this.canvas.width = i, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    var a, l, u;
    const t = d1(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (a = this.mediaCleanup) == null || a.call(this), this.imgSrc = t, this.videoPaused = !1;
      const f = document.createElement("video");
      f.muted = !0, f.loop = !0, f.playsInline = !0, f.crossOrigin = "anonymous";
      const p = () => {
        this.imgSrc === t && (this.img = f, this.videoPaused || f.play().catch(() => {
        }), this.requestDraw());
      }, b = () => this.requestDraw();
      f.addEventListener("loadedmetadata", p), f.addEventListener("canplay", p), f.addEventListener("timeupdate", b), f.addEventListener("play", b), f.addEventListener("pause", b), f.src = t, f.load(), this.mediaCleanup = () => {
        f.pause(), f.removeEventListener("loadedmetadata", p), f.removeEventListener("canplay", p), f.removeEventListener("timeupdate", b), f.removeEventListener("play", b), f.removeEventListener("pause", b);
      };
      return;
    }
    const n = h1(this.node, this.imageInputName);
    if (!n) {
      (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
      return;
    }
    if (n === this.imgSrc && this.img) return;
    (u = this.mediaCleanup) == null || u.call(this), this.mediaCleanup = null, this.imgSrc = n;
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
    this.canvas && this.ctx ? (bd(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (l = (a = this.node).setDirtyCanvas) == null || l.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, i, a, l, u, f, p, b, _, x, S, A;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (l = this.mediaCleanup) == null || l.call(this), this.mediaCleanup = null;
    try {
      (f = (u = this.root) == null ? void 0 : u.remove) == null || f.call(u);
    } catch {
    }
    if (Array.isArray((p = this.node) == null ? void 0 : p.widgets) && this.widget)
      try {
        this.node.widgets = this.node.widgets.filter((v) => v !== this.widget);
      } catch {
      }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((x = (_ = (b = this.node) == null ? void 0 : b.widgets) == null ? void 0 : _.find) == null ? void 0 : x.call(_, (v) => (v == null ? void 0 : v.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), (A = (S = this.node.__panoStandaloneCore) == null ? void 0 : S.dispose) == null || A.call(S), this.node.__panoStandaloneCore = null, this.node.__panoPreviewNodeRuntime = null;
  }
}
function p1(e, t = {}) {
  if (!e || e.__panoPreviewNodeRuntime) return;
  const n = new m1(e, t);
  e.__panoPreviewNodeRuntime = n, n.attach();
}
function g1(e, t, n) {
  if (!(e != null && e.prototype) || typeof n != "function") return;
  const i = `__panoLifecyclePatched_${String(t)}`;
  if (e[i]) return;
  e[i] = !0;
  const a = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const f = a ? a.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return f;
  };
  const l = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const f = l ? l.apply(this, arguments) : void 0;
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
function gm(e) {
  return !!(e != null && e.prototype);
}
function gc(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function b1(e, t = {}) {
  gm(e) || p1(e, {
    ...t,
    onOpen: gc(e, t.onOpen)
  });
}
function y1(e, t = {}) {
  if (!gm(e)) {
    cd(e, {
      ...t,
      onOpen: gc(e, t.onOpen)
    });
    return;
  }
  g1(e, "cutout_preview", (n) => {
    cd(n, {
      ...t,
      onOpen: gc(n, t.onOpen)
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
}, rr = "pen";
function vd(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function v1(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const l = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function f(b) {
    if (i.splice(0, i.length), a = -1, !b || typeof b != "object" || !Array.isArray(b.entries) || (b.entries.forEach((x) => {
      i.push(String(x || ""));
    }), !i.length)) return;
    const _ = Number(b.index);
    Number.isInteger(_) ? _ === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, _)) : a = i.length - 1;
  }
  function p(b) {
    i[a] !== b && (i.splice(a + 1), i.push(b), i.length > l && i.shift(), a = i.length - 1);
  }
  return f(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(b) {
      p(String(b || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const b = a - 1;
      return b < 0 || b >= i.length ? null : (a = b, i[a]);
    },
    redo() {
      const b = a + 1;
      return b < 0 || b >= i.length ? null : (a = b, i[a]);
    },
    get entries() {
      return i.slice();
    },
    get index() {
      return a;
    },
    serialize() {
      const b = i.length, _ = Math.max(0, b - u), x = a >= 0 ? Math.max(0, Math.min(a, _)) : _, S = i.slice(x, x + u), A = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - x));
      return {
        version: 1,
        entries: S,
        index: A
      };
    },
    hydrate: f
  };
}
function it(e, t = null) {
  const n = Number(e);
  return Number.isFinite(n) ? n : t;
}
function _1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function x1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    if (!i || typeof i != "object") continue;
    const a = String(i.actionGroupId || i.id || "").trim();
    if (!a || n.has(a)) continue;
    n.add(a);
    const l = it(i.z_index ?? i.zIndex, t.length);
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
function w1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const n = String(e.frameId ?? "").trim();
    return n ? { kind: "FRAME_LOCAL", frameId: n } : null;
  }
  return null;
}
function S1(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const n = it(e.t, 0), i = it(e.widthScale, null), a = it(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const l = it(e.u, null), u = it(e.v, null);
    if (l == null || u == null) return null;
    const f = {
      targetKind: "ERP_GLOBAL",
      u: (l % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  if (t.kind === "FRAME_LOCAL") {
    const l = it(e.u, null), u = it(e.v, null);
    if (l == null || u == null) return null;
    const f = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: l,
      v: u,
      t: n
    };
    return i != null && (f.widthScale = Math.max(0, i)), a != null && (f.pressureLike = Math.max(0, a)), f;
  }
  return null;
}
function Co(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const l = S1(a, t);
    if (!l) return null;
    i.push(l);
  }
  return i.length >= n ? i : null;
}
function M1(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const p = Co(e.points, t, 3);
    return p ? { geometryKind: a, points: p } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const l = Co(e.points, t, 1);
  if (!l) return null;
  const u = Co(e.rawPoints, t, 1), f = Co(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: l,
    rawPoints: u || l.map((p) => ({ ...p })),
    processedPoints: f || l.map((p) => ({ ...p }))
  };
}
function N1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = w1(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = M1(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const l = it(e.size, null), u = it(e.opacity, null);
  if (l == null || u == null) return null;
  const f = String(e.id || "").trim(), p = String(e.actionGroupId || "").trim();
  if (!f || !p) return null;
  const b = it(e.radiusValue, null), _ = String(e.radiusModel || "").trim() || null;
  let x = null;
  if (t === "paint") {
    const S = e.color;
    if (!S || typeof S != "object") return null;
    x = {
      r: Math.max(0, Math.min(1, it(S.r, 0))),
      g: Math.max(0, Math.min(1, it(S.g, 0))),
      b: Math.max(0, Math.min(1, it(S.b, 0))),
      a: Math.max(0, Math.min(1, it(S.a, 1)))
    };
  }
  return {
    id: f,
    actionGroupId: p,
    targetSpace: n,
    layerKind: t,
    toolKind: i,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, l),
    opacity: Math.max(0, Math.min(1, u)),
    hardness: it(e.hardness, null),
    flow: it(e.flow, null),
    spacing: it(e.spacing, null),
    createdAt: Math.trunc(it(e.createdAt, 0)),
    color: x,
    radiusModel: _,
    radiusValue: b == null ? null : Math.max(0, b),
    geometry: a
  };
}
function _d(e, t) {
  const n = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return n;
  for (const i of e.strokes) {
    const a = N1(i, t);
    a && n.strokes.push(a);
  }
  return n;
}
function k1(e) {
  if (!e || typeof e != "object") return null;
  const t = it(e.u0, null), n = it(e.v0, null), i = it(e.u1, null), a = it(e.v1, null);
  if (t == null || n == null || i == null || a == null) return null;
  const l = (f) => Math.max(0, Math.min(1, f)), u = { u0: l(t), v0: l(n), u1: l(i), v1: l(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
}
function P1(e) {
  const t = e || {};
  return {
    du: it(t.du, 0) ?? 0,
    dv: it(t.dv, 0) ?? 0,
    rot_deg: it(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, it(t.scale, 1) ?? 1)
  };
}
function A1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const n = String(e.id || "").trim();
  if (!n) return null;
  const i = String(e.layerKind || "paint");
  if (i !== "paint" && i !== "mask") return null;
  const a = String(e.rasterDataUrl || "").trim();
  if (!a.startsWith("data:")) return null;
  const l = k1(e.bbox);
  return l ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, it(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: l,
    rasterDataUrl: a,
    transform: P1(e.transform)
  } : null;
}
function C1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e) {
    const a = A1(i, t.length);
    !a || n.has(a.id) || (n.add(a.id), t.push(a));
  }
  return t;
}
function Sa(e) {
  const t = _1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: x1(e.groups),
    paint: _d(e.paint, "paint"),
    mask: _d(e.mask, "mask"),
    raster_objects: C1(e.raster_objects)
  };
}
function xd(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function I1(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: K(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: K(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function wd(e = {}, t = 0) {
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
  return n === "sticker" ? (i.transform = I1((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function T1(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Bi({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: xd((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((l, u) => wd(l, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = xd((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((l, u) => wd(l, u)).filter(Boolean);
  return Bi({
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
    hFovDeg: K(Number((e == null ? void 0 : e.hFovDeg) || 90), 1, 179),
    vFovDeg: K(Number((e == null ? void 0 : e.vFovDeg) || 60), 1, 179),
    aspect: Number((e == null ? void 0 : e.aspect) || 1),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : t === "unwrap" ? {
    mode: "unwrap",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: K(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  } : {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    fovDeg: K(Number((e == null ? void 0 : e.fovDeg) || 100), 1, 179),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360
  };
}
function gs(e = {}) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.width) || 1)),
    height: Math.max(1, Number((e == null ? void 0 : e.height) || 1)),
    dpr: Math.max(0.1, Number((e == null ? void 0 : e.dpr) || 1))
  };
}
function E1(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || Jr((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function l(x) {
    var S;
    return JSON.stringify({
      stateRevision: (x == null ? void 0 : x.stateRevision) || "",
      background: (x == null ? void 0 : x.background) || null,
      objects: Array.isArray((S = x == null ? void 0 : x.objectPass) == null ? void 0 : S.objects) ? x.objectPass.objects.map((A) => ({
        id: (A == null ? void 0 : A.id) || "",
        type: (A == null ? void 0 : A.type) || "",
        revision: (A == null ? void 0 : A.revision) || "",
        visible: (A == null ? void 0 : A.visible) !== !1,
        opacity: Number((A == null ? void 0 : A.opacity) ?? 1),
        zIndex: Number((A == null ? void 0 : A.zIndex) ?? 0),
        transform: (A == null ? void 0 : A.transform) || null,
        params: (A == null ? void 0 : A.params) || null
      })) : [],
      overlay: (x == null ? void 0 : x.overlay) || {}
    });
  }
  function u(x = {}) {
    const S = T1(x), A = l(S);
    return a === A || !n.syncState(S) ? !1 : (i = S, a = A, !0);
  }
  function f(x = {}, S = {}) {
    if (!i) return null;
    const A = La(x), v = gs(S);
    return n.renderToTarget(t, A, v);
  }
  function p(x, S, A = {}, v = {}) {
    if (!x || !S || !i) return !1;
    const R = La(A), H = gs({
      ...v,
      width: Number((S == null ? void 0 : S.w) || (v == null ? void 0 : v.width) || 1),
      height: Number((S == null ? void 0 : S.h) || (v == null ? void 0 : v.height) || 1)
    });
    return n.renderToContext(x, S, R, H);
  }
  function b() {
    var x;
    i = null, a = "", (x = n.clearState) == null || x.call(n);
  }
  function _() {
    var x;
    b(), (x = n.dispose) == null || x.call(n);
  }
  return {
    isSupported: typeof (n == null ? void 0 : n.isSupported) == "function" ? () => n.isSupported() : () => !1,
    syncScene: u,
    renderFrame: f,
    renderToContext: p,
    snapshotScene: () => i,
    clearScene: b,
    dispose: _
  };
}
function D1(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((l) => {
      l ? i(l) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function O1(e, t = {}) {
  var p, b;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = La((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((p = t == null ? void 0 : t.camera) == null ? void 0 : p.output) || ((b = t == null ? void 0 : t.view) == null ? void 0 : b.output) || null, a = gs(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), l = e.renderFrame(n, a);
  if (!l) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", f = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return D1(l, u, f);
}
function R1(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let l = La((n == null ? void 0 : n.view) || {}), u = !1, f = 0;
  function p() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), A = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), v = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), R = gs({ width: S, height: A, dpr: v });
    return i.width = Math.max(1, Math.round(R.width * R.dpr)), i.height = Math.max(1, Math.round(R.height * R.dpr)), i.style.width = `${R.width}px`, i.style.height = `${R.height}px`, R;
  }
  function b() {
    if (u || !a) return !1;
    const S = p();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      l,
      { ...S, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function _() {
    u || f || (f = requestAnimationFrame(() => {
      f = 0, b();
    }));
  }
  const x = typeof ResizeObserver == "function" ? new ResizeObserver(() => _()) : null;
  return x == null || x.observe(t), _(), {
    canvas: i,
    setView(S) {
      l = La(S || {}), _();
    },
    getView() {
      return { ...l };
    },
    present: b,
    requestRender: _,
    unmount() {
      u = !0, f && cancelAnimationFrame(f), x == null || x.disconnect(), i.remove();
    }
  };
}
function F1(e = {}) {
  const t = E1({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(Ar(n), i);
    },
    renderShotToContext(n, i, a, l = {}) {
      return t.renderToContext(n, i, Ar(a), l);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? Ar(i.shot) : i == null ? void 0 : i.view;
      return R1(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: Ar(n.shot) } : n;
      return O1(t, i);
    }
  };
}
const Er = 1, Dr = 179, Sd = 85;
function ht(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function Os(e = {}) {
  const t = K(ht(e.hFOV_deg, 90), Er, Dr), n = K(ht(e.vFOV_deg, 60), Er, Dr), i = Math.tan(t * Tr * 0.5), a = Math.tan(n * Tr * 0.5);
  return {
    yawDeg: ht(e.yaw_deg, 0),
    pitchDeg: ht(e.pitch_deg, 0),
    rollDeg: ht(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: n,
    tanHalfX: i,
    tanHalfY: a,
    aspect: i / Math.max(1e-12, a)
  };
}
function jl(e, t) {
  const n = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Os(t);
  return Math.max(1, Math.min(
    n / (2 * a.tanHalfX),
    i / (2 * a.tanHalfY)
  ));
}
function L1(e, t) {
  const n = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, ht(t, 1)), l = Math.min(n, i * a);
  return { width: l, height: l / a };
}
function z1(e, t) {
  const n = Math.max(1e-12, ht(t, 1)), i = Math.max(1e-6, ht((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, ht((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), l = K(2 * Math.atan(i / (2 * n)) * Fa, Er, Dr), u = K(2 * Math.atan(a / (2 * n)) * Fa, Er, Dr);
  return { hFOV_deg: l, vFOV_deg: u };
}
function $1(e, t, n) {
  const i = ht(e == null ? void 0 : e.x, 0), a = ht(e == null ? void 0 : e.y, 0), l = Math.max(1, ht((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), u = Math.max(1, ht((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), f = Os(t), p = Math.max(1e-12, ht(n, 1)), b = 2 * p * f.tanHalfX, _ = 2 * p * f.tanHalfY;
  return {
    x: i + (l - b) * 0.5,
    y: a + (u - _) * 0.5,
    w: b,
    h: _,
    focalPx: p
  };
}
function Md(e, t, n = Sd) {
  const i = Math.max(1e-12, ht(t, 1)), a = K(ht(n, Sd), 1, 89.999), l = i * Math.tan(a * Tr), u = Math.max(1, ht((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), f = Math.max(1, ht((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(u * 0.5, l),
    halfH: Math.min(f * 0.5, l)
  };
}
function Nd(e, t) {
  const n = K(ht(e, 60), Er, Dr), i = Math.max(1e-6, ht(t, 1));
  return K(
    2 * Math.atan(Math.tan(n * Tr * 0.5) * i) * Fa,
    Er,
    Dr
  );
}
function j1(e, t) {
  const n = Os(e), i = ht(t, 1);
  if (!(i > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * i) * Fa, l = 2 * Math.atan(n.tanHalfY * i) * Fa;
  return a < Er || a > Dr || l < Er || l > Dr ? null : { hFOV_deg: a, vFOV_deg: l };
}
function ua(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((l) => String((l == null ? void 0 : l[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function V1(e = {}) {
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
function H1({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: l,
  hsv01ToRgb: u,
  getBrushPresetIdForTool: f,
  isActiveLassoTool: p
}) {
  var D, E;
  const b = e.primaryTool === "paint" || e.primaryTool === "mask", _ = {
    visible: b,
    activePane: b ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: i(e.customPaintColor, 1),
    colorPopOpen: b ? !!n : !1,
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
    historyEntries: Array.from({ length: 8 }, (F, Y) => ({ index: Y, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!b) return _;
  const x = ((D = t.find((F) => a(e.paintColor, F.color))) == null ? void 0 : D.id) || "", S = !x, A = l(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((E = e.customPaintColor) == null ? void 0 : E.a) ?? 1))) * 100), R = f(e.primaryTool === "paint" ? e.paintTool : e.maskTool), H = e.brushSizes[R] ?? 10, j = p(), P = Array.from({ length: 8 }, (F, Y) => e.customPaintHistory[Y] || null);
  return {
    ..._,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: x,
    customColorActive: S,
    customColorCss: i(e.customPaintColor, 1),
    pickerHueColor: i({ ...u(A.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, A.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, A.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, A.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, A.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, A.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, A.h)) * 100}%`,
    alphaValue: v,
    alphaText: `${v}%`,
    historyEntries: P.map((F, Y) => ({
      index: Y,
      color: F ? { cssColor: i(F, 1) } : null
    })),
    sizeValue: H,
    sizeText: String(H),
    sizeFill: `${Math.max(0, Math.min(100, (H - 1) / 119 * 100))}%`,
    sizeDisabled: j,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function U1({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function B1({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: l,
  params: u,
  notes: f,
  visibilityRows: p,
  uiSettings: b,
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
    params: u,
    notes: f,
    paramsDisabled: !i,
    visibilityRows: p,
    uiSettings: t ? null : b,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function G1({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: l,
  selectedLocked: u,
  activeAspect: f,
  cutoutAspectOpen: p,
  isExternalSticker: b,
  isStickerHidden: _,
  canRestoreSelectedToInitial: x,
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
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  else if (e === "stickers" || i === "image") {
    if (A = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: S.bring_front },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: S.send_back }
    ], b(t) || (A.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: S.duplicate }), A.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: S.replace_image })), b(t)) {
      const F = x(), Y = _(t);
      A.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: F ? "Back to initial position" : "Already at initial position",
        icon: S.back_initial,
        disabled: !F
      }), A.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: Y ? "Show" : "Hide",
        tip: Y ? "Show input image" : "Hide input image",
        icon: Y ? S.eye : S.eye_dashed
      });
    }
    A.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed }), b(t) || A.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete });
  } else
    A = [
      {
        key: "aspect",
        kind: "aspect",
        icon: S.aspect,
        open: !!p,
        choices: ["1:1", "4:3", "3:2", "16:9"].map((F) => ({ value: F, label: F, active: f === F }))
      },
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: S.rotate_90 },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete }
    ];
  const v = a.corners.map((F) => ({ x: Number(F == null ? void 0 : F.x), y: Number(F == null ? void 0 : F.y) })).filter((F) => Number.isFinite(F.x) && Number.isFinite(F.y));
  if (!v.length) return { visible: !1, left: 0, top: 0, items: [] };
  const R = v.map((F) => F.x), H = v.map((F) => F.y), j = Math.min(...R), P = Math.max(...R), D = Math.min(...H), E = Math.max(...H);
  return {
    visible: !0,
    left: (j + P) * 0.5,
    top: E + 18,
    items: A,
    anchor: { minX: j, maxX: P, minY: D, maxY: E }
  };
}
const De = Object.freeze({
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
}), K1 = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, W1 = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: K1(t[2])
})), Y1 = {
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
}, kd = Object.fromEntries(
  Object.entries(Y1).map(([e, t]) => [e, {
    name: t.name,
    elements: W1(t.body)
  }])
), Mn = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, n = xt(() => {
      const i = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(kd, i) ? kd[i] : null;
    });
    return (i, a) => n.value ? (Ne(), Ce("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: dt(["icon icon-tabler icons-tabler-outline", [
        n.value.name ? `icon-tabler-${n.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Ne(!0), Ce(Je, null, Lt(n.value.elements, (l, u) => (Ne(), Ce(Je, {
        key: `${n.value.name || e.icon || "icon"}-${l.tag}-${u}`
      }, [
        l.tag === "path" ? (Ne(), Ce("path", kr({
          key: 0,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "circle" ? (Ne(), Ce("circle", kr({
          key: 1,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "rect" ? (Ne(), Ce("rect", kr({
          key: 2,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "line" ? (Ne(), Ce("line", kr({
          key: 3,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polyline" ? (Ne(), Ce("polyline", kr({
          key: 4,
          ref_for: !0
        }, l.attrs), null, 16)) : l.tag === "polygon" ? (Ne(), Ce("polygon", kr({
          key: 5,
          ref_for: !0
        }, l.attrs), null, 16)) : Dt("", !0)
      ], 64))), 128))
    ], 2)) : Dt("", !0);
  }
}, dr = {
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
    const t = e, n = xt(() => {
      const i = { ...t.attrs };
      return t.tag === "button" && i.type == null && (i.type = t.type), t.label && (i["aria-label"] = t.label), t.tip && (i["data-tip"] = t.tip), t.pressed != null && (i["aria-pressed"] = t.pressed), i;
    });
    return (i, a) => (Ne(), Ki(ab(e.tag), kr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: uh(() => [
        We(Mn, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, q1 = { class: "pano-floating-right" }, X1 = ["data-settled"], J1 = ["data-ready", "data-settled"], Z1 = ["aria-label", "data-tip"], Q1 = {
  key: 1,
  class: "pano-camera-preview-label"
}, e_ = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ne(), Ce(Je, null, [
      oe("div", q1, [
        (Ne(!0), Ce(Je, null, Lt(e.buttons, (i) => (Ne(), Ki(dr, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Ia(oe("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        oe("div", {
          class: dt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Tt({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          n[0] || (n[0] = oe("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, null, -1)),
          e.previewToggle.visible ? (Ne(), Ce("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            We(Mn, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Z1)) : Dt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Ne(), Ce("div", Q1, ft(e.preview.label || "Preview unavailable"), 1)) : Dt("", !0)
        ], 14, J1)
      ], 8, X1), [
        [Da, e.preview.visible]
      ])
    ], 64));
  }
}, t_ = {
  class: "pano-frame-rail",
  "data-frame-rail": ""
}, n_ = { class: "pano-frame-aspect-control" }, r_ = { class: "pano-frame-aspect-popover" }, i_ = ["data-aspect", "disabled"], a_ = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => Ia((Ne(), Ce("div", t_, [
      oe("div", n_, [
        We(dr, {
          icon: e.model.aspectIcon,
          label: "Aspect Ratio",
          tip: "Aspect ratio",
          pressed: e.model.aspectOpen ? "true" : "false",
          attrs: { "data-action": "frame-aspect", disabled: e.model.disabled === !0 }
        }, null, 8, ["icon", "pressed", "attrs"]),
        Ia(oe("div", r_, [
          (Ne(!0), Ce(Je, null, Lt(e.model.aspectChoices || [], (i) => (Ne(), Ce("button", {
            key: i.value,
            class: dt(["pano-btn pano-frame-aspect-choice", { active: i.active === !0 }]),
            type: "button",
            "data-action": "frame-aspect-set",
            "data-aspect": i.value,
            disabled: e.model.disabled === !0
          }, ft(i.label), 11, i_))), 128))
        ], 512), [
          [Da, e.model.aspectOpen === !0]
        ])
      ]),
      We(dr, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"])
    ], 512)), [
      [Da, e.model.visible === !0]
    ]);
  }
}, o_ = ["aria-label"], s_ = { class: "pano-canvas-confirm-title" }, l_ = { class: "pano-canvas-confirm-text" }, c_ = { class: "pano-canvas-confirm-actions" }, u_ = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, f_ = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ Qo(null), i = /* @__PURE__ */ Qo(null);
    let a = null;
    function l() {
      const x = i.value;
      return x ? Array.from(x.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function u(x) {
      const S = i.value;
      if (!S) return;
      const A = S.querySelector(`[data-action='${x}']`);
      A instanceof HTMLButtonElement && A.click();
    }
    function f() {
      var R;
      const x = i.value;
      if (!x) return;
      const S = x.querySelector("[data-action='confirm-accept']");
      if (S instanceof HTMLElement) {
        S.focus();
        return;
      }
      const v = l()[0] || x;
      (R = v == null ? void 0 : v.focus) == null || R.call(v);
    }
    function p() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function b(x) {
      var j;
      if (x.defaultPrevented) return;
      if (x.key === "Escape") {
        x.preventDefault(), x.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (x.key !== "Tab") return;
      const S = l(), A = i.value;
      if (!S.length) {
        x.preventDefault(), (j = A == null ? void 0 : A.focus) == null || j.call(A);
        return;
      }
      const v = S[0], R = S[S.length - 1], H = document.activeElement;
      if (x.shiftKey) {
        (H === v || H === A || !(A != null && A.contains(H))) && (x.preventDefault(), R.focus());
        return;
      }
      (H === R || !(A != null && A.contains(H))) && (x.preventDefault(), v.focus());
    }
    function _(x) {
      x.target === n.value && u("confirm-cancel");
    }
    return Li(() => t.model.visible, (x, S) => {
      if (x) {
        a = document.activeElement, Ic(() => {
          f();
        });
        return;
      }
      S && p();
    }, { immediate: !0 }), Dc(() => {
      p();
    }), (x, S) => e.model.visible === !0 ? (Ne(), Ce("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: Uh(_, ["self"])
    }, [
      oe("div", {
        ref_key: "cardRef",
        ref: i,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: b
      }, [
        oe("div", s_, ft(e.model.title), 1),
        oe("div", l_, ft(e.model.text), 1),
        oe("div", c_, [
          S[0] || (S[0] = oe("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          oe("button", u_, ft(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, o_)
    ], 512)) : Dt("", !0);
  }
}, d_ = ["data-paint-pane"], h_ = ["hidden"], m_ = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], p_ = ["aria-pressed", "disabled"], g_ = ["hidden"], b_ = { class: "pano-paint-color-pop-head" }, y_ = { class: "pano-paint-color-field" }, v_ = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, __ = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, x_ = { class: "pano-paint-color-field" }, w_ = { class: "pano-paint-alpha-wrap" }, S_ = ["value"], M_ = { "data-paint-alpha-value": "" }, N_ = ["hidden"], k_ = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, P_ = ["data-paint-history-index", "aria-label", "disabled"], A_ = ["data-paint-footer"], C_ = ["data-paint-group"], I_ = ["hidden"], T_ = ["value", "disabled"], E_ = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, D_ = ["hidden"], O_ = {
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
    return (i, a) => (Ne(), Ce("div", {
      class: dt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Ne(!0), Ce(Je, null, Lt(e.panes, (l) => {
        var u;
        return Ne(), Ce("div", {
          key: l.key,
          class: dt(["pano-paint-pane", { "is-active": e.state.activePane === l.key }]),
          "data-paint-pane": l.key
        }, [
          l.showColorFloat ? (Ne(), Ce("div", {
            key: 0,
            class: dt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Ne(!0), Ce(Je, null, Lt(e.paintSwatches, (f) => (Ne(), Ce("button", {
              key: f.id,
              class: dt(["pano-paint-color-dot", { active: e.state.activeSwatchId === f.id }]),
              type: "button",
              "data-paint-color-swatch": f.id,
              "aria-label": f.label,
              style: Tt(t(f)),
              "aria-pressed": e.state.activeSwatchId === f.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, m_))), 128)),
            oe("button", {
              class: dt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Tt({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, p_),
            oe("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Tt({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              oe("div", b_, [
                oe("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Tt({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = oe("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              oe("div", y_, [
                oe("div", v_, [
                  oe("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Tt({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                oe("div", __, [
                  oe("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Tt({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              oe("label", x_, [
                a[1] || (a[1] = oe("span", null, "Opacity", -1)),
                oe("div", w_, [
                  oe("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, S_),
                  oe("span", M_, ft(e.state.alphaText || "100%"), 1)
                ])
              ]),
              oe("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                oe("div", k_, [
                  (Ne(!0), Ce(Je, null, Lt(e.state.historyEntries || [], (f) => (Ne(), Ce("button", {
                    key: f.index,
                    class: dt(["pano-paint-color-history-dot", { empty: !f.color }]),
                    type: "button",
                    "data-paint-history-index": f.index,
                    "aria-label": `Recent color ${f.index + 1}`,
                    disabled: !f.color,
                    style: Tt(n(f.color))
                  }, null, 14, P_))), 128))
                ])
              ], 8, N_)
            ], 12, g_)
          ], 10, h_)) : Dt("", !0),
          oe("div", {
            class: "pano-paint-footer",
            "data-paint-footer": l.footer
          }, [
            oe("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": l.group
            }, [
              (Ne(!0), Ce(Je, null, Lt(l.tools, (f) => {
                var p;
                return Ne(), Ki(dr, {
                  key: `${l.key}-${f.key}`,
                  icon: f.icon,
                  label: f.label,
                  tip: f.tip,
                  "extra-class": { active: ((p = e.state.activeTools) == null ? void 0 : p[l.key]) === f.key },
                  attrs: { [f.attr]: f.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, C_),
            oe("div", {
              class: dt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              oe("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: Tt({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, T_),
              oe("span", E_, ft(e.state.sizeText || "10"), 1)
            ], 10, I_),
            oe("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[l.key]) ?? !l.clearHidden)
            }, [
              We(dr, {
                icon: Gr(De).clear,
                label: l.clearLabel,
                tip: l.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": l.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, D_)
          ], 8, A_)
        ], 10, d_);
      }), 128))
    ], 2));
  }
}, R_ = {
  key: 0,
  class: "pano-cutout-menu"
}, F_ = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, L_ = ["data-aspect"], z_ = ["data-action", "aria-label", "data-tip", "disabled"], $_ = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ne(), Ce("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Tt({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Ne(!0), Ce(Je, null, Lt(e.model.items || [], (i) => (Ne(), Ce(Je, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Ne(), Ce("div", R_, [
          oe("button", F_, [
            We(Mn, {
              icon: i.icon
            }, null, 8, ["icon"])
          ]),
          oe("div", {
            class: dt(["pano-aspect-popover", { open: i.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Ne(!0), Ce(Je, null, Lt(i.choices || [], (a) => (Ne(), Ce("button", {
              key: a.value,
              class: dt(["pano-btn pano-aspect-choice", { active: a.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": a.value
            }, ft(a.label), 11, L_))), 128))
          ], 2)
        ])) : (Ne(), Ce("button", {
          key: 1,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": i.action,
          "aria-label": i.label,
          "data-tip": i.tip,
          disabled: i.disabled === !0
        }, [
          We(Mn, {
            icon: i.icon
          }, null, 8, ["icon"])
        ], 8, z_))
      ], 64))), 128))
    ], 4));
  }
}, j_ = {
  class: "pano-side",
  "data-side": ""
}, V_ = { class: "pano-side-head" }, H_ = { class: "pano-side-title" }, U_ = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, B_ = {
  key: 0,
  class: "pano-side-scroll"
}, G_ = { class: "pano-inspector" }, K_ = { class: "pano-ui-row pano-coverage-row" }, W_ = ["data-selected"], Y_ = ["aria-pressed", "disabled"], q_ = ["aria-pressed", "disabled"], X_ = {
  key: 0,
  class: "pano-section-title"
}, J_ = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, Z_ = {
  class: "pano-picker",
  "data-picker": "selection"
}, Q_ = ["disabled"], ex = { class: "pano-picker-label" }, tx = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, nx = ["hidden"], rx = ["data-selection-id"], ix = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, ax = {
  key: 2,
  class: "pano-state-actions"
}, ox = ["disabled"], sx = ["data-key"], lx = ["min", "max", "step", "value", "disabled", "data-param-key"], cx = ["min", "max", "step", "value", "disabled", "data-param-key"], ux = { class: "pano-visibility-section" }, fx = { class: "pano-visibility-stack" }, dx = ["data-visibility-row"], hx = { class: "pano-visibility-name" }, mx = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, px = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], gx = ["open"], bx = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, yx = { class: "pano-ui-settings-body" }, vx = { class: "pano-ui-row" }, _x = ["data-selected"], xx = ["aria-pressed"], wx = ["aria-pressed"], Sx = { class: "pano-ui-row" }, Mx = ["data-selected"], Nx = ["aria-pressed"], kx = ["aria-pressed"], Px = { class: "pano-ui-row" }, Ax = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, Cx = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, Ix = { class: "pano-picker-label" }, Tx = ["hidden"], Ex = ["data-quality"], Dx = {
  key: 1,
  class: "pano-side-footer"
}, Ox = ["data-action"], Rx = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = xt(() => {
      const l = t.model;
      return !l || typeof l != "object" ? !1 : Object.keys(l).length > 0 && !!l.coverage;
    });
    function i(l) {
      return { "--v": `${Number((l == null ? void 0 : l.fillPct) || 0)}%` };
    }
    function a(l, u) {
      return (u == null ? void 0 : u.paramsDisabled) === !0 || (l == null ? void 0 : l.enabled) === !1;
    }
    return (l, u) => {
      var f, p, b, _, x;
      return Ne(), Ce("div", j_, [
        oe("div", V_, [
          oe("div", H_, [
            oe("span", U_, [
              We(Mn, {
                icon: Gr(De).globe
              }, null, 8, ["icon"])
            ]),
            oe("span", null, ft(e.nodeTitle), 1)
          ]),
          u[0] || (u[0] = oe("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[13] || (u[13] = oe("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Ne(), Ce("div", B_, [
          oe("div", G_, [
            u[12] || (u[12] = oe("div", { class: "pano-section-title" }, [
              oe("span", null, "Scene")
            ], -1)),
            oe("div", K_, [
              u[1] || (u[1] = oe("label", null, "Coverage", -1)),
              oe("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((f = e.model.coverage) == null ? void 0 : f.value) === 180 ? "1" : "0"
              }, [
                oe("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((p = e.model.coverage) == null ? void 0 : p.value) === 360 ? "true" : "false",
                  disabled: ((b = e.model.coverage) == null ? void 0 : b.disabled) === !0
                }, "360", 8, Y_),
                oe("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((x = e.model.coverage) == null ? void 0 : x.disabled) === !0
                }, "180", 8, q_)
              ], 8, W_)
            ]),
            e.model.transformTitle !== !1 ? (Ne(), Ce("div", X_, [...u[2] || (u[2] = [
              oe("span", null, "Transform", -1)
            ])])) : Dt("", !0),
            e.model.selectionPicker ? (Ne(), Ce("div", J_, [
              oe("label", null, ft(e.model.selectionPicker.label), 1),
              oe("div", Z_, [
                oe("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  oe("span", ex, [
                    e.model.selectionPicker.currentIcon ? (Ne(), Ce("span", tx, [
                      We(Mn, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Dt("", !0),
                    oe("span", null, ft(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[3] || (u[3] = oe("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, Q_),
                oe("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Ne(!0), Ce(Je, null, Lt(e.model.selectionPicker.items || [], (S) => (Ne(), Ce("button", {
                    key: S.id,
                    type: "button",
                    class: dt(["pano-picker-item", { active: S.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": S.id
                  }, [
                    S.icon ? (Ne(), Ce("span", ix, [
                      We(Mn, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Dt("", !0),
                    oe("span", null, ft(S.label), 1)
                  ], 10, rx))), 128))
                ], 8, nx)
              ])
            ])) : Dt("", !0),
            e.model.copyStateButton ? (Ne(), Ce("div", ax, [
              oe("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                We(Mn, {
                  icon: Gr(De).copy
                }, null, 8, ["icon"]),
                oe("span", null, ft(e.model.copyStateButton.label), 1)
              ], 8, ox)
            ])) : Dt("", !0),
            oe("div", {
              class: dt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Ne(!0), Ce(Je, { key: 0 }, Lt(e.model.notes, (S) => (Ne(), Ce("div", {
                key: S,
                class: "pano-param-note"
              }, ft(S), 1))), 128)) : (Ne(!0), Ce(Je, { key: 1 }, Lt(e.model.params || [], (S) => (Ne(), Ce("div", {
                key: S.key,
                class: "pano-field",
                "data-key": S.key
              }, [
                oe("label", null, ft(S.label), 1),
                oe("input", {
                  type: "range",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.value,
                  disabled: a(S, e.model),
                  style: Tt(i(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, lx),
                oe("input", {
                  type: "number",
                  min: S.min,
                  max: S.max,
                  step: S.step,
                  value: S.displayValue,
                  disabled: a(S, e.model),
                  "data-action": "param-input",
                  "data-input-kind": "number",
                  "data-param-key": S.key
                }, null, 8, cx)
              ], 8, sx))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Ne(), Ce(Je, { key: 3 }, [
              u[5] || (u[5] = oe("div", { class: "pano-divider" }, null, -1)),
              oe("div", ux, [
                u[4] || (u[4] = oe("div", { class: "pano-section-title" }, [
                  oe("span", null, "Layers")
                ], -1)),
                oe("div", fx, [
                  (Ne(!0), Ce(Je, null, Lt(e.model.visibilityRows, (S) => (Ne(), Ce("div", {
                    key: S.key,
                    class: dt(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    oe("span", hx, [
                      oe("span", mx, [
                        We(Mn, {
                          icon: S.icon
                        }, null, 8, ["icon"])
                      ]),
                      oe("span", null, ft(S.label), 1)
                    ]),
                    oe("button", {
                      class: dt(["pano-visibility-toggle", { active: S.visible === !0 }]),
                      type: "button",
                      "data-action": "toggle-visibility",
                      "data-visibility": S.key,
                      "aria-label": S.ariaLabel,
                      "aria-pressed": S.visible === !0 ? "true" : "false",
                      "data-tip": S.tip,
                      disabled: S.enabled === !1
                    }, [
                      We(Mn, {
                        icon: S.visible === !0 ? Gr(De).eye : Gr(De).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, px)
                  ], 10, dx))), 128))
                ])
              ])
            ], 64)) : Dt("", !0),
            e.model.uiSettings ? (Ne(), Ce("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              oe("summary", null, [
                u[6] || (u[6] = oe("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                oe("span", bx, [
                  We(Mn, {
                    icon: Gr(De).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              oe("div", yx, [
                oe("div", vx, [
                  u[7] || (u[7] = oe("label", null, "Drag X", -1)),
                  oe("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    oe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, xx),
                    oe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, wx)
                  ], 8, _x)
                ]),
                oe("div", Sx, [
                  u[8] || (u[8] = oe("label", null, "Drag Y", -1)),
                  oe("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    oe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, Nx),
                    oe("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, kx)
                  ], 8, Mx)
                ]),
                oe("div", Px, [
                  u[10] || (u[10] = oe("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  oe("div", Ax, [
                    oe("button", Cx, [
                      oe("span", Ix, ft(e.model.uiSettings.qualityLabel), 1),
                      u[9] || (u[9] = oe("span", { class: "pano-picker-caret" }, "▾", -1))
                    ]),
                    oe("div", {
                      class: "pano-picker-pop",
                      hidden: e.model.uiSettings.qualityOpen !== !0
                    }, [
                      (Ne(!0), Ce(Je, null, Lt(e.model.uiSettings.qualityOptions || [], (S) => (Ne(), Ce("button", {
                        key: S.value,
                        type: "button",
                        class: dt(["pano-picker-item", { active: S.active === !0 }]),
                        "data-action": "set-quality",
                        "data-quality": S.value
                      }, ft(S.label), 11, Ex))), 128))
                    ], 8, Tx)
                  ])
                ]),
                u[11] || (u[11] = oe("div", { class: "pano-ui-row" }, [
                  oe("span"),
                  oe("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, gx)) : Dt("", !0)
          ])
        ])) : Dt("", !0),
        (e.model.footerButtons || []).length ? (Ne(), Ce("div", Dx, [
          (Ne(!0), Ce(Je, null, Lt(e.model.footerButtons, (S) => (Ne(), Ce("button", {
            key: S.action,
            class: dt(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, ft(S.label), 11, Ox))), 128))
        ])) : Dt("", !0)
      ]);
    };
  }
}, Fx = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Ne(), Ce("div", {
      class: dt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail"
      }]),
      "data-tooltip": "",
      style: Tt({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, ft(e.model.text || ""), 7));
  }
}, Lx = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, zx = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Ne(), Ce("div", Lx, [
      (Ne(!0), Ce(Je, null, Lt(e.buttons, (i) => Ia((Ne(), Ki(dr, {
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
        [Da, i.visible !== !1]
      ])), 128))
    ]));
  }
}, $x = ["data-video-ready"], jx = { class: "pano-video-transport-shell" }, Vx = { class: "pano-video-controls-left" }, Hx = { class: "pano-video-filmstrip" }, Ux = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, Bx = ["src", "onLoad"], Gx = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, Kx = ["max", "value", "disabled"], Wx = { class: "pano-video-controls-right" }, Yx = ["data-has-audio"], qx = { class: "pano-video-volume-pop" }, Xx = ["value", "disabled"], Jx = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = xt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause" : "Play";
    }), i = xt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? "Pause video" : "Play video";
    }), a = xt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.playing) === !0 ? De.pause : De.play;
    }), l = xt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = xt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), f = xt(() => {
      var F;
      return ((F = t.state) == null ? void 0 : F.loop) === !1 ? De.loop_off : De.loop;
    }), p = xt(() => {
      var F, Y;
      return ((F = t.state) == null ? void 0 : F.muted) === !0 || Number(((Y = t.state) == null ? void 0 : Y.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), b = xt(() => {
      var F, Y, L;
      return ((F = t.state) == null ? void 0 : F.hasAudio) !== !0 ? De.volume : ((Y = t.state) == null ? void 0 : Y.muted) === !0 || Number(((L = t.state) == null ? void 0 : L.volume) ?? 1) <= 0 ? De.volume_muted : De.volume2;
    }), _ = xt(() => {
      var F;
      return Math.max(0, Math.min(100, Number(((F = t.state) == null ? void 0 : F.progressPct) || 0)));
    }), x = xt(() => ({ left: `${_.value}%` })), S = xt(() => {
      var Z, fe;
      const F = (Z = t.state) == null ? void 0 : Z.volumePct, Y = Number(((fe = t.state) == null ? void 0 : fe.volume) ?? 1) * 100, L = Number(F ?? Y ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, L))}%`
      };
    }), A = xt(() => {
      var L, Z;
      const Y = [
        String(((L = t.state) == null ? void 0 : L.currentTimeLabel) || "0:00"),
        String(((Z = t.state) == null ? void 0 : Z.durationLabel) || "0:00")
      ].reduce((fe, U) => Math.max(fe, U.length), 4);
      return `${Math.max(4, Y)}ch`;
    }), v = xt(() => ({ "--pano-video-time-ch": A.value })), R = xt(() => {
      var L, Z;
      const F = Array.isArray((L = t.state) == null ? void 0 : L.thumbnails) ? t.state.thumbnails : [];
      if (F.length) return F;
      const Y = Math.max(7, Number(((Z = t.state) == null ? void 0 : Z.thumbnailCount) || 9));
      return Array.from({ length: Y }, (fe, U) => ({
        id: `placeholder-${U}`,
        src: "",
        label: ""
      }));
    }), H = /* @__PURE__ */ Qo(/* @__PURE__ */ new Set()), j = (F) => String((F == null ? void 0 : F.id) || (F == null ? void 0 : F.src) || (F == null ? void 0 : F.label) || ""), P = (F) => H.value.has(j(F)), D = (F) => {
      const Y = new Set(H.value);
      Y.add(j(F)), H.value = Y;
    };
    Li(R, (F) => {
      const Y = new Set(F.map(j)), L = /* @__PURE__ */ new Set();
      for (const Z of H.value)
        Y.has(Z) && L.add(Z);
      H.value = L;
    }, { immediate: !0 });
    const E = xt(() => {
      var F;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((F = t.state) == null ? void 0 : F.shellMaxWidthPx) || 640))}px`
      };
    });
    return (F, Y) => (Ne(), Ce("div", {
      class: dt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: Tt(E.value)
    }, [
      Y[1] || (Y[1] = oe("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      oe("div", jx, [
        oe("div", Vx, [
          We(dr, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: a.value,
            label: n.value,
            tip: i.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          oe("div", {
            class: "pano-video-time pano-video-time-start",
            style: Tt(v.value)
          }, ft(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        oe("div", Hx, [
          oe("div", Ux, [
            (Ne(!0), Ce(Je, null, Lt(R.value, (L) => (Ne(), Ce("div", {
              key: j(L),
              class: dt(["pano-video-thumb", {
                "is-placeholder": !L.src,
                "is-loaded": L.src && P(L)
              }])
            }, [
              L.src ? (Ne(), Ce("img", {
                key: 0,
                src: L.src,
                alt: "",
                draggable: "false",
                onLoad: (Z) => D(L)
              }, null, 40, Bx)) : (Ne(), Ce("span", Gx))
            ], 2))), 128))
          ]),
          oe("div", {
            class: "pano-video-playhead",
            style: Tt(x.value),
            "aria-hidden": "true"
          }, [...Y[0] || (Y[0] = [
            oe("span", { class: "pano-video-playhead-line" }, null, -1),
            oe("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          oe("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, Kx)
        ]),
        oe("div", Wx, [
          oe("div", {
            class: "pano-video-time pano-video-time-end",
            style: Tt(v.value)
          }, ft(e.state.durationLabel || "0:00"), 5),
          We(dr, {
            "extra-class": "pano-video-control",
            icon: f.value,
            label: l.value,
            tip: u.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          oe("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            oe("div", qx, [
              oe("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Tt(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, Xx)
            ]),
            We(dr, {
              "extra-class": "pano-video-control",
              icon: b.value,
              label: p.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, Yx)
        ])
      ])
    ], 14, $x));
  }
}, Zx = { class: "pano-floating-top" }, Qx = ["data-selected", "data-view-count"], ew = ["data-view", "aria-pressed", "aria-label", "disabled"], tw = { class: "label" }, nw = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Ne(), Ce("div", Zx, [
        oe("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Ne(!0), Ce(Je, null, Lt(e.buttons, (a) => Ia((Ne(), Ce("button", {
            key: a.key,
            class: dt(["pano-view-btn", [a.extraClass, { active: a.pressed === "true" }]]),
            "data-view": a.key,
            "aria-pressed": a.pressed,
            "aria-label": a.label,
            disabled: a.disabled === !0
          }, [
            We(Mn, {
              icon: a.icon
            }, null, 8, ["icon"]),
            oe("span", tw, ft(a.label), 1)
          ], 10, ew)), [
            [Da, a.visible !== !1]
          ])), 128))
        ], 8, Qx)
      ]);
    };
  }
};
function bm(e = "stickers") {
  const t = String(e || "stickers") === "cutout";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: De.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: De.unwrap, pressed: "false", extraClass: "" },
      ...t ? [{ key: "frame", label: "Frame", icon: De.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: De.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: De.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: De.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: De.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: De.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: De.image, pressed: null }
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: De.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: De.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: De.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: De.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: De.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: De.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: De.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: De.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: De.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: De.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: De.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: De.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: De.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: De.lasso_tool }
        ]
      }
    ]
  };
}
const rw = ["aria-label"], iw = { class: "pano-stage-wrap" }, aw = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, ow = {
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
    let a = "", l = !1, u = null;
    const f = /* @__PURE__ */ Qo(null), p = xt(() => n.readOnly === !0), b = xt(() => n.shellPreset || bm(n.type)), _ = xt(() => {
      var E, F, Y;
      const D = String((((E = n.uiState) == null ? void 0 : E.stageStatus) === "failed" ? (F = n.uiState) == null ? void 0 : F.stageStatusDetail : (Y = n.uiState) == null ? void 0 : Y.stageWarningDetail) ?? "");
      return D === "background" ? "Background preview unavailable. Re-run the node to refresh it." : D === "stickers" ? "One or more sticker previews are unavailable." : D === "frame" ? "The editor hit a rendering error. Check the browser console for details." : D.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), x = xt(() => {
      var E;
      const D = Array.isArray((E = b.value) == null ? void 0 : E.floatingButtons) ? b.value.floatingButtons.slice() : [];
      return p.value && D.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: De.fullscreen
      }), D;
    });
    function S() {
      const D = f.value;
      return D ? Array.from(D.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((E) => E instanceof HTMLElement ? !E.hidden && E.tabIndex >= 0 && E.offsetParent !== null : !1) : [];
    }
    function A() {
      var F;
      const E = S()[0] || f.value;
      (F = E == null ? void 0 : E.focus) == null || F.call(E);
    }
    function v() {
      var D;
      u != null && u.isConnected && ((D = u.focus) == null || D.call(u)), u = null;
    }
    function R(D) {
      var E, F, Y, L;
      if (!D.defaultPrevented) {
        if (D.key === "Tab") {
          const Z = S();
          if (!Z.length) {
            D.preventDefault(), (F = (E = f.value) == null ? void 0 : E.focus) == null || F.call(E);
            return;
          }
          const fe = Z[0], U = Z[Z.length - 1], be = document.activeElement;
          if (D.shiftKey) {
            (be === fe || be === f.value || !((Y = f.value) != null && Y.contains(be))) && (D.preventDefault(), U.focus());
            return;
          }
          (be === U || !((L = f.value) != null && L.contains(be))) && (D.preventDefault(), fe.focus());
          return;
        }
        D.key === "Escape" && i("close");
      }
    }
    function H() {
      l || (a = document.body.style.overflow, document.body.style.overflow = "hidden", l = !0);
    }
    function j() {
      l && (document.body.style.overflow = a, l = !1);
    }
    function P(D) {
      document.removeEventListener("keydown", R), D ? (u || (u = document.activeElement), H(), document.addEventListener("keydown", R), Ic(() => {
        A();
      })) : (j(), v());
    }
    return gh(() => {
      P(n.open);
    }), Dc(() => {
      j(), document.removeEventListener("keydown", R), v();
    }), Li(() => n.open, (D) => {
      P(D);
    }), (D, E) => e.open ? (Ne(), Ce("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: E[0] || (E[0] = Uh((F) => i("close"), ["self"]))
    }, [
      oe("section", {
        ref_key: "modalRef",
        ref: f,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        oe("div", iw, [
          E[1] || (E[1] = oe("canvas", {
            class: "pano-stage pano-stage-bg",
            "data-stage-background": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          E[2] || (E[2] = oe("canvas", {
            class: "pano-stage pano-stage-overlay",
            "data-stage-overlay": "",
            width: "1600",
            height: "800"
          }, null, -1)),
          E[3] || (E[3] = oe("div", {
            class: "pano-stage-loading",
            "aria-hidden": "true"
          }, null, -1)),
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Ne(), Ce("div", aw, ft(_.value), 1)) : Dt("", !0),
          E[4] || (E[4] = oe("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            oe("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          p.value ? Dt("", !0) : (Ne(), Ce(Je, { key: 1 }, [
            We(zx, {
              buttons: e.uiState.toolButtons || b.value.toolButtons || []
            }, null, 8, ["buttons"]),
            We(a_, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            We(O_, {
              "paint-swatches": e.paintSwatches,
              panes: b.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          We(Jx, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          We(nw, {
            buttons: e.uiState.viewButtons || b.value.viewButtons || []
          }, null, 8, ["buttons"]),
          We(e_, {
            buttons: e.uiState.floatingButtons || x.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          We($_, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          We(Fx, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          We(f_, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Dt("", !0) : (Ne(), Ki(Rx, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, rw)
    ])) : Dt("", !0);
  }
}, Gn = "loading", Gi = "ready", Wn = "failed";
function za(e, t = "") {
  return e && (e.__panoLoadState = Gn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function $a(e, t = "") {
  return e && (e.__panoLoadState = Gi, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ni(e, t = "") {
  return e && (e.__panoLoadState = Wn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function bc(e, t) {
  return e ? e.__panoLoadState === Wn ? Wn : typeof t == "function" && t(e) ? Gi : Gn : Gi;
}
function Vl(e) {
  return bc(e) === Wn;
}
function sw({ presented: e, background: t = Gi, stickers: n = [] } = {}) {
  if (!e) return { status: Gn, detail: "boot" };
  const i = Array.isArray(n) ? n : [], a = t === Gn, l = i.includes(Gn);
  if (a && l) return { status: Gn, detail: "mixed" };
  if (a) return { status: Gn, detail: "background" };
  if (l) return { status: Gn, detail: "stickers" };
  const u = t === Wn, f = i.includes(Wn);
  return u && f ? { status: Wn, detail: "mixed" } : u ? { status: Wn, detail: "background" } : f ? { status: Wn, detail: "stickers" } : { status: Gi, detail: "" };
}
const bs = "state_json", Hr = "sticker_image_1", Hl = "external_image", Ul = "pano_sticker_input_images", Xo = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], It = Math.PI / 180, Sn = 180 / Math.PI, Bl = 1, lw = 64, Pd = 40, Gl = 16, ys = 24, cw = 4, uw = 4, Io = /* @__PURE__ */ new Map(), Ad = /* @__PURE__ */ new Map(), To = /* @__PURE__ */ new Map(), Pr = /* @__PURE__ */ new Map(), fw = 12;
function Ht(e) {
  return Number(e) === 180 ? 180 : 360;
}
function dw(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function hw(e) {
  return 1 - Math.pow(1 - e, 3);
}
function mw(e, t, n) {
  const i = K((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return i * i * (3 - 2 * i);
}
function pw(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Pr.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Pr.delete(t), Pr.set(t, n), n);
}
function gw(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (Pr.delete(n), Pr.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Pr.size > fw; ) {
      const a = Pr.keys().next().value;
      if (!a) break;
      Pr.delete(a);
    }
}
function bw(e) {
  return e * e * e;
}
function Yn(e, t, n) {
  return { x: e, y: t, z: n };
}
function Eo(e, t) {
  return Yn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Do(e, t) {
  return Yn(e.x * t, e.y * t, e.z * t);
}
function Dn(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Oo(e, t) {
  return Yn(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ki(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Yn(e.x / t, e.y / t, e.z / t);
}
function $n(e, t) {
  const n = e * It, i = t * It, a = Math.cos(i);
  return Yn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Ro(e) {
  return {
    yaw: Ft(Math.atan2(e.x, e.z) * Sn),
    pitch: K(Math.asin(K(e.y, -1, 1)) * Sn, -90, 90)
  };
}
function ir(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const l = t[i].x, u = t[i].y, f = t[a].x, p = t[a].y;
    u > e.y != p > e.y && e.x < (f - l) * (e.y - u) / (p - u || 1e-6) + l && (n = !n);
  }
  return n;
}
function Mr(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function Kl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), l = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), f = i * i + a * a;
  if (f <= 1e-6) return Mr(e, t);
  const p = K((l * i + u * a) / f, 0, 1), b = Number(t.x || 0) + i * p, _ = Number(t.y || 0) + a * p, x = Number(e.x || 0) - b, S = Number(e.y || 0) - _;
  return x * x + S * S;
}
function ar(e, t, n) {
  return e + (t - e) * n;
}
function jn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(K(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(K(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(K(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${K(n, 0, 1)})`;
}
function yw(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let Fo = { fillStyle: "", url: "" };
function vw(e, t, n) {
  if (Fo.url && Fo.fillStyle === String(e || ""))
    return Fo.url;
  const i = yw(`
<svg xmlns="http://www.w3.org/2000/svg" width="${ys}" height="${ys}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${n}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return Fo = { fillStyle: String(e || ""), url: i }, i;
}
function Jo(e, t, n = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= n && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= n && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= n && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= n;
}
function gn(e) {
  return {
    r: K(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: K(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: K(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: K(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function Wt(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function _w(e) {
  return Xo.some((t) => Jo(e, t.color));
}
function Wl(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = K(Number(t), 0, 1), l = K(Number(n), 0, 1);
  if (a <= 1e-6) return { r: l, g: l, b: l };
  const u = Math.floor(i * 6), f = i * 6 - u, p = l * (1 - a), b = l * (1 - f * a), _ = l * (1 - (1 - f) * a);
  switch (u % 6) {
    case 0:
      return { r: l, g: _, b: p };
    case 1:
      return { r: b, g: l, b: p };
    case 2:
      return { r: p, g: l, b: _ };
    case 3:
      return { r: p, g: b, b: l };
    case 4:
      return { r: _, g: p, b: l };
    default:
      return { r: l, g: p, b };
  }
}
function Yl(e) {
  const t = K(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = K(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = K(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), l = Math.min(t, n, i), u = a - l;
  let f = 0;
  u > 1e-6 && (a === t ? f = ((n - i) / u + (n < i ? 6 : 0)) / 6 : a === n ? f = ((i - t) / u + 2) / 6 : f = ((t - n) / u + 4) / 6);
  const p = a <= 1e-6 ? 0 : u / a;
  return { h: f, s: p, v: a };
}
function xw(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function Cd(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function ww(e, t) {
  const n = Cd(e, 1), i = Cd(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, l = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(i * a)), f = (x, S) => S ? f(S, x % S) : x, p = f(l, u) || 1, b = Math.max(1, Math.round(l / p)), _ = Math.max(1, Math.round(u / p));
  return `${b}:${_}`;
}
function Zo(e) {
  const t = K(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * It, n = K(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * It;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Sw(e) {
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
  ], i = 0.015;
  for (const [a, l] of n)
    if (Math.abs(t - l) <= i) return a;
  return "";
}
function Kr(e) {
  const t = Zo(e);
  return Sw(t) || ww(t, 1);
}
function ym(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Kr(t), t;
}
function Pi(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Kr(e);
}
let Lo = null;
function Mw() {
  return Lo || (Lo = new Promise((e) => {
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
  }), Lo);
}
const vm = "pano_suite.ui_settings.v1", _m = "pano_suite.node_grid_visibility.v1";
let Ei = null, Vn = null, zo = { text: null, parsed: null };
function Ma(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function Nw() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(vm)) || "").trim();
    if (!t) return Ei ? Ma(Ei) : null;
    const n = JSON.parse(t), i = Ma(n);
    return Ei = i, i;
  } catch {
    return Ei ? Ma(Ei) : null;
  }
}
function kw(e) {
  var n;
  const t = Ma(e);
  Ei = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(vm, JSON.stringify(t));
  } catch {
  }
  return t;
}
function xm() {
  var e;
  if (Vn && typeof Vn == "object")
    return Vn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(_m)) || "").trim();
    if (!t)
      return Vn = {}, Vn;
    const n = JSON.parse(t);
    return Vn = n && typeof n == "object" ? n : {}, Vn;
  } catch {
    return Vn = {}, Vn;
  }
}
function Pw(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = xm()[n];
  return typeof a == "boolean" ? a : !!t;
}
function Aw(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = xm();
  i[n] = !!t, Vn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(_m, JSON.stringify(i));
  } catch {
  }
}
function Cw(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function Iw(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function Tw(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Id(e) {
  const { paintCount: t, maskCount: n } = Tw(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, l = 0;
  return i.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? l += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: l,
    totalPaintCount: t + a,
    totalMaskCount: n + l
  };
}
function Ai(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Td(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Ew(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : ym(t)) : [];
}
function Dw(e, t = 2048, n = "#00ff00", i = 360) {
  const a = Nw(), l = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Ht(i),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: Sa(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, u = String(e || "").trim();
  if (!u) return l;
  try {
    let f = null;
    if (zo.text === u ? f = zo.parsed : (f = JSON.parse(u), zo = { text: u, parsed: f }), !f || typeof f != "object" || Array.isArray(f)) return l;
    const p = {
      ...l,
      ...f,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Cw(f.assets),
      stickers: Iw(f.stickers),
      shots: Ew(f.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Sa(f.painting),
      painting_layer: f.painting_layer && typeof f.painting_layer == "object" ? f.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(f.ui_settings && f.ui_settings.invert_view_x),
        invert_view_y: !!(f.ui_settings && f.ui_settings.invert_view_y),
        preview_quality: (() => {
          var _;
          const b = String(((_ = f.ui_settings) == null ? void 0 : _.preview_quality) || "balanced");
          return b === "draft" || b === "balanced" || b === "high" ? b : "balanced";
        })()
      },
      active: f.active && typeof f.active == "object" ? { ...f.active } : { ...l.active }
    };
    return a && (p.ui_settings = Ma({ ...p.ui_settings, ...a })), p.output_preset = wm(t, Number(p.output_preset || l.output_preset)), p.bg_color = String(n || p.bg_color || l.bg_color), p.coverage = Ht(i), delete p.editor_history, p;
  } catch {
    return zo = { text: u, parsed: null }, l;
  }
}
function Nn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Kc(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = Nn(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var l, u, f, p, b, _, x, S, A, v;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || u.call(l), (p = (f = e.__panoDomPreview) == null ? void 0 : f.requestDraw) == null || p.call(f), (b = e.setDirtyCanvas) == null || b.call(e, !0, !0), (x = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || x.call(_, !0, !0), (v = (A = (S = bn) == null ? void 0 : S.canvas) == null ? void 0 : A.setDirty) == null || v.call(A, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function Ow(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Ed(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Rw(e) {
  var A, v, R, H, j;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = Nn(e, "coverage"), n = Nn(e, "bg_color"), i = Nn(e, bs), a = Nn(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const l = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), f = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(l) && Ow(l) && (Ed(u) || u === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let b = "360";
  if (Ed(u))
    try {
      const P = JSON.parse(u);
      b = String(Ht(P == null ? void 0 : P.coverage));
    } catch {
      b = "360";
    }
  const _ = l, x = u, S = f;
  t.value = b, (A = t.callback) == null || A.call(t, b), n.value = _, (v = n.callback) == null || v.call(n, _), i.value = x, (R = i.callback) == null || R.call(i, x), a && (a.value = S, (H = a.callback) == null || H.call(a, S)), (j = e.setDirtyCanvas) == null || j.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function Fw(e, t) {
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
function Lw(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var l, u;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (l = i.element) != null && l.style && (i.element.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function yc(e, t, n) {
  var l, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((f) => String((f == null ? void 0 : f.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (l = a.element) != null && l.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var f;
    return [Math.max(120, Number(((f = e == null ? void 0 : e.size) == null ? void 0 : f[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function $o(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function wm(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function zw(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function $w(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
function Sm(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function jw(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function Mm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function Vw(e, t, n = null) {
  var a, l;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, f = u ? (l = i.resolveSubgraphOutputLink) == null ? void 0 : l.call(i, Number(u.origin_slot ?? 0)) : null;
      f != null && f.outputNode && (i = f.outputNode);
    } catch {
    }
  return !i && n != null && (i = jw(e == null ? void 0 : e.graph, n)), i;
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
function Hw(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function Uw(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), l = i.join("/");
  return { filename: a, subfolder: l };
}
function Bw(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function Nm(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (Hw(t)) return [t];
  const { filename: n, subfolder: i } = Uw(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((l) => ja({
    filename: n,
    subfolder: i,
    type: l
  }));
  return Bw([...a, t]);
}
function Gw(e) {
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
function Na(e) {
  var i;
  const t = (i = bn) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  return t instanceof Map ? t.get(e) || t.get(n) || t.get(Number(n)) || null : t[e] || t[n] || null;
}
function ri(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ri(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return ja({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = ri(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : ja(e);
}
function Kw(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const i = [];
  for (const l of n)
    !Array.isArray(l) || !l.length || (t >= 0 && t < l.length && i.push(l[t]), i.push(...l));
  return i;
}
function ql(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  for (const i of e || []) {
    const a = ri(i);
    !a || n.has(a) || (n.add(a), t.push(a));
  }
  return t;
}
function Dd(e, t, n, i = null) {
  var x;
  const a = Na(e == null ? void 0 : e.id), l = Array.isArray((x = a == null ? void 0 : a.ui) == null ? void 0 : x[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], u = Array.isArray(l) && l.length ? l[0] : null, f = ri(u);
  if (!f) return null;
  const p = `__ui__${t}`, b = n.get(p);
  if (b && b.__panoSrc === f) return b;
  const _ = new Image();
  return _.__panoSrc = f, za(_, f), _.onload = () => {
    $a(_, f), typeof i == "function" && i(_);
  }, _.onerror = () => {
    ni(_, f), typeof i == "function" && i(_);
  }, _.src = f, n.set(p, _), _;
}
function Ww(e, t) {
  var P, D;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((E) => String((E == null ? void 0 : E.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const l = i[a], u = l == null ? void 0 : l.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const f = Sm(e.graph, u), { originId: p, originSlot: b } = Mm(f);
  if (p == null) return { src: "", sourceType: "", inputName: n };
  const _ = Vw(e, a, p), x = Number(b || 0);
  if (!_) return { src: "", sourceType: "", inputName: n };
  let S = [];
  try {
    S = typeof ((P = bn) == null ? void 0 : P.getNodeImageUrls) == "function" ? bn.getNodeImageUrls(_) || [] : [];
  } catch {
    S = [];
  }
  if (Array.isArray(S) && S.length) {
    const E = [];
    x >= 0 && x < S.length && E.push(S[x]), E.push(...S);
    const F = ql(E);
    if (F.length) return { src: F[0], srcCandidates: F, sourceType: "appNodeImageUrls", inputName: n };
  }
  const A = Na((_ == null ? void 0 : _.id) ?? p), v = Kw(A, x), R = ql(v);
  if (R.length) return { src: R[0], srcCandidates: R, sourceType: "nodeOutputs", inputName: n };
  const H = Array.isArray(_ == null ? void 0 : _.imgs) ? _.imgs : [];
  if (H.length) {
    const E = [];
    x >= 0 && x < H.length && E.push(H[x]), E.push(...H);
    const F = ql(E);
    if (F.length) return { src: F[0], srcCandidates: F, sourceType: "nodeImgs", inputName: n };
  }
  const j = (D = _ == null ? void 0 : _.widgets) == null ? void 0 : D.find((E) => String((E == null ? void 0 : E.name) || "").toLowerCase() === "image");
  if (j) {
    let E = ri(j.value);
    if (E && !E.includes("/") && !E.includes(":") && (_.comfyClass === "LoadImage" || _.type === "LoadImage") && (E = on.apiURL(`/view?filename=${encodeURIComponent(E)}&type=input&subfolder=`)), E) return { src: E, sourceType: "widget", inputName: n };
  }
  return { src: "", sourceType: "", inputName: n };
}
function Yw(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const l = Nm(a);
  if (!l.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(t || "image"), f = e.__panoLinkedInputImageCache.get(u);
  if (f && f.srcRaw === a && f.img) return f.img;
  const p = new Image();
  za(p, a);
  const b = { srcRaw: a, resolvedSrc: "", img: p };
  e.__panoLinkedInputImageCache.set(u, b);
  let _ = -1;
  const x = () => {
    var A;
    if (_ += 1, _ >= l.length) {
      ni(p, a), i == null || i(), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0);
      return;
    }
    const S = l[_];
    b.resolvedSrc = S, p.src = S;
  };
  return p.onload = () => {
    var S;
    $a(p, a), i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, p.onerror = () => {
    var S;
    if (_ + 1 < l.length) {
      x();
      return;
    }
    ni(p, a), i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, x(), p;
}
function qw(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((v) => String(v || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const l = String(t || "image"), u = a.join(`
`), f = e.__panoLinkedInputImageCache.get(l);
  if (f && f.srcRaw === u && f.img) return f.img;
  const p = [], b = /* @__PURE__ */ new Set();
  if (a.forEach((v) => {
    Nm(v).forEach((R) => {
      const H = String(R || "").trim();
      !H || b.has(H) || (b.add(H), p.push(H));
    });
  }), !p.length) return null;
  const _ = new Image();
  za(_, u);
  const x = { srcRaw: u, resolvedSrc: "", img: _ };
  e.__panoLinkedInputImageCache.set(l, x);
  let S = -1;
  const A = () => {
    var R;
    if (S += 1, S >= p.length) {
      ni(_, u), i == null || i(), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0);
      return;
    }
    const v = p[S];
    x.resolvedSrc = v, _.src = v;
  };
  return _.onload = () => {
    var v;
    $a(_, u), i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, _.onerror = () => {
    var v;
    if (S + 1 < p.length) {
      A();
      return;
    }
    ni(_, u), i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, A(), _;
}
function km(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = Ww(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function jo(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], l = km(e, a), u = String(i || a.join("|") || "image_exact"), f = Array.isArray(l == null ? void 0 : l.srcCandidates) ? l.srcCandidates : [];
  if (f.length) return qw(e, u, f, n);
  const p = String((l == null ? void 0 : l.src) || "").trim();
  return p ? Yw(e, u, p, n) : null;
}
async function ka(e, t, n = {}) {
  var po, cf;
  try {
    (cf = (po = e.__panoLinkedInputImageCache) == null ? void 0 : po.forEach) == null || cf.call(po, (r, o, s) => {
      r != null && r.img && Vl(r.img) && s.delete(o);
    });
  } catch {
  }
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, l = i, u = Fw(e, t);
  await Mw();
  const f = Nn(e, "output_preset"), p = Nn(e, "coverage"), b = Nn(e, "bg_color"), _ = Nn(e, bs), x = () => {
    const r = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return jo(
      e,
      r,
      () => he(),
      `background:size:${r.join("|")}`
    );
  }, S = () => {
    const r = x();
    return $w(r);
  }, A = (r = 2048) => {
    const o = f == null ? void 0 : f.value;
    return zw(o) ? S() || Math.max(1, Math.round(Number(r || 2048))) : wm(o, r);
  }, v = Dw(
    String((_ == null ? void 0 : _.value) || ""),
    A(2048),
    String((b == null ? void 0 : b.value) || "#00ff00"),
    Ht(p == null ? void 0 : p.value)
  );
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const R = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(v.shots) ? v.shots : [], o = String(((s = v == null ? void 0 : v.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((c) => String((c == null ? void 0 : c.id) || "") === o) || r[0] || null;
  })() : null, H = R ? Nu(R, !1) : { width: 220, height: 132 }, j = bm(t), P = /* @__PURE__ */ Ns({
    stageStatus: Gn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (j.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (j.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(j.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...l ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: De.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: i,
      aspectOpen: !1,
      aspectIcon: De.aspect,
      rotateIcon: De.rotate_90,
      aspectChoices: []
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: De.fullscreen,
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
      customColorCss: jn({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: jn({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: H.width,
      height: H.height,
      label: R ? "Loading preview" : "Add Frame to preview"
    }
  }), D = document.createElement("div");
  document.body.appendChild(D);
  const E = yy(ow, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: u,
    shellPreset: j,
    paintSwatches: Xo.map((r) => ({
      id: r.id,
      label: r.label,
      cssColor: jn(r.color, 1)
    })),
    uiState: P,
    onClose: () => {
      Si();
    }
  });
  try {
    E.mount(D);
  } catch (r) {
    try {
      E.unmount();
    } catch {
    }
    throw D.remove(), r;
  }
  const F = D.querySelector(".pano-modal-overlay"), Y = D.querySelector(".pano-modal"), L = Y == null ? void 0 : Y.querySelector("[data-stage-overlay]"), Z = Y == null ? void 0 : Y.querySelector("[data-stage-background]"), fe = Y == null ? void 0 : Y.querySelector(".pano-stage-wrap");
  if (!F || !Y || !L || !Z || !fe)
    throw E.unmount(), D.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const U = document.createElement("div");
  U.setAttribute("aria-hidden", "true"), U.style.position = "absolute", U.style.left = "0", U.style.top = "0", U.style.pointerEvents = "none", U.style.zIndex = "12", U.style.display = "none", U.style.willChange = "transform,width,height,background,border-radius", fe == null || fe.appendChild(U);
  const be = document.createElement("div");
  be.className = "pano-paint-size-preview", be.setAttribute("aria-hidden", "true");
  const xe = document.createElement("div");
  xe.className = "pano-paint-size-preview-sample", be.appendChild(xe), fe == null || fe.appendChild(be);
  const C = L.getContext("2d"), we = Jr(), re = t === "cutout" ? F1({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, pe = Y.querySelector("[data-side]"), z = Y.querySelector("[data-video-element]"), J = Y.querySelector(".pano-floating-right"), _e = Y.querySelector(".pano-floating-top"), Re = Y.querySelector("[data-tool-rail]"), Fe = Y.querySelector("[data-frame-rail]"), Be = Y.querySelector("[data-paint-dock]"), wt = Y.querySelector(".pano-video-transport"), Nt = Y.querySelector("[data-selection-menu]"), Ot = Y.querySelector("[data-tooltip]"), pt = Y.querySelector("[data-camera-preview-host]"), Zt = Y.querySelector("[data-paint-color-row]"), qe = Y.querySelector("[data-paint-color-pop]"), Qt = Y.querySelector("[data-paint-color-sv]"), en = Y.querySelector("[data-paint-color-sv-cursor]"), _n = Y.querySelector("[data-paint-hue-strip]"), O = Y.querySelector("[data-paint-hue-handle]");
  let V = 0, te = 0;
  fe == null || fe.removeAttribute("data-stage-ready"), fe == null || fe.setAttribute("data-stage-loading-kind", "boot"), L.style.opacity = "1", Z.style.opacity = "0", a && (pe == null || pe.remove(), Y.classList.add("pano-modal-readonly"));
  const ge = () => {
    if (!d.customPaintSessionStart) return;
    if (Jo(d.customPaintSessionStart, d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    if (_w(d.customPaintColor)) {
      d.customPaintSessionStart = null;
      return;
    }
    const r = [
      gn(d.customPaintColor),
      ...d.customPaintHistory.filter((o) => !Jo(o, d.customPaintColor))
    ];
    d.customPaintHistory = r.slice(0, 8), d.customPaintSessionStart = null;
  }, I = (r = !1) => {
    !qe || qe.hidden || (r ? ge() : d.customPaintSessionStart = null, qe.hidden = !0, P.paintDock.colorPopOpen = !1);
  }, G = () => {
    qe && (qe.hidden && (d.customPaintSessionStart = gn(d.customPaintColor)), qe.hidden = !1, P.paintDock.colorPopOpen = !0);
  };
  Y.addEventListener("pointerdown", (r) => {
    var o;
    fo(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (Y.querySelectorAll(".pano-picker-pop").forEach((s) => {
      s.hidden = !0;
    }), I(!0), t === "cutout" && d.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (d.cutoutAspectOpen = !1, d.menuMode = "", d.menuSize.measured = !1, Ue(), he()), (o = P.frameRail) != null && o.aspectOpen && !r.target.closest(".pano-frame-aspect-control") && (P.frameRail.aspectOpen = !1)));
  });
  const ie = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, le = JSON.stringify(Td(v)), d = {
    mode: "pano",
    selectedId: ie,
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    coverage: Ht(v.coverage),
    historyController: v1(80, { entries: [le], index: 0 }),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: rr,
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
    showGrid: Pw(e == null ? void 0 : e.id, !0),
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
    frameWheelCommitTimer: 0,
    frameWheelChanged: !1,
    paintEngine: sc(),
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
  }, q = re && pt ? re.mount(pt, { shot: null }) : null;
  t === "stickers" && (d.selectedId = null, v.active.selected_sticker_id = null), d.selectedIds = d.selectedId ? [d.selectedId] : [];
  const ye = /* @__PURE__ */ new Map(), ve = /* @__PURE__ */ new Map(), Se = /* @__PURE__ */ new Map(), Ie = /* @__PURE__ */ new Map(), Pe = document.createElement("canvas");
  Pe.__panoFrameIdx = 0;
  const se = {
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
    tickErrorSignature: ""
  }, Ee = (r) => {
    const o = String(r || "default");
    L.style.cursor !== o && (L.style.cursor = o);
  }, Ke = {
    timer: 0,
    target: null
  }, Xe = {
    active: !1,
    depth: 0
  }, X = {
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
  }, Pt = 4, Ut = 9, Ze = [];
  let At = 0;
  const xn = () => {
    var M, k;
    const r = (M = fe == null ? void 0 : fe.getBoundingClientRect) == null ? void 0 : M.call(fe), o = (k = J == null ? void 0 : J.getBoundingClientRect) == null ? void 0 : k.call(J), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), c = o ? Math.max(0, Number(o.width || 0)) : 0, y = c > 0 ? c + 14 + 12 : 72, g = Math.max(280, Math.floor(s - y * 2)), w = d.fullscreen ? Math.min(1200, g) : g;
    P.videoTransport.shellMaxWidthPx = w;
  }, ai = () => {
    At || (At = window.requestAnimationFrame(() => {
      At = 0, xn();
    }));
  }, oi = () => {
    const r = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, Wc = (r) => {
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
    return !!P.videoTransport.hasAudio;
  }, Pn = typeof ResizeObserver < "u" ? new ResizeObserver(() => ai()) : null;
  Pn == null || Pn.observe(fe), J && (Pn == null || Pn.observe(J)), Ze.push(() => {
    var r;
    At && (window.cancelAnimationFrame(At), At = 0), (r = Pn == null ? void 0 : Pn.disconnect) == null || r.call(Pn);
  }), ai();
  const Ba = () => {
    X.thumbnailJobId += 1, X.thumbnailSrc = "", P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Ut;
  }, Yc = async (r, o, s) => {
    const c = String(r || "").trim();
    if (!c) {
      Ba();
      return;
    }
    const h = pw(c);
    if (h) {
      X.thumbnailSrc = c, P.videoTransport.thumbnails = h.thumbnails, P.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (X.thumbnailSrc === c && Array.isArray(P.videoTransport.thumbnails) && P.videoTransport.thumbnails.length)
      return;
    const m = ++X.thumbnailJobId;
    X.thumbnailSrc = c, P.videoTransport.thumbnails = [], P.videoTransport.thumbnailCount = Ut;
    const y = document.createElement("video");
    if (y.preload = "auto", y.muted = !0, y.playsInline = !0, y.crossOrigin = "anonymous", !await new Promise((ae) => {
      let ue = !1;
      const ne = (me) => {
        ue || (ue = !0, ae(me));
      };
      y.addEventListener("loadedmetadata", () => ne(!0), { once: !0 }), y.addEventListener("canplay", () => ne(!0), { once: !0 }), y.addEventListener("error", () => ne(!1), { once: !0 }), y.src = c, y.load();
    }) || X.thumbnailJobId !== m) return;
    const w = Math.max(1, Number(y.videoWidth || 0)), M = Math.max(1, Number(y.videoHeight || 0));
    if (w < 1 || M < 1) return;
    const k = Math.max(0, Number(y.duration || o || 0)), N = document.createElement("canvas"), T = 46, $ = Math.max(72, Math.round(w / M * T));
    N.width = $, N.height = T;
    const Q = N.getContext("2d");
    if (!Q) return;
    const B = [], W = (ae) => new Promise((ue) => {
      let ne = !1;
      const me = () => {
        ne || (ne = !0, ue());
      };
      y.addEventListener("seeked", me, { once: !0 }), y.addEventListener("error", me, { once: !0 });
      try {
        y.currentTime = ae;
      } catch {
        me();
      }
    });
    for (let ae = 0; ae < Ut; ae += 1) {
      if (X.thumbnailJobId !== m) return;
      const ue = ae / (Ut - 1), ne = k > 0 ? Math.max(0, Math.min(k - Math.max(1e-3, 0.5 / Math.max(1, Number(s || 24))), k * ue)) : 0;
      if (await W(ne), X.thumbnailJobId !== m) return;
      Q.clearRect(0, 0, $, T), Q.drawImage(y, 0, 0, $, T), B.push({
        id: `thumb-${ae}`,
        src: N.toDataURL("image/jpeg", 0.72),
        time: ne,
        label: Ks(ne)
      });
    }
    X.thumbnailJobId === m && (P.videoTransport.thumbnails = B, P.videoTransport.thumbnailCount = B.length || Ut, gw(c, {
      thumbnails: B,
      thumbnailCount: B.length || Ut,
      duration: k,
      fps: s
    }));
  }, qc = (r) => {
    const o = Math.max(1, Number(P.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, Xc = (r) => {
    if (!(z instanceof HTMLVideoElement) || Number(z.videoWidth || 0) < 1 || Number(z.videoHeight || 0) < 1) return null;
    const o = Number(z.videoWidth || 0), s = Number(z.videoHeight || 0), c = document.createElement("canvas");
    c.width = o, c.height = s, c.__panoFrameIdx = Number(c.__panoFrameIdx || 0) + 1;
    const h = c.getContext("2d");
    if (!h) return null;
    for (h.drawImage(z, 0, 0, o, s), X.frameCache.set(r, c), X.frameCacheOrder = X.frameCacheOrder.filter((m) => m !== r), X.frameCacheOrder.push(r); X.frameCacheOrder.length > Pt; ) {
      const m = X.frameCacheOrder.shift();
      m != null && X.frameCache.delete(m);
    }
    return c;
  }, Pm = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), c = Number(r.height || 0);
    if (s < 1 || c < 1) return !1;
    (Pe.width !== s || Pe.height !== c) && (Pe.width = s, Pe.height = c);
    const h = Pe.getContext("2d");
    return h ? (h.clearRect(0, 0, s, c), h.drawImage(r, 0, 0, s, c), Pe.__panoFrameIdx = Number(Pe.__panoFrameIdx || 0) + 1, o != null && (X.presentedTime = Number(o || 0)), !0) : !1;
  }, Jc = (r) => {
    const o = qc(r), s = X.frameCache.get(o) || null;
    return s ? (X.currentFrameNumber = o, Pm(s, r)) : !1;
  };
  if (Ze.push(() => {
    Ba();
  }), z instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof z.requestVideoFrameCallback != "function" || z.__panoFramePumpActive) return;
      z.__panoFramePumpActive = !0;
      const g = (w, M) => {
        z.__panoFramePumpActive = !1;
        const k = Number((M == null ? void 0 : M.mediaTime) ?? z.currentTime ?? 0), N = qc(k), T = oi();
        X.mode === "scrub" ? Math.abs(k - Number(X.editorTime || 0)) <= T && (Xc(N), Jc(X.editorTime), se.backgroundDirty = !0, se.dirty = !0, Fn({
          ready: !0,
          playing: !1,
          visible: Qn(),
          currentTime: X.editorTime,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "scrub"
        }), he({ cause: "frame_view", localOnly: !0 })) : (X.editorTime = k, X.presentedTime = k, X.requestedTime = null, X.currentFrameNumber = N, Xc(N), X.frameCounter += 1, z.dataset.panoFrameIdx = String(X.frameCounter), se.backgroundDirty = !0, se.dirty = !0, Fn({
          ready: !0,
          playing: !z.paused && !z.ended,
          visible: Qn(),
          currentTime: k,
          duration: P.videoTransport.duration,
          frameCount: P.videoTransport.frameCount,
          fps: P.videoTransport.fps,
          mode: "playback"
        }), he({ cause: "frame_view", localOnly: !0 })), se.running && (!z.paused || X.mode === "scrub") && r();
      };
      try {
        z.requestVideoFrameCallback(g);
      } catch {
        z.__panoFramePumpActive = !1;
      }
    }, o = () => {
      X.pendingPlaybackResume && (X.pendingPlaybackResume = !1, X.mode = "playback", X.requestedTime = null, hi() && (se.backgroundDirty = !0, se.dirty = !0), z.play().catch(() => {
      }));
    }, s = () => {
      X.editorTime = Number(z.currentTime || 0), Number(z.readyState || 0) >= 2 && hi() && (se.backgroundDirty = !0, se.dirty = !0), mi(), r(), he({ cause: "frame_view", localOnly: !0 });
    }, c = () => {
      X.mode = "playback", X.seeking = !1, X.requestedTime = null, mi(), r(), he({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      X.mode === "playback" && hi() && (se.backgroundDirty = !0, se.dirty = !0), mi(), he({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      Fn({
        ready: !!z.getAttribute("src"),
        playing: !z.paused && !z.ended,
        visible: Qn(),
        currentTime: X.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: X.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: z.muted,
        volume: Number(z.volume ?? P.videoTransport.volume ?? 1)
      });
    }, y = () => {
      const g = X.seeking || X.pendingPlaybackResume || X.mode === "scrub";
      if (X.seeking = !1, !g) {
        X.requestedTime = null, r();
        return;
      }
      const w = Number(X.requestedTime ?? X.editorTime ?? 0), M = Number(z.currentTime || 0);
      if (Math.abs(M - w) > oi()) {
        Ws(w);
        return;
      }
      X.mode === "scrub" && (hi(), se.backgroundDirty = !0, se.dirty = !0, he({ cause: "frame_view", localOnly: !0 })), X.requestedTime = null, o(), r();
    };
    z.addEventListener("loadedmetadata", s), z.addEventListener("loadeddata", s), z.addEventListener("canplay", s), z.addEventListener("play", c), z.addEventListener("pause", h), z.addEventListener("volumechange", m), z.addEventListener("seeked", y), Ze.push(() => z.removeEventListener("loadedmetadata", s)), Ze.push(() => z.removeEventListener("loadeddata", s)), Ze.push(() => z.removeEventListener("canplay", s)), Ze.push(() => z.removeEventListener("play", c)), Ze.push(() => z.removeEventListener("pause", h)), Ze.push(() => z.removeEventListener("volumechange", m)), Ze.push(() => z.removeEventListener("seeked", y));
  }
  function Am() {
    P.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", c = r.attr === "data-mask-tool";
      r.active = o ? r.value === d.primaryTool : s ? r.key === d.paintTool : c ? r.key === d.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function Rs(r) {
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
    return o.files && o.files.length ? Array.from(o.files).some((s) => oo(s)) : !1;
  }
  function Or(r) {
    const o = !!r;
    Xe.active !== o && (Xe.active = o, fe.classList.toggle("drop-active", o));
  }
  function Fs(r, o, s = d.viewFov, c = 140, h = 620) {
    const m = nv(d.viewYaw, r), y = o - d.viewPitch, g = s - d.viewFov, w = Math.hypot(m, y) + Math.abs(g) * 0.6, M = Math.round(K(c + w * 2.2, c, h));
    d.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: M,
      startYaw: d.viewYaw,
      startPitch: d.viewPitch,
      startFov: d.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: m
    }, d.viewInertia.active = !1, d.viewInertia.vx = 0, d.viewInertia.vy = 0, he();
  }
  ap();
  function Zn() {
    return t === "stickers" ? v.stickers : v.shots;
  }
  function Bt() {
    const r = v.painting || (v.painting = Sa(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Cm(r = "paint") {
    var h, m;
    const o = Array.isArray((m = (h = v.painting) == null ? void 0 : h[r]) == null ? void 0 : m.strokes) ? v.painting[r].strokes : [], s = [], c = /* @__PURE__ */ new Set();
    for (const y of o) {
      const g = String((y == null ? void 0 : y.actionGroupId) || "").trim();
      !g || c.has(g) || (c.add(g), s.push(g));
    }
    return s;
  }
  function Im() {
    return Cm("paint");
  }
  function Wi(r, o) {
    const s = String(o || "").trim();
    return s ? `${r === "mask" ? "mask" : "paint"}:${s}` : "";
  }
  function Yi(r) {
    const o = String(r || "").trim();
    return o ? `raster:${o}` : "";
  }
  function Rt(r) {
    const o = String(r || "").trim();
    if (!o) return "";
    const s = o.match(/^raster:(.*)$/);
    return String(s ? s[1] || "" : o).trim();
  }
  function qi(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return { layerKind: "paint", actionGroupId: "" };
    const c = s.match(/^(paint|mask):(.*)$/);
    return c ? { layerKind: c[1] === "mask" ? "mask" : "paint", actionGroupId: String(c[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
  }
  function Ls() {
    var o;
    let r = -1;
    for (const s of Array.isArray(v.stickers) ? v.stickers : [])
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Bt())
      r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0));
    for (const s of Array.isArray((o = v.painting) == null ? void 0 : o.raster_objects) ? v.painting.raster_objects : [])
      String((s == null ? void 0 : s.layerKind) || "paint") === "paint" && (r = Math.max(r, Number((s == null ? void 0 : s.z_index) || 0)));
    return r + 1;
  }
  function Zc(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const c = Bt();
    let h = c.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? Ls() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, c.push(h)), h;
  }
  function Tm(r) {
    if (!(r != null && r.centerUv)) return [];
    const o = Number(r.centerUv.u || 0), s = Number(r.centerUv.v || 0), c = Number(r.halfW || 0), h = Number(r.halfH || 0);
    return [
      {
        u: ((o - c) % 1 + 1) % 1,
        v: K(s - h, 0, 1)
      },
      {
        u: ((o + c) % 1 + 1) % 1,
        v: K(s - h, 0, 1)
      },
      {
        u: ((o + c) % 1 + 1) % 1,
        v: K(s + h, 0, 1)
      },
      {
        u: ((o - c) % 1 + 1) % 1,
        v: K(s + h, 0, 1)
      }
    ];
  }
  function Em() {
    const r = new Set(Im()), s = Bt().filter((c) => r.has(String((c == null ? void 0 : c.actionGroupId) || "")));
    return r.forEach((c) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === c) || s.push({
        id: c,
        type: "strokeGroup",
        actionGroupId: c,
        z_index: Ls(),
        locked: !1,
        frame: null
      });
    }), s.sort((c, h) => Number((c == null ? void 0 : c.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), v.painting.groups = s, s;
  }
  function Dm(r, o, s) {
    var B;
    const c = (W) => (Number(W || 0) % 1 + 1) % 1, h = [];
    for (const W of s) {
      const ae = W == null ? void 0 : W.geometry, ue = (ae == null ? void 0 : ae.geometryKind) === "lasso_fill" ? ae == null ? void 0 : ae.points : (ae == null ? void 0 : ae.processedPoints) || (ae == null ? void 0 : ae.rawPoints) || (ae == null ? void 0 : ae.points) || [];
      Array.isArray(ue) && h.push(...ue);
    }
    if (!h.length) return null;
    const m = c(((B = h[0]) == null ? void 0 : B.u) || 0);
    let y = 0, g = 0;
    h.forEach((W) => {
      const ae = c((W == null ? void 0 : W.u) || 0);
      y += m + wn(ae, m), g += Number((W == null ? void 0 : W.v) || 0);
    });
    const w = (y / h.length % 1 + 1) % 1;
    let M = 1 / 0, k = -1 / 0, N = 1 / 0, T = -1 / 0;
    h.forEach((W) => {
      const ae = c((W == null ? void 0 : W.u) || 0), ue = wn(ae, w);
      M = Math.min(M, ue), k = Math.max(k, ue);
      const ne = Number((W == null ? void 0 : W.v) || 0);
      N = Math.min(N, ne), T = Math.max(T, ne);
    });
    const $ = s.reduce((W, ae) => {
      const ue = wr(String((ae == null ? void 0 : ae.toolKind) || "pen")), ne = un[ue] || un[rr], me = Math.max(1, Number((ae == null ? void 0 : ae.size) || 10)) * Math.max(0.1, Number((ne == null ? void 0 : ne.sizeScale) ?? 1));
      return Math.max(W, me);
    }, 0), Q = Math.max(35e-4, $ / 2048);
    return {
      centerUv: { u: ((w + (M + k) * 0.5) % 1 + 1) % 1, v: K((N + T) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (k - M) * 0.5 + Q,
      halfH: (T - N) * 0.5 + Q,
      uvPad: Q
    };
  }
  function br(r, o, s) {
    const c = String(r || "").trim();
    if (!c) return null;
    const h = Bt().find((y) => String((y == null ? void 0 : y.actionGroupId) || "") === c);
    if (!h) return null;
    const m = s || An(c, o);
    return h.frame = Dm(c, o, m), h.frame;
  }
  function si() {
    var c;
    const r = (Array.isArray(v.stickers) ? v.stickers : []).map((h) => ({
      type: "sticker",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    })), o = Em().map((h) => ({
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
  function zs(r = !0) {
    var s, c, h, m, y, g;
    const o = si().filter((w) => w.type === "strokeGroup").map((w) => String(w.actionGroupId || "")).filter((w) => !!w);
    if (r) {
      const w = String(((c = (s = d.interaction) == null ? void 0 : s.stroke) == null ? void 0 : c.actionGroupId) || "").trim(), M = String(((m = (h = d.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), k = String(((g = (y = d.interaction) == null ? void 0 : y.stroke) == null ? void 0 : g.toolKind) || "").trim();
      w && M === "paint" && k !== "eraser" && !o.includes(w) && o.push(w);
    }
    return o;
  }
  function $s(r = !0) {
    var g, w, M, k, N, T;
    const o = si();
    if (!r) return o;
    const s = String(((w = (g = d.interaction) == null ? void 0 : g.stroke) == null ? void 0 : w.actionGroupId) || "").trim(), c = String(((k = (M = d.interaction) == null ? void 0 : M.stroke) == null ? void 0 : k.layerKind) || "").trim(), h = String(((T = (N = d.interaction) == null ? void 0 : N.stroke) == null ? void 0 : T.toolKind) || "").trim();
    if (!s || c !== "paint" || h === "eraser" || o.some(($) => $.type === "strokeGroup" && String($.actionGroupId || "") === s))
      return o;
    const m = bt();
    let y = o.reduce(($, Q) => Math.max($, Number((Q == null ? void 0 : Q.z_index) || 0)), -1) + 1;
    return m && Et(m) && String(m.actionGroupId || "") === s && (y = Number(m.z_index || 0)), [
      ...o,
      {
        type: "strokeGroup",
        id: s,
        actionGroupId: s,
        z_index: y,
        item: null
      }
    ].sort(($, Q) => Number(($ == null ? void 0 : $.z_index) || 0) - Number((Q == null ? void 0 : Q.z_index) || 0));
  }
  function Om() {
    return Bt().slice().sort((r, o) => Number((r == null ? void 0 : r.z_index) || 0) - Number((o == null ? void 0 : o.z_index) || 0)).map((r) => ci(Wi("paint", (r == null ? void 0 : r.actionGroupId) || (r == null ? void 0 : r.id) || ""))).filter(Boolean);
  }
  function Rm() {
    var r;
    return (Array.isArray((r = v.painting) == null ? void 0 : r.raster_objects) ? v.painting.raster_objects : []).filter((o) => String((o == null ? void 0 : o.layerKind) || "paint") === "paint").slice().sort((o, s) => Number((o == null ? void 0 : o.z_index) || 0) - Number((s == null ? void 0 : s.z_index) || 0)).map((o) => li(Yi((o == null ? void 0 : o.id) || ""))).filter(Boolean);
  }
  function Qc(r = d.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, c = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || c;
    }
    return !1;
  }
  function Fm() {
    var o, s, c, h;
    let r = null;
    try {
      const m = zs(), y = ((h = (c = (s = (o = d.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, m)) == null ? void 0 : c.displayPaint) == null ? void 0 : h.canvas) || null;
      y && (r = {
        source: y,
        revision: `${yi()}:${Ga()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function Ga() {
    var h, m, y, g, w, M, k;
    const r = d.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!Qc(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const N = ((h = r == null ? void 0 : r.stroke) == null ? void 0 : h.geometry) || null, T = String(((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.layerKind) || ""), $ = ((y = N == null ? void 0 : N.rawPoints) == null ? void 0 : y.length) ?? ((g = N == null ? void 0 : N.points) == null ? void 0 : g.length) ?? 0, Q = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${T || "paint"}_${o}_live${Q}_${$}_${d.livePaintInteractionRevision}`;
    }
    const s = String(((w = r == null ? void 0 : r.item) == null ? void 0 : w.actionGroupId) || ""), c = String(((M = r == null ? void 0 : r.item) == null ? void 0 : M.rasterObjectId) || ((k = r == null ? void 0 : r.item) == null ? void 0 : k.id) || "");
    return `_${o}_${s || c || "active"}_${d.livePaintInteractionRevision}`;
  }
  function js() {
    const r = Array.isArray(v.shots) ? v.shots : [], o = Array.isArray(v.stickers) ? v.stickers : [];
    return [...r, ...o];
  }
  function hn(r) {
    return !!r && Array.isArray(v.shots) && v.shots.includes(r);
  }
  function gt(r) {
    return !!r && Array.isArray(v.stickers) && v.stickers.includes(r);
  }
  function ln() {
    var r;
    return Array.isArray((r = v.painting) == null ? void 0 : r.raster_objects) ? v.painting.raster_objects : [];
  }
  function li(r) {
    const o = Rt(r);
    if (!o) return null;
    const s = ln().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
    return !s || String((s == null ? void 0 : s.layerKind) || "paint") !== "paint" ? null : {
      ...s,
      id: Yi(o),
      type: "rasterObject",
      rasterObjectId: o
    };
  }
  function Gt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "rasterObject") return !1;
    const o = Rt(r.rasterObjectId || r.id || "");
    return !!o && !!li(Yi(o));
  }
  function ci(r) {
    const o = qi(r), s = String(o.actionGroupId || "").trim();
    if (!s) return null;
    const c = Bt().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return c ? {
      ...c,
      id: Wi("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Et(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!ci(Wi(s, o));
  }
  function An(r, o = null) {
    const s = qi(r, o), c = String(s.actionGroupId || "").trim();
    return c ? xi(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === c) : [];
  }
  function Lm(r, o = "paint") {
    const s = String(r || "").trim(), h = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${d.mode}:${ea()}`;
    if (d.mode === "frame") {
      const m = $e(), y = String((m == null ? void 0 : m.id) || ""), g = m ? tn(m) : null;
      return `${h}:frame:${y}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((L == null ? void 0 : L.width) || 0))}:${Math.round(Number((L == null ? void 0 : L.height) || 0))}`;
  }
  function Ka(r, o, s) {
    return !r || typeof r != "object" ? r : {
      ...r,
      u: ((Number(r.u || 0) + Number(o || 0)) % 1 + 1) % 1,
      v: K(Number(r.v || 0) + Number(s || 0), 0, 1)
    };
  }
  function wn(r, o) {
    let s = Number(r || 0) - Number(o || 0);
    for (; s > 0.5; ) s -= 1;
    for (; s < -0.5; ) s += 1;
    return s;
  }
  function Vs(r, o = null, s = null) {
    var M;
    const c = qi(r, o), h = Array.isArray(s) ? s : An(c.actionGroupId, c.layerKind), m = [];
    if (h.forEach((k) => {
      const N = (k == null ? void 0 : k.geometry) || null, T = (N == null ? void 0 : N.geometryKind) === "lasso_fill" ? N == null ? void 0 : N.points : (N == null ? void 0 : N.processedPoints) || (N == null ? void 0 : N.rawPoints) || (N == null ? void 0 : N.points) || [];
      Array.isArray(T) && m.push(...T);
    }), !m.length) return { u: 0.5, v: 0.5 };
    const y = Number(((M = m[0]) == null ? void 0 : M.u) || 0);
    let g = 0, w = 0;
    return m.forEach((k) => {
      g += y + wn(Number((k == null ? void 0 : k.u) || 0), y), w += Number((k == null ? void 0 : k.v) || 0);
    }), {
      u: (g / m.length % 1 + 1) % 1,
      v: K(w / m.length, 0, 1)
    };
  }
  function Wa(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), y = wn(Number(r.u || 0), h), g = Number(r.v || 0) - m, w = Number(c || 0) * It, M = Math.cos(w), k = Math.sin(w), N = Math.max(0.02, Number(s || 1)), T = (y * M - g * k) * N, $ = (y * k + g * M) * N;
    return {
      ...r,
      u: ((h + T) % 1 + 1) % 1,
      v: K(m + $, 0, 1)
    };
  }
  function eu(r, o, s, c = null, h = null, m = null) {
    const y = qi(r, h), g = String(y.actionGroupId || "").trim();
    if (!g) return !1;
    const w = xi(y.layerKind), M = Array.isArray(c) ? new Map(c.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let k = !1;
    if (w.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== g) return;
      const T = (M == null ? void 0 : M.get(String((N == null ? void 0 : N.id) || ""))) || N, $ = N == null ? void 0 : N.geometry, Q = T == null ? void 0 : T.geometry;
      !$ || !Q || (Array.isArray(Q.points) && ($.points = Q.points.map((B) => Ka(B, o, s)), k = !0), Array.isArray(Q.rawPoints) && ($.rawPoints = Q.rawPoints.map((B) => Ka(B, o, s)), k = !0), Array.isArray(Q.processedPoints) && ($.processedPoints = Q.processedPoints.map((B) => Ka(B, o, s)), k = !0));
    }), k && m) {
      const N = Bt().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === g);
      N && (N.frame = null);
    }
    return k;
  }
  function tu(r, o = 1, s = 0, c = null, h = null, m = null) {
    const y = qi(r, h), g = String(y.actionGroupId || "").trim();
    if (!g) return !1;
    const w = xi(y.layerKind), M = Array.isArray(c) ? c : An(g, y.layerKind), k = Array.isArray(M) ? new Map(M.map(($) => [String(($ == null ? void 0 : $.id) || ""), $])) : null, N = (m == null ? void 0 : m.centerUv) ?? Vs(g, y.layerKind, M);
    let T = !1;
    if (w.forEach(($) => {
      if (String(($ == null ? void 0 : $.actionGroupId) || "").trim() !== g) return;
      const Q = (k == null ? void 0 : k.get(String(($ == null ? void 0 : $.id) || ""))) || $, B = $ == null ? void 0 : $.geometry, W = Q == null ? void 0 : Q.geometry;
      !B || !W || (Array.isArray(W.points) && (B.points = W.points.map((ae) => Wa(ae, N, o, s)), T = !0), Array.isArray(W.rawPoints) && (B.rawPoints = W.rawPoints.map((ae) => Wa(ae, N, o, s)), T = !0), Array.isArray(W.processedPoints) && (B.processedPoints = W.processedPoints.map((ae) => Wa(ae, N, o, s)), T = !0));
    }), T && m) {
      const $ = Bt().find((Q) => String((Q == null ? void 0 : Q.actionGroupId) || "") === g);
      $ && ($.frame = null);
    }
    return T;
  }
  function nu(r, o, s, c = null) {
    const h = Rt(r);
    if (!h) return !1;
    const m = ln().find((k) => String((k == null ? void 0 : k.id) || "").trim() === h);
    if (!m) return !1;
    const y = c && typeof c == "object" ? c : m, g = (y == null ? void 0 : y.transform) || {}, w = Number(g.du || 0) + Number(o || 0), M = K(Number(g.dv || 0) + Number(s || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = w, m.transform.dv = M, !0;
  }
  function zm(r, o = 1, s = null) {
    const c = Rt(r);
    if (!c) return !1;
    const h = ln().find((M) => String((M == null ? void 0 : M.id) || "").trim() === c);
    if (!h) return !1;
    const m = s && typeof s == "object" ? s : h, y = (m == null ? void 0 : m.transform) || {}, g = Math.max(0.01, Number(y.scale || 1)), w = K(g * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = w, !0;
  }
  function bt() {
    const r = String(d.selectedId || "");
    if (!r) return null;
    const o = ci(r);
    if (o) return o;
    const s = li(r);
    return s || (t === "cutout" ? js().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null : Zn().find((c) => String((c == null ? void 0 : c.id) || "") === r) || null);
  }
  function Cn() {
    const r = Array.isArray(d.selectedIds) && d.selectedIds.length ? d.selectedIds : d.selectedId ? [d.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((c) => {
      const h = String(c || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const m = h === String(d.selectedId || "") ? bt() : ci(h) || li(h) || (t === "cutout" ? js().find((y) => String((y == null ? void 0 : y.id) || "") === h) : Zn().find((y) => String((y == null ? void 0 : y.id) || "") === h));
      m && o.push(m);
    }), o;
  }
  function Hs(r = null) {
    const o = Array.isArray(r) ? r : Cn();
    if (!o || o.length < 2) return null;
    const s = o.map((M) => $t(M)).filter((M) => (M == null ? void 0 : M.visible) && Array.isArray(M.corners) && M.corners.length);
    if (!s.length) return null;
    const c = s.flatMap((M) => M.corners.map((k) => Number((k == null ? void 0 : k.x) || 0))), h = s.flatMap((M) => M.corners.map((k) => Number((k == null ? void 0 : k.y) || 0))), m = Math.min(...c), y = Math.max(...c), g = Math.min(...h), w = Math.max(...h);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (m + y) * 0.5, y: (g + w) * 0.5 },
      corners: [
        { x: m, y: g },
        { x: y, y: g },
        { x: y, y: w },
        { x: m, y: w }
      ],
      edgeMidpoints: [
        { edge: "top", x: (m + y) * 0.5, y: g, a: { x: m, y: g }, b: { x: y, y: g } },
        { edge: "right", x: y, y: (g + w) * 0.5, a: { x: y, y: g }, b: { x: y, y: w } },
        { edge: "bottom", x: (m + y) * 0.5, y: w, a: { x: y, y: w }, b: { x: m, y: w } },
        { edge: "left", x: m, y: (g + w) * 0.5, a: { x: m, y: w }, b: { x: m, y: g } }
      ],
      rotateStemBase: { x: (m + y) * 0.5, y: g },
      rotateHandle: { x: (m + y) * 0.5, y: g - 30 }
    };
  }
  function $m(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(d.selectedIds) && d.selectedIds.includes(o);
  }
  function Ya() {
    const r = bt();
    return r ? Et(r) || Gt(r) ? "stroke" : hn(r) ? "frame" : "image" : null;
  }
  function yr(r) {
    if (!r || typeof r != "object") return !1;
    if (Et(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = Bt().find((c) => String((c == null ? void 0 : c.actionGroupId) || (c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (Gt(r)) {
      const o = Rt(r.rasterObjectId || r.id || ""), s = ln().find((c) => String((c == null ? void 0 : c.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function Us(r = null) {
    const o = Array.isArray(r) ? r : Cn();
    return o.length > 0 && o.every((s) => yr(s));
  }
  function jm(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (Et(r)) {
      const c = String(r.actionGroupId || r.id || "").trim(), h = Bt().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === c);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (Gt(r)) {
      const c = Rt(r.rasterObjectId || r.id || ""), h = ln().find((m) => String((m == null ? void 0 : m.id) || "").trim() === c);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    return r.locked === s ? !1 : (r.locked = s, !0);
  }
  function Vm() {
    if (i) return;
    const r = Cn();
    if (!r.length) return;
    const o = !Us(r);
    let s = !1;
    r.forEach((c) => {
      jm(c, o) && (s = !0);
    }), s && (Qe(), ot(), Ue(), he());
  }
  function ui(r) {
    d.selectedId = (r == null ? void 0 : r.id) || null, d.selectedIds = r != null && r.id ? [r.id] : [], r && gt(r) ? v.active.selected_sticker_id = r.id || null : v.active.selected_sticker_id = null, r && hn(r) ? v.active.selected_shot_id = r.id || null : r ? hn(r) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function Hm(r, o = null) {
    const s = [], c = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((y) => {
      const g = String((y == null ? void 0 : y.id) || "").trim();
      !g || c.has(g) || (c.add(g), s.push(g));
    }), d.selectedIds = s;
    const h = String(o || "").trim();
    d.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const m = bt();
    v.active.selected_sticker_id = m && gt(m) && m.id || null, m && hn(m) ? v.active.selected_shot_id = m.id || null : s.length || (v.active.selected_shot_id = null);
  }
  function ru() {
    const r = (Array.isArray(v.shots) ? v.shots : []).map((s, c) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${c + 1}`)
    })), o = (Array.isArray(v.stickers) ? v.stickers : []).map((s, c) => {
      var m, y;
      const h = zt(s) ? String(s.id || Hr) : String(((y = (m = v.assets) == null ? void 0 : m[s.asset_id]) == null ? void 0 : y.name) || s.asset_id || s.id || `Image ${c + 1}`);
      return {
        kind: "image",
        item: s,
        label: h
      };
    });
    return [...r, ...o];
  }
  function Um(r) {
    return r === "frame" ? De.camera : r === "stroke" ? De.paintbrush_vertical_tool : De.image;
  }
  function Bs(r) {
    return !r || !r.item ? {
      label: String((r == null ? void 0 : r.label) || ""),
      icon: null
    } : {
      label: String(r.label || ""),
      icon: Um(r.kind)
    };
  }
  function iu() {
    return Ls();
  }
  function zt(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Hr || String(r.source_kind || "") === Hl;
  }
  function fi(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function Bm(r) {
    return zt(r) && fi(r) ? Yh : 1;
  }
  function Gm() {
    return d.primaryTool === "mask" ? d.maskTool : d.paintTool;
  }
  function Km() {
    return String(Gm() || "") === "lasso_fill";
  }
  function Wm() {
    if (i) return;
    const r = bt();
    !r || !zt(r) || (r.visible = fi(r), jt(), Qe(), ot(), ze(), Ue(), he());
  }
  function Ym() {
    if (i || t !== "stickers") return;
    const r = bt();
    if (!r || !zt(r)) return;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return;
    r.yaw_deg = Number(o.yaw_deg ?? r.yaw_deg ?? 0), r.pitch_deg = Number(o.pitch_deg ?? r.pitch_deg ?? 0), r.hFOV_deg = Number(o.hFOV_deg ?? r.hFOV_deg ?? 30);
    const s = Ys(Ul, () => {
      he();
    });
    s && (s.complete || s.naturalWidth || s.width) ? r.vFOV_deg = Rr(
      Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      Number(s.naturalWidth || s.width || 1),
      Number(s.naturalHeight || s.height || 1)
    ) : r.vFOV_deg = Number(o.vFOV_deg ?? r.vFOV_deg ?? 30), r.rot_deg = Number(o.rot_deg ?? r.rot_deg ?? 0), Qe(), ot(), ze(), Ue(), he();
  }
  function qm(r) {
    if (!r || !zt(r)) return null;
    const o = r.initial_pose;
    if (!o || typeof o != "object") return null;
    const s = {
      yaw_deg: Number(o.yaw_deg ?? r.yaw_deg ?? 0),
      pitch_deg: Number(o.pitch_deg ?? r.pitch_deg ?? 0),
      hFOV_deg: Number(o.hFOV_deg ?? r.hFOV_deg ?? 30),
      vFOV_deg: Number(o.vFOV_deg ?? r.vFOV_deg ?? 30),
      rot_deg: Number(o.rot_deg ?? r.rot_deg ?? 0)
    }, c = Ys(Ul, () => {
      he();
    });
    return c && (c.complete || c.naturalWidth || c.width) && (s.vFOV_deg = Rr(
      s.hFOV_deg,
      Number(c.naturalWidth || c.width || 1),
      Number(c.naturalHeight || c.height || 1)
    )), s;
  }
  function Xm() {
    const r = bt();
    if (!r || !zt(r)) return !1;
    const o = qm(r);
    if (!o) return !1;
    const s = (c, h) => Math.abs(Number(c || 0) - Number(h || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function Gs(r) {
    var s;
    const o = Na(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function au(r) {
    const o = Na(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function ou() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return cs(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function Jm() {
    const { metaKey: r } = ou(), o = au(r);
    return Array.isArray(o) && o.length > 0 && o[0] && typeof o[0] == "object" ? o[0] : o && typeof o == "object" ? o : null;
  }
  function di(r) {
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
  function Ks(r) {
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), c = o % 60;
    return `${s}:${String(c).padStart(2, "0")}`;
  }
  function Fn(r = {}) {
    const o = Number(r.currentTime ?? X.editorTime ?? 0), s = Number(r.duration ?? P.videoTransport.duration ?? 0), c = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!P.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!P.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!P.videoTransport.visible, y = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!(z instanceof HTMLVideoElement ? z.muted : P.videoTransport.muted), g = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : z instanceof HTMLVideoElement ? z.volume : P.videoTransport.volume
    ), w = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Wc(z), M = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!P.videoTransport.loop;
    Object.assign(P.videoTransport, {
      ready: c,
      playing: h,
      visible: m,
      loop: M,
      currentTime: Number.isFinite(o) ? o : 0,
      duration: Number.isFinite(s) ? s : 0,
      progressPct: s > 1e-6 ? Math.max(0, Math.min(100, o / s * 100)) : 0,
      currentTimeLabel: Ks(o),
      durationLabel: Ks(s),
      frameCount: Math.max(0, Number(r.frameCount ?? P.videoTransport.frameCount ?? 0)),
      fps: Math.max(1, Number(r.fps ?? P.videoTransport.fps ?? 24)),
      mode: String(r.mode || X.mode || "playback"),
      hasAudio: w,
      muted: y,
      volume: Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(g) ? g : 1)) * 100),
      thumbnails: Array.isArray(r.thumbnails) ? r.thumbnails : P.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(r.thumbnailCount ?? P.videoTransport.thumbnailCount ?? Ut))
    });
  }
  function Qn() {
    return !!(z instanceof HTMLVideoElement && z.getAttribute("src") && d.primaryTool !== "paint" && d.primaryTool !== "mask");
  }
  function Zm() {
    Fn({
      visible: Qn()
    });
  }
  function hi() {
    if (!(z instanceof HTMLVideoElement) || Number(z.videoWidth || 0) < 1 || Number(z.videoHeight || 0) < 1) return !1;
    const r = Number(z.videoWidth || 0), o = Number(z.videoHeight || 0);
    (Pe.width !== r || Pe.height !== o) && (Pe.width = r, Pe.height = o);
    const s = Pe.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage(z, 0, 0, r, o), Pe.__panoFrameIdx = Number(Pe.__panoFrameIdx || 0) + 1, X.presentedTime = Number(X.editorTime || z.currentTime || 0), !0) : !1;
  }
  function su() {
    return X.mode === "scrub" && Number(Pe.width || 0) > 0 && Number(Pe.height || 0) > 0 && Number(Pe.__panoFrameIdx || 0) > 0 ? Pe : z instanceof HTMLVideoElement && Number(z.videoWidth || 0) > 0 && Number(z.videoHeight || 0) > 0 && Number(z.readyState || 0) >= 2 ? z : null;
  }
  function Ws(r) {
    if (!(z instanceof HTMLVideoElement) || Number(z.videoWidth || 0) < 1 || Number(z.videoHeight || 0) < 1) return;
    const o = Math.max(0, Number(r || 0));
    if (X.requestedTime = o, !X.seeking && !(Math.abs(Number(z.currentTime || 0) - o) <= 5e-4)) {
      X.seeking = !0;
      try {
        z.currentTime = o;
      } catch {
        X.seeking = !1;
      }
    }
  }
  function mi() {
    if (!(z instanceof HTMLVideoElement)) return null;
    const { videoKey: r } = ou(), o = Gs(r)[0] || null, s = o && typeof o == "object" ? ja(o) : ri(o), c = Jm(), h = Math.max(0, Number((c == null ? void 0 : c.frames) || 0)), m = Math.max(1, Number((c == null ? void 0 : c.fps) || 24)), y = Number((c == null ? void 0 : c.duration) || (h > 0 ? h / m : 0)), g = !!(c != null && c.has_audio) || Wc(z);
    return s && z.dataset.panoSrc !== s ? (z.pause(), z.dataset.panoSrc = s, z.dataset.panoFrameIdx = "0", z.loop = !!P.videoTransport.loop, z.muted = !!P.videoTransport.muted, z.volume = Math.max(0, Math.min(1, Number(P.videoTransport.volume ?? 1))), z.src = s, z.load(), Yc(s, y, m)) : !s && z.getAttribute("src") && (z.pause(), z.removeAttribute("src"), z.load(), Ba()), z.loop !== !!P.videoTransport.loop && (z.loop = !!P.videoTransport.loop), s && (!Array.isArray(P.videoTransport.thumbnails) || P.videoTransport.thumbnails.length === 0) && Yc(s, y, m), s || Ba(), Fn({
      ready: !!s,
      playing: !z.paused && !z.ended,
      visible: !!s && d.primaryTool !== "paint" && d.primaryTool !== "mask",
      currentTime: X.editorTime,
      duration: y,
      frameCount: h,
      fps: m,
      mode: X.mode,
      hasAudio: g,
      loop: !!z.loop,
      muted: !!z.muted,
      volume: Number(z.volume ?? P.videoTransport.volume ?? 1),
      thumbnailCount: P.videoTransport.thumbnailCount
    }), s || null;
  }
  function Qm(r, o = null) {
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
  function Ys(r, o = null) {
    const s = Gs(r), c = Array.isArray(s) && s.length ? s[0] : null, h = ri(c);
    if (!h) return null;
    const m = `__ui__${r}`, y = ye.get(m);
    if (y && y.__panoSrc === h) return y;
    const g = new Image();
    return g.__panoSrc = h, za(g, h), g.onload = () => {
      $a(g, h), typeof o == "function" ? o(g) : he();
    }, g.onerror = () => {
      ni(g, h), typeof o == "function" ? o(g) : he();
    }, g.src = h, ye.set(m, g), g;
  }
  function lu(r = null) {
    const o = jo(e, ["sticker_image"], r, "sticker_image_exact");
    return o || Ys(Ul, r);
  }
  function cu(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let c = 0; c < o.length; c += 1)
      s ^= o.charCodeAt(c), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function Rr(r, o, s) {
    const c = Math.max(1, Number(o || 1)), h = Math.max(1, Number(s || 1)), m = K(Number(r || 30), 0.1, 179) * It, y = 2 * Math.atan(Math.tan(m * 0.5) * (h / c));
    return K(y * Sn, 0.1, 179);
  }
  function ep(r) {
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
      const y = Number(m.yaw_deg), g = Number(m.pitch_deg), w = Number(m.roll_deg), M = Number(m.hFOV_deg);
      if (![y, g, w, M].every(($) => Number.isFinite($))) return null;
      let k = ((y + 180) % 360 + 360) % 360 - 180;
      Object.is(k, -0) && (k = 0);
      const N = {
        yaw_deg: k,
        pitch_deg: K(g, -89.9, 89.9),
        roll_deg: w,
        hFOV_deg: K(M, 0.1, 179)
      }, T = Number(s.source_aspect);
      return Number.isFinite(T) && T > 0 && (N.source_aspect = T), N;
    } catch {
      return null;
    }
  }
  function uu(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Zo(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ft(Number.isFinite(o) ? o : 0),
        pitch_deg: K(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: K(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function tp(r) {
    var g;
    if (!r || typeof r != "object") return uu(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), c = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Number(r == null ? void 0 : r.vFOV_deg);
    let y = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const w = K(h, 0.1, 179) * It, M = K(m, 0.1, 179) * It, k = Math.tan(M * 0.5);
      if (Math.abs(k) > 1e-6) {
        const N = Math.tan(w * 0.5) / k;
        Number.isFinite(N) && N > 0 && (y = N);
      }
    }
    if (r != null && r.asset_id && ((g = v == null ? void 0 : v.assets) != null && g[r.asset_id])) {
      const w = v.assets[r.asset_id], M = Number((w == null ? void 0 : w.w) || 0), k = Number((w == null ? void 0 : w.h) || 0);
      M > 0 && k > 0 && (y = M / k);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ft(Number.isFinite(o) ? o : 0),
        pitch_deg: K(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(c) ? c : 0,
        hFOV_deg: K(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: y
    };
  }
  function np(r) {
    var c, h, m, y, g;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((w) => String((w == null ? void 0 : w.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const w = Sm(e.graph, s), { originId: M, originSlot: k } = Mm(w), N = Na(M), T = [
        N == null ? void 0 : N.output,
        N == null ? void 0 : N.result,
        (c = N == null ? void 0 : N.data) == null ? void 0 : c.output,
        (h = N == null ? void 0 : N.data) == null ? void 0 : h.result,
        (m = N == null ? void 0 : N.ui) == null ? void 0 : m.output,
        (y = N == null ? void 0 : N.ui) == null ? void 0 : y.result
      ];
      for (const $ of T) {
        if (!Array.isArray($)) continue;
        const Q = Number(k || 0), B = $[Q];
        if (typeof B == "string" && B.trim()) return B;
      }
    }
    return String(((g = Nn(e, r)) == null ? void 0 : g.value) || "");
  }
  function rp(r, o, s) {
    const c = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : ep(o);
    if (c) {
      const y = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || c.source_aspect || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(c.yaw_deg || 0),
        pitch_deg: Number(c.pitch_deg || 0),
        hFOV_deg: Number(c.hFOV_deg || 30),
        vFOV_deg: Rr(c.hFOV_deg, y, g),
        rot_deg: Number(c.roll_deg || 0)
      };
    }
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), m = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(d.viewYaw || 0),
      pitch_deg: Number(d.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: Rr(30, h, m),
      rot_deg: 0
    };
  }
  function fu(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find(($) => String(($ == null ? void 0 : $.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, c = lu(() => {
      var $;
      ($ = e.__panoExternalStickerSync) == null || $.call(e, "image-loaded");
    }), h = Qm(au("pano_sticker_input_pose"), null), m = np("sticker_state"), y = cu(h && typeof h == "object" ? JSON.stringify(h) : m), g = Array.isArray(v.stickers) ? v.stickers : v.stickers = [], w = g.findIndex(($) => String(($ == null ? void 0 : $.id) || "") === Hr);
    if (s == null) {
      w >= 0 && (g.splice(w, 1), d.selectedId === Hr && (d.selectedId = null, d.selectedIds = [], v.active.selected_sticker_id = null), ot(), ze(), Ue(), he());
      return;
    }
    const M = g.reduce(($, Q) => Math.max($, Number((Q == null ? void 0 : Q.z_index) || 0)), -1);
    let k = w >= 0 ? g[w] : null;
    const N = !k || Number(k.source_link_id ?? -1) !== Number(s) || String(k.source_state_hash || "") !== y;
    k || (k = {
      id: Hr,
      source_kind: Hl
    }, g.push(k)), k.id = Hr, k.source_kind = Hl, k.source_link_id = Number(s), k.source_state_hash = y, k.visible = k.visible !== !1;
    let T = !1;
    if (N) {
      const $ = rp(h, m, c);
      Object.assign(k, $, {
        initial_pose: { ...$ },
        visible: !0,
        z_index: M + 1
      }), T = !0;
    } else if (c && (c.complete || c.naturalWidth || c.width)) {
      const $ = Rr(
        Number(k.hFOV_deg || 30),
        Number(c.naturalWidth || c.width || 1),
        Number(c.naturalHeight || c.height || 1)
      );
      Math.abs(Number(k.vFOV_deg || 0) - $) > 1e-6 && (k.vFOV_deg = $, T = !0);
    }
    T && (ot(), ze(), Ue()), he();
  }
  function Xi(r = {}) {
    const s = r.preservePanelValues !== !1 ? bt() : null;
    s && (d.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Pi(s)
    }), d.selectedId = null, d.selectedIds = [], d.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function ip() {
    if (t !== "cutout") return;
    const r = $e();
    r && (d.selectedId = String(r.id || "") || null, d.selectedIds = d.selectedId ? [d.selectedId] : []);
  }
  function qs() {
    if (t !== "cutout") return;
    const r = $e();
    ua(P.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? De.camera : De.plus_circle
    });
  }
  function Fr() {
    const r = !!$e();
    d.mode === "frame" && !r && (d.mode = "pano"), d.outputPreviewRect = null, P.viewButtons.forEach((s) => {
      const c = s.key === d.mode;
      s.pressed = c ? "true" : "false", s.visible = !(s.key === "frame" && t !== "cutout"), s.disabled = s.key === "frame" ? !r : !1;
    });
    const o = t === "cutout" && d.mode === "frame" ? $e() : null;
    P.frameRail.visible = !!o, P.frameRail.disabled = i, P.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((s) => ({
      value: s,
      label: s,
      active: !!o && String(Pi(o)) === s
    })), o || (P.frameRail.aspectOpen = !1), P.outputPreviewToggle.visible = t === "cutout" && d.mode !== "frame" && !!$e(), t === "cutout" && P.cameraPreview && (P.cameraPreview.visible = d.mode !== "frame", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = P.cameraPreview.settled === !0 && se.pendingStableLayoutFrames <= 0 && se.hasPresentedFrame), Uu() ? ct(d.pointerPos) : Ee(d.mode === "pano" ? "grab" : "default");
  }
  function ap() {
    const o = yu({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function Xs() {
    const r = $n(d.viewYaw, d.viewPitch);
    let o = Yn(0, 1, 0);
    Math.abs(Dn(r, o)) > 0.999 && (o = Yn(0, 0, 1));
    const s = ki(Oo(o, r)), c = ki(Oo(r, s));
    return { right: s, up: c, fwd: r };
  }
  function Ji(r) {
    const { right: o, up: s, fwd: c } = Xs(), h = Dn(r, o), m = Dn(r, s), y = Dn(r, c);
    if (y <= 1e-5) return null;
    const g = L.width, w = L.height, M = d.viewFov * It, k = 2 * Math.atan(Math.tan(M / 2) * (w / g)), N = g / 2 / Math.tan(M / 2), T = w / 2 / Math.tan(k / 2);
    return {
      x: g / 2 + h / y * N,
      y: w / 2 - m / y * T,
      z: y
    };
  }
  function Js(r, o) {
    const { right: s, up: c, fwd: h } = Xs(), m = L.width, y = L.height, g = d.viewFov * It, w = 2 * Math.atan(Math.tan(g / 2) * (y / m)), M = (r - m / 2) / (m / 2) * Math.tan(g / 2), k = (y / 2 - o) / (y / 2) * Math.tan(w / 2), N = Eo(Eo(Do(s, M), Do(c, k)), h);
    return ki(N);
  }
  function vr() {
    const r = L.width, o = L.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const g = o, w = g * s;
      return { x: (r - w) * 0.5, y: 0, w, h: g };
    }
    const h = r, m = h / s;
    return { x: 0, y: (o - m) * 0.5, w: h, h: m };
  }
  function du(r) {
    var y;
    if (r && typeof r == "object" && (zt(r) || r.external === !0))
      return lu(() => {
        var g;
        (g = e.__panoExternalStickerSync) == null || g.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = ye.get(o);
    if (s) return s;
    const c = (y = v.assets) == null ? void 0 : y[o], h = Gw(c);
    if (!h) return null;
    const m = new Image();
    return za(m, h), m.onload = () => {
      $a(m, h), he();
    }, m.onerror = () => {
      ni(m, h), he();
    }, m.src = h, ye.set(o, m), m;
  }
  function hu(r, o = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const c = ve.get(s);
    if (c)
      return c.complete || c.width || c.naturalWidth, c;
    const h = new Image();
    return h.onload = () => {
      typeof o == "function" && o();
    }, h.src = s, ve.set(s, h), h;
  }
  function op(r) {
    const o = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!o) return null;
    const s = Se.get(o);
    if (s) return s.ready ? s : null;
    const c = hu(r, () => {
      const k = Se.get(o);
      k && (k.ready = !1), he({ localOnly: !0 });
    });
    if (!c || !(c.complete || c.width || c.naturalWidth)) return null;
    const h = Number(c.naturalWidth || c.width || 0), m = Number(c.naturalHeight || c.height || 0);
    if (h < 1 || m < 1) return null;
    const y = document.createElement("canvas");
    y.width = h, y.height = m;
    const g = y.getContext("2d", { willReadFrequently: !0 });
    if (!g) return null;
    g.clearRect(0, 0, h, m), g.drawImage(c, 0, 0, h, m);
    const w = g.getImageData(0, 0, h, m).data, M = { canvas: y, width: h, height: m, alpha: w, ready: !0 };
    return Se.set(o, M), M;
  }
  function sp(r, o, s = 1, c = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), y = wn(Number(r.u || 0), h), g = Number(r.v || 0) - m, w = Math.max(0.02, Number(s || 1)), M = Number(c || 0) * It, k = Math.cos(M), N = Math.sin(M), T = y / w, $ = g / w, Q = T * k + $ * N, B = -T * N + $ * k;
    return {
      ...r,
      u: ((h + Q) % 1 + 1) % 1,
      v: m + B
    };
  }
  function lp(r, o) {
    if (!r || !o) return null;
    const s = (r == null ? void 0 : r.bbox) || null;
    if (!s) return null;
    const c = (r == null ? void 0 : r.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(c.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(c.dv || 0)
    }, y = sp(
      m,
      h,
      Number(c.scale || 1),
      Number(c.rot_deg || 0)
    ), g = Number(s.u1 || 0) - Number(s.u0 || 0), w = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(g > 1e-6) || !(w > 1e-6)) return null;
    const M = wn(Number(y.u || 0), Number(s.u0 || 0)) / g, k = (Number(y.v || 0) - Number(s.v0 || 0)) / w;
    if (M < 0 || M > 1 || k < 0 || k > 1) return 0;
    const N = op(r);
    if (!N) return null;
    const T = K(Math.floor(M * N.width), 0, N.width - 1), $ = K(Math.floor(k * N.height), 0, N.height - 1);
    return Number(N.alpha[($ * N.width + T) * 4 + 3] || 0);
  }
  function mu(r, o, s, c = null) {
    if (!(o != null && o.visible) || !ir(s, o.corners)) return !1;
    const h = c || Tn(s, performance.now()), m = lp(r, h);
    return m === null ? !0 : m > 8;
  }
  function cp() {
    var c, h, m, y, g, w, M, k;
    const r = ((h = (c = d.paintEngine) == null ? void 0 : c.getErpTarget) == null ? void 0 : h.call(c, zs(!1))) || null, o = Math.max(1, Number(((m = r == null ? void 0 : r.descriptor) == null ? void 0 : m.width) || ((g = (y = r == null ? void 0 : r.displayPaint) == null ? void 0 : y.canvas) == null ? void 0 : g.width) || 2048)), s = Math.max(1, Number(((w = r == null ? void 0 : r.descriptor) == null ? void 0 : w.height) || ((k = (M = r == null ? void 0 : r.displayPaint) == null ? void 0 : M.canvas) == null ? void 0 : k.height) || 1024));
    return { width: o, height: s };
  }
  function up() {
    var $, Q, B;
    const r = d.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = mn(), c = `${Ga()}:${s.width}:${s.height}`;
    if ((($ = d._activePaintEraserPreviewInfo) == null ? void 0 : $.cacheKey) === c)
      return d._activePaintEraserPreviewInfo.value || null;
    const h = Wt(o), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const W = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = al(W, h.targetSpace, !0);
    }
    const y = Qi(s.width, s.height, { readback: !0 });
    if (!Cu(y, h, { w: s.width, h: s.height })) return null;
    const g = ((B = (Q = y.ctx) == null ? void 0 : Q.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!g) return null;
    let w = s.width, M = s.height, k = -1, N = -1;
    for (let W = 0; W < s.height; W += 1)
      for (let ae = 0; ae < s.width; ae += 1)
        g[(W * s.width + ae) * 4 + 3] <= 8 || (ae < w && (w = ae), W < M && (M = W), ae > k && (k = ae), W > N && (N = W));
    if (k < w || N < M)
      return d._activePaintEraserPreviewInfo = { cacheKey: c, value: null }, null;
    const T = {
      surface: y,
      bounds: { minX: w, minY: M, maxX: k, maxY: N },
      key: `${c}:${w}:${M}:${k}:${N}`
    };
    return d._activePaintEraserPreviewInfo = { cacheKey: c, value: T }, d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), T;
  }
  function pi() {
    d._activePaintEraserPreviewInfo = null, d._liveEraserPreviewCanvasCache = null;
  }
  function fp(r, o, s) {
    var c, h;
    if (!r) return null;
    if (r.type === "rasterObject" && ((c = r.item) != null && c.bbox)) {
      const m = r.item.bbox, y = ((h = r.item) == null ? void 0 : h.transform) || {}, g = Number(m.u0 || 0) + Number(y.du || 0), w = Number(m.u1 || 0) + Number(y.du || 0), M = Number(m.v0 || 0) + Number(y.dv || 0), k = Number(m.v1 || 0) + Number(y.dv || 0);
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(K(M, 0, 1) * s),
        maxY: Math.ceil(K(k, 0, 1) * s),
        wraps: w - g >= 1 || g < 0 || w > 1
      };
    }
    if (r.type === "strokeGroup") {
      const m = An(r.actionGroupId, "paint"), y = br(r.actionGroupId, "paint", m);
      if (!y) return null;
      const g = y.centerUv.u - y.halfW, w = y.centerUv.u + y.halfW, M = y.centerUv.v - y.halfH, k = y.centerUv.v + y.halfH;
      return {
        minX: Math.floor((g % 1 + 1) % 1 * o),
        maxX: Math.ceil((w % 1 + 1) % 1 * o),
        minY: Math.floor(K(M, 0, 1) * s),
        maxY: Math.ceil(K(k, 0, 1) * s),
        wraps: w - g >= 1 || g < 0 || w > 1
      };
    }
    return null;
  }
  function dp(r, o, s) {
    if (!r || !o) return !1;
    const c = (y) => y.wraps ? [
      { minX: 0, maxX: y.maxX, minY: y.minY, maxY: y.maxY, wraps: !1 },
      { minX: y.minX, maxX: s - 1, minY: y.minY, maxY: y.maxY, wraps: !1 }
    ] : [y], h = c(r), m = c(o);
    return h.some((y) => m.some((g) => !(y.maxX < g.minX || g.maxX < y.minX || y.maxY < g.minY || g.maxY < y.minY)));
  }
  function hp(r, o, s) {
    var me, Te, Oe, Ge, de, ee, ce;
    if (!r || !o || !((me = s == null ? void 0 : s.surface) != null && me.canvas) || o.type !== "rasterObject") return r;
    const c = Number(r.width || s.surface.canvas.width || 0), h = Number(r.height || s.surface.canvas.height || 0);
    if (c < 1 || h < 1) return r;
    const m = fp(o, c, h);
    if (m && !dp(m, s.bounds, c)) return r;
    const y = String(((Te = o.item) == null ? void 0 : Te.id) || o.id || ""), g = ((Oe = o.item) == null ? void 0 : Oe.transform) || {}, w = `${s.key}:${y}:${c}:${h}:${Number(g.du || 0).toFixed(6)}:${Number(g.dv || 0).toFixed(6)}:${Number(g.rot_deg || 0).toFixed(3)}:${Number(g.scale || 1).toFixed(4)}`, M = d._liveEraserPreviewCanvasCache instanceof Map ? d._liveEraserPreviewCanvasCache : d._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (M.has(w)) return M.get(w);
    const k = K(Math.floor(Number(((Ge = s.bounds) == null ? void 0 : Ge.minX) || 0)), 0, Math.max(0, c - 1)), N = K(Math.floor(Number(((de = s.bounds) == null ? void 0 : de.minY) || 0)), 0, Math.max(0, h - 1)), T = K(Math.ceil(Number(((ee = s.bounds) == null ? void 0 : ee.maxX) || 0)), k, Math.max(0, c - 1)), $ = K(Math.ceil(Number(((ce = s.bounds) == null ? void 0 : ce.maxY) || 0)), N, Math.max(0, h - 1)), Q = Math.max(1, T - k + 1), B = Math.max(1, $ - N + 1), W = Qi(c, h, { readback: !0 });
    W.ctx.clearRect(0, 0, c, h), W.ctx.drawImage(r, 0, 0);
    const ae = W.ctx.getImageData(k, N, Q, B);
    W.ctx.save(), W.ctx.globalCompositeOperation = "destination-out", W.ctx.drawImage(s.surface.canvas, 0, 0), W.ctx.restore();
    const ue = W.ctx.getImageData(k, N, Q, B);
    let ne = !1;
    for (let Ae = 0; Ae < Q * B; Ae += 1) {
      const ke = ae.data[Ae * 4 + 3], Me = ue.data[Ae * 4 + 3];
      if (ke > Me) {
        ne = !0;
        break;
      }
    }
    return ne ? (M.size > 64 && M.clear(), M.set(w, W.canvas), W.canvas) : (M.set(w, r), r);
  }
  function pu(r, o = null) {
    const s = Rt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), c = (r == null ? void 0 : r.bbox) || null;
    if (!s || !c) return null;
    const h = hu(r, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: y } = cp(), g = (r == null ? void 0 : r.transform) || {}, w = [
      s,
      m,
      y,
      c.u0,
      c.v0,
      c.u1,
      c.v1,
      g.du,
      g.dv,
      g.rot_deg,
      g.scale,
      ea()
    ].join(":"), M = Ie.get(w);
    if (M) return M;
    Ie.size > 64 && Ie.clear();
    const k = document.createElement("canvas");
    k.width = m, k.height = y;
    const N = k.getContext("2d");
    if (!N) return null;
    const T = Number(c.u0 || 0) * m, $ = Number(c.v0 || 0) * y, Q = Math.max(1, (Number(c.u1 || 0) - Number(c.u0 || 0)) * m), B = Math.max(1, (Number(c.v1 || 0) - Number(c.v0 || 0)) * y), W = T + Q * 0.5 + Number(g.du || 0) * m, ae = $ + B * 0.5 + Number(g.dv || 0) * y, ue = Number(g.rot_deg || 0) * It, ne = Math.max(0.01, Number(g.scale || 1));
    for (const me of [-m, 0, m])
      N.save(), N.translate(W + me, ae), N.rotate(ue), N.scale(ne, ne), N.drawImage(h, -Q * 0.5, -B * 0.5, Q, B), N.restore();
    return Ie.set(w, k), k;
  }
  function mp() {
    return Ds(v, {
      selectedId: d.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function pp(r) {
    return qh(
      v,
      (o, s, c) => du(c || o),
      { scene: r }
    );
  }
  function gu(r, o, s, c, h = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const m = _r(c);
    if (wu(o, s))
      return Mp(
        o,
        s,
        m && d.showPanorama ? c : null,
        `${h}_bg_gl`
      );
    const g = Za(), w = Qa(g), M = d.showObjects ? eo() : Zi([]), N = ha({
      stateRevision: [
        h,
        m ? di(c) : "no_bg",
        Array.isArray(w) ? w.map((B) => `${String((B == null ? void 0 : B.assetId) || "")}:${String((B == null ? void 0 : B.revision) || "")}`).join(",") : "none",
        M.length ? M.map((B) => `${String((B == null ? void 0 : B.id) || "")}:${String((B == null ? void 0 : B.revision) || "")}:${Number((B == null ? void 0 : B.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && d.showPanorama ? c : null,
      backgroundRevision: m ? `${h}:${di(c)}` : "",
      coverageDeg: Ht(v.coverage),
      scene: g,
      textures: w,
      paintSource: null,
      paintRevision: "",
      rasterEntries: M,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), T = we;
    if (!T.syncState(N)) return !1;
    const Q = T.renderToTarget(`${h}_direct`, s, {
      width: o.w,
      height: o.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    return Q ? (r.drawImage(Q, o.x, o.y, o.w, o.h), !0) : !1;
  }
  async function Zs(r, o = "sticker.png") {
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
  async function Qs(r, o) {
    const s = await new Promise((g) => r.toBlob(g, "image/png")), c = new FormData();
    c.append("image", s, o), c.append("type", "input"), c.append("subfolder", "panorama_stickers"), c.append("overwrite", "1");
    const h = await on.fetchApi("/upload/image", { method: "POST", body: c });
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
  let qa = null, Xa = !1;
  function gp() {
    const r = Id(v.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = v.painting_layer, s = yi();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function bu() {
    const r = String(e.id ?? "0"), o = Io.get(r);
    if (Xa && o) return o;
    const s = (async () => {
      var m, y, g, w, M, k, N, T, $, Q, B, W;
      const c = yi(), h = Id(v.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, qa = c, pn());
        return;
      }
      if (qa !== c && !Xa) {
        Xa = !0;
        try {
          io();
          const ae = zs(!1), ue = ((y = (m = d.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : y.call(m, ae)) || null, ne = ((g = ue == null ? void 0 : ue.displayPaint) == null ? void 0 : g.canvas) || null, me = ((w = ue == null ? void 0 : ue.committedMask) == null ? void 0 : w.canvas) || null, Te = Math.max(1, Number(((M = ue == null ? void 0 : ue.descriptor) == null ? void 0 : M.width) || (ne == null ? void 0 : ne.width) || (me == null ? void 0 : me.width) || 2048)), Oe = Math.max(1, Number(((k = ue == null ? void 0 : ue.descriptor) == null ? void 0 : k.height) || (ne == null ? void 0 : ne.height) || (me == null ? void 0 : me.height) || 1024));
          (!ne && h.totalPaintCount > 0 || !me && h.totalMaskCount > 0) && ((!d._paintLayerSyncBlankSurface || Number(((N = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== Te || Number(((T = d._paintLayerSyncBlankSurface.canvas) == null ? void 0 : T.height) || 0) !== Oe) && (d._paintLayerSyncBlankSurface = Qi(Te, Oe)), d._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Te, Oe));
          const Ge = ne || h.totalPaintCount > 0 && (($ = d._paintLayerSyncBlankSurface) == null ? void 0 : $.canvas) || null, de = me || h.totalMaskCount > 0 && ((Q = d._paintLayerSyncBlankSurface) == null ? void 0 : Q.canvas) || null;
          if (!Ge && !de) return;
          let ee = null, ce = null;
          const Ae = [];
          if (h.totalPaintCount > 0) {
            ee = await Qs(Ge, `pano_paint_${r}.png`);
            for (const ke of ae) {
              const Me = String(ke || "").trim();
              if (!Me) continue;
              const Le = ((W = (B = d.paintEngine) == null ? void 0 : B.getGroupDisplayCanvas) == null ? void 0 : W.call(B, Me)) || null;
              if (!Le) continue;
              const Ye = Me.replace(/[^a-zA-Z0-9_-]+/g, "_"), je = await Qs(Le, `pano_group_${r}_${Ye}.png`);
              je && Ae.push({
                id: Me,
                actionGroupId: Me,
                image: je
              });
            }
          }
          h.totalMaskCount > 0 && (ce = await Qs(de, `pano_mask_${r}.png`)), c === yi() && (v.painting_layer = {
            paint: ee,
            mask: ce,
            groups: Ae,
            revision: c
          }, qa = c, pn());
        } catch (ae) {
          throw ae;
        } finally {
          Xa = !1;
        }
      }
    })();
    return Io.set(r, s), s.finally(() => {
      Io.get(r) === s && Io.delete(r);
    }), s;
  }
  function Lr() {
    if (t === "cutout") {
      const g = su();
      if (g) return g;
      const w = jo(
        e,
        ["erp_image", "bg_erp"],
        () => he(),
        "background:cutout:erp_image|bg_erp"
      );
      return w && !Vl(w) ? w : Dd(e, "pano_input_images", ye, () => he()) || w || null;
    }
    const r = su();
    if (r) return r;
    const o = Dd(e, "pano_input_images", ye, () => he());
    if (o && !Vl(o)) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((g) => String((g == null ? void 0 : g.name) || "")) : [], c = s.includes("erp_image"), h = s.includes("bg_erp");
    let m = [];
    return i && (c || h) ? m = c ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], jo(e, m, () => he(), `background:${m.join("|")}`) || o || null;
  }
  function _r(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function bp() {
    let r = Gi;
    const o = [];
    if (d.showPanorama) {
      const s = Lr();
      r = bc(s, _r);
    }
    if (d.showObjects) {
      const s = Array.isArray(v.stickers) ? v.stickers : [];
      for (const c of s) {
        if ((c == null ? void 0 : c.visible) === !1) continue;
        const h = du(c);
        o.push(bc(h, _r));
      }
    }
    return sw({
      presented: se.hasPresentedFrame,
      background: r,
      stickers: o
    });
  }
  function gi() {
    const r = new Set(
      (v.stickers || []).map((o) => String((o == null ? void 0 : o.asset_id) || "")).filter((o) => !!o)
    );
    Object.keys(v.assets || {}).forEach((o) => {
      r.has(o) || (delete v.assets[o], ye.delete(o));
    });
  }
  function el(r) {
    return {
      lon: Math.atan2(r.x, r.z),
      lat: Math.asin(K(r.y, -1, 1))
    };
  }
  function tl(r, o = null) {
    const { lon: s, lat: c } = el(r), h = vr();
    let m = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const y = h.y + (0.5 - c / Math.PI) * h.h;
    if (o !== null) {
      for (; m - o > h.w / 2; ) m -= h.w;
      for (; m - o < -h.w / 2; ) m += h.w;
    }
    return { x: m, y, z: 1 };
  }
  function Ja(r) {
    const o = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = Yn(0, 1, 0);
    Math.abs(Dn(o, s)) > 0.999 && (s = Yn(0, 0, 1));
    const c = ki(Oo(s, o)), h = ki(Oo(o, c)), m = Math.tan(K(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * It), y = Math.tan(K(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * It), g = Number(r.rot_deg || r.roll_deg || 0) * It, w = Math.cos(g), M = Math.sin(g);
    return {
      centerDir: o,
      right: c,
      up: h,
      tanX: m,
      tanY: y,
      cr: w,
      sr: M
    };
  }
  function xr(r, o, s) {
    const c = o * r.cr - s * r.sr, h = o * r.sr + s * r.cr;
    return ki(Eo(Eo(r.centerDir, Do(r.right, c)), Do(r.up, h)));
  }
  function yu(r) {
    const o = Ja(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: c, v: h }) => xr(o, c * o.tanX, h * o.tanY));
  }
  function vu(r, o, s) {
    const c = Ja(r), h = (o * 2 - 1) * c.tanX, m = (1 - s * 2) * c.tanY;
    return xr(c, h, m);
  }
  function _u(r) {
    const o = (r == null ? void 0 : r.bbox) || null, s = (r == null ? void 0 : r.transform) || {};
    return o ? {
      u: (((Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5 + Number(s.du || 0)) % 1 + 1) % 1,
      v: K((Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5 + Number(s.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function yp(r) {
    var w, M, k, N;
    const o = (r == null ? void 0 : r.bbox) || null;
    if (!o) return [];
    const s = {
      u: (Number(o.u0 || 0) + Number(o.u1 || 0)) * 0.5,
      v: (Number(o.v0 || 0) + Number(o.v1 || 0)) * 0.5
    }, c = Math.max(0.01, Number(((w = r == null ? void 0 : r.transform) == null ? void 0 : w.scale) || 1)), h = Number(((M = r == null ? void 0 : r.transform) == null ? void 0 : M.rot_deg) || 0), m = Number(((k = r == null ? void 0 : r.transform) == null ? void 0 : k.du) || 0), y = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((T) => Ka(Wa(T, s, c, h), m, y));
  }
  function vp(r) {
    const o = Rt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, c = (r == null ? void 0 : r.bbox) || {}, h = `${o}:${d.mode}:${ea()}:${c.u0}:${c.v0}:${c.u1}:${c.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (d.mode === "frame") {
      const m = $e(), y = m ? tn(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((y == null ? void 0 : y.x) || 0))}:${Math.round(Number((y == null ? void 0 : y.y) || 0))}:${Math.round(Number((y == null ? void 0 : y.w) || 0))}:${Math.round(Number((y == null ? void 0 : y.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((L == null ? void 0 : L.width) || 0))}:${Math.round(Number((L == null ? void 0 : L.height) || 0))}`;
  }
  function _p(r) {
    const o = String((r == null ? void 0 : r.id) || ""), c = [
      hn(r) ? "frame" : gt(r) ? "sticker" : "item",
      o,
      d.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      Pi(r)
    ].join(":");
    if (d.mode === "frame") {
      const h = $e(), m = h ? tn(h) : null;
      return `${c}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${c}:view:${Math.round(Number(d.viewYaw || 0) * 100)}:${Math.round(Number(d.viewPitch || 0) * 100)}:${Math.round(Number(d.viewFov || 0) * 100)}:${Math.round(Number((L == null ? void 0 : L.width) || 0))}:${Math.round(Number((L == null ? void 0 : L.height) || 0))}`;
  }
  function xp() {
    var o;
    const r = String(((o = v.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? d.hqFrames && d.hqFrames > 0 ? [28, 20] : d.interaction ? [12, 9] : [20, 14] : r === "high" ? d.hqFrames && d.hqFrames > 0 ? [48, 36] : d.interaction ? [20, 14] : [36, 26] : d.hqFrames && d.hqFrames > 0 ? [40, 30] : d.interaction ? [16, 12] : [28, 20];
  }
  function xu() {
    var r;
    return !!Z && !!((r = we == null ? void 0 : we.isSupported) != null && r.call(we));
  }
  function wu(r, o) {
    return !xu() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((L == null ? void 0 : L.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((L == null ? void 0 : L.height) || 0));
  }
  function Za() {
    return d.showObjects ? mp() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function Qa(r) {
    return !d.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : pp(r);
  }
  function Su() {
    var r, o;
    return ((o = (r = d.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function wp() {
    return Su() ? `${ol()}:mask_display` : "";
  }
  function Zi(r) {
    if (!d.showMask) return r;
    const o = Su();
    if (!o) return r;
    const s = wp(), c = r.reduce((y, g) => Math.max(y, Number((g == null ? void 0 : g.zIndex) || 0)), -1), h = (Array.isArray(v.stickers) ? v.stickers : []).reduce((y, g) => Math.max(y, Number((g == null ? void 0 : g.z_index) || 0)), -1), m = Math.max(c, h);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function eo() {
    var c, h;
    const r = $s(!0), o = up(), s = [];
    for (const m of r) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const y = String(m.actionGroupId || m.id || "");
        if (!y) continue;
        const g = ((h = (c = d.paintEngine) == null ? void 0 : c.getGroupDisplayCanvas) == null ? void 0 : h.call(c, y)) || null;
        if (!g) continue;
        s.push({
          id: `paint_group:${y}`,
          source: g,
          revision: `${ol()}:${y}`,
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((m == null ? void 0 : m.type) === "rasterObject") {
        const y = m.item || null, g = Rt((y == null ? void 0 : y.id) || m.id || "");
        if (!g) continue;
        const w = pu(y, () => he());
        if (!w) continue;
        const M = hp(w, m, o), k = (y == null ? void 0 : y.transform) || {};
        s.push({
          id: `raster:${g}`,
          source: M,
          revision: [
            yi(),
            (o == null ? void 0 : o.key) || "",
            g,
            Number(k.du || 0).toFixed(6),
            Number(k.dv || 0).toFixed(6),
            Number(k.rot_deg || 0).toFixed(3),
            Number(k.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((m == null ? void 0 : m.z_index) || 0),
          opacity: 1,
          visible: (y == null ? void 0 : y.visible) !== !1
        });
      }
    }
    return Zi(s);
  }
  function Sp(r, o = "modal_bg_gl") {
    const s = Za(), c = Qa(s), h = _r(r), m = h ? di(r) : "none", y = d.showObjects ? eo() : Zi([]), g = null, w = [
      o,
      m,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((M) => String((M == null ? void 0 : M.id) || "")).join(",") : "none",
      Array.isArray(c) ? c.map((M) => `${String((M == null ? void 0 : M.assetId) || "")}:${String((M == null ? void 0 : M.revision) || "")}`).join(",") : "none",
      y.length ? y.map((M) => `${String((M == null ? void 0 : M.id) || "")}:${String((M == null ? void 0 : M.revision) || "")}:${Number((M == null ? void 0 : M.zIndex) || 0)}`).join(",") : "paint:none",
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: ha({
        stateRevision: w,
        backgroundSource: h ? r : null,
        backgroundRevision: h ? `${o}:${m}` : "",
        coverageDeg: Ht(v.coverage),
        scene: s,
        textures: c,
        paintSource: g,
        paintRevision: "",
        rasterEntries: y,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || c.length > 0 || y.length > 0
    };
  }
  function nl() {
    if (!Z) return;
    const r = Z.getContext("webgl2");
    if (r)
      r.viewport(0, 0, Z.width, Z.height), r.clearColor(0, 0, 0, 1), r.clear(r.COLOR_BUFFER_BIT);
    else {
      const o = Z.getContext("2d");
      o && (o.clearRect(0, 0, Z.width, Z.height), o.fillStyle = "#070707", o.fillRect(0, 0, Z.width, Z.height));
    }
    se.backgroundWasVisible = !1, se.backgroundDirty = !1;
  }
  function Mp(r, o, s, c = "modal_bg_gl") {
    var M;
    if (!wu(r, o)) return !1;
    if (!se.backgroundDirty && se.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = Sp(s, c);
    if (!m || !we.syncState(h))
      return nl(), !1;
    const g = we.renderToTarget("modal_pano", o, {
      width: r.w,
      height: r.h,
      dpr: window.devicePixelRatio || 1,
      backgroundOpacity: 1,
      showMaskTint: !1
    }), w = (M = Z == null ? void 0 : Z.getContext) == null ? void 0 : M.call(Z, "2d");
    return !g || !w ? (nl(), !1) : (w.clearRect(0, 0, Z.width, Z.height), w.drawImage(g, 0, 0, Z.width, Z.height), se.backgroundWasVisible = !0, se.backgroundDirty = !1, !0);
  }
  function Np(r = !1) {
    const o = L.width, s = L.height, c = vr();
    if (C.globalAlpha = 1, C.lineWidth = 1, r || (C.fillStyle = "#070707", C.fillRect(0, 0, o, s), C.fillStyle = "#070707", C.fillRect(c.x, c.y, c.w, c.h)), io(), gu(
      C,
      { x: c.x, y: c.y, w: c.w, h: c.h },
      { mode: "unwrap" },
      Lr(),
      "modal_unwrap"
    ), d.showGrid && !d.fullscreen) {
      C.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const y = c.x + c.w * m / 16;
        C.beginPath(), C.moveTo(y, c.y), C.lineTo(y, c.y + c.h), C.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const y = c.y + c.h * m / 8;
        C.beginPath(), C.moveTo(c.x, y), C.lineTo(c.x + c.w, y), C.stroke();
      }
      C.strokeStyle = "rgba(250, 250, 250, 0.86)", C.lineWidth = 1.2, C.beginPath(), C.moveTo(c.x, c.y + c.h / 2), C.lineTo(c.x + c.w, c.y + c.h / 2), C.stroke(), C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center";
      const h = c.y + c.h * 0.57;
      C.fillText("Left", c.x + c.w * 0.25, h), C.fillText("Front", c.x + c.w * 0.5, h), C.fillText("Right", c.x + c.w * 0.75, h), C.fillText("Back", c.x + 38, h), C.fillText("Back", c.x + c.w - 38, h);
    }
  }
  function Mu(r, o, s = 1) {
    let c = !1;
    C.strokeStyle = o, C.lineWidth = s, C.beginPath();
    for (const h of r) {
      const m = Ji(h);
      if (!m) {
        c = !1;
        continue;
      }
      c ? C.lineTo(m.x, m.y) : (C.moveTo(m.x, m.y), c = !0);
    }
    C.stroke();
  }
  function kp(r = !1) {
    const o = L.width, s = L.height;
    if (r || (xu() ? C.clearRect(0, 0, o, s) : (C.fillStyle = "#070707", C.fillRect(0, 0, o, s))), io(), gu(
      C,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: d.viewYaw,
        pitchDeg: d.viewPitch,
        fovDeg: d.viewFov,
        coverageDeg: Ht(v.coverage)
      },
      Lr(),
      "modal_pano"
    ), d.showGrid && !d.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let y = -89; y <= 89; y += 4) m.push($n(h, y));
        Mu(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let y = -180; y <= 180; y += 4) m.push($n(y, h));
        Mu(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const c = [
        { name: "Left", dir: $n(-90, 0) },
        { name: "Front", dir: $n(0, 0) },
        { name: "Right", dir: $n(90, 0) },
        { name: "Back", dir: $n(180, 0) }
      ];
      C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center", c.forEach((h) => {
        const m = Ji(h.dir);
        m && C.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function Pp(r, o = null, s = null, c = null) {
    if (d.mode === "frame") {
      const h = o || $e();
      if (!h) return [];
      const m = s || tn(h);
      return ug(r, h, m);
    }
    return Iu(r, c);
  }
  function to(r, o = null, s = null, c = null, h = null) {
    if (!r) return null;
    if (d.mode === "unwrap") {
      const y = Iu([r], h);
      return y[0] ? { x: y[0].x, y: y[0].y, z: 1 } : null;
    }
    const m = bi(r);
    return m ? er(m, o, s, c) : null;
  }
  function Ap(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), c = An(s, r.layerKind), h = br(s, r.layerKind, c), m = (h == null ? void 0 : h.centerUv) || Vs(s, r.layerKind, c), y = d.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, g = [], w = d.mode === "frame" ? $e() : null, M = w ? tn(w) : null;
    for (const ne of c) {
      const me = (ne == null ? void 0 : ne.geometry) || null, Te = (me == null ? void 0 : me.geometryKind) === "lasso_fill" ? me == null ? void 0 : me.points : (me == null ? void 0 : me.processedPoints) || (me == null ? void 0 : me.rawPoints) || (me == null ? void 0 : me.points) || [], Oe = Pp(Te, w, M, y).filter((ee) => Number.isFinite(ee == null ? void 0 : ee.x) && Number.isFinite(ee == null ? void 0 : ee.y));
      if (!Oe.length) continue;
      const Ge = wr(String((ne == null ? void 0 : ne.toolKind) || "pen")), de = un[Ge] || un[rr];
      g.push({
        points: Oe,
        closed: String((me == null ? void 0 : me.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ne == null ? void 0 : ne.size) || 10) * Math.max(0.1, Number((de == null ? void 0 : de.sizeScale) ?? 1)) + 10),
        layerKind: String((ne == null ? void 0 : ne.layerKind) || r.layerKind || "paint")
      });
    }
    const k = to(m, null, w, M, y);
    if (!k) {
      const ne = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(o, ne), ne;
    }
    const T = Tm(h).map((ne) => to(ne, k.x, w, M, y)).filter((ne) => Number.isFinite(ne == null ? void 0 : ne.x) && Number.isFinite(ne == null ? void 0 : ne.y)).map((ne) => ({ x: Number(ne.x || 0), y: Number(ne.y || 0) }));
    if (T.length < 4) {
      const ne = { visible: !1, kind: "strokeGroup" };
      return d._strokeGeomCache.set(o, ne), ne;
    }
    const $ = (ne, me) => ({
      x: (Number((ne == null ? void 0 : ne.x) || 0) + Number((me == null ? void 0 : me.x) || 0)) * 0.5,
      y: (Number((ne == null ? void 0 : ne.y) || 0) + Number((me == null ? void 0 : me.y) || 0)) * 0.5,
      a: ne,
      b: me
    }), Q = $(T[0], T[1]), B = $(T[1], T[2]), W = $(T[2], T[3]), ae = $(T[3], T[0]), ue = {
      kind: "strokeGroup",
      center: { x: Number(k.x || 0), y: Number(k.y || 0) },
      corners: T,
      edgeMidpoints: [
        { edge: "top", ...Q },
        { edge: "right", ...B },
        { edge: "bottom", ...W },
        { edge: "left", ...ae }
      ],
      rotateStemBase: { x: Q.x, y: Q.y },
      rotateHandle: { x: Q.x, y: Q.y - 30 },
      strokePaths: g,
      visible: !0
    };
    return d._strokeGeomCache.set(o, ue), ue;
  }
  function Cp(r, o) {
    const s = d.mode === "frame" ? $e() : null, c = s ? tn(s) : null, h = _u(r), m = d.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, y = to(h, null, s, c, m), w = yp(r).map((T) => to(T, (y == null ? void 0 : y.x) ?? null, s, c, m)).filter((T) => Number.isFinite(T == null ? void 0 : T.x) && Number.isFinite(T == null ? void 0 : T.y));
    if (!Array.isArray(w) || w.length < 4) {
      const T = { visible: !1, kind: "rasterObject" };
      return d._strokeGeomCache.set(o, T), T;
    }
    const M = w.slice(0, 4).map((T) => ({ x: Number((T == null ? void 0 : T.x) || 0), y: Number((T == null ? void 0 : T.y) || 0) })), N = {
      kind: "rasterObject",
      center: {
        x: M.reduce((T, $) => T + Number($.x || 0), 0) / M.length,
        y: M.reduce((T, $) => T + Number($.y || 0), 0) / M.length
      },
      corners: M,
      visible: !0
    };
    return d._strokeGeomCache.set(o, N), N;
  }
  function er(r, o = null, s = null, c = null, h = {}) {
    if (d.mode === "frame") {
      const me = s || $e(), Te = c || tn(me);
      if (!me || !Te) return null;
      const Oe = me ? ta(me, r) : null;
      return Oe ? {
        x: Number(Te.x || 0) + Number(Oe.x || 0) * Number(Te.w || 0),
        y: Number(Te.y || 0) + Number(Oe.y || 0) * Number(Te.h || 0),
        z: 1
      } : null;
    }
    if (d.mode === "unwrap") return tl(r, o);
    const { right: m, up: y, fwd: g } = Xs(), w = Dn(r, m), M = Dn(r, y), k = Dn(r, g), N = 1e-4;
    if (!Number.isFinite(k) || k <= N && !(h != null && h.clipBehind)) return null;
    const T = Math.max(k, N), $ = L.width, Q = L.height, B = d.viewFov * It, W = 2 * Math.atan(Math.tan(B / 2) * (Q / Math.max($, 1))), ae = $ / 2 / Math.tan(B / 2), ue = Q / 2 / Math.tan(W / 2), ne = Math.max($, Q) * 2;
    return {
      x: K($ / 2 + w / T * ae, -ne, $ + ne),
      y: K(Q / 2 - M / T * ue, -ne, Q + ne),
      z: T,
      rawZ: k,
      clipped: k <= N
    };
  }
  function Ip(r, o = []) {
    if (d.mode !== "pano" || gt(r)) return 1;
    const s = o.map((c) => Number((c == null ? void 0 : c.rawZ) ?? (c == null ? void 0 : c.z))).filter((c) => Number.isFinite(c));
    return s.length ? mw(0.035, 0.2, Math.min(...s)) : 1;
  }
  function Tp(r) {
    const o = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = d.mode === "frame" ? $e() : null, c = s ? tn(s) : null, h = d.mode === "pano" && (gt(r) || hn(r)), m = h ? { clipBehind: !0 } : null, y = er(o, null, s, c, m);
    if (!y) return { visible: !1 };
    const g = Ja(r), M = yu(r).map((ee) => er(ee, y.x, s, c, m)).filter((ee) => Number.isFinite(ee == null ? void 0 : ee.x) && Number.isFinite(ee == null ? void 0 : ee.y));
    if (M.length < 4) return { visible: !1 };
    const k = xr(g, 0, g.tanY), N = xr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), T = er(k, y.x, s, c, m);
    if (!T) return { visible: !1 };
    const $ = er(N, (T == null ? void 0 : T.x) ?? y.x, s, c, m), Q = (($ == null ? void 0 : $.x) ?? T.x) - T.x, B = (($ == null ? void 0 : $.y) ?? T.y) - T.y, W = Math.hypot(Q, B) || 1, ae = {
      x: T.x + Q / W * 30,
      y: T.y + B / W * 30
    }, ue = er(xr(g, 0, g.tanY), y.x, s, c, m), ne = er(xr(g, g.tanX, 0), y.x, s, c, m), me = er(xr(g, 0, -g.tanY), y.x, s, c, m), Te = er(xr(g, -g.tanX, 0), y.x, s, c, m);
    if (!ue || !ne || !me || !Te) return { visible: !1 };
    const Oe = [
      y,
      ...M,
      T,
      $,
      ue,
      ne,
      me,
      Te
    ];
    if (h && !Oe.some((ee) => Number((ee == null ? void 0 : ee.rawZ) ?? (ee == null ? void 0 : ee.z)) > 1e-4)) return { visible: !1 };
    const Ge = Ip(r, Oe), de = [
      {
        edge: "top",
        x: ue.x,
        y: ue.y,
        a: { x: M[0].x, y: M[0].y },
        b: { x: M[1].x, y: M[1].y }
      },
      {
        edge: "right",
        x: ne.x,
        y: ne.y,
        a: { x: M[1].x, y: M[1].y },
        b: { x: M[2].x, y: M[2].y }
      },
      {
        edge: "bottom",
        x: me.x,
        y: me.y,
        a: { x: M[2].x, y: M[2].y },
        b: { x: M[3].x, y: M[3].y }
      },
      {
        edge: "left",
        x: Te.x,
        y: Te.y,
        a: { x: M[3].x, y: M[3].y },
        b: { x: M[0].x, y: M[0].y }
      }
    ];
    return {
      center: { x: y.x, y: y.y },
      corners: M.map((ee) => ({ x: ee.x, y: ee.y })),
      edgeMidpoints: de,
      rotateStemBase: { x: T.x, y: T.y },
      rotateHandle: ae,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: Ge,
      visible: !0
    };
  }
  function $t(r) {
    if (Et(r)) {
      const h = String(r.actionGroupId || r.id || "").trim(), m = Lm(h, r.layerKind), y = d._strokeGeomCache.get(m);
      return y || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Ap(r, m));
    }
    if (Gt(r)) {
      const h = vp(r), m = d._strokeGeomCache.get(h);
      return m || (d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear(), Cp(r, h));
    }
    const o = _p(r), s = d._strokeGeomCache.get(o);
    if (s) return s;
    d._strokeGeomCache.size > 256 && d._strokeGeomCache.clear();
    const c = Tp(r);
    return d._strokeGeomCache.set(o, c), c;
  }
  function no(r, o, s, c = null) {
    const h = [];
    for (let m = 0; m <= s; m += 1) {
      const y = m / s;
      let g = 0, w = 0;
      o === 0 ? (g = y, w = 0) : o === 1 ? (g = 1, w = y) : o === 2 ? (g = 1 - y, w = 1) : (g = 0, w = 1 - y);
      const M = vu(r, g, w), k = d.mode === "unwrap" ? tl(M, c) : Ji(M);
      k && h.push(k);
    }
    return h;
  }
  function Ep(r, o) {
    const s = $n(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), c = d.mode === "unwrap" ? tl(s) : null, h = c ? c.x : null, m = d.mode === "pano" ? 28 : 20, y = [
      no(r, 0, m, h),
      no(r, 1, m, h),
      no(r, 2, m, h),
      no(r, 3, m, h)
    ];
    C.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", C.lineWidth = o ? 2 : 1, C.beginPath();
    let g = !1;
    for (const w of y)
      for (const M of w)
        g ? C.lineTo(M.x, M.y) : (C.moveTo(M.x, M.y), g = !0);
    C.closePath(), C.stroke();
  }
  function Dp() {
    const r = [...Array.isArray(v.shots) ? v.shots : []], o = [...Array.isArray(v.stickers) ? v.stickers : []].sort((s, c) => Number(s.z_index || 0) - Number(c.z_index || 0));
    return [...r, ...o];
  }
  function rl() {
    const r = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((s, c) => Number(c.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function ro(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function Op(r, o, s) {
    const c = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (c.length < 4) return;
    const h = K(Number((r == null ? void 0 : r.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = C.globalAlpha;
    C.globalAlpha = m * h;
    const y = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", w = o ? 3.2 : 2.6;
    ro(C, c), C.fillStyle = g, C.fill(), C.strokeStyle = y, C.lineWidth = w, C.stroke(), C.save(), C.strokeStyle = y, C.lineWidth = o ? 3.2 : 2.6, C.lineCap = "round";
    const M = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (c[0].x + c[1].x) * 0.5, y: (c[0].y + c[1].y) * 0.5 },
      { edge: "right", x: (c[1].x + c[2].x) * 0.5, y: (c[1].y + c[2].y) * 0.5 },
      { edge: "bottom", x: (c[2].x + c[3].x) * 0.5, y: (c[2].y + c[3].y) * 0.5 },
      { edge: "left", x: (c[3].x + c[0].x) * 0.5, y: (c[3].y + c[0].y) * 0.5 }
    ], k = { top: "bottom", right: "left", bottom: "top", left: "right" }, N = o ? 12 : 9;
    M.forEach((T) => {
      const Q = M.find((ue) => (ue == null ? void 0 : ue.edge) === k[T == null ? void 0 : T.edge]) || {
        x: (c[0].x + c[1].x + c[2].x + c[3].x) * 0.25,
        y: (c[0].y + c[1].y + c[2].y + c[3].y) * 0.25
      }, B = Q.x - T.x, W = Q.y - T.y, ae = Math.hypot(B, W) || 1;
      C.beginPath(), C.moveTo(T.x, T.y), C.lineTo(T.x + B / ae * N, T.y + W / ae * N), C.stroke();
    }), C.restore(), C.globalAlpha = m;
  }
  function Rp(r, o, s, c) {
    const h = K(Number((o == null ? void 0 : o.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (hn(r)) {
      Op(o, s, c);
      return;
    }
    if (gt(r)) {
      const y = C.globalAlpha;
      C.globalAlpha = y * Bm(r) * h, d.mode === "frame" ? (C.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : c ? "rgba(255, 89, 89, 0.72)" : "#71717a", C.lineWidth = s ? 2 : 1, ro(C, o.corners), C.stroke()) : Ep(r, s), C.globalAlpha = y;
      return;
    }
    const m = C.globalAlpha;
    C.globalAlpha = m * h, C.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : c ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", ro(C, o.corners), C.fill(), C.strokeStyle = s ? "rgba(255, 255, 255, 1)" : c ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", C.lineWidth = s ? 2.8 : 1.9, ro(C, o.corners), C.stroke(), C.globalAlpha = m;
  }
  function Fp(r, o, s) {
    C.fillStyle = s, o.corners.forEach((c) => {
      C.beginPath(), C.arc(c.x, c.y, 6.5, 0, Math.PI * 2), C.fill();
    }), hn(r) && (C.strokeStyle = s, C.lineCap = "round", C.lineWidth = 4, o.edgeMidpoints.forEach((c) => {
      var k, N, T, $;
      const h = (((k = c.b) == null ? void 0 : k.x) ?? c.x) - (((N = c.a) == null ? void 0 : N.x) ?? c.x), m = (((T = c.b) == null ? void 0 : T.y) ?? c.y) - ((($ = c.a) == null ? void 0 : $.y) ?? c.y), y = Math.hypot(h, m) || 1, g = h / y, w = m / y, M = 10;
      C.beginPath(), C.moveTo(c.x - g * M, c.y - w * M), C.lineTo(c.x + g * M, c.y + w * M), C.stroke();
    }), C.lineCap = "butt"), Et(r) || (C.strokeStyle = "rgba(250, 250, 250, 0.9)", C.lineWidth = 1.8, C.beginPath(), C.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), C.lineTo(o.rotateHandle.x, o.rotateHandle.y), C.stroke(), C.fillStyle = s, C.beginPath(), C.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), C.fill());
  }
  function Lp() {
    var g;
    const [r, o] = xp(), s = d.mode === "frame" ? [] : Cn(), c = s.length > 1, h = t === "cutout" ? Dp() : Zn(), m = h.map((w) => `${String((w == null ? void 0 : w.id) || "")}:${hn(w) ? "frame" : Number((w == null ? void 0 : w.z_index) || 0)}`).join("|");
    (!d._sortedItemsCache || d._sortedItemsCache.src !== h || d._sortedItemsCache.orderKey !== m) && (d._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const y = d._sortedItemsCache.sorted;
    for (const w of y) {
      const M = d.mode !== "frame" && !c && $m(w);
      if (d.mode === "frame" && !M || !d.showObjects && !hn(w)) continue;
      const k = gt(w), N = hn(w), T = yr(w);
      if (!k && !N)
        continue;
      const $ = $t(w);
      if (t !== "stickers" && !$.visible)
        continue;
      const Q = K(Number(($ == null ? void 0 : $.visibilityAlpha) ?? 1), 0, 1);
      if (!(Q <= 0.01) && (Rp(w, $, M, T), M && $.visible)) {
        const B = T ? "#ff4d4f" : k && zt(w) ? "#f59e0b" : "#0070f3", W = C.globalAlpha;
        C.globalAlpha = W * Q, Fp(w, $, B), C.globalAlpha = W;
      }
    }
    if (c) {
      const w = Hs(s);
      if (w != null && w.visible) {
        const M = Us(s) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(w.corners[0].x, w.corners[0].y);
        for (let k = 1; k < w.corners.length; k += 1) C.lineTo(w.corners[k].x, w.corners[k].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = M, w.corners.forEach((k) => {
          C.beginPath(), C.arc(k.x, k.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      }
    } else
      s.forEach((w) => {
        if (!Et(w) && !Gt(w)) return;
        const M = $t(w);
        if (!(M != null && M.visible)) return;
        const k = yr(w) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(M.corners[0].x, M.corners[0].y);
        for (let N = 1; N < M.corners.length; N += 1) C.lineTo(M.corners[N].x, M.corners[N].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = k, M.corners.forEach((N) => {
          C.beginPath(), C.arc(N.x, N.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      });
    if (((g = d.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const w = Yu(d.interaction.start, d.interaction.current);
      C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.9)", C.fillStyle = "rgba(255, 255, 255, 0.08)", C.lineWidth = 1, C.setLineDash([5, 4]), C.beginPath(), C.rect(w.x0, w.y0, w.x1 - w.x0, w.y1 - w.y0), C.fill(), C.stroke(), C.restore();
    }
    d.hqFrames && r >= 40 && o >= 30 && (d.hqFrames -= 1, d.hqFrames > 0 && he());
  }
  function zp(r) {
    const o = Ar(r), s = K(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), c = 320;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function Nu(r, o = !1) {
    const s = K(Zo(r), 0.05, 20), c = o ? 320 : 220;
    return s >= 1 ? { width: c, height: Math.max(1, Math.round(c / s)) } : { width: Math.max(1, Math.round(c * s)), height: c };
  }
  function $p(r) {
    if (!pt || !r) return !1;
    const o = pt.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || pt.clientWidth || 0)), c = Math.round(Number(o.clientHeight || pt.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(c - Number(r.height || 0)) <= 1;
  }
  function jp() {
    return `obj:${Number(d.objectVisualRevision || 0)}`;
  }
  function Vp(r, o = {}) {
    if (!r) return "";
    const s = Lr(), c = s && _r(s) ? di(s) : "no_bg", h = zp(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      ol(),
      jp(),
      Ga(),
      c,
      d.showPanorama ? "panorama:1" : "panorama:0",
      d.showObjects ? "objects:1" : "objects:0",
      d.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function Hp() {
    var T, $, Q, B;
    if (d.outputPreviewRect = null, P.outputPreviewToggle.visible = d.mode !== "frame" && !!$e(), t !== "cutout" || !P.cameraPreview) return;
    if (d.mode === "frame") {
      P.cameraPreview.visible = !1, P.cameraPreview.settled = !1;
      return;
    }
    const r = $e();
    if (!r) {
      P.cameraPreview.visible = !0, P.cameraPreview.ready = !1, P.cameraPreview.settled = !1, P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.width = 220, P.cameraPreview.height = 132, P.cameraPreview.label = "Add Frame to preview", (T = re == null ? void 0 : re.clearScene) == null || T.call(re), ($ = q == null ? void 0 : q.requestRender) == null || $.call(q);
      return;
    }
    P.cameraPreview.visible = !0;
    const o = Lr();
    if (!r || !re || !q) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", P.cameraPreview.expanded = !!d.outputPreviewExpanded, P.cameraPreview.settled = !1, P.cameraPreview.width = 220, P.cameraPreview.height = 132, (Q = re == null ? void 0 : re.clearScene) == null || Q.call(re), (B = q == null ? void 0 : q.requestRender) == null || B.call(q);
      return;
    }
    const s = Nu(r, !!d.outputPreviewExpanded);
    P.cameraPreview.width = s.width, P.cameraPreview.height = s.height, P.cameraPreview.expanded = !!d.outputPreviewExpanded;
    const c = Za(), h = Qa(c), m = _r(o), y = m ? di(o) : "none", g = d.showObjects ? eo() : Zi([]), w = ha({
      stateRevision: [
        "cutout_preview_camera",
        y,
        Array.isArray(c == null ? void 0 : c.stickers) ? c.stickers.map((W) => String((W == null ? void 0 : W.id) || "")).join(",") : "none",
        Array.isArray(h) ? h.map((W) => `${String((W == null ? void 0 : W.assetId) || "")}:${String((W == null ? void 0 : W.revision) || "")}`).join(",") : "none",
        g.length ? g.map((W) => `${String((W == null ? void 0 : W.id) || "")}:${String((W == null ? void 0 : W.revision) || "")}:${Number((W == null ? void 0 : W.zIndex) || 0)}`).join(",") : "paint:none",
        d.showPanorama ? "panorama:1" : "panorama:0",
        d.showObjects ? "objects:1" : "objects:0",
        d.showMask ? "showMask:1" : "showMask:0",
        Ht(v.coverage)
      ].join("|"),
      backgroundSource: m && d.showPanorama ? o : null,
      backgroundRevision: m ? `cutout_preview:${y}` : "",
      coverageDeg: Ht(v.coverage),
      scene: c,
      textures: h,
      rasterEntries: g,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(m || h.length > 0 || g.length > 0)) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = "Connect ERP image", P.cameraPreview.settled = !1, re.clearScene(), q.requestRender();
      return;
    }
    if (d.showPanorama && !m && h.length === 0 && g.length === 0) {
      P.cameraPreview.ready = !1, P.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", P.cameraPreview.settled = !1, re.clearScene(), q.requestRender();
      return;
    }
    re.syncScene(w), q.setView(Ar(r));
    const k = $p(s), N = k ? q.present() : !1;
    k || q.requestRender(), P.cameraPreview.ready = !0, P.cameraPreview.label = k && N ? "" : "Loading preview", P.cameraPreview.settled = k && N && se.pendingStableLayoutFrames <= 0 && se.hasPresentedFrame;
  }
  function Up(r, o, s, c = {}) {
    if (!re || !s) return !1;
    const h = Lr(), m = Za(), y = Qa(m), g = _r(h), w = d.showObjects ? eo() : Zi([]);
    return g || y.length > 0 || w.length > 0 ? (re.syncScene(ha({
      stateRevision: Vp(s, c),
      backgroundSource: g && d.showPanorama ? h : null,
      backgroundRevision: g ? `cutout_frame:${di(h)}` : "",
      coverageDeg: Ht(v.coverage),
      scene: m,
      textures: y,
      rasterEntries: w,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), re.renderShotToContext(r, o, s, c)) : !1;
  }
  function il(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), c = Number(o.y || 0);
    return vu(r, s, c);
  }
  function bi(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, c = Math.cos(s);
    return Yn(c * Math.sin(o), Math.sin(s), c * Math.cos(o));
  }
  function Bp(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function Gp(r, o, s, c = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Kt(r, "widthScale", 1),
      pressureLike: Kt(r, "pressureLike", 1)
    }, ...c, u: o, v: s };
  }
  function Kp(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function al(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const c = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (c) {
      let B = null;
      r.forEach((W) => {
        const ae = Number((W == null ? void 0 : W.u) || 0), ue = Number((W == null ? void 0 : W.v) || 0), ne = (ae % 1 + 1) % 1, me = B == null ? ne : B + wn(ne, (B % 1 + 1) % 1);
        h.set(W, { x: me, y: ue }), B = me;
      });
    }
    const m = (B) => !B || typeof B != "object" ? { x: 0, y: 0 } : h.get(B) || Bp(B), y = (B, W, ae, ue = {}) => {
      const ne = c ? (Number(W) % 1 + 1) % 1 : Number(W), me = Gp(B, ne, ae, ue);
      return h.set(me, { x: Number(W), y: Number(ae) }), me;
    }, g = (B, W, ae) => {
      const ue = m(B), ne = m(W);
      return y(B, ar(ue.x, ne.x, ae), ar(ue.y, ne.y, ae), {
        t: ar(Number((B == null ? void 0 : B.t) || 0), Number((W == null ? void 0 : W.t) || 0), ae),
        widthScale: ar(Kt(B, "widthScale", 1), Kt(W, "widthScale", 1), ae),
        pressureLike: ar(Kt(B, "pressureLike", 1), Kt(W, "pressureLike", 1), ae)
      });
    };
    if (r.length === 1) {
      const B = m(r[0]);
      return [y(r[0], B.x, B.y)];
    }
    const w = Kp(o, s), M = (B, W) => {
      const ae = [0];
      for (let ee = 1; ee < B.length; ee += 1) {
        const ce = m(B[ee - 1]), Ae = m(B[ee]);
        ae.push(ae[ee - 1] + Math.hypot(Ae.x - ce.x, Ae.y - ce.y));
      }
      const ue = ae[ae.length - 1] || 0;
      if (ue <= 1e-8) {
        const ee = B[0], ce = m(ee);
        return [y(ee, ce.x, ce.y)];
      }
      const ne = [];
      let me = 0;
      for (let ee = 0; ee <= ue + 1e-9; ee += W) {
        for (; me < ae.length - 2 && ae[me + 1] < ee; ) me += 1;
        const ce = ae[me], Ae = ae[me + 1], ke = Math.max(1e-8, Ae - ce);
        ne.push(g(B[me], B[me + 1], K((ee - ce) / ke, 0, 1)));
      }
      const Te = B[B.length - 1], Oe = m(Te), Ge = ne[ne.length - 1], de = Ge ? m(Ge) : null;
      return (!de || Math.hypot(de.x - Oe.x, de.y - Oe.y) > W * 0.35) && ne.push(y(Te, Oe.x, Oe.y)), ne;
    }, k = (B) => {
      if (!Array.isArray(B) || B.length < 3) return B ? B.slice() : [];
      const W = m(B[0]), ae = [y(B[0], W.x, W.y)];
      for (let me = 0; me < B.length - 1; me += 1) {
        const Te = B[me], Oe = B[me + 1], Ge = m(Te), de = m(Oe), ee = y(
          Te,
          Ge.x * 0.75 + de.x * 0.25,
          Ge.y * 0.75 + de.y * 0.25,
          {
            t: Number(Te.t || 0) * 0.75 + Number(Oe.t || 0) * 0.25,
            widthScale: Kt(Te, "widthScale", 1) * 0.75 + Kt(Oe, "widthScale", 1) * 0.25,
            pressureLike: Kt(Te, "pressureLike", 1) * 0.75 + Kt(Oe, "pressureLike", 1) * 0.25
          }
        ), ce = y(
          Te,
          Ge.x * 0.25 + de.x * 0.75,
          Ge.y * 0.25 + de.y * 0.75,
          {
            t: Number(Te.t || 0) * 0.25 + Number(Oe.t || 0) * 0.75,
            widthScale: Kt(Te, "widthScale", 1) * 0.25 + Kt(Oe, "widthScale", 1) * 0.75,
            pressureLike: Kt(Te, "pressureLike", 1) * 0.25 + Kt(Oe, "pressureLike", 1) * 0.75
          }
        );
        ae.push(ee, ce);
      }
      const ue = B[B.length - 1], ne = m(ue);
      return ae.push(y(ue, ne.x, ne.y)), ae;
    }, N = M(r, w);
    if (N.length < 3) return N;
    const T = s ? 2 : 1;
    let $ = N.slice();
    for (let B = 0; B < T; B += 1) $ = k($);
    return M($, Math.max(w * 0.75, 55e-5));
  }
  function Kt(r, o, s = 1) {
    const c = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(c) ? Math.max(0, c) : s;
  }
  function Wp(r) {
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
  function Qi(r, o, s = {}) {
    const c = document.createElement("canvas");
    c.width = Math.max(1, Math.round(r)), c.height = Math.max(1, Math.round(o));
    const h = c.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, c.width, c.height), h.imageSmoothingEnabled = !0), { canvas: c, ctx: h };
  }
  function ea() {
    const r = ao();
    return `${String(d.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function yi() {
    const r = ao();
    return `${String(d.paintStrokeRevision)}:${String(d.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function ol() {
    const r = Ga(), o = yi();
    return r ? `${o}:${r}` : o;
  }
  function Yp() {
    d.paintStrokeRevision += 1, d.paintCompositeRevision += 1;
  }
  function qp() {
    d.paintCompositeRevision += 1;
  }
  function Xp() {
    d._sortedItemsCache = null, d._strokeGeomCache.clear();
  }
  function ku() {
    var r, o;
    d.paintEngineRevisionKey = null, (o = (r = d.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, v), d.paintEngineRevisionKey = ea();
  }
  function Pu() {
    v.painting_layer !== null && (v.painting_layer = null), qa = "";
  }
  function jt() {
    d.objectVisualRevision = Number(d.objectVisualRevision || 0) + 1, Xp(), se.backgroundDirty = !0, se.dirty = !0;
  }
  function In({ rebuildPaintEngine: r = !1 } = {}) {
    Pu(), Yp(), jt(), r && ku();
  }
  function vi() {
    Pu(), qp(), jt();
  }
  function io() {
    var c;
    const r = ao(), o = `${r.width}x${r.height}`;
    d.paintEngineDescriptorKey !== o && (d.paintEngine = sc(r), d.paintEngineDescriptorKey = o, d.paintEngineRevisionKey = "");
    const s = ea();
    d.paintEngineRevisionKey !== s && (d.paintEngineRevisionKey = s, (c = d.paintEngine) == null || c.rebuildCommitted(v));
  }
  function ao() {
    const r = Math.max(1, A(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function mn() {
    return ao();
  }
  function Jp(r, o, s, c, h = null) {
    const m = Wp(r), y = Kt(o, "widthScale", 1) * Kt(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * s * y) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * It) * s * y) : Math.max(0.5, m.value / (2 * Math.PI) * s * y) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * y);
  }
  function Zp(r, o, s = {}) {
    const c = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), m = s.preview === !0, y = m ? 0.78 : 1;
    if (r.globalAlpha = h === "marker" ? 0.7 * y : 1, c === "mask") {
      r.fillStyle = m ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (h === "eraser") {
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const g = String((o == null ? void 0 : o.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (o == null ? void 0 : o.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, w = m ? Math.max(0.28, Number(g.a ?? 1) * 0.88) : Math.max(0.12, Number(g.a ?? 1));
    r.fillStyle = `rgba(${Math.round(Number(g.r || 0) * 255)}, ${Math.round(Number(g.g || 0) * 255)}, ${Math.round(Number(g.b || 0) * 255)}, ${w})`;
  }
  function Qp(r, o, s) {
    const c = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(c) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), c, 0, Math.PI * 2), r.fill());
  }
  function eg(r, o, s, c, h = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const m = Math.max(c.w, c.h) * 0.25;
    r.save(), Zp(r, s, h);
    const y = (g) => Qp(r, g, m);
    if (o.length === 1) {
      y(o[0]), r.restore();
      return;
    }
    for (let g = 0; g < o.length - 1; g += 1) {
      const w = o[g], M = o[g + 1];
      if (!w || !M) continue;
      const k = Number(w.x || 0), N = Number(w.y || 0), T = Number(M.x || 0), $ = Number(M.y || 0), Q = Math.max(0.5, Math.min(m, Number(w.radiusPx || 0.5))), B = Math.max(0.5, Math.min(m, Number(M.radiusPx || 0.5)));
      if (!Number.isFinite(k) || !Number.isFinite(N) || !Number.isFinite(T) || !Number.isFinite($) || !Number.isFinite(Q) || !Number.isFinite(B)) continue;
      const W = T - k, ae = $ - N, ue = Math.hypot(W, ae);
      if (!Number.isFinite(ue) || ue < 1e-6) {
        y(w);
        continue;
      }
      if (ue > Math.max(c.w, c.h) * 0.5) continue;
      const ne = Math.max(0.5, Math.min(Q, B)), me = Math.max(0.35, Math.min(ne * 0.4, 2.25)), Te = Math.max(1, Math.ceil(ue / me));
      for (let Oe = 0; Oe <= Te; Oe += 1) {
        const Ge = Oe / Te;
        y({
          x: ar(k, T, Ge),
          y: ar(N, $, Ge),
          radiusPx: ar(Q, B, Ge)
        });
      }
    }
    y(o[o.length - 1]), r.restore();
  }
  function tg(r, o, s, c) {
    eg(r, o, s, c, { preview: !1 });
  }
  function ng(r, o, s, c, h) {
    var g, w, M, k;
    if (!r || !Array.isArray(o) || o.length < 3) return;
    const m = "u", y = "v";
    if (r.save(), String((s == null ? void 0 : s.layerKind) || "") === "mask")
      r.fillStyle = "rgba(255,255,255,1)";
    else if (String((s == null ? void 0 : s.toolKind) || "") === "eraser")
      r.globalCompositeOperation = "destination-out", r.fillStyle = "rgba(0,0,0,1)";
    else {
      const N = (s == null ? void 0 : s.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      r.fillStyle = `rgba(${Math.round(Number(N.r || 0) * 255)}, ${Math.round(Number(N.g || 0) * 255)}, ${Math.round(Number(N.b || 0) * 255)}, ${Number(N.a ?? 1)})`;
    }
    r.beginPath(), r.moveTo(Number(((g = o[0]) == null ? void 0 : g[m]) || 0) * c.w, Number(((w = o[0]) == null ? void 0 : w[y]) || 0) * c.h);
    for (let N = 1; N < o.length; N += 1)
      r.lineTo(Number(((M = o[N]) == null ? void 0 : M[m]) || 0) * c.w, Number(((k = o[N]) == null ? void 0 : k[y]) || 0) * c.h);
    r.closePath(), r.fill(), r.restore();
  }
  function Au(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function rg(r, o) {
    const s = Au(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((c) => ({
      x: Number((c == null ? void 0 : c.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((c == null ? void 0 : c.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: Jp(r, c, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function Cu(r, o, s = null) {
    var g, w, M, k;
    if (!(r != null && r.ctx) || !o) return !1;
    const c = s || { w: Number(((g = r.canvas) == null ? void 0 : g.width) || 0), h: Number(((w = r.canvas) == null ? void 0 : w.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((M = o == null ? void 0 : o.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((k = o == null ? void 0 : o.geometry) == null ? void 0 : k.geometryKind) || "") === "lasso_fill")
      return ng(r.ctx, Au(h), h, c), !0;
    const y = rg(h, c);
    return y.length ? (tg(r.ctx, y, h, c), !0) : !1;
  }
  function ig(r, o, s, c = 8) {
    const h = new Uint8Array(o * s), m = [], y = new Int32Array(o * s), g = new Int32Array(o * s);
    for (let w = 0; w < s; w += 1)
      for (let M = 0; M < o; M += 1) {
        const k = w * o + M;
        if (h[k] || r[k] <= c) continue;
        let N = 0, T = 0;
        y[T] = M, g[T] = w, T += 1, h[k] = 1;
        const $ = [];
        let Q = M, B = w, W = M, ae = w;
        for (; N < T; ) {
          const ue = y[N], ne = g[N];
          N += 1, $.push({ x: ue, y: ne }), ue < Q && (Q = ue), ne < B && (B = ne), ue > W && (W = ue), ne > ae && (ae = ne);
          const me = [
            [(ue - 1 + o) % o, ne],
            [(ue + 1) % o, ne],
            [ue, ne - 1],
            [ue, ne + 1]
          ];
          for (const [Te, Oe] of me) {
            if (Oe < 0 || Oe >= s) continue;
            const Ge = Oe * o + Te;
            h[Ge] || r[Ge] <= c || (h[Ge] = 1, y[T] = Te, g[T] = Oe, T += 1);
          }
        }
        m.push({ pixels: $, minX: Q, minY: B, maxX: W, maxY: ae });
      }
    return m;
  }
  function ag(r, o) {
    const s = [...new Set((Array.isArray(r == null ? void 0 : r.pixels) ? r.pixels : []).map((w) => Number((w == null ? void 0 : w.x) || 0)).filter((w) => Number.isFinite(w)))].sort((w, M) => w - M);
    if (!s.length) return null;
    if (s.length === 1)
      return { startX: s[0], widthPx: 1 };
    let c = -1, h = 0;
    for (let w = 0; w < s.length; w += 1) {
      const M = s[w], N = (w === s.length - 1 ? s[0] + o : s[w + 1]) - M - 1;
      N > c && (c = N, h = w);
    }
    const m = (s[(h + 1) % s.length] + o) % o;
    let y = 1 / 0, g = -1 / 0;
    for (const w of s) {
      const M = (w - m + o) % o;
      y = Math.min(y, M), g = Math.max(g, M);
    }
    return {
      startX: m,
      widthPx: Math.max(1, g - y + 1)
    };
  }
  function og(r, o, s = {}) {
    var M;
    const c = Number((r == null ? void 0 : r.width) || 0), h = Number((r == null ? void 0 : r.height) || 0), m = (M = r == null ? void 0 : r.getContext) == null ? void 0 : M.call(r, "2d");
    if (!m || c < 1 || h < 1) return [];
    const y = m.getImageData(0, 0, c, h), g = new Uint8Array(c * h);
    for (let k = 0; k < g.length; k += 1) g[k] = y.data[k * 4 + 3];
    return ig(g, c, h, 8).map((k, N) => {
      const T = ag(k, c);
      if (!T) return null;
      const $ = Number(T.widthPx || 0), Q = k.maxY - k.minY + 1, B = Number(T.startX || 0), W = document.createElement("canvas");
      W.width = $, W.height = Q;
      const ae = W.getContext("2d");
      if (!ae) return null;
      const ue = ae.createImageData($, Q);
      return k.pixels.forEach(({ x: ne, y: me }) => {
        const Te = (me * c + ne) * 4, Oe = (Number(ne || 0) - B + c) % c, Ge = ((me - k.minY) * $ + Oe) * 4;
        ue.data[Ge + 0] = y.data[Te + 0], ue.data[Ge + 1] = y.data[Te + 1], ue.data[Ge + 2] = y.data[Te + 2], ue.data[Ge + 3] = y.data[Te + 3];
      }), ae.putImageData(ue, 0, 0), {
        id: Ai("raster"),
        type: "raster_frozen",
        layerKind: "paint",
        z_index: Number((s == null ? void 0 : s.z_index) || 0) + N * 1e-3,
        locked: (s == null ? void 0 : s.locked) === !0,
        bbox: {
          u0: 0,
          v0: k.minY / h,
          u1: $ / c,
          v1: (k.maxY + 1) / h
        },
        rasterDataUrl: W.toDataURL("image/png"),
        transform: {
          du: B / c,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ta(r, o) {
    if (!r || !o) return null;
    const s = Ja(r), c = Dn(o, s.centerDir);
    if (!Number.isFinite(c) || c <= 1e-6) return null;
    const h = Dn(o, s.right) / c, m = Dn(o, s.up) / c, y = h * s.cr + m * s.sr, g = -h * s.sr + m * s.cr;
    return {
      x: (y / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - g / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function sg(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (d.mode === "unwrap") {
      const s = vr();
      return r.map((c) => ({
        x: s.x + Number(c.u || 0) * s.w,
        y: s.y + Number(c.v || 0) * s.h
      }));
    }
    const o = r.map((s) => Ji(bi(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function Iu(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (d.mode === "unwrap") {
      const c = vr();
      return r.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, y = o == null ? m : Number(o || 0) + wn(m, o);
        return {
          x: c.x + y * c.w,
          y: c.y + Number(h.v || 0) * c.h
        };
      });
    }
    const s = r.map((c) => Ji(bi(c))).filter(Boolean);
    return s.every((c) => Number(c.z || 0) > 0) ? s.map((c) => ({ x: Number(c.x || 0), y: Number(c.y || 0) })) : [];
  }
  function lg(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const c = r[s], h = r[(s + 1) % r.length];
      if (!c || !h || !Number.isFinite(c.x) || !Number.isFinite(c.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(c.x), Number(h.y) - Number(c.y)) > o) return !1;
    }
    return !0;
  }
  function cg(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const c = [];
    for (const h of r) {
      const m = bi(h), y = ta(o, m);
      if (!y) return [];
      c.push({
        x: Number(s.x || 0) + Number(y.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(y.y || 0) * Number(s.h || 0)
      });
    }
    return lg(c, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? c : [];
  }
  function ug(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const c = [];
    for (const h of r) {
      const m = bi(h), y = ta(o, m);
      y && c.push({
        x: Number(s.x || 0) + Number(y.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(y.y || 0) * Number(s.h || 0)
      });
    }
    return c;
  }
  function fg() {
    var W, ae;
    const r = $e(), o = cl(r);
    if (!r || !o) return !1;
    const s = { x: o.x, y: o.y, w: o.w, h: o.h }, c = Math.max(1, Number(o.focalPx || 1)), h = s.x + s.w * 0.5, m = s.y + s.h * 0.5, { halfW: y, halfH: g } = Md(
      { width: L.width, height: L.height },
      c
    ), w = { x: h - y, y: m - g, w: y * 2, h: g * 2 }, M = {
      ...r,
      hFOV_deg: 2 * Math.atan(y / c) * Sn,
      vFOV_deg: 2 * Math.atan(g / c) * Sn
    }, k = (W = L.getBoundingClientRect) == null ? void 0 : W.call(L), N = Number.parseFloat(getComputedStyle(Y).getPropertyValue("--pano-float-radius")) || 10, T = Number((k == null ? void 0 : k.width) || 0) > 0 && Number((k == null ? void 0 : k.height) || 0) > 0 ? Math.min(L.width / k.width, L.height / k.height) : 1, $ = Math.min(N * T, s.w * 0.5, s.h * 0.5);
    C.save(), C.fillStyle = "#0a0a0a", C.fillRect(0, 0, L.width, L.height);
    const Q = d.interaction ? "draft" : String(((ae = v.ui_settings) == null ? void 0 : ae.preview_quality) || "balanced");
    return Up(C, w, M, { quality: Q }) === !0 || (C.fillStyle = "rgba(255, 255, 255, 0.03)", C.fillRect(w.x, w.y, w.w, w.h)), C.restore(), C.save(), C.fillStyle = "rgba(0, 0, 0, 0.58)", C.beginPath(), C.rect(0, 0, L.width, L.height), C.roundRect(s.x, s.y, s.w, s.h, $), C.fill("evenodd"), C.restore(), C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.12)", C.lineWidth = 1, C.beginPath(), C.roundRect(s.x + 0.5, s.y + 0.5, s.w - 1, s.h - 1, Math.max(0, $ - 0.5)), C.stroke(), C.restore(), !0;
  }
  function dg() {
    var w, M;
    if (((w = d.interaction) == null ? void 0 : w.kind) !== "paint_lasso_fill") return;
    const r = d.interaction.stroke, o = (M = r == null ? void 0 : r.geometry) == null ? void 0 : M.points;
    let s;
    if (d.mode === "frame") {
      const k = $e(), N = tn(k);
      s = cg(o, k, N);
    } else
      s = sg(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const c = String((r == null ? void 0 : r.layerKind) || "") === "mask", h = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), y = Math.round(Number(h.g || 0) * 255), g = Math.round(Number(h.b || 0) * 255);
    C.save(), C.beginPath(), C.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let k = 1; k < s.length; k++) C.lineTo(Number(s[k].x || 0), Number(s[k].y || 0));
    C.closePath(), c ? (C.lineWidth = 2, C.setLineDash([6, 6]), C.lineDashOffset = 0, C.strokeStyle = "rgba(0,0,0,0.96)", C.stroke(), C.lineDashOffset = -6, C.strokeStyle = "rgba(255,255,255,0.96)", C.stroke(), C.setLineDash([]), C.lineDashOffset = 0) : (C.lineWidth = 1.5, C.setLineDash([6, 4]), C.strokeStyle = `rgba(${m},${y},${g},1)`, C.stroke(), C.setLineDash([])), C.restore();
  }
  function hg() {
    d.mode === "frame" ? (se.frameSafeRect = Dg(), fg()) : d.mode === "unwrap" ? Np(!1) : kp(!1), t === "cutout" && Hp(), Lp(), dg(), P.fovValue = `${Math.round(d.viewFov)}°`, Math.abs(Number(d.outputPreviewAnim || 0) - Number(d.outputPreviewAnimTo || 0)) < 1e-6 && Ue(), se.hasPresentedFrame || (se.hasPresentedFrame = !0, Z.style.opacity = "1"), t === "cutout" && P.cameraPreview && (P.cameraPreview.settled = se.pendingStableLayoutFrames <= 0 && se.hasPresentedFrame && d.mode !== "frame");
    const r = bp();
    P.stageStatus = r.status, P.stageStatusDetail = r.detail, r.status === Gn ? (fe == null || fe.removeAttribute("data-stage-ready"), fe == null || fe.setAttribute("data-stage-loading-kind", r.detail)) : (fe == null || fe.setAttribute("data-stage-ready", ""), fe == null || fe.removeAttribute("data-stage-loading-kind"));
  }
  function mg(r = d.interaction) {
    if (t !== "stickers" || d.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function pg() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Fm();
  }
  function he(r = {}) {
    var g, w, M, k, N, T, $, Q, B, W;
    const o = !!r.localOnly, s = r.externalSync === !0, c = String(r.cause || ""), h = String(((g = d.interaction) == null ? void 0 : g.kind) || "");
    (!o || h === "view" || h === "pan_frame" || mg() || !!((w = d.viewTween) != null && w.active) || c === "mode" || c === "frame_view" || c === "cutout_frame") && (se.backgroundDirty = !0), o && Qc() && (d.livePaintInteractionRevision += 1, se.backgroundDirty = !0), (!o || c === "selection" || c === "mode" || c === "cutout_frame") && (qs(), Fr()), pg(), s && ((k = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null || k.call(M), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), s && !o && (($ = (T = e.graph) == null ? void 0 : T.setDirtyCanvas) == null || $.call(T, !0, !0), (W = (B = (Q = bn) == null ? void 0 : Q.canvas) == null ? void 0 : B.setDirty) == null || W.call(B, !0, !0)), se.dirty = !0;
  }
  function Tu() {
    const r = L.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return L.width !== o || L.height !== s || Z.width !== o || Z.height !== s ? (L.width = o, L.height = s, Z.width = o, Z.height = s, se.backgroundDirty = !0, se.dirty = !0, t === "cutout" && (se.pendingStableLayoutFrames = Math.max(Number(se.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function gg(r = performance.now()) {
    var o;
    if (se.lastTickTs = r, d.outputPreviewAnim !== d.outputPreviewAnimTo) {
      const s = Math.max(1, Number(d.outputPreviewAnimDurationMs)), c = K((r - Number(d.outputPreviewAnimStartTs || 0)) / s, 0, 1), m = d.outputPreviewAnimTo > d.outputPreviewAnimFrom ? hw(c) : bw(c);
      d.outputPreviewAnim = ar(d.outputPreviewAnimFrom, d.outputPreviewAnimTo, m), se.dirty = !0, c >= 1 && (d.outputPreviewAnim = d.outputPreviewAnimTo);
    }
    if ((o = d.viewTween) != null && o.active) {
      const s = d.viewTween, c = K((r - s.startTs) / s.durationMs, 0, 1), h = dw(c);
      d.viewYaw = Ft(s.startYaw + s.deltaYaw * h), d.viewPitch = s.startPitch + (s.targetPitch - s.startPitch) * h, d.viewFov = s.startFov + (s.targetFov - s.startFov) * h, se.backgroundDirty = !0, se.dirty = !0, c >= 1 && (d.viewTween = null);
    }
    if (d.viewInertia.vx = Number(Vt.state.inertia.vx || 0), d.viewInertia.vy = Number(Vt.state.inertia.vy || 0), d.viewInertia.active = !!Vt.state.inertia.active, Vt.stepInertia(r) && (d.viewInertia.vx = Number(Vt.state.inertia.vx || 0), d.viewInertia.vy = Number(Vt.state.inertia.vy || 0), d.viewInertia.active = !!Vt.state.inertia.active, se.backgroundDirty = !0, se.dirty = !0), (se.dirty || r - se.lastSizeCheckTs >= 220) && (Tu(), se.lastSizeCheckTs = r), se.pendingStableLayoutFrames > 0 && (se.pendingStableLayoutFrames -= 1, se.dirty = !0), se.dirty) {
      if (se.pendingStableLayoutFrames > 0)
        return;
      se.dirty = !1, hg();
    }
  }
  function Eu(r = performance.now()) {
    if (se.running)
      try {
        gg(r);
      } catch (o) {
        const s = String((o == null ? void 0 : o.stack) || (o == null ? void 0 : o.message) || o || "unknown editor frame error");
        se.tickErrorSignature !== s && (se.tickErrorSignature = s, console.error("[PanoramaStickers] editor frame failed", o)), P.stageStatus = Wn, P.stageStatusDetail = "frame", fe == null || fe.setAttribute("data-stage-ready", ""), fe == null || fe.removeAttribute("data-stage-loading-kind");
      } finally {
        se.running && (se.rafId = requestAnimationFrame(Eu));
      }
  }
  function bg() {
    se.running = !1, se.rafId && cancelAnimationFrame(se.rafId), se.rafId = 0;
  }
  function Qe() {
    i || (d.historyController.commitActionGroup(JSON.stringify(Td(v))), ml());
  }
  function sl(r) {
    if (i) return;
    const o = r < 0 ? d.historyController.undo() : d.historyController.redo();
    if (ml(), !o) return;
    const s = JSON.parse(o);
    Object.keys(v).forEach((c) => delete v[c]), Object.assign(v, s), d.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, d.selectedIds = d.selectedId ? [d.selectedId] : [], In(), cn(), ze(), pn(), he({ cause: "cutout_frame" });
  }
  function Du() {
    var s, c;
    const r = Array.isArray((s = d.historyController) == null ? void 0 : s.entries) ? d.historyController.entries : [], o = Number((c = d.historyController) == null ? void 0 : c.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function cn() {
    Am();
    const r = H1({
      editor: d,
      swatches: Xo,
      paintColorPopOpen: qe ? !qe.hidden : !1,
      colorToCss: jn,
      colorsApproximatelyEqual: Jo,
      rgb01ToHsv: Yl,
      hsv01ToRgb: Wl,
      getBrushPresetIdForTool: wr,
      isActiveLassoTool: Km
    });
    if (Object.assign(P.paintDock, r), Zm(), !r.visible) {
      qe && (qe.hidden = !0);
      return;
    }
    te && (clearTimeout(te), te = 0), Zt && (!r.colorEnabled && qe && !qe.hidden && (te = window.setTimeout(() => {
      qe.hidden = !0, P.paintDock.colorPopOpen = !1, te = 0;
    }, 170)), qe && (qe.style.setProperty("--picker-hue-color", r.pickerHueColor), qe.style.setProperty("--picker-sat", r.pickerSat), qe.style.setProperty("--picker-val", r.pickerVal), qe.style.setProperty("--picker-hue", r.pickerHue)), en && (en.style.left = r.pickerSvLeft, en.style.top = r.pickerSvTop), O && (O.style.left = r.pickerHueLeft));
  }
  function na() {
    const r = t === "cutout" && d.mode === "frame" ? $e() : bt();
    r && (d.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: Pi(r)
    }, ze());
  }
  function ze() {
    var Oe, Ge, de, ee;
    if (a) return;
    v.ui_settings = v.ui_settings || {};
    const r = V1(v.ui_settings);
    if (l) {
      P.sidePanel = U1({
        coverage: v.coverage,
        uiSettings: r,
        normalizeCoverageValue: Ht
      });
      return;
    }
    const o = bt(), s = t === "cutout" && d.mode === "frame" ? $e() : null, c = s || o, h = s ? [s] : Cn(), m = s ? "shot" : Ya();
    h.length > 1 && (d.panelLastValues = d.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), c && m !== "stroke" && (d.panelLastValues = {
      yaw_deg: Number(c.yaw_deg || 0),
      pitch_deg: Number(c.pitch_deg || 0),
      hFOV_deg: Number(c.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(c.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(c.rot_deg || 0),
      roll_deg: Number(c.roll_deg || 0),
      aspect_id: Pi(c)
    });
    const y = d.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = m === "stroke" ? null : c, w = g || y, M = !!g;
    d.panelWasEnabled = M, qs();
    let k = null;
    if (s) {
      const ce = Bs({ item: s, kind: "shot", label: "Frame" });
      k = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: ce.label,
        currentIcon: ce.icon || null,
        items: [{
          id: String(s.id || ""),
          label: ce.label,
          icon: ce.icon || null,
          active: !0
        }]
      };
    } else if (t === "stickers" || t === "cutout") {
      const ce = [{
        id: "",
        label: t === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      t === "stickers" ? Zn().forEach((Me, Le) => {
        var Ct, rt;
        if (!Me) return;
        const Ye = zt(Me) ? String(Me.id || Hr) : String(((rt = (Ct = v.assets) == null ? void 0 : Ct[Me.asset_id]) == null ? void 0 : rt.name) || Me.asset_id || Me.id), je = `${Le + 1}. ${Ye}${zt(Me) && fi(Me) ? " (hidden)" : ""}`, et = Bs({ item: Me, label: je, kind: "image" });
        ce.push({ id: Me.id, label: et.label, icon: et.icon, item: Me, kind: "image" });
      }) : ru().forEach((Me) => {
        if (!(Me != null && Me.item)) return;
        const Le = Bs(Me);
        ce.push({ id: Me.item.id, label: Le.label, icon: Le.icon, item: Me.item, kind: Me.kind });
      });
      const Ae = (g == null ? void 0 : g.id) || "", ke = ce.find((Me) => Me.id === Ae) || ce[0];
      k = {
        label: "Selection",
        open: !1,
        disabled: ce.length <= 1,
        currentLabel: ke.label,
        currentIcon: ke.icon || null,
        items: ce.map((Me) => ({
          id: Me.id,
          label: Me.label,
          icon: Me.icon || null,
          active: Me.id === Ae
        }))
      };
    }
    const N = [], T = (ce, Ae, ke, Me, Le) => {
      const Ye = K(Number(w[ce] || 0), ke, Me);
      N.push({
        key: ce,
        label: Ae,
        min: ke,
        max: Me,
        step: Le,
        value: Ye,
        displayValue: xw(Ye),
        fillPct: K((Ye - ke) / Math.max(1e-6, Me - ke) * 100, 0, 100),
        enabled: M && !i
      });
    }, $ = [];
    h.length > 1 ? ($.push(`Selected objects: ${h.length}`), $.push("Multi-selection supports z-order and delete.")) : (T("yaw_deg", "Yaw", -180, 180, 0.1), T("pitch_deg", "Pitch", -90, 90, 0.1), T("hFOV_deg", "H FOV", 1, 179, 0.1), T("vFOV_deg", "V FOV", 1, 179, 0.1), t === "stickers" || m === "image" ? T("rot_deg", "Rotation", -180, 180, 0.1) : T("roll_deg", "Roll", -180, 180, 0.1));
    const Q = Array.isArray((Ge = (Oe = v == null ? void 0 : v.painting) == null ? void 0 : Oe.paint) == null ? void 0 : Ge.strokes) ? v.painting.paint.strokes.length : 0, B = Array.isArray((ee = (de = v == null ? void 0 : v.painting) == null ? void 0 : de.mask) == null ? void 0 : ee.strokes) ? v.painting.mask.strokes.length : 0, W = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((ce) => String((ce == null ? void 0 : ce.name) || "")) : [], ae = km(
      e,
      W.includes("erp_image") ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"]
    ), ue = !!String((ae == null ? void 0 : ae.src) || "").trim() || Gs("pano_input_images").length > 0, ne = Array.isArray(Zn()) && Zn().length > 0 || Q > 0, me = B > 0, Te = [
      { key: "mask", label: "Mask", icon: De.circle_dashed_tool, visible: !!d.showMask, enabled: me },
      { key: "objects", label: "Paint / Images", icon: De.image, visible: !!d.showObjects, enabled: ne },
      { key: "panorama", label: "Panorama", icon: De.globe, visible: !!d.showPanorama, enabled: ue }
    ].map((ce) => ({
      ...ce,
      ariaLabel: `Toggle ${ce.label.toLowerCase()}`,
      tip: ce.visible ? "Hide" : "Show"
    }));
    P.sidePanel = B1({
      coverage: v.coverage,
      readOnly: i,
      selectionPicker: k,
      enabled: M,
      selectedKind: m,
      selectedItems: h,
      params: N,
      notes: $,
      visibilityRows: Te,
      uiSettings: r,
      normalizeCoverageValue: Ht
    });
  }
  function oo(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function Ou(r) {
    if (i || t !== "stickers" && t !== "cutout" || !oo(r)) return;
    const o = $o("asset"), s = URL.createObjectURL(r);
    try {
      const c = await new Promise((y, g) => {
        const w = new Image();
        w.onload = () => y(w), w.onerror = () => g(new Error("image load failed")), w.src = s;
      });
      ye.set(o, c);
      const h = $o("st");
      v.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: d.viewYaw,
        pitch_deg: d.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: Rr(30, Number(c.naturalWidth || c.width || 1), Number(c.naturalHeight || c.height || 1)),
        rot_deg: 0,
        z_index: iu()
      }), ui(v.stickers[v.stickers.length - 1]), ll(), Qe(), ze(), Ue(), he();
      const m = (async () => {
        const y = await Zs(r, String(r.name || o));
        (Array.isArray(v.stickers) ? v.stickers : []).filter((M) => String((M == null ? void 0 : M.asset_id) || "") === o).length && (v.assets[o] = y, gi(), ot(), ze(), Ue(), he());
      })();
      To.set(o, m);
      try {
        await m;
      } finally {
        To.delete(o);
      }
    } catch {
      delete v.assets[o], ye.delete(o);
      const c = Array.isArray(v.stickers) ? v.stickers : [], h = c.filter((m) => String((m == null ? void 0 : m.asset_id) || "") === o);
      h.length && (v.stickers = c.filter((m) => String((m == null ? void 0 : m.asset_id) || "") !== o), h.some((m) => {
        var y;
        return String((m == null ? void 0 : m.id) || "") === String(((y = d.selection) == null ? void 0 : y.id) || "");
      }) && ui(null), ze(), Ue(), he());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function Ru(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var c;
      const s = (c = o.files) == null ? void 0 : c[0];
      !s || typeof r != "function" || r(s);
    }, o.click();
  }
  function yg() {
    i || t !== "stickers" && t !== "cutout" || Ru((r) => {
      Ou(r);
    });
  }
  async function vg(r) {
    var M;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = bt();
    if (!o || !gt(o) || zt(o) || !oo(r)) return;
    const s = String(o.id || ""), c = String(o.asset_id || ""), h = c ? Wt(((M = v.assets) == null ? void 0 : M[c]) || null) : null, m = Number(o.vFOV_deg || 0), y = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, g = $o("asset"), w = URL.createObjectURL(r);
    try {
      const k = await new Promise((T, $) => {
        const Q = new Image();
        Q.onload = () => T(Q), Q.onerror = () => $(new Error("image load failed")), Q.src = w;
      });
      ye.set(g, k), o.asset_id = g, o.vFOV_deg = Rr(
        Number(o.hFOV_deg || 30),
        Number(k.naturalWidth || k.width || 1),
        Number(k.naturalHeight || k.height || 1)
      ), o.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, jt(), Qe(), ze(), Ue(), he();
      const N = (async () => {
        const T = await Zs(r, String(r.name || g));
        (Array.isArray(v.stickers) ? v.stickers : []).some((B) => String((B == null ? void 0 : B.id) || "") === s && String((B == null ? void 0 : B.asset_id) || "") === g) && (v.assets[g] = T, gi(), ot(), ze(), Ue(), he());
      })();
      To.set(g, N);
      try {
        await N;
      } finally {
        To.delete(g);
      }
    } catch {
      delete v.assets[g], ye.delete(g);
      const k = (Array.isArray(v.stickers) ? v.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === s) || null;
      k && String(k.asset_id || "") === g && (c && h && (v.assets[c] = h), k.asset_id = c, k.vFOV_deg = m, k.crop = y ? { ...y } : null), jt(), ze(), Ue(), he();
    } finally {
      URL.revokeObjectURL(w);
    }
  }
  function _g() {
    if (i) return;
    const r = bt();
    !r || !gt(r) || zt(r) || Ru((o) => {
      vg(o);
    });
  }
  async function xg() {
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
        const y = await fetch(m).then((N) => N.blob()), g = String(y.type || "image/png").split("/")[1] || "png", w = String((h == null ? void 0 : h.name) || `${c}.${g}`), M = new File([y], w, { type: y.type || "image/png" }), k = await Zs(M, w);
        v.assets[c] = {
          ...k,
          w: Number((h == null ? void 0 : h.w) || 0),
          h: Number((h == null ? void 0 : h.h) || 0)
        }, s = !0;
      } catch {
      }
    s && (ot(), he());
  }
  function wg() {
    if (i || t !== "cutout") return;
    const r = $e();
    if (r) {
      ui(r), d.mode = "pano", Fs(
        Ft(Number(r.yaw_deg || 0)),
        K(Number(r.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), ze(), Ue(), he({ cause: "cutout_frame" });
      return;
    }
    const o = Lr(), s = _r(o), c = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoWidth) || (o == null ? void 0 : o.naturalWidth) || (o == null ? void 0 : o.width) : 0) || (L == null ? void 0 : L.width) || 1
    )), h = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoHeight) || (o == null ? void 0 : o.naturalHeight) || (o == null ? void 0 : o.height) : 0) || (L == null ? void 0 : L.height) || 1
    )), m = Math.max(0.1, c / h), y = K(Number(d.viewFov || 90), 1, 179), g = K(Math.min(42, y * 0.42), 8, 96), w = K(Sn * (2 * Math.atan(Math.tan(g * It * 0.5) / Math.max(0.1, m))), 6, 72), M = ym({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Ft(Number(d.viewYaw || 0)),
      pitch_deg: K(Number(d.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: g,
      vFOV_deg: w,
      locked: !1
    });
    v.shots = [M], ui(M), ll(), d.mode = "pano", Qe(), ot(), ze(), Ue(), he({ cause: "cutout_frame" });
  }
  function Sg() {
    i || t === "cutout" && (v.shots = [], d.selectedId = null, d.selectedIds = [], d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, v.active.selected_shot_id = null, Qe(), ot(), ze(), he());
  }
  function Mg() {
    const r = Array.isArray(v.stickers) ? v.stickers : [], o = [];
    for (const s of r)
      zt(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function Fu(r, o, s = "Clear") {
    return new Promise((c) => {
      P.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: c
      };
    });
  }
  async function Ng() {
    var s, c;
    if (i || !await Fu(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    v.painting = Sa(null), In();
    const o = Mg();
    t === "stickers" ? (v.stickers = o, v.assets = {}, d.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], v.active.selected_sticker_id = ((c = o[0]) == null ? void 0 : c.id) || null, gi()) : (v.stickers = o, v.assets = {}, v.shots = [], d.selectedId = null, d.selectedIds = [], v.active.selected_sticker_id = null, v.active.selected_shot_id = null, d.mode === "frame" && (d.mode = "pano"), d.cutoutAspectOpen = !1, gi()), Qe(), ot(), ze(), Ue(), he();
  }
  async function kg(r) {
    var m, y, g, w;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", c = xi(o);
    if (!(!c.length && !(((m = d.interaction) == null ? void 0 : m.kind) === "draw" && ((y = d.interaction) == null ? void 0 : y.layerKind) === o) || !await Fu(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((g = d.interaction) == null ? void 0 : g.kind) === "draw" && ((w = d.interaction) == null ? void 0 : w.layerKind) === o) {
        const M = mn();
        M && d.paintEngine.cancelActiveStroke(M), d.interaction = null;
      }
      c.length = 0, v.painting.raster_objects = ln().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") !== o), o === "paint" && (Bt().length = 0), In(), Qe(), ot(), ze(), Ue(), cn(), he();
    }
  }
  function Pg() {
    if (i) return;
    const r = bt();
    if (!r || !gt(r) || zt(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = $o("st"), o.yaw_deg = Ft((o.yaw_deg || 0) + 8), o.z_index = iu(), v.stickers.push(o), v.active.selected_sticker_id = o.id, d.selectedId = o.id, d.selectedIds = [o.id], jt(), Qe(), ot(), Ue(), ze(), he();
  }
  function Lu() {
    var s, c, h, m, y, g;
    if (i) return;
    const r = Cn(), o = bt();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const w = new Set(r.filter((N) => Et(N)).map((N) => String(N.actionGroupId || N.id || ""))), M = new Set(r.filter((N) => Gt(N)).map((N) => Rt(N.rasterObjectId || N.id || ""))), k = new Set(r.filter(gt).map((N) => String(N.id || "")));
        w.size > 0 && (v.painting.paint.strokes = (Array.isArray((c = (s = v.painting) == null ? void 0 : s.paint) == null ? void 0 : c.strokes) ? v.painting.paint.strokes : []).filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || ""))), v.painting.groups = Bt().filter((N) => !w.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), In()), M.size > 0 && (v.painting.raster_objects = ln().filter((N) => !M.has(String((N == null ? void 0 : N.id) || ""))), vi()), k.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((N) => k.has(String((N == null ? void 0 : N.id) || "")) ? zt(N) ? (fi(N) || (N.visible = !1), !0) : !1 : !0), gi(), jt()), d.selectedId = null, d.selectedIds = [], Qe(), ot(), ze(), Ue(), he();
        return;
      }
      if (Et(o)) {
        const w = String(o.actionGroupId || o.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (h = v.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((M) => String((M == null ? void 0 : M.actionGroupId) || "").trim() !== w), v.painting.groups = Bt().filter((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() !== w), In(), d.selectedId = null, d.selectedIds = [], Qe(), ot(), ze(), Ue(), he();
        return;
      }
      if (Gt(o)) {
        const w = Rt(o.rasterObjectId || o.id || "");
        v.painting.raster_objects = ln().filter((M) => String((M == null ? void 0 : M.id) || "").trim() !== w), vi(), d.selectedId = null, d.selectedIds = [], Qe(), ot(), ze(), Ue(), he();
        return;
      }
      if (t === "stickers" || gt(o)) {
        if (zt(o)) {
          if (fi(o)) return;
          o.visible = !1, jt(), Qe(), ot(), ze(), Ue(), he();
          return;
        }
        v.stickers = v.stickers.filter((w) => w.id !== o.id), gi(), jt(), d.selectedId = ((y = v.stickers[0]) == null ? void 0 : y.id) || null, d.selectedIds = d.selectedId ? [d.selectedId] : [], v.active.selected_sticker_id = ((g = v.stickers[0]) == null ? void 0 : g.id) || null, Qe(), ot(), ze(), Ue(), he();
        return;
      }
      Sg();
    }
  }
  function zu(r, o) {
    const s = se.frameSafeRect;
    if (!r || !s || d.mode !== "frame") return !1;
    const c = Bl * jl(s, r), h = z1(L1(s, o), c);
    return r.hFOV_deg = h.hFOV_deg, r.vFOV_deg = h.vFOV_deg, !0;
  }
  function $u(r, o) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, c = (() => {
      const g = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(g)) {
        const [k, N] = g.split(":").map((T) => Number(T));
        if (Number.isFinite(k) && Number.isFinite(N)) return k >= N;
      }
      const w = Number(r.hFOV_deg || 64), M = Number(r.vFOV_deg || 40);
      return Math.abs(w - M) > 1e-6 ? w >= M : Zo(r) >= 1;
    })();
    let [h, m] = s[String(o)] || s["1:1"];
    h >= m !== c && ([h, m] = [m, h]);
    const y = h / m;
    if (!zu(r, y)) {
      const g = K(Number(r.vFOV_deg || 40), 1, 179);
      r.vFOV_deg = g, r.hFOV_deg = Nd(g, y);
    }
    r.aspect_id = `${h}:${m}`;
  }
  function ju(r) {
    if (!r) return;
    const o = String(r.aspect_id || "").trim(), s = Os(r), c = s.tanHalfX / Math.max(1e-12, s.tanHalfY), h = 1 / Math.max(1e-12, c);
    if (!zu(r, h)) {
      const m = K(Number(r.vFOV_deg || 60), 1, 179);
      r.vFOV_deg = m, r.hFOV_deg = Nd(m, h);
    }
    if (/^\d+:\d+$/.test(o)) {
      const [m, y] = o.split(":");
      r.aspect_id = `${y}:${m}`;
    } else
      r.aspect_id = Kr(r);
  }
  function Vu() {
    si().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Ag() {
    if (i) return;
    const r = Cn();
    if (!bt() || r.length === 0) return;
    Vu();
    const s = si(), c = new Set(r.map((g) => gt(g) ? `sticker:${String(g.id || "")}` : Gt(g) ? `rasterObject:${Rt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var M, k;
      const w = g.type === "sticker" ? `sticker:${String(((M = g.item) == null ? void 0 : M.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((k = g.item) == null ? void 0 : k.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      c.has(w) ? h.push(g) : m.push(g);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...m, ...h].forEach((g, w) => {
      g.type === "sticker" && g.item && (g.item.z_index = w), g.type === "strokeGroup" && g.item && (g.item.z_index = w), g.type === "rasterObject" && g.item && (g.item.z_index = w);
    }), jt(), Qe(), ot(), Ue(), he();
  }
  function Cg() {
    if (i) return;
    const r = Cn();
    if (!bt() || r.length === 0) return;
    Vu();
    const s = si(), c = new Set(r.map((g) => gt(g) ? `sticker:${String(g.id || "")}` : Gt(g) ? `rasterObject:${Rt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var M, k;
      const w = g.type === "sticker" ? `sticker:${String(((M = g.item) == null ? void 0 : M.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((k = g.item) == null ? void 0 : k.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      c.has(w) ? h.push(g) : m.push(g);
    }), !h.length || h[0] === s[0]) return;
    [...h, ...m].forEach((g, w) => {
      g.type === "sticker" && g.item && (g.item.z_index = w), g.type === "strokeGroup" && g.item && (g.item.z_index = w), g.type === "rasterObject" && g.item && (g.item.z_index = w);
    }), jt(), Qe(), ot(), Ue(), he();
  }
  function Ig() {
    i || (v.projection_model = "pinhole_rectilinear", v.alpha_mode = "straight", f && (v.output_preset = A(Number(v.output_preset || 2048))), p && (v.coverage = Ht(p.value)), b && (v.bg_color = String(b.value || v.bg_color || "#00ff00")), pn(), e.setDirtyCanvas(!0, !0));
  }
  function pn() {
    var o;
    if (i) return;
    v.coverage = Ht(v.coverage);
    const r = JSON.stringify(v);
    _ && (_.value = r, (o = _.callback) == null || o.call(_, r));
  }
  function so() {
    v.ui_settings = kw(v.ui_settings), i || pn();
  }
  function ot() {
    var r;
    i || (pn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function Tg() {
    i || gp() && bu().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function Eg(r = {}) {
    var c, h, m, y, g, w, M, k, N, T;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((h = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || h.call(c), (y = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || y.call(m), (g = e.setDirtyCanvas) == null || g.call(e, !0, !1)), s && ((M = (w = e.graph) == null ? void 0 : w.setDirtyCanvas) == null || M.call(w, !0, !0), (T = (N = (k = bn) == null ? void 0 : k.canvas) == null ? void 0 : N.setDirty) == null || T.call(N, !0, !0));
  }
  function ll() {
    d.primaryTool !== "cursor" && (d.primaryTool = "cursor", cn(), ze());
  }
  function _i(r) {
    const o = L.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * L.width,
      y: (r.clientY - o.top) / o.height * L.height
    };
  }
  function lo(r) {
    const o = L.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function Hu() {
    return d.mode === "pano" || d.mode === "unwrap";
  }
  function $e() {
    if (t !== "cutout") return null;
    const r = Array.isArray(v.shots) ? v.shots : [];
    if (!r.length) return null;
    const o = String(v.active.selected_shot_id || "");
    return r.find((s) => String((s == null ? void 0 : s.id) || "") === o) || r[0] || null;
  }
  function Dg() {
    var $, Q, B, W, ae;
    if (!L) return null;
    const r = ($ = L.getBoundingClientRect) == null ? void 0 : $.call(L), o = Number((r == null ? void 0 : r.width) || 0) > 0 ? L.width / r.width : 1, s = Number((r == null ? void 0 : r.height) || 0) > 0 ? L.height / r.height : 1;
    let c = 24, h = 24;
    const m = Math.max(c + 1, L.width - 24);
    let y = Math.max(h + 1, L.height - 24);
    const g = (Q = Re == null ? void 0 : Re.getBoundingClientRect) == null ? void 0 : Q.call(Re), w = (B = Fe == null ? void 0 : Fe.getBoundingClientRect) == null ? void 0 : B.call(Fe);
    let M = 24;
    g && r && g.width > 0 && g.height > 0 && (M = Math.max(M, (g.right - r.left) * o + Pd)), w && r && w.width > 0 && w.height > 0 && ((W = P.frameRail) == null ? void 0 : W.visible) === !0 && (M = Math.max(M, (r.right - w.left) * o + Pd)), c = Math.max(c, M);
    const k = Math.min(m, L.width - M);
    let N = 24;
    const T = (ae = _e == null ? void 0 : _e.getBoundingClientRect) == null ? void 0 : ae.call(_e);
    if (T && r && T.width > 0 && T.height > 0 && (N = Math.max(N, (T.bottom - r.top) * s + Gl)), [Be, wt].forEach((ue) => {
      var Te;
      if (!ue || !r) return;
      const ne = getComputedStyle(ue);
      if (ne.display === "none" || ne.visibility === "hidden" || Number(ne.opacity) <= 0) return;
      const me = (Te = ue.getBoundingClientRect) == null ? void 0 : Te.call(ue);
      !me || me.width <= 0 || me.height <= 0 || (N = Math.max(N, (r.bottom - me.top) * s + Gl));
    }), J && r) {
      const ue = getComputedStyle(J);
      ue.display !== "none" && ue.visibility !== "hidden" && Number(ue.opacity) > 0 && (N = Math.max(N, (lw + Gl) * s));
    }
    return h = Math.max(h, N), y = Math.max(h + 1, Math.min(y, L.height - N)), {
      x: c,
      y: h,
      w: Math.max(1, k - c),
      h: Math.max(1, y - h)
    };
  }
  function cl(r = $e()) {
    if (!r || !L) return null;
    const o = se.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, L.width - 48),
      h: Math.max(1, L.height - 48)
    };
    return $1(o, r, Bl * jl(o, r));
  }
  function tn(r = $e()) {
    const o = cl(r);
    return o ? { x: o.x, y: o.y, w: o.w, h: o.h } : null;
  }
  function ul() {
    return t === "cutout" && !!$e();
  }
  function Tn(r, o = performance.now()) {
    if (d.mode === "unwrap") {
      const m = vr(), y = (r.x - m.x) / Math.max(1, m.w), g = (r.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (y % 1 + 1) % 1,
        v: K(g, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = Js(r.x, r.y), { lon: c, lat: h } = el(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (c / (2 * Math.PI) + 0.5 + 1) % 1,
      v: K(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function En(r, o, s = performance.now()) {
    const c = tn(o);
    if (!c) return null;
    const h = {
      x: (Number(r.x) - c.x) / Math.max(1, c.w),
      y: (Number(r.y) - c.y) / Math.max(1, c.h)
    };
    if (h.x < 0 || h.x > 1 || h.y < 0 || h.y > 1) return null;
    const m = il(o, h);
    if (!m) return null;
    const { lon: y, lat: g } = el(m);
    return {
      targetKind: "ERP_GLOBAL",
      u: (y / (2 * Math.PI) + 0.5 + 1) % 1,
      v: K(0.5 - g / Math.PI, 0, 1),
      t: Number(s || 0)
    };
  }
  function Og(r, o) {
    const s = $e();
    if (!s) return !1;
    const c = Number(o) < 1, h = j1(s, 1 / Number(o));
    if (!h) return !1;
    if (c) {
      const m = Bl * jl(
        se.frameSafeRect || { w: L.width, h: L.height },
        h
      ), y = Md({ width: L.width, height: L.height }, m);
      if (y.halfW < L.width * 0.5 - 1e-6 || y.halfH < L.height * 0.5 - 1e-6) return !1;
    }
    return s.hFOV_deg = h.hFOV_deg, s.vFOV_deg = h.vFOV_deg, d.frameWheelChanged = !0, d.frameWheelCommitTimer && window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = window.setTimeout(() => {
      d.frameWheelCommitTimer = 0, d.frameWheelChanged && (d.frameWheelChanged = !1, Qe(), ot(), ze());
    }, 180), ze(), !0;
  }
  function Rg() {
    return d.frameWheelCommitTimer && (window.clearTimeout(d.frameWheelCommitTimer), d.frameWheelCommitTimer = 0), d.frameWheelChanged ? (d.frameWheelChanged = !1, Qe(), ot(), ze(), !0) : !1;
  }
  function fl() {
    const r = d.interaction;
    return (r == null ? void 0 : r.kind) !== "pan_frame" || !r.shot || !r.start ? !1 : (r.shot.yaw_deg = r.start.yaw_deg, r.shot.pitch_deg = r.start.pitch_deg, d.interaction = null, pi(), Fr(), ze(), ct(d.pointerPos), he({ localOnly: !0 }), !0);
  }
  function Fg(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function wr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? rr : un[o] ? o : d.activeBrushPresetId || rr;
  }
  function Uu() {
    return (d.primaryTool === "paint" || d.primaryTool === "mask") && (Hu() || ul());
  }
  function Bu() {
    var r;
    return Uu() && ((r = d.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function co(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), c = Number((r == null ? void 0 : r.y) || 0), h = o !== !1, m = d.pointerPos || { x: 0, y: 0, inside: !1 }, y = m.inside !== h || Math.abs(m.x - s) > 0.01 || Math.abs(m.y - c) > 0.01;
    return d.pointerPos = { x: s, y: c, inside: h }, y;
  }
  function Lg() {
    var k, N;
    if (!Bu()) return null;
    const r = d.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? d.maskTool : d.paintTool, s = wr(o), c = un[s] || un[rr], h = Number(d.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), y = Math.max(3, m * 0.5), g = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : gn(d.paintColor), w = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : K(Math.max(0.16, Number(g.a ?? 1) * 0.3), 0.16, 0.52), M = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : K(Math.max(0.46, Number(g.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: c,
      radius: y,
      fillStyle: jn(g, w),
      strokeStyle: jn(g, M),
      x: Number(((k = d.pointerPos) == null ? void 0 : k.x) || 0),
      y: Number(((N = d.pointerPos) == null ? void 0 : N.y) || 0),
      hotspotX: y,
      hotspotY: y
    };
  }
  function zg() {
    var T, $, Q;
    const r = Lg();
    if (!U) return;
    if (!r) {
      U.style.display = "none";
      return;
    }
    let o = r.radius * 2, s = r.radius * 2, c = "999px", h = 0, m = r.fillStyle, y = "1px solid rgba(222, 222, 222, 0.72)", g = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const w = "rgba(222, 222, 222, 0.72)", M = "rgba(52, 52, 52, 0.72)";
    let k = Number(r.hotspotX ?? o * 0.5), N = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = ys, s = ys, c = "0", y = "0", g = "none", k = cw, N = uw, m = vw(r.fillStyle, M, w);
    else if (r.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const B = Math.max(1, Number(((T = r.preset) == null ? void 0 : T.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * B), s = Math.max(6, r.radius * 2), c = `${Math.min(6, s * 0.42)}px`, h = Number(((Q = ($ = r.preset) == null ? void 0 : $.angle) == null ? void 0 : Q.value) || 0) * Sn;
    } else r.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(o)}px`, U.style.height = `${Math.round(s)}px`, U.style.borderRadius = c, U.style.border = y, U.style.boxShadow = g, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(r.x - k)}px, ${Math.round(r.y - N)}px) rotate(${h}deg)`;
  }
  function $g() {
    var ue;
    if (!be || !xe) return;
    const r = d.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? d.maskTool : d.paintTool;
    if (o === "lasso_fill") return;
    const s = wr(o), c = un[s] || un[rr], h = Number(d.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(c.sizeScale ?? 1)), y = Math.max(6, m * 0.5), g = o === "eraser", w = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : g ? { r: 1, g: 1, b: 1, a: 0.22 } : gn(d.paintColor), M = r === "mask" ? jn(w, 0.22) : g ? "rgba(255,255,255,0.14)" : jn(w, K(Math.max(0.18, Number(w.a ?? 1) * 0.34), 0.18, 0.56)), k = r === "mask" ? jn(w, 0.96) : g ? "rgba(255,255,255,0.72)" : jn(w, K(Math.max(0.56, Number(w.a ?? 1) * 0.96), 0.56, 1));
    let N = y * 2, T = y * 2, $ = "999px", Q = 0, B = M;
    const W = "rgba(222, 222, 222, 0.72)", ae = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const ne = Math.max(1, Number((c == null ? void 0 : c.aspect) ?? 1));
      N = Math.max(16, y * 2 * ne), T = Math.max(10, y * 2), $ = `${Math.min(8, T * 0.42)}px`, Q = Number(((ue = c == null ? void 0 : c.angle) == null ? void 0 : ue.value) || 0) * Sn;
    } else o === "brush" ? B = `radial-gradient(circle at 50% 50%, ${k} 0%, ${M} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (N = Math.max(18, y * 1.8), T = N, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${k} 43%, ${k} 58%, rgba(0,0,0,0) 59%)`) : g && (B = "rgba(255,255,255,0.12)");
    xe.style.width = `${Math.round(N)}px`, xe.style.height = `${Math.round(T)}px`, xe.style.borderRadius = $, xe.style.background = B, xe.style.border = `1px solid ${W}`, xe.style.boxShadow = `0 0 0 1px ${ae}`, xe.style.transform = `rotate(${Q}deg)`, V && (clearTimeout(V), V = 0), be.classList.remove("fade-out"), be.classList.add("show");
  }
  function uo() {
    !be || !be.classList.contains("show") || (be.classList.add("fade-out"), V && clearTimeout(V), V = window.setTimeout(() => {
      be.classList.remove("show", "fade-out"), V = 0;
    }, 180));
  }
  function Gu(r, o, s, c) {
    const h = wr(o), m = un[h] || un[rr], y = d.brushSizes[h] ?? 10, g = Math.max(1, y) * Math.max(0.1, m.sizeScale ?? 1), w = Fg(c, g), M = s.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), k = {
      id: Ai(r),
      actionGroupId: Ai("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: g,
      createdAt: Date.now(),
      color: r === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: w.radiusModel,
      radiusValue: w.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: M.map((N) => ({ ...N })),
        points: M.map((N) => ({ ...N }))
      }
    };
    return vd(k, m), Number(m.aspect ?? 1), Number(k.aspect ?? 1), String(k.stampKind || ""), Number(k.size || 0), String(k.radiusModel || ""), Number(k.radiusValue || 0), { ...k.targetSpace }, k;
  }
  function Ku(r, o, s, c) {
    const h = s.map((w) => ({
      ...w,
      t: Number((w == null ? void 0 : w.t) || 0),
      widthScale: Number.isFinite(Number(w == null ? void 0 : w.widthScale)) ? Math.max(0, Number(w.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(w == null ? void 0 : w.pressureLike)) ? Math.max(0, Number(w.pressureLike)) : 1
    })), m = wr(o), y = un[m] || un[rr], g = {
      id: Ai(r),
      actionGroupId: Ai("ag"),
      targetSpace: c && typeof c == "object" ? { ...c, viewMode: String(d.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(d.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...d.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((w) => ({ ...w }))
      }
    };
    return vd(g, y), Number(y.aspect ?? 1), Number(g.aspect ?? 1), String(g.stampKind || ""), { ...g.targetSpace }, g;
  }
  function xi(r) {
    const o = v.painting || (v.painting = Sa(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function jg(r, o, s = performance.now()) {
    let c;
    if (d.mode === "frame") {
      const M = $e();
      if (!M || (c = En(o, M, s), !c)) return !1;
    } else
      c = Tn(o, s);
    if (!c) return !1;
    const h = r.stroke.geometry.rawPoints || r.stroke.geometry.points, m = r.stroke.geometry.points, y = h[h.length - 1];
    if (y) {
      const M = Math.abs(Number(c.u ?? c.x ?? 0) - Number(y.u ?? y.x ?? 0)), k = Math.abs(Number(c.v ?? c.y ?? 0) - Number(y.v ?? y.y ?? 0));
      if (M < 15e-4 && k < 15e-4) return !1;
    }
    const g = {
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...g }), m.push({ ...g });
    const w = mn();
    if (w) {
      const M = d.paintEngine.ensureTarget(w);
      d.paintEngine.appendStrokePoint(M, Number(g.u ?? 0), Number(g.v ?? 0), r.stroke);
    }
    return !0;
  }
  function Vg(r, o, s = performance.now()) {
    var y, g;
    let c;
    if (d.mode === "frame") {
      const w = $e();
      if (!w) return !1;
      c = En(o, w, s);
    } else
      c = Tn(o, s);
    const h = (g = (y = r == null ? void 0 : r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.points;
    if (!c || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const w = Math.abs(Number(c.u ?? c.x ?? 0) - Number(m.u ?? m.x ?? 0)), M = Math.abs(Number(c.v ?? c.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (w < 15e-4 && M < 15e-4) return !1;
    }
    return h.push({
      ...c,
      t: Number((c == null ? void 0 : c.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Hg(r) {
    var ne, me, Te, Oe, Ge;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    io();
    const s = mn(), c = Qi(s.width, s.height);
    if (!Cu(c, o, { w: s.width, h: s.height })) return !1;
    const h = ((me = (ne = c.ctx) == null ? void 0 : ne.getImageData(0, 0, s.width, s.height)) == null ? void 0 : me.data) || null;
    if (!h) return !1;
    const m = new Map(Bt().map((de) => [String((de == null ? void 0 : de.actionGroupId) || (de == null ? void 0 : de.id) || "").trim(), de ? { ...de } : null])), y = [], g = [], w = [...ln().filter((de) => String((de == null ? void 0 : de.layerKind) || "paint") !== "paint")];
    let M = !1, k = si().reduce((de, ee) => Math.max(de, Number((ee == null ? void 0 : ee.z_index) || 0)), -1) + 1;
    function N(de, ee, ce, Ae = 8) {
      let ke = ee, Me = ce, Le = -1, Ye = -1;
      for (let je = 0; je < ce; je += 1)
        for (let et = 0; et < ee; et += 1)
          de[(je * ee + et) * 4 + 3] <= Ae || (et < ke && (ke = et), je < Me && (Me = je), et > Le && (Le = et), je > Ye && (Ye = je));
      return Le < ke || Ye < Me ? null : { minX: ke, minY: Me, maxX: Le, maxY: Ye };
    }
    const T = N(h, s.width, s.height, 8);
    if (!T) return !1;
    function $(de, ee) {
      return !de || !ee ? !1 : !(de.maxX < ee.minX || ee.maxX < de.minX || de.maxY < ee.minY || ee.maxY < de.minY);
    }
    function Q(de, ee) {
      const ce = br((de == null ? void 0 : de.actionGroupId) || (de == null ? void 0 : de.id) || "", "paint", ee);
      if (!ce) return null;
      const Ae = ce.centerUv.u - ce.halfW, ke = ce.centerUv.u + ce.halfW, Me = ce.centerUv.v - ce.halfH, Le = ce.centerUv.v + ce.halfH, Ye = s.width, je = s.height;
      return {
        minX: Math.floor((Ae % 1 + 1) % 1 * Ye),
        maxX: Math.ceil((ke % 1 + 1) % 1 * Ye),
        minY: Math.floor(K(Me, 0, 1) * je),
        maxY: Math.ceil(K(Le, 0, 1) * je),
        wraps: ke - Ae >= 1 || Ae < 0 || ke > 1
      };
    }
    function B(de) {
      const ee = (de == null ? void 0 : de.bbox) || null;
      if (!ee) return null;
      const ce = (de == null ? void 0 : de.transform) || {}, Ae = s.width, ke = s.height, Me = Number(ee.u0 || 0) + Number(ce.du || 0), Le = Number(ee.u1 || 0) + Number(ce.du || 0), Ye = Number(ee.v0 || 0) + Number(ce.dv || 0), je = Number(ee.v1 || 0) + Number(ce.dv || 0);
      return {
        minX: Math.floor((Me % 1 + 1) % 1 * Ae),
        maxX: Math.ceil((Le % 1 + 1) % 1 * Ae),
        minY: Math.floor(K(Ye, 0, 1) * ke),
        maxY: Math.ceil(K(je, 0, 1) * ke),
        wraps: Le - Me >= 1 || Me < 0 || Le > 1
      };
    }
    function W(de) {
      return de ? de.wraps ? $(T, { minX: 0, maxX: de.maxX, minY: de.minY, maxY: de.maxY }) || $(T, { minX: de.minX, maxX: s.width - 1, minY: de.minY, maxY: de.maxY }) : $(T, de) : !0;
    }
    function ae(de) {
      if (!de) return { touched: !1, canvas: null };
      const ee = Qi(s.width, s.height, { readback: !0 });
      ee.ctx.drawImage(de, 0, 0);
      const ce = ee.ctx.getImageData(0, 0, s.width, s.height);
      ee.ctx.save(), ee.ctx.globalCompositeOperation = "destination-out", ee.ctx.drawImage(c.canvas, 0, 0), ee.ctx.restore();
      const Ae = ee.ctx.getImageData(0, 0, s.width, s.height);
      for (let ke = 0; ke < s.width * s.height; ke += 1) {
        if (h[ke * 4 + 3] <= 8) continue;
        const Le = ce.data[ke * 4 + 3], Ye = Ae.data[ke * 4 + 3];
        if (Le > Ye)
          return { touched: !0, canvas: ee.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ue(de, ee, ce) {
      const Ae = Number(ce == null ? void 0 : ce.z_index), ke = og(de, ee, ce).map((Me, Le) => ({
        ...Me,
        z_index: Number.isFinite(Ae) ? Ae + Le * 1e-3 : k + Le * 1e-3
      }));
      return ke.length && (k = Math.max(k, ...ke.map((Me) => Number((Me == null ? void 0 : Me.z_index) || 0))) + 1), ke;
    }
    for (const de of Bt()) {
      const ee = String((de == null ? void 0 : de.actionGroupId) || (de == null ? void 0 : de.id) || "").trim();
      if (!ee) continue;
      const ce = An(ee, "paint");
      if (!W(Q(de, ce))) {
        g.push(de), y.push(...ce);
        continue;
      }
      const Ae = ((Oe = (Te = d.paintEngine) == null ? void 0 : Te.getGroupTarget) == null ? void 0 : Oe.call(Te, ee)) || null, ke = ((Ge = Ae == null ? void 0 : Ae.committedPaint) == null ? void 0 : Ge.canvas) || null;
      if (!ke) {
        g.push(de), y.push(...ce);
        continue;
      }
      const Me = ae(ke);
      if (!Me.touched || !Me.canvas) {
        g.push(de), y.push(...ce);
        continue;
      }
      M = !0;
      const Le = ue(Me.canvas, "paint", m.get(ee) || de || {});
      w.push(...Le);
    }
    for (const de of ln().filter((ee) => String((ee == null ? void 0 : ee.layerKind) || "paint") === "paint")) {
      if (!W(B(de))) {
        w.push(de);
        continue;
      }
      const ee = pu(de, null);
      if (!ee) {
        w.push(de);
        continue;
      }
      const ce = ae(ee);
      if (!ce.touched || !ce.canvas) {
        w.push(de);
        continue;
      }
      M = !0;
      const Ae = ue(ce.canvas, "paint", de);
      w.push(...Ae);
    }
    return M ? (v.painting.paint.strokes = y, v.painting.groups = g.sort((de, ee) => Number((de == null ? void 0 : de.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0)), v.painting.raster_objects = w.sort((de, ee) => Number((de == null ? void 0 : de.z_index) || 0) - Number((ee == null ? void 0 : ee.z_index) || 0)), Xi({ preservePanelValues: !1 }), !0) : !1;
  }
  function Ug(r) {
    var y, g, w, M, k;
    if ((((g = (y = r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.rawPoints) || ((M = (w = r.stroke) == null ? void 0 : w.geometry) == null ? void 0 : M.points) || []).length >= 1) {
      dl(r);
      const N = mn();
      N && (String(((k = r.stroke) == null ? void 0 : k.toolKind) || "") === "eraser" ? d.paintEngine.cancelActiveStroke(N) : d.paintEngine.commitActiveStroke(r.stroke, N)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, h = Gu(r.layerKind, s.toolKind, [], c);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = mn();
    m && d.paintEngine.beginStroke(h, m);
  }
  function Bg(r) {
    var y, g;
    if ((((g = (y = r.stroke) == null ? void 0 : y.geometry) == null ? void 0 : g.points) || []).length >= 3) {
      dl(r);
      const w = mn();
      w && d.paintEngine.commitActiveStroke(r.stroke, w), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, c = { kind: "ERP_GLOBAL", viewMode: String(d.mode || "frame") }, h = Ku(r.layerKind, s.toolKind, [], c);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = mn();
    m && d.paintEngine.beginStroke(h, m);
  }
  function dl(r) {
    var m, y, g, w;
    const o = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const s = String(((y = r == null ? void 0 : r.stroke) == null ? void 0 : y.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = al(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), Hg(r);
    const c = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (c && Zc((g = r.stroke) == null ? void 0 : g.actionGroupId), xi(r.layerKind).push(r.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = al(h, r.stroke.targetSpace, !0), c && Zc((w = r.stroke) == null ? void 0 : w.actionGroupId), xi(r.layerKind).push(r.stroke), !0);
  }
  function Wu(r) {
    var s;
    if (t === "cutout" && d.mode === "frame") {
      const c = $e(), h = tn(c);
      if (!c || !h || !(Number((r == null ? void 0 : r.x) || 0) >= Number(h.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(h.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const y = En(r, c, performance.now()), g = y ? bi(y) : null;
      if (g)
        for (const M of rl()) {
          if (!gt(M)) continue;
          const k = ta(M, g);
          if (k && Number(k.x) >= 0 && Number(k.x) <= 1 && Number(k.y) >= 0 && Number(k.y) <= 1) {
            const N = $t(M);
            if (N != null && N.visible) return { item: M, geom: N };
          }
        }
      const w = $s(!1).slice().sort((M, k) => Number((k == null ? void 0 : k.z_index) || 0) - Number((M == null ? void 0 : M.z_index) || 0));
      for (const M of w) {
        if (M.type === "strokeGroup") {
          const T = ci(Wi("paint", M.actionGroupId || M.id || ""));
          if (!T) continue;
          const $ = $t(T);
          if (!($ != null && $.visible)) continue;
          const Q = Array.isArray($.strokePaths) ? $.strokePaths : [];
          for (const B of Q) {
            const W = Array.isArray(B == null ? void 0 : B.points) ? B.points : [];
            if (!W.length) continue;
            if (B.closed && W.length >= 3 && ir(r, W)) return { item: T, geom: $ };
            const ae = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let ue = 0; ue < W.length - 1; ue += 1)
              if (Kl(r, W[ue], W[ue + 1]) <= ae * ae) return { item: T, geom: $ };
            if (W.length === 1 && Mr(r, W[0]) <= ae * ae) return { item: T, geom: $ };
          }
          continue;
        }
        if (M.type === "rasterObject") {
          const T = li(Yi(((s = M.item) == null ? void 0 : s.id) || M.id || ""));
          if (!T) continue;
          const $ = $t(T);
          if (mu(T, $, r, y)) return { item: T, geom: $ };
          continue;
        }
        const k = M.item;
        if (!k || !gt(k) || !g) continue;
        const N = ta(k, g);
        if (N && Number(N.x) >= 0 && Number(N.x) <= 1 && Number(N.y) >= 0 && Number(N.y) <= 1) {
          const T = $t(k);
          if (T != null && T.visible) return { item: k, geom: T };
        }
      }
      return null;
    }
    const o = [
      ...$s(!1).slice().sort((c, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((c == null ? void 0 : c.z_index) || 0)).map((c) => {
        var h;
        return c.type === "strokeGroup" ? ci(Wi("paint", c.actionGroupId || c.id || "")) : c.type === "rasterObject" ? li(Yi(((h = c.item) == null ? void 0 : h.id) || c.id || "")) : c.item;
      }).filter(Boolean),
      ...t === "cutout" ? rl().filter((c) => hn(c)) : []
    ];
    for (const c of o) {
      if (Et(c)) {
        const m = $t(c);
        if (!(m != null && m.visible)) continue;
        const y = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const g of y) {
          const w = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
          if (!w.length) continue;
          if (g.closed && w.length >= 3 && ir(r, w)) return { item: c, geom: m };
          const M = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
          for (let k = 0; k < w.length - 1; k += 1)
            if (Kl(r, w[k], w[k + 1]) <= M * M) return { item: c, geom: m };
          if (w.length === 1 && Mr(r, w[0]) <= M * M) return { item: c, geom: m };
        }
        continue;
      }
      if (Gt(c)) {
        const m = $t(c);
        if (!(m != null && m.visible)) continue;
        if (mu(c, m, r)) return { item: c, geom: m };
        continue;
      }
      const h = $t(c);
      if (h.visible && ir(r, h.corners))
        return { item: c, geom: h };
    }
    return null;
  }
  function hl(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const c = r.corners.findIndex((m) => Mr(m, o) <= 121);
      if (c >= 0) {
        const m = r.corners[c], y = m.x - r.center.x, g = m.y - r.center.y, w = y * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: w };
      }
      const h = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const m of h) {
        const y = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && y.length >= 3 && ir(o, y)) return { kind: "move", cursor: "default" };
        const g = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let w = 0; w < y.length - 1; w += 1)
          if (Kl(o, y[w], y[w + 1]) <= g * g) return { kind: "move", cursor: "default" };
      }
      return ir(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const c = r.corners.findIndex((h) => Mr(h, o) <= 121);
      if (c >= 0) {
        const h = r.corners[c], m = h.x - r.center.x, y = h.y - r.center.y, g = m * y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: c, cursor: g };
      }
      return ir(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const c = r.edgeMidpoints.find((h) => Mr(h, o) <= 169);
      if (c) {
        const h = c.edge === "left" || c.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: c.edge, mid: c };
      }
    }
    const s = r.corners.findIndex((c) => Mr(c, o) <= 121);
    if (s >= 0) {
      const c = r.corners[s], h = c.x - r.center.x, m = c.y - r.center.y, y = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: y };
    }
    return Mr(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : ir(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: d.mode === "pano" ? "grab" : "default" };
  }
  function Yu(r, o) {
    return {
      x0: Math.min(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y0: Math.min(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0)),
      x1: Math.max(Number((r == null ? void 0 : r.x) || 0), Number((o == null ? void 0 : o.x) || 0)),
      y1: Math.max(Number((r == null ? void 0 : r.y) || 0), Number((o == null ? void 0 : o.y) || 0))
    };
  }
  function Gg(r, o) {
    return !!r && !!o && Number(o.x) >= Number(r.x0) && Number(o.x) <= Number(r.x1) && Number(o.y) >= Number(r.y0) && Number(o.y) <= Number(r.y1);
  }
  function Kg(r, o) {
    if (!r || !(o != null && o.visible) || !Array.isArray(o.corners)) return !1;
    if (o.corners.some((h) => Gg(r, h))) return !0;
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, c = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!ir({ x: s, y: c }, o.corners);
  }
  function ct(r) {
    if (zg(), d.interaction) {
      d.interaction.kind === "paint_stroke" || d.interaction.kind === "paint_lasso_fill" ? Ee("none") : d.interaction.kind === "view" || d.interaction.kind === "pan_frame" ? Ee("grabbing") : d.interaction.kind === "move" || d.interaction.kind === "move_multi" || d.interaction.kind === "move_stroke_group" || d.interaction.kind === "move_raster_object" ? Ee("move") : d.interaction.kind === "scale" || d.interaction.kind === "scale_x" || d.interaction.kind === "scale_y" || d.interaction.kind === "scale_raster_object" ? Ee(d.interaction.cursor || "nwse-resize") : d.interaction.kind === "rotate" ? Ee("grabbing") : Ee("default");
      return;
    }
    if (Bu()) {
      Ee("none");
      return;
    }
    if (d.mode === "frame") {
      if (d.primaryTool !== "cursor") {
        Ee("default");
        return;
      }
      Ee("grab");
      return;
    }
    if (d.primaryTool === "cursor" && d.marqueeModifier) {
      Ee("default");
      return;
    }
    const o = bt(), s = o ? $t(o) : null, c = o ? yr(o) : !1, h = c ? { kind: "none", cursor: "default" } : hl(s, r);
    if (!c && h.kind !== "none") {
      Ee(h.cursor);
      return;
    }
    if (d.primaryTool === "cursor" && Wu(r)) {
      Ee("default");
      return;
    }
    Ee(d.mode === "pano" ? "grab" : "default");
  }
  function Ue() {
    var w, M;
    if (!Nt) return;
    if (d.mode === "frame") {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const r = bt(), o = Cn();
    if (!r && o.length === 0 || d.interaction) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Ya(), c = G1({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? Hs(o) : $t(r),
      allLocked: Us(o),
      selectedLocked: yr(r),
      activeAspect: Pi(r),
      cutoutAspectOpen: d.cutoutAspectOpen,
      isExternalSticker: zt,
      isStickerHidden: fi,
      canRestoreSelectedToInitial: Xm,
      iconSet: De
    });
    if (!c.visible) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (k, N, { requireFitsBelow: T = !0 } = {}) => {
      var me, Te, Oe;
      const Q = Number((me = c.anchor) == null ? void 0 : me.minX), B = Number((Te = c.anchor) == null ? void 0 : Te.maxX), W = Number((Oe = c.anchor) == null ? void 0 : Oe.maxY);
      if (![Q, B, W].every(Number.isFinite)) return null;
      const ae = Math.max(14, L.width - k - 14), ue = K((Q + B) * 0.5 - k * 0.5, 14, ae), ne = W + 18;
      return !Number.isFinite(ue) || !Number.isFinite(ne) || T && ne + N > L.height - 14 ? null : { left: ue, top: ne };
    }, m = Math.max(1, Number(((w = d.menuSize) == null ? void 0 : w.w) || 220)), y = Math.max(1, Number(((M = d.menuSize) == null ? void 0 : M.h) || 40)), g = h(m, y, { requireFitsBelow: !1 });
    if (!g) {
      P.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    P.selectionMenu = {
      visible: !0,
      left: g.left,
      top: g.top,
      items: c.items
    }, requestAnimationFrame(() => {
      if (!Nt || P.selectionMenu.visible !== !0) return;
      const k = Nt.getBoundingClientRect(), N = Math.round(Number((k == null ? void 0 : k.width) || 0)) || 220, T = Math.round(Number((k == null ? void 0 : k.height) || 0)) || 40;
      d.menuSize = { w: N, h: T, measured: !0 };
      const $ = h(N, T);
      if (!$) {
        P.selectionMenu.visible = !1;
        return;
      }
      P.selectionMenu.left = $.left, P.selectionMenu.top = $.top;
    });
  }
  function fo() {
    Ke.timer && (clearTimeout(Ke.timer), Ke.timer = 0), Ke.target = null, P.tooltip.visible = !1, P.tooltip.text = "", P.tooltip.variant = "";
  }
  function Wg(r) {
    if (!Ot || !r || !r.isConnected) return;
    const o = String(r.getAttribute("data-tip") || "").trim();
    if (!o) return;
    P.tooltip.text = o, P.tooltip.visible = !0;
    const s = r;
    requestAnimationFrame(() => {
      var Q, B;
      if (Ke.target !== s || !Ot || !(s != null && s.isConnected)) return;
      const c = fe.getBoundingClientRect(), h = s.getBoundingClientRect(), m = 8, y = 12, g = Math.round(Number(((Q = Ot.getBoundingClientRect()) == null ? void 0 : Q.width) || 0)) || 100, w = Math.round(Number(((B = Ot.getBoundingClientRect()) == null ? void 0 : B.height) || 0)) || 24, M = !!s.closest(".pano-floating-left"), k = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let N = "", T = h.left - c.left + h.width * 0.5 - g * 0.5, $ = h.top - c.top - w - y;
      if (M)
        N = "tool-rail", T = h.right - c.left + 10, $ = h.top - c.top + h.height * 0.5 - w * 0.5, T = K(T, m, Math.max(m, c.width - g - m)), $ = K($, m, Math.max(m, c.height - w - m));
      else if (k) {
        N = "footer";
        const W = s.closest(".pano-paint-footer"), ae = W ? W.getBoundingClientRect() : h;
        T = ae.left - c.left + ae.width * 0.5 - g * 0.5, $ = ae.bottom - c.top + 5, T = K(T, m, Math.max(m, c.width - g - m)), $ = Math.max(m, $);
      }
      T = K(T, m, Math.max(m, c.width - g - m)), $ = Math.max(m, $), P.tooltip.left = T, P.tooltip.top = $, P.tooltip.variant = N, P.tooltip.visible = !0;
    });
  }
  const Vt = Es({
    getView: () => ({ yaw: d.viewYaw, pitch: d.viewPitch, fov: d.viewFov }),
    setView: (r) => {
      d.viewYaw = Ft(Number(r.yaw || 0)), d.viewPitch = K(Number(r.pitch || 0), -89.9, 89.9), d.viewFov = K(Number(r.fov || d.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const r = L.getBoundingClientRect();
      return {
        w: Math.max(1, Number(r.width || L.clientWidth || 0)),
        h: Math.max(1, Number(r.height || L.clientHeight || 0))
      };
    },
    getInvert: () => {
      var r, o;
      return {
        x: (r = v.ui_settings) != null && r.invert_view_x ? -1 : 1,
        y: (o = v.ui_settings) != null && o.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: vr,
    onInteraction: () => {
      se.backgroundDirty = !0, se.dirty = !0;
    }
  });
  L.onpointerdown = (r) => {
    const o = _i(r);
    if (co(o, !0), d.viewTween = null, Vt.state.inertia.active = !1, Vt.state.inertia.vx = 0, Vt.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), d.mode === "frame") {
        const g = $e();
        if (!g || i) return;
        d.interaction = {
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
        const g = d.mode === "unwrap" ? o : lo(r);
        d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Vt.startDrag(g.x, g.y, r.pointerId, performance.now());
      }
      ct(o), L.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (d.mode === "frame" && d.primaryTool === "cursor") {
      const g = $e();
      if (!g || i) return;
      d.interaction = {
        kind: "pan_frame",
        shot: g,
        last: o,
        start: {
          yaw_deg: Number(g.yaw_deg || 0),
          pitch_deg: Number(g.pitch_deg || 0)
        },
        changed: !1
      }, ct(o), L.setPointerCapture(r.pointerId);
      return;
    }
    if (i) {
      if (d.mode === "pano") {
        const g = lo(r);
        d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Vt.startDrag(g.x, g.y, r.pointerId, performance.now()), ct(o), L.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (qe && !qe.hidden)
      return;
    if ((d.primaryTool === "paint" || d.primaryTool === "mask") && (Hu() || ul())) {
      const g = d.primaryTool === "mask" ? "mask" : "paint", w = d.primaryTool === "mask" ? d.maskTool : d.paintTool, M = d.mode === "frame" && ul() ? $e() : null, k = { kind: "ERP_GLOBAL" }, N = M ? En(o, M, performance.now()) : Tn(o, performance.now());
      if (!N) {
        ct(o);
        return;
      }
      d.interaction = {
        kind: w === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: g,
        _livePreviewToken: Ai("live"),
        stroke: w === "lasso_fill" ? Ku(g, w, [N], k) : Gu(g, w, [N], k)
      }, pi();
      const T = mn();
      if (T)
        if (d.paintEngine.beginStroke(d.interaction.stroke, T), d.interaction.kind === "paint_stroke") {
          const $ = d.paintEngine.ensureTarget(T), Q = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), B = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          d.paintEngine.appendStrokePoint($, Q, B, d.interaction.stroke);
        } else
          d.paintEngine.updateActiveStroke(d.interaction.stroke, T);
      ct(o), L.setPointerCapture(r.pointerId), he();
      return;
    }
    const s = Cn(), c = bt(), h = s.length > 1 ? Hs(s) : c ? $t(c) : null;
    if (d.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      d.interaction = { kind: "marquee_select", start: o, current: o }, ct(o), L.setPointerCapture(r.pointerId), he({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((w) => yr(w)) ? { kind: "none" } : hl(h, o)).kind === "move") {
        d.interaction = {
          kind: "move_multi",
          items: s.map((w) => w),
          offset: { x: o.x - h.center.x, y: o.y - h.center.y },
          startCenter: { x: h.center.x, y: h.center.y },
          stickerSnapshots: s.filter((w) => gt(w)).map((w) => ({
            id: String(w.id || ""),
            yaw_deg: Number(w.yaw_deg || 0),
            pitch_deg: Number(w.pitch_deg || 0),
            center: (() => {
              var k, N;
              const M = $t(w);
              return M != null && M.visible ? { x: Number(((k = M.center) == null ? void 0 : k.x) || 0), y: Number(((N = M.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })()
          })),
          strokeSnapshots: s.filter((w) => Et(w)).map((w) => ({
            id: String(w.actionGroupId || w.id || ""),
            layerKind: String(w.layerKind || "paint"),
            snapshot: Wt(An(w.actionGroupId, w.layerKind)),
            frameSnapshot: Wt(br(w.actionGroupId, w.layerKind)),
            center: (() => {
              var k, N;
              const M = $t(w);
              return M != null && M.visible ? { x: Number(((k = M.center) == null ? void 0 : k.x) || 0), y: Number(((N = M.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: Vs(w.actionGroupId, w.layerKind)
          })),
          rasterSnapshots: s.filter((w) => Gt(w)).map((w) => ({
            id: Rt(w.rasterObjectId || w.id || ""),
            snapshot: Wt(ln().find((M) => String((M == null ? void 0 : M.id) || "") === Rt(w.rasterObjectId || w.id || ""))),
            center: (() => {
              var k, N;
              const M = $t(w);
              return M != null && M.visible ? { x: Number(((k = M.center) == null ? void 0 : k.x) || 0), y: Number(((N = M.center) == null ? void 0 : N.y) || 0) } : { x: o.x, y: o.y };
            })(),
            centerUv: _u(w)
          }))
        }, ct(o), L.setPointerCapture(r.pointerId);
        return;
      }
    } else if (c && (h != null && h.visible)) {
      const g = yr(c) ? { kind: "none" } : hl(h, o);
      if (g.kind === "scale") {
        d.interaction = Et(c) ? {
          kind: "scale_stroke_group",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Wt(An(c.actionGroupId, c.layerKind)),
          frameSnapshot: Wt(br(c.actionGroupId, c.layerKind)),
          cursor: g.cursor
        } : Gt(c) ? {
          kind: "scale_raster_object",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Wt(ln().find((w) => String((w == null ? void 0 : w.id) || "") === Rt(c.rasterObjectId || c.id || ""))),
          cursor: g.cursor
        } : {
          kind: "scale",
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: g.cursor
        }, ct(o), L.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "scale_x" || g.kind === "scale_y") {
        d.interaction = {
          kind: g.kind,
          item: c,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(c.hFOV_deg || 20),
          startVFOV: Number(c.vFOV_deg || 20),
          cursor: g.cursor,
          edge: g.edge
        }, ct(o), L.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "rotate") {
        d.interaction = Et(c) ? {
          kind: "rotate_stroke_group",
          item: c,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: Wt(An(c.actionGroupId, c.layerKind)),
          frameSnapshot: Wt(br(c.actionGroupId, c.layerKind))
        } : {
          kind: "rotate",
          item: c,
          center: h.center,
          startRot: Number(c.rot_deg || c.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, ct(o), L.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "move") {
        if (Et(c)) {
          const w = d.mode === "frame" ? (() => {
            const M = $e();
            return M ? En(o, M, performance.now()) : null;
          })() : Tn(o, performance.now());
          d.interaction = {
            kind: "move_stroke_group",
            item: c,
            startUv: w,
            snapshot: Wt(An(c.actionGroupId, c.layerKind)),
            frameSnapshot: Wt(br(c.actionGroupId, c.layerKind))
          }, ct(o), L.setPointerCapture(r.pointerId);
          return;
        }
        if (Gt(c)) {
          const w = d.mode === "frame" ? (() => {
            const M = $e();
            return M ? En(o, M, performance.now()) : null;
          })() : Tn(o, performance.now());
          d.interaction = {
            kind: "move_raster_object",
            item: c,
            startUv: w,
            snapshot: Wt(ln().find((M) => String((M == null ? void 0 : M.id) || "") === Rt(c.rasterObjectId || c.id || "")))
          }, ct(o), L.setPointerCapture(r.pointerId);
          return;
        }
        d.interaction = {
          kind: "move",
          item: c,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, ct(o), L.setPointerCapture(r.pointerId);
        return;
      }
    }
    const m = Wu(o);
    if (m) {
      const g = d.selectedId !== m.item.id;
      if (g && d.selectedId && (Qe(), pn()), ui(m.item), t === "cutout" && g && (d.cutoutAspectOpen = !1), g && ze(), Ue(), he(), yr(m.item)) {
        ct(o);
        return;
      }
      d.interaction = {
        kind: Et(m.item) ? "move_stroke_group" : Gt(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Et(m.item) || Gt(m.item) ? d.mode === "frame" ? (() => {
          const w = $e();
          return w ? En(o, w, performance.now()) : null;
        })() : Tn(o, performance.now()) : null,
        snapshot: Et(m.item) ? Wt(An(m.item.actionGroupId, m.item.layerKind)) : Gt(m.item) ? Wt(ln().find((w) => String((w == null ? void 0 : w.id) || "") === Rt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Et(m.item) ? Wt(br(m.item.actionGroupId, m.item.layerKind)) : null
      }, ct(o), L.setPointerCapture(r.pointerId);
      return;
    }
    const y = !!d.selectedId;
    if (y && (Qe(), pn()), Xi(), y && ze(), Ue(), he(), d.mode === "pano") {
      const g = lo(r);
      d.interaction = { kind: "view", last: g, lastTs: performance.now() }, Vt.startDrag(g.x, g.y, r.pointerId, performance.now()), ct(o), L.setPointerCapture(r.pointerId);
    }
  }, L.onpointermove = (r) => {
    var c, h, m, y, g, w, M, k, N, T, $, Q, B, W, ae, ue, ne, me, Te, Oe, Ge, de;
    const o = _i(r);
    if (co(o, !0), !d.interaction) {
      ct(o);
      return;
    }
    ct(o);
    const s = d.interaction;
    if (s.kind === "paint_stroke") {
      const ee = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let ce = !1;
      ee.forEach((Ae) => {
        const ke = _i(Ae);
        if (d.mode === "frame") {
          const Me = $e(), Le = Me ? tn(Me) : null;
          if (Le) {
            const Ye = (ke.x - Le.x) / Math.max(1, Le.w), je = (ke.y - Le.y) / Math.max(1, Le.h);
            if (!(Ye >= 0 && Ye <= 1 && je >= 0 && je <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, Ug(s));
          }
        }
        jg(s, ke, performance.now()) && (ce = !0);
      }), ce && he({ localOnly: !0 });
      return;
    }
    if (s.kind === "paint_lasso_fill") {
      const ee = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let ce = !1;
      if (ee.forEach((Ae) => {
        const ke = _i(Ae);
        if (d.mode === "frame") {
          const Me = $e(), Le = Me ? tn(Me) : null;
          if (Le) {
            const Ye = (ke.x - Le.x) / Math.max(1, Le.w), je = (ke.y - Le.y) / Math.max(1, Le.h);
            if (!(Ye >= 0 && Ye <= 1 && je >= 0 && je <= 1)) {
              s._outOfFrame = !0;
              return;
            }
            s._outOfFrame && (s._outOfFrame = !1, Bg(s));
          }
        }
        Vg(s, ke, performance.now()) && (ce = !0);
      }), ce) {
        const Ae = mn();
        Ae && d.paintEngine.updateActiveStroke(s.stroke, Ae), he({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const ee = performance.now(), ce = d.mode === "unwrap" ? o : lo(r);
      Vt.moveDrag(ce.x, ce.y, d.mode === "unwrap" ? "unwrap" : "pano", ee), s.lastTs = ee, s.last = ce, he({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      const ee = cl(s.shot);
      if (!ee || !s.shot) return;
      const ce = (c = v.ui_settings) != null && c.invert_view_x ? -1 : 1, Ae = (h = v.ui_settings) != null && h.invert_view_y ? -1 : 1, ke = (o.x - s.last.x) * ce, Me = (o.y - s.last.y) * Ae, Le = Math.max(1, Number(ee.focalPx || 1)), Ye = Number(s.shot.roll_deg ?? s.shot.rot_deg ?? 0) * It, je = Math.cos(Ye), et = Math.sin(Ye), Ct = ke / Le, rt = -Me / Le, St = Ct * je - rt * et, tr = Ct * et + rt * je, go = Number(s.shot.pitch_deg || 0) * It, bo = Math.max(0.25, Math.abs(Math.cos(go)));
      s.shot.yaw_deg = Ft(
        Number(s.shot.yaw_deg || 0) - Math.atan(St) / bo * Sn
      ), s.shot.pitch_deg = K(
        Number(s.shot.pitch_deg || 0) - Math.atan(tr) * Sn,
        -90,
        90
      ), s.changed = s.changed || Math.abs(ke) > 0 || Math.abs(Me) > 0, s.last = o, he({ localOnly: !0 });
      return;
    }
    if (s.kind === "move") {
      const ee = o.x - s.offset.x, ce = o.y - s.offset.y;
      if (d.mode === "frame" && t === "cutout") {
        const Ae = $e(), ke = tn(Ae);
        if (!Ae || !ke) return;
        const Me = {
          x: K((ee - ke.x) / Math.max(1, ke.w), 0, 1),
          y: K((ce - ke.y) / Math.max(1, ke.h), 0, 1)
        }, Le = il(Ae, Me);
        if (!Le) return;
        const Ye = Ro(Le);
        s.item.yaw_deg = Ye.yaw, s.item.pitch_deg = Ye.pitch;
      } else if (d.mode === "unwrap") {
        const Ae = vr(), ke = K((ee - Ae.x) / Math.max(Ae.w, 1), 0, 1), Me = K((ce - Ae.y) / Math.max(Ae.h, 1), 0, 1);
        s.item.yaw_deg = Ft(ke * 360 - 180), s.item.pitch_deg = K(90 - Me * 180, -90, 90);
      } else {
        const Ae = Js(ee, ce), ke = Ro(Ae);
        s.item.yaw_deg = ke.yaw, s.item.pitch_deg = ke.pitch;
      }
      gt(s.item) && jt(), he({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const ee = d.mode === "frame" ? (() => {
        const ke = $e();
        return ke ? En(o, ke, performance.now()) : null;
      })() : Tn(o, performance.now());
      if (!ee || !s.startUv) return;
      const ce = wn(Number(ee.u || 0), Number(s.startUv.u || 0)), Ae = Number(ee.v || 0) - Number(s.startUv.v || 0);
      eu((m = s.item) == null ? void 0 : m.actionGroupId, ce, Ae, s.snapshot, (y = s.item) == null ? void 0 : y.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !1 }), he({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const ee = d.mode === "frame" ? (() => {
        const ke = $e();
        return ke ? En(o, ke, performance.now()) : null;
      })() : Tn(o, performance.now());
      if (!ee || !s.startUv) return;
      const ce = wn(Number(ee.u || 0), Number(s.startUv.u || 0)), Ae = Number(ee.v || 0) - Number(s.startUv.v || 0);
      nu(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((w = s.item) == null ? void 0 : w.id) || "", ce, Ae, s.snapshot) && (vi(), he({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_raster_object") {
      const ce = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      zm(((M = s.item) == null ? void 0 : M.rasterObjectId) || ((k = s.item) == null ? void 0 : k.id) || "", ce, s.snapshot) && (vi(), he({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_multi") {
      const ee = o.x - Number(((N = s.offset) == null ? void 0 : N.x) || 0), ce = o.y - Number(((T = s.offset) == null ? void 0 : T.y) || 0);
      let Ae = !1, ke = !1, Me = !1;
      const Le = ee - Number((($ = s.startCenter) == null ? void 0 : $.x) || ee), Ye = ce - Number(((Q = s.startCenter) == null ? void 0 : Q.y) || ce);
      for (const je of Array.isArray(s.stickerSnapshots) ? s.stickerSnapshots : []) {
        const et = (t === "cutout" ? js() : Zn()).find((rt) => String((rt == null ? void 0 : rt.id) || "") === String(je.id || ""));
        if (!et || !gt(et)) continue;
        const Ct = {
          x: Number(((B = je.center) == null ? void 0 : B.x) || 0) + Le,
          y: Number(((W = je.center) == null ? void 0 : W.y) || 0) + Ye
        };
        if (d.mode === "frame" && t === "cutout") {
          const rt = $e(), St = tn(rt);
          if (!rt || !St) continue;
          const tr = {
            x: K((Ct.x - St.x) / Math.max(1, St.w), 0, 1),
            y: K((Ct.y - St.y) / Math.max(1, St.h), 0, 1)
          }, go = il(rt, tr);
          if (!go) continue;
          const bo = Ro(go);
          et.yaw_deg = bo.yaw, et.pitch_deg = bo.pitch;
        } else if (d.mode === "unwrap") {
          const rt = vr(), St = K((Ct.x - rt.x) / Math.max(rt.w, 1), 0, 1), tr = K((Ct.y - rt.y) / Math.max(rt.h, 1), 0, 1);
          et.yaw_deg = Ft(St * 360 - 180), et.pitch_deg = K(90 - tr * 180, -90, 90);
        } else {
          const rt = Js(Ct.x, Ct.y), St = Ro(rt);
          et.yaw_deg = St.yaw, et.pitch_deg = St.pitch;
        }
        Ae = !0;
      }
      for (const je of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const et = {
          x: Number(((ae = je.center) == null ? void 0 : ae.x) || 0) + Le,
          y: Number(((ue = je.center) == null ? void 0 : ue.y) || 0) + Ye
        }, Ct = d.mode === "frame" ? (() => {
          const St = $e();
          return St ? En(et, St, performance.now()) : null;
        })() : Tn(et, performance.now()), rt = je.centerUv || null;
        if (Ct && rt) {
          const St = wn(Number(Ct.u || 0), Number(rt.u || 0)), tr = Number(Ct.v || 0) - Number(rt.v || 0);
          eu(je.id, St, tr, je.snapshot, je.layerKind, je.frameSnapshot) && (Ae = !0, ke = !0);
        }
      }
      for (const je of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const et = {
          x: Number(((ne = je.center) == null ? void 0 : ne.x) || 0) + Le,
          y: Number(((me = je.center) == null ? void 0 : me.y) || 0) + Ye
        }, Ct = d.mode === "frame" ? (() => {
          const St = $e();
          return St ? En(et, St, performance.now()) : null;
        })() : Tn(et, performance.now()), rt = je.centerUv || null;
        if (Ct && rt) {
          const St = wn(Number(Ct.u || 0), Number(rt.u || 0)), tr = Number(Ct.v || 0) - Number(rt.v || 0);
          nu(je.id, St, tr, je.snapshot) && (Ae = !0, Me = !0);
        }
      }
      Ae && (ke ? In({ rebuildPaintEngine: !1 }) : Me ? vi() : jt(), he({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const ce = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      tu((Te = s.item) == null ? void 0 : Te.actionGroupId, ce, 0, s.snapshot, (Oe = s.item) == null ? void 0 : Oe.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !1 }), he({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let ee = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * Sn;
      r.shiftKey && (ee = Math.round(ee / 45) * 45), tu((Ge = s.item) == null ? void 0 : Ge.actionGroupId, 1, ee, s.snapshot, (de = s.item) == null ? void 0 : de.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !1 }), he({ localOnly: !0 }));
      return;
    }
    if (s.kind === "marquee_select") {
      s.current = o, he({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale") {
      const ce = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = K(s.startHFOV * ce, 1, 179), s.item.vFOV_deg = K(s.startVFOV * ce, 1, 179), s.item.aspect_id = Kr(s.item), gt(s.item) && jt(), he({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_x") {
      const ce = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.hFOV_deg = K(s.startHFOV * ce, 1, 179), s.item.aspect_id = Kr(s.item), gt(s.item) && jt(), he({ localOnly: !0 });
      return;
    }
    if (s.kind === "scale_y") {
      const ce = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / s.startDist;
      s.item.vFOV_deg = K(s.startVFOV * ce, 1, 179), s.item.aspect_id = Kr(s.item), gt(s.item) && jt(), he({ localOnly: !0 });
      return;
    }
    if (s.kind === "rotate") {
      let ce = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - s.startAng) * Sn, Ae = s.startRot - ce;
      r.shiftKey && (Ae = Math.round(Ae / 45) * 45);
      const ke = gt(s.item) ? "rot_deg" : "roll_deg";
      s.item[ke] = Ae, gt(s.item) && jt(), he({ localOnly: !0 });
    }
  }, L.onpointerup = () => {
    var o, s, c, h, m, y, g;
    const r = d.interaction;
    if (((o = d.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
      pi();
      const w = dl(d.interaction), M = !!d.interaction._hasCommittedSegments;
      if (w || M) {
        In();
        const k = String(((c = d.interaction.stroke) == null ? void 0 : c.actionGroupId) || "").trim();
        if (k) {
          const T = Bt().find(($) => String(($ == null ? void 0 : $.actionGroupId) || "") === k);
          T && (T.frame = null);
        }
        const N = mn();
        N && (w ? String(((h = d.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (d.paintEngine.cancelActiveStroke(N), ku()) : d.paintEngine.commitActiveStroke(d.interaction.stroke, N) : d.paintEngine.cancelActiveStroke(N)), Qe(), pn(), ze(), Ue(), e.setDirtyCanvas(!0, !0), he();
      } else {
        const k = mn();
        k && d.paintEngine.cancelActiveStroke(k);
      }
    } else if (((m = d.interaction) == null ? void 0 : m.kind) === "marquee_select") {
      const w = Yu(d.interaction.start, d.interaction.current), k = [
        ...t === "cutout" ? rl().filter((N) => !hn(N)) : [...Zn()],
        ...Om(),
        ...Rm()
      ].filter((N) => Kg(w, $t(N)));
      Hm(k, ((y = k[k.length - 1]) == null ? void 0 : y.id) || null), t === "cutout" && k.length && (d.cutoutAspectOpen = !1), ze(), Ue(), he();
    } else if (((g = d.interaction) == null ? void 0 : g.kind) === "pan_frame")
      d.interaction.changed && (Qe(), ot(), ze());
    else if (d.interaction && d.interaction.kind !== "view") {
      let w = !1;
      (d.interaction.kind === "move_stroke_group" || d.interaction.kind === "scale_stroke_group" || d.interaction.kind === "rotate_stroke_group") && (w = !0), (d.interaction.kind === "move_raster_object" || d.interaction.kind === "scale_raster_object") && (w = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length && (w = !0), d.interaction.kind === "move_multi" && Array.isArray(d.interaction.rasterSnapshots) && d.interaction.rasterSnapshots.length && (w = !0), w && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(d.interaction.kind) || d.interaction.kind === "move_multi" && Array.isArray(d.interaction.strokeSnapshots) && d.interaction.strokeSnapshots.length ? In({ rebuildPaintEngine: !0 }) : vi()), Qe(), pn(), e.setDirtyCanvas(!0, !0), na(), d.hqFrames = 1, Ue(), he();
    }
    d.interaction = null, pi(), r && r.kind === "view" && Vt.endDrag(performance.now()), Fr(), Ue(), ct(d.pointerPos), he();
  }, L.onpointercancel = () => {
    var r, o, s;
    if (!fl()) {
      if (((r = d.interaction) == null ? void 0 : r.kind) === "view" && Vt.endDrag(performance.now()), ((o = d.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = d.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        pi();
        const c = mn();
        c && d.paintEngine.cancelActiveStroke(c);
      }
      d.interaction = null, pi(), Fr(), ct(d.pointerPos), he({ localOnly: !0 });
    }
  }, L.onlostpointercapture = () => {
    fl();
  }, L.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, L.onmousemove = (r) => {
    const o = _i(r);
    co(o, !0), !d.interaction && ct(o);
  }, L.onmouseleave = () => {
    co(d.pointerPos, !1), ct(d.pointerPos);
  }, L.onwheel = (r) => {
    if (d.mode === "frame") {
      const o = _i(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      Og(o, s) && he({ localOnly: !0 }), r.preventDefault();
      return;
    }
    d.mode === "pano" && (Vt.applyWheelEvent(r) && he({ localOnly: !0 }), r.preventDefault());
  }, L.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), Or(!0));
  }, L.ondrop = (r) => {
    var c;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), Xe.depth = 0, Or(!1);
    const s = Array.from(((c = r.dataTransfer) == null ? void 0 : c.files) || []).find((h) => oo(h));
    s && Ou(s);
  };
  const qu = (r) => {
    t !== "stickers" && t !== "cutout" || i || Rs(r) && (Xe.depth += 1, Or(!0), r.preventDefault());
  }, Xu = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!Xe.active && Rs(r) && Or(!0), Xe.active && r.preventDefault());
  }, Ju = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !Xe.active) return;
    Xe.depth = Math.max(0, Xe.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (Xe.depth === 0 || o) && Or(!1);
  }, Zu = (r) => {
    t !== "stickers" && t !== "cutout" || i || (Xe.depth = 0, Or(!1), Rs(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", qu, !0), window.addEventListener("dragover", Xu, !0), window.addEventListener("dragleave", Ju, !0), window.addEventListener("drop", Zu, !0);
  function ml() {
    const { canUndo: r, canRedo: o } = Du();
    ua(P.toolButtons, "value", "undo", { disabled: !r }), ua(P.toolButtons, "value", "redo", { disabled: !o });
  }
  const Qu = (r, o, s = !1) => {
    var w;
    const c = t === "cutout" && d.mode === "frame" ? $e() : null, h = c || bt(), m = c ? "shot" : Ya();
    if (!h || m === "stroke") return;
    const y = (((w = P.sidePanel) == null ? void 0 : w.params) || []).find((M) => M.key === r);
    if (!y || y.enabled === !1) return;
    let g = Number(o);
    Number.isNaN(g) && (g = 0), g = K(g, Number(y.min), Number(y.max)), r === "yaw_deg" && (g = Ft(g)), h[r] = g, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (h.aspect_id = Kr(h)), ze(), he(), s && Qe();
  };
  pe == null || pe.addEventListener("click", async (r) => {
    var c, h, m, y, g, w, M, k, N;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const T = Ht(o.getAttribute("data-coverage"));
      if (T === Ht(v.coverage)) return;
      v.coverage = T, d.coverage = T, p && (p.value = String(T)), l ? se.backgroundDirty = !0 : (pn(), Eg({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), ze(), Ue(), he();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((h = (c = P.sidePanel) == null ? void 0 : c.selectionPicker) != null && h.disabled) return;
      P.sidePanel.selectionPicker.open = !P.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      P.sidePanel.selectionPicker.open = !1;
      const T = String(o.getAttribute("data-selection-id") || "");
      let $ = null;
      T && (t === "stickers" ? $ = Zn().find((Q) => String((Q == null ? void 0 : Q.id) || "") === T) || null : $ = ((m = ru().find((Q) => {
        var B;
        return String(((B = Q == null ? void 0 : Q.item) == null ? void 0 : B.id) || "") === T;
      })) == null ? void 0 : m.item) || null), ui($ || null), $ && !Et($) && Fs(
        Ft(Number($.yaw_deg || 0)),
        K(Number($.pitch_deg || 0), -89.9, 89.9),
        d.viewFov
      ), ze(), Ue(), he();
      return;
    }
    if (s === "copy-state-inline") {
      const T = bt(), $ = Ya();
      if (!T || $ === "stroke" || Cn().length > 1) return;
      const Q = JSON.stringify(t === "cutout" && $ !== "image" ? uu(T) : tp(T));
      try {
        await navigator.clipboard.writeText(Q), (y = P.sidePanel) != null && y.copyStateButton && (P.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var B;
          (B = P.sidePanel) != null && B.copyStateButton && (P.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (s === "toggle-visibility") {
      const T = String(o.getAttribute("data-visibility") || "");
      T === "panorama" ? d.showPanorama = !d.showPanorama : T === "objects" ? d.showObjects = !d.showObjects : T === "mask" && (d.showMask = !d.showMask), ze(), he();
      return;
    }
    if (s === "set-invert-x") {
      v.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", so(), ze(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), he();
      return;
    }
    if (s === "set-invert-y") {
      v.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", so(), ze(), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0), he();
      return;
    }
    if (s === "toggle-quality-picker") {
      (M = P.sidePanel) != null && M.uiSettings && (P.sidePanel.uiSettings.qualityOpen = !P.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const T = String(o.getAttribute("data-quality") || "balanced");
      v.ui_settings.preview_quality = T === "draft" || T === "high" ? T : "balanced", so(), ze(), (k = e.setDirtyCanvas) == null || k.call(e, !0, !0), he();
      return;
    }
    if (s === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, v.ui_settings.preview_quality = "balanced", so(), ze(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), he();
      return;
    }
    if (s === "close-preview") {
      Si();
      return;
    }
    if (s === "cancel-close") {
      Si();
      return;
    }
    s === "save-close" && (Ig(), Si());
  }), pe == null || pe.addEventListener("input", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Qu(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), pe == null || pe.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && Qu(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const pl = () => {
    const r = !!d.showGrid;
    ua(P.floatingButtons, "action", "toggle-grid", {
      icon: r ? De.eye : De.eye_dashed,
      pressed: r ? "true" : "false",
      label: r ? "Hide Grid" : "Show Grid",
      tip: r ? "Hide grid" : "Show grid"
    });
  };
  pl(), Y.addEventListener("click", (r) => {
    var g, w, M, k;
    if ((w = (g = r.target) == null ? void 0 : g.matches) != null && w.call(g, "[data-confirm-overlay]")) {
      const N = (M = P.confirmDialog) == null ? void 0 : M.resolve;
      P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, N == null || N(!1);
      return;
    }
    const o = r.target.closest("[data-view]");
    if (o) {
      if (o.disabled) return;
      const N = d.mode;
      d.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && d.mode === "frame" && (N !== "frame" && (se.frameSafeRect = null), ze(), Ue()), ll(), Fr(), he();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const N = String(s.getAttribute("data-tool-mode") || "cursor");
        d.primaryTool = N, (N === "paint" || N === "mask") && Xi({ preservePanelValues: !0 }), cn(), ze(), Ue(), he();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const N = String(s.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && s.disabled) return;
        N === "undo" ? sl(-1) : N === "redo" ? sl(1) : N === "clear" ? Ng() : N === "add" || N === "add-image" ? yg() : N === "add-or-look" && wg();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        d.primaryTool = "paint";
        const N = String(s.getAttribute("data-paint-tool") || "pen");
        d.paintTool = N, Xi({ preservePanelValues: !0 }), un[N] && (d.activeBrushPresetId = N), cn(), ze(), Ue(), he();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        d.primaryTool = "mask", d.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), Xi({ preservePanelValues: !0 }), cn(), ze(), Ue(), he();
        return;
      }
      if (s.matches("[data-paint-layer-clear-current]")) {
        const N = String(s.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        kg(N);
        return;
      }
      if (s.matches("[data-paint-color-swatch]")) {
        const N = Xo.find((T) => T.id === s.getAttribute("data-paint-color-swatch"));
        if (!N) return;
        d.paintColor = gn(N.color), I(!0), cn();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), qe && !qe.hidden ? I(!0) : G(), cn();
        return;
      }
    }
    const c = String(((k = s == null ? void 0 : s.getAttribute) == null ? void 0 : k.call(s, "data-action")) || "");
    if (c === "video-play-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(z instanceof HTMLVideoElement)) return;
      if (mi(), z.paused) {
        X.mode = "playback", X.pendingPlaybackResume = !1, X.resumeAfterScrub = !1;
        const N = Number(P.videoTransport.duration || z.duration || 0), T = Number(z.currentTime || X.editorTime || 0), $ = N > 0 && T >= N - 1e-3 ? 0 : Number(X.editorTime || T || 0), Q = Math.max(oi(), 0.04);
        X.editorTime = $, Math.abs(T - $) > Q ? (X.seeking = !1, X.pendingPlaybackResume = !0, Ws($)) : z.play().catch(() => {
        });
      } else
        z.pause(), X.mode = "scrub", X.resumeAfterScrub = !1, X.pendingPlaybackResume = !1, X.editorTime = Number(z.currentTime || 0), hi();
      Fn({
        ready: !!z.getAttribute("src"),
        playing: !z.paused && !z.ended,
        visible: Qn(),
        currentTime: X.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: X.mode
      }), he({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (c === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(z instanceof HTMLVideoElement) || !P.videoTransport.hasAudio) return;
      const N = !z.muted;
      z.muted = N, !N && Number(z.volume || 0) <= 0 && (z.volume = Math.max(0.01, Number(P.videoTransport.volume || 1))), Fn({
        ready: !!z.getAttribute("src"),
        playing: !z.paused && !z.ended,
        visible: Qn(),
        currentTime: X.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: X.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: z.muted,
        volume: Number(z.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (c === "video-loop-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !(z instanceof HTMLVideoElement)) return;
      const N = !P.videoTransport.loop;
      P.videoTransport.loop = N, z.loop = N, Fn({
        ready: !!z.getAttribute("src"),
        playing: !z.paused && !z.ended,
        visible: Qn(),
        currentTime: X.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: X.mode,
        hasAudio: P.videoTransport.hasAudio,
        loop: N,
        muted: z.muted,
        volume: Number(z.volume ?? P.videoTransport.volume ?? 1)
      }), typeof (s == null ? void 0 : s.blur) == "function" && s.blur();
      return;
    }
    if (!i) {
      if (c === "frame-aspect") {
        P.frameRail.aspectOpen = !P.frameRail.aspectOpen;
        return;
      }
      if (c === "frame-aspect-set") {
        const N = d.mode === "frame" ? $e() : null;
        if (!N) return;
        $u(N, String(s.getAttribute("data-aspect") || "1:1")), P.frameRail.aspectOpen = !1, na(), Qe(), ot(), Fr(), he();
        return;
      }
      if (c === "frame-rotate-90") {
        const N = d.mode === "frame" ? $e() : null;
        if (!N) return;
        ju(N), P.frameRail.aspectOpen = !1, na(), Qe(), ot(), Fr(), he();
        return;
      }
      if (c === "aspect") {
        d.cutoutAspectOpen = !d.cutoutAspectOpen, d.menuSize.measured = !1, Ue(), he();
        return;
      }
      if (c === "aspect-set") {
        const N = bt();
        if (!N) return;
        const T = String(s.getAttribute("data-aspect") || "1:1");
        $u(N, T), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, na(), Qe(), ot(), Ue(), he();
        return;
      }
      if (c === "rotate-90") {
        const N = bt();
        if (!N) return;
        ju(N), d.cutoutAspectOpen = !1, d.menuSize.measured = !1, na(), Qe(), ot(), Ue(), he();
        return;
      }
      if (c === "bring-front") {
        Ag();
        return;
      }
      if (c === "send-back") {
        Cg();
        return;
      }
      if (c === "duplicate") {
        Pg();
        return;
      }
      if (c === "replace-image") {
        _g();
        return;
      }
      if (c === "toggle-lock") {
        Vm();
        return;
      }
      if (c === "back-initial") {
        Ym();
        return;
      }
      if (c === "toggle-visible") {
        Wm();
        return;
      }
      if (c === "delete") {
        Lu();
        return;
      }
    }
    if (c === "reset-view") {
      Fs(0, 0, 100, 180, 680);
      return;
    }
    if (c === "toggle-grid") {
      d.showGrid = !d.showGrid, Aw(e == null ? void 0 : e.id, d.showGrid), pl(), he();
      return;
    }
    if (c === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), Xg();
      return;
    }
    if (c === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const N = !d.outputPreviewExpanded;
      d.outputPreviewExpanded = N, d.outputPreviewAnimFrom = d.outputPreviewAnim, d.outputPreviewAnimTo = N ? 1 : 0, d.outputPreviewAnimStartTs = performance.now(), af(), he();
      return;
    }
    const h = r.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), y = d.customPaintHistory[m];
    y && (d.customPaintColor = gn(y), d.paintColor = gn(y), cn());
  }), Y.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!(z instanceof HTMLVideoElement)) return;
      mi();
      const m = K(Number(o.value || 0), 0, Number(P.videoTransport.duration || 0));
      X.mode = "scrub", !X.seeking && !z.paused && !z.ended && (X.resumeAfterScrub = !0, z.pause()), X.editorTime = m, Jc(m), Fn({
        ready: !!z.getAttribute("src"),
        playing: !1,
        visible: Qn(),
        currentTime: m,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: "scrub"
      }), Number(Pe.__panoFrameIdx || 0) > 0 && (se.backgroundDirty = !0, se.dirty = !0, he({ cause: "frame_view", localOnly: !0 })), Ws(m);
      return;
    }
    const s = r.target.closest("[data-video-volume]");
    if (s) {
      if (!(z instanceof HTMLVideoElement)) return;
      const m = K(Number(s.value || 0), 0, 1);
      z.volume = m, z.muted = m <= 1e-4, Fn({
        ready: !!z.getAttribute("src"),
        playing: !z.paused && !z.ended,
        visible: Qn(),
        currentTime: X.editorTime,
        duration: P.videoTransport.duration,
        frameCount: P.videoTransport.frameCount,
        fps: P.videoTransport.fps,
        mode: X.mode,
        hasAudio: P.videoTransport.hasAudio,
        muted: z.muted,
        volume: m
      });
      return;
    }
    const c = r.target.closest("[data-paint-size-slider]");
    if (c) {
      if (c.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(c.value)))), y = wr(d.primaryTool === "paint" ? d.paintTool : d.maskTool);
      d.brushSizes[y] = m, cn(), $g();
      return;
    }
    const h = r.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...d.customPaintColor, a: K(Number(h.value) / 100, 0, 1) };
      d.customPaintColor = gn(m), d.paintColor = gn(m), cn();
    }
  }), Y.addEventListener("change", (r) => {
    var o;
    if (r.target.closest("[data-video-seek]")) {
      if (!(z instanceof HTMLVideoElement)) return;
      X.pendingPlaybackResume = !!X.resumeAfterScrub, X.resumeAfterScrub = !1, X.pendingPlaybackResume || (X.mode = "scrub"), X.seeking || (X.pendingPlaybackResume ? (X.pendingPlaybackResume = !1, X.mode = "playback", z.play().catch(() => {
      })) : (hi(), he({ cause: "frame_view", localOnly: !0 })));
      return;
    }
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && uo();
  }), Y.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && uo();
  }), Y.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && uo();
  }), Y.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && uo();
  }), Y.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !Y.contains(o) || Ke.target !== o && (Ke.target = o, Ke.timer && clearTimeout(Ke.timer), Ke.timer = window.setTimeout(() => {
      Ke.target === o && Wg(o);
    }, 220));
  }), Y.addEventListener("pointerout", (r) => {
    var c, h;
    const o = r.target.closest("[data-tip]");
    !o || Ke.target !== o || (r.relatedTarget instanceof Element ? (h = (c = r.relatedTarget).closest) == null ? void 0 : h.call(c, "[data-tip]") : null) === o || fo();
  }), Y.addEventListener("pointerdown", () => {
    fo();
  });
  const Yg = (r, o) => {
    var g;
    if (!Qt) return;
    const s = Qt.getBoundingClientRect(), c = K((r - s.left) / Math.max(1, s.width), 0, 1), h = 1 - K((o - s.top) / Math.max(1, s.height), 0, 1), m = Yl(d.customPaintColor), y = { ...Wl(m.h, c, h), a: Number(((g = d.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    d.customPaintColor = gn(y), d.paintColor = gn(y), cn();
  }, qg = (r) => {
    var m;
    if (!_n) return;
    const o = _n.getBoundingClientRect(), s = K((r - o.left) / Math.max(1, o.width), 0, 1), c = Yl(d.customPaintColor), h = { ...Wl(s, c.s, c.v), a: Number(((m = d.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    d.customPaintColor = gn(h), d.paintColor = gn(h), cn();
  }, ef = (r, o) => {
    const s = r.pointerId;
    o(r);
    const c = (m) => {
      m.pointerId === s && o(m);
    }, h = (m) => {
      m.pointerId === s && (window.removeEventListener("pointermove", c), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", c), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  Qt && (Qt.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), ef(r, (o) => Yg(o.clientX, o.clientY));
  }), _n && (_n.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), ef(r, (o) => qg(o.clientX));
  }), Y.addEventListener("click", (r) => {
    var h;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", c = (h = P.confirmDialog) == null ? void 0 : h.resolve;
    P.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, c == null || c(s);
  });
  const tf = () => {
    const r = !!d.fullscreen;
    ua(P.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? De.fullscreen_close : De.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, ho = (r) => {
    const o = !!r;
    d.fullscreen !== o && (d.fullscreen = o, Y.classList.toggle("pano-modal-fullscreen", o), o ? (d.fullscreenPrevShowGrid = !!d.showGrid, d.showGrid = !1) : d.fullscreenPrevShowGrid !== null && (d.showGrid = !!d.fullscreenPrevShowGrid, d.fullscreenPrevShowGrid = null), pl(), tf(), ai(), he());
  }, nf = () => document.fullscreenElement === F, Xg = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        ho(!d.fullscreen);
        return;
      }
      nf() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = F.requestFullscreen) == null ? void 0 : r.call(F));
    } catch {
      ho(!d.fullscreen);
    }
  }, rf = () => {
    document.fullscreenEnabled && ho(nf());
  };
  document.addEventListener("fullscreenchange", rf), tf();
  const af = () => {
    const r = !!d.outputPreviewExpanded;
    P.outputPreviewToggle.icon = r ? De.fullscreen_close : De.fullscreen, P.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", P.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  af();
  const gl = e.onExecuted, bl = e.onConnectionsChange;
  let yl = null, vl = null, _l = null;
  !i && t === "stickers" && (_l = (r = "sync") => {
    fu(r);
  }, e.__panoExternalStickerSync = _l, yl = function(...o) {
    var s;
    typeof gl == "function" && gl.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = yl, vl = function(...o) {
    var s;
    typeof bl == "function" && bl.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = vl), i || Ad.set(String(e.id ?? "0"), () => bu());
  let wi = null;
  const Si = async () => wi || (wi = (async () => {
    var r, o, s, c, h, m, y, g, w, M, k;
    return Ad.delete(String(e.id ?? "0")), Rg(), i || pn(), document.fullscreenElement === F && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", rf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (h = (c = e.graph) == null ? void 0 : c.setDirtyCanvas) == null || h.call(c, !0, !0), (g = (y = (m = bn) == null ? void 0 : m.canvas) == null ? void 0 : y.setDirty) == null || g.call(y, !0, !0), fo(), bg(), z instanceof HTMLVideoElement && z.pause(), Ze.forEach((N) => {
      try {
        N();
      } catch {
      }
    }), (w = we == null ? void 0 : we.dispose) == null || w.call(we), (M = q == null ? void 0 : q.unmount) == null || M.call(q), (k = re == null ? void 0 : re.dispose) == null || k.call(re), Or(!1), window.removeEventListener("keydown", of, !0), window.removeEventListener("keydown", sf, !0), window.removeEventListener("keydown", mo, !0), window.removeEventListener("keyup", mo, !0), window.removeEventListener("keydown", lf, !0), window.removeEventListener("dragenter", qu, !0), window.removeEventListener("dragover", Xu, !0), window.removeEventListener("dragleave", Ju, !0), window.removeEventListener("drop", Zu, !0), !i && t === "stickers" && (e.onExecuted === yl && (e.onExecuted = gl), e.onConnectionsChange === vl && (e.onConnectionsChange = bl), e.__panoExternalStickerSync === _l && (e.__panoExternalStickerSync = null)), E.unmount(), D.remove(), Tg(), wi = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), wi = null, !1)), wi), of = (r) => {
    var o, s, c, h, m;
    if (r.key === "Escape") {
      if (fl()) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r);
        return;
      }
      if (d.fullscreen && document.fullscreenElement === F) {
        r.preventDefault(), r.stopPropagation(), (s = r.stopImmediatePropagation) == null || s.call(r), (c = document.exitFullscreen) == null || c.call(document).catch(() => {
        });
        return;
      }
      if (d.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (h = r.stopImmediatePropagation) == null || h.call(r), ho(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (m = r.stopImmediatePropagation) == null || m.call(r), Si();
    }
  }, sf = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), c = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || c === 46) && !(o === "Backspace" || s === "Backspace" || c === 8)) return;
    const y = r.target, g = ((y == null ? void 0 : y.tagName) || "").toUpperCase();
    g === "INPUT" || g === "TEXTAREA" || y != null && y.isContentEditable || !bt() || (Lu(), r.preventDefault(), r.stopPropagation());
  }, mo = (r) => {
    const o = !!(r.ctrlKey || r.metaKey);
    d.marqueeModifier !== o && (d.marqueeModifier = o, ct(d.pointerPos));
  }, lf = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const c = r.target, h = ((c == null ? void 0 : c.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || c != null && c.isContentEditable) return;
    const { canUndo: m, canRedo: y } = Du();
    r.shiftKey && !y || !r.shiftKey && !m || (sl(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", of, !0), window.addEventListener("keydown", sf, !0), window.addEventListener("keydown", mo, !0), window.addEventListener("keyup", mo, !0), window.addEventListener("keydown", lf, !0), F.addEventListener("pointerdown", (r) => {
    r.target === F && Si();
  });
  function Ln(r, o, { rollbackState: s = !1 } = {}) {
    let c = "";
    try {
      s && (c = JSON.stringify(v)), o();
    } catch (h) {
      if (c)
        try {
          const m = JSON.parse(c);
          Object.keys(v).forEach((y) => delete v[y]), Object.assign(v, m), i || pn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${r}" rollback failed`, m);
        }
      P.stageWarningDetail = `boot:${r}`, console.error(`[PanoramaStickers] editor boot step "${r}" failed`, h);
    }
  }
  Ln("cutout-focus", ip), !i && t === "stickers" && Ln("external-sticker-sync", () => fu("open"), { rollbackState: !0 }), xg().catch((r) => {
    P.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', r);
  }), Ln("history", Qe), Ln("undo-redo", ml), Ln("paint-ui", cn), Ln("side-panel", ze), Ln("look-at-frame", qs), Ln("video-source", mi), Ln("canvas-size", Tu), Ln("cursor", () => ct(d.pointerPos)), he(), se.rafId = requestAnimationFrame(Eu);
}
function Od(e, t, n, i) {
  if (!(e != null && e.prototype)) return;
  const a = (b) => {
    var _, x;
    try {
      (_ = b.__panoDomRestore) == null || _.call(b);
    } catch {
    }
    try {
      (x = b.__panoLegacyRestore) == null || x.call(b);
    } catch {
    }
    b.__panoDomPreview = null, b.__panoLegacyPreviewHooked = !1, b.__panoPreviewHooked = !1, b.__panoPreviewAttached = !1, b.__panoPreviewMountKey = null;
  };
  function l(b) {
    var A;
    const _ = `editor_btn|${n}`;
    if (b.__panoPreviewAttached === !0 && b.__panoPreviewMountKey === _) return;
    a(b), n === "PanoramaStickers" && Rw(b), Kc(b), Lw(b, bs);
    const S = Nn(b, bs);
    if (S && !S.__panoPreviewPatchedCb) {
      S.__panoPreviewPatchedCb = !0;
      const v = S.callback;
      S.callback = (R) => {
        var j;
        const H = v ? v(R) : void 0;
        return (j = b.setDirtyCanvas) == null || j.call(b, !0, !1), H;
      };
    }
    if (n === "PanoramaStickers") {
      const v = Nn(b, "bg_color");
      v && (v.value == null || String(v.value).trim() === "" || String(v.value).toLowerCase() === "#000000") && (v.value = "#00ff00", (A = v.callback) == null || A.call(v, "#00ff00")), yc(b, i, () => ka(b, "stickers"));
      {
        b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = _;
        return;
      }
    }
    yc(b, i, () => ka(b, "cutout")), y1(b, {
      buttonText: i,
      onOpen: () => ka(b, "cutout")
    }), (!Array.isArray(b.size) || b.size[0] < 10 || b.size[1] < 10) && (b.size = [360, 260]), b.__panoPreviewAttached = !0, b.__panoPreviewMountKey = _;
  }
  const u = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const b = u ? u.apply(this, arguments) : void 0;
    return l(this), b;
  };
  const f = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const b = f ? f.apply(this, arguments) : void 0;
    return this.widgets && l(this), b;
  };
  const p = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const b = p ? p.apply(this, arguments) : void 0;
    return this.widgets && l(this), b;
  };
}
function Xw(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const i = n ? n.apply(this, arguments) : void 0;
    return t.call(this), i;
  };
}
function Jw(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    Kc(e), yc(e, "Open Preview", () => ka(e, "stickers", { readOnly: !0, hideSidebar: !1 })), b1(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (l) => ka(l, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
bn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && Od(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && Od(e, t, "PanoramaCutout", "Open Cutout Editor"), cs(n) && Xw(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    Kc(e), cs(t) && Jw(e);
  }
});
