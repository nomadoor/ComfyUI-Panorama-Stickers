import * as pa from "../../scripts/app.js";
import { app as ir } from "../../scripts/app.js";
import { api as pn } from "../../scripts/api.js";
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ou(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const Ft = {}, eo = [], vr = () => {
}, Dp = () => !1, yl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), bl = (e) => e.startsWith("onUpdate:"), gn = Object.assign, Fu = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, P0 = Object.prototype.hasOwnProperty, Mt = (e, t) => P0.call(e, t), it = Array.isArray, to = (e) => ws(e) === "[object Map]", Lp = (e) => ws(e) === "[object Set]", Kd = (e) => ws(e) === "[object Date]", at = (e) => typeof e == "function", Jt = (e) => typeof e == "string", wr = (e) => typeof e == "symbol", Et = (e) => e !== null && typeof e == "object", Rp = (e) => (Et(e) || at(e)) && at(e.then) && at(e.catch), Vp = Object.prototype.toString, ws = (e) => Vp.call(e), N0 = (e) => ws(e).slice(8, -1), $p = (e) => ws(e) === "[object Object]", Tu = (e) => Jt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Yo = /* @__PURE__ */ Ou(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), vl = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((r) => t[r] || (t[r] = e(r)));
}, A0 = /-\w/g, xn = vl(
  (e) => e.replace(A0, (t) => t.slice(1).toUpperCase())
), C0 = /\B([A-Z])/g, Fi = vl(
  (e) => e.replace(C0, "-$1").toLowerCase()
), Sl = vl((e) => e.charAt(0).toUpperCase() + e.slice(1)), Yl = vl(
  (e) => e ? `on${Sl(e)}` : ""
), gr = (e, t) => !Object.is(e, t), ha = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, zp = (e, t, r, n = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: n,
    value: r
  });
}, Du = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Wd;
const _l = () => Wd || (Wd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function It(e) {
  if (it(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const n = e[r], i = Jt(n) ? F0(n) : It(n);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (Jt(e) || Et(e))
    return e;
}
const I0 = /;(?![^(]*\))/g, E0 = /:([^]+)/, O0 = /\/\*[^]*?\*\//g;
function F0(e) {
  const t = {};
  return e.replace(O0, "").split(I0).forEach((r) => {
    if (r) {
      const n = r.split(E0);
      n.length > 1 && (t[n[0].trim()] = n[1].trim());
    }
  }), t;
}
function gt(e) {
  let t = "";
  if (Jt(e))
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
const T0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", D0 = /* @__PURE__ */ Ou(T0);
function jp(e) {
  return !!e || e === "";
}
function L0(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let n = 0; r && n < e.length; n++)
    r = Lu(e[n], t[n]);
  return r;
}
function Lu(e, t) {
  if (e === t) return !0;
  let r = Kd(e), n = Kd(t);
  if (r || n)
    return r && n ? e.getTime() === t.getTime() : !1;
  if (r = wr(e), n = wr(t), r || n)
    return e === t;
  if (r = it(e), n = it(t), r || n)
    return r && n ? L0(e, t) : !1;
  if (r = Et(e), n = Et(t), r || n) {
    if (!r || !n)
      return !1;
    const i = Object.keys(e).length, o = Object.keys(t).length;
    if (i !== o)
      return !1;
    for (const s in e) {
      const a = e.hasOwnProperty(s), l = t.hasOwnProperty(s);
      if (a && !l || !a && l || !Lu(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Hp = (e) => !!(e && e.__v_isRef === !0), rt = (e) => Jt(e) ? e : e == null ? "" : it(e) || Et(e) && (e.toString === Vp || !at(e.toString)) ? Hp(e) ? rt(e.value) : JSON.stringify(e, Gp, 2) : String(e), Gp = (e, t) => Hp(t) ? Gp(e, t.value) : to(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [n, i], o) => (r[ql(n, o) + " =>"] = i, r),
    {}
  )
} : Lp(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ql(r))
} : wr(t) ? ql(t) : Et(t) && !it(t) && !$p(t) ? String(t) : t, ql = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    wr(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Fn;
class R0 {
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
function V0() {
  return Fn;
}
let Lt;
const Xl = /* @__PURE__ */ new WeakSet();
class Kp {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fn && Fn.active && Fn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Xl.has(this) && (Xl.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Up(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ud(this), Bp(this);
    const t = Lt, r = or;
    Lt = this, or = !0;
    try {
      return this.fn();
    } finally {
      Yp(this), Lt = t, or = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        $u(t);
      this.deps = this.depsTail = void 0, Ud(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Xl.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Rc(this) && this.run();
  }
  get dirty() {
    return Rc(this);
  }
}
let Wp = 0, qo, Xo;
function Up(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Xo, Xo = e;
    return;
  }
  e.next = qo, qo = e;
}
function Ru() {
  Wp++;
}
function Vu() {
  if (--Wp > 0)
    return;
  if (Xo) {
    let t = Xo;
    for (Xo = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; qo; ) {
    let t = qo;
    for (qo = void 0; t; ) {
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
function Bp(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Yp(e) {
  let t, r = e.depsTail, n = r;
  for (; n; ) {
    const i = n.prevDep;
    n.version === -1 ? (n === r && (r = i), $u(n), $0(n)) : t = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = i;
  }
  e.deps = t, e.depsTail = r;
}
function Rc(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (qp(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function qp(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === os) || (e.globalVersion = os, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Rc(e))))
    return;
  e.flags |= 2;
  const t = e.dep, r = Lt, n = or;
  Lt = e, or = !0;
  try {
    Bp(e);
    const i = e.fn(e._value);
    (t.version === 0 || gr(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    Lt = r, or = n, Yp(e), e.flags &= -3;
  }
}
function $u(e, t = !1) {
  const { dep: r, prevSub: n, nextSub: i } = e;
  if (n && (n.nextSub = i, e.prevSub = void 0), i && (i.prevSub = n, e.nextSub = void 0), r.subs === e && (r.subs = n, !n && r.computed)) {
    r.computed.flags &= -5;
    for (let o = r.computed.deps; o; o = o.nextDep)
      $u(o, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function $0(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let or = !0;
const Xp = [];
function zr() {
  Xp.push(or), or = !1;
}
function jr() {
  const e = Xp.pop();
  or = e === void 0 ? !0 : e;
}
function Ud(e) {
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
let os = 0;
class z0 {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zu {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!Lt || !or || Lt === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== Lt)
      r = this.activeLink = new z0(Lt, this), Lt.deps ? (r.prevDep = Lt.depsTail, Lt.depsTail.nextDep = r, Lt.depsTail = r) : Lt.deps = Lt.depsTail = r, Jp(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const n = r.nextDep;
      n.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = n), r.prevDep = Lt.depsTail, r.nextDep = void 0, Lt.depsTail.nextDep = r, Lt.depsTail = r, Lt.deps === r && (Lt.deps = n);
    }
    return r;
  }
  trigger(t) {
    this.version++, os++, this.notify(t);
  }
  notify(t) {
    Ru();
    try {
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      Vu();
    }
  }
}
function Jp(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let n = t.deps; n; n = n.nextDep)
        Jp(n);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subs = e;
  }
}
const Vc = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ Symbol(
  ""
), $c = /* @__PURE__ */ Symbol(
  ""
), ss = /* @__PURE__ */ Symbol(
  ""
);
function dn(e, t, r) {
  if (or && Lt) {
    let n = Vc.get(e);
    n || Vc.set(e, n = /* @__PURE__ */ new Map());
    let i = n.get(r);
    i || (n.set(r, i = new zu()), i.map = n, i.key = r), i.track();
  }
}
function Or(e, t, r, n, i, o) {
  const s = Vc.get(e);
  if (!s) {
    os++;
    return;
  }
  const a = (l) => {
    l && l.trigger();
  };
  if (Ru(), t === "clear")
    s.forEach(a);
  else {
    const l = it(e), c = l && Tu(r);
    if (l && r === "length") {
      const d = Number(n);
      s.forEach((u, f) => {
        (f === "length" || f === ss || !wr(f) && f >= d) && a(u);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && a(s.get(r)), c && a(s.get(ss)), t) {
        case "add":
          l ? c && a(s.get("length")) : (a(s.get(xi)), to(e) && a(s.get($c)));
          break;
        case "delete":
          l || (a(s.get(xi)), to(e) && a(s.get($c)));
          break;
        case "set":
          to(e) && a(s.get(xi));
          break;
      }
  }
  Vu();
}
function Hi(e) {
  const t = /* @__PURE__ */ kt(e);
  return t === e ? t : (dn(t, "iterate", ss), /* @__PURE__ */ qn(e) ? t : t.map(lr));
}
function wl(e) {
  return dn(e = /* @__PURE__ */ kt(e), "iterate", ss), e;
}
function pr(e, t) {
  return /* @__PURE__ */ Hr(e) ? lo(/* @__PURE__ */ ki(e) ? lr(t) : t) : lr(t);
}
const j0 = {
  __proto__: null,
  [Symbol.iterator]() {
    return Jl(this, Symbol.iterator, (e) => pr(this, e));
  },
  concat(...e) {
    return Hi(this).concat(
      ...e.map((t) => it(t) ? Hi(t) : t)
    );
  },
  entries() {
    return Jl(this, "entries", (e) => (e[1] = pr(this, e[1]), e));
  },
  every(e, t) {
    return Pr(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Pr(
      this,
      "filter",
      e,
      t,
      (r) => r.map((n) => pr(this, n)),
      arguments
    );
  },
  find(e, t) {
    return Pr(
      this,
      "find",
      e,
      t,
      (r) => pr(this, r),
      arguments
    );
  },
  findIndex(e, t) {
    return Pr(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Pr(
      this,
      "findLast",
      e,
      t,
      (r) => pr(this, r),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Pr(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Pr(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Zl(this, "includes", e);
  },
  indexOf(...e) {
    return Zl(this, "indexOf", e);
  },
  join(e) {
    return Hi(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Zl(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Pr(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Io(this, "pop");
  },
  push(...e) {
    return Io(this, "push", e);
  },
  reduce(e, ...t) {
    return Bd(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Bd(this, "reduceRight", e, t);
  },
  shift() {
    return Io(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Pr(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Io(this, "splice", e);
  },
  toReversed() {
    return Hi(this).toReversed();
  },
  toSorted(e) {
    return Hi(this).toSorted(e);
  },
  toSpliced(...e) {
    return Hi(this).toSpliced(...e);
  },
  unshift(...e) {
    return Io(this, "unshift", e);
  },
  values() {
    return Jl(this, "values", (e) => pr(this, e));
  }
};
function Jl(e, t, r) {
  const n = wl(e), i = n[t]();
  return n !== e && !/* @__PURE__ */ qn(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.done || (o.value = r(o.value)), o;
  }), i;
}
const H0 = Array.prototype;
function Pr(e, t, r, n, i, o) {
  const s = wl(e), a = s !== e && !/* @__PURE__ */ qn(e), l = s[t];
  if (l !== H0[t]) {
    const u = l.apply(e, o);
    return a ? lr(u) : u;
  }
  let c = r;
  s !== e && (a ? c = function(u, f) {
    return r.call(this, pr(e, u), f, e);
  } : r.length > 2 && (c = function(u, f) {
    return r.call(this, u, f, e);
  }));
  const d = l.call(s, c, n);
  return a && i ? i(d) : d;
}
function Bd(e, t, r, n) {
  const i = wl(e), o = i !== e && !/* @__PURE__ */ qn(e);
  let s = r, a = !1;
  i !== e && (o ? (a = n.length === 0, s = function(c, d, u) {
    return a && (a = !1, c = pr(e, c)), r.call(this, c, pr(e, d), u, e);
  }) : r.length > 3 && (s = function(c, d, u) {
    return r.call(this, c, d, u, e);
  }));
  const l = i[t](s, ...n);
  return a ? pr(e, l) : l;
}
function Zl(e, t, r) {
  const n = /* @__PURE__ */ kt(e);
  dn(n, "iterate", ss);
  const i = n[t](...r);
  return (i === -1 || i === !1) && /* @__PURE__ */ Gu(r[0]) ? (r[0] = /* @__PURE__ */ kt(r[0]), n[t](...r)) : i;
}
function Io(e, t, r = []) {
  zr(), Ru();
  const n = (/* @__PURE__ */ kt(e))[t].apply(e, r);
  return Vu(), jr(), n;
}
const G0 = /* @__PURE__ */ Ou("__proto__,__v_isRef,__isVue"), Zp = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(wr)
);
function K0(e) {
  wr(e) || (e = String(e));
  const t = /* @__PURE__ */ kt(this);
  return dn(t, "has", e), t.hasOwnProperty(e);
}
class Qp {
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
      return n === (i ? o ? ey : rh : o ? nh : th).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(n) ? t : void 0;
    const s = it(t);
    if (!i) {
      let l;
      if (s && (l = j0[r]))
        return l;
      if (r === "hasOwnProperty")
        return K0;
    }
    const a = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ mn(t) ? t : n
    );
    if ((wr(r) ? Zp.has(r) : G0(r)) || (i || dn(t, "get", r), o))
      return a;
    if (/* @__PURE__ */ mn(a)) {
      const l = s && Tu(r) ? a : a.value;
      return i && Et(l) ? /* @__PURE__ */ jc(l) : l;
    }
    return Et(a) ? i ? /* @__PURE__ */ jc(a) : /* @__PURE__ */ go(a) : a;
  }
}
class eh extends Qp {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, n, i) {
    let o = t[r];
    const s = it(t) && Tu(r);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Hr(o);
      if (!/* @__PURE__ */ qn(n) && !/* @__PURE__ */ Hr(n) && (o = /* @__PURE__ */ kt(o), n = /* @__PURE__ */ kt(n)), !s && /* @__PURE__ */ mn(o) && !/* @__PURE__ */ mn(n))
        return c || (o.value = n), !0;
    }
    const a = s ? Number(r) < t.length : Mt(t, r), l = Reflect.set(
      t,
      r,
      n,
      /* @__PURE__ */ mn(t) ? t : i
    );
    return t === /* @__PURE__ */ kt(i) && (a ? gr(n, o) && Or(t, "set", r, n) : Or(t, "add", r, n)), l;
  }
  deleteProperty(t, r) {
    const n = Mt(t, r);
    t[r];
    const i = Reflect.deleteProperty(t, r);
    return i && n && Or(t, "delete", r, void 0), i;
  }
  has(t, r) {
    const n = Reflect.has(t, r);
    return (!wr(r) || !Zp.has(r)) && dn(t, "has", r), n;
  }
  ownKeys(t) {
    return dn(
      t,
      "iterate",
      it(t) ? "length" : xi
    ), Reflect.ownKeys(t);
  }
}
class W0 extends Qp {
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
const U0 = /* @__PURE__ */ new eh(), B0 = /* @__PURE__ */ new W0(), Y0 = /* @__PURE__ */ new eh(!0);
const zc = (e) => e, Xs = (e) => Reflect.getPrototypeOf(e);
function q0(e, t, r) {
  return function(...n) {
    const i = this.__v_raw, o = /* @__PURE__ */ kt(i), s = to(o), a = e === "entries" || e === Symbol.iterator && s, l = e === "keys" && s, c = i[e](...n), d = r ? zc : t ? lo : lr;
    return !t && dn(
      o,
      "iterate",
      l ? $c : xi
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
function Js(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function X0(e, t) {
  const r = {
    get(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      e || (gr(i, a) && dn(s, "get", i), dn(s, "get", a));
      const { has: l } = Xs(s), c = t ? zc : e ? lo : lr;
      if (l.call(s, i))
        return c(o.get(i));
      if (l.call(s, a))
        return c(o.get(a));
      o !== s && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && dn(/* @__PURE__ */ kt(i), "iterate", xi), i.size;
    },
    has(i) {
      const o = this.__v_raw, s = /* @__PURE__ */ kt(o), a = /* @__PURE__ */ kt(i);
      return e || (gr(i, a) && dn(s, "has", i), dn(s, "has", a)), i === a ? o.has(i) : o.has(i) || o.has(a);
    },
    forEach(i, o) {
      const s = this, a = s.__v_raw, l = /* @__PURE__ */ kt(a), c = t ? zc : e ? lo : lr;
      return !e && dn(l, "iterate", xi), a.forEach((d, u) => i.call(o, c(d), c(u), s));
    }
  };
  return gn(
    r,
    e ? {
      add: Js("add"),
      set: Js("set"),
      delete: Js("delete"),
      clear: Js("clear")
    } : {
      add(i) {
        const o = /* @__PURE__ */ kt(this), s = Xs(o), a = /* @__PURE__ */ kt(i), l = !t && !/* @__PURE__ */ qn(i) && !/* @__PURE__ */ Hr(i) ? a : i;
        return s.has.call(o, l) || gr(i, l) && s.has.call(o, i) || gr(a, l) && s.has.call(o, a) || (o.add(l), Or(o, "add", l, l)), this;
      },
      set(i, o) {
        !t && !/* @__PURE__ */ qn(o) && !/* @__PURE__ */ Hr(o) && (o = /* @__PURE__ */ kt(o));
        const s = /* @__PURE__ */ kt(this), { has: a, get: l } = Xs(s);
        let c = a.call(s, i);
        c || (i = /* @__PURE__ */ kt(i), c = a.call(s, i));
        const d = l.call(s, i);
        return s.set(i, o), c ? gr(o, d) && Or(s, "set", i, o) : Or(s, "add", i, o), this;
      },
      delete(i) {
        const o = /* @__PURE__ */ kt(this), { has: s, get: a } = Xs(o);
        let l = s.call(o, i);
        l || (i = /* @__PURE__ */ kt(i), l = s.call(o, i)), a && a.call(o, i);
        const c = o.delete(i);
        return l && Or(o, "delete", i, void 0), c;
      },
      clear() {
        const i = /* @__PURE__ */ kt(this), o = i.size !== 0, s = i.clear();
        return o && Or(
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
    r[i] = q0(i, e, t);
  }), r;
}
function ju(e, t) {
  const r = X0(e, t);
  return (n, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? n : Reflect.get(
    Mt(r, i) && i in n ? r : n,
    i,
    o
  );
}
const J0 = {
  get: /* @__PURE__ */ ju(!1, !1)
}, Z0 = {
  get: /* @__PURE__ */ ju(!1, !0)
}, Q0 = {
  get: /* @__PURE__ */ ju(!0, !1)
};
const th = /* @__PURE__ */ new WeakMap(), nh = /* @__PURE__ */ new WeakMap(), rh = /* @__PURE__ */ new WeakMap(), ey = /* @__PURE__ */ new WeakMap();
function ty(e) {
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
function ny(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ty(N0(e));
}
// @__NO_SIDE_EFFECTS__
function go(e) {
  return /* @__PURE__ */ Hr(e) ? e : Hu(
    e,
    !1,
    U0,
    J0,
    th
  );
}
// @__NO_SIDE_EFFECTS__
function ry(e) {
  return Hu(
    e,
    !1,
    Y0,
    Z0,
    nh
  );
}
// @__NO_SIDE_EFFECTS__
function jc(e) {
  return Hu(
    e,
    !0,
    B0,
    Q0,
    rh
  );
}
function Hu(e, t, r, n, i) {
  if (!Et(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = ny(e);
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
function ki(e) {
  return /* @__PURE__ */ Hr(e) ? /* @__PURE__ */ ki(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function qn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Gu(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function kt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ kt(t) : e;
}
function iy(e) {
  return !Mt(e, "__v_skip") && Object.isExtensible(e) && zp(e, "__v_skip", !0), e;
}
const lr = (e) => Et(e) ? /* @__PURE__ */ go(e) : e, lo = (e) => Et(e) ? /* @__PURE__ */ jc(e) : e;
// @__NO_SIDE_EFFECTS__
function mn(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return ih(e, !1);
}
// @__NO_SIDE_EFFECTS__
function Ta(e) {
  return ih(e, !0);
}
function ih(e, t) {
  return /* @__PURE__ */ mn(e) ? e : new oy(e, t);
}
class oy {
  constructor(t, r) {
    this.dep = new zu(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : /* @__PURE__ */ kt(t), this._value = r ? t : lr(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const r = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ qn(t) || /* @__PURE__ */ Hr(t);
    t = n ? t : /* @__PURE__ */ kt(t), gr(t, r) && (this._rawValue = t, this._value = n ? t : lr(t), this.dep.trigger());
  }
}
function tt(e) {
  return /* @__PURE__ */ mn(e) ? e.value : e;
}
const sy = {
  get: (e, t, r) => t === "__v_raw" ? e : tt(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t];
    return /* @__PURE__ */ mn(i) && !/* @__PURE__ */ mn(r) ? (i.value = r, !0) : Reflect.set(e, t, r, n);
  }
};
function oh(e) {
  return /* @__PURE__ */ ki(e) ? e : new Proxy(e, sy);
}
class ay {
  constructor(t, r, n) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new zu(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = os - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = n;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Lt !== this)
      return Up(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return qp(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function ly(e, t, r = !1) {
  let n, i;
  return at(e) ? n = e : (n = e.get, i = e.set), new ay(n, i, r);
}
const Zs = {}, Da = /* @__PURE__ */ new WeakMap();
let vi;
function cy(e, t = !1, r = vi) {
  if (r) {
    let n = Da.get(r);
    n || Da.set(r, n = []), n.push(e);
  }
}
function uy(e, t, r = Ft) {
  const { immediate: n, deep: i, once: o, scheduler: s, augmentJob: a, call: l } = r, c = (te) => i ? te : /* @__PURE__ */ qn(te) || i === !1 || i === 0 ? Fr(te, 1) : Fr(te);
  let d, u, f, h, w = !1, g = !1;
  if (/* @__PURE__ */ mn(e) ? (u = () => e.value, w = /* @__PURE__ */ qn(e)) : /* @__PURE__ */ ki(e) ? (u = () => c(e), w = !0) : it(e) ? (g = !0, w = e.some((te) => /* @__PURE__ */ ki(te) || /* @__PURE__ */ qn(te)), u = () => e.map((te) => {
    if (/* @__PURE__ */ mn(te))
      return te.value;
    if (/* @__PURE__ */ ki(te))
      return c(te);
    if (at(te))
      return l ? l(te, 2) : te();
  })) : at(e) ? t ? u = l ? () => l(e, 2) : e : u = () => {
    if (f) {
      zr();
      try {
        f();
      } finally {
        jr();
      }
    }
    const te = vi;
    vi = d;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      vi = te;
    }
  } : u = vr, t && i) {
    const te = u, I = i === !0 ? 1 / 0 : i;
    u = () => Fr(te(), I);
  }
  const m = V0(), _ = () => {
    d.stop(), m && m.active && Fu(m.effects, d);
  };
  if (o && t) {
    const te = t;
    t = (...I) => {
      te(...I), _();
    };
  }
  let ee = g ? new Array(e.length).fill(Zs) : Zs;
  const V = (te) => {
    if (!(!(d.flags & 1) || !d.dirty && !te))
      if (t) {
        const I = d.run();
        if (i || w || (g ? I.some((X, j) => gr(X, ee[j])) : gr(I, ee))) {
          f && f();
          const X = vi;
          vi = d;
          try {
            const j = [
              I,
              // pass undefined as the old value when it's changed for the first time
              ee === Zs ? void 0 : g && ee[0] === Zs ? [] : ee,
              h
            ];
            ee = I, l ? l(t, 3, j) : (
              // @ts-expect-error
              t(...j)
            );
          } finally {
            vi = X;
          }
        }
      } else
        d.run();
  };
  return a && a(V), d = new Kp(u), d.scheduler = s ? () => s(V, !1) : V, h = (te) => cy(te, !1, d), f = d.onStop = () => {
    const te = Da.get(d);
    if (te) {
      if (l)
        l(te, 4);
      else
        for (const I of te) I();
      Da.delete(d);
    }
  }, t ? n ? V(!0) : ee = d.run() : s ? s(V.bind(null, !0), !0) : d.run(), _.pause = d.pause.bind(d), _.resume = d.resume.bind(d), _.stop = _, _;
}
function Fr(e, t = 1 / 0, r) {
  if (t <= 0 || !Et(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Map(), (r.get(e) || 0) >= t))
    return e;
  if (r.set(e, t), t--, /* @__PURE__ */ mn(e))
    Fr(e.value, t, r);
  else if (it(e))
    for (let n = 0; n < e.length; n++)
      Fr(e[n], t, r);
  else if (Lp(e) || to(e))
    e.forEach((n) => {
      Fr(n, t, r);
    });
  else if ($p(e)) {
    for (const n in e)
      Fr(e[n], t, r);
    for (const n of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, n) && Fr(e[n], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xs(e, t, r, n) {
  try {
    return n ? e(...n) : e();
  } catch (i) {
    xl(i, t, r);
  }
}
function xr(e, t, r, n) {
  if (at(e)) {
    const i = xs(e, t, r, n);
    return i && Rp(i) && i.catch((o) => {
      xl(o, t, r);
    }), i;
  }
  if (it(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(xr(e[o], t, r, n));
    return i;
  }
}
function xl(e, t, r, n = !0) {
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
      zr(), xs(o, null, 10, [
        e,
        l,
        c
      ]), jr();
      return;
    }
  }
  dy(e, r, i, n, s);
}
function dy(e, t, r, n = !0, i = !1) {
  if (i)
    throw e;
  console.error(e);
}
const Sn = [];
let fr = -1;
const no = [];
let Zr = null, Wi = 0;
const sh = /* @__PURE__ */ Promise.resolve();
let La = null;
function kl(e) {
  const t = La || sh;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function fy(e) {
  let t = fr + 1, r = Sn.length;
  for (; t < r; ) {
    const n = t + r >>> 1, i = Sn[n], o = as(i);
    o < e || o === e && i.flags & 2 ? t = n + 1 : r = n;
  }
  return t;
}
function Ku(e) {
  if (!(e.flags & 1)) {
    const t = as(e), r = Sn[Sn.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= as(r) ? Sn.push(e) : Sn.splice(fy(t), 0, e), e.flags |= 1, ah();
  }
}
function ah() {
  La || (La = sh.then(ch));
}
function py(e) {
  it(e) ? no.push(...e) : Zr && e.id === -1 ? Zr.splice(Wi + 1, 0, e) : e.flags & 1 || (no.push(e), e.flags |= 1), ah();
}
function Yd(e, t, r = fr + 1) {
  for (; r < Sn.length; r++) {
    const n = Sn[r];
    if (n && n.flags & 2) {
      if (e && n.id !== e.uid)
        continue;
      Sn.splice(r, 1), r--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
    }
  }
}
function lh(e) {
  if (no.length) {
    const t = [...new Set(no)].sort(
      (r, n) => as(r) - as(n)
    );
    if (no.length = 0, Zr) {
      Zr.push(...t);
      return;
    }
    for (Zr = t, Wi = 0; Wi < Zr.length; Wi++) {
      const r = Zr[Wi];
      r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2;
    }
    Zr = null, Wi = 0;
  }
}
const as = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function ch(e) {
  try {
    for (fr = 0; fr < Sn.length; fr++) {
      const t = Sn[fr];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), xs(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; fr < Sn.length; fr++) {
      const t = Sn[fr];
      t && (t.flags &= -2);
    }
    fr = -1, Sn.length = 0, lh(), La = null, (Sn.length || no.length) && ch();
  }
}
let zn = null, uh = null;
function Ra(e) {
  const t = zn;
  return zn = e, uh = e && e.type.__scopeId || null, t;
}
function dh(e, t = zn, r) {
  if (!t || e._n)
    return e;
  const n = (...i) => {
    n._d && af(-1);
    const o = Ra(t);
    let s;
    try {
      s = e(...i);
    } finally {
      Ra(o), n._d && af(1);
    }
    return s;
  };
  return n._n = !0, n._c = !0, n._d = !0, n;
}
function Vr(e, t) {
  if (zn === null)
    return e;
  const r = Cl(zn), n = e.dirs || (e.dirs = []);
  for (let i = 0; i < t.length; i++) {
    let [o, s, a, l = Ft] = t[i];
    o && (at(o) && (o = {
      mounted: o,
      updated: o
    }), o.deep && Fr(s), n.push({
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
function pi(e, t, r, n) {
  const i = e.dirs, o = t && t.dirs;
  for (let s = 0; s < i.length; s++) {
    const a = i[s];
    o && (a.oldValue = o[s].value);
    let l = a.dir[n];
    l && (zr(), xr(l, r, 8, [
      e.el,
      a,
      e,
      t
    ]), jr());
  }
}
function hy(e, t) {
  if (fn) {
    let r = fn.provides;
    const n = fn.parent && fn.parent.provides;
    n === r && (r = fn.provides = Object.create(n)), r[e] = t;
  }
}
function ma(e, t, r = !1) {
  const n = fb();
  if (n || ro) {
    let i = ro ? ro._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return r && at(t) ? t.call(n && n.proxy) : t;
  }
}
const my = /* @__PURE__ */ Symbol.for("v-scx"), gy = () => ma(my);
function Mi(e, t, r) {
  return fh(e, t, r);
}
function fh(e, t, r = Ft) {
  const { immediate: n, deep: i, flush: o, once: s } = r, a = gn({}, r), l = t && n || !t && o !== "post";
  let c;
  if (cs) {
    if (o === "sync") {
      const h = gy();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = vr, h.resume = vr, h.pause = vr, h;
    }
  }
  const d = fn;
  a.call = (h, w, g) => xr(h, d, w, g);
  let u = !1;
  o === "post" ? a.scheduler = (h) => {
    On(h, d && d.suspense);
  } : o !== "sync" && (u = !0, a.scheduler = (h, w) => {
    w ? h() : Ku(h);
  }), a.augmentJob = (h) => {
    t && (h.flags |= 4), u && (h.flags |= 2, d && (h.id = d.uid, h.i = d));
  };
  const f = uy(e, t, a);
  return cs && (c ? c.push(f) : l && f()), f;
}
function yy(e, t, r) {
  const n = this.proxy, i = Jt(e) ? e.includes(".") ? ph(n, e) : () => n[e] : e.bind(n, n);
  let o;
  at(t) ? o = t : (o = t.handler, r = t);
  const s = Ms(this), a = fh(i, o.bind(n), r);
  return s(), a;
}
function ph(e, t) {
  const r = t.split(".");
  return () => {
    let n = e;
    for (let i = 0; i < r.length && n; i++)
      n = n[r[i]];
    return n;
  };
}
const by = /* @__PURE__ */ Symbol("_vte"), vy = (e) => e.__isTeleport, Sy = /* @__PURE__ */ Symbol("_leaveCb");
function Wu(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Wu(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function hh(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function qd(e, t) {
  let r;
  return !!((r = Object.getOwnPropertyDescriptor(e, t)) && !r.configurable);
}
const Va = /* @__PURE__ */ new WeakMap();
function Jo(e, t, r, n, i = !1) {
  if (it(e)) {
    e.forEach(
      (g, m) => Jo(
        g,
        t && (it(t) ? t[m] : t),
        r,
        n,
        i
      )
    );
    return;
  }
  if (Zo(n) && !i) {
    n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && Jo(e, t, r, n.component.subTree);
    return;
  }
  const o = n.shapeFlag & 4 ? Cl(n.component) : n.el, s = i ? null : o, { i: a, r: l } = e, c = t && t.r, d = a.refs === Ft ? a.refs = {} : a.refs, u = a.setupState, f = /* @__PURE__ */ kt(u), h = u === Ft ? Dp : (g) => qd(d, g) ? !1 : Mt(f, g), w = (g, m) => !(m && qd(d, m));
  if (c != null && c !== l) {
    if (Xd(t), Jt(c))
      d[c] = null, h(c) && (u[c] = null);
    else if (/* @__PURE__ */ mn(c)) {
      const g = t;
      w(c, g.k) && (c.value = null), g.k && (d[g.k] = null);
    }
  }
  if (at(l))
    xs(l, a, 12, [s, d]);
  else {
    const g = Jt(l), m = /* @__PURE__ */ mn(l);
    if (g || m) {
      const _ = () => {
        if (e.f) {
          const ee = g ? h(l) ? u[l] : d[l] : w() || !e.k ? l.value : d[e.k];
          if (i)
            it(ee) && Fu(ee, o);
          else if (it(ee))
            ee.includes(o) || ee.push(o);
          else if (g)
            d[l] = [o], h(l) && (u[l] = d[l]);
          else {
            const V = [o];
            w(l, e.k) && (l.value = V), e.k && (d[e.k] = V);
          }
        } else g ? (d[l] = s, h(l) && (u[l] = s)) : m && (w(l, e.k) && (l.value = s), e.k && (d[e.k] = s));
      };
      if (s) {
        const ee = () => {
          _(), Va.delete(e);
        };
        ee.id = -1, Va.set(e, ee), On(ee, r);
      } else
        Xd(e), _();
    }
  }
}
function Xd(e) {
  const t = Va.get(e);
  t && (t.flags |= 8, Va.delete(e));
}
_l().requestIdleCallback;
_l().cancelIdleCallback;
const Zo = (e) => !!e.type.__asyncLoader, mh = (e) => e.type.__isKeepAlive;
function _y(e, t) {
  gh(e, "a", t);
}
function wy(e, t) {
  gh(e, "da", t);
}
function gh(e, t, r = fn) {
  const n = e.__wdc || (e.__wdc = () => {
    let i = r;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Ml(t, n, r), r) {
    let i = r.parent;
    for (; i && i.parent; )
      mh(i.parent.vnode) && xy(n, t, r, i), i = i.parent;
  }
}
function xy(e, t, r, n) {
  const i = Ml(
    t,
    e,
    n,
    !0
    /* prepend */
  );
  yh(() => {
    Fu(n[t], i);
  }, r);
}
function Ml(e, t, r = fn, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []), o = t.__weh || (t.__weh = (...s) => {
      zr();
      const a = Ms(r), l = xr(t, r, e, s);
      return a(), jr(), l;
    });
    return n ? i.unshift(o) : i.push(o), o;
  }
}
const Kr = (e) => (t, r = fn) => {
  (!cs || e === "sp") && Ml(e, (...n) => t(...n), r);
}, ky = Kr("bm"), Pl = Kr("m"), My = Kr(
  "bu"
), Py = Kr("u"), ks = Kr(
  "bum"
), yh = Kr("um"), Ny = Kr(
  "sp"
), Ay = Kr("rtg"), Cy = Kr("rtc");
function Iy(e, t = fn) {
  Ml("ec", e, t);
}
const Ey = "components", bh = /* @__PURE__ */ Symbol.for("v-ndc");
function Oy(e) {
  return Jt(e) ? Fy(Ey, e, !1) || e : e || bh;
}
function Fy(e, t, r = !0, n = !1) {
  const i = zn || fn;
  if (i) {
    const o = i.type;
    {
      const a = yb(
        o,
        !1
      );
      if (a && (a === t || a === xn(t) || a === Sl(xn(t))))
        return o;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      Jd(i[e] || o[e], t) || // global registration
      Jd(i.appContext[e], t)
    );
    return !s && n ? o : s;
  }
}
function Jd(e, t) {
  return e && (e[t] || e[xn(t)] || e[Sl(xn(t))]);
}
function Pt(e, t, r, n) {
  let i;
  const o = r, s = it(e);
  if (s || Jt(e)) {
    const a = s && /* @__PURE__ */ ki(e);
    let l = !1, c = !1;
    a && (l = !/* @__PURE__ */ qn(e), c = /* @__PURE__ */ Hr(e), e = wl(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        l ? c ? lo(lr(e[d])) : lr(e[d]) : e[d],
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
const Hc = (e) => e ? $h(e) ? Cl(e) : Hc(e.parent) : null, Qo = (
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
    $parent: (e) => Hc(e.parent),
    $root: (e) => Hc(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Sh(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ku(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = kl.bind(e.proxy)),
    $watch: (e) => yy.bind(e)
  })
), Ql = (e, t) => e !== Ft && !e.__isScriptSetup && Mt(e, t), Ty = {
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
        if (Ql(n, t))
          return s[t] = 1, n[t];
        if (i !== Ft && Mt(i, t))
          return s[t] = 2, i[t];
        if (Mt(o, t))
          return s[t] = 3, o[t];
        if (r !== Ft && Mt(r, t))
          return s[t] = 4, r[t];
        Gc && (s[t] = 0);
      }
    }
    const c = Qo[t];
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
    return Ql(i, t) ? (i[t] = r, !0) : n !== Ft && Mt(n, t) ? (n[t] = r, !0) : Mt(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (o[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: i, props: o, type: s }
  }, a) {
    let l;
    return !!(r[a] || e !== Ft && a[0] !== "$" && Mt(e, a) || Ql(t, a) || Mt(o, a) || Mt(n, a) || Mt(Qo, a) || Mt(i.config.globalProperties, a) || (l = s.__cssModules) && l[a]);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : Mt(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
function Zd(e) {
  return it(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
let Gc = !0;
function Dy(e) {
  const t = Sh(e), r = e.proxy, n = e.ctx;
  Gc = !1, t.beforeCreate && Qd(t.beforeCreate, e, "bc");
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
    beforeUpdate: h,
    updated: w,
    activated: g,
    deactivated: m,
    beforeDestroy: _,
    beforeUnmount: ee,
    destroyed: V,
    unmounted: te,
    render: I,
    renderTracked: X,
    renderTriggered: j,
    errorCaptured: W,
    serverPrefetch: ie,
    // public API
    expose: pe,
    inheritAttrs: q,
    // assets
    components: de,
    directives: ae,
    filters: ve
  } = t;
  if (c && Ly(c, n, null), s)
    for (const z in s) {
      const M = s[z];
      at(M) && (n[z] = M.bind(r));
    }
  if (i) {
    const z = i.call(r, r);
    Et(z) && (e.data = /* @__PURE__ */ go(z));
  }
  if (Gc = !0, o)
    for (const z in o) {
      const M = o[z], H = at(M) ? M.bind(r, r) : at(M.get) ? M.get.bind(r, r) : vr, T = !at(M) && at(M.set) ? M.set.bind(r) : vr, K = dt({
        get: H,
        set: T
      });
      Object.defineProperty(n, z, {
        enumerable: !0,
        configurable: !0,
        get: () => K.value,
        set: (fe) => K.value = fe
      });
    }
  if (a)
    for (const z in a)
      vh(a[z], n, r, z);
  if (l) {
    const z = at(l) ? l.call(r) : l;
    Reflect.ownKeys(z).forEach((M) => {
      hy(M, z[M]);
    });
  }
  d && Qd(d, e, "c");
  function A(z, M) {
    it(M) ? M.forEach((H) => z(H.bind(r))) : M && z(M.bind(r));
  }
  if (A(ky, u), A(Pl, f), A(My, h), A(Py, w), A(_y, g), A(wy, m), A(Iy, W), A(Cy, X), A(Ay, j), A(ks, ee), A(yh, te), A(Ny, ie), it(pe))
    if (pe.length) {
      const z = e.exposed || (e.exposed = {});
      pe.forEach((M) => {
        Object.defineProperty(z, M, {
          get: () => r[M],
          set: (H) => r[M] = H,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  I && e.render === vr && (e.render = I), q != null && (e.inheritAttrs = q), de && (e.components = de), ae && (e.directives = ae), ie && hh(e);
}
function Ly(e, t, r = vr) {
  it(e) && (e = Kc(e));
  for (const n in e) {
    const i = e[n];
    let o;
    Et(i) ? "default" in i ? o = ma(
      i.from || n,
      i.default,
      !0
    ) : o = ma(i.from || n) : o = ma(i), /* @__PURE__ */ mn(o) ? Object.defineProperty(t, n, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (s) => o.value = s
    }) : t[n] = o;
  }
}
function Qd(e, t, r) {
  xr(
    it(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function vh(e, t, r, n) {
  let i = n.includes(".") ? ph(r, n) : () => r[n];
  if (Jt(e)) {
    const o = t[e];
    at(o) && Mi(i, o);
  } else if (at(e))
    Mi(i, e.bind(r));
  else if (Et(e))
    if (it(e))
      e.forEach((o) => vh(o, t, r, n));
    else {
      const o = at(e.handler) ? e.handler.bind(r) : t[e.handler];
      at(o) && Mi(i, o, e);
    }
}
function Sh(e) {
  const t = e.type, { mixins: r, extends: n } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: s }
  } = e.appContext, a = o.get(t);
  let l;
  return a ? l = a : !i.length && !r && !n ? l = t : (l = {}, i.length && i.forEach(
    (c) => $a(l, c, s, !0)
  ), $a(l, t, s)), Et(t) && o.set(t, l), l;
}
function $a(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t;
  o && $a(e, o, r, !0), i && i.forEach(
    (s) => $a(e, s, r, !0)
  );
  for (const s in t)
    if (!(n && s === "expose")) {
      const a = Ry[s] || r && r[s];
      e[s] = a ? a(e[s], t[s]) : t[s];
    }
  return e;
}
const Ry = {
  data: ef,
  props: tf,
  emits: tf,
  // objects
  methods: Vo,
  computed: Vo,
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
  components: Vo,
  directives: Vo,
  // watch
  watch: $y,
  // provide / inject
  provide: ef,
  inject: Vy
};
function ef(e, t) {
  return t ? e ? function() {
    return gn(
      at(e) ? e.call(this, this) : e,
      at(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vy(e, t) {
  return Vo(Kc(e), Kc(t));
}
function Kc(e) {
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
function Vo(e, t) {
  return e ? gn(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function tf(e, t) {
  return e ? it(e) && it(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : gn(
    /* @__PURE__ */ Object.create(null),
    Zd(e),
    Zd(t ?? {})
  ) : t;
}
function $y(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = gn(/* @__PURE__ */ Object.create(null), e);
  for (const n in t)
    r[n] = bn(e[n], t[n]);
  return r;
}
function _h() {
  return {
    app: null,
    config: {
      isNativeTag: Dp,
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
let zy = 0;
function jy(e, t) {
  return function(n, i = null) {
    at(n) || (n = gn({}, n)), i != null && !Et(i) && (i = null);
    const o = _h(), s = /* @__PURE__ */ new WeakSet(), a = [];
    let l = !1;
    const c = o.app = {
      _uid: zy++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: vb,
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
          const h = c._ceVNode || Be(n, i);
          return h.appContext = o, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, d, f), l = !0, c._container = d, d.__vue_app__ = c, Cl(h.component);
        }
      },
      onUnmount(d) {
        a.push(d);
      },
      unmount() {
        l && (xr(
          a,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(d, u) {
        return o.provides[d] = u, c;
      },
      runWithContext(d) {
        const u = ro;
        ro = c;
        try {
          return d();
        } finally {
          ro = u;
        }
      }
    };
    return c;
  };
}
let ro = null;
const Hy = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${xn(t)}Modifiers`] || e[`${Fi(t)}Modifiers`];
function Gy(e, t, ...r) {
  if (e.isUnmounted) return;
  const n = e.vnode.props || Ft;
  let i = r;
  const o = t.startsWith("update:"), s = o && Hy(n, t.slice(7));
  s && (s.trim && (i = r.map((d) => Jt(d) ? d.trim() : d)), s.number && (i = r.map(Du)));
  let a, l = n[a = Yl(t)] || // also try camelCase event handler (#2249)
  n[a = Yl(xn(t))];
  !l && o && (l = n[a = Yl(Fi(t))]), l && xr(
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
    e.emitted[a] = !0, xr(
      c,
      e,
      6,
      i
    );
  }
}
const Ky = /* @__PURE__ */ new WeakMap();
function wh(e, t, r = !1) {
  const n = r ? Ky : t.emitsCache, i = n.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let s = {}, a = !1;
  if (!at(e)) {
    const l = (c) => {
      const d = wh(c, t, !0);
      d && (a = !0, gn(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !o && !a ? (Et(e) && n.set(e, null), null) : (it(o) ? o.forEach((l) => s[l] = null) : gn(s, o), Et(e) && n.set(e, s), s);
}
function Nl(e, t) {
  return !e || !yl(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), Mt(e, t[0].toLowerCase() + t.slice(1)) || Mt(e, Fi(t)) || Mt(e, t));
}
function nf(e) {
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
    setupState: h,
    ctx: w,
    inheritAttrs: g
  } = e, m = Ra(e);
  let _, ee;
  try {
    if (r.shapeFlag & 4) {
      const te = i || n, I = te;
      _ = hr(
        c.call(
          I,
          te,
          d,
          u,
          h,
          f,
          w
        )
      ), ee = a;
    } else {
      const te = t;
      _ = hr(
        te.length > 1 ? te(
          u,
          { attrs: a, slots: s, emit: l }
        ) : te(
          u,
          null
        )
      ), ee = t.props ? a : Wy(a);
    }
  } catch (te) {
    es.length = 0, xl(te, e, 1), _ = Be(ni);
  }
  let V = _;
  if (ee && g !== !1) {
    const te = Object.keys(ee), { shapeFlag: I } = V;
    te.length && I & 7 && (o && te.some(bl) && (ee = Uy(
      ee,
      o
    )), V = co(V, ee, !1, !0));
  }
  return r.dirs && (V = co(V, null, !1, !0), V.dirs = V.dirs ? V.dirs.concat(r.dirs) : r.dirs), r.transition && Wu(V, r.transition), _ = V, Ra(m), _;
}
const Wy = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || yl(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, Uy = (e, t) => {
  const r = {};
  for (const n in e)
    (!bl(n) || !(n.slice(9) in t)) && (r[n] = e[n]);
  return r;
};
function By(e, t, r) {
  const { props: n, children: i, component: o } = e, { props: s, children: a, patchFlag: l } = t, c = o.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (r && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return n ? rf(n, s, c) : !!s;
    if (l & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const f = d[u];
        if (xh(s, n, f) && !Nl(c, f))
          return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable) ? !0 : n === s ? !1 : n ? s ? rf(n, s, c) : !0 : !!s;
  return !1;
}
function rf(e, t, r) {
  const n = Object.keys(t);
  if (n.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < n.length; i++) {
    const o = n[i];
    if (xh(t, e, o) && !Nl(r, o))
      return !0;
  }
  return !1;
}
function xh(e, t, r) {
  const n = e[r], i = t[r];
  return r === "style" && Et(n) && Et(i) ? !Lu(n, i) : n !== i;
}
function Yy({ vnode: e, parent: t, suspense: r }, n) {
  for (; t; ) {
    const i = t.subTree;
    if (i.suspense && i.suspense.activeBranch === e && (i.suspense.vnode.el = i.el = n, e = i), i === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
  r && r.activeBranch === e && (r.vnode.el = n);
}
const kh = {}, Mh = () => Object.create(kh), Ph = (e) => Object.getPrototypeOf(e) === kh;
function qy(e, t, r, n = !1) {
  const i = {}, o = Mh();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Nh(e, t, i, o);
  for (const s in e.propsOptions[0])
    s in i || (i[s] = void 0);
  r ? e.props = n ? i : /* @__PURE__ */ ry(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function Xy(e, t, r, n) {
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
        if (Nl(e.emitsOptions, f))
          continue;
        const h = t[f];
        if (l)
          if (Mt(o, f))
            h !== o[f] && (o[f] = h, c = !0);
          else {
            const w = xn(f);
            i[w] = Wc(
              l,
              a,
              w,
              h,
              e,
              !1
            );
          }
        else
          h !== o[f] && (o[f] = h, c = !0);
      }
    }
  } else {
    Nh(e, t, i, o) && (c = !0);
    let d;
    for (const u in a)
      (!t || // for camelCase
      !Mt(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Fi(u)) === u || !Mt(t, d))) && (l ? r && // for camelCase
      (r[u] !== void 0 || // for kebab-case
      r[d] !== void 0) && (i[u] = Wc(
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
  c && Or(e.attrs, "set", "");
}
function Nh(e, t, r, n) {
  const [i, o] = e.propsOptions;
  let s = !1, a;
  if (t)
    for (let l in t) {
      if (Yo(l))
        continue;
      const c = t[l];
      let d;
      i && Mt(i, d = xn(l)) ? !o || !o.includes(d) ? r[d] = c : (a || (a = {}))[d] = c : Nl(e.emitsOptions, l) || (!(l in n) || c !== n[l]) && (n[l] = c, s = !0);
    }
  if (o) {
    const l = /* @__PURE__ */ kt(r), c = a || Ft;
    for (let d = 0; d < o.length; d++) {
      const u = o[d];
      r[u] = Wc(
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
function Wc(e, t, r, n, i, o) {
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
          const d = Ms(i);
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
    ] && (n === "" || n === Fi(r)) && (n = !0));
  }
  return n;
}
const Jy = /* @__PURE__ */ new WeakMap();
function Ah(e, t, r = !1) {
  const n = r ? Jy : t.propsCache, i = n.get(e);
  if (i)
    return i;
  const o = e.props, s = {}, a = [];
  let l = !1;
  if (!at(e)) {
    const d = (u) => {
      l = !0;
      const [f, h] = Ah(u, t, !0);
      gn(s, f), h && a.push(...h);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !l)
    return Et(e) && n.set(e, eo), eo;
  if (it(o))
    for (let d = 0; d < o.length; d++) {
      const u = xn(o[d]);
      of(u) && (s[u] = Ft);
    }
  else if (o)
    for (const d in o) {
      const u = xn(d);
      if (of(u)) {
        const f = o[d], h = s[u] = it(f) || at(f) ? { type: f } : gn({}, f), w = h.type;
        let g = !1, m = !0;
        if (it(w))
          for (let _ = 0; _ < w.length; ++_) {
            const ee = w[_], V = at(ee) && ee.name;
            if (V === "Boolean") {
              g = !0;
              break;
            } else V === "String" && (m = !1);
          }
        else
          g = at(w) && w.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = g, h[
          1
          /* shouldCastTrue */
        ] = m, (g || Mt(h, "default")) && a.push(u);
      }
    }
  const c = [s, a];
  return Et(e) && n.set(e, c), c;
}
function of(e) {
  return e[0] !== "$" && !Yo(e);
}
const Uu = (e) => e === "_" || e === "_ctx" || e === "$stable", Bu = (e) => it(e) ? e.map(hr) : [hr(e)], Zy = (e, t, r) => {
  if (t._n)
    return t;
  const n = dh((...i) => Bu(t(...i)), r);
  return n._c = !1, n;
}, Ch = (e, t, r) => {
  const n = e._ctx;
  for (const i in e) {
    if (Uu(i)) continue;
    const o = e[i];
    if (at(o))
      t[i] = Zy(i, o, n);
    else if (o != null) {
      const s = Bu(o);
      t[i] = () => s;
    }
  }
}, Ih = (e, t) => {
  const r = Bu(t);
  e.slots.default = () => r;
}, Eh = (e, t, r) => {
  for (const n in t)
    (r || !Uu(n)) && (e[n] = t[n]);
}, Qy = (e, t, r) => {
  const n = e.slots = Mh();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Eh(n, t, r), r && zp(n, "_", i, !0)) : Ch(t, n);
  } else t && Ih(e, t);
}, eb = (e, t, r) => {
  const { vnode: n, slots: i } = e;
  let o = !0, s = Ft;
  if (n.shapeFlag & 32) {
    const a = t._;
    a ? r && a === 1 ? o = !1 : Eh(i, t, r) : (o = !t.$stable, Ch(t, i)), s = t;
  } else t && (Ih(e, t), s = { default: 1 });
  if (o)
    for (const a in i)
      !Uu(a) && s[a] == null && delete i[a];
}, On = ob;
function tb(e) {
  return nb(e);
}
function nb(e, t) {
  const r = _l();
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
    setScopeId: h = vr,
    insertStaticContent: w
  } = e, g = (b, y, E, v = null, $ = null, L = null, J = void 0, O = null, F = !!y.dynamicChildren) => {
    if (b === y)
      return;
    b && !Eo(b, y) && (v = ue(b), fe(b, $, L, !0), b = null), y.patchFlag === -2 && (F = !1, y.dynamicChildren = null);
    const { type: x, ref: R, shapeFlag: Z } = y;
    switch (x) {
      case Al:
        m(b, y, E, v);
        break;
      case ni:
        _(b, y, E, v);
        break;
      case tc:
        b == null && ee(y, E, v, J);
        break;
      case Qe:
        de(
          b,
          y,
          E,
          v,
          $,
          L,
          J,
          O,
          F
        );
        break;
      default:
        Z & 1 ? I(
          b,
          y,
          E,
          v,
          $,
          L,
          J,
          O,
          F
        ) : Z & 6 ? ae(
          b,
          y,
          E,
          v,
          $,
          L,
          J,
          O,
          F
        ) : (Z & 64 || Z & 128) && x.process(
          b,
          y,
          E,
          v,
          $,
          L,
          J,
          O,
          F,
          C
        );
    }
    R != null && $ ? Jo(R, b && b.ref, L, y || b, !y) : R == null && b && b.ref != null && Jo(b.ref, null, L, b, !0);
  }, m = (b, y, E, v) => {
    if (b == null)
      n(
        y.el = a(y.children),
        E,
        v
      );
    else {
      const $ = y.el = b.el;
      y.children !== b.children && c($, y.children);
    }
  }, _ = (b, y, E, v) => {
    b == null ? n(
      y.el = l(y.children || ""),
      E,
      v
    ) : y.el = b.el;
  }, ee = (b, y, E, v) => {
    [b.el, b.anchor] = w(
      b.children,
      y,
      E,
      v,
      b.el,
      b.anchor
    );
  }, V = ({ el: b, anchor: y }, E, v) => {
    let $;
    for (; b && b !== y; )
      $ = f(b), n(b, E, v), b = $;
    n(y, E, v);
  }, te = ({ el: b, anchor: y }) => {
    let E;
    for (; b && b !== y; )
      E = f(b), i(b), b = E;
    i(y);
  }, I = (b, y, E, v, $, L, J, O, F) => {
    if (y.type === "svg" ? J = "svg" : y.type === "math" && (J = "mathml"), b == null)
      X(
        y,
        E,
        v,
        $,
        L,
        J,
        O,
        F
      );
    else {
      const x = b.el && b.el._isVueCE ? b.el : null;
      try {
        x && x._beginPatch(), ie(
          b,
          y,
          $,
          L,
          J,
          O,
          F
        );
      } finally {
        x && x._endPatch();
      }
    }
  }, X = (b, y, E, v, $, L, J, O) => {
    let F, x;
    const { props: R, shapeFlag: Z, transition: he, dirs: ce } = b;
    if (F = b.el = s(
      b.type,
      L,
      R && R.is,
      R
    ), Z & 8 ? d(F, b.children) : Z & 16 && W(
      b.children,
      F,
      null,
      v,
      $,
      ec(b, L),
      J,
      O
    ), ce && pi(b, null, v, "created"), j(F, b, b.scopeId, J, v), R) {
      for (const Se in R)
        Se !== "value" && !Yo(Se) && o(F, Se, null, R[Se], L, v);
      "value" in R && o(F, "value", null, R.value, L), (x = R.onVnodeBeforeMount) && ur(x, v, b);
    }
    ce && pi(b, null, v, "beforeMount");
    const be = rb($, he);
    be && he.beforeEnter(F), n(F, y, E), ((x = R && R.onVnodeMounted) || be || ce) && On(() => {
      try {
        x && ur(x, v, b), be && he.enter(F), ce && pi(b, null, v, "mounted");
      } finally {
      }
    }, $);
  }, j = (b, y, E, v, $) => {
    if (E && h(b, E), v)
      for (let L = 0; L < v.length; L++)
        h(b, v[L]);
    if ($) {
      let L = $.subTree;
      if (y === L || Dh(L.type) && (L.ssContent === y || L.ssFallback === y)) {
        const J = $.vnode;
        j(
          b,
          J,
          J.scopeId,
          J.slotScopeIds,
          $.parent
        );
      }
    }
  }, W = (b, y, E, v, $, L, J, O, F = 0) => {
    for (let x = F; x < b.length; x++) {
      const R = b[x] = O ? Cr(b[x]) : hr(b[x]);
      g(
        null,
        R,
        y,
        E,
        v,
        $,
        L,
        J,
        O
      );
    }
  }, ie = (b, y, E, v, $, L, J) => {
    const O = y.el = b.el;
    let { patchFlag: F, dynamicChildren: x, dirs: R } = y;
    F |= b.patchFlag & 16;
    const Z = b.props || Ft, he = y.props || Ft;
    let ce;
    if (E && hi(E, !1), (ce = he.onVnodeBeforeUpdate) && ur(ce, E, y, b), R && pi(y, b, E, "beforeUpdate"), E && hi(E, !0), (Z.innerHTML && he.innerHTML == null || Z.textContent && he.textContent == null) && d(O, ""), x ? pe(
      b.dynamicChildren,
      x,
      O,
      E,
      v,
      ec(y, $),
      L
    ) : J || M(
      b,
      y,
      O,
      null,
      E,
      v,
      ec(y, $),
      L,
      !1
    ), F > 0) {
      if (F & 16)
        q(O, Z, he, E, $);
      else if (F & 2 && Z.class !== he.class && o(O, "class", null, he.class, $), F & 4 && o(O, "style", Z.style, he.style, $), F & 8) {
        const be = y.dynamicProps;
        for (let Se = 0; Se < be.length; Se++) {
          const ye = be[Se], Q = Z[ye], me = he[ye];
          (me !== Q || ye === "value") && o(O, ye, Q, me, $, E);
        }
      }
      F & 1 && b.children !== y.children && d(O, y.children);
    } else !J && x == null && q(O, Z, he, E, $);
    ((ce = he.onVnodeUpdated) || R) && On(() => {
      ce && ur(ce, E, y, b), R && pi(y, b, E, "updated");
    }, v);
  }, pe = (b, y, E, v, $, L, J) => {
    for (let O = 0; O < y.length; O++) {
      const F = b[O], x = y[O], R = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === Qe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Eo(F, x) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? u(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          E
        )
      );
      g(
        F,
        x,
        R,
        null,
        v,
        $,
        L,
        J,
        !0
      );
    }
  }, q = (b, y, E, v, $) => {
    if (y !== E) {
      if (y !== Ft)
        for (const L in y)
          !Yo(L) && !(L in E) && o(
            b,
            L,
            y[L],
            null,
            $,
            v
          );
      for (const L in E) {
        if (Yo(L)) continue;
        const J = E[L], O = y[L];
        J !== O && L !== "value" && o(b, L, O, J, $, v);
      }
      "value" in E && o(b, "value", y.value, E.value, $);
    }
  }, de = (b, y, E, v, $, L, J, O, F) => {
    const x = y.el = b ? b.el : a(""), R = y.anchor = b ? b.anchor : a("");
    let { patchFlag: Z, dynamicChildren: he, slotScopeIds: ce } = y;
    ce && (O = O ? O.concat(ce) : ce), b == null ? (n(x, E, v), n(R, E, v), W(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      y.children || [],
      E,
      R,
      $,
      L,
      J,
      O,
      F
    )) : Z > 0 && Z & 64 && he && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    b.dynamicChildren && b.dynamicChildren.length === he.length ? (pe(
      b.dynamicChildren,
      he,
      E,
      $,
      L,
      J,
      O
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (y.key != null || $ && y === $.subTree) && Oh(
      b,
      y,
      !0
      /* shallow */
    )) : M(
      b,
      y,
      E,
      R,
      $,
      L,
      J,
      O,
      F
    );
  }, ae = (b, y, E, v, $, L, J, O, F) => {
    y.slotScopeIds = O, b == null ? y.shapeFlag & 512 ? $.ctx.activate(
      y,
      E,
      v,
      J,
      F
    ) : ve(
      y,
      E,
      v,
      $,
      L,
      J,
      F
    ) : G(b, y, F);
  }, ve = (b, y, E, v, $, L, J) => {
    const O = b.component = db(
      b,
      v,
      $
    );
    if (mh(b) && (O.ctx.renderer = C), pb(O, !1, J), O.asyncDep) {
      if ($ && $.registerDep(O, A, J), !b.el) {
        const F = O.subTree = Be(ni);
        _(null, F, y, E), b.placeholder = F.el;
      }
    } else
      A(
        O,
        b,
        y,
        E,
        $,
        L,
        J
      );
  }, G = (b, y, E) => {
    const v = y.component = b.component;
    if (By(b, y, E))
      if (v.asyncDep && !v.asyncResolved) {
        z(v, y, E);
        return;
      } else
        v.next = y, v.update();
    else
      y.el = b.el, v.vnode = y;
  }, A = (b, y, E, v, $, L, J) => {
    const O = () => {
      if (b.isMounted) {
        let { next: Z, bu: he, u: ce, parent: be, vnode: Se } = b;
        {
          const p = Fh(b);
          if (p) {
            Z && (Z.el = Se.el, z(b, Z, J)), p.asyncDep.then(() => {
              On(() => {
                b.isUnmounted || x();
              }, $);
            });
            return;
          }
        }
        let ye = Z, Q;
        hi(b, !1), Z ? (Z.el = Se.el, z(b, Z, J)) : Z = Se, he && ha(he), (Q = Z.props && Z.props.onVnodeBeforeUpdate) && ur(Q, be, Z, Se), hi(b, !0);
        const me = nf(b), B = b.subTree;
        b.subTree = me, g(
          B,
          me,
          // parent may have changed if it's in a teleport
          u(B.el),
          // anchor may have changed if it's in a fragment
          ue(B),
          b,
          $,
          L
        ), Z.el = me.el, ye === null && Yy(b, me.el), ce && On(ce, $), (Q = Z.props && Z.props.onVnodeUpdated) && On(
          () => ur(Q, be, Z, Se),
          $
        );
      } else {
        let Z;
        const { el: he, props: ce } = y, { bm: be, m: Se, parent: ye, root: Q, type: me } = b, B = Zo(y);
        hi(b, !1), be && ha(be), !B && (Z = ce && ce.onVnodeBeforeMount) && ur(Z, ye, y), hi(b, !0);
        {
          Q.ce && Q.ce._hasShadowRoot() && Q.ce._injectChildStyle(
            me,
            b.parent ? b.parent.type : void 0
          );
          const p = b.subTree = nf(b);
          g(
            null,
            p,
            E,
            v,
            b,
            $,
            L
          ), y.el = p.el;
        }
        if (Se && On(Se, $), !B && (Z = ce && ce.onVnodeMounted)) {
          const p = y;
          On(
            () => ur(Z, ye, p),
            $
          );
        }
        (y.shapeFlag & 256 || ye && Zo(ye.vnode) && ye.vnode.shapeFlag & 256) && b.a && On(b.a, $), b.isMounted = !0, y = E = v = null;
      }
    };
    b.scope.on();
    const F = b.effect = new Kp(O);
    b.scope.off();
    const x = b.update = F.run.bind(F), R = b.job = F.runIfDirty.bind(F);
    R.i = b, R.id = b.uid, F.scheduler = () => Ku(R), hi(b, !0), x();
  }, z = (b, y, E) => {
    y.component = b;
    const v = b.vnode.props;
    b.vnode = y, b.next = null, Xy(b, y.props, v, E), eb(b, y.children, E), zr(), Yd(b), jr();
  }, M = (b, y, E, v, $, L, J, O, F = !1) => {
    const x = b && b.children, R = b ? b.shapeFlag : 0, Z = y.children, { patchFlag: he, shapeFlag: ce } = y;
    if (he > 0) {
      if (he & 128) {
        T(
          x,
          Z,
          E,
          v,
          $,
          L,
          J,
          O,
          F
        );
        return;
      } else if (he & 256) {
        H(
          x,
          Z,
          E,
          v,
          $,
          L,
          J,
          O,
          F
        );
        return;
      }
    }
    ce & 8 ? (R & 16 && ne(x, $, L), Z !== x && d(E, Z)) : R & 16 ? ce & 16 ? T(
      x,
      Z,
      E,
      v,
      $,
      L,
      J,
      O,
      F
    ) : ne(x, $, L, !0) : (R & 8 && d(E, ""), ce & 16 && W(
      Z,
      E,
      v,
      $,
      L,
      J,
      O,
      F
    ));
  }, H = (b, y, E, v, $, L, J, O, F) => {
    b = b || eo, y = y || eo;
    const x = b.length, R = y.length, Z = Math.min(x, R);
    let he;
    for (he = 0; he < Z; he++) {
      const ce = y[he] = F ? Cr(y[he]) : hr(y[he]);
      g(
        b[he],
        ce,
        E,
        null,
        $,
        L,
        J,
        O,
        F
      );
    }
    x > R ? ne(
      b,
      $,
      L,
      !0,
      !1,
      Z
    ) : W(
      y,
      E,
      v,
      $,
      L,
      J,
      O,
      F,
      Z
    );
  }, T = (b, y, E, v, $, L, J, O, F) => {
    let x = 0;
    const R = y.length;
    let Z = b.length - 1, he = R - 1;
    for (; x <= Z && x <= he; ) {
      const ce = b[x], be = y[x] = F ? Cr(y[x]) : hr(y[x]);
      if (Eo(ce, be))
        g(
          ce,
          be,
          E,
          null,
          $,
          L,
          J,
          O,
          F
        );
      else
        break;
      x++;
    }
    for (; x <= Z && x <= he; ) {
      const ce = b[Z], be = y[he] = F ? Cr(y[he]) : hr(y[he]);
      if (Eo(ce, be))
        g(
          ce,
          be,
          E,
          null,
          $,
          L,
          J,
          O,
          F
        );
      else
        break;
      Z--, he--;
    }
    if (x > Z) {
      if (x <= he) {
        const ce = he + 1, be = ce < R ? y[ce].el : v;
        for (; x <= he; )
          g(
            null,
            y[x] = F ? Cr(y[x]) : hr(y[x]),
            E,
            be,
            $,
            L,
            J,
            O,
            F
          ), x++;
      }
    } else if (x > he)
      for (; x <= Z; )
        fe(b[x], $, L, !0), x++;
    else {
      const ce = x, be = x, Se = /* @__PURE__ */ new Map();
      for (x = be; x <= he; x++) {
        const P = y[x] = F ? Cr(y[x]) : hr(y[x]);
        P.key != null && Se.set(P.key, x);
      }
      let ye, Q = 0;
      const me = he - be + 1;
      let B = !1, p = 0;
      const N = new Array(me);
      for (x = 0; x < me; x++) N[x] = 0;
      for (x = ce; x <= Z; x++) {
        const P = b[x];
        if (Q >= me) {
          fe(P, $, L, !0);
          continue;
        }
        let U;
        if (P.key != null)
          U = Se.get(P.key);
        else
          for (ye = be; ye <= he; ye++)
            if (N[ye - be] === 0 && Eo(P, y[ye])) {
              U = ye;
              break;
            }
        U === void 0 ? fe(P, $, L, !0) : (N[U - be] = x + 1, U >= p ? p = U : B = !0, g(
          P,
          y[U],
          E,
          null,
          $,
          L,
          J,
          O,
          F
        ), Q++);
      }
      const S = B ? ib(N) : eo;
      for (ye = S.length - 1, x = me - 1; x >= 0; x--) {
        const P = be + x, U = y[P], ge = y[P + 1], D = P + 1 < R ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ge.el || Th(ge)
        ) : v;
        N[x] === 0 ? g(
          null,
          U,
          E,
          D,
          $,
          L,
          J,
          O,
          F
        ) : B && (ye < 0 || x !== S[ye] ? K(U, E, D, 2) : ye--);
      }
    }
  }, K = (b, y, E, v, $ = null) => {
    const { el: L, type: J, transition: O, children: F, shapeFlag: x } = b;
    if (x & 6) {
      K(b.component.subTree, y, E, v);
      return;
    }
    if (x & 128) {
      b.suspense.move(y, E, v);
      return;
    }
    if (x & 64) {
      J.move(b, y, E, C);
      return;
    }
    if (J === Qe) {
      n(L, y, E);
      for (let Z = 0; Z < F.length; Z++)
        K(F[Z], y, E, v);
      n(b.anchor, y, E);
      return;
    }
    if (J === tc) {
      V(b, y, E);
      return;
    }
    if (v !== 2 && x & 1 && O)
      if (v === 0)
        O.beforeEnter(L), n(L, y, E), On(() => O.enter(L), $);
      else {
        const { leave: Z, delayLeave: he, afterLeave: ce } = O, be = () => {
          b.ctx.isUnmounted ? i(L) : n(L, y, E);
        }, Se = () => {
          L._isLeaving && L[Sy](
            !0
            /* cancelled */
          ), Z(L, () => {
            be(), ce && ce();
          });
        };
        he ? he(L, be, Se) : Se();
      }
    else
      n(L, y, E);
  }, fe = (b, y, E, v = !1, $ = !1) => {
    const {
      type: L,
      props: J,
      ref: O,
      children: F,
      dynamicChildren: x,
      shapeFlag: R,
      patchFlag: Z,
      dirs: he,
      cacheIndex: ce,
      memo: be
    } = b;
    if (Z === -2 && ($ = !1), O != null && (zr(), Jo(O, null, E, b, !0), jr()), ce != null && (y.renderCache[ce] = void 0), R & 256) {
      y.ctx.deactivate(b);
      return;
    }
    const Se = R & 1 && he, ye = !Zo(b);
    let Q;
    if (ye && (Q = J && J.onVnodeBeforeUnmount) && ur(Q, y, b), R & 6)
      k(b.component, E, v);
    else {
      if (R & 128) {
        b.suspense.unmount(E, v);
        return;
      }
      Se && pi(b, null, y, "beforeUnmount"), R & 64 ? b.type.remove(
        b,
        y,
        E,
        C,
        v
      ) : x && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !x.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (L !== Qe || Z > 0 && Z & 64) ? ne(
        x,
        y,
        E,
        !1,
        !0
      ) : (L === Qe && Z & 384 || !$ && R & 16) && ne(F, y, E), v && se(b);
    }
    const me = be != null && ce == null;
    (ye && (Q = J && J.onVnodeUnmounted) || Se || me) && On(() => {
      Q && ur(Q, y, b), Se && pi(b, null, y, "unmounted"), me && (b.el = null);
    }, E);
  }, se = (b) => {
    const { type: y, el: E, anchor: v, transition: $ } = b;
    if (y === Qe) {
      Y(E, v);
      return;
    }
    if (y === tc) {
      te(b);
      return;
    }
    const L = () => {
      i(E), $ && !$.persisted && $.afterLeave && $.afterLeave();
    };
    if (b.shapeFlag & 1 && $ && !$.persisted) {
      const { leave: J, delayLeave: O } = $, F = () => J(E, L);
      O ? O(b.el, L, F) : F();
    } else
      L();
  }, Y = (b, y) => {
    let E;
    for (; b !== y; )
      E = f(b), i(b), b = E;
    i(y);
  }, k = (b, y, E) => {
    const { bum: v, scope: $, job: L, subTree: J, um: O, m: F, a: x } = b;
    sf(F), sf(x), v && ha(v), $.stop(), L && (L.flags |= 8, fe(J, b, y, E)), O && On(O, y), On(() => {
      b.isUnmounted = !0;
    }, y);
  }, ne = (b, y, E, v = !1, $ = !1, L = 0) => {
    for (let J = L; J < b.length; J++)
      fe(b[J], y, E, v, $);
  }, ue = (b) => {
    if (b.shapeFlag & 6)
      return ue(b.component.subTree);
    if (b.shapeFlag & 128)
      return b.suspense.next();
    const y = f(b.anchor || b.el), E = y && y[by];
    return E ? f(E) : y;
  };
  let _e = !1;
  const we = (b, y, E) => {
    let v;
    b == null ? y._vnode && (fe(y._vnode, null, null, !0), v = y._vnode.component) : g(
      y._vnode || null,
      b,
      y,
      null,
      null,
      null,
      E
    ), y._vnode = b, _e || (_e = !0, Yd(v), lh(), _e = !1);
  }, C = {
    p: g,
    um: fe,
    m: K,
    r: se,
    mt: ve,
    mc: W,
    pc: M,
    pbc: pe,
    n: ue,
    o: e
  };
  return {
    render: we,
    hydrate: void 0,
    createApp: jy(we)
  };
}
function ec({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function hi({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function rb(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Oh(e, t, r = !1) {
  const n = e.children, i = t.children;
  if (it(n) && it(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o];
      let a = i[o];
      a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[o] = Cr(i[o]), a.el = s.el), !r && a.patchFlag !== -2 && Oh(s, a)), a.type === Al && (a.patchFlag === -1 && (a = i[o] = Cr(a)), a.el = s.el), a.type === ni && !a.el && (a.el = s.el);
    }
}
function ib(e) {
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
function Fh(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fh(t);
}
function sf(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function Th(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? Th(t.subTree) : null;
}
const Dh = (e) => e.__isSuspense;
function ob(e, t) {
  t && t.pendingBranch ? it(e) ? t.effects.push(...e) : t.effects.push(e) : py(e);
}
const Qe = /* @__PURE__ */ Symbol.for("v-fgt"), Al = /* @__PURE__ */ Symbol.for("v-txt"), ni = /* @__PURE__ */ Symbol.for("v-cmt"), tc = /* @__PURE__ */ Symbol.for("v-stc"), es = [];
let jn = null;
function Te(e = !1) {
  es.push(jn = e ? null : []);
}
function sb() {
  es.pop(), jn = es[es.length - 1] || null;
}
let ls = 1;
function af(e, t = !1) {
  ls += e, e < 0 && jn && t && (jn.hasOnce = !0);
}
function Lh(e) {
  return e.dynamicChildren = ls > 0 ? jn || eo : null, sb(), ls > 0 && jn && jn.push(e), e;
}
function De(e, t, r, n, i, o) {
  return Lh(
    Me(
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
  return Lh(
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
function Rh(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Eo(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Vh = ({ key: e }) => e ?? null, ga = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? Jt(e) || /* @__PURE__ */ mn(e) || at(e) ? { i: zn, r: e, k: t, f: !!r } : e : null);
function Me(e, t = null, r = null, n = 0, i = null, o = e === Qe ? 0 : 1, s = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Vh(t),
    ref: t && ga(t),
    scopeId: uh,
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
  return a ? (Yu(l, r), o & 128 && e.normalize(l)) : r && (l.shapeFlag |= Jt(r) ? 8 : 16), ls > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  jn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && jn.push(l), l;
}
const Be = ab;
function ab(e, t = null, r = null, n = 0, i = null, o = !1) {
  if ((!e || e === bh) && (e = ni), Rh(e)) {
    const a = co(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Yu(a, r), ls > 0 && !o && jn && (a.shapeFlag & 6 ? jn[jn.indexOf(e)] = a : jn.push(a)), a.patchFlag = -2, a;
  }
  if (bb(e) && (e = e.__vccOpts), t) {
    t = lb(t);
    let { class: a, style: l } = t;
    a && !Jt(a) && (t.class = gt(a)), Et(l) && (/* @__PURE__ */ Gu(l) && !it(l) && (l = gn({}, l)), t.style = It(l));
  }
  const s = Jt(e) ? 1 : Dh(e) ? 128 : vy(e) ? 64 : Et(e) ? 4 : at(e) ? 2 : 0;
  return Me(
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
function lb(e) {
  return e ? /* @__PURE__ */ Gu(e) || Ph(e) ? gn({}, e) : e : null;
}
function co(e, t, r = !1, n = !1) {
  const { props: i, ref: o, patchFlag: s, children: a, transition: l } = e, c = t ? Ir(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Vh(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && o ? it(o) ? o.concat(ga(t)) : [o, ga(t)] : ga(t)
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
    patchFlag: t && e.type !== Qe ? s === -1 ? 16 : s | 16 : s,
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
    ssContent: e.ssContent && co(e.ssContent),
    ssFallback: e.ssFallback && co(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return l && n && Wu(
    d,
    l.clone(d)
  ), d;
}
function $o(e = " ", t = 0) {
  return Be(Al, null, e, t);
}
function mt(e = "", t = !1) {
  return t ? (Te(), Gn(ni, null, e)) : Be(ni, null, e);
}
function hr(e) {
  return e == null || typeof e == "boolean" ? Be(ni) : it(e) ? Be(
    Qe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Rh(e) ? Cr(e) : Be(Al, null, String(e));
}
function Cr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : co(e);
}
function Yu(e, t) {
  let r = 0;
  const { shapeFlag: n } = e;
  if (t == null)
    t = null;
  else if (it(t))
    r = 16;
  else if (typeof t == "object")
    if (n & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Yu(e, i()), i._c && (i._d = !0));
      return;
    } else {
      r = 32;
      const i = t._;
      !i && !Ph(t) ? t._ctx = zn : i === 3 && zn && (zn.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else at(t) ? (t = { default: t, _ctx: zn }, r = 32) : (t = String(t), n & 64 ? (r = 16, t = [$o(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Ir(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const n = e[r];
    for (const i in n)
      if (i === "class")
        t.class !== n.class && (t.class = gt([t.class, n.class]));
      else if (i === "style")
        t.style = It([t.style, n.style]);
      else if (yl(i)) {
        const o = t[i], s = n[i];
        s && o !== s && !(it(o) && o.includes(s)) ? t[i] = o ? [].concat(o, s) : s : s == null && o == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !bl(i) && (t[i] = s);
      } else i !== "" && (t[i] = n[i]);
  }
  return t;
}
function ur(e, t, r, n = null) {
  xr(e, t, 7, [
    r,
    n
  ]);
}
const cb = _h();
let ub = 0;
function db(e, t, r) {
  const n = e.type, i = (t ? t.appContext : e.appContext) || cb, o = {
    uid: ub++,
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
    scope: new R0(
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
    propsOptions: Ah(n, i),
    emitsOptions: wh(n, i),
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
  return o.ctx = { _: o }, o.root = t ? t.root : o, o.emit = Gy.bind(null, o), e.ce && e.ce(o), o;
}
let fn = null;
const fb = () => fn || zn;
let za, Uc;
{
  const e = _l(), t = (r, n) => {
    let i;
    return (i = e[r]) || (i = e[r] = []), i.push(n), (o) => {
      i.length > 1 ? i.forEach((s) => s(o)) : i[0](o);
    };
  };
  za = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => fn = r
  ), Uc = t(
    "__VUE_SSR_SETTERS__",
    (r) => cs = r
  );
}
const Ms = (e) => {
  const t = fn;
  return za(e), e.scope.on(), () => {
    e.scope.off(), za(t);
  };
}, lf = () => {
  fn && fn.scope.off(), za(null);
};
function $h(e) {
  return e.vnode.shapeFlag & 4;
}
let cs = !1;
function pb(e, t = !1, r = !1) {
  t && Uc(t);
  const { props: n, children: i } = e.vnode, o = $h(e);
  qy(e, n, o, t), Qy(e, i, r || t);
  const s = o ? hb(e, t) : void 0;
  return t && Uc(!1), s;
}
function hb(e, t) {
  const r = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ty);
  const { setup: n } = r;
  if (n) {
    zr();
    const i = e.setupContext = n.length > 1 ? gb(e) : null, o = Ms(e), s = xs(
      n,
      e,
      0,
      [
        e.props,
        i
      ]
    ), a = Rp(s);
    if (jr(), o(), (a || e.sp) && !Zo(e) && hh(e), a) {
      if (s.then(lf, lf), t)
        return s.then((l) => {
          cf(e, l);
        }).catch((l) => {
          xl(l, e, 0);
        });
      e.asyncDep = s;
    } else
      cf(e, s);
  } else
    zh(e);
}
function cf(e, t, r) {
  at(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : Et(t) && (e.setupState = oh(t)), zh(e);
}
function zh(e, t, r) {
  const n = e.type;
  e.render || (e.render = n.render || vr);
  {
    const i = Ms(e);
    zr();
    try {
      Dy(e);
    } finally {
      jr(), i();
    }
  }
}
const mb = {
  get(e, t) {
    return dn(e, "get", ""), e[t];
  }
};
function gb(e) {
  const t = (r) => {
    e.exposed = r || {};
  };
  return {
    attrs: new Proxy(e.attrs, mb),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function Cl(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(oh(iy(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Qo)
        return Qo[r](e);
    },
    has(t, r) {
      return r in t || r in Qo;
    }
  })) : e.proxy;
}
function yb(e, t = !0) {
  return at(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function bb(e) {
  return at(e) && "__vccOpts" in e;
}
const dt = (e, t) => /* @__PURE__ */ ly(e, t, cs), vb = "3.5.32";
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Bc;
const uf = typeof window < "u" && window.trustedTypes;
if (uf)
  try {
    Bc = /* @__PURE__ */ uf.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const jh = Bc ? (e) => Bc.createHTML(e) : (e) => e, Sb = "http://www.w3.org/2000/svg", _b = "http://www.w3.org/1998/Math/MathML", Ar = typeof document < "u" ? document : null, df = Ar && /* @__PURE__ */ Ar.createElement("template"), wb = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, n) => {
    const i = t === "svg" ? Ar.createElementNS(Sb, e) : t === "mathml" ? Ar.createElementNS(_b, e) : r ? Ar.createElement(e, { is: r }) : Ar.createElement(e);
    return e === "select" && n && n.multiple != null && i.setAttribute("multiple", n.multiple), i;
  },
  createText: (e) => Ar.createTextNode(e),
  createComment: (e) => Ar.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ar.querySelector(e),
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
      df.innerHTML = jh(
        n === "svg" ? `<svg>${e}</svg>` : n === "mathml" ? `<math>${e}</math>` : e
      );
      const a = df.content;
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
}, xb = /* @__PURE__ */ Symbol("_vtc");
function kb(e, t, r) {
  const n = e[xb];
  n && (t = (t ? [t, ...n] : [...n]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const ja = /* @__PURE__ */ Symbol("_vod"), Hh = /* @__PURE__ */ Symbol("_vsh"), Ci = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: r }) {
    e[ja] = e.style.display === "none" ? "" : e.style.display, r && t ? r.beforeEnter(e) : Oo(e, t);
  },
  mounted(e, { value: t }, { transition: r }) {
    r && t && r.enter(e);
  },
  updated(e, { value: t, oldValue: r }, { transition: n }) {
    !t != !r && (n ? t ? (n.beforeEnter(e), Oo(e, !0), n.enter(e)) : n.leave(e, () => {
      Oo(e, !1);
    }) : Oo(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Oo(e, t);
  }
};
function Oo(e, t) {
  e.style.display = t ? e[ja] : "none", e[Hh] = !t;
}
const Mb = /* @__PURE__ */ Symbol(""), Pb = /(?:^|;)\s*display\s*:/;
function Nb(e, t, r) {
  const n = e.style, i = Jt(r);
  let o = !1;
  if (r && !i) {
    if (t)
      if (Jt(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          r[a] == null && ya(n, a, "");
        }
      else
        for (const s in t)
          r[s] == null && ya(n, s, "");
    for (const s in r)
      s === "display" && (o = !0), ya(n, s, r[s]);
  } else if (i) {
    if (t !== r) {
      const s = n[Mb];
      s && (r += ";" + s), n.cssText = r, o = Pb.test(r);
    }
  } else t && e.removeAttribute("style");
  ja in e && (e[ja] = o ? n.display : "", e[Hh] && (n.display = "none"));
}
const ff = /\s*!important$/;
function ya(e, t, r) {
  if (it(r))
    r.forEach((n) => ya(e, t, n));
  else if (r == null && (r = ""), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const n = Ab(e, t);
    ff.test(r) ? e.setProperty(
      Fi(n),
      r.replace(ff, ""),
      "important"
    ) : e[n] = r;
  }
}
const pf = ["Webkit", "Moz", "ms"], nc = {};
function Ab(e, t) {
  const r = nc[t];
  if (r)
    return r;
  let n = xn(t);
  if (n !== "filter" && n in e)
    return nc[t] = n;
  n = Sl(n);
  for (let i = 0; i < pf.length; i++) {
    const o = pf[i] + n;
    if (o in e)
      return nc[t] = o;
  }
  return t;
}
const hf = "http://www.w3.org/1999/xlink";
function mf(e, t, r, n, i, o = D0(t)) {
  n && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(hf, t.slice(6, t.length)) : e.setAttributeNS(hf, t, r) : r == null || o && !jp(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : wr(r) ? String(r) : r
  );
}
function gf(e, t, r, n, i) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? jh(r) : r);
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
    a === "boolean" ? r = jp(r) : r == null && a === "string" ? (r = "", s = !0) : a === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function Ui(e, t, r, n) {
  e.addEventListener(t, r, n);
}
function Cb(e, t, r, n) {
  e.removeEventListener(t, r, n);
}
const yf = /* @__PURE__ */ Symbol("_vei");
function Ib(e, t, r, n, i = null) {
  const o = e[yf] || (e[yf] = {}), s = o[t];
  if (n && s)
    s.value = n;
  else {
    const [a, l] = Eb(t);
    if (n) {
      const c = o[t] = Tb(
        n,
        i
      );
      Ui(e, a, c, l);
    } else s && (Cb(e, a, s, l), o[t] = void 0);
  }
}
const bf = /(?:Once|Passive|Capture)$/;
function Eb(e) {
  let t;
  if (bf.test(e)) {
    t = {};
    let n;
    for (; n = e.match(bf); )
      e = e.slice(0, e.length - n[0].length), t[n[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Fi(e.slice(2)), t];
}
let rc = 0;
const Ob = /* @__PURE__ */ Promise.resolve(), Fb = () => rc || (Ob.then(() => rc = 0), rc = Date.now());
function Tb(e, t) {
  const r = (n) => {
    if (!n._vts)
      n._vts = Date.now();
    else if (n._vts <= r.attached)
      return;
    xr(
      Db(n, r.value),
      t,
      5,
      [n]
    );
  };
  return r.value = e, r.attached = Fb(), r;
}
function Db(e, t) {
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
const vf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Lb = (e, t, r, n, i, o) => {
  const s = i === "svg";
  t === "class" ? kb(e, n, s) : t === "style" ? Nb(e, r, n) : yl(t) ? bl(t) || Ib(e, t, r, n, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Rb(e, t, n, s)) ? (gf(e, t, n), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && mf(e, t, n, s, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Vb(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Jt(n))) ? gf(e, xn(t), n, o, t) : (t === "true-value" ? e._trueValue = n : t === "false-value" && (e._falseValue = n), mf(e, t, n, s));
};
function Rb(e, t, r, n) {
  if (n)
    return !!(t === "innerHTML" || t === "textContent" || t in e && vf(t) && at(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return vf(t) && Jt(r) ? !1 : t in e;
}
function Vb(e, t) {
  const r = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!r)
    return !1;
  const n = xn(t);
  return Array.isArray(r) ? r.some((i) => xn(i) === n) : Object.keys(r).some((i) => xn(i) === n);
}
const Sf = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return it(t) ? (r) => ha(t, r) : t;
};
function $b(e) {
  e.target.composing = !0;
}
function _f(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ic = /* @__PURE__ */ Symbol("_assign");
function wf(e, t, r) {
  return t && (e = e.trim()), r && (e = Du(e)), e;
}
const xf = {
  created(e, { modifiers: { lazy: t, trim: r, number: n } }, i) {
    e[ic] = Sf(i);
    const o = n || i.props && i.props.type === "number";
    Ui(e, t ? "change" : "input", (s) => {
      s.target.composing || e[ic](wf(e.value, r, o));
    }), (r || o) && Ui(e, "change", () => {
      e.value = wf(e.value, r, o);
    }), t || (Ui(e, "compositionstart", $b), Ui(e, "compositionend", _f), Ui(e, "change", _f));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: n, trim: i, number: o } }, s) {
    if (e[ic] = Sf(s), e.composing) return;
    const a = (o || e.type === "number") && !/^0\d/.test(e.value) ? Du(e.value) : e.value, l = t ?? "";
    if (a === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (n && t === r || i && e.value.trim() === l) || (e.value = l);
  }
}, zb = ["ctrl", "shift", "alt", "meta"], jb = {
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
  exact: (e, t) => zb.some((r) => e[`${r}Key`] && !t.includes(r))
}, At = (e, t) => {
  if (!e) return e;
  const r = e._withMods || (e._withMods = {}), n = t.join(".");
  return r[n] || (r[n] = ((i, ...o) => {
    for (let s = 0; s < t.length; s++) {
      const a = jb[t[s]];
      if (a && a(i, t)) return;
    }
    return e(i, ...o);
  }));
}, Hb = /* @__PURE__ */ gn({ patchProp: Lb }, wb);
let kf;
function Gb() {
  return kf || (kf = tb(Hb));
}
const qu = ((...e) => {
  const t = Gb().createApp(...e), { mount: r } = t;
  return t.mount = (n) => {
    const i = Wb(n);
    if (!i) return;
    const o = t._component;
    !at(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = r(i, !1, Kb(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Kb(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Wb(e) {
  return Jt(e) ? document.querySelector(e) : e;
}
const Ub = "PanoramaSuite.Debug.Diagnostics", Bb = "PanoramaSuite.Debug.ExportDiagnostics", oc = "pano_suite.diagnostics.v1", Mf = "pano_suite.diagnostics.previous.v1", Yb = 300, qb = 2e5, Xb = 100, Jb = 20, Zb = 1e3, Qb = 2, Qs = 1024 * 1024;
function Xr(e, t = 2) {
  const r = 10 ** t;
  return Math.round(e * r) / r;
}
function e1() {
  try {
    return globalThis.localStorage ?? null;
  } catch {
    return null;
  }
}
function t1() {
  return {
    now: () => {
      var e, t;
      return ((t = (e = globalThis.performance) == null ? void 0 : e.now) == null ? void 0 : t.call(e)) ?? Date.now();
    },
    clock: () => Date.now(),
    storage: e1,
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
function n1(e = {}) {
  const t = { ...t1(), ...e };
  let r = !1, n = !1, i = null, o = null, s = 0, a = null, l = 0, c = 0;
  const d = /* @__PURE__ */ new Set(), u = /* @__PURE__ */ new Set(), f = { created: 0, released: 0, collected: 0 }, h = { created: 0, collected: 0 }, w = t.FinalizationRegistry ? new t.FinalizationRegistry((C) => {
    d.delete(C), f.collected += 1;
  }) : null, g = t.FinalizationRegistry ? new t.FinalizationRegistry((C) => {
    u.delete(C), h.collected += 1;
  }) : null, m = /* @__PURE__ */ new Set(), _ = { created: 0, lost: 0, restored: 0, disposed: 0 }, ee = [], V = /* @__PURE__ */ new Map();
  let te = { count: 0, maxMs: 0 }, I = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 };
  const j = [];
  function W(C, le, b = void 0) {
    ee.push(b === void 0 ? { t: t.clock(), type: C, label: le } : { t: t.clock(), type: C, label: le, detail: b }), ee.length > Xb && ee.shift();
  }
  function ie(C, le, b, y, E) {
    if (!r || !y || !t.WeakRef) return y;
    const v = { ref: new t.WeakRef(y), label: E };
    return C.add(v), le == null || le.register(y, v), b.created += 1, y;
  }
  function pe(C, le = "") {
    return ie(d, w, f, C, le);
  }
  function q(C, le = "") {
    return ie(u, g, h, C, le);
  }
  function de({ label: C = "", width: le, height: b, offscreen: y = !1 } = {}) {
    const E = globalThis.OffscreenCanvas;
    let v;
    return y && typeof E < "u" ? v = new E(le, b) : (v = t.document().createElement("canvas"), le !== void 0 && b !== void 0 && (v.width = le, v.height = b)), pe(v, C);
  }
  function ae(C) {
    C.width = 0, C.height = 0, r && (f.released += 1);
  }
  function ve(C = t.document(), le = "") {
    var b;
    return q(((b = C == null ? void 0 : C.createElement) == null ? void 0 : b.call(C, "video")) || null, le);
  }
  function G(C, le) {
    if (!r || !C) return () => {
    };
    const b = { label: le, lost: !1, disposed: !1 };
    m.add(b), _.created += 1, W("webgl-created", le);
    const y = () => {
      b.disposed || (b.lost = !0, _.lost += 1, W("webglcontextlost", le));
    }, E = () => {
      b.disposed || (b.lost = !1, _.restored += 1, W("webglcontextrestored", le));
    };
    return C.addEventListener("webglcontextlost", y), C.addEventListener("webglcontextrestored", E), () => {
      b.disposed || (b.disposed = !0, m.delete(b), _.disposed += 1, W("webgl-disposed", le));
    };
  }
  function A(C, le) {
    return V.set(C, le), () => {
      V.get(C) === le && V.delete(C);
    };
  }
  function z() {
    return r ? t.now() : -1;
  }
  function M(C) {
    if (C < 0 || !r) return;
    const le = t.now() - C;
    te.count += 1, te.maxMs = Math.max(te.maxMs, le);
  }
  function H(C, le) {
    if (le < 0 || !r) return;
    const b = t.now() - le, y = I.get(C) ?? { count: 0, maxMs: 0 };
    y.count += 1, y.maxMs = Math.max(y.maxMs, b), I.set(C, y);
  }
  function T() {
    let C = 0, le = 0, b = 0, y = [0, 0];
    const E = {};
    for (const v of d) {
      const $ = v.ref.deref();
      if (!$) continue;
      C += 1;
      const L = $.width * $.height;
      L > 0 && (le += 1), b += L, L > y[0] * y[1] && (y = [$.width, $.height]);
      const J = E[v.label] ?? (E[v.label] = [0, 0]);
      J[0] += 1, J[1] += L;
    }
    return { ...f, alive: C, sized: le, pixels: b, mb: Xr(b * 4 / Qs, 1), largest: y, byLabel: E };
  }
  function K() {
    const C = [];
    let le = 0, b = 0;
    for (const y of u) {
      const E = y.ref.deref();
      if (!E) continue;
      le += 1;
      const v = !E.paused && !E.ended;
      v && (b += 1), C.length < Jb && C.push({
        label: y.label,
        playing: v,
        src: !!(E.currentSrc || E.src),
        size: [E.videoWidth || 0, E.videoHeight || 0],
        ready: E.readyState ?? 0,
        connected: !!E.isConnected
      });
    }
    return { ...h, alive: le, playing: b, list: C };
  }
  function fe() {
    const C = t.now(), le = t.memory(), b = {
      t: t.clock(),
      heap: le ? { used: Xr(le.usedJSHeapSize / Qs, 1), total: Xr(le.totalJSHeapSize / Qs, 1), limit: Xr(le.jsHeapSizeLimit / Qs, 1) } : null,
      canvas: T(),
      webgl: { ..._, alive: [...m].filter((y) => !y.lost).length },
      video: K(),
      frame: { count: te.count, maxMs: Xr(te.maxMs), longTasks: X.count, longTaskMaxMs: Xr(X.maxMs) },
      renders: Object.fromEntries([...I].map(([y, E]) => [y, { count: E.count, maxMs: Xr(E.maxMs) }])),
      sources: Object.fromEntries([...V].map(([y, E]) => [y, E()])),
      costMs: Xr(c, 3)
    };
    return te = { count: 0, maxMs: 0 }, I = /* @__PURE__ */ new Map(), X = { count: 0, maxMs: 0 }, j.push({ record: b, text: JSON.stringify(b) }), j.length > Yb && j.shift(), l += 1, l % Qb === 0 && Y(), c = t.now() - C, b;
  }
  function se(C = qb) {
    const le = JSON.stringify({ ...o, events: ee }).slice(0, -1);
    let b = C - le.length - 14, y = j.length;
    for (; y > 0 && b - j[y - 1].text.length - 1 >= 0; )
      y -= 1, b -= j[y].text.length + 1;
    return `${le},"records":[${j.slice(y).map((E) => E.text).join(",")}]}`;
  }
  function Y() {
    if (!o) return;
    const C = t.storage();
    if (C) {
      o.savedAt = t.clock();
      try {
        C.setItem(oc, se());
      } catch {
      }
    }
  }
  function k() {
    o.closed = !0, o.closedAt = t.clock(), o.closedBy = "unload", Y();
  }
  function ne() {
    var E;
    if (n) return i;
    n = !0;
    const C = t.storage();
    if (!C) return null;
    let le = null;
    try {
      if (le = C.getItem(oc), le === null) {
        const v = C.getItem(Mf);
        return i = v === null ? null : JSON.parse(v), i;
      }
      C.setItem(Mf, le), C.removeItem(oc), i = JSON.parse(le);
    } catch {
      return i;
    }
    const b = Array.isArray(i == null ? void 0 : i.records) ? i.records : [], y = b.slice(-5);
    return i != null && i.closed ? t.console.info(
      `[PanoramaStickers] Diagnostics: the previous session closed normally (${i.closedBy || "unload"}); ${b.length} records kept. Its last records:`,
      JSON.stringify(y)
    ) : t.console.warn(
      `[PanoramaStickers] Diagnostics: the previous session did NOT close normally (the tab crashed or was killed). Started ${new Date((i == null ? void 0 : i.startedAt) || 0).toISOString()}, last saved ${new Date((i == null ? void 0 : i.savedAt) || ((E = b.at(-1)) == null ? void 0 : E.t) || 0).toISOString()}; ${b.length} records kept. Its last records (export the full JSON with "Export Panorama Suite diagnostics"):`,
      JSON.stringify(y)
    ), i;
  }
  function ue(C) {
    const le = C === !0;
    if (ne(), le !== r) {
      if (r = le, r) {
        o = {
          v: 1,
          session: `${t.clock().toString(36)}-${Math.random().toString(36).slice(2, 8)}`,
          startedAt: t.clock(),
          userAgent: t.userAgent(),
          closed: !1
        }, l = 0, j.length = 0, a = t.observeLongTasks((b) => {
          for (const y of b)
            X.count += 1, X.maxMs = Math.max(X.maxMs, y.duration);
        }), t.addUnload(k), s = t.setInterval(fe, Zb), Y();
        return;
      }
      t.clearInterval(s), s = 0, a == null || a(), a = null, t.removeUnload(k), o.closed = !0, o.closedAt = t.clock(), o.closedBy = "disabled", Y();
    }
  }
  function _e() {
    return {
      exportedAt: t.clock(),
      enabled: r,
      current: o ? { ...o, events: [...ee], records: j.map((C) => C.record) } : null,
      previous: i
    };
  }
  function we() {
    const C = t.document(), le = new Blob([JSON.stringify(_e(), null, 1)], { type: "application/json" }), b = URL.createObjectURL(le), y = C.createElement("a");
    y.href = b, y.download = `panorama-suite-diagnostics-${new Date(t.clock()).toISOString().replace(/[:.]/g, "-")}.json`, y.click(), setTimeout(() => URL.revokeObjectURL(b), 0);
  }
  return {
    get enabled() {
      return r;
    },
    createCanvas: de,
    releaseCanvas: ae,
    trackCanvas: pe,
    createVideo: ve,
    trackVideo: q,
    watchContext: G,
    addSource: A,
    frameStart: z,
    frameEnd: M,
    renderEnd: H,
    sample: fe,
    serialize: se,
    recoverPrevious: ne,
    setEnabled: ue,
    exportData: _e,
    download: we
  };
}
const Ln = n1(), rn = Ln.createCanvas, us = Ln.releaseCanvas, sc = Ln.trackCanvas, Ps = Ln.createVideo, Pf = Ln.trackVideo, r1 = Ln.addSource, i1 = Ln.frameStart, o1 = Ln.frameEnd;
function Gh(e, t) {
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
const s1 = {
  id: Ub,
  category: ["Panorama Suite", "Debug", "Diagnostics"],
  name: "Diagnostics",
  tooltip: "For tracking down crashes: records memory, canvases, WebGL contexts and frame times once a second to localStorage. Reload the page after turning it on. See docs/diagnostics.md.",
  type: "boolean",
  defaultValue: !1,
  onChange: (e) => Ln.setEnabled(e === !0)
}, Nf = {
  id: Bb,
  label: "Export Panorama Suite diagnostics",
  function: () => Ln.download()
};
function Bi(e, t) {
  const r = rn({ label: "paint.surface" });
  r.width = Math.max(1, Math.round(e)), r.height = Math.max(1, Math.round(t));
  const n = r.getContext("2d");
  return n && (n.clearRect(0, 0, r.width, r.height), n.imageSmoothingEnabled = !0), { canvas: r, ctx: n };
}
function a1() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PAINT_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPaintDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Af(e, t = 8) {
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
function Xu(e, t) {
  return rn({
    label: "paint.scratch",
    width: Math.max(1, Math.ceil(e)),
    height: Math.max(1, Math.ceil(t)),
    offscreen: !0
  });
}
function Qr(e, t, r) {
  if (!e) return Bi(t, r);
  const n = Math.max(1, Math.round(t)), i = Math.max(1, Math.round(r));
  return (e.canvas.width !== n || e.canvas.height !== i) && (e.canvas.width = n, e.canvas.height = i, e.ctx.imageSmoothingEnabled = !0), e;
}
function Bt(e) {
  e != null && e.ctx && e.ctx.clearRect(0, 0, e.canvas.width, e.canvas.height);
}
function cn(e) {
  e.displayDirty = !0, e.revision += 1;
}
let ac = null, lc = null, Cf = null, If = null, Ut = null, Fo = null;
function l1() {
  if (lc) return lc;
  const e = 6, t = 17, r = rn({ label: "paint.hatch" });
  r.width = t, r.height = t;
  const n = r.getContext("2d");
  return n.fillStyle = "rgba(0, 0, 0, 0.25)", n.fillRect(0, 0, t, t), n.strokeStyle = "rgba(0, 0, 0, 0.5)", n.lineWidth = e, n.lineCap = "square", n.beginPath(), n.moveTo(0, 0), n.lineTo(t, t), n.moveTo(-t / 2, t / 2), n.lineTo(t / 2, t + t / 2), n.moveTo(t / 2, -t / 2), n.lineTo(t + t / 2, t / 2), n.stroke(), lc = r, r;
}
function cc(e, t) {
  if (!e || !t) return;
  const r = t.width, n = t.height;
  ac = Qr(ac, r, n);
  const i = ac;
  Bt(i), i.ctx.drawImage(t, 0, 0), i.ctx.globalCompositeOperation = "source-in", If !== i.ctx && (Cf = i.ctx.createPattern(l1(), "repeat"), If = i.ctx), i.ctx.fillStyle = Cf, i.ctx.fillRect(0, 0, r, n), i.ctx.globalCompositeOperation = "source-over", e.save(), e.globalCompositeOperation = "source-over", e.drawImage(i.canvas, 0, 0), e.restore();
}
function c1(e) {
  return !e || typeof e != "object" ? { x: 0, y: 0 } : { x: Number(e.u || 0), y: Number(e.v || 0) };
}
function u1(e) {
  const t = e == null ? void 0 : e.geometry;
  return t ? Array.isArray(t.rawPoints) && t.rawPoints.length ? t.rawPoints : Array.isArray(t.points) && t.points.length ? t.points : [] : [];
}
function d1(e, t) {
  const r = Number(e == null ? void 0 : e.radiusValue), n = String((e == null ? void 0 : e.radiusModel) || "").trim(), i = (t == null ? void 0 : t.width) || 1;
  return n === "erp_uv_norm" && r > 0 ? Math.max(0.5, r * i) : n === "degree_norm" && r > 0 ? Math.max(0.5, r * 90 / 360 * i) : Math.max(0.5, Number((e == null ? void 0 : e.baseSize) || (e == null ? void 0 : e.size) || 10) * 0.5);
}
function f1(e, t) {
  const r = Number(e == null ? void 0 : e.spacing);
  if (Number.isFinite(r) && r > 0) return Math.max(1, r * t * 2);
  const n = String((e == null ? void 0 : e.toolKind) || "pen");
  return Math.max(1, (n === "brush" || n === "eraser" ? 0.15 : 0.2) * t * 2);
}
const zt = /* @__PURE__ */ new Map(), Ju = 128;
function p1(e, t, r, n, i, o) {
  const s = Math.max(1, Math.round(e)), a = Math.max(0, Math.min(1, t)), l = `${s}:${a.toFixed(2)}:${r}:${n}:${i}:${o.toFixed(3)}`;
  if (zt.has(l)) {
    const ee = zt.get(l);
    return zt.delete(l), zt.set(l, ee), ee;
  }
  zt.size >= Ju && zt.delete(zt.keys().next().value);
  const c = s * 2 + 2, d = s + 1, u = Xu(c, c), f = u.getContext("2d"), h = a * s, w = s + 1, g = `rgba(${r},${n},${i},${o})`, m = `rgba(${r},${n},${i},0)`, _ = f.createRadialGradient(d, d, h, d, d, w);
  return _.addColorStop(0, g), _.addColorStop(1, m), f.fillStyle = _, f.fillRect(0, 0, c, c), zt.set(l, u), u;
}
function h1(e, t, r, n, i, o, s) {
  const { r: a, g: l, b: c, a: d } = n, u = Math.max(2, Math.ceil(e) * 2), f = Math.max(2, Math.ceil(t) * 2), h = Math.max(0, i), w = Math.max(0, Math.min(0.99, o)), g = Math.max(0, Math.min(1, s ?? 0)), m = `chisel:${u}:${f}:${r.toFixed(2)}:${a}:${l}:${c}:${d.toFixed(3)}:${h.toFixed(2)}:${w.toFixed(2)}:${g.toFixed(2)}`;
  if (zt.has(m)) {
    const W = zt.get(m);
    return zt.delete(m), zt.set(m, W), W;
  }
  zt.size >= Ju && zt.delete(zt.keys().next().value);
  const _ = Xu(u, f), ee = _.getContext("2d"), V = ee.createImageData(u, f), te = V.data, I = Math.max(0, e - t), X = Math.max(0, Math.min(1, r)), j = 1 + h;
  for (let W = 0; W < f; W++)
    for (let ie = 0; ie < u; ie++) {
      const pe = ie + 0.5 - e, q = W + 0.5 - t, de = Math.max(Math.abs(pe) - I, 0), ve = Math.hypot(de, q) / t;
      if (ve >= 1) continue;
      const G = ve <= X ? 1 : Math.max(0, (1 - ve) / Math.max(1e-4, 1 - X)), A = 1 - ve, z = 1 + h * (1 - A) * (1 - A), M = 1 - w * A * A, H = z * M / j;
      let T = 1;
      if (g > 0) {
        const se = Math.floor((q + t) / 1.5), Y = Math.floor((pe + e) / 8), k = Pi(io(se * 41 + 500, Y * 19 + 300));
        T = 1 - g * 0.42 * k;
      }
      const K = Math.round(255 * Math.min(1, d * G * H * T));
      if (K <= 0) continue;
      const fe = (W * u + ie) * 4;
      te[fe] = a, te[fe + 1] = l, te[fe + 2] = c, te[fe + 3] = K;
    }
  return ee.putImageData(V, 0, 0), zt.set(m, _), _;
}
function io(e, t) {
  const r = Math.trunc(Math.round(e * 4)), n = Math.trunc(Math.round(t * 4));
  let i = 2166136261;
  return i = Math.imul(i ^ r & 255, 16777619), i = Math.imul(i ^ r >> 8 & 255, 16777619), i = Math.imul(i ^ n & 255, 16777619), i = Math.imul(i ^ n >> 8 & 255, 16777619), i >>> 0;
}
function Pi(e) {
  let t = e + 1831565813 >>> 0;
  return t = Math.imul(t ^ t >>> 15, t | 1), t ^= t + Math.imul(t ^ t >>> 7, t | 61), ((t ^ t >>> 14) >>> 0) / 4294967296;
}
function m1(e, t, r, n, i, o, s) {
  const a = e + 0.5 - r, l = t + 0.5 - n, c = Math.max(0, r - n), d = Math.max(Math.abs(a) - c, 0), u = Math.hypot(d, l) / n;
  if (u >= 1) return 0;
  const f = Pi(io(e * 17 + 3, t * 13 + 7)), h = u + o * 0.22 * (f - 0.5);
  if (h >= 1) return 0;
  const w = h <= i ? 1 : Math.max(0, (1 - h) / Math.max(1e-4, 1 - i)), g = g1(e, t, a, l, r, n), m = o * 0.55;
  if (g < m) return 0;
  const ee = 0.45 + 0.55 * ((g - m) / Math.max(1e-4, 1 - m));
  return Math.round(255 * Math.min(1, s * w * ee));
}
function g1(e, t, r, n, i, o) {
  const s = Math.floor((r + i) / 3), a = Math.floor((n + o) / 2), l = Pi(io(s * 13 + 700, a * 17 + 400)), c = Math.floor((r + i) / 1.5), d = Math.floor((n + o) / 1.5), u = Pi(io(c * 23 + 800, d * 29 + 500)), f = Pi(io(e * 3 + 100, t * 5 + 200));
  return l * 0.55 + u * 0.3 + f * 0.15;
}
function y1(e, t, r, n, i) {
  const { r: o, g: s, b: a, a: l } = n, c = Math.max(2, Math.ceil(e) * 2), d = Math.max(2, Math.ceil(t) * 2), u = Math.max(0, Math.min(1, i)), f = `crayon:${c}:${d}:${r.toFixed(2)}:${o}:${s}:${a}:${l.toFixed(3)}:${u.toFixed(2)}`;
  if (zt.has(f)) {
    const ee = zt.get(f);
    return zt.delete(f), zt.set(f, ee), ee;
  }
  zt.size >= Ju && zt.delete(zt.keys().next().value);
  const h = Xu(c, d), w = h.getContext("2d"), g = w.createImageData(c, d), m = g.data, _ = Math.max(0, Math.min(1, r));
  for (let ee = 0; ee < d; ee++)
    for (let V = 0; V < c; V++) {
      const te = m1(V, ee, e, t, _, u, l);
      if (te <= 0) continue;
      const I = (ee * c + V) * 4;
      m[I] = o, m[I + 1] = s, m[I + 2] = a, m[I + 3] = te;
    }
  return w.putImageData(g, 0, 0), zt.set(f, h), h;
}
function Kh(e, t, r) {
  var g, m;
  const n = String((t == null ? void 0 : t.stampKind) || "round"), i = d1(t, r), o = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.hardness) ?? 0.9))), s = b1(t), a = Math.max(0.1, Number((t == null ? void 0 : t.aspect) ?? 1)), l = Number(((g = t == null ? void 0 : t.angle) == null ? void 0 : g.value) ?? 0), c = f1(t, i), d = String(((m = t == null ? void 0 : t.targetSpace) == null ? void 0 : m.viewMode) || ""), u = (r == null ? void 0 : r.kind) === "ERP_GLOBAL" && d !== "unwrap", f = t == null ? void 0 : t.scatter, h = f ? { radius: Number(f.radius ?? 1.5), count: Math.max(1, Math.round(f.count ?? 6)) } : null;
  let w;
  if (n === "chisel") {
    const _ = i * a, ee = i, V = Math.max(0, Number((t == null ? void 0 : t.chiselEdgeLift) ?? 0.4)), te = Math.max(0, Number((t == null ? void 0 : t.chiselCenterDip) ?? 0.3)), I = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.chiselFiber) ?? 0)));
    w = h1(_, ee, o, s, V, te, I);
  } else if (n === "crayon") {
    const _ = i * a, ee = i, V = Math.max(0, Math.min(1, Number((t == null ? void 0 : t.crayonGrain) ?? 0.65)));
    w = y1(_, ee, o, s, V);
  } else
    w = p1(i, o, s.r, s.g, s.b, s.a);
  return { ctx: e, stampTex: w, radiusPx: i, spacingPx: c, desc: r, aspect: a, angle: l, stampKind: n, scatter: h, latitudeCorrection: u };
}
function b1(e) {
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
function v1(e) {
  const t = String((e == null ? void 0 : e.layerKind) || "paint");
  if (String((e == null ? void 0 : e.toolKind) || "pen") === "eraser" || t === "mask") return "rgba(255,255,255,1)";
  const n = (e == null ? void 0 : e.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, i = Math.max(0, Math.min(1, Number(n.a ?? 1)));
  return `rgba(${Math.round(Number(n.r || 0) * 255)},${Math.round(Number(n.g || 0) * 255)},${Math.round(Number(n.b || 0) * 255)},${i})`;
}
function Ef(e, t, r, n, i) {
  const o = e.angle, s = e.desc.width;
  function a(c, d) {
    o === 0 ? e.ctx.drawImage(e.stampTex, c - i, d - n, i * 2, n * 2) : (e.ctx.save(), e.ctx.translate(c, d), e.ctx.rotate(o), e.ctx.drawImage(e.stampTex, -i, -n, i * 2, n * 2), e.ctx.restore());
  }
  a(t, r);
  const l = o === 0 ? i : i * Math.abs(Math.cos(o)) + n * Math.abs(Math.sin(o));
  t - l < 0 && a(t + s, r), t + l > s && a(t - s, r);
}
function Zu(e, t, r, n) {
  const i = Math.max(0.01, Number.isFinite(n) ? n : 1);
  if (e.scatter) {
    const { radius: c, count: d } = e.scatter, u = c * e.radiusPx * i, f = io(t, r);
    for (let h = 0; h < d; h++) {
      const w = Pi(f + h * 2) * Math.PI * 2, g = Math.sqrt(Pi(f + h * 2 + 1)) * u, m = t + Math.cos(w) * g, _ = r + Math.sin(w) * g, ee = Math.max(0.5, e.radiusPx * i * 0.48), V = (0.5 - _ / Math.max(1, e.desc.height)) * Math.PI, te = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(V)) : 1, I = ee * e.aspect * te;
      Ef(e, m, _, ee, I);
    }
    return;
  }
  const o = Math.max(0.5, e.radiusPx * i), s = (0.5 - r / Math.max(1, e.desc.height)) * Math.PI, a = e.latitudeCorrection ? 1 / Math.max(0.05, Math.cos(s)) : 1, l = o * e.aspect * a;
  Ef(e, t, r, o, l);
}
function Of(e, t, r) {
  const n = u1(t);
  if (!e || n.length === 0) return;
  const i = r.width, o = r.height, s = Kh(e, t, r);
  e.save(), e.globalCompositeOperation = "source-over";
  const a = [];
  for (let f = 0; f < n.length; f++) {
    let h = Number(n[f].u || 0) * i;
    const w = Number(n[f].v || 0) * o;
    f > 0 && Math.abs(h - a[f - 1].x) > i * 0.5 && (h += h < a[f - 1].x ? i : -i), a.push({ x: h, y: w });
  }
  if (Zu(s, a[0].x, a[0].y, 1), a.length === 1) {
    e.restore();
    return;
  }
  let l = a[0], c = a[0], d = a[0], u = 0;
  for (let f = 1; f < a.length; f++) {
    const h = a[f], w = { x: (c.x + h.x) * 0.5, y: (c.y + h.y) * 0.5 };
    f === 1 ? u = ds(s, d.x, d.y, w.x, w.y, u) : u = Ha(s, l, d, w, h, u), l = c, c = h, d = w;
  }
  a.length === 2 ? ds(s, d.x, d.y, c.x, c.y, u) : Ha(s, l, d, c, c, u), e.restore();
}
function ba(e, t, r) {
  var u;
  const n = Array.isArray((u = t == null ? void 0 : t.geometry) == null ? void 0 : u.points) ? t.geometry.points : [];
  if (!e || n.length < 3) return;
  const i = r.width, o = r.height, s = v1(t), a = [];
  let l = 1 / 0, c = -1 / 0;
  for (let f = 0; f < n.length; f++) {
    const h = c1(n[f]);
    let w = Number(h.x || 0) * i;
    f > 0 && Math.abs(w - a[f - 1].x) > i * 0.5 && (w += w < a[f - 1].x ? i : -i), a.push({ x: w, y: Number(h.y || 0) * o }), w < l && (l = w), w > c && (c = w);
  }
  function d(f) {
    e.beginPath(), e.moveTo(a[0].x + f, a[0].y);
    for (let h = 1; h < a.length; h++) e.lineTo(a[h].x + f, a[h].y);
    e.closePath(), e.fill();
  }
  e.save(), e.globalCompositeOperation = "source-over", e.fillStyle = s, d(0), l < 0 && d(i), c > i && d(-i), e.restore();
}
function ea(e, t, r) {
  var s;
  if (String(((s = t == null ? void 0 : t.geometry) == null ? void 0 : s.geometryKind) || "") === "lasso_fill") {
    ba(e, t, r);
    return;
  }
  const o = String((t == null ? void 0 : t.toolKind) || "") === "eraser" ? 1 : Math.max(0, Math.min(1, Number((t == null ? void 0 : t.opacity) ?? 1)));
  o >= 0.999 ? Of(e, t, r) : (Fo = Qr(Fo, r.width, r.height), Bt(Fo), Of(Fo.ctx, t, r), e.save(), e.globalAlpha = o, e.drawImage(Fo.canvas, 0, 0), e.restore());
}
function mi(e, t) {
  e.save(), e.globalCompositeOperation = "destination-out", e.drawImage(t, 0, 0), e.restore();
}
function ds(e, t, r, n, i, o) {
  const s = n - t, a = i - r, l = Math.hypot(s, a);
  if (l < 1e-9) return o;
  let c = e.spacingPx - o;
  for (; c <= l; ) {
    const d = c / l;
    Zu(e, t + s * d, r + a * d, 1), c += e.spacingPx;
  }
  return l - c + e.spacingPx;
}
function Ha(e, t, r, n, i, o) {
  const a = Math.sqrt(Math.hypot(r.x - t.x, r.y - t.y)) + 1e-4, l = Math.sqrt(Math.hypot(n.x - r.x, n.y - r.y)) + 1e-4, c = Math.sqrt(Math.hypot(i.x - n.x, i.y - n.y)) + 1e-4, d = 0, u = a, f = u + l, h = f + c, w = f - u, g = 16;
  let m = o, _ = r.x, ee = r.y;
  for (let V = 1; V <= g; V++) {
    const te = u + w * V / g, I = ((u - te) * t.x + (te - d) * r.x) / (u - d), X = ((u - te) * t.y + (te - d) * r.y) / (u - d), j = ((f - te) * r.x + (te - u) * n.x) / (f - u), W = ((f - te) * r.y + (te - u) * n.y) / (f - u), ie = ((h - te) * n.x + (te - f) * i.x) / (h - f), pe = ((h - te) * n.y + (te - f) * i.y) / (h - f), q = ((f - te) * I + (te - d) * j) / (f - d), de = ((f - te) * X + (te - d) * W) / (f - d), ae = ((h - te) * j + (te - u) * ie) / (h - u), ve = ((h - te) * W + (te - u) * pe) / (h - u), G = ((f - te) * q + (te - u) * ae) / (f - u), A = ((f - te) * de + (te - u) * ve) / (f - u);
    m = ds(e, _, ee, G, A, m), _ = G, ee = A;
  }
  return m;
}
function S1(e, t, r, n) {
  const i = e.currentStroke.ctx;
  if (!i) return;
  const o = e.descriptor, s = o.width, a = r * o.height, l = e.activeStroke;
  let c = t * s;
  if (l && Math.abs(c - l.prev.x) > s * 0.5 && (c += c < l.prev.x ? s : -s), !l) {
    const h = Kh(i, n, o), w = Math.max(0, Math.min(1, Number((n == null ? void 0 : n.opacity) ?? 1))), g = Math.max(0, Number((n == null ? void 0 : n.velocityWidthFactor) ?? 0)), m = String((n == null ? void 0 : n.toolKind) || "") === "eraser", _ = String((n == null ? void 0 : n.layerKind) || "paint");
    i.globalCompositeOperation = "source-over", Zu(h, c, a, 1), e.activeStroke = {
      pprev: { x: c, y: a },
      prev: { x: c, y: a },
      lastMidX: c,
      lastMidY: a,
      stampTex: h.stampTex,
      radiusPx: h.radiusPx,
      spacingPx: h.spacingPx,
      aspect: h.aspect,
      angle: h.angle,
      stampKind: h.stampKind,
      scatter: h.scatter,
      latitudeCorrection: h.latitudeCorrection,
      strokeOpacity: w,
      velocityWidthFactor: g,
      distSinceStamp: 0,
      isEraser: m,
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
  l.pointCount === 1 ? l.distSinceStamp = ds(f, l.lastMidX, l.lastMidY, d, u, l.distSinceStamp) : l.distSinceStamp = Ha(
    f,
    l.pprev,
    { x: l.lastMidX, y: l.lastMidY },
    { x: d, y: u },
    { x: c, y: a },
    l.distSinceStamp
  ), l.pprev = l.prev, l.prev = { x: c, y: a }, l.lastMidX = d, l.lastMidY = u, l.pointCount++, cn(e);
}
function Il(e = {}) {
  const t = Math.max(1, Math.round(Number((e == null ? void 0 : e.width) || 2048))), r = Math.max(1, Math.round(Number((e == null ? void 0 : e.height) || 1024))), n = { kind: "ERP_GLOBAL", width: t, height: r }, i = /* @__PURE__ */ new Map(), o = Bi(t, r), s = {
    descriptor: n,
    committedMask: Bi(t, r),
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
    committedPaint: Bi(t, r),
    currentStroke: o,
    activeStroke: null,
    displayDirty: !0,
    revision: 0,
    lassoPreviewActive: !1
  }, l = Bi(t, r);
  let c = null, d = "", u = null;
  const f = /* @__PURE__ */ new Map();
  let h = null;
  function w(ae) {
    return {
      actionGroupId: ae,
      descriptor: n,
      committedPaint: Bi(t, r),
      currentStroke: o,
      activeStroke: null,
      displayDirty: !0,
      revision: 0,
      lassoPreviewActive: !1
    };
  }
  function g(ae) {
    let ve = i.get(ae);
    return ve || (ve = w(ae), i.set(ae, ve)), ve;
  }
  function m(ae) {
    return d === "mask" ? s : c ? g(c) : a;
  }
  function _(ae) {
    var H;
    const ve = !u || u.length !== ae.length || ae.some((T, K) => T !== u[K]), G = d === "paint" && ((H = c ? i.get(c) : a) == null ? void 0 : H.activeStroke) || null;
    let A = s.displayDirty || a.displayDirty || ve;
    for (const T of ae) {
      const K = i.get(T);
      if (K != null && K.displayDirty) {
        A = !0;
        break;
      }
    }
    if (G && (A = !0), !A) return;
    s.displayDirty = !1, a.displayDirty = !1;
    for (const T of ae) {
      const K = i.get(T);
      K && (K.displayDirty = !1);
    }
    u = [...ae];
    const z = l.ctx;
    Bt(l);
    const M = !!(G != null && G.isEraser);
    for (const T of ae) {
      const K = i.get(T);
      if (!K) continue;
      const se = c === K.actionGroupId && d === "paint" ? K.activeStroke : null;
      if (M)
        Ut = Qr(Ut, t, r), Bt(Ut), Ut.ctx.drawImage(K.committedPaint.canvas, 0, 0), mi(Ut.ctx, o.canvas), z.drawImage(Ut.canvas, 0, 0);
      else if (z.drawImage(K.committedPaint.canvas, 0, 0), se) {
        const Y = K.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, se.strokeOpacity ?? 1));
        z.save(), z.globalAlpha = Y, z.drawImage(o.canvas, 0, 0), z.restore();
      }
    }
  }
  function ee(ae) {
    var G, A, z, M, H;
    for (const T of i.values())
      Bt(T.committedPaint), Bt(T.currentStroke), T.activeStroke = null, cn(T);
    Bt(s.committedMask), Bt(s.currentStroke), s.activeStroke = null, s.painted = !1, f.clear(), cn(s), cn(a), u = null;
    const ve = [
      ...Array.isArray((A = (G = ae == null ? void 0 : ae.painting) == null ? void 0 : G.paint) == null ? void 0 : A.strokes) ? ae.painting.paint.strokes : [],
      ...Array.isArray((M = (z = ae == null ? void 0 : ae.painting) == null ? void 0 : z.mask) == null ? void 0 : M.strokes) ? ae.painting.mask.strokes : []
    ];
    for (const T of ve) {
      if (((H = T == null ? void 0 : T.targetSpace) == null ? void 0 : H.kind) !== "ERP_GLOBAL") continue;
      const K = String((T == null ? void 0 : T.layerKind) || "paint"), se = String((T == null ? void 0 : T.toolKind) || "pen") === "eraser";
      if (K === "mask") {
        const Y = s.descriptor;
        se ? (Ut = Qr(Ut, Y.width, Y.height), Bt(Ut), ea(Ut.ctx, T, Y), mi(s.committedMask.ctx, Ut.canvas)) : (ea(s.committedMask.ctx, T, Y), s.painted = !0);
        continue;
      }
      if (se) {
        Ut = Qr(Ut, n.width, n.height), Bt(Ut), ea(Ut.ctx, T, n);
        for (const Y of i.values())
          mi(Y.committedPaint.ctx, Ut.canvas), cn(Y);
      } else {
        const Y = String((T == null ? void 0 : T.actionGroupId) || "__default__"), k = g(Y), ne = k.descriptor;
        ea(k.committedPaint.ctx, T, ne), cn(k);
      }
    }
    _([...i.keys()]);
  }
  function V(ae, ve) {
    d = String((ae == null ? void 0 : ae.layerKind) || "");
    const G = String((ae == null ? void 0 : ae.toolKind) || "") === "eraser";
    if (d === "mask")
      c = null, Bt(s.currentStroke), s.activeStroke = null, cn(s);
    else {
      const A = G ? a : g(String((ae == null ? void 0 : ae.actionGroupId) || "__default__"));
      c = G ? "" : String((ae == null ? void 0 : ae.actionGroupId) || "__default__"), Bt(A.currentStroke), A.activeStroke = null, cn(A);
    }
  }
  function te(ae, ve) {
    var K;
    const G = String((ae == null ? void 0 : ae.layerKind) || "paint"), A = String((ae == null ? void 0 : ae.toolKind) || "") === "eraser", z = G === "mask" ? s : A ? a : g(String((ae == null ? void 0 : ae.actionGroupId) || c || "__default__")), M = z.activeStroke, H = z.descriptor;
    if (M && M.pointCount > 1) {
      const fe = z.currentStroke.ctx;
      fe.globalCompositeOperation = "source-over";
      const se = {
        ctx: fe,
        stampTex: M.stampTex,
        radiusPx: M.radiusPx,
        spacingPx: M.spacingPx,
        desc: H,
        aspect: M.aspect,
        angle: M.angle,
        stampKind: M.stampKind,
        scatter: M.scatter,
        latitudeCorrection: M.latitudeCorrection
      };
      M.pointCount === 2 ? ds(se, M.lastMidX, M.lastMidY, M.prev.x, M.prev.y, M.distSinceStamp) : Ha(se, M.pprev, { x: M.lastMidX, y: M.lastMidY }, M.prev, M.prev, M.distSinceStamp);
    }
    z.lassoPreviewActive && (Bt(z.currentStroke), ba(z.currentStroke.ctx, ae, H), z.lassoPreviewActive = !1);
    const T = G === "mask" ? s.committedMask : z.committedPaint;
    if (A && G === "paint")
      for (const fe of i.values())
        mi(fe.committedPaint.ctx, z.currentStroke.canvas), cn(fe);
    else if (A)
      mi(T.ctx, z.currentStroke.canvas);
    else {
      G === "mask" && (s.painted = !0);
      const fe = Math.max(0, Math.min(1, (M == null ? void 0 : M.strokeOpacity) ?? 1));
      T.ctx.save(), T.ctx.globalAlpha = fe, T.ctx.drawImage(z.currentStroke.canvas, 0, 0), T.ctx.restore();
    }
    a1() && (String((ae == null ? void 0 : ae.toolKind) || ""), String((H == null ? void 0 : H.kind) || ""), Number((H == null ? void 0 : H.width) || 0), Number((H == null ? void 0 : H.height) || 0), String(((K = ae == null ? void 0 : ae.targetSpace) == null ? void 0 : K.viewMode) || ""), Number((ae == null ? void 0 : ae.aspect) ?? 1), Af(z.currentStroke.canvas), Af(T.canvas), void 0), Bt(z.currentStroke), z.activeStroke = null, cn(z), f.clear(), c = null, d = "", _([...i.keys()]);
  }
  function I(ae) {
    if (d === "mask")
      Bt(s.currentStroke), s.activeStroke = null, s.lassoPreviewActive = !1, cn(s);
    else if (d === "paint" && !c)
      Bt(a.currentStroke), a.activeStroke = null, a.lassoPreviewActive = !1, cn(a);
    else if (c) {
      const ve = i.get(c);
      ve && (Bt(ve.currentStroke), ve.activeStroke = null, ve.lassoPreviewActive = !1, cn(ve));
    }
    f.clear(), c = null, d = "", _([...i.keys()]);
  }
  function X(ae, ve) {
    var A;
    if (d = String((ae == null ? void 0 : ae.layerKind) || ""), String(((A = ae == null ? void 0 : ae.geometry) == null ? void 0 : A.geometryKind) || "") === "lasso_fill") {
      if (d === "mask")
        Bt(s.currentStroke), ba(s.currentStroke.ctx, ae, s.descriptor), s.lassoPreviewActive = !0, cn(s);
      else {
        const z = String((ae == null ? void 0 : ae.toolKind) || "") === "eraser", M = z ? a : g(String((ae == null ? void 0 : ae.actionGroupId) || c || "__default__"));
        c = z ? "" : String((ae == null ? void 0 : ae.actionGroupId) || c || "__default__"), Bt(M.currentStroke), ba(M.currentStroke.ctx, ae, M.descriptor), M.lassoPreviewActive = !0, cn(M);
      }
      _([...i.keys()]);
    }
  }
  function j(ae) {
    return _(ae ?? [...i.keys()]), {
      displayPaint: l,
      committedMask: s.committedMask,
      descriptor: n
    };
  }
  function W(ae) {
    return i.get(String(ae)) ?? null;
  }
  function ie() {
    return [...i.keys()];
  }
  function pe(ae) {
    var fe;
    const ve = i.get(String(ae));
    if (!ve) return null;
    const G = d === "paint" && c === ve.actionGroupId, A = d === "paint" && ((fe = c ? i.get(c) : a) == null ? void 0 : fe.activeStroke) || null, z = !!(A != null && A.isEraser), M = G ? ve.activeStroke : null;
    if (!z && !M) return ve.committedPaint.canvas;
    const H = `${ve.revision}:${a.revision}:${z}`, T = f.get(ve.actionGroupId);
    if ((T == null ? void 0 : T.key) === H) return T.surface.canvas;
    const K = Qr((T == null ? void 0 : T.surface) ?? null, t, r);
    return Bt(K), K.ctx.drawImage(ve.committedPaint.canvas, 0, 0), z ? mi(K.ctx, o.canvas) : (K.ctx.save(), K.ctx.globalAlpha = ve.lassoPreviewActive ? 0.5 : Math.max(0, Math.min(1, M.strokeOpacity ?? 1)), K.ctx.drawImage(o.canvas, 0, 0), K.ctx.restore()), f.set(ve.actionGroupId, { key: H, surface: K }), K.canvas;
  }
  function q() {
    const ae = d === "mask" ? s.activeStroke : null;
    return !s.painted && (!ae || ae.isEraser) ? null : `${s.revision}:${!!ae}`;
  }
  function de() {
    const ae = q();
    if (ae === null)
      return h = null, null;
    if ((h == null ? void 0 : h.key) === ae) return h.surface.canvas;
    const ve = Qr((h == null ? void 0 : h.surface) ?? null, t, r);
    Bt(ve);
    const G = d === "mask" ? s.activeStroke : null;
    return G != null && G.isEraser ? (Ut = Qr(Ut, t, r), Bt(Ut), Ut.ctx.drawImage(s.committedMask.canvas, 0, 0), mi(Ut.ctx, o.canvas), cc(ve.ctx, Ut.canvas)) : (cc(ve.ctx, s.committedMask.canvas), G && cc(ve.ctx, o.canvas)), h = { key: ae, surface: ve }, ve.canvas;
  }
  return {
    rebuildCommitted: ee,
    beginStroke: V,
    appendStrokePoint: S1,
    updateActiveStroke: X,
    commitActiveStroke: te,
    cancelActiveStroke: I,
    getErpTarget: j,
    ensureTarget: m,
    getGroupTarget: W,
    getGroupDisplayCanvas: pe,
    getMaskDisplayCanvas: de,
    getMaskDisplayRevision: q,
    getAllGroupIds: ie
  };
}
function Ie(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function Ht(e) {
  return ((e + 180) % 360 + 360) % 360 - 180;
}
function Qu(e, t) {
  let r = Ht(t) - Ht(e);
  return r > 180 && (r -= 360), r < -180 && (r += 360), r;
}
const Yc = 3;
function To(e) {
  const t = Number(e);
  return Number.isFinite(t) ? t : null;
}
function Ga(e, t = 0) {
  const r = To(e == null ? void 0 : e.deltaY);
  if (r != null) return Math.sign(r);
  const n = To(e == null ? void 0 : e.wheelDeltaY);
  if (n != null) return Math.sign(-n);
  const i = To(e == null ? void 0 : e.wheelDelta);
  if (i != null) return Math.sign(-i);
  const o = To(e == null ? void 0 : e.detail);
  return o != null ? Math.sign(o) : Math.sign(To(t) || 0);
}
function Wh(e) {
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
const Ff = Math.PI / 180, Tf = 0.12, _1 = Yc, w1 = 35, x1 = 140, zo = 100, k1 = 20, Df = 0.8;
function M1(e, t, r) {
  const n = Math.max(1, Number(t || 1)), i = Math.max(1, Number(r || 1)), o = Ie(Number(e || zo), 1, 179) * Ff;
  return 2 * Math.atan(Math.tan(o * 0.5) * (i / n)) / Ff;
}
function ed(e = {}) {
  const t = typeof e.getView == "function" ? e.getView : (() => ({ yaw: 0, pitch: 0, fov: zo })), r = typeof e.setView == "function" ? e.setView : (() => {
  }), n = typeof e.getInvert == "function" ? e.getInvert : (() => ({ x: 1, y: 1 })), i = typeof e.getUnwrapRect == "function" ? e.getUnwrapRect : (() => ({ w: 1, h: 1 })), o = typeof e.getViewportSize == "function" ? e.getViewportSize : (() => ({ w: 0, h: 0 })), s = typeof e.onInteraction == "function" ? e.onInteraction : (() => {
  }), a = typeof e.onDebug == "function" ? e.onDebug : null, l = {
    drag: { active: !1, lastX: 0, lastY: 0, lastTs: 0, pointerId: null },
    inertia: { vx: 0, vy: 0, active: !1, lastTs: 0 },
    velHistory: []
    // { ts, yaw, pitch } — rolling window for velocity estimation
  };
  function c(ee, V = null) {
    a && a(ee, V);
  }
  function d(ee, V, te = null, I = performance.now()) {
    return l.drag.active = !0, l.drag.lastX = Number(ee || 0), l.drag.lastY = Number(V || 0), l.drag.lastTs = Number(I || performance.now()), l.drag.pointerId = te, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.lastTs = l.drag.lastTs, l.velHistory = [], c("drag", { phase: "start", x: l.drag.lastX, y: l.drag.lastY, pointerId: te }), !0;
  }
  function u(ee, V, te = "pano", I = performance.now()) {
    if (!l.drag.active) return !1;
    const X = Number(I || performance.now()), j = Number(ee), W = Number(V), ie = j - l.drag.lastX, pe = W - l.drag.lastY;
    l.drag.lastX = j, l.drag.lastY = W, l.drag.lastTs = X;
    const q = n() || { x: 1, y: 1 }, de = Number(q.x || 1), ae = Number(q.y || 1), ve = { ...t() };
    let G = 0, A = 0;
    if (te === "unwrap") {
      const M = i() || { w: 1, h: 1 }, H = Math.max(1, Number(M.w || 1)), T = Math.max(1, Number(M.h || 1)), K = ie / H, fe = pe / T;
      G = -K * 360 * de, A = fe * 180 * ae;
    } else {
      const M = o() || { w: 0, h: 0 }, H = Math.max(1, Number(M.w || 0)), T = Math.max(1, Number(M.h || 0));
      if (H > 1 && T > 1) {
        const K = Ie(Number(ve.fov || zo), 1, 179), fe = Ie(M1(K, H, T), 0.1, 179);
        G = -(ie / H) * K * de, A = pe / T * fe * ae;
      } else
        G = -ie * Tf * de, A = pe * Tf * ae;
    }
    ve.yaw = Ht(Number(ve.yaw || 0) + G), ve.pitch = Ie(Number(ve.pitch || 0) + A, -89.9, 89.9), r(ve), l.velHistory.push({ ts: X, yaw: ve.yaw, pitch: ve.pitch });
    let z = 0;
    for (; z < l.velHistory.length - 1 && l.velHistory[z].ts < X - 100; ) z++;
    return z > 0 && l.velHistory.splice(0, z), l.inertia.active = !1, l.inertia.lastTs = X, s(), c("drag", { phase: "move", dx: ie, dy: pe, dYaw: G, dPitch: A }), !0;
  }
  function f(ee = performance.now()) {
    if (!l.drag.active) return !1;
    l.drag.active = !1;
    const V = Number(ee || performance.now());
    l.drag.lastTs = V;
    const te = l.velHistory.filter((X) => V - X.ts <= 80);
    if (te.length >= 2) {
      const X = te[0], j = te.at(-1), W = Math.max(1e-3, (j.ts - X.ts) / 1e3);
      let ie = j.yaw - X.yaw;
      ie > 180 && (ie -= 360), ie < -180 && (ie += 360), l.inertia.vx = ie / W, l.inertia.vy = (j.pitch - X.pitch) / W;
    } else
      l.inertia.vx = 0, l.inertia.vy = 0;
    l.velHistory = [];
    const I = Math.hypot(l.inertia.vx, l.inertia.vy);
    return l.inertia.active = I > k1, l.inertia.lastTs = V, c("drag", { phase: "end", speed: I, inertiaActive: l.inertia.active }), !0;
  }
  function h(ee = performance.now()) {
    if (!l.inertia.active) return !1;
    const V = Number(ee || performance.now()), te = Math.max(1e-3, (V - (l.inertia.lastTs || V)) / 1e3);
    l.inertia.lastTs = V;
    const I = { ...t() };
    I.yaw = Ht(Number(I.yaw || 0) + l.inertia.vx * te), I.pitch = Ie(Number(I.pitch || 0) + l.inertia.vy * te, -89.9, 89.9);
    const X = Math.exp(-5.5 * te);
    return l.inertia.vx *= X, l.inertia.vy *= X, Math.abs(l.inertia.vx) < Df && Math.abs(l.inertia.vy) < Df && (l.inertia.vx = 0, l.inertia.vy = 0, l.inertia.active = !1), r(I), s(), l.inertia.active;
  }
  function w() {
    const ee = l.drag.active || l.inertia.active || l.inertia.vx !== 0 || l.inertia.vy !== 0;
    return l.drag.active = !1, l.drag.pointerId = null, l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, l.velHistory = [], ee;
  }
  function g(ee) {
    const V = Math.sign(Number(ee || 0));
    if (!V) return !1;
    const te = { ...t() }, I = Number(te.fov || zo);
    return te.fov = Ie(I + V * _1, w1, x1), r(te), s(), c("wheel", { deltaSign: V, fovBefore: I, fovAfter: te.fov }), !0;
  }
  function m(ee, V = 0) {
    return g(Ga(ee, V));
  }
  function _() {
    r({ yaw: 0, pitch: 0, fov: zo }), l.inertia.active = !1, l.inertia.vx = 0, l.inertia.vy = 0, s();
  }
  return {
    state: l,
    startDrag: d,
    moveDrag: u,
    endDrag: f,
    stepInertia: h,
    stopMotion: w,
    applyWheel: g,
    applyWheelEvent: m,
    resetView: _
  };
}
const wt = Math.PI / 180, tn = 180 / Math.PI;
function Xn(e, t, r) {
  return { x: e, y: t, z: r };
}
function Ka(e, t) {
  return Xn(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Wa(e, t) {
  return Xn(e.x * t, e.y * t, e.z * t);
}
function uc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function td(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Xn(e.x / t, e.y / t, e.z / t);
}
function Dn(e, t) {
  const r = e * wt, n = t * wt, i = Math.cos(n);
  return Xn(i * Math.sin(r), Math.sin(n), i * Math.cos(r));
}
function yo(e, t, r = 0) {
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
function Ua(e) {
  const t = String(e || "").trim();
  return t ? t === "PanoramaPreview" || t === "Panorama Preview" ? !0 : /^panorama[\s_]*preview(?:\s*\(node\s*2\.0\)|_legacy)?$/i.test(t) : !1;
}
function Ct(e, t = null) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function P1() {
  return {
    version: 1,
    groups: [],
    paint: { strokes: [] },
    mask: { strokes: [] },
    raster_objects: []
  };
}
function N1(e) {
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
function A1(e) {
  if (!e || typeof e != "object") return null;
  const t = String(e.kind || "").trim();
  if (t === "ERP_GLOBAL") return { kind: "ERP_GLOBAL" };
  if (t === "FRAME_LOCAL") {
    const r = String(e.frameId ?? "").trim();
    return r ? { kind: "FRAME_LOCAL", frameId: r } : null;
  }
  return null;
}
function C1(e, t) {
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
function ta(e, t, r = 1) {
  if (!Array.isArray(e)) return null;
  const n = [];
  for (const i of e) {
    const o = C1(i, t);
    if (!o) return null;
    n.push(o);
  }
  return n.length >= r ? n : null;
}
function I1(e, t, r, n) {
  if (!e || typeof e != "object") return null;
  const i = String(e.geometryKind || "").trim();
  if (i === "lasso_fill") {
    if (!n || r !== "lasso_fill") return null;
    const l = ta(e.points, t, 3);
    return l ? { geometryKind: i, points: l } : null;
  }
  if (i !== "freehand_open" && i !== "freehand_closed" || r === "lasso_fill") return null;
  const o = ta(e.points, t, 1);
  if (!o) return null;
  const s = ta(e.rawPoints, t, 1), a = ta(e.processedPoints, t, 1);
  return {
    geometryKind: i,
    points: o,
    rawPoints: s || o.map((l) => ({ ...l })),
    processedPoints: a || o.map((l) => ({ ...l }))
  };
}
function E1(e, t) {
  if (!e || typeof e != "object" || String(e.layerKind || "") !== t) return null;
  const r = A1(e.targetSpace);
  if (!r) return null;
  const n = String(e.toolKind || "").trim(), i = I1(e.geometry, r, n, t === "paint");
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
function Lf(e, t) {
  const r = { strokes: [] };
  if (!e || typeof e != "object" || !Array.isArray(e.strokes)) return r;
  for (const n of e.strokes) {
    const i = E1(n, t);
    i && r.strokes.push(i);
  }
  return r;
}
function O1(e) {
  if (!e || typeof e != "object") return null;
  const t = Ct(e.u0, null), r = Ct(e.v0, null), n = Ct(e.u1, null), i = Ct(e.v1, null);
  if (t == null || r == null || n == null || i == null) return null;
  const o = (a) => Math.max(0, Math.min(1, a)), s = { u0: o(t), v0: o(r), u1: o(n), v1: o(i) };
  return s.u1 <= s.u0 || s.v1 <= s.v0 ? null : s;
}
function F1(e) {
  const t = e || {};
  return {
    du: Ct(t.du, 0) ?? 0,
    dv: Ct(t.dv, 0) ?? 0,
    rot_deg: Ct(t.rot_deg, 0) ?? 0,
    scale: Math.max(0.01, Ct(t.scale, 1) ?? 1)
  };
}
function T1(e, t) {
  if (!e || typeof e != "object" || String(e.type || "") !== "raster_frozen") return null;
  const r = String(e.id || "").trim();
  if (!r) return null;
  const n = String(e.layerKind || "paint");
  if (n !== "paint" && n !== "mask") return null;
  const i = String(e.rasterDataUrl || "").trim();
  if (!i.startsWith("data:")) return null;
  const o = O1(e.bbox);
  return o ? {
    id: r,
    type: "raster_frozen",
    layerKind: n,
    z_index: Math.max(0, Ct(e.z_index ?? e.zIndex, t) ?? t),
    locked: e.locked === !0,
    bbox: o,
    rasterDataUrl: i,
    transform: F1(e.transform)
  } : null;
}
function D1(e) {
  if (!Array.isArray(e)) return [];
  const t = [], r = /* @__PURE__ */ new Set();
  for (const n of e) {
    const i = T1(n, t.length);
    !i || r.has(i.id) || (r.add(i.id), t.push(i));
  }
  return t;
}
function bo(e) {
  const t = P1();
  return !e || typeof e != "object" ? t : {
    version: 1,
    groups: N1(e.groups),
    paint: Lf(e.paint, "paint"),
    mask: Lf(e.mask, "mask"),
    raster_objects: D1(e.raster_objects)
  };
}
const Jn = 1, Zn = 179, qc = 85;
function El(e) {
  const t = ((ot(e, 0) + 180) % 360 + 360) % 360 - 180;
  return t <= -180 ? 180 : t;
}
function Uh(e, t) {
  let r = ot(e, 0) - ot(t, 0);
  for (; r <= -Math.PI; ) r += Math.PI * 2;
  for (; r > Math.PI; ) r -= Math.PI * 2;
  return r;
}
function Bh(e, t, { shiftKey: r = !1 } = {}) {
  let n = ot(e, 0) + ot(t, 0) * tn;
  return r && (n = Math.round(n / 15) * 15), El(n);
}
function ot(e, t) {
  const r = Number(e);
  return Number.isFinite(r) ? r : Number(t);
}
function ai(e = {}) {
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
function Ii(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = ai(t);
  return Math.max(1, Math.min(
    r / (2 * i.tanHalfX),
    n / (2 * i.tanHalfY)
  ));
}
function nd(e, t) {
  const r = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), n = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), i = Math.max(1e-6, ot(t, 1)), o = Math.min(r, n * i);
  return { width: o, height: o / i };
}
function rd(e, t) {
  const r = Math.max(1e-12, ot(t, 1)), n = Math.max(1e-6, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), i = Math.max(1e-6, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1)), o = Ie(2 * Math.atan(n / (2 * r)) * tn, Jn, Zn), s = Ie(2 * Math.atan(i / (2 * r)) * tn, Jn, Zn);
  return { hFOV_deg: o, vFOV_deg: s };
}
function L1(e, t, r) {
  const n = ot(e == null ? void 0 : e.x, 0), i = ot(e == null ? void 0 : e.y, 0), o = Math.max(1, ot((e == null ? void 0 : e.w) ?? (e == null ? void 0 : e.width), 1)), s = Math.max(1, ot((e == null ? void 0 : e.h) ?? (e == null ? void 0 : e.height), 1)), a = ai(t), l = Math.max(1e-12, ot(r, 1)), c = 2 * l * a.tanHalfX, d = 2 * l * a.tanHalfY;
  return {
    x: n + (o - c) * 0.5,
    y: i + (s - d) * 0.5,
    w: c,
    h: d,
    focalPx: l
  };
}
function id(e, t, r = qc) {
  const n = Math.max(1e-12, ot(t, 1)), i = Ie(ot(r, qc), 1, 89.999), o = n * Math.tan(i * wt), s = Math.max(1, ot((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w), 1)), a = Math.max(1, ot((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h), 1));
  return {
    halfW: Math.min(s * 0.5, o),
    halfH: Math.min(a * 0.5, o)
  };
}
function Yh(e, t, r) {
  const n = Math.max(1e-12, ot(t, 1));
  return {
    x: (ot(r == null ? void 0 : r.x, 0) - ot(e == null ? void 0 : e.x, 0)) / n,
    y: -(ot(r == null ? void 0 : r.y, 0) - ot(e == null ? void 0 : e.y, 0)) / n
  };
}
function R1(e, t) {
  const r = Ie(ot(e, 90), Jn, Zn), n = Math.max(1e-6, ot(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * wt * 0.5) / n) * tn,
    Jn,
    Zn
  );
}
function va(e, t) {
  const r = Ie(ot(e, 60), Jn, Zn), n = Math.max(1e-6, ot(t, 1));
  return Ie(
    2 * Math.atan(Math.tan(r * wt * 0.5) * n) * tn,
    Jn,
    Zn
  );
}
function Rf(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) && r > 0 ? r : Number(t);
}
function V1(e, t) {
  const r = Rf(e, 1), n = Rf(t, 1);
  if (r <= 0 || n <= 0) return "1:1";
  const i = 1e3, o = Math.max(1, Math.round(r * i)), s = Math.max(1, Math.round(n * i)), a = (c, d) => d ? a(d, c % d) : c, l = a(o, s) || 1;
  return `${Math.max(1, Math.round(o / l))}:${Math.max(1, Math.round(s / l))}`;
}
function Ti(e) {
  const t = Ie(Number((e == null ? void 0 : e.hFOV_deg) || 90), 1, 179) * wt, r = Ie(Number((e == null ? void 0 : e.vFOV_deg) || 60), 1, 179) * wt;
  return Math.max(0.05, Math.min(20, Math.tan(t * 0.5) / Math.max(1e-6, Math.tan(r * 0.5))));
}
function Ni(e) {
  const t = Ti(e), n = [
    ["1:1", 1],
    ["4:3", 4 / 3],
    ["3:2", 3 / 2],
    ["16:9", 16 / 9],
    ["9:16", 9 / 16],
    ["2:3", 2 / 3],
    ["3:4", 3 / 4]
  ].find(([, i]) => Math.abs(t - i) <= 0.015);
  return (n == null ? void 0 : n[0]) || V1(t, 1);
}
function od(e) {
  if (!e || typeof e != "object") return e;
  const t = { ...e, locked: e.locked === !0 };
  return delete t.out_w, delete t.out_h, t.aspect_id = Ni(t), t;
}
function qh({
  id: e = "",
  yawDeg: t = 0,
  pitchDeg: r = 0,
  rollDeg: n = 0,
  viewFovDeg: i = 100,
  frameFovDeg: o = null
} = {}) {
  const s = o == null || String(o).trim() === "" ? NaN : Number(o), a = Number.isFinite(s) ? Ie(s, Jn, Zn) : Ie(Math.min(42, ot(i, 100) * 0.42), 8, 96);
  return od({
    id: String(e),
    label: "Frame 1",
    yaw_deg: ot(t, 0),
    pitch_deg: Ie(ot(r, 0), -89.9, 89.9),
    roll_deg: El(n),
    hFOV_deg: a,
    vFOV_deg: a,
    locked: !1
  });
}
function Dr(e) {
  if (!e || typeof e != "object") return "1:1";
  const t = String(e.aspect_id || "").trim();
  return /^\d+:\d+$/.test(t) ? t : Ni(e);
}
function Xh(e, t) {
  const r = ai(e), n = ot(t, 1);
  if (!(n > 0)) return null;
  const i = 2 * Math.atan(r.tanHalfX * n) * tn, o = 2 * Math.atan(r.tanHalfY * n) * tn;
  return i < Jn || i > Zn || o < Jn || o > Zn ? null : { hFOV_deg: i, vFOV_deg: o };
}
function Jh(e, t, r = Yc) {
  const n = Math.sign(ot(t, 0)), i = Math.abs(ot(r, Yc));
  if (!n || !(i > 0)) return null;
  const o = ai(e), s = o.hFovDeg + n * i;
  if (s < Jn || s > Zn) return null;
  const a = Math.tan(s * wt * 0.5);
  return Xh(e, a / o.tanHalfX);
}
function Zh(e, t) {
  const r = ai(e), n = yo(r.yawDeg, r.pitchDeg, r.rollDeg), i = ot(t == null ? void 0 : t.x, 0), o = ot(t == null ? void 0 : t.y, 0);
  return td(Ka(Ka(n.fwd, Wa(n.right, i)), Wa(n.up, o)));
}
function $1(e) {
  return Xn(e.x, e.y, -e.z);
}
function Sa(e) {
  return Xn(e.x, e.y, -e.z);
}
function kn(e, t, r = 0) {
  const { right: n, up: i, fwd: o } = yo(e, t, r);
  return [
    [n.x, i.x, -o.x],
    [n.y, i.y, -o.y],
    [-n.z, -i.z, o.z]
  ];
}
function Qh(e) {
  const t = Sa(Xn(e[0][0], e[1][0], e[2][0])), r = Sa(Xn(e[0][1], e[1][1], e[2][1])), n = Sa(Xn(-e[0][2], -e[1][2], -e[2][2])), i = Math.atan2(n.x + 0, n.z + 0), o = Math.atan2(n.y, Math.hypot(n.x, n.z)), s = Math.cos(i), a = Math.sin(i), l = Math.atan2(a * r.z - s * r.x, s * t.x - a * t.z);
  return { yawDeg: i * tn, pitchDeg: o * tn, rollDeg: l * tn };
}
function fs(e) {
  const t = Math.hypot(e.x, e.y, e.z, e.w), r = e.x / t, n = e.y / t, i = e.z / t, o = e.w / t;
  return [
    [1 - 2 * (n * n + i * i), 2 * (r * n - i * o), 2 * (r * i + n * o)],
    [2 * (r * n + i * o), 1 - 2 * (r * r + i * i), 2 * (n * i - r * o)],
    [2 * (r * i - n * o), 2 * (n * i + r * o), 1 - 2 * (r * r + n * n)]
  ];
}
function li(e) {
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
function na(e) {
  return Array.isArray(e) ? [...e] : e && typeof e == "object" ? { ...e } : e;
}
const wi = 1e-6, Xc = 1e-6, z1 = 1e-9;
function ps(e, t, r, n, i) {
  const o = 1 - i;
  return o * o * o * e + 3 * o * o * i * t + 3 * o * i * i * r + i * i * i * n;
}
function j1(e, t) {
  if (e === "auto") return t;
  const [r, n, i, o] = e;
  let s = 0, a = 1;
  for (let l = 0; l < 50; l += 1) {
    const c = 0.5 * (s + a);
    ps(0, r, i, 1, c) < t ? s = c : a = c;
  }
  return ps(0, n, o, 1, 0.5 * (s + a));
}
function uo(e, t) {
  return t > 0 && t < e.length - 1 && e[t - 1].easing === "auto" && e[t].easing === "auto";
}
function fo(e, t, r, n) {
  const i = e[t] - e[t - 1], o = e[t + 1] - e[t], s = r.map((f) => -f / i), a = n.map((f) => f / o);
  if (s.reduce((f, h, w) => f + h * a[w], 0) < 0) return r.map(() => 0);
  const l = s.map((f, h) => (f * o + a[h] * i) / (i + o)), c = (f) => Math.sqrt(f.reduce((h, w) => h + w * w, 0)), d = 3 * Math.min(c(s), c(a)), u = c(l);
  return u <= d ? l : l.map((f) => f * d / u);
}
function em(e, t, r, n) {
  const i = r[n], o = r[n + 1], s = t[n + 1] - t[n], a = i.map((d, u) => o[u] - d);
  let l = a;
  uo(e, n) && (l = fo(t, n, r[n - 1].map((d, u) => d - i[u]), a).map((d) => d * s));
  let c = a;
  return uo(e, n + 1) && (c = fo(t, n + 1, a.map((d) => -d), r[n + 2].map((d, u) => d - o[u])).map((d) => d * s)), [l.map((d) => d / 3), c.map((d) => -d / 3)];
}
function tm(e, t, r, n, i) {
  const [[o], [s]] = em(e, t, r.map((a) => [a]), n);
  return ps(r[n], r[n] + o, r[n + 1] + s, r[n + 1], i);
}
function H1(e, t, r, n) {
  var c, d;
  const i = e.map((u) => u.value);
  let [o, s] = em(e, t, i, r);
  o = ((c = e[r].handles) == null ? void 0 : c.out) ?? o, s = ((d = e[r + 1].handles) == null ? void 0 : d.in) ?? s;
  const a = i[r], l = i[r + 1];
  return [0, 1, 2].map((u) => ps(a[u], a[u] + o[u], l[u] + s[u], l[u], n));
}
function Ba([e, t, r, n], [i, o, s, a]) {
  return [
    n * i + e * a + t * s - r * o,
    n * o - e * s + t * a + r * i,
    n * s + e * o - t * i + r * a,
    n * a - e * i - t * o - r * s
  ];
}
function G1(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3];
}
function dc(e) {
  return [-e[0], -e[1], -e[2], -e[3]];
}
function K1([e, t, r, n]) {
  const i = Math.sqrt(e * e + t * t + r * r), o = i > 1e-12 ? Math.atan2(i, n) / i : 1;
  return [e * o, t * o, r * o];
}
function Jc(e) {
  const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]), r = t > 1e-12 ? Math.sin(t) / t : 1;
  return [e[0] * r, e[1] * r, e[2] * r, Math.cos(t)];
}
function Zi(e, t) {
  return K1(Ba([-e[0], -e[1], -e[2], e[3]], t));
}
function fc(e, t, r) {
  return Ba(e, Jc(Zi(e, t).map((n) => r * n)));
}
function pc(e, t) {
  const r = G1(e, t);
  if (Math.abs(r) > Xc) return r < 0;
  const [n, i, o] = Zi(e, t);
  for (const s of [-i, n, o])
    if (Math.abs(s) > Xc) return s < 0;
  return !1;
}
function ra(e) {
  const { x: t, y: r, z: n, w: i } = li(kn(e.yaw_deg, e.pitch_deg, e.roll_deg));
  return [t, r, n, i];
}
function Zc(e, t, r, n) {
  const i = t + (r - t) * n;
  return e + 360 * Math.ceil((i - 180 - 1e-6 - e) / 360);
}
function W1(e, t, r, n) {
  const i = ra(e[r].value);
  let o = ra(e[r + 1].value);
  pc(i, o) && (o = dc(o));
  const s = t[r + 1] - t[r], a = Zi(i, o);
  let l = a;
  if (uo(e, r)) {
    let I = ra(e[r - 1].value);
    pc(I, i) && (I = dc(I)), l = fo(t, r, Zi(i, I), a).map((X) => X * s);
  }
  let c = a;
  if (uo(e, r + 1)) {
    let I = ra(e[r + 2].value);
    pc(o, I) && (I = dc(I)), c = fo(t, r + 1, Zi(o, i), Zi(o, I)).map((X) => X * s);
  }
  const d = Ba(i, Jc(l.map((I, X) => 0.5 * (I - a[X])))), u = Ba(o, Jc(a.map((I, X) => 0.5 * (I - c[X])))), [f, h, w, g] = fc(fc(i, o, n), fc(d, u, n), 2 * n * (1 - n)), { yawDeg: m, pitchDeg: _, rollDeg: ee } = Qh(fs({ x: f, y: h, z: w, w: g })), V = e[r].value, te = e[r + 1].value;
  return {
    yaw_deg: Zc(m, V.yaw_deg, te.yaw_deg, n),
    pitch_deg: _,
    roll_deg: Zc(ee, V.roll_deg, te.roll_deg, n)
  };
}
function hs(e, t) {
  return e.reduce((r, n, i) => r + n * t[i], 0);
}
function Ya(e) {
  return Math.sqrt(hs(e, e));
}
function qa(e) {
  const t = e.yaw_deg * Math.PI / 180, r = e.pitch_deg * Math.PI / 180;
  return [Math.cos(r) * Math.sin(t), Math.sin(r), Math.cos(r) * Math.cos(t)];
}
function nm(e, t) {
  const r = hs(e, t), n = t.map((s, a) => s - r * e[a]), i = Ya(n), o = i > 1e-12 ? Math.atan2(i, r) / i : 1;
  return n.map((s) => s * o);
}
function Yi(e, t) {
  const r = Ya(t), n = r > 1e-12 ? Math.sin(r) / r : 1;
  return e.map((i, o) => Math.cos(r) * i + n * t[o]);
}
function ia(e, t, r) {
  return Yi(e, nm(e, t).map((n) => r * n));
}
function hc(e, t) {
  const r = qa(e[t].value), n = qa(e[t + 1].value), i = hs(r, n), o = i < 0 && Ya(n.map((l, c) => l - i * r[c])) <= Xc;
  let s;
  if (o) {
    const l = e[t].value.yaw_deg * Math.PI / 180;
    s = [Math.PI * Math.cos(l), 0, -Math.PI * Math.sin(l)];
  } else
    s = nm(r, n);
  const a = Ya(s);
  return [s, s.map((l, c) => Math.cos(a) * l - a * Math.sin(a) * r[c]), o];
}
function U1(e, t, r, n) {
  const i = qa(e[r].value), o = qa(e[r + 1].value), [s, a, l] = hc(e, r);
  let c = s, d = a;
  const u = t[r + 1] - t[r];
  uo(e, r) && (c = fo(t, r, hc(e, r - 1)[1].map((V) => -V), c).map((V) => V * u)), uo(e, r + 1) && (d = fo(t, r + 1, d.map((V) => -V), hc(e, r + 1)[0]).map((V) => V * u));
  let f, h, w;
  if (l) {
    const V = Math.PI, te = ps(0, hs(c, s) / V / 3, V - hs(d, a) / V / 3, V, n);
    [f, h, w] = Yi(i, s.map((I) => te * I / V));
  } else {
    const V = ia(Yi(i, c.map((X) => X / 3)), Yi(o, d.map((X) => -X / 3)), n), te = ia(Yi(i, c.map((X) => n * X / 3)), V, n), I = ia(V, Yi(o, d.map((X) => -(1 - n) * X / 3)), n);
    [f, h, w] = ia(te, I, n);
  }
  const g = Math.hypot(f, w), m = e[r].value.yaw_deg, _ = e[r + 1].value.yaw_deg;
  return { yaw_deg: g <= z1 ? m + (_ - m) * n : Zc(Math.atan2(f, w) * 180 / Math.PI, m, _, n), pitch_deg: Math.atan2(h, g) * 180 / Math.PI };
}
function B1(e, t, r, n) {
  const i = {};
  for (const o of ["hFOV_deg", "vFOV_deg"]) i[o] = tm(e, t, e.map((s) => s.value[o]), r, n);
  return i;
}
function Y1(e, t, r, n) {
  return tm(e, t, e.map((i) => i.value), r, n);
}
const q1 = { position: H1, rotation: W1, direction: U1, size: B1 };
function Kt(e, t, r) {
  const { keyframes: n } = e[t];
  if (!n.length) return na(e[t].value);
  if (r <= n[0].frame + wi) return na(n[0].value);
  const i = n[n.length - 1];
  if (r >= i.frame - wi) return na(i.value);
  let o = 0;
  for (; n[o + 1].frame <= r + wi; ) o += 1;
  const s = n[o];
  if (Math.abs(r - s.frame) <= wi || s.easing === "hold") return na(s.value);
  const a = n.map((c) => c.frame), l = j1(s.easing, (r - a[o]) / (a[o + 1] - a[o]));
  return (q1[t] ?? Y1)(n, a, o, l);
}
function Qc(e) {
  return Math.min(179, Math.max(0.1, e));
}
function X1(e) {
  return Math.min(1, Math.max(0, e));
}
function rm(e) {
  return Math.max(1e-6, e);
}
function im(e, t) {
  return t - (e.start - e.in);
}
function vo(e, t) {
  return t >= e.start - wi && (e.duration === null || t < e.start + e.duration - wi);
}
function Ol(e, t) {
  return {
    position: Kt(e, "position", t),
    ...Kt(e, "rotation", t),
    hFOV_deg: Qc(Kt(e, "fov", t)),
    aspect: e.aspect
  };
}
function Ns(e, t) {
  const r = Number(t), { camera: n, scene: i } = e, o = im(i.clip, r);
  return {
    frame: r,
    camera: n == null ? null : Ol(n, r),
    scene: {
      active: i.visible && vo(i.clip, r),
      clip_frame: o,
      position: Kt(i, "position", o),
      ...Kt(i, "rotation", o),
      scale: rm(Kt(i, "scale", o))
    },
    stickers: e.stickers.map((s) => Ei(s, r))
  };
}
function J1(e, t) {
  if (e.placement === "world")
    return {
      position: Kt(e, "position", t),
      ...Kt(e, "rotation", t),
      scale: rm(Kt(e, "scale", t))
    };
  const r = Kt(e, "size", t);
  return {
    ...Kt(e, "direction", t),
    roll_deg: Kt(e, "roll", t),
    hFOV_deg: Qc(r.hFOV_deg),
    vFOV_deg: Qc(r.vFOV_deg)
  };
}
function Ei(e, t) {
  const r = im(e.clip, t);
  return {
    id: e.id,
    placement: e.placement,
    active: e.visible && vo(e.clip, t),
    clip_frame: r,
    ...J1(e, r),
    opacity: X1(Kt(e, "opacity", r))
  };
}
const Z1 = 2, om = ["sky", "world"], eu = ["perspective", "erp"], Q1 = ["input", "output", "temp"], sm = [0.42, 0, 0.58, 1], am = 1, sd = 1e3, tu = 1e7, ad = tu, ld = Number.MAX_SAFE_INTEGER, ev = /^sticker_([0-9]{1,16})$/;
function Rt(e) {
  return !!e && typeof e == "object" && !Array.isArray(e);
}
function qt(e, t) {
  return typeof e == "number" && Number.isFinite(e) ? e : t;
}
function cd(e, t) {
  const r = qt(e, t);
  return r !== null && r > 0 ? r : t;
}
function wn(e, t, r) {
  return Math.max(t, Math.min(r, e));
}
function ri(e) {
  const t = qt(e, null);
  return t === null ? null : Math.floor(t + 0.5);
}
function _a(e) {
  const t = ri(e);
  return t === null ? null : wn(t, -tu, tu);
}
function Di(e) {
  const t = cd(e, null);
  return t === null ? null : wn(t, am, sd);
}
function lm(e) {
  const t = ri(e);
  return t !== null && t >= 1 ? Math.min(t, ad) : null;
}
function ms(e, t) {
  return typeof e == "boolean" ? e : t;
}
function cm(e) {
  if (!Array.isArray(e) || e.length !== 3) return null;
  const t = e.map((r) => qt(r, null));
  return t.includes(null) ? null : t;
}
function um(e) {
  return cm(e) || [0, 0, 0];
}
function dm(e) {
  const t = Rt(e) ? e : {};
  return {
    yaw_deg: qt(t.yaw_deg, 0),
    pitch_deg: wn(qt(t.pitch_deg, 0), -90, 90),
    roll_deg: qt(t.roll_deg, 0)
  };
}
function tv(e) {
  return wn(qt(e, 90), 0.1, 179);
}
function nv(e) {
  return cd(e, 1);
}
function rv(e) {
  const t = Rt(e) ? e : {};
  return {
    yaw_deg: qt(t.yaw_deg, 0),
    pitch_deg: wn(qt(t.pitch_deg, 0), -90, 90)
  };
}
function iv(e) {
  return qt(e, 0);
}
function ov(e) {
  const t = Rt(e) ? e : {};
  return {
    hFOV_deg: wn(qt(t.hFOV_deg, 20), 0.1, 179),
    vFOV_deg: wn(qt(t.vFOV_deg, 20), 0.1, 179)
  };
}
function fm(e) {
  return wn(qt(e, 1), 0, 1);
}
const Fl = [["position", um], ["rotation", dm], ["fov", tv]], Tl = [["position", um], ["rotation", dm], ["scale", nv]], So = [["direction", rv], ["roll", iv], ["size", ov], ["opacity", fm]], _o = [...Tl, ["opacity", fm]];
function sv(e) {
  if (e === "auto" || e === "hold") return e;
  if (Array.isArray(e) && e.length === 4) {
    const t = e.map((r) => qt(r, null));
    if (t.every((r) => r !== null && r >= 0 && r <= 1)) return t;
  }
  return [...sm];
}
function av(e) {
  if (!Rt(e)) return null;
  const t = {};
  for (const r of ["in", "out"]) {
    const n = cm(e[r]);
    n && (t[r] = n);
  }
  return Object.keys(t).length ? t : null;
}
function lv(e, t, r) {
  const n = /* @__PURE__ */ new Map();
  for (const i of Array.isArray(e) ? e : []) {
    if (!Rt(i)) continue;
    const o = _a(i.frame);
    if (o === null) continue;
    const s = { frame: o, value: t(i.value), easing: sv(i.easing) }, a = r ? av(i.handles) : null;
    a && (s.handles = a), n.set(o, s);
  }
  return [...n.keys()].sort((i, o) => i - o).map((i) => n.get(i));
}
function Dl(e, t) {
  const r = {};
  for (const [n, i] of t) {
    const o = Rt(e[n]) ? e[n] : {};
    r[n] = { value: i(o.value), keyframes: lv(o.keyframes, i, n === "position") };
  }
  return r;
}
function Ll(e) {
  const t = Rt(e) ? e : {}, r = _a(t.start), n = _a(t.in), i = _a(t.duration);
  return {
    start: r === null ? 0 : Math.max(0, r),
    in: n === null ? 0 : Math.max(0, n),
    duration: i === null ? null : Math.max(1, i)
  };
}
function pm(e) {
  const t = Rt(e) ? e : {}, r = wn(qt(t.x0, 0), 0, 1), n = wn(qt(t.y0, 0), 0, 1), i = wn(qt(t.x1, 1), 0, 1), o = wn(qt(t.y1, 1), 0, 1);
  return { x0: Math.min(r, i), y0: Math.min(n, o), x1: Math.max(r, i), y1: Math.max(n, o) };
}
function cv(e) {
  if (!Rt(e)) return null;
  if (e.kind === "port") return { kind: "port" };
  if (e.kind !== "file") return null;
  if (typeof e.filename == "string" && e.filename.trim()) {
    const t = typeof e.storage == "string" ? e.storage.trim().toLowerCase() : null;
    return {
      kind: "file",
      filename: e.filename.trim(),
      subfolder: typeof e.subfolder == "string" ? e.subfolder.trim().replace(/^[/\\]+|[/\\]+$/g, "") : "",
      storage: Q1.includes(t) ? t : "input"
    };
  }
  return typeof e.data_url == "string" && e.data_url.startsWith("data:image") ? { kind: "file", data_url: e.data_url } : null;
}
function uv(e) {
  const t = cv(e.source);
  if (!t) return null;
  const r = om.includes(e.placement) ? e.placement : "sky", n = r === "world", i = {
    id: e.id,
    placement: r,
    source: t,
    clip: Ll(e.clip),
    visible: ms(e.visible, !0),
    locked: ms(e.locked, !1),
    crop: pm(e.crop),
    ...Dl(e, n ? _o : So)
  };
  return n || (i.z_index = ri(e.z_index) ?? 0), t.kind === "port" && (i.handoff_overrides = dv(e.handoff_overrides, r)), i;
}
function dv(e, t) {
  const r = Array.isArray(e) ? e : [];
  return (t === "world" ? _o : So).map(([n]) => n).filter((n) => r.includes(n));
}
function fv(e, t) {
  const r = [];
  let n = !1;
  for (const s of Array.isArray(e) ? e : []) {
    const a = Rt(s) ? uv(s) : null;
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
  let o = hv(t, r);
  for (const s of r)
    if (s.id === null) {
      for (; i.has(`sticker_${o}`); ) o += 1;
      s.id = `sticker_${o}`, o += 1;
    }
  return { stickers: r, next: Math.min(o, ld) };
}
function pv(e) {
  const t = typeof e == "string" ? ev.exec(e) : null, r = t ? Number(t[1]) : 0;
  return r < ld ? r : 0;
}
function hm(e) {
  return e.reduce((t, r) => Math.max(t, pv(r.id)), 0) + 1;
}
function hv(e, t) {
  const r = ri(e), n = hm(t);
  return wn(r === null ? n : Math.max(r, n), 1, ld);
}
function mv(e) {
  if (!Rt(e)) return null;
  const t = eu.includes(e.projection) ? e.projection : eu[0];
  return { aspect: cd(e.aspect, 1), projection: t, visible: ms(e.visible, !0), ...Dl(e, Fl) };
}
function Xa(e) {
  return typeof e == "string" && e ? e : null;
}
function mm(e, t) {
  const r = new Map(e.map((n, i) => [t(n), i]));
  return e.filter((n, i) => r.get(t(n)) === i);
}
function gv(e) {
  if (!Rt(e) || Xa(e.id) === null || !om.includes(e.placement)) return null;
  const t = e.placement === "world", r = {};
  Rt(e.clip) && (r.clip = Ll(e.clip));
  for (const i of ["visible", "locked"])
    typeof e[i] == "boolean" && (r[i] = e[i]);
  Rt(e.crop) && (r.crop = pm(e.crop)), Object.assign(r, Dl(e, (t ? _o : So).filter(([i]) => Rt(e[i]))));
  const n = t ? null : ri(e.z_index);
  return n !== null && (r.z_index = n), Object.keys(r).length ? { id: e.id, placement: e.placement, ...r } : null;
}
function gm(e) {
  const t = Rt(e) ? Di(e.fps) : null;
  if (t === null || Xa(e.layer) === null) return null;
  const r = Array.isArray(e.deleted) ? [...new Set(e.deleted.filter((c) => Xa(c) !== null))] : [], n = (Array.isArray(e.stickers) ? e.stickers : []).map(gv).filter((c) => c !== null), i = mm(n, (c) => c.id).filter((c) => !r.includes(c.id)), o = Rt(e.scene) ? e.scene : {}, s = {};
  typeof o.visible == "boolean" && (s.visible = o.visible), Rt(o.clip) && (s.clip = Ll(o.clip));
  const a = { layer: e.layer, fps: t, deleted: r, stickers: i, scene: s };
  return typeof e.painting_visible == "boolean" && (a.painting_visible = e.painting_visible), !r.length && !i.length && !Object.keys(s).length && !("painting_visible" in a) ? null : a;
}
function yv(e) {
  const t = (Array.isArray(e) ? e : []).map(gm).filter((r) => r !== null);
  return mm(t, (r) => r.layer);
}
function Ja(e) {
  const t = Rt(e.timeline) ? e.timeline : {}, r = Rt(e.scene) ? e.scene : {}, { stickers: n, next: i } = fv(e.stickers, e.next_sticker_id);
  return {
    version: Z1,
    id: Xa(e.id),
    timeline: {
      fps: Di(t.fps) ?? 24,
      length: lm(t.length)
    },
    camera: mv(e.camera),
    scene: { clip: Ll(r.clip), visible: ms(r.visible, !0), ...Dl(r, Tl) },
    stickers: n,
    next_sticker_id: i,
    painting: bo(e.painting),
    painting_layer: Rt(e.painting_layer) ? structuredClone(e.painting_layer) : null,
    painting_visible: ms(e.painting_visible, !0),
    upstream: yv(e.upstream)
  };
}
function bv(e, t) {
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
function vv(e) {
  const t = Array.isArray(e) && e.length ? e[0] : null;
  if (!Rt(t)) return null;
  const r = wn(qt(t.hFOV_deg, 90), 1, 179), n = wn(qt(t.vFOV_deg, 60), 1, 179), i = Math.PI / 180;
  return {
    aspect: Math.tan(r * i * 0.5) / Math.tan(n * i * 0.5),
    rotation: { value: { yaw_deg: t.yaw_deg, pitch_deg: t.pitch_deg, roll_deg: t.roll_deg } },
    fov: { value: r }
  };
}
function Sv(e) {
  const t = Rt(e.assets) ? e.assets : {}, r = Array.isArray(e.stickers) ? e.stickers.filter(Rt) : [];
  return r.sort((n, i) => qt(n.z_index, 0) - qt(i.z_index, 0)), Ja({
    camera: vv(e.shots),
    stickers: r.map((n) => ({
      id: n.id,
      placement: "sky",
      source: bv(n, t),
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
function Gr(e) {
  if (e == null || typeof e == "string" && !e.trim()) return Ja({});
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
  return r === 1 ? Sv(t) : Ja(t);
}
const mc = {
  state: { painting_visible: !0 },
  camera: { projection: eu[0], visible: !0 },
  scene: { visible: !0 }
};
function gc(e, t) {
  return Object.fromEntries(Object.entries(e).filter(([r, n]) => !Object.hasOwn(t, r) || n !== t[r]));
}
function nu(e) {
  const t = gc(e, mc.state);
  return t.id === null && delete t.id, t.next_sticker_id === hm(e.stickers) && delete t.next_sticker_id, t.upstream.length || delete t.upstream, JSON.stringify({
    ...t,
    camera: e.camera && gc(e.camera, mc.camera),
    scene: gc(e.scene, mc.scene),
    stickers: e.stickers.map((r) => Object.fromEntries(Object.entries(r).filter(([n, i]) => n !== "handoff_overrides" || i.length)))
  });
}
function ts(e, t, r, n, i) {
  const o = {};
  for (const [s] of t)
    o[s] = {
      value: e[s].value,
      keyframes: e[s].keyframes.map((a) => ({ ...a, frame: r(n + a.frame) - i }))
    };
  return o;
}
function Za(e, t) {
  const r = t(e.start), n = t(e.start - e.in), i = e.duration === null ? null : t(e.start + e.duration) - r;
  return { clip: { start: r, in: r - n, duration: i }, anchor: e.start - e.in, newAnchor: n };
}
function Rl(e, t) {
  const r = Di(t);
  if (r === null)
    throw new Error(`Cannot rebase state_json to fps ${JSON.stringify(t)}; fps must be a positive number.`);
  const n = r / e.timeline.fps, i = (a) => ri(a * n), { length: o } = e.timeline, s = Za(e.scene.clip, i);
  return Ja({
    id: e.id,
    timeline: { fps: r, length: o === null ? null : Math.max(1, i(o)) },
    camera: e.camera === null ? null : { ...e.camera, ...ts(e.camera, Fl, i, 0, 0) },
    scene: { clip: s.clip, visible: e.scene.visible, ...ts(e.scene, Tl, i, s.anchor, s.newAnchor) },
    stickers: e.stickers.map((a) => {
      const { clip: l, anchor: c, newAnchor: d } = Za(a.clip, i), u = a.placement === "world" ? _o : So;
      return { ...a, clip: l, ...ts(a, u, i, c, d) };
    }),
    next_sticker_id: e.next_sticker_id,
    painting: e.painting,
    painting_layer: e.painting_layer,
    painting_visible: e.painting_visible,
    // The override records keep their own fps (docs/scene-state-v2.md "上流の上書き").
    upstream: e.upstream
  });
}
function _v(e, t) {
  const { fps: r } = t.timeline, n = r / e.fps, i = (l) => ri(l * n), o = new Map(t.stickers.map((l) => [l.id, l.clip.start - l.clip.in])), s = e.stickers.map((l) => {
    const c = (l.placement === "world" ? _o : So).filter(([h]) => Object.hasOwn(l, h));
    if (!Object.hasOwn(l, "clip")) {
      const h = o.get(l.id) ?? 0, w = ri(h * (e.fps / r));
      return { ...l, ...ts(l, c, i, w, h) };
    }
    const { clip: d, anchor: u, newAnchor: f } = Za(l.clip, i);
    return { ...l, clip: d, ...ts(l, c, i, u, f) };
  }), a = Object.hasOwn(e.scene, "clip") ? { ...e.scene, clip: Za(e.scene.clip, i).clip } : e.scene;
  return gm({ ...e, fps: r, stickers: s, scene: a });
}
function yc(e, t) {
  return e && typeof e == "object" && !Array.isArray(e) ? { ...e, ...t } : t;
}
function ym(e) {
  return Array.isArray(e) ? [...e] : e;
}
function bm(e, t) {
  return e.keyframes.find((r) => Math.abs(r.frame - t) <= wi);
}
function vm(e, t, r) {
  const n = e.keyframes.findIndex((o) => o.frame > t), i = n > 0 ? ym(e.keyframes[n - 1].easing) : [...sm];
  e.keyframes.splice(n < 0 ? e.keyframes.length : n, 0, { frame: t, value: r, easing: i });
}
function hn(e, t, r, n) {
  const i = e[t];
  if (!i.keyframes.length) {
    i.value = yc(i.value, n);
    return;
  }
  const o = bm(i, r);
  o ? o.value = yc(o.value, n) : vm(i, r, yc(Kt(e, t, r), n));
}
function wo(e) {
  return e.placement === "world" ? _o.map(([t]) => t) : e.placement === "sky" ? So.map(([t]) => t) : (e.clip ? Tl : Fl).map(([t]) => t);
}
function wv(e, t) {
  for (const r of wo(e))
    bm(e[r], t) || vm(e[r], t, Kt(e, r, t));
}
function xv(e) {
  const t = wo(e), r = /* @__PURE__ */ new Map();
  for (const n of t)
    for (const i of e[n].keyframes) r.set(i.frame, (r.get(i.frame) || 0) + 1);
  return [...r].sort((n, i) => n[0] - i[0]).map(([n, i]) => ({ frame: n, full: i === t.length }));
}
function bc(e, t) {
  return e.some((r) => r.full && r.frame === t);
}
function kv(e, t) {
  return `${e}f · ${(e / t).toFixed(2)}s`;
}
function Mv(e, t, r, n) {
  const i = new Set(r);
  for (const o of t) {
    const s = e[o];
    if (!s.keyframes.some((l) => i.has(l.frame))) continue;
    const a = Kt(e, o, n);
    s.keyframes = s.keyframes.filter((l) => !i.has(l.frame)), s.keyframes.length || (s.value = a);
  }
}
function Pv(e, t, r, n, i) {
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
function Sm(e, t, r) {
  const n = Math.min(...r), i = Math.max(...r);
  return t.flatMap((o) => e[o].keyframes.slice(0, -1).filter((s) => r.length > 1 ? s.frame >= n && s.frame < i : s.frame === n));
}
function Nv(e, t, r) {
  const n = Sm(e, t, r);
  if (!n.length) return null;
  const i = n.some((o) => JSON.stringify(o.easing) !== JSON.stringify(n[0].easing));
  return { easing: i ? null : n[0].easing, mixed: i };
}
function Av(e, t, r, n) {
  for (const i of Sm(e, t, r)) i.easing = ym(n);
}
function Cv(e, t) {
  e.start = Math.max(0, e.start + t);
}
function Iv(e, t) {
  const r = e.duration === null ? 1 / 0 : e.start + e.duration, n = Math.min(Math.max(t, e.start - e.in, 0), r - 1), i = n - e.start;
  e.start = n, e.in += i, e.duration !== null && (e.duration -= i);
}
function Ev(e, t, r) {
  const n = t >= r && (e.duration === null || e.start + e.duration < r);
  e.duration = n ? null : Math.max(1, t - e.start);
}
function Ov(e) {
  return e.start === 0 && e.in === 0 && e.duration === null;
}
function ru(e) {
  return wo(e).map((t) => e[t]);
}
function Qa(e) {
  return ru(e).some((t) => t.keyframes.length > 0) || !!e.clip && !Ov(e.clip);
}
function _m(e, { camera: t = !1 } = {}) {
  return [...t && e.camera ? [e.camera] : [], e.scene, ...e.stickers].some(Qa);
}
const Fv = 1e5;
function wm(e, { minimum: t, frames: r = 0, openClip: n = null, camera: i = !1 }) {
  let o = e.timeline.length ?? Math.max(t, r);
  if (i && e.camera)
    for (const s of ru(e.camera))
      for (const a of s.keyframes) o = Math.max(o, a.frame + 1);
  for (const s of [e.scene, ...e.stickers]) {
    const { clip: a } = s;
    o = Math.max(o, a.duration === null || a === n ? a.start + 1 : a.start + a.duration);
    for (const l of ru(s))
      for (const c of l.keyframes) o = Math.max(o, a.start - a.in + c.frame + 1);
  }
  return Number.isFinite(o) ? o : Fv;
}
function Tv(e) {
  return e > 0 ? Di(Math.min(e, sd)) : null;
}
function Dv(e) {
  return e === null ? null : Number.isNaN(e) ? void 0 : lm(Math.max(1, Math.min(e, ad)));
}
const vc = [1, 2, 5, 10, 20, 50, 100, 200, 500, 1e3, 2e3, 5e3], Lv = 2e3;
function Rv(e, t, r = 56) {
  const n = vc.find((o) => o * t >= r) || vc[vc.length - 1], i = [];
  for (let o = 0; o < e && i.length < Lv; o += n) i.push(o);
  return i;
}
function Vv(e, t) {
  const r = [];
  for (const n of e) {
    const i = r[r.length - 1];
    i && n - i.frames[i.frames.length - 1] < t ? i.frames.push(n) : r.push({ frames: [n] });
  }
  for (const n of r) n.frame = (n.frames[0] + n.frames[n.frames.length - 1]) / 2;
  return r;
}
let oa = { text: null, parsed: null };
function Rn(e) {
  return Number(e) === 180 ? 180 : 360;
}
function el(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function $v({
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
    painting: bo(null),
    painting_layer: null,
    ui_settings: el(n),
    active: { selected_sticker_id: null, selected_shot_id: null }
  };
}
function xm(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function zv(e) {
  if (!e || typeof e != "object") return {};
  const t = {};
  return Object.entries(e).forEach(([r, n]) => {
    t[r] = n && typeof n == "object" ? { ...n } : n;
  }), t;
}
function jv(e) {
  return Array.isArray(e) ? e.map((t) => {
    if (!t || typeof t != "object") return t;
    const r = { ...t };
    return r.crop && typeof r.crop == "object" && (r.crop = { ...r.crop }), r.initial_pose && typeof r.initial_pose == "object" && (r.initial_pose = { ...r.initial_pose }), r.visible = r.visible !== !1, r.locked = r.locked === !0, r;
  }) : [];
}
function Hv(e) {
  return Array.isArray(e) ? e.map((t) => od(t)) : [];
}
function Gv(e, t) {
  const r = Array.isArray(e) ? e : [];
  if (r.length === 0) return { shots: [], selectedShotId: null };
  const n = String(t || ""), i = r.find((s) => String((s == null ? void 0 : s.id) || "") === n) || r[0], o = String((i == null ? void 0 : i.id) || "") || null;
  return { shots: [i], selectedShotId: o };
}
function km(e, t = {}) {
  const r = {
    outputPreset: 2048,
    backgroundColor: "#00ff00",
    coverage: 360,
    sharedUiSettings: null,
    ...t
  }, n = $v(r), i = String(e || "").trim();
  if (!i) return n;
  try {
    let o = null;
    if (oa.text === i ? o = oa.parsed : (o = JSON.parse(i), oa = { text: i, parsed: o }), !o || typeof o != "object" || Array.isArray(o)) return n;
    const s = r.sharedUiSettings && typeof r.sharedUiSettings == "object" ? r.sharedUiSettings : null, a = {
      ...n,
      ...o,
      version: 1,
      projection_model: "pinhole_rectilinear",
      alpha_mode: "straight",
      assets: zv(o.assets),
      stickers: jv(o.stickers),
      shots: Hv(o.shots),
      painting: bo(o.painting),
      painting_layer: o.painting_layer && typeof o.painting_layer == "object" ? o.painting_layer : null,
      ui_settings: el(o.ui_settings),
      active: o.active && typeof o.active == "object" ? { ...o.active } : { ...n.active }
    };
    return s && (a.ui_settings = el({ ...a.ui_settings, ...s })), a.output_preset = xm(
      r.outputPreset,
      Number(a.output_preset || n.output_preset)
    ), a.bg_color = String(r.backgroundColor || a.bg_color || n.bg_color), a.coverage = Rn(r.coverage), delete a.editor_history, a;
  } catch {
    return oa = { text: i, parsed: null }, n;
  }
}
function Kv(e) {
  if (!e || typeof e != "object") return e;
  const t = JSON.parse(JSON.stringify(e));
  return delete t.editor_history, delete t.painting_layer, t;
}
function Wv(e, t) {
  const r = JSON.parse(t), n = JSON.stringify(r.painting) !== JSON.stringify(e.painting);
  return n || (r.painting_layer = e.painting_layer), e.next_sticker_id > r.next_sticker_id && (r.next_sticker_id = e.next_sticker_id), e.id && !r.id && (r.id = e.id), { state: r, paintingChanged: n };
}
function Uv(e, { paintCount: t, maskCount: r, width: n, height: i, nodeId: o }) {
  return t <= 0 && r <= 0 ? !1 : !e || typeof e != "object" || !String(e.revision || "").endsWith(`:${n}x${i}`) || t > 0 && !e.paint || r > 0 && !e.mask || t > 0 && e.paint.filename !== `pano_paint_${o}.png` || r > 0 && e.mask.filename !== `pano_mask_${o}.png`;
}
function Mm(e, t = {}) {
  const { outputPreset: r = 2048, backgroundColor: n = "#00ff00", coverage: i = 360, sharedUiSettings: o = null, active: s } = t, a = Di(t.fps);
  let l;
  try {
    l = Gr(e);
  } catch {
    l = Gr(null);
  }
  return a && a !== l.timeline.fps && (l = Rl(l, a)), {
    ...l,
    coverage: Rn(i),
    bg_color: n,
    output_preset: xm(r),
    ui_settings: el(o),
    active: { selected_sticker_id: null, selected_shot_id: null, ...s }
  };
}
function Bv(e, t) {
  const r = Rl(e, t), n = new Map(r.stickers.map((o) => [o.id, o]));
  e.timeline = r.timeline;
  const i = [[e.camera, r.camera], [e.scene, r.scene], ...e.stickers.map((o) => [o, n.get(o.id)])];
  for (const [o, s] of i)
    if (s) {
      o.clip && (o.clip = s.clip);
      for (const a of wo(o)) o[a].keyframes = s[a].keyframes;
    }
}
function Pm(e, t, r) {
  if (e.source.kind !== "port" || !((r == null ? void 0 : r.width) > 0 && (r == null ? void 0 : r.height) > 0)) return t.vFOV_deg;
  const n = Math.min(179, Math.max(0.1, t.hFOV_deg)) * wt, i = 2 * Math.atan(Math.tan(n * 0.5) * (r.height / r.width)) / wt;
  return Math.min(179, Math.max(0.1, i));
}
function ud(e, t, r = null) {
  const n = Ei(e, t);
  return { yaw_deg: n.yaw_deg, pitch_deg: n.pitch_deg, hFOV_deg: n.hFOV_deg, vFOV_deg: Pm(e, n, r), rot_deg: n.roll_deg };
}
const Yv = { yaw_deg: "direction", pitch_deg: "direction", rot_deg: "roll", hFOV_deg: "size", vFOV_deg: "size" };
function Vf(e, t) {
  return Object.fromEntries(t.filter((r) => e[r] !== void 0).map((r) => [r, e[r]]));
}
function qv(e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => !e[Yv[r]].keyframes.length));
}
function Nm(e, t, r) {
  const n = t - (e.clip.start - e.clip.in), i = Vf(r, ["yaw_deg", "pitch_deg"]), o = Vf(r, e.source.kind === "port" ? ["hFOV_deg"] : ["hFOV_deg", "vFOV_deg"]);
  Object.keys(i).length && hn(e, "direction", n, i), r.rot_deg !== void 0 && hn(e, "roll", n, r.rot_deg), Object.keys(o).length && hn(e, "size", n, o);
}
const Vl = ["position_x", "position_y", "position_z"], dd = "camera";
function Am(e, t) {
  const r = Ol(e, t);
  return od({
    id: dd,
    label: "Camera",
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    hFOV_deg: r.hFOV_deg,
    vFOV_deg: R1(r.hFOV_deg, e.aspect),
    position: r.position,
    locked: !1
  });
}
function Xv(e) {
  return Gr({
    version: 2,
    camera: {
      aspect: 16 / 9,
      position: { value: [...e.position] },
      rotation: { value: { yaw_deg: Ht(e.yaw_deg), pitch_deg: e.pitch_deg, roll_deg: 0 } },
      fov: { value: 90 }
    }
  }).camera;
}
function Jv(e) {
  return e - 360 * Math.round(e / 360);
}
function Zv(e, t, r, n) {
  const i = {};
  for (const o of ["yaw_deg", "pitch_deg", "roll_deg"])
    r[o] !== n[o] && (i[o] = n[o] + Jv(r[o] - n[o]));
  Object.keys(i).length && hn(e, "rotation", t, i), r.hFOV_deg !== n.hFOV_deg && hn(e, "fov", t, r.hFOV_deg), (r.hFOV_deg !== n.hFOV_deg || r.vFOV_deg !== n.vFOV_deg) && (e.aspect = Math.tan(r.hFOV_deg * wt * 0.5) / Math.tan(r.vFOV_deg * wt * 0.5)), r.position.some((o, s) => o !== n.position[s]) && hn(e, "position", t, [...r.position]);
}
function Qv(e, t) {
  const r = Kt(e, "position", t), n = Kt(e, "rotation", t);
  return {
    ...Object.fromEntries(Vl.map((i, o) => [i, r[o]])),
    yaw_deg: n.yaw_deg,
    pitch_deg: n.pitch_deg,
    roll_deg: n.roll_deg,
    hFOV_deg: Kt(e, "fov", t)
  };
}
function eS(e, t, r, n) {
  const i = Vl.indexOf(r);
  if (i >= 0) {
    const o = Kt(e, "position", t);
    o[i] = n, hn(e, "position", t, o);
  } else r === "hFOV_deg" ? hn(e, "fov", t, n) : hn(e, "rotation", t, { [r]: n });
}
function tS(e, t, r) {
  hn(e, "opacity", t - (e.clip.start - e.clip.in), r);
}
function nS(e, t) {
  const r = Ei(e, t);
  return {
    ...Object.fromEntries(Vl.map((n, i) => [n, r.position[i]])),
    yaw_deg: r.yaw_deg,
    pitch_deg: r.pitch_deg,
    roll_deg: r.roll_deg,
    scale: r.scale,
    opacity: r.opacity * 100
  };
}
function rS(e, t, r, n) {
  const i = t - (e.clip.start - e.clip.in), o = Vl.indexOf(r);
  if (o >= 0) {
    const s = Kt(e, "position", i);
    s[o] = n, hn(e, "position", i, s);
  } else r === "scale" ? hn(e, "scale", i, n) : r === "opacity" ? hn(e, "opacity", i, n / 100) : hn(e, "rotation", i, { [r]: n });
}
function iS(e, t, r) {
  const n = t - (e.clip.start - e.clip.in);
  for (const i of ["position", "rotation", "scale"])
    r[i] !== void 0 && hn(e, i, n, r[i]);
}
function oS(e, t) {
  const r = e.stickers.find((n) => n.id === t && n.placement === "world");
  r && (r.source.kind === "port" ? r.visible = !1 : e.stickers = e.stickers.filter((n) => n !== r));
}
function sS(e, t, r) {
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
function wa(e) {
  return { kind: "file", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function tl(e) {
  return e.data_url ? { type: "dataurl", value: e.data_url } : { type: "comfy_image", filename: e.filename, subfolder: e.subfolder, storage: e.storage };
}
function $l(e) {
  const t = `sticker_${e.next_sticker_id}`;
  return e.next_sticker_id += 1, t;
}
function fd(e, t, r, n) {
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
function aS(e, t, r) {
  const n = structuredClone(e);
  n.id = t, n.z_index = r, n.direction.value.yaw_deg = Ht(n.direction.value.yaw_deg + 8);
  for (const i of n.direction.keyframes) i.value.yaw_deg += 8;
  return n;
}
function iu(e) {
  return e.source.kind === "port" ? "Sticker input" : e.source.filename || e.id;
}
function Cm(e) {
  var t;
  return e != null && e.__panoSceneStateV2 ? (t = e.properties) == null ? void 0 : t.pano_editor_active : void 0;
}
function Im(e, t) {
  e != null && e.__panoSceneStateV2 && (e.properties ?? (e.properties = {}), e.properties.pano_editor_active = { ...t });
}
function $f(e, t) {
  return e != null && e.__panoSceneStateV2 ? nu(Gr(t)) : JSON.stringify(t);
}
const lS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
function cS() {
  return Array.from(crypto.getRandomValues(new Uint8Array(16)), (e) => lS[e & 63]).join("");
}
function Em(e, t, r, n) {
  const i = $f(e, t);
  return uS(e, i, r, n) ? null : !(e != null && e.__panoSceneStateV2) || t.id ? i : (t.id = cS(), $f(e, t));
}
function uS(e, t, r, { rebased: n = !1 } = {}) {
  if (t === r) return !0;
  if (!(e != null && e.__panoSceneStateV2)) return !1;
  try {
    const i = Gr(r);
    if (nu(i) === t) return !0;
    const { fps: o } = JSON.parse(t).timeline;
    return n && o !== i.timeline.fps && nu(Rl(i, o)) === t;
  } catch {
    return !1;
  }
}
const Sc = 0.15, dS = 0.01, fS = 1e-3, pS = 0.05, hS = 4, zf = 250, mS = 16, sr = 1, gS = Object.freeze({ x: 1, y: 0, z: 0, w: 0 });
function Kn(e, t, r = 1) {
  return [e[0] + t[0] * r, e[1] + t[1] * r, e[2] + t[2] * r];
}
function Sr(e, t) {
  return [e[0][t], e[1][t], e[2][t]];
}
function zl(e, t) {
  return e.map((r) => r[0] * t[0] + r[1] * t[1] + r[2] * t[2]);
}
function Li(e, t, r = 0) {
  const n = kn(e, t, r), i = Sr(n, 2);
  return { right: Sr(n, 0), up: Sr(n, 1), forward: [-i[0], -i[1], -i[2]] };
}
function yS(e, t, r = [0, 0, 0]) {
  return e === "6dof" ? t : { ...t, position: [...r] };
}
function ou(e, t, r = [0, 0, 0]) {
  return t === "3dof" ? { mode: t, position: [...r], moved: !1 } : { ...e, mode: t };
}
function bS(e, t, r = [0, 0, 0]) {
  return t || e.mode === "3dof" ? e : ou(e, "3dof", r);
}
function vS(e) {
  return Li(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0);
}
function SS(e) {
  return Kn(e.position, Li(e.yaw_deg, e.pitch_deg).forward, e.distance);
}
function ci(e, t) {
  return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
}
function ns(e, t) {
  return e[0] * t[0] + e[1] * t[1] + e[2] * t[2];
}
function pd(e, t) {
  return ns(ci(t, e.position), Li(e.yaw_deg, e.pitch_deg).forward);
}
function hd(e) {
  return Math.max(e, 1e-6) * pS;
}
function su(e, t, r = null, n = sr) {
  if (t) return t;
  const i = hd(n);
  if (r && pd(e, r) > 0) {
    const o = ci(r, e.position), s = Math.hypot(...o);
    return s >= i ? r : Kn(e.position, o, i / s);
  }
  return Kn(e.position, Li(e.yaw_deg, e.pitch_deg).forward, Math.max(e.distance, i));
}
function Om(e, t = sr) {
  return Math.max(e.distance, hd(t));
}
function Fm(e, t) {
  return !e || e.key !== t.key || e.view !== t.view || Math.hypot(t.x - e.x, t.y - e.y) > hS ? !1 : t.time - e.time < zf || e.cost > mS && t.time - e.wheelTime < zf;
}
function md(e, t, r) {
  const n = Math.tan(e.hFOV_deg * 0.5 * wt);
  return { tanX: n, tanY: n * r / t };
}
function Tm(e, t, r, n, i = SS(e)) {
  const o = e.roll_deg ?? 0, [s, a] = _S(t, r, o), l = Ht(e.yaw_deg + s / n * 360), c = Ie(e.pitch_deg - a / n * 360, -89.9, 89.9), d = kn(e.yaw_deg, e.pitch_deg, o), u = kn(l, c, o), f = ci(e.position, i), h = [0, 1, 2].map((g) => ns(Sr(d, g), f)), w = { ...e, yaw_deg: l, pitch_deg: c, position: Kn(i, zl(u, h)) };
  return { ...w, distance: pd(w, i) };
}
function _S(e, t, r) {
  const n = Math.cos(r * wt), i = Math.sin(r * wt);
  return [e * n + t * i, t * n - e * i];
}
function Dm(e, t, r, n, i, o = e.distance) {
  const { right: s, up: a } = vS(e), l = 2 * o * md(e, n, i).tanY / i;
  return { ...e, position: Kn(Kn(e.position, s, -t * l), a, r * l), distance: o };
}
function Lm(e, t, r, n = sr) {
  const i = ci(t, e.position), o = Math.hypot(...i);
  if (!(o > 0) || !r) return e;
  const s = Math.max(n, 1e-6), a = s * dS, l = r > 0 ? Math.min(Math.max(o * Sc, a), o - s * fS) : -Math.max(o * Sc / (1 - Sc), a);
  if (r > 0 && l <= 0) return e;
  const c = { ...e, position: Kn(e.position, i, l / o) };
  return { ...c, distance: Math.max(pd(c, t), hd(n)) };
}
function wS(e, t, r, n) {
  const { tanX: i, tanY: o } = md(e, r, n), s = Math.atan(Math.min(i, o)), a = Math.max(t.radius, 1e-6) / Math.sin(s) * 1.1, { forward: l } = Li(e.yaw_deg, e.pitch_deg);
  return { ...e, position: Kn(t.center, l, -a), distance: a };
}
function gd(e, t, r, n = null) {
  return Rm({
    quaternion: li(kn(e.yaw_deg, e.pitch_deg, e.roll_deg ?? 0)),
    fovY_deg: 2 * Math.atan(md(e, t, r).tanY) * tn,
    aspect: t / r
  }, e.position, e.distance, n);
}
function Rm(e, t, r, n = null) {
  const { center: i, radius: o } = n ?? { center: [0, 0, 0], radius: sr }, s = Math.hypot(i[0] - t[0], i[1] - t[1], i[2] - t[2]), a = Math.max(s + o, Math.hypot(...t) + 6 * o);
  return {
    ...e,
    position: [...t],
    near: Math.max(r * 0.01, o * 1e-4),
    far: a * 2
  };
}
function gs(e, t, r, n) {
  const { right: i, up: o, forward: s } = Vm(e), a = [t[0] - e.position[0], t[1] - e.position[1], t[2] - e.position[2]], l = a[0] * s[0] + a[1] * s[1] + a[2] * s[2];
  if (!(l > e.near)) return null;
  const c = Math.tan(e.fovY_deg * 0.5 * wt), d = c * e.aspect, u = a[0] * i[0] + a[1] * i[1] + a[2] * i[2], f = a[0] * o[0] + a[1] * o[1] + a[2] * o[2];
  return { x: r * 0.5 * (1 + u / l / d), y: n * 0.5 * (1 - f / l / c), z: l };
}
function Vm(e) {
  const t = fs(e.quaternion), r = Sr(t, 2);
  return { right: Sr(t, 0), up: Sr(t, 1), forward: r.map((n) => -n) };
}
function nl(e, t, r) {
  var i;
  const n = (i = t[0]) == null ? void 0 : i.kind;
  return !e.length || n !== "splat" && n !== "mesh" ? null : { kind: n, urls: e.map((o) => o ? r(o) : null) };
}
function xS({ sceneLinked: e, files: t, stickers: r }) {
  return e || !!t || r.some((n) => n.placement === "world");
}
function yd(e, t) {
  if (!e || !t.active) return null;
  const r = kS(t.clip_frame, e.urls.length), n = r === null ? null : e.urls[r + 1];
  return {
    kind: e.kind,
    url: r === null ? null : e.urls[r],
    urls: e.urls.filter(Boolean),
    // The next item of a batch (a MoGe VIDEO) loads ahead for playback.
    prefetch: n ? [n] : [],
    transform: au(t),
    itemQuaternion: e.kind === "splat" ? gS : { x: 0, y: 0, z: 0, w: 1 }
  };
}
function $m(e, t, r) {
  const n = t.stickers.findIndex((a) => a.source.kind === "port"), i = t.stickers[n];
  if (!e || (i == null ? void 0 : i.placement) !== "world") return null;
  const o = r.stickers[n], s = yd(e, o);
  return s && { ...s, id: i.id, opacity: o.opacity, value: o };
}
function zm(e, t) {
  const r = t.stickers.find((n) => n.source.kind === "port");
  return e && (r == null ? void 0 : r.placement) === "world" ? e.urls.filter(Boolean) : [];
}
function kS(e, t) {
  if (t === 1) return 0;
  const r = Math.floor(e + 0.5);
  return r >= 0 && r < t ? r : null;
}
function au(e) {
  return {
    position: [...e.position],
    quaternion: li(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    scale: e.scale
  };
}
function lu(e, t) {
  return Kn(e.position, zl(kn(e.yaw_deg, e.pitch_deg, e.roll_deg), t), e.scale);
}
function xa(e, t) {
  return e !== "splat" ? t : { min: [t.min[0], -t.max[1], -t.max[2]], max: [t.max[0], -t.min[1], -t.min[2]] };
}
function cu({ min: e, max: t }) {
  const r = [];
  for (const n of [e[0], t[0]]) for (const i of [e[1], t[1]]) for (const o of [e[2], t[2]]) r.push([n, i, o]);
  return r;
}
function uu(e) {
  if (!e.length) return null;
  const t = [0, 1, 2].map((o) => Math.min(...e.map((s) => s[o]))), r = [0, 1, 2].map((o) => Math.max(...e.map((s) => s[o]))), n = t.map((o, s) => (o + r[s]) / 2), i = Math.max(...e.map((o) => Math.hypot(o[0] - n[0], o[1] - n[1], o[2] - n[2])));
  return { center: n, radius: i };
}
function MS(e, t, r, n = []) {
  const i = [];
  t && e.scene.active && i.push(...cu(t).map((o) => lu(e.scene, o)));
  for (const o of r) i.push(...bd(o));
  for (const { box: o, value: s } of n) i.push(...cu(o).map((a) => lu(s, a)));
  return i;
}
function PS(e, t, r, n) {
  const i = (t.x1 - t.x0) * r, o = (t.y1 - t.y0) * n;
  return i > 0 && o > 0 ? {
    position: [...e.position],
    quaternion: li(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    rotation: kn(e.yaw_deg, e.pitch_deg, e.roll_deg),
    width: e.scale,
    height: e.scale * o / i
  } : null;
}
function bd(e) {
  const t = e.width / 2, r = e.height / 2;
  return [[-t, -r], [t, -r], [t, r], [-t, r]].map(([n, i]) => Kn(e.position, zl(e.rotation, [n, i, 0])));
}
function NS(e, t = null) {
  const { sticker: r, value: n, plane: i, item: o } = t ?? {};
  return (r == null ? void 0 : r.placement) !== "world" || !(n != null && n.active) ? e : i ? uu(bd(i)) : o != null && o.box ? uu(cu(xa(o.kind, o.box)).map((s) => lu(n, s))) : { center: [...n.position], radius: n.scale };
}
const AS = 2, CS = 0.5, IS = 30;
function jm(e, t) {
  const r = ci(t, e), n = Math.atan2(r[0], -r[2]) * tn, i = Math.atan2(r[1], Math.hypot(r[0], r[2])) * tn;
  return { yaw_deg: n + 0, pitch_deg: i, roll_deg: 0 };
}
function ES(e, t, r = null) {
  const n = (r == null ? void 0 : r.radius) > 0 ? r.radius : 0, i = n ? n * CS : AS, o = t ? [...t] : Kn(e.position, Li(e.yaw_deg, e.pitch_deg).forward, i), s = Math.hypot(...ci(o, e.position)), a = s > 0 ? jm(e.position, o) : { yaw_deg: e.yaw_deg, pitch_deg: e.pitch_deg, roll_deg: 0 }, l = 2 * Math.max(s, 1e-3) * Math.tan(IS * 0.5 * wt);
  return { position: o, rotation: a, scale: l };
}
function jf(e, t) {
  return e.map((r) => [0, 1, 2].map((n) => r[0] * t[0][n] + r[1] * t[1][n] + r[2] * t[2][n]));
}
function OS(e) {
  return [0, 1, 2].map((t) => Sr(e, t));
}
function Hf(e, t, r, n) {
  if (e === "translate") return { position: Kn(t.position, ci(n.position, r.position)) };
  if (e === "scale") return { scale: t.scale * RS(r.scale, n.scale) / r.scale };
  const i = jf(fs(n.quaternion), OS(fs(r.quaternion))), o = jf(i, kn(t.yaw_deg, t.pitch_deg, t.roll_deg)), { yawDeg: s, pitchDeg: a, rollDeg: l } = Qh(o);
  return Math.abs(a) <= FS ? { rotation: { yaw_deg: s + 0, pitch_deg: a, roll_deg: l + 0 } } : { rotation: { yaw_deg: t.yaw_deg, pitch_deg: a, roll_deg: TS(o, t.yaw_deg) } };
}
const FS = 89.9;
function TS(e, t) {
  const r = Sr(e, 0), n = Sr(e, 1), i = Math.cos(t * wt), o = Math.sin(t * wt);
  return Math.atan2(o * -n[2] - i * n[0], i * r[0] - o * -r[2]) * tn + 0;
}
const DS = { translate: 0.64, rotate: 0.85, scale: 0.64 };
function LS(e, t, r, n, i) {
  if (!gs(e, t, n, i)) return null;
  const { right: o, up: s, forward: a } = Vm(e), l = ci(t, e.position), c = ns(l, o), d = ns(l, s), u = ns(l, a), f = Math.tan(e.fovY_deg * 0.5 * wt), h = f * e.aspect, w = Math.hypot(c, d, u) * DS[r] * Math.min(1.9 * f, 7) / 4;
  if (!(u > w)) return { minX: 0, maxX: n, minY: 0, maxY: i };
  const g = (te) => {
    const I = w * Math.sqrt(te * te + u * u - w * w);
    return [(te * u - I) / (u * u - w * w), (te * u + I) / (u * u - w * w)];
  }, [m, _] = g(c), [ee, V] = g(d);
  return {
    minX: n * 0.5 * (1 + m / h),
    maxX: n * 0.5 * (1 + _ / h),
    minY: i * 0.5 * (1 - V / f),
    maxY: i * 0.5 * (1 - ee / f)
  };
}
function RS(e, [t, r, n]) {
  const i = [t, r, n].reduce((o, s) => Math.abs(s - e) > Math.abs(o - e) ? s : o, e);
  return Math.max(i, e * 1e-3, 1e-6);
}
function VS(e) {
  const t = 10 ** Math.floor(Math.log10(Math.max(e, 1e-6) / 5));
  return { step: t, size: t * 40, divisions: 40 };
}
function Hm(e, t) {
  const r = kn(e.yaw_deg, e.pitch_deg, e.roll_deg), n = Math.tan(e.hFOV_deg * 0.5 * wt) * t, i = n / e.aspect, o = (c, d, u) => Kn(e.position, zl(r, [c, d, u])), s = [o(-n, -i, -t), o(n, -i, -t), o(n, i, -t), o(-n, i, -t)], a = s.map((c) => [e.position, c]);
  s.forEach((c, d) => a.push([c, s[(d + 1) % 4]]));
  const l = [o(-n * 0.5, i * 1.1, -t), o(0, i * 1.5, -t), o(n * 0.5, i * 1.1, -t)];
  return a.push([l[0], l[1]], [l[1], l[2]], [l[2], l[0]]), a;
}
function $S(e, t, r, n, i, o = 6) {
  return t.some(([s, a]) => {
    const l = gs(e, s, n, i), c = gs(e, a, n, i);
    if (!l || !c) return !1;
    const d = c.x - l.x, u = c.y - l.y, f = Ie(((r.x - l.x) * d + (r.y - l.y) * u) / Math.max(d * d + u * u, 1e-12), 0, 1);
    return Math.hypot(l.x + d * f - r.x, l.y + u * f - r.y) <= o;
  });
}
function zS(e) {
  return e.slice(1).map((t, r) => [e[r], t]);
}
function jS(e, t, r = 2e3) {
  const { camera: n } = e;
  if (!n.position.keyframes.length) return [Kt(n, "position", 0)];
  const i = Math.max(t - 1, 0), o = Math.min(r, i + 1);
  return Array.from({ length: o }, (s, a) => {
    const l = o === 1 ? 0 : a * i / (o - 1);
    return Kt(n, "position", l);
  });
}
function HS(e, t, r, n, i) {
  const o = Math.max(0, e) * r, s = Math.max(0, t) * r, a = Math.min(1, n * r / Math.max(o, 1), i * r / Math.max(s, 1));
  return {
    width: Math.max(1, Math.round(o * a)),
    height: Math.max(1, Math.round(s * a))
  };
}
const Gm = 0.28;
function Km(e, t, r) {
  const n = t / r, i = Math.tan(e.hFOV_deg * 0.5 * wt);
  return {
    quaternion: li(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)),
    fovY_deg: 2 * Math.atan(i / n) * tn,
    aspect: n
  };
}
function rs(e) {
  const t = ai(e);
  return {
    quaternion: li(kn(t.yawDeg, t.pitchDeg, t.rollDeg)),
    fovY_deg: t.vFovDeg,
    aspect: t.aspect
  };
}
function Wm(e, t, r) {
  const n = Math.max(1, t.focalPx), { halfW: i, halfH: o } = id(r, n), s = t.x + t.w * 0.5, a = t.y + t.h * 0.5;
  return {
    rect: { x: s - i, y: a - o, w: i * 2, h: o * 2 },
    shot: {
      ...e,
      hFOV_deg: 2 * Math.atan(i / n) * tn,
      vFOV_deg: 2 * Math.atan(o / n) * tn
    }
  };
}
function Um(e, t, r) {
  const [[n, i, o], [s, a, l], [c, d, u]] = fs(e.quaternion), f = Math.tan(e.fovY_deg * 0.5 * wt), h = f * e.aspect;
  return {
    width: t,
    height: r,
    // Where dir lands, and its depth z along the view axis. Points closer than nearZ, behind the
    // camera included, are placed as if at nearZ; callers decide whether to keep them.
    project(w, g = 1e-4) {
      const m = $1(w), _ = n * m.x + s * m.y + c * m.z, ee = i * m.x + a * m.y + d * m.z, V = -(o * m.x + l * m.y + u * m.z), te = Math.max(V, g);
      return {
        x: t * 0.5 * (1 + _ / te / h),
        y: r * 0.5 * (1 - ee / te / f),
        z: V
      };
    },
    // The unit direction seen at the point (x, y).
    ray(w, g) {
      const m = (w / t * 2 - 1) * h, _ = (1 - g / r * 2) * f;
      return td(Sa({
        x: n * m + i * _ - o,
        y: s * m + a * _ - l,
        z: c * m + d * _ - u
      }));
    }
  };
}
function Bm(e, t, { media: r, zIndex: n, paintLayers: i, evaluated: o = Ns(e, t) }) {
  const s = [];
  e.stickers.forEach((a, l) => {
    const c = o.stickers[l];
    if (a.placement !== "sky") return;
    const d = a.source.kind === "port" && !a.visible;
    if (!c.active && !d) return;
    const u = r(a);
    if (!u) return;
    const f = Math.tan(c.hFOV_deg * 0.5 * wt), h = Math.tan(Pm(a, c, qm(u.media)) * 0.5 * wt), { crop: w } = a;
    s.push({
      kind: "sticker",
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: d ? Gm : c.opacity,
      zIndex: n(a),
      quaternion: li(kn(c.yaw_deg, c.pitch_deg, c.roll_deg)),
      // Crop edges on the image plane one unit ahead; the image's top edge is y0.
      rect: {
        x0: (2 * w.x0 - 1) * f,
        x1: (2 * w.x1 - 1) * f,
        y0: (1 - 2 * w.y1) * h,
        y1: (1 - 2 * w.y0) * h
      }
    });
  });
  for (const a of i) s.push({ kind: "erp", ...a });
  return s.sort((a, l) => a.zIndex - l.zIndex);
}
function Ym(e, t, r, { media: n, paintLayers: i, evaluated: o }) {
  const s = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !s.has(a.id) && s.set(a.id, a);
  return Bm(e, t, {
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
function qm(e) {
  return {
    width: Number(e.videoWidth || e.naturalWidth || e.width || 0),
    height: Number(e.videoHeight || e.naturalHeight || e.height || 0)
  };
}
function Xm(e, t, r, { media: n, evaluated: i = Ns(e, t) }) {
  const o = /* @__PURE__ */ new Map();
  for (const a of r)
    typeof (a == null ? void 0 : a.id) == "string" && a.id && !o.has(a.id) && o.set(a.id, a);
  const s = [];
  return e.stickers.forEach((a, l) => {
    const c = i.stickers[l];
    if (a.placement !== "world" || !c.active) return;
    const d = o.get(a.id), u = d ? n(d) : null;
    if (!u) return;
    const { width: f, height: h } = qm(u.media), w = PS(c, a.crop, f, h);
    w && s.push({
      id: a.id,
      media: u.media,
      revision: u.revision,
      source: u.source,
      opacity: c.opacity,
      position: w.position,
      quaternion: w.quaternion,
      rotation: w.rotation,
      width: w.width,
      height: w.height,
      crop: a.crop
    });
  }), s;
}
function GS({ canvas: e, onReady: t, onFailed: r, onUpdate: n = () => {
}, onSplats: i = () => {
}, onRestored: o = () => {
}, load: s = () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((a) => a.$) }) {
  let a = null, l = null, c = !1, d = 0;
  const u = () => {
    l = Gh(a.createThreeView({ onUpdate: n, onSplats: i, createCanvas: () => e }), "editor");
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
    resize(g, m) {
      return l && !f.lost ? l.resize(g, m) : null;
    },
    // Clears the canvas or a part of it (pano_three_view.js clear).
    clear(g, m) {
      l && !f.lost && l.clear(g, m);
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
    pick(g, m, _, ee, V) {
      return l && !f.lost ? l.pick(g, m, _, ee, V) : null;
    },
    // The same off a SPLAT's box only (pano_three_view.js pickSurface), or null.
    pickSurface(g, m, _, ee, V) {
      return l && !f.lost ? l.pickSurface(g, m, _, ee, V) : null;
    },
    // The id of the world Sticker under (x, y) in the last space frame (pano_three_view.js pickSticker),
    // or null.
    pickSticker(g, m, _, ee, V) {
      return l && !f.lost ? l.pickSticker(g, m, _, ee, V) : null;
    },
    // The pointer on the selected world Sticker's gizmo (pano_three_view.js gizmoPointer).
    gizmoPointer(g, m, _, ee, V, te) {
      return l && !f.lost ? l.gizmoPointer(g, m, _, ee, V, te) : null;
    },
    // A count that changes with what pick() hits (pano_three_view.js contentRevision).
    contentRevision() {
      return d + (l ? l.contentRevision() : 0);
    },
    dispose() {
      c = !0, e.removeEventListener("webglcontextlost", h), e.removeEventListener("webglcontextrestored", w), l == null || l.dispose(), l = null;
    }
  };
  function h(g) {
    g.preventDefault(), !(c || f.lost) && (f.lost = !0, f.ready = !1, l == null || l.dispose({ lost: !0 }));
  }
  function w() {
    c || !f.lost || queueMicrotask(() => {
      c || !f.lost || (l && (d += l.contentRevision() + 1), l == null || l.dispose(), l = null, f.lost = !1, a && (u(), f.ready = !0, o()));
    });
  }
  return e.addEventListener("webglcontextlost", h), e.addEventListener("webglcontextrestored", w), s().then((g) => {
    c || (a = g, !f.lost && (u(), f.ready = !0, t()));
  }).catch((g) => {
    console.error("[PanoramaStickers] three.js view is unavailable", g), f.failed = !0, r();
  }), f;
}
const Jm = "3D view unavailable. Check the browser console.";
function rl(e, t, r) {
  return Km({ yaw_deg: e.yaw, pitch_deg: e.pitch, roll_deg: 0, hFOV_deg: e.fov }, t, r);
}
function KS(e) {
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
const Zm = KS(
  () => import("./.lazy/pano_three_view-DiIyWkSe.js").then((e) => e.$).then((e) => Gh(e.createThreeView({ createCanvas: () => rn({ label: "three.node" }) }), "node"))
), ar = ["erp_image", "bg_erp", "bg_media"], vd = ["sticker_image", "sticker"], Qm = ["scene"], WS = {
  background: ar,
  "external-sticker": vd,
  scene: Qm
};
function eg(e) {
  return (e == null ? void 0 : e.origin_id) == null ? void 0 : `${e.origin_id}:${e.origin_slot ?? 0}`;
}
function jl(e) {
  const t = {};
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).forEach((r, n) => {
    const i = eg(e.graph ? e.getInputLink(n) : null);
    i && (t[String((r == null ? void 0 : r.name) || "")] = i);
  }), t;
}
function tg(e, t) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).some((r, n) => {
    var i;
    return t.includes(String((r == null ? void 0 : r.name) || "")) && !!e.graph && ((i = e.getInputLink(n)) == null ? void 0 : i.type) === "VIDEO";
  });
}
function Gf(e, t) {
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
function ng(e, t) {
  var i;
  const r = String(t).split(":");
  let n = e;
  for (let o = 0; ; o += 1) {
    const s = (Array.isArray(n == null ? void 0 : n.nodes) ? n.nodes : []).find((a) => String(a == null ? void 0 : a.id) === r[o]);
    if (!s || o === r.length - 1) return { graph: n, entry: s };
    n = (((i = e == null ? void 0 : e.definitions) == null ? void 0 : i.subgraphs) || []).find((a) => (a == null ? void 0 : a.id) === s.type);
  }
}
function US(e, t) {
  const { graph: r, entry: n } = ng(e, t), i = new Map((Array.isArray(r == null ? void 0 : r.links) ? r.links : []).map((s) => Array.isArray(s) ? [s[0], { origin_id: s[1], origin_slot: s[2] }] : [s == null ? void 0 : s.id, s])), o = {};
  for (const s of Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs : []) {
    const a = eg(i.get(s == null ? void 0 : s.link));
    a && (o[String((s == null ? void 0 : s.name) || "")] = a);
  }
  return o;
}
const rg = [...ar, ...vd, ...Qm], BS = 256, qi = /* @__PURE__ */ new Map(), _c = /* @__PURE__ */ new WeakMap();
let ig = () => null;
function og(e) {
  return _c.has(e) || _c.set(e, JSON.stringify(e)), _c.get(e);
}
function YS(e) {
  ig = e;
}
function il(e, t) {
  const r = og(e);
  qi.delete(r), qi.set(r, t), qi.size > BS && qi.delete(qi.keys().next().value);
}
function Qt(e, t) {
  var o;
  const r = e ? ig(e) : null;
  if (!r) return !0;
  const n = jl(e);
  let i = qi.get(og(r));
  if (i)
    il(r, i);
  else {
    if (!e.graph || !((o = e.inputs) != null && o.some((s) => rg.includes(s == null ? void 0 : s.name)))) return !0;
    il(r, n), i = n;
  }
  return WS[t].every((s) => i[s] === n[s]);
}
const ol = /* @__PURE__ */ new WeakSet();
async function du(e, t) {
  if (ol.has(e)) return null;
  let r;
  try {
    r = await e.fetchApi(t);
  } catch {
    return null;
  }
  const n = await r.json().catch(() => {
  });
  return n === void 0 && ol.add(e), r.ok && n !== void 0 ? n : null;
}
function sg(e, t) {
  var o, s, a, l, c;
  const r = (a = (s = (o = e == null ? void 0 : e.workflow) == null ? void 0 : o.extra_data) == null ? void 0 : s.extra_pnginfo) == null ? void 0 : a.workflow, { entry: n } = ng(r, t), i = (l = e == null ? void 0 : e.outputs) == null ? void 0 : l[t];
  return !i || !((c = n == null ? void 0 : n.inputs) != null && c.some((d) => rg.includes(d == null ? void 0 : d.name))) ? null : { output: i, inputs: US(r, t) };
}
const ka = /* @__PURE__ */ new Map();
function qS(e) {
  const t = /* @__PURE__ */ new Set();
  e.addEventListener("executed", ({ detail: r }) => {
    Object.keys((r == null ? void 0 : r.output) || {}).some((n) => n.startsWith("pano_")) && t.add(r.prompt_id);
  });
  for (const r of ["execution_success", "execution_error", "execution_interrupted"])
    e.addEventListener(r, async ({ detail: n }) => {
      if (r === "execution_success" && ka.clear(), !t.delete(n == null ? void 0 : n.prompt_id)) return;
      const i = await du(e, `/jobs/${encodeURIComponent(n.prompt_id)}`);
      for (const o of Object.keys((i == null ? void 0 : i.outputs) || {})) {
        const s = sg(i, o);
        s && il(s.output, s.inputs);
      }
    });
}
const XS = 5;
function JS(e, t) {
  const r = `workflow_id=${encodeURIComponent(t)}&status=completed,failed,cancelled&limit=${XS}`, n = du(e, `/jobs?${r}`).then((s) => (s == null ? void 0 : s.jobs) || []), i = /* @__PURE__ */ new Map(), o = (s) => (i.has(s) || i.set(s, du(e, `/jobs/${encodeURIComponent(s)}`)), i.get(s));
  return {
    async lastNodeOutput(s, a) {
      var c, d, u, f;
      const l = String(s.id);
      for (const { id: h } of await n) {
        if (!a()) return null;
        const w = await o(h);
        if ((c = w == null ? void 0 : w.outputs) != null && c[l])
          return ((f = (u = (d = w.workflow) == null ? void 0 : d.prompt) == null ? void 0 : u[l]) == null ? void 0 : f.class_type) !== s.comfyClass ? null : sg(w, l);
      }
      return null;
    }
  };
}
function ZS(e) {
  var r, n;
  return (((n = (r = e.extensionManager) == null ? void 0 : r.workflow) == null ? void 0 : n.openWorkflows) || []).some((i) => {
    var o, s;
    return ((o = i == null ? void 0 : i.activeState) == null ? void 0 : o.id) === e.rootGraph.id && ((s = i.changeTracker) == null ? void 0 : s.nodeOutputs);
  });
}
let Gi = null;
async function QS(e, t, r) {
  var a;
  const n = String(e.id), i = t.rootGraph.id, o = () => e.graph === t.rootGraph && !t.nodeOutputs[n];
  if (!o() || ol.has(r) || (a = ka.get(i)) != null && a.has(n) || ZS(t)) return null;
  (Gi == null ? void 0 : Gi.workflowId) !== i && (Gi = { workflowId: i, history: JS(r, i) }, queueMicrotask(() => {
    Gi = null;
  }));
  const s = await Gi.history.lastNodeOutput(e, o);
  return o() ? s ? (il(s.output, s.inputs), t.nodeOutputs[n] = s.output, s.output) : (ol.has(r) || ka.set(i, (ka.get(i) || /* @__PURE__ */ new Set()).add(n)), null) : null;
}
function Kf(e, t, r, n = ar) {
  const i = String(t ?? "").trim().toLowerCase();
  if (!(t === 1 || i === "input")) return !1;
  const s = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs[Number(r)] : null;
  return n.includes(String((s == null ? void 0 : s.name) || ""));
}
const Wf = /\.(mp4|webm|mov|m4v|mkv)$/i;
function Ma(e) {
  if (typeof e == "string") {
    const t = e.includes("?") ? e.slice(e.indexOf("?") + 1) : "";
    return Wf.test(new URLSearchParams(t).get("filename") || e.split("?")[0]);
  }
  return Wf.test(String((e == null ? void 0 : e.filename) || ""));
}
const wc = /* @__PURE__ */ new WeakMap();
function e_(e) {
  return [e, e == null ? void 0 : e.ui].some((t) => Object.values(t || {}).some((r) => Array.isArray(r) && r.some((n) => (n == null ? void 0 : n.type) === "input")));
}
function fu(e) {
  return e_(e) ? (wc.has(e) || wc.set(e, Math.random().toString(36).slice(2, 10)), wc.get(e)) : "run";
}
function ag(e, t, r) {
  const n = JSON.stringify(r ?? null);
  return e.get(t) === n ? !0 : (e.set(t, n), !1);
}
function t_(e, t, r) {
  const n = /* @__PURE__ */ new Set(), i = (o, s) => {
    for (const a of s) {
      const l = r(o, a);
      (l == null ? void 0 : l.id) == null || n.has(String(l.id)) || (n.add(String(l.id)), i(l, (Array.isArray(l.inputs) ? l.inputs : []).map((c, d) => d)));
    }
  };
  return i(e, t), n;
}
function Sd(e, t = [], r = null) {
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
function n_({
  documentRef: e = typeof document < "u" ? document : null,
  src: t = "",
  onFrame: r = null
} = {}) {
  const n = Ps(e, "looping-preview");
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
  let h = !1;
  const w = () => {
    h = !0, i();
  };
  n.muted = !0, n.loop = !0, n.autoplay = !1, n.preload = "auto", n.playsInline = !0, n.crossOrigin = "anonymous", n.addEventListener("loadedmetadata", c, { once: !0 }), n.addEventListener("loadeddata", c, { once: !0 }), a || n.addEventListener("timeupdate", d), n.addEventListener("play", u), n.addEventListener("pause", f), n.addEventListener("error", w), n.src = t, n.load();
  const g = () => {
    o || h || !n.paused || Promise.resolve(n.play()).catch(() => {
    });
  }, m = () => {
    !o && !n.paused && n.pause();
  };
  return {
    video: n,
    destroy: () => {
      var ee, V;
      o || (o = !0, s && typeof n.cancelVideoFrameCallback == "function" && (n.cancelVideoFrameCallback(s), s = 0), n.removeEventListener("loadedmetadata", c), n.removeEventListener("loadeddata", c), n.removeEventListener("timeupdate", d), n.removeEventListener("play", u), n.removeEventListener("pause", f), n.removeEventListener("error", w), n.pause(), (ee = n.removeAttribute) == null || ee.call(n, "src"), (V = n.load) == null || V.call(n));
    },
    failed: () => h,
    play: g,
    pause: m,
    toggle() {
      n.paused ? g() : m();
    },
    get playing() {
      return !o && !n.paused && !n.ended;
    }
  };
}
const ys = /* @__PURE__ */ new WeakMap(), lg = {
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
function As(e, t) {
  if (!e || typeof e != "object") return null;
  let r = ys.get(e);
  return r || (r = {}, ys.set(e, r)), r[t] ?? (r[t] = lg[t]());
}
function Hl(e, t) {
  var r;
  return e && typeof e == "object" && ((r = ys.get(e)) == null ? void 0 : r[t]) || null;
}
const sl = (e) => As(e, "editorSession"), St = (e) => As(e, "nodeSurface"), Lr = (e) => As(e, "previewNode"), Mn = (e) => As(e, "mediaCache"), Hn = (e) => As(e, "stateSync"), r_ = (e) => Hl(e, "editorSession"), cg = (e) => Hl(e, "nodeSurface"), ug = (e) => Hl(e, "previewNode");
function xc(e) {
  var t;
  e && (e.onload = null, e.onerror = null, (t = e.removeAttribute) == null || t.call(e, "src"));
}
const i_ = {
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
      xc(o == null ? void 0 : o.img), xc(o == null ? void 0 : o.pendingImg);
    }), (n = (r = (t = e.ownOutputVideo) == null ? void 0 : t.player) == null ? void 0 : r.destroy) == null || n.call(r), xc((i = e.studioRunImage) == null ? void 0 : i.image);
  },
  stateSync() {
  }
};
function o_(e, t) {
  const r = Hl(e, t);
  if (r)
    try {
      i_[t](r);
    } finally {
      delete ys.get(e)[t];
    }
}
function s_(e) {
  for (const t of Object.keys(lg))
    try {
      o_(e, t);
    } catch (r) {
      console.error(`[PanoramaSuite] disposing ${t} of a node failed`, r);
    }
  e && typeof e == "object" && ys.delete(e);
}
function gi(e, t) {
  if (!t || typeof t != "object") return "";
  const r = String(t.filename || "");
  if (!r) return "";
  const n = new URLSearchParams();
  n.set("filename", r), n.set("type", String(t.type || "output")), t.subfolder && n.set("subfolder", String(t.subfolder));
  const i = `/view?${n.toString()}`;
  return typeof (e == null ? void 0 : e.apiURL) == "function" ? e.apiURL(i) : i;
}
function a_(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Uf(e, t, r = null) {
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
  return !n && r != null && (n = a_(e == null ? void 0 : e.graph, r)), n;
}
function l_(e) {
  const t = String(e || "").trim();
  return !!t && (/^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:"));
}
function c_(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  return n.length ? { filename: String(n.pop() || "").trim(), subfolder: n.join("/") } : { filename: "", subfolder: "" };
}
function u_(e) {
  const t = String(e || "");
  let r = 2166136261;
  for (const n of t)
    r ^= n.codePointAt(0) || 0, r = Math.imul(r, 16777619);
  return String(r >>> 0);
}
function dg({ app: e, api: t, ImageCtor: r, imageState: n } = {}) {
  const i = (I) => {
    if (!I) return "";
    if (typeof I == "string") return String(I || "").trim();
    if (Array.isArray(I)) {
      if (I.length === 0) return "";
      if (I.length === 1) return i(I[0]);
      const X = String(I[0] || "").trim();
      if (X)
        return gi(t, {
          filename: X,
          subfolder: String(I[1] || "").trim(),
          type: String(I[2] || "output").trim() || "output"
        });
      for (const j of I) {
        const W = i(j);
        if (W) return W;
      }
      return "";
    }
    return typeof (I == null ? void 0 : I.src) == "string" && I.src ? I.src : typeof (I == null ? void 0 : I.url) == "string" && I.url ? I.url : gi(t, I);
  }, o = (I) => {
    if (!I || typeof I != "object") return "";
    const X = String(I.type || "").trim().toLowerCase();
    if (X === "dataurl") return String(I.value || "");
    if (X !== "comfy_image") return "";
    const j = String(I.filename || "").trim();
    return j ? gi(t, {
      filename: j,
      subfolder: String(I.subfolder || ""),
      type: String(I.storage || "input")
    }) : "";
  }, s = (I) => {
    const X = e == null ? void 0 : e.nodeOutputs;
    if (!X || I == null) return null;
    const j = String(I);
    return X instanceof Map ? X.get(I) || X.get(j) || X.get(Number(j)) || null : X[I] || X[j] || null;
  }, a = (I, X) => {
    var W;
    const j = s(I == null ? void 0 : I.id);
    return Array.isArray((W = j == null ? void 0 : j.ui) == null ? void 0 : W[X]) ? j.ui[X] : Array.isArray(j == null ? void 0 : j[X]) ? j[X] : [];
  }, l = (I, X) => {
    const j = s(I == null ? void 0 : I.id);
    return j != null && j.ui && Object.prototype.hasOwnProperty.call(j.ui, X) ? j.ui[X] : j && Object.prototype.hasOwnProperty.call(j, X) ? j[X] : null;
  }, c = (I, X) => {
    const j = l(I, "pano_sticker_input_state_hash"), W = Array.isArray(j) ? j[0] : j;
    return String(W ?? "").trim() || u_(X);
  }, d = (I) => {
    const X = [], j = /* @__PURE__ */ new Set();
    for (const W of I || []) {
      const ie = i(W);
      !ie || j.has(ie) || (j.add(ie), X.push(ie));
    }
    return X;
  }, u = (I, X) => {
    var ie;
    const j = [];
    Array.isArray(I == null ? void 0 : I.images) && I.images.length && j.push(I.images), Array.isArray((ie = I == null ? void 0 : I.ui) == null ? void 0 : ie.images) && I.ui.images.length && j.push(I.ui.images);
    const W = [];
    for (const pe of j)
      X >= 0 && X < pe.length && W.push(pe[X]), W.push(...pe);
    return W;
  }, f = (I, X) => {
    var H;
    const j = String(X || "").trim();
    if (!j) return { src: "", sourceType: "", inputName: "" };
    const ie = (Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs : []).findIndex((T) => String((T == null ? void 0 : T.name) || "") === j);
    if (ie < 0) return { src: "", sourceType: "", inputName: j };
    const pe = I.graph ? I.getInputLink(ie) : null;
    if ((pe == null ? void 0 : pe.origin_id) == null) return { src: "", sourceType: "", inputName: j };
    const q = pe.origin_id, de = Uf(I, ie, q);
    if (!de) return { src: "", sourceType: "", inputName: j };
    const ae = Number(pe.origin_slot ?? 0);
    let ve = [];
    try {
      ve = typeof (e == null ? void 0 : e.getNodeImageUrls) == "function" ? e.getNodeImageUrls(de) || [] : [];
    } catch {
      ve = [];
    }
    if (Array.isArray(ve) && ve.length) {
      const T = [];
      ae >= 0 && ae < ve.length && T.push(ve[ae]), T.push(...ve);
      const K = d(T.filter((fe) => !Ma(fe)));
      if (K.length)
        return { src: K[0], srcCandidates: K, sourceType: "appNodeImageUrls", inputName: j };
    }
    const G = s((de == null ? void 0 : de.id) ?? q), A = d(u(G, ae).filter((T) => !Ma(T))).map((T) => `${T}&pano_src=${fu(G)}`);
    if (A.length)
      return { src: A[0], srcCandidates: A, sourceType: "nodeOutputs", inputName: j };
    const z = Array.isArray(de == null ? void 0 : de.imgs) ? de.imgs : [];
    if (z.length) {
      const T = [];
      ae >= 0 && ae < z.length && T.push(z[ae]), T.push(...z);
      const K = d(T);
      if (K.length)
        return { src: K[0], srcCandidates: K, sourceType: "nodeImgs", inputName: j };
    }
    const M = (H = de == null ? void 0 : de.widgets) == null ? void 0 : H.find((T) => String((T == null ? void 0 : T.name) || "").toLowerCase() === "image");
    if (M) {
      let T = i(M.value);
      if (T && !T.includes("/") && !T.includes(":") && (de.comfyClass === "LoadImage" || de.type === "LoadImage") && (T = typeof (t == null ? void 0 : t.apiURL) == "function" ? t.apiURL(`/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`) : `/view?filename=${encodeURIComponent(T)}&type=input&subfolder=`), T) return { src: T, sourceType: "widget", inputName: j };
    }
    return { src: "", sourceType: "", inputName: j };
  }, h = (I, X = []) => {
    var W;
    const j = Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs : [];
    for (const ie of X) {
      const pe = j.findIndex((ve) => String((ve == null ? void 0 : ve.name) || "") === ie), q = pe >= 0 && I.graph ? I.getInputLink(pe) : null;
      if ((q == null ? void 0 : q.origin_id) == null) continue;
      const de = s(((W = Uf(I, pe, q.origin_id)) == null ? void 0 : W.id) ?? q.origin_id), ae = (Array.isArray(de == null ? void 0 : de.images) ? de.images : []).find(Ma);
      return ae ? `${gi(t, ae)}&pano_src=${fu(de)}` : "";
    }
    return "";
  }, w = (I, X = []) => {
    const j = Array.isArray(X) ? X : [X];
    for (const W of j) {
      const ie = f(I, W);
      if (String((ie == null ? void 0 : ie.src) || "").trim()) return ie;
    }
    return { src: "", sourceType: "", inputName: "" };
  }, g = (I) => {
    const X = String(I || "").trim();
    if (!X) return [];
    if (l_(X)) return [X];
    const { filename: j, subfolder: W } = c_(X);
    return j ? d([
      gi(t, { filename: j, subfolder: W, type: "temp" }),
      gi(t, { filename: j, subfolder: W, type: "output" }),
      gi(t, { filename: j, subfolder: W, type: "input" }),
      X
    ]) : [X];
  };
  return {
    assetSource: o,
    clearFailedLinkedImages: (I) => {
      var X;
      try {
        (X = Mn(I)) == null || X.linkedImages.forEach((j, W, ie) => {
          var pe;
          j != null && j.img && ((pe = n == null ? void 0 : n.isImageLoadFailed) != null && pe.call(n, j.img)) && ie.delete(W);
        });
      } catch {
      }
    },
    externalStateHash: c,
    invalidateUiImage: (I, X) => {
      var j;
      (j = I == null ? void 0 : I.delete) == null || j.call(I, `__ui__${String(X || "")}`);
    },
    linkedValue: (I, X) => {
      var q, de, ae, ve;
      const j = String(X || ""), W = Array.isArray(I == null ? void 0 : I.inputs) ? I.inputs.findIndex((G) => String((G == null ? void 0 : G.name) || "") === j) : -1, ie = W >= 0 && I.graph ? I.getInputLink(W) : null;
      if (ie) {
        const G = s(ie.origin_id), A = [
          G == null ? void 0 : G.output,
          G == null ? void 0 : G.result,
          (q = G == null ? void 0 : G.data) == null ? void 0 : q.output,
          (de = G == null ? void 0 : G.data) == null ? void 0 : de.result,
          (ae = G == null ? void 0 : G.ui) == null ? void 0 : ae.output,
          (ve = G == null ? void 0 : G.ui) == null ? void 0 : ve.result
        ];
        for (const z of A) {
          if (!Array.isArray(z)) continue;
          const M = z[Number(ie.origin_slot || 0)];
          if (typeof M == "string" && M.trim()) return M;
        }
      }
      const pe = Array.isArray(I == null ? void 0 : I.widgets) ? I.widgets.find((G) => String((G == null ? void 0 : G.name) || "") === j) : null;
      return String((pe == null ? void 0 : pe.value) || "");
    },
    linkedVideoFile: h,
    loadPreferredExactLinkedImage: (I, X = [], j = null, W = "") => {
      var Y;
      const ie = Array.isArray(X) ? X : [X], pe = w(I, ie), de = (Array.isArray(pe == null ? void 0 : pe.srcCandidates) && pe.srcCandidates.length ? pe.srcCandidates : [pe == null ? void 0 : pe.src]).map((k) => String(k || "").trim()).filter(Boolean);
      if (!de.length) return null;
      const ae = d(de.flatMap((k) => g(k)));
      if (!ae.length) return null;
      const ve = Mn(I).linkedImages, G = String(W || ie.join("|") || "image_exact"), A = de.join(`
`), z = ve.get(G);
      if (z && z.srcRaw === A && z.img) return z.img;
      const M = r || globalThis.Image;
      if (typeof M != "function") return null;
      const H = new M();
      (Y = n == null ? void 0 : n.markImageLoading) == null || Y.call(n, H, A);
      const T = { srcRaw: A, resolvedSrc: "", img: H };
      ve.set(G, T);
      let K = -1;
      const fe = (k) => {
        var ne, ue, _e;
        k === "ready" ? (ne = n == null ? void 0 : n.markImageReady) == null || ne.call(n, H, A) : (ue = n == null ? void 0 : n.markImageFailed) == null || ue.call(n, H, A), j == null || j(H), (_e = I.setDirtyCanvas) == null || _e.call(I, !0, !0);
      }, se = () => {
        if (K += 1, K >= ae.length) {
          fe("failed");
          return;
        }
        T.resolvedSrc = ae[K], H.src = T.resolvedSrc;
      };
      return H.onload = () => fe("ready"), H.onerror = () => {
        if (K + 1 < ae.length) {
          se();
          return;
        }
        fe("failed");
      }, se(), H;
    },
    output: s,
    resolvePreferredExactLinkedSource: w,
    source: i,
    uiImage: (I, X, j, W = null) => {
      var G, A, z;
      const ie = a(I, X)[0] || null, pe = i(ie);
      if (!pe) return null;
      const q = `__ui__${X}`, de = (G = j == null ? void 0 : j.get) == null ? void 0 : G.call(j, q);
      if (de && de.__panoSrc === pe) return de;
      const ae = r || globalThis.Image;
      if (typeof ae != "function") return null;
      const ve = new ae();
      return ve.__panoSrc = pe, (A = n == null ? void 0 : n.markImageLoading) == null || A.call(n, ve, pe), ve.onload = () => {
        var M;
        (M = n == null ? void 0 : n.markImageReady) == null || M.call(n, ve, pe), W == null || W(ve);
      }, ve.onerror = () => {
        var M;
        (M = n == null ? void 0 : n.markImageFailed) == null || M.call(n, ve, pe), W == null || W(ve);
      }, ve.src = pe, (z = j == null ? void 0 : j.set) == null || z.call(j, q, ve), ve;
    },
    uiList: a,
    uiValue: l
  };
}
const d_ = 1e-3;
function _d(e, t, r, n) {
  if (!vo(e, t)) return null;
  const i = t - (e.start - e.in);
  if (n.kind === "IMAGE") {
    const s = Math.floor(i + 0.5);
    return s >= 0 && s < n.frames ? (s + 0.5) / n.fps : null;
  }
  const o = i / r + Math.max(d_ / r, Number(n.pts_tolerance) || 0);
  return o >= 0 && o < n.duration ? o : null;
}
function fg(e, t, r) {
  return e.duration !== null ? 0 : Math.round(e.start - e.in + (r.kind === "IMAGE" ? r.frames : r.duration * t));
}
function f_(e, t) {
  return Math.floor(e * t.fps);
}
function wd(e, t) {
  var r;
  return (e == null ? void 0 : e.src) || ((r = e == null ? void 0 : e.frames) == null ? void 0 : r.join(`
`)) || t;
}
const Bf = 4;
function xd({ createImage: e, onLoad: t }) {
  let r = [];
  const n = /* @__PURE__ */ new Map();
  let i = null;
  function o(s) {
    return n.has(s) || n.set(s, e(r[s], t)), n.get(s);
  }
  return {
    picture(s, a, l, c) {
      if ((s.length !== r.length || s.some((f, h) => f !== r[h])) && (r = s, n.clear(), i = null), a === null) return null;
      const d = f_(a, l);
      for (let f = d; f < Math.min(r.length, d + Bf + 1); f += 1) o(f);
      for (const f of n.keys())
        (f < d || f > d + Bf) && f !== i && n.delete(f);
      const u = n.get(d);
      return u != null && u.complete && u.naturalWidth > 0 && (i !== null && i !== d && n.delete(i), i = d), i === null ? c : n.get(i);
    }
  };
}
function pg({
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
const Pa = "sticker_image_1", hg = "external_image", po = 0;
function Na(e, t, r) {
  const n = Math.min(179, Math.max(0.1, Number(e || 30))), i = Math.max(1, Number(r || 1)) / Math.max(1, Number(t || 1)), o = 2 * Math.atan(Math.tan(n * Math.PI / 180 * 0.5) * i) * 180 / Math.PI;
  return Math.min(179, Math.max(0.1, o));
}
function kc(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Math.trunc(t) : 0;
}
function ii(e) {
  const t = Array.isArray(e == null ? void 0 : e.stickers) ? e.stickers : [];
  return (e == null ? void 0 : e.version) === 2 ? t.filter((r) => r.placement === "sky") : t;
}
function pu(e, t = po) {
  return (e == null ? void 0 : e.version) !== 2 ? ii(e) : ii(e).map((r) => ({
    id: r.id,
    z_index: r.z_index,
    locked: r.locked,
    visible: Ei(r, t).active,
    external: r.source.kind === "port",
    ...ud(r, t)
  }));
}
function kd(e) {
  var r;
  const t = String(((r = e == null ? void 0 : e.active) == null ? void 0 : r.selected_sticker_id) || "");
  return t && ii(e).find((n) => String((n == null ? void 0 : n.id) || "") === t) || null;
}
function mg(e) {
  return String((e == null ? void 0 : e.id) || "") === Pa || String((e == null ? void 0 : e.source_kind) || "") === hg;
}
function Md(e, t) {
  return (e == null ? void 0 : e.version) === 2 ? (t == null ? void 0 : t.source.kind) === "port" : mg(t);
}
const gg = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"];
function yg(e) {
  return !mg(e) || !(e != null && e.initial_pose) || typeof e.initial_pose != "object" ? null : Object.fromEntries(gg.map((t) => {
    const r = t === "hFOV_deg" || t === "vFOV_deg" ? 30 : 0, n = Number(e[t]), i = Number(e.initial_pose[t]);
    return [t, Number.isFinite(i) ? i : Number.isFinite(n) ? n : r];
  }));
}
function bg(e) {
  const t = yg(e);
  return t ? gg.some((r) => Math.abs(Number((e == null ? void 0 : e[r]) || 0) - t[r]) > 1e-4) : !1;
}
function vg(e, t = {}) {
  var te, I, X;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  const r = Array.isArray(e.stickers) ? e.stickers : [], n = r.findIndex((j) => String((j == null ? void 0 : j.id) || "") === Pa);
  if (t.connected !== !0) {
    if (n < 0) return { state: e, changed: !1 };
    const j = String(((te = e.active) == null ? void 0 : te.selected_sticker_id) || "") === Pa;
    return {
      state: {
        ...e,
        stickers: r.filter((W, ie) => ie !== n),
        active: j ? { ...e.active || {}, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  const i = Number(t.linkId), o = String(t.stateHash || ""), s = n >= 0 ? r[n] : null, a = !s || Number(s.source_link_id ?? -1) !== i || String(s.source_state_hash || "") !== o, l = Number(t.imageWidth || 0), c = Number(t.imageHeight || 0), d = l > 0 && c > 0, u = Math.max(1, l), f = Math.max(1, c), h = t.pose && typeof t.pose == "object" ? t.pose : {}, w = a ? h.hFOV_deg || (s == null ? void 0 : s.hFOV_deg) || 30 : (s == null ? void 0 : s.hFOV_deg) || h.hFOV_deg || 30, g = Math.min(179, Math.max(0.1, Number(w)));
  if (!a) {
    if (!d) return { state: e, changed: !1 };
    const j = Na(g, u, f), W = Number(((I = s == null ? void 0 : s.initial_pose) == null ? void 0 : I.hFOV_deg) ?? g), ie = Na(W, u, f), pe = Number(((X = s == null ? void 0 : s.initial_pose) == null ? void 0 : X.vFOV_deg) ?? ie);
    return Math.abs(Number((s == null ? void 0 : s.vFOV_deg) || 0) - j) <= 1e-6 && Math.abs(pe - ie) <= 1e-6 ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: r.map((q, de) => de === n ? {
          ...q,
          vFOV_deg: j,
          initial_pose: q.initial_pose && typeof q.initial_pose == "object" ? { ...q.initial_pose, vFOV_deg: ie } : q.initial_pose
        } : q)
      },
      changed: !0
    };
  }
  const m = r.reduce((j, W) => Math.max(j, Number((W == null ? void 0 : W.z_index) || 0)), -1), _ = {
    yaw_deg: Number(h.yaw_deg || 0),
    pitch_deg: Number(h.pitch_deg || 0),
    hFOV_deg: g,
    vFOV_deg: d ? Na(g, u, f) : Number(h.vFOV_deg || (s == null ? void 0 : s.vFOV_deg) || g),
    rot_deg: Number(h.rot_deg ?? h.roll_deg ?? 0)
  }, ee = {
    ...s || {},
    id: Pa,
    source_kind: hg,
    source_link_id: i,
    source_state_hash: o,
    ..._,
    initial_pose: { ..._ },
    visible: !0,
    z_index: m + 1
  }, V = n >= 0 ? r.map((j, W) => W === n ? ee : j) : [...r, ee];
  return { state: { ...e, stickers: V }, changed: !0 };
}
function Yf(e, t) {
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((n) => (n == null ? void 0 : n.name) === t);
  return r >= 0 && e.isInputConnected(r);
}
const p_ = ["IMAGE", "VIDEO"];
function qf(e) {
  const t = String(e || "").split(",").filter(Boolean);
  return t.length && t.every((r) => r === "MESH" || r === "SPLAT" || r.startsWith("FILE_3D")) ? "3d" : t.length && t.every((r) => p_.includes(r)) ? "2d" : null;
}
function h_(e, t) {
  var i, o, s, a, l, c;
  const r = (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).findIndex((d) => (d == null ? void 0 : d.name) === t), n = r >= 0 && e.graph ? (i = e.getInputLink) == null ? void 0 : i.call(e, r) : null;
  return n ? qf(n.type) ?? qf((c = (l = (a = (s = (o = e.graph).getNodeById) == null ? void 0 : s.call(o, n.origin_id)) == null ? void 0 : a.outputs) == null ? void 0 : l[n.origin_slot]) == null ? void 0 : c.type) : null;
}
function Sg(e, { pose: t = null } = {}) {
  return {
    connected: Yf(e, "sticker"),
    awaitingPose: !t && (Yf(e, "sticker_state") || h_(e, "sticker") !== "2d"),
    pose: t
  };
}
function Xf(e, t, r = {}) {
  const n = {
    ...r,
    id: e,
    placement: "world",
    source: { kind: "port" },
    position: { value: t.position },
    rotation: { value: t.rotation },
    scale: { value: t.scale }
  };
  return Gr({ version: 2, stickers: [n] }).stickers[0];
}
function _g(e, { connected: t = !1, awaitingPose: r = !1, pose: n = null } = {}) {
  var u;
  const i = e.stickers.findIndex((f) => Md(e, f)), o = i >= 0 ? e.stickers[i] : null;
  if (!t) {
    if (!o) return { state: e, changed: !1 };
    const f = ((u = e.active) == null ? void 0 : u.selected_sticker_id) === o.id;
    return {
      state: {
        ...e,
        stickers: e.stickers.filter((h, w) => w !== i),
        active: f ? { ...e.active, selected_sticker_id: null } : e.active
      },
      changed: !0
    };
  }
  if (o && (n == null ? void 0 : n.placement) === "world" && n.replace && o.placement === "sky") {
    const f = Object.fromEntries(["clip", "visible", "locked", "crop", "opacity", "handoff_overrides"].map((w) => [w, o[w]])), h = Xf(o.id, n, f);
    return { state: { ...e, stickers: e.stickers.map((w, g) => g === i ? h : w) }, changed: !0 };
  }
  if (o || r) return { state: e, changed: !1 };
  const s = { ...e }, a = $l(s);
  if ((n == null ? void 0 : n.placement) === "world")
    return { state: { ...s, stickers: [...e.stickers, Xf(a, n)] }, changed: !0 };
  const l = Math.min(179, Math.max(0.1, Number((n == null ? void 0 : n.hFOV_deg) ?? 30))), c = fd(a, { kind: "port" }, {
    yaw_deg: Number((n == null ? void 0 : n.yaw_deg) ?? 0),
    pitch_deg: Number((n == null ? void 0 : n.pitch_deg) ?? 0),
    rot_deg: Number((n == null ? void 0 : n.roll_deg) ?? 0),
    hFOV_deg: l,
    vFOV_deg: l
  }, ii(e).reduce((f, h) => Math.max(f, h.z_index), -1) + 1), d = (n == null ? void 0 : n.keyframes) ?? {};
  return c.direction.keyframes = d.direction ?? [], c.roll.keyframes = d.roll ?? [], c.size.keyframes = (d.size ?? []).map((f) => ({ ...f, value: { ...f.value, vFOV_deg: f.value.hFOV_deg } })), c.handoff_overrides = [], { state: { ...s, stickers: [...e.stickers, c] }, changed: !0 };
}
function Pd(e) {
  const t = ii(e).filter((o) => o && typeof o == "object").map((o) => ({
    type: "sticker",
    id: String(o.id || ""),
    z_index: kc(o.z_index),
    item: o
  })), r = e != null && e.painting && typeof e.painting == "object" ? e.painting : {}, n = (Array.isArray(r.groups) ? r.groups : []).filter((o) => o && typeof o == "object").map((o) => ({
    type: "strokeGroup",
    id: String(o.actionGroupId || o.id || ""),
    z_index: kc(o.z_index),
    item: o
  })), i = (Array.isArray(r.raster_objects) ? r.raster_objects : []).filter((o) => o && typeof o == "object" && String(o.layerKind || "paint") === "paint").map((o) => ({
    type: "rasterObject",
    id: String(o.id || ""),
    z_index: kc(o.z_index),
    item: o
  }));
  return [...t, ...n, ...i].sort((o, s) => o.z_index - s.z_index);
}
function wg(e) {
  const t = kd(e), r = Md(e, t), n = ii(e).some((a) => a && a.visible !== !1), i = Pd(e), o = t ? i.findIndex((a) => a.type === "sticker" && a.item === t) : -1, s = (t == null ? void 0 : t.locked) === !0;
  return {
    hasStickers: n,
    hasSelection: !!t,
    isExternalSelection: r,
    canRestoreInitial: bg(t),
    selectedId: t ? String(t.id || "") : null,
    locked: s,
    canDelete: !!t && !s,
    canMoveForward: o >= 0 && o < i.length - 1,
    canMoveBackward: o > 0
  };
}
function m_(e) {
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
function Jf(e, t) {
  const r = kd(e);
  if (!r || r.locked === !0) return { state: e, changed: !1 };
  const n = m_(e), i = String(r.id || ""), o = Pd(n), s = o.findIndex((l) => l.type === "sticker" && l.id === i);
  if (s < 0) return { state: e, changed: !1 };
  if (t === "front" && s === o.length - 1 || t === "back" && s === 0)
    return { state: e, changed: !1 };
  const [a] = o.splice(s, 1);
  return t === "front" ? o.push(a) : o.unshift(a), o.forEach((l, c) => {
    l.item.z_index = c;
  }), { state: n, changed: !0 };
}
function g_(e) {
  const t = new Set(
    (Array.isArray(e.stickers) ? e.stickers : []).map((r) => String((r == null ? void 0 : r.asset_id) || "")).filter(Boolean)
  );
  return Object.fromEntries(
    Object.entries(e.assets || {}).filter(([r]) => t.has(String(r)))
  );
}
function y_(e, t = {}) {
  var n;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "sync-external") return vg(e, t.value);
  if (t.type === "sync-port") return _g(e, t.value);
  if (t.type === "add-sticker") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = String(i.stickerId || "").trim(), s = String(i.assetId || "").trim();
    if (!o || !s || !i.asset || (Array.isArray(e.stickers) ? e.stickers : []).some((f) => String((f == null ? void 0 : f.id) || "") === o))
      return { state: e, changed: !1 };
    const l = Pd(e).reduce((f, h) => Math.max(f, Number(h.z_index || 0)), -1), c = 30, d = {
      yaw_deg: Number(i.yaw_deg || 0),
      pitch_deg: Number(i.pitch_deg || 0),
      hFOV_deg: c,
      vFOV_deg: Na(c, i.imageWidth, i.imageHeight),
      rot_deg: 0
    };
    if (e.version === 2) {
      const f = { ...e }, h = $l(f);
      return {
        state: {
          ...f,
          stickers: [...e.stickers, fd(h, wa(i.asset), d, l + 1)],
          active: { ...e.active || {}, selected_sticker_id: h }
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
    return !i || !ii(e).some((o) => String((o == null ? void 0 : o.id) || "") === i) ? { state: e, changed: !1 } : String(((n = e.active) == null ? void 0 : n.selected_sticker_id) || "") === i ? { state: e, changed: !1 } : {
      state: { ...e, active: { ...e.active || {}, selected_sticker_id: i } },
      changed: !0
    };
  }
  const r = kd(e);
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
    const i = yg(r);
    return !i || !bg(r) ? { state: e, changed: !1 } : {
      state: {
        ...e,
        stickers: e.stickers.map((o) => o === r ? { ...o, ...i } : o)
      },
      changed: !0
    };
  }
  if (r.locked === !0) return { state: e, changed: !1 };
  if (t.type === "bring-front") return Jf(e, "front");
  if (t.type === "send-back") return Jf(e, "back");
  if (t.type === "delete-selected") {
    if (Md(e, r))
      return r.visible === !1 ? { state: e, changed: !1 } : {
        state: {
          ...e,
          stickers: e.stickers.map((l) => l === r ? { ...l, visible: !1 } : l)
        },
        changed: !0
      };
    const i = e.stickers.filter((l) => l !== r), o = ii({ ...e, stickers: i })[0], s = (o == null ? void 0 : o.id) == null ? null : String(o.id), a = {
      ...e,
      stickers: i,
      active: { ...e.active || {}, selected_sticker_id: s }
    };
    return e.version !== 2 && (a.assets = g_(a)), { state: a, changed: !0 };
  }
  if (t.type === "set-transform") {
    const i = t.value && typeof t.value == "object" ? t.value : {}, o = ["yaw_deg", "pitch_deg", "hFOV_deg", "vFOV_deg", "rot_deg"], s = e.version === 2 ? ud(r, po) : r, a = {};
    if (o.forEach((l) => {
      const c = Number(i[l]);
      Number.isFinite(c) && Math.abs(c - Number(s[l] || 0)) > 1e-12 && (a[l] = c);
    }), !Object.keys(a).length) return { state: e, changed: !1 };
    if (e.version === 2) {
      const l = qv(r, a);
      if (!Object.keys(l).length) return { state: e, changed: !1 };
      const c = structuredClone(r);
      return Nm(c, po, l), { state: { ...e, stickers: e.stickers.map((d) => d === r ? c : d) }, changed: !0 };
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
function b_(e = {}) {
  return pg({
    ...e,
    reduce: y_,
    projectModel: wg
  });
}
const hu = 2;
function Si(e, t) {
  return Math.floor(e * t + 0.5);
}
function v_(e, t) {
  return Math.floor(e * t + 1e-3);
}
function xg({ video: e, clock: t, fps: r, span: n, loop: i, onFrame: o, onCapture: s, onChange: a }) {
  let l = 0, c = !1, d = !1, u = { name: "idle" }, f = [];
  const h = () => c && !d, w = () => typeof (e == null ? void 0 : e.requestVideoFrameCallback) == "function";
  function g() {
    for (const H of f) H();
    f = [];
  }
  function m(H, T = {}) {
    return g(), u = { name: H, ...T }, a(), u;
  }
  function _(H, T, K) {
    const fe = () => {
      u === H && K();
    };
    e.addEventListener(T, fe), f.push(() => e.removeEventListener(T, fe));
  }
  function ee(H, T) {
    let K = t.requestFrame(function fe(se) {
      u === H && (T(se), u === H && (K = t.requestFrame(fe)));
    });
    f.push(() => t.cancelFrame(K));
  }
  function V(H) {
    l = H, o(l);
  }
  function te() {
    return m(d ? "error" : "idle");
  }
  function I() {
    d = !0, te();
  }
  function X() {
    const { seekable: H } = e, T = H != null && H.length ? H.end(H.length - 1) : Number(e.duration);
    return Math.max(0, Math.min(l / r(), Number.isFinite(T) ? T : 1 / 0));
  }
  function j(H) {
    if (!h()) return H === "play" ? de() : te();
    if (e.readyState < hu) {
      const T = m("loading", { then: H });
      return _(T, "loadeddata", () => j(T.then)), _(T, "error", I), T;
    }
    return H === "play" && l / r() >= Number(e.duration) ? de() : W(H, !1);
  }
  function W(H, T) {
    const K = X();
    if (!e.ended && Si(Number(e.currentTime), r()) === Si(K, r())) return ie(H);
    const fe = m("seeking", { then: H, frame: l, retried: T });
    return _(fe, "seeked", () => {
      const se = Si(Number(e.currentTime), r()) === Si(X(), r()), Y = l === fe.frame;
      se || Y && fe.retried ? ie(fe.then) : W(fe.then, Y);
    }), _(fe, "error", I), e.currentTime = K, fe;
  }
  function ie(H) {
    return H === "play" ? pe() : (s(), te());
  }
  function pe() {
    const H = m("playingVideo", { shown: !1 });
    if (_(H, "pause", () => e.ended ? q() : G()), _(H, "ended", q), _(H, "error", I), i() && Si(Number(e.duration), r()) >= n()) {
      const K = e.loop;
      e.loop = !0, f.push(() => {
        e.loop = K;
      });
    }
    const T = (K, fe) => {
      fe && !H.shown && (H.shown = !0, a()), ae(Si(K, r()));
    };
    if (w()) {
      let K = e.requestVideoFrameCallback(function fe(se, Y) {
        u === H && (T(Number(Y.mediaTime), !0), u === H && (K = e.requestVideoFrameCallback(fe)));
      });
      f.push(() => {
        var fe;
        return (fe = e.cancelVideoFrameCallback) == null ? void 0 : fe.call(e, K);
      });
    } else
      ee(H, () => T(Number(e.currentTime), e.readyState >= hu));
    return Promise.resolve(e.play()).catch(() => {
      u === H && G();
    }), H;
  }
  function q() {
    s(), de();
  }
  function de() {
    const H = m("playingClock", { startTs: t.now(), startFrame: l });
    return ee(H, (T) => ae(H.startFrame + Math.floor((T - H.startTs) / 1e3 * r()))), H;
  }
  function ae(H) {
    if (H < n()) {
      V(H);
      return;
    }
    if (!i()) {
      ve(n() - 1);
      return;
    }
    u.name === "playingVideo" && (g(), e.pause()), V(0), j("play");
  }
  function ve(H) {
    u.name === "playingVideo" ? (g(), e.pause(), V(Math.max(0, H)), s()) : V(Math.max(0, H)), j("still");
  }
  function G() {
    if (u.name === "loading" || u.name === "seeking")
      u.then = "still", a();
    else if (u.name === "playingVideo") {
      g(), e.pause();
      const H = v_(Number(e.currentTime), r());
      V(Math.min(H, n() - 1)), s(), l === H ? te() : j("still");
    } else u.name === "playingClock" && ve(Math.min(l, n() - 1));
  }
  function A() {
    if (!M()) {
      if (l >= n() - 1 && V(0), u.name === "loading" || u.name === "seeking") {
        u.then = "play", a();
        return;
      }
      j("play");
    }
  }
  function z(H) {
    const T = Math.max(0, Math.round(H));
    if (u.name === "loading" || u.name === "seeking") {
      u.then = "still", V(T), a();
      return;
    }
    u.name === "playingVideo" && (g(), e.pause()), V(T), j("still");
  }
  function M() {
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
      return M();
    },
    // Whether the playhead moves: a follower VIDEO (createVideoFollower) plays only then.
    get advancing() {
      return u.name === "playingVideo" || u.name === "playingClock";
    },
    // The VIDEO itself is on screen only while it plays and has presented a frame; otherwise the still is.
    get showsVideo() {
      return u.name === "playingVideo" && u.shown;
    },
    play: A,
    stop: G,
    seek: z,
    toggle() {
      M() ? G() : A();
    },
    // The editor set a new source or removed it. Its load() dropped a seek in flight without
    // `seeked`, so whatever was pending ends here, and playback stops on the playhead's frame.
    setSource(H) {
      g(), c = !!H, d = !1, j("still");
    },
    dispose() {
      g(), c = !1, u = { name: "idle" };
    }
  };
}
function Nd({ video: e, onCapture: t, onChange: r }) {
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
    if (!n || i || e.readyState < hu) return;
    const { time: g, playing: m, fps: _ } = o;
    if (g === null) {
      e.pause(), l = !1;
      return;
    }
    if (m) {
      if (s !== null) return;
      const ee = Number(e.duration), V = Number.isFinite(ee) ? Math.min(g, ee) : g, te = Math.abs(Number(e.currentTime) - V) > 1.5 / _;
      if (e.ended && !te) return;
      te && d(V), e.paused && (l = !1, Promise.resolve(e.play()).catch(() => {
      }));
      return;
    }
    e.paused || (e.pause(), l = !1, c(NaN)), !(s !== null || a === g) && (Number(e.currentTime) === g ? c(g) : d(g));
  }
  const h = {
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
  for (const [g, m] of Object.entries(h)) e.addEventListener(g, m);
  function w(g) {
    n = g, i = !1, s = null, a = null, l = !1, e.pause(), n ? e.src = n : e.removeAttribute("src"), e.load();
  }
  return {
    follow({ src: g = "", time: m = null, playing: _ = !1, fps: ee }) {
      g !== n && (w(g), r()), o = { time: m, playing: _, fps: ee }, u();
    },
    // What to draw: the playing VIDEO once it presents, else the still once captured, else
    // `fallback` (the first frame); null where the media shows nothing. Without a source that
    // plays, `fallback`.
    picture(g, m) {
      return !n || i ? m : o.time === null ? null : o.playing && l ? e : a === null ? m : g;
    },
    dispose() {
      for (const [g, m] of Object.entries(h)) e.removeEventListener(g, m);
      w("");
    }
  };
}
function Aa(e, t) {
  return !t && e.isConnected && e.clientWidth > 0;
}
function S_({ video: e, stickerVideo: t, createImage: r, clock: n, readState: i, onFrame: o, onCapture: s, onStickerCapture: a, onChange: l, camera: c = !1 }) {
  let d = "", u = "", f = 0;
  const h = /* @__PURE__ */ new Set();
  let w = null, g = null;
  const m = () => i().timeline.fps, _ = (q) => q.stickers.find((de) => de.source.kind === "port"), ee = () => {
    const q = i(), de = _(q);
    return wm(q, {
      minimum: Math.round(m() * 5),
      frames: Math.max(
        d ? Math.round(f * m()) : 0,
        w && de ? fg(de.clip, m(), w.meta) : 0
      ),
      camera: c
    });
  }, V = xg({
    video: e,
    clock: n,
    fps: m,
    span: ee,
    loop: () => !0,
    onFrame: o,
    onCapture: s,
    onChange: l
  }), te = () => {
    u === d && Number.isFinite(e.duration) && (f = e.duration);
  }, I = () => {
    u && (h.add(u), l());
  }, X = Nd({ video: t, onCapture: a, onChange: l }), j = xd({ createImage: r, onLoad: l });
  e.muted = !0, e.addEventListener("loadedmetadata", te), e.addEventListener("error", I);
  function W(q) {
    q !== u && (u = q, e.pause(), q ? e.src = q : e.removeAttribute("src"), e.load(), V.setSource(!!q));
  }
  function ie() {
    V.playing && V.stop();
  }
  function pe(q) {
    const de = _(q);
    g = w && de ? _d(de.clip, V.frame, q.timeline.fps, w.meta) : null, X.follow({
      src: (w == null ? void 0 : w.src) || "",
      time: g,
      playing: V.advancing,
      fps: q.timeline.fps
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
      return u;
    },
    pause: ie,
    // The port Sticker's media it follows: { src, meta }, { frames, meta } or null.
    get stickerMedia() {
      return w;
    },
    // The port Sticker's picture (createVideoFollower's picture).
    stickerPicture(q, de) {
      return w != null && w.frames ? j.picture(w.frames, g, w.meta, de) : X.picture(q, de);
    },
    toggle() {
      V.playing ? V.stop() : V.play();
    },
    // Follows the node on each draw and returns whether the play button shows. `sources` are its
    // background VIDEO URLs, best first; one that failed is skipped until it leaves them. `sticker`
    // is the port Sticker's MP4 ({ src, meta }) or PNGs ({ frames, meta }), or null; it plays too. Out of sight, the node pauses
    // and lets its VIDEOs go, keeping the frame. Another background VIDEO, a Timeline that no longer
    // reaches the frame, or nothing to play brings the node back to NODE_SURFACE_FRAME.
    follow({ shown: q, sources: de, state: ae, sticker: ve = null }) {
      if (w = q ? ve : null, !q)
        return ie(), W(""), pe(ae), !1;
      for (const H of h)
        de.includes(H) || h.delete(H);
      const G = de.find((H) => H && !h.has(H)) || "", A = G !== d;
      A && (d = G, f = 0), W(d);
      const z = _m(ae, { camera: c }) || !!d && V.state !== "error" || !!w;
      return z || ie(), (A || !z || !V.playing && V.frame >= ee()) && V.frame !== po && V.seek(po), pe(ae), z;
    },
    dispose() {
      V.dispose(), X.dispose(), e.removeEventListener("loadedmetadata", te), e.removeEventListener("error", I), e.pause(), e.removeAttribute("src"), e.load(), u = "";
    }
  };
}
const al = Math.PI / 180, yr = 180 / Math.PI, __ = Object.freeze({
  top: 58,
  right: 32,
  bottom: 32,
  left: 32
}), w_ = 260;
function Zf(e) {
  const t = String(e ?? "").trim();
  if (!t) return null;
  const r = Number(t);
  return Number.isFinite(r) && r > 0 ? r : null;
}
function kg(e, t) {
  return t ? kg(t, e % t) : e;
}
function x_(e, t) {
  const n = Math.max(e, t) <= Number.MAX_SAFE_INTEGER / 1e3, i = n ? 1e3 : 1e6, o = n ? 1 : Math.max(e, t), s = Math.max(1, Math.round(e / o * i)), a = Math.max(1, Math.round(t / o * i)), l = kg(s, a) || 1;
  return `${Math.round(s / l)}:${Math.round(a / l)}`;
}
function bs(e, t) {
  const r = Zf(e), n = Zf(t);
  if (r == null || n == null) return null;
  const i = r / n;
  return !Number.isFinite(i) || i <= 0 ? null : { width: r, height: n, ratio: i, label: x_(r, n) };
}
function Ai(e) {
  var n;
  const t = Array.isArray(e == null ? void 0 : e.shots) ? e.shots : [];
  if (!t.length) return null;
  const r = String(((n = e == null ? void 0 : e.active) == null ? void 0 : n.selected_shot_id) || "");
  return t.find((i) => String((i == null ? void 0 : i.id) || "") === r) || t[0] || null;
}
function Mg(e) {
  const t = Ai(e), r = Number((t == null ? void 0 : t.roll_deg) ?? (t == null ? void 0 : t.rot_deg) ?? 0), n = Math.abs(r) < 0.05 ? 0 : r;
  return {
    hasShot: !!t,
    shotId: (t == null ? void 0 : t.id) == null ? null : String(t.id),
    locked: (t == null ? void 0 : t.locked) === !0,
    aspectLabel: t ? Dr(t) : "",
    rollDeg: r,
    rollLabel: `${n.toFixed(1)}°`
  };
}
function Ad(e, t, r = __) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Math.max(0, Number((r == null ? void 0 : r.top) || 0)), s = Math.max(0, Number((r == null ? void 0 : r.right) || 0)), a = Math.max(0, Number((r == null ? void 0 : r.bottom) || 0)), l = Math.max(0, Number((r == null ? void 0 : r.left) || 0)), c = (m, _, ee) => {
    const V = m + _, te = Math.max(0, ee - 1), I = V > te && V > 0 ? te / V : 1;
    return [m * I, _ * I];
  }, [d, u] = c(l, s, n), [f, h] = c(o, a, i), w = {
    x: d,
    y: f,
    w: Math.max(1, n - d - u),
    h: Math.max(1, i - f - h)
  }, g = nd(w, t);
  return {
    x: w.x + (w.w - g.width) * 0.5,
    y: w.y + (w.h - g.height) * 0.5,
    w: g.width,
    h: g.height,
    safeRect: w
  };
}
function k_(e = {}, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Ad({ width: r, height: n }, 1), o = Ie(Number((e == null ? void 0 : e.fov) || 100), 1, 179), s = r / (2 * Math.tan(o * al * 0.5)), a = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, l = {
    yaw_deg: Number((e == null ? void 0 : e.yaw) || 0),
    pitch_deg: Number((e == null ? void 0 : e.pitch) || 0),
    roll_deg: 0
  }, c = Zh(l, Yh(
    { x: r * 0.5, y: n * 0.5 },
    s,
    a
  )), d = M_(c, yo(
    l.yaw_deg,
    l.pitch_deg,
    l.roll_deg
  ).right), u = rd({ width: i.w, height: i.h }, s);
  return {
    type: "add-frame",
    yawDeg: d.yaw,
    pitchDeg: d.pitch,
    rollDeg: d.roll,
    frameFovDeg: u.hFOV_deg
  };
}
function Pg(e) {
  return {
    yaw: Ht(Math.atan2(Number((e == null ? void 0 : e.x) || 0), Number((e == null ? void 0 : e.z) || 0)) * yr),
    pitch: Ie(Math.asin(Ie(Number((e == null ? void 0 : e.y) || 0), -1, 1)) * yr, -89.9, 89.9)
  };
}
function M_(e, t) {
  const r = Pg(e), n = yo(r.yaw, r.pitch, 0), i = uc(t, e), o = {
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
    roll: El(Math.atan2(
      uc(a, n.up),
      uc(a, n.right)
    ) * yr)
  };
}
function Ng(e, t = {}) {
  const r = Math.max(1, Number((t == null ? void 0 : t.width) ?? (t == null ? void 0 : t.w) ?? 1)), n = Math.max(1, Number((t == null ? void 0 : t.height) ?? (t == null ? void 0 : t.h) ?? 1)), i = Ad({ width: r, height: n }, Ti(e)), o = Ii(i, e), s = { x: i.x + i.w * 0.5, y: i.y + i.h * 0.5 }, a = Zh(e, Yh(
    s,
    o,
    { x: r * 0.5, y: n * 0.5 }
  )), l = Pg(a);
  return {
    yaw: l.yaw,
    pitch: l.pitch,
    fov: Ie(2 * Math.atan(r / (2 * o)) * yr, 1, 179)
  };
}
function P_(e, t, r) {
  const n = Math.max(1, Number((e == null ? void 0 : e.width) ?? (e == null ? void 0 : e.w) ?? 1)), i = Math.max(1, Number((e == null ? void 0 : e.height) ?? (e == null ? void 0 : e.h) ?? 1)), o = Number((t == null ? void 0 : t.x) || 0) + Math.max(1, Number((t == null ? void 0 : t.w) ?? (t == null ? void 0 : t.width) ?? 1)) * 0.5, s = Number((t == null ? void 0 : t.y) || 0) + Math.max(1, Number((t == null ? void 0 : t.h) ?? (t == null ? void 0 : t.height) ?? 1)) * 0.5, a = Ii(t, r), l = {
    width: Math.max(o, n - o) * 2,
    height: Math.max(s, i - s) * 2
  }, { halfW: c, halfH: d } = id(l, a), u = {
    x: o - c,
    y: s - d,
    w: c * 2,
    h: d * 2
  }, f = u.x <= 0 && u.y <= 0 && u.x + u.w >= n && u.y + u.h >= i, h = n / i, w = Math.tan(qc * al), g = h >= 1 ? w : w * h, m = h >= 1 ? w / h : w;
  return {
    focalPx: a,
    rect: u,
    shot: {
      ...r,
      hFOV_deg: 2 * Math.atan(c / a) * yr,
      vFOV_deg: 2 * Math.atan(d / a) * yr
    },
    fallback: f ? null : {
      rect: { x: 0, y: 0, w: n, h: i },
      shot: {
        ...r,
        hFOV_deg: 2 * Math.atan(g) * yr,
        vFOV_deg: 2 * Math.atan(m) * yr
      }
    }
  };
}
function Ki(e, t) {
  const r = Ai(e);
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
function N_(e, t, r) {
  const n = Number((r == null ? void 0 : r.w) ?? (r == null ? void 0 : r.width)), i = Number((r == null ? void 0 : r.h) ?? (r == null ? void 0 : r.height));
  if (Number.isFinite(n) && n > 0 && Number.isFinite(i) && i > 0) {
    const s = Ii(r, e);
    return rd(nd(r, t), s);
  }
  const o = Math.max(1, Math.min(179, Number((e == null ? void 0 : e.vFOV_deg) || 60)));
  return { vFOV_deg: o, hFOV_deg: va(o, t) };
}
function Qf(e, t, r, { preserveOrientation: n = !1, safeRect: i = null } = {}) {
  let o = bs(t, r);
  if (!o) return e;
  const s = Ti(e) >= 1;
  n && o.ratio >= 1 !== s && (o = bs(o.height, o.width));
  const a = N_(e, o.ratio, i);
  return Math.abs(Number(e.hFOV_deg || 0) - a.hFOV_deg) <= 1e-12 && Math.abs(Number(e.vFOV_deg || 0) - a.vFOV_deg) <= 1e-12 && String(e.aspect_id || "") === o.label ? e : { ...e, ...a, aspect_id: o.label };
}
function Ag(e, t = {}) {
  var r;
  if (!e || typeof e != "object") return { state: e, changed: !1 };
  if (t.type === "add-frame") {
    if (Ai(e)) return { state: e, changed: !1 };
    const n = String(t.id || `frame_${Date.now().toString(36)}`), i = qh({
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
    const n = Ai(e);
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
    return Ki(e, (n) => Qf(
      n,
      t.width,
      t.height,
      {
        preserveOrientation: t.preserveOrientation === !0,
        safeRect: t.safeRect
      }
    ));
  if (t.type === "swap-aspect")
    return Ki(e, (n) => {
      const o = String(Dr(n) || "").match(/^([0-9.]+):([0-9.]+)$/), s = o ? bs(o[1], o[2]) : bs(Ti(n), 1);
      return s ? Qf(n, s.height, s.width, { safeRect: t.safeRect }) : n;
    });
  if (t.type === "set-roll") {
    const n = Number(t.value);
    return Number.isFinite(n) ? Ki(e, (i) => {
      const o = El(n), s = Number(i.roll_deg ?? i.rot_deg ?? 0);
      if (Math.abs(s - o) <= 1e-12) return i;
      const a = { ...i, roll_deg: o };
      return delete a.rot_deg, a;
    }) : { state: e, changed: !1 };
  }
  return t.type === "scale-fov" ? Ki(e, (n) => {
    const i = Xh(n, t.scale);
    return i ? { ...n, ...i } : n;
  }) : t.type === "step-fov" ? Ki(e, (n) => {
    const i = Jh(n, t.direction);
    return i ? { ...n, ...i } : n;
  }) : t.type === "pan-camera" ? Ki(e, (n) => {
    const i = Eg(t.startShot || n, t);
    return Math.abs(Number(i.yaw_deg) - Number(n.yaw_deg || 0)) > 1e-12 || Math.abs(Number(i.pitch_deg) - Number(n.pitch_deg || 0)) > 1e-12 ? { ...n, yaw_deg: i.yaw_deg, pitch_deg: i.pitch_deg } : n;
  }) : { state: e, changed: !1 };
}
function Cg({
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
function Ig(e, t, r = {}) {
  var s, a;
  if (!e || !t) return null;
  const n = Math.atan2(
    Number(t.y || 0) - Number(((s = e.center) == null ? void 0 : s.y) || 0),
    Number(t.x || 0) - Number(((a = e.center) == null ? void 0 : a.x) || 0)
  ), i = Number(e.accumulatedRad || 0) + Uh(n, Number(e.lastAngle || 0));
  return {
    gesture: { ...e, lastAngle: n, accumulatedRad: i },
    rollDeg: Bh(e.startRollDeg, i, {
      shiftKey: e.source === "alt" && r.shiftKey === !0
    })
  };
}
function Eg(e, t = {}) {
  if (!e || typeof e != "object") return e;
  const r = Math.max(1, Number(t.focalPx || 1)), n = t.invertX === !0 ? -1 : 1, i = t.invertY === !0 ? -1 : 1, o = Number(t.dx || 0) * n, s = Number(t.dy || 0) * i, a = Number(e.roll_deg ?? e.rot_deg ?? 0) * al, l = Math.cos(a), c = Math.sin(a), d = o / r, u = -s / r, f = d * l - u * c, h = d * c + u * l, w = Number(e.pitch_deg || 0) * al, g = Math.max(0.25, Math.abs(Math.cos(w)));
  return {
    ...e,
    yaw_deg: Ht(Number(e.yaw_deg || 0) - Math.atan(f) / g * yr),
    pitch_deg: Ie(Number(e.pitch_deg || 0) - Math.atan(h) * yr, -90, 90)
  };
}
function A_({
  readState: e,
  publishLiveState: t = () => {
  },
  commitState: r,
  onChange: n = () => {
  }
} = {}) {
  return pg({
    readState: e,
    reduce: Ag,
    projectModel: Mg,
    publishLiveState: t,
    commitState: r,
    onChange: n
  });
}
const ze = Object.freeze({
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
}), C_ = (e) => {
  const t = {};
  for (const r of e.matchAll(/([:\w-]+)=(["'])(.*?)\2/g)) t[r[1]] = r[3];
  return t;
}, I_ = (e) => Array.from(e.matchAll(/<(path|circle|rect|line|polyline|polygon)([^>]*)\/>/g), (t) => ({
  tag: t[1],
  attrs: C_(t[2])
})), E_ = {
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
}, ep = Object.fromEntries(
  Object.entries(E_).map(([e, t]) => [e, {
    name: t.name,
    elements: I_(t.body)
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
      return Object.prototype.hasOwnProperty.call(ep, n) ? ep[n] : null;
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
      (Te(!0), De(Qe, null, Pt(r.value.elements, (o, s) => (Te(), De(Qe, {
        key: `${r.value.name || e.icon || "icon"}-${o.tag}-${s}`
      }, [
        o.tag === "path" ? (Te(), De("path", Ir({
          key: 0,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "circle" ? (Te(), De("circle", Ir({
          key: 1,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "rect" ? (Te(), De("rect", Ir({
          key: 2,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "line" ? (Te(), De("line", Ir({
          key: 3,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polyline" ? (Te(), De("polyline", Ir({
          key: 4,
          ref_for: !0
        }, o.attrs), null, 16)) : o.tag === "polygon" ? (Te(), De("polygon", Ir({
          key: 5,
          ref_for: !0
        }, o.attrs), null, 16)) : mt("", !0)
      ], 64))), 128))
    ], 2)) : mt("", !0);
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
    return (n, i) => (Te(), Gn(Oy(e.tag), Ir({
      class: ["pano-btn pano-btn-icon", e.extraClass]
    }, r.value), {
      default: dh(() => [
        Be($t, { icon: e.icon }, null, 8, ["icon"])
      ]),
      _: 1
    }, 16, ["class"]));
  }
}, O_ = ["aria-expanded", "disabled"], F_ = {
  class: "pano-frame-aspect-popover pano-cutout-aspect-pop",
  role: "dialog",
  "aria-label": "Aspect ratio"
}, T_ = ["data-aspect", "disabled", "onClick"], D_ = { class: "pano-cutout-aspect-custom" }, L_ = ["disabled"], R_ = ["disabled"], V_ = ["data-custom-width", "data-custom-height", "disabled"], Og = {
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
    ]), o = /* @__PURE__ */ Yt("1"), s = /* @__PURE__ */ Yt("1"), a = /* @__PURE__ */ Yt(null), l = dt(() => r.model.disabled === !0 || r.model.locked === !0 || r.model.hasShot === !1), c = dt(() => {
      const g = Array.isArray(r.model.aspectChoices) ? r.model.aspectChoices : [], m = String(r.model.aspectLabel || "");
      return g.length ? g.map((_) => {
        const ee = typeof _ == "string" ? _ : String((_ == null ? void 0 : _.value) || ""), V = typeof _ == "string" ? _ : String((_ == null ? void 0 : _.label) || ee);
        return {
          ...typeof _ == "object" && _ ? _ : {},
          value: ee,
          label: V,
          active: m ? ee === m : (_ == null ? void 0 : _.active) === !0
        };
      }) : i.map((_) => ({
        ..._,
        active: _.value === m
      }));
    }), d = dt(() => {
      var m;
      const g = String(r.model.aspectLabel || "").trim();
      return g || String(((m = c.value.find((_) => _.active === !0)) == null ? void 0 : m.label) || "Aspect");
    });
    Mi(d, (g) => {
      const m = String(g || "").match(/^([0-9.]+):([0-9.]+)$/);
      m && (o.value = m[1], s.value = m[2]);
    }, { immediate: !0 });
    function u(g) {
      n("action", g);
    }
    function f(g) {
      var m;
      r.model.aspectOpen === !0 && ((m = a.value) != null && m.contains(g.target) || u({ type: "close-aspect" }));
    }
    Pl(() => {
      document.addEventListener("pointerdown", f, !0);
    }), ks(() => {
      document.removeEventListener("pointerdown", f, !0);
    });
    function h(g) {
      const [m, _] = String(g.value || "").split(":");
      u({
        type: "set-aspect",
        width: m,
        height: _,
        preserveOrientation: !0
      });
    }
    function w() {
      u({
        type: "set-aspect",
        width: o.value,
        height: s.value,
        preserveOrientation: !1
      });
    }
    return (g, m) => (Te(), De("div", {
      ref_key: "rootElement",
      ref: a,
      class: gt(["pano-frame-aspect-control pano-cutout-aspect-picker", `is-${e.mode}`])
    }, [
      e.mode === "rail" ? (Te(), Gn(en, {
        key: 0,
        icon: e.model.aspectIcon || tt(ze).aspect,
        label: "Aspect Ratio",
        tip: "Aspect ratio",
        pressed: e.model.aspectOpen ? "true" : "false",
        attrs: { "data-action": "frame-aspect", disabled: l.value },
        onClick: m[0] || (m[0] = (_) => u({ type: "toggle-aspect" }))
      }, null, 8, ["icon", "pressed", "attrs"])) : (Te(), De("button", {
        key: 1,
        class: "pano-btn pano-cutout-aspect-trigger",
        type: "button",
        "data-action": "frame-aspect",
        "aria-expanded": e.model.aspectOpen === !0 ? "true" : "false",
        "aria-label": "Aspect ratio",
        disabled: l.value,
        onClick: m[1] || (m[1] = (_) => u({ type: "toggle-aspect" }))
      }, [
        Be($t, {
          icon: e.model.aspectIcon || tt(ze).aspect
        }, null, 8, ["icon"]),
        Me("span", null, rt(d.value), 1),
        Be($t, {
          icon: tt(ze).chevron,
          "class-name": "pano-cutout-aspect-caret"
        }, null, 8, ["icon"])
      ], 8, O_)),
      Vr(Me("div", F_, [
        (Te(!0), De(Qe, null, Pt(c.value, (_) => (Te(), De("button", {
          key: _.value,
          class: gt(["pano-btn pano-frame-aspect-choice", { active: _.active === !0 }]),
          type: "button",
          "data-action": "frame-aspect-set",
          "data-aspect": _.value,
          disabled: l.value,
          onClick: (ee) => h(_)
        }, rt(_.label), 11, T_))), 128)),
        Me("div", D_, [
          Vr(Me("input", {
            "onUpdate:modelValue": m[2] || (m[2] = (_) => o.value = _),
            name: "customWidth",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect width",
            disabled: l.value
          }, null, 8, L_), [
            [xf, o.value]
          ]),
          m[4] || (m[4] = Me("span", { "aria-hidden": "true" }, ":", -1)),
          Vr(Me("input", {
            "onUpdate:modelValue": m[3] || (m[3] = (_) => s.value = _),
            name: "customHeight",
            type: "number",
            min: "0",
            step: "any",
            inputmode: "decimal",
            "aria-label": "Custom aspect height",
            disabled: l.value
          }, null, 8, R_), [
            [xf, s.value]
          ]),
          Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "frame-aspect-custom",
            "data-custom-width": o.value,
            "data-custom-height": s.value,
            disabled: l.value,
            onClick: w
          }, "Apply", 8, V_)
        ])
      ], 512), [
        [Ci, e.model.aspectOpen === !0]
      ])
    ], 2));
  }
}, $_ = {
  class: "pano-cutout-node-help-popover",
  role: "tooltip"
}, z_ = {
  __name: "PanoCutoutNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Yt(!1), r = Object.freeze([
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
        icon: tt(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-cutout-node-help-button",
        onClick: i[0] || (i[0] = At((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", $_, [
        i[3] || (i[3] = Me("div", { class: "pano-cutout-node-help-title" }, "Node controls", -1)),
        (Te(!0), De(Qe, null, Pt(tt(r), (o) => (Te(), De("div", {
          key: o[0],
          class: "pano-cutout-node-help-row"
        }, [
          Me("kbd", null, rt(o[0]), 1),
          Me("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, j_ = {
  class: "pano-view-unavailable",
  role: "status"
}, Gl = {
  __name: "PanoViewUnavailable",
  setup(e) {
    return (t, r) => (Te(), De("div", j_, rt(tt(Jm)), 1));
  }
}, H_ = { class: "pano-cutout-node-surface" }, G_ = ["title", "disabled"], K_ = { class: "value" }, W_ = {
  key: 0,
  class: "pano-cutout-node-empty-note"
}, U_ = {
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
    return (n, i) => (Te(), De("div", H_, [
      Me("div", {
        class: "pano-cutout-node-toolbar",
        role: "toolbar",
        "aria-label": "Cutout frame controls",
        onPointerdown: i[4] || (i[4] = At(() => {
        }, ["stop"])),
        onWheel: i[5] || (i[5] = At(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-cutout-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: i[0] || (i[0] = (o) => r({ type: "open-editor" }))
        }, [
          Be($t, {
            icon: tt(ze).fullscreen
          }, null, 8, ["icon"]),
          i[6] || (i[6] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Be(en, {
          icon: e.model.hasShot ? tt(ze).delete : tt(ze).plus_circle,
          label: e.model.hasShot ? "Delete Frame" : "Add Frame",
          tip: e.model.hasShot ? "Delete frame" : "Add frame",
          "extra-class": "pano-cutout-node-frame-action",
          attrs: { "data-action": e.model.hasShot ? "delete-frame" : "add-frame" },
          onClick: i[1] || (i[1] = (o) => r({ type: e.model.hasShot ? "delete-frame" : "add-frame" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(Og, {
          model: e.model,
          mode: "node",
          onAction: r
        }, null, 8, ["model"]),
        Me("button", {
          class: "pano-btn pano-cutout-node-roll-value",
          type: "button",
          "aria-label": "Current roll",
          title: `Roll ${e.model.rollLabel || "0.0°"} · Double-click to reset`,
          disabled: e.model.hasShot === !1 || e.model.locked === !0,
          onDblclick: i[2] || (i[2] = At((o) => r({ type: "set-roll", value: 0 }), ["stop", "prevent"]))
        }, [
          Be($t, {
            icon: tt(ze).roll
          }, null, 8, ["icon"]),
          Me("span", K_, rt(e.model.rollLabel || "0.0°"), 1)
        ], 40, G_),
        Be(en, {
          icon: tt(ze).rotate_90,
          label: "Toggle Portrait/Landscape",
          tip: "Toggle portrait/landscape",
          "extra-class": "pano-cutout-node-swap",
          attrs: {
            "data-action": "swap-aspect",
            disabled: e.model.hasShot === !1 || e.model.locked === !0
          },
          onClick: i[3] || (i[3] = (o) => r({ type: "swap-aspect" }))
        }, null, 8, ["icon", "attrs"]),
        Be(z_)
      ], 32),
      e.model.hasShot === !1 ? (Te(), De("div", W_, " Choose a view · + Add Frame ")) : mt("", !0),
      e.model.viewUnavailable ? (Te(), Gn(Gl, { key: 1 })) : mt("", !0)
    ]));
  }
}, Fg = {
  __name: "PanoImageFilePicker",
  emits: ["file-selected", "file-cancelled"],
  setup(e, { expose: t, emit: r }) {
    const n = r, i = /* @__PURE__ */ Yt(null);
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
      var g, m;
      const { active: f, intent: h } = a();
      if (!f) return;
      const w = ((m = (g = u.target) == null ? void 0 : g.files) == null ? void 0 : m[0]) || null;
      if (w) {
        n("file-selected", { intent: h, file: w });
        return;
      }
      n("file-cancelled", { intent: h });
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
}, B_ = {
  class: "pano-stickers-node-help-popover",
  role: "tooltip"
}, Y_ = {
  __name: "PanoStickersNodeHelp",
  setup(e) {
    const t = /* @__PURE__ */ Yt(!1), r = Object.freeze([
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
        icon: tt(ze).help,
        label: "Controls and shortcuts",
        tip: "Controls and shortcuts",
        pressed: t.value ? "true" : "false",
        "extra-class": "pano-stickers-node-help-button",
        onClick: i[0] || (i[0] = At((o) => t.value = !t.value, ["stop"]))
      }, null, 8, ["icon", "pressed"]),
      Me("div", B_, [
        i[3] || (i[3] = Me("div", { class: "pano-stickers-node-help-title" }, "Node controls", -1)),
        (Te(!0), De(Qe, null, Pt(tt(r), (o) => (Te(), De("div", {
          key: o[0],
          class: "pano-stickers-node-help-row"
        }, [
          Me("kbd", null, rt(o[0]), 1),
          Me("span", null, rt(o[1]), 1)
        ]))), 128))
      ])
    ], 34));
  }
}, q_ = { class: "pano-stickers-node-surface" }, X_ = ["disabled"], J_ = ["aria-label", "data-tip"], Z_ = {
  key: 1,
  class: "pano-stickers-node-empty-note"
}, Q_ = {
  key: 2,
  class: "pano-stickers-node-drop-cue"
}, ew = {
  __name: "PanoStickersNodeSurface",
  props: {
    model: { type: Object, default: () => ({}) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Yt(null);
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
    return (s, a) => (Te(), De("div", q_, [
      Me("div", {
        class: "pano-stickers-node-toolbar",
        role: "toolbar",
        "aria-label": "Sticker controls",
        onPointerdown: a[5] || (a[5] = At(() => {
        }, ["stop"])),
        onWheel: a[6] || (a[6] = At(() => {
        }, ["stop"]))
      }, [
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-full-editor",
          type: "button",
          "data-action": "open-editor",
          onClick: a[0] || (a[0] = (l) => n({ type: "open-editor" }))
        }, [
          Be($t, {
            icon: tt(ze).fullscreen
          }, null, 8, ["icon"]),
          a[10] || (a[10] = Me("span", { class: "label" }, "Full Editor", -1))
        ]),
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-stickers-node-add-image",
          type: "button",
          "data-action": "add-image",
          disabled: e.model.importing === !0,
          onClick: i
        }, [
          Be($t, {
            icon: tt(ze).image
          }, null, 8, ["icon"]),
          a[11] || (a[11] = Me("span", { class: "label" }, "Add Image", -1))
        ], 8, X_),
        Be(en, {
          icon: e.model.locked ? tt(ze).lock_closed : tt(ze).lock_open,
          label: e.model.locked ? "Unlock Sticker" : "Lock Sticker",
          tip: e.model.locked ? "Unlock sticker" : "Lock sticker",
          pressed: e.model.locked ? "true" : "false",
          attrs: { "data-action": "toggle-lock", disabled: e.model.hasSelection !== !0 },
          onClick: a[1] || (a[1] = (l) => n({ type: "toggle-lock" }))
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]),
        Be(en, {
          icon: tt(ze).send_back,
          label: "Send to Back",
          tip: "Send to back",
          attrs: { "data-action": "send-back", disabled: e.model.canMoveBackward !== !0 || e.model.locked === !0 },
          onClick: a[2] || (a[2] = (l) => n({ type: "send-back" }))
        }, null, 8, ["icon", "attrs"]),
        Be(en, {
          icon: tt(ze).bring_front,
          label: "Bring to Front",
          tip: "Bring to front",
          attrs: { "data-action": "bring-front", disabled: e.model.canMoveForward !== !0 || e.model.locked === !0 },
          onClick: a[3] || (a[3] = (l) => n({ type: "bring-front" }))
        }, null, 8, ["icon", "attrs"]),
        Be(en, {
          icon: e.model.isExternalSelection ? tt(ze).back_initial : tt(ze).delete,
          label: e.model.isExternalSelection ? "Back to Initial" : "Delete Sticker",
          tip: e.model.isExternalSelection ? e.model.canRestoreInitial ? "Back to initial position" : "Already at initial position" : "Delete sticker",
          attrs: {
            "data-action": e.model.isExternalSelection ? "restore-initial" : "delete-selected",
            disabled: e.model.isExternalSelection ? e.model.canRestoreInitial !== !0 : e.model.canDelete !== !0
          },
          onClick: a[4] || (a[4] = (l) => n({ type: e.model.isExternalSelection ? "restore-initial" : "delete-selected" }))
        }, null, 8, ["icon", "label", "tip", "attrs"]),
        Be(Y_)
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
          icon: e.model.playing ? tt(ze).pause : tt(ze).play
        }, null, 8, ["icon"])
      ], 40, J_)) : mt("", !0),
      e.model.hasStickers === !1 ? (Te(), De("div", Z_, " Add Image to place a sticker ")) : mt("", !0),
      e.model.dropActive === !0 ? (Te(), De("div", Q_, "Drop image to add")) : mt("", !0),
      Be(Fg, {
        ref_key: "imageFilePickerRef",
        ref: r,
        onFileSelected: o
      }, null, 512),
      e.model.viewUnavailable ? (Te(), Gn(Gl, { key: 3 })) : mt("", !0)
    ]));
  }
}, tw = { class: "pano-studio-node-surface" }, nw = {
  class: "pano-studio-node-status",
  role: "status"
}, rw = { class: "pano-studio-node-shot" }, iw = { class: "pano-studio-node-size" }, ow = { class: "pano-studio-node-note" }, sw = {
  __name: "PanoStudioNodeSurface",
  props: {
    model: { type: Object, default: () => ({ status: { shot: "", size: "", note: "" }, viewUnavailable: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), De("div", tw, [
      Me("div", {
        class: "pano-studio-node-bar",
        onPointerdown: n[1] || (n[1] = At(() => {
        }, ["stop"])),
        onWheel: n[2] || (n[2] = At(() => {
        }, ["stop"]))
      }, [
        Me("div", nw, [
          Me("span", rw, rt(e.model.status.shot), 1),
          Me("span", iw, rt(e.model.status.size), 1),
          Me("span", ow, rt(e.model.status.note), 1)
        ]),
        Me("button", {
          class: "pano-btn pano-btn-texticon pano-studio-node-open",
          type: "button",
          "data-action": "open-editor",
          onClick: n[0] || (n[0] = (i) => {
            var o;
            return (o = t.onAction) == null ? void 0 : o.call(t, { type: "open-editor" });
          })
        }, [
          Be($t, {
            icon: tt(ze).fullscreen
          }, null, 8, ["icon"]),
          n[3] || (n[3] = Me("span", { class: "label" }, "Open Editor", -1))
        ])
      ], 32),
      e.model.viewUnavailable ? (Te(), Gn(Gl, { key: 0 })) : mt("", !0)
    ]));
  }
}, aw = 2048, mu = 4096, Ca = (e) => Math.floor(e + 0.5), sa = (e) => Math.max(2, 2 * Ca(e / 2));
function Tg(e) {
  return e.camera && e.camera.visible ? e.camera : null;
}
function lw(e) {
  const t = [e.scene.clip, ...e.stickers.map((i) => i.clip)].filter((i) => i.duration !== null).map((i) => i.start + i.duration), r = e.camera ? Fl.flatMap(([i]) => e.camera[i].keyframes.map((o) => o.frame)) : [];
  let n = 1;
  return e.timeline.length ? n = Math.max(1, Ca(e.timeline.length)) : t.length ? n = Math.max(1, Ca(Math.max(...t))) : r.length && (n = Math.max(1, Ca(Math.max(...r)) + 1)), Array.from({ length: n }, (i, o) => o);
}
function cw(e, t, r, n, i) {
  const o = r === "auto" && i == null;
  let s;
  r !== "auto" ? s = Number(r) : o ? s = aw : s = Math.floor(i * 360 / n);
  const a = Tg(e);
  if (!a || a.projection === "erp")
    return { width: Math.floor(s * n / 360), height: Math.floor(s / 2), reducedFrom: null, defaulted: o };
  const l = Math.max(...t.map((h) => Ol(a, h).hFOV_deg)), c = s / Math.PI * Math.tan(l * Math.PI / 360), d = c / a.aspect, u = [sa(c), sa(d)];
  if (Math.max(...u) <= mu) return { width: u[0], height: u[1], reducedFrom: null, defaulted: o };
  const f = mu / Math.max(c, d);
  return { width: sa(c * f), height: sa(d * f), reducedFrom: u, defaulted: o };
}
function Dg(e, t, r, n) {
  let i = 2166136261;
  for (const o of `${e}\0${t}\0${r}\0${n}`)
    i = Math.imul(i ^ o.codePointAt(0), 16777619) >>> 0;
  return i.toString(16).padStart(8, "0");
}
function uw({ stateText: e = "", outputSize: t, coverage: r, bgColor: n = "", run: i = null, erp: o = null, frame: s = null }) {
  const a = o || s;
  return a ? { kind: o ? "erp" : "frame", entry: a, current: !!i && i.key === Dg(e, t, String(r), n) } : null;
}
function dw(e) {
  return e ? li(kn(e.yaw_deg, e.pitch_deg, e.roll_deg)) : { x: 0, y: 0, z: 0, w: 1 };
}
const Mc = {
  run: "",
  edited: "Edited — run to update",
  "not-run": "Not run yet",
  unavailable: "Run output unavailable — run again"
};
function fw(e, { stateText: t = "", outputSize: r, coverage: n, bgColor: i = "", bgWidth: o, run: s = null, display: a = "run" }) {
  const l = Tg(e);
  let c = "ERP";
  l && (c = l.projection === "erp" ? `Camera · ${n}°` : "Camera · Perspective");
  let d;
  if (s && s.key === Dg(t, r, String(n), i))
    d = { width: s.width, height: s.height, reducedFrom: s.reduced_from, defaulted: r === "auto" && o === null };
  else {
    if (r === "auto" && o === void 0)
      return { shot: c, size: "auto", note: Mc[a] };
    d = cw(e, lw(e), r, n, o);
  }
  const u = Mc[a] ? [Mc[a]] : [];
  return d.reducedFrom ? u.push(`Capped at ${mu} (${d.reducedFrom[0]} × ${d.reducedFrom[1]})`) : d.defaulted && u.push("auto: no bg_media"), { shot: c, size: `${d.width} × ${d.height}`, note: u.join(" · ") };
}
function pw() {
  let e = null;
  return (t, r) => {
    const n = t.outputSize === "auto" ? t.bgWidth : null, i = JSON.stringify([t.stateText, t.outputSize, t.coverage, t.bgColor ?? "", n === void 0 ? "pending" : n, t.run ?? null, t.display ?? "run"]);
    return i === e ? null : (e = i, fw(r(), { ...t, bgWidth: n }));
  };
}
const tp = 24;
function hw(e = {}) {
  return (e == null ? void 0 : e.locked) === !0 ? "#ff4d4f" : String((e == null ? void 0 : e.source_kind) || "") === "external_image" || String((e == null ? void 0 : e.id) || "") === "sticker_image_1" ? "#f59e0b" : "#0070f3";
}
function is(e, t) {
  const r = Number((e == null ? void 0 : e.x) || 0) - Number((t == null ? void 0 : t.x) || 0), n = Number((e == null ? void 0 : e.y) || 0) - Number((t == null ? void 0 : t.y) || 0);
  return r * r + n * n;
}
function Lg(e, t) {
  let r = !1;
  for (let n = 0, i = t.length - 1; n < t.length; i = n, n += 1) {
    const o = t[n], s = t[i];
    o.y > e.y != s.y > e.y && e.x < (s.x - o.x) * (e.y - o.y) / (s.y - o.y || 1e-12) + o.x && (r = !r);
  }
  return r;
}
function gu(e, t) {
  if (!(e != null && e.visible)) return { kind: "none" };
  const r = e.corners.findIndex((n) => is(n, t) <= 121);
  if (r >= 0) {
    const n = e.corners[r], i = n.x - e.center.x, o = n.y - e.center.y;
    return {
      kind: "scale",
      cornerIndex: r,
      cursor: i * o >= 0 ? "nwse-resize" : "nesw-resize"
    };
  }
  return is(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Lg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none" };
}
function mw(e, t, { edges: r = !1, resize: n = !0, emptyCursor: i = "default" } = {}) {
  if (n && r && Array.isArray(e.edgeMidpoints)) {
    const s = e.edgeMidpoints.find((a) => is(a, t) <= 169);
    if (s) {
      const a = s.edge === "left" || s.edge === "right";
      return { kind: a ? "scale_x" : "scale_y", cursor: a ? "ew-resize" : "ns-resize", edge: s.edge, mid: s };
    }
  }
  const o = n ? e.corners.findIndex((s) => is(s, t) <= 121) : -1;
  if (o >= 0) {
    const s = e.corners[o], a = s.x - e.center.x, l = s.y - e.center.y;
    return { kind: "scale", cornerIdx: o, cursor: a * l >= 0 ? "nwse-resize" : "nesw-resize" };
  }
  return is(e.rotateHandle, t) <= 144 ? { kind: "rotate", cursor: "grab" } : Lg(t, e.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: i };
}
function Cd(e, t, { selected: r = !0 } = {}) {
  if (!e || !Array.isArray(t)) return !1;
  e.strokeStyle = r ? "rgba(250, 250, 250, 0.9)" : "#71717a", e.lineWidth = r ? 2 : 1, e.beginPath();
  let n = !1;
  return t.forEach((i) => (Array.isArray(i) ? i : []).forEach((o) => {
    n ? e.lineTo(o.x, o.y) : (e.moveTo(o.x, o.y), n = !0);
  })), n ? (e.closePath(), e.stroke(), !0) : !1;
}
function Rg(e, t, { accent: r = "#0070f3" } = {}) {
  !e || !t || (e.fillStyle = r, t.corners.forEach((n) => {
    e.beginPath(), e.arc(n.x, n.y, 5.5, 0, Math.PI * 2), e.fill();
  }), e.strokeStyle = "rgba(250, 250, 250, 0.9)", e.lineWidth = 1.8, e.beginPath(), e.moveTo(t.rotateStemBase.x, t.rotateStemBase.y), e.lineTo(t.rotateHandle.x, t.rotateHandle.y), e.stroke(), e.fillStyle = r, e.beginPath(), e.arc(t.rotateHandle.x, t.rotateHandle.y, 8, 0, Math.PI * 2), e.fill());
}
function Do(e, t) {
  const r = t.project(e);
  if (!Number.isFinite(r.z)) return null;
  const n = Math.max(t.width, t.height) * 2;
  return {
    x: Ie(r.x, -n, t.width + n),
    y: Ie(r.y, -n, t.height + n),
    rawZ: r.z
  };
}
function gw(e) {
  const t = yo(
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
function yi(e, t, r) {
  return td(Ka(
    Ka(e.centerDir, Wa(e.right, t)),
    Wa(e.up, r)
  ));
}
function Id(e, t) {
  if (!e || e.visible === !1) return { visible: !1 };
  const r = gw(e), n = Do(r.centerDir, t);
  if (!n) return { visible: !1 };
  const i = [
    yi(r, -r.tanX, r.tanY),
    yi(r, r.tanX, r.tanY),
    yi(r, r.tanX, -r.tanY),
    yi(r, -r.tanX, -r.tanY)
  ].map((f) => Do(f, t)), o = Array.from({ length: 4 }, (f, h) => {
    const w = [];
    for (let g = 0; g <= 28; g += 1) {
      const m = g / 28;
      let _, ee;
      h === 0 ? (_ = -r.tanX + 2 * r.tanX * m, ee = r.tanY) : h === 1 ? (_ = r.tanX, ee = r.tanY - 2 * r.tanY * m) : h === 2 ? (_ = r.tanX - 2 * r.tanX * m, ee = -r.tanY) : (_ = -r.tanX, ee = -r.tanY + 2 * r.tanY * m);
      const V = Do(yi(r, _, ee), t);
      V && w.push({ x: V.x, y: V.y });
    }
    return w;
  }), s = Do(yi(r, 0, r.tanY), t), a = Do(
    yi(r, 0, r.tanY + Math.max(r.tanY * 0.43, 0.053)),
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
      x: s.x + c / u * tp,
      y: s.y + d / u * tp
    },
    visible: !0
  };
}
function np(e, t, r, n) {
  const i = (Array.isArray(e) ? e : []).filter((s) => s && s.visible !== !1).map((s) => ({ item: s, geometry: Id(s, n) })).filter((s) => s.geometry.visible).sort((s, a) => {
    var l, c;
    return Number(((l = a.item) == null ? void 0 : l.z_index) || 0) - Number(((c = s.item) == null ? void 0 : c.z_index) || 0);
  }), o = i.find((s) => {
    var a;
    return String(((a = s.item) == null ? void 0 : a.id) || "") === String(t || "");
  });
  if (o) {
    const s = gu(o.geometry, r);
    if (s.kind === "scale" || s.kind === "rotate") return { ...o, hit: s };
  }
  for (const s of i) {
    const a = gu(s.geometry, r);
    if (a.kind !== "none") return { ...s, hit: a };
  }
  return null;
}
function yw(e, t, r) {
  const n = r.ray(t.x, t.y);
  return {
    ...e,
    yaw_deg: Ht(Math.atan2(n.x, n.z) * tn),
    pitch_deg: Math.asin(Ie(n.y, -1, 1)) * tn
  };
}
function bw(e, t, r) {
  const n = Math.max(1, Number(r || 0)) / Math.max(1, Number(t || 1));
  return {
    ...e,
    hFOV_deg: Ie(Number((e == null ? void 0 : e.hFOV_deg) || 20) * n, 1, 179),
    vFOV_deg: Ie(Number((e == null ? void 0 : e.vFOV_deg) || 20) * n, 1, 179)
  };
}
function vw(e, t, r, n = !1) {
  const i = (Number(r || 0) - Number(t || 0)) * tn;
  let o = Number((e == null ? void 0 : e.rot_deg) ?? (e == null ? void 0 : e.roll_deg) ?? 0) - i;
  return n && (o = Math.round(o / 45) * 45), { ...e, rot_deg: o };
}
let aa = null;
function Ed() {
  return aa || (aa = new Promise((e) => {
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
  }), aa);
}
function Un(e, t = 0) {
  const r = Number(e);
  return Number.isFinite(r) ? r : t;
}
function Sw(e, t = 1024) {
  const r = Math.max(1, Math.round(Un(e, 2048))), n = Math.min(r, Math.max(1, Math.round(Un(t, 1024))));
  return { width: n, height: Math.max(1, Math.round(n * 0.5)) };
}
function _w(e, t, r) {
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
function ww(e, t, r) {
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
function xw() {
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
    const c = String(o.rasterDataUrl || "").trim(), d = _w(o, s, a);
    if (!c.startsWith("data:") || !d) return null;
    const u = ww(o, s, a), f = String((o == null ? void 0 : o.id) || "").trim() || u, h = t.get(f);
    if ((h == null ? void 0 : h.revision) === u) return { source: h.source, revision: u };
    const w = n(c, l), g = Number(w.naturalWidth || w.width || 0), m = Number(w.naturalHeight || w.height || 0);
    if (!w.complete || g < 1 || m < 1) return null;
    const _ = rn({ label: "raster-object" });
    _.width = Math.max(1, Math.round(s)), _.height = Math.max(1, Math.round(a));
    const ee = _.getContext("2d");
    return ee ? (d.wrapOffsets.forEach((V) => {
      ee.save(), ee.translate(d.centerX + V, d.centerY), ee.rotate(d.rotationRad), ee.scale(d.scale, d.scale), ee.drawImage(
        w,
        -d.width * 0.5,
        -d.height * 0.5,
        d.width,
        d.height
      ), ee.restore();
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
function kw(e) {
  return Math.max(0, Number(e || 0)) + 1;
}
function Mw(e, t = "", r = 0) {
  return [String(e || ""), String(t || ""), Math.max(0, Number(r || 0))].join("|");
}
function Pw({ ImageCtor: e = null, maxEntries: t = 32 } = {}) {
  const r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new WeakMap(), i = Math.max(1, Math.trunc(Number(t || 32)));
  function o(u) {
    if (!u) return;
    u.entry.listeners.delete(u);
    const f = n.get(u.owner);
    (f == null ? void 0 : f.get(u.key)) === u && f.delete(u.key);
  }
  function s(u, f, h, w) {
    if (!u || typeof w != "function" || h.settled) return;
    let g = n.get(u);
    g || (g = /* @__PURE__ */ new Map(), n.set(u, g));
    const m = g.get(f);
    if ((m == null ? void 0 : m.entry) === h) {
      m.callback = w;
      return;
    }
    o(m);
    const _ = { owner: u, key: f, entry: h, callback: w };
    g.set(f, _), h.listeners.add(_);
  }
  function a(u, f) {
    u.settled || (u.settled = !0, u.image.onload = null, u.image.onerror = null, !f && r.get(u.key) === u && r.delete(u.key), [...u.listeners].forEach((h) => {
      o(h);
      try {
        h.callback(u.image, f);
      } catch {
      }
    }), l(i));
  }
  function l(u) {
    if (!(r.size <= u))
      for (const [f, h] of r) {
        if (r.size <= u) break;
        !h.settled || h.listeners.size > 0 || (h.image.onload = null, h.image.onerror = null, r.delete(f));
      }
  }
  function c(u, f, h, w = null) {
    const g = String(f || ""), m = String(h || "");
    if (!g || !m) return null;
    let _ = r.get(g);
    if (_)
      r.delete(g), r.set(g, _);
    else {
      l(i - 1);
      const V = e || globalThis.Image;
      if (typeof V != "function") return null;
      const te = new V();
      _ = { key: g, image: te, listeners: /* @__PURE__ */ new Set(), settled: !1 }, r.set(g, _), te.onload = () => a(_, !0), te.onerror = () => a(_, !1), te.src = m;
    }
    return _.settled || _.image.complete && Number(_.image.naturalWidth || _.image.width || 0) > 0 || s(u, g, _, w), _.image;
  }
  function d(u) {
    const f = n.get(u);
    f && ([...f.values()].forEach(o), n.delete(u), l(i));
  }
  return { get: c, disposeOwner: d };
}
const jo = /* @__PURE__ */ new WeakMap();
function Vg(e, t, { editor: r = !1 } = {}) {
  if (!e || typeof t != "function") return () => {
  };
  let n = jo.get(e);
  n || (n = [], jo.set(e, n));
  const i = { handler: t, editor: r };
  n.push(i);
  let o = !0;
  return () => {
    if (!o) return;
    o = !1;
    const s = jo.get(e);
    if (!s) return;
    const a = s.indexOf(i);
    a >= 0 && s.splice(a, 1), s.length === 0 && jo.delete(e);
  };
}
function ti(e, ...t) {
  const r = jo.get(e), n = (r == null ? void 0 : r.findLast((i) => i.editor)) || (r == null ? void 0 : r.at(-1));
  return n ? (n.handler(...t), !0) : !1;
}
const Ia = Object.freeze({
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
}), $g = "PanoramaSuite.Editor.ViewControls", Nw = {
  id: $g,
  category: ["Panorama Suite", "Editor", "3D view controls"],
  name: "3D view controls",
  tooltip: "Mouse controls of the Stickers editor's 6DoF view. The wheel zooms toward the point under the pointer.",
  type: "combo",
  options: Object.entries(Ia).map(([e, t]) => ({ value: e, text: t.label })),
  defaultValue: "default"
};
function Aw(e) {
  return Object.hasOwn(Ia, e) ? Ia[e] : Ia.default;
}
function Cw(e, { button: t, shiftKey: r = !1, altKey: n = !1, ctrlKey: i = !1, metaKey: o = !1 }) {
  if (i || o) return null;
  const s = e.bindings.find((a) => a.button === t && !!a.shift === r && !!a.alt === n);
  return (s == null ? void 0 : s.action) ?? null;
}
function Iw(e, t) {
  return e.bindings.some((r) => r.button === t);
}
const ll = "state_json";
function Rr(e, t) {
  var r;
  return ((r = e == null ? void 0 : e.widgets) == null ? void 0 : r.find((n) => (n == null ? void 0 : n.name) === t)) || null;
}
function Ew(e) {
  var s, a;
  const t = Rr(e, ll);
  if (!t) return !1;
  const r = String(t.value ?? "").trim();
  if (r && r !== "{}") return !1;
  const n = km(r, {
    coverage: (s = Rr(e, "coverage")) == null ? void 0 : s.value
  }), i = Ag(n, { type: "add-frame" });
  if (!i.changed) return !1;
  const o = JSON.stringify(i.state);
  return t.value = o, (a = t.callback) == null || a.call(t, o), !0;
}
function Od(e, t) {
  if (!e || Hn(e).coverageSyncInstalled) return;
  const r = Rr(e, "coverage");
  if (!r) return;
  const n = typeof r.callback == "function" ? r.callback.bind(r) : null;
  r.callback = function(...i) {
    var a, l, c, d, u, f, h, w, g;
    const o = n ? n(...i) : void 0, s = Hn(e);
    return s.parsedState = null, s.liveState = null, (l = (a = Lr(e).runtime) == null ? void 0 : a.requestDraw) == null || l.call(a), (d = (c = St(e).dom) == null ? void 0 : c.requestDraw) == null || d.call(c), (u = e.setDirtyCanvas) == null || u.call(e, !0, !0), (h = (f = e.graph) == null ? void 0 : f.setDirtyCanvas) == null || h.call(f, !0, !0), (g = (w = t == null ? void 0 : t.canvas) == null ? void 0 : w.setDirty) == null || g.call(w, !0, !0), o;
  }, Hn(e).coverageSyncInstalled = !0;
}
function Ow(e) {
  const t = String(e ?? "").trim();
  return /^#?[0-9a-fA-F]{6}$/.test(t) || /^#?[0-9a-fA-F]{3}$/.test(t);
}
function rp(e) {
  const t = String(e ?? "").trim();
  return t.startsWith("{") && t.endsWith("}");
}
function Fw(e) {
  var d, u, f, h, w, g;
  if (!e) return;
  const t = Rr(e, "coverage"), r = Rr(e, "bg_color"), n = Rr(e, ll), i = Rr(e, "sticker_state");
  if (!t || !r || !n) return;
  const o = String(t.value ?? "").trim(), s = String(r.value ?? "").trim(), a = String(n.value ?? "").trim();
  if (!(!/^(180|360)$/.test(o) && Ow(o) && (rp(s) || s === ""))) return;
  let c = "360";
  if (rp(s))
    try {
      c = String(Rn((d = JSON.parse(s)) == null ? void 0 : d.coverage));
    } catch {
      c = "360";
    }
  t.value = c, (u = t.callback) == null || u.call(t, c), r.value = o, (f = r.callback) == null || f.call(r, o), n.value = s, (h = n.callback) == null || h.call(n, s), i && (i.value = a, (w = i.callback) == null || w.call(i, a)), (g = e.setDirtyCanvas) == null || g.call(e, !0, !0);
}
function Ea(e, t) {
  (Array.isArray(e == null ? void 0 : e.widgets) ? e.widgets : []).forEach((n) => {
    var o, s;
    const i = String((n == null ? void 0 : n.name) || "");
    (i === t || i.trim() === t || i.toLowerCase().includes(String(t).toLowerCase())) && (n.__panoHidden || (n.__panoHidden = !0, n.__panoComputeSizeBeforeHide = n.computeSize, n.computeSize = () => [0, 0], n.type = "hidden", n.hidden = !0, n.options = { ...n.options || {}, hidden: !0 }, (o = n.element) != null && o.style && (n.element.style.display = "none"), (s = n.parentEl) != null && s.style && (n.parentEl.style.display = "none")));
  });
}
function yu(e, t, r) {
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
async function Tw(e, { tolerateOperationFailure: t = !1 } = {}) {
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
function Ho(e, t, r) {
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
async function zg(e, t = {}) {
  var n, i, o;
  await Tw(e, t);
  const r = Array.from(((n = Hn(e)) == null ? void 0 : n.flushers) ?? []);
  for (const s of r) await s();
  await ((o = (i = sl(e)) == null ? void 0 : i.flushBeforeQueue) == null ? void 0 : o.call(i));
}
function Dw(e, t) {
  if (!t || t.__panoQueueBarrierInstalled) return;
  t.__panoQueueBarrierInstalled = !0;
  const r = typeof t.serializeValue == "function" ? t.serializeValue : null;
  t.serializeValue = async function(...n) {
    return await zg(e), r ? r.apply(this, n) : this.value;
  };
}
function Lw(e) {
  var r;
  const t = St(e);
  try {
    (r = t.restore) == null || r.call(t);
  } catch {
  }
  t.dom = null, t.attached = !1, t.mountKey = null;
}
function jg(e) {
  const t = e.prototype.onRemoved;
  e.prototype.onRemoved = function() {
    const r = t ? t.apply(this, arguments) : void 0;
    return s_(this), r;
  };
}
function Rw(e) {
  var n;
  (Array.isArray(e == null ? void 0 : e.outputs) ? e.outputs : []).some((i) => String((i == null ? void 0 : i.name) || "") === "image" && String((i == null ? void 0 : i.type) || "") === "IMAGE") || (n = e == null ? void 0 : e.addOutput) == null || n.call(e, "image", "IMAGE");
}
function Pc(e, {
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
    const f = `editor_btn|${r}`, h = St(u);
    if (h.attached === !0 && h.mountKey === f) return;
    Lw(u), Od(u, t), Ea(u, ll);
    const w = Rr(u, ll);
    if (Dw(u, w), w && !w.__panoPreviewPatchedCb) {
      w.__panoPreviewPatchedCb = !0;
      const m = w.callback;
      w.callback = (_) => {
        var V;
        const ee = m ? m(_) : void 0;
        return (V = u.setDirtyCanvas) == null || V.call(u, !0, !1), ee;
      };
    }
    if (r === "PanoramaStickers") {
      u.__panoSceneStateV2 = l, u.__panoStudio = c;
      const m = Rr(u, "bg_color");
      !l && m && (m.value == null || String(m.value).trim() === "" || String(m.value).toLowerCase() === "#000000") && (m.value = "#00ff00", (g = m.callback) == null || g.call(m, "#00ff00")), yu(u, n, () => i(u, "stickers")), a && (o(u, {
        enabled: !0,
        buttonText: n,
        onOpen: () => i(u, "stickers")
      }), h.stickers && Ea(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260])), h.attached = !0, h.mountKey = f;
      return;
    }
    u.__panoSceneStateV2 = !1, yu(u, n, () => i(u, "cutout")), s(u, {
      buttonText: n,
      onOpen: () => i(u, "cutout")
    }), h.cutout && Ea(u, n), (!Array.isArray(u.size) || u.size[0] < 10 || u.size[1] < 10) && (u.size = [360, 260]), h.attached = !0, h.mountKey = f;
  }
  for (const u of ["onNodeCreated", "onConfigure", "onAdded"]) {
    const f = e.prototype[u];
    e.prototype[u] = function() {
      const h = f ? f.apply(this, arguments) : void 0;
      u === "onNodeCreated" && r === "PanoramaCutout" && Ew(this), u === "onConfigure" && r === "PanoramaStickers" && !l && this.widgets && Fw(this);
      const w = St(this).attached;
      return (u === "onNodeCreated" || this.widgets) && d(this), u === "onAdded" && w && ti(this, "attach"), h;
    };
  }
  jg(e);
}
function Vw(e) {
  if (!(e != null && e.prototype)) return;
  const t = e.prototype.onNodeCreated;
  e.prototype.onNodeCreated = function() {
    const n = t ? t.apply(this, arguments) : void 0;
    return (!Array.isArray(this.size) || this.size[0] < 10 || this.size[1] < 10) && (this.size = [360, 260]), n;
  };
  const r = e.prototype.onConfigure;
  e.prototype.onConfigure = function() {
    const n = r ? r.apply(this, arguments) : void 0;
    return Rw(this), n;
  }, jg(e);
}
function $w(e, {
  app: t,
  openEditor: r,
  attachPreview: n,
  requestFrame: i
}) {
  const o = Lr(e);
  if (!o || o.installDone || o.installProbeActive) return;
  o.installProbeActive = !0;
  const s = () => {
    if (Lr(e) !== o) return;
    const a = Number((e == null ? void 0 : e.id) ?? -1) >= 0 && !!(e != null && e.graph), l = o.installProbeTries + 1;
    if (o.installProbeTries = l, !a && l < 40) {
      i(s);
      return;
    }
    Od(e, t);
    const c = (d = e) => r(d, "stickers", { readOnly: !0, hideSidebar: !1 });
    yu(e, "Open Preview", () => c(e)), n(e, {
      buttonText: "Open Preview",
      modalTitle: "Panorama Preview",
      imageInputName: "erp_image",
      onOpen: c
    }), o.surface && Ea(e, "Open Preview"), o.installDone = !0, o.installProbeActive = !1;
  };
  i(s);
}
function zw({
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
    settings: [Nw, s1],
    // Extensions › Panorama Suite › Export Panorama Suite diagnostics (pano_diagnostics.js).
    commands: [Nf],
    menuCommands: [{ path: ["Extensions", "Panorama Suite"], commands: [Nf.id] }],
    beforeRegisterNodeDef(l, c) {
      const d = String((c == null ? void 0 : c.name) || "");
      (d === "PanoramaStickers" || d === "Panorama Stickers") && Pc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Stickers Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), d === "PanoramaStudio" && Pc(l, {
        app: e,
        matchType: "PanoramaStickers",
        buttonText: "Open Studio Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a,
        sceneStateV2: !0,
        studio: !0
      }), (d === "PanoramaCutout" || d === "Panorama Cutout") && Pc(l, {
        app: e,
        matchType: "PanoramaCutout",
        buttonText: "Open Cutout Editor",
        openEditor: t,
        attachStickers: r,
        attachCutout: n,
        enableStickersPreview: a
      }), Ua(d) && Vw(l);
    },
    // ComfyUI calls this for each node once a loaded graph is configured, links included.
    loadedGraphNode(l) {
      St(l).attached && o(l);
    },
    nodeCreated(l) {
      const c = String((l == null ? void 0 : l.comfyClass) || (l == null ? void 0 : l.type) || (l == null ? void 0 : l.title) || "");
      Od(l, e), Ua(c) && $w(l, { app: e, openEditor: t, attachPreview: i, requestFrame: s });
    }
  };
}
const jw = /\.(png|jpe?g|webp|gif|bmp)$/i;
function rr(e) {
  return e ? String(e.type || "").toLowerCase().startsWith("image/") ? !0 : jw.test(String(e.name || "")) : !1;
}
function Fd(e) {
  var t;
  return e ? (t = e.items) != null && t.length ? Array.from(e.items).some((r) => {
    const n = String((r == null ? void 0 : r.type) || "").trim().toLowerCase();
    return (r == null ? void 0 : r.kind) === "file" && (!n || n.startsWith("image/") || n === "application/octet-stream");
  }) : Array.from(e.files || []).some((r) => rr(r)) : !1;
}
function Hw(e, t = {}) {
  if (!(e != null && e.addEventListener) || !(e != null && e.removeEventListener)) return () => {
  };
  const r = typeof t.onActive == "function" ? t.onActive : () => {
  }, n = typeof t.onDrop == "function" ? t.onDrop : () => {
  }, i = (l) => {
    var c, d, u;
    (c = l == null ? void 0 : l.preventDefault) == null || c.call(l), (d = l == null ? void 0 : l.stopPropagation) == null || d.call(l), (u = l == null ? void 0 : l.stopImmediatePropagation) == null || u.call(l);
  }, o = (l) => {
    if (Fd(l == null ? void 0 : l.dataTransfer)) {
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
async function Go(e, t = {}) {
  var s, a, l, c;
  if (!rr(e)) throw new TypeError("A supported image file is required.");
  const r = t.ImageCtor || globalThis.Image, n = t.createObjectURL || ((a = (s = globalThis.URL) == null ? void 0 : s.createObjectURL) == null ? void 0 : a.bind(globalThis.URL)), i = t.revokeObjectURL || ((c = (l = globalThis.URL) == null ? void 0 : l.revokeObjectURL) == null ? void 0 : c.bind(globalThis.URL));
  if (typeof r != "function" || typeof n != "function")
    throw new Error("Image decoding is unavailable.");
  const o = n(e);
  try {
    const d = await new Promise((u, f) => {
      const h = new r();
      h.onload = () => u(h), h.onerror = () => f(new Error("image load failed")), h.src = o;
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
async function _i(e, { fetchApi: t } = {}) {
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
const ip = /* @__PURE__ */ new WeakSet(), op = /* @__PURE__ */ new WeakSet();
let sp = 0;
function bu(e) {
  if (!e || typeof e != "object" || op.has(e)) return e;
  const t = String(e.type || "preview");
  return sp += 1, e.type = `${t}:pano-${sp}`, op.add(e), e;
}
function cl(e) {
  if (!e || typeof e != "object" || ip.has(e)) return e;
  const t = typeof e.onRemove == "function" ? e.onRemove : null;
  let r = !1;
  return e.onRemove = function(...n) {
    if (!r)
      return r = !0, t == null ? void 0 : t.apply(this, n);
  }, ip.add(e), e;
}
function Hg(e, t) {
  var n, i;
  if (!t || ((i = (n = cl(t)) == null ? void 0 : n.onRemove) == null || i.call(n), !Array.isArray(e == null ? void 0 : e.widgets))) return !1;
  const r = e.widgets.indexOf(t);
  return r < 0 ? !1 : (e.widgets.splice(r, 1), Array.isArray(e.widgets_values) && e.widgets_values.length > r && e.widgets_values.splice(r, 1), !0);
}
function Gw({ requestFrame: e, cancelFrame: t, restore: r } = {}) {
  let n = 0, i = null, o = !1;
  return { schedule: (l) => o || n || typeof e != "function" ? !1 : (i = l, n = e(() => {
    n = 0;
    const c = i;
    i = null, o || r == null || r(c);
  }), !0), dispose: () => {
    o || (o = !0, n && typeof t == "function" && t(n), n = 0, i = null);
  } };
}
const { app: jt } = pa;
YS((e) => oi(e.id));
qS(pn);
const Td = Pw(), { linkedVideoFile: Gg } = dg({ app: jt, api: pn });
function vu() {
  var e, t;
  return String(
    ((t = (e = window == null ? void 0 : window.comfyAPI) == null ? void 0 : e.app) == null ? void 0 : t.ANIM_PREVIEW_WIDGET) || (pa == null ? void 0 : pa.ANIM_PREVIEW_WIDGET) || "$$comfy_animation_preview"
  );
}
const Kw = "pano_suite.ui_settings.v1", Ww = 120, Uw = 2048;
function ap() {
  var t;
  const e = {
    invert_view_x: !1,
    invert_view_y: !1
  };
  try {
    const r = String(((t = window == null ? void 0 : window.localStorage) == null ? void 0 : t.getItem(Kw)) || "").trim();
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
function Bw() {
  var e;
  try {
    return (window == null ? void 0 : window.__PANO_PREVIEW_DEBUG__) === !0 ? !0 : String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem("panoPreviewDebug")) || "").trim() === "1";
  } catch {
    return !1;
  }
}
function Lo(e) {
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
function Yw() {
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
function Su(e) {
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
function Kg(e) {
  const t = Su(e);
  return !t || t[0] < 10 || t[1] < 10;
}
function qw(e, t, r) {
  Kg(e) && (e.size = [Math.max(1, Number(t)), Math.max(1, Number(r))]);
}
function _u(e) {
  var t, r;
  return (r = (t = St(e)) == null ? void 0 : t.dom) != null && r.widget ? "dom" : "none";
}
function Dd(e) {
  return String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || "");
}
function Wg(e) {
  return Ua(Dd(e));
}
function lp(e = null) {
  var o, s;
  const t = String((window == null ? void 0 : window.__COMFYUI_FRONTEND_VERSION__) || "unknown"), r = String((window == null ? void 0 : window.__PANO_PREVIEW_FORCE_PATH__) || ""), n = typeof (e == null ? void 0 : e.addDOMWidget) == "function" ? "dom_widget" : "no_dom_widget", i = String(((s = (o = jt == null ? void 0 : jt.canvas) == null ? void 0 : o.constructor) == null ? void 0 : s.name) || "");
  return [t, n, r, i].join("|");
}
function Ug(e) {
  const t = St(e);
  if (t.controller) return t.controller;
  const r = {
    activeBackend: "none",
    attach(n = {}) {
      const i = String(n.mode || "stickers") === "cutout" ? "cutout" : "stickers", o = "dom", s = _u(e);
      this.activeBackend = s;
      const a = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers", l = t.noPreview === !0, c = n.noPreview === !0;
      if (s === o && s !== "none" && a === i && l === c) {
        t.mode = i, t.noPreview = c, t.openEditor = typeof n.onOpen == "function" ? n.onOpen : t.openEditor;
        return;
      }
      s !== "none" && Nc(e), Kx(e, { ...n, mode: i }), this.activeBackend = _u(e);
    },
    rebind(n = {}) {
      const i = String(n.mode || St(e).mode || "stickers") === "cutout" ? "cutout" : "stickers";
      Nc(e), this.activeBackend = "none", this.attach({ ...n, mode: i });
    },
    teardown() {
      Nc(e), this.activeBackend = "none";
    }
  };
  return t.controller = r, r;
}
function Nc(e, t = {}) {
  var i, o, s, a;
  if (!e) return;
  wu.unregister(e);
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
      const d = String((c == null ? void 0 : c.name) || ""), u = String((c == null ? void 0 : c.type) || ""), f = vu();
      return d === f || u === f || d === "pano_preview" || u === "pano_preview" ? !0 : d === "preview" && u === "pano_preview";
    }).forEach((c) => mx(e, c));
  } catch {
  }
  r.dom = null, r.noPreview = !1, r.bootMinHeightTimer && (clearTimeout(r.bootMinHeightTimer), r.bootMinHeightTimer = null), r.bootMinHeightActive = !1, String(t.reason || ""), t.keepMonitor;
}
function Xw(e, t = "#00ff00") {
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
function Jw(e) {
  var r, n;
  const t = (r = Hn(e)) == null ? void 0 : r.liveState;
  return t && typeof t == "object" || typeof t == "string" && t.trim() ? t : String(((n = br(e, "state_json")) == null ? void 0 : n.value) || "");
}
function vn(e) {
  var l, c;
  const t = Hn(e), r = Jw(e), n = t.liveStateVersion, i = String(((l = br(e, "bg_color")) == null ? void 0 : l.value) || "#1a1a1e"), o = Number(((c = br(e, "coverage")) == null ? void 0 : c.value) || 360) === 180 ? 180 : 360, s = t.parsedState;
  if (s && s.source === r && s.liveVersion === n && s.bg === i && s.coverage === o)
    return s.parsed;
  const a = e.__panoSceneStateV2 && typeof r == "string" ? Mm(r, { backgroundColor: i, coverage: o, active: Cm(e) }) : Xw(r, i);
  return a.coverage = o, t.parsedState = { source: r, liveVersion: n, bg: i, coverage: o, parsed: a }, a;
}
function br(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function Zw(e, t) {
  var r, n;
  return !e || t == null ? null : typeof e.getNodeById == "function" ? e.getNodeById(t) : ((r = e._nodes_by_id) == null ? void 0 : r[t]) || ((n = e._nodes_by_id) == null ? void 0 : n[String(t)]) || null;
}
function Bg(e, t, r = null) {
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
  return !n && r != null && (n = Zw(e == null ? void 0 : e.graph, r)), n;
}
function Qw(e) {
  return (Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : []).map((r) => String((r == null ? void 0 : r.name) || "")).filter(Boolean);
}
function Yg(e, t = []) {
  const r = Qw(e), n = [];
  return t.forEach((i) => {
    r.includes(String(i)) && n.push(String(i));
  }), r.forEach((i) => {
    ar.includes(i) && !n.includes(i) && n.push(i);
  }), n.length ? n : t;
}
function cp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":").map((n) => String(n).trim()).filter(Boolean);
  return { full: t, tail: r.length ? r[r.length - 1] : t };
}
function ul(e, t) {
  const r = cp(e), n = cp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function ex(e, t) {
  var r;
  return Bg(e, t, e.graph ? (r = e.getInputLink(t)) == null ? void 0 : r.origin_id : null);
}
function tx(e, t = ar) {
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return /* @__PURE__ */ new Set();
  const i = Yg(e, t).map((a) => r.findIndex((l) => String((l == null ? void 0 : l.name) || "") === String(a))).filter((a) => a >= 0), o = r.map((a, l) => ({ input: a, idx: l })).filter(({ input: a }) => String((a == null ? void 0 : a.type) || "").toUpperCase() === "IMAGE").map(({ idx: a }) => a), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  return t_(e, s, ex);
}
const wu = {
  nodes: /* @__PURE__ */ new Set(),
  bound: !1,
  listener: null,
  ensureBound() {
    var e;
    this.bound || !((e = pn) != null && e.addEventListener) || (this.listener = (t) => {
      const r = (t == null ? void 0 : t.detail) || {}, n = String((r == null ? void 0 : r.display_node) ?? (r == null ? void 0 : r.node) ?? "").trim();
      [...this.nodes].forEach((o) => {
        var l, c, d, u, f, h, w;
        if (!o) return;
        const s = ul(n, o == null ? void 0 : o.id);
        String(St(o).mode || "") === "cutout" && !s || !s && ![...tx(o)].some((g) => ul(n, g)) || (s && (Rd(o), (c = (l = St(o).dom) == null ? void 0 : l.requestDraw) == null || c.call(l)), !ag(Mn(o).executedOutputs, n, r.output) && (Xg(o), (u = (d = St(o).dom) == null ? void 0 : d.requestDraw) == null || u.call(d), (f = o.setDirtyCanvas) == null || f.call(o, !0, !0), (w = (h = o.graph) == null ? void 0 : h.setDirtyCanvas) == null || w.call(h, !0, !0), String(St(o).mode || ""), String(St(o).mode || ""), void 0));
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
function dl(e) {
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
function nx(e) {
  const t = String(e || "").trim();
  return t ? /^https?:\/\//i.test(t) || t.startsWith("/") || t.startsWith("blob:") || t.startsWith("data:") : !1;
}
function rx(e) {
  const r = String(e || "").trim().replaceAll("\\", "/").replace(/^\.\/+/, "").replace(/^\/+/, "");
  if (!r) return { filename: "", subfolder: "" };
  const n = r.split("/").filter(Boolean);
  if (!n.length) return { filename: "", subfolder: "" };
  const i = String(n.pop() || "").trim(), o = n.join("/");
  return { filename: i, subfolder: o };
}
function ix(e) {
  const t = [], r = /* @__PURE__ */ new Set();
  return e.forEach((n) => {
    const i = String(n || "").trim();
    !i || r.has(i) || (r.add(i), t.push(i));
  }), t;
}
function ox(e) {
  const t = String(e || "").trim();
  if (!t) return [];
  if (nx(t)) return [t];
  const { filename: r, subfolder: n } = rx(t);
  if (!r) return [t];
  const i = ["temp", "output", "input"].map((o) => dl({
    filename: r,
    subfolder: n,
    type: o
  }));
  return ix([...i, t]);
}
function sx(e) {
  if (!e || typeof e != "object") return "";
  const t = String(e.type || "").trim().toLowerCase();
  if (t === "dataurl") return String(e.value || "");
  if (t === "comfy_image") {
    const r = String(e.filename || "").trim();
    return r ? dl({
      filename: r,
      subfolder: String(e.subfolder || ""),
      type: String(e.storage || "input")
    }) : "";
  }
  return "";
}
function oi(e) {
  const t = jt == null ? void 0 : jt.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  const i = r;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (ul(o, i)) return t.get(o);
  } else {
    const o = Object.keys(t);
    for (const s of o)
      if (ul(s, i)) return t[s];
  }
  return null;
}
function $r(e, t, r = null) {
  const n = r || oi(e == null ? void 0 : e.id), i = n != null && n.ui && Object.prototype.hasOwnProperty.call(n.ui, t) ? n.ui[t] : n == null ? void 0 : n[t];
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
      return dl({ filename: t, subfolder: r, type: n });
    }
    for (const r of e) {
      const n = _n(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : dl(e);
}
function vs(e) {
  return e ? typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement ? Number(e.width || 0) > 0 && Number(e.height || 0) > 0 : e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Oa(e) {
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
function Ld(e, t) {
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
function ax(e) {
  const t = [], r = /* @__PURE__ */ new Set(), n = (o) => {
    Array.isArray(o) && o.forEach((s) => t.push(s));
  }, i = (o, s = 0) => {
    !o || s > 3 || r.has(o) || typeof o == "object" && (r.add(o), n(o.images), i(o.output, s + 1), i(o.ui, s + 1), i(o.data, s + 1), i(o.result, s + 1));
  };
  return i(e, 0), t;
}
function lx(e, t) {
  try {
    const r = Mn(e);
    r.ownOutputRev = kw(r.ownOutputRev);
    const n = ax(t);
    let i = "";
    for (const o of n)
      if (i = _n(o), i) break;
    i ? (Ld(String(i || ""), r.ownOutputRev), r.ownOutputRev, void 0) : (Object.keys(t || {}), void 0);
  } catch {
  }
}
function oo(e) {
  var r;
  const t = Mn(e);
  t && ((r = t.ownOutputVideo) == null || r.player.destroy(), t.ownOutputVideo = null);
}
function cx(e, t = ["pano_videos"], r = null) {
  const n = e == null ? void 0 : e.id;
  if (n == null) return null;
  if (!Qt(e, "background"))
    return oo(e), null;
  const i = oi(n), o = Sd(i, t, _n);
  if (!o)
    return oo(e), null;
  const s = Mn(e), a = Ld(o, s.ownOutputRev), l = `${t.join("|")}:${a}`, c = s.ownOutputVideo;
  if (c && c.key === l) return c.player.failed() ? null : c.player.video;
  oo(e);
  const d = n_({
    documentRef: document,
    src: a,
    onFrame: r
  });
  return d ? (s.ownOutputVideo = { key: l, player: d }, d.video) : null;
}
function ux(e, t = []) {
  var c, d;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  if (!r.length) return { src: "", sourceType: "", inputName: "" };
  const i = Yg(e, t).map((u) => r.findIndex((f) => String((f == null ? void 0 : f.name) || "") === String(u))).filter((u) => u >= 0), o = r.map((u, f) => ({ input: u, idx: f })).filter(({ input: u }) => String((u == null ? void 0 : u.type) || "").toUpperCase() === "IMAGE").map(({ idx: u }) => u), s = [.../* @__PURE__ */ new Set([...i, ...o])];
  for (const u of s) {
    const f = r[u], h = e.graph ? e.getInputLink(u) : null;
    if ((h == null ? void 0 : h.origin_id) == null) continue;
    const w = h.origin_id, g = Bg(e, u, w);
    if (!g) continue;
    const m = Number(h.origin_slot ?? 0), _ = oi((g == null ? void 0 : g.id) ?? w), ee = Array.isArray(_ == null ? void 0 : _.images) ? _.images : [];
    if (ee.length) {
      const X = [];
      m >= 0 && m < ee.length && X.push(ee[m]), X.push(...ee);
      for (const j of X.filter((W) => !Ma(W))) {
        const W = _n(j);
        if (W)
          return String((f == null ? void 0 : f.name) || ""), { src: `${W}&pano_src=${fu(_)}`, sourceType: "nodeOutputs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    let V = [];
    try {
      V = typeof (jt == null ? void 0 : jt.getNodeImageUrls) == "function" ? jt.getNodeImageUrls(g) || [] : [];
    } catch {
      V = [];
    }
    if (Array.isArray(V) && V.length) {
      const X = [];
      m >= 0 && m < V.length && X.push(V[m]), X.push(...V);
      for (const j of X) {
        const W = _n(j);
        if (W)
          return String((f == null ? void 0 : f.name) || ""), { src: W, sourceType: "appNodeImageUrls", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const te = Array.isArray(g == null ? void 0 : g.imgs) ? g.imgs : [];
    if (te.length) {
      const X = [];
      m >= 0 && m < te.length && X.push(te[m]), X.push(...te);
      for (const j of X) {
        const W = _n(j);
        if (W)
          return String((f == null ? void 0 : f.name) || ""), { src: W, sourceType: "nodeImgs", inputName: String((f == null ? void 0 : f.name) || "") };
      }
    }
    const I = (c = g == null ? void 0 : g.widgets) == null ? void 0 : c.find((X) => String((X == null ? void 0 : X.name) || "").toLowerCase() === "image");
    if (I) {
      let X = _n(I.value);
      if (X && !X.includes("/") && !X.includes(":") && (g.comfyClass === "LoadImage" || g.type === "LoadImage") && (X = pn.apiURL(`/view?filename=${encodeURIComponent(X)}&type=input&subfolder=`)), X)
        return String((f == null ? void 0 : f.name) || ""), { src: X, sourceType: "widget", inputName: String((f == null ? void 0 : f.name) || "") };
    }
  }
  const a = Qt(e, "background") ? oi(e == null ? void 0 : e.id) : null, l = [];
  if (Array.isArray(a == null ? void 0 : a.pano_input_images) && l.push(...a.pano_input_images), Array.isArray((d = a == null ? void 0 : a.ui) == null ? void 0 : d.pano_input_images) && l.push(...a.ui.pano_input_images), l.length > 0)
    for (const u of l) {
      const f = _n(u);
      if (f)
        return { src: f, sourceType: "selfOutput", inputName: "fallback" };
    }
  return { src: "", sourceType: "", inputName: "" };
}
function dx(e, t = [], r = {}) {
  const n = ux(e, t), i = String((n == null ? void 0 : n.src) || "").trim();
  if (!i) return null;
  const o = ox(i);
  if (!o.length) return null;
  const s = (r == null ? void 0 : r.preserveReadyWhilePending) !== !1, a = Mn(e).linkedImages, l = t.join("|") || "image", c = a.get(l);
  if (c && c.srcRaw === i && c.img) return c.img;
  if (c && c.pendingSrcRaw === i && c.pendingImg)
    return s && c.img && (c.img.complete || c.img.naturalWidth || c.img.width) ? c.img : c.pendingImg;
  const d = new Image(), u = c || { srcRaw: "", resolvedSrc: "", img: null, pendingSrcRaw: "", pendingResolvedSrc: "", pendingImg: null };
  u.pendingSrcRaw = i, u.pendingResolvedSrc = "", u.pendingImg = d, a.set(l, u);
  let f = -1;
  const h = () => {
    if (f += 1, f >= o.length) {
      a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String((n == null ? void 0 : n.sourceType) || ""), o.length;
      return;
    }
    const w = o[f];
    u.pendingResolvedSrc = w, d.src = w;
  };
  return d.onload = () => {
    var w;
    a.get(l) === u && u.pendingImg === d && (u.srcRaw = i, u.resolvedSrc = String(u.pendingResolvedSrc || d.src || ""), u.img = d, u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null), String(u.pendingResolvedSrc || u.resolvedSrc || d.src || ""), String((n == null ? void 0 : n.sourceType) || ""), (w = e.setDirtyCanvas) == null || w.call(e, !0, !0);
  }, d.onerror = (w) => {
    if (f + 1 < o.length) {
      h();
      return;
    }
    a.get(l) === u && u.pendingImg === d && (u.pendingSrcRaw = "", u.pendingResolvedSrc = "", u.pendingImg = null, u.img || a.delete(l)), String(u.pendingResolvedSrc || u.resolvedSrc || ""), String((n == null ? void 0 : n.sourceType) || ""), String((w == null ? void 0 : w.type) || "error");
  }, h(), s && u.img && (u.img.complete || u.img.naturalWidth || u.img.width) ? u.img : d;
}
function qg(e, t = [], r = null, n = {}) {
  const i = dx(e, t, n);
  return i ? (typeof r == "function" && (i.complete && (i.naturalWidth || i.width) || i.addEventListener("load", () => r(), { once: !0 })), i) : null;
}
function Xg(e) {
  e && (Td.disposeOwner(e), Mn(e).linkedImages.clear(), oo(e));
}
function fx(e) {
  e && (Mn(e).linkedImages.clear(), oo(e));
}
function Jg(e, t) {
  const r = St(e);
  r.renderCache ?? (r.renderCache = {
    mode: String(t || ""),
    isLoading: !1,
    loadingSinceTs: 0
  });
  const n = r.renderCache, i = String(t || "");
  return n.mode !== i && (n.mode = i, n.isLoading = !1, n.loadingSinceTs = 0), n;
}
function Ro(e, t, r = "") {
  var s;
  const n = Jg(e, ((s = St(e)) == null ? void 0 : s.mode) || "unknown"), i = performance.now();
  return t ? (n.isLoading || (n.isLoading = !0, n.loadingSinceTs = i), !0) : n.isLoading ? i - Number(n.loadingSinceTs || 0) < Ww ? !0 : (n.isLoading = !1, n.loadingSinceTs = 0, !1) : !1;
}
function up(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.w) || 1)), n = Math.max(1, Number((t == null ? void 0 : t.h) || 1)), i = Math.max(1, Number((e == null ? void 0 : e.clientWidth) || r)), o = Math.max(1, Number((e == null ? void 0 : e.clientHeight) || n)), s = r / i, a = n / o, l = Math.min(s, a);
  return Number.isFinite(l) && l > 0 ? l : 1;
}
function px(e, t, r = 1) {
  const n = Number((t == null ? void 0 : t.x) || 0), i = Number((t == null ? void 0 : t.y) || 0), o = Number((t == null ? void 0 : t.w) || 0), s = Number((t == null ? void 0 : t.h) || 0);
  if (o <= 0 || s <= 0) return;
  const a = Math.max(14, Math.round(14 * r)), l = Math.min(Math.round(220 * r), Math.max(Math.round(120 * r), o * 0.44)), c = Math.max(Math.round(34 * r), a + Math.round(14 * r)), d = n + (o - l) * 0.5, u = i + (s - c) * 0.5;
  e.save(), e.fillStyle = "rgba(20,20,24,0.72)", e.beginPath(), e.roundRect(d, u, l, c, 8), e.fill(), e.fillStyle = "rgba(161,161,170,0.95)", e.font = `600 ${a}px Plus Jakarta Sans, Geist, sans-serif`, e.textAlign = "center", e.textBaseline = "middle", e.fillText("Loading...", d + l * 0.5, u + c * 0.5 + 0.5), e.restore();
}
function Ac(e, t) {
  var n, i;
  const r = (i = (n = St(e)) == null ? void 0 : n.dom) == null ? void 0 : i.emptyHintEl;
  r && (r.style.display = t ? "flex" : "none");
}
function hx(e) {
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
function mx(e, t) {
  return Hg(e, t);
}
function fl(e, t, r, n = null) {
  var f;
  if (!String(t || "")) return null;
  let o = sx(r);
  if (!o && (n != null && n.external)) {
    if (!Qt(e, "external-sticker")) return null;
    const h = oi(e == null ? void 0 : e.id), w = ((f = h == null ? void 0 : h.ui) == null ? void 0 : f.pano_sticker_input_images) || (h == null ? void 0 : h.pano_sticker_input_images) || [];
    for (const g of Array.isArray(w) ? w : [w])
      if (o = _n(g), o) break;
  }
  if (!o) return null;
  const s = $r(e, "pano_sticker_input_state_hash"), a = n != null && n.external ? String(s ?? "") : "", l = n != null && n.external ? Mn(e).ownOutputRev : 0, c = n != null && n.external ? Ld(o, l) : o, d = Mw(o, a, l);
  return Td.get(e, d, c, (h, w) => {
    var g, m;
    w && (n != null && n.external && Mn(e).outputFromRun && ti(e, "image-loaded"), (m = (g = St(e).dom) == null ? void 0 : g.requestDraw) == null || m.call(g));
  }) || null;
}
function gx(e, t) {
  var f, h, w, g;
  const r = St(e), n = _x(e, t), i = wx(t), o = Array.isArray((f = t == null ? void 0 : t.painting) == null ? void 0 : f.groups) ? t.painting.groups : [], s = new Map(
    o.filter((m) => m && typeof m == "object").map((m) => [String((m == null ? void 0 : m.actionGroupId) || (m == null ? void 0 : m.id) || "").trim(), Number((m == null ? void 0 : m.z_index) || 0)])
  ), a = n ? i.map((m) => {
    const _ = n.getGroupDisplayCanvas(m);
    return _ ? {
      id: `paint_group:${m}`,
      source: _,
      revision: `${String(r.paintRevisionKey || "")}:${m}`,
      zIndex: Number(s.get(m) || 0),
      opacity: 1,
      visible: !0
    } : null;
  }).filter(Boolean) : [], l = Array.isArray((h = t == null ? void 0 : t.painting) == null ? void 0 : h.raster_objects) ? t.painting.raster_objects : [];
  if (l.length === 0)
    return (g = (w = r.rasterCache) == null ? void 0 : w.retain) == null || g.call(w, []), a;
  r.rasterCache || (r.rasterCache = xw()), r.rasterReady || (r.rasterReady = () => {
    var m, _;
    return (_ = (m = r.dom) == null ? void 0 : m.requestDraw) == null ? void 0 : _.call(m);
  });
  const c = Sw(t == null ? void 0 : t.output_preset), d = l.filter((m) => (m == null ? void 0 : m.visible) !== !1 && String((m == null ? void 0 : m.layerKind) || "paint") === "paint").map((m) => String((m == null ? void 0 : m.id) || ""));
  r.rasterCache.retain(d);
  const u = l.map((m) => {
    const _ = r.rasterCache.get(
      m,
      c.width,
      c.height,
      r.rasterReady
    );
    return _ ? {
      id: `raster:${String((m == null ? void 0 : m.id) || "")}`,
      source: _.source,
      revision: _.revision,
      zIndex: Number((m == null ? void 0 : m.z_index) || 0),
      opacity: 1,
      visible: (m == null ? void 0 : m.visible) !== !1
    } : null;
  }).filter(Boolean);
  return [...a, ...u];
}
function yx(e, t, r, n) {
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
  const i = vx(e, t, n);
  return i || null;
}
function bx(e, t) {
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
function vx(e, t, r) {
  var i, o;
  const n = bx(t, r || (jt == null ? void 0 : jt.canvas));
  return n ? {
    x: n.x - Number(((i = e == null ? void 0 : e.pos) == null ? void 0 : i[0]) || 0),
    y: n.y - Number(((o = e == null ? void 0 : e.pos) == null ? void 0 : o[1]) || 0)
  } : null;
}
function Sx(e, t) {
  const r = Math.max(1, Number((t == null ? void 0 : t.output_preset) || 2048));
  return {
    kind: "ERP_GLOBAL",
    width: r,
    height: Math.max(1, Math.round(r * 0.5))
  };
}
function _x(e, t) {
  var d, u, f, h, w, g, m, _, ee, V, te, I;
  const r = (u = (d = t == null ? void 0 : t.painting) == null ? void 0 : d.paint) == null ? void 0 : u.strokes, n = (h = (f = t == null ? void 0 : t.painting) == null ? void 0 : f.mask) == null ? void 0 : h.strokes, i = Array.isArray(r) && r.length > 0, o = Array.isArray(n) && n.length > 0;
  if (!i && !o) return null;
  const s = St(e), a = Sx(e, t), l = `${a.width}x${a.height}`;
  (!s.paintEngine || s.paintDescriptorKey !== l) && (s.paintEngine = Il(a), s.paintDescriptorKey = l, s.paintRevision = null, s.paintRevisionKey = "");
  const c = {
    paint: r || null,
    mask: n || null,
    groups: ((w = t == null ? void 0 : t.painting) == null ? void 0 : w.groups) || null,
    rasterObjects: ((g = t == null ? void 0 : t.painting) == null ? void 0 : g.raster_objects) || null
  };
  return (((m = s.paintRevision) == null ? void 0 : m.paint) !== c.paint || ((_ = s.paintRevision) == null ? void 0 : _.mask) !== c.mask || ((ee = s.paintRevision) == null ? void 0 : ee.groups) !== c.groups || ((V = s.paintRevision) == null ? void 0 : V.rasterObjects) !== c.rasterObjects) && (s.paintRevision = c, s.paintRevisionKey = [
    i ? "p1" : "p0",
    o ? "m1" : "m0",
    String(Array.isArray((te = t == null ? void 0 : t.painting) == null ? void 0 : te.groups) ? t.painting.groups.length : 0),
    String(Array.isArray((I = t == null ? void 0 : t.painting) == null ? void 0 : I.raster_objects) ? t.painting.raster_objects.length : 0)
  ].join(":"), s.paintEngine.rebuildCommitted(t)), s.paintEngine;
}
function wx(e) {
  var r;
  return (Array.isArray((r = e == null ? void 0 : e.painting) == null ? void 0 : r.groups) ? e.painting.groups : []).filter((n) => n && typeof n == "object").slice().sort((n, i) => Number((n == null ? void 0 : n.z_index) || 0) - Number((i == null ? void 0 : i.z_index) || 0)).map((n) => String((n == null ? void 0 : n.actionGroupId) || (n == null ? void 0 : n.id) || "").trim()).filter(Boolean);
}
function dp(e) {
  return {
    width: Math.max(1, Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0)),
    height: Math.max(1, Number((e == null ? void 0 : e.naturalHeight) || (e == null ? void 0 : e.videoHeight) || (e == null ? void 0 : e.height) || 0))
  };
}
function xx(e, t, r) {
  const n = Id(t, r);
  n.visible && Cd(e, n.boundaryEdges, { selected: !1 });
}
function kx(e, t, r) {
  const n = Id(t, r);
  n.visible && (e.save(), Cd(e, n.boundaryEdges, { selected: !0 }), Rg(e, n, { accent: hw(t) }), e.restore());
}
function xu(e, t, r) {
  return Um(rl(St(e).view || { yaw: 0, pitch: 0, fov: 100 }, t, r), t, r);
}
function pl(e) {
  var t;
  return ((t = St(e).playback) == null ? void 0 : t.playback.frame) ?? po;
}
function Mx(e) {
  return [Qt(e, "background") ? Sd(oi(e.id), ["pano_input_videos"], _n) : "", Gg(e, ar)];
}
function Px(e) {
  var o;
  if (!Qt(e, "external-sticker")) return null;
  const t = oi(e.id), r = $r(e, "pano_sticker_input_video_meta");
  if (!r || typeof r != "object") return null;
  const n = ((o = t == null ? void 0 : t.ui) == null ? void 0 : o.pano_sticker_input_frames) || (t == null ? void 0 : t.pano_sticker_input_frames);
  if (Array.isArray(n) && n.length) return { frames: n.map(_n), meta: r };
  const i = Sd(t, ["pano_sticker_input_videos"], _n);
  return i ? { src: i, meta: r } : null;
}
function Nx({ playback: e, video: t, still: r }) {
  return e.source ? !e.showsVideo && r.__panoFrameIdx > 0 ? r : t : null;
}
function Zg(e, t) {
  var n;
  const r = St(e);
  return ((n = r.scene) == null ? void 0 : n.state) !== t && (r.scene = { state: t, sceneState: Gr({ ...t, painting: null }) }), r.scene.sceneState;
}
function Ax(e, t) {
  const r = jl(e), n = !!r.bg_media;
  if (!n && !r.scene) return null;
  if (Qt(e, "background")) {
    const o = $r(e, "pano_bg_width");
    if (o !== void 0) return o;
  }
  if (!n) return;
  if (tg(e, ar)) {
    const { playback: o, video: s } = t;
    return o.source && o.source === Gg(e, ar) && s.videoWidth > 0 ? s.videoWidth : void 0;
  }
  const i = qg(e, ar, null, { preserveReadyWhilePending: !1 });
  return vs(i) && i.naturalWidth > 0 ? i.naturalWidth : void 0;
}
function Cx(e, t) {
  var i, o, s;
  const r = String(((i = br(e, "output_size")) == null ? void 0 : i.value) ?? ""), n = ["background", "external-sticker", "scene"].every((a) => Qt(e, a));
  return {
    stateText: String(((o = br(e, "state_json")) == null ? void 0 : o.value) ?? ""),
    outputSize: r,
    coverage: vn(e).coverage,
    bgColor: String(((s = br(e, "bg_color")) == null ? void 0 : s.value) ?? ""),
    bgWidth: r === "auto" ? Ax(e, t) : null,
    run: n && $r(e, "pano_output_size") || null,
    erp: $r(e, "pano_output_erp") || null,
    frame: $r(e, "pano_output_frame") || null
  };
}
const Ix = 38;
function Rd(e) {
  const t = Mn(e);
  t != null && t.studioRunImage && (t.studioRunImage.image.removeAttribute("src"), t.studioRunImage = null);
}
function Ex(e, t) {
  const r = Mn(e).studioRunImage;
  return t && (r == null ? void 0 : r.src) === _n(t.entry) ? r : null;
}
function Ox(e, t) {
  const r = Mn(e), n = St(e), i = t ? _n(t.entry) : "";
  if (r.studioRunImage && r.studioRunImage.src !== i && Rd(e), !i) return null;
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
      revision: Oa(o.image),
      coverage: Number(t.entry.coverage) === 180 ? 180 : 360,
      quaternion: dw(t.entry.rotation)
    }
  } : null;
}
function Fx(e, t) {
  var r;
  return t ? (r = Ex(e, t)) != null && r.failed ? "unavailable" : t.current ? "run" : "edited" : "not-run";
}
function Tx(e, t, r) {
  const n = Zg(e, t), i = (s) => {
    var l;
    if (s.visible === !1) return null;
    let a;
    if (t.version === 2) {
      a = fl(e, s.id, tl(s.source), { external: s.source.kind === "port" });
      const c = St(e).playback;
      if (s.source.kind === "port" && c) {
        const d = c.playback.stickerPicture(c.stickerStill, a), u = wd(c.playback.stickerMedia, a);
        return d ? { media: d, revision: Oa(d), source: u } : null;
      }
    } else {
      const c = s.type === "external_image" || s.source_kind === "external_image", d = String(s.asset_id || "") || (c ? String(s.id || "") : "");
      a = fl(e, d, (l = t.assets) == null ? void 0 : l[s.asset_id], { external: c });
    }
    return vs(a) ? { media: a, revision: Oa(a) } : null;
  }, o = (t.painting_visible === !1 ? [] : gx(e, t)).filter((s) => s.visible !== !1).map((s) => ({ id: s.id, media: s.source, revision: s.revision, opacity: s.opacity, zIndex: s.zIndex }));
  return {
    background: vs(r) ? { media: r, revision: Oa(r), coverage: Number(t.coverage) === 180 ? 180 : 360 } : null,
    layers: Ym(n, pl(e), t.stickers, { media: i, paintLayers: o })
  };
}
function Dx(e, t, r, n = null) {
  var W, ie, pe, q, de, ae, ve;
  const i = St(e), o = String(i.mode || "stickers");
  Jg(e, o);
  const s = vn(e);
  o === "cutout" && i.cutoutState !== s ? (i.cutoutState = s, (pe = (ie = (W = i.cutout) == null ? void 0 : W.session) == null ? void 0 : ie.refresh) == null || pe.call(ie)) : o === "stickers" && i.stickersState !== s && (i.stickersState = s, (ae = (de = (q = i.stickers) == null ? void 0 : q.session) == null ? void 0 : de.refresh) == null || ae.call(de));
  const a = t.parentElement, l = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientWidth) || t.clientWidth || 0))), c = Math.max(64, Math.round(Number((a == null ? void 0 : a.clientHeight) || t.clientHeight || 0))), d = t.getContext("2d");
  if (!d) return;
  (t.width !== l || t.height !== c) && (t.width = l, t.height = c);
  const u = { x: 0, y: 0, w: l, h: c };
  if (d.setTransform(1, 0, 0, 1, 0, 0), d.fillStyle = "#070707", d.fillRect(0, 0, l, c), n != null && n.frame) {
    r.release(), Ro(e, !1, "");
    const { width: G, height: A } = dp(n.frame), z = Ix, M = Math.min(l / G, (c - z) / A);
    d.drawImage(n.frame, (l - G * M) / 2, z + (c - z - A * M) / 2, G * M, A * M);
    return;
  }
  const f = (n == null ? void 0 : n.background) || null, h = (f == null ? void 0 : f.media) || (i.playback ? Nx(i.playback) : cx(e, ["pano_input_videos"], () => {
    var G, A;
    return (A = (G = i.dom) == null ? void 0 : G.requestDraw) == null ? void 0 : A.call(G);
  })) || qg(
    e,
    ar,
    () => {
      var G, A;
      return (A = (G = i.dom) == null ? void 0 : G.requestDraw) == null ? void 0 : A.call(G);
    },
    { preserveReadyWhilePending: !1 }
  ), w = vs(h);
  let g = null;
  const m = () => f ? { background: f, layers: [] } : Tx(e, s, h), _ = (G, A) => {
    g || (g = m());
    const z = r.render({ width: G.w, height: G.h, camera: A, ...g });
    return z && d.drawImage(z.canvas, z.x, z.y, z.width, z.height, G.x, G.y, G.w, G.h), !!z;
  };
  if (o === "cutout") {
    const G = hx(s), A = dp(h), z = G ? Ie(ai(G).aspect, 0.1, 10) : w ? Ie(Number(A.width / A.height), 0.05, 20) : 1, M = Ad(u, z);
    i.cutoutFrame = M;
    let H = "none";
    const T = String((h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || "");
    if (G)
      if (h && !w)
        H = "loading";
      else if (w) {
        const K = P_({ width: l, height: c }, M, G);
        [
          !K.fallback || _(K.fallback.rect, rs(K.fallback.shot)),
          _(K.rect, rs(K.shot)),
          !K.fallback || _(M, rs(G))
        ].every(Boolean) || (H = "loading");
      } else
        H = "empty";
    else {
      const K = i.lastCutoutShot;
      K ? (i.view = Ng(K, { width: l, height: c }), i.lastCutoutShot = null) : i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 }), w ? _(u, rl(i.view, l, c)) || (H = "loading") : h ? H = "loading" : H = "empty";
    }
    w || r.release(), r.failed && H === "loading" && (H = "none"), G && (i.lastCutoutShot = { ...G }, d.save(), d.fillStyle = "rgba(0,0,0,0.58)", d.beginPath(), d.rect(0, 0, l, c), d.rect(M.x, M.y, M.w, M.h), d.fill("evenodd"), d.restore(), d.save(), d.strokeStyle = "rgba(255,221,87,0.72)", d.lineWidth = 2, d.strokeRect(M.x + 0.5, M.y + 0.5, Math.max(0, M.w - 1), Math.max(0, M.h - 1)), d.restore()), H === "loading" ? (Ac(e, !1), Ro(e, !0, T)) : H === "empty" ? (Ac(e, !0), Ro(e, !1, "")) : (Ac(e, !1), Ro(e, !1, ""));
    return;
  }
  i.view || (i.view = { yaw: 0, pitch: 0, fov: 100 });
  let ee = !1;
  (!h || w) && (g = m(), !g.background && !g.layers.length ? (r.release(), ee = !0) : ee = _(u, rl(i.view, l, c)));
  const V = !ee && !r.failed;
  Ro(e, V, V ? String((h == null ? void 0 : h.currentSrc) || (h == null ? void 0 : h.src) || "") : ""), V && px(d, u, up(t, u));
  const te = xu(e, l, c);
  !h && ee && Lx(d, te, up(t, u));
  const I = String(((ve = s == null ? void 0 : s.active) == null ? void 0 : ve.selected_sticker_id) || ""), X = pu(s, pl(e)), j = ee && e.__panoStudio !== !0 ? X.find((G) => String((G == null ? void 0 : G.id) || "") === I && (G == null ? void 0 : G.visible) !== !1) : null;
  ee && !f && X.filter((G) => G !== j && (G == null ? void 0 : G.visible) !== !1 && (G.external || G.source_kind === "external_image")).filter((G) => !vs(fl(e, G.id, null, { external: !0 }))).forEach((G) => xx(d, G, te)), j && kx(d, j, te);
}
function fp(e, t, r, n, i = 1) {
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
function Lx(e, t, r) {
  e.save();
  const n = "#3f3f46", i = "rgba(250, 250, 250, 0.86)";
  for (let a = -75; a <= 75; a += 15) {
    const l = [];
    for (let c = -180; c <= 180; c += 4) l.push(Dn(c, a));
    fp(e, l, t, a === 0 ? i : n, a === 0 ? 1.5 : 1);
  }
  for (let a = -180; a <= 180; a += 15) {
    const l = [];
    for (let c = -89; c <= 89; c += 4) l.push(Dn(a, c));
    fp(e, l, t, n, a % 90 === 0 ? 1.3 : 1);
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
function ku(e) {
  var t;
  e.preventDefault(), e.stopPropagation(), (t = e.stopImmediatePropagation) == null || t.call(e);
}
function Rx(e, t, r = 20) {
  var s;
  if (!e || !t || !Number.isFinite(Number(e.clientX)) || !Number.isFinite(Number(e.clientY))) return !1;
  const n = (s = t.getBoundingClientRect) == null ? void 0 : s.call(t);
  if (!n) return !1;
  const i = Number(e.clientX) - Number(n.left || 0), o = Number(e.clientY) - Number(n.top || 0);
  return i >= n.width - r && o >= n.height - r;
}
function Wn(e, t) {
  return Rx(e, t) ? !1 : (ku(e), !0);
}
function pp() {
  var r;
  const e = (r = jt == null ? void 0 : jt.canvas) == null ? void 0 : r.ds;
  if (!e) return null;
  const t = Array.isArray(e.offset) ? [Number(e.offset[0] || 0), Number(e.offset[1] || 0)] : [0, 0];
  return { scale: Number(e.scale || 1), offset: t };
}
function Vx(e) {
  var r;
  if (!e) return;
  const t = (r = jt == null ? void 0 : jt.canvas) == null ? void 0 : r.ds;
  t && (t.scale = e.scale, Array.isArray(t.offset) && (t.offset[0] = e.offset[0], t.offset[1] = e.offset[1]));
}
function $x(e, t = 360, r = 260) {
  const n = St(e);
  if (!n || n.userResized === !0 || n.standaloneBootSized === !0 || !Kg(e)) return;
  const i = [Math.max(1, Number(t || 1)), Math.max(1, Number(r || 1))];
  try {
    typeof e.setSize == "function" ? e.setSize(i) : e.size = i, n.standaloneBootSized = !0;
  } catch (o) {
    String((o == null ? void 0 : o.message) || o || "unknown");
  }
}
function zx(e, t = 0, r = null, n = 1200) {
  const i = Math.max(0, Number(t || 0)), o = St(e);
  o.bootMinHeightTimer && (clearTimeout(o.bootMinHeightTimer), o.bootMinHeightTimer = null), o.bootMinHeightActive = i > 0, !(i <= 0) && (o.bootMinHeightTimer = setTimeout(() => {
    var s, a;
    o.bootMinHeightTimer = null, (s = o.dom) != null && s.widget && o.bootMinHeightActive && (o.bootMinHeightActive = !1, r == null || r(), (a = e.setDirtyCanvas) == null || a.call(e, !0, !0));
  }, Math.max(0, Number(n || 0))));
}
function hp(e, t = null, r = 0, n = 0, i = !0) {
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
      s.userResized = !0, t == null || t(), i && jx(e, 180, t);
    }
  };
}
function jx(e, t = 180, r = null) {
  if (!e) return;
  const n = St(e);
  n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.resizeSettleTimer = setTimeout(() => {
    var i;
    n.resizeSettleTimer = null, r == null || r(), (i = e.setDirtyCanvas) == null || i.call(e, !0, !0);
  }, Math.max(0, Number(t || 0)));
}
function Ko(e) {
  e && Array.isArray(e.imgs) && e.imgs.length && (e.imgs = []);
}
const Hx = /* @__PURE__ */ new WeakMap();
function Qg(e, t) {
  return ag(Hx, e, t) ? !1 : (lx(e, t), Xg(e), Ko(e), !0);
}
async function Gx(e) {
  var r, n;
  const t = await QS(e, jt, pn);
  t && (Qg(e, t), (n = (r = St(e).dom) == null ? void 0 : r.requestDraw) == null || n.call(r));
}
function Kx(e, t = {}) {
  var He;
  const r = t.__allowStandalone === !0, n = St(e), i = Mn(e), o = Hn(e), s = Wg(e);
  if (s && !r) {
    Dd(e);
    return;
  }
  s && $x(e), n.mode = String(t.mode || "stickers") === "cutout" ? "cutout" : "stickers";
  const a = n.mode === "stickers", l = a && e.__panoStudio === !0, c = a && !l, d = n.mode !== "cutout";
  if (n.noPreview = t.noPreview === !0, n.openEditor = typeof t.onOpen == "function" ? t.onOpen : null, String((e == null ? void 0 : e.comfyClass) || (e == null ? void 0 : e.type) || (e == null ? void 0 : e.title) || ""), {
    signature: lp(e)
  }.signature || lp(e), _u(e), e == null || e.id, n.mode, e.addDOMWidget, Su(e), (He = n.dom) != null && He.widget || typeof e.addDOMWidget != "function")
    return;
  const f = t.noPreview === !0, h = f ? 0 : 56, w = f ? 0 : w_, g = document.createElement("div");
  if (Yw(), g.className = "pano-node-preview-dom", g.classList.add(a ? "pano-node-preview--stickers" : "pano-node-preview--cutout"), f && g.classList.add("pano-node-preview--no-preview"), g.setAttribute("data-capture-wheel", "true"), g.tabIndex = 0, g.style.cssText = [
    "width:100%",
    f ? "height:auto" : "height:100%",
    w > 0 ? `min-height:${w}px` : "min-height:0",
    "position:relative",
    "display:block",
    "padding:0",
    "margin:0",
    "overflow:hidden",
    "contain:layout paint style",
    "background:transparent"
  ].join(";"), f) {
    const oe = cl(bu(
      e.addDOMWidget(vu(), "preview", g, hp(e, null))
    ));
    Ko(e), n.dom = { widget: oe, root: g, requestDraw: () => {
    } };
    return;
  }
  const m = document.createElement("div");
  m.style.cssText = [
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
  const ee = document.createElement("div");
  ee.style.cssText = [
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
  ].join(";"), ee.textContent = "Connect ERP image", m.appendChild(_), m.appendChild(ee), g.appendChild(m);
  const V = Wh(g), te = document.createElement("div");
  te && (te.className = a ? "pano-stickers-node-surface-host" : "pano-cutout-node-surface-host", te.style.cssText = "position:absolute;inset:0;z-index:3;pointer-events:none", g.appendChild(te)), qw(e, 120, 120), Ko(e);
  let I = null;
  try {
    zx(e, h, () => {
      var oe, Fe;
      return (Fe = (oe = n.dom) == null ? void 0 : oe.requestDraw) == null ? void 0 : Fe.call(oe);
    }), I = cl(bu(e.addDOMWidget(
      vu(),
      "preview",
      g,
      hp(
        e,
        () => {
          var oe, Fe;
          return (Fe = (oe = n.dom) == null ? void 0 : oe.requestDraw) == null ? void 0 : Fe.call(oe);
        },
        h,
        w,
        !1
      )
    )));
  } catch {
    return;
  }
  const X = {
    raf: 0,
    inTick: !1,
    destroyed: !1,
    needsDraw: !0,
    dragging: !1,
    lastX: 0,
    lastY: 0,
    lastTs: 0
  }, j = pw(), W = () => {
    X.destroyed || (X.needsDraw = !0, !X.inTick && !X.raf && (X.raf = requestAnimationFrame(b)));
  }, ie = Zm(W), pe = /* @__PURE__ */ go(a ? {
    ...wg(vn(e)),
    importing: !1,
    dropActive: !1,
    viewUnavailable: !1,
    playable: !1,
    playing: !1,
    ...l ? { status: { shot: "", size: "", note: "" } } : {}
  } : {
    ...Mg(vn(e)),
    viewUnavailable: !1,
    aspectOpen: !1,
    aspectChoices: ["1:1", "4:3", "3:2", "16:9"].map((oe) => ({ value: oe, label: oe }))
  });
  let q = null;
  if (a && e.__panoSceneStateV2) {
    const [oe, Fe] = [0, 1].map(() => {
      const Ge = Ps(document, "node.playback");
      return Ge.playsInline = !0, Ge.preload = "auto", Ge.crossOrigin = "anonymous", Ge.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;opacity:0;pointer-events:none", m.appendChild(Ge), Ge;
    }), Ae = rn({ label: "node.still" });
    Ae.__panoFrameIdx = 0;
    const Re = rn({ label: "node.port-still" });
    Re.__panoFrameIdx = 0;
    const Ye = S_({
      video: oe,
      stickerVideo: Fe,
      createImage: (Ge, We) => {
        const ht = new Image();
        return ht.onload = We, ht.onerror = We, ht.src = Ge, ht;
      },
      clock: {
        now: () => performance.now(),
        requestFrame: (Ge) => requestAnimationFrame(Ge),
        cancelFrame: (Ge) => cancelAnimationFrame(Ge)
      },
      readState: () => vn(e),
      // Panorama Studio plays its Camera's Keyframes too, as its editor does (#89).
      camera: e.__panoStudio === !0,
      onFrame: W,
      // The still is at most NODE_STILL_MAX_WIDTH wide; the node shows it small.
      onCapture: () => {
        var We;
        if (!(oe.videoWidth > 0 && oe.videoHeight > 0)) return;
        const Ge = Math.min(1, Uw / oe.videoWidth);
        Ae.width = Math.round(oe.videoWidth * Ge), Ae.height = Math.round(oe.videoHeight * Ge), (We = Ae.getContext("2d")) == null || We.drawImage(oe, 0, 0, Ae.width, Ae.height), Ae.__panoFrameIdx += 1, W();
      },
      onStickerCapture: () => {
        var Ge;
        Fe.videoWidth > 0 && Fe.videoHeight > 0 && (Re.width = Fe.videoWidth, Re.height = Fe.videoHeight, (Ge = Re.getContext("2d")) == null || Ge.drawImage(Fe, 0, 0), Re.__panoFrameIdx += 1, W());
      },
      onChange: () => {
        pe.playing = Ye.playing, W();
      }
    });
    q = { playback: Ye, video: oe, still: Ae, stickerVideo: Fe, stickerStill: Re, stickerSource: "" }, n.playback = q;
  }
  const de = () => {
    var ht;
    const { playback: oe, still: Fe, stickerStill: Ae } = q, Re = Aa(m, !!((ht = e.flags) != null && ht.collapsed)), Ye = oe.source, Ge = Re ? Px(e) : null, We = oe.follow({
      shown: Re,
      sources: Re ? Mx(e) : [],
      state: vn(e),
      sticker: Ge
    });
    ((Ge == null ? void 0 : Ge.src) || "") !== q.stickerSource && (q.stickerSource = (Ge == null ? void 0 : Ge.src) || "", us(Ae)), oe.source !== Ye && (us(Fe), Fe.__panoFrameIdx = 0), pe.playable = We, pe.playing = oe.playing;
  }, ae = () => {
    var Fe, Ae;
    const oe = ((Fe = i.ownOutputVideo) == null ? void 0 : Fe.player) ?? null;
    oe && !Aa(m, !!((Ae = e.flags) != null && Ae.collapsed)) && oe.pause(), a && (pe.playable = !!oe && !oe.failed(), pe.playing = !!(oe != null && oe.playing));
  }, ve = () => {
    var oe;
    q == null || q.playback.pause(), (oe = i.ownOutputVideo) == null || oe.player.pause();
  };
  let G = null;
  const A = (a ? b_ : A_)({
    readState: () => vn(e),
    publishLiveState: (oe) => {
      oe ? (G = oe, o.liveState = oe) : (o.liveState === G && (o.liveState = null), G = null), o.liveStateVersion += 1, o.parsedState = null, W();
    },
    commitState: (oe) => {
      var Re, Ye, Ge, We;
      const Fe = br(e, "state_json");
      if (!Fe) return;
      Im(e, oe.active);
      const Ae = Em(e, oe, String(Fe.value ?? ""));
      Ae !== null && (Fe.value = Ae, (Re = Fe.callback) == null || Re.call(Fe, Ae), o.parsedState = null, (Ye = e.setDirtyCanvas) == null || Ye.call(e, !0, !0), (We = (Ge = e.graph) == null ? void 0 : Ge.setDirtyCanvas) == null || We.call(Ge, !0, !0));
    },
    onChange: (oe) => Object.assign(pe, oe)
  }), M = a ? Vg(e, (oe = "sync", Fe = null) => {
    var sn;
    if (!a || !e.graph || !A || A.hasGestureChanges()) return !1;
    if (e.__panoSceneStateV2) {
      const Wt = Qt(e, "external-sticker");
      return A.apply({
        type: "sync-port",
        value: Sg(e, {
          pose: Wt ? $r(e, "pano_sticker_input_pose", Fe) : null
        })
      });
    }
    const Ae = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs.findIndex((Wt) => String((Wt == null ? void 0 : Wt.name) || "") === "sticker_image") : -1, Re = Ae >= 0 ? ((sn = e.getInputLink(Ae)) == null ? void 0 : sn.id) ?? null : null;
    if (Re == null)
      return A.apply({ type: "sync-external", value: { connected: !1 } });
    if (!Qt(e, "external-sticker")) return !1;
    const Ye = $r(e, "pano_sticker_input_pose", Fe), Ge = Array.isArray(Ye) ? Ye[0] : Ye, We = String($r(e, "pano_sticker_input_state_hash", Fe) ?? ""), ht = n.view || { yaw: 0, pitch: 0 }, bt = vn(e), Tt = (Array.isArray(bt == null ? void 0 : bt.stickers) ? bt.stickers : []).find((Wt) => String((Wt == null ? void 0 : Wt.id) || "") === "sticker_image_1"), Nt = fl(e, "sticker_image_1", null, { external: !0 }), Pn = Ge && typeof Ge == "object" ? Ge : Tt || { yaw_deg: ht.yaw, pitch_deg: ht.pitch, hFOV_deg: 30, rot_deg: 0 };
    return A.apply({
      type: "sync-external",
      value: {
        connected: !0,
        linkId: Re,
        stateHash: We,
        pose: Pn,
        imageWidth: Number((Nt == null ? void 0 : Nt.naturalWidth) || (Nt == null ? void 0 : Nt.width) || 0),
        imageHeight: Number((Nt == null ? void 0 : Nt.naturalHeight) || (Nt == null ? void 0 : Nt.height) || 0)
      }
    });
  }) : () => {
  };
  let H = 0;
  const T = async (oe) => {
    if (!a || !A || !rr(oe)) return !1;
    ve();
    const Fe = `asset_${Math.random().toString(16).slice(2, 10)}`, Ae = `st_${Math.random().toString(16).slice(2, 10)}`, Re = { ...n.view || { yaw: 0, pitch: 0 } };
    H += 1, pe.importing = !0;
    const Ye = Ho(e, `add:${Fe}`, async () => {
      const Ge = await Go(oe), We = await _i(oe, {
        fetchApi: (ht, bt) => pn.fetchApi(ht, bt)
      });
      return ne(), A.apply({
        type: "add-sticker",
        value: {
          stickerId: Ae,
          assetId: Fe,
          asset: We,
          imageWidth: Ge.width,
          imageHeight: Ge.height,
          yaw_deg: Number(Re.yaw || 0),
          pitch_deg: Number(Re.pitch || 0)
        }
      });
    });
    try {
      return await Ye;
    } catch {
      return !1;
    } finally {
      H = Math.max(0, H - 1), pe.importing = H > 0, W();
    }
  };
  let K = null, fe = null, se = null, Y = !1;
  const k = () => {
    var oe;
    return se && (clearTimeout(se), se = null), Y ? (Y = !1, ((oe = A == null ? void 0 : A.commitGesture) == null ? void 0 : oe.call(A)) ?? !1) : !1;
  }, ne = () => {
    var Re, Ye, Ge;
    const oe = k(), Fe = (K == null ? void 0 : K.pointerId) ?? (fe == null ? void 0 : fe.pointerId);
    if (K = null, fe = null, Fe != null) {
      try {
        (Re = _.hasPointerCapture) != null && Re.call(_, Fe) && ((Ye = _.releasePointerCapture) == null || Ye.call(_, Fe));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const Ae = ((Ge = A == null ? void 0 : A.commitGesture) == null ? void 0 : Ge.call(A)) ?? !1;
    return oe || Ae;
  }, ue = () => {
    var Re, Ye, Ge;
    const oe = k(), Fe = K == null ? void 0 : K.pointerId;
    if (K = null, Fe != null) {
      try {
        (Re = _.hasPointerCapture) != null && Re.call(_, Fe) && ((Ye = _.releasePointerCapture) == null || Ye.call(_, Fe));
      } catch {
      }
      _.style.cursor = "grab";
    }
    const Ae = ((Ge = A == null ? void 0 : A.cancelGesture) == null ? void 0 : Ge.call(A)) ?? !1;
    return oe || Ae;
  }, _e = () => ne();
  A && o.flushers.add(_e);
  let we = null, C = !1;
  if (te && A)
    try {
      Ed(), we = qu(l ? sw : a ? ew : U_, {
        model: pe,
        onAction: (oe) => {
          var Re, Ye, Ge;
          if ((oe == null ? void 0 : oe.type) === "toggle-playback") {
            ne(), q ? q.playback.toggle() : (Re = i.ownOutputVideo) == null || Re.player.toggle(), W();
            return;
          }
          if (ve(), (oe == null ? void 0 : oe.type) === "open-editor") {
            ne(), a || (pe.aspectOpen = !1), (Ye = n.openEditor) == null || Ye.call(n);
            return;
          }
          if (a) {
            if ((oe == null ? void 0 : oe.type) === "add-image-file") {
              T(oe.file);
              return;
            }
            A.apply(oe) && W();
            return;
          }
          if ((oe == null ? void 0 : oe.type) === "toggle-aspect") {
            pe.aspectOpen = !pe.aspectOpen;
            return;
          }
          if ((oe == null ? void 0 : oe.type) === "close-aspect") {
            pe.aspectOpen = !1;
            return;
          }
          let Fe = oe;
          if ((oe == null ? void 0 : oe.type) === "add-frame") {
            const We = n.view || { yaw: 0, pitch: 0, fov: 100 };
            Fe = {
              ...oe,
              ...k_(We, {
                width: _.width,
                height: _.height
              })
            };
          } else if ((oe == null ? void 0 : oe.type) === "delete-frame") {
            const We = Ai(vn(e));
            We && (n.view = Ng(We, {
              width: _.width,
              height: _.height
            }));
          }
          const Ae = ((Ge = n.cutoutFrame) == null ? void 0 : Ge.safeRect) || null;
          pe.aspectOpen = !1, A.apply({ ...Fe, safeRect: Ae }) && W();
        }
      }), we.mount(te), C = !0;
    } catch {
      we = null, C = !1;
    }
  const le = typeof ResizeObserver < "u" ? new ResizeObserver(() => {
    q && de(), W();
  }) : null;
  le == null || le.observe(m);
  const b = (oe) => {
    var Ae, Re, Ye;
    X.raf = 0, X.inTick = !0;
    let Fe = !1;
    try {
      if (Fe = y.stepInertia(oe), X.needsDraw || Fe) {
        X.needsDraw = !1, q ? de() : ae();
        const Ge = l ? Cx(e, q) : null, We = Ge ? uw(Ge) : null, ht = () => Zg(e, vn(e)), bt = Ge && Aa(m, !!((Ae = e.flags) != null && Ae.collapsed)) ? Ox(e, We) : null;
        if ((Re = e.flags) != null && Re.collapsed || Dx(e, _, ie, bt), pe.viewUnavailable = ie.failed, l) {
          const Tt = j({ ...Ge, display: Fx(e, We) }, ht);
          Tt && (pe.status = Tt);
        }
      }
    } finally {
      X.inTick = !1;
    }
    (Fe || X.needsDraw) && !X.raf && (X.raf = requestAnimationFrame(b)), Bw() && (!n.debugLastTs || oe - n.debugLastTs > 1200) && (n.debugLastTs = oe, n.mode, Su(e), Lo(g), Lo(m), Lo(_), Lo(g.parentElement), Lo((Ye = g.parentElement) == null ? void 0 : Ye.parentElement), Number(_.width || 0), Number(_.height || 0), void 0);
  }, y = ed({
    getView: () => (n.view || (n.view = { yaw: 0, pitch: 0, fov: 100 }), n.view),
    setView: (oe) => {
      n.view = oe;
    },
    getViewportSize: () => {
      const oe = _.getBoundingClientRect();
      return {
        w: Math.max(1, Number(oe.width || _.clientWidth || 0)),
        h: Math.max(1, Number(oe.height || _.clientHeight || 0))
      };
    },
    getInvert: () => {
      const oe = ap();
      return {
        x: oe.invert_view_x ? -1 : 1,
        y: oe.invert_view_y ? -1 : 1
      };
    },
    onInteraction: () => {
      W();
    }
  }), E = a ? m : g, v = (oe) => {
    const Fe = _.getBoundingClientRect();
    return {
      x: (Number(oe.clientX) - Fe.left) * (_.width / Math.max(1, Fe.width)),
      y: (Number(oe.clientY) - Fe.top) * (_.height / Math.max(1, Fe.height))
    };
  }, $ = (oe) => {
    var Re, Ye;
    if (!a || l || !d) return;
    const Fe = vn(e), Ae = np(
      pu(Fe, pl(e)),
      String(((Re = Fe == null ? void 0 : Fe.active) == null ? void 0 : Re.selected_sticker_id) || ""),
      v(oe),
      xu(e, _.width, _.height)
    );
    if (!Ae) {
      _.style.cursor = "grab";
      return;
    }
    if (((Ye = Ae.item) == null ? void 0 : Ye.locked) === !0) {
      _.style.cursor = "default";
      return;
    }
    _.style.cursor = Ae.hit.cursor || "default";
  };
  _.addEventListener("pointerdown", (oe) => {
    var ht, bt, Tt, Nt, Pn, qe, sn, Wt, ui, Wr, di;
    if (!Wn(oe, E) || oe.button !== 0) return;
    if (!a) {
      const on = Ai(vn(e)), yn = n.cutoutFrame;
      if (!on) {
        (ht = g.focus) == null || ht.call(g, { preventScroll: !0 }), (bt = _.setPointerCapture) == null || bt.call(_, oe.pointerId), _.style.cursor = "grabbing", y.startDrag(oe.clientX, oe.clientY, oe.pointerId);
        return;
      }
      if (on.locked === !0 || !yn || !A) return;
      const Ur = v(oe);
      let kr;
      if (oe.shiftKey) {
        const cr = Cg({
          frame: yn,
          point: Ur,
          startRollDeg: Number(on.roll_deg ?? on.rot_deg ?? 0),
          shiftKey: !0
        });
        if (!cr) return;
        kr = { kind: "roll", pointerId: oe.pointerId, rollGesture: cr };
      } else {
        const cr = ((Tt = vn(e)) == null ? void 0 : Tt.ui_settings) || ap();
        kr = {
          kind: "pan",
          pointerId: oe.pointerId,
          startPoint: Ur,
          startShot: { ...on },
          focalPx: Ii(yn, on),
          invertX: cr.invert_view_x === !0,
          invertY: cr.invert_view_y === !0
        };
      }
      ne(), (Nt = g.focus) == null || Nt.call(g, { preventScroll: !0 }), (Pn = _.setPointerCapture) == null || Pn.call(_, oe.pointerId), _.style.cursor = "grabbing", A.beginGesture(), K = kr;
      return;
    }
    if (!d) return;
    const Fe = v(oe), Ae = vn(e), Re = String(((qe = Ae == null ? void 0 : Ae.active) == null ? void 0 : qe.selected_sticker_id) || ""), Ye = xu(e, _.width, _.height);
    (sn = g.focus) == null || sn.call(g, { preventScroll: !0 });
    const Ge = () => np(pu(Ae, pl(e)), Re, Fe, Ye);
    let We = l ? null : Ge();
    if (We && (q != null && q.playback.playing) && (ve(), We = Ge()), We && A) {
      if (y.stopMotion(), ne(), String(((Wt = We.item) == null ? void 0 : Wt.id) || "") !== Re && A.apply({ type: "select-sticker", id: We.item.id }), ((ui = We.item) == null ? void 0 : ui.locked) === !0) {
        W();
        return;
      }
      const on = Fe, yn = We.geometry.center;
      fe = {
        active: !0,
        kind: We.hit.kind,
        pointerId: oe.pointerId,
        startPoint: on,
        startCenter: { ...yn },
        startSticker: { ...We.item },
        startDistance: Math.max(1, Math.hypot(on.x - yn.x, on.y - yn.y)),
        startAngle: Math.atan2(on.y - yn.y, on.x - yn.x),
        projection: Ye
      }, A.beginGesture(), (Wr = _.setPointerCapture) == null || Wr.call(_, oe.pointerId), _.style.cursor = We.hit.kind === "rotate" ? "grabbing" : We.hit.kind === "move" ? "move" : We.hit.cursor, W();
      return;
    }
    (di = _.setPointerCapture) == null || di.call(_, oe.pointerId), _.style.cursor = "grabbing", y.startDrag(oe.clientX, oe.clientY, oe.pointerId);
  }), _.addEventListener("pointermove", (oe) => {
    if (!a) {
      if (!K) {
        if (!y.state.drag.active) return;
        Wn(oe, E), y.moveDrag(oe.clientX, oe.clientY, "pano");
        return;
      }
      if (K.pointerId !== oe.pointerId || !A) return;
      if (Wn(oe, E), K.kind === "pan") {
        const Ae = v(oe);
        A.updateGesture({
          type: "pan-camera",
          startShot: K.startShot,
          dx: Ae.x - K.startPoint.x,
          dy: Ae.y - K.startPoint.y,
          focalPx: K.focalPx,
          invertX: K.invertX,
          invertY: K.invertY
        });
        return;
      }
      const Fe = Ig(K.rollGesture, v(oe), oe);
      if (!Fe) return;
      K.rollGesture = Fe.gesture, A.updateGesture({ type: "set-roll", value: Fe.rollDeg });
      return;
    }
    if (!fe && !y.state.drag.active) {
      $(oe);
      return;
    }
    if (fe) {
      if (fe.pointerId !== oe.pointerId || !A) return;
      Wn(oe, E);
      const Fe = v(oe);
      let Ae = fe.startSticker;
      if (fe.kind === "move")
        Ae = yw(
          fe.startSticker,
          {
            x: fe.startCenter.x + Fe.x - fe.startPoint.x,
            y: fe.startCenter.y + Fe.y - fe.startPoint.y
          },
          fe.projection
        );
      else if (fe.kind === "scale") {
        const Re = Math.hypot(Fe.x - fe.startCenter.x, Fe.y - fe.startCenter.y);
        Ae = bw(fe.startSticker, fe.startDistance, Re);
      } else if (fe.kind === "rotate") {
        const Re = Math.atan2(Fe.y - fe.startCenter.y, Fe.x - fe.startCenter.x);
        Ae = vw(fe.startSticker, fe.startAngle, Re, oe.shiftKey === !0);
      }
      A.updateGesture({ type: "set-transform", value: Ae }), W();
      return;
    }
    !d || !y.state.drag.active || (Wn(oe, E), y.moveDrag(oe.clientX, oe.clientY, "pano"));
  });
  const L = () => {
    var Fe, Ae;
    if (!K && !fe) {
      if (!y.state.drag.active) return;
      y.endDrag(), _.style.cursor = "grab", W();
      return;
    }
    if (!A) return;
    const oe = (K == null ? void 0 : K.pointerId) ?? (fe == null ? void 0 : fe.pointerId);
    K = null, fe = null;
    try {
      (Fe = _.hasPointerCapture) != null && Fe.call(_, oe) && ((Ae = _.releasePointerCapture) == null || Ae.call(_, oe));
    } catch {
    }
    A.cancelGesture(), _.style.cursor = "grab", W();
  }, J = (oe, Fe = !1) => {
    var Ae, Re, Ye, Ge;
    if (!a) {
      if (!K) {
        if (!y.state.drag.active) return;
        Wn(oe, E), (Ae = _.releasePointerCapture) == null || Ae.call(_, oe.pointerId), _.style.cursor = "grab", y.endDrag(), W();
        return;
      }
      if (K.pointerId !== oe.pointerId || !A) return;
      Wn(oe, E), K = null, (Re = _.releasePointerCapture) == null || Re.call(_, oe.pointerId), _.style.cursor = "grab", Fe ? A.cancelGesture() : A.commitGesture(), $(oe), W();
      return;
    }
    if (fe) {
      if (fe.pointerId !== oe.pointerId || !A) return;
      Wn(oe, E), fe = null, (Ye = _.releasePointerCapture) == null || Ye.call(_, oe.pointerId), _.style.cursor = "grab", Fe ? A.cancelGesture() : A.commitGesture(), W();
      return;
    }
    !d || !y.state.drag.active || (Wn(oe, E), (Ge = _.releasePointerCapture) == null || Ge.call(_, oe.pointerId), _.style.cursor = "grab", y.endDrag(), W());
  };
  _.addEventListener("pointerup", J), _.addEventListener("pointercancel", (oe) => J(oe, !0)), _.addEventListener("lostpointercapture", L), _.addEventListener("pointerleave", (oe) => {
    !a && K || fe || y.state.drag.active && J(oe);
  });
  const O = (oe) => {
    const Fe = document.activeElement;
    if (Fe !== g && !g.contains(Fe)) return;
    if (oe.key === "Escape" && (K || fe) && A) {
      L(), ku(oe);
      return;
    }
    if (!a || l || oe.key !== "Delete" && oe.key !== "Backspace" || !A) return;
    const Ae = oe.target, Re = String((Ae == null ? void 0 : Ae.tagName) || "").toUpperCase();
    Re === "INPUT" || Re === "TEXTAREA" || Ae != null && Ae.isContentEditable || pe.canDelete === !0 && (ve(), ne(), A.apply({ type: "delete-selected" }) && W(), ku(oe));
  };
  window.addEventListener("keydown", O, !0);
  const F = Gw({
    requestFrame: (oe) => requestAnimationFrame(oe),
    cancelFrame: (oe) => cancelAnimationFrame(oe),
    restore: (oe) => Vx(oe)
  }), x = (oe) => {
    var Ae, Re, Ye, Ge, We, ht;
    if (!Wn(oe, E)) return;
    if (!a) {
      const bt = Ai(vn(e));
      if (bt && bt.locked !== !0 && A) {
        const Tt = Ga(oe);
        Tt !== 0 && (Y || (ne(), A.beginGesture(), Y = !0), A.updateGesture({
          type: "step-fov",
          direction: Tt
        }) ? (se && clearTimeout(se), se = setTimeout(k, 180), W()) : A.hasGestureChanges() || (A.cancelGesture(), Y = !1));
      } else if (!bt) {
        const Tt = pp();
        y.applyWheelEvent(oe) && W(), F.schedule(Tt);
      }
      (Ae = oe.preventDefault) == null || Ae.call(oe), (Re = oe.stopPropagation) == null || Re.call(oe), (Ye = oe.stopImmediatePropagation) == null || Ye.call(oe);
      return;
    }
    if (!d) return;
    const Fe = pp();
    y.applyWheelEvent(oe) && W(), (Ge = oe.preventDefault) == null || Ge.call(oe), (We = oe.stopPropagation) == null || We.call(oe), (ht = oe.stopImmediatePropagation) == null || ht.call(oe), F.schedule(Fe);
  }, R = a ? [m, _] : [m];
  ["wheel", "mousewheel", "DOMMouseScroll"].forEach((oe) => {
    R.forEach((Fe) => Fe.addEventListener(oe, x, { passive: !1, capture: !0 }));
  }), ["contextmenu", "mousedown", "mouseup", "mousemove", "click", "dblclick"].forEach((oe) => {
    _.addEventListener(oe, (Fe) => Wn(Fe, E)), m.addEventListener(oe, (Fe) => Wn(Fe, E));
  });
  const Z = br(e, "state_json");
  let he = null, ce = null;
  Z && !Z.__panoPreviewPatchedCb && (he = Z.callback, ce = (oe) => {
    const Fe = he ? he(oe) : void 0;
    return W(), Fe;
  }, Z.callback = ce, Z.__panoPreviewPatchedCb = ce);
  const be = br(e, "bg_color");
  let Se = null, ye = null;
  be && !be.__panoPreviewPatchedCb && (Se = be.callback, ye = (oe) => {
    const Fe = Se ? Se(oe) : void 0;
    return W(), Fe;
  }, be.callback = ye, be.__panoPreviewPatchedCb = ye);
  const Q = l ? br(e, "output_size") : null, me = Q == null ? void 0 : Q.callback, B = Q ? (oe) => {
    const Fe = me ? me(oe) : void 0;
    return W(), Fe;
  } : null;
  Q && (Q.callback = B);
  const p = e.onRemoved, N = e.onResize, S = e.onExecuted, P = e.onDragOver, U = e.onDragDrop;
  let ge = null;
  const D = () => {
    a && (pe.dropActive = !0, ge && clearTimeout(ge), ge = setTimeout(() => {
      ge = null, pe.dropActive = !1;
    }, 140));
  }, re = c ? function(oe) {
    return (P ? P.apply(this, arguments) : !1) === !0 ? !0 : Fd(oe == null ? void 0 : oe.dataTransfer) ? (D(), !0) : !1;
  } : null, Ne = c ? function(oe) {
    var Re;
    if ((U ? U.apply(this, arguments) : !1) === !0) return !0;
    const Ae = Array.from(((Re = oe == null ? void 0 : oe.dataTransfer) == null ? void 0 : Re.files) || []).find((Ye) => rr(Ye));
    return Ae ? (ge && clearTimeout(ge), ge = null, pe.dropActive = !1, T(Ae), !0) : !1;
  } : null;
  c && (e.onDragOver = re, e.onDragDrop = Ne);
  const xe = c ? Hw(g, {
    onActive: (oe) => {
      if (oe) {
        D();
        return;
      }
      ge && clearTimeout(ge), ge = null, pe.dropActive = !1;
    },
    onDrop: (oe) => {
      T(oe);
    }
  }) : () => {
  }, Pe = function(oe) {
    i.outputFromRun = !0;
    const Fe = Qg(e, oe);
    ti(e, Fe ? "executed" : "sync", oe), W();
    const Ae = S ? S.apply(this, arguments) : void 0;
    return Ko(e), Ae;
  };
  e.onExecuted = Pe;
  const Ce = e.onConnectionsChange, Le = function(oe, Fe) {
    const Ae = Kf(e, oe, Fe, vd), Re = Kf(e, oe, Fe, ar), Ye = arguments, Ge = Ce ? Ce.apply(this, Ye) : void 0, We = () => {
      X.destroyed || (Re && fx(e), Ae && ti(e, "connection-change"), Ko(e), W());
    };
    return We(), queueMicrotask(We), Ge;
  };
  e.onConnectionsChange = Le;
  const je = function() {
    const oe = N ? N.apply(this, arguments) : void 0;
    return St(this).userResized = !0, W(), oe;
  };
  e.onResize = je;
  const Ke = function() {
    return $e(), wu.unregister(this), p ? p.apply(this, arguments) : void 0;
  };
  e.onRemoved = Ke;
  const $e = () => {
    var oe, Fe, Ae, Re, Ye, Ge, We;
    X.destroyed = !0, (oe = le == null ? void 0 : le.disconnect) == null || oe.call(le), a ? ne() : ue(), _.removeEventListener("lostpointercapture", L), xe(), V(), window.removeEventListener("keydown", O, !0), o.flushers.delete(_e), (Fe = A == null ? void 0 : A.destroy) == null || Fe.call(A), (Ae = we == null ? void 0 : we.unmount) == null || Ae.call(we), q && (q.playback.dispose(), q.video.remove(), q.stickerVideo.remove(), n.playback === q && (n.playback = null)), ie.dispose(), n.scene = null, (Ye = (Re = n.rasterCache) == null ? void 0 : Re.dispose) == null || Ye.call(Re), n.rasterCache = null, n.rasterReady = null, M(), F.dispose(), ge && clearTimeout(ge), ge = null, Td.disposeOwner(e), oo(e), Rd(e), X.raf && cancelAnimationFrame(X.raf), X.raf = 0, ((Ge = n.cutout) == null ? void 0 : Ge.session) === A && (n.cutout = null), ((We = n.stickers) == null ? void 0 : We.session) === A && (n.stickers = null), n.cutoutState = null, n.stickersState = null, n.cutoutFrame = null, n.resizeSettleTimer && (clearTimeout(n.resizeSettleTimer), n.resizeSettleTimer = null), n.dom = null, n.restore = null, e.onResize === je && (e.onResize = N), e.onExecuted === Pe && (e.onExecuted = S), e.onConnectionsChange === Le && (e.onConnectionsChange = Ce), ce && (Z == null ? void 0 : Z.callback) === ce && (Z.callback = he), ce && (Z == null ? void 0 : Z.__panoPreviewPatchedCb) === ce && delete Z.__panoPreviewPatchedCb, ye && (be == null ? void 0 : be.callback) === ye && (be.callback = Se), ye && (be == null ? void 0 : be.__panoPreviewPatchedCb) === ye && delete be.__panoPreviewPatchedCb, B && Q.callback === B && (Q.callback = me), e.onDragOver === re && (e.onDragOver = P), e.onDragDrop === Ne && (e.onDragDrop = U), e.onRemoved === Ke && (e.onRemoved = p);
  };
  n.restore = $e, n.cutout = A && C && !a ? { session: A, model: pe } : null, n.stickers = A && C && a ? { session: A, model: pe } : null, n.dom = {
    widget: I,
    root: g,
    canvas: _,
    requestDraw: W,
    state: X,
    emptyHintEl: ee,
    nodeSurface: n.cutout
  }, wu.register(e), e.graph && ti(e, "attach"), W();
}
function mp(e, t = {}) {
  Ug(e).attach({
    ...t,
    mode: "cutout"
  });
}
function gp(e, t = {}) {
  const r = t.__allowStandalone === !0;
  if (Wg(e) && !r) {
    Dd(e);
    return;
  }
  Ug(e).attach(t);
}
function Wx(e, t) {
  return !e || e.target !== t ? !1 : e.key === " " || e.key === "Spacebar";
}
function Ux(e, t = 1, r = 1 / 0, n = null) {
  const i = Number(t), o = Number.isFinite(i) && i > 0 ? i : 1, s = Number(e == null ? void 0 : e.width), a = Number(e == null ? void 0 : e.height), l = Math.max(0, Number.isFinite(s) ? s : 0) * o, c = Math.max(0, Number.isFinite(a) ? a : 0) * o, d = Number(r), u = d > 0 ? d : 1 / 0, f = Math.max(l, c);
  let h = f > 0 ? Math.min(1, u / f) : 1;
  return n && l > 0 && c > 0 && (h = Math.min(h, n.width * o / l, n.height * o / c)), {
    width: Math.max(1, Math.round(l * h)),
    height: Math.max(1, Math.round(c * h))
  };
}
function Bx({
  root: e,
  documentRef: t = typeof document < "u" ? document : null,
  onChange: r = null,
  onFallback: n = null
} = {}) {
  var h;
  const i = typeof r == "function" ? r : () => {
  }, o = typeof n == "function" ? n : () => {
  };
  let s = !1, a = null;
  const l = () => !!e && (t == null ? void 0 : t.fullscreenElement) === e, c = () => {
    const w = l();
    return w === a || (a = w, i(w)), w;
  }, d = () => c();
  return (h = t == null ? void 0 : t.addEventListener) == null || h.call(t, "fullscreenchange", d), c(), { toggle: async () => {
    var w;
    if (s || !e || !t) return !1;
    if (l()) {
      try {
        await ((w = t.exitFullscreen) == null ? void 0 : w.call(t));
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
    var w, g, m;
    if (!s) {
      if (s = !0, (w = t == null ? void 0 : t.removeEventListener) == null || w.call(t, "fullscreenchange", d), l())
        try {
          const _ = (g = t.exitFullscreen) == null ? void 0 : g.call(t);
          (m = _ == null ? void 0 : _.catch) == null || m.call(_, () => {
          });
        } catch {
        }
      a = !1, i(!1);
    }
  } };
}
const Yx = { class: "pano-preview-node-surface" }, qx = {
  __name: "PanoPreviewNodeSurface",
  props: {
    model: { type: Object, default: () => ({ fullscreen: !1 }) },
    onAction: { type: Function, default: null }
  },
  setup(e) {
    const t = e;
    return (r, n) => (Te(), De("div", Yx, [
      Be(en, {
        icon: e.model.fullscreen ? tt(ze).fullscreen_close : tt(ze).fullscreen,
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
      e.model.viewUnavailable ? (Te(), Gn(Gl, { key: 0 })) : mt("", !0)
    ]));
  }
}, la = 140, Xx = 180, yp = 40, Cc = 10;
function bp(e) {
  const t = String(e ?? "").trim();
  if (!t) return { full: "", tail: "" };
  const r = t.split(":");
  return { full: t, tail: String(r[r.length - 1] || "").trim() };
}
function vp(e, t) {
  const r = bp(e), n = bp(t);
  return !r.full || !n.full ? !1 : r.full === n.full || r.tail === n.full || r.full === n.tail || r.tail === n.tail;
}
function Sp(e) {
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
function so(e) {
  if (!e) return "";
  if (typeof e == "string") return String(e || "").trim();
  if (Array.isArray(e)) {
    if (e.length === 0) return "";
    if (e.length === 1) return so(e[0]);
    const t = typeof e[0] == "string" ? String(e[0] || "").trim() : "";
    if (t)
      return Sp({
        filename: t,
        subfolder: String(e[1] || "").trim(),
        type: String(e[2] || "output").trim() || "output"
      });
    for (const r of e) {
      const n = so(r);
      if (n) return n;
    }
    return "";
  }
  return typeof (e == null ? void 0 : e.src) == "string" && e.src ? e.src : typeof (e == null ? void 0 : e.url) == "string" && e.url ? e.url : Sp(e);
}
function e0(e) {
  return e ? e instanceof HTMLVideoElement ? Number(e.videoWidth || 0) > 0 && Number(e.videoHeight || 0) > 0 && Number(e.readyState || 0) >= 2 : !!e.complete && Number(e.naturalWidth || e.width || 0) > 0 : !1;
}
function Jx(e) {
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
function Mu(e) {
  var i;
  const t = (i = ir) == null ? void 0 : i.nodeOutputs;
  if (!t || e == null) return null;
  const r = String(e);
  let n = null;
  if (t instanceof Map ? n = t.get(e) || t.get(r) || t.get(Number(r)) || null : n = t[e] || t[r] || null, n) return n;
  if (t instanceof Map) {
    for (const o of t.keys())
      if (vp(o, r)) return t.get(o);
  } else
    for (const o of Object.keys(t))
      if (vp(o, r)) return t[o];
  return null;
}
function Zx(e) {
  var n, i;
  const t = Mu(e == null ? void 0 : e.id), r = [
    (n = t == null ? void 0 : t.ui) == null ? void 0 : n.pano_videos,
    t == null ? void 0 : t.pano_videos,
    (i = t == null ? void 0 : t.ui) == null ? void 0 : i.images,
    t == null ? void 0 : t.images
  ];
  for (const o of r)
    if (Array.isArray(o))
      for (const s of o) {
        const a = so(s);
        if (a && /\.mp4(\?|$)/i.test(a) || a && String((s == null ? void 0 : s.format) || "").toLowerCase() === "video/mp4") return a;
      }
  return "";
}
function Qx(e, t = "erp_image") {
  var h, w, g, m, _, ee, V;
  const r = Array.isArray(e == null ? void 0 : e.inputs) ? e.inputs : [];
  let n = r.findIndex((te) => String((te == null ? void 0 : te.name) || "") === String(t));
  if ((n < 0 || !e.isInputConnected(n)) && (n = r.findIndex((te, I) => String((te == null ? void 0 : te.type) || "").toUpperCase() === "IMAGE" && e.isInputConnected(I))), n < 0) return "";
  const i = e.getInputLink(n);
  if (!i) return "";
  const o = Number(i.origin_id);
  if (!Number.isFinite(o)) return "";
  const s = (g = (w = (h = ir) == null ? void 0 : h.graph) == null ? void 0 : w.getNodeById) == null ? void 0 : g.call(w, o), a = Mu(o), l = Mu(e == null ? void 0 : e.id), c = [
    (m = l == null ? void 0 : l.ui) == null ? void 0 : m.pano_input_images,
    l == null ? void 0 : l.pano_input_images,
    a == null ? void 0 : a.images,
    (_ = a == null ? void 0 : a.ui) == null ? void 0 : _.pano_input_images,
    a == null ? void 0 : a.pano_input_images
  ];
  for (const te of c)
    if (Array.isArray(te))
      for (const I of te) {
        const X = so(I);
        if (X) return X;
      }
  let d = [];
  try {
    d = typeof ((ee = ir) == null ? void 0 : ee.getNodeImageUrls) == "function" ? ir.getNodeImageUrls(s) || [] : [];
  } catch {
    d = [];
  }
  if (Array.isArray(d) && d.length > 0)
    for (const te of d) {
      const I = so(te);
      if (I) return I;
    }
  if (s) {
    const te = Array.isArray(s == null ? void 0 : s.imgs) ? s.imgs : [];
    for (const I of te) {
      const X = so(I);
      if (X) return X;
    }
  }
  const u = (V = s == null ? void 0 : s.widgets) == null ? void 0 : V.find((te) => String((te == null ? void 0 : te.name) || "").toLowerCase() === "image"), f = String((u == null ? void 0 : u.value) || "").trim();
  return f ? pn.apiURL(`/view?filename=${encodeURIComponent(f)}&type=input&subfolder=`) : "";
}
function Ic(e, t, r) {
  e.strokeStyle = "rgba(255,255,255,0.16)", e.lineWidth = 1, e.beginPath(), e.moveTo(t * 0.5, 0), e.lineTo(t * 0.5, r), e.moveTo(0, r * 0.5), e.lineTo(t, r * 0.5), e.stroke();
}
function _p(e, t, r, n, i, o, s) {
  var c, d, u;
  if (t.clearRect(0, 0, r, n), t.fillStyle = "#070707", t.fillRect(0, 0, r, n), !e0(o) || r <= 1 || n <= 1) {
    Ic(t, r, n);
    return;
  }
  if (s.failed) {
    Ic(t, r, n);
    return;
  }
  const a = Number(((u = (d = (c = e == null ? void 0 : e.widgets) == null ? void 0 : c.find) == null ? void 0 : d.call(c, (f) => (f == null ? void 0 : f.name) === "coverage")) == null ? void 0 : u.value) || 360) === 180 ? 180 : 360, l = s.render({
    width: r,
    height: n,
    camera: rl(i, r, n),
    background: { media: o, revision: Jx(o), coverage: a },
    layers: []
  });
  l ? t.drawImage(l.canvas, l.x, l.y, l.width, l.height, 0, 0, r, n) : Ic(t, r, n);
}
function wp(e, t, r) {
  return e >= r.x && e <= r.x + r.w && t >= r.y && t <= r.y + r.h;
}
class ek {
  constructor(t, r = {}) {
    this.node = t, this.options = r, this.imageInputName = String(r.imageInputName || "erp_image"), this.buttonText = String(r.buttonText || "Open Preview"), this.errorText = "", this.root = null, this.canvas = null, this.ctx = null, this.widget = null, this.surfaceHost = null, this.surfaceApp = null, this.surfaceModel = null, this.fullscreenController = null, this.wheelCaptureCleanup = null, this.tearingDown = !1, this.resizeObserver = null, this.rafId = 0, this.needsDraw = !1, this.inTick = !1, this.queuedDuringTick = !1, this.img = null, this.imgSrc = "", this.mediaCleanup = null, this.view = { yaw: 0, pitch: 0, fov: 100 }, this.previewView = Zm(() => this.requestDraw()), this.controller = ed({
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
        `min-height:${la}px`,
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
          return la;
        },
        getHeight() {
          return la;
        },
        afterResize: () => this.requestDraw()
      };
      if (this.widget = cl(bu(
        this.node.addDOMWidget("preview", "preview", this.root, r)
      )), this.widget) {
        this.widget.serialize = !1;
        const n = typeof this.widget.computeLayoutSize == "function" ? this.widget.computeLayoutSize.bind(this.widget) : null;
        this.widget.computeLayoutSize = (i) => {
          const o = n ? n(i) || {} : {};
          return {
            ...o,
            minHeight: Math.max(la, Number(o.minHeight || 0)),
            minWidth: Math.max(Xx, Number(o.minWidth || 0))
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
      return Ed(), this.surfaceHost = document.createElement("div"), this.surfaceHost.className = "pano-preview-node-surface-host", this.root.appendChild(this.surfaceHost), this.surfaceModel = /* @__PURE__ */ go({ fullscreen: !1, viewUnavailable: !1 }), this.fullscreenController = Bx({
        root: this.root,
        documentRef: document,
        onChange: (a) => {
          this.surfaceModel && (this.surfaceModel.fullscreen = a), this.requestDraw();
        },
        onFallback: () => {
          var a, l;
          return (l = (a = this.options).onOpen) == null ? void 0 : l.call(a, this.node);
        }
      }), this.surfaceApp = qu(qx, {
        model: this.surfaceModel,
        onAction: (a) => {
          var l, c;
          (a == null ? void 0 : a.type) === "toggle-fullscreen" && ((c = (l = this.fullscreenController) == null ? void 0 : l.toggle) == null || c.call(l));
        }
      }), this.surfaceApp.mount(this.surfaceHost), Lr(this.node).surface = {
        mounted: !0,
        toggleFullscreen: () => {
          var a, l;
          return (l = (a = this.fullscreenController) == null ? void 0 : a.toggle) == null ? void 0 : l.call(a);
        }
      }, !0;
    } catch {
      return (r = (t = this.fullscreenController) == null ? void 0 : t.destroy) == null || r.call(t), this.fullscreenController = null, (i = (n = this.surfaceApp) == null ? void 0 : n.unmount) == null || i.call(n), this.surfaceApp = null, (s = (o = this.surfaceHost) == null ? void 0 : o.remove) == null || s.call(o), this.surfaceHost = null, this.surfaceModel = null, Lr(this.node).surface = null, !1;
    }
  }
  bindDomInput(t, r) {
    var i;
    (i = this.wheelCaptureCleanup) == null || i.call(this), this.wheelCaptureCleanup = Wh(r), t.addEventListener("pointerdown", (o) => {
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
      Wx(o, r) && (this.togglePlayback(), o.preventDefault(), o.stopPropagation(), (s = o.stopImmediatePropagation) == null || s.call(o));
    });
  }
  togglePlayback() {
    !(this.img instanceof HTMLVideoElement) || !e0(this.img) || (this.img.paused ? this.img.play().catch(() => {
    }) : this.img.pause(), this.requestDraw());
  }
  // Whether the preview is on screen: its surface is laid out, or, drawn on the graph canvas, the node is
  // not collapsed and is in the graph shown.
  shown() {
    var t, r, n;
    return this.root ? Aa(this.root, !!((t = this.node.flags) != null && t.collapsed)) : !((r = this.node.flags) != null && r.collapsed) && (!((n = ir.canvas) != null && n.graph) || this.node.graph === ir.canvas.graph);
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
      return wp(i.x, i.y, o) ? (t.legacyDragPointer = !0, t.controller.startDrag(i.x - o.x, i.y - o.y), (s = this.setDirtyCanvas) == null || s.call(this, !0, !1), !0) : t.orig.onMouseDown ? t.orig.onMouseDown.apply(this, arguments) : void 0;
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
      var l, c, d, u, f, h;
      const o = yx(this, r, n, i), s = t.getLegacyPreviewRect();
      if (!o || !wp(o.x, o.y, s))
        return t.orig.onMouseWheel ? t.orig.onMouseWheel.apply(this, arguments) : void 0;
      Number(((l = t.view) == null ? void 0 : l.fov) || 100);
      const a = t.controller.applyWheelEvent(r, typeof n == "number" ? n : 0);
      return Number(((c = t.view) == null ? void 0 : c.fov) || 100), a && ((d = this.setDirtyCanvas) == null || d.call(this, !0, !1)), (u = r == null ? void 0 : r.preventDefault) == null || u.call(r), (f = r == null ? void 0 : r.stopPropagation) == null || f.call(r), (h = r == null ? void 0 : r.stopImmediatePropagation) == null || h.call(r), !0;
    };
  }
  localPoint(t) {
    return !Array.isArray(t) || t.length < 2 ? null : { x: Number(t[0] || 0), y: Number(t[1] || 0) };
  }
  getLegacyPreviewRect() {
    var n, i, o, s;
    const t = Math.max(80, Number(((i = (n = this.node) == null ? void 0 : n.size) == null ? void 0 : i[0]) || 0) - Cc * 2), r = Math.max(60, Number(((s = (o = this.node) == null ? void 0 : o.size) == null ? void 0 : s[1]) || 0) - yp - Cc);
    return { x: Cc, y: yp, w: t, h: r };
  }
  drawLegacy(t) {
    var i, o;
    if (!t || (o = (i = this.node) == null ? void 0 : i.flags) != null && o.collapsed) return;
    const r = this.getLegacyPreviewRect();
    if (r.w <= 2 || r.h <= 2) return;
    t.save(), t.translate(r.x, r.y), _p(this.node, t, r.w, r.h, this.view, this.img, this.previewView);
    const n = this.errorText || (this.previewView.failed ? Jm : "");
    n && (t.fillStyle = "rgba(18,18,22,0.92)", t.fillRect(0, 0, r.w, r.h), t.fillStyle = "rgba(236,236,242,0.92)", t.font = "600 12px sans-serif", t.textAlign = "center", t.textBaseline = "middle", t.fillText(n, r.w * 0.5, r.h * 0.5)), t.restore();
  }
  onResizeDom() {
    !this.root || !this.canvas || this.requestDraw();
  }
  syncCanvasSize() {
    if (!this.root || !this.canvas) return !1;
    const t = this.root.getBoundingClientRect(), { width: r, height: n } = Ux(t, window.devicePixelRatio || 1, 1 / 0, { width: window.innerWidth, height: window.innerHeight });
    return this.canvas.width !== r || this.canvas.height !== n ? (this.canvas.width = r, this.canvas.height = n, !0) : !1;
  }
  refreshImage() {
    var i, o, s;
    const t = Zx(this.node);
    if (t) {
      if (t === this.imgSrc && this.img instanceof HTMLVideoElement) return;
      (i = this.mediaCleanup) == null || i.call(this), this.imgSrc = t;
      const a = Ps(document, "preview-node.video");
      a.muted = !0, a.loop = !0, a.preload = "auto", a.playsInline = !0, a.crossOrigin = "anonymous";
      const l = () => {
        this.imgSrc === t && (this.img = a, this.requestDraw());
      }, c = () => this.requestDraw();
      a.addEventListener("loadedmetadata", l), a.addEventListener("loadeddata", l), a.addEventListener("timeupdate", c), a.addEventListener("play", c), a.addEventListener("pause", c), a.src = t, a.load(), this.mediaCleanup = () => {
        a.pause(), a.removeEventListener("loadedmetadata", l), a.removeEventListener("loadeddata", l), a.removeEventListener("timeupdate", c), a.removeEventListener("play", c), a.removeEventListener("pause", c), a.removeAttribute("src"), a.load();
      };
      return;
    }
    const r = Qx(this.node, this.imageInputName);
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
    this.canvas && this.ctx ? (this.syncCanvasSize(), _p(this.node, this.ctx, this.canvas.width, this.canvas.height, this.view, this.img, this.previewView), this.surfaceModel && (this.surfaceModel.viewUnavailable = this.previewView.failed), this.errorText && (this.ctx.fillStyle = "rgba(18,18,22,0.92)", this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), this.ctx.fillStyle = "rgba(236,236,242,0.92)", this.ctx.font = "600 14px sans-serif", this.ctx.textAlign = "center", this.ctx.textBaseline = "middle", this.ctx.fillText(this.errorText, this.canvas.width * 0.5, this.canvas.height * 0.5))) : (o = (i = this.node).setDirtyCanvas) == null || o.call(i, !0, !1), this.inTick = !1, (r || this.needsDraw || this.queuedDuringTick || this.img instanceof HTMLVideoElement && !this.img.paused && !this.img.ended) && !this.rafId && (this.rafId = requestAnimationFrame(this.tick));
  }
  teardown() {
    var r, n, i, o, s, a, l, c, d, u, f, h, w, g, m, _;
    if (((r = ug(this.node)) == null ? void 0 : r.runtime) !== this) return;
    this.tearingDown = !0, this.rafId && (cancelAnimationFrame(this.rafId), this.rafId = 0), (i = (n = this.resizeObserver) == null ? void 0 : n.disconnect) == null || i.call(n), this.resizeObserver = null, (s = (o = this.fullscreenController) == null ? void 0 : o.destroy) == null || s.call(o), this.fullscreenController = null, (a = this.wheelCaptureCleanup) == null || a.call(this), this.wheelCaptureCleanup = null, (c = (l = this.surfaceApp) == null ? void 0 : l.unmount) == null || c.call(l), this.surfaceApp = null, (u = (d = this.surfaceHost) == null ? void 0 : d.remove) == null || u.call(d), this.surfaceHost = null, this.surfaceModel = null, Lr(this.node).surface = null, (f = this.mediaCleanup) == null || f.call(this), this.mediaCleanup = null, this.img = null, this.imgSrc = "";
    try {
      (w = (h = this.root) == null ? void 0 : h.remove) == null || w.call(h);
    } catch {
    }
    try {
      Hg(this.node, this.widget);
    } catch {
    }
    this.node.onDrawForeground = this.orig.onDrawForeground, this.node.onMouseDown = this.orig.onMouseDown, this.node.onMouseMove = this.orig.onMouseMove, this.node.onMouseUp = this.orig.onMouseUp, this.node.onMouseWheel = this.orig.onMouseWheel, this.node.onExecuted = this.orig.onExecuted, this.node.onConnectionsChange = this.orig.onConnectionsChange, this.node.onResize = this.orig.onResize, this.node.onRemoved = this.orig.onRemoved;
    const t = ((_ = (m = (g = this.node) == null ? void 0 : g.widgets) == null ? void 0 : m.find) == null ? void 0 : _.call(m, (ee) => (ee == null ? void 0 : ee.name) === "coverage")) || null;
    t && (t.callback = this.orig.coverageWidgetCallback), this.previewView.dispose(), Lr(this.node).runtime = null;
  }
}
function tk(e, t = {}) {
  if (!e || Lr(e).runtime) return;
  const r = new ek(e, t);
  Lr(e).runtime = r, r.attach();
}
function t0(e, t, r) {
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
function Vd(e) {
  return !!(e != null && e.prototype);
}
function Ss(e, t) {
  return typeof t == "function" ? (...r) => t(e, ...r) : t;
}
function nk(e, t = {}) {
  Vd(e) || tk(e, {
    ...t,
    onOpen: Ss(e, t.onOpen)
  });
}
function rk(e, t = {}) {
  const r = (t == null ? void 0 : t.enabled) === !0, n = {
    ...t,
    mode: "stickers",
    noPreview: !r
  };
  if (!Vd(e)) {
    gp(e, {
      ...n,
      onOpen: Ss(e, t.onOpen)
    });
    return;
  }
  t0(e, "stickers_node_preview", (i) => {
    gp(i, {
      ...n,
      onOpen: Ss(i, t.onOpen)
    });
  });
}
function ik(e, t = {}) {
  if (!Vd(e)) {
    mp(e, {
      ...t,
      onOpen: Ss(e, t.onOpen)
    });
    return;
  }
  t0(e, "cutout_preview", (r) => {
    mp(r, {
      ...t,
      onOpen: Ss(r, t.onOpen)
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
}, Er = "pen";
function xp(e, t) {
  e.brushPresetId = t.id, e.stampKind = t.stampKind, e.hardness = t.hardness, e.spacing = t.spacing, e.flow = t.flow, e.opacity = t.opacity, e.opacityMode = t.opacityMode, e.aspect = t.aspect, e.angle = { ...t.angle }, e.velocityWidthFactor = t.velocityWidthFactor, e.chiselEdgeLift = t.chiselEdgeLift, e.chiselCenterDip = t.chiselCenterDip, e.chiselFiber = t.chiselFiber ?? 0, e.crayonGrain = t.crayonGrain ?? 0, e.scatter = t.scatter ? { ...t.scatter } : null;
}
function ok({ requestFrame: e, cancelFrame: t, tasks: r }) {
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
}), sk = new Set(Object.values(ft));
function ak({ requestAnimationFrame: e, cancelAnimationFrame: t, draw: r, animating: n, onError: i = (o) => console.error("[PanoramaStickers] editor frame callback failed", o) }) {
  let o = 0, s = !1, a = !1, l = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map(), d = 1, u = 0;
  function f(g) {
    try {
      g();
    } catch (m) {
      i(m);
    }
  }
  function h() {
    !o && !s && !a && (o = e(w));
  }
  function w(g) {
    o = 0, s = !0;
    try {
      const m = c;
      c = /* @__PURE__ */ new Map();
      for (const ee of m.values()) f(() => ee(g));
      if (a) return;
      const _ = l;
      l = /* @__PURE__ */ new Set(), (_.size || n()) && f(() => r(g, _));
    } finally {
      s = !1;
    }
    (l.size || c.size || n()) && h();
  }
  return {
    requestDraw(g) {
      if (!sk.has(g)) throw new Error(`Unknown draw reason: ${g}`);
      g === ft.STATE && (u += 1), l.add(g), h();
    },
    requestFrame(g) {
      const m = d++;
      return c.set(m, g), h(), m;
    },
    cancelFrame(g) {
      c.delete(g);
    },
    // Starts the frames again after something animating() reads began, which asks for no draw by itself.
    wake() {
      h();
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
const lk = { class: "pano-floating-right" }, ck = {
  key: 0,
  class: "pano-floating-space"
}, uk = {
  class: "pano-space-modes",
  role: "group",
  "aria-label": "Space view mode"
}, dk = ["data-settled"], fk = ["data-ready", "data-settled"], pk = ["aria-label", "data-tip"], hk = {
  key: 1,
  class: "pano-camera-preview-label"
}, mk = {
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
    return (t, r) => (Te(), De(Qe, null, [
      Me("div", lk, [
        e.space ? Vr((Te(), De("div", ck, [
          Me("div", uk, [
            (Te(!0), De(Qe, null, Pt(e.space.modes, (n) => (Te(), Gn(en, {
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
          [Ci, e.space.visible]
        ]) : mt("", !0),
        (Te(!0), De(Qe, null, Pt(e.buttons, (n) => (Te(), Gn(en, {
          key: n.action,
          icon: n.icon,
          label: n.label,
          tip: n.tip,
          pressed: n.pressed,
          attrs: { "data-action": n.action, disabled: n.disabled === !0 }
        }, null, 8, ["icon", "label", "tip", "pressed", "attrs"]))), 128))
      ]),
      Vr(Me("div", {
        class: "pano-camera-preview-anchor",
        "data-settled": e.preview.settled === !0 ? "true" : "false"
      }, [
        Me("div", {
          class: gt(["pano-camera-preview", { "pano-camera-preview-expanded": e.preview.expanded === !0 }]),
          "data-ready": e.preview.ready ? "true" : "false",
          "data-settled": e.preview.settled === !0 ? "true" : "false",
          style: It({
            width: `${e.preview.width || (e.preview.expanded ? 320 : 220)}px`,
            height: `${e.preview.height || (e.preview.expanded ? 192 : 132)}px`
          })
        }, [
          r[0] || (r[0] = Me("div", {
            class: "pano-camera-preview-host",
            "data-camera-preview-host": ""
          }, [
            Me("canvas", { "data-camera-preview-canvas": "" })
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
          ], 8, pk)) : mt("", !0),
          e.preview.ready !== !0 && e.preview.settled !== !0 ? (Te(), De("div", hk, rt(e.preview.label || "Preview unavailable"), 1)) : mt("", !0)
        ], 14, fk)
      ], 8, dk), [
        [Ci, e.preview.visible]
      ])
    ], 64));
  }
}, gk = {
  viewBox: "0 0 40 40",
  "aria-hidden": "true"
}, yk = ["y2", "transform"], bk = ["transform"], vk = {
  __name: "PanoFrameRollKnob",
  props: { model: { type: Object, default: () => ({}) } },
  setup(e) {
    const t = e, r = Array.from({ length: 24 }, (i, o) => o * 15), n = dt(() => `rotate(${Number(t.model.rollDeg || 0)} 20 20)`);
    return (i, o) => Vr((Te(), De("div", {
      class: gt(["pano-btn pano-btn-icon pano-frame-roll-knob", { dragging: e.model.dragging === !0, armed: e.model.armed === !0 }]),
      "data-frame-roll-knob": "",
      "data-tip": "Roll",
      "aria-hidden": "true"
    }, [
      (Te(), De("svg", gk, [
        o[1] || (o[1] = Me("circle", {
          class: "pano-frame-roll-knob-ring",
          cx: "20",
          cy: "20",
          r: "16"
        }, null, -1)),
        (Te(!0), De(Qe, null, Pt(tt(r), (s) => (Te(), De("line", {
          key: s,
          class: gt(["pano-frame-roll-knob-tick", { zero: s === 0 }]),
          x1: "20",
          y1: "4",
          x2: "20",
          y2: s % 45 === 0 ? 7 : 6,
          transform: `rotate(${s} 20 20)`
        }, null, 10, yk))), 128)),
        Me("g", { transform: n.value }, [...o[0] || (o[0] = [
          Me("line", {
            class: "pano-frame-roll-knob-needle",
            x1: "20",
            y1: "20",
            x2: "20",
            y2: "8"
          }, null, -1)
        ])], 8, bk),
        o[2] || (o[2] = Me("circle", {
          class: "pano-frame-roll-knob-center",
          cx: "20",
          cy: "20",
          r: "2.2"
        }, null, -1))
      ]))
    ], 2)), [
      [Ci, e.model.visible === !0]
    ]);
  }
}, Sk = {
  __name: "PanoFrameRail",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", {
      class: gt(["pano-frame-rail", { "is-hidden": e.model.visible !== !0 }]),
      "data-frame-rail": ""
    }, [
      Be(Og, {
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
      Be(vk, {
        model: e.model.rollKnob || {}
      }, null, 8, ["model"])
    ], 2));
  }
}, _k = ["aria-label"], wk = { class: "pano-canvas-confirm-title" }, xk = { class: "pano-canvas-confirm-text" }, kk = { class: "pano-canvas-confirm-actions" }, Mk = {
  class: "pano-btn pano-btn-primary",
  type: "button",
  "data-action": "confirm-accept"
}, Pk = {
  __name: "PanoConfirmDialog",
  props: {
    model: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = /* @__PURE__ */ Yt(null), n = /* @__PURE__ */ Yt(null);
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
      const h = f.querySelector(`[data-action='${u}']`);
      h instanceof HTMLButtonElement && h.click();
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
      const w = o()[0] || u;
      (g = w == null ? void 0 : w.focus) == null || g.call(w);
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
      const f = o(), h = n.value;
      if (!f.length) {
        u.preventDefault(), (_ = h == null ? void 0 : h.focus) == null || _.call(h);
        return;
      }
      const w = f[0], g = f[f.length - 1], m = document.activeElement;
      if (u.shiftKey) {
        (m === w || m === h || !(h != null && h.contains(m))) && (u.preventDefault(), g.focus());
        return;
      }
      (m === g || !(h != null && h.contains(m))) && (u.preventDefault(), w.focus());
    }
    function d(u) {
      u.target === r.value && s("confirm-cancel");
    }
    return Mi(() => t.model.visible, (u, f) => {
      if (u) {
        i = document.activeElement, kl(() => {
          a();
        });
        return;
      }
      f && l();
    }, { immediate: !0 }), ks(() => {
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
      Me("div", {
        ref_key: "cardRef",
        ref: n,
        class: "pano-canvas-confirm-card",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.model.title || "Confirm",
        tabindex: "-1",
        onKeydown: c
      }, [
        Me("div", wk, rt(e.model.title), 1),
        Me("div", xk, rt(e.model.text), 1),
        Me("div", kk, [
          f[0] || (f[0] = Me("button", {
            class: "pano-btn",
            type: "button",
            "data-action": "confirm-cancel"
          }, "Cancel", -1)),
          Me("button", Mk, rt(e.model.confirmLabel || "Confirm"), 1)
        ])
      ], 40, _k)
    ], 512)) : mt("", !0);
  }
}, Nk = ["data-paint-pane"], Ak = ["hidden"], Ck = ["data-paint-color-swatch", "aria-label", "aria-pressed", "disabled"], Ik = ["aria-pressed", "disabled"], Ek = ["hidden"], Ok = { class: "pano-paint-color-pop-head" }, Fk = { class: "pano-paint-color-field" }, Tk = {
  class: "pano-paint-sv-panel",
  "data-paint-color-sv": ""
}, Dk = {
  class: "pano-paint-hue-strip",
  "data-paint-hue-strip": ""
}, Lk = { class: "pano-paint-color-field" }, Rk = { class: "pano-paint-alpha-wrap" }, Vk = ["value"], $k = { "data-paint-alpha-value": "" }, zk = ["hidden"], jk = {
  class: "pano-paint-color-history-list",
  "data-paint-color-history": ""
}, Hk = ["data-paint-history-index", "aria-label", "disabled"], Gk = ["data-paint-footer"], Kk = ["data-paint-group"], Wk = ["hidden"], Uk = ["value", "disabled"], Bk = {
  class: "pano-paint-size-value",
  "data-paint-size-value": ""
}, Yk = ["hidden"], qk = {
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
      (Te(!0), De(Qe, null, Pt(e.panes, (o) => {
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
            (Te(!0), De(Qe, null, Pt(e.paintSwatches, (a) => (Te(), De("button", {
              key: a.id,
              class: gt(["pano-paint-color-dot", { active: e.state.activeSwatchId === a.id }]),
              type: "button",
              "data-paint-color-swatch": a.id,
              "aria-label": a.label,
              style: It(t(a)),
              "aria-pressed": e.state.activeSwatchId === a.id ? "true" : "false",
              disabled: e.state.colorEnabled === !1
            }, null, 14, Ck))), 128)),
            Me("button", {
              class: gt(["pano-paint-color-dot pano-paint-color-dot-rainbow", { active: e.state.customColorActive === !0 }]),
              type: "button",
              "data-paint-color-custom": "",
              "aria-label": "Custom color",
              "aria-pressed": e.state.customColorActive === !0 ? "true" : "false",
              disabled: e.state.colorEnabled === !1,
              style: It({ "--custom-color": String(e.state.customColorCss || "") })
            }, null, 14, Ik),
            Me("div", {
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
              Me("div", Ok, [
                Me("span", {
                  class: "pano-paint-color-preview",
                  "data-paint-color-preview": "",
                  style: It({ background: String(e.state.customColorCss || "") })
                }, null, 4),
                i[0] || (i[0] = Me("span", { class: "pano-paint-color-pop-label" }, "Custom Color", -1))
              ]),
              Me("div", Fk, [
                Me("div", Tk, [
                  Me("div", {
                    class: "pano-paint-sv-cursor",
                    "data-paint-color-sv-cursor": "",
                    style: It({ left: String(e.state.pickerSvLeft || "0%"), top: String(e.state.pickerSvTop || "0%") })
                  }, null, 4)
                ]),
                Me("div", Dk, [
                  Me("div", {
                    class: "pano-paint-hue-handle",
                    "data-paint-hue-handle": "",
                    style: It({ left: String(e.state.pickerHueLeft || "0%") })
                  }, null, 4)
                ])
              ]),
              Me("label", Lk, [
                i[1] || (i[1] = Me("span", null, "Opacity", -1)),
                Me("div", Rk, [
                  Me("input", {
                    type: "range",
                    min: "0",
                    max: "100",
                    step: "1",
                    value: e.state.alphaValue ?? 100,
                    "data-paint-alpha-slider": ""
                  }, null, 8, Vk),
                  Me("span", $k, rt(e.state.alphaText || "100%"), 1)
                ])
              ]),
              Me("div", {
                class: "pano-paint-color-history",
                "data-paint-color-history-wrap": "",
                hidden: e.state.historyVisible === !1
              }, [
                Me("div", jk, [
                  (Te(!0), De(Qe, null, Pt(e.state.historyEntries || [], (a) => (Te(), De("button", {
                    key: a.index,
                    class: gt(["pano-paint-color-history-dot", { empty: !a.color }]),
                    type: "button",
                    "data-paint-history-index": a.index,
                    "aria-label": `Recent color ${a.index + 1}`,
                    disabled: !a.color,
                    style: It(r(a.color))
                  }, null, 14, Hk))), 128))
                ])
              ], 8, zk)
            ], 12, Ek)
          ], 10, Ak)) : mt("", !0),
          Me("div", {
            class: "pano-paint-footer",
            "data-paint-footer": o.footer
          }, [
            Me("div", {
              class: "pano-paint-footer-group",
              "data-paint-group": o.group
            }, [
              (Te(!0), De(Qe, null, Pt(o.tools, (a) => {
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
            ], 8, Kk),
            Me("div", {
              class: gt(["pano-paint-size-row", { disabled: e.state.sizeDisabled === !0 }]),
              "data-paint-size-row": "",
              hidden: e.state.showSizeRow === !1
            }, [
              Me("input", {
                class: "pano-paint-size-slider",
                "data-paint-size-slider": "",
                type: "range",
                min: "1",
                max: "120",
                step: "1",
                value: e.state.sizeValue ?? 10,
                disabled: e.state.sizeDisabled === !0,
                style: It({ "--v": String(e.state.sizeFill || "0%") })
              }, null, 12, Uk),
              Me("span", Bk, rt(e.state.sizeText || "10"), 1)
            ], 10, Wk),
            Me("div", {
              class: "pano-paint-clear-row",
              "data-paint-clear-row": "",
              hidden: !(((s = e.state.clearVisible) == null ? void 0 : s[o.key]) ?? !o.clearHidden)
            }, [
              Be(en, {
                icon: tt(ze).clear,
                label: o.clearLabel,
                tip: o.clearTip,
                "extra-class": "pano-paint-layer-clear",
                attrs: { "data-paint-layer-clear-current": o.clearTarget }
              }, null, 8, ["icon", "label", "tip", "attrs"])
            ], 8, Yk)
          ], 8, Gk)
        ], 10, Nk);
      }), 128))
    ], 2));
  }
}, Xk = {
  __name: "PanoPaintOverlays",
  setup(e, { expose: t }) {
    const r = /* @__PURE__ */ Yt(null), n = /* @__PURE__ */ Yt(null), i = /* @__PURE__ */ Yt(null);
    function o() {
      return {
        cursor: r.value,
        sizePreview: n.value,
        sizeSample: i.value
      };
    }
    return t({ getRefs: o }), (s, a) => (Te(), De(Qe, null, [
      Me("div", {
        ref_key: "cursorRef",
        ref: r,
        "aria-hidden": "true",
        style: { position: "absolute", left: "0", top: "0", "pointer-events": "none", "z-index": "12", display: "none", "will-change": "transform, width, height, background, border-radius" }
      }, null, 512),
      Me("div", {
        ref_key: "sizePreviewRef",
        ref: n,
        class: "pano-paint-size-preview",
        "aria-hidden": "true"
      }, [
        Me("div", {
          ref_key: "sizeSampleRef",
          ref: i,
          class: "pano-paint-size-preview-sample"
        }, null, 512)
      ], 512)
    ], 64));
  }
}, Jk = ["aria-label"], Zk = ["data-tip", "aria-pressed"], Qk = {
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
      (Te(!0), De(Qe, null, Pt(e.buttons, (o) => (Te(), De("button", Ir({
        key: o.key,
        class: ["pano-segments-item", { active: o.pressed === "true" }],
        type: "button"
      }, { ref_for: !0 }, { [e.attr]: o.key }, {
        "data-tip": o.tip,
        "aria-pressed": o.pressed
      }), rt(o.label), 17, Zk))), 128))
    ], 12, Jk));
  }
}, eM = {
  key: 0,
  class: "pano-cutout-menu"
}, tM = {
  class: "pano-btn pano-btn-icon",
  type: "button",
  "data-action": "aspect",
  "aria-label": "Aspect Ratio",
  "data-tip": "Aspect ratio"
}, nM = ["data-aspect"], rM = ["data-action", "aria-label", "data-tip", "disabled"], iM = {
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
      (Te(!0), De(Qe, null, Pt(e.model.items || [], (n) => (Te(), De(Qe, {
        key: n.key
      }, [
        n.kind === "aspect" ? (Te(), De("div", eM, [
          Me("button", tM, [
            Be($t, {
              icon: n.icon
            }, null, 8, ["icon"])
          ]),
          Me("div", {
            class: gt(["pano-aspect-popover", { open: n.open === !0 }]),
            role: "dialog",
            "aria-label": "Aspect Ratio"
          }, [
            (Te(!0), De(Qe, null, Pt(n.choices || [], (i) => (Te(), De("button", {
              key: i.value,
              class: gt(["pano-btn pano-aspect-choice", { active: i.active === !0 }]),
              type: "button",
              "data-action": "aspect-set",
              "data-aspect": i.value
            }, rt(i.label), 11, nM))), 128))
          ], 2)
        ])) : n.kind === "segments" ? (Te(), Gn(Qk, {
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
        ], 8, rM))
      ], 64))), 128))
    ], 4));
  }
}, oM = {
  key: 0,
  class: "pano-easing"
}, sM = { class: "pano-section-title" }, aM = { class: "pano-easing-range" }, lM = { class: "pano-easing-modes" }, cM = ["aria-pressed", "onClick"], uM = ["viewBox"], dM = ["x", "y"], fM = ["x1", "y1", "x2", "y2"], pM = ["d"], hM = ["x1", "y1", "x2", "y2"], mM = ["x1", "y1", "x2", "y2"], gM = ["cx", "cy"], yM = ["cx", "cy"], bM = { class: "pano-easing-note" }, Nr = 132, bi = 14, vM = {
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
    ], o = /* @__PURE__ */ Yt(null), s = dt(() => {
      var w;
      return Array.isArray((w = r.model) == null ? void 0 : w.easing) ? r.model.easing : null;
    }), a = (w) => bi + w * Nr, l = (w) => bi + (1 - w) * Nr, c = dt(() => {
      var ee;
      if (((ee = r.model) == null ? void 0 : ee.easing) === "hold") return `M${a(0)} ${l(0)} H${a(1)} V${l(1)}`;
      const [w, g, m, _] = s.value || [1 / 3, 1 / 3, 2 / 3, 2 / 3];
      return `M${a(0)} ${l(0)} C${a(w)} ${l(g)} ${a(m)} ${l(_)} ${a(1)} ${l(1)}`;
    }), d = dt(() => s.value ? s.value.map((w) => w.toFixed(2)).join(", ") : "");
    function u(w) {
      var g;
      return JSON.stringify(w.easing) === JSON.stringify((g = r.model) == null ? void 0 : g.easing);
    }
    function f(w, g) {
      n("timeline", { type: "easing", easing: w, commit: g });
    }
    function h(w, g) {
      var te;
      if (w.button !== 0 || !s.value) return;
      const m = w.currentTarget;
      (te = m.setPointerCapture) == null || te.call(m, w.pointerId);
      let _ = null;
      const ee = (I) => {
        const X = o.value.getBoundingClientRect(), j = X.width / (Nr + bi * 2), W = ((I.clientX - X.left) / j - bi) / Nr, ie = 1 - ((I.clientY - X.top) / j - bi) / Nr;
        _ = [..._ || s.value], _[g] = Math.round(Math.min(1, Math.max(0, W)) * 100) / 100, _[g + 1] = Math.round(Math.min(1, Math.max(0, ie)) * 100) / 100, f(_, !1);
      }, V = () => {
        m.removeEventListener("pointermove", ee), m.removeEventListener("pointerup", V), m.removeEventListener("pointercancel", V), _ && f(_, !0);
      };
      m.addEventListener("pointermove", ee), m.addEventListener("pointerup", V), m.addEventListener("pointercancel", V);
    }
    return (w, g) => e.model ? (Te(), De("div", oM, [
      Me("div", sM, [
        g[2] || (g[2] = Me("span", null, "Easing", -1)),
        Me("span", aM, rt(e.model.label), 1)
      ]),
      Me("div", lM, [
        (Te(), De(Qe, null, Pt(i, (m) => Me("button", {
          key: m.label,
          class: "pano-easing-mode",
          type: "button",
          "aria-pressed": u(m) ? "true" : "false",
          onClick: (_) => f(m.easing, !0)
        }, rt(m.label), 9, cM)), 64))
      ]),
      s.value || e.model.easing === "hold" ? (Te(), De("svg", {
        key: 0,
        ref_key: "svgRef",
        ref: o,
        class: "pano-easing-graph",
        viewBox: `0 0 ${Nr + bi * 2} ${Nr + bi * 2}`,
        role: "img",
        "aria-label": "Easing curve"
      }, [
        Me("rect", {
          class: "pano-easing-square",
          x: a(0),
          y: l(1),
          width: Nr,
          height: Nr
        }, null, 8, dM),
        Me("line", {
          class: "pano-easing-diagonal",
          x1: a(0),
          y1: l(0),
          x2: a(1),
          y2: l(1)
        }, null, 8, fM),
        Me("path", {
          class: "pano-easing-curve",
          d: c.value
        }, null, 8, pM),
        s.value ? (Te(), De(Qe, { key: 0 }, [
          Me("line", {
            class: "pano-easing-arm",
            x1: a(0),
            y1: l(0),
            x2: a(s.value[0]),
            y2: l(s.value[1])
          }, null, 8, hM),
          Me("line", {
            class: "pano-easing-arm",
            x1: a(1),
            y1: l(1),
            x2: a(s.value[2]),
            y2: l(s.value[3])
          }, null, 8, mM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[0]),
            cy: l(s.value[1]),
            r: "6",
            onPointerdown: g[0] || (g[0] = (m) => h(m, 0))
          }, null, 40, gM),
          Me("circle", {
            class: "pano-easing-handle",
            cx: a(s.value[2]),
            cy: l(s.value[3]),
            r: "6",
            onPointerdown: g[1] || (g[1] = (m) => h(m, 2))
          }, null, 40, yM)
        ], 64)) : mt("", !0)
      ], 8, uM)) : mt("", !0),
      Me("div", bM, [
        e.model.mixed ? (Te(), De(Qe, { key: 0 }, [
          $o("Mixed: the selected segments differ. Pick one to use it for all of them.")
        ], 64)) : e.model.easing === "auto" ? (Te(), De(Qe, { key: 1 }, [
          $o("Moves through the keyframes without stopping.")
        ], 64)) : e.model.easing === "hold" ? (Te(), De(Qe, { key: 2 }, [
          $o("Holds the value, then jumps to the next keyframe.")
        ], 64)) : s.value ? (Te(), De(Qe, { key: 3 }, [
          $o("cubic-bezier(" + rt(d.value) + ")", 1)
        ], 64)) : mt("", !0)
      ])
    ])) : mt("", !0);
  }
}, SM = {
  class: "pano-side",
  "data-side": ""
}, _M = { class: "pano-side-head" }, wM = { class: "pano-side-title" }, xM = {
  class: "pano-side-title-icon",
  "aria-hidden": "true"
}, kM = {
  key: 0,
  class: "pano-side-scroll"
}, MM = { class: "pano-inspector" }, PM = { class: "pano-ui-row pano-coverage-row" }, NM = ["data-selected"], AM = ["aria-pressed", "disabled"], CM = ["aria-pressed", "disabled"], IM = {
  key: 0,
  class: "pano-section-title"
}, EM = {
  key: 1,
  class: "pano-field-wide pano-target-row"
}, OM = {
  class: "pano-picker",
  "data-picker": "selection"
}, FM = ["disabled"], TM = { class: "pano-picker-label" }, DM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, LM = ["hidden"], RM = ["data-selection-id"], VM = {
  key: 0,
  class: "pano-picker-item-icon",
  "aria-hidden": "true"
}, $M = {
  key: 2,
  class: "pano-state-actions"
}, zM = ["disabled"], jM = ["data-key"], HM = { class: "pano-field-group-values" }, GM = ["title", "onPointerdown"], KM = ["min", "max", "step", "value", "disabled", "aria-label", "data-param-key"], WM = ["data-key"], UM = ["min", "max", "step", "value", "disabled", "data-param-key"], BM = ["min", "max", "step", "value", "disabled", "data-param-key"], YM = ["open"], qM = {
  class: "pano-ui-caret",
  "aria-hidden": "true"
}, XM = { class: "pano-ui-settings-body" }, JM = { class: "pano-ui-row" }, ZM = ["data-selected"], QM = ["aria-pressed"], eP = ["aria-pressed"], tP = { class: "pano-ui-row" }, nP = ["data-selected"], rP = ["aria-pressed"], iP = ["aria-pressed"], oP = {
  key: 1,
  class: "pano-side-footer"
}, sP = ["data-action"], aP = {
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
      const f = c.currentTarget, h = c.clientX, w = Number(u.value) || 0;
      let g = !1;
      f.setPointerCapture(c.pointerId);
      const m = (ee) => {
        if (!g && Math.abs(ee.clientX - h) < 3) return;
        g = !0;
        const V = w + (ee.clientX - h) * d.drag * (ee.shiftKey ? 0.1 : 1);
        u.value = String(Number(V.toFixed(3))), u.dispatchEvent(new Event("input", { bubbles: !0 }));
      }, _ = () => {
        f.removeEventListener("pointermove", m), f.removeEventListener("pointerup", _), f.removeEventListener("pointercancel", _), f.removeEventListener("lostpointercapture", _), g ? u.dispatchEvent(new Event("change", { bubbles: !0 })) : u.focus();
      };
      f.addEventListener("pointermove", m), f.addEventListener("pointerup", _), f.addEventListener("pointercancel", _), f.addEventListener("lostpointercapture", _);
    }
    return (c, d) => {
      var u, f, h, w, g;
      return Te(), De("div", SM, [
        Me("div", _M, [
          Me("div", wM, [
            Me("span", xM, [
              Be($t, {
                icon: tt(ze).globe
              }, null, 8, ["icon"])
            ]),
            Me("span", null, rt(e.nodeTitle), 1)
          ]),
          d[1] || (d[1] = Me("div", { class: "pano-side-actions" }, null, -1))
        ]),
        d[10] || (d[10] = Me("div", { class: "pano-divider" }, null, -1)),
        i.value ? (Te(), De("div", kM, [
          Me("div", MM, [
            d[9] || (d[9] = Me("div", { class: "pano-section-title" }, [
              Me("span", null, "Scene")
            ], -1)),
            Me("div", PM, [
              d[2] || (d[2] = Me("label", null, "Coverage", -1)),
              Me("div", {
                class: "pano-segment",
                "data-setting": "coverage",
                "data-selected": ((u = e.model.coverage) == null ? void 0 : u.value) === 180 ? "1" : "0"
              }, [
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "360",
                  "aria-pressed": ((f = e.model.coverage) == null ? void 0 : f.value) === 360 ? "true" : "false",
                  disabled: ((h = e.model.coverage) == null ? void 0 : h.disabled) === !0
                }, "360", 8, AM),
                Me("button", {
                  class: "pano-segment-btn",
                  type: "button",
                  "data-action": "coverage-set",
                  "data-coverage": "180",
                  "aria-pressed": ((w = e.model.coverage) == null ? void 0 : w.value) === 180 ? "true" : "false",
                  disabled: ((g = e.model.coverage) == null ? void 0 : g.disabled) === !0
                }, "180", 8, CM)
              ], 8, NM)
            ]),
            e.model.transformTitle !== !1 ? (Te(), De("div", IM, [...d[3] || (d[3] = [
              Me("span", null, "Transform", -1)
            ])])) : mt("", !0),
            e.model.selectionPicker ? (Te(), De("div", EM, [
              Me("label", null, rt(e.model.selectionPicker.label), 1),
              Me("div", OM, [
                Me("button", {
                  class: "pano-picker-trigger",
                  type: "button",
                  "data-action": "toggle-selection-picker",
                  disabled: e.model.selectionPicker.disabled === !0
                }, [
                  Me("span", TM, [
                    e.model.selectionPicker.currentIcon ? (Te(), De("span", DM, [
                      Be($t, {
                        icon: e.model.selectionPicker.currentIcon
                      }, null, 8, ["icon"])
                    ])) : mt("", !0),
                    Me("span", null, rt(e.model.selectionPicker.currentLabel), 1)
                  ]),
                  d[4] || (d[4] = Me("span", { class: "pano-picker-caret" }, "▾", -1))
                ], 8, FM),
                Me("div", {
                  class: "pano-picker-pop",
                  hidden: e.model.selectionPicker.open !== !0
                }, [
                  (Te(!0), De(Qe, null, Pt(e.model.selectionPicker.items || [], (m) => (Te(), De("button", {
                    key: m.id,
                    type: "button",
                    class: gt(["pano-picker-item", { active: m.active === !0 }]),
                    "data-action": "select-picker-item",
                    "data-selection-id": m.id
                  }, [
                    m.icon ? (Te(), De("span", VM, [
                      Be($t, {
                        icon: m.icon
                      }, null, 8, ["icon"])
                    ])) : mt("", !0),
                    Me("span", null, rt(m.label), 1)
                  ], 10, RM))), 128))
                ], 8, LM)
              ])
            ])) : mt("", !0),
            e.model.copyStateButton ? (Te(), De("div", $M, [
              Me("button", {
                class: "pano-btn subtle pano-btn-tight pano-btn-copy",
                type: "button",
                "data-action": "copy-state-inline",
                disabled: e.model.copyStateButton.disabled === !0
              }, [
                Be($t, {
                  icon: tt(ze).copy
                }, null, 8, ["icon"]),
                Me("span", null, rt(e.model.copyStateButton.label), 1)
              ], 8, zM)
            ])) : mt("", !0),
            Me("div", {
              class: gt(["pano-params", { disabled: e.model.paramsDisabled === !0 }])
            }, [
              (e.model.notes || []).length ? (Te(!0), De(Qe, { key: 0 }, Pt(e.model.notes, (m) => (Te(), De("div", {
                key: m,
                class: "pano-param-note"
              }, rt(m), 1))), 128)) : (Te(!0), De(Qe, { key: 1 }, Pt(e.model.rows || [], (m) => (Te(), De(Qe, {
                key: m.key
              }, [
                m.grouped ? (Te(), De("div", {
                  key: 0,
                  class: "pano-field pano-field-group",
                  "data-key": m.key
                }, [
                  Me("label", null, rt(m.label), 1),
                  Me("div", HM, [
                    (Te(!0), De(Qe, null, Pt(m.fields, (_) => (Te(), De("div", {
                      key: _.key,
                      class: "pano-axis-field"
                    }, [
                      Me("span", {
                        class: gt(["pano-axis", { disabled: s(_, e.model) }]),
                        title: _.label,
                        onPointerdown: (ee) => l(ee, _)
                      }, rt(_.short), 43, GM),
                      Me("input", {
                        ref_for: !0,
                        ref: (ee) => {
                          a[_.key] = ee;
                        },
                        type: "number",
                        min: _.min,
                        max: _.max,
                        step: _.step,
                        value: _.displayValue,
                        disabled: s(_, e.model),
                        "aria-label": `${m.label} ${_.label}`,
                        "data-action": "param-input",
                        "data-input-kind": "number",
                        "data-param-key": _.key
                      }, null, 8, KM)
                    ]))), 128))
                  ])
                ], 8, jM)) : (Te(), De("div", {
                  key: 1,
                  class: "pano-field",
                  "data-key": m.key
                }, [
                  Me("label", null, rt(m.label), 1),
                  Me("input", {
                    type: "range",
                    min: m.fields[0].min,
                    max: m.fields[0].max,
                    step: m.fields[0].step,
                    value: m.fields[0].value,
                    disabled: s(m.fields[0], e.model),
                    style: It(o(m.fields[0])),
                    "data-action": "param-input",
                    "data-input-kind": "range",
                    "data-param-key": m.fields[0].key
                  }, null, 12, UM),
                  Me("input", {
                    type: "number",
                    min: m.fields[0].min,
                    max: m.fields[0].max,
                    step: m.fields[0].step,
                    value: m.fields[0].displayValue,
                    disabled: s(m.fields[0], e.model),
                    "data-action": "param-input",
                    "data-input-kind": "number",
                    "data-param-key": m.fields[0].key
                  }, null, 8, BM)
                ], 8, WM))
              ], 64))), 128))
            ], 2),
            Be(vM, {
              model: e.easing,
              onTimeline: d[0] || (d[0] = (m) => n("timeline", m))
            }, null, 8, ["model"]),
            e.model.uiSettings ? (Te(), De("details", {
              key: 3,
              class: "pano-ui-settings",
              open: e.model.uiSettings.open === !0
            }, [
              Me("summary", null, [
                d[5] || (d[5] = Me("span", { class: "pano-ui-summary-label" }, "UI Settings", -1)),
                Me("span", qM, [
                  Be($t, {
                    icon: tt(ze).chevron
                  }, null, 8, ["icon"])
                ])
              ]),
              Me("div", XM, [
                Me("div", JM, [
                  d[6] || (d[6] = Me("label", null, "Drag X", -1)),
                  Me("div", {
                    class: "pano-segment",
                    "data-setting": "invert-x",
                    "data-selected": e.model.uiSettings.invertX ? "1" : "0"
                  }, [
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertX ? "false" : "true"
                    }, "Normal", 8, QM),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-x",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertX ? "true" : "false"
                    }, "Inverted", 8, eP)
                  ], 8, ZM)
                ]),
                Me("div", tP, [
                  d[7] || (d[7] = Me("label", null, "Drag Y", -1)),
                  Me("div", {
                    class: "pano-segment",
                    "data-setting": "invert-y",
                    "data-selected": e.model.uiSettings.invertY ? "1" : "0"
                  }, [
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "0",
                      "aria-pressed": e.model.uiSettings.invertY ? "false" : "true"
                    }, "Normal", 8, rP),
                    Me("button", {
                      class: "pano-segment-btn",
                      type: "button",
                      "data-action": "set-invert-y",
                      "data-value": "1",
                      "aria-pressed": e.model.uiSettings.invertY ? "true" : "false"
                    }, "Inverted", 8, iP)
                  ], 8, nP)
                ]),
                d[8] || (d[8] = Me("div", { class: "pano-ui-row" }, [
                  Me("span"),
                  Me("button", {
                    class: "pano-btn subtle",
                    type: "button",
                    "data-action": "ui-reset-defaults"
                  }, "Reset Defaults")
                ], -1))
              ])
            ], 8, YM)) : mt("", !0)
          ])
        ])) : mt("", !0),
        (e.model.footerButtons || []).length ? (Te(), De("div", oP, [
          (Te(!0), De(Qe, null, Pt(e.model.footerButtons, (m) => (Te(), De("button", {
            key: m.action,
            class: gt(["pano-btn", { "pano-btn-primary": m.primary === !0 }]),
            type: "button",
            "data-action": m.action
          }, rt(m.label), 11, sP))), 128))
        ])) : mt("", !0)
      ]);
    };
  }
}, lP = { class: "pano-timeline-bar" }, cP = ["aria-label", "data-tip"], uP = ["aria-label", "data-tip"], dP = { class: "pano-timeline-time" }, fP = ["data-tip"], pP = { key: 0 }, hP = ["min", "max", "value"], mP = {
  class: "pano-timeline-setting",
  "data-tip": "Output length in frames; empty follows the inputs"
}, gP = ["max", "value"], yP = ["aria-expanded"], bP = ["inert"], vP = { class: "pano-timeline-name" }, SP = ["aria-pressed", "aria-label", "data-tip", "onClick"], _P = {
  key: 1,
  class: "pano-timeline-eye",
  "aria-hidden": "true"
}, wP = ["disabled", "aria-expanded", "aria-label", "onClick"], xP = ["title", "aria-current", "onClick"], kP = ["data-keyed", "aria-label", "onClick"], MP = ["onPointerdown"], PP = ["onPointerdown"], NP = ["onPointerdown"], AP = ["onPointerdown"], CP = ["aria-label", "data-tip", "onPointerdown"], IP = { key: 0 }, EP = ["onPointerdown"], OP = ["aria-label", "data-tip", "onPointerdown"], FP = { key: 0 }, TP = 10, DP = {
  __name: "PanoTimeline",
  props: {
    model: { type: Object, default: () => ({}) },
    playhead: { type: Object, default: () => ({ frame: /* @__PURE__ */ Ta(0), playing: /* @__PURE__ */ Ta(!1) }) }
  },
  emits: ["action"],
  setup(e, { emit: t }) {
    const r = e, n = t, i = /* @__PURE__ */ Yt(null), o = /* @__PURE__ */ Yt(null), s = /* @__PURE__ */ Yt(1), a = /* @__PURE__ */ Yt(0), l = /* @__PURE__ */ Yt(!1);
    let c = null, d = null, u = null;
    Pl(() => {
      c = new ResizeObserver(([A]) => {
        s.value = Math.max(1, A.contentRect.width);
      }), i.value && c.observe(i.value), d = new ResizeObserver(([A]) => {
        a.value = A.contentRect.height;
      }), o.value && d.observe(o.value);
    }), ks(() => {
      c == null || c.disconnect(), d == null || d.disconnect(), u == null || u();
    });
    const f = dt(() => Math.max(1, Number(r.model.span || 1))), h = dt(() => r.playhead.frame.value), w = dt(() => r.playhead.playing.value), g = dt(() => kv(h.value, Number(r.model.fps || 1))), m = dt(() => s.value / f.value), _ = (A) => `${A / f.value * 100}%`, ee = dt(() => Rv(f.value, m.value));
    function V(A) {
      const z = i.value.getBoundingClientRect(), M = Math.floor((A - z.left) / Math.max(1, z.width) * f.value);
      return Math.min(f.value - 1, Math.max(0, M));
    }
    function te(A, z, M) {
      const H = Math.ceil(TP / Math.max(1e-6, m.value)), T = new Map(z.map((K) => [K.frame, K.full]));
      return Vv(z.map((K) => K.frame), H).map((K, fe) => ({
        ...K,
        key: `${A}:${fe}`,
        partial: K.frames.some((se) => !T.get(se)),
        selected: K.frames.some((se) => M.includes(se))
      }));
    }
    const I = dt(() => {
      const A = /* @__PURE__ */ new Map();
      for (const z of r.model.rows || []) {
        A.set(z.id, te(z.id, z.keys, z.selectedFrames));
        for (const M of z.lanes) A.set(M.key, te(M.key, M.frames.map((H) => ({ frame: H, full: !0 })), M.selectedFrames));
      }
      return A;
    });
    function X(A) {
      const z = A.end === null ? f.value : A.end;
      return { left: _(A.start), width: _(Math.max(0, z - A.start)) };
    }
    function j(A, z) {
      const M = A.clientX, H = Math.max(1e-6, m.value);
      let T = 0;
      z("start", 0, A);
      const K = (se) => {
        if (se.pointerId !== A.pointerId) return;
        const Y = Math.round((se.clientX - M) / H);
        Y !== T && (T = Y, z("move", T, se));
      }, fe = (se) => {
        se.pointerId === A.pointerId && (u(), z("end", T, se));
      };
      u == null || u(), u = () => {
        window.removeEventListener("pointermove", K), window.removeEventListener("pointerup", fe), window.removeEventListener("pointercancel", fe), u = null;
      }, window.addEventListener("pointermove", K), window.addEventListener("pointerup", fe), window.addEventListener("pointercancel", fe);
    }
    function W(A) {
      A.button === 0 && j(A, (z, M, H) => n("action", { type: "seek", frame: V(H.clientX), phase: z }));
    }
    function ie(A, z, M) {
      A.button === 0 && (n("action", { type: "select-row", id: z.id }), j(A, (H, T) => n("action", { type: "clip", id: z.id, mode: M, delta: T, phase: H })));
    }
    function pe(A, z, M, H, T) {
      if (A.button === 0) {
        if (A.shiftKey) {
          n("action", { type: "select-keys", owner: z.id, lane: M, frames: H.frames, additive: !0 });
          return;
        }
        H.frames.every((K) => T.includes(K)) || n("action", { type: "select-keys", owner: z.id, lane: M, frames: H.frames, additive: !1 }), j(A, (K, fe) => n("action", { type: "move-keys", delta: fe, phase: K }));
      }
    }
    const q = dt(() => String(Number(Number(r.model.fps || 0).toFixed(3))));
    async function de(A, z, M) {
      n("action", z), await kl(), A.target.value = M();
    }
    function ae(A) {
      de(A, { type: "fps", fps: Number(A.target.value) }, () => q.value);
    }
    function ve(A) {
      const z = A.target.value.trim();
      de(A, { type: "length", length: z ? Number(z) : null }, () => r.model.length ?? "");
    }
    function G(A, z, M) {
      A.button !== 0 || A.target !== A.currentTarget || n("action", { type: "select-keys", owner: z.id, lane: M, frames: [], additive: !1 });
    }
    return (A, z) => Vr((Te(), De("section", {
      class: gt(["pano-timeline", { expanded: e.model.expanded }]),
      "data-timeline": ""
    }, [
      Me("div", lP, [
        Me("button", {
          class: "pano-btn pano-btn-icon pano-timeline-play",
          type: "button",
          "aria-label": w.value ? "Pause (Space)" : "Play (Space)",
          "data-tip": w.value ? "Pause (Space)" : "Play (Space)",
          onClick: z[0] || (z[0] = (M) => n("action", { type: "play" }))
        }, [
          Be($t, {
            icon: w.value ? tt(ze).pause : tt(ze).play
          }, null, 8, ["icon"])
        ], 8, cP),
        e.model.hasAudio ? (Te(), De("button", {
          key: 0,
          class: "pano-btn pano-btn-icon pano-timeline-mute",
          type: "button",
          "aria-label": e.model.muted ? "Unmute" : "Mute",
          "data-tip": e.model.muted ? "Unmute" : "Mute",
          onClick: z[1] || (z[1] = (M) => n("action", { type: "mute" }))
        }, [
          Be($t, {
            icon: e.model.muted ? tt(ze).volume_muted : tt(ze).volume2
          }, null, 8, ["icon"])
        ], 8, uP)) : mt("", !0),
        Me("span", dP, rt(g.value), 1),
        Me("label", {
          class: "pano-timeline-setting",
          "data-tip": e.model.fpsLocked ? "Set by the video input" : "Timeline fps"
        }, [
          e.model.fpsLocked ? (Te(), De("span", pP, rt(q.value), 1)) : (Te(), De("input", {
            key: 1,
            type: "number",
            min: tt(am),
            max: tt(sd),
            step: "any",
            value: q.value,
            "aria-label": "Timeline fps",
            onChange: ae
          }, null, 40, hP)),
          z[6] || (z[6] = Me("span", null, "fps", -1))
        ], 8, fP),
        Me("label", mP, [
          z[7] || (z[7] = Me("span", null, "Length", -1)),
          Me("input", {
            type: "number",
            min: "1",
            max: tt(ad),
            step: "1",
            placeholder: "Auto",
            value: e.model.length ?? "",
            "aria-label": "Output length in frames",
            onChange: ve
          }, null, 40, gP)
        ]),
        Me("button", {
          class: "pano-timeline-toggle",
          type: "button",
          "aria-expanded": e.model.expanded ? "true" : "false",
          onClick: z[2] || (z[2] = (M) => n("action", { type: "toggle-expanded" }))
        }, [
          z[8] || (z[8] = Me("span", null, "Timeline", -1)),
          Be($t, {
            icon: tt(ze).chevron
          }, null, 8, ["icon"])
        ], 8, yP)
      ]),
      Me("div", {
        class: gt(["pano-timeline-body", { open: e.model.expanded, sliding: l.value }]),
        style: It({ "--pano-timeline-rows": `${a.value}px` }),
        inert: !e.model.expanded,
        onTransitionrun: z[3] || (z[3] = At((M) => l.value = !0, ["self"])),
        onTransitionend: z[4] || (z[4] = At((M) => l.value = !1, ["self"])),
        onTransitioncancel: z[5] || (z[5] = At((M) => l.value = !1, ["self"]))
      }, [
        Me("div", {
          ref_key: "gridRef",
          ref: o,
          class: "pano-timeline-grid"
        }, [
          z[9] || (z[9] = Me("div", { class: "pano-timeline-corner" }, null, -1)),
          Me("div", {
            ref_key: "rulerRef",
            ref: i,
            class: "pano-timeline-ruler",
            onPointerdown: W
          }, [
            (Te(!0), De(Qe, null, Pt(ee.value, (M) => (Te(), De("span", {
              key: M,
              class: "pano-timeline-tick",
              style: It({ left: _(M) })
            }, rt(M), 5))), 128)),
            Me("span", {
              class: "pano-timeline-playhead",
              style: It({ left: _(h.value + 0.5) })
            }, null, 4)
          ], 544),
          (Te(!0), De(Qe, null, Pt(e.model.rows || [], (M) => (Te(), De(Qe, {
            key: M.id
          }, [
            Me("div", {
              class: gt(["pano-timeline-head", { selected: M.selected, "is-hidden": !M.visible }])
            }, [
              Me("div", vP, [
                M.hideable ? (Te(), De("button", {
                  key: 0,
                  class: "pano-timeline-eye",
                  type: "button",
                  "aria-pressed": M.visible ? "true" : "false",
                  "aria-label": `${M.label} visible`,
                  "data-tip": M.visible ? "Hide" : "Show",
                  onClick: At((H) => n("action", { type: "toggle-visible", id: M.id }), ["stop"])
                }, [
                  Be($t, {
                    icon: M.visible ? tt(ze).eye : tt(ze).eye_dashed
                  }, null, 8, ["icon"])
                ], 8, SP)) : (Te(), De("span", _P)),
                Me("button", {
                  class: "pano-timeline-open",
                  type: "button",
                  disabled: !M.keyable,
                  "aria-expanded": M.open ? "true" : "false",
                  "aria-label": M.open ? `Hide ${M.label} parameters` : `Show ${M.label} parameters`,
                  onClick: At((H) => n("action", { type: "toggle-row", id: M.id }), ["stop"])
                }, [
                  Be($t, {
                    icon: tt(ze).chevron
                  }, null, 8, ["icon"])
                ], 8, wP),
                Me("button", {
                  class: "pano-timeline-select",
                  type: "button",
                  title: M.label,
                  "aria-current": M.selected ? "true" : void 0,
                  onClick: (H) => n("action", { type: "select-row", id: M.id })
                }, [
                  Be($t, {
                    icon: M.icon
                  }, null, 8, ["icon"]),
                  Me("span", null, rt(M.label), 1)
                ], 8, xP),
                M.keyable ? (Te(), De("button", {
                  key: 2,
                  class: gt(["pano-timeline-key", { keyed: tt(bc)(M.keys, h.value) }]),
                  type: "button",
                  "data-keyed": tt(bc)(M.keys, h.value) ? "true" : "false",
                  "aria-label": tt(bc)(M.keys, h.value) ? `Every ${M.label} parameter has a keyframe here; update them` : `Add keyframes for every ${M.label} parameter here`,
                  "data-tip": "Keyframe every parameter here",
                  onClick: At((H) => n("action", { type: "key-row", owner: M.id }), ["stop"])
                }, [
                  Be($t, {
                    icon: tt(ze).keyframe
                  }, null, 8, ["icon"])
                ], 10, kP)) : mt("", !0)
              ]),
              M.open ? (Te(!0), De(Qe, { key: 0 }, Pt(M.lanes, (H) => (Te(), De("div", {
                key: H.key,
                class: "pano-timeline-lane-head"
              }, rt(H.label), 1))), 128)) : mt("", !0)
            ], 2),
            Me("div", {
              class: gt(["pano-timeline-track", { selected: M.selected }])
            }, [
              Me("div", {
                class: "pano-timeline-row-line",
                onPointerdown: (H) => G(H, M, null)
              }, [
                M.clip ? (Te(), De("div", {
                  key: 0,
                  class: gt(["pano-timeline-clip", { open: M.clip.end === null }]),
                  style: It(X(M.clip)),
                  onPointerdown: At((H) => ie(H, M, "move"), ["stop"])
                }, [
                  Me("span", {
                    class: "pano-timeline-trim start",
                    onPointerdown: At((H) => ie(H, M, "start"), ["stop"])
                  }, null, 40, NP),
                  Me("span", {
                    class: "pano-timeline-trim end",
                    onPointerdown: At((H) => ie(H, M, "end"), ["stop"])
                  }, null, 40, AP)
                ], 46, PP)) : mt("", !0),
                (Te(!0), De(Qe, null, Pt(I.value.get(M.id), (H) => (Te(), De("button", {
                  key: H.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: H.selected, cluster: H.frames.length > 1, partial: H.partial }]),
                  style: It({ left: _(H.frame + 0.5) }),
                  "aria-label": `${M.label}: ${H.frames.length > 1 ? `${H.frames.length} keyframes` : `keyframe at frame ${H.frames[0]}`}`,
                  "data-tip": H.frames.length > 1 ? `${H.frames.length} keyframes` : `Frame ${H.frames[0]}`,
                  onPointerdown: At((T) => pe(T, M, null, H, M.selectedFrames), ["stop"])
                }, [
                  H.frames.length > 1 ? (Te(), De("span", IP, rt(H.frames.length), 1)) : mt("", !0)
                ], 46, CP))), 128))
              ], 40, MP),
              M.open ? (Te(!0), De(Qe, { key: 0 }, Pt(M.lanes, (H) => (Te(), De("div", {
                key: H.key,
                class: "pano-timeline-lane",
                onPointerdown: (T) => G(T, M, H.lane)
              }, [
                (Te(!0), De(Qe, null, Pt(I.value.get(H.key), (T) => (Te(), De("button", {
                  key: T.key,
                  type: "button",
                  class: gt(["pano-timeline-pin", { selected: T.selected, cluster: T.frames.length > 1 }]),
                  style: It({ left: _(T.frame + 0.5) }),
                  "aria-label": `${H.label}: ${T.frames.length > 1 ? `${T.frames.length} keyframes` : `keyframe at frame ${T.frames[0]}`}`,
                  "data-tip": T.frames.length > 1 ? `${T.frames.length} keyframes` : `Frame ${T.frames[0]}`,
                  onPointerdown: At((K) => pe(K, M, H.lane, T, H.selectedFrames), ["stop"])
                }, [
                  T.frames.length > 1 ? (Te(), De("span", FP, rt(T.frames.length), 1)) : mt("", !0)
                ], 46, OP))), 128))
              ], 40, EP))), 128)) : mt("", !0),
              Me("span", {
                class: "pano-timeline-playhead",
                style: It({ left: _(h.value + 0.5) })
              }, null, 4)
            ], 2)
          ], 64))), 128))
        ], 512)
      ], 46, bP)
    ], 2)), [
      [Ci, e.model.visible]
    ]);
  }
}, LP = {
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
    }, rt(e.model.text || ""), 7));
  }
}, RP = {
  class: "pano-floating-left",
  "data-tool-rail": ""
}, VP = {
  __name: "PanoToolRail",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => (Te(), De("div", RP, [
      (Te(!0), De(Qe, null, Pt(e.buttons, (n) => Vr((Te(), Gn(en, {
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
        [Ci, n.visible !== !1]
      ])), 128))
    ]));
  }
}, $P = ["data-video-ready"], zP = { class: "pano-video-transport-shell" }, jP = { class: "pano-video-controls-left" }, HP = { class: "pano-video-filmstrip" }, GP = {
  class: "pano-video-filmstrip-track",
  "aria-hidden": "true"
}, KP = ["src", "onLoad"], WP = {
  key: 1,
  class: "pano-video-thumb-placeholder"
}, UP = ["max", "value", "disabled"], BP = { class: "pano-video-controls-right" }, YP = ["data-has-audio"], qP = { class: "pano-video-volume-pop" }, XP = ["value", "disabled"], JP = {
  __name: "PanoVideoTransport",
  props: {
    state: { type: Object, default: () => ({}) }
  },
  setup(e) {
    const t = e, r = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.playing) === !0 ? "Pause" : "Play";
    }), n = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.playing) === !0 ? "Pause video" : "Play video";
    }), i = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.playing) === !0 ? ze.pause : ze.play;
    }), o = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.loop) === !1 ? "Enable loop" : "Disable loop";
    }), s = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.loop) === !1 ? "Enable loop playback" : "Disable loop playback";
    }), a = dt(() => {
      var I;
      return ((I = t.state) == null ? void 0 : I.loop) === !1 ? ze.loop_off : ze.loop;
    }), l = dt(() => {
      var I, X;
      return ((I = t.state) == null ? void 0 : I.muted) === !0 || Number(((X = t.state) == null ? void 0 : X.volume) ?? 1) <= 0 ? "Unmute" : "Mute";
    }), c = dt(() => {
      var I, X, j;
      return ((I = t.state) == null ? void 0 : I.hasAudio) !== !0 ? ze.volume : ((X = t.state) == null ? void 0 : X.muted) === !0 || Number(((j = t.state) == null ? void 0 : j.volume) ?? 1) <= 0 ? ze.volume_muted : ze.volume2;
    }), d = dt(() => {
      var I;
      return Math.max(0, Math.min(100, Number(((I = t.state) == null ? void 0 : I.progressPct) || 0)));
    }), u = dt(() => ({ left: `${d.value}%` })), f = dt(() => {
      var W, ie;
      const I = (W = t.state) == null ? void 0 : W.volumePct, X = Number(((ie = t.state) == null ? void 0 : ie.volume) ?? 1) * 100, j = Number(I ?? X ?? 0);
      return {
        "--v": `${Math.max(0, Math.min(100, j))}%`
      };
    }), h = dt(() => {
      var j, W;
      const X = [
        String(((j = t.state) == null ? void 0 : j.currentTimeLabel) || "0:00"),
        String(((W = t.state) == null ? void 0 : W.durationLabel) || "0:00")
      ].reduce((ie, pe) => Math.max(ie, pe.length), 4);
      return `${Math.max(4, X)}ch`;
    }), w = dt(() => ({ "--pano-video-time-ch": h.value })), g = dt(() => {
      var j, W;
      const I = Array.isArray((j = t.state) == null ? void 0 : j.thumbnails) ? t.state.thumbnails : [];
      if (I.length) return I;
      const X = Math.max(7, Number(((W = t.state) == null ? void 0 : W.thumbnailCount) || 9));
      return Array.from({ length: X }, (ie, pe) => ({
        id: `placeholder-${pe}`,
        src: "",
        label: ""
      }));
    }), m = /* @__PURE__ */ Yt(/* @__PURE__ */ new Set()), _ = (I) => String((I == null ? void 0 : I.id) || (I == null ? void 0 : I.src) || (I == null ? void 0 : I.label) || ""), ee = (I) => m.value.has(_(I)), V = (I) => {
      const X = new Set(m.value);
      X.add(_(I)), m.value = X;
    };
    Mi(g, (I) => {
      const X = new Set(I.map(_)), j = /* @__PURE__ */ new Set();
      for (const W of m.value)
        X.has(W) && j.add(W);
      m.value = j;
    }, { immediate: !0 });
    const te = dt(() => {
      var I;
      return {
        "--pano-video-shell-max": `${Math.max(320, Number(((I = t.state) == null ? void 0 : I.shellMaxWidthPx) || 640))}px`
      };
    });
    return (I, X) => (Te(), De("div", {
      class: gt(["pano-video-transport", { "is-hidden": e.state.visible !== !0 }]),
      "data-video-ready": e.state.ready === !0 ? "true" : "false",
      style: It(te.value)
    }, [
      X[1] || (X[1] = Me("video", {
        class: "pano-video-source",
        "data-video-element": "",
        preload: "auto",
        playsinline: "",
        crossorigin: "anonymous"
      }, null, -1)),
      X[2] || (X[2] = Me("video", {
        class: "pano-video-source",
        "data-port-video-element": "",
        preload: "auto",
        playsinline: "",
        muted: "",
        crossorigin: "anonymous"
      }, null, -1)),
      Me("div", zP, [
        Me("div", jP, [
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
          Me("div", {
            class: "pano-video-time pano-video-time-start",
            style: It(w.value)
          }, rt(e.state.currentTimeLabel || "0:00"), 5)
        ]),
        Me("div", HP, [
          Me("div", GP, [
            (Te(!0), De(Qe, null, Pt(g.value, (j) => (Te(), De("div", {
              key: _(j),
              class: gt(["pano-video-thumb", {
                "is-placeholder": !j.src,
                "is-loaded": j.src && ee(j)
              }])
            }, [
              j.src ? (Te(), De("img", {
                key: 0,
                src: j.src,
                alt: "",
                draggable: "false",
                onLoad: (W) => V(j)
              }, null, 40, KP)) : (Te(), De("span", WP))
            ], 2))), 128))
          ]),
          Me("div", {
            class: "pano-video-playhead",
            style: It(u.value),
            "aria-hidden": "true"
          }, [...X[0] || (X[0] = [
            Me("span", { class: "pano-video-playhead-line" }, null, -1),
            Me("span", { class: "pano-video-playhead-handle" }, null, -1)
          ])], 4),
          Me("input", {
            class: "pano-video-seek-hit",
            "data-video-seek": "",
            type: "range",
            min: "0",
            max: Math.max(0, Number(e.state.duration || 0)),
            step: "0.01",
            value: Math.max(0, Number(e.state.currentTime || 0)),
            disabled: e.state.ready !== !0,
            "aria-label": "Seek video"
          }, null, 8, UP)
        ]),
        Me("div", BP, [
          Me("div", {
            class: "pano-video-time pano-video-time-end",
            style: It(w.value)
          }, rt(e.state.durationLabel || "0:00"), 5),
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
          Me("div", {
            class: "pano-video-volume-stack",
            "data-has-audio": e.state.hasAudio === !0 ? "true" : "false"
          }, [
            Me("div", qP, [
              Me("input", {
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
              }, null, 12, XP)
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
          ], 8, YP)
        ])
      ])
    ], 14, $P));
  }
}, ZP = { class: "pano-floating-top" }, QP = ["data-selected", "data-view-count"], eN = ["data-view", "aria-pressed", "aria-label", "aria-disabled", "tabindex", "data-tip"], tN = { class: "label" }, nN = {
  __name: "PanoViewToggle",
  props: {
    buttons: { type: Array, default: () => [] }
  },
  setup(e) {
    return (t, r) => {
      var n;
      return Te(), De("div", ZP, [
        Me("div", {
          class: "pano-view-toggle",
          "data-selected": ((n = e.buttons.find((i) => i.pressed === "true")) == null ? void 0 : n.key) || "pano",
          "data-view-count": String(e.buttons.length)
        }, [
          (Te(!0), De(Qe, null, Pt(e.buttons, (i) => Vr((Te(), De("button", {
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
            Me("span", tN, rt(i.label), 1)
          ], 10, eN)), [
            [Ci, i.visible !== !1]
          ])), 128))
        ], 8, QP)
      ]);
    };
  }
};
function n0(e = "stickers") {
  const t = String(e || "stickers") === "cutout", r = e === "studio";
  return {
    viewButtons: [
      { key: "pano", label: "Panorama", icon: ze.pano, pressed: "true", extraClass: "" },
      { key: "unwrap", label: "Unwrap", icon: ze.unwrap, pressed: "false", extraClass: "" },
      ...t || r ? [{ key: "frame", label: "Frame", icon: ze.camera, pressed: "false", extraClass: "pano-view-btn-icon" }] : []
    ],
    // How the panorama view moves in space (#71): at the left end of the bottom-right buttons, the
    // 3DoF | 6DoF icon buttons and Frame Selected show together while the panorama view shows World content
    // (PanoFloatingRight.vue).
    spaceButtons: [
      { key: "3dof", label: "3DoF", tip: "3DoF", icon: ze.dof_3 },
      { key: "6dof", label: "6DoF", tip: "6DoF", icon: ze.dof_6 }
    ],
    spaceFrameButton: { action: "frame-view", label: "Frame Selected", tip: "Frame selected", icon: ze.focus },
    toolButtons: [
      { key: "cursor", attr: "data-tool-mode", value: "cursor", label: "Cursor", tip: "Cursor", active: !0, accent: !1, icon: ze.cursor_tool, pressed: "true" },
      { key: "paint", attr: "data-tool-mode", value: "paint", label: "Paint", tip: "Paint", active: !1, accent: !1, icon: ze.palette_tool, pressed: "false" },
      { key: "mask", attr: "data-tool-mode", value: "mask", label: "Mask", tip: "Mask", active: !1, accent: !1, icon: ze.circle_dashed_tool, pressed: "false" },
      ...t ? [
        { key: "add-image", attr: "data-tool-ui-action", value: "add-image", label: "Add Image", tip: "Add image", active: !1, accent: !1, icon: ze.image, pressed: null },
        { key: "add-or-look", attr: "data-tool-ui-action", value: "add-or-look", label: "Add Frame", tip: "Add frame", active: !1, accent: !0, icon: ze.plus_circle, pressed: null }
      ] : [
        { key: "add", attr: "data-tool-ui-action", value: "add", label: "Add Image", tip: "Add image", active: !1, accent: !0, icon: ze.image, pressed: null },
        // Panorama Studio only (#72): an image placed in space as a world Sticker.
        { key: "add-world", attr: "data-tool-ui-action", value: "add-world", label: "Add World Image", tip: "Add image in space", active: !1, accent: !1, icon: ze.globe, pressed: null, visible: !1 },
        // Panorama Studio's one Camera; disabled, not hidden, while it has one.
        ...r ? [{ key: "add-camera", attr: "data-tool-ui-action", value: "add-camera", label: "Add Camera", tip: "Add camera", active: !1, accent: !1, icon: ze.camera_plus, pressed: null }] : []
      ],
      { key: "clear", attr: "data-tool-ui-action", value: "clear", label: "Clear All", tip: "Clear all", active: !1, accent: !1, icon: ze.clear, pressed: null },
      { key: "undo", attr: "data-tool-ui-action", value: "undo", label: "Undo", tip: "Undo", active: !1, accent: !1, icon: ze.undo, pressed: null },
      { key: "redo", attr: "data-tool-ui-action", value: "redo", label: "Redo", tip: "Redo", active: !1, accent: !1, icon: ze.redo, pressed: null }
    ],
    floatingButtons: [
      { action: "reset-view", label: "Reset View", tip: "Reset view", pressed: null, icon: ze.reset },
      { action: "toggle-grid", label: "Hide Grid", tip: "Hide grid", pressed: "true", icon: ze.eye }
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
          { key: "pen", attr: "data-paint-tool", label: "Pen", tip: "Pen", icon: ze.pencil_tool },
          { key: "brush", attr: "data-paint-tool", label: "Soft Brush", tip: "Soft Brush", icon: ze.spray_can_tool },
          { key: "marker", attr: "data-paint-tool", label: "Marker", tip: "Marker", icon: ze.highlighter_tool },
          { key: "crayon", attr: "data-paint-tool", label: "Pastel", tip: "Pastel", icon: ze.paintbrush_vertical_tool },
          { key: "eraser", attr: "data-paint-tool", label: "Eraser", tip: "Eraser", icon: ze.eraser_tool },
          { key: "lasso_fill", attr: "data-paint-tool", label: "Lasso", tip: "Lasso", icon: ze.lasso_tool }
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
          { key: "pen", attr: "data-mask-tool", label: "Mask Pen", tip: "Mask pen", icon: ze.pencil_tool },
          { key: "eraser", attr: "data-mask-tool", label: "Mask Eraser", tip: "Mask eraser", icon: ze.eraser_tool },
          { key: "lasso_fill", attr: "data-mask-tool", label: "Mask Lasso", tip: "Mask lasso", icon: ze.lasso_tool }
        ]
      }
    ]
  };
}
const rN = ["aria-label"], iN = { class: "pano-stage-column" }, oN = { class: "pano-stage-wrap" }, sN = {
  key: 0,
  class: "pano-stage-failed",
  role: "status"
}, aN = {
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
    const l = /* @__PURE__ */ Yt(null), c = /* @__PURE__ */ Yt(null), d = /* @__PURE__ */ Yt(null);
    function u() {
      var q, de;
      return ((de = (q = d.value) == null ? void 0 : q.getRefs) == null ? void 0 : de.call(q)) || {
        cursor: null,
        sizePreview: null,
        sizeSample: null
      };
    }
    function f(q) {
      var de, ae;
      return ((ae = (de = c.value) == null ? void 0 : de.open) == null ? void 0 : ae.call(de, q)) === !0;
    }
    function h(q) {
      i("image-file-selected", q);
    }
    function w(q) {
      i("image-file-cancelled", q);
    }
    t({ getPaintOverlayRefs: u, openImagePicker: f });
    const g = dt(() => n.readOnly === !0), m = dt(() => n.shellPreset || n0(n.type)), _ = dt(() => {
      var de, ae, ve;
      const q = String((((de = n.uiState) == null ? void 0 : de.stageStatus) === "failed" ? (ae = n.uiState) == null ? void 0 : ae.stageStatusDetail : (ve = n.uiState) == null ? void 0 : ve.stageWarningDetail) ?? "");
      return q === "background" ? "Background preview unavailable. Run the workflow to load it; nodes ComfyUI still has cached finish instantly." : q === "stickers" ? "One or more sticker previews are unavailable." : q === "frame" ? "The editor hit a rendering error. Check the browser console for details." : q === "renderer" ? "The 3D view could not start (WebGL or its script failed to load). Check the browser console for details." : q.startsWith("boot:") ? "Part of the editor failed to initialize. Check the browser console for details." : "Some image previews are unavailable. Re-run the node to refresh them.";
    }), ee = dt(() => {
      var q, de, ae;
      return ((q = n.uiState) == null ? void 0 : q.stageStatus) === "failed" || (de = n.uiState) != null && de.stageWarningDetail ? _.value : (ae = n.uiState) == null ? void 0 : ae.stageNotice;
    }), V = dt(() => {
      var de;
      const q = Array.isArray((de = m.value) == null ? void 0 : de.floatingButtons) ? m.value.floatingButtons.slice() : [];
      return g.value && q.push({
        action: "toggle-fullscreen",
        label: "Fullscreen",
        tip: "Fullscreen",
        pressed: null,
        icon: ze.fullscreen
      }), q;
    });
    function te() {
      const q = l.value;
      return q ? Array.from(q.querySelectorAll(
        "button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])"
      )).filter((de) => de instanceof HTMLElement ? !de.hidden && de.tabIndex >= 0 && de.offsetParent !== null : !1) : [];
    }
    function I() {
      var ae;
      const de = te()[0] || l.value;
      (ae = de == null ? void 0 : de.focus) == null || ae.call(de);
    }
    function X() {
      var q;
      a != null && a.isConnected && ((q = a.focus) == null || q.call(a)), a = null;
    }
    function j(q) {
      var de, ae, ve, G;
      if (!q.defaultPrevented) {
        if (q.key === "Tab") {
          const A = te();
          if (!A.length) {
            q.preventDefault(), (ae = (de = l.value) == null ? void 0 : de.focus) == null || ae.call(de);
            return;
          }
          const z = A[0], M = A[A.length - 1], H = document.activeElement;
          if (q.shiftKey) {
            (H === z || H === l.value || !((ve = l.value) != null && ve.contains(H))) && (q.preventDefault(), M.focus());
            return;
          }
          (H === M || !((G = l.value) != null && G.contains(H))) && (q.preventDefault(), z.focus());
          return;
        }
        q.key === "Escape" && i("close");
      }
    }
    function W() {
      s || (o = document.body.style.overflow, document.body.style.overflow = "hidden", s = !0);
    }
    function ie() {
      s && (document.body.style.overflow = o, s = !1);
    }
    function pe(q) {
      document.removeEventListener("keydown", j), q ? (a || (a = document.activeElement), W(), document.addEventListener("keydown", j), kl(() => {
        I();
      })) : (ie(), X());
    }
    return Pl(() => {
      pe(n.open);
    }), ks(() => {
      ie(), document.removeEventListener("keydown", j), X();
    }), Mi(() => n.open, (q) => {
      pe(q);
    }), (q, de) => e.open ? (Te(), De("div", {
      key: 0,
      class: "pano-modal-overlay",
      onClick: de[2] || (de[2] = At((ae) => i("close"), ["self"]))
    }, [
      Me("section", {
        ref_key: "modalRef",
        ref: l,
        class: "pano-modal",
        role: "dialog",
        "aria-modal": "true",
        "aria-label": e.nodeTitle,
        tabindex: "-1"
      }, [
        Me("div", iN, [
          Me("div", oN, [
            de[3] || (de[3] = Me("canvas", {
              class: "pano-stage pano-stage-bg",
              "data-stage-background": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            de[4] || (de[4] = Me("canvas", {
              class: "pano-stage pano-stage-overlay",
              "data-stage-overlay": "",
              width: "1600",
              height: "800"
            }, null, -1)),
            de[5] || (de[5] = Me("div", {
              class: "pano-stage-loading",
              "aria-hidden": "true"
            }, null, -1)),
            e.uiState.stageStatus === "failed" || e.uiState.stageStatus === "ready" && (e.uiState.stageWarningDetail || e.uiState.stageNotice) ? (Te(), De("div", sN, rt(ee.value), 1)) : mt("", !0),
            de[6] || (de[6] = Me("div", {
              class: "pano-stage-drop-hint",
              "aria-hidden": "true"
            }, [
              Me("div", { class: "pano-stage-drop-hint-text" }, "Drag and drop image here")
            ], -1)),
            Be(Xk, {
              ref_key: "paintOverlaysRef",
              ref: d
            }, null, 512),
            Be(Fg, {
              ref_key: "imageFilePickerRef",
              ref: c,
              onFileSelected: h,
              onFileCancelled: w
            }, null, 512),
            g.value ? mt("", !0) : (Te(), De(Qe, { key: 1 }, [
              Be(VP, {
                buttons: e.uiState.toolButtons || m.value.toolButtons || []
              }, null, 8, ["buttons"]),
              Be(Sk, {
                model: e.uiState.frameRail || {}
              }, null, 8, ["model"]),
              Be(qk, {
                "paint-swatches": e.paintSwatches,
                panes: m.value.paintPanes || [],
                state: e.uiState.paintDock || {}
              }, null, 8, ["paint-swatches", "panes", "state"])
            ], 64)),
            Be(JP, {
              state: e.uiState.videoTransport || {}
            }, null, 8, ["state"]),
            Be(nN, {
              buttons: e.uiState.viewButtons || m.value.viewButtons || []
            }, null, 8, ["buttons"]),
            Be(mk, {
              buttons: e.uiState.floatingButtons || V.value,
              space: e.uiState.space || null,
              "fov-value": e.uiState.fovValue || "100°",
              preview: e.uiState.cameraPreview || {},
              "preview-toggle": e.uiState.outputPreviewToggle || {}
            }, null, 8, ["buttons", "space", "fov-value", "preview", "preview-toggle"]),
            Be(iM, {
              model: e.uiState.selectionMenu || {}
            }, null, 8, ["model"]),
            Be(LP, {
              model: e.uiState.tooltip || {}
            }, null, 8, ["model"]),
            Be(Pk, {
              model: e.uiState.confirmDialog || {}
            }, null, 8, ["model"])
          ]),
          Be(DP, {
            model: e.uiState.timeline || {},
            playhead: e.playhead,
            onAction: de[0] || (de[0] = (ae) => i("timeline", ae))
          }, null, 8, ["model", "playhead"])
        ]),
        e.hideSidebar ? mt("", !0) : (Te(), Gn(aP, {
          key: 0,
          "node-title": e.nodeTitle,
          model: e.uiState.sidePanel || {},
          easing: e.uiState.easing || null,
          onTimeline: de[1] || (de[1] = (ae) => i("timeline", ae))
        }, null, 8, ["node-title", "model", "easing"]))
      ], 8, rN)
    ])) : mt("", !0);
  }
}, nr = "loading", _s = "ready", Yn = "failed";
function r0(e, t = "") {
  return e && (e.__panoLoadState = nr, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function i0(e, t = "") {
  return e && (e.__panoLoadState = _s, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function o0(e, t = "") {
  return e && (e.__panoLoadState = Yn, e.__panoLoadSource = String(t || e.currentSrc || e.src || ""), e);
}
function Pu(e, t) {
  return e ? e.__panoLoadState === Yn ? Yn : typeof t == "function" && t(e) ? _s : nr : _s;
}
function Nu(e) {
  return Pu(e) === Yn;
}
function lN({ presented: e, background: t = _s, stickers: r = [] } = {}) {
  if (!e) return { status: nr, detail: "boot" };
  const n = Array.isArray(r) ? r : [], i = t === nr, o = n.includes(nr);
  if (i && o) return { status: nr, detail: "mixed" };
  if (i) return { status: nr, detail: "background" };
  if (o) return { status: nr, detail: "stickers" };
  const s = t === Yn, a = n.includes(Yn);
  return s && a ? { status: Yn, detail: "mixed" } : s ? { status: Yn, detail: "background" } : a ? { status: Yn, detail: "stickers" } : { status: _s, detail: "" };
}
const cN = "state_json", uN = /* @__PURE__ */ new Set(["text", "search", "number", "email", "url", "tel", "password", "date", "time", "datetime-local", "month", "week"]), $d = "sticker_image_1", dN = /* @__PURE__ */ new Set(["position_x", "position_y", "position_z", "scale"]), s0 = 0.01, fN = "external_image", ho = "pano_sticker_input_images", a0 = "pano_sticker_input_videos", l0 = "pano_sticker_input_frames", c0 = "pano_sticker_input_video_meta", pN = !0, Kl = [
  { id: "green", label: "Green", color: { r: 0, g: 1, b: 0, a: 1 } },
  { id: "red", label: "Red", color: { r: 1, g: 0, b: 0, a: 1 } },
  { id: "blue", label: "Blue", color: { r: 0, g: 0, b: 1, a: 1 } },
  { id: "black", label: "Black", color: { r: 0, g: 0, b: 0, a: 1 } },
  { id: "white", label: "White", color: { r: 1, g: 1, b: 1, a: 1 } }
], _r = Math.PI / 180, Oi = 180 / Math.PI, Au = 1, u0 = "rgb(255, 221, 87)", hN = "rgb(228, 228, 231)", mN = "rgb(180, 150, 60)", gN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='black' stroke-opacity='.7' stroke-width='4' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M19 8a8 8 0 1 0 1 6M19 3v5h-5' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") 12 12, crosshair`, yN = 64, kp = 40, Ec = 16, bN = 0.45, Mp = 180, vN = 160, hl = 24, SN = 4, _N = 4;
function Oc(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function wN(e) {
  return 1 - Math.pow(1 - e, 3);
}
function xN(e, t, r) {
  const n = Ie((Number(r || 0) - e) / Math.max(t - e, 1e-6), 0, 1);
  return n * n * (3 - 2 * n);
}
function kN(e) {
  return e * e * e;
}
function Wl(e, t, r) {
  return { x: e, y: t, z: r };
}
function Pp(e, t) {
  return Wl(e.x + t.x, e.y + t.y, e.z + t.z);
}
function Np(e, t) {
  return Wl(e.x * t, e.y * t, e.z * t);
}
function Fc(e, t) {
  return e.x * t.x + e.y * t.y + e.z * t.z;
}
function MN(e) {
  const t = Math.hypot(e.x, e.y, e.z) || 1e-8;
  return Wl(e.x / t, e.y / t, e.z / t);
}
function ca(e) {
  return {
    yaw: Ht(Math.atan2(e.x, e.z) * Oi),
    pitch: Ie(Math.asin(Ie(e.y, -1, 1)) * Oi, -90, 90)
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
function Wo(e, t) {
  const r = e.x - t.x, n = e.y - t.y;
  return r * r + n * n;
}
function Tc(e, t, r) {
  const n = Number(r.x || 0) - Number(t.x || 0), i = Number(r.y || 0) - Number(t.y || 0), o = Number(e.x || 0) - Number(t.x || 0), s = Number(e.y || 0) - Number(t.y || 0), a = n * n + i * i;
  if (a <= 1e-6) return Wo(e, t);
  const l = Ie((o * n + s * i) / a, 0, 1), c = Number(t.x || 0) + n * l, d = Number(t.y || 0) + i * l, u = Number(e.x || 0) - c, f = Number(e.y || 0) - d;
  return u * u + f * f;
}
function Bn(e, t, r) {
  return e + (t - e) * r;
}
function mr(e, t = null) {
  const r = t == null ? Number((e == null ? void 0 : e.a) ?? 1) : Number(t);
  return `rgba(${Math.round(Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1) * 255)}, ${Math.round(Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1) * 255)}, ${Ie(r, 0, 1)})`;
}
function PN(e) {
  return `url("data:image/svg+xml,${encodeURIComponent(e)}")`;
}
let ua = { fillStyle: "", url: "" };
function NN(e, t, r) {
  if (ua.url && ua.fillStyle === String(e || ""))
    return ua.url;
  const n = PN(`
<svg xmlns="http://www.w3.org/2000/svg" width="${hl}" height="${hl}" viewBox="0 0 24 24" fill="none">
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${t}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" fill="${e}" stroke="${r}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`);
  return ua = { fillStyle: String(e || ""), url: n }, n;
}
function ml(e, t, r = 0.015) {
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
function AN(e) {
  return Kl.some((t) => ml(e, t.color));
}
function Cu(e, t, r) {
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
function Iu(e) {
  const t = Ie(Number((e == null ? void 0 : e.r) ?? 0), 0, 1), r = Ie(Number((e == null ? void 0 : e.g) ?? 0), 0, 1), n = Ie(Number((e == null ? void 0 : e.b) ?? 0), 0, 1), i = Math.max(t, r, n), o = Math.min(t, r, n), s = i - o;
  let a = 0;
  s > 1e-6 && (i === t ? a = ((r - n) / s + (r < n ? 6 : 0)) / 6 : i === r ? a = ((n - t) / s + 2) / 6 : a = ((t - r) / s + 4) / 6);
  const l = i <= 1e-6 ? 0 : s / i;
  return { h: a, s: l, v: i };
}
function ao(e) {
  const t = Number(e);
  return Number.isFinite(t) ? Number(t.toFixed(3)).toString() : "0";
}
function CN(e) {
  var n, i;
  const t = Array.isArray((n = e == null ? void 0 : e.paint) == null ? void 0 : n.strokes) ? e.paint.strokes.length : 0, r = Array.isArray((i = e == null ? void 0 : e.mask) == null ? void 0 : i.strokes) ? e.mask.strokes.length : 0;
  return { paintCount: t, maskCount: r };
}
function Ap(e) {
  const { paintCount: t, maskCount: r } = CN(e), n = Array.isArray(e == null ? void 0 : e.raster_objects) ? e.raster_objects : [];
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
function d0(e, t, r, n, i) {
  const o = r.bbox, s = r.transform || {}, a = Number(o.u0 || 0) * n, l = Number(o.v0 || 0) * i, c = Math.max(1, (Number(o.u1 || 0) - Number(o.u0 || 0)) * n), d = Math.max(1, (Number(o.v1 || 0) - Number(o.v0 || 0)) * i), u = a + c * 0.5 + Number(s.du || 0) * n, f = l + d * 0.5 + Number(s.dv || 0) * i, h = Number(s.rot_deg || 0) * _r, w = Math.max(0.01, Number(s.scale || 1));
  for (const g of [-n, 0, n])
    e.save(), e.translate(u + g, f), e.rotate(h), e.scale(w, w), e.drawImage(t, -c * 0.5, -d * 0.5, c, d), e.restore();
}
function Qi(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function da(e, t) {
  var r;
  return ((r = e.widgets) == null ? void 0 : r.find((n) => n.name === t)) || null;
}
function IN(e, t) {
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
function Uo(e) {
  return `${e}_${Math.random().toString(16).slice(2, 10)}`;
}
function EN(e, t = 2048) {
  if (typeof e == "number" && Number.isFinite(e)) return Math.round(e);
  const r = String(e ?? "").trim();
  if (!r) return t;
  const n = r.includes("x") ? r.split("x", 1)[0].trim() : r, i = Number(n);
  return Number.isFinite(i) ? Math.round(i) : t;
}
function ON(e) {
  const t = String(e ?? "").trim().toLowerCase();
  return t === "auto" || t === "bg" || t === "background";
}
function FN(e) {
  const t = Number((e == null ? void 0 : e.naturalWidth) || (e == null ? void 0 : e.videoWidth) || (e == null ? void 0 : e.width) || 0);
  return Number.isFinite(t) && t > 0 ? Math.round(t) : null;
}
const f0 = "pano_suite.ui_settings.v1", p0 = "pano_suite.node_grid_visibility.v1";
let Xi = null, dr = null;
function Fa(e) {
  const t = e && typeof e == "object" ? e : {};
  return {
    invert_view_x: !!t.invert_view_x,
    invert_view_y: !!t.invert_view_y
  };
}
function TN() {
  var e;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(f0)) || "").trim();
    if (!t) return Xi ? Fa(Xi) : null;
    const r = JSON.parse(t), n = Fa(r);
    return Xi = n, n;
  } catch {
    return Xi ? Fa(Xi) : null;
  }
}
function DN(e) {
  var r;
  const t = Fa(e);
  Xi = t;
  try {
    (r = window == null ? void 0 : window.localStorage) == null || r.setItem(f0, JSON.stringify(t));
  } catch {
  }
  return t;
}
function h0() {
  var e;
  if (dr && typeof dr == "object")
    return dr;
  try {
    const t = String(((e = window == null ? void 0 : window.localStorage) == null ? void 0 : e.getItem(p0)) || "").trim();
    if (!t)
      return dr = {}, dr;
    const r = JSON.parse(t);
    return dr = r && typeof r == "object" ? r : {}, dr;
  } catch {
    return dr = {}, dr;
  }
}
function LN(e, t = !0) {
  const r = String(e ?? "").trim();
  if (!r) return !!t;
  const i = h0()[r];
  return typeof i == "boolean" ? i : !!t;
}
function RN(e, t) {
  var i;
  const r = String(e ?? "").trim();
  if (!r) return;
  const n = h0();
  n[r] = !!t, dr = n;
  try {
    (i = window == null ? void 0 : window.localStorage) == null || i.setItem(p0, JSON.stringify(n));
  } catch {
  }
}
function VN(e, t) {
  const r = { ...e }, n = t.map((i) => i(Dc(e, i.name)));
  for (const { connect: i, ...o } of n) {
    for (const s of Object.keys(o))
      if (s in r) throw new Error(`Panorama editor: ${s} is provided twice`);
    Object.assign(r, o);
  }
  return n.forEach((i, o) => i.connect(Dc(r, t[o].name))), Dc(r, "showEditor");
}
function Dc(e, t) {
  return new Proxy(e, {
    get(r, n) {
      if (!(n in r)) throw new Error(`Panorama editor: ${t} takes ${String(n)}, which nothing provides`);
      return r[n];
    }
  });
}
function $N(e, t) {
  if (t == null || t.layer !== e.id) return e;
  const r = t.fps === e.timeline.fps ? t : _v(t, e), n = new Set(r.deleted), i = new Map(r.stickers.map((a) => [a.id, a]));
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
const m0 = "PANO_SCENE";
function zN(e) {
  return e.filter((t) => t && typeof t == "object" && t.state && typeof t.state == "object").map((t) => ({ sceneState: Gr(t.state), ui: t.ui && typeof t.ui == "object" ? t.ui : {} }));
}
function jN(e) {
  return !e("pano_upstream_input_images").length && !e("pano_upstream_input_videos").length ? null : {
    imageKey: "pano_upstream_input_images",
    videoKey: "pano_upstream_input_videos",
    metaKey: "pano_upstream_input_video_meta",
    coverage: Rn(e("pano_upstream_coverage")[0])
  };
}
const HN = "bg_media is not used";
function GN(e, t) {
  return e === m0 && t === null;
}
function KN(e, t, r) {
  if (!e.painting_visible) return [];
  const { groups: n, raster_objects: i } = e.painting, o = [
    ...n.map((l) => ({ kind: "group", id: l.actionGroupId, zIndex: l.z_index })),
    ...i.filter((l) => l.layerKind === "paint").map((l) => ({ kind: "raster", id: l.id, zIndex: l.z_index, item: l }))
  ], s = Math.max(-1, ...o.map((l) => l.zIndex), ...e.stickers.map((l) => l.z_index ?? 0)) + 1, a = new Set(n.map((l) => l.actionGroupId));
  for (const l of t) a.has(l) || o.push({ kind: "group", id: l, zIndex: s });
  return r && o.push({ kind: "mask", id: "mask", zIndex: s }), o;
}
function Tr(e, t) {
  return Array.isArray(e[t]) ? e[t] : [];
}
function WN(e) {
  return e.map(({ sceneState: { id: t } }, r) => t && !e.slice(r + 1).some((n) => n.sceneState.id === t) ? t : `#${r}`);
}
function UN(e, t, r) {
  const n = WN(e);
  return e.map(({ sceneState: i, ui: o }, s) => {
    const l = i.id !== null && n[s] === i.id ? t.find((h) => h.layer === i.id) ?? null : null, c = $N(i, l), { painting: d } = c, u = { ...structuredClone({ ...c, painting: null }), painting: d }, f = u.timeline.fps === r ? u : { ...Rl(u, r), painting: d };
    for (const h of f.stickers) h.origin = { layer: n[s], id: h.id };
    return { key: n[s], sceneState: f, ui: o };
  });
}
function Cp(e, t) {
  return { ...e, id: `upstream:${t}:${e.id}` };
}
function BN(e, t, r, { media: n, paintLayers: i, source: o }) {
  const { sceneState: s, ui: a } = e, l = Ns(s, r), c = (g) => g.visible ? n(g) : null, d = Bm(s, r, { media: c, zIndex: (g) => g.z_index, paintLayers: i, evaluated: l }).map((g) => Cp(g, t)), u = Xm(s, r, s.stickers, { media: c, evaluated: l }).map((g) => Cp(g, t)), f = [], h = nl(Tr(a, "pano_scene_files"), Tr(a, "pano_scene_meta"), o);
  h && f.push({ slot: `${t}:scene`, urls: h.urls.filter(Boolean), request: yd(h, l.scene), value: l.scene, opacity: 1 });
  const w = nl(Tr(a, "pano_sticker_files"), Tr(a, "pano_sticker_meta"), o);
  if (w) {
    const g = $m(w, s, l);
    f.push({ slot: `${t}:sticker`, urls: zm(w, s), request: g, value: (g == null ? void 0 : g.value) ?? null, opacity: (g == null ? void 0 : g.opacity) ?? 1 });
  }
  return { evaluated: l, sky: d, stickers: u, items: f };
}
const ei = /* @__PURE__ */ new Map(), YN = 12;
function qN(e) {
  const t = String(e || "").trim();
  if (!t) return null;
  const r = ei.get(t);
  return !r || !Array.isArray(r.thumbnails) || !r.thumbnails.length ? null : (ei.delete(t), ei.set(t, r), r);
}
function XN(e, t) {
  const r = String(e || "").trim();
  if (!r) return;
  const n = Array.isArray(t == null ? void 0 : t.thumbnails) ? t.thumbnails : [];
  if (n.length)
    for (ei.delete(r), ei.set(r, {
      thumbnails: n,
      thumbnailCount: Math.max(1, Number(t == null ? void 0 : t.thumbnailCount)),
      duration: Math.max(0, Number((t == null ? void 0 : t.duration) || 0)),
      fps: Math.max(1, Number((t == null ? void 0 : t.fps) || 24))
    }); ei.size > YN; ) {
      const i = ei.keys().next().value;
      if (!i) break;
      ei.delete(i);
    }
}
function JN(e) {
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
    readOnly: h,
    runtime: w,
    scheduler: g,
    stageWrap: m,
    state: _,
    stateV2: ee,
    stillCanvas: V,
    studio: te,
    timelinePlayhead: I,
    type: X,
    uiState: j,
    videoEl: W
  } = e;
  let ie, pe, q, de, ae, ve;
  const G = {
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
  }, A = 9, z = [];
  let M = 0;
  const H = () => {
    var $e, He;
    const D = ($e = m == null ? void 0 : m.getBoundingClientRect) == null ? void 0 : $e.call(m), re = (He = i == null ? void 0 : i.getBoundingClientRect) == null ? void 0 : He.call(i), Ne = Math.max(0, Number((D == null ? void 0 : D.width) || 0)), xe = re ? Math.max(0, Number(re.width || 0)) : 0, Le = xe > 0 ? xe + 14 + 12 : 72, je = Math.max(280, Math.floor(Ne - Le * 2)), Ke = r.fullscreen ? Math.min(1200, je) : je;
    j.videoTransport.shellMaxWidthPx = Ke;
  }, T = () => {
    M || (M = g.requestFrame(() => {
      M = 0, H();
    }));
  }, K = (D) => {
    if (!(D instanceof HTMLVideoElement)) return !1;
    try {
      if (Array.isArray(D.audioTracks) && D.audioTracks.length > 0 || D.audioTracks && typeof D.audioTracks.length == "number" && D.audioTracks.length > 0) return !0;
    } catch {
    }
    try {
      if (typeof D.mozHasAudio == "boolean") return D.mozHasAudio;
    } catch {
    }
    try {
      if (Number(D.webkitAudioDecodedByteCount || 0) > 0) return !0;
    } catch {
    }
    return !!j.videoTransport.hasAudio;
  }, fe = typeof ResizeObserver < "u" ? new ResizeObserver(() => T()) : null;
  fe == null || fe.observe(m), i && (fe == null || fe.observe(i)), z.push(() => {
    var D;
    M && (g.cancelFrame(M), M = 0), (D = fe == null ? void 0 : fe.disconnect) == null || D.call(fe);
  }), T();
  const se = () => {
    G.thumbnailJobId += 1, G.thumbnailSrc = "", j.videoTransport.thumbnails = [], j.videoTransport.thumbnailCount = A;
  }, Y = async (D, re, Ne) => {
    const xe = String(D || "").trim();
    if (!xe) {
      se();
      return;
    }
    const Pe = qN(xe);
    if (Pe) {
      G.thumbnailSrc = xe, j.videoTransport.thumbnails = Pe.thumbnails, j.videoTransport.thumbnailCount = Pe.thumbnailCount;
      return;
    }
    const Ce = ++G.thumbnailJobId;
    G.thumbnailSrc = xe, j.videoTransport.thumbnails = [], j.videoTransport.thumbnailCount = A;
    const Le = Ps(document, "editor.thumbnails");
    Le.preload = "auto", Le.muted = !0, Le.playsInline = !0, Le.crossOrigin = "anonymous";
    const je = rn({ label: "editor.thumbnail" });
    try {
      const Ke = await new Promise((We) => {
        let ht = !1;
        const bt = (Tt) => {
          ht || (ht = !0, We(Tt));
        };
        Le.addEventListener("loadedmetadata", () => bt(!0), { once: !0 }), Le.addEventListener("canplay", () => bt(!0), { once: !0 }), Le.addEventListener("error", () => bt(!1), { once: !0 }), Le.src = xe, Le.load();
      });
      if (G.thumbnailJobId !== Ce) return;
      const $e = Number(Le.videoWidth || 0), He = Number(Le.videoHeight || 0);
      if (!Ke || $e < 1 || He < 1) {
        G.thumbnailFailedSrcs.add(xe);
        return;
      }
      const oe = Math.max(0, Number(Le.duration || re || 0)), Fe = 46, Ae = Math.max(72, Math.round($e / He * Fe));
      je.width = Ae, je.height = Fe;
      const Re = je.getContext("2d");
      if (!Re) return;
      const Ye = [], Ge = (We) => new Promise((ht) => {
        let bt = !1;
        const Tt = () => {
          bt || (bt = !0, ht());
        };
        Le.addEventListener("seeked", Tt, { once: !0 }), Le.addEventListener("error", Tt, { once: !0 });
        try {
          Le.currentTime = We;
        } catch {
          Tt();
        }
      });
      for (let We = 0; We < A; We += 1) {
        if (G.thumbnailJobId !== Ce) return;
        const ht = A <= 1 ? 0 : We / (A - 1), bt = oe > 0 ? Math.max(0, Math.min(oe - Math.max(1e-3, 0.5 / Math.max(1, Number(Ne || 24))), oe * ht)) : 0;
        if (await Ge(bt), G.thumbnailJobId !== Ce) return;
        Re.clearRect(0, 0, Ae, Fe), Re.drawImage(Le, 0, 0, Ae, Fe), Ye.push({
          id: `thumb-${We}`,
          src: je.toDataURL("image/jpeg", 0.72),
          time: bt,
          label: y(bt)
        });
      }
      if (G.thumbnailJobId !== Ce) return;
      j.videoTransport.thumbnails = Ye, j.videoTransport.thumbnailCount = Ye.length || A, XN(xe, {
        thumbnails: Ye,
        thumbnailCount: Ye.length || A,
        duration: oe,
        fps: Ne
      });
    } finally {
      Le.removeAttribute("src"), Le.load(), us(je);
    }
  };
  z.push(() => {
    se();
  });
  const k = xg({
    video: W instanceof HTMLVideoElement ? W : null,
    clock: {
      now: () => performance.now(),
      requestFrame: (D) => g.requestFrame(D),
      cancelFrame: (D) => g.cancelFrame(D)
    },
    fps: E,
    span: () => {
      if (ee) return ve();
      const D = Math.round(Number(j.videoTransport.duration || 0) * E());
      return W.loop || !(D > 0) ? 1 / 0 : D;
    },
    loop: () => ee,
    onFrame: (D) => {
      ee ? q(D) : v(), pe({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    },
    onCapture: () => {
      O() && (w.backgroundDirty = !0);
    },
    onChange: () => {
      v(), I.playing.value = k.playing, ae(), pe({ cause: "frame_view", localOnly: !0, reason: ft.PLAYHEAD });
    }
  });
  z.push(() => k.dispose());
  const ne = ee && f instanceof HTMLVideoElement ? Nd({
    video: f,
    onCapture: () => {
      var Ne;
      const D = Number(f.videoWidth || 0), re = Number(f.videoHeight || 0);
      D < 1 || re < 1 || (u.width = D, u.height = re, (Ne = u.getContext("2d")) == null || Ne.drawImage(f, 0, 0), u.__panoFrameIdx += 1, pe({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA }));
    },
    onChange: () => pe({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  ne && z.push(() => ne.dispose());
  const ue = ee ? xd({
    createImage: (D, re) => {
      const Ne = new Image();
      return Ne.onload = re, Ne.onerror = re, Ne.src = D, Ne;
    },
    onLoad: () => pe({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA })
  }) : null;
  if (W instanceof HTMLVideoElement) {
    const D = () => {
      R(), pe({ cause: "frame_view", localOnly: !0 });
    }, re = () => {
      v({
        hasAudio: j.videoTransport.hasAudio,
        muted: W.muted,
        volume: Number(W.volume ?? j.videoTransport.volume ?? 1)
      });
    }, Ne = () => {
      const xe = W.dataset.panoSrc;
      xe && (G.failedSrcs.add(xe), R(), pe());
    };
    for (const [xe, Pe] of [
      ["loadedmetadata", D],
      ["loadeddata", D],
      ["canplay", D],
      ["volumechange", re],
      ["error", Ne]
    ])
      W.addEventListener(xe, Pe), z.push(() => W.removeEventListener(xe, Pe));
  }
  function _e(D) {
    return t.uiList(d, D);
  }
  function we(D) {
    return t.uiValue(d, D);
  }
  function C() {
    const D = String((d == null ? void 0 : d.comfyClass) || (d == null ? void 0 : d.type) || (d == null ? void 0 : d.title) || "");
    if (Ua(D))
      return { videoKey: "pano_videos", metaKey: "pano_video_meta" };
    const re = p();
    return re ? { videoKey: re.videoKey, metaKey: re.metaKey } : X === "stickers" || X === "cutout" ? { videoKey: "pano_input_videos", metaKey: "pano_input_video_meta" } : { videoKey: "pano_videos", metaKey: "pano_video_meta" };
  }
  function le() {
    const { metaKey: D } = C(), re = we(D);
    return Array.isArray(re) && re.length > 0 && re[0] && typeof re[0] == "object" ? re[0] : re && typeof re == "object" ? re : null;
  }
  function b(D) {
    return D ? D instanceof HTMLVideoElement ? [
      String(D.currentSrc || D.src || ""),
      Number(D.videoWidth || 0),
      Number(D.videoHeight || 0)
    ].join("|") : D instanceof HTMLCanvasElement ? [
      "canvas",
      Number(D.width || 0),
      Number(D.height || 0),
      String(D.__panoFrameIdx || 0)
    ].join("|") : [
      String(D.currentSrc || D.src || ""),
      Number(D.naturalWidth || D.width || 0),
      Number(D.naturalHeight || D.height || 0)
    ].join("|") : "none";
  }
  function y(D) {
    const re = Math.max(0, Math.floor(Number(D || 0))), Ne = Math.floor(re / 60), xe = re % 60;
    return `${Ne}:${String(xe).padStart(2, "0")}`;
  }
  function E() {
    return ee ? _.timeline.fps : G.metaFps || 1e3;
  }
  function v(D = {}) {
    const re = Number(D.duration ?? j.videoTransport.duration ?? 0), Ne = Math.max(1, Number(D.fps ?? j.videoTransport.fps ?? 24)), xe = k.frame / E(), Pe = Object.prototype.hasOwnProperty.call(D, "ready") ? !!D.ready : !!j.videoTransport.ready, Ce = k.playing, Le = Object.prototype.hasOwnProperty.call(D, "visible") ? !!D.visible : !!j.videoTransport.visible, je = Object.prototype.hasOwnProperty.call(D, "muted") ? !!D.muted : !!(W instanceof HTMLVideoElement ? W.muted : j.videoTransport.muted), Ke = Number(
      Object.prototype.hasOwnProperty.call(D, "volume") ? D.volume : W instanceof HTMLVideoElement ? W.volume : j.videoTransport.volume
    ), $e = Object.prototype.hasOwnProperty.call(D, "hasAudio") ? !!D.hasAudio : K(W), He = Object.prototype.hasOwnProperty.call(D, "loop") ? !!D.loop : !!j.videoTransport.loop;
    Object.assign(j.videoTransport, {
      ready: Pe,
      playing: Ce,
      visible: Le,
      loop: He,
      currentTime: Number.isFinite(xe) ? xe : 0,
      duration: Number.isFinite(re) ? re : 0,
      progressPct: re > 1e-6 ? Math.max(0, Math.min(100, xe / re * 100)) : 0,
      currentTimeLabel: y(xe),
      durationLabel: y(re),
      frameCount: Math.max(0, Number(D.frameCount ?? j.videoTransport.frameCount ?? 0)),
      fps: Ne,
      hasAudio: $e,
      muted: je,
      volume: Math.max(0, Math.min(1, Number.isFinite(Ke) ? Ke : 1)),
      volumePct: Math.round(Math.max(0, Math.min(1, Number.isFinite(Ke) ? Ke : 1)) * 100),
      thumbnails: Array.isArray(D.thumbnails) ? D.thumbnails : j.videoTransport.thumbnails,
      thumbnailCount: Math.max(1, Number(D.thumbnailCount ?? j.videoTransport.thumbnailCount ?? A))
    });
  }
  function $() {
    return !!(W instanceof HTMLVideoElement && !ee && W.getAttribute("src") && r.primaryTool !== "paint" && r.primaryTool !== "mask");
  }
  function L() {
    if (!(W instanceof HTMLVideoElement) || !j.videoTransport.hasAudio) return;
    const D = !W.muted;
    W.muted = D, !D && Number(W.volume || 0) <= 0 && (W.volume = Math.max(0.01, Number(j.videoTransport.volume || 1))), v({
      hasAudio: j.videoTransport.hasAudio,
      muted: W.muted,
      volume: Number(W.volume ?? j.videoTransport.volume ?? 1)
    });
  }
  function J() {
    v({
      visible: $()
    });
  }
  function O() {
    if (!(W instanceof HTMLVideoElement) || Number(W.videoWidth || 0) < 1 || Number(W.videoHeight || 0) < 1) return !1;
    const D = Number(W.videoWidth || 0), re = Number(W.videoHeight || 0);
    (V.width !== D || V.height !== re) && (V.width = D, V.height = re);
    const Ne = V.getContext("2d");
    return Ne ? (Ne.clearRect(0, 0, D, re), Ne.drawImage(W, 0, 0, D, re), V.__panoFrameIdx = Number(V.__panoFrameIdx || 0) + 1, !0) : !1;
  }
  function F() {
    return !k.showsVideo && Number(V.width || 0) > 0 && Number(V.height || 0) > 0 && Number(V.__panoFrameIdx || 0) > 0 ? V : W instanceof HTMLVideoElement && Number(W.videoWidth || 0) > 0 && Number(W.videoHeight || 0) > 0 && Number(W.readyState || 0) >= 2 ? W : null;
  }
  function x() {
    V.__panoFrameIdx = 0, w.backgroundDirty = !0;
  }
  function R() {
    if (!(W instanceof HTMLVideoElement)) return null;
    const { videoKey: D } = C(), re = (p() || Qt(d, "background")) && _e(D)[0] || null, Ne = l(re), xe = [Ne, t.linkedVideoFile(d, S())].filter(Boolean), Pe = xe.find((oe) => !G.failedSrcs.has(oe)) || "";
    G.videoFailed = !Pe && xe.length > 0;
    const Ce = Pe && Pe === Ne ? le() : null;
    G.metaFps = Number(Ce == null ? void 0 : Ce.fps) > 0 ? Number(Ce.fps) : 0;
    const Le = Math.max(1, Number((Ce == null ? void 0 : Ce.fps) || (ee ? _.timeline.fps : 24))), je = W.dataset.panoSrc === Pe && Number.isFinite(W.duration) ? W.duration : 0, Ke = Number((Ce == null ? void 0 : Ce.duration) || ((Ce == null ? void 0 : Ce.frames) > 0 ? Ce.frames / Le : je)), $e = Math.max(0, Number((Ce == null ? void 0 : Ce.frames) || Math.round(Ke * Le))), He = !!(Ce != null && Ce.has_audio) || K(W);
    return Pe && W.dataset.panoSrc !== Pe ? (W.pause(), x(), W.dataset.panoSrc = Pe, W.loop = !ee && !!j.videoTransport.loop, W.muted = !!j.videoTransport.muted, W.volume = Math.max(0, Math.min(1, Number(j.videoTransport.volume ?? 1))), W.src = Pe, W.load(), k.setSource(!0), ee || k.seek(0)) : !Pe && W.getAttribute("src") && (W.pause(), W.removeAttribute("src"), delete W.dataset.panoSrc, W.load(), x(), se(), k.setSource(!1)), ee || (W.loop = !!j.videoTransport.loop), Pe && !ee && G.thumbnailSrc !== Pe && !G.thumbnailFailedSrcs.has(Pe) && Y(Pe, Ke, Le), Pe || se(), v({
      ready: !!Pe,
      visible: !!Pe && $(),
      duration: Ke,
      frameCount: $e,
      fps: Le,
      hasAudio: He,
      loop: !!W.loop,
      muted: !!W.muted,
      volume: Number(W.volume ?? j.videoTransport.volume ?? 1),
      thumbnailCount: j.videoTransport.thumbnailCount
    }), Pe || null;
  }
  function Z(D, re = null) {
    return c(d, D, o, re || (() => pe()));
  }
  function he(D = null) {
    return Qt(d, "external-sticker") ? Z(ho, D) : null;
  }
  function ce() {
    if (!Qt(d, "external-sticker")) return null;
    const D = _e(c0)[0];
    if (!D || typeof D != "object") return null;
    const re = _e(l0).map(l).filter(Boolean);
    if (re.length) return { frames: re, meta: D };
    const Ne = l(_e(a0)[0] || null);
    return Ne ? { src: Ne, meta: D } : null;
  }
  function be() {
    const D = _.stickers.find(ie), re = D ? ce() : null, Ne = re ? _d(D.clip, r.frame, _.timeline.fps, re.meta) : null;
    ne.follow({ src: (re == null ? void 0 : re.src) || "", time: Ne, playing: k.advancing, fps: _.timeline.fps });
    const xe = D ? Q(D) : null, Pe = re != null && re.frames ? ue.picture(re.frames, Ne, re.meta, xe) : ne.picture(u, xe);
    return Pe ? { media: Pe, revision: b(Pe), source: wd(re, xe) } : null;
  }
  function Se() {
    return !ee || !Qt(d, "scene") ? null : nl(_e("pano_scene_files"), _e("pano_scene_meta"), l);
  }
  function ye() {
    return !ee || !Qt(d, "external-sticker") ? null : nl(_e("pano_sticker_files"), _e("pano_sticker_meta"), l);
  }
  function Q(D) {
    var Le;
    if (D && typeof D == "object" && (ie(D) || D.external === !0))
      return he(() => {
        ti(d, "image-loaded");
      });
    const re = ee ? me(D) : String(D && typeof D == "object" ? D.asset_id || D.assetId || "" : D || "");
    if (!re) return null;
    const Ne = o.get(re);
    if (Ne) return Ne;
    const xe = ee ? tl(D.source) : (Le = _.assets) == null ? void 0 : Le[re], Pe = a(xe);
    if (!Pe) return null;
    const Ce = new Image();
    return r0(Ce, Pe), Ce.onload = () => {
      i0(Ce, Pe), pe();
    }, Ce.onerror = () => {
      o0(Ce, Pe), pe();
    }, Ce.src = Pe, o.set(re, Ce), Ce;
  }
  function me(D) {
    const { source: re } = D;
    return re.filename ? `file:${re.storage}:${re.subfolder}:${re.filename}` : `sticker:${D.id}`;
  }
  function B() {
    if (X === "cutout") {
      const Ce = F();
      if (Ce) return Ce;
      const Le = s(
        d,
        ["erp_image", "bg_erp"],
        () => pe(),
        "background:cutout:erp_image|bg_erp"
      );
      return Le && !Nu(Le) ? Le : c(d, "pano_input_images", o, () => pe()) || Le || null;
    }
    const D = F();
    if (D) return D;
    const re = p(), Ne = re || Qt(d, "background") ? c(d, (re == null ? void 0 : re.imageKey) ?? "pano_input_images", o, () => pe()) : null;
    if (Ne && !Nu(Ne)) return Ne;
    if (W instanceof HTMLVideoElement && W.dataset.panoSrc) return W;
    if (re) return Ne;
    const xe = S();
    return s(d, xe, () => pe(), `background:${xe.join("|")}`) || Ne || null;
  }
  function p() {
    return !te || !Qt(d, "scene") ? null : jN(_e);
  }
  function N() {
    var D;
    return ((D = p()) == null ? void 0 : D.coverage) ?? Rn(_.coverage);
  }
  function S() {
    if (p()) return [];
    if (X === "cutout") return ["erp_image", "bg_erp"];
    const D = Array.isArray(d == null ? void 0 : d.inputs) ? d.inputs.map((xe) => String((xe == null ? void 0 : xe.name) || "")) : [], re = D.includes("erp_image"), Ne = D.includes("bg_erp");
    return h && (re || Ne) ? re ? ["erp_image", "bg_erp"] : ["bg_erp", "erp_image"] : X === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
  }
  function P(D) {
    return D ? D instanceof HTMLImageElement ? !!D.complete && Number(D.naturalWidth || D.width || 0) > 0 && Number(D.naturalHeight || D.height || 0) > 0 : D instanceof HTMLVideoElement ? Number(D.videoWidth || 0) > 0 && Number(D.videoHeight || 0) > 0 && Number(D.readyState || 0) >= 2 : Number(D.width || D.naturalWidth || 0) > 0 && Number(D.height || D.naturalHeight || 0) > 0 : !1;
  }
  function U() {
    if (n.failed) return { status: Yn, detail: "renderer" };
    if (!n.ready) return { status: nr, detail: "boot" };
    const D = B(), re = G.videoFailed ? Yn : Pu(D, P), Ne = [];
    for (const xe of de()) {
      if ((xe == null ? void 0 : xe.visible) === !1) continue;
      const Pe = Q(xe);
      Ne.push(Pu(Pe, P));
    }
    return lN({
      presented: w.hasPresentedFrame,
      background: re,
      stickers: Ne
    });
  }
  function ge() {
    W instanceof HTMLVideoElement && W.pause(), z.forEach((D) => {
      try {
        D();
      } catch {
      }
    });
  }
  return {
    connect(D) {
      ({
        isExternalSticker: ie,
        requestDraw: pe,
        setTimelineFrame: q,
        skyStickers: de,
        syncTimeline: ae,
        timelineSpanFrames: ve
      } = D);
    },
    videoState: G,
    queueVideoTransportLayout: T,
    playback: k,
    portVideo: ne,
    getNodeUiValue: we,
    getMediaRevisionToken: b,
    playbackFps: E,
    syncVideoTransportState: v,
    toggleVideoMuted: L,
    syncVideoTransportVisibility: J,
    refreshModalVideoSource: R,
    getStickerUiImage: Z,
    getExternalStickerPreviewImage: he,
    getPortMedia: ce,
    followPortSticker: be,
    getStickerImage: Q,
    stickerImageKey: me,
    getConnectedErpImage: B,
    backgroundCoverage: N,
    upstreamBackground: p,
    isDecodedImageReady: P,
    getStageImageStatus: U,
    sceneFiles: Se,
    stickerFiles: ye,
    disposeMediaSession: ge
  };
}
function ZN(e = 80, t = null, r = 8) {
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
      const c = n.length, d = Math.max(0, c - s), u = i >= 0 ? Math.max(0, Math.min(i, d)) : d, f = n.slice(u, u + s), h = i < 0 ? -1 : Math.max(-1, Math.min(f.length - 1, i - u));
      return {
        version: 1,
        entries: f,
        index: h
      };
    },
    hydrate: a
  };
}
const QN = 80;
function g0(e) {
  return JSON.stringify(Kv(e));
}
function e2(e) {
  return ZN(QN, { entries: [g0(e)], index: 0 });
}
function y0(e, t) {
  var r, n;
  return (e === "stickers" ? (r = t.active) == null ? void 0 : r.selected_sticker_id : (n = t.active) == null ? void 0 : n.selected_shot_id) ?? null;
}
function t2(e) {
  const {
    editor: t,
    readOnly: r,
    runtime: n,
    state: i,
    stateV2: o,
    studio: s,
    type: a
  } = e;
  let l, c, d, u, f, h, w, g, m, _, ee, V, te, I, X;
  function j() {
    r || (V(), !(o && i.stickers.some(u)) && (t.historyController.commitActionGroup(g0(i)), I()));
  }
  function W(pe) {
    var ve, G;
    if (r) return;
    ee();
    const q = pe < 0 ? t.historyController.undo() : t.historyController.redo();
    if (I(), !q) return;
    const de = Wv(i, q), ae = (ve = i.timeline) == null ? void 0 : ve.fps;
    Object.keys(i).forEach((A) => delete i[A]), Object.assign(i, de.state), V(!1), o && g(), o && i.timeline.fps !== ae && w.seek(Math.round(t.frame * i.timeline.fps / ae)), t.selectedId = y0(a, i), s && !t.selectedId && i.active.selected_shot_id && (t.selectedId = ((G = d()) == null ? void 0 : G.id) ?? null), t.selectedIds = t.selectedId ? [t.selectedId] : [], t.selectedId && l(), m(), n.backgroundDirty = !0, de.paintingChanged ? h() : f(), te(), X(), c(), _({ cause: "cutout_frame" });
  }
  function ie() {
    var de, ae;
    const pe = Array.isArray((de = t.historyController) == null ? void 0 : de.entries) ? t.historyController.entries : [], q = Number((ae = t.historyController) == null ? void 0 : ae.index);
    return {
      canUndo: !r && pe.length > 1 && q > 0,
      canRedo: !r && pe.length > 1 && q >= 0 && q < pe.length - 1
    };
  }
  return {
    connect(pe) {
      ({
        clearWorldSelection: l,
        commitState: c,
        getActiveCutoutShot: d,
        isUploadingSticker: u,
        markObjectVisualsDirty: f,
        markPaintStrokeVisualsDirty: h,
        playback: w,
        rebuildUpstreamWorking: g,
        releaseHiddenSelection: m,
        requestDraw: _,
        stopTimelinePlayback: ee,
        syncCutoutShot: V,
        syncPaintUi: te,
        syncUndoRedoButtons: I,
        updateSidePanel: X
      } = pe);
    },
    pushHistory: j,
    restoreHistory: W,
    getHistoryCapabilities: ie
  };
}
function n2(e) {
  const {
    canvas: t,
    editor: r,
    sceneV2: n,
    state: i,
    stateV2: o,
    type: s
  } = e;
  let a, l, c, d, u, f, h, w;
  function g() {
    return s === "stickers" ? m() : i.shots;
  }
  function m() {
    return n ? i.stickers.filter((p) => p.placement === "sky") : i.stickers;
  }
  function _(p) {
    return n && ne(p);
  }
  function ee(p) {
    return p.source.kind === "file" && !p.source.filename && !p.source.data_url;
  }
  function V(p) {
    if (!_(p)) return p;
    const N = Z(p) ? h(p) : null;
    return ud(p, r.frame, N && { width: N.naturalWidth || N.width, height: N.naturalHeight || N.height });
  }
  function te(p, N) {
    _(p) ? Nm(p, r.frame, N) : Object.assign(p, N);
  }
  function I() {
    const p = i.painting || (i.painting = bo(null));
    return Array.isArray(p.groups) || (p.groups = []), p.groups;
  }
  function X(p = "paint") {
    var U, ge;
    const N = Array.isArray((ge = (U = i.painting) == null ? void 0 : U[p]) == null ? void 0 : ge.strokes) ? i.painting[p].strokes : [], S = [], P = /* @__PURE__ */ new Set();
    for (const D of N) {
      const re = String((D == null ? void 0 : D.actionGroupId) || "").trim();
      !re || P.has(re) || (P.add(re), S.push(re));
    }
    return S;
  }
  function j() {
    return X("paint");
  }
  function W(p, N) {
    const S = String(N || "").trim();
    return S ? `${p === "mask" ? "mask" : "paint"}:${S}` : "";
  }
  function ie(p) {
    const N = String(p || "").trim();
    return N ? `raster:${N}` : "";
  }
  function pe(p) {
    const N = String(p || "").trim();
    if (!N) return "";
    const S = N.match(/^raster:(.*)$/);
    return String(S ? S[1] || "" : N).trim();
  }
  function q(p, N = null) {
    const S = String(p || "").trim();
    if (!S) return { layerKind: "paint", actionGroupId: "" };
    const P = S.match(/^(paint|mask):(.*)$/);
    return P ? { layerKind: P[1] === "mask" ? "mask" : "paint", actionGroupId: String(P[2] || "").trim() } : { layerKind: N === "mask" ? "mask" : "paint", actionGroupId: S };
  }
  function de() {
    var N;
    let p = -1;
    for (const S of m())
      p = Math.max(p, Number((S == null ? void 0 : S.z_index) || 0));
    for (const S of I())
      p = Math.max(p, Number((S == null ? void 0 : S.z_index) || 0));
    for (const S of Array.isArray((N = i.painting) == null ? void 0 : N.raster_objects) ? i.painting.raster_objects : [])
      String((S == null ? void 0 : S.layerKind) || "paint") === "paint" && (p = Math.max(p, Number((S == null ? void 0 : S.z_index) || 0)));
    return p + 1;
  }
  function ae(p, N = null) {
    const S = String(p || "").trim();
    if (!S) return null;
    const P = I();
    let U = P.find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || "") === S);
    return U ? N != null && (U.z_index = Math.max(0, Number(N || 0))) : (U = {
      id: S,
      type: "strokeGroup",
      actionGroupId: S,
      z_index: N == null ? de() : Math.max(0, Number(N || 0)),
      locked: !1,
      frame: null
    }, P.push(U)), U;
  }
  function ve(p) {
    if (!(p != null && p.centerUv)) return [];
    const N = Number(p.centerUv.u || 0), S = Number(p.centerUv.v || 0), P = Number(p.halfW || 0), U = Number(p.halfH || 0);
    return [
      {
        u: ((N - P) % 1 + 1) % 1,
        v: Ie(S - U, 0, 1)
      },
      {
        u: ((N + P) % 1 + 1) % 1,
        v: Ie(S - U, 0, 1)
      },
      {
        u: ((N + P) % 1 + 1) % 1,
        v: Ie(S + U, 0, 1)
      },
      {
        u: ((N - P) % 1 + 1) % 1,
        v: Ie(S + U, 0, 1)
      }
    ];
  }
  function G() {
    const p = new Set(j()), S = I().filter((P) => p.has(String((P == null ? void 0 : P.actionGroupId) || "")));
    return p.forEach((P) => {
      S.some((U) => String((U == null ? void 0 : U.actionGroupId) || "") === P) || S.push({
        id: P,
        type: "strokeGroup",
        actionGroupId: P,
        z_index: de(),
        locked: !1,
        frame: null
      });
    }), S.sort((P, U) => Number((P == null ? void 0 : P.z_index) || 0) - Number((U == null ? void 0 : U.z_index) || 0)), i.painting.groups = S, S;
  }
  function A(p, N, S) {
    var $e;
    const P = (He) => (Number(He || 0) % 1 + 1) % 1, U = [];
    for (const He of S) {
      const oe = He == null ? void 0 : He.geometry, Fe = (oe == null ? void 0 : oe.geometryKind) === "lasso_fill" ? oe == null ? void 0 : oe.points : (oe == null ? void 0 : oe.processedPoints) || (oe == null ? void 0 : oe.rawPoints) || (oe == null ? void 0 : oe.points) || [];
      Array.isArray(Fe) && U.push(...Fe);
    }
    if (!U.length) return null;
    const ge = P((($e = U[0]) == null ? void 0 : $e.u) || 0);
    let D = 0, re = 0;
    U.forEach((He) => {
      const oe = P((He == null ? void 0 : He.u) || 0);
      D += ge + v(oe, ge), re += Number((He == null ? void 0 : He.v) || 0);
    });
    const Ne = (D / U.length % 1 + 1) % 1;
    let xe = 1 / 0, Pe = -1 / 0, Ce = 1 / 0, Le = -1 / 0;
    U.forEach((He) => {
      const oe = P((He == null ? void 0 : He.u) || 0), Fe = v(oe, Ne);
      xe = Math.min(xe, Fe), Pe = Math.max(Pe, Fe);
      const Ae = Number((He == null ? void 0 : He.v) || 0);
      Ce = Math.min(Ce, Ae), Le = Math.max(Le, Ae);
    });
    const je = S.reduce((He, oe) => {
      const Fe = l(String((oe == null ? void 0 : oe.toolKind) || "pen")), Ae = Tn[Fe] || Tn[Er], Re = Math.max(1, Number((oe == null ? void 0 : oe.size) || 10)) * Math.max(0.1, Number((Ae == null ? void 0 : Ae.sizeScale) ?? 1));
      return Math.max(He, Re);
    }, 0), Ke = Math.max(35e-4, je / 2048);
    return {
      centerUv: { u: ((Ne + (xe + Pe) * 0.5) % 1 + 1) % 1, v: Ie((Ce + Le) * 0.5, 0, 1) },
      rot_deg: 0,
      halfW: (Pe - xe) * 0.5 + Ke,
      halfH: (Le - Ce) * 0.5 + Ke,
      uvPad: Ke
    };
  }
  function z(p, N, S) {
    const P = String(p || "").trim();
    if (!P) return null;
    const U = I().find((D) => String((D == null ? void 0 : D.actionGroupId) || "") === P);
    if (!U) return null;
    const ge = S || b(P, N);
    return U.frame = A(P, N, ge), U.frame;
  }
  function M() {
    var P;
    const p = m().map((U) => ({
      type: "sticker",
      id: String((U == null ? void 0 : U.id) || ""),
      z_index: Number((U == null ? void 0 : U.z_index) || 0),
      item: U
    })), N = G().map((U) => ({
      type: "strokeGroup",
      id: String((U == null ? void 0 : U.id) || (U == null ? void 0 : U.actionGroupId) || ""),
      actionGroupId: String((U == null ? void 0 : U.actionGroupId) || ""),
      z_index: Number((U == null ? void 0 : U.z_index) || 0),
      item: U
    })), S = (Array.isArray((P = i.painting) == null ? void 0 : P.raster_objects) ? i.painting.raster_objects : []).filter((U) => String((U == null ? void 0 : U.layerKind) || "paint") === "paint").map((U) => ({
      type: "rasterObject",
      id: String((U == null ? void 0 : U.id) || ""),
      z_index: Number((U == null ? void 0 : U.z_index) || 0),
      item: U
    }));
    return [...p, ...N, ...S].sort((U, ge) => Number(U.z_index || 0) - Number(ge.z_index || 0));
  }
  function H(p = !0) {
    var S, P, U, ge, D, re;
    const N = M().filter((Ne) => Ne.type === "strokeGroup").map((Ne) => String(Ne.actionGroupId || "")).filter((Ne) => !!Ne);
    if (p) {
      const Ne = String(((P = (S = r.interaction) == null ? void 0 : S.stroke) == null ? void 0 : P.actionGroupId) || "").trim(), xe = String(((ge = (U = r.interaction) == null ? void 0 : U.stroke) == null ? void 0 : ge.layerKind) || "").trim(), Pe = String(((re = (D = r.interaction) == null ? void 0 : D.stroke) == null ? void 0 : re.toolKind) || "").trim();
      Ne && xe === "paint" && Pe !== "eraser" && !N.includes(Ne) && N.push(Ne);
    }
    return N;
  }
  function T(p = !0) {
    var re, Ne, xe, Pe, Ce, Le;
    const N = M();
    if (!p) return N;
    const S = String(((Ne = (re = r.interaction) == null ? void 0 : re.stroke) == null ? void 0 : Ne.actionGroupId) || "").trim(), P = String(((Pe = (xe = r.interaction) == null ? void 0 : xe.stroke) == null ? void 0 : Pe.layerKind) || "").trim(), U = String(((Le = (Ce = r.interaction) == null ? void 0 : Ce.stroke) == null ? void 0 : Le.toolKind) || "").trim();
    if (!S || P !== "paint" || U === "eraser" || N.some((je) => je.type === "strokeGroup" && String(je.actionGroupId || "") === S))
      return N;
    const ge = f();
    let D = N.reduce((je, Ke) => Math.max(je, Number((Ke == null ? void 0 : Ke.z_index) || 0)), -1) + 1;
    return ge && le(ge) && String(ge.actionGroupId || "") === S && (D = Number(ge.z_index || 0)), [
      ...N,
      {
        type: "strokeGroup",
        id: S,
        actionGroupId: S,
        z_index: D,
        item: null
      }
    ].sort((je, Ke) => Number((je == null ? void 0 : je.z_index) || 0) - Number((Ke == null ? void 0 : Ke.z_index) || 0));
  }
  function K() {
    return I().slice().sort((p, N) => Number((p == null ? void 0 : p.z_index) || 0) - Number((N == null ? void 0 : N.z_index) || 0)).map((p) => C(W("paint", (p == null ? void 0 : p.actionGroupId) || (p == null ? void 0 : p.id) || ""))).filter(Boolean);
  }
  function fe() {
    var p;
    return (Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : []).filter((N) => String((N == null ? void 0 : N.layerKind) || "paint") === "paint").slice().sort((N, S) => Number((N == null ? void 0 : N.z_index) || 0) - Number((S == null ? void 0 : S.z_index) || 0)).map((N) => _e(ie((N == null ? void 0 : N.id) || ""))).filter(Boolean);
  }
  function se() {
    return Array.isArray(i.stickers) ? m() : [];
  }
  function Y() {
    return [...Array.isArray(i.shots) ? i.shots : [], ...se()];
  }
  function k(p) {
    return !!p && Array.isArray(i.shots) && i.shots.includes(p);
  }
  function ne(p) {
    return !!p && Array.isArray(i.stickers) && i.stickers.includes(p);
  }
  function ue() {
    var p;
    return Array.isArray((p = i.painting) == null ? void 0 : p.raster_objects) ? i.painting.raster_objects : [];
  }
  function _e(p) {
    const N = pe(p);
    if (!N) return null;
    const S = ue().find((P) => String((P == null ? void 0 : P.id) || "").trim() === N);
    return !S || String((S == null ? void 0 : S.layerKind) || "paint") !== "paint" ? null : {
      ...S,
      id: ie(N),
      type: "rasterObject",
      rasterObjectId: N
    };
  }
  function we(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "rasterObject") return !1;
    const N = pe(p.rasterObjectId || p.id || "");
    return !!N && !!_e(ie(N));
  }
  function C(p) {
    const N = q(p), S = String(N.actionGroupId || "").trim();
    if (!S) return null;
    const P = I().find((U) => String((U == null ? void 0 : U.id) || (U == null ? void 0 : U.actionGroupId) || "") === S || String((U == null ? void 0 : U.actionGroupId) || "") === S);
    return P ? {
      ...P,
      id: W("paint", S),
      type: "strokeGroup",
      layerKind: "paint",
      actionGroupId: S
    } : null;
  }
  function le(p) {
    if (!p || typeof p != "object" || String(p.type || "") !== "strokeGroup") return !1;
    const N = String(p.actionGroupId || "").trim(), S = String(p.layerKind || "paint").trim() || "paint";
    return !!N && !!C(W(S, N));
  }
  function b(p, N = null) {
    const S = q(p, N), P = String(S.actionGroupId || "").trim();
    return P ? d(S.layerKind).filter((U) => String((U == null ? void 0 : U.actionGroupId) || "").trim() === P) : [];
  }
  function y(p, N = "paint") {
    const S = String(p || "").trim(), U = `geomv5:${String(N || "paint").trim() || "paint"}:${S}:${r.mode}:${u()}`;
    if (r.mode === "frame") {
      const ge = a(), D = String((ge == null ? void 0 : ge.id) || ""), re = ge ? c(ge) : null;
      return `${U}:frame:${D}:${Math.round(Number((ge == null ? void 0 : ge.yaw_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.pitch_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.roll_deg) ?? (ge == null ? void 0 : ge.rot_deg) ?? 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.hFOV_deg) || 0) * 1e3)}:${Math.round(Number((ge == null ? void 0 : ge.vFOV_deg) || 0) * 1e3)}:${Math.round(Number((re == null ? void 0 : re.x) || 0))}:${Math.round(Number((re == null ? void 0 : re.y) || 0))}:${Math.round(Number((re == null ? void 0 : re.w) || 0))}:${Math.round(Number((re == null ? void 0 : re.h) || 0))}`;
    }
    return `${U}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function E(p, N, S) {
    return !p || typeof p != "object" ? p : {
      ...p,
      u: ((Number(p.u || 0) + Number(N || 0)) % 1 + 1) % 1,
      v: Ie(Number(p.v || 0) + Number(S || 0), 0, 1)
    };
  }
  function v(p, N) {
    let S = Number(p || 0) - Number(N || 0);
    for (; S > 0.5; ) S -= 1;
    for (; S < -0.5; ) S += 1;
    return S;
  }
  function $(p, N = null, S = null) {
    var xe;
    const P = q(p, N), U = Array.isArray(S) ? S : b(P.actionGroupId, P.layerKind), ge = [];
    if (U.forEach((Pe) => {
      const Ce = (Pe == null ? void 0 : Pe.geometry) || null, Le = (Ce == null ? void 0 : Ce.geometryKind) === "lasso_fill" ? Ce == null ? void 0 : Ce.points : (Ce == null ? void 0 : Ce.processedPoints) || (Ce == null ? void 0 : Ce.rawPoints) || (Ce == null ? void 0 : Ce.points) || [];
      Array.isArray(Le) && ge.push(...Le);
    }), !ge.length) return { u: 0.5, v: 0.5 };
    const D = Number(((xe = ge[0]) == null ? void 0 : xe.u) || 0);
    let re = 0, Ne = 0;
    return ge.forEach((Pe) => {
      re += D + v(Number((Pe == null ? void 0 : Pe.u) || 0), D), Ne += Number((Pe == null ? void 0 : Pe.v) || 0);
    }), {
      u: (re / ge.length % 1 + 1) % 1,
      v: Ie(Ne / ge.length, 0, 1)
    };
  }
  function L(p, N, S = 1, P = 0) {
    if (!p || typeof p != "object") return p;
    const U = Number((N == null ? void 0 : N.u) || 0), ge = Number((N == null ? void 0 : N.v) || 0), D = v(Number(p.u || 0), U), re = Number(p.v || 0) - ge, Ne = Number(P || 0) * _r, xe = Math.cos(Ne), Pe = Math.sin(Ne), Ce = Math.max(0.02, Number(S || 1)), Le = (D * xe - re * Pe) * Ce, je = (D * Pe + re * xe) * Ce;
    return {
      ...p,
      u: ((U + Le) % 1 + 1) % 1,
      v: Ie(ge + je, 0, 1)
    };
  }
  function J(p, N, S, P = null, U = null, ge = null) {
    const D = q(p, U), re = String(D.actionGroupId || "").trim();
    if (!re) return !1;
    const Ne = d(D.layerKind), xe = Array.isArray(P) ? new Map(P.map((Ce) => [String((Ce == null ? void 0 : Ce.id) || ""), Ce])) : null;
    let Pe = !1;
    if (Ne.forEach((Ce) => {
      if (String((Ce == null ? void 0 : Ce.actionGroupId) || "").trim() !== re) return;
      const Le = (xe == null ? void 0 : xe.get(String((Ce == null ? void 0 : Ce.id) || ""))) || Ce, je = Ce == null ? void 0 : Ce.geometry, Ke = Le == null ? void 0 : Le.geometry;
      !je || !Ke || (Array.isArray(Ke.points) && (je.points = Ke.points.map(($e) => E($e, N, S)), Pe = !0), Array.isArray(Ke.rawPoints) && (je.rawPoints = Ke.rawPoints.map(($e) => E($e, N, S)), Pe = !0), Array.isArray(Ke.processedPoints) && (je.processedPoints = Ke.processedPoints.map(($e) => E($e, N, S)), Pe = !0));
    }), Pe && ge) {
      const Ce = I().find((Le) => String((Le == null ? void 0 : Le.actionGroupId) || "") === re);
      Ce && (Ce.frame = null);
    }
    return Pe;
  }
  function O(p, N = 1, S = 0, P = null, U = null, ge = null) {
    const D = q(p, U), re = String(D.actionGroupId || "").trim();
    if (!re) return !1;
    const Ne = d(D.layerKind), xe = Array.isArray(P) ? P : b(re, D.layerKind), Pe = Array.isArray(xe) ? new Map(xe.map((je) => [String((je == null ? void 0 : je.id) || ""), je])) : null, Ce = (ge == null ? void 0 : ge.centerUv) ?? $(re, D.layerKind, xe);
    let Le = !1;
    if (Ne.forEach((je) => {
      if (String((je == null ? void 0 : je.actionGroupId) || "").trim() !== re) return;
      const Ke = (Pe == null ? void 0 : Pe.get(String((je == null ? void 0 : je.id) || ""))) || je, $e = je == null ? void 0 : je.geometry, He = Ke == null ? void 0 : Ke.geometry;
      !$e || !He || (Array.isArray(He.points) && ($e.points = He.points.map((oe) => L(oe, Ce, N, S)), Le = !0), Array.isArray(He.rawPoints) && ($e.rawPoints = He.rawPoints.map((oe) => L(oe, Ce, N, S)), Le = !0), Array.isArray(He.processedPoints) && ($e.processedPoints = He.processedPoints.map((oe) => L(oe, Ce, N, S)), Le = !0));
    }), Le && ge) {
      const je = I().find((Ke) => String((Ke == null ? void 0 : Ke.actionGroupId) || "") === re);
      je && (je.frame = null);
    }
    return Le;
  }
  function F(p, N, S, P = null) {
    const U = pe(p);
    if (!U) return !1;
    const ge = ue().find((Pe) => String((Pe == null ? void 0 : Pe.id) || "").trim() === U);
    if (!ge) return !1;
    const D = P && typeof P == "object" ? P : ge, re = (D == null ? void 0 : D.transform) || {}, Ne = Number(re.du || 0) + Number(N || 0), xe = Ie(Number(re.dv || 0) + Number(S || 0), -1, 1);
    return ge.transform || (ge.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), ge.transform.du = Ne, ge.transform.dv = xe, !0;
  }
  function x(p, N = 1, S = null) {
    const P = pe(p);
    if (!P) return !1;
    const U = ue().find((xe) => String((xe == null ? void 0 : xe.id) || "").trim() === P);
    if (!U) return !1;
    const ge = S && typeof S == "object" ? S : U, D = (ge == null ? void 0 : ge.transform) || {}, re = Math.max(0.01, Number(D.scale || 1)), Ne = Ie(re * Math.max(0.01, Number(N || 1)), 0.01, 100);
    return U.transform || (U.transform = { du: 0, dv: 0, rot_deg: 0, scale: 1 }), U.transform.scale = Ne, !0;
  }
  function R() {
    return de();
  }
  function Z(p) {
    var N;
    return !p || typeof p != "object" ? !1 : o ? ((N = p.source) == null ? void 0 : N.kind) === "port" : String(p.id || "") === $d || String(p.source_kind || "") === fN;
  }
  function he(p) {
    return !!(p && typeof p == "object" && p.visible === !1);
  }
  function ce(p) {
    return Z(p) && he(p) ? Gm : 1;
  }
  function be(p, N, S = 1, P = 0) {
    if (!p || typeof p != "object") return p;
    const U = Number((N == null ? void 0 : N.u) || 0), ge = Number((N == null ? void 0 : N.v) || 0), D = v(Number(p.u || 0), U), re = Number(p.v || 0) - ge, Ne = Math.max(0.02, Number(S || 1)), xe = Number(P || 0) * _r, Pe = Math.cos(xe), Ce = Math.sin(xe), Le = D / Ne, je = re / Ne, Ke = Le * Pe + je * Ce, $e = -Le * Ce + je * Pe;
    return {
      ...p,
      u: ((U + Ke) % 1 + 1) % 1,
      v: ge + $e
    };
  }
  function Se(p) {
    const N = (p == null ? void 0 : p.bbox) || null, S = (p == null ? void 0 : p.transform) || {};
    return N ? {
      u: (((Number(N.u0 || 0) + Number(N.u1 || 0)) * 0.5 + Number(S.du || 0)) % 1 + 1) % 1,
      v: Ie((Number(N.v0 || 0) + Number(N.v1 || 0)) * 0.5 + Number(S.dv || 0), 0, 1)
    } : { u: 0.5, v: 0.5 };
  }
  function ye(p) {
    var Ne, xe, Pe, Ce;
    const N = (p == null ? void 0 : p.bbox) || null;
    if (!N) return [];
    const S = {
      u: (Number(N.u0 || 0) + Number(N.u1 || 0)) * 0.5,
      v: (Number(N.v0 || 0) + Number(N.v1 || 0)) * 0.5
    }, P = Math.max(0.01, Number(((Ne = p == null ? void 0 : p.transform) == null ? void 0 : Ne.scale) || 1)), U = Number(((xe = p == null ? void 0 : p.transform) == null ? void 0 : xe.rot_deg) || 0), ge = Number(((Pe = p == null ? void 0 : p.transform) == null ? void 0 : Pe.du) || 0), D = Number(((Ce = p == null ? void 0 : p.transform) == null ? void 0 : Ce.dv) || 0);
    return [
      { u: Number(N.u0 || 0), v: Number(N.v0 || 0) },
      { u: Number(N.u1 || 0), v: Number(N.v0 || 0) },
      { u: Number(N.u1 || 0), v: Number(N.v1 || 0) },
      { u: Number(N.u0 || 0), v: Number(N.v1 || 0) }
    ].map((Le) => E(L(Le, S, P, U), ge, D));
  }
  function Q(p) {
    const N = pe((p == null ? void 0 : p.rasterObjectId) || (p == null ? void 0 : p.id) || ""), S = (p == null ? void 0 : p.transform) || {}, P = (p == null ? void 0 : p.bbox) || {}, U = `${N}:${r.mode}:${u()}:${P.u0}:${P.v0}:${P.u1}:${P.v1}:${S.du}:${S.dv}:${S.rot_deg}:${S.scale}`;
    if (r.mode === "frame") {
      const ge = a(), D = ge ? c(ge) : null;
      return `${U}:frame:${String((ge == null ? void 0 : ge.id) || "")}:${Math.round(Number((D == null ? void 0 : D.x) || 0))}:${Math.round(Number((D == null ? void 0 : D.y) || 0))}:${Math.round(Number((D == null ? void 0 : D.w) || 0))}:${Math.round(Number((D == null ? void 0 : D.h) || 0))}`;
    }
    return `${U}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function me(p) {
    const N = String((p == null ? void 0 : p.id) || ""), S = k(p) ? "frame" : ne(p) ? "sticker" : "item", P = V(p), U = [
      S,
      N,
      r.mode,
      Number((P == null ? void 0 : P.yaw_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.pitch_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.hFOV_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.vFOV_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.rot_deg) || 0).toFixed(4),
      Number((P == null ? void 0 : P.roll_deg) || 0).toFixed(4),
      Dr(P),
      _(p) && w(p)
    ].join(":");
    if (r.mode === "frame") {
      const ge = a(), D = ge ? c(ge) : null;
      return `${U}:frame:${String((ge == null ? void 0 : ge.id) || "")}:${Math.round(Number((D == null ? void 0 : D.x) || 0))}:${Math.round(Number((D == null ? void 0 : D.y) || 0))}:${Math.round(Number((D == null ? void 0 : D.w) || 0))}:${Math.round(Number((D == null ? void 0 : D.h) || 0))}`;
    }
    return `${U}:view:${Math.round(Number(r.viewYaw || 0) * 100)}:${Math.round(Number(r.viewPitch || 0) * 100)}:${Math.round(Number(r.viewFov || 0) * 100)}:${Math.round(Number((t == null ? void 0 : t.width) || 0))}:${Math.round(Number((t == null ? void 0 : t.height) || 0))}`;
  }
  function B() {
    M().forEach((N, S) => {
      N.type === "sticker" && N.item && (N.item.z_index = S), N.type === "strokeGroup" && N.item && (N.item.z_index = S), N.type === "rasterObject" && N.item && (N.item.z_index = S);
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
        getStickerImage: h,
        sceneStickerShown: w
      } = p);
    },
    getList: g,
    skyStickers: m,
    isSceneSticker: _,
    isUploadingSticker: ee,
    poseOf: V,
    writePose: te,
    getPaintingGroupList: I,
    makeStrokeGroupSelectionId: W,
    makeRasterObjectSelectionId: ie,
    parseRasterObjectSelectionId: pe,
    ensurePaintingGroupEntry: ae,
    getFrameCornersUv: ve,
    ensureGroupFrame: z,
    getDisplayListObjects: M,
    getOrderedPaintGroupIds: H,
    getOrderedDisplayListObjects: T,
    getSelectableStrokeGroupItems: K,
    getSelectableRasterObjectItems: fe,
    cutoutStickers: se,
    getCutoutSelectableItems: Y,
    isShotItem: k,
    isStickerItem: ne,
    getRasterObjectList: ue,
    getRasterObjectItem: _e,
    isRasterObjectItem: we,
    getStrokeGroupItem: C,
    isStrokeGroupItem: le,
    getStrokeGroupStrokes: b,
    getStrokeGeomCacheKey: y,
    shortestWrappedDelta: v,
    getStrokeGroupCenterUv: $,
    applyStrokeGroupOffset: J,
    applyStrokeGroupTransform: O,
    applyRasterObjectOffset: F,
    applyRasterObjectTransform: x,
    getNextStickerZIndex: R,
    isExternalSticker: Z,
    isStickerHidden: he,
    getStickerDisplayAlpha: ce,
    inverseTransformErpPointAround: be,
    getRasterObjectCenterUv: Se,
    getRasterObjectTransformedErpPoints: ye,
    getRasterObjectGeomCacheKey: Q,
    getSceneItemGeomCacheKey: me,
    normalizeDisplayZIndices: B
  };
}
function r2(e) {
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
  let c, d, u, f, h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T, K, fe, se, Y;
  function k() {
    const p = String(t.selectedId || "");
    if (!p) return null;
    const N = I(p);
    if (N) return N;
    const S = ee(p);
    return S || (o ? w().find((P) => String((P == null ? void 0 : P.id) || "") === p) || null : m().find((P) => String((P == null ? void 0 : P.id) || "") === p) || null);
  }
  function ne() {
    const p = Array.isArray(t.selectedIds) && t.selectedIds.length ? t.selectedIds : t.selectedId ? [t.selectedId] : [], N = [], S = /* @__PURE__ */ new Set();
    return p.forEach((P) => {
      const U = String(P || "").trim();
      if (!U || S.has(U)) return;
      S.add(U);
      const ge = U === String(t.selectedId || "") ? k() : I(U) || ee(U) || (o ? w().find((D) => String((D == null ? void 0 : D.id) || "") === U) : m().find((D) => String((D == null ? void 0 : D.id) || "") === U));
      ge && N.push(ge);
    }), N;
  }
  function ue(p = null) {
    const N = Array.isArray(p) ? p : ne();
    if (!N || N.length < 2) return null;
    const S = N.map((xe) => A(xe)).filter((xe) => (xe == null ? void 0 : xe.visible) && Array.isArray(xe.corners) && xe.corners.length);
    if (!S.length) return null;
    const P = S.flatMap((xe) => xe.corners.map((Pe) => Number((Pe == null ? void 0 : Pe.x) || 0))), U = S.flatMap((xe) => xe.corners.map((Pe) => Number((Pe == null ? void 0 : Pe.y) || 0))), ge = Math.min(...P), D = Math.max(...P), re = Math.min(...U), Ne = Math.max(...U);
    return {
      kind: "multiSelection",
      visible: !0,
      center: { x: (ge + D) * 0.5, y: (re + Ne) * 0.5 },
      corners: [
        { x: ge, y: re },
        { x: D, y: re },
        { x: D, y: Ne },
        { x: ge, y: Ne }
      ],
      edgeMidpoints: [
        { edge: "top", x: (ge + D) * 0.5, y: re, a: { x: ge, y: re }, b: { x: D, y: re } },
        { edge: "right", x: D, y: (re + Ne) * 0.5, a: { x: D, y: re }, b: { x: D, y: Ne } },
        { edge: "bottom", x: (ge + D) * 0.5, y: Ne, a: { x: D, y: Ne }, b: { x: ge, y: Ne } },
        { edge: "left", x: ge, y: (re + Ne) * 0.5, a: { x: ge, y: Ne }, b: { x: ge, y: re } }
      ],
      rotateStemBase: { x: (ge + D) * 0.5, y: re },
      rotateHandle: { x: (ge + D) * 0.5, y: re - 30 }
    };
  }
  function _e(p) {
    const N = String((p == null ? void 0 : p.id) || "").trim();
    return !!N && Array.isArray(t.selectedIds) && t.selectedIds.includes(N);
  }
  function we() {
    const p = k();
    return p ? ae(p) || W(p) ? "stroke" : pe(p) ? "frame" : "image" : null;
  }
  function C(p) {
    if (!p || typeof p != "object") return !1;
    if (ae(p)) {
      const N = String(p.actionGroupId || p.id || "").trim(), S = _().find((P) => String((P == null ? void 0 : P.actionGroupId) || (P == null ? void 0 : P.id) || "").trim() === N);
      return (S == null ? void 0 : S.locked) === !0;
    }
    if (W(p)) {
      const N = M(p.rasterObjectId || p.id || ""), S = V().find((P) => String((P == null ? void 0 : P.id) || "").trim() === N);
      return (S == null ? void 0 : S.locked) === !0;
    }
    return p.locked === !0;
  }
  function le(p = null) {
    const N = Array.isArray(p) ? p : ne();
    return N.length > 0 && N.every((S) => C(S));
  }
  function b(p, N) {
    const S = N === !0;
    if (!p || typeof p != "object") return !1;
    if (ae(p)) {
      const P = String(p.actionGroupId || p.id || "").trim(), U = _().find((ge) => String((ge == null ? void 0 : ge.actionGroupId) || (ge == null ? void 0 : ge.id) || "").trim() === P);
      return !U || U.locked === S ? !1 : (U.locked = S, !0);
    }
    if (W(p)) {
      const P = M(p.rasterObjectId || p.id || ""), U = V().find((ge) => String((ge == null ? void 0 : ge.id) || "").trim() === P);
      return !U || U.locked === S ? !1 : (U.locked = S, !0);
    }
    return p.locked === S ? !1 : (p.locked = S, !0);
  }
  function y() {
    if (r) return;
    const p = ne();
    if (!p.length) return;
    const N = !le(p);
    let S = !1;
    p.forEach((P) => {
      b(P, N) && (S = !0);
    }), S && (T(), d(), se(), Y(), K());
  }
  function E(p) {
    be(), a.selection = null, t.selectedId = (p == null ? void 0 : p.id) || null, t.selectedIds = p != null && p.id ? [p.id] : [], p && de(p) ? s.active.selected_sticker_id = p.id || null : s.active.selected_sticker_id = null, p && pe(p) ? s.active.selected_shot_id = p.id || null : p ? pe(p) || (s.active.selected_shot_id = s.active.selected_shot_id) : s.active.selected_shot_id = null;
  }
  function v(p, N = null) {
    const S = [], P = /* @__PURE__ */ new Set();
    (Array.isArray(p) ? p : []).forEach((D) => {
      const re = String((D == null ? void 0 : D.id) || "").trim();
      !re || P.has(re) || (P.add(re), S.push(re));
    }), t.selectedIds = S, be(), a.selection = null;
    const U = String(N || "").trim();
    t.selectedId = U && S.includes(U) ? U : S[S.length - 1] || null;
    const ge = k();
    s.active.selected_sticker_id = ge && de(ge) && ge.id || null, ge && pe(ge) ? s.active.selected_shot_id = ge.id || null : S.length || (s.active.selected_shot_id = null);
  }
  function $() {
    const p = (Array.isArray(s.shots) ? s.shots : []).map((S, P) => ({
      kind: "frame",
      item: S,
      label: String((S == null ? void 0 : S.label) || `Frame ${P + 1}`)
    })), N = f().map((S, P) => {
      var ge, D;
      const U = j(S) ? String(S.id || $d) : String(((D = (ge = s.assets) == null ? void 0 : ge[S.asset_id]) == null ? void 0 : D.name) || S.asset_id || S.id || `Image ${P + 1}`);
      return {
        kind: "image",
        item: S,
        label: U
      };
    });
    return [...p, ...N];
  }
  function L(p) {
    return p === "frame" ? ze.camera : p === "stroke" ? ze.paintbrush_vertical_tool : ze.image;
  }
  function J(p) {
    return !p || !p.item ? {
      label: String((p == null ? void 0 : p.label) || ""),
      icon: null
    } : {
      label: String(p.label || ""),
      icon: L(p.kind)
    };
  }
  function O() {
    if (r) return;
    const p = k();
    !p || !j(p) || (p.visible = q(p), Q(), ve(), T(), d(), Y(), se(), K());
  }
  function F() {
    if (r || l !== "stickers") return;
    const p = k();
    if (!p || !j(p)) return;
    const N = p.initial_pose;
    if (!N || typeof N != "object") return;
    p.yaw_deg = Number(N.yaw_deg ?? p.yaw_deg ?? 0), p.pitch_deg = Number(N.pitch_deg ?? p.pitch_deg ?? 0), p.hFOV_deg = Number(N.hFOV_deg ?? p.hFOV_deg ?? 30);
    const S = te(ho, () => {
      K();
    });
    S && (S.complete || S.naturalWidth || S.width) ? p.vFOV_deg = u(
      Number(N.hFOV_deg ?? p.hFOV_deg ?? 30),
      Number(S.naturalWidth || S.width || 1),
      Number(S.naturalHeight || S.height || 1)
    ) : p.vFOV_deg = Number(N.vFOV_deg ?? p.vFOV_deg ?? 30), p.rot_deg = Number(N.rot_deg ?? p.rot_deg ?? 0), T(), d(), Y(), se(), K();
  }
  function x(p) {
    if (!p || !j(p)) return null;
    const N = p.initial_pose;
    if (!N || typeof N != "object") return null;
    const S = {
      yaw_deg: Number(N.yaw_deg ?? p.yaw_deg ?? 0),
      pitch_deg: Number(N.pitch_deg ?? p.pitch_deg ?? 0),
      hFOV_deg: Number(N.hFOV_deg ?? p.hFOV_deg ?? 30),
      vFOV_deg: Number(N.vFOV_deg ?? p.vFOV_deg ?? 30),
      rot_deg: Number(N.rot_deg ?? p.rot_deg ?? 0)
    }, P = te(ho, () => {
      K();
    });
    return P && (P.complete || P.naturalWidth || P.width) && (S.vFOV_deg = u(
      S.hFOV_deg,
      Number(P.naturalWidth || P.width || 1),
      Number(P.naturalHeight || P.height || 1)
    )), S;
  }
  function R() {
    const p = k();
    if (!p || !j(p)) return !1;
    const N = x(p);
    if (!N) return !1;
    const S = (P, U) => Math.abs(Number(P || 0) - Number(U || 0)) <= 1e-4;
    return !(S(p.yaw_deg, N.yaw_deg) && S(p.pitch_deg, N.pitch_deg) && S(p.hFOV_deg, N.hFOV_deg) && S(p.vFOV_deg, N.vFOV_deg) && S(p.rot_deg, N.rot_deg));
  }
  function Z(p = {}) {
    const S = p.preservePanelValues !== !1 ? H(k()) : null;
    S && (t.panelLastValues = {
      yaw_deg: Number(S.yaw_deg || 0),
      pitch_deg: Number(S.pitch_deg || 0),
      hFOV_deg: Number(S.hFOV_deg || (l === "stickers" ? 30 : 90)),
      vFOV_deg: Number(S.vFOV_deg || (l === "stickers" ? 30 : 60)),
      rot_deg: Number(S.rot_deg || 0),
      roll_deg: Number(S.roll_deg || 0),
      aspect_id: Dr(S)
    }), t.selectedId = null, t.selectedIds = [], be(), t.cutoutAspectOpen = !1, s.active.selected_sticker_id = null, s.active.selected_shot_id = null;
  }
  function he() {
    return !i || !t.worldSelectedId ? null : s.stickers.find((p) => p.id === t.worldSelectedId && p.placement === "world") || null;
  }
  function ce(p) {
    E(null), t.worldSelectedId = p, n.backgroundDirty = !0;
  }
  function be() {
    t.worldSelectedId && (t.worldSelectedId = null, t.gizmoAxis = null, n.backgroundDirty = !0);
  }
  function Se(p) {
    return !!p && !r && !p.locked;
  }
  function ye() {
    if (l !== "cutout") return;
    const p = h();
    p && (t.selectedId = String(p.id || "") || null, t.selectedIds = t.selectedId ? [t.selectedId] : []);
  }
  function Q() {
    var N;
    const p = k();
    (ie(p) && !fe(p) || t.selectedId === dd && X() && !c() || we() === "stroke" && !z()) && E(null), ((N = he()) == null ? void 0 : N.visible) === !1 && be();
  }
  function me() {
    if (r) return;
    const p = ne();
    if (!k() || p.length === 0 || p.some((re) => C(re))) return;
    G();
    const S = g(), P = new Set(p.map((re) => de(re) ? `sticker:${String(re.id || "")}` : W(re) ? `rasterObject:${M(re.rasterObjectId || re.id || "")}` : `strokeGroup:${String(re.actionGroupId || re.id || "")}`)), U = [], ge = [];
    if (S.forEach((re) => {
      var xe, Pe;
      const Ne = re.type === "sticker" ? `sticker:${String(((xe = re.item) == null ? void 0 : xe.id) || "")}` : re.type === "rasterObject" ? `rasterObject:${String(((Pe = re.item) == null ? void 0 : Pe.id) || re.id || "")}` : `strokeGroup:${String(re.actionGroupId || "")}`;
      P.has(Ne) ? U.push(re) : ge.push(re);
    }), !U.length || U[U.length - 1] === S[S.length - 1]) return;
    [...ge, ...U].forEach((re, Ne) => {
      re.type === "sticker" && re.item && (re.item.z_index = Ne), re.type === "strokeGroup" && re.item && (re.item.z_index = Ne), re.type === "rasterObject" && re.item && (re.item.z_index = Ne);
    }), ve(), T(), d(), se(), K();
  }
  function B() {
    if (r) return;
    const p = ne();
    if (!k() || p.length === 0 || p.some((re) => C(re))) return;
    G();
    const S = g(), P = new Set(p.map((re) => de(re) ? `sticker:${String(re.id || "")}` : W(re) ? `rasterObject:${M(re.rasterObjectId || re.id || "")}` : `strokeGroup:${String(re.actionGroupId || re.id || "")}`)), U = [], ge = [];
    if (S.forEach((re) => {
      var xe, Pe;
      const Ne = re.type === "sticker" ? `sticker:${String(((xe = re.item) == null ? void 0 : xe.id) || "")}` : re.type === "rasterObject" ? `rasterObject:${String(((Pe = re.item) == null ? void 0 : Pe.id) || re.id || "")}` : `strokeGroup:${String(re.actionGroupId || "")}`;
      P.has(Ne) ? U.push(re) : ge.push(re);
    }), !U.length || U[0] === S[0]) return;
    [...U, ...ge].forEach((re, Ne) => {
      re.type === "sticker" && re.item && (re.item.z_index = Ne), re.type === "strokeGroup" && re.item && (re.item.z_index = Ne), re.type === "rasterObject" && re.item && (re.item.z_index = Ne);
    }), ve(), T(), d(), se(), K();
  }
  return {
    connect(p) {
      ({
        cameraShoots: c,
        commitAndRefreshNode: d,
        computeStickerVFov: u,
        cutoutStickers: f,
        getActiveCutoutShot: h,
        getCutoutSelectableItems: w,
        getDisplayListObjects: g,
        getList: m,
        getPaintingGroupList: _,
        getRasterObjectItem: ee,
        getRasterObjectList: V,
        getStickerUiImage: te,
        getStrokeGroupItem: I,
        hasCamera: X,
        isExternalSticker: j,
        isRasterObjectItem: W,
        isSceneSticker: ie,
        isShotItem: pe,
        isStickerHidden: q,
        isStickerItem: de,
        isStrokeGroupItem: ae,
        markObjectVisualsDirty: ve,
        normalizeDisplayZIndices: G,
        objectGeom: A,
        paintingShown: z,
        parseRasterObjectSelectionId: M,
        poseOf: H,
        pushHistory: T,
        requestDraw: K,
        sceneStickerShown: fe,
        updateSelectionMenu: se,
        updateSidePanel: Y
      } = p);
    },
    getSelected: k,
    getSelectedItems: ne,
    getMultiSelectionGeom: ue,
    isItemSelected: _e,
    getSelectedKind: we,
    isItemLocked: C,
    areAllSelectedItemsLocked: le,
    toggleSelectedLock: y,
    setSelectedItem: E,
    setSelectedItems: v,
    getCutoutInspectorItems: $,
    getSelectionItemIcon: L,
    getSelectionItemLabelData: J,
    toggleSelectedExternalStickerVisibility: O,
    restoreSelectedToInitialPose: F,
    canRestoreSelectedToInitial: R,
    clearSelection: Z,
    selectedWorldSticker: he,
    selectWorldSticker: ce,
    clearWorldSelection: be,
    worldStickerEditable: Se,
    applyInitialCutoutFocus: ye,
    releaseHiddenSelection: Q,
    bringSelectedToFront: me,
    sendSelectedToBack: B
  };
}
function i2(e) {
  const {
    backgroundCanvas: t,
    canvas: r,
    editor: n,
    state: i,
    studio: o
  } = e;
  let s, a, l, c, d, u, f = { key: [], projection: null };
  function h() {
    return o && s() && i.camera.projection === "erp";
  }
  function w() {
    const ne = W({
      yaw_deg: 0,
      pitch_deg: 0,
      hFOV_deg: 20,
      vFOV_deg: 20,
      rot_deg: 0
    });
    return !ne || ne.length !== 4 ? !1 : ne[0].y >= ne[3].y;
  }
  function g() {
    return Km({ yaw_deg: n.viewYaw, pitch_deg: n.viewPitch, roll_deg: 0, hFOV_deg: n.viewFov }, r.width, r.height);
  }
  function m() {
    const k = [n.viewYaw, n.viewPitch, n.viewFov, r.width, r.height];
    return k.some((ne, ue) => ne !== f.key[ue]) && (f = { key: k, projection: Um(g(), r.width, r.height) }), f.projection;
  }
  function _(k) {
    const ne = m().project(k);
    return ne.z > 1e-4 ? ne : null;
  }
  function ee(k, ne) {
    return m().ray(k, ne);
  }
  function V() {
    const k = r.width, ne = r.height, ue = 2;
    if (k / Math.max(ne, 1) >= ue) {
      const b = ne, y = b * ue;
      return { x: (k - y) * 0.5, y: 0, w: y, h: b };
    }
    const we = k, C = we / ue;
    return { x: 0, y: (ne - C) * 0.5, w: we, h: C };
  }
  function te(k) {
    return {
      lon: Math.atan2(k.x, k.z),
      lat: Math.asin(Ie(k.y, -1, 1))
    };
  }
  function I(k, ne = null) {
    const { lon: ue, lat: _e } = te(k), we = V();
    let C = we.x + (ue / (2 * Math.PI) + 0.5) * we.w;
    const le = we.y + (0.5 - _e / Math.PI) * we.h;
    if (ne !== null) {
      for (; C - ne > we.w / 2; ) C -= we.w;
      for (; C - ne < -we.w / 2; ) C += we.w;
    }
    return { x: C, y: le, z: 1 };
  }
  function X(k) {
    const ne = c(k), ue = yo(
      Number(ne.yaw_deg || 0),
      Number(ne.pitch_deg || 0),
      Number(ne.rot_deg || ne.roll_deg || 0)
    ), _e = Math.tan(Ie(Number(ne.hFOV_deg || 20), 0.1, 179) * 0.5 * _r), we = Math.tan(Ie(Number(ne.vFOV_deg || 20), 0.1, 179) * 0.5 * _r);
    return {
      centerDir: ue.fwd,
      right: ue.right,
      up: ue.up,
      tanX: _e,
      tanY: we
    };
  }
  function j(k, ne, ue) {
    return MN(Pp(Pp(k.centerDir, Np(k.right, ne)), Np(k.up, ue)));
  }
  function W(k) {
    const ne = X(k);
    return [
      { u: -1, v: 1 },
      { u: 1, v: 1 },
      { u: 1, v: -1 },
      { u: -1, v: -1 }
    ].map(({ u: _e, v: we }) => j(ne, _e * ne.tanX, we * ne.tanY));
  }
  function ie(k, ne, ue) {
    const _e = X(k), we = (ne * 2 - 1) * _e.tanX, C = (1 - ue * 2) * _e.tanY;
    return j(_e, we, C);
  }
  function pe(k) {
    const ne = t.width / Math.max(1, r.width), ue = t.height / Math.max(1, r.height);
    return { x: k.x * ne, y: k.y * ue, w: k.w * ne, h: k.h * ue };
  }
  function q(k, ne = null, ue = null, _e = null) {
    if (n.mode === "frame") {
      const we = ne || a();
      if (!we) return [];
      const C = ue || l(we);
      return T(k, we, C);
    }
    return z(k, _e);
  }
  function de(k, ne = null, ue = null, _e = null, we = null) {
    if (!k) return null;
    if (n.mode === "unwrap") {
      const le = z([k], we);
      return le[0] ? { x: le[0].x, y: le[0].y, z: 1 } : null;
    }
    const C = ve(k);
    return C ? d(C, ne, ue, _e) : null;
  }
  function ae(k, ne) {
    if (!k || !ne) return null;
    const ue = Number(ne.x || 0), _e = Number(ne.y || 0);
    return ie(k, ue, _e);
  }
  function ve(k) {
    if (!k) return null;
    const ne = (Number(k.u || 0) - 0.5) * (2 * Math.PI), ue = (0.5 - Number(k.v || 0)) * Math.PI, _e = Math.cos(ue);
    return Wl(_e * Math.sin(ne), Math.sin(ue), _e * Math.cos(ne));
  }
  function G(k, ne) {
    if (!k || !ne) return null;
    const ue = X(k), _e = Fc(ne, ue.centerDir);
    if (!Number.isFinite(_e) || _e <= 1e-6) return null;
    const we = Fc(ne, ue.right) / _e, C = Fc(ne, ue.up) / _e;
    return {
      x: (we / Math.max(1e-6, ue.tanX) + 1) * 0.5,
      y: (1 - C / Math.max(1e-6, ue.tanY)) * 0.5
    };
  }
  function A(k) {
    if (!Array.isArray(k) || k.length < 3) return [];
    if (n.mode === "unwrap") {
      const ue = V();
      return k.map((_e) => ({
        x: ue.x + Number(_e.u || 0) * ue.w,
        y: ue.y + Number(_e.v || 0) * ue.h
      }));
    }
    const ne = k.map((ue) => _(ve(ue))).filter(Boolean);
    return ne.every((ue) => Number(ue.z || 0) > 0) ? ne.map((ue) => ({ x: Number(ue.x || 0), y: Number(ue.y || 0) })) : [];
  }
  function z(k, ne = null) {
    if (!Array.isArray(k) || k.length < 1) return [];
    if (n.mode === "unwrap") {
      const _e = V();
      return k.map((we) => {
        const C = (Number(we.u || 0) % 1 + 1) % 1, le = ne == null ? C : Number(ne || 0) + u(C, ne);
        return {
          x: _e.x + le * _e.w,
          y: _e.y + Number(we.v || 0) * _e.h
        };
      });
    }
    const ue = k.map((_e) => _(ve(_e))).filter(Boolean);
    return ue.every((_e) => Number(_e.z || 0) > 0) ? ue.map((_e) => ({ x: Number(_e.x || 0), y: Number(_e.y || 0) })) : [];
  }
  function M(k, ne = 160) {
    if (!Array.isArray(k) || k.length < 3) return !1;
    for (let ue = 0; ue < k.length; ue += 1) {
      const _e = k[ue], we = k[(ue + 1) % k.length];
      if (!_e || !we || !Number.isFinite(_e.x) || !Number.isFinite(_e.y) || !Number.isFinite(we.x) || !Number.isFinite(we.y) || Math.hypot(Number(we.x) - Number(_e.x), Number(we.y) - Number(_e.y)) > ne) return !1;
    }
    return !0;
  }
  function H(k, ne, ue) {
    if (!Array.isArray(k) || k.length < 3 || !ne || !ue) return [];
    const _e = [];
    for (const we of k) {
      const C = ve(we), le = G(ne, C);
      if (!le) return [];
      _e.push({
        x: Number(ue.x || 0) + Number(le.x || 0) * Number(ue.w || 0),
        y: Number(ue.y || 0) + Number(le.y || 0) * Number(ue.h || 0)
      });
    }
    return M(_e, Math.max(80, Math.max(ue.w, ue.h) * 0.75)) ? _e : [];
  }
  function T(k, ne, ue) {
    if (!Array.isArray(k) || k.length < 1 || !ne || !ue) return [];
    const _e = [];
    for (const we of k) {
      const C = ve(we), le = G(ne, C);
      le && _e.push({
        x: Number(ue.x || 0) + Number(le.x || 0) * Number(ue.w || 0),
        y: Number(ue.y || 0) + Number(le.y || 0) * Number(ue.h || 0)
      });
    }
    return _e;
  }
  function K(k) {
    const ne = r.getBoundingClientRect();
    return {
      x: (k.clientX - ne.left) / ne.width * r.width,
      y: (k.clientY - ne.top) / ne.height * r.height
    };
  }
  function fe(k) {
    const ne = r.getBoundingClientRect();
    return {
      x: Number(k.clientX) - Number(ne.left || 0),
      y: Number(k.clientY) - Number(ne.top || 0)
    };
  }
  function se(k, ne = performance.now()) {
    if (n.mode === "unwrap") {
      const C = V(), le = (k.x - C.x) / Math.max(1, C.w), b = (k.y - C.y) / Math.max(1, C.h);
      return {
        targetKind: "ERP_GLOBAL",
        u: (le % 1 + 1) % 1,
        v: Ie(b, 0, 1),
        t: Number(ne || 0)
      };
    }
    const ue = ee(k.x, k.y), { lon: _e, lat: we } = te(ue);
    return {
      targetKind: "ERP_GLOBAL",
      u: (_e / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - we / Math.PI, 0, 1),
      t: Number(ne || 0)
    };
  }
  function Y(k, ne, ue = performance.now()) {
    const _e = l(ne);
    if (!_e) return null;
    const we = {
      x: (Number(k.x) - _e.x) / Math.max(1, _e.w),
      y: (Number(k.y) - _e.y) / Math.max(1, _e.h)
    };
    if (we.x < 0 || we.x > 1 || we.y < 0 || we.y > 1) return null;
    const C = ae(ne, we);
    if (!C) return null;
    const { lon: le, lat: b } = te(C);
    return {
      targetKind: "ERP_GLOBAL",
      u: (le / (2 * Math.PI) + 0.5 + 1) % 1,
      v: Ie(0.5 - b / Math.PI, 0, 1),
      t: Number(ue || 0)
    };
  }
  return {
    connect(k) {
      ({
        cameraShoots: s,
        getActiveCutoutShot: a,
        getFrameViewRect: l,
        poseOf: c,
        projectSceneItemDir: d,
        shortestWrappedDelta: u
      } = k);
    },
    isErpCamera: h,
    currentViewCamera: g,
    currentViewProjection: m,
    projectDir: _,
    screenToWorldDir: ee,
    getUnwrapRect: V,
    projectDirUnwrap: I,
    getStickerFrame: X,
    stickerDirFromFrame: j,
    stickerCornersDir: W,
    stickerSampleDir: ie,
    stickerCornerOrderSanity: w,
    projectEditorPoints: q,
    projectErpPointToEditor: de,
    frameLocalPointToWorldDir: ae,
    erpPointToWorldDir: ve,
    worldDirToFrameLocalPoint: G,
    projectLassoPointsToCurrentView: A,
    projectErpLassoPointsToFrameRect: H,
    screenPos: K,
    screenPosCss: fe,
    screenPosToErpPoint: se,
    screenPosToFrameAsErpPoint: Y,
    deviceRect: pe
  };
}
function o2(e) {
  const {
    cameraV2: t,
    canvas: r,
    editor: n,
    state: i
  } = e;
  let o, s, a, l, c, d, u, f, h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T;
  function K(C, le) {
    const b = String(C.actionGroupId || C.id || "").trim(), y = V(b, C.layerKind), E = a(b, C.layerKind, y), v = (E == null ? void 0 : E.centerUv) || ee(b, C.layerKind, y), $ = n.mode === "unwrap" ? Number((v == null ? void 0 : v.u) || 0) : null, L = [], J = n.mode === "frame" ? l() : null, O = J ? u(J) : null;
    for (const Q of y) {
      const me = (Q == null ? void 0 : Q.geometry) || null, B = (me == null ? void 0 : me.geometryKind) === "lasso_fill" ? me == null ? void 0 : me.points : (me == null ? void 0 : me.processedPoints) || (me == null ? void 0 : me.rawPoints) || (me == null ? void 0 : me.points) || [], p = ve(B, J, O, $).filter((P) => Number.isFinite(P == null ? void 0 : P.x) && Number.isFinite(P == null ? void 0 : P.y));
      if (!p.length) continue;
      const N = c(String((Q == null ? void 0 : Q.toolKind) || "pen")), S = Tn[N] || Tn[Er];
      L.push({
        points: p,
        closed: String((me == null ? void 0 : me.geometryKind) || "") === "lasso_fill",
        lineWidth: Math.max(10, Number((Q == null ? void 0 : Q.size) || 10) * Math.max(0.1, Number((S == null ? void 0 : S.sizeScale) ?? 1)) + 10),
        layerKind: String((Q == null ? void 0 : Q.layerKind) || C.layerKind || "paint")
      });
    }
    const F = G(v, null, J, O, $);
    if (!F) {
      const Q = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, Q), Q;
    }
    const R = d(E).map((Q) => G(Q, F.x, J, O, $)).filter((Q) => Number.isFinite(Q == null ? void 0 : Q.x) && Number.isFinite(Q == null ? void 0 : Q.y)).map((Q) => ({ x: Number(Q.x || 0), y: Number(Q.y || 0) }));
    if (R.length < 4) {
      const Q = { visible: !1, kind: "strokeGroup" };
      return n._strokeGeomCache.set(le, Q), Q;
    }
    const Z = (Q, me) => ({
      x: (Number((Q == null ? void 0 : Q.x) || 0) + Number((me == null ? void 0 : me.x) || 0)) * 0.5,
      y: (Number((Q == null ? void 0 : Q.y) || 0) + Number((me == null ? void 0 : me.y) || 0)) * 0.5,
      a: Q,
      b: me
    }), he = Z(R[0], R[1]), ce = Z(R[1], R[2]), be = Z(R[2], R[3]), Se = Z(R[3], R[0]), ye = {
      kind: "strokeGroup",
      center: { x: Number(F.x || 0), y: Number(F.y || 0) },
      corners: R,
      edgeMidpoints: [
        { edge: "top", ...he },
        { edge: "right", ...ce },
        { edge: "bottom", ...be },
        { edge: "left", ...Se }
      ],
      rotateStemBase: { x: he.x, y: he.y },
      rotateHandle: { x: he.x, y: he.y - 30 },
      strokePaths: L,
      visible: !0
    };
    return n._strokeGeomCache.set(le, ye), ye;
  }
  function fe(C, le) {
    const b = n.mode === "frame" ? l() : null, y = b ? u(b) : null, E = f(C), v = n.mode === "unwrap" ? Number((E == null ? void 0 : E.u) || 0) : null, $ = G(E, null, b, y, v), J = w(C).map((R) => G(R, ($ == null ? void 0 : $.x) ?? null, b, y, v)).filter((R) => Number.isFinite(R == null ? void 0 : R.x) && Number.isFinite(R == null ? void 0 : R.y));
    if (!Array.isArray(J) || J.length < 4) {
      const R = { visible: !1, kind: "rasterObject" };
      return n._strokeGeomCache.set(le, R), R;
    }
    const O = J.slice(0, 4).map((R) => ({ x: Number((R == null ? void 0 : R.x) || 0), y: Number((R == null ? void 0 : R.y) || 0) })), x = {
      kind: "rasterObject",
      center: {
        x: O.reduce((R, Z) => R + Number(Z.x || 0), 0) / O.length,
        y: O.reduce((R, Z) => R + Number(Z.y || 0), 0) / O.length
      },
      corners: O,
      visible: !0
    };
    return n._strokeGeomCache.set(le, x), x;
  }
  function se(C, le = null, b = null, y = null, E = {}) {
    if (n.mode === "frame") {
      const F = b || l(), x = y || u(F);
      if (!F || !x) return null;
      const R = F ? T(F, C) : null;
      return R ? {
        x: Number(x.x || 0) + Number(R.x || 0) * Number(x.w || 0),
        y: Number(x.y || 0) + Number(R.y || 0) * Number(x.h || 0),
        z: 1
      } : null;
    }
    if (n.mode === "unwrap") return ae(C, le);
    const v = 1e-4, $ = o().project(C, v);
    if (!Number.isFinite($.z) || $.z <= v && !(E != null && E.clipBehind)) return null;
    const L = r.width, J = r.height, O = Math.max(L, J) * 2;
    return {
      x: Ie($.x, -O, L + O),
      y: Ie($.y, -O, J + O),
      z: Math.max($.z, v),
      rawZ: $.z,
      clipped: $.z <= v
    };
  }
  function Y(C, le = []) {
    if (n.mode !== "pano" || W(C)) return 1;
    const b = le.map((y) => Number((y == null ? void 0 : y.rawZ) ?? (y == null ? void 0 : y.z))).filter((y) => Number.isFinite(y));
    return b.length ? xN(0.035, 0.2, Math.min(...b)) : 1;
  }
  function k(C) {
    if (X(C) && !A(C)) return { visible: !1 };
    const le = q(C), b = Dn(Number(le.yaw_deg || 0), Number(le.pitch_deg || 0)), y = n.mode === "frame" ? l() : null, E = y ? u(y) : null, v = n.mode === "pano" && (W(C) || j(C)), $ = v ? { clipBehind: !0 } : null, L = se(b, null, y, E, $);
    if (!L) return { visible: !1 };
    const J = m(C), F = z(C).map((U) => se(U, L.x, y, E, $)).filter((U) => Number.isFinite(U == null ? void 0 : U.x) && Number.isFinite(U == null ? void 0 : U.y));
    if (F.length < 4) return { visible: !1 };
    const x = M(J, 0, J.tanY), R = M(J, 0, J.tanY + Math.max(J.tanY * 0.43, 0.053)), Z = se(x, L.x, y, E, $);
    if (!Z) return { visible: !1 };
    const he = se(R, (Z == null ? void 0 : Z.x) ?? L.x, y, E, $), ce = ((he == null ? void 0 : he.x) ?? Z.x) - Z.x, be = ((he == null ? void 0 : he.y) ?? Z.y) - Z.y, Se = Math.hypot(ce, be) || 1, ye = {
      x: Z.x + ce / Se * 30,
      y: Z.y + be / Se * 30
    }, Q = se(M(J, 0, J.tanY), L.x, y, E, $), me = se(M(J, J.tanX, 0), L.x, y, E, $), B = se(M(J, 0, -J.tanY), L.x, y, E, $), p = se(M(J, -J.tanX, 0), L.x, y, E, $);
    if (!Q || !me || !B || !p) return { visible: !1 };
    const N = [
      L,
      ...F,
      Z,
      he,
      Q,
      me,
      B,
      p
    ];
    if (v && !N.some((U) => Number((U == null ? void 0 : U.rawZ) ?? (U == null ? void 0 : U.z)) > 1e-4)) return { visible: !1 };
    const S = Y(C, N), P = [
      {
        edge: "top",
        x: Q.x,
        y: Q.y,
        a: { x: F[0].x, y: F[0].y },
        b: { x: F[1].x, y: F[1].y }
      },
      {
        edge: "right",
        x: me.x,
        y: me.y,
        a: { x: F[1].x, y: F[1].y },
        b: { x: F[2].x, y: F[2].y }
      },
      {
        edge: "bottom",
        x: B.x,
        y: B.y,
        a: { x: F[2].x, y: F[2].y },
        b: { x: F[3].x, y: F[3].y }
      },
      {
        edge: "left",
        x: p.x,
        y: p.y,
        a: { x: F[3].x, y: F[3].y },
        b: { x: F[0].x, y: F[0].y }
      }
    ];
    return {
      center: { x: L.x, y: L.y },
      corners: F.map((U) => ({ x: U.x, y: U.y })),
      edgeMidpoints: P,
      rotateStemBase: { x: Z.x, y: Z.y },
      rotateHandle: ye,
      topEdge: { a: 0, b: 1 },
      visibilityAlpha: S,
      visible: !0
    };
  }
  function ne(C) {
    if (t && j(C) && te()) return { visible: !1 };
    if (!pe() && (ie(C) || I(C))) return { visible: !1 };
    if (ie(C)) {
      const E = String(C.actionGroupId || C.id || "").trim(), v = _(E, C.layerKind), $ = n._strokeGeomCache.get(v);
      return $ || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), K(C, v));
    }
    if (I(C)) {
      const E = h(C), v = n._strokeGeomCache.get(E);
      return v || (n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear(), fe(C, E));
    }
    const le = g(C), b = n._strokeGeomCache.get(le);
    if (b) return b;
    n._strokeGeomCache.size > 256 && n._strokeGeomCache.clear();
    const y = k(C);
    return n._strokeGeomCache.set(le, y), y;
  }
  function ue(C, le, b, y = null) {
    const E = [];
    for (let v = 0; v <= b; v += 1) {
      const $ = v / b;
      let L = 0, J = 0;
      le === 0 ? (L = $, J = 0) : le === 1 ? (L = 1, J = $) : le === 2 ? (L = 1 - $, J = 1) : (L = 0, J = 1 - $);
      const O = H(C, L, J), F = n.mode === "unwrap" ? ae(O, y) : de(O);
      F && E.push(F);
    }
    return E;
  }
  function _e() {
    const C = [...Array.isArray(i.shots) ? i.shots : []], le = [...s()].sort((b, y) => Number(b.z_index || 0) - Number(y.z_index || 0));
    return [...C, ...le];
  }
  function we() {
    const C = [...Array.isArray(i.shots) ? i.shots : []];
    return [...[...s()].sort((b, y) => Number(y.z_index || 0) - Number(b.z_index || 0)), ...C];
  }
  return {
    connect(C) {
      ({
        currentViewProjection: o,
        cutoutStickers: s,
        ensureGroupFrame: a,
        getActiveCutoutShot: l,
        getBrushPresetIdForTool: c,
        getFrameCornersUv: d,
        getFrameViewRect: u,
        getRasterObjectCenterUv: f,
        getRasterObjectGeomCacheKey: h,
        getRasterObjectTransformedErpPoints: w,
        getSceneItemGeomCacheKey: g,
        getStickerFrame: m,
        getStrokeGeomCacheKey: _,
        getStrokeGroupCenterUv: ee,
        getStrokeGroupStrokes: V,
        isFreeSpaceView: te,
        isRasterObjectItem: I,
        isSceneSticker: X,
        isShotItem: j,
        isStickerItem: W,
        isStrokeGroupItem: ie,
        paintingShown: pe,
        poseOf: q,
        projectDir: de,
        projectDirUnwrap: ae,
        projectEditorPoints: ve,
        projectErpPointToEditor: G,
        sceneStickerShown: A,
        stickerCornersDir: z,
        stickerDirFromFrame: M,
        stickerSampleDir: H,
        worldDirToFrameLocalPoint: T
      } = C);
    },
    projectSceneItemDir: se,
    objectGeom: ne,
    sampleStickerEdge: ue,
    getCutoutSelectableItemsForDisplay: _e,
    getCutoutSelectableItemsForHit: we
  };
}
const fa = /* @__PURE__ */ new Map();
function s2(e) {
  const {
    api: t,
    editor: r,
    node: n,
    rasterErpCanvasCache: i,
    rasterImageAlphaCache: o,
    rasterImageCache: s,
    state: a
  } = e;
  let l, c, d, u, f, h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q;
  function de(v = r.interaction) {
    const $ = String((v == null ? void 0 : v.kind) || "");
    if ($ === "paint_stroke" || $ === "paint_lasso_fill" || $ === "move_stroke_group" || $ === "scale_stroke_group" || $ === "rotate_stroke_group" || $ === "move_raster_object" || $ === "scale_raster_object") return !0;
    if ($ === "move_multi") {
      const L = Array.isArray(v == null ? void 0 : v.strokeSnapshots) && v.strokeSnapshots.length > 0, J = Array.isArray(v == null ? void 0 : v.rasterSnapshots) && v.rasterSnapshots.length > 0;
      return L || J;
    }
    return !1;
  }
  function ae() {
    var $, L, J, O;
    let v = null;
    try {
      const F = g(), x = ((O = (J = (L = ($ = r.paintEngine) == null ? void 0 : $.getErpTarget) == null ? void 0 : L.call($, F)) == null ? void 0 : J.displayPaint) == null ? void 0 : O.canvas) || null;
      x && (v = {
        source: x,
        revision: `${m()}:${ve()}`
      });
    } catch {
      v = null;
    }
    return v;
  }
  function ve() {
    var O, F, x, R, Z, he, ce;
    const v = r.interaction, $ = String((v == null ? void 0 : v.kind) || "");
    if (!de(v)) return "";
    if ($ === "paint_stroke" || $ === "paint_lasso_fill") {
      const be = ((O = v == null ? void 0 : v.stroke) == null ? void 0 : O.geometry) || null, Se = String(((F = v == null ? void 0 : v.stroke) == null ? void 0 : F.layerKind) || ""), ye = ((x = be == null ? void 0 : be.rawPoints) == null ? void 0 : x.length) ?? ((R = be == null ? void 0 : be.points) == null ? void 0 : R.length) ?? 0, Q = String((v == null ? void 0 : v._livePreviewToken) || "");
      return `_${Se || "paint"}_${$}_live${Q}_${ye}_${r.livePaintInteractionRevision}`;
    }
    const L = String(((Z = v == null ? void 0 : v.item) == null ? void 0 : Z.actionGroupId) || ""), J = String(((he = v == null ? void 0 : v.item) == null ? void 0 : he.rasterObjectId) || ((ce = v == null ? void 0 : v.item) == null ? void 0 : ce.id) || "");
    return `_${$}_${L || J || "active"}_${r.livePaintInteractionRevision}`;
  }
  function G(v, $ = null) {
    const L = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!L) return null;
    const J = s.get(L);
    if (J)
      return J.complete || J.width || J.naturalWidth, J;
    const O = new Image();
    return O.onload = () => {
      typeof $ == "function" && $();
    }, O.src = L, s.set(L, O), O;
  }
  function A(v) {
    const $ = String((v == null ? void 0 : v.rasterDataUrl) || "").trim();
    if (!$) return null;
    const L = o.get($);
    if (L) return L.ready ? L : null;
    const J = G(v, () => {
      const ce = o.get($);
      ce && (ce.ready = !1), ie({ localOnly: !0 });
    });
    if (!J || !(J.complete || J.width || J.naturalWidth)) return null;
    const O = Number(J.naturalWidth || J.width || 0), F = Number(J.naturalHeight || J.height || 0);
    if (O < 1 || F < 1) return null;
    const x = rn({ label: "editor.image-pixels" });
    x.width = O, x.height = F;
    const R = x.getContext("2d", { willReadFrequently: !0 });
    if (!R) return null;
    R.clearRect(0, 0, O, F), R.drawImage(J, 0, 0, O, F);
    const Z = R.getImageData(0, 0, O, F).data, he = { canvas: x, width: O, height: F, alpha: Z, ready: !0 };
    return o.set($, he), he;
  }
  function z(v, $) {
    if (!v || !$) return null;
    const L = (v == null ? void 0 : v.bbox) || null;
    if (!L) return null;
    const J = (v == null ? void 0 : v.transform) || {}, O = {
      u: (Number(L.u0 || 0) + Number(L.u1 || 0)) * 0.5,
      v: (Number(L.v0 || 0) + Number(L.v1 || 0)) * 0.5
    }, F = {
      u: ((Number($.u || 0) - Number(J.du || 0)) % 1 + 1) % 1,
      v: Number($.v || 0) - Number(J.dv || 0)
    }, x = V(
      F,
      O,
      Number(J.scale || 1),
      Number(J.rot_deg || 0)
    ), R = Number(L.u1 || 0) - Number(L.u0 || 0), Z = Number(L.v1 || 0) - Number(L.v0 || 0);
    if (!(R > 1e-6) || !(Z > 1e-6)) return null;
    const he = q(Number(x.u || 0), Number(L.u0 || 0)) / R, ce = (Number(x.v || 0) - Number(L.v0 || 0)) / Z;
    if (he < 0 || he > 1 || ce < 0 || ce > 1) return 0;
    const be = A(v);
    if (!be) return null;
    const Se = Ie(Math.floor(he * be.width), 0, be.width - 1), ye = Ie(Math.floor(ce * be.height), 0, be.height - 1);
    return Number(be.alpha[(ye * be.width + Se) * 4 + 3] || 0);
  }
  function M(v, $, L, J = null) {
    if (!($ != null && $.visible) || !Jr(L, $.corners)) return !1;
    const O = J || pe(L, performance.now()), F = z(v, O);
    return F === null ? !0 : F > 8;
  }
  function H() {
    var J, O, F, x, R, Z, he, ce;
    const v = ((O = (J = r.paintEngine) == null ? void 0 : J.getErpTarget) == null ? void 0 : O.call(J, g(!1))) || null, $ = Math.max(1, Number(((F = v == null ? void 0 : v.descriptor) == null ? void 0 : F.width) || ((R = (x = v == null ? void 0 : v.displayPaint) == null ? void 0 : x.canvas) == null ? void 0 : R.width) || 2048)), L = Math.max(1, Number(((Z = v == null ? void 0 : v.descriptor) == null ? void 0 : Z.height) || ((ce = (he = v == null ? void 0 : v.displayPaint) == null ? void 0 : he.canvas) == null ? void 0 : ce.height) || 1024));
    return { width: $, height: L };
  }
  function T() {
    var ye, Q, me;
    const v = r.interaction;
    if ((v == null ? void 0 : v.kind) !== "paint_stroke") return null;
    const $ = (v == null ? void 0 : v.stroke) || null;
    if (!$ || String(($ == null ? void 0 : $.layerKind) || "") !== "paint" || String(($ == null ? void 0 : $.toolKind) || "") !== "eraser") return null;
    const L = u(), J = `${ve()}:${L.width}:${L.height}`;
    if (((ye = r._activePaintEraserPreviewInfo) == null ? void 0 : ye.cacheKey) === J)
      return r._activePaintEraserPreviewInfo.value || null;
    const O = un($), F = (O == null ? void 0 : O.geometry) || null;
    if (F && String(F.geometryKind || "") !== "lasso_fill") {
      const B = Array.isArray(F.rawPoints) && F.rawPoints.length ? F.rawPoints : Array.isArray(F.points) ? F.points : [];
      F.processedPoints = X(B, O.targetSpace, !0);
    }
    const x = c(L.width, L.height, { readback: !0 });
    if (!j(x, O, { w: L.width, h: L.height })) return null;
    const R = ((me = (Q = x.ctx) == null ? void 0 : Q.getImageData(0, 0, L.width, L.height)) == null ? void 0 : me.data) || null;
    if (!R) return null;
    let Z = L.width, he = L.height, ce = -1, be = -1;
    for (let B = 0; B < L.height; B += 1)
      for (let p = 0; p < L.width; p += 1)
        R[(B * L.width + p) * 4 + 3] <= 8 || (p < Z && (Z = p), B < he && (he = B), p > ce && (ce = p), B > be && (be = B));
    if (ce < Z || be < he)
      return r._activePaintEraserPreviewInfo = { cacheKey: J, value: null }, null;
    const Se = {
      surface: x,
      bounds: { minX: Z, minY: he, maxX: ce, maxY: be },
      key: `${J}:${Z}:${he}:${ce}:${be}`
    };
    return r._activePaintEraserPreviewInfo = { cacheKey: J, value: Se }, r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map(), Se;
  }
  function K() {
    r._activePaintEraserPreviewInfo = null, r._liveEraserPreviewCanvasCache = null;
  }
  function fe(v, $, L) {
    var J, O;
    if (!v) return null;
    if (v.type === "rasterObject" && ((J = v.item) != null && J.bbox)) {
      const F = v.item.bbox, x = ((O = v.item) == null ? void 0 : O.transform) || {}, R = Number(F.u0 || 0) + Number(x.du || 0), Z = Number(F.u1 || 0) + Number(x.du || 0), he = Number(F.v0 || 0) + Number(x.dv || 0), ce = Number(F.v1 || 0) + Number(x.dv || 0);
      return {
        minX: Math.floor((R % 1 + 1) % 1 * $),
        maxX: Math.ceil((Z % 1 + 1) % 1 * $),
        minY: Math.floor(Ie(he, 0, 1) * L),
        maxY: Math.ceil(Ie(ce, 0, 1) * L),
        wraps: Z - R >= 1 || R < 0 || Z > 1
      };
    }
    if (v.type === "strokeGroup") {
      const F = ee(v.actionGroupId, "paint"), x = d(v.actionGroupId, "paint", F);
      if (!x) return null;
      const R = x.centerUv.u - x.halfW, Z = x.centerUv.u + x.halfW, he = x.centerUv.v - x.halfH, ce = x.centerUv.v + x.halfH;
      return {
        minX: Math.floor((R % 1 + 1) % 1 * $),
        maxX: Math.ceil((Z % 1 + 1) % 1 * $),
        minY: Math.floor(Ie(he, 0, 1) * L),
        maxY: Math.ceil(Ie(ce, 0, 1) * L),
        wraps: Z - R >= 1 || R < 0 || Z > 1
      };
    }
    return null;
  }
  function se(v, $, L) {
    if (!v || !$) return !1;
    const J = (x) => x.wraps ? [
      { minX: 0, maxX: x.maxX, minY: x.minY, maxY: x.maxY, wraps: !1 },
      { minX: x.minX, maxX: L - 1, minY: x.minY, maxY: x.maxY, wraps: !1 }
    ] : [x], O = J(v), F = J($);
    return O.some((x) => F.some((R) => !(x.maxX < R.minX || R.maxX < x.minX || x.maxY < R.minY || R.maxY < x.minY)));
  }
  function Y(v, $, L) {
    var P, U, ge, D, re, Ne, xe;
    if (!v || !$ || !((P = L == null ? void 0 : L.surface) != null && P.canvas) || $.type !== "rasterObject") return v;
    const J = Number(v.width || L.surface.canvas.width || 0), O = Number(v.height || L.surface.canvas.height || 0);
    if (J < 1 || O < 1) return v;
    const F = fe($, J, O);
    if (F && !se(F, L.bounds, J)) return v;
    const x = String(((U = $.item) == null ? void 0 : U.id) || $.id || ""), R = ((ge = $.item) == null ? void 0 : ge.transform) || {}, Z = `${L.key}:${x}:${J}:${O}:${Number(R.du || 0).toFixed(6)}:${Number(R.dv || 0).toFixed(6)}:${Number(R.rot_deg || 0).toFixed(3)}:${Number(R.scale || 1).toFixed(4)}`, he = r._liveEraserPreviewCanvasCache instanceof Map ? r._liveEraserPreviewCanvasCache : r._liveEraserPreviewCanvasCache = /* @__PURE__ */ new Map();
    if (he.has(Z)) return he.get(Z);
    const ce = Ie(Math.floor(Number(((D = L.bounds) == null ? void 0 : D.minX) || 0)), 0, Math.max(0, J - 1)), be = Ie(Math.floor(Number(((re = L.bounds) == null ? void 0 : re.minY) || 0)), 0, Math.max(0, O - 1)), Se = Ie(Math.ceil(Number(((Ne = L.bounds) == null ? void 0 : Ne.maxX) || 0)), ce, Math.max(0, J - 1)), ye = Ie(Math.ceil(Number(((xe = L.bounds) == null ? void 0 : xe.maxY) || 0)), be, Math.max(0, O - 1)), Q = Math.max(1, Se - ce + 1), me = Math.max(1, ye - be + 1), B = c(J, O, { readback: !0 });
    B.ctx.clearRect(0, 0, J, O), B.ctx.drawImage(v, 0, 0);
    const p = B.ctx.getImageData(ce, be, Q, me);
    B.ctx.save(), B.ctx.globalCompositeOperation = "destination-out", B.ctx.drawImage(L.surface.canvas, 0, 0), B.ctx.restore();
    const N = B.ctx.getImageData(ce, be, Q, me);
    let S = !1;
    for (let Pe = 0; Pe < Q * me; Pe += 1) {
      const Ce = p.data[Pe * 4 + 3], Le = N.data[Pe * 4 + 3];
      if (Ce > Le) {
        S = !0;
        break;
      }
    }
    return S ? (he.size > 64 && he.clear(), he.set(Z, B.canvas), B.canvas) : (he.set(Z, v), v);
  }
  function k(v, $ = null) {
    const L = I((v == null ? void 0 : v.rasterObjectId) || (v == null ? void 0 : v.id) || ""), J = (v == null ? void 0 : v.bbox) || null;
    if (!L || !J) return null;
    const O = G(v, $);
    if (!O || !(O.complete || O.width || O.naturalWidth)) return null;
    const { width: F, height: x } = H(), R = (v == null ? void 0 : v.transform) || {}, Z = [
      L,
      F,
      x,
      J.u0,
      J.v0,
      J.u1,
      J.v1,
      R.du,
      R.dv,
      R.rot_deg,
      R.scale,
      _()
    ].join(":"), he = i.get(Z);
    if (he) return he;
    i.size > 64 && i.clear();
    const ce = rn({ label: "editor.raster-erp" });
    ce.width = F, ce.height = x;
    const be = ce.getContext("2d");
    return be ? (d0(be, O, v, F, x), i.set(Z, ce), ce) : null;
  }
  async function ne(v, $) {
    const L = await new Promise((R) => v.toBlob(R, "image/png")), J = new FormData();
    J.append("image", L, $), J.append("type", "input"), J.append("subfolder", "panorama_stickers"), J.append("overwrite", "1");
    const O = await t.fetchApi("/upload/image", { method: "POST", body: J });
    if (!O || O.status !== 200) throw new Error(`upload failed (${O == null ? void 0 : O.status})`);
    const F = await O.json(), x = String((F == null ? void 0 : F.name) || "").trim();
    if (!x) throw new Error("upload response missing filename");
    return {
      type: "comfy_image",
      filename: x,
      subfolder: String((F == null ? void 0 : F.subfolder) || "panorama_stickers"),
      storage: String((F == null ? void 0 : F.type) || "input")
    };
  }
  let ue = null, _e = !1;
  function we() {
    const v = Ap(a.painting), { width: $, height: L } = f();
    return Uv(a.painting_layer, { paintCount: v.totalPaintCount, maskCount: v.totalMaskCount, width: $, height: L, nodeId: String(n.id ?? "0") });
  }
  function C() {
    const v = String(n.id ?? "0"), $ = fa.get(v);
    if (_e && $) return $;
    const L = (async () => {
      var F, x, R, Z, he, ce, be, Se, ye, Q, me, B;
      const J = m(), O = Ap(a.painting);
      if (O.totalPaintCount <= 0 && O.totalMaskCount <= 0) {
        a.painting_layer !== null && (a.painting_layer = null, ue = J, l());
        return;
      }
      if (ue !== J && !_e) {
        _e = !0;
        try {
          W();
          const p = g(!1), N = ((x = (F = r.paintEngine) == null ? void 0 : F.getErpTarget) == null ? void 0 : x.call(F, p)) || null, S = ((R = N == null ? void 0 : N.displayPaint) == null ? void 0 : R.canvas) || null, P = ((Z = N == null ? void 0 : N.committedMask) == null ? void 0 : Z.canvas) || null, U = Math.max(1, Number(((he = N == null ? void 0 : N.descriptor) == null ? void 0 : he.width) || (S == null ? void 0 : S.width) || (P == null ? void 0 : P.width) || 2048)), ge = Math.max(1, Number(((ce = N == null ? void 0 : N.descriptor) == null ? void 0 : ce.height) || (S == null ? void 0 : S.height) || (P == null ? void 0 : P.height) || 1024));
          (!S && O.totalPaintCount > 0 || !P && O.totalMaskCount > 0) && ((!r._paintLayerSyncBlankSurface || Number(((be = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : be.width) || 0) !== U || Number(((Se = r._paintLayerSyncBlankSurface.canvas) == null ? void 0 : Se.height) || 0) !== ge) && (r._paintLayerSyncBlankSurface = c(U, ge)), r._paintLayerSyncBlankSurface.ctx.clearRect(0, 0, U, ge));
          const D = S || O.totalPaintCount > 0 && ((ye = r._paintLayerSyncBlankSurface) == null ? void 0 : ye.canvas) || null, re = P || O.totalMaskCount > 0 && ((Q = r._paintLayerSyncBlankSurface) == null ? void 0 : Q.canvas) || null;
          if (!D && !re) return;
          let Ne = null, xe = null;
          const Pe = [];
          if (O.totalPaintCount > 0) {
            Ne = await ne(D, `pano_paint_${v}.png`);
            for (const Ce of p) {
              const Le = String(Ce || "").trim();
              if (!Le) continue;
              const je = ((B = (me = r.paintEngine) == null ? void 0 : me.getGroupDisplayCanvas) == null ? void 0 : B.call(me, Le)) || null;
              if (!je) continue;
              const Ke = Le.replace(/[^a-zA-Z0-9_-]+/g, "_"), $e = await ne(je, `pano_group_${v}_${Ke}.png`);
              $e && Pe.push({
                id: Le,
                actionGroupId: Le,
                image: $e
              });
            }
          }
          O.totalMaskCount > 0 && (xe = await ne(re, `pano_mask_${v}.png`)), J === m() && (a.painting_layer = {
            paint: Ne,
            mask: xe,
            groups: Pe,
            revision: J
          }, ue = J, l());
        } catch (p) {
          throw p;
        } finally {
          _e = !1;
        }
      }
    })();
    return fa.set(v, L), L.finally(() => {
      fa.get(v) === L && fa.delete(v);
    }), L;
  }
  function le(v) {
    var x;
    const $ = ((x = r.paintEngine) == null ? void 0 : x.getMaskDisplayCanvas()) || null;
    if (!$) return v;
    const L = `mask_display:${r.paintEngine.getMaskDisplayRevision()}`, J = v.reduce((R, Z) => Math.max(R, Number((Z == null ? void 0 : Z.zIndex) || 0)), -1), O = (Array.isArray(a.stickers) ? a.stickers : []).reduce((R, Z) => Math.max(R, Number((Z == null ? void 0 : Z.z_index) || 0)), -1), F = Math.max(J, O);
    return v.push({
      id: "mask_display",
      source: $,
      revision: L,
      zIndex: F + 1,
      opacity: 1,
      visible: !0
    }), v;
  }
  function b() {
    var J, O;
    const v = w(!0), $ = T(), L = [];
    for (const F of v) {
      if ((F == null ? void 0 : F.type) === "strokeGroup") {
        const x = String(F.actionGroupId || F.id || "");
        if (!x) continue;
        const R = ((O = (J = r.paintEngine) == null ? void 0 : J.getGroupDisplayCanvas) == null ? void 0 : O.call(J, x)) || null;
        if (!R) continue;
        L.push({
          id: `paint_group:${x}`,
          source: R,
          revision: `${h()}:${x}`,
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: !0
        });
        continue;
      }
      if ((F == null ? void 0 : F.type) === "rasterObject") {
        const x = F.item || null, R = I((x == null ? void 0 : x.id) || F.id || "");
        if (!R) continue;
        const Z = k(x, () => ie());
        if (!Z) continue;
        const he = Y(Z, F, $), ce = (x == null ? void 0 : x.transform) || {};
        L.push({
          id: `raster:${R}`,
          source: he,
          revision: [
            m(),
            ($ == null ? void 0 : $.key) || "",
            R,
            Number(ce.du || 0).toFixed(6),
            Number(ce.dv || 0).toFixed(6),
            Number(ce.rot_deg || 0).toFixed(3),
            Number(ce.scale || 1).toFixed(4)
          ].join(":"),
          zIndex: Number((F == null ? void 0 : F.z_index) || 0),
          opacity: 1,
          visible: (x == null ? void 0 : x.visible) !== !1
        });
      }
    }
    return le(L);
  }
  function y() {
    return te() ? b().filter((v) => v.visible !== !1).map((v) => ({ id: v.id, media: v.source, revision: v.revision, opacity: v.opacity, zIndex: v.zIndex })) : [];
  }
  function E() {
    a.painting_layer !== null && (a.painting_layer = null), ue = "";
  }
  return {
    connect(v) {
      ({
        commitState: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        getActivePaintTargetDescriptor: u,
        getDesiredPaintTargetDescriptor: f,
        getDisplayPaintRevisionKey: h,
        getOrderedDisplayListObjects: w,
        getOrderedPaintGroupIds: g,
        getPaintingCompositeRevisionKey: m,
        getPaintingRevisionKey: _,
        getStrokeGroupStrokes: ee,
        inverseTransformErpPointAround: V,
        paintingShown: te,
        parseRasterObjectSelectionId: I,
        processFreehandPoints: X,
        rasterizeStrokeToSurface: j,
        rebuildPaintEngineIfNeeded: W,
        requestDraw: ie,
        screenPosToErpPoint: pe,
        shortestWrappedDelta: q
      } = v);
    },
    getSharedLivePaintSurface: ae,
    getLivePaintRevisionSuffix: ve,
    isPaintCompositeInteraction: de,
    hitRasterObjectAt: M,
    invalidateLivePaintPreviewCaches: K,
    buildRasterObjectEditCanvas: k,
    needsPaintingLayerSync: we,
    syncPaintingLayerAsync: C,
    invalidatePaintingLayerState: E,
    buildEditorViewPaintLayers: y
  };
}
function a2(e) {
  const {
    editor: t,
    runtime: r,
    state: n
  } = e;
  let i, o, s, a;
  function l(Y) {
    return !Y || typeof Y != "object" ? { x: 0, y: 0 } : { x: Number((Y == null ? void 0 : Y.u) || 0), y: Number((Y == null ? void 0 : Y.v) || 0) };
  }
  function c(Y, k, ne, ue = {}) {
    return { ...{
      ...Y,
      t: Number((Y == null ? void 0 : Y.t) || 0),
      widthScale: f(Y, "widthScale", 1),
      pressureLike: f(Y, "pressureLike", 1)
    }, ...ue, u: k, v: ne };
  }
  function d(Y, k = !1) {
    return k ? 12e-4 : 18e-4;
  }
  function u(Y, k, ne = !1) {
    if (!Array.isArray(Y) || !Y.length) return [];
    const ue = String((k == null ? void 0 : k.kind) || "") === "ERP_GLOBAL", _e = /* @__PURE__ */ new WeakMap();
    if (ue) {
      let O = null;
      Y.forEach((F) => {
        const x = Number((F == null ? void 0 : F.u) || 0), R = Number((F == null ? void 0 : F.v) || 0), Z = (x % 1 + 1) % 1, he = O == null ? Z : O + a(Z, (O % 1 + 1) % 1);
        _e.set(F, { x: he, y: R }), O = he;
      });
    }
    const we = (O) => !O || typeof O != "object" ? { x: 0, y: 0 } : _e.get(O) || l(O), C = (O, F, x, R = {}) => {
      const Z = ue ? (Number(F) % 1 + 1) % 1 : Number(F), he = c(O, Z, x, R);
      return _e.set(he, { x: Number(F), y: Number(x) }), he;
    }, le = (O, F, x) => {
      const R = we(O), Z = we(F);
      return C(O, Bn(R.x, Z.x, x), Bn(R.y, Z.y, x), {
        t: Bn(Number((O == null ? void 0 : O.t) || 0), Number((F == null ? void 0 : F.t) || 0), x),
        widthScale: Bn(f(O, "widthScale", 1), f(F, "widthScale", 1), x),
        pressureLike: Bn(f(O, "pressureLike", 1), f(F, "pressureLike", 1), x)
      });
    };
    if (Y.length === 1) {
      const O = we(Y[0]);
      return [C(Y[0], O.x, O.y)];
    }
    const b = d(k, ne), y = (O, F) => {
      const x = [0];
      for (let Q = 1; Q < O.length; Q += 1) {
        const me = we(O[Q - 1]), B = we(O[Q]);
        x.push(x[Q - 1] + Math.hypot(B.x - me.x, B.y - me.y));
      }
      const R = x[x.length - 1] || 0;
      if (R <= 1e-8) {
        const Q = O[0], me = we(Q);
        return [C(Q, me.x, me.y)];
      }
      const Z = [];
      let he = 0;
      for (let Q = 0; Q <= R + 1e-9; Q += F) {
        for (; he < x.length - 2 && x[he + 1] < Q; ) he += 1;
        const me = x[he], B = x[he + 1], p = Math.max(1e-8, B - me);
        Z.push(le(O[he], O[he + 1], Ie((Q - me) / p, 0, 1)));
      }
      const ce = O[O.length - 1], be = we(ce), Se = Z[Z.length - 1], ye = Se ? we(Se) : null;
      return (!ye || Math.hypot(ye.x - be.x, ye.y - be.y) > F * 0.35) && Z.push(C(ce, be.x, be.y)), Z;
    }, E = (O) => {
      if (!Array.isArray(O) || O.length < 3) return O ? O.slice() : [];
      const F = we(O[0]), x = [C(O[0], F.x, F.y)];
      for (let he = 0; he < O.length - 1; he += 1) {
        const ce = O[he], be = O[he + 1], Se = we(ce), ye = we(be), Q = C(
          ce,
          Se.x * 0.75 + ye.x * 0.25,
          Se.y * 0.75 + ye.y * 0.25,
          {
            t: Number(ce.t || 0) * 0.75 + Number(be.t || 0) * 0.25,
            widthScale: f(ce, "widthScale", 1) * 0.75 + f(be, "widthScale", 1) * 0.25,
            pressureLike: f(ce, "pressureLike", 1) * 0.75 + f(be, "pressureLike", 1) * 0.25
          }
        ), me = C(
          ce,
          Se.x * 0.25 + ye.x * 0.75,
          Se.y * 0.25 + ye.y * 0.75,
          {
            t: Number(ce.t || 0) * 0.25 + Number(be.t || 0) * 0.75,
            widthScale: f(ce, "widthScale", 1) * 0.25 + f(be, "widthScale", 1) * 0.75,
            pressureLike: f(ce, "pressureLike", 1) * 0.25 + f(be, "pressureLike", 1) * 0.75
          }
        );
        x.push(Q, me);
      }
      const R = O[O.length - 1], Z = we(R);
      return x.push(C(R, Z.x, Z.y)), x;
    }, v = y(Y, b);
    if (v.length < 3) return v;
    const $ = ne ? 2 : 1;
    let L = v.slice();
    for (let O = 0; O < $; O += 1) L = E(L);
    return y(L, Math.max(b * 0.75, 55e-5));
  }
  function f(Y, k, ne = 1) {
    const ue = Number(Y == null ? void 0 : Y[k]);
    return Number.isFinite(ue) ? Math.max(0, ue) : ne;
  }
  function h(Y) {
    const k = Number(Y == null ? void 0 : Y.radiusValue);
    if (Number.isFinite(k) && k > 0) {
      const ne = String((Y == null ? void 0 : Y.radiusModel) || "").trim() || "erp_uv_norm";
      return ne === "world_angle" ? {
        model: "erp_uv_norm",
        value: Math.max(1e-6, Number((Y == null ? void 0 : Y.size) || 10) * 0.5 / 2048)
      } : {
        model: ne,
        value: k
      };
    }
    return {
      model: "erp_uv_norm",
      value: Math.max(1e-6, Number((Y == null ? void 0 : Y.size) || 10) * 0.5 / 2048)
    };
  }
  function w(Y, k, ne = {}) {
    const ue = rn({ label: "editor.raster-surface" });
    ue.width = Math.max(1, Math.round(Y)), ue.height = Math.max(1, Math.round(k));
    const _e = ue.getContext("2d", ne.readback ? { willReadFrequently: !0 } : void 0);
    return _e && (_e.clearRect(0, 0, ue.width, ue.height), _e.imageSmoothingEnabled = !0), { canvas: ue, ctx: _e };
  }
  function g() {
    const Y = pe();
    return `${String(t.paintStrokeRevision)}:${Y.width}x${Y.height}`;
  }
  function m() {
    const Y = pe();
    return `${String(t.paintStrokeRevision)}:${String(t.paintCompositeRevision)}:${Y.width}x${Y.height}`;
  }
  function _() {
    const Y = i(), k = m();
    return Y ? `${k}:${Y}` : k;
  }
  function ee() {
    t.paintStrokeRevision += 1, t.paintCompositeRevision += 1;
  }
  function V() {
    t.paintCompositeRevision += 1;
  }
  function te() {
    t._sortedItemsCache = null, t._strokeGeomCache.clear();
  }
  function I() {
    var Y, k;
    t.paintEngineRevisionKey = null, (k = (Y = t.paintEngine) == null ? void 0 : Y.rebuildCommitted) == null || k.call(Y, n), t.paintEngineRevisionKey = g();
  }
  function X() {
    te(), r.backgroundDirty = !0, r.dirty = !0;
  }
  function j({ rebuildPaintEngine: Y = !1 } = {}) {
    o(), ee(), X(), Y && I();
  }
  function W() {
    o(), V(), X();
  }
  function ie() {
    var ue;
    const Y = pe(), k = `${Y.width}x${Y.height}`;
    t.paintEngineDescriptorKey !== k && (t.paintEngine = Il(Y), t.paintEngineDescriptorKey = k, t.paintEngineRevisionKey = "");
    const ne = g();
    t.paintEngineRevisionKey !== ne && (t.paintEngineRevisionKey = ne, (ue = t.paintEngine) == null || ue.rebuildCommitted(n));
  }
  function pe() {
    const Y = Math.max(1, s(Number((n == null ? void 0 : n.output_preset) || 2048)));
    return {
      kind: "ERP_GLOBAL",
      width: Y,
      height: Math.max(1, Math.round(Y * 0.5))
    };
  }
  function q() {
    return pe();
  }
  function de(Y, k, ne, ue, _e = null) {
    const we = h(Y), C = f(k, "widthScale", 1) * f(k, "pressureLike", 1);
    return we.model === "erp_uv_norm" ? Math.max(0.5, we.value * ne * C) : we.model === "world_angle" ? _e ? Math.max(0.5, we.value / Math.max(1e-6, Number(_e.hFOV_deg || 90) * _r) * ne * C) : Math.max(0.5, we.value / (2 * Math.PI) * ne * C) : Math.max(0.5, Number((Y == null ? void 0 : Y.size) || 10) * 0.5 * C);
  }
  function ae(Y, k, ne = {}) {
    const ue = String((k == null ? void 0 : k.layerKind) || "paint"), _e = String((k == null ? void 0 : k.toolKind) || "pen"), we = ne.preview === !0, C = we ? 0.78 : 1;
    if (Y.globalAlpha = _e === "marker" ? 0.7 * C : 1, ue === "mask") {
      Y.fillStyle = we ? "rgba(34, 197, 94, 0.75)" : "rgba(255,255,255,1)";
      return;
    }
    if (_e === "eraser") {
      Y.globalCompositeOperation = "destination-out", Y.fillStyle = "rgba(0,0,0,1)";
      return;
    }
    const le = String((k == null ? void 0 : k.layerKind) || "") === "mask" ? { r: 0, g: 0, b: 0, a: 1 } : (k == null ? void 0 : k.color) || { r: 1, g: 0.25, b: 0.25, a: 1 }, b = we ? Math.max(0.28, Number(le.a ?? 1) * 0.88) : Math.max(0.12, Number(le.a ?? 1));
    Y.fillStyle = `rgba(${Math.round(Number(le.r || 0) * 255)}, ${Math.round(Number(le.g || 0) * 255)}, ${Math.round(Number(le.b || 0) * 255)}, ${b})`;
  }
  function ve(Y, k, ne) {
    const ue = Math.max(0.5, Math.min(ne, Number((k == null ? void 0 : k.radiusPx) || 0.5)));
    !Number.isFinite(k == null ? void 0 : k.x) || !Number.isFinite(k == null ? void 0 : k.y) || !Number.isFinite(ue) || (Y.beginPath(), Y.arc(Number(k.x || 0), Number(k.y || 0), ue, 0, Math.PI * 2), Y.fill());
  }
  function G(Y, k, ne, ue, _e = {}) {
    if (!Y || !Array.isArray(k) || !k.length) return;
    const we = Math.max(ue.w, ue.h) * 0.25;
    Y.save(), ae(Y, ne, _e);
    const C = (le) => ve(Y, le, we);
    if (k.length === 1) {
      C(k[0]), Y.restore();
      return;
    }
    for (let le = 0; le < k.length - 1; le += 1) {
      const b = k[le], y = k[le + 1];
      if (!b || !y) continue;
      const E = Number(b.x || 0), v = Number(b.y || 0), $ = Number(y.x || 0), L = Number(y.y || 0), J = Math.max(0.5, Math.min(we, Number(b.radiusPx || 0.5))), O = Math.max(0.5, Math.min(we, Number(y.radiusPx || 0.5)));
      if (!Number.isFinite(E) || !Number.isFinite(v) || !Number.isFinite($) || !Number.isFinite(L) || !Number.isFinite(J) || !Number.isFinite(O)) continue;
      const F = $ - E, x = L - v, R = Math.hypot(F, x);
      if (!Number.isFinite(R) || R < 1e-6) {
        C(b);
        continue;
      }
      if (R > Math.max(ue.w, ue.h) * 0.5) continue;
      const Z = Math.max(0.5, Math.min(J, O)), he = Math.max(0.35, Math.min(Z * 0.4, 2.25)), ce = Math.max(1, Math.ceil(R / he));
      for (let be = 0; be <= ce; be += 1) {
        const Se = be / ce;
        C({
          x: Bn(E, $, Se),
          y: Bn(v, L, Se),
          radiusPx: Bn(J, O, Se)
        });
      }
    }
    C(k[k.length - 1]), Y.restore();
  }
  function A(Y, k, ne, ue) {
    G(Y, k, ne, ue, { preview: !1 });
  }
  function z(Y, k, ne, ue, _e) {
    var le, b, y, E;
    if (!Y || !Array.isArray(k) || k.length < 3) return;
    const we = "u", C = "v";
    if (Y.save(), String((ne == null ? void 0 : ne.layerKind) || "") === "mask")
      Y.fillStyle = "rgba(255,255,255,1)";
    else if (String((ne == null ? void 0 : ne.toolKind) || "") === "eraser")
      Y.globalCompositeOperation = "destination-out", Y.fillStyle = "rgba(0,0,0,1)";
    else {
      const v = (ne == null ? void 0 : ne.color) || { r: 1, g: 0.25, b: 0.25, a: 1 };
      Y.fillStyle = `rgba(${Math.round(Number(v.r || 0) * 255)}, ${Math.round(Number(v.g || 0) * 255)}, ${Math.round(Number(v.b || 0) * 255)}, ${Number(v.a ?? 1)})`;
    }
    Y.beginPath(), Y.moveTo(Number(((le = k[0]) == null ? void 0 : le[we]) || 0) * ue.w, Number(((b = k[0]) == null ? void 0 : b[C]) || 0) * ue.h);
    for (let v = 1; v < k.length; v += 1)
      Y.lineTo(Number(((y = k[v]) == null ? void 0 : y[we]) || 0) * ue.w, Number(((E = k[v]) == null ? void 0 : E[C]) || 0) * ue.h);
    Y.closePath(), Y.fill(), Y.restore();
  }
  function M(Y) {
    const k = (Y == null ? void 0 : Y.geometry) || null;
    return k ? String(k.geometryKind || "") === "lasso_fill" ? Array.isArray(k.points) ? k.points : [] : Array.isArray(k.processedPoints) && k.processedPoints.length ? k.processedPoints : Array.isArray(k.rawPoints) && k.rawPoints.length ? k.rawPoints : Array.isArray(k.points) ? k.points : [] : [];
  }
  function H(Y, k) {
    const ne = M(Y);
    return !Array.isArray(ne) || !ne.length ? [] : ne.map((ue) => ({
      x: Number((ue == null ? void 0 : ue.u) || 0) * Number((k == null ? void 0 : k.w) || 1),
      y: Number((ue == null ? void 0 : ue.v) || 0) * Number((k == null ? void 0 : k.h) || 1),
      radiusPx: de(Y, ue, Number((k == null ? void 0 : k.w) || 1), Number((k == null ? void 0 : k.h) || 1))
    }));
  }
  function T(Y, k, ne = null) {
    var le, b, y, E;
    if (!(Y != null && Y.ctx) || !k) return !1;
    const ue = ne || { w: Number(((le = Y.canvas) == null ? void 0 : le.width) || 0), h: Number(((b = Y.canvas) == null ? void 0 : b.height) || 0) }, _e = String((k == null ? void 0 : k.toolKind) || "") === "eraser" ? {
      ...k,
      layerKind: "mask",
      toolKind: String(((y = k == null ? void 0 : k.geometry) == null ? void 0 : y.geometryKind) || "") === "lasso_fill" ? "lasso_fill" : "pen"
    } : k;
    if (String(((E = k == null ? void 0 : k.geometry) == null ? void 0 : E.geometryKind) || "") === "lasso_fill")
      return z(Y.ctx, M(_e), _e, ue), !0;
    const C = H(_e, ue);
    return C.length ? (A(Y.ctx, C, _e, ue), !0) : !1;
  }
  function K(Y, k, ne, ue = 8) {
    const _e = new Uint8Array(k * ne), we = [], C = new Int32Array(k * ne), le = new Int32Array(k * ne);
    for (let b = 0; b < ne; b += 1)
      for (let y = 0; y < k; y += 1) {
        const E = b * k + y;
        if (_e[E] || Y[E] <= ue) continue;
        let v = 0, $ = 0;
        C[$] = y, le[$] = b, $ += 1, _e[E] = 1;
        const L = [];
        let J = y, O = b, F = y, x = b;
        for (; v < $; ) {
          const R = C[v], Z = le[v];
          v += 1, L.push({ x: R, y: Z }), R < J && (J = R), Z < O && (O = Z), R > F && (F = R), Z > x && (x = Z);
          const he = [
            [(R - 1 + k) % k, Z],
            [(R + 1) % k, Z],
            [R, Z - 1],
            [R, Z + 1]
          ];
          for (const [ce, be] of he) {
            if (be < 0 || be >= ne) continue;
            const Se = be * k + ce;
            _e[Se] || Y[Se] <= ue || (_e[Se] = 1, C[$] = ce, le[$] = be, $ += 1);
          }
        }
        we.push({ pixels: L, minX: J, minY: O, maxX: F, maxY: x });
      }
    return we;
  }
  function fe(Y, k) {
    const ne = [...new Set((Array.isArray(Y == null ? void 0 : Y.pixels) ? Y.pixels : []).map((b) => Number((b == null ? void 0 : b.x) || 0)).filter((b) => Number.isFinite(b)))].sort((b, y) => b - y);
    if (!ne.length) return null;
    if (ne.length === 1)
      return { startX: ne[0], widthPx: 1 };
    let ue = -1, _e = 0;
    for (let b = 0; b < ne.length; b += 1) {
      const y = ne[b], v = (b === ne.length - 1 ? ne[0] + k : ne[b + 1]) - y - 1;
      v > ue && (ue = v, _e = b);
    }
    const we = (ne[(_e + 1) % ne.length] + k) % k;
    let C = 1 / 0, le = -1 / 0;
    for (const b of ne) {
      const y = (b - we + k) % k;
      C = Math.min(C, y), le = Math.max(le, y);
    }
    return {
      startX: we,
      widthPx: Math.max(1, le - C + 1)
    };
  }
  function se(Y, k, ne = {}) {
    var y;
    const ue = Number((Y == null ? void 0 : Y.width) || 0), _e = Number((Y == null ? void 0 : Y.height) || 0), we = (y = Y == null ? void 0 : Y.getContext) == null ? void 0 : y.call(Y, "2d");
    if (!we || ue < 1 || _e < 1) return [];
    const C = we.getImageData(0, 0, ue, _e), le = new Uint8Array(ue * _e);
    for (let E = 0; E < le.length; E += 1) le[E] = C.data[E * 4 + 3];
    return K(le, ue, _e, 8).map((E, v) => {
      const $ = fe(E, ue);
      if (!$) return null;
      const L = Number($.widthPx || 0), J = E.maxY - E.minY + 1, O = Number($.startX || 0), F = rn({ label: "editor.lasso-fill" });
      F.width = L, F.height = J;
      const x = F.getContext("2d");
      if (!x) return null;
      const R = x.createImageData(L, J);
      return E.pixels.forEach(({ x: Z, y: he }) => {
        const ce = (he * ue + Z) * 4, be = (Number(Z || 0) - O + ue) % ue, Se = ((he - E.minY) * L + be) * 4;
        R.data[Se + 0] = C.data[ce + 0], R.data[Se + 1] = C.data[ce + 1], R.data[Se + 2] = C.data[ce + 2], R.data[Se + 3] = C.data[ce + 3];
      }), x.putImageData(R, 0, 0), {
        id: Qi("raster"),
        type: "raster_frozen",
        layerKind: k === "mask" ? "mask" : "paint",
        z_index: Number((ne == null ? void 0 : ne.z_index) || 0) + v * 1e-3,
        locked: (ne == null ? void 0 : ne.locked) === !0,
        bbox: {
          u0: 0,
          v0: E.minY / _e,
          u1: L / ue,
          v1: (E.maxY + 1) / _e
        },
        rasterDataUrl: F.toDataURL("image/png"),
        transform: {
          du: O / ue,
          dv: 0,
          rot_deg: 0,
          scale: 1
        }
      };
    }).filter(Boolean);
  }
  return {
    connect(Y) {
      ({
        getLivePaintRevisionSuffix: i,
        invalidatePaintingLayerState: o,
        resolveEditorOutputPresetWidth: s,
        shortestWrappedDelta: a
      } = Y);
    },
    processFreehandPoints: u,
    createRasterSurface: w,
    getPaintingRevisionKey: g,
    getPaintingCompositeRevisionKey: m,
    getDisplayPaintRevisionKey: _,
    refreshPaintEngineRevisionCache: I,
    markObjectVisualsDirty: X,
    markPaintStrokeVisualsDirty: j,
    markPaintCompositeVisualsDirty: W,
    rebuildPaintEngineIfNeeded: ie,
    getDesiredPaintTargetDescriptor: pe,
    getActivePaintTargetDescriptor: q,
    rasterizeStrokeToSurface: T,
    createRasterFrozenObjectsFromCanvas: se
  };
}
function l2(e) {
  const {
    comfyMedia: t,
    editor: r,
    node: n,
    readOnly: i,
    state: o,
    type: s
  } = e;
  let a, l, c, d, u, f, h;
  function w(ie, pe = null) {
    var q;
    if (ie && typeof ie == "object" && !Array.isArray(ie)) return ie;
    if (Array.isArray(ie) && ie.length > 0) {
      const de = ie[0];
      if (de && typeof de == "object" && !Array.isArray(de)) return de;
    }
    if (Array.isArray(pe) && pe.length > 0) {
      const de = (q = pe[0]) == null ? void 0 : q.parsed_state;
      if (de && typeof de == "object" && !Array.isArray(de))
        return {
          yaw_deg: Number(de.yaw_deg || 0),
          pitch_deg: Number(de.pitch_deg || 0),
          hFOV_deg: Number(de.hFOV_deg || 30),
          rot_deg: Number(de.roll_deg || 0)
        };
    }
    return null;
  }
  function g(ie, pe, q) {
    const de = Math.max(1, Number(pe || 1)), ae = Math.max(1, Number(q || 1)), ve = Ie(Number(ie || 30), 0.1, 179) * _r, G = 2 * Math.atan(Math.tan(ve * 0.5) * (ae / de));
    return Ie(G * Oi, 0.1, 179);
  }
  function m(ie) {
    const pe = String(ie || "").trim();
    if (!pe) return null;
    try {
      const q = JSON.parse(pe);
      if (!q || typeof q != "object" || String(q.kind || "") !== "pano_sticker_state") return null;
      const de = q.version;
      let ae = null;
      if (typeof de == "number" && Number.isInteger(de) ? ae = de : typeof de == "string" && /^\d+$/.test(de) && (ae = Number.parseInt(de, 10)), ae !== 1) return null;
      const ve = q.pose;
      if (!ve || typeof ve != "object") return null;
      const G = Number(ve.yaw_deg), A = Number(ve.pitch_deg), z = Number(ve.roll_deg), M = Number(ve.hFOV_deg);
      if (![G, A, z, M].every((fe) => Number.isFinite(fe))) return null;
      let H = ((G + 180) % 360 + 360) % 360 - 180;
      Object.is(H, -0) && (H = 0);
      const T = {
        yaw_deg: H,
        pitch_deg: Ie(A, -89.9, 89.9),
        roll_deg: z,
        hFOV_deg: Ie(M, 0.1, 179)
      }, K = Number(q.source_aspect);
      return Number.isFinite(K) && K > 0 && (T.source_aspect = K), T;
    } catch {
      return null;
    }
  }
  function _(ie) {
    const pe = Number(ie == null ? void 0 : ie.yaw_deg), q = Number(ie == null ? void 0 : ie.pitch_deg), de = Number((ie == null ? void 0 : ie.roll_deg) ?? (ie == null ? void 0 : ie.rot_deg)), ae = Number(ie == null ? void 0 : ie.hFOV_deg), ve = Ti(ie);
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(pe) ? pe : 0),
        pitch_deg: Ie(Number.isFinite(q) ? q : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(de) ? de : 0,
        hFOV_deg: Ie(Number.isFinite(ae) ? ae : 90, 0.1, 179)
      },
      source_aspect: ve
    };
  }
  function ee(ie) {
    var A;
    if (!ie || typeof ie != "object") return _(null);
    const pe = Number(ie == null ? void 0 : ie.yaw_deg), q = Number(ie == null ? void 0 : ie.pitch_deg), de = Number((ie == null ? void 0 : ie.roll_deg) ?? (ie == null ? void 0 : ie.rot_deg)), ae = Number(ie == null ? void 0 : ie.hFOV_deg), ve = Number(ie == null ? void 0 : ie.vFOV_deg);
    let G = 1;
    if (Number.isFinite(ae) && Number.isFinite(ve)) {
      const z = Ie(ae, 0.1, 179) * _r, M = Ie(ve, 0.1, 179) * _r, H = Math.tan(M * 0.5);
      if (Math.abs(H) > 1e-6) {
        const T = Math.tan(z * 0.5) / H;
        Number.isFinite(T) && T > 0 && (G = T);
      }
    }
    if (ie != null && ie.asset_id && ((A = o == null ? void 0 : o.assets) != null && A[ie.asset_id])) {
      const z = o.assets[ie.asset_id], M = Number((z == null ? void 0 : z.w) || 0), H = Number((z == null ? void 0 : z.h) || 0);
      M > 0 && H > 0 && (G = M / H);
    }
    return {
      kind: "pano_sticker_state",
      version: 1,
      pose: {
        yaw_deg: Ht(Number.isFinite(pe) ? pe : 0),
        pitch_deg: Ie(Number.isFinite(q) ? q : 0, -89.9, 89.9),
        roll_deg: Number.isFinite(de) ? de : 0,
        hFOV_deg: Ie(Number.isFinite(ae) ? ae : 30, 0.1, 179)
      },
      source_aspect: G
    };
  }
  function V(ie) {
    return t.linkedValue(n, ie);
  }
  function te(ie, pe, q) {
    const de = ie && typeof ie == "object" ? {
      yaw_deg: Number(ie.yaw_deg || 0),
      pitch_deg: Number(ie.pitch_deg || 0),
      roll_deg: Number(ie.rot_deg ?? ie.roll_deg ?? 0),
      hFOV_deg: Number(ie.hFOV_deg || 30)
    } : m(pe);
    if (de) {
      const G = Number((q == null ? void 0 : q.naturalWidth) || (q == null ? void 0 : q.width) || de.source_aspect || 1), A = Number((q == null ? void 0 : q.naturalHeight) || (q == null ? void 0 : q.height) || 1);
      return {
        yaw_deg: Number(de.yaw_deg || 0),
        pitch_deg: Number(de.pitch_deg || 0),
        hFOV_deg: Number(de.hFOV_deg || 30),
        vFOV_deg: g(de.hFOV_deg, G, A),
        rot_deg: Number(de.roll_deg || 0)
      };
    }
    const ae = Number((q == null ? void 0 : q.naturalWidth) || (q == null ? void 0 : q.width) || 1), ve = Number((q == null ? void 0 : q.naturalHeight) || (q == null ? void 0 : q.height) || 1);
    return {
      yaw_deg: Number(r.viewYaw || 0),
      pitch_deg: Number(r.viewPitch || 0),
      hFOV_deg: 30,
      vFOV_deg: g(30, ae, ve),
      rot_deg: 0
    };
  }
  function I() {
    const ie = Qt(n, "external-sticker") ? w(c("pano_sticker_input_pose"), null) : null;
    return _g(o, Sg(n, { pose: ie }));
  }
  function X() {
    var A;
    const ie = Array.isArray(n == null ? void 0 : n.inputs) ? n.inputs.findIndex((z) => String((z == null ? void 0 : z.name) || "") === "sticker_image") : -1, pe = ie >= 0 ? ((A = n.getInputLink(ie)) == null ? void 0 : A.id) ?? null : null, q = l(() => {
      ti(n, "image-loaded");
    }), de = w(c("pano_sticker_input_pose"), null), ae = V("sticker_state"), ve = t.externalStateHash(n, ae), G = pe == null ? null : te(de, ae, q);
    return vg(o, {
      connected: pe != null,
      linkId: pe,
      stateHash: ve,
      pose: G,
      imageWidth: Number((q == null ? void 0 : q.naturalWidth) || (q == null ? void 0 : q.width) || 0),
      imageHeight: Number((q == null ? void 0 : q.naturalHeight) || (q == null ? void 0 : q.height) || 0)
    });
  }
  function j(ie = "sync") {
    if (s !== "stickers" || i) return;
    const pe = n.__panoSceneStateV2 ? I() : X();
    if (pe.changed) {
      const q = o.stickers.find(d);
      o.stickers = pe.state.stickers, o.active = pe.state.active, q && r.selectedId === q.id && !o.stickers.some((de) => de.id === q.id) && (r.selectedId = null, r.selectedIds = []), a(), h(), f();
    } else ie === "image-loaded" && h();
    u();
  }
  function W() {
    const ie = Array.isArray(o.stickers) ? o.stickers : [], pe = [];
    for (const q of ie)
      d(q) && (q.visible = !1, pe.push(q));
    return pe;
  }
  return {
    connect(ie) {
      ({
        commitAndRefreshNode: a,
        getExternalStickerPreviewImage: l,
        getNodeUiValue: c,
        isExternalSticker: d,
        requestDraw: u,
        updateSelectionMenu: f,
        updateSidePanel: h
      } = ie);
    },
    computeStickerVFov: g,
    buildCanonicalCutoutStickerState: _,
    buildCanonicalSelectedStickerState: ee,
    reconcileExternalStickerFromInputs: j,
    collectExternalStickersForClearAll: W
  };
}
function Ji(e, t, r, n) {
  const i = Array.isArray(e) ? e.find((o) => String((o == null ? void 0 : o[t]) || "") === String(r || "")) : null;
  i && Object.assign(i, n);
}
function c2(e = {}) {
  return {
    open: !1,
    invertX: !!e.invert_view_x,
    invertY: !!e.invert_view_y
  };
}
function u2({
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
  var V, te;
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
    historyEntries: Array.from({ length: 8 }, (I, X) => ({ index: X, color: null })),
    sizeValue: 10,
    sizeText: "10",
    sizeFill: "7.56%",
    sizeDisabled: !1,
    showSizeRow: !0,
    clearVisible: { paint: !0, mask: !0 },
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
  if (!c) return d;
  const u = ((V = t.find((I) => i(e.paintColor, I.color))) == null ? void 0 : V.id) || "", f = !u, h = o(e.customPaintColor), w = Math.round(Math.max(0, Math.min(1, Number(((te = e.customPaintColor) == null ? void 0 : te.a) ?? 1))) * 100), g = a(e.primaryTool === "paint" ? e.paintTool : e.maskTool), m = e.brushSizes[g] ?? 10, _ = l(), ee = Array.from({ length: 8 }, (I, X) => e.customPaintHistory[X] || null);
  return {
    ...d,
    colorEnabled: e.paintTool !== "eraser",
    activeSwatchId: u,
    customColorActive: f,
    customColorCss: n(e.customPaintColor, 1),
    pickerHueColor: n({ ...s(h.h, 1, 1), a: 1 }, 1),
    pickerSat: `${Math.max(0, Math.min(1, h.s)) * 100}%`,
    pickerVal: `${(1 - Math.max(0, Math.min(1, h.v))) * 100}%`,
    pickerHue: `${Math.max(0, Math.min(1, h.h)) * 100}%`,
    pickerSvLeft: `${Math.max(0, Math.min(1, h.s)) * 100}%`,
    pickerSvTop: `${(1 - Math.max(0, Math.min(1, h.v))) * 100}%`,
    pickerHueLeft: `${Math.max(0, Math.min(1, h.h)) * 100}%`,
    alphaValue: w,
    alphaText: `${w}%`,
    historyEntries: ee.map((I, X) => ({
      index: X,
      color: I ? { cssColor: n(I, 1) } : null
    })),
    sizeValue: m,
    sizeText: String(m),
    sizeFill: `${Math.max(0, Math.min(100, (m - 1) / 119 * 100))}%`,
    sizeDisabled: _,
    activeTools: { paint: e.paintTool, mask: e.maskTool }
  };
}
function d2({ coverage: e, uiSettings: t, normalizeCoverageValue: r }) {
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
const f2 = {
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
function p2(e) {
  const t = [];
  for (const r of e) {
    const [n, i, o] = f2[r.key] || [], s = t[t.length - 1];
    n && (s != null && s.grouped) && s.label === n ? s.fields.push({ ...r, short: i, drag: o }) : t.push({ key: r.key, label: n || r.label, grouped: !!n, fields: [{ ...r, short: i, drag: o }] });
  }
  return t;
}
function Lc(e) {
  const t = Math.abs(Number(e) || 0);
  return t <= 100 ? 100 : 10 ** Math.ceil(Math.log10(t));
}
function h2({ spaceView: e, spaceMode: t, readOnly: r, frameMode: n, showGrid: i }) {
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
        icon: o ? ze.eye : ze.eye_dashed,
        pressed: o ? "true" : "false",
        label: o ? "Hide Grid" : "Show Grid",
        tip: o ? "Hide grid" : "Show grid",
        disabled: !!r || !!n
      }
    }
  };
}
function b0({ hasShot: e, erp: t = !1, hidden: r = !1, studio: n = !1 }) {
  const i = !e || t;
  let o = null;
  return n && i && (r ? o = "The camera is hidden" : o = e ? "A 360° camera has no frame" : "Add a camera to use the Frame view"), { disabled: i, tip: o };
}
function m2(e, { erp: t = !1 } = {}) {
  return !(t && (e === "hFOV_deg" || e === "vFOV_deg"));
}
function g2(e, { port: t = !1 } = {}) {
  return !(t && e === "vFOV_deg");
}
const mo = "erp", y2 = ["1:1", "4:3", "3:2", "16:9"];
function v0(e, { erp: t = !1, coverage: r = 360 } = {}) {
  return [
    ...y2.map((n) => ({ value: n, label: n, active: e === n })),
    ...t ? [{ value: mo, label: Number(r) === 180 ? "180°" : "360°", active: e === mo }] : []
  ];
}
function b2({
  coverage: e,
  readOnly: t,
  selectionPicker: r,
  enabled: n,
  selectedKind: i,
  selectedItems: o,
  params: s,
  notes: a,
  uiSettings: l,
  normalizeCoverageValue: c
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
    rows: p2(s),
    notes: a,
    paramsDisabled: !n,
    uiSettings: t ? null : l,
    footerButtons: [
      { action: "cancel-close", label: "Cancel", primary: !1 },
      { action: "save-close", label: "Save", primary: !0 }
    ]
  };
}
function v2({
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
  iconSet: h,
  // Panorama Studio's shot is its Camera (#89), which is not locked, is deleted from its menu and has
  // the 360° preset.
  cameraShot: w = !1,
  coverage: g = 360
}) {
  if (!(i != null && i.visible)) return { visible: !1, left: 0, top: 0, items: [] };
  let m = [];
  if (r.length > 1)
    m = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!s },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!s },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: o ? "Unlock" : "Lock", tip: o ? "Unlock" : "Lock", icon: o ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!s }
    ];
  else if (n === "stroke")
    m = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!a },
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!a }
    ];
  else if (n === "image") {
    if (m = [
      { key: "bring-front", kind: "button", action: "bring-front", label: "Bring to Front", tip: "Bring to front", icon: h.bring_front, disabled: !!a },
      { key: "send-back", kind: "button", action: "send-back", label: "Send to Back", tip: "Send to back", icon: h.send_back, disabled: !!a }
    ], d(t) || (m.push({ key: "duplicate", kind: "button", action: "duplicate", label: "Duplicate", tip: "Duplicate", icon: h.duplicate }), m.push({ key: "replace-image", kind: "button", action: "replace-image", label: "Replace Image", tip: "Replace image", icon: h.replace_image })), d(t)) {
      const _ = f(), ee = u(t);
      m.push({
        key: "back-initial",
        kind: "button",
        action: "back-initial",
        label: "Back to Initial",
        tip: _ ? "Back to initial position" : "Already at initial position",
        icon: h.back_initial,
        disabled: !_
      }), m.push({
        key: "toggle-visible",
        kind: "button",
        action: "toggle-visible",
        label: ee ? "Show" : "Hide",
        tip: ee ? "Show input image" : "Hide input image",
        icon: ee ? h.eye : h.eye_dashed
      });
    }
    m.push({ key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? h.lock_open : h.lock_closed }), d(t) || m.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!a });
  } else
    m = [
      {
        key: "aspect",
        kind: "aspect",
        icon: h.aspect,
        open: !!c,
        choices: v0(l, { erp: w, coverage: g })
      },
      // A 360-degree ERP has no frame to turn.
      { key: "rotate-90", kind: "button", action: "rotate-90", label: "Toggle Portrait/Landscape", tip: "Toggle portrait/landscape", icon: h.rotate_90, disabled: l === mo }
    ], w ? m.push({ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete }) : m.push(
      { key: "toggle-lock", kind: "button", action: "toggle-lock", label: a ? "Unlock" : "Lock", tip: a ? "Unlock" : "Lock", icon: a ? h.lock_open : h.lock_closed },
      { key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: h.delete, disabled: !!a }
    );
  return S0(i.corners, m);
}
const Ip = [
  { key: "translate", label: "Move", tip: "Move the world sticker", cameraTip: "Move the camera" },
  { key: "rotate", label: "Rotate", tip: "Rotate the world sticker", cameraTip: "Rotate the camera" },
  { key: "scale", label: "Scale", tip: "Scale the world sticker" }
];
function S2({ corners: e, gizmoBox: t = null, gizmoMode: r, camera: n = !1 }) {
  const i = t ? [{ x: t.minX, y: t.minY }, { x: t.maxX, y: t.maxY }] : [], o = n ? Ip.filter((s) => s.cameraTip) : Ip;
  return S0([...e, ...i], [
    {
      key: "gizmo-mode",
      kind: "segments",
      attr: "data-gizmo-mode",
      label: "Gizmo mode",
      buttons: o.map(({ key: s, label: a, tip: l, cameraTip: c }) => ({ key: s, label: a, tip: n ? c : l, pressed: s === r ? "true" : "false" }))
    },
    // Panorama Studio's Camera is deleted from its menu too (#89).
    ...n ? [{ key: "delete", kind: "button", action: "delete", label: "Delete", tip: "Delete", icon: ze.delete }] : []
  ]);
}
function _2(e, t, r, n, i) {
  const { minX: a, maxX: l, minY: c, maxY: d } = e || {};
  if (![a, l, c, d].every(Number.isFinite)) return null;
  const u = Math.min(Math.max((a + l) * 0.5 - t * 0.5, 14), Math.max(14, n - t - 14)), f = Math.max(14, i - r - 14), h = d + 18, w = c - 18 - r;
  let g;
  return h <= f ? g = Math.max(h, 14) : w >= 14 ? g = Math.min(w, f) : g = Math.min(Math.max(h, 14), f), { left: u, top: g };
}
function S0(e, t) {
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
const _0 = "painting";
function w2(e) {
  return e.paint.strokes.length > 0 || e.mask.strokes.length > 0 || e.raster_objects.length > 0;
}
const x2 = {
  position: "Position",
  rotation: "Rotation",
  fov: "FOV",
  scale: "Scale",
  direction: "Direction",
  roll: "Roll",
  size: "Size",
  opacity: "Opacity"
};
function k2(e, { span: t, selection: r, selectedId: n, expanded: i, openRows: o, audio: s = null, fpsLocked: a = !1, camera: l = !1, cameraHideable: c = !1, scene: d = !1 }) {
  const u = (g, m, _, ee, V, te, { keyable: I = !0, hideable: X = !0 } = {}) => {
    const j = (W) => (r == null ? void 0 : r.owner) === g && r.lane === W ? r.frames.map((ie) => ie + te) : [];
    return {
      id: g,
      label: _,
      icon: ee,
      clip: V,
      selected: g === n,
      hideable: X,
      visible: m.visible,
      keyable: I,
      open: I && o.has(g),
      keys: xv(m).map((W) => ({ frame: W.frame + te, full: W.full })),
      selectedFrames: j(null),
      lanes: (I ? wo(m) : []).map((W) => ({
        key: `${g}:${W}`,
        lane: W,
        label: x2[W],
        frames: m[W].keyframes.map((ie) => ie.frame + te),
        selectedFrames: j(W)
      }))
    };
  }, f = e.stickers.filter((g) => g.placement === "sky").sort((g, m) => m.z_index - g.z_index), h = e.stickers.filter((g) => g.placement === "world"), w = ({ start: g, in: m, duration: _ }) => ({ clip: { start: g, end: _ === null ? null : g + _ }, offset: g - m });
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
      ...l ? [u("camera", e.camera, "Camera", ze.camera, null, 0, { hideable: c })] : [],
      ...[...f, ...h].map((g) => {
        const { clip: m, offset: _ } = w(g.clip);
        return u(g.id, g, iu(g), ze.image, m, _);
      }),
      ...w2(e.painting) || !e.painting_visible ? [{
        id: _0,
        label: "Paint",
        icon: ze.paintbrush_vertical_tool,
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
      ...d || Qa(e.scene) ? [(() => {
        const { clip: g, offset: m } = w(e.scene.clip);
        return u("scene", e.scene, "Scene", ze.box, g, m, { keyable: !1 });
      })()] : []
    ]
  };
}
function M2(e, t, r, n) {
  const i = Nv(e, t, r);
  if (!i) return null;
  const o = Math.min(...r) + n, s = Math.max(...r) + n;
  return { label: o === s ? `Frame ${o}` : `${o} – ${s}`, ...i };
}
const P2 = 4, N2 = 0.25, w0 = {
  KeyW: ["forward", 1],
  KeyS: ["forward", -1],
  KeyD: ["right", 1],
  KeyA: ["right", -1],
  KeyE: ["up", 1],
  KeyQ: ["up", -1]
};
function x0(e) {
  return Object.hasOwn(w0, e);
}
function k0(e, t, r) {
  const { forward: n, right: i } = Li(e.yaw_deg, 0), o = [0, 1, 2].map((a) => n[a] * t.forward + i[a] * t.right + (a === 1 ? t.up : 0)), s = Math.hypot(...o);
  return !(s > 0) || !(r > 0) ? e : { ...e, position: e.position.map((a, l) => a + o[l] * r / s) };
}
function A2() {
  const e = /* @__PURE__ */ new Set();
  let t = !1, r = !1, n = 0;
  function i() {
    e.clear(), t = !1, r = !1;
  }
  return {
    // Holds a movement key down at time ts (ms); false for another key. The first one starts the clock.
    press(o, s) {
      return x0(o) ? (e.size || (n = s), e.add(o), !0) : !1;
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
        const [a, l] = w0[s];
        o[a] += l;
      }
      return o;
    },
    // How far a second takes the view for content of size `scale`.
    speed(o) {
      return o * (t ? P2 : 1) * (r ? N2 : 1);
    },
    // The seconds since the last call, or since the first key went down; 0 with no key held.
    elapsed(o) {
      if (!e.size) return 0;
      const s = Math.max(0, o - n) / 1e3;
      return n = Math.max(n, o), s;
    }
  };
}
const C2 = /* @__PURE__ */ new Set(["pano", "unwrap", "frame"]), I2 = /* @__PURE__ */ new Set(["3dof", "6dof"]);
function E2(e) {
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
function Ep(e, t, r) {
  return Number.isFinite(e) && e >= t && e <= r;
}
function O2(e, { frame: t }) {
  if (!e) return null;
  const { mode: r, spaceMode: n, position: i, yaw_deg: o, pitch_deg: s, hFOV_deg: a, distance: l, moved: c } = e;
  return C2.has(r) && (r !== "frame" || t) && I2.has(n) && Array.isArray(i) && i.length === 3 && i.every(Number.isFinite) && Number.isFinite(o) && Ep(s, -89.9, 89.9) && Ep(a, 35, 140) && Number.isFinite(l) && l > 0 && typeof c == "boolean" ? {
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
const F2 = 250, T2 = 600, D2 = 180, L2 = 2;
function R2(e) {
  return e < 0.5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2;
}
function Bo(e, t, r) {
  return e + (t - e) * r;
}
function V2(e, t, r = 1) {
  const n = Math.max(
    Math.abs(Qu(e.yaw_deg, t.yaw_deg)),
    Math.abs(t.pitch_deg - e.pitch_deg),
    Math.abs(t.hFOV_deg - e.hFOV_deg)
  ), i = Math.hypot(...t.position.map((s, a) => s - e.position[a])) / Math.max(r, 1e-6), o = Math.min(1, n / D2 + i / L2);
  return Math.round(Bo(F2, T2, o));
}
function $2(e, t, r) {
  const n = R2(Ie(r, 0, 1));
  return {
    position: e.position.map((i, o) => Bo(i, t.position[o], n)),
    yaw_deg: Ht(e.yaw_deg + Qu(e.yaw_deg, t.yaw_deg) * n),
    pitch_deg: Bo(e.pitch_deg, t.pitch_deg, n),
    hFOV_deg: Bo(e.hFOV_deg, t.hFOV_deg, n),
    distance: Bo(e.distance, t.distance, n)
  };
}
function z2(e, t) {
  return e.position.every((r, n) => Math.abs(r - t.position[n]) < 1e-9) && Math.abs(Qu(e.yaw_deg, t.yaw_deg)) < 1e-9 && Math.abs(e.pitch_deg - t.pitch_deg) < 1e-9 && Math.abs(e.hFOV_deg - t.hFOV_deg) < 1e-9 && Math.abs(e.distance - t.distance) < 1e-9;
}
function j2(e, t, r, { scale: n = 1, end: i = null } = {}) {
  return z2(e, t) ? null : { from: e, to: t, startTs: r, durationMs: V2(e, t, n), end: i };
}
function H2(e, t) {
  const r = Ie((t - e.startTs) / e.durationMs, 0, 1);
  return r >= 1 ? { view: e.to, done: !0 } : { view: $2(e.from, e.to, r), done: !1 };
}
function gl(e, t) {
  var r;
  return ((r = t == null ? void 0 : t.end) == null ? void 0 : r.mode) ?? e;
}
function G2(e, t, r) {
  const n = gl(e, t);
  return r === "3dof" ? e === "3dof" || n === "3dof" ? "keep" : "return" : e === r && n === r ? "keep" : "switch";
}
function K2(e) {
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
    viewController: h
  } = e;
  let w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q = null;
  function de(ye, Q = null) {
    const me = Y();
    W(() => {
      i.viewTransition = j2(me, ye, performance.now(), { scale: y(), end: Q });
    }), !i.viewTransition && Q && ae(Q), h.state.inertia.active = !1, h.state.inertia.vx = 0, h.state.inertia.vy = 0, ie(), X({ localOnly: !0, reason: ft.VIEW });
  }
  function ae(ye) {
    fe(ou({ ...K(), moved: ye.moved }, ye.mode, k())), a.backgroundDirty = !0;
  }
  function ve() {
    i.viewTransition && (i.viewTransition = null, ie());
  }
  function G(ye, Q) {
    de({ ...Y(), yaw_deg: ye, pitch_deg: Q });
  }
  function A() {
    return !f || ue() && !ee();
  }
  function z() {
    return i.mode === "pano" && M();
  }
  function M() {
    return u && xS({ sceneLinked: l && !!jl(s).scene, files: j(), stickers: d.stickers });
  }
  function H() {
    return i.spaceMode === "6dof" && z();
  }
  function T() {
    var ye, Q, me;
    return Aw((me = (Q = (ye = t.ui) == null ? void 0 : ye.settings) == null ? void 0 : Q.getSettingValue) == null ? void 0 : me.call(Q, $g));
  }
  function K() {
    return { mode: i.spaceMode, position: i.viewPosition, moved: i.viewMoved };
  }
  function fe(ye) {
    i.spaceMode = ye.mode, i.viewPosition = ye.position, i.viewMoved = ye.moved;
  }
  function se(ye) {
    var me;
    const Q = G2(i.spaceMode, i.viewTransition, ye);
    if (Q !== "keep") {
      if (Q === "return") {
        de({ ...Y(), position: k(), distance: ((me = le()) == null ? void 0 : me.radius) || sr }, { mode: ye, moved: !1 });
        return;
      }
      ve(), fe(ou({ ...K(), position: Y().position }, ye, k())), a.backgroundDirty = !0, ie(), X({ localOnly: !0, reason: ft.VIEW });
    }
  }
  function Y() {
    var me;
    const ye = i.viewMoved ? i.viewDistance : ((me = le()) == null ? void 0 : me.radius) || sr, Q = { position: i.viewPosition, yaw_deg: i.viewYaw, pitch_deg: i.viewPitch, hFOV_deg: i.viewFov, distance: ye };
    return yS(i.spaceMode, Q, k());
  }
  function k() {
    return ue() ? C().position : [0, 0, 0];
  }
  function ne() {
    return r && d.camera !== null;
  }
  function ue() {
    return ne() && d.camera.visible;
  }
  function _e() {
    return d.painting_visible !== !1;
  }
  function we(ye) {
    return ye.visible && vo(ye.clip, i.frame);
  }
  function C() {
    return Ol(d.camera, i.frame);
  }
  function le() {
    var Q;
    const ye = w();
    return ((Q = ye.space ?? ye.content) == null ? void 0 : Q.sphere) ?? null;
  }
  function b(ye) {
    i.viewPosition = ye.position, i.viewYaw = ye.yaw_deg, i.viewPitch = ye.pitch_deg, i.viewDistance = ye.distance, i.viewMoved = !0, a.backgroundDirty = !0, X({ localOnly: !0, reason: ft.VIEW });
  }
  function y() {
    var ye;
    return ((ye = le()) == null ? void 0 : ye.radius) || sr;
  }
  function E() {
    var P;
    const ye = w().space, Q = g(), me = i.worldSelectedId || i.selectedId, B = Q.stickers.findIndex((U) => U.id === me), p = B < 0 ? null : {
      sticker: Q.stickers[B],
      value: Ns(Q, i.frame).stickers[B],
      plane: ye.stickers.find((U) => U.id === me) ?? null,
      item: ((P = ye.sticker) == null ? void 0 : P.id) === me && ye.sticker.url ? { kind: ye.sticker.kind, box: o.sceneBox(ye.sticker.url) } : null
    }, N = _() ? ce() : NS(le(), p);
    if (!N) return;
    const S = Y();
    i.viewDistance = S.distance, i.viewMoved = !0, de(wS(S, N, n.width, n.height));
  }
  function v(ye) {
    return o.pickSurface(Se(), ye.x, ye.y, n.width, n.height);
  }
  function $(ye, Q) {
    var me;
    return su(ye, Q, i.viewMoved ? null : (me = le()) == null ? void 0 : me.center, y());
  }
  function L() {
    return JSON.stringify([i.viewPosition, i.viewYaw, i.viewPitch]);
  }
  function J(ye, Q) {
    const me = performance.now(), B = { x: ye.x, y: ye.y, time: me, key: o.contentRevision(), view: L() };
    if (!Fm(q, B)) {
      const N = v(ye);
      q = { ...B, cost: performance.now() - me, hit: N };
    }
    const p = Y();
    b(Lm(p, $(p, q.hit), Q, y())), q.view = L(), q.wheelTime = me;
  }
  function O(ye, Q, me) {
    const B = Y();
    i.interaction = ye === "orbit" ? { kind: "space_orbit", last: Q, pivot: $(B, v(Q)) } : { kind: "space_pan", last: Q, depth: Om(B, y()) }, pe(Q), n.setPointerCapture(me);
  }
  function F() {
    return H() || V();
  }
  function x(ye) {
    const Q = I.elapsed(ye);
    if (!Q || i.viewTransition) return !1;
    const me = I.speed(y()) * Q;
    if (V()) return te(I.direction(), me);
    if (!H()) return !1;
    const B = Y(), p = k0(B, I.direction(), me);
    return p === B ? !1 : (i.viewPosition = p.position, i.viewDistance = B.distance, i.viewMoved = !0, !0);
  }
  function R() {
    sl(s).view = E2(i);
  }
  function Z() {
    const ye = c && !b0({ hasShot: !!m(), erp: ee() }).disabled, Q = O2(sl(s).view, { frame: ye });
    Q && Object.assign(i, Q);
  }
  function he(ye) {
    return ye * 0.2;
  }
  function ce() {
    return { center: C().position, radius: he(y()) };
  }
  function be(ye, Q) {
    const { yaw_deg: me, pitch_deg: B } = jm(ye.position, Q);
    return { ...ye, yaw_deg: me, pitch_deg: B };
  }
  function Se() {
    return gd(Y(), n.width, n.height, le());
  }
  return {
    connect(ye) {
      ({
        editorViewInput: w,
        editorViewSceneState: g,
        getActiveCutoutShot: m,
        isCameraSelected: _,
        isErpCamera: ee,
        isFreeFrameView: V,
        moveFrameByKeys: te,
        moveKeys: I,
        requestDraw: X,
        sceneFiles: j,
        startAnimation: W,
        syncFloatingViewButtonState: ie,
        updateCursor: pe
      } = ye);
    },
    transitionView: de,
    applyViewTransitionEnd: ae,
    cancelViewTransition: ve,
    turnViewTo: G,
    cameraPreviewShown: A,
    isSpaceView: z,
    hasSpaceContent: M,
    isFreeSpaceView: H,
    viewControls: T,
    spaceModeState: K,
    applySpaceMode: fe,
    setSpaceMode: se,
    spaceViewState: Y,
    spaceOrigin: k,
    hasCamera: ne,
    cameraShoots: ue,
    paintingShown: _e,
    sceneStickerShown: we,
    cutoutCamera: C,
    contentSphere: le,
    setSpaceView: b,
    spaceScale: y,
    frameSpaceContent: E,
    zoomSpaceAt: J,
    startSpaceDrag: O,
    canKeyMove: F,
    stepKeyMove: x,
    saveView: R,
    restoreView: Z,
    currentSpaceCamera: Se,
    cameraFrustumLength: he,
    cameraSphere: ce,
    lookingAt: be
  };
}
function W2(e) {
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
  let u, f, h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T, K, fe, se, Y, k, ne, ue, _e, we = { revision: -1, sceneState: null }, C = null;
  function le() {
    return C || (C = E()), C;
  }
  function b() {
    C = null;
  }
  function y() {
    return we.sceneState;
  }
  function E() {
    const Se = X(), ye = h(), Q = { ...a.assets };
    for (const Pe of l ? [] : a.stickers) {
      const Ce = String((Pe == null ? void 0 : Pe.asset_id) || "");
      Ce && !Q[Ce] && i.has(Ce) && (Q[Ce] = { type: "comfy_image", filename: Ce });
    }
    const me = l ? a.stickers.map((Pe) => ve(Pe) ? { ...Pe, source: { kind: "file", filename: se(Pe) } } : Pe) : a.stickers;
    we.revision !== s.stateRevision && (we = { revision: s.stateRevision, sceneState: Gr({ ...a, stickers: me, assets: Q, painting: null }) }), l && v(we.sceneState);
    const B = Ns(we.sceneState, r.frame), p = A ? te() : null, N = (Pe) => {
      if (l && !Pe.visible) return null;
      if (A && q(Pe)) return p;
      const Ce = W(Pe);
      return Ce ? { media: Ce, revision: j(Ce) } : null;
    }, S = ue(), P = [...S.sky, ...Ym(we.sceneState, r.frame, a.stickers, { media: N, paintLayers: ye, evaluated: B })], U = Se && (Se === d || Se === c) ? d.dataset.panoSrc : Se, ge = pe(Se) ? { media: Se, revision: j(Se), coverage: f(), source: U } : null, D = ie(), re = bS(H(), D, T());
    re.mode !== r.spaceMode && m(), u(re);
    const Ne = D ? $(we.sceneState, B, N, S) : null, xe = ae() ? { ...Ne, ...L(Ne) } : null;
    return { background: ge, layers: P, space: xe, content: Ne };
  }
  function v(Se) {
    const ye = new Map(a.stickers.map((Q) => [Q.id, Q.clip]));
    Se.scene.clip = { ...a.scene.clip };
    for (const Q of Se.stickers) {
      const me = ye.get(Q.id);
      me && (Q.clip = { ...me });
    }
  }
  function $(Se, ye, Q, me) {
    const B = z(), p = yd(B, ye.scene), N = p != null && p.url ? n.sceneBox(p.url) : null, S = N && xa(p.kind, N), P = fe(), U = $m(P, Se, ye), ge = U != null && U.url ? n.sceneBox(U.url) : null, D = ge ? [{ box: xa(U.kind, ge), value: U.value }] : [], re = Xm(Se, r.frame, a.stickers, { media: Q, evaluated: ye });
    for (const { request: xe, value: Pe } of me.items) {
      const Ce = xe != null && xe.url ? n.sceneBox(xe.url) : null;
      Ce && D.push({ box: xa(xe.kind, Ce), value: Pe });
    }
    const Ne = uu(MS(ye, S, [...re, ...me.stickers], D));
    return {
      evaluated: ye,
      sceneUrls: B ? B.urls.filter(Boolean) : [],
      scene: p,
      stickerUrls: zm(P, Se),
      sticker: U,
      stickers: re,
      upstreamStickers: me.stickers,
      upstreamItems: me.items,
      sphere: Ne
    };
  }
  function L(Se) {
    var Q;
    const ye = ((Q = Se.sphere) == null ? void 0 : Q.radius) || sr;
    return {
      gizmo: O() ? R() : J(Se.evaluated),
      grid: r.showGrid && !r.fullscreen ? VS(ye) : null,
      lines: g() ? x(ye) : []
    };
  }
  function J(Se) {
    const ye = M(), Q = Se.stickers.find((me) => me.id === (ye == null ? void 0 : ye.id));
    return !_e(ye) || !(Q != null && Q.active) ? null : { mode: r.gizmoMode, transform: au(Q) };
  }
  function O() {
    return g() && r.selectedId === dd;
  }
  let F = { revision: -1, span: -1, segments: [] };
  function x(Se) {
    const ye = k();
    (F.revision !== s.stateRevision || F.span !== ye) && (F = { revision: s.stateRevision, span: ye, segments: zS(jS(a, ye)) });
    const { segments: Q } = F, me = Q.length ? [{ segments: Q, color: mN }] : [];
    if (!de()) return me;
    const B = O() ? u0 : hN;
    return [...me, { segments: Hm(ee(), w(Se)), color: B }];
  }
  function R() {
    return !de() || !O() || o ? null : { mode: r.gizmoMode === "rotate" ? "rotate" : "translate", transform: au({ ...ee(), scale: 1 }) };
  }
  function Z() {
    const { background: Se, layers: ye, space: Q } = le(), me = t.width, B = t.height, p = V({ x: 0, y: 0, w: me, h: B });
    let N = !1;
    return !Se && !ye.length && !Q ? (n.clear(460551), N = n.ready) : (n.clear(), N = !!n.render({
      rect: p,
      camera: Q ? gd(K(), me, B, Q.sphere) : _(),
      background: Se,
      layers: ye,
      space: Q
    })), Y(), (r.worldSelectedId || O() || G()) && ne(), N;
  }
  function he(Se) {
    const { content: ye } = le();
    return !ye || !Se.position ? rs(Se) : Rm(rs(Se), Se.position, I(), ye.sphere);
  }
  function ce(Se, ye, Q, me = null) {
    const { background: B, layers: p, content: N } = le();
    if (!B && !p.length && !N) return null;
    const S = N && ye.position ? N : null;
    return n.render({ rect: Se, camera: he(ye), background: B, layers: p, space: S, owner: Q, clearColor: me });
  }
  function be(Se) {
    return n.clear(460551), !!n.renderUnwrap({ rect: V(Se), ...le() });
  }
  return {
    connect(Se) {
      ({
        applySpaceMode: u,
        backgroundCoverage: f,
        buildEditorViewPaintLayers: h,
        cameraFrustumLength: w,
        cameraShoots: g,
        cancelViewTransition: m,
        currentViewCamera: _,
        cutoutCamera: ee,
        deviceRect: V,
        followPortSticker: te,
        frameViewDistance: I,
        getConnectedErpImage: X,
        getMediaRevisionToken: j,
        getStickerImage: W,
        hasSpaceContent: ie,
        isDecodedImageReady: pe,
        isExternalSticker: q,
        isFreeSpaceView: de,
        isSpaceView: ae,
        isUploadingSticker: ve,
        isWorldMenuShown: G,
        portVideo: A,
        sceneFiles: z,
        selectedWorldSticker: M,
        spaceModeState: H,
        spaceOrigin: T,
        spaceViewState: K,
        stickerFiles: fe,
        stickerImageKey: se,
        syncFloatingViewButtonState: Y,
        timelineSpanFrames: k,
        updateSelectionMenu: ne,
        upstreamViewInput: ue,
        worldStickerEditable: _e
      } = Se);
    },
    editorViewInput: le,
    endEditorViewFrame: b,
    editorViewSceneState: y,
    isCameraSelected: O,
    renderEditorView: Z,
    shotViewCamera: he,
    drawEditorViewShot: ce,
    renderEditorViewUnwrap: be
  };
}
function U2(e) {
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
  const h = /* @__PURE__ */ new Map(), w = () => u({ cause: "frame_view", localOnly: !0, reason: ft.MEDIA });
  function g(G) {
    if (!G) return null;
    let A = h.get(G);
    return A || (A = new Image(), A.onload = w, A.onerror = w, A.src = G, h.set(G, A)), A;
  }
  function m({ sceneState: G, ui: A }) {
    return [
      ...G.stickers.filter((z) => z.source.kind !== "port").map((z) => n(tl(z.source))),
      i(Tr(A, ho)[0] || null),
      ...G.painting.raster_objects.map((z) => z.rasterDataUrl)
    ].filter(Boolean);
  }
  function _() {
    return a && (Gf(o, "scene") === m0 || !!ee());
  }
  function ee() {
    const G = a && Qt(o, "scene") ? t.uiValue(o, "pano_upstream_layers") : null, A = Array.isArray(G) ? G : null;
    if (f.list !== A) {
      f.entries.forEach(ae), f = { list: A, entries: A ? zN(A).map((M) => ({ layer: M })) : [], fps: null };
      const z = new Set(f.entries.flatMap((M) => m(M.layer)));
      for (const M of [...h.keys()]) z.has(M) || h.delete(M);
    }
    return A && f.fps !== s.timeline.fps && V(), A && f.entries;
  }
  function V() {
    if (!f.list) return;
    const G = UN(f.entries.map((A) => A.layer), s.upstream, s.timeline.fps);
    f.entries.forEach((A, z) => {
      A.working = G[z];
    }), f.fps = s.timeline.fps;
  }
  function te() {
    if (!ee()) return 0;
    const [G] = t.uiValue(o, "pano_timeline_frames") || [];
    return Number(G) > 0 ? Number(G) : 0;
  }
  function I() {
    if (!a) return "";
    const G = ee();
    if (GN(Gf(o, "scene"), G)) return "Run the workflow to show the upstream scene.";
    if (!G) return "";
    const A = t.uiList(o, "pano_sticker_warnings");
    return String(A.find((z) => String(z).startsWith(HN)) ?? "");
  }
  function X(G, A, z) {
    const { ui: M } = G.layer, H = s.timeline.fps, T = Tr(M, c0)[0], K = Tr(M, l0).map(i).filter(Boolean), fe = i(Tr(M, a0)[0] || null), se = T && typeof T == "object" ? K.length ? { frames: K, meta: T } : fe ? { src: fe, meta: T } : null : null, Y = g(i(Tr(M, ho)[0] || null)), k = se ? _d(A.clip, z, H, se.meta) : null;
    let ne = Y;
    if (se != null && se.frames)
      G.frames || (G.frames = xd({
        createImage: (ue, _e) => {
          const we = new Image();
          return we.onload = _e, we.onerror = _e, we.src = ue, we;
        },
        onLoad: w
      })), ne = G.frames.picture(se.frames, k, se.meta, Y);
    else if (se != null && se.src) {
      const ue = j(G);
      ue.follow({ src: se.src, time: k, playing: d.advancing, fps: H }), ne = ue.picture(G.still, Y);
    }
    return ne ? { media: ne, revision: c(ne), source: wd(se, Y) } : null;
  }
  function j(G) {
    if (G.follower) return G.follower;
    const A = Ps(document, "editor.upstream-port-video");
    A.playsInline = !0, A.preload = "auto";
    const z = rn({ label: "editor.upstream-port-still" });
    return z.__panoFrameIdx = 0, G.video = A, G.still = z, G.follower = Nd({
      video: A,
      onCapture: () => {
        var T;
        const M = Number(A.videoWidth || 0), H = Number(A.videoHeight || 0);
        M < 1 || H < 1 || (z.width = M, z.height = H, (T = z.getContext("2d")) == null || T.drawImage(A, 0, 0), z.__panoFrameIdx += 1, w());
      },
      onChange: w
    }), G.follower;
  }
  function W(G, A, z) {
    if (A.source.kind === "port") return X(G, A, z);
    const M = g(n(tl(A.source)));
    return M ? { media: M, revision: c(M) } : null;
  }
  function ie(G) {
    var Y;
    const { sceneState: A } = G.working, { painting: z } = A, M = z.paint.strokes.length + z.mask.strokes.length;
    if (!A.painting_visible || !M && !z.raster_objects.length) return [];
    const H = l(), T = `${H.width}x${H.height}`;
    G.paintSize !== T && (q(G), G.paintSize = T, G.paintEngine = M ? Il(H) : null, (Y = G.paintEngine) == null || Y.rebuildCommitted({ painting: z }), G.rasters = /* @__PURE__ */ new Map());
    const K = G.paintEngine, fe = (K == null ? void 0 : K.getMaskDisplayCanvas()) || null, se = [];
    for (const k of KN(A, K ? K.getAllGroupIds() : [], !!fe)) {
      const ne = k.kind === "group" ? K == null ? void 0 : K.getGroupDisplayCanvas(k.id) : k.kind === "mask" ? fe : pe(G, k.item, H);
      ne && se.push({ id: `${k.kind}:${k.id}`, media: ne, revision: T, opacity: 1, zIndex: k.zIndex });
    }
    return se;
  }
  function pe(G, A, { width: z, height: M }) {
    if (G.rasters.has(A.id)) return G.rasters.get(A.id);
    const H = g(A.rasterDataUrl);
    if (!H.complete || !H.naturalWidth) return null;
    const T = rn({ label: "editor.upstream-raster-erp", width: z, height: M }), K = T.getContext("2d");
    return K ? (d0(K, H, A, z, M), G.rasters.set(A.id, T), T) : null;
  }
  function q(G) {
    var A;
    (A = G.rasters) == null || A.forEach((z) => us(z)), G.rasters = null, G.paintEngine = null, G.paintSize = null;
  }
  function de() {
    const G = ee() ?? [], A = { sky: [], stickers: [], items: [] }, z = r.frame;
    return G.forEach((M) => {
      const H = BN(M.working, M.working.key, z, {
        media: (T) => W(M, T, z),
        paintLayers: ie(M),
        source: i
      });
      A.sky.push(...H.sky), A.stickers.push(...H.stickers), A.items.push(...H.items);
    }), A;
  }
  function ae(G) {
    var A;
    (A = G.follower) == null || A.dispose(), G.still && us(G.still), q(G);
  }
  function ve() {
    f.entries.forEach(ae), f = { list: null, entries: [], fps: null }, h.clear();
  }
  return {
    connect(G) {
      ({ getDesiredPaintTargetDescriptor: l, getMediaRevisionToken: c, playback: d, requestDraw: u } = G);
    },
    upstreamEntries: ee,
    upstreamLinked: _,
    upstreamNotice: I,
    upstreamSpanFrames: te,
    upstreamViewInput: de,
    rebuildUpstreamWorking: V,
    disposeUpstream: ve
  };
}
const Eu = "camera_preview";
function B2(e) {
  return e === Eu ? ft.SPLAT_PREVIEW : ft.SPLAT_STAGE;
}
function Y2(e) {
  return [...e].some((t) => t !== ft.VIEW && t !== ft.OVERLAY && t !== ft.SPLAT_STAGE);
}
function M0(e, t = !1) {
  const r = Ie(Ti(e), 0.05, 20), n = t ? 320 : 220;
  return r >= 1 ? { width: n, height: Math.max(1, Math.round(n / r)) } : { width: Math.max(1, Math.round(n * r)), height: n };
}
function q2(e) {
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
  let d, u, f, h, w = null, g = !1, m = !1;
  function _() {
    g && (g = !1, o.releaseSplats(Eu));
  }
  function ee() {
    w = null, m = !1, _();
  }
  function V(ie) {
    if (!n || !ie) return !1;
    const pe = n.closest(".pano-camera-preview");
    if (!pe) return !1;
    const q = Math.round(Number(pe.clientWidth || n.clientWidth || 0)), de = Math.round(Number(pe.clientHeight || n.clientHeight || 0));
    return Math.abs(q - Number(ie.width || 0)) <= 1 && Math.abs(de - Number(ie.height || 0)) <= 1;
  }
  function te(ie, pe) {
    if (i.outputPreviewRect = null, c.outputPreviewToggle.visible = i.mode !== "frame" && !!f(), l && (c.outputPreviewToggle.visible = !1), !a || !c.cameraPreview) return;
    if (i.mode === "frame" || !d()) {
      c.cameraPreview.visible = !1, c.cameraPreview.settled = !1, ee();
      return;
    }
    const q = f();
    if (c.cameraPreview.visible = !0, c.cameraPreview.expanded = !!i.outputPreviewExpanded, !q || !r) {
      c.cameraPreview.ready = !1, c.cameraPreview.settled = !1, c.cameraPreview.width = 220, c.cameraPreview.height = 132, c.cameraPreview.label = q ? "Preview unavailable" : "Add Frame to preview", ee();
      return;
    }
    const de = M0(q, !!i.outputPreviewExpanded);
    if (c.cameraPreview.width = de.width, c.cameraPreview.height = de.height, m) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", c.cameraPreview.settled = !1, _();
      return;
    }
    const ae = window.devicePixelRatio || 1, ve = Math.max(1, de.width * ae), G = Math.max(1, de.height * ae), A = Math.min(1, t.width / ve, t.height / G), z = { width: Math.max(1, Math.floor(ve * A)), height: Math.max(1, Math.floor(G * A)) }, M = !w || w.width !== z.width || w.height !== z.height || Y2(pe);
    if (ie && M) {
      g = !0;
      const T = u({ x: 0, y: t.height - z.height, w: z.width, h: z.height }, q, Eu);
      w = T ? z : null, T && W(T);
    }
    if (!w) {
      c.cameraPreview.ready = !1, c.cameraPreview.label = h() ? "Loading preview" : "Connect ERP image", c.cameraPreview.settled = !1;
      return;
    }
    const H = V(de);
    c.cameraPreview.ready = !0, c.cameraPreview.label = H ? "" : "Loading preview", c.cameraPreview.settled = H && s.pendingStableLayoutFrames <= 0 && s.hasPresentedFrame;
  }
  function I() {
    w = null, m = !1;
  }
  let X = 0, j = !1;
  function W(ie) {
    const pe = ++X;
    createImageBitmap(ie.canvas, ie.x, ie.y, ie.width, ie.height).then((q) => {
      var de;
      if (pe !== X || !s.running) {
        q.close();
        return;
      }
      (de = r.getContext("bitmaprenderer")) == null || de.transferFromImageBitmap(q);
    }).catch((q) => {
      pe !== X || !s.running || (m = !0, w = null, c.cameraPreview.ready = !1, c.cameraPreview.label = "Preview unavailable", !j && (j = !0, console.error("[PanoramaStickers] camera preview frame failed", q)));
    });
  }
  return {
    connect(ie) {
      ({
        cameraPreviewShown: d,
        drawEditorViewShot: u,
        getActiveCutoutShot: f,
        getConnectedErpImage: h
      } = ie);
    },
    drawCutoutOutputPreview: te,
    forgetCameraPreviewFrame: I
  };
}
function X2(e) {
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
  let u, f, h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T, K, fe, se, Y, k, ne, ue, _e, we, C, le, b;
  function y(Q) {
    const me = r.width, B = r.height, p = W();
    if (n.globalAlpha = 1, n.lineWidth = 1, n.clearRect(0, 0, me, B), ne(), Q && (a.backgroundDirty = !we(p)), i.showGrid && !i.fullscreen) {
      n.strokeStyle = "#3f3f46";
      for (let S = 0; S <= 16; S += 1) {
        const P = p.x + p.w * S / 16;
        n.beginPath(), n.moveTo(P, p.y), n.lineTo(P, p.y + p.h), n.stroke();
      }
      for (let S = 0; S <= 8; S += 1) {
        const P = p.y + p.h * S / 8;
        n.beginPath(), n.moveTo(p.x, P), n.lineTo(p.x + p.w, P), n.stroke();
      }
      n.strokeStyle = "rgba(250, 250, 250, 0.86)", n.lineWidth = 1.2, n.beginPath(), n.moveTo(p.x, p.y + p.h / 2), n.lineTo(p.x + p.w, p.y + p.h / 2), n.stroke(), n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center";
      const N = p.y + p.h * 0.57;
      n.fillText("Left", p.x + p.w * 0.25, N), n.fillText("Front", p.x + p.w * 0.5, N), n.fillText("Right", p.x + p.w * 0.75, N), n.fillText("Back", p.x + 38, N), n.fillText("Back", p.x + p.w - 38, N);
    }
  }
  function E(Q, me, B = 1) {
    let p = !1;
    n.strokeStyle = me, n.lineWidth = B, n.beginPath();
    for (const N of Q) {
      const S = fe(N);
      if (!S) {
        p = !1;
        continue;
      }
      p ? n.lineTo(S.x, S.y) : (n.moveTo(S.x, S.y), p = !0);
    }
    n.stroke();
  }
  function v(Q) {
    const me = r.width, B = r.height;
    if (n.clearRect(0, 0, me, B), ne(), Q && (a.backgroundDirty = !_e()), i.showGrid && !i.fullscreen && g().space)
      $();
    else if (i.showGrid && !i.fullscreen) {
      for (let N = -180; N <= 180; N += 15) {
        const S = [];
        for (let P = -89; P <= 89; P += 4) S.push(Dn(N, P));
        E(S, "#3f3f46", N % 90 === 0 ? 1.3 : 1);
      }
      for (let N = -75; N <= 75; N += 15) {
        const S = [];
        for (let P = -180; P <= 180; P += 4) S.push(Dn(P, N));
        E(S, N === 0 ? "rgba(250, 250, 250, 0.86)" : "#3f3f46", N === 0 ? 1.5 : 1);
      }
      const p = [
        { name: "Left", dir: Dn(-90, 0) },
        { name: "Front", dir: Dn(0, 0) },
        { name: "Right", dir: Dn(90, 0) },
        { name: "Back", dir: Dn(180, 0) }
      ];
      n.fillStyle = "rgba(250, 250, 250, 0.42)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", p.forEach((N) => {
        const S = fe(N.dir);
        S && n.fillText(N.name, S.x, S.y + 24);
      });
    }
  }
  function $() {
    const Q = gd(b(), r.width, r.height, f()), me = gs(Q, [0, 0, 0], r.width, r.height);
    me && (n.fillStyle = "rgba(255, 221, 87, 0.9)", n.font = "500 11px Geist, sans-serif", n.textAlign = "center", n.fillText("ERP origin", me.x, me.y - 12));
  }
  function L(Q, me) {
    const B = K(Q), p = Dn(Number(B.yaw_deg || 0), Number(B.pitch_deg || 0)), N = i.mode === "unwrap" ? se(p) : null, S = N ? N.x : null, P = i.mode === "pano" ? 28 : 20, U = [
      C(Q, 0, P, S),
      C(Q, 1, P, S),
      C(Q, 2, P, S),
      C(Q, 3, P, S)
    ];
    Cd(n, U, { selected: me });
  }
  function J(Q, me = []) {
    if (!(!Q || !Array.isArray(me) || me.length < 4)) {
      Q.beginPath(), Q.moveTo(me[0].x, me[0].y);
      for (let B = 1; B < 4; B += 1) Q.lineTo(me[B].x, me[B].y);
      Q.closePath();
    }
  }
  function O(Q, me, B) {
    const p = Array.isArray(Q == null ? void 0 : Q.corners) ? Q.corners : [];
    if (p.length < 4) return;
    const N = Ie(Number((Q == null ? void 0 : Q.visibilityAlpha) ?? 1), 0, 1);
    if (N <= 0.01) return;
    const S = n.globalAlpha;
    n.globalAlpha = S * N;
    const P = B ? "rgba(255, 116, 116, 0.96)" : me ? "rgba(255, 221, 87, 0.98)" : "rgba(255, 214, 64, 0.92)", U = B ? "rgba(255, 89, 89, 0.08)" : me ? "rgba(255, 221, 87, 0.08)" : "rgba(255, 214, 64, 0.05)", ge = me ? 3.2 : 2.6;
    J(n, p), n.fillStyle = U, n.fill(), n.strokeStyle = P, n.lineWidth = ge, n.stroke(), n.save(), n.strokeStyle = P, n.lineWidth = me ? 3.2 : 2.6, n.lineCap = "round";
    const D = Array.isArray(Q == null ? void 0 : Q.edgeMidpoints) && Q.edgeMidpoints.length >= 4 ? Q.edgeMidpoints : [
      { edge: "top", x: (p[0].x + p[1].x) * 0.5, y: (p[0].y + p[1].y) * 0.5 },
      { edge: "right", x: (p[1].x + p[2].x) * 0.5, y: (p[1].y + p[2].y) * 0.5 },
      { edge: "bottom", x: (p[2].x + p[3].x) * 0.5, y: (p[2].y + p[3].y) * 0.5 },
      { edge: "left", x: (p[3].x + p[0].x) * 0.5, y: (p[3].y + p[0].y) * 0.5 }
    ], re = { top: "bottom", right: "left", bottom: "top", left: "right" }, Ne = me ? 12 : 9;
    D.forEach((xe) => {
      const Ce = D.find(($e) => ($e == null ? void 0 : $e.edge) === re[xe == null ? void 0 : xe.edge]) || {
        x: (p[0].x + p[1].x + p[2].x + p[3].x) * 0.25,
        y: (p[0].y + p[1].y + p[2].y + p[3].y) * 0.25
      }, Le = Ce.x - xe.x, je = Ce.y - xe.y, Ke = Math.hypot(Le, je) || 1;
      n.beginPath(), n.moveTo(xe.x, xe.y), n.lineTo(xe.x + Le / Ke * Ne, xe.y + je / Ke * Ne), n.stroke();
    }), n.restore(), n.globalAlpha = S;
  }
  function F(Q, me, B, p) {
    const N = Ie(Number((me == null ? void 0 : me.visibilityAlpha) ?? 1), 0, 1);
    if (N <= 0.01) return;
    if (z(Q)) {
      O(me, B, p);
      return;
    }
    if (M(Q)) {
      const P = n.globalAlpha;
      n.globalAlpha = P * j(Q) * N, i.mode === "frame" ? (n.strokeStyle = B ? "rgba(250, 250, 250, 0.9)" : p ? "rgba(255, 89, 89, 0.72)" : "#71717a", n.lineWidth = B ? 2 : 1, J(n, me.corners), n.stroke()) : L(Q, B), n.globalAlpha = P;
      return;
    }
    const S = n.globalAlpha;
    n.globalAlpha = S * N, n.fillStyle = B ? "rgba(0, 112, 243, 0.24)" : p ? "rgba(255, 89, 89, 0.12)" : "rgba(255, 255, 255, 0.12)", J(n, me.corners), n.fill(), n.strokeStyle = B ? "rgba(255, 255, 255, 1)" : p ? "rgba(255, 116, 116, 0.88)" : "rgba(255, 255, 255, 0.82)", n.lineWidth = B ? 2.8 : 1.9, J(n, me.corners), n.stroke(), n.globalAlpha = S;
  }
  function x(Q, me, B) {
    if (M(Q)) {
      Rg(n, me, { accent: B });
      return;
    }
    const p = !(z(Q) && pe());
    n.fillStyle = B, p && me.corners.forEach((N) => {
      n.beginPath(), n.arc(N.x, N.y, 6.5, 0, Math.PI * 2), n.fill();
    }), p && z(Q) && (n.strokeStyle = B, n.lineCap = "round", n.lineWidth = 4, me.edgeMidpoints.forEach((N) => {
      var Ne, xe, Pe, Ce;
      const S = (((Ne = N.b) == null ? void 0 : Ne.x) ?? N.x) - (((xe = N.a) == null ? void 0 : xe.x) ?? N.x), P = (((Pe = N.b) == null ? void 0 : Pe.y) ?? N.y) - (((Ce = N.a) == null ? void 0 : Ce.y) ?? N.y), U = Math.hypot(S, P) || 1, ge = S / U, D = P / U, re = 10;
      n.beginPath(), n.moveTo(N.x - ge * re, N.y - D * re), n.lineTo(N.x + ge * re, N.y + D * re), n.stroke();
    }), n.lineCap = "butt"), H(Q) || (n.strokeStyle = "rgba(250, 250, 250, 0.9)", n.lineWidth = 1.8, n.beginPath(), n.moveTo(me.rotateStemBase.x, me.rotateStemBase.y), n.lineTo(me.rotateHandle.x, me.rotateHandle.y), n.stroke(), n.fillStyle = B, n.beginPath(), n.arc(me.rotateHandle.x, me.rotateHandle.y, 10, 0, Math.PI * 2), n.fill());
  }
  function R() {
    var S;
    const Q = i.mode === "frame" ? [] : X(), me = Q.length > 1, B = l ? _() : te(), p = B.map((P) => `${String((P == null ? void 0 : P.id) || "")}:${z(P) ? "frame" : Number((P == null ? void 0 : P.z_index) || 0)}`).join("|");
    (!i._sortedItemsCache || i._sortedItemsCache.src !== B || i._sortedItemsCache.orderKey !== p) && (i._sortedItemsCache = {
      src: B,
      orderKey: p,
      sorted: [...B]
    });
    const N = i._sortedItemsCache.sorted;
    for (const P of N) {
      const U = i.mode !== "frame" && !me && ve(P);
      if (i.mode === "frame" && !U) continue;
      const ge = M(P), D = z(P), re = ae(P);
      if (!ge && !D || A(P) && !le(P)) continue;
      const Ne = T(P);
      if (d !== "stickers" && !Ne.visible)
        continue;
      const xe = Ie(Number((Ne == null ? void 0 : Ne.visibilityAlpha) ?? 1), 0, 1);
      if (xe <= 0.01) continue;
      const Pe = D && l && i.mode === "pano" ? Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1) : 1;
      if (n.save(), n.globalAlpha *= Pe, F(P, Ne, U, re), U && Ne.visible) {
        const Ce = re ? "#ff4d4f" : ge && q(P) ? "#f59e0b" : "#0070f3", Le = n.globalAlpha;
        n.globalAlpha = Le * xe, x(P, Ne, Ce), n.globalAlpha = Le;
      }
      n.restore();
    }
    if (l && i.mode === "pano" && !m() && i.cutoutPanoFrameVisual && i.cutoutPanoFrameAlpha > 1e-4) {
      const P = i.cutoutPanoFrameVisual, U = Ie(Number(i.cutoutPanoFrameAlpha || 0), 0, 1);
      n.save(), n.globalAlpha *= U, O(P.geom, P.selected, P.locked), P.selected && x(
        P.item,
        P.geom,
        P.locked ? "#ff4d4f" : "#0070f3"
      ), n.restore();
    }
    if (me) {
      const P = I(Q);
      if (P != null && P.visible) {
        const U = u(Q) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(P.corners[0].x, P.corners[0].y);
        for (let ge = 1; ge < P.corners.length; ge += 1) n.lineTo(P.corners[ge].x, P.corners[ge].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = U, P.corners.forEach((ge) => {
          n.beginPath(), n.arc(ge.x, ge.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      }
    } else
      Q.forEach((P) => {
        if (!H(P) && !G(P)) return;
        const U = T(P);
        if (!(U != null && U.visible)) return;
        const ge = ae(P) ? "#ff4d4f" : "#0070f3";
        n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.95)", n.lineWidth = 2, n.setLineDash([6, 4]), n.beginPath(), n.moveTo(U.corners[0].x, U.corners[0].y);
        for (let D = 1; D < U.corners.length; D += 1) n.lineTo(U.corners[D].x, U.corners[D].y);
        n.closePath(), n.stroke(), n.setLineDash([]), n.fillStyle = ge, U.corners.forEach((D) => {
          n.beginPath(), n.arc(D.x, D.y, 6.5, 0, Math.PI * 2), n.fill();
        }), n.restore();
      });
    if (((S = i.interaction) == null ? void 0 : S.kind) === "marquee_select") {
      const P = ue(i.interaction.start, i.interaction.current);
      n.save(), n.strokeStyle = "rgba(255, 255, 255, 0.9)", n.fillStyle = "rgba(255, 255, 255, 0.08)", n.lineWidth = 1, n.setLineDash([5, 4]), n.beginPath(), n.rect(P.x0, P.y0, P.x1 - P.x0, P.y1 - P.y0), n.fill(), n.stroke(), n.restore();
    }
  }
  function Z(Q) {
    const me = m(), B = ee(me);
    if (!me || !B)
      return n.clearRect(0, 0, r.width, r.height), Q && o.clear(657930), !1;
    const p = { x: B.x, y: B.y, w: B.w, h: B.h }, { rect: N, shot: S } = Wm(me, B, { width: r.width, height: r.height }), P = he(p);
    if (n.clearRect(0, 0, r.width, r.height), Q) {
      o.clear(657930);
      const U = h(N), ge = !!w(U, S, void 0, 657930);
      ge || o.clear(1118481, U), a.backgroundDirty = !ge;
    }
    return n.save(), n.fillStyle = "rgba(0, 0, 0, 0.58)", n.beginPath(), n.rect(0, 0, r.width, r.height), n.roundRect(p.x, p.y, p.w, p.h, P), n.fill("evenodd"), n.restore(), n.save(), n.strokeStyle = u0, n.globalAlpha = 0.62, n.lineWidth = 2, n.beginPath(), n.roundRect(p.x + 1, p.y + 1, p.w - 2, p.h - 2, Math.max(0, P - 1)), n.stroke(), n.restore(), !0;
  }
  function he(Q) {
    const me = Math.max(1e-6, Number(a.frameCanvasScale || 1));
    return Math.min(s * me, Number((Q == null ? void 0 : Q.w) || 0) * 0.5, Number((Q == null ? void 0 : Q.h) || 0) * 0.5);
  }
  function ce() {
    var ge, D;
    if (((ge = i.interaction) == null ? void 0 : ge.kind) !== "paint_lasso_fill") return;
    const Q = i.interaction.stroke, me = (D = Q == null ? void 0 : Q.geometry) == null ? void 0 : D.points;
    let B;
    if (i.mode === "frame") {
      const re = m(), Ne = V(re);
      B = Y(me, re, Ne);
    } else
      B = k(me);
    if (!Array.isArray(B) || B.length < 3) return;
    const p = String((Q == null ? void 0 : Q.layerKind) || "") === "mask", N = (Q == null ? void 0 : Q.color) || { r: 1, g: 0.25, b: 0.25 }, S = Math.round(Number(N.r || 0) * 255), P = Math.round(Number(N.g || 0) * 255), U = Math.round(Number(N.b || 0) * 255);
    n.save(), n.beginPath(), n.moveTo(Number(B[0].x || 0), Number(B[0].y || 0));
    for (let re = 1; re < B.length; re++) n.lineTo(Number(B[re].x || 0), Number(B[re].y || 0));
    n.closePath(), p ? (n.lineWidth = 2, n.setLineDash([6, 6]), n.lineDashOffset = 0, n.strokeStyle = "rgba(0,0,0,0.96)", n.stroke(), n.lineDashOffset = -6, n.strokeStyle = "rgba(255,255,255,0.96)", n.stroke(), n.setLineDash([]), n.lineDashOffset = 0) : (n.lineWidth = 1.5, n.setLineDash([6, 4]), n.strokeStyle = `rgba(${S},${P},${U},1)`, n.stroke(), n.setLineDash([])), n.restore();
  }
  function be() {
    const Q = i.frameRollOverlayVisual, me = Ie(Number(i.frameRollOverlayAlpha || 0), 0, 1);
    if (i.mode !== "frame" || !(Q != null && Q.shot) || me <= 1e-4) return;
    const B = V(Q.shot);
    if (!B) return;
    const p = { x: B.x + B.w * 0.5, y: B.y + B.h * 0.5 }, N = Number(Q.shot.roll_deg ?? Q.shot.rot_deg ?? 0) * _r, S = Math.hypot(B.w, B.h) * 0.55, P = Math.cos(N) * S, U = Math.sin(N) * S;
    n.save(), n.globalAlpha *= me, n.beginPath(), n.rect(B.x, B.y, B.w, B.h), n.clip(), n.translate(p.x, p.y), n.rotate(N);
    const ge = Math.max(12, Math.min(B.w, B.h) / 6);
    n.beginPath();
    for (let D = -S; D <= S; D += ge)
      n.moveTo(D, -S), n.lineTo(D, S);
    for (let D = -S; D <= S; D += ge)
      n.moveTo(-S, D), n.lineTo(S, D);
    n.lineWidth = 1, n.strokeStyle = "rgba(255, 255, 255, 0.22)", n.stroke(), n.setTransform(1, 0, 0, 1, 0, 0), n.beginPath(), n.moveTo(p.x - P, p.y - U), n.lineTo(p.x + P, p.y + U), n.lineWidth = 1.5, n.setLineDash([8, 6]), n.strokeStyle = "rgba(255, 255, 255, 0.92)", n.shadowColor = "rgba(0, 0, 0, 0.8)", n.shadowBlur = 3, n.stroke(), n.setLineDash([]), n.restore();
  }
  function Se() {
    return !l || !m() || t && de() || c && !ie() ? 0 : bN;
  }
  function ye() {
    const Q = Ie(Number(i.cutoutPanoDimAlpha || 0), 0, 1);
    if (Q <= 1e-4 || !l || i.mode !== "pano") return;
    const me = m(), B = me ? T(me) : null, p = Array.isArray(B == null ? void 0 : B.corners) && B.corners.length >= 4 ? B.corners.map((P) => ({ x: Number(P.x || 0), y: Number(P.y || 0) })) : null;
    B != null && B.visible && p && (i.cutoutPanoDimCorners = p), me && (B != null && B.visible) && p && (i.cutoutPanoFrameVisual = {
      item: me,
      geom: B,
      selected: ve(me),
      locked: ae(me)
    });
    const N = Number(i.cutoutPanoDimTarget || 0) <= 1e-6, S = B != null && B.visible ? p : N ? i.cutoutPanoDimCorners || [] : [];
    if (n.save(), n.fillStyle = `rgba(0, 0, 0, ${Q})`, n.beginPath(), n.rect(0, 0, r.width, r.height), S.length >= 4) {
      n.moveTo(S[0].x, S[0].y);
      for (let P = 1; P < 4; P += 1) n.lineTo(S[P].x, S[P].y);
      n.closePath();
    }
    n.fill("evenodd"), n.restore();
  }
  return {
    connect(Q) {
      ({
        areAllSelectedItemsLocked: u,
        contentSphere: f,
        deviceRect: h,
        drawEditorViewShot: w,
        editorViewInput: g,
        getActiveCutoutShot: m,
        getCutoutSelectableItemsForDisplay: _,
        getFrameViewLayout: ee,
        getFrameViewRect: V,
        getList: te,
        getMultiSelectionGeom: I,
        getSelectedItems: X,
        getStickerDisplayAlpha: j,
        getUnwrapRect: W,
        isCameraSelected: ie,
        isErpCamera: pe,
        isExternalSticker: q,
        isFreeSpaceView: de,
        isItemLocked: ae,
        isItemSelected: ve,
        isRasterObjectItem: G,
        isSceneSticker: A,
        isShotItem: z,
        isStickerItem: M,
        isStrokeGroupItem: H,
        objectGeom: T,
        poseOf: K,
        projectDir: fe,
        projectDirUnwrap: se,
        projectErpLassoPointsToFrameRect: Y,
        projectLassoPointsToCurrentView: k,
        rebuildPaintEngineIfNeeded: ne,
        rectFromPoints: ue,
        renderEditorView: _e,
        renderEditorViewUnwrap: we,
        sampleStickerEdge: C,
        sceneStickerShown: le,
        spaceViewState: b
      } = Q);
    },
    drawGridUnwrap: y,
    drawGridPano: v,
    drawObjects: R,
    drawFrameViewBackground: Z,
    drawLassoOutlineOverlay: ce,
    drawFrameRollOverlay: be,
    getCutoutPanoDimTarget: Se,
    drawCutoutPanoPassepartout: ye
  };
}
function J2(e) {
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
    timeline: h,
    type: w,
    uiState: g,
    viewController: m
  } = e;
  let _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T, K, fe, se, Y, k, ne, ue, _e = () => {
  };
  function we(Se = /* @__PURE__ */ new Set()) {
    pe();
    const ye = l.backgroundDirty;
    d && (H(), ee(ye, Se)), i.mode === "frame" ? (l.frameSafeRect = A(), I(ye)) : i.mode === "unwrap" ? j(ye) : X(ye), V(), ie(), se(), W(), te(), g.fovValue = `${Math.round(i.viewFov)}°`, Math.abs(Number(i.outputPreviewAnim || 0) - Number(i.outputPreviewAnimTo || 0)) < 1e-6 && ne(), l.hasPresentedFrame || (l.hasPresentedFrame = !0, r.style.opacity = "1"), d && g.cameraPreview && (g.cameraPreview.settled = l.pendingStableLayoutFrames <= 0 && l.hasPresentedFrame && i.mode !== "frame");
    const Q = ve();
    g.stageStatus = Q.status, g.stageStatusDetail = Q.detail, g.stageNotice = ue(), Q.status === nr ? (u == null || u.removeAttribute("data-stage-ready"), u == null || u.setAttribute("data-stage-loading-kind", Q.detail)) : (u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind"));
  }
  function C(Se = i.interaction) {
    if (w !== "stickers" || i.mode !== "pano") return !1;
    const ye = String((Se == null ? void 0 : Se.kind) || "");
    return ye === "move" || ye === "scale" || ye === "scale_x" || ye === "scale_y" || ye === "rotate" ? !0 : ye === "move_multi" ? Array.isArray(Se == null ? void 0 : Se.stickerSnapshots) && Se.stickerSnapshots.length > 0 : !1;
  }
  function le() {
    return !!i.interaction || !!h.drag;
  }
  function b() {
    l.nodePreviewPending = !1;
    const Se = Hn(s);
    Se.liveState = f, Se.liveStateVersion += 1, ae();
  }
  function y(Se = {}) {
    var P, U, ge, D, re, Ne, xe, Pe;
    const ye = Se.reason ?? ft.STATE, Q = !!Se.localOnly, me = Se.externalSync === !0, B = String(Se.cause || ""), p = String(((P = i.interaction) == null ? void 0 : P.kind) || "");
    (!Q || p === "view" || p === "pan_frame" || C() || !!i.viewTransition || B === "mode" || B === "frame_view" || B === "cutout_frame") && (l.backgroundDirty = !0), Q && G() && (i.livePaintInteractionRevision += 1, l.backgroundDirty = !0), (!Q || B === "selection" || B === "mode" || B === "cutout_frame") && (Y(), k()), le() ? l.nodePreviewPending = !0 : b(), me && ((ge = (U = St(s).dom) == null ? void 0 : U.requestDraw) == null || ge.call(U), (D = s.setDirtyCanvas) == null || D.call(s, !0, !1)), me && !Q && ((Ne = (re = s.graph) == null ? void 0 : re.setDirtyCanvas) == null || Ne.call(re, !0, !0), (Pe = (xe = t == null ? void 0 : t.canvas) == null ? void 0 : xe.setDirty) == null || Pe.call(xe, !0, !0)), c.requestDraw(ye);
  }
  function E() {
    const Se = n.getBoundingClientRect(), ye = Math.max(2, Math.round(Se.width)), Q = Math.max(2, Math.round(Se.height)), me = window.devicePixelRatio || 1, B = [n.width, n.height, r.width, r.height].join("x");
    (n.width !== ye || n.height !== Q) && (n.width = ye, n.height = Q);
    const p = HS(Se.width || ye, Se.height || Q, me, window.innerWidth || Se.width, window.innerHeight || Se.height);
    return o.resize(p.width, p.height), [n.width, n.height, r.width, r.height].join("x") === B ? !1 : (l.backgroundDirty = !0, l.dirty = !0, d && v(() => {
      l.pendingStableLayoutFrames = Math.max(Number(l.pendingStableLayoutFrames || 0), 1);
    }), !0);
  }
  function v(Se) {
    Se(), c.wake();
  }
  function $() {
    return !!i.viewTransition || z.held || !!m.state.inertia.active || l.pendingStableLayoutFrames > 0 || Math.abs(Number(i.frameRollOverlayAlpha || 0) - Number(i.frameRollOverlayTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoDimAlpha || 0) - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 || Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 || i.outputPreviewAnim !== i.outputPreviewAnimTo || le();
  }
  function L(Se = performance.now(), ye = /* @__PURE__ */ new Set()) {
    var N;
    l.nodePreviewPending && !le() && b(), ye.forEach((S) => l.reasons.add(S)), ye.size && (l.dirty = !0), [...ye].some((S) => S !== ft.OVERLAY) && (l.backgroundDirty = !0), K(), l.lastTickTs > 0 ? Math.max(1e-3, (Se - l.lastTickTs) / 1e3) : 1 / 60, l.lastTickTs = Se;
    const Q = i.mode === "frame" && ((N = i.interaction) == null ? void 0 : N.kind) === "roll_frame" ? i.interaction : null;
    Q != null && Q.shot && (i.frameRollOverlayVisual = { shot: Q.shot });
    const me = Q ? 1 : 0;
    if (Math.abs(me - Number(i.frameRollOverlayTarget || 0)) > 1e-6 && (i.frameRollOverlayFrom = Number(i.frameRollOverlayAlpha || 0), i.frameRollOverlayTarget = me, i.frameRollOverlayStartTs = Se), Math.abs(Number(i.frameRollOverlayAlpha || 0) - me) > 1e-6) {
      const S = Ie(
        (Se - Number(i.frameRollOverlayStartTs || Se)) / vN,
        0,
        1
      );
      i.frameRollOverlayAlpha = Bn(
        Number(i.frameRollOverlayFrom || 0),
        me,
        Oc(S)
      ), S >= 1 && (i.frameRollOverlayAlpha = me, me === 0 && (i.frameRollOverlayVisual = null)), l.dirty = !0;
    }
    const B = de();
    if (Math.abs(B - Number(i.cutoutPanoDimTarget || 0)) > 1e-6 && (i.cutoutPanoDimFrom = Number(i.cutoutPanoDimAlpha || 0), i.cutoutPanoDimTarget = B, i.cutoutPanoDimStartTs = Se), Math.abs(Number(i.cutoutPanoDimAlpha || 0) - B) > 1e-6) {
      const S = Ie(
        (Se - Number(i.cutoutPanoDimStartTs || Se)) / Mp,
        0,
        1
      );
      i.cutoutPanoDimAlpha = Bn(
        Number(i.cutoutPanoDimFrom || 0),
        B,
        Oc(S)
      ), S >= 1 && (i.cutoutPanoDimAlpha = B), S >= 1 && B === 0 && (i.cutoutPanoDimCorners = null), l.dirty = !0;
    }
    const p = d && q() ? 1 : 0;
    if (Math.abs(p - Number(i.cutoutPanoFrameTarget || 0)) > 1e-6 && (i.cutoutPanoFrameFrom = Number(i.cutoutPanoFrameAlpha || 0), i.cutoutPanoFrameTarget = p, i.cutoutPanoFrameStartTs = Se), Math.abs(Number(i.cutoutPanoFrameAlpha || 0) - p) > 1e-6) {
      const S = Ie(
        (Se - Number(i.cutoutPanoFrameStartTs || Se)) / Mp,
        0,
        1
      );
      i.cutoutPanoFrameAlpha = Bn(
        Number(i.cutoutPanoFrameFrom || 0),
        p,
        Oc(S)
      ), S >= 1 && (i.cutoutPanoFrameAlpha = p, p === 0 && (i.cutoutPanoFrameVisual = null)), l.dirty = !0;
    }
    if (i.outputPreviewAnim !== i.outputPreviewAnimTo) {
      const S = Math.max(1, Number(i.outputPreviewAnimDurationMs || 180)), P = Ie((Se - Number(i.outputPreviewAnimStartTs || 0)) / S, 0, 1), ge = i.outputPreviewAnimTo > i.outputPreviewAnimFrom ? wN(P) : kN(P);
      i.outputPreviewAnim = Bn(i.outputPreviewAnimFrom, i.outputPreviewAnimTo, ge), l.dirty = !0, P >= 1 && (i.outputPreviewAnim = i.outputPreviewAnimTo);
    }
    if (i.viewTransition) {
      const { view: S, done: P } = H2(i.viewTransition, Se);
      if (i.viewPosition = S.position, i.viewYaw = S.yaw_deg, i.viewPitch = S.pitch_deg, i.viewFov = S.hFOV_deg, i.viewDistance = S.distance, P) {
        const { end: U } = i.viewTransition;
        i.viewTransition = null, U && _(U), fe();
      }
      l.backgroundDirty = !0, l.dirty = !0;
    }
    if (T(Se) && (l.backgroundDirty = !0, l.dirty = !0), i.viewInertia.vx = Number(m.state.inertia.vx || 0), i.viewInertia.vy = Number(m.state.inertia.vy || 0), i.viewInertia.active = !!m.state.inertia.active, m.stepInertia(Se) && (i.viewInertia.vx = Number(m.state.inertia.vx || 0), i.viewInertia.vy = Number(m.state.inertia.vy || 0), i.viewInertia.active = !!m.state.inertia.active, l.backgroundDirty = !0, l.dirty = !0), l.pendingStableLayoutFrames > 0 && (l.pendingStableLayoutFrames -= 1, l.dirty = !0), l.dirty) {
      if (l.pendingStableLayoutFrames > 0)
        return;
      l.dirty = !1;
      const S = l.reasons;
      l.reasons = /* @__PURE__ */ new Set(), we(S);
    }
  }
  function J(Se) {
    try {
      Se();
    } catch (ye) {
      const Q = String((ye == null ? void 0 : ye.stack) || (ye == null ? void 0 : ye.message) || ye || "unknown editor frame error");
      l.tickErrorSignature !== Q && (l.tickErrorSignature = Q, console.error("[PanoramaStickers] editor frame failed", ye)), g.stageStatus = Yn, g.stageStatusDetail = "frame", u == null || u.setAttribute("data-stage-ready", ""), u == null || u.removeAttribute("data-stage-loading-kind");
    }
  }
  function O(Se = performance.now(), ye = /* @__PURE__ */ new Set()) {
    if (!l.running) return;
    const Q = i1();
    J(() => L(Se, ye)), o1(Q);
  }
  function F() {
    !l.running || !E() || J(() => {
      l.dirty = !1, we(/* @__PURE__ */ new Set([ft.RESIZE]));
    });
  }
  const x = new ResizeObserver(F);
  let R = null;
  function Z() {
    R == null || R.removeEventListener("change", he), R = window.matchMedia(`(resolution: ${window.devicePixelRatio || 1}dppx)`), R.addEventListener("change", he);
  }
  function he() {
    Z(), F();
  }
  function ce() {
    _e = r1("editor", () => {
      var Se;
      return {
        type: w,
        readOnly: a,
        mode: i.mode,
        interaction: ((Se = i.interaction) == null ? void 0 : Se.kind) ?? null,
        timelineDrag: !!h.drag,
        playing: !!M.playing
      };
    });
  }
  function be() {
    _e(), l.running = !1, c.stop(), x.disconnect(), R.removeEventListener("change", he);
  }
  return {
    connect(Se) {
      ({
        applyViewTransitionEnd: _,
        drawCutoutOutputPreview: ee,
        drawCutoutPanoPassepartout: V,
        drawFrameRollOverlay: te,
        drawFrameViewBackground: I,
        drawGridPano: X,
        drawGridUnwrap: j,
        drawLassoOutlineOverlay: W,
        drawObjects: ie,
        endEditorViewFrame: pe,
        getActiveCutoutShot: q,
        getCutoutPanoDimTarget: de,
        getSharedLivePaintSurface: ae,
        getStageImageStatus: ve,
        isPaintCompositeInteraction: G,
        measureFrameSafeRect: A,
        moveKeys: z,
        playback: M,
        rebuildPaintEngineIfNeeded: H,
        stepKeyMove: T,
        syncCutoutShot: K,
        syncFloatingViewButtonState: fe,
        syncFrameRollKnob: se,
        syncLookAtFrameButtonState: Y,
        syncViewToggleState: k,
        updateSelectionMenu: ne,
        upstreamNotice: ue
      } = Se);
    },
    requestDraw: y,
    syncCanvasSize: E,
    startAnimation: v,
    editorAnimating: $,
    tick: O,
    stageResizeObserver: x,
    watchPixelRatio: Z,
    sampleEditorDiagnostics: ce,
    stopRenderLoop: be
  };
}
function Z2(e) {
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
    state: h,
    studio: w,
    type: g,
    uiState: m
  } = e;
  let _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T, K, fe, se, Y, k, ne, ue, _e, we, C, le, b, y = 0;
  function E() {
    m.toolButtons.forEach((ce) => {
      const be = ce.attr === "data-tool-mode", Se = ce.attr === "data-paint-tool", ye = ce.attr === "data-mask-tool";
      ce.active = be ? ce.value === r.primaryTool : Se ? ce.key === r.paintTool : ye ? ce.key === r.maskTool : !1, ce.pressed = ce.active ? "true" : ce.pressed == null ? null : "false";
    });
  }
  function v() {
    if (w && Ji(m.toolButtons, "value", "add-camera", { disabled: ae() }), g !== "cutout") return;
    const ce = V();
    Ji(m.toolButtons, "value", "add-or-look", {
      visible: !0,
      accent: !0,
      label: ce ? "Look At Frame" : "Add Frame",
      tip: ce ? "Look at frame" : "Add frame",
      icon: ce ? ze.camera : ze.plus_circle
    });
  }
  function $() {
    const ce = h2({
      spaceView: fe(),
      spaceMode: gl(r.spaceMode, r.viewTransition),
      readOnly: c,
      frameMode: f && r.mode === "frame",
      showGrid: r.showGrid
    });
    m.space && Object.assign(m.space, ce.space);
    for (const [be, Se] of Object.entries(ce.buttons)) Ji(m.floatingButtons, "action", be, Se);
  }
  function L() {
    var Se;
    const ce = b0({ hasShot: !!V(), erp: A(), hidden: ae() && !ee(), studio: w });
    r.mode === "frame" && ce.disabled && (w ? Y(V()) : r.mode = "pano"), r.outputPreviewRect = null, m.viewButtons.forEach((ye) => {
      const Q = ye.key === r.mode;
      ye.pressed = Q ? "true" : "false", ye.visible = !(ye.key === "frame" && !f), ye.key === "frame" ? Object.assign(ye, ce) : ye.disabled = !1;
    });
    const be = f && r.mode === "frame" ? V() : null;
    m.frameRail.visible = !!be, m.frameRail.disabled = c || (be == null ? void 0 : be.locked) === !0, m.frameRollKnob.visible = !!be && !c && be.locked !== !0, m.frameRollKnob.disabled = c || (be == null ? void 0 : be.locked) === !0, m.frameRollKnob.rollDeg = Number((be == null ? void 0 : be.roll_deg) ?? (be == null ? void 0 : be.rot_deg) ?? 0), m.frameRollKnob.displayValue = ao(m.frameRollKnob.rollDeg), m.frameRollKnob.dragging = ((Se = r.interaction) == null ? void 0 : Se.kind) === "roll_frame", m.frameRollKnob.armed = !!be && r.altModifier === !0, m.frameRail.rollKnob = m.frameRollKnob, m.frameRail.aspectLabel = be ? Dr(be) : "", m.frameRail.aspectChoices = v0(be ? String(Dr(be)) : null, { erp: w, coverage: h.coverage }), be || (m.frameRail.aspectOpen = !1), m.outputPreviewToggle.visible = g === "cutout" && r.mode !== "frame" && !!V(), f && m.cameraPreview && (m.cameraPreview.visible = r.mode !== "frame" && _(), m.cameraPreview.expanded = !!r.outputPreviewExpanded, m.cameraPreview.settled = m.cameraPreview.settled === !0 && d.pendingStableLayoutFrames <= 0 && d.hasPresentedFrame), $(), H() ? le(r.pointerPos) : ue(r.mode === "pano" ? "grab" : "default");
  }
  function J() {
    var be;
    const ce = r.mode === "frame" ? V() : null;
    m.frameRollKnob.visible = !!ce && !c && ce.locked !== !0, m.frameRollKnob.rollDeg = Number((ce == null ? void 0 : ce.roll_deg) ?? (ce == null ? void 0 : ce.rot_deg) ?? 0), m.frameRollKnob.displayValue = ao(m.frameRollKnob.rollDeg), m.frameRollKnob.dragging = ((be = r.interaction) == null ? void 0 : be.kind) === "roll_frame", m.frameRollKnob.armed = !!ce && r.altModifier === !0;
  }
  function O() {
    E();
    const ce = u2({
      editor: r,
      swatches: Kl,
      paintColorPopOpen: i ? !i.hidden : !1,
      colorToCss: mr,
      colorsApproximatelyEqual: ml,
      rgb01ToHsv: Iu,
      hsv01ToRgb: Cu,
      getBrushPresetIdForTool: te,
      isActiveLassoTool: G
    });
    if (Object.assign(m.paintDock, ce), C(), !ce.visible) {
      i && (i.hidden = !0);
      return;
    }
    y && (clearTimeout(y), y = 0), o && (!ce.colorEnabled && i && !i.hidden && (y = window.setTimeout(() => {
      i.hidden = !0, m.paintDock.colorPopOpen = !1, y = 0;
    }, 170)), i && (i.style.setProperty("--picker-hue-color", ce.pickerHueColor), i.style.setProperty("--picker-sat", ce.pickerSat), i.style.setProperty("--picker-val", ce.pickerVal), i.style.setProperty("--picker-hue", ce.pickerHue)), s && (s.style.left = ce.pickerSvLeft, s.style.top = ce.pickerSvTop), a && (a.style.left = ce.pickerHueLeft));
  }
  function F() {
    const ce = k(f && r.mode === "frame" ? V() : W());
    ce && (r.panelLastValues = {
      yaw_deg: Number(ce.yaw_deg || 0),
      pitch_deg: Number(ce.pitch_deg || 0),
      hFOV_deg: Number(ce.hFOV_deg || (g === "stickers" ? 30 : 90)),
      vFOV_deg: Number(ce.vFOV_deg || (g === "stickers" ? 30 : 60)),
      rot_deg: Number(ce.rot_deg || 0),
      roll_deg: Number(ce.roll_deg || 0),
      aspect_id: Dr(ce)
    }, x());
  }
  function x() {
    _e(), we(), Z();
  }
  function R() {
    const ce = f && r.mode === "frame" ? V() : null;
    return [...ie(), ne(), ce].some((be) => T(be) ? Qa(be) : K(be) && ae() && Qa(h.camera));
  }
  function Z() {
    if (n) return;
    h.ui_settings = h.ui_settings || {};
    const ce = c2(h.ui_settings);
    if (l) {
      m.sidePanel = d2({
        coverage: h.coverage,
        uiSettings: ce,
        normalizeCoverageValue: Rn
      });
      return;
    }
    const be = W(), Se = f && r.mode === "frame" ? V() : null, ye = Se || be, Q = Se ? [Se] : ie(), me = Se ? "shot" : pe();
    if (Q.length > 1 && (r.panelLastValues = r.panelLastValues || { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 }), ye && me !== "stroke") {
      const xe = k(ye);
      r.panelLastValues = {
        yaw_deg: Number(xe.yaw_deg || 0),
        pitch_deg: Number(xe.pitch_deg || 0),
        hFOV_deg: Number(xe.hFOV_deg || (me === "image" ? 30 : 90)),
        vFOV_deg: Number(xe.vFOV_deg || (me === "image" ? 30 : 60)),
        rot_deg: Number(xe.rot_deg || 0),
        roll_deg: Number(xe.roll_deg || 0),
        aspect_id: Dr(xe)
      }, T(ye) && (r.panelLastValues.opacity = Ei(ye, r.frame).opacity * 100);
    }
    const B = r.panelLastValues || (g === "stickers" || me === "image" ? { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 30, vFOV_deg: 30, rot_deg: 0 } : { yaw_deg: 0, pitch_deg: 0, hFOV_deg: 90, vFOV_deg: 60, roll_deg: 0, aspect_id: "1:1" }), p = me === "stroke" ? null : ye, N = ne(), S = t && (me === "shot" || me === "frame") && ve(), P = N ? nS(N, r.frame) : S ? { ...p, ...Qv(h.camera, r.frame), vFOV_deg: p.vFOV_deg } : T(p) ? r.panelLastValues : p || B, U = N ? b(N) : !!p && !M(p);
    r.panelWasEnabled = U, v();
    let ge = null;
    if (Se) {
      const xe = de({ item: Se, kind: "shot", label: "Frame" });
      ge = {
        label: "Selection",
        open: !1,
        disabled: !0,
        currentLabel: xe.label,
        currentIcon: xe.icon || null,
        items: [{
          id: String(Se.id || ""),
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
        const Le = V();
        Le && xe.push({ id: Le.id, label: "Camera", icon: q("frame"), item: Le, kind: "frame" }), j().forEach((je, Ke) => {
          var Fe, Ae;
          if (!je || T(je) && !je.visible) return;
          const $e = u ? iu(je) : z(je) ? String(je.id || $d) : String(((Ae = (Fe = h.assets) == null ? void 0 : Fe[je.asset_id]) == null ? void 0 : Ae.name) || je.asset_id || je.id), He = `${Ke + 1}. ${$e}${z(je) && se(je) ? " (hidden)" : ""}`, oe = de({ item: je, label: He, kind: "image" });
          xe.push({ id: je.id, label: oe.label, icon: oe.icon, item: je, kind: "image" });
        });
      } else
        I().forEach((Le) => {
          if (!(Le != null && Le.item)) return;
          const je = de(Le);
          xe.push({ id: Le.item.id, label: je.label, icon: je.icon, item: Le.item, kind: Le.kind });
        });
      const Pe = (p == null ? void 0 : p.id) || "", Ce = N ? { label: iu(N), icon: ze.globe } : xe.find((Le) => Le.id === Pe) || xe[0];
      ge = {
        label: "Selection",
        open: !1,
        disabled: xe.length <= 1,
        currentLabel: Ce.label,
        currentIcon: Ce.icon || null,
        items: xe.map((Le) => ({
          id: Le.id,
          label: Le.label,
          icon: Le.icon || null,
          active: Le.id === Pe
        }))
      };
    }
    const D = [], re = (xe, Pe, Ce, Le, je) => {
      const Ke = Ie(Number(P[xe] || 0), Ce, Le);
      D.push({
        key: xe,
        label: Pe,
        min: Ce,
        max: Le,
        step: je,
        value: Ke,
        displayValue: ao(Ke),
        fillPct: Ie((Ke - Ce) / Math.max(1e-6, Le - Ce) * 100, 0, 100),
        enabled: U && !c
      });
    }, Ne = [];
    if (N) {
      for (const [xe, Pe] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
        const Ce = Lc(P[xe]);
        re(xe, Pe, -Ce, Ce, 0.01);
      }
      re("yaw_deg", "Yaw", -180, 180, 0.1), re("pitch_deg", "Pitch", -90, 90, 0.1), re("roll_deg", "Roll", -180, 180, 0.1), re("scale", "Scale", s0, Lc(P.scale), 0.01), re("opacity", "Opacity", 0, 100, 1);
    } else if (Q.length > 1)
      Ne.push(`Selected objects: ${Q.length}`), Ne.push("Multi-selection supports z-order and delete.");
    else {
      const xe = me === "shot" || me === "frame";
      if (S)
        for (const [Pe, Ce] of [["position_x", "X"], ["position_y", "Y"], ["position_z", "Z"]]) {
          const Le = Lc(P[Pe]);
          re(Pe, Ce, -Le, Le, 0.01);
        }
      re("yaw_deg", "Yaw", -180, 180, 0.1), re("pitch_deg", "Pitch", -90, 90, 0.1), re(me === "image" || g === "stickers" && !xe ? "rot_deg" : "roll_deg", "Roll", -180, 180, 0.1), re("hFOV_deg", "H FOV", 1, 179, 0.1), re("vFOV_deg", "V FOV", 1, 179, 0.1), xe && D.forEach((Pe) => {
        Pe.enabled = Pe.enabled && m2(Pe.key, { erp: A() });
      }), T(p) && !xe && D.forEach((Pe) => {
        Pe.enabled = Pe.enabled && g2(Pe.key, { port: z(p) });
      }), u && !xe && re("opacity", "Opacity", 0, 100, 1);
    }
    m.sidePanel = b2({
      coverage: h.coverage,
      readOnly: c,
      selectionPicker: ge,
      enabled: U,
      selectedKind: N ? "world" : me,
      selectedItems: Q,
      params: D,
      notes: Ne,
      uiSettings: ce,
      normalizeCoverageValue: Rn
    });
  }
  function he() {
    const { canUndo: ce, canRedo: be } = X();
    Ji(m.toolButtons, "value", "undo", { disabled: !ce }), Ji(m.toolButtons, "value", "redo", { disabled: !be });
  }
  return {
    connect(ce) {
      ({
        cameraPreviewShown: _,
        cameraShoots: ee,
        getActiveCutoutShot: V,
        getBrushPresetIdForTool: te,
        getCutoutInspectorItems: I,
        getHistoryCapabilities: X,
        getList: j,
        getSelected: W,
        getSelectedItems: ie,
        getSelectedKind: pe,
        getSelectionItemIcon: q,
        getSelectionItemLabelData: de,
        hasCamera: ae,
        hasSpaceContent: ve,
        isActiveLassoTool: G,
        isErpCamera: A,
        isExternalSticker: z,
        isItemLocked: M,
        isPaintCursorEnabled: H,
        isSceneSticker: T,
        isShotItem: K,
        isSpaceView: fe,
        isStickerHidden: se,
        leaveFrameView: Y,
        poseOf: k,
        selectedWorldSticker: ne,
        setCanvasCursor: ue,
        syncCutoutShot: _e,
        syncTimeline: we,
        syncVideoTransportVisibility: C,
        updateCursor: le,
        worldStickerEditable: b
      } = ce);
    },
    syncLookAtFrameButtonState: v,
    syncFloatingViewButtonState: $,
    syncViewToggleState: L,
    syncFrameRollKnob: J,
    syncPaintUi: O,
    syncSidePanelControls: F,
    updateSidePanel: x,
    inspectorTimed: R,
    syncSidePanelModel: Z,
    syncUndoRedoButtons: he
  };
}
function Q2(e) {
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
  let h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve;
  function G() {
    if (!s || n) return;
    const y = z(), E = l.selection, v = E && M(E.owner);
    if (E) {
      const $ = v ? H(E) : [];
      E.frames = E.frames.filter((L) => $.some((J) => v[J].keyframes.some((O) => O.frame === L))), E.frames.length || (l.selection = null);
    }
    d.timeline = k2(o, {
      span: y,
      selection: l.selection,
      selectedId: t.worldSelectedId || t.selectedId,
      expanded: l.expanded ?? A(),
      openRows: l.openRows,
      audio: Y() && d.videoTransport.hasAudio ? { muted: u.muted } : null,
      // A VIDEO on bg_media or sticker sets the Timeline fps (ADR 0024).
      fpsLocked: f(r) !== null || tg(r, ["bg_media", "sticker"]),
      // Panorama Studio shows its Camera, its Stickers and its `scene` on one Timeline (#89).
      camera: g(),
      cameraHideable: a,
      // Another Studio's Scene on `scene` is upstream: its elements stay off this Timeline (#90).
      scene: i && !!jl(r).scene && !ae()
    }), d.easing = l.selection ? M2(v, H(l.selection), l.selection.frames, T(l.selection.owner)) : null;
  }
  function A() {
    return _m(o, { camera: a });
  }
  function z(y = null) {
    const E = o.timeline.fps, v = o.stickers.find(_), $ = v ? w() : null, L = Math.max(
      d.videoTransport.ready && !de() ? Math.round(Number(d.videoTransport.duration || 0) * E) : 0,
      $ ? fg(v.clip, E, $.meta) : 0,
      ve()
    );
    return wm(o, { minimum: Math.round(E * 5), frames: L, openClip: y, camera: a });
  }
  function M(y) {
    return y === "camera" ? g() ? o.camera : null : y === "scene" ? i ? o.scene : null : o.stickers.find((E) => E.id === y) || null;
  }
  function H(y) {
    return y.lane ? [y.lane] : wo(M(y.owner));
  }
  function T(y) {
    if (y === "camera") return 0;
    const { clip: E } = M(y);
    return E.start - E.in;
  }
  function K(y) {
    return `${vo(y, t.frame)}:${y.start - y.in}`;
  }
  function fe(y) {
    const E = M(y);
    return !!E && E.locked !== !0;
  }
  function se(y) {
    const E = Math.max(0, Math.round(y));
    if (E === t.frame) return;
    W(), t.frame = E, c.frame.value = E, W();
    const v = [t.selectedId, t.worldSelectedId];
    X(), ee(), v[0] !== t.selectedId || v[1] !== t.worldSelectedId ? q() : m() && ie(), pe(), j({ reason: ft.PLAYHEAD });
  }
  function Y() {
    return u instanceof HTMLVideoElement && !!u.getAttribute("src");
  }
  function k(y) {
    I(), V.seek(y);
  }
  function ne() {
    s && V.stop();
  }
  function ue() {
    I(), V.toggle();
  }
  function _e() {
    W(), ee(), q(), pe(), j();
  }
  function we() {
    te(), h(), _e();
  }
  function C() {
    const { selection: y } = l;
    fe(y.owner) && (ne(), Mv(M(y.owner), H(y), y.frames, t.frame - T(y.owner)), l.selection = null, we());
  }
  function le(y) {
    const E = Di(y);
    if (E === null || E === o.timeline.fps) return;
    ne();
    const v = Math.round(t.frame * E / o.timeline.fps);
    Bv(o, E), l.selection = null, V.seek(v), we();
  }
  function b() {
    const y = f(r);
    y !== null && y !== o.timeline.fps && le(y);
  }
  return {
    connect(y) {
      ({
        commitAndRefreshNode: h,
        getPortMedia: w,
        hasCamera: g,
        inspectorTimed: m,
        isExternalSticker: _,
        markObjectVisualsDirty: ee,
        playback: V,
        pushHistory: te,
        refreshModalVideoSource: I,
        releaseHiddenSelection: X,
        requestDraw: j,
        syncCutoutShot: W,
        syncSidePanelModel: ie,
        updateSelectionMenu: pe,
        updateSidePanel: q,
        upstreamBackground: de,
        upstreamLinked: ae,
        upstreamSpanFrames: ve
      } = y);
    },
    syncTimeline: G,
    timelineTimed: A,
    timelineSpanFrames: z,
    timelineOwner: M,
    selectedLanes: H,
    timelineOffset: T,
    clipView: K,
    timelineEditable: fe,
    setTimelineFrame: se,
    jumpTimelineTo: k,
    stopTimelinePlayback: ne,
    togglePlayback: ue,
    refreshTimelineEdit: _e,
    commitTimelineEdit: we,
    deleteSelectedKeyframes: C,
    changeTimelineFps: le,
    applyVideoTimelineFps: b
  };
}
function eA(e) {
  const {
    dragFrames: t,
    editor: r,
    readOnly: n,
    state: i,
    stateV2: o,
    timeline: s,
    uiState: a
  } = e;
  let l, c, d, u, f, h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M;
  function H(T) {
    if (!(n || !o)) {
      if (T.type === "seek") {
        if (T.phase === "move") {
          s.scrubFrame = T.frame, t.request("seek");
          return;
        }
        t.cancel(), T.phase === "start" && m(), g.seek(T.frame);
        return;
      }
      if (T.type === "play") {
        G();
        return;
      }
      if (T.type === "mute") {
        A(), ie();
        return;
      }
      if (T.type === "toggle-expanded") {
        s.expanded = !(s.expanded ?? ve()), s.selection = null, ie();
        return;
      }
      if (T.type === "toggle-row") {
        s.openRows.has(T.id) ? s.openRows.delete(T.id) : s.openRows.add(T.id), ie();
        return;
      }
      if (T.type === "toggle-visible") {
        if (T.id === _0) i.painting_visible = !i.painting_visible;
        else {
          const K = de(T.id);
          if (!K) return;
          K.visible = !K.visible;
        }
        ee(), u();
        return;
      }
      if (T.type === "select-row") {
        const K = i.stickers.find((fe) => fe.id === T.id);
        if (K && !K.visible || T.id === "camera" && !l()) return;
        K && !vo(K.clip, r.frame) && w(K.clip.start), (K == null ? void 0 : K.placement) === "world" ? te(K.id) : T.id === "camera" ? X(f()) : X(h().find((fe) => fe.id === T.id) || null), W(), s.selection = null, M(), z(), V();
        return;
      }
      if (T.type === "select-keys") {
        const K = q(T.owner), fe = T.frames.map((k) => k - K), se = s.selection, Y = (se == null ? void 0 : se.owner) === T.owner && se.lane === T.lane;
        if (T.additive && Y) {
          const k = new Set(se.frames);
          for (const ne of fe)
            k.has(ne) ? k.delete(ne) : k.add(ne);
          se.frames = [...k].sort((ne, ue) => ne - ue);
        } else
          s.selection = fe.length ? { owner: T.owner, lane: T.lane, frames: fe } : null;
        ie();
        return;
      }
      if (T.type === "move-keys") {
        const K = s.selection;
        if (!K || !pe(K.owner)) return;
        const fe = de(K.owner), se = I(K);
        if (T.phase === "start") {
          j(), s.drag = { keyframes: se.map((ne) => structuredClone(fe[ne].keyframes)), frames: K.frames };
          return;
        }
        const { drag: Y } = s;
        if (!(Y != null && Y.keyframes)) return;
        se.forEach((ne, ue) => {
          fe[ne].keyframes = structuredClone(Y.keyframes[ue]);
        });
        const k = Pv(fe, se, Y.frames, T.delta, -q(K.owner));
        if (K.frames = Y.frames.map((ne) => ne + k), T.phase !== "end") {
          t.request("timeline"), t.request("view");
          return;
        }
        t.cancel(), s.drag = null, k ? u() : _();
        return;
      }
      if (T.type === "clip") {
        const K = T.id === "scene" ? de("scene") : i.stickers.find((k) => k.id === T.id);
        if (!K || K.locked) return;
        if (T.phase === "start") {
          j(), s.drag = { clip: { ...K.clip }, span: ae(K.clip) };
          return;
        }
        const { drag: fe } = s;
        if (!(fe != null && fe.clip)) return;
        const se = fe.clip, Y = d(K.clip);
        if (K.clip = { ...se }, T.delta && T.mode === "move" ? Cv(K.clip, T.delta) : T.delta && T.mode === "start" ? Iv(K.clip, se.start + T.delta) : T.delta && Ev(K.clip, (se.duration === null ? fe.span : se.start + se.duration) + T.delta, fe.span), T.phase !== "end") {
          t.request("timeline"), d(K.clip) !== Y && t.request("view");
          return;
        }
        t.cancel(), s.drag = null, ee(), JSON.stringify(K.clip) !== JSON.stringify(se) ? u() : _();
        return;
      }
      if (T.type === "key-row") {
        if (T.owner === "scene" || !pe(T.owner)) return;
        j(), wv(de(T.owner), r.frame - q(T.owner)), u();
        return;
      }
      if (T.type === "fps") {
        const K = Tv(T.fps);
        if (K === null || K === i.timeline.fps || a.timeline.fpsLocked) {
          ie();
          return;
        }
        c(K);
        return;
      }
      if (T.type === "length") {
        const K = Dv(T.length);
        if (K === void 0 || K === i.timeline.length) {
          ie();
          return;
        }
        j(), i.timeline.length = K, u();
        return;
      }
      if (T.type === "easing") {
        const K = s.selection;
        if (!K || !pe(K.owner)) return;
        j(), Av(de(K.owner), I(K), K.frames, T.easing), T.commit ? u() : _();
      }
    }
  }
  return {
    connect(T) {
      ({
        cameraShoots: l,
        changeTimelineFps: c,
        clipView: d,
        commitTimelineEdit: u,
        getActiveCutoutShot: f,
        getList: h,
        jumpTimelineTo: w,
        playback: g,
        refreshModalVideoSource: m,
        refreshTimelineEdit: _,
        releaseHiddenSelection: ee,
        requestDraw: V,
        selectWorldSticker: te,
        selectedLanes: I,
        setSelectedItem: X,
        stopTimelinePlayback: j,
        syncFloatingViewButtonState: W,
        syncTimeline: ie,
        timelineEditable: pe,
        timelineOffset: q,
        timelineOwner: de,
        timelineSpanFrames: ae,
        timelineTimed: ve,
        togglePlayback: G,
        toggleVideoMuted: A,
        updateSelectionMenu: z,
        updateSidePanel: M
      } = T);
    },
    onTimelineAction: H
  };
}
function tA(e) {
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
  let d, u, f, h;
  function w() {
    a || (l.projection_model = "pinhole_rectilinear", l.alpha_mode = "straight", s && (l.output_preset = u(Number(l.output_preset || 2048))), i && (l.coverage = Rn(i.value)), r && (l.bg_color = String(r.value || l.bg_color || "#00ff00")), g(), o.setDirtyCanvas(!0, !0));
  }
  function g() {
    var I;
    if (a || (f(), l.coverage = Rn(l.coverage), Im(o, l.active), !c)) return;
    const te = Em(o, l, String(c.value ?? ""), { rebased: n });
    te !== null && (c.value = te, (I = c.callback) == null || I.call(c, te));
  }
  function m() {
    l.ui_settings = DN(l.ui_settings), a || g();
  }
  function _() {
    var te;
    a || (g(), (te = o.setDirtyCanvas) == null || te.call(o, !0, !0));
  }
  function ee() {
    a || d() && h().catch((te) => {
      console.error("[PanoramaPaintingLayerSync] background close sync failed", te);
    });
  }
  function V(te = {}) {
    var j, W, ie, pe, q, de, ae, ve, G, A, z;
    const I = te.syncPreview !== !1, X = te.syncGraph !== !1;
    I && ((ie = (W = (j = ug(o)) == null ? void 0 : j.runtime) == null ? void 0 : W.requestDraw) == null || ie.call(W), (de = (q = (pe = cg(o)) == null ? void 0 : pe.dom) == null ? void 0 : q.requestDraw) == null || de.call(q), (ae = o.setDirtyCanvas) == null || ae.call(o, !0, !1)), X && ((G = (ve = o.graph) == null ? void 0 : ve.setDirtyCanvas) == null || G.call(ve, !0, !0), (z = (A = t == null ? void 0 : t.canvas) == null ? void 0 : A.setDirty) == null || z.call(A, !0, !0));
  }
  return {
    connect(te) {
      ({
        needsPaintingLayerSync: d,
        resolveEditorOutputPresetWidth: u,
        syncCutoutShot: f,
        syncPaintingLayerAsync: h
      } = te);
    },
    apply: w,
    commitState: g,
    persistUiSettings: m,
    commitAndRefreshNode: _,
    triggerBackgroundPersistenceOnClose: ee,
    syncCoverageChangeToNodePreviews: V
  };
}
function nA(e) {
  const {
    editor: t,
    readOnly: r,
    sceneV2: n,
    state: i,
    studio: o,
    type: s,
    uiState: a
  } = e;
  let l, c, d, u, f, h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T, K, fe, se, Y, k, ne;
  function ue(E, v, $ = "Clear") {
    return new Promise((L) => {
      a.confirmDialog = {
        visible: !0,
        title: String(E || ""),
        text: String(v || ""),
        confirmLabel: String($ || "Confirm"),
        resolve: L
      };
    });
  }
  async function _e() {
    var $, L;
    if (r || !await ue(
      "Clear All Paint Data",
      s === "stickers" ? "This will remove all paint, mask, and sticker images in the current node." : "This will remove all paint, mask, and images in the current node. The cutout frame will be preserved.",
      "Clear All"
    )) return;
    i.painting = bo(null), G();
    const v = d();
    if (s === "stickers")
      i.stickers = n ? i.stickers.filter((J) => J.placement === "world" || v.includes(J)) : v, n || (i.assets = {}), t.selectedId = (($ = v[0]) == null ? void 0 : $.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = ((L = v[0]) == null ? void 0 : L.id) || null, z();
    else {
      const J = Gv(i.shots, i.active.selected_shot_id);
      i.stickers = v, i.assets = {}, i.shots = J.shots, t.selectedId = J.selectedShotId, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = null, i.active.selected_shot_id = J.selectedShotId, !J.selectedShotId && t.mode === "frame" && (t.mode = "pano"), t.cutoutAspectOpen = !1, z();
    }
    M(), u(), k(), Y(), H();
  }
  async function we(E) {
    var O, F, x, R;
    if (r) return;
    const v = E === "mask" ? "mask" : "paint", $ = v === "mask" ? "Mask" : "Paint", L = _(v);
    if (!(!L.length && !(((O = t.interaction) == null ? void 0 : O.kind) === "draw" && ((F = t.interaction) == null ? void 0 : F.layerKind) === v) || !await ue(
      `Clear ${$}`,
      `This will remove all ${v} strokes in the current node.`,
      `Clear ${$}`
    ))) {
      if (((x = t.interaction) == null ? void 0 : x.kind) === "draw" && ((R = t.interaction) == null ? void 0 : R.layerKind) === v) {
        const Z = h(t.interaction);
        Z && t.paintEngine.cancelActiveStroke(Z), t.interaction = null;
      }
      L.length = 0, i.painting.raster_objects = ee().filter((Z) => String((Z == null ? void 0 : Z.layerKind) || "paint") !== v), v === "paint" && (m().length = 0), G(), M(), u(), k(), Y(), se(), H();
    }
  }
  function C() {
    if (r) return;
    const E = V();
    if (!E || !pe(E) || I(E) || n && de(E)) return;
    let v;
    n ? v = aS(E, $l(i), g()) : (v = JSON.parse(JSON.stringify(E)), v.id = Uo("st"), v.yaw_deg = Ht((v.yaw_deg || 0) + 8), v.z_index = g()), i.stickers.push(v), i.active.selected_sticker_id = v.id, t.selectedId = v.id, t.selectedIds = [v.id], ae(), M(), u(), Y(), k(), H();
  }
  function le() {
    const E = T();
    return E ? (ne(E) && (K(), oS(i, E.id), c(), ae(), M(), u(), k(), Y(), fe(), H()), !0) : !1;
  }
  function b() {
    var $, L, J, O, F;
    if (r) return;
    const E = te(), v = V();
    if (!(!v && E.length === 0) && !E.some((x) => X(x))) {
      if (K(), E.length > 1) {
        const x = new Set(E.filter((he) => q(he)).map((he) => String(he.actionGroupId || he.id || ""))), R = new Set(E.filter((he) => j(he)).map((he) => A(he.rasterObjectId || he.id || ""))), Z = new Set(E.filter(pe).map((he) => String(he.id || "")));
        x.size > 0 && (i.painting.paint.strokes = (Array.isArray((L = ($ = i.painting) == null ? void 0 : $.paint) == null ? void 0 : L.strokes) ? i.painting.paint.strokes : []).filter((he) => !x.has(String((he == null ? void 0 : he.actionGroupId) || ""))), i.painting.groups = m().filter((he) => !x.has(String((he == null ? void 0 : he.actionGroupId) || (he == null ? void 0 : he.id) || ""))), G()), R.size > 0 && (i.painting.raster_objects = ee().filter((he) => !R.has(String((he == null ? void 0 : he.id) || ""))), ve()), Z.size > 0 && (i.stickers = (Array.isArray(i.stickers) ? i.stickers : []).filter((he) => Z.has(String((he == null ? void 0 : he.id) || "")) ? I(he) ? (ie(he) || (he.visible = !1), !0) : !1 : !0), z(), ae()), t.selectedId = null, t.selectedIds = [], M(), u(), k(), Y(), H();
        return;
      }
      if (q(v)) {
        const x = String(v.actionGroupId || v.id || "").trim();
        i.painting.paint.strokes = (Array.isArray((O = (J = i.painting) == null ? void 0 : J.paint) == null ? void 0 : O.strokes) ? i.painting.paint.strokes : []).filter((R) => String((R == null ? void 0 : R.actionGroupId) || "").trim() !== x), i.painting.groups = m().filter((R) => String((R == null ? void 0 : R.actionGroupId) || (R == null ? void 0 : R.id) || "").trim() !== x), G(), t.selectedId = null, t.selectedIds = [], M(), u(), k(), Y(), H();
        return;
      }
      if (j(v)) {
        const x = A(v.rasterObjectId || v.id || "");
        i.painting.raster_objects = ee().filter((R) => String((R == null ? void 0 : R.id) || "").trim() !== x), ve(), t.selectedId = null, t.selectedIds = [], M(), u(), k(), Y(), H();
        return;
      }
      if (o && W(v)) {
        f();
        return;
      }
      if (s === "stickers" || pe(v)) {
        if (I(v)) {
          if (ie(v)) return;
          v.visible = !1, ae(), M(), u(), k(), Y(), H();
          return;
        }
        i.stickers = i.stickers.filter((x) => x.id !== v.id), z(), ae(), t.selectedId = ((F = w()[0]) == null ? void 0 : F.id) || null, t.selectedIds = t.selectedId ? [t.selectedId] : [], i.active.selected_sticker_id = t.selectedId, M(), u(), k(), Y(), H();
        return;
      }
      l();
    }
  }
  function y() {
    t.primaryTool !== "cursor" && (t.primaryTool = "cursor", se(), k());
  }
  return {
    connect(E) {
      ({
        clearCutoutFrame: l,
        clearWorldSelection: c,
        collectExternalStickersForClearAll: d,
        commitAndRefreshNode: u,
        deleteStudioCamera: f,
        getActivePaintTargetDescriptor: h,
        getList: w,
        getNextStickerZIndex: g,
        getPaintingGroupList: m,
        getPaintingLayerList: _,
        getRasterObjectList: ee,
        getSelected: V,
        getSelectedItems: te,
        isExternalSticker: I,
        isItemLocked: X,
        isRasterObjectItem: j,
        isShotItem: W,
        isStickerHidden: ie,
        isStickerItem: pe,
        isStrokeGroupItem: q,
        isUploadingSticker: de,
        markObjectVisualsDirty: ae,
        markPaintCompositeVisualsDirty: ve,
        markPaintStrokeVisualsDirty: G,
        parseRasterObjectSelectionId: A,
        pruneUnusedAssets: z,
        pushHistory: M,
        requestDraw: H,
        selectedWorldSticker: T,
        stopTimelinePlayback: K,
        syncFloatingViewButtonState: fe,
        syncPaintUi: se,
        updateSelectionMenu: Y,
        updateSidePanel: k,
        worldStickerEditable: ne
      } = E);
    },
    clearAll: _e,
    clearPaintingLayer: we,
    duplicateSelected: C,
    deleteSelectedWorldSticker: le,
    deleteSelected: b,
    forceCursorTool: y
  };
}
function rA(e) {
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
    vueModal: h
  } = e;
  let w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M;
  function H(O) {
    return Fd(O == null ? void 0 : O.dataTransfer);
  }
  function T(O) {
    const F = !!O;
    n.active !== F && (n.active = F, d.classList.toggle("drop-active", F));
  }
  function K() {
    const O = new Set(
      (u.stickers || []).map((F) => String((F == null ? void 0 : F.asset_id) || "")).filter((F) => !!F)
    );
    Object.keys(u.assets || {}).forEach((F) => {
      O.has(F) || (delete u.assets[F], s.delete(F));
    });
  }
  async function fe(O) {
    if (l || f !== "stickers" && f !== "cutout" || !rr(O)) return;
    if (c) {
      A(), await ue(O);
      return;
    }
    const F = Uo("asset"), x = Ho(a, `add:${F}`, async () => {
      try {
        const { image: R } = await Go(O);
        s.set(F, R);
        const Z = Uo("st");
        u.stickers.push({
          id: Z,
          asset_id: F,
          yaw_deg: i.viewYaw,
          pitch_deg: i.viewPitch,
          hFOV_deg: 30,
          vFOV_deg: m(30, Number(R.naturalWidth || R.width || 1), Number(R.naturalHeight || R.height || 1)),
          rot_deg: 0,
          z_index: te()
        }), ae(u.stickers[u.stickers.length - 1]), V(), M(), z(), q();
        const he = await _i(O, {
          fetchApi: (Se, ye) => t.fetchApi(Se, ye)
        });
        if (!(Array.isArray(u.stickers) ? u.stickers : []).filter((Se) => String((Se == null ? void 0 : Se.asset_id) || "") === F).length) return;
        u.assets[F] = he, K(), pe(), g(), M(), z(), q();
      } catch (R) {
        delete u.assets[F], s.delete(F);
        const Z = Array.isArray(u.stickers) ? u.stickers : [], he = Z.filter((ce) => String((ce == null ? void 0 : ce.asset_id) || "") === F);
        throw he.length && (u.stickers = Z.filter((ce) => String((ce == null ? void 0 : ce.asset_id) || "") !== F), he.some((ce) => String((ce == null ? void 0 : ce.id) || "") === String(i.selectedId || "")) && ae(null), M(), z(), q(), g()), R;
      }
    });
    try {
      await x;
    } catch {
    }
  }
  function se() {
    var O;
    l || f !== "stickers" && f !== "cutout" || (O = h == null ? void 0 : h.openImagePicker) == null || O.call(h, "add");
  }
  function Y() {
    var O;
    l || !c || (O = h == null ? void 0 : h.openImagePicker) == null || O.call(h, "add-world");
  }
  async function k(O) {
    l || !c || !rr(O) || (A(), await ue(O, "world"));
  }
  function ne() {
    const O = { x: r.width / 2, y: r.height / 2 }, F = j() ? o.pick(ee(), O.x, O.y, r.width, r.height) : null;
    return ES(ve(), F, _());
  }
  async function ue(O, F = "sky") {
    const x = $l(u), R = Ho(a, `add:${x}`, async () => {
      const { image: Z } = await Go(O), he = {
        yaw_deg: i.viewYaw,
        pitch_deg: i.viewPitch,
        hFOV_deg: 30,
        vFOV_deg: m(30, Number(Z.naturalWidth || Z.width || 1), Number(Z.naturalHeight || Z.height || 1)),
        rot_deg: 0
      }, ce = { kind: "file", filename: "" }, be = F === "world" ? sS(x, ce, ne()) : fd(x, ce, he, te());
      s.set(G(be), Z), u.stickers.push(be), F === "world" ? de(x) : ae(be), V(), M(), z(), q();
      try {
        const Se = await _i(O, {
          fetchApi: (Q, me) => t.fetchApi(Q, me)
        }), ye = u.stickers.find((Q) => Q.id === x);
        if (!ye) return;
        ye.source = wa(Se), s.set(G(ye), Z), pe(), g();
      } catch (Se) {
        throw u.stickers = u.stickers.filter((ye) => ye.id !== x), i.selectedId === x && ae(null), i.worldSelectedId === x && w(), pe(), g(), Se;
      } finally {
        M(), z(), q();
      }
    });
    try {
      await R;
    } catch {
    }
  }
  async function _e(O, F) {
    const x = Ho(a, `replace:${F}:${Uo("asset")}`, async () => {
      const { image: R } = await Go(O), Z = await _i(O, {
        fetchApi: (ce, be) => t.fetchApi(ce, be)
      }), he = u.stickers.find((ce) => ce.id === F);
      if (he) {
        he.source = wa(Z), he.crop = { x0: 0, y0: 0, x1: 1, y1: 1 };
        for (const ce of [he.size.value, ...he.size.keyframes.map((be) => be.value)])
          ce.vFOV_deg = m(ce.hFOV_deg, Number(R.naturalWidth || R.width || 1), Number(R.naturalHeight || R.height || 1));
        s.set(G(he), R), ie(), pe(), g(), M(), z(), q();
      }
    });
    try {
      await x;
    } catch {
    }
  }
  async function we(O) {
    if (l || f !== "stickers" && f !== "cutout") return;
    const F = I();
    if (!F || !W(F) || X(F) || !rr(O)) return;
    if (c) {
      await _e(O, F.id);
      return;
    }
    const x = String(F.id || ""), R = Uo("asset"), Z = Ho(a, `replace:${x}:${R}`, async () => {
      var Q;
      const he = (Array.isArray(u.stickers) ? u.stickers : []).find((me) => String((me == null ? void 0 : me.id) || "") === x) || null;
      if (!he || !W(he) || X(he)) return;
      const ce = String(he.asset_id || ""), be = ce ? un(((Q = u.assets) == null ? void 0 : Q[ce]) || null) : null, Se = Number(he.vFOV_deg || 0), ye = he.crop && typeof he.crop == "object" ? { ...he.crop } : null;
      try {
        const { image: me } = await Go(O);
        s.set(R, me), he.asset_id = R, he.vFOV_deg = m(
          Number(he.hFOV_deg || 30),
          Number(me.naturalWidth || me.width || 1),
          Number(me.naturalHeight || me.height || 1)
        ), he.crop = { x0: 0, y0: 0, x1: 1, y1: 1 }, ie(), M(), z(), q();
        const B = await _i(O, {
          fetchApi: (N, S) => t.fetchApi(N, S)
        }), p = (Array.isArray(u.stickers) ? u.stickers : []).find((N) => String((N == null ? void 0 : N.id) || "") === x) || null;
        if (!p || String(p.asset_id || "") !== R) return;
        u.assets[R] = B, K(), pe(), g(), M(), z(), q();
      } catch (me) {
        delete u.assets[R], s.delete(R);
        const B = (Array.isArray(u.stickers) ? u.stickers : []).find((p) => String((p == null ? void 0 : p.id) || "") === x) || null;
        throw B && String(B.asset_id || "") === R && (ce && be && (u.assets[ce] = be), B.asset_id = ce, B.vFOV_deg = Se, B.crop = ye ? { ...ye } : null), ie(), g(), M(), z(), q(), me;
      }
    });
    try {
      await Z;
    } catch {
    }
  }
  function C() {
    var F;
    if (l) return;
    const O = I();
    !O || !W(O) || X(O) || (F = h == null ? void 0 : h.openImagePicker) == null || F.call(h, "replace");
  }
  async function le() {
    if (l || f !== "stickers") return;
    if (c) {
      await b();
      return;
    }
    const O = u.assets && typeof u.assets == "object" ? u.assets : {}, F = Object.entries(O).filter(([, R]) => {
      const Z = String((R == null ? void 0 : R.type) || "").toLowerCase(), he = String((R == null ? void 0 : R.value) || "");
      return Z === "dataurl" && he.startsWith("data:image");
    });
    if (!F.length) return;
    let x = !1;
    for (const [R, Z] of F)
      try {
        const he = String((Z == null ? void 0 : Z.value) || "");
        if (!he) continue;
        const ce = await fetch(he).then((me) => me.blob()), be = String(ce.type || "image/png").split("/")[1] || "png", Se = String((Z == null ? void 0 : Z.name) || `${R}.${be}`), ye = new File([ce], Se, { type: ce.type || "image/png" }), Q = await _i(ye, {
          fetchApi: (me, B) => t.fetchApi(me, B)
        });
        u.assets[R] = {
          ...Q,
          w: Number((Z == null ? void 0 : Z.w) || 0),
          h: Number((Z == null ? void 0 : Z.h) || 0)
        }, x = !0;
      } catch {
      }
    x && (g(), q());
  }
  async function b() {
    let O = !1;
    for (const F of u.stickers) {
      const x = F.source.data_url;
      if (x)
        try {
          const R = await fetch(x).then((be) => be.blob()), Z = String(R.type || "image/png").split("/")[1] || "png", he = new File([R], `${F.id}.${Z}`, { type: R.type || "image/png" }), ce = await _i(he, {
            fetchApi: (be, Se) => t.fetchApi(be, Se)
          });
          F.source = wa(ce), O = !0;
        } catch {
        }
    }
    O && (g(), q());
  }
  function y(O) {
    f !== "stickers" && f !== "cutout" || l || (O.preventDefault(), T(!0));
  }
  function E(O) {
    var R;
    if (f !== "stickers" && f !== "cutout" || l) return;
    O.preventDefault(), O.stopPropagation(), n.depth = 0, T(!1);
    const x = Array.from(((R = O.dataTransfer) == null ? void 0 : R.files) || []).find((Z) => rr(Z));
    x && fe(x);
  }
  function v(O) {
    f !== "stickers" && f !== "cutout" || l || H(O) && (n.depth += 1, T(!0), O.preventDefault());
  }
  function $(O) {
    f !== "stickers" && f !== "cutout" || l || (!n.active && H(O) && T(!0), n.active && O.preventDefault());
  }
  function L(O) {
    if (f !== "stickers" && f !== "cutout" || l || !n.active) return;
    n.depth = Math.max(0, n.depth - 1);
    const F = Number(O.clientX) <= 0 && Number(O.clientY) <= 0;
    (n.depth === 0 || F) && T(!1);
  }
  function J(O) {
    f !== "stickers" && f !== "cutout" || l || (n.depth = 0, T(!1), H(O) && O.preventDefault());
  }
  return {
    connect(O) {
      ({
        clearWorldSelection: w,
        commitAndRefreshNode: g,
        computeStickerVFov: m,
        contentSphere: _,
        currentSpaceCamera: ee,
        forceCursorTool: V,
        getNextStickerZIndex: te,
        getSelected: I,
        isExternalSticker: X,
        isSpaceView: j,
        isStickerItem: W,
        markObjectVisualsDirty: ie,
        pushHistory: pe,
        requestDraw: q,
        selectWorldSticker: de,
        setSelectedItem: ae,
        spaceViewState: ve,
        stickerImageKey: G,
        stopTimelinePlayback: A,
        updateSelectionMenu: z,
        updateSidePanel: M
      } = O);
    },
    addImageStickerFromFile: fe,
    addImageSticker: se,
    addWorldImageSticker: Y,
    addWorldStickerFromFile: k,
    replaceSelectedImageFromFile: we,
    replaceSelectedImage: C,
    migrateLegacyEmbeddedAssets: le,
    pruneUnusedAssets: K,
    setDropCue: T,
    onCanvasDragOver: y,
    onCanvasDrop: E,
    onWindowDragEnter: v,
    onWindowDragOver: $,
    onWindowDragLeave: L,
    onWindowDrop: J
  };
}
function iA(e) {
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
    type: h,
    uiState: w
  } = e;
  let g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T, K, fe, se, Y, k, ne, ue, _e, we = o;
  function C(B, p) {
    var P;
    const N = (P = I().space) == null ? void 0 : P.gizmo;
    if (q() && N && _e("hover", p) !== null && _e("down", p))
      return n.interaction = { kind: "world_gizmo", camera: !0, mode: N.mode, start: N.transform, base: te(), changed: !1 }, r.setPointerCapture(B.pointerId), k(p), !0;
    const S = Hm(te(), m(M()));
    return $S(V(), S, p, r.width, r.height) ? (q() || (z(R()), ue(), ne(), G()), n.interaction = { kind: "world_select" }, r.setPointerCapture(B.pointerId), !0) : !1;
  }
  function le() {
    if (s || h !== "cutout") return;
    const B = R();
    if (B) {
      z(B), n.mode = "pano", Y(Ht(Number(B.yaw_deg || 0)), Ie(Number(B.pitch_deg || 0), -89.9, 89.9)), ue(), ne(), G({ cause: "cutout_frame" });
      return;
    }
    const p = qh({
      id: `frame_${Date.now().toString(36)}`,
      yawDeg: Ht(Number(n.viewYaw || 0)),
      pitchDeg: Number(n.viewPitch || 0),
      viewFovDeg: Number(n.viewFov || 90)
    });
    d.shots = [p], z(p), X(), n.mode = "pano", ve(), ee(), ue(), ne(), G({ cause: "cutout_frame" });
  }
  function b() {
    s || !u || W() || (T(), d.camera = Xv(H()), F(), z(R()), X(), ve(), ee(), ue(), ne(), G({ cause: "cutout_frame" }));
  }
  function y() {
    T(), d.camera = null, z(null), F(), ve(), ee(), ue(), ne(), G({ cause: "cutout_frame" });
  }
  function E(B, p) {
    u && de(B) && (d.camera.projection = p === mo ? "erp" : "perspective", p === mo) || L(B, p);
  }
  function v() {
    s || h !== "cutout" || (d.shots = [], n.selectedId = null, n.selectedIds = [], n.mode === "frame" && (n.mode = "pano"), n.cutoutAspectOpen = !1, d.active.selected_shot_id = null, ve(), ee(), ue(), ne(), G());
  }
  function $(B, p) {
    const N = a.frameSafeRect;
    if (!B || !N || n.mode !== "frame") return !1;
    const S = Au * Ii(N, B), P = rd(nd(N, p), S);
    return B.hFOV_deg = P.hFOV_deg, B.vFOV_deg = P.vFOV_deg, !0;
  }
  function L(B, p) {
    if (!B || B.locked === !0) return;
    const N = {
      "1:1": [1, 1],
      "3:2": [3, 2],
      "4:3": [4, 3],
      "16:9": [16, 9]
    }, S = (() => {
      const D = String(B.aspect_id || "").trim();
      if (/^\d+:\d+$/.test(D)) {
        const [xe, Pe] = D.split(":").map((Ce) => Number(Ce));
        if (Number.isFinite(xe) && Number.isFinite(Pe)) return xe >= Pe;
      }
      const re = Number(B.hFOV_deg || 64), Ne = Number(B.vFOV_deg || 40);
      return Math.abs(re - Ne) > 1e-6 ? re >= Ne : Ti(B) >= 1;
    })();
    let [P, U] = N[String(p)] || N["1:1"];
    P >= U !== S && ([P, U] = [U, P]);
    const ge = P / U;
    if (!$(B, ge)) {
      const D = Ie(Number(B.vFOV_deg || 40), 1, 179);
      B.vFOV_deg = D, B.hFOV_deg = va(D, ge);
    }
    B.aspect_id = `${P}:${U}`;
  }
  function J(B, p, N) {
    if (!B || B.locked === !0) return !1;
    const S = bs(p, N);
    if (!S) return !1;
    const P = S.ratio;
    if (!$(B, P)) {
      const U = Ie(Number(B.vFOV_deg || 40), 1, 179);
      B.vFOV_deg = U, B.hFOV_deg = va(U, P);
    }
    return B.aspect_id = S.label, !0;
  }
  function O(B) {
    if (!B || B.locked === !0) return;
    const p = String(B.aspect_id || "").trim(), N = ai(B), S = N.tanHalfX / Math.max(1e-12, N.tanHalfY), P = 1 / Math.max(1e-12, S);
    if (!$(B, P)) {
      const U = Ie(Number(B.vFOV_deg || 60), 1, 179);
      B.vFOV_deg = U, B.hFOV_deg = va(U, P);
    }
    if (/^\d+:\d+$/.test(p)) {
      const [U, ge] = p.split(":");
      B.aspect_id = `${ge}:${U}`;
    } else
      B.aspect_id = Ni(B);
  }
  function F(B = !0) {
    var S, P;
    if (!t) return;
    const p = we;
    if (!_()) {
      we = null, (S = d.shots) != null && S.length && (d.shots = []), p && x(p, null);
      return;
    }
    const N = (P = d.shots) == null ? void 0 : P[0];
    B && N && we && Zv(d.camera, n.frame, N, we), we = Am(d.camera, n.frame), N ? Object.assign(N, we, { position: [...we.position] }) : d.shots = [{ ...we, position: [...we.position] }], p || x(null, we);
  }
  function x(B, p) {
    var U, ge;
    !p && n.mode === "frame" && ae(B);
    const N = (p == null ? void 0 : p.position) ?? [0, 0, 0];
    if (((ge = (U = n.viewTransition) == null ? void 0 : U.end) == null ? void 0 : ge.mode) === "3dof") {
      se({ ...H(), position: N }, n.viewTransition.end);
      return;
    }
    if (n.mode !== "pano" || n.spaceMode !== "3dof" || !ie()) return;
    const S = (B == null ? void 0 : B.position) ?? [0, 0, 0];
    if (S.every((D, re) => D === N[re])) return;
    const P = { ...H(), position: S };
    g({ mode: "6dof", position: S, moved: !0 }), n.viewDistance = P.distance, se({ ...P, position: N }, { mode: "3dof", moved: !1 });
  }
  function R() {
    if (!l) return null;
    const B = Array.isArray(d.shots) ? d.shots : [];
    if (!B.length) return null;
    const p = String(d.active.selected_shot_id || "");
    return B.find((N) => String((N == null ? void 0 : N.id) || "") === p) || B[0] || null;
  }
  function Z(B, p, N = {}) {
    var U;
    if ((B == null ? void 0 : B.kind) !== "roll_frame" || !B.shot) return;
    B.accumulatedRad += Uh(p, B.lastAngle), B.lastAngle = p;
    const S = Bh(B.start.roll_deg, B.accumulatedRad, {
      shiftKey: N.shiftKey,
      altKey: B.altStarted ? !1 : N.altKey
    });
    B.shot.roll_deg = S, B.changed = B.changed || Math.abs(B.accumulatedRad) > 1e-9;
    const P = (((U = w.sidePanel) == null ? void 0 : U.params) || []).find((ge) => ge.key === "roll_deg");
    P && (P.value = S, P.displayValue = ao(S), P.fillPct = (S + 180) / 360 * 100), K(), be(B), G({ localOnly: !0 });
  }
  function he(B, p, N = {}) {
    var U;
    if ((B == null ? void 0 : B.kind) !== "roll_frame" || !B.shot || !B.rollGesture) return;
    const S = Ig(B.rollGesture, p, N);
    if (!S) return;
    B.rollGesture = S.gesture, B.center = S.gesture.center, B.lastAngle = S.gesture.lastAngle, B.accumulatedRad = S.gesture.accumulatedRad, B.shot.roll_deg = S.rollDeg, B.changed = B.changed || Math.abs(S.gesture.accumulatedRad) > 1e-9;
    const P = (((U = w.sidePanel) == null ? void 0 : U.params) || []).find((ge) => ge.key === "roll_deg");
    P && (P.value = S.rollDeg, P.displayValue = ao(S.rollDeg), P.fillPct = (S.rollDeg + 180) / 360 * 100), K(), be(B), G({ localOnly: !0 });
  }
  function ce(B, p) {
    const N = A(B);
    return Math.atan2(N.y - p.y, N.x - p.x);
  }
  function be(B) {
    var ge, D;
    if ((B == null ? void 0 : B.kind) !== "roll_frame" || !B.shot) return;
    f.timer && (clearTimeout(f.timer), f.timer = 0), f.target = null;
    const p = j(B.shot), N = (ge = r.getBoundingClientRect) == null ? void 0 : ge.call(r), S = (D = c.getBoundingClientRect) == null ? void 0 : D.call(c);
    if (!p || !N || !S || r.width <= 0 || r.height <= 0) return;
    const P = N.width / r.width, U = N.height / r.height;
    w.tooltip.text = `${ao(B.shot.roll_deg)}°`, w.tooltip.left = N.left - S.left + (p.x + p.w * 0.5) * P, w.tooltip.top = N.top - S.top + (p.y + p.h * 0.5) * U + 12, w.tooltip.variant = "roll", w.tooltip.visible = !0;
  }
  function Se(B) {
    var U;
    if (B.button !== 0 || s || n.mode !== "frame") return;
    const p = R();
    if (!p || p.locked === !0) return;
    const N = j(p);
    if (!N) return;
    const S = { x: N.x + N.w * 0.5, y: N.y + N.h * 0.5 }, P = ce(B, S);
    n.interaction = {
      kind: "roll_frame",
      shot: p,
      center: S,
      lastAngle: P,
      accumulatedRad: 0,
      start: { roll_deg: Number(p.roll_deg ?? p.rot_deg ?? 0) },
      changed: !1,
      altStarted: !1,
      source: "knob"
    }, (U = i.setPointerCapture) == null || U.call(i, B.pointerId), B.preventDefault(), K(), be(n.interaction), G({ localOnly: !0 });
  }
  function ye(B) {
    var p;
    ((p = n.interaction) == null ? void 0 : p.kind) !== "roll_frame" || n.interaction.source !== "knob" || Z(
      n.interaction,
      ce(B, n.interaction.center),
      B
    );
  }
  function Q() {
    const B = n.interaction;
    (B == null ? void 0 : B.kind) !== "roll_frame" || B.source !== "knob" || (B.changed && (ve(), ee(), ue()), n.interaction = null, pe(), fe(), K(), G());
  }
  function me(B) {
    const p = n.mode === "frame" && !s ? R() : null;
    !p || p.locked === !0 || Math.abs(Number(p.roll_deg ?? p.rot_deg ?? 0)) <= 1e-9 || (p.roll_deg = 0, ve(), ee(), ue(), K(), G(), B.preventDefault());
  }
  return {
    connect(B) {
      ({
        applySpaceMode: g,
        cameraFrustumLength: m,
        cameraShoots: _,
        commitAndRefreshNode: ee,
        currentSpaceCamera: V,
        cutoutCamera: te,
        editorViewInput: I,
        forceCursorTool: X,
        getFrameViewRect: j,
        hasCamera: W,
        hasSpaceContent: ie,
        hideTooltip: pe,
        isCameraSelected: q,
        isShotItem: de,
        leaveFrameView: ae,
        pushHistory: ve,
        requestDraw: G,
        screenPos: A,
        setSelectedItem: z,
        spaceScale: M,
        spaceViewState: H,
        stopTimelinePlayback: T,
        syncFrameRollKnob: K,
        syncViewToggleState: fe,
        transitionView: se,
        turnViewTo: Y,
        updateCursor: k,
        updateSelectionMenu: ne,
        updateSidePanel: ue,
        worldGizmoPointer: _e
      } = B);
    },
    addCutoutFrame: le,
    addStudioCamera: b,
    deleteStudioCamera: y,
    setShotAspect: E,
    clearCutoutFrame: v,
    applyCutoutAspectCustom: J,
    rotateCutoutAspect90: O,
    syncCutoutShot: F,
    getActiveCutoutShot: R,
    startCameraPress: C,
    applySharedRollInteractionPoint: he,
    onFrameRollKnobPointerDown: Se,
    onFrameRollKnobPointerMove: ye,
    finishKnobRoll: Q,
    onFrameRollKnobDoubleClick: me
  };
}
function oA(e) {
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
    uiState: h,
    videoTransportEl: w
  } = e;
  let g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A = null, z = !1;
  function M(x) {
    if (n.mode = "pano", !x) return;
    m();
    const R = q().distance;
    n.viewYaw = Ht(x.yaw_deg), n.viewPitch = Ie(x.pitch_deg, -89.9, 89.9), n.viewFov = Ie(x.hFOV_deg, 35, 140), n.spaceMode === "6dof" && g({ mode: "6dof", position: [...x.position], moved: !0 }), n.viewDistance = R, d.backgroundDirty = !0;
  }
  function H() {
    var S, P, U, ge, D;
    if (!r) return null;
    const x = (S = r.getBoundingClientRect) == null ? void 0 : S.call(r), R = Number((x == null ? void 0 : x.width) || 0) > 0 ? r.width / x.width : 1, Z = Number((x == null ? void 0 : x.height) || 0) > 0 ? r.height / x.height : 1;
    d.frameCanvasScale = Math.min(R, Z);
    let he = 24, ce = 24;
    const be = Math.max(he + 1, r.width - 24);
    let Se = Math.max(ce + 1, r.height - 24);
    const ye = (P = f == null ? void 0 : f.getBoundingClientRect) == null ? void 0 : P.call(f), Q = (U = a == null ? void 0 : a.getBoundingClientRect) == null ? void 0 : U.call(a);
    let me = 24;
    ye && x && ye.width > 0 && ye.height > 0 && (me = Math.max(me, (ye.right - x.left) * R + kp)), Q && x && Q.width > 0 && Q.height > 0 && ((ge = h.frameRail) == null ? void 0 : ge.visible) === !0 && (me = Math.max(me, (x.right - Q.left) * R + kp)), he = Math.max(he, me);
    const B = Math.min(be, r.width - me);
    let p = 24;
    const N = (D = s == null ? void 0 : s.getBoundingClientRect) == null ? void 0 : D.call(s);
    if (N && x && N.width > 0 && N.height > 0 && (p = Math.max(p, (N.bottom - x.top) * Z + Ec)), [l, w].forEach((re) => {
      var Pe;
      if (!re || !x) return;
      const Ne = getComputedStyle(re);
      if (Ne.display === "none" || Ne.visibility === "hidden" || Number(Ne.opacity) <= 0) return;
      const xe = (Pe = re.getBoundingClientRect) == null ? void 0 : Pe.call(re);
      !xe || xe.width <= 0 || xe.height <= 0 || (p = Math.max(p, (x.bottom - xe.top) * Z + Ec));
    }), o && x) {
      const re = getComputedStyle(o);
      re.display !== "none" && re.visibility !== "hidden" && Number(re.opacity) > 0 && (p = Math.max(p, (yN + Ec) * Z));
    }
    return ce = Math.max(ce, p), Se = Math.max(ce + 1, Math.min(Se, r.height - p)), {
      x: he,
      y: ce,
      w: Math.max(1, B - he),
      h: Math.max(1, Se - ce)
    };
  }
  function T(x = V()) {
    if (!x || !r) return null;
    const R = d.frameSafeRect || {
      x: 24,
      y: 24,
      w: Math.max(1, r.width - 48),
      h: Math.max(1, r.height - 48)
    };
    return L1(R, x, Au * Ii(R, x));
  }
  function K(x = V()) {
    const R = T(x);
    return R ? { x: R.x, y: R.y, w: R.w, h: R.h } : null;
  }
  function fe() {
    return u && !!V();
  }
  function se(x, R) {
    const Z = V();
    if (!Z || Z.locked === !0) return !1;
    const he = Number(R) > 0, ce = Jh(Z, R);
    if (!ce) return !1;
    if (he) {
      const be = Au * Ii(
        d.frameSafeRect || { w: r.width, h: r.height },
        ce
      ), Se = id({ width: r.width, height: r.height }, be);
      if (Se.halfW < r.width * 0.5 - 1e-6 || Se.halfH < r.height * 0.5 - 1e-6) return !1;
    }
    return Z.hFOV_deg = ce.hFOV_deg, Z.vFOV_deg = ce.vFOV_deg, Y(), G(), !0;
  }
  function Y() {
    n.frameWheelChanged = !0, n.frameWheelCommitTimer && window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = window.setTimeout(() => {
      n.frameWheelCommitTimer = 0, n.frameWheelChanged && (n.frameWheelChanged = !1, j(), _(), G());
    }, 180);
  }
  function k() {
    return t && n.mode === "frame" && te();
  }
  function ne() {
    const x = V(), R = T(x);
    return x && R ? Wm(x, R, { width: r.width, height: r.height }) : null;
  }
  function ue() {
    var x;
    return ((x = ee()) == null ? void 0 : x.radius) || sr;
  }
  function _e(x) {
    const { position: R, yaw_deg: Z, pitch_deg: he, roll_deg: ce, hFOV_deg: be } = x.shot;
    return { position: R, yaw_deg: Z, pitch_deg: he, roll_deg: ce, hFOV_deg: be, distance: ue() };
  }
  function we(x, R) {
    const { rect: Z } = x;
    return i.pickSurface(ie(x.shot), R.x - Z.x, R.y - Z.y, Z.w, Z.h);
  }
  function C(x, R, Z) {
    return su(R, we(x, Z), null, pe());
  }
  function le(x) {
    return JSON.stringify([_e(x), x.rect]);
  }
  function b(x) {
    const R = V();
    R.position = [...x.position], R.yaw_deg = x.yaw_deg, R.pitch_deg = x.pitch_deg;
  }
  function y(x, R) {
    const Z = V();
    !Z || c || Z.locked === !0 || (n.interaction = {
      kind: "pan_frame",
      shot: Z,
      last: x,
      start: { yaw_deg: Number(Z.yaw_deg || 0), pitch_deg: Number(Z.pitch_deg || 0) },
      changed: !1
    }, ve(x), r.setPointerCapture(R));
  }
  function E(x, R, Z) {
    const he = ne();
    if (!he || c) return;
    const ce = _e(he);
    n.interaction = x === "orbit" ? { kind: "frame_orbit", last: R, pivot: C(he, ce, R), changed: !1 } : { kind: "frame_pan", last: R, depth: Om(ce, pe()), changed: !1 }, ve(R), r.setPointerCapture(Z);
  }
  function v(x, R) {
    const Z = ne();
    if (!Z) return;
    const he = _e(Z), ce = R.x - x.last.x, be = R.y - x.last.y;
    b(x.kind === "frame_pan" ? Dm(he, ce, be, Z.rect.w, Z.rect.h, x.depth) : Tm(he, ce, be, r.height, x.pivot)), x.changed = x.changed || ce !== 0 || be !== 0, x.last = R, W({ localOnly: !0, cause: "frame_view" });
  }
  function $(x, R) {
    const Z = ne();
    if (!Z || c) return;
    const he = _e(Z), ce = performance.now(), be = { x: x.x, y: x.y, time: ce, key: i.contentRevision(), view: le(Z) };
    if (!Fm(A, be)) {
      const Se = we(Z, x);
      A = { ...be, cost: performance.now() - ce, hit: Se };
    }
    b(Lm(he, su(he, A.hit, null, pe()), R, pe())), A.view = le(ne() ?? Z), A.wheelTime = ce, Y(), G(), W({ localOnly: !0, cause: "frame_view" });
  }
  function L(x, R) {
    const Z = V();
    if (!Z || c || Z.locked === !0) return !1;
    const he = k0(Z, x, R);
    return he === Z ? !1 : (de(), Z.position = he.position, z = !0, !0);
  }
  function J() {
    return z ? (z = !1, j(), _(), G(), !0) : !1;
  }
  function O() {
    return n.frameWheelCommitTimer && (window.clearTimeout(n.frameWheelCommitTimer), n.frameWheelCommitTimer = 0), n.frameWheelChanged ? (n.frameWheelChanged = !1, j(), _(), G(), !0) : !1;
  }
  function F() {
    const x = n.interaction;
    if (!(x != null && x.shot) || !x.start || x.kind !== "pan_frame" && x.kind !== "roll_frame") return !1;
    const R = x.kind === "roll_frame";
    return x.kind === "pan_frame" ? (x.shot.yaw_deg = x.start.yaw_deg, x.shot.pitch_deg = x.start.pitch_deg) : x.shot.roll_deg = x.start.roll_deg, R && I(), n.interaction = null, X(), ae(), G(), ve(n.pointerPos), W({ localOnly: !0 }), !0;
  }
  return {
    connect(x) {
      ({
        applySpaceMode: g,
        cancelViewTransition: m,
        commitAndRefreshNode: _,
        contentSphere: ee,
        getActiveCutoutShot: V,
        hasSpaceContent: te,
        hideTooltip: I,
        invalidateLivePaintPreviewCaches: X,
        pushHistory: j,
        requestDraw: W,
        shotViewCamera: ie,
        spaceScale: pe,
        spaceViewState: q,
        stopTimelinePlayback: de,
        syncViewToggleState: ae,
        updateCursor: ve,
        updateSidePanel: G
      } = x);
    },
    leaveFrameView: M,
    measureFrameSafeRect: H,
    getFrameViewLayout: T,
    getFrameViewRect: K,
    supportsFramePainting: fe,
    zoomFrameViewAt: se,
    isFreeFrameView: k,
    frameContext: ne,
    frameViewDistance: ue,
    frameSpaceView: _e,
    frameTarget: C,
    startPanFrame: y,
    startFrameDrag: E,
    dragFrame: v,
    zoomFrameAt: $,
    flushFrameWheelCommit: O,
    cancelFrameCameraGesture: F,
    moveFrameByKeys: L,
    endFrameKeyMove: J
  };
}
function sA(e) {
  const {
    editor: t,
    paintCursorEl: r,
    paintSizePreviewEl: n,
    paintSizePreviewSampleEl: i,
    state: o
  } = e;
  let s, a, l, c, d, u, f, h, w, g, m, _, ee, V, te, I, X, j, W = 0;
  function ie() {
    return t.primaryTool === "mask" ? t.maskTool : t.paintTool;
  }
  function pe() {
    return String(ie() || "") === "lasso_fill";
  }
  function q() {
    return t.mode === "pano" || t.mode === "unwrap";
  }
  function de(C, le) {
    const b = Number(le || 0) * 0.5;
    return {
      radiusModel: "erp_uv_norm",
      radiusValue: Math.max(1e-6, b / 2048)
    };
  }
  function ae(C) {
    const le = String(C || "").trim();
    return le === "eraser" ? Er : Tn[le] ? le : t.activeBrushPresetId || Er;
  }
  function ve() {
    return (t.primaryTool === "paint" || t.primaryTool === "mask") && (q() || j());
  }
  function G() {
    var C;
    return ve() && ((C = t.pointerPos) == null ? void 0 : C.inside) === !0;
  }
  function A(C, le = !0) {
    const b = Number((C == null ? void 0 : C.x) || 0), y = Number((C == null ? void 0 : C.y) || 0), E = le !== !1, v = t.pointerPos || { x: 0, y: 0, inside: !1 }, $ = v.inside !== E || Math.abs(v.x - b) > 0.01 || Math.abs(v.y - y) > 0.01;
    return t.pointerPos = { x: b, y, inside: E }, $;
  }
  function z() {
    var F, x;
    if (!G()) return null;
    const C = t.primaryTool === "mask" ? "mask" : "paint", le = C === "mask" ? t.maskTool : t.paintTool, b = ae(le), y = Tn[b] || Tn[Er], E = Number(t.brushSizes[b] ?? 10), v = Math.max(1, E) * Math.max(0.1, Number(y.sizeScale ?? 1)), $ = Math.max(3, v * 0.5), L = C === "mask" ? le === "lasso_fill" ? { r: 0, g: 0, b: 0, a: 1 } : { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.8 } : le === "eraser" ? { r: 1, g: 1, b: 1, a: 0.2 } : $n(t.paintColor), J = C === "mask" ? le === "lasso_fill" ? 0.18 : 0.2 : le === "eraser" ? 0.06 : Ie(Math.max(0.16, Number(L.a ?? 1) * 0.3), 0.16, 0.52), O = C === "mask" ? 0.95 : le === "eraser" ? 0.75 : Ie(Math.max(0.46, Number(L.a ?? 1) * 0.92), 0.46, 1);
    return {
      layerKind: C,
      toolKind: le,
      preset: y,
      radius: $,
      fillStyle: mr(L, J),
      strokeStyle: mr(L, O),
      x: Number(((F = t.pointerPos) == null ? void 0 : F.x) || 0),
      y: Number(((x = t.pointerPos) == null ? void 0 : x.y) || 0),
      hotspotX: $,
      hotspotY: $
    };
  }
  function M() {
    var R, Z, he;
    const C = z();
    if (!r) return;
    if (!C) {
      r.style.display = "none";
      return;
    }
    let le = C.radius * 2, b = C.radius * 2, y = "999px", E = 0, v = C.fillStyle, $ = "1px solid rgba(222, 222, 222, 0.72)", L = "0 0 0 1px rgba(52, 52, 52, 0.72)";
    const J = "rgba(222, 222, 222, 0.72)", O = "rgba(52, 52, 52, 0.72)";
    let F = Number(C.hotspotX ?? le * 0.5), x = Number(C.hotspotY ?? b * 0.5);
    if (C.toolKind === "lasso_fill")
      le = hl, b = hl, y = "0", $ = "0", L = "none", F = SN, x = _N, v = NN(C.fillStyle, O, J);
    else if (C.layerKind === "mask")
      v = "repeating-linear-gradient(135deg, rgba(18,18,18,0.72) 0px, rgba(18,18,18,0.72) 4px, rgba(18,18,18,0.16) 4px, rgba(18,18,18,0.16) 8px)";
    else if (C.toolKind === "marker") {
      const ce = Math.max(1, Number(((R = C.preset) == null ? void 0 : R.aspect) ?? 1));
      le = Math.max(10, C.radius * 2 * ce), b = Math.max(6, C.radius * 2), y = `${Math.min(6, b * 0.42)}px`, E = Number(((he = (Z = C.preset) == null ? void 0 : Z.angle) == null ? void 0 : he.value) || 0) * Oi;
    } else C.toolKind === "brush" ? v = `radial-gradient(circle at 50% 50%, ${C.strokeStyle} 0%, ${C.fillStyle} 45%, rgba(0,0,0,0) 100%)` : C.toolKind === "eraser" && (v = "rgba(255,255,255,0.14)");
    r.style.display = "block", r.style.width = `${Math.round(le)}px`, r.style.height = `${Math.round(b)}px`, r.style.borderRadius = y, r.style.border = $, r.style.boxShadow = L, r.style.background = v, r.style.backgroundRepeat = "no-repeat", r.style.backgroundPosition = "center", r.style.backgroundSize = "contain", r.style.transform = `translate(${Math.round(C.x - F)}px, ${Math.round(C.y - x)}px) rotate(${E}deg)`;
  }
  function H() {
    var ye;
    if (!n || !i) return;
    const C = t.primaryTool === "mask" ? "mask" : "paint", le = C === "mask" ? t.maskTool : t.paintTool;
    if (le === "lasso_fill") return;
    const b = ae(le), y = Tn[b] || Tn[Er], E = Number(t.brushSizes[b] ?? 10), v = Math.max(1, E) * Math.max(0.1, Number(y.sizeScale ?? 1)), $ = Math.max(6, v * 0.5), L = le === "eraser", J = C === "mask" ? { r: 34 / 255, g: 197 / 255, b: 94 / 255, a: 0.82 } : L ? { r: 1, g: 1, b: 1, a: 0.22 } : $n(t.paintColor), O = C === "mask" ? mr(J, 0.22) : L ? "rgba(255,255,255,0.14)" : mr(J, Ie(Math.max(0.18, Number(J.a ?? 1) * 0.34), 0.18, 0.56)), F = C === "mask" ? mr(J, 0.96) : L ? "rgba(255,255,255,0.72)" : mr(J, Ie(Math.max(0.56, Number(J.a ?? 1) * 0.96), 0.56, 1));
    let x = $ * 2, R = $ * 2, Z = "999px", he = 0, ce = O;
    const be = "rgba(222, 222, 222, 0.72)", Se = "rgba(52, 52, 52, 0.72)";
    if (C === "mask")
      ce = "repeating-linear-gradient(135deg, rgba(18,18,18,0.78) 0px, rgba(18,18,18,0.78) 4px, rgba(18,18,18,0.18) 4px, rgba(18,18,18,0.18) 8px)";
    else if (le === "marker") {
      const Q = Math.max(1, Number((y == null ? void 0 : y.aspect) ?? 1));
      x = Math.max(16, $ * 2 * Q), R = Math.max(10, $ * 2), Z = `${Math.min(8, R * 0.42)}px`, he = Number(((ye = y == null ? void 0 : y.angle) == null ? void 0 : ye.value) || 0) * Oi;
    } else le === "brush" ? ce = `radial-gradient(circle at 50% 50%, ${F} 0%, ${O} 48%, rgba(0,0,0,0) 100%)` : le === "lasso_fill" ? (x = Math.max(18, $ * 1.8), R = x, ce = `radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 42%, ${F} 43%, ${F} 58%, rgba(0,0,0,0) 59%)`) : L && (ce = "rgba(255,255,255,0.12)");
    i.style.width = `${Math.round(x)}px`, i.style.height = `${Math.round(R)}px`, i.style.borderRadius = Z, i.style.background = ce, i.style.border = `1px solid ${be}`, i.style.boxShadow = `0 0 0 1px ${Se}`, i.style.transform = `rotate(${he}deg)`, W && (clearTimeout(W), W = 0), n.classList.remove("fade-out"), n.classList.add("show");
  }
  function T() {
    !n || !n.classList.contains("show") || (n.classList.add("fade-out"), W && clearTimeout(W), W = window.setTimeout(() => {
      n.classList.remove("show", "fade-out"), W = 0;
    }, 180));
  }
  function K(C, le, b, y) {
    const E = ae(le), v = Tn[E] || Tn[Er], $ = t.brushSizes[E] ?? 10, L = Math.max(1, $) * Math.max(0.1, v.sizeScale ?? 1), J = de(y, L), O = b.map((x) => ({
      ...x,
      t: Number((x == null ? void 0 : x.t) || 0),
      widthScale: Number.isFinite(Number(x == null ? void 0 : x.widthScale)) ? Math.max(0, Number(x.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(x == null ? void 0 : x.pressureLike)) ? Math.max(0, Number(x.pressureLike)) : 1
    })), F = {
      id: Qi(C),
      actionGroupId: Qi("ag"),
      targetSpace: y && typeof y == "object" ? { ...y, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: C,
      toolKind: le,
      size: L,
      createdAt: Date.now(),
      color: C === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: J.radiusModel,
      radiusValue: J.radiusValue,
      geometry: {
        geometryKind: "freehand_open",
        rawPoints: O.map((x) => ({ ...x })),
        points: O.map((x) => ({ ...x }))
      }
    };
    return xp(F, v), t.mode, Number(v.aspect ?? 1), Number(F.aspect ?? 1), String(F.stampKind || ""), Number(F.size || 0), String(F.radiusModel || ""), Number(F.radiusValue || 0), { ...F.targetSpace }, F;
  }
  function fe(C, le, b, y) {
    const E = b.map((J) => ({
      ...J,
      t: Number((J == null ? void 0 : J.t) || 0),
      widthScale: Number.isFinite(Number(J == null ? void 0 : J.widthScale)) ? Math.max(0, Number(J.widthScale)) : 1,
      pressureLike: Number.isFinite(Number(J == null ? void 0 : J.pressureLike)) ? Math.max(0, Number(J.pressureLike)) : 1
    })), v = ae(le), $ = Tn[v] || Tn[Er], L = {
      id: Qi(C),
      actionGroupId: Qi("ag"),
      targetSpace: y && typeof y == "object" ? { ...y, viewMode: String(t.mode || "pano") } : { kind: "ERP_GLOBAL", viewMode: String(t.mode || "pano") },
      layerKind: C,
      toolKind: le,
      size: 10,
      createdAt: Date.now(),
      color: C === "paint" ? { ...t.paintColor } : { r: 0, g: 0, b: 0, a: 1 },
      radiusModel: null,
      radiusValue: null,
      geometry: {
        geometryKind: "lasso_fill",
        points: E.map((J) => ({ ...J }))
      }
    };
    return xp(L, $), t.mode, Number($.aspect ?? 1), Number(L.aspect ?? 1), String(L.stampKind || ""), { ...L.targetSpace }, L;
  }
  function se(C) {
    const le = o.painting || (o.painting = bo(null)), b = le[C] || (le[C] = { strokes: [] });
    return Array.isArray(b.strokes) || (b.strokes = []), b.strokes;
  }
  function Y(C, le, b = performance.now()) {
    let y;
    if (t.mode === "frame") {
      const O = f();
      if (!O || (y = X(le, O, b), !y)) return !1;
    } else
      y = I(le, b);
    if (!y) return !1;
    const E = C.stroke.geometry.rawPoints || C.stroke.geometry.points, v = C.stroke.geometry.points, $ = E[E.length - 1];
    if ($) {
      const O = Math.abs(Number(y.u ?? y.x ?? 0) - Number($.u ?? $.x ?? 0)), F = Math.abs(Number(y.v ?? y.y ?? 0) - Number($.v ?? $.y ?? 0));
      if (O < 15e-4 && F < 15e-4) return !1;
    }
    const L = {
      ...y,
      t: Number((y == null ? void 0 : y.t) || 0),
      widthScale: 1,
      pressureLike: 1
    };
    E.push({ ...L }), v.push({ ...L });
    const J = h(C);
    if (J) {
      const O = t.paintEngine.ensureTarget(J);
      t.paintEngine.appendStrokePoint(O, Number(L.u ?? 0), Number(L.v ?? 0), C.stroke);
    }
    return !0;
  }
  function k(C, le, b = performance.now()) {
    var $, L;
    let y;
    if (t.mode === "frame") {
      const J = f();
      if (!J) return !1;
      y = X(le, J, b);
    } else
      y = I(le, b);
    const E = (L = ($ = C == null ? void 0 : C.stroke) == null ? void 0 : $.geometry) == null ? void 0 : L.points;
    if (!y || !Array.isArray(E)) return !1;
    const v = E[E.length - 1];
    if (v) {
      const J = Math.abs(Number(y.u ?? y.x ?? 0) - Number(v.u ?? v.x ?? 0)), O = Math.abs(Number(y.v ?? y.y ?? 0) - Number(v.v ?? v.y ?? 0));
      if (J < 15e-4 && O < 15e-4) return !1;
    }
    return E.push({
      ...y,
      t: Number((y == null ? void 0 : y.t) || 0),
      widthScale: 1,
      pressureLike: 1
    }), !0;
  }
  function ne(C) {
    var Q, me, B, p, N;
    const le = (C == null ? void 0 : C.stroke) || null;
    if (!le || (C == null ? void 0 : C.layerKind) !== "paint" || String((le == null ? void 0 : le.toolKind) || "") !== "eraser") return !1;
    te();
    const b = h(), y = c(b.width, b.height);
    if (!V(y, le, { w: b.width, h: b.height })) return !1;
    const E = ((me = (Q = y.ctx) == null ? void 0 : Q.getImageData(0, 0, b.width, b.height)) == null ? void 0 : me.data) || null;
    if (!E) return !1;
    const v = new Map(g().map((S) => [String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim(), S ? { ...S } : null])), $ = [], L = [], J = [...m().filter((S) => String((S == null ? void 0 : S.layerKind) || "paint") !== "paint")];
    let O = !1, F = w().reduce((S, P) => Math.max(S, Number((P == null ? void 0 : P.z_index) || 0)), -1) + 1;
    function x(S, P, U, ge = 8) {
      let D = P, re = U, Ne = -1, xe = -1;
      for (let Pe = 0; Pe < U; Pe += 1)
        for (let Ce = 0; Ce < P; Ce += 1)
          S[(Pe * P + Ce) * 4 + 3] <= ge || (Ce < D && (D = Ce), Pe < re && (re = Pe), Ce > Ne && (Ne = Ce), Pe > xe && (xe = Pe));
      return Ne < D || xe < re ? null : { minX: D, minY: re, maxX: Ne, maxY: xe };
    }
    const R = x(E, b.width, b.height, 8);
    if (!R) return !1;
    function Z(S, P) {
      return !S || !P ? !1 : !(S.maxX < P.minX || P.maxX < S.minX || S.maxY < P.minY || P.maxY < S.minY);
    }
    function he(S, P) {
      const U = d((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "", "paint", P);
      if (!U) return null;
      const ge = U.centerUv.u - U.halfW, D = U.centerUv.u + U.halfW, re = U.centerUv.v - U.halfH, Ne = U.centerUv.v + U.halfH, xe = b.width, Pe = b.height;
      return {
        minX: Math.floor((ge % 1 + 1) % 1 * xe),
        maxX: Math.ceil((D % 1 + 1) % 1 * xe),
        minY: Math.floor(Ie(re, 0, 1) * Pe),
        maxY: Math.ceil(Ie(Ne, 0, 1) * Pe),
        wraps: D - ge >= 1 || ge < 0 || D > 1
      };
    }
    function ce(S) {
      const P = (S == null ? void 0 : S.bbox) || null;
      if (!P) return null;
      const U = (S == null ? void 0 : S.transform) || {}, ge = b.width, D = b.height, re = Number(P.u0 || 0) + Number(U.du || 0), Ne = Number(P.u1 || 0) + Number(U.du || 0), xe = Number(P.v0 || 0) + Number(U.dv || 0), Pe = Number(P.v1 || 0) + Number(U.dv || 0);
      return {
        minX: Math.floor((re % 1 + 1) % 1 * ge),
        maxX: Math.ceil((Ne % 1 + 1) % 1 * ge),
        minY: Math.floor(Ie(xe, 0, 1) * D),
        maxY: Math.ceil(Ie(Pe, 0, 1) * D),
        wraps: Ne - re >= 1 || re < 0 || Ne > 1
      };
    }
    function be(S) {
      return S ? S.wraps ? Z(R, { minX: 0, maxX: S.maxX, minY: S.minY, maxY: S.maxY }) || Z(R, { minX: S.minX, maxX: b.width - 1, minY: S.minY, maxY: S.maxY }) : Z(R, S) : !0;
    }
    function Se(S) {
      if (!S) return { touched: !1, canvas: null };
      const P = c(b.width, b.height, { readback: !0 });
      P.ctx.drawImage(S, 0, 0);
      const U = P.ctx.getImageData(0, 0, b.width, b.height);
      P.ctx.save(), P.ctx.globalCompositeOperation = "destination-out", P.ctx.drawImage(y.canvas, 0, 0), P.ctx.restore();
      const ge = P.ctx.getImageData(0, 0, b.width, b.height);
      for (let D = 0; D < b.width * b.height; D += 1) {
        if (E[D * 4 + 3] <= 8) continue;
        const Ne = U.data[D * 4 + 3], xe = ge.data[D * 4 + 3];
        if (Ne > xe)
          return { touched: !0, canvas: P.canvas };
      }
      return { touched: !1, canvas: null };
    }
    function ye(S, P, U) {
      const ge = Number(U == null ? void 0 : U.z_index), D = l(S, P, U).map((re, Ne) => ({
        ...re,
        z_index: Number.isFinite(ge) ? ge + Ne * 1e-3 : F + Ne * 1e-3
      }));
      return D.length && (F = Math.max(F, ...D.map((re) => Number((re == null ? void 0 : re.z_index) || 0))) + 1), D;
    }
    for (const S of g()) {
      const P = String((S == null ? void 0 : S.actionGroupId) || (S == null ? void 0 : S.id) || "").trim();
      if (!P) continue;
      const U = _(P, "paint");
      if (!be(he(S, U))) {
        L.push(S), $.push(...U);
        continue;
      }
      const ge = ((p = (B = t.paintEngine) == null ? void 0 : B.getGroupTarget) == null ? void 0 : p.call(B, P)) || null, D = ((N = ge == null ? void 0 : ge.committedPaint) == null ? void 0 : N.canvas) || null;
      if (!D) {
        L.push(S), $.push(...U);
        continue;
      }
      const re = Se(D);
      if (!re.touched || !re.canvas) {
        L.push(S), $.push(...U);
        continue;
      }
      O = !0;
      const Ne = ye(re.canvas, "paint", v.get(P) || S || {});
      J.push(...Ne);
    }
    for (const S of m().filter((P) => String((P == null ? void 0 : P.layerKind) || "paint") === "paint")) {
      if (!be(ce(S))) {
        J.push(S);
        continue;
      }
      const P = s(S, null);
      if (!P) {
        J.push(S);
        continue;
      }
      const U = Se(P);
      if (!U.touched || !U.canvas) {
        J.push(S);
        continue;
      }
      O = !0;
      const ge = ye(U.canvas, "paint", S);
      J.push(...ge);
    }
    return O ? (o.painting.paint.strokes = $, o.painting.groups = L.sort((S, P) => Number((S == null ? void 0 : S.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0)), o.painting.raster_objects = J.sort((S, P) => Number((S == null ? void 0 : S.z_index) || 0) - Number((P == null ? void 0 : P.z_index) || 0)), a({ preservePanelValues: !1 }), !0) : !1;
  }
  function ue(C) {
    var $, L, J, O, F;
    if ((((L = ($ = C.stroke) == null ? void 0 : $.geometry) == null ? void 0 : L.rawPoints) || ((O = (J = C.stroke) == null ? void 0 : J.geometry) == null ? void 0 : O.points) || []).length >= 1) {
      we(C);
      const x = h(C);
      x && (String(((F = C.stroke) == null ? void 0 : F.toolKind) || "") === "eraser" ? t.paintEngine.cancelActiveStroke(x) : t.paintEngine.commitActiveStroke(C.stroke, x)), C._hasCommittedSegments = !0;
    }
    const b = C.stroke, y = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, E = K(C.layerKind, b.toolKind, [], y);
    E.actionGroupId = b.actionGroupId, C.stroke = E;
    const v = h(C);
    v && t.paintEngine.beginStroke(E, v);
  }
  function _e(C) {
    var $, L;
    if ((((L = ($ = C.stroke) == null ? void 0 : $.geometry) == null ? void 0 : L.points) || []).length >= 3) {
      we(C);
      const J = h(C);
      J && t.paintEngine.commitActiveStroke(C.stroke, J), C._hasCommittedSegments = !0;
    }
    const b = C.stroke, y = { kind: "ERP_GLOBAL", viewMode: String(t.mode || "frame") }, E = fe(C.layerKind, b.toolKind, [], y);
    E.actionGroupId = b.actionGroupId, C.stroke = E;
    const v = h(C);
    v && t.paintEngine.beginStroke(E, v);
  }
  function we(C) {
    var v, $, L, J;
    const le = ((v = C == null ? void 0 : C.stroke) == null ? void 0 : v.geometry) || null;
    if (!le) return !1;
    const b = String((($ = C == null ? void 0 : C.stroke) == null ? void 0 : $.toolKind) || "pen");
    if (C.layerKind === "paint" && b === "eraser")
      return le.geometryKind !== "lasso_fill" && (le.processedPoints = ee(le.rawPoints || le.points || [], C.stroke.targetSpace, !0)), ne(C);
    const y = C.layerKind === "paint" && b !== "eraser";
    if (le.geometryKind === "lasso_fill")
      return (Array.isArray(le.points) ? le.points : []).length < 3 ? !1 : (y && u((L = C.stroke) == null ? void 0 : L.actionGroupId), se(C.layerKind).push(C.stroke), !0);
    const E = le.rawPoints || le.points || [];
    return E.length < 1 ? !1 : (le.processedPoints = ee(E, C.stroke.targetSpace, !0), y && u((J = C.stroke) == null ? void 0 : J.actionGroupId), se(C.layerKind).push(C.stroke), !0);
  }
  return {
    connect(C) {
      ({
        buildRasterObjectEditCanvas: s,
        clearSelection: a,
        createRasterFrozenObjectsFromCanvas: l,
        createRasterSurface: c,
        ensureGroupFrame: d,
        ensurePaintingGroupEntry: u,
        getActiveCutoutShot: f,
        getActivePaintTargetDescriptor: h,
        getDisplayListObjects: w,
        getPaintingGroupList: g,
        getRasterObjectList: m,
        getStrokeGroupStrokes: _,
        processFreehandPoints: ee,
        rasterizeStrokeToSurface: V,
        rebuildPaintEngineIfNeeded: te,
        screenPosToErpPoint: I,
        screenPosToFrameAsErpPoint: X,
        supportsFramePainting: j
      } = C);
    },
    isActiveLassoTool: pe,
    supportsErpPainting: q,
    getBrushPresetIdForTool: ae,
    isPaintCursorEnabled: ve,
    isActivePaintCursorVisible: G,
    setPointerPos: A,
    syncPaintCursorElement: M,
    showPaintSizePreview: H,
    hidePaintSizePreview: T,
    buildFreehandStrokeRecord: K,
    buildLassoFillStrokeRecord: fe,
    getPaintingLayerList: se,
    appendPaintPoint: Y,
    appendLassoPoint: k,
    _segmentFrameStroke: ue,
    _segmentFrameLassoFill: _e,
    commitPaintInteraction: we
  };
}
function aA(e) {
  const {
    editor: t,
    readOnly: r,
    shotEditor: n,
    type: i
  } = e;
  let o, s, a, l, c, d, u, f, h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q;
  function de(M) {
    var T;
    if (n && t.mode === "frame") {
      const K = s(), fe = l(K);
      if (!K || !fe || !(Number((M == null ? void 0 : M.x) || 0) >= Number(fe.x || 0) && Number((M == null ? void 0 : M.x) || 0) <= Number(fe.x || 0) + Number(fe.w || 0) && Number((M == null ? void 0 : M.y) || 0) >= Number(fe.y || 0) && Number((M == null ? void 0 : M.y) || 0) <= Number(fe.y || 0) + Number(fe.h || 0))) return null;
      const Y = W(M, K, performance.now()), k = Y ? o(Y) : null;
      if (k)
        for (const ue of a()) {
          if (!V(ue)) continue;
          const _e = q(ue, k);
          if (_e && Number(_e.x) >= 0 && Number(_e.x) <= 1 && Number(_e.y) >= 0 && Number(_e.y) <= 1) {
            const we = j(ue);
            if (we != null && we.visible) return { item: ue, geom: we };
          }
        }
      const ne = c(!1).slice().sort((ue, _e) => Number((_e == null ? void 0 : _e.z_index) || 0) - Number((ue == null ? void 0 : ue.z_index) || 0));
      for (const ue of ne) {
        if (ue.type === "strokeGroup") {
          const C = f(X("paint", ue.actionGroupId || ue.id || ""));
          if (!C) continue;
          const le = j(C);
          if (!(le != null && le.visible)) continue;
          const b = Array.isArray(le.strokePaths) ? le.strokePaths : [];
          for (const y of b) {
            const E = Array.isArray(y == null ? void 0 : y.points) ? y.points : [];
            if (!E.length) continue;
            if (y.closed && E.length >= 3 && Jr(M, E)) return { item: C, geom: le };
            const v = Math.max(8, Number((y == null ? void 0 : y.lineWidth) || 0) * 0.5 + 6);
            for (let $ = 0; $ < E.length - 1; $ += 1)
              if (Tc(M, E[$], E[$ + 1]) <= v * v) return { item: C, geom: le };
            if (E.length === 1 && Wo(M, E[0]) <= v * v) return { item: C, geom: le };
          }
          continue;
        }
        if (ue.type === "rasterObject") {
          const C = d(I(((T = ue.item) == null ? void 0 : T.id) || ue.id || ""));
          if (!C) continue;
          const le = j(C);
          if (h(C, le, M, Y)) return { item: C, geom: le };
          continue;
        }
        const _e = ue.item;
        if (!_e || !V(_e) || !k) continue;
        const we = q(_e, k);
        if (we && Number(we.x) >= 0 && Number(we.x) <= 1 && Number(we.y) >= 0 && Number(we.y) <= 1) {
          const C = j(_e);
          if (C != null && C.visible) return { item: _e, geom: C };
        }
      }
      return null;
    }
    const H = [
      ...c(!1).slice().sort((K, fe) => Number((fe == null ? void 0 : fe.z_index) || 0) - Number((K == null ? void 0 : K.z_index) || 0)).map((K) => {
        var fe;
        return K.type === "strokeGroup" ? f(X("paint", K.actionGroupId || K.id || "")) : K.type === "rasterObject" ? d(I(((fe = K.item) == null ? void 0 : fe.id) || K.id || "")) : K.item;
      }).filter(Boolean),
      ...n ? a().filter((K) => ee(K)) : []
    ];
    for (const K of H) {
      if (te(K)) {
        const se = j(K);
        if (!(se != null && se.visible)) continue;
        const Y = Array.isArray(se.strokePaths) ? se.strokePaths : [];
        for (const k of Y) {
          const ne = Array.isArray(k == null ? void 0 : k.points) ? k.points : [];
          if (!ne.length) continue;
          if (k.closed && ne.length >= 3 && Jr(M, ne)) return { item: K, geom: se };
          const ue = Math.max(8, Number((k == null ? void 0 : k.lineWidth) || 0) * 0.5 + 6);
          for (let _e = 0; _e < ne.length - 1; _e += 1)
            if (Tc(M, ne[_e], ne[_e + 1]) <= ue * ue) return { item: K, geom: se };
          if (ne.length === 1 && Wo(M, ne[0]) <= ue * ue) return { item: K, geom: se };
        }
        continue;
      }
      if (_(K)) {
        const se = j(K);
        if (!(se != null && se.visible)) continue;
        if (h(K, se, M)) return { item: K, geom: se };
        continue;
      }
      const fe = j(K);
      if (fe.visible && Jr(M, fe.corners))
        return { item: K, geom: fe };
    }
    return null;
  }
  function ae(M, H, T = null) {
    if (!M || !M.visible) return { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    if (V(T)) return gu(M, H);
    if (M.kind === "strokeGroup") {
      const K = M.corners.findIndex((se) => Wo(se, H) <= 121);
      if (K >= 0) {
        const se = M.corners[K], Y = se.x - M.center.x, k = se.y - M.center.y, ne = Y * k >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: K, cursor: ne };
      }
      const fe = Array.isArray(M.strokePaths) ? M.strokePaths : [];
      for (const se of fe) {
        const Y = Array.isArray(se == null ? void 0 : se.points) ? se.points : [];
        if (se.closed && Y.length >= 3 && Jr(H, Y)) return { kind: "move", cursor: "default" };
        const k = Math.max(8, Number((se == null ? void 0 : se.lineWidth) || 0) * 0.5 + 6);
        for (let ne = 0; ne < Y.length - 1; ne += 1)
          if (Tc(H, Y[ne], Y[ne + 1]) <= k * k) return { kind: "move", cursor: "default" };
      }
      return Jr(H, M.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    if (M.kind === "rasterObject") {
      const K = M.corners.findIndex((fe) => Wo(fe, H) <= 121);
      if (K >= 0) {
        const fe = M.corners[K], se = fe.x - M.center.x, Y = fe.y - M.center.y, k = se * Y >= 0 ? "nwse-resize" : "nesw-resize";
        return { kind: "scale", cornerIdx: K, cursor: k };
      }
      return Jr(H, M.corners) ? { kind: "move", cursor: "default" } : { kind: "none", cursor: t.mode === "pano" ? "grab" : "default" };
    }
    return mw(M, H, {
      edges: i === "cutout" || ee(T),
      resize: !(ee(T) && g()),
      emptyCursor: t.mode === "pano" ? "grab" : "default"
    });
  }
  function ve(M, H) {
    return {
      x0: Math.min(Number((M == null ? void 0 : M.x) || 0), Number((H == null ? void 0 : H.x) || 0)),
      y0: Math.min(Number((M == null ? void 0 : M.y) || 0), Number((H == null ? void 0 : H.y) || 0)),
      x1: Math.max(Number((M == null ? void 0 : M.x) || 0), Number((H == null ? void 0 : H.x) || 0)),
      y1: Math.max(Number((M == null ? void 0 : M.y) || 0), Number((H == null ? void 0 : H.y) || 0))
    };
  }
  function G(M, H) {
    return !!M && !!H && Number(H.x) >= Number(M.x0) && Number(H.x) <= Number(M.x1) && Number(H.y) >= Number(M.y0) && Number(H.y) <= Number(M.y1);
  }
  function A(M, H) {
    if (!M || !(H != null && H.visible) || !Array.isArray(H.corners)) return !1;
    if (H.corners.some((fe) => G(M, fe))) return !0;
    const T = (Number(M.x0) + Number(M.x1)) * 0.5, K = (Number(M.y0) + Number(M.y1)) * 0.5;
    return !!Jr({ x: T, y: K }, H.corners);
  }
  function z(M) {
    if (pe(), t.interaction) {
      t.interaction.kind === "paint_stroke" || t.interaction.kind === "paint_lasso_fill" ? ie("none") : t.interaction.kind === "view" || t.interaction.kind === "pan_frame" ? ie("grabbing") : t.interaction.kind === "space_pan" || t.interaction.kind === "frame_pan" ? ie("move") : t.interaction.kind === "space_orbit" || t.interaction.kind === "frame_orbit" || t.interaction.kind === "world_gizmo" || t.interaction.kind === "roll_frame" ? ie("grabbing") : t.interaction.kind === "move" || t.interaction.kind === "move_multi" || t.interaction.kind === "move_stroke_group" || t.interaction.kind === "move_raster_object" ? ie("move") : t.interaction.kind === "scale" || t.interaction.kind === "scale_x" || t.interaction.kind === "scale_y" || t.interaction.kind === "scale_raster_object" ? ie(t.interaction.cursor || "nwse-resize") : t.interaction.kind === "rotate" ? ie("grabbing") : ie("default");
      return;
    }
    if (w()) {
      ie("none");
      return;
    }
    if (t.mode === "frame") {
      if (t.altModifier && !r) {
        ie(gN);
        return;
      }
      if (t.primaryTool !== "cursor") {
        ie("default");
        return;
      }
      ie("grab");
      return;
    }
    if (t.primaryTool === "cursor" && t.marqueeModifier) {
      ie("default");
      return;
    }
    if (t.gizmoAxis) {
      ie("grab");
      return;
    }
    const H = u(), T = H ? j(H) : null, K = H ? m(H) : !1, fe = K ? { kind: "none", cursor: "default" } : ae(T, M, H);
    if (!K && fe.kind !== "none") {
      ie(fe.cursor);
      return;
    }
    if (t.primaryTool === "cursor" && de(M)) {
      ie("default");
      return;
    }
    ie(t.mode === "pano" ? "grab" : "default");
  }
  return {
    connect(M) {
      ({
        erpPointToWorldDir: o,
        getActiveCutoutShot: s,
        getCutoutSelectableItemsForHit: a,
        getFrameViewRect: l,
        getOrderedDisplayListObjects: c,
        getRasterObjectItem: d,
        getSelected: u,
        getStrokeGroupItem: f,
        hitRasterObjectAt: h,
        isActivePaintCursorVisible: w,
        isErpCamera: g,
        isItemLocked: m,
        isRasterObjectItem: _,
        isShotItem: ee,
        isStickerItem: V,
        isStrokeGroupItem: te,
        makeRasterObjectSelectionId: I,
        makeStrokeGroupSelectionId: X,
        objectGeom: j,
        screenPosToFrameAsErpPoint: W,
        setCanvasCursor: ie,
        syncPaintCursorElement: pe,
        worldDirToFrameLocalPoint: q
      } = M);
    },
    hitObjectAt: de,
    handleHit: ae,
    rectFromPoints: ve,
    rectIntersectsGeom: A,
    updateCursor: z
  };
}
function lA(e) {
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
  let f, h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae = !1;
  function ve() {
    return ae;
  }
  function G() {
    if (!o) return;
    if (ae = !1, n.mode === "frame") {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    if (n.worldSelectedId || te() && j()) {
      const Y = A();
      ae = Y.visible, z(Y);
      return;
    }
    const T = _(), K = ee();
    if (!T && K.length === 0 || n.interaction) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const fe = V(), se = v2({
      type: d,
      selected: T,
      selectedItems: K,
      selectedKind: fe,
      geom: K.length > 1 ? m(K) : de(T),
      allLocked: f(K),
      anyLocked: K.some((Y) => W(Y)),
      selectedLocked: W(T),
      activeAspect: ie(T) && I() ? mo : Dr(T),
      cutoutAspectOpen: n.cutoutAspectOpen,
      isExternalSticker: X,
      isStickerHidden: q,
      canRestoreSelectedToInitial: h,
      iconSet: ze,
      cameraShot: t,
      coverage: a.coverage
    });
    z(se);
  }
  function A() {
    const T = pe() && !n.interaction ? g().space : null;
    if (!(T != null && T.gizmo)) return { visible: !1 };
    const K = w(), fe = T.stickers.find((ne) => ne.id === n.worldSelectedId), Y = (fe ? bd(fe) : [T.gizmo.transform.position]).map((ne) => gs(K, ne, r.width, r.height)).filter(Boolean), k = LS(K, T.gizmo.transform.position, T.gizmo.mode, r.width, r.height);
    return S2({ corners: Y, gizmoBox: k, gizmoMode: T.gizmo.mode, camera: te() });
  }
  function z(T) {
    var k, ne;
    if (!T.visible) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    const K = (ue, _e) => _2(T.anchor, ue, _e, r.width, r.height), fe = Math.max(1, Number(((k = n.menuSize) == null ? void 0 : k.w) || 220)), se = Math.max(1, Number(((ne = n.menuSize) == null ? void 0 : ne.h) || 40)), Y = K(fe, se);
    if (!Y) {
      u.selectionMenu = { visible: !1, left: 0, top: 0, items: [] };
      return;
    }
    u.selectionMenu = {
      visible: !0,
      left: Y.left,
      top: Y.top,
      items: T.items
    }, i.requestFrame(() => {
      if (!o || u.selectionMenu.visible !== !0) return;
      const ue = o.getBoundingClientRect(), _e = Math.round(Number((ue == null ? void 0 : ue.width) || 0)) || 220, we = Math.round(Number((ue == null ? void 0 : ue.height) || 0)) || 40;
      n.menuSize = { w: _e, h: we, measured: !0 };
      const C = K(_e, we);
      C && (u.selectionMenu.left = C.left, u.selectionMenu.top = C.top);
    });
  }
  function M() {
    l.timer && (clearTimeout(l.timer), l.timer = 0), l.target = null, u.tooltip.visible = !1;
  }
  function H(T) {
    if (!c || !T || !T.isConnected) return;
    const K = String(T.getAttribute("data-tip") || "").trim();
    if (!K) return;
    u.tooltip.text = K, u.tooltip.visible = !0;
    const fe = T;
    i.requestFrame(() => {
      var v, $;
      if (l.target !== fe || !c || !(fe != null && fe.isConnected)) return;
      const se = s.getBoundingClientRect(), Y = fe.getBoundingClientRect(), k = 8, ne = 12, ue = Math.round(Number(((v = c.getBoundingClientRect()) == null ? void 0 : v.width) || 0)) || 100, _e = Math.round(Number((($ = c.getBoundingClientRect()) == null ? void 0 : $.height) || 0)) || 24, we = !!fe.closest(".pano-floating-left"), C = !!fe.closest(".pano-frame-rail"), le = !!fe.closest(".pano-paint-footer") || !!fe.closest(".pano-paint-color-float");
      let b = "", y = Y.left - se.left + Y.width * 0.5 - ue * 0.5, E = Y.top - se.top - _e - ne;
      if (fe.closest(".pano-floating-top") && (E = Y.bottom - se.top + ne), we)
        b = "tool-rail", y = Y.right - se.left + 10, E = Y.top - se.top + Y.height * 0.5 - _e * 0.5, y = Ie(y, k, Math.max(k, se.width - ue - k)), E = Ie(E, k, Math.max(k, se.height - _e - k));
      else if (C)
        b = "frame-rail", y = Y.left - se.left - ue - 10, E = Y.top - se.top + Y.height * 0.5 - _e * 0.5, y = Ie(y, k, Math.max(k, se.width - ue - k)), E = Ie(E, k, Math.max(k, se.height - _e - k));
      else if (le) {
        b = "footer";
        const L = fe.closest(".pano-paint-footer"), J = L ? L.getBoundingClientRect() : Y;
        y = J.left - se.left + J.width * 0.5 - ue * 0.5, E = J.bottom - se.top + 5, y = Ie(y, k, Math.max(k, se.width - ue - k)), E = Math.max(k, E);
      }
      y = Ie(y, k, Math.max(k, se.width - ue - k)), E = Math.max(k, E), u.tooltip.left = y, u.tooltip.top = E, u.tooltip.variant = b, u.tooltip.visible = !0;
    });
  }
  return {
    connect(T) {
      ({
        areAllSelectedItemsLocked: f,
        canRestoreSelectedToInitial: h,
        currentSpaceCamera: w,
        editorViewInput: g,
        getMultiSelectionGeom: m,
        getSelected: _,
        getSelectedItems: ee,
        getSelectedKind: V,
        isCameraSelected: te,
        isErpCamera: I,
        isExternalSticker: X,
        isFreeSpaceView: j,
        isItemLocked: W,
        isShotItem: ie,
        isSpaceView: pe,
        isStickerHidden: q,
        objectGeom: de
      } = T);
    },
    isWorldMenuShown: ve,
    updateSelectionMenu: G,
    hideTooltip: M,
    showTooltipFor: H
  };
}
function cA(e) {
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
    timeline: h,
    type: w,
    viewController: g
  } = e;
  let m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T, K, fe, se, Y, k, ne, ue, _e, we, C, le, b, y, E, v, $, L, J, O, F, x, R, Z, he, ce, be, Se, ye, Q, me, B, p, N, S, P, U, ge, D, re, Ne, xe, Pe, Ce, Le, je, Ke, $e, He, oe, Fe, Ae, Re, Ye, Ge, We, ht, bt, Tt, Nt, Pn, qe, sn, Wt, ui, Wr, di, on, yn, Ur, kr, cr, xo, ko, Mo, Po, Cs, Is, No, Ot, Nn, Qn, Ri, Vn, Es, Os, Fs, Br = null;
  function Ul(Oe) {
    h.selection && (h.selection = null, Is());
    const Ee = Re(Oe);
    Br = Ee, Nt(Ee, !0), ae(), g.state.inertia.active = !1, g.state.inertia.vx = 0, g.state.inertia.vy = 0;
    const ke = B(), vt = me(), lt = ke || vt ? Cw(Ri(), Oe) : null;
    if (vt && lt) {
      Oe.preventDefault(), lt === "look" ? yn(Ee, Oe.pointerId) : on(lt, Ee, Oe.pointerId);
      return;
    }
    if (lt === "look") {
      Oe.preventDefault();
      const Xe = Ye(Oe);
      n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, g.startDrag(Xe.x, Xe.y, Oe.pointerId, performance.now()), Ot(Ee), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (lt) {
      Oe.preventDefault(), Ur(lt, Ee, Oe.pointerId);
      return;
    }
    if ((ke || vt) && Oe.button !== 0) {
      Oe.preventDefault();
      return;
    }
    if (Oe.button === 1) {
      if (Oe.preventDefault(), n.mode === "frame") {
        const Xe = ue();
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
        const Xe = n.mode === "unwrap" ? Ee : Ye(Oe);
        n.interaction = { kind: "view", last: Xe, lastTs: performance.now() }, g.startDrag(Xe.x, Xe.y, Oe.pointerId, performance.now());
      }
      Ot(Ee), t.setPointerCapture(Oe.pointerId);
      return;
    }
    if (Oe.button !== 0) return;
    if (n.mode === "frame" && (Oe.altKey || Oe.shiftKey) && !a) {
      const Xe = ue(), Ue = b(Xe);
      if (!Xe || Xe.locked === !0 || !Ue) return;
      const Ze = Cg({
        frame: Ue,
        point: Ee,
        startRollDeg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0),
        shiftKey: Oe.shiftKey,
        altKey: Oe.altKey,
        allowAlt: !0
      });
      if (!Ze) return;
      n.interaction = {
        kind: "roll_frame",
        shot: Xe,
        center: Ze.center,
        lastAngle: Ze.lastAngle,
        accumulatedRad: Ze.accumulatedRad,
        rollGesture: Ze,
        start: { roll_deg: Number(Xe.roll_deg ?? Xe.rot_deg ?? 0) },
        changed: !1,
        altStarted: Ze.source === "alt",
        source: Ze.source
      }, t.setPointerCapture(Oe.pointerId), Oe.preventDefault(), Po(), Ae({ localOnly: !0 });
      return;
    }
    if (n.mode === "frame" && n.primaryTool === "cursor") {
      yn(Ee, Oe.pointerId), Oe.preventDefault();
      return;
    }
    if (a) {
      n.mode === "pano" && Co(Oe, Ee);
      return;
    }
    if (s && !s.hidden)
      return;
    if ((n.primaryTool === "paint" || n.primaryTool === "mask") && (cr() || xo())) {
      if (!Ce()) return;
      kr();
      const Xe = n.primaryTool === "mask" ? "mask" : "paint", Ue = n.primaryTool === "mask" ? n.maskTool : n.paintTool, Ze = n.mode === "frame" && xo() ? ue() : null, Zt = { kind: "ERP_GLOBAL" }, xt = Ze ? We(Ee, Ze, performance.now()) : Ge(Ee, performance.now());
      if (!xt) {
        Ot(Ee);
        return;
      }
      n.interaction = {
        kind: Ue === "lasso_fill" ? "paint_lasso_fill" : "paint_stroke",
        layerKind: Xe,
        _livePreviewToken: Qi("live"),
        stroke: Ue === "lasso_fill" ? pe(Xe, Ue, [xt], Zt) : ie(Xe, Ue, [xt], Zt)
      }, ye();
      const Mr = _e(n.interaction);
      if (Mr)
        if (n.paintEngine.beginStroke(n.interaction.stroke, Mr), n.interaction.kind === "paint_stroke") {
          const Vi = n.paintEngine.ensureTarget(Mr), $i = Number((xt == null ? void 0 : xt.u) ?? (xt == null ? void 0 : xt.x) ?? 0), zi = Number((xt == null ? void 0 : xt.v) ?? (xt == null ? void 0 : xt.y) ?? 0);
          n.paintEngine.appendStrokePoint(Vi, $i, zi, n.interaction.stroke);
        } else
          n.paintEngine.updateActiveStroke(n.interaction.stroke, Mr);
      Ot(Ee), t.setPointerCapture(Oe.pointerId), Ae();
      return;
    }
    const ut = x(), Je = F(), et = ut.length > 1 ? E(ut) : Je ? Pe(Je) : null;
    if (n.primaryTool === "cursor" && (Oe.ctrlKey || Oe.metaKey)) {
      n.interaction = { kind: "marquee_select", start: Ee, current: Ee }, Ot(Ee), t.setPointerCapture(Oe.pointerId), Ae({ localOnly: !0, reason: ft.OVERLAY });
      return;
    }
    if (n.primaryTool === "cursor" && q() && B() && di(Oe, Ee) || n.primaryTool === "cursor" && c && U() && Bl(Oe, Ee)) return;
    if (ut.length > 1 && (et != null && et.visible)) {
      if ((ut.some((Ue) => p(Ue)) ? { kind: "none" } : ce(et, Ee)).kind === "move") {
        n.interaction = {
          kind: "move_multi",
          items: ut.map((Ue) => Ue),
          offset: { x: Ee.x - et.center.x, y: Ee.y - et.center.y },
          startCenter: { x: et.center.x, y: et.center.y },
          stickerSnapshots: ut.filter((Ue) => ge(Ue)).map((Ue) => ({
            id: String(Ue.id || ""),
            yaw_deg: Number(Ke(Ue).yaw_deg || 0),
            pitch_deg: Number(Ke(Ue).pitch_deg || 0),
            center: (() => {
              var Zt, xt;
              const Ze = Pe(Ue);
              return Ze != null && Ze.visible ? { x: Number(((Zt = Ze.center) == null ? void 0 : Zt.x) || 0), y: Number(((xt = Ze.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })()
          })),
          strokeSnapshots: ut.filter((Ue) => D(Ue)).map((Ue) => ({
            id: String(Ue.actionGroupId || Ue.id || ""),
            layerKind: String(Ue.layerKind || "paint"),
            snapshot: un(Z(Ue.actionGroupId, Ue.layerKind)),
            frameSnapshot: un(fe(Ue.actionGroupId, Ue.layerKind)),
            center: (() => {
              var Zt, xt;
              const Ze = Pe(Ue);
              return Ze != null && Ze.visible ? { x: Number(((Zt = Ze.center) == null ? void 0 : Zt.x) || 0), y: Number(((xt = Ze.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: R(Ue.actionGroupId, Ue.layerKind)
          })),
          rasterSnapshots: ut.filter((Ue) => N(Ue)).map((Ue) => ({
            id: Le(Ue.rasterObjectId || Ue.id || ""),
            snapshot: un(L().find((Ze) => String((Ze == null ? void 0 : Ze.id) || "") === Le(Ue.rasterObjectId || Ue.id || ""))),
            center: (() => {
              var Zt, xt;
              const Ze = Pe(Ue);
              return Ze != null && Ze.visible ? { x: Number(((Zt = Ze.center) == null ? void 0 : Zt.x) || 0), y: Number(((xt = Ze.center) == null ? void 0 : xt.y) || 0) } : { x: Ee.x, y: Ee.y };
            })(),
            centerUv: $(Ue)
          }))
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
    } else if (Je && (et != null && et.visible)) {
      const Xe = p(Je) ? { kind: "none" } : ce(et, Ee, Je);
      if (Xe.kind === "scale") {
        n.interaction = D(Je) ? {
          kind: "scale_stroke_group",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          snapshot: un(Z(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: un(fe(Je.actionGroupId, Je.layerKind)),
          cursor: Xe.cursor
        } : N(Je) ? {
          kind: "scale_raster_object",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          snapshot: un(L().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === Le(Je.rasterObjectId || Je.id || ""))),
          cursor: Xe.cursor
        } : {
          kind: "scale",
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          startHFOV: Number(Ke(Je).hFOV_deg || 20),
          startVFOV: Number(Ke(Je).vFOV_deg || 20),
          cursor: Xe.cursor
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (Xe.kind === "scale_x" || Xe.kind === "scale_y") {
        n.interaction = {
          kind: Xe.kind,
          item: Je,
          center: et.center,
          startDist: Math.max(1, Math.hypot(Ee.x - et.center.x, Ee.y - et.center.y)),
          startHFOV: Number(Ke(Je).hFOV_deg || 20),
          startVFOV: Number(Ke(Je).vFOV_deg || 20),
          cursor: Xe.cursor,
          edge: Xe.edge
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (Xe.kind === "rotate") {
        n.interaction = D(Je) ? {
          kind: "rotate_stroke_group",
          item: Je,
          center: et.center,
          startAng: Math.atan2(Ee.y - et.center.y, Ee.x - et.center.x),
          snapshot: un(Z(Je.actionGroupId, Je.layerKind)),
          frameSnapshot: un(fe(Je.actionGroupId, Je.layerKind))
        } : {
          kind: "rotate",
          item: Je,
          center: et.center,
          startRot: Number(Ke(Je).rot_deg || Ke(Je).roll_deg || 0),
          startAng: Math.atan2(Ee.y - et.center.y, Ee.x - et.center.x)
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
      if (Xe.kind === "move") {
        if (D(Je)) {
          const Ue = n.mode === "frame" ? (() => {
            const Ze = ue();
            return Ze ? We(Ee, Ze, performance.now()) : null;
          })() : Ge(Ee, performance.now());
          n.interaction = {
            kind: "move_stroke_group",
            item: Je,
            startUv: Ue,
            snapshot: un(Z(Je.actionGroupId, Je.layerKind)),
            frameSnapshot: un(fe(Je.actionGroupId, Je.layerKind))
          }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
          return;
        }
        if (N(Je)) {
          const Ue = n.mode === "frame" ? (() => {
            const Ze = ue();
            return Ze ? We(Ee, Ze, performance.now()) : null;
          })() : Ge(Ee, performance.now());
          n.interaction = {
            kind: "move_raster_object",
            item: Je,
            startUv: Ue,
            snapshot: un(L().find((Ze) => String((Ze == null ? void 0 : Ze.id) || "") === Le(Je.rasterObjectId || Je.id || "")))
          }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
          return;
        }
        n.interaction = {
          kind: "move",
          item: Je,
          offset: { x: Ee.x - et.center.x, y: Ee.y - et.center.y }
        }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
        return;
      }
    }
    const nt = Se(Ee);
    if (nt) {
      const Xe = n.selectedId !== nt.item.id;
      if (Xe && n.selectedId && ($e(), z()), Pn(nt.item), d && Xe && (n.cutoutAspectOpen = !1), Xe && Qn(), Nn(), Ae(), p(nt.item)) {
        Ot(Ee);
        return;
      }
      n.interaction = {
        kind: D(nt.item) ? "move_stroke_group" : N(nt.item) ? "move_raster_object" : "move",
        item: nt.item,
        offset: { x: Ee.x - nt.geom.center.x, y: Ee.y - nt.geom.center.y },
        startUv: D(nt.item) || N(nt.item) ? n.mode === "frame" ? (() => {
          const Ue = ue();
          return Ue ? We(Ee, Ue, performance.now()) : null;
        })() : Ge(Ee, performance.now()) : null,
        snapshot: D(nt.item) ? un(Z(nt.item.actionGroupId, nt.item.layerKind)) : N(nt.item) ? un(L().find((Ue) => String((Ue == null ? void 0 : Ue.id) || "") === Le(nt.item.rasterObjectId || nt.item.id || ""))) : null,
        frameSnapshot: D(nt.item) ? un(fe(nt.item.actionGroupId, nt.item.layerKind)) : null
      }, Ot(Ee), t.setPointerCapture(Oe.pointerId);
      return;
    }
    const er = !!n.selectedId;
    er && ($e(), z()), ve(), er && Qn(), Nn(), Ae(), n.mode === "pano" && Co(Oe, Ee);
  }
  function Yr(Oe, Ee) {
    return i.gizmoPointer(Oe, M(), Ee.x, Ee.y, t.width, t.height);
  }
  function Bl(Oe, Ee) {
    var et;
    const ke = (et = K().space) == null ? void 0 : et.gizmo;
    if (ke && Yr("hover", Ee) !== null && Yr("down", Ee))
      return n.interaction = {
        kind: "world_gizmo",
        id: n.worldSelectedId,
        mode: ke.mode,
        // The transform the gizmo was grabbed at, and the value its drag applies to.
        start: ke.transform,
        base: Ei(Tt(), n.frame),
        changed: !1
      }, t.setPointerCapture(Oe.pointerId), Ot(Ee), !0;
    const vt = x(), lt = F(), ut = vt.length > 1 ? vt.some((nt) => p(nt)) ? "none" : ce(E(vt), Ee).kind : lt && !p(lt) ? ce(Pe(lt), Ee, lt).kind : "none";
    if (ut !== "none" && ut !== "move") return !1;
    const Je = i.pickSticker(M(), Ee.x, Ee.y, t.width, t.height);
    return u.stickers.some((nt) => nt.id === Je && nt.placement === "world") ? (n.worldSelectedId !== Je && (n.selectedId && ($e(), z()), bt(Je), Qn(), Nn(), Mo(), Ae()), n.interaction = { kind: "world_select" }, t.setPointerCapture(Oe.pointerId), !0) : !1;
  }
  function Ao(Oe) {
    var vt;
    const ke = !!(n.worldSelectedId || Q()) && n.primaryTool === "cursor" && U() && !!((vt = K().space) != null && vt.gizmo) ? Yr("hover", Oe) : null;
    ke !== n.gizmoAxis && (n.gizmoAxis = ke, l.backgroundDirty = !0, Ae({ localOnly: !0, reason: ft.VIEW }));
  }
  function Ts(Oe, Ee) {
    const ke = Yr("move", Ee);
    if (ke && Oe.camera) {
      for (const [lt, ut] of Object.entries(Hf(Oe.mode, Oe.base, Oe.start, ke))) hn(u.camera, lt, n.frame, ut);
      ko(), Oe.changed = !0, r.request("sidePanel"), Ae({ localOnly: !0 });
      return;
    }
    const vt = u.stickers.find((lt) => lt.id === Oe.id);
    !ke || !vt || (iS(vt, n.frame, Hf(Oe.mode, Oe.base, Oe.start, ke)), Oe.changed = !0, re(), r.request("sidePanel"), Ae({ localOnly: !0 }));
  }
  function Ds(Oe) {
    n.interaction = null, n.gizmoAxis = null, Oe.kind === "world_gizmo" && (Yr("up", n.pointerPos), l.backgroundDirty = !0, Oe.changed && ($e(), G(), Qn())), Ot(n.pointerPos), Ae();
  }
  function Co(Oe, Ee) {
    if (B()) {
      const vt = Ri().emptyLeft;
      vt && Ur(vt, Ee, Oe.pointerId);
      return;
    }
    const ke = Ye(Oe);
    n.interaction = { kind: "view", last: ke, lastTs: performance.now() }, g.startDrag(ke.x, ke.y, Oe.pointerId, performance.now()), Ot(Ee), t.setPointerCapture(Oe.pointerId);
  }
  function Ls(Oe, Ee) {
    if (!f || !je.playing || (je.stop(), Oe.kind === "frame_pan")) return;
    if (Oe.kind === "frame_orbit") {
      const lt = se();
      lt && (Oe.pivot = ne(lt, k(lt), Ee));
      return;
    }
    if (Oe.kind === "world_gizmo") {
      const lt = u.stickers.find((ut) => ut.id === Oe.id);
      Oe.camera ? Oe.base = H() : lt && (Oe.base = Ei(lt, n.frame));
      return;
    }
    if (Oe.kind === "move_multi") {
      const lt = E(Oe.items);
      if (!(lt != null && lt.visible)) return;
      Oe.offset = { x: Ee.x - lt.center.x, y: Ee.y - lt.center.y }, Oe.startCenter = { x: lt.center.x, y: lt.center.y };
      for (const ut of Oe.stickerSnapshots) {
        const Je = Oe.items.find((nt) => String((nt == null ? void 0 : nt.id) || "") === ut.id), et = Je ? Pe(Je) : null;
        et != null && et.visible && (ut.yaw_deg = Number(Ke(Je).yaw_deg || 0), ut.pitch_deg = Number(Ke(Je).pitch_deg || 0), ut.center = { x: et.center.x, y: et.center.y });
      }
      return;
    }
    if (!["move", "scale", "scale_x", "scale_y", "rotate"].includes(Oe.kind)) return;
    const ke = Pe(Oe.item);
    if (!(ke != null && ke.visible)) return;
    const vt = Ke(Oe.item);
    if (Oe.kind === "move") {
      Oe.offset = { x: Ee.x - ke.center.x, y: Ee.y - ke.center.y };
      return;
    }
    if (Oe.center = ke.center, Oe.kind === "rotate") {
      Oe.startRot = Number(vt.rot_deg || vt.roll_deg || 0), Oe.startAng = Math.atan2(Ee.y - ke.center.y, Ee.x - ke.center.x);
      return;
    }
    Oe.startDist = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)), Oe.startHFOV = Number(vt.hFOV_deg || 20), Oe.startVFOV = Number(vt.vFOV_deg || 20);
  }
  function Rs(Oe) {
    var vt, lt, ut, Je, et, nt, er, Xe, Ue, Ze, Zt, xt, Mr, Vi, $i, zi, Hs, Gs, Ks, Ws, Us, Bs;
    const Ee = Re(Oe);
    if (Nt(Ee, !0), !n.interaction) {
      Ao(Ee), Ot(Ee);
      return;
    }
    Ot(Ee);
    const ke = n.interaction;
    if (Br && (Ee.x !== Br.x || Ee.y !== Br.y)) {
      const ct = Br;
      Br = null, ["view", "marquee_select", "space_pan", "space_orbit", "world_select"].includes(ke.kind) || Ls(ke, ct);
    }
    if (ke.kind !== "world_select") {
      if (ke.kind === "world_gizmo") {
        Ts(ke, Ee);
        return;
      }
      if (ke.kind === "paint_stroke") {
        const ct = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let pt = !1;
        ct.forEach((yt) => {
          const _t = Re(yt);
          if (n.mode === "frame") {
            const An = ue(), Xt = An ? b(An) : null;
            if (Xt) {
              const Cn = (_t.x - Xt.x) / Math.max(1, Xt.w), Vt = (_t.y - Xt.y) / Math.max(1, Xt.h);
              if (!(Cn >= 0 && Cn <= 1 && Vt >= 0 && Vt <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, _(ke));
            }
          }
          V(ke, _t, performance.now()) && (pt = !0);
        }), pt && Ae({ localOnly: !0, reason: ft.PAINT });
        return;
      }
      if (ke.kind === "paint_lasso_fill") {
        const ct = typeof Oe.getCoalescedEvents == "function" ? Oe.getCoalescedEvents() : [Oe];
        let pt = !1;
        if (ct.forEach((yt) => {
          const _t = Re(yt);
          if (n.mode === "frame") {
            const An = ue(), Xt = An ? b(An) : null;
            if (Xt) {
              const Cn = (_t.x - Xt.x) / Math.max(1, Xt.w), Vt = (_t.y - Xt.y) / Math.max(1, Xt.h);
              if (!(Cn >= 0 && Cn <= 1 && Vt >= 0 && Vt <= 1)) {
                ke._outOfFrame = !0;
                return;
              }
              ke._outOfFrame && (ke._outOfFrame = !1, m(ke));
            }
          }
          ee(ke, _t, performance.now()) && (pt = !0);
        }), pt) {
          const yt = _e(ke);
          yt && n.paintEngine.updateActiveStroke(ke.stroke, yt), Ae({ localOnly: !0, reason: ft.PAINT });
        }
        return;
      }
      if (ke.kind === "view") {
        const ct = performance.now(), pt = n.mode === "unwrap" ? Ee : Ye(Oe);
        g.moveDrag(pt.x, pt.y, n.mode === "unwrap" ? "unwrap" : "pano", ct), ke.lastTs = ct, ke.last = pt, Ae({ localOnly: !0, reason: ft.VIEW });
        return;
      }
      if (ke.kind === "frame_pan" || ke.kind === "frame_orbit") {
        T(ke, Ee);
        return;
      }
      if (ke.kind === "space_pan" || ke.kind === "space_orbit") {
        const ct = ui();
        sn(ke.kind === "space_pan" ? Dm(ct, Ee.x - ke.last.x, Ee.y - ke.last.y, t.width, t.height, ke.depth) : Tm(ct, Ee.x - ke.last.x, Ee.y - ke.last.y, t.height, ke.pivot)), ke.last = Ee;
        return;
      }
      if (ke.kind === "pan_frame") {
        const ct = le(ke.shot);
        if (!ct || !ke.shot) return;
        const pt = Ee.x - ke.last.x, yt = Ee.y - ke.last.y, _t = Eg(ke.shot, {
          dx: pt,
          dy: yt,
          focalPx: ct.focalPx,
          invertX: ((vt = u.ui_settings) == null ? void 0 : vt.invert_view_x) === !0,
          invertY: ((lt = u.ui_settings) == null ? void 0 : lt.invert_view_y) === !0
        });
        ke.shot.yaw_deg = _t.yaw_deg, ke.shot.pitch_deg = _t.pitch_deg, ke.changed = ke.changed || Math.abs(pt) > 0 || Math.abs(yt) > 0, ke.last = Ee, Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "roll_frame") {
        if (ke.source === "knob") return;
        X(ke, Ee, Oe);
        return;
      }
      if (ke.kind === "move") {
        const ct = Ee.x - ke.offset.x, pt = Ee.y - ke.offset.y;
        if (n.mode === "frame" && d) {
          const yt = ue(), _t = b(yt);
          if (!yt || !_t) return;
          const An = {
            x: Ie((ct - _t.x) / Math.max(1, _t.w), 0, 1),
            y: Ie((pt - _t.y) / Math.max(1, _t.h), 0, 1)
          }, Xt = Y(yt, An);
          if (!Xt) return;
          const Cn = ca(Xt);
          Vn(ke.item, { yaw_deg: Cn.yaw, pitch_deg: Cn.pitch });
        } else if (n.mode === "unwrap") {
          const yt = he(), _t = Ie((ct - yt.x) / Math.max(yt.w, 1), 0, 1), An = Ie((pt - yt.y) / Math.max(yt.h, 1), 0, 1);
          Vn(ke.item, { yaw_deg: Ht(_t * 360 - 180), pitch_deg: Ie(90 - An * 180, -90, 90) });
        } else {
          const yt = ht(ct, pt), _t = ca(yt);
          Vn(ke.item, { yaw_deg: _t.yaw, pitch_deg: _t.pitch });
        }
        ge(ke.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "move_stroke_group") {
        const ct = n.mode === "frame" ? (() => {
          const _t = ue();
          return _t ? We(Ee, _t, performance.now()) : null;
        })() : Ge(Ee, performance.now());
        if (!ct || !ke.startUv) return;
        const pt = Wt(Number(ct.u || 0), Number(ke.startUv.u || 0)), yt = Number(ct.v || 0) - Number(ke.startUv.v || 0);
        j((ut = ke.item) == null ? void 0 : ut.actionGroupId, pt, yt, ke.snapshot, (Je = ke.item) == null ? void 0 : Je.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_raster_object") {
        const ct = n.mode === "frame" ? (() => {
          const _t = ue();
          return _t ? We(Ee, _t, performance.now()) : null;
        })() : Ge(Ee, performance.now());
        if (!ct || !ke.startUv) return;
        const pt = Wt(Number(ct.u || 0), Number(ke.startUv.u || 0)), yt = Number(ct.v || 0) - Number(ke.startUv.v || 0);
        te(((et = ke.item) == null ? void 0 : et.rasterObjectId) || ((nt = ke.item) == null ? void 0 : nt.id) || "", pt, yt, ke.snapshot) && (Ne(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "scale_raster_object") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        I(((er = ke.item) == null ? void 0 : er.rasterObjectId) || ((Xe = ke.item) == null ? void 0 : Xe.id) || "", pt, ke.snapshot) && (Ne(), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "move_multi") {
        const ct = Ee.x - Number(((Ue = ke.offset) == null ? void 0 : Ue.x) || 0), pt = Ee.y - Number(((Ze = ke.offset) == null ? void 0 : Ze.y) || 0);
        let yt = !1, _t = !1, An = !1;
        const Xt = ct - Number(((Zt = ke.startCenter) == null ? void 0 : Zt.x) || ct), Cn = pt - Number(((xt = ke.startCenter) == null ? void 0 : xt.y) || pt);
        for (const Vt of Array.isArray(ke.stickerSnapshots) ? ke.stickerSnapshots : []) {
          const an = (w === "cutout" ? we() : y()).find((Dt) => String((Dt == null ? void 0 : Dt.id) || "") === String(Vt.id || ""));
          if (!an || !ge(an)) continue;
          const nn = {
            x: Number(((Mr = Vt.center) == null ? void 0 : Mr.x) || 0) + Xt,
            y: Number(((Vi = Vt.center) == null ? void 0 : Vi.y) || 0) + Cn
          };
          if (n.mode === "frame" && d) {
            const Dt = ue(), Gt = b(Dt);
            if (!Dt || !Gt) continue;
            const In = {
              x: Ie((nn.x - Gt.x) / Math.max(1, Gt.w), 0, 1),
              y: Ie((nn.y - Gt.y) / Math.max(1, Gt.h), 0, 1)
            }, ji = Y(Dt, In);
            if (!ji) continue;
            const En = ca(ji);
            Vn(an, { yaw_deg: En.yaw, pitch_deg: En.pitch });
          } else if (n.mode === "unwrap") {
            const Dt = he(), Gt = Ie((nn.x - Dt.x) / Math.max(Dt.w, 1), 0, 1), In = Ie((nn.y - Dt.y) / Math.max(Dt.h, 1), 0, 1);
            Vn(an, { yaw_deg: Ht(Gt * 360 - 180), pitch_deg: Ie(90 - In * 180, -90, 90) });
          } else {
            const Dt = ht(nn.x, nn.y), Gt = ca(Dt);
            Vn(an, { yaw_deg: Gt.yaw, pitch_deg: Gt.pitch });
          }
          yt = !0;
        }
        for (const Vt of Array.isArray(ke.strokeSnapshots) ? ke.strokeSnapshots : []) {
          const an = {
            x: Number((($i = Vt.center) == null ? void 0 : $i.x) || 0) + Xt,
            y: Number(((zi = Vt.center) == null ? void 0 : zi.y) || 0) + Cn
          }, nn = n.mode === "frame" ? (() => {
            const Gt = ue();
            return Gt ? We(an, Gt, performance.now()) : null;
          })() : Ge(an, performance.now()), Dt = Vt.centerUv || null;
          if (nn && Dt) {
            const Gt = Wt(Number(nn.u || 0), Number(Dt.u || 0)), In = Number(nn.v || 0) - Number(Dt.v || 0);
            j(Vt.id, Gt, In, Vt.snapshot, Vt.layerKind, Vt.frameSnapshot) && (yt = !0, _t = !0);
          }
        }
        for (const Vt of Array.isArray(ke.rasterSnapshots) ? ke.rasterSnapshots : []) {
          const an = {
            x: Number(((Hs = Vt.center) == null ? void 0 : Hs.x) || 0) + Xt,
            y: Number(((Gs = Vt.center) == null ? void 0 : Gs.y) || 0) + Cn
          }, nn = n.mode === "frame" ? (() => {
            const Gt = ue();
            return Gt ? We(an, Gt, performance.now()) : null;
          })() : Ge(an, performance.now()), Dt = Vt.centerUv || null;
          if (nn && Dt) {
            const Gt = Wt(Number(nn.u || 0), Number(Dt.u || 0)), In = Number(nn.v || 0) - Number(Dt.v || 0);
            te(Vt.id, Gt, In, Vt.snapshot) && (yt = !0, An = !0);
          }
        }
        yt && (_t ? xe({ rebuildPaintEngine: !1 }) : An ? Ne() : re(), Ae({ localOnly: !0 }));
        return;
      }
      if (ke.kind === "scale_stroke_group") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / Math.max(1, Number(ke.startDist || 1));
        W((Ks = ke.item) == null ? void 0 : Ks.actionGroupId, pt, 0, ke.snapshot, (Ws = ke.item) == null ? void 0 : Ws.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "rotate_stroke_group") {
        let ct = (Math.atan2(Ee.y - ke.center.y, Ee.x - ke.center.x) - Number(ke.startAng || 0)) * Oi;
        Oe.shiftKey && (ct = Math.round(ct / 45) * 45), W((Us = ke.item) == null ? void 0 : Us.actionGroupId, 1, ct, ke.snapshot, (Bs = ke.item) == null ? void 0 : Bs.layerKind, ke.frameSnapshot) && (xe({ rebuildPaintEngine: !1 }), Ae({ localOnly: !0, reason: ft.PAINT }));
        return;
      }
      if (ke.kind === "marquee_select") {
        ke.current = Ee, Ae({ localOnly: !0, reason: ft.OVERLAY });
        return;
      }
      if (ke.kind === "scale") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / ke.startDist;
        Vn(ke.item, { hFOV_deg: Ie(ke.startHFOV * pt, 1, 179), vFOV_deg: Ie(ke.startVFOV * pt, 1, 179) }), S(ke.item) || (ke.item.aspect_id = Ni(ke.item)), ge(ke.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_x") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / ke.startDist;
        Vn(ke.item, { hFOV_deg: Ie(ke.startHFOV * pt, 1, 179) }), S(ke.item) || (ke.item.aspect_id = Ni(ke.item)), ge(ke.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "scale_y") {
        const pt = Math.max(1, Math.hypot(Ee.x - ke.center.x, Ee.y - ke.center.y)) / ke.startDist;
        Vn(ke.item, { vFOV_deg: Ie(ke.startVFOV * pt, 1, 179) }), S(ke.item) || (ke.item.aspect_id = Ni(ke.item)), ge(ke.item) && re(), Ae({ localOnly: !0 });
        return;
      }
      if (ke.kind === "rotate") {
        let pt = (Math.atan2(Ee.y - ke.center.y, Ee.x - ke.center.x) - ke.startAng) * Oi, yt = ke.startRot - pt;
        Oe.shiftKey && (yt = Math.round(yt / 45) * 45), Vn(ke.item, { [ge(ke.item) ? "rot_deg" : "roll_deg"]: yt }), ge(ke.item) && re(), Ae({ localOnly: !0 });
      }
    }
  }
  function Vs() {
    var Ee, ke, vt, lt, ut, Je, et;
    const Oe = n.interaction;
    if (!((Oe == null ? void 0 : Oe.kind) === "roll_frame" && Oe.source === "knob")) {
      if ((Oe == null ? void 0 : Oe.kind) === "space_pan" || (Oe == null ? void 0 : Oe.kind) === "space_orbit") {
        n.interaction = null, Ot(n.pointerPos), Nn();
        return;
      }
      if ((Oe == null ? void 0 : Oe.kind) === "world_select" || (Oe == null ? void 0 : Oe.kind) === "world_gizmo") {
        Ds(Oe);
        return;
      }
      if (((Ee = n.interaction) == null ? void 0 : Ee.kind) === "paint_stroke" || ((ke = n.interaction) == null ? void 0 : ke.kind) === "paint_lasso_fill") {
        ye();
        const nt = A(n.interaction), er = !!n.interaction._hasCommittedSegments;
        if (nt || er) {
          xe();
          const Xe = String(((vt = n.interaction.stroke) == null ? void 0 : vt.actionGroupId) || "").trim();
          if (Xe) {
            const Ze = v().find((Zt) => String((Zt == null ? void 0 : Zt.actionGroupId) || "") === Xe);
            Ze && (Ze.frame = null);
          }
          const Ue = _e(n.interaction);
          Ue && (nt ? String(((lt = n.interaction.stroke) == null ? void 0 : lt.toolKind) || "") === "eraser" ? (n.paintEngine.cancelActiveStroke(Ue), Fe()) : n.paintEngine.commitActiveStroke(n.interaction.stroke, Ue) : n.paintEngine.cancelActiveStroke(Ue)), $e(), z(), Qn(), Nn(), o.setDirtyCanvas(!0, !0), Ae();
        } else {
          const Xe = _e(n.interaction);
          Xe && n.paintEngine.cancelActiveStroke(Xe);
        }
      } else if (((ut = n.interaction) == null ? void 0 : ut.kind) === "marquee_select") {
        const nt = He(n.interaction.start, n.interaction.current), Xe = [
          ...w === "cutout" ? C().filter((Ue) => !P(Ue)) : [...y()],
          ...O(),
          ...J()
        ].filter((Ue) => oe(nt, Pe(Ue)));
        qe(Xe, ((Je = Xe[Xe.length - 1]) == null ? void 0 : Je.id) || null), d && Xe.length && (n.cutoutAspectOpen = !1), Qn(), Nn(), Ae();
      } else if (["pan_frame", "roll_frame", "frame_pan", "frame_orbit"].includes((et = n.interaction) == null ? void 0 : et.kind))
        n.interaction.changed && ($e(), G(), Qn());
      else if (n.interaction && n.interaction.kind !== "view") {
        let nt = !1;
        (n.interaction.kind === "move_stroke_group" || n.interaction.kind === "scale_stroke_group" || n.interaction.kind === "rotate_stroke_group") && (nt = !0), (n.interaction.kind === "move_raster_object" || n.interaction.kind === "scale_raster_object") && (nt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length && (nt = !0), n.interaction.kind === "move_multi" && Array.isArray(n.interaction.rasterSnapshots) && n.interaction.rasterSnapshots.length && (nt = !0), nt && (["move_stroke_group", "scale_stroke_group", "rotate_stroke_group"].includes(n.interaction.kind) || n.interaction.kind === "move_multi" && Array.isArray(n.interaction.strokeSnapshots) && n.interaction.strokeSnapshots.length ? xe({ rebuildPaintEngine: !0 }) : Ne()), $e(), z(), o.setDirtyCanvas(!0, !0), Cs(), Nn(), Ae();
      }
      n.interaction = null, (Oe == null ? void 0 : Oe.kind) === "roll_frame" && be(), ye(), Oe && Oe.kind === "view" && Wr(() => g.endDrag(performance.now())), No(), Nn(), Ot(n.pointerPos), Ae();
    }
  }
  function $s() {
    var Oe, Ee, ke, vt, lt;
    if (!de()) {
      if (((Oe = n.interaction) == null ? void 0 : Oe.kind) === "world_select" || ((Ee = n.interaction) == null ? void 0 : Ee.kind) === "world_gizmo") {
        Ds(n.interaction);
        return;
      }
      if (((ke = n.interaction) == null ? void 0 : ke.kind) === "view" && Wr(() => g.endDrag(performance.now())), ((vt = n.interaction) == null ? void 0 : vt.kind) === "paint_stroke" || ((lt = n.interaction) == null ? void 0 : lt.kind) === "paint_lasso_fill") {
        ye();
        const ut = _e(n.interaction);
        ut && n.paintEngine.cancelActiveStroke(ut);
      }
      n.interaction = null, ye(), No(), Ot(n.pointerPos), Ae({ localOnly: !0 });
    }
  }
  function zs(Oe) {
    const Ee = Re(Oe), ke = Nt(Ee, !0);
    n.interaction || (Ot(Ee), ke && n.mode === "frame" && n.primaryTool === "cursor" && Ae({ localOnly: !0, reason: ft.OVERLAY }));
  }
  function js(Oe) {
    if (n.mode === "frame") {
      const Ee = Re(Oe), ke = Ga(Oe);
      ke && kr(), ke && me() ? Es(Ee, -ke) : ke && Os(Ee, ke) && Ae({ localOnly: !0 }), Oe.preventDefault();
      return;
    }
    if (n.mode === "pano") {
      if (ae(), B()) {
        const Ee = Ga(Oe);
        Ee && Fs(Re(Oe), -Ee);
      } else g.applyWheelEvent(Oe) && Ae({ localOnly: !0, reason: ft.VIEW });
      Oe.preventDefault();
    }
  }
  return {
    connect(Oe) {
      ({
        _segmentFrameLassoFill: m,
        _segmentFrameStroke: _,
        appendLassoPoint: ee,
        appendPaintPoint: V,
        applyRasterObjectOffset: te,
        applyRasterObjectTransform: I,
        applySharedRollInteractionPoint: X,
        applyStrokeGroupOffset: j,
        applyStrokeGroupTransform: W,
        buildFreehandStrokeRecord: ie,
        buildLassoFillStrokeRecord: pe,
        cameraShoots: q,
        cancelFrameCameraGesture: de,
        cancelViewTransition: ae,
        clearSelection: ve,
        commitAndRefreshNode: G,
        commitPaintInteraction: A,
        commitState: z,
        currentSpaceCamera: M,
        cutoutCamera: H,
        dragFrame: T,
        editorViewInput: K,
        ensureGroupFrame: fe,
        frameContext: se,
        frameLocalPointToWorldDir: Y,
        frameSpaceView: k,
        frameTarget: ne,
        getActiveCutoutShot: ue,
        getActivePaintTargetDescriptor: _e,
        getCutoutSelectableItems: we,
        getCutoutSelectableItemsForHit: C,
        getFrameViewLayout: le,
        getFrameViewRect: b,
        getList: y,
        getMultiSelectionGeom: E,
        getPaintingGroupList: v,
        getRasterObjectCenterUv: $,
        getRasterObjectList: L,
        getSelectableRasterObjectItems: J,
        getSelectableStrokeGroupItems: O,
        getSelected: F,
        getSelectedItems: x,
        getStrokeGroupCenterUv: R,
        getStrokeGroupStrokes: Z,
        getUnwrapRect: he,
        handleHit: ce,
        hideTooltip: be,
        hitObjectAt: Se,
        invalidateLivePaintPreviewCaches: ye,
        isCameraSelected: Q,
        isFreeFrameView: me,
        isFreeSpaceView: B,
        isItemLocked: p,
        isRasterObjectItem: N,
        isSceneSticker: S,
        isShotItem: P,
        isSpaceView: U,
        isStickerItem: ge,
        isStrokeGroupItem: D,
        markObjectVisualsDirty: re,
        markPaintCompositeVisualsDirty: Ne,
        markPaintStrokeVisualsDirty: xe,
        objectGeom: Pe,
        paintingShown: Ce,
        parseRasterObjectSelectionId: Le,
        playback: je,
        poseOf: Ke,
        pushHistory: $e,
        rectFromPoints: He,
        rectIntersectsGeom: oe,
        refreshPaintEngineRevisionCache: Fe,
        requestDraw: Ae,
        screenPos: Re,
        screenPosCss: Ye,
        screenPosToErpPoint: Ge,
        screenPosToFrameAsErpPoint: We,
        screenToWorldDir: ht,
        selectWorldSticker: bt,
        selectedWorldSticker: Tt,
        setPointerPos: Nt,
        setSelectedItem: Pn,
        setSelectedItems: qe,
        setSpaceView: sn,
        shortestWrappedDelta: Wt,
        spaceViewState: ui,
        startAnimation: Wr,
        startCameraPress: di,
        startFrameDrag: on,
        startPanFrame: yn,
        startSpaceDrag: Ur,
        stopTimelinePlayback: kr,
        supportsErpPainting: cr,
        supportsFramePainting: xo,
        syncCutoutShot: ko,
        syncFloatingViewButtonState: Mo,
        syncFrameRollKnob: Po,
        syncSidePanelControls: Cs,
        syncTimeline: Is,
        syncViewToggleState: No,
        updateCursor: Ot,
        updateSelectionMenu: Nn,
        updateSidePanel: Qn,
        viewControls: Ri,
        writePose: Vn,
        zoomFrameAt: Es,
        zoomFrameViewAt: Os,
        zoomSpaceAt: Fs
      } = Oe);
    },
    onCanvasPointerDown: Ul,
    worldGizmoPointer: Yr,
    hoverWorldGizmo: Ao,
    onCanvasPointerMove: Rs,
    onCanvasPointerUp: Vs,
    onCanvasPointerCancel: $s,
    onCanvasMouseMove: zs,
    onCanvasWheel: js
  };
}
function uA(e) {
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
  let f, h, w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T, K, fe, se, Y;
  function k(we, C, le = !1) {
    var J;
    z();
    const b = a && n.mode === "frame" ? _() : null, y = b || te(), E = b ? "shot" : X(), v = G();
    if (v && !se(v) || !v && (!y || E === "stroke" || j(y))) return;
    const $ = (((J = u.sidePanel) == null ? void 0 : J.params) || []).find((O) => O.key === we);
    if (!$ || $.enabled === !1) return;
    let L = Number(C);
    if (Number.isNaN(L) && (L = 0), (v || t) && dN.has(we) ? L = we === "scale" ? Math.max(L, s0) : L : L = Ie(L, Number($.min), Number($.max)), we === "yaw_deg" && (L = Ht(L)), !v && t && we.startsWith("position_")) {
      H(), eS(l.camera, n.frame, we, L), fe(), ve(), le && ae();
      return;
    }
    if (v) {
      rS(v, n.frame, we, L), pe(), fe(), ve(), le && ae();
      return;
    }
    we === "opacity" ? tS(y, n.frame, L / 100) : Y(y, { [we]: L }), a && !W(y) && (we === "hFOV_deg" || we === "vFOV_deg") && (y.aspect_id = Ni(y)), fe(), ve(), le && ae();
  }
  async function ne(we) {
    var b, y, E, v, $, L, J;
    const C = we.target.closest("[data-action]");
    if (!C) return;
    const le = String(C.getAttribute("data-action") || "");
    if (le === "coverage-set") {
      const O = Rn(C.getAttribute("data-coverage"));
      if (O === Rn(l.coverage)) return;
      l.coverage = O, n.coverage = O, r && (r.value = String(O)), o ? s.backgroundDirty = !0 : (m(), M({
        syncPreview: d !== "cutout",
        syncGraph: d !== "cutout"
      })), fe(), K(), ve();
      return;
    }
    if (le === "toggle-selection-picker") {
      if ((y = (b = u.sidePanel) == null ? void 0 : b.selectionPicker) != null && y.disabled) return;
      u.sidePanel.selectionPicker.open = !u.sidePanel.selectionPicker.open;
      return;
    }
    if (le === "select-picker-item") {
      u.sidePanel.selectionPicker.open = !1;
      const O = String(C.getAttribute("data-selection-id") || "");
      let F = null;
      if (O && (d === "stickers" ? F = [...V(), ...c ? l.shots : []].find((x) => String((x == null ? void 0 : x.id) || "") === O) || null : F = ((E = ee().find((x) => {
        var R;
        return String(((R = x == null ? void 0 : x.item) == null ? void 0 : R.id) || "") === O;
      })) == null ? void 0 : E.item) || null), A(F || null), F && !ie(F)) {
        const x = de(F);
        T(Ht(Number(x.yaw_deg || 0)), Ie(Number(x.pitch_deg || 0), -89.9, 89.9));
      }
      fe(), K(), ve();
      return;
    }
    if (le === "copy-state-inline") {
      const O = te(), F = X();
      if (!O || F === "stroke" || I().length > 1) return;
      const x = JSON.stringify(a && F !== "image" ? h(O) : w(de(O)));
      try {
        await navigator.clipboard.writeText(x), (v = u.sidePanel) != null && v.copyStateButton && (u.sidePanel.copyStateButton.label = "Copied", window.setTimeout(() => {
          var R;
          (R = u.sidePanel) != null && R.copyStateButton && (u.sidePanel.copyStateButton.label = "Copy State");
        }, 900));
      } catch {
      }
      return;
    }
    if (le === "set-invert-x") {
      l.ui_settings.invert_view_x = C.getAttribute("data-value") === "1", q(), fe(), ($ = i.setDirtyCanvas) == null || $.call(i, !0, !0), ve();
      return;
    }
    if (le === "set-invert-y") {
      l.ui_settings.invert_view_y = C.getAttribute("data-value") === "1", q(), fe(), (L = i.setDirtyCanvas) == null || L.call(i, !0, !0), ve();
      return;
    }
    if (le === "ui-reset-defaults") {
      l.ui_settings.invert_view_x = !1, l.ui_settings.invert_view_y = !1, q(), fe(), (J = i.setDirtyCanvas) == null || J.call(i, !0, !0), ve();
      return;
    }
    if (le === "close-preview") {
      g();
      return;
    }
    if (le === "cancel-close") {
      g();
      return;
    }
    le === "save-close" && (f(), g());
  }
  function ue(we) {
    const C = we.target.closest("[data-action='param-input']");
    C && k(String(C.getAttribute("data-param-key") || ""), C.value, !1);
  }
  function _e(we) {
    const C = we.target.closest("[data-action='param-input']");
    C && k(String(C.getAttribute("data-param-key") || ""), C.value, !0);
  }
  return {
    connect(we) {
      ({
        apply: f,
        buildCanonicalCutoutStickerState: h,
        buildCanonicalSelectedStickerState: w,
        closeEditor: g,
        commitState: m,
        getActiveCutoutShot: _,
        getCutoutInspectorItems: ee,
        getList: V,
        getSelected: te,
        getSelectedItems: I,
        getSelectedKind: X,
        isItemLocked: j,
        isSceneSticker: W,
        isStrokeGroupItem: ie,
        markObjectVisualsDirty: pe,
        persistUiSettings: q,
        poseOf: de,
        pushHistory: ae,
        requestDraw: ve,
        selectedWorldSticker: G,
        setSelectedItem: A,
        stopTimelinePlayback: z,
        syncCoverageChangeToNodePreviews: M,
        syncCutoutShot: H,
        turnViewTo: T,
        updateSelectionMenu: K,
        updateSidePanel: fe,
        worldStickerEditable: se,
        writePose: Y
      } = we);
    },
    onSidePanelClick: ne,
    onSidePanelInput: ue,
    onSidePanelChange: _e
  };
}
function dA(e) {
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
    videoEl: h
  } = e;
  let w, g, m, _, ee, V, te, I, X, j, W, ie, pe, q, de, ae, ve, G, A, z, M, H, T, K, fe, se, Y, k, ne, ue, _e, we, C, le, b, y, E, v, $, L, J, O, F, x, R, Z, he, ce, be, Se, ye;
  const Q = () => {
    if (!t.customPaintSessionStart) return;
    if (ml(t.customPaintSessionStart, t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    if (AN(t.customPaintColor)) {
      t.customPaintSessionStart = null;
      return;
    }
    const $e = [
      $n(t.customPaintColor),
      ...t.customPaintHistory.filter((He) => !ml(He, t.customPaintColor))
    ];
    t.customPaintHistory = $e.slice(0, 8), t.customPaintSessionStart = null;
  }, me = ($e = !1) => {
    !i || i.hidden || ($e ? Q() : t.customPaintSessionStart = null, i.hidden = !0, f.paintDock.colorPopOpen = !1);
  }, B = () => {
    i && (i.hidden && (t.customPaintSessionStart = $n(t.customPaintColor)), i.hidden = !1, f.paintDock.colorPopOpen = !0);
  };
  function p() {
    $();
  }
  function N($e) {
    var ht, bt, Tt, Nt, Pn;
    if ((bt = (ht = $e.target) == null ? void 0 : ht.matches) != null && bt.call(ht, "[data-confirm-overlay]")) {
      const qe = (Tt = f.confirmDialog) == null ? void 0 : Tt.resolve;
      f.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, qe == null || qe(!1);
      return;
    }
    const He = $e.target.closest("[data-space-mode]");
    if (He) {
      le(He.getAttribute("data-space-mode"));
      return;
    }
    const oe = $e.target.closest("[data-gizmo-mode]");
    if (oe) {
      t.gizmoMode = oe.getAttribute("data-gizmo-mode"), c.backgroundDirty = !0, be(), k({ localOnly: !0, reason: ft.VIEW });
      return;
    }
    const Fe = $e.target.closest("[data-view]");
    if (Fe) {
      if (Fe.getAttribute("aria-disabled") === "true") return;
      const qe = t.mode;
      t.mode = String(Fe.getAttribute("data-view") || "pano"), d && t.mode === "frame" && (qe !== "frame" && (c.frameSafeRect = null), Se(), be()), q(), F(), k();
      return;
    }
    const Ae = $e.target.closest("[data-action], [data-tool-ui-action], [data-tool-mode], [data-paint-tool], [data-mask-tool], [data-paint-layer-clear-current], [data-paint-color-swatch], [data-paint-color-custom]");
    if (Ae && !a) {
      if (Ae.matches("[data-tool-mode]")) {
        const qe = String(Ae.getAttribute("data-tool-mode") || "cursor");
        t.primaryTool = qe, (qe === "paint" || qe === "mask") && X({ preservePanelValues: !0 }), L(), Se(), be(), k();
        return;
      }
      if (Ae.matches("[data-tool-ui-action]")) {
        const qe = String(Ae.getAttribute("data-tool-ui-action") || "");
        if ((qe === "undo" || qe === "redo") && Ae.disabled) return;
        qe === "undo" ? ne(-1) : qe === "redo" ? ne(1) : qe === "clear" ? te() : qe === "add" || qe === "add-image" ? g() : qe === "add-world" ? _() : qe === "add-or-look" ? w() : qe === "add-camera" && m();
        return;
      }
      if (Ae.matches("[data-paint-tool]")) {
        t.primaryTool = "paint";
        const qe = String(Ae.getAttribute("data-paint-tool") || "pen");
        t.paintTool = qe, X({ preservePanelValues: !0 }), Tn[qe] && (t.activeBrushPresetId = qe), L(), Se(), be(), k();
        return;
      }
      if (Ae.matches("[data-mask-tool]")) {
        t.primaryTool = "mask", t.maskTool = String(Ae.getAttribute("data-mask-tool") || "pen"), X({ preservePanelValues: !0 }), L(), Se(), be(), k();
        return;
      }
      if (Ae.matches("[data-paint-layer-clear-current]")) {
        const qe = String(Ae.getAttribute("data-paint-layer-clear-current") || "paint") === "mask" ? "mask" : "paint";
        I(qe);
        return;
      }
      if (Ae.matches("[data-paint-color-swatch]")) {
        const qe = Kl.find((sn) => sn.id === Ae.getAttribute("data-paint-color-swatch"));
        if (!qe) return;
        t.paintColor = $n(qe.color), me(!0), L();
        return;
      }
      if (Ae.matches("[data-paint-color-custom]")) {
        $e.preventDefault(), $e.stopPropagation(), i && !i.hidden ? me(!0) : B(), L();
        return;
      }
    }
    const Re = String(((Nt = Ae == null ? void 0 : Ae.getAttribute) == null ? void 0 : Nt.call(Ae, "data-action")) || "");
    if (Re === "video-play-toggle") {
      if ($e.preventDefault(), $e.stopPropagation(), !(h instanceof HTMLVideoElement)) return;
      ye.resumeAfterScrub = !1, x();
      return;
    }
    if (Re === "video-audio-toggle") {
      $e.preventDefault(), $e.stopPropagation(), he(), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (Re === "video-loop-toggle") {
      if ($e.preventDefault(), $e.stopPropagation(), !(h instanceof HTMLVideoElement)) return;
      const qe = !f.videoTransport.loop;
      f.videoTransport.loop = qe, h.loop = qe, O({
        hasAudio: f.videoTransport.hasAudio,
        loop: qe,
        muted: h.muted,
        volume: Number(h.volume ?? f.videoTransport.volume ?? 1)
      }), typeof (Ae == null ? void 0 : Ae.blur) == "function" && Ae.blur();
      return;
    }
    if (!a) {
      if (Re === "frame-aspect") {
        f.frameRail.aspectOpen = !f.frameRail.aspectOpen;
        return;
      }
      if (Re === "frame-aspect-set") {
        const qe = t.mode === "frame" ? ae() : null;
        if (!qe || qe.locked === !0) return;
        C(qe, String(Ae.getAttribute("data-aspect") || "1:1")), f.frameRail.aspectOpen = !1, J(), fe(), j(), F(), Se(), be(), k();
        return;
      }
      if (Re === "frame-aspect-custom") {
        const qe = t.mode === "frame" ? ae() : null, sn = Ae.getAttribute("data-custom-width"), Wt = Ae.getAttribute("data-custom-height");
        if (!qe || !ee(qe, sn, Wt)) return;
        f.frameRail.aspectOpen = !1, J(), fe(), j(), F(), k();
        return;
      }
      if (Re === "frame-rotate-90") {
        const qe = t.mode === "frame" ? ae() : null;
        if (!qe || qe.locked === !0) return;
        _e(qe), f.frameRail.aspectOpen = !1, J(), fe(), j(), F(), k();
        return;
      }
      if (Re === "aspect") {
        t.cutoutAspectOpen = !t.cutoutAspectOpen, t.menuSize.measured = !1, be(), k();
        return;
      }
      if (Re === "aspect-set") {
        const qe = G();
        if (!qe) return;
        const sn = String(Ae.getAttribute("data-aspect") || "1:1");
        C(qe, sn), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, J(), fe(), j(), be(), k();
        return;
      }
      if (Re === "rotate-90") {
        const qe = G();
        if (!qe || M()) return;
        _e(qe), t.cutoutAspectOpen = !1, t.menuSize.measured = !1, J(), fe(), j(), be(), k();
        return;
      }
      if (Re === "bring-front") {
        V();
        return;
      }
      if (Re === "send-back") {
        we();
        return;
      }
      if (Re === "duplicate") {
        pe();
        return;
      }
      if (Re === "replace-image") {
        Y();
        return;
      }
      if (Re === "toggle-lock") {
        Z();
        return;
      }
      if (Re === "back-initial") {
        ue();
        return;
      }
      if (Re === "toggle-visible") {
        R();
        return;
      }
      if (Re === "delete") {
        ie();
        return;
      }
    }
    if (Re === "reset-view") {
      if (t.mode === "frame") return;
      ce(
        { position: E(), yaw_deg: 0, pitch_deg: 0, hFOV_deg: 100, distance: ((Pn = W()) == null ? void 0 : Pn.radius) || sr },
        { mode: gl(t.spaceMode, t.viewTransition), moved: !1 }
      );
      return;
    }
    if (Re === "frame-view") {
      if (!H() || gl(t.spaceMode, t.viewTransition) !== "6dof") return;
      de();
      return;
    }
    if (Re === "toggle-grid") {
      if (t.mode === "frame") return;
      t.showGrid = !t.showGrid, RN(r == null ? void 0 : r.id, t.showGrid), p(), k();
      return;
    }
    if (Re === "toggle-fullscreen") {
      $e.preventDefault(), $e.stopPropagation(), Le();
      return;
    }
    if (Re === "toggle-output-preview-size") {
      $e.preventDefault(), $e.stopPropagation();
      const qe = !t.outputPreviewExpanded;
      t.outputPreviewExpanded = qe, v(() => {
        t.outputPreviewAnimFrom = t.outputPreviewAnim, t.outputPreviewAnimTo = qe ? 1 : 0, t.outputPreviewAnimStartTs = performance.now();
      }), Ke(), k();
      return;
    }
    const Ye = $e.target.closest("[data-paint-history-index]");
    if (!Ye) return;
    const Ge = Number(Ye.getAttribute("data-paint-history-index")), We = t.customPaintHistory[Ge];
    We && (t.customPaintColor = $n(We), t.paintColor = $n(We), L());
  }
  function S($e) {
    const He = $e.target.closest("[data-video-seek]");
    if (He) {
      if (!(h instanceof HTMLVideoElement)) return;
      T.playing && (ye.resumeAfterScrub = !0), T.seek(Si(Number(He.value || 0), K()));
      return;
    }
    const oe = $e.target.closest("[data-video-volume]");
    if (oe) {
      if (!(h instanceof HTMLVideoElement)) return;
      const Re = Ie(Number(oe.value || 0), 0, 1);
      h.volume = Re, h.muted = Re <= 1e-4, O({
        hasAudio: f.videoTransport.hasAudio,
        muted: h.muted,
        volume: Re
      });
      return;
    }
    const Fe = $e.target.closest("[data-paint-size-slider]");
    if (Fe) {
      if (Fe.disabled) return;
      const Re = Math.max(1, Math.min(120, Math.round(Number(Fe.value)))), Ye = ve(t.primaryTool === "paint" ? t.paintTool : t.maskTool);
      t.brushSizes[Ye] = Re, L(), b();
      return;
    }
    const Ae = $e.target.closest("[data-paint-alpha-slider]");
    if (Ae) {
      const Re = { ...t.customPaintColor, a: Ie(Number(Ae.value) / 100, 0, 1) };
      t.customPaintColor = $n(Re), t.paintColor = $n(Re), L();
    }
  }
  function P($e) {
    var He;
    if ($e.target.closest("[data-video-seek]")) {
      if (!(h instanceof HTMLVideoElement)) return;
      ye.resumeAfterScrub && T.play(), ye.resumeAfterScrub = !1;
      return;
    }
    if ($e.target.closest("[data-video-volume]")) {
      typeof ((He = $e.target) == null ? void 0 : He.blur) == "function" && $e.target.blur();
      return;
    }
    $e.target.closest("[data-paint-size-slider]") && A();
  }
  function U($e) {
    const He = $e.target.closest("[data-tip]");
    !He || !l.contains(He) || u.target !== He && (u.target = He, u.timer && clearTimeout(u.timer), u.timer = window.setTimeout(() => {
      u.target === He && y(He);
    }, 220));
  }
  function ge($e) {
    var Fe, Ae;
    const He = $e.target.closest("[data-tip]");
    !He || u.target !== He || ($e.relatedTarget instanceof Element ? (Ae = (Fe = $e.relatedTarget).closest) == null ? void 0 : Ae.call(Fe, "[data-tip]") : null) === He || z();
  }
  function D($e, He) {
    var Ge;
    if (!o) return;
    const oe = o.getBoundingClientRect(), Fe = Ie(($e - oe.left) / Math.max(1, oe.width), 0, 1), Ae = 1 - Ie((He - oe.top) / Math.max(1, oe.height), 0, 1), Re = Iu(t.customPaintColor), Ye = { ...Cu(Re.h, Fe, Ae), a: Number(((Ge = t.customPaintColor) == null ? void 0 : Ge.a) ?? 1) };
    t.customPaintColor = $n(Ye), t.paintColor = $n(Ye), L();
  }
  function re($e) {
    var Re;
    if (!s) return;
    const He = s.getBoundingClientRect(), oe = Ie(($e - He.left) / Math.max(1, He.width), 0, 1), Fe = Iu(t.customPaintColor), Ae = { ...Cu(oe, Fe.s, Fe.v), a: Number(((Re = t.customPaintColor) == null ? void 0 : Re.a) ?? 1) };
    t.customPaintColor = $n(Ae), t.paintColor = $n(Ae), L();
  }
  function Ne($e, He) {
    const oe = $e.pointerId;
    He($e);
    const Fe = (Re) => {
      Re.pointerId === oe && He(Re);
    }, Ae = (Re) => {
      Re.pointerId === oe && (window.removeEventListener("pointermove", Fe), window.removeEventListener("pointerup", Ae), window.removeEventListener("pointercancel", Ae));
    };
    window.addEventListener("pointermove", Fe), window.addEventListener("pointerup", Ae), window.addEventListener("pointercancel", Ae);
  }
  function xe() {
    const $e = !!t.fullscreen;
    Ji(f.floatingButtons, "action", "toggle-fullscreen", {
      icon: $e ? ze.fullscreen_close : ze.fullscreen,
      label: $e ? "Exit Fullscreen" : "Fullscreen",
      tip: $e ? "Exit fullscreen" : "Fullscreen"
    });
  }
  function Pe($e) {
    const He = !!$e;
    t.fullscreen !== He && (t.fullscreen = He, l.classList.toggle("pano-modal-fullscreen", He), He ? (t.fullscreenPrevShowGrid = !!t.showGrid, t.showGrid = !1) : t.fullscreenPrevShowGrid !== null && (t.showGrid = !!t.fullscreenPrevShowGrid, t.fullscreenPrevShowGrid = null), p(), xe(), se(), k());
  }
  function Ce() {
    return document.fullscreenElement === n;
  }
  async function Le() {
    var $e, He;
    try {
      if (!document.fullscreenEnabled) {
        Pe(!t.fullscreen);
        return;
      }
      Ce() ? await ((He = document.exitFullscreen) == null ? void 0 : He.call(document)) : await (($e = n.requestFullscreen) == null ? void 0 : $e.call(n));
    } catch {
      Pe(!t.fullscreen);
    }
  }
  function je() {
    document.fullscreenEnabled && Pe(Ce());
  }
  function Ke() {
    const $e = !!t.outputPreviewExpanded;
    f.outputPreviewToggle.icon = $e ? ze.fullscreen_close : ze.fullscreen, f.outputPreviewToggle.label = $e ? "Reduce Preview" : "Expand Preview", f.outputPreviewToggle.tip = $e ? "Reduce preview" : "Expand preview";
  }
  return {
    connect($e) {
      ({
        addCutoutFrame: w,
        addImageSticker: g,
        addStudioCamera: m,
        addWorldImageSticker: _,
        applyCutoutAspectCustom: ee,
        bringSelectedToFront: V,
        clearAll: te,
        clearPaintingLayer: I,
        clearSelection: X,
        commitAndRefreshNode: j,
        contentSphere: W,
        deleteSelected: ie,
        duplicateSelected: pe,
        forceCursorTool: q,
        frameSpaceContent: de,
        getActiveCutoutShot: ae,
        getBrushPresetIdForTool: ve,
        getSelected: G,
        hidePaintSizePreview: A,
        hideTooltip: z,
        isErpCamera: M,
        isFreeSpaceView: H,
        playback: T,
        playbackFps: K,
        pushHistory: fe,
        queueVideoTransportLayout: se,
        replaceSelectedImage: Y,
        requestDraw: k,
        restoreHistory: ne,
        restoreSelectedToInitialPose: ue,
        rotateCutoutAspect90: _e,
        sendSelectedToBack: we,
        setShotAspect: C,
        setSpaceMode: le,
        showPaintSizePreview: b,
        showTooltipFor: y,
        spaceOrigin: E,
        startAnimation: v,
        syncFloatingViewButtonState: $,
        syncPaintUi: L,
        syncSidePanelControls: J,
        syncVideoTransportState: O,
        syncViewToggleState: F,
        togglePlayback: x,
        toggleSelectedExternalStickerVisibility: R,
        toggleSelectedLock: Z,
        toggleVideoMuted: he,
        transitionView: ce,
        updateSelectionMenu: be,
        updateSidePanel: Se,
        videoState: ye
      } = $e);
    },
    closePaintColorPop: me,
    syncGridToggleButton: p,
    onRootClick: N,
    onRootInput: S,
    onRootChange: P,
    onRootPointerOver: U,
    onRootPointerOut: ge,
    updatePaintColorFromSv: D,
    updatePaintColorFromHue: re,
    bindDrag: Ne,
    syncFullscreenButton: xe,
    setFullscreenState: Pe,
    onFullscreenChange: je,
    syncOutputPreviewToggleButton: Ke
  };
}
function fA(e) {
  const {
    editor: t,
    overlay: r,
    readOnly: n,
    stateV2: i,
    timeline: o,
    uiState: s
  } = e;
  let a, l, c, d, u, f, h, w, g, m, _, ee, V, te, I, X;
  const j = A2();
  function W(se) {
    var Y, k, ne, ue, _e;
    if (se.key === "Escape") {
      if (l()) {
        se.preventDefault(), se.stopPropagation(), (Y = se.stopImmediatePropagation) == null || Y.call(se);
        return;
      }
      if (t.fullscreen && document.fullscreenElement === r) {
        se.preventDefault(), se.stopPropagation(), (k = se.stopImmediatePropagation) == null || k.call(se), (ne = document.exitFullscreen) == null || ne.call(document).catch(() => {
        });
        return;
      }
      if (t.fullscreen) {
        se.preventDefault(), se.stopPropagation(), (ue = se.stopImmediatePropagation) == null || ue.call(se), ee(!1);
        return;
      }
      se.preventDefault(), se.stopPropagation(), (_e = se.stopImmediatePropagation) == null || _e.call(se), d();
    }
  }
  function ie(se) {
    const Y = String(se.key || ""), k = String(se.code || ""), ne = Number(se.keyCode || 0);
    if (!(Y === "Delete" || k === "Delete" || ne === 46) && !(Y === "Backspace" || k === "Backspace" || ne === 8)) return;
    const we = se.target, C = ((we == null ? void 0 : we.tagName) || "").toUpperCase();
    if (C === "INPUT" || C === "TEXTAREA" || we != null && we.isContentEditable) return;
    if (o.selection) {
      f(), se.preventDefault(), se.stopPropagation();
      return;
    }
    if (h()) {
      se.preventDefault(), se.stopPropagation();
      return;
    }
    m() && (u(), se.preventDefault(), se.stopPropagation());
  }
  function pe(se) {
    if (s.confirmDialog.visible) return !1;
    const Y = se.composedPath()[0];
    if (Y !== document.body && Y !== document.documentElement && !r.contains(Y)) return !1;
    const k = ((Y == null ? void 0 : Y.tagName) || "").toUpperCase();
    return k === "INPUT" ? !uN.has(String(Y.type || "text").toLowerCase()) : k !== "TEXTAREA" && k !== "SELECT" && !(Y != null && Y.isContentEditable);
  }
  function q(se) {
    return se.code !== "Space" || se.ctrlKey || se.metaKey || se.altKey || n || !i || !s.timeline.visible ? !1 : pe(se);
  }
  function de(se) {
    q(se) && (se.preventDefault(), se.stopPropagation(), se.repeat || I());
  }
  function ae(se) {
    q(se) && (se.preventDefault(), se.stopPropagation());
  }
  function ve(se) {
    if (j.modifiers(se), !!x0(se.code)) {
      if (!pe(se)) {
        A(se.code);
        return;
      }
      se.ctrlKey || se.metaKey || (se.preventDefault(), se.stopPropagation(), a() && (j.press(se.code, se.timeStamp), se.repeat || c(), V(() => {
      })));
    }
  }
  function G(se) {
    j.modifiers(se), se.key === "Meta" && z(), A(se.code) && (se.preventDefault(), se.stopPropagation());
  }
  function A(se) {
    return j.release(se) ? (j.held || w(), !0) : !1;
  }
  function z() {
    j.held && (j.releaseAll(), w());
  }
  function M() {
    document.hidden && z();
  }
  function H() {
    z();
  }
  function T(se) {
    const Y = !!(se.ctrlKey || se.metaKey), k = !!se.altKey;
    t.marqueeModifier === Y && t.altModifier === k || (t.marqueeModifier = Y, t.altModifier = k, te(), X(t.pointerPos));
  }
  function K() {
    z(), t.marqueeModifier = !1, t.altModifier = !1, te(), X(t.pointerPos);
  }
  function fe(se) {
    if (n || !se.ctrlKey && !se.metaKey) return;
    const Y = String(se.key || "").toLowerCase(), k = String(se.code || "");
    if (Y !== "z" && k !== "KeyZ") return;
    const ne = se.target, ue = ((ne == null ? void 0 : ne.tagName) || "").toUpperCase();
    if (ue === "INPUT" || ue === "TEXTAREA" || ne != null && ne.isContentEditable) return;
    const { canUndo: _e, canRedo: we } = g();
    se.shiftKey && !we || !se.shiftKey && !_e || (_(se.shiftKey ? 1 : -1), se.preventDefault(), se.stopPropagation());
  }
  return {
    connect(se) {
      ({
        canKeyMove: a,
        cancelFrameCameraGesture: l,
        cancelViewTransition: c,
        closeEditor: d,
        deleteSelected: u,
        deleteSelectedKeyframes: f,
        deleteSelectedWorldSticker: h,
        endFrameKeyMove: w,
        getHistoryCapabilities: g,
        getSelected: m,
        restoreHistory: _,
        setFullscreenState: ee,
        startAnimation: V,
        syncFrameRollKnob: te,
        togglePlayback: I,
        updateCursor: X
      } = se);
    },
    moveKeys: j,
    onEscClose: W,
    onDeleteKey: ie,
    onSpaceKey: de,
    onSpaceKeyUp: ae,
    onMoveKeyDown: ve,
    onMoveKeyUp: G,
    onVisibilityChange: M,
    onContextMenu: H,
    onModifierKeyChange: T,
    onWindowBlur: K,
    onUndoRedoKey: fe
  };
}
const Op = /* @__PURE__ */ new Map(), si = dg({
  app: ir,
  api: pn,
  ImageCtor: Image,
  imageState: {
    isImageLoadFailed: Nu,
    markImageFailed: o0,
    markImageLoading: r0,
    markImageReady: i0
  }
});
function Fp(e) {
  if (!Qt(e, "background") || !Qt(e, "external-sticker")) return null;
  const t = si.uiValue(e, "pano_timeline_fps");
  return Array.isArray(t) ? Di(t[0]) : null;
}
const pA = si.assetSource, hA = si.source, mA = si.uiImage, gA = si.invalidateUiImage, Tp = si.loadPreferredExactLinkedImage;
async function yA(e, t, r = {}) {
  var zd, jd;
  await zg(e, { tolerateOperationFailure: !0 }), si.clearFailedLinkedImages(e);
  const n = (r == null ? void 0 : r.readOnly) === !0, i = (r == null ? void 0 : r.hideSidebar) ?? n, o = n, s = IN(e, t);
  await Ed();
  const a = da(e, "output_preset"), l = da(e, "coverage"), c = da(e, "bg_color"), d = da(e, cN), u = () => {
    const Ve = t === "stickers" ? ["bg_media", "bg_erp", "erp_image"] : ["erp_image", "bg_erp"];
    return Tp(
      e,
      Ve,
      () => ut(),
      `background:size:${Ve.join("|")}`
    );
  }, f = () => {
    const Ve = u();
    return FN(Ve);
  }, h = (Ve = 2048) => {
    const st = a == null ? void 0 : a.value;
    return ON(st) ? f() || Math.max(1, Math.round(Number(Ve || 2048))) : EN(st, Ve);
  }, w = e.__panoSceneStateV2 === !0, g = t === "stickers" && w, m = g && e.__panoStudio === !0, _ = m, ee = t === "cutout" || m, V = (w ? Mm : km)(String((d == null ? void 0 : d.value) || ""), {
    outputPreset: h(2048),
    backgroundColor: String((c == null ? void 0 : c.value) || "#00ff00"),
    coverage: Rn(l == null ? void 0 : l.value),
    sharedUiSettings: TN(),
    active: Cm(e),
    fps: w ? Fp(e) : null
  });
  Hn(e).liveState = V, Hn(e).liveStateVersion = 0;
  let te = null;
  _ ? (te = V.camera && V.camera.visible !== !1 ? Am(V.camera, 0) : null, V.shots = te ? [{ ...te, position: [...te.position] }] : [], V.active.selected_shot_id = null) : t === "cutout" && (V.shots = Array.isArray(V.shots) ? V.shots.slice(0, 1) : [], V.shots.length || (V.active.selected_shot_id = null));
  const I = t === "cutout" ? (() => {
    var tr;
    const Ve = Array.isArray(V.shots) ? V.shots : [], st = String(((tr = V == null ? void 0 : V.active) == null ? void 0 : tr.selected_shot_id) || "");
    return Ve.find((ln) => String((ln == null ? void 0 : ln.id) || "") === st) || Ve[0] || null;
  })() : null, X = I ? M0(I, !1) : { width: 220, height: 132 }, j = n0(m ? "studio" : t), W = /* @__PURE__ */ go({
    stageStatus: nr,
    stageStatusDetail: "boot",
    stageWarningDetail: "",
    // A note on the stage that is not a failure (its text), as Panorama Studio's upstream Scene gives it (#90).
    stageNotice: "",
    viewButtons: (j.viewButtons || []).map((Ve) => ({ ...Ve, visible: !0, disabled: !1 })),
    // The space group of the bottom-right buttons (floatingRightState); none in the Cutout editor.
    space: (zd = j.spaceButtons) != null && zd.length ? { visible: !1, mode: "3dof", frameDisabled: !0, modes: j.spaceButtons, frame: j.spaceFrameButton } : null,
    // Only the Stickers editor of state v2 places images in space.
    toolButtons: (j.toolButtons || []).map((Ve) => ({
      ...Ve,
      disabled: !1,
      ...Ve.key === "add-world" ? { visible: g } : {}
    })),
    floatingButtons: [
      ...(j.floatingButtons || []).map((Ve) => ({ ...Ve, disabled: !1 })),
      ...o ? [{ action: "toggle-fullscreen", label: "Fullscreen", tip: "Fullscreen", pressed: null, icon: ze.fullscreen, disabled: !1 }] : []
    ],
    frameRail: {
      visible: !1,
      disabled: n,
      aspectOpen: !1,
      aspectIcon: ze.aspect,
      rotateIcon: ze.rotate_90,
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
      icon: ze.fullscreen,
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
      customColorCss: mr({ r: 0, g: 1, b: 0, a: 1 }, 1),
      colorPopOpen: !1,
      pickerHueColor: mr({ r: 1, g: 0, b: 0, a: 1 }, 1),
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
      width: X.width,
      height: X.height,
      label: I ? "Loading preview" : "Add Frame to preview"
    }
  }), ie = { frame: /* @__PURE__ */ Ta(0), playing: /* @__PURE__ */ Ta(!1) }, pe = document.createElement("div");
  document.body.appendChild(pe);
  const q = ({ intent: Ve, file: st } = {}) => {
    if (rr(st)) {
      if (Ve === "add") {
        Ce(st);
        return;
      }
      if (Ve === "add-world") {
        Le(st);
        return;
      }
      Ve === "replace" && lt(st);
    }
  }, de = ({ intent: Ve } = {}) => {
  }, ae = qu(aN, {
    open: !0,
    type: t,
    readOnly: n,
    hideSidebar: i,
    nodeTitle: s,
    shellPreset: j,
    paintSwatches: Kl.map((Ve) => ({
      id: Ve.id,
      label: Ve.label,
      cssColor: mr(Ve.color, 1)
    })),
    uiState: W,
    playhead: ie,
    onClose: () => {
      ji();
    },
    onTimeline: (Ve) => Ds(Ve),
    onImageFileSelected: q,
    onImageFileCancelled: de
  });
  let ve = null;
  try {
    ve = ae.mount(pe);
  } catch (Ve) {
    try {
      ae.unmount();
    } catch {
    }
    throw pe.remove(), Ve;
  }
  const G = pe.querySelector(".pano-modal-overlay"), A = pe.querySelector(".pano-modal"), z = A == null ? void 0 : A.querySelector("[data-stage-overlay]"), M = A == null ? void 0 : A.querySelector("[data-stage-background]"), H = A == null ? void 0 : A.querySelector(".pano-stage-wrap"), T = ((jd = ve == null ? void 0 : ve.getPaintOverlayRefs) == null ? void 0 : jd.call(ve)) || {}, K = T.cursor || null, fe = T.sizePreview || null, se = T.sizeSample || null;
  if (!G || !A || !z || !M || !H || !K || !fe || !se)
    throw ae.unmount(), pe.remove(), new Error("Failed to mount Panorama Vue modal shell");
  const Y = z.getContext("2d"), k = A.querySelector("[data-side]"), ne = A.querySelector("[data-video-element]"), ue = A.querySelector("[data-port-video-element]");
  sc(z, "editor.stage-overlay"), sc(M, "editor.stage-background"), Pf(ne, "editor.video"), Pf(ue, "editor.port-video");
  const _e = A.querySelector(".pano-floating-right"), we = A.querySelector(".pano-floating-top"), C = A.querySelector("[data-tool-rail]"), le = A.querySelector("[data-frame-rail]"), b = A.querySelector("[data-frame-roll-knob]"), y = A.querySelector("[data-paint-dock]"), E = A.querySelector(".pano-video-transport"), v = A.querySelector("[data-selection-menu]"), $ = A.querySelector("[data-tooltip]"), L = A.querySelector("[data-camera-preview-host]"), J = A.querySelector("[data-camera-preview-canvas]");
  sc(J, "editor.camera-preview");
  const O = A.querySelector("[data-paint-color-row]"), F = A.querySelector("[data-paint-color-pop]"), x = A.querySelector("[data-paint-color-sv]"), R = A.querySelector("[data-paint-color-sv-cursor]"), Z = A.querySelector("[data-paint-hue-strip]"), he = A.querySelector("[data-paint-hue-handle]");
  H == null || H.removeAttribute("data-stage-ready"), H == null || H.setAttribute("data-stage-loading-kind", "boot"), z.style.opacity = "1", M.style.opacity = "0", i && (k == null || k.remove(), A.classList.add("pano-modal-readonly")), A.addEventListener("pointerdown", () => P.wake(), !0), A.addEventListener("pointerdown", (Ve) => {
    var st;
    Ve.target.closest("[data-frame-roll-knob]") || Pn(), !Ve.target.closest(".pano-picker") && (Ve.target.closest("[data-paint-color-row]") || (A.querySelectorAll(".pano-picker-pop").forEach((tr) => {
      tr.hidden = !0;
    }), oe(!0), ee && be.cutoutAspectOpen && !Ve.target.closest(".pano-aspect-popover") && !Ve.target.closest("[data-action='aspect']") && (be.cutoutAspectOpen = !1, be.menuMode = "", be.menuSize.measured = !1, An(), ut()), (st = W.frameRail) != null && st.aspectOpen && !Ve.target.closest(".pano-frame-aspect-control") && (W.frameRail.aspectOpen = !1)));
  });
  const be = {
    mode: "pano",
    selectedId: y0(t, V),
    viewYaw: 0,
    viewPitch: 0,
    viewFov: 100,
    // Panorama Studio with World content: where the Viewport camera stands (World glTF) and how far
    // ahead its pivot is (pano_space.js). It starts at the World origin, where the ERP is taken from,
    // or where the editor was last closed on this page (restoreView), and is not saved. Until it moves
    // (viewMoved), its pivot is as far ahead as the content is large.
    viewPosition: [0, 0, 0],
    viewDistance: sr,
    viewMoved: !1,
    // "3dof" stands at the World origin and shows what the ERP shows; "6dof" moves through the World.
    // The editor opens in 3DoF, or as it was last closed on this page (restoreView); it is not saved.
    spaceMode: "3dof",
    coverage: Rn(V.coverage),
    historyController: e2(V),
    primaryTool: "cursor",
    paintTool: "pen",
    maskTool: "pen",
    brushSizes: { pen: 20, marker: 20, brush: 20, crayon: 20 },
    activeBrushPresetId: Er,
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
    showGrid: LN(e == null ? void 0 : e.id, !0),
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
    paintEngine: Il(),
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
  }, Se = { expanded: null, openRows: /* @__PURE__ */ new Set(), selection: null, drag: null, scrubFrame: 0 };
  t === "stickers" && (be.selectedId = null, V.active.selected_sticker_id = null), be.selectedIds = be.selectedId ? [be.selectedId] : [];
  const ye = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Map(), me = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), p = rn({ label: "editor.still" });
  p.__panoFrameIdx = 0;
  const N = rn({ label: "editor.port-still" });
  N.__panoFrameIdx = 0;
  const S = {
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
  }, P = ak({
    requestAnimationFrame: (Ve) => requestAnimationFrame(Ve),
    cancelAnimationFrame: (Ve) => cancelAnimationFrame(Ve),
    draw: (Ve, st) => Bs(Ve, st),
    animating: () => Ye()
  }), U = ok({
    requestFrame: (Ve) => P.requestFrame(Ve),
    cancelFrame: (Ve) => P.cancelFrame(Ve),
    tasks: {
      seek: () => Oe.seek(Se.scrubFrame),
      timeline: () => Ws(),
      // The Stickers are evaluated at the playhead as the stage draws; the stroke geometry stays cached.
      // A drag changes the state (Keyframes, Clip ranges), so what is drawn from it is made again.
      view: () => {
        Mr(), ut({ localOnly: !0, reason: ft.STATE });
      },
      sidePanel: () => Xt()
    }
  }), ge = GS({
    canvas: M,
    onReady: () => {
      xt(), ut({ reason: ft.CONTEXT });
    },
    onFailed: () => ut(),
    onUpdate: () => ut({ localOnly: !0, reason: ft.MEDIA }),
    onSplats: (Ve) => ut({ localOnly: !0, reason: B2(Ve) }),
    // A new view has nothing on its canvas yet, nor the camera preview's frame.
    onRestored: () => {
      bt(), xt(), ut({ reason: ft.CONTEXT });
    }
  }), D = Number.parseFloat(
    getComputedStyle(A).getPropertyValue("--pano-float-radius")
  ) || 10, re = (Ve) => {
    const st = String(Ve || "default");
    z.style.cursor !== st && (z.style.cursor = st);
  }, Ne = {
    timer: 0,
    target: null
  }, xe = {
    active: !1,
    depth: 0
  }, Pe = ed({
    getView: () => ({ yaw: be.viewYaw, pitch: be.viewPitch, fov: be.viewFov }),
    setView: (Ve) => {
      be.viewYaw = Ht(Number(Ve.yaw || 0)), be.viewPitch = Ie(Number(Ve.pitch || 0), -89.9, 89.9), be.viewFov = Ie(Number(Ve.fov || be.viewFov || 100), 35, 140);
    },
    getViewportSize: () => {
      const Ve = z.getBoundingClientRect();
      return {
        w: Math.max(1, Number(Ve.width || z.clientWidth || 0)),
        h: Math.max(1, Number(Ve.height || z.clientHeight || 0))
      };
    },
    getInvert: () => {
      var Ve, st;
      return {
        x: (Ve = V.ui_settings) != null && Ve.invert_view_x ? -1 : 1,
        y: (st = V.ui_settings) != null && st.invert_view_y ? -1 : 1
      };
    },
    getUnwrapRect: () => Tt(),
    onInteraction: () => P.requestDraw(ft.VIEW)
  }), {
    addImageStickerFromFile: Ce,
    addWorldStickerFromFile: Le,
    applyInitialCutoutFocus: je,
    applyVideoTimelineFps: Ke,
    bindDrag: $e,
    cancelFrameCameraGesture: He,
    closePaintColorPop: oe,
    commitState: Fe,
    disposeMediaSession: Ae,
    disposeUpstream: Re,
    editorAnimating: Ye,
    endFrameKeyMove: Ge,
    finishKnobRoll: We,
    flushFrameWheelCommit: ht,
    forgetCameraPreviewFrame: bt,
    getUnwrapRect: Tt,
    hidePaintSizePreview: Nt,
    hideTooltip: Pn,
    hoverWorldGizmo: qe,
    isFreeFrameView: sn,
    isFreeSpaceView: Wt,
    migrateLegacyEmbeddedAssets: ui,
    onCanvasDragOver: Wr,
    onCanvasDrop: di,
    onCanvasMouseMove: on,
    onCanvasPointerCancel: yn,
    onCanvasPointerDown: Ur,
    onCanvasPointerMove: kr,
    onCanvasPointerUp: cr,
    onCanvasWheel: xo,
    onContextMenu: ko,
    onDeleteKey: Mo,
    onEscClose: Po,
    onFrameRollKnobDoubleClick: Cs,
    onFrameRollKnobPointerDown: Is,
    onFrameRollKnobPointerMove: No,
    onFullscreenChange: Ot,
    onModifierKeyChange: Nn,
    onMoveKeyDown: Qn,
    onMoveKeyUp: Ri,
    onRootChange: Vn,
    onRootClick: Es,
    onRootInput: Os,
    onRootPointerOut: Fs,
    onRootPointerOver: Br,
    onSidePanelChange: Ul,
    onSidePanelClick: Yr,
    onSidePanelInput: Bl,
    onSpaceKey: Ao,
    onSpaceKeyUp: Ts,
    onTimelineAction: Ds,
    onUndoRedoKey: Co,
    onVisibilityChange: Ls,
    onWindowBlur: Rs,
    onWindowDragEnter: Vs,
    onWindowDragLeave: $s,
    onWindowDragOver: zs,
    onWindowDrop: js,
    playback: Oe,
    pushHistory: Ee,
    reconcileExternalStickerFromInputs: ke,
    refreshModalVideoSource: vt,
    replaceSelectedImageFromFile: lt,
    requestDraw: ut,
    restoreView: Je,
    sampleEditorDiagnostics: et,
    saveView: nt,
    setDropCue: er,
    setPointerPos: Xe,
    stageResizeObserver: Ue,
    stickerCornerOrderSanity: Ze,
    stopRenderLoop: Zt,
    syncCanvasSize: xt,
    syncCutoutShot: Mr,
    syncFullscreenButton: Vi,
    syncGridToggleButton: $i,
    syncLookAtFrameButtonState: zi,
    syncOutputPreviewToggleButton: Hs,
    syncPaintUi: Gs,
    syncPaintingLayerAsync: Ks,
    syncTimeline: Ws,
    syncUndoRedoButtons: Us,
    tick: Bs,
    triggerBackgroundPersistenceOnClose: ct,
    updateCursor: pt,
    updatePaintColorFromHue: yt,
    updatePaintColorFromSv: _t,
    updateSelectionMenu: An,
    updateSidePanel: Xt,
    viewControls: Cn,
    watchPixelRatio: Vt
  } = VN({
    api: pn,
    app: ir,
    backgroundCanvas: M,
    bgWidget: c,
    cameraV2: _,
    canvas: z,
    closeEditor: ji,
    comfyMedia: si,
    coverageWidget: l,
    ctx: Y,
    cutoutPreviewCanvas: J,
    cutoutPreviewHost: L,
    dragCue: xe,
    dragFrames: U,
    editor: be,
    editorView: ge,
    floatingRightEl: _e,
    floatingTopEl: we,
    frameGateCssRadius: D,
    frameRailEl: le,
    frameRollKnobEl: b,
    hideSidebar: i,
    imageCache: ye,
    initialShotBase: te,
    loadPreferredExactLinkedImage: Tp,
    mediaAssetSource: pA,
    mediaSource: hA,
    mediaUiImage: mA,
    node: e,
    overlay: G,
    paintColorPop: F,
    paintColorRow: O,
    paintColorSv: x,
    paintColorSvCursor: R,
    paintCursorEl: K,
    paintDockEl: y,
    paintHueHandle: he,
    paintHueStrip: Z,
    paintSizePreviewEl: fe,
    paintSizePreviewSampleEl: se,
    portStillCanvas: N,
    portVideoEl: ue,
    presetWidget: a,
    previewMode: o,
    rasterErpCanvasCache: B,
    rasterImageAlphaCache: me,
    rasterImageCache: Q,
    readOnly: n,
    resolveEditorOutputPresetWidth: h,
    root: A,
    runtime: S,
    sceneV2: g,
    scheduler: P,
    selectionMenu: v,
    setCanvasCursor: re,
    shotEditor: ee,
    stageWrap: H,
    state: V,
    stateV2: w,
    stateWidget: d,
    stillCanvas: p,
    studio: m,
    timeline: Se,
    timelinePlayhead: ie,
    toolRailEl: C,
    tooltip: Ne,
    tooltipEl: $,
    type: t,
    uiState: W,
    videoEl: ne,
    videoTimelineFps: Fp,
    videoTransportEl: E,
    viewController: Pe,
    vueModal: ve
  }, [
    JN,
    t2,
    n2,
    r2,
    i2,
    o2,
    s2,
    a2,
    l2,
    K2,
    W2,
    U2,
    q2,
    X2,
    J2,
    Z2,
    Q2,
    eA,
    tA,
    nA,
    rA,
    iA,
    oA,
    sA,
    aA,
    lA,
    cA,
    uA,
    dA,
    fA
  ]);
  Ze(), Ue.observe(z), Vt();
  const an = () => Fe();
  n || (sl(e).flushBeforeQueue = an), b == null || b.addEventListener("pointerdown", Is), b == null || b.addEventListener("pointermove", No), b == null || b.addEventListener("pointerup", We), b == null || b.addEventListener("pointercancel", () => He()), b == null || b.addEventListener("lostpointercapture", () => {
    var Ve;
    ((Ve = be.interaction) == null ? void 0 : Ve.source) === "knob" && He();
  }), b == null || b.addEventListener("dblclick", Cs), z.onpointerdown = Ur, z.onpointermove = kr, z.onpointerup = cr, z.onpointercancel = yn, z.onlostpointercapture = () => {
    He();
  }, z.onauxclick = (Ve) => {
    Ve.button === 1 && Ve.preventDefault();
  }, z.oncontextmenu = (Ve) => {
    (Wt() || sn()) && Iw(Cn(), 2) && Ve.preventDefault();
  }, z.onmousemove = on, z.onpointerleave = () => {
    be.interaction || qe({ x: -1e6, y: -1e6 });
  }, z.onmouseleave = () => {
    Xe(be.pointerPos, !1), pt(be.pointerPos), be.mode === "frame" && be.primaryTool === "cursor" && ut({ localOnly: !0, reason: ft.OVERLAY });
  }, z.onwheel = xo, z.ondragover = Wr, z.ondrop = di, window.addEventListener("dragenter", Vs, !0), window.addEventListener("dragover", zs, !0), window.addEventListener("dragleave", $s, !0), window.addEventListener("drop", js, !0), k == null || k.addEventListener("click", Yr), k == null || k.addEventListener("input", Bl), k == null || k.addEventListener("change", Ul), $i(), A.addEventListener("click", Es), A.addEventListener("input", Os), A.addEventListener("change", Vn), A.addEventListener("pointerup", (Ve) => {
    var st;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((st = Ve.target) == null ? void 0 : st.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), A.addEventListener("pointercancel", (Ve) => {
    var st;
    if (Ve.target.closest("[data-video-volume]")) {
      typeof ((st = Ve.target) == null ? void 0 : st.blur) == "function" && Ve.target.blur();
      return;
    }
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), A.addEventListener("focusout", (Ve) => {
    Ve.target.closest("[data-paint-size-slider]") && Nt();
  }), A.addEventListener("pointerover", Br), A.addEventListener("pointerout", Fs), A.addEventListener("pointerdown", (Ve) => {
    Ve.target.closest("[data-frame-roll-knob]") || Pn();
  }), x && (x.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), $e(Ve, (st) => _t(st.clientX, st.clientY));
  }), Z && (Z.onpointerdown = (Ve) => {
    Ve.preventDefault(), Ve.stopPropagation(), $e(Ve, (st) => yt(st.clientX));
  }), A.addEventListener("click", (Ve) => {
    var fi;
    const st = Ve.target.closest("[data-action='confirm-cancel'], [data-action='confirm-accept']");
    if (!st) return;
    const tr = st.getAttribute("data-action") === "confirm-accept", ln = (fi = W.confirmDialog) == null ? void 0 : fi.resolve;
    W.confirmDialog = { visible: !1, title: "", text: "", confirmLabel: "Confirm", resolve: null }, ln == null || ln(tr);
  }), document.addEventListener("fullscreenchange", Ot), Vi(), Hs();
  const nn = e.onConnectionsChange;
  let Dt = null, Gt = () => {
  };
  !n && t === "stickers" && (Gt = Vg(e, (Ve = "sync") => {
    Ve === "executed" && (gA(ye, ho), vt(), g && Ke()), ke(Ve);
  }, { editor: !0 }), Dt = function(...st) {
    typeof nn == "function" && nn.apply(this, st), vt(), ti(this, "connections");
  }, e.onConnectionsChange = Dt), n || Op.set(String(e.id ?? "0"), () => Ks());
  let In = null;
  async function ji() {
    return In || (In = (async () => {
      var st, tr, ln, fi, qr, Ys, Hd, qs, Gd;
      Op.delete(String(e.id ?? "0")), ht(), Ge(), n || Fe(), nt(), document.fullscreenElement === G && ((st = document.exitFullscreen) == null || st.call(document).catch(() => {
      })), document.removeEventListener("fullscreenchange", Ot), Hn(e).liveState = null;
      const Ve = r_(e);
      return (Ve == null ? void 0 : Ve.flushBeforeQueue) === an && (Ve.flushBeforeQueue = null), (fi = (ln = (tr = cg(e)) == null ? void 0 : tr.dom) == null ? void 0 : ln.requestDraw) == null || fi.call(ln), (Ys = (qr = e.graph) == null ? void 0 : qr.setDirtyCanvas) == null || Ys.call(qr, !0, !0), (Gd = (qs = (Hd = ir) == null ? void 0 : Hd.canvas) == null ? void 0 : qs.setDirty) == null || Gd.call(qs, !0, !0), Pn(), U.cancel(), Zt(), Ae(), Re(), ge.dispose(), er(!1), window.removeEventListener("keydown", Po, !0), window.removeEventListener("keydown", Mo, !0), window.removeEventListener("keydown", Ao, !0), window.removeEventListener("keyup", Ts, !0), window.removeEventListener("keydown", Qn, !0), window.removeEventListener("keyup", Ri, !0), document.removeEventListener("visibilitychange", Ls), window.removeEventListener("contextmenu", ko, !0), window.removeEventListener("keydown", Nn, !0), window.removeEventListener("keyup", Nn, !0), window.removeEventListener("blur", Rs), window.removeEventListener("keydown", Co, !0), window.removeEventListener("dragenter", Vs, !0), window.removeEventListener("dragover", zs, !0), window.removeEventListener("dragleave", $s, !0), window.removeEventListener("drop", js, !0), !n && t === "stickers" && (e.onConnectionsChange === Dt && (e.onConnectionsChange = nn), Gt()), ae.unmount(), pe.remove(), ct(), In = null, !0;
    })().catch((Ve) => (console.error("[PanoramaCutoutSync] closeEditor failed", Ve), In = null, !1)), In);
  }
  window.addEventListener("keydown", Po, !0), window.addEventListener("keydown", Mo, !0), window.addEventListener("keydown", Ao, !0), window.addEventListener("keyup", Ts, !0), window.addEventListener("keydown", Qn, !0), window.addEventListener("keyup", Ri, !0), document.addEventListener("visibilitychange", Ls), window.addEventListener("contextmenu", ko, !0), window.addEventListener("keydown", Nn, !0), window.addEventListener("keyup", Nn, !0), window.addEventListener("blur", Rs), window.addEventListener("keydown", Co, !0), G.addEventListener("pointerdown", (Ve) => {
    Ve.target === G && ji();
  });
  function En(Ve, st, { rollbackState: tr = !1 } = {}) {
    let ln = "";
    try {
      tr && (ln = JSON.stringify(V)), st();
    } catch (fi) {
      if (ln)
        try {
          const qr = JSON.parse(ln);
          Object.keys(V).forEach((Ys) => delete V[Ys]), Object.assign(V, qr), n || Fe();
        } catch (qr) {
          console.error(`[PanoramaStickers] editor boot step "${Ve}" rollback failed`, qr);
        }
      W.stageWarningDetail = `boot:${Ve}`, console.error(`[PanoramaStickers] editor boot step "${Ve}" failed`, fi);
    }
  }
  En("view", Je), En("cutout-focus", je), !n && t === "stickers" && En("external-sticker-sync", () => ke("open"), { rollbackState: !0 }), ui().catch((Ve) => {
    W.stageWarningDetail = "boot:asset-migration", console.error('[PanoramaStickers] editor boot step "asset-migration" failed', Ve);
  }), En("history", Ee), En("undo-redo", Us), En("paint-ui", Gs), En("side-panel", Xt), En("look-at-frame", zi), En("video-source", vt), En("canvas-size", xt), En("cursor", () => pt(be.pointerPos)), ut(), et();
}
ir.registerExtension(zw({
  app: ir,
  openEditor: yA,
  attachStickers: rk,
  attachCutout: ik,
  attachPreview: nk,
  restoreOutput: Gx,
  requestFrame: requestAnimationFrame,
  enableStickersPreview: pN
}));
