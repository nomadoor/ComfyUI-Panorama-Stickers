import * as Go from "../../scripts/app.js";
import { app as yn } from "../../scripts/app.js";
import { api as on } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Mc(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ft = {}, Fi = [], Xn = () => {
}, Xd = () => !1, Ss = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ms = (e) => e.startsWith("onUpdate:"), tn = Object.assign, Nc = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, m0 = Object.prototype.hasOwnProperty, nt = (e, t) => m0.call(e, t), Ue = Array.isArray, Li = (e) => Ha(e) === "[object Map]", Jd = (e) => Ha(e) === "[object Set]", Sf = (e) => Ha(e) === "[object Date]", Be = (e) => typeof e == "function", Tt = (e) => typeof e == "string", Jn = (e) => typeof e == "symbol", lt = (e) => e !== null && typeof e == "object", Zd = (e) => (lt(e) || Be(e)) && Be(e.then) && Be(e.catch), Qd = Object.prototype.toString, Ha = (e) => Qd.call(e), p0 = (e) => Ha(e).slice(8, -1), eh = (e) => Ha(e) === "[object Object]", kc = (e) => Tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, va = /* @__PURE__ */ Mc(
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
}, th = (e, t, n, i = !1) => {
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
let Mf;
const Ps = () => Mf || (Mf = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Et(e) {
  if (Ue(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const i = e[n], a = Tt(i) ? w0(i) : Et(i);
      if (a)
        for (const c in a)
          t[c] = a[c];
    }
    return t;
  } else if (Tt(e) || lt(e))
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
  if (Tt(e))
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
const S0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", M0 = /* @__PURE__ */ Mc(S0);
function nh(e) {
  return !!e || e === "";
}
function N0(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let i = 0; n && i < e.length; i++)
    n = Pc(e[i], t[i]);
  return n;
}
function Pc(e, t) {
  if (e === t) return !0;
  let n = Sf(e), i = Sf(t);
  if (n || i)
    return n && i ? e.getTime() === t.getTime() : !1;
  if (n = Jn(e), i = Jn(t), n || i)
    return e === t;
  if (n = Ue(e), i = Ue(t), n || i)
    return n && i ? N0(e, t) : !1;
  if (n = lt(e), i = lt(t), n || i) {
    if (!n || !i)
      return !1;
    const a = Object.keys(e).length, c = Object.keys(t).length;
    if (a !== c)
      return !1;
    for (const u in e) {
      const d = e.hasOwnProperty(u), p = t.hasOwnProperty(u);
      if (d && !p || !d && p || !Pc(e[u], t[u]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const rh = (e) => !!(e && e.__v_isRef === !0), mt = (e) => Tt(e) ? e : e == null ? "" : Ue(e) || lt(e) && (e.toString === Qd || !Be(e.toString)) ? rh(e) ? mt(e.value) : JSON.stringify(e, ih, 2) : String(e), ih = (e, t) => rh(t) ? ih(e, t.value) : Li(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [i, a], c) => (n[Al(i, c) + " =>"] = a, n),
    {}
  )
} : Jd(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Al(n))
} : Jn(t) ? Al(t) : lt(t) && !Ue(t) && !eh(t) ? String(t) : t, Al = (e, t = "") => {
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
class ah {
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
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || sh(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Nf(this), lh(this);
    const t = ht, n = Rn;
    ht = this, Rn = !0;
    try {
      return this.fn();
    } finally {
      ch(this), ht = t, Rn = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Tc(t);
      this.deps = this.depsTail = void 0, Nf(this), this.onStop && this.onStop(), this.flags &= -2;
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
let oh = 0, _a, xa;
function sh(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = xa, xa = e;
    return;
  }
  e.next = _a, _a = e;
}
function Ac() {
  oh++;
}
function Cc() {
  if (--oh > 0)
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
function lh(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ch(e) {
  let t, n = e.depsTail, i = n;
  for (; i; ) {
    const a = i.prevDep;
    i.version === -1 ? (i === n && (n = a), Tc(i), A0(i)) : t = i, i.dep.activeLink = i.prevActiveLink, i.prevActiveLink = void 0, i = a;
  }
  e.deps = t, e.depsTail = n;
}
function tc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (uh(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function uh(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Ia) || (e.globalVersion = Ia, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !tc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ht, i = Rn;
  ht = e, Rn = !0;
  try {
    lh(e);
    const a = e.fn(e._value);
    (t.version === 0 || Wn(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    ht = n, Rn = i, ch(e), e.flags &= -3;
  }
}
function Tc(e, t = !1) {
  const { dep: n, prevSub: i, nextSub: a } = e;
  if (i && (i.nextSub = a, e.prevSub = void 0), a && (a.prevSub = i, e.nextSub = void 0), n.subs === e && (n.subs = i, !i && n.computed)) {
    n.computed.flags &= -5;
    for (let c = n.computed.deps; c; c = c.nextDep)
      Tc(c, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function A0(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Rn = !0;
const fh = [];
function pr() {
  fh.push(Rn), Rn = !1;
}
function gr() {
  const e = fh.pop();
  Rn = e === void 0 ? !0 : e;
}
function Nf(e) {
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
let Ia = 0;
class C0 {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ic {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ht || !Rn || ht === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ht)
      n = this.activeLink = new C0(ht, this), ht.deps ? (n.prevDep = ht.depsTail, ht.depsTail.nextDep = n, ht.depsTail = n) : ht.deps = ht.depsTail = n, dh(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const i = n.nextDep;
      i.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = i), n.prevDep = ht.depsTail, n.nextDep = void 0, ht.depsTail.nextDep = n, ht.depsTail = n, ht.deps === n && (ht.deps = i);
    }
    return n;
  }
  trigger(t) {
    this.version++, Ia++, this.notify(t);
  }
  notify(t) {
    Ac();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Cc();
    }
  }
}
function dh(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let i = t.deps; i; i = i.nextDep)
        dh(i);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const nc = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ Symbol(
  ""
), rc = /* @__PURE__ */ Symbol(
  ""
), Da = /* @__PURE__ */ Symbol(
  ""
);
function Zt(e, t, n) {
  if (Rn && ht) {
    let i = nc.get(e);
    i || nc.set(e, i = /* @__PURE__ */ new Map());
    let a = i.get(n);
    a || (i.set(n, a = new Ic()), a.map = i, a.key = n), a.track();
  }
}
function fr(e, t, n, i, a, c) {
  const u = nc.get(e);
  if (!u) {
    Ia++;
    return;
  }
  const d = (p) => {
    p && p.trigger();
  };
  if (Ac(), t === "clear")
    u.forEach(d);
  else {
    const p = Ue(e), y = p && kc(n);
    if (p && n === "length") {
      const _ = Number(i);
      u.forEach((w, S) => {
        (S === "length" || S === Da || !Jn(S) && S >= _) && d(w);
      });
    } else
      switch ((n !== void 0 || u.has(void 0)) && d(u.get(n)), y && d(u.get(Da)), t) {
        case "add":
          p ? y && d(u.get("length")) : (d(u.get(Jr)), Li(e) && d(u.get(rc)));
          break;
        case "delete":
          p || (d(u.get(Jr)), Li(e) && d(u.get(rc)));
          break;
        case "set":
          Li(e) && d(u.get(Jr));
          break;
      }
  }
  Cc();
}
function Ni(e) {
  const t = /* @__PURE__ */ tt(e);
  return t === e ? t : (Zt(t, "iterate", Da), /* @__PURE__ */ kn(e) ? t : t.map(Fn));
}
function As(e) {
  return Zt(e = /* @__PURE__ */ tt(e), "iterate", Da), e;
}
function Bn(e, t) {
  return /* @__PURE__ */ br(e) ? Bi(/* @__PURE__ */ Zr(e) ? Fn(t) : t) : Fn(t);
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
    return ar(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return ar(
      this,
      "filter",
      e,
      t,
      (n) => n.map((i) => Bn(this, i)),
      arguments
    );
  },
  find(e, t) {
    return ar(
      this,
      "find",
      e,
      t,
      (n) => Bn(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return ar(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return ar(
      this,
      "findLast",
      e,
      t,
      (n) => Bn(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return ar(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return ar(this, "forEach", e, t, void 0, arguments);
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
    return ar(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return sa(this, "pop");
  },
  push(...e) {
    return sa(this, "push", e);
  },
  reduce(e, ...t) {
    return kf(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return kf(this, "reduceRight", e, t);
  },
  shift() {
    return sa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return ar(this, "some", e, t, void 0, arguments);
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
    const c = a._next();
    return c.done || (c.value = n(c.value)), c;
  }), a;
}
const I0 = Array.prototype;
function ar(e, t, n, i, a, c) {
  const u = As(e), d = u !== e && !/* @__PURE__ */ kn(e), p = u[t];
  if (p !== I0[t]) {
    const w = p.apply(e, c);
    return d ? Fn(w) : w;
  }
  let y = n;
  u !== e && (d ? y = function(w, S) {
    return n.call(this, Bn(e, w), S, e);
  } : n.length > 2 && (y = function(w, S) {
    return n.call(this, w, S, e);
  }));
  const _ = p.call(u, y, i);
  return d && a ? a(_) : _;
}
function kf(e, t, n, i) {
  const a = As(e), c = a !== e && !/* @__PURE__ */ kn(e);
  let u = n, d = !1;
  a !== e && (c ? (d = i.length === 0, u = function(y, _, w) {
    return d && (d = !1, y = Bn(e, y)), n.call(this, y, Bn(e, _), w, e);
  }) : n.length > 3 && (u = function(y, _, w) {
    return n.call(this, y, _, w, e);
  }));
  const p = a[t](u, ...i);
  return d ? Bn(e, p) : p;
}
function Il(e, t, n) {
  const i = /* @__PURE__ */ tt(e);
  Zt(i, "iterate", Da);
  const a = i[t](...n);
  return (a === -1 || a === !1) && /* @__PURE__ */ Oc(n[0]) ? (n[0] = /* @__PURE__ */ tt(n[0]), i[t](...n)) : a;
}
function sa(e, t, n = []) {
  pr(), Ac();
  const i = (/* @__PURE__ */ tt(e))[t].apply(e, n);
  return Cc(), gr(), i;
}
const D0 = /* @__PURE__ */ Mc("__proto__,__v_isRef,__isVue"), hh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Jn)
);
function E0(e) {
  Jn(e) || (e = String(e));
  const t = /* @__PURE__ */ tt(this);
  return Zt(t, "has", e), t.hasOwnProperty(e);
}
class mh {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, i) {
    if (n === "__v_skip") return t.__v_skip;
    const a = this._isReadonly, c = this._isShallow;
    if (n === "__v_isReactive")
      return !a;
    if (n === "__v_isReadonly")
      return a;
    if (n === "__v_isShallow")
      return c;
    if (n === "__v_raw")
      return i === (a ? c ? U0 : yh : c ? bh : gh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(i) ? t : void 0;
    const u = Ue(t);
    if (!a) {
      let p;
      if (u && (p = T0[n]))
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
    if ((Jn(n) ? hh.has(n) : D0(n)) || (a || Zt(t, "get", n), c))
      return d;
    if (/* @__PURE__ */ en(d)) {
      const p = u && kc(n) ? d : d.value;
      return a && lt(p) ? /* @__PURE__ */ ac(p) : p;
    }
    return lt(d) ? a ? /* @__PURE__ */ ac(d) : /* @__PURE__ */ Cs(d) : d;
  }
}
class ph extends mh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, i, a) {
    let c = t[n];
    const u = Ue(t) && kc(n);
    if (!this._isShallow) {
      const y = /* @__PURE__ */ br(c);
      if (!/* @__PURE__ */ kn(i) && !/* @__PURE__ */ br(i) && (c = /* @__PURE__ */ tt(c), i = /* @__PURE__ */ tt(i)), !u && /* @__PURE__ */ en(c) && !/* @__PURE__ */ en(i))
        return y || (c.value = i), !0;
    }
    const d = u ? Number(n) < t.length : nt(t, n), p = Reflect.set(
      t,
      n,
      i,
      /* @__PURE__ */ en(t) ? t : a
    );
    return t === /* @__PURE__ */ tt(a) && (d ? Wn(i, c) && fr(t, "set", n, i) : fr(t, "add", n, i)), p;
  }
  deleteProperty(t, n) {
    const i = nt(t, n);
    t[n];
    const a = Reflect.deleteProperty(t, n);
    return a && i && fr(t, "delete", n, void 0), a;
  }
  has(t, n) {
    const i = Reflect.has(t, n);
    return (!Jn(n) || !hh.has(n)) && Zt(t, "has", n), i;
  }
  ownKeys(t) {
    return Zt(
      t,
      "iterate",
      Ue(t) ? "length" : Jr
    ), Reflect.ownKeys(t);
  }
}
class O0 extends mh {
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
const R0 = /* @__PURE__ */ new ph(), F0 = /* @__PURE__ */ new O0(), L0 = /* @__PURE__ */ new ph(!0);
const ic = (e) => e, xo = (e) => Reflect.getPrototypeOf(e);
function $0(e, t, n) {
  return function(...i) {
    const a = this.__v_raw, c = /* @__PURE__ */ tt(a), u = Li(c), d = e === "entries" || e === Symbol.iterator && u, p = e === "keys" && u, y = a[e](...i), _ = n ? ic : t ? Bi : Fn;
    return !t && Zt(
      c,
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
function wo(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function z0(e, t) {
  const n = {
    get(a) {
      const c = this.__v_raw, u = /* @__PURE__ */ tt(c), d = /* @__PURE__ */ tt(a);
      e || (Wn(a, d) && Zt(u, "get", a), Zt(u, "get", d));
      const { has: p } = xo(u), y = t ? ic : e ? Bi : Fn;
      if (p.call(u, a))
        return y(c.get(a));
      if (p.call(u, d))
        return y(c.get(d));
      c !== u && c.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && Zt(/* @__PURE__ */ tt(a), "iterate", Jr), a.size;
    },
    has(a) {
      const c = this.__v_raw, u = /* @__PURE__ */ tt(c), d = /* @__PURE__ */ tt(a);
      return e || (Wn(a, d) && Zt(u, "has", a), Zt(u, "has", d)), a === d ? c.has(a) : c.has(a) || c.has(d);
    },
    forEach(a, c) {
      const u = this, d = u.__v_raw, p = /* @__PURE__ */ tt(d), y = t ? ic : e ? Bi : Fn;
      return !e && Zt(p, "iterate", Jr), d.forEach((_, w) => a.call(c, y(_), y(w), u));
    }
  };
  return tn(
    n,
    e ? {
      add: wo("add"),
      set: wo("set"),
      delete: wo("delete"),
      clear: wo("clear")
    } : {
      add(a) {
        const c = /* @__PURE__ */ tt(this), u = xo(c), d = /* @__PURE__ */ tt(a), p = !t && !/* @__PURE__ */ kn(a) && !/* @__PURE__ */ br(a) ? d : a;
        return u.has.call(c, p) || Wn(a, p) && u.has.call(c, a) || Wn(d, p) && u.has.call(c, d) || (c.add(p), fr(c, "add", p, p)), this;
      },
      set(a, c) {
        !t && !/* @__PURE__ */ kn(c) && !/* @__PURE__ */ br(c) && (c = /* @__PURE__ */ tt(c));
        const u = /* @__PURE__ */ tt(this), { has: d, get: p } = xo(u);
        let y = d.call(u, a);
        y || (a = /* @__PURE__ */ tt(a), y = d.call(u, a));
        const _ = p.call(u, a);
        return u.set(a, c), y ? Wn(c, _) && fr(u, "set", a, c) : fr(u, "add", a, c), this;
      },
      delete(a) {
        const c = /* @__PURE__ */ tt(this), { has: u, get: d } = xo(c);
        let p = u.call(c, a);
        p || (a = /* @__PURE__ */ tt(a), p = u.call(c, a)), d && d.call(c, a);
        const y = c.delete(a);
        return p && fr(c, "delete", a, void 0), y;
      },
      clear() {
        const a = /* @__PURE__ */ tt(this), c = a.size !== 0, u = a.clear();
        return c && fr(
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
    n[a] = $0(a, e, t);
  }), n;
}
function Dc(e, t) {
  const n = z0(e, t);
  return (i, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? i : Reflect.get(
    nt(n, a) && a in i ? n : i,
    a,
    c
  );
}
const j0 = {
  get: /* @__PURE__ */ Dc(!1, !1)
}, V0 = {
  get: /* @__PURE__ */ Dc(!1, !0)
}, H0 = {
  get: /* @__PURE__ */ Dc(!0, !1)
};
const gh = /* @__PURE__ */ new WeakMap(), bh = /* @__PURE__ */ new WeakMap(), yh = /* @__PURE__ */ new WeakMap(), U0 = /* @__PURE__ */ new WeakMap();
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
  return /* @__PURE__ */ br(e) ? e : Ec(
    e,
    !1,
    R0,
    j0,
    gh
  );
}
// @__NO_SIDE_EFFECTS__
function K0(e) {
  return Ec(
    e,
    !1,
    L0,
    V0,
    bh
  );
}
// @__NO_SIDE_EFFECTS__
function ac(e) {
  return Ec(
    e,
    !0,
    F0,
    H0,
    yh
  );
}
function Ec(e, t, n, i, a) {
  if (!lt(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const c = G0(e);
  if (c === 0)
    return e;
  const u = a.get(e);
  if (u)
    return u;
  const d = new Proxy(
    e,
    c === 2 ? i : n
  );
  return a.set(e, d), d;
}
// @__NO_SIDE_EFFECTS__
function Zr(e) {
  return /* @__PURE__ */ br(e) ? /* @__PURE__ */ Zr(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Oc(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function tt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ tt(t) : e;
}
function W0(e) {
  return !nt(e, "__v_skip") && Object.isExtensible(e) && th(e, "__v_skip", !0), e;
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
    this.dep = new Ic(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ tt(t), this._value = n ? t : Fn(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, i = this.__v_isShallow || /* @__PURE__ */ kn(t) || /* @__PURE__ */ br(t);
    t = i ? t : /* @__PURE__ */ tt(t), Wn(t, n) && (this._rawValue = t, this._value = i ? t : Fn(t), this.dep.trigger());
  }
}
function Tr(e) {
  return /* @__PURE__ */ en(e) ? e.value : e;
}
const X0 = {
  get: (e, t, n) => t === "__v_raw" ? e : Tr(Reflect.get(e, t, n)),
  set: (e, t, n, i) => {
    const a = e[t];
    return /* @__PURE__ */ en(a) && !/* @__PURE__ */ en(n) ? (a.value = n, !0) : Reflect.set(e, t, n, i);
  }
};
function vh(e) {
  return /* @__PURE__ */ Zr(e) ? e : new Proxy(e, X0);
}
class J0 {
  constructor(t, n, i) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ic(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ia - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = i;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ht !== this)
      return sh(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return uh(this), t && (t.version = this.dep.version), this._value;
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
const So = {}, is = /* @__PURE__ */ new WeakMap();
let Yr;
function Q0(e, t = !1, n = Yr) {
  if (n) {
    let i = is.get(n);
    i || is.set(n, i = []), i.push(e);
  }
}
function eb(e, t, n = ft) {
  const { immediate: i, deep: a, once: c, scheduler: u, augmentJob: d, call: p } = n, y = (D) => a ? D : /* @__PURE__ */ kn(D) || a === !1 || a === 0 ? dr(D, 1) : dr(D);
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
      pr();
      try {
        S();
      } finally {
        gr();
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
    w = () => dr(D(), L);
  }
  const V = P0(), j = () => {
    _.stop(), V && V.active && Nc(V.effects, _);
  };
  if (c && t) {
    const D = t;
    t = (...L) => {
      D(...L), j();
    };
  }
  let k = R ? new Array(e.length).fill(So) : So;
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
              k === So ? void 0 : R && k[0] === So ? [] : k,
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
  return d && d(E), _ = new ah(w), _.scheduler = u ? () => u(E, !1) : E, A = (D) => Q0(D, !1, _), S = _.onStop = () => {
    const D = is.get(_);
    if (D) {
      if (p)
        p(D, 4);
      else
        for (const L of D) L();
      is.delete(_);
    }
  }, t ? i ? E(!0) : k = _.run() : u ? u(E.bind(null, !0), !0) : _.run(), j.pause = _.pause.bind(_), j.resume = _.resume.bind(_), j.stop = j, j;
}
function dr(e, t = 1 / 0, n) {
  if (t <= 0 || !lt(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ en(e))
    dr(e.value, t, n);
  else if (Ue(e))
    for (let i = 0; i < e.length; i++)
      dr(e[i], t, n);
  else if (Jd(e) || Li(e))
    e.forEach((i) => {
      dr(i, t, n);
    });
  else if (eh(e)) {
    for (const i in e)
      dr(e[i], t, n);
    for (const i of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, i) && dr(e[i], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ua(e, t, n, i) {
  try {
    return i ? e(...i) : e();
  } catch (a) {
    Ts(a, t, n);
  }
}
function Zn(e, t, n, i) {
  if (Be(e)) {
    const a = Ua(e, t, n, i);
    return a && Zd(a) && a.catch((c) => {
      Ts(c, t, n);
    }), a;
  }
  if (Ue(e)) {
    const a = [];
    for (let c = 0; c < e.length; c++)
      a.push(Zn(e[c], t, n, i));
    return a;
  }
}
function Ts(e, t, n, i = !0) {
  const a = t ? t.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: u } = t && t.appContext.config || ft;
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
    if (c) {
      pr(), Ua(c, null, 10, [
        e,
        p,
        y
      ]), gr();
      return;
    }
  }
  tb(e, n, a, i, u);
}
function tb(e, t, n, i = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const an = [];
let Un = -1;
const $i = [];
let Ar = null, Ii = 0;
const _h = /* @__PURE__ */ Promise.resolve();
let as = null;
function Rc(e) {
  const t = as || _h;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function nb(e) {
  let t = Un + 1, n = an.length;
  for (; t < n; ) {
    const i = t + n >>> 1, a = an[i], c = Ea(a);
    c < e || c === e && a.flags & 2 ? t = i + 1 : n = i;
  }
  return t;
}
function Fc(e) {
  if (!(e.flags & 1)) {
    const t = Ea(e), n = an[an.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ea(n) ? an.push(e) : an.splice(nb(t), 0, e), e.flags |= 1, xh();
  }
}
function xh() {
  as || (as = _h.then(Sh));
}
function rb(e) {
  Ue(e) ? $i.push(...e) : Ar && e.id === -1 ? Ar.splice(Ii + 1, 0, e) : e.flags & 1 || ($i.push(e), e.flags |= 1), xh();
}
function Pf(e, t, n = Un + 1) {
  for (; n < an.length; n++) {
    const i = an[n];
    if (i && i.flags & 2) {
      if (e && i.id !== e.uid)
        continue;
      an.splice(n, 1), n--, i.flags & 4 && (i.flags &= -2), i(), i.flags & 4 || (i.flags &= -2);
    }
  }
}
function wh(e) {
  if ($i.length) {
    const t = [...new Set($i)].sort(
      (n, i) => Ea(n) - Ea(i)
    );
    if ($i.length = 0, Ar) {
      Ar.push(...t);
      return;
    }
    for (Ar = t, Ii = 0; Ii < Ar.length; Ii++) {
      const n = Ar[Ii];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Ar = null, Ii = 0;
  }
}
const Ea = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Sh(e) {
  try {
    for (Un = 0; Un < an.length; Un++) {
      const t = an[Un];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ua(
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
    Un = -1, an.length = 0, wh(), as = null, (an.length || $i.length) && Sh();
  }
}
let vn = null, Mh = null;
function os(e) {
  const t = vn;
  return vn = e, Mh = e && e.type.__scopeId || null, t;
}
function Nh(e, t = vn, n) {
  if (!t || e._n)
    return e;
  const i = (...a) => {
    i._d && zf(-1);
    const c = os(t);
    let u;
    try {
      u = e(...a);
    } finally {
      os(c), i._d && zf(1);
    }
    return u;
  };
  return i._n = !0, i._c = !0, i._d = !0, i;
}
function Ba(e, t) {
  if (vn === null)
    return e;
  const n = Os(vn), i = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [c, u, d, p = ft] = t[a];
    c && (Be(c) && (c = {
      mounted: c,
      updated: c
    }), c.deep && dr(u), i.push({
      dir: c,
      instance: n,
      value: u,
      oldValue: void 0,
      arg: d,
      modifiers: p
    }));
  }
  return e;
}
function Ur(e, t, n, i) {
  const a = e.dirs, c = t && t.dirs;
  for (let u = 0; u < a.length; u++) {
    const d = a[u];
    c && (d.oldValue = c[u].value);
    let p = d.dir[i];
    p && (pr(), Zn(p, n, 8, [
      e.el,
      d,
      e,
      t
    ]), gr());
  }
}
function ib(e, t) {
  if (Qt) {
    let n = Qt.provides;
    const i = Qt.parent && Qt.parent.provides;
    i === n && (n = Qt.provides = Object.create(i)), n[e] = t;
  }
}
function Ko(e, t, n = !1) {
  const i = ry();
  if (i || ji) {
    let a = ji ? ji._context.provides : i ? i.parent == null || i.ce ? i.vnode.appContext && i.vnode.appContext.provides : i.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return n && Be(t) ? t.call(i && i.proxy) : t;
  }
}
const ab = /* @__PURE__ */ Symbol.for("v-scx"), ob = () => Ko(ab);
function zi(e, t, n) {
  return kh(e, t, n);
}
function kh(e, t, n = ft) {
  const { immediate: i, deep: a, flush: c, once: u } = n, d = tn({}, n), p = t && i || !t && c !== "post";
  let y;
  if (Ra) {
    if (c === "sync") {
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
  c === "post" ? d.scheduler = (A) => {
    fn(A, _ && _.suspense);
  } : c !== "sync" && (w = !0, d.scheduler = (A, v) => {
    v ? A() : Fc(A);
  }), d.augmentJob = (A) => {
    t && (A.flags |= 4), w && (A.flags |= 2, _ && (A.id = _.uid, A.i = _));
  };
  const S = eb(e, t, d);
  return Ra && (y ? y.push(S) : p && S()), S;
}
function sb(e, t, n) {
  const i = this.proxy, a = Tt(e) ? e.includes(".") ? Ph(i, e) : () => i[e] : e.bind(i, i);
  let c;
  Be(t) ? c = t : (c = t.handler, n = t);
  const u = Ga(this), d = kh(a, c.bind(i), n);
  return u(), d;
}
function Ph(e, t) {
  const n = t.split(".");
  return () => {
    let i = e;
    for (let a = 0; a < n.length && i; a++)
      i = i[n[a]];
    return i;
  };
}
const lb = /* @__PURE__ */ Symbol("_vte"), cb = (e) => e.__isTeleport, ub = /* @__PURE__ */ Symbol("_leaveCb");
function Lc(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Lc(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Ah(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Af(e, t) {
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
  const c = i.shapeFlag & 4 ? Os(i.component) : i.el, u = a ? null : c, { i: d, r: p } = e, y = t && t.r, _ = d.refs === ft ? d.refs = {} : d.refs, w = d.setupState, S = /* @__PURE__ */ tt(w), A = w === ft ? Xd : (R) => Af(_, R) ? !1 : nt(S, R), v = (R, V) => !(V && Af(_, V));
  if (y != null && y !== p) {
    if (Cf(t), Tt(y))
      _[y] = null, A(y) && (w[y] = null);
    else if (/* @__PURE__ */ en(y)) {
      const R = t;
      v(y, R.k) && (y.value = null), R.k && (_[R.k] = null);
    }
  }
  if (Be(p))
    Ua(p, d, 12, [u, _]);
  else {
    const R = Tt(p), V = /* @__PURE__ */ en(p);
    if (R || V) {
      const j = () => {
        if (e.f) {
          const k = R ? A(p) ? w[p] : _[p] : v() || !e.k ? p.value : _[e.k];
          if (a)
            Ue(k) && Nc(k, c);
          else if (Ue(k))
            k.includes(c) || k.push(c);
          else if (R)
            _[p] = [c], A(p) && (w[p] = _[p]);
          else {
            const E = [c];
            v(p, e.k) && (p.value = E), e.k && (_[e.k] = E);
          }
        } else R ? (_[p] = u, A(p) && (w[p] = u)) : V && (v(p, e.k) && (p.value = u), e.k && (_[e.k] = u));
      };
      if (u) {
        const k = () => {
          j(), ss.delete(e);
        };
        k.id = -1, ss.set(e, k), fn(k, n);
      } else
        Cf(e), j();
    }
  }
}
function Cf(e) {
  const t = ss.get(e);
  t && (t.flags |= 8, ss.delete(e));
}
Ps().requestIdleCallback;
Ps().cancelIdleCallback;
const Sa = (e) => !!e.type.__asyncLoader, Ch = (e) => e.type.__isKeepAlive;
function fb(e, t) {
  Th(e, "a", t);
}
function db(e, t) {
  Th(e, "da", t);
}
function Th(e, t, n = Qt) {
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
      Ch(a.parent.vnode) && hb(i, t, n, a), a = a.parent;
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
  Dh(() => {
    Nc(i[t], a);
  }, n);
}
function Is(e, t, n = Qt, i = !1) {
  if (n) {
    const a = n[e] || (n[e] = []), c = t.__weh || (t.__weh = (...u) => {
      pr();
      const d = Ga(n), p = Zn(t, n, e, u);
      return d(), gr(), p;
    });
    return i ? a.unshift(c) : a.push(c), c;
  }
}
const yr = (e) => (t, n = Qt) => {
  (!Ra || e === "sp") && Is(e, (...i) => t(...i), n);
}, mb = yr("bm"), Ih = yr("m"), pb = yr(
  "bu"
), gb = yr("u"), $c = yr(
  "bum"
), Dh = yr("um"), bb = yr(
  "sp"
), yb = yr("rtg"), vb = yr("rtc");
function _b(e, t = Qt) {
  Is("ec", e, t);
}
const xb = "components", Eh = /* @__PURE__ */ Symbol.for("v-ndc");
function wb(e) {
  return Tt(e) ? Sb(xb, e, !1) || e : e || Eh;
}
function Sb(e, t, n = !0, i = !1) {
  const a = vn || Qt;
  if (a) {
    const c = a.type;
    {
      const d = ly(
        c,
        !1
      );
      if (d && (d === t || d === sn(t) || d === ks(sn(t))))
        return c;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      Tf(a[e] || c[e], t) || // global registration
      Tf(a.appContext[e], t)
    );
    return !u && i ? c : u;
  }
}
function Tf(e, t) {
  return e && (e[t] || e[sn(t)] || e[ks(sn(t))]);
}
function $t(e, t, n, i) {
  let a;
  const c = n, u = Ue(e);
  if (u || Tt(e)) {
    const d = u && /* @__PURE__ */ Zr(e);
    let p = !1, y = !1;
    d && (p = !/* @__PURE__ */ kn(e), y = /* @__PURE__ */ br(e), e = As(e)), a = new Array(e.length);
    for (let _ = 0, w = e.length; _ < w; _++)
      a[_] = t(
        p ? y ? Bi(Fn(e[_])) : Fn(e[_]) : e[_],
        _,
        void 0,
        c
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let d = 0; d < e; d++)
      a[d] = t(d + 1, d, void 0, c);
  } else if (lt(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (d, p) => t(d, p, void 0, c)
      );
    else {
      const d = Object.keys(e);
      a = new Array(d.length);
      for (let p = 0, y = d.length; p < y; p++) {
        const _ = d[p];
        a[p] = t(e[_], _, p, c);
      }
    }
  else
    a = [];
  return a;
}
const oc = (e) => e ? em(e) ? Os(e) : oc(e.parent) : null, Ma = (
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
    $options: (e) => Rh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Fc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Rc.bind(e.proxy)),
    $watch: (e) => sb.bind(e)
  })
), Dl = (e, t) => e !== ft && !e.__isScriptSetup && nt(e, t), Mb = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: i, data: a, props: c, accessCache: u, type: d, appContext: p } = e;
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
            return c[t];
        }
      else {
        if (Dl(i, t))
          return u[t] = 1, i[t];
        if (a !== ft && nt(a, t))
          return u[t] = 2, a[t];
        if (nt(c, t))
          return u[t] = 3, c[t];
        if (n !== ft && nt(n, t))
          return u[t] = 4, n[t];
        sc && (u[t] = 0);
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
      return u[t] = 4, n[t];
    if (
      // global properties
      w = p.config.globalProperties, nt(w, t)
    )
      return w[t];
  },
  set({ _: e }, t, n) {
    const { data: i, setupState: a, ctx: c } = e;
    return Dl(a, t) ? (a[t] = n, !0) : i !== ft && nt(i, t) ? (i[t] = n, !0) : nt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (c[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: i, appContext: a, props: c, type: u }
  }, d) {
    let p;
    return !!(n[d] || e !== ft && d[0] !== "$" && nt(e, d) || Dl(t, d) || nt(c, d) || nt(i, d) || nt(Ma, d) || nt(a.config.globalProperties, d) || (p = u.__cssModules) && p[d]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : nt(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function If(e) {
  return Ue(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let sc = !0;
function Nb(e) {
  const t = Rh(e), n = e.proxy, i = e.ctx;
  sc = !1, t.beforeCreate && Df(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: c,
    methods: u,
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
  if (y && kb(y, i, null), u)
    for (const $ in u) {
      const X = u[$];
      Be(X) && (i[$] = X.bind(n));
    }
  if (a) {
    const $ = a.call(n, n);
    lt($) && (e.data = /* @__PURE__ */ Cs($));
  }
  if (sc = !0, c)
    for (const $ in c) {
      const X = c[$], _e = Be(X) ? X.bind(n, n) : Be(X.get) ? X.get.bind(n, n) : Xn, $e = !Be(X) && Be(X.set) ? X.set.bind(n) : Xn, ze = vt({
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
      Oh(d[$], i, n, $);
  if (p) {
    const $ = Be(p) ? p.call(n) : p;
    Reflect.ownKeys($).forEach((X) => {
      ib(X, $[X]);
    });
  }
  _ && Df(_, e, "c");
  function ye($, X) {
    Ue(X) ? X.forEach((_e) => $(_e.bind(n))) : X && $(X.bind(n));
  }
  if (ye(mb, w), ye(Ih, S), ye(pb, A), ye(gb, v), ye(fb, R), ye(db, V), ye(_b, J), ye(vb, W), ye(yb, F), ye($c, k), ye(Dh, D), ye(bb, ce), Ue(U))
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
  L && e.render === Xn && (e.render = L), ve != null && (e.inheritAttrs = ve), xe && (e.components = xe), C && (e.directives = C), ce && Ah(e);
}
function kb(e, t, n = Xn) {
  Ue(e) && (e = lc(e));
  for (const i in e) {
    const a = e[i];
    let c;
    lt(a) ? "default" in a ? c = Ko(
      a.from || i,
      a.default,
      !0
    ) : c = Ko(a.from || i) : c = Ko(a), /* @__PURE__ */ en(c) ? Object.defineProperty(t, i, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (u) => c.value = u
    }) : t[i] = c;
  }
}
function Df(e, t, n) {
  Zn(
    Ue(e) ? e.map((i) => i.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Oh(e, t, n, i) {
  let a = i.includes(".") ? Ph(n, i) : () => n[i];
  if (Tt(e)) {
    const c = t[e];
    Be(c) && zi(a, c);
  } else if (Be(e))
    zi(a, e.bind(n));
  else if (lt(e))
    if (Ue(e))
      e.forEach((c) => Oh(c, t, n, i));
    else {
      const c = Be(e.handler) ? e.handler.bind(n) : t[e.handler];
      Be(c) && zi(a, c, e);
    }
}
function Rh(e) {
  const t = e.type, { mixins: n, extends: i } = t, {
    mixins: a,
    optionsCache: c,
    config: { optionMergeStrategies: u }
  } = e.appContext, d = c.get(t);
  let p;
  return d ? p = d : !a.length && !n && !i ? p = t : (p = {}, a.length && a.forEach(
    (y) => ls(p, y, u, !0)
  ), ls(p, t, u)), lt(t) && c.set(t, p), p;
}
function ls(e, t, n, i = !1) {
  const { mixins: a, extends: c } = t;
  c && ls(e, c, n, !0), a && a.forEach(
    (u) => ls(e, u, n, !0)
  );
  for (const u in t)
    if (!(i && u === "expose")) {
      const d = Pb[u] || n && n[u];
      e[u] = d ? d(e[u], t[u]) : t[u];
    }
  return e;
}
const Pb = {
  data: Ef,
  props: Of,
  emits: Of,
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
  provide: Ef,
  inject: Ab
};
function Ef(e, t) {
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
function Of(e, t) {
  return e ? Ue(e) && Ue(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : tn(
    /* @__PURE__ */ Object.create(null),
    If(e),
    If(t ?? {})
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
function Fh() {
  return {
    app: null,
    config: {
      isNativeTag: Xd,
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
    const c = Fh(), u = /* @__PURE__ */ new WeakSet(), d = [];
    let p = !1;
    const y = c.app = {
      _uid: Tb++,
      _component: i,
      _props: a,
      _container: null,
      _context: c,
      _instance: null,
      version: uy,
      get config() {
        return c.config;
      },
      set config(_) {
      },
      use(_, ...w) {
        return u.has(_) || (_ && Be(_.install) ? (u.add(_), _.install(y, ...w)) : Be(_) && (u.add(_), _(y, ...w))), y;
      },
      mixin(_) {
        return c.mixins.includes(_) || c.mixins.push(_), y;
      },
      component(_, w) {
        return w ? (c.components[_] = w, y) : c.components[_];
      },
      directive(_, w) {
        return w ? (c.directives[_] = w, y) : c.directives[_];
      },
      mount(_, w, S) {
        if (!p) {
          const A = y._ceVNode || Ye(i, a);
          return A.appContext = c, S === !0 ? S = "svg" : S === !1 && (S = void 0), e(A, _, S), p = !0, y._container = _, _.__vue_app__ = y, Os(A.component);
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
        return c.provides[_] = w, y;
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
  const c = t.startsWith("update:"), u = c && Db(i, t.slice(7));
  u && (u.trim && (a = n.map((_) => Tt(_) ? _.trim() : _)), u.number && (a = n.map(y0)));
  let d, p = i[d = kl(t)] || // also try camelCase event handler (#2249)
  i[d = kl(sn(t))];
  !p && c && (p = i[d = kl(li(t))]), p && Zn(
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
function Lh(e, t, n = !1) {
  const i = n ? Ob : t.emitsCache, a = i.get(e);
  if (a !== void 0)
    return a;
  const c = e.emits;
  let u = {}, d = !1;
  if (!Be(e)) {
    const p = (y) => {
      const _ = Lh(y, t, !0);
      _ && (d = !0, tn(u, _));
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  return !c && !d ? (lt(e) && i.set(e, null), null) : (Ue(c) ? c.forEach((p) => u[p] = null) : tn(u, c), lt(e) && i.set(e, u), u);
}
function Ds(e, t) {
  return !e || !Ss(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), nt(e, t[0].toLowerCase() + t.slice(1)) || nt(e, li(t)) || nt(e, t));
}
function Rf(e) {
  const {
    type: t,
    vnode: n,
    proxy: i,
    withProxy: a,
    propsOptions: [c],
    slots: u,
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
          { attrs: d, slots: u, emit: p }
        ) : D(
          w,
          null
        )
      ), k = t.props ? d : Rb(d);
    }
  } catch (D) {
    Na.length = 0, Ts(D, e, 1), j = Ye(Er);
  }
  let E = j;
  if (k && R !== !1) {
    const D = Object.keys(k), { shapeFlag: L } = E;
    D.length && L & 7 && (c && D.some(Ms) && (k = Fb(
      k,
      c
    )), E = Gi(E, k, !1, !0));
  }
  return n.dirs && (E = Gi(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && Lc(E, n.transition), j = E, os(V), j;
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
  const { props: i, children: a, component: c } = e, { props: u, children: d, patchFlag: p } = t, y = c.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && p >= 0) {
    if (p & 1024)
      return !0;
    if (p & 16)
      return i ? Ff(i, u, y) : !!u;
    if (p & 8) {
      const _ = t.dynamicProps;
      for (let w = 0; w < _.length; w++) {
        const S = _[w];
        if ($h(u, i, S) && !Ds(y, S))
          return !0;
      }
    }
  } else
    return (a || d) && (!d || !d.$stable) ? !0 : i === u ? !1 : i ? u ? Ff(i, u, y) : !0 : !!u;
  return !1;
}
function Ff(e, t, n) {
  const i = Object.keys(t);
  if (i.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < i.length; a++) {
    const c = i[a];
    if ($h(t, e, c) && !Ds(n, c))
      return !0;
  }
  return !1;
}
function $h(e, t, n) {
  const i = e[n], a = t[n];
  return n === "style" && lt(i) && lt(a) ? !Pc(i, a) : i !== a;
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
const zh = {}, jh = () => Object.create(zh), Vh = (e) => Object.getPrototypeOf(e) === zh;
function zb(e, t, n, i = !1) {
  const a = {}, c = jh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hh(e, t, a, c);
  for (const u in e.propsOptions[0])
    u in a || (a[u] = void 0);
  n ? e.props = i ? a : /* @__PURE__ */ K0(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
}
function jb(e, t, n, i) {
  const {
    props: a,
    attrs: c,
    vnode: { patchFlag: u }
  } = e, d = /* @__PURE__ */ tt(a), [p] = e.propsOptions;
  let y = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (i || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const _ = e.vnode.dynamicProps;
      for (let w = 0; w < _.length; w++) {
        let S = _[w];
        if (Ds(e.emitsOptions, S))
          continue;
        const A = t[S];
        if (p)
          if (nt(c, S))
            A !== c[S] && (c[S] = A, y = !0);
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
          A !== c[S] && (c[S] = A, y = !0);
      }
    }
  } else {
    Hh(e, t, a, c) && (y = !0);
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
    if (c !== d)
      for (const w in c)
        (!t || !nt(t, w)) && (delete c[w], y = !0);
  }
  y && fr(e.attrs, "set", "");
}
function Hh(e, t, n, i) {
  const [a, c] = e.propsOptions;
  let u = !1, d;
  if (t)
    for (let p in t) {
      if (va(p))
        continue;
      const y = t[p];
      let _;
      a && nt(a, _ = sn(p)) ? !c || !c.includes(_) ? n[_] = y : (d || (d = {}))[_] = y : Ds(e.emitsOptions, p) || (!(p in i) || y !== i[p]) && (i[p] = y, u = !0);
    }
  if (c) {
    const p = /* @__PURE__ */ tt(n), y = d || ft;
    for (let _ = 0; _ < c.length; _++) {
      const w = c[_];
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
  return u;
}
function cc(e, t, n, i, a, c) {
  const u = e[n];
  if (u != null) {
    const d = nt(u, "default");
    if (d && i === void 0) {
      const p = u.default;
      if (u.type !== Function && !u.skipFactory && Be(p)) {
        const { propsDefaults: y } = a;
        if (n in y)
          i = y[n];
        else {
          const _ = Ga(a);
          i = y[n] = p.call(
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
    ] && (c && !d ? i = !1 : u[
      1
      /* shouldCastTrue */
    ] && (i === "" || i === li(n)) && (i = !0));
  }
  return i;
}
const Vb = /* @__PURE__ */ new WeakMap();
function Uh(e, t, n = !1) {
  const i = n ? Vb : t.propsCache, a = i.get(e);
  if (a)
    return a;
  const c = e.props, u = {}, d = [];
  let p = !1;
  if (!Be(e)) {
    const _ = (w) => {
      p = !0;
      const [S, A] = Uh(w, t, !0);
      tn(u, S), A && d.push(...A);
    };
    !n && t.mixins.length && t.mixins.forEach(_), e.extends && _(e.extends), e.mixins && e.mixins.forEach(_);
  }
  if (!c && !p)
    return lt(e) && i.set(e, Fi), Fi;
  if (Ue(c))
    for (let _ = 0; _ < c.length; _++) {
      const w = sn(c[_]);
      Lf(w) && (u[w] = ft);
    }
  else if (c)
    for (const _ in c) {
      const w = sn(_);
      if (Lf(w)) {
        const S = c[_], A = u[w] = Ue(S) || Be(S) ? { type: S } : tn({}, S), v = A.type;
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
  const y = [u, d];
  return lt(e) && i.set(e, y), y;
}
function Lf(e) {
  return e[0] !== "$" && !va(e);
}
const zc = (e) => e === "_" || e === "_ctx" || e === "$stable", jc = (e) => Ue(e) ? e.map(Gn) : [Gn(e)], Hb = (e, t, n) => {
  if (t._n)
    return t;
  const i = Nh((...a) => jc(t(...a)), n);
  return i._c = !1, i;
}, Bh = (e, t, n) => {
  const i = e._ctx;
  for (const a in e) {
    if (zc(a)) continue;
    const c = e[a];
    if (Be(c))
      t[a] = Hb(a, c, i);
    else if (c != null) {
      const u = jc(c);
      t[a] = () => u;
    }
  }
}, Gh = (e, t) => {
  const n = jc(t);
  e.slots.default = () => n;
}, Kh = (e, t, n) => {
  for (const i in t)
    (n || !zc(i)) && (e[i] = t[i]);
}, Ub = (e, t, n) => {
  const i = e.slots = jh();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (Kh(i, t, n), n && th(i, "_", a, !0)) : Bh(t, i);
  } else t && Gh(e, t);
}, Bb = (e, t, n) => {
  const { vnode: i, slots: a } = e;
  let c = !0, u = ft;
  if (i.shapeFlag & 32) {
    const d = t._;
    d ? n && d === 1 ? c = !1 : Kh(a, t, n) : (c = !t.$stable, Bh(t, a)), u = t;
  } else t && (Gh(e, t), u = { default: 1 });
  if (c)
    for (const d in a)
      !zc(d) && u[d] == null && delete a[d];
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
    patchProp: c,
    createElement: u,
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
    O && !la(O, H) && (pe = It(O), De(O, I, K, !0), O = null), H.patchFlag === -2 && (ae = !1, H.dynamicChildren = null);
    const { type: f, ref: he, shapeFlag: ge } = H;
    switch (f) {
      case Es:
        V(O, H, Q, pe);
        break;
      case Er:
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
        ) : (ge & 64 || ge & 128) && f.process(
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
      const f = O.el && O.el._isVueCE ? O.el : null;
      try {
        f && f._beginPatch(), ce(
          O,
          H,
          I,
          K,
          ne,
          se,
          ae
        );
      } finally {
        f && f._endPatch();
      }
    }
  }, W = (O, H, Q, pe, I, K, ne, se) => {
    let ae, f;
    const { props: he, shapeFlag: ge, transition: Se, dirs: Ie } = O;
    if (ae = O.el = u(
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
        Te !== "value" && !va(Te) && c(ae, Te, null, he[Te], K, pe);
      "value" in he && c(ae, "value", null, he.value, K), (f = he.onVnodeBeforeMount) && zn(f, pe, O);
    }
    Ie && Ur(O, null, pe, "beforeMount");
    const Re = Wb(I, Se);
    Re && Se.beforeEnter(ae), i(ae, H, Q), ((f = he && he.onVnodeMounted) || Re || Ie) && fn(() => {
      try {
        f && zn(f, pe, O), Re && Se.enter(ae), Ie && Ur(O, null, pe, "mounted");
      } finally {
      }
    }, I);
  }, F = (O, H, Q, pe, I) => {
    if (Q && A(O, Q), pe)
      for (let K = 0; K < pe.length; K++)
        A(O, pe[K]);
    if (I) {
      let K = I.subTree;
      if (H === K || Xh(K.type) && (K.ssContent === H || K.ssFallback === H)) {
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
    for (let f = ae; f < O.length; f++) {
      const he = O[f] = se ? ur(O[f]) : Gn(O[f]);
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
    let { patchFlag: ae, dynamicChildren: f, dirs: he } = H;
    ae |= O.patchFlag & 16;
    const ge = O.props || ft, Se = H.props || ft;
    let Ie;
    if (Q && Br(Q, !1), (Ie = Se.onVnodeBeforeUpdate) && zn(Ie, Q, H, O), he && Ur(H, O, Q, "beforeUpdate"), Q && Br(Q, !0), (ge.innerHTML && Se.innerHTML == null || ge.textContent && Se.textContent == null) && _(se, ""), f ? U(
      O.dynamicChildren,
      f,
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
      else if (ae & 2 && ge.class !== Se.class && c(se, "class", null, Se.class, I), ae & 4 && c(se, "style", ge.style, Se.style, I), ae & 8) {
        const Re = H.dynamicProps;
        for (let Te = 0; Te < Re.length; Te++) {
          const oe = Re[Te], dt = ge[oe], We = Se[oe];
          (We !== dt || oe === "value") && c(se, oe, dt, We, I, Q);
        }
      }
      ae & 1 && O.children !== H.children && _(se, H.children);
    } else !ne && f == null && ve(se, ge, Se, Q, I);
    ((Ie = Se.onVnodeUpdated) || he) && fn(() => {
      Ie && zn(Ie, Q, H, O), he && Ur(H, O, Q, "updated");
    }, pe);
  }, U = (O, H, Q, pe, I, K, ne) => {
    for (let se = 0; se < H.length; se++) {
      const ae = O[se], f = H[se], he = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ae.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ae.type === Je || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !la(ae, f) || // - In the case of a component, it could contain anything.
        ae.shapeFlag & 198) ? w(ae.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Q
        )
      );
      R(
        ae,
        f,
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
          !va(K) && !(K in Q) && c(
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
        ne !== se && K !== "value" && c(O, K, se, ne, I, pe);
      }
      "value" in Q && c(O, "value", H.value, Q.value, I);
    }
  }, xe = (O, H, Q, pe, I, K, ne, se, ae) => {
    const f = H.el = O ? O.el : d(""), he = H.anchor = O ? O.anchor : d("");
    let { patchFlag: ge, dynamicChildren: Se, slotScopeIds: Ie } = H;
    Ie && (se = se ? se.concat(Ie) : Ie), O == null ? (i(f, Q, pe), i(he, Q, pe), J(
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
    (H.key != null || I && H === I.subTree) && Wh(
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
    if (Ch(O) && (se.ctx.renderer = Wt), iy(se, !1, ne), se.asyncDep) {
      if (I && I.registerDep(se, ye, ne), !O.el) {
        const ae = se.subTree = Ye(Er);
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
          const Qe = Yh(O);
          if (Qe) {
            ge && (ge.el = Te.el, $(O, ge, ne)), Qe.asyncDep.then(() => {
              fn(() => {
                O.isUnmounted || f();
              }, I);
            });
            return;
          }
        }
        let oe = ge, dt;
        Br(O, !1), ge ? (ge.el = Te.el, $(O, ge, ne)) : ge = Te, Se && Pl(Se), (dt = ge.props && ge.props.onVnodeBeforeUpdate) && zn(dt, Re, ge, Te), Br(O, !0);
        const We = Rf(O), ke = O.subTree;
        O.subTree = We, R(
          ke,
          We,
          // parent may have changed if it's in a teleport
          w(ke.el),
          // anchor may have changed if it's in a fragment
          It(ke),
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
          const Qe = O.subTree = Rf(O);
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
    const ae = O.effect = new ah(se);
    O.scope.off();
    const f = O.update = ae.run.bind(ae), he = O.job = ae.runIfDirty.bind(ae);
    he.i = O, he.id = O.uid, ae.scheduler = () => Fc(he), Br(O, !0), f();
  }, $ = (O, H, Q) => {
    H.component = O;
    const pe = O.vnode.props;
    O.vnode = H, O.next = null, jb(O, H.props, pe, Q), Bb(O, H.children, Q), pr(), Pf(O), gr();
  }, X = (O, H, Q, pe, I, K, ne, se, ae = !1) => {
    const f = O && O.children, he = O ? O.shapeFlag : 0, ge = H.children, { patchFlag: Se, shapeFlag: Ie } = H;
    if (Se > 0) {
      if (Se & 128) {
        $e(
          f,
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
          f,
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
    Ie & 8 ? (he & 16 && St(f, I, K), ge !== f && _(Q, ge)) : he & 16 ? Ie & 16 ? $e(
      f,
      ge,
      Q,
      pe,
      I,
      K,
      ne,
      se,
      ae
    ) : St(f, I, K, !0) : (he & 8 && _(Q, ""), Ie & 16 && J(
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
    const f = O.length, he = H.length, ge = Math.min(f, he);
    let Se;
    for (Se = 0; Se < ge; Se++) {
      const Ie = H[Se] = ae ? ur(H[Se]) : Gn(H[Se]);
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
    f > he ? St(
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
    let f = 0;
    const he = H.length;
    let ge = O.length - 1, Se = he - 1;
    for (; f <= ge && f <= Se; ) {
      const Ie = O[f], Re = H[f] = ae ? ur(H[f]) : Gn(H[f]);
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
      f++;
    }
    for (; f <= ge && f <= Se; ) {
      const Ie = O[ge], Re = H[Se] = ae ? ur(H[Se]) : Gn(H[Se]);
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
    if (f > ge) {
      if (f <= Se) {
        const Ie = Se + 1, Re = Ie < he ? H[Ie].el : pe;
        for (; f <= Se; )
          R(
            null,
            H[f] = ae ? ur(H[f]) : Gn(H[f]),
            Q,
            Re,
            I,
            K,
            ne,
            se,
            ae
          ), f++;
      }
    } else if (f > Se)
      for (; f <= ge; )
        De(O[f], I, K, !0), f++;
    else {
      const Ie = f, Re = f, Te = /* @__PURE__ */ new Map();
      for (f = Re; f <= Se; f++) {
        const Pt = H[f] = ae ? ur(H[f]) : Gn(H[f]);
        Pt.key != null && Te.set(Pt.key, f);
      }
      let oe, dt = 0;
      const We = Se - Re + 1;
      let ke = !1, Qe = 0;
      const me = new Array(We);
      for (f = 0; f < We; f++) me[f] = 0;
      for (f = Ie; f <= ge; f++) {
        const Pt = O[f];
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
        At === void 0 ? De(Pt, I, K, !0) : (me[At - Re] = f + 1, At >= Qe ? Qe = At : ke = !0, R(
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
      for (oe = kt.length - 1, f = We - 1; f >= 0; f--) {
        const Pt = Re + f, At = H[Pt], Qn = H[Pt + 1], Wa = Pt + 1 < he ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Qn.el || qh(Qn)
        ) : pe;
        me[f] === 0 ? R(
          null,
          At,
          Q,
          Wa,
          I,
          K,
          ne,
          se,
          ae
        ) : ke && (oe < 0 || f !== kt[oe] ? ze(At, Q, Wa, 2) : oe--);
      }
    }
  }, ze = (O, H, Q, pe, I = null) => {
    const { el: K, type: ne, transition: se, children: ae, shapeFlag: f } = O;
    if (f & 6) {
      ze(O.component.subTree, H, Q, pe);
      return;
    }
    if (f & 128) {
      O.suspense.move(H, Q, pe);
      return;
    }
    if (f & 64) {
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
    if (pe !== 2 && f & 1 && se)
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
      dynamicChildren: f,
      shapeFlag: he,
      patchFlag: ge,
      dirs: Se,
      cacheIndex: Ie,
      memo: Re
    } = O;
    if (ge === -2 && (I = !1), se != null && (pr(), wa(se, null, Q, O, !0), gr()), Ie != null && (H.renderCache[Ie] = void 0), he & 256) {
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
      ) : f && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !f.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (K !== Je || ge > 0 && ge & 64) ? St(
        f,
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
      Ot(Q, pe);
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
  }, Ot = (O, H) => {
    let Q;
    for (; O !== H; )
      Q = S(O), a(O), O = Q;
    a(H);
  }, Ht = (O, H, Q) => {
    const { bum: pe, scope: I, job: K, subTree: ne, um: se, m: ae, a: f } = O;
    $f(ae), $f(f), pe && Pl(pe), I.stop(), K && (K.flags |= 8, De(ne, O, H, Q)), se && fn(se, H), fn(() => {
      O.isUnmounted = !0;
    }, H);
  }, St = (O, H, Q, pe = !1, I = !1, K = 0) => {
    for (let ne = K; ne < O.length; ne++)
      De(O[ne], H, Q, pe, I);
  }, It = (O) => {
    if (O.shapeFlag & 6)
      return It(O.component.subTree);
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
    ), H._vnode = O, hn || (hn = !0, Pf(pe), wh(), hn = !1);
  }, Wt = {
    p: R,
    um: De,
    m: ze,
    r: wt,
    mt: we,
    mc: J,
    pc: X,
    pbc: U,
    n: It,
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
function Wh(e, t, n = !1) {
  const i = e.children, a = t.children;
  if (Ue(i) && Ue(a))
    for (let c = 0; c < i.length; c++) {
      const u = i[c];
      let d = a[c];
      d.shapeFlag & 1 && !d.dynamicChildren && ((d.patchFlag <= 0 || d.patchFlag === 32) && (d = a[c] = ur(a[c]), d.el = u.el), !n && d.patchFlag !== -2 && Wh(u, d)), d.type === Es && (d.patchFlag === -1 && (d = a[c] = ur(d)), d.el = u.el), d.type === Er && !d.el && (d.el = u.el);
    }
}
function Yb(e) {
  const t = e.slice(), n = [0];
  let i, a, c, u, d;
  const p = e.length;
  for (i = 0; i < p; i++) {
    const y = e[i];
    if (y !== 0) {
      if (a = n[n.length - 1], e[a] < y) {
        t[i] = a, n.push(i);
        continue;
      }
      for (c = 0, u = n.length - 1; c < u; )
        d = c + u >> 1, e[n[d]] < y ? c = d + 1 : u = d;
      y < e[n[c]] && (c > 0 && (t[i] = n[c - 1]), n[c] = i);
    }
  }
  for (c = n.length, u = n[c - 1]; c-- > 0; )
    n[c] = u, u = t[u];
  return n;
}
function Yh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Yh(t);
}
function $f(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function qh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? qh(t.subTree) : null;
}
const Xh = (e) => e.__isSuspense;
function qb(e, t) {
  t && t.pendingBranch ? Ue(e) ? t.effects.push(...e) : t.effects.push(e) : rb(e);
}
const Je = /* @__PURE__ */ Symbol.for("v-fgt"), Es = /* @__PURE__ */ Symbol.for("v-txt"), Er = /* @__PURE__ */ Symbol.for("v-cmt"), Ol = /* @__PURE__ */ Symbol.for("v-stc"), Na = [];
let _n = null;
function Me(e = !1) {
  Na.push(_n = e ? null : []);
}
function Xb() {
  Na.pop(), _n = Na[Na.length - 1] || null;
}
let Oa = 1;
function zf(e, t = !1) {
  Oa += e, e < 0 && _n && t && (_n.hasOnce = !0);
}
function Jh(e) {
  return e.dynamicChildren = Oa > 0 ? _n || Fi : null, Xb(), Oa > 0 && _n && _n.push(e), e;
}
function Pe(e, t, n, i, a, c) {
  return Jh(
    ie(
      e,
      t,
      n,
      i,
      a,
      c,
      !0
    )
  );
}
function qi(e, t, n, i, a) {
  return Jh(
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
function Zh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function la(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Qh = ({ key: e }) => e ?? null, Wo = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Tt(e) || /* @__PURE__ */ en(e) || Be(e) ? { i: vn, r: e, k: t, f: !!n } : e : null);
function ie(e, t = null, n = null, i = 0, a = null, c = e === Je ? 0 : 1, u = !1, d = !1) {
  const p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Qh(t),
    ref: t && Wo(t),
    scopeId: Mh,
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
    shapeFlag: c,
    patchFlag: i,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: vn
  };
  return d ? (Vc(p, n), c & 128 && e.normalize(p)) : n && (p.shapeFlag |= Tt(n) ? 8 : 16), Oa > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  _n && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (p.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  p.patchFlag !== 32 && _n.push(p), p;
}
const Ye = Jb;
function Jb(e, t = null, n = null, i = 0, a = null, c = !1) {
  if ((!e || e === Eh) && (e = Er), Zh(e)) {
    const d = Gi(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Vc(d, n), Oa > 0 && !c && _n && (d.shapeFlag & 6 ? _n[_n.indexOf(e)] = d : _n.push(d)), d.patchFlag = -2, d;
  }
  if (cy(e) && (e = e.__vccOpts), t) {
    t = Zb(t);
    let { class: d, style: p } = t;
    d && !Tt(d) && (t.class = st(d)), lt(p) && (/* @__PURE__ */ Oc(p) && !Ue(p) && (p = tn({}, p)), t.style = Et(p));
  }
  const u = Tt(e) ? 1 : Xh(e) ? 128 : cb(e) ? 64 : lt(e) ? 4 : Be(e) ? 2 : 0;
  return ie(
    e,
    t,
    n,
    i,
    a,
    u,
    c,
    !0
  );
}
function Zb(e) {
  return e ? /* @__PURE__ */ Oc(e) || Vh(e) ? tn({}, e) : e : null;
}
function Gi(e, t, n = !1, i = !1) {
  const { props: a, ref: c, patchFlag: u, children: d, transition: p } = e, y = t ? Cr(a || {}, t) : a, _ = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: y,
    key: y && Qh(y),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && c ? Ue(c) ? c.concat(Wo(t)) : [c, Wo(t)] : Wo(t)
    ) : c,
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
    ssContent: e.ssContent && Gi(e.ssContent),
    ssFallback: e.ssFallback && Gi(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return p && i && Lc(
    _,
    p.clone(_)
  ), _;
}
function Qb(e = " ", t = 0) {
  return Ye(Es, null, e, t);
}
function Lt(e = "", t = !1) {
  return t ? (Me(), qi(Er, null, e)) : Ye(Er, null, e);
}
function Gn(e) {
  return e == null || typeof e == "boolean" ? Ye(Er) : Ue(e) ? Ye(
    Je,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Zh(e) ? ur(e) : Ye(Es, null, String(e));
}
function ur(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Gi(e);
}
function Vc(e, t) {
  let n = 0;
  const { shapeFlag: i } = e;
  if (t == null)
    t = null;
  else if (Ue(t))
    n = 16;
  else if (typeof t == "object")
    if (i & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), Vc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      n = 32;
      const a = t._;
      !a && !Vh(t) ? t._ctx = vn : a === 3 && vn && (vn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Be(t) ? (t = { default: t, _ctx: vn }, n = 32) : (t = String(t), i & 64 ? (n = 16, t = [Qb(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Cr(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    for (const a in i)
      if (a === "class")
        t.class !== i.class && (t.class = st([t.class, i.class]));
      else if (a === "style")
        t.style = Et([t.style, i.style]);
      else if (Ss(a)) {
        const c = t[a], u = i[a];
        u && c !== u && !(Ue(c) && c.includes(u)) ? t[a] = c ? [].concat(c, u) : u : u == null && c == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Ms(a) && (t[a] = u);
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
const ey = Fh();
let ty = 0;
function ny(e, t, n) {
  const i = e.type, a = (t ? t.appContext : e.appContext) || ey, c = {
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
    propsOptions: Uh(i, a),
    emitsOptions: Lh(i, a),
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
  return c.ctx = { _: c }, c.root = t ? t.root : c, c.emit = Eb.bind(null, c), e.ce && e.ce(c), c;
}
let Qt = null;
const ry = () => Qt || vn;
let cs, uc;
{
  const e = Ps(), t = (n, i) => {
    let a;
    return (a = e[n]) || (a = e[n] = []), a.push(i), (c) => {
      a.length > 1 ? a.forEach((u) => u(c)) : a[0](c);
    };
  };
  cs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Qt = n
  ), uc = t(
    "__VUE_SSR_SETTERS__",
    (n) => Ra = n
  );
}
const Ga = (e) => {
  const t = Qt;
  return cs(e), e.scope.on(), () => {
    e.scope.off(), cs(t);
  };
}, jf = () => {
  Qt && Qt.scope.off(), cs(null);
};
function em(e) {
  return e.vnode.shapeFlag & 4;
}
let Ra = !1;
function iy(e, t = !1, n = !1) {
  t && uc(t);
  const { props: i, children: a } = e.vnode, c = em(e);
  zb(e, i, c, t), Ub(e, a, n || t);
  const u = c ? ay(e, t) : void 0;
  return t && uc(!1), u;
}
function ay(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Mb);
  const { setup: i } = n;
  if (i) {
    pr();
    const a = e.setupContext = i.length > 1 ? sy(e) : null, c = Ga(e), u = Ua(
      i,
      e,
      0,
      [
        e.props,
        a
      ]
    ), d = Zd(u);
    if (gr(), c(), (d || e.sp) && !Sa(e) && Ah(e), d) {
      if (u.then(jf, jf), t)
        return u.then((p) => {
          Vf(e, p);
        }).catch((p) => {
          Ts(p, e, 0);
        });
      e.asyncDep = u;
    } else
      Vf(e, u);
  } else
    tm(e);
}
function Vf(e, t, n) {
  Be(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : lt(t) && (e.setupState = vh(t)), tm(e);
}
function tm(e, t, n) {
  const i = e.type;
  e.render || (e.render = i.render || Xn);
  {
    const a = Ga(e);
    pr();
    try {
      Nb(e);
    } finally {
      gr(), a();
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
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vh(W0(e.exposed)), {
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
const vt = (e, t) => /* @__PURE__ */ Z0(e, t, Ra), uy = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let fc;
const Hf = typeof window < "u" && window.trustedTypes;
if (Hf)
  try {
    fc = /* @__PURE__ */ Hf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const nm = fc ? (e) => fc.createHTML(e) : (e) => e, fy = "http://www.w3.org/2000/svg", dy = "http://www.w3.org/1998/Math/MathML", lr = typeof document < "u" ? document : null, Uf = lr && /* @__PURE__ */ lr.createElement("template"), hy = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, i) => {
    const a = t === "svg" ? lr.createElementNS(fy, e) : t === "mathml" ? lr.createElementNS(dy, e) : n ? lr.createElement(e, { is: n }) : lr.createElement(e);
    return e === "select" && i && i.multiple != null && a.setAttribute("multiple", i.multiple), a;
  },
  createText: (e) => lr.createTextNode(e),
  createComment: (e) => lr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => lr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, i, a, c) {
    const u = n ? n.previousSibling : t.lastChild;
    if (a && (a === c || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), n), !(a === c || !(a = a.nextSibling)); )
        ;
    else {
      Uf.innerHTML = nm(
        i === "svg" ? `<svg>${e}</svg>` : i === "mathml" ? `<math>${e}</math>` : e
      );
      const d = Uf.content;
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
      u ? u.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, my = /* @__PURE__ */ Symbol("_vtc");
function py(e, t, n) {
  const i = e[my];
  i && (t = (t ? [t, ...i] : [...i]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const us = /* @__PURE__ */ Symbol("_vod"), rm = /* @__PURE__ */ Symbol("_vsh"), Ka = {
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
  e.style.display = t ? e[us] : "none", e[rm] = !t;
}
const gy = /* @__PURE__ */ Symbol(""), by = /(?:^|;)\s*display\s*:/;
function yy(e, t, n) {
  const i = e.style, a = Tt(n);
  let c = !1;
  if (n && !a) {
    if (t)
      if (Tt(t))
        for (const u of t.split(";")) {
          const d = u.slice(0, u.indexOf(":")).trim();
          n[d] == null && Yo(i, d, "");
        }
      else
        for (const u in t)
          n[u] == null && Yo(i, u, "");
    for (const u in n)
      u === "display" && (c = !0), Yo(i, u, n[u]);
  } else if (a) {
    if (t !== n) {
      const u = i[gy];
      u && (n += ";" + u), i.cssText = n, c = by.test(n);
    }
  } else t && e.removeAttribute("style");
  us in e && (e[us] = c ? i.display : "", e[rm] && (i.display = "none"));
}
const Bf = /\s*!important$/;
function Yo(e, t, n) {
  if (Ue(n))
    n.forEach((i) => Yo(e, t, i));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const i = vy(e, t);
    Bf.test(n) ? e.setProperty(
      li(i),
      n.replace(Bf, ""),
      "important"
    ) : e[i] = n;
  }
}
const Gf = ["Webkit", "Moz", "ms"], Rl = {};
function vy(e, t) {
  const n = Rl[t];
  if (n)
    return n;
  let i = sn(t);
  if (i !== "filter" && i in e)
    return Rl[t] = i;
  i = ks(i);
  for (let a = 0; a < Gf.length; a++) {
    const c = Gf[a] + i;
    if (c in e)
      return Rl[t] = c;
  }
  return t;
}
const Kf = "http://www.w3.org/1999/xlink";
function Wf(e, t, n, i, a, c = M0(t)) {
  i && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Kf, t.slice(6, t.length)) : e.setAttributeNS(Kf, t, n) : n == null || c && !nh(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    c ? "" : Jn(n) ? String(n) : n
  );
}
function Yf(e, t, n, i, a) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? nm(n) : n);
    return;
  }
  const c = e.tagName;
  if (t === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const d = c === "OPTION" ? e.getAttribute("value") || "" : e.value, p = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (d !== p || !("_value" in e)) && (e.value = p), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let u = !1;
  if (n === "" || n == null) {
    const d = typeof e[t];
    d === "boolean" ? n = nh(n) : n == null && d === "string" ? (n = "", u = !0) : d === "number" && (n = 0, u = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  u && e.removeAttribute(a || t);
}
function _y(e, t, n, i) {
  e.addEventListener(t, n, i);
}
function xy(e, t, n, i) {
  e.removeEventListener(t, n, i);
}
const qf = /* @__PURE__ */ Symbol("_vei");
function wy(e, t, n, i, a = null) {
  const c = e[qf] || (e[qf] = {}), u = c[t];
  if (i && u)
    u.value = i;
  else {
    const [d, p] = Sy(t);
    if (i) {
      const y = c[t] = ky(
        i,
        a
      );
      _y(e, d, y, p);
    } else u && (xy(e, d, u, p), c[t] = void 0);
  }
}
const Xf = /(?:Once|Passive|Capture)$/;
function Sy(e) {
  let t;
  if (Xf.test(e)) {
    t = {};
    let i;
    for (; i = e.match(Xf); )
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
const Jf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ay = (e, t, n, i, a, c) => {
  const u = a === "svg";
  t === "class" ? py(e, i, u) : t === "style" ? yy(e, n, i) : Ss(t) ? Ms(t) || wy(e, t, n, i, c) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Cy(e, t, i, u)) ? (Yf(e, t, i), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Wf(e, t, i, u, c, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ty(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Tt(i))) ? Yf(e, sn(t), i, c, t) : (t === "true-value" ? e._trueValue = i : t === "false-value" && (e._falseValue = i), Wf(e, t, i, u));
};
function Cy(e, t, n, i) {
  if (i)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Jf(t) && Be(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return Jf(t) && Tt(n) ? !1 : t in e;
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
}, im = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), i = t.join(".");
  return n[i] || (n[i] = ((a, ...c) => {
    for (let u = 0; u < t.length; u++) {
      const d = Dy[t[u]];
      if (d && d(a, t)) return;
    }
    return e(a, ...c);
  }));
}, Ey = /* @__PURE__ */ tn({ patchProp: Ay }, hy);
let Zf;
function Oy() {
  return Zf || (Zf = Gb(Ey));
}
const Ry = ((...e) => {
  const t = Oy().createApp(...e), { mount: n } = t;
  return t.mount = (i) => {
    const a = Ly(i);
    if (!a) return;
    const c = t._component;
    !Be(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const u = n(a, !1, Fy(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), u;
  }, t;
});
function Fy(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Ly(e) {
  return Tt(e) ? document.querySelector(e) : e;
}
const xt = Math.PI / 180, am = Math.PI * 2, $y = 2048;
function ut(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Or(e, t, n) {
  return { x: e, y: t, z: n };
}
function fs(e, t) {
  return Or(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ri(e, t) {
  return Or(e.x * t, e.y * t, e.z * t);
}
function qo(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function Qf(e, t) {
  return Or(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ga(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Or(e.x / t, e.y / t, e.z / t);
}
function zy(e, t) {
  const n = Number(e || 0) * xt, i = Number(t || 0) * xt, a = Math.cos(i);
  return Or(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Xo(e, t, n = 0) {
  const i = zy(e, t);
  let a = Or(0, 1, 0);
  Math.abs(qo(i, a)) > 0.999 && (a = Or(0, 0, 1));
  let c = ga(Qf(a, i)), u = ga(Qf(i, c));
  const d = Number(n || 0) * xt, p = Math.cos(d), y = Math.sin(d), _ = fs(Ri(c, p), Ri(u, y)), w = fs(Ri(c, -y), Ri(u, p));
  return c = ga(_), u = ga(w), { fwd: i, right: c, up: u };
}
function jy(e, t) {
  const n = (Number(e || 0) - 0.5) * am, i = (0.5 - Number(t || 0)) * Math.PI, a = Math.cos(i);
  return Or(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function ed(e, t, n = 1) {
  const i = Math.max(1, Math.round(Number(e || 1))), a = Math.max(1, Math.round(Number(t || 1))), c = Math.max(1, Number(n || 1)), u = Math.max(512, $y), d = Math.min(1, u / Math.max(i, a));
  return {
    sourceWidth: i,
    sourceHeight: a,
    sourceDpr: c,
    renderScale: d,
    width: Math.max(1, Math.round(i * d)),
    height: Math.max(1, Math.round(a * d))
  };
}
function td(e, t, n) {
  const i = e.createShader(t);
  if (e.shaderSource(i, n), e.compileShader(i), !e.getShaderParameter(i, e.COMPILE_STATUS)) {
    const a = e.getShaderInfoLog(i) || "shader compile failed";
    throw e.deleteShader(i), new Error(a);
  }
  return i;
}
function Ll(e, t, n) {
  const i = td(e, e.VERTEX_SHADER, t);
  let a;
  try {
    a = td(e, e.FRAGMENT_SHADER, n);
  } catch (u) {
    throw e.deleteShader(i), u;
  }
  const c = e.createProgram();
  if (e.attachShader(c, i), e.attachShader(c, a), e.linkProgram(c), e.deleteShader(i), e.deleteShader(a), !e.getProgramParameter(c, e.LINK_STATUS)) {
    const u = e.getProgramInfoLog(c) || "program link failed";
    throw e.deleteProgram(c), new Error(u);
  }
  return c;
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
  const t = Xo(
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
  let n = null, i = null, a = null, c = null, u = null, d = null, p = null, y = null, _ = null, w = null, S = null, A = !1, v = ed(1, 1, 1), R = null, V = null, j = null, k = null, E = null;
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
      }), n ? (i = Ll(n, $l, Vy), a = Ll(n, $l, Hy), c = Ll(n, $l, Uy), R = {
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
        texture: n.getUniformLocation(c, "u_texture"),
        mode: n.getUniformLocation(c, "u_mode"),
        viewRight: n.getUniformLocation(c, "u_viewRight"),
        viewUp: n.getUniformLocation(c, "u_viewUp"),
        viewFwd: n.getUniformLocation(c, "u_viewFwd"),
        viewHfov: n.getUniformLocation(c, "u_viewHfov"),
        viewVfov: n.getUniformLocation(c, "u_viewVfov"),
        stickerRight: n.getUniformLocation(c, "u_stickerRight"),
        stickerUp: n.getUniformLocation(c, "u_stickerUp"),
        stickerFwd: n.getUniformLocation(c, "u_stickerFwd"),
        stickerTanX: n.getUniformLocation(c, "u_stickerTanX"),
        stickerTanY: n.getUniformLocation(c, "u_stickerTanY"),
        crop: n.getUniformLocation(c, "u_crop"),
        opacity: n.getUniformLocation(c, "u_opacity")
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
      ]), n.STATIC_DRAW), d = J(n.REPEAT, n.CLAMP_TO_EDGE), p = J(n.REPEAT, n.CLAMP_TO_EDGE), y = J(n.REPEAT, n.CLAMP_TO_EDGE), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), A = !0, !0) : !1;
    } catch {
      return !1;
    }
  }
  function U() {
    var I;
    if (n) {
      try {
        u && n.deleteBuffer(u), d && n.deleteTexture(d), p && n.deleteTexture(p), y && n.deleteTexture(y), D.forEach((K) => {
          $e(K);
        }), i && n.deleteProgram(i), a && n.deleteProgram(a), c && n.deleteProgram(c), (I = n.getExtension("WEBGL_lose_context")) == null || I.loseContext();
      } catch {
      }
      n = null, i = null, a = null, c = null, u = null, d = null, p = null, y = null, D.clear(), _ = null, w = null, S = null, W = {
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
    v = ed(I, K, ne), (t.width !== v.width || t.height !== v.height) && (t.width = v.width, t.height = v.height);
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
    const f = Number(K.width || K.videoWidth || K.naturalWidth || 0), he = Number(K.height || K.videoHeight || K.naturalHeight || 0);
    if (!(f > 1) || !(he > 1)) return !1;
    const ge = Array.isArray(ne) ? ne.filter((Se) => Se && Se.w > 0 && Se.h > 0) : [];
    if (!ge.length) return !1;
    if (n.bindTexture(n.TEXTURE_2D, I), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, ae ? 1 : 0), se.width !== f || se.height !== he)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), se.width = f, se.height = he, n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    if (k || (k = document.createElement("canvas"), E = k.getContext("2d")), !E)
      return n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), !0;
    for (const Se of ge) {
      const Ie = Math.max(0, Math.floor(Number(Se.x || 0))), Re = Math.max(0, Math.floor(Number(Se.y || 0))), Te = Math.min(f - Ie, Math.ceil(Number(Se.w || 0))), oe = Math.min(he - Re, Math.ceil(Number(Se.h || 0)));
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
  function ye(I, K, ne, se, ae = null, f = !1) {
    if (!ce()) return !1;
    if (!ne)
      return xe(I), !1;
    const he = String(se ?? ""), ge = I === "background" ? _ : I === "paint" ? w : S, Se = W[I], Ie = Number(ne.width || ne.videoWidth || ne.naturalWidth || 0), Re = Number(ne.height || ne.videoHeight || ne.naturalHeight || 0), Te = Se.width !== Ie || Se.height !== Re;
    if (ge === he && !Te && !(Array.isArray(ae) && ae.length)) return !0;
    if (!(Ie > 0) || !(Re > 0))
      return xe(I), !1;
    if (n.bindTexture(n.TEXTURE_2D, K), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, f ? 1 : 0), !(Array.isArray(ae) && ae.length ? te(K, ne, ae, Se, f) : !1)) {
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
    const K = String(I.assetId), ne = String(I.revision ?? ""), se = I.source, ae = Number(se.width || se.naturalWidth || se.videoWidth || 0), f = Number(se.height || se.naturalHeight || se.videoHeight || 0);
    if (ae <= 0 || f <= 0) return null;
    let he = D.get(K);
    if (he || (he = {
      texture: J(n.CLAMP_TO_EDGE, n.CLAMP_TO_EDGE),
      revision: "",
      width: 0,
      height: 0
    }, D.set(K, he)), he.revision !== ne || he.width !== ae || he.height !== f) {
      if (n.bindTexture(n.TEXTURE_2D, he.texture), n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, n.RGBA, n.UNSIGNED_BYTE, se), n.getError() !== n.NO_ERROR)
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), null;
      n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 0), he.revision = ne, he.width = ae, he.height = f;
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
  function Ot() {
    return ce() ? (n.viewport(0, 0, t.width, t.height), n.disable(n.DEPTH_TEST), n.disable(n.CULL_FACE), n.clearColor(0, 0, 0, 0), n.clear(n.COLOR_BUFFER_BIT), !0) : !1;
  }
  function Ht(I) {
    n.useProgram(I), n.bindBuffer(n.ARRAY_BUFFER, u), n.enableVertexAttribArray(0), n.vertexAttribPointer(0, 2, n.FLOAT, !1, 0, 0);
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
  function It(I, K = {}) {
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
    }, f = Xo(ae.yawDeg, ae.pitchDeg, ae.rollDeg), he = ne.slice().sort((ke, Qe) => Number((ke == null ? void 0 : ke.zIndex) || 0) - Number((Qe == null ? void 0 : Qe.zIndex) || 0)), ge = /* @__PURE__ */ new Set();
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
          n.enable(n.BLEND), n.blendFunc(n.ONE, n.ONE_MINUS_SRC_ALPHA), Ht(c), n.uniform1i(j.texture, 0), n.uniform1i(j.mode, se), n.uniform3f(j.viewRight, f.right.x, f.right.y, f.right.z), n.uniform3f(j.viewUp, f.up.x, f.up.y, f.up.z), n.uniform3f(j.viewFwd, f.fwd.x, f.fwd.y, f.fwd.z), n.uniform1f(j.viewHfov, ut(Number(ae.hFovDeg || 90), 0.1, 179) * xt), n.uniform1f(j.viewVfov, ut(Number(ae.vFovDeg || 60), 0.1, 179) * xt), n.activeTexture(n.TEXTURE0), n.bindTexture(n.TEXTURE_2D, me), n.uniform3f(j.stickerRight, kt.right.x, kt.right.y, kt.right.z), n.uniform3f(j.stickerUp, kt.up.x, kt.up.y, kt.up.z), n.uniform3f(j.stickerFwd, kt.fwd.x, kt.fwd.y, kt.fwd.z), n.uniform1f(j.stickerTanX, Math.max(1e-6, kt.tanX)), n.uniform1f(j.stickerTanY, Math.max(1e-6, kt.tanY)), n.uniform4f(
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
          we("paint"), It(K, {
            paintOpacity: Number(ke.opacity ?? 1),
            maskOpacity: 0,
            showMaskTint: !1
          });
          continue;
        }
        if (ke.type === "mask") {
          if (!_e(ke.source, ke.revision ?? "")) continue;
          we("mask"), It(K, {
            paintOpacity: 0,
            maskOpacity: Number(ke.opacity ?? 1),
            showMaskTint: !0
          });
        }
      }
    ze(ge), C();
  }
  function Xe(I) {
    return !Ot() || !_ ? null : (St({
      mode: "panorama",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      fovDeg: (I == null ? void 0 : I.fovDeg) || 100
    }, I), t);
  }
  function Wt(I) {
    return !Ot() || !_ ? null : (St({ mode: "unwrap" }, I), t);
  }
  function Pn(I) {
    return !Ot() || !_ ? null : (St({
      mode: "cutout",
      yawDeg: (I == null ? void 0 : I.yawDeg) || 0,
      pitchDeg: (I == null ? void 0 : I.pitchDeg) || 0,
      rollDeg: (I == null ? void 0 : I.rollDeg) || 0,
      hFovDeg: (I == null ? void 0 : I.hFovDeg) || 90,
      vFovDeg: (I == null ? void 0 : I.vFovDeg) || 60
    }, I), t);
  }
  function O(I = {}) {
    if (!ce() || (ve(I.width, I.height, I.dpr || 1), !Ot())) return null;
    const K = Object.prototype.hasOwnProperty.call(I, "backgroundSource"), ne = Object.prototype.hasOwnProperty.call(I, "paintSource"), se = Object.prototype.hasOwnProperty.call(I, "maskSource"), ae = Object.prototype.hasOwnProperty.call(I, "textures"), f = Object.prototype.hasOwnProperty.call(I, "scene");
    return K && $(I.backgroundSource, I.backgroundRevision ?? ""), ne && X(I.paintSource, I.paintRevision ?? ""), se && _e(I.maskSource, I.maskRevision ?? ""), ae && (wt(I.textures || []), L.textures = I.textures || []), f && (L.scene = I.scene || { stickers: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "objectPass") && (L.objectPass = I.objectPass || { objects: [], selectedId: null, hoveredId: null }), Object.prototype.hasOwnProperty.call(I, "backgroundOpacity") && (L.backgroundOpacity = Number(I.backgroundOpacity ?? 1)), Object.prototype.hasOwnProperty.call(I, "showMaskTint") && (L.showMaskTint = I.showMaskTint === !0), Object.prototype.hasOwnProperty.call(I, "coverageDeg") && (L.coverageDeg = Number(I.coverageDeg || 360) === 180 ? 180 : 360), _ && St(I.view, {
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
    const se = Math.max(1, Number((I == null ? void 0 : I.viewportWidth) || v.sourceWidth || v.width || 1)), ae = Math.max(1, Number((I == null ? void 0 : I.viewportHeight) || v.sourceHeight || v.height || 1)), f = Number(K), he = Number(ne);
    if (!Number.isFinite(f) || !Number.isFinite(he)) return null;
    if ((I == null ? void 0 : I.mode) === "unwrap")
      return { u: (f / se % 1 + 1) % 1, v: ut(he / ae, 0, 1) };
    const ge = ua(I, se, ae);
    if (!ge) return null;
    const Se = Xo(ge.yawDeg, ge.pitchDeg, ge.rollDeg), Ie = (f - se * 0.5) / (se * 0.5) * Math.tan(ut(ge.hFovDeg, 1, 179) * xt * 0.5), Re = (ae * 0.5 - he) / (ae * 0.5) * Math.tan(ut(ge.vFovDeg, 0.1, 179) * xt * 0.5), Te = ga(fs(fs(Ri(Se.right, Ie), Ri(Se.up, Re)), Se.fwd));
    return {
      u: (Math.atan2(Te.x, Te.z) / am + 0.5 + 1) % 1,
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
    const f = ua(I, se, ae);
    if (!f)
      return { x: se * 0.5, y: ae * 0.5, visible: !1 };
    const he = Xo(f.yawDeg, f.pitchDeg, f.rollDeg), ge = jy(K, ne), Se = qo(ge, he.right), Ie = qo(ge, he.up), Re = qo(ge, he.fwd);
    if (Re <= 1e-5) return { x: 0, y: 0, visible: !1 };
    const Te = se * 0.5 + Se / Re * (se * 0.5 / Math.tan(ut(f.hFovDeg, 1, 179) * xt * 0.5)), oe = ae * 0.5 - Ie / Re * (ae * 0.5 / Math.tan(ut(f.vFovDeg, 0.1, 179) * xt * 0.5));
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
function nd(e, t = 1, n = 16384) {
  const i = Math.round(Number(e || t));
  return Math.min(n, Math.max(1, Number.isFinite(i) ? i : 1));
}
function Ky() {
  const e = /* @__PURE__ */ new Map();
  function t(u) {
    return u != null ? String(u) : "default";
  }
  function n(u, d, p) {
    const y = t(u);
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
    const w = nd(d), S = nd(p);
    return _.width !== w && (_.canvas.width = w, _.width = w), _.height !== S && (_.canvas.height = S, _.height = S), _;
  }
  function i(u) {
    return e.get(t(u)) || null;
  }
  function a(u) {
    const d = i(u);
    d && d.ctx.clearRect(0, 0, d.canvas.width, d.canvas.height);
  }
  function c() {
    e.clear();
  }
  return {
    ensureTarget: n,
    getTarget: i,
    clearTarget: a,
    dispose: c
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
function om(e, t, n) {
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
    opacity: Number.isFinite(n) ? om(n, 0, 1) : 1,
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
    opacity: Number.isFinite(n) ? om(n, 0, 1) : 1,
    zIndex: Number.isFinite(i) ? i : 0,
    coverageAware: qy(t, e == null ? void 0 : e.coverageAware),
    transform: e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null,
    params: e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}
  };
}
function Zy(e = {}) {
  return {
    objects: (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((i) => Jy(i)).filter((i) => !!i && i.visible !== !1).sort((i, a) => {
      const c = Number((i == null ? void 0 : i.zIndex) || 0), u = Number((a == null ? void 0 : a.zIndex) || 0);
      return c !== u ? c - u : String((i == null ? void 0 : i.id) || "").localeCompare(String((a == null ? void 0 : a.id) || ""));
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
function Hc(e = {}, t = "paint") {
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
  return e ? Hc({
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
  return e ? Hc({
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
  return e ? Hc({
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
function sm(e = {}) {
  const t = [], n = ev(e == null ? void 0 : e.paintSource, e == null ? void 0 : e.paintRevision, e == null ? void 0 : e.paintOptions), i = tv(e == null ? void 0 : e.maskSource, e == null ? void 0 : e.maskRevision, e == null ? void 0 : e.maskOptions), a = Array.isArray(e == null ? void 0 : e.rasterEntries) ? e.rasterEntries : [];
  return n && t.push(n), i && t.push(i), a.forEach((c, u) => {
    const d = nv(
      (c == null ? void 0 : c.source) || null,
      (c == null ? void 0 : c.revision) || "",
      {
        id: String((c == null ? void 0 : c.id) || `raster_layer_${u}`),
        zIndex: Number((c == null ? void 0 : c.zIndex) ?? (c == null ? void 0 : c.z_index) ?? 90),
        opacity: Number((c == null ? void 0 : c.opacity) ?? 1),
        visible: (c == null ? void 0 : c.visible) !== !1,
        transform: (c == null ? void 0 : c.transform) || null,
        params: (c == null ? void 0 : c.params) || {}
      }
    );
    d && t.push(d);
  }), t.sort((c, u) => {
    const d = Number((c == null ? void 0 : c.zIndex) || 0), p = Number((u == null ? void 0 : u.zIndex) || 0);
    return d !== p ? d - p : String((c == null ? void 0 : c.id) || "").localeCompare(String((u == null ? void 0 : u.id) || ""));
  });
}
function Uc(e, t) {
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
  const t = (e == null ? void 0 : e.backgroundSource) || null, n = Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360, i = String((e == null ? void 0 : e.stateRevision) || ""), a = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, c = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], u = String((e == null ? void 0 : e.backgroundRevision) || [
    String((t == null ? void 0 : t.currentSrc) || (t == null ? void 0 : t.src) || ""),
    Number((t == null ? void 0 : t.naturalWidth) || (t == null ? void 0 : t.width) || 0),
    Number((t == null ? void 0 : t.naturalHeight) || (t == null ? void 0 : t.height) || 0)
  ].join("|"));
  return Ki({
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
      objects: Uc(a, c)
    },
    overlay: {
      showMaskTint: (e == null ? void 0 : e.showMaskTint) === !0
    }
  });
}
function ba(e = {}) {
  const t = (e == null ? void 0 : e.scene) || { stickers: [], selectedId: null, hoveredId: null }, n = Array.isArray(e == null ? void 0 : e.textures) ? e.textures : [], i = Uc(t, n), a = sm({
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
  var c, u, d, p, y, _, w, S;
  if (e != null && e.background || e != null && e.objectPass || e != null && e.overlay) {
    const A = Ki(e), v = Array.isArray((c = A.objectPass) == null ? void 0 : c.objects) ? A.objectPass.objects : [], R = {
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
      selectedId: ((u = A.objectPass) == null ? void 0 : u.selectedId) ?? null,
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
        ...Uc(t, n),
        ...sm({
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
  function n(c = {}) {
    const u = rv(c);
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
function ti(e = {}) {
  const t = typeof (e == null ? void 0 : e.rendererFactory) == "function" ? e.rendererFactory : (V) => Gy(V), n = typeof (e == null ? void 0 : e.targetPoolFactory) == "function" ? e.targetPoolFactory : () => Ky(), i = typeof (e == null ? void 0 : e.stateControllerFactory) == "function" ? e.stateControllerFactory : (V) => iv(V), a = t(e), c = (e == null ? void 0 : e.targetCanvas) || null, u = n();
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
    return D ? V ? (V.canvas && D === V.canvas || V.drawImage(D, j.x, j.y, j.w, j.h), !0) : !!c && D === c : !1;
  }
  function S(V, j = {}, k = {}) {
    const E = Number(k.width || 0), D = Number(k.height || 0);
    if (!(E > 0) || !(D > 0)) return null;
    const L = u.ensureTarget(V, E, D);
    if (!L) return null;
    const W = _(j, {
      ...k,
      width: E,
      height: D
    });
    return W ? (L.ctx.clearRect(0, 0, L.canvas.width, L.canvas.height), L.ctx.drawImage(W, 0, 0, L.canvas.width, L.canvas.height), L.canvas) : null;
  }
  function A(V) {
    u.clearTarget(V);
  }
  function v() {
    var V;
    u.dispose(), (V = a.dispose) == null || V.call(a), d = null;
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
function rd(e, t = 8) {
  var _;
  const n = (_ = e == null ? void 0 : e.getContext) == null ? void 0 : _.call(e, "2d"), i = Number((e == null ? void 0 : e.width) || 0), a = Number((e == null ? void 0 : e.height) || 0);
  if (!n || i < 1 || a < 1) return null;
  const c = n.getImageData(0, 0, i, a).data;
  let u = i, d = a, p = -1, y = -1;
  for (let w = 0; w < a; w += 1)
    for (let S = 0; S < i; S += 1)
      c[(w * i + S) * 4 + 3] <= t || (S < u && (u = S), w < d && (d = w), S > p && (p = S), w > y && (y = w));
  return p < u || y < d ? null : {
    minX: u,
    minY: d,
    maxX: p,
    maxY: y,
    width: p - u + 1,
    height: y - d + 1,
    aspect: Number(((p - u + 1) / Math.max(1, y - d + 1)).toFixed(4))
  };
}
function Bc(e, t) {
  const n = Math.max(1, Math.ceil(e)), i = Math.max(1, Math.ceil(t));
  if (typeof OffscreenCanvas < "u") return new OffscreenCanvas(n, i);
  const a = document.createElement("canvas");
  return a.width = n, a.height = i, a;
}
function cr(e, t, n) {
  if (!e) return Di(t, n);
  const i = Math.max(1, Math.round(t)), a = Math.max(1, Math.round(n));
  return (e.canvas.width !== i || e.canvas.height !== a) && (e.canvas.width = i, e.canvas.height = a, e.ctx.imageSmoothingEnabled = !0), e;
}
function yt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
let zl = null, jl = null, id = null, ad = null, Nt = null, fa = null, nn = null, kr = null;
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
  zl = cr(zl, n, i);
  const a = zl;
  yt(a), a.ctx.drawImage(t, 0, 0), a.ctx.globalCompositeOperation = "source-in", ad !== a.ctx && (id = a.ctx.createPattern(ov(), "repeat"), ad = a.ctx), a.ctx.fillStyle = id, a.ctx.fillRect(0, 0, n, i), a.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(a.canvas, 0, 0), e.restore();
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
const _t = /* @__PURE__ */ new Map(), Gc = 128;
function fv(e, t, n, i, a, c) {
  const u = Math.max(1, Math.round(e)), d = Math.max(0, Math.min(1, t)), p = `${u}:${d.toFixed(2)}:${n}:${i}:${a}:${c.toFixed(3)}`;
  if (_t.has(p)) {
    const k = _t.get(p);
    return _t.delete(p), _t.set(p, k), k;
  }
  _t.size >= Gc && _t.delete(_t.keys().next().value);
  const y = u * 2 + 2, _ = u + 1, w = Bc(y, y), S = w.getContext("2d"), A = d * u, v = u + 1, R = `rgba(${n},${i},${a},${c})`, V = `rgba(${n},${i},${a},0)`, j = S.createRadialGradient(_, _, A, _, _, v);
  return j.addColorStop(0, R), j.addColorStop(1, V), S.fillStyle = j, S.fillRect(0, 0, y, y), _t.set(p, w), w;
}
function dv(e, t, n, i, a, c, u) {
  const { r: d, g: p, b: y, a: _ } = i, w = Math.max(2, Math.ceil(e) * 2), S = Math.max(2, Math.ceil(t) * 2), A = Math.max(0, a), v = Math.max(0, Math.min(0.99, c)), R = Math.max(0, Math.min(1, u ?? 0)), V = `chisel:${w}:${S}:${n.toFixed(2)}:${d}:${p}:${y}:${_.toFixed(3)}:${A.toFixed(2)}:${v.toFixed(2)}:${R.toFixed(2)}`;
  if (_t.has(V)) {
    const J = _t.get(V);
    return _t.delete(V), _t.set(V, J), J;
  }
  _t.size >= Gc && _t.delete(_t.keys().next().value);
  const j = Bc(w, S), k = j.getContext("2d"), E = k.createImageData(w, S), D = E.data, L = Math.max(0, e - t), W = Math.max(0, Math.min(1, n)), F = 1 + A;
  for (let J = 0; J < S; J++)
    for (let ce = 0; ce < w; ce++) {
      const U = ce + 0.5 - e, ve = J + 0.5 - t, xe = Math.max(Math.abs(U) - L, 0), we = Math.hypot(xe, ve) / t;
      if (we >= 1) continue;
      const te = we <= W ? 1 : Math.max(0, (1 - we) / Math.max(1e-4, 1 - W)), ye = 1 - we, $ = 1 + A * (1 - ye) * (1 - ye), X = 1 - v * ye * ye, _e = $ * X / F;
      let $e = 1;
      if (R > 0) {
        const wt = Math.floor((ve + t) / 1.5), Ot = Math.floor((U + e) / 8), Ht = Qr(Vi(wt * 41 + 500, Ot * 19 + 300));
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
function hv(e, t, n, i, a, c, u) {
  const d = e + 0.5 - n, p = t + 0.5 - i, y = Math.max(0, n - i), _ = Math.max(Math.abs(d) - y, 0), w = Math.hypot(_, p) / i;
  if (w >= 1) return 0;
  const S = Qr(Vi(e * 17 + 3, t * 13 + 7)), A = w + c * 0.22 * (S - 0.5);
  if (A >= 1) return 0;
  const v = A <= a ? 1 : Math.max(0, (1 - A) / Math.max(1e-4, 1 - a)), R = mv(e, t, d, p, n, i), V = c * 0.55;
  if (R < V) return 0;
  const k = 0.45 + 0.55 * ((R - V) / Math.max(1e-4, 1 - V));
  return Math.round(255 * Math.min(1, u * v * k));
}
function mv(e, t, n, i, a, c) {
  const u = Math.floor((n + a) / 3), d = Math.floor((i + c) / 2), p = Qr(Vi(u * 13 + 700, d * 17 + 400)), y = Math.floor((n + a) / 1.5), _ = Math.floor((i + c) / 1.5), w = Qr(Vi(y * 23 + 800, _ * 29 + 500)), S = Qr(Vi(e * 3 + 100, t * 5 + 200));
  return p * 0.55 + w * 0.3 + S * 0.15;
}
function pv(e, t, n, i, a) {
  const { r: c, g: u, b: d, a: p } = i, y = Math.max(2, Math.ceil(e) * 2), _ = Math.max(2, Math.ceil(t) * 2), w = Math.max(0, Math.min(1, a)), S = `crayon:${y}:${_}:${n.toFixed(2)}:${c}:${u}:${d}:${p.toFixed(3)}:${w.toFixed(2)}`;
  if (_t.has(S)) {
    const k = _t.get(S);
    return _t.delete(S), _t.set(S, k), k;
  }
  _t.size >= Gc && _t.delete(_t.keys().next().value);
  const A = Bc(y, _), v = A.getContext("2d"), R = v.createImageData(y, _), V = R.data, j = Math.max(0, Math.min(1, n));
  for (let k = 0; k < _; k++)
    for (let E = 0; E < y; E++) {
      const D = hv(E, k, e, t, j, w, p);
      if (D <= 0) continue;
      const L = (k * y + E) * 4;
      V[L] = c, V[L + 1] = u, V[L + 2] = d, V[L + 3] = D;
    }
  return v.putImageData(R, 0, 0), _t.set(S, A), A;
}
function lm(e, t, n) {
  var R, V;
  const i = String((t == null ? void 0 : t.stampKind) || "round"), a = cv(t, n), c = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), u = gv(t), d = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), p = Number(((R = t == null ? void 0 : t.angle) == null ? void 0 : R.value) ?? 0), y = uv(t, a), _ = String(((V = t == null ? void 0 : t.targetSpace) == null ? void 0 : V.viewMode) || ""), w = (n == null ? void 0 : n.kind) === "ERP_GLOBAL" && _ !== "unwrap", S = t == null ? void 0 : t.scatter, A = S ? { radius: Number(S.radius ?? 1.5), count: Math.max(1, Math.round(S.count ?? 6)) } : null;
  let v;
  if (i === "chisel") {
    const j = a * d, k = a, E = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), D = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), L = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    v = dv(j, k, c, u, E, D, L);
  } else if (i === "crayon") {
    const j = a * d, k = a, E = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    v = pv(j, k, c, u, E);
  } else
    v = fv(a, c, u.r, u.g, u.b, u.a);
  return { ctx: e, stampTex: v, radiusPx: a, spacingPx: y, desc: n, aspect: d, angle: p, stampKind: i, scatter: A, latitudeCorrection: w };
}
function gv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), c = Math.max(0, Math.min(1, Number(i.a ?? 1))) * a;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(i.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(i.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(i.b || 0))) * 255),
    a: c
  };
}
function bv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const i = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, a = Math.max(0, Math.min(1, Number(i.a ?? 1)));
  return `rgba(${Math.round(Number(i.r || 0) * 255)},${Math.round(Number(i.g || 0) * 255)},${Math.round(Number(i.b || 0) * 255)},${a})`;
}
function od(e, t, n, i, a) {
  const c = e.angle, u = e.desc.width;
  function d(y, _) {
    c === 0 ? e.ctx.drawImage(e.stampTex, y - a, _ - i, a * 2, i * 2) : (e.ctx.save(), e.ctx.translate(y, _), e.ctx.rotate(c), e.ctx.drawImage(e.stampTex, -a, -i, a * 2, i * 2), e.ctx.restore());
  }
  d(t, n);
  const p = c === 0 ? a : a * Math.abs(Math.cos(c)) + i * Math.abs(Math.sin(c));
  t - p < 0 && d(t + u, n), t + p > u && d(t - u, n);
}
function Kc(e, t, n, i) {
  const a = Math.max(0.01, Number.isFinite(i) ? i : 1);
  if (e.scatter) {
    const { radius: y, count: _ } = e.scatter, w = y * e.radiusPx * a, S = Vi(t, n);
    for (let A = 0; A < _; A++) {
      const v = Qr(S + A * 2) * Math.PI * 2, R = Math.sqrt(Qr(S + A * 2 + 1)) * w, V = t + Math.cos(v) * R, j = n + Math.sin(v) * R, k = Math.max(0.5, e.radiusPx * a * 0.48), E = (0.5 - j / Math.max(1, e.desc.height)) * Math.PI, D = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(E)) : 1, L = k * e.aspect * D;
      od(e, V, j, k, L);
    }
    return;
  }
  const c = Math.max(0.5, e.radiusPx * a), u = (0.5 - n / Math.max(1, e.desc.height)) * Math.PI, d = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(u)) : 1, p = c * e.aspect * d;
  od(e, t, n, c, p);
}
function sd(e, t, n) {
  const i = lv(t);
  if (!e || i.length === 0) return;
  const a = n.width, c = n.height, u = lm(e, t, n);
  e.save(), e.globalCompositeOperation = "source-over";
  const d = [];
  for (let S = 0; S < i.length; S++) {
    let A = Number(i[S].u || 0) * a;
    const v = Number(i[S].v || 0) * c;
    S > 0 && Math.abs(A - d[S - 1].x) > a * 0.5 && (A += A < d[S - 1].x ? a : -a), d.push({ x: A, y: v });
  }
  if (Kc(u, d[0].x, d[0].y, 1), d.length === 1) {
    e.restore();
    return;
  }
  let p = d[0], y = d[0], _ = d[0], w = 0;
  for (let S = 1; S < d.length; S++) {
    const A = d[S], v = { x: (y.x + A.x) * 0.5, y: (y.y + A.y) * 0.5 };
    S === 1 ? w = Fa(u, _.x, _.y, v.x, v.y, w) : w = ds(u, p, _, v, A, w), p = y, y = A, _ = v;
  }
  d.length === 2 ? Fa(u, _.x, _.y, y.x, y.y, w) : ds(u, p, _, y, y, w), e.restore();
}
function Jo(e, t, n) {
  var w;
  const i = Array.isArray((w = t == null ? void 0 : t.geometry) == null ? void 0 : w.points) ? t.geometry.points : [];
  if (!e || i.length < 3) return;
  const a = n.width, c = n.height, u = bv(t), d = [];
  let p = 1 / 0, y = -1 / 0;
  for (let S = 0; S < i.length; S++) {
    const A = sv(i[S]);
    let v = Number(A.x || 0) * a;
    S > 0 && Math.abs(v - d[S - 1].x) > a * 0.5 && (v += v < d[S - 1].x ? a : -a), d.push({ x: v, y: Number(A.y || 0) * c }), v < p && (p = v), v > y && (y = v);
  }
  function _(S) {
    e.beginPath(), e.moveTo(d[0].x + S, d[0].y);
    for (let A = 1; A < d.length; A++) e.lineTo(d[A].x + S, d[A].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = u, _(0), p < 0 && _(a), y > a && _(-a), e.restore();
}
function Mo(e, t, n) {
  var u;
  if (String(((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.geometryKind) || "") === "lasso_fill") {
    Jo(e, t, n);
    return;
  }
  const c = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  c >= 0.999 ? sd(e, t, n) : (fa = cr(fa, n.width, n.height), yt(fa), sd(fa.ctx, t, n), e.save(), e.globalAlpha = c, e.drawImage(fa.canvas, 0, 0), e.restore());
}
function Gr(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function Fa(e, t, n, i, a, c) {
  const u = i - t, d = a - n, p = Math.hypot(u, d);
  if (p < 1e-9) return c;
  let y = e.spacingPx - c;
  for (; y <= p; ) {
    const _ = y / p;
    Kc(e, t + u * _, n + d * _, 1), y += e.spacingPx;
  }
  return p - y + e.spacingPx;
}
function ds(e, t, n, i, a, c) {
  const d = Math.sqrt(Math.hypot(n.x - t.x, n.y - t.y)) + 1e-4, p = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, y = Math.sqrt(Math.hypot(a.x - i.x, a.y - i.y)) + 1e-4, _ = 0, w = d, S = w + p, A = S + y, v = S - w, R = 16;
  let V = c, j = n.x, k = n.y;
  for (let E = 1; E <= R; E++) {
    const D = w + v * E / R, L = ((w - D) * t.x + (D - _) * n.x) / (w - _), W = ((w - D) * t.y + (D - _) * n.y) / (w - _), F = ((S - D) * n.x + (D - w) * i.x) / (S - w), J = ((S - D) * n.y + (D - w) * i.y) / (S - w), ce = ((A - D) * i.x + (D - S) * a.x) / (A - S), U = ((A - D) * i.y + (D - S) * a.y) / (A - S), ve = ((S - D) * L + (D - _) * F) / (S - _), xe = ((S - D) * W + (D - _) * J) / (S - _), C = ((A - D) * F + (D - w) * ce) / (A - w), we = ((A - D) * J + (D - w) * U) / (A - w), te = ((S - D) * ve + (D - w) * C) / (S - w), ye = ((S - D) * xe + (D - w) * we) / (S - w);
    V = Fa(e, j, k, te, ye, V), j = te, k = ye;
  }
  return V;
}
function yv(e, t, n, i) {
  const a = e.currentStroke.ctx;
  if (!a) return;
  const c = e.descriptor, u = c.width, d = n * c.height, p = e.activeStroke;
  let y = t * u;
  if (p && Math.abs(y - p.prev.x) > u * 0.5 && (y += y < p.prev.x ? u : -u), !p) {
    const A = lm(a, i, c), v = Math.max(0, Math.min(1, Number((i == null ? void 0 : i.opacity) ?? 1))), R = Math.max(0, Number((i == null ? void 0 : i.velocityWidthFactor) ?? 0)), V = String((i == null ? void 0 : i.toolKind) || "") === "eraser", j = String((i == null ? void 0 : i.layerKind) || "paint");
    a.globalCompositeOperation = "source-over", Kc(A, y, d, 1), e.activeStroke = {
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
    desc: c,
    aspect: p.aspect,
    angle: p.angle,
    stampKind: p.stampKind,
    scatter: p.scatter,
    latitudeCorrection: p.latitudeCorrection
  };
  p.pointCount === 1 ? p.distSinceStamp = Fa(S, p.lastMidX, p.lastMidY, _, w, p.distSinceStamp) : p.distSinceStamp = ds(
    S,
    p.pprev,
    { x: p.lastMidX, y: p.lastMidY },
    { x: _, y: w },
    { x: y, y: d },
    p.distSinceStamp
  ), p.pprev = p.prev, p.prev = { x: y, y: d }, p.lastMidX = _, p.lastMidY = w, p.pointCount++, e.displayDirty = !0;
}
function dc(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), n = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), i = { kind: "ERP_GLOBAL", width: t, height: n }, a = /* @__PURE__ */ new Map(), c = Di(t, n), u = {
    descriptor: i,
    committedMask: Di(t, n),
    currentStroke: c,
    activeStroke: null,
    displayDirty: !0,
    lassoPreviewActive: !1
  }, d = {
    actionGroupId: "__eraser__",
    descriptor: i,
    committedPaint: Di(t, n),
    currentStroke: c,
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
      currentStroke: c,
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
    return _ === "mask" ? u : y ? A(y) : d;
  }
  function R(U) {
    var ye;
    const ve = !w || w.length !== U.length || U.some(($, X) => $ !== w[X]), xe = _ === "paint" && ((ye = y ? a.get(y) : d) == null ? void 0 : ye.activeStroke) || null;
    let C = u.displayDirty || d.displayDirty || ve;
    for (const $ of U) {
      const X = a.get($);
      if (X != null && X.displayDirty) {
        C = !0;
        break;
      }
    }
    if (xe && (C = !0), !C) return;
    u.displayDirty = !1, d.displayDirty = !1;
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
        Nt = cr(Nt, t, n), yt(Nt), Nt.ctx.drawImage(X.committedPaint.canvas, 0, 0), Gr(Nt.ctx, c.canvas), we.drawImage(Nt.canvas, 0, 0);
      else if (we.drawImage(X.committedPaint.canvas, 0, 0), $e) {
        const ze = X.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, $e.strokeOpacity ?? 1));
        we.save(), we.globalAlpha = ze, we.drawImage(c.canvas, 0, 0), we.restore();
      }
    }
  }
  function V(U) {
    var xe, C, we, te, ye;
    for (const $ of a.values())
      yt($.committedPaint), yt($.currentStroke), $.activeStroke = null, $.displayDirty = !0;
    yt(u.committedMask), yt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0, d.displayDirty = !0, w = null;
    const ve = [
      ...Array.isArray((C = (xe = U == null ? void 0 : U.painting) == null ? void 0 : xe.paint) == null ? void 0 : C.strokes) ? U.painting.paint.strokes : [],
      ...Array.isArray((te = (we = U == null ? void 0 : U.painting) == null ? void 0 : we.mask) == null ? void 0 : te.strokes) ? U.painting.mask.strokes : []
    ];
    for (const $ of ve) {
      if (((ye = $ == null ? void 0 : $.targetSpace) == null ? void 0 : ye.kind) !== "ERP_GLOBAL") continue;
      const X = String(($ == null ? void 0 : $.layerKind) || "paint"), $e = String(($ == null ? void 0 : $.toolKind) || "pen") === "eraser";
      if (X === "mask") {
        const ze = u.descriptor;
        $e ? (Nt = cr(Nt, ze.width, ze.height), yt(Nt), Mo(Nt.ctx, $, ze), Gr(u.committedMask.ctx, Nt.canvas)) : Mo(u.committedMask.ctx, $, ze);
        continue;
      }
      if ($e) {
        Nt = cr(Nt, i.width, i.height), yt(Nt), Mo(Nt.ctx, $, i);
        for (const ze of a.values())
          Gr(ze.committedPaint.ctx, Nt.canvas), ze.displayDirty = !0;
      } else {
        const ze = String(($ == null ? void 0 : $.actionGroupId) || "__default__"), De = A(ze), wt = De.descriptor;
        Mo(De.committedPaint.ctx, $, wt), De.displayDirty = !0;
      }
    }
    R([...a.keys()]);
  }
  function j(U, ve) {
    _ = String((U == null ? void 0 : U.layerKind) || "");
    const xe = String((U == null ? void 0 : U.toolKind) || "") === "eraser";
    if (_ === "mask")
      y = null, yt(u.currentStroke), u.activeStroke = null, u.displayDirty = !0;
    else {
      const C = xe ? d : A(String((U == null ? void 0 : U.actionGroupId) || "__default__"));
      y = xe ? "" : String((U == null ? void 0 : U.actionGroupId) || "__default__"), yt(C.currentStroke), C.activeStroke = null, C.displayDirty = !0;
    }
  }
  function k(U, ve) {
    var X;
    const xe = String((U == null ? void 0 : U.layerKind) || "paint"), C = String((U == null ? void 0 : U.toolKind) || "") === "eraser", we = xe === "mask" ? u : C ? d : A(String((U == null ? void 0 : U.actionGroupId) || y || "__default__")), te = we.activeStroke, ye = we.descriptor;
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
      te.pointCount === 2 ? Fa($e, te.lastMidX, te.lastMidY, te.prev.x, te.prev.y, te.distSinceStamp) : ds($e, te.pprev, { x: te.lastMidX, y: te.lastMidY }, te.prev, te.prev, te.distSinceStamp);
    }
    we.lassoPreviewActive && (yt(we.currentStroke), Jo(we.currentStroke.ctx, U, ye), we.lassoPreviewActive = !1);
    const $ = xe === "mask" ? u.committedMask : we.committedPaint;
    if (C && xe === "paint")
      for (const _e of a.values())
        Gr(_e.committedPaint.ctx, we.currentStroke.canvas), _e.displayDirty = !0;
    else if (C)
      Gr($.ctx, we.currentStroke.canvas);
    else {
      const _e = Math.max(0, Math.min(1, (te == null ? void 0 : te.strokeOpacity) ?? 1));
      $.ctx.save(), $.ctx.globalAlpha = _e, $.ctx.drawImage(we.currentStroke.canvas, 0, 0), $.ctx.restore();
    }
    av() && (String((U == null ? void 0 : U.toolKind) || ""), String((ye == null ? void 0 : ye.kind) || ""), Number((ye == null ? void 0 : ye.width) || 0), Number((ye == null ? void 0 : ye.height) || 0), String(((X = U == null ? void 0 : U.targetSpace) == null ? void 0 : X.viewMode) || ""), Number((U == null ? void 0 : U.aspect) ?? 1), rd(we.currentStroke.canvas), rd($.canvas), void 0), yt(we.currentStroke), we.activeStroke = null, we.displayDirty = !0, y = null, _ = "", R([...a.keys()]);
  }
  function E(U) {
    if (_ === "mask")
      yt(u.currentStroke), u.activeStroke = null, u.lassoPreviewActive = !1, u.displayDirty = !0;
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
        yt(u.currentStroke), Jo(u.currentStroke.ctx, U, u.descriptor), u.lassoPreviewActive = !0, u.displayDirty = !0;
      else {
        const we = String((U == null ? void 0 : U.toolKind) || "") === "eraser", te = we ? d : A(String((U == null ? void 0 : U.actionGroupId) || y || "__default__"));
        y = we ? "" : String((U == null ? void 0 : U.actionGroupId) || y || "__default__"), yt(te.currentStroke), Jo(te.currentStroke.ctx, U, te.descriptor), te.lassoPreviewActive = !0, te.displayDirty = !0;
      }
      R([...a.keys()]);
    }
  }
  function L(U) {
    return R(U ?? [...a.keys()]), {
      displayPaint: p,
      committedMask: u.committedMask,
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
      return nn = cr(nn, t, n), yt(nn), nn.ctx.drawImage(ve.committedPaint.canvas, 0, 0), Gr(nn.ctx, c.canvas), nn.canvas;
    const we = xe ? ve.activeStroke : null;
    if (!we) return ve.committedPaint.canvas;
    nn = cr(nn, t, n), yt(nn), nn.ctx.drawImage(ve.committedPaint.canvas, 0, 0);
    const te = ve.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, we.strokeOpacity ?? 1));
    return nn.ctx.save(), nn.ctx.globalAlpha = te, nn.ctx.drawImage(c.canvas, 0, 0), nn.ctx.restore(), nn.canvas;
  }
  function ce() {
    return kr = cr(kr, t, n), yt(kr), Vl(kr.ctx, u.committedMask.canvas), _ === "mask" && u.activeStroke && (u.activeStroke.isEraser ? (Nt = cr(Nt, t, n), yt(Nt), Nt.ctx.drawImage(u.committedMask.canvas, 0, 0), Gr(Nt.ctx, c.canvas), yt(kr), Vl(kr.ctx, Nt.canvas)) : Vl(kr.ctx, c.canvas)), kr.canvas;
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
const ld = Math.PI / 180, cd = 0.12, _v = 3, xv = 35, wv = 140, ya = 100, Sv = 20, ud = 0.8;
function Mv(e, t, n) {
  const i = Math.max(1, Number(t || 1)), a = Math.max(1, Number(n || 1)), c = G(Number(e || ya), 1, 179) * ld;
  return 2 * Math.atan(Math.tan(c * 0.5) * (a / i)) / ld;
}
function Nv(e) {
  return Number.isFinite(Number(e == null ? void 0 : e.deltaY)) ? Number(e.deltaY) : Number.isFinite(Number(e == null ? void 0 : e.wheelDelta)) ? -Number(e.wheelDelta) : Number.isFinite(Number(e == null ? void 0 : e.detail)) ? Number(e.detail) * 40 : 0;
}
function Fs(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: ya })), n = typeof e.setView == "function" ? e.setView : (() => {
  }), i = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), a = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), c = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), u = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
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
      const $ = c() || { w: 0, h: 0 }, X = Math.max(1, Number($.w || 0)), _e = Math.max(1, Number($.h || 0));
      if (X > 1 && _e > 1) {
        const $e = G(Number(C.fov || ya), 1, 179), ze = G(Mv($e, X, _e), 0.1, 179);
        we = -(J / X) * $e * ve, te = ce / _e * ze * xe;
      } else
        we = -J * cd * ve, te = ce * cd * xe;
    }
    C.yaw = Vt(Number(C.yaw || 0) + we), C.pitch = G(Number(C.pitch || 0) + te, -89.9, 89.9), n(C), p.velHistory.push({ ts: L, yaw: C.yaw, pitch: C.pitch });
    let ye = 0;
    for (; ye < p.velHistory.length - 1 && p.velHistory[ye].ts < L - 100; ) ye++;
    return ye > 0 && p.velHistory.splice(0, ye), p.inertia.active = !1, p.inertia.lastTs = L, u(), y("drag", { phase: "move", dx: J, dy: ce, dYaw: we, dPitch: te }), !0;
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
    return p.inertia.vx *= L, p.inertia.vy *= L, Math.abs(p.inertia.vx) < ud && Math.abs(p.inertia.vy) < ud && (p.inertia.vx = 0, p.inertia.vy = 0, p.inertia.active = !1), n(D), u(), p.inertia.active;
  }
  function v(j) {
    const k = Math.sign(Number(j || 0));
    if (!k) return !1;
    const E = { ...t() }, D = Number(E.fov || ya);
    return E.fov = G(D + k * _v, xv, wv), n(E), u(), y("wheel", { deltaSign: k, fovBefore: D, fovAfter: E.fov }), !0;
  }
  function R(j) {
    return v(Math.sign(Nv(j)));
  }
  function V() {
    n({ yaw: 0, pitch: 0, fov: ya }), p.inertia.active = !1, p.inertia.vx = 0, p.inertia.vy = 0, u();
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
const fd = Math.PI / 180;
function da(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function kv(e) {
  const t = e || {}, n = da(t.yaw_deg, 0), i = da(t.pitch_deg, 0), a = da(t.roll_deg ?? t.rot_deg, 0), c = Hl(da(t.hFOV_deg, 90), 1, 179), u = Hl(da(t.vFOV_deg, 60), 1, 179), d = Math.tan(c * fd * 0.5) / Math.max(1e-6, Math.tan(u * fd * 0.5)), p = Hl(d, 0.1, 10);
  return {
    yaw: n,
    pitch: i,
    roll: a,
    hfov: c,
    vfov: u,
    aspect: p
  };
}
const cm = 0.28;
function Pv(e) {
  const t = e && typeof e == "object" ? e : {}, n = G(Number(t.x0 ?? 0), 0, 1), i = G(Number(t.y0 ?? 0), 0, 1), a = G(Number(t.x1 ?? 1), 0, 1), c = G(Number(t.y1 ?? 1), 0, 1);
  return {
    x0: Math.min(n, a),
    y0: Math.min(i, c),
    x1: Math.max(n, a),
    y1: Math.max(i, c)
  };
}
function Av(e, t = {}) {
  if (!e || typeof e != "object") return null;
  const n = String(e.asset_id || e.assetId || "").trim(), i = e.type === "external_image" || e.source_kind === "external_image", a = n || (i ? String(e.id || "").trim() : ""), c = t.includeHidden === !0, u = e.visible === !1, d = c && i && u;
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
    opacity: d ? cm : G(Number(e.opacity ?? 1), 0, 1),
    visible: d ? !0 : e.visible !== !1,
    external: i
  };
}
function Ls(e, t = {}) {
  var c;
  const n = Array.isArray(t.stickers) ? t.stickers : Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [], i = t.includeHidden === !0;
  return {
    stickers: n.map((u) => Av(u, { includeHidden: i })).filter((u) => u && (i || u.visible !== !1)).sort((u, d) => Number(u.zIndex || 0) - Number(d.zIndex || 0)),
    selectedId: t.selectedId ?? ((c = e == null ? void 0 : e.active) == null ? void 0 : c.selected_sticker_id) ?? null,
    hoveredId: t.hoveredId ?? null
  };
}
function um(e, t, n = {}) {
  if (typeof t != "function") return [];
  const i = n.scene || Ls(e, n), a = e && typeof e == "object" && e.assets && typeof e.assets == "object" ? e.assets : {}, c = [], u = /* @__PURE__ */ new Set();
  return i.stickers.forEach((d) => {
    var v;
    const p = String((d == null ? void 0 : d.assetId) || "").trim(), y = p || (d != null && d.external ? String((d == null ? void 0 : d.id) || "").trim() : "");
    if (!y || u.has(y)) return;
    const _ = p ? a[p] : null, w = t(y, _, d);
    if (w instanceof HTMLImageElement && !w.complete) return;
    const S = Number((w == null ? void 0 : w.naturalWidth) || (w == null ? void 0 : w.videoWidth) || (w == null ? void 0 : w.width) || 0), A = Number((w == null ? void 0 : w.naturalHeight) || (w == null ? void 0 : w.videoHeight) || (w == null ? void 0 : w.height) || 0);
    !w || S <= 0 || A <= 0 || (u.add(y), c.push({
      assetId: y,
      source: w,
      revision: String(((v = n.revisionFor) == null ? void 0 : v.call(n, y, _, w)) ?? [
        y,
        Number(w.naturalWidth || w.videoWidth || w.width || 0),
        Number(w.naturalHeight || w.videoHeight || w.height || 0),
        String(w.currentSrc || w.src || "")
      ].join("|"))
    }));
  }), c;
}
function Wc(e, t = 360) {
  return {
    mode: "panorama",
    yawDeg: Number((e == null ? void 0 : e.yaw) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitch) || 0),
    fovDeg: G(Number((e == null ? void 0 : e.fov) || 100), 1, 179),
    coverageDeg: Number(t || 360) === 180 ? 180 : 360
  };
}
function Cv(e, t = 360) {
  return Wc(e, t);
}
function Dr(e) {
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
const { app: pt } = Go;
function hc() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (Go == null ? void 0 : Go.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
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
  var n, i, a, c, u;
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
    stylePos: String(((c = e.style) == null ? void 0 : c.position) || ""),
    styleTransform: String(((u = e.style) == null ? void 0 : u.transform) || "")
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
    const c = Number(i), u = Number(a);
    return !Number.isFinite(c) || !Number.isFinite(u) ? null : [c, u];
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
function fm(e) {
  const t = ri(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function dm(e, t, n) {
  fm(e) && (e.size = [Math.max(1, Number(t || 1)), Math.max(1, Number(n || 1))]);
}
function mc(e) {
  var t;
  return e != null && e.__panoLegacyPreviewHooked ? "legacy_draw" : (t = e == null ? void 0 : e.__panoDomPreview) != null && t.widget ? "dom" : "none";
}
function hm(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Rv(e) {
  return hs(hm(e));
}
function ei(e = null) {
  var c, u;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), n = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), i = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", a = String(((u = (c = pt == null ? void 0 : pt.canvas) == null ? void 0 : c.constructor) == null ? void 0 : u.name) || "");
  return [t, i, n, a].join("|");
}
function mm(e, t = null) {
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
            i.__panoRebindGeneration = this.generation, String(i.__panoStickersPath || "unknown"), this.generation, pm(i).rebind(i.__panoAttachOptions || { mode: "stickers" });
          } catch (a) {
            String((a == null ? void 0 : a.message) || a || "unknown");
          }
      });
    }, 300));
  }
};
function pm(e) {
  if (e != null && e.__panoPreviewController) return e.__panoPreviewController;
  const t = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", a = i === "cutout" ? "dom" : mm(i, e).chosenPath, c = mc(e);
      this.activeBackend = c;
      const u = String(e.__panoPreviewMode || "stickers") === "cutout" ? "cutout" : "stickers", d = e.__panoPreviewNoPreview === !0, p = n.noPreview === !0;
      if (c === a && c !== "none" && u === i && d === p) {
        e.__panoAttachOptions = { ...n, mode: i }, e.__panoPreviewMode = i, e.__panoPreviewNoPreview = p, e.__panoPreviewButtonText = String(n.buttonText || (i === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof n.onOpen == "function" ? n.onOpen : e.__panoOpenEditor;
        return;
      }
      c !== "none" && Hi(e, { keepMonitor: i === "stickers" }), M1(e, { ...n, mode: i, __panoForcedPath: a }), this.activeBackend = mc(e);
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
  var i, a, c, u, d;
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
      (c = n.state) != null && c.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (d = (u = n.root) == null ? void 0 : u.remove) == null || d.call(u);
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
function dd(e, t) {
  return ii(e.x + t.x, e.y + t.y, e.z + t.z);
}
function No(e, t) {
  return ii(e.x * t, e.y * t, e.z * t);
}
function Ul(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function hd(e, t) {
  return ii(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function ko(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ii(e.x / t, e.y / t, e.z / t);
}
function qr(e, t) {
  const n = e * ni, i = t * ni, a = Math.cos(i);
  return ii(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function Yc(e, t, n = 0) {
  const i = qr(e, t), a = ii(0, 1, 0);
  let c = hd(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = ii(1, 0, 0)), c = ko(c);
  let u = ko(hd(i, c));
  const d = n * ni, p = Math.cos(d), y = Math.sin(d), _ = dd(No(c, p), No(u, y)), w = dd(No(c, -y), No(u, p));
  return { fwd: i, right: ko(_), up: ko(w) };
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
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = La(e, "state_json")) == null ? void 0 : n.value) || "");
}
function qc(e) {
  var d, p;
  const t = $v(e), n = Number((e == null ? void 0 : e.__panoLiveStateVersion) || 0), i = String(((d = La(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), a = Number(((p = La(e, "coverage")) == null ? void 0 : p.value) || 360) === 180 ? 180 : 360, c = e.__panoStateCache;
  if (c && c.source === t && c.liveVersion === n && c.bg === i && c.coverage === a)
    return c.parsed;
  const u = Lv(t, i);
  return u.coverage = a, e.__panoStateCache = { source: t, liveVersion: n, bg: i, coverage: a, parsed: u }, u;
}
function La(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function md(e, t, n) {
  return !!n && e >= n.x && e <= n.x + n.w && t >= n.y && t <= n.y + n.h;
}
function gm(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function zv(e, t) {
  var n, i;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((n = e._nodes_by_id) == null ? void 0 : n[t]) || ((i = e._nodes_by_id) == null ? void 0 : i[String(t)]) || null;
}
function bm(e) {
  return e ? typeof e == "object" && !Array.isArray(e) ? {
    originId: e.origin_id ?? null,
    originSlot: Number(e.origin_slot ?? 0)
  } : Array.isArray(e) ? {
    originId: e[1] ?? null,
    originSlot: Number(e[2] ?? 0)
  } : { originId: null, originSlot: 0 } : { originId: null, originSlot: 0 };
}
function ym(e, t, n = null) {
  var a, c;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = zv(e == null ? void 0 : e.graph, n)), i;
}
function jv(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((n) => String((n == null ? void 0 : n.name) || "")).filter(Boolean);
}
function Xc(e, t = []) {
  const n = jv(e), i = [];
  return t.forEach((a) => {
    n.includes(String(a)) && i.push(String(a));
  }), n.forEach((a) => {
    (a === "erp_image" || a === "bg_erp") && !i.includes(a) && i.push(a);
  }), i.length ? i : t;
}
function pd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":").map((i) => String(i).trim()).filter(Boolean);
  return { full: t, tail: n.length ? n[n.length - 1] : t };
}
function ps(e, t) {
  const n = pd(e), i = pd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Vv(e, t = ["erp_image", "bg_erp"]) {
  var p;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return [];
  const a = Xc(e, t).map((y) => n.findIndex((_) => String((_ == null ? void 0 : _.name) || "") === String(y))).filter((y) => y >= 0), c = n.map((y, _) => ({ input: y, idx: _ })).filter(({ input: y }) => String((y == null ? void 0 : y.type) || "").toUpperCase() === "IMAGE").map(({ idx: y }) => y), u = [.../* @__PURE__ */ new Set([...a, ...c])], d = [];
  for (const y of u) {
    const _ = ym(e, y);
    if ((_ == null ? void 0 : _.id) != null) {
      d.push(String(_.id));
      continue;
    }
    const w = (p = n[y]) == null ? void 0 : p.link;
    if (w == null) continue;
    const S = gm(e == null ? void 0 : e.graph, w), { originId: A } = bm(S);
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
      [...this.nodes].forEach((c) => {
        var y, _, w, S, A;
        if (!c) return;
        const u = ps(i, c == null ? void 0 : c.id);
        Vv(c, ["erp_image", "bg_erp"]).some((v) => ps(i, v)), !(String(c.__panoPreviewMode || "") === "cutout" && !u) && (gc(c), (_ = (y = c.__panoDomPreview) == null ? void 0 : y.requestDraw) == null || _.call(y), (w = c.setDirtyCanvas) == null || w.call(c, !0, !0), (A = (S = c.graph) == null ? void 0 : S.setDirtyCanvas) == null || A.call(S, !0, !0), String(c.__panoPreviewMode || ""), String(c.__panoPreviewMode || ""), void 0);
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
  var c;
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
  return typeof ((c = on) == null ? void 0 : c.apiURL) == "function" ? on.apiURL(a) : a;
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
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
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
  const a = ["temp", "output", "input"].map((c) => bs({
    filename: n,
    subfolder: i,
    type: c
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
function gd(e) {
  const t = pt == null ? void 0 : pt.nodeOutputs;
  if (!t || e == null) return null;
  const n = String(e);
  let i = null;
  if (t instanceof Map ? i = t.get(e) || t.get(n) || t.get(Number(n)) || null : i = t[e] || t[n] || null, i) return i;
  const a = n;
  if (t instanceof Map) {
    for (const c of t.keys())
      if (ps(c, a)) return t.get(c);
  } else {
    const c = Object.keys(t);
    for (const u of c)
      if (ps(u, a)) return t[u];
  }
  return null;
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
      const n = String(e[1] || "").trim(), i = String(e[2] || "output").trim() || "output";
      return bs({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = hr(n);
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
    const a = typeof window < "u" && ((i = window == null ? void 0 : window.location) != null && i.href) ? window.location.href : "http://127.0.0.1/", c = new URL(n, a);
    return t > 0 && c.searchParams.set("pano_rev", String(t)), c.toString();
  } catch {
    const a = n.includes("?") ? "&" : "?";
    return t > 0 ? `${n}${a}pano_rev=${t}` : n;
  }
}
function qv(e) {
  const t = [], n = /* @__PURE__ */ new Set(), i = (c) => {
    Array.isArray(c) && c.forEach((u) => t.push(u));
  }, a = (c, u = 0) => {
    !c || u > 3 || n.has(c) || typeof c == "object" && (n.add(c), i(c.images), a(c.output, u + 1), a(c.ui, u + 1), a(c.data, u + 1), a(c.result, u + 1));
  };
  return a(e, 0), t;
}
function Xv(e, t) {
  try {
    const n = qv(t);
    let i = "";
    for (const a of n)
      if (i = hr(a), i) break;
    i ? (e.__panoOwnOutputRev = Number(e.__panoOwnOutputRev || 0) + 1, e.__panoOwnOutputSrc = String(i || ""), Yv(e.__panoOwnOutputSrc, e.__panoOwnOutputRev), e.__panoOwnOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function Jv(e, t = []) {
  var y, _;
  const n = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!n.length) return { src: "", sourceType: "", inputName: "" };
  const a = Xc(e, t).map((w) => n.findIndex((S) => String((S == null ? void 0 : S.name) || "") === String(w))).filter((w) => w >= 0), c = n.map((w, S) => ({ input: w, idx: S })).filter(({ input: w }) => String((w == null ? void 0 : w.type) || "").toUpperCase() === "IMAGE").map(({ idx: w }) => w), u = [.../* @__PURE__ */ new Set([...a, ...c])];
  for (const w of u) {
    const S = n[w], A = S == null ? void 0 : S.link;
    if (A == null) continue;
    const v = gm(e.graph, A), { originId: R, originSlot: V } = bm(v);
    if (R == null) continue;
    const j = ym(e, w, R);
    if (!j) continue;
    const k = Number(V || 0), E = gd((j == null ? void 0 : j.id) ?? R), D = Array.isArray(E == null ? void 0 : E.images) ? E.images : [];
    if (D.length) {
      const J = [];
      k >= 0 && k < D.length && J.push(D[k]), J.push(...D);
      for (const ce of J) {
        const U = hr(ce);
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
        const U = hr(ce);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "appNodeImageUrls", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const W = Array.isArray(j == null ? void 0 : j.imgs) ? j.imgs : [];
    if (W.length) {
      const J = [];
      k >= 0 && k < W.length && J.push(W[k]), J.push(...W);
      for (const ce of J) {
        const U = hr(ce);
        if (U)
          return String((S == null ? void 0 : S.name) || ""), { src: U, sourceType: "nodeImgs", inputName: String((S == null ? void 0 : S.name) || "") };
      }
    }
    const F = (y = j == null ? void 0 : j.widgets) == null ? void 0 : y.find((J) => String((J == null ? void 0 : J.name) || "").toLowerCase() === "image");
    if (F) {
      let J = hr(F.value);
      if (J && !J.includes("/") && !J.includes(":") && (j.comfyClass === "LoadImage" || j.type === "LoadImage") && (J = on.apiURL(`/view?filename=${encodeURIComponent(J)}&type=input&subfolder=`)), J)
        return String((S == null ? void 0 : S.name) || ""), { src: J, sourceType: "widget", inputName: String((S == null ? void 0 : S.name) || "") };
    }
  }
  const d = gd(e == null ? void 0 : e.id), p = [];
  if (Array.isArray(d == null ? void 0 : d.pano_input_images) && p.push(...d.pano_input_images), Array.isArray((_ = d == null ? void 0 : d.ui) == null ? void 0 : _.pano_input_images) && p.push(...d.ui.pano_input_images), p.length > 0)
    for (const w of p) {
      const S = hr(w);
      if (S)
        return { src: S, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Zv(e, t = [], n = {}) {
  const i = Jv(e, t), a = String((i == null ? void 0 : i.src) || "").trim();
  if (!a) return null;
  const c = Gv(a);
  if (!c.length) return null;
  const u = (n == null ? void 0 : n.preserveReadyWhilePending) !== !1;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const d = t.join("|") || "image", p = e.__panoLinkedInputImageCache.get(d);
  if (p && p.srcRaw === a && p.img) return p.img;
  if (p && p.pendingSrcRaw === a && p.pendingImg)
    return u && p.img && (p.img.complete || p.img.naturalWidth || p.img.width) ? p.img : p.pendingImg;
  const y = new Image(), _ = p || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  _.pendingSrcRaw = a, _.pendingResolvedSrc = "", _.pendingImg = y, e.__panoLinkedInputImageCache.set(d, _);
  let w = -1;
  const S = () => {
    var v, R, V, j;
    if (w += 1, w >= c.length) {
      if (((R = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : R.call(v, d)) === _ && _.pendingImg === y && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
        try {
          (j = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || j.call(V, d);
        } catch {
        }
      String((i == null ? void 0 : i.sourceType) || ""), c.length;
      return;
    }
    const A = c[w];
    _.pendingResolvedSrc = A, y.src = A;
  };
  return y.onload = () => {
    var A, v, R;
    ((v = (A = e.__panoLinkedInputImageCache) == null ? void 0 : A.get) == null ? void 0 : v.call(A, d)) === _ && _.pendingImg === y && (_.srcRaw = a, _.resolvedSrc = String(_.pendingResolvedSrc || y.src || ""), _.img = y, _.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null), String(_.pendingResolvedSrc || _.resolvedSrc || y.src || ""), String((i == null ? void 0 : i.sourceType) || ""), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0);
  }, y.onerror = (A) => {
    var v, R, V, j;
    if (w + 1 < c.length) {
      S();
      return;
    }
    if (((R = (v = e.__panoLinkedInputImageCache) == null ? void 0 : v.get) == null ? void 0 : R.call(v, d)) === _ && _.pendingImg === y && (_.pendingSrcRaw = "", _.pendingResolvedSrc = "", _.pendingImg = null, !_.img))
      try {
        (j = (V = e.__panoLinkedInputImageCache) == null ? void 0 : V.delete) == null || j.call(V, d);
      } catch {
      }
    String(_.pendingResolvedSrc || _.resolvedSrc || ""), String((i == null ? void 0 : i.sourceType) || ""), String((A == null ? void 0 : A.type) || "error");
  }, S(), u && _.img && (_.img.complete || _.img.naturalWidth || _.img.width) ? _.img : y;
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
function vm(e, t) {
  e.__panoRenderCache || (e.__panoRenderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = e.__panoRenderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Kr(e, t, n = "") {
  const i = vm(e, (e == null ? void 0 : e.__panoPreviewMode) || "unknown"), a = performance.now();
  return t ? (i.isLoading || (i.isLoading = !0, i.loadingSinceTs = a), !0) : i.isLoading ? a - Number(i.loadingSinceTs || 0) < Dv ? !0 : (i.isLoading = !1, i.loadingSinceTs = 0, !1) : !1;
}
function bc(e, t) {
  const n = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), i = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), a = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || n)), c = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || i)), u = n / a, d = i / c, p = Math.min(u, d);
  return Number.isFinite(p) && p > 0 ? p : 1;
}
function Qv(e, t, n = 1) {
  const i = Number((t == null ? void 0 : t.x) || 0), a = Number((t == null ? void 0 : t.y) || 0), c = Number((t == null ? void 0 : t.w) || 0), u = Number((t == null ? void 0 : t.h) || 0);
  if (c <= 0 || u <= 0) return;
  const d = Math.max(14, Math.round(14 * n)), p = Math.min(Math.round(220 * n), Math.max(Math.round(120 * n), c * 0.44)), y = Math.max(Math.round(34 * n), d + Math.round(14 * n)), _ = i + (c - p) * 0.5, w = a + (u - y) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(_, w, p, y, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${d}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", _ + p * 0.5, w + y * 0.5 + 0.5), e.restore();
}
function Po(e, t, n = "Open editor and add frame") {
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
    const a = t.find((c) => String((c == null ? void 0 : c.id) || "") === n);
    if (a) return a;
  }
  return t[0] || null;
}
function _m(e, t) {
  const n = Number((e == null ? void 0 : e.x) || 0), i = Number((e == null ? void 0 : e.y) || 0), a = Math.max(1, Number((e == null ? void 0 : e.w) || 0)), c = Math.max(1, Number((e == null ? void 0 : e.h) || 0)), u = Number(t) > 0 ? Number(t) : 1;
  let d = a, p = a / u;
  return p > c && (p = c, d = c * u), {
    x: n + (a - d) * 0.5,
    y: i + (c - p) * 0.5,
    w: d,
    h: p
  };
}
function t1(e, t, n, i = 0) {
  if (!e || !t || !n) return !1;
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0));
  if (a <= 1 || c <= 1) return !1;
  const u = _m(n, a / c);
  e.save(), e.imageSmoothingEnabled = !0, e.imageSmoothingQuality = "low", e.drawImage(t, u.x, u.y, u.w, u.h);
  const d = Math.max(0, Math.min(1, Number(i) || 0));
  return d > 0 && (e.fillStyle = `rgba(0,0,0,${d})`, e.fillRect(u.x, u.y, u.w, u.h)), e.restore(), !0;
}
function n1(e, t = null) {
  const i = Array.isArray(e.widgets) ? e.widgets : [];
  let a = 32;
  return i.forEach((c) => {
    var d;
    if (c === t || !c || c.hidden || c.type === "hidden") return;
    let u = 22;
    try {
      const p = typeof c.computeSize == "function" ? c.computeSize(((d = ri(e)) == null ? void 0 : d[0]) || 0) : null;
      Array.isArray(p) && Number.isFinite(Number(p[1])) && (u = Number(p[1]));
    } catch {
      u = 22;
    }
    a += u;
  }), a;
}
function Zo(e) {
  const n = n1(e) + 2, i = 8, a = ri(e), c = Math.max(120, Number((a == null ? void 0 : a[0]) || 0) - 16), u = Math.max(84, Number((a == null ? void 0 : a[1]) || 0) - n - 8);
  return u < 40 || c < 80 ? null : { x: i, y: n, w: c, h: u };
}
function xm(e, t, n) {
  e.__panoPreviewImageCache || (e.__panoPreviewImageCache = /* @__PURE__ */ new Map());
  const i = String(t || "");
  if (!i) return null;
  const a = Kv(n);
  if (!a) return null;
  window.__panoSharedImageCache || (window.__panoSharedImageCache = /* @__PURE__ */ new Map());
  const c = window.__panoSharedImageCache.get(a);
  if (c != null && c.img)
    return e.__panoPreviewImageCache.set(i, { src: a, img: c.img }), c.img;
  const u = e.__panoPreviewImageCache.get(i);
  if (u && u.src === a) return u.img;
  const d = new Image();
  return d.src = a, d.onload = () => {
    var p, y, _;
    (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null || y.call(p), (_ = e.setDirtyCanvas) == null || _.call(e, !0, !0);
  }, window.__panoSharedImageCache.set(a, { img: d }), e.__panoPreviewImageCache.set(i, { src: a, img: d }), d;
}
function r1(e, t) {
  const n = Array.isArray(t == null ? void 0 : t.stickers) ? t.stickers : [], i = e.__panoStickerSortCache;
  if ((i == null ? void 0 : i.source) === n && Array.isArray(i.sorted)) return i.sorted;
  const a = [...n].sort((c, u) => Number((c == null ? void 0 : c.z_index) || 0) - Number((u == null ? void 0 : u.z_index) || 0));
  return e.__panoStickerSortCache = { source: n, sorted: a }, a;
}
function yc(e, t) {
  return Ls(t, {
    selectedId: null,
    hoveredId: null
  });
}
function vc(e, t, n) {
  return um(t, (i, a) => xm(e, i, a), { scene: n });
}
function i1(e, t) {
  var u;
  const n = Mm(e, t);
  if (!n) return [];
  const i = Nm(t), a = Array.isArray((u = t == null ? void 0 : t.painting) == null ? void 0 : u.groups) ? t.painting.groups : [], c = new Map(
    a.filter((d) => d && typeof d == "object").map((d) => [String((d == null ? void 0 : d.actionGroupId) || (d == null ? void 0 : d.id) || "").trim(), Number((d == null ? void 0 : d.z_index) || 0)])
  );
  return i.map((d) => {
    const p = n.getGroupDisplayCanvas(d);
    return p ? {
      id: `paint_group:${d}`,
      source: p,
      revision: `${String(e.__panoPreviewPaintRevisionKey || "")}:${d}`,
      zIndex: Number(c.get(d) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean);
}
function a1(e, t, n, i = 0.45) {
  const a = (e.x + t.x + n.x) / 3, c = (e.y + t.y + n.y) / 3, u = (d) => {
    const p = d.x - a, y = d.y - c, _ = Math.hypot(p, y) || 1;
    return { x: d.x + p / _ * i, y: d.y + y / _ * i };
  };
  return [u(e), u(t), u(n)];
}
function bd(e, t, n, i, a, c, u, d) {
  const p = n.x * (i.y - a.y) + i.x * (a.y - n.y) + a.x * (n.y - i.y);
  if (Math.abs(p) < 1e-6) return;
  const [y, _, w] = a1(c, u, d, Number(e.__panoTriExpandPx || 0.45));
  e.save(), e.beginPath(), e.moveTo(y.x, y.y), e.lineTo(_.x, _.y), e.lineTo(w.x, w.y), e.closePath(), e.clip();
  const S = (c.x * (i.y - a.y) + u.x * (a.y - n.y) + d.x * (n.y - i.y)) / p, A = (c.x * (a.x - i.x) + u.x * (n.x - a.x) + d.x * (i.x - n.x)) / p, v = (c.x * (i.x * a.y - a.x * i.y) + u.x * (a.x * n.y - n.x * a.y) + d.x * (n.x * i.y - i.x * n.y)) / p, R = (c.y * (i.y - a.y) + u.y * (a.y - n.y) + d.y * (n.y - i.y)) / p, V = (c.y * (a.x - i.x) + u.y * (n.x - a.x) + d.y * (i.x - n.x)) / p, j = (c.y * (i.x * a.y - a.x * i.y) + u.y * (a.x * n.y - n.x * a.y) + d.y * (n.x * i.y - i.x * n.y)) / p;
  e.transform(S, R, A, V, v, j), e.drawImage(t, 0, 0), e.restore();
}
function wm(e, t, n, i) {
  const a = Ul(e, t.right), c = Ul(e, t.up), u = Ul(e, t.fwd);
  if (u <= 1e-4) return null;
  const d = c / u / i, p = a / u / i;
  return { x: n.x + n.w * 0.5 + p * n.h * 0.5, y: n.y + n.h * 0.5 - d * n.h * 0.5 };
}
function Sm(e, t, n, i, a, c, u, d = 12, p = 9) {
  var we;
  const y = G(Number(u.hFOV_deg || 30), 1, 179) * ni, _ = G(Number(u.vFOV_deg || 30), 1, 179) * ni, w = Math.tan(y * 0.5), S = Math.tan(_ * 0.5), A = u.crop || {}, v = G(Number(A.x0 ?? 0), 0, 1), R = G(Number(A.y0 ?? 0), 0, 1), V = G(Number(A.x1 ?? 1), 0, 1), j = G(Number(A.y1 ?? 1), 0, 1), k = Math.max(1e-4, V - v), E = Math.max(1e-4, j - R), D = Yc(Number(u.yaw_deg || 0), Number(u.pitch_deg || 0), Number(u.rot_deg || u.roll_deg || 0)), L = [], W = [], F = [], J = [];
  for (let te = 0; te <= p; te++) {
    const ye = te / p, X = (1 - (R + ye * E) * 2) * S;
    for (let _e = 0; _e <= d; _e++) {
      const $e = _e / d, De = ((v + $e * k) * 2 - 1) * w, wt = D.fwd.x + D.right.x * De + D.up.x * X, Ot = D.fwd.y + D.right.y * De + D.up.y * X, Ht = D.fwd.z + D.right.z * De + D.up.z * X, St = Math.hypot(wt, Ot, Ht) || 1e-8, It = wt / St, hn = Ot / St, Xe = Ht / St, Wt = It * i.right.x + hn * i.right.y + Xe * i.right.z, Pn = It * i.up.x + hn * i.up.y + Xe * i.up.z, O = It * i.fwd.x + hn * i.fwd.y + Xe * i.fwd.z;
      if (O <= 1e-4)
        L[te] || (L[te] = []), W[te] || (W[te] = []), L[te][_e] = null, W[te][_e] = null;
      else {
        const H = Pn / O / a, Q = Wt / O / a;
        L[te] || (L[te] = []), W[te] || (W[te] = []), L[te][_e] = n.x + n.w * 0.5 + Q * n.h * 0.5, W[te][_e] = n.y + n.h * 0.5 - H * n.h * 0.5;
      }
      F[te] || (F[te] = []), J[te] || (J[te] = []), F[te][_e] = $e, J[te][_e] = ye;
    }
  }
  const ce = (we = c.assets) == null ? void 0 : we[u.asset_id], U = xm(t, u.asset_id, ce);
  if (!U || !U.complete || !U.naturalWidth) return;
  const ve = Number(U.naturalWidth || U.width || 1), xe = Number(U.naturalHeight || U.height || 1), C = d < 10 ? 0.35 : 0.45;
  e.__panoTriExpandPx = C;
  for (let te = 0; te < p; te++)
    for (let ye = 0; ye < d; ye++) {
      const $ = L[te][ye], X = W[te][ye], _e = L[te][ye + 1], $e = W[te][ye + 1], ze = L[te + 1][ye], De = W[te + 1][ye], wt = L[te + 1][ye + 1], Ot = W[te + 1][ye + 1];
      if ($ === null || _e === null || ze === null || wt === null) continue;
      const Ht = F[te][ye] * ve, St = J[te][ye] * xe, It = F[te][ye + 1] * ve, hn = J[te][ye + 1] * xe, Xe = F[te + 1][ye] * ve, Wt = J[te + 1][ye] * xe, Pn = F[te + 1][ye + 1] * ve, O = J[te + 1][ye + 1] * xe;
      bd(e, U, { x: Ht, y: St }, { x: It, y: hn }, { x: Pn, y: O }, { x: $, y: X }, { x: _e, y: $e }, { x: wt, y: Ot }), bd(e, U, { x: Ht, y: St }, { x: Pn, y: O }, { x: Xe, y: Wt }, { x: $, y: X }, { x: wt, y: Ot }, { x: ze, y: De });
    }
}
function o1(e, t, n = null) {
  String(e.__panoPreviewMode || "stickers");
  const i = qc(e), a = Zo(e);
  if (!a) return;
  e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
  const c = Yc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), u = Math.tan(Number(e.__panoPreviewView.fov || 100) * ni * 0.5);
  t.save(), t.fillStyle = "#1a1a1e", t.strokeStyle = "#3f3f46", t.lineWidth = 1, t.beginPath(), t.roundRect(a.x, a.y, a.w, a.h, 8), t.fill(), t.stroke(), t.clip();
  const d = pc(
    e,
    Xc(e, ["erp_image", "bg_erp"]),
    () => {
      var D, L, W;
      (L = (D = e.__panoDomPreview) == null ? void 0 : D.requestDraw) == null || L.call(D), (W = e.setDirtyCanvas) == null || W.call(e, !0, !1);
    }
  ), p = !!(d && d.complete && (d.naturalWidth || d.width)), y = Am(e), _ = n != null && n.state ? n.state.inertia.active || n.state.drag.active : !1, w = y || _, S = ms, A = yc(e, i), v = vc(e, i, A), R = Wc(e.__panoPreviewView, i == null ? void 0 : i.coverage);
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
    km(t, a, c, u, D);
  }
  !V && p && ys(e, t, a, c, u, d, S), !V && E.length > 0 && E.forEach((D) => Sm(t, e, a, c, u, i, D, j, k)), t.restore();
}
function s1(e, t, n, i, a = "preview_scene", c = "") {
  const u = String(
    c || [
      String((e == null ? void 0 : e.currentSrc) || (e == null ? void 0 : e.src) || ""),
      Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.width) || 0),
      Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.height) || 0)
    ].join("|")
  );
  return Rs({
    stateRevision: [
      a,
      u,
      Number((t == null ? void 0 : t.coverage) || 360) === 180 ? 180 : 360,
      Array.isArray(i) ? i.map((d) => `${String((d == null ? void 0 : d.assetId) || "")}:${String((d == null ? void 0 : d.revision) || "")}`).join(",") : ""
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
function Qo(e, t, n, i) {
  var c, u, d, p, y, _;
  if (Array.isArray(n) && n.length >= 2) return { x: n[0], y: n[1] };
  if (n && typeof n == "object" && Number.isFinite(Number(n.x)) && Number.isFinite(Number(n.y)))
    return { x: Number(n.x), y: Number(n.y) };
  if (i && Array.isArray(i.graph_mouse) && i.graph_mouse.length >= 2)
    return {
      x: Number(i.graph_mouse[0]) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(i.graph_mouse[1]) - Number(((u = e == null ? void 0 : e.pos) == null ? void 0 : u[1]) || 0)
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
  const a = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, c = (w = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : w.call(a), u = (t == null ? void 0 : t.ds) || ((S = pt == null ? void 0 : pt.canvas) == null ? void 0 : S.ds);
  if (!c || !u) return null;
  const d = Number(u.scale || 1);
  if (!Number.isFinite(d) || Math.abs(d) < 1e-6) return null;
  const p = Array.isArray(u.offset) ? u.offset : [0, 0], y = (n - Number(c.left || 0)) / d - Number(p[0] || 0), _ = (i - Number(c.top || 0)) / d - Number(p[1] || 0);
  return !Number.isFinite(y) || !Number.isFinite(_) ? null : { x: y, y: _ };
}
function c1(e, t, n) {
  var a, c;
  const i = l1(t, n || (pt == null ? void 0 : pt.canvas));
  return i ? {
    x: i.x - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
    y: i.y - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[1]) || 0)
  } : null;
}
function Ao(e) {
  if (e.__panoLegacyPreviewHooked) return;
  e.__panoPreviewMode, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), ri(e), e.__panoLegacyPreviewHooked = !0, e.__panoPreviewHooked = !0, e.__panoActiveBackend = "legacy_draw", dm(e, 320, 180), Ei(e);
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
    return this.__panoUserResized = !0, vs(this, 150), (S = this.setDirtyCanvas) == null || S.call(this, !0, !0), Cm(this, 220, null), w;
  };
  const i = Fs({
    getView: () => (e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 }), e.__panoPreviewView),
    setView: (w) => {
      e.__panoPreviewView = w;
    },
    getViewportSize: () => {
      const w = Zo(e);
      return {
        w: Math.max(1, Number((w == null ? void 0 : w.w) || 0)),
        h: Math.max(1, Number((w == null ? void 0 : w.h) || 0))
      };
    },
    onInteraction: () => {
      var w;
      Pm(e), (w = e.setDirtyCanvas) == null || w.call(e, !0, !1);
    }
  }), a = e.onMouseDown;
  e.onMouseDown = function(w, S, A) {
    var v;
    try {
      if (!((v = this.flags) != null && v.collapsed)) {
        const R = Qo(this, w, S, A) || { x: 0, y: 0 }, V = ri(this), j = Number((V == null ? void 0 : V[0]) || 0), k = Number((V == null ? void 0 : V[1]) || 0);
        if (R.x >= j - 20 && R.y >= k - 20)
          return a ? a.apply(this, arguments) : void 0;
        const D = Zo(this);
        if (md(R.x, R.y, D))
          return (w == null ? void 0 : w.button) === 0 && i.startDrag(R.x, R.y), !0;
      }
    } catch {
    }
    return a ? a.apply(this, arguments) : void 0;
  };
  const c = e.onMouseMove;
  e.onMouseMove = function(w, S, A) {
    try {
      const v = Qo(this, w, S, A);
      if (i.state.drag.active) {
        if (typeof (w == null ? void 0 : w.buttons) == "number" && (w.buttons & 1) === 0)
          return i.endDrag(), !0;
        const R = v || i.state.drag;
        return i.moveDrag(R.x, R.y, "pano"), !0;
      }
    } catch {
    }
    return c ? c.apply(this, arguments) : void 0;
  };
  const u = e.onMouseUp;
  e.onMouseUp = function() {
    return i.state.drag.active ? (i.endDrag(), !0) : u ? u.apply(this, arguments) : void 0;
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
      const V = Qo(this, w, S, A), j = Zo(this);
      if (!V || !md(V.x, V.y, j)) return p ? p.apply(this, arguments) : void 0;
      const k = Number((w == null ? void 0 : w.deltaY) ?? (w == null ? void 0 : w.wheelDeltaY) ?? (typeof S == "number" ? S : 0));
      return i.applyWheel(Math.sign(k)) && ((R = this.setDirtyCanvas) == null || R.call(this, !0, !1)), typeof (w == null ? void 0 : w.preventDefault) == "function" && w.preventDefault(), typeof (w == null ? void 0 : w.stopPropagation) == "function" && w.stopPropagation(), !0;
    } catch {
      return p ? p.apply(this, arguments) : void 0;
    }
  };
  const y = e.onRemoved, _ = () => {
    e.__panoLegacyPreviewHooked && (e.__panoResizeSettleTimer && (clearTimeout(e.__panoResizeSettleTimer), e.__panoResizeSettleTimer = null), e.onResize = n, e.onDrawForeground = t, e.onMouseDown = a, e.onMouseMove = c, e.onMouseUp = u, e.onMouseLeave = d, e.onMouseWheel = p, e.onRemoved = y, e.__panoLegacyPreviewHooked = !1, e.__panoPreviewHooked = !1, e.__panoPreviewDrag = null, e.__panoLegacyRestore = null);
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
function Mm(e, t) {
  var y, _, w, S, A, v, R, V, j, k, E, D;
  const n = (_ = (y = t == null ? void 0 : t.painting) == null ? void 0 : y.paint) == null ? void 0 : _.strokes, i = (S = (w = t == null ? void 0 : t.painting) == null ? void 0 : w.mask) == null ? void 0 : S.strokes, a = Array.isArray(n) && n.length > 0, c = Array.isArray(i) && i.length > 0;
  if (!a && !c) return null;
  const u = u1(e, t), d = `${u.width}x${u.height}`;
  (!e.__panoPreviewPaintEngine || e.__panoPreviewPaintDescriptorKey !== d) && (e.__panoPreviewPaintEngine = dc(u), e.__panoPreviewPaintDescriptorKey = d, e.__panoPreviewPaintRevision = null, e.__panoPreviewPaintRevisionKey = "");
  const p = {
    paint: n || null,
    mask: i || null,
    groups: ((A = t == null ? void 0 : t.painting) == null ? void 0 : A.groups) || null,
    rasterObjects: ((v = t == null ? void 0 : t.painting) == null ? void 0 : v.raster_objects) || null
  };
  return (((R = e.__panoPreviewPaintRevision) == null ? void 0 : R.paint) !== p.paint || ((V = e.__panoPreviewPaintRevision) == null ? void 0 : V.mask) !== p.mask || ((j = e.__panoPreviewPaintRevision) == null ? void 0 : j.groups) !== p.groups || ((k = e.__panoPreviewPaintRevision) == null ? void 0 : k.rasterObjects) !== p.rasterObjects) && (e.__panoPreviewPaintRevision = p, e.__panoPreviewPaintRevisionKey = [
    a ? "p1" : "p0",
    c ? "m1" : "m0",
    String(Array.isArray((E = t == null ? void 0 : t.painting) == null ? void 0 : E.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((D = t == null ? void 0 : t.painting) == null ? void 0 : D.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), e.__panoPreviewPaintEngine.rebuildCommitted(t)), e.__panoPreviewPaintEngine;
}
function Nm(e) {
  var n;
  return (Array.isArray((n = e == null ? void 0 : e.painting) == null ? void 0 : n.groups) ? e.painting.groups : []).filter((i) => i && typeof i == "object").slice().sort((i, a) => Number((i == null ? void 0 : i.z_index) || 0) - Number((a == null ? void 0 : a.z_index) || 0)).map((i) => String((i == null ? void 0 : i.actionGroupId) || (i == null ? void 0 : i.id) || "").trim()).filter(Boolean);
}
function f1(e, t) {
  const n = Mm(e, t);
  if (!n) return null;
  const i = Nm(t);
  return n.getErpTarget(i).displayPaint.canvas;
}
function d1(e, t, n = null) {
  var d;
  const i = (d = t == null ? void 0 : t.painting_layer) == null ? void 0 : d.paint, a = hr(i);
  if (!a) return null;
  e.__panoPaintingLayerImageCache || (e.__panoPaintingLayerImageCache = { src: "", img: null });
  const c = e.__panoPaintingLayerImageCache;
  if (c.img && c.src === a) return c.img;
  const u = new Image();
  return u.onload = () => {
    var p;
    n == null || n(), (p = e.setDirtyCanvas) == null || p.call(e, !0, !0);
  }, u.onerror = () => {
    var p;
    ((p = e.__panoPaintingLayerImageCache) == null ? void 0 : p.img) === u && (e.__panoPaintingLayerImageCache = { src: "", img: null });
  }, u.src = a, e.__panoPaintingLayerImageCache = { src: a, img: u }, u;
}
function yd(e, t) {
  var c, u;
  const n = e == null ? void 0 : e.__panoLivePaintSurface;
  if (n != null && n.source)
    return {
      source: n.source,
      revision: String(n.revision || "")
    };
  if (Array.isArray((c = t == null ? void 0 : t.painting) == null ? void 0 : c.raster_objects) && t.painting.raster_objects.length > 0) {
    const d = d1(e, t, () => {
      var p, y;
      return (y = (p = e.__panoDomPreview) == null ? void 0 : p.requestDraw) == null ? void 0 : y.call(p);
    });
    if (d && (d.complete || d.naturalWidth || d.width))
      return {
        source: d,
        revision: String(((u = t == null ? void 0 : t.painting_layer) == null ? void 0 : u.revision) || d.currentSrc || d.src || "")
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
function p1(e, t, n, i, a, c) {
  if (!t || !n || !(i > 0) || !(a > 0)) return;
  const u = h1(n);
  if (u.width === i && u.height === a) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  const p = m1(e, c, u.width, u.height).getContext("2d", { willReadFrequently: !0 });
  if (!p) {
    t.drawImage(n, 0, 0, i, a);
    return;
  }
  try {
    p.clearRect(0, 0, u.width, u.height), p.drawImage(n, 0, 0, u.width, u.height);
    const y = p.getImageData(0, 0, u.width, u.height).data, _ = t.getImageData(0, 0, i, a), w = _.data, S = Math.max(0, u.width - 1), A = Math.max(0, u.height - 1);
    for (let v = 0; v < a; v += 1) {
      const R = (v + 0.5) * u.height / a - 0.5, V = G(Math.floor(R), 0, A), j = G(V + 1, 0, A), k = G(R - V, 0, 1);
      for (let E = 0; E < i; E += 1) {
        const D = (E + 0.5) * u.width / i - 0.5, L = G(Math.floor(D), 0, S), W = G(L + 1, 0, S), F = G(D - L, 0, 1);
        let J = 0, ce = 0, U = 0, ve = 0;
        const xe = (te, ye, $) => {
          const X = (ye * u.width + te) * 4, _e = (y[X + 3] || 0) / 255;
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
function vd(e, t, n, i) {
  const a = Math.max(1, Number(t.naturalWidth || t.width || 0)), c = Math.max(1, Number(t.naturalHeight || t.height || 0)), d = `${String(t.currentSrc || t.src || "")}|${a}x${c}|${i}`;
  let p = e.__panoPreviewBgPaint;
  if (!p || p.__revKey !== d || p.width !== a || p.height !== c) {
    (!p || p.width !== a || p.height !== c) && (p = document.createElement("canvas"), p.width = a, p.height = c, e.__panoPreviewBgPaint = p);
    const y = p.getContext("2d");
    y.clearRect(0, 0, a, c), y.drawImage(t, 0, 0, a, c), p1(e, y, n, a, c, "__panoPreviewOverlayScratch"), p.__revKey = d;
  }
  return p;
}
function g1(e, t, n, i = null) {
  const a = String(e.__panoPreviewMode || "stickers");
  vm(e, a);
  const c = qc(e), u = t.parentElement, d = 1, p = Math.max(1, Number((u == null ? void 0 : u.clientWidth) || t.clientWidth || 0)), y = Math.max(1, Number((u == null ? void 0 : u.clientHeight) || t.clientHeight || 0)), _ = Math.max(64, Math.round(p * d)), w = Math.max(64, Math.round(y * d)), S = t.getContext("2d");
  if (S)
    if (a === "cutout") {
      const A = e1(c), v = pc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var J, ce;
          return (ce = (J = e.__panoDomPreview) == null ? void 0 : J.requestDraw) == null ? void 0 : ce.call(J);
        },
        { preserveReadyWhilePending: !1 }
      ), R = !!(v && v.complete && (v.naturalWidth || v.width));
      (t.width !== _ || t.height !== w) && (t.width = _, t.height = w);
      const V = { x: 0, y: 0, w: _, h: w }, j = R ? G(Number((v.naturalWidth || v.width) / Math.max(1, Number(v.naturalHeight || v.height || 1))), 0.05, 20) : 1, k = A ? Dr(A) : null, E = G(Number((k == null ? void 0 : k.aspect) || j || 1), 0.05, 20), D = _m(V, E);
      bc(t, V), S.setTransform(1, 0, 0, 1, 0, 0), S.fillStyle = "#070707", S.fillRect(0, 0, _, w);
      let L = "none", W = "Open editor and add frame", F = "";
      if (F = String((v == null ? void 0 : v.src) || ""), A)
        if (v && !R)
          L = "loading";
        else if (R) {
          const J = yc(e, c), ce = vc(e, c, J), U = i1(e, c), ve = ba({
            stateRevision: [
              "runtime_cutout_scene",
              String(v.currentSrc || v.src || ""),
              Number(v.naturalWidth || v.width || 0),
              Number(v.naturalHeight || v.height || 0),
              Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
              String((A == null ? void 0 : A.id) || ""),
              Array.isArray(ce) ? ce.map((C) => `${String((C == null ? void 0 : C.assetId) || "")}:${String((C == null ? void 0 : C.revision) || "")}`).join(",") : "",
              Array.isArray(U) ? U.map((C) => `${String((C == null ? void 0 : C.id) || "")}:${String((C == null ? void 0 : C.revision) || "")}:${Number((C == null ? void 0 : C.zIndex) || 0)}`).join(",") : ""
            ].join("|"),
            backgroundSource: v,
            backgroundRevision: String(v.currentSrc || v.src || ""),
            coverageDeg: Number((c == null ? void 0 : c.coverage) || 360) === 180 ? 180 : 360,
            scene: J,
            textures: ce,
            rasterEntries: U,
            backgroundOpacity: 1,
            showMaskTint: !1
          });
          e.__panoRuntimeCore || (e.__panoRuntimeCore = ti()), e.__panoRuntimeCore.syncState(ve), e.__panoRuntimeCore.renderToContext(
            S,
            D,
            Dr(A),
            { width: D.w, height: D.h, dpr: 1 }
          ) || (L = "empty", W = "Open editor or run node");
        } else
          L = "empty", W = "Connect ERP image";
      else {
        if (R) {
          const J = yd(e, c), ce = J != null && J.source ? vd(e, v, J.source, J.revision || "") : v;
          t1(S, ce, V, 0.44);
        }
        L = "empty", W = "Open editor and add frame";
      }
      L === "loading" ? (Po(e, !1), Kr(e, !0, F)) : L === "empty" ? (Po(e, !0, W), Kr(e, !1, "")) : (Po(e, !1), Kr(e, !1, ""));
    } else {
      Po(e, !1), (t.width !== _ || t.height !== w) && (t.width = _, t.height = w);
      const A = { x: 0, y: 0, w: _, h: w }, v = bc(t, A);
      S.setTransform(1, 0, 0, 1, 0, 0), S.clearRect(0, 0, _, w), e.__panoPreviewView || (e.__panoPreviewView = { yaw: 0, pitch: 0, fov: 100 });
      const R = Yc(Number(e.__panoPreviewView.yaw || 0), Number(e.__panoPreviewView.pitch || 0), 0), V = Math.tan(Number(e.__panoPreviewView.fov || 100) * ni * 0.5), j = pc(
        e,
        ["erp_image", "bg_erp"],
        () => {
          var xe, C;
          return (C = (xe = e.__panoDomPreview) == null ? void 0 : xe.requestDraw) == null ? void 0 : C.call(xe);
        }
      ), k = !!(j && j.complete && (j.naturalWidth || j.width));
      S.fillStyle = "#1a1a1e", S.fillRect(0, 0, _, w);
      const E = yc(e, c), D = vc(e, c, E), L = Wc(e.__panoPreviewView, c == null ? void 0 : c.coverage), W = yd(e, c), F = (W == null ? void 0 : W.source) || null, J = k && F ? vd(e, j, F, (W == null ? void 0 : W.revision) || "") : j, ce = J !== j ? String(J.__revKey || "") : j ? [
        String(j.currentSrc || j.src || ""),
        Number(j.naturalWidth || j.width || 0),
        Number(j.naturalHeight || j.height || 0)
      ].join("|") : "";
      e.__panoDomRuntimeCore || (e.__panoDomRuntimeCore = ti());
      let U = !1;
      if (k) {
        const C = e.__panoDomRuntimeCore.syncState(
          s1(J, c, E, D, "runtime_dom_scene", ce)
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
      if ((!k || ve.length === 0) && km(S, A, R, V, v), !U && ve.length > 0) {
        const xe = Am(e), C = i != null && i.state ? i.state.inertia.active || i.state.drag.active : !1, we = xe || C, te = we ? 8 : 12, ye = we ? 6 : 9;
        ve.forEach(($) => Sm(S, e, A, R, V, c, $, te, ye));
      } else if (!j || !k) {
        const xe = Math.max(14, Math.round(16 * v));
        S.fillStyle = "rgba(212,212,216,0.85)", S.font = `600 ${xe}px Plus Jakarta Sans, Geist, sans-serif`, S.textAlign = "center", S.fillText("Open editor to add stickers", _ * 0.5, w * 0.5 + 24 * v);
      }
    }
}
function ys(e, t, n, i, a, c, u = Tv) {
  const d = qc(e), p = (e == null ? void 0 : e.__panoPreviewView) || { yaw: 0, pitch: 0, fov: 100 };
  e.__panoBackgroundCore || (e.__panoBackgroundCore = ti());
  const y = Wv(c), _ = Rs({
    stateRevision: [
      "runtime_bg_only",
      y,
      Number((d == null ? void 0 : d.coverage) || 360) === 180 ? 180 : 360
    ].join("|"),
    backgroundSource: c,
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
function _d(e, t, n, i, a, c, u = 1) {
  let d = !1;
  e.strokeStyle = c, e.lineWidth = u, e.beginPath();
  for (const p of t) {
    const y = wm(p, n, i, a);
    if (!y) {
      d = !1;
      continue;
    }
    d ? e.lineTo(y.x, y.y) : (e.moveTo(y.x, y.y), d = !0);
  }
  e.stroke();
}
function km(e, t, n, i, a = 1) {
  e.save();
  const c = "rgba(63, 63, 70, 0.5)", u = "rgba(250, 250, 250, 0.35)";
  for (let y = -75; y <= 75; y += 15) {
    const _ = [];
    for (let w = -180; w <= 180; w += 15) _.push(qr(w, y));
    _d(e, _, n, t, i, y === 0 ? u : c, y === 0 ? 1.5 : 1);
  }
  for (let y = -180; y <= 180; y += 45) {
    const _ = [];
    for (let w = -89; w <= 89; w += 15) _.push(qr(y, w));
    _d(e, _, n, t, i, y % 90 === 0 ? "rgba(82, 82, 91, 0.4)" : c, y % 90 === 0 ? 1.2 : 1);
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
    const _ = wm(y.dir, n, t, i);
    _ && e.fillText(y.name, _.x, _.y + 20 * a);
  }), e.restore();
}
function b1(e) {
  return e.__panoStandaloneRenderState || (e.__panoStandaloneRenderState = { dragging: !1, hqFrames: 0, frameEmaMs: 0, lastFrameTs: 0, qualityTier: "balanced" }), e.__panoStandaloneRenderState;
}
function Pm(e) {
  const t = b1(e);
  t.dragging = !1, t.hqFrames = Iv;
}
function vs(e, t = 150, n = performance.now()) {
  e && (e.__panoResizeUntil = Number(n || performance.now()) + Math.max(0, Number(t || 0)));
}
function Am(e, t = performance.now()) {
  return Number(t || performance.now()) < Number((e == null ? void 0 : e.__panoResizeUntil) || 0);
}
function y1(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function v1(e, t, n = 20) {
  var u;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const i = (u = t.getBoundingClientRect) == null ? void 0 : u.call(t);
  if (!i) return !1;
  const a = Number(e.clientX) - Number(i.left || 0), c = Number(e.clientY) - Number(i.top || 0);
  return a >= i.width - n && c >= i.height - n;
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
  if (!e || e.__panoUserResized === !0 || e.__panoStandaloneBootSized === !0 || !fm(e)) return;
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
    var c, u;
    e.__panoBootMinHeightTimer = null, (c = e == null ? void 0 : e.__panoDomPreview) != null && c.widget && e.__panoBootMinHeightActive && (e.__panoBootMinHeightActive = !1, n == null || n(), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0));
  }, Math.max(0, Number(i || 0))));
}
function xd(e, t = null, n = 0) {
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
      e.__panoUserResized = !0, vs(e, 150), t == null || t(), Cm(e, 180, t);
    }
  };
}
function Cm(e, t = 180, n = null) {
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
    hm(e);
    return;
  }
  i && w1(e), e.__panoPreviewMode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", gs.register(e);
  const a = e.__panoPreviewMode === "stickers", c = t.__noLegacyFallback === !0, u = e.__panoPreviewMode !== "cutout";
  e.__panoAttachOptions = { ...t, mode: e.__panoPreviewMode }, e.__panoPreviewNoPreview = t.noPreview === !0, e.__panoPreviewButtonText = String(t.buttonText || (e.__panoPreviewMode === "cutout" ? "Open Cutout Editor" : "Open Stickers Editor")), e.__panoOpenEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), a || ka.unregister(e);
  const d = String(t.__panoForcedPath || "").trim(), p = a ? mm(e.__panoPreviewMode, e) : {
    chosenPath: "dom",
    reason: "cutout_dom_only",
    signature: ei(e),
    frontendVersionRaw: String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "")
  };
  a && (d === "dom" || d === "legacy_draw") && (p.chosenPath = d, p.reason = "controller_target_backend");
  const y = a ? p.chosenPath : "dom", _ = p.signature || ei(e);
  if (Number(e.__panoRebindGeneration || 0), mc(e), e == null || e.id, e.__panoPreviewMode, p.reason, p.frontendVersionRaw, e.addDOMWidget, ri(e), e.__panoFrontendSig = _, e.__panoStickersPath = y, a && ka.register(e), a && y === "legacy_draw") {
    if (c) return;
    Hi(e, { keepMonitor: !0 }), Ao(e);
    return;
  }
  if (($ = e.__panoDomPreview) != null && $.widget) return;
  if (e.__panoLegacyPreviewHooked && Hi(e, { keepMonitor: !0 }), typeof e.addDOMWidget != "function") {
    a && !c && Ao(e);
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
    const X = e.addDOMWidget(hc(), "preview", A, xd(e, null));
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
  ].join(";"), V.textContent = "Open editor and add frame", v.appendChild(R), v.appendChild(V), A.appendChild(v), dm(e, 120, 120), Ei(e);
  let j = null;
  try {
    S1(e, S, () => {
      var X, _e;
      return (_e = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : _e.call(X);
    }), j = e.addDOMWidget(
      hc(),
      "preview",
      A,
      xd(e, () => {
        var X, _e;
        return (_e = (X = e.__panoDomPreview) == null ? void 0 : X.requestDraw) == null ? void 0 : _e.call(X);
      }, S)
    );
  } catch {
    a && Ao(e);
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
          if (c) {
            e.__panoPreviewMode, Number((v == null ? void 0 : v.clientHeight) || 0), Number((R == null ? void 0 : R.clientHeight) || 0);
            return;
          }
          Hi(e, { keepMonitor: !0 }), e.__panoStickersPath = "legacy_draw_auto", Ao(e), (De = e.setDirtyCanvas) == null || De.call(e, !0, !0);
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
    ki(X, v) && u && X.button === 0 && ((_e = A.focus) == null || _e.call(A), ($e = R.setPointerCapture) == null || $e.call(R, X.pointerId), R.style.cursor = "grabbing", F.startDrag(X.clientX, X.clientY, X.pointerId));
  }), R.addEventListener("pointermove", (X) => {
    !u || !F.state.drag.active || (ki(X, v), F.moveDrag(X.clientX, X.clientY, "pano"));
  });
  const J = (X) => {
    var _e;
    !u || !F.state.drag.active || (ki(X, v), (_e = R.releasePointerCapture) == null || _e.call(R, X.pointerId), R.style.cursor = "grab", F.endDrag(), Pm(e), E());
  };
  R.addEventListener("pointerup", J), R.addEventListener("pointercancel", J), R.addEventListener("pointerleave", (X) => {
    F.state.drag.active && J(X);
  });
  const ce = (X) => {
    var $e, ze, De;
    if (!ki(X, v) || !u) return;
    const _e = _1();
    F.applyWheelEvent(X) && E(), ($e = X.preventDefault) == null || $e.call(X), (ze = X.stopPropagation) == null || ze.call(X), (De = X.stopImmediatePropagation) == null || De.call(X), requestAnimationFrame(() => {
      var wt, Ot;
      x1(_e), (Ot = (wt = pt == null ? void 0 : pt.canvas) == null ? void 0 : wt.setDirty) == null || Ot.call(wt, !0, !0);
    });
  };
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((X) => {
    v.addEventListener(X, ce, { passive: !1, capture: !0 }), R.addEventListener(X, ce, { passive: !1, capture: !0 });
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((X) => {
    R.addEventListener(X, (_e) => ki(_e, v)), v.addEventListener(X, (_e) => ki(_e, v));
  });
  const U = La(e, "state_json");
  if (U && !U.__panoPreviewPatchedCb) {
    U.__panoPreviewPatchedCb = !0;
    const X = U.callback;
    U.callback = (_e) => {
      const $e = X ? X(_e) : void 0;
      return E(), $e;
    };
  }
  const ve = La(e, "bg_color");
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
function wd(e, t = {}) {
  pm(e).attach({
    ...t,
    mode: "cutout"
  });
}
const Rr = Math.PI / 180, Wi = 180 / Math.PI;
function ai(e, t, n) {
  return { x: e, y: t, z: n };
}
function Sd(e, t) {
  return ai(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Co(e, t) {
  return ai(e.x * t, e.y * t, e.z * t);
}
function Md(e, t) {
  return ai(
    e.y * t.z - e.z * t.y,
    e.z * t.x - e.x * t.z,
    e.x * t.y - e.y * t.x
  );
}
function To(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return ai(e.x / t, e.y / t, e.z / t);
}
function N1(e, t) {
  const n = e * Rr, i = t * Rr, a = Math.cos(i);
  return ai(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function k1(e, t, n = 0) {
  const i = N1(e, t), a = ai(0, 1, 0);
  let c = Md(a, i);
  Math.hypot(c.x, c.y, c.z) < 1e-6 && (c = ai(1, 0, 0)), c = To(c);
  const u = To(Md(i, c)), d = n * Rr, p = Math.cos(d), y = Math.sin(d), _ = Sd(Co(c, p), Co(u, y)), w = Sd(Co(c, -y), Co(u, p));
  return { fwd: i, right: To(_), up: To(w) };
}
const Io = 140, P1 = 180, Nd = 40, Bl = 10;
function kd(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const n = t.split(":");
  return { full: t, tail: String(n[n.length - 1] || "").trim() };
}
function Pd(e, t) {
  const n = kd(e), i = kd(t);
  return !n.full || !i.full ? !1 : n.full === i.full || n.tail === i.full || n.full === i.tail || n.tail === i.tail;
}
function Ad(e) {
  var c;
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
  return typeof ((c = on) == null ? void 0 : c.apiURL) == "function" ? on.apiURL(a) : a;
}
function Ui(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return Ui(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Ad({
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
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Ad(e);
}
function Tm(e) {
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
    for (const c of t.keys())
      if (Pd(c, n)) return t.get(c);
  } else
    for (const c of Object.keys(t))
      if (Pd(c, n)) return t[c];
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
  for (const c of n)
    if (Array.isArray(c))
      for (const u of c) {
        const d = Ui(u);
        if (d && /\.mp4(\?|$)/i.test(d) || d && String((u == null ? void 0 : u.format) || "").toLowerCase() === "video/mp4") return d;
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
  const c = ((R = (v = e == null ? void 0 : e.graph) == null ? void 0 : v.links) == null ? void 0 : R[i]) || ((k = (j = (V = yn) == null ? void 0 : V.graph) == null ? void 0 : j.links) == null ? void 0 : k[i]);
  if (!c) return "";
  const u = Number(c.origin_id);
  if (!Number.isFinite(u)) return "";
  const d = (L = (D = (E = yn) == null ? void 0 : E.graph) == null ? void 0 : D.getNodeById) == null ? void 0 : L.call(D, u), p = _c(u), y = _c(e == null ? void 0 : e.id), _ = [
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
function Cd(e, t, n) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, n), e.moveTo(0, n * 0.5), e.lineTo(t, n * 0.5), e.stroke();
}
function Td(e, t, n, i, a, c) {
  var S, A, v;
  if (t.clearRect(0, 0, n, i), t.fillStyle = "#070707", t.fillRect(0, 0, n, i), !Tm(c) || n <= 1 || i <= 1) {
    Cd(t, n, i);
    return;
  }
  const u = k1(Number(a.yaw || 0), Number(a.pitch || 0), 0), d = Math.tan(Number(a.fov || 100) * Rr * 0.5), p = Number(((v = (A = (S = e == null ? void 0 : e.widgets) == null ? void 0 : S.find) == null ? void 0 : A.call(S, (R) => (R == null ? void 0 : R.name) === "coverage")) == null ? void 0 : v.value) || 360) === 180 ? 180 : 360;
  e.__panoStandaloneCore || (e.__panoStandaloneCore = ti());
  const y = A1(c), _ = Rs({
    stateRevision: [
      "standalone_preview_scene",
      y,
      p
    ].join("|"),
    backgroundSource: c,
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
  })() || (ys(e, t, { x: 0, y: 0, w: n, h: i }, u, d, c, ms), Cd(t, n, i));
}
function Id(e, t, n) {
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
        var a, c, u, d;
        const i = (c = (a = this.canvas) == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : c.call(a);
        return {
          w: Math.max(1, Number((i == null ? void 0 : i.width) || ((u = this.canvas) == null ? void 0 : u.clientWidth) || 0)),
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
    var i, a, c;
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
    const n = ((c = (a = (i = this.node) == null ? void 0 : i.widgets) == null ? void 0 : a.find) == null ? void 0 : c.call(a, (u) => (u == null ? void 0 : u.name) === "coverage")) || null;
    n && (this.orig.coverageWidgetCallback = typeof n.callback == "function" ? n.callback.bind(n) : null, n.callback = (...u) => {
      const d = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...u) : void 0;
      return t.requestDraw(), d;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(n) {
      var c;
      const i = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!n || (c = this.flags) != null && c.collapsed || !t.errorText) return i;
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
        `min-height:${Io}px`,
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
          return Io;
        },
        getHeight() {
          return Io;
        },
        onRemove: () => this.teardown(),
        afterResize: () => this.requestDraw()
      };
      if (this.widget = this.node.addDOMWidget("preview", "preview", this.root, n), this.widget) {
        this.widget.serialize = !1;
        const i = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (a) => {
          const c = i ? i(a) || {} : {};
          return {
            ...c,
            minHeight: Math.max(Io, Number(c.minHeight || 0)),
            minWidth: Math.max(P1, Number(c.minWidth || 0))
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
      var c, u, d;
      a.button === 0 && ((c = n.focus) == null || c.call(n, { preventScroll: !0 }), (u = t.setPointerCapture) == null || u.call(t, a.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(a.clientX, a.clientY, a.pointerId), a.preventDefault(), a.stopPropagation(), (d = a.stopImmediatePropagation) == null || d.call(a));
    }), t.addEventListener("pointermove", (a) => {
      var c;
      this.controller.state.drag.active && (this.controller.moveDrag(a.clientX, a.clientY, "pano"), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
    const i = (a) => {
      var c, u;
      this.controller.state.drag.active && ((c = t.releasePointerCapture) == null || c.call(t, a.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), a.preventDefault(), a.stopPropagation(), (u = a.stopImmediatePropagation) == null || u.call(a));
    };
    t.addEventListener("pointerup", i), t.addEventListener("pointercancel", i), n.addEventListener("wheel", (a) => {
      var c;
      this.controller.applyWheelEvent(a), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (a) => {
      var c;
      this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a);
    }), n.addEventListener("keydown", (a) => {
      var c;
      a.key !== " " && a.key !== "Spacebar" || (this.togglePlayback(), a.preventDefault(), a.stopPropagation(), (c = a.stopImmediatePropagation) == null || c.call(a));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !Tm(this.img) || (this.img.paused ? (this.videoPaused = !1, this.img.play().catch(() => {
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
      const c = t.getLegacyPreviewRect();
      return Id(a.x, a.y, c) ? (t.legacyDragPointer = !0, t.controller.startDrag(a.x - c.x, a.y - c.y), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(n, i) {
      var u;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const a = t.localPoint(i);
      if (!a) return !0;
      const c = t.getLegacyPreviewRect();
      return t.controller.moveDrag(a.x - c.x, a.y - c.y, "pano"), (u = this.setDirtyCanvas) == null || u.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var n;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (n = this.setDirtyCanvas) == null || n.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(n, i, a) {
      var y, _, w, S, A, v;
      const c = Qo(this, n, i, a), u = t.getLegacyPreviewRect();
      if (!c || !Id(c.x, c.y, u))
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
    var i, a, c, u;
    const t = Math.max(80, Number(((a = (i = this.node) == null ? void 0 : i.size) == null ? void 0 : a[0]) || 0) - Bl * 2), n = Math.max(60, Number(((u = (c = this.node) == null ? void 0 : c.size) == null ? void 0 : u[1]) || 0) - Nd - Bl);
    return { x: Bl, y: Nd, w: t, h: n };
  }
  drawLegacy(t) {
    var i, a;
    if (!t || (a = (i = this.node) == null ? void 0 : i.flags) != null && a.collapsed) return;
    const n = this.getLegacyPreviewRect();
    n.w <= 2 || n.h <= 2 || (t.save(), t.translate(n.x, n.y), Td(this.node, t, n.w, n.h, this.view, this.img), this.errorText && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, n.w, n.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(this.errorText, n.w * 0.5, n.h * 0.5)), t.restore());
  }
  onResizeDom() {
    if (!this.root || !this.canvas) return;
    const t = this.root.getBoundingClientRect(), n = window.devicePixelRatio || 1, i = Math.max(1, Math.round(t.width * n)), a = Math.max(1, Math.round(t.height * n));
    (this.canvas.width !== i || this.canvas.height !== a) && (this.canvas.width = i, this.canvas.height = a, this.requestDraw());
  }
  refreshImage() {
    var a, c, u;
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
      (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "", this.requestDraw();
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
    var a, c;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1;
    const n = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (Td(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (c = (a = this.node).setDirtyCanvas) == null || c.call(a, !0, !1), this.inTick = !1, (n || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
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
    var n, i, a, c, u, d, p, y, _, w, S, A;
    if (((n = this.node) == null ? void 0 : n.__panoPreviewNodeRuntime) !== this) return;
    this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (a = (i = this.resizeObserver) == null ? void 0 : i.disconnect) == null || a.call(i), this.resizeObserver = null, (c = this.mediaCleanup) == null || c.call(this), this.mediaCleanup = null;
    try {
      (d = (u = this.root) == null ? void 0 : u.remove) == null || d.call(u);
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
  const c = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const d = c ? c.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
  const u = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const d = u ? u.apply(this, arguments) : void 0;
    try {
      n(this);
    } catch {
    }
    return d;
  };
}
function Im(e) {
  return !!(e != null && e.prototype);
}
function xc(e, t) {
  return typeof t == "function" ? (...n) => t(e, ...n) : t;
}
function O1(e, t = {}) {
  Im(e) || D1(e, {
    ...t,
    onOpen: xc(e, t.onOpen)
  });
}
function R1(e, t = {}) {
  if (!Im(e)) {
    wd(e, {
      ...t,
      onOpen: xc(e, t.onOpen)
    });
    return;
  }
  E1(e, "cutout_preview", (n) => {
    wd(n, {
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
}, or = "pen";
function Dd(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function F1(e = 80, t = null, n = 8) {
  const i = [];
  let a = -1;
  const c = Math.max(1, Number(e || 80)), u = Math.max(1, Number(n || 8));
  function d(y) {
    if (i.splice(0, i.length), a = -1, !y || typeof y != "object" || !Array.isArray(y.entries) || (y.entries.forEach((w) => {
      i.push(String(w || ""));
    }), !i.length)) return;
    const _ = Number(y.index);
    Number.isInteger(_) ? _ === -1 ? a = -1 : a = Math.max(0, Math.min(i.length - 1, _)) : a = i.length - 1;
  }
  function p(y) {
    i[a] !== y && (i.splice(a + 1), i.push(y), i.length > c && i.shift(), a = i.length - 1);
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
      const y = i.length, _ = Math.max(0, y - u), w = a >= 0 ? Math.max(0, Math.min(a, _)) : _, S = i.slice(w, w + u), A = a < 0 ? -1 : Math.max(-1, Math.min(S.length - 1, a - w));
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
    const c = ot(i.z_index ?? i.zIndex, t.length);
    t.push({
      id: String(i.id || a),
      type: "strokeGroup",
      actionGroupId: a,
      z_index: Math.max(0, Math.round(c ?? t.length)),
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
    const c = ot(e.u, null), u = ot(e.v, null);
    if (c == null || u == null) return null;
    const d = {
      targetKind: "ERP_GLOBAL",
      u: (c % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, u)),
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  if (t.kind === "FRAME_LOCAL") {
    const c = ot(e.u, null), u = ot(e.v, null);
    if (c == null || u == null) return null;
    const d = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: c,
      v: u,
      t: n
    };
    return i != null && (d.widthScale = Math.max(0, i)), a != null && (d.pressureLike = Math.max(0, a)), d;
  }
  return null;
}
function Do(e, t, n = 1) {
  if (!Array.isArray(e)) return null;
  const i = [];
  for (const a of e) {
    const c = j1(a, t);
    if (!c) return null;
    i.push(c);
  }
  return i.length >= n ? i : null;
}
function V1(e, t, n, i) {
  if (!e || typeof e != "object") return null;
  const a = String(e.geometryKind || "").trim();
  if (a === "lasso_fill") {
    if (!i || n !== "lasso_fill") return null;
    const p = Do(e.points, t, 3);
    return p ? { geometryKind: a, points: p } : null;
  }
  if (a !== "freehand_open" && a !== "freehand_closed" || n === "lasso_fill") return null;
  const c = Do(e.points, t, 1);
  if (!c) return null;
  const u = Do(e.rawPoints, t, 1), d = Do(e.processedPoints, t, 1);
  return {
    geometryKind: a,
    points: c,
    rawPoints: u || c.map((p) => ({ ...p })),
    processedPoints: d || c.map((p) => ({ ...p }))
  };
}
function H1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const n = z1(e.targetSpace);
  if (!n) return null;
  const i = String(e.toolKind || "").trim(), a = V1(e.geometry, n, i, t === "paint");
  if (!a) return null;
  const c = ot(e.size, null), u = ot(e.opacity, null);
  if (c == null || u == null) return null;
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
    size: Math.max(0, c),
    opacity: Math.max(0, Math.min(1, u)),
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
function Ed(e, t) {
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
  const c = (d) => Math.max(0, Math.min(1, d)), u = { u0: c(t), v0: c(n), u1: c(i), v1: c(a) };
  return u.u1 <= u.u0 || u.v1 <= u.v0 ? null : u;
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
  const c = U1(e.bbox);
  return c ? {
    id: n,
    type: "raster_frozen",
    layerKind: i,
    z_index: Math.max(0, ot(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: c,
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
    paint: Ed(e.paint, "paint"),
    mask: Ed(e.mask, "mask"),
    raster_objects: K1(e.raster_objects)
  };
}
function Od(e = {}) {
  return {
    type: String((e == null ? void 0 : e.type) || "erp_image"),
    source: (e == null ? void 0 : e.source) || null,
    revision: String((e == null ? void 0 : e.revision) || ""),
    coverageDeg: Number((e == null ? void 0 : e.coverageDeg) || 360) === 180 ? 180 : 360,
    opacity: Number((e == null ? void 0 : e.opacity) ?? 1),
    visible: (e == null ? void 0 : e.visible) !== !1
  };
}
function W1(e = {}) {
  return {
    yawDeg: Number((e == null ? void 0 : e.yawDeg) || 0),
    pitchDeg: Number((e == null ? void 0 : e.pitchDeg) || 0),
    rollDeg: Number((e == null ? void 0 : e.rollDeg) || 0),
    hFovDeg: G(Number((e == null ? void 0 : e.hFovDeg) || 30), 1, 179),
    vFovDeg: G(Number((e == null ? void 0 : e.vFovDeg) || 30), 1, 179)
  };
}
function Rd(e = {}, t = 0) {
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
  return n === "sticker" ? (i.transform = W1((e == null ? void 0 : e.transform) || e), i.params = {
    ...e != null && e.params && typeof e.params == "object" ? e.params : {},
    crop: (e == null ? void 0 : e.crop) || ((a = e == null ? void 0 : e.params) == null ? void 0 : a.crop) || { x0: 0, y0: 0, x1: 1, y1: 1 }
  }) : (i.transform = e != null && e.transform && typeof e.transform == "object" ? { ...e.transform } : null, i.params = e != null && e.params && typeof e.params == "object" ? { ...e.params } : {}), i;
}
function Y1(e = {}) {
  var i, a;
  if (e != null && e.objectPass && Array.isArray(e.objectPass.objects))
    return Ki({
      stateRevision: String((e == null ? void 0 : e.stateRevision) || ""),
      background: Od((e == null ? void 0 : e.background) || {}),
      objectPass: {
        selectedId: ((i = e == null ? void 0 : e.objectPass) == null ? void 0 : i.selectedId) ?? null,
        hoveredId: ((a = e == null ? void 0 : e.objectPass) == null ? void 0 : a.hoveredId) ?? null,
        objects: e.objectPass.objects.map((c, u) => Rd(c, u)).filter(Boolean)
      },
      overlay: e != null && e.overlay && typeof e.overlay == "object" ? { ...e.overlay } : {}
    });
  const t = Od((e == null ? void 0 : e.background) || {}), n = (Array.isArray(e == null ? void 0 : e.objects) ? e.objects : []).map((c, u) => Rd(c, u)).filter(Boolean);
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
function $a(e = {}) {
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
function q1(e = {}) {
  const t = String((e == null ? void 0 : e.targetId) || "panorama_scene_camera"), n = (e == null ? void 0 : e.renderCore) || ti((e == null ? void 0 : e.coreOptions) || {});
  let i = null, a = "";
  function c(w) {
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
  function u(w = {}) {
    const S = Y1(w), A = c(S);
    return a === A || !n.syncState(S) ? !1 : (i = S, a = A, !0);
  }
  function d(w = {}, S = {}) {
    if (!i) return null;
    const A = $a(w), v = _s(S);
    return n.renderToTarget(t, A, v);
  }
  function p(w, S, A = {}, v = {}) {
    if (!w || !S || !i) return !1;
    const R = $a(A), V = _s({
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
    syncScene: u,
    renderFrame: d,
    renderToContext: p,
    snapshotScene: () => i,
    clearScene: y,
    dispose: _
  };
}
function X1(e, t, n) {
  return new Promise((i, a) => {
    e.toBlob((c) => {
      c ? i(c) : a(new Error("Failed to export panorama scene camera frame."));
    }, t, n);
  });
}
async function J1(e, t = {}) {
  var p, y;
  if (!e || typeof e.renderFrame != "function")
    throw new Error("exportPanoramaSceneCameraFrame requires a valid camera instance.");
  const n = $a((t == null ? void 0 : t.camera) || (t == null ? void 0 : t.view) || {}), i = (t == null ? void 0 : t.output) || ((p = t == null ? void 0 : t.camera) == null ? void 0 : p.output) || ((y = t == null ? void 0 : t.view) == null ? void 0 : y.output) || null, a = _s(
    i || {
      width: t == null ? void 0 : t.width,
      height: t == null ? void 0 : t.height,
      dpr: t == null ? void 0 : t.dpr
    }
  ), c = e.renderFrame(n, a);
  if (!c) throw new Error("Panorama scene camera render returned null.");
  const u = String((t == null ? void 0 : t.format) || "png").toLowerCase() === "jpeg" ? "image/jpeg" : "image/png", d = (t == null ? void 0 : t.quality) == null ? 0.92 : Number(t.quality);
  return X1(c, u, d);
}
function Z1(e, t, n = {}) {
  if (!e || !t || typeof t.appendChild != "function")
    throw new Error("mountPanoramaSceneCamera requires a camera and container.");
  const i = document.createElement("canvas");
  i.className = String((n == null ? void 0 : n.className) || "pano-scene-camera-canvas"), i.style.width = "100%", i.style.height = "100%", i.style.display = "block", t.appendChild(i);
  const a = i.getContext("2d");
  let c = $a((n == null ? void 0 : n.view) || {}), u = !1, d = 0;
  function p() {
    const S = Number((n == null ? void 0 : n.width) || t.clientWidth || i.clientWidth || 1), A = Number((n == null ? void 0 : n.height) || t.clientHeight || i.clientHeight || 1), v = Number((n == null ? void 0 : n.dpr) || window.devicePixelRatio || 1), R = _s({ width: S, height: A, dpr: v });
    return i.width = Math.max(1, Math.round(R.width * R.dpr)), i.height = Math.max(1, Math.round(R.height * R.dpr)), i.style.width = `${R.width}px`, i.style.height = `${R.height}px`, R;
  }
  function y() {
    if (u || !a) return !1;
    const S = p();
    return a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, i.width, i.height), e.renderToContext(
      a,
      { x: 0, y: 0, w: i.width, h: i.height },
      c,
      { ...S, width: i.width, height: i.height, dpr: 1 }
    );
  }
  function _() {
    u || d || (d = requestAnimationFrame(() => {
      d = 0, y();
    }));
  }
  const w = typeof ResizeObserver == "function" ? new ResizeObserver(() => _()) : null;
  return w == null || w.observe(t), _(), {
    canvas: i,
    setView(S) {
      c = $a(S || {}), _();
    },
    getView() {
      return { ...c };
    },
    present: y,
    requestRender: _,
    unmount() {
      u = !0, d && cancelAnimationFrame(d), w == null || w.disconnect(), i.remove();
    }
  };
}
function Q1(e = {}) {
  const t = q1({
    ...e,
    targetId: String((e == null ? void 0 : e.targetId) || "cutout_camera")
  });
  return {
    ...t,
    renderShot(n, i = {}) {
      return t.renderFrame(Dr(n), i);
    },
    renderShotToContext(n, i, a, c = {}) {
      return t.renderToContext(n, i, Dr(a), c);
    },
    mount(n, i = {}) {
      const a = i != null && i.shot ? Dr(i.shot) : i == null ? void 0 : i.view;
      return Z1(t, n, { ...i, view: a });
    },
    exportFrame(n = {}) {
      const i = n != null && n.shot ? { ...n, camera: Dr(n.shot) } : n;
      return J1(t, i);
    }
  };
}
const Fr = 1, Lr = 179, Fd = 85;
function Ld(e) {
  const t = ((rt(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function e_(e, t) {
  let n = rt(e, 0) - rt(t, 0);
  for (; n <= -Math.PI; ) n += Math.PI * 2;
  for (; n > Math.PI; ) n -= Math.PI * 2;
  return n;
}
function t_(e, t, { shiftKey: n = !1, altKey: i = !1 } = {}) {
  let a = rt(e, 0) + rt(t, 0) * Wi;
  return n ? a = Math.round(a / 15) * 15 : !i && Math.abs(Ld(a)) <= 1 && (a = 0), Ld(a);
}
function rt(e, t) {
  const n = Number(e);
  return Number.isFinite(n) ? n : Number(t);
}
function $s(e = {}) {
  const t = G(rt(e.hFOV_deg, 90), Fr, Lr), n = G(rt(e.vFOV_deg, 60), Fr, Lr), i = Math.tan(t * Rr * 0.5), a = Math.tan(n * Rr * 0.5);
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
function n_(e, t) {
  const n = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), i = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = Math.max(1e-6, rt(t, 1)), c = Math.min(n, i * a);
  return { width: c, height: c / a };
}
function r_(e, t) {
  const n = Math.max(1e-12, rt(t, 1)), i = Math.max(1e-6, rt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1e-6, rt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), c = G(2 * Math.atan(i / (2 * n)) * Wi, Fr, Lr), u = G(2 * Math.atan(a / (2 * n)) * Wi, Fr, Lr);
  return { hFOV_deg: c, vFOV_deg: u };
}
function i_(e, t, n) {
  const i = rt(e == null ? void 0 : e.x, 0), a = rt(e == null ? void 0 : e.y, 0), c = Math.max(1, rt((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), u = Math.max(1, rt((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), d = $s(t), p = Math.max(1e-12, rt(n, 1)), y = 2 * p * d.tanHalfX, _ = 2 * p * d.tanHalfY;
  return {
    x: i + (c - y) * 0.5,
    y: a + (u - _) * 0.5,
    w: y,
    h: _,
    focalPx: p
  };
}
function $d(e, t, n = Fd) {
  const i = Math.max(1e-12, rt(t, 1)), a = G(rt(n, Fd), 1, 89.999), c = i * Math.tan(a * Rr), u = Math.max(1, rt((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), d = Math.max(1, rt((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(u * 0.5, c),
    halfH: Math.min(d * 0.5, c)
  };
}
function zd(e, t) {
  const n = G(rt(e, 60), Fr, Lr), i = Math.max(1e-6, rt(t, 1));
  return G(
    2 * Math.atan(Math.tan(n * Rr * 0.5) * i) * Wi,
    Fr,
    Lr
  );
}
function a_(e, t) {
  const n = $s(e), i = rt(t, 1);
  if (!(i > 0)) return null;
  const a = 2 * Math.atan(n.tanHalfX * i) * Wi, c = 2 * Math.atan(n.tanHalfY * i) * Wi;
  return a < Fr || a > Lr || c < Fr || c > Lr ? null : { hFOV_deg: a, vFOV_deg: c };
}
function Pi(e, t, n, i) {
  const a = Array.isArray(e) ? e.find((c) => String((c == null ? void 0 : c[t]) || "") === String(n || "")) : null;
  a && Object.assign(a, i);
}
function o_(e = {}) {
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
function s_({
  editor: e,
  swatches: t,
  paintColorPopOpen: n,
  colorToCss: i,
  colorsApproximatelyEqual: a,
  rgb01ToHsv: c,
  hsv01ToRgb: u,
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
  const w = ((E = t.find((L) => a(e.paintColor, L.color))) == null ? void 0 : E.id) || "", S = !w, A = c(e.customPaintColor), v = Math.round(Math.max(0, Math.min(1, Number(((D = e.customPaintColor) == null ? void 0 : D.a) ?? 1))) * 100), R = d(e.primaryTool === "paint" ? e.paintTool : e.maskTool), V = e.brushSizes[R] ?? 10, j = p(), k = Array.from({ length: 8 }, (L, W) => e.customPaintHistory[W] || null);
  return {
    ..._,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: w,
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
function l_({ coverage: e, uiSettings: t, normalizeCoverageValue: n }) {
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
function c_({
  coverage: e,
  readOnly: t,
  selectionPicker: n,
  enabled: i,
  selectedKind: a,
  selectedItems: c,
  params: u,
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
      disabled: !i || a === "stroke" || c.length > 1,
      label: "Copy State"
    },
    params: u,
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
function u_({
  type: e,
  selected: t,
  selectedItems: n,
  selectedKind: i,
  geom: a,
  allLocked: c,
  selectedLocked: u,
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
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: c ? "Unlock" : "Lock", tip: c ? "Unlock" : "Lock", icon: c ? S.lock_open : S.lock_closed },
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
    A.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed }), y(t) || A.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: S.delete });
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
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: u ? "Unlock" : "Lock", tip: u ? "Unlock" : "Lock", icon: u ? S.lock_open : S.lock_closed },
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
}), f_ = (e) => {
  const t = {};
  for (const n of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[n[1]] = n[3];
  return t;
}, d_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: f_(t[2])
})), h_ = {
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
}, jd = Object.fromEntries(
  Object.entries(h_).map(([e, t]) => [e, {
    name: t.name,
    elements: d_(t.body)
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
      return Object.prototype.hasOwnProperty.call(jd, i) ? jd[i] : null;
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
      (Me(!0), Pe(Je, null, $t(n.value.elements, (c, u) => (Me(), Pe(Je, {
        key: `${n.value.name || e.icon || "icon"}-${c.tag}-${u}`
      }, [
        c.tag === "path" ? (Me(), Pe("path", Cr({
          key: 0,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "circle" ? (Me(), Pe("circle", Cr({
          key: 1,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "rect" ? (Me(), Pe("rect", Cr({
          key: 2,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "line" ? (Me(), Pe("line", Cr({
          key: 3,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "polyline" ? (Me(), Pe("polyline", Cr({
          key: 4,
          ref_for: !0
        }, c.attrs), null, 16)) : c.tag === "polygon" ? (Me(), Pe("polygon", Cr({
          key: 5,
          ref_for: !0
        }, c.attrs), null, 16)) : Lt("", !0)
      ], 64))), 128))
    ], 2)) : Lt("", !0);
  }
}, mr = {
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
    return (i, a) => (Me(), qi(wb(e.tag), Cr({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, n.value), {
      default: Nh(() => [
        Ye(Mn, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, m_ = { class: "pano-floating-right" }, p_ = ["data-settled"], g_ = ["data-ready", "data-settled"], b_ = ["aria-label", "data-tip"], y_ = {
  key: 1,
  class: "pano-camera-preview-label"
}, v_ = {
  __name: "PanoFloatingRight",
  props: {
    buttons: { type: Array, default: () => [] },
    preview: { type: Object, default: () => ({}) },
    previewToggle: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe(Je, null, [
      ie("div", m_, [
        (Me(!0), Pe(Je, null, $t(e.buttons, (i) => (Me(), qi(mr, {
          key: i.action,
          icon: i.icon,
          label: i.label,
          tip: i.tip,
          pressed: i.pressed,
          attrs: { "data-action": i.action, disabled: i.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Ba(ie("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ie("div", {
          class: st(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: Et({
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
          ], 8, b_)) : Lt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Me(), Pe("div", y_, mt(e.preview.label || "Preview unavailable"), 1)) : Lt("", !0)
        ], 14, g_)
      ], 8, p_), [
        [Ka, e.preview.visible]
      ])
    ], 64));
  }
}, __ = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, x_ = ["y2", "transform"], w_ = ["transform"], S_ = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, n = Array.from({ length: 24 }, (a, c) => c * 15), i = vt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (a, c) => Ba((Me(), Pe("div", {
      class: st(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Me(), Pe("svg", __, [
        c[1] || (c[1] = ie("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Me(!0), Pe(Je, null, $t(Tr(n), (u) => (Me(), Pe("line", {
          key: u,
          class: st(["pano-frame-roll-knob-tick", { zero: u === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: u % 45 === 0 ? 7 : 6,
          transform: `rotate(${u} 20 20)`
        }, null, 10, x_))), 128)),
        ie("g", { transform: i.value }, [...c[0] || (c[0] = [
          ie("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, w_),
        c[2] || (c[2] = ie("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ka, e.model.visible === !0]
    ]);
  }
}, M_ = { class: "pano-frame-aspect-control" }, N_ = { class: "pano-frame-aspect-popover" }, k_ = ["data-aspect", "disabled"], P_ = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: st(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      ie("div", M_, [
        Ye(mr, {
          icon: e.model.aspectIcon,
          label: "Aspect Ratio",
          tip: "Aspect ratio",
          pressed: e.model.aspectOpen ? "true" : "false",
          attrs: { "data-action": "frame-aspect", disabled: e.model.disabled === !0 }
        }, null, 8, ["icon", "pressed", "attrs"]),
        Ba(ie("div", N_, [
          (Me(!0), Pe(Je, null, $t(e.model.aspectChoices || [], (i) => (Me(), Pe("button", {
            key: i.value,
            class: st(["pano-btn pano-frame-aspect-choice", { active: i.active === !0 }]),
            type: "button",
            "data-action": "frame-aspect-set",
            "data-aspect": i.value,
            disabled: e.model.disabled === !0
          }, mt(i.label), 11, k_))), 128))
        ], 512), [
          [Ka, e.model.aspectOpen === !0]
        ])
      ]),
      Ye(mr, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Ye(S_, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, A_ = ["aria-label"], C_ = { class: "pano-canvas-confirm-title" }, T_ = { class: "pano-canvas-confirm-text" }, I_ = { class: "pano-canvas-confirm-actions" }, D_ = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, E_ = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ rs(null), i = /* @__PURE__ */ rs(null);
    let a = null;
    function c() {
      const w = i.value;
      return w ? Array.from(w.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((S) => S instanceof HTMLElement ? !S.hidden && S.tabIndex >= 0 && S.offsetParent !== null : !1) : [];
    }
    function u(w) {
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
      const v = c()[0] || w;
      (R = v == null ? void 0 : v.focus) == null || R.call(v);
    }
    function p() {
      a instanceof HTMLElement && a.isConnected && a.focus(), a = null;
    }
    function y(w) {
      var j;
      if (w.defaultPrevented) return;
      if (w.key === "Escape") {
        w.preventDefault(), w.stopPropagation(), u("confirm-cancel");
        return;
      }
      if (w.key !== "Tab") return;
      const S = c(), A = i.value;
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
      w.target === n.value && u("confirm-cancel");
    }
    return zi(() => t.model.visible, (w, S) => {
      if (w) {
        a = document.activeElement, Rc(() => {
          d();
        });
        return;
      }
      S && p();
    }, { immediate: !0 }), $c(() => {
      p();
    }), (w, S) => e.model.visible === !0 ? (Me(), Pe("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: n,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: im(_, ["self"])
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
        ie("div", C_, mt(e.model.title), 1),
        ie("div", T_, mt(e.model.text), 1),
        ie("div", I_, [
          S[0] || (S[0] = ie("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ie("button", D_, mt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, A_)
    ], 512)) : Lt("", !0);
  }
}, O_ = ["data-paint-pane"], R_ = ["hidden"], F_ = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], L_ = ["aria-pressed", "disabled"], $_ = ["hidden"], z_ = { class: "pano-paint-color-pop-head" }, j_ = { class: "pano-paint-color-field" }, V_ = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, H_ = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, U_ = { class: "pano-paint-color-field" }, B_ = { class: "pano-paint-alpha-wrap" }, G_ = ["value"], K_ = { "data-paint-alpha-value": "" }, W_ = ["hidden"], Y_ = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, q_ = ["data-paint-history-index", "aria-label", "disabled"], X_ = ["data-paint-footer"], J_ = ["data-paint-group"], Z_ = ["hidden"], Q_ = ["value", "disabled"], ex = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, tx = ["hidden"], nx = {
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
      (Me(!0), Pe(Je, null, $t(e.panes, (c) => {
        var u;
        return Me(), Pe("div", {
          key: c.key,
          class: st(["pano-paint-pane", { "is-active": e.state.activePane === c.key }]),
          "data-paint-pane": c.key
        }, [
          c.showColorFloat ? (Me(), Pe("div", {
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
              style: Et(t(d)),
              "aria-pressed": e.state.activeSwatchId === d.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, F_))), 128)),
            ie("button", {
              class: st(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: Et({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, L_),
            ie("div", {
              class: "pano-paint-color-pop",
              "data-paint-color-pop": "",
              hidden: e.state.colorPopOpen !== !0,
              style: Et({
                "--picker-hue-color": String(e.state.pickerHueColor || ""),
                "--picker-sat": String(e.state.pickerSat || "0%"),
                "--picker-val": String(e.state.pickerVal || "0%"),
                "--picker-hue": String(e.state.pickerHue || "0%")
              })
            }, [
              ie("div", z_, [
                ie("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: Et({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                a[0] || (a[0] = ie("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ie("div", j_, [
                ie("div", V_, [
                  ie("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: Et({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ie("div", H_, [
                  ie("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: Et({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ie("label", U_, [
                a[1] || (a[1] = ie("span", null, "Opacity", -1)),
                ie("div", B_, [
                  ie("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, G_),
                  ie("span", K_, mt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ie("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ie("div", Y_, [
                  (Me(!0), Pe(Je, null, $t(e.state.historyEntries || [], (d) => (Me(), Pe("button", {
                    key: d.index,
                    class: st(["pano-paint-color-history-dot", { empty: !d.color }]),
                    type: "button",
                    "data-paint-history-index": d.index,
                    "aria-label": `Recent color ${d.index + 1}`,
                    disabled: !d.color,
                    style: Et(n(d.color))
                  }, null, 14, q_))), 128))
                ])
              ], 8, W_)
            ], 12, $_)
          ], 10, R_)) : Lt("", !0),
          ie("div", {
            class: "pano-paint-footer",
            "data-paint-footer": c.footer
          }, [
            ie("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": c.group
            }, [
              (Me(!0), Pe(Je, null, $t(c.tools, (d) => {
                var p;
                return Me(), qi(mr, {
                  key: `${c.key}-${d.key}`,
                  icon: d.icon,
                  label: d.label,
                  tip: d.tip,
                  "extra-class": { active: ((p = e.state.activeTools) == null ? void 0 : p[c.key]) === d.key },
                  attrs: { [d.attr]: d.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, J_),
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
                style: Et({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Q_),
              ie("span", ex, mt(e.state.sizeText || "10"), 1)
            ], 10, Z_),
            ie("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((u = e.state.clearVisible) == null ? void 0 : u[c.key]) ?? !c.clearHidden)
            }, [
              Ye(mr, {
                icon: Tr(Oe).clear,
                label: c.clearLabel,
                tip: c.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": c.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, tx)
          ], 8, X_)
        ], 10, O_);
      }), 128))
    ], 2));
  }
}, rx = {
  key: 0,
  class: "pano-cutout-menu"
}, ix = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, ax = ["data-aspect"], ox = ["data-action", "aria-label", "data-tip", "disabled"], sx = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: Et({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Me(!0), Pe(Je, null, $t(e.model.items || [], (i) => (Me(), Pe(Je, {
        key: i.key
      }, [
        i.kind === "aspect" ? (Me(), Pe("div", rx, [
          ie("button", ix, [
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
            }, mt(a.label), 11, ax))), 128))
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
        ], 8, ox))
      ], 64))), 128))
    ], 4));
  }
}, lx = {
  class: "pano-side",
  "data-side": ""
}, cx = { class: "pano-side-head" }, ux = { class: "pano-side-title" }, fx = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, dx = {
  key: 0,
  class: "pano-side-scroll"
}, hx = { class: "pano-inspector" }, mx = { class: "pano-ui-row pano-coverage-row" }, px = ["data-selected"], gx = ["aria-pressed", "disabled"], bx = ["aria-pressed", "disabled"], yx = {
  key: 0,
  class: "pano-section-title"
}, vx = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, _x = {
  class: "pano-picker",
  "data-picker": "selection"
}, xx = ["disabled"], wx = { class: "pano-picker-label" }, Sx = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Mx = ["hidden"], Nx = ["data-selection-id"], kx = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, Px = {
  key: 2,
  class: "pano-state-actions"
}, Ax = ["disabled"], Cx = ["data-key"], Tx = ["min", "max", "step", "value", "disabled", "data-param-key"], Ix = ["min", "max", "step", "value", "disabled", "data-param-key"], Dx = { class: "pano-visibility-section" }, Ex = { class: "pano-visibility-stack" }, Ox = ["data-visibility-row"], Rx = { class: "pano-visibility-name" }, Fx = {
  class: "pano-visibility-name-icon",
  "aria-hidden": "true"
}, Lx = ["data-visibility", "aria-label", "aria-pressed", "data-tip", "disabled"], $x = ["open"], zx = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, jx = { class: "pano-ui-settings-body" }, Vx = { class: "pano-ui-row" }, Hx = ["data-selected"], Ux = ["aria-pressed"], Bx = ["aria-pressed"], Gx = { class: "pano-ui-row" }, Kx = ["data-selected"], Wx = ["aria-pressed"], Yx = ["aria-pressed"], qx = { class: "pano-ui-row" }, Xx = {
  class: "pano-picker pano-ui-picker",
  "data-ui-picker": "quality"
}, Jx = {
  id: "pano-ui-quality",
  class: "pano-picker-trigger",
  type: "button",
  "data-action": "toggle-quality-picker"
}, Zx = { class: "pano-picker-label" }, Qx = ["hidden"], ew = ["data-quality"], tw = {
  key: 1,
  class: "pano-side-footer"
}, nw = ["data-action"], rw = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, n = vt(() => {
      const c = t.model;
      return !c || typeof c != "object" ? !1 : Object.keys(c).length > 0 && !!c.coverage;
    });
    function i(c) {
      return { "--v": `${Number((c == null ? void 0 : c.fillPct) || 0)}%` };
    }
    function a(c, u) {
      return (u == null ? void 0 : u.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    return (c, u) => {
      var d, p, y, _, w;
      return Me(), Pe("div", lx, [
        ie("div", cx, [
          ie("div", ux, [
            ie("span", fx, [
              Ye(Mn, {
                icon: Tr(Oe).globe
              }, null, 8, ["icon"])
            ]),
            ie("span", null, mt(e.nodeTitle), 1)
          ]),
          u[0] || (u[0] = ie("div", { class: "pano-side-actions" }, null, -1))
        ]),
        u[13] || (u[13] = ie("div", { class: "pano-divider" }, null, -1)),
        n.value ? (Me(), Pe("div", dx, [
          ie("div", hx, [
            u[12] || (u[12] = ie("div", { class: "pano-section-title" }, [
              ie("span", null, "Scene")
            ], -1)),
            ie("div", mx, [
              u[1] || (u[1] = ie("label", null, "Coverage", -1)),
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
                }, "360", 8, gx),
                ie("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((_ = e.model.coverage) == null ? void 0 : _.value) === 180 ? "true" : "false",
                  disabled: ((w = e.model.coverage) == null ? void 0 : w.disabled) === !0
                }, "180", 8, bx)
              ], 8, px)
            ]),
            e.model.transformTitle !== !1 ? (Me(), Pe("div", yx, [...u[2] || (u[2] = [
              ie("span", null, "Transform", -1)
            ])])) : Lt("", !0),
            e.model.selectionPicker ? (Me(), Pe("div", vx, [
              ie("label", null, mt(e.model.selectionPicker.label), 1),
              ie("div", _x, [
                ie("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ie("span", wx, [
                    e.model.selectionPicker.currentIcon ? (Me(), Pe("span", Sx, [
                      Ye(Mn, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : Lt("", !0),
                    ie("span", null, mt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  u[3] || (u[3] = ie("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, xx),
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
                    S.icon ? (Me(), Pe("span", kx, [
                      Ye(Mn, {
                        icon: S.icon
                      }, null, 8, ["icon"])
                    ])) : Lt("", !0),
                    ie("span", null, mt(S.label), 1)
                  ], 10, Nx))), 128))
                ], 8, Mx)
              ])
            ])) : Lt("", !0),
            e.model.copyStateButton ? (Me(), Pe("div", Px, [
              ie("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Ye(Mn, {
                  icon: Tr(Oe).copy
                }, null, 8, ["icon"]),
                ie("span", null, mt(e.model.copyStateButton.label), 1)
              ], 8, Ax)
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
                  style: Et(i(S)),
                  "data-action": "param-input",
                  "data-input-kind": "range",
                  "data-param-key": S.key
                }, null, 12, Tx),
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
                }, null, 8, Ix)
              ], 8, Cx))), 128))
            ], 2),
            (e.model.visibilityRows || []).length ? (Me(), Pe(Je, { key: 3 }, [
              u[5] || (u[5] = ie("div", { class: "pano-divider" }, null, -1)),
              ie("div", Dx, [
                u[4] || (u[4] = ie("div", { class: "pano-section-title" }, [
                  ie("span", null, "Layers")
                ], -1)),
                ie("div", Ex, [
                  (Me(!0), Pe(Je, null, $t(e.model.visibilityRows, (S) => (Me(), Pe("div", {
                    key: S.key,
                    class: st(["pano-visibility-row", { "is-hidden": S.visible === !1, "is-disabled": S.enabled === !1 }]),
                    "data-visibility-row": S.key
                  }, [
                    ie("span", Rx, [
                      ie("span", Fx, [
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
                        icon: S.visible === !0 ? Tr(Oe).eye : Tr(Oe).eye_dashed
                      }, null, 8, ["icon"])
                    ], 10, Lx)
                  ], 10, Ox))), 128))
                ])
              ])
            ], 64)) : Lt("", !0),
            e.model.uiSettings ? (Me(), Pe("details", {
              key: 4,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ie("summary", null, [
                u[6] || (u[6] = ie("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ie("span", zx, [
                  Ye(Mn, {
                    icon: Tr(Oe).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ie("div", jx, [
                ie("div", Vx, [
                  u[7] || (u[7] = ie("label", null, "Drag X", -1)),
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
                    }, "Normal", 8, Ux),
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, Bx)
                  ], 8, Hx)
                ]),
                ie("div", Gx, [
                  u[8] || (u[8] = ie("label", null, "Drag Y", -1)),
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
                    }, "Normal", 8, Wx),
                    ie("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, Yx)
                  ], 8, Kx)
                ]),
                ie("div", qx, [
                  u[10] || (u[10] = ie("label", { for: "pano-ui-quality" }, "Render Quality", -1)),
                  ie("div", Xx, [
                    ie("button", Jx, [
                      ie("span", Zx, mt(e.model.uiSettings.qualityLabel), 1),
                      u[9] || (u[9] = ie("span", { class: "pano-picker-caret" }, "▾", -1))
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
                      }, mt(S.label), 11, ew))), 128))
                    ], 8, Qx)
                  ])
                ]),
                u[11] || (u[11] = ie("div", { class: "pano-ui-row" }, [
                  ie("span"),
                  ie("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, $x)) : Lt("", !0)
          ])
        ])) : Lt("", !0),
        (e.model.footerButtons || []).length ? (Me(), Pe("div", tw, [
          (Me(!0), Pe(Je, null, $t(e.model.footerButtons, (S) => (Me(), Pe("button", {
            key: S.action,
            class: st(["pano-btn", { "pano-btn-primary": S.primary === !0 }]),
            type: "button",
            "data-action": S.action
          }, mt(S.label), 11, nw))), 128))
        ])) : Lt("", !0)
      ]);
    };
  }
}, iw = {
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
      style: Et({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, mt(e.model.text || ""), 7));
  }
}, aw = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, ow = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => (Me(), Pe("div", aw, [
      (Me(!0), Pe(Je, null, $t(e.buttons, (i) => Ba((Me(), qi(mr, {
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
        [Ka, i.visible !== !1]
      ])), 128))
    ]));
  }
}, sw = ["data-video-ready"], lw = { class: "pano-video-transport-shell" }, cw = { class: "pano-video-controls-left" }, uw = { class: "pano-video-filmstrip" }, fw = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, dw = ["src", "onLoad"], hw = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, mw = ["max", "value", "disabled"], pw = { class: "pano-video-controls-right" }, gw = ["data-has-audio"], bw = { class: "pano-video-volume-pop" }, yw = ["value", "disabled"], vw = {
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
    }), c = vt(() => {
      var L;
      return ((L = t.state) == null ? void 0 : L.loop) === !1 ? "Enable loop" : "Disable loop";
    }), u = vt(() => {
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
      style: Et(D.value)
    }, [
      W[1] || (W[1] = ie("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ie("div", lw, [
        ie("div", cw, [
          Ye(mr, {
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
            style: Et(v.value)
          }, mt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ie("div", uw, [
          ie("div", fw, [
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
              }, null, 40, dw)) : (Me(), Pe("span", hw))
            ], 2))), 128))
          ]),
          ie("div", {
            class: "pano-video-playhead",
            style: Et(w.value),
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
          }, null, 8, mw)
        ]),
        ie("div", pw, [
          ie("div", {
            class: "pano-video-time pano-video-time-end",
            style: Et(v.value)
          }, mt(e.state.durationLabel || "0:00"), 5),
          Ye(mr, {
            "extra-class": "pano-video-control",
            icon: d.value,
            label: c.value,
            tip: u.value,
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
            ie("div", bw, [
              ie("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: Et(S.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, yw)
            ]),
            Ye(mr, {
              "extra-class": "pano-video-control",
              icon: y.value,
              label: p.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, gw)
        ])
      ])
    ], 14, sw));
  }
}, _w = { class: "pano-floating-top" }, xw = ["data-selected", "data-view-count"], ww = ["data-view", "aria-pressed", "aria-label", "disabled"], Sw = { class: "label" }, Mw = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, n) => {
      var i;
      return Me(), Pe("div", _w, [
        ie("div", {
          class: "pano-view-toggle",
          "data-selected": ((i = e.buttons.find((a) => a.pressed === "true")) == null ? void 0 : i.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Me(!0), Pe(Je, null, $t(e.buttons, (a) => Ba((Me(), Pe("button", {
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
            ie("span", Sw, mt(a.label), 1)
          ], 10, ww)), [
            [Ka, a.visible !== !1]
          ])), 128))
        ], 8, xw)
      ]);
    };
  }
};
function Dm(e = "stickers") {
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
const Nw = ["aria-label"], kw = { class: "pano-stage-wrap" }, Pw = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, Aw = {
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
    let a = "", c = !1, u = null;
    const d = /* @__PURE__ */ rs(null), p = vt(() => n.readOnly === !0), y = vt(() => n.shellPreset || Dm(n.type)), _ = vt(() => {
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
      u != null && u.isConnected && ((E = u.focus) == null || E.call(u)), u = null;
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
      c || (a = document.body.style.overflow, document.body.style.overflow = "hidden", c = !0);
    }
    function j() {
      c && (document.body.style.overflow = a, c = !1);
    }
    function k(E) {
      document.removeEventListener("keydown", R), E ? (u || (u = document.activeElement), V(), document.addEventListener("keydown", R), Rc(() => {
        A();
      })) : (j(), v());
    }
    return Ih(() => {
      k(n.open);
    }), $c(() => {
      j(), document.removeEventListener("keydown", R), v();
    }), zi(() => n.open, (E) => {
      k(E);
    }), (E, D) => e.open ? (Me(), Pe("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: D[0] || (D[0] = im((L) => i("close"), ["self"]))
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
        ie("div", kw, [
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
          e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && e.uiState.stageWarningDetail ? (Me(), Pe("div", Pw, mt(_.value), 1)) : Lt("", !0),
          D[4] || (D[4] = ie("div", {
            class: "pano-stage-drop-hint",
            "aria-hidden": "true"
          }, [
            ie("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
          ], -1)),
          p.value ? Lt("", !0) : (Me(), Pe(Je, { key: 1 }, [
            Ye(ow, {
              buttons: e.uiState.toolButtons || y.value.toolButtons || []
            }, null, 8, ["buttons"]),
            Ye(P_, {
              model: e.uiState.frameRail || {}
            }, null, 8, ["model"]),
            Ye(nx, {
              "paint-swatches": e.paintSwatches,
              panes: y.value.paintPanes || [],
              state: e.uiState.paintDock || {}
            }, null, 8, ["paint-swatches", "panes", "state"])
          ], 64)),
          Ye(vw, {
            state: e.uiState.videoTransport || {}
          }, null, 8, ["state"]),
          Ye(Mw, {
            buttons: e.uiState.viewButtons || y.value.viewButtons || []
          }, null, 8, ["buttons"]),
          Ye(v_, {
            buttons: e.uiState.floatingButtons || w.value,
            "fov-value": e.uiState.fovValue || "100°",
            preview: e.uiState.cameraPreview || {},
            "preview-toggle": e.uiState.outputPreviewToggle || {}
          }, null, 8, ["buttons", "fov-value", "preview", "preview-toggle"]),
          Ye(sx, {
            model: e.uiState.selectionMenu || {}
          }, null, 8, ["model"]),
          Ye(iw, {
            model: e.uiState.tooltip || {}
          }, null, 8, ["model"]),
          Ye(E_, {
            model: e.uiState.confirmDialog || {}
          }, null, 8, ["model"])
        ]),
        e.hideSidebar ? Lt("", !0) : (Me(), qi(rw, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {}
        }, null, 8, ["node-title", "model"]))
      ], 8, Nw)
    ])) : Lt("", !0);
  }
}, Kn = "loading", Yi = "ready", Yn = "failed";
function za(e, t = "") {
  return e && (e.__panoLoadState = Kn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function ja(e, t = "") {
  return e && (e.__panoLoadState = Yi, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function oi(e, t = "") {
  return e && (e.__panoLoadState = Yn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function wc(e, t) {
  return e ? e.__panoLoadState === Yn ? Yn : typeof t == "function" && t(e) ? Yi : Kn : Yi;
}
function Kl(e) {
  return wc(e) === Yn;
}
function Cw({ presented: e, background: t = Yi, stickers: n = [] } = {}) {
  if (!e) return { status: Kn, detail: "boot" };
  const i = Array.isArray(n) ? n : [], a = t === Kn, c = i.includes(Kn);
  if (a && c) return { status: Kn, detail: "mixed" };
  if (a) return { status: Kn, detail: "background" };
  if (c) return { status: Kn, detail: "stickers" };
  const u = t === Yn, d = i.includes(Yn);
  return u && d ? { status: Yn, detail: "mixed" } : u ? { status: Yn, detail: "background" } : d ? { status: Yn, detail: "stickers" } : { status: Yi, detail: "" };
}
const xs = "state_json", Wr = "sticker_image_1", Wl = "external_image", Yl = "pano_sticker_input_images", es = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], Ct = Math.PI / 180, Sn = 180 / Math.PI, ql = 1, Tw = "rgb(255, 221, 87)", Iw = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, Dw = 64, Vd = 40, Xl = 16, Ew = 0.45, Hd = 180, Ow = 160, ws = 24, Rw = 4, Fw = 4, Eo = /* @__PURE__ */ new Map(), Ud = /* @__PURE__ */ new Map(), Oo = /* @__PURE__ */ new Map(), Ir = /* @__PURE__ */ new Map(), Lw = 12;
function Kt(e) {
  return Number(e) === 180 ? 180 : 360;
}
function Ro(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function $w(e) {
  return 1 - Math.pow(1 - e, 3);
}
function zw(e, t, n) {
  const i = G((Number(n || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return i * i * (3 - 2 * i);
}
function jw(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const n = Ir.get(t);
  return !n || !Array.isArray(n.thumbnails) || !n.thumbnails.length ? null : (Ir.delete(t), Ir.set(t, n), n);
}
function Vw(e, t) {
  const n = String(e || "").trim();
  if (!n) return;
  const i = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (i.length)
    for (Ir.delete(n), Ir.set(n, {
      thumbnails: i,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); Ir.size > Lw; ) {
      const a = Ir.keys().next().value;
      if (!a) break;
      Ir.delete(a);
    }
}
function Hw(e) {
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
function Ai(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return qn(e.x / t, e.y / t, e.z / t);
}
function jn(e, t) {
  const n = e * Ct, i = t * Ct, a = Math.cos(i);
  return qn(a * Math.sin(n), Math.sin(i), a * Math.cos(n));
}
function zo(e) {
  return {
    yaw: Vt(Math.atan2(e.x, e.z) * Sn),
    pitch: G(Math.asin(G(e.y, -1, 1)) * Sn, -90, 90)
  };
}
function sr(e, t) {
  let n = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const c = t[i].x, u = t[i].y, d = t[a].x, p = t[a].y;
    u > e.y != p > e.y && e.x < (d - c) * (e.y - u) / (p - u || 1e-6) + c && (n = !n);
  }
  return n;
}
function Pr(e, t) {
  const n = e.x - t.x, i = e.y - t.y;
  return n * n + i * i;
}
function Jl(e, t, n) {
  const i = Number(n.x || 0) - Number(t.x || 0), a = Number(n.y || 0) - Number(t.y || 0), c = Number(e.x || 0) - Number(t.x || 0), u = Number(e.y || 0) - Number(t.y || 0), d = i * i + a * a;
  if (d <= 1e-6) return Pr(e, t);
  const p = G((c * i + u * a) / d, 0, 1), y = Number(t.x || 0) + i * p, _ = Number(t.y || 0) + a * p, w = Number(e.x || 0) - y, S = Number(e.y || 0) - _;
  return w * w + S * S;
}
function wn(e, t, n) {
  return e + (t - e) * n;
}
function Vn(e, t = null) {
  const n = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${G(n, 0, 1)})`;
}
function Uw(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let jo = { fillStyle: "", url: "" };
function Bw(e, t, n) {
  if (jo.url && jo.fillStyle === String(e || ""))
    return jo.url;
  const i = Uw(`
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
function Gw(e) {
  return es.some((t) => ts(e, t.color));
}
function Zl(e, t, n) {
  const i = (Number(e) % 1 + 1) % 1, a = G(Number(t), 0, 1), c = G(Number(n), 0, 1);
  if (a <= 1e-6) return { r: c, g: c, b: c };
  const u = Math.floor(i * 6), d = i * 6 - u, p = c * (1 - a), y = c * (1 - d * a), _ = c * (1 - (1 - d) * a);
  switch (u % 6) {
    case 0:
      return { r: c, g: _, b: p };
    case 1:
      return { r: y, g: c, b: p };
    case 2:
      return { r: p, g: c, b: _ };
    case 3:
      return { r: p, g: y, b: c };
    case 4:
      return { r: _, g: p, b: c };
    default:
      return { r: c, g: p, b: y };
  }
}
function Ql(e) {
  const t = G(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), n = G(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), i = G(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), a = Math.max(t, n, i), c = Math.min(t, n, i), u = a - c;
  let d = 0;
  u > 1e-6 && (a === t ? d = ((n - i) / u + (n < i ? 6 : 0)) / 6 : a === n ? d = ((i - t) / u + 2) / 6 : d = ((t - n) / u + 4) / 6);
  const p = a <= 1e-6 ? 0 : u / a;
  return { h: d, s: p, v: a };
}
function ma(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function Bd(e, t = 0) {
  const n = Number(e);
  return Number.isFinite(n) && n > 0 ? n : Number(t);
}
function Kw(e, t) {
  const n = Bd(e, 1), i = Bd(t, 1);
  if (n <= 0 || i <= 0) return "1:1";
  const a = 1e3, c = Math.max(1, Math.round(n * a)), u = Math.max(1, Math.round(i * a)), d = (w, S) => S ? d(S, w % S) : w, p = d(c, u) || 1, y = Math.max(1, Math.round(c / p)), _ = Math.max(1, Math.round(u / p));
  return `${y}:${_}`;
}
function ns(e) {
  const t = G(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * Ct, n = G(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * Ct;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(n * 0.5))));
}
function Ww(e) {
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
  for (const [a, c] of n)
    if (Math.abs(t - c) <= i) return a;
  return "";
}
function Xr(e) {
  const t = ns(e);
  return Ww(t) || Kw(t, 1);
}
function Em(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Xr(t), t;
}
function Ci(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Xr(e);
}
let Vo = null;
function Yw() {
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
const Om = "pano_suite.ui_settings.v1", Rm = "pano_suite.node_grid_visibility.v1";
let Oi = null, Hn = null, Ho = { text: null, parsed: null };
function Aa(e) {
  const t = e && typeof e == "object" ? e : {}, n = String(t.preview_quality || "balanced");
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y,
    preview_quality: n === "draft" || n === "balanced" || n === "high" ? n : "balanced"
  };
}
function qw() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Om)) || "").trim();
    if (!t) return Oi ? Aa(Oi) : null;
    const n = JSON.parse(t), i = Aa(n);
    return Oi = i, i;
  } catch {
    return Oi ? Aa(Oi) : null;
  }
}
function Xw(e) {
  var n;
  const t = Aa(e);
  Oi = t;
  try {
    (n = window == null ? void 0 : window.localStorage) == null || n.setItem(Om, JSON.stringify(t));
  } catch {
  }
  return t;
}
function Fm() {
  var e;
  if (Hn && typeof Hn == "object")
    return Hn;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(Rm)) || "").trim();
    if (!t)
      return Hn = {}, Hn;
    const n = JSON.parse(t);
    return Hn = n && typeof n == "object" ? n : {}, Hn;
  } catch {
    return Hn = {}, Hn;
  }
}
function Jw(e, t = !0) {
  const n = String(e ?? "").trim();
  if (!n) return !!t;
  const a = Fm()[n];
  return typeof a == "boolean" ? a : !!t;
}
function Zw(e, t) {
  var a;
  const n = String(e ?? "").trim();
  if (!n) return;
  const i = Fm();
  i[n] = !!t, Hn = i;
  try {
    (a = window == null ? void 0 : window.localStorage) == null || a.setItem(Rm, JSON.stringify(i));
  } catch {
  }
}
function Qw(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([n, i]) => {
    t[n] = i && typeof i == "object" ? { ...i } : i;
  }), t;
}
function eS(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const n = { ...t };
    return n.crop && typeof n.crop == "object" && (n.crop = { ...n.crop }), n.initial_pose && typeof n.initial_pose == "object" && (n.initial_pose = { ...n.initial_pose }), n.visible = n.visible !== !1, n.locked = n.locked === !0, n;
  }) : [];
}
function tS(e) {
  var i, a;
  const t = Array.isArray((i = e == null ? void 0 : e.paint) == null ? void 0 : i.strokes) ? e.paint.strokes.length : 0, n = Array.isArray((a = e == null ? void 0 : e.mask) == null ? void 0 : a.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: n };
}
function Gd(e) {
  const { paintCount: t, maskCount: n } = tS(e), i = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let a = 0, c = 0;
  return i.forEach((u) => {
    String((u == null ? void 0 : u.layerKind) || "paint") === "mask" ? c += 1 : a += 1;
  }), {
    paintCount: t,
    maskCount: n,
    paintRasterCount: a,
    maskRasterCount: c,
    totalPaintCount: t + a,
    totalMaskCount: n + c
  };
}
function Ti(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Kd(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function nS(e) {
  return Array.isArray(e) ? e.map((t) => !t || typeof t != "object" ? t : Em(t)) : [];
}
function rS(e, t = 2048, n = "#00ff00", i = 360) {
  const a = qw(), c = {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Kt(i),
    bg_color: n,
    output_preset: t,
    assets: {},
    stickers: [],
    shots: [],
    painting: Pa(null),
    painting_layer: null,
    ui_settings: {
      invert_view_x: !!(a != null && a.invert_view_x),
      invert_view_y: !!(a != null && a.invert_view_y),
      preview_quality: String((a == null ? void 0 : a.preview_quality) || "balanced")
    },
    active: { selected_sticker_id: null, selected_shot_id: null }
  }, u = String(e || "").trim();
  if (!u) return c;
  try {
    let d = null;
    if (Ho.text === u ? d = Ho.parsed : (d = JSON.parse(u), Ho = { text: u, parsed: d }), !d || typeof d != "object" || Array.isArray(d)) return c;
    const p = {
      ...c,
      ...d,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: Qw(d.assets),
      stickers: eS(d.stickers),
      shots: nS(d.shots),
      // source of truth persists target-local stroke geometry, never view coordinates.
      painting: Pa(d.painting),
      painting_layer: d.painting_layer && typeof d.painting_layer == "object" ? d.painting_layer : null,
      ui_settings: {
        invert_view_x: !!(d.ui_settings && d.ui_settings.invert_view_x),
        invert_view_y: !!(d.ui_settings && d.ui_settings.invert_view_y),
        preview_quality: (() => {
          var _;
          const y = String(((_ = d.ui_settings) == null ? void 0 : _.preview_quality) || "balanced");
          return y === "draft" || y === "balanced" || y === "high" ? y : "balanced";
        })()
      },
      active: d.active && typeof d.active == "object" ? { ...d.active } : { ...c.active }
    };
    return a && (p.ui_settings = Aa({ ...p.ui_settings, ...a })), p.output_preset = Lm(t, Number(p.output_preset || c.output_preset)), p.bg_color = String(n || p.bg_color || c.bg_color), p.coverage = Kt(i), delete p.editor_history, p;
  } catch {
    return Ho = { text: u, parsed: null }, c;
  }
}
function Nn(e, t) {
  var n;
  return ((n = e.widgets) == null ? void 0 : n.find((i) => i.name === t)) || null;
}
function Jc(e) {
  if (!e || e.__panoCoverageWidgetSyncInstalled) return;
  const t = Nn(e, "coverage");
  if (!t) return;
  const n = typeof t.callback == "function" ? t.callback.bind(t) : null;
  t.callback = function(...i) {
    var c, u, d, p, y, _, w, S, A, v;
    const a = n ? n(...i) : void 0;
    return e.__panoStateCache = null, e.__panoLiveStateOverride = null, e.__panoWrappedErpCache = null, e.__panoPanoBackgroundCache = null, (u = (c = e.__panoPreviewNodeRuntime) == null ? void 0 : c.requestDraw) == null || u.call(c), (p = (d = e.__panoDomPreview) == null ? void 0 : d.requestDraw) == null || p.call(d), (y = e.setDirtyCanvas) == null || y.call(e, !0, !0), (w = (_ = e.graph) == null ? void 0 : _.setDirtyCanvas) == null || w.call(_, !0, !0), (v = (A = (S = yn) == null ? void 0 : S.canvas) == null ? void 0 : A.setDirty) == null || v.call(A, !0, !0), a;
  }, e.__panoCoverageWidgetSyncInstalled = !0;
}
function iS(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function Wd(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function aS(e) {
  var A, v, R, V, j;
  if (!e || e.__panoCoverageWidgetOrderMigrated) return;
  const t = Nn(e, "coverage"), n = Nn(e, "bg_color"), i = Nn(e, xs), a = Nn(e, "sticker_state");
  if (!t || !n || !i) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  const c = String(t.value ?? "").trim(), u = String(n.value ?? "").trim(), d = String(i.value ?? "").trim();
  if (!(!/^(180|360)$/.test(c) && iS(c) && (Wd(u) || u === ""))) {
    e.__panoCoverageWidgetOrderMigrated = !0;
    return;
  }
  let y = "360";
  if (Wd(u))
    try {
      const k = JSON.parse(u);
      y = String(Kt(k == null ? void 0 : k.coverage));
    } catch {
      y = "360";
    }
  const _ = c, w = u, S = d;
  t.value = y, (A = t.callback) == null || A.call(t, y), n.value = _, (v = n.callback) == null || v.call(n, _), i.value = w, (R = i.callback) == null || R.call(i, w), a && (a.value = S, (V = a.callback) == null || V.call(a, S)), (j = e.setDirtyCanvas) == null || j.call(e, !0, !0), e.__panoCoverageWidgetOrderMigrated = !0;
}
function oS(e, t) {
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
function sS(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((i) => {
    var c, u;
    const a = String((i == null ? void 0 : i.name) || "");
    (a === t || a.trim() === t || a.toLowerCase().includes(String(t).toLowerCase())) && (i.__panoHidden || (i.__panoHidden = !0, i.computeSize = () => [0, 0], i.type = "hidden", i.hidden = !0, i.options = { ...i.options || {}, hidden: !0 }, (c = i.element) != null && c.style && (i.element.style.display = "none"), (u = i.parentEl) != null && u.style && (i.parentEl.style.display = "none")));
  });
}
function Sc(e, t, n) {
  var c, u;
  if (!e || typeof e.addWidget != "function") return null;
  let a = (Array.isArray(e.widgets) ? e.widgets : []).find((d) => String((d == null ? void 0 : d.name) || "") === String(t));
  return a ? (a.callback = n, a.hidden = !1, a.__panoHidden = !1, a.type = "button", (c = a.element) != null && c.style && (a.element.style.display = ""), (u = a.parentEl) != null && u.style && (a.parentEl.style.display = ""), (typeof a.computeSize != "function" || a.computeSize() == null || a.hidden) && (a.computeSize = () => {
    var d;
    return [Math.max(120, Number(((d = e == null ? void 0 : e.size) == null ? void 0 : d[0]) || 0) - 20), 30];
  }), a) : (a = e.addWidget("button", t, null, n), a && (a.serialize = !1), a);
}
function Uo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function Lm(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const n = String(e ?? "").trim();
  if (!n) return t;
  const i = n.includes("x") ? n.split("x", 1)[0].trim() : n, a = Number(i);
  return Number.isFinite(a) ? Math.round(a) : t;
}
function lS(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function cS(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
function $m(e, t) {
  if (!e || t == null) return null;
  const n = e.links;
  return n ? n instanceof Map ? n.get(t) || n.get(Number(t)) || n.get(String(t)) || null : n[t] || n[String(t)] || null : null;
}
function uS(e, t) {
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
function fS(e, t, n = null) {
  var a, c;
  let i = null;
  try {
    i = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    i = null;
  }
  if ((a = i == null ? void 0 : i.isSubgraphNode) != null && a.call(i))
    try {
      const u = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, d = u ? (c = i.resolveSubgraphOutputLink) == null ? void 0 : c.call(i, Number(u.origin_slot ?? 0)) : null;
      d != null && d.outputNode && (i = d.outputNode);
    } catch {
    }
  return !i && n != null && (i = uS(e == null ? void 0 : e.graph, n)), i;
}
function Va(e) {
  var a;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const n = new URLSearchParams();
  n.set("filename", t), n.set("type", String(e.type || "output")), e.subfolder && n.set("subfolder", String(e.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof ((a = on) == null ? void 0 : a.apiURL) == "function" ? on.apiURL(i) : i;
}
function dS(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function hS(e) {
  const n = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!n) return { filename: "", subfolder: "" };
  const i = n.split("/").filter(Boolean);
  if (!i.length) return { filename: "", subfolder: "" };
  const a = String(i.pop() || "").trim(), c = i.join("/");
  return { filename: a, subfolder: c };
}
function mS(e) {
  const t = [], n = /* @__PURE__ */ new Set();
  return e.forEach((i) => {
    const a = String(i || "").trim();
    !a || n.has(a) || (n.add(a), t.push(a));
  }), t;
}
function jm(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (dS(t)) return [t];
  const { filename: n, subfolder: i } = hS(t);
  if (!n) return [t];
  const a = ["temp", "output", "input"].map((c) => Va({
    filename: n,
    subfolder: i,
    type: c
  }));
  return mS([...a, t]);
}
function pS(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const n = String(e.filename || "").trim();
    return n ? Va({
      filename: n,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function Ca(e) {
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
      return Va({ filename: t, subfolder: n, type: i });
    }
    for (const n of e) {
      const i = si(n);
      if (i) return i;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Va(e);
}
function gS(e, t = -1) {
  var a;
  const n = [];
  Array.isArray(e == null ? void 0 : e.images) && e.images.length && n.push(e.images), Array.isArray((a = e == null ? void 0 : e.ui) == null ? void 0 : a.images) && e.ui.images.length && n.push(e.ui.images);
  const i = [];
  for (const c of n)
    !Array.isArray(c) || !c.length || (t >= 0 && t < c.length && i.push(c[t]), i.push(...c));
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
function Yd(e, t, n, i = null) {
  var w;
  const a = Ca(e == null ? void 0 : e.id), c = Array.isArray((w = a == null ? void 0 : a.ui) == null ? void 0 : w[t]) ? a.ui[t] : Array.isArray(a == null ? void 0 : a[t]) ? a[t] : [], u = Array.isArray(c) && c.length ? c[0] : null, d = si(u);
  if (!d) return null;
  const p = `__ui__${t}`, y = n.get(p);
  if (y && y.__panoSrc === d) return y;
  const _ = new Image();
  return _.__panoSrc = d, za(_, d), _.onload = () => {
    ja(_, d), typeof i == "function" && i(_);
  }, _.onerror = () => {
    oi(_, d), typeof i == "function" && i(_);
  }, _.src = d, n.set(p, _), _;
}
function bS(e, t) {
  var k, E;
  const n = String(t || "").trim();
  if (!n) return { src: "", sourceType: "", inputName: "" };
  const i = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [], a = i.findIndex((D) => String((D == null ? void 0 : D.name) || "") === n);
  if (a < 0) return { src: "", sourceType: "", inputName: n };
  const c = i[a], u = c == null ? void 0 : c.link;
  if (u == null) return { src: "", sourceType: "", inputName: n };
  const d = $m(e.graph, u), { originId: p, originSlot: y } = zm(d);
  if (p == null) return { src: "", sourceType: "", inputName: n };
  const _ = fS(e, a, p), w = Number(y || 0);
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
  const A = Ca((_ == null ? void 0 : _.id) ?? p), v = gS(A, w), R = ec(v);
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
function yS(e, t, n, i = null) {
  const a = String(n || "").trim();
  if (!a) return null;
  const c = jm(a);
  if (!c.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const u = String(t || "image"), d = e.__panoLinkedInputImageCache.get(u);
  if (d && d.srcRaw === a && d.img) return d.img;
  const p = new Image();
  za(p, a);
  const y = { srcRaw: a, resolvedSrc: "", img: p };
  e.__panoLinkedInputImageCache.set(u, y);
  let _ = -1;
  const w = () => {
    var A;
    if (_ += 1, _ >= c.length) {
      oi(p, a), i == null || i(), (A = e.setDirtyCanvas) == null || A.call(e, !0, !0);
      return;
    }
    const S = c[_];
    y.resolvedSrc = S, p.src = S;
  };
  return p.onload = () => {
    var S;
    ja(p, a), i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, p.onerror = () => {
    var S;
    if (_ + 1 < c.length) {
      w();
      return;
    }
    oi(p, a), i == null || i(), (S = e.setDirtyCanvas) == null || S.call(e, !0, !0);
  }, w(), p;
}
function vS(e, t, n, i = null) {
  const a = Array.isArray(n) ? n.map((v) => String(v || "").trim()).filter(Boolean) : [];
  if (!a.length) return null;
  e.__panoLinkedInputImageCache || (e.__panoLinkedInputImageCache = /* @__PURE__ */ new Map());
  const c = String(t || "image"), u = a.join(`
`), d = e.__panoLinkedInputImageCache.get(c);
  if (d && d.srcRaw === u && d.img) return d.img;
  const p = [], y = /* @__PURE__ */ new Set();
  if (a.forEach((v) => {
    jm(v).forEach((R) => {
      const V = String(R || "").trim();
      !V || y.has(V) || (y.add(V), p.push(V));
    });
  }), !p.length) return null;
  const _ = new Image();
  za(_, u);
  const w = { srcRaw: u, resolvedSrc: "", img: _ };
  e.__panoLinkedInputImageCache.set(c, w);
  let S = -1;
  const A = () => {
    var R;
    if (S += 1, S >= p.length) {
      oi(_, u), i == null || i(), (R = e.setDirtyCanvas) == null || R.call(e, !0, !0);
      return;
    }
    const v = p[S];
    w.resolvedSrc = v, _.src = v;
  };
  return _.onload = () => {
    var v;
    ja(_, u), i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, _.onerror = () => {
    var v;
    if (S + 1 < p.length) {
      A();
      return;
    }
    oi(_, u), i == null || i(), (v = e.setDirtyCanvas) == null || v.call(e, !0, !0);
  }, A(), _;
}
function Vm(e, t = []) {
  const n = Array.isArray(t) ? t : [t];
  for (const i of n) {
    const a = bS(e, i);
    if (String((a == null ? void 0 : a.src) || "").trim()) return a;
  }
  return { src: "", sourceType: "", inputName: "" };
}
function Bo(e, t = [], n = null, i = "") {
  const a = Array.isArray(t) ? t : [t], c = Vm(e, a), u = String(i || a.join("|") || "image_exact"), d = Array.isArray(c == null ? void 0 : c.srcCandidates) ? c.srcCandidates : [];
  if (d.length) return vS(e, u, d, n);
  const p = String((c == null ? void 0 : c.src) || "").trim();
  return p ? yS(e, u, p, n) : null;
}
async function Ta(e, t, n = {}) {
  var yo, wf;
  try {
    (wf = (yo = e.__panoLinkedInputImageCache) == null ? void 0 : yo.forEach) == null || wf.call(yo, (r, o, s) => {
      r != null && r.img && Kl(r.img) && s.delete(o);
    });
  } catch {
  }
  const i = (n == null ? void 0 : n.readOnly) === !0, a = (n == null ? void 0 : n.hideSidebar) ?? i, c = i, u = oS(e, t);
  await Yw();
  const d = Nn(e, "output_preset"), p = Nn(e, "coverage"), y = Nn(e, "bg_color"), _ = Nn(e, xs), w = () => {
    const r = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Bo(
      e,
      r,
      () => fe(),
      `background:size:${r.join("|")}`
    );
  }, S = () => {
    const r = w();
    return cS(r);
  }, A = (r = 2048) => {
    const o = d == null ? void 0 : d.value;
    return lS(o) ? S() || Math.max(1, Math.round(Number(r || 2048))) : Lm(o, r);
  }, v = rS(
    String((_ == null ? void 0 : _.value) || ""),
    A(2048),
    String((y == null ? void 0 : y.value) || "#00ff00"),
    Kt(p == null ? void 0 : p.value)
  );
  e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = 0, t === "cutout" && (v.shots = Array.isArray(v.shots) ? v.shots.slice(0, 1) : [], v.shots.length || (v.active.selected_shot_id = null));
  const R = t === "cutout" ? (() => {
    var s;
    const r = Array.isArray(v.shots) ? v.shots : [], o = String(((s = v == null ? void 0 : v.active) == null ? void 0 : s.selected_shot_id) || "");
    return r.find((l) => String((l == null ? void 0 : l.id) || "") === o) || r[0] || null;
  })() : null, V = R ? Ou(R, !1) : { width: 220, height: 132 }, j = Dm(t), k = /* @__PURE__ */ Cs({
    stageStatus: Kn,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    viewButtons: (j.viewButtons || []).map((r) => ({ ...r, visible: !0, disabled: !1 })),
    toolButtons: (j.toolButtons || []).map((r) => ({ ...r, disabled: !1 })),
    floatingButtons: [
      ...(j.floatingButtons || []).map((r) => ({ ...r, disabled: !1 })),
      ...c ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: Oe.fullscreen, disabled: !1 }] : []
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
  const D = Ry(Aw, {
    open: !0,
    type: t,
    readOnly: i,
    hideSidebar: a,
    nodeTitle: u,
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
  const C = F.getContext("2d"), we = ti(), te = t === "cutout" ? Q1({ targetId: `cutout_modal_${String((e == null ? void 0 : e.id) ?? "0")}` }) : null, ye = W.querySelector("[data-side]"), $ = W.querySelector("[data-video-element]"), X = W.querySelector(".pano-floating-right"), _e = W.querySelector(".pano-floating-top"), $e = W.querySelector("[data-tool-rail]"), ze = W.querySelector("[data-frame-rail]"), De = W.querySelector("[data-frame-roll-knob]"), wt = W.querySelector("[data-paint-dock]"), Ot = W.querySelector(".pano-video-transport"), Ht = W.querySelector("[data-selection-menu]"), St = W.querySelector("[data-tooltip]"), It = W.querySelector("[data-camera-preview-host]"), hn = W.querySelector("[data-paint-color-row]"), Xe = W.querySelector("[data-paint-color-pop]"), Wt = W.querySelector("[data-paint-color-sv]"), Pn = W.querySelector("[data-paint-color-sv-cursor]"), O = W.querySelector("[data-paint-hue-strip]"), H = W.querySelector("[data-paint-hue-handle]");
  let Q = 0, pe = 0;
  ce == null || ce.removeAttribute("data-stage-ready"), ce == null || ce.setAttribute("data-stage-loading-kind", "boot"), F.style.opacity = "1", J.style.opacity = "0", a && (ye == null || ye.remove(), W.classList.add("pano-modal-readonly"));
  const I = () => {
    if (!f.customPaintSessionStart) return;
    if (ts(f.customPaintSessionStart, f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    if (Gw(f.customPaintColor)) {
      f.customPaintSessionStart = null;
      return;
    }
    const r = [
      bn(f.customPaintColor),
      ...f.customPaintHistory.filter((o) => !ts(o, f.customPaintColor))
    ];
    f.customPaintHistory = r.slice(0, 8), f.customPaintSessionStart = null;
  }, K = (r = !1) => {
    !Xe || Xe.hidden || (r ? I() : f.customPaintSessionStart = null, Xe.hidden = !0, k.paintDock.colorPopOpen = !1);
  }, ne = () => {
    Xe && (Xe.hidden && (f.customPaintSessionStart = bn(f.customPaintColor)), Xe.hidden = !1, k.paintDock.colorPopOpen = !0);
  };
  W.addEventListener("pointerdown", (r) => {
    var o;
    r.target.closest("[data-frame-roll-knob]") || Hr(), !r.target.closest(".pano-picker") && (r.target.closest("[data-paint-color-row]") || (W.querySelectorAll(".pano-picker-pop").forEach((s) => {
      s.hidden = !0;
    }), K(!0), t === "cutout" && f.cutoutAspectOpen && !r.target.closest(".pano-aspect-popover") && !r.target.closest("[data-action='aspect']") && (f.cutoutAspectOpen = !1, f.menuMode = "", f.menuSize.measured = !1, Ge(), fe()), (o = k.frameRail) != null && o.aspectOpen && !r.target.closest(".pano-frame-aspect-control") && (k.frameRail.aspectOpen = !1)));
  });
  const se = t === "stickers" ? v.active.selected_sticker_id : v.active.selected_shot_id, ae = JSON.stringify(Kd(v)), f = {
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
    activeBrushPresetId: or,
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
    showGrid: Jw(e == null ? void 0 : e.id, !0),
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
  }, he = te && It ? te.mount(It, { shot: null }) : null;
  t === "stickers" && (f.selectedId = null, v.active.selected_sticker_id = null), f.selectedIds = f.selectedId ? [f.selectedId] : [];
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
  let Qn = 0;
  const Wa = () => {
    var M, P;
    const r = (M = ce == null ? void 0 : ce.getBoundingClientRect) == null ? void 0 : M.call(ce), o = (P = X == null ? void 0 : X.getBoundingClientRect) == null ? void 0 : P.call(X), s = Math.max(0, Number((r == null ? void 0 : r.width) || 0)), l = o ? Math.max(0, Number(o.width || 0)) : 0, b = l > 0 ? l + 14 + 12 : 72, g = Math.max(280, Math.floor(s - b * 2)), x = f.fullscreen ? Math.min(1200, g) : g;
    k.videoTransport.shellMaxWidthPx = x;
  }, zs = () => {
    Qn || (Qn = window.requestAnimationFrame(() => {
      Qn = 0, Wa();
    }));
  }, js = () => {
    const r = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(1 / 120, Math.min(0.05, 0.5 / r));
  }, Zc = (r) => {
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
    Qn && (window.cancelAnimationFrame(Qn), Qn = 0), (r = An == null ? void 0 : An.disconnect) == null || r.call(An);
  }), zs();
  const Ya = () => {
    me.thumbnailJobId += 1, me.thumbnailSrc = "", k.videoTransport.thumbnails = [], k.videoTransport.thumbnailCount = Pt;
  }, Qc = async (r, o, s) => {
    const l = String(r || "").trim();
    if (!l) {
      Ya();
      return;
    }
    const h = jw(l);
    if (h) {
      me.thumbnailSrc = l, k.videoTransport.thumbnails = h.thumbnails, k.videoTransport.thumbnailCount = h.thumbnailCount;
      return;
    }
    if (me.thumbnailSrc === l && Array.isArray(k.videoTransport.thumbnails) && k.videoTransport.thumbnails.length)
      return;
    const m = ++me.thumbnailJobId;
    me.thumbnailSrc = l, k.videoTransport.thumbnails = [], k.videoTransport.thumbnailCount = Pt;
    const b = document.createElement("video");
    if (b.preload = "auto", b.muted = !0, b.playsInline = !0, b.crossOrigin = "anonymous", !await new Promise((re) => {
      let le = !1;
      const ee = (be) => {
        le || (le = !0, re(be));
      };
      b.addEventListener("loadedmetadata", () => ee(!0), { once: !0 }), b.addEventListener("canplay", () => ee(!0), { once: !0 }), b.addEventListener("error", () => ee(!1), { once: !0 }), b.src = l, b.load();
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
    me.thumbnailJobId === m && (k.videoTransport.thumbnails = B, k.videoTransport.thumbnailCount = B.length || Pt, Vw(l, {
      thumbnails: B,
      thumbnailCount: B.length || Pt,
      duration: P,
      fps: s
    }));
  }, eu = (r) => {
    const o = Math.max(1, Number(k.videoTransport.fps || 24));
    return Math.max(0, Math.round(Math.max(0, Number(r || 0)) * o));
  }, tu = (r) => {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return null;
    const o = Number($.videoWidth || 0), s = Number($.videoHeight || 0), l = document.createElement("canvas");
    l.width = o, l.height = s, l.__panoFrameIdx = Number(l.__panoFrameIdx || 0) + 1;
    const h = l.getContext("2d");
    if (!h) return null;
    for (h.drawImage($, 0, 0, o, s), me.frameCache.set(r, l), me.frameCacheOrder = me.frameCacheOrder.filter((m) => m !== r), me.frameCacheOrder.push(r); me.frameCacheOrder.length > kt; ) {
      const m = me.frameCacheOrder.shift();
      m != null && me.frameCache.delete(m);
    }
    return l;
  }, Hm = (r, o = null) => {
    if (!(r instanceof HTMLCanvasElement)) return !1;
    const s = Number(r.width || 0), l = Number(r.height || 0);
    if (s < 1 || l < 1) return !1;
    (Te.width !== s || Te.height !== l) && (Te.width = s, Te.height = l);
    const h = Te.getContext("2d");
    return h ? (h.clearRect(0, 0, s, l), h.drawImage(r, 0, 0, s, l), Te.__panoFrameIdx = Number(Te.__panoFrameIdx || 0) + 1, o != null && (me.presentedTime = Number(o || 0)), !0) : !1;
  }, nu = (r) => {
    const o = eu(r), s = me.frameCache.get(o) || null;
    return s ? (me.currentFrameNumber = o, Hm(s, r)) : !1;
  };
  if (At.push(() => {
    Ya();
  }), $ instanceof HTMLVideoElement) {
    const r = () => {
      if (typeof $.requestVideoFrameCallback != "function" || $.__panoFramePumpActive) return;
      $.__panoFramePumpActive = !0;
      const g = (x, M) => {
        $.__panoFramePumpActive = !1;
        const P = Number((M == null ? void 0 : M.mediaTime) ?? $.currentTime ?? 0), N = eu(P), T = js();
        me.mode === "scrub" ? Math.abs(P - Number(me.editorTime || 0)) <= T && (tu(N), nu(me.editorTime), oe.backgroundDirty = !0, oe.dirty = !0, Ln({
          ready: !0,
          playing: !1,
          visible: nr(),
          currentTime: me.editorTime,
          duration: k.videoTransport.duration,
          frameCount: k.videoTransport.frameCount,
          fps: k.videoTransport.fps,
          mode: "scrub"
        }), fe({ cause: "frame_view", localOnly: !0 })) : (me.editorTime = P, me.presentedTime = P, me.requestedTime = null, me.currentFrameNumber = N, tu(N), me.frameCounter += 1, $.dataset.panoFrameIdx = String(me.frameCounter), oe.backgroundDirty = !0, oe.dirty = !0, Ln({
          ready: !0,
          playing: !$.paused && !$.ended,
          visible: nr(),
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
    }, l = () => {
      me.mode = "playback", me.seeking = !1, me.requestedTime = null, gi(), r(), fe({ cause: "frame_view", localOnly: !0 });
    }, h = () => {
      me.mode === "playback" && pi() && (oe.backgroundDirty = !0, oe.dirty = !0), gi(), fe({ cause: "frame_view", localOnly: !0 });
    }, m = () => {
      Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: nr(),
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
    $.addEventListener("loadedmetadata", s), $.addEventListener("loadeddata", s), $.addEventListener("canplay", s), $.addEventListener("play", l), $.addEventListener("pause", h), $.addEventListener("volumechange", m), $.addEventListener("seeked", b), At.push(() => $.removeEventListener("loadedmetadata", s)), At.push(() => $.removeEventListener("loadeddata", s)), At.push(() => $.removeEventListener("canplay", s)), At.push(() => $.removeEventListener("play", l)), At.push(() => $.removeEventListener("pause", h)), At.push(() => $.removeEventListener("volumechange", m)), At.push(() => $.removeEventListener("seeked", b));
  }
  function Um() {
    k.toolButtons.forEach((r) => {
      const o = r.attr === "data-tool-mode", s = r.attr === "data-paint-tool", l = r.attr === "data-mask-tool";
      r.active = o ? r.value === f.primaryTool : s ? r.key === f.paintTool : l ? r.key === f.maskTool : !1, r.pressed = r.active ? "true" : r.pressed == null ? null : "false";
    });
  }
  function Vs(r) {
    const o = r == null ? void 0 : r.dataTransfer;
    if (!o) return !1;
    if (o.items && o.items.length) {
      for (const s of o.items) {
        if (!s || s.kind !== "file") continue;
        const l = String(s.type || "").toLowerCase();
        if (!l || l.startsWith("image/")) return !0;
      }
      return !1;
    }
    return o.files && o.files.length ? Array.from(o.files).some((s) => uo(s)) : !1;
  }
  function $r(r) {
    const o = !!r;
    Qe.active !== o && (Qe.active = o, ce.classList.toggle("drop-active", o));
  }
  function Hs(r, o, s = f.viewFov, l = 140, h = 620) {
    const m = vv(f.viewYaw, r), b = o - f.viewPitch, g = s - f.viewFov, x = Math.hypot(m, b) + Math.abs(g) * 0.6, M = Math.round(G(l + x * 2.2, l, h));
    f.viewTween = {
      active: !0,
      startTs: performance.now(),
      durationMs: M,
      startYaw: f.viewYaw,
      startPitch: f.viewPitch,
      startFov: f.viewFov,
      targetPitch: o,
      targetFov: s,
      deltaYaw: m
    }, f.viewInertia.active = !1, f.viewInertia.vx = 0, f.viewInertia.vy = 0, fe();
  }
  vp();
  function er() {
    return t === "stickers" ? v.stickers : v.shots;
  }
  function Yt() {
    const r = v.painting || (v.painting = Pa(null));
    return Array.isArray(r.groups) || (r.groups = []), r.groups;
  }
  function Bm(r = "paint") {
    var h, m;
    const o = Array.isArray((m = (h = v.painting) == null ? void 0 : h[r]) == null ? void 0 : m.strokes) ? v.painting[r].strokes : [], s = [], l = /* @__PURE__ */ new Set();
    for (const b of o) {
      const g = String((b == null ? void 0 : b.actionGroupId) || "").trim();
      !g || l.has(g) || (l.add(g), s.push(g));
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
    const l = s.match(/^(paint|mask):(.*)$/);
    return l ? { layerKind: l[1] === "mask" ? "mask" : "paint", actionGroupId: String(l[2] || "").trim() } : { layerKind: o === "mask" ? "mask" : "paint", actionGroupId: s };
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
  function ru(r, o = null) {
    const s = String(r || "").trim();
    if (!s) return null;
    const l = Yt();
    let h = l.find((m) => String((m == null ? void 0 : m.actionGroupId) || "") === s);
    return h ? o != null && (h.z_index = Math.max(0, Number(o || 0))) : (h = {
      id: s,
      type: "strokeGroup",
      actionGroupId: s,
      z_index: o == null ? Us() : Math.max(0, Number(o || 0)),
      locked: !1,
      frame: null
    }, l.push(h)), h;
  }
  function Km(r) {
    if (!(r != null && r.centerUv)) return [];
    const o = Number(r.centerUv.u || 0), s = Number(r.centerUv.v || 0), l = Number(r.halfW || 0), h = Number(r.halfH || 0);
    return [
      {
        u: ((o - l) % 1 + 1) % 1,
        v: G(s - h, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: G(s - h, 0, 1)
      },
      {
        u: ((o + l) % 1 + 1) % 1,
        v: G(s + h, 0, 1)
      },
      {
        u: ((o - l) % 1 + 1) % 1,
        v: G(s + h, 0, 1)
      }
    ];
  }
  function Wm() {
    const r = new Set(Gm()), s = Yt().filter((l) => r.has(String((l == null ? void 0 : l.actionGroupId) || "")));
    return r.forEach((l) => {
      s.some((h) => String((h == null ? void 0 : h.actionGroupId) || "") === l) || s.push({
        id: l,
        type: "strokeGroup",
        actionGroupId: l,
        z_index: Us(),
        locked: !1,
        frame: null
      });
    }), s.sort((l, h) => Number((l == null ? void 0 : l.z_index) || 0) - Number((h == null ? void 0 : h.z_index) || 0)), v.painting.groups = s, s;
  }
  function Ym(r, o, s) {
    var B;
    const l = (Y) => (Number(Y || 0) % 1 + 1) % 1, h = [];
    for (const Y of s) {
      const re = Y == null ? void 0 : Y.geometry, le = (re == null ? void 0 : re.geometryKind) === "lasso_fill" ? re == null ? void 0 : re.points : (re == null ? void 0 : re.processedPoints) || (re == null ? void 0 : re.rawPoints) || (re == null ? void 0 : re.points) || [];
      Array.isArray(le) && h.push(...le);
    }
    if (!h.length) return null;
    const m = l(((B = h[0]) == null ? void 0 : B.u) || 0);
    let b = 0, g = 0;
    h.forEach((Y) => {
      const re = l((Y == null ? void 0 : Y.u) || 0);
      b += m + xn(re, m), g += Number((Y == null ? void 0 : Y.v) || 0);
    });
    const x = (b / h.length % 1 + 1) % 1;
    let M = 1 / 0, P = -1 / 0, N = 1 / 0, T = -1 / 0;
    h.forEach((Y) => {
      const re = l((Y == null ? void 0 : Y.u) || 0), le = xn(re, x);
      M = Math.min(M, le), P = Math.max(P, le);
      const ee = Number((Y == null ? void 0 : Y.v) || 0);
      N = Math.min(N, ee), T = Math.max(T, ee);
    });
    const z = s.reduce((Y, re) => {
      const le = Nr(String((re == null ? void 0 : re.toolKind) || "pen")), ee = un[le] || un[or], be = Math.max(1, Number((re == null ? void 0 : re.size) || 10)) * Math.max(0.1, Number((ee == null ? void 0 : ee.sizeScale) ?? 1));
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
  function vr(r, o, s) {
    const l = String(r || "").trim();
    if (!l) return null;
    const h = Yt().find((b) => String((b == null ? void 0 : b.actionGroupId) || "") === l);
    if (!h) return null;
    const m = s || Cn(l, o);
    return h.frame = Ym(l, o, m), h.frame;
  }
  function ci() {
    var l;
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
    })), s = (Array.isArray((l = v.painting) == null ? void 0 : l.raster_objects) ? v.painting.raster_objects : []).filter((h) => String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => ({
      type: "rasterObject",
      id: String((h == null ? void 0 : h.id) || ""),
      z_index: Number((h == null ? void 0 : h.z_index) || 0),
      item: h
    }));
    return [...r, ...o, ...s].sort((h, m) => Number(h.z_index || 0) - Number(m.z_index || 0));
  }
  function Bs(r = !0) {
    var s, l, h, m, b, g;
    const o = ci().filter((x) => x.type === "strokeGroup").map((x) => String(x.actionGroupId || "")).filter((x) => !!x);
    if (r) {
      const x = String(((l = (s = f.interaction) == null ? void 0 : s.stroke) == null ? void 0 : l.actionGroupId) || "").trim(), M = String(((m = (h = f.interaction) == null ? void 0 : h.stroke) == null ? void 0 : m.layerKind) || "").trim(), P = String(((g = (b = f.interaction) == null ? void 0 : b.stroke) == null ? void 0 : g.toolKind) || "").trim();
      x && M === "paint" && P !== "eraser" && !o.includes(x) && o.push(x);
    }
    return o;
  }
  function Gs(r = !0) {
    var g, x, M, P, N, T;
    const o = ci();
    if (!r) return o;
    const s = String(((x = (g = f.interaction) == null ? void 0 : g.stroke) == null ? void 0 : x.actionGroupId) || "").trim(), l = String(((P = (M = f.interaction) == null ? void 0 : M.stroke) == null ? void 0 : P.layerKind) || "").trim(), h = String(((T = (N = f.interaction) == null ? void 0 : N.stroke) == null ? void 0 : T.toolKind) || "").trim();
    if (!s || l !== "paint" || h === "eraser" || o.some((z) => z.type === "strokeGroup" && String(z.actionGroupId || "") === s))
      return o;
    const m = bt();
    let b = o.reduce((z, q) => Math.max(z, Number((q == null ? void 0 : q.z_index) || 0)), -1) + 1;
    return m && Rt(m) && String(m.actionGroupId || "") === s && (b = Number(m.z_index || 0)), [
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
  function iu(r = f.interaction) {
    const o = String((r == null ? void 0 : r.kind) || "");
    if (o === "paint_stroke" || o === "paint_lasso_fill" || o === "move_stroke_group" || o === "scale_stroke_group" || o === "rotate_stroke_group" || o === "move_raster_object" || o === "scale_raster_object") return !0;
    if (o === "move_multi") {
      const s = Array.isArray(r == null ? void 0 : r.strokeSnapshots) && r.strokeSnapshots.length > 0, l = Array.isArray(r == null ? void 0 : r.rasterSnapshots) && r.rasterSnapshots.length > 0;
      return s || l;
    }
    return !1;
  }
  function Jm() {
    var o, s, l, h;
    let r = null;
    try {
      const m = Bs(), b = ((h = (l = (s = (o = f.paintEngine) == null ? void 0 : o.getErpTarget) == null ? void 0 : s.call(o, m)) == null ? void 0 : l.displayPaint) == null ? void 0 : h.canvas) || null;
      b && (r = {
        source: b,
        revision: `${_i()}:${qa()}`
      });
    } catch {
      r = null;
    }
    return r;
  }
  function qa() {
    var h, m, b, g, x, M, P;
    const r = f.interaction, o = String((r == null ? void 0 : r.kind) || "");
    if (!iu(r)) return "";
    if (o === "paint_stroke" || o === "paint_lasso_fill") {
      const N = ((h = r == null ? void 0 : r.stroke) == null ? void 0 : h.geometry) || null, T = String(((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.layerKind) || ""), z = ((b = N == null ? void 0 : N.rawPoints) == null ? void 0 : b.length) ?? ((g = N == null ? void 0 : N.points) == null ? void 0 : g.length) ?? 0, q = String((r == null ? void 0 : r._livePreviewToken) || "");
      return `_${T || "paint"}_${o}_live${q}_${z}_${f.livePaintInteractionRevision}`;
    }
    const s = String(((x = r == null ? void 0 : r.item) == null ? void 0 : x.actionGroupId) || ""), l = String(((M = r == null ? void 0 : r.item) == null ? void 0 : M.rasterObjectId) || ((P = r == null ? void 0 : r.item) == null ? void 0 : P.id) || "");
    return `_${o}_${s || l || "active"}_${f.livePaintInteractionRevision}`;
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
    const s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
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
    const l = Yt().find((h) => String((h == null ? void 0 : h.id) || (h == null ? void 0 : h.actionGroupId) || "") === s || String((h == null ? void 0 : h.actionGroupId) || "") === s);
    return l ? {
      ...l,
      id: Xi("paint", s),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: s
    } : null;
  }
  function Rt(r) {
    if (!r || typeof r != "object" || String(r.type || "") !== "strokeGroup") return !1;
    const o = String(r.actionGroupId || "").trim(), s = String(r.layerKind || "paint").trim() || "paint";
    return !!o && !!fi(Xi(s, o));
  }
  function Cn(r, o = null) {
    const s = Zi(r, o), l = String(s.actionGroupId || "").trim();
    return l ? wi(s.layerKind).filter((h) => String((h == null ? void 0 : h.actionGroupId) || "").trim() === l) : [];
  }
  function Zm(r, o = "paint") {
    const s = String(r || "").trim(), h = `geomv5:${String(o || "paint").trim() || "paint"}:${s}:${f.mode}:${ra()}`;
    if (f.mode === "frame") {
      const m = Fe(), b = String((m == null ? void 0 : m.id) || ""), g = m ? Ft(m) : null;
      return `${h}:frame:${b}:${Math.round(Number((m == null ? void 0 : m.yaw_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.pitch_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.roll_deg) ?? (m == null ? void 0 : m.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((m == null ? void 0 : m.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((g == null ? void 0 : g.x) || 0))}:${Math.round(Number((g == null ? void 0 : g.y) || 0))}:${Math.round(Number((g == null ? void 0 : g.w) || 0))}:${Math.round(Number((g == null ? void 0 : g.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((F == null ? void 0 : F.width) || 0))}:${Math.round(Number((F == null ? void 0 : F.height) || 0))}`;
  }
  function Xa(r, o, s) {
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
    const l = Zi(r, o), h = Array.isArray(s) ? s : Cn(l.actionGroupId, l.layerKind), m = [];
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
  function Ja(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), b = xn(Number(r.u || 0), h), g = Number(r.v || 0) - m, x = Number(l || 0) * Ct, M = Math.cos(x), P = Math.sin(x), N = Math.max(0.02, Number(s || 1)), T = (b * M - g * P) * N, z = (b * P + g * M) * N;
    return {
      ...r,
      u: ((h + T) % 1 + 1) % 1,
      v: G(m + z, 0, 1)
    };
  }
  function au(r, o, s, l = null, h = null, m = null) {
    const b = Zi(r, h), g = String(b.actionGroupId || "").trim();
    if (!g) return !1;
    const x = wi(b.layerKind), M = Array.isArray(l) ? new Map(l.map((N) => [String((N == null ? void 0 : N.id) || ""), N])) : null;
    let P = !1;
    if (x.forEach((N) => {
      if (String((N == null ? void 0 : N.actionGroupId) || "").trim() !== g) return;
      const T = (M == null ? void 0 : M.get(String((N == null ? void 0 : N.id) || ""))) || N, z = N == null ? void 0 : N.geometry, q = T == null ? void 0 : T.geometry;
      !z || !q || (Array.isArray(q.points) && (z.points = q.points.map((B) => Xa(B, o, s)), P = !0), Array.isArray(q.rawPoints) && (z.rawPoints = q.rawPoints.map((B) => Xa(B, o, s)), P = !0), Array.isArray(q.processedPoints) && (z.processedPoints = q.processedPoints.map((B) => Xa(B, o, s)), P = !0));
    }), P && m) {
      const N = Yt().find((T) => String((T == null ? void 0 : T.actionGroupId) || "") === g);
      N && (N.frame = null);
    }
    return P;
  }
  function ou(r, o = 1, s = 0, l = null, h = null, m = null) {
    const b = Zi(r, h), g = String(b.actionGroupId || "").trim();
    if (!g) return !1;
    const x = wi(b.layerKind), M = Array.isArray(l) ? l : Cn(g, b.layerKind), P = Array.isArray(M) ? new Map(M.map((z) => [String((z == null ? void 0 : z.id) || ""), z])) : null, N = (m == null ? void 0 : m.centerUv) ?? Ws(g, b.layerKind, M);
    let T = !1;
    if (x.forEach((z) => {
      if (String((z == null ? void 0 : z.actionGroupId) || "").trim() !== g) return;
      const q = (P == null ? void 0 : P.get(String((z == null ? void 0 : z.id) || ""))) || z, B = z == null ? void 0 : z.geometry, Y = q == null ? void 0 : q.geometry;
      !B || !Y || (Array.isArray(Y.points) && (B.points = Y.points.map((re) => Ja(re, N, o, s)), T = !0), Array.isArray(Y.rawPoints) && (B.rawPoints = Y.rawPoints.map((re) => Ja(re, N, o, s)), T = !0), Array.isArray(Y.processedPoints) && (B.processedPoints = Y.processedPoints.map((re) => Ja(re, N, o, s)), T = !0));
    }), T && m) {
      const z = Yt().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === g);
      z && (z.frame = null);
    }
    return T;
  }
  function su(r, o, s, l = null) {
    const h = zt(r);
    if (!h) return !1;
    const m = ln().find((P) => String((P == null ? void 0 : P.id) || "").trim() === h);
    if (!m) return !1;
    const b = l && typeof l == "object" ? l : m, g = (b == null ? void 0 : b.transform) || {}, x = Number(g.du || 0) + Number(o || 0), M = G(Number(g.dv || 0) + Number(s || 0), -1, 1);
    return m.transform || (m.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), m.transform.du = x, m.transform.dv = M, !0;
  }
  function Qm(r, o = 1, s = null) {
    const l = zt(r);
    if (!l) return !1;
    const h = ln().find((M) => String((M == null ? void 0 : M.id) || "").trim() === l);
    if (!h) return !1;
    const m = s && typeof s == "object" ? s : h, b = (m == null ? void 0 : m.transform) || {}, g = Math.max(0.01, Number(b.scale || 1)), x = G(g * Math.max(0.01, Number(o || 1)), 0.01, 100);
    return h.transform || (h.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), h.transform.scale = x, !0;
  }
  function bt() {
    const r = String(f.selectedId || "");
    if (!r) return null;
    const o = fi(r);
    if (o) return o;
    const s = ui(r);
    return s || (t === "cutout" ? Ks().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null : er().find((l) => String((l == null ? void 0 : l.id) || "") === r) || null);
  }
  function Tn() {
    const r = Array.isArray(f.selectedIds) && f.selectedIds.length ? f.selectedIds : f.selectedId ? [f.selectedId] : [], o = [], s = /* @__PURE__ */ new Set();
    return r.forEach((l) => {
      const h = String(l || "").trim();
      if (!h || s.has(h)) return;
      s.add(h);
      const m = h === String(f.selectedId || "") ? bt() : fi(h) || ui(h) || (t === "cutout" ? Ks().find((b) => String((b == null ? void 0 : b.id) || "") === h) : er().find((b) => String((b == null ? void 0 : b.id) || "") === h));
      m && o.push(m);
    }), o;
  }
  function Ys(r = null) {
    const o = Array.isArray(r) ? r : Tn();
    if (!o || o.length < 2) return null;
    const s = o.map((M) => jt(M)).filter((M) => (M == null ? void 0 : M.visible) && Array.isArray(M.corners) && M.corners.length);
    if (!s.length) return null;
    const l = s.flatMap((M) => M.corners.map((P) => Number((P == null ? void 0 : P.x) || 0))), h = s.flatMap((M) => M.corners.map((P) => Number((P == null ? void 0 : P.y) || 0))), m = Math.min(...l), b = Math.max(...l), g = Math.min(...h), x = Math.max(...h);
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
  function lu(r) {
    const o = String((r == null ? void 0 : r.id) || "").trim();
    return !!o && Array.isArray(f.selectedIds) && f.selectedIds.includes(o);
  }
  function Za() {
    const r = bt();
    return r ? Rt(r) || qt(r) ? "stroke" : mn(r) ? "frame" : "image" : null;
  }
  function tr(r) {
    if (!r || typeof r != "object") return !1;
    if (Rt(r)) {
      const o = String(r.actionGroupId || r.id || "").trim(), s = Yt().find((l) => String((l == null ? void 0 : l.actionGroupId) || (l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    if (qt(r)) {
      const o = zt(r.rasterObjectId || r.id || ""), s = ln().find((l) => String((l == null ? void 0 : l.id) || "").trim() === o);
      return (s == null ? void 0 : s.locked) === !0;
    }
    return r.locked === !0;
  }
  function qs(r = null) {
    const o = Array.isArray(r) ? r : Tn();
    return o.length > 0 && o.every((s) => tr(s));
  }
  function ep(r, o) {
    const s = o === !0;
    if (!r || typeof r != "object") return !1;
    if (Rt(r)) {
      const l = String(r.actionGroupId || r.id || "").trim(), h = Yt().find((m) => String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim() === l);
      return !h || h.locked === s ? !1 : (h.locked = s, !0);
    }
    if (qt(r)) {
      const l = zt(r.rasterObjectId || r.id || ""), h = ln().find((m) => String((m == null ? void 0 : m.id) || "").trim() === l);
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
    r.forEach((l) => {
      ep(l, o) && (s = !0);
    }), s && (Ze(), it(), Ge(), fe());
  }
  function di(r) {
    f.selectedId = (r == null ? void 0 : r.id) || null, f.selectedIds = r != null && r.id ? [r.id] : [], r && gt(r) ? v.active.selected_sticker_id = r.id || null : v.active.selected_sticker_id = null, r && mn(r) ? v.active.selected_shot_id = r.id || null : r ? mn(r) || (v.active.selected_shot_id = v.active.selected_shot_id) : v.active.selected_shot_id = null;
  }
  function np(r, o = null) {
    const s = [], l = /* @__PURE__ */ new Set();
    (Array.isArray(r) ? r : []).forEach((b) => {
      const g = String((b == null ? void 0 : b.id) || "").trim();
      !g || l.has(g) || (l.add(g), s.push(g));
    }), f.selectedIds = s;
    const h = String(o || "").trim();
    f.selectedId = h && s.includes(h) ? h : s[s.length - 1] || null;
    const m = bt();
    v.active.selected_sticker_id = m && gt(m) && m.id || null, m && mn(m) ? v.active.selected_shot_id = m.id || null : s.length || (v.active.selected_shot_id = null);
  }
  function cu() {
    const r = (Array.isArray(v.shots) ? v.shots : []).map((s, l) => ({
      kind: "frame",
      item: s,
      label: String((s == null ? void 0 : s.label) || `Frame ${l + 1}`)
    })), o = (Array.isArray(v.stickers) ? v.stickers : []).map((s, l) => {
      var m, b;
      const h = Ut(s) ? String(s.id || Wr) : String(((b = (m = v.assets) == null ? void 0 : m[s.asset_id]) == null ? void 0 : b.name) || s.asset_id || s.id || `Image ${l + 1}`);
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
  function uu() {
    return Us();
  }
  function Ut(r) {
    return !r || typeof r != "object" ? !1 : String(r.id || "") === Wr || String(r.source_kind || "") === Wl;
  }
  function hi(r) {
    return !!(r && typeof r == "object" && r.visible === !1);
  }
  function ip(r) {
    return Ut(r) && hi(r) ? cm : 1;
  }
  function ap() {
    return f.primaryTool === "mask" ? f.maskTool : f.paintTool;
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
    }, l = el(Yl, () => {
      fe();
    });
    return l && (l.complete || l.naturalWidth || l.width) && (s.vFOV_deg = zr(
      s.hFOV_deg,
      Number(l.naturalWidth || l.width || 1),
      Number(l.naturalHeight || l.height || 1)
    )), s;
  }
  function up() {
    const r = bt();
    if (!r || !Ut(r)) return !1;
    const o = cp(r);
    if (!o) return !1;
    const s = (l, h) => Math.abs(Number(l || 0) - Number(h || 0)) <= 1e-4;
    return !(s(r.yaw_deg, o.yaw_deg) && s(r.pitch_deg, o.pitch_deg) && s(r.hFOV_deg, o.hFOV_deg) && s(r.vFOV_deg, o.vFOV_deg) && s(r.rot_deg, o.rot_deg));
  }
  function Js(r) {
    var s;
    const o = Ca(e == null ? void 0 : e.id);
    return Array.isArray((s = o == null ? void 0 : o.ui) == null ? void 0 : s[r]) ? o.ui[r] : Array.isArray(o == null ? void 0 : o[r]) ? o[r] : [];
  }
  function fu(r) {
    const o = Ca(e == null ? void 0 : e.id);
    return o != null && o.ui && Object.prototype.hasOwnProperty.call(o.ui, r) ? o.ui[r] : o && Object.prototype.hasOwnProperty.call(o, r) ? o[r] : null;
  }
  function du() {
    const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    return hs(r) ? { videoKey: "pano_videos", metaKey: "pano_video_meta" } : t === "stickers" || t === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function fp() {
    const { metaKey: r } = du(), o = fu(r);
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
    const o = Math.max(0, Math.floor(Number(r || 0))), s = Math.floor(o / 60), l = o % 60;
    return `${s}:${String(l).padStart(2, "0")}`;
  }
  function Ln(r = {}) {
    const o = Number(r.currentTime ?? me.editorTime ?? 0), s = Number(r.duration ?? k.videoTransport.duration ?? 0), l = Object.prototype.hasOwnProperty.call(r, "ready") ? !!r.ready : !!k.videoTransport.ready, h = Object.prototype.hasOwnProperty.call(r, "playing") ? !!r.playing : !!k.videoTransport.playing, m = Object.prototype.hasOwnProperty.call(r, "visible") ? !!r.visible : !!k.videoTransport.visible, b = Object.prototype.hasOwnProperty.call(r, "muted") ? !!r.muted : !!($ instanceof HTMLVideoElement ? $.muted : k.videoTransport.muted), g = Number(
      Object.prototype.hasOwnProperty.call(r, "volume") ? r.volume : $ instanceof HTMLVideoElement ? $.volume : k.videoTransport.volume
    ), x = Object.prototype.hasOwnProperty.call(r, "hasAudio") ? !!r.hasAudio : Zc($), M = Object.prototype.hasOwnProperty.call(r, "loop") ? !!r.loop : !!k.videoTransport.loop;
    Object.assign(k.videoTransport, {
      ready: l,
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
  function nr() {
    return !!($ instanceof HTMLVideoElement && $.getAttribute("src") && f.primaryTool !== "paint" && f.primaryTool !== "mask");
  }
  function dp() {
    Ln({
      visible: nr()
    });
  }
  function pi() {
    if (!($ instanceof HTMLVideoElement) || Number($.videoWidth || 0) < 1 || Number($.videoHeight || 0) < 1) return !1;
    const r = Number($.videoWidth || 0), o = Number($.videoHeight || 0);
    (Te.width !== r || Te.height !== o) && (Te.width = r, Te.height = o);
    const s = Te.getContext("2d");
    return s ? (s.clearRect(0, 0, r, o), s.drawImage($, 0, 0, r, o), Te.__panoFrameIdx = Number(Te.__panoFrameIdx || 0) + 1, me.presentedTime = Number(me.editorTime || $.currentTime || 0), !0) : !1;
  }
  function hu() {
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
    const { videoKey: r } = du(), o = Js(r)[0] || null, s = o && typeof o == "object" ? Va(o) : si(o), l = fp(), h = Math.max(0, Number((l == null ? void 0 : l.frames) || 0)), m = Math.max(1, Number((l == null ? void 0 : l.fps) || 24)), b = Number((l == null ? void 0 : l.duration) || (h > 0 ? h / m : 0)), g = !!(l != null && l.has_audio) || Zc($);
    return s && $.dataset.panoSrc !== s ? ($.pause(), $.dataset.panoSrc = s, $.dataset.panoFrameIdx = "0", $.loop = !!k.videoTransport.loop, $.muted = !!k.videoTransport.muted, $.volume = Math.max(0, Math.min(1, Number(k.videoTransport.volume ?? 1))), $.src = s, $.load(), Qc(s, b, m)) : !s && $.getAttribute("src") && ($.pause(), $.removeAttribute("src"), $.load(), Ya()), $.loop !== !!k.videoTransport.loop && ($.loop = !!k.videoTransport.loop), s && (!Array.isArray(k.videoTransport.thumbnails) || k.videoTransport.thumbnails.length === 0) && Qc(s, b, m), s || Ya(), Ln({
      ready: !!s,
      playing: !$.paused && !$.ended,
      visible: !!s && f.primaryTool !== "paint" && f.primaryTool !== "mask",
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
      const l = r[0];
      if (l && typeof l == "object" && !Array.isArray(l)) return l;
    }
    if (Array.isArray(o) && o.length > 0) {
      const l = (s = o[0]) == null ? void 0 : s.parsed_state;
      if (l && typeof l == "object" && !Array.isArray(l))
        return {
          yaw_deg: Number(l.yaw_deg || 0),
          pitch_deg: Number(l.pitch_deg || 0),
          hFOV_deg: Number(l.hFOV_deg || 30),
          rot_deg: Number(l.roll_deg || 0)
        };
    }
    return null;
  }
  function el(r, o = null) {
    const s = Js(r), l = Array.isArray(s) && s.length ? s[0] : null, h = si(l);
    if (!h) return null;
    const m = `__ui__${r}`, b = ge.get(m);
    if (b && b.__panoSrc === h) return b;
    const g = new Image();
    return g.__panoSrc = h, za(g, h), g.onload = () => {
      ja(g, h), typeof o == "function" ? o(g) : fe();
    }, g.onerror = () => {
      oi(g, h), typeof o == "function" ? o(g) : fe();
    }, g.src = h, ge.set(m, g), g;
  }
  function mu(r = null) {
    const o = Bo(e, ["sticker_image"], r, "sticker_image_exact");
    return o || el(Yl, r);
  }
  function pu(r) {
    const o = String(r || "");
    let s = 2166136261;
    for (let l = 0; l < o.length; l += 1)
      s ^= o.charCodeAt(l), s = Math.imul(s, 16777619);
    return String(s >>> 0);
  }
  function zr(r, o, s) {
    const l = Math.max(1, Number(o || 1)), h = Math.max(1, Number(s || 1)), m = G(Number(r || 30), 0.1, 179) * Ct, b = 2 * Math.atan(Math.tan(m * 0.5) * (h / l));
    return G(b * Sn, 0.1, 179);
  }
  function mp(r) {
    const o = String(r || "").trim();
    if (!o) return null;
    try {
      const s = JSON.parse(o);
      if (!s || typeof s != "object" || String(s.kind || "") !== "pano_sticker_state") return null;
      const l = s.version;
      let h = null;
      if (typeof l == "number" && Number.isInteger(l) ? h = l : typeof l == "string" && /^\d+$/.test(l) && (h = Number.parseInt(l, 10)), h !== 1) return null;
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
  function gu(r) {
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = ns(r);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Vt(Number.isFinite(o) ? o : 0),
        pitch_deg: G(Number.isFinite(s) ? s : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: G(Number.isFinite(h) ? h : 90, 0.1, 179)
      },
      source_aspect: m
    };
  }
  function pp(r) {
    var g;
    if (!r || typeof r != "object") return gu(null);
    const o = Number(r == null ? void 0 : r.yaw_deg), s = Number(r == null ? void 0 : r.pitch_deg), l = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg)), h = Number(r == null ? void 0 : r.hFOV_deg), m = Number(r == null ? void 0 : r.vFOV_deg);
    let b = 1;
    if (Number.isFinite(h) && Number.isFinite(m)) {
      const x = G(h, 0.1, 179) * Ct, M = G(m, 0.1, 179) * Ct, P = Math.tan(M * 0.5);
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
        roll_deg: Number.isFinite(l) ? l : 0,
        hFOV_deg: G(Number.isFinite(h) ? h : 30, 0.1, 179)
      },
      source_aspect: b
    };
  }
  function gp(r) {
    var l, h, m, b, g;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((x) => String((x == null ? void 0 : x.name) || "") === String(r)) : null, s = o == null ? void 0 : o.link;
    if (s != null) {
      const x = $m(e.graph, s), { originId: M, originSlot: P } = zm(x), N = Ca(M), T = [
        N == null ? void 0 : N.output,
        N == null ? void 0 : N.result,
        (l = N == null ? void 0 : N.data) == null ? void 0 : l.output,
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
    const l = r && typeof r == "object" ? {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      roll_deg: Number(r.rot_deg ?? r.roll_deg ?? 0),
      hFOV_deg: Number(r.hFOV_deg || 30)
    } : mp(o);
    if (l) {
      const b = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || l.source_aspect || 1), g = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
      return {
        yaw_deg: Number(l.yaw_deg || 0),
        pitch_deg: Number(l.pitch_deg || 0),
        hFOV_deg: Number(l.hFOV_deg || 30),
        vFOV_deg: zr(l.hFOV_deg, b, g),
        rot_deg: Number(l.roll_deg || 0)
      };
    }
    const h = Number((s == null ? void 0 : s.naturalWidth) || (s == null ? void 0 : s.width) || 1), m = Number((s == null ? void 0 : s.naturalHeight) || (s == null ? void 0 : s.height) || 1);
    return {
      yaw_deg: Number(f.viewYaw || 0),
      pitch_deg: Number(f.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: zr(30, h, m),
      rot_deg: 0
    };
  }
  function bu(r = "sync") {
    if (t !== "stickers" || i) return;
    const o = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.find((z) => String((z == null ? void 0 : z.name) || "") === "sticker_image") : null, s = (o == null ? void 0 : o.link) ?? null, l = mu(() => {
      var z;
      (z = e.__panoExternalStickerSync) == null || z.call(e, "image-loaded");
    }), h = hp(fu("pano_sticker_input_pose"), null), m = gp("sticker_state"), b = pu(h && typeof h == "object" ? JSON.stringify(h) : m), g = Array.isArray(v.stickers) ? v.stickers : v.stickers = [], x = g.findIndex((z) => String((z == null ? void 0 : z.id) || "") === Wr);
    if (s == null) {
      x >= 0 && (g.splice(x, 1), f.selectedId === Wr && (f.selectedId = null, f.selectedIds = [], v.active.selected_sticker_id = null), it(), Ve(), Ge(), fe());
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
      const z = bp(h, m, l);
      Object.assign(P, z, {
        initial_pose: { ...z },
        visible: !0,
        z_index: M + 1
      }), T = !0;
    } else if (l && (l.complete || l.naturalWidth || l.width)) {
      const z = zr(
        Number(P.hFOV_deg || 30),
        Number(l.naturalWidth || l.width || 1),
        Number(l.naturalHeight || l.height || 1)
      );
      Math.abs(Number(P.vFOV_deg || 0) - z) > 1e-6 && (P.vFOV_deg = z, T = !0);
    }
    T && (it(), Ve(), Ge()), fe();
  }
  function Qi(r = {}) {
    const s = r.preservePanelValues !== !1 ? bt() : null;
    s && (f.panelLastValues = {
      yaw_deg: Number(s.yaw_deg || 0),
      pitch_deg: Number(s.pitch_deg || 0),
      hFOV_deg: Number(s.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(s.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(s.rot_deg || 0),
      roll_deg: Number(s.roll_deg || 0),
      aspect_id: Ci(s)
    }), f.selectedId = null, f.selectedIds = [], f.cutoutAspectOpen = !1, v.active.selected_sticker_id = null, v.active.selected_shot_id = null;
  }
  function yp() {
    if (t !== "cutout") return;
    const r = Fe();
    r && (f.selectedId = String(r.id || "") || null, f.selectedIds = f.selectedId ? [f.selectedId] : []);
  }
  function tl() {
    if (t !== "cutout") return;
    const r = Fe();
    Pi(k.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: r ? "Look At Frame" : "Add Frame",
      tip: r ? "Look at frame" : "Add frame",
      icon: r ? Oe.camera : Oe.plus_circle
    });
  }
  function yu() {
    const r = t === "cutout" && f.mode === "frame", o = !r && !!f.showGrid;
    Pi(k.floatingButtons, "action", "reset-view", {
      disabled: i || r
    }), Pi(k.floatingButtons, "action", "toggle-grid", {
      icon: o ? Oe.eye : Oe.eye_dashed,
      pressed: o ? "true" : "false",
      label: o ? "Hide Grid" : "Show Grid",
      tip: o ? "Hide grid" : "Show grid",
      disabled: i || r
    });
  }
  function _r() {
    var s;
    const r = !!Fe();
    f.mode === "frame" && !r && (f.mode = "pano"), f.outputPreviewRect = null, k.viewButtons.forEach((l) => {
      const h = l.key === f.mode;
      l.pressed = h ? "true" : "false", l.visible = !(l.key === "frame" && t !== "cutout"), l.disabled = l.key === "frame" ? !r : !1;
    });
    const o = t === "cutout" && f.mode === "frame" ? Fe() : null;
    k.frameRail.visible = !!o, k.frameRail.disabled = i, k.frameRollKnob.visible = !!o && !i, k.frameRollKnob.disabled = i, k.frameRollKnob.rollDeg = Number((o == null ? void 0 : o.roll_deg) ?? (o == null ? void 0 : o.rot_deg) ?? 0), k.frameRollKnob.displayValue = ma(k.frameRollKnob.rollDeg), k.frameRollKnob.dragging = ((s = f.interaction) == null ? void 0 : s.kind) === "roll_frame", k.frameRollKnob.armed = !!o && f.altModifier === !0, k.frameRail.rollKnob = k.frameRollKnob, k.frameRail.aspectChoices = ["1:1", "4:3", "3:2", "16:9"].map((l) => ({
      value: l,
      label: l,
      active: !!o && String(Ci(o)) === l
    })), o || (k.frameRail.aspectOpen = !1), k.outputPreviewToggle.visible = t === "cutout" && f.mode !== "frame" && !!Fe(), t === "cutout" && k.cameraPreview && (k.cameraPreview.visible = f.mode !== "frame", k.cameraPreview.expanded = !!f.outputPreviewExpanded, k.cameraPreview.settled = k.cameraPreview.settled === !0 && oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame), yu(), Zu() ? ct(f.pointerPos) : We(f.mode === "pano" ? "grab" : "default");
  }
  function vp() {
    const o = Nu({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !o || o.length !== 4 ? !1 : o[0].y >= o[3].y;
  }
  function nl() {
    const r = jn(f.viewYaw, f.viewPitch);
    let o = qn(0, 1, 0);
    Math.abs(On(r, o)) > 0.999 && (o = qn(0, 0, 1));
    const s = Ai($o(o, r)), l = Ai($o(r, s));
    return { right: s, up: l, fwd: r };
  }
  function ea(r) {
    const { right: o, up: s, fwd: l } = nl(), h = On(r, o), m = On(r, s), b = On(r, l);
    if (b <= 1e-5) return null;
    const g = F.width, x = F.height, M = f.viewFov * Ct, P = 2 * Math.atan(Math.tan(M / 2) * (x / g)), N = g / 2 / Math.tan(M / 2), T = x / 2 / Math.tan(P / 2);
    return {
      x: g / 2 + h / b * N,
      y: x / 2 - m / b * T,
      z: b
    };
  }
  function rl(r, o) {
    const { right: s, up: l, fwd: h } = nl(), m = F.width, b = F.height, g = f.viewFov * Ct, x = 2 * Math.atan(Math.tan(g / 2) * (b / m)), M = (r - m / 2) / (m / 2) * Math.tan(g / 2), P = (b / 2 - o) / (b / 2) * Math.tan(x / 2), N = Fo(Fo(Lo(s, M), Lo(l, P)), h);
    return Ai(N);
  }
  function xr() {
    const r = F.width, o = F.height, s = 2;
    if (r / Math.max(o, 1) >= s) {
      const g = o, x = g * s;
      return { x: (r - x) * 0.5, y: 0, w: x, h: g };
    }
    const h = r, m = h / s;
    return { x: 0, y: (o - m) * 0.5, w: h, h: m };
  }
  function vu(r) {
    var b;
    if (r && typeof r == "object" && (Ut(r) || r.external === !0))
      return mu(() => {
        var g;
        (g = e.__panoExternalStickerSync) == null || g.call(e, "image-loaded");
      });
    const o = String(r && typeof r == "object" ? r.asset_id || r.assetId || "" : r || "");
    if (!o) return null;
    const s = ge.get(o);
    if (s) return s;
    const l = (b = v.assets) == null ? void 0 : b[o], h = pS(l);
    if (!h) return null;
    const m = new Image();
    return za(m, h), m.onload = () => {
      ja(m, h), fe();
    }, m.onerror = () => {
      oi(m, h), fe();
    }, m.src = h, ge.set(o, m), m;
  }
  function _u(r, o = null) {
    const s = String((r == null ? void 0 : r.rasterDataUrl) || "").trim();
    if (!s) return null;
    const l = Se.get(s);
    if (l)
      return l.complete || l.width || l.naturalWidth, l;
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
    const l = _u(r, () => {
      const P = Ie.get(o);
      P && (P.ready = !1), fe({ localOnly: !0 });
    });
    if (!l || !(l.complete || l.width || l.naturalWidth)) return null;
    const h = Number(l.naturalWidth || l.width || 0), m = Number(l.naturalHeight || l.height || 0);
    if (h < 1 || m < 1) return null;
    const b = document.createElement("canvas");
    b.width = h, b.height = m;
    const g = b.getContext("2d", { willReadFrequently: !0 });
    if (!g) return null;
    g.clearRect(0, 0, h, m), g.drawImage(l, 0, 0, h, m);
    const x = g.getImageData(0, 0, h, m).data, M = { canvas: b, width: h, height: m, alpha: x, ready: !0 };
    return Ie.set(o, M), M;
  }
  function xp(r, o, s = 1, l = 0) {
    if (!r || typeof r != "object") return r;
    const h = Number((o == null ? void 0 : o.u) || 0), m = Number((o == null ? void 0 : o.v) || 0), b = xn(Number(r.u || 0), h), g = Number(r.v || 0) - m, x = Math.max(0.02, Number(s || 1)), M = Number(l || 0) * Ct, P = Math.cos(M), N = Math.sin(M), T = b / x, z = g / x, q = T * P + z * N, B = -T * N + z * P;
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
    const l = (r == null ? void 0 : r.transform) || {}, h = {
      u: (Number(s.u0 || 0) + Number(s.u1 || 0)) * 0.5,
      v: (Number(s.v0 || 0) + Number(s.v1 || 0)) * 0.5
    }, m = {
      u: ((Number(o.u || 0) - Number(l.du || 0)) % 1 + 1) % 1,
      v: Number(o.v || 0) - Number(l.dv || 0)
    }, b = xp(
      m,
      h,
      Number(l.scale || 1),
      Number(l.rot_deg || 0)
    ), g = Number(s.u1 || 0) - Number(s.u0 || 0), x = Number(s.v1 || 0) - Number(s.v0 || 0);
    if (!(g > 1e-6) || !(x > 1e-6)) return null;
    const M = xn(Number(b.u || 0), Number(s.u0 || 0)) / g, P = (Number(b.v || 0) - Number(s.v0 || 0)) / x;
    if (M < 0 || M > 1 || P < 0 || P > 1) return 0;
    const N = _p(r);
    if (!N) return null;
    const T = G(Math.floor(M * N.width), 0, N.width - 1), z = G(Math.floor(P * N.height), 0, N.height - 1);
    return Number(N.alpha[(z * N.width + T) * 4 + 3] || 0);
  }
  function xu(r, o, s, l = null) {
    if (!(o != null && o.visible) || !sr(s, o.corners)) return !1;
    const h = l || Dn(s, performance.now()), m = wp(r, h);
    return m === null ? !0 : m > 8;
  }
  function Sp() {
    var l, h, m, b, g, x, M, P;
    const r = ((h = (l = f.paintEngine) == null ? void 0 : l.getErpTarget) == null ? void 0 : h.call(l, Bs(!1))) || null, o = Math.max(1, Number(((m = r == null ? void 0 : r.descriptor) == null ? void 0 : m.width) || ((g = (b = r == null ? void 0 : r.displayPaint) == null ? void 0 : b.canvas) == null ? void 0 : g.width) || 2048)), s = Math.max(1, Number(((x = r == null ? void 0 : r.descriptor) == null ? void 0 : x.height) || ((P = (M = r == null ? void 0 : r.displayPaint) == null ? void 0 : M.canvas) == null ? void 0 : P.height) || 1024));
    return { width: o, height: s };
  }
  function Mp() {
    var z, q, B;
    const r = f.interaction;
    if ((r == null ? void 0 : r.kind) !== "paint_stroke") return null;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || String((o == null ? void 0 : o.layerKind) || "") !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return null;
    const s = pn(), l = `${qa()}:${s.width}:${s.height}`;
    if (((z = f._activePaintEraserPreviewInfo) == null ? void 0 : z.cacheKey) === l)
      return f._activePaintEraserPreviewInfo.value || null;
    const h = Jt(o), m = (h == null ? void 0 : h.geometry) || null;
    if (m && String(m.geometryKind || "") !== "lasso_fill") {
      const Y = Array.isArray(m.rawPoints) && m.rawPoints.length ? m.rawPoints : Array.isArray(m.points) ? m.points : [];
      m.processedPoints = fl(Y, h.targetSpace, !0);
    }
    const b = na(s.width, s.height, { readback: !0 });
    if (!$u(b, h, { w: s.width, h: s.height })) return null;
    const g = ((B = (q = b.ctx) == null ? void 0 : q.getImageData(0, 0, s.width, s.height)) == null ? void 0 : B.data) || null;
    if (!g) return null;
    let x = s.width, M = s.height, P = -1, N = -1;
    for (let Y = 0; Y < s.height; Y += 1)
      for (let re = 0; re < s.width; re += 1)
        g[(Y * s.width + re) * 4 + 3] <= 8 || (re < x && (x = re), Y < M && (M = Y), re > P && (P = re), Y > N && (N = Y));
    if (P < x || N < M)
      return f._activePaintEraserPreviewInfo = { cacheKey: l, value: null }, null;
    const T = {
      surface: b,
      bounds: { minX: x, minY: M, maxX: P, maxY: N },
      key: `${l}:${x}:${M}:${P}:${N}`
    };
    return f._activePaintEraserPreviewInfo = { cacheKey: l, value: T }, f._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), T;
  }
  function bi() {
    f._activePaintEraserPreviewInfo = null, f._liveEraserPreviewCanvasCache = null;
  }
  function Np(r, o, s) {
    var l, h;
    if (!r) return null;
    if (r.type === "rasterObject" && ((l = r.item) != null && l.bbox)) {
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
      const m = Cn(r.actionGroupId, "paint"), b = vr(r.actionGroupId, "paint", m);
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
    const l = (b) => b.wraps ? [
      { minX: 0, maxX: b.maxX, minY: b.minY, maxY: b.maxY, wraps: !1 },
      { minX: b.minX, maxX: s - 1, minY: b.minY, maxY: b.maxY, wraps: !1 }
    ] : [b], h = l(r), m = l(o);
    return h.some((b) => m.some((g) => !(b.maxX < g.minX || g.maxX < b.minX || b.maxY < g.minY || g.maxY < b.minY)));
  }
  function Pp(r, o, s) {
    var be, Ee, Le, Ke, de, Z, ue;
    if (!r || !o || !((be = s == null ? void 0 : s.surface) != null && be.canvas) || o.type !== "rasterObject") return r;
    const l = Number(r.width || s.surface.canvas.width || 0), h = Number(r.height || s.surface.canvas.height || 0);
    if (l < 1 || h < 1) return r;
    const m = Np(o, l, h);
    if (m && !kp(m, s.bounds, l)) return r;
    const b = String(((Ee = o.item) == null ? void 0 : Ee.id) || o.id || ""), g = ((Le = o.item) == null ? void 0 : Le.transform) || {}, x = `${s.key}:${b}:${l}:${h}:${Number(g.du || 0).toFixed(6)}:${Number(g.dv || 0).toFixed(6)}:${Number(g.rot_deg || 0).toFixed(3)}:${Number(g.scale || 1).toFixed(4)}`, M = f._liveEraserPreviewCanvasCache instanceof Map ? f._liveEraserPreviewCanvasCache : f._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (M.has(x)) return M.get(x);
    const P = G(Math.floor(Number(((Ke = s.bounds) == null ? void 0 : Ke.minX) || 0)), 0, Math.max(0, l - 1)), N = G(Math.floor(Number(((de = s.bounds) == null ? void 0 : de.minY) || 0)), 0, Math.max(0, h - 1)), T = G(Math.ceil(Number(((Z = s.bounds) == null ? void 0 : Z.maxX) || 0)), P, Math.max(0, l - 1)), z = G(Math.ceil(Number(((ue = s.bounds) == null ? void 0 : ue.maxY) || 0)), N, Math.max(0, h - 1)), q = Math.max(1, T - P + 1), B = Math.max(1, z - N + 1), Y = na(l, h, { readback: !0 });
    Y.ctx.clearRect(0, 0, l, h), Y.ctx.drawImage(r, 0, 0);
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
  function wu(r, o = null) {
    const s = zt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), l = (r == null ? void 0 : r.bbox) || null;
    if (!s || !l) return null;
    const h = _u(r, o);
    if (!h || !(h.complete || h.width || h.naturalWidth)) return null;
    const { width: m, height: b } = Sp(), g = (r == null ? void 0 : r.transform) || {}, x = [
      s,
      m,
      b,
      l.u0,
      l.v0,
      l.u1,
      l.v1,
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
    const T = Number(l.u0 || 0) * m, z = Number(l.v0 || 0) * b, q = Math.max(1, (Number(l.u1 || 0) - Number(l.u0 || 0)) * m), B = Math.max(1, (Number(l.v1 || 0) - Number(l.v0 || 0)) * b), Y = T + q * 0.5 + Number(g.du || 0) * m, re = z + B * 0.5 + Number(g.dv || 0) * b, le = Number(g.rot_deg || 0) * Ct, ee = Math.max(0.01, Number(g.scale || 1));
    for (const be of [-m, 0, m])
      N.save(), N.translate(Y + be, re), N.rotate(le), N.scale(ee, ee), N.drawImage(h, -q * 0.5, -B * 0.5, q, B), N.restore();
    return Re.set(x, P), P;
  }
  function Ap() {
    return Ls(v, {
      selectedId: f.selectedId || null,
      hoveredId: null,
      includeHidden: !0
    });
  }
  function Cp(r) {
    return um(
      v,
      (o, s, l) => vu(l || o),
      { scene: r }
    );
  }
  function Su(r, o, s, l, h = "modal_object_view") {
    if (!r || !o || !s) return !1;
    String((s == null ? void 0 : s.mode) || "");
    const m = wr(l);
    if (Cu(o, s))
      return $p(
        o,
        s,
        m && f.showPanorama ? l : null,
        `${h}_bg_gl`
      );
    const g = no(), x = ro(g), M = f.showObjects ? io() : ta([]), N = ba({
      stateRevision: [
        h,
        m ? mi(l) : "no_bg",
        Array.isArray(x) ? x.map((B) => `${String((B == null ? void 0 : B.assetId) || "")}:${String((B == null ? void 0 : B.revision) || "")}`).join(",") : "none",
        M.length ? M.map((B) => `${String((B == null ? void 0 : B.id) || "")}:${String((B == null ? void 0 : B.revision) || "")}:${Number((B == null ? void 0 : B.zIndex) || 0)}`).join(",") : "paint:none"
      ].join("|"),
      backgroundSource: m && f.showPanorama ? l : null,
      backgroundRevision: m ? `${h}:${mi(l)}` : "",
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
    const l = await on.fetchApi("/upload/image", { method: "POST", body: s });
    if (!l || l.status !== 200)
      throw new Error(`upload failed (${(l == null ? void 0 : l.status) || "no-response"})`);
    const h = await l.json(), m = String((h == null ? void 0 : h.name) || "").trim();
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
    const s = await new Promise((g) => r.toBlob(g, "image/png")), l = new FormData();
    l.append("image", s, o), l.append("type", "input"), l.append("subfolder", "panorama_stickers"), l.append("overwrite", "1");
    const h = await on.fetchApi("/upload/image", { method: "POST", body: l });
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
  let Qa = null, eo = !1;
  function Tp() {
    const r = Gd(v.painting);
    if (r.totalPaintCount <= 0 && r.totalMaskCount <= 0) return !1;
    const o = v.painting_layer, s = _i();
    return !o || typeof o != "object" || String(o.revision || "") !== s || r.totalPaintCount > 0 && !o.paint || r.totalMaskCount > 0 && !o.mask;
  }
  function Mu() {
    const r = String(e.id ?? "0"), o = Eo.get(r);
    if (eo && o) return o;
    const s = (async () => {
      var m, b, g, x, M, P, N, T, z, q, B, Y;
      const l = _i(), h = Gd(v.painting);
      if (h.totalPaintCount <= 0 && h.totalMaskCount <= 0) {
        v.painting_layer !== null && (v.painting_layer = null, Qa = l, gn());
        return;
      }
      if (Qa !== l && !eo) {
        eo = !0;
        try {
          lo();
          const re = Bs(!1), le = ((b = (m = f.paintEngine) == null ? void 0 : m.getErpTarget) == null ? void 0 : b.call(m, re)) || null, ee = ((g = le == null ? void 0 : le.displayPaint) == null ? void 0 : g.canvas) || null, be = ((x = le == null ? void 0 : le.committedMask) == null ? void 0 : x.canvas) || null, Ee = Math.max(1, Number(((M = le == null ? void 0 : le.descriptor) == null ? void 0 : M.width) || (ee == null ? void 0 : ee.width) || (be == null ? void 0 : be.width) || 2048)), Le = Math.max(1, Number(((P = le == null ? void 0 : le.descriptor) == null ? void 0 : P.height) || (ee == null ? void 0 : ee.height) || (be == null ? void 0 : be.height) || 1024));
          (!ee && h.totalPaintCount > 0 || !be && h.totalMaskCount > 0) && ((!f._paintLayerSyncBlankSurface || Number(((N = f._paintLayerSyncBlankSurface.canvas) == null ? void 0 : N.width) || 0) !== Ee || Number(((T = f._paintLayerSyncBlankSurface.canvas) == null ? void 0 : T.height) || 0) !== Le) && (f._paintLayerSyncBlankSurface = na(Ee, Le)), f._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, Ee, Le));
          const Ke = ee || h.totalPaintCount > 0 && ((z = f._paintLayerSyncBlankSurface) == null ? void 0 : z.canvas) || null, de = be || h.totalMaskCount > 0 && ((q = f._paintLayerSyncBlankSurface) == null ? void 0 : q.canvas) || null;
          if (!Ke && !de) return;
          let Z = null, ue = null;
          const Ce = [];
          if (h.totalPaintCount > 0) {
            Z = await al(Ke, `pano_paint_${r}.png`);
            for (const Ae of re) {
              const Ne = String(Ae || "").trim();
              if (!Ne) continue;
              const je = ((Y = (B = f.paintEngine) == null ? void 0 : B.getGroupDisplayCanvas) == null ? void 0 : Y.call(B, Ne)) || null;
              if (!je) continue;
              const qe = Ne.replace(/[^a-zA-Z0-9_-]+/g, "_"), He = await al(je, `pano_group_${r}_${qe}.png`);
              He && Ce.push({
                id: Ne,
                actionGroupId: Ne,
                image: He
              });
            }
          }
          h.totalMaskCount > 0 && (ue = await al(de, `pano_mask_${r}.png`)), l === _i() && (v.painting_layer = {
            paint: Z,
            mask: ue,
            groups: Ce,
            revision: l
          }, Qa = l, gn());
        } catch (re) {
          throw re;
        } finally {
          eo = !1;
        }
      }
    })();
    return Eo.set(r, s), s.finally(() => {
      Eo.get(r) === s && Eo.delete(r);
    }), s;
  }
  function jr() {
    if (t === "cutout") {
      const g = hu();
      if (g) return g;
      const x = Bo(
        e,
        ["erp_image", "bg_erp"],
        () => fe(),
        "background:cutout:erp_image|bg_erp"
      );
      return x && !Kl(x) ? x : Yd(e, "pano_input_images", ge, () => fe()) || x || null;
    }
    const r = hu();
    if (r) return r;
    const o = Yd(e, "pano_input_images", ge, () => fe());
    if (o && !Kl(o)) return o;
    const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.map((g) => String((g == null ? void 0 : g.name) || "")) : [], l = s.includes("erp_image"), h = s.includes("bg_erp");
    let m = [];
    return i && (l || h) ? m = l ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : m = t === "stickers" ? ["bg_erp", "erp_image"] : ["erp_image", "bg_erp"], Bo(e, m, () => fe(), `background:${m.join("|")}`) || o || null;
  }
  function wr(r) {
    return r ? r instanceof HTMLImageElement ? !!r.complete && Number(r.naturalWidth || r.width || 0) > 0 && Number(r.naturalHeight || r.height || 0) > 0 : r instanceof HTMLVideoElement ? Number(r.videoWidth || 0) > 0 && Number(r.videoHeight || 0) > 0 && Number(r.readyState || 0) >= 2 : Number(r.width || r.naturalWidth || 0) > 0 && Number(r.height || r.naturalHeight || 0) > 0 : !1;
  }
  function Ip() {
    let r = Yi;
    const o = [];
    if (f.showPanorama) {
      const s = jr();
      r = wc(s, wr);
    }
    if (f.showObjects) {
      const s = Array.isArray(v.stickers) ? v.stickers : [];
      for (const l of s) {
        if ((l == null ? void 0 : l.visible) === !1) continue;
        const h = vu(l);
        o.push(wc(h, wr));
      }
    }
    return Cw({
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
    const { lon: s, lat: l } = ol(r), h = xr();
    let m = h.x + (s / (2 * Math.PI) + 0.5) * h.w;
    const b = h.y + (0.5 - l / Math.PI) * h.h;
    if (o !== null) {
      for (; m - o > h.w / 2; ) m -= h.w;
      for (; m - o < -h.w / 2; ) m += h.w;
    }
    return { x: m, y: b, z: 1 };
  }
  function to(r) {
    const o = jn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0));
    let s = qn(0, 1, 0);
    Math.abs(On(o, s)) > 0.999 && (s = qn(0, 0, 1));
    const l = Ai($o(s, o)), h = Ai($o(o, l)), m = Math.tan(G(Number(r.hFOV_deg || 20), 0.1, 179) * 0.5 * Ct), b = Math.tan(G(Number(r.vFOV_deg || 20), 0.1, 179) * 0.5 * Ct), g = Number(r.rot_deg || r.roll_deg || 0) * Ct, x = Math.cos(g), M = Math.sin(g);
    return {
      centerDir: o,
      right: l,
      up: h,
      tanX: m,
      tanY: b,
      cr: x,
      sr: M
    };
  }
  function Sr(r, o, s) {
    const l = o * r.cr - s * r.sr, h = o * r.sr + s * r.cr;
    return Ai(Fo(Fo(r.centerDir, Lo(r.right, l)), Lo(r.up, h)));
  }
  function Nu(r) {
    const o = to(r);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: l, v: h }) => Sr(o, l * o.tanX, h * o.tanY));
  }
  function ku(r, o, s) {
    const l = to(r), h = (o * 2 - 1) * l.tanX, m = (1 - s * 2) * l.tanY;
    return Sr(l, h, m);
  }
  function Pu(r) {
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
    }, l = Math.max(0.01, Number(((x = r == null ? void 0 : r.transform) == null ? void 0 : x.scale) || 1)), h = Number(((M = r == null ? void 0 : r.transform) == null ? void 0 : M.rot_deg) || 0), m = Number(((P = r == null ? void 0 : r.transform) == null ? void 0 : P.du) || 0), b = Number(((N = r == null ? void 0 : r.transform) == null ? void 0 : N.dv) || 0);
    return [
      { u: Number(o.u0 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v0 || 0) },
      { u: Number(o.u1 || 0), v: Number(o.v1 || 0) },
      { u: Number(o.u0 || 0), v: Number(o.v1 || 0) }
    ].map((T) => Xa(Ja(T, s, l, h), m, b));
  }
  function Ep(r) {
    const o = zt((r == null ? void 0 : r.rasterObjectId) || (r == null ? void 0 : r.id) || ""), s = (r == null ? void 0 : r.transform) || {}, l = (r == null ? void 0 : r.bbox) || {}, h = `${o}:${f.mode}:${ra()}:${l.u0}:${l.v0}:${l.u1}:${l.v1}:${s.du}:${s.dv}:${s.rot_deg}:${s.scale}`;
    if (f.mode === "frame") {
      const m = Fe(), b = m ? Ft(m) : null;
      return `${h}:frame:${String((m == null ? void 0 : m.id) || "")}:${Math.round(Number((b == null ? void 0 : b.x) || 0))}:${Math.round(Number((b == null ? void 0 : b.y) || 0))}:${Math.round(Number((b == null ? void 0 : b.w) || 0))}:${Math.round(Number((b == null ? void 0 : b.h) || 0))}`;
    }
    return `${h}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((F == null ? void 0 : F.width) || 0))}:${Math.round(Number((F == null ? void 0 : F.height) || 0))}`;
  }
  function Op(r) {
    const o = String((r == null ? void 0 : r.id) || ""), l = [
      mn(r) ? "frame" : gt(r) ? "sticker" : "item",
      o,
      f.mode,
      Number((r == null ? void 0 : r.yaw_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.pitch_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.hFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.vFOV_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.rot_deg) || 0).toFixed(4),
      Number((r == null ? void 0 : r.roll_deg) || 0).toFixed(4),
      Ci(r)
    ].join(":");
    if (f.mode === "frame") {
      const h = Fe(), m = h ? Ft(h) : null;
      return `${l}:frame:${String((h == null ? void 0 : h.id) || "")}:${Math.round(Number((m == null ? void 0 : m.x) || 0))}:${Math.round(Number((m == null ? void 0 : m.y) || 0))}:${Math.round(Number((m == null ? void 0 : m.w) || 0))}:${Math.round(Number((m == null ? void 0 : m.h) || 0))}`;
    }
    return `${l}:view:${Math.round(Number(f.viewYaw || 0) * 100)}:${Math.round(Number(f.viewPitch || 0) * 100)}:${Math.round(Number(f.viewFov || 0) * 100)}:${Math.round(Number((F == null ? void 0 : F.width) || 0))}:${Math.round(Number((F == null ? void 0 : F.height) || 0))}`;
  }
  function Rp() {
    var o;
    const r = String(((o = v.ui_settings) == null ? void 0 : o.preview_quality) || "balanced");
    return r === "draft" ? f.hqFrames && f.hqFrames > 0 ? [28, 20] : f.interaction ? [12, 9] : [20, 14] : r === "high" ? f.hqFrames && f.hqFrames > 0 ? [48, 36] : f.interaction ? [20, 14] : [36, 26] : f.hqFrames && f.hqFrames > 0 ? [40, 30] : f.interaction ? [16, 12] : [28, 20];
  }
  function Au() {
    var r;
    return !!J && !!((r = we == null ? void 0 : we.isSupported) != null && r.call(we));
  }
  function Cu(r, o) {
    return !Au() || t !== "stickers" && t !== "cutout" || String((o == null ? void 0 : o.mode) || "") !== "panorama" ? !1 : Number((r == null ? void 0 : r.x) || 0) === 0 && Number((r == null ? void 0 : r.y) || 0) === 0 && Math.round(Number((r == null ? void 0 : r.w) || 0)) === Math.round(Number((F == null ? void 0 : F.width) || 0)) && Math.round(Number((r == null ? void 0 : r.h) || 0)) === Math.round(Number((F == null ? void 0 : F.height) || 0));
  }
  function no() {
    return f.showObjects ? Ap() : { stickers: [], selectedId: null, hoveredId: null };
  }
  function ro(r) {
    return !f.showObjects || !Array.isArray(r == null ? void 0 : r.stickers) || r.stickers.length === 0 ? [] : Cp(r);
  }
  function Tu() {
    var r, o;
    return ((o = (r = f.paintEngine) == null ? void 0 : r.getMaskDisplayCanvas) == null ? void 0 : o.call(r)) || null;
  }
  function Fp() {
    return Tu() ? `${dl()}:mask_display` : "";
  }
  function ta(r) {
    if (!f.showMask) return r;
    const o = Tu();
    if (!o) return r;
    const s = Fp(), l = r.reduce((b, g) => Math.max(b, Number((g == null ? void 0 : g.zIndex) || 0)), -1), h = (Array.isArray(v.stickers) ? v.stickers : []).reduce((b, g) => Math.max(b, Number((g == null ? void 0 : g.z_index) || 0)), -1), m = Math.max(l, h);
    return r.push({
      id: "mask_display",
      source: o,
      revision: s,
      zIndex: m + 1,
      opacity: 1,
      visible: !0
    }), r;
  }
  function io() {
    var l, h;
    const r = Gs(!0), o = Mp(), s = [];
    for (const m of r) {
      if ((m == null ? void 0 : m.type) === "strokeGroup") {
        const b = String(m.actionGroupId || m.id || "");
        if (!b) continue;
        const g = ((h = (l = f.paintEngine) == null ? void 0 : l.getGroupDisplayCanvas) == null ? void 0 : h.call(l, b)) || null;
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
        const x = wu(b, () => fe());
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
    const s = no(), l = ro(s), h = wr(r), m = h ? mi(r) : "none", b = f.showObjects ? io() : ta([]), g = null, x = [
      o,
      m,
      Array.isArray(s == null ? void 0 : s.stickers) ? s.stickers.map((M) => String((M == null ? void 0 : M.id) || "")).join(",") : "none",
      Array.isArray(l) ? l.map((M) => `${String((M == null ? void 0 : M.assetId) || "")}:${String((M == null ? void 0 : M.revision) || "")}`).join(",") : "none",
      b.length ? b.map((M) => `${String((M == null ? void 0 : M.id) || "")}:${String((M == null ? void 0 : M.revision) || "")}:${Number((M == null ? void 0 : M.zIndex) || 0)}`).join(",") : "paint:none",
      f.showPanorama ? "panorama:1" : "panorama:0",
      f.showObjects ? "objects:1" : "objects:0",
      f.showMask ? "showMask:1" : "showMask:0"
    ].join("|");
    return {
      descriptor: ba({
        stateRevision: x,
        backgroundSource: h ? r : null,
        backgroundRevision: h ? `${o}:${m}` : "",
        coverageDeg: Kt(v.coverage),
        scene: s,
        textures: l,
        paintSource: g,
        paintRevision: "",
        rasterEntries: b,
        backgroundOpacity: 1,
        showMaskTint: !1
      }),
      hasContent: h || l.length > 0 || b.length > 0
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
  function $p(r, o, s, l = "modal_bg_gl") {
    var M;
    if (!Cu(r, o)) return !1;
    if (!oe.backgroundDirty && oe.backgroundWasVisible) return !0;
    const { descriptor: h, hasContent: m } = Lp(s, l);
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
    const o = F.width, s = F.height, l = xr();
    if (C.globalAlpha = 1, C.lineWidth = 1, r || (C.fillStyle = "#070707", C.fillRect(0, 0, o, s), C.fillStyle = "#070707", C.fillRect(l.x, l.y, l.w, l.h)), lo(), Su(
      C,
      { x: l.x, y: l.y, w: l.w, h: l.h },
      { mode: "unwrap" },
      jr(),
      "modal_unwrap"
    ), f.showGrid && !f.fullscreen) {
      C.strokeStyle = "#3f3f46";
      for (let m = 0; m <= 16; m += 1) {
        const b = l.x + l.w * m / 16;
        C.beginPath(), C.moveTo(b, l.y), C.lineTo(b, l.y + l.h), C.stroke();
      }
      for (let m = 0; m <= 8; m += 1) {
        const b = l.y + l.h * m / 8;
        C.beginPath(), C.moveTo(l.x, b), C.lineTo(l.x + l.w, b), C.stroke();
      }
      C.strokeStyle = "rgba(250, 250, 250, 0.86)", C.lineWidth = 1.2, C.beginPath(), C.moveTo(l.x, l.y + l.h / 2), C.lineTo(l.x + l.w, l.y + l.h / 2), C.stroke(), C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center";
      const h = l.y + l.h * 0.57;
      C.fillText("Left", l.x + l.w * 0.25, h), C.fillText("Front", l.x + l.w * 0.5, h), C.fillText("Right", l.x + l.w * 0.75, h), C.fillText("Back", l.x + 38, h), C.fillText("Back", l.x + l.w - 38, h);
    }
  }
  function Iu(r, o, s = 1) {
    let l = !1;
    C.strokeStyle = o, C.lineWidth = s, C.beginPath();
    for (const h of r) {
      const m = ea(h);
      if (!m) {
        l = !1;
        continue;
      }
      l ? C.lineTo(m.x, m.y) : (C.moveTo(m.x, m.y), l = !0);
    }
    C.stroke();
  }
  function jp(r = !1) {
    const o = F.width, s = F.height;
    if (r || (Au() ? C.clearRect(0, 0, o, s) : (C.fillStyle = "#070707", C.fillRect(0, 0, o, s))), lo(), Su(
      C,
      { x: 0, y: 0, w: o, h: s },
      {
        mode: "panorama",
        yawDeg: f.viewYaw,
        pitchDeg: f.viewPitch,
        fovDeg: f.viewFov,
        coverageDeg: Kt(v.coverage)
      },
      jr(),
      "modal_pano"
    ), f.showGrid && !f.fullscreen) {
      for (let h = -180; h <= 180; h += 15) {
        const m = [];
        for (let b = -89; b <= 89; b += 4) m.push(jn(h, b));
        Iu(m, "#3f3f46", h % 90 === 0 ? 1.3 : 1);
      }
      for (let h = -75; h <= 75; h += 15) {
        const m = [];
        for (let b = -180; b <= 180; b += 4) m.push(jn(b, h));
        Iu(m, h === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", h === 0 ? 1.5 : 1);
      }
      const l = [
        { name: "Left", dir: jn(-90, 0) },
        { name: "Front", dir: jn(0, 0) },
        { name: "Right", dir: jn(90, 0) },
        { name: "Back", dir: jn(180, 0) }
      ];
      C.fillStyle = "rgba(250, 250, 250, 0.42)", C.font = "500 11px Geist, sans-serif", C.textAlign = "center", l.forEach((h) => {
        const m = ea(h.dir);
        m && C.fillText(h.name, m.x, m.y + 24);
      });
    }
  }
  function Vp(r, o = null, s = null, l = null) {
    if (f.mode === "frame") {
      const h = o || Fe();
      if (!h) return [];
      const m = s || Ft(h);
      return wg(r, h, m);
    }
    return zu(r, l);
  }
  function ao(r, o = null, s = null, l = null, h = null) {
    if (!r) return null;
    if (f.mode === "unwrap") {
      const b = zu([r], h);
      return b[0] ? { x: b[0].x, y: b[0].y, z: 1 } : null;
    }
    const m = vi(r);
    return m ? rr(m, o, s, l) : null;
  }
  function Hp(r, o) {
    const s = String(r.actionGroupId || r.id || "").trim(), l = Cn(s, r.layerKind), h = vr(s, r.layerKind, l), m = (h == null ? void 0 : h.centerUv) || Ws(s, r.layerKind, l), b = f.mode === "unwrap" ? Number((m == null ? void 0 : m.u) || 0) : null, g = [], x = f.mode === "frame" ? Fe() : null, M = x ? Ft(x) : null;
    for (const ee of l) {
      const be = (ee == null ? void 0 : ee.geometry) || null, Ee = (be == null ? void 0 : be.geometryKind) === "lasso_fill" ? be == null ? void 0 : be.points : (be == null ? void 0 : be.processedPoints) || (be == null ? void 0 : be.rawPoints) || (be == null ? void 0 : be.points) || [], Le = Vp(Ee, x, M, b).filter((Z) => Number.isFinite(Z == null ? void 0 : Z.x) && Number.isFinite(Z == null ? void 0 : Z.y));
      if (!Le.length) continue;
      const Ke = Nr(String((ee == null ? void 0 : ee.toolKind) || "pen")), de = un[Ke] || un[or];
      g.push({
        points: Le,
        closed: String((be == null ? void 0 : be.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((ee == null ? void 0 : ee.size) || 10) * Math.max(0.1, Number((de == null ? void 0 : de.sizeScale) ?? 1)) + 10),
        layerKind: String((ee == null ? void 0 : ee.layerKind) || r.layerKind || "paint")
      });
    }
    const P = ao(m, null, x, M, b);
    if (!P) {
      const ee = { visible: !1, kind: "strokeGroup" };
      return f._strokeGeomCache.set(o, ee), ee;
    }
    const T = Km(h).map((ee) => ao(ee, P.x, x, M, b)).filter((ee) => Number.isFinite(ee == null ? void 0 : ee.x) && Number.isFinite(ee == null ? void 0 : ee.y)).map((ee) => ({ x: Number(ee.x || 0), y: Number(ee.y || 0) }));
    if (T.length < 4) {
      const ee = { visible: !1, kind: "strokeGroup" };
      return f._strokeGeomCache.set(o, ee), ee;
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
    return f._strokeGeomCache.set(o, le), le;
  }
  function Up(r, o) {
    const s = f.mode === "frame" ? Fe() : null, l = s ? Ft(s) : null, h = Pu(r), m = f.mode === "unwrap" ? Number((h == null ? void 0 : h.u) || 0) : null, b = ao(h, null, s, l, m), x = Dp(r).map((T) => ao(T, (b == null ? void 0 : b.x) ?? null, s, l, m)).filter((T) => Number.isFinite(T == null ? void 0 : T.x) && Number.isFinite(T == null ? void 0 : T.y));
    if (!Array.isArray(x) || x.length < 4) {
      const T = { visible: !1, kind: "rasterObject" };
      return f._strokeGeomCache.set(o, T), T;
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
    return f._strokeGeomCache.set(o, N), N;
  }
  function rr(r, o = null, s = null, l = null, h = {}) {
    if (f.mode === "frame") {
      const be = s || Fe(), Ee = l || Ft(be);
      if (!be || !Ee) return null;
      const Le = be ? ia(be, r) : null;
      return Le ? {
        x: Number(Ee.x || 0) + Number(Le.x || 0) * Number(Ee.w || 0),
        y: Number(Ee.y || 0) + Number(Le.y || 0) * Number(Ee.h || 0),
        z: 1
      } : null;
    }
    if (f.mode === "unwrap") return sl(r, o);
    const { right: m, up: b, fwd: g } = nl(), x = On(r, m), M = On(r, b), P = On(r, g), N = 1e-4;
    if (!Number.isFinite(P) || P <= N && !(h != null && h.clipBehind)) return null;
    const T = Math.max(P, N), z = F.width, q = F.height, B = f.viewFov * Ct, Y = 2 * Math.atan(Math.tan(B / 2) * (q / Math.max(z, 1))), re = z / 2 / Math.tan(B / 2), le = q / 2 / Math.tan(Y / 2), ee = Math.max(z, q) * 2;
    return {
      x: G(z / 2 + x / T * re, -ee, z + ee),
      y: G(q / 2 - M / T * le, -ee, q + ee),
      z: T,
      rawZ: P,
      clipped: P <= N
    };
  }
  function Bp(r, o = []) {
    if (f.mode !== "pano" || gt(r)) return 1;
    const s = o.map((l) => Number((l == null ? void 0 : l.rawZ) ?? (l == null ? void 0 : l.z))).filter((l) => Number.isFinite(l));
    return s.length ? zw(0.035, 0.2, Math.min(...s)) : 1;
  }
  function Gp(r) {
    const o = jn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), s = f.mode === "frame" ? Fe() : null, l = s ? Ft(s) : null, h = f.mode === "pano" && (gt(r) || mn(r)), m = h ? { clipBehind: !0 } : null, b = rr(o, null, s, l, m);
    if (!b) return { visible: !1 };
    const g = to(r), M = Nu(r).map((Z) => rr(Z, b.x, s, l, m)).filter((Z) => Number.isFinite(Z == null ? void 0 : Z.x) && Number.isFinite(Z == null ? void 0 : Z.y));
    if (M.length < 4) return { visible: !1 };
    const P = Sr(g, 0, g.tanY), N = Sr(g, 0, g.tanY + Math.max(g.tanY * 0.43, 0.053)), T = rr(P, b.x, s, l, m);
    if (!T) return { visible: !1 };
    const z = rr(N, (T == null ? void 0 : T.x) ?? b.x, s, l, m), q = ((z == null ? void 0 : z.x) ?? T.x) - T.x, B = ((z == null ? void 0 : z.y) ?? T.y) - T.y, Y = Math.hypot(q, B) || 1, re = {
      x: T.x + q / Y * 30,
      y: T.y + B / Y * 30
    }, le = rr(Sr(g, 0, g.tanY), b.x, s, l, m), ee = rr(Sr(g, g.tanX, 0), b.x, s, l, m), be = rr(Sr(g, 0, -g.tanY), b.x, s, l, m), Ee = rr(Sr(g, -g.tanX, 0), b.x, s, l, m);
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
    if (Rt(r)) {
      const h = String(r.actionGroupId || r.id || "").trim(), m = Zm(h, r.layerKind), b = f._strokeGeomCache.get(m);
      return b || (f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear(), Hp(r, m));
    }
    if (qt(r)) {
      const h = Ep(r), m = f._strokeGeomCache.get(h);
      return m || (f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear(), Up(r, h));
    }
    const o = Op(r), s = f._strokeGeomCache.get(o);
    if (s) return s;
    f._strokeGeomCache.size > 256 && f._strokeGeomCache.clear();
    const l = Gp(r);
    return f._strokeGeomCache.set(o, l), l;
  }
  function oo(r, o, s, l = null) {
    const h = [];
    for (let m = 0; m <= s; m += 1) {
      const b = m / s;
      let g = 0, x = 0;
      o === 0 ? (g = b, x = 0) : o === 1 ? (g = 1, x = b) : o === 2 ? (g = 1 - b, x = 1) : (g = 0, x = 1 - b);
      const M = ku(r, g, x), P = f.mode === "unwrap" ? sl(M, l) : ea(M);
      P && h.push(P);
    }
    return h;
  }
  function Kp(r, o) {
    const s = jn(Number(r.yaw_deg || 0), Number(r.pitch_deg || 0)), l = f.mode === "unwrap" ? sl(s) : null, h = l ? l.x : null, m = f.mode === "pano" ? 28 : 20, b = [
      oo(r, 0, m, h),
      oo(r, 1, m, h),
      oo(r, 2, m, h),
      oo(r, 3, m, h)
    ];
    C.strokeStyle = o ? "rgba(250, 250, 250, 0.9)" : "#71717a", C.lineWidth = o ? 2 : 1, C.beginPath();
    let g = !1;
    for (const x of b)
      for (const M of x)
        g ? C.lineTo(M.x, M.y) : (C.moveTo(M.x, M.y), g = !0);
    C.closePath(), C.stroke();
  }
  function Wp() {
    const r = [...Array.isArray(v.shots) ? v.shots : []], o = [...Array.isArray(v.stickers) ? v.stickers : []].sort((s, l) => Number(s.z_index || 0) - Number(l.z_index || 0));
    return [...r, ...o];
  }
  function cl() {
    const r = [...Array.isArray(v.shots) ? v.shots : []];
    return [...[...Array.isArray(v.stickers) ? v.stickers : []].sort((s, l) => Number(l.z_index || 0) - Number(s.z_index || 0)), ...r];
  }
  function so(r, o = []) {
    if (!(!r || !Array.isArray(o) || o.length < 4)) {
      r.beginPath(), r.moveTo(o[0].x, o[0].y);
      for (let s = 1; s < 4; s += 1) r.lineTo(o[s].x, o[s].y);
      r.closePath();
    }
  }
  function Du(r, o, s) {
    const l = Array.isArray(r == null ? void 0 : r.corners) ? r.corners : [];
    if (l.length < 4) return;
    const h = G(Number((r == null ? void 0 : r.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    const m = C.globalAlpha;
    C.globalAlpha = m * h;
    const b = s ? "rgba(255, 116, 116, 0.96)" : o ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", g = s ? "rgba(255, 89, 89, 0.08)" : o ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", x = o ? 3.2 : 2.6;
    so(C, l), C.fillStyle = g, C.fill(), C.strokeStyle = b, C.lineWidth = x, C.stroke(), C.save(), C.strokeStyle = b, C.lineWidth = o ? 3.2 : 2.6, C.lineCap = "round";
    const M = Array.isArray(r == null ? void 0 : r.edgeMidpoints) && r.edgeMidpoints.length >= 4 ? r.edgeMidpoints : [
      { edge: "top", x: (l[0].x + l[1].x) * 0.5, y: (l[0].y + l[1].y) * 0.5 },
      { edge: "right", x: (l[1].x + l[2].x) * 0.5, y: (l[1].y + l[2].y) * 0.5 },
      { edge: "bottom", x: (l[2].x + l[3].x) * 0.5, y: (l[2].y + l[3].y) * 0.5 },
      { edge: "left", x: (l[3].x + l[0].x) * 0.5, y: (l[3].y + l[0].y) * 0.5 }
    ], P = { top: "bottom", right: "left", bottom: "top", left: "right" }, N = o ? 12 : 9;
    M.forEach((T) => {
      const q = M.find((le) => (le == null ? void 0 : le.edge) === P[T == null ? void 0 : T.edge]) || {
        x: (l[0].x + l[1].x + l[2].x + l[3].x) * 0.25,
        y: (l[0].y + l[1].y + l[2].y + l[3].y) * 0.25
      }, B = q.x - T.x, Y = q.y - T.y, re = Math.hypot(B, Y) || 1;
      C.beginPath(), C.moveTo(T.x, T.y), C.lineTo(T.x + B / re * N, T.y + Y / re * N), C.stroke();
    }), C.restore(), C.globalAlpha = m;
  }
  function Yp(r, o, s, l) {
    const h = G(Number((o == null ? void 0 : o.visibilityAlpha) ?? 1), 0, 1);
    if (h <= 0.01) return;
    if (mn(r)) {
      Du(o, s, l);
      return;
    }
    if (gt(r)) {
      const b = C.globalAlpha;
      C.globalAlpha = b * ip(r) * h, f.mode === "frame" ? (C.strokeStyle = s ? "rgba(250, 250, 250, 0.9)" : l ? "rgba(255, 89, 89, 0.72)" : "#71717a", C.lineWidth = s ? 2 : 1, so(C, o.corners), C.stroke()) : Kp(r, s), C.globalAlpha = b;
      return;
    }
    const m = C.globalAlpha;
    C.globalAlpha = m * h, C.fillStyle = s ? "rgba(0, 112, 243, 0.24)" : l ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", so(C, o.corners), C.fill(), C.strokeStyle = s ? "rgba(255, 255, 255, 1)" : l ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", C.lineWidth = s ? 2.8 : 1.9, so(C, o.corners), C.stroke(), C.globalAlpha = m;
  }
  function Eu(r, o, s) {
    C.fillStyle = s, o.corners.forEach((l) => {
      C.beginPath(), C.arc(l.x, l.y, 6.5, 0, Math.PI * 2), C.fill();
    }), mn(r) && (C.strokeStyle = s, C.lineCap = "round", C.lineWidth = 4, o.edgeMidpoints.forEach((l) => {
      var P, N, T, z;
      const h = (((P = l.b) == null ? void 0 : P.x) ?? l.x) - (((N = l.a) == null ? void 0 : N.x) ?? l.x), m = (((T = l.b) == null ? void 0 : T.y) ?? l.y) - (((z = l.a) == null ? void 0 : z.y) ?? l.y), b = Math.hypot(h, m) || 1, g = h / b, x = m / b, M = 10;
      C.beginPath(), C.moveTo(l.x - g * M, l.y - x * M), C.lineTo(l.x + g * M, l.y + x * M), C.stroke();
    }), C.lineCap = "butt"), Rt(r) || (C.strokeStyle = "rgba(250, 250, 250, 0.9)", C.lineWidth = 1.8, C.beginPath(), C.moveTo(o.rotateStemBase.x, o.rotateStemBase.y), C.lineTo(o.rotateHandle.x, o.rotateHandle.y), C.stroke(), C.fillStyle = s, C.beginPath(), C.arc(o.rotateHandle.x, o.rotateHandle.y, 10, 0, Math.PI * 2), C.fill());
  }
  function qp() {
    var g;
    const [r, o] = Rp(), s = f.mode === "frame" ? [] : Tn(), l = s.length > 1, h = t === "cutout" ? Wp() : er(), m = h.map((x) => `${String((x == null ? void 0 : x.id) || "")}:${mn(x) ? "frame" : Number((x == null ? void 0 : x.z_index) || 0)}`).join("|");
    (!f._sortedItemsCache || f._sortedItemsCache.src !== h || f._sortedItemsCache.orderKey !== m) && (f._sortedItemsCache = {
      src: h,
      orderKey: m,
      sorted: [...h]
    });
    const b = f._sortedItemsCache.sorted;
    for (const x of b) {
      const M = f.mode !== "frame" && !l && lu(x);
      if (f.mode === "frame" && !M || !f.showObjects && !mn(x)) continue;
      const P = gt(x), N = mn(x), T = tr(x);
      if (!P && !N)
        continue;
      const z = jt(x);
      if (t !== "stickers" && !z.visible)
        continue;
      const q = G(Number((z == null ? void 0 : z.visibilityAlpha) ?? 1), 0, 1);
      if (q <= 0.01) continue;
      const B = N && t === "cutout" && f.mode === "pano" ? G(Number(f.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (C.save(), C.globalAlpha *= B, Yp(x, z, M, T), M && z.visible) {
        const Y = T ? "#ff4d4f" : P && Ut(x) ? "#f59e0b" : "#0070f3", re = C.globalAlpha;
        C.globalAlpha = re * q, Eu(x, z, Y), C.globalAlpha = re;
      }
      C.restore();
    }
    if (t === "cutout" && f.mode === "pano" && !Fe() && f.cutoutPanoFrameVisual && f.cutoutPanoFrameAlpha > 1e-4) {
      const x = f.cutoutPanoFrameVisual, M = G(Number(f.cutoutPanoFrameAlpha || 0), 0, 1);
      C.save(), C.globalAlpha *= M, Du(x.geom, x.selected, x.locked), x.selected && Eu(
        x.item,
        x.geom,
        x.locked ? "#ff4d4f" : "#0070f3"
      ), C.restore();
    }
    if (l) {
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
        if (!Rt(x) && !qt(x)) return;
        const M = jt(x);
        if (!(M != null && M.visible)) return;
        const P = tr(x) ? "#ff4d4f" : "#0070f3";
        C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.95)", C.lineWidth = 2, C.setLineDash([6, 4]), C.beginPath(), C.moveTo(M.corners[0].x, M.corners[0].y);
        for (let N = 1; N < M.corners.length; N += 1) C.lineTo(M.corners[N].x, M.corners[N].y);
        C.closePath(), C.stroke(), C.setLineDash([]), C.fillStyle = P, M.corners.forEach((N) => {
          C.beginPath(), C.arc(N.x, N.y, 6.5, 0, Math.PI * 2), C.fill();
        }), C.restore();
      });
    if (((g = f.interaction) == null ? void 0 : g.kind) === "marquee_select") {
      const x = rf(f.interaction.start, f.interaction.current);
      C.save(), C.strokeStyle = "rgba(255, 255, 255, 0.9)", C.fillStyle = "rgba(255, 255, 255, 0.08)", C.lineWidth = 1, C.setLineDash([5, 4]), C.beginPath(), C.rect(x.x0, x.y0, x.x1 - x.x0, x.y1 - x.y0), C.fill(), C.stroke(), C.restore();
    }
    f.hqFrames && r >= 40 && o >= 30 && (f.hqFrames -= 1, f.hqFrames > 0 && fe());
  }
  function Xp(r) {
    const o = Dr(r), s = G(Number((o == null ? void 0 : o.aspect) || 1), 0.05, 20), l = 320;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Ou(r, o = !1) {
    const s = G(ns(r), 0.05, 20), l = o ? 320 : 220;
    return s >= 1 ? { width: l, height: Math.max(1, Math.round(l / s)) } : { width: Math.max(1, Math.round(l * s)), height: l };
  }
  function Jp(r) {
    if (!It || !r) return !1;
    const o = It.closest(".pano-camera-preview");
    if (!o) return !1;
    const s = Math.round(Number(o.clientWidth || It.clientWidth || 0)), l = Math.round(Number(o.clientHeight || It.clientHeight || 0));
    return Math.abs(s - Number(r.width || 0)) <= 1 && Math.abs(l - Number(r.height || 0)) <= 1;
  }
  function Zp() {
    return `obj:${Number(f.objectVisualRevision || 0)}`;
  }
  function Qp(r, o = {}) {
    if (!r) return "";
    const s = jr(), l = s && wr(s) ? mi(s) : "no_bg", h = Xp(r);
    return [
      String((r == null ? void 0 : r.id) || ""),
      dl(),
      Zp(),
      qa(),
      l,
      f.showPanorama ? "panorama:1" : "panorama:0",
      f.showObjects ? "objects:1" : "objects:0",
      f.showMask ? "mask:1" : "mask:0",
      `${h.width}x${h.height}`,
      String(o.quality || "balanced")
    ].join("|");
  }
  function eg() {
    var T, z, q, B;
    if (f.outputPreviewRect = null, k.outputPreviewToggle.visible = f.mode !== "frame" && !!Fe(), t !== "cutout" || !k.cameraPreview) return;
    if (f.mode === "frame") {
      k.cameraPreview.visible = !1, k.cameraPreview.settled = !1;
      return;
    }
    const r = Fe();
    if (!r) {
      k.cameraPreview.visible = !0, k.cameraPreview.ready = !1, k.cameraPreview.settled = !1, k.cameraPreview.expanded = !!f.outputPreviewExpanded, k.cameraPreview.width = 220, k.cameraPreview.height = 132, k.cameraPreview.label = "Add Frame to preview", (T = te == null ? void 0 : te.clearScene) == null || T.call(te), (z = he == null ? void 0 : he.requestRender) == null || z.call(he);
      return;
    }
    k.cameraPreview.visible = !0;
    const o = jr();
    if (!r || !te || !he) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = r ? "Preview unavailable" : "Add Frame to preview", k.cameraPreview.expanded = !!f.outputPreviewExpanded, k.cameraPreview.settled = !1, k.cameraPreview.width = 220, k.cameraPreview.height = 132, (q = te == null ? void 0 : te.clearScene) == null || q.call(te), (B = he == null ? void 0 : he.requestRender) == null || B.call(he);
      return;
    }
    const s = Ou(r, !!f.outputPreviewExpanded);
    k.cameraPreview.width = s.width, k.cameraPreview.height = s.height, k.cameraPreview.expanded = !!f.outputPreviewExpanded;
    const l = no(), h = ro(l), m = wr(o), b = m ? mi(o) : "none", g = f.showObjects ? io() : ta([]), x = ba({
      stateRevision: [
        "cutout_preview_camera",
        b,
        Array.isArray(l == null ? void 0 : l.stickers) ? l.stickers.map((Y) => String((Y == null ? void 0 : Y.id) || "")).join(",") : "none",
        Array.isArray(h) ? h.map((Y) => `${String((Y == null ? void 0 : Y.assetId) || "")}:${String((Y == null ? void 0 : Y.revision) || "")}`).join(",") : "none",
        g.length ? g.map((Y) => `${String((Y == null ? void 0 : Y.id) || "")}:${String((Y == null ? void 0 : Y.revision) || "")}:${Number((Y == null ? void 0 : Y.zIndex) || 0)}`).join(",") : "paint:none",
        f.showPanorama ? "panorama:1" : "panorama:0",
        f.showObjects ? "objects:1" : "objects:0",
        f.showMask ? "showMask:1" : "showMask:0",
        Kt(v.coverage)
      ].join("|"),
      backgroundSource: m && f.showPanorama ? o : null,
      backgroundRevision: m ? `cutout_preview:${b}` : "",
      coverageDeg: Kt(v.coverage),
      scene: l,
      textures: h,
      rasterEntries: g,
      backgroundOpacity: 1,
      showMaskTint: !1
    });
    if (!(m || h.length > 0 || g.length > 0)) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = "Connect ERP image", k.cameraPreview.settled = !1, te.clearScene(), he.requestRender();
      return;
    }
    if (f.showPanorama && !m && h.length === 0 && g.length === 0) {
      k.cameraPreview.ready = !1, k.cameraPreview.label = o ? "Loading preview" : "Connect ERP image", k.cameraPreview.settled = !1, te.clearScene(), he.requestRender();
      return;
    }
    te.syncScene(x), he.setView(Dr(r));
    const P = Jp(s), N = P ? he.present() : !1;
    P || he.requestRender(), k.cameraPreview.ready = !0, k.cameraPreview.label = P && N ? "" : "Loading preview", k.cameraPreview.settled = P && N && oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame;
  }
  function tg(r, o, s, l = {}) {
    if (!te || !s) return !1;
    const h = jr(), m = no(), b = ro(m), g = wr(h), x = f.showObjects ? io() : ta([]);
    return g || b.length > 0 || x.length > 0 ? (te.syncScene(ba({
      stateRevision: Qp(s, l),
      backgroundSource: g && f.showPanorama ? h : null,
      backgroundRevision: g ? `cutout_frame:${mi(h)}` : "",
      coverageDeg: Kt(v.coverage),
      scene: m,
      textures: b,
      rasterEntries: x,
      backgroundOpacity: 1,
      showMaskTint: !1
    })), te.renderShotToContext(r, o, s, l)) : !1;
  }
  function ul(r, o) {
    if (!r || !o) return null;
    const s = Number(o.x || 0), l = Number(o.y || 0);
    return ku(r, s, l);
  }
  function vi(r) {
    if (!r) return null;
    const o = (Number(r.u || 0) - 0.5) * (2 * Math.PI), s = (0.5 - Number(r.v || 0)) * Math.PI, l = Math.cos(s);
    return qn(l * Math.sin(o), Math.sin(s), l * Math.cos(o));
  }
  function ng(r) {
    return !r || typeof r != "object" ? { x: 0, y: 0 } : { x: Number((r == null ? void 0 : r.u) || 0), y: Number((r == null ? void 0 : r.v) || 0) };
  }
  function rg(r, o, s, l = {}) {
    return { ...{
      ...r,
      t: Number((r == null ? void 0 : r.t) || 0),
      widthScale: Xt(r, "widthScale", 1),
      pressureLike: Xt(r, "pressureLike", 1)
    }, ...l, u: o, v: s };
  }
  function ig(r, o = !1) {
    return o ? 12e-4 : 18e-4;
  }
  function fl(r, o, s = !1) {
    if (!Array.isArray(r) || !r.length) return [];
    const l = String((o == null ? void 0 : o.kind) || "") === "ERP_GLOBAL", h = /* @__PURE__ */ new WeakMap();
    if (l) {
      let B = null;
      r.forEach((Y) => {
        const re = Number((Y == null ? void 0 : Y.u) || 0), le = Number((Y == null ? void 0 : Y.v) || 0), ee = (re % 1 + 1) % 1, be = B == null ? ee : B + xn(ee, (B % 1 + 1) % 1);
        h.set(Y, { x: be, y: le }), B = be;
      });
    }
    const m = (B) => !B || typeof B != "object" ? { x: 0, y: 0 } : h.get(B) || ng(B), b = (B, Y, re, le = {}) => {
      const ee = l ? (Number(Y) % 1 + 1) % 1 : Number(Y), be = rg(B, ee, re, le);
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
    const l = Number(r == null ? void 0 : r[o]);
    return Number.isFinite(l) ? Math.max(0, l) : s;
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
    const l = document.createElement("canvas");
    l.width = Math.max(1, Math.round(r)), l.height = Math.max(1, Math.round(o));
    const h = l.getContext("2d", s.readback ? { willReadFrequently: !0 } : void 0);
    return h && (h.clearRect(0, 0, l.width, l.height), h.imageSmoothingEnabled = !0), { canvas: l, ctx: h };
  }
  function ra() {
    const r = co();
    return `${String(f.paintStrokeRevision)}:${r.width}x${r.height}`;
  }
  function _i() {
    const r = co();
    return `${String(f.paintStrokeRevision)}:${String(f.paintCompositeRevision)}:${r.width}x${r.height}`;
  }
  function dl() {
    const r = qa(), o = _i();
    return r ? `${o}:${r}` : o;
  }
  function og() {
    f.paintStrokeRevision += 1, f.paintCompositeRevision += 1;
  }
  function sg() {
    f.paintCompositeRevision += 1;
  }
  function lg() {
    f._sortedItemsCache = null, f._strokeGeomCache.clear();
  }
  function Ru() {
    var r, o;
    f.paintEngineRevisionKey = null, (o = (r = f.paintEngine) == null ? void 0 : r.rebuildCommitted) == null || o.call(r, v), f.paintEngineRevisionKey = ra();
  }
  function Fu() {
    v.painting_layer !== null && (v.painting_layer = null), Qa = "";
  }
  function Bt() {
    f.objectVisualRevision = Number(f.objectVisualRevision || 0) + 1, lg(), oe.backgroundDirty = !0, oe.dirty = !0;
  }
  function In({ rebuildPaintEngine: r = !1 } = {}) {
    Fu(), og(), Bt(), r && Ru();
  }
  function xi() {
    Fu(), sg(), Bt();
  }
  function lo() {
    var l;
    const r = co(), o = `${r.width}x${r.height}`;
    f.paintEngineDescriptorKey !== o && (f.paintEngine = dc(r), f.paintEngineDescriptorKey = o, f.paintEngineRevisionKey = "");
    const s = ra();
    f.paintEngineRevisionKey !== s && (f.paintEngineRevisionKey = s, (l = f.paintEngine) == null || l.rebuildCommitted(v));
  }
  function co() {
    const r = Math.max(1, A(Number((v == null ? void 0 : v.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: r,
      height: Math.max(1, Math.round(r * 0.5))
    };
  }
  function pn() {
    return co();
  }
  function cg(r, o, s, l, h = null) {
    const m = ag(r), b = Xt(o, "widthScale", 1) * Xt(o, "pressureLike", 1);
    return m.model === "erp_uv_norm" ? Math.max(0.5, m.value * s * b) : m.model === "world_angle" ? h ? Math.max(0.5, m.value / Math.max(1e-6, Number(h.hFOV_deg || 90) * Ct) * s * b) : Math.max(0.5, m.value / (2 * Math.PI) * s * b) : Math.max(0.5, Number((r == null ? void 0 : r.size) || 10) * 0.5 * b);
  }
  function ug(r, o, s = {}) {
    const l = String((o == null ? void 0 : o.layerKind) || "paint"), h = String((o == null ? void 0 : o.toolKind) || "pen"), m = s.preview === !0, b = m ? 0.78 : 1;
    if (r.globalAlpha = h === "marker" ? 0.7 * b : 1, l === "mask") {
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
    const l = Math.max(0.5, Math.min(s, Number((o == null ? void 0 : o.radiusPx) || 0.5)));
    !Number.isFinite(o == null ? void 0 : o.x) || !Number.isFinite(o == null ? void 0 : o.y) || !Number.isFinite(l) || (r.beginPath(), r.arc(Number(o.x || 0), Number(o.y || 0), l, 0, Math.PI * 2), r.fill());
  }
  function dg(r, o, s, l, h = {}) {
    if (!r || !Array.isArray(o) || !o.length) return;
    const m = Math.max(l.w, l.h) * 0.25;
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
      if (le > Math.max(l.w, l.h) * 0.5) continue;
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
  function hg(r, o, s, l) {
    dg(r, o, s, l, { preview: !1 });
  }
  function mg(r, o, s, l, h) {
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
    r.beginPath(), r.moveTo(Number(((g = o[0]) == null ? void 0 : g[m]) || 0) * l.w, Number(((x = o[0]) == null ? void 0 : x[b]) || 0) * l.h);
    for (let N = 1; N < o.length; N += 1)
      r.lineTo(Number(((M = o[N]) == null ? void 0 : M[m]) || 0) * l.w, Number(((P = o[N]) == null ? void 0 : P[b]) || 0) * l.h);
    r.closePath(), r.fill(), r.restore();
  }
  function Lu(r) {
    const o = (r == null ? void 0 : r.geometry) || null;
    return o ? String(o.geometryKind || "") === "lasso_fill" ? Array.isArray(o.points) ? o.points : [] : Array.isArray(o.processedPoints) && o.processedPoints.length ? o.processedPoints : Array.isArray(o.rawPoints) && o.rawPoints.length ? o.rawPoints : Array.isArray(o.points) ? o.points : [] : [];
  }
  function pg(r, o) {
    const s = Lu(r);
    return !Array.isArray(s) || !s.length ? [] : s.map((l) => ({
      x: Number((l == null ? void 0 : l.u) || 0) * Number((o == null ? void 0 : o.w) || 1),
      y: Number((l == null ? void 0 : l.v) || 0) * Number((o == null ? void 0 : o.h) || 1),
      radiusPx: cg(r, l, Number((o == null ? void 0 : o.w) || 1), Number((o == null ? void 0 : o.h) || 1))
    }));
  }
  function $u(r, o, s = null) {
    var g, x, M, P;
    if (!(r != null && r.ctx) || !o) return !1;
    const l = s || { w: Number(((g = r.canvas) == null ? void 0 : g.width) || 0), h: Number(((x = r.canvas) == null ? void 0 : x.height) || 0) }, h = String((o == null ? void 0 : o.toolKind) || "") === "eraser" ? {
      ...o,
      layerKind: "mask",
      toolKind: String(((M = o == null ? void 0 : o.geometry) == null ? void 0 : M.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : o;
    if (String(((P = o == null ? void 0 : o.geometry) == null ? void 0 : P.geometryKind) || "") === "lasso_fill")
      return mg(r.ctx, Lu(h), h, l), !0;
    const b = pg(h, l);
    return b.length ? (hg(r.ctx, b, h, l), !0) : !1;
  }
  function gg(r, o, s, l = 8) {
    const h = new Uint8Array(o * s), m = [], b = new Int32Array(o * s), g = new Int32Array(o * s);
    for (let x = 0; x < s; x += 1)
      for (let M = 0; M < o; M += 1) {
        const P = x * o + M;
        if (h[P] || r[P] <= l) continue;
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
            h[Ke] || r[Ke] <= l || (h[Ke] = 1, b[T] = Ee, g[T] = Le, T += 1);
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
    let l = -1, h = 0;
    for (let x = 0; x < s.length; x += 1) {
      const M = s[x], N = (x === s.length - 1 ? s[0] + o : s[x + 1]) - M - 1;
      N > l && (l = N, h = x);
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
    const l = Number((r == null ? void 0 : r.width) || 0), h = Number((r == null ? void 0 : r.height) || 0), m = (M = r == null ? void 0 : r.getContext) == null ? void 0 : M.call(r, "2d");
    if (!m || l < 1 || h < 1) return [];
    const b = m.getImageData(0, 0, l, h), g = new Uint8Array(l * h);
    for (let P = 0; P < g.length; P += 1) g[P] = b.data[P * 4 + 3];
    return gg(g, l, h, 8).map((P, N) => {
      const T = bg(P, l);
      if (!T) return null;
      const z = Number(T.widthPx || 0), q = P.maxY - P.minY + 1, B = Number(T.startX || 0), Y = document.createElement("canvas");
      Y.width = z, Y.height = q;
      const re = Y.getContext("2d");
      if (!re) return null;
      const le = re.createImageData(z, q);
      return P.pixels.forEach(({ x: ee, y: be }) => {
        const Ee = (be * l + ee) * 4, Le = (Number(ee || 0) - B + l) % l, Ke = ((be - P.minY) * z + Le) * 4;
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
          u1: z / l,
          v1: (P.maxY + 1) / h
        },
        rasterDataUrl: Y.toDataURL("image/png"),
        transform: {
          du: B / l,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  function ia(r, o) {
    if (!r || !o) return null;
    const s = to(r), l = On(o, s.centerDir);
    if (!Number.isFinite(l) || l <= 1e-6) return null;
    const h = On(o, s.right) / l, m = On(o, s.up) / l, b = h * s.cr + m * s.sr, g = -h * s.sr + m * s.cr;
    return {
      x: (b / Math.max(1e-6, s.tanX) + 1) * 0.5,
      y: (1 - g / Math.max(1e-6, s.tanY)) * 0.5
    };
  }
  function vg(r) {
    if (!Array.isArray(r) || r.length < 3) return [];
    if (f.mode === "unwrap") {
      const s = xr();
      return r.map((l) => ({
        x: s.x + Number(l.u || 0) * s.w,
        y: s.y + Number(l.v || 0) * s.h
      }));
    }
    const o = r.map((s) => ea(vi(s))).filter(Boolean);
    return o.every((s) => Number(s.z || 0) > 0) ? o.map((s) => ({ x: Number(s.x || 0), y: Number(s.y || 0) })) : [];
  }
  function zu(r, o = null) {
    if (!Array.isArray(r) || r.length < 1) return [];
    if (f.mode === "unwrap") {
      const l = xr();
      return r.map((h) => {
        const m = (Number(h.u || 0) % 1 + 1) % 1, b = o == null ? m : Number(o || 0) + xn(m, o);
        return {
          x: l.x + b * l.w,
          y: l.y + Number(h.v || 0) * l.h
        };
      });
    }
    const s = r.map((l) => ea(vi(l))).filter(Boolean);
    return s.every((l) => Number(l.z || 0) > 0) ? s.map((l) => ({ x: Number(l.x || 0), y: Number(l.y || 0) })) : [];
  }
  function _g(r, o = 160) {
    if (!Array.isArray(r) || r.length < 3) return !1;
    for (let s = 0; s < r.length; s += 1) {
      const l = r[s], h = r[(s + 1) % r.length];
      if (!l || !h || !Number.isFinite(l.x) || !Number.isFinite(l.y) || !Number.isFinite(h.x) || !Number.isFinite(h.y) || Math.hypot(Number(h.x) - Number(l.x), Number(h.y) - Number(l.y)) > o) return !1;
    }
    return !0;
  }
  function xg(r, o, s) {
    if (!Array.isArray(r) || r.length < 3 || !o || !s) return [];
    const l = [];
    for (const h of r) {
      const m = vi(h), b = ia(o, m);
      if (!b) return [];
      l.push({
        x: Number(s.x || 0) + Number(b.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(b.y || 0) * Number(s.h || 0)
      });
    }
    return _g(l, Math.max(80, Math.max(s.w, s.h) * 0.75)) ? l : [];
  }
  function wg(r, o, s) {
    if (!Array.isArray(r) || r.length < 1 || !o || !s) return [];
    const l = [];
    for (const h of r) {
      const m = vi(h), b = ia(o, m);
      b && l.push({
        x: Number(s.x || 0) + Number(b.x || 0) * Number(s.w || 0),
        y: Number(s.y || 0) + Number(b.y || 0) * Number(s.h || 0)
      });
    }
    return l;
  }
  function Sg() {
    var z;
    const r = Fe(), o = pl(r);
    if (!r || !o) return !1;
    const s = { x: o.x, y: o.y, w: o.w, h: o.h }, l = Math.max(1, Number(o.focalPx || 1)), h = s.x + s.w * 0.5, m = s.y + s.h * 0.5, { halfW: b, halfH: g } = $d(
      { width: F.width, height: F.height },
      l
    ), x = { x: h - b, y: m - g, w: b * 2, h: g * 2 }, M = {
      ...r,
      hFOV_deg: 2 * Math.atan(b / l) * Sn,
      vFOV_deg: 2 * Math.atan(g / l) * Sn
    }, P = Mg(s);
    C.save(), C.fillStyle = "#0a0a0a", C.fillRect(0, 0, F.width, F.height);
    const N = f.interaction ? "draft" : String(((z = v.ui_settings) == null ? void 0 : z.preview_quality) || "balanced");
    return tg(C, x, M, { quality: N }) === !0 || (C.fillStyle = "rgba(255, 255, 255, 0.03)", C.fillRect(x.x, x.y, x.w, x.h)), C.restore(), C.save(), C.fillStyle = "rgba(0, 0, 0, 0.58)", C.beginPath(), C.rect(0, 0, F.width, F.height), C.roundRect(s.x, s.y, s.w, s.h, P), C.fill("evenodd"), C.restore(), C.save(), C.strokeStyle = Tw, C.globalAlpha = 0.62, C.lineWidth = 2, C.beginPath(), C.roundRect(s.x + 1, s.y + 1, s.w - 2, s.h - 2, Math.max(0, P - 1)), C.stroke(), C.restore(), !0;
  }
  function Mg(r) {
    const o = Math.max(1e-6, Number(oe.frameCanvasScale || 1));
    return Math.min(dt * o, Number((r == null ? void 0 : r.w) || 0) * 0.5, Number((r == null ? void 0 : r.h) || 0) * 0.5);
  }
  function Mr() {
    var o;
    const r = f.mode === "frame" ? Fe() : null;
    k.frameRollKnob.visible = !!r && !i, k.frameRollKnob.rollDeg = Number((r == null ? void 0 : r.roll_deg) ?? (r == null ? void 0 : r.rot_deg) ?? 0), k.frameRollKnob.displayValue = ma(k.frameRollKnob.rollDeg), k.frameRollKnob.dragging = ((o = f.interaction) == null ? void 0 : o.kind) === "roll_frame", k.frameRollKnob.armed = !!r && f.altModifier === !0;
  }
  function Ng() {
    var x, M;
    if (((x = f.interaction) == null ? void 0 : x.kind) !== "paint_lasso_fill") return;
    const r = f.interaction.stroke, o = (M = r == null ? void 0 : r.geometry) == null ? void 0 : M.points;
    let s;
    if (f.mode === "frame") {
      const P = Fe(), N = Ft(P);
      s = xg(o, P, N);
    } else
      s = vg(o);
    if (!Array.isArray(s) || s.length < 3) return;
    const l = String((r == null ? void 0 : r.layerKind) || "") === "mask", h = (r == null ? void 0 : r.color) || { r: 1, g: 0.25, b: 0.25 }, m = Math.round(Number(h.r || 0) * 255), b = Math.round(Number(h.g || 0) * 255), g = Math.round(Number(h.b || 0) * 255);
    C.save(), C.beginPath(), C.moveTo(Number(s[0].x || 0), Number(s[0].y || 0));
    for (let P = 1; P < s.length; P++) C.lineTo(Number(s[P].x || 0), Number(s[P].y || 0));
    C.closePath(), l ? (C.lineWidth = 2, C.setLineDash([6, 6]), C.lineDashOffset = 0, C.strokeStyle = "rgba(0,0,0,0.96)", C.stroke(), C.lineDashOffset = -6, C.strokeStyle = "rgba(255,255,255,0.96)", C.stroke(), C.setLineDash([]), C.lineDashOffset = 0) : (C.lineWidth = 1.5, C.setLineDash([6, 4]), C.strokeStyle = `rgba(${m},${b},${g},1)`, C.stroke(), C.setLineDash([])), C.restore();
  }
  function kg() {
    const r = f.frameRollOverlayVisual, o = G(Number(f.frameRollOverlayAlpha || 0), 0, 1);
    if (f.mode !== "frame" || !(r != null && r.shot) || o <= 1e-4) return;
    const s = Ft(r.shot);
    if (!s) return;
    const l = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = Number(r.shot.roll_deg ?? r.shot.rot_deg ?? 0) * Ct, m = Math.hypot(s.w, s.h) * 0.55, b = Math.cos(h) * m, g = Math.sin(h) * m;
    C.save(), C.globalAlpha *= o, C.beginPath(), C.rect(s.x, s.y, s.w, s.h), C.clip(), C.translate(l.x, l.y), C.rotate(h);
    const x = Math.max(12, Math.min(s.w, s.h) / 6);
    C.beginPath();
    for (let M = -m; M <= m; M += x)
      C.moveTo(M, -m), C.lineTo(M, m);
    for (let M = -m; M <= m; M += x)
      C.moveTo(-m, M), C.lineTo(m, M);
    C.lineWidth = 1, C.strokeStyle = "rgba(255, 255, 255, 0.22)", C.stroke(), C.setTransform(1, 0, 0, 1, 0, 0), C.beginPath(), C.moveTo(l.x - b, l.y - g), C.lineTo(l.x + b, l.y + g), C.lineWidth = 1.5, C.setLineDash([8, 6]), C.strokeStyle = "rgba(255, 255, 255, 0.92)", C.shadowColor = "rgba(0, 0, 0, 0.8)", C.shadowBlur = 3, C.stroke(), C.setLineDash([]), C.restore();
  }
  function Pg() {
    return t !== "cutout" || !Fe() ? 0 : Ew;
  }
  function Ag() {
    const r = G(Number(f.cutoutPanoDimAlpha || 0), 0, 1);
    if (r <= 1e-4 || t !== "cutout" || f.mode !== "pano") return;
    const o = Fe(), s = o ? jt(o) : null, l = Array.isArray(s == null ? void 0 : s.corners) && s.corners.length >= 4 ? s.corners.map((b) => ({ x: Number(b.x || 0), y: Number(b.y || 0) })) : null;
    s != null && s.visible && l && (f.cutoutPanoDimCorners = l), o && (s != null && s.visible) && l && (f.cutoutPanoFrameVisual = {
      item: o,
      geom: s,
      selected: lu(o),
      locked: tr(o)
    });
    const h = Number(f.cutoutPanoDimTarget || 0) <= 1e-6, m = s != null && s.visible ? l : h ? f.cutoutPanoDimCorners || [] : [];
    if (C.save(), C.fillStyle = `rgba(0, 0, 0, ${r})`, C.beginPath(), C.rect(0, 0, F.width, F.height), m.length >= 4) {
      C.moveTo(m[0].x, m[0].y);
      for (let b = 1; b < 4; b += 1) C.lineTo(m[b].x, m[b].y);
      C.closePath();
    }
    C.fill("evenodd"), C.restore();
  }
  function Cg() {
    f.mode === "frame" ? (oe.frameSafeRect = qg(), Sg()) : f.mode === "unwrap" ? zp(!1) : jp(!1), Ag(), t === "cutout" && eg(), qp(), Mr(), Ng(), kg(), k.fovValue = `${Math.round(f.viewFov)}°`, Math.abs(Number(f.outputPreviewAnim || 0) - Number(f.outputPreviewAnimTo || 0)) < 1e-6 && Ge(), oe.hasPresentedFrame || (oe.hasPresentedFrame = !0, J.style.opacity = "1"), t === "cutout" && k.cameraPreview && (k.cameraPreview.settled = oe.pendingStableLayoutFrames <= 0 && oe.hasPresentedFrame && f.mode !== "frame");
    const r = Ip();
    k.stageStatus = r.status, k.stageStatusDetail = r.detail, r.status === Kn ? (ce == null || ce.removeAttribute("data-stage-ready"), ce == null || ce.setAttribute("data-stage-loading-kind", r.detail)) : (ce == null || ce.setAttribute("data-stage-ready", ""), ce == null || ce.removeAttribute("data-stage-loading-kind"));
  }
  function Tg(r = f.interaction) {
    if (t !== "stickers" || f.mode !== "pano") return !1;
    const o = String((r == null ? void 0 : r.kind) || "");
    return o === "move" || o === "scale" || o === "scale_x" || o === "scale_y" || o === "rotate" ? !0 : o === "move_multi" ? Array.isArray(r == null ? void 0 : r.stickerSnapshots) && r.stickerSnapshots.length > 0 : !1;
  }
  function Ig() {
    e.__panoLiveStateOverride = v, e.__panoLiveStateVersion = Number(e.__panoLiveStateVersion || 0) + 1, e.__panoLivePaintSurface = Jm();
  }
  function fe(r = {}) {
    var g, x, M, P, N, T, z, q, B, Y;
    const o = !!r.localOnly, s = r.externalSync === !0, l = String(r.cause || ""), h = String(((g = f.interaction) == null ? void 0 : g.kind) || "");
    (!o || h === "view" || h === "pan_frame" || Tg() || !!((x = f.viewTween) != null && x.active) || l === "mode" || l === "frame_view" || l === "cutout_frame") && (oe.backgroundDirty = !0), o && iu() && (f.livePaintInteractionRevision += 1, oe.backgroundDirty = !0), (!o || l === "selection" || l === "mode" || l === "cutout_frame") && (tl(), _r()), Ig(), s && ((P = (M = e.__panoDomPreview) == null ? void 0 : M.requestDraw) == null || P.call(M), (N = e.setDirtyCanvas) == null || N.call(e, !0, !1)), s && !o && ((z = (T = e.graph) == null ? void 0 : T.setDirtyCanvas) == null || z.call(T, !0, !0), (Y = (B = (q = yn) == null ? void 0 : q.canvas) == null ? void 0 : B.setDirty) == null || Y.call(B, !0, !0)), oe.dirty = !0;
  }
  function ju() {
    const r = F.getBoundingClientRect(), o = Math.max(2, Math.round(r.width)), s = Math.max(2, Math.round(r.height));
    return F.width !== o || F.height !== s || J.width !== o || J.height !== s ? (F.width = o, F.height = s, J.width = o, J.height = s, oe.backgroundDirty = !0, oe.dirty = !0, t === "cutout" && (oe.pendingStableLayoutFrames = Math.max(Number(oe.pendingStableLayoutFrames || 0), 1)), !0) : !1;
  }
  function Dg(r = performance.now()) {
    var m, b;
    oe.lastTickTs = r;
    const o = f.mode === "frame" && ((m = f.interaction) == null ? void 0 : m.kind) === "roll_frame" ? f.interaction : null;
    o != null && o.shot && (f.frameRollOverlayVisual = { shot: o.shot });
    const s = o ? 1 : 0;
    if (Math.abs(s - Number(f.frameRollOverlayTarget || 0)) > 1e-6 && (f.frameRollOverlayFrom = Number(f.frameRollOverlayAlpha || 0), f.frameRollOverlayTarget = s, f.frameRollOverlayStartTs = r), Math.abs(Number(f.frameRollOverlayAlpha || 0) - s) > 1e-6) {
      const g = G(
        (r - Number(f.frameRollOverlayStartTs || r)) / Ow,
        0,
        1
      );
      f.frameRollOverlayAlpha = wn(
        Number(f.frameRollOverlayFrom || 0),
        s,
        Ro(g)
      ), g >= 1 && (f.frameRollOverlayAlpha = s, s === 0 && (f.frameRollOverlayVisual = null)), oe.dirty = !0;
    }
    const l = Pg();
    if (Math.abs(l - Number(f.cutoutPanoDimTarget || 0)) > 1e-6 && (f.cutoutPanoDimFrom = Number(f.cutoutPanoDimAlpha || 0), f.cutoutPanoDimTarget = l, f.cutoutPanoDimStartTs = r), Math.abs(Number(f.cutoutPanoDimAlpha || 0) - l) > 1e-6) {
      const g = G(
        (r - Number(f.cutoutPanoDimStartTs || r)) / Hd,
        0,
        1
      );
      f.cutoutPanoDimAlpha = wn(
        Number(f.cutoutPanoDimFrom || 0),
        l,
        Ro(g)
      ), g >= 1 && (f.cutoutPanoDimAlpha = l), g >= 1 && l === 0 && (f.cutoutPanoDimCorners = null), oe.dirty = !0;
    }
    const h = t === "cutout" && Fe() ? 1 : 0;
    if (Math.abs(h - Number(f.cutoutPanoFrameTarget || 0)) > 1e-6 && (f.cutoutPanoFrameFrom = Number(f.cutoutPanoFrameAlpha || 0), f.cutoutPanoFrameTarget = h, f.cutoutPanoFrameStartTs = r), Math.abs(Number(f.cutoutPanoFrameAlpha || 0) - h) > 1e-6) {
      const g = G(
        (r - Number(f.cutoutPanoFrameStartTs || r)) / Hd,
        0,
        1
      );
      f.cutoutPanoFrameAlpha = wn(
        Number(f.cutoutPanoFrameFrom || 0),
        h,
        Ro(g)
      ), g >= 1 && (f.cutoutPanoFrameAlpha = h, h === 0 && (f.cutoutPanoFrameVisual = null)), oe.dirty = !0;
    }
    if (f.outputPreviewAnim !== f.outputPreviewAnimTo) {
      const g = Math.max(1, Number(f.outputPreviewAnimDurationMs)), x = G((r - Number(f.outputPreviewAnimStartTs || 0)) / g, 0, 1), P = f.outputPreviewAnimTo > f.outputPreviewAnimFrom ? $w(x) : Hw(x);
      f.outputPreviewAnim = wn(f.outputPreviewAnimFrom, f.outputPreviewAnimTo, P), oe.dirty = !0, x >= 1 && (f.outputPreviewAnim = f.outputPreviewAnimTo);
    }
    if ((b = f.viewTween) != null && b.active) {
      const g = f.viewTween, x = G((r - g.startTs) / g.durationMs, 0, 1), M = Ro(x);
      f.viewYaw = Vt(g.startYaw + g.deltaYaw * M), f.viewPitch = g.startPitch + (g.targetPitch - g.startPitch) * M, f.viewFov = g.startFov + (g.targetFov - g.startFov) * M, oe.backgroundDirty = !0, oe.dirty = !0, x >= 1 && (f.viewTween = null);
    }
    if (f.viewInertia.vx = Number(Gt.state.inertia.vx || 0), f.viewInertia.vy = Number(Gt.state.inertia.vy || 0), f.viewInertia.active = !!Gt.state.inertia.active, Gt.stepInertia(r) && (f.viewInertia.vx = Number(Gt.state.inertia.vx || 0), f.viewInertia.vy = Number(Gt.state.inertia.vy || 0), f.viewInertia.active = !!Gt.state.inertia.active, oe.backgroundDirty = !0, oe.dirty = !0), (oe.dirty || r - oe.lastSizeCheckTs >= 220) && (ju(), oe.lastSizeCheckTs = r), oe.pendingStableLayoutFrames > 0 && (oe.pendingStableLayoutFrames -= 1, oe.dirty = !0), oe.dirty) {
      if (oe.pendingStableLayoutFrames > 0)
        return;
      oe.dirty = !1, Cg();
    }
  }
  function Vu(r = performance.now()) {
    if (oe.running)
      try {
        Dg(r);
      } catch (o) {
        const s = String((o == null ? void 0 : o.stack) || (o == null ? void 0 : o.message) || o || "unknown editor frame error");
        oe.tickErrorSignature !== s && (oe.tickErrorSignature = s, console.error("[PanoramaStickers] editor frame failed", o)), k.stageStatus = Yn, k.stageStatusDetail = "frame", ce == null || ce.setAttribute("data-stage-ready", ""), ce == null || ce.removeAttribute("data-stage-loading-kind");
      } finally {
        oe.running && (oe.rafId = requestAnimationFrame(Vu));
      }
  }
  function Eg() {
    oe.running = !1, oe.rafId && cancelAnimationFrame(oe.rafId), oe.rafId = 0;
  }
  function Ze() {
    i || (f.historyController.commitActionGroup(JSON.stringify(Kd(v))), vl());
  }
  function hl(r) {
    if (i) return;
    const o = r < 0 ? f.historyController.undo() : f.historyController.redo();
    if (vl(), !o) return;
    const s = JSON.parse(o);
    Object.keys(v).forEach((l) => delete v[l]), Object.assign(v, s), f.selectedId = t === "stickers" || t === "cutout" ? v.active.selected_sticker_id : v.active.selected_shot_id, f.selectedIds = f.selectedId ? [f.selectedId] : [], In(), cn(), Ve(), gn(), fe({ cause: "cutout_frame" });
  }
  function Hu() {
    var s, l;
    const r = Array.isArray((s = f.historyController) == null ? void 0 : s.entries) ? f.historyController.entries : [], o = Number((l = f.historyController) == null ? void 0 : l.index);
    return {
      canUndo: !i && r.length > 1 && o > 0,
      canRedo: !i && r.length > 1 && o >= 0 && o < r.length - 1
    };
  }
  function cn() {
    Um();
    const r = s_({
      editor: f,
      swatches: es,
      paintColorPopOpen: Xe ? !Xe.hidden : !1,
      colorToCss: Vn,
      colorsApproximatelyEqual: ts,
      rgb01ToHsv: Ql,
      hsv01ToRgb: Zl,
      getBrushPresetIdForTool: Nr,
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
    const r = t === "cutout" && f.mode === "frame" ? Fe() : bt();
    r && (f.panelLastValues = {
      yaw_deg: Number(r.yaw_deg || 0),
      pitch_deg: Number(r.pitch_deg || 0),
      hFOV_deg: Number(r.hFOV_deg || (t === "stickers" ? 30 : 90)),
      vFOV_deg: Number(r.vFOV_deg || (t === "stickers" ? 30 : 60)),
      rot_deg: Number(r.rot_deg || 0),
      roll_deg: Number(r.roll_deg || 0),
      aspect_id: Ci(r)
    }, Ve());
  }
  function Ve() {
    var Le, Ke, de, Z;
    if (a) return;
    v.ui_settings = v.ui_settings || {};
    const r = o_(v.ui_settings);
    if (c) {
      k.sidePanel = l_({
        coverage: v.coverage,
        uiSettings: r,
        normalizeCoverageValue: Kt
      });
      return;
    }
    const o = bt(), s = t === "cutout" && f.mode === "frame" ? Fe() : null, l = s || o, h = s ? [s] : Tn(), m = s ? "shot" : Za();
    h.length > 1 && (f.panelLastValues = f.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), l && m !== "stroke" && (f.panelLastValues = {
      yaw_deg: Number(l.yaw_deg || 0),
      pitch_deg: Number(l.pitch_deg || 0),
      hFOV_deg: Number(l.hFOV_deg || (m === "image" ? 30 : 90)),
      vFOV_deg: Number(l.vFOV_deg || (m === "image" ? 30 : 60)),
      rot_deg: Number(l.rot_deg || 0),
      roll_deg: Number(l.roll_deg || 0),
      aspect_id: Ci(l)
    });
    const b = f.panelLastValues || (t === "stickers" || m === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), g = m === "stroke" ? null : l, x = g || b, M = !!g;
    f.panelWasEnabled = M, tl();
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
      t === "stickers" ? er().forEach((Ne, je) => {
        var Dt, at;
        if (!Ne) return;
        const qe = Ut(Ne) ? String(Ne.id || Wr) : String(((at = (Dt = v.assets) == null ? void 0 : Dt[Ne.asset_id]) == null ? void 0 : at.name) || Ne.asset_id || Ne.id), He = `${je + 1}. ${qe}${Ut(Ne) && hi(Ne) ? " (hidden)" : ""}`, et = Xs({ item: Ne, label: He, kind: "image" });
        ue.push({ id: Ne.id, label: et.label, icon: et.icon, item: Ne, kind: "image" });
      }) : cu().forEach((Ne) => {
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
    ), le = !!String((re == null ? void 0 : re.src) || "").trim() || Js("pano_input_images").length > 0, ee = Array.isArray(er()) && er().length > 0 || q > 0, be = B > 0, Ee = [
      { key: "mask", label: "Mask", icon: Oe.circle_dashed_tool, visible: !!f.showMask, enabled: be },
      { key: "objects", label: "Paint / Images", icon: Oe.image, visible: !!f.showObjects, enabled: ee },
      { key: "panorama", label: "Panorama", icon: Oe.globe, visible: !!f.showPanorama, enabled: le }
    ].map((ue) => ({
      ...ue,
      ariaLabel: `Toggle ${ue.label.toLowerCase()}`,
      tip: ue.visible ? "Hide" : "Show"
    }));
    k.sidePanel = c_({
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
  function uo(r) {
    if (!r) return !1;
    if (String(r.type || "").toLowerCase().startsWith("image/")) return !0;
    const s = String(r.name || "").toLowerCase();
    return s.endsWith(".png") || s.endsWith(".jpg") || s.endsWith(".jpeg") || s.endsWith(".webp") || s.endsWith(".gif") || s.endsWith(".bmp");
  }
  async function Uu(r) {
    if (i || t !== "stickers" && t !== "cutout" || !uo(r)) return;
    const o = Uo("asset"), s = URL.createObjectURL(r);
    try {
      const l = await new Promise((b, g) => {
        const x = new Image();
        x.onload = () => b(x), x.onerror = () => g(new Error("image load failed")), x.src = s;
      });
      ge.set(o, l);
      const h = Uo("st");
      v.stickers.push({
        id: h,
        asset_id: o,
        yaw_deg: f.viewYaw,
        pitch_deg: f.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: zr(30, Number(l.naturalWidth || l.width || 1), Number(l.naturalHeight || l.height || 1)),
        rot_deg: 0,
        z_index: uu()
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
      const l = Array.isArray(v.stickers) ? v.stickers : [], h = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") === o);
      h.length && (v.stickers = l.filter((m) => String((m == null ? void 0 : m.asset_id) || "") !== o), h.some((m) => {
        var b;
        return String((m == null ? void 0 : m.id) || "") === String(((b = f.selection) == null ? void 0 : b.id) || "");
      }) && di(null), Ve(), Ge(), fe());
    } finally {
      URL.revokeObjectURL(s);
    }
  }
  function Bu(r) {
    const o = document.createElement("input");
    o.type = "file", o.accept = "image/*", o.onchange = () => {
      var l;
      const s = (l = o.files) == null ? void 0 : l[0];
      !s || typeof r != "function" || r(s);
    }, o.click();
  }
  function Og() {
    i || t !== "stickers" && t !== "cutout" || Bu((r) => {
      Uu(r);
    });
  }
  async function Rg(r) {
    var M;
    if (i || t !== "stickers" && t !== "cutout") return;
    const o = bt();
    if (!o || !gt(o) || Ut(o) || !uo(r)) return;
    const s = String(o.id || ""), l = String(o.asset_id || ""), h = l ? Jt(((M = v.assets) == null ? void 0 : M[l]) || null) : null, m = Number(o.vFOV_deg || 0), b = o.crop && typeof o.crop == "object" ? { ...o.crop } : null, g = Uo("asset"), x = URL.createObjectURL(r);
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
      P && String(P.asset_id || "") === g && (l && h && (v.assets[l] = h), P.asset_id = l, P.vFOV_deg = m, P.crop = b ? { ...b } : null), Bt(), Ve(), Ge(), fe();
    } finally {
      URL.revokeObjectURL(x);
    }
  }
  function Fg() {
    if (i) return;
    const r = bt();
    !r || !gt(r) || Ut(r) || Bu((o) => {
      Rg(o);
    });
  }
  async function Lg() {
    if (i || t !== "stickers") return;
    const r = v.assets && typeof v.assets == "object" ? v.assets : {}, o = Object.entries(r).filter(([, l]) => {
      const h = String((l == null ? void 0 : l.type) || "").toLowerCase(), m = String((l == null ? void 0 : l.value) || "");
      return h === "dataurl" && m.startsWith("data:image");
    });
    if (!o.length) return;
    let s = !1;
    for (const [l, h] of o)
      try {
        const m = String((h == null ? void 0 : h.value) || "");
        if (!m) continue;
        const b = await fetch(m).then((N) => N.blob()), g = String(b.type || "image/png").split("/")[1] || "png", x = String((h == null ? void 0 : h.name) || `${l}.${g}`), M = new File([b], x, { type: b.type || "image/png" }), P = await il(M, x);
        v.assets[l] = {
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
      di(r), f.mode = "pano", Hs(
        Vt(Number(r.yaw_deg || 0)),
        G(Number(r.pitch_deg || 0), -89.9, 89.9),
        f.viewFov
      ), Ve(), Ge(), fe({ cause: "cutout_frame" });
      return;
    }
    const o = jr(), s = wr(o), l = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoWidth) || (o == null ? void 0 : o.naturalWidth) || (o == null ? void 0 : o.width) : 0) || (F == null ? void 0 : F.width) || 1
    )), h = Math.max(1, Number(
      (s ? (o == null ? void 0 : o.videoHeight) || (o == null ? void 0 : o.naturalHeight) || (o == null ? void 0 : o.height) : 0) || (F == null ? void 0 : F.height) || 1
    )), m = Math.max(0.1, l / h), b = G(Number(f.viewFov || 90), 1, 179), g = G(Math.min(42, b * 0.42), 8, 96), x = G(Sn * (2 * Math.atan(Math.tan(g * Ct * 0.5) / Math.max(0.1, m))), 6, 72), M = Em({
      id: `frame_${Date.now().toString(36)}`,
      label: "Frame 1",
      yaw_deg: Vt(Number(f.viewYaw || 0)),
      pitch_deg: G(Number(f.viewPitch || 0), -89.9, 89.9),
      roll_deg: 0,
      hFOV_deg: g,
      vFOV_deg: x,
      locked: !1
    });
    v.shots = [M], di(M), ml(), f.mode = "pano", Ze(), it(), Ve(), Ge(), fe({ cause: "cutout_frame" });
  }
  function zg() {
    i || t === "cutout" && (v.shots = [], f.selectedId = null, f.selectedIds = [], f.mode === "frame" && (f.mode = "pano"), f.cutoutAspectOpen = !1, v.active.selected_shot_id = null, Ze(), it(), Ve(), fe());
  }
  function jg() {
    const r = Array.isArray(v.stickers) ? v.stickers : [], o = [];
    for (const s of r)
      Ut(s) && (s.visible = !1, o.push(s));
    return o;
  }
  function Gu(r, o, s = "Clear") {
    return new Promise((l) => {
      k.confirmDialog = {
        visible: !0,
        title: String(r || ""),
        text: String(o || ""),
        confirmLabel: String(s || "Confirm"),
        resolve: l
      };
    });
  }
  async function Vg() {
    var s, l;
    if (i || !await Gu(
      "Clear All Paint Data",
      t === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, cutout frames, and images in the current node.",
      "Clear All"
    )) return;
    v.painting = Pa(null), In();
    const o = jg();
    t === "stickers" ? (v.stickers = o, v.assets = {}, f.selectedId = ((s = o[0]) == null ? void 0 : s.id) || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], v.active.selected_sticker_id = ((l = o[0]) == null ? void 0 : l.id) || null, yi()) : (v.stickers = o, v.assets = {}, v.shots = [], f.selectedId = null, f.selectedIds = [], v.active.selected_sticker_id = null, v.active.selected_shot_id = null, f.mode === "frame" && (f.mode = "pano"), f.cutoutAspectOpen = !1, yi()), Ze(), it(), Ve(), Ge(), fe();
  }
  async function Hg(r) {
    var m, b, g, x;
    if (i) return;
    const o = r === "mask" ? "mask" : "paint", s = o === "mask" ? "Mask" : "Paint", l = wi(o);
    if (!(!l.length && !(((m = f.interaction) == null ? void 0 : m.kind) === "draw" && ((b = f.interaction) == null ? void 0 : b.layerKind) === o) || !await Gu(
      `Clear ${s}`,
      `This will remove all ${o} strokes in the current node.`,
      `Clear ${s}`
    ))) {
      if (((g = f.interaction) == null ? void 0 : g.kind) === "draw" && ((x = f.interaction) == null ? void 0 : x.layerKind) === o) {
        const M = pn();
        M && f.paintEngine.cancelActiveStroke(M), f.interaction = null;
      }
      l.length = 0, v.painting.raster_objects = ln().filter((M) => String((M == null ? void 0 : M.layerKind) || "paint") !== o), o === "paint" && (Yt().length = 0), In(), Ze(), it(), Ve(), Ge(), cn(), fe();
    }
  }
  function Ug() {
    if (i) return;
    const r = bt();
    if (!r || !gt(r) || Ut(r)) return;
    const o = JSON.parse(JSON.stringify(r));
    o.id = Uo("st"), o.yaw_deg = Vt((o.yaw_deg || 0) + 8), o.z_index = uu(), v.stickers.push(o), v.active.selected_sticker_id = o.id, f.selectedId = o.id, f.selectedIds = [o.id], Bt(), Ze(), it(), Ge(), Ve(), fe();
  }
  function Ku() {
    var s, l, h, m, b, g;
    if (i) return;
    const r = Tn(), o = bt();
    if (!(!o && r.length === 0)) {
      if (r.length > 1) {
        const x = new Set(r.filter((N) => Rt(N)).map((N) => String(N.actionGroupId || N.id || ""))), M = new Set(r.filter((N) => qt(N)).map((N) => zt(N.rasterObjectId || N.id || ""))), P = new Set(r.filter(gt).map((N) => String(N.id || "")));
        x.size > 0 && (v.painting.paint.strokes = (Array.isArray((l = (s = v.painting) == null ? void 0 : s.paint) == null ? void 0 : l.strokes) ? v.painting.paint.strokes : []).filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || ""))), v.painting.groups = Yt().filter((N) => !x.has(String((N == null ? void 0 : N.actionGroupId) || (N == null ? void 0 : N.id) || ""))), In()), M.size > 0 && (v.painting.raster_objects = ln().filter((N) => !M.has(String((N == null ? void 0 : N.id) || ""))), xi()), P.size > 0 && (v.stickers = (Array.isArray(v.stickers) ? v.stickers : []).filter((N) => P.has(String((N == null ? void 0 : N.id) || "")) ? Ut(N) ? (hi(N) || (N.visible = !1), !0) : !1 : !0), yi(), Bt()), f.selectedId = null, f.selectedIds = [], Ze(), it(), Ve(), Ge(), fe();
        return;
      }
      if (Rt(o)) {
        const x = String(o.actionGroupId || o.id || "").trim();
        v.painting.paint.strokes = (Array.isArray((m = (h = v.painting) == null ? void 0 : h.paint) == null ? void 0 : m.strokes) ? v.painting.paint.strokes : []).filter((M) => String((M == null ? void 0 : M.actionGroupId) || "").trim() !== x), v.painting.groups = Yt().filter((M) => String((M == null ? void 0 : M.actionGroupId) || (M == null ? void 0 : M.id) || "").trim() !== x), In(), f.selectedId = null, f.selectedIds = [], Ze(), it(), Ve(), Ge(), fe();
        return;
      }
      if (qt(o)) {
        const x = zt(o.rasterObjectId || o.id || "");
        v.painting.raster_objects = ln().filter((M) => String((M == null ? void 0 : M.id) || "").trim() !== x), xi(), f.selectedId = null, f.selectedIds = [], Ze(), it(), Ve(), Ge(), fe();
        return;
      }
      if (t === "stickers" || gt(o)) {
        if (Ut(o)) {
          if (hi(o)) return;
          o.visible = !1, Bt(), Ze(), it(), Ve(), Ge(), fe();
          return;
        }
        v.stickers = v.stickers.filter((x) => x.id !== o.id), yi(), Bt(), f.selectedId = ((b = v.stickers[0]) == null ? void 0 : b.id) || null, f.selectedIds = f.selectedId ? [f.selectedId] : [], v.active.selected_sticker_id = ((g = v.stickers[0]) == null ? void 0 : g.id) || null, Ze(), it(), Ve(), Ge(), fe();
        return;
      }
      zg();
    }
  }
  function Wu(r, o) {
    const s = oe.frameSafeRect;
    if (!r || !s || f.mode !== "frame") return !1;
    const l = ql * Gl(s, r), h = r_(n_(s, o), l);
    return r.hFOV_deg = h.hFOV_deg, r.vFOV_deg = h.vFOV_deg, !0;
  }
  function Yu(r, o) {
    if (!r) return;
    const s = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, l = (() => {
      const g = String(r.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(g)) {
        const [P, N] = g.split(":").map((T) => Number(T));
        if (Number.isFinite(P) && Number.isFinite(N)) return P >= N;
      }
      const x = Number(r.hFOV_deg || 64), M = Number(r.vFOV_deg || 40);
      return Math.abs(x - M) > 1e-6 ? x >= M : ns(r) >= 1;
    })();
    let [h, m] = s[String(o)] || s["1:1"];
    h >= m !== l && ([h, m] = [m, h]);
    const b = h / m;
    if (!Wu(r, b)) {
      const g = G(Number(r.vFOV_deg || 40), 1, 179);
      r.vFOV_deg = g, r.hFOV_deg = zd(g, b);
    }
    r.aspect_id = `${h}:${m}`;
  }
  function qu(r) {
    if (!r) return;
    const o = String(r.aspect_id || "").trim(), s = $s(r), l = s.tanHalfX / Math.max(1e-12, s.tanHalfY), h = 1 / Math.max(1e-12, l);
    if (!Wu(r, h)) {
      const m = G(Number(r.vFOV_deg || 60), 1, 179);
      r.vFOV_deg = m, r.hFOV_deg = zd(m, h);
    }
    if (/^\d+:\d+$/.test(o)) {
      const [m, b] = o.split(":");
      r.aspect_id = `${b}:${m}`;
    } else
      r.aspect_id = Xr(r);
  }
  function Xu() {
    ci().forEach((o, s) => {
      o.type === "sticker" && o.item && (o.item.z_index = s), o.type === "strokeGroup" && o.item && (o.item.z_index = s), o.type === "rasterObject" && o.item && (o.item.z_index = s);
    });
  }
  function Bg() {
    if (i) return;
    const r = Tn();
    if (!bt() || r.length === 0) return;
    Xu();
    const s = ci(), l = new Set(r.map((g) => gt(g) ? `sticker:${String(g.id || "")}` : qt(g) ? `rasterObject:${zt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var M, P;
      const x = g.type === "sticker" ? `sticker:${String(((M = g.item) == null ? void 0 : M.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((P = g.item) == null ? void 0 : P.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      l.has(x) ? h.push(g) : m.push(g);
    }), !h.length || h[h.length - 1] === s[s.length - 1]) return;
    [...m, ...h].forEach((g, x) => {
      g.type === "sticker" && g.item && (g.item.z_index = x), g.type === "strokeGroup" && g.item && (g.item.z_index = x), g.type === "rasterObject" && g.item && (g.item.z_index = x);
    }), Bt(), Ze(), it(), Ge(), fe();
  }
  function Gg() {
    if (i) return;
    const r = Tn();
    if (!bt() || r.length === 0) return;
    Xu();
    const s = ci(), l = new Set(r.map((g) => gt(g) ? `sticker:${String(g.id || "")}` : qt(g) ? `rasterObject:${zt(g.rasterObjectId || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || g.id || "")}`)), h = [], m = [];
    if (s.forEach((g) => {
      var M, P;
      const x = g.type === "sticker" ? `sticker:${String(((M = g.item) == null ? void 0 : M.id) || "")}` : g.type === "rasterObject" ? `rasterObject:${String(((P = g.item) == null ? void 0 : P.id) || g.id || "")}` : `strokeGroup:${String(g.actionGroupId || "")}`;
      l.has(x) ? h.push(g) : m.push(g);
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
  function fo() {
    v.ui_settings = Xw(v.ui_settings), i || gn();
  }
  function it() {
    var r;
    i || (gn(), (r = e.setDirtyCanvas) == null || r.call(e, !0, !0));
  }
  function Wg() {
    i || Tp() && Mu().catch((r) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", r);
    });
  }
  function Yg(r = {}) {
    var l, h, m, b, g, x, M, P, N, T;
    const o = r.syncPreview !== !1, s = r.syncGraph !== !1;
    o && ((h = (l = e.__panoPreviewNodeRuntime) == null ? void 0 : l.requestDraw) == null || h.call(l), (b = (m = e.__panoDomPreview) == null ? void 0 : m.requestDraw) == null || b.call(m), (g = e.setDirtyCanvas) == null || g.call(e, !0, !1)), s && ((M = (x = e.graph) == null ? void 0 : x.setDirtyCanvas) == null || M.call(x, !0, !0), (T = (N = (P = yn) == null ? void 0 : P.canvas) == null ? void 0 : N.setDirty) == null || T.call(N, !0, !0));
  }
  function ml() {
    f.primaryTool !== "cursor" && (f.primaryTool = "cursor", cn(), Ve());
  }
  function Vr(r) {
    const o = F.getBoundingClientRect();
    return {
      x: (r.clientX - o.left) / o.width * F.width,
      y: (r.clientY - o.top) / o.height * F.height
    };
  }
  function ho(r) {
    const o = F.getBoundingClientRect();
    return {
      x: Number(r.clientX) - Number(o.left || 0),
      y: Number(r.clientY) - Number(o.top || 0)
    };
  }
  function Ju() {
    return f.mode === "pano" || f.mode === "unwrap";
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
    let l = 24, h = 24;
    const m = Math.max(l + 1, F.width - 24);
    let b = Math.max(h + 1, F.height - 24);
    const g = (q = $e == null ? void 0 : $e.getBoundingClientRect) == null ? void 0 : q.call($e), x = (B = ze == null ? void 0 : ze.getBoundingClientRect) == null ? void 0 : B.call(ze);
    let M = 24;
    g && r && g.width > 0 && g.height > 0 && (M = Math.max(M, (g.right - r.left) * o + Vd)), x && r && x.width > 0 && x.height > 0 && ((Y = k.frameRail) == null ? void 0 : Y.visible) === !0 && (M = Math.max(M, (r.right - x.left) * o + Vd)), l = Math.max(l, M);
    const P = Math.min(m, F.width - M);
    let N = 24;
    const T = (re = _e == null ? void 0 : _e.getBoundingClientRect) == null ? void 0 : re.call(_e);
    if (T && r && T.width > 0 && T.height > 0 && (N = Math.max(N, (T.bottom - r.top) * s + Xl)), [wt, Ot].forEach((le) => {
      var Ee;
      if (!le || !r) return;
      const ee = getComputedStyle(le);
      if (ee.display === "none" || ee.visibility === "hidden" || Number(ee.opacity) <= 0) return;
      const be = (Ee = le.getBoundingClientRect) == null ? void 0 : Ee.call(le);
      !be || be.width <= 0 || be.height <= 0 || (N = Math.max(N, (r.bottom - be.top) * s + Xl));
    }), X && r) {
      const le = getComputedStyle(X);
      le.display !== "none" && le.visibility !== "hidden" && Number(le.opacity) > 0 && (N = Math.max(N, (Dw + Xl) * s));
    }
    return h = Math.max(h, N), b = Math.max(h + 1, Math.min(b, F.height - N)), {
      x: l,
      y: h,
      w: Math.max(1, P - l),
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
    return i_(o, r, ql * Gl(o, r));
  }
  function Ft(r = Fe()) {
    const o = pl(r);
    return o ? { x: o.x, y: o.y, w: o.w, h: o.h } : null;
  }
  function gl() {
    return t === "cutout" && !!Fe();
  }
  function Dn(r, o = performance.now()) {
    if (f.mode === "unwrap") {
      const m = xr(), b = (r.x - m.x) / Math.max(1, m.w), g = (r.y - m.y) / Math.max(1, m.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (b % 1 + 1) % 1,
        v: G(g, 0, 1),
        t: Number(o || 0)
      };
    }
    const s = rl(r.x, r.y), { lon: l, lat: h } = ol(s);
    return {
      targetKind: "ERP_GLOBAL",
      u: (l / (2 * Math.PI) + 0.5 + 1) % 1,
      v: G(0.5 - h / Math.PI, 0, 1),
      t: Number(o || 0)
    };
  }
  function En(r, o, s = performance.now()) {
    const l = Ft(o);
    if (!l) return null;
    const h = {
      x: (Number(r.x) - l.x) / Math.max(1, l.w),
      y: (Number(r.y) - l.y) / Math.max(1, l.h)
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
    const l = Number(o) < 1, h = a_(s, 1 / Number(o));
    if (!h) return !1;
    if (l) {
      const m = ql * Gl(
        oe.frameSafeRect || { w: F.width, h: F.height },
        h
      ), b = $d({ width: F.width, height: F.height }, m);
      if (b.halfW < F.width * 0.5 - 1e-6 || b.halfH < F.height * 0.5 - 1e-6) return !1;
    }
    return s.hFOV_deg = h.hFOV_deg, s.vFOV_deg = h.vFOV_deg, f.frameWheelChanged = !0, f.frameWheelCommitTimer && window.clearTimeout(f.frameWheelCommitTimer), f.frameWheelCommitTimer = window.setTimeout(() => {
      f.frameWheelCommitTimer = 0, f.frameWheelChanged && (f.frameWheelChanged = !1, Ze(), it(), Ve());
    }, 180), Ve(), !0;
  }
  function Jg() {
    return f.frameWheelCommitTimer && (window.clearTimeout(f.frameWheelCommitTimer), f.frameWheelCommitTimer = 0), f.frameWheelChanged ? (f.frameWheelChanged = !1, Ze(), it(), Ve(), !0) : !1;
  }
  function oa() {
    const r = f.interaction;
    if (!(r != null && r.shot) || !r.start || r.kind !== "pan_frame" && r.kind !== "roll_frame") return !1;
    const o = r.kind === "roll_frame";
    return r.kind === "pan_frame" ? (r.shot.yaw_deg = r.start.yaw_deg, r.shot.pitch_deg = r.start.pitch_deg) : r.shot.roll_deg = r.start.roll_deg, o && Hr(), f.interaction = null, bi(), _r(), Ve(), ct(f.pointerPos), fe({ localOnly: !0 }), !0;
  }
  function Zg(r, o) {
    const s = Number(o || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, s / 2048)
    };
  }
  function Nr(r) {
    const o = String(r || "").trim();
    return o === "eraser" ? or : un[o] ? o : f.activeBrushPresetId || or;
  }
  function Zu() {
    return (f.primaryTool === "paint" || f.primaryTool === "mask") && (Ju() || gl());
  }
  function Qu() {
    var r;
    return Zu() && ((r = f.pointerPos) == null ? void 0 : r.inside) === !0;
  }
  function mo(r, o = !0) {
    const s = Number((r == null ? void 0 : r.x) || 0), l = Number((r == null ? void 0 : r.y) || 0), h = o !== !1, m = f.pointerPos || { x: 0, y: 0, inside: !1 }, b = m.inside !== h || Math.abs(m.x - s) > 0.01 || Math.abs(m.y - l) > 0.01;
    return f.pointerPos = { x: s, y: l, inside: h }, b;
  }
  function Qg() {
    var P, N;
    if (!Qu()) return null;
    const r = f.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? f.maskTool : f.paintTool, s = Nr(o), l = un[s] || un[or], h = Number(f.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), b = Math.max(3, m * 0.5), g = r === "mask" ? o === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : o === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : bn(f.paintColor), x = r === "mask" ? o === "lasso_fill" ? 0.18 : 0.2 : o === "eraser" ? 0.06 : G(Math.max(0.16, Number(g.a ?? 1) * 0.3), 0.16, 0.52), M = r === "mask" ? 0.95 : o === "eraser" ? 0.75 : G(Math.max(0.46, Number(g.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: r,
      toolKind: o,
      preset: l,
      radius: b,
      fillStyle: Vn(g, x),
      strokeStyle: Vn(g, M),
      x: Number(((P = f.pointerPos) == null ? void 0 : P.x) || 0),
      y: Number(((N = f.pointerPos) == null ? void 0 : N.y) || 0),
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
    let o = r.radius * 2, s = r.radius * 2, l = "999px", h = 0, m = r.fillStyle, b = "1px solid rgba(222, 222, 222, 0.72)", g = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const x = "rgba(222, 222, 222, 0.72)", M = "rgba(52, 52, 52, 0.72)";
    let P = Number(r.hotspotX ?? o * 0.5), N = Number(r.hotspotY ?? s * 0.5);
    if (r.toolKind === "lasso_fill")
      o = ws, s = ws, l = "0", b = "0", g = "none", P = Rw, N = Fw, m = Bw(r.fillStyle, M, x);
    else if (r.layerKind === "mask")
      m = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (r.toolKind === "marker") {
      const B = Math.max(1, Number(((T = r.preset) == null ? void 0 : T.aspect) ?? 1));
      o = Math.max(10, r.radius * 2 * B), s = Math.max(6, r.radius * 2), l = `${Math.min(6, s * 0.42)}px`, h = Number(((q = (z = r.preset) == null ? void 0 : z.angle) == null ? void 0 : q.value) || 0) * Sn;
    } else r.toolKind === "brush" ? m = `radial-gradient(circle at 50% 50%, ${r.strokeStyle} 0%, ${r.fillStyle} 45%, rgba(0,0,0,0) 100%)` : r.toolKind === "eraser" && (m = "rgba(255,255,255,0.14)");
    U.style.display = "block", U.style.width = `${Math.round(o)}px`, U.style.height = `${Math.round(s)}px`, U.style.borderRadius = l, U.style.border = b, U.style.boxShadow = g, U.style.background = m, U.style.backgroundRepeat = "no-repeat", U.style.backgroundPosition = "center", U.style.backgroundSize = "contain", U.style.transform = `translate(${Math.round(r.x - P)}px, ${Math.round(r.y - N)}px) rotate(${h}deg)`;
  }
  function t0() {
    var le;
    if (!ve || !xe) return;
    const r = f.primaryTool === "mask" ? "mask" : "paint", o = r === "mask" ? f.maskTool : f.paintTool;
    if (o === "lasso_fill") return;
    const s = Nr(o), l = un[s] || un[or], h = Number(f.brushSizes[s] ?? 10), m = Math.max(1, h) * Math.max(0.1, Number(l.sizeScale ?? 1)), b = Math.max(6, m * 0.5), g = o === "eraser", x = r === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : g ? { r: 1, g: 1, b: 1, a: 0.22 } : bn(f.paintColor), M = r === "mask" ? Vn(x, 0.22) : g ? "rgba(255,255,255,0.14)" : Vn(x, G(Math.max(0.18, Number(x.a ?? 1) * 0.34), 0.18, 0.56)), P = r === "mask" ? Vn(x, 0.96) : g ? "rgba(255,255,255,0.72)" : Vn(x, G(Math.max(0.56, Number(x.a ?? 1) * 0.96), 0.56, 1));
    let N = b * 2, T = b * 2, z = "999px", q = 0, B = M;
    const Y = "rgba(222, 222, 222, 0.72)", re = "rgba(52, 52, 52, 0.72)";
    if (r === "mask")
      B = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (o === "marker") {
      const ee = Math.max(1, Number((l == null ? void 0 : l.aspect) ?? 1));
      N = Math.max(16, b * 2 * ee), T = Math.max(10, b * 2), z = `${Math.min(8, T * 0.42)}px`, q = Number(((le = l == null ? void 0 : l.angle) == null ? void 0 : le.value) || 0) * Sn;
    } else o === "brush" ? B = `radial-gradient(circle at 50% 50%, ${P} 0%, ${M} 48%, rgba(0,0,0,0) 100%)` : o === "lasso_fill" ? (N = Math.max(18, b * 1.8), T = N, B = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${P} 43%, ${P} 58%, rgba(0,0,0,0) 59%)`) : g && (B = "rgba(255,255,255,0.12)");
    xe.style.width = `${Math.round(N)}px`, xe.style.height = `${Math.round(T)}px`, xe.style.borderRadius = z, xe.style.background = B, xe.style.border = `1px solid ${Y}`, xe.style.boxShadow = `0 0 0 1px ${re}`, xe.style.transform = `rotate(${q}deg)`, Q && (clearTimeout(Q), Q = 0), ve.classList.remove("fade-out"), ve.classList.add("show");
  }
  function po() {
    !ve || !ve.classList.contains("show") || (ve.classList.add("fade-out"), Q && clearTimeout(Q), Q = window.setTimeout(() => {
      ve.classList.remove("show", "fade-out"), Q = 0;
    }, 180));
  }
  function ef(r, o, s, l) {
    const h = Nr(o), m = un[h] || un[or], b = f.brushSizes[h] ?? 10, g = Math.max(1, b) * Math.max(0.1, m.sizeScale ?? 1), x = Zg(l, g), M = s.map((N) => ({
      ...N,
      t: Number((N == null ? void 0 : N.t) || 0),
      widthScale: Number.isFinite(Number(N == null ? void 0 : N.widthScale)) ? Math.max(0, Number(N.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(N == null ? void 0 : N.pressureLike)) ? Math.max(0, Number(N.pressureLike)) : 1
    })), P = {
      id: Ti(r),
      actionGroupId: Ti("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(f.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(f.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: g,
      createdAt: Date.now(),
      color: r === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: x.radiusModel,
      radiusValue: x.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: M.map((N) => ({ ...N })),
        points: M.map((N) => ({ ...N }))
      }
    };
    return Dd(P, m), Number(m.aspect ?? 1), Number(P.aspect ?? 1), String(P.stampKind || ""), Number(P.size || 0), String(P.radiusModel || ""), Number(P.radiusValue || 0), { ...P.targetSpace }, P;
  }
  function tf(r, o, s, l) {
    const h = s.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), m = Nr(o), b = un[m] || un[or], g = {
      id: Ti(r),
      actionGroupId: Ti("ag"),
      targetSpace: l && typeof l == "object" ? { ...l, viewMode: String(f.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(f.mode || "pano") },
      layerKind: r,
      toolKind: o,
      size: 10,
      createdAt: Date.now(),
      color: r === "paint" ? { ...f.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: h.map((x) => ({ ...x }))
      }
    };
    return Dd(g, b), Number(b.aspect ?? 1), Number(g.aspect ?? 1), String(g.stampKind || ""), { ...g.targetSpace }, g;
  }
  function wi(r) {
    const o = v.painting || (v.painting = Pa(null)), s = o[r] || (o[r] = { strokes: [] });
    return Array.isArray(s.strokes) || (s.strokes = []), s.strokes;
  }
  function n0(r, o, s = performance.now()) {
    let l;
    if (f.mode === "frame") {
      const M = Fe();
      if (!M || (l = En(o, M, s), !l)) return !1;
    } else
      l = Dn(o, s);
    if (!l) return !1;
    const h = r.stroke.geometry.rawPoints || r.stroke.geometry.points, m = r.stroke.geometry.points, b = h[h.length - 1];
    if (b) {
      const M = Math.abs(Number(l.u ?? l.x ?? 0) - Number(b.u ?? b.x ?? 0)), P = Math.abs(Number(l.v ?? l.y ?? 0) - Number(b.v ?? b.y ?? 0));
      if (M < 15e-4 && P < 15e-4) return !1;
    }
    const g = {
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    h.push({ ...g }), m.push({ ...g });
    const x = pn();
    if (x) {
      const M = f.paintEngine.ensureTarget(x);
      f.paintEngine.appendStrokePoint(M, Number(g.u ?? 0), Number(g.v ?? 0), r.stroke);
    }
    return !0;
  }
  function r0(r, o, s = performance.now()) {
    var b, g;
    let l;
    if (f.mode === "frame") {
      const x = Fe();
      if (!x) return !1;
      l = En(o, x, s);
    } else
      l = Dn(o, s);
    const h = (g = (b = r == null ? void 0 : r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.points;
    if (!l || !Array.isArray(h)) return !1;
    const m = h[h.length - 1];
    if (m) {
      const x = Math.abs(Number(l.u ?? l.x ?? 0) - Number(m.u ?? m.x ?? 0)), M = Math.abs(Number(l.v ?? l.y ?? 0) - Number(m.v ?? m.y ?? 0));
      if (x < 15e-4 && M < 15e-4) return !1;
    }
    return h.push({
      ...l,
      t: Number((l == null ? void 0 : l.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function i0(r) {
    var ee, be, Ee, Le, Ke;
    const o = (r == null ? void 0 : r.stroke) || null;
    if (!o || (r == null ? void 0 : r.layerKind) !== "paint" || String((o == null ? void 0 : o.toolKind) || "") !== "eraser") return !1;
    lo();
    const s = pn(), l = na(s.width, s.height);
    if (!$u(l, o, { w: s.width, h: s.height })) return !1;
    const h = ((be = (ee = l.ctx) == null ? void 0 : ee.getImageData(0, 0, s.width, s.height)) == null ? void 0 : be.data) || null;
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
      const ue = vr((de == null ? void 0 : de.actionGroupId) || (de == null ? void 0 : de.id) || "", "paint", Z);
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
      Z.ctx.save(), Z.ctx.globalCompositeOperation = "destination-out", Z.ctx.drawImage(l.canvas, 0, 0), Z.ctx.restore();
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
      const Ce = ((Le = (Ee = f.paintEngine) == null ? void 0 : Ee.getGroupTarget) == null ? void 0 : Le.call(Ee, Z)) || null, Ae = ((Ke = Ce == null ? void 0 : Ce.committedPaint) == null ? void 0 : Ke.canvas) || null;
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
      const Z = wu(de, null);
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
      N && (String(((P = r.stroke) == null ? void 0 : P.toolKind) || "") === "eraser" ? f.paintEngine.cancelActiveStroke(N) : f.paintEngine.commitActiveStroke(r.stroke, N)), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, l = { kind: "ERP_GLOBAL", viewMode: String(f.mode || "frame") }, h = ef(r.layerKind, s.toolKind, [], l);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = pn();
    m && f.paintEngine.beginStroke(h, m);
  }
  function o0(r) {
    var b, g;
    if ((((g = (b = r.stroke) == null ? void 0 : b.geometry) == null ? void 0 : g.points) || []).length >= 3) {
      bl(r);
      const x = pn();
      x && f.paintEngine.commitActiveStroke(r.stroke, x), r._hasCommittedSegments = !0;
    }
    const s = r.stroke, l = { kind: "ERP_GLOBAL", viewMode: String(f.mode || "frame") }, h = tf(r.layerKind, s.toolKind, [], l);
    h.actionGroupId = s.actionGroupId, r.stroke = h;
    const m = pn();
    m && f.paintEngine.beginStroke(h, m);
  }
  function bl(r) {
    var m, b, g, x;
    const o = ((m = r == null ? void 0 : r.stroke) == null ? void 0 : m.geometry) || null;
    if (!o) return !1;
    const s = String(((b = r == null ? void 0 : r.stroke) == null ? void 0 : b.toolKind) || "pen");
    if (r.layerKind === "paint" && s === "eraser")
      return o.geometryKind !== "lasso_fill" && (o.processedPoints = fl(o.rawPoints || o.points || [], r.stroke.targetSpace, !0)), i0(r);
    const l = r.layerKind === "paint" && s !== "eraser";
    if (o.geometryKind === "lasso_fill")
      return (Array.isArray(o.points) ? o.points : []).length < 3 ? !1 : (l && ru((g = r.stroke) == null ? void 0 : g.actionGroupId), wi(r.layerKind).push(r.stroke), !0);
    const h = o.rawPoints || o.points || [];
    return h.length < 1 ? !1 : (o.processedPoints = fl(h, r.stroke.targetSpace, !0), l && ru((x = r.stroke) == null ? void 0 : x.actionGroupId), wi(r.layerKind).push(r.stroke), !0);
  }
  function nf(r) {
    var s;
    if (t === "cutout" && f.mode === "frame") {
      const l = Fe(), h = Ft(l);
      if (!l || !h || !(Number((r == null ? void 0 : r.x) || 0) >= Number(h.x || 0) && Number((r == null ? void 0 : r.x) || 0) <= Number(h.x || 0) + Number(h.w || 0) && Number((r == null ? void 0 : r.y) || 0) >= Number(h.y || 0) && Number((r == null ? void 0 : r.y) || 0) <= Number(h.y || 0) + Number(h.h || 0))) return null;
      const b = En(r, l, performance.now()), g = b ? vi(b) : null;
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
            if (B.closed && Y.length >= 3 && sr(r, Y)) return { item: T, geom: z };
            const re = Math.max(8, Number((B == null ? void 0 : B.lineWidth) || 0) * 0.5 + 6);
            for (let le = 0; le < Y.length - 1; le += 1)
              if (Jl(r, Y[le], Y[le + 1]) <= re * re) return { item: T, geom: z };
            if (Y.length === 1 && Pr(r, Y[0]) <= re * re) return { item: T, geom: z };
          }
          continue;
        }
        if (M.type === "rasterObject") {
          const T = ui(Ji(((s = M.item) == null ? void 0 : s.id) || M.id || ""));
          if (!T) continue;
          const z = jt(T);
          if (xu(T, z, r, b)) return { item: T, geom: z };
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
      ...Gs(!1).slice().sort((l, h) => Number((h == null ? void 0 : h.z_index) || 0) - Number((l == null ? void 0 : l.z_index) || 0)).map((l) => {
        var h;
        return l.type === "strokeGroup" ? fi(Xi("paint", l.actionGroupId || l.id || "")) : l.type === "rasterObject" ? ui(Ji(((h = l.item) == null ? void 0 : h.id) || l.id || "")) : l.item;
      }).filter(Boolean),
      ...t === "cutout" ? cl().filter((l) => mn(l)) : []
    ];
    for (const l of o) {
      if (Rt(l)) {
        const m = jt(l);
        if (!(m != null && m.visible)) continue;
        const b = Array.isArray(m.strokePaths) ? m.strokePaths : [];
        for (const g of b) {
          const x = Array.isArray(g == null ? void 0 : g.points) ? g.points : [];
          if (!x.length) continue;
          if (g.closed && x.length >= 3 && sr(r, x)) return { item: l, geom: m };
          const M = Math.max(8, Number((g == null ? void 0 : g.lineWidth) || 0) * 0.5 + 6);
          for (let P = 0; P < x.length - 1; P += 1)
            if (Jl(r, x[P], x[P + 1]) <= M * M) return { item: l, geom: m };
          if (x.length === 1 && Pr(r, x[0]) <= M * M) return { item: l, geom: m };
        }
        continue;
      }
      if (qt(l)) {
        const m = jt(l);
        if (!(m != null && m.visible)) continue;
        if (xu(l, m, r)) return { item: l, geom: m };
        continue;
      }
      const h = jt(l);
      if (h.visible && sr(r, h.corners))
        return { item: l, geom: h };
    }
    return null;
  }
  function yl(r, o) {
    if (!r || !r.visible) return { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    if (r.kind === "strokeGroup") {
      const l = r.corners.findIndex((m) => Pr(m, o) <= 121);
      if (l >= 0) {
        const m = r.corners[l], b = m.x - r.center.x, g = m.y - r.center.y, x = b * g >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: x };
      }
      const h = Array.isArray(r.strokePaths) ? r.strokePaths : [];
      for (const m of h) {
        const b = Array.isArray(m == null ? void 0 : m.points) ? m.points : [];
        if (m.closed && b.length >= 3 && sr(o, b)) return { kind: "move", cursor: "default" };
        const g = Math.max(8, Number((m == null ? void 0 : m.lineWidth) || 0) * 0.5 + 6);
        for (let x = 0; x < b.length - 1; x += 1)
          if (Jl(o, b[x], b[x + 1]) <= g * g) return { kind: "move", cursor: "default" };
      }
      return sr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    }
    if (r.kind === "rasterObject") {
      const l = r.corners.findIndex((h) => Pr(h, o) <= 121);
      if (l >= 0) {
        const h = r.corners[l], m = h.x - r.center.x, b = h.y - r.center.y, g = m * b >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: l, cursor: g };
      }
      return sr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
    }
    if (t === "cutout" && Array.isArray(r.edgeMidpoints)) {
      const l = r.edgeMidpoints.find((h) => Pr(h, o) <= 169);
      if (l) {
        const h = l.edge === "left" || l.edge === "right";
        return { kind: h ? "scale_x" : "scale_y", cursor: h ? "ew-resize" : "ns-resize", edge: l.edge, mid: l };
      }
    }
    const s = r.corners.findIndex((l) => Pr(l, o) <= 121);
    if (s >= 0) {
      const l = r.corners[s], h = l.x - r.center.x, m = l.y - r.center.y, b = h * m >= 0 ? "nwse-resize" : "nesw-resize";
      return { kind: "scale", cornerIdx: s, cursor: b };
    }
    return Pr(r.rotateHandle, o) <= 144 ? { kind: "rotate", cursor: "grab" } : sr(o, r.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: f.mode === "pano" ? "grab" : "default" };
  }
  function rf(r, o) {
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
    const s = (Number(r.x0) + Number(r.x1)) * 0.5, l = (Number(r.y0) + Number(r.y1)) * 0.5;
    return !!sr({ x: s, y: l }, o.corners);
  }
  function ct(r) {
    if (e0(), f.interaction) {
      f.interaction.kind === "paint_stroke" || f.interaction.kind === "paint_lasso_fill" ? We("none") : f.interaction.kind === "view" || f.interaction.kind === "pan_frame" || f.interaction.kind === "roll_frame" ? We("grabbing") : f.interaction.kind === "move" || f.interaction.kind === "move_multi" || f.interaction.kind === "move_stroke_group" || f.interaction.kind === "move_raster_object" ? We("move") : f.interaction.kind === "scale" || f.interaction.kind === "scale_x" || f.interaction.kind === "scale_y" || f.interaction.kind === "scale_raster_object" ? We(f.interaction.cursor || "nwse-resize") : f.interaction.kind === "rotate" ? We("grabbing") : We("default");
      return;
    }
    if (Qu()) {
      We("none");
      return;
    }
    if (f.mode === "frame") {
      if (f.altModifier && !i) {
        We(Iw);
        return;
      }
      if (f.primaryTool !== "cursor") {
        We("default");
        return;
      }
      We("grab");
      return;
    }
    if (f.primaryTool === "cursor" && f.marqueeModifier) {
      We("default");
      return;
    }
    const o = bt(), s = o ? jt(o) : null, l = o ? tr(o) : !1, h = l ? { kind: "none", cursor: "default" } : yl(s, r);
    if (!l && h.kind !== "none") {
      We(h.cursor);
      return;
    }
    if (f.primaryTool === "cursor" && nf(r)) {
      We("default");
      return;
    }
    We(f.mode === "pano" ? "grab" : "default");
  }
  function Ge() {
    var x, M;
    if (!Ht) return;
    if (f.mode === "frame") {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const r = bt(), o = Tn();
    if (!r && o.length === 0 || f.interaction) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const s = Za(), l = u_({
      type: t,
      selected: r,
      selectedItems: o,
      selectedKind: s,
      geom: o.length > 1 ? Ys(o) : jt(r),
      allLocked: qs(o),
      selectedLocked: tr(r),
      activeAspect: Ci(r),
      cutoutAspectOpen: f.cutoutAspectOpen,
      isExternalSticker: Ut,
      isStickerHidden: hi,
      canRestoreSelectedToInitial: up,
      iconSet: Oe
    });
    if (!l.visible) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const h = (P, N, { requireFitsBelow: T = !0 } = {}) => {
      var be, Ee, Le;
      const q = Number((be = l.anchor) == null ? void 0 : be.minX), B = Number((Ee = l.anchor) == null ? void 0 : Ee.maxX), Y = Number((Le = l.anchor) == null ? void 0 : Le.maxY);
      if (![q, B, Y].every(Number.isFinite)) return null;
      const re = Math.max(14, F.width - P - 14), le = G((q + B) * 0.5 - P * 0.5, 14, re), ee = Y + 18;
      return !Number.isFinite(le) || !Number.isFinite(ee) || T && ee + N > F.height - 14 ? null : { left: le, top: ee };
    }, m = Math.max(1, Number(((x = f.menuSize) == null ? void 0 : x.w) || 220)), b = Math.max(1, Number(((M = f.menuSize) == null ? void 0 : M.h) || 40)), g = h(m, b, { requireFitsBelow: !1 });
    if (!g) {
      k.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    k.selectionMenu = {
      visible: !0,
      left: g.left,
      top: g.top,
      items: l.items
    }, requestAnimationFrame(() => {
      if (!Ht || k.selectionMenu.visible !== !0) return;
      const P = Ht.getBoundingClientRect(), N = Math.round(Number((P == null ? void 0 : P.width) || 0)) || 220, T = Math.round(Number((P == null ? void 0 : P.height) || 0)) || 40;
      f.menuSize = { w: N, h: T, measured: !0 };
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
      const l = ce.getBoundingClientRect(), h = s.getBoundingClientRect(), m = 8, b = 12, g = Math.round(Number(((B = St.getBoundingClientRect()) == null ? void 0 : B.width) || 0)) || 100, x = Math.round(Number(((Y = St.getBoundingClientRect()) == null ? void 0 : Y.height) || 0)) || 24, M = !!s.closest(".pano-floating-left"), P = !!s.closest(".pano-frame-rail"), N = !!s.closest(".pano-paint-footer") || !!s.closest(".pano-paint-color-float");
      let T = "", z = h.left - l.left + h.width * 0.5 - g * 0.5, q = h.top - l.top - x - b;
      if (M)
        T = "tool-rail", z = h.right - l.left + 10, q = h.top - l.top + h.height * 0.5 - x * 0.5, z = G(z, m, Math.max(m, l.width - g - m)), q = G(q, m, Math.max(m, l.height - x - m));
      else if (P)
        T = "frame-rail", z = h.left - l.left - g - 10, q = h.top - l.top + h.height * 0.5 - x * 0.5, z = G(z, m, Math.max(m, l.width - g - m)), q = G(q, m, Math.max(m, l.height - x - m));
      else if (N) {
        T = "footer";
        const re = s.closest(".pano-paint-footer"), le = re ? re.getBoundingClientRect() : h;
        z = le.left - l.left + le.width * 0.5 - g * 0.5, q = le.bottom - l.top + 5, z = G(z, m, Math.max(m, l.width - g - m)), q = Math.max(m, q);
      }
      z = G(z, m, Math.max(m, l.width - g - m)), q = Math.max(m, q), k.tooltip.left = z, k.tooltip.top = q, k.tooltip.variant = T, k.tooltip.visible = !0;
    });
  }
  const Gt = Fs({
    getView: () => ({ yaw: f.viewYaw, pitch: f.viewPitch, fov: f.viewFov }),
    setView: (r) => {
      f.viewYaw = Vt(Number(r.yaw || 0)), f.viewPitch = G(Number(r.pitch || 0), -89.9, 89.9), f.viewFov = G(Number(r.fov || f.viewFov || 100), 35, 140);
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
    getUnwrapRect: xr,
    onInteraction: () => {
      oe.backgroundDirty = !0, oe.dirty = !0;
    }
  });
  function af(r, o, s = {}) {
    var m;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    r.accumulatedRad += e_(o, r.lastAngle), r.lastAngle = o;
    const l = t_(r.start.roll_deg, r.accumulatedRad, {
      shiftKey: s.shiftKey,
      altKey: r.altStarted ? !1 : s.altKey
    });
    r.shot.roll_deg = l, r.changed = r.changed || Math.abs(r.accumulatedRad) > 1e-9;
    const h = (((m = k.sidePanel) == null ? void 0 : m.params) || []).find((b) => b.key === "roll_deg");
    h && (h.value = l, h.displayValue = ma(l), h.fillPct = (l + 180) / 360 * 100), Mr(), sf(r), fe({ localOnly: !0 });
  }
  const of = (r, o) => {
    const s = Vr(r);
    return Math.atan2(s.y - o.y, s.x - o.x);
  };
  function sf(r) {
    var b, g;
    if ((r == null ? void 0 : r.kind) !== "roll_frame" || !r.shot) return;
    ke.timer && (clearTimeout(ke.timer), ke.timer = 0), ke.target = null;
    const o = Ft(r.shot), s = (b = F.getBoundingClientRect) == null ? void 0 : b.call(F), l = (g = ce.getBoundingClientRect) == null ? void 0 : g.call(ce);
    if (!o || !s || !l || F.width <= 0 || F.height <= 0) return;
    const h = s.width / F.width, m = s.height / F.height;
    k.tooltip.text = `${ma(r.shot.roll_deg)}°`, k.tooltip.left = s.left - l.left + (o.x + o.w * 0.5) * h, k.tooltip.top = s.top - l.top + (o.y + o.h * 0.5) * m + 12, k.tooltip.variant = "roll", k.tooltip.visible = !0;
  }
  De == null || De.addEventListener("pointerdown", (r) => {
    var m;
    if (r.button !== 0 || i || f.mode !== "frame") return;
    const o = Fe();
    if (!o) return;
    const s = Ft(o);
    if (!s) return;
    const l = { x: s.x + s.w * 0.5, y: s.y + s.h * 0.5 }, h = of(r, l);
    f.interaction = {
      kind: "roll_frame",
      shot: o,
      center: l,
      lastAngle: h,
      accumulatedRad: 0,
      start: { roll_deg: Number(o.roll_deg ?? o.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (m = De.setPointerCapture) == null || m.call(De, r.pointerId), r.preventDefault(), Mr(), sf(f.interaction), fe({ localOnly: !0 });
  }), De == null || De.addEventListener("pointermove", (r) => {
    var o;
    ((o = f.interaction) == null ? void 0 : o.kind) !== "roll_frame" || f.interaction.source !== "knob" || af(
      f.interaction,
      of(r, f.interaction.center),
      r
    );
  });
  const u0 = () => {
    const r = f.interaction;
    (r == null ? void 0 : r.kind) !== "roll_frame" || r.source !== "knob" || (r.changed && (Ze(), it(), Ve()), f.interaction = null, Hr(), _r(), Mr(), fe());
  };
  De == null || De.addEventListener("pointerup", u0), De == null || De.addEventListener("pointercancel", () => oa()), De == null || De.addEventListener("lostpointercapture", () => {
    var r;
    ((r = f.interaction) == null ? void 0 : r.source) === "knob" && oa();
  }), De == null || De.addEventListener("dblclick", (r) => {
    const o = f.mode === "frame" && !i ? Fe() : null;
    !o || Math.abs(Number(o.roll_deg ?? o.rot_deg ?? 0)) <= 1e-9 || (o.roll_deg = 0, Ze(), it(), Ve(), Mr(), fe(), r.preventDefault());
  }), F.onpointerdown = (r) => {
    const o = Vr(r);
    if (mo(o, !0), f.viewTween = null, Gt.state.inertia.active = !1, Gt.state.inertia.vx = 0, Gt.state.inertia.vy = 0, r.button === 1) {
      if (r.preventDefault(), f.mode === "frame") {
        const g = Fe();
        if (!g || i) return;
        f.interaction = {
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
        const g = f.mode === "unwrap" ? o : ho(r);
        f.interaction = { kind: "view", last: g, lastTs: performance.now() }, Gt.startDrag(g.x, g.y, r.pointerId, performance.now());
      }
      ct(o), F.setPointerCapture(r.pointerId);
      return;
    }
    if (r.button !== 0) return;
    if (f.mode === "frame" && r.altKey && !i) {
      const g = Fe(), x = Ft(g);
      if (!g || !x) return;
      const M = { x: x.x + x.w * 0.5, y: x.y + x.h * 0.5 }, P = Math.atan2(o.y - M.y, o.x - M.x);
      f.interaction = {
        kind: "roll_frame",
        shot: g,
        center: M,
        lastAngle: P,
        accumulatedRad: 0,
        start: { roll_deg: Number(g.roll_deg ?? g.rot_deg ?? 0) },
        changed: !1,
        altStarted: !0
      }, F.setPointerCapture(r.pointerId), r.preventDefault(), Mr(), fe({ localOnly: !0 });
      return;
    }
    if (f.mode === "frame" && f.primaryTool === "cursor") {
      const g = Fe();
      if (!g || i) return;
      f.interaction = {
        kind: "pan_frame",
        shot: g,
        last: o,
        start: { yaw_deg: Number(g.yaw_deg || 0), pitch_deg: Number(g.pitch_deg || 0) },
        changed: !1
      }, ct(o), F.setPointerCapture(r.pointerId), r.preventDefault();
      return;
    }
    if (i) {
      if (f.mode === "pano") {
        const g = ho(r);
        f.interaction = { kind: "view", last: g, lastTs: performance.now() }, Gt.startDrag(g.x, g.y, r.pointerId, performance.now()), ct(o), F.setPointerCapture(r.pointerId);
      }
      return;
    }
    if (Xe && !Xe.hidden)
      return;
    if ((f.primaryTool === "paint" || f.primaryTool === "mask") && (Ju() || gl())) {
      const g = f.primaryTool === "mask" ? "mask" : "paint", x = f.primaryTool === "mask" ? f.maskTool : f.paintTool, M = f.mode === "frame" && gl() ? Fe() : null, P = { kind: "ERP_GLOBAL" }, N = M ? En(o, M, performance.now()) : Dn(o, performance.now());
      if (!N) {
        ct(o);
        return;
      }
      f.interaction = {
        kind: x === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: g,
        _livePreviewToken: Ti("live"),
        stroke: x === "lasso_fill" ? tf(g, x, [N], P) : ef(g, x, [N], P)
      }, bi();
      const T = pn();
      if (T)
        if (f.paintEngine.beginStroke(f.interaction.stroke, T), f.interaction.kind === "paint_stroke") {
          const z = f.paintEngine.ensureTarget(T), q = Number((N == null ? void 0 : N.u) ?? (N == null ? void 0 : N.x) ?? 0), B = Number((N == null ? void 0 : N.v) ?? (N == null ? void 0 : N.y) ?? 0);
          f.paintEngine.appendStrokePoint(z, q, B, f.interaction.stroke);
        } else
          f.paintEngine.updateActiveStroke(f.interaction.stroke, T);
      ct(o), F.setPointerCapture(r.pointerId), fe();
      return;
    }
    const s = Tn(), l = bt(), h = s.length > 1 ? Ys(s) : l ? jt(l) : null;
    if (f.primaryTool === "cursor" && (r.ctrlKey || r.metaKey)) {
      f.interaction = { kind: "marquee_select", start: o, current: o }, ct(o), F.setPointerCapture(r.pointerId), fe({ localOnly: !0 });
      return;
    }
    if (s.length > 1 && (h != null && h.visible)) {
      if ((s.some((x) => tr(x)) ? { kind: "none" } : yl(h, o)).kind === "move") {
        f.interaction = {
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
          strokeSnapshots: s.filter((x) => Rt(x)).map((x) => ({
            id: String(x.actionGroupId || x.id || ""),
            layerKind: String(x.layerKind || "paint"),
            snapshot: Jt(Cn(x.actionGroupId, x.layerKind)),
            frameSnapshot: Jt(vr(x.actionGroupId, x.layerKind)),
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
            centerUv: Pu(x)
          }))
        }, ct(o), F.setPointerCapture(r.pointerId);
        return;
      }
    } else if (l && (h != null && h.visible)) {
      const g = tr(l) ? { kind: "none" } : yl(h, o);
      if (g.kind === "scale") {
        f.interaction = Rt(l) ? {
          kind: "scale_stroke_group",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Jt(Cn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Jt(vr(l.actionGroupId, l.layerKind)),
          cursor: g.cursor
        } : qt(l) ? {
          kind: "scale_raster_object",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          snapshot: Jt(ln().find((x) => String((x == null ? void 0 : x.id) || "") === zt(l.rasterObjectId || l.id || ""))),
          cursor: g.cursor
        } : {
          kind: "scale",
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: g.cursor
        }, ct(o), F.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "scale_x" || g.kind === "scale_y") {
        f.interaction = {
          kind: g.kind,
          item: l,
          center: h.center,
          startDist: Math.max(1, Math.hypot(o.x - h.center.x, o.y - h.center.y)),
          startHFOV: Number(l.hFOV_deg || 20),
          startVFOV: Number(l.vFOV_deg || 20),
          cursor: g.cursor,
          edge: g.edge
        }, ct(o), F.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "rotate") {
        f.interaction = Rt(l) ? {
          kind: "rotate_stroke_group",
          item: l,
          center: h.center,
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x),
          snapshot: Jt(Cn(l.actionGroupId, l.layerKind)),
          frameSnapshot: Jt(vr(l.actionGroupId, l.layerKind))
        } : {
          kind: "rotate",
          item: l,
          center: h.center,
          startRot: Number(l.rot_deg || l.roll_deg || 0),
          startAng: Math.atan2(o.y - h.center.y, o.x - h.center.x)
        }, ct(o), F.setPointerCapture(r.pointerId);
        return;
      }
      if (g.kind === "move") {
        if (Rt(l)) {
          const x = f.mode === "frame" ? (() => {
            const M = Fe();
            return M ? En(o, M, performance.now()) : null;
          })() : Dn(o, performance.now());
          f.interaction = {
            kind: "move_stroke_group",
            item: l,
            startUv: x,
            snapshot: Jt(Cn(l.actionGroupId, l.layerKind)),
            frameSnapshot: Jt(vr(l.actionGroupId, l.layerKind))
          }, ct(o), F.setPointerCapture(r.pointerId);
          return;
        }
        if (qt(l)) {
          const x = f.mode === "frame" ? (() => {
            const M = Fe();
            return M ? En(o, M, performance.now()) : null;
          })() : Dn(o, performance.now());
          f.interaction = {
            kind: "move_raster_object",
            item: l,
            startUv: x,
            snapshot: Jt(ln().find((M) => String((M == null ? void 0 : M.id) || "") === zt(l.rasterObjectId || l.id || "")))
          }, ct(o), F.setPointerCapture(r.pointerId);
          return;
        }
        f.interaction = {
          kind: "move",
          item: l,
          offset: { x: o.x - h.center.x, y: o.y - h.center.y }
        }, ct(o), F.setPointerCapture(r.pointerId);
        return;
      }
    }
    const m = nf(o);
    if (m) {
      const g = f.selectedId !== m.item.id;
      if (g && f.selectedId && (Ze(), gn()), di(m.item), t === "cutout" && g && (f.cutoutAspectOpen = !1), g && Ve(), Ge(), fe(), tr(m.item)) {
        ct(o);
        return;
      }
      f.interaction = {
        kind: Rt(m.item) ? "move_stroke_group" : qt(m.item) ? "move_raster_object" : "move",
        item: m.item,
        offset: { x: o.x - m.geom.center.x, y: o.y - m.geom.center.y },
        startUv: Rt(m.item) || qt(m.item) ? f.mode === "frame" ? (() => {
          const x = Fe();
          return x ? En(o, x, performance.now()) : null;
        })() : Dn(o, performance.now()) : null,
        snapshot: Rt(m.item) ? Jt(Cn(m.item.actionGroupId, m.item.layerKind)) : qt(m.item) ? Jt(ln().find((x) => String((x == null ? void 0 : x.id) || "") === zt(m.item.rasterObjectId || m.item.id || ""))) : null,
        frameSnapshot: Rt(m.item) ? Jt(vr(m.item.actionGroupId, m.item.layerKind)) : null
      }, ct(o), F.setPointerCapture(r.pointerId);
      return;
    }
    const b = !!f.selectedId;
    if (b && (Ze(), gn()), Qi(), b && Ve(), Ge(), fe(), f.mode === "pano") {
      const g = ho(r);
      f.interaction = { kind: "view", last: g, lastTs: performance.now() }, Gt.startDrag(g.x, g.y, r.pointerId, performance.now()), ct(o), F.setPointerCapture(r.pointerId);
    }
  }, F.onpointermove = (r) => {
    var l, h, m, b, g, x, M, P, N, T, z, q, B, Y, re, le, ee, be, Ee, Le, Ke, de;
    const o = Vr(r);
    if (mo(o, !0), !f.interaction) {
      ct(o);
      return;
    }
    ct(o);
    const s = f.interaction;
    if (s.kind === "paint_stroke") {
      const Z = typeof r.getCoalescedEvents == "function" ? r.getCoalescedEvents() : [r];
      let ue = !1;
      Z.forEach((Ce) => {
        const Ae = Vr(Ce);
        if (f.mode === "frame") {
          const Ne = Fe(), je = Ne ? Ft(Ne) : null;
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
        if (f.mode === "frame") {
          const Ne = Fe(), je = Ne ? Ft(Ne) : null;
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
        Ce && f.paintEngine.updateActiveStroke(s.stroke, Ce), fe({ localOnly: !0 });
      }
      return;
    }
    if (s.kind === "view") {
      const Z = performance.now(), ue = f.mode === "unwrap" ? o : ho(r);
      Gt.moveDrag(ue.x, ue.y, f.mode === "unwrap" ? "unwrap" : "pano", Z), s.lastTs = Z, s.last = ue, fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "pan_frame") {
      const Z = pl(s.shot);
      if (!Z || !s.shot) return;
      const ue = (l = v.ui_settings) != null && l.invert_view_x ? -1 : 1, Ce = (h = v.ui_settings) != null && h.invert_view_y ? -1 : 1, Ae = (o.x - s.last.x) * ue, Ne = (o.y - s.last.y) * Ce, je = Math.max(1, Number(Z.focalPx || 1)), qe = Number(s.shot.roll_deg ?? s.shot.rot_deg ?? 0) * Ct, He = Math.cos(qe), et = Math.sin(qe), Dt = Ae / je, at = -Ne / je, Mt = Dt * He - at * et, ir = Dt * et + at * He, vo = Number(s.shot.pitch_deg || 0) * Ct, _o = Math.max(0.25, Math.abs(Math.cos(vo)));
      s.shot.yaw_deg = Vt(
        Number(s.shot.yaw_deg || 0) - Math.atan(Mt) / _o * Sn
      ), s.shot.pitch_deg = G(
        Number(s.shot.pitch_deg || 0) - Math.atan(ir) * Sn,
        -90,
        90
      ), s.changed = s.changed || Math.abs(Ae) > 0 || Math.abs(Ne) > 0, s.last = o, fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "roll_frame") {
      if (s.source === "knob") return;
      const Z = Math.atan2(o.y - s.center.y, o.x - s.center.x);
      af(s, Z, r);
      return;
    }
    if (s.kind === "move") {
      const Z = o.x - s.offset.x, ue = o.y - s.offset.y;
      if (f.mode === "frame" && t === "cutout") {
        const Ce = Fe(), Ae = Ft(Ce);
        if (!Ce || !Ae) return;
        const Ne = {
          x: G((Z - Ae.x) / Math.max(1, Ae.w), 0, 1),
          y: G((ue - Ae.y) / Math.max(1, Ae.h), 0, 1)
        }, je = ul(Ce, Ne);
        if (!je) return;
        const qe = zo(je);
        s.item.yaw_deg = qe.yaw, s.item.pitch_deg = qe.pitch;
      } else if (f.mode === "unwrap") {
        const Ce = xr(), Ae = G((Z - Ce.x) / Math.max(Ce.w, 1), 0, 1), Ne = G((ue - Ce.y) / Math.max(Ce.h, 1), 0, 1);
        s.item.yaw_deg = Vt(Ae * 360 - 180), s.item.pitch_deg = G(90 - Ne * 180, -90, 90);
      } else {
        const Ce = rl(Z, ue), Ae = zo(Ce);
        s.item.yaw_deg = Ae.yaw, s.item.pitch_deg = Ae.pitch;
      }
      gt(s.item) && Bt(), fe({ localOnly: !0 });
      return;
    }
    if (s.kind === "move_stroke_group") {
      const Z = f.mode === "frame" ? (() => {
        const Ae = Fe();
        return Ae ? En(o, Ae, performance.now()) : null;
      })() : Dn(o, performance.now());
      if (!Z || !s.startUv) return;
      const ue = xn(Number(Z.u || 0), Number(s.startUv.u || 0)), Ce = Number(Z.v || 0) - Number(s.startUv.v || 0);
      au((m = s.item) == null ? void 0 : m.actionGroupId, ue, Ce, s.snapshot, (b = s.item) == null ? void 0 : b.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !1 }), fe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "move_raster_object") {
      const Z = f.mode === "frame" ? (() => {
        const Ae = Fe();
        return Ae ? En(o, Ae, performance.now()) : null;
      })() : Dn(o, performance.now());
      if (!Z || !s.startUv) return;
      const ue = xn(Number(Z.u || 0), Number(s.startUv.u || 0)), Ce = Number(Z.v || 0) - Number(s.startUv.v || 0);
      su(((g = s.item) == null ? void 0 : g.rasterObjectId) || ((x = s.item) == null ? void 0 : x.id) || "", ue, Ce, s.snapshot) && (xi(), fe({ localOnly: !0 }));
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
        const et = (t === "cutout" ? Ks() : er()).find((at) => String((at == null ? void 0 : at.id) || "") === String(He.id || ""));
        if (!et || !gt(et)) continue;
        const Dt = {
          x: Number(((B = He.center) == null ? void 0 : B.x) || 0) + je,
          y: Number(((Y = He.center) == null ? void 0 : Y.y) || 0) + qe
        };
        if (f.mode === "frame" && t === "cutout") {
          const at = Fe(), Mt = Ft(at);
          if (!at || !Mt) continue;
          const ir = {
            x: G((Dt.x - Mt.x) / Math.max(1, Mt.w), 0, 1),
            y: G((Dt.y - Mt.y) / Math.max(1, Mt.h), 0, 1)
          }, vo = ul(at, ir);
          if (!vo) continue;
          const _o = zo(vo);
          et.yaw_deg = _o.yaw, et.pitch_deg = _o.pitch;
        } else if (f.mode === "unwrap") {
          const at = xr(), Mt = G((Dt.x - at.x) / Math.max(at.w, 1), 0, 1), ir = G((Dt.y - at.y) / Math.max(at.h, 1), 0, 1);
          et.yaw_deg = Vt(Mt * 360 - 180), et.pitch_deg = G(90 - ir * 180, -90, 90);
        } else {
          const at = rl(Dt.x, Dt.y), Mt = zo(at);
          et.yaw_deg = Mt.yaw, et.pitch_deg = Mt.pitch;
        }
        Ce = !0;
      }
      for (const He of Array.isArray(s.strokeSnapshots) ? s.strokeSnapshots : []) {
        const et = {
          x: Number(((re = He.center) == null ? void 0 : re.x) || 0) + je,
          y: Number(((le = He.center) == null ? void 0 : le.y) || 0) + qe
        }, Dt = f.mode === "frame" ? (() => {
          const Mt = Fe();
          return Mt ? En(et, Mt, performance.now()) : null;
        })() : Dn(et, performance.now()), at = He.centerUv || null;
        if (Dt && at) {
          const Mt = xn(Number(Dt.u || 0), Number(at.u || 0)), ir = Number(Dt.v || 0) - Number(at.v || 0);
          au(He.id, Mt, ir, He.snapshot, He.layerKind, He.frameSnapshot) && (Ce = !0, Ae = !0);
        }
      }
      for (const He of Array.isArray(s.rasterSnapshots) ? s.rasterSnapshots : []) {
        const et = {
          x: Number(((ee = He.center) == null ? void 0 : ee.x) || 0) + je,
          y: Number(((be = He.center) == null ? void 0 : be.y) || 0) + qe
        }, Dt = f.mode === "frame" ? (() => {
          const Mt = Fe();
          return Mt ? En(et, Mt, performance.now()) : null;
        })() : Dn(et, performance.now()), at = He.centerUv || null;
        if (Dt && at) {
          const Mt = xn(Number(Dt.u || 0), Number(at.u || 0)), ir = Number(Dt.v || 0) - Number(at.v || 0);
          su(He.id, Mt, ir, He.snapshot) && (Ce = !0, Ne = !0);
        }
      }
      Ce && (Ae ? In({ rebuildPaintEngine: !1 }) : Ne ? xi() : Bt(), fe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "scale_stroke_group") {
      const ue = Math.max(1, Math.hypot(o.x - s.center.x, o.y - s.center.y)) / Math.max(1, Number(s.startDist || 1));
      ou((Ee = s.item) == null ? void 0 : Ee.actionGroupId, ue, 0, s.snapshot, (Le = s.item) == null ? void 0 : Le.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !1 }), fe({ localOnly: !0 }));
      return;
    }
    if (s.kind === "rotate_stroke_group") {
      let Z = (Math.atan2(o.y - s.center.y, o.x - s.center.x) - Number(s.startAng || 0)) * Sn;
      r.shiftKey && (Z = Math.round(Z / 45) * 45), ou((Ke = s.item) == null ? void 0 : Ke.actionGroupId, 1, Z, s.snapshot, (de = s.item) == null ? void 0 : de.layerKind, s.frameSnapshot) && (In({ rebuildPaintEngine: !1 }), fe({ localOnly: !0 }));
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
    var o, s, l, h, m, b, g, x;
    const r = f.interaction;
    if (!((r == null ? void 0 : r.kind) === "roll_frame" && r.source === "knob")) {
      if (((o = f.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = f.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        bi();
        const M = bl(f.interaction), P = !!f.interaction._hasCommittedSegments;
        if (M || P) {
          In();
          const N = String(((l = f.interaction.stroke) == null ? void 0 : l.actionGroupId) || "").trim();
          if (N) {
            const z = Yt().find((q) => String((q == null ? void 0 : q.actionGroupId) || "") === N);
            z && (z.frame = null);
          }
          const T = pn();
          T && (M ? String(((h = f.interaction.stroke) == null ? void 0 : h.toolKind) || "") === "eraser" ? (f.paintEngine.cancelActiveStroke(T), Ru()) : f.paintEngine.commitActiveStroke(f.interaction.stroke, T) : f.paintEngine.cancelActiveStroke(T)), Ze(), gn(), Ve(), Ge(), e.setDirtyCanvas(!0, !0), fe();
        } else {
          const N = pn();
          N && f.paintEngine.cancelActiveStroke(N);
        }
      } else if (((m = f.interaction) == null ? void 0 : m.kind) === "marquee_select") {
        const M = rf(f.interaction.start, f.interaction.current), N = [
          ...t === "cutout" ? cl().filter((T) => !mn(T)) : [...er()],
          ...qm(),
          ...Xm()
        ].filter((T) => l0(M, jt(T)));
        np(N, ((b = N[N.length - 1]) == null ? void 0 : b.id) || null), t === "cutout" && N.length && (f.cutoutAspectOpen = !1), Ve(), Ge(), fe();
      } else if (((g = f.interaction) == null ? void 0 : g.kind) === "pan_frame" || ((x = f.interaction) == null ? void 0 : x.kind) === "roll_frame")
        f.interaction.changed && (Ze(), it(), Ve());
      else if (f.interaction && f.interaction.kind !== "view") {
        let M = !1;
        (f.interaction.kind === "move_stroke_group" || f.interaction.kind === "scale_stroke_group" || f.interaction.kind === "rotate_stroke_group") && (M = !0), (f.interaction.kind === "move_raster_object" || f.interaction.kind === "scale_raster_object") && (M = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.strokeSnapshots) && f.interaction.strokeSnapshots.length && (M = !0), f.interaction.kind === "move_multi" && Array.isArray(f.interaction.rasterSnapshots) && f.interaction.rasterSnapshots.length && (M = !0), M && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(f.interaction.kind) || f.interaction.kind === "move_multi" && Array.isArray(f.interaction.strokeSnapshots) && f.interaction.strokeSnapshots.length ? In({ rebuildPaintEngine: !0 }) : xi()), Ze(), gn(), e.setDirtyCanvas(!0, !0), aa(), f.hqFrames = 1, Ge(), fe();
      }
      f.interaction = null, (r == null ? void 0 : r.kind) === "roll_frame" && Hr(), bi(), r && r.kind === "view" && Gt.endDrag(performance.now()), _r(), Ge(), ct(f.pointerPos), fe();
    }
  }, F.onpointercancel = () => {
    var r, o, s;
    if (!oa()) {
      if (((r = f.interaction) == null ? void 0 : r.kind) === "view" && Gt.endDrag(performance.now()), ((o = f.interaction) == null ? void 0 : o.kind) === "paint_stroke" || ((s = f.interaction) == null ? void 0 : s.kind) === "paint_lasso_fill") {
        bi();
        const l = pn();
        l && f.paintEngine.cancelActiveStroke(l);
      }
      f.interaction = null, bi(), _r(), ct(f.pointerPos), fe({ localOnly: !0 });
    }
  }, F.onlostpointercapture = () => {
    oa();
  }, F.onauxclick = (r) => {
    r.button === 1 && r.preventDefault();
  }, F.onmousemove = (r) => {
    const o = Vr(r), s = mo(o, !0);
    f.interaction || (ct(o), s && f.mode === "frame" && f.primaryTool === "cursor" && fe({ localOnly: !0 }));
  }, F.onmouseleave = () => {
    mo(f.pointerPos, !1), ct(f.pointerPos), f.mode === "frame" && f.primaryTool === "cursor" && fe({ localOnly: !0 });
  }, F.onwheel = (r) => {
    if (f.mode === "frame") {
      const o = Vr(r), s = r.deltaY < 0 ? 1.1 : 1 / 1.1;
      Xg(o, s) && fe({ localOnly: !0 }), r.preventDefault();
      return;
    }
    f.mode === "pano" && (Gt.applyWheelEvent(r) && fe({ localOnly: !0 }), r.preventDefault());
  }, F.ondragover = (r) => {
    t !== "stickers" && t !== "cutout" || i || (r.preventDefault(), $r(!0));
  }, F.ondrop = (r) => {
    var l;
    if (t !== "stickers" && t !== "cutout" || i) return;
    r.preventDefault(), r.stopPropagation(), Qe.depth = 0, $r(!1);
    const s = Array.from(((l = r.dataTransfer) == null ? void 0 : l.files) || []).find((h) => uo(h));
    s && Uu(s);
  };
  const lf = (r) => {
    t !== "stickers" && t !== "cutout" || i || Vs(r) && (Qe.depth += 1, $r(!0), r.preventDefault());
  }, cf = (r) => {
    t !== "stickers" && t !== "cutout" || i || (!Qe.active && Vs(r) && $r(!0), Qe.active && r.preventDefault());
  }, uf = (r) => {
    if (t !== "stickers" && t !== "cutout" || i || !Qe.active) return;
    Qe.depth = Math.max(0, Qe.depth - 1);
    const o = Number(r.clientX) <= 0 && Number(r.clientY) <= 0;
    (Qe.depth === 0 || o) && $r(!1);
  }, ff = (r) => {
    t !== "stickers" && t !== "cutout" || i || (Qe.depth = 0, $r(!1), Vs(r) && r.preventDefault());
  };
  window.addEventListener("dragenter", lf, !0), window.addEventListener("dragover", cf, !0), window.addEventListener("dragleave", uf, !0), window.addEventListener("drop", ff, !0);
  function vl() {
    const { canUndo: r, canRedo: o } = Hu();
    Pi(k.toolButtons, "value", "undo", { disabled: !r }), Pi(k.toolButtons, "value", "redo", { disabled: !o });
  }
  const df = (r, o, s = !1) => {
    var x;
    const l = t === "cutout" && f.mode === "frame" ? Fe() : null, h = l || bt(), m = l ? "shot" : Za();
    if (!h || m === "stroke") return;
    const b = (((x = k.sidePanel) == null ? void 0 : x.params) || []).find((M) => M.key === r);
    if (!b || b.enabled === !1) return;
    let g = Number(o);
    Number.isNaN(g) && (g = 0), g = G(g, Number(b.min), Number(b.max)), r === "yaw_deg" && (g = Vt(g)), h[r] = g, t === "cutout" && (r === "hFOV_deg" || r === "vFOV_deg") && (h.aspect_id = Xr(h)), Ve(), fe(), s && Ze();
  };
  ye == null || ye.addEventListener("click", async (r) => {
    var l, h, m, b, g, x, M, P, N;
    const o = r.target.closest("[data-action]");
    if (!o) return;
    const s = String(o.getAttribute("data-action") || "");
    if (s === "coverage-set") {
      const T = Kt(o.getAttribute("data-coverage"));
      if (T === Kt(v.coverage)) return;
      v.coverage = T, f.coverage = T, p && (p.value = String(T)), c ? oe.backgroundDirty = !0 : (gn(), Yg({
        syncPreview: t !== "cutout",
        syncGraph: t !== "cutout"
      })), Ve(), Ge(), fe();
      return;
    }
    if (s === "toggle-selection-picker") {
      if ((h = (l = k.sidePanel) == null ? void 0 : l.selectionPicker) != null && h.disabled) return;
      k.sidePanel.selectionPicker.open = !k.sidePanel.selectionPicker.open;
      return;
    }
    if (s === "select-picker-item") {
      k.sidePanel.selectionPicker.open = !1;
      const T = String(o.getAttribute("data-selection-id") || "");
      let z = null;
      T && (t === "stickers" ? z = er().find((q) => String((q == null ? void 0 : q.id) || "") === T) || null : z = ((m = cu().find((q) => {
        var B;
        return String(((B = q == null ? void 0 : q.item) == null ? void 0 : B.id) || "") === T;
      })) == null ? void 0 : m.item) || null), di(z || null), z && !Rt(z) && Hs(
        Vt(Number(z.yaw_deg || 0)),
        G(Number(z.pitch_deg || 0), -89.9, 89.9),
        f.viewFov
      ), Ve(), Ge(), fe();
      return;
    }
    if (s === "copy-state-inline") {
      const T = bt(), z = Za();
      if (!T || z === "stroke" || Tn().length > 1) return;
      const q = JSON.stringify(t === "cutout" && z !== "image" ? gu(T) : pp(T));
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
      T === "panorama" ? f.showPanorama = !f.showPanorama : T === "objects" ? f.showObjects = !f.showObjects : T === "mask" && (f.showMask = !f.showMask), Ve(), fe();
      return;
    }
    if (s === "set-invert-x") {
      v.ui_settings.invert_view_x = o.getAttribute("data-value") === "1", fo(), Ve(), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0), fe();
      return;
    }
    if (s === "set-invert-y") {
      v.ui_settings.invert_view_y = o.getAttribute("data-value") === "1", fo(), Ve(), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0), fe();
      return;
    }
    if (s === "toggle-quality-picker") {
      (M = k.sidePanel) != null && M.uiSettings && (k.sidePanel.uiSettings.qualityOpen = !k.sidePanel.uiSettings.qualityOpen);
      return;
    }
    if (s === "set-quality") {
      const T = String(o.getAttribute("data-quality") || "balanced");
      v.ui_settings.preview_quality = T === "draft" || T === "high" ? T : "balanced", fo(), Ve(), (P = e.setDirtyCanvas) == null || P.call(e, !0, !0), fe();
      return;
    }
    if (s === "ui-reset-defaults") {
      v.ui_settings.invert_view_x = !1, v.ui_settings.invert_view_y = !1, v.ui_settings.preview_quality = "balanced", fo(), Ve(), (N = e.setDirtyCanvas) == null || N.call(e, !0, !0), fe();
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
    o && df(String(o.getAttribute("data-param-key") || ""), o.value, !1);
  }), ye == null || ye.addEventListener("change", (r) => {
    const o = r.target.closest("[data-action='param-input']");
    o && df(String(o.getAttribute("data-param-key") || ""), o.value, !0);
  });
  const _l = () => yu();
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
      const N = f.mode;
      f.mode = String(o.getAttribute("data-view") || "pano"), t === "cutout" && f.mode === "frame" && (N !== "frame" && (oe.frameSafeRect = null), Ve(), Ge()), ml(), _r(), fe();
      return;
    }
    const s = r.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (s && !i) {
      if (s.matches("[data-tool-mode]")) {
        const N = String(s.getAttribute("data-tool-mode") || "cursor");
        f.primaryTool = N, (N === "paint" || N === "mask") && Qi({ preservePanelValues: !0 }), cn(), Ve(), Ge(), fe();
        return;
      }
      if (s.matches("[data-tool-ui-action]")) {
        const N = String(s.getAttribute("data-tool-ui-action") || "");
        if ((N === "undo" || N === "redo") && s.disabled) return;
        N === "undo" ? hl(-1) : N === "redo" ? hl(1) : N === "clear" ? Vg() : N === "add" || N === "add-image" ? Og() : N === "add-or-look" && $g();
        return;
      }
      if (s.matches("[data-paint-tool]")) {
        f.primaryTool = "paint";
        const N = String(s.getAttribute("data-paint-tool") || "pen");
        f.paintTool = N, Qi({ preservePanelValues: !0 }), un[N] && (f.activeBrushPresetId = N), cn(), Ve(), Ge(), fe();
        return;
      }
      if (s.matches("[data-mask-tool]")) {
        f.primaryTool = "mask", f.maskTool = String(s.getAttribute("data-mask-tool") || "pen"), Qi({ preservePanelValues: !0 }), cn(), Ve(), Ge(), fe();
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
        f.paintColor = bn(N.color), K(!0), cn();
        return;
      }
      if (s.matches("[data-paint-color-custom]")) {
        r.preventDefault(), r.stopPropagation(), Xe && !Xe.hidden ? K(!0) : ne(), cn();
        return;
      }
    }
    const l = String(((P = s == null ? void 0 : s.getAttribute) == null ? void 0 : P.call(s, "data-action")) || "");
    if (l === "video-play-toggle") {
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
        visible: nr(),
        currentTime: me.editorTime,
        duration: k.videoTransport.duration,
        frameCount: k.videoTransport.frameCount,
        fps: k.videoTransport.fps,
        mode: me.mode
      }), fe({ cause: "frame_view", localOnly: !0 });
      return;
    }
    if (l === "video-audio-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement) || !k.videoTransport.hasAudio) return;
      const N = !$.muted;
      $.muted = N, !N && Number($.volume || 0) <= 0 && ($.volume = Math.max(0.01, Number(k.videoTransport.volume || 1))), Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: nr(),
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
    if (l === "video-loop-toggle") {
      if (r.preventDefault(), r.stopPropagation(), !($ instanceof HTMLVideoElement)) return;
      const N = !k.videoTransport.loop;
      k.videoTransport.loop = N, $.loop = N, Ln({
        ready: !!$.getAttribute("src"),
        playing: !$.paused && !$.ended,
        visible: nr(),
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
      if (l === "frame-aspect") {
        k.frameRail.aspectOpen = !k.frameRail.aspectOpen;
        return;
      }
      if (l === "frame-aspect-set") {
        const N = f.mode === "frame" ? Fe() : null;
        if (!N) return;
        Yu(N, String(s.getAttribute("data-aspect") || "1:1")), k.frameRail.aspectOpen = !1, aa(), Ze(), it(), _r(), fe();
        return;
      }
      if (l === "frame-rotate-90") {
        const N = f.mode === "frame" ? Fe() : null;
        if (!N) return;
        qu(N), k.frameRail.aspectOpen = !1, aa(), Ze(), it(), _r(), fe();
        return;
      }
      if (l === "aspect") {
        f.cutoutAspectOpen = !f.cutoutAspectOpen, f.menuSize.measured = !1, Ge(), fe();
        return;
      }
      if (l === "aspect-set") {
        const N = bt();
        if (!N) return;
        const T = String(s.getAttribute("data-aspect") || "1:1");
        Yu(N, T), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, aa(), Ze(), it(), Ge(), fe();
        return;
      }
      if (l === "rotate-90") {
        const N = bt();
        if (!N) return;
        qu(N), f.cutoutAspectOpen = !1, f.menuSize.measured = !1, aa(), Ze(), it(), Ge(), fe();
        return;
      }
      if (l === "bring-front") {
        Bg();
        return;
      }
      if (l === "send-back") {
        Gg();
        return;
      }
      if (l === "duplicate") {
        Ug();
        return;
      }
      if (l === "replace-image") {
        Fg();
        return;
      }
      if (l === "toggle-lock") {
        tp();
        return;
      }
      if (l === "back-initial") {
        lp();
        return;
      }
      if (l === "toggle-visible") {
        sp();
        return;
      }
      if (l === "delete") {
        Ku();
        return;
      }
    }
    if (l === "reset-view") {
      if (f.mode === "frame") return;
      Hs(0, 0, 100, 180, 680);
      return;
    }
    if (l === "toggle-grid") {
      if (f.mode === "frame") return;
      f.showGrid = !f.showGrid, Zw(e == null ? void 0 : e.id, f.showGrid), _l(), fe();
      return;
    }
    if (l === "toggle-fullscreen") {
      r.preventDefault(), r.stopPropagation(), h0();
      return;
    }
    if (l === "toggle-output-preview-size") {
      r.preventDefault(), r.stopPropagation();
      const N = !f.outputPreviewExpanded;
      f.outputPreviewExpanded = N, f.outputPreviewAnimFrom = f.outputPreviewAnim, f.outputPreviewAnimTo = N ? 1 : 0, f.outputPreviewAnimStartTs = performance.now(), bf(), fe();
      return;
    }
    const h = r.target.closest("[data-paint-history-index]");
    if (!h) return;
    const m = Number(h.getAttribute("data-paint-history-index")), b = f.customPaintHistory[m];
    b && (f.customPaintColor = bn(b), f.paintColor = bn(b), cn());
  }), W.addEventListener("input", (r) => {
    const o = r.target.closest("[data-video-seek]");
    if (o) {
      if (!($ instanceof HTMLVideoElement)) return;
      gi();
      const m = G(Number(o.value || 0), 0, Number(k.videoTransport.duration || 0));
      me.mode = "scrub", !me.seeking && !$.paused && !$.ended && (me.resumeAfterScrub = !0, $.pause()), me.editorTime = m, nu(m), Ln({
        ready: !!$.getAttribute("src"),
        playing: !1,
        visible: nr(),
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
        visible: nr(),
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
    const l = r.target.closest("[data-paint-size-slider]");
    if (l) {
      if (l.disabled) return;
      const m = Math.max(1, Math.min(120, Math.round(Number(l.value)))), b = Nr(f.primaryTool === "paint" ? f.paintTool : f.maskTool);
      f.brushSizes[b] = m, cn(), t0();
      return;
    }
    const h = r.target.closest("[data-paint-alpha-slider]");
    if (h) {
      const m = { ...f.customPaintColor, a: G(Number(h.value) / 100, 0, 1) };
      f.customPaintColor = bn(m), f.paintColor = bn(m), cn();
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
    r.target.closest("[data-paint-size-slider]") && po();
  }), W.addEventListener("pointerup", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && po();
  }), W.addEventListener("pointercancel", (r) => {
    var o;
    if (r.target.closest("[data-video-volume]")) {
      typeof ((o = r.target) == null ? void 0 : o.blur) == "function" && r.target.blur();
      return;
    }
    r.target.closest("[data-paint-size-slider]") && po();
  }), W.addEventListener("focusout", (r) => {
    r.target.closest("[data-paint-size-slider]") && po();
  }), W.addEventListener("pointerover", (r) => {
    const o = r.target.closest("[data-tip]");
    !o || !W.contains(o) || ke.target !== o && (ke.target = o, ke.timer && clearTimeout(ke.timer), ke.timer = window.setTimeout(() => {
      ke.target === o && c0(o);
    }, 220));
  }), W.addEventListener("pointerout", (r) => {
    var l, h;
    const o = r.target.closest("[data-tip]");
    !o || ke.target !== o || (r.relatedTarget instanceof Element ? (h = (l = r.relatedTarget).closest) == null ? void 0 : h.call(l, "[data-tip]") : null) === o || Hr();
  }), W.addEventListener("pointerdown", (r) => {
    r.target.closest("[data-frame-roll-knob]") || Hr();
  });
  const f0 = (r, o) => {
    var g;
    if (!Wt) return;
    const s = Wt.getBoundingClientRect(), l = G((r - s.left) / Math.max(1, s.width), 0, 1), h = 1 - G((o - s.top) / Math.max(1, s.height), 0, 1), m = Ql(f.customPaintColor), b = { ...Zl(m.h, l, h), a: Number(((g = f.customPaintColor) == null ? void 0 : g.a) ?? 1) };
    f.customPaintColor = bn(b), f.paintColor = bn(b), cn();
  }, d0 = (r) => {
    var m;
    if (!O) return;
    const o = O.getBoundingClientRect(), s = G((r - o.left) / Math.max(1, o.width), 0, 1), l = Ql(f.customPaintColor), h = { ...Zl(s, l.s, l.v), a: Number(((m = f.customPaintColor) == null ? void 0 : m.a) ?? 1) };
    f.customPaintColor = bn(h), f.paintColor = bn(h), cn();
  }, hf = (r, o) => {
    const s = r.pointerId;
    o(r);
    const l = (m) => {
      m.pointerId === s && o(m);
    }, h = (m) => {
      m.pointerId === s && (window.removeEventListener("pointermove", l), window.removeEventListener("pointerup", h), window.removeEventListener("pointercancel", h));
    };
    window.addEventListener("pointermove", l), window.addEventListener("pointerup", h), window.addEventListener("pointercancel", h);
  };
  Wt && (Wt.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), hf(r, (o) => f0(o.clientX, o.clientY));
  }), O && (O.onpointerdown = (r) => {
    r.preventDefault(), r.stopPropagation(), hf(r, (o) => d0(o.clientX));
  }), W.addEventListener("click", (r) => {
    var h;
    const o = r.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!o) return;
    const s = o.getAttribute("data-action") === "confirm-accept", l = (h = k.confirmDialog) == null ? void 0 : h.resolve;
    k.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, l == null || l(s);
  });
  const mf = () => {
    const r = !!f.fullscreen;
    Pi(k.floatingButtons, "action", "toggle-fullscreen", {
      icon: r ? Oe.fullscreen_close : Oe.fullscreen,
      label: r ? "Exit Fullscreen" : "Fullscreen",
      tip: r ? "Exit fullscreen" : "Fullscreen"
    });
  }, go = (r) => {
    const o = !!r;
    f.fullscreen !== o && (f.fullscreen = o, W.classList.toggle("pano-modal-fullscreen", o), o ? (f.fullscreenPrevShowGrid = !!f.showGrid, f.showGrid = !1) : f.fullscreenPrevShowGrid !== null && (f.showGrid = !!f.fullscreenPrevShowGrid, f.fullscreenPrevShowGrid = null), _l(), mf(), zs(), fe());
  }, pf = () => document.fullscreenElement === L, h0 = async () => {
    var r, o;
    try {
      if (!document.fullscreenEnabled) {
        go(!f.fullscreen);
        return;
      }
      pf() ? await ((o = document.exitFullscreen) == null ? void 0 : o.call(document)) : await ((r = L.requestFullscreen) == null ? void 0 : r.call(L));
    } catch {
      go(!f.fullscreen);
    }
  }, gf = () => {
    document.fullscreenEnabled && go(pf());
  };
  document.addEventListener("fullscreenchange", gf), mf();
  const bf = () => {
    const r = !!f.outputPreviewExpanded;
    k.outputPreviewToggle.icon = r ? Oe.fullscreen_close : Oe.fullscreen, k.outputPreviewToggle.label = r ? "Reduce Preview" : "Expand Preview", k.outputPreviewToggle.tip = r ? "Reduce preview" : "Expand preview";
  };
  bf();
  const xl = e.onExecuted, wl = e.onConnectionsChange;
  let Sl = null, Ml = null, Nl = null;
  !i && t === "stickers" && (Nl = (r = "sync") => {
    bu(r);
  }, e.__panoExternalStickerSync = Nl, Sl = function(...o) {
    var s;
    typeof xl == "function" && xl.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "executed");
  }, e.onExecuted = Sl, Ml = function(...o) {
    var s;
    typeof wl == "function" && wl.apply(this, o), (s = this.__panoExternalStickerSync) == null || s.call(this, "connections");
  }, e.onConnectionsChange = Ml), i || Ud.set(String(e.id ?? "0"), () => Mu());
  let Si = null;
  const Mi = async () => Si || (Si = (async () => {
    var r, o, s, l, h, m, b, g, x, M, P;
    return Ud.delete(String(e.id ?? "0")), Jg(), i || gn(), document.fullscreenElement === L && ((r = document.exitFullscreen) == null || r.call(document).catch(() => {
    })), document.removeEventListener("fullscreenchange", gf), e.__panoLiveStateOverride = null, e.__panoLivePaintSurface = null, (s = (o = e.__panoDomPreview) == null ? void 0 : o.requestDraw) == null || s.call(o), (h = (l = e.graph) == null ? void 0 : l.setDirtyCanvas) == null || h.call(l, !0, !0), (g = (b = (m = yn) == null ? void 0 : m.canvas) == null ? void 0 : b.setDirty) == null || g.call(b, !0, !0), Hr(), Eg(), $ instanceof HTMLVideoElement && $.pause(), At.forEach((N) => {
      try {
        N();
      } catch {
      }
    }), (x = we == null ? void 0 : we.dispose) == null || x.call(we), (M = he == null ? void 0 : he.unmount) == null || M.call(he), (P = te == null ? void 0 : te.dispose) == null || P.call(te), $r(!1), window.removeEventListener("keydown", yf, !0), window.removeEventListener("keydown", vf, !0), window.removeEventListener("keydown", bo, !0), window.removeEventListener("keyup", bo, !0), window.removeEventListener("blur", _f), window.removeEventListener("keydown", xf, !0), window.removeEventListener("dragenter", lf, !0), window.removeEventListener("dragover", cf, !0), window.removeEventListener("dragleave", uf, !0), window.removeEventListener("drop", ff, !0), !i && t === "stickers" && (e.onExecuted === Sl && (e.onExecuted = xl), e.onConnectionsChange === Ml && (e.onConnectionsChange = wl), e.__panoExternalStickerSync === Nl && (e.__panoExternalStickerSync = null)), D.unmount(), E.remove(), Wg(), Si = null, !0;
  })().catch((r) => (console.error("[PanoramaCutoutSync] closeEditor failed", r), Si = null, !1)), Si), yf = (r) => {
    var o, s, l, h, m;
    if (r.key === "Escape") {
      if (oa()) {
        r.preventDefault(), r.stopPropagation(), (o = r.stopImmediatePropagation) == null || o.call(r);
        return;
      }
      if (f.fullscreen && document.fullscreenElement === L) {
        r.preventDefault(), r.stopPropagation(), (s = r.stopImmediatePropagation) == null || s.call(r), (l = document.exitFullscreen) == null || l.call(document).catch(() => {
        });
        return;
      }
      if (f.fullscreen) {
        r.preventDefault(), r.stopPropagation(), (h = r.stopImmediatePropagation) == null || h.call(r), go(!1);
        return;
      }
      r.preventDefault(), r.stopPropagation(), (m = r.stopImmediatePropagation) == null || m.call(r), Mi();
    }
  }, vf = (r) => {
    const o = String(r.key || ""), s = String(r.code || ""), l = Number(r.keyCode || 0);
    if (!(o === "Delete" || s === "Delete" || l === 46) && !(o === "Backspace" || s === "Backspace" || l === 8)) return;
    const b = r.target, g = ((b == null ? void 0 : b.tagName) || "").toUpperCase();
    g === "INPUT" || g === "TEXTAREA" || b != null && b.isContentEditable || !bt() || (Ku(), r.preventDefault(), r.stopPropagation());
  }, bo = (r) => {
    const o = !!(r.ctrlKey || r.metaKey), s = !!r.altKey;
    f.marqueeModifier === o && f.altModifier === s || (f.marqueeModifier = o, f.altModifier = s, Mr(), ct(f.pointerPos));
  }, _f = () => {
    f.marqueeModifier = !1, f.altModifier = !1, Mr(), ct(f.pointerPos);
  }, xf = (r) => {
    if (i || !r.ctrlKey && !r.metaKey) return;
    const o = String(r.key || "").toLowerCase(), s = String(r.code || "");
    if (o !== "z" && s !== "KeyZ") return;
    const l = r.target, h = ((l == null ? void 0 : l.tagName) || "").toUpperCase();
    if (h === "INPUT" || h === "TEXTAREA" || l != null && l.isContentEditable) return;
    const { canUndo: m, canRedo: b } = Hu();
    r.shiftKey && !b || !r.shiftKey && !m || (hl(r.shiftKey ? 1 : -1), r.preventDefault(), r.stopPropagation());
  };
  window.addEventListener("keydown", yf, !0), window.addEventListener("keydown", vf, !0), window.addEventListener("keydown", bo, !0), window.addEventListener("keyup", bo, !0), window.addEventListener("blur", _f), window.addEventListener("keydown", xf, !0), L.addEventListener("pointerdown", (r) => {
    r.target === L && Mi();
  });
  function $n(r, o, { rollbackState: s = !1 } = {}) {
    let l = "";
    try {
      s && (l = JSON.stringify(v)), o();
    } catch (h) {
      if (l)
        try {
          const m = JSON.parse(l);
          Object.keys(v).forEach((b) => delete v[b]), Object.assign(v, m), i || gn();
        } catch (m) {
          console.error(`[PanoramaStickers] editor boot step "${r}" rollback failed`, m);
        }
      k.stageWarningDetail = `boot:${r}`, console.error(`[PanoramaStickers] editor boot step "${r}" failed`, h);
    }
  }
  $n("cutout-focus", yp), !i && t === "stickers" && $n("external-sticker-sync", () => bu("open"), { rollbackState: !0 }), Lg().catch((r) => {
    k.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', r);
  }), $n("history", Ze), $n("undo-redo", vl), $n("paint-ui", cn), $n("side-panel", Ve), $n("look-at-frame", tl), $n("video-source", gi), $n("canvas-size", ju), $n("cursor", () => ct(f.pointerPos)), fe(), oe.rafId = requestAnimationFrame(Vu);
}
function qd(e, t, n, i) {
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
  function c(y) {
    var A;
    const _ = `editor_btn|${n}`;
    if (y.__panoPreviewAttached === !0 && y.__panoPreviewMountKey === _) return;
    a(y), n === "PanoramaStickers" && aS(y), Jc(y), sS(y, xs);
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
      v && (v.value == null || String(v.value).trim() === "" || String(v.value).toLowerCase() === "#000000") && (v.value = "#00ff00", (A = v.callback) == null || A.call(v, "#00ff00")), Sc(y, i, () => Ta(y, "stickers"));
      {
        y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
        return;
      }
    }
    Sc(y, i, () => Ta(y, "cutout")), R1(y, {
      buttonText: i,
      onOpen: () => Ta(y, "cutout")
    }), (!Array.isArray(y.size) || y.size[0] < 10 || y.size[1] < 10) && (y.size = [360, 260]), y.__panoPreviewAttached = !0, y.__panoPreviewMountKey = _;
  }
  const u = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const y = u ? u.apply(this, arguments) : void 0;
    return c(this), y;
  };
  const d = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const y = d ? d.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
  const p = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const y = p ? p.apply(this, arguments) : void 0;
    return this.widgets && c(this), y;
  };
}
function _S(e) {
  if (!(e != null && e.prototype)) return;
  const t = function() {
    (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]);
  }, n = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const i = n ? n.apply(this, arguments) : void 0;
    return t.call(this), i;
  };
}
function xS(e) {
  if (!e || e.__panoStandaloneInstallDone || e.__panoStandaloneInstallProbeActive) return;
  e.__panoStandaloneInstallProbeActive = !0;
  const t = () => {
    const i = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), a = Number(e.__panoStandaloneInstallProbeTries || 0) + 1;
    if (e.__panoStandaloneInstallProbeTries = a, !i && a < 40) {
      requestAnimationFrame(t);
      return;
    }
    Jc(e), Sc(e, "Open Preview", () => Ta(e, "stickers", { readOnly: !0, hideSidebar: !1 })), O1(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: (c) => Ta(c, "stickers", { readOnly: !0, hideSidebar: !1 })
    }), e.__panoStandaloneInstallDone = !0, e.__panoStandaloneInstallProbeActive = !1;
  };
  requestAnimationFrame(t);
}
yn.registerExtension({
  name: "ComfyUI.PanoramaSuite.Editor",
  beforeRegisterNodeDef(e, t) {
    const n = String((t == null ? void 0 : t.name) || "");
    (n === "PanoramaStickers" || n === "Panorama Stickers") && qd(e, t, "PanoramaStickers", "Open Stickers Editor"), (n === "PanoramaCutout" || n === "Panorama Cutout") && qd(e, t, "PanoramaCutout", "Open Cutout Editor"), hs(n) && _S(e);
  },
  nodeCreated(e) {
    const t = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
    Jc(e), hs(t) && xS(e);
  }
});
