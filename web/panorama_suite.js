import * as ga from "../../scripts/app.js";
import { app as or } from "../../scripts/app.js";
import { api as pn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Du(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ft = {}, to = [], _r = () => {
}, $p = () => !1, _l = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), wl = (e) => e.startsWith("onUpdate:"), gn = Object.assign, Lu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, O0 = Object.prototype.hasOwnProperty, Mt = (e, t) => O0.call(e, t), it = Array.isArray, no = (e) => ks(e) === "[object Map]", zp = (e) => ks(e) === "[object Set]", qd = (e) => ks(e) === "[object Date]", at = (e) => typeof e == "function", Zt = (e) => typeof e == "string", kr = (e) => typeof e == "symbol", Et = (e) => e !== null && typeof e == "object", jp = (e) => (Et(e) || at(e)) && at(e.then) && at(e.catch), Hp = Object.prototype.toString, ks = (e) => Hp.call(e), F0 = (e) => ks(e).slice(8, -1), Gp = (e) => ks(e) === "[object Object]", Ru = (e) => Zt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xo = /* @__PURE__ */ Du(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), xl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, T0 = /-\w/g, xn = xl(
  (e) => e.replace(T0, (t) => t.slice(1).toUpperCase())
), D0 = /\B([A-Z])/g, Di = xl(
  (e) => e.replace(D0, "-$1").toLowerCase()
), kl = xl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Jl = xl(
  (e) => e ? `on${kl(e)}` : ""
), br = (e, t) => !Object.is(e, t), ya = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Kp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Vu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Xd;
const Ml = () => Xd || (Xd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function It(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Zt(n) ? $0(n) : It(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Zt(e) || Et(e))
    return e;
}
const L0 = /;(?![^(]*\))/g, R0 = /:([^]+)/, V0 = /\/\*[^]*?\*\//g;
function $0(e) {
  const t = {};
  return e.replace(V0, "").split(L0).forEach((r) => {
    if (r) {
      const n = r.split(R0);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function gt(e) {
  let t = "";
  if (Zt(e))
    t = e;
  else if (it(e))
    for (let r = 0; r < e.length; r++) {
      const n = gt(e[r]);
      n && (t += n + " ");
    }
  else if (Et(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const z0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", j0 = /* @__PURE__ */ Du(z0);
function Wp(e) {
  return !!e || e === "";
}
function H0(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = $u(e[n], t[n]);
  return r;
}
function $u(e, t) {
  if (e === t) return !0;
  let r = qd(e), n = qd(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = kr(e), n = kr(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? H0(e, t) : !1;
  if (r = Et(e), n = Et(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !$u(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Up = (e) => !!(e && e.__v_isRef === !0), nt = (e) => Zt(e) ? e : e == null ? "" : it(e) || Et(e) && (e.toString === Hp || !at(e.toString)) ? Up(e) ? nt(e.value) : JSON.stringify(e, Bp, 2) : String(e), Bp = (e, t) => Up(t) ? Bp(e, t.value) : no(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[Zl(n, o) + " =>"] = i, r),
    {}
  )
} : zp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => Zl(r))
} : kr(t) ? Zl(t) : Et(t) && !it(t) && !Gp(t) ? String(t) : t, Zl = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    kr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fn;
class G0 {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Fn, !t && Fn && (this.index = (Fn.scopes || (Fn.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Fn;
      try {
        return Fn = this, t();
      } finally {
        Fn = r;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Fn, Fn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Fn = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, n;
      for (r = 0, n = this.effects.length; r < n; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, n = this.cleanups.length; r < n; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, n = this.scopes.length; r < n; r++)
          this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function K0() {
  return Fn;
}
let Lt;
const Ql = /* @__PURE__ */ new WeakSet();
class Yp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fn && Fn.active && Fn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ql.has(this) && (Ql.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Xp(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Jd(this), Jp(this);
    const t = Lt, r = sr;
    Lt = this, sr = !0;
    try {
      return this.fn();
    } finally {
      Zp(this), Lt = t, sr = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Hu(t);
      this.deps = this.depsTail = void 0, Jd(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ql.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    zc(this) && this.run();
  }
  get dirty() {
    return zc(this);
  }
}
let qp = 0, Jo, Zo;
function Xp(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Zo, Zo = e;
    return;
  }
  e.next = Jo, Jo = e;
}
function zu() {
  qp++;
}
function ju() {
  if (--qp > 0)
    return;
  if (Zo) {
    let t = Zo;
    for (Zo = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Jo; ) {
    let t = Jo;
    for (Jo = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (n) {
          e || (e = n);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function Jp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Zp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), Hu(n), W0(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function zc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Qp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Qp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === as) || (e.globalVersion = as, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !zc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Lt, n = sr;
  Lt = e, sr = !0;
  try {
    Jp(e);
    const i = e.fn(e._value);
    (t.version === 0 || br(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Lt = r, sr = n, Zp(e), e.flags &= -3;
  }
}
function Hu(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      Hu(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function W0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let sr = !0;
const eh = [];
function jr() {
  eh.push(sr), sr = !1;
}
function Hr() {
  const e = eh.pop();
  sr = e === void 0 ? !0 : e;
}
function Jd(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = Lt;
    Lt = void 0;
    try {
      t();
    } finally {
      Lt = r;
    }
  }
}
let as = 0;
class U0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Gu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Lt || !sr || Lt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Lt)
      r = this.activeLink = new U0(Lt, this), Lt.deps ? (r.prevDep = Lt.depsTail, Lt.depsTail.nextDep = r, Lt.depsTail = r) : Lt.deps = Lt.depsTail = r, th(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Lt.depsTail, r.nextDep = void 0, Lt.depsTail.nextDep = r, Lt.depsTail = r, Lt.deps === r && (Lt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, as++, this.notify(t);
  }
  notify(t) {
    zu();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      ju();
    }
  }
}
function th(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        th(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const jc = /* @__PURE__ */ new WeakMap(), Mi = /* @__PURE__ */ Symbol(
  ""
), Hc = /* @__PURE__ */ Symbol(
  ""
), ls = /* @__PURE__ */ Symbol(
  ""
);
function dn(e, t, r) {
  if (sr && Lt) {
    let n = jc.get(e);
    n || jc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new Gu()), i.map = n, i.key = r), i.track();
  }
}
function Tr(e, t, r, n, i, o) {
  const s = jc.get(e);
  if (!s) {
    as++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (zu(), t === "clear")
    s.forEach(a);
  else {
    const l = it(e), c = l && Ru(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === ls || !kr(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(ls)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(Mi)), no(e) && a(s.get(Hc)));
          break;
        case "delete":
          l || (a(s.get(Mi)), no(e) && a(s.get(Hc)));
          break;
        case "set":
          no(e) && a(s.get(Mi));
          break;
      }
  }
  ju();
}
function Gi(e) {
  const t = /* @__PURE__ */ kt(e);
  return t === e ? t : (dn(t, "iterate", ls), /* @__PURE__ */ qn(e) ? t : t.map(cr));
}
function Pl(e) {
  return dn(e = /* @__PURE__ */ kt(e), "iterate", ls), e;
}
function mr(e, t) {
  return /* @__PURE__ */ Gr(e) ? co(/* @__PURE__ */ Pi(e) ? cr(t) : t) : cr(t);
}
const B0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return ec(this, Symbol.iterator, (e) => mr(this, e));
  },
  concat(...e) {
    return Gi(this).concat(
      ...e.map((t) => it(t) ? Gi(t) : t)
    );
  },
  entries() {
    return ec(this, "entries", (e) => (e[1] = mr(this, e[1]), e));
  },
  every(e, t) {
    return Ar(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ar(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => mr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Ar(
      this,
      "find",
      e,
      t,
      (r) => mr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Ar(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ar(
      this,
      "findLast",
      e,
      t,
      (r) => mr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ar(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ar(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return tc(this, "includes", e);
  },
  indexOf(...e) {
    return tc(this, "indexOf", e);
  },
  join(e) {
    return Gi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return tc(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ar(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Oo(this, "pop");
  },
  push(...e) {
    return Oo(this, "push", e);
  },
  reduce(e, ...t) {
    return Zd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Zd(this, "reduceRight", e, t);
  },
  shift() {
    return Oo(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ar(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Oo(this, "splice", e);
  },
  toReversed() {
    return Gi(this).toReversed();
  },
  toSorted(e) {
    return Gi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Gi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Oo(this, "unshift", e);
  },
  values() {
    return ec(this, "values", (e) => mr(this, e));
  }
};
function ec(e, t, r) {
  const n = Pl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ qn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const Y0 = Array.prototype;
function Ar(e, t, r, n, i, o) {
  const s = Pl(e), a = s !== e && !/* @__PURE__ */ qn(e), l = s[t];
  if (l !== Y0[t]) {
    const u = l.apply(e, o);
    return a ? cr(u) : u;
  }
  let c = r;
  s !== e && (a ? c = function(u, f) {
    return r.call(this, mr(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(s, c, n);
  return a && i ? i(d) : d;
}
function Zd(e, t, r, n) {
  const i = Pl(e), o = i !== e && !/* @__PURE__ */ qn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = mr(e, c)), r.call(this, c, mr(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? mr(e, l) : l;
}
function tc(e, t, r) {
  const n = /* @__PURE__ */ kt(e);
  dn(n, "iterate", ls);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Uu(r[0]) ? (r[0] = /* @__PURE__ */ kt(r[0]), n[t](...r)) : i;
}
function Oo(e, t, r = []) {
  jr(), zu();
  const n = (/* @__PURE__ */ kt(e))[t].apply(e, r);
  return ju(), Hr(), n;
}
const q0 = /* @__PURE__ */ Du("__proto__,__v_isRef,__isVue"), nh = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(kr)
);
function X0(e) {
  kr(e) || (e = String(e));
  const t = /* @__PURE__ */ kt(this);
  return dn(t, "has", e), t.hasOwnProperty(e);
}
class rh {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, n) {
    if (r === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (r === "__v_isReactive")
      return !i;
    if (r === "__v_isReadonly")
      return i;
    if (r === "__v_isShallow")
      return o;
    if (r === "__v_raw")
      return n === (i ? o ? sy : ah : o ? sh : oh).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = it(t);
    if (!i) {
      let l;
      if (s && (l = B0[r]))
        return l;
      if (r === "hasOwnProperty")
        return X0;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ mn(t) ? t : n
    );
    if ((kr(r) ? nh.has(r) : q0(r)) || (i || dn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ mn(a)) {
      const l = s && Ru(r) ? a : a.value;
      return i && Et(l) ? /* @__PURE__ */ Kc(l) : l;
    }
    return Et(a) ? i ? /* @__PURE__ */ Kc(a) : /* @__PURE__ */ bo(a) : a;
  }
}
class ih extends rh {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = it(t) && Ru(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Gr(o);
      if (!/* @__PURE__ */ qn(n) && !/* @__PURE__ */ Gr(n) && (o = /* @__PURE__ */ kt(o), n = /* @__PURE__ */ kt(n)), !s && /* @__PURE__ */ mn(o) && !/* @__PURE__ */ mn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : Mt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ mn(t) ? t : i
    );
    return t === /* @__PURE__ */ kt(i) && (a ? br(n, o) && Tr(t, "set", r, n) : Tr(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = Mt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Tr(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!kr(r) || !nh.has(r)) && dn(t, "has", r), n;
  }
  ownKeys(t) {
    return dn(
      t,
      "iterate",
      it(t) ? "length" : Mi
    ), Reflect.ownKeys(t);
  }
}
class J0 extends rh {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return !0;
  }
  deleteProperty(t, r) {
    return !0;
  }
}
const Z0 = /* @__PURE__ */ new ih(), Q0 = /* @__PURE__ */ new J0(), ey = /* @__PURE__ */ new ih(!0);
const Gc = (e) => e, Qs = (e) => Reflect.getPrototypeOf(e);
function ty(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ kt(i), s = no(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? Gc : t ? co : cr;
    return !t && dn(
      o,
      "iterate",
      l ? Hc : Mi
    ), gn(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: u, done: f } = c.next();
          return f ? { value: u, done: f } : {
            value: a ? [d(u[0]), d(u[1])] : d(u),
            done: f
          };
        }
      }
    );
  };
}
function ea(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ny(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      e || (br(i, a) && dn(s, "get", i), dn(s, "get", a));
      const { has: l } = Qs(s), c = t ? Gc : e ? co : cr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && dn(/* @__PURE__ */ kt(i), "iterate", Mi), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      return e || (br(i, a) && dn(s, "has", i), dn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ kt(a), c = t ? Gc : e ? co : cr;
      return !e && dn(l, "iterate", Mi), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return gn(
    r,
    e ? {
      add: ea("add"),
      set: ea("set"),
      delete: ea("delete"),
      clear: ea("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ kt(this), s = Qs(o), a = /* @__PURE__ */ kt(i), l = !t && !/* @__PURE__ */ qn(i) && !/* @__PURE__ */ Gr(i) ? a : i;
        return s.has.call(o, l) || br(i, l) && s.has.call(o, i) || br(a, l) && s.has.call(o, a) || (o.add(l), Tr(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ qn(o) && !/* @__PURE__ */ Gr(o) && (o = /* @__PURE__ */ kt(o));
        const s = /* @__PURE__ */ kt(this), { has: a, get: l } = Qs(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ kt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? br(o, d) && Tr(s, "set", i, o) : Tr(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ kt(this), { has: s, get: a } = Qs(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ kt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Tr(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ kt(this), o = i.size !== 0, s = i.clear();
        return o && Tr(
          i,
          "clear",
          void 0,
          void 0
        ), s;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    r[i] = ty(i, e, t);
  }), r;
}
function Ku(e, t) {
  const r = ny(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Mt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const ry = {
  get: /* @__PURE__ */ Ku(!1, !1)
}, iy = {
  get: /* @__PURE__ */ Ku(!1, !0)
}, oy = {
  get: /* @__PURE__ */ Ku(!0, !1)
};
const oh = /* @__PURE__ */ new WeakMap(), sh = /* @__PURE__ */ new WeakMap(), ah = /* @__PURE__ */ new WeakMap(), sy = /* @__PURE__ */ new WeakMap();
function ay(e) {
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
function ly(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ay(F0(e));
}
// @__NO_SIDE_EFFECTS__
function bo(e) {
  return /* @__PURE__ */ Gr(e) ? e : Wu(
    e,
    !1,
    Z0,
    ry,
    oh
  );
}
// @__NO_SIDE_EFFECTS__
function cy(e) {
  return Wu(
    e,
    !1,
    ey,
    iy,
    sh
  );
}
// @__NO_SIDE_EFFECTS__
function Kc(e) {
  return Wu(
    e,
    !0,
    Q0,
    oy,
    ah
  );
}
function Wu(e, t, r, n, i) {
  if (!Et(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = ly(e);
  if (o === 0)
    return e;
  const s = i.get(e);
  if (s)
    return s;
  const a = new Proxy(
    e,
    o === 2 ? n : r
  );
  return i.set(e, a), a;
}
// @__NO_SIDE_EFFECTS__
function Pi(e) {
  return /* @__PURE__ */ Gr(e) ? /* @__PURE__ */ Pi(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Gr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Uu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ kt(t) : e;
}
function uy(e) {
  return !Mt(e, "__v_skip") && Object.isExtensible(e) && Kp(e, "__v_skip", !0), e;
}
const cr = (e) => Et(e) ? /* @__PURE__ */ bo(e) : e, co = (e) => Et(e) ? /* @__PURE__ */ Kc(e) : e;
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function qt(e) {
  return lh(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Ra(e) {
  return lh(e, !0);
}
function lh(e, t) {
  return /* @__PURE__ */ mn(e) ? e : new dy(e, t);
}
class dy {
  constructor(t, r) {
    this.dep = new Gu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ kt(t), this._value = r ? t : cr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ qn(t) || /* @__PURE__ */ Gr(t);
    t = n ? t : /* @__PURE__ */ kt(t), br(t, r) && (this._rawValue = t, this._value = n ? t : cr(t), this.dep.trigger());
  }
}
function tt(e) {
  return /* @__PURE__ */ mn(e) ? e.value : e;
}
const fy = {
  get: (e, t, r) => t === "__v_raw" ? e : tt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ mn(i) && !/* @__PURE__ */ mn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function ch(e) {
  return /* @__PURE__ */ Pi(e) ? e : new Proxy(e, fy);
}
class py {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Gu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = as - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Lt !== this)
      return Xp(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Qp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function hy(e, t, r = !1) {
  let n, i;
  return at(e) ? n = e : (n = e.get, i = e.set), new py(n, i, r);
}
const ta = {}, Va = /* @__PURE__ */ new WeakMap();
let _i;
function my(e, t = !1, r = _i) {
  if (r) {
    let n = Va.get(r);
    n || Va.set(r, n = []), n.push(e);
  }
}
function gy(e, t, r = Ft) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (re) => i ? re : /* @__PURE__ */ qn(re) || i === !1 || i === 0 ? Dr(re, 1) : Dr(re);
  let d, u, f, m, x = !1, g = !1;
  if (/* @__PURE__ */ mn(e) ? (u = () => e.value, x = /* @__PURE__ */ qn(e)) : /* @__PURE__ */ Pi(e) ? (u = () => c(e), x = !0) : it(e) ? (g = !0, x = e.some((re) => /* @__PURE__ */ Pi(re) || /* @__PURE__ */ qn(re)), u = () => e.map((re) => {
    if (/* @__PURE__ */ mn(re))
      return re.value;
    if (/* @__PURE__ */ Pi(re))
      return c(re);
    if (at(re))
      return l ? l(re, 2) : re();
  })) : at(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      jr();
      try {
        f();
      } finally {
        Hr();
      }
    }
    const re = _i;
    _i = d;
    try {
      return l ? l(e, 3, [m]) : e(m);
    } finally {
      _i = re;
    }
  } : u = _r, t && i) {
    const re = u, T = i === !0 ? 1 / 0 : i;
    u = () => Dr(re(), T);
  }
  const h = K0(), _ = () => {
    d.stop(), h && h.active && Lu(h.effects, d);
  };
  if (o && t) {
    const re = t;
    t = (...T) => {
      re(...T), _();
    };
  }
  let te = g ? new Array(e.length).fill(ta) : ta;
  const G = (re) => {
    if (!(!(d.flags & 1) || !d.dirty && !re))
      if (t) {
        const T = d.run();
        if (i || x || (g ? T.some((W, $) => br(W, te[$])) : br(T, te))) {
          f && f();
          const W = _i;
          _i = d;
          try {
            const $ = [
              T,
              // pass undefined as the old value when it's changed for the first time
              te === ta ? void 0 : g && te[0] === ta ? [] : te,
              m
            ];
            te = T, l ? l(t, 3, $) : (
              // @ts-expect-error
              t(...$)
            );
          } finally {
            _i = W;
          }
        }
      } else
        d.run();
  };
  return a && a(G), d = new Yp(u), d.scheduler = s ? () => s(G, !1) : G, m = (re) => my(re, !1, d), f = d.onStop = () => {
    const re = Va.get(d);
    if (re) {
      if (l)
        l(re, 4);
      else
        for (const T of re) T();
      Va.delete(d);
    }
  }, t ? n ? G(!0) : te = d.run() : s ? s(G.bind(null, !0), !0) : d.run(), _.pause = d.pause.bind(d), _.resume = d.resume.bind(d), _.stop = _, _;
}
function Dr(e, t = 1 / 0, r) {
  if (t <= 0 || !Et(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ mn(e))
    Dr(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Dr(e[n], t, r);
  else if (zp(e) || no(e))
    e.forEach((n) => {
      Dr(n, t, r);
    });
  else if (Gp(e)) {
    for (const n in e)
      Dr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Dr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ms(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    Nl(i, t, r);
  }
}
function Mr(e, t, r, n) {
  if (at(e)) {
    const i = Ms(e, t, r, n);
    return i && jp(i) && i.catch((o) => {
      Nl(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(Mr(e[o], t, r, n));
    return i;
  }
}
function Nl(e, t, r, n = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: s } = t && t.appContext.config || Ft;
  if (t) {
    let a = t.parent;
    const l = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; a; ) {
      const d = a.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, l, c) === !1)
            return;
      }
      a = a.parent;
    }
    if (o) {
      jr(), Ms(o, null, 10, [
        e,
        l,
        c
      ]), Hr();
      return;
    }
  }
  yy(e, r, i, n, s);
}
function yy(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Sn = [];
let hr = -1;
const ro = [];
let Zr = null, Ui = 0;
const uh = /* @__PURE__ */ Promise.resolve();
let $a = null;
function Al(e) {
  const t = $a || uh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function by(e) {
  let t = hr + 1, r = Sn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = Sn[n], o = cs(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Bu(e) {
  if (!(e.flags & 1)) {
    const t = cs(e), r = Sn[Sn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= cs(r) ? Sn.push(e) : Sn.splice(by(t), 0, e), e.flags |= 1, dh();
  }
}
function dh() {
  $a || ($a = uh.then(ph));
}
function vy(e) {
  it(e) ? ro.push(...e) : Zr && e.id === -1 ? Zr.splice(Ui + 1, 0, e) : e.flags & 1 || (ro.push(e), e.flags |= 1), dh();
}
function Qd(e, t, r = hr + 1) {
  for (; r < Sn.length; r++) {
    const n = Sn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Sn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function fh(e) {
  if (ro.length) {
    const t = [...new Set(ro)].sort(
      (r, n) => cs(r) - cs(n)
    );
    if (ro.length = 0, Zr) {
      Zr.push(...t);
      return;
    }
    for (Zr = t, Ui = 0; Ui < Zr.length; Ui++) {
      const r = Zr[Ui];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Zr = null, Ui = 0;
  }
}
const cs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ph(e) {
  try {
    for (hr = 0; hr < Sn.length; hr++) {
      const t = Sn[hr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ms(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; hr < Sn.length; hr++) {
      const t = Sn[hr];
      t && (t.flags &= -2);
    }
    hr = -1, Sn.length = 0, fh(), $a = null, (Sn.length || ro.length) && ph();
  }
}
let zn = null, hh = null;
function za(e) {
  const t = zn;
  return zn = e, hh = e && e.type.__scopeId || null, t;
}
function mh(e, t = zn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && ff(-1);
    const o = za(t);
    let s;
    try {
      s = e(...i);
    } finally {
      za(o), n._d && ff(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function zr(e, t) {
  if (zn === null)
    return e;
  const r = Fl(zn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Ft] = t[i];
    o && (at(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Dr(s), n.push({
      dir: o,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: a,
      modifiers: l
    }));
  }
  return e;
}
function mi(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[n];
    l && (jr(), Mr(l, r, 8, [
      e.el,
      a,
      e,
      t
    ]), Hr());
  }
}
function Sy(e, t) {
  if (fn) {
    let r = fn.provides;
    const n = fn.parent && fn.parent.provides;
    n === r && (r = fn.provides = Object.create(n)), r[e] = t;
  }
}
function ba(e, t, r = !1) {
  const n = bb();
  if (n || io) {
    let i = io ? io._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && at(t) ? t.call(n && n.proxy) : t;
  }
}
const _y = /* @__PURE__ */ Symbol.for("v-scx"), wy = () => ba(_y);
function Ni(e, t, r) {
  return gh(e, t, r);
}
function gh(e, t, r = Ft) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = gn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (ds) {
    if (o === "sync") {
      const m = wy();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!l) {
      const m = () => {
      };
      return m.stop = _r, m.resume = _r, m.pause = _r, m;
    }
  }
  const d = fn;
  a.call = (m, x, g) => Mr(m, d, x, g);
  let u = !1;
  o === "post" ? a.scheduler = (m) => {
    On(m, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (m, x) => {
    x ? m() : Bu(m);
  }), a.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const f = gy(e, t, a);
  return ds && (c ? c.push(f) : l && f()), f;
}
function xy(e, t, r) {
  const n = this.proxy, i = Zt(e) ? e.includes(".") ? yh(n, e) : () => n[e] : e.bind(n, n);
  let o;
  at(t) ? o = t : (o = t.handler, r = t);
  const s = Ns(this), a = gh(i, o.bind(n), r);
  return s(), a;
}
function yh(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const ky = /* @__PURE__ */ Symbol("_vte"), My = (e) => e.__isTeleport, Py = /* @__PURE__ */ Symbol("_leaveCb");
function Yu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Yu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function bh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function ef(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const ja = /* @__PURE__ */ new WeakMap();
function Qo(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (g, h) => Qo(
        g,
        t && (it(t) ? t[h] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (es(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Qo(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Fl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Ft ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ kt(u), m = u === Ft ? $p : (g) => ef(d, g) ? !1 : Mt(f, g), x = (g, h) => !(h && ef(d, h));
  if (c != null && c !== l) {
    if (tf(t), Zt(c))
      d[c] = null, m(c) && (u[c] = null);
    else if (/* @__PURE__ */ mn(c)) {
      const g = t;
      x(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (at(l))
    Ms(l, a, 12, [s, d]);
  else {
    const g = Zt(l), h = /* @__PURE__ */ mn(l);
    if (g || h) {
      const _ = () => {
        if (e.f) {
          const te = g ? m(l) ? u[l] : d[l] : x() || !e.k ? l.value : d[e.k];
          if (i)
            it(te) && Lu(te, o);
          else if (it(te))
            te.includes(o) || te.push(o);
          else if (g)
            d[l] = [o], m(l) && (u[l] = d[l]);
          else {
            const G = [o];
            x(l, e.k) && (l.value = G), e.k && (d[e.k] = G);
          }
        } else g ? (d[l] = s, m(l) && (u[l] = s)) : h && (x(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const te = () => {
          _(), ja.delete(e);
        };
        te.id = -1, ja.set(e, te), On(te, r);
      } else
        tf(e), _();
    }
  }
}
function tf(e) {
  const t = ja.get(e);
  t && (t.flags |= 8, ja.delete(e));
}
Ml().requestIdleCallback;
Ml().cancelIdleCallback;
const es = (e) => !!e.type.__asyncLoader, vh = (e) => e.type.__isKeepAlive;
function Ny(e, t) {
  Sh(e, "a", t);
}
function Ay(e, t) {
  Sh(e, "da", t);
}
function Sh(e, t, r = fn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Cl(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      vh(i.parent.vnode) && Cy(n, t, r, i), i = i.parent;
  }
}
function Cy(e, t, r, n) {
  const i = Cl(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  _h(() => {
    Lu(n[t], i);
  }, r);
}
function Cl(e, t, r = fn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      jr();
      const a = Ns(r), l = Mr(t, r, e, s);
      return a(), Hr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Kr = (e) => (t, r = fn) => {
  (!ds || e === "sp") && Cl(e, (...n) => t(...n), r);
}, Iy = Kr("bm"), Il = Kr("m"), Ey = Kr(
  "bu"
), Oy = Kr("u"), Ps = Kr(
  "bum"
), _h = Kr("um"), Fy = Kr(
  "sp"
), Ty = Kr("rtg"), Dy = Kr("rtc");
function Ly(e, t = fn) {
  Cl("ec", e, t);
}
const Ry = "components", wh = /* @__PURE__ */ Symbol.for("v-ndc");
function Vy(e) {
  return Zt(e) ? $y(Ry, e, !1) || e : e || wh;
}
function $y(e, t, r = !0, n = !1) {
  const i = zn || fn;
  if (i) {
    const o = i.type;
    {
      const a = xb(
        o,
        !1
      );
      if (a && (a === t || a === xn(t) || a === kl(xn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      nf(i[e] || o[e], t) || // global registration
      nf(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function nf(e, t) {
  return e && (e[t] || e[xn(t)] || e[kl(xn(t))]);
}
function Pt(e, t, r, n) {
  let i;
  const o = r, s = it(e);
  if (s || Zt(e)) {
    const a = s && /* @__PURE__ */ Pi(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ qn(e), c = /* @__PURE__ */ Gr(e), e = Pl(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? co(cr(e[d])) : cr(e[d]) : e[d],
        d,
        void 0,
        o
      );
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let a = 0; a < e; a++)
      i[a] = t(a + 1, a, void 0, o);
  } else if (Et(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (a, l) => t(a, l, void 0, o)
      );
    else {
      const a = Object.keys(e);
      i = new Array(a.length);
      for (let l = 0, c = a.length; l < c; l++) {
        const d = a[l];
        i[l] = t(e[d], d, l, o);
      }
    }
  else
    i = [];
  return i;
}
const Wc = (e) => e ? Gh(e) ? Fl(e) : Wc(e.parent) : null, ts = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ gn(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Wc(e.parent),
    $root: (e) => Wc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => kh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Bu(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Al.bind(e.proxy)),
    $watch: (e) => xy.bind(e)
  })
), nc = (e, t) => e !== Ft && !e.__isScriptSetup && Mt(e, t), zy = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: n, data: i, props: o, accessCache: s, type: a, appContext: l } = e;
    if (t[0] !== "$") {
      const f = s[t];
      if (f !== void 0)
        switch (f) {
          case 1:
            return n[t];
          case 2:
            return i[t];
          case 4:
            return r[t];
          case 3:
            return o[t];
        }
      else {
        if (nc(n, t))
          return s[t] = 1, n[t];
        if (i !== Ft && Mt(i, t))
          return s[t] = 2, i[t];
        if (Mt(o, t))
          return s[t] = 3, o[t];
        if (r !== Ft && Mt(r, t))
          return s[t] = 4, r[t];
        Uc && (s[t] = 0);
      }
    }
    const c = ts[t];
    let d, u;
    if (c)
      return t === "$attrs" && dn(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (d = a.__cssModules) && (d = d[t])
    )
      return d;
    if (r !== Ft && Mt(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      u = l.config.globalProperties, Mt(u, t)
    )
      return u[t];
  },
  set({ _: e }, t, r) {
    const { data: n, setupState: i, ctx: o } = e;
    return nc(i, t) ? (i[t] = r, !0) : n !== Ft && Mt(n, t) ? (n[t] = r, !0) : Mt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Ft && a[0] !== "$" && Mt(e, a) || nc(t, a) || Mt(o, a) || Mt(n, a) || Mt(ts, a) || Mt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Mt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function rf(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Uc = !0;
function jy(e) {
  const t = kh(e), r = e.proxy, n = e.ctx;
  Uc = !1, t.beforeCreate && of(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: s,
    watch: a,
    provide: l,
    inject: c,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: f,
    beforeUpdate: m,
    updated: x,
    activated: g,
    deactivated: h,
    beforeDestroy: _,
    beforeUnmount: te,
    destroyed: G,
    unmounted: re,
    render: T,
    renderTracked: W,
    renderTriggered: $,
    errorCaptured: U,
    serverPrefetch: ve,
    // public API
    expose: ye,
    inheritAttrs: de,
    // assets
    components: ge,
    directives: le,
    filters: _e
  } = t;
  if (c && Hy(c, n, null), s)
    for (const B in s) {
      const P = s[B];
      at(P) && (n[B] = P.bind(r));
    }
  if (i) {
    const B = i.call(r, r);
    Et(B) && (e.data = /* @__PURE__ */ bo(B));
  }
  if (Uc = !0, o)
    for (const B in o) {
      const P = o[B], M = at(P) ? P.bind(r, r) : at(P.get) ? P.get.bind(r, r) : _r, F = !at(P) && at(P.set) ? P.set.bind(r) : _r, C = dt({
        get: M,
        set: F
      });
      Object.defineProperty(n, B, {
        enumerable: !0,
        configurable: !0,
        get: () => C.value,
        set: (ne) => C.value = ne
      });
    }
  if (a)
    for (const B in a)
      xh(a[B], n, r, B);
  if (l) {
    const B = at(l) ? l.call(r) : l;
    Reflect.ownKeys(B).forEach((P) => {
      Sy(P, B[P]);
    });
  }
  d && of(d, e, "c");
  function O(B, P) {
    it(P) ? P.forEach((M) => B(M.bind(r))) : P && B(P.bind(r));
  }
  if (O(Iy, u), O(Il, f), O(Ey, m), O(Oy, x), O(Ny, g), O(Ay, h), O(Ly, U), O(Dy, W), O(Ty, $), O(Ps, te), O(_h, re), O(Fy, ve), it(ye))
    if (ye.length) {
      const B = e.exposed || (e.exposed = {});
      ye.forEach((P) => {
        Object.defineProperty(B, P, {
          get: () => r[P],
          set: (M) => r[P] = M,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === _r && (e.render = T), de != null && (e.inheritAttrs = de), ge && (e.components = ge), le && (e.directives = le), ve && bh(e);
}
function Hy(e, t, r = _r) {
  it(e) && (e = Bc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Et(i) ? "default" in i ? o = ba(
      i.from || n,
      i.default,
      !0
    ) : o = ba(i.from || n) : o = ba(i), /* @__PURE__ */ mn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function of(e, t, r) {
  Mr(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function xh(e, t, r, n) {
  let i = n.includes(".") ? yh(r, n) : () => r[n];
  if (Zt(e)) {
    const o = t[e];
    at(o) && Ni(i, o);
  } else if (at(e))
    Ni(i, e.bind(r));
  else if (Et(e))
    if (it(e))
      e.forEach((o) => xh(o, t, r, n));
    else {
      const o = at(e.handler) ? e.handler.bind(r) : t[e.handler];
      at(o) && Ni(i, o, e);
    }
}
function kh(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => Ha(l, c, s, !0)
  ), Ha(l, t, s)), Et(t) && o.set(t, l), l;
}
function Ha(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && Ha(e, o, r, !0), i && i.forEach(
    (s) => Ha(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = Gy[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Gy = {
  data: sf,
  props: af,
  emits: af,
  // objects
  methods: zo,
  computed: zo,
  // lifecycle
  beforeCreate: bn,
  created: bn,
  beforeMount: bn,
  mounted: bn,
  beforeUpdate: bn,
  updated: bn,
  beforeDestroy: bn,
  beforeUnmount: bn,
  destroyed: bn,
  unmounted: bn,
  activated: bn,
  deactivated: bn,
  errorCaptured: bn,
  serverPrefetch: bn,
  // assets
  components: zo,
  directives: zo,
  // watch
  watch: Wy,
  // provide / inject
  provide: sf,
  inject: Ky
};
function sf(e, t) {
  return t ? e ? function() {
    return gn(
      at(e) ? e.call(this, this) : e,
      at(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Ky(e, t) {
  return zo(Bc(e), Bc(t));
}
function Bc(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function bn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function zo(e, t) {
  return e ? gn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function af(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : gn(
    /* @__PURE__ */ Object.create(null),
    rf(e),
    rf(t ?? {})
  ) : t;
}
function Wy(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = gn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = bn(e[n], t[n]);
  return r;
}
function Mh() {
  return {
    app: null,
    config: {
      isNativeTag: $p,
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
let Uy = 0;
function By(e, t) {
  return function(n, i = null) {
    at(n) || (n = gn({}, n)), i != null && !Et(i) && (i = null);
    const o = Mh(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: Uy++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Mb,
      get config() {
        return o.config;
      },
      set config(d) {
      },
      use(d, ...u) {
        return s.has(d) || (d && at(d.install) ? (s.add(d), d.install(c, ...u)) : at(d) && (s.add(d), d(c, ...u))), c;
      },
      mixin(d) {
        return o.mixins.includes(d) || o.mixins.push(d), c;
      },
      component(d, u) {
        return u ? (o.components[d] = u, c) : o.components[d];
      },
      directive(d, u) {
        return u ? (o.directives[d] = u, c) : o.directives[d];
      },
      mount(d, u, f) {
        if (!l) {
          const m = c._ceVNode || Be(n, i);
          return m.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(m, d, f), l = !0, c._container = d, d.__vue_app__ = c, Fl(m.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (Mr(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = io;
        io = c;
        try {
          return d();
        } finally {
          io = u;
        }
      }
    };
    return c;
  };
}
let io = null;
const Yy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xn(t)}Modifiers`] || e[`${Di(t)}Modifiers`];
function qy(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ft;
  let i = r;
  const o = t.startsWith("update:"), s = o && Yy(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Zt(d) ? d.trim() : d)), s.number && (i = r.map(Vu)));
  let a, l = n[a = Jl(t)] || // also try camelCase event handler (#2249)
  n[a = Jl(xn(t))];
  !l && o && (l = n[a = Jl(Di(t))]), l && Mr(
    l,
    e,
    6,
    i
  );
  const c = n[a + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[a])
      return;
    e.emitted[a] = !0, Mr(
      c,
      e,
      6,
      i
    );
  }
}
const Xy = /* @__PURE__ */ new WeakMap();
function Ph(e, t, r = !1) {
  const n = r ? Xy : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!at(e)) {
    const l = (c) => {
      const d = Ph(c, t, !0);
      d && (a = !0, gn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Et(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => s[l] = null) : gn(s, o), Et(e) && n.set(e, s), s);
}
function El(e, t) {
  return !e || !_l(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Mt(e, t[0].toLowerCase() + t.slice(1)) || Mt(e, Di(t)) || Mt(e, t));
}
function lf(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    propsOptions: [o],
    slots: s,
    attrs: a,
    emit: l,
    render: c,
    renderCache: d,
    props: u,
    data: f,
    setupState: m,
    ctx: x,
    inheritAttrs: g
  } = e, h = za(e);
  let _, te;
  try {
    if (r.shapeFlag & 4) {
      const re = i || n, T = re;
      _ = gr(
        c.call(
          T,
          re,
          d,
          u,
          m,
          f,
          x
        )
      ), te = a;
    } else {
      const re = t;
      _ = gr(
        re.length > 1 ? re(
          u,
          { attrs: a, slots: s, emit: l }
        ) : re(
          u,
          null
        )
      ), te = t.props ? a : Jy(a);
    }
  } catch (re) {
    ns.length = 0, Nl(re, e, 1), _ = Be(ri);
  }
  let G = _;
  if (te && g !== !1) {
    const re = Object.keys(te), { shapeFlag: T } = G;
    re.length && T & 7 && (o && re.some(wl) && (te = Zy(
      te,
      o
    )), G = uo(G, te, !1, !0));
  }
  return r.dirs && (G = uo(G, null, !1, !0), G.dirs = G.dirs ? G.dirs.concat(r.dirs) : r.dirs), r.transition && Yu(G, r.transition), _ = G, za(h), _;
}
const Jy = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || _l(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Zy = (e, t) => {
  const r = {};
  for (const n in e)
    (!wl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function Qy(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? cf(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (Nh(s, n, f) && !El(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? cf(n, s, c) : !0 : !!s;
  return !1;
}
function cf(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (Nh(t, e, o) && !El(r, o))
      return !0;
  }
  return !1;
}
function Nh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Et(n) && Et(i) ? !$u(n, i) : n !== i;
}
function eb({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const Ah = {}, Ch = () => Object.create(Ah), Ih = (e) => Object.getPrototypeOf(e) === Ah;
function tb(e, t, r, n = !1) {
  const i = {}, o = Ch();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Eh(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ cy(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function nb(e, t, r, n) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: s }
  } = e, a = /* @__PURE__ */ kt(i), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (n || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let f = d[u];
        if (El(e.emitsOptions, f))
          continue;
        const m = t[f];
        if (l)
          if (Mt(o, f))
            m !== o[f] && (o[f] = m, c = !0);
          else {
            const x = xn(f);
            i[x] = Yc(
              l,
              a,
              x,
              m,
              e,
              !1
            );
          }
        else
          m !== o[f] && (o[f] = m, c = !0);
      }
    }
  } else {
    Eh(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !Mt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Di(u)) === u || !Mt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Yc(
        l,
        a,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (o !== a)
      for (const u in o)
        (!t || !Mt(t, u)) && (delete o[u], c = !0);
  }
  c && Tr(e.attrs, "set", "");
}
function Eh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (Xo(l))
        continue;
      const c = t[l];
      let d;
      i && Mt(i, d = xn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : El(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ kt(r), c = a || Ft;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Yc(
        i,
        l,
        u,
        c[u],
        e,
        !Mt(c, u)
      );
    }
  }
  return s;
}
function Yc(e, t, r, n, i, o) {
  const s = e[r];
  if (s != null) {
    const a = Mt(s, "default");
    if (a && n === void 0) {
      const l = s.default;
      if (s.type !== Function && !s.skipFactory && at(l)) {
        const { propsDefaults: c } = i;
        if (r in c)
          n = c[r];
        else {
          const d = Ns(i);
          n = c[r] = l.call(
            null,
            t
          ), d();
        }
      } else
        n = l;
      i.ce && i.ce._setProp(r, n);
    }
    s[
      0
      /* shouldCast */
    ] && (o && !a ? n = !1 : s[
      1
      /* shouldCastTrue */
    ] && (n === "" || n === Di(r)) && (n = !0));
  }
  return n;
}
const rb = /* @__PURE__ */ new WeakMap();
function Oh(e, t, r = !1) {
  const n = r ? rb : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!at(e)) {
    const d = (u) => {
      l = !0;
      const [f, m] = Oh(u, t, !0);
      gn(s, f), m && a.push(...m);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Et(e) && n.set(e, to), to;
  if (it(o))
    for (let d = 0; d < o.length; d++) {
      const u = xn(o[d]);
      uf(u) && (s[u] = Ft);
    }
  else if (o)
    for (const d in o) {
      const u = xn(d);
      if (uf(u)) {
        const f = o[d], m = s[u] = it(f) || at(f) ? { type: f } : gn({}, f), x = m.type;
        let g = !1, h = !0;
        if (it(x))
          for (let _ = 0; _ < x.length; ++_) {
            const te = x[_], G = at(te) && te.name;
            if (G === "Boolean") {
              g = !0;
              break;
            } else G === "String" && (h = !1);
          }
        else
          g = at(x) && x.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = g, m[
          1
          /* shouldCastTrue */
        ] = h, (g || Mt(m, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return Et(e) && n.set(e, c), c;
}
function uf(e) {
  return e[0] !== "$" && !Xo(e);
}
const qu = (e) => e === "_" || e === "_ctx" || e === "$stable", Xu = (e) => it(e) ? e.map(gr) : [gr(e)], ib = (e, t, r) => {
  if (t._n)
    return t;
  const n = mh((...i) => Xu(t(...i)), r);
  return n._c = !1, n;
}, Fh = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (qu(i)) continue;
    const o = e[i];
    if (at(o))
      t[i] = ib(i, o, n);
    else if (o != null) {
      const s = Xu(o);
      t[i] = () => s;
    }
  }
}, Th = (e, t) => {
  const r = Xu(t);
  e.slots.default = () => r;
}, Dh = (e, t, r) => {
  for (const n in t)
    (r || !qu(n)) && (e[n] = t[n]);
}, ob = (e, t, r) => {
  const n = e.slots = Ch();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Dh(n, t, r), r && Kp(n, "_", i, !0)) : Fh(t, n);
  } else t && Th(e, t);
}, sb = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Ft;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : Dh(i, t, r) : (o = !t.$stable, Fh(t, i)), s = t;
  } else t && (Th(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !qu(a) && s[a] == null && delete i[a];
}, On = db;
function ab(e) {
  return lb(e);
}
function lb(e, t) {
  const r = Ml();
  r.__VUE__ = !0;
  const {
    insert: n,
    remove: i,
    patchProp: o,
    createElement: s,
    createText: a,
    createComment: l,
    setText: c,
    setElementText: d,
    parentNode: u,
    nextSibling: f,
    setScopeId: m = _r,
    insertStaticContent: x
  } = e, g = (y, b, E, S = null, j = null, H = null, X = void 0, L = null, D = !!b.dynamicChildren) => {
    if (y === b)
      return;
    y && !Fo(y, b) && (S = ie(y), ne(y, j, H, !0), y = null), b.patchFlag === -2 && (D = !1, b.dynamicChildren = null);
    const { type: k, ref: R, shapeFlag: ee } = b;
    switch (k) {
      case Ol:
        h(y, b, E, S);
        break;
      case ri:
        _(y, b, E, S);
        break;
      case ic:
        y == null && te(b, E, S, X);
        break;
      case Ze:
        ge(
          y,
          b,
          E,
          S,
          j,
          H,
          X,
          L,
          D
        );
        break;
      default:
        ee & 1 ? T(
          y,
          b,
          E,
          S,
          j,
          H,
          X,
          L,
          D
        ) : ee & 6 ? le(
          y,
          b,
          E,
          S,
          j,
          H,
          X,
          L,
          D
        ) : (ee & 64 || ee & 128) && k.process(
          y,
          b,
          E,
          S,
          j,
          H,
          X,
          L,
          D,
          A
        );
    }
    R != null && j ? Qo(R, y && y.ref, H, b || y, !b) : R == null && y && y.ref != null && Qo(y.ref, null, H, y, !0);
  }, h = (y, b, E, S) => {
    if (y == null)
      n(
        b.el = a(b.children),
        E,
        S
      );
    else {
      const j = b.el = y.el;
      b.children !== y.children && c(j, b.children);
    }
  }, _ = (y, b, E, S) => {
    y == null ? n(
      b.el = l(b.children || ""),
      E,
      S
    ) : b.el = y.el;
  }, te = (y, b, E, S) => {
    [y.el, y.anchor] = x(
      y.children,
      b,
      E,
      S,
      y.el,
      y.anchor
    );
  }, G = ({ el: y, anchor: b }, E, S) => {
    let j;
    for (; y && y !== b; )
      j = f(y), n(y, E, S), y = j;
    n(b, E, S);
  }, re = ({ el: y, anchor: b }) => {
    let E;
    for (; y && y !== b; )
      E = f(y), i(y), y = E;
    i(b);
  }, T = (y, b, E, S, j, H, X, L, D) => {
    if (b.type === "svg" ? X = "svg" : b.type === "math" && (X = "mathml"), y == null)
      W(
        b,
        E,
        S,
        j,
        H,
        X,
        L,
        D
      );
    else {
      const k = y.el && y.el._isVueCE ? y.el : null;
      try {
        k && k._beginPatch(), ve(
          y,
          b,
          j,
          H,
          X,
          L,
          D
        );
      } finally {
        k && k._endPatch();
      }
    }
  }, W = (y, b, E, S, j, H, X, L) => {
    let D, k;
    const { props: R, shapeFlag: ee, transition: ce, dirs: Se } = y;
    if (D = y.el = s(
      y.type,
      H,
      R && R.is,
      R
    ), ee & 8 ? d(D, y.children) : ee & 16 && U(
      y.children,
      D,
      null,
      S,
      j,
      rc(y, H),
      X,
      L
    ), Se && mi(y, null, S, "created"), $(D, y, y.scopeId, X, S), R) {
      for (const he in R)
        he !== "value" && !Xo(he) && o(D, he, null, R[he], H, S);
      "value" in R && o(D, "value", null, R.value, H), (k = R.onVnodeBeforeMount) && fr(k, S, y);
    }
    Se && mi(y, null, S, "beforeMount");
    const ue = cb(j, ce);
    ue && ce.beforeEnter(D), n(D, b, E), ((k = R && R.onVnodeMounted) || ue || Se) && On(() => {
      try {
        k && fr(k, S, y), ue && ce.enter(D), Se && mi(y, null, S, "mounted");
      } finally {
      }
    }, j);
  }, $ = (y, b, E, S, j) => {
    if (E && m(y, E), S)
      for (let H = 0; H < S.length; H++)
        m(y, S[H]);
    if (j) {
      let H = j.subTree;
      if (b === H || $h(H.type) && (H.ssContent === b || H.ssFallback === b)) {
        const X = j.vnode;
        $(
          y,
          X,
          X.scopeId,
          X.slotScopeIds,
          j.parent
        );
      }
    }
  }, U = (y, b, E, S, j, H, X, L, D = 0) => {
    for (let k = D; k < y.length; k++) {
      const R = y[k] = L ? Er(y[k]) : gr(y[k]);
      g(
        null,
        R,
        b,
        E,
        S,
        j,
        H,
        X,
        L
      );
    }
  }, ve = (y, b, E, S, j, H, X) => {
    const L = b.el = y.el;
    let { patchFlag: D, dynamicChildren: k, dirs: R } = b;
    D |= y.patchFlag & 16;
    const ee = y.props || Ft, ce = b.props || Ft;
    let Se;
    if (E && gi(E, !1), (Se = ce.onVnodeBeforeUpdate) && fr(Se, E, b, y), R && mi(b, y, E, "beforeUpdate"), E && gi(E, !0), (ee.innerHTML && ce.innerHTML == null || ee.textContent && ce.textContent == null) && d(L, ""), k ? ye(
      y.dynamicChildren,
      k,
      L,
      E,
      S,
      rc(b, j),
      H
    ) : X || P(
      y,
      b,
      L,
      null,
      E,
      S,
      rc(b, j),
      H,
      !1
    ), D > 0) {
      if (D & 16)
        de(L, ee, ce, E, j);
      else if (D & 2 && ee.class !== ce.class && o(L, "class", null, ce.class, j), D & 4 && o(L, "style", ee.style, ce.style, j), D & 8) {
        const ue = b.dynamicProps;
        for (let he = 0; he < ue.length; he++) {
          const me = ue[he], J = ee[me], fe = ce[me];
          (fe !== J || me === "value") && o(L, me, J, fe, j, E);
        }
      }
      D & 1 && y.children !== b.children && d(L, b.children);
    } else !X && k == null && de(L, ee, ce, E, j);
    ((Se = ce.onVnodeUpdated) || R) && On(() => {
      Se && fr(Se, E, b, y), R && mi(b, y, E, "updated");
    }, S);
  }, ye = (y, b, E, S, j, H, X) => {
    for (let L = 0; L < b.length; L++) {
      const D = y[L], k = b[L], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === Ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Fo(D, k) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? u(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      g(
        D,
        k,
        R,
        null,
        S,
        j,
        H,
        X,
        !0
      );
    }
  }, de = (y, b, E, S, j) => {
    if (b !== E) {
      if (b !== Ft)
        for (const H in b)
          !Xo(H) && !(H in E) && o(
            y,
            H,
            b[H],
            null,
            j,
            S
          );
      for (const H in E) {
        if (Xo(H)) continue;
        const X = E[H], L = b[H];
        X !== L && H !== "value" && o(y, H, L, X, j, S);
      }
      "value" in E && o(y, "value", b.value, E.value, j);
    }
  }, ge = (y, b, E, S, j, H, X, L, D) => {
    const k = b.el = y ? y.el : a(""), R = b.anchor = y ? y.anchor : a("");
    let { patchFlag: ee, dynamicChildren: ce, slotScopeIds: Se } = b;
    Se && (L = L ? L.concat(Se) : Se), y == null ? (n(k, E, S), n(R, E, S), U(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      b.children || [],
      E,
      R,
      j,
      H,
      X,
      L,
      D
    )) : ee > 0 && ee & 64 && ce && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    y.dynamicChildren && y.dynamicChildren.length === ce.length ? (ye(
      y.dynamicChildren,
      ce,
      E,
      j,
      H,
      X,
      L
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (b.key != null || j && b === j.subTree) && Lh(
      y,
      b,
      !0
      /* shallow */
    )) : P(
      y,
      b,
      E,
      R,
      j,
      H,
      X,
      L,
      D
    );
  }, le = (y, b, E, S, j, H, X, L, D) => {
    b.slotScopeIds = L, y == null ? b.shapeFlag & 512 ? j.ctx.activate(
      b,
      E,
      S,
      X,
      D
    ) : _e(
      b,
      E,
      S,
      j,
      H,
      X,
      D
    ) : Y(y, b, D);
  }, _e = (y, b, E, S, j, H, X) => {
    const L = y.component = yb(
      y,
      S,
      j
    );
    if (vh(y) && (L.ctx.renderer = A), vb(L, !1, X), L.asyncDep) {
      if (j && j.registerDep(L, O, X), !y.el) {
        const D = L.subTree = Be(ri);
        _(null, D, b, E), y.placeholder = D.el;
      }
    } else
      O(
        L,
        y,
        b,
        E,
        j,
        H,
        X
      );
  }, Y = (y, b, E) => {
    const S = b.component = y.component;
    if (Qy(y, b, E))
      if (S.asyncDep && !S.asyncResolved) {
        B(S, b, E);
        return;
      } else
        S.next = b, S.update();
    else
      b.el = y.el, S.vnode = b;
  }, O = (y, b, E, S, j, H, X) => {
    const L = () => {
      if (y.isMounted) {
        let { next: ee, bu: ce, u: Se, parent: ue, vnode: he } = y;
        {
          const p = Rh(y);
          if (p) {
            ee && (ee.el = he.el, B(y, ee, X)), p.asyncDep.then(() => {
              On(() => {
                y.isUnmounted || k();
              }, j);
            });
            return;
          }
        }
        let me = ee, J;
        gi(y, !1), ee ? (ee.el = he.el, B(y, ee, X)) : ee = he, ce && ya(ce), (J = ee.props && ee.props.onVnodeBeforeUpdate) && fr(J, ue, ee, he), gi(y, !0);
        const fe = lf(y), K = y.subTree;
        y.subTree = fe, g(
          K,
          fe,
          // parent may have changed if it's in a teleport
          u(K.el),
          // anchor may have changed if it's in a fragment
          ie(K),
          y,
          j,
          H
        ), ee.el = fe.el, me === null && eb(y, fe.el), Se && On(Se, j), (J = ee.props && ee.props.onVnodeUpdated) && On(
          () => fr(J, ue, ee, he),
          j
        );
      } else {
        let ee;
        const { el: ce, props: Se } = b, { bm: ue, m: he, parent: me, root: J, type: fe } = y, K = es(b);
        gi(y, !1), ue && ya(ue), !K && (ee = Se && Se.onVnodeBeforeMount) && fr(ee, me, b), gi(y, !0);
        {
          J.ce && J.ce._hasShadowRoot() && J.ce._injectChildStyle(
            fe,
            y.parent ? y.parent.type : void 0
          );
          const p = y.subTree = lf(y);
          g(
            null,
            p,
            E,
            S,
            y,
            j,
            H
          ), b.el = p.el;
        }
        if (he && On(he, j), !K && (ee = Se && Se.onVnodeMounted)) {
          const p = b;
          On(
            () => fr(ee, me, p),
            j
          );
        }
        (b.shapeFlag & 256 || me && es(me.vnode) && me.vnode.shapeFlag & 256) && y.a && On(y.a, j), y.isMounted = !0, b = E = S = null;
      }
    };
    y.scope.on();
    const D = y.effect = new Yp(L);
    y.scope.off();
    const k = y.update = D.run.bind(D), R = y.job = D.runIfDirty.bind(D);
    R.i = y, R.id = y.uid, D.scheduler = () => Bu(R), gi(y, !0), k();
  }, B = (y, b, E) => {
    b.component = y;
    const S = y.vnode.props;
    y.vnode = b, y.next = null, nb(y, b.props, S, E), sb(y, b.children, E), jr(), Qd(y), Hr();
  }, P = (y, b, E, S, j, H, X, L, D = !1) => {
    const k = y && y.children, R = y ? y.shapeFlag : 0, ee = b.children, { patchFlag: ce, shapeFlag: Se } = b;
    if (ce > 0) {
      if (ce & 128) {
        F(
          k,
          ee,
          E,
          S,
          j,
          H,
          X,
          L,
          D
        );
        return;
      } else if (ce & 256) {
        M(
          k,
          ee,
          E,
          S,
          j,
          H,
          X,
          L,
          D
        );
        return;
      }
    }
    Se & 8 ? (R & 16 && Z(k, j, H), ee !== k && d(E, ee)) : R & 16 ? Se & 16 ? F(
      k,
      ee,
      E,
      S,
      j,
      H,
      X,
      L,
      D
    ) : Z(k, j, H, !0) : (R & 8 && d(E, ""), Se & 16 && U(
      ee,
      E,
      S,
      j,
      H,
      X,
      L,
      D
    ));
  }, M = (y, b, E, S, j, H, X, L, D) => {
    y = y || to, b = b || to;
    const k = y.length, R = b.length, ee = Math.min(k, R);
    let ce;
    for (ce = 0; ce < ee; ce++) {
      const Se = b[ce] = D ? Er(b[ce]) : gr(b[ce]);
      g(
        y[ce],
        Se,
        E,
        null,
        j,
        H,
        X,
        L,
        D
      );
    }
    k > R ? Z(
      y,
      j,
      H,
      !0,
      !1,
      ee
    ) : U(
      b,
      E,
      S,
      j,
      H,
      X,
      L,
      D,
      ee
    );
  }, F = (y, b, E, S, j, H, X, L, D) => {
    let k = 0;
    const R = b.length;
    let ee = y.length - 1, ce = R - 1;
    for (; k <= ee && k <= ce; ) {
      const Se = y[k], ue = b[k] = D ? Er(b[k]) : gr(b[k]);
      if (Fo(Se, ue))
        g(
          Se,
          ue,
          E,
          null,
          j,
          H,
          X,
          L,
          D
        );
      else
        break;
      k++;
    }
    for (; k <= ee && k <= ce; ) {
      const Se = y[ee], ue = b[ce] = D ? Er(b[ce]) : gr(b[ce]);
      if (Fo(Se, ue))
        g(
          Se,
          ue,
          E,
          null,
          j,
          H,
          X,
          L,
          D
        );
      else
        break;
      ee--, ce--;
    }
    if (k > ee) {
      if (k <= ce) {
        const Se = ce + 1, ue = Se < R ? b[Se].el : S;
        for (; k <= ce; )
          g(
            null,
            b[k] = D ? Er(b[k]) : gr(b[k]),
            E,
            ue,
            j,
            H,
            X,
            L,
            D
          ), k++;
      }
    } else if (k > ce)
      for (; k <= ee; )
        ne(y[k], j, H, !0), k++;
    else {
      const Se = k, ue = k, he = /* @__PURE__ */ new Map();
      for (k = ue; k <= ce; k++) {
        const I = b[k] = D ? Er(b[k]) : gr(b[k]);
        I.key != null && he.set(I.key, k);
      }
      let me, J = 0;
      const fe = ce - ue + 1;
      let K = !1, p = 0;
      const N = new Array(fe);
      for (k = 0; k < fe; k++) N[k] = 0;
      for (k = Se; k <= ee; k++) {
        const I = y[k];
        if (J >= fe) {
          ne(I, j, H, !0);
          continue;
        }
        let q;
        if (I.key != null)
          q = he.get(I.key);
        else
          for (me = ue; me <= ce; me++)
            if (N[me - ue] === 0 && Fo(I, b[me])) {
              q = me;
              break;
            }
        q === void 0 ? ne(I, j, H, !0) : (N[q - ue] = k + 1, q >= p ? p = q : K = !0, g(
          I,
          b[q],
          E,
          null,
          j,
          H,
          X,
          L,
          D
        ), J++);
      }
      const v = K ? ub(N) : to;
      for (me = v.length - 1, k = fe - 1; k >= 0; k--) {
        const I = ue + k, q = b[I], pe = b[I + 1], V = I + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          pe.el || Vh(pe)
        ) : S;
        N[k] === 0 ? g(
          null,
          q,
          E,
          V,
          j,
          H,
          X,
          L,
          D
        ) : K && (me < 0 || k !== v[me] ? C(q, E, V, 2) : me--);
      }
    }
  }, C = (y, b, E, S, j = null) => {
    const { el: H, type: X, transition: L, children: D, shapeFlag: k } = y;
    if (k & 6) {
      C(y.component.subTree, b, E, S);
      return;
    }
    if (k & 128) {
      y.suspense.move(b, E, S);
      return;
    }
    if (k & 64) {
      X.move(y, b, E, A);
      return;
    }
    if (X === Ze) {
      n(H, b, E);
      for (let ee = 0; ee < D.length; ee++)
        C(D[ee], b, E, S);
      n(y.anchor, b, E);
      return;
    }
    if (X === ic) {
      G(y, b, E);
      return;
    }
    if (S !== 2 && k & 1 && L)
      if (S === 0)
        L.beforeEnter(H), n(H, b, E), On(() => L.enter(H), j);
      else {
        const { leave: ee, delayLeave: ce, afterLeave: Se } = L, ue = () => {
          y.ctx.isUnmounted ? i(H) : n(H, b, E);
        }, he = () => {
          H._isLeaving && H[Py](
            !0
            /* cancelled */
          ), ee(H, () => {
            ue(), Se && Se();
          });
        };
        ce ? ce(H, ue, he) : he();
      }
    else
      n(H, b, E);
  }, ne = (y, b, E, S = !1, j = !1) => {
    const {
      type: H,
      props: X,
      ref: L,
      children: D,
      dynamicChildren: k,
      shapeFlag: R,
      patchFlag: ee,
      dirs: ce,
      cacheIndex: Se,
      memo: ue
    } = y;
    if (ee === -2 && (j = !1), L != null && (jr(), Qo(L, null, E, y, !0), Hr()), Se != null && (b.renderCache[Se] = void 0), R & 256) {
      b.ctx.deactivate(y);
      return;
    }
    const he = R & 1 && ce, me = !es(y);
    let J;
    if (me && (J = X && X.onVnodeBeforeUnmount) && fr(J, b, y), R & 6)
      w(y.component, E, S);
    else {
      if (R & 128) {
        y.suspense.unmount(E, S);
        return;
      }
      he && mi(y, null, b, "beforeUnmount"), R & 64 ? y.type.remove(
        y,
        b,
        E,
        A,
        S
      ) : k && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !k.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (H !== Ze || ee > 0 && ee & 64) ? Z(
        k,
        b,
        E,
        !1,
        !0
      ) : (H === Ze && ee & 384 || !j && R & 16) && Z(D, b, E), S && Q(y);
    }
    const fe = ue != null && Se == null;
    (me && (J = X && X.onVnodeUnmounted) || he || fe) && On(() => {
      J && fr(J, b, y), he && mi(y, null, b, "unmounted"), fe && (y.el = null);
    }, E);
  }, Q = (y) => {
    const { type: b, el: E, anchor: S, transition: j } = y;
    if (b === Ze) {
      z(E, S);
      return;
    }
    if (b === ic) {
      re(y);
      return;
    }
    const H = () => {
      i(E), j && !j.persisted && j.afterLeave && j.afterLeave();
    };
    if (y.shapeFlag & 1 && j && !j.persisted) {
      const { leave: X, delayLeave: L } = j, D = () => X(E, H);
      L ? L(y.el, H, D) : D();
    } else
      H();
  }, z = (y, b) => {
    let E;
    for (; y !== b; )
      E = f(y), i(y), y = E;
    i(b);
  }, w = (y, b, E) => {
    const { bum: S, scope: j, job: H, subTree: X, um: L, m: D, a: k } = y;
    df(D), df(k), S && ya(S), j.stop(), H && (H.flags |= 8, ne(X, y, b, E)), L && On(L, b), On(() => {
      y.isUnmounted = !0;
    }, b);
  }, Z = (y, b, E, S = !1, j = !1, H = 0) => {
    for (let X = H; X < y.length; X++)
      ne(y[X], b, E, S, j);
  }, ie = (y) => {
    if (y.shapeFlag & 6)
      return ie(y.component.subTree);
    if (y.shapeFlag & 128)
      return y.suspense.next();
    const b = f(y.anchor || y.el), E = b && b[ky];
    return E ? f(E) : b;
  };
  let be = !1;
  const we = (y, b, E) => {
    let S;
    y == null ? b._vnode && (ne(b._vnode, null, null, !0), S = b._vnode.component) : g(
      b._vnode || null,
      y,
      b,
      null,
      null,
      null,
      E
    ), b._vnode = y, be || (be = !0, Qd(S), fh(), be = !1);
  }, A = {
    p: g,
    um: ne,
    m: C,
    r: Q,
    mt: _e,
    mc: U,
    pc: P,
    pbc: ye,
    n: ie,
    o: e
  };
  return {
    render: we,
    hydrate: void 0,
    createApp: By(we)
  };
}
function rc({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function gi({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function cb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Lh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Er(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && Lh(s, a)), a.type === Ol && (a.patchFlag === -1 && (a = i[o] = Er(a)), a.el = s.el), a.type === ri && !a.el && (a.el = s.el);
    }
}
function ub(e) {
  const t = e.slice(), r = [0];
  let n, i, o, s, a;
  const l = e.length;
  for (n = 0; n < l; n++) {
    const c = e[n];
    if (c !== 0) {
      if (i = r[r.length - 1], e[i] < c) {
        t[n] = i, r.push(n);
        continue;
      }
      for (o = 0, s = r.length - 1; o < s; )
        a = o + s >> 1, e[r[a]] < c ? o = a + 1 : s = a;
      c < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), r[o] = n);
    }
  }
  for (o = r.length, s = r[o - 1]; o-- > 0; )
    r[o] = s, s = t[s];
  return r;
}
function Rh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Rh(t);
}
function df(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Vh(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Vh(t.subTree) : null;
}
const $h = (e) => e.__isSuspense;
function db(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : vy(e);
}
const Ze = /* @__PURE__ */ Symbol.for("v-fgt"), Ol = /* @__PURE__ */ Symbol.for("v-txt"), ri = /* @__PURE__ */ Symbol.for("v-cmt"), ic = /* @__PURE__ */ Symbol.for("v-stc"), ns = [];
let jn = null;
function Te(e = !1) {
  ns.push(jn = e ? null : []);
}
function fb() {
  ns.pop(), jn = ns[ns.length - 1] || null;
}
let us = 1;
function ff(e, t = !1) {
  us += e, e < 0 && jn && t && (jn.hasOnce = !0);
}
function zh(e) {
  return e.dynamicChildren = us > 0 ? jn || to : null, fb(), us > 0 && jn && jn.push(e), e;
}
function De(e, t, r, n, i, o) {
  return zh(
    ke(
      e,
      t,
      r,
      n,
      i,
      o,
      !0
    )
  );
}
function Gn(e, t, r, n, i) {
  return zh(
    Be(
      e,
      t,
      r,
      n,
      i,
      !0
    )
  );
}
function jh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Fo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Hh = ({ key: e }) => e ?? null, va = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Zt(e) || /* @__PURE__ */ mn(e) || at(e) ? { i: zn, r: e, k: t, f: !!r } : e : null);
function ke(e, t = null, r = null, n = 0, i = null, o = e === Ze ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Hh(t),
    ref: t && va(t),
    scopeId: hh,
    slotScopeIds: null,
    children: r,
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
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: zn
  };
  return a ? (Ju(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Zt(r) ? 8 : 16), us > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  jn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && jn.push(l), l;
}
const Be = pb;
function pb(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === wh) && (e = ri), jh(e)) {
    const a = uo(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Ju(a, r), us > 0 && !o && jn && (a.shapeFlag & 6 ? jn[jn.indexOf(e)] = a : jn.push(a)), a.patchFlag = -2, a;
  }
  if (kb(e) && (e = e.__vccOpts), t) {
    t = hb(t);
    let { class: a, style: l } = t;
    a && !Zt(a) && (t.class = gt(a)), Et(l) && (/* @__PURE__ */ Uu(l) && !it(l) && (l = gn({}, l)), t.style = It(l));
  }
  const s = Zt(e) ? 1 : $h(e) ? 128 : My(e) ? 64 : Et(e) ? 4 : at(e) ? 2 : 0;
  return ke(
    e,
    t,
    r,
    n,
    i,
    s,
    o,
    !0
  );
}
function hb(e) {
  return e ? /* @__PURE__ */ Uu(e) || Ih(e) ? gn({}, e) : e : null;
}
function uo(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Or(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Hh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(va(t)) : [o, va(t)] : va(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: a,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Ze ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && uo(e.ssContent),
    ssFallback: e.ssFallback && uo(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Yu(
    d,
    l.clone(d)
  ), d;
}
function jo(e = " ", t = 0) {
  return Be(Ol, null, e, t);
}
function ht(e = "", t = !1) {
  return t ? (Te(), Gn(ri, null, e)) : Be(ri, null, e);
}
function gr(e) {
  return e == null || typeof e == "boolean" ? Be(ri) : it(e) ? Be(
    Ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : jh(e) ? Er(e) : Be(Ol, null, String(e));
}
function Er(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : uo(e);
}
function Ju(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Ju(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !Ih(t) ? t._ctx = zn : i === 3 && zn && (zn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else at(t) ? (t = { default: t, _ctx: zn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [jo(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Or(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = gt([t.class, n.class]));
      else if (i === "style")
        t.style = It([t.style, n.style]);
      else if (_l(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(it(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !wl(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function fr(e, t, r, n = null) {
  Mr(e, t, 7, [
    r,
    n
  ]);
}
const mb = Mh();
let gb = 0;
function yb(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || mb, o = {
    uid: gb++,
    vnode: e,
    type: n,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new G0(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Oh(n, i),
    emitsOptions: Ph(n, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Ft,
    // inheritAttrs
    inheritAttrs: n.inheritAttrs,
    // state
    ctx: Ft,
    data: Ft,
    props: Ft,
    attrs: Ft,
    slots: Ft,
    refs: Ft,
    setupState: Ft,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = qy.bind(null, o), e.ce && e.ce(o), o;
}
let fn = null;
const bb = () => fn || zn;
let Ga, qc;
{
  const e = Ml(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  Ga = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => fn = r
  ), qc = t(
    "__VUE_SSR_SETTERS__",
    (r) => ds = r
  );
}
const Ns = (e) => {
  const t = fn;
  return Ga(e), e.scope.on(), () => {
    e.scope.off(), Ga(t);
  };
}, pf = () => {
  fn && fn.scope.off(), Ga(null);
};
function Gh(e) {
  return e.vnode.shapeFlag & 4;
}
let ds = !1;
function vb(e, t = !1, r = !1) {
  t && qc(t);
  const { props: n, children: i } = e.vnode, o = Gh(e);
  tb(e, n, o, t), ob(e, i, r || t);
  const s = o ? Sb(e, t) : void 0;
  return t && qc(!1), s;
}
function Sb(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, zy);
  const { setup: n } = r;
  if (n) {
    jr();
    const i = e.setupContext = n.length > 1 ? wb(e) : null, o = Ns(e), s = Ms(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = jp(s);
    if (Hr(), o(), (a || e.sp) && !es(e) && bh(e), a) {
      if (s.then(pf, pf), t)
        return s.then((l) => {
          hf(e, l);
        }).catch((l) => {
          Nl(l, e, 0);
        });
      e.asyncDep = s;
    } else
      hf(e, s);
  } else
    Kh(e);
}
function hf(e, t, r) {
  at(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Et(t) && (e.setupState = ch(t)), Kh(e);
}
function Kh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || _r);
  {
    const i = Ns(e);
    jr();
    try {
      jy(e);
    } finally {
      Hr(), i();
    }
  }
}
const _b = {
  get(e, t) {
    return dn(e, "get", ""), e[t];
  }
};
function wb(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, _b),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Fl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(ch(uy(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in ts)
        return ts[r](e);
    },
    has(t, r) {
      return r in t || r in ts;
    }
  })) : e.proxy;
}
function xb(e, t = !0) {
  return at(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function kb(e) {
  return at(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ hy(e, t, ds), Mb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xc;
const mf = typeof window < "u" && window.trustedTypes;
if (mf)
  try {
    Xc = /* @__PURE__ */ mf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Wh = Xc ? (e) => Xc.createHTML(e) : (e) => e, Pb = "http://www.w3.org/2000/svg", Nb = "http://www.w3.org/1998/Math/MathML", Ir = typeof document < "u" ? document : null, gf = Ir && /* @__PURE__ */ Ir.createElement("template"), Ab = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Ir.createElementNS(Pb, e) : t === "mathml" ? Ir.createElementNS(Nb, e) : r ? Ir.createElement(e, { is: r }) : Ir.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Ir.createTextNode(e),
  createComment: (e) => Ir.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ir.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, n, i, o) {
    const s = r ? r.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), r), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      gf.innerHTML = Wh(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = gf.content;
      if (n === "svg" || n === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Cb = /* @__PURE__ */ Symbol("_vtc");
function Ib(e, t, r) {
  const n = e[Cb];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Ka = /* @__PURE__ */ Symbol("_vod"), Uh = /* @__PURE__ */ Symbol("_vsh"), Ei = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[Ka] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : To(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), To(e, !0), n.enter(e)) : n.leave(e, () => {
      To(e, !1);
    }) : To(e, t));
  },
  beforeUnmount(e, { value: t }) {
    To(e, t);
  }
};
function To(e, t) {
  e.style.display = t ? e[Ka] : "none", e[Uh] = !t;
}
const Eb = /* @__PURE__ */ Symbol(""), Ob = /(?:^|;)\s*display\s*:/;
function Fb(e, t, r) {
  const n = e.style, i = Zt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Zt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && Sa(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && Sa(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), Sa(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[Eb];
      s && (r += ";" + s), n.cssText = r, o = Ob.test(r);
    }
  } else t && e.removeAttribute("style");
  Ka in e && (e[Ka] = o ? n.display : "", e[Uh] && (n.display = "none"));
}
const yf = /\s*!important$/;
function Sa(e, t, r) {
  if (it(r))
    r.forEach((n) => Sa(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Tb(e, t);
    yf.test(r) ? e.setProperty(
      Di(n),
      r.replace(yf, ""),
      "important"
    ) : e[n] = r;
  }
}
const bf = ["Webkit", "Moz", "ms"], oc = {};
function Tb(e, t) {
  const r = oc[t];
  if (r)
    return r;
  let n = xn(t);
  if (n !== "filter" && n in e)
    return oc[t] = n;
  n = kl(n);
  for (let i = 0; i < bf.length; i++) {
    const o = bf[i] + n;
    if (o in e)
      return oc[t] = o;
  }
  return t;
}
const vf = "http://www.w3.org/1999/xlink";
function Sf(e, t, r, n, i, o = j0(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(vf, t.slice(6, t.length)) : e.setAttributeNS(vf, t, r) : r == null || o && !Wp(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : kr(r) ? String(r) : r
  );
}
function _f(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? Wh(r) : r);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const a = o === "OPTION" ? e.getAttribute("value") || "" : e.value, l = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (a !== l || !("_value" in e)) && (e.value = l), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const a = typeof e[t];
    a === "boolean" ? r = Wp(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Bi(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Db(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const wf = /* @__PURE__ */ Symbol("_vei");
function Lb(e, t, r, n, i = null) {
  const o = e[wf] || (e[wf] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = Rb(t);
    if (n) {
      const c = o[t] = zb(
        n,
        i
      );
      Bi(e, a, c, l);
    } else s && (Db(e, a, s, l), o[t] = void 0);
  }
}
const xf = /(?:Once|Passive|Capture)$/;
function Rb(e) {
  let t;
  if (xf.test(e)) {
    t = {};
    let n;
    for (; n = e.match(xf); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Di(e.slice(2)), t];
}
let sc = 0;
const Vb = /* @__PURE__ */ Promise.resolve(), $b = () => sc || (Vb.then(() => sc = 0), sc = Date.now());
function zb(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    Mr(
      jb(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = $b(), r;
}
function jb(e, t) {
  if (it(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (n) => (i) => !i._stopped && n && n(i)
    );
  } else
    return t;
}
const kf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Hb = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? Ib(e, n, s) : t === "style" ? Fb(e, r, n) : _l(t) ? wl(t) || Lb(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Gb(e, t, n, s)) ? (_f(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Sf(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Kb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Zt(n))) ? _f(e, xn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), Sf(e, t, n, s));
};
function Gb(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && kf(t) && at(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return kf(t) && Zt(r) ? !1 : t in e;
}
function Kb(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = xn(t);
  return Array.isArray(r) ? r.some((i) => xn(i) === n) : Object.keys(r).some((i) => xn(i) === n);
}
const Mf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => ya(t, r) : t;
};
function Wb(e) {
  e.target.composing = !0;
}
function Pf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ac = /* @__PURE__ */ Symbol("_assign");
function Nf(e, t, r) {
  return t && (e = e.trim()), r && (e = Vu(e)), e;
}
const Af = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[ac] = Mf(i);
    const o = n || i.props && i.props.type === "number";
    Bi(e, t ? "change" : "input", (s) => {
      s.target.composing || e[ac](Nf(e.value, r, o));
    }), (r || o) && Bi(e, "change", () => {
      e.value = Nf(e.value, r, o);
    }), t || (Bi(e, "compositionstart", Wb), Bi(e, "compositionend", Pf), Bi(e, "change", Pf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[ac] = Mf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Vu(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, Ub = ["ctrl", "shift", "alt", "meta"], Bb = {
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
  exact: (e, t) => Ub.some((r) => e[`${r}Key`] && !t.includes(r))
}, At = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = Bb[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Yb = /* @__PURE__ */ gn({ patchProp: Hb }, Ab);
let Cf;
function qb() {
  return Cf || (Cf = ab(Yb));
}
const Zu = ((...e) => {
  const t = qb().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = Jb(n);
    if (!i) return;
    const o = t._component;
    !at(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, Xb(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Xb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Jb(e) {
  return Zt(e) ? document.querySelector(e) : e;
}
const Zb = "PanoramaSuite.Debug.Diagnostics", Qb = "PanoramaSuite.Debug.ExportDiagnostics", lc = "pano_suite.diagnostics.v1", If = "pano_suite.diagnostics.previous.v1", ev = 300, tv = 2e5, nv = 100, rv = 20, iv = 1e3, ov = 2, na = 1024 * 1024;
function Xr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function sv() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function av() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: sv,
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
      var n;
      const t = globalThis.PerformanceObserver;
      if (!((n = t == null ? void 0 : t.supportedEntryTypes) != null && n.includes("longtask"))) return null;
      const r = new t((i) => e(i.getEntries()));
      return r.observe({ type: "longtask" }), () => r.disconnect();
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
function lv(e = {}) {
  const t = { ...av(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, m = { created: 0, collected: 0 }, x = t.FinalizationRegistry ? new t.FinalizationRegistry((A) => {
    d.delete(A), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((A) => {
    u.delete(A), m.collected += 1;
  }) : null, h = /* @__PURE__ */ new Set(), _ = { created: 0, lost: 0, restored: 0, disposed: 0 }, te = [], G = /* @__PURE__ */ new Map();
  let re = { count: 0, maxMs: 0 }, T = /* @__PURE__ */ new Map(), W = { count: 0, maxMs: 0 };
  const $ = [];
  function U(A, se, y = void 0) {
    te.push(y === void 0 ? { t: t.clock(), type: A, label: se } : { t: t.clock(), type: A, label: se, detail: y }), te.length > nv && te.shift();
  }
  function ve(A, se, y, b, E) {
    if (!r || !b || !t.WeakRef) return b;
    const S = { ref: new t.WeakRef(b), label: E };
    return A.add(S), se == null || se.register(b, S), y.created += 1, b;
  }
  function ye(A, se = "") {
    return ve(d, x, f, A, se);
  }
  function de(A, se = "") {
    return ve(u, g, m, A, se);
  }
  function ge({ label: A = "", width: se, height: y, offscreen: b = !1 } = {}) {
    const E = globalThis.OffscreenCanvas;
    let S;
    return b && typeof E < "u" ? S = new E(se, y) : (S = t.document().createElement("canvas"), se !== void 0 && y !== void 0 && (S.width = se, S.height = y)), ye(S, A);
  }
  function le(A) {
    A.width = 0, A.height = 0, r && (f.released += 1);
  }
  function _e(A = t.document(), se = "") {
    var y;
    return de(((y = A == null ? void 0 : A.createElement) == null ? void 0 : y.call(A, "video")) || null, se);
  }
  function Y(A, se) {
    if (!r || !A) return () => {
    };
    const y = { label: se, lost: !1, disposed: !1 };
    h.add(y), _.created += 1, U("webgl-created", se);
    const b = () => {
      y.disposed || (y.lost = !0, _.lost += 1, U("webglcontextlost", se));
    }, E = () => {
      y.disposed || (y.lost = !1, _.restored += 1, U("webglcontextrestored", se));
    };
    return A.addEventListener("webglcontextlost", b), A.addEventListener("webglcontextrestored", E), () => {
      y.disposed || (y.disposed = !0, h.delete(y), _.disposed += 1, U("webgl-disposed", se));
    };
  }
  function O(A, se) {
    return G.set(A, se), () => {
      G.get(A) === se && G.delete(A);
    };
  }
  function B() {
    return r ? t.now() : -1;
  }
  function P(A) {
    if (A < 0 || !r) return;
    const se = t.now() - A;
    re.count += 1, re.maxMs = Math.max(re.maxMs, se);
  }
  function M(A, se) {
    if (se < 0 || !r) return;
    const y = t.now() - se, b = T.get(A) ?? { count: 0, maxMs: 0 };
    b.count += 1, b.maxMs = Math.max(b.maxMs, y), T.set(A, b);
  }
  function F() {
    let A = 0, se = 0, y = 0, b = [0, 0];
    const E = {};
    for (const S of d) {
      const j = S.ref.deref();
      if (!j) continue;
      A += 1;
      const H = j.width * j.height;
      H > 0 && (se += 1), y += H, H > b[0] * b[1] && (b = [j.width, j.height]);
      const X = E[S.label] ?? (E[S.label] = [0, 0]);
      X[0] += 1, X[1] += H;
    }
    return { ...f, alive: A, sized: se, pixels: y, mb: Xr(y * 4 / na, 1), largest: b, byLabel: E };
  }
  function C() {
    const A = [];
    let se = 0, y = 0;
    for (const b of u) {
      const E = b.ref.deref();
      if (!E) continue;
      se += 1;
      const S = !E.paused && !E.ended;
      S && (y += 1), A.length < rv && A.push({
        label: b.label,
        playing: S,
        src: !!(E.currentSrc || E.src),
        size: [E.videoWidth || 0, E.videoHeight || 0],
        ready: E.readyState ?? 0,
        connected: !!E.isConnected
      });
    }
    return { ...m, alive: se, playing: y, list: A };
  }
  function ne() {
    const A = t.now(), se = t.memory(), y = {
      t: t.clock(),
      heap: se ? { used: Xr(se.usedJSHeapSize / na, 1), total: Xr(se.totalJSHeapSize / na, 1), limit: Xr(se.jsHeapSizeLimit / na, 1) } : null,
      canvas: F(),
      webgl: { ..._, alive: [...h].filter((b) => !b.lost).length },
      video: C(),
      frame: { count: re.count, maxMs: Xr(re.maxMs), longTasks: W.count, longTaskMaxMs: Xr(W.maxMs) },
      renders: Object.fromEntries([...T].map(([b, E]) => [b, { count: E.count, maxMs: Xr(E.maxMs) }])),
      sources: Object.fromEntries([...G].map(([b, E]) => [b, E()])),
      costMs: Xr(c, 3)
    };
    return re = { count: 0, maxMs: 0 }, T = /* @__PURE__ */ new Map(), W = { count: 0, maxMs: 0 }, $.push({ record: y, text: JSON.stringify(y) }), $.length > ev && $.shift(), l += 1, l % ov === 0 && z(), c = t.now() - A, y;
  }
  function Q(A = tv) {
    const se = JSON.stringify({ ...o, events: te }).slice(0, -1);
    let y = A - se.length - 14, b = $.length;
    for (; b > 0 && y - $[b - 1].text.length - 1 >= 0; )
      b -= 1, y -= $[b].text.length + 1;
    return `${se},"records":[${$.slice(b).map((E) => E.text).join(",")}]}`;
  }
  function z() {
    if (!o) return;
    const A = t.storage();
    if (A) {
      o.savedAt = t.clock();
      try {
        A.setItem(lc, Q());
      } catch {
      }
    }
  }
  function w() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", z();
  }
  function Z() {
    var E;
    if (n) return i;
    n = !0;
    const A = t.storage();
    if (!A) return null;
    let se = null;
    try {
      if (se = A.getItem(lc), se === null) {
        const S = A.getItem(If);
        return i = S === null ? null : JSON.parse(S), i;
      }
      A.setItem(If, se), A.removeItem(lc), i = JSON.parse(se);
    } catch {
      return i;
    }
    const y = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], b = y.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${y.length} records kept. Its last records:`,
      JSON.stringify(b)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((E = y.at(-1)) == null ? void 0 : E.t) || 0).toISOString()}; ${y.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(b)
    ), i;
  }
  function ie(A) {
    const se = A === !0;
    if (Z(), se !== r) {
      if (r = se, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, $.length = 0, a = t.observeLongTasks((y) => {
          for (const b of y)
            W.count += 1, W.maxMs = Math.max(W.maxMs, b.duration);
        }), t.addUnload(w), s = t.setInterval(ne, iv), z();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(w), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", z();
    }
  }
  function be() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...te], records: $.map((A) => A.record) } : null,
      previous: i
    };
  }
  function we() {
    const A = t.document(), se = new Blob([JSON.stringify(be(), null, 1)], { type: "application/json" }), y = URL.createObjectURL(se), b = A.createElement("a");
    b.href = y, b.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, b.click(), setTimeout(() => URL.revokeObjectURL(y), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: ge,
    releaseCanvas: le,
    trackCanvas: ye,
    createVideo: _e,
    trackVideo: de,
    watchContext: Y,
    addSource: O,
    frameStart: B,
    frameEnd: P,
    renderEnd: M,
    sample: ne,
    serialize: Q,
    recoverPrevious: Z,
    setEnabled: ie,
    exportData: be,
    download: we
  };
}
const Ln = lv(), rn = Ln.createCanvas, fs = Ln.releaseCanvas, cc = Ln.trackCanvas, As = Ln.createVideo, Ef = Ln.trackVideo, cv = Ln.addSource, uv = Ln.frameStart, dv = Ln.frameEnd;
function Bh(e, t) {
  const r = Ln.watchContext(e.canvas, t), n = Ln.addSource(`three.${t}`, () => e.stats()), i = (o) => (s) => {
    const a = Ln.frameStart(), l = o(s);
    return Ln.renderEnd(t, a), l;
  };
  return {
    ...e,
    render: i(e.render),
    renderUnwrap: i(e.renderUnwrap),
    // A view let go because its context was lost ({ lost: true }) stays counted as that context's until it
    // is disposed again, so the context's restore is counted too.
    dispose(o) {
      e.dispose(o), !(o != null && o.lost) && (n(), r());
    }
  };
}
const fv = {
  id: Zb,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Ln.setEnabled(e === !0)
}, Of = {
  id: Qb,
  label: "Export Panorama Suite diagnostics",
  function: () => Ln.download()
};
function Yi(e, t) {
  const r = rn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function pv() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Ff(e, t = 8) {
  var d;
  const r = (d = e == null ? void 0 : e.getContext) == null ? void 0 : d.call(e, "2d"), n = Number((e == null ? void 0 : e.width) || 0), i = Number((e == null ? void 0 : e.height) || 0);
  if (!r || n < 1 || i < 1) return null;
  const o = r.getImageData(0, 0, n, i).data;
  let s = n, a = i, l = -1, c = -1;
  for (let u = 0; u < i; u += 1)
    for (let f = 0; f < n; f += 1)
      o[(u * n + f) * 4 + 3] <= t || (f < s && (s = f), u < a && (a = u), f > l && (l = f), u > c && (c = u));
  return l < s || c < a ? null : {
    minX: s,
    minY: a,
    maxX: l,
    maxY: c,
    width: l - s + 1,
    height: c - a + 1,
    aspect: Number(((l - s + 1) / Math.max(1, c - a + 1)).toFixed(4))
  };
}
function Qu(e, t) {
  return rn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Qr(e, t, r) {
  if (!e) return Yi(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Yt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function cn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let uc = null, dc = null, Tf = null, Df = null, Bt = null, Do = null;
function hv() {
  if (dc) return dc;
  const e = 6, t = 17, r = rn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), dc = r, r;
}
function fc(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  uc = Qr(uc, r, n);
  const i = uc;
  Yt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", Df !== i.ctx && (Tf = i.ctx.createPattern(hv(), "repeat"), Df = i.ctx), i.ctx.fillStyle = Tf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function mv(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function gv(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function yv(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function bv(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const zt = /* @__PURE__ */ new Map(), ed = 128;
function vv(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (zt.has(l)) {
    const te = zt.get(l);
    return zt.delete(l), zt.set(l, te), te;
  }
  zt.size >= ed && zt.delete(zt.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = Qu(c, c), f = u.getContext("2d"), m = a * s, x = s + 1, g = `rgba(${r},${n},${i},${o})`, h = `rgba(${r},${n},${i},0)`, _ = f.createRadialGradient(d, d, m, d, d, x);
  return _.addColorStop(0, g), _.addColorStop(1, h), f.fillStyle = _, f.fillRect(0, 0, c, c), zt.set(l, u), u;
}
function Sv(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), m = Math.max(0, i), x = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, s ?? 0)), h = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${m.toFixed(2)}:${x.toFixed(2)}:${g.toFixed(2)}`;
  if (zt.has(h)) {
    const U = zt.get(h);
    return zt.delete(h), zt.set(h, U), U;
  }
  zt.size >= ed && zt.delete(zt.keys().next().value);
  const _ = Qu(u, f), te = _.getContext("2d"), G = te.createImageData(u, f), re = G.data, T = Math.max(0, e - t), W = Math.max(0, Math.min(1, r)), $ = 1 + m;
  for (let U = 0; U < f; U++)
    for (let ve = 0; ve < u; ve++) {
      const ye = ve + 0.5 - e, de = U + 0.5 - t, ge = Math.max(Math.abs(ye) - T, 0), _e = Math.hypot(ge, de) / t;
      if (_e >= 1) continue;
      const Y = _e <= W ? 1 : Math.max(0, (1 - _e) / Math.max(1e-4, 1 - W)), O = 1 - _e, B = 1 + m * (1 - O) * (1 - O), P = 1 - x * O * O, M = B * P / $;
      let F = 1;
      if (g > 0) {
        const Q = Math.floor((de + t) / 1.5), z = Math.floor((ye + e) / 8), w = Ai(oo(Q * 41 + 500, z * 19 + 300));
        F = 1 - g * 0.42 * w;
      }
      const C = Math.round(255 * Math.min(1, d * Y * M * F));
      if (C <= 0) continue;
      const ne = (U * u + ve) * 4;
      re[ne] = a, re[ne + 1] = l, re[ne + 2] = c, re[ne + 3] = C;
    }
  return te.putImageData(G, 0, 0), zt.set(h, _), _;
}
function oo(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Ai(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function _v(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = Ai(oo(e * 17 + 3, t * 13 + 7)), m = u + o * 0.22 * (f - 0.5);
  if (m >= 1) return 0;
  const x = m <= i ? 1 : Math.max(0, (1 - m) / Math.max(1e-4, 1 - i)), g = wv(e, t, a, l, r, n), h = o * 0.55;
  if (g < h) return 0;
  const te = 0.45 + 0.55 * ((g - h) / Math.max(1e-4, 1 - h));
  return Math.round(255 * Math.min(1, s * x * te));
}
function wv(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = Ai(oo(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = Ai(oo(c * 23 + 800, d * 29 + 500)), f = Ai(oo(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function xv(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (zt.has(f)) {
    const te = zt.get(f);
    return zt.delete(f), zt.set(f, te), te;
  }
  zt.size >= ed && zt.delete(zt.keys().next().value);
  const m = Qu(c, d), x = m.getContext("2d"), g = x.createImageData(c, d), h = g.data, _ = Math.max(0, Math.min(1, r));
  for (let te = 0; te < d; te++)
    for (let G = 0; G < c; G++) {
      const re = _v(G, te, e, t, _, u, l);
      if (re <= 0) continue;
      const T = (te * c + G) * 4;
      h[T] = o, h[T + 1] = s, h[T + 2] = a, h[T + 3] = re;
    }
  return x.putImageData(g, 0, 0), zt.set(f, m), m;
}
function Yh(e, t, r) {
  var g, h;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = yv(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = kv(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = bv(t, i), d = String(((h = t == null ? void 0 : t.targetSpace) == null ? void 0 : h.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, m = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let x;
  if (n === "chisel") {
    const _ = i * a, te = i, G = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), re = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), T = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    x = Sv(_, te, o, s, G, re, T);
  } else if (n === "crayon") {
    const _ = i * a, te = i, G = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    x = xv(_, te, o, s, G);
  } else
    x = vv(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: x, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: m, latitudeCorrection: u };
}
function kv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask")
    return { r: 255, g: 255, b: 255, a: 1 };
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number((e == null ? void 0 : e.flow) ?? 1))), o = Math.max(0, Math.min(1, Number(n.a ?? 1))) * i;
  return {
    r: Math.round(Math.max(0, Math.min(1, Number(n.r || 0))) * 255),
    g: Math.round(Math.max(0, Math.min(1, Number(n.g || 0))) * 255),
    b: Math.round(Math.max(0, Math.min(1, Number(n.b || 0))) * 255),
    a: o
  };
}
function Mv(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Lf(e, t, r, n, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  a(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, r), t + l > s && a(t - s, r);
}
function td(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = oo(t, r);
    for (let m = 0; m < d; m++) {
      const x = Ai(f + m * 2) * Math.PI * 2, g = Math.sqrt(Ai(f + m * 2 + 1)) * u, h = t + Math.cos(x) * g, _ = r + Math.sin(x) * g, te = Math.max(0.5, e.radiusPx * i * 0.48), G = (0.5 - _ / Math.max(1, e.desc.height)) * Math.PI, re = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(G)) : 1, T = te * e.aspect * re;
      Lf(e, h, _, te, T);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Lf(e, t, r, o, l);
}
function Rf(e, t, r) {
  const n = gv(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = Yh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let m = Number(n[f].u || 0) * i;
    const x = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(m - a[f - 1].x) > i * 0.5 && (m += m < a[f - 1].x ? i : -i), a.push({ x: m, y: x });
  }
  if (td(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const m = a[f], x = { x: (c.x + m.x) * 0.5, y: (c.y + m.y) * 0.5 };
    f === 1 ? u = ps(s, d.x, d.y, x.x, x.y, u) : u = Wa(s, l, d, x, m, u), l = c, c = m, d = x;
  }
  a.length === 2 ? ps(s, d.x, d.y, c.x, c.y, u) : Wa(s, l, d, c, c, u), e.restore();
}
function _a(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = Mv(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const m = mv(n[f]);
    let x = Number(m.x || 0) * i;
    f > 0 && Math.abs(x - a[f - 1].x) > i * 0.5 && (x += x < a[f - 1].x ? i : -i), a.push({ x, y: Number(m.y || 0) * o }), x < l && (l = x), x > c && (c = x);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let m = 1; m < a.length; m++) e.lineTo(a[m].x + f, a[m].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function ra(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    _a(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Rf(e, t, r) : (Do = Qr(Do, r.width, r.height), Yt(Do), Rf(Do.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Do.canvas, 0, 0), e.restore());
}
function yi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ps(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    td(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Wa(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, m = f + c, x = f - u, g = 16;
  let h = o, _ = r.x, te = r.y;
  for (let G = 1; G <= g; G++) {
    const re = u + x * G / g, T = ((u - re) * t.x + (re - d) * r.x) / (u - d), W = ((u - re) * t.y + (re - d) * r.y) / (u - d), $ = ((f - re) * r.x + (re - u) * n.x) / (f - u), U = ((f - re) * r.y + (re - u) * n.y) / (f - u), ve = ((m - re) * n.x + (re - f) * i.x) / (m - f), ye = ((m - re) * n.y + (re - f) * i.y) / (m - f), de = ((f - re) * T + (re - d) * $) / (f - d), ge = ((f - re) * W + (re - d) * U) / (f - d), le = ((m - re) * $ + (re - u) * ve) / (m - u), _e = ((m - re) * U + (re - u) * ye) / (m - u), Y = ((f - re) * de + (re - u) * le) / (f - u), O = ((f - re) * ge + (re - u) * _e) / (f - u);
    h = ps(e, _, te, Y, O, h), _ = Y, te = O;
  }
  return h;
}
function Pv(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const m = Yh(i, n, o), x = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), g = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), h = String((n == null ? void 0 : n.toolKind) || "") === "eraser", _ = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", td(m, c, a, 1), e.activeStroke = {
      pprev: { x: c, y: a },
      prev: { x: c, y: a },
      lastMidX: c,
      lastMidY: a,
      stampTex: m.stampTex,
      radiusPx: m.radiusPx,
      spacingPx: m.spacingPx,
      aspect: m.aspect,
      angle: m.angle,
      stampKind: m.stampKind,
      scatter: m.scatter,
      latitudeCorrection: m.latitudeCorrection,
      strokeOpacity: x,
      velocityWidthFactor: g,
      distSinceStamp: 0,
      isEraser: h,
      layerKind: _,
      pointCount: 1
    }, cn(e);
    return;
  }
  const d = (l.prev.x + c) * 0.5, u = (l.prev.y + a) * 0.5;
  i.globalCompositeOperation = "source-over";
  const f = {
    ctx: i,
    stampTex: l.stampTex,
    radiusPx: l.radiusPx,
    spacingPx: l.spacingPx,
    desc: o,
    aspect: l.aspect,
    angle: l.angle,
    stampKind: l.stampKind,
    scatter: l.scatter,
    latitudeCorrection: l.latitudeCorrection
  };
  l.pointCount === 1 ? l.distSinceStamp = ps(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = Wa(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, cn(e);
}
function Tl(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Yi(t, r), s = {
    descriptor: n,
    committedMask: Yi(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    // Whether a mask stroke was drawn since the last rebuild; until then the committed mask is empty.
    painted: !1,
    lassoPreviewActive: !1
  }, a = {
    actionGroupId: "__eraser__",
    descriptor: n,
    committedPaint: Yi(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Yi(t, r);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let m = null;
  function x(le) {
    return {
      actionGroupId: le,
      descriptor: n,
      committedPaint: Yi(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(le) {
    let _e = i.get(le);
    return _e || (_e = x(le), i.set(le, _e)), _e;
  }
  function h(le) {
    return d === "mask" ? s : c ? g(c) : a;
  }
  function _(le) {
    var M;
    const _e = !u || u.length !== le.length || le.some((F, C) => F !== u[C]), Y = d === "paint" && ((M = c ? i.get(c) : a) == null ? void 0 : M.activeStroke) || null;
    let O = s.displayDirty || a.displayDirty || _e;
    for (const F of le) {
      const C = i.get(F);
      if (C != null && C.displayDirty) {
        O = !0;
        break;
      }
    }
    if (Y && (O = !0), !O) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const F of le) {
      const C = i.get(F);
      C && (C.displayDirty = !1);
    }
    u = [...le];
    const B = l.ctx;
    Yt(l);
    const P = !!(Y != null && Y.isEraser);
    for (const F of le) {
      const C = i.get(F);
      if (!C) continue;
      const Q = c === C.actionGroupId && d === "paint" ? C.activeStroke : null;
      if (P)
        Bt = Qr(Bt, t, r), Yt(Bt), Bt.ctx.drawImage(C.committedPaint.canvas, 0, 0), yi(Bt.ctx, o.canvas), B.drawImage(Bt.canvas, 0, 0);
      else if (B.drawImage(C.committedPaint.canvas, 0, 0), Q) {
        const z = C.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, Q.strokeOpacity ?? 1));
        B.save(), B.globalAlpha = z, B.drawImage(o.canvas, 0, 0), B.restore();
      }
    }
  }
  function te(le) {
    var Y, O, B, P, M;
    for (const F of i.values())
      Yt(F.committedPaint), Yt(F.currentStroke), F.activeStroke = null, cn(F);
    Yt(s.committedMask), Yt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), cn(s), cn(a), u = null;
    const _e = [
      ...Array.isArray((O = (Y = le == null ? void 0 : le.painting) == null ? void 0 : Y.paint) == null ? void 0 : O.strokes) ? le.painting.paint.strokes : [],
      ...Array.isArray((P = (B = le == null ? void 0 : le.painting) == null ? void 0 : B.mask) == null ? void 0 : P.strokes) ? le.painting.mask.strokes : []
    ];
    for (const F of _e) {
      if (((M = F == null ? void 0 : F.targetSpace) == null ? void 0 : M.kind) !== "ERP_GLOBAL") continue;
      const C = String((F == null ? void 0 : F.layerKind) || "paint"), Q = String((F == null ? void 0 : F.toolKind) || "pen") === "eraser";
      if (C === "mask") {
        const z = s.descriptor;
        Q ? (Bt = Qr(Bt, z.width, z.height), Yt(Bt), ra(Bt.ctx, F, z), yi(s.committedMask.ctx, Bt.canvas)) : (ra(s.committedMask.ctx, F, z), s.painted = !0);
        continue;
      }
      if (Q) {
        Bt = Qr(Bt, n.width, n.height), Yt(Bt), ra(Bt.ctx, F, n);
        for (const z of i.values())
          yi(z.committedPaint.ctx, Bt.canvas), cn(z);
      } else {
        const z = String((F == null ? void 0 : F.actionGroupId) || "__default__"), w = g(z), Z = w.descriptor;
        ra(w.committedPaint.ctx, F, Z), cn(w);
      }
    }
    _([...i.keys()]);
  }
  function G(le, _e) {
    d = String((le == null ? void 0 : le.layerKind) || "");
    const Y = String((le == null ? void 0 : le.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Yt(s.currentStroke), s.activeStroke = null, cn(s);
    else {
      const O = Y ? a : g(String((le == null ? void 0 : le.actionGroupId) || "__default__"));
      c = Y ? "" : String((le == null ? void 0 : le.actionGroupId) || "__default__"), Yt(O.currentStroke), O.activeStroke = null, cn(O);
    }
  }
  function re(le, _e) {
    var C;
    const Y = String((le == null ? void 0 : le.layerKind) || "paint"), O = String((le == null ? void 0 : le.toolKind) || "") === "eraser", B = Y === "mask" ? s : O ? a : g(String((le == null ? void 0 : le.actionGroupId) || c || "__default__")), P = B.activeStroke, M = B.descriptor;
    if (P && P.pointCount > 1) {
      const ne = B.currentStroke.ctx;
      ne.globalCompositeOperation = "source-over";
      const Q = {
        ctx: ne,
        stampTex: P.stampTex,
        radiusPx: P.radiusPx,
        spacingPx: P.spacingPx,
        desc: M,
        aspect: P.aspect,
        angle: P.angle,
        stampKind: P.stampKind,
        scatter: P.scatter,
        latitudeCorrection: P.latitudeCorrection
      };
      P.pointCount === 2 ? ps(Q, P.lastMidX, P.lastMidY, P.prev.x, P.prev.y, P.distSinceStamp) : Wa(Q, P.pprev, { x: P.lastMidX, y: P.lastMidY }, P.prev, P.prev, P.distSinceStamp);
    }
    B.lassoPreviewActive && (Yt(B.currentStroke), _a(B.currentStroke.ctx, le, M), B.lassoPreviewActive = !1);
    const F = Y === "mask" ? s.committedMask : B.committedPaint;
    if (O && Y === "paint")
      for (const ne of i.values())
        yi(ne.committedPaint.ctx, B.currentStroke.canvas), cn(ne);
    else if (O)
      yi(F.ctx, B.currentStroke.canvas);
    else {
      Y === "mask" && (s.painted = !0);
      const ne = Math.max(0, Math.min(1, (P == null ? void 0 : P.strokeOpacity) ?? 1));
      F.ctx.save(), F.ctx.globalAlpha = ne, F.ctx.drawImage(B.currentStroke.canvas, 0, 0), F.ctx.restore();
    }
    pv() && (String((le == null ? void 0 : le.toolKind) || ""), String((M == null ? void 0 : M.kind) || ""), Number((M == null ? void 0 : M.width) || 0), Number((M == null ? void 0 : M.height) || 0), String(((C = le == null ? void 0 : le.targetSpace) == null ? void 0 : C.viewMode) || ""), Number((le == null ? void 0 : le.aspect) ?? 1), Ff(B.currentStroke.canvas), Ff(F.canvas), void 0), Yt(B.currentStroke), B.activeStroke = null, cn(B), f.clear(), c = null, d = "", _([...i.keys()]);
  }
  function T(le) {
    if (d === "mask")
      Yt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, cn(s);
    else if (d === "paint" && !c)
      Yt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, cn(a);
    else if (c) {
      const _e = i.get(c);
      _e && (Yt(_e.currentStroke), _e.activeStroke = null, _e.lassoPreviewActive = !1, cn(_e));
    }
    f.clear(), c = null, d = "", _([...i.keys()]);
  }
  function W(le, _e) {
    var O;
    if (d = String((le == null ? void 0 : le.layerKind) || ""), String(((O = le == null ? void 0 : le.geometry) == null ? void 0 : O.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Yt(s.currentStroke), _a(s.currentStroke.ctx, le, s.descriptor), s.lassoPreviewActive = !0, cn(s);
      else {
        const B = String((le == null ? void 0 : le.toolKind) || "") === "eraser", P = B ? a : g(String((le == null ? void 0 : le.actionGroupId) || c || "__default__"));
        c = B ? "" : String((le == null ? void 0 : le.actionGroupId) || c || "__default__"), Yt(P.currentStroke), _a(P.currentStroke.ctx, le, P.descriptor), P.lassoPreviewActive = !0, cn(P);
      }
      _([...i.keys()]);
    }
  }
  function $(le) {
    return _(le ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function U(le) {
    return i.get(String(le)) ?? null;
  }
  function ve() {
    return [...i.keys()];
  }
  function ye(le) {
    var ne;
    const _e = i.get(String(le));
    if (!_e) return null;
    const Y = d === "paint" && c === _e.actionGroupId, O = d === "paint" && ((ne = c ? i.get(c) : a) == null ? void 0 : ne.activeStroke) || null, B = !!(O != null && O.isEraser), P = Y ? _e.activeStroke : null;
    if (!B && !P) return _e.committedPaint.canvas;
    const M = `${_e.revision}:${a.revision}:${B}`, F = f.get(_e.actionGroupId);
    if ((F == null ? void 0 : F.key) === M) return F.surface.canvas;
    const C = Qr((F == null ? void 0 : F.surface) ?? null, t, r);
    return Yt(C), C.ctx.drawImage(_e.committedPaint.canvas, 0, 0), B ? yi(C.ctx, o.canvas) : (C.ctx.save(), C.ctx.globalAlpha = _e.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, P.strokeOpacity ?? 1)), C.ctx.drawImage(o.canvas, 0, 0), C.ctx.restore()), f.set(_e.actionGroupId, { key: M, surface: C }), C.canvas;
  }
  function de() {
    const le = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!le || le.isEraser) ? null : `${s.revision}:${!!le}`;
  }
  function ge() {
    const le = de();
    if (le === null)
      return m = null, null;
    if ((m == null ? void 0 : m.key) === le) return m.surface.canvas;
    const _e = Qr((m == null ? void 0 : m.surface) ?? null, t, r);
    Yt(_e);
    const Y = d === "mask" ? s.activeStroke : null;
    return Y != null && Y.isEraser ? (Bt = Qr(Bt, t, r), Yt(Bt), Bt.ctx.drawImage(s.committedMask.canvas, 0, 0), yi(Bt.ctx, o.canvas), fc(_e.ctx, Bt.canvas)) : (fc(_e.ctx, s.committedMask.canvas), Y && fc(_e.ctx, o.canvas)), m = { key: le, surface: _e }, _e.canvas;
  }
  return {
    rebuildCommitted: te,
    beginStroke: G,
    appendStrokePoint: Pv,
    updateActiveStroke: W,
    commitActiveStroke: re,
    cancelActiveStroke: T,
    getErpTarget: $,
    ensureTarget: h,
    getGroupTarget: U,
    getGroupDisplayCanvas: ye,
    getMaskDisplayCanvas: ge,
    getMaskDisplayRevision: de,
    getAllGroupIds: ve
  };
}
function Ie(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Ht(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function nd(e, t) {
  let r = Ht(t) - Ht(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Jc = 3;
function Lo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ua(e, t = 0) {
  const r = Lo(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = Lo(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = Lo(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = Lo(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(Lo(t) || 0);
}
function qh(e) {
  if (!(e != null && e.addEventListener)) return () => {
  };
  const t = () => {
    var r;
    return (r = e.focus) == null ? void 0 : r.call(e, { preventScroll: !0 });
  };
  return e.addEventListener("pointerenter", t), () => {
    var r;
    return (r = e.removeEventListener) == null ? void 0 : r.call(e, "pointerenter", t);
  };
}
const Vf = Math.PI / 180, $f = 0.12, Nv = Jc, Av = 35, Cv = 140, Ho = 100, Iv = 20, zf = 0.8;
function Ev(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ie(Number(e || Ho), 1, 179) * Vf;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Vf;
}
function rd(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: Ho })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(te, G = null) {
    a && a(te, G);
  }
  function d(te, G, re = null, T = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(te || 0), l.drag.lastY = Number(G || 0), l.drag.lastTs = Number(T || performance.now()), l.drag.pointerId = re, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: re }), !0;
  }
  function u(te, G, re = "pano", T = performance.now()) {
    if (!l.drag.active) return !1;
    const W = Number(T || performance.now()), $ = Number(te), U = Number(G), ve = $ - l.drag.lastX, ye = U - l.drag.lastY;
    l.drag.lastX = $, l.drag.lastY = U, l.drag.lastTs = W;
    const de = n() || { x: 1, y: 1 }, ge = Number(de.x || 1), le = Number(de.y || 1), _e = { ...t() };
    let Y = 0, O = 0;
    if (re === "unwrap") {
      const P = i() || { w: 1, h: 1 }, M = Math.max(1, Number(P.w || 1)), F = Math.max(1, Number(P.h || 1)), C = ve / M, ne = ye / F;
      Y = -C * 360 * ge, O = ne * 180 * le;
    } else {
      const P = o() || { w: 0, h: 0 }, M = Math.max(1, Number(P.w || 0)), F = Math.max(1, Number(P.h || 0));
      if (M > 1 && F > 1) {
        const C = Ie(Number(_e.fov || Ho), 1, 179), ne = Ie(Ev(C, M, F), 0.1, 179);
        Y = -(ve / M) * C * ge, O = ye / F * ne * le;
      } else
        Y = -ve * $f * ge, O = ye * $f * le;
    }
    _e.yaw = Ht(Number(_e.yaw || 0) + Y), _e.pitch = Ie(Number(_e.pitch || 0) + O, -89.9, 89.9), r(_e), l.velHistory.push({ ts: W, yaw: _e.yaw, pitch: _e.pitch });
    let B = 0;
    for (; B < l.velHistory.length - 1 && l.velHistory[B].ts < W - 100; ) B++;
    return B > 0 && l.velHistory.splice(0, B), l.inertia.active = !1, l.inertia.lastTs = W, s(), c("drag", { phase: "move", dx: ve, dy: ye, dYaw: Y, dPitch: O }), !0;
  }
  function f(te = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const G = Number(te || performance.now());
    l.drag.lastTs = G;
    const re = l.velHistory.filter((W) => G - W.ts <= 80);
    if (re.length >= 2) {
      const W = re[0], $ = re.at(-1), U = Math.max(1e-3, ($.ts - W.ts) / 1e3);
      let ve = $.yaw - W.yaw;
      ve > 180 && (ve -= 360), ve < -180 && (ve += 360), l.inertia.vx = ve / U, l.inertia.vy = ($.pitch - W.pitch) / U;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const T = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = T > Iv, l.inertia.lastTs = G, c("drag", { phase: "end", speed: T, inertiaActive: l.inertia.active }), !0;
  }
  function m(te = performance.now()) {
    if (!l.inertia.active) return !1;
    const G = Number(te || performance.now()), re = Math.max(1e-3, (G - (l.inertia.lastTs || G)) / 1e3);
    l.inertia.lastTs = G;
    const T = { ...t() };
    T.yaw = Ht(Number(T.yaw || 0) + l.inertia.vx * re), T.pitch = Ie(Number(T.pitch || 0) + l.inertia.vy * re, -89.9, 89.9);
    const W = Math.exp(-5.5 * re);
    return l.inertia.vx *= W, l.inertia.vy *= W, Math.abs(l.inertia.vx) < zf && Math.abs(l.inertia.vy) < zf && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(T), s(), l.inertia.active;
  }
  function x() {
    const te = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], te;
  }
  function g(te) {
    const G = Math.sign(Number(te || 0));
    if (!G) return !1;
    const re = { ...t() }, T = Number(re.fov || Ho);
    return re.fov = Ie(T + G * Nv, Av, Cv), r(re), s(), c("wheel", { deltaSign: G, fovBefore: T, fovAfter: re.fov }), !0;
  }
  function h(te, G = 0) {
    return g(Ua(te, G));
  }
  function _() {
    r({ yaw: 0, pitch: 0, fov: Ho }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: m,
    stopMotion: x,
    applyWheel: g,
    applyWheelEvent: h,
    resetView: _
  };
}
const wt = Math.PI / 180, tn = 180 / Math.PI;
function Xn(e, t, r) {
  return { x: e, y: t, z: r };
}
function Ba(e, t) {
  return Xn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ya(e, t) {
  return Xn(e.x * t, e.y * t, e.z * t);
}
function pc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function id(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Xn(e.x / t, e.y / t, e.z / t);
}
function Dn(e, t) {
  const r = e * wt, n = t * wt, i = Math.cos(n);
  return Xn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function vo(e, t, r = 0) {
  const n = Number(e || 0) * wt, i = Number(t || 0) * wt, o = r * wt, s = Math.cos(n), a = Math.sin(n), l = Math.cos(i), c = Math.sin(i), d = Math.cos(o), u = Math.sin(o);
  return {
    right: Xn(
      s * d - a * c * u,
      l * u,
      -a * d - s * c * u
    ),
    up: Xn(
      -s * u - a * c * d,
      l * d,
      a * u - s * c * d
    ),
    fwd: Xn(a * l, c, s * l)
  };
}
function qa(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Ct(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Ov() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function Fv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    if (!n || typeof n != "object") continue;
    const i = String(n.actionGroupId || n.id || "").trim();
    if (!i || r.has(i)) continue;
    r.add(i);
    const o = Ct(n.z_index ?? n.zIndex, t.length);
    t.push({
      id: String(n.id || i),
      type: "strokeGroup",
      actionGroupId: i,
      z_index: Math.max(0, Math.round(o ?? t.length)),
      locked: n.locked === !0
    });
  }
  return t;
}
function Tv(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function Dv(e, t) {
  if (!e || typeof e != "object" || !t) return null;
  const r = Ct(e.t, 0), n = Ct(e.widthScale, null), i = Ct(e.pressureLike, null);
  if (t.kind === "ERP_GLOBAL") {
    const o = Ct(e.u, null), s = Ct(e.v, null);
    if (o == null || s == null) return null;
    const a = {
      targetKind: "ERP_GLOBAL",
      u: (o % 1 + 1) % 1,
      v: Math.max(0, Math.min(1, s)),
      t: r
    };
    return n != null && (a.widthScale = Math.max(0, n)), i != null && (a.pressureLike = Math.max(0, i)), a;
  }
  if (t.kind === "FRAME_LOCAL") {
    const o = Ct(e.u, null), s = Ct(e.v, null);
    if (o == null || s == null) return null;
    const a = {
      targetKind: "FRAME_LOCAL",
      frameId: t.frameId,
      u: o,
      v: s,
      t: r
    };
    return n != null && (a.widthScale = Math.max(0, n)), i != null && (a.pressureLike = Math.max(0, i)), a;
  }
  return null;
}
function ia(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = Dv(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function Lv(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = ia(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = ia(e.points, t, 1);
  if (!o) return null;
  const s = ia(e.rawPoints, t, 1), a = ia(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function Rv(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = Tv(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = Lv(e.geometry, r, n, t === "paint");
  if (!i) return null;
  const o = Ct(e.size, null), s = Ct(e.opacity, null);
  if (o == null || s == null) return null;
  const a = String(e.id || "").trim(), l = String(e.actionGroupId || "").trim();
  if (!a || !l) return null;
  const c = Ct(e.radiusValue, null), d = String(e.radiusModel || "").trim() || null;
  let u = null;
  if (t === "paint") {
    const f = e.color;
    if (!f || typeof f != "object") return null;
    u = {
      r: Math.max(0, Math.min(1, Ct(f.r, 0))),
      g: Math.max(0, Math.min(1, Ct(f.g, 0))),
      b: Math.max(0, Math.min(1, Ct(f.b, 0))),
      a: Math.max(0, Math.min(1, Ct(f.a, 1)))
    };
  }
  return {
    id: a,
    actionGroupId: l,
    targetSpace: r,
    layerKind: t,
    toolKind: n,
    brushPresetId: String(e.brushPresetId || "").trim() || null,
    size: Math.max(0, o),
    opacity: Math.max(0, Math.min(1, s)),
    hardness: Ct(e.hardness, null),
    flow: Ct(e.flow, null),
    spacing: Ct(e.spacing, null),
    createdAt: Math.trunc(Ct(e.createdAt, 0)),
    color: u,
    radiusModel: d,
    radiusValue: c == null ? null : Math.max(0, c),
    geometry: i
  };
}
function jf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = Rv(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function Vv(e) {
  if (!e || typeof e != "object") return null;
  const t = Ct(e.u0, null), r = Ct(e.v0, null), n = Ct(e.u1, null), i = Ct(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function $v(e) {
  const t = e || {};
  return {
    du: Ct(t.du, 0) ?? 0,
    dv: Ct(t.dv, 0) ?? 0,
    rot_deg: Ct(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Ct(t.scale, 1) ?? 1)
  };
}
function zv(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = Vv(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Ct(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: $v(e.transform)
  } : null;
}
function jv(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = zv(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function So(e) {
  const t = Ov();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: Fv(e.groups),
    paint: jf(e.paint, "paint"),
    mask: jf(e.mask, "mask"),
    raster_objects: jv(e.raster_objects)
  };
}
const Jn = 1, Zn = 179, Zc = 85;
function Dl(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Xh(e, t) {
  let r = ot(e, 0) - ot(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function Jh(e, t, { shiftKey: r = !1 } = {}) {
  let n = ot(e, 0) + ot(t, 0) * tn;
  return r && (n = Math.round(n / 15) * 15), Dl(n);
}
function ot(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function li(e = {}) {
  const t = Ie(ot(e.hFOV_deg || 90, 90), Jn, Zn), r = Ie(ot(e.vFOV_deg || 60, 60), Jn, Zn), n = Math.tan(t * wt * 0.5), i = Math.tan(r * wt * 0.5);
  return {
    yawDeg: ot(e.yaw_deg, 0),
    pitchDeg: ot(e.pitch_deg, 0),
    rollDeg: ot(e.roll_deg ?? e.rot_deg, 0),
    hFovDeg: t,
    vFovDeg: r,
    tanHalfX: n,
    tanHalfY: i,
    aspect: n / Math.max(1e-12, i)
  };
}
function Oi(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = li(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function od(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ot(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function sd(e, t) {
  const r = Math.max(1e-12, ot(t, 1)), n = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ie(2 * Math.atan(n / (2 * r)) * tn, Jn, Zn), s = Ie(2 * Math.atan(i / (2 * r)) * tn, Jn, Zn);
  return { hFOV_deg: o, vFOV_deg: s };
}
function Hv(e, t, r) {
  const n = ot(e == null ? void 0 : e.x, 0), i = ot(e == null ? void 0 : e.y, 0), o = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = li(t), l = Math.max(1e-12, ot(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function ad(e, t, r = Zc) {
  const n = Math.max(1e-12, ot(t, 1)), i = Ie(ot(r, Zc), 1, 89.999), o = n * Math.tan(i * wt), s = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function Zh(e, t, r) {
  const n = Math.max(1e-12, ot(t, 1));
  return {
    x: (ot(r == null ? void 0 : r.x, 0) - ot(e == null ? void 0 : e.x, 0)) / n,
    y: -(ot(r == null ? void 0 : r.y, 0) - ot(e == null ? void 0 : e.y, 0)) / n
  };
}
function Gv(e, t) {
  const r = Ie(ot(e, 90), Jn, Zn), n = Math.max(1e-6, ot(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * wt * 0.5) / n) * tn,
    Jn,
    Zn
  );
}
function wa(e, t) {
  const r = Ie(ot(e, 60), Jn, Zn), n = Math.max(1e-6, ot(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * wt * 0.5) * n) * tn,
    Jn,
    Zn
  );
}
function Hf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function Kv(e, t) {
  const r = Hf(e, 1), n = Hf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function Li(e) {
  const t = Ie(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * wt, r = Ie(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * wt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Ci(e) {
  const t = Li(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || Kv(t, 1);
}
function ld(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Ci(t), t;
}
function Qh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Ie(s, Jn, Zn) : Ie(Math.min(42, ot(i, 100) * 0.42), 8, 96);
  return ld({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ot(t, 0),
    pitch_deg: Ie(ot(r, 0), -89.9, 89.9),
    roll_deg: Dl(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Rr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Ci(e);
}
function em(e, t) {
  const r = li(e), n = ot(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * tn, o = 2 * Math.atan(r.tanHalfY * n) * tn;
  return i < Jn || i > Zn || o < Jn || o > Zn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function tm(e, t, r = Jc) {
  const n = Math.sign(ot(t, 0)), i = Math.abs(ot(r, Jc));
  if (!n || !(i > 0)) return null;
  const o = li(e), s = o.hFovDeg + n * i;
  if (s < Jn || s > Zn) return null;
  const a = Math.tan(s * wt * 0.5);
  return em(e, a / o.tanHalfX);
}
function nm(e, t) {
  const r = li(e), n = vo(r.yawDeg, r.pitchDeg, r.rollDeg), i = ot(t == null ? void 0 : t.x, 0), o = ot(t == null ? void 0 : t.y, 0);
  return id(Ba(Ba(n.fwd, Ya(n.right, i)), Ya(n.up, o)));
}
function Wv(e) {
  return Xn(e.x, e.y, -e.z);
}
function xa(e) {
  return Xn(e.x, e.y, -e.z);
}
function kn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = vo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function rm(e) {
  const t = xa(Xn(e[0][0], e[1][0], e[2][0])), r = xa(Xn(e[0][1], e[1][1], e[2][1])), n = xa(Xn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
  return { yawDeg: i * tn, pitchDeg: o * tn, rollDeg: l * tn };
}
function hs(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function ci(e) {
  const [[t, r, n], [i, o, s], [a, l, c]] = e, d = t + o + c;
  if (d > 0) {
    const f = 0.5 / Math.sqrt(d + 1);
    return { x: (l - s) * f, y: (n - a) * f, z: (i - r) * f, w: 0.25 / f };
  }
  if (t > o && t > c) {
    const f = 2 * Math.sqrt(1 + t - o - c);
    return { x: 0.25 * f, y: (r + i) / f, z: (n + a) / f, w: (l - s) / f };
  }
  if (o > c) {
    const f = 2 * Math.sqrt(1 + o - t - c);
    return { x: (r + i) / f, y: 0.25 * f, z: (s + l) / f, w: (n - a) / f };
  }
  const u = 2 * Math.sqrt(1 + c - t - o);
  return { x: (n + a) / u, y: (s + l) / u, z: 0.25 * u, w: (i - r) / u };
}
function oa(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const ki = 1e-6, Qc = 1e-6, Uv = 1e-9;
function ms(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function Bv(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    ms(0, r, i, 1, c) < t ? s = c : a = c;
  }
  return ms(0, n, o, 1, 0.5 * (s + a));
}
function fo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function po(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = r.map((f) => -f / i), a = n.map((f) => f / o);
  if (s.reduce((f, m, x) => f + m * a[x], 0) < 0) return r.map(() => 0);
  const l = s.map((f, m) => (f * o + a[m] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((m, x) => m + x * x, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function im(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  fo(e, n) && (l = po(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return fo(e, n + 1) && (c = po(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function om(e, t, r, n, i) {
  const [[o], [s]] = im(e, t, r.map((a) => [a]), n);
  return ms(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function Yv(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = im(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => ms(a[u], a[u] + o[u], l[u] + s[u], l[u], n));
}
function Xa([e, t, r, n], [i, o, s, a]) {
  return [
    n * i + e * a + t * s - r * o,
    n * o - e * s + t * a + r * i,
    n * s + e * o - t * i + r * a,
    n * a - e * i - t * o - r * s
  ];
}
function qv(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function hc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function Xv([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function eu(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Qi(e, t) {
  return Xv(Xa([-e[0], -e[1], -e[2], e[3]], t));
}
function mc(e, t, r) {
  return Xa(e, eu(Qi(e, t).map((n) => r * n)));
}
function gc(e, t) {
  const r = qv(e, t);
  if (Math.abs(r) > Qc) return r < 0;
  const [n, i, o] = Qi(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > Qc) return s < 0;
  return !1;
}
function sa(e) {
  const { x: t, y: r, z: n, w: i } = ci(kn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function tu(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function Jv(e, t, r, n) {
  const i = sa(e[r].value);
  let o = sa(e[r + 1].value);
  gc(i, o) && (o = hc(o));
  const s = t[r + 1] - t[r], a = Qi(i, o);
  let l = a;
  if (fo(e, r)) {
    let T = sa(e[r - 1].value);
    gc(T, i) && (T = hc(T)), l = po(t, r, Qi(i, T), a).map((W) => W * s);
  }
  let c = a;
  if (fo(e, r + 1)) {
    let T = sa(e[r + 2].value);
    gc(o, T) && (T = hc(T)), c = po(t, r + 1, Qi(o, i), Qi(o, T)).map((W) => W * s);
  }
  const d = Xa(i, eu(l.map((T, W) => 0.5 * (T - a[W])))), u = Xa(o, eu(a.map((T, W) => 0.5 * (T - c[W])))), [f, m, x, g] = mc(mc(i, o, n), mc(d, u, n), 2 * n * (1 - n)), { yawDeg: h, pitchDeg: _, rollDeg: te } = rm(hs({ x: f, y: m, z: x, w: g })), G = e[r].value, re = e[r + 1].value;
  return {
    yaw_deg: tu(h, G.yaw_deg, re.yaw_deg, n),
    pitch_deg: _,
    roll_deg: tu(te, G.roll_deg, re.roll_deg, n)
  };
}
function gs(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Ja(e) {
  return Math.sqrt(gs(e, e));
}
function Za(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function sm(e, t) {
  const r = gs(e, t), n = t.map((s, a) => s - r * e[a]), i = Ja(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function qi(e, t) {
  const r = Ja(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function aa(e, t, r) {
  return qi(e, sm(e, t).map((n) => r * n));
}
function yc(e, t) {
  const r = Za(e[t].value), n = Za(e[t + 1].value), i = gs(r, n), o = i < 0 && Ja(n.map((l, c) => l - i * r[c])) <= Qc;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = sm(r, n);
  const a = Ja(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function Zv(e, t, r, n) {
  const i = Za(e[r].value), o = Za(e[r + 1].value), [s, a, l] = yc(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  fo(e, r) && (c = po(t, r, yc(e, r - 1)[1].map((G) => -G), c).map((G) => G * u)), fo(e, r + 1) && (d = po(t, r + 1, d.map((G) => -G), yc(e, r + 1)[0]).map((G) => G * u));
  let f, m, x;
  if (l) {
    const G = Math.PI, re = ms(0, gs(c, s) / G / 3, G - gs(d, a) / G / 3, G, n);
    [f, m, x] = qi(i, s.map((T) => re * T / G));
  } else {
    const G = aa(qi(i, c.map((W) => W / 3)), qi(o, d.map((W) => -W / 3)), n), re = aa(qi(i, c.map((W) => n * W / 3)), G, n), T = aa(G, qi(o, d.map((W) => -(1 - n) * W / 3)), n);
    [f, m, x] = aa(re, T, n);
  }
  const g = Math.hypot(f, x), h = e[r].value.yaw_deg, _ = e[r + 1].value.yaw_deg;
  return { yaw_deg: g <= Uv ? h + (_ - h) * n : tu(Math.atan2(f, x) * 180 / Math.PI, h, _, n), pitch_deg: Math.atan2(m, g) * 180 / Math.PI };
}
function Qv(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = om(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function e1(e, t, r, n) {
  return om(e, t, e.map((i) => i.value), r, n);
}
const t1 = { position: Yv, rotation: Jv, direction: Zv, size: Qv };
function Wt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return oa(e[t].value);
  if (r <= n[0].frame + ki) return oa(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - ki) return oa(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + ki; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= ki || s.easing === "hold") return oa(s.value);
  const a = n.map((c) => c.frame), l = Bv(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (t1[t] ?? e1)(n, a, o, l);
}
function nu(e) {
  return Math.min(179, Math.max(0.1, e));
}
function n1(e) {
  return Math.min(1, Math.max(0, e));
}
function am(e) {
  return Math.max(1e-6, e);
}
function lm(e, t) {
  return t - (e.start - e.in);
}
function _o(e, t) {
  return t >= e.start - ki && (e.duration === null || t < e.start + e.duration - ki);
}
function Ll(e, t) {
  return {
    position: Wt(e, "position", t),
    ...Wt(e, "rotation", t),
    hFOV_deg: nu(Wt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Cs(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = lm(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Ll(n, r),
    scene: {
      active: i.visible && _o(i.clip, r),
      clip_frame: o,
      position: Wt(i, "position", o),
      ...Wt(i, "rotation", o),
      scale: am(Wt(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Fi(s, r))
  };
}
function r1(e, t) {
  if (e.placement === "world")
    return {
      position: Wt(e, "position", t),
      ...Wt(e, "rotation", t),
      scale: am(Wt(e, "scale", t))
    };
  const r = Wt(e, "size", t);
  return {
    ...Wt(e, "direction", t),
    roll_deg: Wt(e, "roll", t),
    hFOV_deg: nu(r.hFOV_deg),
    vFOV_deg: nu(r.vFOV_deg)
  };
}
function Fi(e, t) {
  const r = lm(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && _o(e.clip, t),
    clip_frame: r,
    ...r1(e, r),
    opacity: n1(Wt(e, "opacity", r))
  };
}
const i1 = 2, cm = ["sky", "world"], ru = ["perspective", "erp"], o1 = ["input", "output", "temp"], um = [0.42, 0, 0.58, 1], dm = 1, cd = 1e3, iu = 1e7, ud = iu, dd = Number.MAX_SAFE_INTEGER, s1 = /^sticker_([0-9]{1,16})$/;
function Rt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function Xt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function fd(e, t) {
  const r = Xt(e, t);
  return r !== null && r > 0 ? r : t;
}
function wn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function ii(e) {
  const t = Xt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function ka(e) {
  const t = ii(e);
  return t === null ? null : wn(t, -iu, iu);
}
function ui(e) {
  const t = fd(e, null);
  return t === null ? null : wn(t, dm, cd);
}
function fm(e) {
  const t = ii(e);
  return t !== null && t >= 1 ? Math.min(t, ud) : null;
}
function ys(e, t) {
  return typeof e == "boolean" ? e : t;
}
function pm(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => Xt(r, null));
  return t.includes(null) ? null : t;
}
function hm(e) {
  return pm(e) || [0, 0, 0];
}
function mm(e) {
  const t = Rt(e) ? e : {};
  return {
    yaw_deg: Xt(t.yaw_deg, 0),
    pitch_deg: wn(Xt(t.pitch_deg, 0), -90, 90),
    roll_deg: Xt(t.roll_deg, 0)
  };
}
function a1(e) {
  return wn(Xt(e, 90), 0.1, 179);
}
function l1(e) {
  return fd(e, 1);
}
function c1(e) {
  const t = Rt(e) ? e : {};
  return {
    yaw_deg: Xt(t.yaw_deg, 0),
    pitch_deg: wn(Xt(t.pitch_deg, 0), -90, 90)
  };
}
function u1(e) {
  return Xt(e, 0);
}
function d1(e) {
  const t = Rt(e) ? e : {};
  return {
    hFOV_deg: wn(Xt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: wn(Xt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function gm(e) {
  return wn(Xt(e, 1), 0, 1);
}
const Rl = [["position", hm], ["rotation", mm], ["fov", a1]], Vl = [["position", hm], ["rotation", mm], ["scale", l1]], wo = [["direction", c1], ["roll", u1], ["size", d1], ["opacity", gm]], xo = [...Vl, ["opacity", gm]];
function f1(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => Xt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...um];
}
function p1(e) {
  if (!Rt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = pm(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function h1(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Rt(i)) continue;
    const o = ka(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: f1(i.easing) }, a = r ? p1(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function $l(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Rt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: h1(o.keyframes, i, n === "position") };
  }
  return r;
}
function zl(e) {
  const t = Rt(e) ? e : {}, r = ka(t.start), n = ka(t.in), i = ka(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function ym(e) {
  const t = Rt(e) ? e : {}, r = wn(Xt(t.x0, 0), 0, 1), n = wn(Xt(t.y0, 0), 0, 1), i = wn(Xt(t.x1, 1), 0, 1), o = wn(Xt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function m1(e) {
  if (!Rt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: o1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function g1(e) {
  const t = m1(e.source);
  if (!t) return null;
  const r = cm.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: zl(e.clip),
    visible: ys(e.visible, !0),
    locked: ys(e.locked, !1),
    crop: ym(e.crop),
    ...$l(e, n ? xo : wo)
  };
  return n || (i.z_index = ii(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = y1(e.handoff_overrides, r)), i;
}
function y1(e, t) {
  const r = Array.isArray(e) ? e : [];
  return (t === "world" ? xo : wo).map(([n]) => n).filter((n) => r.includes(n));
}
function b1(e, t) {
  const r = [];
  let n = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = Rt(s) ? g1(s) : null;
    if (a) {
      if (a.source.kind === "port") {
        if (n) continue;
        n = !0;
      }
      r.push(a);
    }
  }
  const i = /* @__PURE__ */ new Set();
  for (const s of r)
    typeof s.id == "string" && s.id && !i.has(s.id) ? i.add(s.id) : s.id = null;
  let o = S1(t, r);
  for (const s of r)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: r, next: Math.min(o, dd) };
}
function v1(e) {
  const t = typeof e == "string" ? s1.exec(e) : null, r = t ? Number(t[1]) : 0;
  return r < dd ? r : 0;
}
function bm(e) {
  return e.reduce((t, r) => Math.max(t, v1(r.id)), 0) + 1;
}
function S1(e, t) {
  const r = ii(e), n = bm(t);
  return wn(r === null ? n : Math.max(r, n), 1, dd);
}
function _1(e) {
  if (!Rt(e)) return null;
  const t = ru.includes(e.projection) ? e.projection : ru[0];
  return { aspect: fd(e.aspect, 1), projection: t, visible: ys(e.visible, !0), ...$l(e, Rl) };
}
function Qa(e) {
  return typeof e == "string" && e ? e : null;
}
function vm(e, t) {
  const r = new Map(e.map((n, i) => [t(n), i]));
  return e.filter((n, i) => r.get(t(n)) === i);
}
function w1(e) {
  if (!Rt(e) || Qa(e.id) === null || !cm.includes(e.placement)) return null;
  const t = e.placement === "world", r = {};
  Rt(e.clip) && (r.clip = zl(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (r[i] = e[i]);
  Rt(e.crop) && (r.crop = ym(e.crop)), Object.assign(r, $l(e, (t ? xo : wo).filter(([i]) => Rt(e[i]))));
  const n = t ? null : ii(e.z_index);
  return n !== null && (r.z_index = n), Object.keys(r).length ? { id: e.id, placement: e.placement, ...r } : null;
}
function Sm(e) {
  const t = Rt(e) ? ui(e.fps) : null;
  if (t === null || Qa(e.layer) === null) return null;
  const r = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => Qa(c) !== null))] : [], n = (Array.isArray(e.stickers) ? e.stickers : []).map(w1).filter((c) => c !== null), i = vm(n, (c) => c.id).filter((c) => !r.includes(c.id)), o = Rt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), Rt(o.clip) && (s.clip = zl(o.clip));
  const a = { layer: e.layer, fps: t, deleted: r, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !r.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function x1(e) {
  const t = (Array.isArray(e) ? e : []).map(Sm).filter((r) => r !== null);
  return vm(t, (r) => r.layer);
}
function el(e) {
  const t = Rt(e.timeline) ? e.timeline : {}, r = Rt(e.scene) ? e.scene : {}, { stickers: n, next: i } = b1(e.stickers, e.next_sticker_id);
  return {
    version: i1,
    id: Qa(e.id),
    timeline: {
      fps: ui(t.fps) ?? 24,
      length: fm(t.length)
    },
    camera: _1(e.camera),
    scene: { clip: zl(r.clip), visible: ys(r.visible, !0), ...$l(r, Vl) },
    stickers: n,
    next_sticker_id: i,
    painting: So(e.painting),
    painting_layer: Rt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: ys(e.painting_visible, !0),
    upstream: x1(e.upstream)
  };
}
function k1(e, t) {
  if (e.source_kind === "external_image") return { kind: "port" };
  const r = typeof e.asset_id == "string" && Object.hasOwn(t, e.asset_id) ? t[e.asset_id] : null;
  if (!Rt(r)) return null;
  const n = String(r.type || "").trim().toLowerCase();
  return n === "comfy_image" ? {
    kind: "file",
    filename: String(r.filename || "").trim(),
    subfolder: String(r.subfolder || "").trim().replace(/^[/\\]+|[/\\]+$/g, ""),
    storage: String(r.storage || "input").trim().toLowerCase()
  } : n === "dataurl" ? { kind: "file", data_url: r.value } : null;
}
function M1(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Rt(t)) return null;
  const r = wn(Xt(t.hFOV_deg, 90), 1, 179), n = wn(Xt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function P1(e) {
  const t = Rt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Rt) : [];
  return r.sort((n, i) => Xt(n.z_index, 0) - Xt(i.z_index, 0)), el({
    camera: M1(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: k1(n, t),
      visible: n.visible,
      locked: n.locked,
      crop: n.crop,
      z_index: n.z_index,
      direction: { value: { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg } },
      roll: { value: n.rot_deg },
      size: { value: { hFOV_deg: n.hFOV_deg, vFOV_deg: n.vFOV_deg } }
    })),
    painting: e.painting,
    painting_layer: e.painting_layer
  });
}
function ur(e) {
  if (e == null || typeof e == "string" && !e.trim()) return el({});
  let t = e;
  if (typeof e == "string")
    try {
      t = JSON.parse(e);
    } catch {
      t = null;
    }
  if (!Rt(t)) throw new Error("state_json is not a JSON object.");
  const r = Object.hasOwn(t, "version") ? t.version : 1;
  if (r !== 1 && r !== 2)
    throw new Error(`Unsupported state_json version ${JSON.stringify(r)}; supported versions are 1 and 2.`);
  return r === 1 ? P1(t) : el(t);
}
const bc = {
  state: { painting_visible: !0 },
  camera: { projection: ru[0], visible: !0 },
  scene: { visible: !0 }
};
function vc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function ou(e) {
  const t = vc(e, bc.state);
  return t.id === null && delete t.id, t.next_sticker_id === bm(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, JSON.stringify({
    ...t,
    camera: e.camera && vc(e.camera, bc.camera),
    scene: vc(e.scene, bc.scene),
    stickers: e.stickers.map((r) => Object.fromEntries(Object.entries(r).filter(([n, i]) => n !== "handoff_overrides" || i.length)))
  });
}
function rs(e, t, r, n, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: r(n + a.frame) - i }))
    };
  return o;
}
function tl(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function Is(e, t) {
  const r = ui(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (a) => ii(a * n), { length: o } = e.timeline, s = tl(e.scene.clip, i);
  return el({
    id: e.id,
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...rs(e.camera, Rl, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...rs(e.scene, Vl, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = tl(a.clip, i), u = a.placement === "world" ? xo : wo;
      return { ...a, clip: l, ...rs(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream
  });
}
function N1(e, t) {
  const { fps: r } = t.timeline, n = r / e.fps, i = (l) => ii(l * n), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? xo : wo).filter(([m]) => Object.hasOwn(l, m));
    if (!Object.hasOwn(l, "clip")) {
      const m = o.get(l.id) ?? 0, x = ii(m * (e.fps / r));
      return { ...l, ...rs(l, c, i, x, m) };
    }
    const { clip: d, anchor: u, newAnchor: f } = tl(l.clip, i);
    return { ...l, clip: d, ...rs(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: tl(e.scene.clip, i).clip } : e.scene;
  return Sm({ ...e, fps: r, stickers: s, scene: a });
}
function Sc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function _m(e) {
  return Array.isArray(e) ? [...e] : e;
}
function wm(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= ki);
}
function xm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? _m(e.keyframes[n - 1].easing) : [...um];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function hn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = Sc(i.value, n);
    return;
  }
  const o = wm(i, r);
  o ? o.value = Sc(o.value, n) : xm(i, r, Sc(Wt(e, t, r), n));
}
function ko(e) {
  return e.placement === "world" ? xo.map(([t]) => t) : e.placement === "sky" ? wo.map(([t]) => t) : (e.clip ? Vl : Rl).map(([t]) => t);
}
function A1(e, t) {
  for (const r of ko(e))
    wm(e[r], t) || xm(e[r], t, Wt(e, r, t));
}
function C1(e) {
  const t = ko(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function _c(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function I1(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function E1(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Wt(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function O1(e, t, r, n, i) {
  n = Math.max(n, Math.min(0, i - Math.min(...r)));
  const o = new Set(r);
  for (const s of t) {
    const a = e[s], l = a.keyframes.filter((d) => o.has(d.frame)).map((d) => ({ ...d, frame: d.frame + n })), c = new Set(l.map((d) => d.frame));
    a.keyframes = [
      ...a.keyframes.filter((d) => !o.has(d.frame) && !c.has(d.frame)),
      ...l
    ].sort((d, u) => d.frame - u.frame);
  }
  return n;
}
function km(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function F1(e, t, r) {
  const n = km(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function T1(e, t, r, n) {
  for (const i of km(e, t, r)) i.easing = _m(n);
}
function D1(e, t) {
  e.start = Math.max(0, e.start + t);
}
function L1(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function R1(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function V1(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function su(e) {
  return ko(e).map((t) => e[t]);
}
function nl(e) {
  return su(e).some((t) => t.keyframes.length > 0) || !!e.clip && !V1(e.clip);
}
function Mm(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(nl);
}
const $1 = 1e5;
function Pm(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const s of su(e.camera))
      for (const a of s.keyframes) o = Math.max(o, a.frame + 1);
  for (const s of [e.scene, ...e.stickers]) {
    const { clip: a } = s;
    o = Math.max(o, a.duration === null || a === n ? a.start + 1 : a.start + a.duration);
    for (const l of su(s))
      for (const c of l.keyframes) o = Math.max(o, a.start - a.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : $1;
}
function z1(e) {
  return e > 0 ? ui(Math.min(e, cd)) : null;
}
function j1(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : fm(Math.max(1, Math.min(e, ud)));
}
const wc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], H1 = 2e3;
function G1(e, t, r = 56) {
  const n = wc.find((o) => o * t >= r) || wc[wc.length - 1], i = [];
  for (let o = 0; o < e && i.length < H1; o += n) i.push(o);
  return i;
}
function K1(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let la = { text: null, parsed: null };
function Rn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function rl(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function W1({
  outputPreset: e = 2048,
  backgroundColor: t = "#00ff00",
  coverage: r = 360,
  sharedUiSettings: n = null
} = {}) {
  return {
    version: 1,
    projection_model: "pinhole_rectilinear",
    alpha_mode: "straight",
    coverage: Rn(r),
    bg_color: t,
    output_preset: e,
    assets: {},
    stickers: [],
    shots: [],
    painting: So(null),
    painting_layer: null,
    ui_settings: rl(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function Nm(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function U1(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function B1(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function Y1(e) {
  return Array.isArray(e) ? e.map((t) => ld(t)) : [];
}
function q1(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function Am(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = W1(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (la.text === i ? o = la.parsed : (o = JSON.parse(i), la = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: U1(o.assets),
      stickers: B1(o.stickers),
      shots: Y1(o.shots),
      painting: So(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: rl(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = rl({ ...a.ui_settings, ...s })), a.output_preset = Nm(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = Rn(r.coverage), delete a.editor_history, a;
  } catch {
    return la = { text: i, parsed: null }, n;
  }
}
function X1(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function J1(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), e.next_sticker_id > r.next_sticker_id && (r.next_sticker_id = e.next_sticker_id), e.id && !r.id && (r.id = e.id), { state: r, paintingChanged: n };
}
function Z1(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Cm(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = ui(t.fps);
  let l;
  try {
    l = ur(e);
  } catch {
    l = ur(null);
  }
  return a && a !== l.timeline.fps && (l = Is(l, a)), {
    ...l,
    coverage: Rn(i),
    bg_color: n,
    output_preset: Nm(r),
    ui_settings: rl(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function Q1(e, t) {
  const r = Is(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of ko(o)) o[a].keyframes = s[a].keyframes;
    }
}
function Im(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * wt, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / wt;
  return Math.min(179, Math.max(0.1, i));
}
function pd(e, t, r = null) {
  const n = Fi(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: Im(e, n, r), rot_deg: n.roll_deg };
}
const eS = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Gf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function tS(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[eS[r]].keyframes.length));
}
function Em(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Gf(r, ["yaw_deg", "pitch_deg"]), o = Gf(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && hn(e, "direction", n, i), r.rot_deg !== void 0 && hn(e, "roll", n, r.rot_deg), Object.keys(o).length && hn(e, "size", n, o);
}
const jl = ["position_x", "position_y", "position_z"], hd = "camera";
function Om(e, t) {
  const r = Ll(e, t);
  return ld({
    id: hd,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: Gv(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function nS(e) {
  return ur({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Ht(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function rS(e) {
  return e - 360 * Math.round(e / 360);
}
function iS(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + rS(r[o] - n[o]));
  Object.keys(i).length && hn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && hn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * wt * 0.5) / Math.tan(r.vFOV_deg * wt * 0.5)), r.position.some((o, s) => o !== n.position[s]) && hn(e, "position", t, [...r.position]);
}
function oS(e, t) {
  const r = Wt(e, "position", t), n = Wt(e, "rotation", t);
  return {
    ...Object.fromEntries(jl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Wt(e, "fov", t)
  };
}
function sS(e, t, r, n) {
  const i = jl.indexOf(r);
  if (i >= 0) {
    const o = Wt(e, "position", t);
    o[i] = n, hn(e, "position", t, o);
  } else r === "hFOV_deg" ? hn(e, "fov", t, n) : hn(e, "rotation", t, { [r]: n });
}
function aS(e, t, r) {
  hn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function lS(e, t) {
  const r = Fi(e, t);
  return {
    ...Object.fromEntries(jl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function cS(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = jl.indexOf(r);
  if (o >= 0) {
    const s = Wt(e, "position", i);
    s[o] = n, hn(e, "position", i, s);
  } else r === "scale" ? hn(e, "scale", i, n) : r === "opacity" ? hn(e, "opacity", i, n / 100) : hn(e, "rotation", i, { [r]: n });
}
function uS(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && hn(e, i, n, r[i]);
}
function dS(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function fS(e, t, r) {
  return {
    id: e,
    placement: "world",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    position: { value: [...r.position], keyframes: [] },
    rotation: { value: { ...r.rotation }, keyframes: [] },
    scale: { value: r.scale, keyframes: [] },
    opacity: { value: 1, keyframes: [] }
  };
}
function Ma(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function il(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function Hl(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function md(e, t, r, n) {
  return {
    id: e,
    placement: "sky",
    source: t,
    clip: { start: 0, in: 0, duration: null },
    visible: !0,
    locked: !1,
    crop: { x0: 0, y0: 0, x1: 1, y1: 1 },
    direction: { value: { yaw_deg: r.yaw_deg, pitch_deg: r.pitch_deg }, keyframes: [] },
    roll: { value: r.rot_deg, keyframes: [] },
    size: { value: { hFOV_deg: r.hFOV_deg, vFOV_deg: r.vFOV_deg }, keyframes: [] },
    opacity: { value: 1, keyframes: [] },
    z_index: n
  };
}
function pS(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Ht(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function au(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Fm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Tm(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function Kf(e, t) {
  return e != null && e.__panoSceneStateV2 ? ou(ur(t)) : JSON.stringify(t);
}
const hS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function mS() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => hS[e & 63]).join("");
}
function Dm(e, t, r, n) {
  const i = Kf(e, t);
  return gS(e, i, r, n) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = mS(), Kf(e, t));
}
function gS(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = ur(r);
    if (ou(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && ou(Is(i, o)) === t;
  } catch {
    return !1;
  }
}
const xc = 0.15, yS = 0.01, bS = 1e-3, vS = 0.05, SS = 4, Wf = 250, _S = 16, ar = 1, wS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Kn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function wr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function Gl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function Ri(e, t, r = 0) {
  const n = kn(e, t, r), i = wr(n, 2);
  return { right: wr(n, 0), up: wr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function xS(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function lu(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function kS(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : lu(e, "3dof", r);
}
function MS(e) {
  return Ri(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function PS(e) {
  return Kn(e.position, Ri(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function di(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function is(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function gd(e, t) {
  return is(di(t, e.position), Ri(e.yaw_deg, e.pitch_deg).forward);
}
function yd(e) {
  return Math.max(e, 1e-6) * vS;
}
function cu(e, t, r = null, n = ar) {
  if (t) return t;
  const i = yd(n);
  if (r && gd(e, r) > 0) {
    const o = di(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : Kn(e.position, o, i / s);
  }
  return Kn(e.position, Ri(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Lm(e, t = ar) {
  return Math.max(e.distance, yd(t));
}
function Rm(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > SS ? !1 : t.time - e.time < Wf || e.cost > _S && t.time - e.wheelTime < Wf;
}
function bd(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * wt);
  return { tanX: n, tanY: n * r / t };
}
function Vm(e, t, r, n, i = PS(e)) {
  const o = e.roll_deg ?? 0, [s, a] = NS(t, r, o), l = Ht(e.yaw_deg + s / n * 360), c = Ie(e.pitch_deg - a / n * 360, -89.9, 89.9), d = kn(e.yaw_deg, e.pitch_deg, o), u = kn(l, c, o), f = di(e.position, i), m = [0, 1, 2].map((g) => is(wr(d, g), f)), x = { ...e, yaw_deg: l, pitch_deg: c, position: Kn(i, Gl(u, m)) };
  return { ...x, distance: gd(x, i) };
}
function NS(e, t, r) {
  const n = Math.cos(r * wt), i = Math.sin(r * wt);
  return [e * n + t * i, t * n - e * i];
}
function $m(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = MS(e), l = 2 * o * bd(e, n, i).tanY / i;
  return { ...e, position: Kn(Kn(e.position, s, -t * l), a, r * l), distance: o };
}
function zm(e, t, r, n = ar) {
  const i = di(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * yS, l = r > 0 ? Math.min(Math.max(o * xc, a), o - s * bS) : -Math.max(o * xc / (1 - xc), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Kn(e.position, i, l / o) };
  return { ...c, distance: Math.max(gd(c, t), yd(n)) };
}
function AS(e, t, r, n) {
  const { tanX: i, tanY: o } = bd(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = Ri(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Kn(t.center, l, -a), distance: a };
}
function vd(e, t, r, n = null) {
  return jm({
    quaternion: ci(kn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(bd(e, t, r).tanY) * tn,
    aspect: t / r
  }, e.position, e.distance, n);
}
function jm(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: ar }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function bs(e, t, r, n) {
  const { right: i, up: o, forward: s } = Hm(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * wt), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function Hm(e) {
  const t = hs(e.quaternion), r = wr(t, 2);
  return { right: wr(t, 0), up: wr(t, 1), forward: r.map((n) => -n) };
}
function ol(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function CS({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function Sd(e, t) {
  if (!e || !t.active) return null;
  const r = IS(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: uu(t),
    itemQuaternion: e.kind === "splat" ? wS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function Gm(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = Sd(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function Km(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function IS(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function uu(e) {
  return {
    position: [...e.position],
    quaternion: ci(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function du(e, t) {
  return Kn(e.position, Gl(kn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function Pa(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function fu({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function pu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function ES(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...fu(t).map((o) => du(e.scene, o)));
  for (const o of r) i.push(..._d(o));
  for (const { box: o, value: s } of n) i.push(...fu(o).map((a) => du(s, a)));
  return i;
}
function OS(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: ci(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: kn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function _d(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Kn(e.position, Gl(e.rotation, [n, i, 0])));
}
function FS(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? pu(_d(i)) : o != null && o.box ? pu(fu(Pa(o.kind, o.box)).map((s) => du(n, s))) : { center: [...n.position], radius: n.scale };
}
const TS = 2, DS = 0.5, LS = 30;
function Wm(e, t) {
  const r = di(t, e), n = Math.atan2(r[0], -r[2]) * tn, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * tn;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function RS(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * DS : TS, o = t ? [...t] : Kn(e.position, Ri(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...di(o, e.position)), a = s > 0 ? Wm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(LS * 0.5 * wt);
  return { position: o, rotation: a, scale: l };
}
function Uf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function VS(e) {
  return [0, 1, 2].map((t) => wr(e, t));
}
function Bf(e, t, r, n) {
  if (e === "translate") return { position: Kn(t.position, di(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * GS(r.scale, n.scale) / r.scale };
  const i = Uf(hs(n.quaternion), VS(hs(r.quaternion))), o = Uf(i, kn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = rm(o);
  return Math.abs(a) <= $S ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: zS(o, t.yaw_deg) } };
}
const $S = 89.9;
function zS(e, t) {
  const r = wr(e, 0), n = wr(e, 1), i = Math.cos(t * wt), o = Math.sin(t * wt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * tn + 0;
}
const jS = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function HS(e, t, r, n, i) {
  if (!bs(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = Hm(e), l = di(t, e.position), c = is(l, o), d = is(l, s), u = is(l, a), f = Math.tan(e.fovY_deg * 0.5 * wt), m = f * e.aspect, x = Math.hypot(c, d, u) * jS[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > x)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const g = (re) => {
    const T = x * Math.sqrt(re * re + u * u - x * x);
    return [(re * u - T) / (u * u - x * x), (re * u + T) / (u * u - x * x)];
  }, [h, _] = g(c), [te, G] = g(d);
  return {
    minX: n * 0.5 * (1 + h / m),
    maxX: n * 0.5 * (1 + _ / m),
    minY: i * 0.5 * (1 - G / f),
    maxY: i * 0.5 * (1 - te / f)
  };
}
function GS(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function KS(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Um(e, t) {
  const r = kn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * wt) * t, i = n / e.aspect, o = (c, d, u) => Kn(e.position, Gl(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function WS(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = bs(e, s, n, i), c = bs(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Ie(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function US(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function BS(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Wt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Wt(n, "position", l);
  });
}
function YS(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const Bm = 0.28;
function Ym(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * wt);
  return {
    quaternion: ci(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * tn,
    aspect: n
  };
}
function os(e) {
  const t = li(e);
  return {
    quaternion: ci(kn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function qm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = ad(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * tn,
      vFOV_deg: 2 * Math.atan(o / n) * tn
    }
  };
}
function Xm(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = hs(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * wt), m = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(x, g = 1e-4) {
      const h = Wv(x), _ = n * h.x + s * h.y + c * h.z, te = i * h.x + a * h.y + d * h.z, G = -(o * h.x + l * h.y + u * h.z), re = Math.max(G, g);
      return {
        x: t * 0.5 * (1 + _ / re / m),
        y: r * 0.5 * (1 - te / re / f),
        z: G
      };
    },
    // The unit direction seen at the point (x, y).
    ray(x, g) {
      const h = (x / t * 2 - 1) * m, _ = (1 - g / r * 2) * f;
      return id(xa({
        x: n * h + i * _ - o,
        y: s * h + a * _ - l,
        z: c * h + d * _ - u
      }));
    }
  };
}
function Jm(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = Cs(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * wt), m = Math.tan(Im(a, c, Qm(u.media)) * 0.5 * wt), { crop: x } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? Bm : c.opacity,
      zIndex: n(a),
      quaternion: ci(kn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * x.x0 - 1) * f,
        x1: (2 * x.x1 - 1) * f,
        y0: (1 - 2 * x.y1) * m,
        y1: (1 - 2 * x.y0) * m
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function Zm(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return Jm(e, t, {
    media: (a) => {
      const l = s.get(a.id);
      return l ? n(l) : null;
    },
    zIndex: (a) => {
      var l;
      return Number(((l = s.get(a.id)) == null ? void 0 : l.z_index) || 0);
    },
    paintLayers: i,
    evaluated: o
  });
}
function Qm(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function eg(e, t, r, { media: n, evaluated: i = Cs(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: m } = Qm(u.media), x = OS(c, a.crop, f, m);
    x && s.push({
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: x.position,
      quaternion: x.quaternion,
      rotation: x.rotation,
      width: x.width,
      height: x.height,
      crop: a.crop
    });
  }), s;
}
function qS({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = Bh(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
  }, f = {
    ready: !1,
    failed: !1,
    // The WebGL context is lost; the view waits for it to come back.
    lost: !1,
    // Returns { canvas, x, y, width, height }, the part of the canvas that holds the frame, or null
    // until the view has loaded or while the context is lost.
    render(g) {
      return l && !f.lost ? l.render(g) : null;
    },
    // The same layers laid out as an ERP (the Unwrap view); input has no camera.
    renderUnwrap(g) {
      return l && !f.lost ? l.renderUnwrap(g) : null;
    },
    // Sizes the canvas in device pixels (pano_three_view.js resize); returns the size it has, or null.
    resize(g, h) {
      return l && !f.lost ? l.resize(g, h) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(g, h) {
      l && !f.lost && l.clear(g, h);
    },
    // Frees the Spark renderer of an owner that stops drawing SPLATs for now (pano_three_view.js
    // releaseSplats).
    releaseSplats(g) {
      l && !f.lost && l.releaseSplats(g);
    },
    // The box of a loaded `scene` item (pano_three_view.js sceneBox), or null.
    sceneBox(g) {
      return l ? l.sceneBox(g) : null;
    },
    // The World point of the content under (x, y) in the last space frame (pano_three_view.js pick), or
    // null.
    pick(g, h, _, te, G) {
      return l && !f.lost ? l.pick(g, h, _, te, G) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, h, _, te, G) {
      return l && !f.lost ? l.pickSurface(g, h, _, te, G) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, h, _, te, G) {
      return l && !f.lost ? l.pickSticker(g, h, _, te, G) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, h, _, te, G, re) {
      return l && !f.lost ? l.gizmoPointer(g, h, _, te, G, re) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", m), e.removeEventListener("webglcontextrestored", x), l == null || l.dispose(), l = null;
    }
  };
  function m(g) {
    g.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function x() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", m), e.addEventListener("webglcontextrestored", x), s().then((g) => {
    c || (a = g, !f.lost && (u(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, r();
  }), f;
}
const tg = "3D view unavailable. Check the browser console.";
function sl(e, t, r) {
  return Ym({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function XS(e) {
  let t = null, r = !1, n = !1;
  const i = /* @__PURE__ */ new Set();
  function o() {
    t || r || n || (r = !0, e().then((s) => {
      if (r = !1, !i.size) {
        s.dispose();
        return;
      }
      t = s, i.forEach((a) => a.onChange());
    }).catch((s) => {
      r = !1, i.size && (n = !0, console.error("[PanoramaStickers] three.js view is unavailable", s), i.forEach((a) => a.onChange()));
    }));
  }
  return function(a) {
    const l = { onChange: a };
    let c = !1;
    return i.add(l), {
      get failed() {
        return n;
      },
      // Returns { canvas, x, y, width, height }, the part of the shared canvas that holds this
      // node's frame, or null until the view has loaded. Copy it before the next render.
      render(d) {
        return c ? null : (o(), t ? t.render({ ...d, owner: l }) : null);
      },
      // Frees this node's textures when it has no media to show.
      release() {
        t == null || t.release(l);
      },
      dispose() {
        c || (c = !0, i.delete(l), t == null || t.release(l), !i.size && (n = !1, t == null || t.dispose(), t = null));
      }
    };
  };
}
const ng = XS(
  () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((e) => e.$).then((e) => Bh(e.createThreeView({ createCanvas: () => rn({ label: "three.node" }) }), "node"))
), lr = ["erp_image", "bg_erp", "bg_media"], wd = ["sticker_image", "sticker"], rg = ["scene"], xd = ["sticker", "sticker_state"], JS = {
  background: lr,
  "external-sticker": wd,
  scene: rg,
  "sticker-handoff": xd
};
function ig(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function Kl(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = ig(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function og(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function Yf(e, t) {
  var o, s;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((a) => (a == null ? void 0 : a.name) === t);
  let n = r >= 0 && e.graph ? e.getInputLink(r) : null;
  const i = /* @__PURE__ */ new Set();
  for (; n; ) {
    if (n.type && n.type !== "*") return String(n.type);
    const a = e.graph.getNodeById(n.origin_id);
    if (!a || i.has(a)) return "";
    i.add(a);
    const l = (s = (o = a.outputs) == null ? void 0 : o[n.origin_slot ?? 0]) == null ? void 0 : s.type;
    if (l && l !== "*") return String(l);
    if (a.type !== "Reroute") return "";
    n = a.getInputLink(0);
  }
  return "";
}
function sg(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function ZS(e, t) {
  const { graph: r, entry: n } = sg(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = ig(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const ag = [...lr, ...wd, ...rg, ...xd], QS = 256, Xi = /* @__PURE__ */ new Map(), kc = /* @__PURE__ */ new WeakMap();
let lg = () => null;
function cg(e) {
  return kc.has(e) || kc.set(e, JSON.stringify(e)), kc.get(e);
}
function e_(e) {
  lg = e;
}
function al(e, t) {
  const r = cg(e);
  Xi.delete(r), Xi.set(r, t), Xi.size > QS && Xi.delete(Xi.keys().next().value);
}
function Kt(e, t) {
  var o;
  const r = e ? lg(e) : null;
  if (!r) return !0;
  const n = Kl(e);
  let i = Xi.get(cg(r));
  if (i)
    al(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => ag.includes(s == null ? void 0 : s.name)))) return !0;
    al(r, n), i = n;
  }
  return JS[t].every((s) => i[s] === n[s]);
}
const ll = /* @__PURE__ */ new WeakSet();
async function hu(e, t) {
  if (ll.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && ll.add(e), r.ok && n !== void 0 ? n : null;
}
function ug(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = sg(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => ag.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: ZS(r, t) };
}
const Na = /* @__PURE__ */ new Map();
function t_(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && Na.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await hu(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = ug(i, o);
        s && al(s.output, s.inputs);
      }
    });
}
const n_ = 5;
function r_(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${n_}`, n = hu(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, hu(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: m } of await n) {
        if (!a()) return null;
        const x = await o(m);
        if ((c = x == null ? void 0 : x.outputs) != null && c[l])
          return ((f = (u = (d = x.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : ug(x, l);
      }
      return null;
    }
  };
}
function i_(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Ki = null;
async function o_(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || ll.has(r) || (a = Na.get(i)) != null && a.has(n) || i_(t)) return null;
  (Ki == null ? void 0 : Ki.workflowId) !== i && (Ki = { workflowId: i, history: r_(r, i) }, queueMicrotask(() => {
    Ki = null;
  }));
  const s = await Ki.history.lastNodeOutput(e, o);
  return o() ? s ? (al(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (ll.has(r) || Na.set(i, (Na.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function qf(e, t, r, n = lr) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const Xf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Aa(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Xf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Xf.test(String((e == null ? void 0 : e.filename) || ""));
}
const Mc = /* @__PURE__ */ new WeakMap();
function s_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function mu(e) {
  return s_(e) ? (Mc.has(e) || Mc.set(e, Math.random().toString(36).slice(2, 10)), Mc.get(e)) : "run";
}
function dg(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function a_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = r(o, a);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function kd(e, t = [], r = null) {
  var i;
  const n = typeof r == "function" ? r : (o) => String((o == null ? void 0 : o.src) || (o == null ? void 0 : o.url) || o || "").trim();
  for (const o of t) {
    const s = [(i = e == null ? void 0 : e.ui) == null ? void 0 : i[o], e == null ? void 0 : e[o]];
    for (const a of s)
      if (Array.isArray(a))
        for (const l of a) {
          const c = n(l);
          if (c && (/\.mp4(\?|$)/i.test(c) || String((l == null ? void 0 : l.format) || "").toLowerCase() === "video/mp4"))
            return c;
        }
  }
  return "";
}
function l_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = As(e, "looping-preview");
  if (!n || !t) return null;
  const i = typeof r == "function" ? r : () => {
  };
  let o = !1, s = 0;
  const a = typeof n.requestVideoFrameCallback == "function", l = () => {
    o || !a || s || n.paused || n.ended || (s = n.requestVideoFrameCallback(() => {
      s = 0, !o && (i(), l());
    }));
  }, c = () => {
    o || i();
  }, d = () => i(), u = () => {
    i(), l();
  }, f = () => i();
  let m = !1;
  const x = () => {
    m = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), a || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", x), n.src = t, n.load();
  const g = () => {
    o || m || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, h = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var te, G;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", x), n.pause(), (te = n.removeAttribute) == null || te.call(n, "src"), (G = n.load) == null || G.call(n));
    },
    failed: () => m,
    play: g,
    pause: h,
    toggle() {
      n.paused ? g() : h();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
const vs = /* @__PURE__ */ new WeakMap(), fg = {
  editorSession: () => ({
    // Writes the modal's state to state_json before the prompt is queued.
    flushBeforeQueue: null,
    // The view the editor was closed with (pano_view_memory.js viewMemory), which the next opening restores.
    view: null
  }),
  nodeSurface: () => ({
    attached: !1,
    mountKey: null,
    controller: null,
    // "stickers" or "cutout" once attached.
    mode: "",
    noPreview: !1,
    openEditor: null,
    // { widget, root, canvas, requestDraw, state, emptyHintEl, nodeSurface }
    dom: null,
    // Undoes the attach of `dom`.
    restore: null,
    cutout: null,
    stickers: null,
    cutoutState: null,
    stickersState: null,
    cutoutFrame: null,
    lastCutoutShot: null,
    view: null,
    playback: null,
    scene: null,
    renderCache: null,
    paintEngine: null,
    paintDescriptorKey: "",
    paintRevision: null,
    paintRevisionKey: "",
    rasterCache: null,
    rasterReady: null,
    bootMinHeightActive: !1,
    bootMinHeightTimer: null,
    resizeSettleTimer: null,
    userResized: !1,
    standaloneBootSized: !1,
    debugLastTs: 0
  }),
  previewNode: () => ({
    runtime: null,
    surface: null,
    installDone: !1,
    installProbeActive: !1,
    installProbeTries: 0
  }),
  mediaCache: () => ({
    // Shared by the node surface and the editor (pano_comfy_media.js), each under its own keys.
    linkedImages: /* @__PURE__ */ new Map(),
    // { key, player } of createLoopingPreviewVideo.
    ownOutputVideo: null,
    ownOutputRev: 0,
    // { src, image, ready, failed } of Panorama Studio's last run output (an ERP or a first frame).
    studioRunImage: null,
    executedOutputs: /* @__PURE__ */ new Map(),
    outputFromRun: !1
  }),
  stateSync: () => ({
    liveState: null,
    liveStateVersion: 0,
    parsedState: null,
    flushers: /* @__PURE__ */ new Set(),
    pendingStickerUploads: /* @__PURE__ */ new Map(),
    stickerOperationTail: null,
    coverageSyncInstalled: !1
  })
};
function Es(e, t) {
  if (!e || typeof e != "object") return null;
  let r = vs.get(e);
  return r || (r = {}, vs.set(e, r)), r[t] ?? (r[t] = fg[t]());
}
function Wl(e, t) {
  var r;
  return e && typeof e == "object" && ((r = vs.get(e)) == null ? void 0 : r[t]) || null;
}
const cl = (e) => Es(e, "editorSession"), St = (e) => Es(e, "nodeSurface"), Vr = (e) => Es(e, "previewNode"), Mn = (e) => Es(e, "mediaCache"), Hn = (e) => Es(e, "stateSync"), c_ = (e) => Wl(e, "editorSession"), pg = (e) => Wl(e, "nodeSurface"), hg = (e) => Wl(e, "previewNode");
function Pc(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const u_ = {
  editorSession() {
  },
  nodeSurface(e) {
    var t, r, n;
    try {
      (t = e.restore) == null || t.call(e);
    } catch {
    }
    clearTimeout(e.bootMinHeightTimer), clearTimeout(e.resizeSettleTimer), (n = (r = e.rasterCache) == null ? void 0 : r.dispose) == null || n.call(r);
  },
  previewNode(e) {
    var t, r;
    (r = (t = e.runtime) == null ? void 0 : t.teardown) == null || r.call(t);
  },
  mediaCache(e) {
    var t, r, n, i;
    e.linkedImages.forEach((o) => {
      Pc(o == null ? void 0 : o.img), Pc(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), Pc((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function d_(e, t) {
  const r = Wl(e, t);
  if (r)
    try {
      u_[t](r);
    } finally {
      delete vs.get(e)[t];
    }
}
function f_(e) {
  for (const t of Object.keys(fg))
    try {
      d_(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && vs.delete(e);
}
function bi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function p_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Jf(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, a = s ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(s.origin_slot ?? 0)) : null;
      a != null && a.outputNode && (n = a.outputNode);
    } catch {
    }
  return !n && r != null && (n = p_(e == null ? void 0 : e.graph, r)), n;
}
function h_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function m_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function g_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function mg({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (T) => {
    if (!T) return "";
    if (typeof T == "string") return String(T || "").trim();
    if (Array.isArray(T)) {
      if (T.length === 0) return "";
      if (T.length === 1) return i(T[0]);
      const W = String(T[0] || "").trim();
      if (W)
        return bi(t, {
          filename: W,
          subfolder: String(T[1] || "").trim(),
          type: String(T[2] || "output").trim() || "output"
        });
      for (const $ of T) {
        const U = i($);
        if (U) return U;
      }
      return "";
    }
    return typeof (T == null ? void 0 : T.src) == "string" && T.src ? T.src : typeof (T == null ? void 0 : T.url) == "string" && T.url ? T.url : bi(t, T);
  }, o = (T) => {
    if (!T || typeof T != "object") return "";
    const W = String(T.type || "").trim().toLowerCase();
    if (W === "dataurl") return String(T.value || "");
    if (W !== "comfy_image") return "";
    const $ = String(T.filename || "").trim();
    return $ ? bi(t, {
      filename: $,
      subfolder: String(T.subfolder || ""),
      type: String(T.storage || "input")
    }) : "";
  }, s = (T) => {
    const W = e == null ? void 0 : e.nodeOutputs;
    if (!W || T == null) return null;
    const $ = String(T);
    return W instanceof Map ? W.get(T) || W.get($) || W.get(Number($)) || null : W[T] || W[$] || null;
  }, a = (T, W) => {
    var U;
    const $ = s(T == null ? void 0 : T.id);
    return Array.isArray((U = $ == null ? void 0 : $.ui) == null ? void 0 : U[W]) ? $.ui[W] : Array.isArray($ == null ? void 0 : $[W]) ? $[W] : [];
  }, l = (T, W) => {
    const $ = s(T == null ? void 0 : T.id);
    return $ != null && $.ui && Object.prototype.hasOwnProperty.call($.ui, W) ? $.ui[W] : $ && Object.prototype.hasOwnProperty.call($, W) ? $[W] : null;
  }, c = (T, W) => {
    const $ = l(T, "pano_sticker_input_state_hash"), U = Array.isArray($) ? $[0] : $;
    return String(U ?? "").trim() || g_(W);
  }, d = (T) => {
    const W = [], $ = /* @__PURE__ */ new Set();
    for (const U of T || []) {
      const ve = i(U);
      !ve || $.has(ve) || ($.add(ve), W.push(ve));
    }
    return W;
  }, u = (T, W) => {
    var ve;
    const $ = [];
    Array.isArray(T == null ? void 0 : T.images) && T.images.length && $.push(T.images), Array.isArray((ve = T == null ? void 0 : T.ui) == null ? void 0 : ve.images) && T.ui.images.length && $.push(T.ui.images);
    const U = [];
    for (const ye of $)
      W >= 0 && W < ye.length && U.push(ye[W]), U.push(...ye);
    return U;
  }, f = (T, W) => {
    var M;
    const $ = String(W || "").trim();
    if (!$) return { src: "", sourceType: "", inputName: "" };
    const ve = (Array.isArray(T == null ? void 0 : T.inputs) ? T.inputs : []).findIndex((F) => String((F == null ? void 0 : F.name) || "") === $);
    if (ve < 0) return { src: "", sourceType: "", inputName: $ };
    const ye = T.graph ? T.getInputLink(ve) : null;
    if ((ye == null ? void 0 : ye.origin_id) == null) return { src: "", sourceType: "", inputName: $ };
    const de = ye.origin_id, ge = Jf(T, ve, de);
    if (!ge) return { src: "", sourceType: "", inputName: $ };
    const le = Number(ye.origin_slot ?? 0);
    let _e = [];
    try {
      _e = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(ge) || [] : [];
    } catch {
      _e = [];
    }
    if (Array.isArray(_e) && _e.length) {
      const F = [];
      le >= 0 && le < _e.length && F.push(_e[le]), F.push(..._e);
      const C = d(F.filter((ne) => !Aa(ne)));
      if (C.length)
        return { src: C[0], srcCandidates: C, sourceType: "appNodeImageUrls", inputName: $ };
    }
    const Y = s((ge == null ? void 0 : ge.id) ?? de), O = d(u(Y, le).filter((F) => !Aa(F))).map((F) => `${F}&pano_src=${mu(Y)}`);
    if (O.length)
      return { src: O[0], srcCandidates: O, sourceType: "nodeOutputs", inputName: $ };
    const B = Array.isArray(ge == null ? void 0 : ge.imgs) ? ge.imgs : [];
    if (B.length) {
      const F = [];
      le >= 0 && le < B.length && F.push(B[le]), F.push(...B);
      const C = d(F);
      if (C.length)
        return { src: C[0], srcCandidates: C, sourceType: "nodeImgs", inputName: $ };
    }
    const P = (M = ge == null ? void 0 : ge.widgets) == null ? void 0 : M.find((F) => String((F == null ? void 0 : F.name) || "").toLowerCase() === "image");
    if (P) {
      let F = i(P.value);
      if (F && !F.includes("/") && !F.includes(":") && (ge.comfyClass === "LoadImage" || ge.type === "LoadImage") && (F = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(F)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(F)}&type=input&subfolder=`), F) return { src: F, sourceType: "widget", inputName: $ };
    }
    return { src: "", sourceType: "", inputName: $ };
  }, m = (T, W = []) => {
    var U;
    const $ = Array.isArray(T == null ? void 0 : T.inputs) ? T.inputs : [];
    for (const ve of W) {
      const ye = $.findIndex((_e) => String((_e == null ? void 0 : _e.name) || "") === ve), de = ye >= 0 && T.graph ? T.getInputLink(ye) : null;
      if ((de == null ? void 0 : de.origin_id) == null) continue;
      const ge = s(((U = Jf(T, ye, de.origin_id)) == null ? void 0 : U.id) ?? de.origin_id), le = (Array.isArray(ge == null ? void 0 : ge.images) ? ge.images : []).find(Aa);
      return le ? `${bi(t, le)}&pano_src=${mu(ge)}` : "";
    }
    return "";
  }, x = (T, W = []) => {
    const $ = Array.isArray(W) ? W : [W];
    for (const U of $) {
      const ve = f(T, U);
      if (String((ve == null ? void 0 : ve.src) || "").trim()) return ve;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (T) => {
    const W = String(T || "").trim();
    if (!W) return [];
    if (h_(W)) return [W];
    const { filename: $, subfolder: U } = m_(W);
    return $ ? d([
      bi(t, { filename: $, subfolder: U, type: "temp" }),
      bi(t, { filename: $, subfolder: U, type: "output" }),
      bi(t, { filename: $, subfolder: U, type: "input" }),
      W
    ]) : [W];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (T) => {
      var W;
      try {
        (W = Mn(T)) == null || W.linkedImages.forEach(($, U, ve) => {
          var ye;
          $ != null && $.img && ((ye = n == null ? void 0 : n.isImageLoadFailed) != null && ye.call(n, $.img)) && ve.delete(U);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (T, W) => {
      var $;
      ($ = T == null ? void 0 : T.delete) == null || $.call(T, `__ui__${String(W || "")}`);
    },
    linkedValue: (T, W) => {
      var de, ge, le, _e;
      const $ = String(W || ""), U = Array.isArray(T == null ? void 0 : T.inputs) ? T.inputs.findIndex((Y) => String((Y == null ? void 0 : Y.name) || "") === $) : -1, ve = U >= 0 && T.graph ? T.getInputLink(U) : null;
      if (ve) {
        const Y = s(ve.origin_id), O = [
          Y == null ? void 0 : Y.output,
          Y == null ? void 0 : Y.result,
          (de = Y == null ? void 0 : Y.data) == null ? void 0 : de.output,
          (ge = Y == null ? void 0 : Y.data) == null ? void 0 : ge.result,
          (le = Y == null ? void 0 : Y.ui) == null ? void 0 : le.output,
          (_e = Y == null ? void 0 : Y.ui) == null ? void 0 : _e.result
        ];
        for (const B of O) {
          if (!Array.isArray(B)) continue;
          const P = B[Number(ve.origin_slot || 0)];
          if (typeof P == "string" && P.trim()) return P;
        }
      }
      const ye = Array.isArray(T == null ? void 0 : T.widgets) ? T.widgets.find((Y) => String((Y == null ? void 0 : Y.name) || "") === $) : null;
      return String((ye == null ? void 0 : ye.value) || "");
    },
    linkedVideoFile: m,
    loadPreferredExactLinkedImage: (T, W = [], $ = null, U = "") => {
      var z;
      const ve = Array.isArray(W) ? W : [W], ye = x(T, ve), ge = (Array.isArray(ye == null ? void 0 : ye.srcCandidates) && ye.srcCandidates.length ? ye.srcCandidates : [ye == null ? void 0 : ye.src]).map((w) => String(w || "").trim()).filter(Boolean);
      if (!ge.length) return null;
      const le = d(ge.flatMap((w) => g(w)));
      if (!le.length) return null;
      const _e = Mn(T).linkedImages, Y = String(U || ve.join("|") || "image_exact"), O = ge.join(`
`), B = _e.get(Y);
      if (B && B.srcRaw === O && B.img) return B.img;
      const P = r || globalThis.Image;
      if (typeof P != "function") return null;
      const M = new P();
      (z = n == null ? void 0 : n.markImageLoading) == null || z.call(n, M, O);
      const F = { srcRaw: O, resolvedSrc: "", img: M };
      _e.set(Y, F);
      let C = -1;
      const ne = (w) => {
        var Z, ie, be;
        w === "ready" ? (Z = n == null ? void 0 : n.markImageReady) == null || Z.call(n, M, O) : (ie = n == null ? void 0 : n.markImageFailed) == null || ie.call(n, M, O), $ == null || $(M), (be = T.setDirtyCanvas) == null || be.call(T, !0, !0);
      }, Q = () => {
        if (C += 1, C >= le.length) {
          ne("failed");
          return;
        }
        F.resolvedSrc = le[C], M.src = F.resolvedSrc;
      };
      return M.onload = () => ne("ready"), M.onerror = () => {
        if (C + 1 < le.length) {
          Q();
          return;
        }
        ne("failed");
      }, Q(), M;
    },
    output: s,
    resolvePreferredExactLinkedSource: x,
    source: i,
    uiImage: (T, W, $, U = null) => {
      var Y, O, B;
      const ve = a(T, W)[0] || null, ye = i(ve);
      if (!ye) return null;
      const de = `__ui__${W}`, ge = (Y = $ == null ? void 0 : $.get) == null ? void 0 : Y.call($, de);
      if (ge && ge.__panoSrc === ye) return ge;
      const le = r || globalThis.Image;
      if (typeof le != "function") return null;
      const _e = new le();
      return _e.__panoSrc = ye, (O = n == null ? void 0 : n.markImageLoading) == null || O.call(n, _e, ye), _e.onload = () => {
        var P;
        (P = n == null ? void 0 : n.markImageReady) == null || P.call(n, _e, ye), U == null || U(_e);
      }, _e.onerror = () => {
        var P;
        (P = n == null ? void 0 : n.markImageFailed) == null || P.call(n, _e, ye), U == null || U(_e);
      }, _e.src = ye, (B = $ == null ? void 0 : $.set) == null || B.call($, de, _e), _e;
    },
    uiList: a,
    uiValue: l
  };
}
const y_ = 1e-3;
function Md(e, t, r, n) {
  if (!_o(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(y_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function gg(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function b_(e, t) {
  return Math.floor(e * t.fps);
}
function Pd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const Zf = 4;
function Nd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, m) => f !== r[m])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = b_(a, l);
      for (let f = d; f < Math.min(r.length, d + Zf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + Zf) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function yg({
  readState: e,
  reduce: t,
  projectModel: r,
  publishLiveState: n = () => {
  },
  commitState: i,
  onChange: o = () => {
  }
} = {}) {
  if (typeof e != "function" || typeof t != "function" || typeof r != "function" || typeof i != "function")
    throw new TypeError("Node surface session requires readState, reduce, projectModel, and commitState.");
  let s = null, a = !1, l = !1;
  const c = () => s || e(), d = () => o(r(c()));
  return {
    model: () => r(c()),
    refresh() {
      return l ? this.model() : (d(), this.model());
    },
    beginGesture() {
      return l || s ? !1 : (s = e(), a = !1, d(), !0);
    },
    updateGesture(u) {
      if (l) return !1;
      s || this.beginGesture();
      const f = t(s, u);
      return f.changed ? (s = f.state, a = !0, n(s), d(), !0) : !1;
    },
    hasGestureChanges() {
      return s != null && a;
    },
    commitGesture() {
      if (l || !s) return !1;
      const u = a;
      return u && i(s), s = null, a = !1, n(null), d(), u;
    },
    cancelGesture() {
      return l || !s ? !1 : (s = null, a = !1, n(null), d(), !0);
    },
    apply(u) {
      if (l) return !1;
      s && this.commitGesture();
      const f = t(e(), u);
      return f.changed ? (i(f.state), d(), !0) : !1;
    },
    destroy() {
      if (l) return;
      l = !0;
      const u = s != null;
      s = null, a = !1, u && n(null);
    }
  };
}
const ho = { sky: ["direction", "roll", "size"], world: ["position", "rotation", "scale"] }, v_ = ["id", "source", "clip", "visible", "locked", "crop", "opacity", "handoff_overrides"];
function bg(e) {
  const t = Array.isArray(e) ? e[0] : e;
  return !t || typeof t != "object" || !ho[t.placement] || !t.lanes || typeof t.lanes != "object" ? null : { placement: t.placement, lanes: t.lanes, fps: ui(t.fps) };
}
function ei(e) {
  return structuredClone(e);
}
function S_(e, t) {
  return JSON.stringify(e) === JSON.stringify(t);
}
function __(e, t, r) {
  const n = e.fps ?? t;
  if (n === t) return e.lanes;
  const i = r.start - r.in, o = Math.floor(i * n / t + 0.5);
  return Object.fromEntries(Object.entries(e.lanes).map(([s, a]) => [s, {
    value: a.value,
    keyframes: (a.keyframes ?? []).map((l) => ({ ...l, frame: Math.floor((o + l.frame) * t / n + 0.5) - i }))
  }]));
}
function Ad(e, t, r) {
  const n = __(r, e.timeline.fps, t.clip);
  let i;
  if (t.placement === r.placement) {
    i = { ...t };
    for (const o of ho[r.placement]) t.handoff_overrides.includes(o) || (i[o] = n[o]);
  } else
    i = { ...Object.fromEntries(v_.map((o) => [o, t[o]])), placement: r.placement, ...n }, r.placement === "sky" && (i.z_index = e.stickers.reduce((o, s) => s.id !== t.id && s.placement === "sky" ? Math.max(o, s.z_index) : o, -1) + 1);
  return ei(ur({ version: 2, stickers: [i] }).stickers[0]);
}
function w_(e, t) {
  const r = e.stickers.findIndex((n) => n.source.kind === "port");
  return !t || r < 0 ? e : { ...e, stickers: e.stickers.map((n, i) => i === r ? Ad(e, n, t) : n) };
}
function x_(e, t) {
  const r = ho[e.placement];
  if (t.id !== e.id || t.placement !== e.placement) return e.handoff_overrides;
  const n = r.filter((i) => !S_(e[i], t[i]));
  if (n.length) {
    const i = /* @__PURE__ */ new Set([...e.handoff_overrides, ...n]);
    e.handoff_overrides = [...r, "opacity"].filter((o) => i.has(o));
  }
  return e.handoff_overrides;
}
function k_(e, t) {
  if (!t || t.id !== e.id) return ei(e);
  if (e.placement === t.placement) {
    const n = ei(e);
    for (const i of ho[e.placement]) e.handoff_overrides.includes(i) || (n[i] = ei(t[i]));
    return n;
  }
  if (e.handoff_overrides.some((n) => ho[e.placement].includes(n))) return ei(e);
  const r = ei(t);
  for (const n of ["clip", "visible", "locked", "crop", "opacity"]) r[n] = ei(e[n]);
  return r;
}
function M_(e, t, r, n) {
  return !t.handoff_overrides.includes(n) || t.placement !== r.placement ? !1 : (t.handoff_overrides = t.handoff_overrides.filter((i) => i !== n), t[n] = ei(Ad(e, t, r)[n]), !0);
}
const Ca = "sticker_image_1", vg = "external_image", mo = 0;
function Ia(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function Nc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function oi(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function gu(e, t = mo) {
  return (e == null ? void 0 : e.version) !== 2 ? oi(e) : oi(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Fi(r, t).active,
    external: r.source.kind === "port",
    ...pd(r, t)
  }));
}
function Cd(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && oi(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function Sg(e) {
  return String((e == null ? void 0 : e.id) || "") === Ca || String((e == null ? void 0 : e.source_kind) || "") === vg;
}
function Id(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : Sg(t);
}
const _g = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function wg(e) {
  return !Sg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(_g.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function xg(e) {
  const t = wg(e);
  return t ? _g.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function kg(e, t = {}) {
  var re, T, W;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex(($) => String(($ == null ? void 0 : $.id) || "") === Ca);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const $ = String(((re = e.active) == null ? void 0 : re.selected_sticker_id) || "") === Ca;
    return {
      state: {
        ...e,
        stickers: r.filter((U, ve) => ve !== n),
        active: $ ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), m = t.pose && typeof t.pose == "object" ? t.pose : {}, x = a ? m.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || m.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(x)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const $ = Ia(g, u, f), U = Number(((T = s == null ? void 0 : s.initial_pose) == null ? void 0 : T.hFOV_deg) ?? g), ve = Ia(U, u, f), ye = Number(((W = s == null ? void 0 : s.initial_pose) == null ? void 0 : W.vFOV_deg) ?? ve);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - $) <= 1e-6 && Math.abs(ye - ve) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((de, ge) => ge === n ? {
          ...de,
          vFOV_deg: $,
          initial_pose: de.initial_pose && typeof de.initial_pose == "object" ? { ...de.initial_pose, vFOV_deg: ve } : de.initial_pose
        } : de)
      },
      changed: !0
    };
  }
  const h = r.reduce(($, U) => Math.max($, Number((U == null ? void 0 : U.z_index) || 0)), -1), _ = {
    yaw_deg: Number(m.yaw_deg || 0),
    pitch_deg: Number(m.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? Ia(g, u, f) : Number(m.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || g),
    rot_deg: Number(m.rot_deg ?? m.roll_deg ?? 0)
  }, te = {
    ...s || {},
    id: Ca,
    source_kind: vg,
    source_link_id: i,
    source_state_hash: o,
    ..._,
    initial_pose: { ..._ },
    visible: !0,
    z_index: h + 1
  }, G = n >= 0 ? r.map(($, U) => U === n ? te : $) : [...r, te];
  return { state: { ...e, stickers: G }, changed: !0 };
}
function ul(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const P_ = ["IMAGE", "VIDEO"];
function Qf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => P_.includes(r)) ? "2d" : null;
}
function N_(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? Qf(n.type) ?? Qf((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Mg(e, { pose: t = null, handoff: r = null } = {}) {
  return {
    connected: ul(e, "sticker"),
    awaitingPose: !t && (ul(e, "sticker_state") || N_(e, "sticker") !== "2d"),
    pose: t,
    handoff: !!r
  };
}
function Pg(e) {
  return ul(e, "sticker") && ul(e, "sticker_state");
}
function A_(e, t) {
  return Pg(e) ? bg(t) : null;
}
function C_(e, t, r) {
  return w_(Cm(e, t), bg(r));
}
function ep(e, t, r = {}) {
  const n = t.keyframes ?? {}, i = {
    ...r,
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position, keyframes: n.position ?? [] },
    rotation: { value: t.rotation, keyframes: n.rotation ?? [] },
    scale: { value: t.scale, keyframes: n.scale ?? [] }
  };
  return ur({ version: 2, stickers: [i] }).stickers[0];
}
function Ng(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null, handoff: i = !1 } = {}) {
  var f;
  const o = e.stickers.findIndex((m) => Id(e, m)), s = o >= 0 ? e.stickers[o] : null;
  if (!t) {
    if (!s) return { state: e, changed: !1 };
    const m = ((f = e.active) == null ? void 0 : f.selected_sticker_id) === s.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((x, g) => g !== o),
        active: m ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (s && (n == null ? void 0 : n.placement) === "world" && n.replace && s.placement === "sky" && !i) {
    const m = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((g) => [g, s[g]])), x = ep(s.id, n, m);
    return { state: { ...e, stickers: e.stickers.map((g, h) => h === o ? x : g) }, changed: !0 };
  }
  if (s || r) return { state: e, changed: !1 };
  const a = { ...e }, l = Hl(a);
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...a, stickers: [...e.stickers, ep(l, n)] }, changed: !0 };
  const c = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), d = md(l, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: c,
    vFOV_deg: c
  }, oi(e).reduce((m, x) => Math.max(m, x.z_index), -1) + 1), u = (n == null ? void 0 : n.keyframes) ?? {};
  return d.direction.keyframes = u.direction ?? [], d.roll.keyframes = u.roll ?? [], d.size.keyframes = (u.size ?? []).map((m) => ({ ...m, value: { ...m.value, vFOV_deg: m.value.hFOV_deg } })), d.handoff_overrides = [], { state: { ...a, stickers: [...e.stickers, d] }, changed: !0 };
}
function Ed(e) {
  const t = oi(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: Nc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: Nc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: Nc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function Ag(e) {
  const t = Cd(e), r = Id(e, t), n = oi(e).some((a) => a && a.visible !== !1), i = Ed(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: xg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function I_(e) {
  var t, r;
  return {
    ...e,
    stickers: (Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : []).map((n) => ({ ...n })),
    painting: {
      ...(e == null ? void 0 : e.painting) || {},
      groups: (Array.isArray((t = e == null ? void 0 : e.painting) == null ? void 0 : t.groups) ? e.painting.groups : []).map((n) => ({ ...n })),
      raster_objects: (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.raster_objects) ? e.painting.raster_objects : []).map((n) => ({ ...n }))
    }
  };
}
function tp(e, t) {
  const r = Cd(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = I_(e), i = String(r.id || ""), o = Ed(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function E_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function O_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return kg(e, t.value);
  if (t.type === "sync-port") return Ng(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Ed(e).reduce((f, m) => Math.max(f, Number(m.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Ia(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, m = Hl(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, md(m, Ma(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: m }
        },
        changed: !0
      };
    }
    const u = { id: o, asset_id: s, ...d, z_index: l + 1 };
    return {
      state: {
        ...e,
        assets: { ...e.assets || {}, [s]: i.asset },
        stickers: [...Array.isArray(e.stickers) ? e.stickers : [], u],
        active: { ...e.active || {}, selected_sticker_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "select-sticker") {
    const i = String(t.id || "");
    return !i || !oi(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = Cd(e);
  if (!r) return { state: e, changed: !1 };
  if (t.type === "toggle-lock") {
    const i = r.locked !== !0;
    return {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, locked: i } : o)
      },
      changed: !0
    };
  }
  if (t.type === "restore-initial") {
    const i = wg(r);
    return !i || !xg(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return tp(e, "front");
  if (t.type === "send-back") return tp(e, "back");
  if (t.type === "delete-selected") {
    if (Id(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = oi({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = E_(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? pd(r, mo) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = tS(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Em(c, mo, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
    }
    return {
      state: {
        ...e,
        stickers: e.stickers.map((l) => l === r ? { ...l, ...a } : l)
      },
      changed: !0
    };
  }
  return { state: e, changed: !1 };
}
function F_(e = {}) {
  return yg({
    ...e,
    reduce: O_,
    projectModel: Ag
  });
}
const yu = 2;
function wi(e, t) {
  return Math.floor(e * t + 0.5);
}
function T_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function Cg({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: s, onChange: a }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const m = () => c && !d, x = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function g() {
    for (const M of f) M();
    f = [];
  }
  function h(M, F = {}) {
    return g(), u = { name: M, ...F }, a(), u;
  }
  function _(M, F, C) {
    const ne = () => {
      u === M && C();
    };
    e.addEventListener(F, ne), f.push(() => e.removeEventListener(F, ne));
  }
  function te(M, F) {
    let C = t.requestFrame(function ne(Q) {
      u === M && (F(Q), u === M && (C = t.requestFrame(ne)));
    });
    f.push(() => t.cancelFrame(C));
  }
  function G(M) {
    l = M, o(l);
  }
  function re() {
    return h(d ? "error" : "idle");
  }
  function T() {
    d = !0, re();
  }
  function W() {
    const { seekable: M } = e, F = M != null && M.length ? M.end(M.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(F) ? F : 1 / 0));
  }
  function $(M) {
    if (!m()) return M === "play" ? ge() : re();
    if (e.readyState < yu) {
      const F = h("loading", { then: M });
      return _(F, "loadeddata", () => $(F.then)), _(F, "error", T), F;
    }
    return M === "play" && l / r() >= Number(e.duration) ? ge() : U(M, !1);
  }
  function U(M, F) {
    const C = W();
    if (!e.ended && wi(Number(e.currentTime), r()) === wi(C, r())) return ve(M);
    const ne = h("seeking", { then: M, frame: l, retried: F });
    return _(ne, "seeked", () => {
      const Q = wi(Number(e.currentTime), r()) === wi(W(), r()), z = l === ne.frame;
      Q || z && ne.retried ? ve(ne.then) : U(ne.then, z);
    }), _(ne, "error", T), e.currentTime = C, ne;
  }
  function ve(M) {
    return M === "play" ? ye() : (s(), re());
  }
  function ye() {
    const M = h("playingVideo", { shown: !1 });
    if (_(M, "pause", () => e.ended ? de() : Y()), _(M, "ended", de), _(M, "error", T), i() && wi(Number(e.duration), r()) >= n()) {
      const C = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = C;
      });
    }
    const F = (C, ne) => {
      ne && !M.shown && (M.shown = !0, a()), le(wi(C, r()));
    };
    if (x()) {
      let C = e.requestVideoFrameCallback(function ne(Q, z) {
        u === M && (F(Number(z.mediaTime), !0), u === M && (C = e.requestVideoFrameCallback(ne)));
      });
      f.push(() => {
        var ne;
        return (ne = e.cancelVideoFrameCallback) == null ? void 0 : ne.call(e, C);
      });
    } else
      te(M, () => F(Number(e.currentTime), e.readyState >= yu));
    return Promise.resolve(e.play()).catch(() => {
      u === M && Y();
    }), M;
  }
  function de() {
    s(), ge();
  }
  function ge() {
    const M = h("playingClock", { startTs: t.now(), startFrame: l });
    return te(M, (F) => le(M.startFrame + Math.floor((F - M.startTs) / 1e3 * r()))), M;
  }
  function le(M) {
    if (M < n()) {
      G(M);
      return;
    }
    if (!i()) {
      _e(n() - 1);
      return;
    }
    u.name === "playingVideo" && (g(), e.pause()), G(0), $("play");
  }
  function _e(M) {
    u.name === "playingVideo" ? (g(), e.pause(), G(Math.max(0, M)), s()) : G(Math.max(0, M)), $("still");
  }
  function Y() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", a();
    else if (u.name === "playingVideo") {
      g(), e.pause();
      const M = T_(Number(e.currentTime), r());
      G(Math.min(M, n() - 1)), s(), l === M ? re() : $("still");
    } else u.name === "playingClock" && _e(Math.min(l, n() - 1));
  }
  function O() {
    if (!P()) {
      if (l >= n() - 1 && G(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", a();
        return;
      }
      $("play");
    }
  }
  function B(M) {
    const F = Math.max(0, Math.round(M));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", G(F), a();
      return;
    }
    u.name === "playingVideo" && (g(), e.pause()), G(F), $("still");
  }
  function P() {
    return u.name === "playingVideo" || u.name === "playingClock" || u.then === "play";
  }
  return {
    get frame() {
      return l;
    },
    get state() {
      return u.name;
    },
    get playing() {
      return P();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return u.name === "playingVideo" || u.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return u.name === "playingVideo" && u.shown;
    },
    play: O,
    stop: Y,
    seek: B,
    toggle() {
      P() ? Y() : O();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(M) {
      g(), c = !!M, d = !1, $("still");
    },
    dispose() {
      g(), c = !1, u = { name: "idle" };
    }
  };
}
function Od({ video: e, onCapture: t, onChange: r }) {
  let n = "", i = !1, o = { time: null, playing: !1, fps: 1 }, s = null, a = null, l = !1;
  function c(g) {
    a = g, t();
  }
  function d(g) {
    s = g, e.currentTime = g;
  }
  function u() {
    const g = l;
    f(), l !== g && r();
  }
  function f() {
    if (!n || i || e.readyState < yu) return;
    const { time: g, playing: h, fps: _ } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (h) {
      if (s !== null) return;
      const te = Number(e.duration), G = Number.isFinite(te) ? Math.min(g, te) : g, re = Math.abs(Number(e.currentTime) - G) > 1.5 / _;
      if (e.ended && !re) return;
      re && d(G), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(s !== null || a === g) && (Number(e.currentTime) === g ? c(g) : d(g));
  }
  const m = {
    loadeddata: u,
    // The VIDEO can drop below HAVE_CURRENT_DATA (a seek, a stall) while follow() is not called.
    canplay: u,
    seeked: () => {
      const g = s;
      s = null, !o.playing && g === o.time ? c(g) : u();
    },
    playing: () => {
      !o.playing || l || (l = !0, r());
    },
    error: () => {
      n && (i = !0, r());
    }
  };
  e.muted = !0;
  for (const [g, h] of Object.entries(m)) e.addEventListener(g, h);
  function x(g) {
    n = g, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: h = null, playing: _ = !1, fps: te }) {
      g !== n && (x(g), r()), o = { time: h, playing: _, fps: te }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, h) {
      return !n || i ? h : o.time === null ? null : o.playing && l ? e : a === null ? h : g;
    },
    dispose() {
      for (const [g, h] of Object.entries(m)) e.removeEventListener(g, h);
      x("");
    }
  };
}
function Ea(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function D_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const m = /* @__PURE__ */ new Set();
  let x = null, g = null;
  const h = () => i().timeline.fps, _ = (de) => de.stickers.find((ge) => ge.source.kind === "port"), te = () => {
    const de = i(), ge = _(de);
    return Pm(de, {
      minimum: Math.round(h() * 5),
      frames: Math.max(
        d ? Math.round(f * h()) : 0,
        x && ge ? gg(ge.clip, h(), x.meta) : 0
      ),
      camera: c
    });
  }, G = Cg({
    video: e,
    clock: n,
    fps: h,
    span: te,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: l
  }), re = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, T = () => {
    u && (m.add(u), l());
  }, W = Od({ video: t, onCapture: a, onChange: l }), $ = Nd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", re), e.addEventListener("error", T);
  function U(de) {
    de !== u && (u = de, e.pause(), de ? e.src = de : e.removeAttribute("src"), e.load(), G.setSource(!!de));
  }
  function ve() {
    G.playing && G.stop();
  }
  function ye(de) {
    const ge = _(de);
    g = x && ge ? Md(ge.clip, G.frame, de.timeline.fps, x.meta) : null, W.follow({
      src: (x == null ? void 0 : x.src) || "",
      time: g,
      playing: G.advancing,
      fps: de.timeline.fps
    });
  }
  return {
    get frame() {
      return G.frame;
    },
    get playing() {
      return G.playing;
    },
    get showsVideo() {
      return G.showsVideo;
    },
    get source() {
      return u;
    },
    pause: ve,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return x;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(de, ge) {
      return x != null && x.frames ? $.picture(x.frames, g, x.meta, ge) : W.picture(de, ge);
    },
    toggle() {
      G.playing ? G.stop() : G.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: de, sources: ge, state: le, sticker: _e = null }) {
      if (x = de ? _e : null, !de)
        return ve(), U(""), ye(le), !1;
      for (const M of m)
        ge.includes(M) || m.delete(M);
      const Y = ge.find((M) => M && !m.has(M)) || "", O = Y !== d;
      O && (d = Y, f = 0), U(d);
      const B = Mm(le, { camera: c }) || !!d && G.state !== "error" || !!x;
      return B || ve(), (O || !B || !G.playing && G.frame >= te()) && G.frame !== mo && G.seek(mo), ye(le), B;
    },
    dispose() {
      G.dispose(), W.dispose(), e.removeEventListener("loadedmetadata", re), e.removeEventListener("error", T), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const dl = Math.PI / 180, vr = 180 / Math.PI, L_ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), R_ = 260;
function np(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function Ig(e, t) {
  return t ? Ig(t, e % t) : e;
}
function V_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = Ig(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function Ss(e, t) {
  const r = np(e), n = np(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: V_(r, n) };
}
function Ii(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Eg(e) {
  const t = Ii(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Rr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function Fd(e, t, r = L_) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (h, _, te) => {
    const G = h + _, re = Math.max(0, te - 1), T = G > re && G > 0 ? re / G : 1;
    return [h * T, _ * T];
  }, [d, u] = c(l, s, n), [f, m] = c(o, a, i), x = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - m)
  }, g = od(x, t);
  return {
    x: x.x + (x.w - g.width) * 0.5,
    y: x.y + (x.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: x
  };
}
function $_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Fd({ width: r, height: n }, 1), o = Ie(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * dl * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = nm(l, Zh(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = z_(c, vo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = sd({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function Og(e) {
  return {
    yaw: Ht(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * vr),
    pitch: Ie(Math.asin(Ie(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * vr, -89.9, 89.9)
  };
}
function z_(e, t) {
  const r = Og(e), n = vo(r.yaw, r.pitch, 0), i = pc(t, e), o = {
    x: Number((t == null ? void 0 : t.x) || 0) - Number((e == null ? void 0 : e.x) || 0) * i,
    y: Number((t == null ? void 0 : t.y) || 0) - Number((e == null ? void 0 : e.y) || 0) * i,
    z: Number((t == null ? void 0 : t.z) || 0) - Number((e == null ? void 0 : e.z) || 0) * i
  }, s = Math.hypot(o.x, o.y, o.z);
  if (!(s > 1e-8)) return { ...r, roll: 0 };
  const a = {
    x: o.x / s,
    y: o.y / s,
    z: o.z / s
  };
  return {
    ...r,
    roll: Dl(Math.atan2(
      pc(a, n.up),
      pc(a, n.right)
    ) * vr)
  };
}
function Fg(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Fd({ width: r, height: n }, Li(e)), o = Oi(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = nm(e, Zh(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = Og(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ie(2 * Math.atan(r / (2 * o)) * vr, 1, 179)
  };
}
function j_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Oi(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = ad(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, m = n / i, x = Math.tan(Zc * dl), g = m >= 1 ? x : x * m, h = m >= 1 ? x / m : x;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / a) * vr,
      vFOV_deg: 2 * Math.atan(d / a) * vr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(g) * vr,
        vFOV_deg: 2 * Math.atan(h) * vr
      }
    }
  };
}
function Wi(e, t) {
  const r = Ii(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = t(r);
  return !n || n === r ? { state: e, changed: !1 } : {
    state: {
      ...e,
      shots: e.shots.map((i) => i === r ? n : i)
    },
    changed: !0
  };
}
function H_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Oi(r, e);
    return sd(od(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: wa(o, t) };
}
function rp(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = Ss(t, r);
  if (!o) return e;
  const s = Li(e) >= 1;
  n && o.ratio >= 1 !== s && (o = Ss(o.height, o.width));
  const a = H_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function Tg(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ii(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = Qh({
      id: n,
      yawDeg: t.yawDeg,
      pitchDeg: t.pitchDeg,
      rollDeg: t.rollDeg,
      viewFovDeg: t.viewFovDeg,
      frameFovDeg: t.frameFovDeg
    });
    return {
      state: {
        ...e,
        shots: [i],
        active: { ...e.active || {}, selected_shot_id: n }
      },
      changed: !0
    };
  }
  if (t.type === "delete-frame") {
    const n = Ii(e);
    if (!n) return { state: e, changed: !1 };
    const i = (Array.isArray(e.shots) ? e.shots : []).filter((s) => s !== n), o = ((r = i[0]) == null ? void 0 : r.id) == null ? null : String(i[0].id);
    return {
      state: {
        ...e,
        shots: i,
        active: { ...e.active || {}, selected_shot_id: o }
      },
      changed: !0
    };
  }
  if (t.type === "set-aspect")
    return Wi(e, (n) => rp(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Wi(e, (n) => {
      const o = String(Rr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? Ss(o[1], o[2]) : Ss(Li(n), 1);
      return s ? rp(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Wi(e, (i) => {
      const o = Dl(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Wi(e, (n) => {
    const i = em(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Wi(e, (n) => {
    const i = tm(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Wi(e, (n) => {
    const i = Rg(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Dg({
  frame: e,
  point: t,
  startRollDeg: r = 0,
  shiftKey: n = !1,
  altKey: i = !1,
  allowAlt: o = !1,
  deadZoneRatio: s = 0.05
} = {}) {
  const a = o && i ? "alt" : n ? "shift" : "";
  if (!a || !e || !t) return null;
  const l = {
    x: Number(e.x || 0),
    y: Number(e.y || 0),
    w: Math.max(1, Number(e.w ?? e.width ?? 1)),
    h: Math.max(1, Number(e.h ?? e.height ?? 1))
  }, c = {
    x: l.x + l.w * 0.5,
    y: l.y + l.h * 0.5
  }, d = Math.hypot(Number(t.x || 0) - c.x, Number(t.y || 0) - c.y);
  if (a === "shift" && d < Math.min(l.w, l.h) * s) return null;
  const u = Math.atan2(Number(t.y || 0) - c.y, Number(t.x || 0) - c.x);
  return {
    source: a,
    frame: l,
    center: c,
    startRollDeg: Number(r || 0),
    lastAngle: u,
    accumulatedRad: 0
  };
}
function Lg(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Xh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: Jh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function Rg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * dl, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, m = d * c + u * l, x = Number(e.pitch_deg || 0) * dl, g = Math.max(0.25, Math.abs(Math.cos(x)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(f) / g * vr),
    pitch_deg: Ie(Number(e.pitch_deg || 0) - Math.atan(m) * vr, -90, 90)
  };
}
function G_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return yg({
    readState: e,
    reduce: Tg,
    projectModel: Eg,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const je = Object.freeze({
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
}), K_ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, W_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: K_(t[2])
})), U_ = {
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
}, ip = Object.fromEntries(
  Object.entries(U_).map(([e, t]) => [e, {
    name: t.name,
    elements: W_(t.body)
  }])
), $t = {
  __name: "SvgIcon",
  props: {
    icon: { type: String, default: "" },
    className: { type: [String, Array, Object], default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => {
      const n = String(t.icon || "");
      return Object.prototype.hasOwnProperty.call(ip, n) ? ip[n] : null;
    });
    return (n, i) => r.value ? (Te(), De("svg", {
      key: 0,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: gt(["icon icon-tabler icons-tabler-outline", [
        r.value.name ? `icon-tabler-${r.value.name}` : "",
        e.className
      ]]),
      "aria-hidden": "true"
    }, [
      (Te(!0), De(Ze, null, Pt(r.value.elements, (o, s) => (Te(), De(Ze, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Te(), De("path", Or({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Te(), De("circle", Or({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Te(), De("rect", Or({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Te(), De("line", Or({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Te(), De("polyline", Or({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Te(), De("polygon", Or({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : ht("", !0)
      ], 64))), 128))
    ], 2)) : ht("", !0);
  }
}, en = {
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
    const t = e, r = dt(() => {
      const n = { ...t.attrs };
      return t.tag === "button" && n.type == null && (n.type = t.type), t.label && (n["aria-label"] = t.label), t.tip && (n["data-tip"] = t.tip), t.pressed != null && (n["aria-pressed"] = t.pressed), n;
    });
    return (n, i) => (Te(), Gn(Vy(e.tag), Or({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: mh(() => [
        Be($t, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, B_ = ["aria-expanded", "disabled"], Y_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, q_ = ["data-aspect", "disabled", "onClick"], X_ = { class: "pano-cutout-aspect-custom" }, J_ = ["disabled"], Z_ = ["disabled"], Q_ = ["data-custom-width", "data-custom-height", "disabled"], Vg = {
  __name: "PanoCutoutAspectPicker",
  props: {
    model: { type: Object, default: () => ({}) },
    mode: { type: String, default: "rail" }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = Object.freeze([
      { value: "1:1", label: "1:1" },
      { value: "4:3", label: "4:3" },
      { value: "3:2", label: "3:2" },
      { value: "16:9", label: "16:9" }
    ]), o = /* @__PURE__ */ qt("1"), s = /* @__PURE__ */ qt("1"), a = /* @__PURE__ */ qt(null), l = dt(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = dt(() => {
      const g = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], h = String(r.model.aspectLabel || "");
      return g.length ? g.map((_) => {
        const te = typeof _ == "string" ? _ : String((_ == null ? void 0 : _.value) || ""), G = typeof _ == "string" ? _ : String((_ == null ? void 0 : _.label) || te);
        return {
          ...typeof _ == "object" && _ ? _ : {},
          value: te,
          label: G,
          active: h ? te === h : (_ == null ? void 0 : _.active) === !0
        };
      }) : i.map((_) => ({
        ..._,
        active: _.value === h
      }));
    }), d = dt(() => {
      var h;
      const g = String(r.model.aspectLabel || "").trim();
      return g || String(((h = c.value.find((_) => _.active === !0)) == null ? void 0 : h.label) || "Aspect");
    });
    Ni(d, (g) => {
      const h = String(g || "").match(/^([0-9.]+):([0-9.]+)$/);
      h && (o.value = h[1], s.value = h[2]);
    }, { immediate: !0 });
    function u(g) {
      n("action", g);
    }
    function f(g) {
      var h;
      r.model.aspectOpen === !0 && ((h = a.value) != null && h.contains(g.target) || u({ type: "close-aspect" }));
    }
    Il(() => {
      document.addEventListener("pointerdown", f, !0);
    }), Ps(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function m(g) {
      const [h, _] = String(g.value || "").split(":");
      u({
        type: "set-aspect",
        width: h,
        height: _,
        preserveOrientation: !0
      });
    }
    function x() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (g, h) => (Te(), De("div", {
      ref_key: "rootElement",
      ref: a,
      class: gt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Te(), Gn(en, {
        key: 0,
        icon: e.model.aspectIcon || tt(je).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: h[0] || (h[0] = (_) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Te(), De("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: h[1] || (h[1] = (_) => u({ type: "toggle-aspect" }))
      }, [
        Be($t, {
          icon: e.model.aspectIcon || tt(je).aspect
        }, null, 8, ["icon"]),
        ke("span", null, nt(d.value), 1),
        Be($t, {
          icon: tt(je).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, B_)),
      zr(ke("div", Y_, [
        (Te(!0), De(Ze, null, Pt(c.value, (_) => (Te(), De("button", {
          key: _.value,
          class: gt(["pano-btn pano-frame-aspect-choice", { active: _.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": _.value,
          disabled: l.value,
          onClick: (te) => m(_)
        }, nt(_.label), 11, q_))), 128)),
        ke("div", X_, [
          zr(ke("input", {
            "onUpdate:modelValue": h[2] || (h[2] = (_) => o.value = _),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, J_), [
            [Af, o.value]
          ]),
          h[4] || (h[4] = ke("span", { "aria-hidden": "true" }, ":", -1)),
          zr(ke("input", {
            "onUpdate:modelValue": h[3] || (h[3] = (_) => s.value = _),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, Z_), [
            [Af, s.value]
          ]),
          ke("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: x
          }, "Apply", 8, Q_)
        ])
      ], 512), [
        [Ei, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, ew = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, tw = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ qt(!1), r = Object.freeze([
      ["Drag", "Pan view"],
      ["Shift + Drag", "Roll frame"],
      ["Wheel", "Adjust FOV"],
      ["Add / Delete", "Add or remove frame"],
      ["Aspect / Rotate", "Set output shape"],
      ["Double-click roll", "Reset to 0°"],
      ["Full Editor", "Detailed editing"]
    ]);
    return (n, i) => (Te(), De("div", {
      class: gt(["pano-cutout-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = At(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = At(() => {
      }, ["stop"]))
    }, [
      Be(en, {
        icon: tt(je).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = At((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ke("div", ew, [
        i[3] || (i[3] = ke("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Te(!0), De(Ze, null, Pt(tt(r), (o) => (Te(), De("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          ke("kbd", null, nt(o[0]), 1),
          ke("span", null, nt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, nw = {
  class: "pano-view-unavailable",
  role: "status"
}, Ul = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Te(), De("div", nw, nt(tt(tg)), 1));
  }
}, rw = { class: "pano-cutout-node-surface" }, iw = ["title", "disabled"], ow = { class: "value" }, sw = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, aw = {
  __name: "PanoCutoutNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    function r(n) {
      var i;
      (i = t.onAction) == null || i.call(t, n);
    }
    return (n, i) => (Te(), De("div", rw, [
      ke("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = At(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = At(() => {
        }, ["stop"]))
      }, [
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Be($t, {
            icon: tt(je).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = ke("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(en, {
          icon: e.model.hasShot ? tt(je).delete : tt(je).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(Vg, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        ke("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = At((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Be($t, {
            icon: tt(je).roll
          }, null, 8, ["icon"]),
          ke("span", ow, nt(e.model.rollLabel || "0.0°"), 1)
        ], 40, iw),
        Be(en, {
          icon: tt(je).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Be(tw)
      ], 32),
      e.model.hasShot === !1 ? (Te(), De("div", sw, " Choose a view · + Add Frame ")) : ht("", !0),
      e.model.viewUnavailable ? (Te(), Gn(Ul, { key: 1 })) : ht("", !0)
    ]));
  }
}, $g = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ qt(null);
    let o, s = !1;
    function a() {
      if (!s) return { active: !1, intent: void 0 };
      const u = o;
      return o = void 0, s = !1, { active: !0, intent: u };
    }
    function l(u) {
      const f = i.value;
      return f instanceof HTMLInputElement ? (o = u, s = !0, f.value = "", f.click(), !0) : !1;
    }
    function c(u) {
      var g, h;
      const { active: f, intent: m } = a();
      if (!f) return;
      const x = ((h = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : h[0]) || null;
      if (x) {
        n("file-selected", { intent: m, file: x });
        return;
      }
      n("file-cancelled", { intent: m });
    }
    function d() {
      const { active: u, intent: f } = a();
      u && n("file-cancelled", { intent: f });
    }
    return t({ open: l }), (u, f) => (Te(), De("input", {
      ref_key: "inputRef",
      ref: i,
      hidden: "",
      type: "file",
      accept: "image/*",
      tabindex: "-1",
      "aria-hidden": "true",
      onChange: c,
      onCancel: d
    }, null, 544));
  }
}, lw = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, cw = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ qt(!1), r = Object.freeze([
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
    return (n, i) => (Te(), De("div", {
      class: gt(["pano-stickers-node-help", { "is-pinned": t.value }]),
      onPointerdown: i[1] || (i[1] = At(() => {
      }, ["stop"])),
      onWheel: i[2] || (i[2] = At(() => {
      }, ["stop"]))
    }, [
      Be(en, {
        icon: tt(je).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = At((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      ke("div", lw, [
        i[3] || (i[3] = ke("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Te(!0), De(Ze, null, Pt(tt(r), (o) => (Te(), De("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          ke("kbd", null, nt(o[0]), 1),
          ke("span", null, nt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, uw = { class: "pano-stickers-node-surface" }, dw = ["disabled"], fw = ["aria-label", "data-tip"], pw = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, hw = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, mw = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ qt(null);
    function n(s) {
      var a;
      (a = t.onAction) == null || a.call(t, s);
    }
    function i() {
      var s, a;
      (a = (s = r.value) == null ? void 0 : s.open) == null || a.call(s, "add");
    }
    function o(s) {
      n({ type: "add-image-file", file: (s == null ? void 0 : s.file) || null });
    }
    return (s, a) => (Te(), De("div", uw, [
      ke("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = At(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = At(() => {
        }, ["stop"]))
      }, [
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Be($t, {
            icon: tt(je).fullscreen
          }, null, 8, ["icon"]),
          a[10] || (a[10] = ke("span", { class: "label" }, "Full Editor", -1))
        ]),
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Be($t, {
            icon: tt(je).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = ke("span", { class: "label" }, "Add Image", -1))
        ], 8, dw),
        Be(en, {
          icon: e.model.locked ? tt(je).lock_closed : tt(je).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(en, {
          icon: tt(je).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(en, {
          icon: tt(je).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(en, {
          icon: e.model.isExternalSelection ? tt(je).back_initial : tt(je).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(cw)
      ], 32),
      e.model.playable === !0 ? (Te(), De("button", {
        key: 0,
        class: "pano-btn pano-btn-icon pano-stickers-node-play",
        type: "button",
        "data-action": "toggle-playback",
        "aria-label": e.model.playing ? "Pause" : "Play",
        "data-tip": e.model.playing ? "Pause" : "Play",
        onPointerdown: a[7] || (a[7] = At(() => {
        }, ["stop"])),
        onWheel: a[8] || (a[8] = At(() => {
        }, ["stop"])),
        onClick: a[9] || (a[9] = (l) => n({ type: "toggle-playback" }))
      }, [
        Be($t, {
          icon: e.model.playing ? tt(je).pause : tt(je).play
        }, null, 8, ["icon"])
      ], 40, fw)) : ht("", !0),
      e.model.hasStickers === !1 ? (Te(), De("div", pw, " Add Image to place a sticker ")) : ht("", !0),
      e.model.dropActive === !0 ? (Te(), De("div", hw, "Drop image to add")) : ht("", !0),
      Be($g, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Te(), Gn(Ul, { key: 3 })) : ht("", !0)
    ]));
  }
}, gw = { class: "pano-studio-node-surface" }, yw = {
  class: "pano-studio-node-status",
  role: "status"
}, bw = { class: "pano-studio-node-shot" }, vw = { class: "pano-studio-node-size" }, Sw = { class: "pano-studio-node-note" }, _w = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), De("div", gw, [
      ke("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = At(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = At(() => {
        }, ["stop"]))
      }, [
        ke("div", yw, [
          ke("span", bw, nt(e.model.status.shot), 1),
          ke("span", vw, nt(e.model.status.size), 1),
          ke("span", Sw, nt(e.model.status.note), 1)
        ]),
        ke("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: n[0] || (n[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Be($t, {
            icon: tt(je).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = ke("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Te(), Gn(Ul, { key: 0 })) : ht("", !0)
    ]));
  }
}, ww = 2048, bu = 4096, Oa = (e) => Math.floor(e + 0.5), ca = (e) => Math.max(2, 2 * Oa(e / 2));
function zg(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function xw(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? Rl.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, Oa(e.timeline.length)) : t.length ? n = Math.max(1, Oa(Math.max(...t))) : r.length && (n = Math.max(1, Oa(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function kw(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = ww : s = Math.floor(i * 360 / n);
  const a = zg(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((m) => Ll(a, m).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [ca(c), ca(d)];
  if (Math.max(...u) <= bu) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = bu / Math.max(c, d);
  return { width: ca(c * f), height: ca(d * f), reducedFrom: u, defaulted: o };
}
function jg(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function Mw({ stateText: e = "", outputSize: t, coverage: r, bgColor: n = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === jg(e, t, String(r), n) } : null;
}
function Pw(e) {
  return e ? ci(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const Ac = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function Nw(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = zg(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === jg(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: Ac[a] };
    d = kw(e, xw(e), r, n, o);
  }
  const u = Ac[a] ? [Ac[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${bu} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function Aw() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, Nw(r(), { ...t, bgWidth: n }));
  };
}
const op = 24;
function Cw(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function ss(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function Hg(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function vu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => ss(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return ss(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Hg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function Iw(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => ss(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = n ? e.corners.findIndex((s) => ss(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return ss(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Hg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Td(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function Gg(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Ro(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ie(r.x, -n, t.width + n),
    y: Ie(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function Ew(e) {
  const t = vo(
    Number((e == null ? void 0 : e.yaw_deg) || 0),
    Number((e == null ? void 0 : e.pitch_deg) || 0),
    Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0)
  );
  return {
    centerDir: t.fwd,
    right: t.right,
    up: t.up,
    tanX: Math.tan(Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20), 0.1, 179) * wt * 0.5),
    tanY: Math.tan(Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20), 0.1, 179) * wt * 0.5)
  };
}
function vi(e, t, r) {
  return id(Ba(
    Ba(e.centerDir, Ya(e.right, t)),
    Ya(e.up, r)
  ));
}
function Dd(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = Ew(e), n = Ro(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    vi(r, -r.tanX, r.tanY),
    vi(r, r.tanX, r.tanY),
    vi(r, r.tanX, -r.tanY),
    vi(r, -r.tanX, -r.tanY)
  ].map((f) => Ro(f, t)), o = Array.from({ length: 4 }, (f, m) => {
    const x = [];
    for (let g = 0; g <= 28; g += 1) {
      const h = g / 28;
      let _, te;
      m === 0 ? (_ = -r.tanX + 2 * r.tanX * h, te = r.tanY) : m === 1 ? (_ = r.tanX, te = r.tanY - 2 * r.tanY * h) : m === 2 ? (_ = r.tanX - 2 * r.tanX * h, te = -r.tanY) : (_ = -r.tanX, te = -r.tanY + 2 * r.tanY * h);
      const G = Ro(vi(r, _, te), t);
      G && x.push({ x: G.x, y: G.y });
    }
    return x;
  }), s = Ro(vi(r, 0, r.tanY), t), a = Ro(
    vi(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
    t
  ), l = [n, ...i, s, a];
  if (l.some((f) => !f || !Number.isFinite(f.x) || !Number.isFinite(f.y)))
    return { visible: !1 };
  if (!l.some((f) => f.rawZ > 1e-4)) return { visible: !1 };
  const c = a.x - s.x, d = a.y - s.y, u = Math.hypot(c, d) || 1;
  return {
    center: { x: n.x, y: n.y },
    corners: i.map((f) => ({ x: f.x, y: f.y })),
    boundaryEdges: o,
    rotateStemBase: { x: s.x, y: s.y },
    rotateHandle: {
      x: s.x + c / u * op,
      y: s.y + d / u * op
    },
    visible: !0
  };
}
function sp(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: Dd(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = vu(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = vu(s.geometry, r);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function Ow(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Ht(Math.atan2(n.x, n.z) * tn),
    pitch_deg: Math.asin(Ie(n.y, -1, 1)) * tn
  };
}
function Fw(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function Tw(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * tn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let ua = null;
function Ld() {
  return ua || (ua = new Promise((e) => {
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
    const r = document.createElement("link");
    r.id = "pano-suite-style-link", r.rel = "stylesheet", r.href = new URL("./pano_editor.css", import.meta.url).toString(), r.addEventListener("load", () => {
      r.dataset.loaded = "true", e();
    }, { once: !0 }), r.addEventListener("error", () => e(), { once: !0 }), document.head.appendChild(r);
  }), ua);
}
function Un(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Dw(e, t = 1024) {
  const r = Math.max(1, Math.round(Un(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Un(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function Lw(e, t, r) {
  const n = Un(t), i = Un(r), o = e == null ? void 0 : e.bbox;
  if (!o || n < 1 || i < 1) return null;
  const s = Un(o.u0), a = Un(o.v0), l = Un(o.u1), c = Un(o.v1);
  if (l <= s || c <= a) return null;
  const d = (e == null ? void 0 : e.transform) || {};
  return {
    centerX: ((s + l) * 0.5 + Un(d.du)) * n,
    centerY: ((a + c) * 0.5 + Un(d.dv)) * i,
    width: (l - s) * n,
    height: (c - a) * i,
    rotationRad: Un(d.rot_deg) * Math.PI / 180,
    scale: Math.max(0.01, Un(d.scale, 1)),
    wrapOffsets: [-n, 0, n]
  };
}
function Rw(e, t, r) {
  const n = String((e == null ? void 0 : e.rasterDataUrl) || ""), i = (e == null ? void 0 : e.bbox) || {}, o = (e == null ? void 0 : e.transform) || {};
  return [
    String((e == null ? void 0 : e.id) || ""),
    t,
    r,
    n.length,
    n.slice(-24),
    i.u0,
    i.v0,
    i.u1,
    i.v1,
    o.du,
    o.dv,
    o.rot_deg,
    o.scale
  ].join(":");
}
function Vw() {
  const e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Map();
  function r() {
    if (!(e.size <= 16))
      for (const [o, s] of e) {
        if (e.size <= 16) break;
        s.settled && (s.image.onload = null, s.image.onerror = null, e.delete(o));
      }
  }
  function n(o, s) {
    let a = e.get(o);
    if (a)
      return e.delete(o), e.set(o, a), !a.settled && typeof s == "function" && a.listeners.add(s), a.image;
    const l = new Image();
    a = { image: l, listeners: new Set(typeof s == "function" ? [s] : []), settled: !1 }, e.set(o, a);
    const c = () => {
      a.settled = !0;
      const d = [...a.listeners];
      a.listeners.clear(), d.forEach((u) => u()), r();
    };
    return l.onload = c, l.onerror = c, l.src = o, r(), l;
  }
  function i(o, s, a, l = null) {
    if (!o || o.visible === !1 || String(o.layerKind || "paint") !== "paint") return null;
    const c = String(o.rasterDataUrl || "").trim(), d = Lw(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = Rw(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, m = t.get(f);
    if ((m == null ? void 0 : m.revision) === u) return { source: m.source, revision: u };
    const x = n(c, l), g = Number(x.naturalWidth || x.width || 0), h = Number(x.naturalHeight || x.height || 0);
    if (!x.complete || g < 1 || h < 1) return null;
    const _ = rn({ label: "raster-object" });
    _.width = Math.max(1, Math.round(s)), _.height = Math.max(1, Math.round(a));
    const te = _.getContext("2d");
    return te ? (d.wrapOffsets.forEach((G) => {
      te.save(), te.translate(d.centerX + G, d.centerY), te.rotate(d.rotationRad), te.scale(d.scale, d.scale), te.drawImage(
        x,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), te.restore();
    }), t.set(f, { revision: u, source: _ }), { source: _, revision: u }) : null;
  }
  return {
    get: i,
    retain(o = []) {
      const s = new Set(Array.from(o, (a) => String(a || "").trim()).filter(Boolean));
      for (const a of t.keys())
        s.has(a) || t.delete(a);
    },
    dispose() {
      e.forEach((o) => {
        o.listeners.clear(), o.image.onload = null, o.image.onerror = null;
      }), e.clear(), t.clear();
    }
  };
}
function $w(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function zw(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function jw({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, m, x) {
    if (!u || typeof x != "function" || m.settled) return;
    let g = n.get(u);
    g || (g = /* @__PURE__ */ new Map(), n.set(u, g));
    const h = g.get(f);
    if ((h == null ? void 0 : h.entry) === m) {
      h.callback = x;
      return;
    }
    o(h);
    const _ = { owner: u, key: f, entry: m, callback: x };
    g.set(f, _), m.listeners.add(_);
  }
  function a(u, f) {
    u.settled || (u.settled = !0, u.image.onload = null, u.image.onerror = null, !f && r.get(u.key) === u && r.delete(u.key), [...u.listeners].forEach((m) => {
      o(m);
      try {
        m.callback(u.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(u) {
    if (!(r.size <= u))
      for (const [f, m] of r) {
        if (r.size <= u) break;
        !m.settled || m.listeners.size > 0 || (m.image.onload = null, m.image.onerror = null, r.delete(f));
      }
  }
  function c(u, f, m, x = null) {
    const g = String(f || ""), h = String(m || "");
    if (!g || !h) return null;
    let _ = r.get(g);
    if (_)
      r.delete(g), r.set(g, _);
    else {
      l(i - 1);
      const G = e || globalThis.Image;
      if (typeof G != "function") return null;
      const re = new G();
      _ = { key: g, image: re, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(g, _), re.onload = () => a(_, !0), re.onerror = () => a(_, !1), re.src = h;
    }
    return _.settled || _.image.complete && Number(_.image.naturalWidth || _.image.width || 0) > 0 || s(u, g, _, x), _.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const Go = /* @__PURE__ */ new WeakMap();
function Kg(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = Go.get(e);
  n || (n = [], Go.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = Go.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && Go.delete(e);
  };
}
function ni(e, ...t) {
  const r = Go.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const Fa = Object.freeze({
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
}), Wg = "PanoramaSuite.Editor.ViewControls", Hw = {
  id: Wg,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Fa).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function Gw(e) {
  return Object.hasOwn(Fa, e) ? Fa[e] : Fa.default;
}
function Kw(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function Ww(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const fl = "state_json";
function $r(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function Uw(e) {
  var s, a;
  const t = $r(e, fl);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = Am(r, {
    coverage: (s = $r(e, "coverage")) == null ? void 0 : s.value
  }), i = Tg(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function Rd(e, t) {
  if (!e || Hn(e).coverageSyncInstalled) return;
  const r = $r(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, m, x, g;
    const o = n ? n(...i) : void 0, s = Hn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = Vr(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = St(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (m = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || m.call(f, !0, !0), (g = (x = t == null ? void 0 : t.canvas) == null ? void 0 : x.setDirty) == null || g.call(x, !0, !0), o;
  }, Hn(e).coverageSyncInstalled = !0;
}
function Bw(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function ap(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Yw(e) {
  var d, u, f, m, x, g;
  if (!e) return;
  const t = $r(e, "coverage"), r = $r(e, "bg_color"), n = $r(e, fl), i = $r(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && Bw(o) && (ap(s) || s === ""))) return;
  let c = "360";
  if (ap(s))
    try {
      c = String(Rn((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (m = n.callback) == null || m.call(n, s), i && (i.value = a, (x = i.callback) == null || x.call(i, a)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function Ta(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function Su(e, t, r) {
  var o, s;
  if (!e || typeof e.addWidget != "function") return null;
  let i = (Array.isArray(e.widgets) ? e.widgets : []).find((a) => String((a == null ? void 0 : a.name) || "") === String(t));
  if (i) {
    i.callback = r, i.hidden = !1, i.__panoHidden = !1, i.type = "button", i.options = { ...i.options || {}, hidden: !1 }, typeof i.__panoComputeSizeBeforeHide == "function" && (i.computeSize = i.__panoComputeSizeBeforeHide), delete i.__panoComputeSizeBeforeHide, (o = i.element) != null && o.style && (i.element.style.display = ""), (s = i.parentEl) != null && s.style && (i.parentEl.style.display = "");
    const a = typeof i.computeSize == "function" ? i.computeSize() : null;
    return (!Array.isArray(a) || Number(a[0] || 0) <= 0 || Number(a[1] || 0) <= 0) && (i.computeSize = () => {
      var l;
      return [Math.max(120, Number(((l = e == null ? void 0 : e.size) == null ? void 0 : l[0]) || 0) - 20), 30];
    }), i;
  }
  return i = e.addWidget("button", t, null, r), i && (i.serialize = !1), i;
}
async function qw(e, { tolerateOperationFailure: t = !1 } = {}) {
  var n;
  const r = (n = Hn(e)) == null ? void 0 : n.pendingStickerUploads;
  if (r)
    for (; r.size > 0; ) {
      const i = Array.from(r.entries());
      t ? await Promise.allSettled(i.map(([, o]) => o)) : await Promise.all(i.map(([, o]) => o)), i.forEach(([o, s]) => {
        r.get(o) === s && r.delete(o);
      });
    }
}
function Ko(e, t, r) {
  if (!e || typeof r != "function")
    return Promise.reject(new TypeError("A node and sticker operation are required."));
  const n = Hn(e), i = n.stickerOperationTail, s = (i && typeof i.then == "function" ? i.catch(() => {
  }) : Promise.resolve()).then(() => r()), a = s.catch(() => {
  });
  n.stickerOperationTail = a, n.pendingStickerUploads.set(t, s);
  const l = () => {
    n.pendingStickerUploads.get(t) === s && n.pendingStickerUploads.delete(t);
  };
  return s.then(l, l), a.then(() => {
    n.stickerOperationTail === a && (n.stickerOperationTail = null);
  }), s;
}
async function Ug(e, t = {}) {
  var n, i, o;
  await qw(e, t);
  const r = Array.from(((n = Hn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = cl(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function Xw(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await Ug(e), r ? r.apply(this, n) : this.value;
  };
}
function Jw(e) {
  var r;
  const t = St(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function Bg(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return f_(this), r;
  };
}
function Zw(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Cc(e, {
  app: t,
  matchType: r,
  buttonText: n,
  openEditor: i,
  attachStickers: o,
  attachCutout: s,
  enableStickersPreview: a,
  sceneStateV2: l = !1,
  studio: c = !1
}) {
  if (!(e != null && e.prototype)) return;
  function d(u) {
    var g;
    const f = `editor_btn|${r}`, m = St(u);
    if (m.attached === !0 && m.mountKey === f) return;
    Jw(u), Rd(u, t), Ta(u, fl);
    const x = $r(u, fl);
    if (Xw(u, x), x && !x.__panoPreviewPatchedCb) {
      x.__panoPreviewPatchedCb = !0;
      const h = x.callback;
      x.callback = (_) => {
        var G;
        const te = h ? h(_) : void 0;
        return (G = u.setDirtyCanvas) == null || G.call(u, !0, !1), te;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const h = $r(u, "bg_color");
      !l && h && (h.value == null || String(h.value).trim() === "" || String(h.value).toLowerCase() === "#000000") && (h.value = "#00ff00", (g = h.callback) == null || g.call(h, "#00ff00")), Su(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), m.stickers && Ta(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), m.attached = !0, m.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, Su(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), m.cutout && Ta(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), m.attached = !0, m.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const m = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && Uw(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && Yw(this);
      const x = St(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && x && ni(this, "attach"), m;
    };
  }
  Bg(e);
}
function Qw(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return Zw(this), n;
  }, Bg(e);
}
function ex(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
  requestFrame: i
}) {
  const o = Vr(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if (Vr(e) !== o) return;
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = o.installProbeTries + 1;
    if (o.installProbeTries = l, !a && l < 40) {
      i(s);
      return;
    }
    Rd(e, t);
    const c = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    Su(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Ta(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function tx({
  app: e,
  openEditor: t,
  attachStickers: r,
  attachCutout: n,
  attachPreview: i,
  restoreOutput: o,
  requestFrame: s,
  enableStickersPreview: a = !1
}) {
  return {
    name: "ComfyUI.PanoramaSuite.Editor",
    // ComfyUI shows these in its settings dialog and saves them.
    settings: [Hw, fv],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Of],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Of.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Cc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Cc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Cc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), qa(d) && Qw(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      St(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      Rd(l, e), qa(c) && ex(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const nx = /\.(png|jpe?g|webp|gif|bmp)$/i;
function rr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : nx.test(String(e.name || "")) : !1;
}
function Vd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => rr(r)) : !1;
}
function rx(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (Vd(l == null ? void 0 : l.dataTransfer)) {
      i(l);
      try {
        l.dataTransfer.dropEffect = "copy";
      } catch {
      }
      r(!0);
    }
  }, s = (l) => {
    var c;
    l != null && l.relatedTarget && ((c = e.contains) != null && c.call(e, l.relatedTarget)) || r(!1);
  }, a = (l) => {
    var d;
    const c = Array.from(((d = l == null ? void 0 : l.dataTransfer) == null ? void 0 : d.files) || []).find((u) => rr(u));
    if (!c) {
      r(!1);
      return;
    }
    i(l), r(!1), n(c);
  };
  return e.addEventListener("dragenter", o, !0), e.addEventListener("dragover", o, !0), e.addEventListener("dragleave", s, !0), e.addEventListener("drop", a, !0), () => {
    e.removeEventListener("dragenter", o, !0), e.removeEventListener("dragover", o, !0), e.removeEventListener("dragleave", s, !0), e.removeEventListener("drop", a, !0), r(!1);
  };
}
async function Wo(e, t = {}) {
  var s, a, l, c;
  if (!rr(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((a = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : a.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const d = await new Promise((u, f) => {
      const m = new r();
      m.onload = () => u(m), m.onerror = () => f(new Error("image load failed")), m.src = o;
    });
    return {
      image: d,
      width: Math.max(1, Number(d.naturalWidth || d.width || 1)),
      height: Math.max(1, Number(d.naturalHeight || d.height || 1))
    };
  } finally {
    i == null || i(o);
  }
}
async function xi(e, { fetchApi: t } = {}) {
  if (!rr(e)) throw new TypeError("A supported image file is required.");
  if (typeof t != "function") throw new TypeError("fetchApi is required.");
  const r = new FormData();
  r.append("image", e), r.append("type", "input"), r.append("subfolder", "panorama_stickers");
  const n = await t("/upload/image", { method: "POST", body: r });
  if (!n || n.status !== 200)
    throw new Error(`upload failed (${(n == null ? void 0 : n.status) || "no-response"})`);
  const i = await n.json(), o = String((i == null ? void 0 : i.name) || "").trim();
  if (!o) throw new Error("upload response missing filename");
  return {
    type: "comfy_image",
    filename: o,
    subfolder: String((i == null ? void 0 : i.subfolder) || "panorama_stickers"),
    storage: String((i == null ? void 0 : i.type) || "input"),
    name: String((e == null ? void 0 : e.name) || "sticker.png")
  };
}
const lp = /* @__PURE__ */ new WeakSet(), cp = /* @__PURE__ */ new WeakSet();
let up = 0;
function _u(e) {
  if (!e || typeof e != "object" || cp.has(e)) return e;
  const t = String(e.type || "preview");
  return up += 1, e.type = `${t}:pano-${up}`, cp.add(e), e;
}
function pl(e) {
  if (!e || typeof e != "object" || lp.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, lp.add(e), e;
}
function Yg(e, t) {
  var n, i;
  if (!t || ((i = (n = pl(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function ix({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: jt } = ga;
e_((e) => si(e.id));
t_(pn);
const $d = jw(), { linkedVideoFile: qg } = mg({ app: jt, api: pn });
function wu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (ga == null ? void 0 : ga.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const ox = "pano_suite.ui_settings.v1", sx = 120, ax = 2048;
function dp() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(ox)) || "").trim();
    if (!r) return e;
    const n = JSON.parse(r);
    return {
      invert_view_x: !!(n != null && n.invert_view_x),
      invert_view_y: !!(n != null && n.invert_view_y)
    };
  } catch {
    return e;
  }
}
function lx() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Vo(e) {
  var r, n, i, o, s;
  if (!e) return null;
  const t = (r = e.getBoundingClientRect) == null ? void 0 : r.call(e);
  return {
    tag: String(e.tagName || "").toLowerCase(),
    className: String(e.className || ""),
    clientW: Number(e.clientWidth || 0),
    clientH: Number(e.clientHeight || 0),
    offsetW: Number(e.offsetWidth || 0),
    offsetH: Number(e.offsetHeight || 0),
    rectW: Number((t == null ? void 0 : t.width) || 0),
    rectH: Number((t == null ? void 0 : t.height) || 0),
    styleHeight: String(((n = e.style) == null ? void 0 : n.height) || ""),
    styleWidth: String(((i = e.style) == null ? void 0 : i.width) || ""),
    stylePos: String(((o = e.style) == null ? void 0 : o.position) || ""),
    styleTransform: String(((s = e.style) == null ? void 0 : s.transform) || "")
  };
}
function cx() {
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
function xu(e) {
  const t = e == null ? void 0 : e.size;
  if (t == null) return null;
  const r = (n, i) => {
    const o = Number(n), s = Number(i);
    return !Number.isFinite(o) || !Number.isFinite(s) ? null : [o, s];
  };
  if (typeof t == "object" || typeof t == "function") {
    if (t[0] !== void 0 || t[1] !== void 0) {
      const n = r(t[0], t[1]);
      if (n) return n;
    }
    if (t.width !== void 0 || t.height !== void 0) {
      const n = r(t.width, t.height);
      if (n) return n;
    }
    if (t.w !== void 0 || t.h !== void 0) {
      const n = r(t.w, t.h);
      if (n) return n;
    }
  }
  return null;
}
function Xg(e) {
  const t = xu(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function ux(e, t, r) {
  Xg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function ku(e) {
  var t, r;
  return (r = (t = St(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function zd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Jg(e) {
  return qa(zd(e));
}
function fp(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = jt == null ? void 0 : jt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function Zg(e) {
  const t = St(e);
  if (t.controller) return t.controller;
  const r = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = ku(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Ic(e), ok(e, { ...n, mode: i }), this.activeBackend = ku(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || St(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Ic(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Ic(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function Ic(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  Mu.unregister(e);
  const r = St(e);
  r.dom, r.restore;
  const n = r.dom;
  try {
    (i = r.restore) == null || i.call(r);
  } catch {
  }
  if (r.restore = null, n) {
    try {
      (o = n.state) != null && o.raf && cancelAnimationFrame(n.state.raf);
    } catch {
    }
    try {
      (a = (s = n.root) == null ? void 0 : s.remove) == null || a.call(s);
    } catch {
    }
  }
  try {
    Array.isArray(e.widgets) && e.widgets.filter((c) => {
      if (c === (n == null ? void 0 : n.widget)) return !0;
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = wu();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => Ix(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function dx(e, t = "#00ff00") {
  const r = {
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
  let n = null;
  if (e && typeof e == "object")
    n = e;
  else if (typeof e == "string") {
    const i = e.trim();
    if (!i) return r;
    try {
      n = JSON.parse(i);
    } catch {
      return r;
    }
  } else
    return r;
  try {
    const i = n;
    return !i || typeof i != "object" || Array.isArray(i) ? r : {
      ...r,
      ...i,
      coverage: Number(i.coverage) === 180 ? 180 : 360,
      assets: i.assets && typeof i.assets == "object" ? i.assets : {},
      stickers: Array.isArray(i.stickers) ? i.stickers : [],
      shots: Array.isArray(i.shots) ? i.shots : [],
      active: i.active && typeof i.active == "object" ? i.active : r.active
    };
  } catch {
    return r;
  }
}
function fx(e) {
  var r, n;
  const t = (r = Hn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = Sr(e, "state_json")) == null ? void 0 : n.value) || "");
}
function vn(e) {
  var d, u;
  const t = Hn(e), r = fx(e), n = t.liveStateVersion, i = String(((d = Sr(e, "bg_color")) == null ? void 0 : d.value) || "#1a1a1e"), o = Number(((u = Sr(e, "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, s = e.__panoSceneStateV2 && typeof r == "string", a = s && Pg(e) && Kt(e, "sticker-handoff") ? ir(e, "pano_sticker_handoff") ?? null : null, l = t.parsedState;
  if (l && l.source === r && l.liveVersion === n && l.bg === i && l.coverage === o && l.handoff === a)
    return l.parsed;
  const c = s ? C_(r, { backgroundColor: i, coverage: o, active: Fm(e) }, a) : dx(r, i);
  return c.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, handoff: a, parsed: c }, c;
}
function Sr(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function px(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Qg(e, t, r = null) {
  var i, o;
  let n = null;
  try {
    n = typeof (e == null ? void 0 : e.getInputNode) == "function" ? e.getInputNode(t) : null;
  } catch {
    n = null;
  }
  if ((i = n == null ? void 0 : n.isSubgraphNode) != null && i.call(n))
    try {
      const s = typeof (e == null ? void 0 : e.getInputLink) == "function" ? e.getInputLink(t) : null, a = s ? (o = n.resolveSubgraphOutputLink) == null ? void 0 : o.call(n, Number(s.origin_slot ?? 0)) : null;
      a != null && a.outputNode && (n = a.outputNode);
    } catch {
    }
  return !n && r != null && (n = px(e == null ? void 0 : e.graph, r)), n;
}
function hx(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function e0(e, t = []) {
  const r = hx(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    lr.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function pp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function hl(e, t) {
  const r = pp(e), n = pp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function mx(e, t) {
  var r;
  return Qg(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function gx(e, t = lr) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = e0(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return a_(e, s, mx);
}
const Mu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = pn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, m, x;
        if (!o) return;
        const s = hl(n, o == null ? void 0 : o.id);
        String(St(o).mode || "") === "cutout" && !s || !s && ![...gx(o)].some((g) => hl(n, g)) || (s && (Hd(o), (c = (l = St(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !dg(Mn(o).executedOutputs, n, r.output) && (n0(o), (u = (d = St(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (x = (m = o.graph) == null ? void 0 : m.setDirtyCanvas) == null || x.call(m, !0, !0), String(St(o).mode || ""), String(St(o).mode || ""), void 0));
      });
    }, pn.addEventListener("executed", this.listener), this.bound = !0);
  },
  ensureUnbound() {
    var e;
    !this.bound || !this.listener || !((e = pn) != null && e.removeEventListener) || (pn.removeEventListener("executed", this.listener), this.listener = null, this.bound = !1);
  },
  register(e) {
    e && (this.nodes.add(e), this.ensureBound());
  },
  unregister(e) {
    e && this.nodes.delete(e), this.nodes.size || this.ensureUnbound();
  }
};
function ml(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "");
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t);
  const n = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  r.set("type", n), e.subfolder && r.set("subfolder", String(e.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof ((o = pn) == null ? void 0 : o.apiURL) == "function" ? pn.apiURL(i) : i;
}
function yx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function bx(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function vx(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function Sx(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (yx(t)) return [t];
  const { filename: r, subfolder: n } = bx(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => ml({
    filename: r,
    subfolder: n,
    type: o
  }));
  return vx([...i, t]);
}
function _x(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? ml({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function si(e) {
  const t = jt == null ? void 0 : jt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (hl(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (hl(s, i)) return t[s];
  }
  return null;
}
function ir(e, t, r = null) {
  const n = r || si(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
  return Array.isArray(i) ? i[0] : i;
}
function _n(e) {
  if (!e) return "";
  if (typeof e == "string")
    return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return _n(e[0]);
    const t = String(e[0] || "").trim();
    if (t) {
      const r = String(e[1] || "").trim(), n = String(e[2] || "output").trim() || "output";
      return ml({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = _n(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : ml(e);
}
function _s(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Da(e) {
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
function jd(e, t) {
  var n;
  const r = String(e || "").trim();
  if (!r) return "";
  try {
    const i = typeof window < "u" && ((n = window == null ? void 0 : window.location) != null && n.href) ? window.location.href : "http://127.0.0.1/", o = new URL(r, i);
    return t > 0 && o.searchParams.set("pano_rev", String(t)), o.toString();
  } catch {
    const i = r.includes("?") ? "&" : "?";
    return t > 0 ? `${r}${i}pano_rev=${t}` : r;
  }
}
function wx(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function xx(e, t) {
  try {
    const r = Mn(e);
    r.ownOutputRev = $w(r.ownOutputRev);
    const n = wx(t);
    let i = "";
    for (const o of n)
      if (i = _n(o), i) break;
    i ? (jd(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function so(e) {
  var r;
  const t = Mn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function kx(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Kt(e, "background"))
    return so(e), null;
  const i = si(n), o = kd(i, t, _n);
  if (!o)
    return so(e), null;
  const s = Mn(e), a = jd(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  so(e);
  const d = l_({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function Mx(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = e0(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], m = e.graph ? e.getInputLink(u) : null;
    if ((m == null ? void 0 : m.origin_id) == null) continue;
    const x = m.origin_id, g = Qg(e, u, x);
    if (!g) continue;
    const h = Number(m.origin_slot ?? 0), _ = si((g == null ? void 0 : g.id) ?? x), te = Array.isArray(_ == null ? void 0 : _.images) ? _.images : [];
    if (te.length) {
      const W = [];
      h >= 0 && h < te.length && W.push(te[h]), W.push(...te);
      for (const $ of W.filter((U) => !Aa(U))) {
        const U = _n($);
        if (U)
          return String((f == null ? void 0 : f.name) || ""), { src: `${U}&pano_src=${mu(_)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let G = [];
    try {
      G = typeof (jt == null ? void 0 : jt.getNodeImageUrls) == "function" ? jt.getNodeImageUrls(g) || [] : [];
    } catch {
      G = [];
    }
    if (Array.isArray(G) && G.length) {
      const W = [];
      h >= 0 && h < G.length && W.push(G[h]), W.push(...G);
      for (const $ of W) {
        const U = _n($);
        if (U)
          return String((f == null ? void 0 : f.name) || ""), { src: U, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const re = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (re.length) {
      const W = [];
      h >= 0 && h < re.length && W.push(re[h]), W.push(...re);
      for (const $ of W) {
        const U = _n($);
        if (U)
          return String((f == null ? void 0 : f.name) || ""), { src: U, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const T = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find((W) => String((W == null ? void 0 : W.name) || "").toLowerCase() === "image");
    if (T) {
      let W = _n(T.value);
      if (W && !W.includes("/") && !W.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && (W = pn.apiURL(`/view?filename=${encodeURIComponent(W)}&type=input&subfolder=`)), W)
        return String((f == null ? void 0 : f.name) || ""), { src: W, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Kt(e, "background") ? si(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = _n(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function Px(e, t = [], r = {}) {
  const n = Mx(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = Sx(i);
  if (!o.length) return null;
  const s = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1, a = Mn(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return s && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const d = new Image(), u = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, a.set(l, u);
  let f = -1;
  const m = () => {
    if (f += 1, f >= o.length) {
      a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const x = o[f];
    u.pendingResolvedSrc = x, d.src = x;
  };
  return d.onload = () => {
    var x;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (x = e.setDirtyCanvas) == null || x.call(e, !0, !0);
  }, d.onerror = (x) => {
    if (f + 1 < o.length) {
      m();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((x == null ? void 0 : x.type) || "error");
  }, m(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function t0(e, t = [], r = null, n = {}) {
  const i = Px(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function n0(e) {
  e && ($d.disposeOwner(e), Mn(e).linkedImages.clear(), so(e));
}
function Nx(e) {
  e && (Mn(e).linkedImages.clear(), so(e));
}
function r0(e, t) {
  const r = St(e);
  r.renderCache ?? (r.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = r.renderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function $o(e, t, r = "") {
  var s;
  const n = r0(e, ((s = St(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < sx ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function hp(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function Ax(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Ec(e, t) {
  var n, i;
  const r = (i = (n = St(e)) == null ? void 0 : n.dom) == null ? void 0 : i.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function Cx(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  if (r) {
    const i = t.find((o) => String((o == null ? void 0 : o.id) || "") === r);
    if (i) return i;
  }
  return t[0] || null;
}
function Ix(e, t) {
  return Yg(e, t);
}
function gl(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = _x(r);
  if (!o && (n != null && n.external)) {
    if (!Kt(e, "external-sticker")) return null;
    const m = si(e == null ? void 0 : e.id), x = ((f = m == null ? void 0 : m.ui) == null ? void 0 : f.pano_sticker_input_images) || (m == null ? void 0 : m.pano_sticker_input_images) || [];
    for (const g of Array.isArray(x) ? x : [x])
      if (o = _n(g), o) break;
  }
  if (!o) return null;
  const s = ir(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? Mn(e).ownOutputRev : 0, c = n != null && n.external ? jd(o, l) : o, d = zw(o, a, l);
  return $d.get(e, d, c, (m, x) => {
    var g, h;
    x && (n != null && n.external && Mn(e).outputFromRun && ni(e, "image-loaded"), (h = (g = St(e).dom) == null ? void 0 : g.requestDraw) == null || h.call(g));
  }) || null;
}
function Ex(e, t) {
  var f, m, x, g;
  const r = St(e), n = Lx(e, t), i = Rx(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
    o.filter((h) => h && typeof h == "object").map((h) => [String((h == null ? void 0 : h.actionGroupId) || (h == null ? void 0 : h.id) || "").trim(), Number((h == null ? void 0 : h.z_index) || 0)])
  ), a = n ? i.map((h) => {
    const _ = n.getGroupDisplayCanvas(h);
    return _ ? {
      id: `paint_group:${h}`,
      source: _,
      revision: `${String(r.paintRevisionKey || "")}:${h}`,
      zIndex: Number(s.get(h) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((m = t == null ? void 0 : t.painting) == null ? void 0 : m.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (g = (x = r.rasterCache) == null ? void 0 : x.retain) == null || g.call(x, []), a;
  r.rasterCache || (r.rasterCache = Vw()), r.rasterReady || (r.rasterReady = () => {
    var h, _;
    return (_ = (h = r.dom) == null ? void 0 : h.requestDraw) == null ? void 0 : _.call(h);
  });
  const c = Dw(t == null ? void 0 : t.output_preset), d = l.filter((h) => (h == null ? void 0 : h.visible) !== !1 && String((h == null ? void 0 : h.layerKind) || "paint") === "paint").map((h) => String((h == null ? void 0 : h.id) || ""));
  r.rasterCache.retain(d);
  const u = l.map((h) => {
    const _ = r.rasterCache.get(
      h,
      c.width,
      c.height,
      r.rasterReady
    );
    return _ ? {
      id: `raster:${String((h == null ? void 0 : h.id) || "")}`,
      source: _.source,
      revision: _.revision,
      zIndex: Number((h == null ? void 0 : h.z_index) || 0),
      opacity: 1,
      visible: (h == null ? void 0 : h.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function Ox(e, t, r, n) {
  var o, s, a, l, c, d;
  if (Array.isArray(r) && r.length >= 2) return { x: r[0], y: r[1] };
  if (r && typeof r == "object" && Number.isFinite(Number(r.x)) && Number.isFinite(Number(r.y)))
    return { x: Number(r.x), y: Number(r.y) };
  if (n && Array.isArray(n.graph_mouse) && n.graph_mouse.length >= 2)
    return {
      x: Number(n.graph_mouse[0]) - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[0]) || 0),
      y: Number(n.graph_mouse[1]) - Number(((s = e == null ? void 0 : e.pos) == null ? void 0 : s[1]) || 0)
    };
  if (n && typeof n.convertEventToCanvasOffset == "function" && t)
    try {
      const u = n.convertEventToCanvasOffset(t);
      if (Array.isArray(u) && u.length >= 2)
        return {
          x: Number(u[0]) - Number(((a = e == null ? void 0 : e.pos) == null ? void 0 : a[0]) || 0),
          y: Number(u[1]) - Number(((l = e == null ? void 0 : e.pos) == null ? void 0 : l[1]) || 0)
        };
    } catch {
    }
  if (Number.isFinite(Number(t == null ? void 0 : t.canvasX)) && Number.isFinite(Number(t == null ? void 0 : t.canvasY)))
    return {
      x: Number(t.canvasX) - Number(((c = e == null ? void 0 : e.pos) == null ? void 0 : c[0]) || 0),
      y: Number(t.canvasY) - Number(((d = e == null ? void 0 : e.pos) == null ? void 0 : d[1]) || 0)
    };
  const i = Tx(e, t, n);
  return i || null;
}
function Fx(e, t) {
  var u, f;
  const r = Number(e == null ? void 0 : e.clientX), n = Number(e == null ? void 0 : e.clientY);
  if (!Number.isFinite(r) || !Number.isFinite(n)) return null;
  const i = (t == null ? void 0 : t.canvas) || (t == null ? void 0 : t.canvasEl) || (t == null ? void 0 : t.canvas_element) || (t == null ? void 0 : t.front_canvas) || null, o = (u = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : u.call(i), s = (t == null ? void 0 : t.ds) || ((f = jt == null ? void 0 : jt.canvas) == null ? void 0 : f.ds);
  if (!o || !s) return null;
  const a = Number(s.scale || 1);
  if (!Number.isFinite(a) || Math.abs(a) < 1e-6) return null;
  const l = Array.isArray(s.offset) ? s.offset : [0, 0], c = (r - Number(o.left || 0)) / a - Number(l[0] || 0), d = (n - Number(o.top || 0)) / a - Number(l[1] || 0);
  return !Number.isFinite(c) || !Number.isFinite(d) ? null : { x: c, y: d };
}
function Tx(e, t, r) {
  var i, o;
  const n = Fx(t, r || (jt == null ? void 0 : jt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Dx(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function Lx(e, t) {
  var d, u, f, m, x, g, h, _, te, G, re, T;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (m = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : m.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = St(e), a = Dx(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = Tl(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((x = t == null ? void 0 : t.painting) == null ? void 0 : x.groups) || null,
    rasterObjects: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.raster_objects) || null
  };
  return (((h = s.paintRevision) == null ? void 0 : h.paint) !== c.paint || ((_ = s.paintRevision) == null ? void 0 : _.mask) !== c.mask || ((te = s.paintRevision) == null ? void 0 : te.groups) !== c.groups || ((G = s.paintRevision) == null ? void 0 : G.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((re = t == null ? void 0 : t.painting) == null ? void 0 : re.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((T = t == null ? void 0 : t.painting) == null ? void 0 : T.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function Rx(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function mp(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function Vx(e, t, r) {
  const n = Dd(t, r);
  n.visible && Td(e, n.boundaryEdges, { selected: !1 });
}
function $x(e, t, r) {
  const n = Dd(t, r);
  n.visible && (e.save(), Td(e, n.boundaryEdges, { selected: !0 }), Gg(e, n, { accent: Cw(t) }), e.restore());
}
function Pu(e, t, r) {
  return Xm(sl(St(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function yl(e) {
  var t;
  return ((t = St(e).playback) == null ? void 0 : t.playback.frame) ?? mo;
}
function zx(e) {
  return [Kt(e, "background") ? kd(si(e.id), ["pano_input_videos"], _n) : "", qg(e, lr)];
}
function jx(e) {
  var o;
  if (!Kt(e, "external-sticker")) return null;
  const t = si(e.id), r = ir(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(_n), meta: r };
  const i = kd(t, ["pano_sticker_input_videos"], _n);
  return i ? { src: i, meta: r } : null;
}
function Hx({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function i0(e, t) {
  var n;
  const r = St(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: ur({ ...t, painting: null }) }), r.scene.sceneState;
}
function Gx(e, t) {
  const r = Kl(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Kt(e, "background")) {
    const o = ir(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (og(e, lr)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === qg(e, lr) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = t0(e, lr, null, { preserveReadyWhilePending: !1 });
  return _s(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function Kx(e, t) {
  var i, o, s;
  const r = String(((i = Sr(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Kt(e, a));
  return {
    stateText: String(((o = Sr(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: vn(e).coverage,
    bgColor: String(((s = Sr(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? Gx(e, t) : null,
    run: n && ir(e, "pano_output_size") || null,
    erp: ir(e, "pano_output_erp") || null,
    frame: ir(e, "pano_output_frame") || null
  };
}
const Wx = 38;
function Hd(e) {
  const t = Mn(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function Ux(e, t) {
  const r = Mn(e).studioRunImage;
  return t && (r == null ? void 0 : r.src) === _n(t.entry) ? r : null;
}
function Bx(e, t) {
  const r = Mn(e), n = St(e), i = t ? _n(t.entry) : "";
  if (r.studioRunImage && r.studioRunImage.src !== i && Hd(e), !i) return null;
  let o = r.studioRunImage;
  if (!o) {
    const s = new Image(), a = { src: i, image: s, ready: !1, failed: !1 };
    s.src = i, s.decode().then(() => {
      var l, c;
      r.studioRunImage === a && (a.ready = !0, (c = (l = n.dom) == null ? void 0 : l.requestDraw) == null || c.call(l));
    }, () => {
      var l, c;
      r.studioRunImage === a && (a.failed = !0, (c = (l = n.dom) == null ? void 0 : l.requestDraw) == null || c.call(l));
    }), r.studioRunImage = o = a;
  }
  return o.ready ? t.kind === "frame" ? { frame: o.image } : {
    background: {
      media: o.image,
      revision: Da(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: Pw(t.entry.rotation)
    }
  } : null;
}
function Yx(e, t) {
  var r;
  return t ? (r = Ux(e, t)) != null && r.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function qx(e, t, r) {
  const n = i0(e, t), i = (s) => {
    var l;
    if (s.visible === !1) return null;
    let a;
    if (t.version === 2) {
      a = gl(e, s.id, il(s.source), { external: s.source.kind === "port" });
      const c = St(e).playback;
      if (s.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, a), u = Pd(c.playback.stickerMedia, a);
        return d ? { media: d, revision: Da(d), source: u } : null;
      }
    } else {
      const c = s.type === "external_image" || s.source_kind === "external_image", d = String(s.asset_id || "") || (c ? String(s.id || "") : "");
      a = gl(e, d, (l = t.assets) == null ? void 0 : l[s.asset_id], { external: c });
    }
    return _s(a) ? { media: a, revision: Da(a) } : null;
  }, o = (t.painting_visible === !1 ? [] : Ex(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: _s(r) ? { media: r, revision: Da(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Zm(n, yl(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Xx(e, t, r, n = null) {
  var U, ve, ye, de, ge, le, _e;
  const i = St(e), o = String(i.mode || "stickers");
  r0(e, o);
  const s = vn(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (ye = (ve = (U = i.cutout) == null ? void 0 : U.session) == null ? void 0 : ve.refresh) == null || ye.call(ve)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (le = (ge = (de = i.stickers) == null ? void 0 : de.session) == null ? void 0 : ge.refresh) == null || le.call(ge));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), $o(e, !1, "");
    const { width: Y, height: O } = mp(n.frame), B = Wx, P = Math.min(l / Y, (c - B) / O);
    d.drawImage(n.frame, (l - Y * P) / 2, B + (c - B - O * P) / 2, Y * P, O * P);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, m = (f == null ? void 0 : f.media) || (i.playback ? Hx(i.playback) : kx(e, ["pano_input_videos"], () => {
    var Y, O;
    return (O = (Y = i.dom) == null ? void 0 : Y.requestDraw) == null ? void 0 : O.call(Y);
  })) || t0(
    e,
    lr,
    () => {
      var Y, O;
      return (O = (Y = i.dom) == null ? void 0 : Y.requestDraw) == null ? void 0 : O.call(Y);
    },
    { preserveReadyWhilePending: !1 }
  ), x = _s(m);
  let g = null;
  const h = () => f ? { background: f, layers: [] } : qx(e, s, m), _ = (Y, O) => {
    g || (g = h());
    const B = r.render({ width: Y.w, height: Y.h, camera: O, ...g });
    return B && d.drawImage(B.canvas, B.x, B.y, B.width, B.height, Y.x, Y.y, Y.w, Y.h), !!B;
  };
  if (o === "cutout") {
    const Y = Cx(s), O = mp(m), B = Y ? Ie(li(Y).aspect, 0.1, 10) : x ? Ie(Number(O.width / O.height), 0.05, 20) : 1, P = Fd(u, B);
    i.cutoutFrame = P;
    let M = "none";
    const F = String((m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "");
    if (Y)
      if (m && !x)
        M = "loading";
      else if (x) {
        const C = j_({ width: l, height: c }, P, Y);
        [
          !C.fallback || _(C.fallback.rect, os(C.fallback.shot)),
          _(C.rect, os(C.shot)),
          !C.fallback || _(P, os(Y))
        ].every(Boolean) || (M = "loading");
      } else
        M = "empty";
    else {
      const C = i.lastCutoutShot;
      C ? (i.view = Fg(C, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), x ? _(u, sl(i.view, l, c)) || (M = "loading") : m ? M = "loading" : M = "empty";
    }
    x || r.release(), r.failed && M === "loading" && (M = "none"), Y && (i.lastCutoutShot = { ...Y }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(P.x, P.y, P.w, P.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(P.x + 0.5, P.y + 0.5, Math.max(0, P.w - 1), Math.max(0, P.h - 1)), d.restore()), M === "loading" ? (Ec(e, !1), $o(e, !0, F)) : M === "empty" ? (Ec(e, !0), $o(e, !1, "")) : (Ec(e, !1), $o(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let te = !1;
  (!m || x) && (g = h(), !g.background && !g.layers.length ? (r.release(), te = !0) : te = _(u, sl(i.view, l, c)));
  const G = !te && !r.failed;
  $o(e, G, G ? String((m == null ? void 0 : m.currentSrc) || (m == null ? void 0 : m.src) || "") : ""), G && Ax(d, u, hp(t, u));
  const re = Pu(e, l, c);
  !m && te && Jx(d, re, hp(t, u));
  const T = String(((_e = s == null ? void 0 : s.active) == null ? void 0 : _e.selected_sticker_id) || ""), W = gu(s, yl(e)), $ = te && e.__panoStudio !== !0 ? W.find((Y) => String((Y == null ? void 0 : Y.id) || "") === T && (Y == null ? void 0 : Y.visible) !== !1) : null;
  te && !f && W.filter((Y) => Y !== $ && (Y == null ? void 0 : Y.visible) !== !1 && (Y.external || Y.source_kind === "external_image")).filter((Y) => !_s(gl(e, Y.id, null, { external: !0 }))).forEach((Y) => Vx(d, Y, re)), $ && $x(d, $, re);
}
function gp(e, t, r, n, i = 1) {
  let o = !1;
  e.strokeStyle = n, e.lineWidth = i, e.beginPath();
  for (const s of t) {
    const a = r.project(s);
    if (a.z <= 1e-4) {
      o = !1;
      continue;
    }
    o ? e.lineTo(a.x, a.y) : (e.moveTo(a.x, a.y), o = !0);
  }
  e.stroke();
}
function Jx(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Dn(c, a));
    gp(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Dn(a, c));
    gp(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
  }
  const o = [
    { name: "Front", dir: Dn(0, 0) },
    { name: "Right", dir: Dn(90, 0) },
    { name: "Back", dir: Dn(180, 0) },
    { name: "Left", dir: Dn(-90, 0) }
  ];
  e.fillStyle = "rgba(250, 250, 250, 0.42)";
  const s = Math.max(9, Math.round(11 * r));
  e.font = `500 ${s}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", o.forEach((a) => {
    const l = t.project(a.dir);
    l.z > 1e-4 && e.fillText(a.name, l.x, l.y + 24 * r);
  }), e.restore();
}
function Nu(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Zx(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Wn(e, t) {
  return Zx(e, t) ? !1 : (Nu(e), !0);
}
function yp() {
  var r;
  const e = (r = jt == null ? void 0 : jt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Qx(e) {
  var r;
  if (!e) return;
  const t = (r = jt == null ? void 0 : jt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function ek(e, t = 360, r = 260) {
  const n = St(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !Xg(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function tk(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = St(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function bp(e, t = null, r = 0, n = 0, i = !0) {
  const o = Math.max(0, Number(n || 0)), s = St(e);
  return {
    serialize: !1,
    hideOnZoom: !1,
    getValue() {
      return "";
    },
    setValue() {
    },
    getMinHeight() {
      return s.bootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o;
    },
    // Node2 can collapse DOM widget height to 0 when only "auto" is returned.
    // While bootstrapping, provide an explicit numeric height contract.
    getHeight() {
      return s.bootMinHeightActive ? Math.max(o, Math.max(0, Number(r || 0))) : o > 0 ? o : "auto";
    },
    afterResize() {
      s.userResized = !0, t == null || t(), i && nk(e, 180, t);
    }
  };
}
function nk(e, t = 180, r = null) {
  if (!e) return;
  const n = St(e);
  n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.resizeSettleTimer = setTimeout(() => {
    var i;
    n.resizeSettleTimer = null, r == null || r(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function Uo(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const rk = /* @__PURE__ */ new WeakMap();
function o0(e, t) {
  return dg(rk, e, t) ? !1 : (xx(e, t), n0(e), Uo(e), !0);
}
async function ik(e) {
  var r, n;
  const t = await o_(e, jt, pn);
  t && (o0(e, t), (n = (r = St(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function ok(e, t = {}) {
  var He;
  const r = t.__allowStandalone === !0, n = St(e), i = Mn(e), o = Hn(e), s = Jg(e);
  if (s && !r) {
    zd(e);
    return;
  }
  s && ek(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: fp(e)
  }.signature || fp(e), ku(e), e == null || e.id, n.mode, e.addDOMWidget, xu(e), (He = n.dom) != null && He.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, m = f ? 0 : 56, x = f ? 0 : R_, g = document.createElement("div");
  if (cx(), g.className = "pano-node-preview-dom", g.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && g.classList.add("pano-node-preview--no-preview"), g.setAttribute("data-capture-wheel", "true"), g.tabIndex = 0, g.style.cssText = [
    "width:100%",
    f ? "height:auto" : "height:100%",
    x > 0 ? `min-height:${x}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), f) {
    const ae = pl(_u(
      e.addDOMWidget(wu(), "preview", g, bp(e, null))
    ));
    Uo(e), n.dom = { widget: ae, root: g, requestDraw: () => {
    } };
    return;
  }
  const h = document.createElement("div");
  h.style.cssText = [
    "position:absolute",
    "inset:0",
    "border-radius:8px",
    "overflow:hidden",
    "border:1px solid rgba(63,63,70,1)",
    "background:#070707"
  ].join(";");
  const _ = rn({ label: "node.surface" });
  _.style.cssText = [
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
  const te = document.createElement("div");
  te.style.cssText = [
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
  ].join(";"), te.textContent = "Connect ERP image", h.appendChild(_), h.appendChild(te), g.appendChild(h);
  const G = qh(g), re = document.createElement("div");
  re && (re.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", re.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(re)), ux(e, 120, 120), Uo(e);
  let T = null;
  try {
    tk(e, m, () => {
      var ae, Oe;
      return (Oe = (ae = n.dom) == null ? void 0 : ae.requestDraw) == null ? void 0 : Oe.call(ae);
    }), T = pl(_u(e.addDOMWidget(
      wu(),
      "preview",
      g,
      bp(
        e,
        () => {
          var ae, Oe;
          return (Oe = (ae = n.dom) == null ? void 0 : ae.requestDraw) == null ? void 0 : Oe.call(ae);
        },
        m,
        x,
        !1
      )
    )));
  } catch {
    return;
  }
  const W = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, $ = Aw(), U = () => {
    W.destroyed || (W.needsDraw = !0, !W.inTick && !W.raf && (W.raf = requestAnimationFrame(y)));
  }, ve = ng(U), ye = /* @__PURE__ */ bo(a ? {
    ...Ag(vn(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Eg(vn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((ae) => ({ value: ae, label: ae }))
  });
  let de = null;
  if (a && e.__panoSceneStateV2) {
    const [ae, Oe] = [0, 1].map(() => {
      const Ke = As(document, "node.playback");
      return Ke.playsInline = !0, Ke.preload = "auto", Ke.crossOrigin = "anonymous", Ke.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", h.appendChild(Ke), Ke;
    }), Ne = rn({ label: "node.still" });
    Ne.__panoFrameIdx = 0;
    const Le = rn({ label: "node.port-still" });
    Le.__panoFrameIdx = 0;
    const Ye = D_({
      video: ae,
      stickerVideo: Oe,
      createImage: (Ke, We) => {
        const mt = new Image();
        return mt.onload = We, mt.onerror = We, mt.src = Ke, mt;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ke) => requestAnimationFrame(Ke),
        cancelFrame: (Ke) => cancelAnimationFrame(Ke)
      },
      readState: () => vn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: U,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var We;
        if (!(ae.videoWidth > 0 && ae.videoHeight > 0)) return;
        const Ke = Math.min(1, ax / ae.videoWidth);
        Ne.width = Math.round(ae.videoWidth * Ke), Ne.height = Math.round(ae.videoHeight * Ke), (We = Ne.getContext("2d")) == null || We.drawImage(ae, 0, 0, Ne.width, Ne.height), Ne.__panoFrameIdx += 1, U();
      },
      onStickerCapture: () => {
        var Ke;
        Oe.videoWidth > 0 && Oe.videoHeight > 0 && (Le.width = Oe.videoWidth, Le.height = Oe.videoHeight, (Ke = Le.getContext("2d")) == null || Ke.drawImage(Oe, 0, 0), Le.__panoFrameIdx += 1, U());
      },
      onChange: () => {
        ye.playing = Ye.playing, U();
      }
    });
    de = { playback: Ye, video: ae, still: Ne, stickerVideo: Oe, stickerStill: Le, stickerSource: "" }, n.playback = de;
  }
  const ge = () => {
    var mt;
    const { playback: ae, still: Oe, stickerStill: Ne } = de, Le = Ea(h, !!((mt = e.flags) != null && mt.collapsed)), Ye = ae.source, Ke = Le ? jx(e) : null, We = ae.follow({
      shown: Le,
      sources: Le ? zx(e) : [],
      state: vn(e),
      sticker: Ke
    });
    ((Ke == null ? void 0 : Ke.src) || "") !== de.stickerSource && (de.stickerSource = (Ke == null ? void 0 : Ke.src) || "", fs(Ne)), ae.source !== Ye && (fs(Oe), Oe.__panoFrameIdx = 0), ye.playable = We, ye.playing = ae.playing;
  }, le = () => {
    var Oe, Ne;
    const ae = ((Oe = i.ownOutputVideo) == null ? void 0 : Oe.player) ?? null;
    ae && !Ea(h, !!((Ne = e.flags) != null && Ne.collapsed)) && ae.pause(), a && (ye.playable = !!ae && !ae.failed(), ye.playing = !!(ae != null && ae.playing));
  }, _e = () => {
    var ae;
    de == null || de.playback.pause(), (ae = i.ownOutputVideo) == null || ae.player.pause();
  };
  let Y = null;
  const O = (a ? F_ : G_)({
    readState: () => vn(e),
    publishLiveState: (ae) => {
      ae ? (Y = ae, o.liveState = ae) : (o.liveState === Y && (o.liveState = null), Y = null), o.liveStateVersion += 1, o.parsedState = null, U();
    },
    commitState: (ae) => {
      var Le, Ye, Ke, We;
      const Oe = Sr(e, "state_json");
      if (!Oe) return;
      Tm(e, ae.active);
      const Ne = Dm(e, ae, String(Oe.value ?? ""));
      Ne !== null && (Oe.value = Ne, (Le = Oe.callback) == null || Le.call(Oe, Ne), o.parsedState = null, (Ye = e.setDirtyCanvas) == null || Ye.call(e, !0, !0), (We = (Ke = e.graph) == null ? void 0 : Ke.setDirtyCanvas) == null || We.call(Ke, !0, !0));
    },
    onChange: (ae) => Object.assign(ye, ae)
  }), P = a ? Kg(e, (ae = "sync", Oe = null) => {
    var sn;
    if (!a || !e.graph || !O || O.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Ut = Kt(e, "external-sticker");
      return O.apply({
        type: "sync-port",
        value: Mg(e, {
          pose: Ut ? ir(e, "pano_sticker_input_pose", Oe) : null,
          handoff: Kt(e, "sticker-handoff") ? ir(e, "pano_sticker_handoff", Oe) : null
        })
      });
    }
    const Ne = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Ut) => String((Ut == null ? void 0 : Ut.name) || "") === "sticker_image") : -1, Le = Ne >= 0 ? ((sn = e.getInputLink(Ne)) == null ? void 0 : sn.id) ?? null : null;
    if (Le == null)
      return O.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Kt(e, "external-sticker")) return !1;
    const Ye = ir(e, "pano_sticker_input_pose", Oe), Ke = Array.isArray(Ye) ? Ye[0] : Ye, We = String(ir(e, "pano_sticker_input_state_hash", Oe) ?? ""), mt = n.view || { yaw: 0, pitch: 0 }, bt = vn(e), Tt = (Array.isArray(bt == null ? void 0 : bt.stickers) ? bt.stickers : []).find((Ut) => String((Ut == null ? void 0 : Ut.id) || "") === "sticker_image_1"), Nt = gl(e, "sticker_image_1", null, { external: !0 }), Pn = Ke && typeof Ke == "object" ? Ke : Tt || { yaw_deg: mt.yaw, pitch_deg: mt.pitch, hFOV_deg: 30, rot_deg: 0 };
    return O.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Le,
        stateHash: We,
        pose: Pn,
        imageWidth: Number((Nt == null ? void 0 : Nt.naturalWidth) || (Nt == null ? void 0 : Nt.width) || 0),
        imageHeight: Number((Nt == null ? void 0 : Nt.naturalHeight) || (Nt == null ? void 0 : Nt.height) || 0)
      }
    });
  }) : () => {
  };
  let M = 0;
  const F = async (ae) => {
    if (!a || !O || !rr(ae)) return !1;
    _e();
    const Oe = `asset_${Math.random().toString(16).slice(2, 10)}`, Ne = `st_${Math.random().toString(16).slice(2, 10)}`, Le = { ...n.view || { yaw: 0, pitch: 0 } };
    M += 1, ye.importing = !0;
    const Ye = Ko(e, `add:${Oe}`, async () => {
      const Ke = await Wo(ae), We = await xi(ae, {
        fetchApi: (mt, bt) => pn.fetchApi(mt, bt)
      });
      return Z(), O.apply({
        type: "add-sticker",
        value: {
          stickerId: Ne,
          assetId: Oe,
          asset: We,
          imageWidth: Ke.width,
          imageHeight: Ke.height,
          yaw_deg: Number(Le.yaw || 0),
          pitch_deg: Number(Le.pitch || 0)
        }
      });
    });
    try {
      return await Ye;
    } catch {
      return !1;
    } finally {
      M = Math.max(0, M - 1), ye.importing = M > 0, U();
    }
  };
  let C = null, ne = null, Q = null, z = !1;
  const w = () => {
    var ae;
    return Q && (clearTimeout(Q), Q = null), z ? (z = !1, ((ae = O == null ? void 0 : O.commitGesture) == null ? void 0 : ae.call(O)) ?? !1) : !1;
  }, Z = () => {
    var Le, Ye, Ke;
    const ae = w(), Oe = (C == null ? void 0 : C.pointerId) ?? (ne == null ? void 0 : ne.pointerId);
    if (C = null, ne = null, Oe != null) {
      try {
        (Le = _.hasPointerCapture) != null && Le.call(_, Oe) && ((Ye = _.releasePointerCapture) == null || Ye.call(_, Oe));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const Ne = ((Ke = O == null ? void 0 : O.commitGesture) == null ? void 0 : Ke.call(O)) ?? !1;
    return ae || Ne;
  }, ie = () => {
    var Le, Ye, Ke;
    const ae = w(), Oe = C == null ? void 0 : C.pointerId;
    if (C = null, Oe != null) {
      try {
        (Le = _.hasPointerCapture) != null && Le.call(_, Oe) && ((Ye = _.releasePointerCapture) == null || Ye.call(_, Oe));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const Ne = ((Ke = O == null ? void 0 : O.cancelGesture) == null ? void 0 : Ke.call(O)) ?? !1;
    return ae || Ne;
  }, be = () => Z();
  O && o.flushers.add(be);
  let we = null, A = !1;
  if (re && O)
    try {
      Ld(), we = Zu(l ? _w : a ? mw : aw, {
        model: ye,
        onAction: (ae) => {
          var Le, Ye, Ke;
          if ((ae == null ? void 0 : ae.type) === "toggle-playback") {
            Z(), de ? de.playback.toggle() : (Le = i.ownOutputVideo) == null || Le.player.toggle(), U();
            return;
          }
          if (_e(), (ae == null ? void 0 : ae.type) === "open-editor") {
            Z(), a || (ye.aspectOpen = !1), (Ye = n.openEditor) == null || Ye.call(n);
            return;
          }
          if (a) {
            if ((ae == null ? void 0 : ae.type) === "add-image-file") {
              F(ae.file);
              return;
            }
            O.apply(ae) && U();
            return;
          }
          if ((ae == null ? void 0 : ae.type) === "toggle-aspect") {
            ye.aspectOpen = !ye.aspectOpen;
            return;
          }
          if ((ae == null ? void 0 : ae.type) === "close-aspect") {
            ye.aspectOpen = !1;
            return;
          }
          let Oe = ae;
          if ((ae == null ? void 0 : ae.type) === "add-frame") {
            const We = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Oe = {
              ...ae,
              ...$_(We, {
                width: _.width,
                height: _.height
              })
            };
          } else if ((ae == null ? void 0 : ae.type) === "delete-frame") {
            const We = Ii(vn(e));
            We && (n.view = Fg(We, {
              width: _.width,
              height: _.height
            }));
          }
          const Ne = ((Ke = n.cutoutFrame) == null ? void 0 : Ke.safeRect) || null;
          ye.aspectOpen = !1, O.apply({ ...Oe, safeRect: Ne }) && U();
        }
      }), we.mount(re), A = !0;
    } catch {
      we = null, A = !1;
    }
  const se = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    de && ge(), U();
  }) : null;
  se == null || se.observe(h);
  const y = (ae) => {
    var Ne, Le, Ye;
    W.raf = 0, W.inTick = !0;
    let Oe = !1;
    try {
      if (Oe = b.stepInertia(ae), W.needsDraw || Oe) {
        W.needsDraw = !1, de ? ge() : le();
        const Ke = l ? Kx(e, de) : null, We = Ke ? Mw(Ke) : null, mt = () => i0(e, vn(e)), bt = Ke && Ea(h, !!((Ne = e.flags) != null && Ne.collapsed)) ? Bx(e, We) : null;
        if ((Le = e.flags) != null && Le.collapsed || Xx(e, _, ve, bt), ye.viewUnavailable = ve.failed, l) {
          const Tt = $({ ...Ke, display: Yx(e, We) }, mt);
          Tt && (ye.status = Tt);
        }
      }
    } finally {
      W.inTick = !1;
    }
    (Oe || W.needsDraw) && !W.raf && (W.raf = requestAnimationFrame(y)), lx() && (!n.debugLastTs || ae - n.debugLastTs > 1200) && (n.debugLastTs = ae, n.mode, xu(e), Vo(g), Vo(h), Vo(_), Vo(g.parentElement), Vo((Ye = g.parentElement) == null ? void 0 : Ye.parentElement), Number(_.width || 0), Number(_.height || 0), void 0);
  }, b = rd({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (ae) => {
      n.view = ae;
    },
    getViewportSize: () => {
      const ae = _.getBoundingClientRect();
      return {
        w: Math.max(1, Number(ae.width || _.clientWidth || 0)),
        h: Math.max(1, Number(ae.height || _.clientHeight || 0))
      };
    },
    getInvert: () => {
      const ae = dp();
      return {
        x: ae.invert_view_x ? -1 : 1,
        y: ae.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      U();
    }
  }), E = a ? h : g, S = (ae) => {
    const Oe = _.getBoundingClientRect();
    return {
      x: (Number(ae.clientX) - Oe.left) * (_.width / Math.max(1, Oe.width)),
      y: (Number(ae.clientY) - Oe.top) * (_.height / Math.max(1, Oe.height))
    };
  }, j = (ae) => {
    var Le, Ye;
    if (!a || l || !d) return;
    const Oe = vn(e), Ne = sp(
      gu(Oe, yl(e)),
      String(((Le = Oe == null ? void 0 : Oe.active) == null ? void 0 : Le.selected_sticker_id) || ""),
      S(ae),
      Pu(e, _.width, _.height)
    );
    if (!Ne) {
      _.style.cursor = "grab";
      return;
    }
    if (((Ye = Ne.item) == null ? void 0 : Ye.locked) === !0) {
      _.style.cursor = "default";
      return;
    }
    _.style.cursor = Ne.hit.cursor || "default";
  };
  _.addEventListener("pointerdown", (ae) => {
    var mt, bt, Tt, Nt, Pn, qe, sn, Ut, fi, Wr, pi;
    if (!Wn(ae, E) || ae.button !== 0) return;
    if (!a) {
      const on = Ii(vn(e)), yn = n.cutoutFrame;
      if (!on) {
        (mt = g.focus) == null || mt.call(g, { preventScroll: !0 }), (bt = _.setPointerCapture) == null || bt.call(_, ae.pointerId), _.style.cursor = "grabbing", b.startDrag(ae.clientX, ae.clientY, ae.pointerId);
        return;
      }
      if (on.locked === !0 || !yn || !O) return;
      const Ur = S(ae);
      let Pr;
      if (ae.shiftKey) {
        const dr = Dg({
          frame: yn,
          point: Ur,
          startRollDeg: Number(on.roll_deg ?? on.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!dr) return;
        Pr = { kind: "roll", pointerId: ae.pointerId, rollGesture: dr };
      } else {
        const dr = ((Tt = vn(e)) == null ? void 0 : Tt.ui_settings) || dp();
        Pr = {
          kind: "pan",
          pointerId: ae.pointerId,
          startPoint: Ur,
          startShot: { ...on },
          focalPx: Oi(yn, on),
          invertX: dr.invert_view_x === !0,
          invertY: dr.invert_view_y === !0
        };
      }
      Z(), (Nt = g.focus) == null || Nt.call(g, { preventScroll: !0 }), (Pn = _.setPointerCapture) == null || Pn.call(_, ae.pointerId), _.style.cursor = "grabbing", O.beginGesture(), C = Pr;
      return;
    }
    if (!d) return;
    const Oe = S(ae), Ne = vn(e), Le = String(((qe = Ne == null ? void 0 : Ne.active) == null ? void 0 : qe.selected_sticker_id) || ""), Ye = Pu(e, _.width, _.height);
    (sn = g.focus) == null || sn.call(g, { preventScroll: !0 });
    const Ke = () => sp(gu(Ne, yl(e)), Le, Oe, Ye);
    let We = l ? null : Ke();
    if (We && (de != null && de.playback.playing) && (_e(), We = Ke()), We && O) {
      if (b.stopMotion(), Z(), String(((Ut = We.item) == null ? void 0 : Ut.id) || "") !== Le && O.apply({ type: "select-sticker", id: We.item.id }), ((fi = We.item) == null ? void 0 : fi.locked) === !0) {
        U();
        return;
      }
      const on = Oe, yn = We.geometry.center;
      ne = {
        active: !0,
        kind: We.hit.kind,
        pointerId: ae.pointerId,
        startPoint: on,
        startCenter: { ...yn },
        startSticker: { ...We.item },
        startDistance: Math.max(1, Math.hypot(on.x - yn.x, on.y - yn.y)),
        startAngle: Math.atan2(on.y - yn.y, on.x - yn.x),
        projection: Ye
      }, O.beginGesture(), (Wr = _.setPointerCapture) == null || Wr.call(_, ae.pointerId), _.style.cursor = We.hit.kind === "rotate" ? "grabbing" : We.hit.kind === "move" ? "move" : We.hit.cursor, U();
      return;
    }
    (pi = _.setPointerCapture) == null || pi.call(_, ae.pointerId), _.style.cursor = "grabbing", b.startDrag(ae.clientX, ae.clientY, ae.pointerId);
  }), _.addEventListener("pointermove", (ae) => {
    if (!a) {
      if (!C) {
        if (!b.state.drag.active) return;
        Wn(ae, E), b.moveDrag(ae.clientX, ae.clientY, "pano");
        return;
      }
      if (C.pointerId !== ae.pointerId || !O) return;
      if (Wn(ae, E), C.kind === "pan") {
        const Ne = S(ae);
        O.updateGesture({
          type: "pan-camera",
          startShot: C.startShot,
          dx: Ne.x - C.startPoint.x,
          dy: Ne.y - C.startPoint.y,
          focalPx: C.focalPx,
          invertX: C.invertX,
          invertY: C.invertY
        });
        return;
      }
      const Oe = Lg(C.rollGesture, S(ae), ae);
      if (!Oe) return;
      C.rollGesture = Oe.gesture, O.updateGesture({ type: "set-roll", value: Oe.rollDeg });
      return;
    }
    if (!ne && !b.state.drag.active) {
      j(ae);
      return;
    }
    if (ne) {
      if (ne.pointerId !== ae.pointerId || !O) return;
      Wn(ae, E);
      const Oe = S(ae);
      let Ne = ne.startSticker;
      if (ne.kind === "move")
        Ne = Ow(
          ne.startSticker,
          {
            x: ne.startCenter.x + Oe.x - ne.startPoint.x,
            y: ne.startCenter.y + Oe.y - ne.startPoint.y
          },
          ne.projection
        );
      else if (ne.kind === "scale") {
        const Le = Math.hypot(Oe.x - ne.startCenter.x, Oe.y - ne.startCenter.y);
        Ne = Fw(ne.startSticker, ne.startDistance, Le);
      } else if (ne.kind === "rotate") {
        const Le = Math.atan2(Oe.y - ne.startCenter.y, Oe.x - ne.startCenter.x);
        Ne = Tw(ne.startSticker, ne.startAngle, Le, ae.shiftKey === !0);
      }
      O.updateGesture({ type: "set-transform", value: Ne }), U();
      return;
    }
    !d || !b.state.drag.active || (Wn(ae, E), b.moveDrag(ae.clientX, ae.clientY, "pano"));
  });
  const H = () => {
    var Oe, Ne;
    if (!C && !ne) {
      if (!b.state.drag.active) return;
      b.endDrag(), _.style.cursor = "grab", U();
      return;
    }
    if (!O) return;
    const ae = (C == null ? void 0 : C.pointerId) ?? (ne == null ? void 0 : ne.pointerId);
    C = null, ne = null;
    try {
      (Oe = _.hasPointerCapture) != null && Oe.call(_, ae) && ((Ne = _.releasePointerCapture) == null || Ne.call(_, ae));
    } catch {
    }
    O.cancelGesture(), _.style.cursor = "grab", U();
  }, X = (ae, Oe = !1) => {
    var Ne, Le, Ye, Ke;
    if (!a) {
      if (!C) {
        if (!b.state.drag.active) return;
        Wn(ae, E), (Ne = _.releasePointerCapture) == null || Ne.call(_, ae.pointerId), _.style.cursor = "grab", b.endDrag(), U();
        return;
      }
      if (C.pointerId !== ae.pointerId || !O) return;
      Wn(ae, E), C = null, (Le = _.releasePointerCapture) == null || Le.call(_, ae.pointerId), _.style.cursor = "grab", Oe ? O.cancelGesture() : O.commitGesture(), j(ae), U();
      return;
    }
    if (ne) {
      if (ne.pointerId !== ae.pointerId || !O) return;
      Wn(ae, E), ne = null, (Ye = _.releasePointerCapture) == null || Ye.call(_, ae.pointerId), _.style.cursor = "grab", Oe ? O.cancelGesture() : O.commitGesture(), U();
      return;
    }
    !d || !b.state.drag.active || (Wn(ae, E), (Ke = _.releasePointerCapture) == null || Ke.call(_, ae.pointerId), _.style.cursor = "grab", b.endDrag(), U());
  };
  _.addEventListener("pointerup", X), _.addEventListener("pointercancel", (ae) => X(ae, !0)), _.addEventListener("lostpointercapture", H), _.addEventListener("pointerleave", (ae) => {
    !a && C || ne || b.state.drag.active && X(ae);
  });
  const L = (ae) => {
    const Oe = document.activeElement;
    if (Oe !== g && !g.contains(Oe)) return;
    if (ae.key === "Escape" && (C || ne) && O) {
      H(), Nu(ae);
      return;
    }
    if (!a || l || ae.key !== "Delete" && ae.key !== "Backspace" || !O) return;
    const Ne = ae.target, Le = String((Ne == null ? void 0 : Ne.tagName) || "").toUpperCase();
    Le === "INPUT" || Le === "TEXTAREA" || Ne != null && Ne.isContentEditable || ye.canDelete === !0 && (_e(), Z(), O.apply({ type: "delete-selected" }) && U(), Nu(ae));
  };
  window.addEventListener("keydown", L, !0);
  const D = ix({
    requestFrame: (ae) => requestAnimationFrame(ae),
    cancelFrame: (ae) => cancelAnimationFrame(ae),
    restore: (ae) => Qx(ae)
  }), k = (ae) => {
    var Ne, Le, Ye, Ke, We, mt;
    if (!Wn(ae, E)) return;
    if (!a) {
      const bt = Ii(vn(e));
      if (bt && bt.locked !== !0 && O) {
        const Tt = Ua(ae);
        Tt !== 0 && (z || (Z(), O.beginGesture(), z = !0), O.updateGesture({
          type: "step-fov",
          direction: Tt
        }) ? (Q && clearTimeout(Q), Q = setTimeout(w, 180), U()) : O.hasGestureChanges() || (O.cancelGesture(), z = !1));
      } else if (!bt) {
        const Tt = yp();
        b.applyWheelEvent(ae) && U(), D.schedule(Tt);
      }
      (Ne = ae.preventDefault) == null || Ne.call(ae), (Le = ae.stopPropagation) == null || Le.call(ae), (Ye = ae.stopImmediatePropagation) == null || Ye.call(ae);
      return;
    }
    if (!d) return;
    const Oe = yp();
    b.applyWheelEvent(ae) && U(), (Ke = ae.preventDefault) == null || Ke.call(ae), (We = ae.stopPropagation) == null || We.call(ae), (mt = ae.stopImmediatePropagation) == null || mt.call(ae), D.schedule(Oe);
  }, R = a ? [h, _] : [h];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((ae) => {
    R.forEach((Oe) => Oe.addEventListener(ae, k, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((ae) => {
    _.addEventListener(ae, (Oe) => Wn(Oe, E)), h.addEventListener(ae, (Oe) => Wn(Oe, E));
  });
  const ee = Sr(e, "state_json");
  let ce = null, Se = null;
  ee && !ee.__panoPreviewPatchedCb && (ce = ee.callback, Se = (ae) => {
    const Oe = ce ? ce(ae) : void 0;
    return U(), Oe;
  }, ee.callback = Se, ee.__panoPreviewPatchedCb = Se);
  const ue = Sr(e, "bg_color");
  let he = null, me = null;
  ue && !ue.__panoPreviewPatchedCb && (he = ue.callback, me = (ae) => {
    const Oe = he ? he(ae) : void 0;
    return U(), Oe;
  }, ue.callback = me, ue.__panoPreviewPatchedCb = me);
  const J = l ? Sr(e, "output_size") : null, fe = J == null ? void 0 : J.callback, K = J ? (ae) => {
    const Oe = fe ? fe(ae) : void 0;
    return U(), Oe;
  } : null;
  J && (J.callback = K);
  const p = e.onRemoved, N = e.onResize, v = e.onExecuted, I = e.onDragOver, q = e.onDragDrop;
  let pe = null;
  const V = () => {
    a && (ye.dropActive = !0, pe && clearTimeout(pe), pe = setTimeout(() => {
      pe = null, ye.dropActive = !1;
    }, 140));
  }, oe = c ? function(ae) {
    return (I ? I.apply(this, arguments) : !1) === !0 ? !0 : Vd(ae == null ? void 0 : ae.dataTransfer) ? (V(), !0) : !1;
  } : null, Pe = c ? function(ae) {
    var Le;
    if ((q ? q.apply(this, arguments) : !1) === !0) return !0;
    const Ne = Array.from(((Le = ae == null ? void 0 : ae.dataTransfer) == null ? void 0 : Le.files) || []).find((Ye) => rr(Ye));
    return Ne ? (pe && clearTimeout(pe), pe = null, ye.dropActive = !1, F(Ne), !0) : !1;
  } : null;
  c && (e.onDragOver = oe, e.onDragDrop = Pe);
  const Ae = c ? rx(g, {
    onActive: (ae) => {
      if (ae) {
        V();
        return;
      }
      pe && clearTimeout(pe), pe = null, ye.dropActive = !1;
    },
    onDrop: (ae) => {
      F(ae);
    }
  }) : () => {
  }, xe = function(ae) {
    i.outputFromRun = !0;
    const Oe = o0(e, ae);
    ni(e, Oe ? "executed" : "sync", ae), U();
    const Ne = v ? v.apply(this, arguments) : void 0;
    return Uo(e), Ne;
  };
  e.onExecuted = xe;
  const Ce = e.onConnectionsChange, $e = function(ae, Oe) {
    const Ne = qf(e, ae, Oe, [...wd, ...xd]), Le = qf(e, ae, Oe, lr), Ye = arguments, Ke = Ce ? Ce.apply(this, Ye) : void 0, We = () => {
      W.destroyed || (Le && Nx(e), Ne && ni(e, "connection-change"), Uo(e), U());
    };
    return We(), queueMicrotask(We), Ke;
  };
  e.onConnectionsChange = $e;
  const ze = function() {
    const ae = N ? N.apply(this, arguments) : void 0;
    return St(this).userResized = !0, U(), ae;
  };
  e.onResize = ze;
  const Ge = function() {
    return Re(), Mu.unregister(this), p ? p.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ge;
  const Re = () => {
    var ae, Oe, Ne, Le, Ye, Ke, We;
    W.destroyed = !0, (ae = se == null ? void 0 : se.disconnect) == null || ae.call(se), a ? Z() : ie(), _.removeEventListener("lostpointercapture", H), Ae(), G(), window.removeEventListener("keydown", L, !0), o.flushers.delete(be), (Oe = O == null ? void 0 : O.destroy) == null || Oe.call(O), (Ne = we == null ? void 0 : we.unmount) == null || Ne.call(we), de && (de.playback.dispose(), de.video.remove(), de.stickerVideo.remove(), n.playback === de && (n.playback = null)), ve.dispose(), n.scene = null, (Ye = (Le = n.rasterCache) == null ? void 0 : Le.dispose) == null || Ye.call(Le), n.rasterCache = null, n.rasterReady = null, P(), D.dispose(), pe && clearTimeout(pe), pe = null, $d.disposeOwner(e), so(e), Hd(e), W.raf && cancelAnimationFrame(W.raf), W.raf = 0, ((Ke = n.cutout) == null ? void 0 : Ke.session) === O && (n.cutout = null), ((We = n.stickers) == null ? void 0 : We.session) === O && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === ze && (e.onResize = N), e.onExecuted === xe && (e.onExecuted = v), e.onConnectionsChange === $e && (e.onConnectionsChange = Ce), Se && (ee == null ? void 0 : ee.callback) === Se && (ee.callback = ce), Se && (ee == null ? void 0 : ee.__panoPreviewPatchedCb) === Se && delete ee.__panoPreviewPatchedCb, me && (ue == null ? void 0 : ue.callback) === me && (ue.callback = he), me && (ue == null ? void 0 : ue.__panoPreviewPatchedCb) === me && delete ue.__panoPreviewPatchedCb, K && J.callback === K && (J.callback = fe), e.onDragOver === oe && (e.onDragOver = I), e.onDragDrop === Pe && (e.onDragDrop = q), e.onRemoved === Ge && (e.onRemoved = p);
  };
  n.restore = Re, n.cutout = O && A && !a ? { session: O, model: ye } : null, n.stickers = O && A && a ? { session: O, model: ye } : null, n.dom = {
    widget: T,
    root: g,
    canvas: _,
    requestDraw: U,
    state: W,
    emptyHintEl: te,
    nodeSurface: n.cutout
  }, Mu.register(e), e.graph && ni(e, "attach"), U();
}
function vp(e, t = {}) {
  Zg(e).attach({
    ...t,
    mode: "cutout"
  });
}
function Sp(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (Jg(e) && !r) {
    zd(e);
    return;
  }
  Zg(e).attach(t);
}
function sk(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function ak(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let m = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (m = Math.min(m, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * m)),
    height: Math.max(1, Math.round(c * m))
  };
}
function lk({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var m;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let s = !1, a = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const x = l();
    return x === a || (a = x, i(x)), x;
  }, d = () => c();
  return (m = t == null ? void 0 : t.addEventListener) == null || m.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var x;
    if (s || !e || !t) return !1;
    if (l()) {
      try {
        await ((x = t.exitFullscreen) == null ? void 0 : x.call(t));
      } catch {
      }
      return s ? !1 : (c(), l());
    }
    if (t.fullscreenEnabled && typeof e.requestFullscreen == "function")
      try {
        if (await e.requestFullscreen(), s) return !1;
        if (l())
          return c(), !0;
      } catch {
      }
    return s || (o(), c()), !1;
  }, isActive: l, destroy: () => {
    var x, g, h;
    if (!s) {
      if (s = !0, (x = t == null ? void 0 : t.removeEventListener) == null || x.call(t, "fullscreenchange", d), l())
        try {
          const _ = (g = t.exitFullscreen) == null ? void 0 : g.call(t);
          (h = _ == null ? void 0 : _.catch) == null || h.call(_, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const ck = { class: "pano-preview-node-surface" }, uk = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), De("div", ck, [
      Be(en, {
        icon: e.model.fullscreen ? tt(je).fullscreen_close : tt(je).fullscreen,
        label: e.model.fullscreen ? "Exit Fullscreen" : "Fullscreen",
        tip: e.model.fullscreen ? "Exit fullscreen" : "Fullscreen",
        pressed: e.model.fullscreen ? "true" : "false",
        "extra-class": "pano-preview-node-fullscreen",
        attrs: { "data-action": "toggle-fullscreen" },
        onClick: n[0] || (n[0] = (i) => {
          var o;
          return (o = t.onAction) == null ? void 0 : o.call(t, { type: "toggle-fullscreen" });
        })
      }, null, 8, ["icon", "label", "tip", "pressed"]),
      e.model.viewUnavailable ? (Te(), Gn(Ul, { key: 0 })) : ht("", !0)
    ]));
  }
}, da = 140, dk = 180, _p = 40, Oc = 10;
function wp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function xp(e, t) {
  const r = wp(e), n = wp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function kp(e) {
  var o;
  if (!e || typeof e != "object") return "";
  const t = String(e.filename || "").trim();
  if (!t) return "";
  const r = new URLSearchParams();
  r.set("filename", t);
  const n = String(
    e.storage || (String(e.type || "").trim().toLowerCase() === "comfy_image" ? "output" : e.type) || "output"
  );
  r.set("type", n), e.subfolder && r.set("subfolder", String(e.subfolder));
  const i = `/view?${r.toString()}`;
  return typeof ((o = pn) == null ? void 0 : o.apiURL) == "function" ? pn.apiURL(i) : i;
}
function ao(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return ao(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return kp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = ao(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : kp(e);
}
function s0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function fk(e) {
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
function Au(e) {
  var i;
  const t = (i = or) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (xp(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (xp(o, r)) return t[o];
  return null;
}
function pk(e) {
  var n, i;
  const t = Au(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const s of o) {
        const a = ao(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function hk(e, t = "erp_image") {
  var m, x, g, h, _, te, G;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((re) => String((re == null ? void 0 : re.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((re, T) => String((re == null ? void 0 : re.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(T))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (g = (x = (m = or) == null ? void 0 : m.graph) == null ? void 0 : x.getNodeById) == null ? void 0 : g.call(x, o), a = Au(o), l = Au(e == null ? void 0 : e.id), c = [
    (h = l == null ? void 0 : l.ui) == null ? void 0 : h.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (_ = a == null ? void 0 : a.ui) == null ? void 0 : _.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const re of c)
    if (Array.isArray(re))
      for (const T of re) {
        const W = ao(T);
        if (W) return W;
      }
  let d = [];
  try {
    d = typeof ((te = or) == null ? void 0 : te.getNodeImageUrls) == "function" ? or.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const re of d) {
      const T = ao(re);
      if (T) return T;
    }
  if (s) {
    const re = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const T of re) {
      const W = ao(T);
      if (W) return W;
    }
  }
  const u = (G = s == null ? void 0 : s.widgets) == null ? void 0 : G.find((re) => String((re == null ? void 0 : re.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? pn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Fc(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function Mp(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !s0(o) || r <= 1 || n <= 1) {
    Fc(t, r, n);
    return;
  }
  if (s.failed) {
    Fc(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: sl(i, r, n),
    background: { media: o, revision: fk(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : Fc(t, r, n);
}
function Pp(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class mk {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = ng(() => this.requestDraw()), this.controller = rd({
      getView: () => this.view,
      setView: (n) => {
        this.view = {
          yaw: Ht(Number((n == null ? void 0 : n.yaw) || 0)),
          pitch: Ie(Number((n == null ? void 0 : n.pitch) || 0), -89.9, 89.9),
          fov: Ie(Number((n == null ? void 0 : n.fov) || 100), 35, 140)
        };
      },
      getViewportSize: () => {
        var i, o, s, a;
        const n = (o = (i = this.canvas) == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : o.call(i);
        return {
          w: Math.max(1, Number((n == null ? void 0 : n.width) || ((s = this.canvas) == null ? void 0 : s.clientWidth) || 0)),
          h: Math.max(1, Number((n == null ? void 0 : n.height) || ((a = this.canvas) == null ? void 0 : a.clientHeight) || 0))
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
    var n, i, o;
    const t = this;
    this.node.onExecuted = function() {
      const s = t.orig.onExecuted ? t.orig.onExecuted.apply(this, arguments) : void 0;
      return t.refreshImage(), s;
    }, this.node.onConnectionsChange = function() {
      const s = t.orig.onConnectionsChange ? t.orig.onConnectionsChange.apply(this, arguments) : void 0;
      return t.refreshImage(), s;
    }, this.node.onResize = function() {
      const s = t.orig.onResize ? t.orig.onResize.apply(this, arguments) : void 0;
      return t.requestDraw(), s;
    }, this.node.onRemoved = function() {
      const s = t.orig.onRemoved ? t.orig.onRemoved.apply(this, arguments) : void 0;
      return t.teardown(), s;
    };
    const r = ((o = (i = (n = this.node) == null ? void 0 : n.widgets) == null ? void 0 : i.find) == null ? void 0 : o.call(i, (s) => (s == null ? void 0 : s.name) === "coverage")) || null;
    r && (this.orig.coverageWidgetCallback = typeof r.callback == "function" ? r.callback.bind(r) : null, r.callback = (...s) => {
      const a = t.orig.coverageWidgetCallback ? t.orig.coverageWidgetCallback(...s) : void 0;
      return t.requestDraw(), a;
    });
  }
  installErrorForeground() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      var o;
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      if (!r || (o = this.flags) != null && o.collapsed || !t.errorText) return n;
      const i = t.getLegacyPreviewRect();
      return r.save(), r.fillStyle = "rgba(18,18,22,0.92)", r.strokeStyle = "rgba(82,82,89,1)", r.lineWidth = 1, r.beginPath(), r.roundRect(i.x, i.y, i.w, i.h, 8), r.fill(), r.stroke(), r.fillStyle = "rgba(236,236,242,0.92)", r.font = "600 12px sans-serif", r.textAlign = "center", r.textBaseline = "middle", r.fillText(t.errorText, i.x + i.w * 0.5, i.y + i.h * 0.5), r.restore(), n;
    };
  }
  attachDom() {
    var t;
    try {
      this.root = document.createElement("div"), this.root.className = "pano-node-preview-dom pano-node-preview--preview", this.root.setAttribute("data-capture-wheel", "true"), this.root.setAttribute("tabindex", "0"), this.root.style.cssText = [
        "width:100%",
        "height:100%",
        `min-height:${da}px`,
        "position:relative",
        "display:block",
        "overflow:hidden",
        "background:#070707",
        "border-radius:8px",
        "border:1px solid rgba(63,63,70,1)"
      ].join(";"), this.canvas = rn({ label: "preview-node.surface" }), this.canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block;touch-action:none;cursor:grab;", this.root.appendChild(this.canvas);
      const r = {
        serialize: !1,
        hideOnZoom: !1,
        getValue() {
          return "";
        },
        setValue() {
        },
        getMinHeight() {
          return da;
        },
        getHeight() {
          return da;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = pl(_u(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(da, Number(o.minHeight || 0)),
            minWidth: Math.max(dk, Number(o.minWidth || 0))
          };
        };
      }
      this.ctx = this.canvas.getContext("2d"), this.resizeObserver = typeof ResizeObserver < "u" ? new ResizeObserver(() => this.onResizeDom()) : null, (t = this.resizeObserver) == null || t.observe(this.root), this.bindDomInput(this.canvas, this.root), this.mountNodeSurface(), this.onResizeDom();
    } catch {
      this.errorText = "Preview mount failed", this.installErrorForeground();
    }
  }
  mountNodeSurface() {
    var t, r, n, i, o, s;
    if (!this.root || this.surfaceApp) return !1;
    try {
      return Ld(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ bo({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = lk({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = Zu(uk, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), Vr(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, Vr(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = qh(r), t.addEventListener("pointerdown", (o) => {
      var s, a, l;
      o.button === 0 && ((s = r.focus) == null || s.call(r, { preventScroll: !0 }), (a = t.setPointerCapture) == null || a.call(t, o.pointerId), t.style.cursor = "grabbing", this.controller.startDrag(o.clientX, o.clientY, o.pointerId), o.preventDefault(), o.stopPropagation(), (l = o.stopImmediatePropagation) == null || l.call(o));
    }), t.addEventListener("pointermove", (o) => {
      var s;
      this.controller.state.drag.active && (this.controller.moveDrag(o.clientX, o.clientY, "pano"), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
    const n = (o) => {
      var s, a;
      this.controller.state.drag.active && ((s = t.releasePointerCapture) == null || s.call(t, o.pointerId), t.style.cursor = "grab", this.controller.endDrag(), this.requestDraw(), o.preventDefault(), o.stopPropagation(), (a = o.stopImmediatePropagation) == null || a.call(o));
    };
    t.addEventListener("pointerup", n), t.addEventListener("pointercancel", n), r.addEventListener("wheel", (o) => {
      var s;
      this.controller.applyWheelEvent(o), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }, { passive: !1, capture: !0 }), t.addEventListener("dblclick", (o) => {
      var s;
      this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o);
    }), r.addEventListener("keydown", (o) => {
      var s;
      sk(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !s0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Ea(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = or.canvas) != null && n.graph) || this.node.graph === or.canvas.graph);
  }
  attachLegacy() {
    const t = this;
    this.node.onDrawForeground = function(r) {
      const n = t.orig.onDrawForeground ? t.orig.onDrawForeground.apply(this, arguments) : void 0;
      return t.drawLegacy(r), n;
    }, this.node.onMouseDown = function(r, n) {
      var s;
      const i = t.localPoint(n);
      if (!i) return t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
      const o = t.getLegacyPreviewRect();
      return Pp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
    }, this.node.onMouseMove = function(r, n) {
      var s;
      if (!t.legacyDragPointer || !t.controller.state.drag.active)
        return t.orig.onMouseMove ? t.orig.onMouseMove.apply(this, arguments) : void 0;
      const i = t.localPoint(n);
      if (!i) return !0;
      const o = t.getLegacyPreviewRect();
      return t.controller.moveDrag(i.x - o.x, i.y - o.y, "pano"), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0;
    }, this.node.onMouseUp = function() {
      var r;
      return !t.legacyDragPointer && !t.controller.state.drag.active ? t.orig.onMouseUp ? t.orig.onMouseUp.apply(this, arguments) : void 0 : (t.legacyDragPointer = !1, t.controller.endDrag(), (r = this.setDirtyCanvas) == null || r.call(this, !0, !1), !0);
    }, this.node.onMouseWheel = function(r, n, i) {
      var l, c, d, u, f, m;
      const o = Ox(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !Pp(o.x, o.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const a = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), a && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = r == null ? void 0 : r.preventDefault) == null || u.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (m = r == null ? void 0 : r.stopImmediatePropagation) == null || m.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, s;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Oc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - _p - Oc);
    return { x: Oc, y: _p, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), Mp(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? tg : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = ak(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = pk(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = As(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const r = hk(this.node, this.imageInputName);
    if (!r) {
      (o = this.mediaCleanup) == null || o.call(this), this.mediaCleanup = null, this.img = null, this.previewView.release(), this.imgSrc = "", this.requestDraw();
      return;
    }
    if (r === this.imgSrc && this.img) return;
    (s = this.mediaCleanup) == null || s.call(this), this.mediaCleanup = null, this.imgSrc = r;
    const n = new Image();
    n.onload = () => {
      this.imgSrc === r && (this.img = n, this.requestDraw());
    }, n.onerror = () => {
      this.imgSrc === r && (this.img = null, this.previewView.release(), this.requestDraw());
    }, this.mediaCleanup = () => {
      n.onload = null, n.onerror = null;
    }, n.src = r;
  }
  requestDraw() {
    var t, r;
    if (!this.tearingDown) {
      if (this.needsDraw = !0, this.inTick) {
        this.queuedDuringTick = !0;
        return;
      }
      this.rafId || (this.rafId = requestAnimationFrame(this.tick)), this.canvas || (r = (t = this.node).setDirtyCanvas) == null || r.call(t, !0, !1);
    }
  }
  tick(t = performance.now()) {
    var i, o;
    this.rafId = 0, this.inTick = !0, this.queuedDuringTick = !1, this.needsDraw = !1, this.img instanceof HTMLVideoElement && !this.img.paused && !this.shown() && this.img.pause();
    const r = this.controller.stepInertia(t);
    this.canvas && this.ctx ? (this.syncCanvasSize(), Mp(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, m, x, g, h, _;
    if (((r = hg(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, Vr(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (x = (m = this.root) == null ? void 0 : m.remove) == null || x.call(m);
    } catch {
    }
    try {
      Yg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((_ = (h = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : h.find) == null ? void 0 : _.call(h, (te) => (te == null ? void 0 : te.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), Vr(this.node).runtime = null;
  }
}
function gk(e, t = {}) {
  if (!e || Vr(e).runtime) return;
  const r = new mk(e, t);
  Vr(e).runtime = r, r.attach();
}
function a0(e, t, r) {
  if (!(e != null && e.prototype) || typeof r != "function") return;
  const n = `__panoLifecyclePatched_${String(t || "default")}`;
  if (e[n]) return;
  e[n] = !0;
  const i = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const a = i ? i.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
  const o = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const a = o ? o.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
  const s = e.prototype.onAdded;
  e.prototype.onAdded = function() {
    const a = s ? s.apply(this, arguments) : void 0;
    try {
      r(this);
    } catch {
    }
    return a;
  };
}
function Gd(e) {
  return !!(e != null && e.prototype);
}
function ws(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function yk(e, t = {}) {
  Gd(e) || gk(e, {
    ...t,
    onOpen: ws(e, t.onOpen)
  });
}
function bk(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Gd(e)) {
    Sp(e, {
      ...n,
      onOpen: ws(e, t.onOpen)
    });
    return;
  }
  a0(e, "stickers_node_preview", (i) => {
    Sp(i, {
      ...n,
      onOpen: ws(i, t.onOpen)
    });
  });
}
function vk(e, t = {}) {
  if (!Gd(e)) {
    vp(e, {
      ...t,
      onOpen: ws(e, t.onOpen)
    });
    return;
  }
  a0(e, "cutout_preview", (r) => {
    vp(r, {
      ...t,
      onOpen: ws(r, t.onOpen)
    });
  });
}
const Tn = {
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
}, Fr = "pen";
function Np(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function Sk({ requestFrame: e, cancelFrame: t, tasks: r }) {
  const n = /* @__PURE__ */ new Set();
  let i = null;
  function o() {
    i = null;
    for (const [s, a] of Object.entries(r))
      n.delete(s) && a();
  }
  return {
    request(s) {
      n.add(s), i ?? (i = e(o));
    },
    cancel() {
      n.clear(), i !== null && t(i), i = null;
    }
  };
}
const ft = Object.freeze({
  // The state changed: Stickers, the Camera, the painting, the selection, the playhead.
  STATE: "state",
  // The view moved: the camera, the mode, a transition step.
  VIEW: "view",
  // The playhead moved (playback, a scrub): the state is drawn at another frame.
  PLAYHEAD: "playhead",
  // The painting changed (a stroke being drawn, strokes or rasters moved): its layers are drawn again from
  // the paint engine's canvases, while the Stickers and the Camera stay.
  PAINT: "paint",
  // Only the 2D overlay changed: a hover, a cursor, a handle.
  OVERLAY: "overlay",
  // Media arrived or changed: an image or a VIDEO frame loaded, a `scene` item or Spark loaded.
  MEDIA: "media",
  // The stage's Spark renderer has new splats or a new order (pano_spark_views.js): the stage draws again,
  // the camera preview does not.
  SPLAT_STAGE: "splat_stage",
  // The camera preview's Spark renderer has new splats or a new order: the preview draws again. The stage
  // draws with it (the frame draws all of the three.js canvas), its own Spark having nothing new to sort.
  SPLAT_PREVIEW: "splat_preview",
  // The stage changed size.
  RESIZE: "resize",
  // The WebGL context came back.
  CONTEXT: "context"
}), _k = new Set(Object.values(ft));
function wk({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(g) {
    try {
      g();
    } catch (h) {
      i(h);
    }
  }
  function m() {
    !o && !s && !a && (o = e(x));
  }
  function x(g) {
    o = 0, s = !0;
    try {
      const h = c;
      c = /* @__PURE__ */ new Map();
      for (const te of h.values()) f(() => te(g));
      if (a) return;
      const _ = l;
      l = /* @__PURE__ */ new Set(), (_.size || n()) && f(() => r(g, _));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && m();
  }
  return {
    requestDraw(g) {
      if (!_k.has(g)) throw new Error(`Unknown draw reason: ${g}`);
      g === ft.STATE && (u += 1), l.add(g), m();
    },
    requestFrame(g) {
      const h = d++;
      return c.set(h, g), m(), h;
    },
    cancelFrame(g) {
      c.delete(g);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      m();
    },
    get stateRevision() {
      return u;
    },
    // Whether a frame is pending.
    get pending() {
      return o !== 0;
    },
    stop() {
      a = !0, o && t(o), o = 0, c.clear(), l.clear();
    }
  };
}
const xk = { class: "pano-floating-right" }, kk = {
  key: 0,
  class: "pano-floating-space"
}, Mk = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, Pk = ["data-settled"], Nk = ["data-ready", "data-settled"], Ak = ["aria-label", "data-tip"], Ck = {
  key: 1,
  class: "pano-camera-preview-label"
}, Ik = {
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
    return (t, r) => (Te(), De(Ze, null, [
      ke("div", xk, [
        e.space ? zr((Te(), De("div", kk, [
          ke("div", Mk, [
            (Te(!0), De(Ze, null, Pt(e.space.modes, (n) => (Te(), Gn(en, {
              key: n.key,
              "extra-class": { active: n.key === e.space.mode },
              icon: n.icon,
              label: n.label,
              tip: n.tip,
              pressed: n.key === e.space.mode ? "true" : "false",
              attrs: { "data-space-mode": n.key }
            }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"]))), 128))
          ]),
          Be(en, {
            icon: e.space.frame.icon,
            label: e.space.frame.label,
            tip: e.space.frame.tip,
            attrs: { "data-action": e.space.frame.action, disabled: e.space.frameDisabled === !0 }
          }, null, 8, ["icon", "label", "tip", "attrs"])
        ], 512)), [
          [Ei, e.space.visible]
        ]) : ht("", !0),
        (Te(!0), De(Ze, null, Pt(e.buttons, (n) => (Te(), Gn(en, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      zr(ke("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        ke("div", {
          class: gt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: It({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = ke("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            ke("canvas", { "data-camera-preview-canvas": "" })
          ], -1)),
          e.previewToggle.visible ? (Te(), De("button", {
            key: 0,
            class: "pano-btn pano-btn-icon pano-camera-preview-toggle",
            type: "button",
            "data-action": "toggle-output-preview-size",
            "aria-label": e.previewToggle.label || "Expand Preview",
            "data-tip": e.previewToggle.tip || "Expand preview"
          }, [
            Be($t, {
              icon: e.previewToggle.icon
            }, null, 8, ["icon"])
          ], 8, Ak)) : ht("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Te(), De("div", Ck, nt(e.preview.label || "Preview unavailable"), 1)) : ht("", !0)
        ], 14, Nk)
      ], 8, Pk), [
        [Ei, e.preview.visible]
      ])
    ], 64));
  }
}, Ek = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, Ok = ["y2", "transform"], Fk = ["transform"], Tk = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => zr((Te(), De("div", {
      class: gt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Te(), De("svg", Ek, [
        o[1] || (o[1] = ke("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Te(!0), De(Ze, null, Pt(tt(r), (s) => (Te(), De("line", {
          key: s,
          class: gt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, Ok))), 128)),
        ke("g", { transform: n.value }, [...o[0] || (o[0] = [
          ke("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, Fk),
        o[2] || (o[2] = ke("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ei, e.model.visible === !0]
    ]);
  }
}, Dk = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: gt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(Vg, {
        model: e.model,
        mode: "rail",
        "data-aspect-action": "frame-aspect-set"
      }, null, 8, ["model"]),
      Be(en, {
        icon: e.model.rotateIcon,
        label: "Toggle Portrait/Landscape",
        tip: "Toggle portrait/landscape",
        attrs: { "data-action": "frame-rotate-90", disabled: e.model.disabled === !0 }
      }, null, 8, ["icon", "attrs"]),
      Be(Tk, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, Lk = ["aria-label"], Rk = { class: "pano-canvas-confirm-title" }, Vk = { class: "pano-canvas-confirm-text" }, $k = { class: "pano-canvas-confirm-actions" }, zk = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, jk = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ qt(null), n = /* @__PURE__ */ qt(null);
    let i = null;
    function o() {
      const u = n.value;
      return u ? Array.from(u.querySelectorAll(
        "button:not([disabled]), [data-action]:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((f) => f instanceof HTMLElement ? !f.hidden && f.tabIndex >= 0 && f.offsetParent !== null : !1) : [];
    }
    function s(u) {
      const f = n.value;
      if (!f) return;
      const m = f.querySelector(`[data-action='${u}']`);
      m instanceof HTMLButtonElement && m.click();
    }
    function a() {
      var g;
      const u = n.value;
      if (!u) return;
      const f = u.querySelector("[data-action='confirm-accept']");
      if (f instanceof HTMLElement) {
        f.focus();
        return;
      }
      const x = o()[0] || u;
      (g = x == null ? void 0 : x.focus) == null || g.call(x);
    }
    function l() {
      i instanceof HTMLElement && i.isConnected && i.focus(), i = null;
    }
    function c(u) {
      var _;
      if (u.defaultPrevented) return;
      if (u.key === "Escape") {
        u.preventDefault(), u.stopPropagation(), s("confirm-cancel");
        return;
      }
      if (u.key !== "Tab") return;
      const f = o(), m = n.value;
      if (!f.length) {
        u.preventDefault(), (_ = m == null ? void 0 : m.focus) == null || _.call(m);
        return;
      }
      const x = f[0], g = f[f.length - 1], h = document.activeElement;
      if (u.shiftKey) {
        (h === x || h === m || !(m != null && m.contains(h))) && (u.preventDefault(), g.focus());
        return;
      }
      (h === g || !(m != null && m.contains(h))) && (u.preventDefault(), x.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return Ni(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, Al(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), Ps(() => {
      l();
    }), (u, f) => e.model.visible === !0 ? (Te(), De("div", {
      key: 0,
      ref_key: "overlayRef",
      ref: r,
      class: "pano-canvas-confirm",
      "data-confirm-overlay": "",
      role: "presentation",
      onClick: At(d, ["self"])
    }, [
      ke("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        ke("div", Rk, nt(e.model.title), 1),
        ke("div", Vk, nt(e.model.text), 1),
        ke("div", $k, [
          f[0] || (f[0] = ke("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          ke("button", zk, nt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, Lk)
    ], 512)) : ht("", !0);
  }
}, Hk = ["data-paint-pane"], Gk = ["hidden"], Kk = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Wk = ["aria-pressed", "disabled"], Uk = ["hidden"], Bk = { class: "pano-paint-color-pop-head" }, Yk = { class: "pano-paint-color-field" }, qk = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Xk = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Jk = { class: "pano-paint-color-field" }, Zk = { class: "pano-paint-alpha-wrap" }, Qk = ["value"], eM = { "data-paint-alpha-value": "" }, tM = ["hidden"], nM = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, rM = ["data-paint-history-index", "aria-label", "disabled"], iM = ["data-paint-footer"], oM = ["data-paint-group"], sM = ["hidden"], aM = ["value", "disabled"], lM = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, cM = ["hidden"], uM = {
  __name: "PanoPaintDock",
  props: {
    paintSwatches: { type: Array, default: () => [] },
    panes: { type: Array, default: () => [] },
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    function t(n) {
      return { "--swatch": String((n == null ? void 0 : n.cssColor) || "") };
    }
    function r(n) {
      return n ? { "--swatch": String(n.cssColor || "") } : {};
    }
    return (n, i) => (Te(), De("div", {
      class: gt(["pano-paint-dock", { "is-hidden": e.state.visible === !1 }]),
      "data-paint-dock": ""
    }, [
      (Te(!0), De(Ze, null, Pt(e.panes, (o) => {
        var s;
        return Te(), De("div", {
          key: o.key,
          class: gt(["pano-paint-pane", { "is-active": e.state.activePane === o.key }]),
          "data-paint-pane": o.key
        }, [
          o.showColorFloat ? (Te(), De("div", {
            key: 0,
            class: gt(["pano-paint-color-float", { disabled: e.state.colorEnabled === !1 }]),
            "data-paint-color-row": "",
            hidden: e.state.showColorRow === !1
          }, [
            (Te(!0), De(Ze, null, Pt(e.paintSwatches, (a) => (Te(), De("button", {
              key: a.id,
              class: gt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: It(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Kk))), 128)),
            ke("button", {
              class: gt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: It({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Wk),
            ke("div", {
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
              ke("div", Bk, [
                ke("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: It({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = ke("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              ke("div", Yk, [
                ke("div", qk, [
                  ke("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: It({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                ke("div", Xk, [
                  ke("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: It({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              ke("label", Jk, [
                i[1] || (i[1] = ke("span", null, "Opacity", -1)),
                ke("div", Zk, [
                  ke("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Qk),
                  ke("span", eM, nt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              ke("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                ke("div", nM, [
                  (Te(!0), De(Ze, null, Pt(e.state.historyEntries || [], (a) => (Te(), De("button", {
                    key: a.index,
                    class: gt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: It(r(a.color))
                  }, null, 14, rM))), 128))
                ])
              ], 8, tM)
            ], 12, Uk)
          ], 10, Gk)) : ht("", !0),
          ke("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            ke("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Te(!0), De(Ze, null, Pt(o.tools, (a) => {
                var l;
                return Te(), Gn(en, {
                  key: `${o.key}-${a.key}`,
                  icon: a.icon,
                  label: a.label,
                  tip: a.tip,
                  "extra-class": { active: ((l = e.state.activeTools) == null ? void 0 : l[o.key]) === a.key },
                  attrs: { [a.attr]: a.key }
                }, null, 8, ["icon", "label", "tip", "extra-class", "attrs"]);
              }), 128))
            ], 8, oM),
            ke("div", {
              class: gt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              ke("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: It({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, aM),
              ke("span", lM, nt(e.state.sizeText || "10"), 1)
            ], 10, sM),
            ke("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Be(en, {
                icon: tt(je).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, cM)
          ], 8, iM)
        ], 10, Hk);
      }), 128))
    ], 2));
  }
}, dM = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ qt(null), n = /* @__PURE__ */ qt(null), i = /* @__PURE__ */ qt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Te(), De(Ze, null, [
      ke("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      ke("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        ke("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, fM = ["aria-label"], pM = ["data-tip", "aria-pressed"], hM = {
  __name: "PanoSegments",
  props: {
    buttons: { type: Array, default: () => [] },
    attr: { type: String, required: !0 },
    label: { type: String, default: "" }
  },
  setup(e) {
    const t = e, r = dt(() => Math.max(0, t.buttons.findIndex((n) => n.pressed === "true")));
    return (n, i) => (Te(), De("div", {
      class: "pano-segments",
      role: "group",
      "aria-label": e.label,
      style: It({ "--pano-segment-count": e.buttons.length, "--pano-segment-index": r.value })
    }, [
      (Te(!0), De(Ze, null, Pt(e.buttons, (o) => (Te(), De("button", Or({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), nt(o.label), 17, pM))), 128))
    ], 12, fM));
  }
}, mM = {
  key: 0,
  class: "pano-cutout-menu"
}, gM = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, yM = ["data-aspect"], bM = ["data-action", "aria-label", "data-tip", "disabled"], vM = {
  __name: "PanoSelectionMenu",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: "pano-selection-menu",
      "data-selection-menu": "",
      style: It({ display: e.model.visible === !0 ? "flex" : "none", left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, [
      (Te(!0), De(Ze, null, Pt(e.model.items || [], (n) => (Te(), De(Ze, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Te(), De("div", mM, [
          ke("button", gM, [
            Be($t, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          ke("div", {
            class: gt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Te(!0), De(Ze, null, Pt(n.choices || [], (i) => (Te(), De("button", {
              key: i.value,
              class: gt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, nt(i.label), 11, yM))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Te(), Gn(hM, {
          key: 1,
          buttons: n.buttons || [],
          attr: n.attr,
          label: n.label
        }, null, 8, ["buttons", "attr", "label"])) : (Te(), De("button", {
          key: 2,
          class: "pano-btn pano-btn-icon",
          type: "button",
          "data-action": n.action,
          "aria-label": n.label,
          "data-tip": n.tip,
          disabled: n.disabled === !0
        }, [
          Be($t, {
            icon: n.icon
          }, null, 8, ["icon"])
        ], 8, bM))
      ], 64))), 128))
    ], 4));
  }
}, SM = {
  key: 0,
  class: "pano-easing"
}, _M = { class: "pano-section-title" }, wM = { class: "pano-easing-range" }, xM = { class: "pano-easing-modes" }, kM = ["aria-pressed", "onClick"], MM = ["viewBox"], PM = ["x", "y"], NM = ["x1", "y1", "x2", "y2"], AM = ["d"], CM = ["x1", "y1", "x2", "y2"], IM = ["x1", "y1", "x2", "y2"], EM = ["cx", "cy"], OM = ["cx", "cy"], FM = { class: "pano-easing-note" }, Cr = 132, Si = 14, TM = {
  __name: "PanoEasingGraph",
  props: { model: { type: Object, default: null } },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = [
      { label: "Ease in-out", easing: [0.42, 0, 0.58, 1] },
      { label: "Linear", easing: [0, 0, 1, 1] },
      { label: "Ease in", easing: [0.42, 0, 1, 1] },
      { label: "Ease out", easing: [0, 0, 0.58, 1] },
      { label: "Auto", easing: "auto" },
      { label: "Hold", easing: "hold" }
    ], o = /* @__PURE__ */ qt(null), s = dt(() => {
      var x;
      return Array.isArray((x = r.model) == null ? void 0 : x.easing) ? r.model.easing : null;
    }), a = (x) => Si + x * Cr, l = (x) => Si + (1 - x) * Cr, c = dt(() => {
      var te;
      if (((te = r.model) == null ? void 0 : te.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [x, g, h, _] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(x)} ${l(g)} ${a(h)} ${l(_)} ${a(1)} ${l(1)}`;
    }), d = dt(() => s.value ? s.value.map((x) => x.toFixed(2)).join(", ") : "");
    function u(x) {
      var g;
      return JSON.stringify(x.easing) === JSON.stringify((g = r.model) == null ? void 0 : g.easing);
    }
    function f(x, g) {
      n("timeline", { type: "easing", easing: x, commit: g });
    }
    function m(x, g) {
      var re;
      if (x.button !== 0 || !s.value) return;
      const h = x.currentTarget;
      (re = h.setPointerCapture) == null || re.call(h, x.pointerId);
      let _ = null;
      const te = (T) => {
        const W = o.value.getBoundingClientRect(), $ = W.width / (Cr + Si * 2), U = ((T.clientX - W.left) / $ - Si) / Cr, ve = 1 - ((T.clientY - W.top) / $ - Si) / Cr;
        _ = [..._ || s.value], _[g] = Math.round(Math.min(1, Math.max(0, U)) * 100) / 100, _[g + 1] = Math.round(Math.min(1, Math.max(0, ve)) * 100) / 100, f(_, !1);
      }, G = () => {
        h.removeEventListener("pointermove", te), h.removeEventListener("pointerup", G), h.removeEventListener("pointercancel", G), _ && f(_, !0);
      };
      h.addEventListener("pointermove", te), h.addEventListener("pointerup", G), h.addEventListener("pointercancel", G);
    }
    return (x, g) => e.model ? (Te(), De("div", SM, [
      ke("div", _M, [
        g[2] || (g[2] = ke("span", null, "Easing", -1)),
        ke("span", wM, nt(e.model.label), 1)
      ]),
      ke("div", xM, [
        (Te(), De(Ze, null, Pt(i, (h) => ke("button", {
          key: h.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(h) ? "true" : "false",
          onClick: (_) => f(h.easing, !0)
        }, nt(h.label), 9, kM)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Te(), De("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Cr + Si * 2} ${Cr + Si * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        ke("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Cr,
          height: Cr
        }, null, 8, PM),
        ke("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, NM),
        ke("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, AM),
        s.value ? (Te(), De(Ze, { key: 0 }, [
          ke("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, CM),
          ke("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, IM),
          ke("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (h) => m(h, 0))
          }, null, 40, EM),
          ke("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (h) => m(h, 2))
          }, null, 40, OM)
        ], 64)) : ht("", !0)
      ], 8, MM)) : ht("", !0),
      ke("div", FM, [
        e.model.mixed ? (Te(), De(Ze, { key: 0 }, [
          jo("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), De(Ze, { key: 1 }, [
          jo("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), De(Ze, { key: 2 }, [
          jo("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Te(), De(Ze, { key: 3 }, [
          jo("cubic-bezier(" + nt(d.value) + ")", 1)
        ], 64)) : ht("", !0)
      ])
    ])) : ht("", !0);
  }
}, DM = {
  key: 0,
  class: "pano-field-wide pano-handoff-row"
}, LM = { class: "pano-handoff-lanes" }, RM = ["data-lane", "disabled", "title"], VM = {
  __name: "PanoHandoffRevert",
  props: {
    model: { type: Object, default: null }
  },
  setup(e) {
    return (t, r) => e.model ? (Te(), De("div", DM, [
      r[0] || (r[0] = ke("label", null, "Upstream", -1)),
      ke("div", LM, [
        (Te(!0), De(Ze, null, Pt(e.model.lanes, (n) => (Te(), De("button", {
          key: n.name,
          class: "pano-btn subtle pano-btn-tight",
          type: "button",
          "data-action": "revert-handoff-lane",
          "data-lane": n.name,
          disabled: n.disabled,
          title: `Revert ${n.label} to upstream`
        }, nt(n.label), 9, RM))), 128))
      ])
    ])) : ht("", !0);
  }
}, $M = {
  class: "pano-side",
  "data-side": ""
}, zM = { class: "pano-side-head" }, jM = { class: "pano-side-title" }, HM = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, GM = {
  key: 0,
  class: "pano-side-scroll"
}, KM = { class: "pano-inspector" }, WM = { class: "pano-ui-row pano-coverage-row" }, UM = ["data-selected"], BM = ["aria-pressed", "disabled"], YM = ["aria-pressed", "disabled"], qM = {
  key: 0,
  class: "pano-section-title"
}, XM = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, JM = {
  class: "pano-picker",
  "data-picker": "selection"
}, ZM = ["disabled"], QM = { class: "pano-picker-label" }, eP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, tP = ["hidden"], nP = ["data-selection-id"], rP = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, iP = {
  key: 2,
  class: "pano-state-actions"
}, oP = ["disabled"], sP = ["data-key"], aP = { class: "pano-field-group-values" }, lP = ["title", "onPointerdown"], cP = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], uP = ["data-key"], dP = ["min", "max", "step", "value", "disabled", "data-param-key"], fP = ["min", "max", "step", "value", "disabled", "data-param-key"], pP = ["open"], hP = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, mP = { class: "pano-ui-settings-body" }, gP = { class: "pano-ui-row" }, yP = ["data-selected"], bP = ["aria-pressed"], vP = ["aria-pressed"], SP = { class: "pano-ui-row" }, _P = ["data-selected"], wP = ["aria-pressed"], xP = ["aria-pressed"], kP = {
  key: 1,
  class: "pano-side-footer"
}, MP = ["data-action"], PP = {
  __name: "PanoSidePanel",
  props: {
    nodeTitle: { type: String, default: "Panorama Stickers" },
    model: { type: Object, default: () => ({}) },
    easing: { type: Object, default: null }
  },
  emits: ["timeline"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = dt(() => {
      const c = r.model;
      return !c || typeof c != "object" ? !1 : Object.keys(c).length > 0 && !!c.coverage;
    });
    function o(c) {
      return { "--v": `${Number((c == null ? void 0 : c.fillPct) || 0)}%` };
    }
    function s(c, d) {
      return (d == null ? void 0 : d.paramsDisabled) === !0 || (c == null ? void 0 : c.enabled) === !1;
    }
    const a = {};
    function l(c, d) {
      const u = a[d.key];
      if (c.button !== 0 || !u || s(d, r.model)) return;
      c.preventDefault();
      const f = c.currentTarget, m = c.clientX, x = Number(u.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const h = (te) => {
        if (!g && Math.abs(te.clientX - m) < 3) return;
        g = !0;
        const G = x + (te.clientX - m) * d.drag * (te.shiftKey ? 0.1 : 1);
        u.value = String(Number(G.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, _ = () => {
        f.removeEventListener("pointermove", h), f.removeEventListener("pointerup", _), f.removeEventListener("pointercancel", _), f.removeEventListener("lostpointercapture", _), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", h), f.addEventListener("pointerup", _), f.addEventListener("pointercancel", _), f.addEventListener("lostpointercapture", _);
    }
    return (c, d) => {
      var u, f, m, x, g;
      return Te(), De("div", $M, [
        ke("div", zM, [
          ke("div", jM, [
            ke("span", HM, [
              Be($t, {
                icon: tt(je).globe
              }, null, 8, ["icon"])
            ]),
            ke("span", null, nt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = ke("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = ke("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Te(), De("div", GM, [
          ke("div", KM, [
            d[9] || (d[9] = ke("div", { class: "pano-section-title" }, [
              ke("span", null, "Scene")
            ], -1)),
            ke("div", WM, [
              d[2] || (d[2] = ke("label", null, "Coverage", -1)),
              ke("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((u = e.model.coverage) == null ? void 0 : u.value) === 180 ? "1" : "0"
              }, [
                ke("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((m = e.model.coverage) == null ? void 0 : m.disabled) === !0
                }, "360", 8, BM),
                ke("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((x = e.model.coverage) == null ? void 0 : x.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, YM)
              ], 8, UM)
            ]),
            e.model.transformTitle !== !1 ? (Te(), De("div", qM, [...d[3] || (d[3] = [
              ke("span", null, "Transform", -1)
            ])])) : ht("", !0),
            e.model.selectionPicker ? (Te(), De("div", XM, [
              ke("label", null, nt(e.model.selectionPicker.label), 1),
              ke("div", JM, [
                ke("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  ke("span", QM, [
                    e.model.selectionPicker.currentIcon ? (Te(), De("span", eP, [
                      Be($t, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    ke("span", null, nt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = ke("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, ZM),
                ke("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Te(!0), De(Ze, null, Pt(e.model.selectionPicker.items || [], (h) => (Te(), De("button", {
                    key: h.id,
                    type: "button",
                    class: gt(["pano-picker-item", { active: h.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": h.id
                  }, [
                    h.icon ? (Te(), De("span", rP, [
                      Be($t, {
                        icon: h.icon
                      }, null, 8, ["icon"])
                    ])) : ht("", !0),
                    ke("span", null, nt(h.label), 1)
                  ], 10, nP))), 128))
                ], 8, tP)
              ])
            ])) : ht("", !0),
            e.model.copyStateButton ? (Te(), De("div", iP, [
              ke("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be($t, {
                  icon: tt(je).copy
                }, null, 8, ["icon"]),
                ke("span", null, nt(e.model.copyStateButton.label), 1)
              ], 8, oP)
            ])) : ht("", !0),
            ke("div", {
              class: gt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Te(!0), De(Ze, { key: 0 }, Pt(e.model.notes, (h) => (Te(), De("div", {
                key: h,
                class: "pano-param-note"
              }, nt(h), 1))), 128)) : (Te(!0), De(Ze, { key: 1 }, Pt(e.model.rows || [], (h) => (Te(), De(Ze, {
                key: h.key
              }, [
                h.grouped ? (Te(), De("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": h.key
                }, [
                  ke("label", null, nt(h.label), 1),
                  ke("div", aP, [
                    (Te(!0), De(Ze, null, Pt(h.fields, (_) => (Te(), De("div", {
                      key: _.key,
                      class: "pano-axis-field"
                    }, [
                      ke("span", {
                        class: gt(["pano-axis", { disabled: s(_, e.model) }]),
                        title: _.label,
                        onPointerdown: (te) => l(te, _)
                      }, nt(_.short), 43, lP),
                      ke("input", {
                        ref_for: !0,
                        ref: (te) => {
                          a[_.key] = te;
                        },
                        type: "number",
                        min: _.min,
                        max: _.max,
                        step: _.step,
                        value: _.displayValue,
                        disabled: s(_, e.model),
                        "aria-label": `${h.label} ${_.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": _.key
                      }, null, 8, cP)
                    ]))), 128))
                  ])
                ], 8, sP)) : (Te(), De("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": h.key
                }, [
                  ke("label", null, nt(h.label), 1),
                  ke("input", {
                    type: "range",
                    min: h.fields[0].min,
                    max: h.fields[0].max,
                    step: h.fields[0].step,
                    value: h.fields[0].value,
                    disabled: s(h.fields[0], e.model),
                    style: It(o(h.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": h.fields[0].key
                  }, null, 12, dP),
                  ke("input", {
                    type: "number",
                    min: h.fields[0].min,
                    max: h.fields[0].max,
                    step: h.fields[0].step,
                    value: h.fields[0].displayValue,
                    disabled: s(h.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": h.fields[0].key
                  }, null, 8, fP)
                ], 8, uP))
              ], 64))), 128))
            ], 2),
            Be(VM, {
              model: e.model.handoff
            }, null, 8, ["model"]),
            Be(TM, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (h) => n("timeline", h))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Te(), De("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              ke("summary", null, [
                d[5] || (d[5] = ke("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                ke("span", hP, [
                  Be($t, {
                    icon: tt(je).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              ke("div", mP, [
                ke("div", gP, [
                  d[6] || (d[6] = ke("label", null, "Drag X", -1)),
                  ke("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, bP),
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, vP)
                  ], 8, yP)
                ]),
                ke("div", SP, [
                  d[7] || (d[7] = ke("label", null, "Drag Y", -1)),
                  ke("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, wP),
                    ke("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, xP)
                  ], 8, _P)
                ]),
                d[8] || (d[8] = ke("div", { class: "pano-ui-row" }, [
                  ke("span"),
                  ke("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, pP)) : ht("", !0)
          ])
        ])) : ht("", !0),
        (e.model.footerButtons || []).length ? (Te(), De("div", kP, [
          (Te(!0), De(Ze, null, Pt(e.model.footerButtons, (h) => (Te(), De("button", {
            key: h.action,
            class: gt(["pano-btn", { "pano-btn-primary": h.primary === !0 }]),
            type: "button",
            "data-action": h.action
          }, nt(h.label), 11, MP))), 128))
        ])) : ht("", !0)
      ]);
    };
  }
}, NP = { class: "pano-timeline-bar" }, AP = ["aria-label", "data-tip"], CP = ["aria-label", "data-tip"], IP = { class: "pano-timeline-time" }, EP = ["data-tip"], OP = { key: 0 }, FP = ["min", "max", "value"], TP = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, DP = ["max", "value"], LP = ["aria-expanded"], RP = ["inert"], VP = { class: "pano-timeline-name" }, $P = ["aria-pressed", "aria-label", "data-tip", "onClick"], zP = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, jP = ["disabled", "aria-expanded", "aria-label", "onClick"], HP = ["title", "aria-current", "onClick"], GP = ["data-keyed", "aria-label", "onClick"], KP = ["onPointerdown"], WP = ["onPointerdown"], UP = ["onPointerdown"], BP = ["onPointerdown"], YP = ["aria-label", "data-tip", "onPointerdown"], qP = { key: 0 }, XP = ["onPointerdown"], JP = ["aria-label", "data-tip", "onPointerdown"], ZP = { key: 0 }, QP = 10, eN = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Ra(0), playing: /* @__PURE__ */ Ra(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ qt(null), o = /* @__PURE__ */ qt(null), s = /* @__PURE__ */ qt(1), a = /* @__PURE__ */ qt(0), l = /* @__PURE__ */ qt(!1);
    let c = null, d = null, u = null;
    Il(() => {
      c = new ResizeObserver(([O]) => {
        s.value = Math.max(1, O.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([O]) => {
        a.value = O.contentRect.height;
      }), o.value && d.observe(o.value);
    }), Ps(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = dt(() => Math.max(1, Number(r.model.span || 1))), m = dt(() => r.playhead.frame.value), x = dt(() => r.playhead.playing.value), g = dt(() => I1(m.value, Number(r.model.fps || 1))), h = dt(() => s.value / f.value), _ = (O) => `${O / f.value * 100}%`, te = dt(() => G1(f.value, h.value));
    function G(O) {
      const B = i.value.getBoundingClientRect(), P = Math.floor((O - B.left) / Math.max(1, B.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, P));
    }
    function re(O, B, P) {
      const M = Math.ceil(QP / Math.max(1e-6, h.value)), F = new Map(B.map((C) => [C.frame, C.full]));
      return K1(B.map((C) => C.frame), M).map((C, ne) => ({
        ...C,
        key: `${O}:${ne}`,
        partial: C.frames.some((Q) => !F.get(Q)),
        selected: C.frames.some((Q) => P.includes(Q))
      }));
    }
    const T = dt(() => {
      const O = /* @__PURE__ */ new Map();
      for (const B of r.model.rows || []) {
        O.set(B.id, re(B.id, B.keys, B.selectedFrames));
        for (const P of B.lanes) O.set(P.key, re(P.key, P.frames.map((M) => ({ frame: M, full: !0 })), P.selectedFrames));
      }
      return O;
    });
    function W(O) {
      const B = O.end === null ? f.value : O.end;
      return { left: _(O.start), width: _(Math.max(0, B - O.start)) };
    }
    function $(O, B) {
      const P = O.clientX, M = Math.max(1e-6, h.value);
      let F = 0;
      B("start", 0, O);
      const C = (Q) => {
        if (Q.pointerId !== O.pointerId) return;
        const z = Math.round((Q.clientX - P) / M);
        z !== F && (F = z, B("move", F, Q));
      }, ne = (Q) => {
        Q.pointerId === O.pointerId && (u(), B("end", F, Q));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", C), window.removeEventListener("pointerup", ne), window.removeEventListener("pointercancel", ne), u = null;
      }, window.addEventListener("pointermove", C), window.addEventListener("pointerup", ne), window.addEventListener("pointercancel", ne);
    }
    function U(O) {
      O.button === 0 && $(O, (B, P, M) => n("action", { type: "seek", frame: G(M.clientX), phase: B }));
    }
    function ve(O, B, P) {
      O.button === 0 && (n("action", { type: "select-row", id: B.id }), $(O, (M, F) => n("action", { type: "clip", id: B.id, mode: P, delta: F, phase: M })));
    }
    function ye(O, B, P, M, F) {
      if (O.button === 0) {
        if (O.shiftKey) {
          n("action", { type: "select-keys", owner: B.id, lane: P, frames: M.frames, additive: !0 });
          return;
        }
        M.frames.every((C) => F.includes(C)) || n("action", { type: "select-keys", owner: B.id, lane: P, frames: M.frames, additive: !1 }), $(O, (C, ne) => n("action", { type: "move-keys", delta: ne, phase: C }));
      }
    }
    const de = dt(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function ge(O, B, P) {
      n("action", B), await Al(), O.target.value = P();
    }
    function le(O) {
      ge(O, { type: "fps", fps: Number(O.target.value) }, () => de.value);
    }
    function _e(O) {
      const B = O.target.value.trim();
      ge(O, { type: "length", length: B ? Number(B) : null }, () => r.model.length ?? "");
    }
    function Y(O, B, P) {
      O.button !== 0 || O.target !== O.currentTarget || n("action", { type: "select-keys", owner: B.id, lane: P, frames: [], additive: !1 });
    }
    return (O, B) => zr((Te(), De("section", {
      class: gt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      ke("div", NP, [
        ke("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": x.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": x.value ? "Pause (Space)" : "Play (Space)",
          onClick: B[0] || (B[0] = (P) => n("action", { type: "play" }))
        }, [
          Be($t, {
            icon: x.value ? tt(je).pause : tt(je).play
          }, null, 8, ["icon"])
        ], 8, AP),
        e.model.hasAudio ? (Te(), De("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: B[1] || (B[1] = (P) => n("action", { type: "mute" }))
        }, [
          Be($t, {
            icon: e.model.muted ? tt(je).volume_muted : tt(je).volume2
          }, null, 8, ["icon"])
        ], 8, CP)) : ht("", !0),
        ke("span", IP, nt(g.value), 1),
        ke("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Te(), De("span", OP, nt(de.value), 1)) : (Te(), De("input", {
            key: 1,
            type: "number",
            min: tt(dm),
            max: tt(cd),
            step: "any",
            value: de.value,
            "aria-label": "Timeline fps",
            onChange: le
          }, null, 40, FP)),
          B[6] || (B[6] = ke("span", null, "fps", -1))
        ], 8, EP),
        ke("label", TP, [
          B[7] || (B[7] = ke("span", null, "Length", -1)),
          ke("input", {
            type: "number",
            min: "1",
            max: tt(ud),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: _e
          }, null, 40, DP)
        ]),
        ke("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: B[2] || (B[2] = (P) => n("action", { type: "toggle-expanded" }))
        }, [
          B[8] || (B[8] = ke("span", null, "Timeline", -1)),
          Be($t, {
            icon: tt(je).chevron
          }, null, 8, ["icon"])
        ], 8, LP)
      ]),
      ke("div", {
        class: gt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: It({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: B[3] || (B[3] = At((P) => l.value = !0, ["self"])),
        onTransitionend: B[4] || (B[4] = At((P) => l.value = !1, ["self"])),
        onTransitioncancel: B[5] || (B[5] = At((P) => l.value = !1, ["self"]))
      }, [
        ke("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          B[9] || (B[9] = ke("div", { class: "pano-timeline-corner" }, null, -1)),
          ke("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: U
          }, [
            (Te(!0), De(Ze, null, Pt(te.value, (P) => (Te(), De("span", {
              key: P,
              class: "pano-timeline-tick",
              style: It({ left: _(P) })
            }, nt(P), 5))), 128)),
            ke("span", {
              class: "pano-timeline-playhead",
              style: It({ left: _(m.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), De(Ze, null, Pt(e.model.rows || [], (P) => (Te(), De(Ze, {
            key: P.id
          }, [
            ke("div", {
              class: gt(["pano-timeline-head", { selected: P.selected, "is-hidden": !P.visible }])
            }, [
              ke("div", VP, [
                P.hideable ? (Te(), De("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": P.visible ? "true" : "false",
                  "aria-label": `${P.label} visible`,
                  "data-tip": P.visible ? "Hide" : "Show",
                  onClick: At((M) => n("action", { type: "toggle-visible", id: P.id }), ["stop"])
                }, [
                  Be($t, {
                    icon: P.visible ? tt(je).eye : tt(je).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, $P)) : (Te(), De("span", zP)),
                ke("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !P.keyable,
                  "aria-expanded": P.open ? "true" : "false",
                  "aria-label": P.open ? `Hide ${P.label} parameters` : `Show ${P.label} parameters`,
                  onClick: At((M) => n("action", { type: "toggle-row", id: P.id }), ["stop"])
                }, [
                  Be($t, {
                    icon: tt(je).chevron
                  }, null, 8, ["icon"])
                ], 8, jP),
                ke("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: P.label,
                  "aria-current": P.selected ? "true" : void 0,
                  onClick: (M) => n("action", { type: "select-row", id: P.id })
                }, [
                  Be($t, {
                    icon: P.icon
                  }, null, 8, ["icon"]),
                  ke("span", null, nt(P.label), 1)
                ], 8, HP),
                P.keyable ? (Te(), De("button", {
                  key: 2,
                  class: gt(["pano-timeline-key", { keyed: tt(_c)(P.keys, m.value) }]),
                  type: "button",
                  "data-keyed": tt(_c)(P.keys, m.value) ? "true" : "false",
                  "aria-label": tt(_c)(P.keys, m.value) ? `Every ${P.label} parameter has a keyframe here; update them` : `Add keyframes for every ${P.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: At((M) => n("action", { type: "key-row", owner: P.id }), ["stop"])
                }, [
                  Be($t, {
                    icon: tt(je).keyframe
                  }, null, 8, ["icon"])
                ], 10, GP)) : ht("", !0)
              ]),
              P.open ? (Te(!0), De(Ze, { key: 0 }, Pt(P.lanes, (M) => (Te(), De("div", {
                key: M.key,
                class: "pano-timeline-lane-head"
              }, nt(M.label), 1))), 128)) : ht("", !0)
            ], 2),
            ke("div", {
              class: gt(["pano-timeline-track", { selected: P.selected }])
            }, [
              ke("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (M) => Y(M, P, null)
              }, [
                P.clip ? (Te(), De("div", {
                  key: 0,
                  class: gt(["pano-timeline-clip", { open: P.clip.end === null }]),
                  style: It(W(P.clip)),
                  onPointerdown: At((M) => ve(M, P, "move"), ["stop"])
                }, [
                  ke("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: At((M) => ve(M, P, "start"), ["stop"])
                  }, null, 40, UP),
                  ke("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: At((M) => ve(M, P, "end"), ["stop"])
                  }, null, 40, BP)
                ], 46, WP)) : ht("", !0),
                (Te(!0), De(Ze, null, Pt(T.value.get(P.id), (M) => (Te(), De("button", {
                  key: M.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: M.selected, cluster: M.frames.length > 1, partial: M.partial }]),
                  style: It({ left: _(M.frame + 0.5) }),
                  "aria-label": `${P.label}: ${M.frames.length > 1 ? `${M.frames.length} keyframes` : `keyframe at frame ${M.frames[0]}`}`,
                  "data-tip": M.frames.length > 1 ? `${M.frames.length} keyframes` : `Frame ${M.frames[0]}`,
                  onPointerdown: At((F) => ye(F, P, null, M, P.selectedFrames), ["stop"])
                }, [
                  M.frames.length > 1 ? (Te(), De("span", qP, nt(M.frames.length), 1)) : ht("", !0)
                ], 46, YP))), 128))
              ], 40, KP),
              P.open ? (Te(!0), De(Ze, { key: 0 }, Pt(P.lanes, (M) => (Te(), De("div", {
                key: M.key,
                class: "pano-timeline-lane",
                onPointerdown: (F) => Y(F, P, M.lane)
              }, [
                (Te(!0), De(Ze, null, Pt(T.value.get(M.key), (F) => (Te(), De("button", {
                  key: F.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: F.selected, cluster: F.frames.length > 1 }]),
                  style: It({ left: _(F.frame + 0.5) }),
                  "aria-label": `${M.label}: ${F.frames.length > 1 ? `${F.frames.length} keyframes` : `keyframe at frame ${F.frames[0]}`}`,
                  "data-tip": F.frames.length > 1 ? `${F.frames.length} keyframes` : `Frame ${F.frames[0]}`,
                  onPointerdown: At((C) => ye(C, P, M.lane, F, M.selectedFrames), ["stop"])
                }, [
                  F.frames.length > 1 ? (Te(), De("span", ZP, nt(F.frames.length), 1)) : ht("", !0)
                ], 46, JP))), 128))
              ], 40, XP))), 128)) : ht("", !0),
              ke("span", {
                class: "pano-timeline-playhead",
                style: It({ left: _(m.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, RP)
    ], 2)), [
      [Ei, e.model.visible]
    ]);
  }
}, tN = {
  __name: "PanoTooltip",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: gt(["pano-tooltip", {
        show: e.model.visible === !0,
        "pano-tooltip-footer": e.model.variant === "footer",
        "pano-tooltip-tool-rail": e.model.variant === "tool-rail",
        "pano-tooltip-frame-rail": e.model.variant === "frame-rail",
        "pano-tooltip-roll": e.model.variant === "roll"
      }]),
      "data-tooltip": "",
      style: It({ left: `${e.model.left || 0}px`, top: `${e.model.top || 0}px` })
    }, nt(e.model.text || ""), 7));
  }
}, nN = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, rN = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", nN, [
      (Te(!0), De(Ze, null, Pt(e.buttons, (n) => zr((Te(), Gn(en, {
        key: n.key,
        "extra-class": {
          active: n.active,
          "pano-btn-icon-accent": n.accent
        },
        icon: n.icon,
        label: n.label,
        tip: n.tip,
        pressed: n.pressed,
        attrs: { [n.attr]: n.value, disabled: n.disabled === !0 }
      }, null, 8, ["extra-class", "icon", "label", "tip", "pressed", "attrs"])), [
        [Ei, n.visible !== !1]
      ])), 128))
    ]));
  }
}, iN = ["data-video-ready"], oN = { class: "pano-video-transport-shell" }, sN = { class: "pano-video-controls-left" }, aN = { class: "pano-video-filmstrip" }, lN = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, cN = ["src", "onLoad"], uN = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, dN = ["max", "value", "disabled"], fN = { class: "pano-video-controls-right" }, pN = ["data-has-audio"], hN = { class: "pano-video-volume-pop" }, mN = ["value", "disabled"], gN = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = dt(() => {
      var T;
      return ((T = t.state) == null ? void 0 : T.playing) === !0 ? "Pause" : "Play";
    }), n = dt(() => {
      var T;
      return ((T = t.state) == null ? void 0 : T.playing) === !0 ? "Pause video" : "Play video";
    }), i = dt(() => {
      var T;
      return ((T = t.state) == null ? void 0 : T.playing) === !0 ? je.pause : je.play;
    }), o = dt(() => {
      var T;
      return ((T = t.state) == null ? void 0 : T.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = dt(() => {
      var T;
      return ((T = t.state) == null ? void 0 : T.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = dt(() => {
      var T;
      return ((T = t.state) == null ? void 0 : T.loop) === !1 ? je.loop_off : je.loop;
    }), l = dt(() => {
      var T, W;
      return ((T = t.state) == null ? void 0 : T.muted) === !0 || Number(((W = t.state) == null ? void 0 : W.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = dt(() => {
      var T, W, $;
      return ((T = t.state) == null ? void 0 : T.hasAudio) !== !0 ? je.volume : ((W = t.state) == null ? void 0 : W.muted) === !0 || Number((($ = t.state) == null ? void 0 : $.volume) ?? 1) <= 0 ? je.volume_muted : je.volume2;
    }), d = dt(() => {
      var T;
      return Math.max(0, Math.min(100, Number(((T = t.state) == null ? void 0 : T.progressPct) || 0)));
    }), u = dt(() => ({ left: `${d.value}%` })), f = dt(() => {
      var U, ve;
      const T = (U = t.state) == null ? void 0 : U.volumePct, W = Number(((ve = t.state) == null ? void 0 : ve.volume) ?? 1) * 100, $ = Number(T ?? W ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, $))}%`
      };
    }), m = dt(() => {
      var $, U;
      const W = [
        String((($ = t.state) == null ? void 0 : $.currentTimeLabel) || "0:00"),
        String(((U = t.state) == null ? void 0 : U.durationLabel) || "0:00")
      ].reduce((ve, ye) => Math.max(ve, ye.length), 4);
      return `${Math.max(4, W)}ch`;
    }), x = dt(() => ({ "--pano-video-time-ch": m.value })), g = dt(() => {
      var $, U;
      const T = Array.isArray(($ = t.state) == null ? void 0 : $.thumbnails) ? t.state.thumbnails : [];
      if (T.length) return T;
      const W = Math.max(7, Number(((U = t.state) == null ? void 0 : U.thumbnailCount) || 9));
      return Array.from({ length: W }, (ve, ye) => ({
        id: `placeholder-${ye}`,
        src: "",
        label: ""
      }));
    }), h = /* @__PURE__ */ qt(/* @__PURE__ */ new Set()), _ = (T) => String((T == null ? void 0 : T.id) || (T == null ? void 0 : T.src) || (T == null ? void 0 : T.label) || ""), te = (T) => h.value.has(_(T)), G = (T) => {
      const W = new Set(h.value);
      W.add(_(T)), h.value = W;
    };
    Ni(g, (T) => {
      const W = new Set(T.map(_)), $ = /* @__PURE__ */ new Set();
      for (const U of h.value)
        W.has(U) && $.add(U);
      h.value = $;
    }, { immediate: !0 });
    const re = dt(() => {
      var T;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((T = t.state) == null ? void 0 : T.shellMaxWidthPx) || 640))}px`
      };
    });
    return (T, W) => (Te(), De("div", {
      class: gt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: It(re.value)
    }, [
      W[1] || (W[1] = ke("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      W[2] || (W[2] = ke("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      ke("div", oN, [
        ke("div", sN, [
          Be(en, {
            "extra-class": [
              "pano-video-control",
              { "pano-video-control-play": e.state.playing !== !0 }
            ],
            icon: i.value,
            label: r.value,
            tip: n.value,
            attrs: { "data-action": "video-play-toggle", disabled: e.state.ready !== !0 }
          }, null, 8, ["extra-class", "icon", "label", "tip", "attrs"]),
          ke("div", {
            class: "pano-video-time pano-video-time-start",
            style: It(x.value)
          }, nt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        ke("div", aN, [
          ke("div", lN, [
            (Te(!0), De(Ze, null, Pt(g.value, ($) => (Te(), De("div", {
              key: _($),
              class: gt(["pano-video-thumb", {
                "is-placeholder": !$.src,
                "is-loaded": $.src && te($)
              }])
            }, [
              $.src ? (Te(), De("img", {
                key: 0,
                src: $.src,
                alt: "",
                draggable: "false",
                onLoad: (U) => G($)
              }, null, 40, cN)) : (Te(), De("span", uN))
            ], 2))), 128))
          ]),
          ke("div", {
            class: "pano-video-playhead",
            style: It(u.value),
            "aria-hidden": "true"
          }, [...W[0] || (W[0] = [
            ke("span", { class: "pano-video-playhead-line" }, null, -1),
            ke("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          ke("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, dN)
        ]),
        ke("div", fN, [
          ke("div", {
            class: "pano-video-time pano-video-time-end",
            style: It(x.value)
          }, nt(e.state.durationLabel || "0:00"), 5),
          Be(en, {
            "extra-class": "pano-video-control",
            icon: a.value,
            label: o.value,
            tip: s.value,
            attrs: {
              "data-action": "video-loop-toggle",
              disabled: e.state.ready !== !0,
              "data-loop-enabled": e.state.loop === !1 ? "false" : "true"
            }
          }, null, 8, ["icon", "label", "tip", "attrs"]),
          ke("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            ke("div", hN, [
              ke("input", {
                class: "pano-video-volume-slider",
                "data-video-volume": "",
                type: "range",
                min: "0",
                max: "1",
                step: "0.01",
                value: Math.max(0, Math.min(1, Number(e.state.volume ?? 1))),
                style: It(f.value),
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "aria-label": "Volume"
              }, null, 12, mN)
            ]),
            Be(en, {
              "extra-class": "pano-video-control",
              icon: c.value,
              label: l.value,
              attrs: {
                "data-action": "video-audio-toggle",
                disabled: e.state.ready !== !0 || e.state.hasAudio !== !0,
                "data-muted": e.state.muted === !0 ? "true" : "false"
              }
            }, null, 8, ["icon", "label", "attrs"])
          ], 8, pN)
        ])
      ])
    ], 14, iN));
  }
}, yN = { class: "pano-floating-top" }, bN = ["data-selected", "data-view-count"], vN = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], SN = { class: "label" }, _N = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Te(), De("div", yN, [
        ke("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Te(!0), De(Ze, null, Pt(e.buttons, (i) => zr((Te(), De("button", {
            key: i.key,
            class: gt(["pano-view-btn", [i.extraClass, { active: i.pressed === "true" }]]),
            "data-view": i.key,
            "aria-pressed": i.pressed,
            "aria-label": i.label,
            "aria-disabled": i.disabled === !0 ? "true" : null,
            tabindex: i.disabled === !0 ? -1 : null,
            "data-tip": i.tip || null
          }, [
            Be($t, {
              icon: i.icon
            }, null, 8, ["icon"]),
            ke("span", SN, nt(i.label), 1)
          ], 10, vN)), [
            [Ei, i.visible !== !1]
          ])), 128))
        ], 8, bN)
      ]);
    };
  }
};
function l0(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: je.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: je.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: je.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: je.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: je.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: je.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: je.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: je.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: je.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: je.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: je.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: je.image, pressed: null },
        // Panorama Studio only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: je.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: je.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: je.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: je.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: je.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: je.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: je.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: je.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: je.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: je.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: je.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: je.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: je.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: je.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: je.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: je.lasso_tool }
        ]
      }
    ]
  };
}
const wN = ["aria-label"], xN = { class: "pano-stage-column" }, kN = { class: "pano-stage-wrap" }, MN = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, PN = {
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
  setup(e, { expose: t, emit: r }) {
    const n = e, i = r;
    let o = "", s = !1, a = null;
    const l = /* @__PURE__ */ qt(null), c = /* @__PURE__ */ qt(null), d = /* @__PURE__ */ qt(null);
    function u() {
      var de, ge;
      return ((ge = (de = d.value) == null ? void 0 : de.getRefs) == null ? void 0 : ge.call(de)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(de) {
      var ge, le;
      return ((le = (ge = c.value) == null ? void 0 : ge.open) == null ? void 0 : le.call(ge, de)) === !0;
    }
    function m(de) {
      i("image-file-selected", de);
    }
    function x(de) {
      i("image-file-cancelled", de);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = dt(() => n.readOnly === !0), h = dt(() => n.shellPreset || l0(n.type)), _ = dt(() => {
      var ge, le, _e;
      const de = String((((ge = n.uiState) == null ? void 0 : ge.stageStatus) === "failed" ? (le = n.uiState) == null ? void 0 : le.stageStatusDetail : (_e = n.uiState) == null ? void 0 : _e.stageWarningDetail) ?? "");
      return de === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : de === "stickers" ? "One or more sticker previews are unavailable." : de === "frame" ? "The editor hit a rendering error. Check the browser console for details." : de === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : de.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), te = dt(() => {
      var de, ge, le;
      return ((de = n.uiState) == null ? void 0 : de.stageStatus) === "failed" || (ge = n.uiState) != null && ge.stageWarningDetail ? _.value : (le = n.uiState) == null ? void 0 : le.stageNotice;
    }), G = dt(() => {
      var ge;
      const de = Array.isArray((ge = h.value) == null ? void 0 : ge.floatingButtons) ? h.value.floatingButtons.slice() : [];
      return g.value && de.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: je.fullscreen
      }), de;
    });
    function re() {
      const de = l.value;
      return de ? Array.from(de.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((ge) => ge instanceof HTMLElement ? !ge.hidden && ge.tabIndex >= 0 && ge.offsetParent !== null : !1) : [];
    }
    function T() {
      var le;
      const ge = re()[0] || l.value;
      (le = ge == null ? void 0 : ge.focus) == null || le.call(ge);
    }
    function W() {
      var de;
      a != null && a.isConnected && ((de = a.focus) == null || de.call(a)), a = null;
    }
    function $(de) {
      var ge, le, _e, Y;
      if (!de.defaultPrevented) {
        if (de.key === "Tab") {
          const O = re();
          if (!O.length) {
            de.preventDefault(), (le = (ge = l.value) == null ? void 0 : ge.focus) == null || le.call(ge);
            return;
          }
          const B = O[0], P = O[O.length - 1], M = document.activeElement;
          if (de.shiftKey) {
            (M === B || M === l.value || !((_e = l.value) != null && _e.contains(M))) && (de.preventDefault(), P.focus());
            return;
          }
          (M === P || !((Y = l.value) != null && Y.contains(M))) && (de.preventDefault(), B.focus());
          return;
        }
        de.key === "Escape" && i("close");
      }
    }
    function U() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ve() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function ye(de) {
      document.removeEventListener("keydown", $), de ? (a || (a = document.activeElement), U(), document.addEventListener("keydown", $), Al(() => {
        T();
      })) : (ve(), W());
    }
    return Il(() => {
      ye(n.open);
    }), Ps(() => {
      ve(), document.removeEventListener("keydown", $), W();
    }), Ni(() => n.open, (de) => {
      ye(de);
    }), (de, ge) => e.open ? (Te(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: ge[2] || (ge[2] = At((le) => i("close"), ["self"]))
    }, [
      ke("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        ke("div", xN, [
          ke("div", kN, [
            ge[3] || (ge[3] = ke("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ge[4] || (ge[4] = ke("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            ge[5] || (ge[5] = ke("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Te(), De("div", MN, nt(te.value), 1)) : ht("", !0),
            ge[6] || (ge[6] = ke("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              ke("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(dM, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Be($g, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: m,
              onFileCancelled: x
            }, null, 512),
            g.value ? ht("", !0) : (Te(), De(Ze, { key: 1 }, [
              Be(rN, {
                buttons: e.uiState.toolButtons || h.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(Dk, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(uM, {
                "paint-swatches": e.paintSwatches,
                panes: h.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(gN, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(_N, {
              buttons: e.uiState.viewButtons || h.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(Ik, {
              buttons: e.uiState.floatingButtons || G.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(vM, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(tN, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(jk, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(eN, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: ge[0] || (ge[0] = (le) => i("timeline", le))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? ht("", !0) : (Te(), Gn(PP, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: ge[1] || (ge[1] = (le) => i("timeline", le))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, wN)
    ])) : ht("", !0);
  }
}, nr = "loading", xs = "ready", Yn = "failed";
function c0(e, t = "") {
  return e && (e.__panoLoadState = nr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function u0(e, t = "") {
  return e && (e.__panoLoadState = xs, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function d0(e, t = "") {
  return e && (e.__panoLoadState = Yn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Cu(e, t) {
  return e ? e.__panoLoadState === Yn ? Yn : typeof t == "function" && t(e) ? xs : nr : xs;
}
function Iu(e) {
  return Cu(e) === Yn;
}
function NN({ presented: e, background: t = xs, stickers: r = [] } = {}) {
  if (!e) return { status: nr, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === nr, o = n.includes(nr);
  if (i && o) return { status: nr, detail: "mixed" };
  if (i) return { status: nr, detail: "background" };
  if (o) return { status: nr, detail: "stickers" };
  const s = t === Yn, a = n.includes(Yn);
  return s && a ? { status: Yn, detail: "mixed" } : s ? { status: Yn, detail: "background" } : a ? { status: Yn, detail: "stickers" } : { status: xs, detail: "" };
}
const AN = "state_json", CN = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), Kd = "sticker_image_1", IN = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), f0 = 0.01, EN = "external_image", go = "pano_sticker_input_images", p0 = "pano_sticker_input_videos", h0 = "pano_sticker_input_frames", m0 = "pano_sticker_input_video_meta", ON = !0, Bl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], xr = Math.PI / 180, Ti = 180 / Math.PI, Eu = 1, g0 = "rgb(255, 221, 87)", FN = "rgb(228, 228, 231)", TN = "rgb(180, 150, 60)", DN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, LN = 64, Ap = 40, Tc = 16, RN = 0.45, Cp = 180, VN = 160, bl = 24, $N = 4, zN = 4;
function Dc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function jN(e) {
  return 1 - Math.pow(1 - e, 3);
}
function HN(e, t, r) {
  const n = Ie((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function GN(e) {
  return e * e * e;
}
function Yl(e, t, r) {
  return { x: e, y: t, z: r };
}
function Ip(e, t) {
  return Yl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Ep(e, t) {
  return Yl(e.x * t, e.y * t, e.z * t);
}
function Lc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function KN(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Yl(e.x / t, e.y / t, e.z / t);
}
function fa(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * Ti),
    pitch: Ie(Math.asin(Ie(e.y, -1, 1)) * Ti, -90, 90)
  };
}
function Jr(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n++) {
    const o = t[n].x, s = t[n].y, a = t[i].x, l = t[i].y;
    s > e.y != l > e.y && e.x < (a - o) * (e.y - s) / (l - s || 1e-6) + o && (r = !r);
  }
  return r;
}
function Bo(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function Rc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return Bo(e, t);
  const l = Ie((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Bn(e, t, r) {
  return e + (t - e) * r;
}
function yr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ie(r, 0, 1)})`;
}
function WN(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let pa = { fillStyle: "", url: "" };
function UN(e, t, r) {
  if (pa.url && pa.fillStyle === String(e || ""))
    return pa.url;
  const n = WN(`
<svg xmlns="http://www.w3.org/2000/svg" width="${bl}" height="${bl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return pa = { fillStyle: String(e || ""), url: n }, n;
}
function vl(e, t, r = 0.015) {
  return !e || !t ? !1 : Math.abs(Number(e.r ?? 0) - Number(t.r ?? 0)) <= r && Math.abs(Number(e.g ?? 0) - Number(t.g ?? 0)) <= r && Math.abs(Number(e.b ?? 0) - Number(t.b ?? 0)) <= r && Math.abs(Number(e.a ?? 1) - Number(t.a ?? 1)) <= r;
}
function $n(e) {
  return {
    r: Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1),
    g: Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1),
    b: Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1),
    a: Ie(Number((e == null ? void 0 : e.a) ?? 1), 0, 1)
  };
}
function un(e) {
  return e == null ? e : JSON.parse(JSON.stringify(e));
}
function BN(e) {
  return Bl.some((t) => vl(e, t.color));
}
function Ou(e, t, r) {
  const n = (Number(e) % 1 + 1) % 1, i = Ie(Number(t), 0, 1), o = Ie(Number(r), 0, 1);
  if (i <= 1e-6) return { r: o, g: o, b: o };
  const s = Math.floor(n * 6), a = n * 6 - s, l = o * (1 - i), c = o * (1 - a * i), d = o * (1 - (1 - a) * i);
  switch (s % 6) {
    case 0:
      return { r: o, g: d, b: l };
    case 1:
      return { r: c, g: o, b: l };
    case 2:
      return { r: l, g: o, b: d };
    case 3:
      return { r: l, g: c, b: o };
    case 4:
      return { r: d, g: l, b: o };
    default:
      return { r: o, g: l, b: c };
  }
}
function Fu(e) {
  const t = Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((r - n) / s + (r < n ? 6 : 0)) / 6 : i === r ? a = ((n - t) / s + 2) / 6 : a = ((t - r) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function lo(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function YN(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Op(e) {
  const { paintCount: t, maskCount: r } = YN(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
  let i = 0, o = 0;
  return n.forEach((s) => {
    String((s == null ? void 0 : s.layerKind) || "paint") === "mask" ? o += 1 : i += 1;
  }), {
    paintCount: t,
    maskCount: r,
    paintRasterCount: i,
    maskRasterCount: o,
    totalPaintCount: t + i,
    totalMaskCount: r + o
  };
}
function y0(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, m = Number(s.rot_deg || 0) * xr, x = Math.max(0.01, Number(s.scale || 1));
  for (const g of [-n, 0, n])
    e.save(), e.translate(u + g, f), e.rotate(m), e.scale(x, x), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function eo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function ha(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function qN(e, t) {
  const r = String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "").trim(), n = {
    PanoramaStickers: "Panorama Stickers",
    PanoramaStudio: "Panorama Studio",
    "Panorama Stickers": "Panorama Stickers",
    PanoramaCutout: "Panorama Cutout",
    "Panorama Cutout": "Panorama Cutout",
    PanoramaPreview: "Panorama Preview",
    "Panorama Preview": "Panorama Preview"
  };
  return n[r] ? n[r] : r || (t === "cutout" ? "Panorama Cutout" : "Panorama Stickers");
}
function Yo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function XN(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function JN(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function ZN(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const b0 = "pano_suite.ui_settings.v1", v0 = "pano_suite.node_grid_visibility.v1";
let Ji = null, pr = null;
function La(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function QN() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(b0)) || "").trim();
    if (!t) return Ji ? La(Ji) : null;
    const r = JSON.parse(t), n = La(r);
    return Ji = n, n;
  } catch {
    return Ji ? La(Ji) : null;
  }
}
function e2(e) {
  var r;
  const t = La(e);
  Ji = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(b0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function S0() {
  var e;
  if (pr && typeof pr == "object")
    return pr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(v0)) || "").trim();
    if (!t)
      return pr = {}, pr;
    const r = JSON.parse(t);
    return pr = r && typeof r == "object" ? r : {}, pr;
  } catch {
    return pr = {}, pr;
  }
}
function t2(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = S0()[r];
  return typeof i == "boolean" ? i : !!t;
}
function n2(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = S0();
  n[r] = !!t, pr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(v0, JSON.stringify(n));
  } catch {
  }
}
function r2(e, t) {
  const r = { ...e }, n = t.map((i) => i(Vc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(Vc(r, t[o].name))), Vc(r, "showEditor");
}
function Vc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
function i2(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const r = t.fps === e.timeline.fps ? t : N1(t, e), n = new Set(r.deleted), i = new Map(r.stickers.map((a) => [a.id, a]));
  let o = Object.keys(r.scene).length > 0 || Object.hasOwn(r, "painting_visible");
  const s = [];
  for (const a of e.stickers) {
    if (n.has(a.id)) {
      o = !0;
      continue;
    }
    const l = i.get(a.id);
    l !== void 0 && l.placement === a.placement ? (s.push({ ...a, ...l }), o = !0) : s.push(a);
  }
  return o ? {
    ...e,
    scene: { ...e.scene, ...r.scene },
    stickers: s,
    painting_visible: Object.hasOwn(r, "painting_visible") ? r.painting_visible : e.painting_visible,
    upstream: []
  } : e;
}
const _0 = "PANO_SCENE";
function o2(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: ur(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function s2(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: Rn(e("pano_upstream_coverage")[0])
  };
}
const a2 = "bg_media is not used";
function l2(e, t) {
  return e === _0 && t === null;
}
function c2(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], s = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, a = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) a.has(l) || o.push({ kind: "group", id: l, zIndex: s });
  return r && o.push({ kind: "mask", id: "mask", zIndex: s }), o;
}
function Lr(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function u2(e) {
  return e.map(({ sceneState: { id: t } }, r) => t && !e.slice(r + 1).some((n) => n.sceneState.id === t) ? t : `#${r}`);
}
function d2(e, t, r) {
  const n = u2(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && n[s] === i.id ? t.find((m) => m.layer === i.id) ?? null : null, c = i2(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === r ? u : { ...Is(u, r), painting: d };
    for (const m of f.stickers) m.origin = { layer: n[s], id: m.id };
    return { key: n[s], sceneState: f, ui: o };
  });
}
function Fp(e, t) {
  return { ...e, id: `upstream:${t}:${e.id}` };
}
function f2(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a } = e, l = Cs(s, r), c = (g) => g.visible ? n(g) : null, d = Jm(s, r, { media: c, zIndex: (g) => g.z_index, paintLayers: i, evaluated: l }).map((g) => Fp(g, t)), u = eg(s, r, s.stickers, { media: c, evaluated: l }).map((g) => Fp(g, t)), f = [], m = ol(Lr(a, "pano_scene_files"), Lr(a, "pano_scene_meta"), o);
  m && f.push({ slot: `${t}:scene`, urls: m.urls.filter(Boolean), request: Sd(m, l.scene), value: l.scene, opacity: 1 });
  const x = ol(Lr(a, "pano_sticker_files"), Lr(a, "pano_sticker_meta"), o);
  if (x) {
    const g = Gm(x, s, l);
    f.push({ slot: `${t}:sticker`, urls: Km(x, s), request: g, value: (g == null ? void 0 : g.value) ?? null, opacity: (g == null ? void 0 : g.opacity) ?? 1 });
  }
  return { evaluated: l, sky: d, stickers: u, items: f };
}
const ti = /* @__PURE__ */ new Map(), p2 = 12;
function h2(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ti.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ti.delete(t), ti.set(t, r), r);
}
function m2(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ti.delete(r), ti.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ti.size > p2; ) {
      const i = ti.keys().next().value;
      if (!i) break;
      ti.delete(i);
    }
}
function g2(e) {
  const {
    comfyMedia: t,
    editor: r,
    editorView: n,
    floatingRightEl: i,
    imageCache: o,
    loadPreferredExactLinkedImage: s,
    mediaAssetSource: a,
    mediaSource: l,
    mediaUiImage: c,
    node: d,
    portStillCanvas: u,
    portVideoEl: f,
    readOnly: m,
    runtime: x,
    scheduler: g,
    stageWrap: h,
    state: _,
    stateV2: te,
    stillCanvas: G,
    studio: re,
    timelinePlayhead: T,
    type: W,
    uiState: $,
    videoEl: U
  } = e;
  let ve, ye, de, ge, le, _e;
  const Y = {
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
  }, O = 9, B = [];
  let P = 0;
  const M = () => {
    var Re, He;
    const V = (Re = h == null ? void 0 : h.getBoundingClientRect) == null ? void 0 : Re.call(h), oe = (He = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : He.call(i), Pe = Math.max(0, Number((V == null ? void 0 : V.width) || 0)), Ae = oe ? Math.max(0, Number(oe.width || 0)) : 0, $e = Ae > 0 ? Ae + 14 + 12 : 72, ze = Math.max(280, Math.floor(Pe - $e * 2)), Ge = r.fullscreen ? Math.min(1200, ze) : ze;
    $.videoTransport.shellMaxWidthPx = Ge;
  }, F = () => {
    P || (P = g.requestFrame(() => {
      P = 0, M();
    }));
  }, C = (V) => {
    if (!(V instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(V.audioTracks) && V.audioTracks.length > 0 || V.audioTracks && typeof V.audioTracks.length == "number" && V.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof V.mozHasAudio == "boolean") return V.mozHasAudio;
    } catch {
    }
    try {
      if (Number(V.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!$.videoTransport.hasAudio;
  }, ne = typeof ResizeObserver < "u" ? new ResizeObserver(() => F()) : null;
  ne == null || ne.observe(h), i && (ne == null || ne.observe(i)), B.push(() => {
    var V;
    P && (g.cancelFrame(P), P = 0), (V = ne == null ? void 0 : ne.disconnect) == null || V.call(ne);
  }), F();
  const Q = () => {
    Y.thumbnailJobId += 1, Y.thumbnailSrc = "", $.videoTransport.thumbnails = [], $.videoTransport.thumbnailCount = O;
  }, z = async (V, oe, Pe) => {
    const Ae = String(V || "").trim();
    if (!Ae) {
      Q();
      return;
    }
    const xe = h2(Ae);
    if (xe) {
      Y.thumbnailSrc = Ae, $.videoTransport.thumbnails = xe.thumbnails, $.videoTransport.thumbnailCount = xe.thumbnailCount;
      return;
    }
    const Ce = ++Y.thumbnailJobId;
    Y.thumbnailSrc = Ae, $.videoTransport.thumbnails = [], $.videoTransport.thumbnailCount = O;
    const $e = As(document, "editor.thumbnails");
    $e.preload = "auto", $e.muted = !0, $e.playsInline = !0, $e.crossOrigin = "anonymous";
    const ze = rn({ label: "editor.thumbnail" });
    try {
      const Ge = await new Promise((We) => {
        let mt = !1;
        const bt = (Tt) => {
          mt || (mt = !0, We(Tt));
        };
        $e.addEventListener("loadedmetadata", () => bt(!0), { once: !0 }), $e.addEventListener("canplay", () => bt(!0), { once: !0 }), $e.addEventListener("error", () => bt(!1), { once: !0 }), $e.src = Ae, $e.load();
      });
      if (Y.thumbnailJobId !== Ce) return;
      const Re = Number($e.videoWidth || 0), He = Number($e.videoHeight || 0);
      if (!Ge || Re < 1 || He < 1) {
        Y.thumbnailFailedSrcs.add(Ae);
        return;
      }
      const ae = Math.max(0, Number($e.duration || oe || 0)), Oe = 46, Ne = Math.max(72, Math.round(Re / He * Oe));
      ze.width = Ne, ze.height = Oe;
      const Le = ze.getContext("2d");
      if (!Le) return;
      const Ye = [], Ke = (We) => new Promise((mt) => {
        let bt = !1;
        const Tt = () => {
          bt || (bt = !0, mt());
        };
        $e.addEventListener("seeked", Tt, { once: !0 }), $e.addEventListener("error", Tt, { once: !0 });
        try {
          $e.currentTime = We;
        } catch {
          Tt();
        }
      });
      for (let We = 0; We < O; We += 1) {
        if (Y.thumbnailJobId !== Ce) return;
        const mt = O <= 1 ? 0 : We / (O - 1), bt = ae > 0 ? Math.max(0, Math.min(ae - Math.max(1e-3, 0.5 / Math.max(1, Number(Pe || 24))), ae * mt)) : 0;
        if (await Ke(bt), Y.thumbnailJobId !== Ce) return;
        Le.clearRect(0, 0, Ne, Oe), Le.drawImage($e, 0, 0, Ne, Oe), Ye.push({
          id: `thumb-${We}`,
          src: ze.toDataURL("image/jpeg", 0.72),
          time: bt,
          label: b(bt)
        });
      }
      if (Y.thumbnailJobId !== Ce) return;
      $.videoTransport.thumbnails = Ye, $.videoTransport.thumbnailCount = Ye.length || O, m2(Ae, {
        thumbnails: Ye,
        thumbnailCount: Ye.length || O,
        duration: ae,
        fps: Pe
      });
    } finally {
      $e.removeAttribute("src"), $e.load(), fs(ze);
    }
  };
  B.push(() => {
    Q();
  });
  const w = Cg({
    video: U instanceof HTMLVideoElement ? U : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (V) => g.requestFrame(V),
      cancelFrame: (V) => g.cancelFrame(V)
    },
    fps: E,
    span: () => {
      if (te) return _e();
      const V = Math.round(Number($.videoTransport.duration || 0) * E());
      return U.loop || !(V > 0) ? 1 / 0 : V;
    },
    loop: () => te,
    onFrame: (V) => {
      te ? de(V) : S(), ye({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    },
    onCapture: () => {
      L() && (x.backgroundDirty = !0);
    },
    onChange: () => {
      S(), T.playing.value = w.playing, le(), ye({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    }
  });
  B.push(() => w.dispose());
  const Z = te && f instanceof HTMLVideoElement ? Od({
    video: f,
    onCapture: () => {
      var Pe;
      const V = Number(f.videoWidth || 0), oe = Number(f.videoHeight || 0);
      V < 1 || oe < 1 || (u.width = V, u.height = oe, (Pe = u.getContext("2d")) == null || Pe.drawImage(f, 0, 0), u.__panoFrameIdx += 1, ye({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA }));
    },
    onChange: () => ye({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  Z && B.push(() => Z.dispose());
  const ie = te ? Nd({
    createImage: (V, oe) => {
      const Pe = new Image();
      return Pe.onload = oe, Pe.onerror = oe, Pe.src = V, Pe;
    },
    onLoad: () => ye({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  if (U instanceof HTMLVideoElement) {
    const V = () => {
      R(), ye({ cause: "frame_view", localOnly: !0 });
    }, oe = () => {
      S({
        hasAudio: $.videoTransport.hasAudio,
        muted: U.muted,
        volume: Number(U.volume ?? $.videoTransport.volume ?? 1)
      });
    }, Pe = () => {
      const Ae = U.dataset.panoSrc;
      Ae && (Y.failedSrcs.add(Ae), R(), ye());
    };
    for (const [Ae, xe] of [
      ["loadedmetadata", V],
      ["loadeddata", V],
      ["canplay", V],
      ["volumechange", oe],
      ["error", Pe]
    ])
      U.addEventListener(Ae, xe), B.push(() => U.removeEventListener(Ae, xe));
  }
  function be(V) {
    return t.uiList(d, V);
  }
  function we(V) {
    return t.uiValue(d, V);
  }
  function A() {
    const V = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (qa(V))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const oe = p();
    return oe ? { videoKey: oe.videoKey, metaKey: oe.metaKey } : W === "stickers" || W === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function se() {
    const { metaKey: V } = A(), oe = we(V);
    return Array.isArray(oe) && oe.length > 0 && oe[0] && typeof oe[0] == "object" ? oe[0] : oe && typeof oe == "object" ? oe : null;
  }
  function y(V) {
    return V ? V instanceof HTMLVideoElement ? [
      String(V.currentSrc || V.src || ""),
      Number(V.videoWidth || 0),
      Number(V.videoHeight || 0)
    ].join("|") : V instanceof HTMLCanvasElement ? [
      "canvas",
      Number(V.width || 0),
      Number(V.height || 0),
      String(V.__panoFrameIdx || 0)
    ].join("|") : [
      String(V.currentSrc || V.src || ""),
      Number(V.naturalWidth || V.width || 0),
      Number(V.naturalHeight || V.height || 0)
    ].join("|") : "none";
  }
  function b(V) {
    const oe = Math.max(0, Math.floor(Number(V || 0))), Pe = Math.floor(oe / 60), Ae = oe % 60;
    return `${Pe}:${String(Ae).padStart(2, "0")}`;
  }
  function E() {
    return te ? _.timeline.fps : Y.metaFps || 1e3;
  }
  function S(V = {}) {
    const oe = Number(V.duration ?? $.videoTransport.duration ?? 0), Pe = Math.max(1, Number(V.fps ?? $.videoTransport.fps ?? 24)), Ae = w.frame / E(), xe = Object.prototype.hasOwnProperty.call(V, "ready") ? !!V.ready : !!$.videoTransport.ready, Ce = w.playing, $e = Object.prototype.hasOwnProperty.call(V, "visible") ? !!V.visible : !!$.videoTransport.visible, ze = Object.prototype.hasOwnProperty.call(V, "muted") ? !!V.muted : !!(U instanceof HTMLVideoElement ? U.muted : $.videoTransport.muted), Ge = Number(
      Object.prototype.hasOwnProperty.call(V, "volume") ? V.volume : U instanceof HTMLVideoElement ? U.volume : $.videoTransport.volume
    ), Re = Object.prototype.hasOwnProperty.call(V, "hasAudio") ? !!V.hasAudio : C(U), He = Object.prototype.hasOwnProperty.call(V, "loop") ? !!V.loop : !!$.videoTransport.loop;
    Object.assign($.videoTransport, {
      ready: xe,
      playing: Ce,
      visible: $e,
      loop: He,
      currentTime: Number.isFinite(Ae) ? Ae : 0,
      duration: Number.isFinite(oe) ? oe : 0,
      progressPct: oe > 1e-6 ? Math.max(0, Math.min(100, Ae / oe * 100)) : 0,
      currentTimeLabel: b(Ae),
      durationLabel: b(oe),
      frameCount: Math.max(0, Number(V.frameCount ?? $.videoTransport.frameCount ?? 0)),
      fps: Pe,
      hasAudio: Re,
      muted: ze,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ge) ? Ge : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ge) ? Ge : 1)) * 100),
      thumbnails: Array.isArray(V.thumbnails) ? V.thumbnails : $.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(V.thumbnailCount ?? $.videoTransport.thumbnailCount ?? O))
    });
  }
  function j() {
    return !!(U instanceof HTMLVideoElement && !te && U.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function H() {
    if (!(U instanceof HTMLVideoElement) || !$.videoTransport.hasAudio) return;
    const V = !U.muted;
    U.muted = V, !V && Number(U.volume || 0) <= 0 && (U.volume = Math.max(0.01, Number($.videoTransport.volume || 1))), S({
      hasAudio: $.videoTransport.hasAudio,
      muted: U.muted,
      volume: Number(U.volume ?? $.videoTransport.volume ?? 1)
    });
  }
  function X() {
    S({
      visible: j()
    });
  }
  function L() {
    if (!(U instanceof HTMLVideoElement) || Number(U.videoWidth || 0) < 1 || Number(U.videoHeight || 0) < 1) return !1;
    const V = Number(U.videoWidth || 0), oe = Number(U.videoHeight || 0);
    (G.width !== V || G.height !== oe) && (G.width = V, G.height = oe);
    const Pe = G.getContext("2d");
    return Pe ? (Pe.clearRect(0, 0, V, oe), Pe.drawImage(U, 0, 0, V, oe), G.__panoFrameIdx = Number(G.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function D() {
    return !w.showsVideo && Number(G.width || 0) > 0 && Number(G.height || 0) > 0 && Number(G.__panoFrameIdx || 0) > 0 ? G : U instanceof HTMLVideoElement && Number(U.videoWidth || 0) > 0 && Number(U.videoHeight || 0) > 0 && Number(U.readyState || 0) >= 2 ? U : null;
  }
  function k() {
    G.__panoFrameIdx = 0, x.backgroundDirty = !0;
  }
  function R() {
    if (!(U instanceof HTMLVideoElement)) return null;
    const { videoKey: V } = A(), oe = (p() || Kt(d, "background")) && be(V)[0] || null, Pe = l(oe), Ae = [Pe, t.linkedVideoFile(d, v())].filter(Boolean), xe = Ae.find((ae) => !Y.failedSrcs.has(ae)) || "";
    Y.videoFailed = !xe && Ae.length > 0;
    const Ce = xe && xe === Pe ? se() : null;
    Y.metaFps = Number(Ce == null ? void 0 : Ce.fps) > 0 ? Number(Ce.fps) : 0;
    const $e = Math.max(1, Number((Ce == null ? void 0 : Ce.fps) || (te ? _.timeline.fps : 24))), ze = U.dataset.panoSrc === xe && Number.isFinite(U.duration) ? U.duration : 0, Ge = Number((Ce == null ? void 0 : Ce.duration) || ((Ce == null ? void 0 : Ce.frames) > 0 ? Ce.frames / $e : ze)), Re = Math.max(0, Number((Ce == null ? void 0 : Ce.frames) || Math.round(Ge * $e))), He = !!(Ce != null && Ce.has_audio) || C(U);
    return xe && U.dataset.panoSrc !== xe ? (U.pause(), k(), U.dataset.panoSrc = xe, U.loop = !te && !!$.videoTransport.loop, U.muted = !!$.videoTransport.muted, U.volume = Math.max(0, Math.min(1, Number($.videoTransport.volume ?? 1))), U.src = xe, U.load(), w.setSource(!0), te || w.seek(0)) : !xe && U.getAttribute("src") && (U.pause(), U.removeAttribute("src"), delete U.dataset.panoSrc, U.load(), k(), Q(), w.setSource(!1)), te || (U.loop = !!$.videoTransport.loop), xe && !te && Y.thumbnailSrc !== xe && !Y.thumbnailFailedSrcs.has(xe) && z(xe, Ge, $e), xe || Q(), S({
      ready: !!xe,
      visible: !!xe && j(),
      duration: Ge,
      frameCount: Re,
      fps: $e,
      hasAudio: He,
      loop: !!U.loop,
      muted: !!U.muted,
      volume: Number(U.volume ?? $.videoTransport.volume ?? 1),
      thumbnailCount: $.videoTransport.thumbnailCount
    }), xe || null;
  }
  function ee(V, oe = null) {
    return c(d, V, o, oe || (() => ye()));
  }
  function ce(V = null) {
    return Kt(d, "external-sticker") ? ee(go, V) : null;
  }
  function Se() {
    if (!Kt(d, "external-sticker")) return null;
    const V = be(m0)[0];
    if (!V || typeof V != "object") return null;
    const oe = be(h0).map(l).filter(Boolean);
    if (oe.length) return { frames: oe, meta: V };
    const Pe = l(be(p0)[0] || null);
    return Pe ? { src: Pe, meta: V } : null;
  }
  function ue() {
    const V = _.stickers.find(ve), oe = V ? Se() : null, Pe = oe ? Md(V.clip, r.frame, _.timeline.fps, oe.meta) : null;
    Z.follow({ src: (oe == null ? void 0 : oe.src) || "", time: Pe, playing: w.advancing, fps: _.timeline.fps });
    const Ae = V ? J(V) : null, xe = oe != null && oe.frames ? ie.picture(oe.frames, Pe, oe.meta, Ae) : Z.picture(u, Ae);
    return xe ? { media: xe, revision: y(xe), source: Pd(oe, Ae) } : null;
  }
  function he() {
    return !te || !Kt(d, "scene") ? null : ol(be("pano_scene_files"), be("pano_scene_meta"), l);
  }
  function me() {
    return !te || !Kt(d, "external-sticker") ? null : ol(be("pano_sticker_files"), be("pano_sticker_meta"), l);
  }
  function J(V) {
    var $e;
    if (V && typeof V == "object" && (ve(V) || V.external === !0))
      return ce(() => {
        ni(d, "image-loaded");
      });
    const oe = te ? fe(V) : String(V && typeof V == "object" ? V.asset_id || V.assetId || "" : V || "");
    if (!oe) return null;
    const Pe = o.get(oe);
    if (Pe) return Pe;
    const Ae = te ? il(V.source) : ($e = _.assets) == null ? void 0 : $e[oe], xe = a(Ae);
    if (!xe) return null;
    const Ce = new Image();
    return c0(Ce, xe), Ce.onload = () => {
      u0(Ce, xe), ye();
    }, Ce.onerror = () => {
      d0(Ce, xe), ye();
    }, Ce.src = xe, o.set(oe, Ce), Ce;
  }
  function fe(V) {
    const { source: oe } = V;
    return oe.filename ? `file:${oe.storage}:${oe.subfolder}:${oe.filename}` : `sticker:${V.id}`;
  }
  function K() {
    if (W === "cutout") {
      const Ce = D();
      if (Ce) return Ce;
      const $e = s(
        d,
        ["erp_image", "bg_erp"],
        () => ye(),
        "background:cutout:erp_image|bg_erp"
      );
      return $e && !Iu($e) ? $e : c(d, "pano_input_images", o, () => ye()) || $e || null;
    }
    const V = D();
    if (V) return V;
    const oe = p(), Pe = oe || Kt(d, "background") ? c(d, (oe == null ? void 0 : oe.imageKey) ?? "pano_input_images", o, () => ye()) : null;
    if (Pe && !Iu(Pe)) return Pe;
    if (U instanceof HTMLVideoElement && U.dataset.panoSrc) return U;
    if (oe) return Pe;
    const Ae = v();
    return s(d, Ae, () => ye(), `background:${Ae.join("|")}`) || Pe || null;
  }
  function p() {
    return !re || !Kt(d, "scene") ? null : s2(be);
  }
  function N() {
    var V;
    return ((V = p()) == null ? void 0 : V.coverage) ?? Rn(_.coverage);
  }
  function v() {
    if (p()) return [];
    if (W === "cutout") return ["erp_image", "bg_erp"];
    const V = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((Ae) => String((Ae == null ? void 0 : Ae.name) || "")) : [], oe = V.includes("erp_image"), Pe = V.includes("bg_erp");
    return m && (oe || Pe) ? oe ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : W === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function I(V) {
    return V ? V instanceof HTMLImageElement ? !!V.complete && Number(V.naturalWidth || V.width || 0) > 0 && Number(V.naturalHeight || V.height || 0) > 0 : V instanceof HTMLVideoElement ? Number(V.videoWidth || 0) > 0 && Number(V.videoHeight || 0) > 0 && Number(V.readyState || 0) >= 2 : Number(V.width || V.naturalWidth || 0) > 0 && Number(V.height || V.naturalHeight || 0) > 0 : !1;
  }
  function q() {
    if (n.failed) return { status: Yn, detail: "renderer" };
    if (!n.ready) return { status: nr, detail: "boot" };
    const V = K(), oe = Y.videoFailed ? Yn : Cu(V, I), Pe = [];
    for (const Ae of ge()) {
      if ((Ae == null ? void 0 : Ae.visible) === !1) continue;
      const xe = J(Ae);
      Pe.push(Cu(xe, I));
    }
    return NN({
      presented: x.hasPresentedFrame,
      background: oe,
      stickers: Pe
    });
  }
  function pe() {
    U instanceof HTMLVideoElement && U.pause(), B.forEach((V) => {
      try {
        V();
      } catch {
      }
    });
  }
  return {
    connect(V) {
      ({
        isExternalSticker: ve,
        requestDraw: ye,
        setTimelineFrame: de,
        skyStickers: ge,
        syncTimeline: le,
        timelineSpanFrames: _e
      } = V);
    },
    videoState: Y,
    queueVideoTransportLayout: F,
    playback: w,
    portVideo: Z,
    getNodeUiValue: we,
    getMediaRevisionToken: y,
    playbackFps: E,
    syncVideoTransportState: S,
    toggleVideoMuted: H,
    syncVideoTransportVisibility: X,
    refreshModalVideoSource: R,
    getStickerUiImage: ee,
    getExternalStickerPreviewImage: ce,
    getPortMedia: Se,
    followPortSticker: ue,
    getStickerImage: J,
    stickerImageKey: fe,
    getConnectedErpImage: K,
    backgroundCoverage: N,
    upstreamBackground: p,
    isDecodedImageReady: I,
    getStageImageStatus: q,
    sceneFiles: he,
    stickerFiles: me,
    disposeMediaSession: pe
  };
}
function y2(e = 80, t = null, r = 8) {
  const n = [];
  let i = -1;
  const o = Math.max(1, Number(e || 80)), s = Math.max(1, Number(r || 8));
  function a(c) {
    if (n.splice(0, n.length), i = -1, !c || typeof c != "object" || !Array.isArray(c.entries) || (c.entries.forEach((u) => {
      n.push(String(u || ""));
    }), !n.length)) return;
    const d = Number(c.index);
    Number.isInteger(d) ? d === -1 ? i = -1 : i = Math.max(0, Math.min(n.length - 1, d)) : i = n.length - 1;
  }
  function l(c) {
    n[i] !== c && (n.splice(i + 1), n.push(c), n.length > o && n.shift(), i = n.length - 1);
  }
  return a(t), {
    beginActionGroup() {
      return { active: !0 };
    },
    commitActionGroup(c) {
      l(String(c || ""));
    },
    rollbackActionGroup() {
      return null;
    },
    undo() {
      const c = i - 1;
      return c < 0 || c >= n.length ? null : (i = c, n[i]);
    },
    redo() {
      const c = i + 1;
      return c < 0 || c >= n.length ? null : (i = c, n[i]);
    },
    get entries() {
      return n.slice();
    },
    get index() {
      return i;
    },
    serialize() {
      const c = n.length, d = Math.max(0, c - s), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = n.slice(u, u + s), m = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: m
      };
    },
    hydrate: a
  };
}
const b2 = 80;
function w0(e) {
  return JSON.stringify(X1(e));
}
function v2(e) {
  return y2(b2, { entries: [w0(e)], index: 0 });
}
function x0(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function S2(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, m, x, g, h, _, te, G, re, T, W, $, U;
  function ve() {
    r || (re(), W(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(w0(G())), $()));
  }
  function ye(ge) {
    var O, B;
    if (r) return;
    te();
    const le = ge < 0 ? t.historyController.undo() : t.historyController.redo();
    if ($(), !le) return;
    const _e = J1(i, le), Y = (O = i.timeline) == null ? void 0 : O.fps;
    Object.keys(i).forEach((P) => delete i[P]), Object.assign(i, _e.state), re(!1), W({ restored: !0 }), o && g(), o && i.timeline.fps !== Y && x.seek(Math.round(t.frame * i.timeline.fps / Y)), t.selectedId = x0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((B = d()) == null ? void 0 : B.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), h(), n.backgroundDirty = !0, _e.paintingChanged ? m() : f(), T(), U(), c(), _({ cause: "cutout_frame" });
  }
  function de() {
    var _e, Y;
    const ge = Array.isArray((_e = t.historyController) == null ? void 0 : _e.entries) ? t.historyController.entries : [], le = Number((Y = t.historyController) == null ? void 0 : Y.index);
    return {
      canUndo: !r && ge.length > 1 && le > 0,
      canRedo: !r && ge.length > 1 && le >= 0 && le < ge.length - 1
    };
  }
  return {
    connect(ge) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: m,
        playback: x,
        rebuildUpstreamWorking: g,
        releaseHiddenSelection: h,
        requestDraw: _,
        stopTimelinePlayback: te,
        storedEditorState: G,
        syncCutoutShot: re,
        syncPaintUi: T,
        syncPortHandoff: W,
        syncUndoRedoButtons: $,
        updateSidePanel: U
      } = ge);
    },
    pushHistory: ve,
    restoreHistory: ye,
    getHistoryCapabilities: de
  };
}
function _2(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, m, x;
  function g() {
    return s === "stickers" ? h() : i.shots;
  }
  function h() {
    return n ? i.stickers.filter((p) => p.placement === "sky") : i.stickers;
  }
  function _(p) {
    return n && Z(p);
  }
  function te(p) {
    return p.source.kind === "file" && !p.source.filename && !p.source.data_url;
  }
  function G(p) {
    if (!_(p)) return p;
    const N = ee(p) ? m(p) : null;
    return pd(p, r.frame, N && { width: N.naturalWidth || N.width, height: N.naturalHeight || N.height });
  }
  function re(p, N) {
    _(p) ? Em(p, r.frame, N) : Object.assign(p, N);
  }
  function T() {
    const p = i.painting || (i.painting = So(null));
    return Array.isArray(p.groups) || (p.groups = []), p.groups;
  }
  function W(p = "paint") {
    var q, pe;
    const N = Array.isArray((pe = (q = i.painting) == null ? void 0 : q[p]) == null ? void 0 : pe.strokes) ? i.painting[p].strokes : [], v = [], I = /* @__PURE__ */ new Set();
    for (const V of N) {
      const oe = String((V == null ? void 0 : V.actionGroupId) || "").trim();
      !oe || I.has(oe) || (I.add(oe), v.push(oe));
    }
    return v;
  }
  function $() {
    return W("paint");
  }
  function U(p, N) {
    const v = String(N || "").trim();
    return v ? `${p === "mask" ? "mask" : "paint"}:${v}` : "";
  }
  function ve(p) {
    const N = String(p || "").trim();
    return N ? `raster:${N}` : "";
  }
  function ye(p) {
    const N = String(p || "").trim();
    if (!N) return "";
    const v = N.match(/^raster:(.*)$/);
    return String(v ? v[1] || "" : N).trim();
  }
  function de(p, N = null) {
    const v = String(p || "").trim();
    if (!v) return { layerKind: "paint", actionGroupId: "" };
    const I = v.match(/^(paint|mask):(.*)$/);
    return I ? { layerKind: I[1] === "mask" ? "mask" : "paint", actionGroupId: String(I[2] || "").trim() } : { layerKind: N === "mask" ? "mask" : "paint", actionGroupId: v };
  }
  function ge() {
    var N;
    let p = -1;
    for (const v of h())
      p = Math.max(p, Number((v == null ? void 0 : v.z_index) || 0));
    for (const v of T())
      p = Math.max(p, Number((v == null ? void 0 : v.z_index) || 0));
    for (const v of Array.isArray((N = i.painting) == null ? void 0 : N.raster_objects) ? i.painting.raster_objects : [])
      String((v == null ? void 0 : v.layerKind) || "paint") === "paint" && (p = Math.max(p, Number((v == null ? void 0 : v.z_index) || 0)));
    return p + 1;
  }
  function le(p, N = null) {
    const v = String(p || "").trim();
    if (!v) return null;
    const I = T();
    let q = I.find((pe) => String((pe == null ? void 0 : pe.actionGroupId) || "") === v);
    return q ? N != null && (q.z_index = Math.max(0, Number(N || 0))) : (q = {
      id: v,
      type: "strokeGroup",
      actionGroupId: v,
      z_index: N == null ? ge() : Math.max(0, Number(N || 0)),
      locked: !1,
      frame: null
    }, I.push(q)), q;
  }
  function _e(p) {
    if (!(p != null && p.centerUv)) return [];
    const N = Number(p.centerUv.u || 0), v = Number(p.centerUv.v || 0), I = Number(p.halfW || 0), q = Number(p.halfH || 0);
    return [
      {
        u: ((N - I) % 1 + 1) % 1,
        v: Ie(v - q, 0, 1)
      },
      {
        u: ((N + I) % 1 + 1) % 1,
        v: Ie(v - q, 0, 1)
      },
      {
        u: ((N + I) % 1 + 1) % 1,
        v: Ie(v + q, 0, 1)
      },
      {
        u: ((N - I) % 1 + 1) % 1,
        v: Ie(v + q, 0, 1)
      }
    ];
  }
  function Y() {
    const p = new Set($()), v = T().filter((I) => p.has(String((I == null ? void 0 : I.actionGroupId) || "")));
    return p.forEach((I) => {
      v.some((q) => String((q == null ? void 0 : q.actionGroupId) || "") === I) || v.push({
        id: I,
        type: "strokeGroup",
        actionGroupId: I,
        z_index: ge(),
        locked: !1,
        frame: null
      });
    }), v.sort((I, q) => Number((I == null ? void 0 : I.z_index) || 0) - Number((q == null ? void 0 : q.z_index) || 0)), i.painting.groups = v, v;
  }
  function O(p, N, v) {
    var Re;
    const I = (He) => (Number(He || 0) % 1 + 1) % 1, q = [];
    for (const He of v) {
      const ae = He == null ? void 0 : He.geometry, Oe = (ae == null ? void 0 : ae.geometryKind) === "lasso_fill" ? ae == null ? void 0 : ae.points : (ae == null ? void 0 : ae.processedPoints) || (ae == null ? void 0 : ae.rawPoints) || (ae == null ? void 0 : ae.points) || [];
      Array.isArray(Oe) && q.push(...Oe);
    }
    if (!q.length) return null;
    const pe = I(((Re = q[0]) == null ? void 0 : Re.u) || 0);
    let V = 0, oe = 0;
    q.forEach((He) => {
      const ae = I((He == null ? void 0 : He.u) || 0);
      V += pe + S(ae, pe), oe += Number((He == null ? void 0 : He.v) || 0);
    });
    const Pe = (V / q.length % 1 + 1) % 1;
    let Ae = 1 / 0, xe = -1 / 0, Ce = 1 / 0, $e = -1 / 0;
    q.forEach((He) => {
      const ae = I((He == null ? void 0 : He.u) || 0), Oe = S(ae, Pe);
      Ae = Math.min(Ae, Oe), xe = Math.max(xe, Oe);
      const Ne = Number((He == null ? void 0 : He.v) || 0);
      Ce = Math.min(Ce, Ne), $e = Math.max($e, Ne);
    });
    const ze = v.reduce((He, ae) => {
      const Oe = l(String((ae == null ? void 0 : ae.toolKind) || "pen")), Ne = Tn[Oe] || Tn[Fr], Le = Math.max(1, Number((ae == null ? void 0 : ae.size) || 10)) * Math.max(0.1, Number((Ne == null ? void 0 : Ne.sizeScale) ?? 1));
      return Math.max(He, Le);
    }, 0), Ge = Math.max(35e-4, ze / 2048);
    return {
      centerUv: { u: ((Pe + (Ae + xe) * 0.5) % 1 + 1) % 1, v: Ie((Ce + $e) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (xe - Ae) * 0.5 + Ge,
      halfH: ($e - Ce) * 0.5 + Ge,
      uvPad: Ge
    };
  }
  function B(p, N, v) {
    const I = String(p || "").trim();
    if (!I) return null;
    const q = T().find((V) => String((V == null ? void 0 : V.actionGroupId) || "") === I);
    if (!q) return null;
    const pe = v || y(I, N);
    return q.frame = O(I, N, pe), q.frame;
  }
  function P() {
    var I;
    const p = h().map((q) => ({
      type: "sticker",
      id: String((q == null ? void 0 : q.id) || ""),
      z_index: Number((q == null ? void 0 : q.z_index) || 0),
      item: q
    })), N = Y().map((q) => ({
      type: "strokeGroup",
      id: String((q == null ? void 0 : q.id) || (q == null ? void 0 : q.actionGroupId) || ""),
      actionGroupId: String((q == null ? void 0 : q.actionGroupId) || ""),
      z_index: Number((q == null ? void 0 : q.z_index) || 0),
      item: q
    })), v = (Array.isArray((I = i.painting) == null ? void 0 : I.raster_objects) ? i.painting.raster_objects : []).filter((q) => String((q == null ? void 0 : q.layerKind) || "paint") === "paint").map((q) => ({
      type: "rasterObject",
      id: String((q == null ? void 0 : q.id) || ""),
      z_index: Number((q == null ? void 0 : q.z_index) || 0),
      item: q
    }));
    return [...p, ...N, ...v].sort((q, pe) => Number(q.z_index || 0) - Number(pe.z_index || 0));
  }
  function M(p = !0) {
    var v, I, q, pe, V, oe;
    const N = P().filter((Pe) => Pe.type === "strokeGroup").map((Pe) => String(Pe.actionGroupId || "")).filter((Pe) => !!Pe);
    if (p) {
      const Pe = String(((I = (v = r.interaction) == null ? void 0 : v.stroke) == null ? void 0 : I.actionGroupId) || "").trim(), Ae = String(((pe = (q = r.interaction) == null ? void 0 : q.stroke) == null ? void 0 : pe.layerKind) || "").trim(), xe = String(((oe = (V = r.interaction) == null ? void 0 : V.stroke) == null ? void 0 : oe.toolKind) || "").trim();
      Pe && Ae === "paint" && xe !== "eraser" && !N.includes(Pe) && N.push(Pe);
    }
    return N;
  }
  function F(p = !0) {
    var oe, Pe, Ae, xe, Ce, $e;
    const N = P();
    if (!p) return N;
    const v = String(((Pe = (oe = r.interaction) == null ? void 0 : oe.stroke) == null ? void 0 : Pe.actionGroupId) || "").trim(), I = String(((xe = (Ae = r.interaction) == null ? void 0 : Ae.stroke) == null ? void 0 : xe.layerKind) || "").trim(), q = String((($e = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : $e.toolKind) || "").trim();
    if (!v || I !== "paint" || q === "eraser" || N.some((ze) => ze.type === "strokeGroup" && String(ze.actionGroupId || "") === v))
      return N;
    const pe = f();
    let V = N.reduce((ze, Ge) => Math.max(ze, Number((Ge == null ? void 0 : Ge.z_index) || 0)), -1) + 1;
    return pe && se(pe) && String(pe.actionGroupId || "") === v && (V = Number(pe.z_index || 0)), [
      ...N,
      {
        type: "strokeGroup",
        id: v,
        actionGroupId: v,
        z_index: V,
        item: null
      }
    ].sort((ze, Ge) => Number((ze == null ? void 0 : ze.z_index) || 0) - Number((Ge == null ? void 0 : Ge.z_index) || 0));
  }
  function C() {
    return T().slice().sort((p, N) => Number((p == null ? void 0 : p.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0)).map((p) => A(U("paint", (p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || ""))).filter(Boolean);
  }
  function ne() {
    var p;
    return (Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : []).filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") === "paint").slice().sort((N, v) => Number((N == null ? void 0 : N.z_index) || 0) - Number((v == null ? void 0 : v.z_index) || 0)).map((N) => be(ve((N == null ? void 0 : N.id) || ""))).filter(Boolean);
  }
  function Q() {
    return Array.isArray(i.stickers) ? h() : [];
  }
  function z() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...Q()];
  }
  function w(p) {
    return !!p && Array.isArray(i.shots) && i.shots.includes(p);
  }
  function Z(p) {
    return !!p && Array.isArray(i.stickers) && i.stickers.includes(p);
  }
  function ie() {
    var p;
    return Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : [];
  }
  function be(p) {
    const N = ye(p);
    if (!N) return null;
    const v = ie().find((I) => String((I == null ? void 0 : I.id) || "").trim() === N);
    return !v || String((v == null ? void 0 : v.layerKind) || "paint") !== "paint" ? null : {
      ...v,
      id: ve(N),
      type: "rasterObject",
      rasterObjectId: N
    };
  }
  function we(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "rasterObject") return !1;
    const N = ye(p.rasterObjectId || p.id || "");
    return !!N && !!be(ve(N));
  }
  function A(p) {
    const N = de(p), v = String(N.actionGroupId || "").trim();
    if (!v) return null;
    const I = T().find((q) => String((q == null ? void 0 : q.id) || (q == null ? void 0 : q.actionGroupId) || "") === v || String((q == null ? void 0 : q.actionGroupId) || "") === v);
    return I ? {
      ...I,
      id: U("paint", v),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: v
    } : null;
  }
  function se(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "strokeGroup") return !1;
    const N = String(p.actionGroupId || "").trim(), v = String(p.layerKind || "paint").trim() || "paint";
    return !!N && !!A(U(v, N));
  }
  function y(p, N = null) {
    const v = de(p, N), I = String(v.actionGroupId || "").trim();
    return I ? d(v.layerKind).filter((q) => String((q == null ? void 0 : q.actionGroupId) || "").trim() === I) : [];
  }
  function b(p, N = "paint") {
    const v = String(p || "").trim(), q = `geomv5:${String(N || "paint").trim() || "paint"}:${v}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const pe = a(), V = String((pe == null ? void 0 : pe.id) || ""), oe = pe ? c(pe) : null;
      return `${q}:frame:${V}:${Math.round(Number((pe == null ? void 0 : pe.yaw_deg) || 0) * 1e3)}:${Math.round(Number((pe == null ? void 0 : pe.pitch_deg) || 0) * 1e3)}:${Math.round(Number((pe == null ? void 0 : pe.roll_deg) ?? (pe == null ? void 0 : pe.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((pe == null ? void 0 : pe.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((pe == null ? void 0 : pe.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((oe == null ? void 0 : oe.x) || 0))}:${Math.round(Number((oe == null ? void 0 : oe.y) || 0))}:${Math.round(Number((oe == null ? void 0 : oe.w) || 0))}:${Math.round(Number((oe == null ? void 0 : oe.h) || 0))}`;
    }
    return `${q}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function E(p, N, v) {
    return !p || typeof p != "object" ? p : {
      ...p,
      u: ((Number(p.u || 0) + Number(N || 0)) % 1 + 1) % 1,
      v: Ie(Number(p.v || 0) + Number(v || 0), 0, 1)
    };
  }
  function S(p, N) {
    let v = Number(p || 0) - Number(N || 0);
    for (; v > 0.5; ) v -= 1;
    for (; v < -0.5; ) v += 1;
    return v;
  }
  function j(p, N = null, v = null) {
    var Ae;
    const I = de(p, N), q = Array.isArray(v) ? v : y(I.actionGroupId, I.layerKind), pe = [];
    if (q.forEach((xe) => {
      const Ce = (xe == null ? void 0 : xe.geometry) || null, $e = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray($e) && pe.push(...$e);
    }), !pe.length) return { u: 0.5, v: 0.5 };
    const V = Number(((Ae = pe[0]) == null ? void 0 : Ae.u) || 0);
    let oe = 0, Pe = 0;
    return pe.forEach((xe) => {
      oe += V + S(Number((xe == null ? void 0 : xe.u) || 0), V), Pe += Number((xe == null ? void 0 : xe.v) || 0);
    }), {
      u: (oe / pe.length % 1 + 1) % 1,
      v: Ie(Pe / pe.length, 0, 1)
    };
  }
  function H(p, N, v = 1, I = 0) {
    if (!p || typeof p != "object") return p;
    const q = Number((N == null ? void 0 : N.u) || 0), pe = Number((N == null ? void 0 : N.v) || 0), V = S(Number(p.u || 0), q), oe = Number(p.v || 0) - pe, Pe = Number(I || 0) * xr, Ae = Math.cos(Pe), xe = Math.sin(Pe), Ce = Math.max(0.02, Number(v || 1)), $e = (V * Ae - oe * xe) * Ce, ze = (V * xe + oe * Ae) * Ce;
    return {
      ...p,
      u: ((q + $e) % 1 + 1) % 1,
      v: Ie(pe + ze, 0, 1)
    };
  }
  function X(p, N, v, I = null, q = null, pe = null) {
    const V = de(p, q), oe = String(V.actionGroupId || "").trim();
    if (!oe) return !1;
    const Pe = d(V.layerKind), Ae = Array.isArray(I) ? new Map(I.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let xe = !1;
    if (Pe.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== oe) return;
      const $e = (Ae == null ? void 0 : Ae.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, ze = Ce == null ? void 0 : Ce.geometry, Ge = $e == null ? void 0 : $e.geometry;
      !ze || !Ge || (Array.isArray(Ge.points) && (ze.points = Ge.points.map((Re) => E(Re, N, v)), xe = !0), Array.isArray(Ge.rawPoints) && (ze.rawPoints = Ge.rawPoints.map((Re) => E(Re, N, v)), xe = !0), Array.isArray(Ge.processedPoints) && (ze.processedPoints = Ge.processedPoints.map((Re) => E(Re, N, v)), xe = !0));
    }), xe && pe) {
      const Ce = T().find(($e) => String(($e == null ? void 0 : $e.actionGroupId) || "") === oe);
      Ce && (Ce.frame = null);
    }
    return xe;
  }
  function L(p, N = 1, v = 0, I = null, q = null, pe = null) {
    const V = de(p, q), oe = String(V.actionGroupId || "").trim();
    if (!oe) return !1;
    const Pe = d(V.layerKind), Ae = Array.isArray(I) ? I : y(oe, V.layerKind), xe = Array.isArray(Ae) ? new Map(Ae.map((ze) => [String((ze == null ? void 0 : ze.id) || ""), ze])) : null, Ce = (pe == null ? void 0 : pe.centerUv) ?? j(oe, V.layerKind, Ae);
    let $e = !1;
    if (Pe.forEach((ze) => {
      if (String((ze == null ? void 0 : ze.actionGroupId) || "").trim() !== oe) return;
      const Ge = (xe == null ? void 0 : xe.get(String((ze == null ? void 0 : ze.id) || ""))) || ze, Re = ze == null ? void 0 : ze.geometry, He = Ge == null ? void 0 : Ge.geometry;
      !Re || !He || (Array.isArray(He.points) && (Re.points = He.points.map((ae) => H(ae, Ce, N, v)), $e = !0), Array.isArray(He.rawPoints) && (Re.rawPoints = He.rawPoints.map((ae) => H(ae, Ce, N, v)), $e = !0), Array.isArray(He.processedPoints) && (Re.processedPoints = He.processedPoints.map((ae) => H(ae, Ce, N, v)), $e = !0));
    }), $e && pe) {
      const ze = T().find((Ge) => String((Ge == null ? void 0 : Ge.actionGroupId) || "") === oe);
      ze && (ze.frame = null);
    }
    return $e;
  }
  function D(p, N, v, I = null) {
    const q = ye(p);
    if (!q) return !1;
    const pe = ie().find((xe) => String((xe == null ? void 0 : xe.id) || "").trim() === q);
    if (!pe) return !1;
    const V = I && typeof I == "object" ? I : pe, oe = (V == null ? void 0 : V.transform) || {}, Pe = Number(oe.du || 0) + Number(N || 0), Ae = Ie(Number(oe.dv || 0) + Number(v || 0), -1, 1);
    return pe.transform || (pe.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), pe.transform.du = Pe, pe.transform.dv = Ae, !0;
  }
  function k(p, N = 1, v = null) {
    const I = ye(p);
    if (!I) return !1;
    const q = ie().find((Ae) => String((Ae == null ? void 0 : Ae.id) || "").trim() === I);
    if (!q) return !1;
    const pe = v && typeof v == "object" ? v : q, V = (pe == null ? void 0 : pe.transform) || {}, oe = Math.max(0.01, Number(V.scale || 1)), Pe = Ie(oe * Math.max(0.01, Number(N || 1)), 0.01, 100);
    return q.transform || (q.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), q.transform.scale = Pe, !0;
  }
  function R() {
    return ge();
  }
  function ee(p) {
    var N;
    return !p || typeof p != "object" ? !1 : o ? ((N = p.source) == null ? void 0 : N.kind) === "port" : String(p.id || "") === Kd || String(p.source_kind || "") === EN;
  }
  function ce(p) {
    return !!(p && typeof p == "object" && p.visible === !1);
  }
  function Se(p) {
    return ee(p) && ce(p) ? Bm : 1;
  }
  function ue(p, N, v = 1, I = 0) {
    if (!p || typeof p != "object") return p;
    const q = Number((N == null ? void 0 : N.u) || 0), pe = Number((N == null ? void 0 : N.v) || 0), V = S(Number(p.u || 0), q), oe = Number(p.v || 0) - pe, Pe = Math.max(0.02, Number(v || 1)), Ae = Number(I || 0) * xr, xe = Math.cos(Ae), Ce = Math.sin(Ae), $e = V / Pe, ze = oe / Pe, Ge = $e * xe + ze * Ce, Re = -$e * Ce + ze * xe;
    return {
      ...p,
      u: ((q + Ge) % 1 + 1) % 1,
      v: pe + Re
    };
  }
  function he(p) {
    const N = (p == null ? void 0 : p.bbox) || null, v = (p == null ? void 0 : p.transform) || {};
    return N ? {
      u: (((Number(N.u0 || 0) + Number(N.u1 || 0)) * 0.5 + Number(v.du || 0)) % 1 + 1) % 1,
      v: Ie((Number(N.v0 || 0) + Number(N.v1 || 0)) * 0.5 + Number(v.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function me(p) {
    var Pe, Ae, xe, Ce;
    const N = (p == null ? void 0 : p.bbox) || null;
    if (!N) return [];
    const v = {
      u: (Number(N.u0 || 0) + Number(N.u1 || 0)) * 0.5,
      v: (Number(N.v0 || 0) + Number(N.v1 || 0)) * 0.5
    }, I = Math.max(0.01, Number(((Pe = p == null ? void 0 : p.transform) == null ? void 0 : Pe.scale) || 1)), q = Number(((Ae = p == null ? void 0 : p.transform) == null ? void 0 : Ae.rot_deg) || 0), pe = Number(((xe = p == null ? void 0 : p.transform) == null ? void 0 : xe.du) || 0), V = Number(((Ce = p == null ? void 0 : p.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(N.u0 || 0), v: Number(N.v0 || 0) },
      { u: Number(N.u1 || 0), v: Number(N.v0 || 0) },
      { u: Number(N.u1 || 0), v: Number(N.v1 || 0) },
      { u: Number(N.u0 || 0), v: Number(N.v1 || 0) }
    ].map(($e) => E(H($e, v, I, q), pe, V));
  }
  function J(p) {
    const N = ye((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), v = (p == null ? void 0 : p.transform) || {}, I = (p == null ? void 0 : p.bbox) || {}, q = `${N}:${r.mode}:${u()}:${I.u0}:${I.v0}:${I.u1}:${I.v1}:${v.du}:${v.dv}:${v.rot_deg}:${v.scale}`;
    if (r.mode === "frame") {
      const pe = a(), V = pe ? c(pe) : null;
      return `${q}:frame:${String((pe == null ? void 0 : pe.id) || "")}:${Math.round(Number((V == null ? void 0 : V.x) || 0))}:${Math.round(Number((V == null ? void 0 : V.y) || 0))}:${Math.round(Number((V == null ? void 0 : V.w) || 0))}:${Math.round(Number((V == null ? void 0 : V.h) || 0))}`;
    }
    return `${q}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function fe(p) {
    const N = String((p == null ? void 0 : p.id) || ""), v = w(p) ? "frame" : Z(p) ? "sticker" : "item", I = G(p), q = [
      v,
      N,
      r.mode,
      Number((I == null ? void 0 : I.yaw_deg) || 0).toFixed(4),
      Number((I == null ? void 0 : I.pitch_deg) || 0).toFixed(4),
      Number((I == null ? void 0 : I.hFOV_deg) || 0).toFixed(4),
      Number((I == null ? void 0 : I.vFOV_deg) || 0).toFixed(4),
      Number((I == null ? void 0 : I.rot_deg) || 0).toFixed(4),
      Number((I == null ? void 0 : I.roll_deg) || 0).toFixed(4),
      Rr(I),
      _(p) && x(p)
    ].join(":");
    if (r.mode === "frame") {
      const pe = a(), V = pe ? c(pe) : null;
      return `${q}:frame:${String((pe == null ? void 0 : pe.id) || "")}:${Math.round(Number((V == null ? void 0 : V.x) || 0))}:${Math.round(Number((V == null ? void 0 : V.y) || 0))}:${Math.round(Number((V == null ? void 0 : V.w) || 0))}:${Math.round(Number((V == null ? void 0 : V.h) || 0))}`;
    }
    return `${q}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function K() {
    P().forEach((N, v) => {
      N.type === "sticker" && N.item && (N.item.z_index = v), N.type === "strokeGroup" && N.item && (N.item.z_index = v), N.type === "rasterObject" && N.item && (N.item.z_index = v);
    });
  }
  return {
    connect(p) {
      ({
        getActiveCutoutShot: a,
        getBrushPresetIdForTool: l,
        getFrameViewRect: c,
        getPaintingLayerList: d,
        getPaintingRevisionKey: u,
        getSelected: f,
        getStickerImage: m,
        sceneStickerShown: x
      } = p);
    },
    getList: g,
    skyStickers: h,
    isSceneSticker: _,
    isUploadingSticker: te,
    poseOf: G,
    writePose: re,
    getPaintingGroupList: T,
    makeStrokeGroupSelectionId: U,
    makeRasterObjectSelectionId: ve,
    parseRasterObjectSelectionId: ye,
    ensurePaintingGroupEntry: le,
    getFrameCornersUv: _e,
    ensureGroupFrame: B,
    getDisplayListObjects: P,
    getOrderedPaintGroupIds: M,
    getOrderedDisplayListObjects: F,
    getSelectableStrokeGroupItems: C,
    getSelectableRasterObjectItems: ne,
    cutoutStickers: Q,
    getCutoutSelectableItems: z,
    isShotItem: w,
    isStickerItem: Z,
    getRasterObjectList: ie,
    getRasterObjectItem: be,
    isRasterObjectItem: we,
    getStrokeGroupItem: A,
    isStrokeGroupItem: se,
    getStrokeGroupStrokes: y,
    getStrokeGeomCacheKey: b,
    shortestWrappedDelta: S,
    getStrokeGroupCenterUv: j,
    applyStrokeGroupOffset: X,
    applyStrokeGroupTransform: L,
    applyRasterObjectOffset: D,
    applyRasterObjectTransform: k,
    getNextStickerZIndex: R,
    isExternalSticker: ee,
    isStickerHidden: ce,
    getStickerDisplayAlpha: Se,
    inverseTransformErpPointAround: ue,
    getRasterObjectCenterUv: he,
    getRasterObjectTransformedErpPoints: me,
    getRasterObjectGeomCacheKey: J,
    getSceneItemGeomCacheKey: fe,
    normalizeDisplayZIndices: K
  };
}
function w2(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    sceneV2: i,
    shotEditor: o,
    state: s,
    timeline: a,
    type: l
  } = e;
  let c, d, u, f, m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F, C, ne, Q, z;
  function w() {
    const p = String(t.selectedId || "");
    if (!p) return null;
    const N = T(p);
    if (N) return N;
    const v = te(p);
    return v || (o ? x().find((I) => String((I == null ? void 0 : I.id) || "") === p) || null : h().find((I) => String((I == null ? void 0 : I.id) || "") === p) || null);
  }
  function Z() {
    const p = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], N = [], v = /* @__PURE__ */ new Set();
    return p.forEach((I) => {
      const q = String(I || "").trim();
      if (!q || v.has(q)) return;
      v.add(q);
      const pe = q === String(t.selectedId || "") ? w() : T(q) || te(q) || (o ? x().find((V) => String((V == null ? void 0 : V.id) || "") === q) : h().find((V) => String((V == null ? void 0 : V.id) || "") === q));
      pe && N.push(pe);
    }), N;
  }
  function ie(p = null) {
    const N = Array.isArray(p) ? p : Z();
    if (!N || N.length < 2) return null;
    const v = N.map((Ae) => O(Ae)).filter((Ae) => (Ae == null ? void 0 : Ae.visible) && Array.isArray(Ae.corners) && Ae.corners.length);
    if (!v.length) return null;
    const I = v.flatMap((Ae) => Ae.corners.map((xe) => Number((xe == null ? void 0 : xe.x) || 0))), q = v.flatMap((Ae) => Ae.corners.map((xe) => Number((xe == null ? void 0 : xe.y) || 0))), pe = Math.min(...I), V = Math.max(...I), oe = Math.min(...q), Pe = Math.max(...q);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (pe + V) * 0.5, y: (oe + Pe) * 0.5 },
      corners: [
        { x: pe, y: oe },
        { x: V, y: oe },
        { x: V, y: Pe },
        { x: pe, y: Pe }
      ],
      edgeMidpoints: [
        { edge: "top", x: (pe + V) * 0.5, y: oe, a: { x: pe, y: oe }, b: { x: V, y: oe } },
        { edge: "right", x: V, y: (oe + Pe) * 0.5, a: { x: V, y: oe }, b: { x: V, y: Pe } },
        { edge: "bottom", x: (pe + V) * 0.5, y: Pe, a: { x: V, y: Pe }, b: { x: pe, y: Pe } },
        { edge: "left", x: pe, y: (oe + Pe) * 0.5, a: { x: pe, y: Pe }, b: { x: pe, y: oe } }
      ],
      rotateStemBase: { x: (pe + V) * 0.5, y: oe },
      rotateHandle: { x: (pe + V) * 0.5, y: oe - 30 }
    };
  }
  function be(p) {
    const N = String((p == null ? void 0 : p.id) || "").trim();
    return !!N && Array.isArray(t.selectedIds) && t.selectedIds.includes(N);
  }
  function we() {
    const p = w();
    return p ? le(p) || U(p) ? "stroke" : ye(p) ? "frame" : "image" : null;
  }
  function A(p) {
    if (!p || typeof p != "object") return !1;
    if (le(p)) {
      const N = String(p.actionGroupId || p.id || "").trim(), v = _().find((I) => String((I == null ? void 0 : I.actionGroupId) || (I == null ? void 0 : I.id) || "").trim() === N);
      return (v == null ? void 0 : v.locked) === !0;
    }
    if (U(p)) {
      const N = P(p.rasterObjectId || p.id || ""), v = G().find((I) => String((I == null ? void 0 : I.id) || "").trim() === N);
      return (v == null ? void 0 : v.locked) === !0;
    }
    return p.locked === !0;
  }
  function se(p = null) {
    const N = Array.isArray(p) ? p : Z();
    return N.length > 0 && N.every((v) => A(v));
  }
  function y(p, N) {
    const v = N === !0;
    if (!p || typeof p != "object") return !1;
    if (le(p)) {
      const I = String(p.actionGroupId || p.id || "").trim(), q = _().find((pe) => String((pe == null ? void 0 : pe.actionGroupId) || (pe == null ? void 0 : pe.id) || "").trim() === I);
      return !q || q.locked === v ? !1 : (q.locked = v, !0);
    }
    if (U(p)) {
      const I = P(p.rasterObjectId || p.id || ""), q = G().find((pe) => String((pe == null ? void 0 : pe.id) || "").trim() === I);
      return !q || q.locked === v ? !1 : (q.locked = v, !0);
    }
    return p.locked === v ? !1 : (p.locked = v, !0);
  }
  function b() {
    if (r) return;
    const p = Z();
    if (!p.length) return;
    const N = !se(p);
    let v = !1;
    p.forEach((I) => {
      y(I, N) && (v = !0);
    }), v && (F(), d(), Q(), z(), C());
  }
  function E(p) {
    ue(), a.selection = null, t.selectedId = (p == null ? void 0 : p.id) || null, t.selectedIds = p != null && p.id ? [p.id] : [], p && ge(p) ? s.active.selected_sticker_id = p.id || null : s.active.selected_sticker_id = null, p && ye(p) ? s.active.selected_shot_id = p.id || null : p ? ye(p) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function S(p, N = null) {
    const v = [], I = /* @__PURE__ */ new Set();
    (Array.isArray(p) ? p : []).forEach((V) => {
      const oe = String((V == null ? void 0 : V.id) || "").trim();
      !oe || I.has(oe) || (I.add(oe), v.push(oe));
    }), t.selectedIds = v, ue(), a.selection = null;
    const q = String(N || "").trim();
    t.selectedId = q && v.includes(q) ? q : v[v.length - 1] || null;
    const pe = w();
    s.active.selected_sticker_id = pe && ge(pe) && pe.id || null, pe && ye(pe) ? s.active.selected_shot_id = pe.id || null : v.length || (s.active.selected_shot_id = null);
  }
  function j() {
    const p = (Array.isArray(s.shots) ? s.shots : []).map((v, I) => ({
      kind: "frame",
      item: v,
      label: String((v == null ? void 0 : v.label) || `Frame ${I + 1}`)
    })), N = f().map((v, I) => {
      var pe, V;
      const q = $(v) ? String(v.id || Kd) : String(((V = (pe = s.assets) == null ? void 0 : pe[v.asset_id]) == null ? void 0 : V.name) || v.asset_id || v.id || `Image ${I + 1}`);
      return {
        kind: "image",
        item: v,
        label: q
      };
    });
    return [...p, ...N];
  }
  function H(p) {
    return p === "frame" ? je.camera : p === "stroke" ? je.paintbrush_vertical_tool : je.image;
  }
  function X(p) {
    return !p || !p.item ? {
      label: String((p == null ? void 0 : p.label) || ""),
      icon: null
    } : {
      label: String(p.label || ""),
      icon: H(p.kind)
    };
  }
  function L() {
    if (r) return;
    const p = w();
    !p || !$(p) || (p.visible = de(p), J(), _e(), F(), d(), z(), Q(), C());
  }
  function D() {
    if (r || l !== "stickers") return;
    const p = w();
    if (!p || !$(p)) return;
    const N = p.initial_pose;
    if (!N || typeof N != "object") return;
    p.yaw_deg = Number(N.yaw_deg ?? p.yaw_deg ?? 0), p.pitch_deg = Number(N.pitch_deg ?? p.pitch_deg ?? 0), p.hFOV_deg = Number(N.hFOV_deg ?? p.hFOV_deg ?? 30);
    const v = re(go, () => {
      C();
    });
    v && (v.complete || v.naturalWidth || v.width) ? p.vFOV_deg = u(
      Number(N.hFOV_deg ?? p.hFOV_deg ?? 30),
      Number(v.naturalWidth || v.width || 1),
      Number(v.naturalHeight || v.height || 1)
    ) : p.vFOV_deg = Number(N.vFOV_deg ?? p.vFOV_deg ?? 30), p.rot_deg = Number(N.rot_deg ?? p.rot_deg ?? 0), F(), d(), z(), Q(), C();
  }
  function k(p) {
    if (!p || !$(p)) return null;
    const N = p.initial_pose;
    if (!N || typeof N != "object") return null;
    const v = {
      yaw_deg: Number(N.yaw_deg ?? p.yaw_deg ?? 0),
      pitch_deg: Number(N.pitch_deg ?? p.pitch_deg ?? 0),
      hFOV_deg: Number(N.hFOV_deg ?? p.hFOV_deg ?? 30),
      vFOV_deg: Number(N.vFOV_deg ?? p.vFOV_deg ?? 30),
      rot_deg: Number(N.rot_deg ?? p.rot_deg ?? 0)
    }, I = re(go, () => {
      C();
    });
    return I && (I.complete || I.naturalWidth || I.width) && (v.vFOV_deg = u(
      v.hFOV_deg,
      Number(I.naturalWidth || I.width || 1),
      Number(I.naturalHeight || I.height || 1)
    )), v;
  }
  function R() {
    const p = w();
    if (!p || !$(p)) return !1;
    const N = k(p);
    if (!N) return !1;
    const v = (I, q) => Math.abs(Number(I || 0) - Number(q || 0)) <= 1e-4;
    return !(v(p.yaw_deg, N.yaw_deg) && v(p.pitch_deg, N.pitch_deg) && v(p.hFOV_deg, N.hFOV_deg) && v(p.vFOV_deg, N.vFOV_deg) && v(p.rot_deg, N.rot_deg));
  }
  function ee(p = {}) {
    const v = p.preservePanelValues !== !1 ? M(w()) : null;
    v && (t.panelLastValues = {
      yaw_deg: Number(v.yaw_deg || 0),
      pitch_deg: Number(v.pitch_deg || 0),
      hFOV_deg: Number(v.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(v.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(v.rot_deg || 0),
      roll_deg: Number(v.roll_deg || 0),
      aspect_id: Rr(v)
    }), t.selectedId = null, t.selectedIds = [], ue(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function ce() {
    return !i || !t.worldSelectedId ? null : s.stickers.find((p) => p.id === t.worldSelectedId && p.placement === "world") || null;
  }
  function Se(p) {
    E(null), t.worldSelectedId = p, n.backgroundDirty = !0;
  }
  function ue() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function he(p) {
    return !!p && !r && !p.locked;
  }
  function me() {
    if (l !== "cutout") return;
    const p = m();
    p && (t.selectedId = String(p.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function J() {
    var N;
    const p = w();
    (ve(p) && !ne(p) || t.selectedId === hd && W() && !c() || we() === "stroke" && !B()) && E(null), ((N = ce()) == null ? void 0 : N.visible) === !1 && ue();
  }
  function fe() {
    if (r) return;
    const p = Z();
    if (!w() || p.length === 0 || p.some((oe) => A(oe))) return;
    Y();
    const v = g(), I = new Set(p.map((oe) => ge(oe) ? `sticker:${String(oe.id || "")}` : U(oe) ? `rasterObject:${P(oe.rasterObjectId || oe.id || "")}` : `strokeGroup:${String(oe.actionGroupId || oe.id || "")}`)), q = [], pe = [];
    if (v.forEach((oe) => {
      var Ae, xe;
      const Pe = oe.type === "sticker" ? `sticker:${String(((Ae = oe.item) == null ? void 0 : Ae.id) || "")}` : oe.type === "rasterObject" ? `rasterObject:${String(((xe = oe.item) == null ? void 0 : xe.id) || oe.id || "")}` : `strokeGroup:${String(oe.actionGroupId || "")}`;
      I.has(Pe) ? q.push(oe) : pe.push(oe);
    }), !q.length || q[q.length - 1] === v[v.length - 1]) return;
    [...pe, ...q].forEach((oe, Pe) => {
      oe.type === "sticker" && oe.item && (oe.item.z_index = Pe), oe.type === "strokeGroup" && oe.item && (oe.item.z_index = Pe), oe.type === "rasterObject" && oe.item && (oe.item.z_index = Pe);
    }), _e(), F(), d(), Q(), C();
  }
  function K() {
    if (r) return;
    const p = Z();
    if (!w() || p.length === 0 || p.some((oe) => A(oe))) return;
    Y();
    const v = g(), I = new Set(p.map((oe) => ge(oe) ? `sticker:${String(oe.id || "")}` : U(oe) ? `rasterObject:${P(oe.rasterObjectId || oe.id || "")}` : `strokeGroup:${String(oe.actionGroupId || oe.id || "")}`)), q = [], pe = [];
    if (v.forEach((oe) => {
      var Ae, xe;
      const Pe = oe.type === "sticker" ? `sticker:${String(((Ae = oe.item) == null ? void 0 : Ae.id) || "")}` : oe.type === "rasterObject" ? `rasterObject:${String(((xe = oe.item) == null ? void 0 : xe.id) || oe.id || "")}` : `strokeGroup:${String(oe.actionGroupId || "")}`;
      I.has(Pe) ? q.push(oe) : pe.push(oe);
    }), !q.length || q[0] === v[0]) return;
    [...q, ...pe].forEach((oe, Pe) => {
      oe.type === "sticker" && oe.item && (oe.item.z_index = Pe), oe.type === "strokeGroup" && oe.item && (oe.item.z_index = Pe), oe.type === "rasterObject" && oe.item && (oe.item.z_index = Pe);
    }), _e(), F(), d(), Q(), C();
  }
  return {
    connect(p) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: m,
        getCutoutSelectableItems: x,
        getDisplayListObjects: g,
        getList: h,
        getPaintingGroupList: _,
        getRasterObjectItem: te,
        getRasterObjectList: G,
        getStickerUiImage: re,
        getStrokeGroupItem: T,
        hasCamera: W,
        isExternalSticker: $,
        isRasterObjectItem: U,
        isSceneSticker: ve,
        isShotItem: ye,
        isStickerHidden: de,
        isStickerItem: ge,
        isStrokeGroupItem: le,
        markObjectVisualsDirty: _e,
        normalizeDisplayZIndices: Y,
        objectGeom: O,
        paintingShown: B,
        parseRasterObjectSelectionId: P,
        poseOf: M,
        pushHistory: F,
        requestDraw: C,
        sceneStickerShown: ne,
        updateSelectionMenu: Q,
        updateSidePanel: z
      } = p);
    },
    getSelected: w,
    getSelectedItems: Z,
    getMultiSelectionGeom: ie,
    isItemSelected: be,
    getSelectedKind: we,
    isItemLocked: A,
    areAllSelectedItemsLocked: se,
    toggleSelectedLock: b,
    setSelectedItem: E,
    setSelectedItems: S,
    getCutoutInspectorItems: j,
    getSelectionItemIcon: H,
    getSelectionItemLabelData: X,
    toggleSelectedExternalStickerVisibility: L,
    restoreSelectedToInitialPose: D,
    canRestoreSelectedToInitial: R,
    clearSelection: ee,
    selectedWorldSticker: ce,
    selectWorldSticker: Se,
    clearWorldSelection: ue,
    worldStickerEditable: he,
    applyInitialCutoutFocus: me,
    releaseHiddenSelection: J,
    bringSelectedToFront: fe,
    sendSelectedToBack: K
  };
}
function x2(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let s, a, l, c, d, u, f = { key: [], projection: null };
  function m() {
    return o && s() && i.camera.projection === "erp";
  }
  function x() {
    const Z = U({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !Z || Z.length !== 4 ? !1 : Z[0].y >= Z[3].y;
  }
  function g() {
    return Ym({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function h() {
    const w = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return w.some((Z, ie) => Z !== f.key[ie]) && (f = { key: w, projection: Xm(g(), r.width, r.height) }), f.projection;
  }
  function _(w) {
    const Z = h().project(w);
    return Z.z > 1e-4 ? Z : null;
  }
  function te(w, Z) {
    return h().ray(w, Z);
  }
  function G() {
    const w = r.width, Z = r.height, ie = 2;
    if (w / Math.max(Z, 1) >= ie) {
      const y = Z, b = y * ie;
      return { x: (w - b) * 0.5, y: 0, w: b, h: y };
    }
    const we = w, A = we / ie;
    return { x: 0, y: (Z - A) * 0.5, w: we, h: A };
  }
  function re(w) {
    return {
      lon: Math.atan2(w.x, w.z),
      lat: Math.asin(Ie(w.y, -1, 1))
    };
  }
  function T(w, Z = null) {
    const { lon: ie, lat: be } = re(w), we = G();
    let A = we.x + (ie / (2 * Math.PI) + 0.5) * we.w;
    const se = we.y + (0.5 - be / Math.PI) * we.h;
    if (Z !== null) {
      for (; A - Z > we.w / 2; ) A -= we.w;
      for (; A - Z < -we.w / 2; ) A += we.w;
    }
    return { x: A, y: se, z: 1 };
  }
  function W(w) {
    const Z = c(w), ie = vo(
      Number(Z.yaw_deg || 0),
      Number(Z.pitch_deg || 0),
      Number(Z.rot_deg || Z.roll_deg || 0)
    ), be = Math.tan(Ie(Number(Z.hFOV_deg || 20), 0.1, 179) * 0.5 * xr), we = Math.tan(Ie(Number(Z.vFOV_deg || 20), 0.1, 179) * 0.5 * xr);
    return {
      centerDir: ie.fwd,
      right: ie.right,
      up: ie.up,
      tanX: be,
      tanY: we
    };
  }
  function $(w, Z, ie) {
    return KN(Ip(Ip(w.centerDir, Ep(w.right, Z)), Ep(w.up, ie)));
  }
  function U(w) {
    const Z = W(w);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: be, v: we }) => $(Z, be * Z.tanX, we * Z.tanY));
  }
  function ve(w, Z, ie) {
    const be = W(w), we = (Z * 2 - 1) * be.tanX, A = (1 - ie * 2) * be.tanY;
    return $(be, we, A);
  }
  function ye(w) {
    const Z = t.width / Math.max(1, r.width), ie = t.height / Math.max(1, r.height);
    return { x: w.x * Z, y: w.y * ie, w: w.w * Z, h: w.h * ie };
  }
  function de(w, Z = null, ie = null, be = null) {
    if (n.mode === "frame") {
      const we = Z || a();
      if (!we) return [];
      const A = ie || l(we);
      return F(w, we, A);
    }
    return B(w, be);
  }
  function ge(w, Z = null, ie = null, be = null, we = null) {
    if (!w) return null;
    if (n.mode === "unwrap") {
      const se = B([w], we);
      return se[0] ? { x: se[0].x, y: se[0].y, z: 1 } : null;
    }
    const A = _e(w);
    return A ? d(A, Z, ie, be) : null;
  }
  function le(w, Z) {
    if (!w || !Z) return null;
    const ie = Number(Z.x || 0), be = Number(Z.y || 0);
    return ve(w, ie, be);
  }
  function _e(w) {
    if (!w) return null;
    const Z = (Number(w.u || 0) - 0.5) * (2 * Math.PI), ie = (0.5 - Number(w.v || 0)) * Math.PI, be = Math.cos(ie);
    return Yl(be * Math.sin(Z), Math.sin(ie), be * Math.cos(Z));
  }
  function Y(w, Z) {
    if (!w || !Z) return null;
    const ie = W(w), be = Lc(Z, ie.centerDir);
    if (!Number.isFinite(be) || be <= 1e-6) return null;
    const we = Lc(Z, ie.right) / be, A = Lc(Z, ie.up) / be;
    return {
      x: (we / Math.max(1e-6, ie.tanX) + 1) * 0.5,
      y: (1 - A / Math.max(1e-6, ie.tanY)) * 0.5
    };
  }
  function O(w) {
    if (!Array.isArray(w) || w.length < 3) return [];
    if (n.mode === "unwrap") {
      const ie = G();
      return w.map((be) => ({
        x: ie.x + Number(be.u || 0) * ie.w,
        y: ie.y + Number(be.v || 0) * ie.h
      }));
    }
    const Z = w.map((ie) => _(_e(ie))).filter(Boolean);
    return Z.every((ie) => Number(ie.z || 0) > 0) ? Z.map((ie) => ({ x: Number(ie.x || 0), y: Number(ie.y || 0) })) : [];
  }
  function B(w, Z = null) {
    if (!Array.isArray(w) || w.length < 1) return [];
    if (n.mode === "unwrap") {
      const be = G();
      return w.map((we) => {
        const A = (Number(we.u || 0) % 1 + 1) % 1, se = Z == null ? A : Number(Z || 0) + u(A, Z);
        return {
          x: be.x + se * be.w,
          y: be.y + Number(we.v || 0) * be.h
        };
      });
    }
    const ie = w.map((be) => _(_e(be))).filter(Boolean);
    return ie.every((be) => Number(be.z || 0) > 0) ? ie.map((be) => ({ x: Number(be.x || 0), y: Number(be.y || 0) })) : [];
  }
  function P(w, Z = 160) {
    if (!Array.isArray(w) || w.length < 3) return !1;
    for (let ie = 0; ie < w.length; ie += 1) {
      const be = w[ie], we = w[(ie + 1) % w.length];
      if (!be || !we || !Number.isFinite(be.x) || !Number.isFinite(be.y) || !Number.isFinite(we.x) || !Number.isFinite(we.y) || Math.hypot(Number(we.x) - Number(be.x), Number(we.y) - Number(be.y)) > Z) return !1;
    }
    return !0;
  }
  function M(w, Z, ie) {
    if (!Array.isArray(w) || w.length < 3 || !Z || !ie) return [];
    const be = [];
    for (const we of w) {
      const A = _e(we), se = Y(Z, A);
      if (!se) return [];
      be.push({
        x: Number(ie.x || 0) + Number(se.x || 0) * Number(ie.w || 0),
        y: Number(ie.y || 0) + Number(se.y || 0) * Number(ie.h || 0)
      });
    }
    return P(be, Math.max(80, Math.max(ie.w, ie.h) * 0.75)) ? be : [];
  }
  function F(w, Z, ie) {
    if (!Array.isArray(w) || w.length < 1 || !Z || !ie) return [];
    const be = [];
    for (const we of w) {
      const A = _e(we), se = Y(Z, A);
      se && be.push({
        x: Number(ie.x || 0) + Number(se.x || 0) * Number(ie.w || 0),
        y: Number(ie.y || 0) + Number(se.y || 0) * Number(ie.h || 0)
      });
    }
    return be;
  }
  function C(w) {
    const Z = r.getBoundingClientRect();
    return {
      x: (w.clientX - Z.left) / Z.width * r.width,
      y: (w.clientY - Z.top) / Z.height * r.height
    };
  }
  function ne(w) {
    const Z = r.getBoundingClientRect();
    return {
      x: Number(w.clientX) - Number(Z.left || 0),
      y: Number(w.clientY) - Number(Z.top || 0)
    };
  }
  function Q(w, Z = performance.now()) {
    if (n.mode === "unwrap") {
      const A = G(), se = (w.x - A.x) / Math.max(1, A.w), y = (w.y - A.y) / Math.max(1, A.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (se % 1 + 1) % 1,
        v: Ie(y, 0, 1),
        t: Number(Z || 0)
      };
    }
    const ie = te(w.x, w.y), { lon: be, lat: we } = re(ie);
    return {
      targetKind: "ERP_GLOBAL",
      u: (be / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - we / Math.PI, 0, 1),
      t: Number(Z || 0)
    };
  }
  function z(w, Z, ie = performance.now()) {
    const be = l(Z);
    if (!be) return null;
    const we = {
      x: (Number(w.x) - be.x) / Math.max(1, be.w),
      y: (Number(w.y) - be.y) / Math.max(1, be.h)
    };
    if (we.x < 0 || we.x > 1 || we.y < 0 || we.y > 1) return null;
    const A = le(Z, we);
    if (!A) return null;
    const { lon: se, lat: y } = re(A);
    return {
      targetKind: "ERP_GLOBAL",
      u: (se / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - y / Math.PI, 0, 1),
      t: Number(ie || 0)
    };
  }
  return {
    connect(w) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = w);
    },
    isErpCamera: m,
    currentViewCamera: g,
    currentViewProjection: h,
    projectDir: _,
    screenToWorldDir: te,
    getUnwrapRect: G,
    projectDirUnwrap: T,
    getStickerFrame: W,
    stickerDirFromFrame: $,
    stickerCornersDir: U,
    stickerSampleDir: ve,
    stickerCornerOrderSanity: x,
    projectEditorPoints: de,
    projectErpPointToEditor: ge,
    frameLocalPointToWorldDir: le,
    erpPointToWorldDir: _e,
    worldDirToFrameLocalPoint: Y,
    projectLassoPointsToCurrentView: O,
    projectErpLassoPointsToFrameRect: M,
    screenPos: C,
    screenPosCss: ne,
    screenPosToErpPoint: Q,
    screenPosToFrameAsErpPoint: z,
    deviceRect: ye
  };
}
function k2(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F;
  function C(A, se) {
    const y = String(A.actionGroupId || A.id || "").trim(), b = G(y, A.layerKind), E = a(y, A.layerKind, b), S = (E == null ? void 0 : E.centerUv) || te(y, A.layerKind, b), j = n.mode === "unwrap" ? Number((S == null ? void 0 : S.u) || 0) : null, H = [], X = n.mode === "frame" ? l() : null, L = X ? u(X) : null;
    for (const J of b) {
      const fe = (J == null ? void 0 : J.geometry) || null, K = (fe == null ? void 0 : fe.geometryKind) === "lasso_fill" ? fe == null ? void 0 : fe.points : (fe == null ? void 0 : fe.processedPoints) || (fe == null ? void 0 : fe.rawPoints) || (fe == null ? void 0 : fe.points) || [], p = _e(K, X, L, j).filter((I) => Number.isFinite(I == null ? void 0 : I.x) && Number.isFinite(I == null ? void 0 : I.y));
      if (!p.length) continue;
      const N = c(String((J == null ? void 0 : J.toolKind) || "pen")), v = Tn[N] || Tn[Fr];
      H.push({
        points: p,
        closed: String((fe == null ? void 0 : fe.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((J == null ? void 0 : J.size) || 10) * Math.max(0.1, Number((v == null ? void 0 : v.sizeScale) ?? 1)) + 10),
        layerKind: String((J == null ? void 0 : J.layerKind) || A.layerKind || "paint")
      });
    }
    const D = Y(S, null, X, L, j);
    if (!D) {
      const J = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(se, J), J;
    }
    const R = d(E).map((J) => Y(J, D.x, X, L, j)).filter((J) => Number.isFinite(J == null ? void 0 : J.x) && Number.isFinite(J == null ? void 0 : J.y)).map((J) => ({ x: Number(J.x || 0), y: Number(J.y || 0) }));
    if (R.length < 4) {
      const J = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(se, J), J;
    }
    const ee = (J, fe) => ({
      x: (Number((J == null ? void 0 : J.x) || 0) + Number((fe == null ? void 0 : fe.x) || 0)) * 0.5,
      y: (Number((J == null ? void 0 : J.y) || 0) + Number((fe == null ? void 0 : fe.y) || 0)) * 0.5,
      a: J,
      b: fe
    }), ce = ee(R[0], R[1]), Se = ee(R[1], R[2]), ue = ee(R[2], R[3]), he = ee(R[3], R[0]), me = {
      kind: "strokeGroup",
      center: { x: Number(D.x || 0), y: Number(D.y || 0) },
      corners: R,
      edgeMidpoints: [
        { edge: "top", ...ce },
        { edge: "right", ...Se },
        { edge: "bottom", ...ue },
        { edge: "left", ...he }
      ],
      rotateStemBase: { x: ce.x, y: ce.y },
      rotateHandle: { x: ce.x, y: ce.y - 30 },
      strokePaths: H,
      visible: !0
    };
    return n._strokeGeomCache.set(se, me), me;
  }
  function ne(A, se) {
    const y = n.mode === "frame" ? l() : null, b = y ? u(y) : null, E = f(A), S = n.mode === "unwrap" ? Number((E == null ? void 0 : E.u) || 0) : null, j = Y(E, null, y, b, S), X = x(A).map((R) => Y(R, (j == null ? void 0 : j.x) ?? null, y, b, S)).filter((R) => Number.isFinite(R == null ? void 0 : R.x) && Number.isFinite(R == null ? void 0 : R.y));
    if (!Array.isArray(X) || X.length < 4) {
      const R = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(se, R), R;
    }
    const L = X.slice(0, 4).map((R) => ({ x: Number((R == null ? void 0 : R.x) || 0), y: Number((R == null ? void 0 : R.y) || 0) })), k = {
      kind: "rasterObject",
      center: {
        x: L.reduce((R, ee) => R + Number(ee.x || 0), 0) / L.length,
        y: L.reduce((R, ee) => R + Number(ee.y || 0), 0) / L.length
      },
      corners: L,
      visible: !0
    };
    return n._strokeGeomCache.set(se, k), k;
  }
  function Q(A, se = null, y = null, b = null, E = {}) {
    if (n.mode === "frame") {
      const D = y || l(), k = b || u(D);
      if (!D || !k) return null;
      const R = D ? F(D, A) : null;
      return R ? {
        x: Number(k.x || 0) + Number(R.x || 0) * Number(k.w || 0),
        y: Number(k.y || 0) + Number(R.y || 0) * Number(k.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return le(A, se);
    const S = 1e-4, j = o().project(A, S);
    if (!Number.isFinite(j.z) || j.z <= S && !(E != null && E.clipBehind)) return null;
    const H = r.width, X = r.height, L = Math.max(H, X) * 2;
    return {
      x: Ie(j.x, -L, H + L),
      y: Ie(j.y, -L, X + L),
      z: Math.max(j.z, S),
      rawZ: j.z,
      clipped: j.z <= S
    };
  }
  function z(A, se = []) {
    if (n.mode !== "pano" || U(A)) return 1;
    const y = se.map((b) => Number((b == null ? void 0 : b.rawZ) ?? (b == null ? void 0 : b.z))).filter((b) => Number.isFinite(b));
    return y.length ? HN(0.035, 0.2, Math.min(...y)) : 1;
  }
  function w(A) {
    if (W(A) && !O(A)) return { visible: !1 };
    const se = de(A), y = Dn(Number(se.yaw_deg || 0), Number(se.pitch_deg || 0)), b = n.mode === "frame" ? l() : null, E = b ? u(b) : null, S = n.mode === "pano" && (U(A) || $(A)), j = S ? { clipBehind: !0 } : null, H = Q(y, null, b, E, j);
    if (!H) return { visible: !1 };
    const X = h(A), D = B(A).map((q) => Q(q, H.x, b, E, j)).filter((q) => Number.isFinite(q == null ? void 0 : q.x) && Number.isFinite(q == null ? void 0 : q.y));
    if (D.length < 4) return { visible: !1 };
    const k = P(X, 0, X.tanY), R = P(X, 0, X.tanY + Math.max(X.tanY * 0.43, 0.053)), ee = Q(k, H.x, b, E, j);
    if (!ee) return { visible: !1 };
    const ce = Q(R, (ee == null ? void 0 : ee.x) ?? H.x, b, E, j), Se = ((ce == null ? void 0 : ce.x) ?? ee.x) - ee.x, ue = ((ce == null ? void 0 : ce.y) ?? ee.y) - ee.y, he = Math.hypot(Se, ue) || 1, me = {
      x: ee.x + Se / he * 30,
      y: ee.y + ue / he * 30
    }, J = Q(P(X, 0, X.tanY), H.x, b, E, j), fe = Q(P(X, X.tanX, 0), H.x, b, E, j), K = Q(P(X, 0, -X.tanY), H.x, b, E, j), p = Q(P(X, -X.tanX, 0), H.x, b, E, j);
    if (!J || !fe || !K || !p) return { visible: !1 };
    const N = [
      H,
      ...D,
      ee,
      ce,
      J,
      fe,
      K,
      p
    ];
    if (S && !N.some((q) => Number((q == null ? void 0 : q.rawZ) ?? (q == null ? void 0 : q.z)) > 1e-4)) return { visible: !1 };
    const v = z(A, N), I = [
      {
        edge: "top",
        x: J.x,
        y: J.y,
        a: { x: D[0].x, y: D[0].y },
        b: { x: D[1].x, y: D[1].y }
      },
      {
        edge: "right",
        x: fe.x,
        y: fe.y,
        a: { x: D[1].x, y: D[1].y },
        b: { x: D[2].x, y: D[2].y }
      },
      {
        edge: "bottom",
        x: K.x,
        y: K.y,
        a: { x: D[2].x, y: D[2].y },
        b: { x: D[3].x, y: D[3].y }
      },
      {
        edge: "left",
        x: p.x,
        y: p.y,
        a: { x: D[3].x, y: D[3].y },
        b: { x: D[0].x, y: D[0].y }
      }
    ];
    return {
      center: { x: H.x, y: H.y },
      corners: D.map((q) => ({ x: q.x, y: q.y })),
      edgeMidpoints: I,
      rotateStemBase: { x: ee.x, y: ee.y },
      rotateHandle: me,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: v,
      visible: !0
    };
  }
  function Z(A) {
    if (t && $(A) && re()) return { visible: !1 };
    if (!ye() && (ve(A) || T(A))) return { visible: !1 };
    if (ve(A)) {
      const E = String(A.actionGroupId || A.id || "").trim(), S = _(E, A.layerKind), j = n._strokeGeomCache.get(S);
      return j || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), C(A, S));
    }
    if (T(A)) {
      const E = m(A), S = n._strokeGeomCache.get(E);
      return S || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), ne(A, E));
    }
    const se = g(A), y = n._strokeGeomCache.get(se);
    if (y) return y;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const b = w(A);
    return n._strokeGeomCache.set(se, b), b;
  }
  function ie(A, se, y, b = null) {
    const E = [];
    for (let S = 0; S <= y; S += 1) {
      const j = S / y;
      let H = 0, X = 0;
      se === 0 ? (H = j, X = 0) : se === 1 ? (H = 1, X = j) : se === 2 ? (H = 1 - j, X = 1) : (H = 0, X = 1 - j);
      const L = M(A, H, X), D = n.mode === "unwrap" ? le(L, b) : ge(L);
      D && E.push(D);
    }
    return E;
  }
  function be() {
    const A = [...Array.isArray(i.shots) ? i.shots : []], se = [...s()].sort((y, b) => Number(y.z_index || 0) - Number(b.z_index || 0));
    return [...A, ...se];
  }
  function we() {
    const A = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((y, b) => Number(b.z_index || 0) - Number(y.z_index || 0)), ...A];
  }
  return {
    connect(A) {
      ({
        currentViewProjection: o,
        cutoutStickers: s,
        ensureGroupFrame: a,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: d,
        getFrameViewRect: u,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: m,
        getRasterObjectTransformedErpPoints: x,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: h,
        getStrokeGeomCacheKey: _,
        getStrokeGroupCenterUv: te,
        getStrokeGroupStrokes: G,
        isFreeSpaceView: re,
        isRasterObjectItem: T,
        isSceneSticker: W,
        isShotItem: $,
        isStickerItem: U,
        isStrokeGroupItem: ve,
        paintingShown: ye,
        poseOf: de,
        projectDir: ge,
        projectDirUnwrap: le,
        projectEditorPoints: _e,
        projectErpPointToEditor: Y,
        sceneStickerShown: O,
        stickerCornersDir: B,
        stickerDirFromFrame: P,
        stickerSampleDir: M,
        worldDirToFrameLocalPoint: F
      } = A);
    },
    projectSceneItemDir: Q,
    objectGeom: Z,
    sampleStickerEdge: ie,
    getCutoutSelectableItemsForDisplay: be,
    getCutoutSelectableItemsForHit: we
  };
}
const ma = /* @__PURE__ */ new Map();
function M2(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de;
  function ge(S = r.interaction) {
    const j = String((S == null ? void 0 : S.kind) || "");
    if (j === "paint_stroke" || j === "paint_lasso_fill" || j === "move_stroke_group" || j === "scale_stroke_group" || j === "rotate_stroke_group" || j === "move_raster_object" || j === "scale_raster_object") return !0;
    if (j === "move_multi") {
      const H = Array.isArray(S == null ? void 0 : S.strokeSnapshots) && S.strokeSnapshots.length > 0, X = Array.isArray(S == null ? void 0 : S.rasterSnapshots) && S.rasterSnapshots.length > 0;
      return H || X;
    }
    return !1;
  }
  function le() {
    var j, H, X, L;
    let S = null;
    try {
      const D = g(), k = ((L = (X = (H = (j = r.paintEngine) == null ? void 0 : j.getErpTarget) == null ? void 0 : H.call(j, D)) == null ? void 0 : X.displayPaint) == null ? void 0 : L.canvas) || null;
      k && (S = {
        source: k,
        revision: `${h()}:${_e()}`
      });
    } catch {
      S = null;
    }
    return S;
  }
  function _e() {
    var L, D, k, R, ee, ce, Se;
    const S = r.interaction, j = String((S == null ? void 0 : S.kind) || "");
    if (!ge(S)) return "";
    if (j === "paint_stroke" || j === "paint_lasso_fill") {
      const ue = ((L = S == null ? void 0 : S.stroke) == null ? void 0 : L.geometry) || null, he = String(((D = S == null ? void 0 : S.stroke) == null ? void 0 : D.layerKind) || ""), me = ((k = ue == null ? void 0 : ue.rawPoints) == null ? void 0 : k.length) ?? ((R = ue == null ? void 0 : ue.points) == null ? void 0 : R.length) ?? 0, J = String((S == null ? void 0 : S._livePreviewToken) || "");
      return `_${he || "paint"}_${j}_live${J}_${me}_${r.livePaintInteractionRevision}`;
    }
    const H = String(((ee = S == null ? void 0 : S.item) == null ? void 0 : ee.actionGroupId) || ""), X = String(((ce = S == null ? void 0 : S.item) == null ? void 0 : ce.rasterObjectId) || ((Se = S == null ? void 0 : S.item) == null ? void 0 : Se.id) || "");
    return `_${j}_${H || X || "active"}_${r.livePaintInteractionRevision}`;
  }
  function Y(S, j = null) {
    const H = String((S == null ? void 0 : S.rasterDataUrl) || "").trim();
    if (!H) return null;
    const X = s.get(H);
    if (X)
      return X.complete || X.width || X.naturalWidth, X;
    const L = new Image();
    return L.onload = () => {
      typeof j == "function" && j();
    }, L.src = H, s.set(H, L), L;
  }
  function O(S) {
    const j = String((S == null ? void 0 : S.rasterDataUrl) || "").trim();
    if (!j) return null;
    const H = o.get(j);
    if (H) return H.ready ? H : null;
    const X = Y(S, () => {
      const Se = o.get(j);
      Se && (Se.ready = !1), ve({ localOnly: !0 });
    });
    if (!X || !(X.complete || X.width || X.naturalWidth)) return null;
    const L = Number(X.naturalWidth || X.width || 0), D = Number(X.naturalHeight || X.height || 0);
    if (L < 1 || D < 1) return null;
    const k = rn({ label: "editor.image-pixels" });
    k.width = L, k.height = D;
    const R = k.getContext("2d", { willReadFrequently: !0 });
    if (!R) return null;
    R.clearRect(0, 0, L, D), R.drawImage(X, 0, 0, L, D);
    const ee = R.getImageData(0, 0, L, D).data, ce = { canvas: k, width: L, height: D, alpha: ee, ready: !0 };
    return o.set(j, ce), ce;
  }
  function B(S, j) {
    if (!S || !j) return null;
    const H = (S == null ? void 0 : S.bbox) || null;
    if (!H) return null;
    const X = (S == null ? void 0 : S.transform) || {}, L = {
      u: (Number(H.u0 || 0) + Number(H.u1 || 0)) * 0.5,
      v: (Number(H.v0 || 0) + Number(H.v1 || 0)) * 0.5
    }, D = {
      u: ((Number(j.u || 0) - Number(X.du || 0)) % 1 + 1) % 1,
      v: Number(j.v || 0) - Number(X.dv || 0)
    }, k = G(
      D,
      L,
      Number(X.scale || 1),
      Number(X.rot_deg || 0)
    ), R = Number(H.u1 || 0) - Number(H.u0 || 0), ee = Number(H.v1 || 0) - Number(H.v0 || 0);
    if (!(R > 1e-6) || !(ee > 1e-6)) return null;
    const ce = de(Number(k.u || 0), Number(H.u0 || 0)) / R, Se = (Number(k.v || 0) - Number(H.v0 || 0)) / ee;
    if (ce < 0 || ce > 1 || Se < 0 || Se > 1) return 0;
    const ue = O(S);
    if (!ue) return null;
    const he = Ie(Math.floor(ce * ue.width), 0, ue.width - 1), me = Ie(Math.floor(Se * ue.height), 0, ue.height - 1);
    return Number(ue.alpha[(me * ue.width + he) * 4 + 3] || 0);
  }
  function P(S, j, H, X = null) {
    if (!(j != null && j.visible) || !Jr(H, j.corners)) return !1;
    const L = X || ye(H, performance.now()), D = B(S, L);
    return D === null ? !0 : D > 8;
  }
  function M() {
    var X, L, D, k, R, ee, ce, Se;
    const S = ((L = (X = r.paintEngine) == null ? void 0 : X.getErpTarget) == null ? void 0 : L.call(X, g(!1))) || null, j = Math.max(1, Number(((D = S == null ? void 0 : S.descriptor) == null ? void 0 : D.width) || ((R = (k = S == null ? void 0 : S.displayPaint) == null ? void 0 : k.canvas) == null ? void 0 : R.width) || 2048)), H = Math.max(1, Number(((ee = S == null ? void 0 : S.descriptor) == null ? void 0 : ee.height) || ((Se = (ce = S == null ? void 0 : S.displayPaint) == null ? void 0 : ce.canvas) == null ? void 0 : Se.height) || 1024));
    return { width: j, height: H };
  }
  function F() {
    var me, J, fe;
    const S = r.interaction;
    if ((S == null ? void 0 : S.kind) !== "paint_stroke") return null;
    const j = (S == null ? void 0 : S.stroke) || null;
    if (!j || String((j == null ? void 0 : j.layerKind) || "") !== "paint" || String((j == null ? void 0 : j.toolKind) || "") !== "eraser") return null;
    const H = u(), X = `${_e()}:${H.width}:${H.height}`;
    if (((me = r._activePaintEraserPreviewInfo) == null ? void 0 : me.cacheKey) === X)
      return r._activePaintEraserPreviewInfo.value || null;
    const L = un(j), D = (L == null ? void 0 : L.geometry) || null;
    if (D && String(D.geometryKind || "") !== "lasso_fill") {
      const K = Array.isArray(D.rawPoints) && D.rawPoints.length ? D.rawPoints : Array.isArray(D.points) ? D.points : [];
      D.processedPoints = W(K, L.targetSpace, !0);
    }
    const k = c(H.width, H.height, { readback: !0 });
    if (!$(k, L, { w: H.width, h: H.height })) return null;
    const R = ((fe = (J = k.ctx) == null ? void 0 : J.getImageData(0, 0, H.width, H.height)) == null ? void 0 : fe.data) || null;
    if (!R) return null;
    let ee = H.width, ce = H.height, Se = -1, ue = -1;
    for (let K = 0; K < H.height; K += 1)
      for (let p = 0; p < H.width; p += 1)
        R[(K * H.width + p) * 4 + 3] <= 8 || (p < ee && (ee = p), K < ce && (ce = K), p > Se && (Se = p), K > ue && (ue = K));
    if (Se < ee || ue < ce)
      return r._activePaintEraserPreviewInfo = { cacheKey: X, value: null }, null;
    const he = {
      surface: k,
      bounds: { minX: ee, minY: ce, maxX: Se, maxY: ue },
      key: `${X}:${ee}:${ce}:${Se}:${ue}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: X, value: he }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), he;
  }
  function C() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function ne(S, j, H) {
    var X, L;
    if (!S) return null;
    if (S.type === "rasterObject" && ((X = S.item) != null && X.bbox)) {
      const D = S.item.bbox, k = ((L = S.item) == null ? void 0 : L.transform) || {}, R = Number(D.u0 || 0) + Number(k.du || 0), ee = Number(D.u1 || 0) + Number(k.du || 0), ce = Number(D.v0 || 0) + Number(k.dv || 0), Se = Number(D.v1 || 0) + Number(k.dv || 0);
      return {
        minX: Math.floor((R % 1 + 1) % 1 * j),
        maxX: Math.ceil((ee % 1 + 1) % 1 * j),
        minY: Math.floor(Ie(ce, 0, 1) * H),
        maxY: Math.ceil(Ie(Se, 0, 1) * H),
        wraps: ee - R >= 1 || R < 0 || ee > 1
      };
    }
    if (S.type === "strokeGroup") {
      const D = te(S.actionGroupId, "paint"), k = d(S.actionGroupId, "paint", D);
      if (!k) return null;
      const R = k.centerUv.u - k.halfW, ee = k.centerUv.u + k.halfW, ce = k.centerUv.v - k.halfH, Se = k.centerUv.v + k.halfH;
      return {
        minX: Math.floor((R % 1 + 1) % 1 * j),
        maxX: Math.ceil((ee % 1 + 1) % 1 * j),
        minY: Math.floor(Ie(ce, 0, 1) * H),
        maxY: Math.ceil(Ie(Se, 0, 1) * H),
        wraps: ee - R >= 1 || R < 0 || ee > 1
      };
    }
    return null;
  }
  function Q(S, j, H) {
    if (!S || !j) return !1;
    const X = (k) => k.wraps ? [
      { minX: 0, maxX: k.maxX, minY: k.minY, maxY: k.maxY, wraps: !1 },
      { minX: k.minX, maxX: H - 1, minY: k.minY, maxY: k.maxY, wraps: !1 }
    ] : [k], L = X(S), D = X(j);
    return L.some((k) => D.some((R) => !(k.maxX < R.minX || R.maxX < k.minX || k.maxY < R.minY || R.maxY < k.minY)));
  }
  function z(S, j, H) {
    var I, q, pe, V, oe, Pe, Ae;
    if (!S || !j || !((I = H == null ? void 0 : H.surface) != null && I.canvas) || j.type !== "rasterObject") return S;
    const X = Number(S.width || H.surface.canvas.width || 0), L = Number(S.height || H.surface.canvas.height || 0);
    if (X < 1 || L < 1) return S;
    const D = ne(j, X, L);
    if (D && !Q(D, H.bounds, X)) return S;
    const k = String(((q = j.item) == null ? void 0 : q.id) || j.id || ""), R = ((pe = j.item) == null ? void 0 : pe.transform) || {}, ee = `${H.key}:${k}:${X}:${L}:${Number(R.du || 0).toFixed(6)}:${Number(R.dv || 0).toFixed(6)}:${Number(R.rot_deg || 0).toFixed(3)}:${Number(R.scale || 1).toFixed(4)}`, ce = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (ce.has(ee)) return ce.get(ee);
    const Se = Ie(Math.floor(Number(((V = H.bounds) == null ? void 0 : V.minX) || 0)), 0, Math.max(0, X - 1)), ue = Ie(Math.floor(Number(((oe = H.bounds) == null ? void 0 : oe.minY) || 0)), 0, Math.max(0, L - 1)), he = Ie(Math.ceil(Number(((Pe = H.bounds) == null ? void 0 : Pe.maxX) || 0)), Se, Math.max(0, X - 1)), me = Ie(Math.ceil(Number(((Ae = H.bounds) == null ? void 0 : Ae.maxY) || 0)), ue, Math.max(0, L - 1)), J = Math.max(1, he - Se + 1), fe = Math.max(1, me - ue + 1), K = c(X, L, { readback: !0 });
    K.ctx.clearRect(0, 0, X, L), K.ctx.drawImage(S, 0, 0);
    const p = K.ctx.getImageData(Se, ue, J, fe);
    K.ctx.save(), K.ctx.globalCompositeOperation = "destination-out", K.ctx.drawImage(H.surface.canvas, 0, 0), K.ctx.restore();
    const N = K.ctx.getImageData(Se, ue, J, fe);
    let v = !1;
    for (let xe = 0; xe < J * fe; xe += 1) {
      const Ce = p.data[xe * 4 + 3], $e = N.data[xe * 4 + 3];
      if (Ce > $e) {
        v = !0;
        break;
      }
    }
    return v ? (ce.size > 64 && ce.clear(), ce.set(ee, K.canvas), K.canvas) : (ce.set(ee, S), S);
  }
  function w(S, j = null) {
    const H = T((S == null ? void 0 : S.rasterObjectId) || (S == null ? void 0 : S.id) || ""), X = (S == null ? void 0 : S.bbox) || null;
    if (!H || !X) return null;
    const L = Y(S, j);
    if (!L || !(L.complete || L.width || L.naturalWidth)) return null;
    const { width: D, height: k } = M(), R = (S == null ? void 0 : S.transform) || {}, ee = [
      H,
      D,
      k,
      X.u0,
      X.v0,
      X.u1,
      X.v1,
      R.du,
      R.dv,
      R.rot_deg,
      R.scale,
      _()
    ].join(":"), ce = i.get(ee);
    if (ce) return ce;
    i.size > 64 && i.clear();
    const Se = rn({ label: "editor.raster-erp" });
    Se.width = D, Se.height = k;
    const ue = Se.getContext("2d");
    return ue ? (y0(ue, L, S, D, k), i.set(ee, Se), Se) : null;
  }
  async function Z(S, j) {
    const H = await new Promise((R) => S.toBlob(R, "image/png")), X = new FormData();
    X.append("image", H, j), X.append("type", "input"), X.append("subfolder", "panorama_stickers"), X.append("overwrite", "1");
    const L = await t.fetchApi("/upload/image", { method: "POST", body: X });
    if (!L || L.status !== 200) throw new Error(`upload failed (${L == null ? void 0 : L.status})`);
    const D = await L.json(), k = String((D == null ? void 0 : D.name) || "").trim();
    if (!k) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: k,
      subfolder: String((D == null ? void 0 : D.subfolder) || "panorama_stickers"),
      storage: String((D == null ? void 0 : D.type) || "input")
    };
  }
  let ie = null, be = !1;
  function we() {
    const S = Op(a.painting), { width: j, height: H } = f();
    return Z1(a.painting_layer, { paintCount: S.totalPaintCount, maskCount: S.totalMaskCount, width: j, height: H, nodeId: String(n.id ?? "0") });
  }
  function A() {
    const S = String(n.id ?? "0"), j = ma.get(S);
    if (be && j) return j;
    const H = (async () => {
      var D, k, R, ee, ce, Se, ue, he, me, J, fe, K;
      const X = h(), L = Op(a.painting);
      if (L.totalPaintCount <= 0 && L.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, ie = X, l());
        return;
      }
      if (ie !== X && !be) {
        be = !0;
        try {
          U();
          const p = g(!1), N = ((k = (D = r.paintEngine) == null ? void 0 : D.getErpTarget) == null ? void 0 : k.call(D, p)) || null, v = ((R = N == null ? void 0 : N.displayPaint) == null ? void 0 : R.canvas) || null, I = ((ee = N == null ? void 0 : N.committedMask) == null ? void 0 : ee.canvas) || null, q = Math.max(1, Number(((ce = N == null ? void 0 : N.descriptor) == null ? void 0 : ce.width) || (v == null ? void 0 : v.width) || (I == null ? void 0 : I.width) || 2048)), pe = Math.max(1, Number(((Se = N == null ? void 0 : N.descriptor) == null ? void 0 : Se.height) || (v == null ? void 0 : v.height) || (I == null ? void 0 : I.height) || 1024));
          (!v && L.totalPaintCount > 0 || !I && L.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((ue = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : ue.width) || 0) !== q || Number(((he = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : he.height) || 0) !== pe) && (r._paintLayerSyncBlankSurface = c(q, pe)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, q, pe));
          const V = v || L.totalPaintCount > 0 && ((me = r._paintLayerSyncBlankSurface) == null ? void 0 : me.canvas) || null, oe = I || L.totalMaskCount > 0 && ((J = r._paintLayerSyncBlankSurface) == null ? void 0 : J.canvas) || null;
          if (!V && !oe) return;
          let Pe = null, Ae = null;
          const xe = [];
          if (L.totalPaintCount > 0) {
            Pe = await Z(V, `pano_paint_${S}.png`);
            for (const Ce of p) {
              const $e = String(Ce || "").trim();
              if (!$e) continue;
              const ze = ((K = (fe = r.paintEngine) == null ? void 0 : fe.getGroupDisplayCanvas) == null ? void 0 : K.call(fe, $e)) || null;
              if (!ze) continue;
              const Ge = $e.replace(/[^a-zA-Z0-9_-]+/g, "_"), Re = await Z(ze, `pano_group_${S}_${Ge}.png`);
              Re && xe.push({
                id: $e,
                actionGroupId: $e,
                image: Re
              });
            }
          }
          L.totalMaskCount > 0 && (Ae = await Z(oe, `pano_mask_${S}.png`)), X === h() && (a.painting_layer = {
            paint: Pe,
            mask: Ae,
            groups: xe,
            revision: X
          }, ie = X, l());
        } catch (p) {
          throw p;
        } finally {
          be = !1;
        }
      }
    })();
    return ma.set(S, H), H.finally(() => {
      ma.get(S) === H && ma.delete(S);
    }), H;
  }
  function se(S) {
    var k;
    const j = ((k = r.paintEngine) == null ? void 0 : k.getMaskDisplayCanvas()) || null;
    if (!j) return S;
    const H = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, X = S.reduce((R, ee) => Math.max(R, Number((ee == null ? void 0 : ee.zIndex) || 0)), -1), L = (Array.isArray(a.stickers) ? a.stickers : []).reduce((R, ee) => Math.max(R, Number((ee == null ? void 0 : ee.z_index) || 0)), -1), D = Math.max(X, L);
    return S.push({
      id: "mask_display",
      source: j,
      revision: H,
      zIndex: D + 1,
      opacity: 1,
      visible: !0
    }), S;
  }
  function y() {
    var X, L;
    const S = x(!0), j = F(), H = [];
    for (const D of S) {
      if ((D == null ? void 0 : D.type) === "strokeGroup") {
        const k = String(D.actionGroupId || D.id || "");
        if (!k) continue;
        const R = ((L = (X = r.paintEngine) == null ? void 0 : X.getGroupDisplayCanvas) == null ? void 0 : L.call(X, k)) || null;
        if (!R) continue;
        H.push({
          id: `paint_group:${k}`,
          source: R,
          revision: `${m()}:${k}`,
          zIndex: Number((D == null ? void 0 : D.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((D == null ? void 0 : D.type) === "rasterObject") {
        const k = D.item || null, R = T((k == null ? void 0 : k.id) || D.id || "");
        if (!R) continue;
        const ee = w(k, () => ve());
        if (!ee) continue;
        const ce = z(ee, D, j), Se = (k == null ? void 0 : k.transform) || {};
        H.push({
          id: `raster:${R}`,
          source: ce,
          revision: [
            h(),
            (j == null ? void 0 : j.key) || "",
            R,
            Number(Se.du || 0).toFixed(6),
            Number(Se.dv || 0).toFixed(6),
            Number(Se.rot_deg || 0).toFixed(3),
            Number(Se.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((D == null ? void 0 : D.z_index) || 0),
          opacity: 1,
          visible: (k == null ? void 0 : k.visible) !== !1
        });
      }
    }
    return se(H);
  }
  function b() {
    return re() ? y().filter((S) => S.visible !== !1).map((S) => ({ id: S.id, media: S.source, revision: S.revision, opacity: S.opacity, zIndex: S.zIndex })) : [];
  }
  function E() {
    a.painting_layer !== null && (a.painting_layer = null), ie = "";
  }
  return {
    connect(S) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: m,
        getOrderedDisplayListObjects: x,
        getOrderedPaintGroupIds: g,
        getPaintingCompositeRevisionKey: h,
        getPaintingRevisionKey: _,
        getStrokeGroupStrokes: te,
        inverseTransformErpPointAround: G,
        paintingShown: re,
        parseRasterObjectSelectionId: T,
        processFreehandPoints: W,
        rasterizeStrokeToSurface: $,
        rebuildPaintEngineIfNeeded: U,
        requestDraw: ve,
        screenPosToErpPoint: ye,
        shortestWrappedDelta: de
      } = S);
    },
    getSharedLivePaintSurface: le,
    getLivePaintRevisionSuffix: _e,
    isPaintCompositeInteraction: ge,
    hitRasterObjectAt: P,
    invalidateLivePaintPreviewCaches: C,
    buildRasterObjectEditCanvas: w,
    needsPaintingLayerSync: we,
    syncPaintingLayerAsync: A,
    invalidatePaintingLayerState: E,
    buildEditorViewPaintLayers: b
  };
}
function P2(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(z) {
    return !z || typeof z != "object" ? { x: 0, y: 0 } : { x: Number((z == null ? void 0 : z.u) || 0), y: Number((z == null ? void 0 : z.v) || 0) };
  }
  function c(z, w, Z, ie = {}) {
    return { ...{
      ...z,
      t: Number((z == null ? void 0 : z.t) || 0),
      widthScale: f(z, "widthScale", 1),
      pressureLike: f(z, "pressureLike", 1)
    }, ...ie, u: w, v: Z };
  }
  function d(z, w = !1) {
    return w ? 12e-4 : 18e-4;
  }
  function u(z, w, Z = !1) {
    if (!Array.isArray(z) || !z.length) return [];
    const ie = String((w == null ? void 0 : w.kind) || "") === "ERP_GLOBAL", be = /* @__PURE__ */ new WeakMap();
    if (ie) {
      let L = null;
      z.forEach((D) => {
        const k = Number((D == null ? void 0 : D.u) || 0), R = Number((D == null ? void 0 : D.v) || 0), ee = (k % 1 + 1) % 1, ce = L == null ? ee : L + a(ee, (L % 1 + 1) % 1);
        be.set(D, { x: ce, y: R }), L = ce;
      });
    }
    const we = (L) => !L || typeof L != "object" ? { x: 0, y: 0 } : be.get(L) || l(L), A = (L, D, k, R = {}) => {
      const ee = ie ? (Number(D) % 1 + 1) % 1 : Number(D), ce = c(L, ee, k, R);
      return be.set(ce, { x: Number(D), y: Number(k) }), ce;
    }, se = (L, D, k) => {
      const R = we(L), ee = we(D);
      return A(L, Bn(R.x, ee.x, k), Bn(R.y, ee.y, k), {
        t: Bn(Number((L == null ? void 0 : L.t) || 0), Number((D == null ? void 0 : D.t) || 0), k),
        widthScale: Bn(f(L, "widthScale", 1), f(D, "widthScale", 1), k),
        pressureLike: Bn(f(L, "pressureLike", 1), f(D, "pressureLike", 1), k)
      });
    };
    if (z.length === 1) {
      const L = we(z[0]);
      return [A(z[0], L.x, L.y)];
    }
    const y = d(w, Z), b = (L, D) => {
      const k = [0];
      for (let J = 1; J < L.length; J += 1) {
        const fe = we(L[J - 1]), K = we(L[J]);
        k.push(k[J - 1] + Math.hypot(K.x - fe.x, K.y - fe.y));
      }
      const R = k[k.length - 1] || 0;
      if (R <= 1e-8) {
        const J = L[0], fe = we(J);
        return [A(J, fe.x, fe.y)];
      }
      const ee = [];
      let ce = 0;
      for (let J = 0; J <= R + 1e-9; J += D) {
        for (; ce < k.length - 2 && k[ce + 1] < J; ) ce += 1;
        const fe = k[ce], K = k[ce + 1], p = Math.max(1e-8, K - fe);
        ee.push(se(L[ce], L[ce + 1], Ie((J - fe) / p, 0, 1)));
      }
      const Se = L[L.length - 1], ue = we(Se), he = ee[ee.length - 1], me = he ? we(he) : null;
      return (!me || Math.hypot(me.x - ue.x, me.y - ue.y) > D * 0.35) && ee.push(A(Se, ue.x, ue.y)), ee;
    }, E = (L) => {
      if (!Array.isArray(L) || L.length < 3) return L ? L.slice() : [];
      const D = we(L[0]), k = [A(L[0], D.x, D.y)];
      for (let ce = 0; ce < L.length - 1; ce += 1) {
        const Se = L[ce], ue = L[ce + 1], he = we(Se), me = we(ue), J = A(
          Se,
          he.x * 0.75 + me.x * 0.25,
          he.y * 0.75 + me.y * 0.25,
          {
            t: Number(Se.t || 0) * 0.75 + Number(ue.t || 0) * 0.25,
            widthScale: f(Se, "widthScale", 1) * 0.75 + f(ue, "widthScale", 1) * 0.25,
            pressureLike: f(Se, "pressureLike", 1) * 0.75 + f(ue, "pressureLike", 1) * 0.25
          }
        ), fe = A(
          Se,
          he.x * 0.25 + me.x * 0.75,
          he.y * 0.25 + me.y * 0.75,
          {
            t: Number(Se.t || 0) * 0.25 + Number(ue.t || 0) * 0.75,
            widthScale: f(Se, "widthScale", 1) * 0.25 + f(ue, "widthScale", 1) * 0.75,
            pressureLike: f(Se, "pressureLike", 1) * 0.25 + f(ue, "pressureLike", 1) * 0.75
          }
        );
        k.push(J, fe);
      }
      const R = L[L.length - 1], ee = we(R);
      return k.push(A(R, ee.x, ee.y)), k;
    }, S = b(z, y);
    if (S.length < 3) return S;
    const j = Z ? 2 : 1;
    let H = S.slice();
    for (let L = 0; L < j; L += 1) H = E(H);
    return b(H, Math.max(y * 0.75, 55e-5));
  }
  function f(z, w, Z = 1) {
    const ie = Number(z == null ? void 0 : z[w]);
    return Number.isFinite(ie) ? Math.max(0, ie) : Z;
  }
  function m(z) {
    const w = Number(z == null ? void 0 : z.radiusValue);
    if (Number.isFinite(w) && w > 0) {
      const Z = String((z == null ? void 0 : z.radiusModel) || "").trim() || "erp_uv_norm";
      return Z === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((z == null ? void 0 : z.size) || 10) * 0.5 / 2048)
      } : {
        model: Z,
        value: w
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((z == null ? void 0 : z.size) || 10) * 0.5 / 2048)
    };
  }
  function x(z, w, Z = {}) {
    const ie = rn({ label: "editor.raster-surface" });
    ie.width = Math.max(1, Math.round(z)), ie.height = Math.max(1, Math.round(w));
    const be = ie.getContext("2d", Z.readback ? { willReadFrequently: !0 } : void 0);
    return be && (be.clearRect(0, 0, ie.width, ie.height), be.imageSmoothingEnabled = !0), { canvas: ie, ctx: be };
  }
  function g() {
    const z = ye();
    return `${String(t.paintStrokeRevision)}:${z.width}x${z.height}`;
  }
  function h() {
    const z = ye();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${z.width}x${z.height}`;
  }
  function _() {
    const z = i(), w = h();
    return z ? `${w}:${z}` : w;
  }
  function te() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function G() {
    t.paintCompositeRevision += 1;
  }
  function re() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function T() {
    var z, w;
    t.paintEngineRevisionKey = null, (w = (z = t.paintEngine) == null ? void 0 : z.rebuildCommitted) == null || w.call(z, n), t.paintEngineRevisionKey = g();
  }
  function W() {
    re(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function $({ rebuildPaintEngine: z = !1 } = {}) {
    o(), te(), W(), z && T();
  }
  function U() {
    o(), G(), W();
  }
  function ve() {
    var ie;
    const z = ye(), w = `${z.width}x${z.height}`;
    t.paintEngineDescriptorKey !== w && (t.paintEngine = Tl(z), t.paintEngineDescriptorKey = w, t.paintEngineRevisionKey = "");
    const Z = g();
    t.paintEngineRevisionKey !== Z && (t.paintEngineRevisionKey = Z, (ie = t.paintEngine) == null || ie.rebuildCommitted(n));
  }
  function ye() {
    const z = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: z,
      height: Math.max(1, Math.round(z * 0.5))
    };
  }
  function de() {
    return ye();
  }
  function ge(z, w, Z, ie, be = null) {
    const we = m(z), A = f(w, "widthScale", 1) * f(w, "pressureLike", 1);
    return we.model === "erp_uv_norm" ? Math.max(0.5, we.value * Z * A) : we.model === "world_angle" ? be ? Math.max(0.5, we.value / Math.max(1e-6, Number(be.hFOV_deg || 90) * xr) * Z * A) : Math.max(0.5, we.value / (2 * Math.PI) * Z * A) : Math.max(0.5, Number((z == null ? void 0 : z.size) || 10) * 0.5 * A);
  }
  function le(z, w, Z = {}) {
    const ie = String((w == null ? void 0 : w.layerKind) || "paint"), be = String((w == null ? void 0 : w.toolKind) || "pen"), we = Z.preview === !0, A = we ? 0.78 : 1;
    if (z.globalAlpha = be === "marker" ? 0.7 * A : 1, ie === "mask") {
      z.fillStyle = we ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (be === "eraser") {
      z.globalCompositeOperation = "destination-out", z.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const se = String((w == null ? void 0 : w.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (w == null ? void 0 : w.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, y = we ? Math.max(0.28, Number(se.a ?? 1) * 0.88) : Math.max(0.12, Number(se.a ?? 1));
    z.fillStyle = `rgba(${Math.round(Number(se.r || 0) * 255)}, ${Math.round(Number(se.g || 0) * 255)}, ${Math.round(Number(se.b || 0) * 255)}, ${y})`;
  }
  function _e(z, w, Z) {
    const ie = Math.max(0.5, Math.min(Z, Number((w == null ? void 0 : w.radiusPx) || 0.5)));
    !Number.isFinite(w == null ? void 0 : w.x) || !Number.isFinite(w == null ? void 0 : w.y) || !Number.isFinite(ie) || (z.beginPath(), z.arc(Number(w.x || 0), Number(w.y || 0), ie, 0, Math.PI * 2), z.fill());
  }
  function Y(z, w, Z, ie, be = {}) {
    if (!z || !Array.isArray(w) || !w.length) return;
    const we = Math.max(ie.w, ie.h) * 0.25;
    z.save(), le(z, Z, be);
    const A = (se) => _e(z, se, we);
    if (w.length === 1) {
      A(w[0]), z.restore();
      return;
    }
    for (let se = 0; se < w.length - 1; se += 1) {
      const y = w[se], b = w[se + 1];
      if (!y || !b) continue;
      const E = Number(y.x || 0), S = Number(y.y || 0), j = Number(b.x || 0), H = Number(b.y || 0), X = Math.max(0.5, Math.min(we, Number(y.radiusPx || 0.5))), L = Math.max(0.5, Math.min(we, Number(b.radiusPx || 0.5)));
      if (!Number.isFinite(E) || !Number.isFinite(S) || !Number.isFinite(j) || !Number.isFinite(H) || !Number.isFinite(X) || !Number.isFinite(L)) continue;
      const D = j - E, k = H - S, R = Math.hypot(D, k);
      if (!Number.isFinite(R) || R < 1e-6) {
        A(y);
        continue;
      }
      if (R > Math.max(ie.w, ie.h) * 0.5) continue;
      const ee = Math.max(0.5, Math.min(X, L)), ce = Math.max(0.35, Math.min(ee * 0.4, 2.25)), Se = Math.max(1, Math.ceil(R / ce));
      for (let ue = 0; ue <= Se; ue += 1) {
        const he = ue / Se;
        A({
          x: Bn(E, j, he),
          y: Bn(S, H, he),
          radiusPx: Bn(X, L, he)
        });
      }
    }
    A(w[w.length - 1]), z.restore();
  }
  function O(z, w, Z, ie) {
    Y(z, w, Z, ie, { preview: !1 });
  }
  function B(z, w, Z, ie, be) {
    var se, y, b, E;
    if (!z || !Array.isArray(w) || w.length < 3) return;
    const we = "u", A = "v";
    if (z.save(), String((Z == null ? void 0 : Z.layerKind) || "") === "mask")
      z.fillStyle = "rgba(255,255,255,1)";
    else if (String((Z == null ? void 0 : Z.toolKind) || "") === "eraser")
      z.globalCompositeOperation = "destination-out", z.fillStyle = "rgba(0,0,0,1)";
    else {
      const S = (Z == null ? void 0 : Z.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      z.fillStyle = `rgba(${Math.round(Number(S.r || 0) * 255)}, ${Math.round(Number(S.g || 0) * 255)}, ${Math.round(Number(S.b || 0) * 255)}, ${Number(S.a ?? 1)})`;
    }
    z.beginPath(), z.moveTo(Number(((se = w[0]) == null ? void 0 : se[we]) || 0) * ie.w, Number(((y = w[0]) == null ? void 0 : y[A]) || 0) * ie.h);
    for (let S = 1; S < w.length; S += 1)
      z.lineTo(Number(((b = w[S]) == null ? void 0 : b[we]) || 0) * ie.w, Number(((E = w[S]) == null ? void 0 : E[A]) || 0) * ie.h);
    z.closePath(), z.fill(), z.restore();
  }
  function P(z) {
    const w = (z == null ? void 0 : z.geometry) || null;
    return w ? String(w.geometryKind || "") === "lasso_fill" ? Array.isArray(w.points) ? w.points : [] : Array.isArray(w.processedPoints) && w.processedPoints.length ? w.processedPoints : Array.isArray(w.rawPoints) && w.rawPoints.length ? w.rawPoints : Array.isArray(w.points) ? w.points : [] : [];
  }
  function M(z, w) {
    const Z = P(z);
    return !Array.isArray(Z) || !Z.length ? [] : Z.map((ie) => ({
      x: Number((ie == null ? void 0 : ie.u) || 0) * Number((w == null ? void 0 : w.w) || 1),
      y: Number((ie == null ? void 0 : ie.v) || 0) * Number((w == null ? void 0 : w.h) || 1),
      radiusPx: ge(z, ie, Number((w == null ? void 0 : w.w) || 1), Number((w == null ? void 0 : w.h) || 1))
    }));
  }
  function F(z, w, Z = null) {
    var se, y, b, E;
    if (!(z != null && z.ctx) || !w) return !1;
    const ie = Z || { w: Number(((se = z.canvas) == null ? void 0 : se.width) || 0), h: Number(((y = z.canvas) == null ? void 0 : y.height) || 0) }, be = String((w == null ? void 0 : w.toolKind) || "") === "eraser" ? {
      ...w,
      layerKind: "mask",
      toolKind: String(((b = w == null ? void 0 : w.geometry) == null ? void 0 : b.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : w;
    if (String(((E = w == null ? void 0 : w.geometry) == null ? void 0 : E.geometryKind) || "") === "lasso_fill")
      return B(z.ctx, P(be), be, ie), !0;
    const A = M(be, ie);
    return A.length ? (O(z.ctx, A, be, ie), !0) : !1;
  }
  function C(z, w, Z, ie = 8) {
    const be = new Uint8Array(w * Z), we = [], A = new Int32Array(w * Z), se = new Int32Array(w * Z);
    for (let y = 0; y < Z; y += 1)
      for (let b = 0; b < w; b += 1) {
        const E = y * w + b;
        if (be[E] || z[E] <= ie) continue;
        let S = 0, j = 0;
        A[j] = b, se[j] = y, j += 1, be[E] = 1;
        const H = [];
        let X = b, L = y, D = b, k = y;
        for (; S < j; ) {
          const R = A[S], ee = se[S];
          S += 1, H.push({ x: R, y: ee }), R < X && (X = R), ee < L && (L = ee), R > D && (D = R), ee > k && (k = ee);
          const ce = [
            [(R - 1 + w) % w, ee],
            [(R + 1) % w, ee],
            [R, ee - 1],
            [R, ee + 1]
          ];
          for (const [Se, ue] of ce) {
            if (ue < 0 || ue >= Z) continue;
            const he = ue * w + Se;
            be[he] || z[he] <= ie || (be[he] = 1, A[j] = Se, se[j] = ue, j += 1);
          }
        }
        we.push({ pixels: H, minX: X, minY: L, maxX: D, maxY: k });
      }
    return we;
  }
  function ne(z, w) {
    const Z = [...new Set((Array.isArray(z == null ? void 0 : z.pixels) ? z.pixels : []).map((y) => Number((y == null ? void 0 : y.x) || 0)).filter((y) => Number.isFinite(y)))].sort((y, b) => y - b);
    if (!Z.length) return null;
    if (Z.length === 1)
      return { startX: Z[0], widthPx: 1 };
    let ie = -1, be = 0;
    for (let y = 0; y < Z.length; y += 1) {
      const b = Z[y], S = (y === Z.length - 1 ? Z[0] + w : Z[y + 1]) - b - 1;
      S > ie && (ie = S, be = y);
    }
    const we = (Z[(be + 1) % Z.length] + w) % w;
    let A = 1 / 0, se = -1 / 0;
    for (const y of Z) {
      const b = (y - we + w) % w;
      A = Math.min(A, b), se = Math.max(se, b);
    }
    return {
      startX: we,
      widthPx: Math.max(1, se - A + 1)
    };
  }
  function Q(z, w, Z = {}) {
    var b;
    const ie = Number((z == null ? void 0 : z.width) || 0), be = Number((z == null ? void 0 : z.height) || 0), we = (b = z == null ? void 0 : z.getContext) == null ? void 0 : b.call(z, "2d");
    if (!we || ie < 1 || be < 1) return [];
    const A = we.getImageData(0, 0, ie, be), se = new Uint8Array(ie * be);
    for (let E = 0; E < se.length; E += 1) se[E] = A.data[E * 4 + 3];
    return C(se, ie, be, 8).map((E, S) => {
      const j = ne(E, ie);
      if (!j) return null;
      const H = Number(j.widthPx || 0), X = E.maxY - E.minY + 1, L = Number(j.startX || 0), D = rn({ label: "editor.lasso-fill" });
      D.width = H, D.height = X;
      const k = D.getContext("2d");
      if (!k) return null;
      const R = k.createImageData(H, X);
      return E.pixels.forEach(({ x: ee, y: ce }) => {
        const Se = (ce * ie + ee) * 4, ue = (Number(ee || 0) - L + ie) % ie, he = ((ce - E.minY) * H + ue) * 4;
        R.data[he + 0] = A.data[Se + 0], R.data[he + 1] = A.data[Se + 1], R.data[he + 2] = A.data[Se + 2], R.data[he + 3] = A.data[Se + 3];
      }), k.putImageData(R, 0, 0), {
        id: eo("raster"),
        type: "raster_frozen",
        layerKind: w === "mask" ? "mask" : "paint",
        z_index: Number((Z == null ? void 0 : Z.z_index) || 0) + S * 1e-3,
        locked: (Z == null ? void 0 : Z.locked) === !0,
        bbox: {
          u0: 0,
          v0: E.minY / be,
          u1: H / ie,
          v1: (E.maxY + 1) / be
        },
        rasterDataUrl: D.toDataURL("image/png"),
        transform: {
          du: L / ie,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(z) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = z);
    },
    processFreehandPoints: u,
    createRasterSurface: x,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: h,
    getDisplayPaintRevisionKey: _,
    refreshPaintEngineRevisionCache: T,
    markObjectVisualsDirty: W,
    markPaintStrokeVisualsDirty: $,
    markPaintCompositeVisualsDirty: U,
    rebuildPaintEngineIfNeeded: ve,
    getDesiredPaintTargetDescriptor: ye,
    getActivePaintTargetDescriptor: de,
    rasterizeStrokeToSurface: F,
    createRasterFrozenObjectsFromCanvas: Q
  };
}
function N2(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, m, x, g, h = { stored: null, shown: null, handoff: null, fps: null };
  function _(M, F = null) {
    var C;
    if (M && typeof M == "object" && !Array.isArray(M)) return M;
    if (Array.isArray(M) && M.length > 0) {
      const ne = M[0];
      if (ne && typeof ne == "object" && !Array.isArray(ne)) return ne;
    }
    if (Array.isArray(F) && F.length > 0) {
      const ne = (C = F[0]) == null ? void 0 : C.parsed_state;
      if (ne && typeof ne == "object" && !Array.isArray(ne))
        return {
          yaw_deg: Number(ne.yaw_deg || 0),
          pitch_deg: Number(ne.pitch_deg || 0),
          hFOV_deg: Number(ne.hFOV_deg || 30),
          rot_deg: Number(ne.roll_deg || 0)
        };
    }
    return null;
  }
  function te(M, F, C) {
    const ne = Math.max(1, Number(F || 1)), Q = Math.max(1, Number(C || 1)), z = Ie(Number(M || 30), 0.1, 179) * xr, w = 2 * Math.atan(Math.tan(z * 0.5) * (Q / ne));
    return Ie(w * Ti, 0.1, 179);
  }
  function G(M) {
    const F = String(M || "").trim();
    if (!F) return null;
    try {
      const C = JSON.parse(F);
      if (!C || typeof C != "object" || String(C.kind || "") !== "pano_sticker_state") return null;
      const ne = C.version;
      let Q = null;
      if (typeof ne == "number" && Number.isInteger(ne) ? Q = ne : typeof ne == "string" && /^\d+$/.test(ne) && (Q = Number.parseInt(ne, 10)), Q !== 1) return null;
      const z = C.pose;
      if (!z || typeof z != "object") return null;
      const w = Number(z.yaw_deg), Z = Number(z.pitch_deg), ie = Number(z.roll_deg), be = Number(z.hFOV_deg);
      if (![w, Z, ie, be].every((y) => Number.isFinite(y))) return null;
      let we = ((w + 180) % 360 + 360) % 360 - 180;
      Object.is(we, -0) && (we = 0);
      const A = {
        yaw_deg: we,
        pitch_deg: Ie(Z, -89.9, 89.9),
        roll_deg: ie,
        hFOV_deg: Ie(be, 0.1, 179)
      }, se = Number(C.source_aspect);
      return Number.isFinite(se) && se > 0 && (A.source_aspect = se), A;
    } catch {
      return null;
    }
  }
  function re(M) {
    const F = Number(M == null ? void 0 : M.yaw_deg), C = Number(M == null ? void 0 : M.pitch_deg), ne = Number((M == null ? void 0 : M.roll_deg) ?? (M == null ? void 0 : M.rot_deg)), Q = Number(M == null ? void 0 : M.hFOV_deg), z = Li(M);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(F) ? F : 0),
        pitch_deg: Ie(Number.isFinite(C) ? C : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ne) ? ne : 0,
        hFOV_deg: Ie(Number.isFinite(Q) ? Q : 90, 0.1, 179)
      },
      source_aspect: z
    };
  }
  function T(M) {
    var Z;
    if (!M || typeof M != "object") return re(null);
    const F = Number(M == null ? void 0 : M.yaw_deg), C = Number(M == null ? void 0 : M.pitch_deg), ne = Number((M == null ? void 0 : M.roll_deg) ?? (M == null ? void 0 : M.rot_deg)), Q = Number(M == null ? void 0 : M.hFOV_deg), z = Number(M == null ? void 0 : M.vFOV_deg);
    let w = 1;
    if (Number.isFinite(Q) && Number.isFinite(z)) {
      const ie = Ie(Q, 0.1, 179) * xr, be = Ie(z, 0.1, 179) * xr, we = Math.tan(be * 0.5);
      if (Math.abs(we) > 1e-6) {
        const A = Math.tan(ie * 0.5) / we;
        Number.isFinite(A) && A > 0 && (w = A);
      }
    }
    if (M != null && M.asset_id && ((Z = o == null ? void 0 : o.assets) != null && Z[M.asset_id])) {
      const ie = o.assets[M.asset_id], be = Number((ie == null ? void 0 : ie.w) || 0), we = Number((ie == null ? void 0 : ie.h) || 0);
      be > 0 && we > 0 && (w = be / we);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(F) ? F : 0),
        pitch_deg: Ie(Number.isFinite(C) ? C : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(ne) ? ne : 0,
        hFOV_deg: Ie(Number.isFinite(Q) ? Q : 30, 0.1, 179)
      },
      source_aspect: w
    };
  }
  function W(M) {
    return t.linkedValue(n, M);
  }
  function $(M, F, C) {
    const ne = M && typeof M == "object" ? {
      yaw_deg: Number(M.yaw_deg || 0),
      pitch_deg: Number(M.pitch_deg || 0),
      roll_deg: Number(M.rot_deg ?? M.roll_deg ?? 0),
      hFOV_deg: Number(M.hFOV_deg || 30)
    } : G(F);
    if (ne) {
      const w = Number((C == null ? void 0 : C.naturalWidth) || (C == null ? void 0 : C.width) || ne.source_aspect || 1), Z = Number((C == null ? void 0 : C.naturalHeight) || (C == null ? void 0 : C.height) || 1);
      return {
        yaw_deg: Number(ne.yaw_deg || 0),
        pitch_deg: Number(ne.pitch_deg || 0),
        hFOV_deg: Number(ne.hFOV_deg || 30),
        vFOV_deg: te(ne.hFOV_deg, w, Z),
        rot_deg: Number(ne.roll_deg || 0)
      };
    }
    const Q = Number((C == null ? void 0 : C.naturalWidth) || (C == null ? void 0 : C.width) || 1), z = Number((C == null ? void 0 : C.naturalHeight) || (C == null ? void 0 : C.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: te(30, Q, z),
      rot_deg: 0
    };
  }
  function U() {
    const M = Kt(n, "external-sticker") ? _(c("pano_sticker_input_pose"), null) : null;
    return Ng(o, Mg(n, { pose: M, handoff: ve() }));
  }
  function ve() {
    return Kt(n, "sticker-handoff") ? A_(n, c("pano_sticker_handoff")) : null;
  }
  function ye() {
    return s === "stickers" && !i && n.__panoSceneStateV2 === !0;
  }
  function de(M, F, C) {
    return structuredClone(Is(ur({ version: 2, timeline: { fps: F }, stickers: [M] }), C).stickers[0]);
  }
  function ge({ record: M = !0, restored: F = !1 } = {}) {
    var ie;
    if (!ye()) return !1;
    const C = o.stickers.find((be) => {
      var we;
      return ((we = be.source) == null ? void 0 : we.kind) === "port";
    });
    if (!C)
      return h = { stored: null, shown: null, handoff: null, fps: null }, !1;
    const { fps: ne } = o.timeline;
    let Q;
    if (F || !h.handoff || ((ie = h.stored) == null ? void 0 : ie.id) !== C.id)
      Q = structuredClone(C);
    else {
      const be = (we) => h.fps === ne ? we : de(we, h.fps, ne);
      M && x_(C, be(h.shown)), Q = k_(C, be(h.stored));
    }
    const z = ve(), w = z ? Ad(o, Q, z) : structuredClone(Q), Z = JSON.stringify(w) !== JSON.stringify(C);
    if (Z) {
      for (const be of Object.keys(C)) delete C[be];
      Object.assign(C, w);
    }
    return h = { stored: Q, shown: structuredClone(w), handoff: z, fps: ne }, Z;
  }
  function le() {
    return h.handoff ? { ...o, stickers: o.stickers.map((M) => {
      var F;
      return ((F = M.source) == null ? void 0 : F.kind) === "port" ? h.stored : M;
    }) } : o;
  }
  function _e(M) {
    var ne;
    if (!ye() || ((ne = M == null ? void 0 : M.source) == null ? void 0 : ne.kind) !== "port") return null;
    const { handoff: F } = h, C = !!F && F.placement === M.placement;
    return ho[M.placement].map((Q) => ({ name: Q, overridden: C && M.handoff_overrides.includes(Q) }));
  }
  function Y(M) {
    ge();
    const F = o.stickers.find((C) => {
      var ne;
      return ((ne = C.source) == null ? void 0 : ne.kind) === "port";
    });
    !F || F.locked || !h.handoff || !M_(o, F, h.handoff, M) || (h.shown = structuredClone(F), h.stored[M] = structuredClone(F[M]), f(), a(), u(), g(), m());
  }
  function O() {
    var Z;
    const M = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((ie) => String((ie == null ? void 0 : ie.name) || "") === "sticker_image") : -1, F = M >= 0 ? ((Z = n.getInputLink(M)) == null ? void 0 : Z.id) ?? null : null, C = l(() => {
      ni(n, "image-loaded");
    }), ne = _(c("pano_sticker_input_pose"), null), Q = W("sticker_state"), z = t.externalStateHash(n, Q), w = F == null ? null : $(ne, Q, C);
    return kg(o, {
      connected: F != null,
      linkId: F,
      stateHash: z,
      pose: w,
      imageWidth: Number((C == null ? void 0 : C.naturalWidth) || (C == null ? void 0 : C.width) || 0),
      imageHeight: Number((C == null ? void 0 : C.naturalHeight) || (C == null ? void 0 : C.height) || 0)
    });
  }
  function B(M = "sync") {
    if (s !== "stickers" || i) return;
    const F = n.__panoSceneStateV2 ? U() : O();
    if (F.changed) {
      const C = o.stickers.find(d);
      o.stickers = F.state.stickers, o.active = F.state.active, C && r.selectedId === C.id && !o.stickers.some((ne) => ne.id === C.id) && (r.selectedId = null, r.selectedIds = []), a(), g(), x();
    } else ge({ restored: M === "open" }) ? (u(), g()) : M === "image-loaded" && g();
    m();
  }
  function P() {
    const M = Array.isArray(o.stickers) ? o.stickers : [], F = [];
    for (const C of M)
      d(C) && (C.visible = !1, F.push(C));
    return F;
  }
  return {
    connect(M) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        markObjectVisualsDirty: u,
        pushHistory: f,
        requestDraw: m,
        updateSelectionMenu: x,
        updateSidePanel: g
      } = M);
    },
    computeStickerVFov: te,
    buildCanonicalCutoutStickerState: re,
    buildCanonicalSelectedStickerState: T,
    reconcileExternalStickerFromInputs: B,
    collectExternalStickersForClearAll: P,
    syncPortHandoff: ge,
    storedEditorState: le,
    portHandoffLanes: _e,
    revertPortHandoffLane: Y
  };
}
function Zi(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function A2(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function C2({
  editor: e,
  swatches: t,
  paintColorPopOpen: r,
  colorToCss: n,
  colorsApproximatelyEqual: i,
  rgb01ToHsv: o,
  hsv01ToRgb: s,
  getBrushPresetIdForTool: a,
  isActiveLassoTool: l
}) {
  var G, re;
  const c = e.primaryTool === "paint" || e.primaryTool === "mask", d = {
    visible: c,
    activePane: c ? e.primaryTool : "",
    showColorRow: !0,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: "",
    customColorActive: !1,
    customColorCss: n(e.customPaintColor, 1),
    colorPopOpen: c ? !!r : !1,
    pickerHueColor: n({ r: 1, g: 0, b: 0, a: 1 }, 1),
    pickerSat: "100%",
    pickerVal: "0%",
    pickerHue: "0%",
    pickerSvLeft: "100%",
    pickerSvTop: "0%",
    pickerHueLeft: "0%",
    alphaValue: 100,
    alphaText: "100%",
    historyVisible: !0,
    historyEntries: Array.from({ length: 8 }, (T, W) => ({ index: W, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((G = t.find((T) => i(e.paintColor, T.color))) == null ? void 0 : G.id) || "", f = !u, m = o(e.customPaintColor), x = Math.round(Math.max(0, Math.min(1, Number(((re = e.customPaintColor) == null ? void 0 : re.a) ?? 1))) * 100), g = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), h = e.brushSizes[g] ?? 10, _ = l(), te = Array.from({ length: 8 }, (T, W) => e.customPaintHistory[W] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...s(m.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, m.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, m.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, m.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, m.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, m.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, m.h)) * 100}%`,
    alphaValue: x,
    alphaText: `${x}%`,
    historyEntries: te.map((T, W) => ({
      index: W,
      color: T ? { cssColor: n(T, 1) } : null
    })),
    sizeValue: h,
    sizeText: String(h),
    sizeFill: `${Math.max(0, Math.min(100, (h - 1) / 119 * 100))}%`,
    sizeDisabled: _,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function I2({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
  return {
    coverage: { value: r(e), disabled: !1 },
    transformTitle: !1,
    notes: [],
    params: [],
    paramsDisabled: !0,
    uiSettings: t,
    footerButtons: [{ action: "close-preview", label: "Close", primary: !0 }]
  };
}
const E2 = {
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
function O2(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = E2[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function $c(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function F2({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
  const o = !n && !!i;
  return {
    space: {
      visible: !!e,
      mode: t,
      frameDisabled: !!r || !e || t !== "6dof"
    },
    buttons: {
      "reset-view": { disabled: !!r || !!n },
      "toggle-grid": {
        icon: o ? je.eye : je.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function k0({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function T2(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function D2(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const yo = "erp", L2 = ["1:1", "4:3", "3:2", "16:9"];
function M0(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...L2.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: yo, label: Number(r) === 180 ? "180°" : "360°", active: e === yo }] : []
  ];
}
const R2 = { direction: "Direction", roll: "Roll", size: "Size", position: "Position", rotation: "Rotation", scale: "Scale" };
function V2(e, { enabled: t = !0 } = {}) {
  return e ? { lanes: e.map(({ name: r, overridden: n }) => ({ name: r, label: R2[r], disabled: !t || !n })) } : null;
}
function $2({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: s,
  notes: a,
  uiSettings: l,
  normalizeCoverageValue: c,
  handoff: d = null
}) {
  return {
    coverage: { value: c(e), disabled: !!t },
    transformTitle: !0,
    selectionPicker: r,
    copyStateButton: {
      disabled: !n || i === "stroke" || i === "camera" || i === "world" || o.length > 1,
      label: "Copy State"
    },
    params: s,
    rows: O2(s),
    notes: a,
    handoff: d,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function z2({
  type: e,
  selected: t,
  selectedItems: r,
  selectedKind: n,
  geom: i,
  allLocked: o,
  anyLocked: s,
  selectedLocked: a,
  activeAspect: l,
  cutoutAspectOpen: c,
  isExternalSticker: d,
  isStickerHidden: u,
  canRestoreSelectedToInitial: f,
  iconSet: m,
  // Panorama Studio's shot is its Camera (#89), which is not locked, is deleted from its menu and has
  // the 360° preset.
  cameraShot: x = !1,
  coverage: g = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let h = [];
  if (r.length > 1)
    h = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: m.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: m.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!s }
    ];
  else if (n === "stroke")
    h = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: m.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: m.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a }
    ];
  else if (n === "image") {
    if (h = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: m.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: m.send_back, disabled: !!a }
    ], d(t) || (h.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: m.duplicate }), h.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: m.replace_image })), d(t)) {
      const _ = f(), te = u(t);
      h.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: _ ? "Back to initial position" : "Already at initial position",
        icon: m.back_initial,
        disabled: !_
      }), h.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: te ? "Show" : "Hide",
        tip: te ? "Show input image" : "Hide input image",
        icon: te ? m.eye : m.eye_dashed
      });
    }
    h.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? m.lock_open : m.lock_closed }), d(t) || h.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a });
  } else
    h = [
      {
        key: "aspect",
        kind: "aspect",
        icon: m.aspect,
        open: !!c,
        choices: M0(l, { erp: x, coverage: g })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: m.rotate_90, disabled: l === yo }
    ], x ? h.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete }) : h.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? m.lock_open : m.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: m.delete, disabled: !!a }
    );
  return P0(i.corners, h);
}
const Tp = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function j2({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? Tp.filter((s) => s.cameraTip) : Tp;
  return P0([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: s, label: a, tip: l, cameraTip: c }) => ({ key: s, label: a, tip: n ? c : l, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...n ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: je.delete }] : []
  ]);
}
function H2(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), m = d + 18, x = c - 18 - r;
  let g;
  return m <= f ? g = Math.max(m, 14) : x >= 14 ? g = Math.min(x, f) : g = Math.min(Math.max(m, 14), f), { left: u, top: g };
}
function P0(e, t) {
  const r = e.map((c) => ({ x: Number(c == null ? void 0 : c.x), y: Number(c == null ? void 0 : c.y) })).filter((c) => Number.isFinite(c.x) && Number.isFinite(c.y));
  if (!r.length) return { visible: !1, left: 0, top: 0, items: [] };
  const n = r.map((c) => c.x), i = r.map((c) => c.y), o = Math.min(...n), s = Math.max(...n), a = Math.min(...i), l = Math.max(...i);
  return {
    visible: !0,
    left: (o + s) * 0.5,
    top: l + 18,
    items: t,
    anchor: { minX: o, maxX: s, minY: a, maxY: l }
  };
}
const N0 = "painting";
function G2(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const K2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function W2(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: s = null, fpsLocked: a = !1, camera: l = !1, cameraHideable: c = !1, scene: d = !1 }) {
  const u = (g, h, _, te, G, re, { keyable: T = !0, hideable: W = !0 } = {}) => {
    const $ = (U) => (r == null ? void 0 : r.owner) === g && r.lane === U ? r.frames.map((ve) => ve + re) : [];
    return {
      id: g,
      label: _,
      icon: te,
      clip: G,
      selected: g === n,
      hideable: W,
      visible: h.visible,
      keyable: T,
      open: T && o.has(g),
      keys: C1(h).map((U) => ({ frame: U.frame + re, full: U.full })),
      selectedFrames: $(null),
      lanes: (T ? ko(h) : []).map((U) => ({
        key: `${g}:${U}`,
        lane: U,
        label: K2[U],
        frames: h[U].keyframes.map((ve) => ve.frame + re),
        selectedFrames: $(U)
      }))
    };
  }, f = e.stickers.filter((g) => g.placement === "sky").sort((g, h) => h.z_index - g.z_index), m = e.stickers.filter((g) => g.placement === "world"), x = ({ start: g, in: h, duration: _ }) => ({ clip: { start: g, end: _ === null ? null : g + _ }, offset: g - h });
  return {
    visible: !0,
    expanded: i,
    hasAudio: !!s,
    muted: !!(s != null && s.muted),
    span: t,
    fps: e.timeline.fps,
    fpsLocked: a,
    length: e.timeline.length,
    rows: [
      ...l ? [u("camera", e.camera, "Camera", je.camera, null, 0, { hideable: c })] : [],
      ...[...f, ...m].map((g) => {
        const { clip: h, offset: _ } = x(g.clip);
        return u(g.id, g, au(g), je.image, h, _);
      }),
      ...G2(e.painting) || !e.painting_visible ? [{
        id: N0,
        label: "Paint",
        icon: je.paintbrush_vertical_tool,
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
      ...d || nl(e.scene) ? [(() => {
        const { clip: g, offset: h } = x(e.scene.clip);
        return u("scene", e.scene, "Scene", je.box, g, h, { keyable: !1 });
      })()] : []
    ]
  };
}
function U2(e, t, r, n) {
  const i = F1(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const B2 = 4, Y2 = 0.25, A0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function C0(e) {
  return Object.hasOwn(A0, e);
}
function I0(e, t, r) {
  const { forward: n, right: i } = Ri(e.yaw_deg, 0), o = [0, 1, 2].map((a) => n[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(r > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * r / s) };
}
function q2() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = !1, n = 0;
  function i() {
    e.clear(), t = !1, r = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return C0(o) ? (e.size || (n = s), e.add(o), !0) : !1;
    },
    // Lets a held key go; false when it was not held.
    release(o) {
      return e.delete(o);
    },
    releaseAll: i,
    // Shift and Alt as a key event has them.
    modifiers(o) {
      t = !!o.shiftKey, r = !!o.altKey;
    },
    get held() {
      return e.size > 0;
    },
    direction() {
      const o = { forward: 0, right: 0, up: 0 };
      for (const s of e) {
        const [a, l] = A0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? B2 : 1) * (r ? Y2 : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - n) / 1e3;
      return n = Math.max(n, o), s;
    }
  };
}
const X2 = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), J2 = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function Z2(e) {
  var n;
  const t = e.viewTransition, r = (t == null ? void 0 : t.to) ?? {
    position: e.viewPosition,
    yaw_deg: e.viewYaw,
    pitch_deg: e.viewPitch,
    hFOV_deg: e.viewFov,
    distance: e.viewDistance
  };
  return {
    mode: e.mode,
    spaceMode: ((n = t == null ? void 0 : t.end) == null ? void 0 : n.mode) ?? e.spaceMode,
    position: [...r.position],
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    hFOV_deg: r.hFOV_deg,
    distance: r.distance,
    moved: t != null && t.end ? t.end.moved : e.viewMoved
  };
}
function Dp(e, t, r) {
  return Number.isFinite(e) && e >= t && e <= r;
}
function Q2(e, { frame: t }) {
  if (!e) return null;
  const { mode: r, spaceMode: n, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return X2.has(r) && (r !== "frame" || t) && J2.has(n) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Dp(s, -89.9, 89.9) && Dp(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
    mode: r,
    spaceMode: n,
    viewPosition: [...i],
    viewYaw: o,
    viewPitch: s,
    viewFov: a,
    viewDistance: l,
    viewMoved: c
  } : null;
}
const eA = 250, tA = 600, nA = 180, rA = 2;
function iA(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function qo(e, t, r) {
  return e + (t - e) * r;
}
function oA(e, t, r = 1) {
  const n = Math.max(
    Math.abs(nd(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / nA + i / rA);
  return Math.round(qo(eA, tA, o));
}
function sA(e, t, r) {
  const n = iA(Ie(r, 0, 1));
  return {
    position: e.position.map((i, o) => qo(i, t.position[o], n)),
    yaw_deg: Ht(e.yaw_deg + nd(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: qo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: qo(e.hFOV_deg, t.hFOV_deg, n),
    distance: qo(e.distance, t.distance, n)
  };
}
function aA(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(nd(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function lA(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return aA(e, t) ? null : { from: e, to: t, startTs: r, durationMs: oA(e, t, n), end: i };
}
function cA(e, t) {
  const r = Ie((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: sA(e.from, e.to, r), done: !1 };
}
function Sl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function uA(e, t, r) {
  const n = Sl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function dA(e) {
  const {
    app: t,
    cameraV2: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: s,
    runtime: a,
    sceneV2: l,
    shotEditor: c,
    state: d,
    stateV2: u,
    studio: f,
    viewController: m
  } = e;
  let x, g, h, _, te, G, re, T, W, $, U, ve, ye, de = null;
  function ge(me, J = null) {
    const fe = z();
    U(() => {
      i.viewTransition = lA(fe, me, performance.now(), { scale: b(), end: J });
    }), !i.viewTransition && J && le(J), m.state.inertia.active = !1, m.state.inertia.vx = 0, m.state.inertia.vy = 0, ve(), W({ localOnly: !0, reason: ft.VIEW });
  }
  function le(me) {
    ne(lu({ ...C(), moved: me.moved }, me.mode, w())), a.backgroundDirty = !0;
  }
  function _e() {
    i.viewTransition && (i.viewTransition = null, ve());
  }
  function Y(me, J) {
    ge({ ...z(), yaw_deg: me, pitch_deg: J });
  }
  function O() {
    return !f || ie() && !te();
  }
  function B() {
    return i.mode === "pano" && P();
  }
  function P() {
    return u && CS({ sceneLinked: l && !!Kl(s).scene, files: $(), stickers: d.stickers });
  }
  function M() {
    return i.spaceMode === "6dof" && B();
  }
  function F() {
    var me, J, fe;
    return Gw((fe = (J = (me = t.ui) == null ? void 0 : me.settings) == null ? void 0 : J.getSettingValue) == null ? void 0 : fe.call(J, Wg));
  }
  function C() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function ne(me) {
    i.spaceMode = me.mode, i.viewPosition = me.position, i.viewMoved = me.moved;
  }
  function Q(me) {
    var fe;
    const J = uA(i.spaceMode, i.viewTransition, me);
    if (J !== "keep") {
      if (J === "return") {
        ge({ ...z(), position: w(), distance: ((fe = se()) == null ? void 0 : fe.radius) || ar }, { mode: me, moved: !1 });
        return;
      }
      _e(), ne(lu({ ...C(), position: z().position }, me, w())), a.backgroundDirty = !0, ve(), W({ localOnly: !0, reason: ft.VIEW });
    }
  }
  function z() {
    var fe;
    const me = i.viewMoved ? i.viewDistance : ((fe = se()) == null ? void 0 : fe.radius) || ar, J = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: me };
    return xS(i.spaceMode, J, w());
  }
  function w() {
    return ie() ? A().position : [0, 0, 0];
  }
  function Z() {
    return r && d.camera !== null;
  }
  function ie() {
    return Z() && d.camera.visible;
  }
  function be() {
    return d.painting_visible !== !1;
  }
  function we(me) {
    return me.visible && _o(me.clip, i.frame);
  }
  function A() {
    return Ll(d.camera, i.frame);
  }
  function se() {
    var J;
    const me = x();
    return ((J = me.space ?? me.content) == null ? void 0 : J.sphere) ?? null;
  }
  function y(me) {
    i.viewPosition = me.position, i.viewYaw = me.yaw_deg, i.viewPitch = me.pitch_deg, i.viewDistance = me.distance, i.viewMoved = !0, a.backgroundDirty = !0, W({ localOnly: !0, reason: ft.VIEW });
  }
  function b() {
    var me;
    return ((me = se()) == null ? void 0 : me.radius) || ar;
  }
  function E() {
    var I;
    const me = x().space, J = g(), fe = i.worldSelectedId || i.selectedId, K = J.stickers.findIndex((q) => q.id === fe), p = K < 0 ? null : {
      sticker: J.stickers[K],
      value: Cs(J, i.frame).stickers[K],
      plane: me.stickers.find((q) => q.id === fe) ?? null,
      item: ((I = me.sticker) == null ? void 0 : I.id) === fe && me.sticker.url ? { kind: me.sticker.kind, box: o.sceneBox(me.sticker.url) } : null
    }, N = _() ? Se() : FS(se(), p);
    if (!N) return;
    const v = z();
    i.viewDistance = v.distance, i.viewMoved = !0, ge(AS(v, N, n.width, n.height));
  }
  function S(me) {
    return o.pickSurface(he(), me.x, me.y, n.width, n.height);
  }
  function j(me, J) {
    var fe;
    return cu(me, J, i.viewMoved ? null : (fe = se()) == null ? void 0 : fe.center, b());
  }
  function H() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function X(me, J) {
    const fe = performance.now(), K = { x: me.x, y: me.y, time: fe, key: o.contentRevision(), view: H() };
    if (!Rm(de, K)) {
      const N = S(me);
      de = { ...K, cost: performance.now() - fe, hit: N };
    }
    const p = z();
    y(zm(p, j(p, de.hit), J, b())), de.view = H(), de.wheelTime = fe;
  }
  function L(me, J, fe) {
    const K = z();
    i.interaction = me === "orbit" ? { kind: "space_orbit", last: J, pivot: j(K, S(J)) } : { kind: "space_pan", last: J, depth: Lm(K, b()) }, ye(J), n.setPointerCapture(fe);
  }
  function D() {
    return M() || G();
  }
  function k(me) {
    const J = T.elapsed(me);
    if (!J || i.viewTransition) return !1;
    const fe = T.speed(b()) * J;
    if (G()) return re(T.direction(), fe);
    if (!M()) return !1;
    const K = z(), p = I0(K, T.direction(), fe);
    return p === K ? !1 : (i.viewPosition = p.position, i.viewDistance = K.distance, i.viewMoved = !0, !0);
  }
  function R() {
    cl(s).view = Z2(i);
  }
  function ee() {
    const me = c && !k0({ hasShot: !!h(), erp: te() }).disabled, J = Q2(cl(s).view, { frame: me });
    J && Object.assign(i, J);
  }
  function ce(me) {
    return me * 0.2;
  }
  function Se() {
    return { center: A().position, radius: ce(b()) };
  }
  function ue(me, J) {
    const { yaw_deg: fe, pitch_deg: K } = Wm(me.position, J);
    return { ...me, yaw_deg: fe, pitch_deg: K };
  }
  function he() {
    return vd(z(), n.width, n.height, se());
  }
  return {
    connect(me) {
      ({
        editorViewInput: x,
        editorViewSceneState: g,
        getActiveCutoutShot: h,
        isCameraSelected: _,
        isErpCamera: te,
        isFreeFrameView: G,
        moveFrameByKeys: re,
        moveKeys: T,
        requestDraw: W,
        sceneFiles: $,
        startAnimation: U,
        syncFloatingViewButtonState: ve,
        updateCursor: ye
      } = me);
    },
    transitionView: ge,
    applyViewTransitionEnd: le,
    cancelViewTransition: _e,
    turnViewTo: Y,
    cameraPreviewShown: O,
    isSpaceView: B,
    hasSpaceContent: P,
    isFreeSpaceView: M,
    viewControls: F,
    spaceModeState: C,
    applySpaceMode: ne,
    setSpaceMode: Q,
    spaceViewState: z,
    spaceOrigin: w,
    hasCamera: Z,
    cameraShoots: ie,
    paintingShown: be,
    sceneStickerShown: we,
    cutoutCamera: A,
    contentSphere: se,
    setSpaceView: y,
    spaceScale: b,
    frameSpaceContent: E,
    zoomSpaceAt: X,
    startSpaceDrag: L,
    canKeyMove: D,
    stepKeyMove: k,
    saveView: R,
    restoreView: ee,
    currentSpaceCamera: he,
    cameraFrustumLength: ce,
    cameraSphere: Se,
    lookingAt: ue
  };
}
function fA(e) {
  const {
    canvas: t,
    editor: r,
    editorView: n,
    imageCache: i,
    readOnly: o,
    scheduler: s,
    state: a,
    stateV2: l,
    stillCanvas: c,
    videoEl: d
  } = e;
  let u, f, m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F, C, ne, Q, z, w, Z, ie, be, we = { revision: -1, sceneState: null }, A = null;
  function se() {
    return A || (A = E()), A;
  }
  function y() {
    A = null;
  }
  function b() {
    return we.sceneState;
  }
  function E() {
    const he = W(), me = m(), J = { ...a.assets };
    for (const xe of l ? [] : a.stickers) {
      const Ce = String((xe == null ? void 0 : xe.asset_id) || "");
      Ce && !J[Ce] && i.has(Ce) && (J[Ce] = { type: "comfy_image", filename: Ce });
    }
    const fe = l ? a.stickers.map((xe) => _e(xe) ? { ...xe, source: { kind: "file", filename: Q(xe) } } : xe) : a.stickers;
    we.revision !== s.stateRevision && (we = { revision: s.stateRevision, sceneState: ur({ ...a, stickers: fe, assets: J, painting: null }) }), l && S(we.sceneState);
    const K = Cs(we.sceneState, r.frame), p = O ? re() : null, N = (xe) => {
      if (l && !xe.visible) return null;
      if (O && de(xe)) return p;
      const Ce = U(xe);
      return Ce ? { media: Ce, revision: $(Ce) } : null;
    }, v = ie(), I = [...v.sky, ...Zm(we.sceneState, r.frame, a.stickers, { media: N, paintLayers: me, evaluated: K })], q = he && (he === d || he === c) ? d.dataset.panoSrc : he, pe = ye(he) ? { media: he, revision: $(he), coverage: f(), source: q } : null, V = ve(), oe = kS(M(), V, F());
    oe.mode !== r.spaceMode && h(), u(oe);
    const Pe = V ? j(we.sceneState, K, N, v) : null, Ae = le() ? { ...Pe, ...H(Pe) } : null;
    return { background: pe, layers: I, space: Ae, content: Pe };
  }
  function S(he) {
    const me = new Map(a.stickers.map((J) => [J.id, J.clip]));
    he.scene.clip = { ...a.scene.clip };
    for (const J of he.stickers) {
      const fe = me.get(J.id);
      fe && (J.clip = { ...fe });
    }
  }
  function j(he, me, J, fe) {
    const K = B(), p = Sd(K, me.scene), N = p != null && p.url ? n.sceneBox(p.url) : null, v = N && Pa(p.kind, N), I = ne(), q = Gm(I, he, me), pe = q != null && q.url ? n.sceneBox(q.url) : null, V = pe ? [{ box: Pa(q.kind, pe), value: q.value }] : [], oe = eg(he, r.frame, a.stickers, { media: J, evaluated: me });
    for (const { request: Ae, value: xe } of fe.items) {
      const Ce = Ae != null && Ae.url ? n.sceneBox(Ae.url) : null;
      Ce && V.push({ box: Pa(Ae.kind, Ce), value: xe });
    }
    const Pe = pu(ES(me, v, [...oe, ...fe.stickers], V));
    return {
      evaluated: me,
      sceneUrls: K ? K.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: Km(I, he),
      sticker: q,
      stickers: oe,
      upstreamStickers: fe.stickers,
      upstreamItems: fe.items,
      sphere: Pe
    };
  }
  function H(he) {
    var J;
    const me = ((J = he.sphere) == null ? void 0 : J.radius) || ar;
    return {
      gizmo: L() ? R() : X(he.evaluated),
      grid: r.showGrid && !r.fullscreen ? KS(me) : null,
      lines: g() ? k(me) : []
    };
  }
  function X(he) {
    const me = P(), J = he.stickers.find((fe) => fe.id === (me == null ? void 0 : me.id));
    return !be(me) || !(J != null && J.active) ? null : { mode: r.gizmoMode, transform: uu(J) };
  }
  function L() {
    return g() && r.selectedId === hd;
  }
  let D = { revision: -1, span: -1, segments: [] };
  function k(he) {
    const me = w();
    (D.revision !== s.stateRevision || D.span !== me) && (D = { revision: s.stateRevision, span: me, segments: US(BS(a, me)) });
    const { segments: J } = D, fe = J.length ? [{ segments: J, color: TN }] : [];
    if (!ge()) return fe;
    const K = L() ? g0 : FN;
    return [...fe, { segments: Um(te(), x(he)), color: K }];
  }
  function R() {
    return !ge() || !L() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: uu({ ...te(), scale: 1 }) };
  }
  function ee() {
    const { background: he, layers: me, space: J } = se(), fe = t.width, K = t.height, p = G({ x: 0, y: 0, w: fe, h: K });
    let N = !1;
    return !he && !me.length && !J ? (n.clear(460551), N = n.ready) : (n.clear(), N = !!n.render({
      rect: p,
      camera: J ? vd(C(), fe, K, J.sphere) : _(),
      background: he,
      layers: me,
      space: J
    })), z(), (r.worldSelectedId || L() || Y()) && Z(), N;
  }
  function ce(he) {
    const { content: me } = se();
    return !me || !he.position ? os(he) : jm(os(he), he.position, T(), me.sphere);
  }
  function Se(he, me, J, fe = null) {
    const { background: K, layers: p, content: N } = se();
    if (!K && !p.length && !N) return null;
    const v = N && me.position ? N : null;
    return n.render({ rect: he, camera: ce(me), background: K, layers: p, space: v, owner: J, clearColor: fe });
  }
  function ue(he) {
    return n.clear(460551), !!n.renderUnwrap({ rect: G(he), ...se() });
  }
  return {
    connect(he) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: m,
        cameraFrustumLength: x,
        cameraShoots: g,
        cancelViewTransition: h,
        currentViewCamera: _,
        cutoutCamera: te,
        deviceRect: G,
        followPortSticker: re,
        frameViewDistance: T,
        getConnectedErpImage: W,
        getMediaRevisionToken: $,
        getStickerImage: U,
        hasSpaceContent: ve,
        isDecodedImageReady: ye,
        isExternalSticker: de,
        isFreeSpaceView: ge,
        isSpaceView: le,
        isUploadingSticker: _e,
        isWorldMenuShown: Y,
        portVideo: O,
        sceneFiles: B,
        selectedWorldSticker: P,
        spaceModeState: M,
        spaceOrigin: F,
        spaceViewState: C,
        stickerFiles: ne,
        stickerImageKey: Q,
        syncFloatingViewButtonState: z,
        timelineSpanFrames: w,
        updateSelectionMenu: Z,
        upstreamViewInput: ie,
        worldStickerEditable: be
      } = he);
    },
    editorViewInput: se,
    endEditorViewFrame: y,
    editorViewSceneState: b,
    isCameraSelected: L,
    renderEditorView: ee,
    shotViewCamera: ce,
    drawEditorViewShot: Se,
    renderEditorViewUnwrap: ue
  };
}
function pA(e) {
  const {
    comfyMedia: t,
    editor: r,
    mediaAssetSource: n,
    mediaSource: i,
    node: o,
    state: s,
    studio: a
  } = e;
  let l, c, d, u, f = { list: null, entries: [], fps: null };
  const m = /* @__PURE__ */ new Map(), x = () => u({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA });
  function g(Y) {
    if (!Y) return null;
    let O = m.get(Y);
    return O || (O = new Image(), O.onload = x, O.onerror = x, O.src = Y, m.set(Y, O)), O;
  }
  function h({ sceneState: Y, ui: O }) {
    return [
      ...Y.stickers.filter((B) => B.source.kind !== "port").map((B) => n(il(B.source))),
      i(Lr(O, go)[0] || null),
      ...Y.painting.raster_objects.map((B) => B.rasterDataUrl)
    ].filter(Boolean);
  }
  function _() {
    return a && (Yf(o, "scene") === _0 || !!te());
  }
  function te() {
    const Y = a && Kt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, O = Array.isArray(Y) ? Y : null;
    if (f.list !== O) {
      f.entries.forEach(le), f = { list: O, entries: O ? o2(O).map((P) => ({ layer: P })) : [], fps: null };
      const B = new Set(f.entries.flatMap((P) => h(P.layer)));
      for (const P of [...m.keys()]) B.has(P) || m.delete(P);
    }
    return O && f.fps !== s.timeline.fps && G(), O && f.entries;
  }
  function G() {
    if (!f.list) return;
    const Y = d2(f.entries.map((O) => O.layer), s.upstream, s.timeline.fps);
    f.entries.forEach((O, B) => {
      O.working = Y[B];
    }), f.fps = s.timeline.fps;
  }
  function re() {
    if (!te()) return 0;
    const [Y] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(Y) > 0 ? Number(Y) : 0;
  }
  function T() {
    if (!a) return "";
    const Y = te();
    if (l2(Yf(o, "scene"), Y)) return "Run the workflow to show the upstream scene.";
    if (!Y) return "";
    const O = t.uiList(o, "pano_sticker_warnings");
    return String(O.find((B) => String(B).startsWith(a2)) ?? "");
  }
  function W(Y, O, B) {
    const { ui: P } = Y.layer, M = s.timeline.fps, F = Lr(P, m0)[0], C = Lr(P, h0).map(i).filter(Boolean), ne = i(Lr(P, p0)[0] || null), Q = F && typeof F == "object" ? C.length ? { frames: C, meta: F } : ne ? { src: ne, meta: F } : null : null, z = g(i(Lr(P, go)[0] || null)), w = Q ? Md(O.clip, B, M, Q.meta) : null;
    let Z = z;
    if (Q != null && Q.frames)
      Y.frames || (Y.frames = Nd({
        createImage: (ie, be) => {
          const we = new Image();
          return we.onload = be, we.onerror = be, we.src = ie, we;
        },
        onLoad: x
      })), Z = Y.frames.picture(Q.frames, w, Q.meta, z);
    else if (Q != null && Q.src) {
      const ie = $(Y);
      ie.follow({ src: Q.src, time: w, playing: d.advancing, fps: M }), Z = ie.picture(Y.still, z);
    }
    return Z ? { media: Z, revision: c(Z), source: Pd(Q, z) } : null;
  }
  function $(Y) {
    if (Y.follower) return Y.follower;
    const O = As(document, "editor.upstream-port-video");
    O.playsInline = !0, O.preload = "auto";
    const B = rn({ label: "editor.upstream-port-still" });
    return B.__panoFrameIdx = 0, Y.video = O, Y.still = B, Y.follower = Od({
      video: O,
      onCapture: () => {
        var F;
        const P = Number(O.videoWidth || 0), M = Number(O.videoHeight || 0);
        P < 1 || M < 1 || (B.width = P, B.height = M, (F = B.getContext("2d")) == null || F.drawImage(O, 0, 0), B.__panoFrameIdx += 1, x());
      },
      onChange: x
    }), Y.follower;
  }
  function U(Y, O, B) {
    if (O.source.kind === "port") return W(Y, O, B);
    const P = g(n(il(O.source)));
    return P ? { media: P, revision: c(P) } : null;
  }
  function ve(Y) {
    var z;
    const { sceneState: O } = Y.working, { painting: B } = O, P = B.paint.strokes.length + B.mask.strokes.length;
    if (!O.painting_visible || !P && !B.raster_objects.length) return [];
    const M = l(), F = `${M.width}x${M.height}`;
    Y.paintSize !== F && (de(Y), Y.paintSize = F, Y.paintEngine = P ? Tl(M) : null, (z = Y.paintEngine) == null || z.rebuildCommitted({ painting: B }), Y.rasters = /* @__PURE__ */ new Map());
    const C = Y.paintEngine, ne = (C == null ? void 0 : C.getMaskDisplayCanvas()) || null, Q = [];
    for (const w of c2(O, C ? C.getAllGroupIds() : [], !!ne)) {
      const Z = w.kind === "group" ? C == null ? void 0 : C.getGroupDisplayCanvas(w.id) : w.kind === "mask" ? ne : ye(Y, w.item, M);
      Z && Q.push({ id: `${w.kind}:${w.id}`, media: Z, revision: F, opacity: 1, zIndex: w.zIndex });
    }
    return Q;
  }
  function ye(Y, O, { width: B, height: P }) {
    if (Y.rasters.has(O.id)) return Y.rasters.get(O.id);
    const M = g(O.rasterDataUrl);
    if (!M.complete || !M.naturalWidth) return null;
    const F = rn({ label: "editor.upstream-raster-erp", width: B, height: P }), C = F.getContext("2d");
    return C ? (y0(C, M, O, B, P), Y.rasters.set(O.id, F), F) : null;
  }
  function de(Y) {
    var O;
    (O = Y.rasters) == null || O.forEach((B) => fs(B)), Y.rasters = null, Y.paintEngine = null, Y.paintSize = null;
  }
  function ge() {
    const Y = te() ?? [], O = { sky: [], stickers: [], items: [] }, B = r.frame;
    return Y.forEach((P) => {
      const M = f2(P.working, P.working.key, B, {
        media: (F) => U(P, F, B),
        paintLayers: ve(P),
        source: i
      });
      O.sky.push(...M.sky), O.stickers.push(...M.stickers), O.items.push(...M.items);
    }), O;
  }
  function le(Y) {
    var O;
    (O = Y.follower) == null || O.dispose(), Y.still && fs(Y.still), de(Y);
  }
  function _e() {
    f.entries.forEach(le), f = { list: null, entries: [], fps: null }, m.clear();
  }
  return {
    connect(Y) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = Y);
    },
    upstreamEntries: te,
    upstreamLinked: _,
    upstreamNotice: T,
    upstreamSpanFrames: re,
    upstreamViewInput: ge,
    rebuildUpstreamWorking: G,
    disposeUpstream: _e
  };
}
const Tu = "camera_preview";
function hA(e) {
  return e === Tu ? ft.SPLAT_PREVIEW : ft.SPLAT_STAGE;
}
function mA(e) {
  return [...e].some((t) => t !== ft.VIEW && t !== ft.OVERLAY && t !== ft.SPLAT_STAGE);
}
function E0(e, t = !1) {
  const r = Ie(Li(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function gA(e) {
  const {
    backgroundCanvas: t,
    cutoutPreviewCanvas: r,
    cutoutPreviewHost: n,
    editor: i,
    editorView: o,
    runtime: s,
    shotEditor: a,
    studio: l,
    uiState: c
  } = e;
  let d, u, f, m, x = null, g = !1, h = !1;
  function _() {
    g && (g = !1, o.releaseSplats(Tu));
  }
  function te() {
    x = null, h = !1, _();
  }
  function G(ve) {
    if (!n || !ve) return !1;
    const ye = n.closest(".pano-camera-preview");
    if (!ye) return !1;
    const de = Math.round(Number(ye.clientWidth || n.clientWidth || 0)), ge = Math.round(Number(ye.clientHeight || n.clientHeight || 0));
    return Math.abs(de - Number(ve.width || 0)) <= 1 && Math.abs(ge - Number(ve.height || 0)) <= 1;
  }
  function re(ve, ye) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, te();
      return;
    }
    const de = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !de || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = de ? "Preview unavailable" : "Add Frame to preview", te();
      return;
    }
    const ge = E0(de, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = ge.width, c.cameraPreview.height = ge.height, h) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, _();
      return;
    }
    const le = window.devicePixelRatio || 1, _e = Math.max(1, ge.width * le), Y = Math.max(1, ge.height * le), O = Math.min(1, t.width / _e, t.height / Y), B = { width: Math.max(1, Math.floor(_e * O)), height: Math.max(1, Math.floor(Y * O)) }, P = !x || x.width !== B.width || x.height !== B.height || mA(ye);
    if (ve && P) {
      g = !0;
      const F = u({ x: 0, y: t.height - B.height, w: B.width, h: B.height }, de, Tu);
      x = F ? B : null, F && U(F);
    }
    if (!x) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = m() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const M = G(ge);
    c.cameraPreview.ready = !0, c.cameraPreview.label = M ? "" : "Loading preview", c.cameraPreview.settled = M && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function T() {
    x = null, h = !1;
  }
  let W = 0, $ = !1;
  function U(ve) {
    const ye = ++W;
    createImageBitmap(ve.canvas, ve.x, ve.y, ve.width, ve.height).then((de) => {
      var ge;
      if (ye !== W || !s.running) {
        de.close();
        return;
      }
      (ge = r.getContext("bitmaprenderer")) == null || ge.transferFromImageBitmap(de);
    }).catch((de) => {
      ye !== W || !s.running || (h = !0, x = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !$ && ($ = !0, console.error("[PanoramaStickers] camera preview frame failed", de)));
    });
  }
  return {
    connect(ve) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: m
      } = ve);
    },
    drawCutoutOutputPreview: re,
    forgetCameraPreviewFrame: T
  };
}
function yA(e) {
  const {
    cameraV2: t,
    canvas: r,
    ctx: n,
    editor: i,
    editorView: o,
    frameGateCssRadius: s,
    runtime: a,
    shotEditor: l,
    studio: c,
    type: d
  } = e;
  let u, f, m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F, C, ne, Q, z, w, Z, ie, be, we, A, se, y;
  function b(J) {
    const fe = r.width, K = r.height, p = U();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, fe, K), Z(), J && (a.backgroundDirty = !we(p)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let v = 0; v <= 16; v += 1) {
        const I = p.x + p.w * v / 16;
        n.beginPath(), n.moveTo(I, p.y), n.lineTo(I, p.y + p.h), n.stroke();
      }
      for (let v = 0; v <= 8; v += 1) {
        const I = p.y + p.h * v / 8;
        n.beginPath(), n.moveTo(p.x, I), n.lineTo(p.x + p.w, I), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(p.x, p.y + p.h / 2), n.lineTo(p.x + p.w, p.y + p.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const N = p.y + p.h * 0.57;
      n.fillText("Left", p.x + p.w * 0.25, N), n.fillText("Front", p.x + p.w * 0.5, N), n.fillText("Right", p.x + p.w * 0.75, N), n.fillText("Back", p.x + 38, N), n.fillText("Back", p.x + p.w - 38, N);
    }
  }
  function E(J, fe, K = 1) {
    let p = !1;
    n.strokeStyle = fe, n.lineWidth = K, n.beginPath();
    for (const N of J) {
      const v = ne(N);
      if (!v) {
        p = !1;
        continue;
      }
      p ? n.lineTo(v.x, v.y) : (n.moveTo(v.x, v.y), p = !0);
    }
    n.stroke();
  }
  function S(J) {
    const fe = r.width, K = r.height;
    if (n.clearRect(0, 0, fe, K), Z(), J && (a.backgroundDirty = !be()), i.showGrid && !i.fullscreen && g().space)
      j();
    else if (i.showGrid && !i.fullscreen) {
      for (let N = -180; N <= 180; N += 15) {
        const v = [];
        for (let I = -89; I <= 89; I += 4) v.push(Dn(N, I));
        E(v, "#3f3f46", N % 90 === 0 ? 1.3 : 1);
      }
      for (let N = -75; N <= 75; N += 15) {
        const v = [];
        for (let I = -180; I <= 180; I += 4) v.push(Dn(I, N));
        E(v, N === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", N === 0 ? 1.5 : 1);
      }
      const p = [
        { name: "Left", dir: Dn(-90, 0) },
        { name: "Front", dir: Dn(0, 0) },
        { name: "Right", dir: Dn(90, 0) },
        { name: "Back", dir: Dn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", p.forEach((N) => {
        const v = ne(N.dir);
        v && n.fillText(N.name, v.x, v.y + 24);
      });
    }
  }
  function j() {
    const J = vd(y(), r.width, r.height, f()), fe = bs(J, [0, 0, 0], r.width, r.height);
    fe && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", fe.x, fe.y - 12));
  }
  function H(J, fe) {
    const K = C(J), p = Dn(Number(K.yaw_deg || 0), Number(K.pitch_deg || 0)), N = i.mode === "unwrap" ? Q(p) : null, v = N ? N.x : null, I = i.mode === "pano" ? 28 : 20, q = [
      A(J, 0, I, v),
      A(J, 1, I, v),
      A(J, 2, I, v),
      A(J, 3, I, v)
    ];
    Td(n, q, { selected: fe });
  }
  function X(J, fe = []) {
    if (!(!J || !Array.isArray(fe) || fe.length < 4)) {
      J.beginPath(), J.moveTo(fe[0].x, fe[0].y);
      for (let K = 1; K < 4; K += 1) J.lineTo(fe[K].x, fe[K].y);
      J.closePath();
    }
  }
  function L(J, fe, K) {
    const p = Array.isArray(J == null ? void 0 : J.corners) ? J.corners : [];
    if (p.length < 4) return;
    const N = Ie(Number((J == null ? void 0 : J.visibilityAlpha) ?? 1), 0, 1);
    if (N <= 0.01) return;
    const v = n.globalAlpha;
    n.globalAlpha = v * N;
    const I = K ? "rgba(255, 116, 116, 0.96)" : fe ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", q = K ? "rgba(255, 89, 89, 0.08)" : fe ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", pe = fe ? 3.2 : 2.6;
    X(n, p), n.fillStyle = q, n.fill(), n.strokeStyle = I, n.lineWidth = pe, n.stroke(), n.save(), n.strokeStyle = I, n.lineWidth = fe ? 3.2 : 2.6, n.lineCap = "round";
    const V = Array.isArray(J == null ? void 0 : J.edgeMidpoints) && J.edgeMidpoints.length >= 4 ? J.edgeMidpoints : [
      { edge: "top", x: (p[0].x + p[1].x) * 0.5, y: (p[0].y + p[1].y) * 0.5 },
      { edge: "right", x: (p[1].x + p[2].x) * 0.5, y: (p[1].y + p[2].y) * 0.5 },
      { edge: "bottom", x: (p[2].x + p[3].x) * 0.5, y: (p[2].y + p[3].y) * 0.5 },
      { edge: "left", x: (p[3].x + p[0].x) * 0.5, y: (p[3].y + p[0].y) * 0.5 }
    ], oe = { top: "bottom", right: "left", bottom: "top", left: "right" }, Pe = fe ? 12 : 9;
    V.forEach((Ae) => {
      const Ce = V.find((Re) => (Re == null ? void 0 : Re.edge) === oe[Ae == null ? void 0 : Ae.edge]) || {
        x: (p[0].x + p[1].x + p[2].x + p[3].x) * 0.25,
        y: (p[0].y + p[1].y + p[2].y + p[3].y) * 0.25
      }, $e = Ce.x - Ae.x, ze = Ce.y - Ae.y, Ge = Math.hypot($e, ze) || 1;
      n.beginPath(), n.moveTo(Ae.x, Ae.y), n.lineTo(Ae.x + $e / Ge * Pe, Ae.y + ze / Ge * Pe), n.stroke();
    }), n.restore(), n.globalAlpha = v;
  }
  function D(J, fe, K, p) {
    const N = Ie(Number((fe == null ? void 0 : fe.visibilityAlpha) ?? 1), 0, 1);
    if (N <= 0.01) return;
    if (B(J)) {
      L(fe, K, p);
      return;
    }
    if (P(J)) {
      const I = n.globalAlpha;
      n.globalAlpha = I * $(J) * N, i.mode === "frame" ? (n.strokeStyle = K ? "rgba(250, 250, 250, 0.9)" : p ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = K ? 2 : 1, X(n, fe.corners), n.stroke()) : H(J, K), n.globalAlpha = I;
      return;
    }
    const v = n.globalAlpha;
    n.globalAlpha = v * N, n.fillStyle = K ? "rgba(0, 112, 243, 0.24)" : p ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", X(n, fe.corners), n.fill(), n.strokeStyle = K ? "rgba(255, 255, 255, 1)" : p ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = K ? 2.8 : 1.9, X(n, fe.corners), n.stroke(), n.globalAlpha = v;
  }
  function k(J, fe, K) {
    if (P(J)) {
      Gg(n, fe, { accent: K });
      return;
    }
    const p = !(B(J) && ye());
    n.fillStyle = K, p && fe.corners.forEach((N) => {
      n.beginPath(), n.arc(N.x, N.y, 6.5, 0, Math.PI * 2), n.fill();
    }), p && B(J) && (n.strokeStyle = K, n.lineCap = "round", n.lineWidth = 4, fe.edgeMidpoints.forEach((N) => {
      var Pe, Ae, xe, Ce;
      const v = (((Pe = N.b) == null ? void 0 : Pe.x) ?? N.x) - (((Ae = N.a) == null ? void 0 : Ae.x) ?? N.x), I = (((xe = N.b) == null ? void 0 : xe.y) ?? N.y) - (((Ce = N.a) == null ? void 0 : Ce.y) ?? N.y), q = Math.hypot(v, I) || 1, pe = v / q, V = I / q, oe = 10;
      n.beginPath(), n.moveTo(N.x - pe * oe, N.y - V * oe), n.lineTo(N.x + pe * oe, N.y + V * oe), n.stroke();
    }), n.lineCap = "butt"), M(J) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(fe.rotateStemBase.x, fe.rotateStemBase.y), n.lineTo(fe.rotateHandle.x, fe.rotateHandle.y), n.stroke(), n.fillStyle = K, n.beginPath(), n.arc(fe.rotateHandle.x, fe.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function R() {
    var v;
    const J = i.mode === "frame" ? [] : W(), fe = J.length > 1, K = l ? _() : re(), p = K.map((I) => `${String((I == null ? void 0 : I.id) || "")}:${B(I) ? "frame" : Number((I == null ? void 0 : I.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== K || i._sortedItemsCache.orderKey !== p) && (i._sortedItemsCache = {
      src: K,
      orderKey: p,
      sorted: [...K]
    });
    const N = i._sortedItemsCache.sorted;
    for (const I of N) {
      const q = i.mode !== "frame" && !fe && _e(I);
      if (i.mode === "frame" && !q) continue;
      const pe = P(I), V = B(I), oe = le(I);
      if (!pe && !V || O(I) && !se(I)) continue;
      const Pe = F(I);
      if (d !== "stickers" && !Pe.visible)
        continue;
      const Ae = Ie(Number((Pe == null ? void 0 : Pe.visibilityAlpha) ?? 1), 0, 1);
      if (Ae <= 0.01) continue;
      const xe = V && l && i.mode === "pano" ? Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= xe, D(I, Pe, q, oe), q && Pe.visible) {
        const Ce = oe ? "#ff4d4f" : pe && de(I) ? "#f59e0b" : "#0070f3", $e = n.globalAlpha;
        n.globalAlpha = $e * Ae, k(I, Pe, Ce), n.globalAlpha = $e;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !h() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const I = i.cutoutPanoFrameVisual, q = Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= q, L(I.geom, I.selected, I.locked), I.selected && k(
        I.item,
        I.geom,
        I.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (fe) {
      const I = T(J);
      if (I != null && I.visible) {
        const q = u(J) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(I.corners[0].x, I.corners[0].y);
        for (let pe = 1; pe < I.corners.length; pe += 1) n.lineTo(I.corners[pe].x, I.corners[pe].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = q, I.corners.forEach((pe) => {
          n.beginPath(), n.arc(pe.x, pe.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      J.forEach((I) => {
        if (!M(I) && !Y(I)) return;
        const q = F(I);
        if (!(q != null && q.visible)) return;
        const pe = le(I) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(q.corners[0].x, q.corners[0].y);
        for (let V = 1; V < q.corners.length; V += 1) n.lineTo(q.corners[V].x, q.corners[V].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = pe, q.corners.forEach((V) => {
          n.beginPath(), n.arc(V.x, V.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((v = i.interaction) == null ? void 0 : v.kind) === "marquee_select") {
      const I = ie(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(I.x0, I.y0, I.x1 - I.x0, I.y1 - I.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function ee(J) {
    const fe = h(), K = te(fe);
    if (!fe || !K)
      return n.clearRect(0, 0, r.width, r.height), J && o.clear(657930), !1;
    const p = { x: K.x, y: K.y, w: K.w, h: K.h }, { rect: N, shot: v } = qm(fe, K, { width: r.width, height: r.height }), I = ce(p);
    if (n.clearRect(0, 0, r.width, r.height), J) {
      o.clear(657930);
      const q = m(N), pe = !!x(q, v, void 0, 657930);
      pe || o.clear(1118481, q), a.backgroundDirty = !pe;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(p.x, p.y, p.w, p.h, I), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = g0, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(p.x + 1, p.y + 1, p.w - 2, p.h - 2, Math.max(0, I - 1)), n.stroke(), n.restore(), !0;
  }
  function ce(J) {
    const fe = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * fe, Number((J == null ? void 0 : J.w) || 0) * 0.5, Number((J == null ? void 0 : J.h) || 0) * 0.5);
  }
  function Se() {
    var pe, V;
    if (((pe = i.interaction) == null ? void 0 : pe.kind) !== "paint_lasso_fill") return;
    const J = i.interaction.stroke, fe = (V = J == null ? void 0 : J.geometry) == null ? void 0 : V.points;
    let K;
    if (i.mode === "frame") {
      const oe = h(), Pe = G(oe);
      K = z(fe, oe, Pe);
    } else
      K = w(fe);
    if (!Array.isArray(K) || K.length < 3) return;
    const p = String((J == null ? void 0 : J.layerKind) || "") === "mask", N = (J == null ? void 0 : J.color) || { r: 1, g: 0.25, b: 0.25 }, v = Math.round(Number(N.r || 0) * 255), I = Math.round(Number(N.g || 0) * 255), q = Math.round(Number(N.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(K[0].x || 0), Number(K[0].y || 0));
    for (let oe = 1; oe < K.length; oe++) n.lineTo(Number(K[oe].x || 0), Number(K[oe].y || 0));
    n.closePath(), p ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${v},${I},${q},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function ue() {
    const J = i.frameRollOverlayVisual, fe = Ie(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(J != null && J.shot) || fe <= 1e-4) return;
    const K = G(J.shot);
    if (!K) return;
    const p = { x: K.x + K.w * 0.5, y: K.y + K.h * 0.5 }, N = Number(J.shot.roll_deg ?? J.shot.rot_deg ?? 0) * xr, v = Math.hypot(K.w, K.h) * 0.55, I = Math.cos(N) * v, q = Math.sin(N) * v;
    n.save(), n.globalAlpha *= fe, n.beginPath(), n.rect(K.x, K.y, K.w, K.h), n.clip(), n.translate(p.x, p.y), n.rotate(N);
    const pe = Math.max(12, Math.min(K.w, K.h) / 6);
    n.beginPath();
    for (let V = -v; V <= v; V += pe)
      n.moveTo(V, -v), n.lineTo(V, v);
    for (let V = -v; V <= v; V += pe)
      n.moveTo(-v, V), n.lineTo(v, V);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(p.x - I, p.y - q), n.lineTo(p.x + I, p.y + q), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function he() {
    return !l || !h() || t && ge() || c && !ve() ? 0 : RN;
  }
  function me() {
    const J = Ie(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (J <= 1e-4 || !l || i.mode !== "pano") return;
    const fe = h(), K = fe ? F(fe) : null, p = Array.isArray(K == null ? void 0 : K.corners) && K.corners.length >= 4 ? K.corners.map((I) => ({ x: Number(I.x || 0), y: Number(I.y || 0) })) : null;
    K != null && K.visible && p && (i.cutoutPanoDimCorners = p), fe && (K != null && K.visible) && p && (i.cutoutPanoFrameVisual = {
      item: fe,
      geom: K,
      selected: _e(fe),
      locked: le(fe)
    });
    const N = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, v = K != null && K.visible ? p : N ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${J})`, n.beginPath(), n.rect(0, 0, r.width, r.height), v.length >= 4) {
      n.moveTo(v[0].x, v[0].y);
      for (let I = 1; I < 4; I += 1) n.lineTo(v[I].x, v[I].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(J) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: m,
        drawEditorViewShot: x,
        editorViewInput: g,
        getActiveCutoutShot: h,
        getCutoutSelectableItemsForDisplay: _,
        getFrameViewLayout: te,
        getFrameViewRect: G,
        getList: re,
        getMultiSelectionGeom: T,
        getSelectedItems: W,
        getStickerDisplayAlpha: $,
        getUnwrapRect: U,
        isCameraSelected: ve,
        isErpCamera: ye,
        isExternalSticker: de,
        isFreeSpaceView: ge,
        isItemLocked: le,
        isItemSelected: _e,
        isRasterObjectItem: Y,
        isSceneSticker: O,
        isShotItem: B,
        isStickerItem: P,
        isStrokeGroupItem: M,
        objectGeom: F,
        poseOf: C,
        projectDir: ne,
        projectDirUnwrap: Q,
        projectErpLassoPointsToFrameRect: z,
        projectLassoPointsToCurrentView: w,
        rebuildPaintEngineIfNeeded: Z,
        rectFromPoints: ie,
        renderEditorView: be,
        renderEditorViewUnwrap: we,
        sampleStickerEdge: A,
        sceneStickerShown: se,
        spaceViewState: y
      } = J);
    },
    drawGridUnwrap: b,
    drawGridPano: S,
    drawObjects: R,
    drawFrameViewBackground: ee,
    drawLassoOutlineOverlay: Se,
    drawFrameRollOverlay: ue,
    getCutoutPanoDimTarget: he,
    drawCutoutPanoPassepartout: me
  };
}
function bA(e) {
  const {
    app: t,
    backgroundCanvas: r,
    canvas: n,
    editor: i,
    editorView: o,
    node: s,
    readOnly: a,
    runtime: l,
    scheduler: c,
    shotEditor: d,
    stageWrap: u,
    state: f,
    timeline: m,
    type: x,
    uiState: g,
    viewController: h
  } = e;
  let _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F, C, ne, Q, z, w, Z, ie, be = () => {
  };
  function we(he = /* @__PURE__ */ new Set()) {
    ye();
    const me = l.backgroundDirty;
    d && (M(), te(me, he)), i.mode === "frame" ? (l.frameSafeRect = O(), T(me)) : i.mode === "unwrap" ? $(me) : W(me), G(), ve(), Q(), U(), re(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && Z(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const J = _e();
    g.stageStatus = J.status, g.stageStatusDetail = J.detail, g.stageNotice = ie(), J.status === nr ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", J.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function A(he = i.interaction) {
    if (x !== "stickers" || i.mode !== "pano") return !1;
    const me = String((he == null ? void 0 : he.kind) || "");
    return me === "move" || me === "scale" || me === "scale_x" || me === "scale_y" || me === "rotate" ? !0 : me === "move_multi" ? Array.isArray(he == null ? void 0 : he.stickerSnapshots) && he.stickerSnapshots.length > 0 : !1;
  }
  function se() {
    return !!i.interaction || !!m.drag;
  }
  function y() {
    l.nodePreviewPending = !1;
    const he = Hn(s);
    he.liveState = f, he.liveStateVersion += 1, le();
  }
  function b(he = {}) {
    var I, q, pe, V, oe, Pe, Ae, xe;
    const me = he.reason ?? ft.STATE, J = !!he.localOnly, fe = he.externalSync === !0, K = String(he.cause || ""), p = String(((I = i.interaction) == null ? void 0 : I.kind) || "");
    (!J || p === "view" || p === "pan_frame" || A() || !!i.viewTransition || K === "mode" || K === "frame_view" || K === "cutout_frame") && (l.backgroundDirty = !0), J && Y() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!J || K === "selection" || K === "mode" || K === "cutout_frame") && (z(), w()), se() ? l.nodePreviewPending = !0 : y(), fe && ((pe = (q = St(s).dom) == null ? void 0 : q.requestDraw) == null || pe.call(q), (V = s.setDirtyCanvas) == null || V.call(s, !0, !1)), fe && !J && ((Pe = (oe = s.graph) == null ? void 0 : oe.setDirtyCanvas) == null || Pe.call(oe, !0, !0), (xe = (Ae = t == null ? void 0 : t.canvas) == null ? void 0 : Ae.setDirty) == null || xe.call(Ae, !0, !0)), c.requestDraw(me);
  }
  function E() {
    const he = n.getBoundingClientRect(), me = Math.max(2, Math.round(he.width)), J = Math.max(2, Math.round(he.height)), fe = window.devicePixelRatio || 1, K = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== me || n.height !== J) && (n.width = me, n.height = J);
    const p = YS(he.width || me, he.height || J, fe, window.innerWidth || he.width, window.innerHeight || he.height);
    return o.resize(p.width, p.height), [n.width, n.height, r.width, r.height].join("x") === K ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && S(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function S(he) {
    he(), c.wake();
  }
  function j() {
    return !!i.viewTransition || B.held || !!h.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || se();
  }
  function H(he = performance.now(), me = /* @__PURE__ */ new Set()) {
    var N;
    l.nodePreviewPending && !se() && y(), me.forEach((v) => l.reasons.add(v)), me.size && (l.dirty = !0), [...me].some((v) => v !== ft.OVERLAY) && (l.backgroundDirty = !0), C(), l.lastTickTs > 0 ? Math.max(1e-3, (he - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = he;
    const J = i.mode === "frame" && ((N = i.interaction) == null ? void 0 : N.kind) === "roll_frame" ? i.interaction : null;
    J != null && J.shot && (i.frameRollOverlayVisual = { shot: J.shot });
    const fe = J ? 1 : 0;
    if (Math.abs(fe - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = fe, i.frameRollOverlayStartTs = he), Math.abs(Number(i.frameRollOverlayAlpha || 0) - fe) > 1e-6) {
      const v = Ie(
        (he - Number(i.frameRollOverlayStartTs || he)) / VN,
        0,
        1
      );
      i.frameRollOverlayAlpha = Bn(
        Number(i.frameRollOverlayFrom || 0),
        fe,
        Dc(v)
      ), v >= 1 && (i.frameRollOverlayAlpha = fe, fe === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const K = ge();
    if (Math.abs(K - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = K, i.cutoutPanoDimStartTs = he), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - K) > 1e-6) {
      const v = Ie(
        (he - Number(i.cutoutPanoDimStartTs || he)) / Cp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Bn(
        Number(i.cutoutPanoDimFrom || 0),
        K,
        Dc(v)
      ), v >= 1 && (i.cutoutPanoDimAlpha = K), v >= 1 && K === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const p = d && de() ? 1 : 0;
    if (Math.abs(p - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = p, i.cutoutPanoFrameStartTs = he), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const v = Ie(
        (he - Number(i.cutoutPanoFrameStartTs || he)) / Cp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Bn(
        Number(i.cutoutPanoFrameFrom || 0),
        p,
        Dc(v)
      ), v >= 1 && (i.cutoutPanoFrameAlpha = p, p === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const v = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), I = Ie((he - Number(i.outputPreviewAnimStartTs || 0)) / v, 0, 1), pe = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? jN(I) : GN(I);
      i.outputPreviewAnim = Bn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, pe), l.dirty = !0, I >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: v, done: I } = cA(i.viewTransition, he);
      if (i.viewPosition = v.position, i.viewYaw = v.yaw_deg, i.viewPitch = v.pitch_deg, i.viewFov = v.hFOV_deg, i.viewDistance = v.distance, I) {
        const { end: q } = i.viewTransition;
        i.viewTransition = null, q && _(q), ne();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (F(he) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, h.stepInertia(he) && (i.viewInertia.vx = Number(h.state.inertia.vx || 0), i.viewInertia.vy = Number(h.state.inertia.vy || 0), i.viewInertia.active = !!h.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const v = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), we(v);
    }
  }
  function X(he) {
    try {
      he();
    } catch (me) {
      const J = String((me == null ? void 0 : me.stack) || (me == null ? void 0 : me.message) || me || "unknown editor frame error");
      l.tickErrorSignature !== J && (l.tickErrorSignature = J, console.error("[PanoramaStickers] editor frame failed", me)), g.stageStatus = Yn, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function L(he = performance.now(), me = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const J = uv();
    X(() => H(he, me)), dv(J);
  }
  function D() {
    !l.running || !E() || X(() => {
      l.dirty = !1, we(/* @__PURE__ */ new Set([ft.RESIZE]));
    });
  }
  const k = new ResizeObserver(D);
  let R = null;
  function ee() {
    R == null || R.removeEventListener("change", ce), R = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), R.addEventListener("change", ce);
  }
  function ce() {
    ee(), D();
  }
  function Se() {
    be = cv("editor", () => {
      var he;
      return {
        type: x,
        readOnly: a,
        mode: i.mode,
        interaction: ((he = i.interaction) == null ? void 0 : he.kind) ?? null,
        timelineDrag: !!m.drag,
        playing: !!P.playing
      };
    });
  }
  function ue() {
    be(), l.running = !1, c.stop(), k.disconnect(), R.removeEventListener("change", ce);
  }
  return {
    connect(he) {
      ({
        applyViewTransitionEnd: _,
        drawCutoutOutputPreview: te,
        drawCutoutPanoPassepartout: G,
        drawFrameRollOverlay: re,
        drawFrameViewBackground: T,
        drawGridPano: W,
        drawGridUnwrap: $,
        drawLassoOutlineOverlay: U,
        drawObjects: ve,
        endEditorViewFrame: ye,
        getActiveCutoutShot: de,
        getCutoutPanoDimTarget: ge,
        getSharedLivePaintSurface: le,
        getStageImageStatus: _e,
        isPaintCompositeInteraction: Y,
        measureFrameSafeRect: O,
        moveKeys: B,
        playback: P,
        rebuildPaintEngineIfNeeded: M,
        stepKeyMove: F,
        syncCutoutShot: C,
        syncFloatingViewButtonState: ne,
        syncFrameRollKnob: Q,
        syncLookAtFrameButtonState: z,
        syncViewToggleState: w,
        updateSelectionMenu: Z,
        upstreamNotice: ie
      } = he);
    },
    requestDraw: b,
    syncCanvasSize: E,
    startAnimation: S,
    editorAnimating: j,
    tick: L,
    stageResizeObserver: k,
    watchPixelRatio: ee,
    sampleEditorDiagnostics: Se,
    stopRenderLoop: ue
  };
}
function vA(e) {
  const {
    cameraV2: t,
    editor: r,
    hideSidebar: n,
    paintColorPop: i,
    paintColorRow: o,
    paintColorSvCursor: s,
    paintHueHandle: a,
    previewMode: l,
    readOnly: c,
    runtime: d,
    sceneV2: u,
    shotEditor: f,
    state: m,
    studio: x,
    type: g,
    uiState: h
  } = e;
  let _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F, C, ne, Q, z, w, Z, ie, be, we, A, se, y, b, E = 0;
  function S() {
    h.toolButtons.forEach((ue) => {
      const he = ue.attr === "data-tool-mode", me = ue.attr === "data-paint-tool", J = ue.attr === "data-mask-tool";
      ue.active = he ? ue.value === r.primaryTool : me ? ue.key === r.paintTool : J ? ue.key === r.maskTool : !1, ue.pressed = ue.active ? "true" : ue.pressed == null ? null : "false";
    });
  }
  function j() {
    if (x && Zi(h.toolButtons, "value", "add-camera", { disabled: le() }), g !== "cutout") return;
    const ue = G();
    Zi(h.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: ue ? "Look At Frame" : "Add Frame",
      tip: ue ? "Look at frame" : "Add frame",
      icon: ue ? je.camera : je.plus_circle
    });
  }
  function H() {
    const ue = F2({
      spaceView: ne(),
      spaceMode: Sl(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    h.space && Object.assign(h.space, ue.space);
    for (const [he, me] of Object.entries(ue.buttons)) Zi(h.floatingButtons, "action", he, me);
  }
  function X() {
    var me;
    const ue = k0({ hasShot: !!G(), erp: O(), hidden: le() && !te(), studio: x });
    r.mode === "frame" && ue.disabled && (x ? z(G()) : r.mode = "pano"), r.outputPreviewRect = null, h.viewButtons.forEach((J) => {
      const fe = J.key === r.mode;
      J.pressed = fe ? "true" : "false", J.visible = !(J.key === "frame" && !f), J.key === "frame" ? Object.assign(J, ue) : J.disabled = !1;
    });
    const he = f && r.mode === "frame" ? G() : null;
    h.frameRail.visible = !!he, h.frameRail.disabled = c || (he == null ? void 0 : he.locked) === !0, h.frameRollKnob.visible = !!he && !c && he.locked !== !0, h.frameRollKnob.disabled = c || (he == null ? void 0 : he.locked) === !0, h.frameRollKnob.rollDeg = Number((he == null ? void 0 : he.roll_deg) ?? (he == null ? void 0 : he.rot_deg) ?? 0), h.frameRollKnob.displayValue = lo(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((me = r.interaction) == null ? void 0 : me.kind) === "roll_frame", h.frameRollKnob.armed = !!he && r.altModifier === !0, h.frameRail.rollKnob = h.frameRollKnob, h.frameRail.aspectLabel = he ? Rr(he) : "", h.frameRail.aspectChoices = M0(he ? String(Rr(he)) : null, { erp: x, coverage: m.coverage }), he || (h.frameRail.aspectOpen = !1), h.outputPreviewToggle.visible = g === "cutout" && r.mode !== "frame" && !!G(), f && h.cameraPreview && (h.cameraPreview.visible = r.mode !== "frame" && _(), h.cameraPreview.expanded = !!r.outputPreviewExpanded, h.cameraPreview.settled = h.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), H(), M() ? y(r.pointerPos) : be(r.mode === "pano" ? "grab" : "default");
  }
  function L() {
    var he;
    const ue = r.mode === "frame" ? G() : null;
    h.frameRollKnob.visible = !!ue && !c && ue.locked !== !0, h.frameRollKnob.rollDeg = Number((ue == null ? void 0 : ue.roll_deg) ?? (ue == null ? void 0 : ue.rot_deg) ?? 0), h.frameRollKnob.displayValue = lo(h.frameRollKnob.rollDeg), h.frameRollKnob.dragging = ((he = r.interaction) == null ? void 0 : he.kind) === "roll_frame", h.frameRollKnob.armed = !!ue && r.altModifier === !0;
  }
  function D() {
    S();
    const ue = C2({
      editor: r,
      swatches: Bl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: yr,
      colorsApproximatelyEqual: vl,
      rgb01ToHsv: Fu,
      hsv01ToRgb: Ou,
      getBrushPresetIdForTool: re,
      isActiveLassoTool: Y
    });
    if (Object.assign(h.paintDock, ue), se(), !ue.visible) {
      i && (i.hidden = !0);
      return;
    }
    E && (clearTimeout(E), E = 0), o && (!ue.colorEnabled && i && !i.hidden && (E = window.setTimeout(() => {
      i.hidden = !0, h.paintDock.colorPopOpen = !1, E = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", ue.pickerHueColor), i.style.setProperty("--picker-sat", ue.pickerSat), i.style.setProperty("--picker-val", ue.pickerVal), i.style.setProperty("--picker-hue", ue.pickerHue)), s && (s.style.left = ue.pickerSvLeft, s.style.top = ue.pickerSvTop), a && (a.style.left = ue.pickerHueLeft));
  }
  function k() {
    const ue = Z(f && r.mode === "frame" ? G() : U());
    ue && (r.panelLastValues = {
      yaw_deg: Number(ue.yaw_deg || 0),
      pitch_deg: Number(ue.pitch_deg || 0),
      hFOV_deg: Number(ue.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(ue.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(ue.rot_deg || 0),
      roll_deg: Number(ue.roll_deg || 0),
      aspect_id: Rr(ue)
    }, R());
  }
  function R() {
    we(), A(), ce();
  }
  function ee() {
    const ue = f && r.mode === "frame" ? G() : null;
    return [...ve(), ie(), ue].some((he) => F(he) ? nl(he) : C(he) && le() && nl(m.camera));
  }
  function ce() {
    if (n) return;
    m.ui_settings = m.ui_settings || {};
    const ue = A2(m.ui_settings);
    if (l) {
      h.sidePanel = I2({
        coverage: m.coverage,
        uiSettings: ue,
        normalizeCoverageValue: Rn
      });
      return;
    }
    const he = U(), me = f && r.mode === "frame" ? G() : null, J = me || he, fe = me ? [me] : ve(), K = me ? "shot" : ye();
    if (fe.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), J && K !== "stroke") {
      const xe = Z(J);
      r.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (K === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (K === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: Rr(xe)
      }, F(J) && (r.panelLastValues.opacity = Fi(J, r.frame).opacity * 100);
    }
    const p = r.panelLastValues || (g === "stickers" || K === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), N = K === "stroke" ? null : J, v = ie(), I = t && (K === "shot" || K === "frame") && _e(), q = v ? lS(v, r.frame) : I ? { ...N, ...oS(m.camera, r.frame), vFOV_deg: N.vFOV_deg } : F(N) ? r.panelLastValues : N || p, pe = v ? b(v) : !!N && !P(N);
    r.panelWasEnabled = pe, j();
    let V = null;
    if (me) {
      const xe = ge({ item: me, kind: "shot", label: "Frame" });
      V = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: xe.label,
        currentIcon: xe.icon || null,
        items: [{
          id: String(me.id || ""),
          label: xe.label,
          icon: xe.icon || null,
          active: !0
        }]
      };
    } else if (g === "stickers" || g === "cutout") {
      const xe = [{
        id: "",
        label: g === "stickers" ? "No image" : "Nothing selected",
        icon: null,
        item: null
      }];
      if (g === "stickers") {
        const ze = G();
        ze && xe.push({ id: ze.id, label: "Camera", icon: de("frame"), item: ze, kind: "frame" }), $().forEach((Ge, Re) => {
          var Ne, Le;
          if (!Ge || F(Ge) && !Ge.visible) return;
          const He = u ? au(Ge) : B(Ge) ? String(Ge.id || Kd) : String(((Le = (Ne = m.assets) == null ? void 0 : Ne[Ge.asset_id]) == null ? void 0 : Le.name) || Ge.asset_id || Ge.id), ae = `${Re + 1}. ${He}${B(Ge) && Q(Ge) ? " (hidden)" : ""}`, Oe = ge({ item: Ge, label: ae, kind: "image" });
          xe.push({ id: Ge.id, label: Oe.label, icon: Oe.icon, item: Ge, kind: "image" });
        });
      } else
        T().forEach((ze) => {
          if (!(ze != null && ze.item)) return;
          const Ge = ge(ze);
          xe.push({ id: ze.item.id, label: Ge.label, icon: Ge.icon, item: ze.item, kind: ze.kind });
        });
      const Ce = (N == null ? void 0 : N.id) || "", $e = v ? { label: au(v), icon: je.globe } : xe.find((ze) => ze.id === Ce) || xe[0];
      V = {
        label: "Selection",
        open: !1,
        disabled: xe.length <= 1,
        currentLabel: $e.label,
        currentIcon: $e.icon || null,
        items: xe.map((ze) => ({
          id: ze.id,
          label: ze.label,
          icon: ze.icon || null,
          active: ze.id === Ce
        }))
      };
    }
    const oe = [], Pe = (xe, Ce, $e, ze, Ge) => {
      const Re = Ie(Number(q[xe] || 0), $e, ze);
      oe.push({
        key: xe,
        label: Ce,
        min: $e,
        max: ze,
        step: Ge,
        value: Re,
        displayValue: lo(Re),
        fillPct: Ie((Re - $e) / Math.max(1e-6, ze - $e) * 100, 0, 100),
        enabled: pe && !c
      });
    }, Ae = [];
    if (v) {
      for (const [xe, Ce] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const $e = $c(q[xe]);
        Pe(xe, Ce, -$e, $e, 0.01);
      }
      Pe("yaw_deg", "Yaw", -180, 180, 0.1), Pe("pitch_deg", "Pitch", -90, 90, 0.1), Pe("roll_deg", "Roll", -180, 180, 0.1), Pe("scale", "Scale", f0, $c(q.scale), 0.01), Pe("opacity", "Opacity", 0, 100, 1);
    } else if (fe.length > 1)
      Ae.push(`Selected objects: ${fe.length}`), Ae.push("Multi-selection supports z-order and delete.");
    else {
      const xe = K === "shot" || K === "frame";
      if (I)
        for (const [Ce, $e] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const ze = $c(q[Ce]);
          Pe(Ce, $e, -ze, ze, 0.01);
        }
      Pe("yaw_deg", "Yaw", -180, 180, 0.1), Pe("pitch_deg", "Pitch", -90, 90, 0.1), Pe(K === "image" || g === "stickers" && !xe ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), Pe("hFOV_deg", "H FOV", 1, 179, 0.1), Pe("vFOV_deg", "V FOV", 1, 179, 0.1), xe && oe.forEach((Ce) => {
        Ce.enabled = Ce.enabled && T2(Ce.key, { erp: O() });
      }), F(N) && !xe && oe.forEach((Ce) => {
        Ce.enabled = Ce.enabled && D2(Ce.key, { port: B(N) });
      }), u && !xe && Pe("opacity", "Opacity", 0, 100, 1);
    }
    h.sidePanel = $2({
      coverage: m.coverage,
      readOnly: c,
      selectionPicker: V,
      enabled: pe,
      selectedKind: v ? "world" : K,
      selectedItems: fe,
      params: oe,
      notes: Ae,
      uiSettings: ue,
      normalizeCoverageValue: Rn,
      handoff: fe.length > 1 ? null : V2(w(v || N), { enabled: pe && !c })
    });
  }
  function Se() {
    const { canUndo: ue, canRedo: he } = W();
    Zi(h.toolButtons, "value", "undo", { disabled: !ue }), Zi(h.toolButtons, "value", "redo", { disabled: !he });
  }
  return {
    connect(ue) {
      ({
        cameraPreviewShown: _,
        cameraShoots: te,
        getActiveCutoutShot: G,
        getBrushPresetIdForTool: re,
        getCutoutInspectorItems: T,
        getHistoryCapabilities: W,
        getList: $,
        getSelected: U,
        getSelectedItems: ve,
        getSelectedKind: ye,
        getSelectionItemIcon: de,
        getSelectionItemLabelData: ge,
        hasCamera: le,
        hasSpaceContent: _e,
        isActiveLassoTool: Y,
        isErpCamera: O,
        isExternalSticker: B,
        isItemLocked: P,
        isPaintCursorEnabled: M,
        isSceneSticker: F,
        isShotItem: C,
        isSpaceView: ne,
        isStickerHidden: Q,
        leaveFrameView: z,
        portHandoffLanes: w,
        poseOf: Z,
        selectedWorldSticker: ie,
        setCanvasCursor: be,
        syncCutoutShot: we,
        syncTimeline: A,
        syncVideoTransportVisibility: se,
        updateCursor: y,
        worldStickerEditable: b
      } = ue);
    },
    syncLookAtFrameButtonState: j,
    syncFloatingViewButtonState: H,
    syncViewToggleState: X,
    syncFrameRollKnob: L,
    syncPaintUi: D,
    syncSidePanelControls: k,
    updateSidePanel: R,
    inspectorTimed: ee,
    syncSidePanelModel: ce,
    syncUndoRedoButtons: Se
  };
}
function SA(e) {
  const {
    editor: t,
    node: r,
    readOnly: n,
    sceneV2: i,
    state: o,
    stateV2: s,
    studio: a,
    timeline: l,
    timelinePlayhead: c,
    uiState: d,
    videoEl: u,
    videoTimelineFps: f
  } = e;
  let m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e;
  function Y() {
    if (!s || n) return;
    const b = B(), E = l.selection, S = E && P(E.owner);
    if (E) {
      const j = S ? M(E) : [];
      E.frames = E.frames.filter((H) => j.some((X) => S[X].keyframes.some((L) => L.frame === H))), E.frames.length || (l.selection = null);
    }
    d.timeline = W2(o, {
      span: b,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? O(),
      openRows: l.openRows,
      audio: z() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || og(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: g(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: i && !!Kl(r).scene && !le()
    }), d.easing = l.selection ? U2(S, M(l.selection), l.selection.frames, F(l.selection.owner)) : null;
  }
  function O() {
    return Mm(o, { camera: a });
  }
  function B(b = null) {
    const E = o.timeline.fps, S = o.stickers.find(_), j = S ? x() : null, H = Math.max(
      d.videoTransport.ready && !ge() ? Math.round(Number(d.videoTransport.duration || 0) * E) : 0,
      j ? gg(S.clip, E, j.meta) : 0,
      _e()
    );
    return Pm(o, { minimum: Math.round(E * 5), frames: H, openClip: b, camera: a });
  }
  function P(b) {
    return b === "camera" ? g() ? o.camera : null : b === "scene" ? i ? o.scene : null : o.stickers.find((E) => E.id === b) || null;
  }
  function M(b) {
    return b.lane ? [b.lane] : ko(P(b.owner));
  }
  function F(b) {
    if (b === "camera") return 0;
    const { clip: E } = P(b);
    return E.start - E.in;
  }
  function C(b) {
    return `${_o(b, t.frame)}:${b.start - b.in}`;
  }
  function ne(b) {
    const E = P(b);
    return !!E && E.locked !== !0;
  }
  function Q(b) {
    const E = Math.max(0, Math.round(b));
    if (E === t.frame) return;
    U(), t.frame = E, c.frame.value = E, U();
    const S = [t.selectedId, t.worldSelectedId];
    W(), te(), S[0] !== t.selectedId || S[1] !== t.worldSelectedId ? de() : h() && ve(), ye(), $({ reason: ft.PLAYHEAD });
  }
  function z() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function w(b) {
    T(), G.seek(b);
  }
  function Z() {
    s && G.stop();
  }
  function ie() {
    T(), G.toggle();
  }
  function be() {
    U(), te(), de(), ye(), $();
  }
  function we() {
    re(), m(), be();
  }
  function A() {
    const { selection: b } = l;
    ne(b.owner) && (Z(), E1(P(b.owner), M(b), b.frames, t.frame - F(b.owner)), l.selection = null, we());
  }
  function se(b) {
    const E = ui(b);
    if (E === null || E === o.timeline.fps) return;
    Z();
    const S = Math.round(t.frame * E / o.timeline.fps);
    Q1(o, E), l.selection = null, G.seek(S), we();
  }
  function y() {
    const b = f(r);
    b !== null && b !== o.timeline.fps && se(b);
  }
  return {
    connect(b) {
      ({
        commitAndRefreshNode: m,
        getPortMedia: x,
        hasCamera: g,
        inspectorTimed: h,
        isExternalSticker: _,
        markObjectVisualsDirty: te,
        playback: G,
        pushHistory: re,
        refreshModalVideoSource: T,
        releaseHiddenSelection: W,
        requestDraw: $,
        syncCutoutShot: U,
        syncSidePanelModel: ve,
        updateSelectionMenu: ye,
        updateSidePanel: de,
        upstreamBackground: ge,
        upstreamLinked: le,
        upstreamSpanFrames: _e
      } = b);
    },
    syncTimeline: Y,
    timelineTimed: O,
    timelineSpanFrames: B,
    timelineOwner: P,
    selectedLanes: M,
    timelineOffset: F,
    clipView: C,
    timelineEditable: ne,
    setTimelineFrame: Q,
    jumpTimelineTo: w,
    stopTimelinePlayback: Z,
    togglePlayback: ie,
    refreshTimelineEdit: be,
    commitTimelineEdit: we,
    deleteSelectedKeyframes: A,
    changeTimelineFps: se,
    applyVideoTimelineFps: y
  };
}
function _A(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P;
  function M(F) {
    if (!(n || !o)) {
      if (F.type === "seek") {
        if (F.phase === "move") {
          s.scrubFrame = F.frame, t.request("seek");
          return;
        }
        t.cancel(), F.phase === "start" && h(), g.seek(F.frame);
        return;
      }
      if (F.type === "play") {
        Y();
        return;
      }
      if (F.type === "mute") {
        O(), ve();
        return;
      }
      if (F.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? _e()), s.selection = null, ve();
        return;
      }
      if (F.type === "toggle-row") {
        s.openRows.has(F.id) ? s.openRows.delete(F.id) : s.openRows.add(F.id), ve();
        return;
      }
      if (F.type === "toggle-visible") {
        if (F.id === N0) i.painting_visible = !i.painting_visible;
        else {
          const C = ge(F.id);
          if (!C) return;
          C.visible = !C.visible;
        }
        te(), u();
        return;
      }
      if (F.type === "select-row") {
        const C = i.stickers.find((ne) => ne.id === F.id);
        if (C && !C.visible || F.id === "camera" && !l()) return;
        C && !_o(C.clip, r.frame) && x(C.clip.start), (C == null ? void 0 : C.placement) === "world" ? re(C.id) : F.id === "camera" ? W(f()) : W(m().find((ne) => ne.id === F.id) || null), U(), s.selection = null, P(), B(), G();
        return;
      }
      if (F.type === "select-keys") {
        const C = de(F.owner), ne = F.frames.map((w) => w - C), Q = s.selection, z = (Q == null ? void 0 : Q.owner) === F.owner && Q.lane === F.lane;
        if (F.additive && z) {
          const w = new Set(Q.frames);
          for (const Z of ne)
            w.has(Z) ? w.delete(Z) : w.add(Z);
          Q.frames = [...w].sort((Z, ie) => Z - ie);
        } else
          s.selection = ne.length ? { owner: F.owner, lane: F.lane, frames: ne } : null;
        ve();
        return;
      }
      if (F.type === "move-keys") {
        const C = s.selection;
        if (!C || !ye(C.owner)) return;
        const ne = ge(C.owner), Q = T(C);
        if (F.phase === "start") {
          $(), s.drag = { keyframes: Q.map((Z) => structuredClone(ne[Z].keyframes)), frames: C.frames };
          return;
        }
        const { drag: z } = s;
        if (!(z != null && z.keyframes)) return;
        Q.forEach((Z, ie) => {
          ne[Z].keyframes = structuredClone(z.keyframes[ie]);
        });
        const w = O1(ne, Q, z.frames, F.delta, -de(C.owner));
        if (C.frames = z.frames.map((Z) => Z + w), F.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, w ? u() : _();
        return;
      }
      if (F.type === "clip") {
        const C = F.id === "scene" ? ge("scene") : i.stickers.find((w) => w.id === F.id);
        if (!C || C.locked) return;
        if (F.phase === "start") {
          $(), s.drag = { clip: { ...C.clip }, span: le(C.clip) };
          return;
        }
        const { drag: ne } = s;
        if (!(ne != null && ne.clip)) return;
        const Q = ne.clip, z = d(C.clip);
        if (C.clip = { ...Q }, F.delta && F.mode === "move" ? D1(C.clip, F.delta) : F.delta && F.mode === "start" ? L1(C.clip, Q.start + F.delta) : F.delta && R1(C.clip, (Q.duration === null ? ne.span : Q.start + Q.duration) + F.delta, ne.span), F.phase !== "end") {
          t.request("timeline"), d(C.clip) !== z && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, te(), JSON.stringify(C.clip) !== JSON.stringify(Q) ? u() : _();
        return;
      }
      if (F.type === "key-row") {
        if (F.owner === "scene" || !ye(F.owner)) return;
        $(), A1(ge(F.owner), r.frame - de(F.owner)), u();
        return;
      }
      if (F.type === "fps") {
        const C = z1(F.fps);
        if (C === null || C === i.timeline.fps || a.timeline.fpsLocked) {
          ve();
          return;
        }
        c(C);
        return;
      }
      if (F.type === "length") {
        const C = j1(F.length);
        if (C === void 0 || C === i.timeline.length) {
          ve();
          return;
        }
        $(), i.timeline.length = C, u();
        return;
      }
      if (F.type === "easing") {
        const C = s.selection;
        if (!C || !ye(C.owner)) return;
        $(), T1(ge(C.owner), T(C), C.frames, F.easing), F.commit ? u() : _();
      }
    }
  }
  return {
    connect(F) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: m,
        jumpTimelineTo: x,
        playback: g,
        refreshModalVideoSource: h,
        refreshTimelineEdit: _,
        releaseHiddenSelection: te,
        requestDraw: G,
        selectWorldSticker: re,
        selectedLanes: T,
        setSelectedItem: W,
        stopTimelinePlayback: $,
        syncFloatingViewButtonState: U,
        syncTimeline: ve,
        timelineEditable: ye,
        timelineOffset: de,
        timelineOwner: ge,
        timelineSpanFrames: le,
        timelineTimed: _e,
        togglePlayback: Y,
        toggleVideoMuted: O,
        updateSelectionMenu: B,
        updateSidePanel: P
      } = F);
    },
    onTimelineAction: M
  };
}
function wA(e) {
  const {
    app: t,
    bgWidget: r,
    cameraV2: n,
    coverageWidget: i,
    node: o,
    presetWidget: s,
    readOnly: a,
    state: l,
    stateWidget: c
  } = e;
  let d, u, f, m, x, g;
  function h() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = Rn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), _(), o.setDirtyCanvas(!0, !0));
  }
  function _() {
    var U;
    if (a || (m(), g(), l.coverage = Rn(l.coverage), Tm(o, l.active), !c)) return;
    const W = f(), $ = Dm(o, W, String(c.value ?? ""), { rebased: n });
    $ !== null && (W !== l && (l.id = W.id), c.value = $, (U = c.callback) == null || U.call(c, $));
  }
  function te() {
    l.ui_settings = e2(l.ui_settings), a || _();
  }
  function G() {
    var W;
    a || (_(), (W = o.setDirtyCanvas) == null || W.call(o, !0, !0));
  }
  function re() {
    a || d() && x().catch((W) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", W);
    });
  }
  function T(W = {}) {
    var ve, ye, de, ge, le, _e, Y, O, B, P, M;
    const $ = W.syncPreview !== !1, U = W.syncGraph !== !1;
    $ && ((de = (ye = (ve = hg(o)) == null ? void 0 : ve.runtime) == null ? void 0 : ye.requestDraw) == null || de.call(ye), (_e = (le = (ge = pg(o)) == null ? void 0 : ge.dom) == null ? void 0 : le.requestDraw) == null || _e.call(le), (Y = o.setDirtyCanvas) == null || Y.call(o, !0, !1)), U && ((B = (O = o.graph) == null ? void 0 : O.setDirtyCanvas) == null || B.call(O, !0, !0), (M = (P = t == null ? void 0 : t.canvas) == null ? void 0 : P.setDirty) == null || M.call(P, !0, !0));
  }
  return {
    connect(W) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        storedEditorState: f,
        syncCutoutShot: m,
        syncPaintingLayerAsync: x,
        syncPortHandoff: g
      } = W);
    },
    apply: h,
    commitState: _,
    persistUiSettings: te,
    commitAndRefreshNode: G,
    triggerBackgroundPersistenceOnClose: re,
    syncCoverageChangeToNodePreviews: T
  };
}
function xA(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F, C, ne, Q, z, w, Z;
  function ie(E, S, j = "Clear") {
    return new Promise((H) => {
      a.confirmDialog = {
        visible: !0,
        title: String(E || ""),
        text: String(S || ""),
        confirmLabel: String(j || "Confirm"),
        resolve: H
      };
    });
  }
  async function be() {
    var j, H;
    if (r || !await ie(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = So(null), Y();
    const S = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((X) => X.placement === "world" || S.includes(X)) : S, n || (i.assets = {}), t.selectedId = ((j = S[0]) == null ? void 0 : j.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((H = S[0]) == null ? void 0 : H.id) || null, B();
    else {
      const X = q1(i.shots, i.active.selected_shot_id);
      i.stickers = S, i.assets = {}, i.shots = X.shots, t.selectedId = X.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = X.selectedShotId, !X.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, B();
    }
    P(), u(), w(), z(), M();
  }
  async function we(E) {
    var L, D, k, R;
    if (r) return;
    const S = E === "mask" ? "mask" : "paint", j = S === "mask" ? "Mask" : "Paint", H = _(S);
    if (!(!H.length && !(((L = t.interaction) == null ? void 0 : L.kind) === "draw" && ((D = t.interaction) == null ? void 0 : D.layerKind) === S) || !await ie(
      `Clear ${j}`,
      `This will remove all ${S} strokes in the current node.`,
      `Clear ${j}`
    ))) {
      if (((k = t.interaction) == null ? void 0 : k.kind) === "draw" && ((R = t.interaction) == null ? void 0 : R.layerKind) === S) {
        const ee = m(t.interaction);
        ee && t.paintEngine.cancelActiveStroke(ee), t.interaction = null;
      }
      H.length = 0, i.painting.raster_objects = te().filter((ee) => String((ee == null ? void 0 : ee.layerKind) || "paint") !== S), S === "paint" && (h().length = 0), Y(), P(), u(), w(), z(), Q(), M();
    }
  }
  function A() {
    if (r) return;
    const E = G();
    if (!E || !ye(E) || T(E) || n && ge(E)) return;
    let S;
    n ? S = pS(E, Hl(i), g()) : (S = JSON.parse(JSON.stringify(E)), S.id = Yo("st"), S.yaw_deg = Ht((S.yaw_deg || 0) + 8), S.z_index = g()), i.stickers.push(S), i.active.selected_sticker_id = S.id, t.selectedId = S.id, t.selectedIds = [S.id], le(), P(), u(), z(), w(), M();
  }
  function se() {
    const E = F();
    return E ? (Z(E) && (C(), dS(i, E.id), c(), le(), P(), u(), w(), z(), ne(), M()), !0) : !1;
  }
  function y() {
    var j, H, X, L, D;
    if (r) return;
    const E = re(), S = G();
    if (!(!S && E.length === 0) && !E.some((k) => W(k))) {
      if (C(), E.length > 1) {
        const k = new Set(E.filter((ce) => de(ce)).map((ce) => String(ce.actionGroupId || ce.id || ""))), R = new Set(E.filter((ce) => $(ce)).map((ce) => O(ce.rasterObjectId || ce.id || ""))), ee = new Set(E.filter(ye).map((ce) => String(ce.id || "")));
        k.size > 0 && (i.painting.paint.strokes = (Array.isArray((H = (j = i.painting) == null ? void 0 : j.paint) == null ? void 0 : H.strokes) ? i.painting.paint.strokes : []).filter((ce) => !k.has(String((ce == null ? void 0 : ce.actionGroupId) || ""))), i.painting.groups = h().filter((ce) => !k.has(String((ce == null ? void 0 : ce.actionGroupId) || (ce == null ? void 0 : ce.id) || ""))), Y()), R.size > 0 && (i.painting.raster_objects = te().filter((ce) => !R.has(String((ce == null ? void 0 : ce.id) || ""))), _e()), ee.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((ce) => ee.has(String((ce == null ? void 0 : ce.id) || "")) ? T(ce) ? (ve(ce) || (ce.visible = !1), !0) : !1 : !0), B(), le()), t.selectedId = null, t.selectedIds = [], P(), u(), w(), z(), M();
        return;
      }
      if (de(S)) {
        const k = String(S.actionGroupId || S.id || "").trim();
        i.painting.paint.strokes = (Array.isArray((L = (X = i.painting) == null ? void 0 : X.paint) == null ? void 0 : L.strokes) ? i.painting.paint.strokes : []).filter((R) => String((R == null ? void 0 : R.actionGroupId) || "").trim() !== k), i.painting.groups = h().filter((R) => String((R == null ? void 0 : R.actionGroupId) || (R == null ? void 0 : R.id) || "").trim() !== k), Y(), t.selectedId = null, t.selectedIds = [], P(), u(), w(), z(), M();
        return;
      }
      if ($(S)) {
        const k = O(S.rasterObjectId || S.id || "");
        i.painting.raster_objects = te().filter((R) => String((R == null ? void 0 : R.id) || "").trim() !== k), _e(), t.selectedId = null, t.selectedIds = [], P(), u(), w(), z(), M();
        return;
      }
      if (o && U(S)) {
        f();
        return;
      }
      if (s === "stickers" || ye(S)) {
        if (T(S)) {
          if (ve(S)) return;
          S.visible = !1, le(), P(), u(), w(), z(), M();
          return;
        }
        i.stickers = i.stickers.filter((k) => k.id !== S.id), B(), le(), t.selectedId = ((D = x()[0]) == null ? void 0 : D.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, P(), u(), w(), z(), M();
        return;
      }
      l();
    }
  }
  function b() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", Q(), w());
  }
  return {
    connect(E) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        getActivePaintTargetDescriptor: m,
        getList: x,
        getNextStickerZIndex: g,
        getPaintingGroupList: h,
        getPaintingLayerList: _,
        getRasterObjectList: te,
        getSelected: G,
        getSelectedItems: re,
        isExternalSticker: T,
        isItemLocked: W,
        isRasterObjectItem: $,
        isShotItem: U,
        isStickerHidden: ve,
        isStickerItem: ye,
        isStrokeGroupItem: de,
        isUploadingSticker: ge,
        markObjectVisualsDirty: le,
        markPaintCompositeVisualsDirty: _e,
        markPaintStrokeVisualsDirty: Y,
        parseRasterObjectSelectionId: O,
        pruneUnusedAssets: B,
        pushHistory: P,
        requestDraw: M,
        selectedWorldSticker: F,
        stopTimelinePlayback: C,
        syncFloatingViewButtonState: ne,
        syncPaintUi: Q,
        updateSelectionMenu: z,
        updateSidePanel: w,
        worldStickerEditable: Z
      } = E);
    },
    clearAll: be,
    clearPaintingLayer: we,
    duplicateSelected: A,
    deleteSelectedWorldSticker: se,
    deleteSelected: y,
    forceCursorTool: b
  };
}
function kA(e) {
  const {
    api: t,
    canvas: r,
    dragCue: n,
    editor: i,
    editorView: o,
    imageCache: s,
    node: a,
    readOnly: l,
    sceneV2: c,
    stageWrap: d,
    state: u,
    type: f,
    vueModal: m
  } = e;
  let x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P;
  function M(L) {
    return Vd(L == null ? void 0 : L.dataTransfer);
  }
  function F(L) {
    const D = !!L;
    n.active !== D && (n.active = D, d.classList.toggle("drop-active", D));
  }
  function C() {
    const L = new Set(
      (u.stickers || []).map((D) => String((D == null ? void 0 : D.asset_id) || "")).filter((D) => !!D)
    );
    Object.keys(u.assets || {}).forEach((D) => {
      L.has(D) || (delete u.assets[D], s.delete(D));
    });
  }
  async function ne(L) {
    if (l || f !== "stickers" && f !== "cutout" || !rr(L)) return;
    if (c) {
      O(), await ie(L);
      return;
    }
    const D = Yo("asset"), k = Ko(a, `add:${D}`, async () => {
      try {
        const { image: R } = await Wo(L);
        s.set(D, R);
        const ee = Yo("st");
        u.stickers.push({
          id: ee,
          asset_id: D,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: h(30, Number(R.naturalWidth || R.width || 1), Number(R.naturalHeight || R.height || 1)),
          rot_deg: 0,
          z_index: re()
        }), le(u.stickers[u.stickers.length - 1]), G(), P(), B(), de();
        const ce = await xi(L, {
          fetchApi: (he, me) => t.fetchApi(he, me)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((he) => String((he == null ? void 0 : he.asset_id) || "") === D).length) return;
        u.assets[D] = ce, C(), ye(), g(), P(), B(), de();
      } catch (R) {
        delete u.assets[D], s.delete(D);
        const ee = Array.isArray(u.stickers) ? u.stickers : [], ce = ee.filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") === D);
        throw ce.length && (u.stickers = ee.filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") !== D), ce.some((Se) => String((Se == null ? void 0 : Se.id) || "") === String(i.selectedId || "")) && le(null), P(), B(), de(), g()), R;
      }
    });
    try {
      await k;
    } catch {
    }
  }
  function Q() {
    var L;
    l || f !== "stickers" && f !== "cutout" || (L = m == null ? void 0 : m.openImagePicker) == null || L.call(m, "add");
  }
  function z() {
    var L;
    l || !c || (L = m == null ? void 0 : m.openImagePicker) == null || L.call(m, "add-world");
  }
  async function w(L) {
    l || !c || !rr(L) || (O(), await ie(L, "world"));
  }
  function Z() {
    const L = { x: r.width / 2, y: r.height / 2 }, D = $() ? o.pick(te(), L.x, L.y, r.width, r.height) : null;
    return RS(_e(), D, _());
  }
  async function ie(L, D = "sky") {
    const k = Hl(u), R = Ko(a, `add:${k}`, async () => {
      const { image: ee } = await Wo(L), ce = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: h(30, Number(ee.naturalWidth || ee.width || 1), Number(ee.naturalHeight || ee.height || 1)),
        rot_deg: 0
      }, Se = { kind: "file", filename: "" }, ue = D === "world" ? fS(k, Se, Z()) : md(k, Se, ce, re());
      s.set(Y(ue), ee), u.stickers.push(ue), D === "world" ? ge(k) : le(ue), G(), P(), B(), de();
      try {
        const he = await xi(L, {
          fetchApi: (J, fe) => t.fetchApi(J, fe)
        }), me = u.stickers.find((J) => J.id === k);
        if (!me) return;
        me.source = Ma(he), s.set(Y(me), ee), ye(), g();
      } catch (he) {
        throw u.stickers = u.stickers.filter((me) => me.id !== k), i.selectedId === k && le(null), i.worldSelectedId === k && x(), ye(), g(), he;
      } finally {
        P(), B(), de();
      }
    });
    try {
      await R;
    } catch {
    }
  }
  async function be(L, D) {
    const k = Ko(a, `replace:${D}:${Yo("asset")}`, async () => {
      const { image: R } = await Wo(L), ee = await xi(L, {
        fetchApi: (Se, ue) => t.fetchApi(Se, ue)
      }), ce = u.stickers.find((Se) => Se.id === D);
      if (ce) {
        ce.source = Ma(ee), ce.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const Se of [ce.size.value, ...ce.size.keyframes.map((ue) => ue.value)])
          Se.vFOV_deg = h(Se.hFOV_deg, Number(R.naturalWidth || R.width || 1), Number(R.naturalHeight || R.height || 1));
        s.set(Y(ce), R), ve(), ye(), g(), P(), B(), de();
      }
    });
    try {
      await k;
    } catch {
    }
  }
  async function we(L) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const D = T();
    if (!D || !U(D) || W(D) || !rr(L)) return;
    if (c) {
      await be(L, D.id);
      return;
    }
    const k = String(D.id || ""), R = Yo("asset"), ee = Ko(a, `replace:${k}:${R}`, async () => {
      var J;
      const ce = (Array.isArray(u.stickers) ? u.stickers : []).find((fe) => String((fe == null ? void 0 : fe.id) || "") === k) || null;
      if (!ce || !U(ce) || W(ce)) return;
      const Se = String(ce.asset_id || ""), ue = Se ? un(((J = u.assets) == null ? void 0 : J[Se]) || null) : null, he = Number(ce.vFOV_deg || 0), me = ce.crop && typeof ce.crop == "object" ? { ...ce.crop } : null;
      try {
        const { image: fe } = await Wo(L);
        s.set(R, fe), ce.asset_id = R, ce.vFOV_deg = h(
          Number(ce.hFOV_deg || 30),
          Number(fe.naturalWidth || fe.width || 1),
          Number(fe.naturalHeight || fe.height || 1)
        ), ce.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ve(), P(), B(), de();
        const K = await xi(L, {
          fetchApi: (N, v) => t.fetchApi(N, v)
        }), p = (Array.isArray(u.stickers) ? u.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === k) || null;
        if (!p || String(p.asset_id || "") !== R) return;
        u.assets[R] = K, C(), ye(), g(), P(), B(), de();
      } catch (fe) {
        delete u.assets[R], s.delete(R);
        const K = (Array.isArray(u.stickers) ? u.stickers : []).find((p) => String((p == null ? void 0 : p.id) || "") === k) || null;
        throw K && String(K.asset_id || "") === R && (Se && ue && (u.assets[Se] = ue), K.asset_id = Se, K.vFOV_deg = he, K.crop = me ? { ...me } : null), ve(), g(), P(), B(), de(), fe;
      }
    });
    try {
      await ee;
    } catch {
    }
  }
  function A() {
    var D;
    if (l) return;
    const L = T();
    !L || !U(L) || W(L) || (D = m == null ? void 0 : m.openImagePicker) == null || D.call(m, "replace");
  }
  async function se() {
    if (l || f !== "stickers") return;
    if (c) {
      await y();
      return;
    }
    const L = u.assets && typeof u.assets == "object" ? u.assets : {}, D = Object.entries(L).filter(([, R]) => {
      const ee = String((R == null ? void 0 : R.type) || "").toLowerCase(), ce = String((R == null ? void 0 : R.value) || "");
      return ee === "dataurl" && ce.startsWith("data:image");
    });
    if (!D.length) return;
    let k = !1;
    for (const [R, ee] of D)
      try {
        const ce = String((ee == null ? void 0 : ee.value) || "");
        if (!ce) continue;
        const Se = await fetch(ce).then((fe) => fe.blob()), ue = String(Se.type || "image/png").split("/")[1] || "png", he = String((ee == null ? void 0 : ee.name) || `${R}.${ue}`), me = new File([Se], he, { type: Se.type || "image/png" }), J = await xi(me, {
          fetchApi: (fe, K) => t.fetchApi(fe, K)
        });
        u.assets[R] = {
          ...J,
          w: Number((ee == null ? void 0 : ee.w) || 0),
          h: Number((ee == null ? void 0 : ee.h) || 0)
        }, k = !0;
      } catch {
      }
    k && (g(), de());
  }
  async function y() {
    let L = !1;
    for (const D of u.stickers) {
      const k = D.source.data_url;
      if (k)
        try {
          const R = await fetch(k).then((ue) => ue.blob()), ee = String(R.type || "image/png").split("/")[1] || "png", ce = new File([R], `${D.id}.${ee}`, { type: R.type || "image/png" }), Se = await xi(ce, {
            fetchApi: (ue, he) => t.fetchApi(ue, he)
          });
          D.source = Ma(Se), L = !0;
        } catch {
        }
    }
    L && (g(), de());
  }
  function b(L) {
    f !== "stickers" && f !== "cutout" || l || (L.preventDefault(), F(!0));
  }
  function E(L) {
    var R;
    if (f !== "stickers" && f !== "cutout" || l) return;
    L.preventDefault(), L.stopPropagation(), n.depth = 0, F(!1);
    const k = Array.from(((R = L.dataTransfer) == null ? void 0 : R.files) || []).find((ee) => rr(ee));
    k && ne(k);
  }
  function S(L) {
    f !== "stickers" && f !== "cutout" || l || M(L) && (n.depth += 1, F(!0), L.preventDefault());
  }
  function j(L) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && M(L) && F(!0), n.active && L.preventDefault());
  }
  function H(L) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const D = Number(L.clientX) <= 0 && Number(L.clientY) <= 0;
    (n.depth === 0 || D) && F(!1);
  }
  function X(L) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, F(!1), M(L) && L.preventDefault());
  }
  return {
    connect(L) {
      ({
        clearWorldSelection: x,
        commitAndRefreshNode: g,
        computeStickerVFov: h,
        contentSphere: _,
        currentSpaceCamera: te,
        forceCursorTool: G,
        getNextStickerZIndex: re,
        getSelected: T,
        isExternalSticker: W,
        isSpaceView: $,
        isStickerItem: U,
        markObjectVisualsDirty: ve,
        pushHistory: ye,
        requestDraw: de,
        selectWorldSticker: ge,
        setSelectedItem: le,
        spaceViewState: _e,
        stickerImageKey: Y,
        stopTimelinePlayback: O,
        updateSelectionMenu: B,
        updateSidePanel: P
      } = L);
    },
    addImageStickerFromFile: ne,
    addImageSticker: Q,
    addWorldImageSticker: z,
    addWorldStickerFromFile: w,
    replaceSelectedImageFromFile: we,
    replaceSelectedImage: A,
    migrateLegacyEmbeddedAssets: se,
    pruneUnusedAssets: C,
    setDropCue: F,
    onCanvasDragOver: b,
    onCanvasDrop: E,
    onWindowDragEnter: S,
    onWindowDragOver: j,
    onWindowDragLeave: H,
    onWindowDrop: X
  };
}
function MA(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    frameRollKnobEl: i,
    initialShotBase: o,
    readOnly: s,
    runtime: a,
    shotEditor: l,
    stageWrap: c,
    state: d,
    studio: u,
    tooltip: f,
    type: m,
    uiState: x
  } = e;
  let g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F, C, ne, Q, z, w, Z, ie, be, we = o;
  function A(K, p) {
    var I;
    const N = (I = T().space) == null ? void 0 : I.gizmo;
    if (de() && N && be("hover", p) !== null && be("down", p))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: N.mode, start: N.transform, base: re(), changed: !1 }, r.setPointerCapture(K.pointerId), w(p), !0;
    const v = Um(re(), h(P()));
    return WS(G(), v, p, r.width, r.height) ? (de() || (B(R()), ie(), Z(), Y()), n.interaction = { kind: "world_select" }, r.setPointerCapture(K.pointerId), !0) : !1;
  }
  function se() {
    if (s || m !== "cutout") return;
    const K = R();
    if (K) {
      B(K), n.mode = "pano", z(Ht(Number(K.yaw_deg || 0)), Ie(Number(K.pitch_deg || 0), -89.9, 89.9)), ie(), Z(), Y({ cause: "cutout_frame" });
      return;
    }
    const p = Qh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [p], B(p), W(), n.mode = "pano", _e(), te(), ie(), Z(), Y({ cause: "cutout_frame" });
  }
  function y() {
    s || !u || U() || (F(), d.camera = nS(M()), D(), B(R()), W(), _e(), te(), ie(), Z(), Y({ cause: "cutout_frame" }));
  }
  function b() {
    F(), d.camera = null, B(null), D(), _e(), te(), ie(), Z(), Y({ cause: "cutout_frame" });
  }
  function E(K, p) {
    u && ge(K) && (d.camera.projection = p === yo ? "erp" : "perspective", p === yo) || H(K, p);
  }
  function S() {
    s || m !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, _e(), te(), ie(), Z(), Y());
  }
  function j(K, p) {
    const N = a.frameSafeRect;
    if (!K || !N || n.mode !== "frame") return !1;
    const v = Eu * Oi(N, K), I = sd(od(N, p), v);
    return K.hFOV_deg = I.hFOV_deg, K.vFOV_deg = I.vFOV_deg, !0;
  }
  function H(K, p) {
    if (!K || K.locked === !0) return;
    const N = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, v = (() => {
      const V = String(K.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(V)) {
        const [Ae, xe] = V.split(":").map((Ce) => Number(Ce));
        if (Number.isFinite(Ae) && Number.isFinite(xe)) return Ae >= xe;
      }
      const oe = Number(K.hFOV_deg || 64), Pe = Number(K.vFOV_deg || 40);
      return Math.abs(oe - Pe) > 1e-6 ? oe >= Pe : Li(K) >= 1;
    })();
    let [I, q] = N[String(p)] || N["1:1"];
    I >= q !== v && ([I, q] = [q, I]);
    const pe = I / q;
    if (!j(K, pe)) {
      const V = Ie(Number(K.vFOV_deg || 40), 1, 179);
      K.vFOV_deg = V, K.hFOV_deg = wa(V, pe);
    }
    K.aspect_id = `${I}:${q}`;
  }
  function X(K, p, N) {
    if (!K || K.locked === !0) return !1;
    const v = Ss(p, N);
    if (!v) return !1;
    const I = v.ratio;
    if (!j(K, I)) {
      const q = Ie(Number(K.vFOV_deg || 40), 1, 179);
      K.vFOV_deg = q, K.hFOV_deg = wa(q, I);
    }
    return K.aspect_id = v.label, !0;
  }
  function L(K) {
    if (!K || K.locked === !0) return;
    const p = String(K.aspect_id || "").trim(), N = li(K), v = N.tanHalfX / Math.max(1e-12, N.tanHalfY), I = 1 / Math.max(1e-12, v);
    if (!j(K, I)) {
      const q = Ie(Number(K.vFOV_deg || 60), 1, 179);
      K.vFOV_deg = q, K.hFOV_deg = wa(q, I);
    }
    if (/^\d+:\d+$/.test(p)) {
      const [q, pe] = p.split(":");
      K.aspect_id = `${pe}:${q}`;
    } else
      K.aspect_id = Ci(K);
  }
  function D(K = !0) {
    var v, I;
    if (!t) return;
    const p = we;
    if (!_()) {
      we = null, (v = d.shots) != null && v.length && (d.shots = []), p && k(p, null);
      return;
    }
    const N = (I = d.shots) == null ? void 0 : I[0];
    K && N && we && iS(d.camera, n.frame, N, we), we = Om(d.camera, n.frame), N ? Object.assign(N, we, { position: [...we.position] }) : d.shots = [{ ...we, position: [...we.position] }], p || k(null, we);
  }
  function k(K, p) {
    var q, pe;
    !p && n.mode === "frame" && le(K);
    const N = (p == null ? void 0 : p.position) ?? [0, 0, 0];
    if (((pe = (q = n.viewTransition) == null ? void 0 : q.end) == null ? void 0 : pe.mode) === "3dof") {
      Q({ ...M(), position: N }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !ve()) return;
    const v = (K == null ? void 0 : K.position) ?? [0, 0, 0];
    if (v.every((V, oe) => V === N[oe])) return;
    const I = { ...M(), position: v };
    g({ mode: "6dof", position: v, moved: !0 }), n.viewDistance = I.distance, Q({ ...I, position: N }, { mode: "3dof", moved: !1 });
  }
  function R() {
    if (!l) return null;
    const K = Array.isArray(d.shots) ? d.shots : [];
    if (!K.length) return null;
    const p = String(d.active.selected_shot_id || "");
    return K.find((N) => String((N == null ? void 0 : N.id) || "") === p) || K[0] || null;
  }
  function ee(K, p, N = {}) {
    var q;
    if ((K == null ? void 0 : K.kind) !== "roll_frame" || !K.shot) return;
    K.accumulatedRad += Xh(p, K.lastAngle), K.lastAngle = p;
    const v = Jh(K.start.roll_deg, K.accumulatedRad, {
      shiftKey: N.shiftKey,
      altKey: K.altStarted ? !1 : N.altKey
    });
    K.shot.roll_deg = v, K.changed = K.changed || Math.abs(K.accumulatedRad) > 1e-9;
    const I = (((q = x.sidePanel) == null ? void 0 : q.params) || []).find((pe) => pe.key === "roll_deg");
    I && (I.value = v, I.displayValue = lo(v), I.fillPct = (v + 180) / 360 * 100), C(), ue(K), Y({ localOnly: !0 });
  }
  function ce(K, p, N = {}) {
    var q;
    if ((K == null ? void 0 : K.kind) !== "roll_frame" || !K.shot || !K.rollGesture) return;
    const v = Lg(K.rollGesture, p, N);
    if (!v) return;
    K.rollGesture = v.gesture, K.center = v.gesture.center, K.lastAngle = v.gesture.lastAngle, K.accumulatedRad = v.gesture.accumulatedRad, K.shot.roll_deg = v.rollDeg, K.changed = K.changed || Math.abs(v.gesture.accumulatedRad) > 1e-9;
    const I = (((q = x.sidePanel) == null ? void 0 : q.params) || []).find((pe) => pe.key === "roll_deg");
    I && (I.value = v.rollDeg, I.displayValue = lo(v.rollDeg), I.fillPct = (v.rollDeg + 180) / 360 * 100), C(), ue(K), Y({ localOnly: !0 });
  }
  function Se(K, p) {
    const N = O(K);
    return Math.atan2(N.y - p.y, N.x - p.x);
  }
  function ue(K) {
    var pe, V;
    if ((K == null ? void 0 : K.kind) !== "roll_frame" || !K.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const p = $(K.shot), N = (pe = r.getBoundingClientRect) == null ? void 0 : pe.call(r), v = (V = c.getBoundingClientRect) == null ? void 0 : V.call(c);
    if (!p || !N || !v || r.width <= 0 || r.height <= 0) return;
    const I = N.width / r.width, q = N.height / r.height;
    x.tooltip.text = `${lo(K.shot.roll_deg)}°`, x.tooltip.left = N.left - v.left + (p.x + p.w * 0.5) * I, x.tooltip.top = N.top - v.top + (p.y + p.h * 0.5) * q + 12, x.tooltip.variant = "roll", x.tooltip.visible = !0;
  }
  function he(K) {
    var q;
    if (K.button !== 0 || s || n.mode !== "frame") return;
    const p = R();
    if (!p || p.locked === !0) return;
    const N = $(p);
    if (!N) return;
    const v = { x: N.x + N.w * 0.5, y: N.y + N.h * 0.5 }, I = Se(K, v);
    n.interaction = {
      kind: "roll_frame",
      shot: p,
      center: v,
      lastAngle: I,
      accumulatedRad: 0,
      start: { roll_deg: Number(p.roll_deg ?? p.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (q = i.setPointerCapture) == null || q.call(i, K.pointerId), K.preventDefault(), C(), ue(n.interaction), Y({ localOnly: !0 });
  }
  function me(K) {
    var p;
    ((p = n.interaction) == null ? void 0 : p.kind) !== "roll_frame" || n.interaction.source !== "knob" || ee(
      n.interaction,
      Se(K, n.interaction.center),
      K
    );
  }
  function J() {
    const K = n.interaction;
    (K == null ? void 0 : K.kind) !== "roll_frame" || K.source !== "knob" || (K.changed && (_e(), te(), ie()), n.interaction = null, ye(), ne(), C(), Y());
  }
  function fe(K) {
    const p = n.mode === "frame" && !s ? R() : null;
    !p || p.locked === !0 || Math.abs(Number(p.roll_deg ?? p.rot_deg ?? 0)) <= 1e-9 || (p.roll_deg = 0, _e(), te(), ie(), C(), Y(), K.preventDefault());
  }
  return {
    connect(K) {
      ({
        applySpaceMode: g,
        cameraFrustumLength: h,
        cameraShoots: _,
        commitAndRefreshNode: te,
        currentSpaceCamera: G,
        cutoutCamera: re,
        editorViewInput: T,
        forceCursorTool: W,
        getFrameViewRect: $,
        hasCamera: U,
        hasSpaceContent: ve,
        hideTooltip: ye,
        isCameraSelected: de,
        isShotItem: ge,
        leaveFrameView: le,
        pushHistory: _e,
        requestDraw: Y,
        screenPos: O,
        setSelectedItem: B,
        spaceScale: P,
        spaceViewState: M,
        stopTimelinePlayback: F,
        syncFrameRollKnob: C,
        syncViewToggleState: ne,
        transitionView: Q,
        turnViewTo: z,
        updateCursor: w,
        updateSelectionMenu: Z,
        updateSidePanel: ie,
        worldGizmoPointer: be
      } = K);
    },
    addCutoutFrame: se,
    addStudioCamera: y,
    deleteStudioCamera: b,
    setShotAspect: E,
    clearCutoutFrame: S,
    applyCutoutAspectCustom: X,
    rotateCutoutAspect90: L,
    syncCutoutShot: D,
    getActiveCutoutShot: R,
    startCameraPress: A,
    applySharedRollInteractionPoint: ce,
    onFrameRollKnobPointerDown: he,
    onFrameRollKnobPointerMove: me,
    finishKnobRoll: J,
    onFrameRollKnobDoubleClick: fe
  };
}
function PA(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    editorView: i,
    floatingRightEl: o,
    floatingTopEl: s,
    frameRailEl: a,
    paintDockEl: l,
    readOnly: c,
    runtime: d,
    shotEditor: u,
    toolRailEl: f,
    uiState: m,
    videoTransportEl: x
  } = e;
  let g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O = null, B = !1;
  function P(k) {
    if (n.mode = "pano", !k) return;
    h();
    const R = de().distance;
    n.viewYaw = Ht(k.yaw_deg), n.viewPitch = Ie(k.pitch_deg, -89.9, 89.9), n.viewFov = Ie(k.hFOV_deg, 35, 140), n.spaceMode === "6dof" && g({ mode: "6dof", position: [...k.position], moved: !0 }), n.viewDistance = R, d.backgroundDirty = !0;
  }
  function M() {
    var v, I, q, pe, V;
    if (!r) return null;
    const k = (v = r.getBoundingClientRect) == null ? void 0 : v.call(r), R = Number((k == null ? void 0 : k.width) || 0) > 0 ? r.width / k.width : 1, ee = Number((k == null ? void 0 : k.height) || 0) > 0 ? r.height / k.height : 1;
    d.frameCanvasScale = Math.min(R, ee);
    let ce = 24, Se = 24;
    const ue = Math.max(ce + 1, r.width - 24);
    let he = Math.max(Se + 1, r.height - 24);
    const me = (I = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : I.call(f), J = (q = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : q.call(a);
    let fe = 24;
    me && k && me.width > 0 && me.height > 0 && (fe = Math.max(fe, (me.right - k.left) * R + Ap)), J && k && J.width > 0 && J.height > 0 && ((pe = m.frameRail) == null ? void 0 : pe.visible) === !0 && (fe = Math.max(fe, (k.right - J.left) * R + Ap)), ce = Math.max(ce, fe);
    const K = Math.min(ue, r.width - fe);
    let p = 24;
    const N = (V = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : V.call(s);
    if (N && k && N.width > 0 && N.height > 0 && (p = Math.max(p, (N.bottom - k.top) * ee + Tc)), [l, x].forEach((oe) => {
      var xe;
      if (!oe || !k) return;
      const Pe = getComputedStyle(oe);
      if (Pe.display === "none" || Pe.visibility === "hidden" || Number(Pe.opacity) <= 0) return;
      const Ae = (xe = oe.getBoundingClientRect) == null ? void 0 : xe.call(oe);
      !Ae || Ae.width <= 0 || Ae.height <= 0 || (p = Math.max(p, (k.bottom - Ae.top) * ee + Tc));
    }), o && k) {
      const oe = getComputedStyle(o);
      oe.display !== "none" && oe.visibility !== "hidden" && Number(oe.opacity) > 0 && (p = Math.max(p, (LN + Tc) * ee));
    }
    return Se = Math.max(Se, p), he = Math.max(Se + 1, Math.min(he, r.height - p)), {
      x: ce,
      y: Se,
      w: Math.max(1, K - ce),
      h: Math.max(1, he - Se)
    };
  }
  function F(k = G()) {
    if (!k || !r) return null;
    const R = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return Hv(R, k, Eu * Oi(R, k));
  }
  function C(k = G()) {
    const R = F(k);
    return R ? { x: R.x, y: R.y, w: R.w, h: R.h } : null;
  }
  function ne() {
    return u && !!G();
  }
  function Q(k, R) {
    const ee = G();
    if (!ee || ee.locked === !0) return !1;
    const ce = Number(R) > 0, Se = tm(ee, R);
    if (!Se) return !1;
    if (ce) {
      const ue = Eu * Oi(
        d.frameSafeRect || { w: r.width, h: r.height },
        Se
      ), he = ad({ width: r.width, height: r.height }, ue);
      if (he.halfW < r.width * 0.5 - 1e-6 || he.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return ee.hFOV_deg = Se.hFOV_deg, ee.vFOV_deg = Se.vFOV_deg, z(), Y(), !0;
  }
  function z() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, $(), _(), Y());
    }, 180);
  }
  function w() {
    return t && n.mode === "frame" && re();
  }
  function Z() {
    const k = G(), R = F(k);
    return k && R ? qm(k, R, { width: r.width, height: r.height }) : null;
  }
  function ie() {
    var k;
    return ((k = te()) == null ? void 0 : k.radius) || ar;
  }
  function be(k) {
    const { position: R, yaw_deg: ee, pitch_deg: ce, roll_deg: Se, hFOV_deg: ue } = k.shot;
    return { position: R, yaw_deg: ee, pitch_deg: ce, roll_deg: Se, hFOV_deg: ue, distance: ie() };
  }
  function we(k, R) {
    const { rect: ee } = k;
    return i.pickSurface(ve(k.shot), R.x - ee.x, R.y - ee.y, ee.w, ee.h);
  }
  function A(k, R, ee) {
    return cu(R, we(k, ee), null, ye());
  }
  function se(k) {
    return JSON.stringify([be(k), k.rect]);
  }
  function y(k) {
    const R = G();
    R.position = [...k.position], R.yaw_deg = k.yaw_deg, R.pitch_deg = k.pitch_deg;
  }
  function b(k, R) {
    const ee = G();
    !ee || c || ee.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: ee,
      last: k,
      start: { yaw_deg: Number(ee.yaw_deg || 0), pitch_deg: Number(ee.pitch_deg || 0) },
      changed: !1
    }, _e(k), r.setPointerCapture(R));
  }
  function E(k, R, ee) {
    const ce = Z();
    if (!ce || c) return;
    const Se = be(ce);
    n.interaction = k === "orbit" ? { kind: "frame_orbit", last: R, pivot: A(ce, Se, R), changed: !1 } : { kind: "frame_pan", last: R, depth: Lm(Se, ye()), changed: !1 }, _e(R), r.setPointerCapture(ee);
  }
  function S(k, R) {
    const ee = Z();
    if (!ee) return;
    const ce = be(ee), Se = R.x - k.last.x, ue = R.y - k.last.y;
    y(k.kind === "frame_pan" ? $m(ce, Se, ue, ee.rect.w, ee.rect.h, k.depth) : Vm(ce, Se, ue, r.height, k.pivot)), k.changed = k.changed || Se !== 0 || ue !== 0, k.last = R, U({ localOnly: !0, cause: "frame_view" });
  }
  function j(k, R) {
    const ee = Z();
    if (!ee || c) return;
    const ce = be(ee), Se = performance.now(), ue = { x: k.x, y: k.y, time: Se, key: i.contentRevision(), view: se(ee) };
    if (!Rm(O, ue)) {
      const he = we(ee, k);
      O = { ...ue, cost: performance.now() - Se, hit: he };
    }
    y(zm(ce, cu(ce, O.hit, null, ye()), R, ye())), O.view = se(Z() ?? ee), O.wheelTime = Se, z(), Y(), U({ localOnly: !0, cause: "frame_view" });
  }
  function H(k, R) {
    const ee = G();
    if (!ee || c || ee.locked === !0) return !1;
    const ce = I0(ee, k, R);
    return ce === ee ? !1 : (ge(), ee.position = ce.position, B = !0, !0);
  }
  function X() {
    return B ? (B = !1, $(), _(), Y(), !0) : !1;
  }
  function L() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, $(), _(), Y(), !0) : !1;
  }
  function D() {
    const k = n.interaction;
    if (!(k != null && k.shot) || !k.start || k.kind !== "pan_frame" && k.kind !== "roll_frame") return !1;
    const R = k.kind === "roll_frame";
    return k.kind === "pan_frame" ? (k.shot.yaw_deg = k.start.yaw_deg, k.shot.pitch_deg = k.start.pitch_deg) : k.shot.roll_deg = k.start.roll_deg, R && T(), n.interaction = null, W(), le(), Y(), _e(n.pointerPos), U({ localOnly: !0 }), !0;
  }
  return {
    connect(k) {
      ({
        applySpaceMode: g,
        cancelViewTransition: h,
        commitAndRefreshNode: _,
        contentSphere: te,
        getActiveCutoutShot: G,
        hasSpaceContent: re,
        hideTooltip: T,
        invalidateLivePaintPreviewCaches: W,
        pushHistory: $,
        requestDraw: U,
        shotViewCamera: ve,
        spaceScale: ye,
        spaceViewState: de,
        stopTimelinePlayback: ge,
        syncViewToggleState: le,
        updateCursor: _e,
        updateSidePanel: Y
      } = k);
    },
    leaveFrameView: P,
    measureFrameSafeRect: M,
    getFrameViewLayout: F,
    getFrameViewRect: C,
    supportsFramePainting: ne,
    zoomFrameViewAt: Q,
    isFreeFrameView: w,
    frameContext: Z,
    frameViewDistance: ie,
    frameSpaceView: be,
    frameTarget: A,
    startPanFrame: b,
    startFrameDrag: E,
    dragFrame: S,
    zoomFrameAt: j,
    flushFrameWheelCommit: L,
    cancelFrameCameraGesture: D,
    moveFrameByKeys: H,
    endFrameKeyMove: X
  };
}
function NA(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, m, x, g, h, _, te, G, re, T, W, $, U = 0;
  function ve() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function ye() {
    return String(ve() || "") === "lasso_fill";
  }
  function de() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function ge(A, se) {
    const y = Number(se || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, y / 2048)
    };
  }
  function le(A) {
    const se = String(A || "").trim();
    return se === "eraser" ? Fr : Tn[se] ? se : t.activeBrushPresetId || Fr;
  }
  function _e() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (de() || $());
  }
  function Y() {
    var A;
    return _e() && ((A = t.pointerPos) == null ? void 0 : A.inside) === !0;
  }
  function O(A, se = !0) {
    const y = Number((A == null ? void 0 : A.x) || 0), b = Number((A == null ? void 0 : A.y) || 0), E = se !== !1, S = t.pointerPos || { x: 0, y: 0, inside: !1 }, j = S.inside !== E || Math.abs(S.x - y) > 0.01 || Math.abs(S.y - b) > 0.01;
    return t.pointerPos = { x: y, y: b, inside: E }, j;
  }
  function B() {
    var D, k;
    if (!Y()) return null;
    const A = t.primaryTool === "mask" ? "mask" : "paint", se = A === "mask" ? t.maskTool : t.paintTool, y = le(se), b = Tn[y] || Tn[Fr], E = Number(t.brushSizes[y] ?? 10), S = Math.max(1, E) * Math.max(0.1, Number(b.sizeScale ?? 1)), j = Math.max(3, S * 0.5), H = A === "mask" ? se === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : se === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : $n(t.paintColor), X = A === "mask" ? se === "lasso_fill" ? 0.18 : 0.2 : se === "eraser" ? 0.06 : Ie(Math.max(0.16, Number(H.a ?? 1) * 0.3), 0.16, 0.52), L = A === "mask" ? 0.95 : se === "eraser" ? 0.75 : Ie(Math.max(0.46, Number(H.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: A,
      toolKind: se,
      preset: b,
      radius: j,
      fillStyle: yr(H, X),
      strokeStyle: yr(H, L),
      x: Number(((D = t.pointerPos) == null ? void 0 : D.x) || 0),
      y: Number(((k = t.pointerPos) == null ? void 0 : k.y) || 0),
      hotspotX: j,
      hotspotY: j
    };
  }
  function P() {
    var R, ee, ce;
    const A = B();
    if (!r) return;
    if (!A) {
      r.style.display = "none";
      return;
    }
    let se = A.radius * 2, y = A.radius * 2, b = "999px", E = 0, S = A.fillStyle, j = "1px solid rgba(222, 222, 222, 0.72)", H = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const X = "rgba(222, 222, 222, 0.72)", L = "rgba(52, 52, 52, 0.72)";
    let D = Number(A.hotspotX ?? se * 0.5), k = Number(A.hotspotY ?? y * 0.5);
    if (A.toolKind === "lasso_fill")
      se = bl, y = bl, b = "0", j = "0", H = "none", D = $N, k = zN, S = UN(A.fillStyle, L, X);
    else if (A.layerKind === "mask")
      S = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (A.toolKind === "marker") {
      const Se = Math.max(1, Number(((R = A.preset) == null ? void 0 : R.aspect) ?? 1));
      se = Math.max(10, A.radius * 2 * Se), y = Math.max(6, A.radius * 2), b = `${Math.min(6, y * 0.42)}px`, E = Number(((ce = (ee = A.preset) == null ? void 0 : ee.angle) == null ? void 0 : ce.value) || 0) * Ti;
    } else A.toolKind === "brush" ? S = `radial-gradient(circle at 50% 50%, ${A.strokeStyle} 0%, ${A.fillStyle} 45%, rgba(0,0,0,0) 100%)` : A.toolKind === "eraser" && (S = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(se)}px`, r.style.height = `${Math.round(y)}px`, r.style.borderRadius = b, r.style.border = j, r.style.boxShadow = H, r.style.background = S, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(A.x - D)}px, ${Math.round(A.y - k)}px) rotate(${E}deg)`;
  }
  function M() {
    var me;
    if (!n || !i) return;
    const A = t.primaryTool === "mask" ? "mask" : "paint", se = A === "mask" ? t.maskTool : t.paintTool;
    if (se === "lasso_fill") return;
    const y = le(se), b = Tn[y] || Tn[Fr], E = Number(t.brushSizes[y] ?? 10), S = Math.max(1, E) * Math.max(0.1, Number(b.sizeScale ?? 1)), j = Math.max(6, S * 0.5), H = se === "eraser", X = A === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : H ? { r: 1, g: 1, b: 1, a: 0.22 } : $n(t.paintColor), L = A === "mask" ? yr(X, 0.22) : H ? "rgba(255,255,255,0.14)" : yr(X, Ie(Math.max(0.18, Number(X.a ?? 1) * 0.34), 0.18, 0.56)), D = A === "mask" ? yr(X, 0.96) : H ? "rgba(255,255,255,0.72)" : yr(X, Ie(Math.max(0.56, Number(X.a ?? 1) * 0.96), 0.56, 1));
    let k = j * 2, R = j * 2, ee = "999px", ce = 0, Se = L;
    const ue = "rgba(222, 222, 222, 0.72)", he = "rgba(52, 52, 52, 0.72)";
    if (A === "mask")
      Se = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (se === "marker") {
      const J = Math.max(1, Number((b == null ? void 0 : b.aspect) ?? 1));
      k = Math.max(16, j * 2 * J), R = Math.max(10, j * 2), ee = `${Math.min(8, R * 0.42)}px`, ce = Number(((me = b == null ? void 0 : b.angle) == null ? void 0 : me.value) || 0) * Ti;
    } else se === "brush" ? Se = `radial-gradient(circle at 50% 50%, ${D} 0%, ${L} 48%, rgba(0,0,0,0) 100%)` : se === "lasso_fill" ? (k = Math.max(18, j * 1.8), R = k, Se = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${D} 43%, ${D} 58%, rgba(0,0,0,0) 59%)`) : H && (Se = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(k)}px`, i.style.height = `${Math.round(R)}px`, i.style.borderRadius = ee, i.style.background = Se, i.style.border = `1px solid ${ue}`, i.style.boxShadow = `0 0 0 1px ${he}`, i.style.transform = `rotate(${ce}deg)`, U && (clearTimeout(U), U = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function F() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), U && clearTimeout(U), U = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), U = 0;
    }, 180));
  }
  function C(A, se, y, b) {
    const E = le(se), S = Tn[E] || Tn[Fr], j = t.brushSizes[E] ?? 10, H = Math.max(1, j) * Math.max(0.1, S.sizeScale ?? 1), X = ge(b, H), L = y.map((k) => ({
      ...k,
      t: Number((k == null ? void 0 : k.t) || 0),
      widthScale: Number.isFinite(Number(k == null ? void 0 : k.widthScale)) ? Math.max(0, Number(k.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(k == null ? void 0 : k.pressureLike)) ? Math.max(0, Number(k.pressureLike)) : 1
    })), D = {
      id: eo(A),
      actionGroupId: eo("ag"),
      targetSpace: b && typeof b == "object" ? { ...b, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: A,
      toolKind: se,
      size: H,
      createdAt: Date.now(),
      color: A === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: X.radiusModel,
      radiusValue: X.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: L.map((k) => ({ ...k })),
        points: L.map((k) => ({ ...k }))
      }
    };
    return Np(D, S), t.mode, Number(S.aspect ?? 1), Number(D.aspect ?? 1), String(D.stampKind || ""), Number(D.size || 0), String(D.radiusModel || ""), Number(D.radiusValue || 0), { ...D.targetSpace }, D;
  }
  function ne(A, se, y, b) {
    const E = y.map((X) => ({
      ...X,
      t: Number((X == null ? void 0 : X.t) || 0),
      widthScale: Number.isFinite(Number(X == null ? void 0 : X.widthScale)) ? Math.max(0, Number(X.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(X == null ? void 0 : X.pressureLike)) ? Math.max(0, Number(X.pressureLike)) : 1
    })), S = le(se), j = Tn[S] || Tn[Fr], H = {
      id: eo(A),
      actionGroupId: eo("ag"),
      targetSpace: b && typeof b == "object" ? { ...b, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: A,
      toolKind: se,
      size: 10,
      createdAt: Date.now(),
      color: A === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: E.map((X) => ({ ...X }))
      }
    };
    return Np(H, j), t.mode, Number(j.aspect ?? 1), Number(H.aspect ?? 1), String(H.stampKind || ""), { ...H.targetSpace }, H;
  }
  function Q(A) {
    const se = o.painting || (o.painting = So(null)), y = se[A] || (se[A] = { strokes: [] });
    return Array.isArray(y.strokes) || (y.strokes = []), y.strokes;
  }
  function z(A, se, y = performance.now()) {
    let b;
    if (t.mode === "frame") {
      const L = f();
      if (!L || (b = W(se, L, y), !b)) return !1;
    } else
      b = T(se, y);
    if (!b) return !1;
    const E = A.stroke.geometry.rawPoints || A.stroke.geometry.points, S = A.stroke.geometry.points, j = E[E.length - 1];
    if (j) {
      const L = Math.abs(Number(b.u ?? b.x ?? 0) - Number(j.u ?? j.x ?? 0)), D = Math.abs(Number(b.v ?? b.y ?? 0) - Number(j.v ?? j.y ?? 0));
      if (L < 15e-4 && D < 15e-4) return !1;
    }
    const H = {
      ...b,
      t: Number((b == null ? void 0 : b.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    E.push({ ...H }), S.push({ ...H });
    const X = m(A);
    if (X) {
      const L = t.paintEngine.ensureTarget(X);
      t.paintEngine.appendStrokePoint(L, Number(H.u ?? 0), Number(H.v ?? 0), A.stroke);
    }
    return !0;
  }
  function w(A, se, y = performance.now()) {
    var j, H;
    let b;
    if (t.mode === "frame") {
      const X = f();
      if (!X) return !1;
      b = W(se, X, y);
    } else
      b = T(se, y);
    const E = (H = (j = A == null ? void 0 : A.stroke) == null ? void 0 : j.geometry) == null ? void 0 : H.points;
    if (!b || !Array.isArray(E)) return !1;
    const S = E[E.length - 1];
    if (S) {
      const X = Math.abs(Number(b.u ?? b.x ?? 0) - Number(S.u ?? S.x ?? 0)), L = Math.abs(Number(b.v ?? b.y ?? 0) - Number(S.v ?? S.y ?? 0));
      if (X < 15e-4 && L < 15e-4) return !1;
    }
    return E.push({
      ...b,
      t: Number((b == null ? void 0 : b.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function Z(A) {
    var J, fe, K, p, N;
    const se = (A == null ? void 0 : A.stroke) || null;
    if (!se || (A == null ? void 0 : A.layerKind) !== "paint" || String((se == null ? void 0 : se.toolKind) || "") !== "eraser") return !1;
    re();
    const y = m(), b = c(y.width, y.height);
    if (!G(b, se, { w: y.width, h: y.height })) return !1;
    const E = ((fe = (J = b.ctx) == null ? void 0 : J.getImageData(0, 0, y.width, y.height)) == null ? void 0 : fe.data) || null;
    if (!E) return !1;
    const S = new Map(g().map((v) => [String((v == null ? void 0 : v.actionGroupId) || (v == null ? void 0 : v.id) || "").trim(), v ? { ...v } : null])), j = [], H = [], X = [...h().filter((v) => String((v == null ? void 0 : v.layerKind) || "paint") !== "paint")];
    let L = !1, D = x().reduce((v, I) => Math.max(v, Number((I == null ? void 0 : I.z_index) || 0)), -1) + 1;
    function k(v, I, q, pe = 8) {
      let V = I, oe = q, Pe = -1, Ae = -1;
      for (let xe = 0; xe < q; xe += 1)
        for (let Ce = 0; Ce < I; Ce += 1)
          v[(xe * I + Ce) * 4 + 3] <= pe || (Ce < V && (V = Ce), xe < oe && (oe = xe), Ce > Pe && (Pe = Ce), xe > Ae && (Ae = xe));
      return Pe < V || Ae < oe ? null : { minX: V, minY: oe, maxX: Pe, maxY: Ae };
    }
    const R = k(E, y.width, y.height, 8);
    if (!R) return !1;
    function ee(v, I) {
      return !v || !I ? !1 : !(v.maxX < I.minX || I.maxX < v.minX || v.maxY < I.minY || I.maxY < v.minY);
    }
    function ce(v, I) {
      const q = d((v == null ? void 0 : v.actionGroupId) || (v == null ? void 0 : v.id) || "", "paint", I);
      if (!q) return null;
      const pe = q.centerUv.u - q.halfW, V = q.centerUv.u + q.halfW, oe = q.centerUv.v - q.halfH, Pe = q.centerUv.v + q.halfH, Ae = y.width, xe = y.height;
      return {
        minX: Math.floor((pe % 1 + 1) % 1 * Ae),
        maxX: Math.ceil((V % 1 + 1) % 1 * Ae),
        minY: Math.floor(Ie(oe, 0, 1) * xe),
        maxY: Math.ceil(Ie(Pe, 0, 1) * xe),
        wraps: V - pe >= 1 || pe < 0 || V > 1
      };
    }
    function Se(v) {
      const I = (v == null ? void 0 : v.bbox) || null;
      if (!I) return null;
      const q = (v == null ? void 0 : v.transform) || {}, pe = y.width, V = y.height, oe = Number(I.u0 || 0) + Number(q.du || 0), Pe = Number(I.u1 || 0) + Number(q.du || 0), Ae = Number(I.v0 || 0) + Number(q.dv || 0), xe = Number(I.v1 || 0) + Number(q.dv || 0);
      return {
        minX: Math.floor((oe % 1 + 1) % 1 * pe),
        maxX: Math.ceil((Pe % 1 + 1) % 1 * pe),
        minY: Math.floor(Ie(Ae, 0, 1) * V),
        maxY: Math.ceil(Ie(xe, 0, 1) * V),
        wraps: Pe - oe >= 1 || oe < 0 || Pe > 1
      };
    }
    function ue(v) {
      return v ? v.wraps ? ee(R, { minX: 0, maxX: v.maxX, minY: v.minY, maxY: v.maxY }) || ee(R, { minX: v.minX, maxX: y.width - 1, minY: v.minY, maxY: v.maxY }) : ee(R, v) : !0;
    }
    function he(v) {
      if (!v) return { touched: !1, canvas: null };
      const I = c(y.width, y.height, { readback: !0 });
      I.ctx.drawImage(v, 0, 0);
      const q = I.ctx.getImageData(0, 0, y.width, y.height);
      I.ctx.save(), I.ctx.globalCompositeOperation = "destination-out", I.ctx.drawImage(b.canvas, 0, 0), I.ctx.restore();
      const pe = I.ctx.getImageData(0, 0, y.width, y.height);
      for (let V = 0; V < y.width * y.height; V += 1) {
        if (E[V * 4 + 3] <= 8) continue;
        const Pe = q.data[V * 4 + 3], Ae = pe.data[V * 4 + 3];
        if (Pe > Ae)
          return { touched: !0, canvas: I.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function me(v, I, q) {
      const pe = Number(q == null ? void 0 : q.z_index), V = l(v, I, q).map((oe, Pe) => ({
        ...oe,
        z_index: Number.isFinite(pe) ? pe + Pe * 1e-3 : D + Pe * 1e-3
      }));
      return V.length && (D = Math.max(D, ...V.map((oe) => Number((oe == null ? void 0 : oe.z_index) || 0))) + 1), V;
    }
    for (const v of g()) {
      const I = String((v == null ? void 0 : v.actionGroupId) || (v == null ? void 0 : v.id) || "").trim();
      if (!I) continue;
      const q = _(I, "paint");
      if (!ue(ce(v, q))) {
        H.push(v), j.push(...q);
        continue;
      }
      const pe = ((p = (K = t.paintEngine) == null ? void 0 : K.getGroupTarget) == null ? void 0 : p.call(K, I)) || null, V = ((N = pe == null ? void 0 : pe.committedPaint) == null ? void 0 : N.canvas) || null;
      if (!V) {
        H.push(v), j.push(...q);
        continue;
      }
      const oe = he(V);
      if (!oe.touched || !oe.canvas) {
        H.push(v), j.push(...q);
        continue;
      }
      L = !0;
      const Pe = me(oe.canvas, "paint", S.get(I) || v || {});
      X.push(...Pe);
    }
    for (const v of h().filter((I) => String((I == null ? void 0 : I.layerKind) || "paint") === "paint")) {
      if (!ue(Se(v))) {
        X.push(v);
        continue;
      }
      const I = s(v, null);
      if (!I) {
        X.push(v);
        continue;
      }
      const q = he(I);
      if (!q.touched || !q.canvas) {
        X.push(v);
        continue;
      }
      L = !0;
      const pe = me(q.canvas, "paint", v);
      X.push(...pe);
    }
    return L ? (o.painting.paint.strokes = j, o.painting.groups = H.sort((v, I) => Number((v == null ? void 0 : v.z_index) || 0) - Number((I == null ? void 0 : I.z_index) || 0)), o.painting.raster_objects = X.sort((v, I) => Number((v == null ? void 0 : v.z_index) || 0) - Number((I == null ? void 0 : I.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function ie(A) {
    var j, H, X, L, D;
    if ((((H = (j = A.stroke) == null ? void 0 : j.geometry) == null ? void 0 : H.rawPoints) || ((L = (X = A.stroke) == null ? void 0 : X.geometry) == null ? void 0 : L.points) || []).length >= 1) {
      we(A);
      const k = m(A);
      k && (String(((D = A.stroke) == null ? void 0 : D.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(k) : t.paintEngine.commitActiveStroke(A.stroke, k)), A._hasCommittedSegments = !0;
    }
    const y = A.stroke, b = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, E = C(A.layerKind, y.toolKind, [], b);
    E.actionGroupId = y.actionGroupId, A.stroke = E;
    const S = m(A);
    S && t.paintEngine.beginStroke(E, S);
  }
  function be(A) {
    var j, H;
    if ((((H = (j = A.stroke) == null ? void 0 : j.geometry) == null ? void 0 : H.points) || []).length >= 3) {
      we(A);
      const X = m(A);
      X && t.paintEngine.commitActiveStroke(A.stroke, X), A._hasCommittedSegments = !0;
    }
    const y = A.stroke, b = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, E = ne(A.layerKind, y.toolKind, [], b);
    E.actionGroupId = y.actionGroupId, A.stroke = E;
    const S = m(A);
    S && t.paintEngine.beginStroke(E, S);
  }
  function we(A) {
    var S, j, H, X;
    const se = ((S = A == null ? void 0 : A.stroke) == null ? void 0 : S.geometry) || null;
    if (!se) return !1;
    const y = String(((j = A == null ? void 0 : A.stroke) == null ? void 0 : j.toolKind) || "pen");
    if (A.layerKind === "paint" && y === "eraser")
      return se.geometryKind !== "lasso_fill" && (se.processedPoints = te(se.rawPoints || se.points || [], A.stroke.targetSpace, !0)), Z(A);
    const b = A.layerKind === "paint" && y !== "eraser";
    if (se.geometryKind === "lasso_fill")
      return (Array.isArray(se.points) ? se.points : []).length < 3 ? !1 : (b && u((H = A.stroke) == null ? void 0 : H.actionGroupId), Q(A.layerKind).push(A.stroke), !0);
    const E = se.rawPoints || se.points || [];
    return E.length < 1 ? !1 : (se.processedPoints = te(E, A.stroke.targetSpace, !0), b && u((X = A.stroke) == null ? void 0 : X.actionGroupId), Q(A.layerKind).push(A.stroke), !0);
  }
  return {
    connect(A) {
      ({
        buildRasterObjectEditCanvas: s,
        clearSelection: a,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: m,
        getDisplayListObjects: x,
        getPaintingGroupList: g,
        getRasterObjectList: h,
        getStrokeGroupStrokes: _,
        processFreehandPoints: te,
        rasterizeStrokeToSurface: G,
        rebuildPaintEngineIfNeeded: re,
        screenPosToErpPoint: T,
        screenPosToFrameAsErpPoint: W,
        supportsFramePainting: $
      } = A);
    },
    isActiveLassoTool: ye,
    supportsErpPainting: de,
    getBrushPresetIdForTool: le,
    isPaintCursorEnabled: _e,
    isActivePaintCursorVisible: Y,
    setPointerPos: O,
    syncPaintCursorElement: P,
    showPaintSizePreview: M,
    hidePaintSizePreview: F,
    buildFreehandStrokeRecord: C,
    buildLassoFillStrokeRecord: ne,
    getPaintingLayerList: Q,
    appendPaintPoint: z,
    appendLassoPoint: w,
    _segmentFrameStroke: ie,
    _segmentFrameLassoFill: be,
    commitPaintInteraction: we
  };
}
function AA(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de;
  function ge(P) {
    var F;
    if (n && t.mode === "frame") {
      const C = s(), ne = l(C);
      if (!C || !ne || !(Number((P == null ? void 0 : P.x) || 0) >= Number(ne.x || 0) && Number((P == null ? void 0 : P.x) || 0) <= Number(ne.x || 0) + Number(ne.w || 0) && Number((P == null ? void 0 : P.y) || 0) >= Number(ne.y || 0) && Number((P == null ? void 0 : P.y) || 0) <= Number(ne.y || 0) + Number(ne.h || 0))) return null;
      const z = U(P, C, performance.now()), w = z ? o(z) : null;
      if (w)
        for (const ie of a()) {
          if (!G(ie)) continue;
          const be = de(ie, w);
          if (be && Number(be.x) >= 0 && Number(be.x) <= 1 && Number(be.y) >= 0 && Number(be.y) <= 1) {
            const we = $(ie);
            if (we != null && we.visible) return { item: ie, geom: we };
          }
        }
      const Z = c(!1).slice().sort((ie, be) => Number((be == null ? void 0 : be.z_index) || 0) - Number((ie == null ? void 0 : ie.z_index) || 0));
      for (const ie of Z) {
        if (ie.type === "strokeGroup") {
          const A = f(W("paint", ie.actionGroupId || ie.id || ""));
          if (!A) continue;
          const se = $(A);
          if (!(se != null && se.visible)) continue;
          const y = Array.isArray(se.strokePaths) ? se.strokePaths : [];
          for (const b of y) {
            const E = Array.isArray(b == null ? void 0 : b.points) ? b.points : [];
            if (!E.length) continue;
            if (b.closed && E.length >= 3 && Jr(P, E)) return { item: A, geom: se };
            const S = Math.max(8, Number((b == null ? void 0 : b.lineWidth) || 0) * 0.5 + 6);
            for (let j = 0; j < E.length - 1; j += 1)
              if (Rc(P, E[j], E[j + 1]) <= S * S) return { item: A, geom: se };
            if (E.length === 1 && Bo(P, E[0]) <= S * S) return { item: A, geom: se };
          }
          continue;
        }
        if (ie.type === "rasterObject") {
          const A = d(T(((F = ie.item) == null ? void 0 : F.id) || ie.id || ""));
          if (!A) continue;
          const se = $(A);
          if (m(A, se, P, z)) return { item: A, geom: se };
          continue;
        }
        const be = ie.item;
        if (!be || !G(be) || !w) continue;
        const we = de(be, w);
        if (we && Number(we.x) >= 0 && Number(we.x) <= 1 && Number(we.y) >= 0 && Number(we.y) <= 1) {
          const A = $(be);
          if (A != null && A.visible) return { item: be, geom: A };
        }
      }
      return null;
    }
    const M = [
      ...c(!1).slice().sort((C, ne) => Number((ne == null ? void 0 : ne.z_index) || 0) - Number((C == null ? void 0 : C.z_index) || 0)).map((C) => {
        var ne;
        return C.type === "strokeGroup" ? f(W("paint", C.actionGroupId || C.id || "")) : C.type === "rasterObject" ? d(T(((ne = C.item) == null ? void 0 : ne.id) || C.id || "")) : C.item;
      }).filter(Boolean),
      ...n ? a().filter((C) => te(C)) : []
    ];
    for (const C of M) {
      if (re(C)) {
        const Q = $(C);
        if (!(Q != null && Q.visible)) continue;
        const z = Array.isArray(Q.strokePaths) ? Q.strokePaths : [];
        for (const w of z) {
          const Z = Array.isArray(w == null ? void 0 : w.points) ? w.points : [];
          if (!Z.length) continue;
          if (w.closed && Z.length >= 3 && Jr(P, Z)) return { item: C, geom: Q };
          const ie = Math.max(8, Number((w == null ? void 0 : w.lineWidth) || 0) * 0.5 + 6);
          for (let be = 0; be < Z.length - 1; be += 1)
            if (Rc(P, Z[be], Z[be + 1]) <= ie * ie) return { item: C, geom: Q };
          if (Z.length === 1 && Bo(P, Z[0]) <= ie * ie) return { item: C, geom: Q };
        }
        continue;
      }
      if (_(C)) {
        const Q = $(C);
        if (!(Q != null && Q.visible)) continue;
        if (m(C, Q, P)) return { item: C, geom: Q };
        continue;
      }
      const ne = $(C);
      if (ne.visible && Jr(P, ne.corners))
        return { item: C, geom: ne };
    }
    return null;
  }
  function le(P, M, F = null) {
    if (!P || !P.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (G(F)) return vu(P, M);
    if (P.kind === "strokeGroup") {
      const C = P.corners.findIndex((Q) => Bo(Q, M) <= 121);
      if (C >= 0) {
        const Q = P.corners[C], z = Q.x - P.center.x, w = Q.y - P.center.y, Z = z * w >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: C, cursor: Z };
      }
      const ne = Array.isArray(P.strokePaths) ? P.strokePaths : [];
      for (const Q of ne) {
        const z = Array.isArray(Q == null ? void 0 : Q.points) ? Q.points : [];
        if (Q.closed && z.length >= 3 && Jr(M, z)) return { kind: "move", cursor: "default" };
        const w = Math.max(8, Number((Q == null ? void 0 : Q.lineWidth) || 0) * 0.5 + 6);
        for (let Z = 0; Z < z.length - 1; Z += 1)
          if (Rc(M, z[Z], z[Z + 1]) <= w * w) return { kind: "move", cursor: "default" };
      }
      return Jr(M, P.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (P.kind === "rasterObject") {
      const C = P.corners.findIndex((ne) => Bo(ne, M) <= 121);
      if (C >= 0) {
        const ne = P.corners[C], Q = ne.x - P.center.x, z = ne.y - P.center.y, w = Q * z >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: C, cursor: w };
      }
      return Jr(M, P.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return Iw(P, M, {
      edges: i === "cutout" || te(F),
      resize: !(te(F) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function _e(P, M) {
    return {
      x0: Math.min(Number((P == null ? void 0 : P.x) || 0), Number((M == null ? void 0 : M.x) || 0)),
      y0: Math.min(Number((P == null ? void 0 : P.y) || 0), Number((M == null ? void 0 : M.y) || 0)),
      x1: Math.max(Number((P == null ? void 0 : P.x) || 0), Number((M == null ? void 0 : M.x) || 0)),
      y1: Math.max(Number((P == null ? void 0 : P.y) || 0), Number((M == null ? void 0 : M.y) || 0))
    };
  }
  function Y(P, M) {
    return !!P && !!M && Number(M.x) >= Number(P.x0) && Number(M.x) <= Number(P.x1) && Number(M.y) >= Number(P.y0) && Number(M.y) <= Number(P.y1);
  }
  function O(P, M) {
    if (!P || !(M != null && M.visible) || !Array.isArray(M.corners)) return !1;
    if (M.corners.some((ne) => Y(P, ne))) return !0;
    const F = (Number(P.x0) + Number(P.x1)) * 0.5, C = (Number(P.y0) + Number(P.y1)) * 0.5;
    return !!Jr({ x: F, y: C }, M.corners);
  }
  function B(P) {
    if (ye(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ve("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ve("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ve("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ve("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ve("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ve(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ve("grabbing") : ve("default");
      return;
    }
    if (x()) {
      ve("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        ve(DN);
        return;
      }
      if (t.primaryTool !== "cursor") {
        ve("default");
        return;
      }
      ve("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      ve("default");
      return;
    }
    if (t.gizmoAxis) {
      ve("grab");
      return;
    }
    const M = u(), F = M ? $(M) : null, C = M ? h(M) : !1, ne = C ? { kind: "none", cursor: "default" } : le(F, P, M);
    if (!C && ne.kind !== "none") {
      ve(ne.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && ge(P)) {
      ve("default");
      return;
    }
    ve(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(P) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: s,
        getCutoutSelectableItemsForHit: a,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: d,
        getSelected: u,
        getStrokeGroupItem: f,
        hitRasterObjectAt: m,
        isActivePaintCursorVisible: x,
        isErpCamera: g,
        isItemLocked: h,
        isRasterObjectItem: _,
        isShotItem: te,
        isStickerItem: G,
        isStrokeGroupItem: re,
        makeRasterObjectSelectionId: T,
        makeStrokeGroupSelectionId: W,
        objectGeom: $,
        screenPosToFrameAsErpPoint: U,
        setCanvasCursor: ve,
        syncPaintCursorElement: ye,
        worldDirToFrameLocalPoint: de
      } = P);
    },
    hitObjectAt: ge,
    handleHit: le,
    rectFromPoints: _e,
    rectIntersectsGeom: O,
    updateCursor: B
  };
}
function CA(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    scheduler: i,
    selectionMenu: o,
    stageWrap: s,
    state: a,
    tooltip: l,
    tooltipEl: c,
    type: d,
    uiState: u
  } = e;
  let f, m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le = !1;
  function _e() {
    return le;
  }
  function Y() {
    if (!o) return;
    if (le = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || re() && $()) {
      const z = O();
      le = z.visible, B(z);
      return;
    }
    const F = _(), C = te();
    if (!F && C.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const ne = G(), Q = z2({
      type: d,
      selected: F,
      selectedItems: C,
      selectedKind: ne,
      geom: C.length > 1 ? h(C) : ge(F),
      allLocked: f(C),
      anyLocked: C.some((z) => U(z)),
      selectedLocked: U(F),
      activeAspect: ve(F) && T() ? yo : Rr(F),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: W,
      isStickerHidden: de,
      canRestoreSelectedToInitial: m,
      iconSet: je,
      cameraShot: t,
      coverage: a.coverage
    });
    B(Q);
  }
  function O() {
    const F = ye() && !n.interaction ? g().space : null;
    if (!(F != null && F.gizmo)) return { visible: !1 };
    const C = x(), ne = F.stickers.find((Z) => Z.id === n.worldSelectedId), z = (ne ? _d(ne) : [F.gizmo.transform.position]).map((Z) => bs(C, Z, r.width, r.height)).filter(Boolean), w = HS(C, F.gizmo.transform.position, F.gizmo.mode, r.width, r.height);
    return j2({ corners: z, gizmoBox: w, gizmoMode: F.gizmo.mode, camera: re() });
  }
  function B(F) {
    var w, Z;
    if (!F.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const C = (ie, be) => H2(F.anchor, ie, be, r.width, r.height), ne = Math.max(1, Number(((w = n.menuSize) == null ? void 0 : w.w) || 220)), Q = Math.max(1, Number(((Z = n.menuSize) == null ? void 0 : Z.h) || 40)), z = C(ne, Q);
    if (!z) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: z.left,
      top: z.top,
      items: F.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const ie = o.getBoundingClientRect(), be = Math.round(Number((ie == null ? void 0 : ie.width) || 0)) || 220, we = Math.round(Number((ie == null ? void 0 : ie.height) || 0)) || 40;
      n.menuSize = { w: be, h: we, measured: !0 };
      const A = C(be, we);
      A && (u.selectionMenu.left = A.left, u.selectionMenu.top = A.top);
    });
  }
  function P() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function M(F) {
    if (!c || !F || !F.isConnected) return;
    const C = String(F.getAttribute("data-tip") || "").trim();
    if (!C) return;
    u.tooltip.text = C, u.tooltip.visible = !0;
    const ne = F;
    i.requestFrame(() => {
      var S, j;
      if (l.target !== ne || !c || !(ne != null && ne.isConnected)) return;
      const Q = s.getBoundingClientRect(), z = ne.getBoundingClientRect(), w = 8, Z = 12, ie = Math.round(Number(((S = c.getBoundingClientRect()) == null ? void 0 : S.width) || 0)) || 100, be = Math.round(Number(((j = c.getBoundingClientRect()) == null ? void 0 : j.height) || 0)) || 24, we = !!ne.closest(".pano-floating-left"), A = !!ne.closest(".pano-frame-rail"), se = !!ne.closest(".pano-paint-footer") || !!ne.closest(".pano-paint-color-float");
      let y = "", b = z.left - Q.left + z.width * 0.5 - ie * 0.5, E = z.top - Q.top - be - Z;
      if (ne.closest(".pano-floating-top") && (E = z.bottom - Q.top + Z), we)
        y = "tool-rail", b = z.right - Q.left + 10, E = z.top - Q.top + z.height * 0.5 - be * 0.5, b = Ie(b, w, Math.max(w, Q.width - ie - w)), E = Ie(E, w, Math.max(w, Q.height - be - w));
      else if (A)
        y = "frame-rail", b = z.left - Q.left - ie - 10, E = z.top - Q.top + z.height * 0.5 - be * 0.5, b = Ie(b, w, Math.max(w, Q.width - ie - w)), E = Ie(E, w, Math.max(w, Q.height - be - w));
      else if (se) {
        y = "footer";
        const H = ne.closest(".pano-paint-footer"), X = H ? H.getBoundingClientRect() : z;
        b = X.left - Q.left + X.width * 0.5 - ie * 0.5, E = X.bottom - Q.top + 5, b = Ie(b, w, Math.max(w, Q.width - ie - w)), E = Math.max(w, E);
      }
      b = Ie(b, w, Math.max(w, Q.width - ie - w)), E = Math.max(w, E), u.tooltip.left = b, u.tooltip.top = E, u.tooltip.variant = y, u.tooltip.visible = !0;
    });
  }
  return {
    connect(F) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: m,
        currentSpaceCamera: x,
        editorViewInput: g,
        getMultiSelectionGeom: h,
        getSelected: _,
        getSelectedItems: te,
        getSelectedKind: G,
        isCameraSelected: re,
        isErpCamera: T,
        isExternalSticker: W,
        isFreeSpaceView: $,
        isItemLocked: U,
        isShotItem: ve,
        isSpaceView: ye,
        isStickerHidden: de,
        objectGeom: ge
      } = F);
    },
    isWorldMenuShown: _e,
    updateSelectionMenu: Y,
    hideTooltip: P,
    showTooltipFor: M
  };
}
function IA(e) {
  const {
    canvas: t,
    dragFrames: r,
    editor: n,
    editorView: i,
    node: o,
    paintColorPop: s,
    readOnly: a,
    runtime: l,
    sceneV2: c,
    shotEditor: d,
    state: u,
    stateV2: f,
    timeline: m,
    type: x,
    viewController: g
  } = e;
  let h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F, C, ne, Q, z, w, Z, ie, be, we, A, se, y, b, E, S, j, H, X, L, D, k, R, ee, ce, Se, ue, he, me, J, fe, K, p, N, v, I, q, pe, V, oe, Pe, Ae, xe, Ce, $e, ze, Ge, Re, He, ae, Oe, Ne, Le, Ye, Ke, We, mt, bt, Tt, Nt, Pn, qe, sn, Ut, fi, Wr, pi, on, yn, Ur, Pr, dr, Mo, Po, No, Ao, Os, Fs, Co, Ot, Nn, Qn, Vi, Vn, Ts, Ds, Ls, Br = null;
  function ql(Fe) {
    m.selection && (m.selection = null, Fs());
    const Ee = Le(Fe);
    Br = Ee, Nt(Ee, !0), le(), g.state.inertia.active = !1, g.state.inertia.vx = 0, g.state.inertia.vy = 0;
    const Me = K(), vt = fe(), lt = Me || vt ? Kw(Vi(), Fe) : null;
    if (vt && lt) {
      Fe.preventDefault(), lt === "look" ? yn(Ee, Fe.pointerId) : on(lt, Ee, Fe.pointerId);
      return;
    }
    if (lt === "look") {
      Fe.preventDefault();
      const Xe = Ye(Fe);
      n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, g.startDrag(Xe.x, Xe.y, Fe.pointerId, performance.now()), Ot(Ee), t.setPointerCapture(Fe.pointerId);
      return;
    }
    if (lt) {
      Fe.preventDefault(), Ur(lt, Ee, Fe.pointerId);
      return;
    }
    if ((Me || vt) && Fe.button !== 0) {
      Fe.preventDefault();
      return;
    }
    if (Fe.button === 1) {
      if (Fe.preventDefault(), n.mode === "frame") {
        const Xe = ie();
        if (!Xe || a || Xe.locked === !0) return;
        n.interaction = {
          kind: "pan_frame",
          shot: Xe,
          last: Ee,
          start: {
            yaw_deg: Number(Xe.yaw_deg || 0),
            pitch_deg: Number(Xe.pitch_deg || 0)
          },
          changed: !1
        };
      } else {
        const Xe = n.mode === "unwrap" ? Ee : Ye(Fe);
        n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, g.startDrag(Xe.x, Xe.y, Fe.pointerId, performance.now());
      }
      Ot(Ee), t.setPointerCapture(Fe.pointerId);
      return;
    }
    if (Fe.button !== 0) return;
    if (n.mode === "frame" && (Fe.altKey || Fe.shiftKey) && !a) {
      const Xe = ie(), Ue = y(Xe);
      if (!Xe || Xe.locked === !0 || !Ue) return;
      const Qe = Dg({
        frame: Ue,
        point: Ee,
        startRollDeg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0),
        shiftKey: Fe.shiftKey,
        altKey: Fe.altKey,
        allowAlt: !0
      });
      if (!Qe) return;
      n.interaction = {
        kind: "roll_frame",
        shot: Xe,
        center: Qe.center,
        lastAngle: Qe.lastAngle,
        accumulatedRad: Qe.accumulatedRad,
        rollGesture: Qe,
        start: { roll_deg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0) },
        changed: !1,
        altStarted: Qe.source === "alt",
        source: Qe.source
      }, t.setPointerCapture(Fe.pointerId), Fe.preventDefault(), Ao(), Ne({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      yn(Ee, Fe.pointerId), Fe.preventDefault();
      return;
    }
    if (a) {
      n.mode === "pano" && Eo(Fe, Ee);
      return;
    }
    if (s && !s.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (dr() || Mo())) {
      if (!Ce()) return;
      Pr();
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", Ue = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Qe = n.mode === "frame" && Mo() ? ie() : null, Qt = { kind: "ERP_GLOBAL" }, xt = Qe ? We(Ee, Qe, performance.now()) : Ke(Ee, performance.now());
      if (!xt) {
        Ot(Ee);
        return;
      }
      n.interaction = {
        kind: Ue === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: eo("live"),
        stroke: Ue === "lasso_fill" ? ye(Xe, Ue, [xt], Qt) : ve(Xe, Ue, [xt], Qt)
      }, me();
      const Nr = be(n.interaction);
      if (Nr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Nr), n.interaction.kind === "paint_stroke") {
          const $i = n.paintEngine.ensureTarget(Nr), zi = Number((xt == null ? void 0 : xt.u) ?? (xt == null ? void 0 : xt.x) ?? 0), ji = Number((xt == null ? void 0 : xt.v) ?? (xt == null ? void 0 : xt.y) ?? 0);
          n.paintEngine.appendStrokePoint($i, zi, ji, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Nr);
      Ot(Ee), t.setPointerCapture(Fe.pointerId), Ne();
      return;
    }
    const ut = k(), Je = D(), et = ut.length > 1 ? E(ut) : Je ? xe(Je) : null;
    if (n.primaryTool === "cursor" && (Fe.ctrlKey || Fe.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ee, current: Ee }, Ot(Ee), t.setPointerCapture(Fe.pointerId), Ne({ localOnly: !0, reason: ft.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && de() && K() && pi(Fe, Ee) || n.primaryTool === "cursor" && c && q() && Xl(Fe, Ee)) return;
    if (ut.length > 1 && (et != null && et.visible)) {
      if ((ut.some((Ue) => p(Ue)) ? { kind: "none" } : Se(et, Ee)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: ut.map((Ue) => Ue),
          offset: { x: Ee.x - et.center.x, y: Ee.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: ut.filter((Ue) => pe(Ue)).map((Ue) => ({
            id: String(Ue.id || ""),
            yaw_deg: Number(Ge(Ue).yaw_deg || 0),
            pitch_deg: Number(Ge(Ue).pitch_deg || 0),
            center: (() => {
              var Qt, xt;
              const Qe = xe(Ue);
              return Qe != null && Qe.visible ? { x: Number(((Qt = Qe.center) == null ? void 0 : Qt.x) || 0), y: Number(((xt = Qe.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })()
          })),
          strokeSnapshots: ut.filter((Ue) => V(Ue)).map((Ue) => ({
            id: String(Ue.actionGroupId || Ue.id || ""),
            layerKind: String(Ue.layerKind || "paint"),
            snapshot: un(ee(Ue.actionGroupId, Ue.layerKind)),
            frameSnapshot: un(ne(Ue.actionGroupId, Ue.layerKind)),
            center: (() => {
              var Qt, xt;
              const Qe = xe(Ue);
              return Qe != null && Qe.visible ? { x: Number(((Qt = Qe.center) == null ? void 0 : Qt.x) || 0), y: Number(((xt = Qe.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: R(Ue.actionGroupId, Ue.layerKind)
          })),
          rasterSnapshots: ut.filter((Ue) => N(Ue)).map((Ue) => ({
            id: $e(Ue.rasterObjectId || Ue.id || ""),
            snapshot: un(H().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === $e(Ue.rasterObjectId || Ue.id || ""))),
            center: (() => {
              var Qt, xt;
              const Qe = xe(Ue);
              return Qe != null && Qe.visible ? { x: Number(((Qt = Qe.center) == null ? void 0 : Qt.x) || 0), y: Number(((xt = Qe.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: j(Ue)
          }))
        }, Ot(Ee), t.setPointerCapture(Fe.pointerId);
        return;
      }
    } else if (Je && (et != null && et.visible)) {
      const Xe = p(Je) ? { kind: "none" } : Se(et, Ee, Je);
      if (Xe.kind === "scale") {
        n.interaction = V(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          snapshot: un(ee(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: un(ne(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : N(Je) ? {
          kind: "scale_raster_object",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          snapshot: un(H().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === $e(Je.rasterObjectId || Je.id || ""))),
          cursor: Xe.cursor
        } : {
          kind: "scale",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          startHFOV: Number(Ge(Je).hFOV_deg || 20),
          startVFOV: Number(Ge(Je).vFOV_deg || 20),
          cursor: Xe.cursor
        }, Ot(Ee), t.setPointerCapture(Fe.pointerId);
        return;
      }
      if (Xe.kind === "scale_x" || Xe.kind === "scale_y") {
        n.interaction = {
          kind: Xe.kind,
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          startHFOV: Number(Ge(Je).hFOV_deg || 20),
          startVFOV: Number(Ge(Je).vFOV_deg || 20),
          cursor: Xe.cursor,
          edge: Xe.edge
        }, Ot(Ee), t.setPointerCapture(Fe.pointerId);
        return;
      }
      if (Xe.kind === "rotate") {
        n.interaction = V(Je) ? {
          kind: "rotate_stroke_group",
          item: Je,
          center: et.center,
          startAng: Math.atan2(Ee.y - et.center.y, Ee.x - et.center.x),
          snapshot: un(ee(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: un(ne(Je.actionGroupId, Je.layerKind))
        } : {
          kind: "rotate",
          item: Je,
          center: et.center,
          startRot: Number(Ge(Je).rot_deg || Ge(Je).roll_deg || 0),
          startAng: Math.atan2(Ee.y - et.center.y, Ee.x - et.center.x)
        }, Ot(Ee), t.setPointerCapture(Fe.pointerId);
        return;
      }
      if (Xe.kind === "move") {
        if (V(Je)) {
          const Ue = n.mode === "frame" ? (() => {
            const Qe = ie();
            return Qe ? We(Ee, Qe, performance.now()) : null;
          })() : Ke(Ee, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: Ue,
            snapshot: un(ee(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: un(ne(Je.actionGroupId, Je.layerKind))
          }, Ot(Ee), t.setPointerCapture(Fe.pointerId);
          return;
        }
        if (N(Je)) {
          const Ue = n.mode === "frame" ? (() => {
            const Qe = ie();
            return Qe ? We(Ee, Qe, performance.now()) : null;
          })() : Ke(Ee, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Je,
            startUv: Ue,
            snapshot: un(H().find((Qe) => String((Qe == null ? void 0 : Qe.id) || "") === $e(Je.rasterObjectId || Je.id || "")))
          }, Ot(Ee), t.setPointerCapture(Fe.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Je,
          offset: { x: Ee.x - et.center.x, y: Ee.y - et.center.y }
        }, Ot(Ee), t.setPointerCapture(Fe.pointerId);
        return;
      }
    }
    const rt = he(Ee);
    if (rt) {
      const Xe = n.selectedId !== rt.item.id;
      if (Xe && n.selectedId && (Re(), B()), Pn(rt.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && Qn(), Nn(), Ne(), p(rt.item)) {
        Ot(Ee);
        return;
      }
      n.interaction = {
        kind: V(rt.item) ? "move_stroke_group" : N(rt.item) ? "move_raster_object" : "move",
        item: rt.item,
        offset: { x: Ee.x - rt.geom.center.x, y: Ee.y - rt.geom.center.y },
        startUv: V(rt.item) || N(rt.item) ? n.mode === "frame" ? (() => {
          const Ue = ie();
          return Ue ? We(Ee, Ue, performance.now()) : null;
        })() : Ke(Ee, performance.now()) : null,
        snapshot: V(rt.item) ? un(ee(rt.item.actionGroupId, rt.item.layerKind)) : N(rt.item) ? un(H().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === $e(rt.item.rasterObjectId || rt.item.id || ""))) : null,
        frameSnapshot: V(rt.item) ? un(ne(rt.item.actionGroupId, rt.item.layerKind)) : null
      }, Ot(Ee), t.setPointerCapture(Fe.pointerId);
      return;
    }
    const er = !!n.selectedId;
    er && (Re(), B()), _e(), er && Qn(), Nn(), Ne(), n.mode === "pano" && Eo(Fe, Ee);
  }
  function Yr(Fe, Ee) {
    return i.gizmoPointer(Fe, P(), Ee.x, Ee.y, t.width, t.height);
  }
  function Xl(Fe, Ee) {
    var et;
    const Me = (et = C().space) == null ? void 0 : et.gizmo;
    if (Me && Yr("hover", Ee) !== null && Yr("down", Ee))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: Me.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: Me.transform,
        base: Fi(Tt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Fe.pointerId), Ot(Ee), !0;
    const vt = k(), lt = D(), ut = vt.length > 1 ? vt.some((rt) => p(rt)) ? "none" : Se(E(vt), Ee).kind : lt && !p(lt) ? Se(xe(lt), Ee, lt).kind : "none";
    if (ut !== "none" && ut !== "move") return !1;
    const Je = i.pickSticker(P(), Ee.x, Ee.y, t.width, t.height);
    return u.stickers.some((rt) => rt.id === Je && rt.placement === "world") ? (n.worldSelectedId !== Je && (n.selectedId && (Re(), B()), bt(Je), Qn(), Nn(), No(), Ne()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Fe.pointerId), !0) : !1;
  }
  function Io(Fe) {
    var vt;
    const Me = !!(n.worldSelectedId || J()) && n.primaryTool === "cursor" && q() && !!((vt = C().space) != null && vt.gizmo) ? Yr("hover", Fe) : null;
    Me !== n.gizmoAxis && (n.gizmoAxis = Me, l.backgroundDirty = !0, Ne({ localOnly: !0, reason: ft.VIEW }));
  }
  function Rs(Fe, Ee) {
    const Me = Yr("move", Ee);
    if (Me && Fe.camera) {
      for (const [lt, ut] of Object.entries(Bf(Fe.mode, Fe.base, Fe.start, Me))) hn(u.camera, lt, n.frame, ut);
      Po(), Fe.changed = !0, r.request("sidePanel"), Ne({ localOnly: !0 });
      return;
    }
    const vt = u.stickers.find((lt) => lt.id === Fe.id);
    !Me || !vt || (uS(vt, n.frame, Bf(Fe.mode, Fe.base, Fe.start, Me)), Fe.changed = !0, oe(), r.request("sidePanel"), Ne({ localOnly: !0 }));
  }
  function Vs(Fe) {
    n.interaction = null, n.gizmoAxis = null, Fe.kind === "world_gizmo" && (Yr("up", n.pointerPos), l.backgroundDirty = !0, Fe.changed && (Re(), Y(), Qn())), Ot(n.pointerPos), Ne();
  }
  function Eo(Fe, Ee) {
    if (K()) {
      const vt = Vi().emptyLeft;
      vt && Ur(vt, Ee, Fe.pointerId);
      return;
    }
    const Me = Ye(Fe);
    n.interaction = { kind: "view", last: Me, lastTs: performance.now() }, g.startDrag(Me.x, Me.y, Fe.pointerId, performance.now()), Ot(Ee), t.setPointerCapture(Fe.pointerId);
  }
  function $s(Fe, Ee) {
    if (!f || !ze.playing || (ze.stop(), Fe.kind === "frame_pan")) return;
    if (Fe.kind === "frame_orbit") {
      const lt = Q();
      lt && (Fe.pivot = Z(lt, w(lt), Ee));
      return;
    }
    if (Fe.kind === "world_gizmo") {
      const lt = u.stickers.find((ut) => ut.id === Fe.id);
      Fe.camera ? Fe.base = M() : lt && (Fe.base = Fi(lt, n.frame));
      return;
    }
    if (Fe.kind === "move_multi") {
      const lt = E(Fe.items);
      if (!(lt != null && lt.visible)) return;
      Fe.offset = { x: Ee.x - lt.center.x, y: Ee.y - lt.center.y }, Fe.startCenter = { x: lt.center.x, y: lt.center.y };
      for (const ut of Fe.stickerSnapshots) {
        const Je = Fe.items.find((rt) => String((rt == null ? void 0 : rt.id) || "") === ut.id), et = Je ? xe(Je) : null;
        et != null && et.visible && (ut.yaw_deg = Number(Ge(Je).yaw_deg || 0), ut.pitch_deg = Number(Ge(Je).pitch_deg || 0), ut.center = { x: et.center.x, y: et.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Fe.kind)) return;
    const Me = xe(Fe.item);
    if (!(Me != null && Me.visible)) return;
    const vt = Ge(Fe.item);
    if (Fe.kind === "move") {
      Fe.offset = { x: Ee.x - Me.center.x, y: Ee.y - Me.center.y };
      return;
    }
    if (Fe.center = Me.center, Fe.kind === "rotate") {
      Fe.startRot = Number(vt.rot_deg || vt.roll_deg || 0), Fe.startAng = Math.atan2(Ee.y - Me.center.y, Ee.x - Me.center.x);
      return;
    }
    Fe.startDist = Math.max(1, Math.hypot(Ee.x - Me.center.x, Ee.y - Me.center.y)), Fe.startHFOV = Number(vt.hFOV_deg || 20), Fe.startVFOV = Number(vt.vFOV_deg || 20);
  }
  function zs(Fe) {
    var vt, lt, ut, Je, et, rt, er, Xe, Ue, Qe, Qt, xt, Nr, $i, zi, ji, Ws, Us, Bs, Ys, qs, Xs;
    const Ee = Le(Fe);
    if (Nt(Ee, !0), !n.interaction) {
      Io(Ee), Ot(Ee);
      return;
    }
    Ot(Ee);
    const Me = n.interaction;
    if (Br && (Ee.x !== Br.x || Ee.y !== Br.y)) {
      const ct = Br;
      Br = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(Me.kind) || $s(Me, ct);
    }
    if (Me.kind !== "world_select") {
      if (Me.kind === "world_gizmo") {
        Rs(Me, Ee);
        return;
      }
      if (Me.kind === "paint_stroke") {
        const ct = typeof Fe.getCoalescedEvents == "function" ? Fe.getCoalescedEvents() : [Fe];
        let pt = !1;
        ct.forEach((yt) => {
          const _t = Le(yt);
          if (n.mode === "frame") {
            const An = ie(), Jt = An ? y(An) : null;
            if (Jt) {
              const Cn = (_t.x - Jt.x) / Math.max(1, Jt.w), Vt = (_t.y - Jt.y) / Math.max(1, Jt.h);
              if (!(Cn >= 0 && Cn <= 1 && Vt >= 0 && Vt <= 1)) {
                Me._outOfFrame = !0;
                return;
              }
              Me._outOfFrame && (Me._outOfFrame = !1, _(Me));
            }
          }
          G(Me, _t, performance.now()) && (pt = !0);
        }), pt && Ne({ localOnly: !0, reason: ft.PAINT });
        return;
      }
      if (Me.kind === "paint_lasso_fill") {
        const ct = typeof Fe.getCoalescedEvents == "function" ? Fe.getCoalescedEvents() : [Fe];
        let pt = !1;
        if (ct.forEach((yt) => {
          const _t = Le(yt);
          if (n.mode === "frame") {
            const An = ie(), Jt = An ? y(An) : null;
            if (Jt) {
              const Cn = (_t.x - Jt.x) / Math.max(1, Jt.w), Vt = (_t.y - Jt.y) / Math.max(1, Jt.h);
              if (!(Cn >= 0 && Cn <= 1 && Vt >= 0 && Vt <= 1)) {
                Me._outOfFrame = !0;
                return;
              }
              Me._outOfFrame && (Me._outOfFrame = !1, h(Me));
            }
          }
          te(Me, _t, performance.now()) && (pt = !0);
        }), pt) {
          const yt = be(Me);
          yt && n.paintEngine.updateActiveStroke(Me.stroke, yt), Ne({ localOnly: !0, reason: ft.PAINT });
        }
        return;
      }
      if (Me.kind === "view") {
        const ct = performance.now(), pt = n.mode === "unwrap" ? Ee : Ye(Fe);
        g.moveDrag(pt.x, pt.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), Me.lastTs = ct, Me.last = pt, Ne({ localOnly: !0, reason: ft.VIEW });
        return;
      }
      if (Me.kind === "frame_pan" || Me.kind === "frame_orbit") {
        F(Me, Ee);
        return;
      }
      if (Me.kind === "space_pan" || Me.kind === "space_orbit") {
        const ct = fi();
        sn(Me.kind === "space_pan" ? $m(ct, Ee.x - Me.last.x, Ee.y - Me.last.y, t.width, t.height, Me.depth) : Vm(ct, Ee.x - Me.last.x, Ee.y - Me.last.y, t.height, Me.pivot)), Me.last = Ee;
        return;
      }
      if (Me.kind === "pan_frame") {
        const ct = se(Me.shot);
        if (!ct || !Me.shot) return;
        const pt = Ee.x - Me.last.x, yt = Ee.y - Me.last.y, _t = Rg(Me.shot, {
          dx: pt,
          dy: yt,
          focalPx: ct.focalPx,
          invertX: ((vt = u.ui_settings) == null ? void 0 : vt.invert_view_x) === !0,
          invertY: ((lt = u.ui_settings) == null ? void 0 : lt.invert_view_y) === !0
        });
        Me.shot.yaw_deg = _t.yaw_deg, Me.shot.pitch_deg = _t.pitch_deg, Me.changed = Me.changed || Math.abs(pt) > 0 || Math.abs(yt) > 0, Me.last = Ee, Ne({ localOnly: !0 });
        return;
      }
      if (Me.kind === "roll_frame") {
        if (Me.source === "knob") return;
        W(Me, Ee, Fe);
        return;
      }
      if (Me.kind === "move") {
        const ct = Ee.x - Me.offset.x, pt = Ee.y - Me.offset.y;
        if (n.mode === "frame" && d) {
          const yt = ie(), _t = y(yt);
          if (!yt || !_t) return;
          const An = {
            x: Ie((ct - _t.x) / Math.max(1, _t.w), 0, 1),
            y: Ie((pt - _t.y) / Math.max(1, _t.h), 0, 1)
          }, Jt = z(yt, An);
          if (!Jt) return;
          const Cn = fa(Jt);
          Vn(Me.item, { yaw_deg: Cn.yaw, pitch_deg: Cn.pitch });
        } else if (n.mode === "unwrap") {
          const yt = ce(), _t = Ie((ct - yt.x) / Math.max(yt.w, 1), 0, 1), An = Ie((pt - yt.y) / Math.max(yt.h, 1), 0, 1);
          Vn(Me.item, { yaw_deg: Ht(_t * 360 - 180), pitch_deg: Ie(90 - An * 180, -90, 90) });
        } else {
          const yt = mt(ct, pt), _t = fa(yt);
          Vn(Me.item, { yaw_deg: _t.yaw, pitch_deg: _t.pitch });
        }
        pe(Me.item) && oe(), Ne({ localOnly: !0 });
        return;
      }
      if (Me.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const _t = ie();
          return _t ? We(Ee, _t, performance.now()) : null;
        })() : Ke(Ee, performance.now());
        if (!ct || !Me.startUv) return;
        const pt = Ut(Number(ct.u || 0), Number(Me.startUv.u || 0)), yt = Number(ct.v || 0) - Number(Me.startUv.v || 0);
        $((ut = Me.item) == null ? void 0 : ut.actionGroupId, pt, yt, Me.snapshot, (Je = Me.item) == null ? void 0 : Je.layerKind, Me.frameSnapshot) && (Ae({ rebuildPaintEngine: !1 }), Ne({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Me.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const _t = ie();
          return _t ? We(Ee, _t, performance.now()) : null;
        })() : Ke(Ee, performance.now());
        if (!ct || !Me.startUv) return;
        const pt = Ut(Number(ct.u || 0), Number(Me.startUv.u || 0)), yt = Number(ct.v || 0) - Number(Me.startUv.v || 0);
        re(((et = Me.item) == null ? void 0 : et.rasterObjectId) || ((rt = Me.item) == null ? void 0 : rt.id) || "", pt, yt, Me.snapshot) && (Pe(), Ne({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Me.kind === "scale_raster_object") {
        const pt = Math.max(1, Math.hypot(Ee.x - Me.center.x, Ee.y - Me.center.y)) / Math.max(1, Number(Me.startDist || 1));
        T(((er = Me.item) == null ? void 0 : er.rasterObjectId) || ((Xe = Me.item) == null ? void 0 : Xe.id) || "", pt, Me.snapshot) && (Pe(), Ne({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Me.kind === "move_multi") {
        const ct = Ee.x - Number(((Ue = Me.offset) == null ? void 0 : Ue.x) || 0), pt = Ee.y - Number(((Qe = Me.offset) == null ? void 0 : Qe.y) || 0);
        let yt = !1, _t = !1, An = !1;
        const Jt = ct - Number(((Qt = Me.startCenter) == null ? void 0 : Qt.x) || ct), Cn = pt - Number(((xt = Me.startCenter) == null ? void 0 : xt.y) || pt);
        for (const Vt of Array.isArray(Me.stickerSnapshots) ? Me.stickerSnapshots : []) {
          const an = (x === "cutout" ? we() : b()).find((Dt) => String((Dt == null ? void 0 : Dt.id) || "") === String(Vt.id || ""));
          if (!an || !pe(an)) continue;
          const nn = {
            x: Number(((Nr = Vt.center) == null ? void 0 : Nr.x) || 0) + Jt,
            y: Number((($i = Vt.center) == null ? void 0 : $i.y) || 0) + Cn
          };
          if (n.mode === "frame" && d) {
            const Dt = ie(), Gt = y(Dt);
            if (!Dt || !Gt) continue;
            const In = {
              x: Ie((nn.x - Gt.x) / Math.max(1, Gt.w), 0, 1),
              y: Ie((nn.y - Gt.y) / Math.max(1, Gt.h), 0, 1)
            }, Hi = z(Dt, In);
            if (!Hi) continue;
            const En = fa(Hi);
            Vn(an, { yaw_deg: En.yaw, pitch_deg: En.pitch });
          } else if (n.mode === "unwrap") {
            const Dt = ce(), Gt = Ie((nn.x - Dt.x) / Math.max(Dt.w, 1), 0, 1), In = Ie((nn.y - Dt.y) / Math.max(Dt.h, 1), 0, 1);
            Vn(an, { yaw_deg: Ht(Gt * 360 - 180), pitch_deg: Ie(90 - In * 180, -90, 90) });
          } else {
            const Dt = mt(nn.x, nn.y), Gt = fa(Dt);
            Vn(an, { yaw_deg: Gt.yaw, pitch_deg: Gt.pitch });
          }
          yt = !0;
        }
        for (const Vt of Array.isArray(Me.strokeSnapshots) ? Me.strokeSnapshots : []) {
          const an = {
            x: Number(((zi = Vt.center) == null ? void 0 : zi.x) || 0) + Jt,
            y: Number(((ji = Vt.center) == null ? void 0 : ji.y) || 0) + Cn
          }, nn = n.mode === "frame" ? (() => {
            const Gt = ie();
            return Gt ? We(an, Gt, performance.now()) : null;
          })() : Ke(an, performance.now()), Dt = Vt.centerUv || null;
          if (nn && Dt) {
            const Gt = Ut(Number(nn.u || 0), Number(Dt.u || 0)), In = Number(nn.v || 0) - Number(Dt.v || 0);
            $(Vt.id, Gt, In, Vt.snapshot, Vt.layerKind, Vt.frameSnapshot) && (yt = !0, _t = !0);
          }
        }
        for (const Vt of Array.isArray(Me.rasterSnapshots) ? Me.rasterSnapshots : []) {
          const an = {
            x: Number(((Ws = Vt.center) == null ? void 0 : Ws.x) || 0) + Jt,
            y: Number(((Us = Vt.center) == null ? void 0 : Us.y) || 0) + Cn
          }, nn = n.mode === "frame" ? (() => {
            const Gt = ie();
            return Gt ? We(an, Gt, performance.now()) : null;
          })() : Ke(an, performance.now()), Dt = Vt.centerUv || null;
          if (nn && Dt) {
            const Gt = Ut(Number(nn.u || 0), Number(Dt.u || 0)), In = Number(nn.v || 0) - Number(Dt.v || 0);
            re(Vt.id, Gt, In, Vt.snapshot) && (yt = !0, An = !0);
          }
        }
        yt && (_t ? Ae({ rebuildPaintEngine: !1 }) : An ? Pe() : oe(), Ne({ localOnly: !0 }));
        return;
      }
      if (Me.kind === "scale_stroke_group") {
        const pt = Math.max(1, Math.hypot(Ee.x - Me.center.x, Ee.y - Me.center.y)) / Math.max(1, Number(Me.startDist || 1));
        U((Bs = Me.item) == null ? void 0 : Bs.actionGroupId, pt, 0, Me.snapshot, (Ys = Me.item) == null ? void 0 : Ys.layerKind, Me.frameSnapshot) && (Ae({ rebuildPaintEngine: !1 }), Ne({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Me.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Ee.y - Me.center.y, Ee.x - Me.center.x) - Number(Me.startAng || 0)) * Ti;
        Fe.shiftKey && (ct = Math.round(ct / 45) * 45), U((qs = Me.item) == null ? void 0 : qs.actionGroupId, 1, ct, Me.snapshot, (Xs = Me.item) == null ? void 0 : Xs.layerKind, Me.frameSnapshot) && (Ae({ rebuildPaintEngine: !1 }), Ne({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (Me.kind === "marquee_select") {
        Me.current = Ee, Ne({ localOnly: !0, reason: ft.OVERLAY });
        return;
      }
      if (Me.kind === "scale") {
        const pt = Math.max(1, Math.hypot(Ee.x - Me.center.x, Ee.y - Me.center.y)) / Me.startDist;
        Vn(Me.item, { hFOV_deg: Ie(Me.startHFOV * pt, 1, 179), vFOV_deg: Ie(Me.startVFOV * pt, 1, 179) }), v(Me.item) || (Me.item.aspect_id = Ci(Me.item)), pe(Me.item) && oe(), Ne({ localOnly: !0 });
        return;
      }
      if (Me.kind === "scale_x") {
        const pt = Math.max(1, Math.hypot(Ee.x - Me.center.x, Ee.y - Me.center.y)) / Me.startDist;
        Vn(Me.item, { hFOV_deg: Ie(Me.startHFOV * pt, 1, 179) }), v(Me.item) || (Me.item.aspect_id = Ci(Me.item)), pe(Me.item) && oe(), Ne({ localOnly: !0 });
        return;
      }
      if (Me.kind === "scale_y") {
        const pt = Math.max(1, Math.hypot(Ee.x - Me.center.x, Ee.y - Me.center.y)) / Me.startDist;
        Vn(Me.item, { vFOV_deg: Ie(Me.startVFOV * pt, 1, 179) }), v(Me.item) || (Me.item.aspect_id = Ci(Me.item)), pe(Me.item) && oe(), Ne({ localOnly: !0 });
        return;
      }
      if (Me.kind === "rotate") {
        let pt = (Math.atan2(Ee.y - Me.center.y, Ee.x - Me.center.x) - Me.startAng) * Ti, yt = Me.startRot - pt;
        Fe.shiftKey && (yt = Math.round(yt / 45) * 45), Vn(Me.item, { [pe(Me.item) ? "rot_deg" : "roll_deg"]: yt }), pe(Me.item) && oe(), Ne({ localOnly: !0 });
      }
    }
  }
  function js() {
    var Ee, Me, vt, lt, ut, Je, et;
    const Fe = n.interaction;
    if (!((Fe == null ? void 0 : Fe.kind) === "roll_frame" && Fe.source === "knob")) {
      if ((Fe == null ? void 0 : Fe.kind) === "space_pan" || (Fe == null ? void 0 : Fe.kind) === "space_orbit") {
        n.interaction = null, Ot(n.pointerPos), Nn();
        return;
      }
      if ((Fe == null ? void 0 : Fe.kind) === "world_select" || (Fe == null ? void 0 : Fe.kind) === "world_gizmo") {
        Vs(Fe);
        return;
      }
      if (((Ee = n.interaction) == null ? void 0 : Ee.kind) === "paint_stroke" || ((Me = n.interaction) == null ? void 0 : Me.kind) === "paint_lasso_fill") {
        me();
        const rt = O(n.interaction), er = !!n.interaction._hasCommittedSegments;
        if (rt || er) {
          Ae();
          const Xe = String(((vt = n.interaction.stroke) == null ? void 0 : vt.actionGroupId) || "").trim();
          if (Xe) {
            const Qe = S().find((Qt) => String((Qt == null ? void 0 : Qt.actionGroupId) || "") === Xe);
            Qe && (Qe.frame = null);
          }
          const Ue = be(n.interaction);
          Ue && (rt ? String(((lt = n.interaction.stroke) == null ? void 0 : lt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ue), Oe()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ue) : n.paintEngine.cancelActiveStroke(Ue)), Re(), B(), Qn(), Nn(), o.setDirtyCanvas(!0, !0), Ne();
        } else {
          const Xe = be(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((ut = n.interaction) == null ? void 0 : ut.kind) === "marquee_select") {
        const rt = He(n.interaction.start, n.interaction.current), Xe = [
          ...x === "cutout" ? A().filter((Ue) => !I(Ue)) : [...b()],
          ...L(),
          ...X()
        ].filter((Ue) => ae(rt, xe(Ue)));
        qe(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), Qn(), Nn(), Ne();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && (Re(), Y(), Qn());
      else if (n.interaction && n.interaction.kind !== "view") {
        let rt = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (rt = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (rt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (rt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (rt = !0), rt && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? Ae({ rebuildPaintEngine: !0 }) : Pe()), Re(), B(), o.setDirtyCanvas(!0, !0), Os(), Nn(), Ne();
      }
      n.interaction = null, (Fe == null ? void 0 : Fe.kind) === "roll_frame" && ue(), me(), Fe && Fe.kind === "view" && Wr(() => g.endDrag(performance.now())), Co(), Nn(), Ot(n.pointerPos), Ne();
    }
  }
  function Hs() {
    var Fe, Ee, Me, vt, lt;
    if (!ge()) {
      if (((Fe = n.interaction) == null ? void 0 : Fe.kind) === "world_select" || ((Ee = n.interaction) == null ? void 0 : Ee.kind) === "world_gizmo") {
        Vs(n.interaction);
        return;
      }
      if (((Me = n.interaction) == null ? void 0 : Me.kind) === "view" && Wr(() => g.endDrag(performance.now())), ((vt = n.interaction) == null ? void 0 : vt.kind) === "paint_stroke" || ((lt = n.interaction) == null ? void 0 : lt.kind) === "paint_lasso_fill") {
        me();
        const ut = be(n.interaction);
        ut && n.paintEngine.cancelActiveStroke(ut);
      }
      n.interaction = null, me(), Co(), Ot(n.pointerPos), Ne({ localOnly: !0 });
    }
  }
  function Gs(Fe) {
    const Ee = Le(Fe), Me = Nt(Ee, !0);
    n.interaction || (Ot(Ee), Me && n.mode === "frame" && n.primaryTool === "cursor" && Ne({ localOnly: !0, reason: ft.OVERLAY }));
  }
  function Ks(Fe) {
    if (n.mode === "frame") {
      const Ee = Le(Fe), Me = Ua(Fe);
      Me && Pr(), Me && fe() ? Ts(Ee, -Me) : Me && Ds(Ee, Me) && Ne({ localOnly: !0 }), Fe.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (le(), K()) {
        const Ee = Ua(Fe);
        Ee && Ls(Le(Fe), -Ee);
      } else g.applyWheelEvent(Fe) && Ne({ localOnly: !0, reason: ft.VIEW });
      Fe.preventDefault();
    }
  }
  return {
    connect(Fe) {
      ({
        _segmentFrameLassoFill: h,
        _segmentFrameStroke: _,
        appendLassoPoint: te,
        appendPaintPoint: G,
        applyRasterObjectOffset: re,
        applyRasterObjectTransform: T,
        applySharedRollInteractionPoint: W,
        applyStrokeGroupOffset: $,
        applyStrokeGroupTransform: U,
        buildFreehandStrokeRecord: ve,
        buildLassoFillStrokeRecord: ye,
        cameraShoots: de,
        cancelFrameCameraGesture: ge,
        cancelViewTransition: le,
        clearSelection: _e,
        commitAndRefreshNode: Y,
        commitPaintInteraction: O,
        commitState: B,
        currentSpaceCamera: P,
        cutoutCamera: M,
        dragFrame: F,
        editorViewInput: C,
        ensureGroupFrame: ne,
        frameContext: Q,
        frameLocalPointToWorldDir: z,
        frameSpaceView: w,
        frameTarget: Z,
        getActiveCutoutShot: ie,
        getActivePaintTargetDescriptor: be,
        getCutoutSelectableItems: we,
        getCutoutSelectableItemsForHit: A,
        getFrameViewLayout: se,
        getFrameViewRect: y,
        getList: b,
        getMultiSelectionGeom: E,
        getPaintingGroupList: S,
        getRasterObjectCenterUv: j,
        getRasterObjectList: H,
        getSelectableRasterObjectItems: X,
        getSelectableStrokeGroupItems: L,
        getSelected: D,
        getSelectedItems: k,
        getStrokeGroupCenterUv: R,
        getStrokeGroupStrokes: ee,
        getUnwrapRect: ce,
        handleHit: Se,
        hideTooltip: ue,
        hitObjectAt: he,
        invalidateLivePaintPreviewCaches: me,
        isCameraSelected: J,
        isFreeFrameView: fe,
        isFreeSpaceView: K,
        isItemLocked: p,
        isRasterObjectItem: N,
        isSceneSticker: v,
        isShotItem: I,
        isSpaceView: q,
        isStickerItem: pe,
        isStrokeGroupItem: V,
        markObjectVisualsDirty: oe,
        markPaintCompositeVisualsDirty: Pe,
        markPaintStrokeVisualsDirty: Ae,
        objectGeom: xe,
        paintingShown: Ce,
        parseRasterObjectSelectionId: $e,
        playback: ze,
        poseOf: Ge,
        pushHistory: Re,
        rectFromPoints: He,
        rectIntersectsGeom: ae,
        refreshPaintEngineRevisionCache: Oe,
        requestDraw: Ne,
        screenPos: Le,
        screenPosCss: Ye,
        screenPosToErpPoint: Ke,
        screenPosToFrameAsErpPoint: We,
        screenToWorldDir: mt,
        selectWorldSticker: bt,
        selectedWorldSticker: Tt,
        setPointerPos: Nt,
        setSelectedItem: Pn,
        setSelectedItems: qe,
        setSpaceView: sn,
        shortestWrappedDelta: Ut,
        spaceViewState: fi,
        startAnimation: Wr,
        startCameraPress: pi,
        startFrameDrag: on,
        startPanFrame: yn,
        startSpaceDrag: Ur,
        stopTimelinePlayback: Pr,
        supportsErpPainting: dr,
        supportsFramePainting: Mo,
        syncCutoutShot: Po,
        syncFloatingViewButtonState: No,
        syncFrameRollKnob: Ao,
        syncSidePanelControls: Os,
        syncTimeline: Fs,
        syncViewToggleState: Co,
        updateCursor: Ot,
        updateSelectionMenu: Nn,
        updateSidePanel: Qn,
        viewControls: Vi,
        writePose: Vn,
        zoomFrameAt: Ts,
        zoomFrameViewAt: Ds,
        zoomSpaceAt: Ls
      } = Fe);
    },
    onCanvasPointerDown: ql,
    worldGizmoPointer: Yr,
    hoverWorldGizmo: Io,
    onCanvasPointerMove: zs,
    onCanvasPointerUp: js,
    onCanvasPointerCancel: Hs,
    onCanvasMouseMove: Gs,
    onCanvasWheel: Ks
  };
}
function EA(e) {
  const {
    cameraV2: t,
    coverageWidget: r,
    editor: n,
    node: i,
    previewMode: o,
    runtime: s,
    shotEditor: a,
    state: l,
    studio: c,
    type: d,
    uiState: u
  } = e;
  let f, m, x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F, C, ne, Q, z, w;
  function Z(A, se, y = !1) {
    var L;
    P();
    const b = a && n.mode === "frame" ? _() : null, E = b || re(), S = b ? "shot" : W(), j = O();
    if (j && !z(j) || !j && (!E || S === "stroke" || $(E))) return;
    const H = (((L = u.sidePanel) == null ? void 0 : L.params) || []).find((D) => D.key === A);
    if (!H || H.enabled === !1) return;
    let X = Number(se);
    if (Number.isNaN(X) && (X = 0), (j || t) && IN.has(A) ? X = A === "scale" ? Math.max(X, f0) : X : X = Ie(X, Number(H.min), Number(H.max)), A === "yaw_deg" && (X = Ht(X)), !j && t && A.startsWith("position_")) {
      F(), sS(l.camera, n.frame, A, X), Q(), _e(), y && le();
      return;
    }
    if (j) {
      cS(j, n.frame, A, X), ye(), Q(), _e(), y && le();
      return;
    }
    A === "opacity" ? aS(E, n.frame, X / 100) : w(E, { [A]: X }), a && !U(E) && (A === "hFOV_deg" || A === "vFOV_deg") && (E.aspect_id = Ci(E)), Q(), _e(), y && le();
  }
  async function ie(A) {
    var b, E, S, j, H, X, L;
    const se = A.target.closest("[data-action]");
    if (!se) return;
    const y = String(se.getAttribute("data-action") || "");
    if (y === "coverage-set") {
      const D = Rn(se.getAttribute("data-coverage"));
      if (D === Rn(l.coverage)) return;
      l.coverage = D, n.coverage = D, r && (r.value = String(D)), o ? s.backgroundDirty = !0 : (h(), M({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), Q(), ne(), _e();
      return;
    }
    if (y === "revert-handoff-lane") {
      P(), Y(String(se.getAttribute("data-lane") || ""));
      return;
    }
    if (y === "toggle-selection-picker") {
      if ((E = (b = u.sidePanel) == null ? void 0 : b.selectionPicker) != null && E.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (y === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const D = String(se.getAttribute("data-selection-id") || "");
      let k = null;
      if (D && (d === "stickers" ? k = [...G(), ...c ? l.shots : []].find((R) => String((R == null ? void 0 : R.id) || "") === D) || null : k = ((S = te().find((R) => {
        var ee;
        return String(((ee = R == null ? void 0 : R.item) == null ? void 0 : ee.id) || "") === D;
      })) == null ? void 0 : S.item) || null), B(k || null), k && !ve(k)) {
        const R = ge(k);
        C(Ht(Number(R.yaw_deg || 0)), Ie(Number(R.pitch_deg || 0), -89.9, 89.9));
      }
      Q(), ne(), _e();
      return;
    }
    if (y === "copy-state-inline") {
      const D = re(), k = W();
      if (!D || k === "stroke" || T().length > 1) return;
      const R = JSON.stringify(a && k !== "image" ? m(D) : x(ge(D)));
      try {
        await navigator.clipboard.writeText(R), (j = u.sidePanel) != null && j.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var ee;
          (ee = u.sidePanel) != null && ee.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (y === "set-invert-x") {
      l.ui_settings.invert_view_x = se.getAttribute("data-value") === "1", de(), Q(), (H = i.setDirtyCanvas) == null || H.call(i, !0, !0), _e();
      return;
    }
    if (y === "set-invert-y") {
      l.ui_settings.invert_view_y = se.getAttribute("data-value") === "1", de(), Q(), (X = i.setDirtyCanvas) == null || X.call(i, !0, !0), _e();
      return;
    }
    if (y === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, de(), Q(), (L = i.setDirtyCanvas) == null || L.call(i, !0, !0), _e();
      return;
    }
    if (y === "close-preview") {
      g();
      return;
    }
    if (y === "cancel-close") {
      g();
      return;
    }
    y === "save-close" && (f(), g());
  }
  function be(A) {
    const se = A.target.closest("[data-action='param-input']");
    se && Z(String(se.getAttribute("data-param-key") || ""), se.value, !1);
  }
  function we(A) {
    const se = A.target.closest("[data-action='param-input']");
    se && Z(String(se.getAttribute("data-param-key") || ""), se.value, !0);
  }
  return {
    connect(A) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: m,
        buildCanonicalSelectedStickerState: x,
        closeEditor: g,
        commitState: h,
        getActiveCutoutShot: _,
        getCutoutInspectorItems: te,
        getList: G,
        getSelected: re,
        getSelectedItems: T,
        getSelectedKind: W,
        isItemLocked: $,
        isSceneSticker: U,
        isStrokeGroupItem: ve,
        markObjectVisualsDirty: ye,
        persistUiSettings: de,
        poseOf: ge,
        pushHistory: le,
        requestDraw: _e,
        revertPortHandoffLane: Y,
        selectedWorldSticker: O,
        setSelectedItem: B,
        stopTimelinePlayback: P,
        syncCoverageChangeToNodePreviews: M,
        syncCutoutShot: F,
        turnViewTo: C,
        updateSelectionMenu: ne,
        updateSidePanel: Q,
        worldStickerEditable: z,
        writePose: w
      } = A);
    },
    onSidePanelClick: ie,
    onSidePanelInput: be,
    onSidePanelChange: we
  };
}
function OA(e) {
  const {
    editor: t,
    node: r,
    overlay: n,
    paintColorPop: i,
    paintColorSv: o,
    paintHueStrip: s,
    readOnly: a,
    root: l,
    runtime: c,
    shotEditor: d,
    tooltip: u,
    uiState: f,
    videoEl: m
  } = e;
  let x, g, h, _, te, G, re, T, W, $, U, ve, ye, de, ge, le, _e, Y, O, B, P, M, F, C, ne, Q, z, w, Z, ie, be, we, A, se, y, b, E, S, j, H, X, L, D, k, R, ee, ce, Se, ue, he, me;
  const J = () => {
    if (!t.customPaintSessionStart) return;
    if (vl(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (BN(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const Re = [
      $n(t.customPaintColor),
      ...t.customPaintHistory.filter((He) => !vl(He, t.customPaintColor))
    ];
    t.customPaintHistory = Re.slice(0, 8), t.customPaintSessionStart = null;
  }, fe = (Re = !1) => {
    !i || i.hidden || (Re ? J() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, K = () => {
    i && (i.hidden && (t.customPaintSessionStart = $n(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function p() {
    j();
  }
  function N(Re) {
    var mt, bt, Tt, Nt, Pn;
    if ((bt = (mt = Re.target) == null ? void 0 : mt.matches) != null && bt.call(mt, "[data-confirm-overlay]")) {
      const qe = (Tt = f.confirmDialog) == null ? void 0 : Tt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const He = Re.target.closest("[data-space-mode]");
    if (He) {
      se(He.getAttribute("data-space-mode"));
      return;
    }
    const ae = Re.target.closest("[data-gizmo-mode]");
    if (ae) {
      t.gizmoMode = ae.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, ue(), w({ localOnly: !0, reason: ft.VIEW });
      return;
    }
    const Oe = Re.target.closest("[data-view]");
    if (Oe) {
      if (Oe.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Oe.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), he(), ue()), de(), D(), w();
      return;
    }
    const Ne = Re.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ne && !a) {
      if (Ne.matches("[data-tool-mode]")) {
        const qe = String(Ne.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && W({ preservePanelValues: !0 }), H(), he(), ue(), w();
        return;
      }
      if (Ne.matches("[data-tool-ui-action]")) {
        const qe = String(Ne.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ne.disabled) return;
        qe === "undo" ? Z(-1) : qe === "redo" ? Z(1) : qe === "clear" ? re() : qe === "add" || qe === "add-image" ? g() : qe === "add-world" ? _() : qe === "add-or-look" ? x() : qe === "add-camera" && h();
        return;
      }
      if (Ne.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ne.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, W({ preservePanelValues: !0 }), Tn[qe] && (t.activeBrushPresetId = qe), H(), he(), ue(), w();
        return;
      }
      if (Ne.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ne.getAttribute("data-mask-tool") || "pen"), W({ preservePanelValues: !0 }), H(), he(), ue(), w();
        return;
      }
      if (Ne.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ne.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        T(qe);
        return;
      }
      if (Ne.matches("[data-paint-color-swatch]")) {
        const qe = Bl.find((sn) => sn.id === Ne.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = $n(qe.color), fe(!0), H();
        return;
      }
      if (Ne.matches("[data-paint-color-custom]")) {
        Re.preventDefault(), Re.stopPropagation(), i && !i.hidden ? fe(!0) : K(), H();
        return;
      }
    }
    const Le = String(((Nt = Ne == null ? void 0 : Ne.getAttribute) == null ? void 0 : Nt.call(Ne, "data-action")) || "");
    if (Le === "video-play-toggle") {
      if (Re.preventDefault(), Re.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      me.resumeAfterScrub = !1, k();
      return;
    }
    if (Le === "video-audio-toggle") {
      Re.preventDefault(), Re.stopPropagation(), ce(), typeof (Ne == null ? void 0 : Ne.blur) == "function" && Ne.blur();
      return;
    }
    if (Le === "video-loop-toggle") {
      if (Re.preventDefault(), Re.stopPropagation(), !(m instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, m.loop = qe, L({
        hasAudio: f.videoTransport.hasAudio,
        loop: qe,
        muted: m.muted,
        volume: Number(m.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ne == null ? void 0 : Ne.blur) == "function" && Ne.blur();
      return;
    }
    if (!a) {
      if (Le === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Le === "frame-aspect-set") {
        const qe = t.mode === "frame" ? le() : null;
        if (!qe || qe.locked === !0) return;
        A(qe, String(Ne.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, X(), ne(), $(), D(), he(), ue(), w();
        return;
      }
      if (Le === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? le() : null, sn = Ne.getAttribute("data-custom-width"), Ut = Ne.getAttribute("data-custom-height");
        if (!qe || !te(qe, sn, Ut)) return;
        f.frameRail.aspectOpen = !1, X(), ne(), $(), D(), w();
        return;
      }
      if (Le === "frame-rotate-90") {
        const qe = t.mode === "frame" ? le() : null;
        if (!qe || qe.locked === !0) return;
        be(qe), f.frameRail.aspectOpen = !1, X(), ne(), $(), D(), w();
        return;
      }
      if (Le === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, ue(), w();
        return;
      }
      if (Le === "aspect-set") {
        const qe = Y();
        if (!qe) return;
        const sn = String(Ne.getAttribute("data-aspect") || "1:1");
        A(qe, sn), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, X(), ne(), $(), ue(), w();
        return;
      }
      if (Le === "rotate-90") {
        const qe = Y();
        if (!qe || P()) return;
        be(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, X(), ne(), $(), ue(), w();
        return;
      }
      if (Le === "bring-front") {
        G();
        return;
      }
      if (Le === "send-back") {
        we();
        return;
      }
      if (Le === "duplicate") {
        ye();
        return;
      }
      if (Le === "replace-image") {
        z();
        return;
      }
      if (Le === "toggle-lock") {
        ee();
        return;
      }
      if (Le === "back-initial") {
        ie();
        return;
      }
      if (Le === "toggle-visible") {
        R();
        return;
      }
      if (Le === "delete") {
        ve();
        return;
      }
    }
    if (Le === "reset-view") {
      if (t.mode === "frame") return;
      Se(
        { position: E(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Pn = U()) == null ? void 0 : Pn.radius) || ar },
        { mode: Sl(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Le === "frame-view") {
      if (!M() || Sl(t.spaceMode, t.viewTransition) !== "6dof") return;
      ge();
      return;
    }
    if (Le === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, n2(r == null ? void 0 : r.id, t.showGrid), p(), w();
      return;
    }
    if (Le === "toggle-fullscreen") {
      Re.preventDefault(), Re.stopPropagation(), $e();
      return;
    }
    if (Le === "toggle-output-preview-size") {
      Re.preventDefault(), Re.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, S(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Ge(), w();
      return;
    }
    const Ye = Re.target.closest("[data-paint-history-index]");
    if (!Ye) return;
    const Ke = Number(Ye.getAttribute("data-paint-history-index")), We = t.customPaintHistory[Ke];
    We && (t.customPaintColor = $n(We), t.paintColor = $n(We), H());
  }
  function v(Re) {
    const He = Re.target.closest("[data-video-seek]");
    if (He) {
      if (!(m instanceof HTMLVideoElement)) return;
      F.playing && (me.resumeAfterScrub = !0), F.seek(wi(Number(He.value || 0), C()));
      return;
    }
    const ae = Re.target.closest("[data-video-volume]");
    if (ae) {
      if (!(m instanceof HTMLVideoElement)) return;
      const Le = Ie(Number(ae.value || 0), 0, 1);
      m.volume = Le, m.muted = Le <= 1e-4, L({
        hasAudio: f.videoTransport.hasAudio,
        muted: m.muted,
        volume: Le
      });
      return;
    }
    const Oe = Re.target.closest("[data-paint-size-slider]");
    if (Oe) {
      if (Oe.disabled) return;
      const Le = Math.max(1, Math.min(120, Math.round(Number(Oe.value)))), Ye = _e(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Ye] = Le, H(), y();
      return;
    }
    const Ne = Re.target.closest("[data-paint-alpha-slider]");
    if (Ne) {
      const Le = { ...t.customPaintColor, a: Ie(Number(Ne.value) / 100, 0, 1) };
      t.customPaintColor = $n(Le), t.paintColor = $n(Le), H();
    }
  }
  function I(Re) {
    var He;
    if (Re.target.closest("[data-video-seek]")) {
      if (!(m instanceof HTMLVideoElement)) return;
      me.resumeAfterScrub && F.play(), me.resumeAfterScrub = !1;
      return;
    }
    if (Re.target.closest("[data-video-volume]")) {
      typeof ((He = Re.target) == null ? void 0 : He.blur) == "function" && Re.target.blur();
      return;
    }
    Re.target.closest("[data-paint-size-slider]") && O();
  }
  function q(Re) {
    const He = Re.target.closest("[data-tip]");
    !He || !l.contains(He) || u.target !== He && (u.target = He, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === He && b(He);
    }, 220));
  }
  function pe(Re) {
    var Oe, Ne;
    const He = Re.target.closest("[data-tip]");
    !He || u.target !== He || (Re.relatedTarget instanceof Element ? (Ne = (Oe = Re.relatedTarget).closest) == null ? void 0 : Ne.call(Oe, "[data-tip]") : null) === He || B();
  }
  function V(Re, He) {
    var Ke;
    if (!o) return;
    const ae = o.getBoundingClientRect(), Oe = Ie((Re - ae.left) / Math.max(1, ae.width), 0, 1), Ne = 1 - Ie((He - ae.top) / Math.max(1, ae.height), 0, 1), Le = Fu(t.customPaintColor), Ye = { ...Ou(Le.h, Oe, Ne), a: Number(((Ke = t.customPaintColor) == null ? void 0 : Ke.a) ?? 1) };
    t.customPaintColor = $n(Ye), t.paintColor = $n(Ye), H();
  }
  function oe(Re) {
    var Le;
    if (!s) return;
    const He = s.getBoundingClientRect(), ae = Ie((Re - He.left) / Math.max(1, He.width), 0, 1), Oe = Fu(t.customPaintColor), Ne = { ...Ou(ae, Oe.s, Oe.v), a: Number(((Le = t.customPaintColor) == null ? void 0 : Le.a) ?? 1) };
    t.customPaintColor = $n(Ne), t.paintColor = $n(Ne), H();
  }
  function Pe(Re, He) {
    const ae = Re.pointerId;
    He(Re);
    const Oe = (Le) => {
      Le.pointerId === ae && He(Le);
    }, Ne = (Le) => {
      Le.pointerId === ae && (window.removeEventListener("pointermove", Oe), window.removeEventListener("pointerup", Ne), window.removeEventListener("pointercancel", Ne));
    };
    window.addEventListener("pointermove", Oe), window.addEventListener("pointerup", Ne), window.addEventListener("pointercancel", Ne);
  }
  function Ae() {
    const Re = !!t.fullscreen;
    Zi(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: Re ? je.fullscreen_close : je.fullscreen,
      label: Re ? "Exit Fullscreen" : "Fullscreen",
      tip: Re ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function xe(Re) {
    const He = !!Re;
    t.fullscreen !== He && (t.fullscreen = He, l.classList.toggle("pano-modal-fullscreen", He), He ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), p(), Ae(), Q(), w());
  }
  function Ce() {
    return document.fullscreenElement === n;
  }
  async function $e() {
    var Re, He;
    try {
      if (!document.fullscreenEnabled) {
        xe(!t.fullscreen);
        return;
      }
      Ce() ? await ((He = document.exitFullscreen) == null ? void 0 : He.call(document)) : await ((Re = n.requestFullscreen) == null ? void 0 : Re.call(n));
    } catch {
      xe(!t.fullscreen);
    }
  }
  function ze() {
    document.fullscreenEnabled && xe(Ce());
  }
  function Ge() {
    const Re = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = Re ? je.fullscreen_close : je.fullscreen, f.outputPreviewToggle.label = Re ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = Re ? "Reduce preview" : "Expand preview";
  }
  return {
    connect(Re) {
      ({
        addCutoutFrame: x,
        addImageSticker: g,
        addStudioCamera: h,
        addWorldImageSticker: _,
        applyCutoutAspectCustom: te,
        bringSelectedToFront: G,
        clearAll: re,
        clearPaintingLayer: T,
        clearSelection: W,
        commitAndRefreshNode: $,
        contentSphere: U,
        deleteSelected: ve,
        duplicateSelected: ye,
        forceCursorTool: de,
        frameSpaceContent: ge,
        getActiveCutoutShot: le,
        getBrushPresetIdForTool: _e,
        getSelected: Y,
        hidePaintSizePreview: O,
        hideTooltip: B,
        isErpCamera: P,
        isFreeSpaceView: M,
        playback: F,
        playbackFps: C,
        pushHistory: ne,
        queueVideoTransportLayout: Q,
        replaceSelectedImage: z,
        requestDraw: w,
        restoreHistory: Z,
        restoreSelectedToInitialPose: ie,
        rotateCutoutAspect90: be,
        sendSelectedToBack: we,
        setShotAspect: A,
        setSpaceMode: se,
        showPaintSizePreview: y,
        showTooltipFor: b,
        spaceOrigin: E,
        startAnimation: S,
        syncFloatingViewButtonState: j,
        syncPaintUi: H,
        syncSidePanelControls: X,
        syncVideoTransportState: L,
        syncViewToggleState: D,
        togglePlayback: k,
        toggleSelectedExternalStickerVisibility: R,
        toggleSelectedLock: ee,
        toggleVideoMuted: ce,
        transitionView: Se,
        updateSelectionMenu: ue,
        updateSidePanel: he,
        videoState: me
      } = Re);
    },
    closePaintColorPop: fe,
    syncGridToggleButton: p,
    onRootClick: N,
    onRootInput: v,
    onRootChange: I,
    onRootPointerOver: q,
    onRootPointerOut: pe,
    updatePaintColorFromSv: V,
    updatePaintColorFromHue: oe,
    bindDrag: Pe,
    syncFullscreenButton: Ae,
    setFullscreenState: xe,
    onFullscreenChange: ze,
    syncOutputPreviewToggleButton: Ge
  };
}
function FA(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, m, x, g, h, _, te, G, re, T, W;
  const $ = q2();
  function U(Q) {
    var z, w, Z, ie, be;
    if (Q.key === "Escape") {
      if (l()) {
        Q.preventDefault(), Q.stopPropagation(), (z = Q.stopImmediatePropagation) == null || z.call(Q);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        Q.preventDefault(), Q.stopPropagation(), (w = Q.stopImmediatePropagation) == null || w.call(Q), (Z = document.exitFullscreen) == null || Z.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        Q.preventDefault(), Q.stopPropagation(), (ie = Q.stopImmediatePropagation) == null || ie.call(Q), te(!1);
        return;
      }
      Q.preventDefault(), Q.stopPropagation(), (be = Q.stopImmediatePropagation) == null || be.call(Q), d();
    }
  }
  function ve(Q) {
    const z = String(Q.key || ""), w = String(Q.code || ""), Z = Number(Q.keyCode || 0);
    if (!(z === "Delete" || w === "Delete" || Z === 46) && !(z === "Backspace" || w === "Backspace" || Z === 8)) return;
    const we = Q.target, A = ((we == null ? void 0 : we.tagName) || "").toUpperCase();
    if (A === "INPUT" || A === "TEXTAREA" || we != null && we.isContentEditable) return;
    if (o.selection) {
      f(), Q.preventDefault(), Q.stopPropagation();
      return;
    }
    if (m()) {
      Q.preventDefault(), Q.stopPropagation();
      return;
    }
    h() && (u(), Q.preventDefault(), Q.stopPropagation());
  }
  function ye(Q) {
    if (s.confirmDialog.visible) return !1;
    const z = Q.composedPath()[0];
    if (z !== document.body && z !== document.documentElement && !r.contains(z)) return !1;
    const w = ((z == null ? void 0 : z.tagName) || "").toUpperCase();
    return w === "INPUT" ? !CN.has(String(z.type || "text").toLowerCase()) : w !== "TEXTAREA" && w !== "SELECT" && !(z != null && z.isContentEditable);
  }
  function de(Q) {
    return Q.code !== "Space" || Q.ctrlKey || Q.metaKey || Q.altKey || n || !i || !s.timeline.visible ? !1 : ye(Q);
  }
  function ge(Q) {
    de(Q) && (Q.preventDefault(), Q.stopPropagation(), Q.repeat || T());
  }
  function le(Q) {
    de(Q) && (Q.preventDefault(), Q.stopPropagation());
  }
  function _e(Q) {
    if ($.modifiers(Q), !!C0(Q.code)) {
      if (!ye(Q)) {
        O(Q.code);
        return;
      }
      Q.ctrlKey || Q.metaKey || (Q.preventDefault(), Q.stopPropagation(), a() && ($.press(Q.code, Q.timeStamp), Q.repeat || c(), G(() => {
      })));
    }
  }
  function Y(Q) {
    $.modifiers(Q), Q.key === "Meta" && B(), O(Q.code) && (Q.preventDefault(), Q.stopPropagation());
  }
  function O(Q) {
    return $.release(Q) ? ($.held || x(), !0) : !1;
  }
  function B() {
    $.held && ($.releaseAll(), x());
  }
  function P() {
    document.hidden && B();
  }
  function M() {
    B();
  }
  function F(Q) {
    const z = !!(Q.ctrlKey || Q.metaKey), w = !!Q.altKey;
    t.marqueeModifier === z && t.altModifier === w || (t.marqueeModifier = z, t.altModifier = w, re(), W(t.pointerPos));
  }
  function C() {
    B(), t.marqueeModifier = !1, t.altModifier = !1, re(), W(t.pointerPos);
  }
  function ne(Q) {
    if (n || !Q.ctrlKey && !Q.metaKey) return;
    const z = String(Q.key || "").toLowerCase(), w = String(Q.code || "");
    if (z !== "z" && w !== "KeyZ") return;
    const Z = Q.target, ie = ((Z == null ? void 0 : Z.tagName) || "").toUpperCase();
    if (ie === "INPUT" || ie === "TEXTAREA" || Z != null && Z.isContentEditable) return;
    const { canUndo: be, canRedo: we } = g();
    Q.shiftKey && !we || !Q.shiftKey && !be || (_(Q.shiftKey ? 1 : -1), Q.preventDefault(), Q.stopPropagation());
  }
  return {
    connect(Q) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: m,
        endFrameKeyMove: x,
        getHistoryCapabilities: g,
        getSelected: h,
        restoreHistory: _,
        setFullscreenState: te,
        startAnimation: G,
        syncFrameRollKnob: re,
        togglePlayback: T,
        updateCursor: W
      } = Q);
    },
    moveKeys: $,
    onEscClose: U,
    onDeleteKey: ve,
    onSpaceKey: ge,
    onSpaceKeyUp: le,
    onMoveKeyDown: _e,
    onMoveKeyUp: Y,
    onVisibilityChange: P,
    onContextMenu: M,
    onModifierKeyChange: F,
    onWindowBlur: C,
    onUndoRedoKey: ne
  };
}
const Lp = /* @__PURE__ */ new Map(), ai = mg({
  app: or,
  api: pn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Iu,
    markImageFailed: d0,
    markImageLoading: c0,
    markImageReady: u0
  }
});
function Rp(e) {
  if (!Kt(e, "background") || !Kt(e, "external-sticker")) return null;
  const t = ai.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? ui(t[0]) : null;
}
const TA = ai.assetSource, DA = ai.source, LA = ai.uiImage, RA = ai.invalidateUiImage, Vp = ai.loadPreferredExactLinkedImage;
async function VA(e, t, r = {}) {
  var Wd, Ud;
  await Ug(e, { tolerateOperationFailure: !0 }), ai.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = qN(e, t);
  await Ld();
  const a = ha(e, "output_preset"), l = ha(e, "coverage"), c = ha(e, "bg_color"), d = ha(e, AN), u = () => {
    const Ve = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Vp(
      e,
      Ve,
      () => ut(),
      `background:size:${Ve.join("|")}`
    );
  }, f = () => {
    const Ve = u();
    return ZN(Ve);
  }, m = (Ve = 2048) => {
    const st = a == null ? void 0 : a.value;
    return JN(st) ? f() || Math.max(1, Math.round(Number(Ve || 2048))) : XN(st, Ve);
  }, x = e.__panoSceneStateV2 === !0, g = t === "stickers" && x, h = g && e.__panoStudio === !0, _ = h, te = t === "cutout" || h, G = (x ? Cm : Am)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: m(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: Rn(l == null ? void 0 : l.value),
    sharedUiSettings: QN(),
    active: Fm(e),
    fps: x ? Rp(e) : null
  });
  Hn(e).liveState = G, Hn(e).liveStateVersion = 0;
  let re = null;
  _ ? (re = G.camera && G.camera.visible !== !1 ? Om(G.camera, 0) : null, G.shots = re ? [{ ...re, position: [...re.position] }] : [], G.active.selected_shot_id = null) : t === "cutout" && (G.shots = Array.isArray(G.shots) ? G.shots.slice(0, 1) : [], G.shots.length || (G.active.selected_shot_id = null));
  const T = t === "cutout" ? (() => {
    var tr;
    const Ve = Array.isArray(G.shots) ? G.shots : [], st = String(((tr = G == null ? void 0 : G.active) == null ? void 0 : tr.selected_shot_id) || "");
    return Ve.find((ln) => String((ln == null ? void 0 : ln.id) || "") === st) || Ve[0] || null;
  })() : null, W = T ? E0(T, !1) : { width: 220, height: 132 }, $ = l0(h ? "studio" : t), U = /* @__PURE__ */ bo({
    stageStatus: nr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: ($.viewButtons || []).map((Ve) => ({ ...Ve, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (Wd = $.spaceButtons) != null && Wd.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: $.spaceButtons, frame: $.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: ($.toolButtons || []).map((Ve) => ({
      ...Ve,
      disabled: !1,
      ...Ve.key === "add-world" ? { visible: g } : {}
    })),
    floatingButtons: [
      ...($.floatingButtons || []).map((Ve) => ({ ...Ve, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: je.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: je.aspect,
      rotateIcon: je.rotate_90,
      aspectChoices: [],
      rollKnob: null
    },
    frameRollKnob: {
      visible: !1,
      disabled: n,
      rollDeg: 0,
      displayValue: "0",
      dragging: !1,
      armed: !1
    },
    fovValue: "100°",
    outputPreviewToggle: {
      visible: !1,
      icon: je.fullscreen,
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
      customColorCss: yr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: yr({ r: 1, g: 0, b: 0, a: 1 }, 1),
      pickerSat: "100%",
      pickerVal: "0%",
      pickerHue: "0%",
      pickerSvLeft: "100%",
      pickerSvTop: "0%",
      pickerHueLeft: "0%",
      alphaValue: 100,
      alphaText: "100%",
      historyVisible: !0,
      historyEntries: Array.from({ length: 8 }, (Ve, st) => ({ index: st, color: null })),
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
      width: W.width,
      height: W.height,
      label: T ? "Loading preview" : "Add Frame to preview"
    }
  }), ve = { frame: /* @__PURE__ */ Ra(0), playing: /* @__PURE__ */ Ra(!1) }, ye = document.createElement("div");
  document.body.appendChild(ye);
  const de = ({ intent: Ve, file: st } = {}) => {
    if (rr(st)) {
      if (Ve === "add") {
        Ce(st);
        return;
      }
      if (Ve === "add-world") {
        $e(st);
        return;
      }
      Ve === "replace" && lt(st);
    }
  }, ge = ({ intent: Ve } = {}) => {
  }, le = Zu(PN, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: $,
    paintSwatches: Bl.map((Ve) => ({
      id: Ve.id,
      label: Ve.label,
      cssColor: yr(Ve.color, 1)
    })),
    uiState: U,
    playhead: ve,
    onClose: () => {
      Hi();
    },
    onTimeline: (Ve) => Vs(Ve),
    onImageFileSelected: de,
    onImageFileCancelled: ge
  });
  let _e = null;
  try {
    _e = le.mount(ye);
  } catch (Ve) {
    try {
      le.unmount();
    } catch {
    }
    throw ye.remove(), Ve;
  }
  const Y = ye.querySelector(".pano-modal-overlay"), O = ye.querySelector(".pano-modal"), B = O == null ? void 0 : O.querySelector("[data-stage-overlay]"), P = O == null ? void 0 : O.querySelector("[data-stage-background]"), M = O == null ? void 0 : O.querySelector(".pano-stage-wrap"), F = ((Ud = _e == null ? void 0 : _e.getPaintOverlayRefs) == null ? void 0 : Ud.call(_e)) || {}, C = F.cursor || null, ne = F.sizePreview || null, Q = F.sizeSample || null;
  if (!Y || !O || !B || !P || !M || !C || !ne || !Q)
    throw le.unmount(), ye.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const z = B.getContext("2d"), w = O.querySelector("[data-side]"), Z = O.querySelector("[data-video-element]"), ie = O.querySelector("[data-port-video-element]");
  cc(B, "editor.stage-overlay"), cc(P, "editor.stage-background"), Ef(Z, "editor.video"), Ef(ie, "editor.port-video");
  const be = O.querySelector(".pano-floating-right"), we = O.querySelector(".pano-floating-top"), A = O.querySelector("[data-tool-rail]"), se = O.querySelector("[data-frame-rail]"), y = O.querySelector("[data-frame-roll-knob]"), b = O.querySelector("[data-paint-dock]"), E = O.querySelector(".pano-video-transport"), S = O.querySelector("[data-selection-menu]"), j = O.querySelector("[data-tooltip]"), H = O.querySelector("[data-camera-preview-host]"), X = O.querySelector("[data-camera-preview-canvas]");
  cc(X, "editor.camera-preview");
  const L = O.querySelector("[data-paint-color-row]"), D = O.querySelector("[data-paint-color-pop]"), k = O.querySelector("[data-paint-color-sv]"), R = O.querySelector("[data-paint-color-sv-cursor]"), ee = O.querySelector("[data-paint-hue-strip]"), ce = O.querySelector("[data-paint-hue-handle]");
  M == null || M.removeAttribute("data-stage-ready"), M == null || M.setAttribute("data-stage-loading-kind", "boot"), B.style.opacity = "1", P.style.opacity = "0", i && (w == null || w.remove(), O.classList.add("pano-modal-readonly")), O.addEventListener("pointerdown", () => I.wake(), !0), O.addEventListener("pointerdown", (Ve) => {
    var st;
    Ve.target.closest("[data-frame-roll-knob]") || Pn(), !Ve.target.closest(".pano-picker") && (Ve.target.closest("[data-paint-color-row]") || (O.querySelectorAll(".pano-picker-pop").forEach((tr) => {
      tr.hidden = !0;
    }), ae(!0), te && ue.cutoutAspectOpen && !Ve.target.closest(".pano-aspect-popover") && !Ve.target.closest("[data-action='aspect']") && (ue.cutoutAspectOpen = !1, ue.menuMode = "", ue.menuSize.measured = !1, An(), ut()), (st = U.frameRail) != null && st.aspectOpen && !Ve.target.closest(".pano-frame-aspect-control") && (U.frameRail.aspectOpen = !1)));
  });
  const ue = {
    mode: "pano",
    selectedId: x0(t, G),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: ar,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: Rn(G.coverage),
    historyController: v2(G),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Fr,
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
    showGrid: t2(e == null ? void 0 : e.id, !0),
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
    paintEngine: Tl(),
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
    // Panorama Studio: the id of the world Sticker selected in the space view or on its Timeline row
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
    // The editor's current time, a Timeline frame. Panorama Studio shows and edits its state v2 here.
    frame: 0
  }, he = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (ue.selectedId = null, G.active.selected_sticker_id = null), ue.selectedIds = ue.selectedId ? [ue.selectedId] : [];
  const me = /* @__PURE__ */ new Map(), J = /* @__PURE__ */ new Map(), fe = /* @__PURE__ */ new Map(), K = /* @__PURE__ */ new Map(), p = rn({ label: "editor.still" });
  p.__panoFrameIdx = 0;
  const N = rn({ label: "editor.port-still" });
  N.__panoFrameIdx = 0;
  const v = {
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
    frameSafeRect: null,
    frameCanvasScale: 1,
    tickErrorSignature: "",
    // The node's preview has not seen the state since a drag changed it.
    nodePreviewPending: !1
  }, I = wk({
    requestAnimationFrame: (Ve) => requestAnimationFrame(Ve),
    cancelAnimationFrame: (Ve) => cancelAnimationFrame(Ve),
    draw: (Ve, st) => Xs(Ve, st),
    animating: () => Ye()
  }), q = Sk({
    requestFrame: (Ve) => I.requestFrame(Ve),
    cancelFrame: (Ve) => I.cancelFrame(Ve),
    tasks: {
      seek: () => Fe.seek(he.scrubFrame),
      timeline: () => Ys(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Nr(), ut({ localOnly: !0, reason: ft.STATE });
      },
      sidePanel: () => Jt()
    }
  }), pe = qS({
    canvas: P,
    onReady: () => {
      xt(), ut({ reason: ft.CONTEXT });
    },
    onFailed: () => ut(),
    onUpdate: () => ut({ localOnly: !0, reason: ft.MEDIA }),
    onSplats: (Ve) => ut({ localOnly: !0, reason: hA(Ve) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      bt(), xt(), ut({ reason: ft.CONTEXT });
    }
  }), V = Number.parseFloat(
    getComputedStyle(O).getPropertyValue("--pano-float-radius")
  ) || 10, oe = (Ve) => {
    const st = String(Ve || "default");
    B.style.cursor !== st && (B.style.cursor = st);
  }, Pe = {
    timer: 0,
    target: null
  }, Ae = {
    active: !1,
    depth: 0
  }, xe = rd({
    getView: () => ({ yaw: ue.viewYaw, pitch: ue.viewPitch, fov: ue.viewFov }),
    setView: (Ve) => {
      ue.viewYaw = Ht(Number(Ve.yaw || 0)), ue.viewPitch = Ie(Number(Ve.pitch || 0), -89.9, 89.9), ue.viewFov = Ie(Number(Ve.fov || ue.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const Ve = B.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Ve.width || B.clientWidth || 0)),
        h: Math.max(1, Number(Ve.height || B.clientHeight || 0))
      };
    },
    getInvert: () => {
      var Ve, st;
      return {
        x: (Ve = G.ui_settings) != null && Ve.invert_view_x ? -1 : 1,
        y: (st = G.ui_settings) != null && st.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Tt(),
    onInteraction: () => I.requestDraw(ft.VIEW)
  }), {
    addImageStickerFromFile: Ce,
    addWorldStickerFromFile: $e,
    applyInitialCutoutFocus: ze,
    applyVideoTimelineFps: Ge,
    bindDrag: Re,
    cancelFrameCameraGesture: He,
    closePaintColorPop: ae,
    commitState: Oe,
    disposeMediaSession: Ne,
    disposeUpstream: Le,
    editorAnimating: Ye,
    endFrameKeyMove: Ke,
    finishKnobRoll: We,
    flushFrameWheelCommit: mt,
    forgetCameraPreviewFrame: bt,
    getUnwrapRect: Tt,
    hidePaintSizePreview: Nt,
    hideTooltip: Pn,
    hoverWorldGizmo: qe,
    isFreeFrameView: sn,
    isFreeSpaceView: Ut,
    migrateLegacyEmbeddedAssets: fi,
    onCanvasDragOver: Wr,
    onCanvasDrop: pi,
    onCanvasMouseMove: on,
    onCanvasPointerCancel: yn,
    onCanvasPointerDown: Ur,
    onCanvasPointerMove: Pr,
    onCanvasPointerUp: dr,
    onCanvasWheel: Mo,
    onContextMenu: Po,
    onDeleteKey: No,
    onEscClose: Ao,
    onFrameRollKnobDoubleClick: Os,
    onFrameRollKnobPointerDown: Fs,
    onFrameRollKnobPointerMove: Co,
    onFullscreenChange: Ot,
    onModifierKeyChange: Nn,
    onMoveKeyDown: Qn,
    onMoveKeyUp: Vi,
    onRootChange: Vn,
    onRootClick: Ts,
    onRootInput: Ds,
    onRootPointerOut: Ls,
    onRootPointerOver: Br,
    onSidePanelChange: ql,
    onSidePanelClick: Yr,
    onSidePanelInput: Xl,
    onSpaceKey: Io,
    onSpaceKeyUp: Rs,
    onTimelineAction: Vs,
    onUndoRedoKey: Eo,
    onVisibilityChange: $s,
    onWindowBlur: zs,
    onWindowDragEnter: js,
    onWindowDragLeave: Hs,
    onWindowDragOver: Gs,
    onWindowDrop: Ks,
    playback: Fe,
    pushHistory: Ee,
    reconcileExternalStickerFromInputs: Me,
    refreshModalVideoSource: vt,
    replaceSelectedImageFromFile: lt,
    requestDraw: ut,
    restoreView: Je,
    sampleEditorDiagnostics: et,
    saveView: rt,
    setDropCue: er,
    setPointerPos: Xe,
    stageResizeObserver: Ue,
    stickerCornerOrderSanity: Qe,
    stopRenderLoop: Qt,
    syncCanvasSize: xt,
    syncCutoutShot: Nr,
    syncFullscreenButton: $i,
    syncGridToggleButton: zi,
    syncLookAtFrameButtonState: ji,
    syncOutputPreviewToggleButton: Ws,
    syncPaintUi: Us,
    syncPaintingLayerAsync: Bs,
    syncTimeline: Ys,
    syncUndoRedoButtons: qs,
    tick: Xs,
    triggerBackgroundPersistenceOnClose: ct,
    updateCursor: pt,
    updatePaintColorFromHue: yt,
    updatePaintColorFromSv: _t,
    updateSelectionMenu: An,
    updateSidePanel: Jt,
    viewControls: Cn,
    watchPixelRatio: Vt
  } = r2({
    api: pn,
    app: or,
    backgroundCanvas: P,
    bgWidget: c,
    cameraV2: _,
    canvas: B,
    closeEditor: Hi,
    comfyMedia: ai,
    coverageWidget: l,
    ctx: z,
    cutoutPreviewCanvas: X,
    cutoutPreviewHost: H,
    dragCue: Ae,
    dragFrames: q,
    editor: ue,
    editorView: pe,
    floatingRightEl: be,
    floatingTopEl: we,
    frameGateCssRadius: V,
    frameRailEl: se,
    frameRollKnobEl: y,
    hideSidebar: i,
    imageCache: me,
    initialShotBase: re,
    loadPreferredExactLinkedImage: Vp,
    mediaAssetSource: TA,
    mediaSource: DA,
    mediaUiImage: LA,
    node: e,
    overlay: Y,
    paintColorPop: D,
    paintColorRow: L,
    paintColorSv: k,
    paintColorSvCursor: R,
    paintCursorEl: C,
    paintDockEl: b,
    paintHueHandle: ce,
    paintHueStrip: ee,
    paintSizePreviewEl: ne,
    paintSizePreviewSampleEl: Q,
    portStillCanvas: N,
    portVideoEl: ie,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: K,
    rasterImageAlphaCache: fe,
    rasterImageCache: J,
    readOnly: n,
    resolveEditorOutputPresetWidth: m,
    root: O,
    runtime: v,
    sceneV2: g,
    scheduler: I,
    selectionMenu: S,
    setCanvasCursor: oe,
    shotEditor: te,
    stageWrap: M,
    state: G,
    stateV2: x,
    stateWidget: d,
    stillCanvas: p,
    studio: h,
    timeline: he,
    timelinePlayhead: ve,
    toolRailEl: A,
    tooltip: Pe,
    tooltipEl: j,
    type: t,
    uiState: U,
    videoEl: Z,
    videoTimelineFps: Rp,
    videoTransportEl: E,
    viewController: xe,
    vueModal: _e
  }, [
    g2,
    S2,
    _2,
    w2,
    x2,
    k2,
    M2,
    P2,
    N2,
    dA,
    fA,
    pA,
    gA,
    yA,
    bA,
    vA,
    SA,
    _A,
    wA,
    xA,
    kA,
    MA,
    PA,
    NA,
    AA,
    CA,
    IA,
    EA,
    OA,
    FA
  ]);
  Qe(), Ue.observe(B), Vt();
  const an = () => Oe();
  n || (cl(e).flushBeforeQueue = an), y == null || y.addEventListener("pointerdown", Fs), y == null || y.addEventListener("pointermove", Co), y == null || y.addEventListener("pointerup", We), y == null || y.addEventListener("pointercancel", () => He()), y == null || y.addEventListener("lostpointercapture", () => {
    var Ve;
    ((Ve = ue.interaction) == null ? void 0 : Ve.source) === "knob" && He();
  }), y == null || y.addEventListener("dblclick", Os), B.onpointerdown = Ur, B.onpointermove = Pr, B.onpointerup = dr, B.onpointercancel = yn, B.onlostpointercapture = () => {
    He();
  }, B.onauxclick = (Ve) => {
    Ve.button === 1 && Ve.preventDefault();
  }, B.oncontextmenu = (Ve) => {
    (Ut() || sn()) && Ww(Cn(), 2) && Ve.preventDefault();
  }, B.onmousemove = on, B.onpointerleave = () => {
    ue.interaction || qe({ x: -1e6, y: -1e6 });
  }, B.onmouseleave = () => {
    Xe(ue.pointerPos, !1), pt(ue.pointerPos), ue.mode === "frame" && ue.primaryTool === "cursor" && ut({ localOnly: !0, reason: ft.OVERLAY });
  }, B.onwheel = Mo, B.ondragover = Wr, B.ondrop = pi, window.addEventListener("dragenter", js, !0), window.addEventListener("dragover", Gs, !0), window.addEventListener("dragleave", Hs, !0), window.addEventListener("drop", Ks, !0), w == null || w.addEventListener("click", Yr), w == null || w.addEventListener("input", Xl), w == null || w.addEventListener("change", ql), zi(), O.addEventListener("click", Ts), O.addEventListener("input", Ds), O.addEventListener("change", Vn), O.addEventListener("pointerup", (Ve) => {
    var st;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((st = Ve.target) == null ? void 0 : st.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), O.addEventListener("pointercancel", (Ve) => {
    var st;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((st = Ve.target) == null ? void 0 : st.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), O.addEventListener("focusout", (Ve) => {
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), O.addEventListener("pointerover", Br), O.addEventListener("pointerout", Ls), O.addEventListener("pointerdown", (Ve) => {
    Ve.target.closest("[data-frame-roll-knob]") || Pn();
  }), k && (k.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), Re(Ve, (st) => _t(st.clientX, st.clientY));
  }), ee && (ee.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), Re(Ve, (st) => yt(st.clientX));
  }), O.addEventListener("click", (Ve) => {
    var hi;
    const st = Ve.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!st) return;
    const tr = st.getAttribute("data-action") === "confirm-accept", ln = (hi = U.confirmDialog) == null ? void 0 : hi.resolve;
    U.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, ln == null || ln(tr);
  }), document.addEventListener("fullscreenchange", Ot), $i(), Ws();
  const nn = e.onConnectionsChange;
  let Dt = null, Gt = () => {
  };
  !n && t === "stickers" && (Gt = Kg(e, (Ve = "sync") => {
    Ve === "executed" && (RA(me, go), vt(), g && Ge()), Me(Ve);
  }, { editor: !0 }), Dt = function(...st) {
    typeof nn == "function" && nn.apply(this, st), vt(), ni(this, "connections");
  }, e.onConnectionsChange = Dt), n || Lp.set(String(e.id ?? "0"), () => Bs());
  let In = null;
  async function Hi() {
    return In || (In = (async () => {
      var st, tr, ln, hi, qr, Js, Bd, Zs, Yd;
      Lp.delete(String(e.id ?? "0")), mt(), Ke(), n || Oe(), rt(), document.fullscreenElement === Y && ((st = document.exitFullscreen) == null || st.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Ot), Hn(e).liveState = null;
      const Ve = c_(e);
      return (Ve == null ? void 0 : Ve.flushBeforeQueue) === an && (Ve.flushBeforeQueue = null), (hi = (ln = (tr = pg(e)) == null ? void 0 : tr.dom) == null ? void 0 : ln.requestDraw) == null || hi.call(ln), (Js = (qr = e.graph) == null ? void 0 : qr.setDirtyCanvas) == null || Js.call(qr, !0, !0), (Yd = (Zs = (Bd = or) == null ? void 0 : Bd.canvas) == null ? void 0 : Zs.setDirty) == null || Yd.call(Zs, !0, !0), Pn(), q.cancel(), Qt(), Ne(), Le(), pe.dispose(), er(!1), window.removeEventListener("keydown", Ao, !0), window.removeEventListener("keydown", No, !0), window.removeEventListener("keydown", Io, !0), window.removeEventListener("keyup", Rs, !0), window.removeEventListener("keydown", Qn, !0), window.removeEventListener("keyup", Vi, !0), document.removeEventListener("visibilitychange", $s), window.removeEventListener("contextmenu", Po, !0), window.removeEventListener("keydown", Nn, !0), window.removeEventListener("keyup", Nn, !0), window.removeEventListener("blur", zs), window.removeEventListener("keydown", Eo, !0), window.removeEventListener("dragenter", js, !0), window.removeEventListener("dragover", Gs, !0), window.removeEventListener("dragleave", Hs, !0), window.removeEventListener("drop", Ks, !0), !n && t === "stickers" && (e.onConnectionsChange === Dt && (e.onConnectionsChange = nn), Gt()), le.unmount(), ye.remove(), ct(), In = null, !0;
    })().catch((Ve) => (console.error("[PanoramaCutoutSync] closeEditor failed", Ve), In = null, !1)), In);
  }
  window.addEventListener("keydown", Ao, !0), window.addEventListener("keydown", No, !0), window.addEventListener("keydown", Io, !0), window.addEventListener("keyup", Rs, !0), window.addEventListener("keydown", Qn, !0), window.addEventListener("keyup", Vi, !0), document.addEventListener("visibilitychange", $s), window.addEventListener("contextmenu", Po, !0), window.addEventListener("keydown", Nn, !0), window.addEventListener("keyup", Nn, !0), window.addEventListener("blur", zs), window.addEventListener("keydown", Eo, !0), Y.addEventListener("pointerdown", (Ve) => {
    Ve.target === Y && Hi();
  });
  function En(Ve, st, { rollbackState: tr = !1 } = {}) {
    let ln = "";
    try {
      tr && (ln = JSON.stringify(G)), st();
    } catch (hi) {
      if (ln)
        try {
          const qr = JSON.parse(ln);
          Object.keys(G).forEach((Js) => delete G[Js]), Object.assign(G, qr), n || Oe();
        } catch (qr) {
          console.error(`[PanoramaStickers] editor boot step "${Ve}" rollback failed`, qr);
        }
      U.stageWarningDetail = `boot:${Ve}`, console.error(`[PanoramaStickers] editor boot step "${Ve}" failed`, hi);
    }
  }
  En("view", Je), En("cutout-focus", ze), !n && t === "stickers" && En("external-sticker-sync", () => Me("open"), { rollbackState: !0 }), fi().catch((Ve) => {
    U.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', Ve);
  }), En("history", Ee), En("undo-redo", qs), En("paint-ui", Us), En("side-panel", Jt), En("look-at-frame", ji), En("video-source", vt), En("canvas-size", xt), En("cursor", () => pt(ue.pointerPos)), ut(), et();
}
or.registerExtension(tx({
  app: or,
  openEditor: VA,
  attachStickers: bk,
  attachCutout: vk,
  attachPreview: yk,
  restoreOutput: ik,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: ON
}));
